// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.9.13
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
}

function _0x36c9(_0x11a32a,_0x1f025a){_0x11a32a=_0x11a32a-(0x1*0x151+-0x94d+0x981);var _0x37844e=_0x5218();var _0x4d88aa=_0x37844e[_0x11a32a];if(_0x36c9['lqWffx']===undefined){var _0x5d443c=function(_0x8810a1){var _0x4c1166='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x2fb587='',_0x5c0c5f='';for(var _0x2e19e7=-0x1879+0xf95*-0x2+0x37a3*0x1,_0xaed191,_0x38f449,_0x2250db=0x5b*0x31+0x6*-0xf6+-0xba7;_0x38f449=_0x8810a1['charAt'](_0x2250db++);~_0x38f449&&(_0xaed191=_0x2e19e7%(-0x198f*0x1+-0x434+0x9ed*0x3)?_0xaed191*(-0x1cac+-0x23f9*-0x1+-0x70d)+_0x38f449:_0x38f449,_0x2e19e7++%(-0x84f+0xd01*-0x3+0x2f56))?_0x2fb587+=String['fromCharCode'](0x2*0xea2+-0x1fb*0x7+-0x8*0x1cd&_0xaed191>>(-(0x157f*0x1+-0x2677*-0x1+-0x1dfa*0x2)*_0x2e19e7&0x10d2+-0xfb*0xd+-0x40d)):0x124f*0x2+-0x1a75+-0xa29){_0x38f449=_0x4c1166['indexOf'](_0x38f449);}for(var _0x5ace33=-0x94a+-0xa3c+0x1386,_0x3c7204=_0x2fb587['length'];_0x5ace33<_0x3c7204;_0x5ace33++){_0x5c0c5f+='%'+('00'+_0x2fb587['charCodeAt'](_0x5ace33)['toString'](0x6dd*0x3+0x4f*0x5d+-0x313a))['slice'](-(0x19b5*0x1+-0x1dfb+0x448*0x1));}return decodeURIComponent(_0x5c0c5f);};_0x36c9['dsaCsG']=_0x5d443c,_0x36c9['pyhLNN']={},_0x36c9['lqWffx']=!![];}var _0x48937b=_0x37844e[0x1dcc*-0x1+-0x1*0x297+0x2063],_0x27fd75=_0x11a32a+_0x48937b,_0x479291=_0x36c9['pyhLNN'][_0x27fd75];return!_0x479291?(_0x4d88aa=_0x36c9['dsaCsG'](_0x4d88aa),_0x36c9['pyhLNN'][_0x27fd75]=_0x4d88aa):_0x4d88aa=_0x479291,_0x4d88aa;}(function(_0x6a1ce0,_0x2a66d6){var _0x5b5643=_0x36c9,_0x112b52=_0x6a1ce0();while(!![]){try{var _0x58f22d=-parseInt(_0x5b5643(0x1b1))/(-0x1*-0x1b16+0x1011*0x1+-0x1*0x2b26)+-parseInt(_0x5b5643(0x672))/(0x74b*0x4+-0xb*0xc4+0xa*-0x213)*(parseInt(_0x5b5643(0x9f5))/(0x1*0x2559+0x2*-0xcdb+-0xf8*0xc))+-parseInt(_0x5b5643(0x57b))/(-0x1*-0x9db+-0xae*0x22+-0x4f*-0x2b)*(-parseInt(_0x5b5643(0xbc4))/(-0x116f+0x1d97+-0xc23))+-parseInt(_0x5b5643(0xd39))/(-0x18a1+-0x1*0x1f67+0x380e)+-parseInt(_0x5b5643(0x468))/(0x25a1+-0x43a+-0x2160)+parseInt(_0x5b5643(0x912))/(-0x216f+-0x3c2*0x3+0x2cbd)*(parseInt(_0x5b5643(0x6a6))/(-0x1f77+0x2*0x21b+0x1f3*0xe))+-parseInt(_0x5b5643(0x25d))/(0x9*-0x15a+-0x25*-0xd+-0x371*-0x3)*(-parseInt(_0x5b5643(0x72c))/(0x2496+0x9*0x2d7+-0x3e1a));if(_0x58f22d===_0x2a66d6)break;else _0x112b52['push'](_0x112b52['shift']());}catch(_0x3f731c){_0x112b52['push'](_0x112b52['shift']());}}}(_0x5218,0x17865*0xa+-0x52dc2+-0xe2*0x5c),((()=>{'use strict';var _0x50f913=_0x36c9,_0x273fbd={'GlVLI':function(_0x5fd525,_0xfc9e72){return _0x5fd525!==_0xfc9e72;},'noDhB':function(_0x465e16,_0x10514d){return _0x465e16!==_0x10514d;},'pQKzA':_0x50f913(0x2c2),'WWhCs':'ifram'+'e','MCjyC':function(_0xdc57c0,_0x20911d){return _0xdc57c0<_0x20911d;},'MbpKG':_0x50f913(0x2a2)+'r','GiMVM':function(_0x32631d,_0x311728){return _0x32631d<=_0x311728;},'rohRr':_0x50f913(0xafa),'CGWlm':function(_0x2adbbf,_0x1709be){return _0x2adbbf===_0x1709be;},'plsXS':function(_0x29fc9c,_0x4b347a){return _0x29fc9c>>>_0x4b347a;},'srjGS':function(_0x352ee7,_0x32ede5){return _0x352ee7!==_0x32ede5;},'zeaWn':_0x50f913(0x8d9),'kuEsz':_0x50f913(0x2b2),'cjOYC':function(_0x383590,_0xac5360){return _0x383590&&_0xac5360;},'VyXGo':function(_0x5f50ce,_0x56da3b){return _0x5f50ce+_0x56da3b;},'beWSM':'none','mSHOv':_0x50f913(0xb39)+_0x50f913(0x694)+'v2','JgxAZ':'style','zVzfI':'sakur'+_0x50f913(0x694)+_0x50f913(0xc69)+'s','NJXLz':_0x50f913(0x987),'kpeWL':_0x50f913(0x1fb),'yqdjB':'The\x20h'+_0x50f913(0x953)+'fire\x20'+'on\x20th'+_0x50f913(0xbf8)+_0x50f913(0x923)+_0x50f913(0xb00)+'date('+');\x20no'+_0x50f913(0x314)+_0x50f913(0x69a)+_0x50f913(0x8fa)+'means','oFFMD':function(_0x2b3275,_0x315819){return _0x2b3275!==_0x315819;},'qRZTR':function(_0x5dfbbb){return _0x5dfbbb();},'nMtQm':'rOasp','AvpqO':_0x50f913(0x7e3)+'kura]'+_0x50f913(0xaf2)+_0x50f913(0x71e)+_0x50f913(0x1dc),'AEGQL':'min(5'+_0x50f913(0x3e9)+_0x50f913(0x4cc),'ONTWR':_0x50f913(0x567),'tZzCT':'htjkp','cEmvZ':'Iedxw','RvIrm':'#f7ee'+'f5','mPgFD':_0x50f913(0x60c)+'d','CpWNZ':'copy','vWUxE':'\x20\x203.\x20'+_0x50f913(0x9f2)+_0x50f913(0xb39)+_0x50f913(0x6a2)+'llwar'+'z.use'+'r.js\x20'+_0x50f913(0x302)+'he\x20ol'+_0x50f913(0x427)+_0x50f913(0x756)+_0x50f913(0x8d0)+'re\x0a','IyXZn':_0x50f913(0x5e1),'YxOYl':function(_0x1a5112,_0x491d3f){return _0x1a5112+_0x491d3f;},'kEdmo':function(_0x59759a,_0x3c12a7){return _0x59759a!==_0x3c12a7;},'qGwIC':function(_0x509af7,_0x4069cb){return _0x509af7(_0x4069cb);},'ADZwT':_0x50f913(0x7e3)+_0x50f913(0xc95)+'\x20Skil'+'lWarz'+'\x20repo'+'rt','nrZSx':function(_0x29bc5b,_0x5043e7){return _0x29bc5b+_0x5043e7;},'HzhBf':_0x50f913(0xa36)+'ion:f'+_0x50f913(0x8c1)+_0x50f913(0xd7b)+_0x50f913(0x5c4)+'top:1'+_0x50f913(0x2a4)+_0x50f913(0xaa3)+_0x50f913(0xd0d)+_0x50f913(0x818)+_0x50f913(0x4e6)+_0x50f913(0xb3a)+'th:mi'+'n(52v'+'w,620'+_0x50f913(0x9a1)+'ax-he'+_0x50f913(0xca6)+'78vh;','QvkdP':function(_0x5c5378,_0x15af75){return _0x5c5378+_0x15af75;},'weAGB':function(_0x3b9396,_0x93f4fb){return _0x3b9396+_0x93f4fb;},'Emplx':function(_0x2d7051,_0x2ca591){return _0x2d7051+_0x2ca591;},'myyac':function(_0x20b58b,_0x4d4609){return _0x20b58b+_0x4d4609;},'TdMIa':function(_0x2acd50,_0x4d9990){return _0x2acd50+_0x4d9990;},'bGBIw':function(_0x2e020c,_0x483324){return _0x2e020c+_0x483324;},'ajdYz':function(_0x4668ab,_0x3af29d){return _0x4668ab+_0x3af29d;},'sdFpv':function(_0x454602,_0x20d6cf){return _0x454602+_0x20d6cf;},'PkTQB':_0x50f913(0x8be)+'yle=\x22'+_0x50f913(0x205)+':','ubVSQ':_0x50f913(0x1dd)+_0x50f913(0xa00)+_0x50f913(0x7c8)+'uild\x22'+_0x50f913(0x725)+'e=\x22co'+_0x50f913(0x5d4)+'7a658'+_0x50f913(0x2eb)+'t-siz'+_0x50f913(0x992)+'x;pad'+_0x50f913(0x443)+_0x50f913(0x5f4)+_0x50f913(0x857)+_0x50f913(0x6b7)+_0x50f913(0xbd3)+'olid\x20'+'rgba('+'255,1'+'43,17'+_0x50f913(0x4cb)+_0x50f913(0x771)+'der-r'+'adius'+':999p'+_0x50f913(0x31b)+_0x50f913(0x96b)+'an>','BSclG':_0x50f913(0x3aa)+_0x50f913(0x6fe)+'color'+_0x50f913(0x9df)+'f1b;b'+'order'+_0x50f913(0x584)+_0x50f913(0x189)+_0x50f913(0xd73)+_0x50f913(0x443)+_0x50f913(0x84a)+_0x50f913(0x76f)+'ont-w'+_0x50f913(0x437)+_0x50f913(0x64e)+'curso'+'r:poi'+'nter;'+_0x50f913(0x89e)+_0x50f913(0x4db)+_0x50f913(0x4a6)+_0x50f913(0xba7),'UvFoM':_0x50f913(0x5e4)+_0x50f913(0x3e7)+'=\x22sw2'+_0x50f913(0x73b)+_0x50f913(0x661)+_0x50f913(0x69f)+'groun'+_0x50f913(0x484)+_0x50f913(0x434)+_0x50f913(0x441)+_0x50f913(0x70b)+':1px\x20'+'solid'+'\x20rgba'+_0x50f913(0xc4b)+_0x50f913(0x6a9)+_0x50f913(0x1fd)+_0x50f913(0xc50)+_0x50f913(0x1c9)+_0x50f913(0x4e4)+_0x50f913(0x3aa)+'er-ra'+_0x50f913(0x1b0)+_0x50f913(0x6af)+_0x50f913(0x2c7)+_0x50f913(0x759)+_0x50f913(0x657)+_0x50f913(0xb7b)+_0x50f913(0xb6b)+_0x50f913(0x4b5)+'\x22>x</'+'butto'+'n>','lRgPZ':'</div'+'>','aBkmY':_0x50f913(0x9c8)+_0x50f913(0x852)+'w2-bo'+_0x50f913(0x6ea)+_0x50f913(0x661)+_0x50f913(0x54b)+'lay:n'+_0x50f913(0x4e5)+'>','Jhoqx':';\x22>','mUXLe':_0x50f913(0x5e4)+_0x50f913(0x3e7)+_0x50f913(0x33c)+_0x50f913(0x9f4)+'\x22\x20sty'+'le=\x22b'+_0x50f913(0x451)+_0x50f913(0xbdc)+_0x50f913(0x568)+'paren'+_0x50f913(0x822)+_0x50f913(0xcb6)+_0x50f913(0x1e8)+_0x50f913(0xc55)+_0x50f913(0x6d6)+_0x50f913(0xa94)+_0x50f913(0xd40)+_0x50f913(0x9cc)+_0x50f913(0x205)+_0x50f913(0x90b)+'ef5;b'+'order'+'-radi'+_0x50f913(0x189)+_0x50f913(0xd73)+_0x50f913(0x443)+'4px\x209'+_0x50f913(0x32c)+_0x50f913(0x8da)+_0x50f913(0x65c)+_0x50f913(0x1ea)+_0x50f913(0x9b7)+_0x50f913(0xc49)+_0x50f913(0x8ef)+'butto'+'n>','difaW':_0x50f913(0x185)+_0x50f913(0x852)+_0x50f913(0x59d)+_0x50f913(0x29d)+_0x50f913(0xaed)+_0x50f913(0x448)+'n:0;p'+'addin'+'g:10p'+_0x50f913(0x1a2)+_0x50f913(0x8d1)+_0x50f913(0x7e2)+_0x50f913(0xc27)+';flex'+_0x50f913(0x391)+_0x50f913(0x990)+'white'+'-spac'+'e:pre'+_0x50f913(0x8b6)+_0x50f913(0x1df)+'-brea'+'k:bre'+_0x50f913(0x93f)+'rd;fo'+_0x50f913(0x686)+'herit'+';','YqgbK':_0x50f913(0x9ac)+'copy','PzwXJ':_0x50f913(0x9ac)+'body','mYEDU':_0x50f913(0x9ac)+'facto'+'rlabe'+'l','rYISq':'#sw2-'+_0x50f913(0x547),'IXkWR':function(_0x5e5fe5,_0x1cc306){return _0x5e5fe5+_0x1cc306;},'WrodH':function(_0x4fb2cd,_0x51f524){return _0x4fb2cd/_0x51f524;},'aUSfc':_0x50f913(0x4de),'xHqOR':function(_0x5f2d85,_0x5c9624){return _0x5f2d85+_0x5c9624;},'KAdFK':function(_0x4c2ed8,_0x4ea068){return _0x4c2ed8+_0x4ea068;},'JRYOa':_0x50f913(0xbf2)+'\x20\x20\x20\x20','PVfle':'no\x20Up'+_0x50f913(0x7fb)+'ran\x20y'+'et,\x20o'+_0x50f913(0x8c2)+_0x50f913(0x2cb)+_0x50f913(0x5bb)+'\x20did\x20'+'not\x20m'+'atch.','zlMMm':'\x20@\x20','GbOop':function(_0x5be55b,_0x8b25a3){return _0x5be55b<_0x8b25a3;},'BknJx':function(_0x477c4c,_0x4b6824){return _0x477c4c+_0x4b6824;},'rgXbG':function(_0x4d387b,_0x1ea544){return _0x4d387b-_0x1ea544;},'FDNwT':_0x50f913(0x956)+_0x50f913(0x61f)+_0x50f913(0xd2b)+_0x50f913(0x3f9)+'\x20\x20\x20va'+_0x50f913(0xc53)+_0x50f913(0x3f9)+_0x50f913(0x3f9)+'raw','qILyy':function(_0x2c72d1,_0x1df5ce){return _0x2c72d1*_0x1df5ce;},'UkPtn':function(_0x44a1b3,_0x549de7){return _0x44a1b3+_0x549de7;},'dHkbX':function(_0x1cac73,_0x1ae2b7){return _0x1cac73+_0x1ae2b7;},'ktIdV':function(_0x28230f,_0x5ed27a){return _0x28230f+_0x5ed27a;},'PwBFC':_0x50f913(0xb60)+_0x50f913(0x58c),'nUKpB':function(_0x540bec,_0x3dfc3d){return _0x540bec<_0x3dfc3d;},'FubYk':function(_0x1c4e13,_0xda8fea){return _0x1c4e13+_0xda8fea;},'UUxhp':function(_0x2a2902,_0x226fd4){return _0x2a2902!==_0x226fd4;},'ZncWM':_0x50f913(0x4bb),'jzUUy':_0x50f913(0xbba)+_0x50f913(0xbbb)+_0x50f913(0x7f9)+_0x50f913(0x2cd)+'sert)','GAOSq':function(_0x474e92,_0xd099d2){return _0x474e92===_0xd099d2;},'QWdqh':_0x50f913(0xa71),'WovVS':_0x50f913(0xca9),'Rishn':'strin'+'g','mzPrd':function(_0x1d9bb6,_0x136dac){return _0x1d9bb6===_0x136dac;},'FkPbY':_0x50f913(0x932),'kJHhM':_0x50f913(0x351),'oENAJ':'\x20on\x20','ELINq':function(_0x42b5c2,_0x32a58e){return _0x42b5c2<_0x32a58e;},'TMode':'RKDTt','xsGUd':_0x50f913(0x6dc),'IIooU':function(_0x24d58c,_0x5922e9){return _0x24d58c===_0x5922e9;},'SrfEp':_0x50f913(0x593),'biIoQ':_0x50f913(0xd18),'jUnyl':function(_0x1e25cc,_0x42eda9){return _0x1e25cc>_0x42eda9;},'gqFJT':_0x50f913(0x429),'jjQsK':_0x50f913(0x893),'QlLtZ':_0x50f913(0x48f)+_0x50f913(0x6b5),'iqCoh':function(_0x209976,_0x19a24a){return _0x209976===_0x19a24a;},'MenSJ':'edDzm','HYkUp':_0x50f913(0xa29),'HUYqK':function(_0x223f00,_0x2b7128){return _0x223f00===_0x2b7128;},'XGpuh':function(_0x5b8c65,_0x3cdbc8){return _0x5b8c65(_0x3cdbc8);},'RZQjI':_0x50f913(0x75d)+_0x50f913(0xbb3),'uqMCW':'insta'+'ntiat'+'e','keZyC':'insta'+_0x50f913(0x469)+'eStre'+'aming','UMzyE':'open','ZchRZ':'5|2|3'+'|6|0|'+'4|1','SUCAT':_0x50f913(0xb39)+_0x50f913(0x694)+_0x50f913(0x226)+'b','ANHvn':_0x50f913(0x8b7),'ceEvL':function(_0x29187c,_0xd688f7){return _0x29187c===_0xd688f7;},'ynsVl':'hBxsw','Lxhou':function(_0x3029fe,_0x338cbf){return _0x3029fe(_0x338cbf);},'uvRjp':function(_0x3906d4,_0x31835c,_0xd85408,_0x4cbf68){return _0x3906d4(_0x31835c,_0xd85408,_0x4cbf68);},'Nxjqp':_0x50f913(0x5d0),'ICkCL':_0x50f913(0x236)+_0x50f913(0x623)+'ame','YdMId':'windo'+'w\x20glo'+_0x50f913(0x42e),'ddeGG':_0x50f913(0x51d),'ZonQg':function(_0x449368,_0x1dbd26){return _0x449368===_0x1dbd26;},'SqRWV':'RzTkK','QSdFE':function(_0x45223b,_0xd2696a){return _0x45223b+_0xd2696a;},'iUxTs':function(_0x26b11e,_0x205d26){return _0x26b11e+_0x205d26;},'nDxlr':_0x50f913(0xd6e)+'w.','qfvcv':_0x50f913(0x548)+'le','wyHhV':function(_0x593205,_0x3806de){return _0x593205|_0x3806de;},'jTASe':function(_0x38c47e,_0x3ba64f){return _0x38c47e===_0x3ba64f;},'yOKtz':_0x50f913(0xca4)+'ra-sw'+'-hud{'+_0x50f913(0xc59)+_0x50f913(0x1e0)+'l}','tdmxS':function(_0x8de63b,_0x33dd7b){return _0x8de63b!==_0x33dd7b;},'hVOuR':function(_0x1e00cd){return _0x1e00cd();},'EzBvP':'ewNNl','SprCH':function(_0x7ecbd4,_0x2476aa){return _0x7ecbd4>_0x2476aa;},'wBkaf':function(_0x98e38b,_0x529280){return _0x98e38b+_0x529280;},'rYMbL':function(_0x950745,_0x18bd65){return _0x950745!==_0x18bd65;},'aCtel':_0x50f913(0x8d3),'vSTMn':_0x50f913(0x8d5),'woWVZ':'u32','XCIzi':_0x50f913(0x65d),'ctARN':function(_0x33d017,_0x58e70e){return _0x33d017!==_0x58e70e;},'jNXrT':'KFWjl','Ryqjl':function(_0x4febbb,_0x16a6fa){return _0x4febbb&_0x16a6fa;},'bjDMb':_0x50f913(0xcf7),'iolpV':function(_0x1e00c4,_0x3158a3){return _0x1e00c4|_0x3158a3;},'tphhA':function(_0x453f0f,_0x14edf9){return _0x453f0f|_0x14edf9;},'jRTVQ':function(_0x352ca5,_0x2bba32){return _0x352ca5<_0x2bba32;},'jUpEZ':function(_0x409a28){return _0x409a28();},'gLIjh':function(_0x5eeede,_0x395f24){return _0x5eeede<_0x395f24;},'OVPBR':function(_0xa993b4,_0x1ba700){return _0xa993b4+_0x1ba700;},'IQRLo':'\x20past'+'\x20heap'+_0x50f913(0x7bb)+'0x','Ceewf':_0x50f913(0x6cf),'DRMiZ':function(_0xc0f10,_0xf55767,_0x48c8aa,_0x1122e2){return _0xc0f10(_0xf55767,_0x48c8aa,_0x1122e2);},'fxgzI':_0x50f913(0xb34),'CBPuZ':function(_0x5ed7e2,_0x532b62){return _0x5ed7e2===_0x532b62;},'wwjGC':'obfF','KKPbT':function(_0x3d224b,_0x31aec7){return _0x3d224b===_0x31aec7;},'ggthb':function(_0x351765,_0x32fbce){return _0x351765&_0x32fbce;},'hrSUG':function(_0x2c5e68,_0x12d0fd){return _0x2c5e68^_0x12d0fd;},'zbEGs':function(_0x540a58,_0x37545d,_0x29a420){return _0x540a58(_0x37545d,_0x29a420);},'hITWF':function(_0x1ba68f,_0x4ee105){return _0x1ba68f+_0x4ee105;},'EFPBk':function(_0x37e36a,_0x45779b){return _0x37e36a+_0x45779b;},'eqMBM':function(_0x231a94,_0x2af136){return _0x231a94+_0x2af136;},'bMDUG':function(_0x418cbf,_0xc69dea){return _0x418cbf+_0xc69dea;},'zDCAO':function(_0x2515cd,_0x50e197){return _0x2515cd===_0x50e197;},'rUHgk':'f32','FYgXG':function(_0x367b4a,_0x197e96){return _0x367b4a===_0x197e96;},'RlGnM':function(_0x49c9b2,_0x4ade8e){return _0x49c9b2|_0x4ade8e;},'fuarh':function(_0x433205){return _0x433205();},'Uszsn':_0x50f913(0x76a),'CmuZv':function(_0x492a6f,_0x3174df){return _0x492a6f===_0x3174df;},'LVnrl':function(_0x1e9820,_0x435a9d){return _0x1e9820+_0x435a9d;},'tPCHi':function(_0x28efd4,_0xcd7975){return _0x28efd4^_0xcd7975;},'SGQkv':function(_0x22ee76,_0x4b1c1c){return _0x22ee76-_0x4b1c1c;},'cNkth':function(_0xafe078,_0x3dd277){return _0xafe078*_0x3dd277;},'DCVMy':function(_0x35ca98,_0x380c89){return _0x35ca98!==_0x380c89;},'cPWTc':function(_0x3cf8fe,_0x39b42d){return _0x3cf8fe(_0x39b42d);},'XkCRy':function(_0x17cc27,_0x32c96d){return _0x17cc27!==_0x32c96d;},'vaSLs':_0x50f913(0x94e)+'usibl'+'e','TcMLs':'TRjqP','JqwTG':function(_0x286401,_0x2ebba7){return _0x286401+_0x2ebba7;},'Hdfxe':'no\x20gr'+'oup\x20o'+'f\x20','ejQeh':_0x50f913(0xc3d)+_0x50f913(0x5d3)+_0x50f913(0x5f7)+_0x50f913(0xc7c)+'ed','agTox':function(_0x5103bd,_0x5a1699){return _0x5103bd*_0x5a1699;},'KSguB':_0x50f913(0x51a),'AEoXB':_0x50f913(0x490),'vEiNB':_0x50f913(0x3cc)+'ntrol'+'ler','jhwlP':_0x50f913(0xa7e),'QLgEn':function(_0x296735,_0x32905f){return _0x296735<_0x32905f;},'hLSVZ':'WSHaM','VOLJK':'yUJvd','dcDYh':_0x50f913(0x500),'zklTf':_0x50f913(0x931),'CuqAe':function(_0x38d518,_0x5c06c6){return _0x38d518===_0x5c06c6;},'WfMEH':'qDOkr','vmZVI':_0x50f913(0x47f),'nPGJy':'Mouse'+_0x50f913(0x33b),'NVOmI':function(_0x5e9e6a,_0x246a47){return _0x5e9e6a+_0x246a47;},'BbbVv':function(_0x196e21,_0x10b2f5){return _0x196e21-_0x10b2f5;},'SivGT':function(_0x1a3882,_0x496220){return _0x1a3882>_0x496220;},'PVdFw':function(_0x1ff184,_0x2a8ee1){return _0x1ff184===_0x2a8ee1;},'obvDt':function(_0x450d74,_0x70ee18){return _0x450d74(_0x70ee18);},'ExQjM':_0x50f913(0xbed),'sGtrb':function(_0x25456b,_0x27cbce){return _0x25456b>=_0x27cbce;},'opXaj':function(_0xfc75e3,_0x150c28){return _0xfc75e3<=_0x150c28;},'Dcslf':'b,a','PrUqj':'oBQgO','latDi':function(_0x2352ac,_0xb6423c){return _0x2352ac+_0xb6423c;},'piqpm':'unres'+_0x50f913(0x28a)+'\x20(','pbUCD':_0x50f913(0x792)+'er\x20bo'+_0x50f913(0xaae),'Ralgt':_0x50f913(0x2c3)+'Look+'+'camer'+'a','mhjpL':function(_0x87d44a,_0x41f3b1){return _0x87d44a||_0x41f3b1;},'BcPpa':function(_0xe340b5,_0x16cb73){return _0xe340b5===_0x16cb73;},'vOuiT':function(_0x245e7e,_0x21702e){return _0x245e7e*_0x21702e;},'wxbYq':function(_0x46e804,_0x3b8e5c){return _0x46e804+_0x3b8e5c;},'kEbDW':function(_0x5ebc56,_0x2c6dd9){return _0x5ebc56+_0x2c6dd9;},'ycNhk':'no\x20en'+'emies'+_0x50f913(0x1f2)+_0x50f913(0x36a)+'y?)\x20\x20'+_0x50f913(0xc85),'AuBTZ':'#8d7a'+'99','CBuvh':'\x20hook'+'s\x20wer'+'e\x20eve'+'n\x20SEE'+'N\x20by\x20'+_0x50f913(0x642)+_0x50f913(0xcdf)+'apply'+_0x50f913(0xd17)+'\x20','ZKsyc':function(_0x2a96f9,_0x29c0c3){return _0x2a96f9+_0x29c0c3;},'FvsAs':_0x50f913(0x9b1)+_0x50f913(0x915)+_0x50f913(0x9b9)+'fo*)\x20'+_0x50f913(0x43b)+'id\x20do'+_0x50f913(0xd0c)+_0x50f913(0x695)+_0x50f913(0x799)+_0x50f913(0xb84)+'ild.','CDNFo':function(_0x55d271,_0x16ce43,_0x5be6e9,_0x45a79b){return _0x55d271(_0x16ce43,_0x5be6e9,_0x45a79b);},'gXNIs':function(_0x30e454,_0x30d61a){return _0x30e454+_0x30d61a;},'zDJcF':function(_0xee2069,_0x1aeab1){return _0xee2069<_0x1aeab1;},'mcQkr':function(_0x196f67,_0x326d2a){return _0x196f67!==_0x326d2a;},'sxgsD':function(_0x38e8b9,_0x175538,_0x22440a){return _0x38e8b9(_0x175538,_0x22440a);},'JwWGy':function(_0x3b0fa1,_0x5e9530){return _0x3b0fa1+_0x5e9530;},'iQvQP':function(_0x2bde0f,_0x3b1d7d,_0x29afd3){return _0x2bde0f(_0x3b1d7d,_0x29afd3);},'RMccu':function(_0x34fd4e,_0x22904a){return _0x34fd4e!==_0x22904a;},'ZUFuJ':function(_0xfc47e2,_0x579e0b,_0x5e613d){return _0xfc47e2(_0x579e0b,_0x5e613d);},'jauVr':'mMhtM','nmfFu':function(_0x5c8257,_0x19c7ec){return _0x5c8257-_0x19c7ec;},'FRIpC':'Healt'+_0x50f913(0xa6e)+'pt','FdXim':'NPC_C'+_0x50f913(0x404)+_0x50f913(0x630),'vNmCZ':function(_0x2b042f,_0x365920){return _0x2b042f-_0x365920;},'CMLkL':_0x50f913(0x67d),'vtEqb':function(_0x40a816,_0x26f125){return _0x40a816 in _0x26f125;},'ToKgC':function(_0x1c72d8,_0x56f340){return _0x1c72d8===_0x56f340;},'ibMXE':function(_0x4263f2,_0x1290e0){return _0x4263f2>>>_0x1290e0;},'jjCXk':function(_0xcf6bb,_0x3bd4fd){return _0xcf6bb>>>_0x3bd4fd;},'xRBcb':function(_0x25c3fa,_0x4562c4){return _0x25c3fa===_0x4562c4;},'aPWrm':_0x50f913(0x998),'bVCRC':function(_0x89e27d,_0x1087ec){return _0x89e27d+_0x1087ec;},'hWVxj':_0x50f913(0xd60),'tPUVK':function(_0x49a748,_0x579047){return _0x49a748!==_0x579047;},'olklK':_0x50f913(0xc4a),'uGrhb':function(_0x560a86,_0x57b9fb,_0xdb2dd,_0x49b68e){return _0x560a86(_0x57b9fb,_0xdb2dd,_0x49b68e);},'sdJJV':function(_0x568eae,_0x14b52d){return _0x568eae/_0x14b52d;},'jmEHU':_0x50f913(0x7e3)+_0x50f913(0xc95)+'\x20menu'+_0x50f913(0x8ee)+_0x50f913(0x266)+'le','ibobV':function(_0x5a2134,_0x311cd8){return _0x5a2134+_0x311cd8;},'unqfn':function(_0x15540a,_0x2cf267){return _0x15540a<_0x2cf267;},'ARixd':_0x50f913(0x561),'XKJkB':function(_0x258068,_0x252aea){return _0x258068===_0x252aea;},'WrwiC':function(_0x16c117,_0x2829f1){return _0x16c117===_0x2829f1;},'pRocL':function(_0x2ee191,_0x1b6ad3){return _0x2ee191!==_0x1b6ad3;},'MaYWv':'QHROr','lkSYP':function(_0x438222,_0x550724){return _0x438222===_0x550724;},'FKVdI':_0x50f913(0x30f),'pIrlV':function(_0x116b74,_0x107e0c){return _0x116b74+_0x107e0c;},'NnoFQ':function(_0xb759a7,_0x362664){return _0xb759a7+_0x362664;},'SQtHz':function(_0x3383c3,_0x5504d1){return _0x3383c3+_0x5504d1;},'RwKCb':function(_0x144f27,_0xa707eb){return _0x144f27+_0xa707eb;},'RZsUW':_0x50f913(0xcda),'tvSie':function(_0x5dfff0,_0x3302fa){return _0x5dfff0!==_0x3302fa;},'XDNLi':function(_0x306462,_0x1d4002){return _0x306462===_0x1d4002;},'fFgMQ':function(_0x25bed4,_0x3aeb2e){return _0x25bed4!==_0x3aeb2e;},'brUSY':function(_0x4d3461,_0x4456eb){return _0x4d3461(_0x4456eb);},'zaNDy':_0x50f913(0x81f),'cVJym':_0x50f913(0x26a)+_0x50f913(0x5c5)+'6|1','qNmEz':'obfB','iUJaO':function(_0x2f0511,_0x5247c0){return _0x2f0511!==_0x5247c0;},'Lmhqa':function(_0x4111d3,_0x42b167){return _0x4111d3(_0x42b167);},'krfhX':function(_0x5775bb,_0x4ce0cc){return _0x5775bb<=_0x4ce0cc;},'ogiqU':function(_0x4253d8,_0x4e95b3){return _0x4253d8===_0x4e95b3;},'wjulA':function(_0x5e1f48,_0x5bcbd4){return _0x5e1f48(_0x5bcbd4);},'aFKNF':'Healt'+'h','crOVB':function(_0x18a2d2,_0x24632){return _0x18a2d2===_0x24632;},'EwTHq':'unity'+_0x50f913(0xb6f)+_0x50f913(0x946),'wSBqe':'unity'+'Game','GfnRK':_0x50f913(0x3b0),'lhTvj':function(_0x281c0f,_0x251375){return _0x281c0f===_0x251375;},'cQwaI':function(_0x58a6c2,_0x6a0a1){return _0x58a6c2===_0x6a0a1;},'mYlSX':_0x50f913(0x675),'QZfdn':function(_0x333c03,_0xc7d1b1){return _0x333c03+_0xc7d1b1;},'wJQKh':_0x50f913(0x648)+'·\x20','wLChR':function(_0x4b4c98,_0x40b4b5){return _0x4b4c98!==_0x40b4b5;},'JGZGJ':'clOJX','nTClm':'speed','RUJuU':function(_0x28d6ab,_0x599312,_0x2a910a){return _0x28d6ab(_0x599312,_0x2a910a);},'FIeQN':function(_0x471acb,_0x16b9c1,_0x51bc2f){return _0x471acb(_0x16b9c1,_0x51bc2f);},'BFjUp':_0x50f913(0x879)+'t','wtWtU':function(_0x2691e5){return _0x2691e5();},'dtEeT':_0x50f913(0xd3c),'Gisvv':function(_0x3106a0,_0x3f6121){return _0x3106a0(_0x3f6121);},'QcTsi':'snaps'+_0x50f913(0x900),'IvcCu':function(_0x4712dd,_0x668a6d){return _0x4712dd+_0x668a6d;},'rUKsF':_0x50f913(0x1f5),'uIDre':_0x50f913(0xb2f)+'v\x20','VDosX':_0x50f913(0xb39)+'a-sw-'+'hud-c'+'ss','zehbi':'sakur'+_0x50f913(0x694)+'hud','Heorr':function(_0x40629a,_0x5e18c4){return _0x40629a+_0x5e18c4;},'DBqlX':_0x50f913(0x754)+_0x50f913(0x1e3)+_0x50f913(0x6bb)+_0x50f913(0x49b)+'2,29,'+_0x50f913(0xabb)+'borde'+_0x50f913(0x46c)+_0x50f913(0x708)+_0x50f913(0x945)+_0x50f913(0x393)+_0x50f913(0x716)+'177,.'+'45);b'+_0x50f913(0x70b)+'-radi'+_0x50f913(0x200)+_0x50f913(0x3a1),'yEkCT':_0x50f913(0x9c8)+_0x50f913(0x56c)+_0x50f913(0x2d5)+'2\x22\x20st'+'yle=\x22'+'color'+_0x50f913(0xa35)+_0x50f913(0x83f)+'ax-wi'+'dth:2'+_0x50f913(0x6d0)+_0x50f913(0x2c6)+'iv>','NWklL':function(_0x36036b,_0x4f1353){return _0x36036b+_0x4f1353;},'yKYxR':function(_0x59091b,_0x241be1){return _0x59091b+_0x241be1;},'HPGif':function(_0x593d5a,_0x3a2714){return _0x593d5a+_0x3a2714;},'GWUWk':function(_0x771489,_0x533f67){return _0x771489+_0x533f67;},'DEZzb':'<div\x20'+'data-'+'a=\x22ba'+_0x50f913(0xc31)+'yle=\x22'+_0x50f913(0x555)+'ay:fl'+_0x50f913(0x6cd)+_0x50f913(0x426)+_0x50f913(0xbe5)+_0x50f913(0x5d2)+_0x50f913(0x8ff)+_0x50f913(0x4b5)+_0x50f913(0xcb4)+_0x50f913(0x87b)+_0x50f913(0xa16)+_0x50f913(0x5f8)+_0x50f913(0x222)+'290px'+';\x22>','zXagZ':_0x50f913(0x1dd)+_0x50f913(0x8f5)+_0x50f913(0x68e)+'v\x22\x20st'+_0x50f913(0xaed)+_0x50f913(0x205)+_0x50f913(0x319)+'9c9;m'+'in-wi'+_0x50f913(0x4ae)+_0x50f913(0x885)+'>2.0x'+'</spa'+'n>','QqilT':'color'+_0x50f913(0x90b)+'ef5;b'+_0x50f913(0x70b)+'-radi'+_0x50f913(0x870)+_0x50f913(0xd73)+_0x50f913(0x443)+'2px\x207'+_0x50f913(0x32c)+'rsor:'+_0x50f913(0x65c)+_0x50f913(0x381)+'nt:in'+_0x50f913(0xa51)+_0x50f913(0x516)+'ap</b'+_0x50f913(0xcd7)+'>','YZFTT':_0x50f913(0x5e4)+_0x50f913(0xa44)+_0x50f913(0x3f0)+_0x50f913(0x2d7)+_0x50f913(0x9c5)+'le=\x22m'+'argin'+_0x50f913(0x88d)+':auto'+_0x50f913(0x9e9)+'groun'+_0x50f913(0x484)+_0x50f913(0x434)+'ent;b'+_0x50f913(0x70b)+':1px\x20'+'solid'+'\x20rgba'+_0x50f913(0xc4b)+_0x50f913(0x6a9)+'77,.4'+_0x50f913(0xaf1),'sSVOx':_0x50f913(0x205)+':#f7e'+_0x50f913(0x5a1)+'order'+_0x50f913(0x584)+'us:6p'+_0x50f913(0xd73)+_0x50f913(0x443)+'1px\x206'+_0x50f913(0x32c)+'rsor:'+_0x50f913(0x65c)+_0x50f913(0x381)+_0x50f913(0x686)+'herit'+_0x50f913(0xbb4)+'/butt'+_0x50f913(0x56a),'cNBkw':function(_0x3d60c7,_0x1138c5){return _0x3d60c7(_0x1138c5);},'ZoegT':function(_0x4d3ef8,_0x111602){return _0x4d3ef8(_0x111602);},'gHfbo':_0x50f913(0xbaa),'KyJWT':function(_0x494652,_0x24164b){return _0x494652(_0x24164b);},'RqRfx':_0x50f913(0x68c),'SAvEw':_0x50f913(0xb0a),'HCsmQ':function(_0x46d25a,_0x5ab967){return _0x46d25a(_0x5ab967);},'zRfgF':function(_0x2ce7bd,_0x38dcf2){return _0x2ce7bd+_0x38dcf2;},'BCtyX':function(_0x4e2114){return _0x4e2114();},'rnbTm':function(_0x2c1c4d,_0x160ed0){return _0x2c1c4d(_0x160ed0);},'CuSyv':function(_0x39e7b4,_0x2dd5e0){return _0x39e7b4(_0x2dd5e0);},'nwLdj':function(_0x191740){return _0x191740();},'vFcRW':function(_0x430642,_0x6dee76){return _0x430642===_0x6dee76;},'fqBcJ':'gGHnR','eNeXW':_0x50f913(0x8e6)+_0x50f913(0x699),'piyDd':_0x50f913(0x568)+'paren'+'t','WWWWx':'#2a0f'+'1b','UuriX':_0x50f913(0x9aa),'luKwg':function(_0x53ec22){return _0x53ec22();},'JwDEr':_0x50f913(0x560),'kNpeT':function(_0x30fe91,_0x4b9777){return _0x30fe91===_0x4b9777;},'vhyaa':_0x50f913(0x1f0),'hKSnV':function(_0x102ed6,_0x545b37){return _0x102ed6-_0x545b37;},'JaUTO':'Brack'+'etRig'+'ht','IxRdL':function(_0x43e326,_0x2e6658){return _0x43e326!==_0x2e6658;},'rZgke':'kKMcb','WXFpL':function(_0xcd5040,_0xc3f872){return _0xcd5040+_0xc3f872;},'mldBT':'Brack'+_0x50f913(0x82d)+'t','BOXFi':function(_0x1f7e62,_0x2f3d46,_0x14f978){return _0x1f7e62(_0x2f3d46,_0x14f978);},'YPQLA':function(_0x3a317c,_0x2e9ea9){return _0x3a317c+_0x2e9ea9;},'qgwXU':function(_0x4a14b5,_0x17ff3b){return _0x4a14b5>>>_0x17ff3b;},'pUlMB':_0x50f913(0x97a),'UTMQF':'ZOwtb','kdCmY':function(_0x2f1397,_0x27442c){return _0x2f1397+_0x27442c;},'DSSBu':function(_0x175f1d,_0x336c84,_0x1222d9,_0x4940b3){return _0x175f1d(_0x336c84,_0x1222d9,_0x4940b3);},'KXLiZ':function(_0x2cf797,_0x4cc518){return _0x2cf797!==_0x4cc518;},'RHFgq':function(_0x3f7cb0,_0x2b5f76,_0x539477){return _0x3f7cb0(_0x2b5f76,_0x539477);},'sjbaI':function(_0xa4d90b,_0x334ce7){return _0xa4d90b-_0x334ce7;},'dCDRv':function(_0x5cb15a,_0x413a53){return _0x5cb15a>_0x413a53;},'RJiyV':function(_0x4af02c,_0x5e43e9){return _0x4af02c(_0x5e43e9);},'xHZaf':_0x50f913(0xac9),'MNGvb':function(_0x123254){return _0x123254();},'XwAGK':_0x50f913(0x265),'eUFtl':function(_0x5afc16,_0x4137bc){return _0x5afc16+_0x4137bc;},'xdJBu':'sette'+_0x50f913(0x364)+'r\x20(','SIzkj':function(_0x4f5ed4,_0x576e1c){return _0x4f5ed4!==_0x576e1c;},'cjvfd':'view\x20'+_0x50f913(0x500)+_0x50f913(0x49d)+_0x50f913(0x1d8)+'le','bHdeW':function(_0x4cb63f,_0x1bef89){return _0x4cb63f<_0x1bef89;},'zMAGb':'\x20out\x20'+'of\x20ra'+_0x50f913(0x359),'njxtj':function(_0x4de4d6,_0x20c5a6){return _0x4de4d6/_0x20c5a6;},'WQBof':function(_0x46b86b,_0x23720e){return _0x46b86b+_0x23720e;},'XMNcy':function(_0x159412,_0x5c0b08){return _0x159412/_0x5c0b08;},'WOYEh':function(_0x36d75a,_0x2f39d8){return _0x36d75a/_0x2f39d8;},'tFLDk':function(_0x3ee17b,_0x197cfd){return _0x3ee17b/_0x197cfd;},'CaaVQ':function(_0x3c614f,_0x4eb2c6){return _0x3c614f*_0x4eb2c6;},'dJOgE':function(_0x5e0060,_0x235ca1){return _0x5e0060*_0x235ca1;},'xNEmw':function(_0x234093,_0x181e71){return _0x234093*_0x181e71;},'ioAJX':function(_0x4db72d,_0x413b52){return _0x4db72d!=_0x413b52;},'dbhAS':_0x50f913(0x777)+'ng>','nDadL':'true','ZKGvQ':'2|8|0'+'|5|1|'+_0x50f913(0x54a)+'|4','VKZSG':_0x50f913(0xa67)+'n','pBDsw':function(_0x181493,_0x14b6ca){return _0x181493(_0x14b6ca);},'sgTGo':function(_0x4cb7de,_0x4ef92b){return _0x4cb7de(_0x4ef92b);},'AGctM':function(_0x229058,_0x35b883){return _0x229058(_0x35b883);},'mcYqT':'sk-ra'+_0x50f913(0x359),'pEUVa':'input','UCegR':'sk-sl'+'ider','VwDyx':function(_0x3e9543,_0x5edd26){return _0x3e9543(_0x5edd26);},'TXBEj':function(_0x276521,_0x97c7f9){return _0x276521===_0x97c7f9;},'JRrSU':_0x50f913(0x300),'vAuCI':_0x50f913(0xa32),'fqZgx':function(_0x376353,_0x5adac6,_0x2236ce){return _0x376353(_0x5adac6,_0x2236ce);},'ywoug':function(_0x3b1c8a,_0x1dbf1b,_0x594d37,_0x104ffd){return _0x3b1c8a(_0x1dbf1b,_0x594d37,_0x104ffd);},'pKmHo':'sk-la'+_0x50f913(0x5ec),'evyZY':function(_0x2e7bba,_0x3398d4){return _0x2e7bba+_0x3398d4;},'tbNWv':function(_0x1f3d16,_0x5d458a){return _0x1f3d16+_0x5d458a;},'DBYWQ':_0x50f913(0x496)+'ER\x20UW'+_0x50f913(0x967)+_0x50f913(0xbf4)+'OK\x20OV'+_0x50f913(0x93d)+_0x50f913(0x6b4)+_0x50f913(0x480)+_0x50f913(0x396)+_0x50f913(0x53c)+_0x50f913(0xcdf)+'Runti'+_0x50f913(0x27e)+_0x50f913(0x813)+'d\x20was'+'\x20','noJzK':'the\x20g'+'ame\x20w'+'hile\x20'+_0x50f913(0xcf9)+_0x50f913(0xd59)+_0x50f913(0xb3e)+'\x20it\x20i'+_0x50f913(0xb0f)+'haned'+'.\x20Dis'+'able\x20'+_0x50f913(0x92b)+_0x50f913(0xd70)+'r\x20','VtPtF':function(_0xbbc165,_0x578237){return _0xbbc165===_0x578237;},'NPjRu':function(_0x2bcb75,_0x1d00b1){return _0x2bcb75/_0x1d00b1;},'gYcVZ':'xZpiD','NRinc':function(_0x142cb0,_0x5be25d){return _0x142cb0+_0x5be25d;},'vYBFM':'\x20writ'+'es','pZtpa':'Multi'+_0x50f913(0x284)+'\x20move'+_0x50f913(0x44d)+_0x50f913(0x976)+'\x20fiel'+_0x50f913(0x31d)+_0x50f913(0x7c1)+_0x50f913(0x437)+_0x50f913(0xa64)+'p\x20and'+'\x20jump'+'\x20are\x20'+_0x50f913(0x801)+'ed.','nieSM':function(_0x405164,_0x462808){return _0x405164===_0x462808;},'hwmrD':'siBGZ','aWAZD':'ZXkGX','sFLDg':_0x50f913(0x213),'tloIe':function(_0x160ef9,_0x2cc0ef){return _0x160ef9!==_0x2cc0ef;},'lbhyq':function(_0x28fbea,_0x21d522){return _0x28fbea+_0x21d522;},'GjHbr':'0\x20of\x20','hSzGg':_0x50f913(0x5ee),'gUigI':function(_0x4a77bc,_0x325b76){return _0x4a77bc+_0x325b76;},'VhUAA':function(_0x2127fc,_0x3ff30f){return _0x2127fc(_0x3ff30f);},'oxdud':function(_0x2aebdd){return _0x2aebdd();},'LazKD':_0x50f913(0x823)+'an','eobla':function(_0x4463d0,_0x491408){return _0x4463d0===_0x491408;},'XTVpw':function(_0x13229f,_0x34a92f){return _0x13229f===_0x34a92f;},'bOTkK':'Speed'+_0x50f913(0x18d),'DLwXC':function(_0x4d3132,_0x170049,_0x373680,_0xacc145){return _0x4d3132(_0x170049,_0x373680,_0xacc145);},'UdDEO':function(_0x70d0a6,_0x247259){return _0x70d0a6+_0x247259;},'IBgdX':function(_0x498b7c,_0x5a60ed){return _0x498b7c+_0x5a60ed;},'eBGUe':function(_0x4c5c9c,_0x318561){return _0x4c5c9c+_0x318561;},'PGlQz':function(_0x1da5c9,_0x1675f8){return _0x1da5c9+_0x1675f8;},'TnlcH':_0x50f913(0xa1f)+_0x50f913(0x2d2),'BQNfH':function(_0x5589fa,_0x4ff54f,_0x310a9){return _0x5589fa(_0x4ff54f,_0x310a9);},'hIxpC':_0x50f913(0xc9b)+'te','wqgDa':_0x50f913(0xb7c)+_0x50f913(0x58c),'dFQtu':_0x50f913(0x9b7)+_0x50f913(0x86c)+_0x50f913(0x684)+'9)','PCBWF':function(_0x555b99,_0x3a2d1d,_0x115851,_0x2d8a77){return _0x555b99(_0x3a2d1d,_0x115851,_0x2d8a77);},'SwjwZ':_0x50f913(0x8c8)+_0x50f913(0x842)+_0x50f913(0x638)+_0x50f913(0x926)+_0x50f913(0x976)+'\x20on/o'+'ff\x0aF8'+'\x20/\x20F6'+_0x50f913(0x6a5)+_0x50f913(0x9c2)+_0x50f913(0x744)+_0x50f913(0x81c)+'\x20\x20fie'+_0x50f913(0x2c5)+'\x20view'+_0x50f913(0xcab)+_0x50f913(0x8b2)+'his\x20m'+'enu','UZlMc':function(_0x2b255f,_0x2afbb9){return _0x2b255f===_0x2afbb9;},'REjZd':'visua'+'ls','JUbMa':function(_0x29314e,_0x5cb2de,_0x49fb4e){return _0x29314e(_0x5cb2de,_0x49fb4e);},'wHJxl':_0x50f913(0x856)+_0x50f913(0x757),'uLNeR':function(_0x1b3158,_0x1dd45b,_0x590193,_0x339701,_0x494967,_0x506704){return _0x1b3158(_0x1dd45b,_0x590193,_0x339701,_0x494967,_0x506704);},'TYgFE':_0x50f913(0x3a5),'UUmGO':function(_0x58c935,_0x5a5215,_0x444bfd){return _0x58c935(_0x5a5215,_0x444bfd);},'KKfYU':function(_0x39d4e9,_0xde8da7){return _0x39d4e9+_0xde8da7;},'RyhQV':_0x50f913(0x9a8)+_0x50f913(0xa0a)+_0x50f913(0x2d6)+'sane\x20'+_0x50f913(0xcc1)+_0x50f913(0xb6c)+_0x50f913(0x835)+_0x50f913(0xce2)+'.','bxYJm':function(_0x4b3239,_0x175fe2,_0x424aa0,_0x5efee1,_0x112431,_0x8212a8){return _0x4b3239(_0x175fe2,_0x424aa0,_0x5efee1,_0x112431,_0x8212a8);},'pMidu':'fov\x20b'+'ack\x20t'+'o\x2075,'+_0x50f913(0xb41)+'ets\x20c'+_0x50f913(0x627),'LMsmw':'sk-bt'+'n','gMpxk':'Mouse'+_0x50f913(0xcfc),'UalcK':_0x50f913(0x2be)+_0x50f913(0x65a),'YUSdu':'no\x20Mo'+_0x50f913(0x692)+'ok\x20ye'+'t','aunMk':function(_0x8214f1,_0x197da7){return _0x8214f1+_0x197da7;},'pfOfc':_0x50f913(0x6ab)+'r\x20pai'+'r','KLCUd':_0x50f913(0x41f)+'h\x20','oCeoI':function(_0x49d579,_0x4ec25f){return _0x49d579+_0x4ec25f;},'rXkKm':function(_0x10d47e,_0x58a537){return _0x10d47e+_0x58a537;},'gCslM':_0x50f913(0x545)+_0x50f913(0x8f3)+_0x50f913(0xc28)+_0x50f913(0x87a)+_0x50f913(0xb41)+'ets\x20+'+'0x28\x20'+_0x50f913(0xd72)+'0x1C\x0a'+_0x50f913(0xbc7)+'ngle\x20'+_0x50f913(0xbf2)+'\x20have'+'\x20not\x20'+_0x50f913(0x2ba)+_0x50f913(0x588),'hBumg':function(_0x1f8426,_0x3fad34){return _0x1f8426===_0x3fad34;},'rtcFT':function(_0x11de64,_0x1ef6d6){return _0x11de64+_0x1ef6d6;},'tzNtl':_0x50f913(0xb5c)+_0x50f913(0x9c7)+'a\x20sta'+_0x50f913(0x96a)+_0x50f913(0x7ea)+'orrec'+_0x50f913(0x1d6),'DTyAw':'Hooks','zldFo':_0x50f913(0xbe9)+'ed\x20/\x20'+'regis'+_0x50f913(0xb47),'UxnQe':function(_0x1517c0,_0x18c91f){return _0x1517c0+_0x18c91f;},'xGgVd':'\x20MB\x20@'+'\x20','rNFbl':'Enemi'+'es','SejJB':_0x50f913(0xbab)+_0x50f913(0xcce)+_0x50f913(0x9dd)+_0x50f913(0xd5f),'NcGky':function(_0xc3c61b,_0x180376){return _0xc3c61b!==_0x180376;},'kqmYo':_0x50f913(0x580),'EqDKT':_0x50f913(0x829),'qPbYN':_0x50f913(0xb2e)+'l','zVPJY':function(_0x435f8b,_0x31510a){return _0x435f8b+_0x31510a;},'KPIeK':_0x50f913(0x3cc)+'ntrol'+_0x50f913(0x42a),'ZCRZH':function(_0x5bcd1d,_0x2bf20c,_0x2ff2b5,_0xcb2eed){return _0x5bcd1d(_0x2bf20c,_0x2ff2b5,_0xcb2eed);},'IDzvf':_0x50f913(0xb63)+_0x50f913(0x463)+'t','qgdkR':'0x11C','EzuyY':function(_0x376911,_0x13c502,_0x135add,_0x2e4516){return _0x376911(_0x13c502,_0x135add,_0x2e4516);},'GmDLG':'Healt'+'hScri'+_0x50f913(0x8a6)+'C0','DKeuk':_0x50f913(0x367),'JaAxd':'fFkHp','YTafF':_0x50f913(0xc68),'nkEVk':'Diagn'+'ostic'+'s','YANyW':function(_0x16d11a,_0x2fdcb1,_0x4918fd,_0x229dd6){return _0x16d11a(_0x2fdcb1,_0x4918fd,_0x229dd6);},'hpcsq':function(_0x13c0ef,_0x2b3687,_0x130f37,_0x1d4b18){return _0x13c0ef(_0x2b3687,_0x130f37,_0x1d4b18);},'xvhuU':_0x50f913(0x6f6)+_0x50f913(0x2d6)+_0x50f913(0xce3)+_0x50f913(0xbb8)+'g\x20whe'+_0x50f913(0x4bc)+_0x50f913(0x83c)+_0x50f913(0x40a)+_0x50f913(0x913)+_0x50f913(0x23d),'SFakM':function(_0x593eba){return _0x593eba();},'DWEcn':'AUYvM','uZqdx':'wrJDR','snVXl':function(_0x3f9989,_0x3be134){return _0x3f9989+_0x3be134;},'dXeck':_0x50f913(0xb8a),'QjIYc':_0x50f913(0x65f),'rIMyO':function(_0x544116,_0x3e0992){return _0x544116===_0x3e0992;},'cTpyX':function(_0x4b486d,_0x4aa312){return _0x4b486d!==_0x4aa312;},'UbILK':'edzzT','sDhrN':function(_0x574b7a,_0x1dfdd8){return _0x574b7a-_0x1dfdd8;},'DlZNE':_0x50f913(0xb9d),'jIWrq':'sYLtZ','WmfoF':_0x50f913(0x6e2)+'down','TEJZf':_0x50f913(0x8f0)+'move','PXpYs':'ncmNT','Zqxfp':_0x50f913(0x430),'fLGUx':function(_0x4bf9a9,_0xfde645){return _0x4bf9a9(_0xfde645);},'PDZCu':function(_0x1ac158,_0x550765){return _0x1ac158+_0x550765;},'VFIRM':_0x50f913(0xb39)+'a-men'+_0x50f913(0x273),'scYHR':'mn-lo'+'go','NkVUr':'mn-ma'+'in','RCrIR':'mn-ti'+_0x50f913(0x7da),'Rllhp':function(_0xc9206d,_0x42b927,_0x4eaf74,_0x45a132){return _0xc9206d(_0x42b927,_0x4eaf74,_0x45a132);},'EDaVQ':_0x50f913(0xb50),'OpsOw':'start'+_0x50f913(0x8ed),'KgEMm':function(_0x10eab3,_0x160da0,_0xe262ca,_0xf4f697){return _0x10eab3(_0x160da0,_0xe262ca,_0xf4f697);},'zWyFl':function(_0x17b1e3,_0x44a810){return _0x17b1e3<_0x44a810;},'JPiyR':'mn-ta'+'b','TKvBb':_0x50f913(0xb39)+_0x50f913(0x1a3)+'al','LiHqq':_0x50f913(0x205)+':','iCKsF':function(_0x21787c,_0x722f67){return _0x21787c+_0x722f67;},'UDXVa':function(_0x2f75f3,_0x7ac2fe){return _0x2f75f3===_0x7ac2fe;},'ASVgm':_0x50f913(0x1bd),'ZMOVD':function(_0x539635,_0x102508){return _0x539635(_0x102508);},'BKNxA':'uaZEM','SBPDL':'LEimz','myKfR':function(_0x47855c,_0x2c3a13){return _0x47855c+_0x2c3a13;},'gxgGR':function(_0x1f5f64,_0x1f524f){return _0x1f5f64+_0x1f524f;},'EHkxp':function(_0x4f93da,_0x1bacf4){return _0x4f93da+_0x1bacf4;},'NsdfR':'\x20\x20·\x20\x20'+'hooks'+'\x20','ZVuFv':_0x50f913(0x32e)+'playe'+_0x50f913(0xca1),'osTYD':'waiti'+_0x50f913(0x2df)+_0x50f913(0x8c2)+'\x20firs'+'t\x20rep'+_0x50f913(0xc2c),'GxJrA':_0x50f913(0xa91)+'ON','oPADK':function(_0x272c7a,_0x44b0ed){return _0x272c7a===_0x44b0ed;},'XQXbP':_0x50f913(0x46b)+'8','IFHxe':function(_0x340769,_0x5524b5){return _0x340769===_0x5524b5;},'ibajd':function(_0x30e0d9,_0x49e433){return _0x30e0d9!==_0x49e433;},'JzPME':function(_0x1521c4,_0xa8f130){return _0x1521c4+_0xa8f130;},'CEiyN':function(_0x55165c,_0xd19ec1){return _0x55165c+_0xd19ec1;},'nfcmQ':_0x50f913(0xba4)+'h=','Qupss':function(_0x1f9b11,_0x170d14){return _0x1f9b11<_0x170d14;},'KJfmG':function(_0x2f058f,_0x1ea2b1){return _0x2f058f<=_0x1ea2b1;},'mVEyD':function(_0x3ee9f6,_0x29713c){return _0x3ee9f6+_0x29713c;},'yvzDA':function(_0x4b8655,_0x4ac87e){return _0x4b8655*_0x4ac87e;},'RWBVp':function(_0x334732,_0x56a95e){return _0x334732===_0x56a95e;},'JxdLC':_0x50f913(0x438),'htxde':_0x50f913(0xb24),'LtkMM':function(_0x389cad,_0x261013){return _0x389cad<_0x261013;},'CEFMQ':function(_0x586ff0,_0x5d58af){return _0x586ff0*_0x5d58af;},'qfxfD':'AvBrw','qeQjH':_0x50f913(0xaba),'qHHAC':function(_0x254b3d,_0x2d34dc){return _0x254b3d+_0x2d34dc;},'ZJfSl':function(_0x562b4d,_0x32144f){return _0x562b4d*_0x32144f;},'WySZU':function(_0x2e0f89,_0x5dbd91){return _0x2e0f89!==_0x5dbd91;},'ramVX':'WrQKy','WfJNV':function(_0x2ef5cb,_0x38e17d){return _0x2ef5cb===_0x38e17d;},'NVZPn':'wxFgE','knSjk':_0x50f913(0x9db),'ujnpt':function(_0x2c3f2f,_0x2ef43c){return _0x2c3f2f!==_0x2ef43c;},'FknHv':function(_0x500dd8,_0xb12fc7){return _0x500dd8+_0xb12fc7;},'TNLey':function(_0x580679,_0x2581ed){return _0x580679*_0x2581ed;},'pCulL':_0x50f913(0x7e3)+'kura]'+_0x50f913(0xaf2)+_0x50f913(0x5e9)+_0x50f913(0x2c1)+_0x50f913(0x988),'bOzMo':_0x50f913(0x620),'kVNrw':'sakur'+'a-esp','UnFsE':_0x50f913(0xc76)+_0x50f913(0x91f)+'=\x22sak'+'ura-e'+'sp-cv'+'\x22\x20wid'+'th=\x221'+_0x50f913(0x5fa)+_0x50f913(0x437)+_0x50f913(0x880)+'\x22\x20sty'+_0x50f913(0x668)+'ispla'+'y:blo'+_0x50f913(0x24f)+_0x50f913(0x844)+_0x50f913(0x612),'xNaKv':_0x50f913(0xca4)+_0x50f913(0x293)+'p-cv','gqleP':_0x50f913(0xd06),'VjUuo':_0x50f913(0x4af),'KFoZr':_0x50f913(0x456),'IBPAM':function(_0x940350,_0x3e9a1b){return _0x940350(_0x3e9a1b);},'rkRJm':function(_0x5e2590,_0x3e8075){return _0x5e2590===_0x3e8075;},'IjcJJ':_0x50f913(0x5df),'qKYeh':function(_0x3090f1,_0x41ca93){return _0x3090f1===_0x41ca93;},'gVgJM':function(_0x55164c,_0x57162c){return _0x55164c-_0x57162c;},'cKCYB':function(_0x29e057,_0x4ae58a){return _0x29e057+_0x4ae58a;},'FtWSO':'rgba('+_0x50f913(0xb92)+_0x50f913(0xb96)+_0x50f913(0x2e1),'Doozo':'rgba('+_0x50f913(0xd78)+'10,11'+_0x50f913(0x2b4)+')','VJrwZ':function(_0x4c5f68,_0x4e8f38){return _0x4c5f68/_0x4e8f38;},'Qgwzo':function(_0x5b9682,_0x292288){return _0x5b9682-_0x292288;},'mXSit':function(_0xee4127,_0x3f9518){return _0xee4127<_0x3f9518;},'DigeP':function(_0x2ed2de,_0x40fdbf){return _0x2ed2de===_0x40fdbf;},'GRAgP':function(_0x1e78f5,_0xac7e3a){return _0x1e78f5===_0xac7e3a;},'bczSr':function(_0x223f45,_0x7f9599){return _0x223f45+_0x7f9599;},'aQqfG':function(_0x30bd1f,_0x4b5208){return _0x30bd1f*_0x4b5208;},'Cvben':function(_0x3ad773,_0xdbaf94){return _0x3ad773-_0xdbaf94;},'UljJG':function(_0x456f97,_0x1483a7){return _0x456f97-_0x1483a7;},'VDjCZ':function(_0x8c7dc4,_0x2a796e){return _0x8c7dc4!==_0x2a796e;},'eJfup':function(_0x3e2b2c,_0xeac2a3){return _0x3e2b2c===_0xeac2a3;},'TRqhn':'#4f8f'+'6a','fTTiS':function(_0x4af068,_0x80aafc){return _0x4af068*_0x80aafc;},'KZwUU':function(_0x260fe5,_0x3c7e98){return _0x260fe5+_0x3c7e98;},'chgHy':function(_0x329468,_0x564115){return _0x329468+_0x564115;},'sGEhg':function(_0xab6129,_0x393d09){return _0xab6129+_0x393d09;},'DUUzx':'\x20·\x20te'+'am','jJeUM':function(_0x59a317){return _0x59a317();},'TGCbw':_0x50f913(0x1eb),'GHMsx':function(_0x95fe54,_0xbb9863){return _0x95fe54+_0xbb9863;},'cpzQO':function(_0x3f57f6,_0x5ecd31){return _0x3f57f6===_0x5ecd31;},'mKhOv':function(_0x51554f,_0x412b01,_0x2d7ddf){return _0x51554f(_0x412b01,_0x2d7ddf);},'PJMZZ':function(_0x5474f7,_0x3cddc0){return _0x5474f7===_0x3cddc0;},'CmuOb':function(_0x32ac1f,_0x1d7ee1){return _0x32ac1f+_0x1d7ee1;},'PCZcw':function(_0x48c5a2){return _0x48c5a2();},'IxlTG':_0x50f913(0xbcd)+'(gues'+'s)','EYBVW':function(_0x23b118,_0x43410d){return _0x23b118<=_0x43410d;},'tZVbR':'vytdr','SpLVi':function(_0x581c08,_0x29bd55){return _0x581c08!==_0x29bd55;},'lRAgk':'KTTNu','gkRrJ':function(_0x36aeb1){return _0x36aeb1();},'pztmP':'surve'+_0x50f913(0x498)+_0x50f913(0x3b4),'vZhUK':_0x50f913(0x847)+_0x50f913(0x73c)+'g\x20fai'+'led:\x20','Pcjbe':function(_0x37405c,_0x561a45){return _0x37405c===_0x561a45;},'rwyrb':function(_0x281779,_0x199361){return _0x281779+_0x199361;},'tSugh':'Sakur'+_0x50f913(0xaec)+'K\x20scr'+'ipt\x20i'+_0x50f913(0x380)+_0x50f913(0x830)+_0x50f913(0xb90)+_0x50f913(0x44a)+_0x50f913(0x4ee)+_0x50f913(0x8df)+'.','TSjvE':function(_0x54743d,_0x53e3eb){return _0x54743d!==_0x53e3eb;},'QHSii':_0x50f913(0x9c1)+'n._ru'+'ntime'+_0x50f913(0x84f)+_0x50f913(0x906)+_0x50f913(0x6b4)+_0x50f913(0x480)+'WebMo'+_0x50f913(0x53c)+'Runti'+_0x50f913(0x7a7)+_0x50f913(0xc0e)+_0x50f913(0x64b)+_0x50f913(0x24d)+'built'+'\x20','jEUff':_0x50f913(0x5bd)+'st\x20a\x20'+'diffe'+_0x50f913(0xbb5)+'Runti'+'me\x20in'+_0x50f913(0x850)+_0x50f913(0x928)+'n\x20the'+_0x50f913(0x4ea)+_0x50f913(0x6b0)+_0x50f913(0x210)+'oses.','YtGaR':_0x50f913(0xc0b),'jSJeV':function(_0x5172e8,_0x4effce){return _0x5172e8+_0x4effce;},'oMkuc':_0x50f913(0xc9c)+'th\x20or'+'igina'+_0x50f913(0xd7e)+'=','wUVkk':_0x50f913(0xcc5)+_0x50f913(0xb0c)+'resol'+'ved=','SmicU':_0x50f913(0xc2f)+_0x50f913(0x2d6)+'refer'+_0x50f913(0x999)+_0x50f913(0x3d5)+'ed\x20th'+'en\x20an'+'d\x20is\x20'+'not\x20r'+_0x50f913(0x38b)+_0x50f913(0xbbf)+_0x50f913(0x9af),'zAJmG':'Unity'+'\x20inst'+_0x50f913(0x681)+_0x50f913(0x1b2)+_0x50f913(0xc74)+_0x50f913(0xa2c)+_0x50f913(0x664)+_0x50f913(0x425)+'\x20','ObdMO':'Heap\x20'+_0x50f913(0x4fd)+'\x20stay'+_0x50f913(0x854)+_0x50f913(0x9fb)+_0x50f913(0x909)+'a\x20gam'+'e\x20obj'+'ect\x20w'+_0x50f913(0xd03)+_0x50f913(0x80c)+_0x50f913(0x1d7)+_0x50f913(0xc35)+_0x50f913(0xba4)+'hable'+'.','WDDkY':_0x50f913(0xd6e)+'w.Uni'+_0x50f913(0x8ec)+_0x50f913(0x683)+_0x50f913(0x5ae)+_0x50f913(0x4ba)+_0x50f913(0xb95)+'is\x20mi'+_0x50f913(0xcc3)+_0x50f913(0xafc)+'pture'+'\x20is\x20r'+_0x50f913(0x4e9)+_0x50f913(0x504)+'nd.','lwRfY':function(_0x52372d,_0x3d9ecb){return _0x52372d===_0x3d9ecb;},'cbPHc':_0x50f913(0x3ee)+_0x50f913(0x783)+_0x50f913(0x820)+_0x50f913(0x1be)+_0x50f913(0xb44)+_0x50f913(0x269)+_0x50f913(0x689)+'tiate'+_0x50f913(0xcc5)+_0x50f913(0x742)+'hots\x20'+'plugi'+'n.hoo'+_0x50f913(0x733)+_0x50f913(0x35d)+'\x20','WYFIe':function(_0xb17e38,_0x5d1865){return _0xb17e38+_0x5d1865;},'KDgEY':_0x50f913(0x847)+_0x50f913(0xcde)+_0x50f913(0xd52),'xrVxq':_0x50f913(0x80f)+_0x50f913(0x9d0)+_0x50f913(0xc57)+'able\x20'+_0x50f913(0x860)+_0x50f913(0x307)+'appli'+_0x50f913(0x775)+_0x50f913(0xc98)+_0x50f913(0xd01)+_0x50f913(0xc6b)+_0x50f913(0xaa6),'AAlto':_0x50f913(0x450)+_0x50f913(0x78b)+_0x50f913(0xbe9)+'ed\x20bu'+_0x50f913(0x512)+_0x50f913(0x3cc)+_0x50f913(0xa34)+'ler\x20h'+_0x50f913(0x33d)+'red\x20y'+_0x50f913(0x677),'YsGAx':_0x50f913(0x36b)+_0x50f913(0x4fa)+'\x20are\x20'+_0x50f913(0xc5b)+'n\x20a\x20r'+'ound,'+_0x50f913(0x6e1)+_0x50f913(0x79a)+'ok\x20is'+_0x50f913(0x96c)+_0x50f913(0x7e6)+_0x50f913(0x1c7)+'verlo'+_0x50f913(0x9ed),'DeIAs':_0x50f913(0x8e0)+'lt\x20si'+'nce\x20f'+_0x50f913(0xb62)+_0x50f913(0x234)+_0x50f913(0x6e6)+'espaw'+'n?):\x20','yYvkM':function(_0x285b5e,_0x1fd12f){return _0x285b5e+_0x1fd12f;},'dKfXA':function(_0x31d840,_0x46cecd){return _0x31d840+_0x46cecd;},'RNnoH':function(_0x180eed,_0x56b71e){return _0x180eed(_0x56b71e);},'PhIfp':_0x50f913(0x73d),'plPIZ':function(_0x120efa,_0x34b33c){return _0x120efa(_0x34b33c);},'aRfcW':function(_0x4b5830){return _0x4b5830();},'VwmIq':function(_0x43e14d){return _0x43e14d();},'unYIK':function(_0x38fa96){return _0x38fa96();},'OMBrq':_0x50f913(0x2e0)+'er','ReWtN':'#ff8f'+'b1','GkrAS':_0x50f913(0x77c)+_0x50f913(0x79e)+_0x50f913(0x24b),'qAbBx':'2.9.1'+'3','ZnayB':'%c[sa'+'kura]'+_0x50f913(0x30c)+_0x50f913(0x5c1)+_0x50f913(0x79f),'oxpcP':_0x50f913(0x37a)+'-weig'+'ht:70'+'0','acBSO':_0x50f913(0xb39)+'a-sw-'+_0x50f913(0xc80)+_0x50f913(0x910)+'en','GwQOh':'DOMCo'+_0x50f913(0x706)+_0x50f913(0x821)+'d','YTWgF':_0x50f913(0x7e3)+'kura]'+_0x50f913(0x9a2)+_0x50f913(0x7df)+'\x20ACTI'+_0x50f913(0x591),'cJIda':';font'+_0x50f913(0xad0)+_0x50f913(0x487)+'0;fon'+_0x50f913(0x3c1)+_0x50f913(0x817)+'x','SNkXa':_0x50f913(0x435)+_0x50f913(0x407)+'\u0094','aNEGG':_0x50f913(0x982)+'\u0090\u0091\u0089\u0086\u0091'+'\u0092','faobV':_0x50f913(0x45d)+'\u008e\u008f\u0091\u0088\u008c'+'\u0095','IOPOx':'\u0091\u008f\u0088\u0086\u0091'+_0x50f913(0x6b1)+'\u0090','PbhdN':_0x50f913(0xa6d)+_0x50f913(0x8c6)+'\u0088','RkJST':'\u0093\u0089\u0095\u0092\u0090'+_0x50f913(0x803)+'\u008d','AgBRb':'\u008d\u0095\u0088\u0092\u008c'+_0x50f913(0x4fe)+'\u0092','ztcQR':_0x50f913(0x9ff)+_0x50f913(0x8bb)+'\u008a','KVsME':_0x50f913(0x2a3),'fGrLA':_0x50f913(0x1b3)+'\u008c\u0087\u0086\u008c\u0092'+'\u008d','MiPFn':_0x50f913(0xa63)+_0x50f913(0x4d7)+'\u008b','EMqki':_0x50f913(0x1a8)+'\u0088\u0090\u0095\u0089\u008d'+'\u008a','biZgA':'\u0087\u008f\u008d\u008b\u0092'+_0x50f913(0x7f3)+'\u008c','QVcPU':_0x50f913(0xd1a)+'\u008c\u008a\u0086\u0090\u0087'+'\u0093','eOnzn':'\u008a\u0086\u008a\u008b\u0086'+'\u008f\u0091\u008e\u008d\u0086'+'\u008d','dAonq':_0x50f913(0x7d1)+_0x50f913(0x6a4)+'\u0094','WxZZX':_0x50f913(0x2ee),'PgYqM':'\u0090\u0087\u0089\u0088\u008e'+'\u0086\u008b\u0091\u0087\u008a'+'\u008b','etbvH':_0x50f913(0xba2)+'\u0092\u0095\u0090\u0089\u0088'+'\u0092','YEbDx':'\u0090\u0092\u008e\u008e\u0087'+_0x50f913(0x1ed)+'\u0093','qnfEC':_0x50f913(0x34e)+'\u008c\u0087\u0095\u0093\u008b'+'\u0094','YnTfD':_0x50f913(0xbd5)+'\u0095\u0089\u008b\u008d\u008a'+'\u008b','DObAc':'\u0088\u0089\u008f\u0091\u0094'+_0x50f913(0x1da)+'\u0090','ZTzvw':'\u0088\u0087\u0093\u008c\u0094'+_0x50f913(0x85a)+'\u0094','QcYce':_0x50f913(0x578)+'\u0091\u0089\u0094\u008a\u0092'+'\u0089','Pwtrj':'\u008b\u0090\u0088\u008d\u0087'+_0x50f913(0x206)+'\u0090','qTSzy':_0x50f913(0xcc9)+_0x50f913(0x191)+'\u0086','MSzbu':_0x50f913(0xb13)+'\u008b\u0091\u0091\u0089\u0091'+'\u008c','oVkxu':'\u008b\u0095\u008a\u008c\u0086'+'\u008d\u0095\u0093\u0094\u008b'+'\u0091','UpIYf':'\u008c\u0089\u008b\u0092\u0093'+'\u0089\u008e\u0095\u0095\u0087'+'\u008a','qNYGh':'\u0088\u008b\u008f\u008a\u008e'+'\u0095\u008e\u008c\u008c\u0092'+'\u0091','BXlCy':_0x50f913(0x478)+_0x50f913(0x24e)+'\u0094','wGFgZ':_0x50f913(0x61c)+_0x50f913(0x4ed)+'\u0095','MScCG':_0x50f913(0x5d7)+'\u0093\u0089\u0090\u008c\u008c'+'\u008a','bDvpR':_0x50f913(0x91c)+'\u0086\u008b\u008e\u008f\u0086'+'\u0087','FDEqu':_0x50f913(0x5ea)+_0x50f913(0x758)+'\u0094','iUibC':_0x50f913(0xd22)+'\u0088\u0091\u0095\u0092\u0092'+'\u008f','GVFtV':_0x50f913(0x510)+'\u0093\u0086\u0087\u008c\u008a'+'\u008d','wovfH':_0x50f913(0x2f7)+_0x50f913(0x7d4)+'\u0091','EsFvK':_0x50f913(0xac2)+'\u0093\u0095\u0095\u0093\u008a'+'\u0094','TxPMq':'\u008c\u008d\u0095\u0089\u008a'+_0x50f913(0x39a)+'\u0092','eIGLQ':'\u0094\u008c\u008f\u008e\u008b'+_0x50f913(0x2f1)+'\u0087','Uhmnh':_0x50f913(0x460)+_0x50f913(0xcff)+'\u008f','tJEJK':_0x50f913(0x6ff)+'\u008b\u0091\u0092\u008e\u0087'+'\u008d','qUqNL':_0x50f913(0x58a)+'\u0091\u0095\u0088\u008f\u0088'+'\u008c','mUkRJ':'int','OkfyP':_0x50f913(0x24c)+'\u0090\u008d\u0094\u0087\u0091'+'\u0094','QMUJB':'\u008d\u008f\u0086\u0092\u008c'+'\u0086\u0095\u0095\u0091\u0089'+'\u0087','UJIgm':_0x50f913(0xb94)+'\u008a\u008a\u0090\u0088\u008c'+'\u0088','buAbQ':'\u008b\u0088\u008d\u0087\u0090'+'\u008e\u008c\u0090\u008a\u008c'+'\u0094','kCFbO':_0x50f913(0xd32)+'rcial'+'Break'+_0x50f913(0xa93)+_0x50f913(0x535),'nNNUe':_0x50f913(0xaef)+'\u0094\u0089\u0093\u0088\u0093'+'\u0089','sKfXO':_0x50f913(0xb1e)+_0x50f913(0x5e0)+'\u008c','SSoGI':'\u008f\u0088\u008f\u0089\u0089'+_0x50f913(0xb2d)+'\u0087','dUGYQ':_0x50f913(0xbfa)+_0x50f913(0x5bc)+'\u0092','vnOcX':_0x50f913(0x809)+_0x50f913(0x886)+'\u008c','OFMOq':_0x50f913(0x8b9)+_0x50f913(0x81e)+'\u0095','zlKWx':'\u0086\u0086\u008c\u0094\u008b'+'\u0086\u008a\u0095\u0094\u008e'+'\u008f','LlEQm':_0x50f913(0xa57)+_0x50f913(0x8af)+'\u008a','rYLJo':_0x50f913(0x711)+'\u008f\u0095\u0089\u008e\u008b'+'\u0094','PwrsJ':_0x50f913(0x1ee)+_0x50f913(0x826)+'\u008c','xeQWF':_0x50f913(0x3e6)+_0x50f913(0x338)+'\u008e','fdamt':_0x50f913(0xa2d)+_0x50f913(0xc71)+'\u0086','hQSxs':'\u0086\u008e\u0087\u0089\u008a'+_0x50f913(0xa4e)+'\u0095','gWcHM':_0x50f913(0x1d1)+_0x50f913(0x99e)+'\u0089','aUaVw':_0x50f913(0x5d5)+'ameMa'+_0x50f913(0xd5f),'hbemP':_0x50f913(0x7b2)+'meMan'+_0x50f913(0x4c1),'toIck':'Enemy'+_0x50f913(0xb38),'dpgoy':'cInpu'+_0x50f913(0xd58),'pzzKm':_0x50f913(0x7dd)+_0x50f913(0x3d4)+_0x50f913(0x841)+_0x50f913(0x423)+'rolle'+_0x50f913(0x688),'NZoLy':_0x50f913(0xa6a)+'erate'+'d','IGARz':_0x50f913(0x568)+'form','qYWnf':'0x30','uClWH':_0x50f913(0x6e2)+_0x50f913(0x33b),'RYouP':_0x50f913(0x4cf),'eUJvw':_0x50f913(0x978)+'le','FyLjt':'0x18','ayMoU':_0x50f913(0x3cb),'sflYD':_0x50f913(0x343)+_0x50f913(0x34c)+'th2','WgVyk':_0x50f913(0x543),'mWBrs':_0x50f913(0x45f)+_0x50f913(0x99a),'qOYdz':'0x5c','FVPho':function(_0x47c110,_0x375e51){return _0x47c110!==_0x375e51;},'dDVkT':_0x50f913(0x37b)+'t','AAEFE':_0x50f913(0xb39)+'a-sw-'+_0x50f913(0x424)+_0x50f913(0x614),'aereA':'CMB','yvwRt':_0x50f913(0x4b1),'ijYWX':'value'+'s','zdrrT':function(_0x50e46a,_0x433fef){return _0x50e46a+_0x433fef;},'sbBfj':function(_0x3a942f,_0x132159){return _0x3a942f+_0x132159;},'qxNJx':function(_0x2c9189,_0xe95e15){return _0x2c9189+_0xe95e15;},'vkWtL':function(_0x178094,_0x8509bc){return _0x178094+_0x8509bc;},'jwOrB':function(_0x61578f,_0x494d28){return _0x61578f+_0x494d28;},'avDll':function(_0x1de360,_0x47d466){return _0x1de360+_0x47d466;},'rEflw':function(_0xf6057a,_0x2a5a29){return _0xf6057a+_0x2a5a29;},'TqRYs':function(_0xa052dd,_0x422dd0){return _0xa052dd+_0x422dd0;},'ptedn':function(_0x2d1dd7,_0x395268){return _0x2d1dd7+_0x395268;},'vXNui':function(_0x1e193c,_0x370dbb){return _0x1e193c+_0x370dbb;},'sTEBf':function(_0x1fdef5,_0x409eaf){return _0x1fdef5+_0x409eaf;},'rqlsb':function(_0x27e274,_0x34f1f9){return _0x27e274+_0x34f1f9;},'OGMOG':function(_0x473e40,_0x4c3c41){return _0x473e40+_0x4c3c41;},'siwwj':function(_0x17d2e6,_0x157ed2){return _0x17d2e6+_0x157ed2;},'uPKzZ':function(_0x35a7b8,_0x1242bf){return _0x35a7b8+_0x1242bf;},'GpwYR':'opaci'+_0x50f913(0x9f8)+_0x50f913(0x568)+_0x50f913(0x316)+'trans'+'lateY'+'(18px'+_0x50f913(0x636)+'nter-'+'event'+'s:non'+'e;tra'+'nsiti'+_0x50f913(0x295)+'acity'+_0x50f913(0x6d2)+_0x50f913(0x477)+',tran'+_0x50f913(0x646)+_0x50f913(0xb49)+_0x50f913(0x5b3)+'c-bez'+_0x50f913(0xc00)+_0x50f913(0x55a)+_0x50f913(0x26b)+');','cEkFu':_0x50f913(0xc34)+_0x50f913(0xa74)+_0x50f913(0x1ec)+_0x50f913(0x95c)+_0x50f913(0x329)+_0x50f913(0x9d7)+_0x50f913(0xc14)+'n:col'+_0x50f913(0x219)+'lign-'+_0x50f913(0xcae)+_0x50f913(0x8a7)+'er;ga'+'p:4px'+_0x50f913(0x3d3)+_0x50f913(0xca8)+'x;fle'+_0x50f913(0x1c0)+_0x50f913(0x2ed)+'ding:'+_0x50f913(0x8ea)+'0;','vmnXy':_0x50f913(0x5fe)+'r-rad'+_0x50f913(0x27d)+'6px;b'+_0x50f913(0x451)+_0x50f913(0xbdc)+_0x50f913(0x9c3)+_0x50f913(0x59e)+_0x50f913(0x6f8)+_0x50f913(0x9bb)+'5);bo'+_0x50f913(0x979)+'dow:i'+_0x50f913(0x82f)+_0x50f913(0x58f)+'\x201px\x20'+_0x50f913(0x9c3)+'255,2'+_0x50f913(0x6f8)+'5,.05'+_0x50f913(0x486),'BQkGE':_0x50f913(0xa99)+_0x50f913(0x317)+_0x50f913(0x1ec)+_0x50f913(0x465)+_0x50f913(0x39b)+_0x50f913(0x508)+_0x50f913(0x97c)+_0x50f913(0x687)+_0x50f913(0x3d3)+'h:32p'+_0x50f913(0x291)+'ght:3'+_0x50f913(0xd45)+_0x50f913(0x8dc)+_0x50f913(0xb4a)+'om:6p'+'x;}','AeXWI':'.mn-l'+_0x50f913(0xd23)+'vg{wi'+'dth:2'+_0x50f913(0x8bc)+'eight'+':25px'+_0x50f913(0x299)+_0x50f913(0xb40)+'visib'+_0x50f913(0x49a)+'lter:'+_0x50f913(0x2bb)+'shado'+'w(0\x200'+_0x50f913(0x1b8)+'rgba('+_0x50f913(0xd78)+'07,15'+_0x50f913(0x4b4)+_0x50f913(0x486),'sHJOe':_0x50f913(0x375)+'ab{di'+_0x50f913(0x259)+_0x50f913(0xa01)+';alig'+'n-ite'+'ms:ce'+'nter;'+'justi'+_0x50f913(0xd2c)+_0x50f913(0x706)+':cent'+'er;wi'+_0x50f913(0x6e7)+_0x50f913(0xb57)+_0x50f913(0x437)+':34px'+';bord'+'er:0;'+_0x50f913(0x5fe)+'r-rad'+_0x50f913(0x27d)+_0x50f913(0x9ef),'PKZXv':'backg'+_0x50f913(0x1e3)+_0x50f913(0x257)+_0x50f913(0xd4a)+_0x50f913(0xccf)+_0x50f913(0xc90)+_0x50f913(0x6d6)+_0x50f913(0x365)+'8,242'+_0x50f913(0x9cc)+_0x50f913(0xb7b)+_0x50f913(0xb6b)+_0x50f913(0x4b5)+'font-'+_0x50f913(0x6b9)+_0x50f913(0x9d9)+'font-'+'weigh'+_0x50f913(0xd4d)+_0x50f913(0x37a)+_0x50f913(0xa6c)+'ly:in'+_0x50f913(0xa51)+';}','xPmri':_0x50f913(0x375)+_0x50f913(0x499)+_0x50f913(0xad1)+':1;mi'+_0x50f913(0x1a6)+_0x50f913(0x747)+'}','DhKsY':'.mn-h'+'{font'+_0x50f913(0x7bf)+_0x50f913(0x40e)+_0x50f913(0x37a)+'-weig'+_0x50f913(0xb27)+_0x50f913(0xd30),'kLKIc':'.mn-c'+'lose{'+'displ'+_0x50f913(0x6d7)+'id;pl'+'ace-i'+'tems:'+'cente'+'r;wid'+'th:28'+_0x50f913(0xd4c)+_0x50f913(0xca6)+'28px;'+'borde'+'r:0;b'+'order'+_0x50f913(0x584)+'us:8p'+_0x50f913(0x73f)+_0x50f913(0x4ef)+_0x50f913(0x6de)+'anspa'+'rent;','xnkUu':_0x50f913(0xac5)+'ols{f'+'lex:1'+_0x50f913(0xa24)+'heigh'+_0x50f913(0x353)+'verfl'+'ow-y:'+'auto;'+_0x50f913(0x555)+_0x50f913(0x6d7)+_0x50f913(0xd25)+_0x50f913(0x59a)+'mplat'+'e-col'+'umns:'+_0x50f913(0x7b0)+_0x50f913(0xc93)+_0x50f913(0x54d)+_0x50f913(0x601)+_0x50f913(0x635)+'50px,'+'1fr))'+';','yHRMR':_0x50f913(0xc8d)+_0x50f913(0xd27)+_0x50f913(0x70b)+_0x50f913(0x584)+_0x50f913(0x5fc)+'px;ba'+_0x50f913(0x27b)+_0x50f913(0x9c4)+'gba(2'+_0x50f913(0x6f8)+'5,255'+',.025'+');box'+_0x50f913(0x337)+'ow:in'+_0x50f913(0x2ef)+_0x50f913(0x899)+_0x50f913(0x5aa)+'gba(2'+_0x50f913(0x6f8)+_0x50f913(0xb4f)+',.05)'+';}','HlWZc':_0x50f913(0xc8d)+_0x50f913(0x721)+'n{bac'+_0x50f913(0x4ef)+_0x50f913(0x243)+'ba(25'+'5,255'+_0x50f913(0xcb2)+_0x50f913(0x849)+_0x50f913(0x7d3)+_0x50f913(0x63d)+_0x50f913(0x918)+_0x50f913(0xb97)+_0x50f913(0xd11)+_0x50f913(0xd67)+'a(255'+',107,'+'157,.'+'28);}','URPvl':'.sk-c'+_0x50f913(0x624)+_0x50f913(0x440)+'ispla'+_0x50f913(0x95c)+_0x50f913(0x196)+'gn-it'+_0x50f913(0x97c)+_0x50f913(0x687)+_0x50f913(0x4a5)+_0x50f913(0x4be)+_0x50f913(0x2c7)+'g:11p'+_0x50f913(0x1a2)+_0x50f913(0xa73),'bbtXA':_0x50f913(0xc8d)+_0x50f913(0x68b)+_0x50f913(0x9b8)+_0x50f913(0xa60)+'1;min'+_0x50f913(0x8aa)+_0x50f913(0x5a3),'OisBo':'.sk-c'+_0x50f913(0x68b)+_0x50f913(0xa09)+'stron'+'g{fon'+'t-siz'+_0x50f913(0x50f)+_0x50f913(0x8f8)+'t-wei'+_0x50f913(0x61e)+'00;co'+_0x50f913(0xc90)+'gba(2'+_0x50f913(0x365)+_0x50f913(0x7d2)+_0x50f913(0x263)+';}','oIcSw':'.sk-s'+_0x50f913(0x2a9)+_0x50f913(0x812)+'tion:'+_0x50f913(0x702)+_0x50f913(0x626)+'idth:'+_0x50f913(0x943)+'heigh'+_0x50f913(0x417)+_0x50f913(0x25c)+_0x50f913(0xd63)+';bord'+_0x50f913(0x4b9)+'dius:'+'99px;'+_0x50f913(0x754)+_0x50f913(0x1e3)+_0x50f913(0x6bb)+'(255,'+_0x50f913(0x59e)+_0x50f913(0x81d)+'7);cu'+_0x50f913(0x8da)+_0x50f913(0x65c)+_0x50f913(0x5f9)+'ex:no'+'ne;}','aTjhD':_0x50f913(0xb01)+_0x50f913(0x2a9)+_0x50f913(0x790)+'er{co'+'ntent'+':\x22\x22;p'+_0x50f913(0x9e7)+'on:ab'+_0x50f913(0x530)+_0x50f913(0x5f5)+':3px;'+_0x50f913(0xd7b)+_0x50f913(0x4c7)+_0x50f913(0x222)+'8px;h'+_0x50f913(0x437)+_0x50f913(0xbb2)+'borde'+_0x50f913(0x6ca)+'ius:5'+'0%;','bokFZ':'backg'+_0x50f913(0x1e3)+':rgba'+'(255,'+_0x50f913(0x59e)+_0x50f913(0x89b)+_0x50f913(0x349)+_0x50f913(0x616)+_0x50f913(0x3b7)+'eft\x20.'+_0x50f913(0x889)+'ckgro'+'und\x20.'+_0x50f913(0x589),'zYdiP':'backg'+'round'+_0x50f913(0x9e5)+'ar-gr'+_0x50f913(0x421)+_0x50f913(0xc1f)+'6b9d,'+_0x50f913(0x6c9)+_0x50f913(0x717)+_0x50f913(0x848)+_0x50f913(0x42c)+_0x50f913(0xab0)+'%)\x2010'+_0x50f913(0x398)+'-repe'+_0x50f913(0x216)+'ba(25'+'5,255'+_0x50f913(0xcb2)+_0x50f913(0x894)+'}','AMdGf':_0x50f913(0xb01)+'lider'+'::-we'+'bkit-'+'slide'+_0x50f913(0x38c)+_0x50f913(0xbf6)+_0x50f913(0x7fe)+_0x50f913(0xd75)+'aranc'+'e:non'+_0x50f913(0x9da)+_0x50f913(0x7ed)+_0x50f913(0x291)+'ght:6'+'px;ma'+'rgin-'+_0x50f913(0x625)+'2px;b'+_0x50f913(0x70b)+'-radi'+_0x50f913(0xa38)+'%;bac'+'kgrou'+'nd:#f'+'f6b9d'+';}','miFAf':'.sk-v'+'al{fo'+_0x50f913(0xadb)+_0x50f913(0x9d8)+_0x50f913(0x4d3)+'nt-we'+_0x50f913(0xca6)+'600;m'+'in-wi'+_0x50f913(0x4ae)+_0x50f913(0x67f)+_0x50f913(0x7af)+_0x50f913(0xae9)+_0x50f913(0xa90)+';colo'+_0x50f913(0x459)+_0x50f913(0x597)+',238,'+_0x50f913(0x665)+_0x50f913(0xa43),'ptYbW':_0x50f913(0x3a7)+'ote.e'+_0x50f913(0x846)+_0x50f913(0x5d4)+'ff7a9'+'3;}','bLFGd':'font-'+_0x50f913(0x6b9)+_0x50f913(0x763)+_0x50f913(0x8f8)+_0x50f913(0x7ec)+_0x50f913(0x8de)+_0x50f913(0x866)+'rsor:'+_0x50f913(0x65c)+_0x50f913(0x381)+'nt-fa'+_0x50f913(0x61b)+_0x50f913(0x453)+'it;}','FAyNc':_0x50f913(0xca4)+'ra-pe'+'tal{p'+'ositi'+'on:fi'+_0x50f913(0x78d)+'op:12'+'px;ri'+'ght:1'+_0x50f913(0x2a4)+_0x50f913(0xaa3)+_0x50f913(0xd0d)+_0x50f913(0x863)+'46;cu'+_0x50f913(0x8da)+_0x50f913(0x65c)+_0x50f913(0x4dd)+_0x50f913(0x187)+_0x50f913(0xbd0)+'eight'+':26px'+_0x50f913(0xd77)+_0x50f913(0xcb8)+'28;','QZnfI':function(_0x744da1,_0x46592c){return _0x744da1+_0x46592c;},'chHtK':_0x50f913(0x780)+_0x50f913(0x247)+_0x50f913(0xa3d)+'\x200\x2024'+'\x2024\x22>'+_0x50f913(0x4f7)+'\x20d=\x22M'+_0x50f913(0x831)+_0x50f913(0x8a2)+_0x50f913(0x1e2)+_0x50f913(0x432)+_0x50f913(0x674)+_0x50f913(0x629)+_0x50f913(0xd38)+_0x50f913(0x529)+_0x50f913(0xcd2)+_0x50f913(0x723)+'\x204\x204.'+_0x50f913(0x59b)+'-2.5\x20'+_0x50f913(0x749)+_0x50f913(0x32f),'iUTLr':_0x50f913(0x7eb)+_0x50f913(0x72a)+_0x50f913(0xc5e)+_0x50f913(0x736)+'#ff6b'+_0x50f913(0x914)+_0x50f913(0x5c0)+'-widt'+'h=\x222\x22'+_0x50f913(0xbe2)+'ke-li'+'necap'+_0x50f913(0x939)+'nd\x22\x20s'+_0x50f913(0x5c0)+'-line'+_0x50f913(0x87e)+_0x50f913(0x98d)+'d\x22/>','OTGtY':'<circ'+'le\x20cx'+'=\x2212\x22'+'\x20cy=\x22'+_0x50f913(0x7f7)+'=\x221.5'+_0x50f913(0x83a)+'l=\x22#f'+_0x50f913(0xa69)+_0x50f913(0xb91)+'svg>'};var _0x23ae10=location['hostn'+_0x50f913(0x784)]||'',_0x2d41ac=/(^|\.)www\.crazygames\.com$/[_0x50f913(0x52b)](_0x23ae10),_0x348e70=/(^|\.)games\.crazygames\.com$/[_0x50f913(0x52b)](_0x23ae10),_0x323ea1=/(^|\.)crazygames\.com$/[_0x50f913(0x52b)](_0x23ae10)&&!_0x2d41ac&&!_0x348e70,_0x3f3384=_0x2d41ac?_0x50f913(0x3ed)+'l':_0x348e70?_0x273fbd[_0x50f913(0x562)]:_0x50f913(0x90d)+'r';if(!_0x2d41ac&&!_0x348e70&&!_0x323ea1)return;var _0xd166cd=_0x273fbd[_0x50f913(0x5f1)],_0x34c4ed=_0x273fbd[_0x50f913(0x4b7)],_0x3c9b75=_0x50f913(0x54c)+_0x50f913(0x57d)+'SKILL'+_0x50f913(0x85f)+'BEGIN'+_0x50f913(0x3ab),_0xd1d85a=_0x50f913(0x54c)+_0x50f913(0x57d)+'SKILL'+_0x50f913(0x85f)+'END=='+'=',_0x462d02=_0x273fbd[_0x50f913(0x342)];if(_0x348e70){window[_0x50f913(0xcad)+'entLi'+_0x50f913(0xb2c)+'r']('messa'+'ge',function(_0x54e55c){var _0x4520c7=_0x50f913,_0x28a6e5=_0x54e55c[_0x4520c7(0xae4)];if(!_0x28a6e5||_0x28a6e5[_0x4520c7(0x77c)+_0x4520c7(0x44e)]!==_0x34c4ed)return;try{if(window['paren'+'t']&&_0x273fbd['GlVLI'](window[_0x4520c7(0x5f3)+'t'],window))window[_0x4520c7(0x5f3)+'t'][_0x4520c7(0x95e)+_0x4520c7(0x93b)+'e'](_0x28a6e5,'*');if(window[_0x4520c7(0x4c0)]&&window[_0x4520c7(0x4c0)]!==window)window['top']['postM'+'essag'+'e'](_0x28a6e5,'*');}catch(_0x4a764b){}if(_0x28a6e5&&_0x28a6e5['kind']==='cmd'){if(_0x273fbd['noDhB'](_0x4520c7(0x2c2),_0x273fbd[_0x4520c7(0x74b)]))try{var _0x4b5bae=_0x5e7c3a[_0x4520c7(0xbb7)](-0x1d7e+0x3*0x371+-0x664*-0x3,_0x1fb59b['inner'+_0x4520c7(0xb87)]||_0x55ba35['docum'+'entEl'+_0x4520c7(0x656)]['clien'+_0x4520c7(0x1ef)+'h']||0x216f+-0x1*0xe55+0x1e9*-0xa),_0x27ef31=_0x19daf1[_0x4520c7(0xbb7)](-0x243c+0x347*0x8+0xa05,_0x136bcd['inner'+_0x4520c7(0xcf6)+'t']||_0x43f3df['docum'+_0x4520c7(0x1b4)+'ement'][_0x4520c7(0x8cd)+'tHeig'+'ht']||0x872+-0x280*0x5+0x40e);return(_0x273fbd['GlVLI'](_0x1b9ce1['cv']['width'],_0x4b5bae)||_0x4c419e['cv']['heigh'+'t']!==_0x27ef31)&&(_0x5cea6f['cv'][_0x4520c7(0xae2)]=_0x4b5bae,_0x2cde58['cv']['heigh'+'t']=_0x27ef31),{'w':_0x4b5bae,'h':_0x27ef31};}catch(_0x2440a0){return{'w':0x0,'h':0x0};}else try{var _0x2a7a91=document[_0x4520c7(0x87d)+'Selec'+_0x4520c7(0x903)+'l'](_0x273fbd['WWhCs']);for(var _0x495567=-0x186b+0x1*-0x2a5+0xd88*0x2;_0x273fbd[_0x4520c7(0xa37)](_0x495567,_0x2a7a91[_0x4520c7(0x4f2)+'h']);_0x495567++){try{if(_0x2a7a91[_0x495567]['conte'+'ntWin'+'dow'])_0x2a7a91[_0x495567][_0x4520c7(0x632)+'ntWin'+'dow'][_0x4520c7(0x95e)+_0x4520c7(0x93b)+'e'](_0x28a6e5,'*');}catch(_0x367712){}}}catch(_0x5d4e67){}}}),console[_0x50f913(0x367)](_0x50f913(0x7e3)+_0x50f913(0xc95)+_0x50f913(0x730)+_0x50f913(0xaa8)+'R\x20ACT'+_0x50f913(0x53b)+_0x50f913(0x523)+'\x20up+d'+_0x50f913(0x608),_0x273fbd[_0x50f913(0xb82)](_0x273fbd[_0x50f913(0x961)],_0xd166cd));return;}if(_0x2d41ac){console['log'](_0x273fbd[_0x50f913(0x8c5)],_0x273fbd['KAdFK'](_0x273fbd['LiHqq'],_0xd166cd)+_0x273fbd[_0x50f913(0xd15)],{'host':_0x23ae10});var _0xdc1e4d={'set':function(){},'command':function(){}};function _0x59ac15(_0x2f7312,_0x2ada7b){var _0x13fba7=_0x50f913,_0x148cfe={'LZZxL':_0x273fbd['MbpKG'],'EzXuv':function(_0x4b323f,_0x2dcc9d){return _0x4b323f===_0x2dcc9d;},'SRzDm':function(_0x56d7ae,_0x1f809e){return _0x56d7ae!==_0x1f809e;},'sATTR':function(_0x34a6f3,_0x698b96){var _0x4fa8c6=_0x36c9;return _0x273fbd[_0x4fa8c6(0xb15)](_0x34a6f3,_0x698b96);},'yzlyM':function(_0x47799b,_0x2fe28e){return _0x47799b-_0x2fe28e;},'rvved':function(_0x9f02bc,_0x864e08){return _0x9f02bc<_0x864e08;}},_0x54e9ff={'__sakura':_0x34c4ed,'kind':_0x273fbd[_0x13fba7(0x41e)],'cmd':_0x2f7312,'arg':_0x2ada7b};try{var _0xa7b6e3=document[_0x13fba7(0x87d)+_0x13fba7(0x88c)+_0x13fba7(0x903)+'l'](_0x13fba7(0x363)+'e');for(var _0x4e66b9=-0x262f+-0x5d*-0xe+-0xe5*-0x25;_0x4e66b9<_0xa7b6e3[_0x13fba7(0x4f2)+'h'];_0x4e66b9++){try{if(_0x273fbd['CGWlm']('AEoGY','AEoGY')){if(_0xa7b6e3[_0x4e66b9][_0x13fba7(0x632)+'ntWin'+_0x13fba7(0x474)])_0xa7b6e3[_0x4e66b9][_0x13fba7(0x632)+'ntWin'+_0x13fba7(0x474)]['postM'+_0x13fba7(0x93b)+'e'](_0x54e9ff,'*');}else{var _0x3fc4e4=_0x2837a1['v'];if(typeof _0x3fc4e4!==_0x148cfe[_0x13fba7(0xc79)]||!_0x15f98f(_0x3fc4e4))return![];if(_0x148cfe[_0x13fba7(0xb9b)](_0x3e3a70['k'],_0x13fba7(0x449)))return _0x3fc4e4===-0x1c*0x22+0x354+0x64||_0x3fc4e4===0x11f+-0x1f41+0x1e23;var _0x673ba2=_0x598d12[_0x13fba7(0x452)];if(_0x148cfe['SRzDm'](typeof _0x673ba2,_0x13fba7(0x2a2)+'r')||!_0x2e9407(_0x673ba2))return!![];if(_0x1b484f[_0x13fba7(0x537)]===-0x1e91+0x86*0x36+0x24e)return _0x148cfe[_0x13fba7(0x232)](_0x2c0bef[_0x13fba7(0xc83)](_0x148cfe[_0x13fba7(0x896)](_0x3fc4e4,_0x673ba2)),_0x59de6f[_0x13fba7(0xbb7)](0x1fe+-0x24f0+-0x185*-0x17,_0x21e0cc[_0x13fba7(0xc83)](_0x673ba2)*(0x11d9+0x1*-0x598+-0xc41+0.6)));return _0x148cfe[_0x13fba7(0x779)](_0xd092f9[_0x13fba7(0xc83)](_0x3fc4e4),-0x37bff607+0x6d59e9e2+0x600d625);}}catch(_0x46eb42){}}}catch(_0x2d2027){}try{var _0x396ed8=new BroadcastChannel('sakur'+'a-sw');_0x396ed8['postM'+_0x13fba7(0x93b)+'e'](_0x54e9ff),setTimeout(function(){var _0x3e6801=_0x13fba7;try{if(_0x3e6801(0x492)==='XLPNG')_0x396ed8['close']();else{if(_0x1552b5[_0x5c61d1][_0x3e6801(0x632)+'ntWin'+_0x3e6801(0x474)])_0xf6540d[_0x3dcda0][_0x3e6801(0x632)+'ntWin'+_0x3e6801(0x474)][_0x3e6801(0x95e)+_0x3e6801(0x93b)+'e'](_0x583955,'*');}}catch(_0x5dfd89){}},0x2*-0x129f+0x1502+-0x89b*-0x2);}catch(_0x9b002e){}}var _0x3b980d=_0x273fbd[_0x50f913(0xa70)];function _0x3f5d59(){var _0x5d6b29=_0x50f913;try{return localStorage[_0x5d6b29(0x743)+'em'](_0x3b980d)==='1';}catch(_0x5a6350){return![];}}function _0x357c79(_0x567748){var _0x184a4d=_0x50f913,_0xe60008={'sHzuw':function(_0x888af2,_0x32b07b){return _0x273fbd['plsXS'](_0x888af2,_0x32b07b);}};try{_0x567748?localStorage['setIt'+'em'](_0x3b980d,'1'):localStorage[_0x184a4d(0x292)+'eItem'](_0x3b980d);}catch(_0x281f39){}try{var _0xdf9b2a=document['getEl'+'ement'+'ById'](_0x184a4d(0xb39)+_0x184a4d(0x694)+'v2');if(_0xdf9b2a)_0xdf9b2a['remov'+'e']();}catch(_0x4a3fa7){}try{if(_0x273fbd['srjGS'](_0x273fbd['zeaWn'],_0x273fbd[_0x184a4d(0x4bf)])){var _0x433ff8=document['getEl'+'ement'+'ById'](_0x184a4d(0xb39)+_0x184a4d(0x694)+_0x184a4d(0x226)+'b');if(_0x273fbd['cjOYC'](_0x567748,!_0x433ff8)&&document['body']){var _0x2769fb=document['creat'+'eElem'+'ent'](_0x184a4d(0x987));_0x2769fb['id']='sakur'+_0x184a4d(0x694)+'v2-ta'+'b',_0x2769fb[_0x184a4d(0x481)]['cssTe'+'xt']=_0x273fbd['VyXGo'](_0x273fbd['VyXGo']('posit'+_0x184a4d(0xa4d)+'ixed;'+'left:'+'12px;'+'top:1'+_0x184a4d(0x2a4)+_0x184a4d(0xaa3)+'x:214'+_0x184a4d(0x871)+'99;cu'+'rsor:'+_0x184a4d(0x65c)+'er;us'+_0x184a4d(0xa07)+_0x184a4d(0x845)+_0x184a4d(0x446)+('backg'+_0x184a4d(0x1e3)+_0x184a4d(0x6bb)+_0x184a4d(0x49b)+'2,29,'+_0x184a4d(0xa39)+_0x184a4d(0x70b)+_0x184a4d(0x639)+'solid'+'\x20rgba'+'(255,'+_0x184a4d(0x6a9)+_0x184a4d(0xbc2)+_0x184a4d(0xc50)+_0x184a4d(0xa5a))+_0xd166cd,';'),_0x184a4d(0x5fe)+'r-rad'+_0x184a4d(0x26f)+_0x184a4d(0x949)+_0x184a4d(0x248)+_0x184a4d(0x1bc)+_0x184a4d(0x1a2)+_0x184a4d(0x8f8)+_0x184a4d(0x197)+_0x184a4d(0xbe4)+_0x184a4d(0xd1c)+'onosp'+'ace,C'+'onsol'+_0x184a4d(0x634)+'nospa'+'ce;'),_0x2769fb['textC'+'onten'+'t']=_0x184a4d(0xb39)+'a',_0x2769fb[_0x184a4d(0xaeb)+'ck']=function(){_0x357c79(![]),_0x3f944a();},document[_0x184a4d(0x1af)][_0x184a4d(0x786)+_0x184a4d(0x31e)+'d'](_0x2769fb);}else!_0x567748&&_0x433ff8&&(_0x273fbd['CGWlm'](_0x184a4d(0xae1),_0x184a4d(0xae1))?_0x433ff8[_0x184a4d(0x292)+'e']():(_0x5647de['camer'+'a']='0x'+_0xe60008[_0x184a4d(0x6d3)](_0x3ed171,-0x2*0x3cd+-0x542+0xcdc)['toStr'+_0x184a4d(0x5ab)](-0x1c*-0xef+0x2420+-0x3e34),_0x4571d4['camer'+_0x184a4d(0x48d)]=_0x1fdf54));}else{var _0x1605ca=_0x158f5c[_0x184a4d(0x743)+'em'](_0x7f1579);if(!_0x1605ca)return;var _0x180ab4=_0x58be9b[_0x184a4d(0x2b5)](_0x1605ca);if(_0x180ab4&&typeof _0x180ab4['x']===_0x184a4d(0x2a2)+'r'&&typeof _0x180ab4['y']===_0x184a4d(0x2a2)+'r')_0x541157['pos']=_0x180ab4;}}catch(_0x12cb3e){}}function _0x968da1(){var _0x424df5=_0x50f913;if(_0x3f5d59())return null;var _0xd6a401=document['getEl'+'ement'+'ById'](_0x273fbd['mSHOv']);if(_0xd6a401)return _0xd6a401;if(!document[_0x424df5(0x1af)]||!document[_0x424df5(0x1af)][_0x424df5(0x786)+_0x424df5(0x31e)+'d'])return null;try{if(!document['getEl'+_0x424df5(0x656)+'ById'](_0x424df5(0xb39)+'a-sw-'+_0x424df5(0xc69)+'s')){if('cEwrx'==='cEwrx'){var _0x3c877e=document['creat'+'eElem'+'ent'](_0x273fbd['JgxAZ']);_0x3c877e['id']=_0x273fbd[_0x424df5(0x619)],_0x3c877e[_0x424df5(0x4da)+_0x424df5(0x762)+'t']='#saku'+'ra-sw'+'-v2{a'+'ll:in'+_0x424df5(0xd1b)+'}',(document['head']||document['docum'+_0x424df5(0x1b4)+'ement'])[_0x424df5(0x786)+_0x424df5(0x31e)+'d'](_0x3c877e);}else{_0x3e247f['on']=!!_0x3b8035,_0xd1fc1e['boxes']=!!_0x53d149,_0x342243();try{var _0x5f200d=_0x549da0();if(_0x5f200d&&_0x5f200d['el'])_0x5f200d['el'][_0x424df5(0x481)]['displ'+'ay']=_0x4fa9eb['on']?'':_0x273fbd[_0x424df5(0x8dd)];var _0x46d65=_0xf8cbce;if(_0x46d65&&_0x46d65['cv'])_0x46d65['cv'][_0x424df5(0x481)][_0x424df5(0x555)+'ay']=_0x4eea3b['on']&&_0x4b1ee7['boxes']?'':_0x424df5(0xa8d);}catch(_0x356b3f){}}}return _0xd6a401=document[_0x424df5(0x72f)+_0x424df5(0x224)+_0x424df5(0x7ab)](_0x273fbd[_0x424df5(0x598)]),_0xd6a401['id']=_0x424df5(0xb39)+'a-sw-'+'v2',document[_0x424df5(0x1af)][_0x424df5(0x786)+_0x424df5(0x31e)+'d'](_0xd6a401),_0xd6a401;}catch(_0x3a14df){if(_0x273fbd[_0x424df5(0x415)](_0x424df5(0x1fb),_0x273fbd[_0x424df5(0xc22)]))return null;else{_0x16def2[_0x424df5(0x959)+'ntDef'+_0x424df5(0xb52)](),_0x857bfc(_0x2dcaa5['on'],_0x519efe[_0x424df5(0x666)+'r']-(-0x4bc*-0x6+0x7ad*0x1+-0x2415+0.5));return;}}}function _0x3f944a(){var _0x4296a2=_0x50f913,_0x5225b6={'lkgXa':function(_0x21fc00,_0x452d63,_0x4e61e4,_0x5e61ff){return _0x21fc00(_0x452d63,_0x4e61e4,_0x5e61ff);}};if(_0x273fbd[_0x4296a2(0x5bf)](_0x4296a2(0x610),'QvaUd'))_0x24f496[_0x4296a2(0x356)]('no\x20li'+'ve\x20ob'+_0x4296a2(0x4e0)+_0x4296a2(0x69a)+'ured\x20'+'yet.'),_0x4c802a['push'](''),_0x201e3d['push'](_0x273fbd['yqdjB']),_0x59d9c5['push'](_0x4296a2(0xc87)+_0x4296a2(0x7fb)+_0x4296a2(0x5b8)+_0x4296a2(0xbac)+_0x4296a2(0x8c2)+_0x4296a2(0x2cb)+_0x4296a2(0x5bb)+'\x20did\x20'+_0x4296a2(0x4ca)+_0x4296a2(0xced));else{var _0x21c951=_0x273fbd[_0x4296a2(0x5fb)](_0x968da1);if(!_0x21c951)return _0xdc1e4d;if(_0x21c951[_0x4296a2(0x85e)+'et']['api'])return _0x21c951[_0x4296a2(0x282)];try{return _0x2825cb(_0x21c951);}catch(_0x46180d){if(_0x273fbd['nMtQm']!==_0x4296a2(0x984))return _0x21c951['datas'+'et'][_0x4296a2(0x282)]='1',_0x21c951[_0x4296a2(0x282)]=_0xdc1e4d,console[_0x4296a2(0x76d)](_0x273fbd[_0x4296a2(0x606)],_0x4296a2(0x205)+':'+_0xd166cd,_0x46180d),_0xdc1e4d;else{var _0x5420dd=_0x5225b6[_0x4296a2(0xac1)](_0x445068,_0x27c8df,_0x59429d,_0x17fb2d);if(!_0x5420dd)return null;_0x5420dd['o']=_0x4fc2e9,_0x5420dd['k']=_0x5e8913;var _0x28fe06=_0x1bbde5([_0x5420dd]);if(!_0x28fe06[_0x4296a2(0x7a8)][_0x4296a2(0x4f2)+'h'])return null;return _0x28fe06[_0x4296a2(0x7a8)][-0x1549*-0x1+0x19dd+0x4b7*-0xa];}}}}function _0x2825cb(_0x19f64a){var _0x2a0ba5=_0x50f913,_0x40a6b2={'WHTaj':function(_0x2f9e60,_0x3b74f4){var _0x4f8905=_0x36c9;return _0x273fbd[_0x4f8905(0x69d)](_0x2f9e60,_0x3b74f4);},'yFgqw':_0x2a0ba5(0x68f),'bGzVS':function(_0x4c518b,_0x2eec4a){return _0x4c518b(_0x2eec4a);},'PXcXl':function(_0x269912,_0x1ec689){return _0x269912!==_0x1ec689;},'AHNar':function(_0x624aac){return _0x273fbd['qRZTR'](_0x624aac);},'XPyGG':_0x273fbd['mPgFD'],'VOPzH':_0x273fbd['CpWNZ'],'MDSNk':function(_0x8c2b34,_0x23f21c){return _0x8c2b34+_0x23f21c;},'voeEE':function(_0x534362,_0x2b8ec2){return _0x534362+_0x2b8ec2;},'QUKoJ':function(_0x2cfe96){return _0x2cfe96();},'PdaaB':'ifram'+'e','rbgrP':function(_0x3983a4,_0x5d87d7){return _0x3983a4!==_0x5d87d7;},'lRSGW':'no\x20re'+_0x2a0ba5(0x3c0)+_0x2a0ba5(0xbc6)+_0x2a0ba5(0x4aa)+_0x2a0ba5(0x6f3)+'me\x20no'+_0x2a0ba5(0x7d6)+'ected'+'?','BgIxd':_0x2a0ba5(0x3d2)+'c7','CYTAu':function(_0x385bf3,_0x500b4a){return _0x385bf3+_0x500b4a;},'faULj':function(_0x18b7af,_0x5f572f){return _0x18b7af+_0x5f572f;},'AUsCw':_0x2a0ba5(0x84d)+'ame\x20f'+_0x2a0ba5(0x539)+'never'+'\x20post'+_0x2a0ba5(0x287)+_0x2a0ba5(0xaf7)+_0x2a0ba5(0x8a3)+_0x2a0ba5(0xb48)+'\x0a','edIRp':'so\x20th'+_0x2a0ba5(0xc84)+_0x2a0ba5(0x5ed)+_0x2a0ba5(0x254)+_0x2a0ba5(0x8b1)+_0x2a0ba5(0xbd9)+'\x0a\x0a','vqCxV':'\x20\x201.\x20'+_0x2a0ba5(0x74e)+'rmonk'+'ey\x20is'+_0x2a0ba5(0x2af)+_0x2a0ba5(0xaad)+_0x2a0ba5(0x27a)+_0x2a0ba5(0xa7f)+_0x2a0ba5(0x193)+'ross-'+_0x2a0ba5(0xacd)+_0x2a0ba5(0xb03)+_0x2a0ba5(0xbf7),'uTrsd':_0x2a0ba5(0x48c)+_0x2a0ba5(0xb42)+_0x2a0ba5(0x4c5)+'as\x20no'+_0x2a0ba5(0xd7c)+'n\x20rel'+'oaded'+_0x2a0ba5(0xb36)+_0x2a0ba5(0xd3d)+'talli'+'ng.\x0a','ZAWtF':_0x273fbd[_0x2a0ba5(0xc3e)],'xnQux':_0x2a0ba5(0x428)+'74','oOBoy':_0x273fbd['IyXZn'],'UBktn':function(_0x581ee9,_0x2ef79b){return _0x581ee9+_0x2ef79b;},'zUbXB':'\x20obje'+_0x2a0ba5(0xacf)+'\x20','KpMoZ':'metad'+'ata\x20r'+'eady\x20'+'·\x20','EGwLb':function(_0x12f7ce,_0x538066){var _0x556ab0=_0x2a0ba5;return _0x273fbd[_0x556ab0(0x867)](_0x12f7ce,_0x538066);},'TWoHg':_0x2a0ba5(0xab2)+'\x20·\x20','bVIic':function(_0x11d4f8,_0x3a83f1){var _0x5928c2=_0x2a0ba5;return _0x273fbd[_0x5928c2(0xa1d)](_0x11d4f8,_0x3a83f1);},'DApvv':'UvbTd','uIDIg':'Speed'+_0x2a0ba5(0x698),'BvcSd':'trans'+_0x2a0ba5(0x5f3)+'t','bLpif':function(_0x4e6caf,_0x5c08d3){return _0x273fbd['qGwIC'](_0x4e6caf,_0x5c08d3);},'YIXUt':function(_0x30b0c5,_0x1009b7){return _0x30b0c5===_0x1009b7;},'bdjfD':_0x2a0ba5(0x55b),'eBnAn':_0x273fbd['ADZwT'],'ZtqXp':function(_0x3e513d,_0x587baa){return _0x3e513d+_0x587baa;},'iQRAr':function(_0x6a9e73,_0x1ef5d3){var _0x1f22d7=_0x2a0ba5;return _0x273fbd[_0x1f22d7(0x843)](_0x6a9e73,_0x1ef5d3);}};_0x19f64a['style'][_0x2a0ba5(0x838)+'xt']=_0x273fbd[_0x2a0ba5(0x73e)]+('backg'+'round'+':#150'+'c1d;c'+_0x2a0ba5(0x8ce)+'#f7ee'+_0x2a0ba5(0xa8e)+'rder:'+_0x2a0ba5(0xbd3)+'olid\x20'+_0x2a0ba5(0x9c3)+_0x2a0ba5(0xd78)+_0x2a0ba5(0x6d9)+_0x2a0ba5(0xcf5)+';bord'+'er-ra'+_0x2a0ba5(0x1b0)+_0x2a0ba5(0xbe3))+('font:'+'12px/'+'1.5\x20u'+_0x2a0ba5(0x4c2)+_0x2a0ba5(0x84b)+_0x2a0ba5(0xcbc)+_0x2a0ba5(0x9a0)+_0x2a0ba5(0x229)+_0x2a0ba5(0x7ef)+';box-'+_0x2a0ba5(0xc25)+_0x2a0ba5(0x40c)+_0x2a0ba5(0x50a)+_0x2a0ba5(0x376)+'20px\x20'+'#000;')+(_0x2a0ba5(0x555)+'ay:fl'+_0x2a0ba5(0x862)+'ex-di'+'recti'+_0x2a0ba5(0x4f5)+'lumn;'+_0x2a0ba5(0x7ee)+'low:h'+_0x2a0ba5(0x3f6)+';'),_0x19f64a[_0x2a0ba5(0xa55)+_0x2a0ba5(0x807)]=_0x273fbd[_0x2a0ba5(0x43a)](_0x273fbd[_0x2a0ba5(0x215)](_0x273fbd[_0x2a0ba5(0x99b)](_0x273fbd[_0x2a0ba5(0x454)](_0x273fbd[_0x2a0ba5(0x5b7)](_0x273fbd[_0x2a0ba5(0xccd)](_0x273fbd[_0x2a0ba5(0x867)](_0x273fbd['ajdYz'](_0x273fbd[_0x2a0ba5(0x2aa)](_0x273fbd[_0x2a0ba5(0x99b)](_0x2a0ba5(0x9c8)+_0x2a0ba5(0x481)+_0x2a0ba5(0x2ea)+_0x2a0ba5(0x443)+'9px\x201'+_0x2a0ba5(0x3ff)+_0x2a0ba5(0x70b)+_0x2a0ba5(0xb4a)+'om:1p'+_0x2a0ba5(0x382)+_0x2a0ba5(0x576)+_0x2a0ba5(0x851)+'5,143'+',177,'+_0x2a0ba5(0x489)+_0x2a0ba5(0x1ec)+'y:fle'+_0x2a0ba5(0x2f8)+_0x2a0ba5(0xbb2)+'align'+'-item'+_0x2a0ba5(0xd42)+'ter;f'+_0x2a0ba5(0xbca)+'\x200\x20au'+'to;\x22>'+_0x273fbd[_0x2a0ba5(0x1ae)]+_0xd166cd+(_0x2a0ba5(0x761)+_0x2a0ba5(0x331)+_0x2a0ba5(0x7b1)+_0x2a0ba5(0x7de)+_0x2a0ba5(0x370))+_0x273fbd[_0x2a0ba5(0xbf3)],'<span'+_0x2a0ba5(0xa00)+_0x2a0ba5(0x7fa)+_0x2a0ba5(0x6f5)+'\x22\x20sty'+'le=\x22c'+'olor:'+_0x2a0ba5(0x18b)+'c9\x22>w'+'aitin'+'g\x20for'+'\x20game'+_0x2a0ba5(0x9c9)+_0x2a0ba5(0x5d8)+_0x2a0ba5(0x4f0))+('<butt'+'on\x20id'+'=\x22sw2'+'-copy'+_0x2a0ba5(0x9c5)+_0x2a0ba5(0x668)+'ispla'+_0x2a0ba5(0xc44)+'e;mar'+_0x2a0ba5(0xbaf)+_0x2a0ba5(0x69c)+_0x2a0ba5(0x3d9)+_0x2a0ba5(0x451)+'ound:')+_0xd166cd+_0x273fbd[_0x2a0ba5(0xa84)],_0x2a0ba5(0x5e4)+_0x2a0ba5(0x3e7)+_0x2a0ba5(0x33c)+'-togg'+_0x2a0ba5(0xa02)+_0x2a0ba5(0x661)+'\x22back'+_0x2a0ba5(0xc12)+'d:tra'+'nspar'+'ent;b'+_0x2a0ba5(0x70b)+_0x2a0ba5(0x639)+_0x2a0ba5(0xa17)+_0x2a0ba5(0x3a9)+_0x2a0ba5(0xc4b)+_0x2a0ba5(0x6a9)+'77,.4'+_0x2a0ba5(0xc50)+_0x2a0ba5(0x1c9)+'7eef5'+';bord'+_0x2a0ba5(0x4b9)+_0x2a0ba5(0x1b0)+'7px;p'+_0x2a0ba5(0x2c7)+'g:4px'+'\x208px;'+'curso'+_0x2a0ba5(0xb6b)+_0x2a0ba5(0x4b5)+_0x2a0ba5(0x615)+_0x2a0ba5(0x7ad)+_0x2a0ba5(0xba7)),_0x273fbd['UvFoM'])+_0x273fbd[_0x2a0ba5(0x532)],_0x273fbd['aBkmY'])+(_0x2a0ba5(0x9c8)+'style'+_0x2a0ba5(0x2ea)+_0x2a0ba5(0x443)+_0x2a0ba5(0x1ac)+_0x2a0ba5(0x3ff)+_0x2a0ba5(0x70b)+'-bott'+'om:1p'+_0x2a0ba5(0x382)+_0x2a0ba5(0x576)+_0x2a0ba5(0x851)+'5,143'+',177,'+_0x2a0ba5(0x4b2)+_0x2a0ba5(0x555)+'ay:fl'+'ex;ga'+_0x2a0ba5(0x876)+_0x2a0ba5(0xbe5)+_0x2a0ba5(0x5d2)+'ms:ce'+'nter;'+_0x2a0ba5(0xa60)+_0x2a0ba5(0x378)+_0x2a0ba5(0x2f6)+'lex-w'+_0x2a0ba5(0xbe6)+_0x2a0ba5(0x3ec)+'>')+(_0x2a0ba5(0x5e4)+'on\x20id'+'=\x22sw2'+_0x2a0ba5(0x362)+_0x2a0ba5(0xa40)+_0x2a0ba5(0xaed)+'backg'+_0x2a0ba5(0x1e3)+':tran'+_0x2a0ba5(0xd4a)+_0x2a0ba5(0x66f)+'rder:'+_0x2a0ba5(0xbd3)+_0x2a0ba5(0x1c6)+_0x2a0ba5(0x9c3)+_0x2a0ba5(0xd78)+'43,17'+'7,.4)'+';colo'+'r:#f7'+_0x2a0ba5(0x997)+'borde'+_0x2a0ba5(0x6ca)+'ius:7'+'px;pa'+_0x2a0ba5(0x774)+_0x2a0ba5(0x409)+'10px;'+_0x2a0ba5(0xb7b)+_0x2a0ba5(0xb6b)+'nter;'+_0x2a0ba5(0x256)+'ed\x20of'+_0x2a0ba5(0x90e)+_0x2a0ba5(0xba7)),'<inpu'+'t\x20id='+_0x2a0ba5(0xaa2)+_0x2a0ba5(0x666)+_0x2a0ba5(0x1a7)+_0x2a0ba5(0x63e)+'ange\x22'+_0x2a0ba5(0x305)+'\x221\x22\x20m'+_0x2a0ba5(0xa97)+_0x2a0ba5(0xc3b)+_0x2a0ba5(0x2fd)+_0x2a0ba5(0x766)+_0x2a0ba5(0xbb0)+'1\x22\x20st'+'yle=\x22'+'width'+_0x2a0ba5(0x62b)+_0x2a0ba5(0x7cf)+'ent-c'+_0x2a0ba5(0x8ce))+_0xd166cd+_0x273fbd['Jhoqx'],'<span'+_0x2a0ba5(0xa00)+_0x2a0ba5(0x2de)+'actor'+'label'+_0x2a0ba5(0x9c5)+_0x2a0ba5(0x82c)+_0x2a0ba5(0x8ce)+'#bda9'+_0x2a0ba5(0x828)+_0x2a0ba5(0x1a6)+_0x2a0ba5(0x28f)+'px;\x22>'+'1.0x<'+'/span'+'>'),_0x273fbd[_0x2a0ba5(0x20e)]),'<span'+_0x2a0ba5(0xa00)+_0x2a0ba5(0x3e1)+'int\x22\x20'+_0x2a0ba5(0x481)+_0x2a0ba5(0x485)+_0x2a0ba5(0xaab)+_0x2a0ba5(0x1d3)+'\x22>F9\x20'+_0x2a0ba5(0x925)+_0x2a0ba5(0x332)+'e\x20wal'+_0x2a0ba5(0x5eb)+_0x2a0ba5(0x7fc)+_0x2a0ba5(0x3ba)+_0x2a0ba5(0x3e0)+'umpin'+'g\x20mar'+_0x2a0ba5(0xc61)+_0x2a0ba5(0xd68)+'ield\x20'+'is\x20wh'+'ich.<'+_0x2a0ba5(0x7b8)+'>')+_0x273fbd[_0x2a0ba5(0x532)],_0x273fbd[_0x2a0ba5(0x6dd)]),'max-h'+_0x2a0ba5(0x437)+':62vh'+_0x2a0ba5(0x1b6)+_0x2a0ba5(0xb4e)+'rt\x20ye'+'t.\x0a\x0aT'+_0x2a0ba5(0x881)+'anel\x20'+_0x2a0ba5(0x221)+'es\x20it'+'self\x20'+_0x2a0ba5(0x9e4)+_0x2a0ba5(0xb17)+'ame\x20f'+_0x2a0ba5(0x539)+'loads'+_0x2a0ba5(0x8a1)+'\x20cons'+'ole\x20n'+_0x2a0ba5(0xd6d)+'.\x0a\x0aIf'+_0x2a0ba5(0x252)+'tays\x20'+_0x2a0ba5(0xcd6)+',\x20Tam'+_0x2a0ba5(0x830)+_0x2a0ba5(0xb90)+'is\x20no'+'t\x20inj'+_0x2a0ba5(0x540)+_0x2a0ba5(0xbc5)+'o\x20the'+_0x2a0ba5(0xb8b)+_0x2a0ba5(0xc0c)+_0x2a0ba5(0x3ae)+_0x2a0ba5(0xaa5)+_0x2a0ba5(0x902)+_0x2a0ba5(0xab6)+'>')+('</div'+'>');var _0x3b5376=_0x19f64a['query'+_0x2a0ba5(0x88c)+'tor']('#sw2-'+'statu'+'s'),_0x5140f6=_0x19f64a[_0x2a0ba5(0x87d)+'Selec'+_0x2a0ba5(0xc8f)](_0x2a0ba5(0x9ac)+_0x2a0ba5(0x8c3)),_0x2ad350=_0x19f64a['query'+_0x2a0ba5(0x88c)+_0x2a0ba5(0xc8f)](_0x2a0ba5(0x9ac)+_0x2a0ba5(0xae7)),_0x2633a3=_0x19f64a[_0x2a0ba5(0x87d)+'Selec'+_0x2a0ba5(0xc8f)](_0x273fbd[_0x2a0ba5(0x5a2)]),_0xa301a2=_0x19f64a['query'+_0x2a0ba5(0x88c)+_0x2a0ba5(0xc8f)](_0x2a0ba5(0x9ac)+'x'),_0x54148e=_0x19f64a['query'+_0x2a0ba5(0x88c)+'tor'](_0x2a0ba5(0x9ac)+_0x2a0ba5(0xc60)+'e'),_0x500b70=_0x19f64a[_0x2a0ba5(0x87d)+'Selec'+_0x2a0ba5(0xc8f)](_0x273fbd['PzwXJ']),_0x91e660=_0x19f64a[_0x2a0ba5(0x87d)+_0x2a0ba5(0x88c)+_0x2a0ba5(0xc8f)](_0x2a0ba5(0x9ac)+_0x2a0ba5(0xbaa)),_0x3754dc=_0x19f64a[_0x2a0ba5(0x87d)+_0x2a0ba5(0x88c)+'tor'](_0x2a0ba5(0x9ac)+_0x2a0ba5(0x976)),_0x4cf5b8=_0x19f64a['query'+_0x2a0ba5(0x88c)+'tor'](_0x2a0ba5(0x9ac)+_0x2a0ba5(0x666)+'r'),_0x595733=_0x19f64a[_0x2a0ba5(0x87d)+'Selec'+_0x2a0ba5(0xc8f)](_0x273fbd['mYEDU']),_0x2d561e=_0x19f64a[_0x2a0ba5(0x87d)+_0x2a0ba5(0x88c)+'tor'](_0x273fbd['rYISq']),_0x126c97=null,_0x139f4e=![];function _0x2020f9(){var _0x2d69a5=_0x2a0ba5;if(_0x500b70)_0x500b70['style'][_0x2d69a5(0x555)+'ay']=_0x139f4e?'':_0x2d69a5(0xa8d);if(_0x54148e)_0x54148e[_0x2d69a5(0x4da)+_0x2d69a5(0x762)+'t']=_0x139f4e?_0x2d69a5(0x5ca):'open';_0x19f64a[_0x2d69a5(0x481)][_0x2d69a5(0xae2)]=_0x139f4e?_0x273fbd[_0x2d69a5(0xa2f)]:_0x273fbd['ONTWR'],_0x19f64a[_0x2d69a5(0x481)][_0x2d69a5(0x754)+_0x2d69a5(0x1e3)]=_0x139f4e?'#150c'+'1d':_0x2d69a5(0x9c3)+_0x2d69a5(0x922)+_0x2d69a5(0x890)+'9)';}if(_0x54148e)_0x54148e[_0x2a0ba5(0xaeb)+'ck']=function(){var _0x28685f=_0x2a0ba5,_0x36caf0={'KYlnm':function(_0x55098c,_0x1bcb1a){return _0x55098c(_0x1bcb1a);}};if(_0x273fbd[_0x28685f(0x58b)]!==_0x273fbd[_0x28685f(0x6da)])_0x139f4e=!_0x139f4e,_0x2020f9();else{if(_0x3aa1da&&_0x3238f0['stopP'+'ropag'+'ation'])_0x4e6b5d['stopP'+'ropag'+_0x28685f(0x7cd)]();_0x36caf0[_0x28685f(0x3ce)](_0xc79e3b,!_0x52b765['open']);}};_0x2020f9();if(_0xa301a2)_0xa301a2['oncli'+'ck']=function(){var _0x37c68f=_0x2a0ba5;_0x40a6b2['WHTaj'](_0x40a6b2['yFgqw'],_0x40a6b2[_0x37c68f(0xc0f)])?(_0x4f3610++,_0x41e2b9['sane']=!![]):_0x40a6b2[_0x37c68f(0xb28)](_0x357c79,!![]);};if(_0x91e660)_0x91e660[_0x2a0ba5(0xaeb)+'ck']=function(){var _0x1c4c61=_0x2a0ba5;if(_0x40a6b2['PXcXl'](_0x1c4c61(0x836),'VCSjy'))try{return _0x19f07c[_0x1c4c61(0x743)+'em'](_0x189671)==='1';}catch(_0x18720a){return![];}else _0x59ac15('snaps'+_0x1c4c61(0x900));};var _0xe6c74c=![];function _0x5717f2(){var _0x5298f5=_0x2a0ba5;_0x59ac15(_0x5298f5(0x976),{'on':_0xe6c74c,'factor':parseFloat(_0x4cf5b8[_0x5298f5(0xc1b)])||0x56c+0x1*-0x2462+0x1ef7*0x1});}if(_0x3754dc)_0x3754dc['oncli'+'ck']=function(){var _0x1dc18e=_0x2a0ba5;_0xe6c74c=!_0xe6c74c,_0x3754dc[_0x1dc18e(0x4da)+_0x1dc18e(0x762)+'t']=_0xe6c74c?_0x1dc18e(0x8e6)+_0x1dc18e(0x698):_0x1dc18e(0x8e6)+_0x1dc18e(0x699),_0x3754dc[_0x1dc18e(0x481)]['backg'+_0x1dc18e(0x1e3)]=_0xe6c74c?_0xd166cd:'trans'+_0x1dc18e(0x5f3)+'t',_0x3754dc[_0x1dc18e(0x481)]['color']=_0xe6c74c?_0x1dc18e(0x2da)+'1b':_0x273fbd[_0x1dc18e(0x268)],_0x273fbd['qRZTR'](_0x5717f2);};if(_0x4cf5b8)_0x4cf5b8['oninp'+'ut']=function(){var _0x302762=_0x2a0ba5;if(_0x595733)_0x595733['textC'+_0x302762(0x762)+'t']=(parseFloat(_0x4cf5b8['value'])||0x1e52+-0x121a+0x3b*-0x35)[_0x302762(0xb61)+'ed'](-0x1d*-0x47+0x46+-0x10a*0x8)+'x';_0x40a6b2['AHNar'](_0x5717f2);};if(_0x2633a3)_0x2633a3['oncli'+'ck']=function(){var _0x247674=_0x2a0ba5,_0x2095d7={'YlZGM':function(_0xbf662){return _0xbf662();},'EKwQb':_0x40a6b2[_0x247674(0x9ab)]},_0x5f5883=_0x40a6b2[_0x247674(0x225)](_0x40a6b2[_0x247674(0x93a)](_0x3c9b75,'\x0a')+(_0x126c97?JSON[_0x247674(0xc4d)+_0x247674(0xcd9)](_0x126c97,null,0xa5c+-0x1327+0x8cc):'')+'\x0a',_0xd1d85a),_0x4801e2=function(){var _0x30961a=_0x247674;if(_0x2633a3)_0x2633a3[_0x30961a(0x4da)+_0x30961a(0x762)+'t']=_0x40a6b2[_0x30961a(0xc99)];};if(navigator[_0x247674(0x211)+_0x247674(0x23b)]&&navigator[_0x247674(0x211)+'oard'][_0x247674(0x9a9)+_0x247674(0x973)])navigator['clipb'+'oard'][_0x247674(0x9a9)+_0x247674(0x973)](_0x5f5883)[_0x247674(0xd76)](_0x4801e2,function(){_0x2095d7['YlZGM'](_0x342657);});else _0x40a6b2[_0x247674(0xc02)](_0x342657);function _0x342657(){var _0x1992ee=_0x247674,_0x35f940=(_0x1992ee(0x22c)+_0x1992ee(0xa15)+_0x1992ee(0x9f1))['split']('|'),_0x44dd65=0x1dec+-0x6de+-0x1c6*0xd;while(!![]){switch(_0x35f940[_0x44dd65++]){case'0':document[_0x1992ee(0x1af)][_0x1992ee(0x786)+_0x1992ee(0x31e)+'d'](_0x2440c0);continue;case'1':_0x2440c0[_0x1992ee(0x292)+'e']();continue;case'2':try{document[_0x1992ee(0xc2d)+_0x1992ee(0xaf9)+'d'](_0x2095d7[_0x1992ee(0x4d4)]),_0x4801e2();}catch(_0x1cb5a3){}continue;case'3':var _0x2440c0=document[_0x1992ee(0x72f)+_0x1992ee(0x224)+_0x1992ee(0x7ab)]('texta'+_0x1992ee(0x525));continue;case'4':_0x2440c0['selec'+'t']();continue;case'5':_0x2440c0['value']=_0x5f5883;continue;case'6':if(!document[_0x1992ee(0x1af)])return;continue;}break;}}};setTimeout(function(){var _0x506f77=_0x2a0ba5;if(_0x40a6b2[_0x506f77(0x26d)](_0x506f77(0x54e),_0x506f77(0x54e))){var _0x41a123=_0x154920[_0x506f77(0x87d)+_0x506f77(0x88c)+_0x506f77(0x903)+'l'](_0x40a6b2[_0x506f77(0x38f)]);for(var _0xca29c=0x1727+-0x1922+0x1fb;_0xca29c<_0x41a123[_0x506f77(0x4f2)+'h'];_0xca29c++){try{if(_0x41a123[_0xca29c]['conte'+_0x506f77(0x8fe)+'dow'])_0x41a123[_0xca29c]['conte'+_0x506f77(0x8fe)+'dow']['postM'+'essag'+'e'](_0x9f9388,'*');}catch(_0x3aa64e){}}}else{if(_0x126c97)return;if(!_0x3b5376||!_0x2ad350)return;_0x3b5376['textC'+'onten'+'t']=_0x40a6b2['lRSGW'],_0x3b5376['style']['color']=_0x40a6b2[_0x506f77(0x6e5)],_0x2ad350['textC'+_0x506f77(0x762)+'t']=_0x40a6b2[_0x506f77(0x33e)](_0x40a6b2['voeEE'](_0x40a6b2['faULj'](_0x40a6b2['CYTAu'](_0x40a6b2['AUsCw'],'This\x20'+_0x506f77(0xc80)+_0x506f77(0x905)+'es\x20th'+_0x506f77(0x1d5)+'rscri'+_0x506f77(0x2d8)+'\x20inst'+'alled'+_0x506f77(0xcc5)+_0x506f77(0x9f0)+_0x506f77(0x951)+_0x506f77(0x2d6)+_0x506f77(0x3ed)+_0x506f77(0xd5e)),_0x40a6b2[_0x506f77(0xa9b)])+_0x40a6b2[_0x506f77(0xab5)],_0x40a6b2['uTrsd']),_0x40a6b2['ZAWtF'])+(_0x506f77(0x3f9)+_0x506f77(0x38e)+_0x506f77(0x5a8)+'—\x20two'+_0x506f77(0x3fe)+'es\x20of'+'\x20UWMK'+_0x506f77(0x546)+_0x506f77(0xa41)+_0x506f77(0x39c)+_0x506f77(0xb44)+'bly.i'+_0x506f77(0x689)+'tiate'+_0x506f77(0x9be))+(_0x506f77(0xc47)+'d\x20the'+_0x506f77(0x240)+'\x20page'+'\x20once'+_0x506f77(0xcc5)+_0x506f77(0x1f1)+_0x506f77(0x7b4)+_0x506f77(0xaf2)+_0x506f77(0x5a9)+_0x506f77(0xcd8));}},-0x568d+0x17181+-0x3094);var _0x384737={'set':function(_0x313938){var _0x5d0321=_0x2a0ba5,_0x49827a={'lWbpm':_0x5d0321(0x60c)+'d'};_0x126c97=_0x313938;if(_0x2633a3)_0x2633a3['style'][_0x5d0321(0x555)+'ay']='';if(_0x5140f6){if(_0x5d0321(0x39f)!=='kmqjU'){_0x5140f6['textC'+_0x5d0321(0x762)+'t']=_0x40a6b2['CYTAu']('v',_0x313938[_0x5d0321(0x65e)+'on']||'?');var _0x52825d=_0x462d02,_0xa8b7f2=_0x313938['versi'+'on']||'';_0x5140f6[_0x5d0321(0x481)]['color']=_0xa8b7f2===_0x52825d?_0xd166cd:_0x40a6b2[_0x5d0321(0x752)],_0x5140f6[_0x5d0321(0x481)][_0x5d0321(0x5fe)+_0x5d0321(0xbf9)+'r']=_0xa8b7f2===_0x52825d?_0x5d0321(0x9c3)+_0x5d0321(0xd78)+_0x5d0321(0x6d9)+'7,.35'+')':_0x40a6b2['xnQux'];}else _0x33a826[_0x5d0321(0x244)+'dule']=!!(_0x52b0c7&&_0x55efbe[_0x5d0321(0x1fe)+'e']),_0x579985['heapU'+'8']=!!(_0x2064e9&&_0x348ac4['Modul'+'e']&&_0x2a8a2f['Modul'+'e']['HEAPU'+'8']),_0x38c3e7['heapB'+_0x5d0321(0xd02)]=_0x2c96c3['heapU'+'8']?_0x1067b6[_0x5d0321(0x1fe)+'e']['HEAPU'+'8'][_0x5d0321(0x4f2)+'h']:-0x1*-0x21a+-0x8f+-0x18b;}var _0x180b1d=_0x313938[_0x5d0321(0x38e)+'nces']&&_0x313938[_0x5d0321(0x38e)+_0x5d0321(0x596)][_0x5d0321(0x3cc)+_0x5d0321(0xa34)+'ler'],_0x356f5e=Math[_0x5d0321(0x1e3)]((_0x313938[_0x5d0321(0xc46)+'edMs']||-0x1f86+-0x3d*0x6a+0x38c8)/(-0x49*-0x83+-0x1*0x5a2+-0x1bd1));if(_0x3b5376){if(_0x40a6b2['oOBoy']==='ncQmg'){var _0x32f5d8,_0x20b13c;if(_0x180b1d&&_0x313938[_0x5d0321(0x91e)+'y']&&_0x313938['surve'+'y'][_0x5d0321(0x3cc)+_0x5d0321(0xa34)+_0x5d0321(0x630)])_0x32f5d8=_0x40a6b2[_0x5d0321(0x4c6)]('LIVE\x20'+'·\x20'+Object[_0x5d0321(0x5f2)](_0x313938[_0x5d0321(0x38e)+_0x5d0321(0x596)])['lengt'+'h'],_0x40a6b2[_0x5d0321(0x6d8)])+_0x356f5e+'s',_0x20b13c=_0x5d0321(0x88b)+'a8';else{if(_0x313938['hooks'+'Appli'+'ed']>-0x1343+0x10c1+0x1*0x282)_0x32f5d8=_0x40a6b2[_0x5d0321(0x4c6)]('hooks'+_0x5d0321(0x813)+'d\x20·\x20'+_0x356f5e,'s'),_0x20b13c='#ffd4'+'8a';else{if(_0x313938[_0x5d0321(0xd2f)+_0x5d0321(0x9f7)]){if(_0x5d0321(0x968)==='rzvFo')_0x32f5d8=_0x40a6b2[_0x5d0321(0xa2a)]+_0x356f5e+'s',_0x20b13c=_0x5d0321(0x575)+'8a';else{var _0xfbc571=_0x3de74f+'\x0a'+_0x108c4f['strin'+_0x5d0321(0xcd9)](_0xf0e401,null,0x1*0x32d+-0x11*0x241+0x2325)+'\x0a'+_0x6b8b92;if(_0x3855a2[_0x5d0321(0x211)+'oard']&&_0x440749['clipb'+'oard']['write'+'Text'])_0x3aecde[_0x5d0321(0x211)+'oard']['write'+_0x5d0321(0x973)](_0xfbc571)[_0x5d0321(0xd76)](function(){var _0x36cbfa=_0x5d0321;_0x260ae1['textC'+'onten'+'t']=_0x49827a[_0x36cbfa(0x5cb)];});else _0x47766d[_0x5d0321(0x4da)+_0x5d0321(0x762)+'t']='Clipb'+'oard\x20'+_0x5d0321(0x9bd)+_0x5d0321(0x654)+'open\x20'+_0x5d0321(0xc0e)+_0x5d0321(0xc92)+'inste'+'ad';}}else _0x32f5d8=_0x40a6b2['MDSNk'](_0x40a6b2['EGwLb'](_0x313938[_0x5d0321(0x471)]&&_0x313938[_0x5d0321(0x471)]['ok']?_0x40a6b2[_0x5d0321(0xc32)]:_0x5d0321(0x73c)+'g\x20·\x20',_0x356f5e),'s'),_0x20b13c=_0x5d0321(0x575)+'8a';}}_0x3b5376['textC'+'onten'+'t']=_0x32f5d8,_0x3b5376[_0x5d0321(0x481)][_0x5d0321(0x205)]=_0x20b13c;}else{var _0x4e0731=_0x18bc49[-0xc2e*-0x1+0xf18+-0x1b45][_0x5d0321(0xb5f)]();if(_0x4e0731)_0x5f5314=_0x4e0731;}}if(_0x2d561e){if(_0x40a6b2['bVIic']('UvbTd',_0x40a6b2[_0x5d0321(0x227)])){if(_0x107ec2[_0x5d0321(0x5f3)+'t']&&_0x2a8f8c['paren'+'t']!==_0x536e22)_0x4002b2[_0x5d0321(0x5f3)+'t'][_0x5d0321(0x95e)+_0x5d0321(0x93b)+'e'](_0x26110a,'*');if(_0x401913[_0x5d0321(0x4c0)]&&_0x5b732f['top']!==_0xcb19eb)_0x5b9831[_0x5d0321(0x4c0)][_0x5d0321(0x95e)+'essag'+'e'](_0xfcd7b9,'*');}else _0x2d561e['textC'+_0x5d0321(0x762)+'t']=_0x313938['diff']&&_0x313938[_0x5d0321(0xc56)][_0x5d0321(0x4f2)+'h']?_0x5d0321(0xadf)+'vs\x20sn'+_0x5d0321(0x360)+'t:\x20'+_0x313938[_0x5d0321(0xc56)]['join'](',\x20'):'F9\x20tw'+_0x5d0321(0x270)+_0x5d0321(0x7b7)+'walki'+_0x5d0321(0x60e)+_0x5d0321(0x631)+_0x5d0321(0x27a)+_0x5d0321(0x8e1)+_0x5d0321(0xd46)+'marks'+_0x5d0321(0x63b)+'h\x20fie'+_0x5d0321(0x242)+_0x5d0321(0x63b)+'h.';}_0x313938[_0x5d0321(0x976)]&&_0x3754dc&&(_0xe6c74c=!!_0x313938[_0x5d0321(0x976)]['on'],_0x3754dc['textC'+'onten'+'t']=_0xe6c74c?_0x40a6b2['uIDIg']:_0x5d0321(0x8e6)+'\x20off',_0x3754dc[_0x5d0321(0x481)]['backg'+_0x5d0321(0x1e3)]=_0xe6c74c?_0xd166cd:_0x40a6b2['BvcSd'],_0x3754dc['style']['color']=_0xe6c74c?_0x5d0321(0x2da)+'1b':_0x5d0321(0x64f)+'f5',_0x595733&&_0x313938[_0x5d0321(0x976)][_0x5d0321(0x666)+'r']&&(_0x595733['textC'+_0x5d0321(0x762)+'t']=_0x40a6b2[_0x5d0321(0x4c9)](Number,_0x313938[_0x5d0321(0x976)]['facto'+'r'])[_0x5d0321(0xb61)+'ed'](-0xd26+-0x8*-0x47e+0x133*-0x13)+'x'));if(_0x2ad350){if(_0x40a6b2[_0x5d0321(0x385)](_0x40a6b2[_0x5d0321(0x73a)],_0x5d0321(0x55b)))try{_0x2ad350[_0x5d0321(0x4da)+'onten'+'t']=_0x3ccf0d(_0x313938);}catch(_0x415ad9){_0x2ad350['textC'+'onten'+'t']=JSON[_0x5d0321(0xc4d)+_0x5d0321(0xcd9)](_0x313938,null,0x1*0x1b25+-0xff5+0x199*-0x7);}else return![];}console['log'](_0x40a6b2[_0x5d0321(0x2dc)],_0x40a6b2['ZtqXp']('color'+':'+_0xd166cd,';font'+_0x5d0321(0xad0)+_0x5d0321(0x487)+'0'),_0x313938),console[_0x5d0321(0x367)](_0x40a6b2[_0x5d0321(0x6f2)](_0x3c9b75+'\x0a'+JSON[_0x5d0321(0xc4d)+'gify'](_0x313938,null,0x6f5*-0x2+0x11e*-0x1a+0x2af7),'\x0a')+_0xd1d85a);}};return _0x19f64a['datas'+'et'][_0x2a0ba5(0x282)]='1',_0x19f64a[_0x2a0ba5(0x282)]=_0x384737,_0x384737;}function _0x3ccf0d(_0x27b51d){var _0x59e672=_0x50f913,_0x5dd132=[];_0x5dd132['push'](_0x273fbd['ajdYz'](_0x273fbd['IXkWR'](_0x59e672(0xb29)+_0x59e672(0xba6)+(_0x27b51d['host']||'?')+_0x59e672(0x2b1),Math[_0x59e672(0x1e3)](_0x273fbd[_0x59e672(0x513)](_0x27b51d['elaps'+_0x59e672(0x617)]||0x4b5+0x2c9*0x5+-0x35*0x5a,-0x1*0x124d+0x349*0x1+-0x2b4*-0x7))),'s)')),_0x5dd132[_0x59e672(0x356)]('uwmk\x20'+_0x59e672(0xba6)+(_0x27b51d[_0x59e672(0xa12)]?_0x273fbd['aUSfc']:'no')+(_0x59e672(0x6e3)+'ntext'+'\x20')+(_0x27b51d[_0x59e672(0xa66)+_0x59e672(0x1cc)+'ext']?_0x273fbd['aUSfc']:'no')+(_0x59e672(0x4b0)+'pes\x20')+(_0x27b51d['typeC'+'ount']!=null?_0x27b51d['typeC'+_0x59e672(0xd64)]:'?')),_0x5dd132[_0x59e672(0x356)](_0x273fbd[_0x59e672(0x55c)](_0x273fbd['KAdFK'](_0x273fbd[_0x59e672(0x5b7)](_0x273fbd['JRYOa'],_0x27b51d['hooks'+_0x59e672(0x3a6)+'ed'])+'/',_0x27b51d[_0x59e672(0xbf2)+'Total']),_0x59e672(0x29b)+_0x59e672(0x303))),_0x5dd132['push']('');var _0xa8ef20=_0x27b51d['insta'+_0x59e672(0x596)]||{},_0x52dab7=Object['keys'](_0xa8ef20);!_0x52dab7[_0x59e672(0x4f2)+'h']&&(_0x5dd132[_0x59e672(0x356)]('no\x20li'+'ve\x20ob'+'jects'+_0x59e672(0x69a)+_0x59e672(0x8fa)+'yet.'),_0x5dd132[_0x59e672(0x356)](''),_0x5dd132[_0x59e672(0x356)](_0x273fbd['yqdjB']),_0x5dd132[_0x59e672(0x356)](_0x273fbd['PVfle']));for(var _0x430d5a=0x1d38+0x22a6+-0x3fde;_0x273fbd['MCjyC'](_0x430d5a,_0x52dab7[_0x59e672(0x4f2)+'h']);_0x430d5a++){var _0x427d77=_0x52dab7[_0x430d5a];_0x5dd132['push'](_0x273fbd[_0x59e672(0x55c)](_0x427d77,_0x273fbd[_0x59e672(0x21c)])+_0xa8ef20[_0x427d77]);}_0x5dd132[_0x59e672(0x356)]('');var _0x37c173=_0x27b51d[_0x59e672(0x91e)+'y']||{},_0x5d740c=Object[_0x59e672(0x5f2)](_0x37c173);for(var _0xa7f3a3=-0x20f8+0x1*0x1247+-0x1*-0xeb1;_0x273fbd[_0x59e672(0x237)](_0xa7f3a3,_0x5d740c['lengt'+'h']);_0xa7f3a3++){var _0x1197a1=_0x5d740c[_0xa7f3a3],_0x1a03f1=_0x37c173[_0x1197a1];if(!_0x1a03f1||!_0x1a03f1[_0x59e672(0x4f2)+'h'])continue;_0x5dd132[_0x59e672(0x356)](_0x273fbd[_0x59e672(0x853)](_0x273fbd[_0x59e672(0xa92)](_0x59e672(0x760),_0x1197a1),'\x20')+new Array(Math[_0x59e672(0xbb7)](0x1009+0x15bf+-0x13*0x1fd,_0x273fbd[_0x59e672(0x33a)](-0x757+-0xfca+-0x1743*-0x1,_0x1197a1['lengt'+'h'])))['join']('─')),_0x5dd132[_0x59e672(0x356)](_0x273fbd['FDNwT']);for(var _0x5dc71c=0x20*-0x22+0x1*0xde1+-0x9a1;_0x273fbd[_0x59e672(0x237)](_0x5dc71c,_0x1a03f1[_0x59e672(0x4f2)+'h']);_0x5dc71c++){var _0x3258d2=_0x1a03f1[_0x5dc71c],_0x417ae4=typeof _0x3258d2['v']===_0x59e672(0x2a2)+'r'?Math['round'](_0x273fbd[_0x59e672(0x61a)](_0x3258d2['v'],0x432*0x5+0x233f+0x1*-0x3451))/(-0x2273+0x6*-0x405+-0x6f1*-0x9):_0x3258d2['v'];_0x5dd132[_0x59e672(0x356)](_0x273fbd[_0x59e672(0x4a2)](_0x273fbd[_0x59e672(0x66b)](_0x273fbd[_0x59e672(0xa5d)]('\x20\x20'+('0x'+_0x3258d2['o']['toStr'+_0x59e672(0x5ab)](-0x8*-0x2c4+-0x1*-0x1618+-0x2c28))['padEn'+'d'](0x99c+-0x67*0x3e+0xf5e),'\x20')+_0x3258d2['k'][_0x59e672(0xa1b)+'d'](-0x24b7+-0x1e*0x103+0x35b*0x14),'\x20')+String(_0x417ae4)['padEn'+'d'](-0x1438+-0x2ad+-0x7a7*-0x3)+'\x20',_0x3258d2[_0x59e672(0xc4f)]||''));}_0x5dd132[_0x59e672(0x356)]('');}if(_0x27b51d[_0x59e672(0xb60)+_0x59e672(0x58c)]&&_0x27b51d['warni'+_0x59e672(0x58c)][_0x59e672(0x4f2)+'h']){_0x5dd132[_0x59e672(0x356)](_0x273fbd['PwBFC']);for(var _0x39028f=0x2c5*0x5+0x4*-0x174+-0x809;_0x273fbd['nUKpB'](_0x39028f,_0x27b51d['warni'+'ngs']['lengt'+'h']);_0x39028f++)_0x5dd132['push']('\x20\x20!\x20'+_0x27b51d[_0x59e672(0xb60)+_0x59e672(0x58c)][_0x39028f]);}return _0x5dd132[_0x59e672(0x713)]('\x0a');}window[_0x50f913(0xcad)+_0x50f913(0xc38)+'stene'+'r'](_0x50f913(0xb7a)+'ge',function(_0x527347){var _0x1610df=_0x50f913,_0x1d6784=_0x527347[_0x1610df(0xae4)];if(!_0x1d6784||_0x1d6784[_0x1610df(0x77c)+_0x1610df(0x44e)]!==_0x34c4ed)return;try{if(_0x273fbd['CGWlm'](_0x1d6784['kind'],_0x1610df(0xbb1))){_0x3f944a()[_0x1610df(0x60a)]({'host':_0x1d6784['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x1d6784['kind']==='repor'+'t')_0x3f944a()[_0x1610df(0x60a)](_0x1d6784['repor'+'t']);}catch(_0x27c6cd){console[_0x1610df(0x76d)](_0x1610df(0x7e3)+_0x1610df(0xc95)+'\x20pane'+_0x1610df(0x5e9)+_0x1610df(0x2c1)+_0x1610df(0x988),_0x273fbd['FubYk'](_0x1610df(0x205)+':',_0xd166cd),_0x27c6cd);}});function _0x347dd8(){_0x357c79(!![]);}if(document['body'])_0x347dd8();else document[_0x50f913(0xcad)+_0x50f913(0xc38)+'stene'+'r'](_0x273fbd[_0x50f913(0x769)],_0x347dd8,{'once':!![]});return;}window['__SAK'+'URA_S'+_0x50f913(0xd50)]=window['__SAK'+_0x50f913(0x5c2)+'W__']||{'at':Date[_0x50f913(0xb69)]()};function _0x5abc61(_0x5f109f,_0x206209){var _0x48287d=_0x50f913;if(_0x273fbd['UUxhp']('TKpnl','TKpnl')){if(_0x16b49c['kind']===_0x48287d(0xbb1)){_0x4ddb1d()['set']({'host':_0x472b29[_0x48287d(0x458)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x20c16a[_0x48287d(0xd20)]===_0x48287d(0x879)+'t')_0x2e5827()['set'](_0xb512d7['repor'+'t']);}else{var _0x264fec={'__sakura':_0x34c4ed,'kind':_0x5f109f};if(_0x206209){for(var _0x21341f in _0x206209)_0x264fec[_0x21341f]=_0x206209[_0x21341f];}try{if(window[_0x48287d(0x5f3)+'t']&&window['paren'+'t']!==window)window['paren'+'t']['postM'+_0x48287d(0x93b)+'e'](_0x264fec,'*');}catch(_0x1b4b19){}try{if(window[_0x48287d(0x4c0)]&&window[_0x48287d(0x4c0)]!==window)window['top']['postM'+'essag'+'e'](_0x264fec,'*');}catch(_0x23d6f6){}}}console[_0x50f913(0x367)](_0x273fbd[_0x50f913(0xb0e)]+_0x462d02,'color'+':'+_0xd166cd+_0x273fbd[_0x50f913(0x2ac)],{'host':_0x23ae10,'href':location[_0x50f913(0x600)],'version':_0x462d02}),_0x5abc61('hello',{'host':_0x23ae10,'role':_0x3f3384});var _0x3cf448=window[_0x50f913(0x246)+_0x50f913(0x5c2)+_0x50f913(0xd50)]&&window[_0x50f913(0x246)+'URA_S'+'W__']['at']||Date[_0x50f913(0xb69)]();window[_0x50f913(0xcad)+'entLi'+_0x50f913(0xb2c)+'r'](_0x50f913(0xb7a)+'ge',function(_0x9527bc){var _0x14bea7=_0x50f913;if(_0x273fbd[_0x14bea7(0x47e)](_0x273fbd[_0x14bea7(0x280)],_0x273fbd[_0x14bea7(0x6f9)]))try{if(!_0x47e7c8['petal'])return;var _0x175cf7=_0x2ad2b0();_0x2efc52[_0x14bea7(0x4d0)]['style']['opaci'+'ty']=_0x878b9d[_0x14bea7(0x9d6)]?'1':_0x175cf7?'.8':_0x273fbd[_0x14bea7(0x473)],_0x3f5cba['petal'][_0x14bea7(0xbce)]=_0x175cf7?_0x273fbd[_0x14bea7(0xa9c)]:_0x14bea7(0xbba)+'a\x20Ski'+_0x14bea7(0x7f9)+'z\x20-\x20w'+'aitin'+_0x14bea7(0x649)+_0x14bea7(0x2d6)+_0x14bea7(0xb0c)+_0x14bea7(0xba0)+'rt)';}catch(_0x4c74dc){}else try{if('ZxjJA'!==_0x14bea7(0xd5b))try{var _0x7afbba=_0x339734();return!!(_0x7afbba&&_0x1599fe['ident'+_0x14bea7(0x48e)]);}catch(_0x18eacf){return![];}else{var _0x47a587=_0x9527bc&&_0x9527bc['data'];if(!_0x47a587||_0x47a587['__sak'+_0x14bea7(0x44e)]!==_0x34c4ed||_0x47a587[_0x14bea7(0xd20)]!==_0x14bea7(0xafa))return;_0x583866(_0x47a587[_0x14bea7(0xafa)],_0x47a587['arg']);}}catch(_0x508611){}});try{if(_0x50f913(0x315)!==_0x50f913(0x315)){var _0x45e231=_0x1dba02;if(_0x45e231&&_0x45e231['el'])_0x45e231['el']['style'][_0x50f913(0x555)+'ay']=_0x162a87?'':'none';var _0x7d5a4f=_0x1c7e64;if(_0x7d5a4f&&_0x7d5a4f['cv'])_0x7d5a4f['cv'][_0x50f913(0x481)][_0x50f913(0x555)+'ay']=_0x56534a?'':_0x50f913(0xa8d);}else{var _0x26ffc4=new BroadcastChannel(_0x50f913(0xb39)+_0x50f913(0x878));_0x26ffc4[_0x50f913(0x49e)+'sage']=function(_0xb9f96f){var _0x2d4e2a=_0x50f913,_0x1c10eb=_0xb9f96f['data'];if(_0x1c10eb&&_0x273fbd['GAOSq'](_0x1c10eb['__sak'+_0x2d4e2a(0x44e)],_0x34c4ed)&&_0x1c10eb[_0x2d4e2a(0xd20)]===_0x2d4e2a(0xafa))_0x583866(_0x1c10eb['cmd'],_0x1c10eb['arg']);};}}catch(_0x422323){}var _0x346521=[];(function _0x133b2c(){var _0x1ec4dc=_0x50f913,_0x395ce6={'oVzXi':function(_0x3db09e,_0x5ad346){return _0x3db09e===_0x5ad346;},'DeFFF':function(_0x8e5ada,_0x2a1fdf,_0x40cd52){return _0x8e5ada(_0x2a1fdf,_0x40cd52);},'igduc':function(_0x1ef87c,_0x249299){return _0x273fbd['IXkWR'](_0x1ef87c,_0x249299);},'ppXcd':function(_0x560eb8,_0x1bca3c){return _0x560eb8+_0x1bca3c;},'WrUit':_0x273fbd['oENAJ'],'kOvGo':'Multi'+_0x1ec4dc(0x284)+_0x1ec4dc(0x3a4)+'ment-'+'speed'+'\x20fiel'+'ds\x20on'+'ly.\x20H'+'eight'+',\x20ste'+_0x1ec4dc(0x60d)+'\x20jump'+_0x1ec4dc(0x78b)+'refus'+'ed.'},_0x53be5e=['log','warn','error','info',_0x1ec4dc(0x6a0)];for(var _0x14873c=-0xf7*-0x1d+-0x1ade+-0x5*0x39;_0x273fbd[_0x1ec4dc(0xafe)](_0x14873c,_0x53be5e[_0x1ec4dc(0x4f2)+'h']);_0x14873c++){if('tdbQZ'===_0x273fbd[_0x1ec4dc(0x9f9)]){var _0x4845cd=_0x395ce6[_0x1ec4dc(0xa9f)](_0x2cedf9,'v2')?0x97*0x29+-0xfb*0x1a+-0x151*-0x1:_0x21c195==='v3'?0x25cd+0x679*0x1+0x3*-0xec1:0x5*0x11d+-0x7c6+0x239,_0x33a0cc=_0x417b46(_0x46e95b['ptr'],_0x1f70c8,_0x4845cd);_0x33a0cc&&(_0x67ea33['xyz']=_0x33a0cc,_0x5f4bc8['v']=_0x33a0cc[0xe3*-0x1+0x12*-0x131+-0x1*-0x1655]);}else(function(_0xbc8a21){var _0x400d96=_0x1ec4dc,_0x2bf81a={'HbXcp':function(_0x3ad73f,_0x543d11){return _0x3ad73f===_0x543d11;},'ETPNk':_0x273fbd[_0x400d96(0x476)],'hzhgV':_0x400d96(0x480)+_0x400d96(0x396)+_0x400d96(0x7a1),'WEAwI':function(_0x3b363a,_0x2d62ca){return _0x3b363a===_0x2d62ca;}};if(_0x273fbd[_0x400d96(0xb66)](_0x273fbd['FkPbY'],_0x273fbd['kJHhM']))_0x395ce6[_0x400d96(0x566)](_0x4d288b,_0x23943a,_0x4c224b[_0x400d96(0x666)+'r']),_0x3f78b3[_0x400d96(0x4da)+_0x400d96(0x762)+'t']=_0x5d0f2c?_0x395ce6['igduc'](_0x395ce6[_0x400d96(0xc7e)](_0x395ce6[_0x400d96(0xa26)]('x'+_0x4dfb7b[_0x400d96(0x666)+'r']['toFix'+'ed'](0x14c8+-0x1*-0x1716+0x24f*-0x13),_0x395ce6['WrUit'])+_0x5d88d5[_0x400d96(0x4f2)+'h'],_0x400d96(0xa1f)+'ds\x20·\x20')+_0x3ba93d,_0x400d96(0x3b8)+'es'):_0x395ce6[_0x400d96(0x2a6)];else{var _0x37cddb=console[_0xbc8a21];if(typeof _0x37cddb!==_0x400d96(0x48f)+'ion')return;console[_0xbc8a21]=function(){var _0x378906=_0x400d96;try{var _0x252688='';for(var _0x4acf7c=-0x26c3+-0x2561+0x4c24;_0x4acf7c<arguments['lengt'+'h'];_0x4acf7c++){var _0x376706=arguments[_0x4acf7c];if(_0x2bf81a[_0x378906(0x198)](typeof _0x376706,_0x2bf81a[_0x378906(0x30d)]))_0x252688+=_0x376706;else{if(_0x376706&&_0x376706[_0x378906(0xb7a)+'ge'])_0x252688+=_0x376706[_0x378906(0xb7a)+'ge'];}}if(_0x252688[_0x378906(0x860)+'Of'](_0x3c9b75)!==-(-0x5*-0x2f+-0x470+0x29*0x16))return _0x37cddb[_0x378906(0x3b1)](console,arguments);if(_0x252688['index'+'Of'](_0x2bf81a['hzhgV'])!==-(0xf9*0x1+-0x2*0x489+0x81a)){var _0x3531d1=_0x252688['slice'](-0x191*0xc+-0x37f+0x164b*0x1,0x19a9+-0xf47+0x2*-0x49b);if(_0x2bf81a[_0x378906(0xd7a)](_0x346521['index'+'Of'](_0x3531d1),-(0xd39+0x3d1+-0x1109))&&_0x346521['lengt'+'h']<0x1*0xb85+0x124f+0x2*-0xecc)_0x346521[_0x378906(0x356)](_0x3531d1);}}catch(_0x16c551){}return _0x37cddb[_0x378906(0x3b1)](console,arguments);};}}(_0x53be5e[_0x14873c]));}}());var _0x360bd8={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x1f32e2=null,_0x2512bc=null,_0x23b02f=-(0x595+0x2420+-0x22*0x13a),_0x8e1d26=null;function _0x4414c6(_0x368729){var _0x3d3345=_0x50f913,_0x50f271={'oXQld':function(_0x32c0a4,_0x57870d){return _0x32c0a4<_0x57870d;}};try{if(_0x3d3345(0xb88)!==_0x273fbd['xsGUd']){if(!_0x368729)return;var _0x41f0f8=_0x368729[_0x3d3345(0x38e)+'nce']?_0x368729['insta'+_0x3d3345(0x946)]['expor'+'ts']:_0x368729[_0x3d3345(0x472)+'ts']||null;if(!_0x41f0f8)return;if(!_0x8e1d26)try{if(_0x273fbd[_0x3d3345(0xa80)](_0x273fbd[_0x3d3345(0x340)],_0x273fbd[_0x3d3345(0x6ef)])){if(!_0x10620d)return;_0x4d88d3=![],_0x47b828[_0x3d3345(0x481)][_0x3d3345(0xb7b)+'r']=_0x3d3345(0xb9d),_0x11e6a8();}else _0x8e1d26=Object['keys'](_0x41f0f8)['slice'](0x8*-0x59+-0x1e76+-0x2*-0x109f,-0x5f*0x33+-0x26*-0x38+0x1*0xab5);}catch(_0x58a541){}var _0x792088=_0x41f0f8[_0x3d3345(0x45a)+'y'];if(_0x792088&&_0x792088[_0x3d3345(0x3fc)+'r']&&_0x273fbd[_0x3d3345(0x39d)](_0x792088['buffe'+'r'][_0x3d3345(0x52d)+'ength'],-0x1*0x1589+0x8b*0x28+-0x2f*0x1)){if(_0x273fbd[_0x3d3345(0xae0)]!==_0x273fbd[_0x3d3345(0xd07)])_0x2512bc=_0x792088,_0x23b02f=Date[_0x3d3345(0xb69)]()-_0x3cf448;else{var _0x4eb260=_0x5bbd61;for(var _0x2edb59=0x1600+0x6b+-0x779*0x3;_0x50f271['oXQld'](_0x2edb59,_0x56bffd[_0x3d3345(0x4f2)+'h']);_0x2edb59++){var _0x1015fb=_0x5422f3[_0x3d3345(0xc83)](_0x611ac2[_0x2edb59]['v'][0xf14*0x1+0x2*-0xb3+0xdad*-0x1]-_0x30351b);if(_0x50f271[_0x3d3345(0x710)](_0x1015fb,_0x4eb260))_0x4eb260=_0x1015fb;}_0x4bac51-=_0x4eb260;}}}else{if(_0x5d2fcc[_0x402098]['hook']&&_0xae2dd4[_0x586266][_0x3d3345(0x7ba)]['appli'+'ed'])_0x5f232b++;}}catch(_0x1f7f2e){}}function _0x4c5864(){var _0x1d46e4=_0x50f913;try{if(typeof WebAssembly===_0x273fbd['RZQjI'])return;var _0x8e19c3=[_0x273fbd['uqMCW'],_0x273fbd[_0x1d46e4(0x83d)]];for(var _0x1e448a=0xf32+-0xac+0x1*-0xe86;_0x1e448a<_0x8e19c3[_0x1d46e4(0x4f2)+'h'];_0x1e448a++){if(_0x1d46e4(0x86b)!=='YHUYy')(function(_0x3bb811){var _0x512c8f=_0x1d46e4,_0x46d7e4=WebAssembly[_0x3bb811];if(typeof _0x46d7e4!==_0x273fbd[_0x512c8f(0x652)]||_0x46d7e4['__sak'+'uraMe'+'moryT'+'ap'])return;var _0x5c16ba=function(){var _0x312fa1=_0x512c8f,_0xcdd95c=_0x46d7e4[_0x312fa1(0x3b1)](this,arguments);try{if(_0xcdd95c&&typeof _0xcdd95c[_0x312fa1(0xd76)]==='funct'+'ion')_0xcdd95c[_0x312fa1(0xd76)](_0x4414c6,function(){});else _0x4414c6(_0xcdd95c);}catch(_0x4c3c16){}return _0xcdd95c;};_0x5c16ba[_0x512c8f(0x77c)+'uraMe'+_0x512c8f(0x403)+'ap']=!![];try{if(_0x273fbd[_0x512c8f(0xaa0)]('LqhWr',_0x273fbd[_0x512c8f(0x47c)])){var _0xb2cb7a=_0x25695e['resol'+_0x512c8f(0xbbe)+'e']();if(_0xb2cb7a)return _0x391b91[_0x512c8f(0x704)+'e']=_0x512c8f(0x236)+_0x512c8f(0x6df)+'solve'+'Game('+')',_0xb2cb7a;}else Object[_0x512c8f(0xb6d)+_0x512c8f(0xd71)+'erty'](_0x5c16ba,_0x273fbd[_0x512c8f(0x35e)],{'value':_0x46d7e4['name'],'configurable':!![]});}catch(_0x59a3ed){}WebAssembly[_0x3bb811]=_0x5c16ba;}(_0x8e19c3[_0x1e448a]));else{if(!_0x2bfdfb)return;var _0x55e7a8=_0x273fbd['HUYqK'](_0xd44990[_0x1d46e4(0x481)][_0x1d46e4(0x555)+'ay'],_0x273fbd['beWSM']);_0x305126[_0x1d46e4(0x481)][_0x1d46e4(0x555)+'ay']=_0x55e7a8?'':_0x1d46e4(0xa8d),_0x273fbd['XGpuh'](_0x3eb809,'fold')[_0x1d46e4(0x4da)+'onten'+'t']=_0x55e7a8?'-':'+';}}}catch(_0x4436f9){}}var _0x6f2a9d=null,_0x32a1f1=null,_0x5dca57={},_0x357056={'MouseLook':[{'name':_0x273fbd['SNkXa'],'ret':'void','params':[],'wasmParams':[_0x50f913(0x8d5)]},{'name':'\u0094\u0090\u0089\u008f\u0089'+'\u0095\u0092\u0089\u0092\u0087'+'\u008e','ret':_0x273fbd[_0x50f913(0xa5e)],'params':['float'],'wasmParams':['i32',_0x50f913(0xd5a)]},{'name':_0x273fbd[_0x50f913(0x503)],'ret':_0x50f913(0x931),'params':[_0x50f913(0x500)],'wasmParams':[_0x273fbd[_0x50f913(0x861)],'f32']},{'name':_0x50f913(0x7e5)+_0x50f913(0xad7)+'\u0095','ret':_0x273fbd[_0x50f913(0xa5e)],'params':[_0x50f913(0x500)],'wasmParams':[_0x50f913(0x8d5),_0x273fbd[_0x50f913(0x971)]]},{'name':_0x50f913(0x357)+_0x50f913(0x84e)+'\u0091','ret':_0x50f913(0x931),'params':[],'wasmParams':['i32']},{'name':_0x50f913(0x958)+_0x50f913(0xab4)+'\u0094','ret':_0x273fbd['zklTf'],'params':[],'wasmParams':['i32']},{'name':_0x50f913(0x919)+'\u008b\u008a\u0087\u0089\u0091'+'\u008f','ret':_0x273fbd[_0x50f913(0xa5e)],'params':[],'wasmParams':['i32']},{'name':_0x50f913(0xa81)+_0x50f913(0x583),'ret':_0x273fbd['zklTf'],'params':[],'wasmParams':[_0x50f913(0x8d5)]},{'name':_0x273fbd[_0x50f913(0x51f)],'ret':_0x273fbd[_0x50f913(0xa5e)],'params':[],'wasmParams':['i32']},{'name':'\u008c\u0091\u0088\u0095\u008c'+'\u0095\u008a\u0092\u0091\u008b'+'\u0095','ret':_0x50f913(0x500),'params':[],'wasmParams':[_0x273fbd['vSTMn']],'wasmRet':_0x273fbd['rUHgk']},{'name':_0x273fbd['IOPOx'],'ret':_0x50f913(0x931),'params':[],'wasmParams':[_0x50f913(0x8d5)]},{'name':_0x273fbd['PbhdN'],'ret':_0x50f913(0x931),'params':[_0x273fbd[_0x50f913(0xca7)]],'wasmParams':[_0x50f913(0x8d5),'f32']},{'name':_0x273fbd[_0x50f913(0x49c)],'ret':_0x50f913(0x500),'params':[],'wasmParams':['i32'],'wasmRet':_0x273fbd[_0x50f913(0x971)]},{'name':_0x273fbd['AgBRb'],'ret':_0x273fbd['zklTf'],'params':[],'wasmParams':[_0x50f913(0x8d5)]},{'name':_0x50f913(0x45c)+'\u0087\u0087\u008c\u0086\u0086'+'\u0091','ret':_0x50f913(0x931),'params':[],'wasmParams':[_0x50f913(0x8d5)]},{'name':'\u0090\u0091\u0095\u008c\u008e'+_0x50f913(0x908)+'\u008a','ret':_0x273fbd['zklTf'],'params':[],'wasmParams':[_0x50f913(0x8d5)]},{'name':_0x50f913(0x6ba)+_0x50f913(0xd6c)+'\u0093','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x273fbd[_0x50f913(0xc10)],'ret':_0x273fbd['zklTf'],'params':[_0x273fbd[_0x50f913(0xca7)],_0x50f913(0x500)],'wasmParams':['i32','f32',_0x273fbd[_0x50f913(0x971)]]},{'name':_0x50f913(0x209)+_0x50f913(0xbec)+'\u0086','ret':_0x50f913(0x500),'params':[],'wasmParams':[_0x50f913(0x8d5)],'wasmRet':_0x273fbd['rUHgk']},{'name':_0x50f913(0x22b)+'\u0093\u0089\u008e\u0086\u0093'+'\u0088','ret':'void','params':[],'wasmParams':[_0x50f913(0x8d5)]},{'name':_0x273fbd['KVsME'],'ret':_0x50f913(0x931),'params':[],'wasmParams':[_0x273fbd[_0x50f913(0x861)]]},{'name':_0x50f913(0x251)+'\u0090\u0091\u008e\u008f\u0089'+'\u008e','ret':_0x50f913(0x931),'params':[_0x273fbd['dcDYh']],'wasmParams':[_0x50f913(0x8d5),'f32']},{'name':'\u008c\u0093\u0091\u008a\u0089'+'\u0087\u0092\u0088\u0088\u008c'+'\u0088','ret':_0x273fbd[_0x50f913(0xca7)],'params':[],'wasmParams':[_0x273fbd[_0x50f913(0x861)]],'wasmRet':_0x273fbd[_0x50f913(0x971)]},{'name':'\u0094\u008d\u0091\u0091\u0090'+'\u008b\u0094\u0093\u0086\u008c'+'\u008a','ret':_0x50f913(0x931),'params':[_0x50f913(0x500),_0x50f913(0x500)],'wasmParams':[_0x50f913(0x8d5),_0x273fbd[_0x50f913(0x971)],_0x273fbd['rUHgk']]},{'name':_0x273fbd['fGrLA'],'ret':_0x50f913(0x931),'params':[],'wasmParams':[_0x50f913(0x8d5)]},{'name':_0x50f913(0x94c)+'\u0089\u0091\u0086\u008a\u0091'+'\u008a','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x273fbd[_0x50f913(0x868)],'ret':_0x273fbd[_0x50f913(0xa5e)],'params':[_0x50f913(0x500)],'wasmParams':[_0x50f913(0x8d5),_0x50f913(0xd5a)]},{'name':_0x50f913(0x948)+_0x50f913(0x1c4)+'\u0093','ret':_0x50f913(0x500),'params':[],'wasmParams':[_0x50f913(0x8d5)],'wasmRet':_0x50f913(0xd5a)},{'name':_0x273fbd[_0x50f913(0x46e)],'ret':'float','params':[],'wasmParams':['i32'],'wasmRet':_0x273fbd[_0x50f913(0x971)]},{'name':_0x50f913(0xc89)+'\u0089\u008a\u0093\u0090\u0095'+'\u0088','ret':_0x50f913(0x931),'params':[_0x50f913(0x500)],'wasmParams':[_0x273fbd[_0x50f913(0x861)],_0x273fbd[_0x50f913(0x971)]]},{'name':_0x273fbd[_0x50f913(0xbc3)],'ret':'void','params':[],'wasmParams':[_0x273fbd['vSTMn']]},{'name':_0x273fbd[_0x50f913(0x1cb)],'ret':_0x273fbd[_0x50f913(0xa5e)],'params':['float'],'wasmParams':[_0x50f913(0x8d5),_0x50f913(0xd5a)]},{'name':_0x50f913(0x6a8)+'\u0087\u008d\u008a\u008a\u0089'+'\u0089','ret':'void','params':[],'wasmParams':[_0x50f913(0x8d5)]},{'name':'\u0092\u008c\u0088\u0087\u0088'+'\u008c\u008a\u0089\u0090\u008c'+'\u0090','ret':_0x50f913(0x931),'params':[],'wasmParams':[_0x50f913(0x8d5)]},{'name':_0x273fbd['eOnzn'],'ret':'void','params':['float'],'wasmParams':['i32',_0x273fbd[_0x50f913(0x971)]]}],'FPScontroller':[{'name':'\u0092\u0091\u008e\u0095\u0092'+_0x50f913(0xbd6)+'\u008e','ret':_0x50f913(0x500),'params':[],'wasmParams':[_0x273fbd['vSTMn']],'wasmRet':_0x50f913(0xd5a)},{'name':'\u0090\u0093\u0091\u0091\u008b'+'\u0092\u0091\u0088\u008c\u0090'+'\u0092','ret':_0x273fbd[_0x50f913(0xa5e)],'params':[],'wasmParams':[_0x273fbd['vSTMn']]},{'name':_0x273fbd['dAonq'],'ret':_0x273fbd['WxZZX'],'params':[],'wasmParams':['i32'],'wasmRet':'i32'},{'name':_0x273fbd[_0x50f913(0x4e1)],'ret':_0x50f913(0x931),'params':['bool'],'wasmParams':['i32',_0x273fbd['vSTMn']]},{'name':_0x273fbd['etbvH'],'ret':_0x50f913(0x931),'params':[],'wasmParams':[_0x50f913(0x8d5)]},{'name':'\u0092\u0088\u008b\u0095\u0089'+_0x50f913(0x400)+'\u008a','ret':_0x50f913(0x931),'params':[],'wasmParams':[_0x50f913(0x8d5)]},{'name':_0x50f913(0x94c)+'\u0089\u0091\u0086\u008a\u0091'+'\u008a','ret':'void','params':[],'wasmParams':[_0x273fbd[_0x50f913(0x861)]]},{'name':_0x50f913(0xbeb)+_0x50f913(0x2e4)+'\u0087','ret':_0x273fbd[_0x50f913(0x3d6)],'params':[],'wasmParams':['i32'],'wasmRet':_0x273fbd[_0x50f913(0x861)]},{'name':'\u0094\u008d\u0087\u0087\u008a'+_0x50f913(0xa58)+'\u0087','ret':_0x50f913(0x931),'params':[],'wasmParams':['i32']},{'name':_0x273fbd[_0x50f913(0xbfc)],'ret':'bool','params':[],'wasmParams':[_0x50f913(0x8d5)],'wasmRet':_0x273fbd[_0x50f913(0x861)]},{'name':'\u008e\u008b\u008e\u0091\u008c'+_0x50f913(0x794)+'\u008a','ret':_0x273fbd[_0x50f913(0x3d6)],'params':[],'wasmParams':['i32'],'wasmRet':_0x273fbd['vSTMn']},{'name':_0x273fbd[_0x50f913(0x41a)],'ret':_0x273fbd[_0x50f913(0xa5e)],'params':[],'wasmParams':[_0x273fbd['vSTMn']]},{'name':_0x50f913(0x738)+_0x50f913(0x67b)+'\u0095','ret':'void','params':[],'wasmParams':[_0x50f913(0x8d5)]},{'name':_0x273fbd['YnTfD'],'ret':_0x273fbd[_0x50f913(0x3d6)],'params':[_0x273fbd[_0x50f913(0x3d6)],_0x273fbd[_0x50f913(0x3d6)]],'wasmParams':['i32',_0x273fbd[_0x50f913(0x861)],_0x50f913(0x8d5)],'wasmRet':'i32'},{'name':_0x273fbd[_0x50f913(0xa78)],'ret':_0x273fbd['zklTf'],'params':[],'wasmParams':[_0x50f913(0x8d5)]},{'name':'\u0089\u0089\u008e\u0092\u0089'+_0x50f913(0x88f)+'\u0092','ret':'bool','params':[],'wasmParams':[_0x50f913(0x8d5)],'wasmRet':_0x273fbd[_0x50f913(0x861)]},{'name':_0x50f913(0x7ac)+_0x50f913(0xd5c)+'\u008f','ret':_0x273fbd[_0x50f913(0xa5e)],'params':[_0x273fbd['WxZZX']],'wasmParams':['i32','i32']},{'name':'\u0095\u008e\u0095\u0087\u0086'+_0x50f913(0xafd)+'\u008e','ret':'void','params':[],'wasmParams':[_0x50f913(0x8d5)]},{'name':'\u0091\u0088\u0095\u0088\u0088'+'\u0086\u008c\u008a\u008b\u0086'+'\u0089','ret':_0x273fbd[_0x50f913(0x3d6)],'params':[],'wasmParams':[_0x50f913(0x8d5)],'wasmRet':'i32'},{'name':_0x50f913(0x671)+'\u008e\u0093\u0095\u008d\u008e'+'\u008f','ret':_0x50f913(0x931),'params':[],'wasmParams':['i32']},{'name':_0x273fbd[_0x50f913(0x32d)],'ret':_0x273fbd['zklTf'],'params':[],'wasmParams':['i32']},{'name':_0x273fbd['QcYce'],'ret':_0x273fbd[_0x50f913(0xa5e)],'params':[],'wasmParams':[_0x50f913(0x8d5)]},{'name':'\u008a\u0088\u0087\u0090\u008f'+'\u0086\u008b\u008e\u008a\u0089'+'\u008b','ret':_0x273fbd['zklTf'],'params':[],'wasmParams':['i32']},{'name':'\u0087\u0089\u0089\u0090\u0087'+'\u008f\u008b\u008e\u008d\u008f'+'\u0094','ret':'void','params':[],'wasmParams':[_0x273fbd[_0x50f913(0x861)]]},{'name':_0x273fbd[_0x50f913(0xaea)],'ret':'void','params':[_0x50f913(0x2ee)],'wasmParams':[_0x273fbd[_0x50f913(0x861)],_0x273fbd[_0x50f913(0x861)]]},{'name':_0x273fbd[_0x50f913(0x37c)],'ret':_0x50f913(0x931),'params':[],'wasmParams':['i32']},{'name':'\u008d\u0095\u0087\u0093\u0092'+_0x50f913(0x3d0)+'\u008b','ret':_0x273fbd['zklTf'],'params':[],'wasmParams':['i32']},{'name':_0x273fbd[_0x50f913(0x60b)],'ret':'void','params':[],'wasmParams':[_0x273fbd[_0x50f913(0x861)]]},{'name':_0x273fbd[_0x50f913(0x6e9)],'ret':_0x273fbd['zklTf'],'params':[],'wasmParams':[_0x273fbd[_0x50f913(0x861)]]},{'name':_0x273fbd[_0x50f913(0x924)],'ret':'void','params':[],'wasmParams':['i32']},{'name':_0x50f913(0xd48)+_0x50f913(0xb8c)+'\u0092','ret':'void','params':[],'wasmParams':[_0x50f913(0x8d5)]},{'name':_0x273fbd['qNYGh'],'ret':'void','params':[],'wasmParams':[_0x50f913(0x8d5)]},{'name':_0x273fbd[_0x50f913(0xc3f)],'ret':'void','params':[_0x50f913(0x2ee)],'wasmParams':['i32',_0x273fbd['vSTMn']]},{'name':'\u0094\u0087\u008b\u008d\u0089'+_0x50f913(0x74d)+'\u0090','ret':_0x50f913(0x931),'params':[],'wasmParams':[_0x50f913(0x8d5)]},{'name':_0x273fbd[_0x50f913(0x78e)],'ret':_0x50f913(0x931),'params':[],'wasmParams':[_0x50f913(0x8d5)]},{'name':_0x273fbd[_0x50f913(0xad8)],'ret':'void','params':[],'wasmParams':[_0x50f913(0x8d5)]},{'name':_0x50f913(0x420)+'\u008c\u0090\u0087\u008c\u0086'+'\u0087','ret':'void','params':[],'wasmParams':[_0x50f913(0x8d5)]},{'name':'\u008c\u0089\u0091\u0095\u0090'+_0x50f913(0x802)+'\u0087','ret':_0x273fbd[_0x50f913(0xa5e)],'params':[],'wasmParams':[_0x50f913(0x8d5)]},{'name':_0x273fbd['bDvpR'],'ret':_0x273fbd[_0x50f913(0xa5e)],'params':[],'wasmParams':['i32']},{'name':_0x273fbd['FDEqu'],'ret':_0x273fbd[_0x50f913(0xa5e)],'params':[_0x50f913(0x2ee)],'wasmParams':[_0x273fbd['vSTMn'],'i32']},{'name':_0x273fbd[_0x50f913(0xb05)],'ret':'bool','params':[],'wasmParams':[_0x273fbd[_0x50f913(0x861)]],'wasmRet':'i32'},{'name':'\u008e\u008b\u0095\u0092\u008e'+'\u008c\u008f\u008c\u008a\u0091'+'\u0086','ret':_0x50f913(0x2ee),'params':[],'wasmParams':[_0x273fbd['vSTMn']],'wasmRet':_0x50f913(0x8d5)},{'name':_0x273fbd['GVFtV'],'ret':_0x50f913(0x2ee),'params':[],'wasmParams':[_0x50f913(0x8d5)],'wasmRet':_0x50f913(0x8d5)},{'name':'\u008e\u0093\u0093\u008b\u008a'+'\u008f\u008d\u0086\u0089\u008d'+'\u0094','ret':_0x273fbd[_0x50f913(0xa5e)],'params':[],'wasmParams':[_0x273fbd[_0x50f913(0x861)]]},{'name':_0x273fbd['KVsME'],'ret':_0x50f913(0x931),'params':[],'wasmParams':[_0x273fbd['vSTMn']]},{'name':'\u0088\u0091\u0095\u008a\u0087'+'\u0092\u008b\u008a\u0087\u008e'+'\u008b','ret':_0x50f913(0x931),'params':[],'wasmParams':['i32']},{'name':_0x273fbd[_0x50f913(0xce4)],'ret':_0x50f913(0x931),'params':[],'wasmParams':[_0x273fbd['vSTMn']]},{'name':'\u0089\u0086\u0090\u0088\u008c'+_0x50f913(0x793)+'\u008b','ret':_0x50f913(0x931),'params':[],'wasmParams':['i32']},{'name':'\u0091\u0093\u0091\u008f\u008c'+'\u0095\u0094\u008b\u0093\u008a'+'\u008f','ret':_0x50f913(0x931),'params':[],'wasmParams':[_0x273fbd[_0x50f913(0x861)]]},{'name':_0x273fbd['EsFvK'],'ret':_0x273fbd['zklTf'],'params':[_0x50f913(0x500)],'wasmParams':['i32','f32']},{'name':_0x273fbd[_0x50f913(0x3db)],'ret':_0x273fbd[_0x50f913(0x3d6)],'params':[],'wasmParams':[_0x273fbd[_0x50f913(0x861)]],'wasmRet':'i32'},{'name':_0x50f913(0xa22)+_0x50f913(0x556)+'\u0087','ret':_0x273fbd['zklTf'],'params':[],'wasmParams':[_0x273fbd['vSTMn']]},{'name':'\u0087\u0093\u0093\u0087\u0087'+_0x50f913(0x7c7)+'\u0094','ret':'void','params':[],'wasmParams':[_0x273fbd[_0x50f913(0x861)]]},{'name':_0x50f913(0x64d)+_0x50f913(0x310)+'\u0092','ret':_0x50f913(0x931),'params':[],'wasmParams':[_0x50f913(0x8d5)]},{'name':'\u008b\u0090\u008d\u0095\u0086'+_0x50f913(0xa47)+'\u008c','ret':_0x273fbd[_0x50f913(0x3d6)],'params':[],'wasmParams':[_0x50f913(0x8d5)],'wasmRet':_0x50f913(0x8d5)},{'name':_0x273fbd[_0x50f913(0xa7c)],'ret':_0x273fbd['WxZZX'],'params':[_0x50f913(0x2ee),_0x50f913(0x2ee)],'wasmParams':['i32',_0x273fbd[_0x50f913(0x861)],_0x50f913(0x8d5)],'wasmRet':_0x273fbd[_0x50f913(0x861)]},{'name':'Updat'+'e','ret':_0x50f913(0x931),'params':[],'wasmParams':[_0x273fbd[_0x50f913(0x861)]]},{'name':_0x50f913(0x29f)+'\u008f\u0093\u0086\u008b\u008e'+'\u008e','ret':_0x50f913(0x931),'params':[],'wasmParams':[_0x273fbd['vSTMn']]},{'name':_0x50f913(0xbc1)+'\u0091\u0092\u008f\u0090\u008e'+'\u0091','ret':_0x273fbd[_0x50f913(0xa5e)],'params':[],'wasmParams':[_0x50f913(0x8d5)]},{'name':_0x50f913(0x96e)+_0x50f913(0xc78)+'\u0086','ret':_0x50f913(0x931),'params':[],'wasmParams':['i32']},{'name':_0x273fbd['Uhmnh'],'ret':_0x50f913(0x931),'params':['float'],'wasmParams':['i32',_0x50f913(0xd5a)]},{'name':_0x50f913(0x23c)+_0x50f913(0xd29)+'\u008b','ret':_0x273fbd[_0x50f913(0xa5e)],'params':[],'wasmParams':['i32']},{'name':_0x273fbd[_0x50f913(0x4f1)],'ret':_0x273fbd[_0x50f913(0x3d6)],'params':['bool',_0x273fbd[_0x50f913(0x3d6)]],'wasmParams':[_0x50f913(0x8d5),'i32','i32'],'wasmRet':_0x273fbd['vSTMn']},{'name':_0x50f913(0xd57)+_0x50f913(0x52f)+'\u0095','ret':'void','params':[_0x273fbd['dcDYh'],_0x50f913(0x2ee)],'wasmParams':['i32',_0x50f913(0xd5a),'i32']},{'name':'\u0094\u0090\u0095\u0092\u008e'+_0x50f913(0x839)+'\u008f','ret':_0x50f913(0x931),'params':[],'wasmParams':[_0x273fbd['vSTMn']]},{'name':_0x273fbd[_0x50f913(0xb7f)],'ret':_0x273fbd[_0x50f913(0xa5e)],'params':[],'wasmParams':['i32']},{'name':_0x50f913(0xd3a)+_0x50f913(0x4c3)+'\u0095','ret':_0x273fbd[_0x50f913(0xa5e)],'params':[],'wasmParams':[_0x273fbd[_0x50f913(0x861)]]}],'TDM_GameManager':[{'name':_0x50f913(0x9bc)+'\u0086\u0094\u0094\u008e\u008d'+'\u0090','ret':'void','params':[],'wasmParams':[_0x273fbd[_0x50f913(0x861)]]},{'name':'\u008f\u0086\u0090\u0094\u0089'+_0x50f913(0x1b9)+'\u008a','ret':_0x50f913(0x931),'params':[],'wasmParams':['i32']},{'name':_0x50f913(0xc62)+_0x50f913(0x8db)+'\u0089','ret':'bool','params':[_0x273fbd['mUkRJ']],'wasmParams':[_0x50f913(0x8d5),_0x273fbd['vSTMn']],'wasmRet':_0x273fbd['vSTMn']},{'name':_0x50f913(0x77d)+_0x50f913(0x195)+'\u0086','ret':_0x50f913(0x931),'params':[],'wasmParams':['i32']},{'name':_0x50f913(0xa05)+_0x50f913(0x718)+'\u008c','ret':'void','params':[_0x273fbd[_0x50f913(0x3d6)]],'wasmParams':[_0x50f913(0x8d5),_0x50f913(0x8d5)]},{'name':_0x273fbd['OkfyP'],'ret':_0x273fbd[_0x50f913(0xa5e)],'params':[],'wasmParams':[_0x50f913(0x8d5)]},{'name':_0x50f913(0x647)+_0x50f913(0x527)+'\u008c','ret':_0x50f913(0x931),'params':[],'wasmParams':['i32']},{'name':_0x273fbd[_0x50f913(0x611)],'ret':_0x50f913(0x931),'params':[],'wasmParams':[_0x273fbd[_0x50f913(0x861)]]},{'name':_0x50f913(0x2a3),'ret':_0x273fbd[_0x50f913(0xa5e)],'params':[],'wasmParams':['i32']},{'name':_0x273fbd[_0x50f913(0xa75)],'ret':'void','params':[],'wasmParams':[_0x273fbd['vSTMn']]},{'name':_0x50f913(0x75e)+_0x50f913(0x7a5)+'\u0093','ret':'void','params':[],'wasmParams':[_0x273fbd['vSTMn']]},{'name':_0x273fbd[_0x50f913(0xd51)],'ret':'void','params':[],'wasmParams':[_0x273fbd[_0x50f913(0x861)]]},{'name':'\u0093\u0087\u008f\u008f\u0093'+_0x50f913(0x2ab)+'\u008c','ret':_0x50f913(0x931),'params':[],'wasmParams':[_0x273fbd[_0x50f913(0x861)]]},{'name':'\u0093\u008b\u008c\u008e\u0089'+_0x50f913(0x301)+'\u0088','ret':_0x273fbd[_0x50f913(0xa5e)],'params':[],'wasmParams':['i32']},{'name':_0x50f913(0xb54)+'troy','ret':_0x273fbd['zklTf'],'params':[],'wasmParams':['i32']},{'name':_0x50f913(0x5ce)+_0x50f913(0xc9f)+'\u008a','ret':_0x273fbd['zklTf'],'params':[],'wasmParams':[_0x50f913(0x8d5)]},{'name':_0x50f913(0x707)+_0x50f913(0x220)+'\u0091','ret':_0x273fbd['zklTf'],'params':[],'wasmParams':[_0x273fbd['vSTMn']]},{'name':_0x50f913(0x907)+'\u0088\u0094\u0094\u008e\u008e'+'\u008a','ret':_0x273fbd[_0x50f913(0xa5e)],'params':[],'wasmParams':[_0x50f913(0x8d5)]},{'name':_0x273fbd[_0x50f913(0x8c0)],'ret':_0x50f913(0x931),'params':[],'wasmParams':['i32']},{'name':_0x50f913(0x311)+'\u0090\u0091\u008a\u008f\u008c'+'\u0093','ret':_0x50f913(0x931),'params':[_0x273fbd['WxZZX']],'wasmParams':[_0x273fbd[_0x50f913(0x861)],'i32']},{'name':'\u0093\u0093\u008d\u008e\u008b'+'\u008a\u0088\u0092\u0095\u0094'+'\u0086','ret':_0x273fbd[_0x50f913(0xa5e)],'params':[_0x273fbd[_0x50f913(0x36f)],_0x273fbd[_0x50f913(0x36f)],'int'],'wasmParams':[_0x273fbd[_0x50f913(0x861)],'i32',_0x50f913(0x8d5),_0x50f913(0x8d5)]},{'name':_0x273fbd[_0x50f913(0x559)],'ret':_0x273fbd[_0x50f913(0xa5e)],'params':[],'wasmParams':[_0x273fbd[_0x50f913(0x861)]]},{'name':_0x273fbd[_0x50f913(0x678)],'ret':_0x50f913(0x931),'params':[_0x50f913(0xca0),_0x50f913(0xca0),_0x273fbd['mUkRJ']],'wasmParams':[_0x50f913(0x8d5),_0x273fbd[_0x50f913(0x861)],_0x273fbd[_0x50f913(0x861)],'i32']},{'name':'\u0094\u0086\u008a\u008f\u008e'+'\u0086\u008f\u0095\u0092\u0092'+'\u0092','ret':'bool','params':[],'wasmParams':['i32'],'wasmRet':'i32'},{'name':'Updat'+'e','ret':_0x50f913(0x931),'params':[],'wasmParams':[_0x273fbd['vSTMn']]},{'name':_0x273fbd[_0x50f913(0x31a)],'ret':_0x50f913(0x931),'params':[],'wasmParams':['i32']},{'name':_0x50f913(0xb51)+'\u0095\u008c\u0087\u0086\u0087'+'\u008b','ret':_0x50f913(0x931),'params':[],'wasmParams':[_0x50f913(0x8d5)]},{'name':_0x273fbd[_0x50f913(0x720)],'ret':_0x50f913(0x931),'params':[],'wasmParams':['i32']},{'name':'\u0088\u0090\u0095\u008e\u0094'+_0x50f913(0x9c0)+'\u008e','ret':_0x273fbd[_0x50f913(0xa5e)],'params':[],'wasmParams':[_0x50f913(0x8d5)]},{'name':'\u008e\u0092\u0090\u0088\u0091'+_0x50f913(0x6ec)+'\u008c','ret':'void','params':[],'wasmParams':[_0x273fbd[_0x50f913(0x861)]]},{'name':'\u0088\u008c\u0089\u008e\u0095'+'\u008a\u0087\u0092\u0095\u0086'+'\u008e','ret':_0x50f913(0x931),'params':['bool'],'wasmParams':[_0x273fbd['vSTMn'],'i32']},{'name':_0x50f913(0xa4a)+_0x50f913(0x67c)+'\u0094','ret':_0x273fbd[_0x50f913(0xa5e)],'params':[],'wasmParams':[_0x273fbd['vSTMn']]},{'name':_0x273fbd[_0x50f913(0x68d)],'ret':_0x273fbd[_0x50f913(0xa5e)],'params':[],'wasmParams':[_0x50f913(0x8d5)]},{'name':_0x50f913(0x1fc)+_0x50f913(0x419)+'\u0091','ret':_0x273fbd['zklTf'],'params':[],'wasmParams':['i32']},{'name':_0x50f913(0x735)+'licat'+_0x50f913(0x690)+_0x50f913(0x88e),'ret':_0x50f913(0x931),'params':['bool'],'wasmParams':[_0x273fbd[_0x50f913(0x861)],_0x50f913(0x8d5)]},{'name':_0x273fbd[_0x50f913(0x724)],'ret':_0x50f913(0x2ee),'params':[],'wasmParams':[_0x50f913(0x8d5)],'wasmRet':_0x273fbd[_0x50f913(0x861)]},{'name':_0x273fbd[_0x50f913(0xa68)],'ret':_0x273fbd['zklTf'],'params':[],'wasmParams':[_0x50f913(0x8d5)]},{'name':_0x273fbd['LlEQm'],'ret':_0x50f913(0x2ee),'params':[_0x273fbd['mUkRJ']],'wasmParams':[_0x273fbd['vSTMn'],_0x50f913(0x8d5)],'wasmRet':'i32'},{'name':_0x50f913(0x5cc)+'\u0090\u0088\u008f\u0089\u008a'+'\u008e','ret':_0x50f913(0x931),'params':['bool'],'wasmParams':[_0x50f913(0x8d5),_0x273fbd[_0x50f913(0x861)]]},{'name':_0x273fbd['rYLJo'],'ret':_0x273fbd['zklTf'],'params':[],'wasmParams':['i32']},{'name':_0x50f913(0x36e)+_0x50f913(0x986)+'\u008e','ret':_0x273fbd['zklTf'],'params':[],'wasmParams':[_0x50f913(0x8d5)]},{'name':_0x273fbd[_0x50f913(0xd74)],'ret':_0x50f913(0x931),'params':[_0x50f913(0xca0),_0x273fbd[_0x50f913(0x36f)],_0x50f913(0xca0)],'wasmParams':[_0x50f913(0x8d5),'i32',_0x273fbd['vSTMn'],'i32']},{'name':_0x50f913(0x462)+'\u0093\u008b\u0094\u0094\u0094'+'\u008e','ret':'void','params':[],'wasmParams':[_0x273fbd[_0x50f913(0x861)]]},{'name':_0x50f913(0x892),'ret':_0x50f913(0x931),'params':[],'wasmParams':[_0x273fbd[_0x50f913(0x861)]]},{'name':'\u0086\u0088\u0095\u0092\u0094'+_0x50f913(0x2ce)+'\u0088','ret':_0x273fbd['zklTf'],'params':[],'wasmParams':['i32']},{'name':_0x273fbd[_0x50f913(0x1e5)],'ret':_0x50f913(0x931),'params':[],'wasmParams':[_0x273fbd[_0x50f913(0x861)]]},{'name':'\u0095\u008f\u0086\u0088\u0091'+_0x50f913(0xa4f)+'\u0094','ret':_0x50f913(0x931),'params':[],'wasmParams':[_0x273fbd[_0x50f913(0x861)]]},{'name':'\u0087\u0089\u008f\u008a\u0095'+'\u0089\u0094\u0091\u0087\u0087'+'\u0086','ret':_0x50f913(0x931),'params':[_0x50f913(0x2ee)],'wasmParams':['i32',_0x273fbd['vSTMn']]},{'name':_0x50f913(0x372)+'\u0091\u008b\u0089\u0094\u0092'+'\u0095','ret':_0x273fbd[_0x50f913(0xa5e)],'params':[],'wasmParams':[_0x273fbd['vSTMn']]},{'name':_0x50f913(0x8d8)+'\u0093\u0086\u0088\u008e\u0090'+'\u0092','ret':_0x273fbd[_0x50f913(0xa5e)],'params':[],'wasmParams':['i32']},{'name':'\u0088\u008a\u0088\u0090\u0094'+_0x50f913(0x977)+'\u008e','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x50f913(0x607)+'\u008a\u008c\u0095\u0093\u008d'+'\u0092','ret':_0x50f913(0x931),'params':[_0x50f913(0xca0),_0x273fbd['mUkRJ']],'wasmParams':[_0x273fbd['vSTMn'],_0x273fbd[_0x50f913(0x861)],_0x273fbd['vSTMn']]},{'name':_0x273fbd['fdamt'],'ret':_0x50f913(0x931),'params':[],'wasmParams':[_0x273fbd[_0x50f913(0x861)]]},{'name':'\u0093\u0094\u0087\u008b\u0086'+_0x50f913(0x785)+'\u008e','ret':_0x50f913(0x931),'params':[],'wasmParams':[_0x50f913(0x8d5)]},{'name':_0x50f913(0xba9)+_0x50f913(0x955)+'\u0092','ret':'void','params':[_0x50f913(0x2ee)],'wasmParams':['i32',_0x273fbd[_0x50f913(0x861)]]},{'name':'\u0090\u008d\u008b\u0093\u008a'+_0x50f913(0xa9a)+'\u008a','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x273fbd[_0x50f913(0xad2)],'ret':_0x273fbd[_0x50f913(0xa5e)],'params':[],'wasmParams':[_0x273fbd['vSTMn']]},{'name':_0x273fbd[_0x50f913(0x47a)],'ret':_0x273fbd[_0x50f913(0xa5e)],'params':[],'wasmParams':[_0x273fbd['vSTMn']]}]},_0x3037d0=[],_0x48b1df=[],_0x17f1c0={},_0x3c308b=-0x1*-0x12c3+0x52a*0x4+-0x276b,_0x568305=![],_0x4d3c4c=[],_0x5a75dc=[{'type':_0x273fbd['vEiNB'],'keep':!![]},{'type':'Healt'+'hScri'+'pt','keep':!![]},{'type':'Weapo'+_0x50f913(0x379)+'ger','keep':![]},{'type':_0x273fbd['aUaVw'],'keep':!![]},{'type':_0x273fbd[_0x50f913(0xbc8)],'keep':!![]},{'type':'Photo'+'nNetw'+_0x50f913(0x3c9)+'nc','keep':!![],'many':!![]},{'type':_0x50f913(0x9cd)+'rkPla'+_0x50f913(0x1d2)+'imati'+_0x50f913(0xc09),'keep':!![],'many':!![]},{'type':_0x273fbd[_0x50f913(0xac8)],'keep':!![],'many':!![]},{'type':_0x273fbd[_0x50f913(0x85b)],'keep':!![],'many':!![]}],_0x159267=['Assem'+'bly-C'+_0x50f913(0x2a0)+_0x50f913(0x933),'Assem'+'bly-C'+_0x50f913(0x2a0)+_0x50f913(0xab9)+_0x50f913(0xb93)+_0x50f913(0x933),_0x50f913(0x7b5)+_0x50f913(0x872)+_0x50f913(0xae3)+_0x50f913(0x7f6)+'ll',_0x273fbd['dpgoy'],_0x273fbd[_0x50f913(0x764)],_0x273fbd[_0x50f913(0x7f0)]];(function _0x20275a(){var _0x28faec=_0x50f913,_0x280b66={'wwpAO':'none','SYhDx':_0x273fbd[_0x28faec(0x8e5)],'IkBYt':_0x273fbd[_0x28faec(0x50e)],'vFlFC':_0x273fbd[_0x28faec(0xb2a)],'vMFed':function(_0x53f8f2,_0x2e2d27){return _0x53f8f2+_0x2e2d27;},'bTuwP':function(_0x3200d4,_0x101d68){return _0x3200d4+_0x101d68;},'Rpwcu':'backg'+_0x28faec(0x1e3)+':rgba'+'(21,1'+'2,29,'+'.9);b'+_0x28faec(0x70b)+_0x28faec(0x639)+_0x28faec(0xa17)+_0x28faec(0x3a9)+_0x28faec(0xc4b)+'143,1'+'77,.5'+_0x28faec(0xc50)+'or:','acHKP':'borde'+_0x28faec(0x6ca)+'ius:9'+'99px;'+'paddi'+'ng:4p'+'x\x2012p'+_0x28faec(0x8f8)+'t:11p'+'x/1.4'+'\x20ui-m'+'onosp'+_0x28faec(0xa42)+'onsol'+_0x28faec(0x634)+'nospa'+_0x28faec(0x339)};if(_0x273fbd['mzPrd'](_0x273fbd[_0x28faec(0x2a8)],_0x273fbd['ANHvn']))try{if(_0x273fbd[_0x28faec(0x8b3)]('pEIUx',_0x28faec(0xab7))){var _0x218f71=window[_0x28faec(0x480)+_0x28faec(0x396)+_0x28faec(0x7a1)]&&window['Unity'+_0x28faec(0x396)+'dkit'][_0x28faec(0x236)+'me'];if(!_0x218f71||_0x273fbd['srjGS'](typeof _0x218f71[_0x28faec(0x72f)+_0x28faec(0xc48)+'in'],'funct'+'ion')){if(_0x28faec(0x313)!==_0x273fbd[_0x28faec(0x7ce)]){_0x360bd8[_0x28faec(0x7ae)]=_0x28faec(0x236)+'me.cr'+_0x28faec(0x8bf)+'lugin'+_0x28faec(0x8ee)+_0x28faec(0x266)+'le';return;}else{if(_0x3318d0)_0x442e3c['style']['displ'+'ay']=_0x21040d?'':_0x280b66['wwpAO'];if(_0x717199)_0x302b5c[_0x28faec(0x4da)+_0x28faec(0x762)+'t']=_0x17ec60?'close':_0x280b66['SYhDx'];_0x3cca0a['style'][_0x28faec(0xae2)]=_0x441aa9?'min(5'+_0x28faec(0x3e9)+_0x28faec(0x4cc):'auto',_0x17961d[_0x28faec(0x481)][_0x28faec(0x754)+_0x28faec(0x1e3)]=_0x219fef?'#150c'+'1d':_0x28faec(0x9c3)+_0x28faec(0x922)+',29,.'+'9)';}}_0x360bd8[_0x28faec(0xd21)+_0x28faec(0x2e7)]=!![],_0x32a1f1=_0x218f71['creat'+'ePlug'+'in']({'name':_0x28faec(0xb39)+_0x28faec(0x993)+'llwar'+'z','version':_0x462d02,'referencedAssemblies':_0x159267[_0x28faec(0xc72)]()}),_0x360bd8['ok']=!![];try{var _0x4c4f22=window['Unity'+'WebMo'+_0x28faec(0x7a1)][_0x28faec(0x236)+'me'];_0x4c4f22[_0x28faec(0x77c)+'uraTa'+'g']=_0x462d02+':'+Math['rando'+'m']()[_0x28faec(0x433)+'ing'](-0x1*0x13f9+0x249f*0x1+-0x2*0x841)['slice'](-0xe*0x205+-0x26b9+0x4301,0xeac+0x1*0x1087+-0x1f29),_0x1f32e2=_0x4c4f22['__sak'+_0x28faec(0x577)+'g'];}catch(_0x583780){}_0x249882(),_0x55c037(),_0x360bd8['hooks'+_0x28faec(0xcee)+'tered']=_0x3037d0[_0x28faec(0x4f2)+'h'],_0x4c5864(),_0x360bd8[_0x28faec(0x45a)+'yTap']=!![];}else _0x2093ca=_0x2b9c5a,_0x542a8c=_0x518d94[_0x2ba8db];}catch(_0x361f16){_0x360bd8[_0x28faec(0x7ae)]=_0x273fbd['Lxhou'](String,_0x361f16&&_0x361f16['messa'+'ge']||_0x361f16);}else{var _0x42a5b5=_0x280b66['IkBYt']['split']('|'),_0x416f6a=0xcc1*0x2+-0x31*-0x5d+-0x2b4f;while(!![]){switch(_0x42a5b5[_0x416f6a++]){case'0':_0x4bd599[_0x28faec(0x4da)+'onten'+'t']='sakur'+'a';continue;case'1':_0x57bce5[_0x28faec(0x1af)][_0x28faec(0x786)+'dChil'+'d'](_0x4bd599);continue;case'2':var _0x4bd599=_0x1a9fb8['creat'+'eElem'+_0x28faec(0x7ab)](_0x28faec(0x987));continue;case'3':_0x4bd599['id']=_0x280b66[_0x28faec(0xaf0)];continue;case'4':_0x4bd599['oncli'+'ck']=function(){var _0x38bfe0=_0x28faec;_0xbc207b[_0x38bfe0(0x3f8)](_0x1ff0de,![]),_0xa2152a();};continue;case'5':var _0xbc207b={'uBQup':function(_0x55eba1,_0x27c725){return _0x55eba1(_0x27c725);}};continue;case'6':_0x4bd599['style']['cssTe'+'xt']=_0x280b66['vMFed'](_0x280b66['bTuwP']('posit'+_0x28faec(0xa4d)+_0x28faec(0x8c1)+'left:'+_0x28faec(0x5c4)+_0x28faec(0x6a3)+'2px;z'+'-inde'+_0x28faec(0xd0d)+'74829'+_0x28faec(0xb20)+_0x28faec(0x8da)+_0x28faec(0x65c)+_0x28faec(0x2e2)+_0x28faec(0xa07)+_0x28faec(0x845)+'none;',_0x280b66['Rpwcu']),_0x109ef7)+';'+_0x280b66[_0x28faec(0xc04)];continue;}break;}}}());var _0x55908a=new Float32Array(0x14b*-0x2+0x3*-0x2ad+0xa9e),_0x547fdf=new Int32Array(_0x55908a[_0x50f913(0x3fc)+'r']);function _0x4a3018(_0x1d6a53){return _0x55908a[0x2604+-0x127*0x13+-0x101f]=_0x1d6a53,_0x547fdf[-0x14a5+-0x3*0x47d+0x221c];}function _0x56dca3(_0x2e2663){return _0x547fdf[-0xd6a+-0x11*-0xe4+-0x1ba]=_0x2e2663|-0x703*-0x3+-0x259c+0x1093,_0x55908a[-0x109a+-0x1e*0xa7+0x242c];}var _0x5c52ee={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x59baa0(){var _0x10f59e=_0x50f913,_0x40e8a3={'sUjif':function(_0x2ec07d,_0x398581){return _0x2ec07d*_0x398581;},'diCHx':'VERSI'+'ON','IrCUj':function(_0x347cf4,_0x16d137){return _0x347cf4+_0x16d137;},'kbRiu':function(_0x19d08a,_0x315cea){var _0x3a7aba=_0x36c9;return _0x273fbd[_0x3a7aba(0x415)](_0x19d08a,_0x315cea);},'UtOaW':'from\x20'+'insta'+_0x10f59e(0x469)+'e()','ISVOl':function(_0x3d217a,_0x4987c7){return _0x3d217a/_0x4987c7;},'yQYdU':_0x10f59e(0xcb5)+'\x20','mIrcw':'every'+'one\x20b'+_0x10f59e(0xb78)+'u','cDfSP':_0x10f59e(0xbab)+'he\x20li'+_0x10f59e(0x9dd)+_0x10f59e(0xd5f),'NcgRZ':function(_0x1f4ed2,_0x33a1b2){return _0x1f4ed2+_0x33a1b2;},'WKhlE':'+0x29'+'8','bPIyi':function(_0x4f7896,_0x3a2bdd,_0x3e0dab,_0x19f16f){return _0x273fbd['uvRjp'](_0x4f7896,_0x3a2bdd,_0x3e0dab,_0x19f16f);},'DmEgp':'FPSco'+'ntrol'+_0x10f59e(0x630),'YysHb':function(_0x41a790,_0x326d9e,_0x39b9db){return _0x41a790(_0x326d9e,_0x39b9db);}};try{if(_0x32a1f1&&_0x32a1f1[_0x10f59e(0xa08)+'ime']){var _0x412f03=_0x32a1f1[_0x10f59e(0xa08)+'ime'];if(typeof _0x412f03[_0x10f59e(0xcde)+'veGam'+'e']==='funct'+_0x10f59e(0x6b5)){var _0x3b3288=_0x412f03['resol'+'veGam'+'e']();if(_0x3b3288)return _0x5c52ee[_0x10f59e(0x704)+'e']='plugi'+_0x10f59e(0x9ee)+'ntime'+'.reso'+_0x10f59e(0x361)+_0x10f59e(0x69b),_0x3b3288;}if(_0x412f03[_0x10f59e(0x705)]){if(_0x10f59e(0x19c)!==_0x10f59e(0xc29))return _0x5c52ee[_0x10f59e(0x704)+'e']=_0x10f59e(0x9c1)+_0x10f59e(0x9ee)+'ntime'+_0x10f59e(0x865)+'e',_0x412f03[_0x10f59e(0x705)];else _0x37de12(_0x471367);}}}catch(_0x2283a1){}try{if(_0x273fbd[_0x10f59e(0x415)](_0x10f59e(0xa3e),_0x10f59e(0xc6c))){var _0x1b3ae3=_0x6ebbe2['Unity'+_0x10f59e(0x396)+'dkit']['Runti'+'me'];_0x1b3ae3['__sak'+'uraTa'+'g']=_0x2b7a21+':'+_0x37e9df['rando'+'m']()['toStr'+_0x10f59e(0x5ab)](-0x3f*0x7b+0x4d4+0x1995)['slice'](-0x153b+-0xd90+-0x1*-0x22cd,-0x39*-0x39+0x1d11+0x42c*-0xa),_0x54239c=_0x1b3ae3[_0x10f59e(0x77c)+_0x10f59e(0x577)+'g'];}else{var _0x571831=window['Unity'+_0x10f59e(0x396)+_0x10f59e(0x7a1)]&&window['Unity'+'WebMo'+_0x10f59e(0x7a1)]['Runti'+'me'];if(_0x571831&&typeof _0x571831['resol'+'veGam'+'e']===_0x10f59e(0x48f)+_0x10f59e(0x6b5)){if(_0x10f59e(0x5d0)!==_0x273fbd['Nxjqp']){if(_0xd5aea9['el'])_0x3f7d17['el'][_0x10f59e(0x481)]['displ'+'ay']=_0x10f59e(0xa8d);return;}else{var _0x520611=_0x571831['resol'+_0x10f59e(0xbbe)+'e']();if(_0x520611)return _0x5c52ee[_0x10f59e(0x704)+'e']='Runti'+_0x10f59e(0x6df)+_0x10f59e(0x2d0)+_0x10f59e(0x90c)+')',_0x520611;}}if(_0x571831&&_0x571831[_0x10f59e(0x705)])return _0x5c52ee[_0x10f59e(0x704)+'e']=_0x273fbd['ICkCL'],_0x571831;}}catch(_0x30581f){}try{var _0x4d056f=window['unity'+_0x10f59e(0xb6f)+'nce']||window['unity'+_0x10f59e(0x533)]||window[_0x10f59e(0x20f)];if(_0x4d056f)return _0x5c52ee['sourc'+'e']=_0x273fbd['YdMId'],_0x4d056f;}catch(_0x2194cb){}try{if(typeof game!==_0x273fbd['RZQjI']&&game)return _0x5c52ee['sourc'+'e']='bare\x20'+_0x10f59e(0xb0c)+_0x10f59e(0xd49)+'ng',game;}catch(_0x328b6d){}try{if('XxYpb'===_0x273fbd['ddeGG']){var _0x20c013=Object[_0x10f59e(0x5f2)](window);for(var _0x33ec2d=-0x3a*0x2c+-0x259d+0xd*0x3a9;_0x273fbd[_0x10f59e(0x974)](_0x33ec2d,_0x20c013[_0x10f59e(0x4f2)+'h'])&&_0x33ec2d<-0x1*0x128+0x1e9*-0xb+-0x19*-0xfb;_0x33ec2d++){var _0x4536b7=window[_0x20c013[_0x33ec2d]];if(_0x4536b7&&_0x273fbd['ZonQg'](typeof _0x4536b7,'objec'+'t')&&_0x4536b7['Modul'+'e']&&_0x4536b7['Modul'+'e'][_0x10f59e(0x39e)+'8']&&_0x4536b7[_0x10f59e(0x1fe)+'e'][_0x10f59e(0x39e)+'8']['buffe'+'r'])return'RzTkK'!==_0x273fbd[_0x10f59e(0x7c2)]?(_0x50f071['sourc'+'e']='windo'+_0x10f59e(0xc18)+'bal',_0x5da72d):(_0x5c52ee[_0x10f59e(0x704)+'e']=_0x273fbd['QSdFE'](_0x273fbd[_0x10f59e(0xa13)](_0x273fbd[_0x10f59e(0x551)],_0x20c013[_0x33ec2d]),_0x273fbd[_0x10f59e(0x22d)]),_0x4536b7);}}else{var _0x3a9efc=_0x179301[_0x518c43][_0x10f59e(0x85e)+'et']['k'],_0x47ec02='';if(_0x3a9efc===_0x40e8a3['diCHx'])_0x47ec02=_0x465f09?_0x100f9d[_0x10f59e(0x65e)+'on']:'-';else{if(_0x3a9efc===_0x10f59e(0xbe9)+_0x10f59e(0xa6b)+_0x10f59e(0xd66)+'tered')_0x47ec02=_0x1ba87a?_0x40e8a3['IrCUj'](_0x199fae[_0x10f59e(0xbf2)+'Appli'+'ed'],_0x10f59e(0x805))+_0x45bf33['hooks'+'Regis'+'tered'+_0x10f59e(0xa54)]:'-';else{if(_0x40e8a3[_0x10f59e(0x399)](_0x3a9efc,_0x40e8a3[_0x10f59e(0x50c)]))_0x47ec02=_0x35199b&&_0x45fe58[_0x10f59e(0xcd4)+'emory']&&_0x1dce8c[_0x10f59e(0xcd4)+_0x10f59e(0x5a6)][_0x10f59e(0x234)+'red']?_0x40e8a3[_0x10f59e(0x726)](_0x40e8a3['IrCUj'](_0x22e32c[_0x10f59e(0x1e3)](_0x40e8a3['ISVOl'](_0x335eb8['wasmM'+'emory'][_0x10f59e(0x4ff)],0x2*-0xf7a41+-0x1f2d57+0x4e21d9*0x1))+_0x40e8a3['yQYdU'],_0x5e826e[_0x10f59e(0xcd4)+_0x10f59e(0x5a6)][_0x10f59e(0xb6a)]),'ms'):'-';else{if(_0x3a9efc===_0x10f59e(0x422)+_0x10f59e(0x1c3)+'orkSy'+'nc')_0x47ec02=_0x13ffd1&&_0x21ee43[_0x10f59e(0x68c)]?_0x474c9e(_0x3dda6[_0x10f59e(0x68c)][_0x10f59e(0x90d)+_0x10f59e(0xd2a)+'t']):'-';else{if(_0x40e8a3[_0x10f59e(0x399)](_0x3a9efc,_0x40e8a3[_0x10f59e(0x5dd)]))_0x47ec02=_0x5c38fe&&_0x125b97['esp']?_0x18f3e7(_0x4efa8c['esp'][_0x10f59e(0xc66)+_0x10f59e(0x410)]):'-';else{if(_0x3a9efc===_0x40e8a3[_0x10f59e(0xb65)])_0x47ec02=_0x275c97&&_0x44a98f[_0x10f59e(0x68c)]&&_0x2fc228[_0x10f59e(0x68c)]['camer'+'a']?_0x40e8a3[_0x10f59e(0x5f6)](_0x4a9543['esp'][_0x10f59e(0xc6d)+'a']+'\x20(',_0x21d761['esp'][_0x10f59e(0xc6d)+_0x10f59e(0x48d)])+')':'-';else{if(_0x3a9efc===_0x10f59e(0x3cc)+_0x10f59e(0xa34)+'ler+0'+_0x10f59e(0x9ea))_0x47ec02=_0x59ecd4&&_0x4e743a[_0x10f59e(0x45f)]&&_0xd85ece[_0x10f59e(0x45f)][_0x10f59e(0xa8a)]?_0x44f890[_0x10f59e(0x45f)][_0x10f59e(0xa8a)][_0x10f59e(0x2f4)](function(_0x182a61){return _0x1045ec['round'](_0x182a61*(-0x75*-0xe+-0x73*-0x1d+0xb*-0x1bb))/(-0x748+0x15*0xe9+-0xb71);})['join']('\x20\x20'):'-';else{if(_0x3a9efc===_0x40e8a3[_0x10f59e(0x32a)])_0x47ec02=_0x3939b4&&_0x4fda26['local']&&_0x4dca42['local']['eye']?_0x3c57f7['local'][_0x10f59e(0x494)]['map'](function(_0x494979){var _0x7b2cba=_0x10f59e;return _0x1f7679[_0x7b2cba(0x1e3)](_0x40e8a3[_0x7b2cba(0x696)](_0x494979,-0x1*-0x25a3+0x7a4+-0x2ce3*0x1))/(0x2623+0x515+0x4*-0xab5);})['join']('\x20\x20'):'-';else{var _0x22d402=_0x3a9efc[_0x10f59e(0x75c)]('+');_0x47ec02=_0x40e8a3['bPIyi'](_0x1e83ec,_0x584a6f,_0x22d402[-0x5d*-0x38+0x1*0x742+-0x1b9a]['index'+'Of'](_0x10f59e(0x1d9)+'h')===-0x77+-0x2433+0x24aa?_0x10f59e(0x1d9)+'hScri'+'pt':_0x40e8a3[_0x10f59e(0x929)],_0x40e8a3[_0x10f59e(0x19f)](_0x12f419,_0x22d402[-0x174f+-0x9*-0x18d+0x95b],0x1*0x337+-0x21f+-0x84*0x2));}}}}}}}}if(_0x47ec02!==_0x20976c[_0xedb061]['textC'+_0x10f59e(0x762)+'t'])_0x83fa45[_0x2dc289][_0x10f59e(0x4da)+_0x10f59e(0x762)+'t']=_0x47ec02;}}catch(_0x5ce4fa){}return _0x5c52ee[_0x10f59e(0x704)+'e']=null,null;}function _0xe38659(){var _0x23787d=_0x50f913,_0x38052f={'Lcgwa':function(_0x5b8585,_0x393499){return _0x5b8585^_0x393499;},'rGBWO':function(_0x1a9fff,_0x50e6f6){return _0x273fbd['CGWlm'](_0x1a9fff,_0x50e6f6);},'sBPbF':'obfI','yweki':function(_0x4ddc7d,_0xcd04e4){var _0x2c7ae9=_0x36c9;return _0x273fbd[_0x2c7ae9(0x66c)](_0x4ddc7d,_0xcd04e4);},'ouvHI':function(_0x2f22c0,_0x3166bf){return _0x2f22c0!==_0x3166bf;}};try{if(_0x2512bc&&_0x2512bc[_0x23787d(0x3fc)+'r']&&_0x2512bc['buffe'+'r'][_0x23787d(0x52d)+_0x23787d(0x4f3)])return _0x5c52ee['sourc'+'e']=_0x5c52ee['sourc'+'e']||_0x23787d(0x38e)+'ntiat'+'e().e'+_0x23787d(0xc9e)+_0x23787d(0x436)+_0x23787d(0x3d8),new Uint8Array(_0x2512bc['buffe'+'r']);}catch(_0x37afe8){}try{if(_0x273fbd['GlVLI']('wUzAp',_0x23787d(0x658))){if(_0x50801a===_0x23787d(0x50b))return _0x19e96d(_0x38052f[_0x23787d(0x95b)](_0x32639a,_0x149b9));if(_0x38052f[_0x23787d(0xc23)](_0x37a57c,_0x38052f[_0x23787d(0x569)]))return _0x38052f['yweki'](_0x27001e^_0x3d04ca,0xc63+0x13*-0x1e3+-0xb*-0x222);return _0x38052f['ouvHI'](_0x38052f['Lcgwa'](_0x479a96,_0xaa4504)&0x1*0x22a+-0x7b*-0x1d+0x78d*-0x2,-0x1c57+0x107c+0x5*0x25f)?0x26fd+0x595+0x1*-0x2c91:0x517*-0x4+0x1569+-0x10d;}else{var _0x182bd4=_0x59baa0();if(_0x182bd4&&_0x182bd4['Modul'+'e']&&_0x182bd4[_0x23787d(0x1fe)+'e'][_0x23787d(0x39e)+'8']&&_0x182bd4[_0x23787d(0x1fe)+'e'][_0x23787d(0x39e)+'8']['buffe'+'r'])return _0x182bd4['Modul'+'e']['HEAPU'+'8'];}}catch(_0x545ec9){}return null;}function _0x217af7(){var _0x123232=_0x50f913,_0x37c2c8=_0xe38659();if(!_0x37c2c8)return null;try{if(_0x273fbd['jTASe']('fVOIR','HKRsy')){var _0x82fc9e=_0x3baed4[_0x17907e];_0x2ff878+=_0x82fc9e['hits']||-0xb1d+-0x1*-0x17f9+-0x66e*0x2,_0x352617+=(_0x82fc9e['setHi'+'ts']||0x17a5*-0x1+-0x5*-0x2e3+-0x3*-0x312)+(_0x82fc9e[_0x123232(0xbae)+_0x123232(0x447)]||-0x1*-0x14b+0x3d5+-0x10*0x52);}else return new DataView(_0x37c2c8[_0x123232(0x3fc)+'r'],_0x37c2c8['byteO'+_0x123232(0x962)],_0x37c2c8[_0x123232(0x52d)+'ength']);}catch(_0x2babdb){return null;}}function _0x131249(_0x44b8d3,_0x560e81){var _0x58c69b=_0x50f913,_0x4cb971={'yvJiy':function(_0xef1d89,_0x15e1cf){return _0xef1d89/_0x15e1cf;}};if(_0x273fbd[_0x58c69b(0x773)]('zETVP','OcVLV')){var _0x2129c4=_0x273fbd['hVOuR'](_0x217af7);if(!_0x2129c4){if('FAnXZ'===_0x273fbd[_0x58c69b(0x320)]){var _0x4d1e7e=_0x2a659c[_0x58c69b(0x72f)+_0x58c69b(0x224)+'ent'](_0x58c69b(0x481));_0x4d1e7e['id']='sakur'+_0x58c69b(0x694)+_0x58c69b(0xcc0)+'ss',_0x4d1e7e[_0x58c69b(0x4da)+_0x58c69b(0x762)+'t']=_0x273fbd[_0x58c69b(0xd3f)],(_0x33a183[_0x58c69b(0x41c)]||_0x172ac6[_0x58c69b(0x1c2)+'entEl'+_0x58c69b(0x656)])[_0x58c69b(0x786)+'dChil'+'d'](_0x4d1e7e);}else return _0x5c52ee['faile'+'d']++,_0x5c52ee[_0x58c69b(0x94f)+'rror']=_0x5c52ee[_0x58c69b(0x94f)+'rror']||'no\x20HE'+_0x58c69b(0xbda)+_0x58c69b(0x676)+'ty\x20in'+'stanc'+_0x58c69b(0xb43)+_0x58c69b(0xba4)+'hable'+_0x58c69b(0x355)+_0x58c69b(0x236)+_0x58c69b(0x6df)+'solve'+_0x58c69b(0x90c)+_0x58c69b(0x5a0)+'any\x20w'+_0x58c69b(0xcdc)+'\x20glob'+'al',undefined;}if(_0x44b8d3<0x162f*0x1+0x1*0x1c4c+-0x327b*0x1||_0x273fbd[_0x58c69b(0x864)](_0x273fbd['wBkaf'](_0x44b8d3,-0x11*-0x182+-0x1375+-0x629),_0x2129c4[_0x58c69b(0x52d)+_0x58c69b(0x4f3)])){if(_0x273fbd['rYMbL']('FxVuu','FxVuu'))_0x4d02f9=_0x4f4460['x']/(0x7*-0x4f8+-0x194+-0x1*-0x2844),_0x156044=_0x4cb971[_0x58c69b(0xcd5)](_0x2e7442['y'],-0x1396+-0xa16*-0x2+0x352);else return _0x5c52ee[_0x58c69b(0x3b6)+'d']++,_0x5c52ee['lastE'+_0x58c69b(0x87f)]=_0x5c52ee[_0x58c69b(0x94f)+'rror']||_0x273fbd[_0x58c69b(0xb25)]('addre'+'ss\x200x'+_0x44b8d3[_0x58c69b(0x433)+_0x58c69b(0x5ab)](0x257*0x1+-0xf9b+-0xd54*-0x1)+(_0x58c69b(0xb2b)+_0x58c69b(0x64a)+_0x58c69b(0x7bb)+'0x'),_0x2129c4['byteL'+_0x58c69b(0x4f3)]['toStr'+_0x58c69b(0x5ab)](0x1653+-0xadb+-0x8*0x16d)),undefined;}try{_0x5c52ee['ok']++;switch(_0x560e81){case'u8':return _0x2129c4[_0x58c69b(0x1d4)+_0x58c69b(0x70f)](_0x44b8d3);case'i8':return _0x2129c4['getIn'+'t8'](_0x44b8d3);case _0x273fbd[_0x58c69b(0x2b9)]:return _0x2129c4[_0x58c69b(0x6db)+'t16'](_0x44b8d3,!![]);case _0x58c69b(0xcf7):return _0x2129c4['getUi'+_0x58c69b(0x9ec)](_0x44b8d3,!![]);case _0x273fbd['vSTMn']:return _0x2129c4['getIn'+'t32'](_0x44b8d3,!![]);case _0x273fbd['woWVZ']:return _0x2129c4[_0x58c69b(0x1d4)+_0x58c69b(0xc88)](_0x44b8d3,!![]);case'f32':return _0x2129c4[_0x58c69b(0x442)+'oat32'](_0x44b8d3,!![]);case _0x273fbd['XCIzi']:return _0x2129c4[_0x58c69b(0x442)+_0x58c69b(0xd69)](_0x44b8d3,!![]);case'v2':case'v3':case'v4':return _0x2129c4[_0x58c69b(0x442)+_0x58c69b(0x5b6)](_0x44b8d3,!![]);default:return _0x2129c4[_0x58c69b(0x6db)+'t32'](_0x44b8d3,!![]);}}catch(_0x256c94){if(_0x273fbd[_0x58c69b(0x7b9)]('KFWjl',_0x273fbd['jNXrT'])){var _0x45deb3=_0x149362['creat'+_0x58c69b(0x224)+'ent'](_0x58c69b(0x481));_0x45deb3['id']='sakur'+'a-men'+_0x58c69b(0x273),_0x45deb3[_0x58c69b(0x4da)+_0x58c69b(0x762)+'t']=_0x51b22e,(_0x3a6a8d[_0x58c69b(0x41c)]||_0x7126af['docum'+'entEl'+'ement'])[_0x58c69b(0x786)+'dChil'+'d'](_0x45deb3);}else return _0x5c52ee['faile'+'d']++,_0x5c52ee[_0x58c69b(0x94f)+_0x58c69b(0x87f)]=_0x5c52ee[_0x58c69b(0x94f)+'rror']||String(_0x256c94&&_0x256c94['messa'+'ge']||_0x256c94)[_0x58c69b(0xc72)](-0xca+-0xd*-0x1b7+-0x1581,0x1*0x82c+-0x210+-0x13*0x4c),undefined;}}else _0x4806bc[_0x58c69b(0x8fb)]=_0x13da90[-0xcd1*-0x1+-0x79a+-0x535][_0x58c69b(0xb5f)](),_0x438ac1[_0x58c69b(0xbae)+'its']++;}function _0x10ad83(_0x1f2319,_0xd91e4a,_0x1d3db7){var _0x1707bc=_0x50f913,_0x335346=_0x273fbd['qRZTR'](_0x217af7);if(!_0x335346||_0x273fbd[_0x1707bc(0x237)](_0x1f2319,0x7a3+0x989*0x1+-0x2*0x896)||_0x273fbd[_0x1707bc(0x39d)](_0x1f2319+(-0x7*-0x347+-0x58*0x48+0x1d3),_0x335346[_0x1707bc(0x52d)+_0x1707bc(0x4f3)]))return![];try{switch(_0xd91e4a){case'u8':case'i8':_0x335346[_0x1707bc(0xb70)+_0x1707bc(0x70f)](_0x1f2319,_0x273fbd['Ryqjl'](_0x1d3db7,0x1*0xd2f+0x54c*0x6+-0x2bf8));break;case _0x1707bc(0x8d3):case _0x273fbd['bjDMb']:_0x335346['setIn'+_0x1707bc(0x99f)](_0x1f2319,_0x273fbd[_0x1707bc(0xba3)](_0x1d3db7,0x24a7+-0x1*-0xca1+0x298*-0x13),!![]);break;case _0x1707bc(0x8d5):case'u32':_0x335346[_0x1707bc(0x345)+_0x1707bc(0x82b)](_0x1f2319,_0x273fbd['wyHhV'](_0x1d3db7,0x2*-0xf5a+-0x80b*0x1+0x26bf),!![]);break;case'f32':_0x335346['setFl'+'oat32'](_0x1f2319,_0x1d3db7,!![]);break;default:_0x335346[_0x1707bc(0x345)+_0x1707bc(0x82b)](_0x1f2319,_0x273fbd[_0x1707bc(0xbc9)](_0x1d3db7,0xbf9+-0x1580+0x987),!![]);}return!![];}catch(_0x483dd9){return![];}}var _0x3fa18c={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':'i32'},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':_0x273fbd[_0x50f913(0x861)]},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0x25acec(_0x2ddece){var _0x2e09fe=_0x50f913,_0x55ef64='';for(var _0x186a52=-0xe2*0xb+0x2461+-0x1aab;_0x273fbd[_0x2e09fe(0xbff)](_0x186a52,_0x2ddece['lengt'+'h']);_0x186a52++){var _0x2e9b21=_0x2ddece[_0x186a52]['toStr'+'ing'](0xa3*-0x35+0x2*0x10b7+0x1*0x61);_0x55ef64+=(_0x2e9b21[_0x2e09fe(0x4f2)+'h']<-0x138a+0x2530+-0x4*0x469?'0':'')+_0x2e9b21;}return _0x55ef64;}function _0x297ef9(_0x406c5d,_0x4b7bb3,_0x4333bf){var _0x7fde19=_0x50f913,_0x47f021=_0x273fbd['jUpEZ'](_0x217af7);if(!_0x47f021)return _0x5c52ee[_0x7fde19(0x3b6)+'d']++,_0x5c52ee[_0x7fde19(0x94f)+_0x7fde19(0x87f)]=_0x5c52ee['lastE'+_0x7fde19(0x87f)]||_0x7fde19(0x368)+_0x7fde19(0xbda)+'-\x20Uni'+_0x7fde19(0x29e)+_0x7fde19(0x850)+_0x7fde19(0xb43)+_0x7fde19(0xba4)+_0x7fde19(0x66d)+'\x20via\x20'+_0x7fde19(0x236)+'me.re'+_0x7fde19(0x2d0)+_0x7fde19(0x90c)+_0x7fde19(0x5a0)+'any\x20w'+'indow'+_0x7fde19(0x4ea)+'al',null;if(_0x273fbd['gLIjh'](_0x4b7bb3,0x7f1+0x695+-0xe86)||_0x273fbd[_0x7fde19(0x39d)](_0x4b7bb3+_0x4333bf,_0x47f021[_0x7fde19(0x52d)+_0x7fde19(0x4f3)]))return _0x5c52ee['faile'+'d']++,_0x5c52ee[_0x7fde19(0x94f)+'rror']=_0x5c52ee['lastE'+'rror']||_0x7fde19(0x58d)+'ss\x200x'+_0x273fbd['OVPBR'](_0x406c5d,_0x4b7bb3)[_0x7fde19(0x433)+_0x7fde19(0x5ab)](-0x716+-0x2655+0x2d7b)+_0x273fbd['IQRLo']+_0x47f021[_0x7fde19(0x52d)+'ength']['toStr'+_0x7fde19(0x5ab)](0x23d4+0x1*-0x267a+0x2b6),null;try{var _0x5a31d3=new Uint8Array(_0x4333bf);for(var _0x4c6e61=-0x1e1c+-0x13b9+0x1*0x31d5;_0x4c6e61<_0x4333bf;_0x4c6e61++)_0x5a31d3[_0x4c6e61]=_0x47f021[_0x7fde19(0x1d4)+'nt8'](_0x273fbd[_0x7fde19(0x4a2)](_0x273fbd[_0x7fde19(0x99b)](_0x406c5d,_0x4b7bb3),_0x4c6e61));return _0x5c52ee['ok']++,_0x5a31d3;}catch(_0x33189c){if(_0x273fbd[_0x7fde19(0xb66)](_0x273fbd['Ceewf'],_0x7fde19(0x518))){var _0x5ebefb=new _0x2fb587('sakur'+'a-sw');_0x5ebefb['postM'+_0x7fde19(0x93b)+'e'](_0x5c0c5f),_0x2e19e7(function(){try{_0x5ebefb['close']();}catch(_0x549ed1){}},0x4a*0x43+-0x1cf2+0xa8e);}else return _0x5c52ee[_0x7fde19(0x3b6)+'d']++,_0x5c52ee[_0x7fde19(0x94f)+_0x7fde19(0x87f)]=_0x5c52ee[_0x7fde19(0x94f)+'rror']||String(_0x33189c&&_0x33189c['messa'+'ge']||_0x33189c)['slice'](-0x8e*-0x45+0xc55+-0x329b,0x1671+-0x1*-0x1646+-0x2c3f),null;}}function _0x145e06(_0x2b21fc,_0x91b899,_0xd09d47){var _0x500265=_0x50f913,_0x528088=_0x3fa18c[_0xd09d47],_0x527a4e=_0x273fbd['DRMiZ'](_0x297ef9,_0x2b21fc,_0x91b899,_0x528088['size']);if(!_0x527a4e)return null;var _0x40204b=new DataView(_0x527a4e[_0x500265(0x3fc)+'r'],_0x527a4e['byteO'+_0x500265(0x962)],_0x527a4e['byteL'+_0x500265(0x4f3)]),_0xd520a7=_0x40204b['getIn'+'t32'](_0x528088[_0x500265(0x9d3)],!![]),_0x1cc012=_0x40204b['getIn'+_0x500265(0x82b)](_0x528088[_0x500265(0xb8f)+'n'],!![]),_0x1218bd=_0x40204b['getUi'+_0x500265(0x70f)](_0x528088[_0x500265(0xd6f)+'d'])&0xc*0x1e3+0x52+-0x16f5,_0x297b8e=_0xd09d47===_0x500265(0x50b)?_0x40204b['getFl'+_0x500265(0x5b6)](_0x528088['fake'],!![]):_0x273fbd[_0x500265(0xa80)](_0xd09d47,_0x273fbd[_0x500265(0x685)])?_0x40204b[_0x500265(0x6db)+'t32'](_0x528088[_0x500265(0x452)],!![]):_0x40204b['getUi'+'nt8'](_0x528088[_0x500265(0x452)]),_0x4a6a4a=_0x40204b[_0x500265(0x1d4)+'nt8'](_0x528088[_0x500265(0xadd)+'e'])&0x1f1d+0x2123+0x1*-0x403f;return{'keyAtOffset0':_0xd520a7,'hidden':_0x1cc012,'inited':_0x1218bd,'fake':_0x297b8e,'act':_0x4a6a4a,'hex':_0x25acec(_0x527a4e),'alt':_0x273fbd['CBPuZ'](_0xd09d47,_0x500265(0xb34))?_0x1cc012^(_0x297b8e|0x1ff*-0x13+-0x213d+0x472a):null};}function _0xdb4126(_0x27905f,_0x4a6e87,_0x2f2c4a){var _0x15770f=_0x50f913;if(_0x27905f===_0x273fbd[_0x15770f(0x7f4)])return _0x56dca3(_0x4a6e87^_0x2f2c4a);if(_0x273fbd[_0x15770f(0x542)](_0x27905f,'obfI'))return _0x4a6e87^_0x2f2c4a|0x4*-0x67+0xf2*-0x1a+0x10*0x1a3;return _0x273fbd['ggthb'](_0x273fbd[_0x15770f(0x628)](_0x4a6e87,_0x2f2c4a),-0x72*-0x9+0x22e1+-0x2*0x12f2)!==0xcb6+-0x1f*0x125+0x3*0x797?-0x4*-0x7b5+-0x20c9+-0xfb*-0x2:-0x23e7+-0x22c2*-0x1+-0x125*-0x1;}function _0x43c4a2(_0x4d8df7,_0x470deb,_0x45dc2f){var _0x3e2316=_0x50f913,_0x5e905c=_0x3fa18c[_0x45dc2f];if(!_0x5e905c)return null;var _0x10c6fc=_0x273fbd[_0x3e2316(0x495)](_0x131249,_0x273fbd['hITWF'](_0x4d8df7+_0x470deb,_0x5e905c[_0x3e2316(0x9d3)]),'u8'),_0x3183fe=_0x131249(_0x273fbd['EFPBk'](_0x4d8df7,_0x470deb)+_0x5e905c[_0x3e2316(0xb8f)+'n'],'i32'),_0x32ca58=_0x131249(_0x273fbd[_0x3e2316(0x3a0)](_0x4d8df7,_0x470deb)+_0x5e905c[_0x3e2316(0xd6f)+'d'],'u8'),_0x5d07ce=_0x273fbd[_0x3e2316(0x495)](_0x131249,_0x273fbd[_0x3e2316(0x655)](_0x273fbd['hITWF'](_0x4d8df7,_0x470deb),_0x5e905c[_0x3e2316(0x452)]),_0x273fbd[_0x3e2316(0x389)](_0x45dc2f,_0x3e2316(0x50b))?_0x273fbd[_0x3e2316(0x971)]:_0x45dc2f==='obfI'?_0x3e2316(0x8d5):'u8'),_0x202395=_0x273fbd[_0x3e2316(0x495)](_0x131249,_0x4d8df7+_0x470deb+_0x5e905c[_0x3e2316(0xadd)+'e'],'u8');if(_0x10c6fc===undefined||_0x3183fe===undefined||_0x273fbd[_0x3e2316(0xb4c)](_0x5d07ce,undefined)||_0x202395===undefined)return null;_0x10c6fc&=-0x1f10+0xa7*-0x2b+0x3c1c,_0x3183fe|=0x1*0x20cf+-0x590+-0x1b3f,_0x32ca58=(_0x32ca58||-0x151f+-0x1638+0x2b57)&-0x2*0x8ef+-0x9d*-0x1c+0xb3*0x1,_0x202395&=-0x35*0xa7+0x2059+0x23b;var _0x486464;if(_0x45dc2f===_0x273fbd[_0x3e2316(0x7f4)])_0x486464=_0x56dca3(_0x3183fe^_0x10c6fc);else{if(_0x45dc2f===_0x3e2316(0xb34))_0x486464=_0x273fbd['RlGnM'](_0x3183fe^_0x10c6fc,-0xf87+-0x5*0x17b+0x16ee);else _0x486464=((_0x3183fe^_0x10c6fc)&0x18a1+-0x509*0x3+-0x3b*0x25)!==0x178+-0x3*-0x8ed+-0x1c3f?0x1*-0x1ceb+0x1*-0x13a9+0x3095:0x3b5+0x4*-0x4d5+0xf9f;}return{'real':_0x486464,'fake':_0x5d07ce,'act':_0x202395,'init':_0x32ca58,'key':_0x10c6fc,'hidden':_0x3183fe};}function _0x87eb7(_0x4adee8,_0xa09bd,_0x53f6ed,_0xcb3bdc){var _0x4de430=_0x50f913;if(_0x4de430(0x76a)!==_0x273fbd['Uszsn']){var _0x1be11d=_0x273fbd[_0x4de430(0x741)](_0x272cd2);if(_0x1be11d&&_0x1be11d[_0x4de430(0x1fe)+'e']&&_0x1be11d['Modul'+'e'][_0x4de430(0x39e)+'8']&&_0x1be11d[_0x4de430(0x1fe)+'e'][_0x4de430(0x39e)+'8']['buffe'+'r'])return _0x1be11d[_0x4de430(0x1fe)+'e'][_0x4de430(0x39e)+'8'];}else{var _0x35471b=_0x3fa18c[_0x53f6ed],_0x1c36ad=_0x297ef9(_0x4adee8,_0xa09bd,_0x35471b[_0x4de430(0x7bc)]);if(!_0x1c36ad)return![];var _0x286ec0=new DataView(_0x1c36ad[_0x4de430(0x3fc)+'r'],_0x1c36ad['byteO'+'ffset'],_0x1c36ad[_0x4de430(0x52d)+_0x4de430(0x4f3)]),_0x300865=_0x273fbd[_0x4de430(0xcb0)](_0x35471b[_0x4de430(0x9d4)+'pe'],'u8')?_0x286ec0[_0x4de430(0x1d4)+_0x4de430(0x70f)](_0x35471b['key']):_0x286ec0['getIn'+'t32'](_0x35471b[_0x4de430(0x9d3)],!![]),_0x9476ca;if(_0x53f6ed===_0x4de430(0x50b))_0x9476ca=_0x4a3018(_0xcb3bdc);else{if(_0x273fbd[_0x4de430(0xcb3)](_0x53f6ed,_0x4de430(0xb34)))_0x9476ca=_0xcb3bdc|-0x1379+-0x2034+0x33ad*0x1;else _0x9476ca=_0x273fbd['Ryqjl'](_0xcb3bdc?0x1*-0x179f+-0x26be+0x3e5e:0x10d1+0x52+-0x1123,-0x19*0x49+-0x192f+-0x214f*-0x1);}return _0x273fbd['DRMiZ'](_0x10ad83,_0x273fbd[_0x4de430(0x4df)](_0x4adee8+_0xa09bd,_0x35471b[_0x4de430(0xb8f)+'n']),_0x273fbd[_0x4de430(0x861)],_0x273fbd[_0x4de430(0x281)](_0x9476ca,_0x300865))&&_0x273fbd[_0x4de430(0xa76)](_0x10ad83,_0x4adee8+_0xa09bd+_0x35471b[_0x4de430(0x452)],_0x53f6ed===_0x4de430(0x50b)?_0x4de430(0xd5a):_0x53f6ed===_0x273fbd[_0x4de430(0x685)]?'i32':'u8',_0x53f6ed==='obfF'?_0xcb3bdc:_0x273fbd['IIooU'](_0x53f6ed,_0x4de430(0xb34))?_0xcb3bdc|0x2265+-0xfa8*0x2+0x3*-0x107:_0xcb3bdc?0xc2+-0x2125+-0x2064*-0x1:0x24eb+-0x1*0x389+-0x10b1*0x2)&&_0x10ad83(_0x4adee8+_0xa09bd+_0x35471b[_0x4de430(0xadd)+'e'],'u8',0x9c*-0x3b+-0x1c40+0x4034);}}var _0x1ccb3a={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0x1513d9=0x153*-0x1b+-0x1c2a+0x3feb*0x1+0.03,_0x26bb7c=-0xb2*0x2b+0x3fa+0x19ee,_0x3617f2={},_0x256bc0=0xa*-0x147+0x65*-0x55+0x943*0x5,_0xf901ec=[],_0x1fc25c=[];function _0x439cb2(_0x3f4061){var _0x46cdc2=_0x50f913,_0x391a96={'XsZAU':function(_0x48c6ec,_0x5dfdff){return _0x273fbd['tdmxS'](_0x48c6ec,_0x5dfdff);},'baIXM':function(_0x14de70,_0x56f43d){return _0x14de70!==_0x56f43d;}},_0x423d25=_0x1659e8[_0x46cdc2(0x3cc)+_0x46cdc2(0xa34)+_0x46cdc2(0x630)]||[],_0x33f0c5=[];_0x1fc25c=[],_0xf901ec=[];for(var _0x4d349e=-0x1c9*-0x13+-0x8c3*-0x1+-0x2aae;_0x4d349e<_0x423d25['lengt'+'h'];_0x4d349e++){var _0x2ff196=_0x423d25[_0x4d349e][0x9fa*-0x1+-0x9bc*-0x4+-0x1cf6];if(_0x423d25[_0x4d349e][0x489+0x67c*0x4+-0x1e78]!==_0x46cdc2(0x50b))continue;var _0x2923c8=_0x145e06(_0x3f4061,_0x2ff196,_0x46cdc2(0x50b));if(!_0x2923c8||_0x273fbd['DCVMy'](_0x2923c8['inite'+'d'],0x1663*0x1+-0x14e3+-0x17f*0x1))continue;var _0x3034ab=_0xdb4126(_0x273fbd[_0x46cdc2(0x7f4)],_0x2923c8['hidde'+'n'],_0x2923c8['keyAt'+_0x46cdc2(0xcb9)+'t0']);if(typeof _0x3034ab!==_0x46cdc2(0x2a2)+'r'||!_0x273fbd[_0x46cdc2(0x9dc)](isFinite,_0x3034ab))continue;var _0x362d5d=_0x273fbd['iUxTs'](_0x3f4061+':',_0x2ff196),_0x5c1a8c=_0x3617f2[_0x362d5d];if(!_0x5c1a8c||_0x273fbd[_0x46cdc2(0x796)](_0x3034ab,_0x5c1a8c[_0x46cdc2(0xa2b)+_0x46cdc2(0xa0b)+'n']))_0x5c1a8c=_0x3617f2[_0x362d5d]={'base':_0x3034ab,'lastWritten':null};var _0x7b73=_0x5c1a8c['base'],_0x387696=Math['abs'](_0x7b73);if(_0x387696<0x89a+0x4*0x32f+-0x1556+0.0001||_0x273fbd[_0x46cdc2(0x864)](_0x387696,-0x10382+-0x7124*0x6+-0x39a*-0x171)){if(_0x273fbd[_0x46cdc2(0xb4c)](_0x46cdc2(0x4fc),_0x46cdc2(0x4fc))){_0x1fc25c['push']({'o':_0x2ff196,'v':_0x3034ab,'why':_0x273fbd[_0x46cdc2(0x989)]});continue;}else{var _0x5d9978=_0x5ae553[-0x1*0xcb+0x1*-0x1544+0x160f]-_0x20a5f7['feet'][0x2*0x8d7+-0x1f35*0x1+-0x1*-0xd87],_0x8858e6=_0x273fbd[_0x46cdc2(0xb68)](_0x1582a1[-0x1c2c+0x11cf*0x1+0x3*0x375],_0x5f45d7[_0x46cdc2(0xa8a)][0xf58+-0xf*0x262+0x8*0x28d]);_0x31e1a9['d']=_0x55a997['sqrt'](_0x273fbd['hITWF'](_0x273fbd[_0x46cdc2(0x61a)](_0x5d9978,_0x5d9978),_0x8858e6*_0x8858e6)),_0xda7189[_0x46cdc2(0x904)+'ng']=_0x273fbd[_0x46cdc2(0xd79)](_0x3b1fcb[_0x46cdc2(0x6c5)](_0x5d9978,_0x8858e6),0x1*-0x13d6+-0xb35+0x7*0x489)/_0x1f0d81['PI'];}}_0x33f0c5[_0x46cdc2(0x356)]({'o':_0x2ff196,'v':_0x3034ab,'a':_0x387696,'base':_0x7b73,'key':_0x362d5d,'st':_0x5c1a8c});}var _0x28b670=[];for(var _0x592563=-0xbb7*0x3+0xf60+0x13c5;_0x273fbd[_0x46cdc2(0xbff)](_0x592563,_0x33f0c5['lengt'+'h']);_0x592563++){var _0x3a6b20=_0x33f0c5[_0x592563]['a'],_0x58c9cd=null;for(var _0x3d3402=-0x19be+0x241*-0x1+-0x955*-0x3;_0x3d3402<_0x28b670[_0x46cdc2(0x4f2)+'h'];_0x3d3402++){if(_0x273fbd[_0x46cdc2(0x5d9)]!==_0x273fbd['TcMLs']){var _0x48ed68=_0x465368['max'](0x11*-0x21b+-0x124*0x4+0x285c,_0x1a9432[_0x46cdc2(0xa55)+_0x46cdc2(0xb87)]||_0x34d816[_0x46cdc2(0x1c2)+'entEl'+'ement']['clien'+'tWidt'+'h']||-0x1957+0x2*0x1238+-0xb19),_0x132af9=_0x12b56a['max'](-0x2181*0x1+-0xbb+0x6d9*0x5,_0x5bfa85[_0x46cdc2(0xa55)+'Heigh'+'t']||_0x447d04['docum'+'entEl'+'ement'][_0x46cdc2(0x8cd)+_0x46cdc2(0xb23)+'ht']||-0x173d+-0x214d+0x388a);return(_0x391a96['XsZAU'](_0x1acc9e['cv'][_0x46cdc2(0xae2)],_0x48ed68)||_0x391a96[_0x46cdc2(0x41b)](_0x51621b['cv'][_0x46cdc2(0x463)+'t'],_0x132af9))&&(_0x44093b['cv'][_0x46cdc2(0xae2)]=_0x48ed68,_0x1a202c['cv'][_0x46cdc2(0x463)+'t']=_0x132af9),{'w':_0x48ed68,'h':_0x132af9};}else{var _0x5c31d4=_0x28b670[_0x3d3402]['mean']/_0x3a6b20;if(_0x273fbd[_0x46cdc2(0x864)](_0x5c31d4,-0x12b7+-0x283*-0x2+-0x1*-0xdb2-_0x1513d9)&&_0x5c31d4<-0x140e+0x2*0xc07+-0x3ff+_0x1513d9){_0x58c9cd=_0x28b670[_0x3d3402];break;}}}!_0x58c9cd&&(_0x58c9cd={'mean':_0x3a6b20,'members':[]},_0x28b670[_0x46cdc2(0x356)](_0x58c9cd));_0x58c9cd[_0x46cdc2(0xd6b)+'rs'][_0x46cdc2(0x356)](_0x33f0c5[_0x592563]),_0x58c9cd[_0x46cdc2(0xac0)]=0x9*0x38d+0x25*0x3c+-0x28a1;for(var _0x109727=0x1b39+0x1af9+-0x3632;_0x109727<_0x58c9cd['membe'+'rs']['lengt'+'h'];_0x109727++)_0x58c9cd[_0x46cdc2(0xac0)]+=_0x58c9cd['membe'+'rs'][_0x109727]['a'];_0x58c9cd['mean']/=_0x58c9cd[_0x46cdc2(0xd6b)+'rs'][_0x46cdc2(0x4f2)+'h'];}var _0x377cd3=[];for(var _0x3deea8=-0xb5*-0x14+-0x5bc*0x1+0x2*-0x434;_0x273fbd['GbOop'](_0x3deea8,_0x28b670['lengt'+'h']);_0x3deea8++){if(_0x28b670[_0x3deea8][_0x46cdc2(0xd6b)+'rs'][_0x46cdc2(0x4f2)+'h']>=_0x26bb7c)_0x377cd3[_0x46cdc2(0x356)](_0x28b670[_0x3deea8]);}if(!_0x377cd3[_0x46cdc2(0x4f2)+'h']){_0x1fc25c[_0x46cdc2(0x356)]({'o':-(0xfa4+-0x1*0x141b+-0x478*-0x1),'v':0x0,'why':_0x273fbd[_0x46cdc2(0x767)](_0x273fbd[_0x46cdc2(0x5ad)],_0x26bb7c)+_0x273fbd['ejQeh']});return;}var _0x53554c=_0x377cd3[0x2b*-0xb+-0xfa7+0x1180]['mean'];for(var _0x5a601f=0x14b1+0x8*-0x7d+-0x10c9;_0x273fbd['ELINq'](_0x5a601f,_0x377cd3['lengt'+'h']);_0x5a601f++)if(_0x377cd3[_0x5a601f][_0x46cdc2(0xac0)]<_0x53554c)_0x53554c=_0x377cd3[_0x5a601f]['mean'];var _0x6f5695=_0x273fbd[_0x46cdc2(0xb07)](_0x53554c,-0x1d54+-0xf3b+-0x40d*-0xb+0.5);for(var _0x1d24ef=-0x19c*-0x6+0x51b+-0xec3;_0x1d24ef<_0x28b670[_0x46cdc2(0x4f2)+'h'];_0x1d24ef++){if(_0x28b670[_0x1d24ef][_0x46cdc2(0xd6b)+'rs']['lengt'+'h']>=_0x26bb7c)continue;for(var _0x495d49=0xc*0x20e+-0x180f+-0x99;_0x495d49<_0x28b670[_0x1d24ef]['membe'+'rs']['lengt'+'h'];_0x495d49++){_0x1fc25c['push']({'o':_0x28b670[_0x1d24ef]['membe'+'rs'][_0x495d49]['o'],'v':_0x28b670[_0x1d24ef][_0x46cdc2(0xd6b)+'rs'][_0x495d49]['v'],'why':_0x46cdc2(0xaf7)+_0x46cdc2(0xb99)});}}for(var _0x48363d=0x9d2*-0x3+-0x1*0x1ea5+-0x29d*-0x17;_0x48363d<_0x377cd3[_0x46cdc2(0x4f2)+'h'];_0x48363d++){var _0x80d89c=_0x377cd3[_0x48363d]['membe'+'rs'];for(var _0x53fa1c=-0x1*-0x7ec+-0x24b8+0x184*0x13;_0x53fa1c<_0x80d89c[_0x46cdc2(0x4f2)+'h'];_0x53fa1c++){var _0x4e67f7=_0x80d89c[_0x53fa1c];if(_0x4e67f7['a']<_0x6f5695){_0x1fc25c['push']({'o':_0x4e67f7['o'],'v':_0x4e67f7['v'],'why':_0x46cdc2(0xce2)+'\x20floo'+'r\x20'+_0x6f5695[_0x46cdc2(0xb61)+'ed'](0xc7a*0x2+0xc3b+-0x133*0x1f)});continue;}var _0x1ff2b9=_0x273fbd[_0x46cdc2(0xb07)](_0x4e67f7[_0x46cdc2(0x5e7)],_0x1ccb3a[_0x46cdc2(0x666)+'r']);_0x87eb7(_0x3f4061,_0x4e67f7['o'],_0x46cdc2(0x50b),_0x1ff2b9)&&(_0x4e67f7['st'][_0x46cdc2(0xa2b)+'ritte'+'n']=Math[_0x46cdc2(0xd5d)+'d'](_0x1ff2b9),_0x256bc0++,_0xf901ec['push']('0x'+_0x4e67f7['o'][_0x46cdc2(0x433)+_0x46cdc2(0x5ab)](-0x78e+0x175f+-0xfc1)));}}}var _0x1659e8={'FPScontroller':[[0x1bd*-0x1+0x268c+-0x24bf,_0x273fbd[_0x50f913(0x7f4)]],[0x1bbd+-0x5*-0x6c2+-0x3d5f,_0x50f913(0x50b)],[-0x1*-0x176b+0x9a1+-0x833*0x4,_0x50f913(0x50b)],[-0x1*-0x194b+-0x1*0x708+-0x11eb,'obfF'],[0x2331+0xd26+0x2fe7*-0x1,'obfF'],[0x1c9*-0x12+-0x2b*0x24+0x26b6,_0x273fbd[_0x50f913(0x7f4)]],[0x67*-0x35+0x651*0x1+0xfa2,_0x50f913(0x50b)],[-0x1*0x2141+0x238a*0x1+-0x191,_0x273fbd[_0x50f913(0x1f4)]],[-0x2607+0x24ba+0x1*0x211,_0x273fbd[_0x50f913(0x7f4)]],[-0x9d*-0x3b+0x207a*-0x1+-0x9*0x51,_0x273fbd['vSTMn']],[0x855+-0xb29+0x3b4,'v3'],[0x1eb8*0x1+-0x919+0x1*-0x14b3,'u8'],[0x2598+-0x3*0x21a+-0x1e5a,'obfF'],[-0x26*-0x44+-0x52*0x58+0x1320*0x1,_0x273fbd[_0x50f913(0x861)]],[-0x12f1+-0x35*0x3+0x149c,'u8'],[-0xa97+-0x2*-0xe8d+-0x1173,'i32'],[0xcaa+-0x116+-0xa80,'u8'],[0x2661+-0x1*0x1cf9+-0x853,'u8'],[0x10*-0x62+-0x42b*-0x7+0x1*-0x15f1,_0x50f913(0x50b)],[0x660+0x152*-0xd+0x266*0x5,_0x273fbd[_0x50f913(0x7f4)]],[0x19*-0x8b+-0x13*0x79+-0x2b*-0x8e,_0x50f913(0xd5a)],[0xa93+0x1591+0x4*-0x7b5,_0x50f913(0xd5a)],[0xfaa+0x2b1+0x3*-0x5ad,'v3'],[-0x785+-0x26c4+-0x93*-0x53,'v3'],[-0x4a2+-0x2000+0x260e,_0x50f913(0xd5a)],[-0x18*0x15a+-0x1d3+0x1*0x23b3,_0x273fbd['rUHgk']],[0x1dcf+-0x1b90+-0x1*0xb7,'u8'],[-0x1558+0x848+0xe9c,_0x50f913(0xd5a)],[0x3*0x11a+-0x1*0x1+-0x1b5,'v3'],[-0x19f*0xe+0x9d*0x2f+0x3*-0x17f,'u8'],[-0x765+-0xcad+-0x742*-0x3,_0x273fbd[_0x50f913(0x971)]],[-0x12f4*0x1+0x4*-0x312+0x20f4,'f32'],[-0xf1*-0x11+0x1d6a+-0x2baf,'u8'],[0x94f*0x2+-0x2*0xe78+0x3*0x405,'u8'],[0x135b+0x3a*0x9d+-0x352d,_0x273fbd['wwjGC']],[0x1639*-0x1+0x1fe5+0x3ea*-0x2,_0x273fbd[_0x50f913(0x971)]],[-0xd23+-0x862+0x3*0x7cb,'u8'],[-0x10ba+-0x1*-0x6be+0xbdc,_0x50f913(0x50b)],[-0x1*-0x1b47+0x1780+0x15*-0x253,'v3'],[-0x2350+-0x46e+0x29c6,'obfB'],[0x1924+-0x1025*0x1+0x6e7*-0x1,_0x50f913(0xd5a)],[0x16*0x197+-0x228c+0xd7*0x2,_0x50f913(0xd5a)],[-0x24cc+0x114f+0x15c9,'f32'],[0x5f*-0x43+-0x9d8+0x27*0xf3,_0x273fbd[_0x50f913(0x971)]],[-0x17b9+0x210f+0x3*-0x256,_0x50f913(0xd5a)],[-0x26f1+0x1095+0x18b4,_0x50f913(0xd5a)],[0x15b5+-0x13*0x1eb+0x1*0x1118,'u8'],[-0x6a*-0x57+0x15c0+-0x3769,'u8'],[-0x538+0x6f0+0x1*0xa6,'u8'],[-0x2*-0xbb3+0x13d5+-0x28db,_0x50f913(0xd5a)],[-0x13cd+-0x2337+0xe5a*0x4,'u8'],[0x1*-0x1cd3+-0x1a7d+-0x1*-0x39b5,'u8'],[0x1*0x1d98+-0x21d*0x7+-0xc65,'f32'],[0x6ca*0x5+0x2587+0x450d*-0x1,_0x273fbd['rUHgk']],[-0x141*0x1+-0x3*-0x2f1+-0x522,_0x273fbd['rUHgk']],[0x22*-0x47+0x1863+-0xc81,_0x50f913(0xd5a)],[0x16c*0x1a+0x253f*-0x1+0x2bf,_0x50f913(0xd5a)],[-0x1879+-0x1*-0x162a+0x4cb,'f32'],[0x3*-0x4df+0x26a6+-0x1589,_0x273fbd['rUHgk']],[0x1545+0xf31+-0x21f2,'v3'],[-0x200*0x6+-0x19bd+0x2851,'u8'],[0x18c8+-0x14b6+-0x17a,'v3'],[-0x21b7+0x1*-0x122f+0x368a,_0x273fbd[_0x50f913(0x971)]],[0x5*-0x1bf+-0xd58+0x18bf,'v3'],[-0x1*-0x12c5+0xa*0x316+-0x2ee9,_0x273fbd[_0x50f913(0x971)]],[-0x2513*0x1+0x8c8*0x3+0xd77,_0x273fbd['rUHgk']],[-0x1055*-0x1+0xd68+-0x1afd,_0x273fbd['rUHgk']],[-0x26fe+-0x1*0x8e2+-0x4*-0xca9,'u8'],[0x36e+-0x128f+0x11e6,'u8'],[0xb1c+0xb*-0x167+0x719,_0x273fbd[_0x50f913(0x971)]],[-0xf5*-0x1a+-0x4*0x55d+-0x92,_0x273fbd['rUHgk']],[0x6a*-0x7+0x1efe*-0x1+0x24c8,'v3'],[-0x3*0x30d+-0x57b+-0x8c9*-0x2,'v3'],[-0xd51+-0x1892+0x28df*0x1,_0x273fbd['rUHgk']],[-0x1de9+-0x49*-0x3d+-0x52c*-0x3,'f32'],[-0x85*-0x1b+0xefb+-0x8aa*0x3,'f32'],[0x2172+0xa*0x287+-0x37b0,_0x273fbd[_0x50f913(0x971)]],[0x6e1*0x1+0x4f3+-0x8c8,'v3'],[0x1f04*-0x1+-0x2*-0x2cf+0x7*0x412,'u8'],[-0x1*-0x267d+-0xc2*-0x18+-0x1*0x3591,'v3'],[0x1fbe+0x1ae1+-0x3777,_0x50f913(0x8d5)],[0x23bf*0x1+0x207a+0x15*-0x319,_0x50f913(0xd5a)],[-0x1b83+0x5*0x533+0x4b4,_0x50f913(0xd5a)],[-0x164*0x17+-0x4*0x180+0xa4c*0x4,_0x273fbd[_0x50f913(0x971)]],[-0x10f5+0x21+0x1410,_0x50f913(0xd5a)],[0x8d0+-0x21e+0x7e*-0x7,'u8'],[0x211a+0x87d*-0x1+-0x155c,'u8'],[0x15fc+-0x2344*0x1+0x1*0x1094,'u8'],[0x1b1*-0x11+-0x514*-0x2+0x15e6,'u8'],[0x1*-0x144f+0x249c+-0xcff,'u8'],[-0x23a1+-0x6b4+0x2da5,'f32'],[-0x1f40+0xd9e+0x14f6*0x1,_0x273fbd[_0x50f913(0x971)]],[0x1632+-0x1*0x2266+0xf8c,_0x50f913(0xd5a)],[-0x1a85+0x2*-0x574+0x28c9,_0x273fbd[_0x50f913(0x971)]],[0x20ef+0x694+-0xb*0x349,_0x50f913(0xd5a)],[0x1*0x2278+0x11d3+-0x30e7,'u8'],[0x145e*-0x1+0x2285*-0x1+0x1*0x3a4b,_0x50f913(0xd5a)],[-0xaf5+0x1*0x1bff+-0xd9e,_0x50f913(0xd5a)],[-0x1e29+0x4a*-0x84+0x47c1*0x1,'u8'],[0x1491+0x10b0*0x1+-0x21c9,'v3'],[0x92*-0x22+-0x18df+0x97*0x51,'v3'],[0x1ae3+0x1a02+-0x3155,'v3'],[0x6*-0x62b+0xd*-0x1b7+0x5*0xc95,_0x273fbd[_0x50f913(0x971)]],[0x1b2b+-0x600+-0x118b*0x1,_0x273fbd[_0x50f913(0x971)]],[0x43*0x53+0xb14+-0x1d29,'f32'],[-0x6b4+-0x53b*-0x6+-0x1506,'v3'],[-0x1c1d+0xec3*-0x2+0x3d57,_0x50f913(0x8d5)],[-0x1d39*0x1+0x3*0x232+0x207*0xd,'u8'],[-0xbea+-0x2*-0x725+0x15c,_0x273fbd['vSTMn']],[0x1c91+-0x216e+0x15*0x69,_0x50f913(0xd5a)],[-0x278*0x8+0x17*-0x108+-0xbcf*-0x4,'f32'],[0x17ab+-0x416*0x7+0x8b7,'f32'],[-0x1*-0x227f+-0xff+0x1db4*-0x1,_0x273fbd['rUHgk']],[0x3f5*-0x4+0x21a*-0x6+0x2040,'v3'],[-0x1a8b*0x1+-0x7*0x95+0x227a,_0x50f913(0x8d5)],[-0x758*0x2+0x4a*-0x2a+0x1eb4,'u8'],[-0x1*-0x1d70+-0x27a+-0x13*0x137,'u8'],[0x1343+0x25*-0xd+0x8*-0x1b0,'u8'],[-0x50*-0xc+0xdcf+-0xdab,'f32'],[0xe*0xe5+-0x2d6*-0x8+-0x1f4e,_0x50f913(0x8d5)]],'HealthScript':[[0x14e1+0x29*0x22+-0x19fb,'u8'],[-0x1e54+-0xdbc*0x2+-0x745*-0x8,_0x273fbd[_0x50f913(0x861)]],[0x2*-0x17c+0x255c+-0x21e4,_0x50f913(0xd5a)],[-0x1*-0x7e2+-0x1588+0xe2a,_0x273fbd[_0x50f913(0x971)]],[-0xf*-0x90+-0x35*-0x62+-0x1c32,'f32'],[-0x2*0x4d2+0xa58+-0x28,_0x273fbd['rUHgk']],[-0x20df+-0x5e*0x5+0x2345,'f32'],[0x39e+-0x43d+0x133,_0x273fbd[_0x50f913(0x971)]],[-0x11c9+-0x1*0x1df9+0x3062,_0x50f913(0x8d5)],[0x1c51+0x7*0x4d9+-0x2*0x1ece,_0x273fbd[_0x50f913(0x861)]],[-0xaa4+-0x2*0x12e2+0x3110,'u8'],[-0x88+-0x1*-0x22cf+-0x219e,'u8'],[-0x138*-0x14+0xac9*-0x1+-0xced,'u8'],[-0xa97*0x2+-0x1*-0xf29+-0x8*-0xd6,'u8'],[0x2ff*-0x7+0x1af7+-0x53e,_0x50f913(0xb34)],[-0x5*0x2ef+0xd64+0x21b,'obfI'],[-0x1af*0x10+-0x388+0x1f60,_0x273fbd[_0x50f913(0x685)]],[-0x34f*-0x7+-0x1429+-0x204,'obfI'],[0x8*0x4bd+0x4f*-0x31+-0x15b9,_0x50f913(0xb34)],[0x1378*-0x2+0x7*0xa3+0x239f,_0x50f913(0x449)],[0xec3+0x11*-0x24b+0x1968,_0x273fbd[_0x50f913(0x7f4)]],[0x19f9+0x9aa*-0x2+-0x55d,_0x273fbd['rUHgk']],[0x2*-0x97+0x2*-0xa9f+0x17b8,_0x50f913(0xd5a)],[-0x4be*-0x2+-0x1f52*0x1+0x1726,'f32'],[-0x1*-0x177f+-0xce6*-0x3+-0x3cdd,_0x50f913(0xd5a)],[0x210*-0x4+0x1d0b+0x1*-0x136f,_0x273fbd['rUHgk']],[0x2399+-0x4b*-0x2e+-0x1*0x2fb3,'v3'],[-0x2c*0x79+-0x11b+0xef*0x19,_0x273fbd[_0x50f913(0x971)]],[0x1*0x1031+0xf2f+-0x1de8,_0x273fbd['rUHgk']],[-0x1dc2+0x807+0x1*0x173b,'u8'],[0xe84+0xc9d+-0x1995,'u8'],[-0xc2+0x2f7+-0xa5,_0x50f913(0x8d5)]],'PlayerConfig':[],'WeaponManager':[[0x4d5+0x1*-0xfc7+-0x2*-0x585,_0x50f913(0x8d5)],[0x1*0x1f13+0x13a8+-0x1*0x329f,_0x273fbd[_0x50f913(0x861)]],[-0x115*0x18+-0x625*-0x1+0x13f3,'u8'],[0x1e2f+-0x11*0xe5+-0x76b*0x2,_0x273fbd[_0x50f913(0x861)]],[0xa44+-0x1*0x21e5+0x1d9*0xd,_0x50f913(0x50b)],[0x12*-0xc4+0x12b4+-0x47*0x10,_0x50f913(0xd5a)],[0x1db*-0x2+-0x1507*0x1+0x1941,_0x50f913(0x8d5)],[-0x158b*-0x1+0x2*-0x46e+-0xc27,'u8'],[-0x16*-0xdb+0x2b5*0x9+0x35*-0xce,'u8'],[-0x1f85+0x8b6+0x175b,_0x273fbd[_0x50f913(0x861)]],[-0x1*-0x2615+0x6*0x45a+-0x3fa1,_0x273fbd['rUHgk']],[-0x71*0x4b+-0x2634+0x47e7,_0x50f913(0xd5a)],[-0x19*0x9f+-0x24b3+0x34e6,_0x273fbd['vSTMn']],[-0x2643+-0x17b5+0x1f5a*0x2,'u8'],[0x1a7c+-0xc7d+-0x461*0x3,_0x50f913(0xb34)],[-0x8*0x36d+-0x9b3+0x260b,_0x273fbd['fxgzI']],[-0x1910+0x67*-0x60+-0x1*-0x40b4,_0x50f913(0xd5a)],[-0x4*0x986+0xb5c*-0x1+0xc9f*0x4,_0x50f913(0xd5a)],[-0x12c5*0x2+-0x320+0x29b6,'f32'],[-0x4c1+0x629*0x6+0x639*-0x5,_0x273fbd[_0x50f913(0x971)]],[-0x230a+0x1*-0xbc1+0x2feb,_0x50f913(0xd5a)],[-0xd60+0x1*-0x1ec5+0x2d4d*0x1,'u8'],[0x7f*-0x35+-0xd*0x11+0x1c54,_0x50f913(0xb34)],[0x1885+-0x25b*0xd+0x75a,_0x50f913(0xb34)],[0x2142+-0xe53+-0x119b,_0x273fbd[_0x50f913(0x685)]],[-0xe32*-0x2+-0x195d+-0x19f,'obfB'],[0xcfc+-0x930+0x3*-0xc8,_0x50f913(0x449)],[-0xaf7+-0xfb*-0x1+0x54*0x23,_0x273fbd[_0x50f913(0x1f4)]],[-0x7*0x307+0xd6*0x2b+-0xd35,_0x273fbd[_0x50f913(0x1f4)]],[0xa3*-0x2c+0x3*-0xc7+0x1ffd,_0x50f913(0x449)],[0x24ee+0x119b*0x1+0xa3*-0x53,_0x273fbd[_0x50f913(0x685)]],[0x1c13*0x1+0x16f3+-0x313a,'i32'],[0x2*0x82+0x107*0x17+-0x16d5,'u8'],[-0x1*-0x1731+-0x1d78+0x81b,_0x273fbd['vSTMn']],[0x201b+0x1930+-0x343*0x11,_0x273fbd[_0x50f913(0x861)]],[-0x1ffd+-0x209b+0x853*0x8,_0x273fbd['vSTMn']],[0x2328+-0x7*0x513+0x271,'u8'],[0x1ddf+0x5c3*0x3+0x6*-0x782,'u8'],[0xd1*-0x12+0x24b3+0x2*-0x9f2,'u8'],[-0x2335+0x2239+0x31a,'u8'],[0x86+0x1b5a+-0x15b*0x13,'u8'],[0x19c8+-0x5*0x449+-0x20b*0x1,_0x50f913(0x8d5)],[-0x1d1f+0x225f*0x1+-0x2*0x174,'u8']],'GG_GameManager':[[0x6f7*-0x4+-0x23a1+0xd*0x4e5,'u8'],[0x25a0+-0x7a9+-0x1dcb,_0x50f913(0xd5a)],[0x1*0x1dff+-0x1e87+0xcc,'u8'],[-0x1*0xc7d+-0x11b9+0x1b*0x121,'u8'],[0x605+0x1*-0x211f+0x1b62,_0x50f913(0xd5a)],[-0x1d70+0x3af*-0x1+0x216b,_0x273fbd['rUHgk']],[0x1707+-0x122f+0x1*-0x488,'i32'],[0x2d*0xd9+-0x10*-0x13d+-0x39a1,_0x50f913(0x8d5)],[-0x2*-0x12c9+0x1*-0xe0+-0x245a,'u8'],[-0x50c*-0x1+-0x1*-0x18ad+-0x1d45,'u8'],[-0x21d4+0x482*0x8+-0x4*0x71,_0x273fbd[_0x50f913(0x971)]],[0x71*0x2b+-0x23a6+0x1127,'f32'],[0xc20+-0x686*-0x4+-0x4b5*0x8,_0x273fbd['vSTMn']],[-0xbfd+0x2*-0x3d9+0x1443,'u8'],[-0x7*-0x19a+-0xa7*0x16+0x4*0xf6,_0x50f913(0x8d5)],[-0x6cc+0x1e7*0x13+-0x1c9d,_0x273fbd[_0x50f913(0x861)]],[-0xca1*0x1+0x13d*0x14+-0xb63,_0x50f913(0x8d5)],[0x2293+0x23b0+-0x14f*0x35,_0x50f913(0xb34)],[0x15de+-0x8e9*-0x1+-0x1dcb*0x1,_0x273fbd['fxgzI']],[-0x39*-0x6b+0x140*0x2+0xdf*-0x1d,'obfI'],[0x332*0x9+0x142a+0x17e*-0x20,'u8'],[-0xa60+-0x26bc+-0x94*-0x57,_0x50f913(0x8d5)],[0x1223+0x191*-0xc+0x20d,'u8'],[-0x1159*-0x2+-0x2040+0x3*-0x56,'f32'],[0x1*0x39e+-0x12dd*0x2+0x239c,'u8'],[-0xa*0x65+0x1835+-0x12bb,'u8'],[-0xf84+0x1309+-0x1e1,'u8'],[0x109c+0xe87*-0x2+0xe1a,_0x50f913(0x8d5)],[-0x3*-0x1fd+-0x376*0xa+0x1e51,_0x50f913(0xd5a)],[0x2*-0xd69+0x1f6*-0xb+0x3214,'u8'],[-0x681*-0x1+-0x220a+-0x6*-0x4df,'u8'],[0x1e*0x12c+-0x17*-0x55+-0x2913,_0x273fbd['vSTMn']],[-0x240f+-0xc87+0x2*0x1929,_0x273fbd[_0x50f913(0x861)]],[0x9bd*-0x2+-0xb*-0x112+0x974,_0x273fbd['rUHgk']],[0x262c+-0x1278+-0x11f0,_0x50f913(0x8d5)],[-0x2*-0x1205+-0x24e7+-0x2a5*-0x1,'f32'],[-0x1e1a+-0x241*0xb+0x38b1,_0x50f913(0x8d5)],[-0x2501+0x30*0x33+-0x1d41*-0x1,'i32']],'TDM_GameManager':[[-0x1*0xcf0+-0x2ec+0xff4,'u8'],[-0x2197+-0xb*-0x24d+-0x10d*-0x8,'u8'],[-0xd0*0x3+-0x9*-0x269+0x1320*-0x1,'u8'],[-0x1c13+0x1be7+0x50,'f32'],[-0x17e0+0x699+0x119f,'u8'],[0x1*0x1ae3+0x6d0*0x1+-0x3*0xb1d,_0x273fbd[_0x50f913(0x971)]],[0x1998+-0xe9*0x4+-0x1594,'f32'],[-0x17*0x15+-0x190e+0x1*0x1b55,_0x273fbd[_0x50f913(0x861)]],[0x560*-0x3+0x1fc*0x4+0x898,'i32'],[0x1a2a+-0x1*0x1dfc+-0x1*-0x43e,'u8'],[-0x16f4+0x1*-0x491+0x1bf2,'u8'],[0x56*0x43+0xbcb*0x1+0x21dd*-0x1,'f32'],[-0x77*-0x49+0x11c6+-0x3341,_0x273fbd[_0x50f913(0x971)]],[0x105a+0x1017+0x1ff9*-0x1,_0x273fbd[_0x50f913(0x861)]],[-0x35b*-0x2+-0x18c6+-0x4*-0x4a7,'u8'],[-0x1ef1+0x6fd*-0x1+0x267e,_0x50f913(0xb34)],[-0x2f*-0x82+0x1*-0x325+0x2d7*-0x7,_0x273fbd['fxgzI']],[0x99c+-0x11a7*0x2+0x1a9e,_0x273fbd[_0x50f913(0x685)]],[-0x849+0x26db+0x2*-0xec9,'obfI'],[0x1*0x263+-0x2161+0x2012,'u8'],[0xdba+-0x2100*-0x1+-0x2d5e,'u8'],[0x115f+-0x1abe+-0x83*-0x15,_0x50f913(0x8d5)],[0x1ba0*-0x1+0x2*0xb06+0x700,'u8'],[-0x921+-0x1d08+0x5ab*0x7,'u8'],[-0xaf7+0x2666+-0x19e7,_0x273fbd[_0x50f913(0x971)]],[-0x11aa+-0x4d9+0x1*0x180f,_0x50f913(0x8d5)],[-0xe9*-0x25+0x11*-0x1da+-0x1*0xa3,_0x50f913(0x8d5)],[0x1*0x14d3+-0x2*0x132e+0x131d,_0x50f913(0xd5a)],[0x737*-0x1+-0x13*0xf1+0x1ab2*0x1,_0x273fbd['vSTMn']],[0x1*-0x2e1+-0x761*0x4+0x6cd*0x5,_0x50f913(0x8d5)],[-0x155e+0x1c7b+-0x57d,_0x273fbd['rUHgk']],[0x191*-0x18+-0xcbf+-0x76d*-0x7,_0x50f913(0xd5a)],[0x210*0x2+0x29*0x65+-0x12a5,_0x50f913(0x8d5)],[0x2d7*-0x2+0x66e+0xf0,'u8'],[-0x2483*-0x1+0x113b+-0x340d,'u8'],[-0x371*-0x7+-0xf03+-0x75c,_0x50f913(0xd5a)]],'PhotonNetworkSync':[[0x4b0+0x1c1e+-0x209a,'v3'],[0x8b9*-0x4+0x2bc*0x1+0x40d*0x8,_0x273fbd['vSTMn']],[0x199f+-0xd3*0xd+-0x4*0x3a9,'u8'],[-0x26bb+0xa41+0x29d*0xb,'u8'],[-0x1ed4+-0x91+0x99*0x35,'v3'],[-0x2180+-0xc0d+-0x2de1*-0x1,'u8'],[0x164f+-0x19*0xdb+0x1*-0x94,_0x273fbd[_0x50f913(0x861)]],[0x1*0x2686+-0x526*-0x2+-0x1*0x3076,_0x50f913(0x8d5)],[0x1e9+0x523*0x3+-0x6*0x2d3,_0x50f913(0xd5a)],[-0x10f2*0x1+0xb04+-0x2*-0x329,_0x273fbd['rUHgk']],[0x9ed+-0x2013+0xb47*0x2,'f32'],[0x1af8+0x5ce*0x5+-0x3792,'v3'],[0x1667+0x1ea4+-0x2b*0x139,'f32'],[0x18c4+-0xe*0x1a3+0xa*-0x23,'f32'],[0x266+-0x17c5+0x1*0x15df,_0x50f913(0x8d5)],[-0x2528+-0xdb+0x268b,_0x273fbd[_0x50f913(0x971)]]],'MouseLook':[[-0x5*-0x4f3+0x248c+-0x3d37,_0x273fbd[_0x50f913(0x971)]],[0x4*-0x758+0x1ec4+-0x14c,_0x273fbd[_0x50f913(0x971)]],[0x1*-0x1a8c+-0xb3f+-0x1f*-0x139,_0x273fbd['rUHgk']],[0x200d+-0x3d1*-0x9+-0x4246,'f32'],[0x1*0x15b6+0x234a*0x1+-0x38dc,_0x273fbd[_0x50f913(0x971)]],[0x14d5+0x170a+-0x2bb7,_0x273fbd[_0x50f913(0x971)]],[0xa0*-0x27+-0x1*-0x12b0+0x5e0,_0x50f913(0xd5a)],[-0x25*-0xf+-0x165e+-0x1*-0x1467,'u8'],[0x1209*0x1+-0x1412*0x1+0x241,_0x50f913(0xd5a)],[-0x43*-0x8+0x1d*-0xeb+-0x3*-0x841,'f32'],[0x1406+0x1fe5+-0x1139*0x3,_0x50f913(0x8d5)],[-0x2*-0xc29+-0x1*-0x20d3+0x1*-0x38e1,'u8'],[-0x2151*-0x1+-0x1b81+-0x588,'v2']],'NetworkPlayerAnimations':[[-0x39f*-0x2+0xf6e*-0x2+0x1846,'v3'],[0x1b57+-0x2e9+0xbdd*-0x2,'v3'],[0x735+-0x242d+-0x1*-0x1db8,'u8'],[-0x1a5*-0x13+0x35*0x4e+0x207*-0x17,'i32'],[0x4*-0x723+0x3c6+0x198e,_0x273fbd[_0x50f913(0x861)]],[-0xf67+-0xaed*-0x1+0x4b*0x12,_0x273fbd['rUHgk']],[0x1*-0x26bf+0x1aa0+-0x1*-0xcef,'f32'],[-0x270+-0x134c+0x1698,_0x50f913(0xd5a)],[0x3*-0x2b3+0xbb*0x1+0x83e,_0x50f913(0xd5a)],[-0x23*0x11d+0x2e7+-0x4*-0x93e,_0x273fbd[_0x50f913(0x971)]],[0xf76*0x1+-0xd*-0x1d2+-0x2634*0x1,'f32'],[0x1dd5+-0x22d3*0x1+0x2f7*0x2,_0x273fbd['rUHgk']],[-0xef+-0x2*-0xdcb+0x3*-0x891,_0x50f913(0xd5a)],[0xc00+-0x1c6e+0x1166,_0x273fbd['rUHgk']],[0x2*0xbab+-0x152c+0x97*-0x2,_0x273fbd['rUHgk']],[-0x1b80+-0x9*0x3f2+0x4002,_0x50f913(0xd5a)],[0x17c*-0x8+-0x1ac5+0xd*0x30d,_0x273fbd['rUHgk']],[-0xf68+0x39a*0x4+0x208,_0x273fbd[_0x50f913(0x861)]],[0x2db*0x3+0x1*0x5c2+0xb*-0x135,'u8'],[-0x1961+0x11ff+0x872*0x1,_0x50f913(0x8d5)],[0x260b*0x1+-0x1e8e+0x223*-0x3,'i32'],[0x96+0x16*-0x16e+0x1ff6,'u8'],[-0x253d+-0x25*-0x57+-0x1*-0x19c6,'f32'],[0x19f*0x3+0x16a*-0x1+0x253*-0x1,'f32'],[-0x25e8+-0x15*-0xc1+0x1737,'f32'],[-0x12*0x137+0x1*-0xac+0x3*0x7e6,'f32'],[-0x21a2+-0x49*-0x12+-0x1a6*-0x12,'u8'],[0x76e+-0x2417*-0x1+-0x2a4d,'u8'],[0x2654*0x1+0x8*-0x33a+-0x4c*0x26,'v3'],[0x419+-0x1aca+-0x11*-0x169,'v3'],[0x2140+-0x1df4+-0x6e*0x4,'u8']],'NPC_Cotroller':[[-0x35b+-0x12b*-0x21+0xd6*-0x2a,'v3'],[-0x1ad1+0x13*0x24+-0x817*-0x3,_0x50f913(0xd5a)],[0x1233*-0x2+0x109c*0x2+0x55*0xa,_0x50f913(0xd5a)],[-0x1a71+-0x3c1*-0x3+0xf84,'u8'],[-0x2*0xbe1+-0x13e+0x1957,'u8'],[0x1cc6+-0x1*0xb7d+-0x10ed,'v3'],[-0x1833+0x1*-0x202d+0x38fc,'u8'],[0x1532+0x4d1*-0x7+-0x1*-0xd25,'f32'],[-0x1b9f+0x2df+0x1964,_0x273fbd['rUHgk']],[0x1*-0x25be+-0x1*-0x1e58+-0x1*-0x81e,'f32'],[-0x19f7*0x1+-0x6*0x313+0x673*0x7,_0x50f913(0xd5a)],[0x24e8+0xbdd+-0x2ffd,'u8'],[-0x25*0x52+-0x126*0xc+0x2*0xd37,_0x50f913(0xd5a)],[-0x196e+-0x29a+0xe7*0x20,_0x273fbd[_0x50f913(0x971)]],[-0xceb*-0x3+0x5*0x3f1+-0x399a,_0x50f913(0xd5a)],[-0x1635+0x58*0x2e+0x745,_0x273fbd[_0x50f913(0x971)]],[0xed8+-0x1367*-0x2+-0x34c2,'u8'],[-0xc10+-0x23*0x71+0x1c6f,'f32'],[-0x68e*-0x3+-0xc*-0x80+-0x18ba,'v3'],[0x3*-0x493+-0x3*-0x9d+0x1*0xcde,_0x50f913(0xd5a)],[0x12c+0x1d00+-0x1d2c,_0x273fbd[_0x50f913(0x861)]],[0x7*0x2a1+0x1*-0x5bc+-0xba7,_0x50f913(0xd5a)],[0x157d+0x108b+0x1*-0x2500,'f32'],[0x911+-0x24fe*0x1+0x1cf9,_0x50f913(0xd5a)],[0x4*-0x1bb+-0x2151+0x2951,'v3'],[0x2f7*-0x9+-0x1807*-0x1+-0x3c8*-0x1,_0x50f913(0xd5a)],[0x27a*-0x1+0x22af+-0x3*0xa5b,_0x50f913(0xd5a)],[-0x2183+-0x1fc9+-0x80*-0x85,'v3'],[-0xc45+0xe5c+-0xd3,'u8'],[-0x2*-0x4e1+-0x13ee+-0x2dd*-0x4,'f32'],[-0xbcc+0x1347+-0x1*0x62b,'v3'],[-0x3e4+0x1fc6+-0x1a82,_0x273fbd[_0x50f913(0x861)]],[0x892*-0x1+0x1119+-0x71b,'i32'],[0xdc7*0x2+0x2170+0x12*-0x34f,_0x50f913(0xd5a)],[0x12a9+-0x6e3*0x3+0x374,'u8'],[-0x5*0x1a6+-0x18*-0x73+0x1*-0x112,'v4'],[0x1*0x21e6+0x3*-0xa5a+-0x4*0x54,_0x50f913(0xd5a)],[-0xb1d+0x181+-0x77*-0x18,_0x50f913(0xd5a)],[-0x15c+-0x12e9*0x2+-0x2e9*-0xe,_0x273fbd[_0x50f913(0x971)]],[-0xdd0+0x58*0x4b+0xa60*-0x1,'u8'],[-0x1456+-0xb72*-0x2+-0xee,_0x273fbd['vSTMn']]],'TargetHealth':[[-0xc81+0x157d*-0x1+0x220e,_0x50f913(0x8d5)],[0x1*0x17f+0x4dd*-0x1+0x372,_0x50f913(0x8d5)],[0x2bf+-0x199*0xd+0x91d*0x2,'u8'],[-0x1b80+0x1*-0x1715+0x10f3*0x3,'i32'],[-0x5*0x23b+-0x19c4+0x1*0x2533,_0x273fbd[_0x50f913(0x861)]],[-0x653+-0x788*0x3+0x1*0x1d37,_0x50f913(0x8d5)],[0x655+-0x1*-0x8cb+0x3*-0x4f0,_0x50f913(0x8d5)],[-0x35*0x56+0x254a+-0x2*0x97c,_0x50f913(0xd5a)],[0x1*0x1543+0x1*-0xbd7+-0x8e0,'f32'],[0x141d+-0xa6*0x8+-0xe5d*0x1,'u8'],[0x13a4*-0x1+0x1a6*0x3+0xf46,_0x273fbd[_0x50f913(0x971)]],[-0xb5*0x1b+0x3*-0xccc+0x3a1f,'u8'],[-0x3e8+0x1431+-0x1*0xfa1,_0x50f913(0x8d5)],[0x17c5+0x2e*-0xc0+-0x3*-0x3cd,'i32'],[-0x301*0xb+-0xc1f*-0x1+-0x49*-0x4c,'f32'],[0x1cef+-0xe*-0x81+-0x2331,'u8']],'SectatorCamera':[[0x1*-0x5+0x1d5c*-0x1+0x1d75,'f32'],[-0x1*-0x1939+-0x21*-0x61+-0x25a2,_0x50f913(0xd5a)],[0x54*-0x6d+-0x1*0x19d9+0x3db9,_0x50f913(0xd5a)],[-0x2*-0x5e9+-0x237+0x1*-0x97b,'v3'],[0x2031+0x13c3+-0x33c8,'v3'],[0x1e36+-0xc50+-0x119e,'i32'],[-0x6da+0xa9e+-0x378,_0x50f913(0x8d5)],[-0x3*-0xc41+-0x128*0x9+-0x1a0b,'f32'],[-0x4*0x92c+-0x859*0x3+0x1*0x3e0f,_0x50f913(0x8d5)],[0x1acd+0xca8+-0x271d,_0x50f913(0xd5a)],[-0x1*-0x21b2+-0x1*-0x1608+-0x375e,'u8'],[0x446*0x8+0x5a*0x3b+-0x368e,'v3'],[-0x1f6*0xf+-0x1b20+-0x1c7b*-0x2,'v4'],[-0x203*0x2+0x3*0x5ea+-0xd3c*0x1,'u8'],[0x4a9*-0x8+-0x1a0c*0x1+-0x56*-0xbe,_0x273fbd[_0x50f913(0x861)]]],'UISettings':[[0x1fbd+-0x9ed*0x1+-0x15b0,_0x273fbd['vSTMn']],[0x1*0x20ed+0x22*-0x101+-0x15d*-0x1,_0x50f913(0xd5a)],[-0x2*-0x6a1+0x992+-0x114*0x14,'u8'],[0x5cb+-0xa*0x393+-0xc3*-0x29,_0x273fbd['vSTMn']],[-0x1*0x26cf+0x1c1*-0xb+-0x2*-0x1db7,_0x50f913(0x8d5)],[0xf25*0x1+-0x39+0x4f*-0x2c,'i32'],[-0x71e*-0x4+-0x1*-0x2ba+-0x4f9*0x6,'u8'],[-0x1*-0x1405+-0x74+-0x1234,'u8'],[0xd18+0x11c7+-0x1d81,'u8'],[-0x106+-0x1481+0x16e6*0x1,'u8'],[-0xe*0x1cf+-0x36*0xb6+0x4116,'u8'],[-0x1717+0x3*0x22e+0xaa*0x1b,'u8'],[0x2626+0x1*-0x5db+0x1*-0x1ee9,'u8'],[0x64c+0x1*-0xda3+0x913,_0x50f913(0xd5a)],[-0x10e6+-0x18ae+0x2b58,_0x273fbd[_0x50f913(0x971)]],[-0x1c8d+-0x1e7*0xd+-0x10*-0x376,'u8'],[0x1a41+0x22df+-0x3aa0,'f32'],[0x466*-0x4+-0x1069*-0x1+0x3cf,_0x50f913(0x8d5)],[-0xb*-0x1b5+-0x251e+0x154f,'u8'],[0x2*0xc04+0x1*-0x1f57+0xaeb,'u8'],[-0x264a+0xfb*-0x21+0x4a45,'v2'],[-0x255b*-0x1+0x2020+-0x41d3*0x1,'v2'],[-0x19d+-0x2e6*-0x8+-0x11e3,'u8'],[0x202c+-0x2*0xcc4+-0x2ec,'u8'],[-0x1b9c*-0x1+0x2593+-0x3d63,_0x273fbd[_0x50f913(0x971)]],[0xf81*-0x1+0xca8+0x6a9,'v3'],[0x173a+0x11bb*-0x2+0x101c,'f32'],[0x9df+0x1*-0xb99+0x59e,_0x273fbd[_0x50f913(0x971)]],[0x1154+0x163c*-0x1+0x8*0x11a,_0x50f913(0xd5a)],[-0x111*-0x1d+-0x1b1a+0x1*0x1d,'u8'],[-0x79*0x2b+0xeb7+0x98d,'u8'],[-0xe5+-0x257d+0x2a56,_0x273fbd[_0x50f913(0x861)]],[-0x5*-0x17f+0x1d63*0x1+-0x20de,_0x50f913(0x8d5)],[-0x3*-0x35+0x3*0x503+-0x2e9*0x4,'i32'],[-0x1dc2+-0xe4c+0x180b*0x2,_0x50f913(0x8d5)],[-0x14b8+-0x2*0x4cb+0x225a,'i32'],[-0x3bf+-0x2d*-0x59+-0x1*0x7d6,_0x273fbd[_0x50f913(0x861)]],[0x21d4+0x5*0x61a+-0x6b2*0x9,_0x50f913(0x8d5)],[0x1005*-0x2+0x24ea+0xa*-0x14,_0x273fbd[_0x50f913(0x861)]],[-0x2250+0x565*-0x1+-0x1*-0x2bd1,_0x50f913(0x8d5)],[0x2b*0x9f+0xaea+0x157*-0x19,_0x50f913(0x8d5)],[-0x147*0x13+-0xf2e+0x2bc7*0x1,'u8'],[-0x263a+-0x1647+0x40d6,'u8'],[0x1b25+0x14c0+-0x2b8f,'u8'],[-0x1b4c+0xfbf*0x2+0x25,'u8'],[-0x854*-0x1+0x3b*0x19+-0x98b*0x1,'f32']]},_0x5c2d69={},_0x17f483={};function _0x45aaea(_0x5ba2f0,_0x2e6465,_0x2eaeee){var _0x1db4a0=_0x50f913,_0x46e8c4={'AWSCw':_0x273fbd['jhwlP'],'rmoMt':function(_0x3b7f8f,_0xed18dc){return _0x3b7f8f===_0xed18dc;},'jrujo':function(_0x3d795f,_0x2005b7,_0x59e9ff){return _0x3d795f(_0x2005b7,_0x59e9ff);}};if('FOgvy'!==_0x1db4a0(0x963))return function(_0x193f19){var _0x38824b=_0x1db4a0,_0x39a2f5={'dbFdw':'funct'+_0x38824b(0x6b5),'kzfhE':function(_0x29c231,_0x4b0cf4){return _0x29c231===_0x4b0cf4;}};try{var _0xca78e1=_0x193f19&&_0x193f19[_0x38824b(0xb5f)]?_0x193f19[_0x38824b(0xb5f)]():-0x134d+-0x1d6a+0x103d*0x3;if(!_0xca78e1)return;var _0x2e8efc=_0x17f483[_0x5ba2f0]||(_0x17f483[_0x5ba2f0]={}),_0x3a2d77=_0x2e8efc[_0xca78e1];if(!_0x3a2d77)_0x3a2d77=_0x2e8efc[_0xca78e1]={'ptr':_0xca78e1,'firstSeen':Date['now'](),'hits':0x0};_0x3a2d77[_0x38824b(0x740)]++;if(_0x2eaeee){if(!_0x5c2d69[_0xca78e1])_0x5c2d69[_0xca78e1]={'ptr':_0xca78e1,'kind':_0x5ba2f0,'firstSeen':Date['now'](),'hits':0x0};_0x5c2d69[_0xca78e1][_0x38824b(0x740)]++;}else{if(_0x273fbd[_0x38824b(0x650)]===_0x273fbd['AEoXB']){_0x54c556['last']=_0x10df40['val'](),_0x14288a[_0x38824b(0x740)]++;if(_0x566273[-0x1014+0x683*0x4+-0x9f7]&&typeof _0x5a518c[-0x26e9+-0x64+-0x45e*-0x9]['val']===_0x39a2f5['dbFdw']){var _0x1a29df=_0x3dbd24[-0x267a+0xd7f+0x18fc]['val']();if(_0x1a29df)_0x3fa093=_0x1a29df;}}else{var _0x487049=_0x5dca57[_0x5ba2f0];if(!_0x487049||_0x487049['ptr']!==_0xca78e1){_0x5dca57[_0x5ba2f0]={'ptr':_0xca78e1,'firstSeen':Date['now'](),'hits':0x0,'replaced':!!_0x487049};try{var _0x2013c5=_0x3037d0[_0x38824b(0x8e3)+'r'](function(_0x46b205){var _0x20bc1c=_0x38824b,_0x14b9d7={'kJwuz':function(_0x15f709,_0x2e338c){return _0x15f709(_0x2e338c);}};if(_0x20bc1c(0xa7e)===_0x46e8c4[_0x20bc1c(0xc94)])return _0x46e8c4[_0x20bc1c(0x58e)](_0x46b205['type'],_0x5ba2f0);else try{return _0x5c6c73();}catch(_0x4ba2ad){return{'err':_0x14b9d7['kJwuz'](_0x42b881,_0x4ba2ad&&_0x4ba2ad['messa'+'ge']),'stack':_0x591f3d(_0x4ba2ad&&_0x4ba2ad[_0x20bc1c(0x21d)])};}})[0x1b1c+0x7*-0x232+-0xbbe];_0x4c4c9f={'type':_0x5ba2f0,'atMs':Date[_0x38824b(0xb69)]()-_0x3cf448,'originalFunc':!!(_0x2013c5&&_0x2013c5[_0x38824b(0x7ba)]&&typeof _0x2013c5['hook']['origi'+_0x38824b(0x9bf)+'nc']==='funct'+'ion'),'resolveGameAtFire':!!_0x273fbd['qRZTR'](_0x59baa0),'gameSourceAtFire':_0x5c52ee[_0x38824b(0x704)+'e']};}catch(_0x4c3556){}}}}if(_0x5ba2f0===_0x273fbd[_0x38824b(0x2b0)]&&_0x1ccb3a['on'])try{_0x439cb2(_0xca78e1);}catch(_0x51716b){}if(!_0x2e6465){var _0x2013c5=_0x3037d0[_0x38824b(0x8e3)+'r'](function(_0x5d7e87){var _0x5b4a5e=_0x38824b;return _0x39a2f5[_0x5b4a5e(0x2a7)](_0x5d7e87['type'],_0x5ba2f0);})[0x6a*-0x41+0x30d*-0x3+0x2411];if(_0x2013c5&&_0x2013c5[_0x38824b(0x7ba)])try{_0x2013c5[_0x38824b(0x7ba)][_0x38824b(0xcfd)+'ed']=![];}catch(_0x37a254){}}}catch(_0x194fe8){}};else{_0x3702b4[_0x1db4a0(0x959)+_0x1db4a0(0x285)+_0x1db4a0(0xb52)](),_0x46e8c4[_0x1db4a0(0xa20)](_0x583367,_0x587607['on'],_0x478c1f[_0x1db4a0(0x666)+'r']+(0xb00+0x2*0x1df+-0xebe+0.5));return;}}function _0x249882(){var _0x568771=_0x50f913;if(_0x3037d0['lengt'+'h'])return!![];if(!window['Unity'+'WebMo'+_0x568771(0x7a1)]||!window['Unity'+'WebMo'+_0x568771(0x7a1)][_0x568771(0x236)+'me'])return![];var _0xfab455=window[_0x568771(0x480)+_0x568771(0x396)+_0x568771(0x7a1)]['Runti'+'me'];if(!_0xfab455[_0x568771(0x9c1)+'ns']||!_0xfab455[_0x568771(0x9c1)+'ns'][_0x568771(0x4f2)+'h'])return![];_0x6f2a9d=window[_0x568771(0x480)+'WebMo'+_0x568771(0x7a1)]['Value'+_0x568771(0x2e3)+'er'],_0x32a1f1=_0x32a1f1||_0xfab455['plugi'+'ns'][_0xfab455['plugi'+'ns']['lengt'+'h']-(0xb5b+-0x16d8+-0xb7e*-0x1)];if(!_0x32a1f1||typeof _0x32a1f1[_0x568771(0xc2a)+_0x568771(0x9b3)]!==_0x568771(0x48f)+_0x568771(0x6b5))return![];for(var _0x4feea4=-0x9d4+0x15bf+-0x3*0x3f9;_0x4feea4<_0x5a75dc['lengt'+'h'];_0x4feea4++){if('ecGEj'!=='ecGEj'){var _0x1dd003='';for(var _0x4dcbe9=-0x8e1+-0x4*-0x8ba+-0x1a07*0x1;_0x273fbd[_0x568771(0xcca)](_0x4dcbe9,arguments[_0x568771(0x4f2)+'h']);_0x4dcbe9++){var _0x524777=arguments[_0x4dcbe9];if(typeof _0x524777===_0x568771(0xc4d)+'g')_0x1dd003+=_0x524777;else{if(_0x524777&&_0x524777['messa'+'ge'])_0x1dd003+=_0x524777[_0x568771(0xb7a)+'ge'];}}if(_0x273fbd['noDhB'](_0x1dd003['index'+'Of'](_0x24815b),-(0x1*0x1e17+-0x2*0xeb7+-0xa8)))return _0x1a2c9c[_0x568771(0x3b1)](_0x297917,arguments);if(_0x273fbd[_0x568771(0x6cc)](_0x1dd003[_0x568771(0x860)+'Of'](_0x568771(0x480)+_0x568771(0x396)+_0x568771(0x7a1)),-(-0xa81+0x2*-0x562+0x1546))){var _0x349709=_0x1dd003[_0x568771(0xc72)](-0x1276+-0x180c+0x2*0x1541,0x1904+-0x115d+-0x67b);if(_0x14029a[_0x568771(0x860)+'Of'](_0x349709)===-(0x1*0x14cb+-0x8*-0x9+-0x1512)&&_0x273fbd['jRTVQ'](_0x7be59e['lengt'+'h'],-0x27*0xf5+0x2542+-0xb*-0x7))_0x52a601[_0x568771(0x356)](_0x349709);}}else{var _0x4da2ee=_0x5a75dc[_0x4feea4];try{var _0x6f9f35=_0x32a1f1[_0x568771(0xc2a)+_0x568771(0x9b3)]({'typeName':_0x4da2ee[_0x568771(0x288)],'methodName':'Updat'+'e','params':[_0x273fbd['vSTMn'],_0x273fbd[_0x568771(0x861)]],'returnType':undefined},_0x45aaea(_0x4da2ee['type'],_0x4da2ee['keep'],_0x4da2ee['many']));_0x3037d0['push']({'type':_0x4da2ee[_0x568771(0x288)],'hook':_0x6f9f35,'keep':_0x4da2ee['keep']});}catch(_0x333b30){_0x48b1df[_0x568771(0x356)](_0x4da2ee[_0x568771(0x288)]+':\x20'+String(_0x333b30&&_0x333b30[_0x568771(0xb7a)+'ge']||_0x333b30)[_0x568771(0xc72)](-0x1c75+0x1*0x9ef+0x1286,-0x1e00+0x1c3a+0x266));}}}return _0x273fbd[_0x568771(0x864)](_0x3037d0[_0x568771(0x4f2)+'h'],-0x2252+0x62e+0x1c24);}function _0x49732e(_0x3fc889,_0x3b0dce){var _0x28aa5d=_0x50f913,_0x2f18af={'Exmhk':_0x28aa5d(0xb60)+'ngs','xOkXK':'\x20\x20!\x20','Iycwe':_0x273fbd[_0x28aa5d(0x312)],'deygC':function(_0x65f3e8,_0x23e68a){return _0x65f3e8===_0x23e68a;},'WKcOR':_0x28aa5d(0x751),'VqfXE':_0x273fbd[_0x28aa5d(0x652)],'dqeXa':_0x28aa5d(0x2e9),'xkmXr':function(_0x232efd,_0x58563a){return _0x232efd===_0x58563a;},'wAxJr':function(_0x2789f8,_0x455781){return _0x2789f8!==_0x455781;},'NjgmG':'pOaRt'};if(_0x273fbd[_0x28aa5d(0x327)](_0x273fbd['VOLJK'],_0x28aa5d(0x330))){_0x5365fb[_0x28aa5d(0x356)](_0x2f18af[_0x28aa5d(0x966)]);for(var _0x4b1e48=-0x3*0x6ce+-0x815*0x1+0x1c7f;_0x4b1e48<_0xf215e3[_0x28aa5d(0xb60)+_0x28aa5d(0x58c)]['lengt'+'h'];_0x4b1e48++)_0x25192c[_0x28aa5d(0x356)](_0x2f18af[_0x28aa5d(0x4eb)]+_0x9eaf9c[_0x28aa5d(0xb60)+'ngs'][_0x4b1e48]);}else return function(){var _0x252f92=_0x28aa5d,_0x4be140={'RlmVS':'%c[sa'+_0x252f92(0xc95)+'\x20pane'+_0x252f92(0x71e)+_0x252f92(0x1dc)};try{if(_0x2f18af[_0x252f92(0xd13)]!==_0x2f18af[_0x252f92(0xd13)])return _0x20a2bf['datas'+'et'][_0x252f92(0x282)]='1',_0x4c7d80['api']=_0x4417ff,_0x5537db['warn'](_0x4be140['RlmVS'],'color'+':'+_0x4c16bf,_0x212d63),_0x3b44cc;else{var _0x63962e=_0x17f1c0[_0x3b0dce]||(_0x17f1c0[_0x3b0dce]={'last':null,'hits':0x0,'setLast':null,'setHits':0x0,'setB':null,'pairHits':0x0}),_0x42e1a6=arguments;if(_0x2f18af[_0x252f92(0x28b)](_0x3fc889,_0x2f18af[_0x252f92(0x605)])){var _0x162cfc=_0x42e1a6[-0x175*0x16+-0x2051*-0x1+-0x1*0x43];if(_0x162cfc&&typeof _0x162cfc['val']===_0x252f92(0x48f)+'ion'){_0x63962e['last']=_0x162cfc['val'](),_0x63962e[_0x252f92(0x740)]++;if(_0x42e1a6[0x388*-0xb+-0x1a68+0x4141]&&_0x2f18af[_0x252f92(0x28b)](typeof _0x42e1a6[-0x285*0x7+-0x242+-0x6*-0x351]['val'],_0x2f18af['VqfXE'])){var _0x5f47a7=_0x42e1a6[-0xf2*0x15+-0xcfc+-0x4b1*-0x7][_0x252f92(0xb5f)]();if(_0x5f47a7)_0x3c308b=_0x5f47a7;}}}else{if(_0x42e1a6[0xaca+0x1*-0x243+0x2*-0x443]&&_0x2f18af[_0x252f92(0x28b)](typeof _0x42e1a6[-0x12ea+0x50*0x28+0x66b][_0x252f92(0xb5f)],_0x2f18af[_0x252f92(0xa5b)])){if('orMKp'===_0x2f18af['dqeXa'])return _0x50b0e1[_0x252f92(0x666)+'r'];else _0x63962e['setLa'+'st']=_0x42e1a6[-0x5*-0x1cf+0x1*-0x22d9+-0x19cf*-0x1][_0x252f92(0xb5f)](),_0x63962e[_0x252f92(0x855)+'ts']++;}if(_0x42e1a6[-0x18f5*-0x1+0x16b9+-0x2fac]&&_0x2f18af['xkmXr'](typeof _0x42e1a6[0x1*-0xa7b+-0xaa3*-0x1+0x1*-0x26]['val'],_0x2f18af[_0x252f92(0xa5b)])){if(_0x2f18af[_0x252f92(0xabe)](_0x2f18af['NjgmG'],_0x252f92(0xc17)))_0x63962e[_0x252f92(0x8fb)]=_0x42e1a6[0x88d+-0xb05+0x27a][_0x252f92(0xb5f)](),_0x63962e[_0x252f92(0xbae)+_0x252f92(0x447)]++;else try{_0x1363a2['setIt'+'em'](_0x42cb6c,_0x11ea60(_0x265492['fov']));}catch(_0x1108da){}}if(_0x42e1a6[-0x1*0x1d6e+-0x1a3a+0x37a8]&&typeof _0x42e1a6[0x11a6+0x9*-0x3e5+0x1167]['val']===_0x2f18af[_0x252f92(0xa5b)]){var _0x322d51=_0x42e1a6[-0x733*-0x2+-0xa7b*0x1+-0x11*0x3b][_0x252f92(0xb5f)]();if(_0x322d51)_0x3c308b=_0x322d51;}}}}catch(_0x14cfe3){}};}function _0x55c037(){var _0x3bd3d6=_0x50f913;if(_0x568305)return!![];if(!_0x32a1f1||typeof _0x32a1f1['hookP'+_0x3bd3d6(0xc36)+'x']!==_0x3bd3d6(0x48f)+'ion')return![];var _0x965b78=_0x357056[_0x3bd3d6(0x2c3)+'Look']||[];for(var _0x336d5d=0xf5b+-0x25fd+0xb51*0x2;_0x336d5d<_0x965b78['lengt'+'h'];_0x336d5d++){var _0x5134b8=_0x965b78[_0x336d5d];try{if(_0x5134b8['ret']===_0x273fbd[_0x3bd3d6(0xca7)])_0x32a1f1[_0x3bd3d6(0xc2a)+'ostfi'+'x']({'typeName':'Mouse'+_0x3bd3d6(0x33b),'methodName':_0x5134b8['name'],'params':_0x5134b8[_0x3bd3d6(0x595)+_0x3bd3d6(0x930)],'returnType':_0x5134b8[_0x3bd3d6(0xb8e)+'et']},_0x49732e(_0x3bd3d6(0x751),_0x5134b8[_0x3bd3d6(0xa29)]));else _0x273fbd['jTASe'](_0x5134b8['ret'],_0x273fbd['zklTf'])&&_0x5134b8[_0x3bd3d6(0x79d)+'s']['lengt'+'h']===0xc83*0x1+-0x1c5*-0x6+-0x1720&&_0x5134b8['param'+'s'][0x1279+-0x322+0x165*-0xb]===_0x273fbd[_0x3bd3d6(0xca7)]&&_0x32a1f1[_0x3bd3d6(0xc2a)+_0x3bd3d6(0x9b3)]({'typeName':_0x3bd3d6(0x2c3)+'Look','methodName':_0x5134b8[_0x3bd3d6(0xa29)],'params':_0x5134b8['wasmP'+'arams'],'returnType':undefined},_0x49732e('set',_0x5134b8[_0x3bd3d6(0xa29)]));}catch(_0x38aef8){_0x4d3c4c[_0x3bd3d6(0x356)](String(_0x38aef8&&_0x38aef8[_0x3bd3d6(0xb7a)+'ge']||_0x38aef8)[_0x3bd3d6(0xc72)](0x1c13+-0x7*-0x145+-0x24f6,0x1672+0x1c*-0x98+-0x55a));}}return _0x568305=!![],!![];}function _0x215def(){var _0xaf0a9c=_0x50f913,_0x2b51d7={'iWhiY':_0x273fbd[_0xaf0a9c(0x598)],'DCeaY':_0xaf0a9c(0x18a)+_0xaf0a9c(0x5ec),'lLdxx':_0xaf0a9c(0x1dd)+_0xaf0a9c(0xd53)+_0xaf0a9c(0xa9d)+_0xaf0a9c(0xcaf)+'\x27>'};if(_0x273fbd[_0xaf0a9c(0x8eb)](_0x273fbd['WfMEH'],'THfeE'))_0x31bb5e=_0x534bf3,_0x3b6eb3=_0x37c795[_0xaf0a9c(0x740)];else{var _0x2f8787=0x2df*-0xa+-0xd8*0x11+0x2b0e,_0xfe7978=0x2*-0x3b4+0x0+0x768,_0x10c25d=-0x2*-0x10d+-0x1*-0x23f3+0x1*-0x260d,_0x8f24f2=-0x1ba5+-0x5*0x2b+0x1*0x1c7c,_0x5c8378=-0x5b*0x4+-0x26a7+0x2813;try{if(_0xaf0a9c(0xc0a)!=='DlMvc'){var _0xa0d1b=window[_0xaf0a9c(0x480)+_0xaf0a9c(0x396)+'dkit']&&window['Unity'+'WebMo'+'dkit'][_0xaf0a9c(0x236)+'me'],_0x32ba59=_0x32a1f1||_0xa0d1b&&_0xa0d1b[_0xaf0a9c(0x9c1)+'ns']&&_0xa0d1b[_0xaf0a9c(0x9c1)+'ns'][_0xa0d1b[_0xaf0a9c(0x9c1)+'ns'][_0xaf0a9c(0x4f2)+'h']-(-0x29*0x67+0x1f09+-0x1*0xe89)];if(_0x32ba59&&_0x32ba59['hooks']){if(_0x273fbd[_0xaf0a9c(0x7b9)](_0xaf0a9c(0x56b),_0xaf0a9c(0x544)))for(var _0xdf1459=-0x5*0x46f+0x21a1+-0xb76;_0xdf1459<_0x32ba59['hooks']['lengt'+'h'];_0xdf1459++){if(_0x273fbd[_0xaf0a9c(0x7a0)](_0xaf0a9c(0x72e),_0x273fbd[_0xaf0a9c(0x6aa)])){var _0x1ad187=_0x32ba59['hooks'][_0xdf1459];if(!_0x1ad187||_0x1ad187['typeN'+_0xaf0a9c(0x784)]!==_0x273fbd['nPGJy'])continue;_0x2f8787++;if(_0x273fbd[_0xaf0a9c(0x6cc)](_0x1ad187[_0xaf0a9c(0x7aa)+_0xaf0a9c(0x346)],undefined))_0xfe7978++;if(_0x1ad187[_0xaf0a9c(0xbe9)+'ed'])_0x10c25d++;}else{var _0x401880=_0x571486(_0x2b51d7['iWhiY'],_0xaf0a9c(0x416)+'l'),_0x1c5485=_0x53923e(_0x2b51d7['iWhiY'],_0x2b51d7[_0xaf0a9c(0x52e)],_0x40fe1c+(_0x4985f5?_0x2b51d7[_0xaf0a9c(0x515)]+_0x4db62a+(_0xaf0a9c(0x3be)+'n>'):''));return _0x401880['appen'+'dChil'+'d'](_0x1c5485),_0x401880;}}else _0x40efcb[_0xaf0a9c(0xc2a)+_0xaf0a9c(0xc36)+'x']({'typeName':_0xaf0a9c(0x2c3)+'Look','methodName':_0x1d29ae[_0xaf0a9c(0xa29)],'params':_0x5b63cd[_0xaf0a9c(0x595)+'arams'],'returnType':_0x218faf['wasmR'+'et']},_0x19dd64('get',_0x581c5d['name']));}}else{if(_0x33df2b[_0xaf0a9c(0x5f3)+'t']&&_0x5ea2fc[_0xaf0a9c(0x5f3)+'t']!==_0x50ed0d)_0x137ffb[_0xaf0a9c(0x5f3)+'t'][_0xaf0a9c(0x95e)+'essag'+'e'](_0x3a6082,'*');}}catch(_0x980d58){}for(var _0x20d1d8 in _0x17f1c0){var _0x184fd5=_0x17f1c0[_0x20d1d8];_0x8f24f2+=_0x184fd5['hits']||0x2075+0xd00+-0x2d75,_0x5c8378+=(_0x184fd5['setHi'+'ts']||-0x1*0x51b+-0x10bc+0x15d7)+(_0x184fd5[_0xaf0a9c(0xbae)+'its']||0x7bb*0x5+-0xe2f*0x2+0xa49*-0x1);}return{'registered':_0x568305,'total':_0x2f8787,'resolved':_0xfe7978,'applied':_0x10c25d,'getterHits':_0x8f24f2,'setterHits':_0x5c8378,'distinct':Object[_0xaf0a9c(0x5f2)](_0x17f1c0)['lengt'+'h'],'errorCount':_0x4d3c4c[_0xaf0a9c(0x4f2)+'h'],'errors':_0x4d3c4c['slice'](0x2*-0xa1b+-0x93*-0x33+-0x913,0x886*-0x2+0x9f7+0x719)};}}function _0x3a80c5(){var _0x24acab=_0x50f913,_0x5062bb={'hPmme':function(_0x4bdf64,_0x85d88d){return _0x273fbd['BbbVv'](_0x4bdf64,_0x85d88d);}};if(_0x24acab(0x98a)!==_0x24acab(0x98a))_0x409904[_0x24acab(0x4d6)]=_0x273fbd['NVOmI']('Playe'+'rs\x20ar'+'e\x20pre'+_0x24acab(0x603)+_0x24acab(0x47d)+_0x24acab(0xd7d)+_0x24acab(0xbad)+_0x24acab(0x4dc)+_0x24acab(0x439)+'s\x20ene'+'mies\x20'+'yet\x20-'+'\x20chec'+'k\x20','isLoc'+_0x24acab(0x290)+_0x24acab(0x641)+'\x20entr'+'y\x20in\x20'+_0x24acab(0xd35)+'ers`.');else{var _0x130c15=null,_0x4e2889=-0x1*-0x18d9+-0x1*0x253f+0x8a*0x17;for(var _0x47790b in _0x17f1c0){var _0x3f4b71=_0x17f1c0[_0x47790b];_0x3f4b71[_0x24acab(0xbae)+_0x24acab(0x447)]&&_0x273fbd[_0x24acab(0x2ad)](_0x3f4b71[_0x24acab(0xbae)+'its'],_0x4e2889)&&_0x273fbd[_0x24acab(0xb67)](typeof _0x3f4b71[_0x24acab(0x970)+'st'],'numbe'+'r')&&typeof _0x3f4b71['setB']===_0x273fbd['MbpKG']&&_0x273fbd[_0x24acab(0xa7a)](isFinite,_0x3f4b71[_0x24acab(0x970)+'st'])&&isFinite(_0x3f4b71[_0x24acab(0x8fb)])&&(_0x273fbd['rYMbL'](_0x24acab(0xbed),_0x273fbd[_0x24acab(0x188)])?_0x5d9ab0['syncs'][_0x5ec1e5]():(_0x130c15={'rawA':_0x3f4b71['setLa'+'st'],'rawB':_0x3f4b71['setB'],'hits':_0x3f4b71[_0x24acab(0xbae)+'its'],'name':_0x47790b},_0x4e2889=_0x3f4b71[_0x24acab(0xbae)+'its']));}if(!_0x130c15)return null;var _0x545a08=_0x273fbd[_0x24acab(0x5b9)](_0x130c15['rawA'],-(-0x137*-0x1+-0x1175+-0x426*-0x4))&&_0x273fbd['opXaj'](_0x130c15[_0x24acab(0xaee)],-0xef*0x17+-0x1*0xf9+0x16cc),_0x1a2e6e=_0x130c15[_0x24acab(0x806)]>=-(-0x41b*0x7+0x25+0x1cf2)&&_0x273fbd['GiMVM'](_0x130c15['rawB'],0xfb6+0xa2d+-0x1989);if(_0x545a08!==_0x1a2e6e)_0x130c15['pitch']=_0x545a08?_0x130c15[_0x24acab(0xaee)]:_0x130c15[_0x24acab(0x806)],_0x130c15[_0x24acab(0x6fb)]=_0x545a08?_0x130c15['rawB']:_0x130c15[_0x24acab(0xaee)],_0x130c15['order']=_0x545a08?_0x24acab(0xc40):_0x273fbd['Dcslf'];else{if(_0x273fbd['PrUqj']===_0x24acab(0x5be)){var _0x314eb3=_0x502d67[_0x24acab(0x8e3)+'r'](function(_0x3eee57){var _0x223f22=_0x24acab;return _0x3eee57[_0x223f22(0x288)]===_0xf259ea;})[0xf57+0x1443+0x93*-0x3e];_0x5d87e8={'type':_0x55b6cd,'atMs':_0x5062bb[_0x24acab(0xa31)](_0x4ad1b7['now'](),_0x652929),'originalFunc':!!(_0x314eb3&&_0x314eb3[_0x24acab(0x7ba)]&&typeof _0x314eb3[_0x24acab(0x7ba)]['origi'+_0x24acab(0x9bf)+'nc']===_0x24acab(0x48f)+_0x24acab(0x6b5)),'resolveGameAtFire':!!_0x46adaf(),'gameSourceAtFire':_0x31ef0e['sourc'+'e']};}else _0x130c15[_0x24acab(0x534)]=null,_0x130c15['yaw']=null,_0x130c15['order']=_0x273fbd[_0x24acab(0x48b)](_0x273fbd['piqpm'],_0x545a08?'both\x20'+_0x24acab(0x5b4)+'ed':_0x273fbd[_0x24acab(0x278)])+')';}return _0x130c15;}}function _0xdf07b4(){var _0x399452=_0x50f913,_0x4a6ba2=0x1*0x59f+0xa81+0x2*-0x810;for(var _0x6e820e=-0x7de+0x2*-0xd5a+0x2292;_0x6e820e<_0x3037d0['lengt'+'h'];_0x6e820e++){if(_0x3037d0[_0x6e820e][_0x399452(0x7ba)]&&_0x3037d0[_0x6e820e][_0x399452(0x7ba)][_0x399452(0x7aa)+_0x399452(0x346)]!==undefined)_0x4a6ba2++;}return _0x4a6ba2;}function _0x3b08fe(){var _0x2ecd71=_0x50f913,_0x3f130c=0x68e*-0x1+-0x1*0x19aa+0x80e*0x4;for(var _0x22aa72=-0x977*-0x1+-0x1bbd+-0x1246*-0x1;_0x22aa72<_0x3037d0['lengt'+'h'];_0x22aa72++){if(_0x3037d0[_0x22aa72]['hook']&&_0x3037d0[_0x22aa72][_0x2ecd71(0x7ba)][_0x2ecd71(0xbe9)+'ed'])_0x3f130c++;}return _0x3f130c;}var _0x534e46=null,_0xaeb5bf=[],_0x249f89={},_0x4c4c9f=null;function _0x92b666(_0x58281e){var _0x32399e=_0x50f913,_0x444161={'QUJus':function(_0xa464bf){var _0x5f0d7=_0x36c9;return _0x273fbd[_0x5f0d7(0x3fd)](_0xa464bf);},'VcEtq':_0x32399e(0x2c3)+'Look@'+_0x32399e(0xccb),'FzsvS':_0x273fbd[_0x32399e(0x348)]};try{if(_0x273fbd[_0x32399e(0x7be)](!_0x6f2a9d,!_0x58281e))return null;var _0x33852e=new _0x6f2a9d(_0x58281e)[_0x32399e(0x916)+_0x32399e(0xb30)+'me']();return _0x273fbd['BcPpa'](_0x33852e,undefined)?null:_0x33852e;}catch(_0x17c4f7){if(_0x273fbd['tdmxS'](_0x32399e(0xbb6),'ZInuN')){var _0x4dcc87={},_0x169760=_0x444161[_0x32399e(0x9b5)](_0x40bad9);if(!_0x169760)return _0x4dcc87;_0x4dcc87[_0x444161[_0x32399e(0x651)]]=_0x169760[_0x32399e(0x6e2)+_0x32399e(0x33b)];for(var _0x5e0c46 in _0x169760[_0x32399e(0x500)+'s'])_0x4dcc87[_0x32399e(0x2c3)+'Look+'+_0x5e0c46]=_0x169760[_0x32399e(0x500)+'s'][_0x5e0c46];if(_0x169760[_0x32399e(0xc6d)+'a'])_0x4dcc87[_0x444161[_0x32399e(0x79b)]]=_0x169760[_0x32399e(0xc6d)+'a'];return _0x4dcc87;}else return null;}}function _0x5dda32(_0x583aba,_0x1d13e8,_0x28c202){var _0x4dbc66=_0x50f913,_0x2c2af7=_0x273fbd[_0x4dbc66(0x2fe)](_0x217af7);if(!_0x2c2af7)return null;if(_0x1d13e8<-0x2*0xceb+-0x1d8b+0x1*0x3761||_0x1d13e8+_0x273fbd[_0x4dbc66(0xc43)](_0x28c202,-0x461*-0x1+-0x1196+0xd39)>_0x2c2af7[_0x4dbc66(0x52d)+'ength'])return null;var _0x5343cc=[];for(var _0xe7ae8e=-0x2585+-0xa5e+-0x1*-0x2fe3;_0xe7ae8e<_0x28c202;_0xe7ae8e++)_0x5343cc['push'](_0x2c2af7[_0x4dbc66(0x442)+_0x4dbc66(0x5b6)](_0x583aba+_0x1d13e8+_0xe7ae8e*(0x1*-0x1198+0x1883+0x13*-0x5d),!![]));return _0x5c52ee['ok']+=_0x28c202,_0x5343cc;}var _0x41cebd={'PhotonNetworkSync':[[_0x50f913(0x4cf),'photo'+'nView'],[_0x50f913(0xcb1),'healt'+'h'],['0x24',_0x273fbd[_0x50f913(0x3e8)]],[_0x50f913(0x3ea),'fps'],[_0x273fbd['qYWnf'],_0x273fbd[_0x50f913(0x3e3)]]],'NetworkPlayerAnimations':[[_0x273fbd['RYouP'],_0x273fbd[_0x50f913(0x260)]],[_0x273fbd[_0x50f913(0x44c)],_0x50f913(0x5fd)]],'NPC_Cotroller':[[_0x50f913(0x7c9),_0x50f913(0x978)+'le'],[_0x273fbd[_0x50f913(0xcbb)],_0x50f913(0x343)+_0x50f913(0x34c)+'th'],['0xd0','healt'+'h'],['0xd4',_0x273fbd[_0x50f913(0x37e)]],[_0x50f913(0x72b),_0x273fbd[_0x50f913(0x3e8)]]],'EnemyBot':[[_0x273fbd['WgVyk'],_0x273fbd[_0x50f913(0x3e8)]]]},_0x40036b={'PhotonNetworkSync':[[_0x50f913(0x571),_0x50f913(0x1a1)],[_0x50f913(0x69e),_0x273fbd[_0x50f913(0xca5)]],[_0x273fbd['qOYdz'],'id']]};function _0xb018b0(_0x422340,_0x3890a4){var _0x1c01a4=_0x50f913,_0x470b7e={'euPyn':_0x273fbd['CBuvh'],'boNqn':'runs\x20'+'once\x20'+_0x1c01a4(0x820)+'g\x20Web'+_0x1c01a4(0xb44)+_0x1c01a4(0x269)+'nstan'+'tiate'+'\x20and\x20'+_0x1c01a4(0x742)+_0x1c01a4(0x8b5)+'plugi'+'n.hoo'+_0x1c01a4(0x733)+_0x1c01a4(0x35d)+'\x20','tzYsO':function(_0x6dc484,_0x17b8a3){return _0x6dc484+_0x17b8a3;},'MmRCO':function(_0x6bcf1f,_0x212d50){var _0x22266a=_0x1c01a4;return _0x273fbd[_0x22266a(0xcbe)](_0x6bcf1f,_0x212d50);},'RkVTU':'\x20of\x20','QAZVd':_0x273fbd[_0x1c01a4(0x64c)],'SrgwZ':function(_0x312382,_0x1cb80d){return _0x312382+_0x1cb80d;},'rIuiK':function(_0x40a73f,_0x2a9cbc){return _0x40a73f(_0x2a9cbc);}},_0x3b52b1=_0x1659e8[_0x422340]||[],_0x10734d={'kind':_0x422340,'ptr':'0x'+_0x3890a4['toStr'+_0x1c01a4(0x5ab)](-0xd83*0x1+-0x2*0x9fd+0x218d),'pos':null,'posAt':null,'allVecs':[],'scalars':[],'refs':{}};for(var _0xf5151e=-0x3*-0x25d+0x22*-0x7d+0x983;_0xf5151e<_0x3b52b1[_0x1c01a4(0x4f2)+'h'];_0xf5151e++){if(_0x3b52b1[_0xf5151e][-0x8d*-0xe+0x41f*-0x3+-0x95*-0x8]!=='v3')continue;var _0x11650e=_0x273fbd[_0x1c01a4(0xb59)](_0x5dda32,_0x3890a4,_0x3b52b1[_0xf5151e][0x1*0x1567+0xe0*0x1+-0x1647],-0x1ec*0x8+-0x14*0xb9+0x1dd7);if(!_0x11650e)continue;_0x10734d[_0x1c01a4(0x3da)+'cs'][_0x1c01a4(0x356)]({'o':_0x273fbd[_0x1c01a4(0xaf3)]('0x',_0x3b52b1[_0xf5151e][-0x2646+0x153c+-0x885*-0x2][_0x1c01a4(0x433)+_0x1c01a4(0x5ab)](0x1ea4+0xfd*0xc+-0x2a70)),'v':_0x11650e});}var _0x4dbd55=-0x11*0xf7+-0x1973*0x1+0x29da,_0x338988=_0x22c6cd(_0x10734d[_0x1c01a4(0x3da)+'cs'],_0x3c9b1b());_0x10734d[_0x1c01a4(0x614)]=_0x338988['pos'],_0x10734d[_0x1c01a4(0x714)]=_0x338988['posAt'],_0x10734d[_0x1c01a4(0x8f4)+_0x1c01a4(0xc01)]=_0x338988[_0x1c01a4(0x8f4)+_0x1c01a4(0xc01)],_0x10734d['clust'+'er']=_0x338988[_0x1c01a4(0x7a6)+'er'],_0x10734d[_0x1c01a4(0x5a4)]=_0x338988[_0x1c01a4(0x5a4)],void _0x4dbd55;var _0x405ed5=_0x41cebd[_0x422340],_0xe0ee63=_0x40036b[_0x422340];if(_0xe0ee63){_0x10734d[_0x1c01a4(0x9fe)]={};for(var _0x1d9568=0x493+0x193+-0x626;_0x273fbd['zDJcF'](_0x1d9568,_0xe0ee63['lengt'+'h']);_0x1d9568++){if(_0x273fbd[_0x1c01a4(0xa21)]('oDlgq','oDlgq'))_0x44bda8['hooks'+'Resol'+'ved']===0x25*0x73+-0x6e1*0x1+-0x3a*0x2b?_0x71016f['warni'+'ngs']['push'](_0x1c01a4(0xa23)+_0x2dd919['hooks'+_0x1c01a4(0x770)]+_0x470b7e[_0x1c01a4(0x35b)]+_0x470b7e['boNqn']+(_0x1c01a4(0xd55)+'oks\x20r'+_0x1c01a4(0x88a)+_0x1c01a4(0x957)+'after'+'\x20it\x20a'+'re\x20ig'+'nored'+_0x1c01a4(0x7d7)+'the\x20l'+_0x1c01a4(0x51e)+_0x1c01a4(0x383)+_0x1c01a4(0x67a)+'.\x20')+('Regis'+'tered'+'\x20')+_0x3eedf7[_0x1c01a4(0xbf2)+_0x1c01a4(0xcee)+'tered'+_0x1c01a4(0xa54)]+(_0x1c01a4(0x80f)+_0x1c01a4(0xc08)+_0x1c01a4(0xc75)+_0x1c01a4(0x461)+_0x1c01a4(0x660)+'\x20docu'+'ment-'+_0x1c01a4(0x9f3)+'.')):_0x448b06['warni'+_0x1c01a4(0x58c)]['push'](_0x470b7e[_0x1c01a4(0x85c)](_0x470b7e[_0x1c01a4(0xc82)]('UWMK\x20'+_0x1c01a4(0xcde)+'ved\x20',_0x2aed0e['hooks'+'Resol'+_0x1c01a4(0xd65)])+_0x470b7e[_0x1c01a4(0xb76)]+_0x5bf319['hooks'+_0x1c01a4(0x770)]+(_0x1c01a4(0x80f)+'(s)\x20t'+'o\x20a\x20t'+'able\x20'+'index'+_0x1c01a4(0x307)+_0x1c01a4(0xbe9)+_0x1c01a4(0x775)+'ne.\x20T'+'he\x20si'+_0x1c01a4(0xc6b)+'re\x20'),_0x470b7e[_0x1c01a4(0x7dc)]));else{var _0x2ceb67=_0x273fbd['sxgsD'](_0x131249,_0x273fbd['JwWGy'](_0x3890a4,_0x273fbd[_0x1c01a4(0x6c8)](parseInt,_0xe0ee63[_0x1d9568][0x1764+-0x1c32+0x4ce],0x84f+0x860*-0x2+0x1*0x881)),'i32');if(_0x273fbd['RMccu'](_0x2ceb67,undefined))_0x10734d['tag'][_0xe0ee63[_0x1d9568][0x2*-0x10d6+-0x1ee9+0x1*0x4096]]=_0x2ceb67;}}}if(_0x405ed5)for(var _0x3ab963=0x94a+0x109a+-0x19e4;_0x3ab963<_0x405ed5[_0x1c01a4(0x4f2)+'h'];_0x3ab963++){if('LYHkt'===_0x1c01a4(0x840)){var _0x56a929=_0x273fbd[_0x1c01a4(0xb19)](_0x131249,_0x273fbd[_0x1c01a4(0x308)](_0x3890a4,parseInt(_0x405ed5[_0x3ab963][-0x634+0x2e*-0x8b+0x1f2e],-0xd*-0x29d+0x2587+-0x4770)),_0x273fbd[_0x1c01a4(0xb79)]);if(_0x56a929)_0x10734d[_0x1c01a4(0xb55)][_0x405ed5[_0x3ab963][-0xbb2+0x128c+-0x1*0x6d9]]='0x'+(_0x56a929>>>-0x1a74+0x26a*-0x6+-0x418*-0xa)[_0x1c01a4(0x433)+_0x1c01a4(0x5ab)](0x1*0x1261+-0x140f+0x1be);}else _0x288499['textC'+_0x1c01a4(0x762)+'t']=_0x273fbd['jUnyl'](_0x616602,0x6aa*0x1+-0x1f5+-0x5*0xf1)?_0x273fbd[_0x1c01a4(0xb77)](_0x1c01a4(0xb1d)+_0x1c01a4(0xb09),_0x5b6598)+(_0x41df62?'\x20+\x20'+_0x4be125+'\x20bots':'')+(_0xba5009&&_0x18651f['camer'+'a']?_0x273fbd['kEbDW'](_0x1c01a4(0x2be)+'\x20',_0x597f5a[_0x1c01a4(0xc6d)+'aFrom']):'\x20\x20cam'+'\x20-'):_0x273fbd['ycNhk']+(_0x2123c2&&_0x4a1301[_0x1c01a4(0xc6d)+'a']?_0x4eb9a0[_0x1c01a4(0xc6d)+_0x1c01a4(0x48d)]:'-'),_0x3b1d03[_0x1c01a4(0x481)][_0x1c01a4(0x205)]=_0x273fbd['SivGT'](_0x15f7b7,0x1f08+-0x3e*-0x5b+-0x3512)?'#7ee0'+'a8':_0x273fbd[_0x1c01a4(0x82a)];}return _0x10734d[_0x1c01a4(0x550)+'rs']=_0x3b52b1[_0x1c01a4(0x8e3)+'r'](function(_0x7a4176){var _0x386d29=_0x1c01a4;return _0x7a4176[-0x1bd3+0x1d*-0xc1+0x31b1]===_0x386d29(0xd5a)||_0x7a4176[0x4d8*0x5+-0x26a+0x1*-0x15cd]===_0x386d29(0x8d5);})['map'](function(_0x15ca3b){var _0xc4d5be=_0x1c01a4;if(_0xc4d5be(0x6c6)!=='lPkJF'){_0x375578[_0xc4d5be(0x959)+_0xc4d5be(0x285)+'ault'](),_0x11d85b(!_0xf00ce['on'],_0x550ddf[_0xc4d5be(0x666)+'r']);return;}else return{'o':_0x470b7e[_0xc4d5be(0x8e8)]('0x',_0x15ca3b[0x1b80+0x46*0x13+-0x20b2]['toStr'+_0xc4d5be(0x5ab)](-0x1eb9+0x3*0xc6d+-0x6*0x115)),'v':_0x131249(_0x3890a4+_0x15ca3b[-0x32c+0x175f+-0x1*0x1433],_0x15ca3b[-0x7*0x169+0x107*0x23+-0x1a15])};})[_0x1c01a4(0x8e3)+'r'](function(_0x2241f8){return _0x2241f8['v']!==undefined&&_0x470b7e['rIuiK'](isFinite,_0x2241f8['v']);})[_0x1c01a4(0xc72)](0x15a*0x5+0xaff+0x65*-0x2d,-0x2655+0x1d6f+0x8f2),_0x10734d;}function _0x262878(){var _0x2f0074=_0x50f913,_0x219d34={'xrXPo':function(_0x3d353b,_0xb1149a){return _0x3d353b(_0xb1149a);}},_0x44147a={'players':[],'bots':[],'enemies':[],'controllers':[],'camera':null,'cameraFrom':null,'playerList':null,'managers':{},'wasmTypes':null},_0x972dd4=_0x5dca57[_0x2f0074(0x3cc)+'ntrol'+_0x2f0074(0x630)]&&_0x5dca57['FPSco'+'ntrol'+'ler'][_0x2f0074(0xccb)]||0x1*0x1a41+0x442*0x5+0xfd9*-0x3,_0x5e0d3f=_0x17f483[_0x2f0074(0x422)+_0x2f0074(0x1c3)+_0x2f0074(0x3c9)+'nc']||{},_0x4ad2bc=Object[_0x2f0074(0x5f2)](_0x5e0d3f);for(var _0xca1839=-0xd*-0x13c+-0x67*0x8+-0x335*0x4;_0x273fbd[_0x2f0074(0xbff)](_0xca1839,_0x4ad2bc['lengt'+'h'])&&_0xca1839<0x808*-0x4+-0x2*-0x986+0xd2c;_0xca1839++){if(_0x2f0074(0xac4)===_0x273fbd[_0x2f0074(0x875)]){var _0x210d6d=_0x5e0d3f[_0x4ad2bc[_0xca1839]],_0x46db61=_0xb018b0(_0x2f0074(0x422)+_0x2f0074(0x1c3)+_0x2f0074(0x3c9)+'nc',_0x210d6d[_0x2f0074(0xccb)]);_0x46db61[_0x2f0074(0x740)]=_0x210d6d['hits'],_0x46db61[_0x2f0074(0xafb)+_0x2f0074(0xabf)+'s']=_0x273fbd[_0x2f0074(0xbe7)](_0x210d6d[_0x2f0074(0xafb)+'Seen'],_0x3cf448),_0x46db61['isLoc'+'al']=!!_0x972dd4&&_0x46db61[_0x2f0074(0xb55)][_0x2f0074(0x5f0)]==='0x'+_0x972dd4[_0x2f0074(0x433)+_0x2f0074(0x5ab)](-0x1e36+-0x1e72+0x3cb8);if(_0x46db61['refs'][_0x2f0074(0xae8)+'h']){var _0x2aff26=parseInt(_0x46db61[_0x2f0074(0xb55)][_0x2f0074(0xae8)+'h'],-0x18*-0x199+0x1477+-0x3abf);_0x46db61[_0x2f0074(0xae8)+'h']=_0x273fbd['CDNFo'](_0x2d3137,_0x2aff26,_0x273fbd[_0x2f0074(0xce5)],_0x273fbd['fxgzI']);}_0x44147a['playe'+'rs']['push'](_0x46db61);}else _0x2e745c[_0x2f0074(0x211)+'oard'][_0x2f0074(0x9a9)+'Text'](_0x163cb9)[_0x2f0074(0xd76)](_0x8c7828,function(){_0x267bfb();});}_0x44147a[_0x2f0074(0x90d)+'rCoun'+'t']=_0x4ad2bc[_0x2f0074(0x4f2)+'h'];var _0x2e06d3=_0x17f483[_0x2f0074(0x8d6)+_0x2f0074(0x404)+_0x2f0074(0x630)]||{},_0x31b784=Object[_0x2f0074(0x5f2)](_0x2e06d3);for(var _0x30dba8=0x7*-0x4b7+0xb84+-0x157d*-0x1;_0x273fbd['nUKpB'](_0x30dba8,_0x31b784[_0x2f0074(0x4f2)+'h'])&&_0x30dba8<-0x2578+0x1*0x1551+0x103f;_0x30dba8++){var _0x24885d=(_0x2f0074(0x521)+'|2|0')['split']('|'),_0x4d26a8=0x1*0x1058+0x201f+-0x3077;while(!![]){switch(_0x24885d[_0x4d26a8++]){case'0':_0x44147a[_0x2f0074(0x19a)]['push'](_0x2f6957);continue;case'1':_0x2f6957['hits']=_0x2e06d3[_0x31b784[_0x30dba8]]['hits'];continue;case'2':if(_0x2f6957[_0x2f0074(0xb55)]['healt'+'h'])_0x2f6957[_0x2f0074(0xae8)+'h']=_0x2d3137(parseInt(_0x2f6957['refs'][_0x2f0074(0xae8)+'h'],0xd9d+-0x26*-0xa7+-0x2657),_0x2f0074(0x1d9)+_0x2f0074(0xa6e)+'pt','obfI');continue;case'3':var _0x2f6957=_0xb018b0(_0x273fbd[_0x2f0074(0xac8)],_0x2e06d3[_0x31b784[_0x30dba8]][_0x2f0074(0xccb)]);continue;case'4':_0x2f6957[_0x2f0074(0xafb)+_0x2f0074(0xabf)+'s']=_0x273fbd['vNmCZ'](_0x2e06d3[_0x31b784[_0x30dba8]][_0x2f0074(0xafb)+'Seen'],_0x3cf448);continue;}break;}}_0x44147a['botCo'+_0x2f0074(0x3e4)]=_0x31b784[_0x2f0074(0x4f2)+'h'];var _0x49f2d3=_0x17f483[_0x2f0074(0x3cc)+_0x2f0074(0xa34)+_0x2f0074(0x630)]||{},_0x45447a=Object[_0x2f0074(0x5f2)](_0x49f2d3);for(var _0x3c451d=0xba+0x23ff+-0x24b9;_0x3c451d<_0x45447a[_0x2f0074(0x4f2)+'h']&&_0x3c451d<0x1*0xda3+-0x1a86+-0x1*-0xcfb;_0x3c451d++){var _0x2f63f6=_0xb018b0(_0x2f0074(0x3cc)+_0x2f0074(0xa34)+'ler',_0x49f2d3[_0x45447a[_0x3c451d]]['ptr']);_0x2f63f6['hits']=_0x49f2d3[_0x45447a[_0x3c451d]][_0x2f0074(0x740)],_0x2f63f6[_0x2f0074(0x680)+'al']=_0x49f2d3[_0x45447a[_0x3c451d]][_0x2f0074(0xccb)]===_0x972dd4,_0x44147a[_0x2f0074(0x230)+'oller'+'s'][_0x2f0074(0x356)](_0x2f63f6);}_0x44147a[_0x2f0074(0x230)+_0x2f0074(0xbbc)+_0x2f0074(0x410)]=_0x45447a['lengt'+'h'];var _0x567cc8=_0x44147a['playe'+'rs'][_0x2f0074(0xc54)+'t'](_0x44147a[_0x2f0074(0x19a)]);for(var _0x55804f=0x17*-0x189+0x1eca*0x1+0x485;_0x55804f<_0x567cc8[_0x2f0074(0x4f2)+'h'];_0x55804f++){if(_0x273fbd['CMLkL']!==_0x273fbd['CMLkL'])try{_0x24c1da[_0x2f0074(0x7ba)][_0x2f0074(0xcfd)+'ed']=![];}catch(_0x15f892){}else{if(_0x567cc8[_0x55804f][_0x2f0074(0x680)+'al'])continue;_0x44147a['enemi'+'es']['push'](_0x567cc8[_0x55804f]);}}_0x44147a[_0x2f0074(0xc66)+_0x2f0074(0x410)]=_0x44147a[_0x2f0074(0x520)+'es'][_0x2f0074(0x4f2)+'h'];var _0x5b5ef6={'TDM_GameManager':0x2c,'GG_GameManager':0x14},_0x41b4b4={'TDM_GameManager':0x50,'GG_GameManager':0x5c};for(var _0x2e30a5 in _0x5dca57){var _0x28b970=_0x5dca57[_0x2e30a5];if(!_0x28b970||!_0x28b970['ptr'])continue;if(!_0x273fbd[_0x2f0074(0x37f)](_0x2e30a5,_0x5b5ef6))continue;_0x44147a[_0x2f0074(0x267)+_0x2f0074(0x2ae)][_0x2e30a5]=_0x273fbd[_0x2f0074(0x853)]('0x',_0x28b970[_0x2f0074(0xccb)]['toStr'+_0x2f0074(0x5ab)](-0xfad*0x1+0xde7+0x1d6));var _0x124331=_0x131249(_0x28b970['ptr']+_0x5b5ef6[_0x2e30a5],_0x273fbd[_0x2f0074(0xb79)]),_0x533e15=_0x273fbd[_0x2f0074(0x6c8)](_0x131249,_0x28b970[_0x2f0074(0xccb)]+_0x41b4b4[_0x2e30a5],_0x2f0074(0x4ec));_0x124331&&_0x273fbd[_0x2f0074(0xc05)](_0x44147a['camer'+'a'],null)&&(_0x44147a[_0x2f0074(0xc6d)+'a']='0x'+_0x273fbd['ibMXE'](_0x124331,-0x1767+0x1eca+-0x763)['toStr'+'ing'](-0xea5*0x1+-0x1*0x1493+0x2348),_0x44147a['camer'+'aFrom']=_0x2e30a5);if(_0x533e15&&_0x273fbd[_0x2f0074(0x8b3)](_0x44147a[_0x2f0074(0x90d)+_0x2f0074(0xa06)],null))_0x44147a[_0x2f0074(0x90d)+_0x2f0074(0xa06)]='0x'+_0x273fbd[_0x2f0074(0xc7a)](_0x533e15,-0x1ac9*0x1+0xacb+-0x17*-0xb2)['toStr'+'ing'](-0x1*0xc61+-0x15*-0x1b1+-0x1714);}if(!_0x44147a['playe'+'rCoun'+'t']&&!_0x44147a[_0x2f0074(0x938)+_0x2f0074(0x3e4)]&&!_0x44147a['camer'+'a']){if(_0x273fbd['xRBcb'](_0x2f0074(0x998),_0x273fbd[_0x2f0074(0x92a)]))_0x44147a['note']='No\x20Ph'+_0x2f0074(0x2d1)+'etwor'+_0x2f0074(0x296)+_0x2f0074(0x6a7)+_0x2f0074(0x8d6)+'otrol'+_0x2f0074(0x6c2)+_0x2f0074(0x3ef)+_0x2f0074(0x240)+'\x20mana'+'ger.\x20'+_0x2f0074(0xbde)+'is\x20wh'+_0x2f0074(0x350)+(_0x2f0074(0x45e)+_0x2f0074(0x531)+_0x2f0074(0x9a6)+'\x20like'+'\x20-\x20ru'+'n\x20the'+'\x20reco'+'n\x20INS'+'IDE\x20a'+_0x2f0074(0x9ae)+'\x20roun'+_0x2f0074(0xc11)+_0x2f0074(0x659)+'\x20menu'+'.');else try{_0x219d34[_0x2f0074(0xd36)](_0x479d67,_0x50b1b4);}catch(_0x1edb44){}}else!_0x44147a['enemy'+_0x2f0074(0x410)]&&(_0x44147a['note']=_0x2f0074(0x6ce)+_0x2f0074(0x582)+_0x2f0074(0x19b)+'sent\x20'+'but\x20n'+_0x2f0074(0xd7d)+_0x2f0074(0xbad)+_0x2f0074(0x4dc)+'ied\x20a'+_0x2f0074(0x31f)+_0x2f0074(0x934)+_0x2f0074(0x41d)+'\x20chec'+'k\x20'+(_0x2f0074(0x680)+_0x2f0074(0x290)+_0x2f0074(0x641)+'\x20entr'+_0x2f0074(0x5cf)+_0x2f0074(0xd35)+_0x2f0074(0x745)));try{var _0x1047c1=window[_0x2f0074(0x480)+_0x2f0074(0x396)+_0x2f0074(0x7a1)]&&window['Unity'+_0x2f0074(0x396)+_0x2f0074(0x7a1)][_0x2f0074(0x236)+'me'],_0x4c5846=_0x1047c1&&_0x1047c1['inter'+'nalWa'+'smTyp'+'es']||[],_0x2008d5={};for(var _0x191250=0x743+0x248c+-0x2bcf;_0x273fbd['MCjyC'](_0x191250,_0x4c5846['lengt'+'h'])&&_0x191250<0x2*0xaee+-0x235b+-0x5d3*-0x5;_0x191250++){var _0x602e82=_0x273fbd[_0x2f0074(0xb7d)](_0x4c5846[_0x191250]['param'+'s']['join'](',')+_0x2f0074(0xa7b),_0x4c5846[_0x191250][_0x2f0074(0x75a)+'nType']||_0x273fbd['zklTf']);_0x2008d5[_0x602e82]=(_0x2008d5[_0x602e82]||0x18f5*-0x1+0x1*-0x2cb+0xc0*0x25)+(0x1f*-0x5d+0x2305+0x3*-0x7eb);}_0x44147a[_0x2f0074(0x57e)+_0x2f0074(0x91b)]=_0x2008d5;}catch(_0x50fa9c){}return _0x44147a;}function _0x2d3137(_0x33bcd1,_0x5dde8f,_0x5c83ae){var _0x1cc4d7=_0x50f913,_0x506c92={'spuBL':'plugi'+'n._ru'+_0x1cc4d7(0xb0d)+_0x1cc4d7(0x491)+_0x1cc4d7(0x361)+_0x1cc4d7(0x69b)};try{if(_0x273fbd[_0x1cc4d7(0xd2d)]!==_0x1cc4d7(0x335)){var _0x8c69e=_0x1659e8[_0x5dde8f]||[];for(var _0x40e2ec=-0x21f9+-0x49*-0x1+-0x16*-0x188;_0x40e2ec<_0x8c69e['lengt'+'h'];_0x40e2ec++){if(_0x273fbd[_0x1cc4d7(0x7a3)](_0x8c69e[_0x40e2ec][0x13ee+-0x10*-0x253+0x1*-0x391d],_0x5c83ae))continue;var _0x2fa91e=_0x8c69e[_0x40e2ec][-0x1de*0xf+0x54e+0xb5a*0x2];if(_0x5c83ae['index'+'Of'](_0x273fbd[_0x1cc4d7(0x1f6)])===-0x9b*-0x11+0x635+-0x1080){var _0x426f9e=_0x273fbd['uGrhb'](_0x145e06,_0x33bcd1,_0x2fa91e,_0x5c83ae);if(!_0x426f9e)return null;_0x426f9e['o']=_0x2fa91e,_0x426f9e['k']=_0x5c83ae;var _0x5e05cf=_0x273fbd['cPWTc'](_0x4637b6,[_0x426f9e]);if(!_0x5e05cf['rows']['lengt'+'h'])return null;return _0x5e05cf['rows'][-0xa*-0x7d+0xa13*0x2+-0x1908];}var _0x36dcb4=_0x131249(_0x33bcd1+_0x2fa91e,_0x5c83ae);if(_0x36dcb4===undefined)return null;return{'o':'0x'+_0x2fa91e[_0x1cc4d7(0x433)+'ing'](-0x5b2+-0x3a*-0x2f+-0x4e4*0x1),'v':_0x36dcb4};}}else return _0x4ebf1e['sourc'+'e']=_0x506c92['spuBL'],_0x57ad4e;}catch(_0x528a31){}return null;}function _0x126390(){var _0x23578d=_0x50f913,_0x60072b={'TQyqw':function(_0x377caa,_0x3073dd){return _0x377caa===_0x3073dd;}};if(_0x23578d(0x5e8)!==_0x23578d(0x6fa)){var _0x53ffa4={};_0x5c52ee['ok']=-0x2395+-0x12ee+0x3683*0x1,_0x5c52ee[_0x23578d(0x3b6)+'d']=0xe5+-0xc64+0xb7f,_0x5c52ee[_0x23578d(0x94f)+'rror']=null;var _0x3d7f84=Object['keys'](_0x1659e8);for(var _0x4ceb60=0x1d01+0x2694*-0x1+0x993;_0x273fbd['unqfn'](_0x4ceb60,_0x3d7f84['lengt'+'h']);_0x4ceb60++){var _0x4478aa=_0x3d7f84[_0x4ceb60],_0x46e361=_0x5dca57[_0x4478aa];if(!_0x46e361||!_0x46e361[_0x23578d(0xccb)])continue;var _0x366213=_0x1659e8[_0x4478aa]||[],_0x20d03b=[];for(var _0x1036ab=0x2545+0xf86+0x3*-0x1199;_0x1036ab<_0x366213['lengt'+'h'];_0x1036ab++){var _0x27f6e6=_0x366213[_0x1036ab][-0x36f*0x2+0xa*-0x146+-0x1a*-0xc1],_0x6e7315=_0x366213[_0x1036ab][-0x21e*0x9+-0x173c+0x2a4b];if(_0x6e7315[_0x23578d(0x860)+'Of'](_0x273fbd[_0x23578d(0x1f6)])===-0x411*-0x7+-0x12ad*-0x2+-0x41d1){var _0x19a92c=_0x145e06(_0x46e361['ptr'],_0x27f6e6,_0x6e7315);if(!_0x19a92c)continue;_0x19a92c['o']=_0x27f6e6,_0x19a92c['k']=_0x6e7315,_0x20d03b[_0x23578d(0x356)](_0x19a92c);}else{if(_0x23578d(0x4a3)!==_0x273fbd['ARixd']){var _0x1116f9=_0x131249(_0x46e361[_0x23578d(0xccb)]+_0x27f6e6,_0x6e7315);if(_0x273fbd[_0x23578d(0x542)](_0x1116f9,undefined))continue;var _0x255797={'o':_0x27f6e6,'k':_0x6e7315,'v':_0x1116f9};if(_0x6e7315==='v2'||_0x273fbd['BcPpa'](_0x6e7315,'v3')||_0x273fbd['XKJkB'](_0x6e7315,'v4')){var _0x4a52c5=_0x6e7315==='v2'?0x140f+0x6b6*0x3+-0x1*0x282f:_0x273fbd[_0x23578d(0xace)](_0x6e7315,'v3')?-0x154c+0x1dd*0x1+0x1372:-0x716+-0xb*-0x1c9+-0xc89,_0xc8aeb=_0x5dda32(_0x46e361['ptr'],_0x27f6e6,_0x4a52c5);if(_0xc8aeb){if(_0x273fbd['pRocL'](_0x23578d(0x1e6),_0x273fbd['MaYWv']))try{var _0x9ab7bd=_0x359a44['getIt'+'em'](_0x3cca13);if(!_0x9ab7bd)return;var _0x1c756b=_0x474e09[_0x23578d(0x2b5)](_0x9ab7bd);if(_0x1c756b&&_0x60072b['TQyqw'](typeof _0x1c756b['x'],_0x23578d(0x2a2)+'r')&&_0x60072b[_0x23578d(0x1aa)](typeof _0x1c756b['y'],_0x23578d(0x2a2)+'r'))_0x1fbb85[_0x23578d(0x614)]=_0x1c756b;}catch(_0x131123){}else _0x255797['xyz']=_0xc8aeb,_0x255797['v']=_0xc8aeb[-0xc2*-0x1e+0x1*-0x1a38+-0x37c*-0x1];}}_0x20d03b[_0x23578d(0x356)](_0x255797);}else return _0x273fbd[_0x23578d(0x564)](_0x23ec26[_0x23578d(0x1e3)](_0x596bec*(-0x1424+0x176+0x1312)),-0x2505+0x149b+-0x12*-0xef);}}if(_0x20d03b['lengt'+'h']){if(_0x273fbd[_0x23578d(0xd04)](_0x273fbd[_0x23578d(0x4d9)],_0x273fbd['FKVdI'])){var _0x1a87bb=_0x4637b6(_0x20d03b);_0x53ffa4[_0x4478aa]=_0x1a87bb[_0x23578d(0x7a8)],_0x249f89[_0x4478aa]={'key':_0x1a87bb[_0x23578d(0x9d3)],'sane':_0x1a87bb[_0x23578d(0x8f1)],'checked':_0x1a87bb[_0x23578d(0x8f6)+'ed'],'keyConsistent':_0x1a87bb[_0x23578d(0xd41)+'nsist'+'ent'],'keySource':_0x1a87bb[_0x23578d(0xd56)+'urce']};}else _0x4b7a0d(!_0x2c91e9['on'],_0x27cd22[_0x23578d(0x666)+'r']);}}return _0x53ffa4;}else return _0x27dfbb[_0x23578d(0x76d)](_0x273fbd['jmEHU'],_0x273fbd[_0x23578d(0x1a9)](_0x23578d(0x205)+':',_0x5a5a23),_0x462ad4),null;}function _0x4637b6(_0x4018db){var _0x154f1f=_0x50f913,_0x5bd2cc=0x8e4+0x4fa+-0xdde,_0x2f0320=-0x41b*-0x5+-0x226f+0xde8,_0xf4448f=null;for(var _0x262d8b=0xc8b+0xa4*-0x1+0x1*-0xbe7;_0x262d8b<_0x4018db['lengt'+'h'];_0x262d8b++){if(_0x154f1f(0xb85)!=='TxFsH'){var _0x304919=_0x5c5489[_0x154f1f(0x3b1)](this,arguments);try{if(_0x304919&&typeof _0x304919['then']===_0x154f1f(0x48f)+'ion')_0x304919['then'](_0x2ac268,function(){});else _0x5d0100(_0x304919);}catch(_0x2abe18){}return _0x304919;}else{var _0x17c503=_0x4018db[_0x262d8b];if(_0x17c503['k'][_0x154f1f(0x860)+'Of'](_0x273fbd[_0x154f1f(0x1f6)])!==0xc00+0x217f+-0x2d7f)continue;_0x17c503['v']=_0xdb4126(_0x17c503['k'],_0x17c503[_0x154f1f(0xb8f)+'n'],_0x17c503['keyAt'+'Offse'+'t0']),_0x17c503[_0x154f1f(0xaf8)+'ed']=_0x17c503[_0x154f1f(0xaca)+_0x154f1f(0xcb9)+'t0'],_0x17c503['raw']=_0x273fbd[_0x154f1f(0xcef)](_0x273fbd[_0x154f1f(0xb08)](_0x273fbd[_0x154f1f(0x553)](_0x273fbd['RwKCb'](_0x154f1f(0xb21),_0x17c503[_0x154f1f(0xb8f)+'n'])+('\x20fake'+'=')+_0x17c503['fake']+(_0x17c503['act']?'\x20ACTI'+'VE':'')+_0x154f1f(0xac6),_0x17c503['keyAt'+_0x154f1f(0xcb9)+'t0']),_0x273fbd[_0x154f1f(0xc45)]),_0x17c503[_0x154f1f(0x1ab)]);if(_0xf4448f===null)_0xf4448f=_0x17c503[_0x154f1f(0xaca)+'Offse'+'t0'];_0x2f0320++;if(_0x273fbd[_0x154f1f(0x467)](_0x217649,_0x17c503))_0x5bd2cc++,_0x17c503[_0x154f1f(0x8f1)]=!![];else{if(_0x154f1f(0x20c)==='kWsBm')return _0x2d7a1a['v']!==_0x39163d&&_0x504581(_0x20c7b1['v']);else _0x17c503[_0x154f1f(0x8f1)]=![];}delete _0x17c503[_0x154f1f(0x9ba)];}}return{'rows':_0x4018db,'key':_0xf4448f,'sane':_0x5bd2cc,'checked':_0x2f0320,'keyConsistent':_0x417875(_0x4018db),'keySource':_0x154f1f(0xba1)+_0x154f1f(0x44b)+_0x154f1f(0x7e4)+_0x154f1f(0xd4f)};}function _0x417875(_0x3ee3a2){var _0x1d437b=_0x50f913,_0x4675c9={};for(var _0x4bcbcd=0x1d7a+0x30+0x1*-0x1daa;_0x4bcbcd<_0x3ee3a2['lengt'+'h'];_0x4bcbcd++){var _0x4ed91c=_0x3ee3a2[_0x4bcbcd];if(_0x273fbd['tvSie'](_0x4ed91c['k']['index'+'Of'](_0x273fbd[_0x1d437b(0x1f6)]),0x13a8+0x201f+-0x33c7))continue;if(_0x273fbd[_0x1d437b(0xaaa)](_0x4675c9[_0x4ed91c['k']],undefined))_0x4675c9[_0x4ed91c['k']]=_0x4ed91c[_0x1d437b(0xaf8)+'ed'];else{if(_0x273fbd[_0x1d437b(0x5af)](_0x4675c9[_0x4ed91c['k']],_0x4ed91c['keyUs'+'ed']))return![];}}return!![];}function _0x217649(_0x39a1a5){var _0xcfbcc5=_0x50f913;if(_0x273fbd[_0xcfbcc5(0x2b3)]===_0x273fbd['zaNDy']){var _0x4a03a1=_0x273fbd[_0xcfbcc5(0x901)][_0xcfbcc5(0x75c)]('|'),_0x5f293f=-0x2e*0x33+0x882+0xa8;while(!![]){switch(_0x4a03a1[_0x5f293f++]){case'0':if(_0x273fbd[_0xcfbcc5(0x294)](_0x39a1a5['k'],_0x273fbd[_0xcfbcc5(0x1f4)]))return _0x273fbd[_0xcfbcc5(0xb66)](_0x5e870f,0x7*0x185+0x1c*0x52+-0x139b)||_0x273fbd[_0xcfbcc5(0xb4c)](_0x5e870f,-0x20ea+0x2249+-0x2*0xaf);continue;case'1':return _0x273fbd['QLgEn'](Math['abs'](_0x5e870f),0x492e2ac4+0x4983e988+-0x57174a4c);case'2':var _0x5e870f=_0x39a1a5['v'];continue;case'3':if(typeof _0x5e870f!==_0xcfbcc5(0x2a2)+'r'||!isFinite(_0x5e870f))return![];continue;case'4':if(_0x273fbd['iUJaO'](typeof _0x286051,_0xcfbcc5(0x2a2)+'r')||!_0x273fbd['Lmhqa'](isFinite,_0x286051))return!![];continue;case'5':var _0x286051=_0x39a1a5[_0xcfbcc5(0x452)];continue;case'6':if(_0x39a1a5['act']===0x3b3*-0x8+0x2*-0xc74+0x3681)return _0x273fbd[_0xcfbcc5(0xb11)](Math['abs'](_0x5e870f-_0x286051),Math[_0xcfbcc5(0xbb7)](0x32*0xc2+0x1*-0xd3d+-0x18a6,Math[_0xcfbcc5(0xc83)](_0x286051)*(0x83*-0x44+0x9f8+0x18d4+0.6)));continue;}break;}}else return _0x5bf6b6[_0xcfbcc5(0x3b6)+'d']++,_0x4b4cdd[_0xcfbcc5(0x94f)+'rror']=_0xcc12e9[_0xcfbcc5(0x94f)+_0xcfbcc5(0x87f)]||_0x273fbd['brUSY'](_0x5b8fff,_0x42a1ef&&_0x4c99f4[_0xcfbcc5(0xb7a)+'ge']||_0x277b1b)[_0xcfbcc5(0xc72)](0x1844+0x1931*0x1+-0x3175*0x1,-0x1*-0x16cd+0x41c+-0x1a71),null;}function _0x2b1b81(){var _0x1abf28=_0x50f913,_0x237608={};try{var _0x207198=window[_0x1abf28(0x480)+_0x1abf28(0x396)+_0x1abf28(0x7a1)]&&window[_0x1abf28(0x480)+_0x1abf28(0x396)+'dkit']['Runti'+'me'];_0x237608['tag']=_0x207198&&_0x207198[_0x1abf28(0x77c)+_0x1abf28(0x577)+'g']||null,_0x237608[_0x1abf28(0x2ec)+_0x1abf28(0x727)]=!!(_0x207198&&_0x1f32e2&&_0x273fbd[_0x1abf28(0x729)](_0x207198[_0x1abf28(0x77c)+'uraTa'+'g'],_0x1f32e2)),_0x237608[_0x1abf28(0x895)+'meGam'+'e']=_0x207198&&_0x207198[_0x1abf28(0x705)]?typeof _0x207198[_0x1abf28(0x705)]:_0x1abf28(0xa8d),_0x237608[_0x1abf28(0x9c1)+'nRunt'+'imeIs'+'Expor'+'ted']=!!(_0x32a1f1&&_0x32a1f1['_runt'+'ime']&&_0x273fbd[_0x1abf28(0x874)](_0x32a1f1[_0x1abf28(0xa08)+_0x1abf28(0x4a8)],_0x207198)),_0x237608['plugi'+_0x1abf28(0x9fc)+_0x1abf28(0x6bf)+'me']=_0x32a1f1&&_0x32a1f1[_0x1abf28(0xa08)+_0x1abf28(0x4a8)]&&_0x32a1f1[_0x1abf28(0xa08)+_0x1abf28(0x4a8)][_0x1abf28(0x705)]?typeof _0x32a1f1['_runt'+_0x1abf28(0x4a8)]['_game']:_0x273fbd['beWSM'];}catch(_0x4bec32){_0x237608[_0x1abf28(0x7ae)]=_0x273fbd['wjulA'](String,_0x4bec32&&_0x4bec32[_0x1abf28(0xb7a)+'ge']||_0x4bec32);}return _0x237608;}function _0x432641(){var _0x3b95df=_0x50f913;if(_0x273fbd['crOVB'](_0x3b95df(0x431),_0x3b95df(0x431))){var _0x400ccd=[_0x273fbd[_0x3b95df(0x1fa)],_0x273fbd[_0x3b95df(0x6a1)],'game','unity'+'Insta'+'nceWr'+'apper'],_0x3e57ca={};for(var _0x145711=0xed2+0xb*-0x232+0x4*0x255;_0x145711<_0x400ccd[_0x3b95df(0x4f2)+'h'];_0x145711++){if(_0x273fbd[_0x3b95df(0x21b)]!=='ZLxSC'){var _0x5d6fe0=_0x26673a['split']('+');_0x25dd1d=_0x252204(_0x873358,_0x5d6fe0[0xc*-0xe2+-0x1c4b+0x26e3][_0x3b95df(0x860)+'Of'](_0x273fbd[_0x3b95df(0x53f)])===0x215e+-0x1*0x1f7+-0x1*0x1f67?'Healt'+_0x3b95df(0xa6e)+'pt':'FPSco'+'ntrol'+_0x3b95df(0x630),_0x273fbd[_0x3b95df(0xb19)](_0x3b6f47,_0x5d6fe0[-0x11ed+0x1841*-0x1+0x2a2f],-0x473+0x4*-0x43e+0x157b));}else{var _0x5efc68=_0x400ccd[_0x145711],_0x580370=typeof window[_0x5efc68];_0x3e57ca[_0x5efc68]=_0x273fbd[_0x3b95df(0x9de)](_0x580370,_0x3b95df(0x75d)+'ined')?'undef'+_0x3b95df(0xbb3):_0x580370;}}var _0x12af42=_0x59baa0();_0x3e57ca[_0x3b95df(0x703)+'ource']=_0x5c52ee['sourc'+'e'];try{_0x273fbd[_0x3b95df(0x22f)]('IleGo',_0x3b95df(0x519))?(_0x3e57ca['hasMo'+'dule']=!!(_0x12af42&&_0x12af42[_0x3b95df(0x1fe)+'e']),_0x3e57ca['heapU'+'8']=!!(_0x12af42&&_0x12af42[_0x3b95df(0x1fe)+'e']&&_0x12af42[_0x3b95df(0x1fe)+'e']['HEAPU'+'8']),_0x3e57ca[_0x3b95df(0x306)+_0x3b95df(0xd02)]=_0x3e57ca[_0x3b95df(0x2bc)+'8']?_0x12af42['Modul'+'e'][_0x3b95df(0x39e)+'8'][_0x3b95df(0x4f2)+'h']:0x2344+-0x1ca9+0x1*-0x69b):(_0x2618fe['execC'+_0x3b95df(0xaf9)+'d'](_0x273fbd[_0x3b95df(0xab1)]),_0x1939a5());}catch(_0x3932ed){_0x3e57ca[_0x3b95df(0x244)+'dule']=![],_0x3e57ca[_0x3b95df(0x2bc)+'8']=![],_0x3e57ca[_0x3b95df(0x306)+'ytes']=0x1*-0x1225+-0xeae*0x1+0x1*0x20d3;}return _0x3e57ca['value'+_0x3b95df(0x2e3)+'er']=typeof _0x6f2a9d,_0x3e57ca;}else return null;}function _0x61d980(){var _0x43df4a=_0x50f913;if(_0x43df4a(0x1f9)!==_0x273fbd[_0x43df4a(0xc73)]){var _0x480de0=(_0x43df4a(0x95f)+'|1|6|'+'4|3')['split']('|'),_0x4f0fea=0x1150+-0x10*0xae+-0x670;while(!![]){switch(_0x480de0[_0x4f0fea++]){case'0':var _0x3e12df={};continue;case'1':_0x3e12df['Mouse'+'Look@'+_0x43df4a(0xccb)]=_0xa739b4['mouse'+_0x43df4a(0x33b)];continue;case'2':var _0xa739b4=_0x5d9499();continue;case'3':return _0x3e12df;case'4':if(_0xa739b4['camer'+'a'])_0x3e12df[_0x43df4a(0x2c3)+_0x43df4a(0xc4e)+_0x43df4a(0xc6d)+'a']=_0xa739b4[_0x43df4a(0xc6d)+'a'];continue;case'5':if(!_0xa739b4)return _0x3e12df;continue;case'6':for(var _0x42453f in _0xa739b4[_0x43df4a(0x500)+'s'])_0x3e12df['Mouse'+_0x43df4a(0xc4e)+_0x42453f]=_0xa739b4['float'+'s'][_0x42453f];continue;}break;}}else _0x1d2e69[_0x43df4a(0x4da)+_0x43df4a(0x762)+'t']=_0x5ab8cf(_0x8acf32);}function _0x5150cf(_0x51169e){var _0xd52840=_0x50f913,_0x1d4f7c={'JvOMK':_0xd52840(0xd6e)+_0xd52840(0x869)+'tyWeb'+_0xd52840(0x683)+'t.Val'+'ueWra'+_0xd52840(0xb95)+_0xd52840(0xad4)+_0xd52840(0xcc3)+'\x20-\x20ca'+_0xd52840(0xa10)+'\x20is\x20r'+_0xd52840(0x4e9)+_0xd52840(0x504)+_0xd52840(0xa27)};if(_0x273fbd['wLChR'](_0x273fbd[_0xd52840(0xa48)],_0x273fbd[_0xd52840(0xa48)]))_0xc02622[_0xd52840(0xb60)+_0xd52840(0x58c)]['push'](_0x1d4f7c[_0xd52840(0x4c8)]);else{var _0x41a1a1={};for(var _0x995a86 in _0x51169e){if('QHdNe'===_0xd52840(0x825)){var _0x531f61=_0x51169e[_0x995a86];for(var _0x23ffe0=-0x1*-0x12dd+-0x5*-0x5f3+-0x11*0x2dc;_0x23ffe0<_0x531f61[_0xd52840(0x4f2)+'h'];_0x23ffe0++){_0x41a1a1[_0x995a86+'+0x'+_0x531f61[_0x23ffe0]['o']['toStr'+_0xd52840(0x5ab)](0x2180+0x19*-0x29+-0x1d6f)]=_0x531f61[_0x23ffe0]['v'];}}else _0x454341=_0x273fbd[_0xd52840(0xcc2)](_0x273fbd[_0xd52840(0x308)](_0x273fbd[_0xd52840(0x753)],_0x3087e2[_0xd52840(0x5f2)](_0x4dada0['insta'+'nces'])[_0xd52840(0x4f2)+'h'])+(_0xd52840(0x9e1)+'cts\x20·'+'\x20'),_0x14b677)+'s',_0x2aa7fd=_0xd52840(0x88b)+'a8';}return _0x41a1a1;}}function _0x583866(_0x78399d,_0x7d4d53){var _0x271ef7=_0x50f913;if(_0x78399d===_0x273fbd[_0x271ef7(0x5d1)]){_0x273fbd[_0x271ef7(0xca2)](_0x399c27,_0x7d4d53&&_0x273fbd[_0x271ef7(0x4b8)](typeof _0x7d4d53['on'],'boole'+'an')?_0x7d4d53['on']:_0x1ccb3a['on'],_0x7d4d53&&_0x273fbd[_0x271ef7(0x542)](typeof _0x7d4d53[_0x271ef7(0x666)+'r'],_0x271ef7(0x2a2)+'r')?_0x7d4d53[_0x271ef7(0x666)+'r']:_0x1ccb3a[_0x271ef7(0x666)+'r']);return;}if(_0x273fbd[_0x271ef7(0x7a3)](_0x78399d,'snaps'+'hot'))return;var _0x21564a=_0x273fbd['jUpEZ'](_0x126390),_0x24913f=_0x5150cf(_0x21564a),_0x17f879=_0x61d980();for(var _0xd93b1e in _0x17f879)_0x24913f[_0xd93b1e]=_0x17f879[_0xd93b1e];if(!_0x534e46){_0x534e46=_0x24913f,_0xaeb5bf=[],_0x273fbd['FIeQN'](_0x5abc61,_0x273fbd[_0x271ef7(0x6b6)],{'report':_0x273fbd[_0x271ef7(0x3fa)](_0xbad580)});return;}_0xaeb5bf=[];for(var _0x5b945c in _0x24913f){var _0x181a71=_0x534e46[_0x5b945c],_0x2a46f3=_0x24913f[_0x5b945c];if(_0x181a71!==_0x2a46f3)_0xaeb5bf['push'](_0x5b945c+':\x20'+_0x181a71+_0x271ef7(0xa7b)+_0x2a46f3);}_0x534e46=_0x24913f,_0x5abc61('repor'+'t',{'report':_0xbad580()});}var _0x5092fa=null;function _0x2211a2(){var _0x30a544=_0x50f913,_0x1b7786={'UbImE':function(_0x314236,_0x5a9e8b){return _0x314236+_0x5a9e8b;}};if(_0x5092fa)return _0x5092fa;try{if(_0x273fbd[_0x30a544(0x415)]('UvJiq',_0x30a544(0x572))){if(!document[_0x30a544(0x1af)]||!document['body'][_0x30a544(0x786)+_0x30a544(0x31e)+'d'])return null;if(!document[_0x30a544(0x5b1)+_0x30a544(0x656)+'ById'](_0x273fbd['VDosX'])){if('xlWdy'!==_0x30a544(0x5b5)){var _0x5d6dc0=document['creat'+_0x30a544(0x224)+'ent'](_0x30a544(0x481));_0x5d6dc0['id']=_0x30a544(0xb39)+_0x30a544(0x694)+_0x30a544(0xcc0)+'ss',_0x5d6dc0[_0x30a544(0x4da)+'onten'+'t']=_0x273fbd['yOKtz'],(document['head']||document[_0x30a544(0x1c2)+_0x30a544(0x1b4)+'ement'])['appen'+_0x30a544(0x31e)+'d'](_0x5d6dc0);}else try{_0x2ec5f4();}catch(_0x26f438){}}var _0x56a45c=document[_0x30a544(0x72f)+_0x30a544(0x224)+_0x30a544(0x7ab)](_0x30a544(0x987));_0x56a45c['id']=_0x273fbd[_0x30a544(0x29a)],_0x56a45c[_0x30a544(0x481)]['cssTe'+'xt']=_0x273fbd['Heorr']('posit'+_0x30a544(0xa4d)+'ixed;'+_0x30a544(0xd7b)+_0x30a544(0x7c6)+_0x30a544(0x882)+_0x30a544(0xbb2)+'z-ind'+'ex:21'+_0x30a544(0xa4c)+'647;d'+'ispla'+_0x30a544(0x95c)+'x;fle'+'x-dir'+_0x30a544(0xc14)+_0x30a544(0x23f)+_0x30a544(0xb14)+_0x30a544(0x3cf)+'x;'+_0x273fbd['DBqlX']+(_0x30a544(0x248)+_0x30a544(0xa5c)+_0x30a544(0xb3c)+_0x30a544(0x37a)+_0x30a544(0x52c)+_0x30a544(0xd61)+'\x20ui-m'+'onosp'+_0x30a544(0xa42)+'onsol'+_0x30a544(0x634)+_0x30a544(0xa8c)+_0x30a544(0x371)+'lor:#'+'f7eef'+'5;'),_0x30a544(0x7d3)+'hadow'+_0x30a544(0x1ba)+'px\x2030'+'px\x20-1'+_0x30a544(0x35c)+'000;u'+'ser-s'+_0x30a544(0x746)+_0x30a544(0x9cf)+_0x30a544(0xb7e)+_0x30a544(0x34b)+_0x30a544(0x55f)+'elect'+_0x30a544(0x9cf)+';');var _0x405a3e=_0x273fbd[_0x30a544(0x272)];_0x56a45c[_0x30a544(0xa55)+_0x30a544(0x807)]=_0x273fbd['NWklL'](_0x273fbd[_0x30a544(0x76e)](_0x273fbd[_0x30a544(0x85d)](_0x273fbd['GWUWk'](_0x273fbd[_0x30a544(0x275)],_0x30a544(0x8be)+'yle=\x22'+'color'+':')+_0xd166cd+('\x22>sak'+'ura</'+'b>')+(_0x30a544(0x5e4)+_0x30a544(0xa44)+'ta-a='+_0x30a544(0x964)+_0x30a544(0x481)+_0x30a544(0xa8f)+_0x30a544(0x4ef)+'nd:tr'+_0x30a544(0xb3b)+'rent;'+_0x30a544(0x5fe)+'r:1px'+_0x30a544(0x708)+_0x30a544(0x945)+_0x30a544(0x393)+_0x30a544(0x716)+_0x30a544(0xcc7)+'45);')+('color'+_0x30a544(0x90b)+_0x30a544(0x5a1)+'order'+'-radi'+_0x30a544(0x870)+'x;pad'+_0x30a544(0x443)+_0x30a544(0x3df)+'px;cu'+_0x30a544(0x8da)+_0x30a544(0x65c)+'er;fo'+_0x30a544(0x686)+'herit'+_0x30a544(0x56f)+_0x30a544(0x202)+_0x30a544(0x51c)+_0x30a544(0xcd7)+'>')+(_0x30a544(0xcfb)+'t\x20dat'+_0x30a544(0x622)+'fx\x22\x20t'+_0x30a544(0x2f9)+_0x30a544(0xb35)+'\x22\x20min'+_0x30a544(0x9ca)+'max=\x22'+'5\x22\x20st'+_0x30a544(0xbdb)+'.5\x22\x20v'+_0x30a544(0xc6e)+_0x30a544(0xa61)+'tyle='+'\x22widt'+_0x30a544(0xbf5)+'x;acc'+_0x30a544(0x6e8)+'olor:')+_0xd166cd,_0x30a544(0xcf0))+_0x273fbd[_0x30a544(0x917)],'<butt'+'on\x20da'+'ta-a='+_0x30a544(0x669)+_0x30a544(0x725)+_0x30a544(0x791)+'ckgro'+_0x30a544(0x5e3)+_0x30a544(0x59f)+'arent'+_0x30a544(0x3aa)+'er:1p'+'x\x20sol'+_0x30a544(0x576)+_0x30a544(0x851)+_0x30a544(0x60f)+_0x30a544(0xc0d)+'.45);')+('color'+_0x30a544(0x90b)+_0x30a544(0x5a1)+'order'+_0x30a544(0x584)+_0x30a544(0x870)+'x;pad'+_0x30a544(0x443)+'2px\x207'+_0x30a544(0x32c)+'rsor:'+_0x30a544(0x65c)+_0x30a544(0x381)+'nt:in'+_0x30a544(0xa51)+';\x22>ES'+'P\x20on<'+_0x30a544(0x71a)+'on>')+(_0x30a544(0x5e4)+_0x30a544(0xa44)+'ta-a='+_0x30a544(0x552)+'\x22\x20sty'+'le=\x22b'+'ackgr'+_0x30a544(0xbdc)+_0x30a544(0x568)+'paren'+'t;bor'+_0x30a544(0xcb6)+'px\x20so'+_0x30a544(0xc55)+'gba(2'+'55,14'+_0x30a544(0xd40)+_0x30a544(0x263)+';')+_0x273fbd['QqilT']+_0x273fbd['YZFTT']+_0x273fbd[_0x30a544(0xd34)]+(_0x30a544(0x2f3)+'>'),'<div\x20'+'data-'+_0x30a544(0x2d5)+_0x30a544(0x9c5)+'le=\x22c'+'olor:'+_0x30a544(0x93c)+'99;ma'+'x-wid'+'th:29'+_0x30a544(0x885)+_0x30a544(0x77e)+'v>')+_0x273fbd[_0x30a544(0x272)],_0x56a45c['inner'+_0x30a544(0x807)]=_0x405a3e;var _0x255c6f=function(_0x590c06){var _0x5a06a1=_0x30a544;return _0x56a45c['query'+'Selec'+'tor'](_0x1b7786['UbImE'](_0x1b7786[_0x5a06a1(0x231)]('[data'+'-a=\x22',_0x590c06),'\x22]'));},_0x34ef4f=_0x273fbd['Lmhqa'](_0x255c6f,'st'),_0x249f1f=_0x255c6f('st2'),_0x2dae75=_0x255c6f('sp'),_0x52ad40=_0x273fbd['cNBkw'](_0x255c6f,'fx'),_0x261b20=_0x255c6f('fv'),_0x18111b=_0x273fbd['ZoegT'](_0x255c6f,_0x30a544(0x31c));if(_0x2dae75)_0x2dae75['oncli'+'ck']=function(){var _0x292664=_0x30a544;_0x399c27(!_0x1ccb3a['on'],_0x1ccb3a[_0x292664(0x666)+'r']);};if(_0x52ad40)_0x52ad40[_0x30a544(0x6c3)+'ut']=function(){var _0xffe974=_0x30a544;if('KUYMU'!==_0x273fbd[_0xffe974(0x7c3)])_0x399c27(_0x1ccb3a['on'],_0x273fbd[_0xffe974(0x506)](parseFloat,_0x52ad40[_0xffe974(0xc1b)])||0xeb6+-0xaf5*-0x1+-0x19aa);else{var _0x255a34=_0xda9cdf[0xe*0x29c+-0x1*-0x19ab+-0x3e33];if(_0x255a34&&typeof _0x255a34['val']===_0xffe974(0x48f)+_0xffe974(0x6b5)){_0x3f230d[_0xffe974(0x325)]=_0x255a34[_0xffe974(0xb5f)](),_0x55ec74['hits']++;if(_0xf2ab1a[-0x290+-0x1ea2+0x2133]&&typeof _0x3dab5d[0xbee+0x2c*0x25+-0x1249]['val']===_0xffe974(0x48f)+_0xffe974(0x6b5)){var _0x524261=_0x1fc11b[-0x1eb*-0xd+-0x2513+0x1*0xc25]['val']();if(_0x524261)_0x24e3ba=_0x524261;}}}};if(_0x255c6f('snap'))_0x255c6f(_0x273fbd[_0x30a544(0xac7)])['oncli'+'ck']=function(){var _0x1635a1=_0x30a544;_0x273fbd['cPWTc'](_0x583866,_0x273fbd[_0x1635a1(0x682)]);};var _0x4f88fc=_0x273fbd[_0x30a544(0x28c)](_0x255c6f,_0x273fbd[_0x30a544(0x3c3)]);if(_0x4f88fc)_0x4f88fc[_0x30a544(0xaeb)+'ck']=function(){if(!_0x130958['on'])_0x1b4428(!![],![]);else{if(_0x130958['boxes'])_0x1b4428(![],![]);else{if(_0x39d633())_0x1b4428(!![],!![]);else _0x1b4428(![],![]);}}};if(_0x255c6f(_0x273fbd[_0x30a544(0xc21)]))_0x273fbd[_0x30a544(0xa98)](_0x255c6f,_0x273fbd[_0x30a544(0xc21)])[_0x30a544(0xaeb)+'ck']=function(){var _0x6c030b=_0x30a544;if(!_0x18111b)return;var _0x522daf=_0x18111b['style'][_0x6c030b(0x555)+'ay']===_0x6c030b(0xa8d);_0x18111b['style'][_0x6c030b(0x555)+'ay']=_0x522daf?'':_0x6c030b(0xa8d),_0x255c6f('fold')['textC'+_0x6c030b(0x762)+'t']=_0x522daf?'-':'+';};return document['body'][_0x30a544(0x786)+'dChil'+'d'](_0x56a45c),_0x5092fa={'el':_0x56a45c,'st':_0x34ef4f,'st2':_0x249f1f,'sp':_0x2dae75,'fx':_0x52ad40,'fv':_0x261b20,'esp':_0x4f88fc},_0x5092fa;}else _0x36f4d9['lg']['textC'+_0x30a544(0x762)+'t']=_0x273fbd['IvcCu'](_0x273fbd['latDi']('esp\x20',_0x49198c)+_0x273fbd[_0x30a544(0xb5d)]+_0x3614e2[_0x30a544(0x1e3)](_0x9b66b5['span']),'m')+(_0x5b5d88[_0x30a544(0x609)]?_0x273fbd[_0x30a544(0x505)](_0x273fbd['uIDre'],_0x262b0d[_0x30a544(0x1e3)](_0x5017ab[_0x30a544(0x9e8)]))+'°':'')+(_0x395e8b!==null?_0x30a544(0x235)+'am'+_0x364e2e:'');}catch(_0x596d03){return console[_0x30a544(0x76d)](_0x30a544(0x7e3)+_0x30a544(0xc95)+_0x30a544(0x4e3)+_0x30a544(0x539)+_0x30a544(0x1e1)+'isabl'+'ed',_0x273fbd['zRfgF'](_0x30a544(0x205)+':',_0xd166cd),_0x596d03),null;}}function _0x39d633(){var _0x4a6b20=_0x50f913;try{var _0xde04a3=_0x273fbd[_0x4a6b20(0x8c4)](_0x5f42a2);return!!(_0xde04a3&&_0x268be7['ident'+_0x4a6b20(0x48e)]);}catch(_0x1d95fe){return![];}}function _0x416ea9(){var _0x2b6f17=_0x50f913;try{var _0x232104=(_0x2b6f17(0x21e)+'|4|1|'+_0x2b6f17(0x3f3))[_0x2b6f17(0x75c)]('|'),_0x1bff19=0x209e+0x3*0xa3+-0x1*0x2287;while(!![]){switch(_0x232104[_0x1bff19++]){case'0':if(_0x130958['boxes']&&!_0x39d633())_0x130958['boxes']=![];continue;case'1':if(_0x1695f6!==_0x45f837['textC'+'onten'+'t'])_0x45f837[_0x2b6f17(0x4da)+'onten'+'t']=_0x1695f6;continue;case'2':_0x45f837[_0x2b6f17(0x481)][_0x2b6f17(0x205)]=_0x130958['on']?'#2a0f'+'1b':_0x2b6f17(0x64f)+'f5';continue;case'3':if(!_0x45f837)return;continue;case'4':var _0x1695f6=!_0x130958['on']?_0x2b6f17(0x3b5)+'ff':_0x130958[_0x2b6f17(0x609)]?_0x2b6f17(0x927)+'oth':_0x2b6f17(0xa0c)+'ap';continue;case'5':var _0x45f837=_0x5092fa&&_0x5092fa[_0x2b6f17(0x68c)];continue;case'6':_0x45f837[_0x2b6f17(0x481)][_0x2b6f17(0x754)+_0x2b6f17(0x1e3)]=_0x130958['on']?_0xd166cd:_0x2b6f17(0x568)+_0x2b6f17(0x5f3)+'t';continue;}break;}}catch(_0x11b5a8){}}function _0x1b4428(_0x406555,_0x12ad5c){var _0x3c675c=_0x50f913;_0x130958['on']=!!_0x406555,_0x130958[_0x3c675c(0x609)]=!!_0x12ad5c,_0x416ea9();try{var _0x5c85ac=_0x3b9987();if(_0x5c85ac&&_0x5c85ac['el'])_0x5c85ac['el'][_0x3c675c(0x481)][_0x3c675c(0x555)+'ay']=_0x130958['on']?'':'none';var _0x5da637=_0x5e7179;if(_0x5da637&&_0x5da637['cv'])_0x5da637['cv'][_0x3c675c(0x481)]['displ'+'ay']=_0x130958['on']&&_0x130958['boxes']?'':_0x3c675c(0xa8d);}catch(_0x285dcc){}}var _0x3ffa2a=0x125*-0x14+-0x18aa+0x2f90;function _0x399c27(_0x17fbc7,_0x548d25){var _0x3016dd=_0x50f913,_0x3bf4c7={'KNZSQ':'PICKP'+_0x3016dd(0x755),'wwMIQ':_0x3016dd(0x6bd)},_0x51394a=_0x1ccb3a['on'];_0x1ccb3a['on']=!!_0x17fbc7;_0x1ccb3a['on']&&!_0x51394a&&(_0x548d25===undefined||_0x548d25===null||_0x273fbd[_0x3016dd(0x25f)](_0x273fbd['rnbTm'](Number,_0x548d25),0x1faf+-0x4*-0x705+-0x1*0x3bc2))&&(_0x548d25=_0x3ffa2a);_0x1ccb3a[_0x3016dd(0x666)+'r']=Math['min'](_0x1ccb3a['max'],Math[_0x3016dd(0xbb7)](_0x1ccb3a[_0x3016dd(0xa59)],_0x273fbd[_0x3016dd(0xa5f)](Number,_0x548d25)||0x274*0x7+-0x6c7+-0xa64));if(!_0x1ccb3a['on'])_0x3617f2={};var _0x5528be=_0x273fbd[_0x3016dd(0xc1a)](_0x2211a2);if(_0x5528be){if(_0x273fbd[_0x3016dd(0x2b7)](_0x273fbd[_0x3016dd(0xd54)],_0x273fbd[_0x3016dd(0xd54)])){_0x5528be['sp']&&(_0x5528be['sp']['textC'+_0x3016dd(0x762)+'t']=_0x1ccb3a['on']?_0x3016dd(0x8e6)+_0x3016dd(0x698):_0x273fbd[_0x3016dd(0x94b)],_0x5528be['sp'][_0x3016dd(0x481)][_0x3016dd(0x754)+_0x3016dd(0x1e3)]=_0x1ccb3a['on']?_0xd166cd:_0x273fbd[_0x3016dd(0x482)],_0x5528be['sp']['style'][_0x3016dd(0x205)]=_0x1ccb3a['on']?_0x273fbd[_0x3016dd(0xd19)]:_0x3016dd(0x64f)+'f5');if(_0x5528be['fx'])_0x5528be['fx'][_0x3016dd(0xc1b)]=String(_0x1ccb3a[_0x3016dd(0x666)+'r']);if(_0x5528be['fv'])_0x5528be['fv'][_0x3016dd(0x4da)+_0x3016dd(0x762)+'t']=_0x1ccb3a['facto'+'r'][_0x3016dd(0xb61)+'ed'](0x166b+0x2341+-0x39ab)+'x';}else return _0x98d526[_0x3016dd(0x367)](_0x3bf4c7[_0x3016dd(0xd0a)],_0x2852a6[_0x3016dd(0xb7a)+'ge'],_0x51ec3e(_0x55996d[_0x3016dd(0x21d)]||'')['split']('\x0a')['slice'](0x1da+0x1d*0x9e+0x10*-0x13c,-0x2266*-0x1+0x23a4+-0x4606)[_0x3016dd(0x713)](_0x3bf4c7['wwMIQ'])),{'pos':null,'posAt':null,'candidates':0x0,'cluster':0x0,'groups':0x0,'discarded':0x0,'ambiguous':![],'reach':0x0};}}function _0x4000cf(_0x38c8aa){var _0x12d6e9=_0x50f913,_0x56086a=_0x2211a2();if(!_0x56086a||!_0x56086a['st'])return;try{if(_0x12d6e9(0x97d)!==_0x273fbd['UuriX']){if(!_0x273fbd[_0x12d6e9(0x390)](_0x2524f3)&&!_0x65b67e){if(_0x56086a['el'])_0x56086a['el']['style']['displ'+'ay']='none';return;}if(_0x56086a['el'])_0x56086a['el'][_0x12d6e9(0x481)][_0x12d6e9(0x555)+'ay']='';var _0x1b2475=Object[_0x12d6e9(0x5f2)](_0x38c8aa&&_0x38c8aa[_0x12d6e9(0x38e)+'nces']||{})[_0x12d6e9(0x4f2)+'h'],_0x7d4942=_0x38c8aa&&_0x38c8aa['esp']||null,_0x521059=_0x7d4942?_0x7d4942[_0x12d6e9(0xc66)+_0x12d6e9(0x410)]||-0x2dd*0x1+-0x33*-0x9d+-0x2*0xe35:0x12f2*-0x1+-0x1886+-0x8*-0x56f,_0x47c8aa=_0x7d4942?_0x7d4942[_0x12d6e9(0x938)+_0x12d6e9(0x3e4)]||0xeb2+0x1808+0x135d*-0x2:0x2598+-0xde+0xc3e*-0x3,_0x15e4e0=_0x2512bc?(_0x2512bc['buffe'+'r'][_0x12d6e9(0x52d)+_0x12d6e9(0x4f3)]/(0xe6715+0x12*0x5105+-0x4196f))[_0x12d6e9(0xb61)+'ed'](0x125c+-0x61*-0x15+-0x1a51)+'MB':'no-me'+'m',_0x522449=_0x273fbd[_0x12d6e9(0xb5e)](_0x273fbd[_0x12d6e9(0xb25)](_0x273fbd[_0x12d6e9(0x76e)]('v'+(_0x38c8aa&&_0x38c8aa['versi'+'on']||_0x462d02)+(_0x12d6e9(0x965)+_0x12d6e9(0x2e5))+(_0x38c8aa&&_0x38c8aa['hooks'+_0x12d6e9(0x3a6)+'ed']||0x1*-0x1ffc+-0x2561+0x455d),'/')+(_0x38c8aa&&_0x38c8aa[_0x12d6e9(0xbf2)+'Total']||-0x2188+0x45b*-0x4+-0x10fc*-0x3),_0x12d6e9(0xa88)+'s\x20'),_0x1b2475)+(_0x12d6e9(0x3bc)+'\x20')+_0x15e4e0+('\x20\x20wri'+_0x12d6e9(0x7fd))+_0x256bc0;_0x56086a['st'][_0x12d6e9(0x4da)+'onten'+'t']=_0x522449;var _0x24bbe2=_0x56086a['st2'];_0x24bbe2&&(_0x24bbe2[_0x12d6e9(0x4da)+'onten'+'t']=_0x521059>0x2*0x382+-0x497+-0x26d?_0x12d6e9(0xb1d)+_0x12d6e9(0xb09)+_0x521059+(_0x47c8aa?_0x273fbd['KAdFK'](_0x273fbd[_0x12d6e9(0xbef)](_0x273fbd[_0x12d6e9(0xcf8)],_0x47c8aa),_0x12d6e9(0xaa9)):'')+(_0x7d4942&&_0x7d4942[_0x12d6e9(0xc6d)+'a']?_0x12d6e9(0x2be)+'\x20'+_0x7d4942[_0x12d6e9(0xc6d)+'aFrom']:'\x20\x20cam'+'\x20-'):'no\x20en'+'emies'+'\x20yet\x20'+'(lobb'+'y?)\x20\x20'+_0x12d6e9(0xc85)+(_0x7d4942&&_0x7d4942[_0x12d6e9(0xc6d)+'a']?_0x7d4942['camer'+_0x12d6e9(0x48d)]:'-'),_0x24bbe2[_0x12d6e9(0x481)][_0x12d6e9(0x205)]=_0x521059>0xde5*0x1+-0x1984+0xb9f?'#7ee0'+'a8':_0x12d6e9(0x93c)+'99');}else return _0x3df142['o'];}catch(_0x2c9644){}}window['addEv'+_0x50f913(0xc38)+_0x50f913(0xb2c)+'r']('keydo'+'wn',function(_0x43d271){var _0x11c421=_0x50f913,_0x273c3b={'Rruks':_0x11c421(0x481),'jGubG':_0x273fbd['mSHOv'],'zuZNV':function(_0x22d48a,_0x1ba66d){return _0x22d48a+_0x1ba66d;}};if(!_0x43d271)return;try{if(_0x43d271[_0x11c421(0x214)]==='F9'){_0x43d271[_0x11c421(0x959)+_0x11c421(0x285)+_0x11c421(0xb52)](),_0x583866(_0x273fbd[_0x11c421(0x682)]);return;}if(_0x273fbd[_0x11c421(0xcb3)](_0x43d271[_0x11c421(0x214)],'F7')){_0x43d271[_0x11c421(0x959)+'ntDef'+_0x11c421(0xb52)](),_0x399c27(!_0x1ccb3a['on'],_0x1ccb3a[_0x11c421(0x666)+'r']);return;}if(_0x273fbd['kNpeT'](_0x43d271[_0x11c421(0x214)],'F8')){_0x43d271['preve'+_0x11c421(0x285)+_0x11c421(0xb52)](),_0x273fbd[_0x11c421(0x6c8)](_0x399c27,_0x1ccb3a['on'],_0x1ccb3a[_0x11c421(0x666)+'r']+(-0x1*-0x7c9+0x60a+-0xdd3+0.5));return;}if(_0x43d271['code']==='F6'){if(_0x11c421(0x1f0)!==_0x273fbd['vhyaa']){var _0x16a050=('4|2|1'+'|3|0')[_0x11c421(0x75c)]('|'),_0x30d561=-0x93f+0x1cdf+0x274*-0x8;while(!![]){switch(_0x16a050[_0x30d561++]){case'0':try{if(!_0x2cf823[_0x11c421(0x5b1)+_0x11c421(0x656)+'ById']('sakur'+'a-sw-'+'v2-cs'+'s')){var _0x4439fb=_0x71c0a8[_0x11c421(0x72f)+_0x11c421(0x224)+'ent'](_0x273c3b['Rruks']);_0x4439fb['id']='sakur'+_0x11c421(0x694)+'v2-cs'+'s',_0x4439fb[_0x11c421(0x4da)+'onten'+'t']='#saku'+_0x11c421(0x34a)+_0x11c421(0x937)+_0x11c421(0xc64)+_0x11c421(0xd1b)+'}',(_0x1519a0['head']||_0x1a9475[_0x11c421(0x1c2)+'entEl'+_0x11c421(0x656)])[_0x11c421(0x786)+_0x11c421(0x31e)+'d'](_0x4439fb);}return _0x3efb8e=_0x174de7['creat'+'eElem'+'ent']('div'),_0x3efb8e['id']=_0x273c3b[_0x11c421(0xc5a)],_0x1e63fa[_0x11c421(0x1af)][_0x11c421(0x786)+'dChil'+'d'](_0x3efb8e),_0x3efb8e;}catch(_0xce8d07){return null;}continue;case'1':if(_0x3efb8e)return _0x3efb8e;continue;case'2':var _0x3efb8e=_0x5d3dc9[_0x11c421(0x5b1)+_0x11c421(0x656)+_0x11c421(0xbc0)]('sakur'+'a-sw-'+'v2');continue;case'3':if(!_0x580860[_0x11c421(0x1af)]||!_0x2af95d['body']['appen'+'dChil'+'d'])return null;continue;case'4':if(_0x95235e())return null;continue;}break;}}else{_0x43d271[_0x11c421(0x959)+_0x11c421(0x285)+'ault'](),_0x399c27(_0x1ccb3a['on'],_0x273fbd[_0x11c421(0x637)](_0x1ccb3a[_0x11c421(0x666)+'r'],-0x19b*-0x2+0x2*0x408+-0xd*0xde+0.5));return;}}if(_0x273fbd['XKJkB'](_0x43d271[_0x11c421(0x214)],'Inser'+'t')){_0x43d271[_0x11c421(0x959)+_0x11c421(0x285)+'ault'](),_0x436da3(!_0x5c60f3['open']);return;}if(_0x273fbd[_0x11c421(0xaaa)](_0x43d271['code'],_0x273fbd[_0x11c421(0x996)])){if(_0x273fbd[_0x11c421(0x691)](_0x273fbd[_0x11c421(0x9e6)],'kKMcb'))_0x45b107[_0x11c421(0x481)][_0x11c421(0x1a0)]=_0x273c3b['zuZNV'](_0x170627['pos']['x'],'px'),_0x10d83d[_0x11c421(0x481)][_0x11c421(0x4c0)]=_0xe06757[_0x11c421(0x614)]['y']+'px',_0x56f70f[_0x11c421(0x481)]['right']=_0x11c421(0x567),_0x1116e7['style']['botto'+'m']='auto';else{_0x43d271[_0x11c421(0x959)+_0x11c421(0x285)+_0x11c421(0xb52)](),_0x2ce298[_0x11c421(0x9e8)]=Math['min'](-0x1524+-0x24e8+0x3a98,_0x273fbd['WXFpL'](_0x2ce298['fov'],-0x19a+0x1*0xb47+-0x9*0x113)),_0x273fbd['fuarh'](_0x4be5f2);return;}}if(_0x43d271[_0x11c421(0x214)]===_0x273fbd[_0x11c421(0x3b2)]){_0x43d271[_0x11c421(0x959)+'ntDef'+'ault'](),_0x2ce298['fov']=Math['max'](-0x19b6+-0x3f5*0x2+0x21be,_0x2ce298[_0x11c421(0x9e8)]-(-0x5b*-0x46+-0x1557+-0x5*0xb5)),_0x4be5f2();return;}}catch(_0x32304b){}},!![]);var _0x130958={'on':!![],'span':0x50,'boxes':![]};function _0x5d9499(){var _0x18a3d6=_0x50f913;if('hMnPw'===_0x18a3d6(0xbee))return null;else{var _0x9b0c04=_0x17f483['Photo'+'nNetw'+_0x18a3d6(0x3c9)+'nc']||{},_0x97e1fa=Object[_0x18a3d6(0x5f2)](_0x9b0c04);for(var _0x7aecd3=0x14b*-0x1c+0x1*0x1de7+0x64d;_0x7aecd3<_0x97e1fa[_0x18a3d6(0x4f2)+'h'];_0x7aecd3++){var _0x45963d=_0x9b0c04[_0x97e1fa[_0x7aecd3]][_0x18a3d6(0xccb)],_0x5390d3=_0x273fbd['BOXFi'](_0x131249,_0x45963d+(-0x3*0xdb+-0x1c*-0x4d+0x5ab*-0x1),_0x273fbd['woWVZ']);if(!_0x5390d3)continue;var _0x283077=_0x1659e8['Mouse'+'Look']||[],_0x1b127c={'mouseLook':_0x273fbd[_0x18a3d6(0x36c)]('0x',_0x273fbd['qgwXU'](_0x5390d3,0x11*0x4f+0x1e95+0x11ea*-0x2)[_0x18a3d6(0x433)+'ing'](0x1*0x22cd+-0x3bd+-0x80*0x3e)),'floats':{},'camera':null,'vec2':null};for(var _0x2d077b=0x1c39+-0x33+-0x1c06;_0x2d077b<_0x283077[_0x18a3d6(0x4f2)+'h'];_0x2d077b++){if(_0x273fbd[_0x18a3d6(0x773)](_0x273fbd[_0x18a3d6(0x22e)],_0x273fbd[_0x18a3d6(0x413)])){if(_0x283077[_0x2d077b][0x24b*0x6+0x731+0xe*-0x17f]!=='f32')continue;_0x1b127c[_0x18a3d6(0x500)+'s']['0x'+_0x283077[_0x2d077b][0xdca+-0xbf7+-0x1*0x1d3][_0x18a3d6(0x433)+'ing'](0x1*-0x423+-0xfd0*-0x2+0x19d*-0x11)]=_0x131249(_0x273fbd[_0x18a3d6(0xb83)](_0x5390d3,_0x283077[_0x2d077b][-0x2391+0x3*0x88d+0x9ea]),_0x273fbd[_0x18a3d6(0x971)]);}else _0x37da6b[_0x18a3d6(0x9e8)]=_0x19ad83,_0x2e736e();}var _0x2d22c2=_0x131249(_0x273fbd['GWUWk'](_0x5390d3,-0x1bd+-0x2*0x766+-0x10b5*-0x1),_0x18a3d6(0x4ec));if(_0x2d22c2)_0x1b127c[_0x18a3d6(0xc6d)+'a']='0x'+_0x273fbd[_0x18a3d6(0x891)](_0x2d22c2,0x418+0x1*-0x17b5+0x139d*0x1)[_0x18a3d6(0x433)+'ing'](0x1b4c+-0x25*-0x10a+-0x41ae);var _0x1b6167=_0x273fbd[_0x18a3d6(0x42f)](_0x5dda32,_0x5390d3,0x31c*-0x1+0x22c2+-0x1f5e,0x22a3+0x85*0x1b+-0x81c*0x6);if(_0x1b6167)_0x1b127c[_0x18a3d6(0x558)]=_0x1b6167;return _0x1b127c;}return null;}}var _0x468175='sakur'+'a-sw-'+_0x50f913(0x9e8),_0x2ce298={'pitch':null,'yaw':null,'fov':0x5a,'known':![]};try{var _0xf39534=localStorage[_0x50f913(0x743)+'em'](_0x468175);if(_0xf39534)_0x2ce298['fov']=Math['min'](-0x7*0x191+-0x1*-0x144+0xa3f,Math['max'](-0x217b*-0x1+-0xebb+0x12*-0x109,_0x273fbd[_0x50f913(0x565)](parseFloat,_0xf39534)||-0x1fa2+-0x4f0*-0x3+-0x274*-0x7));}catch(_0x5fc8c8){}function _0x4be5f2(){var _0x20a30a=_0x50f913;if(_0x273fbd[_0x20a30a(0x253)](_0x20a30a(0x354),'Yyykd'))try{localStorage[_0x20a30a(0x837)+'em'](_0x468175,_0x273fbd[_0x20a30a(0xa98)](String,_0x2ce298[_0x20a30a(0x9e8)]));}catch(_0x38eaa3){}else return _0x21000f['round'](_0x58c752*(-0x5*0x575+0x1ab9+-0xf4*-0x1))/(0xb*-0x123+0x2a+-0xcbb*-0x1);}var _0x4cc3eb=_0x50f913(0xb39)+_0x50f913(0x694)+_0x50f913(0x798)+_0x50f913(0x782),_0x5e3404=![];try{_0x273fbd[_0x50f913(0xb16)](localStorage[_0x50f913(0x743)+'em'](_0x4cc3eb),null)&&(localStorage['remov'+_0x50f913(0x2e6)](_0x4cc3eb),_0x5e3404=!![]);}catch(_0x52b7fa){}var _0x469d69=0x13*-0x7c+0x14*-0x120+0x1fdc,_0x560ba0=0xa53+-0x2398*-0x1+0x9*-0x517,_0x469d69=0x895*0x4+0x1c1*0x7+-0x2e73,_0x560ba0=-0xbe1*0x3+0x12eb*0x1+0x10d4,_0x268be7={'pitch':null,'yaw':null,'identified':![],'why':_0x273fbd['YUSdu'],'source':null,'yawGetter':null,'pitchGetter':null,'getters':[]};function _0xb98203(_0x13ae07){var _0x642aeb=_0x50f913,_0x4c7630=null,_0x3775b1=-0x1f5*0xa+0x1b41*0x1+0x119*-0x7;for(var _0xe1e070 in _0x17f1c0){var _0x2fcafa=_0x17f1c0[_0xe1e070];if(!_0x2fcafa['hits']||_0x2fcafa['last']===null)continue;var _0x308887=_0x273fbd[_0x642aeb(0xbfb)](_0x131249,_0x273fbd[_0x642aeb(0xa92)](_0x3c308b,_0x13ae07),'f32');if(typeof _0x308887!==_0x642aeb(0x2a2)+'r')continue;Math[_0x642aeb(0xc83)](_0x273fbd[_0x642aeb(0xcdb)](_0x2fcafa['last'],_0x308887))<0x15e7+0x11*0x12b+0x85a*-0x5+0.001&&_0x273fbd[_0x642aeb(0x2fb)](_0x2fcafa[_0x642aeb(0x740)],_0x3775b1)&&(_0x4c7630=_0xe1e070,_0x3775b1=_0x2fcafa[_0x642aeb(0x740)]);}return _0x4c7630;}function _0x1e86b3(_0x27937e){var _0x19fddc=_0x50f913,_0x4f28f2={'jKowL':function(_0x363194,_0x50384d){return _0x363194===_0x50384d;},'nohBH':function(_0x138390,_0x211898){var _0x58c6fa=_0x36c9;return _0x273fbd[_0x58c6fa(0x54f)](_0x138390,_0x211898);},'XeSrD':_0x273fbd[_0x19fddc(0x94b)],'GHtCv':_0x273fbd[_0x19fddc(0x268)],'VOaQk':function(_0x21d315,_0x2c16fe){return _0x21d315(_0x2c16fe);}},_0x490382=[],_0x4bc0c8=_0x1659e8[_0x19fddc(0x2c3)+'Look']||[];for(var _0x3b8a7f in _0x17f1c0){var _0x2bd5c3=_0x17f1c0[_0x3b8a7f];if(!_0x2bd5c3['hits'])continue;var _0x5d0720=null;for(var _0x27dbf9=-0xac9+0x1*-0x25fd+0x30c6;_0x27dbf9<_0x4bc0c8[_0x19fddc(0x4f2)+'h'];_0x27dbf9++){if(_0x273fbd[_0x19fddc(0x97f)]!==_0x273fbd['xHZaf']){var _0x42e9b6=_0x4ede07['on'];_0x358988['on']=!!_0x343d90;_0x1849b5['on']&&!_0x42e9b6&&(_0x4f28f2[_0x19fddc(0x5da)](_0x3688bd,_0x470008)||_0x18fa1b===null||_0x4f28f2[_0x19fddc(0x6e0)](_0x1580cd,_0x42418e)===-0x9f2+-0xb*-0x355+-0x1ab4)&&(_0x267ffb=_0x4d4aac);_0x490876[_0x19fddc(0x666)+'r']=_0x42b612[_0x19fddc(0xa59)](_0x5ce1b9[_0x19fddc(0xbb7)],_0x5e2ae5[_0x19fddc(0xbb7)](_0x10db45[_0x19fddc(0xa59)],_0x123c02(_0x51f134)||-0xade+0xd05*0x1+-0x2*0x113));if(!_0x953530['on'])_0x547841={};var _0x190a7f=_0x18baea();if(_0x190a7f){_0x190a7f['sp']&&(_0x190a7f['sp'][_0x19fddc(0x4da)+_0x19fddc(0x762)+'t']=_0x4a4f84['on']?_0x19fddc(0x8e6)+_0x19fddc(0x698):_0x4f28f2['XeSrD'],_0x190a7f['sp']['style']['backg'+_0x19fddc(0x1e3)]=_0x24d723['on']?_0x565ed6:_0x19fddc(0x568)+_0x19fddc(0x5f3)+'t',_0x190a7f['sp']['style'][_0x19fddc(0x205)]=_0x5667ca['on']?'#2a0f'+'1b':_0x4f28f2[_0x19fddc(0xae5)]);if(_0x190a7f['fx'])_0x190a7f['fx'][_0x19fddc(0xc1b)]=_0x4f28f2['VOaQk'](_0x3800f7,_0x5b4869[_0x19fddc(0x666)+'r']);if(_0x190a7f['fv'])_0x190a7f['fv']['textC'+'onten'+'t']=_0x44406f['facto'+'r']['toFix'+'ed'](-0x1cf*-0x2+-0xb56+0x7b9)+'x';}}else{if(_0x4bc0c8[_0x27dbf9][-0x1956+-0x1*0x1f1f+0x323*0x12]!==_0x273fbd[_0x19fddc(0x971)])continue;var _0x567420=_0x131249(_0x27937e+_0x4bc0c8[_0x27dbf9][-0x4f*-0x50+-0x2*-0x1069+0x1*-0x3982],'f32');if(typeof _0x567420===_0x273fbd[_0x19fddc(0xc7f)]&&Math['abs'](_0x273fbd['sjbaI'](_0x567420,_0x2bd5c3['last']))<-0x8*-0x489+-0x3*0x10d+-0x2121+0.001){_0x5d0720='0x'+_0x4bc0c8[_0x27dbf9][-0x1ae*-0xd+0x1176+-0x274c][_0x19fddc(0x433)+'ing'](-0x2*0x137b+0x44*0x53+0x10fa);break;}}}_0x490382['push']({'name':_0x3b8a7f,'value':_0x2bd5c3['last'],'matches':_0x5d0720,'hits':_0x2bd5c3['hits'],'set':_0x2bd5c3[_0x19fddc(0x855)+'ts']?_0x2bd5c3['setLa'+'st']:null});}return _0x490382;}function _0x5f42a2(){var _0x4471d2=_0x50f913,_0x686604=_0x273fbd['MNGvb'](_0x5d9499);if(!_0x686604||!_0x686604[_0x4471d2(0x6e2)+_0x4471d2(0x33b)]){if(_0x273fbd['FYgXG']('WEczG',_0x273fbd['XwAGK'])){var _0x35235c=_0x2807a6[_0x4471d2(0xb9f)+'Insta'+_0x4471d2(0x946)]||_0x4d3eeb['unity'+_0x4471d2(0x533)]||_0x32d7fe[_0x4471d2(0x20f)];if(_0x35235c)return _0x30073b['sourc'+'e']=_0x4471d2(0xd6e)+'w\x20glo'+_0x4471d2(0x42e),_0x35235c;}else return _0x268be7[_0x4471d2(0xbd2)+_0x4471d2(0x48e)]=![],_0x268be7['why']=_0x4471d2(0x194)+_0x4471d2(0x692)+_0x4471d2(0x1b7)+'t',null;}var _0x3a10a9=parseInt(_0x686604['mouse'+_0x4471d2(0x33b)],0x5*-0x152+0x104d*0x1+-0x9a3*0x1);if(_0x3c308b!==_0x3a10a9)_0x3c308b=_0x3a10a9;_0x268be7['gette'+'rs']=_0x1e86b3(_0x3a10a9);var _0x4be3aa=_0x3a80c5(),_0x519935=_0xb98203(_0x469d69),_0x214868=null;for(var _0x166de6 in _0x17f1c0){if(_0x166de6===_0x519935)continue;var _0x317bed=_0x17f1c0[_0x166de6];if(!_0x317bed[_0x4471d2(0x740)]||_0x317bed[_0x4471d2(0x325)]===null)continue;if(_0x317bed[_0x4471d2(0x325)]>=-(0xe3e+-0x1834+-0xdc*-0xc)&&_0x317bed['last']<=-0x81f+-0x1*0x1ddb+0x2654){if(_0x4471d2(0xbf0)!==_0x4471d2(0x541)){_0x214868=_0x166de6;break;}else _0x5efbc3(_0x1bc423);}}_0x268be7['yawGe'+'tter']=_0x519935,_0x268be7[_0x4471d2(0x534)+'Gette'+'r']=_0x214868;var _0x489062,_0x47b693;if(_0x4be3aa&&_0x4be3aa[_0x4471d2(0x534)]!==null)_0x47b693=_0x4be3aa[_0x4471d2(0x534)],_0x489062=_0x4be3aa['yaw'],_0x268be7[_0x4471d2(0x704)+'e']=_0x273fbd[_0x4471d2(0x321)](_0x273fbd['xdJBu'],_0x4be3aa['order'])+')';else _0x519935?(_0x489062=_0x17f1c0[_0x519935]['last'],_0x268be7[_0x4471d2(0x704)+'e']=_0x4471d2(0x643)+'r',_0x47b693=_0x214868?_0x17f1c0[_0x214868][_0x4471d2(0x325)]:_0x131249(_0x3a10a9+_0x560ba0,'f32')):(_0x489062=_0x131249(_0x3a10a9+_0x469d69,_0x273fbd[_0x4471d2(0x971)]),_0x47b693=_0x131249(_0x273fbd['bVCRC'](_0x3a10a9,_0x560ba0),_0x4471d2(0xd5a)),_0x268be7[_0x4471d2(0x704)+'e']='field'+_0x4471d2(0xa1a)+'\x20(gue'+_0x4471d2(0xc77));_0x268be7['rawYa'+'w']=_0x489062,_0x268be7['rawPi'+_0x4471d2(0x6eb)]=_0x47b693;if(typeof _0x489062!==_0x4471d2(0x2a2)+'r'||!_0x273fbd['cPWTc'](isFinite,_0x489062)||_0x273fbd[_0x4471d2(0xb86)](typeof _0x47b693,'numbe'+'r')||!isFinite(_0x47b693))return _0x268be7['ident'+_0x4471d2(0x48e)]=![],_0x268be7['why']=_0x273fbd[_0x4471d2(0xd37)],null;if(_0x273fbd[_0x4471d2(0xb56)](_0x47b693,-(0xcdf+-0x1d56+0x10d1))||_0x47b693>-0x121e+0x1303+-0x8b)return _0x268be7['ident'+_0x4471d2(0x48e)]=![],_0x268be7['why']=_0x273fbd[_0x4471d2(0x853)](_0x273fbd[_0x4471d2(0x55c)]('pitch'+'\x20',Math[_0x4471d2(0x1e3)](_0x47b693)),_0x273fbd[_0x4471d2(0x7f2)]),null;return _0x268be7[_0x4471d2(0xc70)]='',_0x268be7[_0x4471d2(0xbd2)+_0x4471d2(0x48e)]=!![],_0x268be7['pitch']=_0x47b693,_0x268be7['yaw']=_0x489062,_0x268be7;}function _0x49ef55(_0xa5df7b,_0x197e6a,_0x3fdcc7,_0x11cf90){var _0x285490=_0x50f913,_0x56ab65=(_0x285490(0xd05)+'2|13|'+_0x285490(0xc96)+'5|1|8'+_0x285490(0x19d)+_0x285490(0xbdd)+_0x285490(0x36d)+_0x285490(0xc4c)+_0x285490(0x217))['split']('|'),_0x42e272=-0x3ec+0x24b8+0x2*-0x1066;while(!![]){switch(_0x56ab65[_0x42e272++]){case'0':var _0x5f0c68=_0x273fbd[_0x285490(0x90f)](_0x273fbd[_0x285490(0x564)](_0x4bbd7a,_0x21dc74),_0x273fbd[_0x285490(0xb07)](_0x3db1f4,_0x49030f));continue;case'1':var _0x21dc74=_0x273fbd['pIrlV'](_0x273fbd['WQBof'](_0x39bf82*_0x581ed6,_0x1cefbf*_0x1550d3),_0x31e55e*_0x5bb4b2);continue;case'2':var _0x84ec89=_0x273fbd[_0x285490(0x61a)](_0x461f02[_0x285490(0x534)],Math['PI'])/(0xe57*-0x1+-0x18*0x23+0x1253),_0x434f61=_0x273fbd['XMNcy'](_0x273fbd[_0x285490(0xc43)](_0x461f02[_0x285490(0x6fb)],Math['PI']),0x590+-0x57e+0x2*0x51);continue;case'3':var _0x461f02=_0x5f42a2();continue;case'4':var _0x464651=_0x273fbd['WOYEh'](_0x273fbd['vOuiT'](_0x2ce298[_0x285490(0x9e8)],Math['PI']),-0x10*-0xb9+0x1e2*0x6+-0x8*0x2c5);continue;case'5':var _0x39bf82=_0x197e6a[0x7c5+-0x8*0x2ea+-0x1*-0xf8b]-_0xa5df7b[0xecb+0x13aa+-0x2275*0x1],_0x1cefbf=_0x273fbd[_0x285490(0xbe7)](_0x197e6a[-0x1*0xcf7+0x198+0x68*0x1c],_0xa5df7b[0x1188+-0x127+-0x1060]),_0x31e55e=_0x273fbd[_0x285490(0xa0f)](_0x197e6a[0x849+-0x2*0xb08+0xdc9*0x1],_0xa5df7b[0x1c91+-0x1e52+0x1*0x1c3]);continue;case'6':var _0x49030f=_0x273fbd[_0x285490(0x2dd)](_0x3fdcc7,_0x11cf90);continue;case'7':var _0x581ed6=Math['sin'](_0x434f61)*_0xfcffa,_0x1550d3=-Math[_0x285490(0xcc8)](_0x84ec89),_0x5bb4b2=_0x273fbd['agTox'](Math['cos'](_0x434f61),_0xfcffa);continue;case'8':if(_0x273fbd[_0x285490(0xa30)](_0x21dc74,-0x2366+0x151e+0x2*0x724+0.05))return null;continue;case'9':var _0x155e18=_0x273fbd[_0x285490(0x564)](_0x5eb9b6,_0x21dc74)/_0x3db1f4;continue;case'10':if(_0x273fbd[_0x285490(0xbff)](_0x5f0c68,-(-0x14e2+-0x1*-0xc+-0xb*-0x1e5+0.6000000000000001))||_0x273fbd['SprCH'](_0x5f0c68,-0x8*0x3c7+0x27*0x1+0x1e12+0.6000000000000001)||_0x155e18<-(0x174c+0x1f66+-0x27*0x167+0.6000000000000001)||_0x155e18>0x492+-0x1*0x2bd+-0x1d4+0.6000000000000001)return null;continue;case'11':var _0x3db1f4=Math['tan'](_0x464651/(0x1a6+0x61*0x11+-0x815));continue;case'12':return{'x':_0x273fbd['CaaVQ'](_0x273fbd[_0x285490(0xb07)](_0x5f0c68,0x66*-0x4b+-0xc2*0x27+0x3b70+0.5)+(0x5*-0x513+0x2008+-0x6a9+0.5),_0x3fdcc7),'y':_0x273fbd[_0x285490(0xb5b)](-0x2695+0x11*0x1b8+0x95d+0.5-_0x273fbd['xNEmw'](_0x155e18,0x387*0x7+-0x57c*0x1+0x3*-0x667+0.5),_0x11cf90),'z':_0x21dc74};case'13':var _0xfcffa=Math[_0x285490(0xb10)](_0x84ec89);continue;case'14':var _0x4bbd7a=_0x39bf82*_0x4c82c1+_0x1cefbf*_0x17c6da+_0x31e55e*_0x3be46f;continue;case'15':var _0x5eb9b6=_0x273fbd[_0x285490(0xb7d)](_0x39bf82*(_0x1550d3*_0x3be46f-_0x273fbd['CaaVQ'](_0x5bb4b2,_0x17c6da)),_0x1cefbf*(_0x5bb4b2*_0x4c82c1-_0x581ed6*_0x3be46f))+_0x31e55e*(_0x581ed6*_0x17c6da-_0x1550d3*_0x4c82c1);continue;case'16':if(!_0x461f02)return null;continue;case'17':var _0x4c82c1=_0x5bb4b2,_0x17c6da=0x13*0x9+-0x1277*0x1+-0x86*-0x22,_0x3be46f=-_0x581ed6;continue;}break;}}var _0x5c60f3={'open':![],'cat':_0x273fbd['dDVkT'],'built':![],'root':null,'cols':null,'head':null,'sub':null,'syncs':[],'pos':null},_0x30b58f=_0x273fbd['AAEFE'],_0x65b67e=null,_0x26f4a2=[{'id':_0x50f913(0x37b)+'t','label':_0x273fbd[_0x50f913(0xd00)]},{'id':_0x273fbd['REjZd'],'label':_0x273fbd[_0x50f913(0x972)]},{'id':_0x273fbd[_0x50f913(0x455)],'label':'VAL'},{'id':_0x50f913(0x367),'label':_0x50f913(0xb46)}],_0x4453a1=_0x273fbd['YPQLA'](_0x273fbd[_0x50f913(0xb5e)](_0x273fbd[_0x50f913(0xb25)](_0x273fbd[_0x50f913(0x6c4)](_0x273fbd[_0x50f913(0x7cb)](_0x273fbd[_0x50f913(0x76e)](_0x273fbd['sbBfj'](_0x273fbd['gUigI'](_0x273fbd[_0x50f913(0x43f)](_0x273fbd[_0x50f913(0x4a7)](_0x273fbd[_0x50f913(0xb5e)](_0x273fbd[_0x50f913(0x215)](_0x273fbd['vkWtL'](_0x273fbd[_0x50f913(0xba5)](_0x273fbd[_0x50f913(0x321)](_0x273fbd[_0x50f913(0xc1c)](_0x273fbd[_0x50f913(0x3bb)](_0x273fbd[_0x50f913(0x1c8)](_0x273fbd[_0x50f913(0x897)](_0x273fbd['JzPME'](_0x273fbd['vXNui'](_0x273fbd[_0x50f913(0xc65)](_0x273fbd['rqlsb'](_0x273fbd[_0x50f913(0xb98)](_0x273fbd[_0x50f913(0xb25)](_0x273fbd[_0x50f913(0xd4b)](_0x273fbd[_0x50f913(0xd12)](_0x273fbd[_0x50f913(0xceb)](_0x273fbd['JqwTG'](_0x273fbd['NRinc'](_0x273fbd[_0x50f913(0xb82)](_0x273fbd[_0x50f913(0xccd)](_0x50f913(0xca4)+_0x50f913(0xacb)+_0x50f913(0x3b9)+'ot{al'+_0x50f913(0x4f6)+_0x50f913(0xc97)+(_0x50f913(0xca4)+'ra-me'+_0x50f913(0x3b9)+_0x50f913(0x4bd)+_0x50f913(0x994)+_0x50f913(0x748)+'ition'+_0x50f913(0x6ac)+_0x50f913(0x7c5)+'ht:24'+_0x50f913(0x857)+_0x50f913(0x46f)+'24px;'+'width'+_0x50f913(0xc3a)+'620px'+',calc'+_0x50f913(0x9cb)+'w\x20-\x204'+_0x50f913(0xd31)+_0x50f913(0x74f)+_0x50f913(0x463)+_0x50f913(0x8e2)+'(500p'+_0x50f913(0x618)+_0x50f913(0xa87)+_0x50f913(0x74a)+'48px)'+');')+(_0x50f913(0x555)+_0x50f913(0xa1c)+_0x50f913(0x6cd)+'p:10p'+_0x50f913(0xd73)+'ding:'+_0x50f913(0x9d9)+'borde'+'r-rad'+_0x50f913(0xcf3)+'2px;p'+_0x50f913(0x859)+'r-eve'+_0x50f913(0x797)+'uto;z'+'-inde'+'x:214'+_0x50f913(0x863)+_0x50f913(0x557))+(_0x50f913(0x754)+_0x50f913(0x1e3)+_0x50f913(0x6bb)+_0x50f913(0xa25)+_0x50f913(0x80e)+_0x50f913(0x800)+'backd'+_0x50f913(0xa3f)+_0x50f913(0x9eb)+':blur'+_0x50f913(0x2f2)+')\x20sat'+'urate'+'(150%'+_0x50f913(0xb80)+_0x50f913(0x3eb)+'backd'+_0x50f913(0xa3f)+_0x50f913(0x9eb)+_0x50f913(0xad5)+'(22px'+')\x20sat'+_0x50f913(0xa49)+_0x50f913(0x599)+');')+(_0x50f913(0x7d3)+'hadow'+_0x50f913(0x53d)+'0\x201px'+_0x50f913(0x3a9)+_0x50f913(0xc4b)+'255,2'+'55,.0'+'6),in'+_0x50f913(0x2ef)+_0x50f913(0xb4d)+_0x50f913(0x645)+'a(255'+',255,'+_0x50f913(0x18e)+_0x50f913(0x693)+_0x50f913(0x3c4)+'\x2080px'+_0x50f913(0x3a9)+'(0,0,'+'0,.55'+');'),_0x273fbd['GpwYR'])+(_0x50f913(0x205)+':#f6e'+_0x50f913(0xd0e)+'ont-s'+_0x50f913(0x5ff)+_0x50f913(0x4d2)+_0x50f913(0x96d)+'amily'+_0x50f913(0x921)+_0x50f913(0x464)+_0x50f913(0x9c6)+_0x50f913(0x8a4)+'syste'+_0x50f913(0x24a)+'sans-'+'serif'+';}')+(_0x50f913(0xca4)+'ra-me'+_0x50f913(0x3b9)+_0x50f913(0x4bd)+'-pane'+_0x50f913(0xcba)+_0x50f913(0x4ce)+'acity'+_0x50f913(0x87c)+_0x50f913(0x3c6)+'rm:no'+_0x50f913(0xb3d)+_0x50f913(0x27c)+'-even'+_0x50f913(0xbd8)+'to;}')+_0x273fbd[_0x50f913(0x238)],_0x273fbd[_0x50f913(0xd43)]),_0x273fbd[_0x50f913(0xab8)]),_0x273fbd[_0x50f913(0x579)]),_0x273fbd[_0x50f913(0xb9c)])+_0x273fbd[_0x50f913(0x3bd)]+(_0x50f913(0x375)+'ab:ho'+_0x50f913(0xabd)+'olor:'+_0x50f913(0x9c3)+'246,2'+_0x50f913(0x7e0)+_0x50f913(0x810)+';}'),_0x50f913(0x375)+'ab.ac'+_0x50f913(0x228)+_0x50f913(0x205)+_0x50f913(0x772)+_0x50f913(0xa11)+'ackgr'+'ound:'+'rgba('+_0x50f913(0xd78)+_0x50f913(0x602)+'7,.1)'+';}'),_0x50f913(0x3c2)+_0x50f913(0x67e)+_0x50f913(0x55e)+_0x50f913(0xa24)+_0x50f913(0xae2)+_0x50f913(0x99d)+_0x50f913(0x259)+_0x50f913(0xa01)+';flex'+'-dire'+'ction'+':colu'+_0x50f913(0x587))+(_0x50f913(0x375)+_0x50f913(0xc86)+_0x50f913(0x259)+_0x50f913(0xa01)+_0x50f913(0xbe5)+_0x50f913(0x5d2)+_0x50f913(0x8ff)+'nter;'+_0x50f913(0x2d9)+_0x50f913(0x4f4)+_0x50f913(0x2c7)+_0x50f913(0x86d)+'\x206px\x20'+_0x50f913(0x5c4)+_0x50f913(0x3dd)+'selec'+'t:non'+'e;}'),_0x273fbd['xPmri'])+_0x273fbd['DhKsY'],_0x50f913(0xc34)+'ub{fo'+'nt-si'+'ze:11'+'px;op'+_0x50f913(0x6b3)+_0x50f913(0x3dc)),_0x273fbd[_0x50f913(0x613)])+('color'+_0x50f913(0x6c7)+_0x50f913(0x9b0)+'pacit'+'y:.45'+_0x50f913(0x507)+_0x50f913(0x8b4)+_0x50f913(0x27c)+';}')+('.mn-c'+_0x50f913(0x528)+_0x50f913(0x995)+'{opac'+_0x50f913(0x40d)+_0x50f913(0x9e9)+_0x50f913(0xc12)+_0x50f913(0xc39)+_0x50f913(0x393)+_0x50f913(0xcb2)+_0x50f913(0x18e)+_0x50f913(0x286)),_0x50f913(0xac5)+_0x50f913(0x712)+'svg{w'+'idth:'+_0x50f913(0xbe3)+_0x50f913(0x463)+_0x50f913(0x417)+'x;fil'+_0x50f913(0x414)+'e;str'+'oke:c'+_0x50f913(0x7f8)+_0x50f913(0x9d1)+_0x50f913(0x883)+_0x50f913(0x4ac)+'idth:'+_0x50f913(0x322)+_0x50f913(0x212)+_0x50f913(0x483)+_0x50f913(0x411)+_0x50f913(0x52a)),_0x273fbd[_0x50f913(0xadc)])+(_0x50f913(0xaf5)+_0x50f913(0x63f)+_0x50f913(0x333)+_0x50f913(0x514)+'ign-c'+'onten'+_0x50f913(0x497)+_0x50f913(0x9d5)+'p:10p'+'x;pad'+'ding:'+_0x50f913(0xba8)+'\x206px\x20'+'0;}')+('.mn-c'+'ols::'+_0x50f913(0x5e5)+_0x50f913(0xd1e)+'rollb'+_0x50f913(0xbd7)+_0x50f913(0x814)+_0x50f913(0x298)),_0x50f913(0xac5)+_0x50f913(0xa14)+'-webk'+_0x50f913(0xd1e)+_0x50f913(0x1bf)+'ar-th'+'umb{b'+_0x50f913(0x451)+_0x50f913(0xbdc)+'rgba('+_0x50f913(0x59e)+'55,25'+_0x50f913(0x43e)+_0x50f913(0x771)+_0x50f913(0x90a)+_0x50f913(0x56e)+':4px;'+'}')+_0x273fbd[_0x50f913(0x38d)]+_0x273fbd[_0x50f913(0x2d3)],_0x273fbd[_0x50f913(0x737)]),_0x273fbd['bbtXA'])+_0x273fbd['OisBo'],_0x50f913(0xc8d)+_0x50f913(0x721)+'n\x20.sk'+_0x50f913(0x8e9)+_0x50f913(0xb45)+_0x50f913(0x48a)+_0x50f913(0x70e)+'olor:'+'#fff0'+_0x50f913(0x207)),'.sk-m'+_0x50f913(0x95d)+'paddi'+_0x50f913(0xa28)+_0x50f913(0x8ea)+'10px;'+'}')+('.sk-m'+'desc{'+_0x50f913(0xaaf)+'size:'+_0x50f913(0x679)+'opaci'+_0x50f913(0x3f4)+_0x50f913(0xce8)+_0x50f913(0x78a)+_0x50f913(0x46f)+_0x50f913(0x80d)+_0x50f913(0x8a0)+_0x50f913(0x7ef)+_0x50f913(0xbfd)+'wrap;'+'}'),_0x50f913(0xc8d)+'tl{di'+_0x50f913(0x259)+_0x50f913(0xa01)+';alig'+_0x50f913(0x5d2)+'ms:ce'+_0x50f913(0x4b5)+_0x50f913(0xbd1)+_0x50f913(0xa65)+_0x50f913(0x774)+_0x50f913(0x409)+_0x50f913(0x71c)+_0x50f913(0x3c1)+_0x50f913(0x98e)+_0x50f913(0x4e2)),'.sk-l'+'abel{'+_0x50f913(0xa60)+'1;col'+_0x50f913(0x98c)+'ba(24'+'6,238'+',242,'+'.75);'+'}'),_0x50f913(0x750)+'int{d'+'ispla'+_0x50f913(0x832)+'ck;fo'+_0x50f913(0xadb)+_0x50f913(0x81a)+'px;op'+_0x50f913(0x6b3)+_0x50f913(0x3dc)),_0x273fbd[_0x50f913(0x42b)]),_0x273fbd['aTjhD'])+_0x273fbd[_0x50f913(0x352)]+(_0x50f913(0xb01)+'witch'+_0x50f913(0x412)+_0x50f913(0x68a)+_0x50f913(0x8cc)+'true\x22'+_0x50f913(0x765)+_0x50f913(0x4ef)+'nd:rg'+'ba(25'+_0x50f913(0x911)+_0x50f913(0x6c1)+_0x50f913(0x92d)+'}'),_0x50f913(0xb01)+_0x50f913(0x2a9)+_0x50f913(0x412)+'-chec'+_0x50f913(0x8cc)+_0x50f913(0xb9e)+_0x50f913(0x9e3)+'ter{l'+_0x50f913(0x5c7)+'5px;b'+'ackgr'+'ound:'+_0x50f913(0x6c9)+_0x50f913(0x83e)),_0x50f913(0xc3c)+'ange{'+'displ'+'ay:fl'+_0x50f913(0x26c)+_0x50f913(0x30e)+_0x50f913(0x776)+'cente'+_0x50f913(0x7cc)+_0x50f913(0xbb2)+'}')+(_0x50f913(0xb01)+_0x50f913(0x935)+'{-web'+_0x50f913(0x92e)+_0x50f913(0x25a)+_0x50f913(0x819)+_0x50f913(0x446)+'appea'+'rance'+':none'+_0x50f913(0x3d3)+_0x50f913(0x526)+_0x50f913(0x291)+_0x50f913(0xd44)+'px;ba'+_0x50f913(0x27b)+_0x50f913(0x5e3)+'ransp'+'arent'+';}')+(_0x50f913(0xb01)+_0x50f913(0x935)+'::-we'+'bkit-'+_0x50f913(0x5cd)+_0x50f913(0x1a4)+'nable'+_0x50f913(0xbe8)+'k{hei'+_0x50f913(0x663)+'px;bo'+_0x50f913(0x7f5)+'radiu'+_0x50f913(0x84c)+';'),_0x273fbd[_0x50f913(0xcf1)]),_0x273fbd['AMdGf']),_0x273fbd[_0x50f913(0x395)]),_0x50f913(0x3a7)+_0x50f913(0x9d2)+_0x50f913(0x739)+_0x50f913(0x5ff)+_0x50f913(0xb53)+_0x50f913(0x8ce)+_0x50f913(0x9c3)+_0x50f913(0x76b)+'38,24'+'2,.5)'+_0x50f913(0xc5f)+'ing:2'+_0x50f913(0x8ac)+'white'+'-spac'+_0x50f913(0x3d7)+_0x50f913(0x8b6)+';}'),_0x273fbd['ptYbW']),_0x50f913(0x99c)+'tn{al'+_0x50f913(0xb64)+'elf:f'+'lex-s'+'tart;'+_0x50f913(0x5fe)+_0x50f913(0xa95)+_0x50f913(0x70b)+'-radi'+_0x50f913(0xc8c)+_0x50f913(0xd73)+_0x50f913(0x443)+_0x50f913(0x1ac)+_0x50f913(0x662)+'ackgr'+_0x50f913(0xbdc)+'#ff6b'+'9d;co'+_0x50f913(0x5d4)+_0x50f913(0xab3))+_0x273fbd[_0x50f913(0x71b)],'.sk-b'+_0x50f913(0xc37)+_0x50f913(0x7a4)+'ilter'+_0x50f913(0xd14)+'htnes'+'s(1.1'+_0x50f913(0x486))+('.sk-p'+'re{fo'+'nt:11'+_0x50f913(0xb02)+_0x50f913(0x199)+'monos'+'pace,'+_0x50f913(0x2fa)+'las,m'+_0x50f913(0x969)+'ace;w'+'hite-'+'space'+':pre-'+_0x50f913(0xa16)+'word-'+_0x50f913(0x5b0)+_0x50f913(0x3e5)+_0x50f913(0x4f8)+'d;mar'+'gin:0'+_0x50f913(0xd77)+'ity:.'+'75;ma'+'x-hei'+'ght:2'+'80px;'+'overf'+_0x50f913(0xce9)+_0x50f913(0x5c6))+_0x273fbd[_0x50f913(0xbcf)],_0x50f913(0x568)+_0x50f913(0x981)+_0x50f913(0x6e4)+'ity\x20.'+_0x50f913(0x70c)+'inter'+'-even'+_0x50f913(0xbd8)+_0x50f913(0xd1f)+_0x50f913(0x8b8)+'drop-'+_0x50f913(0xc25)+_0x50f913(0x8f2)+'\x204px\x20'+_0x50f913(0x9c3)+_0x50f913(0xd78)+'07,15'+_0x50f913(0xc24)+_0x50f913(0x486)),_0xe4fb95=_0x273fbd[_0x50f913(0x95a)](_0x273fbd['OGMOG'](_0x273fbd[_0x50f913(0xb71)],_0x273fbd[_0x50f913(0x283)]),_0x273fbd[_0x50f913(0xa3a)]),_0xca1211=_0x273fbd[_0x50f913(0x585)]('<svg\x20'+'class'+'=\x22mn-'+_0x50f913(0x941)+'svg\x22\x20'+_0x50f913(0x247)+_0x50f913(0xa3d)+_0x50f913(0x18f)+_0x50f913(0x4a4)+_0x50f913(0x4f7)+'\x20d=\x22M'+_0x50f913(0x831)+_0x50f913(0x8a2)+'-2.5-'+'4-4.5'+_0x50f913(0x674)+'5\x200-2'+'.5\x201.'+'8-4.5'+'\x204-4.'+_0x50f913(0x723)+_0x50f913(0xc67)+_0x50f913(0x59b)+'-2.5\x20'+_0x50f913(0x749)+_0x50f913(0x32f)+('fill='+'\x22none'+_0x50f913(0xc5e)+'oke=\x22'+_0x50f913(0x6c9)+_0x50f913(0x914)+_0x50f913(0x5c0)+_0x50f913(0x8aa)+_0x50f913(0x573)+'6\x22\x20st'+_0x50f913(0x33f)+_0x50f913(0x204)+'ap=\x22r'+'ound\x22'+'\x20stro'+'ke-li'+_0x50f913(0x78c)+'n=\x22ro'+'und\x22/'+'>'),'<circ'+_0x50f913(0xc9a)+'=\x2212\x22'+_0x50f913(0x947)+_0x50f913(0x7f7)+'=\x221.2'+_0x50f913(0x83a)+_0x50f913(0x74c)+'f6b9d'+_0x50f913(0xb91)+'svg>');function _0x3a0f28(_0x232acc,_0x1ca4e3,_0x2601a4){var _0x32b6b7=_0x50f913,_0x39d6e3=document[_0x32b6b7(0x72f)+_0x32b6b7(0x224)+_0x32b6b7(0x7ab)](_0x232acc);if(_0x1ca4e3)_0x39d6e3['class'+_0x32b6b7(0x811)]=_0x1ca4e3;if(_0x273fbd[_0x32b6b7(0x6f4)](_0x2601a4,null))_0x39d6e3[_0x32b6b7(0xa55)+'HTML']=_0x2601a4;return _0x39d6e3;}function _0x5a70a0(_0x4f2ae3,_0x4d1237){var _0x5aae3e=_0x50f913,_0x36f29e=(_0x5aae3e(0x728)+_0x5aae3e(0x318)+'5|6|1'+_0x5aae3e(0x7b3))[_0x5aae3e(0x75c)]('|'),_0x2eab65=0x48a+-0x14b*-0x11+-0x1a85;while(!![]){switch(_0x36f29e[_0x2eab65++]){case'0':return _0x9ae139;case'1':_0x9ae139[_0x5aae3e(0x1af)]=_0x154f29;continue;case'2':var _0x9ae139=_0x273fbd[_0x5aae3e(0x495)](_0x3a0f28,_0x5aae3e(0x987),'sk-ca'+'rd'+(_0x4d1237?_0x5aae3e(0x28e):''));continue;case'3':_0x9ae139[_0x5aae3e(0x41c)]=_0x9c8ba;continue;case'4':var _0x9c8ba=_0x3a0f28(_0x273fbd[_0x5aae3e(0x598)],'sk-ca'+'rd-ti'+'tle',_0x273fbd['pIrlV'](_0x273fbd['dbhAS']+_0x4f2ae3,'</str'+_0x5aae3e(0x5ef)));continue;case'5':_0x9ae139[_0x5aae3e(0x786)+'dChil'+'d'](_0x62344c);continue;case'6':_0x9ae139['appen'+_0x5aae3e(0x31e)+'d'](_0x154f29);continue;case'7':var _0x62344c=_0x3a0f28(_0x273fbd[_0x5aae3e(0x598)],'sk-ca'+'rd-he'+'ad');continue;case'8':_0x62344c['appen'+'dChil'+'d'](_0x9c8ba);continue;case'9':var _0x154f29=_0x3a0f28(_0x5aae3e(0x987),'sk-mb'+'ody');continue;}break;}}function _0x375460(_0xc817b5,_0x34ebac){var _0x1fe653=_0x50f913,_0x46416d=_0x273fbd[_0x1fe653(0x7e1)]['split']('|'),_0x3f58e1=0x1f8e+-0x17*-0xf+0x1*-0x20e7;while(!![]){switch(_0x46416d[_0x3f58e1++]){case'0':_0x49d53e[_0x1fe653(0x288)]=_0x273fbd['VKZSG'];continue;case'1':_0x49d53e['oncli'+'ck']=function(){var _0x1b5ef7=_0x1fe653;_0x464f02[_0x1b5ef7(0x6be)](_0x34ebac,!_0x464f02[_0x1b5ef7(0x77b)](_0xc817b5)),_0x714939();};continue;case'2':var _0x464f02={'aOSdh':function(_0x3a8c09,_0x4b7c40){var _0x17d4af=_0x1fe653;return _0x273fbd[_0x17d4af(0x233)](_0x3a8c09,_0x4b7c40);},'yhMeS':function(_0x36908f){var _0x1a2612=_0x1fe653;return _0x273fbd[_0x1a2612(0x190)](_0x36908f);}};continue;case'3':_0x5c60f3[_0x1fe653(0x8a5)][_0x1fe653(0x356)](_0x714939);continue;case'4':return _0x49d53e;case'5':var _0x714939=function(){var _0x127537=_0x1fe653;_0x49d53e[_0x127537(0xbea)+_0x127537(0xb06)+'te']('aria-'+_0x127537(0x8f6)+'ed',_0xc817b5()?_0x273fbd[_0x127537(0xc20)]:_0x127537(0x249));};continue;case'6':_0x49d53e[_0x1fe653(0x5fd)]=_0x714939;continue;case'7':_0x714939();continue;case'8':var _0x49d53e=_0x3a0f28(_0x1fe653(0xa67)+'n','sk-sw'+_0x1fe653(0x18c));continue;}break;}}function _0x54ea6f(_0x2fe35c,_0x59eb9d,_0x2fa8bf,_0x2092ef,_0x1903a4){var _0x3e771d=_0x50f913,_0x22570e={'wppjh':function(_0x58cf7b,_0x3bd6b1){return _0x58cf7b<_0x3bd6b1;},'PWiZk':function(_0x7959d,_0x3c8233){var _0x1ddbc1=_0x36c9;return _0x273fbd[_0x1ddbc1(0x76c)](_0x7959d,_0x3c8233);},'WolVL':function(_0x278042,_0x39fe49){return _0x278042-_0x39fe49;},'vMrIu':'--p'},_0x35f14d=_0x3a0f28(_0x273fbd['NJXLz'],_0x273fbd[_0x3e771d(0xaa1)]),_0x4a7b37=document['creat'+'eElem'+_0x3e771d(0x7ab)](_0x273fbd['pEUVa']);_0x4a7b37[_0x3e771d(0x288)]='range',_0x4a7b37[_0x3e771d(0x8d7)+_0x3e771d(0x811)]=_0x273fbd['UCegR'],_0x4a7b37['min']=_0x273fbd[_0x3e771d(0x326)](String,_0x2fe35c),_0x4a7b37['max']=String(_0x59eb9d),_0x4a7b37['step']=String(_0x2fa8bf);var _0x4a0aa7=_0x273fbd[_0x3e771d(0xbfb)](_0x3a0f28,'span',_0x3e771d(0xb2e)+'l'),_0x467ae1=function(){var _0x50f788=_0x3e771d,_0x4b2950=(_0x50f788(0x653)+'|3|4')['split']('|'),_0x4b0b4a=0x1f*-0xc1+-0x119*0x5+0x1cdc;while(!![]){switch(_0x4b2950[_0x4b0b4a++]){case'0':_0x4a0aa7[_0x50f788(0x4da)+_0x50f788(0x762)+'t']=(_0x22570e[_0x50f788(0x97b)](_0x2fa8bf,0x162e+0x12a2+-0x1f*0x151)?_0x118baa['toFix'+'ed'](-0xb44+-0xb4c+0x1691):_0x22570e['PWiZk'](String,Math['round'](_0x118baa)))+(_0x4a7b37['datas'+'et'][_0x50f788(0x40b)]||'');continue;case'1':_0x4a7b37['value']=String(_0x118baa);continue;case'2':var _0x118baa=_0x2092ef();continue;case'3':var _0x2033e9=(_0x118baa-_0x2fe35c)/_0x22570e['WolVL'](_0x59eb9d,_0x2fe35c)*(0x1f7*0x11+0x25d2+-0x46d5*0x1);continue;case'4':_0x4a7b37[_0x50f788(0x481)][_0x50f788(0x3ac)+'opert'+'y'](_0x22570e['vMrIu'],_0x2033e9+'%');continue;}break;}};return _0x4a7b37['oninp'+'ut']=function(){var _0x5dc594=_0x3e771d;_0x273fbd[_0x5dc594(0x768)](_0x1903a4,_0x273fbd['sgTGo'](parseFloat,_0x4a7b37[_0x5dc594(0xc1b)])||_0x2fe35c),_0x273fbd[_0x5dc594(0x5fb)](_0x467ae1);},_0x35f14d[_0x3e771d(0x786)+'dChil'+'d'](_0x4a7b37),_0x35f14d['appen'+_0x3e771d(0x31e)+'d'](_0x4a0aa7),_0x35f14d[_0x3e771d(0x5fd)]=_0x467ae1,_0x35f14d['input']=_0x4a7b37,_0x467ae1(),_0x5c60f3[_0x3e771d(0x8a5)][_0x3e771d(0x356)](_0x467ae1),_0x35f14d;}function _0x56d28b(_0x18ead3,_0x3677e5){var _0x562577=_0x50f913;if(_0x273fbd[_0x562577(0x250)](_0x273fbd['JRrSU'],_0x273fbd[_0x562577(0x35f)]))_0x515373['cv']['width']=_0x5dc9f4,_0x2fe3fc['cv']['heigh'+'t']=_0x40bc87;else{var _0x310842=_0x273fbd['fqZgx'](_0x3a0f28,_0x562577(0x987),_0x562577(0x416)+'l'),_0x1fd8a6=_0x273fbd[_0x562577(0x9a7)](_0x3a0f28,_0x562577(0x987),_0x273fbd[_0x562577(0xa72)],_0x273fbd['evyZY'](_0x18ead3,_0x3677e5?_0x273fbd['bGBIw'](_0x562577(0x1dd)+_0x562577(0xd53)+_0x562577(0xa9d)+_0x562577(0xcaf)+'\x27>',_0x3677e5)+('</spa'+'n>'):''));return _0x310842['appen'+_0x562577(0x31e)+'d'](_0x1fd8a6),_0x310842;}}function _0x14a296(_0x3f6343,_0x35bbef,_0x4da95a,_0x1adef4){var _0xa23723=_0x50f913,_0x40a0c7={'WDOOu':function(_0x3ccdde,_0x36daf8){return _0x273fbd['tbNWv'](_0x3ccdde,_0x36daf8);},'ntzWa':function(_0x1c06d8,_0x5494f6){return _0x1c06d8+_0x5494f6;},'nvpJa':_0x273fbd[_0xa23723(0x3d1)],'OElmC':_0x273fbd['noJzK'],'ZSkeb':function(_0x1560dc,_0xf32747){return _0x273fbd['VtPtF'](_0x1560dc,_0xf32747);},'BjnZj':'oEEFo','taaMu':function(_0x876cb5,_0x5d03c5){return _0x876cb5/_0x5d03c5;}},_0x460456=_0x3f6343&&_0x3f6343[_0xa23723(0x91e)+'y']&&_0x3f6343[_0xa23723(0x91e)+'y'][_0x35bbef];if(!_0x460456)return'-';for(var _0x26c4a7=-0x5*0xfb+0x226+0x2c1;_0x26c4a7<_0x460456[_0xa23723(0x4f2)+'h'];_0x26c4a7++){if('mXAen'===_0xa23723(0xc1d))_0x4a690b['warni'+_0xa23723(0x58c)][_0xa23723(0x356)](_0x40a0c7[_0xa23723(0x2c8)](_0x40a0c7[_0xa23723(0x983)](_0x40a0c7[_0xa23723(0x457)]+('repla'+'ced\x20b'+'y\x20a\x20d'+_0xa23723(0x1e4)+_0xa23723(0xd33)+_0xa23723(0x689)+'ce,\x20s'+_0xa23723(0x834)+'are\x20a'+'sking'+'\x20the\x20'+'wrong'+_0xa23723(0x9e1)+_0xa23723(0xacc)+'r\x20'),_0x40a0c7['OElmC']),_0xa23723(0xbba)+_0xa23723(0xaec)+_0xa23723(0xa4b)+_0xa23723(0x62e)+_0xa23723(0x380)+_0xa23723(0x830)+'nkey\x20'+_0xa23723(0x44a)+'ard-r'+'eload'+'.'));else{if(_0x273fbd[_0xa23723(0xaaa)](_0x460456[_0x26c4a7]['o'],_0x4da95a)){if(_0x1adef4==='v3'){var _0x42d30d=_0x460456[_0x26c4a7][_0xa23723(0x3fb)]||[_0x460456[_0x26c4a7]['v'],-0x18e3*0x1+-0x7b7+0x209a,0xbdf+-0x1851+0xc72];return _0x42d30d[_0xa23723(0x2f4)](function(_0x220ca3){var _0x32e00c=_0xa23723;if(_0x40a0c7[_0x32e00c(0xac3)](_0x32e00c(0x788),_0x40a0c7[_0x32e00c(0x833)]))return _0x40a0c7['taaMu'](Math['round'](_0x220ca3*(0x1377*-0x1+0x3*-0x1d7+0x1960)),0x975+-0x1*0x3e1+-0x2*0x298);else{if(_0x12a23f[_0x32e00c(0x4c0)]&&_0x1668b5[_0x32e00c(0x4c0)]!==_0xb503c5)_0x291932['top']['postM'+_0x32e00c(0x93b)+'e'](_0x22f0bf,'*');}})['join']('\x20\x20');}var _0x2fb6af=_0x460456[_0x26c4a7]['v'];return typeof _0x2fb6af===_0x273fbd['MbpKG']?_0x273fbd['NPjRu'](Math['round'](_0x2fb6af*(0x1*-0xffa+0x1895+0x191*-0x3)),-0xe36+-0x2fe*0x4+-0x1e16*-0x1):String(_0x2fb6af);}}}return'-';}function _0x17102d(_0x1d20df){var _0x2a25dd=_0x50f913,_0x10c585={'IVGwa':function(_0x98c586,_0x144fea){return _0x98c586+_0x144fea;},'fDIko':_0x2a25dd(0xb04)+_0x2a25dd(0x2d1)+_0x2a25dd(0x2c0)+_0x2a25dd(0x296)+_0x2a25dd(0x6a7)+_0x2a25dd(0x8d6)+_0x2a25dd(0x404)+_0x2a25dd(0x6c2)+_0x2a25dd(0x3ef)+_0x2a25dd(0x240)+'\x20mana'+'ger.\x20'+_0x2a25dd(0xbde)+_0x2a25dd(0x6f1)+_0x2a25dd(0x350),'fGGtx':function(_0x5f179b,_0x220f0c){return _0x5f179b!==_0x220f0c;},'IxSvc':_0x2a25dd(0x53a),'ljxFS':'DNHaG','RokQM':function(_0x281fba,_0x1d6472){return _0x273fbd['VhUAA'](_0x281fba,_0x1d6472);},'uLkbw':_0x273fbd['QcTsi'],'GIccj':function(_0x3dc375){return _0x3dc375();},'RBiYl':function(_0x420d48){return _0x273fbd['oxdud'](_0x420d48);},'nvQjd':_0x2a25dd(0x70d)+_0x2a25dd(0x7f1)+_0x2a25dd(0x2a1)+_0x2a25dd(0x8e7)+'|7','eWgch':function(_0x112526,_0x1b5318){return _0x112526===_0x1b5318;},'jHXgD':function(_0x335854,_0xfd2fa6){var _0x5b1544=_0x2a25dd;return _0x273fbd[_0x5b1544(0x2b7)](_0x335854,_0xfd2fa6);},'faZNS':_0x273fbd['LazKD'],'cvLZS':function(_0x30b605,_0x4be016){return _0x273fbd['eobla'](_0x30b605,_0x4be016);},'cELNN':_0x2a25dd(0x2a2)+'r','lmCus':function(_0x3a264d,_0x347c3a,_0x355108){return _0x273fbd['RUJuU'](_0x3a264d,_0x347c3a,_0x355108);},'vXcoU':function(_0x40890f){return _0x40890f();},'VfmbA':function(_0x4311e2,_0x291230){return _0x4311e2(_0x291230);},'vhOrp':function(_0x15bd57,_0x2a89cb){return _0x15bd57*_0x2a89cb;},'whEOs':function(_0x4464e1,_0x126abf){return _0x4464e1/_0x126abf;}},_0x2d5e8b=_0x65b67e,_0x486f9a=[],_0x4e4949;if(_0x273fbd[_0x2a25dd(0x563)](_0x1d20df,'comba'+'t')){var _0x101aaa=_0x5a70a0(_0x273fbd[_0x2a25dd(0xa19)],_0x1ccb3a['on']),_0x3b4669=_0x273fbd['DLwXC'](_0x3a0f28,_0x273fbd[_0x2a25dd(0x598)],_0x2a25dd(0x856)+_0x2a25dd(0x757),_0x1ccb3a['on']?_0x273fbd['UdDEO'](_0x273fbd[_0x2a25dd(0x8bd)](_0x273fbd['eBGUe'](_0x273fbd[_0x2a25dd(0x344)]('x'+_0x1ccb3a[_0x2a25dd(0x666)+'r'][_0x2a25dd(0xb61)+'ed'](0x1138+0xa77+-0x1bae)+'\x20on\x20',_0xf901ec['lengt'+'h']),_0x273fbd['TnlcH']),_0x256bc0),'\x20writ'+'es'):_0x2a25dd(0x5b2)+_0x2a25dd(0x284)+_0x2a25dd(0x3a4)+_0x2a25dd(0x44d)+_0x2a25dd(0x976)+_0x2a25dd(0xa1f)+'ds\x20on'+_0x2a25dd(0x7c1)+_0x2a25dd(0x437)+_0x2a25dd(0xa64)+'p\x20and'+_0x2a25dd(0x271)+_0x2a25dd(0x78b)+_0x2a25dd(0x801)+'ed.'),_0x2bc293=_0x56d28b('Enabl'+'ed');_0x2bc293['appen'+_0x2a25dd(0x31e)+'d'](_0x273fbd['BQNfH'](_0x375460,function(){var _0x2ca265=_0x2a25dd;if(_0x10c585['fGGtx'](_0x10c585['IxSvc'],_0x10c585[_0x2ca265(0x62f)]))_0x37f12b[_0x2ca265(0x4d6)]=_0x10c585[_0x2ca265(0x57c)](_0x10c585['fDIko'],'the\x20l'+'obby\x20'+'looks'+_0x2ca265(0x264)+_0x2ca265(0x6c0)+'n\x20the'+'\x20reco'+'n\x20INS'+'IDE\x20a'+_0x2ca265(0x9ae)+_0x2ca265(0xcb7)+_0x2ca265(0xc11)+'t\x20the'+_0x2ca265(0xaa4)+'.');else return _0x1ccb3a['on'];},function(_0x3832fc){var _0x5c3d05=_0x2a25dd;if(_0x273fbd['gYcVZ']!==_0x5c3d05(0xd62))_0x399c27(_0x3832fc,_0x1ccb3a[_0x5c3d05(0x666)+'r']),_0x3b4669[_0x5c3d05(0x4da)+_0x5c3d05(0x762)+'t']=_0x3832fc?_0x273fbd[_0x5c3d05(0x1e9)](_0x273fbd['nrZSx']('x'+_0x1ccb3a[_0x5c3d05(0x666)+'r'][_0x5c3d05(0xb61)+'ed'](0x4ee*0x6+0x99d+-0x2730),'\x20on\x20'),_0xf901ec[_0x5c3d05(0x4f2)+'h'])+(_0x5c3d05(0xa1f)+_0x5c3d05(0x2d2))+_0x256bc0+_0x273fbd[_0x5c3d05(0x586)]:_0x273fbd[_0x5c3d05(0x47b)];else{var _0x33e0f2=_0x4e0d31[_0x5c3d05(0x743)+'em'](_0xf5bc77);if(_0x33e0f2)_0x2f97c4['fov']=_0x199771[_0x5c3d05(0xa59)](-0xb75+-0x6b*0x5+0xe18,_0x2643af['max'](0x8e8+-0x2501+0x1c37,_0x44c024(_0x33e0f2)||-0xeb2+0x5*-0x18a+-0x16be*-0x1));}})),_0x101aaa[_0x2a25dd(0x1af)]['appen'+'dChil'+'d'](_0x3b4669),_0x101aaa[_0x2a25dd(0x1af)][_0x2a25dd(0x786)+_0x2a25dd(0x31e)+'d'](_0x2bc293);var _0x1d283d=_0x54ea6f(-0x1577*0x1+-0x1d28+0x32a0,0x1b2f+-0x2332+0x808,-0xb8d+0xf04+0x1*-0x377+0.5,function(){var _0x5f0fdf=_0x2a25dd;if(_0x273fbd[_0x5f0fdf(0xb1a)](_0x273fbd['hwmrD'],_0x273fbd['aWAZD']))_0x2ecc49[_0x5f0fdf(0x3fb)]=_0x5571d3,_0x39e6ba['v']=_0x5418eb[-0x18a3*0x1+-0x2*-0xb8e+0x1*0x187];else return _0x1ccb3a['facto'+'r'];},function(_0x213714){_0x399c27(_0x1ccb3a['on'],_0x213714);});_0x1d283d['input']['datas'+'et'][_0x2a25dd(0x40b)]='x';var _0xa07207=_0x56d28b(_0x2a25dd(0x5b2)+_0x2a25dd(0xc33),_0x2a25dd(0xc2b)+_0x2a25dd(0x75f)+_0x2a25dd(0x444)+_0x2a25dd(0x3af)+'is');_0xa07207['appen'+'dChil'+'d'](_0x1d283d),_0x101aaa['body'][_0x2a25dd(0x786)+_0x2a25dd(0x31e)+'d'](_0xa07207);if(_0x1fc25c['lengt'+'h']){var _0x13a425=_0x3a0f28(_0x2a25dd(0x987),_0x273fbd[_0x2a25dd(0x28d)],'Refus'+'ed:\x20'+_0x1fc25c['slice'](-0x3b4+-0x170b+0x1abf*0x1,-0xc5d*-0x1+-0x1bad+0xf54)[_0x2a25dd(0x2f4)](function(_0x451a76){var _0x2c1847=_0x2a25dd;if(_0x10c585[_0x2c1847(0x1db)]('NmXPT',_0x10c585['ljxFS']))return _0x10c585[_0x2c1847(0x57c)]('0x'+(_0x451a76['o']<0x2401+0x20eb+-0x44ec?'?':_0x451a76['o']['toStr'+'ing'](0x168b+0x1945+-0x10*0x2fc)),'\x20(')+_0x451a76[_0x2c1847(0xc70)]+')';else _0x5e7699[_0x2c1847(0x837)+'em'](_0x3c345d,_0x2dfeb2(_0x2e6d72['fov']));})['join']('\x20\x20'));_0x101aaa['body'][_0x2a25dd(0x786)+_0x2a25dd(0x31e)+'d'](_0x13a425);}_0x486f9a[_0x2a25dd(0x356)](_0x101aaa);var _0x1b13f8=_0x5a70a0(_0x273fbd['wqgDa']),_0x317661=_0x273fbd['CDNFo'](_0x3a0f28,_0x2a25dd(0xa67)+'n','sk-bt'+'n',_0x273fbd[_0x2a25dd(0xb1c)]);_0x317661[_0x2a25dd(0x288)]='butto'+'n',_0x317661['oncli'+'ck']=function(){var _0x302dd7=_0x2a25dd;_0x10c585[_0x302dd7(0x7d9)](_0x583866,_0x10c585['uLkbw']);},_0x1b13f8['body'][_0x2a25dd(0x786)+_0x2a25dd(0x31e)+'d'](_0x273fbd[_0x2a25dd(0xc06)](_0x3a0f28,_0x273fbd['NJXLz'],_0x2a25dd(0x856)+_0x2a25dd(0x757),_0x273fbd[_0x2a25dd(0xcd0)])),_0x1b13f8[_0x2a25dd(0x1af)][_0x2a25dd(0x786)+'dChil'+'d'](_0x317661),_0x486f9a['push'](_0x1b13f8);}if(_0x273fbd[_0x2a25dd(0x975)](_0x1d20df,_0x273fbd[_0x2a25dd(0xa46)])){var _0x1b2c6b=_0x273fbd[_0x2a25dd(0xc5d)](_0x5a70a0,_0x2a25dd(0x493),_0x130958['on']),_0x2cd9b3=_0x56d28b('Enabl'+'ed');_0x2cd9b3[_0x2a25dd(0x786)+'dChil'+'d'](_0x273fbd['JUbMa'](_0x375460,function(){var _0xf69356=_0x2a25dd;if(_0xf69356(0x4e7)===_0x273fbd[_0xf69356(0x397)]){if(typeof _0xb5406b!==_0xf69356(0x75d)+_0xf69356(0xbb3)&&_0x33120d)return _0x3e9ad9['sourc'+'e']=_0xf69356(0x8ad)+'game\x20'+'bindi'+'ng',_0x2c89a5;}else return _0x130958['on'];},function(_0x545898){var _0x478727=_0x2a25dd;if(_0x273fbd[_0x478727(0x2ca)]('ghvQp',_0x478727(0xa0e)))_0x273fbd[_0x478727(0xc16)](_0x1b4428,_0x545898,_0x130958[_0x478727(0x609)]);else{var _0x22e81d=_0x4c5059[_0x2ea071];for(var _0x7c96f=-0x15b8+0x2564+-0xfac;_0x7c96f<_0x22e81d[_0x478727(0x4f2)+'h'];_0x7c96f++){_0x2bda72[_0x2dffe8+'+0x'+_0x22e81d[_0x7c96f]['o'][_0x478727(0x433)+_0x478727(0x5ab)](0x1*0x269e+0x9*0x3c3+0x6f*-0xa7)]=_0x22e81d[_0x7c96f]['v'];}}})),_0x1b2c6b['body']['appen'+'dChil'+'d'](_0x3a0f28(_0x2a25dd(0x987),_0x273fbd[_0x2a25dd(0x79c)],_0x2a25dd(0x25b)+_0x2a25dd(0xbcc)+_0x2a25dd(0x3b3)+'imap,'+_0x2a25dd(0x944)+_0x2a25dd(0xa90)+_0x2a25dd(0x488)+_0x2a25dd(0x31d)+_0x2a25dd(0x50d)+'sitio'+_0x2a25dd(0x1c1))),_0x1b2c6b['body'][_0x2a25dd(0x786)+_0x2a25dd(0x31e)+'d'](_0x2cd9b3);var _0x4949db=_0x273fbd[_0x2a25dd(0x7e7)](_0x54ea6f,0x98a+0x20c6+0x238*-0x13,-0x21d9+0x9a7+-0x846*-0x3,-0x525+-0x65*-0x1f+-0x70c,function(){var _0x412fa3=_0x2a25dd;return _0x130958[_0x412fa3(0x829)];},function(_0x3a757a){var _0x95d7df=_0x2a25dd,_0x182e5d={'oShwV':'%c[sa'+_0x95d7df(0xc95)+_0x95d7df(0x4e3)+_0x95d7df(0x539)+_0x95d7df(0x1e1)+_0x95d7df(0x7a2)+'ed'};if('leCva'!=='JmQXz')_0x130958[_0x95d7df(0x829)]=_0x3a757a;else return _0x41b554['warn'](_0x182e5d['oShwV'],'color'+':'+_0x279eeb,_0x542f90),null;});_0x4949db[_0x2a25dd(0x7ca)][_0x2a25dd(0x85e)+'et'][_0x2a25dd(0x40b)]='m';var _0x3dcf96=_0x273fbd['ZUFuJ'](_0x56d28b,_0x273fbd[_0x2a25dd(0x30b)],'world'+'\x20unit'+'s\x20acr'+_0x2a25dd(0x4a0)+'he\x20ra'+'dar');_0x3dcf96[_0x2a25dd(0x786)+_0x2a25dd(0x31e)+'d'](_0x4949db),_0x1b2c6b['body'][_0x2a25dd(0x786)+_0x2a25dd(0x31e)+'d'](_0x3dcf96),_0x486f9a[_0x2a25dd(0x356)](_0x1b2c6b);var _0x40c09e=_0x273fbd[_0x2a25dd(0x778)](_0x5a70a0,'Boxes',_0x130958[_0x2a25dd(0x609)]),_0x1e4d86=_0x56d28b('Enabl'+'ed');_0x1e4d86[_0x2a25dd(0x786)+_0x2a25dd(0x31e)+'d'](_0x375460(function(){return _0x130958['boxes'];},function(_0x4dc9c0){var _0x269a0b=_0x2a25dd;if(_0x4dc9c0&&!_0x10c585[_0x269a0b(0x77a)](_0x39d633)){_0x10c585['RBiYl'](_0x416ea9);return;}_0x1b4428(!![],_0x4dc9c0);}));var _0x323b74=_0x2d5e8b&&_0x2d5e8b['angle'+'s'];_0x40c09e[_0x2a25dd(0x1af)]['appen'+_0x2a25dd(0x31e)+'d'](_0x3a0f28(_0x2a25dd(0x987),_0x273fbd[_0x2a25dd(0x79c)],_0x323b74&&!_0x323b74[_0x2a25dd(0xbd2)+_0x2a25dd(0x48e)]?'Not\x20d'+_0x2a25dd(0x336)+'g.\x20'+(_0x323b74['why']||_0x2a25dd(0xcbd)+'angle'+'s\x20uni'+_0x2a25dd(0x26e)+'fied')+(_0x2a25dd(0xaf4)+'ese\x20t'+'wo\x20fl'+_0x2a25dd(0x239)+_0x2a25dd(0x4e8)+_0x2a25dd(0xd08)+'tch\x20a'+_0x2a25dd(0x56d)+_0x2a25dd(0x192)+'ess\x20F'+_0x2a25dd(0x8fd)+'rn\x20ab'+_0x2a25dd(0x40f)+_0x2a25dd(0xb37)+_0x2a25dd(0x401)+_0x2a25dd(0x2bd)):_0x323b74&&!_0x323b74[_0x2a25dd(0xc6f)+'ne']?_0x273fbd['KKfYU']('Field'+'\x20of\x20v'+_0x2a25dd(0xa3c)+'s\x20'+Math['round'](_0x323b74[_0x2a25dd(0x9e8)]),_0x273fbd[_0x2a25dd(0x91d)]):'Scree'+_0x2a25dd(0x80a)+'ce\x20bo'+'xes.\x20'+'The\x20f'+'ield\x20'+_0x2a25dd(0x19e)+_0x2a25dd(0x700)+'nnot\x20'+'be\x20re'+_0x2a25dd(0x82e)+_0x2a25dd(0x92c)+'is\x20bu'+_0x2a25dd(0x72d)+_0x2a25dd(0x501)+_0x2a25dd(0x673)+'itted'+_0x2a25dd(0xc42)+_0x2a25dd(0x8d2))),_0x40c09e[_0x2a25dd(0x1af)][_0x2a25dd(0x786)+_0x2a25dd(0x31e)+'d'](_0x1e4d86);var _0xe734f8=_0x273fbd[_0x2a25dd(0xc7b)](_0x54ea6f,-0x10*0xbf+0x968+0x2c4,0x5d4+0x187d*0x1+0xd*-0x24b,0x2554+-0x1*-0x2342+-0x4894*0x1,function(){var _0x155861=_0x2a25dd;if(_0x273fbd['UUxhp']('AWyOW',_0x155861(0x92f)))return _0x2ce298[_0x155861(0x9e8)];else{var _0x1d0143=_0x10c585['nvQjd'][_0x155861(0x75c)]('|'),_0x365911=-0x1442+0x101c+-0xb1*-0x6;while(!![]){switch(_0x1d0143[_0x365911++]){case'0':_0x4d5681=[];continue;case'1':if(_0x5308b8!==_0x10c585[_0x155861(0x3f5)])return;continue;case'2':if(!_0x33782b){_0x1fb409=_0x66c49b,_0x2988c5=[],_0x43c125(_0x155861(0x879)+'t',{'report':_0x2e8054()});return;}continue;case'3':var _0x21c6d2=_0x2f5382();continue;case'4':var _0x66c49b=_0x10c585[_0x155861(0x7d9)](_0x17eaef,_0xc1bf7d);continue;case'5':if(_0x10c585['eWgch'](_0x26cd13,_0x155861(0x976))){_0x3ea4f4(_0x579b3f&&_0x10c585[_0x155861(0x89a)](typeof _0x40a84f['on'],_0x10c585[_0x155861(0x8f7)])?_0x2ddcc8['on']:_0x5f3017['on'],_0x156bf7&&_0x10c585[_0x155861(0x86a)](typeof _0x39da70[_0x155861(0x666)+'r'],_0x10c585[_0x155861(0x4a1)])?_0x26f134['facto'+'r']:_0x48ec61[_0x155861(0x666)+'r']);return;}continue;case'6':_0xb71050=_0x66c49b;continue;case'7':_0x10c585[_0x155861(0x621)](_0x5e1b69,_0x155861(0x879)+'t',{'report':_0x10c585['vXcoU'](_0x1a3883)});continue;case'8':for(var _0x2ba644 in _0x66c49b){var _0xb366c7=_0x42cc63[_0x2ba644],_0x108f8d=_0x66c49b[_0x2ba644];if(_0xb366c7!==_0x108f8d)_0x915c25[_0x155861(0x356)](_0x10c585['IVGwa'](_0x2ba644+':\x20'+_0xb366c7+'\x20->\x20',_0x108f8d));}continue;case'9':for(var _0x523cb5 in _0x21c6d2)_0x66c49b[_0x523cb5]=_0x21c6d2[_0x523cb5];continue;case'10':var _0xc1bf7d=_0x10c585[_0x155861(0x77a)](_0x25f066);continue;}break;}}},function(_0x3aef98){var _0x3d2ad2=_0x2a25dd;_0x2ce298[_0x3d2ad2(0x9e8)]=_0x3aef98,_0x4be5f2();});_0xe734f8['input'][_0x2a25dd(0x85e)+'et'][_0x2a25dd(0x40b)]='°';var _0x4385ee=_0x56d28b(_0x2a25dd(0xc13)+'\x20of\x20v'+'iew','[\x20and'+'\x20]\x20al'+_0x2a25dd(0x444)+_0x2a25dd(0x3af)+'is');_0x4385ee[_0x2a25dd(0x786)+_0x2a25dd(0x31e)+'d'](_0xe734f8);var _0x2f34be=_0x273fbd[_0x2a25dd(0x3cd)](_0x56d28b,'Reset'+'\x20view',_0x273fbd[_0x2a25dd(0x6ae)]),_0x3ab19a=_0x3a0f28(_0x273fbd['VKZSG'],_0x273fbd[_0x2a25dd(0x23e)],_0x2a25dd(0xbd4));_0x3ab19a[_0x2a25dd(0xcad)+'entLi'+'stene'+'r'](_0x2a25dd(0x262),function(){var _0x2ffcc8=_0x2a25dd;_0x2ce298['fov']=0xa9*0x33+0x12e4+-0x3444,_0x4be5f2(),_0x10c585[_0x2ffcc8(0x8a9)](_0x49dab4,_0x5c60f3[_0x2ffcc8(0x877)]);}),_0x2f34be[_0x2a25dd(0x786)+_0x2a25dd(0x31e)+'d'](_0x3ab19a),_0x40c09e[_0x2a25dd(0x1af)][_0x2a25dd(0x786)+'dChil'+'d'](_0x4385ee),_0x40c09e[_0x2a25dd(0x1af)][_0x2a25dd(0x786)+_0x2a25dd(0x31e)+'d'](_0x2f34be);var _0x55153c=_0x2d5e8b&&_0x2d5e8b[_0x2a25dd(0xa82)];_0x40c09e['body']['appen'+_0x2a25dd(0x31e)+'d'](_0x3a0f28('div',_0x2a25dd(0xc9b)+'te',_0x273fbd['EFPBk'](_0x273fbd[_0x2a25dd(0x2aa)](_0x2a25dd(0x475)+'\x20',_0x55153c?_0x55153c[_0x2a25dd(0x6e2)+'Look']?_0x273fbd['gMpxk']+_0x55153c['mouse'+_0x2a25dd(0x33b)]+(_0x55153c['camer'+'a']?_0x273fbd['UalcK']+_0x55153c[_0x2a25dd(0xc6d)+'a']:''):_0x2a25dd(0x194)+_0x2a25dd(0x692)+'ok\x20ye'+'t':_0x273fbd['YUSdu']),_0x323b74?_0x273fbd[_0x2a25dd(0x594)]('\x0a',_0x323b74[_0x2a25dd(0x704)+'e']&&_0x323b74[_0x2a25dd(0x704)+'e'][_0x2a25dd(0x860)+'Of'](_0x273fbd[_0x2a25dd(0xbb9)])===0x1e6*0xc+0x10a3+0x1*-0x276b?'from\x20'+'SetLo'+_0x2a25dd(0x2f5)+_0x2a25dd(0xc2e)+_0x323b74[_0x2a25dd(0x704)+'e']['slice'](-0x19*0x132+-0x19df+0x2*0x1be6)+('\x0ayaw\x20'+'\x20\x20')+Math['round'](_0x323b74[_0x2a25dd(0x20a)+'w'])+_0x273fbd[_0x2a25dd(0x570)]+Math['round'](_0x323b74['rawPi'+'tch']):_0x323b74['sourc'+'e']===_0x2a25dd(0x643)+'r'?_0x273fbd[_0x2a25dd(0xaf6)](_0x273fbd['rXkKm'](_0x273fbd[_0x2a25dd(0xb5e)]('read\x20'+'from\x20'+_0x2a25dd(0x2c3)+_0x2a25dd(0xcfc)+_0x2a25dd(0x643)+_0x2a25dd(0xa50)+_0x2a25dd(0x4ab)+_0x323b74[_0x2a25dd(0x304)],_0x2a25dd(0x6f0)),Math[_0x2a25dd(0x1e3)](_0x323b74[_0x2a25dd(0x20a)+'w']))+(_0x2a25dd(0x41f)+'h\x20')+_0x323b74[_0x2a25dd(0x534)+'At'],'\x20=\x20')+Math[_0x2a25dd(0x1e3)](_0x323b74[_0x2a25dd(0x9ad)+'tch']):_0x273fbd[_0x2a25dd(0x347)]):'')+(_0x323b74&&_0x323b74[_0x2a25dd(0xb6e)+'ooks']&&_0x273fbd[_0x2a25dd(0x22f)](_0x323b74[_0x2a25dd(0xb6e)+'ooks'][_0x2a25dd(0xbe9)+'ed'],0x3*-0xb61+-0x6*-0x4eb+0x4a1)&&_0x273fbd['SivGT'](_0x323b74[_0x2a25dd(0xb6e)+'ooks'][_0x2a25dd(0xbe0)],0xb75*-0x2+0x1eb*0x11+-0x9b1)?_0x273fbd[_0x2a25dd(0xb98)](_0x2a25dd(0xcd3)+'s\x20reg'+'ister'+'ed\x20bu'+'t\x20non'+'e\x20app'+'lied\x20'+'('+_0x323b74['viewH'+'ooks'][_0x2a25dd(0xcde)+'ved'],'/')+_0x323b74['viewH'+_0x2a25dd(0xbdf)]['total']+('\x20reso'+'lved)'):_0x323b74&&_0x323b74[_0x2a25dd(0xb6e)+_0x2a25dd(0xbdf)]&&_0x273fbd['hBumg'](_0x323b74[_0x2a25dd(0xb6e)+_0x2a25dd(0xbdf)]['total'],-0x3c5+0x1*-0x2271+0x2636)?_0x273fbd[_0x2a25dd(0x9fd)](_0x2a25dd(0x241)+_0x2a25dd(0x80f)+_0x2a25dd(0x35a)+'e\x20nev'+_0x2a25dd(0xa53)+'giste'+_0x2a25dd(0x2e8),_0x323b74['viewH'+_0x2a25dd(0xbdf)][_0x2a25dd(0x7ae)+_0x2a25dd(0x410)])+(_0x2a25dd(0x6cb)+'rs)'):'')+(_0x5e3404?_0x273fbd['tzNtl']:''))),_0x486f9a['push'](_0x40c09e);}if(_0x273fbd[_0x2a25dd(0xaa0)](_0x1d20df,'value'+'s')){var _0x2cd05b=[[_0x2a25dd(0x952),'VERSI'+'ON',_0x2d5e8b?_0x2d5e8b['versi'+'on']:'-'],[_0x273fbd['DTyAw'],_0x273fbd[_0x2a25dd(0x6d4)],_0x2d5e8b?_0x2d5e8b['hooks'+'Appli'+'ed']+_0x2a25dd(0x805)+_0x2d5e8b[_0x2a25dd(0xbf2)+'Regis'+'tered'+'AtArm']:'-'],['Heap','from\x20'+'insta'+_0x2a25dd(0x469)+_0x2a25dd(0xc8a),_0x2d5e8b&&_0x2d5e8b[_0x2a25dd(0xcd4)+'emory']&&_0x2d5e8b['wasmM'+_0x2a25dd(0x5a6)][_0x2a25dd(0x234)+_0x2a25dd(0xd28)]?_0x273fbd[_0x2a25dd(0xd3b)](_0x273fbd[_0x2a25dd(0x3ca)](Math['round'](_0x2d5e8b['wasmM'+'emory'][_0x2a25dd(0x4ff)]/(0x1e593*-0xb+-0x2*-0xd9d6f+0x9a273))+_0x273fbd[_0x2a25dd(0xc1e)],_0x2d5e8b[_0x2a25dd(0xcd4)+_0x2a25dd(0x5a6)][_0x2a25dd(0xb6a)]),'ms'):'-'],[_0x2a25dd(0x6ce)+'rs',_0x2a25dd(0x422)+'nNetw'+_0x2a25dd(0x3c9)+'nc',_0x2d5e8b&&_0x2d5e8b['esp']?String(_0x2d5e8b[_0x2a25dd(0x68c)][_0x2a25dd(0x90d)+_0x2a25dd(0xd2a)+'t']):'-'],[_0x273fbd[_0x2a25dd(0xd2e)],'every'+_0x2a25dd(0xa8b)+'ut\x20yo'+'u',_0x2d5e8b&&_0x2d5e8b[_0x2a25dd(0x68c)]?_0x273fbd[_0x2a25dd(0xa5f)](String,_0x2d5e8b[_0x2a25dd(0x68c)]['enemy'+'Count']):'-'],['Camer'+'a',_0x273fbd['SejJB'],_0x2d5e8b&&_0x2d5e8b['esp']&&_0x2d5e8b['esp']['camer'+'a']?_0x273fbd[_0x2a25dd(0xc6a)](_0x273fbd[_0x2a25dd(0x9fd)](_0x2d5e8b['esp']['camer'+'a'],'\x20(')+_0x2d5e8b[_0x2a25dd(0x68c)]['camer'+'aFrom'],')'):'-']];for(_0x4e4949=0x227+0x570+-0x797;_0x273fbd['QLgEn'](_0x4e4949,_0x2cd05b[_0x2a25dd(0x4f2)+'h']);_0x4e4949++){if(_0x273fbd[_0x2a25dd(0x98f)](_0x273fbd[_0x2a25dd(0x89c)],_0x2a25dd(0x8ba))){var _0x305c98=_0x56d28b(_0x2cd05b[_0x4e4949][-0x6a1+-0x264+0x905]),_0xd91121=_0x3a0f28(_0x273fbd[_0x2a25dd(0x7ff)],_0x273fbd[_0x2a25dd(0x81b)]);_0xd91121[_0x2a25dd(0x481)]['minWi'+_0x2a25dd(0x9e0)]='0',_0xd91121[_0x2a25dd(0x481)][_0x2a25dd(0x2bf)]='1',_0xd91121['style']['textA'+_0x2a25dd(0x5de)]='right',_0xd91121[_0x2a25dd(0x4da)+_0x2a25dd(0x762)+'t']=_0x273fbd[_0x2a25dd(0x565)](String,_0x2cd05b[_0x4e4949][-0x706+-0x5f1+-0x1*-0xcf9]),_0xd91121[_0x2a25dd(0x85e)+'et']['k']=_0x2cd05b[_0x4e4949][-0x1*0x7d5+0x1be+0x618],_0x305c98[_0x2a25dd(0x786)+_0x2a25dd(0x31e)+'d'](_0xd91121);var _0x23f1a5=_0x486f9a[_0x2a25dd(0x4f2)+'h']?_0x486f9a[_0x486f9a['lengt'+'h']-(0x102+-0x69b+0x3*0x1de)]:null;!_0x23f1a5&&(_0x23f1a5=_0x5a70a0('Sessi'+'on',![]),_0x486f9a[_0x2a25dd(0x356)](_0x23f1a5)),_0x23f1a5[_0x2a25dd(0x1af)]['appen'+_0x2a25dd(0x31e)+'d'](_0x305c98),_0x23f1a5[_0x2a25dd(0x1af)]['lastC'+_0x2a25dd(0x3a8)]['sp']=_0xd91121;}else _0x5c1c30=_0xce8ed1;}var _0x15925e=_0x5a70a0('Playe'+'r',![]),_0x4a1976=[['Posit'+'ion',_0x2d5e8b&&_0x2d5e8b['local']&&_0x2d5e8b['local'][_0x2a25dd(0x714)]?_0x273fbd['zVPJY'](_0x273fbd['KPIeK'],_0x2d5e8b['local'][_0x2a25dd(0x714)]):_0x2a25dd(0x3cc)+'ntrol'+_0x2a25dd(0x630),_0x2d5e8b&&_0x2d5e8b['local']&&_0x2d5e8b[_0x2a25dd(0x45f)][_0x2a25dd(0xa8a)]?_0x2d5e8b[_0x2a25dd(0x45f)][_0x2a25dd(0xa8a)][_0x2a25dd(0x2f4)](function(_0x227fe3){return Math['round'](_0x10c585['vhOrp'](_0x227fe3,0x1d*-0x4e+-0xbd7+0x1511))/(-0x4c8+0x14*-0xec+-0x4*-0x5e7);})[_0x2a25dd(0x713)]('\x20\x20'):'-'],[_0x2a25dd(0xade),'+'+_0x12600c+'m',_0x2d5e8b&&_0x2d5e8b['local']&&_0x2d5e8b['local'][_0x2a25dd(0x494)]?_0x2d5e8b['local']['eye'][_0x2a25dd(0x2f4)](function(_0x1b3484){var _0x4930d0=_0x2a25dd;return Math[_0x4930d0(0x1e3)](_0x273fbd['xNEmw'](_0x1b3484,0xbd*0x18+0x216c+-0x32c0))/(-0xb24+0x1cef+-0x1167);})[_0x2a25dd(0x713)]('\x20\x20'):'-'],[_0x2a25dd(0xc9d)+_0x2a25dd(0x976),'0x10',_0x273fbd[_0x2a25dd(0x7e8)](_0x14a296,_0x2d5e8b,_0x2a25dd(0x3cc)+_0x2a25dd(0xa34)+_0x2a25dd(0x630),-0x1291+0x5fb*0x3+0xb0)],[_0x2a25dd(0x6b2)+_0x2a25dd(0x402)+'ed','0x40',_0x14a296(_0x2d5e8b,_0x273fbd[_0x2a25dd(0x2b0)],-0x11a*-0x2+0xd*-0x1a9+0x13a1)],[_0x273fbd[_0x2a25dd(0xa9e)],_0x273fbd[_0x2a25dd(0x8b0)],_0x273fbd['EzuyY'](_0x14a296,_0x2d5e8b,_0x2a25dd(0x3cc)+_0x2a25dd(0xa34)+_0x2a25dd(0x630),0x1a69*-0x1+0x13d8+0x7ad)],[_0x2a25dd(0x1d9)+'h',_0x273fbd[_0x2a25dd(0x8f9)],_0x273fbd[_0x2a25dd(0x91a)](_0x14a296,_0x2d5e8b,_0x273fbd[_0x2a25dd(0xce5)],-0x75b*-0x3+-0xbae+-0x1*0x9a3)]];for(_0x4e4949=-0x8c7+0x19c*0x2+0x58f;_0x4e4949<_0x4a1976[_0x2a25dd(0x4f2)+'h'];_0x4e4949++){if('WvOUo'!=='dQENF'){var _0x1ad00f=(_0x2a25dd(0x898)+_0x2a25dd(0x604)+_0x2a25dd(0x787)+_0x2a25dd(0xd3e))[_0x2a25dd(0x75c)]('|'),_0x10ef7c=0x1704+0x425*0x2+0xfa7*-0x2;while(!![]){switch(_0x1ad00f[_0x10ef7c++]){case'0':var _0x5205fc=_0x56d28b(_0x4a1976[_0x4e4949][-0x8ae*-0x4+0x1*-0x19ac+-0x486*0x2]);continue;case'1':_0x10b420[_0x2a25dd(0x481)][_0x2a25dd(0x6ed)+'lign']='right';continue;case'2':var _0x10b420=_0x3a0f28(_0x273fbd[_0x2a25dd(0x7ff)],_0x273fbd['qPbYN']);continue;case'3':_0x10b420['datas'+'et']['k']=_0x4a1976[_0x4e4949][0x1*0x123b+0x81e+-0x1a58];continue;case'4':_0x10b420['style'][_0x2a25dd(0x34f)+_0x2a25dd(0x9e0)]='0';continue;case'5':_0x5205fc[_0x2a25dd(0x786)+_0x2a25dd(0x31e)+'d'](_0x10b420);continue;case'6':_0x10b420[_0x2a25dd(0x4da)+_0x2a25dd(0x762)+'t']=String(_0x4a1976[_0x4e4949][0x1*0x234d+0xe3c+-0x3187]);continue;case'7':_0x15925e['body'][_0x2a25dd(0x66e)+'hild']['sp']=_0x10b420;continue;case'8':_0x10b420['style']['flex']='1';continue;case'9':_0x15925e['body'][_0x2a25dd(0x786)+_0x2a25dd(0x31e)+'d'](_0x5205fc);continue;}break;}}else return null;}_0x486f9a['push'](_0x15925e);}if(_0x273fbd['XTVpw'](_0x1d20df,_0x273fbd[_0x2a25dd(0x9e2)])){if(_0x273fbd['JaAxd']!==_0x273fbd[_0x2a25dd(0xb33)]){var _0x5bcea5=_0x273fbd['fqZgx'](_0x5a70a0,_0x273fbd['nkEVk'],![]),_0xe60901=_0x2d5e8b&&_0x2d5e8b[_0x2a25dd(0xb60)+_0x2a25dd(0x58c)]&&_0x2d5e8b['warni'+_0x2a25dd(0x58c)]['lengt'+'h']?_0x2d5e8b[_0x2a25dd(0xb60)+'ngs'][_0x2a25dd(0x713)]('\x0a'):_0x2a25dd(0x9fa)+_0x2a25dd(0x554)+'s';_0x5bcea5[_0x2a25dd(0x1af)][_0x2a25dd(0x786)+_0x2a25dd(0x31e)+'d'](_0x273fbd[_0x2a25dd(0xb4b)](_0x3a0f28,_0x273fbd[_0x2a25dd(0x598)],_0x2a25dd(0xc41)+'e',_0xe60901)),_0x486f9a[_0x2a25dd(0x356)](_0x5bcea5);var _0x29dd67=_0x5a70a0('Repor'+'t',![]),_0x17b676=_0x3a0f28(_0x2a25dd(0xa67)+'n',_0x2a25dd(0x715)+'n','Copy\x20'+_0x2a25dd(0x89f)+_0x2a25dd(0x7a9)+_0x2a25dd(0xb12)+'rd');_0x17b676[_0x2a25dd(0x288)]='butto'+'n',_0x17b676[_0x2a25dd(0xaeb)+'ck']=function(){var _0x46fc39=_0x2a25dd,_0x39dbbe={'hCMdY':_0x46fc39(0x60c)+'d','yWcvD':function(_0xbd1c3c,_0x29596e){var _0x1113e2=_0x46fc39;return _0x273fbd[_0x1113e2(0xb3f)](_0xbd1c3c,_0x29596e);},'wjRKO':function(_0x1529f5,_0x1ca881){var _0x42481e=_0x46fc39;return _0x273fbd[_0x42481e(0xb77)](_0x1529f5,_0x1ca881);},'NQRUJ':function(_0x1f7cc7,_0x892e5f){return _0x273fbd['KAdFK'](_0x1f7cc7,_0x892e5f);},'fKLox':function(_0x59f43d,_0x57aeca){var _0x415975=_0x46fc39;return _0x273fbd[_0x415975(0xb0b)](_0x59f43d,_0x57aeca);},'CNmrS':_0x273fbd['GjHbr'],'Ncgti':_0x46fc39(0x80f)+_0x46fc39(0xc08)+'uring'+_0x46fc39(0x461)+_0x46fc39(0x660)+_0x46fc39(0x276)+'ment-'+_0x46fc39(0x9f3)+'.'};if(_0x273fbd[_0x46fc39(0xa1d)](_0x46fc39(0x21f),_0x273fbd['hSzGg']))try{var _0x996802=_0x273fbd['JwWGy'](_0x273fbd['gUigI'](_0x3c9b75+'\x0a'+JSON['strin'+'gify'](_0x2d5e8b,null,-0x2*-0x67+0x490*0x3+-0xe7d),'\x0a'),_0xd1d85a);if(navigator['clipb'+_0x46fc39(0x23b)]&&navigator[_0x46fc39(0x211)+_0x46fc39(0x23b)][_0x46fc39(0x9a9)+_0x46fc39(0x973)]){if(_0x273fbd[_0x46fc39(0xace)]('MbdjO','MbdjO'))navigator[_0x46fc39(0x211)+_0x46fc39(0x23b)]['write'+_0x46fc39(0x973)](_0x996802)['then'](function(){var _0x1b2fda=_0x46fc39;_0x17b676[_0x1b2fda(0x4da)+_0x1b2fda(0x762)+'t']=_0x39dbbe[_0x1b2fda(0x9f6)];});else{var _0x1cc993=_0x47c166(_0x4769b7[_0x46fc39(0x494)],[_0x32d36['eye'][0x13a*-0xf+0x268e+0x102*-0x14],_0x446bd4['eye'][0x29*-0xd6+-0x5af+0x27f6],_0x4aa605['eye'][-0x90*-0x37+-0xe*-0x137+0x3b*-0xd0]+(0x1d8c+-0x250a+0x77f)],-0x158e+0xc80+0xcf6,0x11ea+-0x15*-0xcb+-0x1ea9);_0x1cc993&&(_0x8b778=_0x10c585[_0x46fc39(0xa3b)](_0x1cc993['x'],0xb73+0xb80*-0x1+0x3f5),_0x5b27ca=_0x1cc993['y']/(0x1273+0x1*-0xee4+0x59));}}else _0x17b676['textC'+_0x46fc39(0x762)+'t']=_0x46fc39(0xcec)+_0x46fc39(0x7c4)+'block'+_0x46fc39(0x654)+_0x46fc39(0x392)+_0x46fc39(0xc0e)+_0x46fc39(0xc92)+_0x46fc39(0x940)+'ad';}catch(_0x24fab1){_0x17b676[_0x46fc39(0x4da)+_0x46fc39(0x762)+'t']=_0x46fc39(0xcfa)+'faile'+'d';}else _0x40f61e[_0x46fc39(0xb60)+_0x46fc39(0x58c)][_0x46fc39(0x356)](_0x39dbbe['yWcvD'](_0x39dbbe[_0x46fc39(0x2cc)](_0x39dbbe['NQRUJ'](_0x39dbbe[_0x46fc39(0x61d)](_0x39dbbe['CNmrS'],_0x51eaae['hooks'+_0x46fc39(0x770)]),'\x20hook'+_0x46fc39(0x35a)+_0x46fc39(0x6fd)+'n\x20SEE'+'N\x20by\x20'+_0x46fc39(0x642)+_0x46fc39(0xcdf)+'apply'+'\x20pass'+'\x20')+(_0x46fc39(0x3ee)+'once\x20'+_0x46fc39(0x820)+_0x46fc39(0x1be)+_0x46fc39(0xb44)+_0x46fc39(0x269)+'nstan'+_0x46fc39(0xaa7)+'\x20and\x20'+_0x46fc39(0x742)+_0x46fc39(0x8b5)+'plugi'+_0x46fc39(0x98b)+_0x46fc39(0x733)+_0x46fc39(0x35d)+'\x20')+('so\x20ho'+'oks\x20r'+'egist'+'ered\x20'+_0x46fc39(0xbc6)+_0x46fc39(0x1c5)+'re\x20ig'+_0x46fc39(0x97e)+_0x46fc39(0x7d7)+'the\x20l'+_0x46fc39(0x51e)+'f\x20the'+'\x20page'+'.\x20')+('Regis'+_0x46fc39(0xb47)+'\x20'),_0x38e149['hooks'+_0x46fc39(0xcee)+_0x46fc39(0xb47)+_0x46fc39(0xa54)]),_0x39dbbe[_0x46fc39(0x387)]));},_0x29dd67['body'][_0x2a25dd(0x786)+_0x2a25dd(0x31e)+'d'](_0x273fbd['hpcsq'](_0x3a0f28,'div',_0x273fbd[_0x2a25dd(0x79c)],_0x273fbd['xvhuU'])),_0x29dd67[_0x2a25dd(0x1af)][_0x2a25dd(0x786)+_0x2a25dd(0x31e)+'d'](_0x17b676),_0x486f9a['push'](_0x29dd67);}else return _0x273fbd['opXaj'](_0x2f737f[_0x2a25dd(0xc83)](_0x292da6-_0x254bac),_0x681b40['max'](0xd81*-0x1+0x1cf6+-0xf74,_0x29988a[_0x2a25dd(0xc83)](_0xaa4b43)*(-0x2*-0x66c+0x197*-0x15+0x148b+0.6)));}return _0x486f9a;}function _0x3223f9(){var _0x954b6b=_0x50f913,_0x16f9eb={'vcvYO':function(_0x22eb67){var _0x50d24c=_0x36c9;return _0x273fbd[_0x50d24c(0x71d)](_0x22eb67);}};if(_0x273fbd[_0x954b6b(0x2ca)](_0x273fbd['DWEcn'],_0x273fbd[_0x954b6b(0xa04)])){if(_0x5c60f3['open'])_0x436da3(!![]);}else{var _0x165ec6=_0x16f9eb[_0x954b6b(0x203)](_0x2c00c6);if(!_0x165ec6)return null;try{return new _0x1ff859(_0x165ec6['buffe'+'r'],_0x165ec6[_0x954b6b(0x29c)+'ffset'],_0x165ec6[_0x954b6b(0x52d)+'ength']);}catch(_0x33d7c6){return null;}}}function _0x1db59e(){var _0x47117e=_0x50f913;try{var _0x19cd4e=localStorage['getIt'+'em'](_0x30b58f);if(!_0x19cd4e)return;var _0x55e7af=JSON[_0x47117e(0x2b5)](_0x19cd4e);if(_0x55e7af&&typeof _0x55e7af['x']===_0x273fbd[_0x47117e(0xc7f)]&&_0x273fbd['CuqAe'](typeof _0x55e7af['y'],_0x47117e(0x2a2)+'r'))_0x5c60f3[_0x47117e(0x614)]=_0x55e7af;}catch(_0x4e1fd8){}}function _0x2680b2(){var _0x1ae8cf=_0x50f913;try{localStorage['setIt'+'em'](_0x30b58f,JSON[_0x1ae8cf(0xc4d)+'gify'](_0x5c60f3['pos']));}catch(_0x10b9b9){}}function _0x52a88d(){var _0x4a15a0=_0x50f913,_0x107f00={'qljKN':function(_0x1a9ad3,_0x28a2c3){var _0x246745=_0x36c9;return _0x273fbd[_0x246745(0x208)](_0x1a9ad3,_0x28a2c3);},'OtShG':function(_0x526152){return _0x526152();},'jrhhm':'Runti'+'me.cr'+_0x4a15a0(0x8bf)+_0x4a15a0(0x64b)+'\x20unav'+'ailab'+'le'},_0x3ab35e=_0x5c60f3['root'];if(!_0x3ab35e||!_0x3ab35e['style'])return;if(_0x5c60f3[_0x4a15a0(0x614)]){if(_0x273fbd[_0x4a15a0(0x2c4)]!==_0x273fbd['dXeck']){var _0x1bf351=('4|10|'+_0x4a15a0(0x2ff)+'|1|2|'+'7|8|0'+'|3')[_0x4a15a0(0x75c)]('|'),_0x5483fc=0xb*-0x33d+-0xbc*0x1b+0x343*0x11;while(!![]){switch(_0x1bf351[_0x5483fc++]){case'0':_0xb34c46();continue;case'1':try{var _0x1a7e7f=_0xf3a30a[_0x4a15a0(0x480)+_0x4a15a0(0x396)+'dkit']['Runti'+'me'];_0x1a7e7f['__sak'+_0x4a15a0(0x577)+'g']=_0x107f00['qljKN'](_0x410b1e,':')+_0x4b9a93[_0x4a15a0(0x7e9)+'m']()[_0x4a15a0(0x433)+'ing'](0xf8*-0x12+0x12*-0xea+0x16b*0x18)[_0x4a15a0(0xc72)](0x10*0x65+0x24db+-0x3*0xe63,-0x486+0xdab*0x1+0x3f*-0x25),_0x32de9f=_0x1a7e7f[_0x4a15a0(0x77c)+'uraTa'+'g'];}catch(_0x5ac16d){}continue;case'2':_0x107f00[_0x4a15a0(0xcc4)](_0x3e2c0b);continue;case'3':_0x1924ae['memor'+_0x4a15a0(0xce1)]=!![];continue;case'4':var _0x26bb8f=_0x35452b[_0x4a15a0(0x480)+_0x4a15a0(0x396)+_0x4a15a0(0x7a1)]&&_0x523591[_0x4a15a0(0x480)+'WebMo'+_0x4a15a0(0x7a1)][_0x4a15a0(0x236)+'me'];continue;case'5':_0x45400f['ok']=!![];continue;case'6':_0x13ea00=_0x26bb8f['creat'+_0x4a15a0(0xc48)+'in']({'name':_0x4a15a0(0xb39)+'a-ski'+_0x4a15a0(0xabc)+'z','version':_0x4657aa,'referencedAssemblies':_0x3b86e1[_0x4a15a0(0xc72)]()});continue;case'7':_0x456adb();continue;case'8':_0x8fc4c0[_0x4a15a0(0xbf2)+_0x4a15a0(0xcee)+_0x4a15a0(0xb47)]=_0x334887[_0x4a15a0(0x4f2)+'h'];continue;case'9':_0x9cbdd1['attem'+'pted']=!![];continue;case'10':if(!_0x26bb8f||typeof _0x26bb8f[_0x4a15a0(0x72f)+'ePlug'+'in']!==_0x4a15a0(0x48f)+_0x4a15a0(0x6b5)){_0x45d719[_0x4a15a0(0x7ae)]=_0x107f00['jrhhm'];return;}continue;}break;}}else _0x3ab35e[_0x4a15a0(0x481)][_0x4a15a0(0x1a0)]=_0x273fbd[_0x4a15a0(0xaf3)](_0x5c60f3[_0x4a15a0(0x614)]['x'],'px'),_0x3ab35e['style'][_0x4a15a0(0x4c0)]=_0x5c60f3[_0x4a15a0(0x614)]['y']+'px',_0x3ab35e[_0x4a15a0(0x481)][_0x4a15a0(0xa90)]=_0x273fbd[_0x4a15a0(0x701)],_0x3ab35e['style']['botto'+'m']=_0x4a15a0(0x567);}else{if('XBzgf'==='XBzgf')_0x3ab35e['style']['left']=_0x4a15a0(0x567),_0x3ab35e[_0x4a15a0(0x481)]['top']='auto',_0x3ab35e[_0x4a15a0(0x481)]['right']=_0x273fbd['QjIYc'],_0x3ab35e[_0x4a15a0(0x481)][_0x4a15a0(0xb74)+'m']='24px';else return _0x5a9b7a[_0x4a15a0(0x609)];}}function _0x10a540(_0x3300a9,_0x580eeb){var _0x6be018=_0x50f913,_0x344e70={'RhmRK':function(_0x1f9eab,_0x4af3cd){return _0x1f9eab<_0x4af3cd;},'MCouf':function(_0x487b6e,_0x4e56c7){return _0x487b6e===_0x4e56c7;},'PXjmc':function(_0x3fee37,_0xce8dcb){return _0x3fee37(_0xce8dcb);},'akoZv':function(_0x2a7ec8,_0x417c1c){return _0x2a7ec8-_0x417c1c;},'TeETu':function(_0x5ef2e2,_0x3b8ed3){return _0x5ef2e2-_0x3b8ed3;},'oSOTH':function(_0x468518,_0x57dcb2){return _0x468518+_0x57dcb2;}};if(_0x273fbd['jIWrq']!==_0x6be018(0x920)){_0x394ec4[_0x6be018(0x877)]=_0x218e4c,_0x244393[_0x6be018(0x8a5)]=[];if(!_0x511dd2[_0x6be018(0xd24)])return;var _0x21f304=null;for(var _0x4351e3=-0x146+-0xb2*-0x36+-0x2446*0x1;_0x344e70[_0x6be018(0x7bd)](_0x4351e3,_0x15df0e['lengt'+'h']);_0x4351e3++)if(_0x344e70['MCouf'](_0x4e56a6[_0x4351e3]['id'],_0x181b44))_0x21f304=_0x383e5d[_0x4351e3];_0x2bfd0f['head']['textC'+_0x6be018(0x762)+'t']=_0x6be018(0xbba)+_0x6be018(0xbbb)+'llWar'+'z\x20—\x20'+(_0x21f304&&_0x21f304[_0x6be018(0x1d0)]||'?');for(var _0x411670 in _0x8c3430[_0x6be018(0xa67)+'ns']){if(_0x3dfe53['butto'+'ns'][_0x411670][_0x6be018(0x8d7)+_0x6be018(0x3c8)])_0x5442ee[_0x6be018(0xa67)+'ns'][_0x411670]['class'+'Name']=_0x6be018(0xd09)+'b'+(_0x411670===_0x2cef69?_0x6be018(0xc07)+'ve':'');}var _0x5ccd4b=[];try{_0x5ccd4b=_0x344e70['PXjmc'](_0x2e852d,_0x47bdf9);}catch(_0x4a44d4){_0x5ccd4b=[];}while(_0x527a67[_0x6be018(0xd24)]['first'+_0x6be018(0x4d8)])_0x297b42[_0x6be018(0xd24)]['remov'+'eChil'+'d'](_0x2f27cf['cols'][_0x6be018(0xafb)+'Child']);for(var _0x4beb06=-0x3b*0x99+0x2d3*0x1+0x2070;_0x344e70[_0x6be018(0x7bd)](_0x4beb06,_0x5ccd4b[_0x6be018(0x4f2)+'h']);_0x4beb06++)_0x4cfc89[_0x6be018(0xd24)][_0x6be018(0x786)+_0x6be018(0x31e)+'d'](_0x5ccd4b[_0x4beb06]);}else try{var _0x487da9=![],_0xbf987c=0xab7+0xc1*0x11+-0x1788,_0x4e5978=0xc39*0x1+0x3d8+-0x1011;_0x580eeb[_0x6be018(0x481)][_0x6be018(0xb7b)+'r']=_0x273fbd[_0x6be018(0x4a9)],_0x580eeb['style'][_0x6be018(0x8f0)+_0x6be018(0xc19)+'n']=_0x273fbd[_0x6be018(0x8dd)];var _0x34e548=function(_0x5ac974){var _0x1e470e=_0x6be018;_0x487da9=!![],_0x580eeb[_0x1e470e(0x481)]['curso'+'r']=_0x1e470e(0x23a)+_0x1e470e(0x5ab);var _0x649452={'left':parseFloat(_0x3300a9[_0x1e470e(0x481)][_0x1e470e(0x1a0)])||0x17a7+0x67*0xd+-0x1ce2,'top':_0x273fbd[_0x1e470e(0x22a)](parseFloat,_0x3300a9[_0x1e470e(0x481)]['top'])||0x76*0x10+0x201*0x13+0xb3*-0x41};(!_0x3300a9[_0x1e470e(0x481)][_0x1e470e(0x1a0)]||_0x273fbd[_0x1e470e(0x4b3)](_0x3300a9[_0x1e470e(0x481)][_0x1e470e(0x1a0)],_0x273fbd[_0x1e470e(0x701)]))&&(_0x273fbd[_0x1e470e(0xd1d)](_0x273fbd[_0x1e470e(0xc81)],_0x273fbd[_0x1e470e(0xc81)])?_0x4b7346['push'](_0x53b904(_0x2df8bf&&_0x37f9a1[_0x1e470e(0xb7a)+'ge']||_0x39f7ff)['slice'](0x6b6+-0x34*-0x40+-0x13b6,0x17b4+0x4*-0x336+-0xa64)):_0x649452[_0x1e470e(0x1a0)]=(window['inner'+_0x1e470e(0xb87)]||0x1a3*0x6+-0x2*-0x12c1+-0x2f54)-(_0x3300a9[_0x1e470e(0xba1)+_0x1e470e(0x1ef)+'h']||-0xcdd+0xd*0x287+-0x1192*0x1)-(-0x1*0x1977+0x79b*-0x1+0x212a));(!_0x3300a9[_0x1e470e(0x481)][_0x1e470e(0x4c0)]||_0x3300a9[_0x1e470e(0x481)][_0x1e470e(0x4c0)]===_0x273fbd['ONTWR'])&&(_0x649452[_0x1e470e(0x4c0)]=(window['inner'+_0x1e470e(0xcf6)+'t']||0x1*-0x1afb+0x13*0x49+0x4*0x564)-(_0x3300a9[_0x1e470e(0xba1)+_0x1e470e(0xb23)+'ht']||0x1a1d+0x1*0x185f+-0x1*0x30ec)-(-0xf02*-0x2+-0x3*-0x7a6+-0x34de));_0xbf987c=(_0x5ac974[_0x1e470e(0x8cd)+'tX']||-0x21*-0xd5+0x101f+-0x2b94)-_0x649452[_0x1e470e(0x1a0)],_0x4e5978=_0x273fbd[_0x1e470e(0x96f)](_0x5ac974[_0x1e470e(0x8cd)+'tY']||-0x13*-0xeb+-0x8*-0x332+-0x6d*0x65,_0x649452[_0x1e470e(0x4c0)]);try{_0x5ac974[_0x1e470e(0x959)+_0x1e470e(0x285)+_0x1e470e(0xb52)]();}catch(_0x3e0b7c){}},_0x1c8cba=function(_0x65c220){var _0x372136=_0x6be018,_0x51ff5d=(_0x372136(0x4d1)+_0x372136(0x604)+'9|7|6'+_0x372136(0x406))[_0x372136(0x75c)]('|'),_0x4c3f30=-0xa84+-0x2*-0x11b9+-0x18ee;while(!![]){switch(_0x51ff5d[_0x4c3f30++]){case'0':if(!_0x487da9)return;continue;case'1':_0xefd153=Math[_0x372136(0xbb7)](-0x121a*0x1+0x1c66+0x1b6*-0x6,Math[_0x372136(0xa59)](_0x344e70[_0x372136(0x445)](window[_0x372136(0xa55)+_0x372136(0xcf6)+'t']||-0x9*-0x47+0x100b+-0x128a,_0x218f1a)-(0x1*-0x1d97+0x70c+0x1693),_0xefd153));continue;case'2':_0x5c60f3[_0x372136(0x614)]={'x':_0x49d899,'y':_0xefd153};continue;case'3':_0x3300a9[_0x372136(0x481)][_0x372136(0xb74)+'m']='auto';continue;case'4':var _0x49d899=_0x344e70['TeETu'](_0x65c220['clien'+'tX']||0x7*-0x32a+0xbc*0x20+0x2*-0xad,_0xbf987c),_0xefd153=(_0x65c220[_0x372136(0x8cd)+'tY']||0xf6b*-0x2+-0x2641*0x1+0x4517)-_0x4e5978;continue;case'5':var _0x4c0968=_0x3300a9['offse'+'tWidt'+'h']||0x3b9*-0x6+-0xd00+0x25c2*0x1,_0x218f1a=_0x3300a9['offse'+_0x372136(0xb23)+'ht']||0x1c26+0x35*-0x92+0x1d2*0x2;continue;case'6':_0x3300a9[_0x372136(0x481)]['right']=_0x372136(0x567);continue;case'7':_0x3300a9[_0x372136(0x481)]['top']=_0x344e70[_0x372136(0x8ab)](_0xefd153,'px');continue;case'8':_0x49d899=Math['max'](0x12a+-0x6b*0x34+0x149a,Math[_0x372136(0xa59)]((window[_0x372136(0xa55)+_0x372136(0xb87)]||-0x7f*-0x29+-0x5d8+-0xe7f)-_0x4c0968-(0x1e0d+0x13a*0x2+-0x2079),_0x49d899));continue;case'9':_0x3300a9['style']['left']=_0x344e70['oSOTH'](_0x49d899,'px');continue;}break;}},_0x27e406=function(){var _0x26a446=_0x6be018;if(!_0x487da9)return;_0x487da9=![],_0x580eeb[_0x26a446(0x481)][_0x26a446(0xb7b)+'r']=_0x273fbd['DlZNE'],_0x2680b2();};_0x580eeb[_0x6be018(0xcad)+_0x6be018(0xc38)+_0x6be018(0xb2c)+'r'](_0x273fbd[_0x6be018(0x6ee)],_0x34e548),window['addEv'+_0x6be018(0xc38)+_0x6be018(0xb2c)+'r'](_0x6be018(0x6e2)+'move',_0x1c8cba),window['addEv'+'entLi'+'stene'+'r'](_0x6be018(0x6e2)+'up',_0x27e406),_0x580eeb['addEv'+'entLi'+_0x6be018(0xb2c)+'r'](_0x6be018(0x8f0)+'start',_0x34e548,{'passive':![]}),window['addEv'+_0x6be018(0xc38)+'stene'+'r'](_0x273fbd[_0x6be018(0xc8b)],_0x1c8cba,{'passive':![]}),window['addEv'+_0x6be018(0xc38)+_0x6be018(0xb2c)+'r'](_0x6be018(0x8f0)+'end',_0x27e406);}catch(_0x366bff){}}function _0x52ddd5(){var _0x155cd2=_0x50f913;if(_0x5c60f3[_0x155cd2(0xad3)])return _0x5c60f3[_0x155cd2(0x42d)];try{if(_0x155cd2(0x94d)!==_0x155cd2(0x20b)){if(!document[_0x155cd2(0x1af)]||!document[_0x155cd2(0x1af)]['appen'+'dChil'+'d'])return null;if(!document['getEl'+_0x155cd2(0x656)+_0x155cd2(0xbc0)](_0x273fbd[_0x155cd2(0x719)])){var _0x51fee5=document['creat'+_0x155cd2(0x224)+_0x155cd2(0x7ab)](_0x273fbd[_0x155cd2(0x25e)]);_0x51fee5['id']=_0x273fbd['VFIRM'],_0x51fee5['textC'+_0x155cd2(0x762)+'t']=_0x4453a1,(document['head']||document['docum'+'entEl'+_0x155cd2(0x656)])[_0x155cd2(0x786)+_0x155cd2(0x31e)+'d'](_0x51fee5);}var _0x595d22=_0x3a0f28(_0x273fbd[_0x155cd2(0x598)],_0x155cd2(0x824)+_0x155cd2(0x8a8));_0x595d22['id']=_0x155cd2(0xb39)+'a-men'+_0x155cd2(0x644)+'t';var _0x518671=_0x3a0f28(_0x155cd2(0x987),_0x155cd2(0x3a2)+'de'),_0x52fa19=_0x3a0f28(_0x273fbd[_0x155cd2(0x598)],_0x273fbd['scYHR'],_0xca1211);_0x518671[_0x155cd2(0x786)+_0x155cd2(0x31e)+'d'](_0x52fa19);var _0xbdddd3=_0x3a0f28('div',_0x273fbd['NkVUr']),_0x2a7e4c=_0x273fbd['RUJuU'](_0x3a0f28,_0x155cd2(0x987),'mn-to'+'p'),_0x448a41=_0x3a0f28(_0x155cd2(0x987),_0x273fbd[_0x155cd2(0x2b8)]),_0x63627f=_0x273fbd[_0x155cd2(0x374)](_0x3a0f28,_0x273fbd[_0x155cd2(0x598)],_0x273fbd['EDaVQ'],_0x155cd2(0xbba)+_0x155cd2(0xbbb)+_0x155cd2(0x7f9)+'z'),_0x2a6b34=_0x3a0f28(_0x155cd2(0x987),_0x155cd2(0x1cf)+'b',_0x273fbd[_0x155cd2(0x59c)]);_0x448a41['appen'+'dChil'+'d'](_0x63627f),_0x448a41[_0x155cd2(0x786)+_0x155cd2(0x31e)+'d'](_0x2a6b34);var _0x14cbeb=_0x273fbd[_0x155cd2(0x37d)](_0x3a0f28,_0x155cd2(0x987),_0x155cd2(0x70a)+_0x155cd2(0x8c7),_0x155cd2(0x780)+_0x155cd2(0x247)+_0x155cd2(0xa3d)+'\x200\x2024'+_0x155cd2(0x4a4)+_0x155cd2(0x4f7)+'\x20d=\x22M'+'6\x206l1'+'2\x2012M'+_0x155cd2(0xcea)+_0x155cd2(0x732)+'/></s'+_0x155cd2(0xb9a));_0x14cbeb[_0x155cd2(0xaeb)+'ck']=function(){var _0x6fc422=_0x155cd2;if(_0x6fc422(0xc51)!==_0x273fbd[_0x6fc422(0x5d6)])_0x436da3(![]);else{var _0x1e6d63=arguments[_0x10ead1];if(typeof _0x1e6d63===_0x6fc422(0xc4d)+'g')_0x573e6b+=_0x1e6d63;else{if(_0x1e6d63&&_0x1e6d63['messa'+'ge'])_0x28a371+=_0x1e6d63[_0x6fc422(0xb7a)+'ge'];}}},_0x2a7e4c['appen'+'dChil'+'d'](_0x448a41),_0x2a7e4c['appen'+_0x155cd2(0x31e)+'d'](_0x14cbeb);var _0x51bbba=_0x3a0f28(_0x155cd2(0x987),'mn-co'+'ls');_0xbdddd3[_0x155cd2(0x786)+_0x155cd2(0x31e)+'d'](_0x2a7e4c),_0xbdddd3[_0x155cd2(0x786)+'dChil'+'d'](_0x51bbba),_0x595d22[_0x155cd2(0x786)+'dChil'+'d'](_0x518671),_0x595d22[_0x155cd2(0x786)+_0x155cd2(0x31e)+'d'](_0xbdddd3),document[_0x155cd2(0x1af)][_0x155cd2(0x786)+_0x155cd2(0x31e)+'d'](_0x595d22),_0x5c60f3['root']=_0x595d22,_0x5c60f3[_0x155cd2(0xd24)]=_0x51bbba,_0x5c60f3['head']=_0x63627f,_0x5c60f3[_0x155cd2(0x7b6)]=_0x2a6b34,_0x1db59e(),_0x52a88d(),_0x10a540(_0x595d22,_0x2a7e4c);var _0x5d7457={};for(var _0x1abad4=-0x79*-0x29+-0xab8+0x2e3*-0x3;_0x273fbd[_0x155cd2(0x7c0)](_0x1abad4,_0x26f4a2['lengt'+'h']);_0x1abad4++){var _0x30183a=_0x26f4a2[_0x1abad4],_0x4cb93e=_0x3a0f28(_0x273fbd['VKZSG'],_0x273fbd['JPiyR'],_0x273fbd['iUxTs'](_0x155cd2(0x5a7)+'l>',_0x30183a[_0x155cd2(0x1d0)])+(_0x155cd2(0x78f)+_0x155cd2(0x980)));_0x4cb93e[_0x155cd2(0x288)]=_0x273fbd[_0x155cd2(0x1f8)],_0x4cb93e[_0x155cd2(0xbce)]=_0x30183a[_0x155cd2(0x1d0)],function(_0x19dbd9){var _0x59ee5c={'ckgsQ':function(_0x2e8377,_0x25eefe){return _0x2e8377(_0x25eefe);}};_0x4cb93e['oncli'+'ck']=function(){var _0x3918e0=_0x36c9,_0x1ade4d={'uIlDc':'none'};if('NBLXy'===_0x3918e0(0x86f))_0x59ee5c['ckgsQ'](_0x49dab4,_0x19dbd9);else try{var _0x9980b7=_0x30db3f;if(_0x9980b7&&_0x9980b7['el'])_0x9980b7['el']['style'][_0x3918e0(0x555)+'ay']=_0x30bd27?'':_0x1ade4d[_0x3918e0(0x51b)];var _0x273cc5=_0x453f92;if(_0x273cc5&&_0x273cc5['cv'])_0x273cc5['cv'][_0x3918e0(0x481)][_0x3918e0(0x555)+'ay']=_0x172b18?'':_0x1ade4d['uIlDc'];}catch(_0xc1672f){}};}(_0x30183a['id']),_0x5d7457[_0x30183a['id']]=_0x4cb93e,_0x518671[_0x155cd2(0x786)+_0x155cd2(0x31e)+'d'](_0x4cb93e);}_0x5c60f3[_0x155cd2(0xa67)+'ns']=_0x5d7457;var _0xb8abc8=_0x3a0f28('div',null,_0xe4fb95);return _0xb8abc8['id']=_0x273fbd[_0x155cd2(0x386)],_0xb8abc8['title']=_0x273fbd[_0x155cd2(0xa9c)],_0xb8abc8[_0x155cd2(0x6ad)+'seent'+'er']=function(){var _0x4b876f=_0x155cd2;_0xb8abc8['style'][_0x4b876f(0xa86)+'ty']='1';},_0xb8abc8[_0x155cd2(0x6ad)+_0x155cd2(0x887)+'ve']=function(){var _0x3a6814=_0x155cd2;if(_0x3a6814(0x341)==='jkSOq'){var _0x24eced=_0x475e9f[-0x151f+-0x13*-0x13+0x349*0x6]['val']();if(_0x24eced)_0x93f697=_0x24eced;}else _0xb8abc8[_0x3a6814(0x481)][_0x3a6814(0xa86)+'ty']=_0x5c60f3[_0x3a6814(0x9d6)]?'1':'.5';},_0xb8abc8[_0x155cd2(0xaeb)+'ck']=function(_0x434869){var _0x3433dc=_0x155cd2;if(_0x273fbd[_0x3433dc(0x1ad)]===_0x3433dc(0x430)){if(_0x434869&&_0x434869[_0x3433dc(0x942)+_0x3433dc(0x57f)+'ation'])_0x434869['stopP'+_0x3433dc(0x57f)+_0x3433dc(0x7cd)]();_0x273fbd[_0x3433dc(0xca3)](_0x436da3,!_0x5c60f3[_0x3433dc(0x9d6)]);}else _0x49ae68[_0x3433dc(0x829)]=_0x4f9df2;},document[_0x155cd2(0x1af)]['appen'+'dChil'+'d'](_0xb8abc8),_0x5c60f3[_0x155cd2(0x4d0)]=_0xb8abc8,setInterval(function(){var _0x48b5dd=_0x155cd2;try{if(!_0x5c60f3[_0x48b5dd(0x4d0)])return;var _0x68fd82=_0x2524f3();_0x5c60f3[_0x48b5dd(0x4d0)][_0x48b5dd(0x481)][_0x48b5dd(0xa86)+'ty']=_0x5c60f3['open']?'1':_0x68fd82?'.8':_0x48b5dd(0x4bb),_0x5c60f3['petal']['title']=_0x68fd82?_0x273fbd[_0x48b5dd(0xa9c)]:'Sakur'+_0x48b5dd(0xbbb)+_0x48b5dd(0x7f9)+_0x48b5dd(0x21a)+'aitin'+_0x48b5dd(0x649)+_0x48b5dd(0x2d6)+_0x48b5dd(0xb0c)+'(Inse'+_0x48b5dd(0x2b6);}catch(_0x3b8cef){}},0x11c5+-0x87d+0x1*-0x68c),_0x5c60f3['built']=!![],_0x49dab4(_0x5c60f3[_0x155cd2(0x877)]),_0x595d22;}else _0x29957e['warni'+'ngs'][_0x155cd2(0x356)](_0x273fbd[_0x155cd2(0x781)](_0x155cd2(0x847)+_0x155cd2(0xcde)+_0x155cd2(0xd52)+_0x234080[_0x155cd2(0xbf2)+_0x155cd2(0x1b5)+_0x155cd2(0xd65)]+'\x20of\x20'+_0x117fa6[_0x155cd2(0xbf2)+'Total']+('\x20hook'+_0x155cd2(0x9d0)+_0x155cd2(0xc57)+'able\x20'+'index'+_0x155cd2(0x307)+'appli'+_0x155cd2(0x775)+'ne.\x20T'+_0x155cd2(0xd01)+_0x155cd2(0xc6b)+_0x155cd2(0xaa6)),_0x273fbd[_0x155cd2(0x64c)]));}catch(_0x40280d){if(_0x273fbd[_0x155cd2(0x884)](_0x155cd2(0x62d),_0x155cd2(0x62d))){var _0x1dd7e2=_0x562e55(_0x273fbd['FdXim'],_0x511eff[_0x8aa3d9[_0x5f180c]]['ptr']);_0x1dd7e2['hits']=_0x115e9f[_0x17c9bf[_0x241ec1]]['hits'],_0x1dd7e2[_0x155cd2(0xafb)+_0x155cd2(0xabf)+'s']=_0x913e78[_0x372e9e[_0x464fe4]]['first'+_0x155cd2(0x815)]-_0x5152d1;if(_0x1dd7e2['refs']['healt'+'h'])_0x1dd7e2['healt'+'h']=_0x20571d(_0x55feb6(_0x1dd7e2[_0x155cd2(0xb55)]['healt'+'h'],0x25c1*0x1+-0x13ba+0x11f7*-0x1),_0x155cd2(0x1d9)+_0x155cd2(0xa6e)+'pt',_0x155cd2(0xb34));_0x514a0f['bots']['push'](_0x1dd7e2);}else return console[_0x155cd2(0x76d)]('%c[sa'+'kura]'+'\x20menu'+_0x155cd2(0x8ee)+_0x155cd2(0x266)+'le',_0x273fbd[_0x155cd2(0x961)]+_0xd166cd,_0x40280d),null;}}function _0x49dab4(_0xc537c2){var _0x129df8=_0x50f913,_0x1e94c0={'CMjbQ':function(_0xc96b7e,_0x5b37e8){return _0xc96b7e+_0x5b37e8;},'pGuVf':function(_0x17d951,_0x492659){return _0x17d951*_0x492659;},'AphGU':function(_0x2ee558,_0x3591e2){return _0x2ee558-_0x3591e2;},'enqaN':function(_0xc46b0d,_0x1e607c){return _0xc46b0d+_0x1e607c;},'IpHnq':function(_0x5ac8b5,_0x41c368){return _0x5ac8b5/_0x41c368;}};_0x5c60f3['cat']=_0xc537c2,_0x5c60f3[_0x129df8(0x8a5)]=[];if(!_0x5c60f3[_0x129df8(0xd24)])return;var _0x138da=null;for(var _0x1fe788=0xa2d+-0x2*-0xb8f+-0x214b;_0x1fe788<_0x26f4a2[_0x129df8(0x4f2)+'h'];_0x1fe788++)if(_0x26f4a2[_0x1fe788]['id']===_0xc537c2)_0x138da=_0x26f4a2[_0x1fe788];_0x5c60f3['head'][_0x129df8(0x4da)+'onten'+'t']=_0x273fbd['iCKsF']('Sakur'+'a\x20Ski'+_0x129df8(0x7f9)+'z\x20—\x20',_0x138da&&_0x138da['label']||'?');for(var _0x17118d in _0x5c60f3[_0x129df8(0xa67)+'ns']){if(_0x5c60f3['butto'+'ns'][_0x17118d][_0x129df8(0x8d7)+'List'])_0x5c60f3['butto'+'ns'][_0x17118d][_0x129df8(0x8d7)+_0x129df8(0x811)]=_0x273fbd['JPiyR']+(_0x273fbd['UDXVa'](_0x17118d,_0xc537c2)?'\x20acti'+'ve':'');}var _0x3693eb=[];try{_0x3693eb=_0x17102d(_0xc537c2);}catch(_0x4a1121){_0x273fbd['srjGS'](_0x129df8(0x94a),_0x273fbd['ASVgm'])?_0x3693eb=[]:(_0x129ef3=_0x1e94c0['CMjbQ'](_0x23a528,_0x1e94c0[_0x129df8(0x3de)](_0x1109f8/_0x9ff191,_0x1e94c0['AphGU'](_0x37257c,0x23b3+-0x2345*-0x1+-0x9*0x7e2))),_0x3c12a8=_0x1e94c0['enqaN'](_0x4c9162,_0x1e94c0['pGuVf'](_0x1e94c0[_0x129df8(0x9b4)](_0x155bd7,_0x30f820),_0x33c4b4-(0x245*0xb+-0x1*-0x10a1+-0x2992))));}while(_0x5c60f3[_0x129df8(0xd24)][_0x129df8(0xafb)+_0x129df8(0x4d8)])_0x5c60f3['cols']['remov'+_0x129df8(0x289)+'d'](_0x5c60f3['cols'][_0x129df8(0xafb)+_0x129df8(0x4d8)]);for(var _0x4f7b90=0xd*-0x103+-0x246a+-0x3191*-0x1;_0x4f7b90<_0x3693eb[_0x129df8(0x4f2)+'h'];_0x4f7b90++)_0x5c60f3[_0x129df8(0xd24)][_0x129df8(0x786)+_0x129df8(0x31e)+'d'](_0x3693eb[_0x4f7b90]);}function _0x436da3(_0x242a44){var _0x249f87=_0x50f913,_0x1770dd={'fxaMq':function(_0x472264,_0x277cd0,_0x225de6){var _0x55a060=_0x36c9;return _0x273fbd[_0x55a060(0x6c8)](_0x472264,_0x277cd0,_0x225de6);}};_0x5c60f3['open']=!!_0x242a44;var _0x21d13b=_0x52ddd5();if(!_0x21d13b)return;_0x21d13b[_0x249f87(0x8d7)+'Name']=_0x273fbd[_0x249f87(0xa92)]('mn-pa'+_0x249f87(0x8a8),_0x5c60f3['open']?_0x249f87(0xd4e)+'n':'');if(_0x5c60f3[_0x249f87(0x4d0)])_0x5c60f3['petal']['style'][_0x249f87(0xa86)+'ty']=_0x5c60f3[_0x249f87(0x9d6)]?'1':'.5';if(_0x5c60f3['open']){_0x273fbd[_0x249f87(0x1cd)](_0x49dab4,_0x5c60f3['cat']);try{if(_0x273fbd[_0x249f87(0x46d)]!==_0x273fbd['SBPDL']){var _0x56447f=window['inner'+'Heigh'+'t']||0xa52*-0x1+0x1*-0x380+0x10f2;if(_0x56447f<-0x36*-0x53+-0x61*-0x5b+-0x1*0x3191)_0x273fbd[_0x249f87(0x326)](_0x56075b,![]);}else _0x1770dd['fxaMq'](_0x1684ab,_0x249f87(0x976),{'on':_0x1dadd4,'factor':_0x11f85e(_0x1ae97f[_0x249f87(0xc1b)])||-0x1ad7+0x2*0x1286+0x4*-0x28d});}catch(_0x36a831){}}}function _0x5ef12a(){var _0x41dee8=_0x50f913,_0x489253={'lYSvf':function(_0x8d453d,_0x6c222f){return _0x8d453d+_0x6c222f;},'Wvjki':'ueZwl','jqKFh':function(_0x259514,_0x363317){var _0x48a806=_0x36c9;return _0x273fbd[_0x48a806(0xb73)](_0x259514,_0x363317);}};if(!_0x5c60f3[_0x41dee8(0x9d6)]||!_0x5c60f3[_0x41dee8(0xad3)])return;try{for(var _0x56eb38=-0x17c8*0x1+0x1*-0x584+0xea6*0x2;_0x56eb38<_0x5c60f3[_0x41dee8(0x8a5)]['lengt'+'h'];_0x56eb38++){if('kxZwo'==='kxZwo')try{if(_0x41dee8(0x274)!==_0x41dee8(0x328))_0x5c60f3['syncs'][_0x56eb38]();else{var _0x5c0505=_0x2459e5['query'+'Selec'+'torAl'+'l'](_0x273fbd[_0x41dee8(0x9b2)]);for(var _0x2292cc=0x12*0x224+-0x89b*-0x1+-0x2f23;_0x2292cc<_0x5c0505[_0x41dee8(0x4f2)+'h'];_0x2292cc++){try{if(_0x5c0505[_0x2292cc][_0x41dee8(0x632)+_0x41dee8(0x8fe)+_0x41dee8(0x474)])_0x5c0505[_0x2292cc][_0x41dee8(0x632)+'ntWin'+'dow'][_0x41dee8(0x95e)+_0x41dee8(0x93b)+'e'](_0x22bbf2,'*');}catch(_0x63b2b3){}}}}catch(_0x3a5fab){}else try{if(_0x3f4d06[_0x57d7a0][_0x41dee8(0x632)+_0x41dee8(0x8fe)+_0x41dee8(0x474)])_0x54a79f[_0x4d574a][_0x41dee8(0x632)+_0x41dee8(0x8fe)+_0x41dee8(0x474)][_0x41dee8(0x95e)+_0x41dee8(0x93b)+'e'](_0x3ca663,'*');}catch(_0x2cee5c){}}var _0xfab5a=_0x65b67e;_0x5c60f3['sub'][_0x41dee8(0x4da)+_0x41dee8(0x762)+'t']=_0xfab5a?_0x273fbd['myKfR'](_0x273fbd[_0x41dee8(0x808)](_0x273fbd[_0x41dee8(0x9a5)]('v'+_0xfab5a['versi'+'on'],_0x273fbd['NsdfR'])+_0xfab5a['hooks'+_0x41dee8(0x3a6)+'ed']+'/',_0xfab5a[_0x41dee8(0xbf2)+'Total'])+_0x273fbd['ZVuFv'],_0xfab5a[_0x41dee8(0x68c)]&&_0xfab5a['esp'][_0x41dee8(0x90d)+_0x41dee8(0xd2a)+'t']||-0x2279+-0x580*-0x5+0x69*0x11)+('\x20\x20·\x20\x20'+_0x41dee8(0x75b))+(_0xfab5a['wasmM'+'emory']&&_0xfab5a[_0x41dee8(0xcd4)+_0x41dee8(0x5a6)][_0x41dee8(0x234)+_0x41dee8(0xd28)]?_0x273fbd[_0x41dee8(0x5b7)](Math['round'](_0xfab5a[_0x41dee8(0xcd4)+_0x41dee8(0x5a6)][_0x41dee8(0x4ff)]/(0x268d3*0xd+-0x10594e+-0xd*-0x1433)),'MB'):'-'):_0x273fbd[_0x41dee8(0x2f0)];var _0x58f47a=_0x5c60f3[_0x41dee8(0xd24)][_0x41dee8(0x87d)+'Selec'+_0x41dee8(0x903)+'l']?_0x5c60f3['cols']['query'+_0x41dee8(0x88c)+_0x41dee8(0x903)+'l'](_0x41dee8(0x394)+_0x41dee8(0xb8d)):[];for(var _0x5e60e4=0xafe+-0x1*-0x853+-0x1351;_0x273fbd['GbOop'](_0x5e60e4,_0x58f47a[_0x41dee8(0x4f2)+'h']);_0x5e60e4++){var _0x39a021=_0x58f47a[_0x5e60e4][_0x41dee8(0x85e)+'et']['k'],_0x618c4d='';if(_0x39a021===_0x273fbd[_0x41dee8(0x4f9)])_0x618c4d=_0xfab5a?_0xfab5a['versi'+'on']:'-';else{if(_0x39a021===_0x273fbd['zldFo'])_0x618c4d=_0xfab5a?_0xfab5a[_0x41dee8(0xbf2)+'Appli'+'ed']+'\x20/\x20'+_0xfab5a[_0x41dee8(0xbf2)+'Regis'+'tered'+'AtArm']:'-';else{if(_0x39a021===_0x41dee8(0xb31)+_0x41dee8(0x38e)+_0x41dee8(0x469)+'e()')_0x618c4d=_0xfab5a&&_0xfab5a['wasmM'+_0x41dee8(0x5a6)]&&_0xfab5a[_0x41dee8(0xcd4)+_0x41dee8(0x5a6)]['captu'+'red']?_0x273fbd['JwWGy'](_0x273fbd[_0x41dee8(0x767)](Math[_0x41dee8(0x1e3)](_0xfab5a[_0x41dee8(0xcd4)+_0x41dee8(0x5a6)][_0x41dee8(0x4ff)]/(0xd9c4d+-0x147f5c+0x16e30f))+_0x273fbd['xGgVd'],_0xfab5a['wasmM'+_0x41dee8(0x5a6)]['atMs']),'ms'):'-';else{if(_0x39a021===_0x41dee8(0x422)+'nNetw'+_0x41dee8(0x3c9)+'nc')_0x618c4d=_0xfab5a&&_0xfab5a['esp']?String(_0xfab5a[_0x41dee8(0x68c)][_0x41dee8(0x90d)+'rCoun'+'t']):'-';else{if(_0x39a021===_0x41dee8(0x92b)+'one\x20b'+_0x41dee8(0xb78)+'u')_0x618c4d=_0xfab5a&&_0xfab5a[_0x41dee8(0x68c)]?String(_0xfab5a[_0x41dee8(0x68c)][_0x41dee8(0xc66)+'Count']):'-';else{if(_0x39a021===_0x41dee8(0xbab)+'he\x20li'+_0x41dee8(0x9dd)+'nager')_0x618c4d=_0xfab5a&&_0xfab5a[_0x41dee8(0x68c)]&&_0xfab5a[_0x41dee8(0x68c)][_0x41dee8(0xc6d)+'a']?_0xfab5a[_0x41dee8(0x68c)][_0x41dee8(0xc6d)+'a']+'\x20('+_0xfab5a[_0x41dee8(0x68c)]['camer'+_0x41dee8(0x48d)]+')':'-';else{if(_0x273fbd['oPADK'](_0x39a021,_0x41dee8(0x3cc)+'ntrol'+_0x41dee8(0x3c5)+_0x41dee8(0x9ea)))_0x618c4d=_0xfab5a&&_0xfab5a[_0x41dee8(0x45f)]&&_0xfab5a['local']['feet']?_0xfab5a['local'][_0x41dee8(0xa8a)][_0x41dee8(0x2f4)](function(_0x125ec9){var _0x423c34=_0x41dee8,_0x31c07a={'UMyjv':function(_0x310892,_0x446ede){return _0x310892+_0x446ede;},'Gjfkb':function(_0x2423f3,_0x41b02f){return _0x2423f3+_0x41b02f;},'hYYxJ':function(_0x4e220a,_0x4377a2){return _0x4e220a+_0x4377a2;},'eibVD':'ms\x20wi'+_0x423c34(0xc52)+_0x423c34(0x5e6)+_0x423c34(0xd7e)+'=','DYJGk':_0x423c34(0x20d)+_0x423c34(0x30a),'ljVuR':function(_0x4e634b,_0x9145cf){var _0x53192b=_0x423c34;return _0x489253[_0x53192b(0xa79)](_0x4e634b,_0x9145cf);},'hayOX':function(_0x367a6e,_0xe94c1f){return _0x367a6e+_0xe94c1f;},'FgEbw':'none','KkyUQ':_0x423c34(0xc63)+'reads'+'\x20stay'+'\x20bloc'+_0x423c34(0x9fb)+'ntil\x20'+_0x423c34(0xad9)+_0x423c34(0xc5c)+'ect\x20w'+_0x423c34(0xd03)+'odule'+'.HEAP'+'U8\x20is'+'\x20reac'+'hable'+'.'};if(_0x489253[_0x423c34(0x4c4)]!==_0x423c34(0xb58)){var _0x37697a='';_0x44ea01[_0x423c34(0x323)+'irePr'+_0x423c34(0x581)]&&(_0x37697a=_0x31c07a[_0x423c34(0x3f2)](_0x31c07a[_0x423c34(0x734)](_0x31c07a[_0x423c34(0x1f7)](_0x423c34(0xb18)+_0x423c34(0xb5a)+_0x423c34(0x408)+'t\x20'+_0x1b7631[_0x423c34(0x323)+_0x423c34(0x5c8)+'oof'][_0x423c34(0xb6a)]+_0x31c07a[_0x423c34(0x574)],_0x356850['hookF'+_0x423c34(0x5c8)+_0x423c34(0x581)][_0x423c34(0xacd)+_0x423c34(0x9bf)+'nc']),_0x423c34(0xcc5)+_0x423c34(0xb0c)+'resol'+_0x423c34(0x89d))+_0x4fbe4a[_0x423c34(0x323)+_0x423c34(0x5c8)+'oof'][_0x423c34(0xcde)+_0x423c34(0xbbe)+'eAtFi'+'re']+_0x31c07a['DYJGk'],_0x80c3e2['hookF'+_0x423c34(0x5c8)+_0x423c34(0x581)][_0x423c34(0x703)+_0x423c34(0x1bb)+'AtFir'+'e']||'none')+(_0x423c34(0xc2f)+_0x423c34(0x2d6)+_0x423c34(0x1de)+_0x423c34(0x999)+'exist'+_0x423c34(0x44f)+_0x423c34(0xd10)+'d\x20is\x20'+'not\x20r'+'eacha'+'ble\x20n'+_0x423c34(0x9af))),_0x46dbd0[_0x423c34(0xb60)+'ngs']['push'](_0x31c07a['Gjfkb'](_0x31c07a[_0x423c34(0x4ad)](_0x31c07a[_0x423c34(0x3f2)](_0x31c07a[_0x423c34(0x524)]('Unity'+'\x20inst'+_0x423c34(0x681)+_0x423c34(0x1b2)+_0x423c34(0xc74)+_0x423c34(0xa2c)+_0x423c34(0x664)+'urce:'+'\x20',_0x49bdc7[_0x423c34(0x334)+'ls'][_0x423c34(0x703)+_0x423c34(0x1bb)]||_0x31c07a[_0x423c34(0x201)]),_0x423c34(0xa7d)),_0x31c07a['KkyUQ']),_0x37697a));}else return Math[_0x423c34(0x1e3)](_0x489253['jqKFh'](_0x125ec9,0x2214+0x1acd+0x1*-0x3c7d))/(0x26f7+0xa1+-0x139a*0x2);})['join']('\x20\x20'):'-';else{if(_0x273fbd['oPADK'](_0x39a021,_0x273fbd[_0x41dee8(0xb72)]))_0x618c4d=_0xfab5a&&_0xfab5a['local']&&_0xfab5a[_0x41dee8(0x45f)]['eye']?_0xfab5a[_0x41dee8(0x45f)][_0x41dee8(0x494)]['map'](function(_0xf8b025){return Math['round'](_0xf8b025*(-0x156c+-0x1cfa*0x1+-0x49e*-0xb))/(-0x17b5*-0x1+0x1*-0x199f+0x2*0x127);})[_0x41dee8(0x713)]('\x20\x20'):'-';else{var _0x5880d3=_0x39a021[_0x41dee8(0x75c)]('+');_0x618c4d=_0x14a296(_0xfab5a,_0x273fbd['ceEvL'](_0x5880d3[0x15e8+0xa6d*0x2+-0x2ac2]['index'+'Of'](_0x41dee8(0x1d9)+'h'),-0x2e*0x13+-0x1fdb+0x2345)?_0x273fbd[_0x41dee8(0xce5)]:_0x41dee8(0x3cc)+'ntrol'+_0x41dee8(0x630),_0x273fbd[_0x41dee8(0x778)](parseInt,_0x5880d3[0x61d*0x4+0x1d*0x17+-0x1b0e],-0x1f27+0x2487+-0x550*0x1));}}}}}}}}if(_0x273fbd[_0x41dee8(0x98f)](_0x618c4d,_0x58f47a[_0x5e60e4][_0x41dee8(0x4da)+_0x41dee8(0x762)+'t']))_0x58f47a[_0x5e60e4][_0x41dee8(0x4da)+'onten'+'t']=_0x618c4d;}}catch(_0x4cd3fd){}}function _0x3c9b1b(){var _0x12078b=_0x50f913;try{var _0xba9429=_0x25f8f4();return _0xba9429&&_0xba9429[_0x12078b(0xa8a)]?_0xba9429['feet'][0xb3c+-0xac3*0x2+0x20f*0x5]:null;}catch(_0x39c7a8){return null;}}var _0x48b459=-0x1ecb*-0x1+0x24d3+0x1*-0x439c+0.5,_0x151609=-0x1*-0xec3+0xaa+-0xf67*0x1+0.25,_0x12600c=0x6b4+-0x1668+0xfb5+0.8;function _0x22c6cd(_0x37b950,_0x327b70){var _0x34d629=_0x50f913,_0x2b2e5e={'aaXSu':function(_0x5df984,_0x325fda){return _0x5df984-_0x325fda;},'DsllZ':function(_0x30a1b3,_0x4f2031){var _0x36dddb=_0x36c9;return _0x273fbd[_0x36dddb(0x85d)](_0x30a1b3,_0x4f2031);},'REodi':function(_0x57b485,_0x3b3332){return _0x57b485+_0x3b3332;},'GeeHc':_0x273fbd['ONTWR']};try{var _0x18e7d8=[],_0x4ca372,_0x4069f7,_0x447c72=_0x273fbd['DCVMy'](_0x327b70,null)&&_0x273fbd['ibajd'](_0x327b70,undefined)&&isFinite(_0x327b70),_0x3781b2=0x16c9*-0x1+0x5*-0x59a+-0x32cb*-0x1;for(_0x4ca372=0x80d*0x1+-0x2313+-0x6*-0x481;_0x4ca372<_0x37b950[_0x34d629(0x4f2)+'h'];_0x4ca372++){if(_0x34d629(0x43d)!==_0x34d629(0x297)){var _0x1cdd5e=_0x37b950[_0x4ca372]['v'];if(!_0x1cdd5e)continue;var _0x17cea2=Math[_0x34d629(0x80b)](_0x1cdd5e[-0x62b+-0x296*-0x1+0x1*0x395]*_0x1cdd5e[0x113*-0x17+-0xf2f+0x27e4]+_0x273fbd['xNEmw'](_0x1cdd5e[-0x82*0x12+0x1a8a+-0xd4*0x15],_0x1cdd5e[-0x590*0x5+-0x1bcb+0x379d]));if(_0x17cea2>_0x3781b2)_0x3781b2=_0x17cea2;}else{_0xe50d3b['preve'+'ntDef'+_0x34d629(0xb52)](),_0x85df03[_0x34d629(0x9e8)]=_0x1977df[_0x34d629(0xbb7)](-0xd1f+0x240+0x1d*0x61,_0x14aeca[_0x34d629(0x9e8)]-(0x213+-0x235b+0x10a5*0x2)),_0x1976f2();return;}}var _0x10725d=_0x273fbd[_0x34d629(0xb5b)](_0x3781b2,0xd9*0x7+0xbf*-0x2b+0x1a26+0.25),_0xe12ac3=0x2*0x4e1+0x26b4+0x183b*-0x2;typeof console!==_0x34d629(0x75d)+_0x34d629(0xbb3)&&console['log']&&!globalThis[_0x34d629(0xa85)+'ogged']&&(globalThis[_0x34d629(0xa85)+_0x34d629(0xa33)]=-0x10a5+-0x164+0x120a*0x1,console[_0x34d629(0x367)](_0x273fbd['PGlQz'](_0x273fbd[_0x34d629(0x594)](_0x273fbd[_0x34d629(0x55c)](_0x273fbd[_0x34d629(0x8fc)](_0x273fbd['CEiyN']('PP>>\x20'+'n=',_0x37b950['lengt'+'h'])+_0x273fbd['nfcmQ'],_0x3781b2[_0x34d629(0xb61)+'ed'](-0xf7+0x102a*-0x1+0x1123))+(_0x34d629(0x9ce)+'r='),_0x10725d[_0x34d629(0xb61)+'ed'](-0x4*-0x557+0xc93+-0x21ed))+(_0x34d629(0x1ff)+'n='),_0x447c72)+(_0x34d629(0xa83)+'le='),JSON[_0x34d629(0xc4d)+_0x34d629(0xcd9)](_0x37b950['slice'](-0x3e*-0x1d+0x248d*0x1+-0x2b93,-0x219*-0x12+-0x23a8+-0x218)))));for(_0x4ca372=0x1119+0x44*-0x31+-0x415;_0x273fbd[_0x34d629(0x255)](_0x4ca372,_0x37b950['lengt'+'h']);_0x4ca372++){var _0x2d2f7c=_0x37b950[_0x4ca372]['v'];if(!_0x2d2f7c)continue;if(_0x2d2f7c[-0x6*-0x238+-0xdb7*0x1+-0x1*-0x67]===-0xc3e+-0x13*0x1d6+-0x3a*-0xd0&&_0x273fbd['iqCoh'](_0x2d2f7c[0x2150+0x930+0xb*-0x3dd],-0x1f3a+-0x6bd+0x25f7)&&_0x273fbd[_0x34d629(0x4b8)](_0x2d2f7c[0x1*-0xb8+0x1da+-0x120],-0x19d3*-0x1+0x1f*-0x67+-0xd5a))continue;var _0x513ea9=Math[_0x34d629(0x80b)](_0x2d2f7c[-0xc9a+0x1d09*-0x1+0x29a3]*_0x2d2f7c[-0x44b*-0x5+0x2158*0x1+-0x36cf]+_0x2d2f7c[0x1005+0x1067+-0x2*0x1035]*_0x2d2f7c[0x15bf+-0x2*0x1345+0x11*0xfd]);if(_0x513ea9<_0x10725d){_0xe12ac3++;continue;}_0x18e7d8[_0x34d629(0x356)](_0x37b950[_0x4ca372]);}if(!_0x18e7d8[_0x34d629(0x4f2)+'h'])return{'pos':null,'posAt':null,'candidates':0x0,'cluster':0x0,'groups':0x0,'discarded':_0xe12ac3,'ambiguous':![],'reach':0x0};var _0x5db476=[];for(_0x4ca372=0x4f3*-0x7+0x1a3*0x8+-0x265*-0x9;_0x4ca372<_0x18e7d8[_0x34d629(0x4f2)+'h'];_0x4ca372++){var _0x2e1e47=_0x18e7d8[_0x4ca372]['v'],_0x2cb9ed=-(-0x28d*-0x4+-0x1455*-0x1+-0x1e88);for(_0x4069f7=-0x2*0x13d+0x13ba+-0x1140;_0x4069f7<_0x5db476['lengt'+'h'];_0x4069f7++){var _0x1dfbad=_0x5db476[_0x4069f7]['c'][-0x175c+0x267e+0x1*-0xf22]['v'],_0x2e9938=_0x2e1e47[0x1*-0x1b1+-0xdca+0xf7b]-_0x1dfbad[0x15eb*-0x1+0x12c7+0x324],_0x4bc164=_0x2e1e47[0x1d03*0x1+-0x213f+0x7*0x9b]-_0x1dfbad[0x1324+-0xa19+0xd*-0xb2],_0xb822ba=_0x2e1e47[-0x1f7b+0x8*0x2b1+-0x1*-0x9f5]-_0x1dfbad[-0x1*0x187f+-0x1*-0x1517+0x36a];if(_0x273fbd['KJfmG'](_0x273fbd[_0x34d629(0x258)](_0x2e9938*_0x2e9938+_0x273fbd[_0x34d629(0x479)](_0x4bc164,_0x4bc164),_0x273fbd[_0x34d629(0xc26)](_0xb822ba,_0xb822ba)),_0x151609)){_0x2cb9ed=_0x4069f7;break;}}if(_0x273fbd[_0x34d629(0x466)](_0x2cb9ed,-(0x26cf*0x1+-0xad3+-0x227*0xd)))_0x5db476[_0x34d629(0x356)]({'c':[_0x18e7d8[_0x4ca372]]});else _0x5db476[_0x2cb9ed]['c']['push'](_0x18e7d8[_0x4ca372]);}var _0x2e4acc=_0x5db476[0x2603*-0x1+0x127+0x151*0x1c],_0x27a384=-Infinity;for(_0x4069f7=-0x2f4*-0xd+-0x10*0xc5+-0x1a14;_0x4069f7<_0x5db476['lengt'+'h'];_0x4069f7++){var _0x1aa702=_0x5db476[_0x4069f7]['c'],_0xcda525=_0x1aa702[_0x34d629(0x4f2)+'h']*(0x1a+-0xab1+-0xe7f*-0x1);if(_0x447c72){if('HRMeh'!==_0x273fbd[_0x34d629(0x55d)]){_0x189319(_0x2f04b6&&_0x273fbd['IFHxe'](typeof _0x235c80['on'],_0x34d629(0x823)+'an')?_0x4d7cfb['on']:_0x5bbc8d['on'],_0xeb320&&typeof _0x1ada3f[_0x34d629(0x666)+'r']===_0x273fbd[_0x34d629(0xc7f)]?_0x1faa65['facto'+'r']:_0x5016b8[_0x34d629(0x666)+'r']);return;}else{var _0x5f69d5=Infinity;for(var _0x2acaa4=-0x1944+0x109d*-0x1+0x29e1;_0x273fbd['Qupss'](_0x2acaa4,_0x1aa702[_0x34d629(0x4f2)+'h']);_0x2acaa4++){if(_0x34d629(0xb24)===_0x273fbd[_0x34d629(0x388)]){var _0x21bb34=Math[_0x34d629(0xc83)](_0x1aa702[_0x2acaa4]['v'][0x724*0x4+0x17ea*0x1+-0x3479]-_0x327b70);if(_0x21bb34<_0x5f69d5)_0x5f69d5=_0x21bb34;}else return{'version':_0x54aab9,'when':new _0x38a1d8()[_0x34d629(0x7d0)+_0x34d629(0x223)+'g'](),'elapsedMs':_0x3aa06d['now']()-_0x585e3e,'host':_0x1b30ee,'uwmk':!!(_0x5c575a[_0x34d629(0x480)+'WebMo'+_0x34d629(0x7a1)]&&_0x1a6890['Unity'+'WebMo'+_0x34d629(0x7a1)][_0x34d629(0x236)+'me']),'il2CppContext':![],'arm':_0x45a4d4,'hooksTotal':_0x2fd64c['lengt'+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x44e6da(_0x4b073e&&_0x1a4187['messa'+'ge']||_0x3d053f)};}_0xcda525-=_0x5f69d5;}}else{var _0x4b88ba=-0x1167*-0x1+-0x36a+-0xdfd;for(var _0x194694=-0x7c4+-0x1d7+0x1*0x99b;_0x273fbd[_0x34d629(0xa77)](_0x194694,_0x1aa702[_0x34d629(0x4f2)+'h']);_0x194694++){var _0x276826=Math['sqrt'](_0x1aa702[_0x194694]['v'][0x25*-0xe9+-0x1d1d+0x39*0x11a]*_0x1aa702[_0x194694]['v'][-0x137*-0x1d+-0x23b*-0x6+-0x309d]+_0x273fbd[_0x34d629(0xd26)](_0x1aa702[_0x194694]['v'][0x3e*-0x1f+0x1e4d+-0x16c9],_0x1aa702[_0x194694]['v'][-0x2*-0x14e+-0x219d+-0x11*-0x1d3]));if(_0x273fbd[_0x34d629(0x2fb)](_0x276826,_0x4b88ba))_0x4b88ba=_0x276826;}_0xcda525+=_0x4b88ba;}if(_0x273fbd['SprCH'](_0xcda525,_0x27a384)){if(_0x273fbd[_0x34d629(0x327)](_0x273fbd['qfxfD'],_0x273fbd[_0x34d629(0x4cd)])){if(!_0x4812ab)return;var _0x3c0081=_0x1830b9['offse'+'tWidt'+'h']||-0xb8e+-0x16d*0x7+0x17f5,_0x3b0c6a=_0xa3315b[_0x34d629(0xba1)+_0x34d629(0xb23)+'ht']||0xafc+0x3d*-0x3+-0x8b5,_0x1af94b=(_0x154065['clien'+'tX']||-0x1*0x2629+-0x2bb*-0x5+-0x2*-0xc41)-_0x4f6ed1,_0x17a7fa=(_0x3995ce['clien'+'tY']||0x109*-0x2+0x4*0x77+0x36)-_0x458a89;_0x1af94b=_0x13e677['max'](-0x1*0xd64+0xf3f*-0x1+0x1cab,_0x35fc30[_0x34d629(0xa59)](_0x2b2e5e['aaXSu'](_0x20d35b[_0x34d629(0xa55)+'Width']||0x120b+0x1f92+0xd*-0x3d1,_0x3c0081)-(0xc3c+-0x97*0x3d+0x17c7),_0x1af94b)),_0x17a7fa=_0x10b917['max'](-0xc*0x321+0x1226*0x1+0x6*0x33d,_0x275cf3[_0x34d629(0xa59)](_0x2b2e5e['aaXSu'](_0x31400[_0x34d629(0xa55)+_0x34d629(0xcf6)+'t']||0x23e6+0x3b*0x4+-0x24d2,_0x3b0c6a)-(-0xef*0x19+0xa10+-0x1*-0xd4f),_0x17a7fa)),_0x3e450f['style'][_0x34d629(0x1a0)]=_0x2b2e5e['DsllZ'](_0x1af94b,'px'),_0x2923c6['style'][_0x34d629(0x4c0)]=_0x2b2e5e['REodi'](_0x17a7fa,'px'),_0x5d8b9b['style']['right']='auto',_0x3cf178[_0x34d629(0x481)]['botto'+'m']=_0x2b2e5e[_0x34d629(0x309)],_0x4ff618[_0x34d629(0x614)]={'x':_0x1af94b,'y':_0x17a7fa};}else _0x27a384=_0xcda525,_0x2e4acc=_0x5db476[_0x4069f7];}}var _0x4358c3=_0x2e4acc['c'][-0xab4+-0x1756+0x220a],_0xe7ddca=-(0x297*0x3+-0x903*0x2+0xa42);for(_0x4069f7=0x1514+-0x40*-0x1+0x4e*-0x46;_0x273fbd['ELINq'](_0x4069f7,_0x2e4acc['c'][_0x34d629(0x4f2)+'h']);_0x4069f7++){var _0x28dcfc=_0x2e4acc['c'][_0x4069f7]['v'],_0x2145c0=Math['sqrt'](_0x273fbd['qHHAC'](_0x28dcfc[-0xc54+-0x1*-0x146f+-0x81b]*_0x28dcfc[-0xc31+-0x2e3+0xf14],_0x273fbd[_0x34d629(0x2c9)](_0x28dcfc[-0x57c+-0x1e73+0x23f1],_0x28dcfc[-0xc64*0x2+0xd47+0xb83])));(_0x2145c0>_0xe7ddca||_0x2145c0===_0xe7ddca&&_0x28dcfc[0x20a1+0x7*-0x554+-0x1*-0x4ac]<_0x4358c3['v'][-0x1df1+0x223*0x3+0x1789])&&(_0xe7ddca=_0x2145c0,_0x4358c3=_0x2e4acc['c'][_0x4069f7]);}return{'pos':_0x4358c3['v'],'posAt':_0x4358c3['o'],'candidates':_0x18e7d8[_0x34d629(0x4f2)+'h'],'cluster':_0x2e4acc['c'][_0x34d629(0x4f2)+'h'],'groups':_0x5db476[_0x34d629(0x4f2)+'h'],'discarded':_0xe12ac3,'ambiguous':_0x273fbd['dCDRv'](_0x5db476[_0x34d629(0x4f2)+'h'],-0x1f47+-0x1*0x110b+0x1*0x3053),'reach':_0xe7ddca};}catch(_0x32ff80){if(_0x273fbd[_0x34d629(0xad6)](_0x34d629(0x670),_0x273fbd[_0x34d629(0x8cf)]))return console[_0x34d629(0x367)](_0x34d629(0xb75)+_0x34d629(0x755),_0x32ff80['messa'+'ge'],String(_0x32ff80['stack']||'')['split']('\x0a')[_0x34d629(0xc72)](0x1a37+0x1e2d+-0x3864,-0x2593+-0x65d+0x2bf4)['join']('\x20|\x20')),{'pos':null,'posAt':null,'candidates':0x0,'cluster':0x0,'groups':0x0,'discarded':0x0,'ambiguous':![],'reach':0x0};else _0x273fbd[_0x34d629(0xa7a)](_0x437776,_0x4ecf9d);}}function _0x25f8f4(){var _0x59978b=_0x50f913,_0x4b6dc9={'sryBw':function(_0x4bab0e,_0x4eabd8){return _0x273fbd['WfJNV'](_0x4bab0e,_0x4eabd8);}};if(_0x273fbd['NVZPn']===_0x59978b(0xbcb))return _0x273fbd['wtWtU'](_0x146dce);else{var _0x2539d8=_0x5dca57['FPSco'+_0x59978b(0xa34)+_0x59978b(0x630)];if(!_0x2539d8||!_0x2539d8['ptr'])return null;var _0x36cc4c=_0x1659e8['FPSco'+'ntrol'+_0x59978b(0x630)]||[],_0x128de1=[];for(var _0x3c949e=-0x1983*0x1+0x3a*-0x8+0x1b53;_0x3c949e<_0x36cc4c['lengt'+'h'];_0x3c949e++){if(_0x36cc4c[_0x3c949e][-0x25a2+0x713*0x5+0x244]!=='v3')continue;var _0x123071=_0x5dda32(_0x2539d8[_0x59978b(0xccb)],_0x36cc4c[_0x3c949e][-0x2db*-0xb+-0x2b*-0x5c+-0x2edd],-0x18fd+-0x1a2f+0x332f);if(_0x123071)_0x128de1[_0x59978b(0x356)]({'o':_0x273fbd[_0x59978b(0xcbe)]('0x',_0x36cc4c[_0x3c949e][-0x1a6c*-0x1+0x112d*-0x1+-0x93f]['toStr'+_0x59978b(0x5ab)](0x94d*0x4+-0x6bd*-0x4+-0x1*0x4018)),'v':_0x123071});}var _0x5e8ef5=_0x22c6cd(_0x128de1,null);if(!_0x5e8ef5[_0x59978b(0x614)])return null;var _0xf6ec88=_0x5e8ef5['pos'];return{'ptr':_0x2539d8[_0x59978b(0xccb)],'feet':_0xf6ec88,'posAt':_0x5e8ef5['posAt'],'candidates':_0x5e8ef5[_0x59978b(0x8f4)+'dates'],'cluster':_0x5e8ef5[_0x59978b(0x7a6)+'er'],'copies':_0x128de1['filte'+'r'](function(_0x338ae4){var _0x401156=_0x59978b;return _0x338ae4['v'][0x1f3*-0x1+0x155d+-0x136a]===_0xf6ec88[-0x20c*-0x1+0x1*-0xdfb+0x1*0xbef]&&_0x338ae4['v'][0x137+0x3cd*0x4+-0x106a*0x1]===_0xf6ec88[-0x11fb+-0x8*-0x4d0+-0x521*0x4]&&_0x4b6dc9[_0x401156(0xc7d)](_0x338ae4['v'][0x284+0x16*-0x15b+0x1b50],_0xf6ec88[0x1fbc+0x6e8+-0x7ba*0x5]);})[_0x59978b(0x2f4)](function(_0x542653){return _0x542653['o'];}),'eye':[_0xf6ec88[0x22f*0x1+-0x9*0x2e7+0x17f0],_0xf6ec88[0x1851+-0x3f2+-0x145e]+_0x12600c,_0xf6ec88[-0x1*-0x6a+0x1287+0x1*-0x12ef]],'reach':_0x5e8ef5[_0x59978b(0x5a4)],'pitch':_0x131249(_0x2539d8['ptr']+(-0x1265*0x1+0x5be+0x1*0xe13),_0x59978b(0xd5a)),'yaw':_0x131249(_0x2539d8['ptr']+(-0x2*0xcfb+0xbee+0xf78),'f32')};}}function _0x596061(){var _0x366fa9=_0x50f913,_0x300c95={'KxJVh':_0x366fa9(0xd09)+'b','YeKFk':_0x366fa9(0x5a7)+'l>','DEdqs':'butto'+'n'};if(_0x273fbd['kEdmo'](_0x273fbd[_0x366fa9(0xc58)],'tegeR')){var _0x49be8b=_0x3dfb14[_0x57e795],_0x595c24=_0x1094b9(_0x366fa9(0xa67)+'n',_0x300c95[_0x366fa9(0x5dc)],_0x300c95[_0x366fa9(0x369)]+_0x49be8b['label']+(_0x366fa9(0x78f)+_0x366fa9(0x980)));_0x595c24['type']=_0x300c95['DEdqs'],_0x595c24['title']=_0x49be8b[_0x366fa9(0x1d0)],function(_0x2d402a){var _0x286bde=_0x366fa9,_0x275cf6={'lqoZX':function(_0x46bb15,_0x28ff00){return _0x46bb15(_0x28ff00);}};_0x595c24[_0x286bde(0xaeb)+'ck']=function(){_0x275cf6['lqoZX'](_0x30c4bf,_0x2d402a);};}(_0x49be8b['id']),_0xe7f39d[_0x49be8b['id']]=_0x595c24,_0xac0a3[_0x366fa9(0x786)+'dChil'+'d'](_0x595c24);}else{var _0x43e819=_0x273fbd['oxdud'](_0x25f8f4),_0x5b1692=[],_0x2e8f2e=_0x17f483['Photo'+_0x366fa9(0x1c3)+'orkSy'+'nc']||{},_0x2ddbbd=Object[_0x366fa9(0x5f2)](_0x2e8f2e);for(var _0x432e08=0xf40+-0x26d5+-0x1*-0x1795;_0x432e08<_0x2ddbbd[_0x366fa9(0x4f2)+'h']&&_0x432e08<0x3*-0x532+0x1da0+-0xdea;_0x432e08++){var _0x2c321e=_0x2e8f2e[_0x2ddbbd[_0x432e08]],_0x3e67ad=[],_0x14d905=_0x1659e8['Photo'+_0x366fa9(0x1c3)+_0x366fa9(0x3c9)+'nc']||[];for(var _0x57885c=0x248*-0x2+-0x249f+0x1*0x292f;_0x57885c<_0x14d905['lengt'+'h'];_0x57885c++){if(_0x273fbd[_0x366fa9(0x3f1)](_0x14d905[_0x57885c][0x698+-0x1*-0xb93+-0x122a],'v3'))continue;var _0x45fd42=_0x5dda32(_0x2c321e[_0x366fa9(0xccb)],_0x14d905[_0x57885c][0xcd*-0xa+-0x9dc*0x2+-0x222*-0xd],-0x2073+-0x1c0d+-0x7*-0x8a5);if(_0x45fd42)_0x3e67ad[_0x366fa9(0x356)]({'o':'0x'+_0x14d905[_0x57885c][0x1a8*-0x14+0x1e*0x1+0x152*0x19][_0x366fa9(0x433)+_0x366fa9(0x5ab)](-0x2*-0xa13+-0x114b+-0xd*0x37),'v':_0x45fd42});}var _0x15ebf2=_0x22c6cd(_0x3e67ad,_0x43e819?_0x43e819[_0x366fa9(0xa8a)][-0x25c0+-0x1212+0x37d3]:null),_0x5e8bef=_0x15ebf2[_0x366fa9(0x614)];if(!_0x5e8bef)continue;var _0x405b7d={'ptr':_0x2c321e['ptr'],'x':_0x5e8bef[-0x4a3+0x45e+0x45],'y':_0x5e8bef[-0x40b+0xda+0x199*0x2],'z':_0x5e8bef[-0x1*0xf07+0xa*0x2b1+-0xbe1],'posAt':_0x15ebf2[_0x366fa9(0x714)],'candidates':_0x15ebf2['candi'+'dates'],'cluster':_0x15ebf2[_0x366fa9(0x7a6)+'er'],'team':_0x131249(_0x273fbd['xHqOR'](_0x2c321e['ptr'],-0x4ed+0x185e+-0x1319),_0x366fa9(0x8d5)),'localFlag':_0x131249(_0x273fbd['FknHv'](_0x2c321e[_0x366fa9(0xccb)],0x2645+0x105b+-0x3624),_0x366fa9(0x8d5))};if(_0x43e819){var _0x705d71=_0x5e8bef[-0x19aa+-0x11ed*0x1+-0x1*-0x2b97]-_0x43e819[_0x366fa9(0xa8a)][0x1727+0x221f+-0x3946],_0x521210=_0x273fbd['sDhrN'](_0x5e8bef[-0x149d+0x13c9+0xd6],_0x43e819[_0x366fa9(0xa8a)][0x1801+0x303+0x1*-0x1b02]);_0x405b7d['d']=Math[_0x366fa9(0x80b)](_0x705d71*_0x705d71+_0x521210*_0x521210),_0x405b7d[_0x366fa9(0x904)+'ng']=_0x273fbd[_0x366fa9(0x90f)](_0x273fbd[_0x366fa9(0xcf2)](Math[_0x366fa9(0x6c5)](_0x705d71,_0x521210),0x10f*-0xa+-0x10*-0x9f+0x15a),Math['PI']);}_0x5b1692['push'](_0x405b7d);}return{'me':_0x43e819,'list':_0x5b1692};}}var _0x4b08ca=null;function _0x3b9987(){var _0xb191a0=_0x50f913,_0x28a3d4={'OToOV':_0x273fbd['pCulL'],'JEtWM':'color'+':'};if(_0x4b08ca)return _0x4b08ca;try{if('dGHhB'!==_0x273fbd[_0xb191a0(0x950)]){if(!document[_0xb191a0(0x1af)]||!document[_0xb191a0(0x1af)][_0xb191a0(0x786)+_0xb191a0(0x31e)+'d'])return null;var _0x4915ce=document['creat'+_0xb191a0(0x224)+_0xb191a0(0x7ab)]('div');_0x4915ce['id']=_0x273fbd['kVNrw'],_0x4915ce[_0xb191a0(0x481)][_0xb191a0(0x838)+'xt']='posit'+'ion:f'+'ixed;'+'right'+':12px'+';top:'+'46px;'+'z-ind'+'ex:21'+_0xb191a0(0xa4c)+_0xb191a0(0x63a)+'ointe'+_0xb191a0(0x27f)+_0xb191a0(0x1ca)+'one;'+(_0xb191a0(0x754)+_0xb191a0(0x1e3)+':rgba'+_0xb191a0(0x49b)+_0xb191a0(0xbbd)+_0xb191a0(0x538)+_0xb191a0(0x5fe)+'r:1px'+_0xb191a0(0x708)+'d\x20rgb'+_0xb191a0(0x393)+_0xb191a0(0x716)+_0xb191a0(0xcc7)+_0xb191a0(0x277)+'rder-'+_0xb191a0(0xb1b)+'s:10p'+'x;')+('paddi'+_0xb191a0(0x1bc)+'x;fon'+'t:10p'+_0xb191a0(0x6b8)+_0xb191a0(0xd1c)+'onosp'+_0xb191a0(0xa42)+_0xb191a0(0xbf1)+_0xb191a0(0x634)+'nospa'+_0xb191a0(0x371)+_0xb191a0(0x5d4)+_0xb191a0(0xaac)+'9;')+(_0xb191a0(0x3dd)+_0xb191a0(0x49f)+_0xb191a0(0xd6a)+_0xb191a0(0xb26)+_0xb191a0(0x3eb)+_0xb191a0(0x3dd)+_0xb191a0(0x49f)+_0xb191a0(0xd6a)+'e;'),_0x4915ce[_0xb191a0(0xa55)+_0xb191a0(0x807)]=_0x273fbd[_0xb191a0(0xc91)]+('<div\x20'+_0xb191a0(0x852)+_0xb191a0(0x93e)+'-esp-'+'lg\x22\x20s'+_0xb191a0(0x661)+_0xb191a0(0xa1e)+_0xb191a0(0xce0)+_0xb191a0(0x62a)+_0xb191a0(0xcc6)+_0xb191a0(0x2f3)+'>');var _0x301e4e={'cv':{'getContext':function(){return null;}},'el':_0x4915ce};document[_0xb191a0(0x1af)][_0xb191a0(0x786)+'dChil'+'d'](_0x4915ce),_0x4b08ca={'el':_0x4915ce,'cv':_0x4915ce['query'+_0xb191a0(0x88c)+'tor'](_0x273fbd[_0xb191a0(0xa45)]),'lg':_0x4915ce['query'+_0xb191a0(0x88c)+_0xb191a0(0xc8f)](_0xb191a0(0xca4)+_0xb191a0(0x293)+_0xb191a0(0xaff))};if(!_0x4b08ca['cv']||!_0x4b08ca['cv'][_0xb191a0(0x502)+'ntext'])_0x4b08ca=_0x301e4e;return _0x4b08ca;}else _0x1008a3[_0xb191a0(0x76d)](_0x28a3d4[_0xb191a0(0x405)],_0x28a3d4['JEtWM']+_0x1eceae,_0x4da3e8);}catch(_0x501771){if(_0x273fbd[_0xb191a0(0xb66)](_0x273fbd['gqleP'],_0xb191a0(0xd06)))return null;else{if(_0x5b63fb&&_0x308244['buffe'+'r']&&_0x280209[_0xb191a0(0x3fc)+'r'][_0xb191a0(0x52d)+_0xb191a0(0x4f3)])return _0x477131[_0xb191a0(0x704)+'e']=_0x3a3c55[_0xb191a0(0x704)+'e']||_0xb191a0(0x38e)+_0xb191a0(0x469)+_0xb191a0(0x3f7)+_0xb191a0(0xc9e)+'s.mem'+_0xb191a0(0x3d8),new _0x5b39fd(_0x4b865c[_0xb191a0(0x3fc)+'r']);}}}var _0x5e7179=null;function _0x506fcb(){var _0x56fe8a=_0x50f913;if(_0x5e7179)return _0x5e7179;try{if(!document[_0x56fe8a(0x1af)]||!document[_0x56fe8a(0x1af)][_0x56fe8a(0x786)+'dChil'+'d'])return null;var _0x1478ea=document[_0x56fe8a(0x72f)+_0x56fe8a(0x224)+_0x56fe8a(0x7ab)]('canva'+'s');return _0x1478ea['id']=_0x56fe8a(0xb39)+_0x56fe8a(0xcac)+'es',_0x1478ea[_0x56fe8a(0x481)]['cssTe'+'xt']=_0x56fe8a(0xa36)+_0x56fe8a(0xa4d)+'ixed;'+_0x56fe8a(0xd7b)+_0x56fe8a(0x5e2)+_0x56fe8a(0x245)+_0x56fe8a(0x860)+':2147'+_0x56fe8a(0xcfe)+_0x56fe8a(0x9a4)+'nter-'+_0x56fe8a(0x418)+_0x56fe8a(0xa62)+'e;',document['body']['appen'+_0x56fe8a(0x31e)+'d'](_0x1478ea),_0x5e7179={'cv':_0x1478ea},_0x5e7179;}catch(_0x5d0c24){if(_0x273fbd[_0x56fe8a(0x954)]!=='WGpAm')return null;else _0xf65c4c[_0x56fe8a(0x5ca)]();}}function _0x193613(_0x4ade7f){var _0x4aa8af=_0x50f913,_0x153084={'hBHLo':function(_0x3d9a29,_0x2a8cf4){return _0x3d9a29+_0x2a8cf4;}};if(_0x4aa8af(0x667)!==_0x4aa8af(0x9b6))try{if(_0x273fbd[_0x4aa8af(0xae6)]==='HsFhQ'){var _0x3ab258=Math['max'](-0xb2a*0x1+0x1*0x1283+-0x8*0xeb,window[_0x4aa8af(0xa55)+'Width']||document['docum'+'entEl'+'ement'][_0x4aa8af(0x8cd)+'tWidt'+'h']||-0x1*0x2453+-0x16f+0x25c2),_0x50713f=Math['max'](-0x2516+-0x2020+0x4537,window[_0x4aa8af(0xa55)+_0x4aa8af(0xcf6)+'t']||document[_0x4aa8af(0x1c2)+_0x4aa8af(0x1b4)+_0x4aa8af(0x656)][_0x4aa8af(0x8cd)+_0x4aa8af(0xb23)+'ht']||0x1e13*0x1+0x165+-0x1f78);return(_0x4ade7f['cv'][_0x4aa8af(0xae2)]!==_0x3ab258||_0x4ade7f['cv'][_0x4aa8af(0x463)+'t']!==_0x50713f)&&(_0x4ade7f['cv']['width']=_0x3ab258,_0x4ade7f['cv'][_0x4aa8af(0x463)+'t']=_0x50713f),{'w':_0x3ab258,'h':_0x50713f};}else _0x298052=_0x54b55a+_0x4c6069,_0x125d7c=_0x153084['hBHLo'](_0x5a20f5,_0x3cf786);}catch(_0x687b82){if(_0x4aa8af(0xc8e)!=='xPYlE')return{'w':0x0,'h':0x0};else{if(_0x252e2f)return _0x2dfb0c;try{if(!_0x4ad538[_0x4aa8af(0x1af)]||!_0x245968[_0x4aa8af(0x1af)]['appen'+'dChil'+'d'])return null;var _0x499942=_0xe364a[_0x4aa8af(0x72f)+'eElem'+_0x4aa8af(0x7ab)](_0x4aa8af(0x795)+'s');return _0x499942['id']=_0x4aa8af(0xb39)+_0x4aa8af(0xcac)+'es',_0x499942[_0x4aa8af(0x481)]['cssTe'+'xt']=_0x4aa8af(0xa36)+_0x4aa8af(0xa4d)+_0x4aa8af(0x8c1)+_0x4aa8af(0xd7b)+'0;top'+':0;z-'+'index'+_0x4aa8af(0x985)+'48364'+'5;poi'+_0x4aa8af(0x1ce)+'event'+'s:non'+'e;',_0x43faef['body'][_0x4aa8af(0x786)+_0x4aa8af(0x31e)+'d'](_0x499942),_0x43c077={'cv':_0x499942},_0x5844fe;}catch(_0x4d432e){return null;}}}else _0x13b0f9[_0x4aa8af(0x292)+'eItem'](_0x2090f7),_0x1ee608=!![];}function _0x5eead8(_0x21c337){var _0x3a4c55=_0x50f913,_0x1e38b2={'prXat':_0x3a4c55(0xafa)},_0x406fe3=_0x5e7179;if(!_0x406fe3)return;var _0x2f8026=_0x406fe3['cv'][_0x3a4c55(0x502)+_0x3a4c55(0xcdd)]&&_0x406fe3['cv'][_0x3a4c55(0x502)+_0x3a4c55(0xcdd)]('2d');if(!_0x2f8026)return;var _0x484cba=_0x273fbd[_0x3a4c55(0x86e)](_0x193613,_0x406fe3);_0x2f8026['clear'+'Rect'](0x1c1c+-0x20c2+0x4a6,0xa*0x33b+-0x31*0xe+0x768*-0x4,_0x484cba['w'],_0x484cba['h']);if(!_0x130958['boxes']||!_0x21c337||!_0x21c337['me'])return;var _0x208d71=_0x21c337['me'],_0x4a2d24=null,_0x4af736=_0x17f483['Photo'+_0x3a4c55(0x1c3)+'orkSy'+'nc']||{},_0x19427f=Object[_0x3a4c55(0x5f2)](_0x4af736);for(var _0x601c2=0x1869+-0x20c2+-0x859*-0x1;_0x273fbd['zDJcF'](_0x601c2,_0x19427f['lengt'+'h']);_0x601c2++){var _0x593f81=_0x5dda32(_0x4af736[_0x19427f[_0x601c2]][_0x3a4c55(0xccb)],-0x17b2+-0x1bcd+-0x33b3*-0x1,0xbff+0x44*-0x7a+-0x4*-0x51b);if(_0x593f81&&_0x593f81[0xd31+-0x1*0x210d+0x1*0x13dc]===-0x10b3+-0xab5+-0x1b68*-0x1&&_0x593f81[0x1e9f+0xad9*0x1+-0x37*0xc1]===-0x8e3+-0x14ed+0x1dd0&&_0x593f81[-0x15d*-0x1+0x3f*0x7+0xc5*-0x4]===0x1497+-0x4d0+-0xfc7){if(_0x273fbd[_0x3a4c55(0xb1f)]('BsCYb',_0x273fbd[_0x3a4c55(0x697)])){_0x4a2d24=_0x131249(_0x4af736[_0x19427f[_0x601c2]]['ptr']+(-0x1fa*0x2+0x12ff+-0xeb3),'i32');break;}else try{var _0x496b60=_0x5343fe&&_0x22634c[_0x3a4c55(0xae4)];if(!_0x496b60||_0x496b60[_0x3a4c55(0x77c)+'ura']!==_0x1ef27b||_0x496b60[_0x3a4c55(0xd20)]!==_0x1e38b2[_0x3a4c55(0xcd1)])return;_0x30b10e(_0x496b60['cmd'],_0x496b60['arg']);}catch(_0x27df6a){}}}for(var _0x2fbac0=0x21*0x51+0x22a8+-0x2d19;_0x273fbd[_0x3a4c55(0xb56)](_0x2fbac0,_0x21c337[_0x3a4c55(0xc03)]['lengt'+'h']);_0x2fbac0++){var _0x4a183c=_0x21c337['list'][_0x2fbac0],_0x3ca567=_0x273fbd[_0x3a4c55(0x253)](_0x4a2d24,null)&&_0x273fbd['qKYeh'](_0x4a183c[_0x3a4c55(0x1a1)],_0x4a2d24),_0xe80a1b=_0x49ef55(_0x208d71[_0x3a4c55(0x494)],[_0x4a183c['x'],_0x273fbd['gVgJM'](_0x4a183c['y'],0x219c+0x1631+0x1*-0x37cc),_0x4a183c['z']],_0x484cba['w'],_0x484cba['h']),_0x92dee4=_0x49ef55(_0x208d71[_0x3a4c55(0x494)],[_0x4a183c['x'],_0x273fbd[_0x3a4c55(0x77f)](_0x4a183c['y'],0x1fd0*-0x1+0x1*-0x235e+0x432e+0.8),_0x4a183c['z']],_0x484cba['w'],_0x484cba['h']);if(!_0xe80a1b||!_0x92dee4)continue;var _0x292d6b=Math[_0x3a4c55(0xa59)](_0xe80a1b['x'],_0x92dee4['x']),_0x2257a6=Math['max'](_0xe80a1b['x'],_0x92dee4['x']),_0x5639a7=Math[_0x3a4c55(0xa59)](_0xe80a1b['y'],_0x92dee4['y']),_0x4e80d=Math['max'](_0xe80a1b['y'],_0x92dee4['y']),_0x279186=Math[_0x3a4c55(0xbb7)](0x561*0x1+0xc7*-0x7+0x13,Math['min'](0x235e+0x2662+-0x4984,_0x2257a6-_0x292d6b)),_0x48b076=Math['max'](0x1e10+-0x1*0xd07+-0x1103,Math['min'](0x25cf*-0x1+-0x2*0x132f+0x4cb9,_0x4e80d-_0x5639a7)),_0x57168f=(_0x292d6b+_0x2257a6)/(0x1d49+-0x17b*-0x17+-0x3f54),_0x46eca0=(_0x5639a7+_0x4e80d)/(-0x5*0x50c+-0x1*0x2f9+-0x1c37*-0x1);_0x2f8026['strok'+'eStyl'+'e']=_0x3ca567?_0x273fbd['FtWSO']:_0x273fbd[_0x3a4c55(0x8cb)],_0x2f8026[_0x3a4c55(0x5a5)+'idth']=_0x3ca567?-0xf33+-0xf*-0x145+-0x1*0x3d7:0x2548+0xc13+-0x1073*0x3,_0x2f8026[_0x3a4c55(0x509)+'eRect'](_0x273fbd['gVgJM'](_0x57168f,_0x279186/(0x1895+0x1*0x1105+-0x2998)),_0x46eca0-_0x273fbd['VJrwZ'](_0x48b076,-0x14*0x139+-0x10a*0x25+-0x7dd*-0x8),_0x279186,_0x48b076),!_0x3ca567&&(_0x2f8026['fillS'+_0x3a4c55(0x5c9)]=_0x273fbd[_0x3a4c55(0x8cb)],_0x2f8026[_0x3a4c55(0x9a3)]='10px\x20'+'ui-mo'+_0x3a4c55(0xa8c)+_0x3a4c55(0x63c)+_0x3a4c55(0x722)+'s,mon'+_0x3a4c55(0x84b)+'e',_0x2f8026[_0x3a4c55(0x5ac)+_0x3a4c55(0x57a)](Math['round'](_0x4a183c['d']||0x1b8e*-0x1+0x1e36+0x2a8*-0x1)+'m',_0x273fbd['SGQkv'](_0x57168f,_0x279186/(0x2e*-0x59+-0x17*0x14+0x11cc)),_0x273fbd[_0x3a4c55(0xbe7)](_0x273fbd[_0x3a4c55(0xbfe)](_0x46eca0,_0x273fbd['sdJJV'](_0x48b076,-0x10d1+-0x975+0x1a48)),0x11*-0xc1+0xfb*0x13+0x63*-0xf)));}}function _0x4dc81d(){var _0x1a8c7e=_0x50f913;if(_0x273fbd['UUxhp'](_0x1a8c7e(0x888),'IVMIg')){var _0x25923c=_0x3b9987();if(!_0x25923c||!_0x25923c['cv'])return;try{var _0x420ecb=_0x25923c['cv']['getCo'+'ntext']&&_0x25923c['cv']['getCo'+_0x1a8c7e(0xcdd)]('2d');if(!_0x420ecb)return;var _0x5ce6ff=_0x25923c['cv']['width'],_0x192c94=_0x5ce6ff/(0x1d23+-0x14f0+0x2bb*-0x3),_0x39d213=_0x596061(),_0x4b083e=_0x39d213['me'];_0x420ecb[_0x1a8c7e(0x358)+_0x1a8c7e(0xa03)](0xc*-0x14f+0x463*0x1+0x1*0xb51,-0x1*0x1ead+-0x2e*0x7a+-0xa85*-0x5,_0x5ce6ff,_0x5ce6ff),_0x420ecb['strok'+'eStyl'+'e']=_0x1a8c7e(0x9c3)+_0x1a8c7e(0xd78)+'43,17'+_0x1a8c7e(0x65b)+')',_0x420ecb['lineW'+_0x1a8c7e(0x6d5)]=0x1008+0x45a+-0x1461;for(var _0xc817db=0x1a3*0x5+0x2020+0xe*-0x2e1;_0xc817db<=0x5d*0x16+0x1*0x106+0x1*-0x901;_0xc817db++){if('iouqr'!==_0x1a8c7e(0x6fc))return new _0x12f9ef(_0xba45bd['buffe'+'r'],_0x584381['byteO'+_0x1a8c7e(0x962)],_0x301a4c['byteL'+_0x1a8c7e(0x4f3)]);else _0x420ecb[_0x1a8c7e(0x66a)+'Path'](),_0x420ecb[_0x1a8c7e(0x517)](_0x192c94,_0x192c94,(_0x192c94-(-0x1450+0x15cb+-0x177))*_0xc817db/(-0xe3*-0x25+0x1*-0x245d+0x391),0x23f*-0x1+0xf50+-0x3*0x45b,Math['PI']*(-0x1*-0x177a+-0x5*0x257+0x83*-0x17)),_0x420ecb[_0x1a8c7e(0x509)+'e']();}_0x420ecb[_0x1a8c7e(0x66a)+_0x1a8c7e(0x549)](),_0x420ecb[_0x1a8c7e(0x2db)+'o'](-0x7b*-0x1d+-0xd9*0x17+0x594,_0x192c94),_0x420ecb['lineT'+'o'](_0x5ce6ff-(-0x1d17+-0xbf7*-0x3+-0x2*0x365),_0x192c94),_0x420ecb['moveT'+'o'](_0x192c94,0x1ce+0xb7*0x25+-0x1c3d),_0x420ecb['lineT'+'o'](_0x192c94,_0x5ce6ff-(0x1*-0x11a5+0x4a9*-0x5+0x28f6)),_0x420ecb['strok'+'e']();if(!_0x4b083e){if(_0x25923c['lg'])_0x25923c['lg'][_0x1a8c7e(0x4da)+'onten'+'t']='';return;}var _0x52ed3b=(_0x192c94-(0xfb5+0x1074+-0x1*0x2023))/_0x130958['span'],_0x513ed2=null,_0x726c=_0x17f483[_0x1a8c7e(0x422)+_0x1a8c7e(0x1c3)+_0x1a8c7e(0x3c9)+'nc']||{},_0x20f7dc=Object['keys'](_0x726c);for(var _0x128dba=0x833*0x1+-0xcfd+0x4ca;_0x273fbd['mXSit'](_0x128dba,_0x20f7dc[_0x1a8c7e(0x4f2)+'h']);_0x128dba++){var _0x38e545=_0x5dda32(_0x726c[_0x20f7dc[_0x128dba]][_0x1a8c7e(0xccb)],-0xb86+0x4*0x88a+-0x20a*0xb,-0x1*0x1ad5+-0x388*-0x1+0x1750);if(_0x38e545&&_0x38e545[-0x1*-0x2653+-0x11c3*0x1+-0x1490]===-0x26ed+0x29*-0xc5+0xbbf*0x6&&_0x273fbd['DigeP'](_0x38e545[-0xd10*0x1+-0x1ec*0x4+0x14c1],-0x26d1+0x21cd+-0x2*-0x282)&&_0x273fbd['GRAgP'](_0x38e545[0x252c+0x1a43+-0x3f6d],0x257a+0x143f+0x7*-0x83f)){if('eAkqE'==='eAkqE'){_0x513ed2=_0x131249(_0x273fbd[_0x1a8c7e(0x43f)](_0x726c[_0x20f7dc[_0x128dba]][_0x1a8c7e(0xccb)],-0x192*0x1+0x4bb+-0x2d1),_0x273fbd[_0x1a8c7e(0x861)]);break;}else _0x3544fb={'rawA':_0x1bddd2[_0x1a8c7e(0x970)+'st'],'rawB':_0x3cbb9d[_0x1a8c7e(0x8fb)],'hits':_0x3ad340['pairH'+'its'],'name':_0x47b81b},_0x184326=_0x3e30cf['pairH'+_0x1a8c7e(0x447)];}}var _0x4841e6=0x751*0x2+-0xe52+-0x50;for(var _0x572db1=-0x3c5+0x2570*-0x1+0x4d*0x89;_0x572db1<_0x39d213[_0x1a8c7e(0xc03)]['lengt'+'h'];_0x572db1++){var _0x2b69a1=_0x39d213[_0x1a8c7e(0xc03)][_0x572db1],_0x2d9b03=(_0x2b69a1['x']-_0x4b083e[_0x1a8c7e(0xa8a)][0xd*-0x139+0x2433+-0x144e])*_0x52ed3b,_0x2fdd93=_0x273fbd['aQqfG'](_0x2b69a1['z']-_0x4b083e[_0x1a8c7e(0xa8a)][0x2*-0xc1d+0x1*0xedb+0x961*0x1],_0x52ed3b),_0x4259db=Math['sqrt'](_0x273fbd[_0x1a8c7e(0x2c9)](_0x2d9b03,_0x2d9b03)+_0x2fdd93*_0x2fdd93),_0x23443b=_0x192c94,_0x36edc6=_0x192c94;_0x4259db>_0x273fbd[_0x1a8c7e(0x6bc)](_0x192c94,-0xb61+-0x1*-0x1274+0x5f*-0x13)?(_0x23443b=_0x192c94+_0x273fbd[_0x1a8c7e(0xc43)](_0x273fbd[_0x1a8c7e(0x564)](_0x2d9b03,_0x4259db),_0x273fbd[_0x1a8c7e(0x3c7)](_0x192c94,0x2*-0x418+0x39e+0x498)),_0x36edc6=_0x273fbd[_0x1a8c7e(0x1a9)](_0x192c94,_0x273fbd[_0x1a8c7e(0xc26)](_0x273fbd['NPjRu'](_0x2fdd93,_0x4259db),_0x192c94-(-0x6*-0x528+-0xbce+-0x131c*0x1)))):(_0x23443b=_0x192c94+_0x2d9b03,_0x36edc6=_0x192c94+_0x2fdd93);var _0x2ac8c1=_0x273fbd['VDjCZ'](_0x513ed2,null)&&_0x273fbd[_0x1a8c7e(0xc15)](_0x2b69a1[_0x1a8c7e(0x1a1)],_0x513ed2);_0x420ecb['fillS'+'tyle']=_0x2ac8c1?_0x273fbd[_0x1a8c7e(0x8d4)]:_0x1a8c7e(0x428)+'74',_0x420ecb[_0x1a8c7e(0x66a)+'Path'](),_0x420ecb[_0x1a8c7e(0x517)](_0x23443b,_0x36edc6,_0x2ac8c1?0x2369+0x2318+-0x467f:-0x1024+0x13d7+-0x3b*0x10+0.20000000000000018,0x6a3+-0x1f9f+0x18fc,Math['PI']*(-0xc14+0x24ec+0x11*-0x176)),_0x420ecb['fill'](),_0x4841e6++;}_0x420ecb[_0x1a8c7e(0x324)+_0x1a8c7e(0x5c9)]=_0x1a8c7e(0x88b)+'a8',_0x420ecb[_0x1a8c7e(0x66a)+'Path'](),_0x420ecb['arc'](_0x192c94,_0x192c94,0x5*-0xe1+-0x255c+0x29c4,-0x1c11+0x53e*0x7+-0x8a1*0x1,_0x273fbd['fTTiS'](Math['PI'],0xe95*-0x2+-0x101*-0x3+0x1a29)),_0x420ecb[_0x1a8c7e(0xce7)](),_0x25923c['lg']&&(_0x25923c['lg'][_0x1a8c7e(0x4da)+'onten'+'t']=_0x273fbd[_0x1a8c7e(0x960)](_0x273fbd['chgHy'](_0x1a8c7e(0x34d),_0x4841e6)+_0x273fbd[_0x1a8c7e(0xb5d)]+Math[_0x1a8c7e(0x1e3)](_0x130958[_0x1a8c7e(0x829)])+'m',_0x130958[_0x1a8c7e(0x609)]?_0x273fbd['HPGif'](_0x273fbd[_0x1a8c7e(0x767)]('\x20·\x20fo'+'v\x20',Math[_0x1a8c7e(0x1e3)](_0x2ce298[_0x1a8c7e(0x9e8)])),'°'):'')+(_0x513ed2!==null?_0x273fbd[_0x1a8c7e(0xcaa)](_0x273fbd['DUUzx'],_0x513ed2):''));}catch(_0x45343f){}}else _0x5eea4d=_0x368dde[_0x1a8c7e(0x5f2)](_0x3861a3)[_0x1a8c7e(0xc72)](-0x1c63+0x1*-0x16f5+0x3358,-0x2*0x6be+0xe5d+0x1*-0xc9);}function _0x2524f3(){var _0xd97b9b=_0x50f913,_0x462bdc=_0x17f483[_0xd97b9b(0x422)+'nNetw'+_0xd97b9b(0x3c9)+'nc']||{};if(!Object['keys'](_0x462bdc)[_0xd97b9b(0x4f2)+'h'])return![];return!!_0x273fbd[_0xd97b9b(0x8c9)](_0x25f8f4);}function _0x56075b(_0x2dd5ab){var _0x5cfcaf=_0x50f913;if('NIOuC'!=='JdQQG')try{if(_0x273fbd[_0x5cfcaf(0xa21)](_0x5cfcaf(0x377),_0x5cfcaf(0x377)))try{return _0x3846ea&&_0x4c9ba1['buffe'+'r']?_0x2e7de9[_0x5cfcaf(0x3fc)+'r'][_0x5cfcaf(0x52d)+_0x5cfcaf(0x4f3)]:-0x2*0xb8+-0x898+-0x2*-0x504;}catch(_0x3056f9){return 0x24d5+-0x11a+-0x23bb;}else{var _0x229667=_0x4b08ca;if(_0x229667&&_0x229667['el'])_0x229667['el'][_0x5cfcaf(0x481)][_0x5cfcaf(0x555)+'ay']=_0x2dd5ab?'':_0x273fbd['beWSM'];var _0x760d87=_0x5e7179;if(_0x760d87&&_0x760d87['cv'])_0x760d87['cv']['style']['displ'+'ay']=_0x2dd5ab?'':_0x273fbd[_0x5cfcaf(0x8dd)];}}catch(_0x5a9cd6){}else return _0x37cf47[_0x5cfcaf(0x9e8)];}function _0x4a3326(){var _0x5d5bba=_0x50f913,_0x4a667b={'YJwxY':'bare\x20'+_0x5d5bba(0xb0c)+'bindi'+'ng'};if(!_0x130958['on']||!_0x2524f3()){if(_0x5d5bba(0x731)===_0x273fbd['TGCbw'])return _0x3b21ff['sourc'+'e']=_0x4a667b[_0x5d5bba(0x43c)],_0x53d90c;else{_0x56075b(![]),setTimeout(_0x4a3326,0x287*-0x1+-0x2e7*0x8+0x1aeb);return;}}_0x273fbd['sgTGo'](_0x56075b,!![]),_0x273fbd[_0x5d5bba(0x390)](_0x416ea9),_0x273fbd[_0x5d5bba(0x741)](_0x3b9987);if(_0x130958['boxes'])_0x506fcb();var _0x3b56d3=null;try{_0x3b56d3=_0x273fbd[_0x5d5bba(0xc1a)](_0x596061);}catch(_0x587881){}try{_0x4dc81d();}catch(_0x5921d2){}try{_0x5eead8(_0x3b56d3);}catch(_0x16b8fc){}setTimeout(_0x4a3326,-0x1718+0x225d+-0x87*0x15);}function _0xbad580(){var _0x3babd6=_0x50f913,_0x53f294=window[_0x3babd6(0x480)+'WebMo'+'dkit']&&window[_0x3babd6(0x480)+_0x3babd6(0x396)+'dkit'][_0x3babd6(0x236)+'me']||null,_0x32819c=_0x53f294&&_0x53f294['il2Cp'+'pCont'+_0x3babd6(0x57a)],_0x4b67ad=_0x32819c&&_0x32819c[_0x3babd6(0xd2f)+'tData'],_0xcdb9f6={},_0xb243fe=[];for(var _0xa7c87f in _0x5dca57){if(_0x3babd6(0x5c3)!==_0x273fbd['tZVbR']){_0x20c475[-0x1*0x10b9+0x128a+0x74*-0x4]&&typeof _0x3e868f[-0x171*0x1+-0x1649+0x17bb][_0x3babd6(0xb5f)]==='funct'+'ion'&&(_0x59c37e[_0x3babd6(0x970)+'st']=_0x839a9[0x1ee*-0xf+0x2d+-0xfe*-0x1d][_0x3babd6(0xb5f)](),_0x34154b[_0x3babd6(0x855)+'ts']++);_0x4b834a[0x3*-0x9c8+-0x2e*0x13+-0x2*-0x1062]&&typeof _0x5e30e2[-0x162f+-0xf87+0x25b8]['val']===_0x3babd6(0x48f)+_0x3babd6(0x6b5)&&(_0x4e992d[_0x3babd6(0x8fb)]=_0x529adc[-0x15b5+0x1*-0x830+0x1*0x1de7][_0x3babd6(0xb5f)](),_0x5e1f7f[_0x3babd6(0xbae)+_0x3babd6(0x447)]++);if(_0x150d88[-0xdbe*0x2+0xb*-0x371+0x4157]&&_0x273fbd[_0x3babd6(0x542)](typeof _0x1e6a6c[0xeb8+0xaf9+-0x19b1*0x1][_0x3babd6(0xb5f)],_0x273fbd[_0x3babd6(0x652)])){var _0x2206d7=_0x32e799[0x3*-0x589+0x2*0x1e+0x3*0x575]['val']();if(_0x2206d7)_0x21f80e=_0x2206d7;}}else{_0xcdb9f6[_0xa7c87f]='0x'+_0x5dca57[_0xa7c87f]['ptr'][_0x3babd6(0x433)+_0x3babd6(0x5ab)](0x1813*-0x1+-0x7*0x271+-0xdbe*-0x3);if(_0x5dca57[_0xa7c87f]['repla'+_0x3babd6(0x5db)])_0xb243fe[_0x3babd6(0x356)](_0xa7c87f);}}var _0x54b793={};for(var _0x5e3731 in _0x5dca57)_0x54b793[_0x5e3731]=_0x273fbd[_0x3babd6(0xa7a)](_0x92b666,_0x5dca57[_0x5e3731][_0x3babd6(0xccb)]);var _0x4a157e={},_0x552e02=null;try{if(_0x273fbd['SpLVi']('GSXtP',_0x273fbd[_0x3babd6(0x5ba)]))_0x4a157e=_0x126390();else{var _0x8ad1a9=(_0x3babd6(0x1a5)+_0x3babd6(0x2d4)+_0x3babd6(0xccc)+_0x3babd6(0x827)+_0x3babd6(0x71f)+_0x3babd6(0x991)+_0x3babd6(0xd16))[_0x3babd6(0x75c)]('|'),_0x1e55e4=-0x387*0x2+0x7*-0x180+-0x3*-0x5da;while(!![]){switch(_0x8ad1a9[_0x1e55e4++]){case'0':if(_0x273fbd['RWBVp'](_0x4ddc52,_0x4edcb1)||_0x273fbd['hBumg'](_0x424269,_0x33fe07)||_0x273fbd['nieSM'](_0x37cce7,_0x4069e0)||_0x1631a5===_0x58a011)return null;continue;case'1':var _0x4ddc52=_0x273fbd[_0x3babd6(0xb81)](_0xe3786c,_0x273fbd['oCeoI'](_0x5abe4a,_0x36c4ac)+_0x270572[_0x3babd6(0x9d3)],'u8');continue;case'2':if(!_0x270572)return null;continue;case'3':_0x424269|=0x1141+-0x1*0x2113+0xfd2;continue;case'4':var _0x1631a5=_0x10733d(_0x273fbd[_0x3babd6(0xa18)](_0x42c0c5+_0x1d068f,_0x270572['activ'+'e']),'u8');continue;case'5':_0x1631a5&=0xac9*-0x2+-0x8+0x159b;continue;case'6':_0x4ddc52&=-0x569+-0x5*0x3fd+0x1a59;continue;case'7':var _0xc076b3=_0x2ce7e1(_0x4c50b5+_0x139959+_0x270572[_0x3babd6(0xd6f)+'d'],'u8');continue;case'8':return{'real':_0x54c17b,'fake':_0x37cce7,'act':_0x1631a5,'init':_0xc076b3,'key':_0x4ddc52,'hidden':_0x424269};case'9':var _0x424269=_0x273fbd[_0x3babd6(0xb81)](_0x2a5229,_0x1ec89e+_0x201145+_0x270572['hidde'+'n'],_0x273fbd[_0x3babd6(0x861)]);continue;case'10':if(_0x273fbd[_0x3babd6(0xaaa)](_0x9a4a30,_0x273fbd['wwjGC']))_0x54c17b=_0x273fbd[_0x3babd6(0xa5f)](_0x1f9460,_0x424269^_0x4ddc52);else{if(_0x273fbd[_0x3babd6(0xbe1)](_0x19aef9,_0x3babd6(0xb34)))_0x54c17b=_0x273fbd['tPCHi'](_0x424269,_0x4ddc52)|-0x7c1+0x2*-0xc09+0x1fd3;else _0x54c17b=(_0x273fbd[_0x3babd6(0x281)](_0x424269,_0x4ddc52)&-0xa4*0x8+0x49c*0x4+-0xc51)!==-0x250e+-0x877+0x2d85?0x1b8e+-0xea2*-0x1+-0x2a2f:-0x863*0x4+0x1149+-0x1043*-0x1;}continue;case'11':var _0x54c17b;continue;case'12':_0xc076b3=(_0xc076b3||0x1443+0x101*0x1b+-0x2f5e)&-0x1378+0x5bb+-0x6df*-0x2;continue;case'13':var _0x37cce7=_0x273fbd[_0x3babd6(0x8e4)](_0x2f3a51,_0x21dba2+_0x8b583f+_0x270572[_0x3babd6(0x452)],_0x3e28c5===_0x273fbd[_0x3babd6(0x7f4)]?_0x273fbd[_0x3babd6(0x971)]:_0x273fbd[_0x3babd6(0x511)](_0x390618,'obfI')?'i32':'u8');continue;case'14':var _0x270572=_0x95ae1d[_0x284826];continue;}break;}}}catch(_0x15e5c6){_0x552e02=String(_0x15e5c6&&_0x15e5c6[_0x3babd6(0xb7a)+'ge']||_0x15e5c6);}var _0x60a1f5={'version':_0x462d02,'when':new Date()[_0x3babd6(0x7d0)+_0x3babd6(0x223)+'g'](),'elapsedMs':Date[_0x3babd6(0xb69)]()-_0x3cf448,'frame':location[_0x3babd6(0x600)]['slice'](0x1*0x15c+-0x1*-0xbe9+-0xd45,-0x1*-0x224b+0x1555+-0x1b94*0x2),'host':_0x23ae10,'frameRole':_0x3f3384,'uwmk':!!_0x53f294,'il2CppContext':!!_0x32819c,'typeCount':_0x4b67ad?Object['keys'](_0x4b67ad)[_0x3babd6(0x4f2)+'h']:null,'arm':_0x360bd8,'assemblies':_0x159267,'hooksTotal':_0x3037d0[_0x3babd6(0x4f2)+'h'],'hooksApplied':_0x3b08fe(),'hooksResolved':_0xdf07b4(),'hooksRegisteredAtArm':_0x360bd8[_0x3babd6(0xbf2)+_0x3babd6(0xcee)+_0x3babd6(0xb47)]||0x26bb+-0x6d*-0x25+-0x367c,'hookErrors':_0x48b1df['slice'](-0x921+-0x1*-0x83d+-0x2*-0x72,-0x1664+0x7*0x3f+0x14b3),'instances':_0xcdb9f6,'classNames':_0x54b793,'instancesReplaced':_0xb243fe,'hookFireProof':_0x4c4c9f,'survey':_0x4a157e,'actkKeys':_0x249f89,'surveyRows':Object[_0x3babd6(0x5f2)](_0x4a157e)[_0x3babd6(0x936)+'e'](function(_0x45ae3b,_0x521c3b){var _0x366c2a=_0x3babd6;return _0x273fbd[_0x366c2a(0x789)](_0x45ae3b,_0x4a157e[_0x521c3b][_0x366c2a(0x4f2)+'h']);},0x1ced+-0xe68+-0xe85),'reads':{'ok':_0x5c52ee['ok'],'failed':_0x5c52ee['faile'+'d'],'lastError':_0x5c52ee[_0x3babd6(0x94f)+'rror'],'source':_0x5c52ee[_0x3babd6(0x704)+'e']},'identity':_0x2b1b81(),'globals':_0x432641(),'wasmMemory':{'captured':!!_0x2512bc,'atMs':_0x23b02f,'bytes':(function(){var _0x58c3fd=_0x3babd6;try{return _0x2512bc&&_0x2512bc[_0x58c3fd(0x3fc)+'r']?_0x2512bc[_0x58c3fd(0x3fc)+'r'][_0x58c3fd(0x52d)+_0x58c3fd(0x4f3)]:-0x211*-0x7+0x1*0x1412+0x1*-0x2289;}catch(_0x1aacad){return-0x201+-0x1*-0xf46+-0x2b*0x4f;}}()),'exportKeys':_0x8e1d26},'diff':_0xaeb5bf[_0x3babd6(0xc72)](-0x252c+-0xedf+0x1*0x340b,-0xa73+0x3*-0xc61+0x123*0x2a),'speed':{'on':_0x1ccb3a['on'],'factor':_0x1ccb3a['facto'+'r'],'writes':_0x256bc0,'scaled':_0xf901ec[_0x3babd6(0xc72)](-0x18c8+-0xb3f+-0x2407*-0x1,0x20e9+-0x7*-0x57+0x3ea*-0x9),'skipped':_0x1fc25c[_0x3babd6(0xc72)](-0x1dc3+-0x1d73+-0xb*-0x562,0xcd4+-0x5f*-0xa+0x72*-0x25)},'esp':_0x273fbd['gkRrJ'](_0x262878),'view':_0x5d9499(),'angles':(function(){var _0x4dafd0=_0x3babd6,_0xaaf9f3={'YKJUE':function(_0x36808e,_0x5bbeb3){return _0x36808e===_0x5bbeb3;},'MLnOy':'dHsco','tNYlY':function(_0x142e60){return _0x142e60();},'kmHZj':function(_0x2f693e,_0x211c60){return _0x2f693e+_0x211c60;},'xyZBR':function(_0x5873c1){return _0x5873c1();},'BKgVA':function(_0x2490d3,_0x584d4b){return _0x2490d3!==_0x584d4b;},'MjGbn':_0x4dafd0(0x366)},_0x242eef=_0x273fbd[_0x4dafd0(0x7db)](_0x5f42a2),_0x23e870=null,_0x515159=null,_0x1e0d8f=_0x273fbd[_0x4dafd0(0x8c9)](_0x25f8f4);if(_0x1e0d8f){var _0x5cf79c=_0x49ef55(_0x1e0d8f['eye'],[_0x1e0d8f['eye'][0x305+0x3*0x6d+0xb*-0x64],_0x1e0d8f[_0x4dafd0(0x494)][-0x2024+0x29b*-0x4+0x1*0x2a91],_0x1e0d8f['eye'][-0x1*-0x2417+-0x1*0x16a9+-0xd6c*0x1]+(-0x1af*-0x11+0x21*0x56+-0x27b4)],-0x1*0x26d5+0xc96+-0x1*-0x1e27,-0x1*0x1c8b+0x14fb+0xb78);_0x5cf79c&&(_0x23e870=_0x5cf79c['x']/(0xa*0x17+0x2294+0xfc9*-0x2),_0x515159=_0x5cf79c['y']/(-0x3*-0x5f5+-0xa99+-0x35e));}var _0x5c4ab5=null,_0x340949=null;if(_0x1e0d8f){var _0x2288ce=_0x49ef55(_0x1e0d8f[_0x4dafd0(0x494)],[_0x1e0d8f['eye'][0x13f5+0x96a+-0x1d5f],_0x1e0d8f[_0x4dafd0(0x494)][-0x376+0x7+0x370]+(0x93*-0x3b+-0x1fcc+0x41b7),_0x1e0d8f[_0x4dafd0(0x494)][0x13*0x19+-0x136d+0x12c*0xf]+(-0x9*0x48+0x1ee1+-0x1*0x1c4f)],-0xadc+-0x51*-0x2a+-0x7*-0x36,-0x558+-0x1d95*-0x1+-0x1455);if(_0x2288ce)_0x5c4ab5=_0x2288ce['y']/(-0x52d+-0x18*-0x9d+-0x5a3);var _0x568381=_0x49ef55(_0x1e0d8f['eye'],[_0x1e0d8f['eye'][0x7bb+0x595+-0x3*0x470],_0x273fbd['hKSnV'](_0x1e0d8f[_0x4dafd0(0x494)][-0xec*-0x3+-0x22ff+0x4*0x80f],0x368+0x1b32+-0x1e90),_0x1e0d8f['eye'][0x27d+-0x51b*-0x5+-0x59a*0x5]+(0x31+0x1d59+-0x1d80)],0x12*0xb8+0x721+-0x1029,0x5*-0x2bb+0x1*-0x153c+0x26cb);if(_0x568381)_0x340949=_0x568381['y']/(0x1*0xf5b+-0x5*-0x6e7+-0x2df6);}return{'identified':_0x268be7['ident'+_0x4dafd0(0x48e)],'why':_0x268be7[_0x4dafd0(0xc70)],'source':_0x268be7['sourc'+'e'],'viewHooks':(function(){var _0x2af3cf=_0x4dafd0;if(_0xaaf9f3['YKJUE']('dHsco',_0xaaf9f3[_0x2af3cf(0xcbf)]))try{return _0xaaf9f3[_0x2af3cf(0xa89)](_0x215def);}catch(_0x171a57){return{'err':String(_0x171a57&&_0x171a57[_0x2af3cf(0xb7a)+'ge']),'stack':String(_0x171a57&&_0x171a57['stack'])};}else{var _0x95a1f8=_0x4c45b3['inner'+_0x2af3cf(0xcf6)+'t']||0x2434+-0x12dd+-0xe37*0x1;if(_0x95a1f8<-0x18b9+0x1934*0x1+0x1f1)_0x5eff9a(![]);}}()),'setterPair':(function(){var _0x368fb1=_0x4dafd0;if(_0xaaf9f3[_0x368fb1(0x45b)](_0xaaf9f3['MjGbn'],_0x368fb1(0x3ad))){var _0x254015=_0xaaf9f3[_0x368fb1(0xa89)](_0x3a80c5);return _0x254015?{'a':_0x254015[_0x368fb1(0xaee)],'b':_0x254015[_0x368fb1(0x806)],'hits':_0x254015[_0x368fb1(0x740)],'order':_0x254015[_0x368fb1(0x70b)]}:null;}else{_0x2485bb[_0x368fb1(0x959)+'ntDef'+_0x368fb1(0xb52)](),_0x4f9516['fov']=_0x2f7100[_0x368fb1(0xa59)](-0x10d7+0x1ced+-0xb8a,_0xaaf9f3[_0x368fb1(0x6f7)](_0x47996e[_0x368fb1(0x9e8)],-0x1028+0x7f*-0x18+0x1c12)),_0xaaf9f3[_0x368fb1(0x261)](_0x33888f);return;}}()),'yawAt':_0x268be7['yawGe'+_0x4dafd0(0x53e)]||_0x273fbd[_0x4dafd0(0x590)],'pitchAt':_0x268be7['pitch'+_0x4dafd0(0x2a5)+'r']||'0x1c\x20'+'(gues'+'s)','getters':_0x268be7[_0x4dafd0(0x643)+'rs'],'rawPitch':_0x268be7[_0x4dafd0(0x9ad)+_0x4dafd0(0x6eb)],'rawYaw':_0x268be7['rawYa'+'w'],'pitch':_0x268be7['pitch'],'yaw':_0x268be7['yaw'],'legacyOffsetsCleared':_0x5e3404,'fov':_0x2ce298['fov'],'fovSane':_0x2ce298[_0x4dafd0(0x9e8)]>=0xcf*-0xd+-0x1ae4+0x5*0x787&&_0x273fbd[_0x4dafd0(0xa6f)](_0x2ce298['fov'],0x3d*0x9d+-0x136d*0x1+0x2ed*-0x6),'centreX':_0x23e870,'centreY':_0x515159,'aboveY':_0x5c4ab5,'belowY':_0x340949};}()),'fov':_0x2ce298[_0x3babd6(0x9e8)],'espView':{'on':_0x130958['on'],'boxes':_0x130958[_0x3babd6(0x609)],'span':_0x130958[_0x3babd6(0x829)]},'local':(function(){var _0x5b665b=_0x3babd6,_0x26bd04=_0x25f8f4();if(!_0x26bd04)return null;return{'ptr':_0x273fbd['ktIdV']('0x',_0x26bd04[_0x5b665b(0xccb)]['toStr'+'ing'](-0x11*-0x1d8+-0x17c3+-0x785)),'feet':_0x26bd04[_0x5b665b(0xa8a)],'eye':_0x26bd04[_0x5b665b(0x494)],'posAt':_0x26bd04[_0x5b665b(0x714)],'copies':_0x26bd04[_0x5b665b(0x592)+'s'],'cluster':_0x26bd04['clust'+'er'],'eyeHeight':_0x12600c,'pitch':_0x26bd04[_0x5b665b(0x534)],'yaw':_0x26bd04[_0x5b665b(0x6fb)],'reach':_0x26bd04['reach']};}()),'uwmkLog':_0x346521[_0x3babd6(0xc72)](-0xbf1+-0x3*-0x541+0x1e9*-0x2,-0xbf*0x17+0x2*0x2da+-0x1*-0xb89),'warnings':[]};if(_0x552e02)_0x60a1f5[_0x3babd6(0xb60)+'ngs']['push'](_0x273fbd[_0x3babd6(0x32b)]+_0x552e02);if(_0x360bd8[_0x3babd6(0x7ae)])_0x60a1f5['warni'+_0x3babd6(0x58c)][_0x3babd6(0x356)](_0x273fbd['vZhUK']+_0x360bd8[_0x3babd6(0x7ae)]);_0x60a1f5['surve'+_0x3babd6(0x4b6)]===0x13e*0x3+-0xc16*-0x2+-0x1be6&&Object[_0x3babd6(0x5f2)](_0x60a1f5[_0x3babd6(0x38e)+'nces'])[_0x3babd6(0x4f2)+'h']>-0x15*-0x16a+0x2496+-0x4248&&_0x60a1f5[_0x3babd6(0xb60)+'ngs'][_0x3babd6(0x356)]('captu'+_0x3babd6(0x1f3)+Object[_0x3babd6(0x5f2)](_0x60a1f5['insta'+_0x3babd6(0x596)])[_0x3babd6(0x4f2)+'h']+('\x20obje'+_0x3babd6(0x373)+_0x3babd6(0x307)+_0x3babd6(0x858)+'0\x20fie'+'lds.\x20')+(_0x5c52ee[_0x3babd6(0x94f)+'rror']?_0x3babd6(0x536)+_0x3babd6(0x62c)+_0x5c52ee[_0x3babd6(0x94f)+'rror']:'No\x20re'+'ad\x20fa'+_0x3babd6(0xa2e)+_0x3babd6(0x804)+'very\x20'+'offse'+'t\x20was'+_0x3babd6(0x7d5)+'ped\x20b'+_0x3babd6(0x2cf)+'e.'));if(_0x60a1f5[_0x3babd6(0xbd2)+_0x3babd6(0x186)]&&_0x273fbd['Pcjbe'](_0x60a1f5[_0x3babd6(0xbd2)+_0x3babd6(0x186)]['tagMa'+_0x3babd6(0x727)],![])){if('BeLem'==='cREPD')try{_0xb9b022[_0x3babd6(0x4da)+'onten'+'t']=_0x5ba9a0(_0xe10a3a);}catch(_0x26f005){_0x5c096d['textC'+'onten'+'t']=_0x36fc52['strin'+_0x3babd6(0xcd9)](_0xcc0ae3,null,-0x9c1*-0x1+0xc00+0x18*-0xe8);}else _0x60a1f5[_0x3babd6(0xb60)+_0x3babd6(0x58c)][_0x3babd6(0x356)](_0x273fbd[_0x3babd6(0x8ca)](_0x3babd6(0x496)+'ER\x20UW'+'MK\x20CO'+'PY\x20TO'+_0x3babd6(0x2fc)+'ER\x20wi'+_0x3babd6(0x6b4)+_0x3babd6(0x480)+'WebMo'+_0x3babd6(0x53c)+_0x3babd6(0xcdf)+'Runti'+'me\x20we'+'\x20arme'+'d\x20was'+'\x20'+(_0x3babd6(0xb89)+_0x3babd6(0x7d8)+_0x3babd6(0x3a3)+_0x3babd6(0x1e4)+'ent\x20i'+_0x3babd6(0x689)+_0x3babd6(0xd47)+_0x3babd6(0x834)+_0x3babd6(0xc30)+'sking'+_0x3babd6(0x2d6)+'wrong'+'\x20obje'+_0x3babd6(0xacc)+'r\x20'),'the\x20g'+'ame\x20w'+_0x3babd6(0x7b7)+'the\x20o'+_0x3babd6(0xd59)+'lding'+'\x20it\x20i'+_0x3babd6(0xb0f)+'haned'+'.\x20Dis'+_0x3babd6(0xada)+_0x3babd6(0x92b)+_0x3babd6(0xd70)+'r\x20')+_0x273fbd[_0x3babd6(0x522)]);}if(_0x60a1f5['ident'+_0x3babd6(0x186)]&&_0x60a1f5[_0x3babd6(0xbd2)+_0x3babd6(0x186)]['plugi'+'nRunt'+'imeIs'+'Expor'+_0x3babd6(0x3bf)]===![]){if(_0x273fbd['TSjvE'](_0x3babd6(0x816),'ccFjy'))return _0x277337(_0x2f41d7);else _0x60a1f5['warni'+_0x3babd6(0x58c)][_0x3babd6(0x356)](_0x273fbd['QHSii']+_0x273fbd['jEUff']);}if(_0x60a1f5[_0x3babd6(0x68c)]&&_0x60a1f5['esp']['note'])_0x60a1f5[_0x3babd6(0xb60)+_0x3babd6(0x58c)]['push'](_0x273fbd['ktIdV'](_0x273fbd['YtGaR'],_0x60a1f5[_0x3babd6(0x68c)][_0x3babd6(0x4d6)]));if(_0x60a1f5[_0x3babd6(0x334)+'ls']&&!_0x60a1f5['globa'+'ls'][_0x3babd6(0x2bc)+'8']){var _0x82710='';_0x60a1f5[_0x3babd6(0x323)+_0x3babd6(0x5c8)+_0x3babd6(0x581)]&&(_0x82710=_0x273fbd['aunMk'](_0x273fbd[_0x3babd6(0xd0f)](_0x273fbd['jSJeV'](_0x3babd6(0xb18)+_0x3babd6(0xb5a)+_0x3babd6(0x408)+'t\x20',_0x60a1f5['hookF'+'irePr'+_0x3babd6(0x581)]['atMs']),_0x273fbd[_0x3babd6(0xd0b)])+_0x60a1f5[_0x3babd6(0x323)+'irePr'+'oof']['origi'+_0x3babd6(0x9bf)+'nc']+_0x273fbd['wUVkk']+_0x60a1f5['hookF'+_0x3babd6(0x5c8)+_0x3babd6(0x581)]['resol'+'veGam'+'eAtFi'+'re']+(_0x3babd6(0x20d)+_0x3babd6(0x30a))+(_0x60a1f5[_0x3babd6(0x323)+_0x3babd6(0x5c8)+_0x3babd6(0x581)]['gameS'+_0x3babd6(0x1bb)+_0x3babd6(0xa56)+'e']||_0x3babd6(0xa8d)),_0x273fbd[_0x3babd6(0x46a)])),_0x60a1f5[_0x3babd6(0xb60)+_0x3babd6(0x58c)][_0x3babd6(0x356)](_0x273fbd['wBkaf'](_0x273fbd[_0x3babd6(0xb08)](_0x273fbd[_0x3babd6(0x85d)](_0x273fbd['zAJmG']+(_0x60a1f5[_0x3babd6(0x334)+'ls'][_0x3babd6(0x703)+_0x3babd6(0x1bb)]||_0x3babd6(0xa8d)),_0x3babd6(0xa7d)),_0x273fbd[_0x3babd6(0x640)]),_0x82710));}return(_0x60a1f5[_0x3babd6(0x334)+'ls']&&!_0x60a1f5[_0x3babd6(0x334)+'ls']['value'+_0x3babd6(0x2e3)+'er']||_0x60a1f5['globa'+'ls'][_0x3babd6(0xc1b)+'Wrapp'+'er']===_0x3babd6(0x75d)+_0x3babd6(0xbb3))&&_0x60a1f5[_0x3babd6(0xb60)+'ngs']['push'](_0x273fbd['WDDkY']),_0x60a1f5['hooks'+'Total']>0x1865+-0x20e2+-0x87d*-0x1&&_0x273fbd[_0x3babd6(0x83b)](_0x60a1f5['hooks'+_0x3babd6(0x3a6)+'ed'],0x1210+-0x1325+0x115)&&_0x4b67ad&&(_0x60a1f5[_0x3babd6(0xbf2)+_0x3babd6(0x1b5)+_0x3babd6(0xd65)]===-0x331*0x1+0x235d+-0x202c?_0x60a1f5['warni'+_0x3babd6(0x58c)][_0x3babd6(0x356)](_0x273fbd['KKfYU'](_0x273fbd[_0x3babd6(0x218)],_0x60a1f5[_0x3babd6(0xbf2)+'Total'])+(_0x3babd6(0x80f)+_0x3babd6(0x35a)+_0x3babd6(0x6fd)+'n\x20SEE'+'N\x20by\x20'+_0x3babd6(0x642)+'\x20The\x20'+'apply'+'\x20pass'+'\x20')+_0x273fbd['cbPHc']+('so\x20ho'+_0x3babd6(0x709)+_0x3babd6(0x88a)+_0x3babd6(0x957)+_0x3babd6(0xbc6)+'\x20it\x20a'+'re\x20ig'+_0x3babd6(0x97e)+'\x20for\x20'+_0x3babd6(0x45e)+'ife\x20o'+'f\x20the'+'\x20page'+'.\x20')+('Regis'+'tered'+'\x20')+_0x60a1f5[_0x3babd6(0xbf2)+_0x3babd6(0xcee)+'tered'+'AtArm']+(_0x3babd6(0x80f)+_0x3babd6(0xc08)+'uring'+'\x20armi'+_0x3babd6(0x660)+_0x3babd6(0x276)+_0x3babd6(0x44d)+_0x3babd6(0x9f3)+'.')):_0x60a1f5['warni'+_0x3babd6(0x58c)][_0x3babd6(0x356)](_0x273fbd[_0x3babd6(0xa0d)](_0x273fbd['KDgEY'],_0x60a1f5[_0x3babd6(0xbf2)+'Resol'+'ved'])+_0x3babd6(0x4d5)+_0x60a1f5['hooks'+_0x3babd6(0x770)]+_0x273fbd['xrVxq']+(_0x3babd6(0x9b1)+_0x3babd6(0x915)+'hodIn'+_0x3babd6(0x384)+'->\x20vo'+_0x3babd6(0xb32)+_0x3babd6(0xd0c)+_0x3babd6(0x695)+_0x3babd6(0x799)+'is\x20bu'+_0x3babd6(0xa52)))),_0x273fbd[_0x3babd6(0x2fb)](_0x60a1f5[_0x3babd6(0xbf2)+'Appli'+'ed'],0x10c5+0x4f4+-0x15b9)&&!_0x60a1f5['insta'+_0x3babd6(0x596)][_0x3babd6(0x3cc)+_0x3babd6(0xa34)+_0x3babd6(0x630)]&&_0x60a1f5[_0x3babd6(0xb60)+'ngs'][_0x3babd6(0x356)](_0x273fbd[_0x3babd6(0xb82)](_0x273fbd[_0x3babd6(0x873)],_0x273fbd[_0x3babd6(0x3e2)])),_0x60a1f5[_0x3babd6(0x38e)+'ncesR'+_0x3babd6(0xb22)+'ed'][_0x3babd6(0x4f2)+'h']&&_0x60a1f5['warni'+'ngs'][_0x3babd6(0x356)](_0x273fbd[_0x3babd6(0x8ae)]+_0x60a1f5[_0x3babd6(0x38e)+'ncesR'+_0x3babd6(0xb22)+'ed'][_0x3babd6(0x713)](',\x20')),_0x60a1f5;}function _0x3a7ca9(_0x172db0){var _0x32bd89=_0x50f913;console['log'](_0x32bd89(0x7e3)+_0x32bd89(0xc95)+_0x32bd89(0x633)+'lWarz'+'\x20repo'+'rt',_0x273fbd[_0x32bd89(0x553)](_0x32bd89(0x205)+':',_0xd166cd)+(_0x32bd89(0x37a)+'-weig'+'ht:70'+'0'),_0x172db0),console['log'](_0x273fbd['yYvkM'](_0x273fbd['PDZCu'](_0x273fbd[_0x32bd89(0xcf4)](_0x3c9b75,'\x0a')+JSON[_0x32bd89(0xc4d)+'gify'](_0x172db0,null,-0x28*-0xe6+-0x4*0x26f+-0x1a33*0x1),'\x0a'),_0xd1d85a)),_0x65b67e=_0x172db0;try{_0x4000cf(_0x172db0);}catch(_0x5cde97){}_0x273fbd[_0x32bd89(0xca2)](_0x5abc61,_0x273fbd[_0x32bd89(0x6b6)],{'report':_0x172db0});}function _0x51fddb(){var _0x2b1c9c=_0x50f913;try{return _0xbad580();}catch(_0x565d81){return{'version':_0x462d02,'when':new Date()[_0x2b1c9c(0x7d0)+_0x2b1c9c(0x223)+'g'](),'elapsedMs':_0x273fbd[_0x2b1c9c(0x33a)](Date[_0x2b1c9c(0xb69)](),_0x3cf448),'host':_0x23ae10,'uwmk':!!(window['Unity'+_0x2b1c9c(0x396)+_0x2b1c9c(0x7a1)]&&window[_0x2b1c9c(0x480)+'WebMo'+_0x2b1c9c(0x7a1)][_0x2b1c9c(0x236)+'me']),'il2CppContext':![],'arm':_0x360bd8,'hooksTotal':_0x3037d0['lengt'+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x273fbd['RNnoH'](String,_0x565d81&&_0x565d81['messa'+'ge']||_0x565d81)};}}function _0x5dd2af(){var _0x2e2de5=_0x50f913,_0x5901d0={'RgEQz':function(_0x4d6a0e,_0x169cd3,_0x7018ba){return _0x273fbd['sxgsD'](_0x4d6a0e,_0x169cd3,_0x7018ba);},'yGnRz':function(_0x2f9d60){return _0x2f9d60();},'bIfUv':function(_0x4ef40c,_0x5311db,_0x1401c0){return _0x4ef40c(_0x5311db,_0x1401c0);},'IDqLp':function(_0x4a72d5,_0x27f020){return _0x4a72d5<_0x27f020;},'CYEID':function(_0x1b78b0,_0x1b55d7,_0x2af9de){return _0x1b78b0(_0x1b55d7,_0x2af9de);}};if('Gepnk'!=='IxHgb'){var _0x1e97a7=-0x16dc+0x1*0x20b+0x14d1;try{_0x273fbd['BCtyX'](_0x4a3326);}catch(_0xbb8199){}try{_0x52ddd5();}catch(_0x477ea1){}setInterval(_0x5ef12a,-0x1cce+-0xa0b+-0xe1f*-0x3),_0x3a7ca9(_0x273fbd['VwmIq'](_0x51fddb)),function _0x54aa50(){var _0x1c92b9=_0x36c9;if(_0x273fbd[_0x1c92b9(0x1e7)]===_0x1c92b9(0x73d)){if(!_0x3037d0['lengt'+'h'])try{_0x249882();}catch(_0x12bcb9){}_0x1e97a7++,_0x273fbd['plPIZ'](_0x3a7ca9,_0x273fbd[_0x1c92b9(0xa96)](_0x51fddb));if(!_0x3037d0['lengt'+'h']&&_0x1e97a7<-0x1c0+0x1f*-0x89+0x1383)setTimeout(_0x54aa50,-0x1f47+0x14ef*0x1+0x1228);else{if(!Object['keys'](_0x5dca57)['lengt'+'h']&&_0x273fbd[_0x1c92b9(0x237)](_0x1e97a7,-0xe1a+-0x21cd+-0x2e3*-0x11))setTimeout(_0x54aa50,0x1f6e+0x1d9a+-0x3538);else _0x273fbd['JUbMa'](setTimeout,_0x54aa50,0x2589+0x37*0x92+-0x4037*0x1);}}else _0x26528d=_0x5901d0['RgEQz'](_0x43355,_0x1c92b9(0x279)+'on',![]),_0x27203a[_0x1c92b9(0x356)](_0x3da3a0);}();}else{if(!_0x22cb17['lengt'+'h'])try{_0x362a98();}catch(_0x4d97e7){}_0x58fc29++,_0x1c1dac(_0x5901d0[_0x2e2de5(0xce6)](_0x422fb1));if(!_0xa421ca[_0x2e2de5(0x4f2)+'h']&&_0x56425d<-0x95*0x1f+-0x22f7+0x362e)_0x5901d0[_0x2e2de5(0x470)](_0x572e3e,_0x1a0ab3,-0xd41*-0x2+-0x1e55+0x9*0x14b);else{if(!_0x1afbdb[_0x2e2de5(0x5f2)](_0x3f3b8e)['lengt'+'h']&&_0x5901d0[_0x2e2de5(0x4fb)](_0x1dcb19,0x2cd*0x9+-0x1*-0x25+-0x182e))_0x412c72(_0x2f4222,0x577*-0x2+-0x128d+0x1*0x254b);else _0x5901d0['CYEID'](_0x2d8c20,_0x2556ea,0x1bcb+0x162*-0x1+-0x15b9);}}}if(document[_0x50f913(0x1af)])_0x5dd2af();else document[_0x50f913(0xcad)+'entLi'+_0x50f913(0xb2c)+'r'](_0x50f913(0x6d1)+_0x50f913(0x706)+_0x50f913(0x821)+'d',_0x5dd2af,{'once':!![]});if(document[_0x50f913(0x1af)])try{_0x2211a2();}catch(_0x103afa){}else document['addEv'+'entLi'+_0x50f913(0xb2c)+'r'](_0x50f913(0x6d1)+'ntent'+_0x50f913(0x821)+'d',function(){var _0x30ae85=_0x50f913;try{_0x273fbd[_0x30ae85(0x38a)](_0x2211a2);}catch(_0x1b93b0){}},{'once':!![]});})()));function _0x5218(){var _0x40b738=['WOBcJmkoWPtcKa','ChbLCIa','mYWXmdy','DcaWida','v1fcB2y','zxrVBG','DMC+','rxPyDxy','C0Hkt2u','z3jHyG','Dhj1zsi','Dw5PDhK','keLUC2u','B2zMC2u','WPxcKSkiWOFcKG','Aw9SCfy','ihjLywm','ANDpCKi','icaGia','DhrVBJ4','mca0ChG','WPtcImkkWPtcKG','C25HCa','B2zMihq','zxqSig8','CMuGy2W','CgfPCKG','z2LUlwW','BhvLpsi','AgvSBg8','oJHWEdS','Aw5Lza','oYi+ltW','CMvUDca','wKLUDu4','Bwf4','ihrOAw4','CgzpzMm','u2fRDxi','ysbtA2K','B2XSzxi','mIWYosW','DMvhyw0','yMXLig4','qNLjza','WPdcJmkkWORcKa','nZCSlJu','yMLAz0e','nvDZC09UEa','zYbPBNq','ywz0zxi','DgHLige','AgjLBva','DhbOAee','Bgv4oJa','yKrQuLe','lxnWywm','mhGYoca','DgL0Bgu','rKf5tMm','nNb4o2G','z2fWoJG','AwrLBNq','mxb4ihm','uMvZzxq','WOBcLCklWOBcKq','WPdcI8knWO3cKW','yxj7D2K','Dhm6yxu','igfYztO','qvbvoca','zxa9iJa','B3vUzdO','nxW2Fdq','vgHHDca','B29RCW','Dg90ywW','y3b6uu8','ihn0CM8','mtrWEdS','Ec8XlJq','o2fSAwC','CMfWoNC','BM1MrNu','lxrYywm','yxbWBgK','C2v0qxq','WOJcK8kiWPxcIW','WO3cLCkpWONcKq','AeTAru8','tgHxzxu','ywPKwxO','B2LuC2G','B25ZB2W','Ag9VA3m','Dwjwu1e','ufKGve8','AdO5mNa','Bwj7lxC','yw1LlGO','zsbNyw0','CKnVBg8','WOFcH8kjWPlcJq','uKHgz3e','wuvIrhG','oNbYzs0','uwD3EM8','ALjuvLe','AwvYkc4','zgf0zxm','uvvlB0O','BgLZDa','ywnis1a','vg9lz0m','uencv0y','igfJDgK','khmPigq','B25Z','B1PcCfm','rvnqoIa','CY1VCMK','lde3nYW','DgHLiha','EuzNCxC','ENrJuvi','zcWGBM8','z3jVDw4','rMLLBgq','zwn0Aw8','zuPMDxa','qK9yrMK','wKPIyNO','DYbNBg8','qwn0Aw8','BNDmzgO','DMfSDwu','yxzeBgW','BxDwDe8','EeDNvMq','DcGJzMy','BKrHzeW','u0f2rxC','A3bLv0W','CKDcv08','nYWUnYK','C2HHzg8','Exz6ree','oMf1Dg8','CM9Tihm','qMrdEMi','Ag9VA1a','rJGGlYa','B3j04OcM','zxHLy0m','BgvZ','ksWGC28','yxjLige','CIiGC3q','vfDVsgC','CgXPzxi','lM1Ulxm','vtGGAxm','B3n0zMK','Dg46Ag8','zw50tgK','zdPYz2i','oM1PBIG','iIbZDgu','lNnRlxi','ie9IC2m','DLDvEeu','qLHSq3K','ysXI','C2STChi','igj5igu','DK91Avq','EtPUB24','uLPZvvC','zwXHChm','uMvSB2e','zvbSDwC','Ag90icG','B2jM','kdi1nsW','FdL8mta','C3rYAw4','tg9VAYS','CMf3','ktTJB2W','CgzIDve','DgGGB3i','BhvLica','y29Uy2e','BgLKihi','zgLMzG','BYbHihq','A25tAMS','ywXSoMK','AKD1yKC','BM90igK','zsbVyMO','rKLLuu4','iIbZDhi','o3bHzgq','Dg9Nz2W','A3mGD2G','WPtcKmkjWOZcJG','sgvHCca','BgW6Aw4','C1rfqMy','zw5LBxK','idqGnc4','AvjQzei','DJiTy3m','s0TMwvu','z25HDhu','uvHkvgm','y2fTzxi','ywX1zt0','zM92u2e','D2H5','WPlcKCkuWO3cKW','C2XPy2u','BvLSu1G','zxnVBhy','DxjPBMC','pgnHBNy','C3mP','WPtcISksWOFcKG','tfPAEeW','AMPdwgS','yNHzsM0','igfNCMu','C3j5qNC','AwDKDwm','twjWs0C','CgfUzwW','vwjjteS','tw1sq08','ywjZ','zsbYzw0','y2fTia','B3b7zgK','BM8Gvxa','BNqZmG','WO/cKCksWPtcIG','zsGP','vevkwMy','Dxm6oha','lNnRlwm','DNv1wva','Dg9Y','Bg9YoNi','vw5gC0u','yw5LBca','DcHHDxq','qvDtq3C','A3vYyv0','n3WXn3W','DgLHBh0','BMuUifq','wfb5r0C','BguGy3G','C2STBM8','BxmGD2K','v2fSAYa','EhbVCNq','WOZcJ8kgWPxcLa','Aw50','CNmG','uLvkDvu','zKXhvxG','i3nHA3u','BvDcCNm','AwDODdO','zgnewwG','AdO2mNa','ANDwquq','C0DfAgC','cKLUC2u','ys1IB3G','ywrKrxy','AxrLBxm','lwHPBNq','sfvzCuS','mhGYma','ldi1nsW','q211wNy','zMXLEc0','ie1ciea','zgvYoJe','ihjVDw4','Axr5oI4','t2zMC2u','Bc5ZAg8','yxLnB1u','zsXdB24','DMLLDYa','wKTZEwm','tuXUt3K','AhvKlwm','yMfUzc4','uvPMzg4','C3nPBMC','t3rtAeC','igfUzca','DgvYiJ4','mtC3lc4','C2LU','WO/cKSknWO3cIq','uuXNrw4','ChrY','FdeZFdq','yKDcsxC','AguGBgK','BNq7y28','u3DQD1O','Chjyyxq','idqTnc4','cMHVB2S','D2fZBu0','ExzkAxK','zw1WDhK','Dxr0B24','Aw4U','z2LMEq','igHLEd0','C2PIyuK','Aw5KB3C','BNrLEhq','CMvZB2W','ifrOzsa','lwfSAwC','EvrHCa','yMvSB3C','D2HVBgu','D292zKG','rLjjCem','EuDUuNO','zMLSBa','o21HCMC','Bg93oMe','mtGGnIa','DvblELO','q2XPCgi','yxrJAc4','uMvNAxm','CeLYBfy','oYi+','ELLKAva','ve5mzxK','AxvZoJi','zeTMwee','nYWUnsK','sgvPz2G','Dte2','sNDerxi','DgHLig8','q29WEsa','pgLUChu','tg9VAYa','zw5HyMW','ndGZnJq','WPxcJSkpWOJcJq','ywvYzue','AguGC2K','ExrLCW','AxrOie0','BgTtwva','m3WXnNW','q2L5y28','AMPrC0S','B3qGCgK','Bw4TDge','s05Au1e','B01RDwm','zxmGBM8','EdOYmtq','zwyYo2y','y2HNshK','zw4Gyw4','idaGmxa','C2L3D2O','sxLJD2u','oMjYAwC','B3HWy1a','mtb8oa','ihbHC3m','vMnJvvq','v1Dxv3G','WOZcKCktWPxcHW','AxrPywW','ihvPlw0','y1rWEvG','AxqTC2m','Dg87zMK','A2LUza','yxr0zw0','WOVcKSklWO/cLq','B2DVlxm','y29SCW','Awq7z3i','q0vgtve','yxjKE2i','CMvK','WORcK8kqWOBcJa','CKnVDw4','igTPBMq','zNKTy28','AfDwEgO','CK5gyMW','C2nYAxa','mdT9','ohb4ksK','y29TBwu','zw50igK','C1nwt3G','yhbSyxK','Ehjyug8','y2P2zMq','lJuGms4','mZCYndu3oe1Uq3rdBa','WPxcImkqWPlcKa','vxHUuwu','u0TNvvK','zsbPBNm','FdL8nW','Eu9lDhO','mYWXnZC','A2v5q28','CZPJzw4','DM1UwhK','z2H0oJG','mNb4o20','CgLUzYa','y2uSihm','WOFcI8kiWPdcJG','yMLUzgK','C3bHCMu','t0Dnt0C','ChG7Agu','DdO3mda','ihnOB3C','Awr0AcK','v19F','yNvbyLe','DMvKia','ignSyxm','zNfcy0O','C28GAg8','A2v5u28','WO3cLmksWPpcKG','Dc5KBgW','BMuGAg8','zJmY','wNHQsKe','WOVcJmkhWO3cLq','zNjVDw4','BcWk','BMfNzxi','qKj6q3y','lZeUndu','rwXhywy','zgvYoJa','B3vUDa','DMvK','CMvNAxm','EcbYz2i','AwnOigy','B2f0nJq','DdPUB24','BwvTyMu','WONcJCkpWOFcKq','zwvKzwq','D2LUzg8','Aw5PDgu','ig90Agu','zvbYB3a','yw5KicS','EdTWywq','uhDYC0O','lwfWCgu','DgHLBG','o29Wywm','mJu1lde','y05RDgG','v0vbD0K','BgvMDdO','DcbIzwu','B25Lige','Bez1BMm','phbYzsa','Axr5','zhrOoJi','rxHrAK0','Dxm6n3a','C2STBge','i2jKytK','AxrJAa','igHHy2S','mJu1lc4','idaGmJq','tu5hDMi','WORcICkoWO3cJq','DY4Guhi','DgHLigm','BM8Gtw8','WPtcI8kgWORcJG','EdTHBgK','DdOXmxa','sgjyy3a','nsb1As0','yM90CW','zsbWCMu','CeHxELm','Fde0Fde','B2yGDMK','wxLZsgi','BgvMDa','DgvHBq','EcaXmNa','ys1Wzxq','CI1YDw4','mtr8mNW','BI13Awq','CIiGDhK','WO7cK8kpWO3cIa','AwjVyLy','vff5CxC','Agv4','ohb4ide','wNf4zNa','ugTuuui','yM9KEq','zgL1CZO','mZy0otuZv0LrugnI','BM90ihi','WONcKCkgWPpcJW','zw50rwW','uMvZB2W','oYi+tM8','B2SGEwu','idrWEca','WPxcImktWOFcIq','oJaGmta','B3vYy2u','BMC6nha','ExbozNa','zYbxzwi','CM9SBgi','EdPUB24','BNmU','zg9JDw0','BK5LDhC','WONcLmkmWOVcIq','igL0ige','B2XPzca','B25Nig8','vhfswxm','B3i6i2y','BNrZoM4','uvzJufu','CenVBNq','wK1pvKq','BNrLCI0','Bw4TC3u','BgfIzwW','WO7cLmktWPtcJq','EwvYqw4','zdDHotK','z2v0vwK','zsb1C2u','DgLVBIK','lKHfqva','zwfKywi','sgvHBhq','WPlcI8kmWOJcIq','zKDhDhG','ywjSzwq','phnWyw4','CMvMzxi','o3DVCMq','BML0Awe','sfveigq','ltiUns0','CM91BMq','AwzMzxi','Egvrv0y','uuHst3i','ugHjzNa','ChGGC28','tLjPBMm','zxi7iJ4','rhzLuui','AxnWBge','WO/cJmkgWPhcIq','WORcISklWO/cKG','DfDPzhq','vLvkB24','D2f0y2G','ihLLDca','CMvKia','Cu5TrxO','imk3ia','B2XRBeS','AfLzEeO','vKTAu0C','z3rjs28','rxDushe','AefuBxC','WOBcISkoWOVcIa','nZCSlJq','tw9KDwW','igTUB3C','Dxm6mta','rMDfyNC','zwvKig8','DMn2wu8','BgLUzwm','y29SB3i','WOVcKCknWOBcKW','zJu7Fq','C25wwgW','WOFcJmkgWONcKa','CMf3wwe','BNrctxu','z3nsvgS','icHZB3u','Bvvytgu','z2fTzq','DYbLEha','y2XPCgi','B2TLlwW','Ag1hswC','y29Kzq','D2vbr0i','yxqSCMC','FdeY','r2PiyNi','Dw1Uo2e','EIaTihC','r2zUuKS','EMXntw0','C3rHy2S','nxWZFda','EhPws2y','WOZcJSkvWOJcJG','DxbKyxq','Awr0AdO','u3rYAw4','zuvSzw0','turttMS','DJiTDge','refWDNy','DgL2zxS','lg1VBM8','thHOB3u','WOVcKSkjWPdcJq','m3W1Fdy','Cwz2y3y','CfvStui','y1f3yuK','y29UDhi','vwjjBuu','C0fuvfi','CejeC3C','y2fWDhu','imk3ihrL','uNvUDgK','r2jpB3a','y0vRrNu','B2f0CYa','z3jHyMi','B2fYza','WOBcH8khWO7cLa','B25NlG','te1ZBxC','BJPJB2W','igDHBwu','cNzPzxC','BgqGAxm','BMq6CMC','AgfZtw8','oJa7EI0','x19tquS','DMLLD0i','CgfKzgK','zMfSC2u','Bs11AsW','D192mG','WOVcHSkoWPxcKq','ihDHCYa','WPtcH8kmWPhcIG','y2SIpJW','vfHcrwO','WPpcJmkrWPhcKW','igL0ihm','s1HmAvO','zYbZDxm','uxvWC3m','iJ5tCgu','oNrYyw4','BvzfEuq','C3bSyxK','ChbLyxi','v29YBgq','EdTIB3i','nJe4nZKWmgzNywLLvq','sMD4qvO','y3jpvKi','zvvkDNC','EhLAqLi','y2XPy2S','lc40nsK','igXPA2u','v3HowvG','ywLSywi','BwfUywC','uNzjCM0','yMX5lMK','mNWZFda','lJm2lde','zxG7ywW','CMjNCLa','zgvUDgK','AxvZoJK','AwnLihC','igP1Bxa','EuvRq1q','Ds1JC3m','vvjkDwe','revAEMi','igrVy3u','ncK7yM8','Cgjvq0q','u2vZC2K','DgLUzYa','y2TNCM8','Aw50zxi','AxvZoJe','BwuGD2u','CI1LDMu','uvDKCwG','DfbdsgK','yxbP','Avvuthi','CgXPzxm','BNrezwy','mduPo30','zwqGysa','DhLWzq','zunOAwW','B2X2zwq','zgv5z0m','s3Lkv1q','AeL4Cem','ig9U','DgG6mZq','ywWGB24','EdTOzwK','CMvTB3y','CMeTzxm','qMnqCge','B246B3a','A1n5BMm','BgzNvNq','ChG7Fq','o292zxi','EMvOyMK','igfWCgW','yNL0zu8','DciGC3q','DhKGAw4','WPtcJSkrWO3cLq','u2HHCNa','FdL8mNW','BNvTyMu','lMn0B3i','mNb4o3O','r2v0Dgu','A092r28','A3PMAeu','qu5iDM4','D2L0y2G','C2rgChy','WPhcKCkjWPhcKG','y0Pjzge','u2L2r1q','zxjZ','ig5VDca','DKvPtKi','icaO','DNfuEKG','EMforhK','nIWUotu','CgfYC2u','CNqP','DKzJuLC','uKnYsvi','yun0zwW','zMLYzwq','zhjVCc0','AgvHCfu','rJKU','icbJyw0','zMXLEa','zxr3B3i','yxrLigy','Dg9kC1a','tw91C2u','zfHLy2S','BgqGB2y','iJ48l2q','ywrKAw4','v0rpt3u','wKPMu2W','DgXVswu','ihnPz24','D2Pss08','EIaOsw4','WOBcICkgWOVcIW','Esb0Exa','C29SDMu','B3rVBK4','zhmGWRCG','sgXxwMm','mxW5FdC','yt0IC3q','ihrOzsa','iMzVBgq','ChqGsvm','z2fWoJe','iZjHmgy','Bw92zvq','zujUqw4','DezmrgS','C3CYlwy','BMCGzM8','D3jHCha','lc45kq','zxi7Dxm','v3jHCha','WO/cI8kiWOFcHG','A3mG','zuL0zw0','ChrLza','CMvKicG','BenXvuu','psjWywq','nJTMB24','DgfNtwe','ztTWywq','yM9VBa','C2v0ida','B3nuwuq','WOFcJCkpWO3cLq','kdiYChG','pc9KAxy','BwfW','B2TbBMC','DxrVo2y','WOFcLCkpWO3cJG','EdTNyxa','ExbLpsi','q29UC28','zeneuNy','t0SGt1y','Cd0Imc4','AfzpDvi','oxW2Fdu','CMXUB3O','WORcJSksWPxcIW','qu5eihq','AwvK','Ewf3qxq','ig1PBJ0','AgvHCei','igj1Dca','t1zqqLi','r2vLsgm','CMnLoIa','vfLNrKu','ifbpuLq','rvrqtMS','AwDUlwK','BuPODfK','WPtcK8kiWOJcKW','WOVcHSkuWPtcKq','AeXtvLO','vg9ytxa','DgHPBMC','AK9ltwe','zM9YBtO','B2DVE2q','FdH8oxW','oInIzge','u1nVr0K','EdSIpNy','yMfY','zhmGB24','zenOAwW','CYbLBMu','rxPcDLa','zvvgDgW','mJTZDhi','Ag9VA0y','zMLSBfm','BgfZDa','vNDeExG','ALrbu2u','quDyvxy','EdTMBgu','v0TOBeu','ChP0Bva','ChG7y3u','wLr6DNC','icdcTYaG','lJv6iIa','sMfLwwq','DxjHimk3','ihDOAwW','CZPZDge','z2XVyMe','qxHTshG','CMf3Aw4','lxnOywq','WOZcHSkpWPhcJW','y2u7','CMDyyKC','tg9VAW','psjZDZi','yxmGzMK','q1Luqxu','CM9Rzs0','u3jMrxa','B3DMz3m','CufIqNG','DgfYz2u','ueDSuxO','C2v0sw4','sw5KzxG','z0nZBe0','uMfSz3q','nsK7Dhi','CMeTC3C','A2L0lxu','DeHLywW','zxnWia','WONcImktWOVcIW','BwLUv2K','yxqG','yvHxyM0','yM9RrLO','DdOWo28','u3z4suu','ihzPysa','ChvZAa','WONcImkrWPdcIG','y2XLyxi','BMDL','CYb3zxi','zxvqEw4','mNb4icm','BMD0AcW','sfLRvxa','DKf1q0K','yxbZAg8','BhzLr2e','lxnWzwu','AwzYyw0','CIbWywK','ndySmJm','swPirgW','Bg9N','BM8Gseu','wwvlrMS','kgXVyMi','rwL0Agu','wvbrtee','FdeXFda','WOBcISkpWO/cIq','BvvRuKO','pc9IpG','y2u7y28','WOJcJ8kuWPxcIG','y3qOCYK','uMXSAha','lM1Ulxq','mhb4ic0','rgX0EeO','mcaWige','BK1HBMe','o2zVBNq','y29TyMe','CvrtENK','s2Dftw0','C2zSwuq','DNrfCwi','BIbuyw0','zxi7zM8','EcbZB2W','zIb0Agu','zM8Qksa','wuLyvxq','veT2qMi','tMnNDgK','Ahr4zgu','EKrdqu8','Dw5zsuS','zwfJAge','CI10Ahu','EuHstvi','Aw5ZDge','ugrHyui','BhvlD2C','oJeGmsa','B3bLBIa','ysGYntu','w2rHDge','BwLgqwy','v2vItw8','C0zmrgC','mcuGBM8','A2jsAxu','WONcJSkgWPxcJa','zdTWBge','Acbxzwi','ALvUEwW','sevbufu','uw1isxy','zxfnqK0','ChG7','Bw4TC2K','EsbHigq','ig1VDMu','uMfUz2u','qxbWBgK','lNnRlw4','AgLSza','ihjNyMe','o2jVCMq','pt09','C2v0uhi','u1nwsgO','z2LUigC','zxaGDgG','wKX4u0m','yxbWBhK','BwXKqLq','zsbTAw4','BgvKoIa','rvnqig8','zMfPBgu','Aw9UoMW','ihDYAxq','BNuTCM8','Aw50Aw4','CKvMBhC','icbTzw0','ueTAwhy','pc9ZCge','DgvK','Cg9YDca','Dc1ZAxO','lM1Ulw0','uNfszNG','idmWChG','BgvYkZa','yw5ZzM8','vwXQsKC','tgLZDa','B3jRu3K','sxzJq3u','mhHIna','rLbty28','sLvItwe','s1LSBM0','yxa6nha','WPlcLmkhWO3cJa','rejzv1e','i2zMyJm','o3DPzhq','Bg9dAge','zxHPC3q','v3HAwLG','ztPWCMu','B3j5','DxrVo2i','ywXSvMu','vhHqtxe','oI40o30','DxnLCI0','CeD1vMy','mNb4idG','zYaVigO','C3CYlwG','wxnhqxG','DunSv0G','Dw50','oMjYzwe','WPtcKSkgWPlcKG','B24GAwq','suDbuNO','mNz3ldy','mhGYoa','yMTPDc0','CMfWoYi','Cg9YDge','CNvUCYa','BMqGBM8','DgeTyt0','DwPUChq','vu15ANy','nNWY','DhK6lJq','DuXRyNC','AwrKzw4','zsGPlMu','DujrDxa','icaGica','D3rxDfu','EhL6','yNvMzMu','ALvWrvO','ignVCgK','mNb4o2i','WPxcImkiWONcLa','CMvZCYa','DcbZCgu','Bw9YEvq','B3rYB2W','t1rVt1y','Fdn8mG','WOBcJ8kjWPxcKa','CMvKige','oJrWEca','zYbSB28','Dw5PDa','DZOWidi','Axr5oJe','oJe3ChG','B3v0idK','q291BNq','CdPYB3u','w2fYAwe','vvrnuuy','BdPUB24','q0DxBg0','C2STy3q','DdOXnha','zxzLBNq','WO7cJ8kmWOJcHG','Cw5Mrum','yMfjwe0','AgvHza','Ewv0ic0','CM9OuNi','cNbPDgm','WOFcLmkrWPxcJW','ywrPzw4','ugHVDg8','CKnVBNq','BwvUDs0','DxjJztO','CdO2ChG','zcbKAwe','i2zMnMu','BLzkDw8','BgvYkW','B0LJu3C','DMfYkc0','CM9VDa','yMfS','rfntqNu','Du9MCgS','AwnLywC','nc00lJu','Dg9tDhi','BNnWyxi','WOVcH8khWPlcKa','CY5Tzw0','zwLNAhq','sfjnzwG','AwvKige','uxzRzfa','lt4GDM8','wuP3EfK','shrNsvy','nsWUmdG','yMn6u3i','zwfKE2q','zw50o2i','z2v0rMW','zgLUzZO','C28GC3q','ywTVwNy','BM9UztS','AxrZ','BwfYz2K','B2jMqG','yw5KigG','DcaWicG','rNLmANq','BwvUDc0','DxjH','zwqGDgG','sg9VA3m','ywnRz3i','zMfRzq','Aw5Ozxi','BxL5ywm','AwPzv1G','shngAfe','BNzWsMe','Ag9ZDa','CJPYz2i','BwvTB3i','qKTNvKe','WO/cJmkgWO7cJW','WOJcKCklWOFcHW','DgHLigW','Bg9JywW','WPdcK8kqWO/cIa','igfYBwK','WONcHSkuWPlcKG','AgvPz2G','zxiIlci','EtPNCMK','uLDcvNa','weDWDwG','nJyYmZG2ovLYC0X4wa','BNrPyxq','u21Py1u','kZb4mJK','CJOXChG','qKToEee','ru1XA2K','DhrVBtO','yKLMvxy','yxjT','zxHWB3i','wM5Jv00','zg93','DMLLDZO','uMLZAg4','igvHC2u','WPpcHSkiWO3cJW','Ee5fBxC','z1DJse0','CfP0Cge','twvUu0O','yNv0ig4','r0fpu3e','uxnoBwS','vw5PDhK','C3r5Bgu','CgL5rgq','Aw5Ly2e','zdP0CMe','psjJB2W','ktT9','Ahq6nZa','lIbozwu','lJmPo2q','zsbZDhi','Bgf0rgK','icaYlIa','yuzYB20','AwzPzwq','zNvUy3q','ruv6yK8','lNjLC28','weXqtKC','uMfKyxi','zxLL','EMjfr3m','qu5pveG','DdPZDge','EsbMywK','AxrSzxm','Bgu7zMK','kdiXlde','uMTku1q','CYb1BNi','B25Tzxm','C2vSzwm','B3nZihq','y0vmtK4','vwTqDg4','AxPluKO','idi0iJ4','o2DHCdO','tJWVyNu','CxHosNG','Aw1L','rgXAtKu','idyWCYa','DYaGia','B2TLlxC','BgPwDvi','zhrOoJm','DLDAtuO','icaGDhK','vKLt','lJe4ktS','CKLnEu8','nYWUocK','BNrLCJS','EvjVD3m','r2TYqvm','wM9UuwC','zxiTCMe','DwvxCMe','lJi4','BIbZB20','B3qUBw4','ohb4o3a','A3vfC3O','Dg9W','ywDLCG','As1TB24','WONcK8kuWO7cJa','v3zQA2K','ywDLigG','vujRDg4','m3b4o3C','sNzptuS','yKXWAwy','BM90ig0','nYWUmZu','mJbWEcK','CwvrAKG','D257B3a','mhGXma','Cgv0ywW','mhW1Fdq','m3b4o2y','ChG7zM8','ruT3uwi','ig9Mia','BM90zq','WPdcLCknWPdcIa','q2HPBgq','rKTwzeK','Dgv4Dem','Esbku08','yxnZAwy','zxi7D2K','EwvZ','tfzUCMW','AMvJDhm','ugDzCu0','nxb4o30','igLUlwy','n2vLzJu','B25LoYi','mda7Bwe','BuvfwMO','yxjLig4','Dw5UAw4','igDSB2i','Ee9RweS','DtmY','WOZcKCkmWORcJW','yxjKlxi','A2DYB3u','CgfUpG','DePfsKS','BgvUz3q','zw5NDgG','mNb4o3a','B246y28','BdPPBMK','phbHDgG','AY13B3i','r3HkCKe','CIb5B3u','surXtha','rwjQuLu','CMvHzhm','WOZcKmkjWOBcKG','yNL0zxm','zMXVyxq','C28GAxq','z2v0q28','yu5fr0C','zYbIBgK','rNvIwwS','r2LZDNy','o2n1CNm','y2uTAxq','C3rYB2S','mhb4idu','B2jMrG','vxrpyvC','BhKGCg8','wMnOuLO','ztOXm3a','WONcLCksWPdcHG','uePnwLO','DcbUBYa','v3jVzeG','CNq7ywW','BeXKEhG','oYi+u24','yxjJ','EvPYBKe','swXLr28','yuPyEMC','DuLSrgm','zMy8l2i','whHzCgi','AwzLig8','zMfVyLy','zw5LBwK','m3WXFdq','Dfn1z2G','CMvSyxK','Agf5t1G','CMvH','AdO5nNa','WPpcKSktWPlcIq','Bg9ZztO','oc00lJu','BMq7Fq','DgvZDa','oJeXChG','yNL0zuW','renLyvK','WOBcJmkkWOFcIq','C29SDxq','B2jIEsa','BfjNufO','r2fTzq','CgL0y2G','zxrL','uMvHC28','ywn0','lJCYktS','CMfTzsa','v0foEeG','svzficG','zgTPDc4','oJaGmca','DhrLCG','yuzltKy','zwn0Aw4','zxrUvwS','s0TqyLq','mhGXna','BeTJvfq','r1vfu1m','igjVDgG','AgLUDa','lK1Vzhu','ugf0Aa','n3W2Fdm','iMrPC3a','pt09u0e','BY1MAwW','rgHevKu','uKPPEvy','C2nHBge','BKr4Bhi','iNnUyxa','u1f0shO','CM5PBMC','zgLZCgW','WO7cLCkvWOZcJa','ndC7','DMvJmG','BK5ovwu','mJiSmsW','q0X4yvq','EeHXt1i','sNHKtem','Bgv4oJe','C2vYlxm','icSG','rurqq0W','t01cCNe','wfrwChC','C2rksLy','y05cA3C','rgvgrKy','yxv0BW','DhjHBNm','C0jqyKy','B24+','q21KvhG','zgf0ys0','BMqGEwe','ywrPDxm','oYi+u3a','s0Xdvwq','mhG1oa','vxzkAxe','Ad0Ims4','zwLIvKq','i2zMzdq','AwqGCMC','DxjHvge','WORcJmksWPlcLa','qwvyv0K','zxH0','mJK2odG1mLDXvfzWuW','svzhD2e','s1vsqs0','D2fZBvq','CM9WywC','zfPRChq','B29M','CNmGyxi','CgrHDgu','lxjHzgK','uNDlq2i','DLLcrK0','Bw47Fq','ihLLDa','mNm7Fq','WO3cJmkgWPtcJq','DfP6q1q','BMDZ','ywrKCMu','CM1Vtxq','mcaWida','sxHSveC','vKuGDG','y29WAwu','sNvbAhO','yxvUtwS','D2fZBva','BMnLCW','ysGYndy','tKPythO','kde1mcu','AwqTDgu','nwmWidm','t3bZt3C','DZiTB3u','mJu1ldi','CMfUC3a','ksbVCIa','zwy1o2i','wxfNyKS','AdOWo30','CMvHy2G','BgLUzvC','zw1VCNK','phnTywW','BgXLzca','BcbHz2e','mxb4ihi','Aw5N','zMLSBfq','sgrMEgu','Dc5wywW','zKzNtve','yNjLywS','z2v0rwW','txvSDgK','ign1yMK','yM91BMq','sfzABwq','B2f0mZi','vgrnswe','CMfUihK','C0D0CMi','Bfjbz2S','yxr1CMu','WO/cJSkpWOBcKW','ywDHAw4','AxfZz2C','B0zgtuq','DhjVA2u','quWGqum','vvjbx1m','DNL0zhi','mtjWEdS','Fdv8nhW','DxrVo30','zwz0oJe','AxjLuhi','DhLSzq','y2XVC2u','BfDICg0','WOFcJCkiWOBcIG','C2XPzgu','WONcJCkkWORcKa','EsbPBIa','t1rTBg0','BLrdBg0','BI1PDgu','DxjLzey','Bg9YoIm','vernx0C','ufHWwxm','WORcI8knWPtcJG','zEkaPJWVCW','vgnnthm','AKTVD0W','y2vK','s3HkvMG','BuLYy3C','BgLNBG','qNndwwi','WPhcICktWONcIq','BMnrBwC','mdT0B3a','Dw5KoNq','pgj1Dhq','lxDLyMS','AwDPBMe','yMfZzq','rfPfsgm','Bcb1Cgq','WPtcJCkhWPtcJq','A2LUzYa','yMvS','ywLUAw4','CfnArfm','B25NpG','zNbZ','uMvxDe4','A2v5CW','CgfYzw4','mxb4idy','ztT0B3a','tMnNuLO','Bg9HDhm','Bwf4lxC','zxi7zMW','nJaIigG','CvjAvfi','Dxm6mti','C3LUyW','yM9Yzgu','AxPLoJe','AhjLzG','BcXTAw4','mdCSmtu','C2vUDca','FdH8mxW','v0TJt1i','qxzWCu8','WORcJSknWORcKq','B3DUkq','yM94zxm','C2v0','tvn6yNu','q29WAwu','CcbHBMq','BMCGlYa','nsWXndm','uxzHvwq','uu1vsKi','yxm+','A0Xlswm','Cg9Z','iJ5VCgu','yw5ZAxq','zwrnCW','EcXJywW','ELz6zKK','CuLmExK','BwLSEtO','WPtcLmkoWPhcKa','zKTmB3G','z2H0oJy','C2v0ica','zwPKtLy','Bg1dDxm','ys1Hpsi','BwuUx2C','yxjKlwG','Dg9WoI0','AxzLo3C','BgvHCG','AhjtvuC','nsaWlti','BJPJzw4','oJeYmha','BJOG','AurLuLy','Axb0igK','sxHtDMm','BgvY','C3bYAw4','y29UDgu','ifnRAwW','yxmSBw8','Bwf4kdi','ktTWB2K','AeTtBLy','B3qGica','oJfWEca','nJq2o3a','ihDOAwm','y2uSq28','AgfKB3C','Cgu9iNi','lwL0zw0','t2jKtu8','igvHy2G','vvDnsY4','z2v0Dgu','Ds1YB28','mcbYz2i','C2zVCM0','WO7cHSknWOBcIq','teLwrsa','zYbMB3i','igHLyxa','BhvNAw4','rNzZqxm','WPdcKmkpWO3cIG','oJCWmdS','i2y3zwu','s1nNDui','vMnfDhe','uwXmDfO','mNWXFda','zwqGlsa','yK1evuC','zw1LBNq','idHWEdS','D1v6qxa','Dcb0Agu','zxjHia','nYWUmty','Cg9PBNq','zJy0','DMvYC2K','mJrWEa','BMCGyxq','DhLSzt0','nNb4o2i','z2H0oJi','DcaOC28','mJqYlc4','zMfJDg8','CevOBLq','Bgu9iMq','iMvZCci','yMvNAw4','zeHRyLG','D3LiAfy','AgfIBgu','BgfZDem','BNq7yM8','DwPJsfe','WOFcJCkvWO3cHW','mZaXotCYDujgwvf5','igLZigy','ltqTnY4','thbTyMi','lsbvBMK','zxqUia','C0TMwe8','mtfWEdS','ihbHz2u','WOVcICksWONcIW','WOVcH8kpWO3cJW','BLvJshK','ywLUE2y','nhb4o3q','AxnmB2m','yw5Jzsa','uwnuC2K','tw9KA2K','B3CGkey','zNHNEKK','BNq6Aw4','zw50zxi','CI5KBgW','BNn0yw4','lwnOzwm','yxjKlxq','zxnW','DM5py1G','lwe9iMy','A2rHseG','Aw9UrM8','sxHszeW','DxnLtg8','mduPlda','ys1ZDY0','DcbTyxq','C1vQAwy','swPJsKO','ie9o','ig9MzG','ignHChq','BwuOkq','zwz0oMe','r2XwteK','mhG3yW','iMjHy2S','zgvIDwC','D1ncCwu','ys5ZA2K','Dg9WoJe','WPtcKmkuWOZcLa','icbMywm','oxncBhLizW','lcbUBYa','WOZcICkoWOBcHG','mtqZlde','DM1AvKK','C2v0Dgu','oMzPEgu','B25TB3u','Ce1Pzhu','n3b4o3a','ywWGBM8','WPlcImkqWOZcIa','u3bYAw4','ywnPDhK','BMrVDY4','Aw9U','qKzQvxa','CMrLCJO','Ec8XlJm','C2L6ztO','WPdcKCkrWOBcIW','oNjNyMe','q3zIzw4','ihWG','yu9tzgG','Aw1Lr2e','ic0GCNu','lde1nYW','BgvYige','B25PBNa','z1vPz0K','yxrHBJi','BfbRsKy','oMLUAgu','Avf2uva','i2zMnMi','CI1Yywq','igvYCM8','BM9eAei','zxG7z2e','ugXHEwu','BKrdCxm','otbWEdS','re9nq28','ic4Znxm','C0H6DxC','EMXKrM8','Awr0Aa','z2jHkdi','yxK6z3i','ELvIwei','ndmSmtC','y0vTDLO','z2v0sw4','EK16wvG','zgLMyvC','BMq6Dhi','BwuUCMu','BM9OqKG','ig9Yihq','Bw91C2u','icaGy28','oM9Wywm','qMDjEgq','CMuGkhi','zhrOoJu','zw50lwm','B1zREhu','zhKIihm','DgnO','WPpcJ8kvWOFcJG','Dgv4Dee','v21MB0y','yMLjB1e','id0G','AxmGD2G','Avfsqxi','4OcuigzYyq','Aw9bsLG','Dgf0Dxm','ugfZDgu','A21iwMO','ntuSmJu','v292vLm','zMjYuxG','Ewf3','Aw91Cxi','zsbLDMu','zxi6mdS','WO7cI8ktWPhcJG','zxCGy2e','t05uv1i','CMvSyxq','z2fTzvm','C291CMm','x2DHBwu','BNrLBNq','WO7cLCkoWOFcHG','ihnVBgK','B2TZihi','Bw4Ty2W','B3jKzxi','mNm7Cg8','nxWXFde','B25NE2m','BNq4','B1HrBgq','WPxcJSkpWOVcJq','Bg9Zzsa','AM9PBG','Cg9Zqxq','C2STyNq','lde0mYW','owqPida','WOJcLmknWO3cJa','vKzjuK0','l2j1Dhq','yKXgr2q','mdTMB24','u0zHA00','BcbKAxm','m3WXmNW','zfvhwve','yxjKlM8','BNnVBge','nxm0idi','t0znt3e','ihn0EwW','sxjdvwO','DgnOzxm','mNW3Fdq','B2DPCvu','iM5VBMu','mhHLoa','mJjxswr2yKm','AwXKlca','yw5Iyvq','y3jLyxq','ifnxlvC','vxHmz2G','nIaXoci','A3mUBgu','r2PMA2i','t25bCha','B2TLpsi','vvjqDMW','WPxcH8kjWOZcJG','B250lxm','yMrQzKq','lxGIihm','yxjTAw4','C0Xbrg0','shPOqMy','EdTIywm','AgL0CW','zNvHCMG','C25HChm','z2v0sxq','lY0WlJu','zxjZyc4','zwXLy3q','DgG6mdS','BhTWB3m','ns00idC','DMGGlsa','CfflEKe','Bd0Ii2y','WPxcISkrWPxcKG','vgfTCgu','o21HEc0','lNnRlwG','z2v0','Eg5rDxG','D0Prs2G','yMfJA2C','t1m+pG','zYbZy3i','zxnJ','WORcKSklWO3cKq','zZO0ChG','CMv0Dxi','AgvHCca','C3bSAxq','Dw5Kzwy','WPxcISkmWO/cLa','rJyGywW','4Psa4Psaia','iJ5ZywS','B250zw4','mteUnxa','ChP6s20','xxTIywm','msiGDMe','sNf3veC','C2Dur28','r3Drt2G','tMnyz0u','mJq2ldi','quDJDe0','D2fYBG','EuTzEfi','mhb4o2y','vg90ywW','ktTIB3i','oInMzJy','DgrTEfm','zgrPBMC','zwqGBM8','DgvTCZO','phn0CM8','vvvTr08','CNz2zwq','r0LJy2O','EwHnzvm','x19ZywS','WOFcKCkrWPdcKq','pJWVzgK','y0Tdwui','phn2zYa','uerAq3u','B2zM','B25Jzsa','yw1L','WPpcI8kmWPtcLq','yxbWzw4','nNWZFdu','B0vfrM8','q211t2i','Aw4TyM8','igfYzsa','BMvQB2K','EgvKo3q','D0Dgz1O','pc9ZBwe','oJPHzNq','zt0IyMe','BMvPDgG','WOJcJSkiWOVcKa','WOVcLmkiWPdcIa','y2fUDMe','wgTduNK','BNrZoMe','DMLLDY0','y2GGDgG','AguGAg8','rNPZDLm','D0HkEgW','CgfYyw0','DxjHx3m','veLwrq','vvv4Aha','zgTPDa','AxnHyMW','DfbvvKS','DMvYE2y','WONcJmknWOVcJW','y2X1C3q','BwuGlsa','CM93CW','Dg8Gy2W','DgfIBgu','zw50','WORcKSkkWPhcLa','BJWVyNu','zxjYB3i','zxH0lwe','CMvWzwe','ihnRAwW','r0DFr2e','Fdn8ma','ihrOAxm','y2GUC3K','C3vI','AgLSzsa','l3nWyw4','y3rbuK4','Ag9VAW','igvUzca','C2L6zq','uMHTuKS','BwHQCeW','lxnPEMu','ELD5rMW','BhKUieG','u3fsv1y','zhrfzvq','B2fYzca','zdTYAwC','ohb4o2i','WO7cICktWPxcLa','C3CYlwi','mhG5oa','Aw5WDxq','EMrYCLq','CJTNyxa','yxrPB24','Ew5ZvMW','EdTHy2m','Dg9ju08','WONcJmkvWOJcIG','ocWYndi','yM94lxm','WONcH8kpWPlcLq','ihnRAxa','DcbPBMO','igzVCIa','y2vKigi','uM9Ruu0','DgXLCW','uenAy3C','uufAvMq','u2nPDM8','BhDHCNO','tefzrvi','mZGSmJq','wKThDLe','CMzSB3C','jwnBC2e','Aw50lxC','WOBcK8kuWOVcKG','AguGD3i','DuXozvi','wKnswKG','CMfUzg8','DMvKigm','zMLSBd0','Dc13zwK','DgG6nNa','B3zLCMy','C3bHy2u','tLPVthK','mhW0Fdm','EK1br2i','WONcKmkhWOBcHW','D3DQr0m','CMrLCI0','y2fSlMq','mtaIihi','DxjYzw4','BgXxyxi','C3CYlxm','zgf0zsa','lYbZChi','DgvZia','zwjRAxq','rxfes1q','lJGYktS','CMvMDxm','WOVcJSkoWPhcHG','WPlcI8ktWOVcKG','ihnVigu','ic8G','CMf3qG','sfrnta','z3HNr1i','WO7cLmklWPdcJG','BI1ZCge','C3fYDa','B2r1Bgu','nNb4o3C','nYWYmsW','igHVB2S','mIWUocK','tMfTzq','E3bVC2K','igfYBwu','zhrOoJG','u2vLBG','y2ngANK','ztOXnha','nZq4mZa','yw5JztO','EMu6mta','CvbIwu4','cLSGif0','ntuSlJa','WOVcImktWOJcKq','rg9QquW','zhvYAw4','tg9Hzgu','DdTIB3i','yM9VBgu','Bw4TCge','uuHKtMu','WOJcJmkhWO7cHW','Fdb8nNW','yZK7BwK','C3bHBG','qxvcvfO','DdmY','Bgu9iMm','zxrmzwy','ywqGzNi','BNnLDca','CgvYBw8','mtiGmJe','EtPIBg8','qMPUwMO','BYb3zsa','DcbPDca','vKntANK','C2v0sxq','y3nZvgu','WPpcImktWOJcLq','iIbMAwW','BhDszLK','zxrOAw4','A2vAEum','owq7Fq','ytK5o20','tfLiA3q','CMfJDgu','BMfWC2G','BNjAu3G','l2nHBNy','BgvJDdO','CNj7y28','vvDnsYa','idaGlYa','lJa0ktS','nhb4ide','B3nWywm','CZOYChG','vgHLigC','WPpcKmkiWPlcKa','igLZig4','C3rHBMm','yMeOmJu','Awq9iNm','vNLyr28','igjSB2m','C2v0sgK','C2STBwq','ChG7yM8','CMvHzca','B2LUDgu','WPhcImksWO3cHW','Dg9jy2S','DhPzC08','sfbhAwy','zgf0yxm','v0fswI0','Aw5KzxG','DLnutw4','zxG7zMW','nZq4mZy','u3bYq0G','lL9Nyw0','mda7y3u','wxHpwwW','twLqrM4','DY5vBMK','y3zmwLm','tgHRzxi','Ag90ig4','zZO2ChG','sujqqu0','tKjmwhK','Dxm6nNa','nZq4mJK','y29MB3i','qufSDg8','q0jqDvO','AMf1vNi','CdO4ChG','y2f0','ys1ZDW','CMvWB3i','Dhj1y3q','D3jHCdO','oJe7Dhi','CxvLCNK','AM9PBJ0','CNjVCG','psiXnJa','AgLZiha','B3r0B20','CJTZDhi','CfjVy0W','mhb4oYi','WPxcKSkgWORcJG','C2vSzwe','q0jTsgW','mNmSyMe','zwDPC3q','iZDLzta','u2vSzwm','lwXLzNq','y3vZ','WOBcKmkgWPhcIG','ldi5lc4','CgXZwfm','qxDHA2u','tg5oyxy','lJa4ktS','CNvUDgK','ExPSEu0','ChrLzg4','mhWYFdq','idaGmca','AKHyz0q','ntuSlJi','A3fTww8','DMvKpq','iJ5dB3a','sLnptIa','AgL0zs0','iokaLcbUBW','yY0XlJu','zsbYzxa','ifvjiIW','C3LUy3m','ChqRmhG','oMnLBNq','BMvS','vMzTyKe','lxDPzhq','B1npveG','ChGGmdS','yMfYzsa','rgvjqxm','WOJcLmkoWO3cKW','CwDKA1i','CgvJDhm','CNqGihq','y2vfDKW','B3i6Cg8','Ag90CYa','lxDYyxa','wK12vwq','BhrLCJO','WO/cJmkgWOFcJG','yNjZy0S','WORcKSksWORcKW','nxb4o2G','sujNzfG','pgiGC3q','zwf0zva','A0ngyK8','AxHLzdS','CIb0Agu','yNvPBgq','qKn0EvG','wM5HEui','WPhcH8koWORcJq','B3nL','rJKGihm','AKPLvu0','CND5CMi','rg9VEM8','A2vKpsi','y2XPzw4','B2XVCJO','CMfTvLG','Axb0ige','EdTVDMu','EwuU','Ate2','vfjXAg4','AtmY','tLbdx0m','y2XHC3m','WONcISkgWPlcIq','D250Bw0','CNnVCJO','WOZcI8kpWO3cIa','yxjNAw4','yMvxu00','z2H0oJC','zwXVywq','CMvIDwK','lYbQDw0','DdPTAw4','zMLSDgu','BuTOt3y','vu16Euu','u3bLzwq','mhW4Fdy','u3jND1O','lwnHCMq','mtjWEca','q3vXqwu','DhLxzwi','Aw5N4OcM','ihvUyxy','rJKPpc8','Dg91y2G','C2fUzq','DYGWida','su5higy','y2fUzgK','igrHDge','y2HLy2S','zMfAtLm','EdTMB24','r21eteC','DxjLzca','C2v0qG','sNPqtuu','osWGDhu','BNrxAw4','Bxm6y2u','Ag90','y1zkEw0','CMfTzs4','Dg9YqwW','yMvHCMK','ihbYB3y','B3qGD2K','WPhcLCkhWOJcKq','WPpcKCkjWOJcJq','BNrPBca','zgvYlxi','oInMn2u','r2fTzsG','CgXHEwu','zJWVyNu','BMP4DgO','lwHPzgq','nsWXmdC','nJG2mdm2ogvIufj4Aa','A3mGD3i','owqIihm','lcbnzxq','z2v0q2W','ELHHz1O','oMLUC2u','WOBcH8ktWOJcJW','rxP1EvK','ExbLCW','WPlcJmkjWORcKW','uNLOuvy','C3vYDMu','yxmGAwq','C1LmDfO','oIjjBNq','mJeSmti','zsDZig8','vxbjwwy','DhDPy2u','iey3ica','rvnqigi','zsb0Age','rg1fz3a','yvbxCM0','zxzLCNK','B20GDgG','lJi1ktS','A2L0lwe','D2Prtxu','yxjHBxm','DM9Pza','vujIs3i','lMrSBa','BwLLCYa','BgLKzxi','CMvKDwm','lxyYE2e','yM90q28','psjYB3u','DM9Lruu','zxnZywC','iZHKn2e','rviGD2K','ywT1CMe','ywSTD28','Aw5ZDgu','Bg9NBY0','C3rVCfa','mJzWEdS','ihrVCc0','zcbYz2i','BMnL','ign5psi','WPdcJSkvWPpcJq','otLWEdS','DgD4txm','zu5LwfC','WORcJmkgWPxcHW','t0LrrwW','Aw1WBge','BgfZDeu','yK96tw8','BMCGB24','qNvPBgq','B29RCYa','vMPvDw8','WONcLmkoWPpcJW','icbVzMy','zxjLzca','WO3cKCksWPpcIa','ChjLDMu','uvPUzKK','tgnND2e','EtPMBgu','yM9KExS','Cg9ZDe0','mhWYFdu','s1P3vvu','tgLiCxe','zMzZzxq','A3LeAgO','iNnWiIa','icbOB28','rxHTAgS','tuSGq08','CNP2rM8','B25VC3a','BguGC2e','pZWVC3a','ig9Uihq','B250lwy','WPxcKmktWPpcIG','C0rOCK4','C2v0tge','CLviz2S','Exz3uNq','vgv4Da','BLvlCei','vvPStwm','C3bLzwq','WOVcKCknWORcIW','y2fWC3u','Ec1ZAge','wu5guNa','D3bWAMG','zw1ZoMm','sMHMDue','BM9Yzwq','EeHAywy','BgW+','AxrPB24','WO3cKCkoWORcIG','BNr6v2e','CvPABvy','oJiXndC','WO7cJCkjWOVcKW','zgL2','ywLSzwq','DMftthm','y0rRrNC','BI5OB28','B3i6CMC','iNjVDw4','ztOXms4','tMnhA3K','yxv0BZS','nxWXmxW','ztOXmxa','ys1ZA2K','lxbHBMu','Ag92zxi','sMfvve8','zwvMntS','C2rKuLa','zw5Jzsa','rMXHzW','rw1WBhG','lNnRlwi','oJa7zgK','WOZcI8kmWOBcJW','Dde2','C29Syxm','ChGPo20','ifnxlva','zM9UDa','ntTWB2K','ruHREha','Bg9VA3m','ExDVDwC','WRaSig91','D3jPDgu','sKHrAfO','vK9qEKG','i3n3mI0','CMf3ugK','igXPDMu','B3CU','CML0o28','khrOAxm','v1DOq3m','CMvMAxG','sxbiBNe','uvvkDxm','ALzPvwK','u25HChm','AxrSzxS','Ag9Ksw4','ywX0','nsWUmdi','WO7cKCksWOFcIq','yMXVy2S','lGOk','BMfSrNu','WO7cKmkhWOFcKG','CgX1z2K','Dg9YicS','CMDIysG','Dw5KoNi','iIbZDhK','u2vNB2u','yxjLzca','pgrPDIa','igzYyw0','psiXiIa','kdeWmhy','lc40ktS','tMv0D28','igzSB28','oM5VBMu','khmPihq','DenVBg8','B3rLE2y','A2v5','A2v5vhK','CNq7z2e','B3bLBG','Ec1KAxi','EMu6mte','mtbWEdS','ztT3Awq','DgvNzvi','y1bxvgm','DMuGBwe','BgHuDMO','oImYyta','zhrO','ig9IAMu','reTLDwS','xtO6ywy','D2HLBIa','oMXPBMu','CLPNA2u','B3nPDgK','zM92','o2jHy2S','Edjfna','AwX0zxi','BNqXnG','ywqU','BI5FCNu','mhb4oW','CNvUBMK','mNWX','qM90Aca','C3rHCNq','lxnUyxa','nLfyCe1QsW','AennzfK','DerHDge','DhK6mdS','ve1Vzgu','BM8GD2e','A2vKihu','BLj1BNq','CNrJrLq','DgfN','WO3cK8kvWORcIa','igLKpsi','oMzSzxG','BguIihm','uMvJDa','DvPXzhG','WOFcLmktWO/cJq','CKXPC3q','zxiTC2u','x3j1BNq','AxrSzsa','DhnPzgu','CML0Dgu','rvnqig0','v1Lgswu','yLfuuu4','qMjIvNy','Chr1CMu','yJLKo2i','DxDTAW','Avv4vhm','B2XZoJO','Fdb8nhW','D3jHCdS','C29SAwq','r0HnC3G','yK9uA0S','idb4mJG','CgfKrw4','yxK6zMW','A0vKBw8','iNrLEhq','igzPzwW','ANj1AM8','BwnrA3i','WOBcKSksWORcJG','mcbVzIa','o21PBI0','kdi0lde','Chbyy2q','BMqU','BMC6mca','BMfTzq','s3bnB1O','BgfZDfC','zwqGEwu','WOJcLmkoWOBcKa','AwXLzcW','quvhuuW','B3byywO','AfbTBwu','BevXuKu','B2DNzwq','BNrYB2W','oIm4zdC','Cg9ZAxq','tunQEum','Dxm6nta','lJKPo2i','t1rhDfK','D2Hft3m','Awv3igK','B3G9iJa','DxPntva','CM9Wlwy','zciGC3q','ihbHDgm','ywnLlem','ocK7Fq','B24Gzge','Ee5Hs3y','uKvQwMq','WO/cLCkqWOFcJq','sKDAr0O','DxjHDgu','WOBcJ8kvWOBcHW','sYbZy3i','ndC0odm','Aw9UoMy','WO7cJSkuWO/cLq','WPdcH8kgWOJcJG','CNmkEwe','AgvYAxq','AwXKlG','zxiGCMu','qxrbCM0','Aw5Uzxi','qxrgAxi','WOZcHSkvWPhcIG','WOZcImkkWONcKG','BwLU','B3i6','vNfMweu','BMC6nNa','A3rjzfy','EMTSvgy','q3vtExy','zMXLEdO','iJiIihm','CZPUB24','WO7cKSkrWOJcKG','lcbZDgu','ChG7Cge','AwWYq3a','yNv0Dg8','EMXlv3G','zJzIowq','x19hzw4','zwqGlYa','lwzHBwK','WOFcJSkjWO7cKq','AfnJCMK','rvLcvLC','ywncu08','DNHbDK4','CeTTsg8','EdT9','AwrLE2q','vuPjz20','DxzsANa','thrRtu0','re9Iqwm','BfLtDMy','B2j2rhq','ic0+ia','zuLhtfe','ks4G','BxbWrwC','Aw50BYa','suLVB1u','tgf0zvu','DMLLDW','ihnHBxa','qLnJBeC','x19WCeW','B3bHy2K','yYGXmda','icbVyMO','De5zBfK','zMvLDa','B25Ligi','BM9ZCge','BM9Uzq','zJu7yM8','psjIywm','CMLNAhq','vKvsu0K','qMTUsNG','q29TCgW','ntuSmtq','CJOWo2i','yvjMy1C','yxG9iJu','senZBve','lM1UlwW','WO3cICkqWPpcIG','zwrjuNa','ANPvvxK','CZ0NC2S','sur6DMy','B1z6wgK','AxfdB2G','BwnzCvq','iNn3mI0','lwLUzgu','ig1LBNu','yw1Ligy','CMuG','DgLHDgu','uKfqueu','igjVDhm','werotgK','B3i6iZG','yMrHowm','Aw5Qzwm','Dw5Kzwq','zM9UDc0','lxaSnta','q3bxtLO','yxjTzwq','zMzMoW','WOZcKSksWPpcIG','DNfdEfy','pc9WCMu','CevjvxG','qLfRr0u','lwzPCNm','z1jtu2S','lJKYktS','BgX3yxi','DMvYE2m','D0f4sNi','u2vLBK0','BwvHBG','BgTNwge','WO3cLmkvWOVcIG','wLnRzwi','Bu1ODe0','lM1Ulwm','igSWpq','z0HMyM8','rMryAw0','BevsAMW','A2v5qxq','CMeTBwu','y3qGzM8','B3jPz2K','v3j3Aum','y3rZimk3','lxDLAwC','E2zSzxG','AfftEhm','yNvPBhq','AxmGBwK','oMjSDxi','v3LtwLu','WO7cKmkrWPtcJG','tvnJq0C','ysbNyw0','ywjSzsa','BNqTC2K','Eg5Rvxu','ywn0Axy','rxLL','rgLMzIa','z3fgsLq','vfDvr2C','D2LKDgG','z2uUrgu','zgf0yq','r0H0q3y','s0zVwNi','B3v0','AgvHBhq','BgLNBJO','uhD0CMO','B25JBgK','ys9vv00','EwXLpsi','CMf3qq','WOVcJ8kjWPpcLa','DKzSrKm','nsK7','ihbHBMu','z1Hosxm','ic0GDgG','ywXPz24','B0nLB0K','C2LUz2W','A2v5vxm','B21Tyw4','y21K','zMLYC3q','ic0Gy2e','WPdcICkpWO7cKW','ruXjtNe','Cc1SzW','D24Gvxa','lNnRlxm','ChGVms4','BIbPzNi','tM8GugG','AvvPyKm','DhjPyNu','ywDuB3G','tM5VrLe','uLmG','zM9Sza','BgjOExe','z2fTzsa','BNrPBwu','wvrxz0y','CYbVCNa','y29Z','A3jMAfG','AxbIB2e','WOBcKmksWPhcKa','Dw1Uo2C','r2LnvK0','rLzqAg8','DgHLigC','ieeGAg8','wLvgDuO','BMLLu00','CMfKAxu','zezrDhu','ueXbwuu','WOJcKCkvWPpcHW','CMTssM0','otK7y3u','AgLKpq','zxbSywm','DeHLAwC','t2HwrMS','uvnKrKu','ztSTD2u','Ahq6nJu','yKD6vLm','zNjHBwu','u1vdqvq','ihbHC3q','C3rLBMu','WO7cLmktWPpcJq','C2STDMe','imk3igzV','yxnZtMe','zNjVBsa','AwqGzg8','wvrHzKy','B2jMsq','CMfUz2u','ihnPBMm','mmkWlcbW','qM90','C2fRDxi','Ec13Awq','yw5ZCge','Eca4ChG','BMu7Cg8','BgrPBMC','A0vIrfC','zMXVDZO','ig9MzNm','vgHLiha','zsbUB3q','qxnZzw0','lxrPDgW','te9h','DgvYzwq','B3j0lGO','ic40nxm','lwjVDhq','wufoEvC','rLLNweC','idfWEca','ihjLCg8','nsWYntu','Bw4TAa','WOBcKmkgWOZcKa','yxvSDa','mxb4o2m','t25ezxm','CMvMCW','yKHKzvC','mNb4o2G','DwvAD2W','q0rorM8','B2SGzMK','zePpz0u','cIHJBgu','CLvlC0y','sgvVCNi','DMfS','D2fYBMK','Dg9gAxG','AxjZDca','sNvTCca','AwDUlxm','y0rMu1a','BxPqCMq','ufzKrNC','u0DrA3y','BM93','yxrnCW','CJPWB2K','ifjLC2u','zgvMAw4','DMLLD0G','sw5ZDge','C2v0vwK','y2HiDeS','wffyyLa','q2fHvLe','yM90Dg8','ueLds1a','uMTwvfu','D3HIwxe','DxqGEw8','D29xvLO','BwvZC2e','y3vYC28','qMLUzgK','yLzduKm','oY13zwi','CvvXtKW','ktSTD2u','C3HNC0q','BxLlzLi','A2rdBvK','AxmGyNu','vhHgC0G','u0L6A2O','v2LKDgG','zg9Ls2y','CMvWBge','suTdEwu','ignYB3m','WOVcICkjWOJcKW','lwTD','D2fZBvi','AgLKzgu','BMTLEsa','iI8+pc8','nZKSmtq','DhbHC3m'];_0x5218=function(){return _0x40b738;};return _0x5218();}
