// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.9.11
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

function _0x3052(){var _0x33619d=['C2v0sgK','DeXHy1i','ntTWB2K','ExrWA1K','EdTIywm','C2STyNq','t0nPD1y','ic0Gy2e','yKnOA3i','BMvQB2K','AxPLoJe','uMLLCu4','rJGGlYa','BM90zq','nNb4o3C','yNL0zuW','zg9JDw0','EhbVCNq','C2STChi','mcaWida','BfHiqKq','vKHQyu0','t3rPwKm','lwfWCgu','uuPQC2O','DhLxwKG','rurhA1G','CMvKihK','jwnBC2e','t0fLtLO','lwfSAwC','C2STy2e','CMfUihK','ms4WEdW','ywqGzNi','mtTJB2W','tw9KDwW','zeXeDNG','AgLZig0','zw50o2i','BMCGyxq','zwfKEsa','WPhcKSkpWPdcJG','yNvPBhq','Bg9ZztO','oJCWmdS','zgLMzMu','zw1ZoMm','q291BNq','ieeGAg8','Axq7Fq','Bw4TDg8','yLDcDMu','q29WAwu','zxKGAxm','D2fZBu0','rxnHzNy','Dc13zwK','zxi7z2e','A2v5vhK','mtC3lc4','oJm0ChG','lMrSBa','Dw50','WPdcKCkoWO/cIq','id0G','DgG6mZq','q2HlwuW','igzYyw0','D2L0y2G','z3TMB24','mJiSmsW','EdPUB24','B3jYzwm','swjYs24','zhrOoJG','B2jMqG','z25TDue','B3rLE2y','CgfKzgK','C0zNsfO','lNnRlwm','ywqU','zKfLyw4','BJ0ICM8','yxjT','EtPNCMK','zwDPC3q','C3rLCa','CMrLCI0','ugf0Aa','ywn0','DhLSzq','ihDOAwm','AffnA2q','EKL4BeG','zxr3B3i','yMfJA2q','Aw1Lr2e','AMvJDhm','DvbWB2i','yunqzMy','zuf0rMK','Ec1KAxi','A3z0Bu4','Be5Kv0i','Dw5Kzwy','Dg9W','yNnzz0q','BMfSv2e','zxnZywC','r2HfvKG','lNnRlw0','B2r5','yvrMvwG','WPdcLCknWPdcIa','BNTIywm','yw4+','CMDIysG','oMf1Dg8','vhbOuxe','AwDODdO','zgf0yxm','oJe3ChG','C3bSAxq','u1ziquS','AgvHza','DxnLCI0','EunmsNm','zunOAwW','v2n0wMO','CMf3ugK','vKz0wKG','shzVBvG','Cfj3u2K','CMTqBge','DgHLige','E2zVBNq','v21OyMW','uwnTuvq','tg9VAW','ChvZAa','B3qGD2K','Cxnnrva','lde3nYW','DxqGAge','WPhcI8kjWPtcKG','ChGGC28','thj3uM4','oNbYzs0','zxa9iJa','u3rYAw4','y29UDhi','yM90q28','ChG7Cge','CffLsuC','svngAMm','zwfJAge','su5higy','EvbsDeG','vgPwuNa','zwvKzwq','CgfYzw4','mtjWEc8','BJPJzw4','DM9Pza','BMC6mca','C3rYB24','BM8Gvxa','BJWVyNu','whb4t0e','AgvHCca','yvncyLC','pgnPCMm','C3r5Bgu','mxWY','AxvZoJK','yZK7BwK','z2LUlwW','ignOzwm','z3jVDw4','Dw5Kic4','zsbLDMu','CMvWzwe','D2HPDgu','C2Xpsu8','DgvHBq','Agv4','WONcKCkgWPpcJW','ztOXmxa','tvbXrxq','yxbP','AwX0zxi','quPdzLG','B2r1Bgu','DerHDge','AxrSzsa','z2H0oJG','qMDhBe0','qM90Aca','BKHtugi','C3bSyxK','ktT9','A3H3vNO','q29WEsa','idzWEca','sNjlwLi','DgvK','zxmGAxq','vg90ywW','zJy0','txfVrfy','Bgv4oJe','ig1VDMu','qNvPBgq','WONcKmkhWOBcHW','s3j3Dfy','wgrRBhO','ANjltwy','sMrYCgu','ihbHBMu','Bwf4psi','CMfJDgu','WPpcKSktWPlcIq','sgvHBhq','E2zSzxG','BgW6Aw4','Cg9ZDe0','B3i6i2y','y3rZimk3','BwuUy3i','AgvHBhq','CMvK','l2nHBNy','C2v0sw4','tvz2tuG','DgriELi','igrHDge','x3j1BNq','ugPZB3e','Ec8XlJm','BNq7yM8','pZWVC3a','uKfqueu','igDHBwu','sfrnta','ltiUnsa','pgLUChu','ignHChq','CNvUCYa','AvHsv2K','Fdb8mG','uwXSwfe','DcaOC28','Aw5WDxq','A29wD2q','DMnmvMy','vK9Kz3y','ifnRAwW','iIbZDgu','uNP4y2C','WOZcKmkhWOZcHG','C2fNzq','ALDPr28','t0DMrwi','DNfYDMG','Dxm6nNa','B25Jzsa','icaXlIa','tvD0vuy','rwfWvva','mYWXmdy','l2j1Dhq','nc00lJu','ignVCgK','rfbnrNm','zMLSBa','WOFcH8kjWPlcJq','lt4GDM8','rKftrui','zJzIowq','tg9VAYa','BNqTD2u','CgrHDgu','BM8TBwu','BwvTyMu','rviGvvC','B3bLCNq','oJe7Dhi','BJOWo3a','mJaZmM1yzvfSqG','WPhcK8krWO/cJa','zw5LBxK','BwviCM4','DcbUBYa','WO/cKCkoWO3cHG','idaGmJq','pc9ZCge','yM94lxm','oMnVBhu','BwvZC2e','icaO','ocK7Fq','Dg9YqwW','AhDQs3O','y2fTzxi','u0nvzuq','B0rYDwm','zgfsrhC','zMXLEdO','AgXpsLm','oJi2ChG','y2S7zM8','CNnJCMK','Eefhtg0','C2L6ztO','uMfsshO','rwL0Agu','AwXKlG','wwPsAfe','rxfkwvC','B29YqKW','Exvvrgu','mhGXoa','mhGXqWO','C3LUyW','BMq6i2y','BhvNAw4','Aw1uENi','lc40nsK','lNnRlwi','tu9Ms2S','Dgv4Dem','Awr0Aa','yMTtvxG','kde4ChG','Dg9Nz2W','yK5ur2W','u0fNEeq','s01Mr1K','o3bHzgq','zw5Jzsa','ihvWk2q','osWGDhu','BMC6nha','B2TbC2u','tfPRrgO','vfrNBxC','vgfvz24','ihzPysa','vNbzCfu','nwmWidm','CM93CW','CMvHzhm','zxiTCMe','iNjVDw4','mhG5oa','zxrL','psjZywS','s1bACxy','lgnHBgm','quPSBhu','zxjZ','zsGPlMu','DgG6nNa','t1zPsKi','Ds1YB28','ytK5o20','BK5LDhC','Aw50zxi','B3bLBG','v0nyse4','rMHqvwG','zxjYB3i','WPdcICkpWO7cKW','D1DtseW','rvz0sfq','CKnVBNq','D1rtwMW','nxb4o30','EwvZ','BwfUEq','ywrKCMu','B3n0zMK','mNWZFdu','Ae1izMe','zhbNvuG','z2v0q28','zgvYoJe','ywjZ','rvLywei','sKzIvgu','igLUlwy','CM9SBgi','y3Dgwxi','rhf1qxG','DwXszwu','ldeWnYW','sgzQEeu','CMuGAwC','B3bHy2K','rfv3C2W','zYbPBNq','A0DfDKS','WOBcLCkvWPhcIq','WOFcJSkjWO7cKq','uMvHC28','WOJcKCkvWPlcKG','WOJcKCklWOFcHW','C3fYDa','WO3cK8kvWORcIa','t1nTufK','y3LTCNq','ywSTD28','ywXPz24','owq7y28','ms41ihu','zwjRAxq','nYWUncK','Ad0ImIi','BgfZDeu','vhrkqwS','WPxcICklWO3cIG','ztTTyxi','ywjSzwq','zvndt04','DgHLigW','yNjLywS','ChG7yM8','AfrjuwW','EdTHy2m','kgD1zxm','lxnOywq','r29XswC','pc9ZDhi','vfDTEKG','mtjWEca','ysGYntu','zdP0CMe','ndySmJm','u1H4v3e','qxnZzw0','DNrbyuu','AhvKlwm','oM9Wywm','t3bRzwi','odmWEgL3uxnu','yMvNAw4','CMfWoYi','zhrOoJm','DwTLu2C','AunbBLi','iNn3mI0','s3fdDu8','AM9PBG','zcb3yxm','uhDhsgu','yM9KExS','C05orwW','B3i6iZG','i2jKytK','D3jHCha','pc9WCMu','DNnIsey','Ec1OzwK','vevQAfC','De1bveW','BgrZlIa','BwuOkq','B01ZEwK','v1jiywu','swXotg8','DYaGia','C1rSsvm','teDHBMO','ndC0odm','DvDrBM8','BhDHCNO','DhLWzum','B250lxC','ywjgCvG','CMvHzca','cLSGif0','Bwvhyw0','zwXLy3q','DxjJztO','B3r7ywW','yxjJ','oI40o30','v1zMtfy','zJmY','ywWGB24','CMf3','u2nYzwu','ntuYmJm3m0LQzePPrW','C2STC3C','WOZcICkrWPxcKa','lNnRlwW','zw1Pzxm','nZq4mJK','wLzrs0i','y0TjyLG','mca0ChG','ihrVCc0','DMvK','ksWGC28','DxvMuxO','idi0iJ4','t25ezxm','oJfWEca','Cg9Zqxq','WO/cHSkqWPtcIq','DMuGBwe','BwfYA3m','BMvXyvq','y2fWC3u','rxzUrM4','yxrPB24','WOBcLCklWOBcKq','oMXPBMu','o29Wywm','v19F','A3vYyv0','zgnfD0G','Fdb8mNW','DMfIww8','zvnjEfK','yMXLig4','lxDYyxa','uMfKyxi','zxiIlci','tNnQze8','o3DVCMq','zxjLzca','ChG7Bwe','v3fxvxO','ncK7yM8','yMfY','rKniBg0','DhrVBJ4','zM9Sza','B3j5','EdSIpNy','nYWYmsW','sgvHCa','Ahq6nZa','vfftEKm','ChjLDMu','vvbWr3C','ChP0Bw4','BgLKihi','WOZcKCkiWPxcJa','yxbWBhK','o21PBI0','Eg1lDLq','yxmGzMK','ww5TBe0','zuL0zw0','uLLowM8','A2X1qvq','C3rHBMm','iNrLEhq','CI5KBgW','ig9U','zYaVigO','rMH0ENa','suXUAgq','CNvUDgK','ihnRAxa','Bg9ZzxS','CYbLBMu','CfLpChu','u3bYAw4','sfncBgu','DvvrrKG','sefVyMu','D1fYB1e','AxmGBM8','mdCSmtu','zM92','WPpcHSkhWOZcIG','WPdcImkpWONcIG','AwnOigy','vgHHDca','WPpcK8knWO7cIW','WPdcJmkkWORcKa','ysbtA2K','lwL0zw0','WO3cKCksWPpcIa','wgrgsKK','rgLMzIa','sfvxr0m','B2XSzxi','ign5psi','q29UC28','EwfVBxq','zg93','EdTMB24','DgvYo2y','DhnPzgu','Dde2','WOVcICkjWOJcKW','y29Uy2e','DwvxCMe','A01wz0W','r01vrgy','BM90ihi','phn2zYa','tMLZChe','AgHergm','lwnOzwm','whPvzvm','icaGDhK','nhb4ide','DMLLDYa','B3qUBw4','D2fPDgK','igfYzsa','zhrOoJu','mxb4ihi','sw5KzxG','Aw5ZDge','zZOXmha','CfPxrwO','twTIwwy','EhHxsgu','tMXlv08','DMvYEsa','wxb2zvy','ruT4t3C','BNrZoM4','y0LUChu','Bwf4','v0X4wvu','C3bHy2u','q2HPBgq','yLLYsxm','lxaSnta','WOJcJmkjWO7cLq','AgT4Ag8','WO3cJmkgWPtcJq','r2v0Dgu','sfPPv1i','oMjYzwe','BwLTEve','BwLU','psjJB2W','wuHkALO','mhGYoca','iZDLzta','WPtcJCkhWPtcJq','C3qGysa','B3G9iJa','zYbZDxm','CMq7zM8','swTTtwC','WO7cI8kvWPlcJG','C2fUzsa','nsiGC3q','WPxcKSkgWORcJG','WOBcLmkuWO7cJq','rhHmENK','uMvNAxm','ndzWEdS','t3rACLu','sLnivgq','WPdcKmkpWO3cIG','yxjLBNq','yKPYB2u','phn0CM8','BMC6nNa','B2jMrG','ntuSlJa','Bg9VA3m','lxbHBMu','Aw9U','zwXVywq','CNmGyxi','nsK7yM8','AxmGD2G','y2f1r0W','CML0Dgu','ihnVBgK','Axr5oI4','lNnRlxa','D2fYBMK','zt0IyMe','WONcH8kpWPlcLq','CenVBNq','zfLOy1a','rLviwhm','yxr6B2K','v09kEhC','AwDUlwK','sg1nC0m','uNvUDgK','WPhcH8koWORcJq','uKzzC2u','DMvYE2m','D2vPz2G','lGOk','qNjHy2S','WOJcJSkiWOVcKa','B2jMsq','zxHWB3i','mhb4o2y','wwzvsg8','vK1qDwK','ugXHEwu','yw1LlGO','lKHfqva','B2XZoJO','lY0WlJu','WPxcISkrWPxcKG','BJOG','zM9YBq','uKTrsKm','Fdv8mhW','CZOXmha','icSG','DxjLzey','s05lDMO','ALLIt3O','EfDYwhC','Cgfdr3e','ihn0EwW','vgv4Da','ihDYAxq','CM91BMq','q0fqAwe','ywrPzw4','ntuSmJu','AwLmuxC','mduPlda','mZT9','qKP1zKO','C2vYlxm','WPtcJCkhWOFcIG','y29TBwu','wNHMs0i','whHNrg8','lwLUzgu','i3nHA3u','yw55ihC','WOFcLmkrWPxcJW','zhvYAw4','rviGD2K','BxbKCKe','ldiZocW','oInMnMu','iJ5dB3a','ntuSlJi','igLKpsi','Dc4kcLq','sgvPz2G','AwPYsgy','yxGTAgu','EefSyNa','Bxf3EMO','ic8GrJy','z2XVyMe','B2TLoMm','zvn0EwW','qwXfrue','t0SGt1y','WOVcKCksWO7cHW','CgrvuuK','z3jHyMi','ysGYndy','A3mGD3i','mIaXmK0','iJ5ZywS','v0nzEMi','idqTnc4','B3b7zgK','DcbZCgu','zxCGy2e','zMXVDZO','CgfJAxq','qxnvwxy','igj1Dca','AwWYq3a','AgvHCei','y2XPCgi','z2H0oJm','igHLyxa','FdD8nG','Dw5PDhK','z1b4uvm','CI1Yywq','r0HWseC','r1rps0G','vKjsqMO','nxW0Fda','DeHLywW','BIbuyw0','4OcuigzYyq','WPlcKCkoWPxcKG','uMvZzxq','AwDksNK','v3jHCha','qMnlBhy','zxG6mJe','C25HChm','tLLbzxq','ywzlBg8','pc9ZBwe','yxvjsMe','AcbMAwu','WO7cHSknWOBcIq','C2STBwq','CMf3wwe','BhHwD3a','CMvMzxi','Aw5Ly2e','yM9VBa','B24GDgG','txDqDfi','AMrWrNC','WO/cI8koWO3cJW','C29SAwq','BgvJDdO','DMvYBg8','AY13B3i','yK1isLu','ENfcvwm','yxmSBw8','kdiYChG','EfbWq1G','AwrLE2q','CunZqKi','ktTIB3G','Bez1BMm','zgL1CZO','Egz5ugm','qxDXExK','D1vAr2C','vwnOz0G','zwfKE2q','ugDeB0m','DtmY','AwvSzca','khrOAxm','Ag9VA0y','oInMn2u','wvDJs3O','igfUzca','mtaIihi','o2fSAwC','nNWZ','wvrkExm','tw91C2u','CKXPC3q','BMqGEwe','zxi7D2K','BIbPzNi','psjYB3u','CNj0zM8','WOBcH8ktWOJcJW','A1DQtLy','zMy3ytK','zgvYlxi','m3WYFda','iMzVBgq','WPxcLmklWPpcIG','Aw5PDgu','CfvztKy','wevIsu8','s2vTCMO','Dxm6mti','WPpcICkoWOBcKW','u2nPDM8','se5LvM8','BhqGC2K','y21K','ig9Uihq','qu5Jzei','DhLWzq','y2uSq28','BMfIBgu','CgvZia','DgHLBG','z2fTzsa','r3vKqvC','C28GAxq','WOZcJCkvWONcIG','WOVcKCknWORcIW','yxa9iNi','zMXLEc0','v1Lgq0S','WO7cJmkqWORcJa','svHmuwy','yM90CW','pgrPDIa','mJrWEa','BwLLCYa','r3jJshG','q0jvA3O','BMnLCW','zMfTB3O','uLnXCge','ihnPz24','u0nxB2S','B2DVE2q','DgG6mJG','Efjos2W','yxrnCW','yhbSyxK','zxrOAw4','vvLfy3e','zxrmzwy','DgLHBh0','tM8GugG','AK1nB0S','Dg9ju08','oMjSDxi','zMfABuy','B2SGzMK','zJWVyNu','A2vLCa','BhrWsui','twf3q2S','A3mGD2G','wLbtD3K','WOJcJ8kuWPxcIG','lJv6iIa','DMLizeq','Dxm6nta','zgjPsMe','Cgv0ywW','DgL0Bgu','WOZcKCkmWORcJW','oJK5oxa','wKX0yvq','BM9Uzq','ihvPlw0','zw5LBwK','rfzcEwS','AxnWBge','mJrAve1Jvxi','zg93BG','WPdcK8krWPhcIW','WOBcI8krWOFcIG','EI51C2u','C2v0sxq','D257B3a','DdOXmha','tMrWz3e','cIHJBgu','WPxcKmktWPpcIG','zwqGB2y','yw5ZAxq','yxbWzw4','ue5RyNK','zMLYC3q','rMvju2C','Ag90CYa','vu9IDKy','Dg9WoI0','z2v0sw4','wxnRr3e','wePIy0u','t21OA1y','Bw92zq','WO3cLCkiWPlcJa','imk3ia','lJi4','AfzbD28','WOBcHSkmWPtcIW','D1PSAxa','lwXLzNq','tgLNy1O','D3jHCdS','B250zw4','yxvSDa','y3LwuLK','oJeYmha','psiXlJu','suLWufq','yM90Dg8','lNnRlxi','ywX1zt0','EKHQwvC','WORcKSklWO3cKq','zw1LBNq','WPhcImkvWOJcIa','BMfWC2G','ChGGmZa','zMLLBgq','oIiIo3a','AxjLuhi','EfrlwvO','yxK6zMW','sxHLug4','twPptLO','mxb4o2m','z2v0rMW','AgPRt3O','ifrOzsa','BgfZDem','AgfIBgu','D2DfwNO','mtq5otKXshHkAhjo','lJC1ktS','vgHPCYa','D3jHCdO','lwjVDhq','rvnqigi','WOJcH8ktWOZcLa','oYi+tM8','ys9vv00','D2H5','B3bLBIa','o2jHy2S','lNnRlwG','ihbHDgm','ztPUB24','zwjTDvy','WPlcImklWPxcIq','oMLUC2u','oJeGmsa','mdTMB24','w2rHDge','DdPUB24','AxnmB2m','Dgv4Dee','ALjNAgi','CNvsDwi','DxjHvge','C2zVCM0','D2fSA2K','ihrOAxm','D2fYBG','oJrWEdS','zsbOB28','zwqGlYa','DxjHpc8','yMvSB3C','iNnUyxa','z2LUigC','EdTHBgK','WPpcJmkrWPhcKW','tLbdx0m','CMfKAxu','DxrVo2y','ALryreO','WOFcH8kmWOBcHG','kdi1nsW','twzcA00','Dg9WoJe','EvrHCa','CMuGy2W','DgLVBIK','yxjN','BNnPC3q','BgqGB2y','zNvrDxC','B2XZE2y','iM5VBMu','whnprKm','CgfUzwW','mtrWEdS','C2v0ida','nJiWChG','sLjWr08','tNnfv3i','WPlcJmkiWOFcIa','idb4mJG','BLvWALm','zsbWCMu','uK1jCeG','Dg87iJ4','mtGGnIa','iefdveK','sMfmBwO','zgLMzG','DMv2seq','CcbHBMq','wKzJwg4','qu5pveG','zhKIihm','qxf4vuu','t2zMC2u','B25PBNa','CgXHEwu','DZOWidi','Dg87zMK','rhzUq2u','Aw5KzxG','BIaUC2S','EtOUndu','zxG7zMW','Ahq6mJq','lM1Ulwm','y2fTia','B25NlG','v05JBu8','lxyYE2e','BNrLBNq','WOVcKCknWOBcKW','CNmkEwe','AgLSza','CMrLCJO','zMLSBfq','BMqGBM8','lYbZChi','CM9VDa','BNnLDca','BMDZ','zwn0Aw8','ig9IAMu','WONcJSkvWPxcHW','vgvAzu4','AK9Nq2G','EIdIGjqG','seXTD3C','t29yEgi','Axr1s24','CMv7zM8','A3zrvfi','CMfUz2u','qvPhzhC','Ag9VA3m','CJTNyxa','zNbZ','ChGGmdS','tNfyBey','AhvArxy','icaYlIa','r3jizfm','zw50lwm','t3zuyvi','qu5eihq','yJLKo2i','lJq1ktS','B24GAwq','BwfW','C291CMm','sffqsLy','Fdf8ma','y29MB3i','WO7cLmktWPtcJq','WONcK8kuWO7cJa','CYXTB24','zM92u2e','DMvKigm','ig91Dca','C3vYDMu','vvDnsYa','zxmGB2y','C2XPy2u','WPpcKCkjWOJcJq','mIWUocK','ug9ZAxq','u1rZy08','AML3yKq','vgPUreu','sxbeBxC','z0vWwgq','B2LUDgu','ic0+ia','igSWpq','DxjH','lxnWywm','zw5NDgG','qxrgAxi','yxbWBgK','CJOWo2i','AKzxt0W','ihjLywm','wKjNrLq','ANj4Cge','zxj7y28','ksbZyxq','qwn0Aw8','BgPgu2y','BK9mChu','z0TUEgG','BgfIzwW','y3Hmrg0','zxzLBNq','zxi7Dxm','Bwf4lwG','BNvTyMu','sYbZy3i','yMeOmJq','AwqGCMC','otbWEdS','BNq6mte','CMv0Dxi','rMXHzW','WOZcJ8kgWPxcLa','BI13Awq','ieaG','ueD4zge','tKvtEwm','i3n3mI0','EM9wELe','CgHVDg8','oMzSzxG','vMfSDwu','B3vUzdO','re9ktNO','y2f0','zJfIo2i','q3ztDuK','sunRr08','AxHLzdS','CMvMCW','EKXfDvq','DgXLCW','rLbty28','y29SB3i','nhb4idK','zwvct3O','WPdcKCkjWOBcKq','WPlcI8kmWOJcIq','A2vtsNe','WOFcKSkiWOJcJa','yMTPDc0','AdO2mNa','yMz6C0q','B24+','sefiA2y','yxv0BW','y2SIpJW','oJeXChG','vKHKsNq','icbJyw0','WORcJmkvWPpcJq','zw4Gyw4','CgfYyw0','txbYs2K','WO/cKSknWO3cIq','v2LKDgG','Bs11AsW','AwqGzg8','ywqGzMe','AwnOlJW','B3vUDa','ANPHDgK','r29wuNy','ywn0Axy','lde0mYW','WOJcKCkvWORcHW','uKXpvMm','qNvwBfC','rvnqoIa','Aw1Lsxm','z2vYlIa','ywLUAw4','B3rO','vhzjCKu','AwvKige','mtjWEdS','Aw1HCcW','yw5ZzM8','s3P0BNy','BNrPBca','CMeTzxm','WOFcJCkkWORcIq','nhb4o3q','WO7cKmkhWOFcKG','wgnrCMO','DMGGlsa','WPdcKCkkWO/cJa','AwvK','qwLSC04','yw5LBca','igzHA2u','Aw5Uzxi','DMD7D2K','mdaWo3u','s2jiqvu','CMLNAhq','A25oBNC','ywDHAw4','A2LUza','DgG6mdS','yM9Yzgu','A2v5q28','CMDPBI0','CgfzywC','ksbVCIa','AMrSAhG','ywLSzwq','s2Leq3i','AxrSzxm','C0LXAfG','BgXxyxi','CMvZB2W','BM8GD2e','zvbSDwC','z09HsuC','z2v0sxq','oNrYyw4','s1vsqs0','C28GC3q','wKzADwW','nYWUmZu','y3jLyxq','yw5ZCge','C25HCa','A2L0lwe','BNrxAw4','y1LgCM8','igL0ige','Dw1WAw4','zxG6BM8','Ds1JC3m','CYbHy3i','vfbWuvu','mtqZlde','icbTzw0','B2f0mZi','zxmGBM8','BxjZDhq','WOZcK8krWORcIq','igfNCMu','D0XwsNG','WOJcKmkvWONcJq','EcbZB2W','WORcI8knWPtcJG','C2fUzq','zYbTyxi','A3vUD1q','CJPWB2K','zwq6ia','zMLSBfm','DffKtui','sgP2rvC','CM9WywC','WOBcISkpWO/cIq','idaGyxu','uhHJsMq','Cvf6D00','zcbPCYa','Bg9Hzhm','Chr1CMu','B3zLCMy','zw50rwW','BgLJyxq','AMnSCNq','zenOAwW','WPpcLCkvWPpcIG','yNv0Dg8','lxDLyMS','C3PHAee','yMfYzsa','EY13zwi','EgvZlIa','DhPiD1u','seLZAe4','CMeTCgu','lde1nYW','uuPKtgO','zxqUia','khmPigq','C3mP','DgfYz2u','qNjLywS','tM5XDee','t1L4z2m','sg9VA3m','CdO0ChG','zvn0CMu','Bw4TCge','v3jrse4','DNDZwgO','BwvHBG','yNHVs1i','EcbYz2i','WPtcKSkgWPlcKG','zxrZigm','twrzDeq','u2HHCNa','B24Gzge','oc00lJu','nJC5otK1ofnpufnzwa','y2vJywS','WONcLmkmWOVcIq','zxnWyxC','DhLSzt0','z2H0oJy','BwLUv2K','DxjHlwu','CMfTzs4','AxjZDca','zhmGWRCG','lGOkswy','DxjHDgu','ys1ZDW','lxDLAwC','BMTLEsa','ifbpuLq','oIm4zdC','WOZcICklWPlcKW','Cg9PBNq','WOBcJmkkWOFcIq','Dxm6mta','BwfYz2K','uejjtxK','DgHLig8','pJWVzgK','otLWEdS','igzVCIa','u0DzyLC','Dw5KoNi','mdT9','DgeTyt0','yxDqCKW','WONcJSkgWPxcJa','EvjVD3m','u3vUELG','nNW0Fdm','ihbHC3q','B2jQzwm','C3bHBG','oJe7BwK','y2jPCNm','Dw1UCZO','zKn0D2y','lc4WmJu','zMHRz3m','svzctMi','DxveAxO','CJOJzJC','B3nLCY4','WOZcI8kpWO3cIa','DMvKia','zhDZs1i','zMfPBgu','svbdsva','Ahrss2e','C2XIEvC','EsbMywK','AhjLzG','AhfjzeC','B246y28','WO7cK8kpWO3cIa','DgHLigC','DgG9iJe','ChG7Fq','psjWywq','WONcImktWOVcIW','BwvUDs0','CvztrvK','WOBcJ8kvWOBcHW','ywrPDxm','ywXSoMK','A3mUBgu','WPtcISksWOFcKG','oMnLBNq','rMf6CeC','zgvUDgK','wwXVshO','BM8Gz3i','wunuDe8','CgX1z2K','BNrezwy','BMvJyxa','lM1Ulw0','WOVcJmkhWO3cLq','zgTPDc4','WONcJmkvWOJcIG','u1rVs0e','u2vSzwm','u3nbrvm','zgf0yq','BM93','yKzKqLK','ywrKrxy','DxnLtg8','zLfHq3y','idqGnc4','WOJcKmkvWO7cLa','B2XVCJO','vvjcCw0','CNq7ywW','BNuTCM8','yMfZzq','DMC+','yxrHihi','C21uExa','r2foyMO','WO7cICktWPxcLa','Dxm6oha','BMfNzxi','D2fZBvq','C2v0uhi','zNbTy2u','vxbKyxq','shP3C3y','yxrHBJi','Esbku08','BgX3yxi','CMvWB3i','qNv4BNO','t2zqy2G','C2nYAxa','yxjLig4','CgXPzxm','BNrLEhq','nZCSlJu','B2fYza','psiXmIi','AgL0zs0','rxrRBxC','igL0ihm','zcb0Agu','AwvYkc4','CY5Tzw0','ztPWCMu','tM1gsLG','zxi7zMW','Dte2','DgPrAKm','WO7cKSkrWOJcKG','mhb4oYi','nYWUnsK','D0jeqKS','zKHdyKe','B3n0Awm','Cg9Z','u0zrzhm','rK1vDe4','BNnWyxi','BgvYigG','C29Syxm','Ag92zxi','iZjHmgy','zw50tgK','zYdcTYa','tMfTzq','y29SCW','WORcICkoWO3cJq','DhjVA2u','icaGDMe','AgLZiha','zMXVyxq','BwuGBM8','igvHy2G','icHZB3u','AgLKzgu','khmPihq','BJ8PoIa','WORcJSksWPxcIW','yLrduKy','zwqU','wKHoDe8','x19ZywS','CMvUDca','WPxcJSkpWOVcJq','mhGXyYa','BgvHCG','Dc5wywW','AtmY','tLD3B0S','zxrVBG','uMvJDa','AhfiuK4','r2fTzq','zxqSig8','pc9IpG','t2fvr0u','DNmGC24','WOBcISkoWOVcIa','D3jPDgu','DgfSBgK','yxrLigy','reTXzLy','WOZcImkkWONcKG','BMnLC1i','i2zMnMi','B2TLpsi','swTkqMW','zxGTzgK','Dxm6n3a','zciGC3q','yYGXmda','BMuUifq','CNmG','yxr0zw0','Cc1JDG','Dg1ZzuS','y2u7','qvbvoca','AwzYyw0','q0vZuNi','qLfZqNa','CMfTzsa','yxiTDgG','CM9Wlwy','zcWGBM8','B25Lige','Cuvfyui','y3qGzM8','BI1PDgu','o2n1CNm','WPpcH8kpWO/cKW','tKjlANi','Cg9YDge','Ahq6nJu','x2DHBwu','igDSB2i','n3b4o3a','AunfBMG','C0HlzLm','AxDoAgm','tK9xEfm','vwfhC2u','CxvLCNK','EtPUB24','ywrKAw4','vuXuzfa','WOVcHSkuWPtcKq','Cxv0rxi','u25HChm','DhLxzwi','zwrnCW','CMvWBge','WOJcI8kpWORcJG','WPpcI8kmWPtcLq','mIWYosW','BYb3zsa','u3rYrK4','wufVB04','WORcISkqWOJcJa','yw1PBhK','qwznvfu','BNq4','zZO0ChG','AwTtsM4','z2v0q2W','yxG9iJu','zwqGDgG','kduWmha','oYi+ltW','C2XPzgu','y2XVC2u','zgLZCgW','DgfYDdS','D290AMe','C3zNE3C','tw9KA2K','DfDPzhq','mNmSyMe','WPlcJmkjWORcKW','DYGWida','vgHLigy','AMfcCem','zZO2ChG','A2DYB3u','BMCUcG','i2zMzdq','lxjLCgu','ihvUyxy','Acbxzwi','WO7cI8ktWPhcJG','ChrY','BI1ZCge','mJbWEcK','A2v5CW','AgL0CW','zEkaPJWVCW','y0PdD3m','DMvKpq','o2jVCMq','Bg9JywW','y3vYC28','BgLZDa','ys1ZA2K','WPpcLmkhWOVcHG','mZGSmJq','t0DgCeS','CfnZyuK','EdTOzwK','sgvHCca','ChG7iJ4','BLvgExC','wenyuhC','zhnluKu','zgnzs2u','WPxcJSkvWOFcHG','Ag9ZDa','mhb4idu','ihnVigu','C2L6zq','zxrtz0C','Bw1OqKe','ENf1CNu','mNb4o3O','CMvZCYa','BgLUzvC','ys1LC3a','ChqRmhG','DMfSDwu','DuLuD2m','DgHLiha','lc45kq','ztT0CMe','q29mvfm','zefNvMi','B3nPDgK','yunhve4','C2fRDxi','Dg57ywW','keLUC2u','yLzHD1q','zwy1o2i','yxjKlM8','zMLYzsa','z2LMEq','Eu9LsNi','vNnWD0i','AgfZtw8','CY1VCMK','y2fWDhu','lYbQDw0','mNb4icm','tgnZExi','DM5uwMm','Aw5Ozxi','A2v5','tNPoB04','ihbHC3m','DeHLAwC','zNvUy3q','tvnrvfG','ywiUywm','zxnW','u3zSAxO','A2L0lxu','BM8Gseu','WOFcLCkpWO3cJG','Ate2','CxDozgy','EdTWywq','yLDJrwC','zvbYB3a','icdcTYaG','Ewf3r2u','zLH5uhy','qwTOuNK','zwyYo2y','Cev0svG','yMv5uK4','C3vI','zsbYzxa','DcbTyxq','BMq6Dhi','mIWUnsK','D2f0y2G','BNnPDgK','WPdcK8kqWO/cIa','yMfutxC','sKLtuuq','B25LoW','Esb0Exa','v21cz2K','q0HnCLa','D2LKDgG','ie9o','vKvsu0K','lIbeAxm','B3vYy2u','zxHNyxq','DgHPBMC','y3nZvgu','yt0IC3q','nNb4o2G','zfryz0q','B20GDgG','zw1VCNK','D05Ksw8','zhfstKK','WOBcJ8kjWPxcKa','Bw91C2u','Bcb1Cgq','EuLhrvK','icaGica','ktSGBM8','oNjNyMe','CM53Aue','Dxr0B24','ldi5lc4','AevPtee','AgvHCfu','yNv5zhK','DdOXnha','zdTYAwC','lwvZCc0','ywnLlem','rLnxwfq','zwLNAhq','yKr4uuu','mtq1nJuYmgL5t0XfBG','zxnJ','B3jKzxi','u2LXrMK','C2STy3q','mZy2mJH4y0fPvLm','A0HosNa','AguGD3i','tefzrvi','sNvTCca','z2fWoJG','WOZcICkoWOBcHG','ChG7yMe','y29UDgu','AwrLCG','lxDPzhq','CMnLoIa','Bg9Zzsa','zgf0zsa','u3DpwwC','zYbZy3i','E29Wywm','sgr0Cei','BNvSzM0','B3i6Cg8','Ag9Ksw4','u0rrzNm','igHHy2S','rxfTvM8','lwv2zw4','BuzjwKq','WONcJCkpWOFcKq','zsbUB3q','B3rVBK4','uwrIA1K','mZLKwfL4Eum','wwzWu2K','BgvMDdO','AwrbqNy','Dhm6yxu','ChrfseK','B21Tyw4','zgf0zsG','BNrLCI0','mNb4o20','zw5K','zxzLCNK','wwPKq0y','ugnssgq','mhb4ic0','B1LXsw0','DgfN','mtaSmte','ywT1CMe','vhr1Chu','ywWGBM8','B25Tzxm','B3rYB2W','DNDisgS','zxHPC3q','Dgz0DvO','CMvTB3y','zxG7z2e','CMvUDdS','mcaXChG','Ag9VAW','DuP4ELu','nZCSlJq','BfvRs00','qM95EMC','DvfMvM0','iMvZCci','DZiTyM8','zwn0zwq','AuXZtva','DNfmwxe','x19hzw4','rgDSAeq','zsb3ywW','lwnVChK','zgTPDa','AxrPB24','WORcISklWO/cKG','BJPJB2W','zLHLC1y','zMLSDgu','BdPPBMK','ChG7Agu','uLmG','WOZcHSkpWPhcJW','uvDsrMe','zgL2','ENPvuNe','D05QA1O','BwjjtfO','CvrtAeq','rM5mAeG','yMLUzgK','rgLHz24','DxrVo3O','m3b4o2y','WPxcImktWOFcIq','DhK6lJq','yMXVy2S','zMfSDM0','CM06BM8','B1jVugO','zgvIDwC','Dw5KoNq','DhbHC3m','B25ZB2W','DxjYzw4','zKD1s2i','zYbMywK','owq7Fq','ndmSmtC','reLoBwS','DgG6mJK','igLZig4','A3TOzwK','u0jLu1i','Aw1L','BvbnrwK','uhbLv1q','mdT0B3a','kdiXlde','D29YBgq','tNHsrNy','yxqG','r01oBMW','zMfRzq','icHNDwu','C2STDMe','CMvNAxm','WOZcJ8kmWORcKq','mhHKma','msiGDMe','BMfSrNu','mhGXma','zxi6mdS','BMfTzq','WPtcICktWOJcKW','y2XPzw4','zsbYzw0','ltiUns0','y0nSwxa','t09TC3K','EhL6','mcu7','zcdcTYa','EwXLpsi','CM9Rzs0','lM1Ulxm','CMeTBwu','EePqzwq','CKnVDw4','ktTJB2W','CgL0y2G','ugHVDg8','D2fOzg8','ldi0mIW','B3CTEtO','yNziyxO','DJiTDge','AdOZmNa','CZ0NC2S','mcaWige','ihjLCg8','AgLSzsa','ywi6Ag8','vvrYzLG','Cun5B0m','DgvYzwq','AM5qz3C','mJq2ldi','imk3igzV','z2v0','nJaIigG','B2f0nJq','igq9iK0','zxLL','AgvPz2G','B25Z','ig9MzG','CeTyuKq','re9nq28','BhvLpsi','Cg9ZAxq','q3fTv1q','AxP6y3a','y2uSihm','EMDiCey','tg9Hzgu','DxjPBMC','yxbWzwe','Dg9Y','yM9KEq','mNb4o3a','B25Nig8','C2LUz2W','uu1VvgK','Bw9YEvq','DNb6y08','z2v0rwW','ig9Mia','nsWUmdu','CwTsvwy','idmWChG','C3LZDgu','Bw4TAa','y3rPB24','B3qGica','lJa0ktS','B1zzDxm','zxH0','B3CGkey','De5sugu','wuDRzM8','CI5QCYa','oJOTD2u','WPtcHSkkWO/cJG','wYbHBMq','AxzLo3C','twf0Dgi','Dw5PDa','DMLLD0i','nxb4o2G','D2zhuNG','mcbVzIa','AgfKB3C','icbMywm','DcGJzMy','y29WAwu','lJm2lde','DgX7zgK','WORcH8ksWPxcHG','AdOWo30','ls1W','tg1Uwgi','zMLSBd0','o3DPzhq','y3jWEKC','AffNvMK','Eg5Vve4','BguGy3G','z1PQsvy','iNnWiIa','C28GDgG','sKXqsg0','BenZAgi','mJu1ldi','DdmY','B206mxa','DwnJswm','sLHVtwC','tg9VA0a','zxi7zM8','DhLWueW','DgvZia','yM94zxm','mhG1oa','mNb4o2i','WO7cK8ktWOVcIG','WPtcK8kiWOJcKW','te9h','B25NE2m','Bgu9iMm','BwuUx2C','yZKIpNC','wez4DKe','qKDJAMC','Bxjjq3K','yxvNDNK','ztSTD2u','zgLUzZO','zwrxExu','Aw50','quTlyKu','D2fZBva','kZb4','mtu3lc4','CI10Ahu','WO3cLCkpWONcKq','D3b1rLK','t0LmthC','igzPzwW','Cuf4r28','4Ocuihr3BW','igj5igu','rw1pz0i','u2vNB2u','l3nWyw4','WPxcISkmWO/cLa','v2fSAYa','iZrMogy','rfrvBuO','y3r0AuO','wuz5AK8','rw5LBwK','ig9Mihy','yxiTz3i','ndGZnJq','igXPDMu','WRaSig91','EIaTihC','DuXTvg0','AwnLihC','BMnLv3i','AwrKzw4','qxreEMu','ChG7y3u','nYWUmty','lxjHzgK','iMrPC3a','D3DiCwu','WPtcKmkuWOZcLa','ic8G','z3zxweq','t1jOsMq','tg5rtKO','mJu1lc4','yxjHBxm','CfnvCuK','tur5txO','oMLUAgu','u2LZvgW','BgXQugi','tLzhqvi','C28GAg8','lJCYktS','iIbZDhK','sLnptIa','Cc1SzW','mtfWEdS','z2jHkdi','ihLLDca','DcbYzxa','uMvSB2e','sw5ZDge','WOVcKCkrWONcKq','tg9VAYS','AwqTDgu','ks4G','Awq9iNm','Ewv0ic0','oJPHzNq','WPlcKCkuWO3cKW','mxb4idy','lL9Nyw0','oYi+u24','t0j6s3O','AguGC2K','tKvdC0S','C2v0ica','zhrOoJi','WO3cLCktWPtcIW','WORcK8kqWOBcJa','yMvHCMK','Ee9Ar3m','zMfSC2u','CM5PBMC','zM8Qksa','DMvJmG','WPhcLCkhWOJcKq','DfD2D3a','B25JBgK','nNWYFdK','EIaOsw4','Bgv4oJa','nhWYFde','Aw5ZDgu','DxPMAMu','tg1rruy','EtPMBgu','sevbufu','Bg9YoNi','kdaSmcW','CKDeBfG','A2v5vxm','yMX5lMK','BvDtrg8','CMvKia','CNjVCG','z3L0Bum','t1LpuvG','CLDzs2G','nxb4o2i','WONcLCksWPdcHG','iIb3Awq','ANjwBeC','yw5NzxS','r2zxAeW','A1n5BMm','vKzNExi','DgL2zxS','lwe9iG','z25HDhu','wvziD20','icaHia','yLPusw0','B2SGEwu','B3vWig8','vvjbx1m','ktTWB2K','yvPOrM8','WOJcJmkhWO7cHW','suP5Aw0','rJKU','ysbNyw0','y2vUDgu','WOZcJSkvWOJcJG','v29YBgq','icaGy28','zsb1C2u','igLZihi','mcuGBM8','BgLUzvq','C3mGmhG','zgvZy3S','DM12A2e','veTVCgu','q0TKuLi','Dgf0Dxm','zNjVDw4','i2zMnMu','vhv0DLG','BMDzqum','D2fZBvi','WPtcI8kgWORcJG','lM1UlwW','iIbMAwW','zuH5AKK','BM9UztS','C29SDMu','v1jdu3G','B1LtANm','C3bYAw4','lMn0B3i','BLbNvM0','CdO4ChG','rJKPpc8','B2X2D20','CM9ZCY0','oInIzge','Dg9tDhi','yxjTAw4','CJOXChG','ldi1nsW','mI45lJe','B25NpG','lNnRlxm','WOBcI8koWO/cHG','WPpcImktWOJcLq','tvPbCxG','o2zVBNq','CgvYBw8','wKfWy0i','D3LIu3m','qxbWBgK','uMXcsxK','CMfWoNC','phnWyw4','WPtcKmkjWOZcJG','tg1utey','BYbHihq','BwTYs0e','AKLMtgu','Aw5KB3C','yxqSCMC','C2PAAeS','ktTIB3i','mcbYz2i','DgLHDgu','yxjKlxi','A2v5u28','BNq6Aw4','vu5Rs3G','ohb4ksK','nZH2AdS','BwuUCMu','mtbWEdS','tND2Chi','BNrPBwu','B2XPzca','yxjKlxq','Aw50E2q','zdPYz2i','ugfZDgu','ywXSvMu','BgvYkZa','Ag9VA1a','DgfSE3a','BIG1mNy','Axbvq3m','ocWYndi','B2zMihq','Dg9gAxG','WONcLmkoWPpcJW','B2Ddsvi','Bgu9iM0','ruPAC0q','nsWXmdC','u1nkuMS','vgfTCgu','BgLNBG','BMvS','qKfRCKu','Bg9YoIm','s1fHv00','B25Ligi','vKfm','u3HwwK8','ywLSywi','AKTqzwq','wNbqExi','zMvkyvy','BgvY','C2v0tge','quWGqum','oJa7EI0','mJu1lde','DMfYkc0','CgLUzYa','CMv0','s0jeC0W','Fdr8m3W','phnTywW','o2jVEc0','zNrkqxK','AvfXvMO','rg9ID2C','Bg93oMG','vhncDhO','WPdcH8kgWOJcJG','4Psa4Psaia','tMv0D28','ihnOB3C','CgfYC2u','zNzHB20','B3CU','CxnMt0q','BMDL','WPlcI8ktWOVcKG','rw5HyMW','mtbgCeLAvM4','xtO6ywy','tJWVyNu','zwqGlsa','v2vItw8','mJeSmti','wgrJC0u','WONcHSkuWPlcKG','BNLjAwC','AfnJCMK','wg9nD00','Bd0Ii2y','yNvMzMu','C3qY','CMqTDgK','kde1mcu','zxbSywm','r3nwC3m','lwe9iMy','yNzyCw4','mxb4ihm','Bg9HDhm','CMuG','D3ndt0C','t0Huvem','oJHWEdS','A2LuBwq','oJiXndC','i2zMyJm','i2y3zwu','iIbZDhi','C3rHCNq','tvfXDuK','zdTTyxi','zeXSzee','zsGP','C3LUy3m','uhDqDuO','WPpcI8kmWO7cIq','C2LU','BLDxBvy','s3zKyKC','DdOXmxa','Bw92zvq','mxWYFdG','zhvSzq','wK5UDvO','AxrJAa','Bg9NBY0','mJbWEca','y2XLyxi','yuzYB20','lNjLC28','nxWXFdy','otK7y3u','uhHItxG','WPpcJ8kvWOFcJG','Ewf3','lJuGms4','zwvKig8','CgfKrw4','D2LUzg8','lc4WnsK','WOBcICkgWOVcIW','uNPgC2S','BNqXnG','Bg9dAge','DgvYE2W','Ewv0lG','BfDHCNO','Bg93oMe','kgXVyMi','C3rYB2S','ywLUE2y','ody3m2P3tgXwCG','wNzcwLm','mJzWEdS','r2vev3G','qNLjza','DfvSBMu','B3rLlMu','B2z3yLC','psjZDZi','ys5ZA2K','igfYBwK','y2TNCM8','sKvVrvC','WOBcKmkgWOZcKa','yMfJA2C','BhvLica','zMXLEa','rMLLBgq','y29WEq','mhGXmum','Au1mt3G','DdPTAw4','B3jPz2K','yw5Jzsa','mda7y28','WO7cKSkqWOJcKq','DdPZDge','vMvhvK8','BNrLCJS','zxi6mxa','m3W5FdG','zIb0Agu','nYK7y3u','Fdr8nNW','ysbZDge','CYGXlJe','B2zMC2u','WO/cLCkjWO7cIW','zvL2y1K','sKfeshC','vxL2DwS','CeP5Dxi','WO/cJCkgWONcJq','u2fRDxi','Dw1Uo2C','C0z1wgm','BwvUDc0','tgzmrLC','BNqZmG','Dc1ZAxO','txzQtg4','iIbTAw4','iI8+pc8','s255uw4','z2nxseu','yMuGCMu','u2rYAxm','DMvYC2K','AhbRwMW','Ec8XlJq','whfnrva','igXPA2u','B3nWywm','s2nSBhu','ihbYB3y','AvPhs2i','BKDur0u','A2uTBgK','yxjNAw4','B3DUkq','BNrPyxq','mhHIna','Aw4U','iey3ica','ywn0B3i','zhmGB24','lJKPo2i','ywnLlwK','mhW1Fdq','mduPo30','wvrUEMy','A3mG','Aw5N','CxnPyLK','ufDhuLa','y1nhzhq','y2HLy2S','DY5vBMK','y2XHC3m','yujQwKq','zsbVyMO','WOVcKSklWO/cLq','Afrnq0G','DcbPDca','zwXHChm','CM1dEuq','WPxcImkiWONcLa','ywnPDhK','DxqGEw8','CI1LDMu','txvSDgK','BMnL','rNDiv3G','tejNChG','Dg46Ag8','v1rwBNi','ExPOuMS','y2GGDgG','ChGPo20','WPxcImkqWPlcKa','ruHZrNm','ihjNyMe','phbHDgG','o2zSzxG','ugriCKK','EcXJywW','DhjPyNu','WORcJmkgWPxcHW','C3bLzwq','ndy7y3u','BMu7Fq','ztT3Awq','C3LJyw8','Axy+','yxbZAg8','yNL0zu8','lJe4ktS','WOBcJmkoWPtcKa','C2STCMe','DgGY','WO7cKCksWOFcIq','Dgf0rum','oJeYChG','EtPIBg8','ig1HBMe','z2fTzvm','A2LUzYa','lhrYyw4','y2fSlMq','CYb1BMK','oJaGmca','wM1gA0i','EMu6mte','WOZcKmkjWOBcKG','n2vLzJu','AgvYAxq','DMLLDZO','AvrYuxy','CMvSyxq','A2v5qxq','lsbvBMK','zcbYz2i','su9oz0i','DwKTBw8','CKHwtxy','wKTVs2S','WOBcISkvWPtcJG','WO7cLmklWPdcJG','BMDPDg0','Eufbwu4','AgvSBg8','BI5FCNu','rNv4C1K','mhGYoa','Bw4Ty2W','CI1YDw4','AwzPzwq','B2jM','BhrLCJO','Aw5cyw4','igHVB2S','qM94zxm','WOZcKSksWPpcIG','zvPLEw4','DunXtw8','igfYBwu','BgfZDa','DgfNtwe','owqPida','idaGmxa','A2vlugO','DeDtrNm','WO/cImkpWONcIq','CMvSyxK','vwXqzwq','CMnTv1G','EcaXmNa','q01c','r2fTzsG','iJ54pc8','lM1Ulxq','icaZlIa','shjwzeW','zMzZzxq','ihbVC3q','q29TCgW','z0TsDui','B3jRu3K','sKzzzfu','WONcImkrWPdcIG','mNz3ldy','rw5LBxK','D0DNvNa','Dg91y2G','DgvZDa','idHWEdS','Aw9UoMy','BLj1BNq','BMrVDY4','nIWUotu','CMvMAxG','BgrPBMC','igP1Bxa','BgvUz3q','BcWk','EwzYu24','DMvYE2y','u2vLBK0','r1f1zuW','Ec1ZAge','DMvYzMW','y29Z','CIb0Agu','zgfY','tMjAufK','WOVcICksWONcIW','BMnLigy','yufABfa','DKfnvge','Bxm6y2u','nZq4mZy','BLbMvK4','uhL6DhC','C2v0vwK','Cvbvtvm','ig90Agu','lZeUndu','WOVcImktWOJcKq','Aw50Aw4','ueHVzfa','A0XXAe4','zMfJDg8','nsK7','BvrrDum','z2fTzq','zvzetw4','Cvn3wxO','sxzvtLq','wKX6B3m','Bw4TBg8','B2XLig4','Cxf5Ave','B3nZihq','WOVcKSkjWPdcJq','vunsEuW','AxmGyNu','zwqGBM8','tgvqque','C3rYAw4','ignYB3m','BLr5Cgu','zuvSzw0','ChGVms4','y2u7y28','ntbWEcW','owqIihm','mJrWEdS','zsbZDhi','zM9UDc0','BxHICK0','WO7cJSkuWO/cLq','AwDPBMe','C3DRrKS','BhvTBJS','B3nL','yM9VBgu','C2vYDcK','C2STC2W','t1ruufG','vND0D2C','WOVcHSkoWPxcKq','z3f0ywO','BMD0AcW','tgn4tKO','twjzAeW','iJ5VCgu','BMC+','mhW1Fdm','Aw5Lza','mtbWEca','uuffAuy','pt09u0e','Awr0AdO','DgvTCZO','BwLUkdu','B3j04OcM','BxjQCee','ys1ZDY0','BgqGAxm','surfige','B246zMK','zwqGEwu','zw50','WOZcI8kmWOBcJW','AxqTC2m','s3n4tvO','ywDLCG','pJiUmhG','nNW1','A3PbBLO','CNnVCJO','seXNDMG','DK9kuuu','nsWXndm','CMvHy2G','tuSGq08','CKD5Exu','cNbPDgm','ywDLigG','ig9Uia','DMuGBM8','BNn0yw4','yvbfsg0','qLHkB00','DwLwsva','DcbIzwu','yw5KigG','Ag90','B25VC3a','CM1VBMS','CNqGihq','tMDVu2G','nNb4o2i','AwL6t0e','v01UBuq','r2j3Egi','ohb4ide','WORcKSkkWPhcLa','veHmBwC','su9hAeS','q1zYAMu','ExbLpsi','u1Dbshq','ys1Tzw4','DMLZDwe','u3bLzwq','DKDjDvq','WO3cLmkvWOVcIG','DMfS','ndC7','Aw4TD2K','C2STBM8','we9dwKe','svzficG','DdTIB3i','BNqTC2K','Bgf5oM4','ChrLza','msiGC3q','BM5VDca','EdTNyxa','CML0o28','DcbPBMO','ig1LBNu','ywX7zM8','DhjHBNm','lcbZDgu','WOBcKmkgWPhcIG','ue5ztfu','s3nAvfy','mtm5otHMwwvsqwq','EdOYmtq','B3r0B20','BgXLzca','DgnO','oYi+','A2vKpsi','WOJcISkiWPdcLa','u2XPDNG','C2v0','CgvJDhm','WOBcK8kuWOVcKG','ywnRz3i','v3biA1i','vfDQuvC','nxWXFdi','y29Kzq','DgG6BwK','pc9KAxy','WOFcJCkvWO3cHW','Awv3','ltqTnY4','ztTZDhi','ihn0yxK','Bg9N','u2v6rKG','v0rOsxa','tfv0CMy','v0fswI0','mda7Bwe','CMeTC3C','zgvYoJa','vfH6sK0','z2vY','BNrYB2W','uLviBei','ihjVDw4','C3rLBMu','tfjWswW','WPhcImksWO3cHW','nZKSmtq','DhDPy2u','WPxcKSkiWOFcKG','wu5ruNm','nJq2o3a','DMLZAwi','q2jAAMe','kZb4mJK','AgfUzwq','BIbYzwW','wwXLC2G','u0ryB2e','qMLUzgK','ihzPzxC','vw5PDhK','z2v0Dgu','BgvMDa','Axr5oJe','tvjpDwm','C3Dby1u','thPbtxe','yMeOmJu','yxm+','BM8Gzw4','igjVDgG','Axr5','ywnRihq','ihbHz2u','EKDXvvi','BxjlEKm','B250lxm','Eurdsee','EgvKo3q','C2fUCY0','zNKTy28','tgLZDa','B29M','BM1gDuC','ztOXm3a','zYbIBgK','rxHWB3i','lxnPEMu','teLwrsa','sLnVsxK','ihrOzsa','qM90','zciVpG','WPtcJSkrWO3cLq','EgXOzg0','ug52CLq','B2zM','BevZt0C','o2nVBg8','z2uUrgu','C2vWvxm','icaGia','WONcISkgWPlcIq','BgvYige','CIb5B3u','BLfTq3C','yw1L','mYWXnZC','ChG7CMK','D1ztAgq','r2jssxK','Bc5ZAg8','lJuIihy','EMrxtLK','B3vUzci','WPxcKSkjWPlcHW','WO/cJmkgWO7cJW','ns00idC','rxLL','DgLUzYa','BM8Gtw8','y01wv1e','y2X1C3q','z2v0vwK','CZPUB24','rvnqig0','C2vSzwm','BMDSzsa','ENfbz0e','CdO2ChG','y2XPy2S','zwqGyNu','pgj1Dhq','ywHxu3y','vfnzCfa','zsbNyw0','Bw4TDge','zxaGDgG','wfLsrMG','yxK6z3i','ExbLCW','iMjHy2S','DhrVBtO','DMvhyw0','ALPkr1C','zgrPBMC','AwrLBNq','DLP5rui','lJGYktS','yM9IBwy','BM9ZCge','WOFcK8ktWOFcHW','DJiTy3m','C2HHzg8','zMvLDa','AuLsD1m','zw50zxi','A2v5zg8','WOFcLmktWO/cJq','wwrpt0S','CMqTAgu','zMLLza','ig9Uy2u','u3D2vuG','Bgv4lxm','wMLTBe8','WPpcICkqWOZcJa','DgXL','CMuGkhi','ywjSzsa','lK1Vzhu','zhrO','WO3cJ8kgWPlcJa','ys1IB3G','WO7cLCkoWOFcHG','BcbHz2e','CMv4CgG','EdTMBgu','vwTjEw0','EuDetgG','u2vLBG','psiXiIa','imk3ihrL','sgPhvNC','DcHHDxq','igL0igK','ntuSmtq','C2L0Aw8'];_0x3052=function(){return _0x33619d;};return _0x3052();}function _0x3f00(_0x4c5e4d,_0x219891){_0x4c5e4d=_0x4c5e4d-(0x5*0x209+-0xc89*-0x1+-0x6b*0x35);var _0x27b450=_0x3052();var _0x36c615=_0x27b450[_0x4c5e4d];if(_0x3f00['yYBKVo']===undefined){var _0x5459fd=function(_0x47d12a){var _0x531fb2='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x865116='',_0x22f2e8='';for(var _0x557b51=0x3*0xb17+0x303+-0x2448,_0x19137f,_0x2401dd,_0xc35b58=-0x1e73+0xa1*-0x36+-0x5db*-0xb;_0x2401dd=_0x47d12a['charAt'](_0xc35b58++);~_0x2401dd&&(_0x19137f=_0x557b51%(-0x25f+-0x255+0x4b8)?_0x19137f*(-0x5c*0x59+0x3ec*0x1+0x1c50)+_0x2401dd:_0x2401dd,_0x557b51++%(0x156f+0x4*0x14c+-0x1a9b))?_0x865116+=String['fromCharCode'](-0x10c6+-0x21d*-0x11+-0x1228&_0x19137f>>(-(-0x255a+0x372+0x21ea)*_0x557b51&0x876+0xc01+-0x1471)):-0x7*0x1a+0xdfb*0x1+-0xd45){_0x2401dd=_0x531fb2['indexOf'](_0x2401dd);}for(var _0x8354dd=0x25*-0xe9+-0x495+0x2642,_0x1e7f81=_0x865116['length'];_0x8354dd<_0x1e7f81;_0x8354dd++){_0x22f2e8+='%'+('00'+_0x865116['charCodeAt'](_0x8354dd)['toString'](0x353*-0xa+-0x368+0x25*0xfe))['slice'](-(-0x21b+-0x16a5+-0x18c2*-0x1));}return decodeURIComponent(_0x22f2e8);};_0x3f00['KtjilL']=_0x5459fd,_0x3f00['iduEjW']={},_0x3f00['yYBKVo']=!![];}var _0x2d9ecb=_0x27b450[-0x1c2f+0x3*0x8b0+-0xb5*-0x3],_0x5bc6bc=_0x4c5e4d+_0x2d9ecb,_0xf57963=_0x3f00['iduEjW'][_0x5bc6bc];return!_0xf57963?(_0x36c615=_0x3f00['KtjilL'](_0x36c615),_0x3f00['iduEjW'][_0x5bc6bc]=_0x36c615):_0x36c615=_0xf57963,_0x36c615;}(function(_0x16c734,_0x34bcdf){var _0x33dd0b=_0x3f00,_0x2e39ab=_0x16c734();while(!![]){try{var _0x4134ad=-parseInt(_0x33dd0b(0x411))/(0xbb0+0x60f+-0x3*0x5ea)+-parseInt(_0x33dd0b(0x72b))/(-0xbc4+-0xeaa+0x12*0x178)+parseInt(_0x33dd0b(0x74e))/(0x12a6+-0x2*0xd1f+0xb*0xb1)*(parseInt(_0x33dd0b(0x730))/(0x1ea6+-0x4*-0x6e5+-0x3a36))+-parseInt(_0x33dd0b(0x1e5))/(-0x1419+-0x1*0x24c9+0x38e7*0x1)*(parseInt(_0x33dd0b(0xb07))/(0x547*0x2+-0x9d9*-0x3+0x2813*-0x1))+parseInt(_0x33dd0b(0x995))/(0x114c+0x6cc+-0x1*0x1811)*(-parseInt(_0x33dd0b(0x149))/(0x801+0xbc8*0x3+-0x2b51*0x1))+parseInt(_0x33dd0b(0x215))/(-0x4e1*0x7+0x5d*0x4+0x5*0x68c)*(parseInt(_0x33dd0b(0x94b))/(-0x1d84+-0x8d6+0x2664))+parseInt(_0x33dd0b(0x589))/(0x21d5+-0x1*0x1c29+-0x5a1)*(parseInt(_0x33dd0b(0x3d2))/(0x266a+-0x2*0x1378+0x92));if(_0x4134ad===_0x34bcdf)break;else _0x2e39ab['push'](_0x2e39ab['shift']());}catch(_0x1b66bc){_0x2e39ab['push'](_0x2e39ab['shift']());}}}(_0x3052,-0xd*-0x695d+-0x1b1a6+-0xc*-0x308b),((()=>{'use strict';var _0x3e6ad4=_0x3f00,_0x5591fc={'SBeSR':function(_0x3dc287,_0x28bd55){return _0x3dc287+_0x28bd55;},'rWYKh':function(_0x2219fb,_0x2865bc){return _0x2219fb!==_0x2865bc;},'mbILZ':function(_0x2958c8,_0x161619){return _0x2958c8===_0x161619;},'ZVQKB':'uVfzq','pqsrZ':function(_0x4bdb0f,_0x3e6a8a){return _0x4bdb0f===_0x3e6a8a;},'NYAet':function(_0x23fab3,_0x21322c){return _0x23fab3!==_0x21322c;},'GbJTf':_0x3e6ad4(0xb2d),'rnwiA':function(_0x1cda60,_0x3038c7){return _0x1cda60===_0x3038c7;},'hpkZl':function(_0x2f4262,_0x1a7cce){return _0x2f4262(_0x1a7cce);},'baTMw':function(_0x96707a){return _0x96707a();},'IXLQf':_0x3e6ad4(0x65a)+'e','MkbYf':function(_0x586467,_0x1653bb){return _0x586467<_0x1653bb;},'mFIZD':_0x3e6ad4(0x753),'AgbRu':_0x3e6ad4(0x6d0)+_0x3e6ad4(0xabe)+'v2','izdhP':_0x3e6ad4(0x57e),'yhJMq':'YhnGx','auIJa':'sakur'+_0x3e6ad4(0xabe)+_0x3e6ad4(0x7ce)+'b','bJroe':function(_0x445b09,_0x3d0937){return _0x445b09===_0x3d0937;},'EqJYW':'div','iXRWi':function(_0x26802c,_0x6ac6a5){return _0x26802c+_0x6ac6a5;},'uITwc':_0x3e6ad4(0x6d0)+'a','NzNoN':function(_0xa0d182,_0x381c53){return _0xa0d182&&_0x381c53;},'MRGXN':_0x3e6ad4(0xbee)+_0x3e6ad4(0x3bc)+'red\x20a'+'t\x20','wahdo':'ms\x20wi'+'th\x20or'+_0x3e6ad4(0xaa4)+_0x3e6ad4(0x367)+'=','famoz':'none','gOaIG':function(_0x51f7c9){return _0x51f7c9();},'YDlsL':'4|1|2'+'|0|3','ebmuV':'#saku'+_0x3e6ad4(0xb25)+'-v2{a'+'ll:in'+'itial'+'}','Pyztw':function(_0x3430f2){return _0x3430f2();},'quZDY':'%c[sa'+_0x3e6ad4(0x231)+_0x3e6ad4(0x103)+'l\x20dis'+_0x3e6ad4(0x1cf),'mxbrM':function(_0x4f8fc4){return _0x4f8fc4();},'LzAMq':function(_0x2d34da,_0x275ee4){return _0x2d34da/_0x275ee4;},'IAODN':'\x20obje'+_0x3e6ad4(0x10c)+'\x20','Wmhbl':function(_0x2f0f6a,_0xa587e8){return _0x2f0f6a>_0xa587e8;},'NECsK':_0x3e6ad4(0x489)+_0x3e6ad4(0xa44)+_0x3e6ad4(0x7c0),'OuFQD':'zoNBu','VFtZH':function(_0xea5e45,_0x2805e7){return _0xea5e45+_0x2805e7;},'WFGBf':'armed'+_0x3e6ad4(0x3ec),'Ajocp':'#ffd4'+'8a','EmOgB':'dbiJa','mimyQ':_0x3e6ad4(0x275)+_0x3e6ad4(0x644)+_0x3e6ad4(0xa11)+'t:\x20','aSBbW':'F9\x20tw'+_0x3e6ad4(0x85d)+_0x3e6ad4(0x7d3)+_0x3e6ad4(0x42d)+'ng\x20/\x20'+_0x3e6ad4(0x8df)+'ting\x20'+_0x3e6ad4(0x6dd)+_0x3e6ad4(0x935)+_0x3e6ad4(0x228)+_0x3e6ad4(0xc1a)+_0x3e6ad4(0x34f)+_0x3e6ad4(0xabf)+_0x3e6ad4(0xc1a)+'h.','kWjNV':'Speed'+_0x3e6ad4(0x7e2),'VHdJt':_0x3e6ad4(0xb02)+'paren'+'t','Awqyy':_0x3e6ad4(0x968)+'f5','VpYpU':function(_0x3d24ee,_0x120ffc){return _0x3d24ee+_0x120ffc;},'OoXxb':function(_0x13e42d,_0x3139ae){return _0x13e42d+_0x3139ae;},'ZFcXn':function(_0x2fa7ba,_0x517973){return _0x2fa7ba+_0x517973;},'bFdBY':'open','mJfBX':_0x3e6ad4(0x4ef),'JISQD':_0x3e6ad4(0x1fd),'nRkAO':_0x3e6ad4(0xaee)+_0x3e6ad4(0x709),'jZJGW':_0x3e6ad4(0x840),'HZiWR':function(_0x545362,_0x1dc6fe){return _0x545362||_0x1dc6fe;},'DVByk':_0x3e6ad4(0x413)+_0x3e6ad4(0x44b)+_0x3e6ad4(0x9d5)+'es\x20th'+_0x3e6ad4(0x8c8)+_0x3e6ad4(0x160)+'pt\x20IS'+'\x20inst'+'alled'+_0x3e6ad4(0x375)+'runni'+'ng\x20on'+_0x3e6ad4(0xb5b)+_0x3e6ad4(0x668)+_0x3e6ad4(0xa6b),'FttlK':function(_0x3b56fe,_0x1ef055){return _0x3b56fe===_0x1ef055;},'BgGlM':function(_0x714278,_0x4b3534){return _0x714278+_0x4b3534;},'gUTwH':'font:'+_0x3e6ad4(0xca)+_0x3e6ad4(0x1c7)+'i-mon'+'ospac'+'e,Con'+_0x3e6ad4(0x61f)+',mono'+_0x3e6ad4(0x2a1)+_0x3e6ad4(0x93a)+_0x3e6ad4(0xb9a)+_0x3e6ad4(0x464)+_0x3e6ad4(0x6bc)+_0x3e6ad4(0x75c)+_0x3e6ad4(0x97c)+'#000;','bvHaz':function(_0x168079,_0x2b3325){return _0x168079+_0x2b3325;},'WmBgi':function(_0x45569c,_0x228a26){return _0x45569c+_0x228a26;},'baDWg':function(_0x956dea,_0x1f11a2){return _0x956dea+_0x1f11a2;},'fHCbA':function(_0x26257e,_0x264d22){return _0x26257e+_0x264d22;},'CEsRr':function(_0x3ad54e,_0x43c915){return _0x3ad54e+_0x43c915;},'rslNU':_0x3e6ad4(0x3a4)+'style'+'=\x22pad'+_0x3e6ad4(0x83d)+'9px\x201'+'2px;b'+_0x3e6ad4(0x72d)+'-bott'+'om:1p'+_0x3e6ad4(0x550)+_0x3e6ad4(0x4c9)+_0x3e6ad4(0xb44)+_0x3e6ad4(0xace)+',177,'+'.3);d'+_0x3e6ad4(0x3d1)+_0x3e6ad4(0x8a0)+_0x3e6ad4(0xafd)+':8px;'+_0x3e6ad4(0x1c5)+'-item'+'s:cen'+_0x3e6ad4(0x27d)+_0x3e6ad4(0x89b)+_0x3e6ad4(0x55c)+_0x3e6ad4(0x456),'NZZBA':'<b\x20st'+'yle=\x22'+'color'+':','Aklla':_0x3e6ad4(0xb85)+'on\x20id'+_0x3e6ad4(0x99d)+'-x\x22\x20s'+_0x3e6ad4(0x58d)+_0x3e6ad4(0xb8e)+'groun'+_0x3e6ad4(0x1dd)+_0x3e6ad4(0x61d)+'ent;b'+_0x3e6ad4(0x72d)+':1px\x20'+_0x3e6ad4(0x35b)+_0x3e6ad4(0xa04)+_0x3e6ad4(0x43e)+_0x3e6ad4(0x547)+'77,.4'+_0x3e6ad4(0x7c7)+'or:#f'+_0x3e6ad4(0xa25)+';bord'+_0x3e6ad4(0x189)+_0x3e6ad4(0x368)+_0x3e6ad4(0x66c)+_0x3e6ad4(0x674)+_0x3e6ad4(0x686)+_0x3e6ad4(0xa62)+'curso'+_0x3e6ad4(0x555)+_0x3e6ad4(0x9b1)+_0x3e6ad4(0xa52)+'butto'+'n>','yGDLh':'<div\x20'+_0x3e6ad4(0xd5)+_0x3e6ad4(0x5ca)+_0x3e6ad4(0x83d)+'8px\x201'+_0x3e6ad4(0x830)+_0x3e6ad4(0x72d)+'-bott'+_0x3e6ad4(0x827)+_0x3e6ad4(0x550)+'id\x20rg'+_0x3e6ad4(0xb44)+'5,143'+_0x3e6ad4(0xb7)+_0x3e6ad4(0xa13)+'displ'+_0x3e6ad4(0x407)+_0x3e6ad4(0x769)+_0x3e6ad4(0x8e2)+';alig'+_0x3e6ad4(0x664)+'ms:ce'+'nter;'+_0x3e6ad4(0x15c)+_0x3e6ad4(0x7d1)+_0x3e6ad4(0x43b)+'lex-w'+_0x3e6ad4(0x8f7)+_0x3e6ad4(0x1e7)+'>','pvMsy':'<butt'+_0x3e6ad4(0x496)+'=\x22sw2'+'-spee'+_0x3e6ad4(0x651)+_0x3e6ad4(0x7c1)+'backg'+'round'+_0x3e6ad4(0x536)+'spare'+_0x3e6ad4(0x118)+_0x3e6ad4(0x475)+_0x3e6ad4(0x95f)+'olid\x20'+'rgba('+_0x3e6ad4(0x933)+_0x3e6ad4(0x79e)+_0x3e6ad4(0x1c9)+_0x3e6ad4(0xb63)+_0x3e6ad4(0x5b9)+'eef5;'+'borde'+_0x3e6ad4(0x33c)+'ius:7'+_0x3e6ad4(0xc1)+'dding'+':4px\x20'+_0x3e6ad4(0x90b)+'curso'+'r:poi'+'nter;'+'\x22>Spe'+_0x3e6ad4(0x3dd)+_0x3e6ad4(0x3bd)+_0x3e6ad4(0x242),'IkJBl':_0x3e6ad4(0x8f8)+_0x3e6ad4(0x317)+'sw2-h'+'int\x22\x20'+'style'+_0x3e6ad4(0x2ad)+_0x3e6ad4(0x1f2)+'d7a99'+'\x22>F9\x20'+_0x3e6ad4(0xb30)+'\x20whil'+_0x3e6ad4(0x779)+_0x3e6ad4(0xa1d)+_0x3e6ad4(0x478)+_0x3e6ad4(0xa83)+_0x3e6ad4(0x25b)+_0x3e6ad4(0x542)+_0x3e6ad4(0x553)+_0x3e6ad4(0x3c1)+_0x3e6ad4(0x26d)+_0x3e6ad4(0x370)+_0x3e6ad4(0x2ce)+_0x3e6ad4(0x4fd)+_0x3e6ad4(0x84e)+'>','WGqJT':'</div'+'>','LePAA':_0x3e6ad4(0x4d3)+'build','uLmTm':_0x3e6ad4(0x4d3)+'out','AMLAc':_0x3e6ad4(0x4d3)+_0x3e6ad4(0x177)+'e','XEbIO':_0x3e6ad4(0x4d3)+'body','YNQRs':_0x3e6ad4(0x4d3)+_0x3e6ad4(0xa0b),'cZBAu':function(_0x4fc9d1){return _0x4fc9d1();},'qwNdf':function(_0x4a8ac5,_0xe9dae6,_0x414fd0){return _0x4a8ac5(_0xe9dae6,_0x414fd0);},'MyXcw':'frame'+'\x20\x20\x20\x20','EKxOw':function(_0x56069e,_0x56b586){return _0x56069e+_0x56b586;},'JADHw':'\x20appl'+_0x3e6ad4(0x519),'eNvtr':_0x3e6ad4(0xcf)+_0x3e6ad4(0x73d)+_0x3e6ad4(0xbdd)+_0x3e6ad4(0x641)+_0x3e6ad4(0xa73)+_0x3e6ad4(0x3ac)+'ature'+'\x20did\x20'+'not\x20m'+'atch.','wQroQ':function(_0x5c7c00,_0x8505b9){return _0x5c7c00+_0x8505b9;},'QAEiF':_0x3e6ad4(0x4d0),'HmMsC':function(_0x3991a9,_0x1aefb8){return _0x3991a9===_0x1aefb8;},'XsOFC':function(_0x498498,_0xd2a960){return _0x498498+_0xd2a960;},'jMMoK':function(_0x4f8178,_0x1ef867){return _0x4f8178+_0x1ef867;},'BkHyf':_0x3e6ad4(0x251),'pXPQA':_0x3e6ad4(0x2d4)+_0x3e6ad4(0x47b),'sFgHZ':function(_0x3ea460,_0xe694a){return _0x3ea460!==_0xe694a;},'MawCk':_0x3e6ad4(0x1b1),'NgoSh':function(_0x546de1,_0x39ad27){return _0x546de1!==_0x39ad27;},'nhRqp':function(_0x42849d,_0x138304){return _0x42849d!==_0x138304;},'hEiLA':'VaDAk','nrCal':_0x3e6ad4(0x9d1),'YdOOK':_0x3e6ad4(0x4e3)+':','rcVgf':function(_0x501cea,_0x4b2c5f){return _0x501cea(_0x4b2c5f);},'MfBkM':function(_0x3e22c8,_0x461f4e){return _0x3e22c8&&_0x461f4e;},'Trlkr':_0x3e6ad4(0x7e6)+_0x3e6ad4(0xa63)+'ixed;'+_0x3e6ad4(0x750)+_0x3e6ad4(0x50d)+'top:1'+'2px;z'+'-inde'+_0x3e6ad4(0xb08)+'74829'+_0x3e6ad4(0x981)+'rsor:'+_0x3e6ad4(0x59c)+'er;us'+'er-se'+_0x3e6ad4(0x35c)+'none;','xKlJz':_0x3e6ad4(0x526)+_0x3e6ad4(0x33c)+_0x3e6ad4(0xd7)+'99px;'+'paddi'+'ng:4p'+_0x3e6ad4(0xa4f)+_0x3e6ad4(0x27c)+_0x3e6ad4(0x975)+'x/1.4'+_0x3e6ad4(0x3ce)+'onosp'+_0x3e6ad4(0x727)+'onsol'+'as,mo'+_0x3e6ad4(0xb97)+_0x3e6ad4(0x658),'TKope':function(_0x1f5764,_0x135153){return _0x1f5764===_0x135153;},'SgAYp':_0x3e6ad4(0x823),'cqPpa':_0x3e6ad4(0x30d)+'ra-sw'+'-hud{'+_0x3e6ad4(0x5d0)+'nitia'+'l}','aUJUj':_0x3e6ad4(0x9c7),'YWReQ':function(_0x22e4ed,_0x10203d){return _0x22e4ed!==_0x10203d;},'hVAwo':'cmd','DjUrZ':_0x3e6ad4(0x19c),'FazpG':'info','YFyjO':_0x3e6ad4(0x6e6)+_0x3e6ad4(0x2ca),'SsAES':_0x3e6ad4(0x294)+_0x3e6ad4(0x9db)+'e','pRwSi':function(_0x4dfac3,_0x3c7568){return _0x4dfac3<_0x3c7568;},'VBRBj':function(_0x576cba,_0x136a6f){return _0x576cba!==_0x136a6f;},'dQuoa':function(_0x1bad10,_0x13c16a){return _0x1bad10!==_0x13c16a;},'ssPEN':'sakur'+_0x3e6ad4(0x6ae)+_0x3e6ad4(0x5fe)+'z','NzFCe':function(_0x4977db){return _0x4977db();},'NOWxS':_0x3e6ad4(0x1a9),'SwOYg':_0x3e6ad4(0xba4),'okAse':'plugi'+_0x3e6ad4(0xa36)+_0x3e6ad4(0x90d)+_0x3e6ad4(0x97f)+'lveGa'+_0x3e6ad4(0x1fb),'QMoTi':_0x3e6ad4(0x102),'cNJIc':_0x3e6ad4(0x951),'XzUeS':'undef'+_0x3e6ad4(0xab5),'mpdrA':function(_0x1efd57,_0x3e0475){return _0x1efd57<_0x3e0475;},'ZLBsj':_0x3e6ad4(0xa18),'mrstt':function(_0x5543ee,_0x4388c5){return _0x5543ee<_0x4388c5;},'mzDdJ':function(_0x1f8b18,_0x1341e1){return _0x1f8b18+_0x1341e1;},'McDCy':'u16','GhEVH':'i32','SDXoa':_0x3e6ad4(0x36f),'ulRee':function(_0x4b8d6b){return _0x4b8d6b();},'cHUFv':function(_0x3130a4,_0x3a5e0d){return _0x3130a4&_0x3a5e0d;},'WDhIp':'f32','dsKRE':_0x3e6ad4(0x346),'oorBL':function(_0x2e7159,_0x52ced5){return _0x2e7159-_0x52ced5;},'SezFH':function(_0x5364e8){return _0x5364e8();},'NnqtA':function(_0x8af79e,_0x2627bb){return _0x8af79e<_0x2627bb;},'jMeds':function(_0x540800,_0x5db948){return _0x540800+_0x5db948;},'TWDvK':function(_0x572b88,_0x2b39fc){return _0x572b88===_0x2b39fc;},'Oykcn':_0x3e6ad4(0x5ae)+_0x3e6ad4(0x338)+'\x20end\x20'+'0x','zoVzQ':_0x3e6ad4(0x30b),'vnTZc':_0x3e6ad4(0x3b0),'AsUYv':_0x3e6ad4(0x2e6),'KqCuO':function(_0x14f7a8,_0x18a533){return _0x14f7a8===_0x18a533;},'yIGEY':'obfF','pUYNF':function(_0xa99119,_0x51842f){return _0xa99119^_0x51842f;},'RVhZh':function(_0x20f63d,_0x560ade){return _0x20f63d===_0x560ade;},'FSWXT':function(_0xb78267,_0x71d0ee){return _0xb78267^_0x71d0ee;},'ZHNtO':function(_0x845d61,_0x4482e7,_0x4c1f9a){return _0x845d61(_0x4482e7,_0x4c1f9a);},'vOJQE':function(_0x2c71f8,_0xce47fe){return _0x2c71f8+_0xce47fe;},'PBIMy':function(_0x1864d5,_0x36c4e9){return _0x1864d5+_0x36c4e9;},'tjQjC':function(_0x96ee14,_0x3edbac){return _0x96ee14+_0x3edbac;},'HdtpB':function(_0x1a4ed1,_0xf3d7e2){return _0x1a4ed1===_0xf3d7e2;},'TwDBn':function(_0x51556b,_0x15da0a){return _0x51556b|_0x15da0a;},'DKqfV':function(_0x1172c2,_0x31fba7){return _0x1172c2^_0x31fba7;},'GsVss':function(_0x9f5fbd,_0x13b11a){return _0x9f5fbd+_0x13b11a;},'ZLtaT':function(_0x435ee6,_0x3d084b){return _0x435ee6===_0x3d084b;},'sPYvj':function(_0x30a964){return _0x30a964();},'DgmGf':function(_0x556b32,_0x2d7c49){return _0x556b32!==_0x2d7c49;},'wUZGg':function(_0x352f40,_0x4febf2){return _0x352f40<_0x4febf2;},'mTQuC':function(_0x6ae1c3,_0x34f502){return _0x6ae1c3!==_0x34f502;},'bWcEg':function(_0x316951,_0x2eec20){return _0x316951+_0x2eec20;},'wLVJx':function(_0x5ce8bf,_0x280588){return _0x5ce8bf>_0x280588;},'wpuFY':function(_0x56ae8b,_0x2a8eb0){return _0x56ae8b!==_0x2a8eb0;},'GKmDo':_0x3e6ad4(0x38f),'MbYhL':'impla'+'usibl'+'e','ijrHf':function(_0x37540e,_0x216869){return _0x37540e<_0x216869;},'hhDDc':function(_0x187d02,_0x2d353a){return _0x187d02+_0x2d353a;},'QZXcH':'JBIEx','eHyjI':_0x3e6ad4(0x265),'yaomt':function(_0x45ea13,_0x4850bb){return _0x45ea13<_0x4850bb;},'ARTkY':_0x3e6ad4(0x19b),'hwjKz':function(_0x268c1f,_0x43b03e){return _0x268c1f!==_0x43b03e;},'CqmWT':_0x3e6ad4(0x66e),'bobmf':function(_0x279af2,_0x49cef2){return _0x279af2+_0x49cef2;},'XJbcE':function(_0x22621d,_0x1dd1ce){return _0x22621d!==_0x1dd1ce;},'TutvX':_0x3e6ad4(0x820),'Ndpgq':'singl'+_0x3e6ad4(0x63d),'rmCyD':_0x3e6ad4(0x680),'AtDze':'oiFgX','DglhD':function(_0x2e0048,_0x20b5d4){return _0x2e0048+_0x20b5d4;},'jaBpC':function(_0x2f3258,_0x2b8168){return _0x2f3258*_0x2b8168;},'oYqIm':function(_0x36e44e){return _0x36e44e();},'Rzxcg':function(_0x3bc611,_0x5ea608){return _0x3bc611===_0x5ea608;},'xFnCd':'Rugzf','fXyPv':'wKoJW','imTzr':_0x3e6ad4(0x554),'slOIO':function(_0x3e5b8f,_0xb7fad5){return _0x3e5b8f-_0xb7fad5;},'MhIti':'xJPed','eblWY':_0x3e6ad4(0x12e),'wotja':'vdaxW','kdBdU':function(_0x3efe42,_0x4455e0){return _0x3efe42<_0x4455e0;},'WaALW':'TkyZD','vZyEB':'void','TphQq':_0x3e6ad4(0xb10),'qCsBB':function(_0x585bb0,_0x513447){return _0x585bb0(_0x513447);},'PNkby':function(_0xc24e06,_0xa1bce1){return _0xc24e06!==_0xa1bce1;},'cYFro':function(_0x5789b4){return _0x5789b4();},'HLgvh':'NlHKc','VrOcR':function(_0x45039a,_0x3d291a){return _0x45039a<_0x3d291a;},'aIvld':function(_0x264d98,_0x534298){return _0x264d98>_0x534298;},'idABv':function(_0x7f01d2,_0x465755){return _0x7f01d2+_0x465755;},'rexph':function(_0x4b3c32,_0x3978ff){return _0x4b3c32+_0x3978ff;},'ngYAC':function(_0x283878,_0x4decab){return _0x283878!==_0x4decab;},'uPpob':function(_0x30d1b1,_0x527286,_0x4f68f8,_0x40c4aa){return _0x30d1b1(_0x527286,_0x4f68f8,_0x40c4aa);},'wFjyA':function(_0x3234e1,_0x19de08){return _0x3234e1===_0x19de08;},'oMsyi':'numbe'+'r','aWnuw':function(_0x25b410,_0x37acc7){return _0x25b410+_0x37acc7;},'KNKvj':function(_0x4d8058,_0x29b7a0,_0x163db9,_0x4ad4f1){return _0x4d8058(_0x29b7a0,_0x163db9,_0x4ad4f1);},'TEjhW':_0x3e6ad4(0x52d),'uIMTC':'3|2|4'+_0x3e6ad4(0x49a),'cDNlV':'NPC_C'+'otrol'+_0x3e6ad4(0x92f),'PdHrI':function(_0x5619ba,_0x2ab961,_0x42c162){return _0x5619ba(_0x2ab961,_0x42c162);},'yuUDe':'FPSco'+_0x3e6ad4(0xb29)+_0x3e6ad4(0x92f),'DKjUk':function(_0x7d6263,_0x14df12){return _0x7d6263<_0x14df12;},'SkeEw':function(_0x5ca08c,_0x4a7614){return _0x5ca08c===_0x4a7614;},'OTTPX':_0x3e6ad4(0x1d1)+'obby\x20'+_0x3e6ad4(0x2c8)+_0x3e6ad4(0x9d2)+'\x20-\x20ru'+'n\x20the'+'\x20reco'+'n\x20INS'+_0x3e6ad4(0xac0)+_0x3e6ad4(0x859)+_0x3e6ad4(0xb2b)+_0x3e6ad4(0x660)+'t\x20the'+_0x3e6ad4(0xb00)+'.','MgnUW':_0x3e6ad4(0x2eb)+'rs\x20ar'+_0x3e6ad4(0x454)+'sent\x20'+'but\x20n'+_0x3e6ad4(0x661)+_0x3e6ad4(0x442)+'assif'+_0x3e6ad4(0x50c)+_0x3e6ad4(0x261)+_0x3e6ad4(0x3a6)+_0x3e6ad4(0x883)+_0x3e6ad4(0xda)+'k\x20','faZmF':_0x3e6ad4(0x427)+_0x3e6ad4(0x212)+_0x3e6ad4(0x62c)+'\x20entr'+'y\x20in\x20'+_0x3e6ad4(0x3b2)+'ers`.','AZGdw':function(_0x34510c,_0xe7190f){return _0x34510c<_0xe7190f;},'SpiTb':function(_0x3a8f4e,_0x1ae8d0){return _0x3a8f4e+_0x1ae8d0;},'OYxgc':function(_0x2888d9,_0x13893d){return _0x2888d9<_0x13893d;},'gKnxh':function(_0x576ad3,_0x5cb30f){return _0x576ad3-_0x5cb30f;},'KsxMZ':'MSsAm','GWAAA':function(_0xbee63,_0x5baba1){return _0xbee63<_0x5baba1;},'NhZUg':function(_0x112bff,_0x55939c){return _0x112bff!==_0x55939c;},'oYSjs':'MdYtD','YVHwm':function(_0x138f5f,_0x41edad){return _0x138f5f!==_0x41edad;},'tMATL':_0x3e6ad4(0x988)+'w.','cSGdt':function(_0x1c1dc7,_0x348b6e){return _0x1c1dc7===_0x348b6e;},'JDCql':function(_0x2a2a45,_0x30011c){return _0x2a2a45!==_0x30011c;},'IlNLo':_0x3e6ad4(0xb4e),'pztmn':function(_0x209719,_0x3c0978,_0x3e0c47,_0x3012ef){return _0x209719(_0x3c0978,_0x3e0c47,_0x3012ef);},'uUlCg':function(_0xda0a1e,_0x110d6a){return _0xda0a1e!==_0x110d6a;},'EDGkX':_0x3e6ad4(0x2a3),'saiwx':function(_0x1cbaf9,_0x372296){return _0x1cbaf9===_0x372296;},'YloHz':function(_0x262b70,_0x143fe7,_0x260e57,_0x5f9d8){return _0x262b70(_0x143fe7,_0x260e57,_0x5f9d8);},'oRoPj':'MrNwi','hjkOz':function(_0x4a1926,_0x45d537){return _0x4a1926(_0x45d537);},'WTVnr':function(_0x3e9aab,_0x37d94c){return _0x3e9aab+_0x37d94c;},'IbrKn':_0x3e6ad4(0x51c)+'=','VOdgv':_0x3e6ad4(0x458)+'VE','eBqdJ':_0x3e6ad4(0x4b0),'jPMVA':'\x20hex=','DOJNz':_0x3e6ad4(0xa3c),'UkIym':function(_0x3181f6,_0x2cddb5){return _0x3181f6<=_0x2cddb5;},'HjGVw':function(_0x5e7be9,_0x45879c){return _0x5e7be9<_0x45879c;},'GudAW':_0x3e6ad4(0x3b7)+_0x3e6ad4(0x74c)+_0x3e6ad4(0xc1d)+_0x3e6ad4(0x8b3)+',\x20no\x20'+_0x3e6ad4(0x439)+_0x3e6ad4(0x764)+_0x3e6ad4(0xb68)+_0x3e6ad4(0x477)+'\x20game'+_0x3e6ad4(0xa1b)+_0x3e6ad4(0x508)+_0x3e6ad4(0x26e)+_0x3e6ad4(0x2ce)+_0x3e6ad4(0x7ab),'RJMyp':'xBvbt','augvy':function(_0x4ef788,_0x3d8883){return _0x4ef788(_0x3d8883);},'cauGL':_0x3e6ad4(0x9a1),'pYOpu':'2|5|3'+'|0|4|'+'7|1|6','wLMQx':'Mouse'+'Look@'+_0x3e6ad4(0x6a2),'jdLfZ':function(_0xe66127,_0x261e67,_0x3365df){return _0xe66127(_0x261e67,_0x3365df);},'DUhJZ':function(_0x264aea,_0x3c1fe8){return _0x264aea===_0x3c1fe8;},'LrwRn':function(_0x3d5299,_0x5135b1){return _0x3d5299!==_0x5135b1;},'nPgVm':function(_0x3a03d5,_0x44b294){return _0x3a03d5(_0x44b294);},'mmhBA':'repor'+'t','fQaCv':function(_0x1cad02,_0x12e08a){return _0x1cad02+_0x12e08a;},'RSqpa':function(_0x348b66,_0x514ef7){return _0x348b66+_0x514ef7;},'YskGq':function(_0x4f949b,_0x542628,_0x59d81d){return _0x4f949b(_0x542628,_0x59d81d);},'uufQz':function(_0x53f903){return _0x53f903();},'RYNZo':_0x3e6ad4(0x785),'BbkOa':_0x3e6ad4(0x962),'PGxda':_0x3e6ad4(0x34a)+_0x3e6ad4(0xadc),'yDsDz':function(_0x11b274,_0x376900){return _0x11b274(_0x376900);},'YIMZe':'box-s'+_0x3e6ad4(0x810)+':0\x2010'+_0x3e6ad4(0x402)+'px\x20-1'+_0x3e6ad4(0x6de)+_0x3e6ad4(0x51f)+_0x3e6ad4(0x307)+_0x3e6ad4(0x20b)+':none'+';-web'+_0x3e6ad4(0x6eb)+_0x3e6ad4(0x307)+_0x3e6ad4(0x20b)+':none'+';','qPUMS':function(_0x10fe68,_0x728d21){return _0x10fe68+_0x728d21;},'GKxsN':function(_0x1eedd2,_0x246246){return _0x1eedd2+_0x246246;},'wWSHL':function(_0x4ff575,_0x56f408){return _0x4ff575+_0x56f408;},'OTsri':function(_0x5175ac,_0xbe8b58){return _0x5175ac+_0xbe8b58;},'QcmQT':_0x3e6ad4(0xb85)+'on\x20da'+_0x3e6ad4(0x5a8)+_0x3e6ad4(0x821)+'style'+'=\x22bac'+_0x3e6ad4(0x69b)+'nd:tr'+_0x3e6ad4(0x53c)+'rent;'+_0x3e6ad4(0x526)+_0x3e6ad4(0x8e9)+_0x3e6ad4(0x2d1)+'d\x20rgb'+_0x3e6ad4(0x1dc)+_0x3e6ad4(0x502)+'177,.'+'45);','RFYse':_0x3e6ad4(0xb0c),'iiwVk':_0x3e6ad4(0x8f8)+_0x3e6ad4(0x114)+_0x3e6ad4(0x95d)+'v\x22\x20st'+_0x3e6ad4(0x7c1)+'color'+_0x3e6ad4(0x8e6)+'9c9;m'+_0x3e6ad4(0xaf3)+'dth:3'+_0x3e6ad4(0x615)+_0x3e6ad4(0xac8)+'</spa'+'n>','AilsN':'<butt'+_0x3e6ad4(0x587)+'ta-a='+_0x3e6ad4(0x435)+_0x3e6ad4(0x875)+'le=\x22b'+_0x3e6ad4(0xb13)+_0x3e6ad4(0x4d8)+_0x3e6ad4(0xb02)+_0x3e6ad4(0xc9)+_0x3e6ad4(0xaf7)+_0x3e6ad4(0x1ab)+'px\x20so'+'lid\x20r'+_0x3e6ad4(0x879)+'55,14'+_0x3e6ad4(0xb6c)+_0x3e6ad4(0x170)+';','MqoDV':'color'+_0x3e6ad4(0x373)+_0x3e6ad4(0x6d4)+_0x3e6ad4(0x72d)+_0x3e6ad4(0x863)+_0x3e6ad4(0x131)+'x;pad'+'ding:'+'2px\x207'+_0x3e6ad4(0x861)+_0x3e6ad4(0xacb)+_0x3e6ad4(0x59c)+_0x3e6ad4(0x82b)+_0x3e6ad4(0x906)+_0x3e6ad4(0xa26)+_0x3e6ad4(0x888)+'ap</b'+_0x3e6ad4(0x71f)+'>','ZLRQM':_0x3e6ad4(0xb85)+'on\x20da'+_0x3e6ad4(0x5a8)+_0x3e6ad4(0x386)+'\x22\x20sty'+_0x3e6ad4(0x91e)+'argin'+_0x3e6ad4(0x3f1)+_0x3e6ad4(0x9e)+_0x3e6ad4(0x41c)+'groun'+'d:tra'+'nspar'+_0x3e6ad4(0xbe4)+'order'+_0x3e6ad4(0x224)+_0x3e6ad4(0x35b)+'\x20rgba'+'(255,'+_0x3e6ad4(0x547)+_0x3e6ad4(0x76e)+_0x3e6ad4(0xa87),'vSJIe':_0x3e6ad4(0x4e3)+':#f7e'+'ef5;b'+_0x3e6ad4(0x72d)+'-radi'+_0x3e6ad4(0x131)+_0x3e6ad4(0x6f0)+_0x3e6ad4(0x83d)+_0x3e6ad4(0x886)+'px;cu'+_0x3e6ad4(0xacb)+_0x3e6ad4(0x59c)+_0x3e6ad4(0x82b)+'nt:in'+'herit'+_0x3e6ad4(0x68c)+_0x3e6ad4(0x137)+_0x3e6ad4(0x4ed),'OmhkV':function(_0x4cd5db,_0x3593d2){return _0x4cd5db(_0x3593d2);},'uoWUk':_0x3e6ad4(0x240),'rcmWX':function(_0x57f3e8,_0x3f84ad){return _0x57f3e8(_0x3f84ad);},'hQMkd':function(_0x22295f,_0x27db06){return _0x22295f(_0x27db06);},'vabYo':_0x3e6ad4(0xbd9)+_0x3e6ad4(0x231)+_0x3e6ad4(0x1af)+_0x3e6ad4(0x65d)+'HUD\x20d'+'isabl'+'ed','WVQLw':'YSiKr','OGFpK':'#2a0f'+'1b','cpTJL':'sakur'+_0x3e6ad4(0xabe)+_0x3e6ad4(0xb99)+'s','SwSkC':_0x3e6ad4(0x8b2),'KBDsL':function(_0xb5541b,_0x4bc426){return _0xb5541b===_0x4bc426;},'qtOaz':function(_0x331e67,_0x26fcee){return _0x331e67(_0x26fcee);},'okNXO':'GObqj','iMLOx':function(_0xc818e9,_0x4d278a){return _0xc818e9/_0x4d278a;},'aCPff':_0x3e6ad4(0x143)+'m','ZvBZS':function(_0x31eeaa,_0x2da823){return _0x31eeaa+_0x2da823;},'KPZqv':function(_0x2c2119,_0xe96b18){return _0x2c2119+_0xe96b18;},'JaLmj':'\x20\x20wri'+_0x3e6ad4(0x82d),'VSQSA':function(_0x4c91df,_0x367cd5){return _0x4c91df>_0x367cd5;},'wNdIo':function(_0x26e101,_0x340cea){return _0x26e101+_0x340cea;},'OHTTC':_0x3e6ad4(0x2f6),'hMHfa':_0x3e6ad4(0x4f3)+'\x20','vqrvh':function(_0x5243ae,_0x42ad68){return _0x5243ae>_0x42ad68;},'AAIxc':'#8d7a'+'99','dcYKe':function(_0x2d76a8,_0x405915,_0x4e3e6f){return _0x2d76a8(_0x405915,_0x4e3e6f);},'uJxzU':_0x3e6ad4(0xb41),'XdFJI':function(_0x1795a1,_0x37601c,_0x5dface){return _0x1795a1(_0x37601c,_0x5dface);},'AJCfX':function(_0x1a13c8,_0x1bc588){return _0x1a13c8+_0x1bc588;},'iZloK':function(_0x57d859,_0x179715){return _0x57d859===_0x179715;},'AqxUE':'Inser'+'t','EqmVo':function(_0x339351,_0xb9a729){return _0x339351===_0xb9a729;},'yzhRk':function(_0x1ebdc4,_0x39dae6){return _0x1ebdc4*_0x39dae6;},'avBTO':_0x3e6ad4(0x203),'PstAu':function(_0x21be63,_0x4fbfc2){return _0x21be63>>>_0x4fbfc2;},'bMHJU':function(_0x3ca3ab,_0xcc109b){return _0x3ca3ab+_0xcc109b;},'nUFyw':function(_0xe6a14,_0x543f55,_0x27fbd0,_0x47bcb6){return _0xe6a14(_0x543f55,_0x27fbd0,_0x47bcb6);},'ILnhd':function(_0x4c6eba,_0x41d477,_0x67d037){return _0x4c6eba(_0x41d477,_0x67d037);},'HjvEW':function(_0x16e563,_0x39eb24){return _0x16e563+_0x39eb24;},'vAMTa':function(_0x197cd5,_0x18bb99,_0x4b7aec){return _0x197cd5(_0x18bb99,_0x4b7aec);},'ORhJd':function(_0x43e0ca){return _0x43e0ca();},'Dobwg':function(_0x516e58){return _0x516e58();},'ZmFkB':function(_0x3f5b93,_0x3d2fc7){return _0x3f5b93===_0x3d2fc7;},'Hzwsv':'buydy','vwsXj':function(_0x2d092d,_0x1d3ef4){return _0x2d092d(_0x1d3ef4);},'bvXqn':function(_0x509862,_0x70b034){return _0x509862>_0x70b034;},'qVSEY':function(_0x3382c0,_0x30a879){return _0x3382c0<_0x30a879;},'FTavp':function(_0x353651,_0xdfa768){return _0x353651+_0xdfa768;},'NmFJX':function(_0x188655,_0x5aa03e){return _0x188655-_0x5aa03e;},'knNnw':function(_0x2997db,_0x528d0f){return _0x2997db-_0x528d0f;},'paCGq':'BThyj','VHjaM':function(_0x466cd5,_0x14ed5b){return _0x466cd5<_0x14ed5b;},'ogCIR':'LnQNJ','lRHqB':function(_0x37dffb,_0x16e35d){return _0x37dffb-_0x16e35d;},'QGEIH':function(_0x3e6d06,_0x302611){return _0x3e6d06+_0x302611;},'YWcKz':function(_0x301208,_0x2bc8e0){return _0x301208+_0x2bc8e0;},'mKeck':_0x3e6ad4(0x7f7),'Nwvpr':'(this'+',\x20Met'+_0x3e6ad4(0x744)+_0x3e6ad4(0x894)+_0x3e6ad4(0x13d)+_0x3e6ad4(0x4fb)+'es\x20no'+'t\x20mat'+_0x3e6ad4(0xa00)+_0x3e6ad4(0xa94)+_0x3e6ad4(0x165),'nPfVN':function(_0x2d9a27){return _0x2d9a27();},'VeGVO':_0x3e6ad4(0x134),'bZTIm':_0x3e6ad4(0x99a),'cbirs':_0x3e6ad4(0x403)+_0x3e6ad4(0x452)+_0x3e6ad4(0x7ae)+_0x3e6ad4(0x575),'yiHnc':function(_0x2f7688,_0x54d2ec){return _0x2f7688+_0x54d2ec;},'GrcHx':_0x3e6ad4(0x28d)+'float'+'s\x20unr'+'eadab'+'le','FCHlm':function(_0x4f934a,_0x2b8640){return _0x4f934a<_0x2b8640;},'paYag':function(_0xc08704,_0x31cb7a){return _0xc08704>_0x31cb7a;},'tMhBz':function(_0x496143,_0x38893c){return _0x496143+_0x38893c;},'fGuKb':_0x3e6ad4(0x7c8)+'\x20','uqWoP':_0x3e6ad4(0x4a1)+'of\x20ra'+_0x3e6ad4(0x948),'OViJB':function(_0x46e7f1,_0xc62801){return _0x46e7f1*_0xc62801;},'kluAT':function(_0x50a59f,_0x588cca){return _0x50a59f*_0x588cca;},'OCiwV':function(_0x5dc340,_0x43ef5e){return _0x5dc340-_0x43ef5e;},'WqWUz':function(_0x186f56,_0x437fcb){return _0x186f56*_0x437fcb;},'edWyu':function(_0x2ee8ef,_0x53df39){return _0x2ee8ef+_0x53df39;},'olvwm':_0x3e6ad4(0x7c9)+_0x3e6ad4(0x197)+'orkSy'+'nc','UYEcq':'Healt'+_0x3e6ad4(0x954)+'pt','jrKMf':function(_0x2d3d1a,_0x170778){return _0x2d3d1a!==_0x170778;},'dYhcP':'typPL','aTfUh':function(_0x1119e6,_0x10473f){return _0x1119e6!=_0x10473f;},'lXHBD':function(_0x1c0add,_0x2a3435,_0xc211e9){return _0x1c0add(_0x2a3435,_0xc211e9);},'DvnCe':function(_0x9c3fe9,_0x301ce1){return _0x9c3fe9+_0x301ce1;},'Pjsoq':_0x3e6ad4(0xbdc)+'rd','Vwtwg':function(_0x96df58,_0x41a676,_0x5b5578){return _0x96df58(_0x41a676,_0x5b5578);},'ZpzFh':function(_0x2412f1,_0x378ae0){return _0x2412f1+_0x378ae0;},'hkxho':function(_0x4e50e6,_0x476ca9){return _0x4e50e6+_0x476ca9;},'RzFsk':'sk-mb'+_0x3e6ad4(0x98),'MwPtR':'aria-'+_0x3e6ad4(0x9eb)+'ed','zquru':function(_0x2ce77c){return _0x2ce77c();},'NbZPY':_0x3e6ad4(0x892),'DUwsl':'butto'+'n','sIqhX':_0x3e6ad4(0x216)+_0x3e6ad4(0x97a),'KMfGY':function(_0x10c1a7,_0xbeacae){return _0x10c1a7(_0xbeacae);},'sTlIS':function(_0xa16e55,_0x20a511){return _0xa16e55===_0x20a511;},'tseRB':'ncymD','sLjyd':function(_0x2dbbf2,_0x2813b1,_0x263025){return _0x2dbbf2(_0x2813b1,_0x263025);},'TeZeN':_0x3e6ad4(0xa15)+'nge','abFqX':_0x3e6ad4(0x487),'lCshb':function(_0x4603ac,_0x598dfc,_0x45c1f3){return _0x4603ac(_0x598dfc,_0x45c1f3);},'pQeIG':'sk-la'+'bel','ytpkY':function(_0x57ca48,_0x2ac3c6){return _0x57ca48+_0x2ac3c6;},'AfMTU':function(_0x5b72a1,_0x5d478f){return _0x5b72a1/_0x5d478f;},'ZLzos':function(_0x2aa83d,_0x56845e){return _0x2aa83d+_0x56845e;},'ofwbW':function(_0x9eb682,_0x598ceb){return _0x9eb682<_0x598ceb;},'IIpPT':_0x3e6ad4(0x818),'TWjQW':_0x3e6ad4(0x5b8),'wwHqe':_0x3e6ad4(0x303),'WKvNx':_0x3e6ad4(0xa93),'eVDMn':function(_0x3ab2f6){return _0x3ab2f6();},'UPpGw':_0x3e6ad4(0x761),'WNcmO':_0x3e6ad4(0x123),'ituKn':'Clipb'+'oard\x20'+_0x3e6ad4(0x792)+_0x3e6ad4(0x94e)+_0x3e6ad4(0x41b)+_0x3e6ad4(0x6c9)+_0x3e6ad4(0x51b)+_0x3e6ad4(0x89d)+'ad','KrwtV':function(_0x56f761,_0x2f92e0){return _0x56f761|_0x2f92e0;},'ZBgFT':function(_0x2040ac,_0x20bb24,_0x2bd913){return _0x2040ac(_0x20bb24,_0x2bd913);},'iMcSq':function(_0x5691c1,_0x1bc9f6){return _0x5691c1!==_0x1bc9f6;},'lJaXw':_0x3e6ad4(0xa34),'ChKYL':function(_0x4b7d62,_0x4efd26){return _0x4b7d62===_0x4efd26;},'LcxNJ':_0x3e6ad4(0x847),'jrxpa':_0x3e6ad4(0xaee)+_0x3e6ad4(0x746),'RaRHz':function(_0x30ac3e,_0xd805cb){return _0x30ac3e+_0xd805cb;},'cMVWQ':function(_0x53b199,_0x2b734c){return _0x53b199+_0x2b734c;},'tdHzR':function(_0x3a95a8,_0xb58cf4){return _0x3a95a8+_0xb58cf4;},'QdbkY':_0x3e6ad4(0xad4),'ljFSf':'\x20fiel'+_0x3e6ad4(0x593),'EnyoS':'Multi'+_0x3e6ad4(0x604)+'\x20move'+_0x3e6ad4(0x9c3)+_0x3e6ad4(0xa0b)+'\x20fiel'+_0x3e6ad4(0x9e0)+'ly.\x20H'+_0x3e6ad4(0x729)+',\x20ste'+'p\x20and'+'\x20jump'+_0x3e6ad4(0x290)+'refus'+_0x3e6ad4(0x633),'Fklxw':function(_0x283058,_0x64a4eb){return _0x283058(_0x64a4eb);},'lUCoY':function(_0x34cd71,_0x1c65d0,_0xf4555b,_0x25fc7c){return _0x34cd71(_0x1c65d0,_0xf4555b,_0x25fc7c);},'jKSns':_0x3e6ad4(0xb3b)+_0x3e6ad4(0x47b),'uxKyq':_0x3e6ad4(0xbc2)+'n','SESTp':_0x3e6ad4(0x678)+'hot\x20n'+_0x3e6ad4(0x802)+'9)','LdVCJ':'F9\x20\x20s'+_0x3e6ad4(0x401)+_0x3e6ad4(0x7fe)+_0x3e6ad4(0x9de)+_0x3e6ad4(0xa0b)+'\x20on/o'+'ff\x0aF8'+_0x3e6ad4(0x31e)+_0x3e6ad4(0x811)+'tor\x20+'+_0x3e6ad4(0x2ef)+_0x3e6ad4(0x209)+'\x20\x20fie'+_0x3e6ad4(0x446)+_0x3e6ad4(0xb3c)+'\x0aInse'+_0x3e6ad4(0xadf)+_0x3e6ad4(0xbe3)+'enu','HvomX':'Enabl'+'ed','nmFuG':'sk-md'+_0x3e6ad4(0x72c),'HGsYX':function(_0x3f67b5,_0x2416a8,_0x55b591,_0x5d006e,_0x3b8ce1,_0x5828be){return _0x3f67b5(_0x2416a8,_0x55b591,_0x5d006e,_0x3b8ce1,_0x5828be);},'QgYVi':_0x3e6ad4(0xa40),'KnyQn':function(_0x3333a0,_0x140939,_0x37029d){return _0x3333a0(_0x140939,_0x37029d);},'AIvlD':function(_0x2d4f6c,_0x598584){return _0x2d4f6c+_0x598584;},'zsnUk':_0x3e6ad4(0x28d)+'angle'+_0x3e6ad4(0xa20)+_0x3e6ad4(0x5d5)+_0x3e6ad4(0xba2),'dTXgD':function(_0x21bbe8,_0x3478d2){return _0x21bbe8+_0x3478d2;},'xAlbp':_0x3e6ad4(0x9a6)+'\x20of\x20v'+'iew\x20i'+'s\x20','kMVgL':_0x3e6ad4(0x808)+'\x20]\x20al'+_0x3e6ad4(0x538)+_0x3e6ad4(0xb8a)+'is','Uyvuk':'fov\x20b'+_0x3e6ad4(0xb49)+'o\x2075,'+'\x20offs'+_0x3e6ad4(0x584)+_0x3e6ad4(0x639),'OBBeY':_0x3e6ad4(0xaf4)+'te','WRCSx':function(_0xc332a9,_0x5bf1bc){return _0xc332a9+_0x5bf1bc;},'SDQfs':_0x3e6ad4(0x37a)+'Look\x20','BQsBp':_0x3e6ad4(0xb79)+_0x3e6ad4(0x5e7)+'ok\x20ye'+'t','eSlBT':_0x3e6ad4(0xb3e)+'r','huZEv':function(_0x468b06,_0x4fa8db){return _0x468b06+_0x4fa8db;},'Kztnv':function(_0x7338de,_0x4798c4){return _0x7338de+_0x4798c4;},'CbZja':_0x3e6ad4(0x208)+'from\x20'+'Mouse'+_0x3e6ad4(0x140)+'gette'+_0x3e6ad4(0x473)+_0x3e6ad4(0x1ff),'iCEnh':'GUESS'+_0x3e6ad4(0xc5)+'rom\x20s'+'truct'+'\x20offs'+'ets\x20+'+_0x3e6ad4(0x2af)+'and\x20+'+_0x3e6ad4(0x16b)+_0x3e6ad4(0xaf)+_0x3e6ad4(0xb80)+'gette'+_0x3e6ad4(0x2cc)+_0x3e6ad4(0x431)+'ked\x20b'+_0x3e6ad4(0xb8)+_0x3e6ad4(0xad5)+'t\x20fir'+'ed','iLsMP':function(_0x5ead50,_0x3fd6f8){return _0x5ead50===_0x3fd6f8;},'SWAHt':_0x3e6ad4(0x6c7)+'s','yqnJh':_0x3e6ad4(0xfd),'HcHon':'appli'+_0x3e6ad4(0x432)+_0x3e6ad4(0x7b0)+_0x3e6ad4(0x7d7),'dLDvx':function(_0x8d8760,_0x30cb94){return _0x8d8760+_0x30cb94;},'daRDw':'from\x20'+_0x3e6ad4(0x294)+_0x3e6ad4(0x9db)+_0x3e6ad4(0x96e),'PdIof':function(_0x490392,_0xaab2aa){return _0x490392+_0xaab2aa;},'wgEZz':function(_0x2b61b2,_0x4ad4e8){return _0x2b61b2/_0x4ad4e8;},'RoSfQ':function(_0x5b19a4,_0x27b4b5){return _0x5b19a4+_0x27b4b5;},'awPrL':function(_0x167c27,_0x59b751){return _0x167c27<_0x59b751;},'STscO':'span','XCXPw':_0x3e6ad4(0x7af)+'l','YOrgH':function(_0x1c13a3,_0x5ee52e){return _0x1c13a3(_0x5ee52e);},'RUHlB':_0x3e6ad4(0x4a8)+_0x3e6ad4(0x2ca),'fJavK':function(_0x40e043,_0xe4b9f8){return _0x40e043+_0xe4b9f8;},'AkhRy':_0x3e6ad4(0x850)+'speed','EmoAz':function(_0x363fe3,_0x162d17,_0x345c24,_0x23e529){return _0x363fe3(_0x162d17,_0x345c24,_0x23e529);},'PwPuJ':'0x40','uzfje':function(_0x3661d7,_0x48ab70,_0x290b7f,_0x59401b){return _0x3661d7(_0x48ab70,_0x290b7f,_0x59401b);},'xfyPc':function(_0x30f5da,_0xfad2a){return _0x30f5da<_0xfad2a;},'jFWOL':function(_0x5c0358,_0x3c4b7a){return _0x5c0358(_0x3c4b7a);},'afKlo':_0x3e6ad4(0x521),'AceAZ':function(_0x17978c,_0x24d03c){return _0x17978c(_0x24d03c);},'SSJRk':'log','asrFz':function(_0x373535,_0x55d998,_0x39d500){return _0x373535(_0x55d998,_0x39d500);},'Fxrze':'Copy\x20'+_0x3e6ad4(0x876)+'to\x20cl'+'ipboa'+'rd','DIwgr':function(_0xc61fb3,_0x1f1d21,_0x5421f2,_0x5f2029){return _0xc61fb3(_0x1f1d21,_0x5421f2,_0x5f2029);},'jiwbD':'\x20acti'+'ve','keKPj':'grab','htcZe':_0x3e6ad4(0x326)+'ing','qEEaB':function(_0x1bc079,_0x1a19e1){return _0x1bc079===_0x1a19e1;},'KvdbG':_0x3e6ad4(0xb86),'rGDlX':function(_0x397781,_0x1f0d76){return _0x397781-_0x1f0d76;},'LqJKp':_0x3e6ad4(0x7ea),'jRghb':function(_0x139cd4,_0x1c692b){return _0x139cd4-_0x1c692b;},'OaUGE':function(_0x7c9a18,_0x12b192){return _0x7c9a18===_0x12b192;},'atzoi':_0x3e6ad4(0x718)+'move','dDDoc':'Svomj','VwxtM':'sakur'+_0x3e6ad4(0xaec)+_0x3e6ad4(0x195)+'t','MZAqx':'mn-si'+'de','rryWk':_0x3e6ad4(0xa8e)+'go','qdyTC':'mn-ma'+'in','eZeyn':'mn-su'+'b','FrZsi':'start'+'ing…','JFYdU':function(_0x45c0ad,_0x325753,_0x5ae1c5,_0x1aa17e){return _0x45c0ad(_0x325753,_0x5ae1c5,_0x1aa17e);},'UTrfX':_0x3e6ad4(0x286)+'viewB'+'ox=\x220'+_0x3e6ad4(0x14f)+_0x3e6ad4(0x222)+_0x3e6ad4(0xa05)+'\x20d=\x22M'+'6\x206l1'+_0x3e6ad4(0x329)+_0x3e6ad4(0x457)+'6\x2018\x22'+'/></s'+_0x3e6ad4(0x5f0),'qumjR':_0x3e6ad4(0x939)+'l>','qutEr':function(_0x455040,_0x2aa43a){return _0x455040(_0x2aa43a);},'CVrje':'cEymg','eBxwd':_0x3e6ad4(0x33e),'uEjCh':'i16','IpDmw':_0x3e6ad4(0xb89)+'b','rHVMv':function(_0x15e7ce,_0xfbd657){return _0x15e7ce===_0xfbd657;},'iQqVj':function(_0xe7cef5,_0x55ed78){return _0xe7cef5!==_0x55ed78;},'uccIc':'NxRFv','CgHgk':function(_0x5429ae,_0xb2d4f4){return _0x5429ae<_0xb2d4f4;},'hTMCH':function(_0x242e67,_0x3e3492){return _0x242e67===_0x3e3492;},'yLaUz':_0x3e6ad4(0x57d)+'nel','DINmk':_0x3e6ad4(0x943)+'n','dcEwH':'tjWIt','BcKlv':function(_0x40beef,_0x2ff3d4){return _0x40beef/_0x2ff3d4;},'WLxYU':function(_0x1d8cd6,_0x462c5c){return _0x1d8cd6*_0x462c5c;},'kiTmd':function(_0x1b4724,_0x34741b){return _0x1b4724+_0x34741b;},'aPEHm':_0x3e6ad4(0x6f3)+_0x3e6ad4(0xd2),'XQcuE':function(_0x205d62,_0x222be5){return _0x205d62<_0x222be5;},'WOJxw':function(_0x264c75,_0x29958a){return _0x264c75+_0x29958a;},'XpxOA':function(_0x4214bf,_0x286c69){return _0x4214bf+_0x286c69;},'wwWkX':'\x20MB\x20@'+'\x20','fhMCN':_0x3e6ad4(0x91a)+'he\x20li'+_0x3e6ad4(0x227)+_0x3e6ad4(0x5f6),'pSUqI':function(_0xa6b654,_0x3e5624){return _0xa6b654+_0x3e5624;},'GjGUz':function(_0x2c16b5,_0x5072b7){return _0x2c16b5+_0x5072b7;},'ZxfKB':_0x3e6ad4(0x4e2)+'ntrol'+_0x3e6ad4(0x914)+'x2E4','SxVZO':_0x3e6ad4(0x107)+'h','qNwDt':_0x3e6ad4(0xae8),'gKRuB':_0x3e6ad4(0x2b6),'iZGKb':function(_0x3d6708,_0x332e06){return _0x3d6708(_0x332e06);},'WzdSd':function(_0x300e7d,_0x115935){return _0x300e7d===_0x115935;},'ikSJn':function(_0x287005,_0x5dd238){return _0x287005===_0x5dd238;},'QhUDi':function(_0x3217be,_0x1f98d4){return _0x3217be===_0x1f98d4;},'HIshN':_0x3e6ad4(0x1b2),'MNzgO':function(_0x14027f,_0x4502fa){return _0x14027f<_0x4502fa;},'htRKa':function(_0x22af47,_0x30a0be){return _0x22af47<=_0x30a0be;},'AlEEA':function(_0x2844e8,_0x12dc08){return _0x2844e8*_0x12dc08;},'ANcdB':function(_0x32527e,_0x59f2c5){return _0x32527e*_0x59f2c5;},'vwHHk':_0x3e6ad4(0x6d9),'NWwoK':_0x3e6ad4(0x955),'swkFK':function(_0xe7f17e,_0xda0d37){return _0xe7f17e!==_0xda0d37;},'yfrSn':function(_0x57b698,_0x5debc7,_0x22c6c1,_0x2c1b5a){return _0x57b698(_0x5debc7,_0x22c6c1,_0x2c1b5a);},'zIyxt':function(_0x1b7994,_0x2bbbaa,_0x39a16e,_0x33134b){return _0x1b7994(_0x2bbbaa,_0x39a16e,_0x33134b);},'TSYpP':function(_0xda9ea8,_0x1b4b15){return _0xda9ea8-_0x1b4b15;},'tzHwU':function(_0x4df9bb,_0x18187b){return _0x4df9bb+_0x18187b;},'OOmsy':function(_0x476a35,_0x3e017a){return _0x476a35*_0x3e017a;},'uQfVm':_0x3e6ad4(0x6f9),'zzURq':'5|1|9'+_0x3e6ad4(0x938)+'7|8|6'+_0x3e6ad4(0x122),'pXfzd':'<canv'+'as\x20id'+_0x3e6ad4(0x18d)+_0x3e6ad4(0x590)+'sp-cv'+_0x3e6ad4(0x8af)+'th=\x221'+'60\x22\x20h'+_0x3e6ad4(0x729)+'=\x22160'+_0x3e6ad4(0x875)+'le=\x22d'+_0x3e6ad4(0x3d1)+_0x3e6ad4(0xa1a)+_0x3e6ad4(0x4f0)+_0x3e6ad4(0x110)+'as>','FwHWx':function(_0x3a1acf,_0x245e53){return _0x3a1acf+_0x245e53;},'YmhPB':'posit'+'ion:f'+_0x3e6ad4(0x4de)+'right'+_0x3e6ad4(0xa19)+';top:'+_0x3e6ad4(0x2be)+'z-ind'+_0x3e6ad4(0x349)+_0x3e6ad4(0x202)+'646;p'+_0x3e6ad4(0x4ae)+_0x3e6ad4(0x9f8)+'nts:n'+_0x3e6ad4(0x704),'fuQuw':_0x3e6ad4(0x9a3)+'round'+_0x3e6ad4(0x71d)+'(21,1'+_0x3e6ad4(0x67e)+_0x3e6ad4(0x874)+_0x3e6ad4(0x526)+_0x3e6ad4(0x8e9)+_0x3e6ad4(0x2d1)+_0x3e6ad4(0xa2c)+_0x3e6ad4(0x1dc)+',143,'+'177,.'+_0x3e6ad4(0x23f)+'rder-'+'radiu'+_0x3e6ad4(0x2f5)+'x;','ttTBb':_0x3e6ad4(0xc0c)+_0x3e6ad4(0x17f)+_0x3e6ad4(0x27c)+'t:10p'+_0x3e6ad4(0x117)+_0x3e6ad4(0x3ce)+_0x3e6ad4(0xadd)+'ace,C'+_0x3e6ad4(0x799)+'as,mo'+_0x3e6ad4(0xb97)+'ce;co'+_0x3e6ad4(0x926)+'bda9c'+'9;','jKPed':'lUkKM','fCtwf':'canva'+'s','jneNQ':_0x3e6ad4(0x7e6)+'ion:f'+_0x3e6ad4(0x4de)+_0x3e6ad4(0x750)+_0x3e6ad4(0x7a7)+_0x3e6ad4(0x932)+_0x3e6ad4(0x467)+_0x3e6ad4(0x966)+'48364'+'5;poi'+_0x3e6ad4(0x756)+_0x3e6ad4(0x4c3)+_0x3e6ad4(0xb7d)+'e;','RwzWV':function(_0x39e4a2,_0xe66e87){return _0x39e4a2!==_0xe66e87;},'mrICy':'no\x20gr'+_0x3e6ad4(0x8bc)+'f\x20','FBFjY':_0x3e6ad4(0x849),'JRpGO':function(_0x2aa7b4,_0x1927e8){return _0x2aa7b4(_0x1927e8);},'gxxME':'jdpFw','rHscG':function(_0x786b6,_0x3f8bea){return _0x786b6===_0x3f8bea;},'cttiJ':function(_0x4b40ca,_0x354475){return _0x4b40ca-_0x354475;},'iTrQv':function(_0x1a87eb,_0x1d1569,_0x16b294,_0x1baae8,_0x404927){return _0x1a87eb(_0x1d1569,_0x16b294,_0x1baae8,_0x404927);},'HUWGC':function(_0xf62737,_0x50a6e9){return _0xf62737||_0x50a6e9;},'kfRiB':'rgba('+_0x3e6ad4(0xb2f)+_0x3e6ad4(0x136)+_0x3e6ad4(0x6ca),'pdUQI':function(_0x543d0c,_0x3600bf){return _0x543d0c/_0x3600bf;},'OmYdk':_0x3e6ad4(0x897),'rQcSs':'rgba('+_0x3e6ad4(0x933)+_0x3e6ad4(0x75f)+_0x3e6ad4(0xa66)+')','MqbbX':_0x3e6ad4(0xab6)+_0x3e6ad4(0xa2e)+'nospa'+_0x3e6ad4(0x395)+'nsola'+'s,mon'+_0x3e6ad4(0x9d3)+'e','LigcZ':function(_0x247c88,_0x5b59f2){return _0x247c88+_0x5b59f2;},'NVGAR':function(_0x22ca1f){return _0x22ca1f();},'Iagur':_0x3e6ad4(0x125),'JrKZR':'sk-sl'+_0x3e6ad4(0x739),'GrHdS':function(_0x136284,_0x532beb){return _0x136284(_0x532beb);},'mkrKA':function(_0x590716,_0x20af76){return _0x590716<=_0x20af76;},'OSmPY':function(_0x22e80f,_0xcbdf06){return _0x22e80f/_0xcbdf06;},'cxLDm':function(_0x54bea0,_0x519d8b){return _0x54bea0/_0x519d8b;},'viHdD':_0x3e6ad4(0x1ea),'hcXVs':'kTuOh','LfLFW':_0x3e6ad4(0xb0f),'WMnmD':function(_0x52ca86,_0x8cf3b4,_0x1da3d5){return _0x52ca86(_0x8cf3b4,_0x1da3d5);},'BoEkp':'krthc','zqAgA':function(_0xfd6504,_0x478878){return _0xfd6504+_0x478878;},'hqHRN':function(_0x43fe49,_0x4f6a67){return _0x43fe49*_0x4f6a67;},'rkVxN':function(_0x536c32,_0x48bf4){return _0x536c32/_0x48bf4;},'RlBIy':_0x3e6ad4(0x8d3)+'74','HLmww':'#7ee0'+'a8','UCxNo':function(_0x35339d,_0x4a1cce){return _0x35339d+_0x4a1cce;},'jdlhx':function(_0x22b6ed,_0x5f35f2){return _0x22b6ed+_0x5f35f2;},'MQquI':_0x3e6ad4(0x7da)+'v\x20','uYDql':_0x3e6ad4(0xbb7)+'am','MDyMz':'Kxfqd','dLldA':function(_0x40d61d,_0x260911,_0x3a37c2){return _0x40d61d(_0x260911,_0x3a37c2);},'aBjZD':';font'+'-weig'+'ht:70'+'0','Bhtvb':'nZpZA','exgat':_0x3e6ad4(0x870),'iIRwS':function(_0x414455){return _0x414455();},'FUHXs':'tLacR','bsYgD':function(_0x5e932b,_0x3124e7){return _0x5e932b(_0x3124e7);},'vJYAF':_0x3e6ad4(0xa78),'jTXDJ':_0x3e6ad4(0x3a4)+'id=\x22s'+_0x3e6ad4(0x760)+_0x3e6ad4(0x726)+'lg\x22\x20s'+_0x3e6ad4(0x58d)+_0x3e6ad4(0x258)+'-alig'+_0x3e6ad4(0xcb)+'ter\x22>'+'</div'+'>','Opkeb':'#saku'+_0x3e6ad4(0x512)+_0x3e6ad4(0x656),'nboMw':function(_0x40c54f){return _0x40c54f();},'tlvas':function(_0x564f80,_0x5e0afa){return _0x564f80===_0x5e0afa;},'ZZHRf':'LERvp','pZWEj':_0x3e6ad4(0x1f1),'falvm':_0x3e6ad4(0x287),'Rcfbs':function(_0x436ec6,_0x48f8ac){return _0x436ec6/_0x48f8ac;},'qCyoC':_0x3e6ad4(0x2af)+'(gues'+'s)','CfxLN':_0x3e6ad4(0x25a),'KQaWM':_0x3e6ad4(0xbdc)+'rd-he'+'ad','hIVyh':function(_0x48dc9a,_0x545428,_0x59f3db,_0xe33578){return _0x48dc9a(_0x545428,_0x59f3db,_0xe33578);},'DTUmJ':'sk-ca'+'rd-ti'+'tle','aPiAV':function(_0x5be5d5,_0x552f7d){return _0x5be5d5+_0x552f7d;},'RieqN':function(_0x2ca36b,_0x39f690){return _0x2ca36b+_0x39f690;},'qSGRo':function(_0x39aa00,_0x5f3f7e){return _0x39aa00(_0x5f3f7e);},'CMCuv':function(_0x405047,_0xd072a7){return _0x405047(_0xd072a7);},'ErAtr':function(_0x2b0c40,_0xfc8f0f){return _0x2b0c40-_0xfc8f0f;},'NCiob':function(_0x262e00){return _0x262e00();},'kGEvK':function(_0x1dfbc0){return _0x1dfbc0();},'PCmgN':_0x3e6ad4(0x4a2)+_0x3e6ad4(0x5c2)+'led:\x20','eSCON':_0x3e6ad4(0x4a3)+_0x3e6ad4(0x8e8)+_0x3e6ad4(0x79c)+'led:\x20','YcYVr':function(_0x17c1ae,_0xbea2d1){return _0x17c1ae>_0xbea2d1;},'THLmg':function(_0xb62579,_0x46e597){return _0xb62579!==_0x46e597;},'TsBtz':'lAObu','toRXX':function(_0x4dd714,_0x37a933){return _0x4dd714+_0x37a933;},'WYFCK':_0x3e6ad4(0x47d)+'ct(s)'+_0x3e6ad4(0x333)+'read\x20'+'0\x20fie'+_0x3e6ad4(0x1fa),'lxVwp':_0x3e6ad4(0x1bd)+_0x3e6ad4(0x2f1),'CJriY':'No\x20re'+_0x3e6ad4(0x4fc)+'iled,'+_0x3e6ad4(0x6bd)+_0x3e6ad4(0x29a)+_0x3e6ad4(0x9b9)+'t\x20was'+_0x3e6ad4(0x25f)+'ped\x20b'+_0x3e6ad4(0x705)+'e.','qTShD':'Sakur'+_0x3e6ad4(0x419)+_0x3e6ad4(0x4c7)+'ipt\x20i'+_0x3e6ad4(0x342)+'permo'+_0x3e6ad4(0x598)+_0x3e6ad4(0xadb)+_0x3e6ad4(0x904)+_0x3e6ad4(0x2cb)+'.','HVtyr':_0x3e6ad4(0x523)+_0x3e6ad4(0x2b2)+_0x3e6ad4(0xbeb)+_0x3e6ad4(0x636)+_0x3e6ad4(0x2de)+'me\x20in'+_0x3e6ad4(0x257)+'e\x20tha'+'n\x20the'+_0x3e6ad4(0x66b)+_0x3e6ad4(0x762)+'w\x20exp'+_0x3e6ad4(0x5ba),'DxLzy':function(_0x463f69,_0x48e7a0){return _0x463f69+_0x48e7a0;},'ltpIB':'\x20(sou'+_0x3e6ad4(0x73b),'nulfm':_0x3e6ad4(0x220)+_0x3e6ad4(0xb5b)+_0x3e6ad4(0x354)+_0x3e6ad4(0x17c)+'exist'+_0x3e6ad4(0x68a)+_0x3e6ad4(0x4f5)+_0x3e6ad4(0x55f)+'not\x20r'+_0x3e6ad4(0xc4)+_0x3e6ad4(0x236)+_0x3e6ad4(0x946),'MPqEt':function(_0x395334,_0x472007){return _0x395334+_0x472007;},'HDjmH':function(_0x26cf0f,_0x2abb19){return _0x26cf0f+_0x2abb19;},'fpmce':_0x3e6ad4(0xb3d)+'\x20inst'+_0x3e6ad4(0x9ac)+'not\x20r'+'esolv'+_0x3e6ad4(0xac2)+_0x3e6ad4(0x124)+_0x3e6ad4(0x20c)+'\x20','sUZkG':_0x3e6ad4(0x881),'MOfKk':_0x3e6ad4(0x6b4)+_0x3e6ad4(0x188)+_0x3e6ad4(0xb1e)+'\x20bloc'+'ked\x20u'+_0x3e6ad4(0x511)+_0x3e6ad4(0x8c3)+_0x3e6ad4(0x9ef)+'ect\x20w'+'ith\x20M'+_0x3e6ad4(0xe9)+_0x3e6ad4(0x2ed)+'U8\x20is'+_0x3e6ad4(0x4b8)+_0x3e6ad4(0x40f)+'.','gcWHE':function(_0x5c423,_0xaabec9){return _0x5c423!==_0xaabec9;},'GvGdw':_0x3e6ad4(0xa3f)+'s\x20wer'+_0x3e6ad4(0xdd)+'n\x20SEE'+'N\x20by\x20'+'UWMK.'+_0x3e6ad4(0x40d)+_0x3e6ad4(0x24f)+_0x3e6ad4(0x6e4)+'\x20','DUaeR':_0x3e6ad4(0xa3f)+_0x3e6ad4(0x574)+_0x3e6ad4(0x7ec)+_0x3e6ad4(0x99f)+_0x3e6ad4(0xbe5)+'\x20docu'+_0x3e6ad4(0x9c3)+_0x3e6ad4(0x96a)+'.','ePxIo':function(_0x4b4039,_0x249612){return _0x4b4039+_0x249612;},'Mattb':_0x3e6ad4(0xa3f)+_0x3e6ad4(0x62f)+_0x3e6ad4(0x8fb)+_0x3e6ad4(0xbaa)+_0x3e6ad4(0x467)+'\x20but\x20'+'appli'+'ed\x20no'+_0x3e6ad4(0x653)+_0x3e6ad4(0x88a)+_0x3e6ad4(0x8b7)+_0x3e6ad4(0x961),'cJCws':_0x3e6ad4(0x75b),'ofcMd':'%c[sa'+_0x3e6ad4(0x231)+_0x3e6ad4(0x129)+_0x3e6ad4(0x990)+_0x3e6ad4(0x7d2)+'rt','qILmf':'lhPcK','ZsGOK':function(_0x2fdc43,_0x83d88e){return _0x2fdc43-_0x83d88e;},'MSQTX':function(_0x5c30cf,_0x2a57a1){return _0x5c30cf(_0x2a57a1);},'bChkr':function(_0xccb5b2,_0x4f3fb8,_0xad3695){return _0xccb5b2(_0x4f3fb8,_0xad3695);},'NESyc':_0x3e6ad4(0xad8),'ZNnuZ':_0x3e6ad4(0x1f4)+'er','WjpRr':'#ff8f'+'b1','IPCIP':_0x3e6ad4(0xab8)+_0x3e6ad4(0x537)+'SKILL'+'WARZ-'+'BEGIN'+'===','bfzsD':_0x3e6ad4(0x6d0)+_0x3e6ad4(0xabe)+_0x3e6ad4(0x44b)+'-hidd'+'en','XOCZA':function(_0x517d91){return _0x517d91();},'vsbHF':_0x3e6ad4(0x7e4)+'ntent'+_0x3e6ad4(0x7eb)+'d','PNYLU':_0x3e6ad4(0x6d0)+_0x3e6ad4(0x596),'mqwzj':'\u008b\u0087\u0087\u0092\u0090'+_0x3e6ad4(0x717)+'\u0094','XFxvA':'\u008d\u0091\u008e\u008a\u008a'+_0x3e6ad4(0x4e6)+'\u0092','LGanj':_0x3e6ad4(0x62a),'OfPch':_0x3e6ad4(0xa5c)+'\u0093\u0090\u0088\u0092\u0090'+'\u0091','hKTfm':_0x3e6ad4(0x24e)+'\u0095\u008a\u0092\u0091\u008b'+'\u0095','dqRNI':'\u0091\u008f\u0088\u0086\u0091'+'\u0092\u0088\u0090\u008c\u0088'+'\u0090','GMNnl':_0x3e6ad4(0x1bc)+_0x3e6ad4(0x2df)+'\u0088','GGwef':'\u0090\u0091\u0091\u0086\u008b'+_0x3e6ad4(0x74a)+'\u0093','zHjYW':_0x3e6ad4(0x1c1)+'\u008a\u0092\u0092\u008a\u0093'+'\u008a','WoTlM':'\u0087\u008c\u0086\u0089\u0090'+_0x3e6ad4(0x845)+'\u0086','FeISg':_0x3e6ad4(0xa92)+_0x3e6ad4(0x38d)+'\u0088','hlOJS':_0x3e6ad4(0x54c)+_0x3e6ad4(0x4e9)+'\u0088','CBUkz':'\u0094\u008d\u0091\u0091\u0090'+'\u008b\u0094\u0093\u0086\u008c'+'\u008a','rrtfo':_0x3e6ad4(0x614)+_0x3e6ad4(0x9a)+'\u008b','OnALc':'\u008c\u0091\u0093\u0095\u0087'+'\u008c\u008a\u0086\u0090\u0087'+'\u0093','IvUNT':_0x3e6ad4(0x736)+_0x3e6ad4(0x513)+'\u0089','CHMrP':'\u008a\u0086\u008a\u008b\u0086'+_0x3e6ad4(0x14e)+'\u008d','LmnXb':_0x3e6ad4(0x344)+'\u0090\u008b\u008d\u008d\u0093'+'\u008e','aCGTN':'bool','tQdMB':_0x3e6ad4(0x22d)+_0x3e6ad4(0x1cd)+'\u008b','fXesV':'\u0088\u0089\u008f\u0091\u0094'+_0x3e6ad4(0x4e7)+'\u0090','ipBIH':_0x3e6ad4(0x417)+_0x3e6ad4(0xb2e)+'\u0094','xPpCX':'\u008a\u008c\u0092\u0092\u0094'+'\u0091\u0089\u0094\u008a\u0092'+'\u0089','FFfww':'\u0087\u0089\u0089\u0090\u0087'+_0x3e6ad4(0x35a)+'\u0094','SiqFi':'\u008d\u0095\u0087\u0093\u0092'+'\u0092\u0094\u0087\u008d\u008c'+'\u008b','MGSwx':'\u0086\u0090\u0092\u0091\u0090'+_0x3e6ad4(0x87e)+'\u008c','LZkDj':'\u0094\u0087\u008b\u008d\u0089'+_0x3e6ad4(0x2f0)+'\u0090','qqyiQ':_0x3e6ad4(0x551)+_0x3e6ad4(0xba7)+'\u008a','Dsmnd':_0x3e6ad4(0x217)+'\u008b\u008e\u008e\u0091\u0086'+'\u0087','CoLTS':_0x3e6ad4(0x2b1)+_0x3e6ad4(0x3fe)+'\u0094','CoVVp':_0x3e6ad4(0x8ae)+_0x3e6ad4(0x26b)+'\u008d','vmvka':_0x3e6ad4(0x831)+_0x3e6ad4(0x9bf)+'\u0094','mOPRO':_0x3e6ad4(0x503)+'\u0092\u008b\u008a\u0087\u008e'+'\u008b','jjOFT':_0x3e6ad4(0x6ed)+_0x3e6ad4(0x2d6)+'\u0091','gxGuE':'\u0089\u0086\u0090\u0088\u008c'+_0x3e6ad4(0x2e5)+'\u008b','IVBNb':'\u0086\u0092\u0092\u008a\u008e'+'\u008e\u0095\u0095\u008c\u008c'+'\u0087','hNUKS':_0x3e6ad4(0xb98)+_0x3e6ad4(0x5f4)+'\u0094','xWbMs':'Updat'+'e','GaNbj':_0x3e6ad4(0x270)+_0x3e6ad4(0xbe7)+'\u0091','MVvMH':_0x3e6ad4(0x3dc)+_0x3e6ad4(0x5d2)+'\u0086','ePrwa':_0x3e6ad4(0xa17)+_0x3e6ad4(0x2bb)+'\u0090','feJaV':'int','WctZj':'\u0087\u0091\u0091\u0090\u0091'+_0x3e6ad4(0x8d7)+'\u0086','szahA':_0x3e6ad4(0x8e0),'eYvcY':_0x3e6ad4(0x84f)+'\u0089\u008c\u008d\u008b\u008f'+'\u0093','YjdCF':_0x3e6ad4(0x971)+_0x3e6ad4(0x631)+'\u0088','YAooN':_0x3e6ad4(0x309)+'rcial'+_0x3e6ad4(0x577)+_0x3e6ad4(0xa58)+_0x3e6ad4(0x18c),'gEpXd':_0x3e6ad4(0x676)+_0x3e6ad4(0x518)+'\u0093','cClYp':_0x3e6ad4(0x26f)+'\u008a\u0088\u0092\u0095\u0094'+'\u0086','zYKgx':_0x3e6ad4(0x807)+'\u0086\u008f\u0095\u0092\u0092'+'\u0092','pukKA':_0x3e6ad4(0x9a2)+'\u0095\u008c\u0087\u0086\u0087'+'\u008b','IKbfk':_0x3e6ad4(0x645)+'\u008e\u008f\u008c\u0088\u0086'+'\u0091','OAeNZ':_0x3e6ad4(0x3ef)+_0x3e6ad4(0xa31)+'\u008f','TTgmw':'\u008c\u0086\u0095\u0091\u008a'+'\u0088\u0094\u008e\u008d\u0093'+'\u008a','aZhFo':_0x3e6ad4(0x55b)+'\u008e\u008d\u0089\u008b\u0093'+'\u008e','iqaBs':_0x3e6ad4(0x583)+_0x3e6ad4(0x784)+'\u008e','KsZTV':'\u0095\u008f\u0086\u0088\u0091'+_0x3e6ad4(0x940)+'\u0094','hQgVi':_0x3e6ad4(0xb67)+'\u0093\u0086\u0088\u008e\u0090'+'\u0092','vCqEe':_0x3e6ad4(0xb0e)+_0x3e6ad4(0x39d)+'\u008e','uiVIP':'\u0088\u0094\u008e\u0086\u0090'+_0x3e6ad4(0x885)+'\u0086','EVtHT':'GG_Ga'+'meMan'+_0x3e6ad4(0xac7),'zqBUc':'obfB','CvSuI':'0x24','xTKYZ':_0x3e6ad4(0xb02)+_0x3e6ad4(0x2f2),'HDgCu':_0x3e6ad4(0xa38),'xKQTw':_0x3e6ad4(0x48b),'YxTeE':'0x30','dZuvl':'mouse'+_0x3e6ad4(0xb3),'Imoxi':_0x3e6ad4(0x16a),'cKIbX':_0x3e6ad4(0x18b),'oKfGl':_0x3e6ad4(0x22a)+'le','FuxsY':_0x3e6ad4(0x9dc),'CDxIu':'0x7c','crpzG':'local'+_0x3e6ad4(0x4cd),'kjsGH':'0x5c','fvaom':_0x3e6ad4(0xb72),'Boyzg':'comba'+'t','TQSzC':_0x3e6ad4(0xa50),'eLyFc':_0x3e6ad4(0xaed)+'ls','rgWDM':'VIS','qsibY':_0x3e6ad4(0x929),'PWGRP':function(_0xe94f68,_0x44b387){return _0xe94f68+_0x44b387;},'hegSf':function(_0xd8156c,_0x3d9324){return _0xd8156c+_0x3d9324;},'YjRhQ':function(_0x148dbe,_0x892bfb){return _0x148dbe+_0x892bfb;},'cyVRY':function(_0x5f6e93,_0x7aca12){return _0x5f6e93+_0x7aca12;},'SFQds':function(_0x43386a,_0x169dff){return _0x43386a+_0x169dff;},'MCDwG':function(_0x156e16,_0x3c4d03){return _0x156e16+_0x3c4d03;},'dwsKR':function(_0x52f401,_0x42d141){return _0x52f401+_0x42d141;},'jzati':function(_0x205aff,_0x4ed6d1){return _0x205aff+_0x4ed6d1;},'fhkgs':function(_0x21ab18,_0x57095d){return _0x21ab18+_0x57095d;},'ukeSg':function(_0x42b0f0,_0x5cd510){return _0x42b0f0+_0x5cd510;},'bNTGl':function(_0x4f46b6,_0x3e3486){return _0x4f46b6+_0x3e3486;},'sjZhK':'#saku'+'ra-me'+_0x3e6ad4(0x5ee)+'ot.mn'+_0x3e6ad4(0x2c9)+'l{pos'+_0x3e6ad4(0x77c)+':fixe'+_0x3e6ad4(0x725)+_0x3e6ad4(0x46b)+'px;bo'+_0x3e6ad4(0xb8f)+_0x3e6ad4(0xa9f)+'width'+':min('+_0x3e6ad4(0x44e)+_0x3e6ad4(0x18f)+'(100v'+'w\x20-\x204'+_0x3e6ad4(0x908)+';max-'+'heigh'+_0x3e6ad4(0x9aa)+_0x3e6ad4(0x68b)+_0x3e6ad4(0xa08)+_0x3e6ad4(0x652)+_0x3e6ad4(0x517)+'48px)'+');','sBqhe':_0x3e6ad4(0x151)+'hadow'+_0x3e6ad4(0xa21)+_0x3e6ad4(0x76b)+_0x3e6ad4(0xa04)+_0x3e6ad4(0x43e)+_0x3e6ad4(0x825)+_0x3e6ad4(0x2c7)+'6),in'+_0x3e6ad4(0x44d)+'\x201px\x20'+_0x3e6ad4(0x902)+_0x3e6ad4(0x1dc)+',255,'+_0x3e6ad4(0x86b)+_0x3e6ad4(0x304)+_0x3e6ad4(0x7fa)+'\x2080px'+'\x20rgba'+_0x3e6ad4(0x8a3)+'0,.55'+');','apfqM':_0x3e6ad4(0x4e3)+_0x3e6ad4(0x314)+_0x3e6ad4(0x6f7)+_0x3e6ad4(0xb4d)+_0x3e6ad4(0xbc7)+_0x3e6ad4(0x78f)+'ont-f'+_0x3e6ad4(0x683)+':\x22Int'+_0x3e6ad4(0x239)+_0x3e6ad4(0x84d)+'\x20UI\x22,'+_0x3e6ad4(0x7fb)+_0x3e6ad4(0x4fa)+_0x3e6ad4(0xb50)+'serif'+';}','yOeJr':'borde'+'r-rad'+'ius:1'+_0x3e6ad4(0xae1)+'ackgr'+_0x3e6ad4(0x4d8)+_0x3e6ad4(0x9d)+_0x3e6ad4(0x825)+'55,25'+'5,.02'+_0x3e6ad4(0x2cd)+_0x3e6ad4(0xa70)+'dow:i'+_0x3e6ad4(0x47a)+_0x3e6ad4(0xbd0)+'\x201px\x20'+_0x3e6ad4(0x9d)+_0x3e6ad4(0x825)+'55,25'+_0x3e6ad4(0x7f8)+_0x3e6ad4(0xf1),'nGTGE':_0x3e6ad4(0x8d8)+'ogo-s'+_0x3e6ad4(0x51e)+_0x3e6ad4(0x88d)+_0x3e6ad4(0x80d)+_0x3e6ad4(0x729)+':25px'+';over'+_0x3e6ad4(0x330)+_0x3e6ad4(0xb34)+'le;fi'+_0x3e6ad4(0xa3d)+'drop-'+_0x3e6ad4(0xb9a)+_0x3e6ad4(0x697)+'\x204px\x20'+_0x3e6ad4(0x9d)+'255,1'+_0x3e6ad4(0x269)+'7,.8)'+');}','FKifD':'.mn-t'+_0x3e6ad4(0x6e8)+_0x3e6ad4(0x8b5)+'color'+':#ff6'+_0x3e6ad4(0x494)+_0x3e6ad4(0xb13)+_0x3e6ad4(0x4d8)+_0x3e6ad4(0x9d)+'255,1'+_0x3e6ad4(0x269)+'7,.1)'+';}','GnpRE':'.mn-h'+_0x3e6ad4(0xb0)+_0x3e6ad4(0xb58)+_0x3e6ad4(0xa2)+_0x3e6ad4(0x8f1)+_0x3e6ad4(0x597)+_0x3e6ad4(0x669)+_0x3e6ad4(0x5a7),'AcpGK':_0x3e6ad4(0x7c3)+'ub{fo'+'nt-si'+_0x3e6ad4(0xa23)+'px;op'+_0x3e6ad4(0x9f6)+_0x3e6ad4(0x20f),'KDezj':_0x3e6ad4(0x46c)+_0x3e6ad4(0x260)+'displ'+_0x3e6ad4(0xb8c)+'id;pl'+_0x3e6ad4(0x9e2)+_0x3e6ad4(0xaba)+'cente'+'r;wid'+_0x3e6ad4(0x3af)+_0x3e6ad4(0x782)+'ight:'+'28px;'+_0x3e6ad4(0x526)+_0x3e6ad4(0x4b6)+_0x3e6ad4(0x72d)+'-radi'+_0x3e6ad4(0x5f5)+_0x3e6ad4(0xbc1)+'kgrou'+_0x3e6ad4(0x6fd)+_0x3e6ad4(0x53c)+_0x3e6ad4(0x76a),'SVHAK':_0x3e6ad4(0x4e3)+_0x3e6ad4(0x86f)+_0x3e6ad4(0xafe)+_0x3e6ad4(0x331)+_0x3e6ad4(0x469)+_0x3e6ad4(0x665)+_0x3e6ad4(0x743)+_0x3e6ad4(0x198)+';}','xXbqa':_0x3e6ad4(0x46c)+_0x3e6ad4(0xbe9)+_0x3e6ad4(0x620)+_0x3e6ad4(0x740)+_0x3e6ad4(0xb40)+';back'+_0x3e6ad4(0xdb)+_0x3e6ad4(0x911)+_0x3e6ad4(0x1dc)+_0x3e6ad4(0x8ea)+_0x3e6ad4(0x86b)+_0x3e6ad4(0x9e4),'jOgCh':_0x3e6ad4(0x46c)+_0x3e6ad4(0x448)+_0x3e6ad4(0xfb)+_0x3e6ad4(0x250)+'heigh'+'t:0;o'+_0x3e6ad4(0xa71)+_0x3e6ad4(0x7cc)+'auto;'+_0x3e6ad4(0x68f)+'ay:gr'+'id;gr'+_0x3e6ad4(0x880)+'mplat'+'e-col'+_0x3e6ad4(0x5b3)+_0x3e6ad4(0xde)+_0x3e6ad4(0xbb9)+'o-fil'+'l,min'+'max(2'+_0x3e6ad4(0xa9d)+'1fr))'+';','ZFZul':_0x3e6ad4(0x46c)+_0x3e6ad4(0x2ee)+_0x3e6ad4(0x569)+_0x3e6ad4(0xac5)+_0x3e6ad4(0x1b0)+_0x3e6ad4(0x65e)+'umb{b'+'ackgr'+'ound:'+_0x3e6ad4(0x9d)+_0x3e6ad4(0x825)+_0x3e6ad4(0x302)+'5,.08'+_0x3e6ad4(0x901)+'der-r'+_0x3e6ad4(0x5cf)+_0x3e6ad4(0x430)+'}','gytmC':'.sk-c'+_0x3e6ad4(0x6d5)+_0x3e6ad4(0x9b)+_0x3e6ad4(0x69b)+'nd:rg'+_0x3e6ad4(0xb44)+'5,255'+_0x3e6ad4(0x8ea)+_0x3e6ad4(0x7ff)+_0x3e6ad4(0x151)+'hadow'+_0x3e6ad4(0x422)+'t\x200\x200'+_0x3e6ad4(0xa48)+_0x3e6ad4(0x582)+_0x3e6ad4(0x1dc)+_0x3e6ad4(0x1b4)+_0x3e6ad4(0x843)+'28);}','SToKA':_0x3e6ad4(0xc0e)+_0x3e6ad4(0x90f)+'itle{'+_0x3e6ad4(0x15c)+'1;min'+'-widt'+_0x3e6ad4(0x817),'UNkKx':_0x3e6ad4(0xc0e)+_0x3e6ad4(0x6d5)+_0x3e6ad4(0x468)+'-card'+'-titl'+_0x3e6ad4(0xaa0)+_0x3e6ad4(0x834)+'olor:'+'#fff0'+'f5;}','TXzJM':_0x3e6ad4(0x97)+_0x3e6ad4(0x1f0)+_0x3e6ad4(0xc0c)+_0x3e6ad4(0xcd)+'12px\x20'+_0x3e6ad4(0x90b)+'}','sepUs':_0x3e6ad4(0x97)+_0x3e6ad4(0x8cd)+'font-'+_0x3e6ad4(0x162)+_0x3e6ad4(0x878)+'opaci'+_0x3e6ad4(0x791)+';marg'+'in-bo'+_0x3e6ad4(0xb8f)+_0x3e6ad4(0xbcb)+'hite-'+_0x3e6ad4(0x2a1)+_0x3e6ad4(0xbc)+_0x3e6ad4(0x3f3)+'}','zeyKo':_0x3e6ad4(0xc0e)+_0x3e6ad4(0x815)+_0x3e6ad4(0xf0)+':flex'+';alig'+_0x3e6ad4(0x664)+_0x3e6ad4(0xa7a)+'nter;'+_0x3e6ad4(0x735)+'px;pa'+_0x3e6ad4(0xb92)+':4px\x20'+'0;fon'+'t-siz'+'e:11.'+_0x3e6ad4(0x1a2),'dlbnV':_0x3e6ad4(0x8ed)+'witch'+'[aria'+'-chec'+'ked=\x22'+'true\x22'+']{bac'+'kgrou'+'nd:rg'+_0x3e6ad4(0xb44)+_0x3e6ad4(0x920)+_0x3e6ad4(0x571)+'.25);'+'}','BswGx':_0x3e6ad4(0x8ed)+'lider'+_0x3e6ad4(0x56c)+_0x3e6ad4(0x53e)+'ppear'+'ance:'+_0x3e6ad4(0x8db)+_0x3e6ad4(0x7ed)+'rance'+':none'+_0x3e6ad4(0x81b)+'h:96p'+_0x3e6ad4(0x6b3)+_0x3e6ad4(0xec)+'px;ba'+'ckgro'+'und:t'+'ransp'+'arent'+';}','NQjtD':_0x3e6ad4(0x8ed)+'lider'+_0x3e6ad4(0x806)+_0x3e6ad4(0x4ea)+_0x3e6ad4(0x68d)+_0x3e6ad4(0xa3a)+_0x3e6ad4(0x396)+'-trac'+_0x3e6ad4(0x7a2)+'ght:2'+'px;bo'+_0x3e6ad4(0xc16)+_0x3e6ad4(0x43a)+'s:2px'+';','roKJa':_0x3e6ad4(0x9a3)+'round'+_0x3e6ad4(0x22e)+_0x3e6ad4(0x857)+_0x3e6ad4(0x301)+_0x3e6ad4(0x812)+'6b9d,'+'#ff6b'+_0x3e6ad4(0xa47)+'\x200\x20/\x20'+_0x3e6ad4(0x934)+_0x3e6ad4(0x2a4)+'%)\x2010'+_0x3e6ad4(0x8ca)+_0x3e6ad4(0x69e)+_0x3e6ad4(0x8ff)+_0x3e6ad4(0xb44)+'5,255'+_0x3e6ad4(0x8ea)+'.08);'+'}','LRtED':_0x3e6ad4(0x8ed)+'lider'+_0x3e6ad4(0x806)+_0x3e6ad4(0x4ea)+'slide'+_0x3e6ad4(0x844)+'mb{-w'+_0x3e6ad4(0x1c8)+_0x3e6ad4(0xbd4)+'aranc'+_0x3e6ad4(0x41f)+_0x3e6ad4(0xa0e)+_0x3e6ad4(0x193)+_0x3e6ad4(0x6b3)+_0x3e6ad4(0x58e)+_0x3e6ad4(0x23d)+_0x3e6ad4(0x528)+_0x3e6ad4(0x3e5)+'2px;b'+_0x3e6ad4(0x72d)+_0x3e6ad4(0x863)+_0x3e6ad4(0x3c6)+'%;bac'+_0x3e6ad4(0x69b)+_0x3e6ad4(0x16d)+'f6b9d'+';}','SXxWq':'.sk-v'+_0x3e6ad4(0xb01)+'nt-si'+_0x3e6ad4(0xa23)+'px;fo'+_0x3e6ad4(0x141)+_0x3e6ad4(0xa0)+'600;m'+_0x3e6ad4(0xaf3)+_0x3e6ad4(0x1e8)+_0x3e6ad4(0x514)+'ext-a'+'lign:'+'right'+_0x3e6ad4(0xb63)+'r:rgb'+_0x3e6ad4(0x327)+_0x3e6ad4(0x313)+'242,.'+_0x3e6ad4(0x155),'vGIuT':'.sk-n'+_0x3e6ad4(0xc0b)+_0x3e6ad4(0xb4d)+'ize:1'+_0x3e6ad4(0x40a)+_0x3e6ad4(0x5eb)+_0x3e6ad4(0x9d)+_0x3e6ad4(0x7d9)+'38,24'+_0x3e6ad4(0x6fe)+_0x3e6ad4(0x17b)+'ing:2'+_0x3e6ad4(0x48c)+'white'+_0x3e6ad4(0x4b2)+_0x3e6ad4(0x60f)+_0x3e6ad4(0x237)+';}','kFEiT':'.sk-n'+_0x3e6ad4(0x99b)+'rr{co'+'lor:#'+_0x3e6ad4(0x383)+_0x3e6ad4(0x305),'FnLhH':'#saku'+_0x3e6ad4(0x570)+_0x3e6ad4(0x916)+'ositi'+_0x3e6ad4(0xac1)+_0x3e6ad4(0xb4f)+'op:12'+_0x3e6ad4(0xb6d)+'ght:1'+'2px;z'+'-inde'+_0x3e6ad4(0xb08)+_0x3e6ad4(0xa7b)+_0x3e6ad4(0xa0c)+'rsor:'+'point'+_0x3e6ad4(0x37d)+_0x3e6ad4(0x88d)+_0x3e6ad4(0x711)+'eight'+_0x3e6ad4(0x15e)+_0x3e6ad4(0x22f)+'ity:.'+'28;','dEerr':'trans'+_0x3e6ad4(0x77c)+_0x3e6ad4(0x1e3)+'ity\x20.'+'2s;po'+_0x3e6ad4(0x198)+_0x3e6ad4(0x748)+_0x3e6ad4(0x752)+_0x3e6ad4(0x465)+_0x3e6ad4(0xa3d)+'drop-'+_0x3e6ad4(0xb9a)+_0x3e6ad4(0x697)+'\x204px\x20'+'rgba('+'255,1'+_0x3e6ad4(0x269)+'7,.7)'+');}','eSNTN':_0x3e6ad4(0xd4)+_0x3e6ad4(0x81f)+_0x3e6ad4(0x608)+_0x3e6ad4(0x278)+_0x3e6ad4(0x376)+_0x3e6ad4(0x3f8)+_0x3e6ad4(0x8d9)+_0x3e6ad4(0x956)+_0x3e6ad4(0x13f)+'\x22/></'+'svg>','QJdLj':_0x3e6ad4(0x81a)+_0x3e6ad4(0x449)+_0x3e6ad4(0x969)+_0x3e6ad4(0x64d)+_0x3e6ad4(0x64c)+_0x3e6ad4(0xa9e)+_0x3e6ad4(0x627)+_0x3e6ad4(0x73a)+'h=\x221.'+'6\x22\x20st'+_0x3e6ad4(0x7c2)+'linec'+_0x3e6ad4(0x39e)+_0x3e6ad4(0xb73)+'\x20stro'+_0x3e6ad4(0x9d8)+_0x3e6ad4(0xbc6)+_0x3e6ad4(0xc11)+'und\x22/'+'>'};var _0x3dc887=location['hostn'+'ame']||'',_0x45792c=/(^|\.)www\.crazygames\.com$/[_0x3e6ad4(0xa61)](_0x3dc887),_0x2d2d51=/(^|\.)games\.crazygames\.com$/['test'](_0x3dc887),_0x173516=/(^|\.)crazygames\.com$/[_0x3e6ad4(0xa61)](_0x3dc887)&&!_0x45792c&&!_0x2d2d51,_0x55f777=_0x45792c?_0x3e6ad4(0x668)+'l':_0x2d2d51?_0x5591fc[_0x3e6ad4(0x979)]:_0x3e6ad4(0x463)+'r';if(!_0x45792c&&!_0x2d2d51&&!_0x173516)return;var _0x1bfdf2=_0x5591fc['WjpRr'],_0x1b3e3d='__sak'+'ura_s'+'w_v2',_0x2aa061=_0x5591fc[_0x3e6ad4(0x5bf)],_0x5b81c7='===SA'+_0x3e6ad4(0x537)+'SKILL'+_0x3e6ad4(0xb23)+'END=='+'=',_0xd31e38=_0x3e6ad4(0x8eb)+'1';if(_0x2d2d51){window['addEv'+'entLi'+'stene'+'r'](_0x3e6ad4(0x153)+'ge',function(_0x13e7ff){var _0x1777dd=_0x3e6ad4,_0x4f2b8b=_0x13e7ff[_0x1777dd(0x5e3)];if(!_0x4f2b8b||_0x5591fc['rWYKh'](_0x4f2b8b[_0x1777dd(0x635)+'ura'],_0x1b3e3d))return;try{if(_0x5591fc[_0x1777dd(0x789)](_0x5591fc['ZVQKB'],_0x5591fc[_0x1777dd(0x21b)])){if(window[_0x1777dd(0xc9)+'t']&&window[_0x1777dd(0xc9)+'t']!==window)window[_0x1777dd(0xc9)+'t'][_0x1777dd(0x10a)+_0x1777dd(0x95)+'e'](_0x4f2b8b,'*');if(window['top']&&window[_0x1777dd(0x92)]!==window)window[_0x1777dd(0x92)][_0x1777dd(0x10a)+'essag'+'e'](_0x4f2b8b,'*');}else return _0x5591fc[_0x1777dd(0x7a3)](_0x476a23,_0x558221[_0x11092f][_0x1777dd(0xa6a)+'h']);}catch(_0x173322){}if(_0x4f2b8b&&_0x4f2b8b['kind']===_0x1777dd(0x391))try{if(_0x5591fc['pqsrZ']('yMmcO',_0x1777dd(0x61c))){var _0x2505c9=_0x77270e[0x1eb4+0xce2+-0x2b95]['val']();if(_0x2505c9)_0x5103b8=_0x2505c9;}else{var _0x1f79bd=document['query'+'Selec'+'torAl'+'l'](_0x1777dd(0x65a)+'e');for(var _0x5c035a=-0x1773+-0x10d2*-0x2+0x1*-0xa31;_0x5c035a<_0x1f79bd[_0x1777dd(0xa6a)+'h'];_0x5c035a++){try{if(_0x1f79bd[_0x5c035a][_0x1777dd(0x738)+_0x1777dd(0x53f)+'dow'])_0x1f79bd[_0x5c035a][_0x1777dd(0x738)+'ntWin'+'dow'][_0x1777dd(0x10a)+'essag'+'e'](_0x4f2b8b,'*');}catch(_0x1ad967){}}}}catch(_0x3ab9aa){}}),console['log'](_0x3e6ad4(0xbd9)+_0x3e6ad4(0x231)+'\x20SW-W'+_0x3e6ad4(0x11a)+'R\x20ACT'+_0x3e6ad4(0xaf6)+_0x3e6ad4(0xa4c)+_0x3e6ad4(0x17d)+_0x3e6ad4(0x9da),_0x5591fc[_0x3e6ad4(0x9fb)](_0x3e6ad4(0x4e3)+':',_0x1bfdf2));return;}if(_0x45792c){console['log'](_0x3e6ad4(0xbd9)+_0x3e6ad4(0x231)+_0x3e6ad4(0x599)+_0x3e6ad4(0x931)+'TIVE',_0x3e6ad4(0x4e3)+':'+_0x1bfdf2+_0x5591fc[_0x3e6ad4(0x9ee)],{'host':_0x3dc887});var _0x27f435={'set':function(){},'command':function(){}};function _0x3cc668(_0x2491f9,_0x2f28d9){var _0x2109f6=_0x3e6ad4,_0x4af94c={'__sakura':_0x1b3e3d,'kind':_0x2109f6(0x391),'cmd':_0x2491f9,'arg':_0x2f28d9};try{if(_0x5591fc[_0x2109f6(0x8ac)](_0x5591fc['GbJTf'],_0x2109f6(0xb2d))){if(_0xa907d4['top']&&_0x5591fc['NYAet'](_0x2bf9f7['top'],_0x166cee))_0x1c9145[_0x2109f6(0x92)]['postM'+_0x2109f6(0x95)+'e'](_0x3f6ba6,'*');}else{var _0x14a125=document['query'+'Selec'+'torAl'+'l'](_0x2109f6(0x65a)+'e');for(var _0x295475=0x3c1+0x1d7b*0x1+-0x213c;_0x295475<_0x14a125[_0x2109f6(0xa6a)+'h'];_0x295475++){try{if(_0x14a125[_0x295475]['conte'+_0x2109f6(0x53f)+'dow'])_0x14a125[_0x295475][_0x2109f6(0x738)+_0x2109f6(0x53f)+'dow'][_0x2109f6(0x10a)+_0x2109f6(0x95)+'e'](_0x4af94c,'*');}catch(_0x35b071){}}}}catch(_0x1b547b){}try{var _0x51fd69=new BroadcastChannel(_0x2109f6(0x6d0)+'a-sw');_0x51fd69[_0x2109f6(0x10a)+_0x2109f6(0x95)+'e'](_0x4af94c),setTimeout(function(){var _0x410937=_0x2109f6;try{_0x51fd69[_0x410937(0x68e)]();}catch(_0x542e30){}},0x2508+-0x1003*0x1+-0x1*0x140b);}catch(_0x4f6867){}}var _0x5f012b=_0x5591fc[_0x3e6ad4(0x4ec)];function _0x3d89e3(){var _0x4aac09=_0x3e6ad4;if('tftuZ'!==_0x4aac09(0x767))try{var _0x33ce7a=_0x4ab2aa['max'](-0x297+-0x1607+0x189f,_0x368a33['inner'+_0x4aac09(0x4f9)]||_0x2031b3['docum'+'entEl'+'ement'][_0x4aac09(0x7b9)+'tWidt'+'h']||0x18a3+0x94a+-0x21ed),_0x1d5b10=_0x477b59['max'](0x76*0x2+0x24c3+-0x25ae,_0xd16c4f[_0x4aac09(0x51d)+_0x4aac09(0x319)+'t']||_0x46ebcb['docum'+_0x4aac09(0x563)+_0x4aac09(0x3ff)][_0x4aac09(0x7b9)+'tHeig'+'ht']||-0x1a89*0x1+0x1*0x1aa6+-0x1d);return(_0x5695c6['cv'][_0x4aac09(0x708)]!==_0x33ce7a||_0x259260['cv']['heigh'+'t']!==_0x1d5b10)&&(_0x5571b7['cv']['width']=_0x33ce7a,_0x3ad03d['cv'][_0x4aac09(0x7e0)+'t']=_0x1d5b10),{'w':_0x33ce7a,'h':_0x1d5b10};}catch(_0x14cb24){return{'w':0x0,'h':0x0};}else try{return _0x5591fc['rnwiA'](localStorage['getIt'+'em'](_0x5f012b),'1');}catch(_0x4bec0b){return![];}}function _0x9779a7(_0x199595){var _0x571122=_0x3e6ad4;if('pVLVS'===_0x5591fc[_0x571122(0x749)]){_0x56cc4e();return;}else{try{_0x571122(0x2ae)===_0x571122(0x5ac)?(_0x5b4507[_0x571122(0x158)+'a']='0x'+(_0x2df0df>>>-0x3*0xcf6+0x33b*-0x1+0x2a1d)['toStr'+_0x571122(0x9e7)](-0x6*0x1bf+0xa9f*0x1+0x3*-0x7),_0x27c297[_0x571122(0x158)+_0x571122(0x97e)]=_0x37d4dd):_0x199595?localStorage[_0x571122(0x3d7)+'em'](_0x5f012b,'1'):localStorage[_0x571122(0x768)+_0x571122(0x254)](_0x5f012b);}catch(_0x49169e){}try{if(_0x571122(0xa43)===_0x571122(0xa43)){var _0x2fbc22=document[_0x571122(0x7f6)+_0x571122(0x3ff)+'ById'](_0x5591fc['AgbRu']);if(_0x2fbc22)_0x2fbc22[_0x571122(0x768)+'e']();}else return _0x1baa86[_0x571122(0x498)+'e']=_0x571122(0x2de)+'me.re'+'solve'+'Game('+')',_0x11cf35;}catch(_0x18da3d){}try{if(_0x5591fc['rnwiA'](_0x5591fc['izdhP'],_0x5591fc['yhJMq']))return _0x152161['o'];else{var _0x3bff1f=document['getEl'+'ement'+_0x571122(0x999)](_0x5591fc[_0x571122(0x34e)]);if(_0x199595&&!_0x3bff1f&&document[_0x571122(0x7ef)]){if(_0x5591fc['bJroe'](_0x571122(0xb6),'qsMEP')){var _0x7cb517=document['creat'+_0x571122(0xa9a)+'ent'](_0x5591fc[_0x571122(0x167)]);_0x7cb517['id']=_0x571122(0x6d0)+_0x571122(0xabe)+_0x571122(0x7ce)+'b',_0x7cb517[_0x571122(0xd5)]['cssTe'+'xt']=_0x5591fc[_0x571122(0x7a3)](_0x5591fc['SBeSR'](_0x5591fc[_0x571122(0x121)](_0x571122(0x7e6)+_0x571122(0xa63)+'ixed;'+_0x571122(0x750)+_0x571122(0x50d)+_0x571122(0x440)+_0x571122(0x6c2)+'-inde'+'x:214'+_0x571122(0x21a)+_0x571122(0x981)+_0x571122(0xacb)+_0x571122(0x59c)+_0x571122(0x4c4)+'er-se'+_0x571122(0x35c)+'none;','backg'+'round'+_0x571122(0x71d)+'(21,1'+'2,29,'+_0x571122(0x9e1)+_0x571122(0x72d)+':1px\x20'+'solid'+'\x20rgba'+_0x571122(0x43e)+_0x571122(0x547)+_0x571122(0x606)+');col'+'or:'),_0x1bfdf2)+';',_0x571122(0x526)+_0x571122(0x33c)+_0x571122(0xd7)+'99px;'+_0x571122(0xc0c)+'ng:4p'+_0x571122(0xa4f)+'x;fon'+_0x571122(0x975)+_0x571122(0x9d0)+'\x20ui-m'+_0x571122(0xadd)+_0x571122(0x727)+'onsol'+_0x571122(0x361)+'nospa'+_0x571122(0x658)),_0x7cb517['textC'+_0x571122(0x3f4)+'t']=_0x5591fc[_0x571122(0x6c8)],_0x7cb517[_0x571122(0x898)+'ck']=function(){var _0x523726=_0x571122;_0x5591fc[_0x523726(0x9cf)](_0x9779a7,![]),_0x5591fc[_0x523726(0x702)](_0x46ed6a);},document[_0x571122(0x7ef)][_0x571122(0x3df)+_0x571122(0x566)+'d'](_0x7cb517);}else{var _0x23da49=_0x28ee30[_0x571122(0x672)+'Selec'+_0x571122(0x156)+'l'](_0x5591fc[_0x571122(0x3a2)]);for(var _0x5891c5=0x1*-0xf29+-0x12c2+0x21eb;_0x5591fc['MkbYf'](_0x5891c5,_0x23da49[_0x571122(0xa6a)+'h']);_0x5891c5++){try{if(_0x23da49[_0x5891c5]['conte'+'ntWin'+'dow'])_0x23da49[_0x5891c5]['conte'+'ntWin'+'dow']['postM'+_0x571122(0x95)+'e'](_0x52c595,'*');}catch(_0x247eb5){}}}}else _0x5591fc[_0x571122(0x6e3)](!_0x199595,_0x3bff1f)&&_0x3bff1f['remov'+'e']();}}catch(_0x5ca934){}}}function _0x2f306c(){var _0x445cbb=_0x3e6ad4;if(_0x445cbb(0x5c1)!==_0x445cbb(0x379)){if(_0x5591fc[_0x445cbb(0x534)](_0x3d89e3))return null;var _0x5777a8=document[_0x445cbb(0x7f6)+'ement'+_0x445cbb(0x999)](_0x5591fc['AgbRu']);if(_0x5777a8)return _0x5777a8;if(!document[_0x445cbb(0x7ef)]||!document[_0x445cbb(0x7ef)][_0x445cbb(0x3df)+_0x445cbb(0x566)+'d'])return null;try{if(_0x5591fc['pqsrZ']('CwWLV','yQUJO'))_0x28b413=_0x5591fc[_0x445cbb(0x121)](_0x5591fc[_0x445cbb(0x7a3)](_0x5591fc[_0x445cbb(0x7a3)](_0x5591fc['MRGXN'],_0x4b3196[_0x445cbb(0x372)+_0x445cbb(0x405)+_0x445cbb(0xb53)][_0x445cbb(0x3b1)]),_0x5591fc['wahdo']),_0x359458['hookF'+_0x445cbb(0x405)+_0x445cbb(0xb53)][_0x445cbb(0x9ab)+_0x445cbb(0x7b4)+'nc'])+(_0x445cbb(0x375)+_0x445cbb(0x399)+_0x445cbb(0x531)+_0x445cbb(0x6a9))+_0x5c8222['hookF'+_0x445cbb(0x405)+'oof'][_0x445cbb(0x531)+_0x445cbb(0xb90)+'eAtFi'+'re']+(_0x445cbb(0x62d)+'rce:\x20')+(_0x3b9185[_0x445cbb(0x372)+_0x445cbb(0x405)+_0x445cbb(0xb53)][_0x445cbb(0xa1c)+_0x445cbb(0x70c)+_0x445cbb(0x4b4)+'e']||_0x5591fc[_0x445cbb(0x3aa)])+('),\x20so'+_0x445cbb(0xb5b)+'refer'+_0x445cbb(0x17c)+_0x445cbb(0x766)+_0x445cbb(0x68a)+_0x445cbb(0x4f5)+'d\x20is\x20'+_0x445cbb(0x285)+_0x445cbb(0xc4)+'ble\x20n'+'ow.');else{var _0x374b86=_0x5591fc['YDlsL'][_0x445cbb(0xa3)]('|'),_0x436f97=0x5*-0x250+-0xd90*0x1+0x1920;while(!![]){switch(_0x374b86[_0x436f97++]){case'0':document[_0x445cbb(0x7ef)]['appen'+'dChil'+'d'](_0x5777a8);continue;case'1':_0x5777a8=document[_0x445cbb(0x53b)+_0x445cbb(0xa9a)+'ent'](_0x5591fc[_0x445cbb(0x167)]);continue;case'2':_0x5777a8['id']='sakur'+'a-sw-'+'v2';continue;case'3':return _0x5777a8;case'4':if(!document[_0x445cbb(0x7f6)+'ement'+_0x445cbb(0x999)](_0x445cbb(0x6d0)+_0x445cbb(0xabe)+'v2-cs'+'s')){var _0x26dbd5=document[_0x445cbb(0x53b)+'eElem'+_0x445cbb(0xac3)](_0x445cbb(0xd5));_0x26dbd5['id']=_0x445cbb(0x6d0)+_0x445cbb(0xabe)+'v2-cs'+'s',_0x26dbd5[_0x445cbb(0x173)+'onten'+'t']=_0x5591fc[_0x445cbb(0x420)],(document['head']||document[_0x445cbb(0xbcd)+'entEl'+'ement'])[_0x445cbb(0x3df)+_0x445cbb(0x566)+'d'](_0x26dbd5);}continue;}break;}}}catch(_0x51ee17){return null;}}else{var _0x552923=_0x192874;if(_0x552923&&_0x552923['el'])_0x552923['el'][_0x445cbb(0xd5)][_0x445cbb(0x68f)+'ay']=_0x143b9b?'':_0x5591fc[_0x445cbb(0x3aa)];var _0x32a5da=_0x3355f9;if(_0x32a5da&&_0x32a5da['cv'])_0x32a5da['cv'][_0x445cbb(0xd5)][_0x445cbb(0x68f)+'ay']=_0x3b8158?'':_0x5591fc[_0x445cbb(0x3aa)];}}function _0x46ed6a(){var _0x203f93=_0x3e6ad4,_0x5e7941=_0x5591fc[_0x203f93(0xa7d)](_0x2f306c);if(!_0x5e7941)return _0x27f435;if(_0x5e7941['datas'+'et']['api'])return _0x5e7941[_0x203f93(0xe6)];try{return _0x2f4391(_0x5e7941);}catch(_0x1309bb){return _0x5e7941[_0x203f93(0xa1)+'et']['api']='1',_0x5e7941[_0x203f93(0xe6)]=_0x27f435,console['warn'](_0x5591fc['quZDY'],_0x203f93(0x4e3)+':'+_0x1bfdf2,_0x1309bb),_0x27f435;}}function _0x2f4391(_0x6a2a19){var _0x4f2cf5=_0x3e6ad4,_0x49b767={'JSHTd':_0x5591fc[_0x4f2cf5(0x5e5)],'izzcp':_0x5591fc['mJfBX'],'Esafv':'#150c'+'1d','LmTLF':_0x4f2cf5(0x9d)+_0x4f2cf5(0x950)+_0x4f2cf5(0x720)+'9)','UObvF':function(_0x3d1b45,_0x5614c7,_0x2b7b4d,_0x475ecd,_0x2b4363){return _0x3d1b45(_0x5614c7,_0x2b7b4d,_0x475ecd,_0x2b4363);},'CoyYC':function(_0xdc4398,_0x278f5e){return _0xdc4398/_0x278f5e;},'PgDoC':function(_0x2fac29){return _0x2fac29();},'zLEuT':_0x5591fc[_0x4f2cf5(0x703)],'pEtIX':_0x5591fc['nRkAO'],'rGyyu':_0x5591fc[_0x4f2cf5(0xb91)],'EapUP':function(_0x1cbe5b,_0x4edcbd){return _0x1cbe5b(_0x4edcbd);},'VFgyr':function(_0x52ceb5,_0x219250){var _0x4c48ff=_0x4f2cf5;return _0x5591fc[_0x4c48ff(0x185)](_0x52ceb5,_0x219250);},'etSgG':function(_0x1ec4e9,_0x1cf158){var _0x48a95b=_0x4f2cf5;return _0x5591fc[_0x48a95b(0x2a9)](_0x1ec4e9,_0x1cf158);},'kzAnZ':function(_0x33cac7,_0x44edfb){return _0x5591fc['VpYpU'](_0x33cac7,_0x44edfb);},'ftJAy':_0x5591fc[_0x4f2cf5(0x3d0)],'QMdPV':_0x4f2cf5(0x71b)+_0x4f2cf5(0x294)+_0x4f2cf5(0xb0a)+_0x4f2cf5(0x84a)+_0x4f2cf5(0x139)+_0x4f2cf5(0x4a4)+'\x20UWMK'+_0x4f2cf5(0xb47)+_0x4f2cf5(0x41e)+_0x4f2cf5(0x6a0)+_0x4f2cf5(0x1e0)+_0x4f2cf5(0x8a6)+_0x4f2cf5(0xad6)+_0x4f2cf5(0x903)+_0x4f2cf5(0x2e3),'tmseK':_0x4f2cf5(0x87c)+_0x4f2cf5(0x60c)+'\x20game'+'\x20page'+_0x4f2cf5(0xba3)+_0x4f2cf5(0x375)+_0x4f2cf5(0x6ff)+_0x4f2cf5(0x42e)+'\x20pane'+_0x4f2cf5(0xbb0)+_0x4f2cf5(0x9dd),'aSMuf':function(_0x4736c3,_0x40a876){return _0x5591fc['FttlK'](_0x4736c3,_0x40a876);},'rUUYJ':_0x4f2cf5(0x4c6)+'r','ODAre':function(_0x2f32c8,_0x3c8528){return _0x2f32c8+_0x3c8528;}};_0x6a2a19['style'][_0x4f2cf5(0x70f)+'xt']=_0x5591fc[_0x4f2cf5(0xed)](_0x4f2cf5(0x7e6)+_0x4f2cf5(0xa63)+_0x4f2cf5(0x4de)+'left:'+_0x4f2cf5(0x50d)+'top:1'+_0x4f2cf5(0x6c2)+'-inde'+_0x4f2cf5(0xb08)+'74830'+_0x4f2cf5(0xb24)+'x-wid'+_0x4f2cf5(0xb18)+_0x4f2cf5(0x917)+'w,620'+_0x4f2cf5(0xa01)+_0x4f2cf5(0x31b)+_0x4f2cf5(0xa0)+_0x4f2cf5(0x909),_0x4f2cf5(0x9a3)+'round'+':#150'+'c1d;c'+_0x4f2cf5(0x5eb)+'#f7ee'+'f5;bo'+'rder:'+_0x4f2cf5(0x95f)+_0x4f2cf5(0x90e)+'rgba('+_0x4f2cf5(0x933)+_0x4f2cf5(0x79e)+_0x4f2cf5(0x616)+';bord'+'er-ra'+'dius:'+'14px;')+_0x5591fc['gUTwH']+(_0x4f2cf5(0x68f)+'ay:fl'+_0x4f2cf5(0x46a)+_0x4f2cf5(0x64f)+'recti'+_0x4f2cf5(0x5c5)+_0x4f2cf5(0xaa6)+'overf'+_0x4f2cf5(0x93e)+_0x4f2cf5(0x85f)+';'),_0x6a2a19['inner'+_0x4f2cf5(0x11c)]=_0x5591fc[_0x4f2cf5(0xed)](_0x5591fc[_0x4f2cf5(0x185)](_0x5591fc[_0x4f2cf5(0x7cd)](_0x5591fc['WmBgi'](_0x5591fc['baDWg'](_0x5591fc['OoXxb'](_0x5591fc[_0x4f2cf5(0xab)](_0x5591fc['fHCbA'](_0x5591fc[_0x4f2cf5(0x7cd)](_0x5591fc['ZFcXn'](_0x5591fc[_0x4f2cf5(0x618)](_0x5591fc['BgGlM'](_0x5591fc[_0x4f2cf5(0x65b)](_0x5591fc[_0x4f2cf5(0x706)](_0x5591fc['rslNU'],_0x5591fc['NZZBA']),_0x1bfdf2)+(_0x4f2cf5(0x32a)+'ura\x20·'+'\x20skil'+_0x4f2cf5(0x204)+_0x4f2cf5(0x642))+(_0x4f2cf5(0x8f8)+_0x4f2cf5(0x317)+'sw2-b'+'uild\x22'+_0x4f2cf5(0x2fc)+'e=\x22co'+_0x4f2cf5(0x926)+'7a658'+'6;fon'+_0x4f2cf5(0x9c6)+_0x4f2cf5(0xe4)+_0x4f2cf5(0x6f0)+'ding:'+_0x4f2cf5(0x886)+_0x4f2cf5(0x1d3)+_0x4f2cf5(0x475)+'1px\x20s'+_0x4f2cf5(0x90e)+_0x4f2cf5(0x9d)+_0x4f2cf5(0x933)+'43,17'+_0x4f2cf5(0x53a)+_0x4f2cf5(0x901)+_0x4f2cf5(0x384)+'adius'+_0x4f2cf5(0x3cb)+_0x4f2cf5(0x245)+_0x4f2cf5(0x119)+_0x4f2cf5(0x9c))+(_0x4f2cf5(0x8f8)+_0x4f2cf5(0x317)+'sw2-s'+_0x4f2cf5(0x8d1)+_0x4f2cf5(0x875)+_0x4f2cf5(0x835)+'olor:'+_0x4f2cf5(0x1f3)+_0x4f2cf5(0x837)+'aitin'+'g\x20for'+_0x4f2cf5(0x11b)+_0x4f2cf5(0xc01)+_0x4f2cf5(0x6a7)+'pan>'),_0x4f2cf5(0xb85)+'on\x20id'+_0x4f2cf5(0x99d)+_0x4f2cf5(0x77a)+'\x22\x20sty'+'le=\x22d'+_0x4f2cf5(0x3d1)+_0x4f2cf5(0x673)+_0x4f2cf5(0x1ce)+_0x4f2cf5(0xd9)+'eft:a'+'uto;b'+_0x4f2cf5(0xb13)+'ound:'),_0x1bfdf2)+(';bord'+_0x4f2cf5(0x7b6)+'color'+':#2a0'+_0x4f2cf5(0x4db)+_0x4f2cf5(0x72d)+'-radi'+'us:7p'+_0x4f2cf5(0x6f0)+_0x4f2cf5(0x83d)+_0x4f2cf5(0x28c)+_0x4f2cf5(0x2e8)+_0x4f2cf5(0x206)+_0x4f2cf5(0x729)+_0x4f2cf5(0xbea)+'curso'+_0x4f2cf5(0x555)+'nter;'+_0x4f2cf5(0x315)+_0x4f2cf5(0x5fd)+_0x4f2cf5(0x94d)+_0x4f2cf5(0x242)),_0x4f2cf5(0xb85)+_0x4f2cf5(0x496)+_0x4f2cf5(0x99d)+'-togg'+'le\x22\x20s'+_0x4f2cf5(0x58d)+_0x4f2cf5(0xb8e)+_0x4f2cf5(0xdb)+'d:tra'+_0x4f2cf5(0x61d)+'ent;b'+_0x4f2cf5(0x72d)+_0x4f2cf5(0x224)+'solid'+'\x20rgba'+_0x4f2cf5(0x43e)+_0x4f2cf5(0x547)+'77,.4'+');col'+_0x4f2cf5(0x10b)+_0x4f2cf5(0xa25)+';bord'+_0x4f2cf5(0x189)+_0x4f2cf5(0x368)+_0x4f2cf5(0x66c)+_0x4f2cf5(0x674)+_0x4f2cf5(0x686)+'\x208px;'+_0x4f2cf5(0x6ac)+_0x4f2cf5(0x555)+_0x4f2cf5(0x9b1)+_0x4f2cf5(0xab2)+_0x4f2cf5(0xd0)+_0x4f2cf5(0x242)),_0x5591fc['Aklla']),_0x4f2cf5(0xb19)+'>'),_0x4f2cf5(0x3a4)+_0x4f2cf5(0x882)+_0x4f2cf5(0x773)+_0x4f2cf5(0x45f)+_0x4f2cf5(0x58d)+_0x4f2cf5(0x864)+_0x4f2cf5(0xaf9)+'one;\x22'+'>'),_0x5591fc[_0x4f2cf5(0xbb4)])+_0x5591fc['pvMsy']+(_0x4f2cf5(0x11e)+'t\x20id='+_0x4f2cf5(0x1eb)+_0x4f2cf5(0xa86)+'r\x22\x20ty'+'pe=\x22r'+'ange\x22'+'\x20min='+'\x221\x22\x20m'+_0x4f2cf5(0x689)+_0x4f2cf5(0x12a)+'p=\x220.'+_0x4f2cf5(0x7b3)+_0x4f2cf5(0x7e5)+_0x4f2cf5(0xafb)+'yle=\x22'+_0x4f2cf5(0x708)+_0x4f2cf5(0x3f7)+_0x4f2cf5(0x1d5)+'ent-c'+'olor:')+_0x1bfdf2,';\x22>'),_0x4f2cf5(0x8f8)+_0x4f2cf5(0x317)+'sw2-f'+_0x4f2cf5(0x9df)+'label'+_0x4f2cf5(0x875)+'le=\x22c'+_0x4f2cf5(0x5eb)+_0x4f2cf5(0x1f3)+_0x4f2cf5(0xd8)+_0x4f2cf5(0x4cf)+_0x4f2cf5(0xbff)+_0x4f2cf5(0x6b5)+_0x4f2cf5(0xbde)+'/span'+'>'),_0x4f2cf5(0xb85)+_0x4f2cf5(0x496)+'=\x22sw2'+'-snap'+'\x22\x20sty'+'le=\x22b'+_0x4f2cf5(0xb13)+_0x4f2cf5(0x4d8)+_0x4f2cf5(0xb02)+_0x4f2cf5(0xc9)+_0x4f2cf5(0xaf7)+'der:1'+_0x4f2cf5(0xba)+_0x4f2cf5(0x24d)+'gba(2'+_0x4f2cf5(0xbbb)+'3,177'+',.4);'+_0x4f2cf5(0x4e3)+':#f7e'+'ef5;b'+_0x4f2cf5(0x72d)+_0x4f2cf5(0x863)+_0x4f2cf5(0x650)+'x;pad'+'ding:'+_0x4f2cf5(0x4e4)+_0x4f2cf5(0x861)+'rsor:'+'point'+'er;\x22>'+'Snaps'+'hot\x20('+_0x4f2cf5(0x8e3)+'butto'+'n>'),_0x5591fc[_0x4f2cf5(0x64e)])+_0x5591fc['WGqJT']+('<pre\x20'+'id=\x22s'+'w2-ou'+'t\x22\x20st'+_0x4f2cf5(0x7c1)+_0x4f2cf5(0x59f)+_0x4f2cf5(0x148)+'addin'+_0x4f2cf5(0x295)+'x\x2012p'+'x;ove'+'rflow'+':auto'+';flex'+_0x4f2cf5(0x423)+'auto;'+_0x4f2cf5(0xdf)+_0x4f2cf5(0x4b2)+_0x4f2cf5(0x60f)+_0x4f2cf5(0x237)+_0x4f2cf5(0x23b)+'-brea'+'k:bre'+_0x4f2cf5(0x1c4)+_0x4f2cf5(0x2b5)+'nt:in'+_0x4f2cf5(0xa26)+';'),_0x4f2cf5(0x4c5)+'eight'+':62vh'+_0x4f2cf5(0x418)+_0x4f2cf5(0x7d2)+'rt\x20ye'+_0x4f2cf5(0x318)+_0x4f2cf5(0x629)+'anel\x20'+'updat'+_0x4f2cf5(0xf7)+'self\x20'+'when\x20'+_0x4f2cf5(0x5c7)+'ame\x20f'+_0x4f2cf5(0x65d)+_0x4f2cf5(0x560)+'\x20—\x20no'+'\x20cons'+_0x4f2cf5(0xa8f)+_0x4f2cf5(0xc8)+_0x4f2cf5(0x594)+_0x4f2cf5(0x60b)+'tays\x20'+'empty'+',\x20Tam'+_0x4f2cf5(0x8f2)+'nkey\x20'+_0x4f2cf5(0x268)+'t\x20inj'+'ectin'+_0x4f2cf5(0x1b9)+'o\x20the'+_0x4f2cf5(0xa98)+_0x4f2cf5(0x6db)+_0x4f2cf5(0x436)+'ame\x20f'+_0x4f2cf5(0x591)+_0x4f2cf5(0x1f5)+'>')+(_0x4f2cf5(0xb19)+'>');var _0x3d118a=_0x6a2a19['query'+_0x4f2cf5(0x5e1)+'tor']('#sw2-'+'statu'+'s'),_0x12f1ef=_0x6a2a19[_0x4f2cf5(0x672)+_0x4f2cf5(0x5e1)+_0x4f2cf5(0x7ee)](_0x5591fc[_0x4f2cf5(0xa96)]),_0x22bccb=_0x6a2a19[_0x4f2cf5(0x672)+_0x4f2cf5(0x5e1)+_0x4f2cf5(0x7ee)](_0x5591fc[_0x4f2cf5(0x85c)]),_0x179412=_0x6a2a19[_0x4f2cf5(0x672)+'Selec'+'tor'](_0x4f2cf5(0x4d3)+_0x4f2cf5(0x9a7)),_0x71d9bd=_0x6a2a19[_0x4f2cf5(0x672)+_0x4f2cf5(0x5e1)+'tor'](_0x4f2cf5(0x4d3)+'x'),_0x109dfd=_0x6a2a19['query'+_0x4f2cf5(0x5e1)+_0x4f2cf5(0x7ee)](_0x5591fc['AMLAc']),_0x6dedb7=_0x6a2a19['query'+'Selec'+'tor'](_0x5591fc[_0x4f2cf5(0x38a)]),_0x3cf52f=_0x6a2a19[_0x4f2cf5(0x672)+_0x4f2cf5(0x5e1)+_0x4f2cf5(0x7ee)]('#sw2-'+_0x4f2cf5(0x53d)),_0x53e9fc=_0x6a2a19[_0x4f2cf5(0x672)+'Selec'+_0x4f2cf5(0x7ee)](_0x5591fc[_0x4f2cf5(0xb32)]),_0x29e408=_0x6a2a19[_0x4f2cf5(0x672)+'Selec'+'tor']('#sw2-'+'facto'+'r'),_0x354cc0=_0x6a2a19[_0x4f2cf5(0x672)+_0x4f2cf5(0x5e1)+_0x4f2cf5(0x7ee)](_0x4f2cf5(0x4d3)+_0x4f2cf5(0xa86)+'rlabe'+'l'),_0x356b69=_0x6a2a19[_0x4f2cf5(0x672)+_0x4f2cf5(0x5e1)+_0x4f2cf5(0x7ee)]('#sw2-'+'hint'),_0x413cf4=null,_0x20d2f4=![];function _0x190c86(){var _0x3b5ed7=_0x4f2cf5;if(_0x6dedb7)_0x6dedb7['style']['displ'+'ay']=_0x20d2f4?'':'none';if(_0x109dfd)_0x109dfd[_0x3b5ed7(0x173)+'onten'+'t']=_0x20d2f4?_0x3b5ed7(0x68e):_0x49b767[_0x3b5ed7(0x2c0)];_0x6a2a19[_0x3b5ed7(0xd5)][_0x3b5ed7(0x708)]=_0x20d2f4?_0x3b5ed7(0xabb)+'2vw,6'+_0x3b5ed7(0x6a4):_0x49b767[_0x3b5ed7(0x7e8)],_0x6a2a19[_0x3b5ed7(0xd5)][_0x3b5ed7(0x9a3)+'round']=_0x20d2f4?_0x49b767[_0x3b5ed7(0xbf5)]:_0x49b767[_0x3b5ed7(0x8fa)];}if(_0x109dfd)_0x109dfd[_0x4f2cf5(0x898)+'ck']=function(){_0x20d2f4=!_0x20d2f4,_0x5591fc['mxbrM'](_0x190c86);};_0x5591fc['cZBAu'](_0x190c86);if(_0x71d9bd)_0x71d9bd['oncli'+'ck']=function(){var _0x1509bc=_0x4f2cf5,_0xd45f84={'PCCLj':_0x1509bc(0x980)+_0x1509bc(0x233)+'4|3','HfjxE':function(_0x43a053,_0x2b1910,_0x4d0391,_0x1147b0,_0x1c1146){var _0x25ea7d=_0x1509bc;return _0x49b767[_0x25ea7d(0x3e4)](_0x43a053,_0x2b1910,_0x4d0391,_0x1147b0,_0x1c1146);},'CTbZY':'0x1c\x20'+_0x1509bc(0x1d6)+'s)','jzeIG':function(_0x173b7a,_0x42c07d){return _0x173b7a>=_0x42c07d;},'tjDiI':function(_0x165230,_0x39f553){return _0x165230+_0x39f553;},'PxcJd':function(_0x2e3065,_0x36bc5a){return _0x49b767['CoyYC'](_0x2e3065,_0x36bc5a);},'tgUAM':function(_0xa3acd9,_0x37ee2e){return _0xa3acd9+_0x37ee2e;},'nkdDF':function(_0x106f56,_0x509281){return _0x106f56/_0x509281;},'zvBXH':function(_0x262ddc){var _0x461e8a=_0x1509bc;return _0x49b767[_0x461e8a(0x36e)](_0x262ddc);}};if(_0x49b767[_0x1509bc(0x4e0)]===_0x49b767[_0x1509bc(0x4e0)])_0x9779a7(!![]);else{var _0x38b2dd=_0xd45f84['PCCLj'][_0x1509bc(0xa3)]('|'),_0x2382c0=0xdf7+-0xa84+-0x373;while(!![]){switch(_0x38b2dd[_0x2382c0++]){case'0':if(_0x1405fb){var _0x3fa899=_0xd45f84[_0x1509bc(0x1b5)](_0x330cc8,_0x1405fb['eye'],[_0x1405fb['eye'][0x507*-0x6+-0x360+0x3*0xb2e],_0x1405fb[_0x1509bc(0x7df)][0x255b+0x25*-0xd+-0x2379*0x1],_0x1405fb['eye'][0x7*0x2fa+-0x1*0x63d+-0xe97]+(0x2c*-0xa6+0x1088*0x1+0x1b7*0x7)],-0x1*-0x2ec+0x2*0x5a8+-0xa54,0xa8d+0x2*-0x7f5+0x945);_0x3fa899&&(_0x364e4b=_0x3fa899['x']/(-0x2179+0x8e4+0x1ad*0x11),_0x2c40a1=_0x3fa899['y']/(0xa16*0x1+0x96f+0x23b*-0x7));}continue;case'1':var _0x364e4b=null,_0x2c40a1=null;continue;case'2':var _0x46d502=null,_0x52b8fe=null;continue;case'3':return{'identified':_0x549ebf['ident'+_0x1509bc(0xa3b)],'why':_0xf7ccf5[_0x1509bc(0x41a)],'source':_0x39d998[_0x1509bc(0x498)+'e'],'yawAt':_0x1adc2f['yawGe'+'tter']||_0x1509bc(0x2af)+'(gues'+'s)','pitchAt':_0x40ae34[_0x1509bc(0x7c8)+_0x1509bc(0x2a8)+'r']||_0xd45f84['CTbZY'],'getters':_0x2de8d0[_0x1509bc(0xb3e)+'rs'],'rawPitch':_0x4364b7['rawPi'+_0x1509bc(0xb0b)],'rawYaw':_0x3709d5['rawYa'+'w'],'pitch':_0x5f2b14[_0x1509bc(0x7c8)],'yaw':_0x18d316[_0x1509bc(0x984)],'legacyOffsetsCleared':_0x2e4f00,'fov':_0x11120a['fov'],'fovSane':_0xd45f84['jzeIG'](_0x13b7a5[_0x1509bc(0x26a)],0x9a7+0x1983*-0x1+-0x5*-0x338)&&_0x406e03[_0x1509bc(0x26a)]<=-0x1c4f*-0x1+-0x1aff*0x1+-0x2*0x71,'centreX':_0x364e4b,'centreY':_0x2c40a1,'aboveY':_0x46d502,'belowY':_0x52b8fe};case'4':if(_0x1405fb){var _0x459eb2=_0xd45f84['HfjxE'](_0x47b046,_0x1405fb[_0x1509bc(0x7df)],[_0x1405fb[_0x1509bc(0x7df)][-0x6b*-0xf+0x15ed+-0x3*0x966],_0x1405fb[_0x1509bc(0x7df)][0x51*0x2b+0x1*0x18b9+-0x2653]+(0x1e2*0xb+0x184f+-0x2cfb),_0xd45f84['tjDiI'](_0x1405fb['eye'][-0x2143+-0x302+-0x2447*-0x1],0x2044+-0x2592+-0x2ac*-0x2)],0xc0b*-0x1+0x80f+0x1f9*0x4,-0x5bf*-0x5+-0x227e+-0x3*-0x339);if(_0x459eb2)_0x46d502=_0xd45f84[_0x1509bc(0x55d)](_0x459eb2['y'],0x76*0x12+0x2*0x665+0x5ba*-0x3);var _0x32cac4=_0x295e7f(_0x1405fb['eye'],[_0x1405fb['eye'][0x176a+-0x2*-0x1f+-0x17a8],_0x1405fb[_0x1509bc(0x7df)][0x2*0x183+-0x8*0x2b6+0xb1*0x1b]-(-0x1ad3+0x69*0x1d+-0x1*-0xef8),_0xd45f84['tgUAM'](_0x1405fb['eye'][-0xb7+-0xa38+0xaf1],-0x7e2+-0x16ab+0x1e97)],-0x2701+0xb9a+0x1f4f,-0x5*-0x7b2+-0x1*0x2609+0x377);if(_0x32cac4)_0x52b8fe=_0xd45f84['nkdDF'](_0x32cac4['y'],-0x4d8+0x22dc+-0x1a1c);}continue;case'5':var _0x4d8e5f=_0xd45f84['zvBXH'](_0x10c3da);continue;case'6':var _0x1405fb=_0x393039();continue;}break;}}};if(_0x3cf52f)_0x3cf52f[_0x4f2cf5(0x898)+'ck']=function(){var _0x51fa40=_0x4f2cf5;_0x3cc668(_0x51fa40(0x34a)+'hot');};var _0x7d0fb4=![];function _0x45b7b7(){var _0x5a5cc6=_0x4f2cf5;_0x3cc668(_0x5a5cc6(0xa0b),{'on':_0x7d0fb4,'factor':_0x5591fc['hpkZl'](parseFloat,_0x29e408[_0x5a5cc6(0x6c7)])||0x2453+-0x19c*-0x1+-0x25ee});}if(_0x53e9fc)_0x53e9fc['oncli'+'ck']=function(){var _0x9c6c17=_0x4f2cf5;_0x7d0fb4=!_0x7d0fb4,_0x53e9fc[_0x9c6c17(0x173)+_0x9c6c17(0x3f4)+'t']=_0x7d0fb4?_0x49b767[_0x9c6c17(0x6f8)]:_0x9c6c17(0xaee)+_0x9c6c17(0x7e2),_0x53e9fc['style'][_0x9c6c17(0x9a3)+_0x9c6c17(0x2ff)]=_0x7d0fb4?_0x1bfdf2:_0x9c6c17(0xb02)+'paren'+'t',_0x53e9fc[_0x9c6c17(0xd5)][_0x9c6c17(0x4e3)]=_0x7d0fb4?_0x9c6c17(0x621)+'1b':_0x9c6c17(0x968)+'f5',_0x45b7b7();};if(_0x29e408)_0x29e408[_0x4f2cf5(0x462)+'ut']=function(){var _0x2d7f2c=_0x4f2cf5,_0x1d48f8={'RLOVc':function(_0x2fd8d8,_0x3f32df){return _0x2fd8d8(_0x3f32df);}};if('KIYfT'!==_0x49b767[_0x2d7f2c(0xad1)]){if(_0x354cc0)_0x354cc0[_0x2d7f2c(0x173)+'onten'+'t']=(_0x49b767[_0x2d7f2c(0x135)](parseFloat,_0x29e408['value'])||0x1*0x190d+-0xe6*0x19+-0x296*0x1)['toFix'+'ed'](0x1b77+-0x1290+-0x8e6)+'x';_0x45b7b7();}else _0x1d48f8[_0x2d7f2c(0x504)](_0x73a073,_0x93e066);};if(_0x179412)_0x179412['oncli'+'ck']=function(){var _0x49241a=_0x4f2cf5,_0x181c7e={'GoVRv':function(_0x360ced){return _0x360ced();},'jWJOg':'texta'+'rea','YBrOE':function(_0x235d0e){return _0x235d0e();}},_0x2e73b7=_0x49b767[_0x49241a(0x8b4)](_0x49b767[_0x49241a(0x8b4)](_0x2aa061,'\x0a'),_0x413cf4?JSON[_0x49241a(0xa97)+'gify'](_0x413cf4,null,-0x7*-0xb0+-0x26e5+0x2216*0x1):'')+'\x0a'+_0x5b81c7,_0x33b221=function(){var _0x260afd=_0x49241a;if(_0x179412)_0x179412[_0x260afd(0x173)+'onten'+'t']=_0x260afd(0xbf2)+'d';};if(navigator[_0x49241a(0x336)+'oard']&&navigator['clipb'+'oard']['write'+'Text'])navigator['clipb'+'oard'][_0x49241a(0x646)+'Text'](_0x2e73b7)[_0x49241a(0x398)](_0x33b221,function(){var _0x27c5ad=_0x49241a;_0x181c7e[_0x27c5ad(0x500)](_0x13c46c);});else _0x13c46c();function _0x13c46c(){var _0xef9f75=_0x49241a,_0x6b7e0b=(_0xef9f75(0xab4)+_0xef9f75(0x9b6)+'1|2')[_0xef9f75(0xa3)]('|'),_0x178646=-0x1*-0x1a1e+-0x180e*-0x1+-0x34*0xf7;while(!![]){switch(_0x6b7e0b[_0x178646++]){case'0':var _0x5e2865=document['creat'+_0xef9f75(0xa9a)+'ent'](_0x181c7e['jWJOg']);continue;case'1':try{document['execC'+_0xef9f75(0x754)+'d'](_0xef9f75(0x9a7)),_0x181c7e['YBrOE'](_0x33b221);}catch(_0x5179e9){}continue;case'2':_0x5e2865[_0xef9f75(0x768)+'e']();continue;case'3':if(!document['body'])return;continue;case'4':document[_0xef9f75(0x7ef)][_0xef9f75(0x3df)+_0xef9f75(0x566)+'d'](_0x5e2865);continue;case'5':_0x5e2865['value']=_0x2e73b7;continue;case'6':_0x5e2865['selec'+'t']();continue;}break;}}};_0x5591fc['qwNdf'](setTimeout,function(){var _0x1d5812=_0x4f2cf5;if(_0x413cf4)return;if(_0x49b767[_0x1d5812(0x6bf)](!_0x3d118a,!_0x22bccb))return;_0x3d118a['textC'+_0x1d5812(0x3f4)+'t']='no\x20re'+'port\x20'+'after'+'\x2060s\x20'+_0x1d5812(0x343)+_0x1d5812(0x62b)+_0x1d5812(0xaff)+_0x1d5812(0x774)+'?',_0x3d118a[_0x1d5812(0xd5)]['color']=_0x1d5812(0x967)+'c7',_0x22bccb[_0x1d5812(0x173)+_0x1d5812(0x3f4)+'t']=_0x49b767[_0x1d5812(0x8b4)](_0x49b767[_0x1d5812(0x8b4)](_0x49b767['kzAnZ'](_0x49b767[_0x1d5812(0x8b4)]('The\x20g'+'ame\x20f'+'rame\x20'+'never'+_0x1d5812(0xa57)+'ed\x20a\x20'+_0x1d5812(0x7f2)+_0x1d5812(0x6fb)+'ort.\x0a'+'\x0a',_0x49b767[_0x1d5812(0x93b)]),_0x1d5812(0x822)+_0x1d5812(0x7ba)+_0x1d5812(0x509)+_0x1d5812(0x2b4)+_0x1d5812(0xb11)+'\x20are:'+'\x0a\x0a'),_0x1d5812(0x133)+_0x1d5812(0x922)+_0x1d5812(0xade)+_0x1d5812(0xbf3)+'\x20not\x20'+'injec'+_0x1d5812(0xb78)+'into\x20'+'the\x20c'+_0x1d5812(0x8e5)+_0x1d5812(0x9ab)+_0x1d5812(0x37e)+_0x1d5812(0x2ec))+(_0x1d5812(0x48f)+'The\x20p'+_0x1d5812(0xad3)+'as\x20no'+_0x1d5812(0xada)+_0x1d5812(0xb38)+'oaded'+'\x20sinc'+'e\x20ins'+_0x1d5812(0x647)+_0x1d5812(0x69c))+(_0x1d5812(0xa54)+_0x1d5812(0xee)+_0x1d5812(0x6d0)+_0x1d5812(0x99e)+_0x1d5812(0x5fe)+_0x1d5812(0x3d6)+_0x1d5812(0x805)+_0x1d5812(0x493)+'he\x20ol'+'d\x20dia'+_0x1d5812(0x73f)+'ipt\x20a'+'re\x0a')+_0x49b767['QMdPV'],_0x49b767[_0x1d5812(0x657)]);},0x9e5+-0x1*-0x13349+0x3*-0x1b9a);var _0x5993cd={'set':function(_0x57d2e6){var _0x32a2a4=_0x4f2cf5,_0x53676b={'HEBZY':'bare\x20'+_0x32a2a4(0x399)+_0x32a2a4(0x78c)+'ng'};_0x413cf4=_0x57d2e6;if(_0x179412)_0x179412['style'][_0x32a2a4(0x68f)+'ay']='';if(_0x12f1ef){_0x12f1ef['textC'+'onten'+'t']=_0x5591fc['SBeSR']('v',_0x57d2e6[_0x32a2a4(0x9ce)+'on']||'?');var _0x5a2b03=_0xd31e38,_0x40edb6=_0x57d2e6[_0x32a2a4(0x9ce)+'on']||'';_0x12f1ef[_0x32a2a4(0xd5)][_0x32a2a4(0x4e3)]=_0x40edb6===_0x5a2b03?_0x1bfdf2:_0x32a2a4(0x8d3)+'74',_0x12f1ef[_0x32a2a4(0xd5)][_0x32a2a4(0x526)+'rColo'+'r']=_0x5591fc[_0x32a2a4(0x71e)](_0x40edb6,_0x5a2b03)?_0x32a2a4(0x9d)+'255,1'+_0x32a2a4(0x79e)+'7,.35'+')':'#ff6e'+'74';}var _0x1cf4af=_0x57d2e6['insta'+'nces']&&_0x57d2e6[_0x32a2a4(0x294)+_0x32a2a4(0x3a9)][_0x32a2a4(0x4e2)+'ntrol'+_0x32a2a4(0x92f)],_0x255707=Math['round'](_0x5591fc[_0x32a2a4(0xb43)](_0x57d2e6[_0x32a2a4(0x9f3)+_0x32a2a4(0x67a)]||0x22c+-0x173e+0x1512,-0x20c6+-0x7ad+0x2c5b));if(_0x3d118a){var _0x472848,_0x3639f0;if(_0x1cf4af&&_0x57d2e6[_0x32a2a4(0x4a2)+'y']&&_0x57d2e6[_0x32a2a4(0x4a2)+'y'][_0x32a2a4(0x4e2)+'ntrol'+_0x32a2a4(0x92f)])_0x472848=_0x5591fc[_0x32a2a4(0x7a3)](_0x5591fc[_0x32a2a4(0x7a3)](_0x32a2a4(0xb59)+'·\x20'+Object['keys'](_0x57d2e6[_0x32a2a4(0x294)+'nces'])[_0x32a2a4(0xa6a)+'h'],_0x5591fc['IAODN'])+_0x255707,'s'),_0x3639f0='#7ee0'+'a8';else{if(_0x5591fc[_0x32a2a4(0xb1)](_0x57d2e6[_0x32a2a4(0x489)+_0x32a2a4(0x8f5)+'ed'],-0x65*0xc+0x1e75+-0x19b9))_0x472848=_0x5591fc[_0x32a2a4(0x88b)]+_0x255707+'s',_0x3639f0=_0x32a2a4(0x69d)+'8a';else{if(_0x57d2e6[_0x32a2a4(0x602)+_0x32a2a4(0xea)]){if(_0x5591fc['OuFQD']==='wCdPK')return _0x1ef671['sourc'+'e']=_0x53676b['HEBZY'],_0x597984;else _0x472848=_0x5591fc[_0x32a2a4(0xab)]('metad'+_0x32a2a4(0x5f1)+_0x32a2a4(0xbe6)+'·\x20',_0x255707)+'s',_0x3639f0=_0x32a2a4(0x69d)+'8a';}else _0x472848=_0x5591fc['iXRWi'](_0x57d2e6[_0x32a2a4(0xc12)]&&_0x57d2e6[_0x32a2a4(0xc12)]['ok']?_0x5591fc['WFGBf']:_0x32a2a4(0x8e8)+_0x32a2a4(0x623),_0x255707)+'s',_0x3639f0=_0x5591fc['Ajocp'];}}_0x3d118a['textC'+'onten'+'t']=_0x472848,_0x3d118a['style'][_0x32a2a4(0x4e3)]=_0x3639f0;}if(_0x356b69){if(_0x32a2a4(0x3c7)!==_0x5591fc[_0x32a2a4(0x84c)]){var _0x48b23e=_0x4e3a37[_0x1803c2],_0x1a8fa1=_0x49b767['aSMuf'](typeof _0x48b23e['v'],_0x49b767['rUUYJ'])?_0x371e8d[_0x32a2a4(0x2ff)](_0x48b23e['v']*(0x576+0x3*-0xc66+0x11d2*0x2))/(-0x2e7*0x2+0x165d*0x1+-0xca7):_0x48b23e['v'];_0x4a84c8[_0x32a2a4(0xb4)](_0x49b767['ODAre']('\x20\x20'+_0x49b767[_0x32a2a4(0xaca)]('0x',_0x48b23e['o']['toStr'+_0x32a2a4(0x9e7)](-0x7f7+0x1bdf+0xfe*-0x14))['padEn'+'d'](0x2493+0x2f*-0xbb+-0x236),'\x20')+_0x48b23e['k'][_0x32a2a4(0x987)+'d'](-0x324+-0x1af5*0x1+-0x3*-0xa0c)+'\x20'+_0x418d3d(_0x1a8fa1)[_0x32a2a4(0x987)+'d'](0x1*0x2641+-0x9fd*-0x1+-0x302e)+'\x20'+(_0x48b23e['raw']||''));}else _0x356b69['textC'+_0x32a2a4(0x3f4)+'t']=_0x57d2e6['diff']&&_0x57d2e6['diff'][_0x32a2a4(0xa6a)+'h']?_0x5591fc[_0x32a2a4(0x2ab)]+_0x57d2e6[_0x32a2a4(0x45a)][_0x32a2a4(0x1ed)](',\x20'):_0x5591fc[_0x32a2a4(0xd3)];}_0x57d2e6['speed']&&_0x53e9fc&&(_0x7d0fb4=!!_0x57d2e6[_0x32a2a4(0xa0b)]['on'],_0x53e9fc['textC'+_0x32a2a4(0x3f4)+'t']=_0x7d0fb4?_0x32a2a4(0xaee)+'\x20ON':_0x5591fc['kWjNV'],_0x53e9fc[_0x32a2a4(0xd5)]['backg'+'round']=_0x7d0fb4?_0x1bfdf2:_0x5591fc[_0x32a2a4(0x4f2)],_0x53e9fc[_0x32a2a4(0xd5)][_0x32a2a4(0x4e3)]=_0x7d0fb4?_0x32a2a4(0x621)+'1b':_0x5591fc[_0x32a2a4(0x36a)],_0x354cc0&&_0x57d2e6[_0x32a2a4(0xa0b)][_0x32a2a4(0xa86)+'r']&&(_0x354cc0[_0x32a2a4(0x173)+_0x32a2a4(0x3f4)+'t']=Number(_0x57d2e6[_0x32a2a4(0xa0b)][_0x32a2a4(0xa86)+'r'])[_0x32a2a4(0x91b)+'ed'](-0xf14+0x7f*0x3c+-0xeaf)+'x'));if(_0x22bccb)try{_0x22bccb['textC'+_0x32a2a4(0x3f4)+'t']=_0x12f547(_0x57d2e6);}catch(_0x30488d){_0x22bccb['textC'+_0x32a2a4(0x3f4)+'t']=JSON[_0x32a2a4(0xa97)+_0x32a2a4(0x6d7)](_0x57d2e6,null,-0x2*-0xdd+0x36*-0x6+-0x75);}console['log'](_0x32a2a4(0xbd9)+'kura]'+_0x32a2a4(0x129)+_0x32a2a4(0x990)+'\x20repo'+'rt',_0x5591fc[_0x32a2a4(0x185)](_0x5591fc['OoXxb']('color'+':',_0x1bfdf2),';font'+_0x32a2a4(0x597)+_0x32a2a4(0x248)+'0'),_0x57d2e6),console['log'](_0x5591fc[_0x32a2a4(0x45d)](_0x2aa061+'\x0a'+JSON[_0x32a2a4(0xa97)+_0x32a2a4(0x6d7)](_0x57d2e6,null,-0x7ff+-0x79b+0xf9b)+'\x0a',_0x5b81c7));}};return _0x6a2a19[_0x4f2cf5(0xa1)+'et'][_0x4f2cf5(0xe6)]='1',_0x6a2a19['api']=_0x5993cd,_0x5993cd;}function _0x12f547(_0x22cf65){var _0x480ca0=_0x3e6ad4,_0x4210a3={'ZimlO':function(_0x3dbc53){return _0x3dbc53();}};if(_0x480ca0(0x32b)===_0x480ca0(0x947)){var _0x472466=_0x70b2b2['creat'+_0x480ca0(0xa9a)+_0x480ca0(0xac3)](_0x480ca0(0xd5));_0x472466['id']=_0x480ca0(0x6d0)+'a-men'+'u-css',_0x472466['textC'+_0x480ca0(0x3f4)+'t']=_0x595843,(_0x163200[_0x480ca0(0xa5)]||_0x529840[_0x480ca0(0xbcd)+_0x480ca0(0x563)+_0x480ca0(0x3ff)])[_0x480ca0(0x3df)+'dChil'+'d'](_0x472466);}else{var _0x201e94=[];_0x201e94[_0x480ca0(0xb4)](_0x5591fc[_0x480ca0(0x618)](_0x5591fc['MyXcw']+(_0x22cf65[_0x480ca0(0x6bb)]||'?')+_0x480ca0(0x154),Math['round']((_0x22cf65[_0x480ca0(0x9f3)+_0x480ca0(0x67a)]||0x2202+0x1*0xa3d+-0x2c3f)/(0x1b*0x102+0xd*-0x250+0x6c2)))+'s)'),_0x201e94[_0x480ca0(0xb4)](_0x5591fc['VFtZH'](_0x5591fc[_0x480ca0(0x706)]('uwmk\x20'+_0x480ca0(0xb66)+(_0x22cf65['uwmk']?_0x480ca0(0x1a3):'no'),_0x480ca0(0x8c7)+_0x480ca0(0x605)+'\x20')+(_0x22cf65[_0x480ca0(0x334)+'pCont'+_0x480ca0(0x801)]?_0x480ca0(0x1a3):'no'),_0x480ca0(0x28b)+_0x480ca0(0x397))+(_0x22cf65[_0x480ca0(0x205)+_0x480ca0(0x4fe)]!=null?_0x22cf65[_0x480ca0(0x205)+_0x480ca0(0x4fe)]:'?')),_0x201e94[_0x480ca0(0xb4)](_0x5591fc[_0x480ca0(0x29c)](_0x5591fc[_0x480ca0(0x45d)](_0x5591fc['BgGlM'](_0x480ca0(0x489)+'\x20\x20\x20\x20'+_0x22cf65['hooks'+_0x480ca0(0x8f5)+'ed'],'/'),_0x22cf65['hooks'+_0x480ca0(0xf8)]),_0x5591fc[_0x480ca0(0x9bc)])),_0x201e94['push']('');var _0xde366f=_0x22cf65['insta'+_0x480ca0(0x3a9)]||{},_0x2187a4=Object[_0x480ca0(0x6a5)](_0xde366f);!_0x2187a4['lengt'+'h']&&(_0x201e94['push']('no\x20li'+'ve\x20ob'+_0x480ca0(0xc20)+'\x20capt'+'ured\x20'+_0x480ca0(0x98f)),_0x201e94['push'](''),_0x201e94[_0x480ca0(0xb4)]('The\x20h'+'ooks\x20'+_0x480ca0(0x6d6)+_0x480ca0(0x357)+_0x480ca0(0xb88)+'e\x27s\x20o'+'wn\x20Up'+_0x480ca0(0x755)+_0x480ca0(0x71c)+_0x480ca0(0x70e)+_0x480ca0(0x11f)+'ured\x20'+'means'),_0x201e94['push'](_0x5591fc['eNvtr']));for(var _0x566191=-0xa0c+-0x1b48+-0x1*-0x2554;_0x566191<_0x2187a4[_0x480ca0(0xa6a)+'h'];_0x566191++){var _0x13c121=_0x2187a4[_0x566191];_0x201e94['push'](_0x5591fc['wQroQ'](_0x13c121,_0x5591fc[_0x480ca0(0xab7)])+_0xde366f[_0x13c121]);}_0x201e94[_0x480ca0(0xb4)]('');var _0x3bfc09=_0x22cf65['surve'+'y']||{},_0x50714f=Object['keys'](_0x3bfc09);for(var _0xefbd05=-0x13a9+0x1*-0x112f+0x24d8;_0xefbd05<_0x50714f[_0x480ca0(0xa6a)+'h'];_0xefbd05++){var _0x24562b=_0x50714f[_0xefbd05],_0x227d02=_0x3bfc09[_0x24562b];if(!_0x227d02||!_0x227d02[_0x480ca0(0xa6a)+'h'])continue;_0x201e94[_0x480ca0(0xb4)](_0x5591fc['bvHaz'](_0x5591fc[_0x480ca0(0x267)](_0x480ca0(0x941)+_0x24562b,'\x20'),new Array(Math[_0x480ca0(0x29f)](0x26f+0x2044+-0x22b2*0x1,-0x3*-0xa31+0x1a16+-0x3887-_0x24562b[_0x480ca0(0xa6a)+'h']))[_0x480ca0(0x1ed)]('─'))),_0x201e94[_0x480ca0(0xb4)]('\x20\x20off'+_0x480ca0(0x88c)+'\x20kind'+_0x480ca0(0x71b)+_0x480ca0(0x628)+_0x480ca0(0x9a4)+'\x20\x20\x20\x20\x20'+_0x480ca0(0x71b)+'raw');for(var _0xf6df9f=0x62b*-0x2+-0x109d+0x1cf3;_0x5591fc[_0x480ca0(0x297)](_0xf6df9f,_0x227d02[_0x480ca0(0xa6a)+'h']);_0xf6df9f++){var _0x2d0791=_0x227d02[_0xf6df9f],_0x530d70=_0x5591fc[_0x480ca0(0x2dd)](typeof _0x2d0791['v'],'numbe'+'r')?Math['round'](_0x2d0791['v']*(-0x241*0x11+-0x18e*-0x7+0x1f57))/(-0x21b7+-0xb31*-0x3+0x40c):_0x2d0791['v'];_0x201e94[_0x480ca0(0xb4)](_0x5591fc['XsOFC'](_0x5591fc[_0x480ca0(0x3b8)]('\x20\x20'+('0x'+_0x2d0791['o']['toStr'+'ing'](-0x198b+-0x80*-0x2b+0x41b))[_0x480ca0(0x987)+'d'](0x7be*-0x5+-0x1f3c*0x1+0x45fa),'\x20')+_0x2d0791['k'][_0x480ca0(0x987)+'d'](-0x4f*-0x67+0x1066*-0x2+0x6*0x2d)+'\x20',String(_0x530d70)['padEn'+'d'](-0x2197*-0x1+-0x1357*0x2+0x527))+'\x20'+(_0x2d0791['raw']||''));}_0x201e94[_0x480ca0(0xb4)]('');}if(_0x22cf65['warni'+_0x480ca0(0x47b)]&&_0x22cf65[_0x480ca0(0x2d4)+'ngs']['lengt'+'h']){if(_0x5591fc['BkHyf']!==_0x480ca0(0x251)){if(_0x1fa92f&&!_0x4210a3[_0x480ca0(0xba6)](_0x5185b5)){_0x4210a3['ZimlO'](_0x3b2f93);return;}_0x2f95f2(!![],_0x4c3c76);}else{_0x201e94[_0x480ca0(0xb4)](_0x5591fc['pXPQA']);for(var _0x33c8cc=0x20be+0x201b+0xd*-0x4fd;_0x33c8cc<_0x22cf65[_0x480ca0(0x2d4)+_0x480ca0(0x47b)]['lengt'+'h'];_0x33c8cc++)_0x201e94['push'](_0x480ca0(0x8b9)+_0x22cf65[_0x480ca0(0x2d4)+'ngs'][_0x33c8cc]);}}return _0x201e94['join']('\x0a');}}window[_0x3e6ad4(0x5e6)+_0x3e6ad4(0x622)+'stene'+'r']('messa'+'ge',function(_0x36a159){var _0x5aa273=_0x3e6ad4;if(_0x5591fc['sFgHZ'](_0x5aa273(0x22b),_0x5591fc[_0x5aa273(0x3c0)])){var _0x4db748=_0x36a159[_0x5aa273(0x5e3)];if(!_0x4db748||_0x5591fc[_0x5aa273(0xae0)](_0x4db748['__sak'+'ura'],_0x1b3e3d))return;try{if(_0x5591fc['nhRqp'](_0x5591fc[_0x5aa273(0x721)],'Ezlan')){if(_0x4db748['kind']==='hello'){if(_0x5591fc[_0x5aa273(0x789)](_0x5591fc['nrCal'],_0x5591fc['nrCal'])){_0x46ed6a()[_0x5aa273(0xb10)]({'host':_0x4db748['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}else{var _0xdb3edf=_0x18ea0b[_0x5aa273(0x4a5)](-0x25b*-0x5+-0x952*-0x2+-0x1e6b,-0xf1f+0x1db3*0x1+-0x84*0x1a);if(_0x1c0da5[_0x5aa273(0x467)+'Of'](_0xdb3edf)===-(0x3*-0x3da+-0xd*-0x277+0xc*-0x1b5)&&_0x224ec1[_0x5aa273(0xa6a)+'h']<0x167*0x18+-0x133f+-0xe2d)_0x57a6d3['push'](_0xdb3edf);}}if(_0x4db748['kind']===_0x5aa273(0x5ff)+'t')_0x46ed6a()[_0x5aa273(0xb10)](_0x4db748[_0x5aa273(0x5ff)+'t']);}else{var _0x3fbadc=_0x82a09d[_0x5aa273(0x53b)+_0x5aa273(0xa9a)+'ent'](_0x54c962);if(_0xe5e4aa)_0x3fbadc[_0x5aa273(0x9ed)+'Name']=_0x50a9c6;if(_0x2c083b!=null)_0x3fbadc['inner'+_0x5aa273(0x11c)]=_0x4e6c72;return _0x3fbadc;}}catch(_0x14fd45){console[_0x5aa273(0x42f)]('%c[sa'+_0x5aa273(0x231)+_0x5aa273(0x103)+'l\x20upd'+_0x5aa273(0x648)+_0x5aa273(0x52c),_0x5591fc['YdOOK']+_0x1bfdf2,_0x14fd45);}}else return _0x5591fc[_0x5aa273(0x618)](_0x5591fc['EKxOw']('0x',_0x5591fc[_0x5aa273(0x297)](_0xdf4683['o'],0x12*0xdc+-0xefa+-0x7e)?'?':_0x581b33['o']['toStr'+'ing'](-0x5*0x386+0x205d+0x15*-0xb3)),'\x20(')+_0x2aa8dd['why']+')';});function _0x55a429(){_0x5591fc['rcVgf'](_0x9779a7,!![]);}if(document['body'])_0x5591fc[_0x3e6ad4(0xaf5)](_0x55a429);else document['addEv'+'entLi'+'stene'+'r'](_0x5591fc[_0x3e6ad4(0x1f6)],_0x55a429,{'once':!![]});return;}window['__SAK'+_0x3e6ad4(0x8bd)+_0x3e6ad4(0x230)]=window['__SAK'+'URA_S'+_0x3e6ad4(0x230)]||{'at':Date[_0x3e6ad4(0x5e4)]()};function _0x496d79(_0x48c427,_0x454194){var _0x4ad542=_0x3e6ad4,_0x4760c9={'YfUHo':function(_0x26e464){return _0x26e464();}},_0x2187e9={'__sakura':_0x1b3e3d,'kind':_0x48c427};if(_0x454194){for(var _0x3e7448 in _0x454194)_0x2187e9[_0x3e7448]=_0x454194[_0x3e7448];}try{if(window[_0x4ad542(0xc9)+'t']&&_0x5591fc[_0x4ad542(0x34b)](window[_0x4ad542(0xc9)+'t'],window))window[_0x4ad542(0xc9)+'t'][_0x4ad542(0x10a)+'essag'+'e'](_0x2187e9,'*');}catch(_0xc1955b){}try{if(_0x5591fc['TKope']('JLPHm',_0x5591fc['SgAYp'])){if(window['top']&&_0x5591fc['rWYKh'](window['top'],window))window[_0x4ad542(0x92)][_0x4ad542(0x10a)+'essag'+'e'](_0x2187e9,'*');}else{var _0x11737e=_0x41de46[_0x4ad542(0x7f6)+_0x4ad542(0x3ff)+'ById'](_0x5591fc[_0x4ad542(0x34e)]);if(_0x5591fc[_0x4ad542(0x43f)](_0xc873d7,!_0x11737e)&&_0x336945['body']){var _0x13caa7=(_0x4ad542(0x340)+'|2|1|'+'3')['split']('|'),_0x2a037f=-0xe0f+-0xfee+0x1dfd;while(!![]){switch(_0x13caa7[_0x2a037f++]){case'0':_0x4dce20[_0x4ad542(0xd5)][_0x4ad542(0x70f)+'xt']=_0x5591fc[_0x4ad542(0xed)](_0x5591fc[_0x4ad542(0x483)](_0x5591fc['Trlkr']+(_0x4ad542(0x9a3)+'round'+':rgba'+_0x4ad542(0x7a8)+_0x4ad542(0x67e)+_0x4ad542(0x9e1)+_0x4ad542(0x72d)+_0x4ad542(0x224)+'solid'+_0x4ad542(0xa04)+_0x4ad542(0x43e)+_0x4ad542(0x547)+_0x4ad542(0x606)+');col'+'or:'),_0x3d3c53),';')+_0x5591fc['xKlJz'];continue;case'1':_0x4dce20[_0x4ad542(0x898)+'ck']=function(){var _0x5b4102=_0x4ad542;_0x53af3f(![]),_0x4760c9[_0x5b4102(0x2e9)](_0xf40f3f);};continue;case'2':_0x4dce20[_0x4ad542(0x173)+'onten'+'t']=_0x4ad542(0x6d0)+'a';continue;case'3':_0x4862a8[_0x4ad542(0x7ef)][_0x4ad542(0x3df)+'dChil'+'d'](_0x4dce20);continue;case'4':_0x4dce20['id']=_0x5591fc[_0x4ad542(0x34e)];continue;case'5':var _0x4dce20=_0x1f2e03['creat'+_0x4ad542(0xa9a)+_0x4ad542(0xac3)](_0x4ad542(0x786));continue;}break;}}else _0x5591fc['NzNoN'](!_0xc747d1,_0x11737e)&&_0x11737e[_0x4ad542(0x768)+'e']();}}catch(_0x1e9f06){}}console[_0x3e6ad4(0xb1f)](_0x3e6ad4(0xbd9)+_0x3e6ad4(0x231)+'\x20SW-P'+_0x3e6ad4(0x733)+'\x20ACTI'+'VE\x20v'+_0xd31e38,'color'+':'+_0x1bfdf2+(';font'+_0x3e6ad4(0x597)+'ht:70'+_0x3e6ad4(0x424)+_0x3e6ad4(0x9c6)+'e:14p'+'x'),{'host':_0x3dc887,'href':location[_0x3e6ad4(0x5c3)],'version':_0xd31e38}),_0x496d79(_0x3e6ad4(0xa35),{'host':_0x3dc887,'role':_0x55f777});var _0x50451a=window['__SAK'+'URA_S'+_0x3e6ad4(0x230)]&&window['__SAK'+'URA_S'+_0x3e6ad4(0x230)]['at']||Date['now']();window[_0x3e6ad4(0x5e6)+_0x3e6ad4(0x622)+_0x3e6ad4(0xb2c)+'r'](_0x3e6ad4(0x153)+'ge',function(_0x5bb7de){var _0xd50ed0=_0x3e6ad4;if(_0xd50ed0(0x9c7)===_0x5591fc['aUJUj'])try{var _0x214977=_0x5bb7de&&_0x5bb7de[_0xd50ed0(0x5e3)];if(!_0x214977||_0x5591fc[_0xd50ed0(0x8ac)](_0x214977['__sak'+_0xd50ed0(0x4b1)],_0x1b3e3d)||_0x5591fc['YWReQ'](_0x214977['kind'],_0xd50ed0(0x391)))return;_0x5591fc['qwNdf'](_0x314eea,_0x214977['cmd'],_0x214977[_0xd50ed0(0x444)]);}catch(_0x20c6d4){}else{var _0x4ce9d9=_0x3d93d1[_0xd50ed0(0x53b)+'eElem'+'ent'](_0xd50ed0(0xd5));_0x4ce9d9['id']='sakur'+'a-sw-'+'hud-c'+'ss',_0x4ce9d9[_0xd50ed0(0x173)+_0xd50ed0(0x3f4)+'t']=_0x5591fc['cqPpa'],(_0xc47a25[_0xd50ed0(0xa5)]||_0x4900f2['docum'+_0xd50ed0(0x563)+'ement'])[_0xd50ed0(0x3df)+_0xd50ed0(0x566)+'d'](_0x4ce9d9);}});try{var _0x39a268=new BroadcastChannel(_0x5591fc[_0x3e6ad4(0xb05)]);_0x39a268['onmes'+_0x3e6ad4(0x12d)]=function(_0x211289){var _0x413975=_0x3e6ad4,_0x4f5dbd=_0x211289['data'];if(_0x4f5dbd&&_0x4f5dbd['__sak'+'ura']===_0x1b3e3d&&_0x4f5dbd[_0x413975(0x524)]===_0x5591fc[_0x413975(0x3ee)])_0x5591fc[_0x413975(0x6ef)](_0x314eea,_0x4f5dbd['cmd'],_0x4f5dbd[_0x413975(0x444)]);};}catch(_0x16fe89){}var _0xf392a7=[];(function _0x147d48(){var _0x1f17c5=_0x3e6ad4,_0x257bce={'ZApcB':function(_0x3bc8d6,_0x16fb65){return _0x3bc8d6<_0x16fb65;},'ZpPyr':'jaIIF'},_0x28bcc3=['log','warn',_0x5591fc['DjUrZ'],_0x5591fc[_0x1f17c5(0x5d4)],_0x1f17c5(0x796)];for(var _0x88e422=0x481*-0x3+-0x6c6+0x1449;_0x88e422<_0x28bcc3[_0x1f17c5(0xa6a)+'h'];_0x88e422++){(function(_0x3f687b){var _0x2fb1e6=_0x1f17c5,_0x46dc71={'CKdRR':function(_0x22a727,_0x1f1c1b){var _0x7c7126=_0x3f00;return _0x257bce[_0x7c7126(0x8f3)](_0x22a727,_0x1f1c1b);},'hqIdG':function(_0x316be8,_0x5692c7){return _0x316be8===_0x5692c7;},'bQuTY':_0x2fb1e6(0xa97)+'g','hBnEN':function(_0x574056,_0x3a52ad){return _0x574056!==_0x3a52ad;},'jIfLe':_0x2fb1e6(0xc3)};if(_0x257bce[_0x2fb1e6(0x92d)]!=='jaIIF')return _0x406e17['on'];else{var _0x3d782d=console[_0x3f687b];if(typeof _0x3d782d!=='funct'+_0x2fb1e6(0x2ca))return;console[_0x3f687b]=function(){var _0x3101be=_0x2fb1e6;try{var _0x35f14f='';for(var _0x214024=-0xb6b+0x198a+0xe1f*-0x1;_0x46dc71[_0x3101be(0x8d0)](_0x214024,arguments[_0x3101be(0xa6a)+'h']);_0x214024++){var _0xb9d498=arguments[_0x214024];if(_0x46dc71[_0x3101be(0x5c4)](typeof _0xb9d498,_0x46dc71['bQuTY']))_0x35f14f+=_0xb9d498;else{if(_0xb9d498&&_0xb9d498[_0x3101be(0x153)+'ge'])_0x35f14f+=_0xb9d498['messa'+'ge'];}}if(_0x46dc71['hBnEN'](_0x35f14f['index'+'Of'](_0x2aa061),-(-0x7c7*-0x3+0x1f*-0xdf+0x3ad)))return _0x3d782d[_0x3101be(0x24f)](console,arguments);if(_0x35f14f[_0x3101be(0x467)+'Of'](_0x3101be(0xb3d)+_0x3101be(0x94f)+_0x3101be(0x77b))!==-(-0x1*0x151f+-0xc7a*-0x1+-0x29*-0x36)){if('VqfUh'!==_0x46dc71[_0x3101be(0x8fd)]){var _0x53f7d8=_0x35f14f[_0x3101be(0x4a5)](-0x25a6+0x509*0x1+0x209d,-0x13*-0xa2+0x4ea*0x2+-0xa57*0x2);if(_0x46dc71['hqIdG'](_0xf392a7['index'+'Of'](_0x53f7d8),-(-0x2*0xcb+-0x547+0x6de))&&_0xf392a7[_0x3101be(0xa6a)+'h']<-0x1*-0x185+0x3f2+-0x67*0xd)_0xf392a7[_0x3101be(0xb4)](_0x53f7d8);}else{var _0x580c1d=_0xfabe78();if(!_0x580c1d)return null;return{'ptr':'0x'+_0x580c1d[_0x3101be(0x6a2)][_0x3101be(0x8e7)+_0x3101be(0x9e7)](-0x27*0xdd+0x1afb*0x1+0x6c0),'feet':_0x580c1d['feet'],'eye':_0x580c1d[_0x3101be(0x7df)],'posAt':_0x580c1d[_0x3101be(0x225)],'copies':_0x580c1d[_0x3101be(0x813)+'s'],'cluster':_0x580c1d[_0x3101be(0xb7b)+'er'],'eyeHeight':_0x5645b2,'pitch':_0x580c1d[_0x3101be(0x7c8)],'yaw':_0x580c1d[_0x3101be(0x984)],'reach':_0x580c1d[_0x3101be(0xacf)]};}}}catch(_0x3521c0){}return _0x3d782d['apply'](console,arguments);};}}(_0x28bcc3[_0x88e422]));}}());var _0x4bce30={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x212e3f=null,_0x3311a8=null,_0x3d4382=-(0x1*0x122+0x1*0xa61+-0x3d6*0x3),_0x4ac8f0=null;function _0x2e94c7(_0x24da1b){var _0x3ced77=_0x3e6ad4;try{if(!_0x24da1b)return;var _0x5d513b=_0x24da1b['insta'+'nce']?_0x24da1b[_0x3ced77(0x294)+'nce'][_0x3ced77(0x2e7)+'ts']:_0x24da1b[_0x3ced77(0x2e7)+'ts']||null;if(!_0x5d513b)return;if(!_0x4ac8f0)try{_0x4ac8f0=Object[_0x3ced77(0x6a5)](_0x5d513b)[_0x3ced77(0x4a5)](0x205f+-0x932+0x15d*-0x11,-0xe6a+-0x3f4+-0x1*-0x1276);}catch(_0x1033b4){}var _0x1c5ba9=_0x5d513b['memor'+'y'];_0x1c5ba9&&_0x1c5ba9['buffe'+'r']&&_0x1c5ba9[_0x3ced77(0x957)+'r'][_0x3ced77(0xbcc)+'ength']>-0x4*-0x6b2+-0x1*0x1fbb+0x4f3&&(_0x3311a8=_0x1c5ba9,_0x3d4382=Date['now']()-_0x50451a);}catch(_0x36d9f1){}}function _0x5176ac(){var _0xd5a99a=_0x3e6ad4;try{if(typeof WebAssembly===_0xd5a99a(0x91)+'ined')return;var _0x104218=[_0x5591fc[_0xd5a99a(0x5e2)],'insta'+_0xd5a99a(0x9db)+_0xd5a99a(0x57c)+'aming'];for(var _0x2ea73d=-0x120+-0x4*-0x7cf+-0x2f*0xa4;_0x5591fc[_0xd5a99a(0xad)](_0x2ea73d,_0x104218[_0xd5a99a(0xa6a)+'h']);_0x2ea73d++){if(_0x5591fc[_0xd5a99a(0x33f)](_0xd5a99a(0x829),_0xd5a99a(0xa4d)))(function(_0x1e8d08){var _0x3afe62=_0xd5a99a,_0x1c0c72={'kvQTR':function(_0x4c748b,_0x31a2ba){return _0x4c748b(_0x31a2ba);},'WAJQz':function(_0x23a29e,_0x4fad9c){return _0x23a29e!==_0x4fad9c;},'LmQEF':_0x5591fc['YFyjO']},_0x124aac=WebAssembly[_0x1e8d08];if(typeof _0x124aac!=='funct'+_0x3afe62(0x2ca)||_0x124aac[_0x3afe62(0x635)+'uraMe'+_0x3afe62(0x7f4)+'ap'])return;var _0x1ce352=function(){var _0x50ce9a=_0x3afe62;if(_0x1c0c72['WAJQz']('RTIAJ','RTIAJ'))_0x57fb09(![]);else{var _0x3e4e84=_0x124aac[_0x50ce9a(0x24f)](this,arguments);try{if(_0x50ce9a(0x8f)!=='JJAQZ'){if(_0x3e4e84&&typeof _0x3e4e84['then']===_0x1c0c72[_0x50ce9a(0x89f)])_0x3e4e84['then'](_0x2e94c7,function(){});else _0x2e94c7(_0x3e4e84);}else try{_0x2e5ba9[_0x50ce9a(0x3d7)+'em'](_0x2da5f4,_0x1c0c72[_0x50ce9a(0x486)](_0x25d3bc,_0x5b41c8['fov']));}catch(_0x205871){}}catch(_0x396c76){}return _0x3e4e84;}};_0x1ce352['__sak'+'uraMe'+_0x3afe62(0x7f4)+'ap']=!![];try{Object['defin'+_0x3afe62(0x6f2)+'erty'](_0x1ce352,'name',{'value':_0x124aac['name'],'configurable':!![]});}catch(_0xc31347){}WebAssembly[_0x1e8d08]=_0x1ce352;}(_0x104218[_0x2ea73d]));else return null;}}catch(_0xb0d190){}}var _0x350f02=null,_0x30b685=null,_0x3f2eb8={},_0x4b0373={'MouseLook':[{'name':_0x5591fc[_0x3e6ad4(0x31d)],'ret':'void','params':[],'wasmParams':['i32']},{'name':'\u0094\u0090\u0089\u008f\u0089'+_0x3e6ad4(0xb74)+'\u008e','ret':_0x5591fc[_0x3e6ad4(0xb94)],'params':[_0x3e6ad4(0x62a)],'wasmParams':['i32',_0x5591fc['WDhIp']]},{'name':_0x5591fc[_0x3e6ad4(0x838)],'ret':_0x3e6ad4(0xcc),'params':['float'],'wasmParams':['i32',_0x5591fc['WDhIp']]},{'name':_0x3e6ad4(0xb12)+'\u008e\u0090\u0091\u0094\u008e'+'\u0095','ret':_0x5591fc[_0x3e6ad4(0xb94)],'params':[_0x5591fc['LGanj']],'wasmParams':['i32',_0x5591fc['WDhIp']]},{'name':_0x5591fc[_0x3e6ad4(0x601)],'ret':_0x5591fc[_0x3e6ad4(0xb94)],'params':[],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)]]},{'name':_0x3e6ad4(0x273)+_0x3e6ad4(0xa41)+'\u0094','ret':_0x5591fc[_0x3e6ad4(0xb94)],'params':[],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)]]},{'name':_0x3e6ad4(0x381)+'\u008b\u008a\u0087\u0089\u0091'+'\u008f','ret':_0x5591fc['vZyEB'],'params':[],'wasmParams':['i32']},{'name':'LateU'+_0x3e6ad4(0x142),'ret':'void','params':[],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)]]},{'name':_0x3e6ad4(0x1bf)+'\u008e\u008f\u0091\u0088\u008c'+'\u0095','ret':_0x5591fc['vZyEB'],'params':[],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)]]},{'name':_0x5591fc['hKTfm'],'ret':'float','params':[],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)]],'wasmRet':_0x3e6ad4(0x211)},{'name':_0x5591fc[_0x3e6ad4(0x716)],'ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':['i32']},{'name':_0x5591fc[_0x3e6ad4(0x7ac)],'ret':_0x5591fc['vZyEB'],'params':[_0x3e6ad4(0x62a)],'wasmParams':[_0x3e6ad4(0x63b),_0x3e6ad4(0x211)]},{'name':'\u0093\u0089\u0095\u0092\u0090'+_0x3e6ad4(0x949)+'\u008d','ret':_0x5591fc[_0x3e6ad4(0x201)],'params':[],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)]],'wasmRet':_0x5591fc[_0x3e6ad4(0xb21)]},{'name':_0x3e6ad4(0x3eb)+_0x3e6ad4(0xa24)+'\u0092','ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':_0x3e6ad4(0xb75)+_0x3e6ad4(0x43d)+'\u0091','ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)]]},{'name':'\u0090\u0091\u0095\u008c\u008e'+_0x3e6ad4(0x4a6)+'\u008a','ret':_0x5591fc['vZyEB'],'params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':_0x5591fc['GGwef'],'ret':_0x5591fc[_0x3e6ad4(0xb94)],'params':[],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)]]},{'name':_0x5591fc[_0x3e6ad4(0x3fd)],'ret':_0x3e6ad4(0xcc),'params':['float',_0x5591fc['LGanj']],'wasmParams':[_0x5591fc['GhEVH'],_0x3e6ad4(0x211),'f32']},{'name':_0x5591fc['WoTlM'],'ret':_0x3e6ad4(0x62a),'params':[],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)]],'wasmRet':_0x5591fc[_0x3e6ad4(0xb21)]},{'name':_0x5591fc[_0x3e6ad4(0x3e2)],'ret':'void','params':[],'wasmParams':[_0x5591fc['GhEVH']]},{'name':_0x3e6ad4(0x8e0),'ret':_0x5591fc['vZyEB'],'params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':_0x3e6ad4(0x438)+_0x3e6ad4(0xbfd)+'\u008e','ret':_0x5591fc[_0x3e6ad4(0xb94)],'params':[_0x3e6ad4(0x62a)],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)],_0x5591fc[_0x3e6ad4(0xb21)]]},{'name':_0x5591fc[_0x3e6ad4(0x15d)],'ret':_0x3e6ad4(0x62a),'params':[],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)]],'wasmRet':_0x3e6ad4(0x211)},{'name':_0x5591fc[_0x3e6ad4(0x3a8)],'ret':_0x3e6ad4(0xcc),'params':[_0x5591fc['LGanj'],'float'],'wasmParams':[_0x3e6ad4(0x63b),_0x5591fc[_0x3e6ad4(0xb21)],'f32']},{'name':_0x3e6ad4(0xe3)+'\u008c\u0087\u0086\u008c\u0092'+'\u008d','ret':'void','params':[],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)]]},{'name':_0x3e6ad4(0xa0a)+'\u0089\u0091\u0086\u008a\u0091'+'\u008a','ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':_0x5591fc[_0x3e6ad4(0x380)],'ret':_0x3e6ad4(0xcc),'params':[_0x3e6ad4(0x62a)],'wasmParams':[_0x5591fc['GhEVH'],_0x5591fc['WDhIp']]},{'name':'\u0090\u008e\u0095\u0093\u008d'+_0x3e6ad4(0x58b)+'\u0093','ret':_0x5591fc['LGanj'],'params':[],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)]],'wasmRet':'f32'},{'name':_0x3e6ad4(0x5c6)+_0x3e6ad4(0x54f)+'\u008a','ret':_0x3e6ad4(0x62a),'params':[],'wasmParams':[_0x3e6ad4(0x63b)],'wasmRet':_0x5591fc['WDhIp']},{'name':'\u008f\u0091\u0092\u0094\u008a'+'\u0089\u008a\u0093\u0090\u0095'+'\u0088','ret':_0x5591fc[_0x3e6ad4(0xb94)],'params':[_0x5591fc['LGanj']],'wasmParams':[_0x3e6ad4(0x63b),'f32']},{'name':'\u0087\u008f\u008d\u008b\u0092'+_0x3e6ad4(0xfe)+'\u008c','ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':[_0x5591fc['GhEVH']]},{'name':_0x5591fc['OnALc'],'ret':_0x3e6ad4(0xcc),'params':[_0x5591fc['LGanj']],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)],_0x5591fc[_0x3e6ad4(0xb21)]]},{'name':_0x5591fc[_0x3e6ad4(0xa8c)],'ret':_0x5591fc['vZyEB'],'params':[],'wasmParams':['i32']},{'name':_0x3e6ad4(0x451)+'\u008c\u008a\u0089\u0090\u008c'+'\u0090','ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':_0x5591fc[_0x3e6ad4(0x707)],'ret':_0x3e6ad4(0xcc),'params':[_0x3e6ad4(0x62a)],'wasmParams':[_0x5591fc['GhEVH'],_0x3e6ad4(0x211)]}],'FPScontroller':[{'name':_0x5591fc[_0x3e6ad4(0x819)],'ret':_0x5591fc['LGanj'],'params':[],'wasmParams':['i32'],'wasmRet':'f32'},{'name':_0x3e6ad4(0x3d4)+'\u0092\u0091\u0088\u008c\u0090'+'\u0092','ret':'void','params':[],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)]]},{'name':_0x3e6ad4(0x5df)+_0x3e6ad4(0x866)+'\u0094','ret':_0x5591fc['aCGTN'],'params':[],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)]],'wasmRet':_0x3e6ad4(0x63b)},{'name':'\u0090\u0087\u0089\u0088\u008e'+_0x3e6ad4(0x3d5)+'\u008b','ret':_0x3e6ad4(0xcc),'params':[_0x5591fc['aCGTN']],'wasmParams':[_0x3e6ad4(0x63b),_0x3e6ad4(0x63b)]},{'name':_0x3e6ad4(0xb31)+'\u0092\u0095\u0090\u0089\u0088'+'\u0092','ret':'void','params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':_0x3e6ad4(0x421)+_0x3e6ad4(0x9f5)+'\u008a','ret':_0x5591fc['vZyEB'],'params':[],'wasmParams':['i32']},{'name':_0x3e6ad4(0xa0a)+'\u0089\u0091\u0086\u008a\u0091'+'\u008a','ret':'void','params':[],'wasmParams':['i32']},{'name':'\u0088\u0093\u0088\u0095\u008b'+'\u008f\u008b\u0088\u0087\u0086'+'\u0087','ret':_0x5591fc['aCGTN'],'params':[],'wasmParams':['i32'],'wasmRet':_0x3e6ad4(0x63b)},{'name':_0x3e6ad4(0x308)+_0x3e6ad4(0x64a)+'\u0087','ret':'void','params':[],'wasmParams':['i32']},{'name':'\u0090\u0092\u008e\u008e\u0087'+'\u008f\u008c\u0086\u0091\u0089'+'\u0093','ret':_0x3e6ad4(0x356),'params':[],'wasmParams':['i32'],'wasmRet':_0x5591fc[_0x3e6ad4(0x96)]},{'name':'\u008e\u008b\u008e\u0091\u008c'+'\u008b\u0094\u0088\u0090\u0088'+'\u008a','ret':_0x3e6ad4(0x356),'params':[],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)]],'wasmRet':'i32'},{'name':_0x3e6ad4(0x5cb)+'\u008c\u0087\u0095\u0093\u008b'+'\u0094','ret':_0x5591fc['vZyEB'],'params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':'\u0095\u0087\u0089\u008c\u008e'+_0x3e6ad4(0xa76)+'\u0095','ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)]]},{'name':_0x5591fc[_0x3e6ad4(0x558)],'ret':_0x3e6ad4(0x356),'params':[_0x5591fc[_0x3e6ad4(0x6cf)],'bool'],'wasmParams':[_0x3e6ad4(0x63b),_0x3e6ad4(0x63b),'i32'],'wasmRet':'i32'},{'name':_0x5591fc[_0x3e6ad4(0x77f)],'ret':'void','params':[],'wasmParams':['i32']},{'name':'\u0089\u0089\u008e\u0092\u0089'+_0x3e6ad4(0xb04)+'\u0092','ret':_0x5591fc['aCGTN'],'params':[],'wasmParams':['i32'],'wasmRet':_0x3e6ad4(0x63b)},{'name':_0x3e6ad4(0xae6)+_0x3e6ad4(0x5dd)+'\u008f','ret':_0x5591fc['vZyEB'],'params':['bool'],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)],'i32']},{'name':_0x3e6ad4(0x6ba)+_0x3e6ad4(0x19d)+'\u008e','ret':_0x5591fc['vZyEB'],'params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':_0x3e6ad4(0x400)+'\u0086\u008c\u008a\u008b\u0086'+'\u0089','ret':'bool','params':[],'wasmParams':[_0x3e6ad4(0x63b)],'wasmRet':_0x5591fc[_0x3e6ad4(0x96)]},{'name':_0x3e6ad4(0xb1a)+'\u008e\u0093\u0095\u008d\u008e'+'\u008f','ret':_0x5591fc[_0x3e6ad4(0xb94)],'params':[],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)]]},{'name':_0x5591fc['ipBIH'],'ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':_0x5591fc[_0x3e6ad4(0x363)],'ret':_0x5591fc['vZyEB'],'params':[],'wasmParams':['i32']},{'name':'\u008a\u0088\u0087\u0090\u008f'+'\u0086\u008b\u008e\u008a\u0089'+'\u008b','ret':_0x5591fc[_0x3e6ad4(0xb94)],'params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':_0x5591fc['FFfww'],'ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':['i32']},{'name':'\u008b\u0090\u0088\u008d\u0087'+_0x3e6ad4(0x472)+'\u0090','ret':_0x5591fc[_0x3e6ad4(0xb94)],'params':[_0x3e6ad4(0x356)],'wasmParams':['i32',_0x3e6ad4(0x63b)]},{'name':_0x3e6ad4(0x4f8)+_0x3e6ad4(0x626)+'\u0086','ret':_0x5591fc[_0x3e6ad4(0xb94)],'params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':_0x5591fc[_0x3e6ad4(0x72e)],'ret':_0x5591fc[_0x3e6ad4(0xb94)],'params':[],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)]]},{'name':_0x5591fc['MGSwx'],'ret':_0x5591fc['vZyEB'],'params':[],'wasmParams':['i32']},{'name':'\u008b\u0095\u008a\u008c\u0086'+_0x3e6ad4(0x88e)+'\u0091','ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':_0x3e6ad4(0x59b)+_0x3e6ad4(0x47e)+'\u008a','ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':'\u0087\u008b\u0088\u0090\u008e'+_0x3e6ad4(0x280)+'\u0092','ret':_0x5591fc[_0x3e6ad4(0xb94)],'params':[],'wasmParams':['i32']},{'name':_0x3e6ad4(0x67c)+'\u0095\u008e\u008c\u008c\u0092'+'\u0091','ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':'\u0093\u0086\u0088\u008d\u008f'+'\u0094\u0087\u008c\u0091\u008a'+'\u0094','ret':_0x5591fc['vZyEB'],'params':[_0x3e6ad4(0x356)],'wasmParams':['i32',_0x5591fc['GhEVH']]},{'name':_0x5591fc[_0x3e6ad4(0x181)],'ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':'\u0094\u0094\u008e\u0091\u0090'+_0x3e6ad4(0x3ca)+'\u0095','ret':_0x5591fc[_0x3e6ad4(0xb94)],'params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':_0x5591fc[_0x3e6ad4(0xa90)],'ret':'void','params':[],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)]]},{'name':_0x3e6ad4(0x30f)+_0x3e6ad4(0x12c)+'\u0087','ret':_0x5591fc['vZyEB'],'params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':_0x5591fc['Dsmnd'],'ret':'void','params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':_0x3e6ad4(0x696)+_0x3e6ad4(0x8ee)+'\u0087','ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':[_0x5591fc['GhEVH']]},{'name':_0x5591fc[_0x3e6ad4(0x6cc)],'ret':'void','params':[_0x5591fc['aCGTN']],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)],_0x5591fc[_0x3e6ad4(0x96)]]},{'name':_0x3e6ad4(0x9f0)+_0x3e6ad4(0x1be)+'\u008f','ret':_0x5591fc[_0x3e6ad4(0x6cf)],'params':[],'wasmParams':['i32'],'wasmRet':_0x3e6ad4(0x63b)},{'name':_0x3e6ad4(0x2b7)+_0x3e6ad4(0x7b1)+'\u0086','ret':'bool','params':[],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)]],'wasmRet':_0x3e6ad4(0x63b)},{'name':_0x5591fc['CoVVp'],'ret':_0x5591fc['aCGTN'],'params':[],'wasmParams':[_0x3e6ad4(0x63b)],'wasmRet':_0x3e6ad4(0x63b)},{'name':_0x5591fc[_0x3e6ad4(0x8ce)],'ret':'void','params':[],'wasmParams':[_0x5591fc['GhEVH']]},{'name':_0x3e6ad4(0x8e0),'ret':'void','params':[],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)]]},{'name':_0x5591fc['mOPRO'],'ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':_0x5591fc['jjOFT'],'ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':[_0x5591fc['GhEVH']]},{'name':_0x5591fc['gxGuE'],'ret':_0x5591fc[_0x3e6ad4(0xb94)],'params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':_0x3e6ad4(0x14a)+_0x3e6ad4(0x387)+'\u008f','ret':_0x5591fc[_0x3e6ad4(0xb94)],'params':[],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)]]},{'name':_0x3e6ad4(0xaf0)+_0x3e6ad4(0x567)+'\u0094','ret':_0x5591fc['vZyEB'],'params':[_0x5591fc['LGanj']],'wasmParams':[_0x3e6ad4(0x63b),_0x3e6ad4(0x211)]},{'name':_0x3e6ad4(0x39c)+_0x3e6ad4(0x5aa)+'\u0092','ret':_0x5591fc['aCGTN'],'params':[],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)]],'wasmRet':_0x5591fc['GhEVH']},{'name':_0x5591fc[_0x3e6ad4(0x5b7)],'ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':[_0x5591fc['GhEVH']]},{'name':_0x5591fc['hNUKS'],'ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':_0x3e6ad4(0x2c1)+_0x3e6ad4(0x832)+'\u0092','ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':['i32']},{'name':'\u008b\u0090\u008d\u0095\u0086'+'\u008f\u0095\u0090\u0087\u008d'+'\u008c','ret':_0x5591fc[_0x3e6ad4(0x6cf)],'params':[],'wasmParams':['i32'],'wasmRet':'i32'},{'name':'\u0094\u008c\u008f\u008e\u008b'+'\u0087\u008d\u008f\u008d\u0095'+'\u0087','ret':'bool','params':['bool',_0x5591fc[_0x3e6ad4(0x6cf)]],'wasmParams':[_0x5591fc['GhEVH'],_0x5591fc['GhEVH'],'i32'],'wasmRet':_0x5591fc[_0x3e6ad4(0x96)]},{'name':_0x5591fc['xWbMs'],'ret':_0x5591fc['vZyEB'],'params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':_0x3e6ad4(0xb5e)+'\u008f\u0093\u0086\u008b\u008e'+'\u008e','ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':_0x5591fc[_0x3e6ad4(0x5f3)],'ret':_0x5591fc['vZyEB'],'params':[],'wasmParams':['i32']},{'name':_0x5591fc[_0x3e6ad4(0x112)],'ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':_0x3e6ad4(0x701)+'\u0095\u008e\u008f\u0088\u008d'+'\u008f','ret':_0x3e6ad4(0xcc),'params':[_0x5591fc['LGanj']],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)],_0x3e6ad4(0x211)]},{'name':'\u0086\u0087\u0087\u008e\u0094'+_0x3e6ad4(0x88f)+'\u008b','ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':['i32']},{'name':_0x3e6ad4(0x6a1)+_0x3e6ad4(0x324)+'\u008d','ret':'bool','params':[_0x3e6ad4(0x356),_0x5591fc[_0x3e6ad4(0x6cf)]],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)],_0x5591fc[_0x3e6ad4(0x96)],'i32'],'wasmRet':'i32'},{'name':'\u008d\u0094\u0092\u0093\u0092'+_0x3e6ad4(0x59d)+'\u0095','ret':'void','params':[_0x5591fc[_0x3e6ad4(0x201)],_0x5591fc['aCGTN']],'wasmParams':[_0x3e6ad4(0x63b),'f32',_0x5591fc[_0x3e6ad4(0x96)]]},{'name':'\u0094\u0090\u0095\u0092\u008e'+_0x3e6ad4(0x8ef)+'\u008f','ret':'void','params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':_0x3e6ad4(0x2a7)+'\u0091\u0095\u0088\u008f\u0088'+'\u008c','ret':_0x5591fc[_0x3e6ad4(0xb94)],'params':[],'wasmParams':['i32']},{'name':_0x3e6ad4(0xa02)+_0x3e6ad4(0x49d)+'\u0095','ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)]]}],'TDM_GameManager':[{'name':_0x5591fc['ePrwa'],'ret':'void','params':[],'wasmParams':['i32']},{'name':_0x3e6ad4(0x226)+_0x3e6ad4(0x790)+'\u008a','ret':_0x5591fc['vZyEB'],'params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':_0x3e6ad4(0x8f9)+_0x3e6ad4(0x5bb)+'\u0089','ret':_0x3e6ad4(0x356),'params':[_0x5591fc[_0x3e6ad4(0x92e)]],'wasmParams':[_0x5591fc['GhEVH'],_0x3e6ad4(0x63b)],'wasmRet':_0x3e6ad4(0x63b)},{'name':_0x5591fc[_0x3e6ad4(0xa9)],'ret':_0x5591fc[_0x3e6ad4(0xb94)],'params':[],'wasmParams':[_0x5591fc['GhEVH']]},{'name':_0x3e6ad4(0xb9f)+'\u0088\u0094\u008d\u008d\u008c'+'\u008c','ret':_0x3e6ad4(0xcc),'params':[_0x5591fc['aCGTN']],'wasmParams':[_0x5591fc['GhEVH'],_0x5591fc[_0x3e6ad4(0x96)]]},{'name':_0x3e6ad4(0xaad)+'\u0090\u008d\u0094\u0087\u0091'+'\u0094','ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':_0x3e6ad4(0x350)+_0x3e6ad4(0x106)+'\u008c','ret':'void','params':[],'wasmParams':[_0x5591fc['GhEVH']]},{'name':_0x3e6ad4(0xbad)+_0x3e6ad4(0x1bb)+'\u0087','ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':_0x5591fc[_0x3e6ad4(0x56a)],'ret':_0x5591fc['vZyEB'],'params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':_0x3e6ad4(0xa14)+_0x3e6ad4(0x682)+'\u0088','ret':_0x5591fc['vZyEB'],'params':[],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)]]},{'name':_0x5591fc[_0x3e6ad4(0x9bb)],'ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':'\u008b\u0088\u008d\u0087\u0090'+_0x3e6ad4(0x3a1)+'\u0094','ret':'void','params':[],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)]]},{'name':_0x3e6ad4(0x666)+'\u0091\u0091\u0089\u0091\u0092'+'\u008c','ret':'void','params':[],'wasmParams':[_0x5591fc['GhEVH']]},{'name':_0x5591fc[_0x3e6ad4(0x75a)],'ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':[_0x5591fc['GhEVH']]},{'name':_0x3e6ad4(0x223)+'troy','ret':_0x5591fc['vZyEB'],'params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':'\u0089\u008d\u008a\u008a\u0090'+_0x3e6ad4(0x4ce)+'\u008a','ret':'void','params':[],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)]]},{'name':_0x3e6ad4(0xbaf)+_0x3e6ad4(0x8c5)+'\u0091','ret':'void','params':[],'wasmParams':[_0x5591fc['GhEVH']]},{'name':_0x3e6ad4(0x896)+'\u0088\u0094\u0094\u008e\u008e'+'\u008a','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x5591fc[_0x3e6ad4(0x681)],'ret':'void','params':[],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)]]},{'name':_0x5591fc[_0x3e6ad4(0x4ad)],'ret':_0x5591fc[_0x3e6ad4(0xb94)],'params':[_0x5591fc['aCGTN']],'wasmParams':['i32',_0x5591fc['GhEVH']]},{'name':_0x5591fc[_0x3e6ad4(0x7bc)],'ret':_0x5591fc['vZyEB'],'params':[_0x3e6ad4(0x83f),_0x5591fc[_0x3e6ad4(0x92e)],_0x5591fc[_0x3e6ad4(0x92e)]],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)],'i32',_0x5591fc[_0x3e6ad4(0x96)],_0x5591fc[_0x3e6ad4(0x96)]]},{'name':'\u008b\u008f\u0089\u0093\u0094'+_0x3e6ad4(0x7b8)+'\u0089','ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':[_0x5591fc['GhEVH']]},{'name':'\u0088\u0091\u0095\u0093\u0087'+'\u0091\u0089\u0093\u0089\u0089'+'\u008c','ret':_0x3e6ad4(0xcc),'params':['int',_0x5591fc[_0x3e6ad4(0x92e)],_0x3e6ad4(0x83f)],'wasmParams':['i32',_0x3e6ad4(0x63b),_0x5591fc[_0x3e6ad4(0x96)],_0x3e6ad4(0x63b)]},{'name':_0x5591fc['zYKgx'],'ret':_0x3e6ad4(0x356),'params':[],'wasmParams':[_0x3e6ad4(0x63b)],'wasmRet':_0x3e6ad4(0x63b)},{'name':_0x5591fc['xWbMs'],'ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':['i32']},{'name':_0x3e6ad4(0xa4b)+'\u008e\u0094\u0093\u0093\u008d'+'\u0087','ret':_0x5591fc[_0x3e6ad4(0xb94)],'params':[],'wasmParams':['i32']},{'name':_0x5591fc['pukKA'],'ret':'void','params':[],'wasmParams':['i32']},{'name':_0x3e6ad4(0x13c)+'\u008f\u008e\u008f\u0086\u0093'+'\u0092','ret':_0x5591fc['vZyEB'],'params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':_0x3e6ad4(0x5ea)+_0x3e6ad4(0x515)+'\u008e','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x3e6ad4(0x9ae)+_0x3e6ad4(0x983)+'\u008c','ret':_0x5591fc['vZyEB'],'params':[],'wasmParams':[_0x5591fc['GhEVH']]},{'name':_0x3e6ad4(0x2a5)+_0x3e6ad4(0x816)+'\u008e','ret':_0x5591fc['vZyEB'],'params':[_0x3e6ad4(0x356)],'wasmParams':[_0x3e6ad4(0x63b),_0x3e6ad4(0x63b)]},{'name':_0x3e6ad4(0x5ce)+'\u008b\u0087\u008f\u008d\u008f'+'\u0094','ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':['i32']},{'name':_0x3e6ad4(0xa32)+_0x3e6ad4(0x2ba)+'\u008c','ret':_0x5591fc['vZyEB'],'params':[],'wasmParams':['i32']},{'name':_0x5591fc['IKbfk'],'ret':_0x5591fc[_0x3e6ad4(0xb94)],'params':[],'wasmParams':[_0x5591fc['GhEVH']]},{'name':'OnApp'+_0x3e6ad4(0x564)+'ionFo'+'cus','ret':_0x5591fc[_0x3e6ad4(0xb94)],'params':[_0x3e6ad4(0x356)],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)],_0x3e6ad4(0x63b)]},{'name':'\u008f\u008c\u0086\u0087\u008e'+_0x3e6ad4(0xa82)+'\u0095','ret':'bool','params':[],'wasmParams':[_0x3e6ad4(0x63b)],'wasmRet':_0x5591fc[_0x3e6ad4(0x96)]},{'name':_0x5591fc[_0x3e6ad4(0xbda)],'ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':[_0x5591fc['GhEVH']]},{'name':_0x5591fc[_0x3e6ad4(0x182)],'ret':_0x5591fc[_0x3e6ad4(0x6cf)],'params':[_0x5591fc[_0x3e6ad4(0x92e)]],'wasmParams':[_0x5591fc['GhEVH'],'i32'],'wasmRet':_0x5591fc[_0x3e6ad4(0x96)]},{'name':'\u0087\u008d\u0088\u0086\u008a'+_0x3e6ad4(0x26c)+'\u008e','ret':'void','params':[_0x3e6ad4(0x356)],'wasmParams':['i32','i32']},{'name':_0x3e6ad4(0x637)+_0x3e6ad4(0x9ba)+'\u0094','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x5591fc[_0x3e6ad4(0x8bf)],'ret':'void','params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':_0x3e6ad4(0x77d)+_0x3e6ad4(0x8c0)+'\u008c','ret':_0x3e6ad4(0xcc),'params':['int',_0x3e6ad4(0x83f),_0x3e6ad4(0x83f)],'wasmParams':[_0x5591fc['GhEVH'],_0x5591fc[_0x3e6ad4(0x96)],_0x5591fc[_0x3e6ad4(0x96)],_0x5591fc[_0x3e6ad4(0x96)]]},{'name':_0x3e6ad4(0x952)+'\u0093\u008b\u0094\u0094\u0094'+'\u008e','ret':_0x5591fc[_0x3e6ad4(0xb94)],'params':[],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)]]},{'name':'Awake','ret':'void','params':[],'wasmParams':['i32']},{'name':'\u0086\u0088\u0095\u0092\u0094'+_0x3e6ad4(0x98a)+'\u0088','ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':['i32']},{'name':_0x5591fc['iqaBs'],'ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)]]},{'name':_0x5591fc[_0x3e6ad4(0xb06)],'ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':'\u0087\u0089\u008f\u008a\u0095'+'\u0089\u0094\u0091\u0087\u0087'+'\u0086','ret':_0x5591fc[_0x3e6ad4(0xb94)],'params':[_0x3e6ad4(0x356)],'wasmParams':[_0x3e6ad4(0x63b),_0x3e6ad4(0x63b)]},{'name':_0x3e6ad4(0x3c3)+_0x3e6ad4(0xb9)+'\u0095','ret':_0x3e6ad4(0xcc),'params':[],'wasmParams':[_0x5591fc['GhEVH']]},{'name':_0x5591fc[_0x3e6ad4(0x81d)],'ret':'void','params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':_0x5591fc['vCqEe'],'ret':_0x5591fc[_0x3e6ad4(0xb94)],'params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':'\u008a\u008e\u008d\u008a\u0091'+_0x3e6ad4(0x4f4)+'\u0092','ret':'void','params':[_0x3e6ad4(0x83f),_0x5591fc[_0x3e6ad4(0x92e)]],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)],_0x5591fc[_0x3e6ad4(0x96)],_0x3e6ad4(0x63b)]},{'name':_0x5591fc[_0x3e6ad4(0xad9)],'ret':'void','params':[],'wasmParams':[_0x5591fc['GhEVH']]},{'name':_0x3e6ad4(0x6af)+_0x3e6ad4(0x67d)+'\u008e','ret':'void','params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':'\u0094\u0088\u008a\u0094\u0092'+_0x3e6ad4(0x91c)+'\u0092','ret':_0x5591fc[_0x3e6ad4(0xb94)],'params':[_0x5591fc[_0x3e6ad4(0x6cf)]],'wasmParams':[_0x5591fc[_0x3e6ad4(0x96)],'i32']},{'name':'\u0090\u008d\u008b\u0093\u008a'+'\u008d\u0089\u0090\u0093\u008a'+'\u008a','ret':_0x5591fc[_0x3e6ad4(0xb94)],'params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':'\u0086\u008e\u0087\u0089\u008a'+_0x3e6ad4(0xaa3)+'\u0095','ret':_0x5591fc[_0x3e6ad4(0xb94)],'params':[],'wasmParams':[_0x3e6ad4(0x63b)]},{'name':_0x3e6ad4(0x49c)+_0x3e6ad4(0xac4)+'\u0089','ret':'void','params':[],'wasmParams':[_0x5591fc['GhEVH']]}]},_0x3e8aab=[],_0x491ad4=[],_0x38db05={},_0x45e31c=0x20cb+0xed9+-0x2fa4,_0x32a611=![],_0x1f0520=[],_0x28d91b=[{'type':_0x5591fc[_0x3e6ad4(0x169)],'keep':!![]},{'type':'Healt'+_0x3e6ad4(0x954)+'pt','keep':!![]},{'type':'Weapo'+'nMana'+_0x3e6ad4(0xb28),'keep':![]},{'type':'TDM_G'+'ameMa'+_0x3e6ad4(0x5f6),'keep':!![]},{'type':_0x5591fc[_0x3e6ad4(0x19f)],'keep':!![]},{'type':_0x5591fc[_0x3e6ad4(0x8e4)],'keep':!![],'many':!![]},{'type':_0x3e6ad4(0x942)+_0x3e6ad4(0xae)+'yerAn'+'imati'+_0x3e6ad4(0x7e1),'keep':!![],'many':!![]},{'type':_0x3e6ad4(0x439)+'otrol'+_0x3e6ad4(0x92f),'keep':!![],'many':!![]},{'type':_0x3e6ad4(0xa5e)+_0x3e6ad4(0xb5c),'keep':!![],'many':!![]}],_0xe68dc2=[_0x3e6ad4(0x1e0)+'bly-C'+_0x3e6ad4(0x586)+_0x3e6ad4(0xbfb),'Assem'+'bly-C'+'Sharp'+'-firs'+_0x3e6ad4(0x798)+_0x3e6ad4(0xbfb),'ch.sy'+_0x3e6ad4(0x49b)+_0x3e6ad4(0xb64)+_0x3e6ad4(0xa1f)+'ll',_0x3e6ad4(0x29e)+'t.dll',_0x3e6ad4(0x38e)+_0x3e6ad4(0x98d)+_0x3e6ad4(0x105)+_0x3e6ad4(0x1a0)+'rolle'+_0x3e6ad4(0x259),_0x3e6ad4(0x777)+'erate'+'d'];(function _0x2e2d2c(){var _0x4419eb=_0x3e6ad4;try{var _0x29f7b8=window['Unity'+'WebMo'+_0x4419eb(0x77b)]&&window['Unity'+'WebMo'+'dkit'][_0x4419eb(0x2de)+'me'];if(!_0x29f7b8||_0x5591fc['dQuoa'](typeof _0x29f7b8[_0x4419eb(0x53b)+_0x4419eb(0x533)+'in'],_0x4419eb(0x6e6)+'ion')){_0x4bce30[_0x4419eb(0x19c)]='Runti'+_0x4419eb(0x10d)+'eateP'+_0x4419eb(0x16e)+'\x20unav'+'ailab'+'le';return;}_0x4bce30[_0x4419eb(0x655)+_0x4419eb(0xafa)]=!![],_0x30b685=_0x29f7b8[_0x4419eb(0x53b)+_0x4419eb(0x533)+'in']({'name':_0x5591fc['ssPEN'],'version':_0xd31e38,'referencedAssemblies':_0xe68dc2[_0x4419eb(0x4a5)]()}),_0x4bce30['ok']=!![];try{var _0x44b2bf=window[_0x4419eb(0xb3d)+_0x4419eb(0x94f)+_0x4419eb(0x77b)][_0x4419eb(0x2de)+'me'];_0x44b2bf[_0x4419eb(0x635)+'uraTa'+'g']=_0x5591fc['CEsRr'](_0xd31e38+':',Math['rando'+'m']()['toStr'+'ing'](0xa47*0x3+0x691+-0x2542)[_0x4419eb(0x4a5)](-0xa89+0x1*0x2291+-0x1806,-0x1d07+0x884+0x148d)),_0x212e3f=_0x44b2bf[_0x4419eb(0x635)+_0x4419eb(0x42b)+'g'];}catch(_0x8ef4c0){}_0x51b115(),_0xdde1cb(),_0x4bce30[_0x4419eb(0x489)+_0x4419eb(0x2bd)+'tered']=_0x3e8aab[_0x4419eb(0xa6a)+'h'],_0x5591fc['NzFCe'](_0x5176ac),_0x4bce30['memor'+_0x4419eb(0x441)]=!![];}catch(_0x1929a8){_0x4bce30['error']=String(_0x1929a8&&_0x1929a8['messa'+'ge']||_0x1929a8);}}());var _0x3ad824=new Float32Array(0x3b*-0x1+-0x142d+-0xd1*-0x19),_0x83ed95=new Int32Array(_0x3ad824[_0x3e6ad4(0x957)+'r']);function _0x51ae7a(_0x2049d4){return _0x3ad824[0x1b10+0x1422+0x1799*-0x2]=_0x2049d4,_0x83ed95[0x1ad5*0x1+0x68*-0x16+-0x11e5];}function _0x4aaccc(_0x583634){return _0x83ed95[0x37*0x67+-0x38*-0xa4+0x1f*-0x1df]=_0x583634|0x2*-0xef8+-0x1508+0x32f8,_0x3ad824[-0x3*-0xdb+0xad*0x7+-0x74c];}var _0x3bac15={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x6f0358(){var _0x53ae1a=_0x3e6ad4;try{if(_0x30b685&&_0x30b685[_0x53ae1a(0x115)+_0x53ae1a(0x7a4)]){if(_0x5591fc[_0x53ae1a(0xc0d)](_0x5591fc[_0x53ae1a(0x670)],'zzxeC')){var _0x5b0d05=_0x30b685[_0x53ae1a(0x115)+'ime'];if(typeof _0x5b0d05[_0x53ae1a(0x531)+'veGam'+'e']===_0x5591fc[_0x53ae1a(0x854)]){var _0x384272=_0x5b0d05['resol'+'veGam'+'e']();if(_0x384272){if(_0x5591fc[_0x53ae1a(0x8ac)](_0x5591fc[_0x53ae1a(0x73e)],_0x5591fc[_0x53ae1a(0x73e)]))try{return _0x43c65d&&_0x2281ba['buffe'+'r']?_0x273d42[_0x53ae1a(0x957)+'r']['byteL'+_0x53ae1a(0x4b3)]:-0x17*-0x12b+-0x1e6a+0x1*0x38d;}catch(_0x515954){return 0x1e23+-0x1619+0x2a*-0x31;}else return _0x3bac15[_0x53ae1a(0x498)+'e']=_0x5591fc['okAse'],_0x384272;}}if(_0x5b0d05[_0x53ae1a(0x66a)])return _0x3bac15[_0x53ae1a(0x498)+'e']=_0x53ae1a(0x5d9)+'n._ru'+'ntime'+'._gam'+'e',_0x5b0d05[_0x53ae1a(0x66a)];}else _0x5791eb['textC'+_0x53ae1a(0x3f4)+'t']=_0x53ae1a(0xbf2)+'d';}}catch(_0x4bad4f){}try{var _0xc56576=window['Unity'+_0x53ae1a(0x94f)+'dkit']&&window[_0x53ae1a(0xb3d)+'WebMo'+_0x53ae1a(0x77b)]['Runti'+'me'];if(_0xc56576&&_0x5591fc[_0x53ae1a(0x2c3)](typeof _0xc56576[_0x53ae1a(0x531)+_0x53ae1a(0xb90)+'e'],_0x5591fc['YFyjO'])){if(_0x5591fc[_0x53ae1a(0x7f3)]===_0x53ae1a(0x90)){var _0x8bc29f=_0x483162[0x22*0x99+0x3c4+-0x1816*0x1][_0x53ae1a(0xaf1)]();if(_0x8bc29f)_0xac29e=_0x8bc29f;}else{var _0x1cd0c2=_0xc56576['resol'+_0x53ae1a(0xb90)+'e']();if(_0x1cd0c2)return _0x3bac15['sourc'+'e']=_0x53ae1a(0x2de)+_0x53ae1a(0x90a)+_0x53ae1a(0x8dc)+_0x53ae1a(0xa51)+')',_0x1cd0c2;}}if(_0xc56576&&_0xc56576['_game'])return _0x3bac15[_0x53ae1a(0x498)+'e']=_0x53ae1a(0x2de)+_0x53ae1a(0x836)+_0x53ae1a(0xb6b),_0xc56576;}catch(_0xb7eb26){}try{if(_0x53ae1a(0x951)===_0x5591fc['cNJIc']){var _0x2353d6=window[_0x53ae1a(0x33a)+_0x53ae1a(0x87d)+'nce']||window[_0x53ae1a(0x33a)+_0x53ae1a(0x640)]||window['game'];if(_0x2353d6)return _0x3bac15['sourc'+'e']='windo'+'w\x20glo'+'bal',_0x2353d6;}else{_0x59f10a[_0x4ff622]='0x'+_0x46619e[_0x4fb2b2]['ptr'][_0x53ae1a(0x8e7)+'ing'](0x96a*0x2+-0x2415+0x193*0xb);if(_0x316263[_0x370f81][_0x53ae1a(0x67b)+'ced'])_0x45a3e4[_0x53ae1a(0xb4)](_0x3084a6);}}catch(_0x31cde4){}try{if(typeof game!==_0x5591fc[_0x53ae1a(0x28a)]&&game)return _0x3bac15['sourc'+'e']='bare\x20'+'game\x20'+_0x53ae1a(0x78c)+'ng',game;}catch(_0x2300ff){}try{var _0x584410=Object['keys'](window);for(var _0x52b3b9=-0x1d2b*0x1+0x1ae3+-0x2*-0x124;_0x5591fc[_0x53ae1a(0x312)](_0x52b3b9,_0x584410['lengt'+'h'])&&_0x52b3b9<-0x1*0x17b+-0xacf+0xea2;_0x52b3b9++){var _0x4fbe51=window[_0x584410[_0x52b3b9]];if(_0x4fbe51&&typeof _0x4fbe51==='objec'+'t'&&_0x4fbe51[_0x53ae1a(0xbe1)+'e']&&_0x4fbe51['Modul'+'e'][_0x53ae1a(0x8a1)+'8']&&_0x4fbe51['Modul'+'e'][_0x53ae1a(0x8a1)+'8'][_0x53ae1a(0x957)+'r'])return _0x3bac15['sourc'+'e']='windo'+'w.'+_0x584410[_0x52b3b9]+(_0x53ae1a(0xbab)+'le'),_0x4fbe51;}}catch(_0x16babd){}return _0x3bac15['sourc'+'e']=null,null;}function _0x3a58d1(){var _0x3f8aff=_0x3e6ad4;try{if(_0x3311a8&&_0x3311a8['buffe'+'r']&&_0x3311a8['buffe'+'r']['byteL'+_0x3f8aff(0x4b3)])return _0x3bac15[_0x3f8aff(0x498)+'e']=_0x3bac15['sourc'+'e']||_0x3f8aff(0x294)+'ntiat'+_0x3f8aff(0x192)+_0x3f8aff(0xbce)+_0x3f8aff(0x60e)+_0x3f8aff(0x244),new Uint8Array(_0x3311a8[_0x3f8aff(0x957)+'r']);}catch(_0x5e0ad1){}try{if('EgnVY'===_0x5591fc['ZLBsj'])return{'version':_0x3ce2a9,'when':new _0x5bba95()[_0x3f8aff(0x3b9)+'Strin'+'g'](),'elapsedMs':_0x559f18['now']()-_0x2eac17,'host':_0x58d8c9,'uwmk':!!(_0x4c110c[_0x3f8aff(0xb3d)+_0x3f8aff(0x94f)+_0x3f8aff(0x77b)]&&_0x161ae4[_0x3f8aff(0xb3d)+'WebMo'+'dkit'][_0x3f8aff(0x2de)+'me']),'il2CppContext':![],'arm':_0x36d4e0,'hooksTotal':_0x25370a[_0x3f8aff(0xa6a)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x5145f5(_0x3e7397&&_0x2c5d7b['messa'+'ge']||_0x14beb8)};else{var _0x18cf5c=_0x6f0358();if(_0x18cf5c&&_0x18cf5c['Modul'+'e']&&_0x18cf5c['Modul'+'e'][_0x3f8aff(0x8a1)+'8']&&_0x18cf5c[_0x3f8aff(0xbe1)+'e']['HEAPU'+'8']['buffe'+'r'])return _0x18cf5c['Modul'+'e'][_0x3f8aff(0x8a1)+'8'];}}catch(_0x3f45a3){}return null;}function _0x4e8a62(){var _0x46d646=_0x3e6ad4,_0x15c65b=_0x5591fc[_0x46d646(0x534)](_0x3a58d1);if(!_0x15c65b)return null;try{return new DataView(_0x15c65b[_0x46d646(0x957)+'r'],_0x15c65b['byteO'+'ffset'],_0x15c65b[_0x46d646(0xbcc)+'ength']);}catch(_0x52e73d){return null;}}function _0xda4deb(_0x18f558,_0x425820){var _0x430fc7=_0x3e6ad4,_0x59e88e=_0x5591fc['Pyztw'](_0x4e8a62);if(!_0x59e88e)return _0x3bac15['faile'+'d']++,_0x3bac15[_0x430fc7(0x1cb)+'rror']=_0x3bac15[_0x430fc7(0x1cb)+_0x430fc7(0x8a9)]||_0x430fc7(0x6ec)+_0x430fc7(0x659)+_0x430fc7(0xa2b)+'ty\x20in'+_0x430fc7(0x257)+_0x430fc7(0x74b)+_0x430fc7(0x4b8)+_0x430fc7(0x40f)+_0x430fc7(0x184)+_0x430fc7(0x2de)+'me.re'+_0x430fc7(0x8dc)+'Game('+')\x20or\x20'+_0x430fc7(0x30e)+_0x430fc7(0x8fe)+'\x20glob'+'al',undefined;if(_0x5591fc[_0x430fc7(0x54b)](_0x18f558,-0x3e6*0x8+0x3fd*-0x7+-0x1*-0x3b1b)||_0x18f558+(0x262d+-0xea7+-0x1782)>_0x59e88e['byteL'+_0x430fc7(0x4b3)])return _0x3bac15['faile'+'d']++,_0x3bac15['lastE'+_0x430fc7(0x8a9)]=_0x3bac15['lastE'+_0x430fc7(0x8a9)]||_0x5591fc['mzDdJ']('addre'+_0x430fc7(0x8cc)+_0x18f558['toStr'+_0x430fc7(0x9e7)](-0x502*-0x3+-0x11a2+0x13*0x24),_0x430fc7(0x5ae)+_0x430fc7(0x338)+'\x20end\x20'+'0x')+_0x59e88e[_0x430fc7(0xbcc)+'ength'][_0x430fc7(0x8e7)+_0x430fc7(0x9e7)](0x224*-0xc+0xc32+0xd8e),undefined;try{_0x3bac15['ok']++;switch(_0x425820){case'u8':return _0x59e88e['getUi'+_0x430fc7(0x685)](_0x18f558);case'i8':return _0x59e88e[_0x430fc7(0x3e6)+'t8'](_0x18f558);case _0x430fc7(0x6ee):return _0x59e88e['getIn'+_0x430fc7(0x27f)](_0x18f558,!![]);case _0x5591fc['McDCy']:return _0x59e88e['getUi'+_0x430fc7(0x98c)](_0x18f558,!![]);case _0x5591fc[_0x430fc7(0x96)]:return _0x59e88e[_0x430fc7(0x3e6)+'t32'](_0x18f558,!![]);case _0x5591fc['SDXoa']:return _0x59e88e[_0x430fc7(0xb7c)+'nt32'](_0x18f558,!![]);case'f32':return _0x59e88e[_0x430fc7(0x40b)+'oat32'](_0x18f558,!![]);case'f64':return _0x59e88e[_0x430fc7(0x40b)+_0x430fc7(0x7dd)](_0x18f558,!![]);case'v2':case'v3':case'v4':return _0x59e88e['getFl'+_0x430fc7(0x549)](_0x18f558,!![]);default:return _0x59e88e[_0x430fc7(0x3e6)+'t32'](_0x18f558,!![]);}}catch(_0x22b666){return _0x3bac15[_0x430fc7(0x5be)+'d']++,_0x3bac15[_0x430fc7(0x1cb)+_0x430fc7(0x8a9)]=_0x3bac15[_0x430fc7(0x1cb)+_0x430fc7(0x8a9)]||String(_0x22b666&&_0x22b666[_0x430fc7(0x153)+'ge']||_0x22b666)['slice'](-0x99*-0x11+0x1f6f+0xf2*-0x2c,-0x1150+-0xe9*0xa+0x1ae2),undefined;}}function _0x3513e4(_0x48be91,_0x1a0c7e,_0x28029b){var _0xc32b8f=_0x3e6ad4,_0xea2f0a=_0x5591fc[_0xc32b8f(0x1b3)](_0x4e8a62);if(!_0xea2f0a||_0x5591fc[_0xc32b8f(0x54b)](_0x48be91,0x3*0x8ad+0x6b*-0x17+-0x16*0xbf)||_0x48be91+(0xe*-0x1a3+0x75b+0xf93)>_0xea2f0a['byteL'+_0xc32b8f(0x4b3)])return![];try{switch(_0x1a0c7e){case'u8':case'i8':_0xea2f0a[_0xc32b8f(0xa7e)+_0xc32b8f(0x685)](_0x48be91,_0x5591fc['cHUFv'](_0x28029b,0x18c6+0xe66+-0x262d));break;case'i16':case _0xc32b8f(0x612):_0xea2f0a[_0xc32b8f(0x111)+_0xc32b8f(0x27f)](_0x48be91,_0x28029b|0x1a*-0x13e+0x4*-0x6ef+0x3c08,!![]);break;case _0x5591fc[_0xc32b8f(0x96)]:case _0xc32b8f(0x36f):_0xea2f0a['setIn'+'t32'](_0x48be91,_0x28029b|-0x2*-0x7d8+0x20*-0xcb+0x9b*0x10,!![]);break;case _0x5591fc['WDhIp']:_0xea2f0a['setFl'+_0xc32b8f(0x549)](_0x48be91,_0x28029b,!![]);break;default:_0xea2f0a['setIn'+_0xc32b8f(0x826)](_0x48be91,_0x28029b|-0x9ea+-0xdf*0x6+-0x3*-0x50c,!![]);}return!![];}catch(_0x2042ea){return![];}}var _0x2a3191={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':_0x3e6ad4(0x63b)},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':_0x3e6ad4(0x63b)},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0xb90632(_0x2c2b36){var _0x1d5bf7=_0x3e6ad4;if(_0x1d5bf7(0x346)===_0x5591fc[_0x1d5bf7(0x6b8)]){var _0x4179e9='';for(var _0x165c0e=0x2ab*0x4+0x5c6*0x2+-0x6*0x3b4;_0x165c0e<_0x2c2b36['lengt'+'h'];_0x165c0e++){var _0x3c81f0=_0x2c2b36[_0x165c0e][_0x1d5bf7(0x8e7)+'ing'](-0x8*0x395+0x16f1+0x1d*0x33);_0x4179e9+=(_0x3c81f0[_0x1d5bf7(0xa6a)+'h']<-0x1*-0x16d3+-0x1f3*-0xe+-0x321b?'0':'')+_0x3c81f0;}return _0x4179e9;}else try{_0x368a56['setIt'+'em'](_0x56eb55,_0x2f55bb['strin'+_0x1d5bf7(0x6d7)](_0x2317d3['pos']));}catch(_0x311c47){}}function _0x4c3c0a(_0x660ee,_0xea55dc,_0x34628b){var _0xad501c=_0x3e6ad4,_0xc0252c=_0x5591fc[_0xad501c(0xb20)](_0x4e8a62);if(!_0xc0252c)return _0x3bac15[_0xad501c(0x5be)+'d']++,_0x3bac15['lastE'+_0xad501c(0x8a9)]=_0x3bac15['lastE'+'rror']||'no\x20HE'+'APU8\x20'+_0xad501c(0xa2b)+'ty\x20in'+'stanc'+'e\x20not'+_0xad501c(0x4b8)+_0xad501c(0x40f)+'\x20via\x20'+'Runti'+_0xad501c(0x90a)+_0xad501c(0x8dc)+'Game('+_0xad501c(0x52a)+'any\x20w'+'indow'+_0xad501c(0x66b)+'al',null;if(_0x5591fc[_0xad501c(0x578)](_0xea55dc,-0x1892+0x2543*0x1+-0xcb1)||_0x5591fc['jMeds'](_0xea55dc,_0x34628b)>_0xc0252c['byteL'+'ength']){if(_0x5591fc['TWDvK'](_0xad501c(0x409),_0xad501c(0x100))){_0x21f9af['preve'+'ntDef'+'ault'](),_0x158a44['fov']=_0x57d05e[_0xad501c(0x29f)](0x857+0x2*0x41e+-0x1075,_0x5591fc[_0xad501c(0x168)](_0x18124a['fov'],-0x212d+0x1daa+-0x385*-0x1)),_0x2409ba();return;}else return _0x3bac15[_0xad501c(0x5be)+'d']++,_0x3bac15[_0xad501c(0x1cb)+_0xad501c(0x8a9)]=_0x3bac15[_0xad501c(0x1cb)+_0xad501c(0x8a9)]||_0x5591fc['XsOFC'](_0xad501c(0x1a5)+_0xad501c(0x8cc)+(_0x660ee+_0xea55dc)[_0xad501c(0x8e7)+_0xad501c(0x9e7)](0x2*-0xc83+0x1871+0xa5)+_0x5591fc['Oykcn'],_0xc0252c[_0xad501c(0xbcc)+_0xad501c(0x4b3)][_0xad501c(0x8e7)+_0xad501c(0x9e7)](-0x496*-0x5+-0x136+-0x15a8)),null;}try{var _0x4d5097=new Uint8Array(_0x34628b);for(var _0x170bc1=0x1380+-0x11b9+0x1c7*-0x1;_0x170bc1<_0x34628b;_0x170bc1++)_0x4d5097[_0x170bc1]=_0xc0252c['getUi'+'nt8'](_0x660ee+_0xea55dc+_0x170bc1);return _0x3bac15['ok']++,_0x4d5097;}catch(_0x21d918){return _0x3bac15['faile'+'d']++,_0x3bac15['lastE'+_0xad501c(0x8a9)]=_0x3bac15[_0xad501c(0x1cb)+'rror']||_0x5591fc[_0xad501c(0x9cf)](String,_0x21d918&&_0x21d918[_0xad501c(0x153)+'ge']||_0x21d918)[_0xad501c(0x4a5)](-0x2d*-0x51+0x1*-0x11ff+0x1e1*0x2,0x44*-0x83+0x1437+0x1*0xf0d),null;}}function _0x4f9388(_0x40701e,_0x233c97,_0xa0c563){var _0x18ee20=_0x3e6ad4,_0x44689f={'ZPSwy':_0x18ee20(0xaee)+'\x20off'};if(_0x5591fc[_0x18ee20(0x4d4)]!==_0x5591fc[_0x18ee20(0x6e0)]){var _0x5b21fa=(_0x18ee20(0x977)+'|9|4|'+'5|0|3'+_0x18ee20(0x339))['split']('|'),_0x31cece=-0x1e93+-0x40*-0x58+0x893;while(!![]){switch(_0x5b21fa[_0x31cece++]){case'0':var _0x46d521=_0x488129[_0x18ee20(0xb7c)+_0x18ee20(0x685)](_0x3c28a5['inite'+'d'])&-0xdfc+-0x1455+-0x2*-0x1129;continue;case'1':var _0x3c28a5=_0x2a3191[_0xa0c563];continue;case'2':var _0x4ab7bc=_0x4c3c0a(_0x40701e,_0x233c97,_0x3c28a5['size']);continue;case'3':var _0x1cc814=_0xa0c563===_0x18ee20(0x2c6)?_0x488129['getFl'+'oat32'](_0x3c28a5['fake'],!![]):_0xa0c563===_0x5591fc['AsUYv']?_0x488129[_0x18ee20(0x3e6)+_0x18ee20(0x826)](_0x3c28a5['fake'],!![]):_0x488129[_0x18ee20(0xb7c)+'nt8'](_0x3c28a5['fake']);continue;case'4':var _0xf4d61c=_0x488129[_0x18ee20(0x3e6)+'t32'](_0x3c28a5['key'],!![]);continue;case'5':var _0x28b3c2=_0x488129[_0x18ee20(0x3e6)+_0x18ee20(0x826)](_0x3c28a5['hidde'+'n'],!![]);continue;case'6':return{'keyAtOffset0':_0xf4d61c,'hidden':_0x28b3c2,'inited':_0x46d521,'fake':_0x1cc814,'act':_0xd200b5,'hex':_0xb90632(_0x4ab7bc),'alt':_0x5591fc[_0x18ee20(0x1ec)](_0xa0c563,_0x18ee20(0x2e6))?_0x28b3c2^(_0x1cc814|-0x622+0x1752+-0x1130):null};case'7':var _0xd200b5=_0x488129[_0x18ee20(0xb7c)+_0x18ee20(0x685)](_0x3c28a5[_0x18ee20(0x501)+'e'])&-0x151*-0xa+-0x246b*-0x1+-0x4c*0xa7;continue;case'8':if(!_0x4ab7bc)return null;continue;case'9':var _0x488129=new DataView(_0x4ab7bc[_0x18ee20(0x957)+'r'],_0x4ab7bc[_0x18ee20(0xa12)+_0x18ee20(0xa56)],_0x4ab7bc[_0x18ee20(0xbcc)+_0x18ee20(0x4b3)]);continue;}break;}}else _0x48110e=!_0x4987fe,_0x17b598[_0x18ee20(0x173)+'onten'+'t']=_0x195446?'Speed'+'\x20ON':_0x44689f[_0x18ee20(0x3c2)],_0x2bd995[_0x18ee20(0xd5)]['backg'+_0x18ee20(0x2ff)]=_0x471c6b?_0x53432e:_0x18ee20(0xb02)+_0x18ee20(0xc9)+'t',_0x491045[_0x18ee20(0xd5)][_0x18ee20(0x4e3)]=_0x12a94f?_0x18ee20(0x621)+'1b':'#f7ee'+'f5',_0x1a260b();}function _0x46a4b2(_0xf21da7,_0x3e5c01,_0x29521a){var _0x361c79=_0x3e6ad4;if(_0xf21da7===_0x5591fc[_0x361c79(0x71a)])return _0x4aaccc(_0x5591fc[_0x361c79(0x389)](_0x3e5c01,_0x29521a));if(_0x5591fc['RVhZh'](_0xf21da7,_0x361c79(0x2e6)))return _0x5591fc[_0x361c79(0x728)](_0x3e5c01,_0x29521a)|-0x1863+0xa*-0x2cd+0x11*0x315;return _0x5591fc['rWYKh'](_0x5591fc[_0x361c79(0x728)](_0x3e5c01,_0x29521a)&0xfd6+0x2*-0xd6f+0xc07,-0x113*-0x1f+0x14c0+-0x1*0x360d)?-0x1e8c+0x1*-0x18db+-0xdda*-0x4:0xb*0x175+-0xa04+-0x603;}function _0x59383e(_0x306bb4,_0x57ac82,_0x42cde3){var _0xf4a9f2=_0x3e6ad4;if('xHAPm'===_0xf4a9f2(0x7f5)){if(_0x5739a3['open'])_0x390396(!![]);}else{var _0x292635=_0x2a3191[_0x42cde3];if(!_0x292635)return null;var _0x3c24d8=_0x5591fc['qwNdf'](_0xda4deb,_0x5591fc['mzDdJ'](_0x306bb4,_0x57ac82)+_0x292635[_0xf4a9f2(0x6e2)],'u8'),_0x56bd3a=_0xda4deb(_0x5591fc['CEsRr'](_0x306bb4,_0x57ac82)+_0x292635['hidde'+'n'],_0x5591fc['GhEVH']),_0x4b5b2f=_0x5591fc['ZHNtO'](_0xda4deb,_0x5591fc['vOJQE'](_0x306bb4,_0x57ac82)+_0x292635['inite'+'d'],'u8'),_0x1ccb38=_0x5591fc[_0xf4a9f2(0x634)](_0xda4deb,_0x5591fc['PBIMy'](_0x306bb4,_0x57ac82)+_0x292635[_0xf4a9f2(0x7ad)],_0x42cde3===_0xf4a9f2(0x2c6)?_0xf4a9f2(0x211):_0x42cde3===_0x5591fc[_0xf4a9f2(0x332)]?'i32':'u8'),_0x517534=_0xda4deb(_0x5591fc['vOJQE'](_0x5591fc[_0xf4a9f2(0x613)](_0x306bb4,_0x57ac82),_0x292635[_0xf4a9f2(0x501)+'e']),'u8');if(_0x3c24d8===undefined||_0x56bd3a===undefined||_0x5591fc[_0xf4a9f2(0x71e)](_0x1ccb38,undefined)||_0x5591fc['HdtpB'](_0x517534,undefined))return null;_0x3c24d8&=0x84*0x26+-0x67c+0xc1d*-0x1,_0x56bd3a|=-0x23b9+-0x6fb+-0x6*-0x71e,_0x4b5b2f=(_0x4b5b2f||0x1*-0x1df9+0xc7a*0x3+-0x775)&-0x1*0x7c3+0x1*-0x641+-0x25*-0x61,_0x517534&=-0x7f*0x19+0x18bf+-0xc57*0x1;var _0x28a9e0;if(_0x42cde3===_0xf4a9f2(0x2c6))_0x28a9e0=_0x4aaccc(_0x56bd3a^_0x3c24d8);else{if(_0x42cde3===_0x5591fc['AsUYv'])_0x28a9e0=_0x5591fc['TwDBn'](_0x56bd3a^_0x3c24d8,0x1d4a+-0x4*0x44+-0x1c3a);else _0x28a9e0=(_0x5591fc[_0xf4a9f2(0x649)](_0x56bd3a,_0x3c24d8)&0x16a*-0x17+-0xe22+-0x2fa7*-0x1)!==0x1*-0x187f+-0x2e7*0x9+0x1a2*0x1f?-0x2616+-0x1579+0x3b9*0x10:-0x16cb+-0x74b+0x1e16;}return{'real':_0x28a9e0,'fake':_0x1ccb38,'act':_0x517534,'init':_0x4b5b2f,'key':_0x3c24d8,'hidden':_0x56bd3a};}}function _0x455945(_0x50a50e,_0x4d5599,_0x4117e4,_0x34f6ef){var _0x2af228=_0x3e6ad4,_0x4ee556=_0x2a3191[_0x4117e4],_0x503965=_0x4c3c0a(_0x50a50e,_0x4d5599,_0x4ee556['size']);if(!_0x503965)return![];var _0xdc6df2=new DataView(_0x503965[_0x2af228(0x957)+'r'],_0x503965['byteO'+_0x2af228(0xa56)],_0x503965['byteL'+_0x2af228(0x4b3)]),_0x1892b0=_0x4ee556[_0x2af228(0xbf8)+'pe']==='u8'?_0xdc6df2['getUi'+'nt8'](_0x4ee556[_0x2af228(0x6e2)]):_0xdc6df2['getIn'+'t32'](_0x4ee556['key'],!![]),_0x4b38ce;if(_0x4117e4===_0x2af228(0x2c6))_0x4b38ce=_0x51ae7a(_0x34f6ef);else{if(_0x4117e4===_0x5591fc['AsUYv'])_0x4b38ce=_0x34f6ef|0xdfd+0x37*-0x61+0x2*0x36d;else _0x4b38ce=(_0x34f6ef?0xe33+0x1f4f+0x2d81*-0x1:0x1eb6*-0x1+0x3*0xbdd+-0x4e1*0x1)&0x3d2+0x7*0x239+-0x1262;}return _0x3513e4(_0x5591fc[_0x2af228(0x95c)](_0x50a50e,_0x4d5599)+_0x4ee556[_0x2af228(0x62e)+'n'],_0x5591fc['GhEVH'],_0x5591fc['DKqfV'](_0x4b38ce,_0x1892b0))&&_0x3513e4(_0x5591fc[_0x2af228(0x7cd)](_0x50a50e+_0x4d5599,_0x4ee556['fake']),_0x4117e4==='obfF'?_0x5591fc[_0x2af228(0xb21)]:_0x4117e4===_0x5591fc[_0x2af228(0x332)]?_0x2af228(0x63b):'u8',_0x5591fc[_0x2af228(0x3cc)](_0x4117e4,_0x2af228(0x2c6))?_0x34f6ef:_0x4117e4==='obfI'?_0x34f6ef|-0x2*-0x2ab+-0x372+-0x1e4:_0x34f6ef?0xc7c+-0x3ae+-0x8cd:-0x678+-0x12a2+-0x6*-0x42f)&&_0x3513e4(_0x50a50e+_0x4d5599+_0x4ee556['activ'+'e'],'u8',0x1f4+-0xbc1+0xc1*0xd);}var _0x2680b6={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0x5cd4e9=-0x3*0x40d+-0x1ed7+0x2afe+0.03,_0x3cd27a=-0x1f9c+-0x1*0x14a9+0x3447,_0x35e599={},_0x13ba37=0x1c47+0x2*0x3e+-0x1*0x1cc3,_0x469dad=[],_0x285db8=[];function _0x87305(_0x3bea3b){var _0x4a2b54=_0x3e6ad4,_0x137edc={'OvIVH':function(_0x1ae491,_0x1f6418){return _0x5591fc['DgmGf'](_0x1ae491,_0x1f6418);},'WCXHN':_0x5591fc[_0x4a2b54(0x28a)]},_0x2e774a=_0x599afb['FPSco'+_0x4a2b54(0xb29)+_0x4a2b54(0x92f)]||[],_0x402094=[];_0x285db8=[],_0x469dad=[];for(var _0xbe2c03=-0x1a4f+0x236+0x1f*0xc7;_0x5591fc[_0x4a2b54(0x36b)](_0xbe2c03,_0x2e774a['lengt'+'h']);_0xbe2c03++){var _0x2807c9=_0x2e774a[_0xbe2c03][-0x26f2+-0x24c5+0x4bb7];if(_0x2e774a[_0xbe2c03][0x1*0x1945+-0x317*0x1+0x32b*-0x7]!==_0x5591fc[_0x4a2b54(0x71a)])continue;var _0x3cc32d=_0x4f9388(_0x3bea3b,_0x2807c9,_0x5591fc['yIGEY']);if(!_0x3cc32d||_0x5591fc[_0x4a2b54(0xa88)](_0x3cc32d[_0x4a2b54(0x388)+'d'],-0x22ca+-0x1f8b+0x4256))continue;var _0x3f5f99=_0x46a4b2(_0x5591fc[_0x4a2b54(0x71a)],_0x3cc32d['hidde'+'n'],_0x3cc32d['keyAt'+_0x4a2b54(0x461)+'t0']);if(typeof _0x3f5f99!==_0x4a2b54(0x4c6)+'r'||!isFinite(_0x3f5f99))continue;var _0x129424=_0x5591fc[_0x4a2b54(0x6f1)](_0x5591fc['tjQjC'](_0x3bea3b,':'),_0x2807c9),_0x31c3e1=_0x35e599[_0x129424];if(!_0x31c3e1||_0x3f5f99!==_0x31c3e1['lastW'+_0x4a2b54(0x2d0)+'n'])_0x31c3e1=_0x35e599[_0x129424]={'base':_0x3f5f99,'lastWritten':null};var _0x51ef6e=_0x31c3e1[_0x4a2b54(0x5ef)],_0x48961d=Math['abs'](_0x51ef6e);if(_0x5591fc[_0x4a2b54(0x54b)](_0x48961d,-0x7e3+0xc9*0x25+0x56*-0x3f+0.0001)||_0x5591fc[_0x4a2b54(0x54e)](_0x48961d,-0x1*0x184b3+-0x151b*0x18+0x505db)){if(_0x5591fc[_0x4a2b54(0x846)](_0x4a2b54(0x38f),_0x5591fc['GKmDo'])){var _0x33df77=_0x16d6a9[_0x55d8c0]['xyz']||[_0x283d5f[_0x4718ae]['v'],-0x6b5+0x1*0x7e2+-0x12d,-0x521+0x3ee*0x1+0x133];return _0x33df77[_0x4a2b54(0x497)](function(_0x18419d){var _0x4f1fe6=_0x4a2b54;return _0x437417[_0x4f1fe6(0x2ff)](_0x18419d*(-0x4de+0xb33+-0x3*0x1fb))/(-0xab*0x2b+-0xcf2+0x2a0f*0x1);})['join']('\x20\x20');}else{_0x285db8[_0x4a2b54(0xb4)]({'o':_0x2807c9,'v':_0x3f5f99,'why':_0x5591fc[_0x4a2b54(0xab1)]});continue;}}_0x402094[_0x4a2b54(0xb4)]({'o':_0x2807c9,'v':_0x3f5f99,'a':_0x48961d,'base':_0x51ef6e,'key':_0x129424,'st':_0x31c3e1});}var _0x390548=[];for(var _0x300bce=0x9a8+0x109f+-0x1a47;_0x300bce<_0x402094['lengt'+'h'];_0x300bce++){var _0x5dd484=_0x402094[_0x300bce]['a'],_0x32bbcd=null;for(var _0x1debe8=-0x1332+-0x761*-0x2+0x470;_0x5591fc[_0x4a2b54(0x31a)](_0x1debe8,_0x390548[_0x4a2b54(0xa6a)+'h']);_0x1debe8++){var _0x54b827=_0x390548[_0x1debe8][_0x4a2b54(0x580)]/_0x5dd484;if(_0x54b827>0x1d4+0xa51+-0xc24-_0x5cd4e9&&_0x54b827<_0x5591fc[_0x4a2b54(0x288)](0x2*-0x11f0+0x15ac+0xe35*0x1,_0x5cd4e9)){_0x32bbcd=_0x390548[_0x1debe8];break;}}if(!_0x32bbcd){if(_0x5591fc['QZXcH']!==_0x5591fc[_0x4a2b54(0x8da)])_0x32bbcd={'mean':_0x5dd484,'members':[]},_0x390548[_0x4a2b54(0xb4)](_0x32bbcd);else return null;}_0x32bbcd[_0x4a2b54(0x144)+'rs']['push'](_0x402094[_0x300bce]),_0x32bbcd[_0x4a2b54(0x580)]=-0xf77+-0x14c6+0x1*0x243d;for(var _0x319930=-0x26ee+0x5c9*0x1+0x6a1*0x5;_0x319930<_0x32bbcd[_0x4a2b54(0x144)+'rs'][_0x4a2b54(0xa6a)+'h'];_0x319930++)_0x32bbcd[_0x4a2b54(0x580)]+=_0x32bbcd[_0x4a2b54(0x144)+'rs'][_0x319930]['a'];_0x32bbcd[_0x4a2b54(0x580)]/=_0x32bbcd[_0x4a2b54(0x144)+'rs']['lengt'+'h'];}var _0x372c27=[];for(var _0x325fc0=-0x9d*-0x4+-0x1823+0xd*0x1ab;_0x5591fc[_0x4a2b54(0x27a)](_0x325fc0,_0x390548[_0x4a2b54(0xa6a)+'h']);_0x325fc0++){if(_0x5591fc['ARTkY']!=='FPMrH'){if(_0x390548[_0x325fc0][_0x4a2b54(0x144)+'rs']['lengt'+'h']>=_0x3cd27a)_0x372c27['push'](_0x390548[_0x325fc0]);}else _0x4230fd['getIt'+'em'](_0xf43dc0)!==null&&(_0x1fdc9e[_0x4a2b54(0x768)+'eItem'](_0x2fd25e),_0x4d40a7=!![]);}if(!_0x372c27[_0x4a2b54(0xa6a)+'h']){if(_0x5591fc[_0x4a2b54(0x157)](_0x4a2b54(0x66e),_0x5591fc[_0x4a2b54(0x7e7)])){if(_0x137edc['OvIVH'](typeof _0x467369,_0x137edc[_0x4a2b54(0x19a)])&&_0x2175d9)return _0x9cc4ab['sourc'+'e']=_0x4a2b54(0x56b)+_0x4a2b54(0x399)+'bindi'+'ng',_0x1c54df;}else{_0x285db8['push']({'o':-(-0xd6b+-0x9a1+0x170d),'v':0x0,'why':_0x5591fc['bobmf'](_0x4a2b54(0x5d7)+_0x4a2b54(0x8bc)+'f\x20'+_0x3cd27a,'\x20Obsc'+_0x4a2b54(0x2f7)+'loats'+_0x4a2b54(0x54d)+'ed')});return;}}var _0x2b372e=_0x372c27[-0x1e1*0x2+0x17a7+-0x1*0x13e5]['mean'];for(var _0x826899=-0x1*-0x206d+-0xb30+-0x153d;_0x5591fc[_0x4a2b54(0x27a)](_0x826899,_0x372c27['lengt'+'h']);_0x826899++)if(_0x372c27[_0x826899][_0x4a2b54(0x580)]<_0x2b372e)_0x2b372e=_0x372c27[_0x826899][_0x4a2b54(0x580)];var _0x3a82e1=_0x2b372e*(-0x7f0+0xa7d+-0x28d+0.5);for(var _0x2c0bf8=-0x3b*-0x4b+-0x25e+-0xeeb;_0x2c0bf8<_0x390548['lengt'+'h'];_0x2c0bf8++){if(_0x5591fc[_0x4a2b54(0x3e8)](_0x5591fc[_0x4a2b54(0x8d4)],_0x4a2b54(0x6ea))){if(_0x390548[_0x2c0bf8][_0x4a2b54(0x144)+'rs']['lengt'+'h']>=_0x3cd27a)continue;for(var _0x30060f=-0x1a*-0x25+0xc9*-0x19+0xfdf;_0x30060f<_0x390548[_0x2c0bf8]['membe'+'rs']['lengt'+'h'];_0x30060f++){if(_0x4a2b54(0x803)==='tNRPe')_0x285db8[_0x4a2b54(0xb4)]({'o':_0x390548[_0x2c0bf8][_0x4a2b54(0x144)+'rs'][_0x30060f]['o'],'v':_0x390548[_0x2c0bf8]['membe'+'rs'][_0x30060f]['v'],'why':_0x5591fc[_0x4a2b54(0x3da)]});else{var _0x2195f7={'URBqm':function(_0x543239,_0x6ca2db){return _0x543239===_0x6ca2db;}},_0x1c7952=_0x258d52['filte'+'r'](function(_0x506212){var _0x52def1=_0x4a2b54;return _0x2195f7[_0x52def1(0x5ec)](_0x506212['type'],_0x84da6c);})[-0xd0*0xb+0x1*0x1c35+-0x1345];_0x32deb1={'type':_0x3e07dd,'atMs':_0x15405e['now']()-_0x5bc8ae,'originalFunc':!!(_0x1c7952&&_0x1c7952[_0x4a2b54(0x76c)]&&typeof _0x1c7952[_0x4a2b54(0x76c)][_0x4a2b54(0x9ab)+'nalFu'+'nc']===_0x5591fc[_0x4a2b54(0x854)]),'resolveGameAtFire':!!_0x5591fc['sPYvj'](_0x44f560),'gameSourceAtFire':_0x4baf33[_0x4a2b54(0x498)+'e']};}}}else _0x520f49[_0x4a2b54(0x336)+_0x4a2b54(0x607)][_0x4a2b54(0x646)+_0x4a2b54(0x2fd)](_0x5afd8e)[_0x4a2b54(0x398)](function(){var _0x35fb6c=_0x4a2b54;_0x5d6784['textC'+_0x35fb6c(0x3f4)+'t']=_0x35fb6c(0xbf2)+'d';});}for(var _0x31fbd9=-0x86c+0x366+-0x1*-0x506;_0x31fbd9<_0x372c27[_0x4a2b54(0xa6a)+'h'];_0x31fbd9++){if(_0x5591fc[_0x4a2b54(0x9f4)]===_0x5591fc[_0x4a2b54(0x860)])_0x15ae8e=_0x3c9c79[_0x4a2b54(0x6a5)](_0x3ff01f)[_0x4a2b54(0x4a5)](-0x2218+-0x6*0xd3+0x270a,-0x1*0x407+0x1a23+-0x1604);else{var _0x526abc=_0x372c27[_0x31fbd9][_0x4a2b54(0x144)+'rs'];for(var _0x51c381=0x114c+-0x4*0x97+-0xef0;_0x51c381<_0x526abc['lengt'+'h'];_0x51c381++){var _0x26428d=_0x526abc[_0x51c381];if(_0x26428d['a']<_0x3a82e1){_0x285db8[_0x4a2b54(0xb4)]({'o':_0x26428d['o'],'v':_0x26428d['v'],'why':_0x5591fc[_0x4a2b54(0x778)](_0x4a2b54(0x434)+'\x20floo'+'r\x20',_0x3a82e1[_0x4a2b54(0x91b)+'ed'](-0x1*-0x1dbd+0x1b7e+-0x3939))});continue;}var _0x48ccd9=_0x5591fc[_0x4a2b54(0x699)](_0x26428d[_0x4a2b54(0x5ef)],_0x2680b6[_0x4a2b54(0xa86)+'r']);_0x455945(_0x3bea3b,_0x26428d['o'],_0x5591fc['yIGEY'],_0x48ccd9)&&(_0x26428d['st']['lastW'+_0x4a2b54(0x2d0)+'n']=Math[_0x4a2b54(0x8d2)+'d'](_0x48ccd9),_0x13ba37++,_0x469dad[_0x4a2b54(0xb4)](_0x5591fc[_0x4a2b54(0x288)]('0x',_0x26428d['o']['toStr'+'ing'](-0xbe5*0x3+-0x1*0x1345+0x3704))));}}}}var _0x599afb={'FPScontroller':[[-0xba2+-0xbe2+0x1794,_0x5591fc['yIGEY']],[0x2332+0x1e71+-0x1*0x417b,_0x3e6ad4(0x2c6)],[0x1*-0xab2+-0x5*0x481+0x2177*0x1,_0x3e6ad4(0x2c6)],[0x1a*0x86+0x1713+-0x1bb*0x15,_0x5591fc[_0x3e6ad4(0x71a)]],[-0xd48+-0xe*-0x10f+-0x2*0x8d,_0x5591fc[_0x3e6ad4(0x71a)]],[0x17b6*0x1+0x1159+0x53*-0x7d,'obfF'],[-0x1f*-0x73+-0xe59*-0x1+-0x1ba6,_0x5591fc['yIGEY']],[0xbc+-0x939+0x935*0x1,_0x5591fc['zqBUc']],[0x1f75*-0x1+-0x1adf+0x3b18,_0x5591fc['yIGEY']],[0x24f8*-0x1+0x3e7+0x21ed,_0x3e6ad4(0x63b)],[-0x11e2+0x243e+-0x45f*0x4,'v3'],[-0x2143+-0x3*-0x3b9+-0xc*-0x1eb,'u8'],[-0x239f+-0x9a3+0x2e32,_0x3e6ad4(0x2c6)],[-0x12c3+0x1*0xb35+0x1*0x896,_0x5591fc['GhEVH']],[-0x995*0x3+0xec3*0x1+-0x128*-0xd,'u8'],[0x19f6*0x1+0x61*0x31+-0x2b77,_0x5591fc[_0x3e6ad4(0x96)]],[0x3b0*0x1+-0x796+-0xe*-0x5b,'u8'],[0x9*0x16+0xea1+0x6*-0x263,'u8'],[-0x527+-0x23*-0x6f+-0x8ea,_0x5591fc['yIGEY']],[0x1*-0x19+0x3*-0x28d+0x8f4,'obfF'],[0xca*-0x7+0x1*-0x261a+0x2cec,_0x3e6ad4(0x211)],[-0x1878+-0x1ae3+0x34ab,_0x5591fc[_0x3e6ad4(0xb21)]],[0x988+0x1486+-0x1cba,'v3'],[0x712*0x3+-0x1*0x1e98+-0x561*-0x2,'v3'],[0x18c+-0x313*-0xb+0x21f1*-0x1,_0x3e6ad4(0x211)],[0xd34+0x1ca9+-0x286d*0x1,_0x5591fc['WDhIp']],[0x24d4+-0xcf6*-0x1+0x1aa*-0x1d,'u8'],[0x12b0+0x1b86+0x2caa*-0x1,'f32'],[-0x230e+-0x1f97*0x1+0x795*0x9,'v3'],[0x162a+0xaf3+-0x1f79,'u8'],[-0x4e3+0x217d+-0x1ae6,'f32'],[0x1685+0x843*-0x1+0x6b*-0x1e,_0x5591fc[_0x3e6ad4(0xb21)]],[-0xe60+0x1*-0xfe+0xb*0x18e,'u8'],[0xb1*0x17+0x8b3+-0x16dd,'u8'],[-0x25f0+-0xddf+0x358f,'obfF'],[0x350+-0x5ba*-0x6+0x2*-0x11ea,_0x3e6ad4(0x211)],[0x1907*0x1+0x211c+-0x3847*0x1,'u8'],[-0x827*0x1+0x249b+-0x46e*0x6,'obfF'],[-0x7ac*-0x5+0x10cc+-0x3530,'v3'],[0xde3+0xac*-0x17+0x399*0x1,_0x5591fc[_0x3e6ad4(0x360)]],[0x2703*-0x1+-0x22cd*0x1+0x4be8,_0x3e6ad4(0x211)],[0x2*-0xe9+-0x1*-0x1b25+-0x1737,_0x3e6ad4(0x211)],[0x51*-0x3+-0xb41*-0x3+-0x174*0x15,_0x3e6ad4(0x211)],[0x33*-0x17+0x2485*0x1+-0x60*0x4f,_0x5591fc['WDhIp']],[0x2348+0x7ce+-0x28c2,_0x5591fc[_0x3e6ad4(0xb21)]],[-0x2*0x47+-0x3*0xbd1+-0x1*-0x2659,'f32'],[-0x253c+-0xf97+0x11*0x33f,'u8'],[-0x3be*0x2+0x922+0xb7,'u8'],[-0x2*0xabc+-0x105b*0x1+0x2831*0x1,'u8'],[-0x1f5c+-0x413*-0x3+-0x1*-0x1583,_0x3e6ad4(0x211)],[-0x22a0+-0x6aa+-0x2*-0x15d7,'u8'],[0x1408*0x1+0x25e3*-0x1+-0xd8*-0x18,'u8'],[0x3da*-0x2+-0x5be+0xfda,'f32'],[0xb76+0x32*0x3b+0x38*-0x5e,_0x5591fc[_0x3e6ad4(0xb21)]],[-0x1ed9+-0x1c*0x131+-0x1637*-0x3,'f32'],[-0x2315+0x1*0x2707+-0x17e,_0x5591fc[_0x3e6ad4(0xb21)]],[-0xbcd+0x25c1+-0x3*0x7d4,'f32'],[-0x18cd+-0x8*-0x439+-0x67f,'f32'],[0x1814+-0x3*0xc37+0xf11,_0x5591fc['WDhIp']],[0x27*-0x23+-0x2b9+0xa92,'v3'],[0x1f42+0x1edf*0x1+-0x3b8d,'u8'],[-0x1*-0x49d+0x18f5+-0x1afa,'v3'],[0xf04+-0xab+-0xbb5,'f32'],[0x5*-0x493+-0x1*0x112f+0x2aba,'v3'],[0x611+-0x11*0x1b1+0x1968,'f32'],[0x13d4+-0x1ae0+0x272*0x4,'f32'],[0xe*0x155+0x25ab*0x1+-0x3591,_0x3e6ad4(0x211)],[-0xad3+0x2021+-0x128a,'u8'],[0x1d57+-0x1*0x1675+0x1b*-0x27,'u8'],[-0x334+0x8d0+-0x2d4,_0x5591fc[_0x3e6ad4(0xb21)]],[-0x1a81+-0x493*0x6+0x38cf,_0x3e6ad4(0x211)],[0x1953+0x1*0x109d+0x11*-0x24c,'v3'],[0x1a4*-0xb+-0x1347+0xb*0x3a9,'v3'],[0x14bf+-0xfa6+-0x21d,_0x5591fc[_0x3e6ad4(0xb21)]],[-0x6ad+0xebe+-0x511,_0x5591fc[_0x3e6ad4(0xb21)]],[-0x3*-0xc04+0x1196+0x49a*-0xb,_0x3e6ad4(0x211)],[0x1d9b+-0x10d*-0xe+-0x2949,'f32'],[0x15b8+-0x1339+0x2f*0x3,'v3'],[0x21a1*0x1+0x1*0x1c5e+0x3ae7*-0x1,'u8'],[-0x8f5*-0x2+-0x1*-0x18cb+-0x2799,'v3'],[0x3*0xce3+-0x16f*-0x3+-0x27ce,_0x3e6ad4(0x63b)],[0xaa1+0x1939+-0x2*0x1057,_0x5591fc[_0x3e6ad4(0xb21)]],[-0x1882*-0x1+0x3d*0x6d+-0x1*0x2f4b,'f32'],[0x3b4+-0x1*0x2135+0x20b5,'f32'],[-0x11f2+-0x2198+0x9*0x616,_0x3e6ad4(0x211)],[-0x379+0x1d0+-0x1*-0x4e9,'u8'],[0x641+0x7dc+-0xadc,'u8'],[-0x9a8+-0x15e4+0x22d8,'u8'],[-0x2688+-0x138b+0x3d60,'u8'],[-0x705*0x1+0x20ff+-0x16ac,'u8'],[0x3f5*0x5+-0x189a+0x821,_0x3e6ad4(0x211)],[0x2*0x706+0x19ce+0x11*-0x226,_0x5591fc[_0x3e6ad4(0xb21)]],[-0x1b8f*-0x1+-0x1fcf+0x24*0x36,_0x5591fc['WDhIp']],[-0x1ec+0xb2*-0x23+0x1d9e,_0x3e6ad4(0x211)],[0x2af*0x7+-0x1*-0xf2a+-0x1e93,_0x3e6ad4(0x211)],[-0x13e*0x1+-0x1adf*0x1+-0x5*-0x64d,'u8'],[0x1bea+0x1b67+0x1*-0x33e9,'f32'],[-0x198+-0x116d+0x1671,_0x3e6ad4(0x211)],[0x2522+-0x28e+0x1f24*-0x1,'u8'],[0x1a5c+-0x2258+0xb74,'v3'],[0xaa3+0x1*0x859+-0x18*0xa5,'v3'],[0x1d29+0xe*-0x253+0x1*0x6f1,'v3'],[0x1f3f+-0x2*-0xbd5+-0x334d,_0x5591fc[_0x3e6ad4(0xb21)]],[0x4*0x557+-0x1253+0x1*0x97,'f32'],[-0xc08+0xa86*0x3+-0x4a*0x37,_0x5591fc['WDhIp']],[0x16dc+0xd44+0x2078*-0x1,'v3'],[0x1*-0x1eb7+-0x14af+-0x1*-0x371a,'i32'],[0x3*-0xa65+0x9*-0x34b+0x408a,'u8'],[-0xa43+-0x113f+0x6*0x535,_0x3e6ad4(0x63b)],[-0x1*-0x5e5+-0x196c+0x65*0x3b,_0x5591fc[_0x3e6ad4(0xb21)]],[0x2290+-0x6f1*0x3+-0x9f9,_0x3e6ad4(0x211)],[0x296+0x5*-0x2e9+0xfbf,_0x5591fc[_0x3e6ad4(0xb21)]],[0x25*0xad+0x1fd6+-0x350b,_0x5591fc['WDhIp']],[-0x1385*-0x2+-0x155c+-0xdde,'v3'],[0x301+0x9c2+-0x8e7,_0x5591fc[_0x3e6ad4(0x96)]],[-0x4b0+0x1646+0x6*-0x249,'u8'],[0x10+0x10a*0x1c+-0x3*0x86d,'u8'],[0x1*0x116f+-0x6d*-0x46+-0xb*0x3f1,'u8'],[0x7c0+-0x11bb+0xddf*0x1,'f32'],[0x2*-0x5ec+0x4*-0x24a+-0xc74*-0x2,_0x3e6ad4(0x63b)]],'HealthScript':[[-0x213+-0x23*-0x53+-0x12*0x7f,'u8'],[0x23d4+-0x23cd+-0x5*-0x11,'i32'],[0x18*-0x16a+-0xa*0x2bb+0x3dbe,'f32'],[-0x435+0xf3d*-0x1+0x13f6,'f32'],[-0x9fd*-0x1+-0x1*0x9d1+0x5c,_0x3e6ad4(0x211)],[0x41d*0x1+-0x1ed4+0x1b43,_0x5591fc['WDhIp']],[-0x1459*0x1+0x1733+-0x125*0x2,_0x3e6ad4(0x211)],[-0x2ef*0x2+-0x1*-0x124+-0x61*-0xe,_0x3e6ad4(0x211)],[-0x1b0d+0x58a*0x2+0x1099,'i32'],[-0x196b+-0x851*-0x3+-0x11c*-0x1,_0x5591fc[_0x3e6ad4(0x96)]],[-0x1*-0x69b+0x11*-0xc+-0x527,'u8'],[0x987+-0x73*-0x1f+-0x799*0x3,'u8'],[0x24*0xeb+-0xd93+-0x12cf,'u8'],[0x81b+-0xcac+0x53c,'u8'],[-0x2*-0x15+-0x1312*-0x1+-0x1*0x127c,_0x3e6ad4(0x2e6)],[-0x22f3+-0x237f*0x1+-0x1*-0x4746,_0x5591fc['AsUYv']],[-0x58*-0x52+-0x1*-0x1a05+-0x354d,_0x5591fc['AsUYv']],[0x61*0x4b+0xb6d+-0x26dc,_0x5591fc[_0x3e6ad4(0x332)]],[0x387+-0x4*-0x86+-0x48f,_0x3e6ad4(0x2e6)],[-0x1743*-0x1+0xa*0xf+-0x16b5,_0x3e6ad4(0xc09)],[0x208+-0x1*0x26d5+0x25fd,_0x5591fc[_0x3e6ad4(0x71a)]],[0x22a6+-0xee2+-0x127c,'f32'],[-0x1*-0x13eb+0x24ec+0x1*-0x378b,_0x3e6ad4(0x211)],[0x11b8+-0x22c6+0x92f*0x2,_0x5591fc[_0x3e6ad4(0xb21)]],[-0x1*-0xb2d+-0x7d7+-0x2*0x101,_0x3e6ad4(0x211)],[0x1e64+0xa75+0xb*-0x397,'f32'],[0x1d38+0xf4f+-0x2b27,'v3'],[-0x99*-0x3b+-0x31*0xc7+0x444,_0x5591fc[_0x3e6ad4(0xb21)]],[-0x331*0x7+-0xd2+-0x1e5*-0xd,'f32'],[0x1*-0x2306+-0x1cd4+0xef*0x46,'u8'],[0x2c3*-0x2+0x207a*-0x1+0x278c,'u8'],[-0x13f+0x4*-0x687+0x1ceb,_0x5591fc[_0x3e6ad4(0x96)]]],'PlayerConfig':[],'WeaponManager':[[0x31*0x53+0x969+0x1*-0x1934,_0x3e6ad4(0x63b)],[-0x2000+-0xe7e+-0x952*-0x5,_0x3e6ad4(0x63b)],[0x1234+-0x1*-0x715+-0x153*0x13,'u8'],[-0xf0c+-0x553*0x4+-0x123e*-0x2,'i32'],[0x231e+-0x126a+0x24*-0x74,_0x5591fc['yIGEY']],[-0x9f0+-0x20c1+0x2b2d,_0x5591fc[_0x3e6ad4(0xb21)]],[-0xf5a+0xc95*0x3+-0x15e1,_0x3e6ad4(0x63b)],[-0x2*0xbef+0x223*0x12+0x18*-0x96,'u8'],[0x1*0x1b47+-0x1981*-0x1+-0x343f,'u8'],[-0x22fe+-0x3a4*-0x3+-0x112*-0x17,_0x5591fc[_0x3e6ad4(0x96)]],[-0x2487+0xda5*-0x1+0x32bc,_0x3e6ad4(0x211)],[-0x36d+-0x714+0xb19,'f32'],[0x1137+-0x16a4+0x619,_0x3e6ad4(0x63b)],[0x12db+0xa26*0x2+-0x266b,'u8'],[-0x1*-0x4f3+0x1f*0x97+-0x2cc*0x8,_0x3e6ad4(0x2e6)],[-0x1ffc+0x31d+0x1dcf,'obfI'],[0x1*-0x883+0x792+0x1f5,_0x5591fc[_0x3e6ad4(0xb21)]],[0x1e55+0x880+-0x25cd,_0x5591fc['WDhIp']],[0x81*0x31+0x1071+-0x2816,_0x3e6ad4(0x211)],[0x201c+0x6d2*0x1+-0x25d6,_0x5591fc[_0x3e6ad4(0xb21)]],[-0x1902+0xf6*-0x22+-0x9cd*-0x6,'f32'],[-0x966+0xe*-0x1e3+0x24f8,'u8'],[0x18b6+-0x2236+0xaac,_0x5591fc['AsUYv']],[0x1*0x1bd6+0x2664*0x1+-0x40fa,_0x3e6ad4(0x2e6)],[-0x153d+0x9bf*0x1+0xcd2,_0x3e6ad4(0x2e6)],[-0x5*0x259+-0x643+0x33c*0x6,_0x3e6ad4(0xc09)],[-0x5b7+0xb23+-0x7f*0x8,_0x3e6ad4(0xc09)],[-0x2*0x8b5+0x15a9+-0x2bf,_0x3e6ad4(0xc09)],[-0x32d*0x2+0x2*-0x64d+0x1480,_0x5591fc['zqBUc']],[-0x449+-0x22a4+0x1*0x2891,'obfB'],[0x107*0x1+-0x21ec+0x2295,'obfI'],[-0x1090+0xab1+0x97*0xd,'i32'],[0x95*0x15+-0x1*-0xcf4+-0x175d,'u8'],[-0x7*-0x2c8+-0x11f6+0x52,_0x5591fc['GhEVH']],[-0x78e*0x5+-0x2554+-0x93*-0x86,_0x3e6ad4(0x63b)],[-0x1*-0xa4a+-0x1*-0x2203+0x60b*-0x7,_0x3e6ad4(0x63b)],[0x2e7*-0xb+0x25c4+-0x3c3,'u8'],[-0x683*-0x2+0x1836+-0x8*0x464,'u8'],[-0x6*-0x14c+0x12e6+-0x1*0x1891,'u8'],[0x1*0x7ae+0x4d*0x4f+0x1*-0x1d53,'u8'],[-0x6*0x491+-0x1*-0x2329+0x1*-0x5a4,'u8'],[0x70*-0x4e+0xa3a+0x6e*0x3d,_0x5591fc[_0x3e6ad4(0x96)]],[-0x18aa+-0x3a9*0x1+0x3*0xa39,'u8']],'GG_GameManager':[[-0x7f0+-0xfb*0x1f+0x2679,'u8'],[0x1*0x9cb+-0x804+-0x3*0x89,_0x3e6ad4(0x211)],[0xfe4+-0x1*0xeda+0x42*-0x3,'u8'],[-0xdab*-0x1+-0x2261*0x1+0x14fb,'u8'],[0xc5*-0x2d+0x1740+0xba9,_0x5591fc[_0x3e6ad4(0xb21)]],[0xbb3+0x1*-0x188b+-0x2*-0x692,_0x5591fc[_0x3e6ad4(0xb21)]],[-0xe59*0x2+0x1229+-0xad9*-0x1,_0x5591fc[_0x3e6ad4(0x96)]],[-0xd9f+0x1*0x760+0x693,_0x3e6ad4(0x63b)],[-0x169f*0x1+-0x2390+-0x1*-0x3a87,'u8'],[-0xd0b+0x1b36+0xdb7*-0x1,'u8'],[0xa3*0x2b+-0x621*0x5+0x3bc,_0x5591fc[_0x3e6ad4(0xb21)]],[0xf54+-0x1f7b*0x1+-0x10a3*-0x1,'f32'],[0x3f4+0x118c+0x86*-0x28,_0x5591fc[_0x3e6ad4(0x96)]],[-0x1fd6+0x638*-0x2+0x2cda,'u8'],[-0xff2+0x2242+0x1c*-0xa1,_0x5591fc[_0x3e6ad4(0x96)]],[-0xbda+0x526+0x770,'i32'],[-0x3f5*0x5+0x218a+-0xd01*0x1,'i32'],[0x5*0x65+-0xde3+0xcd2,_0x5591fc['AsUYv']],[-0x1847+-0xc5b*-0x1+0x2*0x674,'obfI'],[0x1*-0x126b+0x25f0+-0x23*0x87,_0x5591fc[_0x3e6ad4(0x332)]],[-0x277*0xd+-0xb*0x71+0x2612,'u8'],[-0xd80+-0x1f09+0x2db9,_0x3e6ad4(0x63b)],[0x23bb*0x1+0x1*-0x1e47+-0x2*0x208,'u8'],[-0x3*0xd03+0x753+-0x2*-0x1093,_0x5591fc[_0x3e6ad4(0xb21)]],[-0x10b*0x5+0x1513+0x397*-0x4,'u8'],[0xc*-0x8f+-0xc14+-0x208*-0xa,'u8'],[0x2f*0xa+0x3bb+-0x3ed,'u8'],[-0x1267*-0x1+0xaed+-0xe*0x1fa,_0x3e6ad4(0x63b)],[0x8e7*0x1+0x1*0x1283+0x2*-0xcdf,_0x3e6ad4(0x211)],[-0x83*0x1f+-0x68f+-0x181c*-0x1,'u8'],[-0x6b5+0x1*-0x796+-0x6*-0x2aa,'u8'],[-0x16d9+0x224f+0x1d*-0x56,_0x3e6ad4(0x63b)],[0x10f*0x1+-0x12e3+-0x272*-0x8,'i32'],[-0xd39+-0x1536+0x242f,_0x5591fc['WDhIp']],[-0x2559+0x1240+0x14dd,_0x5591fc[_0x3e6ad4(0x96)]],[-0x24fb+0x18a2*-0x1+0x1*0x3f65,_0x5591fc[_0x3e6ad4(0xb21)]],[0x1083+-0x164a+0x793,'i32'],[0xc5*-0x19+-0x1a5+0x16b2,_0x5591fc[_0x3e6ad4(0x96)]]],'TDM_GameManager':[[0x1954+-0x573*-0x2+0x25*-0xfa,'u8'],[-0x2*0x67+-0x16b+0x259,'u8'],[-0x14ce+0x428+0x10c7,'u8'],[0xbf*0x20+-0x1f6e+0x7b2,_0x3e6ad4(0x211)],[-0x1a21+-0x1e3d+0x38b6,'u8'],[0x96b+-0xdb+-0x834,_0x5591fc[_0x3e6ad4(0xb21)]],[-0x2b*0xa+0x9fa*0x3+0x37c*-0x8,_0x3e6ad4(0x211)],[-0x576+0xa*0x1b4+0x12*-0x9f,'i32'],[-0x12*0x162+-0x1a*-0x2+0x1918,_0x5591fc[_0x3e6ad4(0x96)]],[-0x1*0x2173+0xa7b+0x1764,'u8'],[0x1d01+0x42*0x97+-0x2*0x21c1,'u8'],[0x6d*0x33+-0xd81+0x18e*-0x5,'f32'],[0x238*-0x5+0xe*0x1+0xb7e,_0x3e6ad4(0x211)],[-0x3*-0x599+-0x1d96+0xd43,_0x3e6ad4(0x63b)],[-0x1da7+-0xfd*-0x15+-0x6*-0x193,'u8'],[-0x92e+0x1*0xa3f+-0x81,'obfI'],[-0x23*-0x1b+-0x9d3*-0x3+0x2052*-0x1,_0x3e6ad4(0x2e6)],[0x13e*-0x2+0x21a7+-0x1e3f,'obfI'],[0x499+-0x113d+0x2*0x6d2,'obfI'],[-0xf07+-0x2125+0x3140,'u8'],[0x178b+-0x1*0x25c4+0xf95*0x1,'u8'],[0x171f*0x1+-0x3*-0x90d+-0x16*0x239,_0x3e6ad4(0x63b)],[-0x14f1+-0xd3*-0xa+0x5*0x2d3,'u8'],[-0x1*0x14f8+0x1d34+-0x6b8,'u8'],[-0xc2*-0x2b+-0x10e8+-0xe26,_0x5591fc[_0x3e6ad4(0xb21)]],[-0x1b17+0x6ed*-0x4+0x3857*0x1,_0x5591fc['GhEVH']],[0x2ba*-0xa+0x1*-0x107f+-0x1*-0x2d53,_0x3e6ad4(0x63b)],[-0x24d3+-0x8e9+0x2f50,'f32'],[-0xe8*-0x8+0x1859+-0x1e01,_0x3e6ad4(0x63b)],[-0xa3+-0x81f+0xa5e,_0x3e6ad4(0x63b)],[0x6e4+-0x13ae+-0x52*-0x2d,_0x5591fc[_0x3e6ad4(0xb21)]],[-0x728*-0x2+0x82*-0x2d+0xa2e,_0x3e6ad4(0x211)],[0x239+0x1f4d+0xfef*-0x2,'i32'],[0x1a03*0x1+-0xc5*-0x21+-0x31b8*0x1,'u8'],[0xc*-0x20+0x1055+0x1*-0xd24,'u8'],[-0x59*-0x1+-0x21e3+-0x2*-0x11a1,_0x3e6ad4(0x211)]],'PhotonNetworkSync':[[0x80a+0x85e+-0x3d*0x44,'v3'],[0xe15+0x148a+-0x1*0x225f,_0x3e6ad4(0x63b)],[-0x14*-0x5+-0x1*-0x266e+-0x268e,'u8'],[0x13a4+-0xea5+-0xb*0x6e,'u8'],[-0x1*-0x10a9+-0x1544+0x4e3,'v3'],[0xe9*-0x3+0x1da2*-0x1+-0x20b1*-0x1,'u8'],[0xf66+0x1393+-0x22a1,'i32'],[0x1*0x2627+0x23e9+-0x6a*0xb2,'i32'],[-0x16be+-0x129d+0x3*0xde9,_0x3e6ad4(0x211)],[-0x1*-0x1cfd+-0x1*-0x259a+0x4233*-0x1,_0x3e6ad4(0x211)],[-0x162e+0x1b8b+0x1*-0x4f5,_0x5591fc['WDhIp']],[-0x1990*0x1+-0x475+0x1e71,'v3'],[0x17*-0xf2+0x1d30+-0x6fa,_0x5591fc[_0x3e6ad4(0xb21)]],[-0x7a7+-0x919+0x113c,'f32'],[-0x22f4+0xe0d*-0x1+0x3181,_0x5591fc[_0x3e6ad4(0x96)]],[0x1c1b+0x1786+-0x1*0x3319,_0x3e6ad4(0x211)]],'MouseLook':[[0xf*0x269+0x169*0x1b+-0x2513*0x2,_0x3e6ad4(0x211)],[-0x1d60*-0x1+0xb02*0x2+-0x334c,_0x5591fc[_0x3e6ad4(0xb21)]],[0x1*-0x26a3+0x373+0x234c,_0x3e6ad4(0x211)],[-0x111d*-0x1+0x33d+-0x1*0x143a,_0x3e6ad4(0x211)],[0x281*0x2+0x237f+-0x285d,'f32'],[-0x38d*0x9+0x2505+0x1*-0x4e8,'f32'],[-0x503+-0x600+0x1*0xb33,_0x3e6ad4(0x211)],[-0x11fc+-0x22c1+0x34f1,'u8'],[-0x15ba+0x890+0xd62,_0x3e6ad4(0x211)],[-0xae7*0x1+-0x1444+0x1*0x1f67,_0x3e6ad4(0x211)],[-0x7*0x13e+-0x1b*-0x5d+-0xdd,_0x5591fc[_0x3e6ad4(0x96)]],[0x5*0x17f+0x4b4*0x4+0x1*-0x1a07,'u8'],[0x1a*-0x4d+0xd52+-0x14e*0x4,'v2']],'NetworkPlayerAnimations':[[0x1008+-0x14a+0x4b2*-0x3,'v3'],[0xb10+0x1de1+-0x283d*0x1,'v3'],[0x169f*-0x1+0x2*-0xbf5+0x2f49,'u8'],[-0x1e6d+-0x75*-0x44+0x1d,_0x5591fc['GhEVH']],[0xd7c*-0x1+0x233e+-0x3*0x6fe,_0x3e6ad4(0x63b)],[-0x1c*0x45+-0x6*-0x23+-0xd6*-0x9,_0x3e6ad4(0x211)],[-0xdfb+-0x1955*-0x1+-0xa8a,_0x5591fc['WDhIp']],[-0x1a89+-0x134d+-0x1759*-0x2,_0x3e6ad4(0x211)],[-0xb97+-0x6*0x3ef+-0x2411*-0x1,_0x3e6ad4(0x211)],[-0xb91*-0x1+0x855+-0x1ba*0xb,_0x3e6ad4(0x211)],[-0x88b+0x2370+0x19f9*-0x1,_0x5591fc['WDhIp']],[0xf7*0x1d+-0x1b1f+0x14,_0x3e6ad4(0x211)],[-0x1*0x1d3b+-0x2498+0x1*0x42c7,_0x5591fc[_0x3e6ad4(0xb21)]],[-0x5*0x3e5+0xe23+0x64e,_0x3e6ad4(0x211)],[0x21a*0x4+0x9b*0x3+-0x93d,_0x3e6ad4(0x211)],[-0x2579+0xe27*0x1+0xb*0x236,'f32'],[0x11b*0x7+0x1*0xf58+-0x75b*0x3,_0x5591fc[_0x3e6ad4(0xb21)]],[0x11*-0x109+0x1*0x24bf+-0x121e,_0x3e6ad4(0x63b)],[0x22ab+-0x1*-0xb29+-0x2cc8,'u8'],[-0x26dc+-0x1303*0x2+0x26f9*0x2,'i32'],[-0xb14+0x1*-0x2003+0x2c2b,_0x3e6ad4(0x63b)],[0x21ac*-0x1+-0x1*-0x329+0xa89*0x3,'u8'],[-0x16c+0x7c8*-0x2+0x1218,_0x5591fc['WDhIp']],[0x5*-0x605+-0x85b+0x2794,'f32'],[0x2479+0xbfb*-0x1+-0x31*0x7a,_0x3e6ad4(0x211)],[-0x1a+0xc7d+0x73*-0x19,'f32'],[0x18fb+-0xe20+-0x9af,'u8'],[0x14c2+0x10b*-0x1+-0x3b3*0x5,'u8'],[-0x1d97+-0x19c0+-0x1*-0x3893,'v3'],[-0xc40*-0x2+0x1d21+-0x3459,'v3'],[-0x9b*-0x2e+-0x1*-0xb65+-0x1*0x25ab,'u8']],'NPC_Cotroller':[[-0x1*-0x1a02+-0x20a6+0x6b8,'v3'],[0x2e*0x8e+0x682+-0x1fe6,_0x5591fc['WDhIp']],[-0xb4f+-0x332+0xea5,'f32'],[-0x5*0x751+0x2*0xa27+-0x1*-0x109d,'u8'],[-0x1*0x24b+-0x36*-0x97+0x37*-0x88,'u8'],[-0x15+0x1*0x1c33+0x22*-0xd1,'v3'],[0x11*-0x1c1+-0x181+0x1fee,'u8'],[-0xee3+0x39+0xf4a,_0x5591fc['WDhIp']],[-0x7*-0x452+0x99*0x2d+-0x387f,_0x3e6ad4(0x211)],[0x2*-0x647+-0x46*0x8+0xf76,_0x5591fc[_0x3e6ad4(0xb21)]],[-0xac4*-0x1+0xb51*0x3+-0x2bfb,'f32'],[-0x59*0xc+0x45a*-0x2+0xda8,'u8'],[0xaab+0x9b*0x1d+-0x1b6e,_0x3e6ad4(0x211)],[0x239*0x7+-0xcfb+-0x1bc,_0x5591fc['WDhIp']],[-0xa*0x2f9+0x6f*0x43+0x83*0x3,_0x3e6ad4(0x211)],[-0x2225+0x2*0x32f+0x5*0x5bb,_0x3e6ad4(0x211)],[-0xe9d+0x123*0x7+0x78c,'u8'],[0x1f5*0xe+-0x1fcd+0x553,_0x3e6ad4(0x211)],[0x11c0+-0x5*0x2a1+0x3*-0x139,'v3'],[0x39c+-0x1dc5+-0x1b25*-0x1,_0x3e6ad4(0x211)],[-0xe5e+-0x1467*0x1+-0x23c5*-0x1,'i32'],[-0xeea+-0x599+-0x21*-0xa7,_0x5591fc[_0x3e6ad4(0xb21)]],[0x14d5*0x1+-0x5*0x489+0x2e0,_0x3e6ad4(0x211)],[0x9f4+0x39*-0x63+0xd23,_0x3e6ad4(0x211)],[0x2192+-0x1a5f+-0x61f,'v3'],[0xe9*-0x8+-0x1d*0xef+-0x1*-0x237b,_0x5591fc[_0x3e6ad4(0xb21)]],[0x3*0x763+-0xff7+0x1*-0x50e,_0x5591fc['WDhIp']],[0x842*0x4+0x1*0x1813+-0x37e7*0x1,'v3'],[0xaf*-0x1+0x12ab+-0x10b8,'u8'],[0x8c0+0x11c*-0x18+0x1328,_0x5591fc[_0x3e6ad4(0xb21)]],[0x3*-0xc6d+0xa17+0x1c80,'v3'],[-0x11*-0x53+-0xe06+0x9e3,_0x3e6ad4(0x63b)],[-0x2142+-0x12a*-0xe+-0x1a*-0xb5,_0x5591fc['GhEVH']],[-0xd82+0x9d8+0x28d*0x2,_0x3e6ad4(0x211)],[-0x5f0+0x14*0x1a3+-0x1958,'u8'],[-0xb*-0x329+0x47f*-0x1+-0xe66*0x2,'v4'],[0x12a*0x4+-0x1*0x974+0x9*0xb4,_0x3e6ad4(0x211)],[-0x8b7*-0x1+0xf06+-0x1631,_0x3e6ad4(0x211)],[0x219f+-0x571+-0x1a9e,_0x5591fc['WDhIp']],[0x2552+-0x67*-0x47+-0x404b,'u8'],[-0x2*-0xeb+-0x1966+-0x1930*-0x1,_0x5591fc[_0x3e6ad4(0x96)]]],'TargetHealth':[[-0x1347+-0x2157+-0xb*-0x4ca,_0x5591fc[_0x3e6ad4(0x96)]],[0x18*0xeb+-0x2*0x11ef+-0x1*-0xdea,_0x5591fc['GhEVH']],[0x1*0x2267+0x196c+-0x3b9f,'u8'],[-0x404+-0xa05+0xe4d,_0x3e6ad4(0x63b)],[-0xce5*0x2+-0x248c+-0xc86*-0x5,'i32'],[-0xce+0x0+0x2*0x8d,_0x5591fc['GhEVH']],[-0x1*0x1c64+0xb39*0x1+0x117b,_0x5591fc['GhEVH']],[0x23c1+0x1f*-0x18+0x3*-0xac7,_0x5591fc['WDhIp']],[0x70d+0xf15+0x2*-0xacb,_0x5591fc['WDhIp']],[-0x1288+-0x151*-0xb+0x49d,'u8'],[-0x361+0x153d*-0x1+0x866*0x3,_0x5591fc[_0x3e6ad4(0xb21)]],[-0x1d24+0x2319+-0x551,'u8'],[-0xfdd+-0x365+0x13ea*0x1,_0x3e6ad4(0x63b)],[0x1*-0x1cab+0x8ed+0x146a,_0x5591fc[_0x3e6ad4(0x96)]],[0x16*0xa9+0x1*0x1a91+-0x2857,_0x3e6ad4(0x211)],[-0x741*0x4+0x2637+-0x867,'u8']],'SectatorCamera':[[-0x1132+0x1*0x1acd+0x10f*-0x9,'f32'],[0x83*0x25+-0x17e1*-0x1+-0x2ab8,_0x5591fc['WDhIp']],[-0x16a3+-0x14b6+-0x1bd*-0x19,_0x5591fc[_0x3e6ad4(0xb21)]],[0x86+-0x1*0x1912+0x18ac,'v3'],[-0x1380+-0x2*0xe12+-0x2d*-0x110,'v3'],[-0xa*0x34c+0x2178+-0x38,_0x5591fc[_0x3e6ad4(0x96)]],[-0xb8*-0x2b+-0x1bb3+0x5*-0x95,'i32'],[0x14ea+-0xc0*-0xd+-0x1e5a,_0x5591fc[_0x3e6ad4(0xb21)]],[-0x772*0x1+0x1967+-0x11a1*0x1,_0x3e6ad4(0x63b)],[-0x2655+0x1*-0x1a3f+-0xf*-0x454,_0x3e6ad4(0x211)],[-0x22d6+0x1f37*0x1+0x3fb,'u8'],[-0x59*-0x62+0x1*0x15a3+0x1*-0x3755,'v3'],[-0x6f1+0x41b+0x1*0x342,'v4'],[0x7*0x59+-0xf*-0x274+0x1*-0x26bf,'u8'],[0x58*0x1d+0x1721+-0x2099,_0x5591fc['GhEVH']]],'UISettings':[[-0x7b6+0x6*0x52+-0x1*-0x5ea,_0x5591fc['GhEVH']],[0xbbb+0xd8e+-0x1921,_0x3e6ad4(0x211)],[0xc*-0x292+-0x5*-0x709+0x1*-0x311,'u8'],[0x2*0x2cc+0x8d5+-0x2a1*0x5,_0x3e6ad4(0x63b)],[0x25d3+-0x93c+0x7*-0x3e5,_0x3e6ad4(0x63b)],[-0x3df*0x2+-0x246a+0x2d80,_0x5591fc[_0x3e6ad4(0x96)]],[0x11c*-0x1d+-0x6*0x20f+0x2de2,'u8'],[-0xe2*-0x11+-0x7*0x3fa+0xe31,'u8'],[0x912+-0x1f1+0x5*-0x127,'u8'],[0x5e*-0x67+-0xb56+0x3287,'u8'],[-0xa39*0x1+-0x230f+-0xbaa*-0x4,'u8'],[-0x363+-0x8*0x245+0x16ec,'u8'],[0x832*-0x3+0x1ebd+0x4c5*-0x1,'u8'],[-0x4f6+0x1*0x1bd7+-0x1525,_0x3e6ad4(0x211)],[0x1*-0x233+-0x30*0x2c+-0x35*-0x3b,'f32'],[0x1*0x1f86+-0x233f+-0x1*-0x5d1,'u8'],[-0xf9*0x1b+-0x27b*-0xa+-0x3f5*-0x1,_0x5591fc['WDhIp']],[-0x692+-0x990+0x12c2,_0x3e6ad4(0x63b)],[-0x5bf*-0x2+0x1bbe+-0xb*0x34c,'u8'],[0x7d*0x47+-0xb2d*0x2+-0x8b5,'u8'],[-0xdff*0x2+-0xd7b+0x2d19,'v2'],[-0x1502+0x9dc+-0x17b*-0xa,'v2'],[0x5ff+0x56c*-0x7+0x23a5,'u8'],[0x513*-0x4+0x1a19+-0x215,'u8'],[-0x119b+0x191+0x2*0x9eb,_0x5591fc['WDhIp']],[-0x1*-0x54d+-0x123a+0x10bd,'v3'],[-0x89e+0x4*-0x406+0x1c96,'f32'],[0x10*0x22e+-0x1ad0+-0x42c,'f32'],[0x134c+0xec7+0x1*-0x1e2b,'f32'],[0x7ef*0x2+0x6e4*-0x3+0x8be,'u8'],[0x9*0x1d0+-0xc*0x74+-0x6ef,'u8'],[0xa*-0x2f+0x252b+-0x1f61*0x1,'i32'],[0x1b52+-0x2574+0x9*0x192,_0x5591fc[_0x3e6ad4(0x96)]],[-0x26db+0x41*0x81+0xa1e,_0x3e6ad4(0x63b)],[0x3c6+-0x9*0x3e4+0x56*0x69,_0x5591fc['GhEVH']],[0xa0f+-0x5*0xd2+-0x1e9,_0x3e6ad4(0x63b)],[0x4fd*-0x1+0x943*0x4+-0x1bff,'i32'],[0x78f+0x10*0x5a+-0x91b,'i32'],[0x41*0x14+-0x231b*0x1+0x221f,_0x3e6ad4(0x63b)],[-0x7*-0x4c4+-0x5a+-0x1ce6,_0x3e6ad4(0x63b)],[0x172d+-0x21a*-0xd+-0xf75*0x3,_0x3e6ad4(0x63b)],[0x2248+-0x1de2+0x3*-0x6,'u8'],[-0x37*0x77+-0xd6a+0x108*0x2a,'u8'],[-0x13f*0x19+0x123f+0x2*0x89f,'u8'],[-0x1874+0x1*-0x15b2+0xa19*0x5,'u8'],[-0x488+-0x29*-0x72+-0x1*0x92e,_0x3e6ad4(0x211)]]},_0xc90080={},_0x385c38={};function _0x27c0f7(_0x20b773,_0x5bdf26,_0x4d70c4){var _0x16cba1=_0x3e6ad4;if(_0x5591fc[_0x16cba1(0x6f5)]===_0x5591fc[_0x16cba1(0x16f)]){_0x5d4f79['on']=!!_0x3d814d,_0x30641e[_0x16cba1(0x82e)]=!!_0x3e2323,_0x5591fc[_0x16cba1(0x75d)](_0x46eca0);try{var _0x8637f2=_0x54f486();if(_0x8637f2&&_0x8637f2['el'])_0x8637f2['el'][_0x16cba1(0xd5)][_0x16cba1(0x68f)+'ay']=_0x5a0e29['on']?'':_0x16cba1(0x3cd);var _0x38a6cb=_0x5c32fc;if(_0x38a6cb&&_0x38a6cb['cv'])_0x38a6cb['cv']['style'][_0x16cba1(0x68f)+'ay']=_0x557bf5['on']&&_0x34ac2b[_0x16cba1(0x82e)]?'':_0x5591fc[_0x16cba1(0x3aa)];}catch(_0x43e92d){}}else return function(_0x424787){var _0x59a45e=_0x16cba1,_0x3bbeb7={'ZKoKk':function(_0x2cdad5,_0x51e1cb){return _0x2cdad5===_0x51e1cb;}};try{var _0x4c8c02=_0x424787&&_0x424787[_0x59a45e(0xaf1)]?_0x424787[_0x59a45e(0xaf1)]():0x107f+0x11*-0x143+-0x1*-0x4f4;if(!_0x4c8c02)return;var _0x47faba=_0x385c38[_0x20b773]||(_0x385c38[_0x20b773]={}),_0x14dadd=_0x47faba[_0x4c8c02];if(!_0x14dadd)_0x14dadd=_0x47faba[_0x4c8c02]={'ptr':_0x4c8c02,'firstSeen':Date['now'](),'hits':0x0};_0x14dadd[_0x59a45e(0x6a6)]++;if(_0x4d70c4){if(!_0xc90080[_0x4c8c02])_0xc90080[_0x4c8c02]={'ptr':_0x4c8c02,'kind':_0x20b773,'firstSeen':Date[_0x59a45e(0x5e4)](),'hits':0x0};_0xc90080[_0x4c8c02][_0x59a45e(0x6a6)]++;}else{var _0xdcf549=_0x3f2eb8[_0x20b773];if(!_0xdcf549||_0xdcf549[_0x59a45e(0x6a2)]!==_0x4c8c02){_0x3f2eb8[_0x20b773]={'ptr':_0x4c8c02,'firstSeen':Date[_0x59a45e(0x5e4)](),'hits':0x0,'replaced':!!_0xdcf549};try{var _0x8690e3=_0x3e8aab['filte'+'r'](function(_0x57d6d1){var _0x727ed3=_0x59a45e;return _0x57d6d1[_0x727ed3(0x394)]===_0x20b773;})[0x552+-0xc5*-0x2f+-0x297d];_0x92977a={'type':_0x20b773,'atMs':Date[_0x59a45e(0x5e4)]()-_0x50451a,'originalFunc':!!(_0x8690e3&&_0x8690e3[_0x59a45e(0x76c)]&&_0x5591fc[_0x59a45e(0x12b)](typeof _0x8690e3[_0x59a45e(0x76c)][_0x59a45e(0x9ab)+'nalFu'+'nc'],_0x5591fc[_0x59a45e(0x854)])),'resolveGameAtFire':!!_0x6f0358(),'gameSourceAtFire':_0x3bac15['sourc'+'e']};}catch(_0x5b8a8f){}}}if(_0x20b773==='FPSco'+'ntrol'+_0x59a45e(0x92f)&&_0x2680b6['on'])try{_0x5591fc['xFnCd']==='BygTl'?_0x1a40bb[_0x59a45e(0x173)+_0x59a45e(0x3f4)+'t']=_0x42cb2f[_0x59a45e(0xa97)+_0x59a45e(0x6d7)](_0x354374,null,-0xcd*-0x1f+0x157*0x4+-0x1e2e):_0x87305(_0x4c8c02);}catch(_0x38cd80){}if(!_0x5bdf26){var _0x8690e3=_0x3e8aab['filte'+'r'](function(_0x58cc46){var _0x4d649a=_0x59a45e;return _0x3bbeb7[_0x4d649a(0xa30)](_0x58cc46['type'],_0x20b773);})[0x180+-0x1603+0x1483];if(_0x8690e3&&_0x8690e3['hook'])try{_0x8690e3['hook']['enabl'+'ed']=![];}catch(_0x3e0086){}}}catch(_0x2b9723){}};}function _0x51b115(){var _0x2562b8=_0x3e6ad4,_0x4b2a65={'kxwVz':function(_0x10d285,_0x3a6df2){return _0x10d285+_0x3a6df2;},'TSnVb':_0x5591fc['mJfBX'],'HSBle':_0x2562b8(0x3a5),'JUdWm':function(_0x33d25e,_0x33e1e8){var _0xe77609=_0x2562b8;return _0x5591fc[_0xe77609(0x168)](_0x33d25e,_0x33e1e8);}};if(_0x3e8aab[_0x2562b8(0xa6a)+'h'])return!![];if(!window[_0x2562b8(0xb3d)+_0x2562b8(0x94f)+_0x2562b8(0x77b)]||!window[_0x2562b8(0xb3d)+_0x2562b8(0x94f)+_0x2562b8(0x77b)]['Runti'+'me'])return![];var _0x592307=window[_0x2562b8(0xb3d)+_0x2562b8(0x94f)+'dkit'][_0x2562b8(0x2de)+'me'];if(!_0x592307[_0x2562b8(0x5d9)+'ns']||!_0x592307[_0x2562b8(0x5d9)+'ns'][_0x2562b8(0xa6a)+'h'])return![];_0x350f02=window['Unity'+_0x2562b8(0x94f)+_0x2562b8(0x77b)][_0x2562b8(0x4d7)+'Wrapp'+'er'],_0x30b685=_0x30b685||_0x592307['plugi'+'ns'][_0x5591fc[_0x2562b8(0xe0)](_0x592307['plugi'+'ns'][_0x2562b8(0xa6a)+'h'],-0x62*0x47+-0x22a5*-0x1+-0x776)];if(!_0x30b685||typeof _0x30b685['hookP'+'refix']!==_0x2562b8(0x6e6)+'ion')return![];for(var _0x2fb2c8=0xe96+0x2*0x40b+-0x16ac;_0x5591fc['MkbYf'](_0x2fb2c8,_0x28d91b[_0x2562b8(0xa6a)+'h']);_0x2fb2c8++){if(_0x5591fc['XJbcE'](_0x5591fc['MhIti'],_0x2562b8(0x7c5))){var _0x142e61=_0x2a697a[_0x2562b8(0x479)];if(!_0x142e61||!_0x142e61[_0x2562b8(0xd5)])return;_0x18a97a['pos']?(_0x142e61['style'][_0x2562b8(0xb3f)]=_0x4b2a65['kxwVz'](_0x54a797[_0x2562b8(0x61a)]['x'],'px'),_0x142e61[_0x2562b8(0xd5)]['top']=_0x4b2a65[_0x2562b8(0xf2)](_0x472c1c[_0x2562b8(0x61a)]['y'],'px'),_0x142e61[_0x2562b8(0xd5)]['right']='auto',_0x142e61[_0x2562b8(0xd5)]['botto'+'m']=_0x4b2a65['TSnVb']):(_0x142e61['style']['left']='auto',_0x142e61[_0x2562b8(0xd5)][_0x2562b8(0x92)]='auto',_0x142e61[_0x2562b8(0xd5)][_0x2562b8(0x521)]='24px',_0x142e61[_0x2562b8(0xd5)][_0x2562b8(0x3fa)+'m']=_0x4b2a65[_0x2562b8(0x264)]);}else{var _0x49f6e0=_0x28d91b[_0x2fb2c8];try{var _0x3814c5=_0x30b685[_0x2562b8(0x915)+'refix']({'typeName':_0x49f6e0['type'],'methodName':_0x2562b8(0x5fa)+'e','params':[_0x5591fc['GhEVH'],_0x2562b8(0x63b)],'returnType':undefined},_0x27c0f7(_0x49f6e0[_0x2562b8(0x394)],_0x49f6e0[_0x2562b8(0x3be)],_0x49f6e0[_0x2562b8(0x1a4)]));_0x3e8aab[_0x2562b8(0xb4)]({'type':_0x49f6e0[_0x2562b8(0x394)],'hook':_0x3814c5,'keep':_0x49f6e0[_0x2562b8(0x3be)]});}catch(_0x33d079){if(_0x2562b8(0x617)===_0x5591fc['eblWY'])return _0x57e028['abs'](_0x4b2a65['JUdWm'](_0x40b5f9,_0x4dd5f3))<=_0x267da0[_0x2562b8(0x29f)](0x1ea6+-0x41*0x5f+-0xa*0xa7,_0x5e99e4['abs'](_0x394742)*(-0xc8b+0x12*0x1bb+-0x129b+0.6));else _0x491ad4['push'](_0x49f6e0['type']+':\x20'+String(_0x33d079&&_0x33d079[_0x2562b8(0x153)+'ge']||_0x33d079)[_0x2562b8(0x4a5)](0x77e+-0x33*-0xbf+-0x2d8b,0x1*-0x64f+-0x1502+0x1bf1*0x1));}}}return _0x3e8aab[_0x2562b8(0xa6a)+'h']>0x20d3+-0x1*0x17ff+-0x8d4;}function _0x155a19(_0x5ab50e,_0x94fe34){var _0x2ff7e8=_0x3e6ad4,_0x262af0={'AjlHe':function(_0x3eb27e,_0x5e2001){var _0x3fe00e=_0x3f00;return _0x5591fc[_0x3fe00e(0x778)](_0x3eb27e,_0x5e2001);},'ULTdP':function(_0x5b5646,_0xaf2aeb){return _0x5591fc['mpdrA'](_0x5b5646,_0xaf2aeb);},'EGKyH':function(_0x448631,_0x5b07e5,_0x420913,_0x4bae51){return _0x448631(_0x5b07e5,_0x420913,_0x4bae51);},'YCTtO':'Refus'+_0x2ff7e8(0x556),'fVSon':function(_0x3ef2f5,_0x2b15b2){return _0x3ef2f5===_0x2b15b2;},'BGcjg':_0x5591fc['YFyjO'],'jrVlG':function(_0x1cab28,_0x48d637){return _0x5591fc['KqCuO'](_0x1cab28,_0x48d637);}};if(_0x2ff7e8(0x671)!==_0x5591fc[_0x2ff7e8(0x691)])return function(){var _0x3d7102=_0x2ff7e8;try{var _0x49765f=_0x38db05[_0x94fe34]||(_0x38db05[_0x94fe34]={'last':null,'hits':0x0,'setLast':null,'setHits':0x0}),_0x30a317=arguments;if(_0x5ab50e===_0x3d7102(0x7db)){var _0x2ff3e2=_0x30a317[-0x6*0x16+-0x1907+0x198b];if(_0x2ff3e2&&typeof _0x2ff3e2['val']===_0x3d7102(0x6e6)+_0x3d7102(0x2ca)){if(_0x262af0['fVSon']('IyRHv','cdzdF')){var _0x24b567={'YnmlM':function(_0x35fe62,_0x2ead3a){return _0x262af0['AjlHe'](_0x35fe62,_0x2ead3a);},'bVawT':function(_0x55171c,_0x575fb0){var _0x14caf1=_0x3d7102;return _0x262af0[_0x14caf1(0x675)](_0x55171c,_0x575fb0);}},_0x5e86df=_0x262af0['EGKyH'](_0x5176e8,'div','sk-no'+'te',_0x262af0[_0x3d7102(0x5d8)]+_0x1ac1bf['slice'](-0x259*-0xb+0x25*0xd7+0x2*-0x1c73,-0x64*-0xa+-0x1*-0x122f+-0x1613)[_0x3d7102(0x497)](function(_0x5012f1){var _0x4fc60f=_0x3d7102;return _0x24b567[_0x4fc60f(0x253)]('0x',_0x24b567[_0x4fc60f(0x6d3)](_0x5012f1['o'],-0x1c47+-0x17*0x163+0xf0b*0x4)?'?':_0x5012f1['o'][_0x4fc60f(0x8e7)+_0x4fc60f(0x9e7)](0x2*-0x495+0x151f+0x1b3*-0x7))+'\x20('+_0x5012f1[_0x4fc60f(0x41a)]+')';})[_0x3d7102(0x1ed)]('\x20\x20'));_0x3a60e0['body'][_0x3d7102(0x3df)+_0x3d7102(0x566)+'d'](_0x5e86df);}else{_0x49765f[_0x3d7102(0xa45)]=_0x2ff3e2[_0x3d7102(0xaf1)](),_0x49765f[_0x3d7102(0x6a6)]++;if(_0x30a317[0x1*-0x259d+-0x4a3*-0x2+-0x1c58*-0x1]&&typeof _0x30a317[0x85+0x10b7*-0x1+0x1033]['val']===_0x262af0[_0x3d7102(0x839)]){var _0x1d4121=_0x30a317[0x225b+0x17*-0x3+-0x2215]['val']();if(_0x1d4121)_0x45e31c=_0x1d4121;}}}}else{_0x30a317[0x25f5+0x1f*0xc6+0x1ef7*-0x2]&&typeof _0x30a317[-0xcd4+-0x2213*0x1+-0x4c*-0x9e][_0x3d7102(0xaf1)]==='funct'+'ion'&&(_0x49765f[_0x3d7102(0x930)+'st']=_0x30a317[-0x2*-0x269+-0x10f0+0xc1f][_0x3d7102(0xaf1)](),_0x49765f['setHi'+'ts']++);if(_0x30a317[-0x23ad+-0x2e3*-0x7+0x37*0x48]&&_0x262af0[_0x3d7102(0x8b0)](typeof _0x30a317[0x435+0x6ff*0x3+-0x1932]['val'],_0x3d7102(0x6e6)+_0x3d7102(0x2ca))){var _0x4a68b4=_0x30a317[0x16cf+0xb60+0x3*-0xb65]['val']();if(_0x4a68b4)_0x45e31c=_0x4a68b4;}}}catch(_0x4e0efc){}};else _0x29a7f9++,_0x1f2cb7[_0x2ff7e8(0x552)]=!![];}function _0xdde1cb(){var _0x520ee1=_0x3e6ad4,_0x5b16c9={'ktdJw':_0x520ee1(0x2de)+_0x520ee1(0x836)+'ame'};if(_0x32a611)return!![];if(!_0x30b685||typeof _0x30b685['hookP'+_0x520ee1(0x1a6)+'x']!==_0x5591fc['YFyjO'])return![];var _0x4dd3fb=_0x4b0373['Mouse'+'Look']||[];for(var _0xba8c5d=-0x7ba*-0x2+0x6b*0x43+0x1bd*-0x19;_0x5591fc['kdBdU'](_0xba8c5d,_0x4dd3fb['lengt'+'h']);_0xba8c5d++){if(_0x520ee1(0x126)===_0x5591fc['WaALW'])_0x2ad32a=[];else{var _0x27226f=_0x4dd3fb[_0xba8c5d];try{if(_0x27226f[_0x520ee1(0x936)]===_0x520ee1(0x62a))_0x30b685[_0x520ee1(0x915)+_0x520ee1(0x1a6)+'x']({'typeName':_0x520ee1(0x37a)+'Look','methodName':_0x27226f[_0x520ee1(0x7b7)],'params':_0x27226f['wasmP'+_0x520ee1(0x86c)],'returnType':_0x27226f[_0x520ee1(0x8d6)+'et']},_0x155a19('get',_0x27226f[_0x520ee1(0x7b7)]));else _0x27226f['ret']===_0x5591fc[_0x520ee1(0xb94)]&&_0x5591fc[_0x520ee1(0x71e)](_0x27226f['param'+'s'][_0x520ee1(0xa6a)+'h'],-0x2*-0x91a+0x1357*-0x2+-0x31*-0x6b)&&_0x27226f['param'+'s'][-0x1*0x89b+0x539*-0x3+0x1846]===_0x520ee1(0x62a)&&_0x30b685['hookP'+_0x520ee1(0xa67)]({'typeName':_0x520ee1(0x37a)+'Look','methodName':_0x27226f[_0x520ee1(0x7b7)],'params':_0x27226f[_0x520ee1(0x841)+'arams'],'returnType':undefined},_0x155a19(_0x5591fc[_0x520ee1(0x9f)],_0x27226f[_0x520ee1(0x7b7)]));}catch(_0x49ccab){if(_0x5591fc[_0x520ee1(0x3e8)](_0x520ee1(0xc6),'MEUPS'))_0x1f0520[_0x520ee1(0xb4)](_0x5591fc['qCsBB'](String,_0x49ccab&&_0x49ccab[_0x520ee1(0x153)+'ge']||_0x49ccab)[_0x520ee1(0x4a5)](0x2115*0x1+-0xe*0x1c9+-0x817,0x156c+0x1158+-0x264c));else{var _0x7fbbfb=_0x129430['Unity'+_0x520ee1(0x94f)+'dkit']&&_0x281dfc[_0x520ee1(0xb3d)+'WebMo'+_0x520ee1(0x77b)][_0x520ee1(0x2de)+'me'];if(_0x7fbbfb&&typeof _0x7fbbfb['resol'+_0x520ee1(0xb90)+'e']==='funct'+_0x520ee1(0x2ca)){var _0x1cb7e6=_0x7fbbfb['resol'+_0x520ee1(0xb90)+'e']();if(_0x1cb7e6)return _0x29709d['sourc'+'e']=_0x520ee1(0x2de)+_0x520ee1(0x90a)+'solve'+_0x520ee1(0xa51)+')',_0x1cb7e6;}if(_0x7fbbfb&&_0x7fbbfb[_0x520ee1(0x66a)])return _0x26b876['sourc'+'e']=_0x5b16c9['ktdJw'],_0x7fbbfb;}}}}return _0x32a611=!![],!![];}function _0x34035f(){var _0x33e585=_0x3e6ad4,_0x19e0a4=-0x28c+0xf*-0x148+-0x571*-0x4;for(var _0x576f6b=0x1a66+0xd*0x9d+0x3*-0xb75;_0x576f6b<_0x3e8aab['lengt'+'h'];_0x576f6b++){if(_0x3e8aab[_0x576f6b]['hook']&&_0x5591fc['PNkby'](_0x3e8aab[_0x576f6b]['hook']['table'+_0x33e585(0x293)],undefined))_0x19e0a4++;}return _0x19e0a4;}function _0x496b3b(){var _0x15aef4=_0x3e6ad4,_0x36f2b0=-0x2028+0xb56*-0x3+0x422a;for(var _0x1d87f7=0xed2+0x216a*0x1+0x2ae*-0x12;_0x1d87f7<_0x3e8aab['lengt'+'h'];_0x1d87f7++){if(_0x3e8aab[_0x1d87f7][_0x15aef4(0x76c)]&&_0x3e8aab[_0x1d87f7][_0x15aef4(0x76c)]['appli'+'ed'])_0x36f2b0++;}return _0x36f2b0;}var _0x20a464=null,_0x33c5bb=[],_0x118c5e={},_0x92977a=null;function _0x362ea6(_0xce43fc){var _0xd4a4f2=_0x3e6ad4,_0x268ffd={'OYOQX':function(_0x5ee72d){var _0x1f052f=_0x3f00;return _0x5591fc[_0x1f052f(0x540)](_0x5ee72d);}};try{if(_0x5591fc[_0xd4a4f2(0x2a9)](!_0x350f02,!_0xce43fc))return null;var _0x1bc139=new _0x350f02(_0xce43fc)[_0xd4a4f2(0x688)+'assNa'+'me']();return _0x1bc139===undefined?null:_0x1bc139;}catch(_0x5b5d8f){if(_0x5591fc['HLgvh']!==_0x5591fc[_0xd4a4f2(0xacc)])_0xaae0c2[_0xd4a4f2(0x26a)]=0x841*-0x1+-0xd*-0xf1+-0x5*0xbd,_0x268ffd[_0xd4a4f2(0x8ab)](_0x193508),_0x32d088(_0x473b37[_0xd4a4f2(0x4da)]);else return null;}}function _0x3501e5(_0x30d38d,_0xeaa3e,_0x45a0f8){var _0x2bcf2a=_0x3e6ad4,_0xdf98dd=_0x4e8a62();if(!_0xdf98dd)return null;if(_0x5591fc['VrOcR'](_0xeaa3e,0x85*0x25+-0x7a*0x3+-0x11cb)||_0x5591fc['aIvld'](_0x5591fc['idABv'](_0xeaa3e,_0x45a0f8*(-0x1e62+-0x2501+0x1d*0x253)),_0xdf98dd['byteL'+'ength']))return null;var _0x2fde27=[];for(var _0x3e9d4a=0x101*0x22+0x4c*-0x53+-0x97e;_0x3e9d4a<_0x45a0f8;_0x3e9d4a++)_0x2fde27['push'](_0xdf98dd[_0x2bcf2a(0x40b)+'oat32'](_0x5591fc[_0x2bcf2a(0xbb1)](_0x5591fc['wQroQ'](_0x30d38d,_0xeaa3e),_0x5591fc['jaBpC'](_0x3e9d4a,0x118e+-0xb73+0x617*-0x1)),!![]));return _0x3bac15['ok']+=_0x45a0f8,_0x2fde27;}var _0x5d48d9={'PhotonNetworkSync':[['0x10',_0x3e6ad4(0x4d5)+'nView'],['0x20',_0x3e6ad4(0x10e)+'h'],[_0x5591fc[_0x3e6ad4(0x4dc)],_0x5591fc[_0x3e6ad4(0x406)]],[_0x5591fc['HDgCu'],_0x5591fc['xKQTw']],[_0x5591fc['YxTeE'],_0x5591fc['dZuvl']]],'NetworkPlayerAnimations':[[_0x3e6ad4(0x7b5),'capsu'+'le'],[_0x5591fc['Imoxi'],_0x3e6ad4(0x16c)]],'NPC_Cotroller':[[_0x5591fc[_0x3e6ad4(0x21c)],_0x5591fc['oKfGl']],[_0x5591fc[_0x3e6ad4(0xa37)],'targe'+_0x3e6ad4(0x341)+'th'],[_0x3e6ad4(0x7b2),_0x3e6ad4(0x10e)+'h'],['0xd4',_0x3e6ad4(0x576)+_0x3e6ad4(0x341)+_0x3e6ad4(0xa16)],['0xe8',_0x3e6ad4(0xb02)+_0x3e6ad4(0x2f2)]],'EnemyBot':[['0x14','trans'+_0x3e6ad4(0x2f2)]]},_0x132ab9={'PhotonNetworkSync':[[_0x3e6ad4(0x82f),_0x3e6ad4(0xe1)],[_0x5591fc['CDxIu'],_0x5591fc[_0x3e6ad4(0x81c)]],[_0x5591fc['kjsGH'],'id']]};function _0xbec475(_0x157c9e,_0x17addd){var _0x2ba192=_0x3e6ad4,_0x52d5a3={'oZsrK':function(_0x18114b){return _0x18114b();},'cecak':_0x2ba192(0x5ff)+'t','Ylesh':function(_0xc0ae52,_0x41b3ab){return _0xc0ae52+_0x41b3ab;},'NsjdO':_0x2ba192(0x4e3)+':','zIxlH':_0x5591fc[_0x2ba192(0x3ee)],'TjnDE':_0x2ba192(0x868)};if(_0x2ba192(0x1e1)!==_0x2ba192(0x1e1)){var _0x39622d=_0x1bd254[_0x2ba192(0x5e3)];if(!_0x39622d||_0x39622d[_0x2ba192(0x635)+_0x2ba192(0x4b1)]!==_0x4934d8)return;try{if(_0x39622d[_0x2ba192(0x524)]==='hello'){_0x52d5a3['oZsrK'](_0x44e3a1)[_0x2ba192(0xb10)]({'host':_0x39622d[_0x2ba192(0x6bb)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x39622d['kind']===_0x52d5a3[_0x2ba192(0x58a)])_0x52d5a3['oZsrK'](_0x1d0a75)['set'](_0x39622d[_0x2ba192(0x5ff)+'t']);}catch(_0x48bbc7){_0x3279e4[_0x2ba192(0x42f)]('%c[sa'+'kura]'+_0x2ba192(0x103)+_0x2ba192(0x719)+_0x2ba192(0x648)+_0x2ba192(0x52c),_0x52d5a3[_0x2ba192(0xb39)](_0x52d5a3[_0x2ba192(0x23a)],_0x4f33f3),_0x48bbc7);}}else{var _0x51848f=_0x599afb[_0x157c9e]||[],_0x16f1fd={'kind':_0x157c9e,'ptr':'0x'+_0x17addd[_0x2ba192(0x8e7)+_0x2ba192(0x9e7)](0x1f3f+0x10d0+0xb*-0x45d),'pos':null,'posAt':null,'allVecs':[],'scalars':[],'refs':{}};for(var _0x448584=-0x1*0x2099+-0x235e+0x7f*0x89;_0x448584<_0x51848f['lengt'+'h'];_0x448584++){if(_0x5591fc[_0x2ba192(0x8d5)]('bmmvT','bmmvT')){var _0x94f8af=new _0x3e3490(_0x2ba192(0x6d0)+_0x2ba192(0x596));_0x94f8af[_0x2ba192(0x763)+_0x2ba192(0x12d)]=function(_0x373dd3){var _0x30f600=_0x2ba192,_0xa32d84=_0x373dd3['data'];if(_0xa32d84&&_0xa32d84[_0x30f600(0x635)+_0x30f600(0x4b1)]===_0x3e6629&&_0xa32d84[_0x30f600(0x524)]===_0x52d5a3[_0x30f600(0xc1c)])_0x4afe87(_0xa32d84['cmd'],_0xa32d84[_0x30f600(0x444)]);};}else{if(_0x51848f[_0x448584][-0x167b+0x13f7+0x285]!=='v3')continue;var _0x5160c4=_0x5591fc[_0x2ba192(0xc21)](_0x3501e5,_0x17addd,_0x51848f[_0x448584][-0x266f*-0x1+-0x2680+-0x11*-0x1],-0xb5d*0x2+0x59*0x70+-0x1033);if(!_0x5160c4)continue;_0x16f1fd[_0x2ba192(0x913)+'cs'][_0x2ba192(0xb4)]({'o':'0x'+_0x51848f[_0x448584][-0x2aa*0x5+0x96b*0x2+-0x584][_0x2ba192(0x8e7)+'ing'](0x6*0x529+-0xbe7+-0x3*0x655),'v':_0x5160c4});}}var _0x343929=-0x1f12+-0xc84+0x2b96*0x1,_0x4fcc1a=_0x1aa740(_0x16f1fd[_0x2ba192(0x913)+'cs'],_0x5ca5cd());_0x16f1fd['pos']=_0x4fcc1a[_0x2ba192(0x61a)],_0x16f1fd['posAt']=_0x4fcc1a[_0x2ba192(0x225)],_0x16f1fd[_0x2ba192(0xa3e)+'d']=_0x4fcc1a[_0x2ba192(0xa3e)+'d'],_0x16f1fd[_0x2ba192(0xb7b)+'er']=_0x4fcc1a[_0x2ba192(0xb7b)+'er'],_0x16f1fd[_0x2ba192(0xacf)]=_0x4fcc1a['reach'],void _0x343929;var _0x22a1b6=_0x5d48d9[_0x157c9e],_0x49ddf5=_0x132ab9[_0x157c9e];if(_0x49ddf5){_0x16f1fd[_0x2ba192(0x75e)]={};for(var _0x491d9f=0x93f+-0xf3*0xa+0x3f;_0x5591fc[_0x2ba192(0x31a)](_0x491d9f,_0x49ddf5[_0x2ba192(0xa6a)+'h']);_0x491d9f++){var _0x506522=_0xda4deb(_0x17addd+_0x5591fc[_0x2ba192(0x6ef)](parseInt,_0x49ddf5[_0x491d9f][0x1*-0xc0e+-0x171*0x5+0x1343*0x1],0x1df*0xc+0x11da+-0x12f*0x22),_0x5591fc['GhEVH']);if(_0x506522!==undefined)_0x16f1fd[_0x2ba192(0x75e)][_0x49ddf5[_0x491d9f][0x80c*-0x4+0xe73+0x11be]]=_0x506522;}}if(_0x22a1b6)for(var _0x1495cf=0x103+0x2a6*-0x3+0x19*0x47;_0x1495cf<_0x22a1b6['lengt'+'h'];_0x1495cf++){var _0x11098d=_0xda4deb(_0x17addd+parseInt(_0x22a1b6[_0x1495cf][0x2ce+-0x1669+0x139b],-0x4*0x53f+-0x60b*-0x2+0x2*0x47b),_0x5591fc[_0x2ba192(0xb3a)]);if(_0x11098d)_0x16f1fd['refs'][_0x22a1b6[_0x1495cf][0x5cf+0x1*0x11a2+-0x1770]]=_0x5591fc[_0x2ba192(0x185)]('0x',(_0x11098d>>>-0x82f+0x2089+-0x185a)['toStr'+_0x2ba192(0x9e7)](0x17*-0xbd+-0x23c0+-0x34cb*-0x1));}return _0x16f1fd['scala'+'rs']=_0x51848f[_0x2ba192(0x780)+'r'](function(_0x3ddc2f){var _0x157a17=_0x2ba192;return _0x3ddc2f[-0x997+0x29*-0x95+0x2175]===_0x157a17(0x211)||_0x3ddc2f[-0x1b34*-0x1+0x2*-0x254+0x1d*-0xc7]===_0x157a17(0x63b);})['map'](function(_0x15d48e){var _0x5dc413=_0x2ba192;return{'o':_0x5591fc[_0x5dc413(0x185)]('0x',_0x15d48e[-0x18ba+0x91d+0x23b*0x7][_0x5dc413(0x8e7)+_0x5dc413(0x9e7)](0x9*0x3b2+-0x1*0x445+0x5c9*-0x5)),'v':_0xda4deb(_0x17addd+_0x15d48e[0x14*0xd1+0x4df*0x3+-0x1*0x1ef1],_0x15d48e[0x2*-0x84f+-0xfa4+0x2043])};})[_0x2ba192(0x780)+'r'](function(_0x4d41f7){var _0x13af70=_0x2ba192;if(_0x52d5a3[_0x13af70(0x4ab)]==='KndNI')_0x42a1f4[_0x13af70(0x768)+'e']();else return _0x4d41f7['v']!==undefined&&isFinite(_0x4d41f7['v']);})['slice'](0x2*-0x515+0x4+0xa26,0x3eb*0x6+0x1ae3+-0x3259),_0x16f1fd;}}function _0x277564(){var _0x11db14=_0x3e6ad4,_0x3ceb4a={'GeDWx':_0x5591fc[_0x11db14(0x382)],'HcTOU':_0x11db14(0xb02)+'paren'+'t','haXgS':_0x11db14(0x621)+'1b','ooSOG':function(_0x4d4a25,_0x44b9a0){return _0x4d4a25(_0x44b9a0);},'Fhtzp':function(_0x3b7d42,_0x975811){return _0x3b7d42+_0x975811;},'pYXFU':function(_0x4c9e78,_0x2c4753){return _0x4c9e78===_0x2c4753;}},_0x535d7e={'players':[],'bots':[],'enemies':[],'controllers':[],'camera':null,'cameraFrom':null,'playerList':null,'managers':{},'wasmTypes':null},_0x1a834b=_0x3f2eb8['FPSco'+'ntrol'+_0x11db14(0x92f)]&&_0x3f2eb8[_0x11db14(0x4e2)+'ntrol'+_0x11db14(0x92f)][_0x11db14(0x6a2)]||0x759+-0x184a+0x10f1*0x1,_0x1505c5=_0x385c38[_0x11db14(0x7c9)+_0x11db14(0x197)+_0x11db14(0xa5a)+'nc']||{},_0x3ed4bb=Object[_0x11db14(0x6a5)](_0x1505c5);for(var _0xcefa45=0xea5+0x1cf9+-0x2b9e;_0x5591fc['yaomt'](_0xcefa45,_0x3ed4bb[_0x11db14(0xa6a)+'h'])&&_0x5591fc['mrstt'](_0xcefa45,-0x683+-0xa2d+-0x8*-0x219);_0xcefa45++){var _0x4b1028=_0x1505c5[_0x3ed4bb[_0xcefa45]],_0x422271=_0xbec475(_0x11db14(0x7c9)+_0x11db14(0x197)+_0x11db14(0xa5a)+'nc',_0x4b1028[_0x11db14(0x6a2)]);_0x422271['hits']=_0x4b1028['hits'],_0x422271[_0x11db14(0x3e1)+_0x11db14(0xa6e)+'s']=_0x4b1028[_0x11db14(0x3e1)+'Seen']-_0x50451a,_0x422271[_0x11db14(0x427)+'al']=!!_0x1a834b&&_0x422271['refs']['fps']===_0x5591fc['aWnuw']('0x',_0x1a834b['toStr'+_0x11db14(0x9e7)](-0x3d9*-0x1+-0x526+0x1*0x15d));if(_0x422271[_0x11db14(0x4df)][_0x11db14(0x10e)+'h']){var _0x5b91b7=parseInt(_0x422271[_0x11db14(0x4df)][_0x11db14(0x10e)+'h'],-0x474+0x3*0xf9+0x199);_0x422271[_0x11db14(0x10e)+'h']=_0x5591fc[_0x11db14(0x2f8)](_0x53346f,_0x5b91b7,_0x11db14(0x107)+_0x11db14(0x954)+'pt',_0x11db14(0x2e6));}_0x535d7e[_0x11db14(0x463)+'rs'][_0x11db14(0xb4)](_0x422271);}_0x535d7e['playe'+_0x11db14(0x7c6)+'t']=_0x3ed4bb[_0x11db14(0xa6a)+'h'];var _0xaa7be=_0x385c38['NPC_C'+_0x11db14(0x764)+_0x11db14(0x92f)]||{},_0x384541=Object['keys'](_0xaa7be);for(var _0x2eba52=0x1d43+-0x399*-0x6+-0x10f3*0x3;_0x2eba52<_0x384541[_0x11db14(0xa6a)+'h']&&_0x2eba52<-0x133c+-0x21b5+0x3509*0x1;_0x2eba52++){if(_0x11db14(0x408)!==_0x5591fc[_0x11db14(0x1f8)]){var _0x3cf9f3=_0x5591fc['uIMTC'][_0x11db14(0xa3)]('|'),_0x5d1058=0x342+0x257e+-0x28c0*0x1;while(!![]){switch(_0x3cf9f3[_0x5d1058++]){case'0':_0x535d7e['bots']['push'](_0xe39704);continue;case'1':if(_0xe39704['refs'][_0x11db14(0x10e)+'h'])_0xe39704[_0x11db14(0x10e)+'h']=_0x53346f(parseInt(_0xe39704[_0x11db14(0x4df)][_0x11db14(0x10e)+'h'],0x108e+-0xfb7+0xc7*-0x1),_0x11db14(0x107)+_0x11db14(0x954)+'pt',_0x11db14(0x2e6));continue;case'2':_0xe39704[_0x11db14(0x6a6)]=_0xaa7be[_0x384541[_0x2eba52]][_0x11db14(0x6a6)];continue;case'3':var _0xe39704=_0x5591fc['qwNdf'](_0xbec475,_0x5591fc['cDNlV'],_0xaa7be[_0x384541[_0x2eba52]]['ptr']);continue;case'4':_0xe39704['first'+'SeenM'+'s']=_0xaa7be[_0x384541[_0x2eba52]]['first'+_0x11db14(0xbb5)]-_0x50451a;continue;}break;}}else{var _0x417eb8=(_0x11db14(0x5ad)+_0x11db14(0x2f4)+_0x11db14(0xd6))['split']('|'),_0xa8bbb2=0x2*0x1292+0xa9*0x23+-0x3c3f;while(!![]){switch(_0x417eb8[_0xa8bbb2++]){case'0':if(!_0x597ea5['on'])_0x2b7948={};continue;case'1':var _0x3fa867=_0x4e7a06();continue;case'2':if(_0x3fa867){_0x3fa867['sp']&&(_0x3fa867['sp'][_0x11db14(0x173)+_0x11db14(0x3f4)+'t']=_0x4990f3['on']?_0x11db14(0xaee)+_0x11db14(0x709):_0x3ceb4a[_0x11db14(0x998)],_0x3fa867['sp'][_0x11db14(0xd5)]['backg'+_0x11db14(0x2ff)]=_0x26f9c2['on']?_0x563683:_0x3ceb4a['HcTOU'],_0x3fa867['sp'][_0x11db14(0xd5)][_0x11db14(0x4e3)]=_0x152693['on']?_0x3ceb4a['haXgS']:_0x11db14(0x968)+'f5');if(_0x3fa867['fx'])_0x3fa867['fx']['value']=_0x3ceb4a['ooSOG'](_0x3e50a4,_0x11e20d[_0x11db14(0xa86)+'r']);if(_0x3fa867['fv'])_0x3fa867['fv']['textC'+_0x11db14(0x3f4)+'t']=_0x3ceb4a[_0x11db14(0x25c)](_0x236201[_0x11db14(0xa86)+'r']['toFix'+'ed'](0x1*0x1d7e+0xb57+-0x28d4),'x');}continue;case'3':_0x529f53['on']&&!_0x493d87&&(_0x2cbb4f===_0x34c1dc||_0x3ceb4a['pYXFU'](_0x5b5a56,null)||_0x3c7eab(_0x25c19b)===0x23e8+0x8*0x440+-0x45e7)&&(_0x1c9e92=_0x3d76d9);continue;case'4':_0x216d4c['on']=!!_0x4fa203;continue;case'5':_0xdf563e[_0x11db14(0xa86)+'r']=_0x41b173['min'](_0x4ec011['max'],_0x5504dc['max'](_0x402c04[_0x11db14(0x2ac)],_0x1d7c90(_0x29ee50)||-0x1*-0x260b+-0xb12+0x2*-0xd7c));continue;case'6':var _0x493d87=_0x4413de['on'];continue;}break;}}}_0x535d7e['botCo'+_0x11db14(0xbfc)]=_0x384541['lengt'+'h'];var _0xd6ea87=_0x385c38[_0x11db14(0x4e2)+'ntrol'+'ler']||{},_0xdd6a9b=Object[_0x11db14(0x6a5)](_0xd6ea87);for(var _0x3debd5=0x1df8+-0x24ab+0xf5*0x7;_0x5591fc[_0x11db14(0x27a)](_0x3debd5,_0xdd6a9b[_0x11db14(0xa6a)+'h'])&&_0x3debd5<-0x11fd+-0x14a3*-0x1+0x6*-0x6d;_0x3debd5++){var _0x4da8af=_0x5591fc[_0x11db14(0xa07)](_0xbec475,_0x5591fc[_0x11db14(0x169)],_0xd6ea87[_0xdd6a9b[_0x3debd5]]['ptr']);_0x4da8af[_0x11db14(0x6a6)]=_0xd6ea87[_0xdd6a9b[_0x3debd5]]['hits'],_0x4da8af[_0x11db14(0x427)+'al']=_0xd6ea87[_0xdd6a9b[_0x3debd5]][_0x11db14(0x6a2)]===_0x1a834b,_0x535d7e[_0x11db14(0xbf)+'oller'+'s']['push'](_0x4da8af);}_0x535d7e['contr'+_0x11db14(0x277)+_0x11db14(0xbed)]=_0xdd6a9b[_0x11db14(0xa6a)+'h'];var _0x454ffa=_0x535d7e[_0x11db14(0x463)+'rs'][_0x11db14(0x281)+'t'](_0x535d7e[_0x11db14(0x3a3)]);for(var _0x5d024d=0x3*0x645+-0x245+0x108a*-0x1;_0x5591fc['DKjUk'](_0x5d024d,_0x454ffa['lengt'+'h']);_0x5d024d++){if(_0x454ffa[_0x5d024d]['isLoc'+'al'])continue;_0x535d7e[_0x11db14(0x3cf)+'es'][_0x11db14(0xb4)](_0x454ffa[_0x5d024d]);}_0x535d7e['enemy'+_0x11db14(0xbed)]=_0x535d7e[_0x11db14(0x3cf)+'es']['lengt'+'h'];var _0xd1ea62={'TDM_GameManager':0x2c,'GG_GameManager':0x14},_0x22419f={'TDM_GameManager':0x50,'GG_GameManager':0x5c};for(var _0x13a7a8 in _0x3f2eb8){var _0x317640=_0x3f2eb8[_0x13a7a8];if(!_0x317640||!_0x317640[_0x11db14(0x6a2)])continue;if(!(_0x13a7a8 in _0xd1ea62))continue;_0x535d7e['manag'+_0x11db14(0x191)][_0x13a7a8]=_0x5591fc['baDWg']('0x',_0x317640[_0x11db14(0x6a2)]['toStr'+'ing'](-0x3*-0xc92+0x46*-0x7d+-0x378));var _0xc82623=_0xda4deb(_0x317640[_0x11db14(0x6a2)]+_0xd1ea62[_0x13a7a8],'u32'),_0x39e358=_0xda4deb(_0x317640['ptr']+_0x22419f[_0x13a7a8],_0x11db14(0x36f));_0xc82623&&_0x535d7e['camer'+'a']===null&&(_0x535d7e[_0x11db14(0x158)+'a']='0x'+(_0xc82623>>>0x8e*-0xa+-0x9*0x20+0x6ac)['toStr'+'ing'](-0x91c+-0xd65*0x1+0x1691),_0x535d7e[_0x11db14(0x158)+_0x11db14(0x97e)]=_0x13a7a8);if(_0x39e358&&_0x535d7e[_0x11db14(0x463)+'rList']===null)_0x535d7e[_0x11db14(0x463)+_0x11db14(0x37b)]='0x'+(_0x39e358>>>-0x8f5+0x18e*-0x12+0x24f1)[_0x11db14(0x8e7)+'ing'](-0x24da*0x1+-0x29*0x27+0x2b29);}if(!_0x535d7e[_0x11db14(0x463)+_0x11db14(0x7c6)+'t']&&!_0x535d7e['botCo'+'unt']&&!_0x535d7e['camer'+'a']){if(_0x5591fc['SkeEw']('mrjpA',_0x11db14(0xabd)))_0x535d7e[_0x11db14(0xbca)]='No\x20Ph'+_0x11db14(0x74c)+_0x11db14(0xc1d)+_0x11db14(0x8b3)+',\x20no\x20'+'NPC_C'+'otrol'+_0x11db14(0xb68)+'nd\x20no'+_0x11db14(0x11b)+'\x20mana'+'ger.\x20'+_0x11db14(0x26e)+_0x11db14(0x2ce)+'at\x20'+_0x5591fc['OTTPX'];else{if(_0x5591fc['HdtpB'](_0x5432cb[_0x25885d]['o'],_0x1c66a1)){if(_0x5591fc['wFjyA'](_0x3f7e08,'v3')){var _0x1172f2=_0x1af610[_0x5d24c6][_0x11db14(0x7be)]||[_0x294d80[_0x44788e]['v'],0x1*-0x1dc3+-0x19fe+0x37c1,0x67*-0x2d+0x4*-0x1ce+0x871*0x3];return _0x1172f2[_0x11db14(0x497)](function(_0x25dd40){var _0x496fd0=_0x11db14;return _0x37be1c[_0x496fd0(0x2ff)](_0x25dd40*(0x207e+-0x1*0xe87+-0x1193))/(0x864+-0x1*-0x84a+-0x104a);})['join']('\x20\x20');}var _0x57d0fb=_0x3c1721[_0xdbd6ae]['v'];return _0x5591fc['FttlK'](typeof _0x57d0fb,_0x5591fc['oMsyi'])?_0x3418af['round'](_0x57d0fb*(-0x23c7+0x1b25+-0xd6*-0xf))/(-0x156e+-0xcf*-0xf+-0x17*-0x93):_0x3f9c5e(_0x57d0fb);}}}else!_0x535d7e[_0x11db14(0x14b)+_0x11db14(0xbed)]&&(_0x535d7e[_0x11db14(0xbca)]=_0x5591fc['MgnUW']+_0x5591fc['faZmF']);try{var _0x1408ad=window['Unity'+_0x11db14(0x94f)+'dkit']&&window['Unity'+'WebMo'+_0x11db14(0x77b)]['Runti'+'me'],_0x5ee1b6=_0x1408ad&&_0x1408ad[_0x11db14(0x198)+'nalWa'+'smTyp'+'es']||[],_0x6d8a35={};for(var _0xcd9c7c=0x1034+-0xeb0+0x2*-0xc2;_0x5591fc[_0x11db14(0x488)](_0xcd9c7c,_0x5ee1b6['lengt'+'h'])&&_0xcd9c7c<-0x53*0x3b+0x73*-0x1+0x2334;_0xcd9c7c++){var _0x4b908e=_0x5591fc['SpiTb'](_0x5ee1b6[_0xcd9c7c][_0x11db14(0x4f6)+'s']['join'](',')+_0x11db14(0x4af),_0x5ee1b6[_0xcd9c7c][_0x11db14(0x4cc)+_0x11db14(0xa99)]||_0x5591fc[_0x11db14(0xb94)]);_0x6d8a35[_0x4b908e]=_0x5591fc['idABv'](_0x6d8a35[_0x4b908e]||0x12b0+0x81*-0x4b+0x131b,-0x1*0x11c6+-0xc4c*0x3+0x36ab);}_0x535d7e['wasmT'+_0x11db14(0xb8d)]=_0x6d8a35;}catch(_0x32a788){}return _0x535d7e;}function _0x53346f(_0x193673,_0x567913,_0x5f513e){var _0x531104=_0x3e6ad4,_0x408615={'zGqUR':function(_0x369a34,_0x116508){return _0x369a34(_0x116508);},'nWWmV':function(_0x3a77fa,_0x3eab90){var _0x962dd7=_0x3f00;return _0x5591fc[_0x962dd7(0x579)](_0x3a77fa,_0x3eab90);},'qJBub':function(_0x16a4be,_0x5049f4){return _0x16a4be(_0x5049f4);},'XOuhE':function(_0xf01433,_0x3977c2){var _0x1b8483=_0x3f00;return _0x5591fc[_0x1b8483(0x4c0)](_0xf01433,_0x3977c2);},'DLtYW':function(_0x3fb278,_0x2540c2){return _0x3fb278*_0x2540c2;},'pJyur':function(_0x172bf1,_0x2c6b7c){return _0x172bf1/_0x2c6b7c;}};if(_0x5591fc[_0x531104(0xa88)]('jvalb',_0x5591fc[_0x531104(0xac6)])){try{var _0x339bc9=_0x599afb[_0x567913]||[];for(var _0x55acb9=-0x1687+-0x3*0x386+0x2119;_0x5591fc['GWAAA'](_0x55acb9,_0x339bc9[_0x531104(0xa6a)+'h']);_0x55acb9++){if(_0x339bc9[_0x55acb9][0x251f+0x5*0x1c6+0x28e*-0x12]!==_0x5f513e)continue;var _0x5c21e0=_0x339bc9[_0x55acb9][0x1122+-0x48f+-0xc93];if(_0x5f513e[_0x531104(0x467)+'Of'](_0x531104(0xa3c))===0x1*0x1b07+0x107*-0x11+-0x6*0x198){if(_0x5591fc['NhZUg'](_0x5591fc[_0x531104(0x8de)],_0x531104(0x585))){_0x408615[_0x531104(0xb4b)](_0x248a4c,_0x11f703[_0x531104(0x4da)]);try{var _0x191b12=_0x2aee98[_0x531104(0x51d)+'Heigh'+'t']||0x1*-0x22b2+0x1*0x85d+0x1d75;if(_0x408615[_0x531104(0x973)](_0x191b12,-0x988+0x1*0x204d+-0x1459))_0x408615['qJBub'](_0x1047a5,![]);}catch(_0x1c9eb7){}}else{var _0x4b5d22=_0x5591fc['KNKvj'](_0x4f9388,_0x193673,_0x5c21e0,_0x5f513e);if(!_0x4b5d22)return null;_0x4b5d22['o']=_0x5c21e0,_0x4b5d22['k']=_0x5f513e;var _0x58e8ed=_0x22c0ea([_0x4b5d22]);if(!_0x58e8ed['rows'][_0x531104(0xa6a)+'h'])return null;return _0x58e8ed['rows'][0x1ad1+-0x1940+-0x191];}}var _0x567c6b=_0xda4deb(_0x193673+_0x5c21e0,_0x5f513e);if(_0x567c6b===undefined)return null;return{'o':'0x'+_0x5c21e0['toStr'+_0x531104(0x9e7)](-0x3a0+-0xd5e+0x110e),'v':_0x567c6b};}}catch(_0x13ee19){}return null;}else{var _0x1dd783=_0x48bbc0[0x1a6a+0x4e8+-0x1f52]-_0x1e3045['feet'][0x1977+0x1151+-0x2ac8*0x1],_0x7b391=_0x408615['XOuhE'](_0x319bed[-0x1bae+-0xb5c+-0x44*-0x93],_0x2b0522['feet'][0x839*0x3+-0x8*0x23a+-0x6d9]);_0x38755c['d']=_0x40aa3f[_0x531104(0x1c0)](_0x408615['DLtYW'](_0x1dd783,_0x1dd783)+_0x7b391*_0x7b391),_0x138c74['beari'+'ng']=_0x408615[_0x531104(0x9be)](_0x4bf3b3[_0x531104(0x5fc)](_0x1dd783,_0x7b391)*(0x16dc+0x1*0x2207+0x1*-0x382f),_0x4fb867['PI']);}}function _0x2fc3fc(){var _0x57045a=_0x3e6ad4,_0x519a61={'BNnxu':function(_0x4c5139,_0x13015d){var _0x3c45db=_0x3f00;return _0x5591fc[_0x3c45db(0x12b)](_0x4c5139,_0x13015d);},'jYbOz':function(_0x11c22c,_0x297438){return _0x11c22c===_0x297438;},'srDzT':_0x57045a(0x5af)+'t','MprKi':_0x5591fc[_0x57045a(0x1f9)],'wGgVp':'.Modu'+'le','QJjsj':_0x5591fc[_0x57045a(0x28a)]},_0x32e107={};_0x3bac15['ok']=0xb*0x3+0x1ade+0x1*-0x1aff,_0x3bac15[_0x57045a(0x5be)+'d']=0x761+0x27f+0x9e0*-0x1,_0x3bac15['lastE'+_0x57045a(0x8a9)]=null;var _0x51bb50=Object[_0x57045a(0x6a5)](_0x599afb);for(var _0xa57792=0x1*0x2557+-0x199f+0x5dc*-0x2;_0xa57792<_0x51bb50[_0x57045a(0xa6a)+'h'];_0xa57792++){var _0x3e07d0=_0x51bb50[_0xa57792],_0x2f0a03=_0x3f2eb8[_0x3e07d0];if(!_0x2f0a03||!_0x2f0a03[_0x57045a(0x6a2)])continue;var _0x27d0b6=_0x599afb[_0x3e07d0]||[],_0x379907=[];for(var _0x5e23a8=0x5*-0x5c1+0x29*-0xdd+0x402a;_0x5e23a8<_0x27d0b6['lengt'+'h'];_0x5e23a8++){if(_0x57045a(0x9cd)!==_0x57045a(0x9cd)){var _0x57dc0f=_0x4eaf75['apply'](this,arguments);try{if(_0x57dc0f&&_0x519a61['BNnxu'](typeof _0x57dc0f[_0x57045a(0x398)],'funct'+_0x57045a(0x2ca)))_0x57dc0f[_0x57045a(0x398)](_0xc5a1b2,function(){});else _0x40d011(_0x57dc0f);}catch(_0x143abf){}return _0x57dc0f;}else{var _0x5f4eaa=_0x27d0b6[_0x5e23a8][0x6c6*-0x1+0x1*-0x16a9+0x1d6f],_0x138c86=_0x27d0b6[_0x5e23a8][0xab9+-0x4a5*0x7+0x15cb];if(_0x5591fc[_0x57045a(0x9ea)](_0x138c86['index'+'Of'](_0x57045a(0xa3c)),-0x90f+0x1*0xa8d+-0x17e*0x1)){if(_0x5591fc['JDCql'](_0x5591fc['IlNLo'],_0x5591fc[_0x57045a(0x1fe)])){var _0x15709b=_0x39ccb7[_0x2e50dc[_0x3d463c]];if(_0x15709b&&_0x519a61[_0x57045a(0x2f9)](typeof _0x15709b,_0x519a61['srDzT'])&&_0x15709b[_0x57045a(0xbe1)+'e']&&_0x15709b['Modul'+'e'][_0x57045a(0x8a1)+'8']&&_0x15709b['Modul'+'e'][_0x57045a(0x8a1)+'8'][_0x57045a(0x957)+'r'])return _0x1ea8a7[_0x57045a(0x498)+'e']=_0x519a61[_0x57045a(0x4f7)]+_0x4aea27[_0x437214]+_0x519a61[_0x57045a(0xa5f)],_0x15709b;}else{var _0x186f12=_0x5591fc[_0x57045a(0x24c)](_0x4f9388,_0x2f0a03[_0x57045a(0x6a2)],_0x5f4eaa,_0x138c86);if(!_0x186f12)continue;_0x186f12['o']=_0x5f4eaa,_0x186f12['k']=_0x138c86,_0x379907[_0x57045a(0xb4)](_0x186f12);}}else{if(_0x5591fc['uUlCg'](_0x5591fc[_0x57045a(0xbd7)],_0x57045a(0xb4c))){var _0x301046=_0xda4deb(_0x2f0a03[_0x57045a(0x6a2)]+_0x5f4eaa,_0x138c86);if(_0x301046===undefined)continue;var _0x4080d5={'o':_0x5f4eaa,'k':_0x138c86,'v':_0x301046};if(_0x5591fc['saiwx'](_0x138c86,'v2')||_0x138c86==='v3'||_0x5591fc['pqsrZ'](_0x138c86,'v4')){var _0x5f2574=_0x138c86==='v2'?0x143b+-0x2363+0x2*0x795:_0x138c86==='v3'?-0x9*0x3f+0x1*0x151+0xe9:0x553*-0x4+0x1b85+-0x1*0x635,_0x5b9cf3=_0x5591fc['YloHz'](_0x3501e5,_0x2f0a03[_0x57045a(0x6a2)],_0x5f4eaa,_0x5f2574);if(_0x5b9cf3){if(_0x5591fc[_0x57045a(0x795)]===_0x5591fc[_0x57045a(0x795)])_0x4080d5[_0x57045a(0x7be)]=_0x5b9cf3,_0x4080d5['v']=_0x5b9cf3[0x15bd+0x24ce+-0x3a8b];else{var _0x3d2fae=_0xf91095[_0x294077],_0x383464=typeof _0x3fbbe7[_0x3d2fae];_0xc05b3d[_0x3d2fae]=_0x383464===_0x519a61[_0x57045a(0xbd5)]?_0x57045a(0x91)+_0x57045a(0xab5):_0x383464;}}}_0x379907[_0x57045a(0xb4)](_0x4080d5);}else{var _0x5a2cf2=_0x552103[_0x57045a(0x29f)](-0x8a6+0x1839*0x1+-0xf92,_0x531b31['inner'+_0x57045a(0x4f9)]||_0x57fedd[_0x57045a(0xbcd)+_0x57045a(0x563)+_0x57045a(0x3ff)][_0x57045a(0x7b9)+_0x57045a(0x694)+'h']||0x397+0x2018+0x2d*-0xcb),_0x44794e=_0x52aa49['max'](0x173c*-0x1+0x166*-0xa+0x2539,_0xcb0d1['inner'+_0x57045a(0x319)+'t']||_0x50ea63['docum'+'entEl'+'ement'][_0x57045a(0x7b9)+'tHeig'+'ht']||0x4eb+0x1cb2*0x1+-0x219d);return(_0x4777ec['cv'][_0x57045a(0x708)]!==_0x5a2cf2||_0x5591fc[_0x57045a(0x8b8)](_0x3fbba6['cv']['heigh'+'t'],_0x44794e))&&(_0x5ecc23['cv']['width']=_0x5a2cf2,_0x4c7b3b['cv']['heigh'+'t']=_0x44794e),{'w':_0x5a2cf2,'h':_0x44794e};}}}}if(_0x379907['lengt'+'h']){var _0x320751=_0x5591fc[_0x57045a(0x40c)](_0x22c0ea,_0x379907);_0x32e107[_0x3e07d0]=_0x320751[_0x57045a(0x187)],_0x118c5e[_0x3e07d0]={'key':_0x320751[_0x57045a(0x6e2)],'sane':_0x320751[_0x57045a(0x552)],'checked':_0x320751['check'+'ed'],'keyConsistent':_0x320751[_0x57045a(0x527)+'nsist'+'ent'],'keySource':_0x320751[_0x57045a(0x905)+'urce']};}}return _0x32e107;}function _0x22c0ea(_0x40648d){var _0x3509c4=_0x3e6ad4,_0x5cc4fc=0xac3*0x2+0xf54+-0x24da,_0x40432d=-0x1db*-0x15+-0x1*-0x25ce+-0x4cc5,_0x8dc0f=null;for(var _0x4a44ea=0x46a+-0x83f*0x2+-0x2*-0x60a;_0x4a44ea<_0x40648d['lengt'+'h'];_0x4a44ea++){var _0xe50323=_0x40648d[_0x4a44ea];if(_0xe50323['k']['index'+'Of'](_0x3509c4(0xa3c))!==0xe1d*0x1+-0xf6e+0x151)continue;_0xe50323['v']=_0x5591fc[_0x3509c4(0x5d6)](_0x46a4b2,_0xe50323['k'],_0xe50323['hidde'+'n'],_0xe50323[_0x3509c4(0xa2a)+_0x3509c4(0x461)+'t0']),_0xe50323[_0x3509c4(0x8a5)+'ed']=_0xe50323[_0x3509c4(0xa2a)+_0x3509c4(0x461)+'t0'],_0xe50323[_0x3509c4(0x213)]=_0x5591fc[_0x3509c4(0x9fe)](_0x5591fc[_0x3509c4(0x44a)]('hid=',_0xe50323['hidde'+'n'])+_0x5591fc[_0x3509c4(0xc07)]+_0xe50323['fake']+(_0xe50323[_0x3509c4(0xc18)]?_0x5591fc[_0x3509c4(0x128)]:''),_0x5591fc['eBqdJ'])+_0xe50323['keyAt'+'Offse'+'t0']+_0x5591fc['jPMVA']+_0xe50323[_0x3509c4(0xe2)];if(_0x8dc0f===null)_0x8dc0f=_0xe50323['keyAt'+_0x3509c4(0x461)+'t0'];_0x40432d++,_0x56f710(_0xe50323)?_0x5591fc['uUlCg'](_0x3509c4(0x7a5),'mPMEi')?_0xe27897(!![]):(_0x5cc4fc++,_0xe50323[_0x3509c4(0x552)]=!![]):_0xe50323['sane']=![],delete _0xe50323['alt'];}return{'rows':_0x40648d,'key':_0x8dc0f,'sane':_0x5cc4fc,'checked':_0x40432d,'keyConsistent':_0x27b4af(_0x40648d),'keySource':_0x3509c4(0x9b9)+'t\x200\x20('+'int-w'+'idth)'};}function _0x27b4af(_0x233c1c){var _0x2d6f23=_0x3e6ad4,_0x52787d={};for(var _0x24b05e=0xa49+0x314*0x9+-0x25fd;_0x5591fc['AZGdw'](_0x24b05e,_0x233c1c[_0x2d6f23(0xa6a)+'h']);_0x24b05e++){var _0x1addbb=_0x233c1c[_0x24b05e];if(_0x1addbb['k']['index'+'Of'](_0x5591fc[_0x2d6f23(0x4d9)])!==0x242f*0x1+0x2334+-0x5*0xe47)continue;if(_0x52787d[_0x1addbb['k']]===undefined)_0x52787d[_0x1addbb['k']]=_0x1addbb[_0x2d6f23(0x8a5)+'ed'];else{if(_0x5591fc['NYAet'](_0x52787d[_0x1addbb['k']],_0x1addbb[_0x2d6f23(0x8a5)+'ed']))return![];}}return!![];}function _0x56f710(_0x41657d){var _0x418f3b=_0x3e6ad4,_0x3ac9db=_0x41657d['v'];if(typeof _0x3ac9db!==_0x5591fc['oMsyi']||!isFinite(_0x3ac9db))return![];if(_0x41657d['k']===_0x418f3b(0xc09))return _0x3ac9db===0x1*0x74b+0xb9b+-0x12e6||_0x3ac9db===0x7a1+0x8a3+-0x1043;var _0x2af59e=_0x41657d[_0x418f3b(0x7ad)];if(typeof _0x2af59e!==_0x5591fc['oMsyi']||!isFinite(_0x2af59e))return!![];if(_0x41657d[_0x418f3b(0xc18)]===-0x1*0x15fb+-0x306+-0x42b*-0x6){if(_0x418f3b(0x13a)!=='tivGS')return _0x5591fc[_0x418f3b(0xbb3)](Math[_0x418f3b(0x1ac)](_0x3ac9db-_0x2af59e),Math[_0x418f3b(0x29f)](-0x11d8+-0x1f95+-0x14d*-0x26,Math['abs'](_0x2af59e)*(0x581+0x25b5+-0x2b36+0.6)));else _0x22fbc0[_0x418f3b(0x2d4)+'ngs'][_0x418f3b(0xb4)]('rebui'+'lt\x20si'+_0x418f3b(0xa77)+_0x418f3b(0x592)+_0x418f3b(0x6dc)+_0x418f3b(0xba9)+_0x418f3b(0x58c)+'n?):\x20'+_0x35d64f['insta'+'ncesR'+_0x418f3b(0x95b)+'ed'][_0x418f3b(0x1ed)](',\x20'));}return _0x5591fc[_0x418f3b(0xbb8)](Math[_0x418f3b(0x1ac)](_0x3ac9db),-0x251ed8be+0x429*-0x29d1f+-0x19b1fa7*-0x43);}function _0x3d7586(){var _0x535a2e=_0x3e6ad4;if(_0x535a2e(0xb6e)!==_0x5591fc['RJMyp']){var _0x3c4c77={};try{if(_0x535a2e(0x33d)==='GHpHG'){var _0x3afdbf=(_0x535a2e(0x1a7)+'|1|0|'+'4')[_0x535a2e(0xa3)]('|'),_0x18c7f9=0x9ad*0x1+-0x551*0x1+-0x117*0x4;while(!![]){switch(_0x3afdbf[_0x18c7f9++]){case'0':_0x3c4c77['plugi'+_0x535a2e(0xa64)+_0x535a2e(0x507)+_0x535a2e(0xb57)+'ted']=!!(_0x30b685&&_0x30b685[_0x535a2e(0x115)+'ime']&&_0x30b685[_0x535a2e(0x115)+'ime']===_0x5c78c3);continue;case'1':_0x3c4c77[_0x535a2e(0x25e)+_0x535a2e(0x20a)+'e']=_0x5c78c3&&_0x5c78c3['_game']?typeof _0x5c78c3[_0x535a2e(0x66a)]:_0x535a2e(0x3cd);continue;case'2':var _0x5c78c3=window[_0x535a2e(0xb3d)+_0x535a2e(0x94f)+_0x535a2e(0x77b)]&&window[_0x535a2e(0xb3d)+'WebMo'+_0x535a2e(0x77b)][_0x535a2e(0x2de)+'me'];continue;case'3':_0x3c4c77[_0x535a2e(0x75e)]=_0x5c78c3&&_0x5c78c3[_0x535a2e(0x635)+_0x535a2e(0x42b)+'g']||null;continue;case'4':_0x3c4c77['plugi'+_0x535a2e(0xa64)+_0x535a2e(0xc1f)+'me']=_0x30b685&&_0x30b685[_0x535a2e(0x115)+_0x535a2e(0x7a4)]&&_0x30b685[_0x535a2e(0x115)+'ime'][_0x535a2e(0x66a)]?typeof _0x30b685[_0x535a2e(0x115)+_0x535a2e(0x7a4)]['_game']:_0x535a2e(0x3cd);continue;case'5':_0x3c4c77['tagMa'+'tches']=!!(_0x5c78c3&&_0x212e3f&&_0x5c78c3[_0x535a2e(0x635)+_0x535a2e(0x42b)+'g']===_0x212e3f);continue;}break;}}else _0x495e1d[_0x535a2e(0xbca)]=_0x5591fc['OoXxb'](_0x5591fc[_0x535a2e(0x39a)],_0x5591fc[_0x535a2e(0xaab)]);}catch(_0x1659fe){_0x3c4c77['error']=_0x5591fc[_0x535a2e(0x83b)](String,_0x1659fe&&_0x1659fe[_0x535a2e(0x153)+'ge']||_0x1659fe);}return _0x3c4c77;}else return _0xe5a8d8['faile'+'d']++,_0x23d661[_0x535a2e(0x1cb)+_0x535a2e(0x8a9)]=_0x4daa73['lastE'+'rror']||_0x24220e(_0x4b5892&&_0x30eaec[_0x535a2e(0x153)+'ge']||_0x4e3695)[_0x535a2e(0x4a5)](-0x927+-0x23d7+-0x1*-0x2cfe,-0x23f2+-0x1dee+-0x4*-0x1096),null;}function _0x6724ae(){var _0x49c19a=_0x3e6ad4;if(_0x5591fc[_0x49c19a(0x2cf)]===_0x5591fc['cauGL']){var _0x5e1e00=_0x5591fc[_0x49c19a(0x262)][_0x49c19a(0xa3)]('|'),_0x2a77fc=-0x163a+-0x7a6+0x1de0;while(!![]){switch(_0x5e1e00[_0x2a77fc++]){case'0':var _0x404cf3=_0x6f0358();continue;case'1':_0x45f4c7[_0x49c19a(0x6c7)+_0x49c19a(0x347)+'er']=typeof _0x350f02;continue;case'2':var _0xc992b3=['unity'+_0x49c19a(0x87d)+_0x49c19a(0x9fa),'unity'+'Game',_0x49c19a(0xa89),'unity'+'Insta'+_0x49c19a(0x85e)+'apper'];continue;case'3':for(var _0x3a730a=0x312+-0x1c*-0x137+-0x2516;_0x3a730a<_0xc992b3[_0x49c19a(0xa6a)+'h'];_0x3a730a++){var _0xa351f0=_0xc992b3[_0x3a730a],_0x369136=typeof window[_0xa351f0];_0x45f4c7[_0xa351f0]=_0x5591fc[_0x49c19a(0x2c3)](_0x369136,_0x5591fc[_0x49c19a(0x28a)])?_0x49c19a(0x91)+'ined':_0x369136;}continue;case'4':_0x45f4c7[_0x49c19a(0xa1c)+_0x49c19a(0x70c)]=_0x3bac15[_0x49c19a(0x498)+'e'];continue;case'5':var _0x45f4c7={};continue;case'6':return _0x45f4c7;case'7':try{_0x45f4c7[_0x49c19a(0x6da)+_0x49c19a(0x978)]=!!(_0x404cf3&&_0x404cf3[_0x49c19a(0xbe1)+'e']),_0x45f4c7['heapU'+'8']=!!(_0x404cf3&&_0x404cf3['Modul'+'e']&&_0x404cf3[_0x49c19a(0xbe1)+'e']['HEAPU'+'8']),_0x45f4c7[_0x49c19a(0x335)+'ytes']=_0x45f4c7['heapU'+'8']?_0x404cf3['Modul'+'e'][_0x49c19a(0x8a1)+'8'][_0x49c19a(0xa6a)+'h']:-0xfe1*-0x1+-0x1a98+-0xd*-0xd3;}catch(_0x268509){_0x45f4c7['hasMo'+'dule']=![],_0x45f4c7[_0x49c19a(0x722)+'8']=![],_0x45f4c7[_0x49c19a(0x335)+'ytes']=0x22dc*-0x1+-0x2db*-0x5+0x1df*0xb;}continue;}break;}}else return _0x39541e['on'];}function _0x90f141(){var _0x2759a2=_0x3e6ad4,_0x2330c0=('1|4|3'+_0x2759a2(0x233)+_0x2759a2(0xac9))[_0x2759a2(0xa3)]('|'),_0x45aa67=-0xa67+0x29*-0x3d+-0xa16*-0x2;while(!![]){switch(_0x2330c0[_0x45aa67++]){case'0':_0x4d1124[_0x5591fc['wLMQx']]=_0x3620c7['mouse'+_0x2759a2(0xb3)];continue;case'1':var _0x4d1124={};continue;case'2':for(var _0x35ac6d in _0x3620c7[_0x2759a2(0x62a)+'s'])_0x4d1124['Mouse'+'Look+'+_0x35ac6d]=_0x3620c7[_0x2759a2(0x62a)+'s'][_0x35ac6d];continue;case'3':if(!_0x3620c7)return _0x4d1124;continue;case'4':var _0x3620c7=_0x5591fc[_0x2759a2(0x534)](_0x2ea369);continue;case'5':return _0x4d1124;case'6':if(_0x3620c7['camer'+'a'])_0x4d1124[_0x2759a2(0x37a)+_0x2759a2(0x87f)+_0x2759a2(0x158)+'a']=_0x3620c7[_0x2759a2(0x158)+'a'];continue;}break;}}function _0x55f608(_0x195d02){var _0x1fb10f=_0x3e6ad4,_0x581f09={};for(var _0x425fea in _0x195d02){var _0x58b44b=_0x195d02[_0x425fea];for(var _0x5124e3=-0xc5*0x1+0x173c+-0x1677;_0x5124e3<_0x58b44b[_0x1fb10f(0xa6a)+'h'];_0x5124e3++){_0x581f09[_0x425fea+_0x1fb10f(0x842)+_0x58b44b[_0x5124e3]['o']['toStr'+_0x1fb10f(0x9e7)](-0x1*-0x1a26+0x23cd+-0x3de3*0x1)]=_0x58b44b[_0x5124e3]['v'];}}return _0x581f09;}function _0x314eea(_0x5e5a8f,_0x1329a3){var _0x4ecca2=_0x3e6ad4;if(_0x5e5a8f===_0x4ecca2(0xa0b)){_0x5591fc['jdLfZ'](_0x177d40,_0x1329a3&&_0x5591fc['DUhJZ'](typeof _0x1329a3['on'],'boole'+'an')?_0x1329a3['on']:_0x2680b6['on'],_0x1329a3&&typeof _0x1329a3[_0x4ecca2(0xa86)+'r']===_0x5591fc[_0x4ecca2(0x1fc)]?_0x1329a3['facto'+'r']:_0x2680b6['facto'+'r']);return;}if(_0x5591fc[_0x4ecca2(0xbb)](_0x5e5a8f,'snaps'+'hot'))return;var _0x1486ab=_0x2fc3fc(),_0x57019b=_0x5591fc['nPgVm'](_0x55f608,_0x1486ab),_0x5309bc=_0x5591fc['sPYvj'](_0x90f141);for(var _0x546188 in _0x5309bc)_0x57019b[_0x546188]=_0x5309bc[_0x546188];if(!_0x20a464){_0x20a464=_0x57019b,_0x33c5bb=[],_0x496d79(_0x5591fc[_0x4ecca2(0x6c0)],{'report':_0x3e0690()});return;}_0x33c5bb=[];for(var _0x3a5dab in _0x57019b){var _0x43bb74=_0x20a464[_0x3a5dab],_0x490dfc=_0x57019b[_0x3a5dab];if(_0x43bb74!==_0x490dfc)_0x33c5bb[_0x4ecca2(0xb4)](_0x5591fc[_0x4ecca2(0x45d)](_0x5591fc[_0x4ecca2(0x5e8)](_0x5591fc['RSqpa'](_0x3a5dab+':\x20',_0x43bb74),'\x20->\x20'),_0x490dfc));}_0x20a464=_0x57019b,_0x5591fc[_0x4ecca2(0x3e7)](_0x496d79,'repor'+'t',{'report':_0x5591fc['uufQz'](_0x3e0690)});}var _0x1f6664=null;function _0x26f017(){var _0x242112=_0x3e6ad4,_0x42114f={'AJllu':function(_0x1f5618,_0x40cc83){var _0x31742a=_0x3f00;return _0x5591fc[_0x31742a(0x5a0)](_0x1f5618,_0x40cc83);},'yGjrA':function(_0x47b8c7,_0x4c644a){var _0x358747=_0x3f00;return _0x5591fc[_0x358747(0xacd)](_0x47b8c7,_0x4c644a);},'gPxQS':function(_0x4e200c,_0xfab1a2,_0x481c70){var _0x45a194=_0x3f00;return _0x5591fc[_0x45a194(0x6ef)](_0x4e200c,_0xfab1a2,_0x481c70);},'adMzl':function(_0xc7062c,_0x5b239d,_0x5ebbda){return _0xc7062c(_0x5b239d,_0x5ebbda);},'EHsFs':_0x5591fc[_0x242112(0xb21)],'sFuXc':_0x242112(0x2e6),'TWmzH':function(_0x45421b,_0x211305){return _0x45421b===_0x211305;},'wnDDA':function(_0x4bfc0c,_0x54b866){return _0x4bfc0c&_0x54b866;},'TUoNO':function(_0x577439,_0x493c97){return _0x577439|_0x493c97;},'vevHD':function(_0x77eba5,_0x3ca0d2){return _0x77eba5^_0x3ca0d2;},'pKXRD':function(_0x48bd03,_0x1e9ee8){return _0x48bd03^_0x1e9ee8;},'tLpCu':_0x242112(0xb5a),'hgviG':function(_0x7edb46,_0x267d89,_0x23f367){return _0x7edb46(_0x267d89,_0x23f367);},'XYRFh':function(_0x16cc57,_0x3921ed){return _0x5591fc['yDsDz'](_0x16cc57,_0x3921ed);},'KbHAU':function(_0x12fe01){return _0x12fe01();},'Lcsyr':function(_0x104bd5,_0x16f965){return _0x104bd5!==_0x16f965;},'ipUCs':_0x242112(0x210),'YpveV':_0x242112(0x1d4),'eeBOz':_0x242112(0x8c1),'JCzLG':function(_0x25611d,_0x1cd5e3){return _0x25611d===_0x1cd5e3;},'neqaT':'none','jnPgw':function(_0x1c874f,_0x2873fe){var _0x1ceef8=_0x242112;return _0x5591fc[_0x1ceef8(0x9cf)](_0x1c874f,_0x2873fe);},'kJiYO':_0x242112(0x243)};if(_0x1f6664)return _0x1f6664;try{if(!document[_0x242112(0x7ef)]||!document['body'][_0x242112(0x3df)+_0x242112(0x566)+'d'])return null;if(!document[_0x242112(0x7f6)+_0x242112(0x3ff)+_0x242112(0x999)](_0x242112(0x6d0)+'a-sw-'+'hud-c'+'ss')){var _0x50a22c=document['creat'+'eElem'+_0x242112(0xac3)]('style');_0x50a22c['id']=_0x242112(0x6d0)+_0x242112(0xabe)+_0x242112(0x1e2)+'ss',_0x50a22c[_0x242112(0x173)+'onten'+'t']=_0x5591fc['cqPpa'],(document[_0x242112(0xa5)]||document['docum'+_0x242112(0x563)+_0x242112(0x3ff)])[_0x242112(0x3df)+_0x242112(0x566)+'d'](_0x50a22c);}var _0x54d8d1=document[_0x242112(0x53b)+'eElem'+_0x242112(0xac3)](_0x242112(0x786));_0x54d8d1['id']=_0x242112(0x6d0)+'a-sw-'+'hud',_0x54d8d1['style']['cssTe'+'xt']=_0x242112(0x7e6)+_0x242112(0xa63)+_0x242112(0x4de)+'left:'+'8px;b'+_0x242112(0xb09)+_0x242112(0x964)+'z-ind'+_0x242112(0x349)+_0x242112(0x202)+'647;d'+'ispla'+'y:fle'+_0x242112(0xbb2)+_0x242112(0xc24)+_0x242112(0x47c)+'n:col'+_0x242112(0x9c1)+'ap:4p'+'x;'+('backg'+'round'+_0x242112(0x71d)+_0x242112(0x7a8)+_0x242112(0x67e)+'.92);'+_0x242112(0x526)+_0x242112(0x8e9)+'\x20soli'+_0x242112(0xa2c)+_0x242112(0x1dc)+_0x242112(0x502)+'177,.'+'45);b'+_0x242112(0x72d)+'-radi'+_0x242112(0x59e)+'px;')+(_0x242112(0xc0c)+_0x242112(0x2c5)+'x\x208px'+';font'+_0x242112(0x4f1)+_0x242112(0xa81)+_0x242112(0x3ce)+_0x242112(0xadd)+_0x242112(0x727)+_0x242112(0x799)+'as,mo'+_0x242112(0xb97)+_0x242112(0xa9c)+_0x242112(0x926)+'f7eef'+'5;')+_0x5591fc['YIMZe'];var _0x17aecd='<div\x20'+'data-'+'a=\x22st'+'2\x22\x20st'+'yle=\x22'+_0x242112(0x4e3)+_0x242112(0x59a)+_0x242112(0x196)+'ax-wi'+'dth:2'+_0x242112(0x4ca)+'\x22></d'+'iv>';_0x54d8d1['inner'+_0x242112(0x11c)]=_0x5591fc[_0x242112(0xa7f)](_0x5591fc['GKxsN'](_0x5591fc['bvHaz'](_0x5591fc['wWSHL'](_0x5591fc['OTsri'](_0x5591fc[_0x242112(0x45d)](_0x5591fc['CEsRr']('<div\x20'+'data-'+'a=\x22ba'+'r\x22\x20st'+'yle=\x22'+'displ'+_0x242112(0x407)+'ex;ga'+_0x242112(0xb82)+_0x242112(0x377)+_0x242112(0x664)+_0x242112(0xa7a)+_0x242112(0x9b1)+_0x242112(0x39f)+_0x242112(0x414)+_0x242112(0x3f3)+'max-w'+'idth:'+'290px'+';\x22>','<b\x20st'+_0x242112(0x7c1)+_0x242112(0x4e3)+':')+_0x1bfdf2,'\x22>sak'+_0x242112(0x433)+'b>'),_0x5591fc[_0x242112(0xb2)])+(_0x242112(0x4e3)+':#f7e'+'ef5;b'+_0x242112(0x72d)+_0x242112(0x863)+'us:6p'+_0x242112(0x6f0)+'ding:'+'2px\x208'+'px;cu'+_0x242112(0xacb)+_0x242112(0x59c)+_0x242112(0x82b)+_0x242112(0x906)+'herit'+';\x22>Sp'+_0x242112(0x986)+'ff</b'+'utton'+'>')+('<inpu'+'t\x20dat'+'a-a=\x22'+'fx\x22\x20t'+_0x242112(0xaea)+_0x242112(0x487)+_0x242112(0x9c8)+_0x242112(0xbb6)+_0x242112(0x104)+_0x242112(0x2b9)+_0x242112(0xbd)+_0x242112(0xb71)+_0x242112(0x3fc)+'\x222\x22\x20s'+'tyle='+'\x22widt'+'h:92p'+_0x242112(0x1d5)+_0x242112(0x491)+'olor:'),_0x1bfdf2)+_0x5591fc[_0x242112(0x2e0)]+_0x5591fc['iiwVk']+('<butt'+_0x242112(0x587)+_0x242112(0x5a8)+_0x242112(0x772)+_0x242112(0x2fc)+_0x242112(0x2d5)+_0x242112(0x9a0)+_0x242112(0x797)+'ransp'+_0x242112(0x2c2)+_0x242112(0x6aa)+_0x242112(0x9b2)+_0x242112(0x550)+'id\x20rg'+'ba(25'+'5,143'+_0x242112(0xb7)+_0x242112(0x495))+(_0x242112(0x4e3)+':#f7e'+_0x242112(0x6d4)+'order'+_0x242112(0x863)+_0x242112(0x131)+_0x242112(0x6f0)+'ding:'+'2px\x207'+_0x242112(0x861)+_0x242112(0xacb)+'point'+'er;fo'+_0x242112(0x906)+'herit'+';\x22>ES'+'P\x20on<'+_0x242112(0x137)+_0x242112(0x4ed)),_0x5591fc[_0x242112(0x51a)])+_0x5591fc[_0x242112(0xfa)]+_0x5591fc['ZLRQM']+_0x5591fc['vSJIe'],_0x242112(0xb19)+'>'),'<div\x20'+'data-'+_0x242112(0x710)+_0x242112(0x875)+'le=\x22c'+_0x242112(0x5eb)+'#8d7a'+'99;ma'+'x-wid'+_0x242112(0x7a0)+'0px;\x22'+_0x242112(0x5a2)+'v>')+(_0x242112(0x3a4)+'data-'+'a=\x22st'+'2\x22\x20st'+'yle=\x22'+'color'+_0x242112(0x59a)+'a99;m'+'ax-wi'+_0x242112(0x88d)+'90px;'+'\x22></d'+_0x242112(0xa10)),_0x54d8d1['inner'+_0x242112(0x11c)]=_0x17aecd;var _0x1852b4=function(_0x2aeb23){var _0x22cc92=_0x242112;return _0x54d8d1[_0x22cc92(0x672)+'Selec'+_0x22cc92(0x7ee)](_0x42114f[_0x22cc92(0x190)](_0x42114f['yGjrA'](_0x22cc92(0x425)+_0x22cc92(0x8b6),_0x2aeb23),'\x22]'));},_0x335f5a=_0x1852b4('st'),_0x1dd319=_0x5591fc[_0x242112(0x3e9)](_0x1852b4,_0x242112(0x958)),_0x110142=_0x5591fc['hjkOz'](_0x1852b4,'sp'),_0x5f4f9a=_0x5591fc['rcVgf'](_0x1852b4,'fx'),_0x10ab8e=_0x1852b4('fv'),_0x549fbc=_0x5591fc[_0x242112(0x40c)](_0x1852b4,_0x5591fc['uoWUk']);if(_0x110142)_0x110142[_0x242112(0x898)+'ck']=function(){var _0x15d2c=_0x242112;if(_0x5591fc['HmMsC'](_0x5591fc[_0x15d2c(0x255)],_0x5591fc['BbkOa'])){var _0x109367=_0x40f28b();if(!_0x109367)return _0x445e1f;if(_0x109367[_0x15d2c(0xa1)+'et']['api'])return _0x109367['api'];try{return _0x36ff7d(_0x109367);}catch(_0x562743){return _0x109367['datas'+'et'][_0x15d2c(0xe6)]='1',_0x109367[_0x15d2c(0xe6)]=_0x167c49,_0x5ebfe2[_0x15d2c(0x42f)](_0x15d2c(0xbd9)+_0x15d2c(0x231)+_0x15d2c(0x103)+'l\x20dis'+_0x15d2c(0x1cf),_0x15d2c(0x4e3)+':'+_0x173a3e,_0x562743),_0x5086be;}}else _0x177d40(!_0x2680b6['on'],_0x2680b6['facto'+'r']);};if(_0x5f4f9a)_0x5f4f9a['oninp'+'ut']=function(){var _0x36afa4=_0x242112;if('JSoIy'!==_0x42114f['tLpCu']){var _0x5d122b=_0x1ff82f[_0x4663ea];if(!_0x5d122b)return null;var _0x25afc3=_0x42114f[_0x36afa4(0x33b)](_0x42e9a2,_0x577291+_0x3c8c5e+_0x5d122b[_0x36afa4(0x6e2)],'u8'),_0x54f5b6=_0x42114f['adMzl'](_0x30a49f,_0x42114f['yGjrA'](_0xc71c57+_0x577c73,_0x5d122b[_0x36afa4(0x62e)+'n']),_0x36afa4(0x63b)),_0x4d2261=_0x153aa9(_0x192430+_0x5a328f+_0x5d122b[_0x36afa4(0x388)+'d'],'u8'),_0x13c753=_0x14988a(_0x204efe+_0x2c19c5+_0x5d122b[_0x36afa4(0x7ad)],_0x1625ee===_0x36afa4(0x2c6)?_0x42114f[_0x36afa4(0xa03)]:_0x16e207===_0x42114f[_0x36afa4(0x9c2)]?_0x36afa4(0x63b):'u8'),_0x8e411a=_0x1527aa(_0x438bd5+_0x10e78f+_0x5d122b['activ'+'e'],'u8');if(_0x42114f[_0x36afa4(0x1da)](_0x25afc3,_0x5b9e1e)||_0x54f5b6===_0x1288ef||_0x13c753===_0x992778||_0x8e411a===_0x36ecf5)return null;_0x25afc3&=-0x1*0x347+0x2541+0x1*-0x20fb,_0x54f5b6|=-0xf3*0x5+0x47f*-0x5+0x1b3a,_0x4d2261=_0x42114f['wnDDA'](_0x4d2261||-0x9f4+-0x1a20+-0x2414*-0x1,-0xf4+-0x1c18+0x1d0d),_0x8e411a&=-0x711+0x243c+-0x1d2a*0x1;var _0x1ac170;if(_0x24cde8===_0x36afa4(0x2c6))_0x1ac170=_0x580ff0(_0x54f5b6^_0x25afc3);else{if(_0x29aa40===_0x42114f[_0x36afa4(0x9c2)])_0x1ac170=_0x42114f['TUoNO'](_0x42114f[_0x36afa4(0x45b)](_0x54f5b6,_0x25afc3),-0x3*-0xa4+0xbe7*-0x3+0x1*0x21c9);else _0x1ac170=(_0x42114f[_0x36afa4(0x7e3)](_0x54f5b6,_0x25afc3)&0x28*-0x6d+-0x1*0x981+0xdc4*0x2)!==0xe*-0xa9+-0xb5*-0x1+-0x73*-0x13?0x1c+-0x221+0x206:-0xbca+0x263*-0x10+0x31fa*0x1;}return{'real':_0x1ac170,'fake':_0x13c753,'act':_0x8e411a,'init':_0x4d2261,'key':_0x25afc3,'hidden':_0x54f5b6};}else _0x42114f['hgviG'](_0x177d40,_0x2680b6['on'],_0x42114f[_0x36afa4(0xb8b)](parseFloat,_0x5f4f9a[_0x36afa4(0x6c7)])||-0x24fe+-0xdaa+0x32a9*0x1);};if(_0x5591fc['rcmWX'](_0x1852b4,_0x242112(0x53d)))_0x5591fc['rcVgf'](_0x1852b4,'snap')['oncli'+'ck']=function(){var _0x389eb9=_0x242112;_0x314eea(_0x5591fc[_0x389eb9(0x4d1)]);};var _0x21bd21=_0x5591fc[_0x242112(0x83b)](_0x1852b4,_0x242112(0x6e9));if(_0x21bd21)_0x21bd21['oncli'+'ck']=function(){var _0x2ecdc6=_0x242112;if(_0x42114f[_0x2ecdc6(0x6df)]('WVfLV',_0x42114f[_0x2ecdc6(0x918)]))_0x42114f[_0x2ecdc6(0xb8b)](_0x5e3cc1,!_0x116cff()),_0x42114f[_0x2ecdc6(0x520)](_0x422009);else{if(!_0x30c840['on'])_0x18cf9e(!![],![]);else{if(_0x30c840[_0x2ecdc6(0x82e)])_0x18cf9e(![],![]);else{if(_0x2bb59f())_0x18cf9e(!![],!![]);else _0x18cf9e(![],![]);}}}};if(_0x5591fc[_0x242112(0xc1b)](_0x1852b4,_0x242112(0x243)))_0x1852b4(_0x242112(0x243))[_0x242112(0x898)+'ck']=function(){var _0x5a7ecb=_0x242112,_0x2d4429={'swAcU':'insta'+'ntiat'+_0x5a7ecb(0x192)+_0x5a7ecb(0xbce)+_0x5a7ecb(0x60e)+_0x5a7ecb(0x244)};if(_0x42114f[_0x5a7ecb(0x29b)]!==_0x42114f[_0x5a7ecb(0x4e5)]){if(!_0x549fbc)return;var _0x5bb526=_0x42114f['JCzLG'](_0x549fbc[_0x5a7ecb(0xd5)][_0x5a7ecb(0x68f)+'ay'],_0x42114f[_0x5a7ecb(0x229)]);_0x549fbc[_0x5a7ecb(0xd5)]['displ'+'ay']=_0x5bb526?'':'none',_0x42114f[_0x5a7ecb(0x7d8)](_0x1852b4,_0x42114f['kJiYO'])[_0x5a7ecb(0x173)+'onten'+'t']=_0x5bb526?'-':'+';}else return _0x40b09c[_0x5a7ecb(0x498)+'e']=_0x53e574[_0x5a7ecb(0x498)+'e']||_0x2d4429[_0x5a7ecb(0xb42)],new _0x50157e(_0x2b0fab[_0x5a7ecb(0x957)+'r']);};return document[_0x242112(0x7ef)]['appen'+_0x242112(0x566)+'d'](_0x54d8d1),_0x1f6664={'el':_0x54d8d1,'st':_0x335f5a,'st2':_0x1dd319,'sp':_0x110142,'fx':_0x5f4f9a,'fv':_0x10ab8e,'esp':_0x21bd21},_0x1f6664;}catch(_0x5884d6){return console[_0x242112(0x42f)](_0x5591fc[_0x242112(0x234)],_0x5591fc[_0x242112(0x3b8)](_0x5591fc[_0x242112(0xba0)],_0x1bfdf2),_0x5884d6),null;}}function _0x2bb59f(){var _0x2562f4=_0x3e6ad4;try{var _0x1856bf=_0x19adb5();return!!(_0x1856bf&&_0x6211af['ident'+_0x2562f4(0xa3b)]);}catch(_0x40bebf){return![];}}function _0x460173(){var _0x161023=_0x3e6ad4,_0x170e4d={'wNjkZ':'posit'+_0x161023(0xa63)+'ixed;'+'left:'+'0;top'+':0;z-'+'index'+_0x161023(0x966)+_0x161023(0x858)+_0x161023(0xbbf)+'nter-'+'event'+'s:non'+'e;'};if(_0x5591fc['HdtpB'](_0x161023(0x4e8),_0x5591fc['WVQLw'])){if(_0x7bca0c)return _0x51725f;try{if(!_0x218f19[_0x161023(0x7ef)]||!_0x498646[_0x161023(0x7ef)]['appen'+'dChil'+'d'])return null;var _0x5072cc=_0x1ec252[_0x161023(0x53b)+_0x161023(0xa9a)+_0x161023(0xac3)]('canva'+'s');return _0x5072cc['id']=_0x161023(0x6d0)+_0x161023(0xbae)+'es',_0x5072cc[_0x161023(0xd5)][_0x161023(0x70f)+'xt']=_0x170e4d[_0x161023(0x788)],_0x16e9e4['body']['appen'+_0x161023(0x566)+'d'](_0x5072cc),_0x11ceb6={'cv':_0x5072cc},_0x28d106;}catch(_0x11a498){return null;}}else try{var _0x501087=_0x1f6664&&_0x1f6664[_0x161023(0x6e9)];if(!_0x501087)return;if(_0x30c840[_0x161023(0x82e)]&&!_0x2bb59f())_0x30c840[_0x161023(0x82e)]=![];var _0x1ed3dd=!_0x30c840['on']?'ESP\x20o'+'ff':_0x30c840[_0x161023(0x82e)]?_0x161023(0x416)+_0x161023(0x50a):_0x161023(0xb7e)+'ap';if(_0x1ed3dd!==_0x501087['textC'+'onten'+'t'])_0x501087[_0x161023(0x173)+_0x161023(0x3f4)+'t']=_0x1ed3dd;_0x501087['style'][_0x161023(0x9a3)+_0x161023(0x2ff)]=_0x30c840['on']?_0x1bfdf2:'trans'+'paren'+'t',_0x501087[_0x161023(0xd5)][_0x161023(0x4e3)]=_0x30c840['on']?_0x5591fc[_0x161023(0x6b1)]:'#f7ee'+'f5';}catch(_0x42617b){}}function _0x18cf9e(_0x10f496,_0x42d6aa){var _0x578001=_0x3e6ad4,_0x318f93={'cokCl':function(_0x5ee13e,_0x3ae1bd){return _0x5ee13e+_0x3ae1bd;}};if('oVYus'!==_0x578001(0x800)){var _0x76cead=_0x2ef03f['creat'+_0x578001(0xa9a)+'ent']('style');_0x76cead['id']=_0x5591fc['cpTJL'],_0x76cead['textC'+_0x578001(0x3f4)+'t']='#saku'+'ra-sw'+_0x578001(0x470)+_0x578001(0x109)+'itial'+'}',(_0x14cf1e[_0x578001(0xa5)]||_0x3d8ee2[_0x578001(0xbcd)+'entEl'+'ement'])['appen'+_0x578001(0x566)+'d'](_0x76cead);}else{_0x30c840['on']=!!_0x10f496,_0x30c840[_0x578001(0x82e)]=!!_0x42d6aa,_0x460173();try{if(_0x5591fc['SwSkC']===_0x578001(0xc0a))_0x315316=_0x5fe353(_0x318f93['cokCl'](_0x7dc8fe,_0x2b0e3b),'f32'),_0x1f6125[_0x578001(0x498)+'e']='field'+_0x578001(0x452)+_0x578001(0x7ae)+'ss)';else{var _0x538c10=_0x5591fc['cZBAu'](_0x277f79);if(_0x538c10&&_0x538c10['el'])_0x538c10['el']['style']['displ'+'ay']=_0x30c840['on']?'':_0x578001(0x3cd);var _0x20b8c4=_0x114df0;if(_0x20b8c4&&_0x20b8c4['cv'])_0x20b8c4['cv']['style']['displ'+'ay']=_0x30c840['on']&&_0x30c840[_0x578001(0x82e)]?'':_0x5591fc[_0x578001(0x3aa)];}}catch(_0x50f9c9){}}}var _0xab6322=0x2*-0x1332+0x1349*0x1+-0x3*-0x65f;function _0x177d40(_0x42acfe,_0x1bb5c0){var _0x26c6cb=_0x3e6ad4,_0x16a2e4=_0x2680b6['on'];_0x2680b6['on']=!!_0x42acfe;_0x2680b6['on']&&!_0x16a2e4&&(_0x5591fc[_0x26c6cb(0x937)](_0x1bb5c0,undefined)||_0x1bb5c0===null||_0x5591fc['qtOaz'](Number,_0x1bb5c0)===0x1*0x1a17+-0x2558+0xb42)&&(_0x1bb5c0=_0xab6322);_0x2680b6[_0x26c6cb(0xa86)+'r']=Math[_0x26c6cb(0x2ac)](_0x2680b6[_0x26c6cb(0x29f)],Math['max'](_0x2680b6[_0x26c6cb(0x2ac)],Number(_0x1bb5c0)||0x2*-0x7d6+-0x12d6+0x39*0x9b));if(!_0x2680b6['on'])_0x35e599={};var _0x3bc0f4=_0x5591fc[_0x26c6cb(0xaa2)](_0x26f017);if(_0x3bc0f4){_0x3bc0f4['sp']&&(_0x3bc0f4['sp'][_0x26c6cb(0x173)+'onten'+'t']=_0x2680b6['on']?'Speed'+_0x26c6cb(0x709):_0x5591fc['kWjNV'],_0x3bc0f4['sp'][_0x26c6cb(0xd5)][_0x26c6cb(0x9a3)+_0x26c6cb(0x2ff)]=_0x2680b6['on']?_0x1bfdf2:_0x26c6cb(0xb02)+_0x26c6cb(0xc9)+'t',_0x3bc0f4['sp'][_0x26c6cb(0xd5)]['color']=_0x2680b6['on']?_0x5591fc[_0x26c6cb(0x6b1)]:_0x26c6cb(0x968)+'f5');if(_0x3bc0f4['fx'])_0x3bc0f4['fx'][_0x26c6cb(0x6c7)]=_0x5591fc[_0x26c6cb(0xc1b)](String,_0x2680b6[_0x26c6cb(0xa86)+'r']);if(_0x3bc0f4['fv'])_0x3bc0f4['fv']['textC'+_0x26c6cb(0x3f4)+'t']=_0x2680b6['facto'+'r']['toFix'+'ed'](0xf8*0x15+-0x1*-0x6d+-0x376*0x6)+'x';}}function _0x59d095(_0x33c14a){var _0x1b8904=_0x3e6ad4,_0x5b8f03={'vFaDh':_0x1b8904(0x391)},_0x5a38db=_0x5591fc['baTMw'](_0x26f017);if(!_0x5a38db||!_0x5a38db['st'])return;try{if('GObqj'===_0x5591fc['okNXO']){if(!_0x5591fc[_0x1b8904(0xb20)](_0x2800c4)&&!_0x215df4){if(_0x5a38db['el'])_0x5a38db['el']['style']['displ'+'ay']=_0x5591fc[_0x1b8904(0x3aa)];return;}if(_0x5a38db['el'])_0x5a38db['el'][_0x1b8904(0xd5)]['displ'+'ay']='';var _0x5d0901=Object['keys'](_0x33c14a&&_0x33c14a[_0x1b8904(0x294)+'nces']||{})['lengt'+'h'],_0xe49e95=_0x33c14a&&_0x33c14a[_0x1b8904(0x6e9)]||null,_0x2b8bdd=_0xe49e95?_0xe49e95[_0x1b8904(0x14b)+'Count']||0x10*-0x14f+0x1aa3+-0x5b3:-0x83e+0x16e*-0x1a+0x2d6a,_0x35c049=_0xe49e95?_0xe49e95[_0x1b8904(0xc0)+'unt']||0x104+0xe9b+-0xf9f:-0x1045+-0x4b9+-0xa7f*-0x2,_0x30fb25=_0x3311a8?_0x5591fc['iMLOx'](_0x3311a8['buffe'+'r'][_0x1b8904(0xbcc)+_0x1b8904(0x4b3)],-0xdabe1+-0xef244+0x1*0x2c9e25)[_0x1b8904(0x91b)+'ed'](-0x1371+0x11c2+0x1af)+'MB':_0x5591fc[_0x1b8904(0xc22)],_0xe491a8=_0x5591fc[_0x1b8904(0x996)](_0x5591fc[_0x1b8904(0x18e)](_0x5591fc[_0x1b8904(0x121)]('v'+(_0x33c14a&&_0x33c14a['versi'+'on']||_0xd31e38)+('\x20\x20hoo'+_0x1b8904(0x9e6)),_0x33c14a&&_0x33c14a[_0x1b8904(0x489)+_0x1b8904(0x8f5)+'ed']||0x70*0x2+-0x167d+0x159d),'/')+(_0x33c14a&&_0x33c14a[_0x1b8904(0x489)+'Total']||-0xb6*-0x1e+-0xa66*0x1+0xaee*-0x1)+('\x20\x20obj'+'s\x20')+_0x5d0901+(_0x1b8904(0x548)+'\x20')+_0x30fb25,_0x5591fc[_0x1b8904(0x459)])+_0x13ba37;_0x5a38db['st']['textC'+_0x1b8904(0x3f4)+'t']=_0xe491a8;var _0x203a54=_0x5a38db['st2'];_0x203a54&&(_0x203a54['textC'+'onten'+'t']=_0x5591fc['VSQSA'](_0x2b8bdd,0x1*0x4b1+-0x1*-0x114d+0x5*-0x466)?'PLAYE'+_0x1b8904(0x783)+_0x2b8bdd+(_0x35c049?_0x5591fc['EKxOw'](_0x5591fc[_0x1b8904(0x715)](_0x5591fc[_0x1b8904(0x963)],_0x35c049),'\x20bots'):'')+(_0xe49e95&&_0xe49e95['camer'+'a']?_0x5591fc[_0x1b8904(0x1a8)]+_0xe49e95['camer'+_0x1b8904(0x97e)]:_0x1b8904(0x4f3)+'\x20-'):_0x5591fc['ZvBZS'](_0x1b8904(0xb46)+_0x1b8904(0x219)+_0x1b8904(0x87a)+_0x1b8904(0x992)+'y?)\x20\x20'+_0x1b8904(0x46d),_0xe49e95&&_0xe49e95['camer'+'a']?_0xe49e95['camer'+_0x1b8904(0x97e)]:'-'),_0x203a54[_0x1b8904(0xd5)][_0x1b8904(0x4e3)]=_0x5591fc[_0x1b8904(0x130)](_0x2b8bdd,0x3*-0x613+0x645+0x5a*0x22)?_0x1b8904(0x2b0)+'a8':_0x5591fc['AAIxc']);}else{var _0x5991d8=_0x390656&&_0x4f9872[_0x1b8904(0x5e3)];if(!_0x5991d8||_0x5991d8[_0x1b8904(0x635)+_0x1b8904(0x4b1)]!==_0x9eb4fe||_0x5991d8[_0x1b8904(0x524)]!==_0x5b8f03['vFaDh'])return;_0x1d4199(_0x5991d8['cmd'],_0x5991d8[_0x1b8904(0x444)]);}}catch(_0x188ba9){}}window[_0x3e6ad4(0x5e6)+_0x3e6ad4(0x622)+_0x3e6ad4(0xb2c)+'r'](_0x3e6ad4(0xb9e)+'wn',function(_0x235bdc){var _0xac9499=_0x3e6ad4;if(!_0x235bdc)return;try{if(_0x235bdc[_0xac9499(0xb17)]==='F9'){_0x235bdc[_0xac9499(0x24a)+'ntDef'+_0xac9499(0x3f5)](),_0x5591fc[_0xac9499(0xc1b)](_0x314eea,_0xac9499(0x34a)+'hot');return;}if(_0x235bdc[_0xac9499(0xb17)]==='F7'){_0x235bdc[_0xac9499(0x24a)+_0xac9499(0x5da)+_0xac9499(0x3f5)](),_0x5591fc[_0xac9499(0x6b9)](_0x177d40,!_0x2680b6['on'],_0x2680b6[_0xac9499(0xa86)+'r']);return;}if(_0x235bdc['code']==='F8'){if(_0x5591fc[_0xac9499(0x76d)]!==_0xac9499(0x183)){_0x235bdc[_0xac9499(0x24a)+_0xac9499(0x5da)+'ault'](),_0x5591fc['XdFJI'](_0x177d40,_0x2680b6['on'],_0x5591fc[_0xac9499(0xe8)](_0x2680b6[_0xac9499(0xa86)+'r'],-0xa29+0x3a*0x94+-0x175f+0.5));return;}else{var _0x2ad9ea=_0x46a77f();if(!_0x2ad9ea)return null;try{return new _0x9de19a(_0x2ad9ea[_0xac9499(0x957)+'r'],_0x2ad9ea['byteO'+_0xac9499(0xa56)],_0x2ad9ea[_0xac9499(0xbcc)+_0xac9499(0x4b3)]);}catch(_0x2c8bbf){return null;}}}if(_0x5591fc['iZloK'](_0x235bdc['code'],'F6')){_0x235bdc['preve'+_0xac9499(0x5da)+_0xac9499(0x3f5)](),_0x177d40(_0x2680b6['on'],_0x2680b6[_0xac9499(0xa86)+'r']-(-0x7*0x2d3+0x4a0+0xf25+0.5));return;}if(_0x235bdc['code']===_0x5591fc[_0xac9499(0x460)]){_0x235bdc[_0xac9499(0x24a)+_0xac9499(0x5da)+_0xac9499(0x3f5)](),_0x1f5263(!_0x4608e2[_0xac9499(0x199)]);return;}if(_0x5591fc['EqmVo'](_0x235bdc[_0xac9499(0xb17)],_0xac9499(0x2e4)+'etRig'+'ht')){_0x235bdc['preve'+'ntDef'+'ault'](),_0x594e08['fov']=Math[_0xac9499(0x2ac)](-0xa71+-0x1*-0x1433+-0x83*0x12,_0x5591fc['ZvBZS'](_0x594e08[_0xac9499(0x26a)],0x3*-0x425+-0x3e*-0x85+-0x13c5)),_0x20e54e();return;}if(_0x5591fc['SkeEw'](_0x235bdc[_0xac9499(0xb17)],'Brack'+_0xac9499(0x3b5)+'t')){_0x235bdc['preve'+'ntDef'+_0xac9499(0x3f5)](),_0x594e08[_0xac9499(0x26a)]=Math['max'](-0x2*0x9a7+0xcf5*0x2+0x1*-0x67e,_0x594e08['fov']-(-0x4*-0xc5+0x2684+0x1*-0x2996)),_0x20e54e();return;}}catch(_0x256bcc){}},!![]);var _0x30c840={'on':!![],'span':0x50,'boxes':![]};function _0x2ea369(){var _0x391af1=_0x3e6ad4,_0x291244=_0x385c38[_0x391af1(0x7c9)+_0x391af1(0x197)+'orkSy'+'nc']||{},_0x519b49=Object['keys'](_0x291244);for(var _0x58f724=0x265+0x145d+-0x16c2;_0x5591fc[_0x391af1(0xad)](_0x58f724,_0x519b49[_0x391af1(0xa6a)+'h']);_0x58f724++){if(_0x5591fc[_0x391af1(0x747)](_0x5591fc['avBTO'],_0x391af1(0x203))){var _0x1e1b86=_0x291244[_0x519b49[_0x58f724]][_0x391af1(0x6a2)],_0xca19=_0xda4deb(_0x1e1b86+(0x2192*0x1+0x7*0x1a3+0xd*-0x373),_0x391af1(0x36f));if(!_0xca19)continue;var _0x52ee06=_0x599afb[_0x391af1(0x37a)+_0x391af1(0xb3)]||[],_0x340ed8={'mouseLook':'0x'+_0x5591fc['PstAu'](_0xca19,0x5*0x295+0x1310*0x1+-0x1ff9)['toStr'+'ing'](-0x15b5+0x1*-0x171+0x1*0x1736),'floats':{},'camera':null,'vec2':null};for(var _0x5a3957=0xd6*-0x29+-0x5*0x31f+0x71*0x71;_0x5a3957<_0x52ee06['lengt'+'h'];_0x5a3957++){if(_0x52ee06[_0x5a3957][-0xb9b*-0x2+-0x600+-0x1135]!==_0x391af1(0x211))continue;_0x340ed8[_0x391af1(0x62a)+'s']['0x'+_0x52ee06[_0x5a3957][-0x12d*-0x1d+-0x3d8+-0x1e41][_0x391af1(0x8e7)+'ing'](-0x1*-0x36c+0x1*-0x250d+0x21b1)]=_0xda4deb(_0x5591fc['AJCfX'](_0xca19,_0x52ee06[_0x5a3957][-0x2498*0x1+0x1eca*-0x1+-0xf*-0x47e]),_0x5591fc['WDhIp']);}var _0x1ed1cb=_0xda4deb(_0xca19+(-0x2*0x37b+0x13a*-0x5+0x2*0x6a2),_0x5591fc[_0x391af1(0xb3a)]);if(_0x1ed1cb)_0x340ed8['camer'+'a']=_0x5591fc[_0x391af1(0x35f)]('0x',_0x5591fc['PstAu'](_0x1ed1cb,0x217b+0x67*-0x1d+-0x15d0)[_0x391af1(0x8e7)+_0x391af1(0x9e7)](-0x17f9+-0x282+0x8d9*0x3));var _0xca6da3=_0x5591fc[_0x391af1(0x6b6)](_0x3501e5,_0xca19,0x5*-0x14e+-0x14d4+-0x2*-0xdd1,-0x42a+0x24c5*-0x1+0x28f1);if(_0xca6da3)_0x340ed8[_0x391af1(0x895)]=_0xca6da3;return _0x340ed8;}else return _0x275150[_0x391af1(0x2ff)](_0x5591fc[_0x391af1(0x9ff)](_0x1f3b54,0x4d0+-0x1*-0x1b6f+-0x1*0x1fdb))/(0x2523*0x1+0x1*0x1713+-0x3bd2);}return null;}var _0x507ae3=_0x3e6ad4(0x6d0)+'a-sw-'+'fov',_0x594e08={'pitch':null,'yaw':null,'fov':0x5a,'known':![]};try{if(_0x5591fc[_0x3e6ad4(0x945)]!==_0x5591fc['fvaom']){var _0x27cb3f=('0|7|1'+_0x3e6ad4(0x9e3)+'|8|3|'+_0x3e6ad4(0x899)+'|1')['split']('|'),_0x11021d=-0x626+-0x22d0+0x28f6;while(!![]){switch(_0x27cb3f[_0x11021d++]){case'0':if(_0x18bd76===_0x3e6ad4(0xa0b)){_0x5591fc[_0x3e6ad4(0x25d)](_0x1d612f,_0x4495bf&&typeof _0x5221d0['on']===_0x3e6ad4(0xaa8)+'an'?_0x30f71f['on']:_0x160154['on'],_0x41f099&&_0x5591fc[_0x3e6ad4(0x8cf)](typeof _0x1280ff['facto'+'r'],_0x5591fc[_0x3e6ad4(0x1fc)])?_0x39e700[_0x3e6ad4(0xa86)+'r']:_0xe0de2a[_0x3e6ad4(0xa86)+'r']);return;}continue;case'1':_0x31eea4('repor'+'t',{'report':_0x5caaa1()});continue;case'2':for(var _0x3de0d9 in _0x55ed14){var _0x49fe23=_0x54b0a7[_0x3de0d9],_0x508f80=_0x55ed14[_0x3de0d9];if(_0x49fe23!==_0x508f80)_0x1223be[_0x3e6ad4(0xb4)](_0x5591fc['HjvEW'](_0x3de0d9+':\x20'+_0x49fe23+_0x3e6ad4(0x4af),_0x508f80));}continue;case'3':if(!_0x258cb3){_0x527f81=_0x55ed14,_0xcd7fb8=[],_0x5591fc['vAMTa'](_0x5a7846,'repor'+'t',{'report':_0x5591fc[_0x3e6ad4(0x869)](_0x2b7d7d)});return;}continue;case'4':var _0x374c7f=_0x5591fc[_0x3e6ad4(0x93d)](_0x5efd62);continue;case'5':var _0x55ed14=_0x4a9305(_0x23aaf1);continue;case'6':_0xf30c7d=[];continue;case'7':if(_0xb07ad!==_0x5591fc['PGxda'])return;continue;case'8':for(var _0x3ce3b9 in _0x374c7f)_0x55ed14[_0x3ce3b9]=_0x374c7f[_0x3ce3b9];continue;case'9':_0x176fa6=_0x55ed14;continue;case'10':var _0x23aaf1=_0x5591fc['SezFH'](_0x2f94a1);continue;}break;}}else{var _0x38a31d=localStorage[_0x3e6ad4(0x535)+'em'](_0x507ae3);if(_0x38a31d)_0x594e08['fov']=Math['min'](-0x2691*-0x1+-0x16c4+0x37*-0x47,Math[_0x3e6ad4(0x29f)](0xed2+-0xa54+-0x460,_0x5591fc['augvy'](parseFloat,_0x38a31d)||-0x1*-0x1956+-0xae4*0x2+0x1*-0x334));}}catch(_0x528b16){}function _0x20e54e(){var _0x2298c1=_0x3e6ad4;if(_0x5591fc[_0x2298c1(0xa22)](_0x2298c1(0x723),_0x5591fc[_0x2298c1(0x5fb)]))try{localStorage['setIt'+'em'](_0x507ae3,_0x5591fc[_0x2298c1(0x57f)](String,_0x594e08[_0x2298c1(0x26a)]));}catch(_0x48e5d0){}else return _0x59810a[_0x2298c1(0x498)+'e']=_0x5591fc['okAse'],_0x5017e9;}var _0x26bd0e='sakur'+_0x3e6ad4(0xabe)+'view-'+_0x3e6ad4(0xb61),_0x15e589=![];try{localStorage[_0x3e6ad4(0x535)+'em'](_0x26bd0e)!==null&&(localStorage['remov'+_0x3e6ad4(0x254)](_0x26bd0e),_0x15e589=!![]);}catch(_0x5007a3){}var _0xc94ab9=-0x5*-0x18f+0x3*-0x463+0x586,_0x3b957b=0x7d7+-0xe*-0x111+-0x16a9,_0xc94ab9=0xedb*0x1+-0x2519*-0x1+0xaa*-0x4e,_0x3b957b=0x1456+0x12b*-0x1f+0xffb,_0x6211af={'pitch':null,'yaw':null,'identified':![],'why':_0x3e6ad4(0xb79)+_0x3e6ad4(0x5e7)+'ok\x20ye'+'t','source':null,'yawGetter':null,'pitchGetter':null,'getters':[]};function _0x4f3766(_0x4609b2){var _0x32884a=_0x3e6ad4,_0x3e2cef=null,_0x295031=-0x3e0+-0xb6b+0xf*0x105;for(var _0x11a49c in _0x38db05){var _0x453f05=_0x38db05[_0x11a49c];if(!_0x453f05[_0x32884a(0x6a6)]||_0x453f05[_0x32884a(0xa45)]===null)continue;var _0x4a5943=_0xda4deb(_0x45e31c+_0x4609b2,_0x5591fc['WDhIp']);if(typeof _0x4a5943!=='numbe'+'r')continue;_0x5591fc['kdBdU'](Math[_0x32884a(0x1ac)](_0x5591fc[_0x32884a(0xe0)](_0x453f05['last'],_0x4a5943)),0x1c62+-0x14fc+-0x766+0.001)&&_0x5591fc[_0x32884a(0x95e)](_0x453f05[_0x32884a(0x6a6)],_0x295031)&&(_0x3e2cef=_0x11a49c,_0x295031=_0x453f05['hits']);}return _0x3e2cef;}function _0x1ce7fe(_0x196ad2){var _0x4826d9=_0x3e6ad4,_0x129bed=[],_0x26a554=_0x599afb['Mouse'+'Look']||[];for(var _0x503a1a in _0x38db05){if(_0x5591fc['paCGq']===_0x5591fc[_0x4826d9(0x2fb)]){var _0xbf772=_0x38db05[_0x503a1a];if(!_0xbf772[_0x4826d9(0x6a6)])continue;var _0x2d6559=null;for(var _0x2cb1e5=-0x3*-0x37+0x2371+-0x2416;_0x5591fc['VHjaM'](_0x2cb1e5,_0x26a554['lengt'+'h']);_0x2cb1e5++){if(_0x26a554[_0x2cb1e5][-0x3d9*0xa+0x1163+0x384*0x6]!==_0x5591fc[_0x4826d9(0xb21)])continue;var _0x5e3c0b=_0xda4deb(_0x196ad2+_0x26a554[_0x2cb1e5][-0x26bb*0x1+-0x5b9+0x2c74],_0x5591fc[_0x4826d9(0xb21)]);if(_0x5591fc[_0x4826d9(0x3cc)](typeof _0x5e3c0b,_0x4826d9(0x4c6)+'r')&&Math['abs'](_0x5e3c0b-_0xbf772[_0x4826d9(0xa45)])<-0x59b+0x2*0x118c+0x1d7d*-0x1+0.001){if(_0x5591fc['SkeEw'](_0x4826d9(0x86a),_0x5591fc[_0x4826d9(0x91d)])){_0x2d6559='0x'+_0x26a554[_0x2cb1e5][-0x16d9*-0x1+0x1c4e+-0x9*0x5af][_0x4826d9(0x8e7)+'ing'](0x28*-0x9e+0x546+0x137a);break;}else{var _0x4e2851=_0x1e6906[_0x4826d9(0xb3d)+_0x4826d9(0x94f)+'dkit']&&_0x2bc5fd['Unity'+_0x4826d9(0x94f)+_0x4826d9(0x77b)]['Runti'+'me'],_0x20e0b5=_0x4e2851&&_0x4e2851['inter'+_0x4826d9(0x94)+_0x4826d9(0x5f2)+'es']||[],_0xc213b4={};for(var _0x27c8b8=-0x1d9e+-0x105d+0x2dfb;_0x5591fc[_0x4826d9(0x5cd)](_0x27c8b8,_0x20e0b5[_0x4826d9(0xa6a)+'h'])&&_0x27c8b8<-0x7cf*0x4+0x8*0x23b+0x1d04;_0x27c8b8++){var _0x2594ba=_0x5591fc['FTavp'](_0x20e0b5[_0x27c8b8][_0x4826d9(0x4f6)+'s'][_0x4826d9(0x1ed)](',')+_0x4826d9(0x4af),_0x20e0b5[_0x27c8b8]['retur'+'nType']||_0x5591fc['vZyEB']);_0xc213b4[_0x2594ba]=_0x5591fc['fHCbA'](_0xc213b4[_0x2594ba]||0xb29*0x3+0x1*-0xf8f+0x47b*-0x4,0x16e6+0x3*0x229+0x1*-0x1d60);}_0x16ac43[_0x4826d9(0x5f7)+_0x4826d9(0xb8d)]=_0xc213b4;}}}_0x129bed[_0x4826d9(0xb4)]({'name':_0x503a1a,'value':_0xbf772['last'],'matches':_0x2d6559,'hits':_0xbf772[_0x4826d9(0x6a6)],'set':_0xbf772[_0x4826d9(0xbbd)+'ts']?_0xbf772['setLa'+'st']:null});}else _0x2b183b[_0x4826d9(0x557)+_0x4826d9(0xc19)]='rgba('+'255,1'+_0x4826d9(0x75f)+_0x4826d9(0xa66)+')',_0x312f3c['font']=_0x4826d9(0xab6)+'ui-mo'+_0x4826d9(0xb97)+'ce,Co'+'nsola'+_0x4826d9(0x49e)+_0x4826d9(0x9d3)+'e',_0x125841[_0x4826d9(0x476)+_0x4826d9(0x801)](_0x5ee1e2[_0x4826d9(0x2ff)](_0x521742['d']||0x1*-0x190f+-0x5*-0x251+0xd7a)+'m',_0x5591fc[_0x4826d9(0x610)](_0x87e54f,_0x37794e/(-0x1*0x4af+-0x124+0x5d5)),_0x5591fc[_0x4826d9(0xe0)](_0x5591fc[_0x4826d9(0x522)](_0x5e7edc,_0x3d5137/(0x1772*0x1+-0x11ad+-0x5c3)),0x4db*0x1+0xde2+-0x12ba));}return _0x129bed;}function _0x19adb5(){var _0x59e430=_0x3e6ad4,_0x2a6217=_0x5591fc['nPfVN'](_0x2ea369);if(!_0x2a6217||!_0x2a6217['mouse'+_0x59e430(0xb3)]){if(_0x59e430(0x7a6)!==_0x5591fc[_0x59e430(0x9b0)])return _0x6211af['ident'+_0x59e430(0xa3b)]=![],_0x6211af[_0x59e430(0x41a)]='no\x20Mo'+_0x59e430(0x5e7)+_0x59e430(0x8bb)+'t',null;else{if(!_0x46a043[_0x59f58f])_0x46f085[_0xbda875]={'ptr':_0x5b7e3d,'kind':_0x55831a,'firstSeen':_0x455d58[_0x59e430(0x5e4)](),'hits':0x0};_0x1601dc[_0x385747][_0x59e430(0x6a6)]++;}}var _0x49bc31=_0x5591fc[_0x59e430(0x274)](parseInt,_0x2a6217[_0x59e430(0x718)+_0x59e430(0xb3)],-0xd40*0x2+0x1dd0+-0x10*0x34);if(_0x45e31c!==_0x49bc31)_0x45e31c=_0x49bc31;_0x6211af[_0x59e430(0xb3e)+'rs']=_0x5591fc['vwsXj'](_0x1ce7fe,_0x49bc31);var _0xaceb5e=_0x4f3766(_0xc94ab9),_0xd2a323=null;for(var _0x1ae07c in _0x38db05){if(_0x5591fc[_0x59e430(0x789)](_0x5591fc[_0x59e430(0x8ba)],_0x5591fc['bZTIm'])){if(_0x1ae07c===_0xaceb5e)continue;var _0x3cffdb=_0x38db05[_0x1ae07c];if(!_0x3cffdb['hits']||_0x3cffdb[_0x59e430(0xa45)]===null)continue;if(_0x3cffdb[_0x59e430(0xa45)]>=-(0x35b+0x2*0x3af+-0xa5f)&&_0x3cffdb[_0x59e430(0xa45)]<=-0xea*0x2+-0x2*-0xe57+-0x1a80){if(_0x5591fc['cSGdt'](_0x59e430(0x1c3),_0x59e430(0x1c3))){_0xd2a323=_0x1ae07c;break;}else{var _0x3acd60=(_0x59e430(0x9b3)+_0x59e430(0x2f4)+'2|1|4'+_0x59e430(0x339))[_0x59e430(0xa3)]('|'),_0x200099=-0x3*0xc0b+0x6a*-0xc+0x2919;while(!![]){switch(_0x3acd60[_0x200099++]){case'0':_0x307357=_0x28a26a['max'](-0x17f*0x13+0x15*0xaf+0xe1a*0x1,_0x4ea274['min'](_0x5591fc['lRHqB'](_0x4eccf7[_0x59e430(0x51d)+'Heigh'+'t']||0x1*-0x1da9+-0x2315+0x40be,_0x17e25e)-(-0x16*-0x85+-0x2f9*-0x5+-0x1a43),_0x307357));continue;case'1':_0x43f4cb[_0x59e430(0xd5)]['top']=_0x5591fc['QGEIH'](_0x307357,'px');continue;case'2':_0x52121c[_0x59e430(0xd5)][_0x59e430(0xb3f)]=_0x388d29+'px';continue;case'3':if(!_0x25068f)return;continue;case'4':_0x2d6fc3['style'][_0x59e430(0x521)]='auto';continue;case'5':_0x388d29=_0x46401f[_0x59e430(0x29f)](-0x4c*0x83+0xce9+0x1a03,_0x4759d0[_0x59e430(0x2ac)](_0x5591fc[_0x59e430(0x168)](_0x5591fc['knNnw'](_0x5b0a13[_0x59e430(0x51d)+_0x59e430(0x4f9)]||0x11bc+0x357+-0x1513,_0x54334b),0x1c1f+-0x1c1*0x1+-0x1a56),_0x388d29));continue;case'6':_0x267dc7[_0x59e430(0x61a)]={'x':_0x388d29,'y':_0x307357};continue;case'7':_0x1a566[_0x59e430(0xd5)][_0x59e430(0x3fa)+'m']=_0x59e430(0x4ef);continue;case'8':var _0x388d29=(_0x49da0e[_0x59e430(0x7b9)+'tX']||0x305*-0x7+0x1bd*0xb+0x102*0x2)-_0xb4ffcc,_0x307357=(_0x377ca5[_0x59e430(0x7b9)+'tY']||0x11*0x219+0x10b2*-0x1+-0x12f7)-_0x2989da;continue;case'9':var _0x54334b=_0x52a4ea[_0x59e430(0x9b9)+_0x59e430(0x694)+'h']||0x5fb*0x4+0x19fe+0x17bf*-0x2,_0x17e25e=_0x4cab81['offse'+'tHeig'+'ht']||-0x1fbc*0x1+-0x39*0x46+0x30e2;continue;}break;}}}}else _0x1a7cfc[_0x59e430(0x2d4)+_0x59e430(0x47b)]['push'](_0x5591fc[_0x59e430(0x374)]('UWMK\x20'+'resol'+'ved\x20'+_0x2986df[_0x59e430(0x489)+'Resol'+_0x59e430(0x21f)]+_0x5591fc['mKeck']+_0x48bfad[_0x59e430(0x489)+_0x59e430(0xf8)]+('\x20hook'+_0x59e430(0x62f)+'o\x20a\x20t'+'able\x20'+'index'+_0x59e430(0x333)+_0x59e430(0x4b5)+_0x59e430(0xa95)+'ne.\x20T'+_0x59e430(0x88a)+'gnatu'+'re\x20'),_0x5591fc[_0x59e430(0x90c)]));}_0x6211af[_0x59e430(0x6f4)+'tter']=_0xaceb5e,_0x6211af['pitch'+_0x59e430(0x2a8)+'r']=_0xd2a323;var _0x8841d2,_0x418591;_0xaceb5e?(_0x8841d2=_0x38db05[_0xaceb5e][_0x59e430(0xa45)],_0x6211af[_0x59e430(0x498)+'e']='gette'+'r'):(_0x8841d2=_0xda4deb(_0x49bc31+_0xc94ab9,_0x59e430(0x211)),_0x6211af['sourc'+'e']=_0x5591fc[_0x59e430(0x5b2)]);if(_0xd2a323)_0x418591=_0x38db05[_0xd2a323][_0x59e430(0xa45)];else _0x418591=_0x5591fc['PdHrI'](_0xda4deb,_0x5591fc['yiHnc'](_0x49bc31,_0x3b957b),'f32');_0x6211af['rawYa'+'w']=_0x8841d2,_0x6211af[_0x59e430(0xaa)+_0x59e430(0xb0b)]=_0x418591;if(_0x5591fc[_0x59e430(0x3e0)](typeof _0x8841d2,'numbe'+'r')||!_0x5591fc[_0x59e430(0x365)](isFinite,_0x8841d2)||typeof _0x418591!==_0x5591fc['oMsyi']||!isFinite(_0x418591))return _0x6211af[_0x59e430(0xb93)+'ified']=![],_0x6211af['why']=_0x5591fc[_0x59e430(0x3a7)],null;if(_0x5591fc[_0x59e430(0x241)](_0x418591,-(0x1f67*-0x1+0x699+0x1928))||_0x5591fc[_0x59e430(0x529)](_0x418591,-0x69*0x3f+-0x91d*-0x1+0x1114))return _0x6211af['ident'+'ified']=![],_0x6211af[_0x59e430(0x41a)]=_0x5591fc['tMhBz'](_0x5591fc[_0x59e430(0x79b)]+Math[_0x59e430(0x2ff)](_0x418591),_0x5591fc['uqWoP']),null;return _0x6211af[_0x59e430(0x41a)]='',_0x6211af[_0x59e430(0xb93)+_0x59e430(0xa3b)]=!![],_0x6211af[_0x59e430(0x7c8)]=_0x418591,_0x6211af[_0x59e430(0x984)]=_0x8841d2,_0x6211af;}function _0x301384(_0x540b6f,_0x36b0ec,_0x2dee62,_0x23e12a){var _0xc8c6f2=_0x3e6ad4,_0x4f91ae=_0x19adb5();if(!_0x4f91ae)return null;var _0x3297eb=_0x4f91ae[_0xc8c6f2(0x7c8)]*Math['PI']/(0x3b9+0x24e4*-0x1+0x21df),_0x5baec4=_0x5591fc['iMLOx'](_0x5591fc[_0xc8c6f2(0x194)](_0x4f91ae[_0xc8c6f2(0x984)],Math['PI']),0x6e8+-0x223*0xa+-0x2*-0x795),_0x314805=Math[_0xc8c6f2(0xa72)](_0x3297eb),_0x2d394a=Math[_0xc8c6f2(0x972)](_0x5baec4)*_0x314805,_0x2b4129=-Math['sin'](_0x3297eb),_0x5780fd=Math['cos'](_0x5baec4)*_0x314805,_0x67e530=_0x5780fd,_0x51635=-0xcc7*-0x2+-0x1*-0x24fb+0x3e89*-0x1,_0x2fe333=-_0x2d394a,_0x1ed66d=_0x5591fc['gKnxh'](_0x36b0ec[-0x907+-0x57c+-0xe83*-0x1],_0x540b6f[0x9*-0x332+-0x6a*0x19+0x271c]),_0x31d0e2=_0x5591fc[_0xc8c6f2(0x610)](_0x36b0ec[0x1279*-0x1+0x3a3*0x7+0x1*-0x6fb],_0x540b6f[-0x99d+-0x8*-0x1f7+-0x61a]),_0x46d4d8=_0x36b0ec[0x85f+0x5*-0x14d+-0x1dc]-_0x540b6f[0x51e+0x1*0xa10+-0xf2c],_0x31ca9b=_0x1ed66d*_0x2d394a+_0x5591fc[_0xc8c6f2(0x256)](_0x31d0e2,_0x2b4129)+_0x46d4d8*_0x5780fd;if(_0x31ca9b<=-0xe79+-0x1b*-0x1f+0xb34+0.05)return null;var _0x351910=_0x1ed66d*_0x67e530+_0x31d0e2*_0x51635+_0x46d4d8*_0x2fe333,_0x10e347=_0x1ed66d*_0x5591fc[_0xc8c6f2(0xbc3)](_0x2b4129*_0x2fe333,_0x5780fd*_0x51635)+_0x31d0e2*(_0x5780fd*_0x67e530-_0x5591fc[_0xc8c6f2(0x23e)](_0x2d394a,_0x2fe333))+_0x46d4d8*(_0x5591fc[_0xc8c6f2(0x23e)](_0x2d394a,_0x51635)-_0x2b4129*_0x67e530),_0x3a8678=_0x2dee62/_0x23e12a,_0x5e47bb=_0x594e08[_0xc8c6f2(0x26a)]*Math['PI']/(-0x2102+0x12ba+-0x4*-0x3bf),_0xb82c96=Math['tan'](_0x5e47bb/(-0x2*0x7f6+0x8cc+0x722)),_0x2d5c26=_0x5591fc[_0xc8c6f2(0xb43)](_0x351910/_0x31ca9b,_0x5591fc['yzhRk'](_0xb82c96,_0x3a8678)),_0xcacb57=_0x10e347/_0x31ca9b/_0xb82c96;if(_0x2d5c26<-(-0x105*0x15+0x198+0x13d2+0.6000000000000001)||_0x2d5c26>0x1*0x22e7+-0xcdc+-0xe*0x193+0.6000000000000001||_0xcacb57<-(0x2180+-0x11a*-0x13+-0x366d+0.6000000000000001)||_0x5591fc['wLVJx'](_0xcacb57,-0x187a+0x41b*0x1+0x28c*0x8+0.6000000000000001))return null;return{'x':_0x5591fc[_0xc8c6f2(0x83e)](_0x5591fc['kluAT'](_0x2d5c26,-0x22b1+-0xbb3*-0x3+-0x68+0.5),0x12d3+-0x44*-0x21+0x1*-0x1b97+0.5)*_0x2dee62,'y':(0x1de4+-0x244b+0x667+0.5-_0xcacb57*(-0xcbd+0x7d*0x3d+-0x110c+0.5))*_0x23e12a,'z':_0x31ca9b};}var _0x4608e2={'open':![],'cat':_0x5591fc[_0x3e6ad4(0x770)],'built':![],'root':null,'cols':null,'head':null,'sub':null,'syncs':[],'pos':null},_0x476786=_0x3e6ad4(0x6d0)+_0x3e6ad4(0xabe)+_0x3e6ad4(0x5cc)+_0x3e6ad4(0x61a),_0x215df4=null,_0x4fa367=[{'id':'comba'+'t','label':_0x5591fc[_0x3e6ad4(0x249)]},{'id':_0x5591fc['eLyFc'],'label':_0x5591fc['rgWDM']},{'id':'value'+'s','label':_0x5591fc[_0x3e6ad4(0x9e8)]},{'id':_0x3e6ad4(0xb1f),'label':_0x3e6ad4(0x833)}],_0x25bb0a=_0x5591fc[_0x3e6ad4(0xed)](_0x5591fc[_0x3e6ad4(0x374)](_0x5591fc[_0x3e6ad4(0x9e9)](_0x5591fc['hegSf'](_0x5591fc[_0x3e6ad4(0x166)](_0x5591fc[_0x3e6ad4(0x3f6)](_0x5591fc[_0x3e6ad4(0x61b)](_0x5591fc['SpiTb'](_0x5591fc[_0x3e6ad4(0x9fe)](_0x5591fc['MCDwG'](_0x5591fc[_0x3e6ad4(0x5bd)](_0x5591fc[_0x3e6ad4(0x113)](_0x5591fc[_0x3e6ad4(0x9fe)](_0x5591fc[_0x3e6ad4(0x4ff)](_0x5591fc[_0x3e6ad4(0x5b6)](_0x5591fc[_0x3e6ad4(0x29c)](_0x5591fc[_0x3e6ad4(0x1e9)](_0x5591fc[_0x3e6ad4(0x178)](_0x5591fc[_0x3e6ad4(0x9e9)](_0x3e6ad4(0x30d)+_0x3e6ad4(0x7c4)+_0x3e6ad4(0x5ee)+_0x3e6ad4(0x20d)+_0x3e6ad4(0x781)+_0x3e6ad4(0x3b6),_0x5591fc[_0x3e6ad4(0x900)]),'displ'+_0x3e6ad4(0x407)+'ex;ga'+'p:10p'+'x;pad'+'ding:'+'10px;'+_0x3e6ad4(0x526)+_0x3e6ad4(0x33c)+'ius:2'+'2px;p'+'ointe'+_0x3e6ad4(0x9f8)+'nts:a'+_0x3e6ad4(0x78e)+_0x3e6ad4(0x30c)+'x:214'+'74836'+_0x3e6ad4(0xaf2)),_0x3e6ad4(0x9a3)+_0x3e6ad4(0x2ff)+':rgba'+'(24,1'+_0x3e6ad4(0x246)+_0x3e6ad4(0xb95)+'backd'+_0x3e6ad4(0x65f)+_0x3e6ad4(0xe7)+_0x3e6ad4(0x3ba)+'(22px'+_0x3e6ad4(0x4bc)+'urate'+_0x3e6ad4(0x95a)+');-we'+_0x3e6ad4(0x4ea)+_0x3e6ad4(0xc1e)+'rop-f'+_0x3e6ad4(0xe7)+_0x3e6ad4(0x3ba)+_0x3e6ad4(0x362)+_0x3e6ad4(0x4bc)+_0x3e6ad4(0x595)+_0x3e6ad4(0x95a)+');')+_0x5591fc['sBqhe'],'opaci'+'ty:0;'+'trans'+'form:'+'trans'+'lateY'+_0x3e6ad4(0x176)+_0x3e6ad4(0x8be)+'nter-'+_0x3e6ad4(0x4c3)+'s:non'+_0x3e6ad4(0x6cb)+_0x3e6ad4(0x700)+'on:op'+_0x3e6ad4(0x9f6)+'\x20.35s'+'\x20ease'+_0x3e6ad4(0xa1e)+_0x3e6ad4(0x42c)+'\x20.45s'+'\x20cubi'+'c-bez'+_0x3e6ad4(0x60d)+_0x3e6ad4(0xc04)+_0x3e6ad4(0x814)+');')+_0x5591fc['apfqM'],_0x3e6ad4(0x30d)+'ra-me'+_0x3e6ad4(0x5ee)+_0x3e6ad4(0x28e)+'-pane'+_0x3e6ad4(0xb70)+_0x3e6ad4(0x3d8)+'acity'+_0x3e6ad4(0x147)+_0x3e6ad4(0x50f)+_0x3e6ad4(0x794)+'ne;po'+_0x3e6ad4(0x198)+'-even'+_0x3e6ad4(0x752)+'to;}')+('.mn-s'+_0x3e6ad4(0x364)+_0x3e6ad4(0x3d1)+_0x3e6ad4(0x8a0)+'x;fle'+_0x3e6ad4(0xc24)+_0x3e6ad4(0x47c)+_0x3e6ad4(0x77e)+'umn;a'+'lign-'+'items'+':cent'+_0x3e6ad4(0xbf7)+_0x3e6ad4(0x57b)+';widt'+_0x3e6ad4(0x4eb)+_0x3e6ad4(0xbb2)+_0x3e6ad4(0xc05)+'e;pad'+_0x3e6ad4(0x83d)+_0x3e6ad4(0x1db)+'0;'),_0x5591fc[_0x3e6ad4(0x6d8)])+(_0x3e6ad4(0x8d8)+_0x3e6ad4(0x3ae)+'ispla'+_0x3e6ad4(0xc13)+'d;pla'+'ce-it'+_0x3e6ad4(0xbec)+_0x3e6ad4(0xb9d)+_0x3e6ad4(0x81b)+_0x3e6ad4(0x7cf)+_0x3e6ad4(0x6b3)+_0x3e6ad4(0x337)+_0x3e6ad4(0x757)+_0x3e6ad4(0x9d9)+_0x3e6ad4(0x415)+'om:6p'+'x;}'),_0x5591fc[_0x3e6ad4(0x9d7)]),_0x3e6ad4(0xa53)+'ab{di'+_0x3e6ad4(0xf0)+_0x3e6ad4(0x4d6)+_0x3e6ad4(0x377)+_0x3e6ad4(0x664)+_0x3e6ad4(0xa7a)+'nter;'+'justi'+_0x3e6ad4(0xb51)+_0x3e6ad4(0x471)+_0x3e6ad4(0x5d3)+'er;wi'+_0x3e6ad4(0x291)+'2px;h'+_0x3e6ad4(0x729)+_0x3e6ad4(0xbfa)+_0x3e6ad4(0x6aa)+'er:0;'+_0x3e6ad4(0x526)+_0x3e6ad4(0x33c)+'ius:1'+'0px;')+(_0x3e6ad4(0x9a3)+'round'+_0x3e6ad4(0x536)+'spare'+'nt;co'+_0x3e6ad4(0x8a2)+_0x3e6ad4(0x879)+'46,23'+'8,242'+',.4);'+'curso'+_0x3e6ad4(0x555)+'nter;'+'font-'+'size:'+'10px;'+_0x3e6ad4(0xaa1)+_0x3e6ad4(0x2e2)+'t:700'+_0x3e6ad4(0x8f1)+'-fami'+'ly:in'+_0x3e6ad4(0xa26)+';}')+(_0x3e6ad4(0xa53)+_0x3e6ad4(0x7d4)+_0x3e6ad4(0x2e1)+'olor:'+'rgba('+'246,2'+_0x3e6ad4(0x6b0)+_0x3e6ad4(0x4a7)+';}')+_0x5591fc['FKifD'],_0x3e6ad4(0x5dc)+_0x3e6ad4(0x994)+_0x3e6ad4(0xfb)+';min-'+_0x3e6ad4(0x708)+':0;di'+_0x3e6ad4(0xf0)+_0x3e6ad4(0x4d6)+_0x3e6ad4(0xa06)+'-dire'+_0x3e6ad4(0x7fd)+_0x3e6ad4(0x152)+'mn;}')+(_0x3e6ad4(0xa53)+_0x3e6ad4(0x32d)+_0x3e6ad4(0xf0)+_0x3e6ad4(0x4d6)+_0x3e6ad4(0x377)+_0x3e6ad4(0x664)+_0x3e6ad4(0xa7a)+'nter;'+'gap:1'+_0x3e6ad4(0x7f0)+'addin'+_0x3e6ad4(0x69a)+'\x206px\x20'+_0x3e6ad4(0x50d)+_0x3e6ad4(0xa6)+_0x3e6ad4(0xb7f)+_0x3e6ad4(0x426)+'e;}'),_0x3e6ad4(0xa53)+_0x3e6ad4(0x52e)+_0x3e6ad4(0x108)+_0x3e6ad4(0x5b1)+'n-wid'+_0x3e6ad4(0x525)+'}')+_0x5591fc['GnpRE']+_0x5591fc['AcpGK']+_0x5591fc['KDezj']+_0x5591fc[_0x3e6ad4(0xa4)],_0x5591fc['xXbqa'])+(_0x3e6ad4(0x46c)+_0x3e6ad4(0x73c)+_0x3e6ad4(0x692)+_0x3e6ad4(0xab9)+_0x3e6ad4(0x44c)+_0x3e6ad4(0x7e0)+_0x3e6ad4(0x724)+'x;fil'+'l:non'+_0x3e6ad4(0xb1d)+_0x3e6ad4(0x320)+_0x3e6ad4(0x79a)+'tColo'+'r;str'+'oke-w'+'idth:'+'2;str'+'oke-l'+_0x3e6ad4(0x355)+'p:rou'+'nd;}')+_0x5591fc[_0x3e6ad4(0x480)]+('align'+_0x3e6ad4(0x272)+'s:sta'+_0x3e6ad4(0x5ed)+'ign-c'+'onten'+_0x3e6ad4(0x9af)+'rt;ga'+'p:10p'+_0x3e6ad4(0x6f0)+_0x3e6ad4(0x83d)+_0x3e6ad4(0x21d)+_0x3e6ad4(0xf4)+_0x3e6ad4(0x5a7))+('.mn-c'+_0x3e6ad4(0x2ee)+'-webk'+'it-sc'+_0x3e6ad4(0x1b0)+'ar{wi'+_0x3e6ad4(0xc08)+_0x3e6ad4(0x5c9))+_0x5591fc[_0x3e6ad4(0x539)]+(_0x3e6ad4(0xc0e)+'ard{b'+_0x3e6ad4(0x72d)+_0x3e6ad4(0x863)+_0x3e6ad4(0x38c)+_0x3e6ad4(0x737)+_0x3e6ad4(0x9a0)+_0x3e6ad4(0x5a6)+'gba(2'+_0x3e6ad4(0x302)+'5,255'+_0x3e6ad4(0x5b5)+_0x3e6ad4(0x366)+_0x3e6ad4(0x1d7)+'ow:in'+_0x3e6ad4(0x44d)+'\x200\x200\x20'+_0x3e6ad4(0x292)+'gba(2'+'55,25'+'5,255'+_0x3e6ad4(0x989)+';}'),_0x5591fc[_0x3e6ad4(0x8aa)])+(_0x3e6ad4(0xc0e)+'ard-h'+_0x3e6ad4(0x36d)+_0x3e6ad4(0x3d1)+'y:fle'+_0x3e6ad4(0x437)+'gn-it'+'ems:c'+'enter'+';gap:'+'8px;p'+_0x3e6ad4(0x674)+'g:11p'+'x\x2012p'+'x;}')+_0x5591fc[_0x3e6ad4(0x5e0)]+(_0x3e6ad4(0xc0e)+_0x3e6ad4(0x90f)+_0x3e6ad4(0xeb)+_0x3e6ad4(0xce)+_0x3e6ad4(0xc03)+_0x3e6ad4(0x9c6)+_0x3e6ad4(0xb55)+_0x3e6ad4(0x27c)+_0x3e6ad4(0xbf6)+_0x3e6ad4(0x58e)+_0x3e6ad4(0x9ad)+_0x3e6ad4(0x8a2)+_0x3e6ad4(0x879)+_0x3e6ad4(0x1de)+_0x3e6ad4(0x919)+',.45)'+';}')+_0x5591fc[_0x3e6ad4(0x907)]+_0x5591fc[_0x3e6ad4(0xb27)]+_0x5591fc[_0x3e6ad4(0xb65)],_0x5591fc['zeyKo'])+(_0x3e6ad4(0x218)+'abel{'+_0x3e6ad4(0x15c)+_0x3e6ad4(0xbe0)+'or:rg'+_0x3e6ad4(0x4c8)+'6,238'+_0x3e6ad4(0x7cb)+_0x3e6ad4(0x412)+'}')+(_0x3e6ad4(0x41d)+_0x3e6ad4(0x910)+'ispla'+'y:blo'+_0x3e6ad4(0x15f)+_0x3e6ad4(0xaf8)+'ze:10'+'px;op'+'acity'+_0x3e6ad4(0x20f))+(_0x3e6ad4(0x8ed)+_0x3e6ad4(0xc02)+'{posi'+'tion:'+_0x3e6ad4(0xa29)+_0x3e6ad4(0x809)+'idth:'+_0x3e6ad4(0x997)+'heigh'+'t:14p'+'x;bor'+_0x3e6ad4(0xb26)+';bord'+_0x3e6ad4(0x189)+'dius:'+_0x3e6ad4(0x5a3)+_0x3e6ad4(0x9a3)+'round'+':rgba'+_0x3e6ad4(0x43e)+'255,2'+'55,.0'+_0x3e6ad4(0x9b5)+'rsor:'+'point'+_0x3e6ad4(0x611)+_0x3e6ad4(0x543)+_0x3e6ad4(0xa0d))+(_0x3e6ad4(0x8ed)+'witch'+_0x3e6ad4(0x884)+_0x3e6ad4(0x4bb)+_0x3e6ad4(0x471)+_0x3e6ad4(0x404)+_0x3e6ad4(0x6ce)+'on:ab'+'solut'+'e;top'+':3px;'+_0x3e6ad4(0x750)+'3px;w'+_0x3e6ad4(0xab9)+'8px;h'+'eight'+_0x3e6ad4(0x964)+'borde'+'r-rad'+'ius:5'+_0x3e6ad4(0x7bf))+(_0x3e6ad4(0x9a3)+'round'+_0x3e6ad4(0x71d)+'(255,'+_0x3e6ad4(0x825)+_0x3e6ad4(0x316)+'5);tr'+_0x3e6ad4(0x3de)+'ion:l'+'eft\x20.'+_0x3e6ad4(0x695)+_0x3e6ad4(0x9a0)+_0x3e6ad4(0xdc)+'2s;}'),_0x5591fc['dlbnV'])+('.sk-s'+'witch'+'[aria'+_0x3e6ad4(0x289)+_0x3e6ad4(0xb0d)+'true\x22'+_0x3e6ad4(0x94c)+_0x3e6ad4(0x98e)+'eft:1'+_0x3e6ad4(0x8ad)+_0x3e6ad4(0xb13)+'ound:'+_0x3e6ad4(0x64c)+_0x3e6ad4(0x79d)),_0x3e6ad4(0x3fb)+_0x3e6ad4(0x8b1)+'displ'+'ay:fl'+'ex;al'+_0x3e6ad4(0x2dc)+'tems:'+_0x3e6ad4(0x8c4)+_0x3e6ad4(0x48a)+_0x3e6ad4(0x964)+'}')+_0x5591fc['BswGx']+_0x5591fc['NQjtD'],_0x5591fc['roKJa'])+_0x5591fc['LRtED'],_0x5591fc[_0x3e6ad4(0x1df)]),_0x5591fc[_0x3e6ad4(0xaef)])+_0x5591fc['kFEiT'],_0x3e6ad4(0x171)+_0x3e6ad4(0x6d1)+'ign-s'+'elf:f'+_0x3e6ad4(0xba5)+_0x3e6ad4(0x690)+'borde'+_0x3e6ad4(0x4b6)+_0x3e6ad4(0x72d)+_0x3e6ad4(0x863)+_0x3e6ad4(0x5f5)+_0x3e6ad4(0x6f0)+_0x3e6ad4(0x83d)+_0x3e6ad4(0xae5)+'6px;b'+_0x3e6ad4(0xb13)+_0x3e6ad4(0x4d8)+_0x3e6ad4(0x64c)+_0x3e6ad4(0x1c6)+_0x3e6ad4(0x926)+'fff;')+(_0x3e6ad4(0xaa1)+'size:'+'11.5p'+_0x3e6ad4(0x27c)+_0x3e6ad4(0xbf6)+'ght:7'+'00;cu'+_0x3e6ad4(0xacb)+_0x3e6ad4(0x59c)+'er;fo'+'nt-fa'+'mily:'+_0x3e6ad4(0x6e1)+_0x3e6ad4(0xbef))+('.sk-b'+_0x3e6ad4(0x9fd)+_0x3e6ad4(0xa6d)+'ilter'+':brig'+'htnes'+_0x3e6ad4(0x9b8)+');}')+(_0x3e6ad4(0x2d3)+_0x3e6ad4(0x485)+_0x3e6ad4(0x4cb)+_0x3e6ad4(0xa9b)+'5\x20ui-'+'monos'+'pace,'+_0x3e6ad4(0x279)+'las,m'+_0x3e6ad4(0xadd)+'ace;w'+_0x3e6ad4(0x609)+_0x3e6ad4(0x2a1)+':pre-'+_0x3e6ad4(0x3f3)+'word-'+_0x3e6ad4(0x1d2)+_0x3e6ad4(0x2aa)+_0x3e6ad4(0x35e)+_0x3e6ad4(0x96c)+'gin:0'+_0x3e6ad4(0x22f)+_0x3e6ad4(0x2d2)+'75;ma'+_0x3e6ad4(0x1f7)+'ght:2'+'80px;'+_0x3e6ad4(0x562)+_0x3e6ad4(0x991)+'uto;}')+_0x5591fc[_0x3e6ad4(0x78b)]+_0x5591fc['dEerr'],_0x5445fd=_0x3e6ad4(0x286)+'viewB'+'ox=\x220'+'\x200\x2024'+_0x3e6ad4(0x222)+'<path'+'\x20d=\x22M'+'12\x2021'+'c-1.5'+_0x3e6ad4(0x7bb)+'4-4.5'+_0x3e6ad4(0xb1c)+'5\x200-2'+_0x3e6ad4(0x985)+'8-4.5'+_0x3e6ad4(0x32c)+'5s4\x202'+_0x3e6ad4(0x5e9)+_0x3e6ad4(0x186)+_0x3e6ad4(0x11d)+_0x3e6ad4(0xb76)+_0x3e6ad4(0x3c4)+('fill='+_0x3e6ad4(0x449)+_0x3e6ad4(0x969)+_0x3e6ad4(0x64d)+_0x3e6ad4(0x64c)+_0x3e6ad4(0xa9e)+_0x3e6ad4(0x627)+'-widt'+_0x3e6ad4(0x1ca)+'\x20stro'+'ke-li'+_0x3e6ad4(0x5db)+_0x3e6ad4(0x37f)+'nd\x22\x20s'+'troke'+'-line'+'join='+_0x3e6ad4(0x18a)+_0x3e6ad4(0xb5d))+_0x5591fc['eSNTN'],_0x4ad88e=_0x3e6ad4(0x286)+'class'+'=\x22mn-'+_0x3e6ad4(0x97b)+'svg\x22\x20'+_0x3e6ad4(0x80c)+_0x3e6ad4(0x2b3)+_0x3e6ad4(0x14f)+'\x2024\x22>'+_0x3e6ad4(0xa05)+_0x3e6ad4(0x7de)+'12\x2021'+'c-1.5'+'-2.5-'+_0x3e6ad4(0x138)+_0x3e6ad4(0xb1c)+'5\x200-2'+_0x3e6ad4(0x985)+_0x3e6ad4(0x588)+'\x204-4.'+'5s4\x202'+'\x204\x204.'+_0x3e6ad4(0x186)+'-2.5\x20'+'5-4\x207'+_0x3e6ad4(0x3c4)+_0x5591fc[_0x3e6ad4(0x572)]+('<circ'+_0x3e6ad4(0x81f)+'=\x2212\x22'+'\x20cy=\x22'+_0x3e6ad4(0x376)+'=\x221.2'+'\x22\x20fil'+'l=\x22#f'+_0x3e6ad4(0x13f)+_0x3e6ad4(0x9c9)+'svg>');function _0x5efdbe(_0x216b85,_0xef22c9,_0x1b9848){var _0x21b372=_0x3e6ad4,_0x8c117f={'fxXVp':_0x5591fc['olvwm'],'NBKjr':function(_0x575387,_0x48e9c5){return _0x575387+_0x48e9c5;},'QsAqC':function(_0x1aab58,_0x22af62,_0x38fc6d,_0x450d0a){return _0x1aab58(_0x22af62,_0x38fc6d,_0x450d0a);},'EHLtY':_0x5591fc[_0x21b372(0x3b4)],'GQueL':_0x21b372(0x2e6)};if(_0x5591fc[_0x21b372(0x101)](_0x5591fc[_0x21b372(0x2d8)],_0x21b372(0x82c))){var _0x160b47=_0x229872[_0x2cc755[_0xe44e6d]],_0x53b8c8=_0x57baae(_0x8c117f['fxXVp'],_0x160b47['ptr']);_0x53b8c8[_0x21b372(0x6a6)]=_0x160b47[_0x21b372(0x6a6)],_0x53b8c8['first'+_0x21b372(0xa6e)+'s']=_0x160b47[_0x21b372(0x3e1)+_0x21b372(0xbb5)]-_0x3978f4,_0x53b8c8['isLoc'+'al']=!!_0x1b3d85&&_0x53b8c8[_0x21b372(0x4df)][_0x21b372(0x48b)]===_0x8c117f[_0x21b372(0x667)]('0x',_0x3f8ec5['toStr'+_0x21b372(0x9e7)](-0x14e4+0x1c56+0x69*-0x12));if(_0x53b8c8['refs'][_0x21b372(0x10e)+'h']){var _0x4491f4=_0x5e2b8f(_0x53b8c8['refs']['healt'+'h'],0xf23+-0x29*-0x1b+0x17e*-0xd);_0x53b8c8[_0x21b372(0x10e)+'h']=_0x8c117f['QsAqC'](_0x5e0c01,_0x4491f4,_0x8c117f['EHLtY'],_0x8c117f[_0x21b372(0xa6f)]);}_0x5e2d44[_0x21b372(0x463)+'rs']['push'](_0x53b8c8);}else{var _0x3a2781=document[_0x21b372(0x53b)+_0x21b372(0xa9a)+_0x21b372(0xac3)](_0x216b85);if(_0xef22c9)_0x3a2781[_0x21b372(0x9ed)+_0x21b372(0x624)]=_0xef22c9;if(_0x5591fc[_0x21b372(0x99)](_0x1b9848,null))_0x3a2781[_0x21b372(0x51d)+'HTML']=_0x1b9848;return _0x3a2781;}}function _0x5ba8cb(_0x5aa2a0,_0xf799ca){var _0x199eb6=_0x3e6ad4,_0x469513=_0x5591fc['lXHBD'](_0x5efdbe,'div',_0x5591fc[_0x199eb6(0x466)](_0x5591fc[_0x199eb6(0x116)],_0xf799ca?'\x20on':'')),_0x45e7f1=_0x5591fc['Vwtwg'](_0x5efdbe,_0x5591fc[_0x199eb6(0x167)],_0x199eb6(0xbdc)+_0x199eb6(0xba1)+'ad'),_0x30785b=_0x5efdbe(_0x199eb6(0x786),_0x199eb6(0xbdc)+_0x199eb6(0x959)+_0x199eb6(0xba8),_0x5591fc['ZpzFh'](_0x5591fc['hkxho'](_0x199eb6(0x2c4)+_0x199eb6(0xab3),_0x5aa2a0),'</str'+'ong>'));_0x45e7f1[_0x199eb6(0x3df)+'dChil'+'d'](_0x30785b);var _0x126ec2=_0x5591fc[_0x199eb6(0xa07)](_0x5efdbe,_0x199eb6(0x786),_0x5591fc[_0x199eb6(0x98b)]);return _0x469513[_0x199eb6(0x3df)+_0x199eb6(0x566)+'d'](_0x45e7f1),_0x469513[_0x199eb6(0x3df)+'dChil'+'d'](_0x126ec2),_0x469513[_0x199eb6(0x7ef)]=_0x126ec2,_0x469513[_0x199eb6(0xa5)]=_0x30785b,_0x469513;}function _0x64f32f(_0x476793,_0x4de4a5){var _0x4c4ee2=_0x3e6ad4,_0x39896d={'YCJAK':_0x5591fc[_0x4c4ee2(0x358)],'FASEB':function(_0x51676f){return _0x5591fc['zquru'](_0x51676f);},'wTSZl':'true','wfGRx':_0x5591fc[_0x4c4ee2(0xa75)]},_0x3b36d5=_0x5efdbe(_0x5591fc[_0x4c4ee2(0x1b8)],_0x5591fc[_0x4c4ee2(0x52f)]);_0x3b36d5['type']='butto'+'n';var _0x39be69=function(){var _0xe0b126=_0x4c4ee2;_0x3b36d5['setAt'+_0xe0b126(0xa09)+'te'](_0x39896d['YCJAK'],_0x39896d[_0xe0b126(0x13e)](_0x476793)?_0x39896d[_0xe0b126(0x1a1)]:_0x39896d[_0xe0b126(0x80e)]);};return _0x3b36d5[_0x4c4ee2(0x898)+'ck']=function(){var _0x243154=_0x4c4ee2;_0x4de4a5(!_0x39896d[_0x243154(0x13e)](_0x476793)),_0x39be69();},_0x39be69(),_0x3b36d5['sync']=_0x39be69,_0x4608e2[_0x4c4ee2(0x96f)][_0x4c4ee2(0xb4)](_0x39be69),_0x3b36d5;}function _0x3a4759(_0xae13b1,_0x5404a5,_0x3bf12d,_0x3a4cec,_0x30e25a){var _0x4ba92c=_0x3e6ad4,_0xf506e7={'BbORn':function(_0x38dfde){return _0x38dfde();}};if(_0x5591fc[_0x4ba92c(0x200)](_0x5591fc['tseRB'],'SUpeO'))try{var _0x26659b=_0x4a06e0;if(_0x26659b&&_0x26659b['el'])_0x26659b['el']['style'][_0x4ba92c(0x68f)+'ay']=_0x2a3e4f?'':_0x5591fc[_0x4ba92c(0x3aa)];var _0x1580f1=_0x4deffd;if(_0x1580f1&&_0x1580f1['cv'])_0x1580f1['cv']['style'][_0x4ba92c(0x68f)+'ay']=_0x27ee9e?'':_0x5591fc['famoz'];}catch(_0x20c9ab){}else{var _0x3f11b5=_0x5591fc['sLjyd'](_0x5efdbe,_0x5591fc['EqJYW'],_0x5591fc[_0x4ba92c(0x47f)]),_0x45cec9=document['creat'+'eElem'+_0x4ba92c(0xac3)](_0x4ba92c(0x125));_0x45cec9[_0x4ba92c(0x394)]=_0x5591fc[_0x4ba92c(0x207)],_0x45cec9['class'+_0x4ba92c(0x624)]=_0x4ba92c(0xaaa)+'ider',_0x45cec9[_0x4ba92c(0x2ac)]=_0x5591fc[_0x4ba92c(0x83b)](String,_0xae13b1),_0x45cec9[_0x4ba92c(0x29f)]=_0x5591fc[_0x4ba92c(0xa4e)](String,_0x5404a5),_0x45cec9[_0x4ba92c(0xc15)]=String(_0x3bf12d);var _0x460a2a=_0x5efdbe('span',_0x4ba92c(0x7af)+'l'),_0x3f5705=function(){var _0x75d4b8=_0x4ba92c,_0x9ccb49=_0x5591fc[_0x75d4b8(0x869)](_0x3a4cec);_0x45cec9['value']=_0x5591fc['OmhkV'](String,_0x9ccb49),_0x460a2a['textC'+'onten'+'t']=_0x5591fc[_0x75d4b8(0xbb1)](_0x5591fc[_0x75d4b8(0x241)](_0x3bf12d,0x1aeb+-0x30d*-0xb+-0x3c79)?_0x9ccb49['toFix'+'ed'](0xef1+0x1001*-0x1+0x111):_0x5591fc[_0x75d4b8(0x17a)](String,Math[_0x75d4b8(0x2ff)](_0x9ccb49)),_0x45cec9[_0x75d4b8(0xa1)+'et'][_0x75d4b8(0x80b)]||'');var _0x4e44bc=(_0x9ccb49-_0xae13b1)/(_0x5404a5-_0xae13b1)*(0x17f+-0x1dac+0x1c91*0x1);_0x45cec9[_0x75d4b8(0xd5)]['setPr'+_0x75d4b8(0x146)+'y'](_0x75d4b8(0x818),_0x4e44bc+'%');};return _0x45cec9['oninp'+'ut']=function(){var _0x1aae65=_0x4ba92c;if(_0x1aae65(0x492)==='OvTaR')_0x30e25a(parseFloat(_0x45cec9[_0x1aae65(0x6c7)])||_0xae13b1),_0xf506e7['BbORn'](_0x3f5705);else return null;},_0x3f11b5[_0x4ba92c(0x3df)+_0x4ba92c(0x566)+'d'](_0x45cec9),_0x3f11b5[_0x4ba92c(0x3df)+'dChil'+'d'](_0x460a2a),_0x3f11b5['sync']=_0x3f5705,_0x3f11b5[_0x4ba92c(0x125)]=_0x45cec9,_0x3f5705(),_0x4608e2[_0x4ba92c(0x96f)][_0x4ba92c(0xb4)](_0x3f5705),_0x3f11b5;}}function _0x422836(_0x53ae82,_0x3ad814){var _0x3ad678=_0x3e6ad4,_0x6c23ff=_0x5591fc[_0x3ad678(0x824)](_0x5efdbe,'div',_0x3ad678(0x72f)+'l'),_0x4a6f49=_0x5efdbe('div',_0x5591fc[_0x3ad678(0xc2)],_0x5591fc[_0x3ad678(0x374)](_0x53ae82,_0x3ad814?_0x5591fc[_0x3ad678(0xbc0)](_0x3ad678(0x8f8)+'\x20clas'+_0x3ad678(0x7d0)+'-hint'+'\x27>'+_0x3ad814,_0x3ad678(0x150)+'n>'):''));return _0x6c23ff['appen'+_0x3ad678(0x566)+'d'](_0x4a6f49),_0x6c23ff;}function _0x4b3936(_0x5c26d7,_0x5828ed,_0x4767ce,_0x417555){var _0x35d062=_0x3e6ad4,_0x52c399=_0x5c26d7&&_0x5c26d7[_0x35d062(0x4a2)+'y']&&_0x5c26d7[_0x35d062(0x4a2)+'y'][_0x5828ed];if(!_0x52c399)return'-';for(var _0xe860ab=-0x5cf+0xe47+-0x878;_0xe860ab<_0x52c399[_0x35d062(0xa6a)+'h'];_0xe860ab++){if(_0x5591fc[_0x35d062(0x2c3)](_0x52c399[_0xe860ab]['o'],_0x4767ce)){if(_0x417555==='v3'){var _0x2115f8=_0x52c399[_0xe860ab]['xyz']||[_0x52c399[_0xe860ab]['v'],0x1*-0x1619+-0x1d*-0x52+0xccf,0xcf0+0x1abb+-0x1*0x27ab];return _0x2115f8[_0x35d062(0x497)](function(_0x11448){var _0x120af0=_0x35d062;return _0x5591fc['AfMTU'](Math[_0x120af0(0x2ff)](_0x11448*(-0x3*0x173+0x1*0x171f+-0x1262)),-0xf6a+0x1108+-0x13a);})['join']('\x20\x20');}var _0x48e37d=_0x52c399[_0xe860ab]['v'];return typeof _0x48e37d===_0x35d062(0x4c6)+'r'?Math['round'](_0x48e37d*(0x22ec+0xdf*-0x20+-0x324))/(0x1*-0xfe9+-0x2438+-0x3809*-0x1):_0x5591fc['yDsDz'](String,_0x48e37d);}}return'-';}function _0x1a8514(_0x4bde95){var _0x296c5d=_0x3e6ad4,_0x1d97f9={'iwNhc':function(_0x27cac2){var _0x3cc7a9=_0x3f00;return _0x5591fc[_0x3cc7a9(0x221)](_0x27cac2);},'xnoTN':function(_0x5f4640,_0x4d7f82){return _0x5f4640===_0x4d7f82;},'eSIxY':'rhQwz','GbRIy':_0x5591fc[_0x296c5d(0x71a)],'xWrXw':function(_0x3087f7,_0x13beb5){return _0x3087f7(_0x13beb5);},'dAgVb':'obfI','TvIrE':function(_0x8f357f,_0x1107ab){var _0x2dc36a=_0x296c5d;return _0x5591fc[_0x2dc36a(0xff)](_0x8f357f,_0x1107ab);},'qSwYz':_0x5591fc[_0x296c5d(0x96)],'xlhdm':function(_0x22e054,_0x5cb50f){return _0x22e054+_0x5cb50f;},'RmVfE':function(_0x51c92b,_0x251b8c){return _0x51c92b+_0x251b8c;},'JFbTe':_0x296c5d(0x159),'BJufJ':function(_0x47d30b,_0x32b086,_0x4ea854){var _0x53ac5f=_0x296c5d;return _0x5591fc[_0x53ac5f(0x4b9)](_0x47d30b,_0x32b086,_0x4ea854);},'LUtrf':function(_0x509c11,_0x5b1159){return _0x5591fc['iMcSq'](_0x509c11,_0x5b1159);},'hxAPV':'nmmoI','ngitm':_0x5591fc[_0x296c5d(0xc2)],'BAkrE':function(_0x46eed9,_0x2b3ea9){var _0x7ba7c1=_0x296c5d;return _0x5591fc[_0x7ba7c1(0x8ac)](_0x46eed9,_0x2b3ea9);},'LBgpx':'IONgB','tkUJj':_0x5591fc['lJaXw'],'Ibazq':function(_0x4a8fbd,_0xe996b){return _0x4a8fbd(_0xe996b);}},_0x2e0113=_0x215df4,_0x1e9360=[],_0x52eca9;if(_0x5591fc[_0x296c5d(0xc00)](_0x4bde95,'comba'+'t')){if(_0x5591fc[_0x296c5d(0xab0)]!==_0x5591fc['LcxNJ']){_0xd1f58b[_0x15167f]={'ptr':_0x2cee5c,'firstSeen':_0x3c1974[_0x296c5d(0x5e4)](),'hits':0x0,'replaced':!!_0x56330e};try{var _0x1ce6d3=_0x49629f['filte'+'r'](function(_0x43e781){var _0xf5582a=_0x296c5d;return _0x43e781[_0xf5582a(0x394)]===_0x5baf1c;})[0x2673+0x1d79+-0x8a*0x7e];_0x51a060={'type':_0x384517,'atMs':_0x5591fc[_0x296c5d(0xe0)](_0x13128a[_0x296c5d(0x5e4)](),_0x10e824),'originalFunc':!!(_0x1ce6d3&&_0x1ce6d3['hook']&&_0x5591fc['bJroe'](typeof _0x1ce6d3['hook'][_0x296c5d(0x9ab)+'nalFu'+'nc'],_0x296c5d(0x6e6)+_0x296c5d(0x2ca))),'resolveGameAtFire':!!_0x333cdc(),'gameSourceAtFire':_0x2e498b['sourc'+'e']};}catch(_0x1fc398){}}else{var _0x3bd010=_0x5ba8cb(_0x5591fc[_0x296c5d(0x4ba)],_0x2680b6['on']),_0x5365b2=_0x5efdbe(_0x296c5d(0x786),_0x296c5d(0x351)+_0x296c5d(0x72c),_0x2680b6['on']?_0x5591fc[_0x296c5d(0x163)](_0x5591fc[_0x296c5d(0xb7a)](_0x5591fc[_0x296c5d(0x113)]('x'+_0x2680b6['facto'+'r'][_0x296c5d(0x91b)+'ed'](0x1bc*-0x12+0x1592+0x9a7)+_0x5591fc[_0x296c5d(0x74d)],_0x469dad[_0x296c5d(0xa6a)+'h']),_0x5591fc[_0x296c5d(0x4be)]),_0x13ba37)+(_0x296c5d(0x2fe)+'es'):_0x5591fc['EnyoS']),_0x55ffe5=_0x5591fc['Fklxw'](_0x422836,_0x296c5d(0x94a)+'ed');_0x55ffe5[_0x296c5d(0x3df)+_0x296c5d(0x566)+'d'](_0x5591fc[_0x296c5d(0x634)](_0x64f32f,function(){var _0x10c744=_0x296c5d,_0x596cea={'aenQg':function(_0x3508aa){var _0x5f0d58=_0x3f00;return _0x1d97f9[_0x5f0d58(0x66f)](_0x3508aa);}};if(_0x1d97f9['xnoTN'](_0x10c744(0x299),_0x1d97f9[_0x10c744(0x235)]))_0x596cea['aenQg'](_0x40b524);else return _0x2680b6['on'];},function(_0x3aec70){var _0x5770de=_0x296c5d,_0x34ea80={'YfpSi':function(_0x51332a){return _0x51332a();},'Fjzii':function(_0x518063,_0xcfee61){var _0x22b5ac=_0x3f00;return _0x5591fc[_0x22b5ac(0xa8d)](_0x518063,_0xcfee61);},'sycao':function(_0x30f6cf,_0x13a96d){var _0x22996e=_0x3f00;return _0x5591fc[_0x22996e(0x99c)](_0x30f6cf,_0x13a96d);},'EYXXB':_0x5591fc[_0x5770de(0x3f9)]};if(_0x5591fc['TWjQW']!==_0x5591fc[_0x5770de(0xb15)]){var _0x2b1f96=_0x34ea80[_0x5770de(0x74f)](_0x45600b);_0x2ef633['value']=_0x1be211(_0x2b1f96),_0x46b091[_0x5770de(0x173)+_0x5770de(0x3f4)+'t']=_0x34ea80['Fjzii'](_0x34ea80[_0x5770de(0xa0f)](_0x2a0c7f,0x1b5d+0x58c+0xd*-0x288)?_0x2b1f96[_0x5770de(0x91b)+'ed'](-0x1*-0x671+0x18*-0x18e+0x1ee0):_0x270f8e(_0x15567e[_0x5770de(0x2ff)](_0x2b1f96)),_0x3f614a[_0x5770de(0xa1)+'et'][_0x5770de(0x80b)]||'');var _0x56fefe=(_0x2b1f96-_0x1e98bd)/(_0x455701-_0x14dcfd)*(0x295*0xa+-0x8*-0x39e+-0x365e);_0xbccda2['style'][_0x5770de(0x5f8)+'opert'+'y'](_0x34ea80[_0x5770de(0x1ad)],_0x56fefe+'%');}else _0x177d40(_0x3aec70,_0x2680b6['facto'+'r']),_0x5365b2['textC'+'onten'+'t']=_0x3aec70?_0x5591fc['mzDdJ'](_0x5591fc['XsOFC'](_0x5591fc[_0x5770de(0x778)]('x',_0x2680b6[_0x5770de(0xa86)+'r'][_0x5770de(0x91b)+'ed'](-0x2392+-0x37b+0x1387*0x2))+_0x5770de(0xad4),_0x469dad[_0x5770de(0xa6a)+'h']),_0x5770de(0x848)+_0x5770de(0x593))+_0x13ba37+(_0x5770de(0x2fe)+'es'):_0x5770de(0x9f9)+'plies'+_0x5770de(0xfc)+'ment-'+_0x5770de(0xa0b)+_0x5770de(0x848)+_0x5770de(0x9e0)+'ly.\x20H'+_0x5770de(0x729)+_0x5770de(0xb03)+_0x5770de(0x45c)+_0x5770de(0xa69)+'\x20are\x20'+'refus'+_0x5770de(0x633);})),_0x3bd010['body'][_0x296c5d(0x3df)+_0x296c5d(0x566)+'d'](_0x5365b2),_0x3bd010['body']['appen'+_0x296c5d(0x566)+'d'](_0x55ffe5);var _0x179f13=_0x3a4759(-0x23b*0x1+-0x6*-0x53a+-0x8*0x3a4,-0xc7*-0x11+0x17fb+-0x252d,0x2708+-0x153a+-0x11ce+0.5,function(){var _0x33b9ba=_0x296c5d;return _0x2680b6[_0x33b9ba(0xa86)+'r'];},function(_0x47ceea){var _0x4777a7=_0x296c5d;if(_0x1d97f9[_0x4777a7(0x1ae)]==='SCUeD')_0x1d97f9[_0x4777a7(0x306)](_0x177d40,_0x2680b6['on'],_0x47ceea);else{var _0x379487=_0x5623a3[_0x5dbcf1],_0x477914=_0x4776dd(_0xacb47f,_0x3bc97a,_0x379487[_0x4777a7(0x6be)]);if(!_0x477914)return![];var _0x7c9794=new _0x108a38(_0x477914['buffe'+'r'],_0x477914[_0x4777a7(0xa12)+'ffset'],_0x477914[_0x4777a7(0xbcc)+'ength']),_0xee2e82=_0x379487[_0x4777a7(0xbf8)+'pe']==='u8'?_0x7c9794[_0x4777a7(0xb7c)+'nt8'](_0x379487[_0x4777a7(0x6e2)]):_0x7c9794['getIn'+_0x4777a7(0x826)](_0x379487['key'],!![]),_0x9b99c2;if(_0x4db689===_0x1d97f9[_0x4777a7(0xb6f)])_0x9b99c2=_0x1d97f9['xWrXw'](_0x46cc42,_0x51c7fe);else{if(_0xc6cf39===_0x1d97f9['dAgVb'])_0x9b99c2=_0x1d97f9[_0x4777a7(0x50b)](_0x56a5ee,0x1079*0x1+0x1*-0x20e1+0x1068);else _0x9b99c2=(_0x228c64?-0xee6+0x7e4+0x703:-0x17a6*-0x1+0x2*-0x56b+-0xcd0)&-0xdcf+-0xf61+0x1e2f;}return _0x35dd71(_0x3b8ab9+_0x31258a+_0x379487['hidde'+'n'],_0x1d97f9['qSwYz'],_0x9b99c2^_0xee2e82)&&_0x466b6b(_0x1d97f9['xlhdm'](_0x58dbe0+_0x504c8b,_0x379487['fake']),_0x13cf32===_0x4777a7(0x2c6)?_0x4777a7(0x211):_0x26637a===_0x1d97f9[_0x4777a7(0x6cd)]?_0x1d97f9[_0x4777a7(0xa8b)]:'u8',_0x1d97f9[_0x4777a7(0x81e)](_0x3ab612,'obfF')?_0x2a74be:_0x410987===_0x4777a7(0x2e6)?_0x1d97f9[_0x4777a7(0x50b)](_0x5dfbd9,-0x908+0xae3+-0x1db):_0xf7863c?-0x2*-0x4a2+0x767+-0x10aa:0x174d+-0x1db*-0x9+-0x14*0x200)&&_0x250c65(_0x1d97f9['RmVfE'](_0x5ed350,_0x27260a)+_0x379487['activ'+'e'],'u8',-0x267f+0x157*0xf+0x6*0x311);}});_0x179f13['input'][_0x296c5d(0xa1)+'et'][_0x296c5d(0x80b)]='x';var _0x4f320e=_0x5591fc['jdLfZ'](_0x422836,_0x296c5d(0x9f9)+'plier',_0x296c5d(0xbc9)+'F6\x20al'+'so\x20st'+_0x296c5d(0xb8a)+'is');_0x4f320e[_0x296c5d(0x3df)+_0x296c5d(0x566)+'d'](_0x179f13),_0x3bd010['body'][_0x296c5d(0x3df)+'dChil'+'d'](_0x4f320e);if(_0x285db8['lengt'+'h']){var _0x313123=_0x5591fc['lUCoY'](_0x5efdbe,'div',_0x296c5d(0xaf4)+'te','Refus'+_0x296c5d(0x556)+_0x285db8[_0x296c5d(0x4a5)](0x1f7f*-0x1+0x1e55+0x95*0x2,-0x54b+-0x9e+0x5ed*0x1)['map'](function(_0x2e9b1d){var _0x4c030a=_0x296c5d;return'0x'+(_0x2e9b1d['o']<-0x1*0x135a+-0x2*0x99a+0x268e?'?':_0x2e9b1d['o']['toStr'+_0x4c030a(0x9e7)](0x24*-0x53+-0x688+-0x4*-0x491))+'\x20('+_0x2e9b1d['why']+')';})[_0x296c5d(0x1ed)]('\x20\x20'));_0x3bd010['body']['appen'+_0x296c5d(0x566)+'d'](_0x313123);}_0x1e9360['push'](_0x3bd010);var _0x375749=_0x5ba8cb(_0x5591fc['jKSns']),_0x57dd94=_0x5efdbe(_0x296c5d(0x568)+'n',_0x5591fc['uxKyq'],_0x5591fc['SESTp']);_0x57dd94['type']='butto'+'n',_0x57dd94[_0x296c5d(0x898)+'ck']=function(){var _0x470ac4=_0x296c5d;_0x314eea(_0x470ac4(0x34a)+'hot');},_0x375749['body'][_0x296c5d(0x3df)+_0x296c5d(0x566)+'d'](_0x5591fc['YloHz'](_0x5efdbe,'div',_0x296c5d(0x351)+_0x296c5d(0x72c),_0x5591fc['LdVCJ'])),_0x375749['body']['appen'+_0x296c5d(0x566)+'d'](_0x57dd94),_0x1e9360['push'](_0x375749);}}if(_0x5591fc['HdtpB'](_0x4bde95,'visua'+'ls')){var _0xb64707=_0x5ba8cb(_0x296c5d(0x238),_0x30c840['on']),_0x34bdcf=_0x422836(_0x5591fc[_0x296c5d(0xac)]);_0x34bdcf[_0x296c5d(0x3df)+_0x296c5d(0x566)+'d'](_0x64f32f(function(){var _0x29d8ce=_0x296c5d,_0x6093ec={'lljPb':function(_0x2e34e7,_0x9eccf9){var _0x545445=_0x3f00;return _0x5591fc[_0x545445(0x741)](_0x2e34e7,_0x9eccf9);}};if(_0x29d8ce(0x889)!==_0x5591fc[_0x29d8ce(0x865)])return _0x30c840['on'];else try{if(!_0xec01e||!_0x50de35)return null;var _0x36da4b=new _0x47d322(_0x3040f9)['getCl'+'assNa'+'me']();return _0x6093ec[_0x29d8ce(0x871)](_0x36da4b,_0x162360)?null:_0x36da4b;}catch(_0xf89630){return null;}},function(_0x4bc4cb){var _0x3295b6=_0x296c5d,_0x484a7c={'Zvcui':function(_0x41f7f1,_0x420052){return _0x41f7f1*_0x420052;}};if(_0x1d97f9[_0x3295b6(0xb22)](_0x1d97f9['hxAPV'],'nmmoI'))return _0x11dfc3[_0x3295b6(0x2ff)](_0x484a7c['Zvcui'](_0x44c00b,0x1eb5+-0x11*0x242+0x811))/(0x4f2*0x4+-0x15bf+-0x1*-0x25b);else _0x18cf9e(_0x4bc4cb,_0x30c840[_0x3295b6(0x82e)]);})),_0xb64707['body']['appen'+'dChil'+'d'](_0x5efdbe(_0x5591fc[_0x296c5d(0x167)],_0x5591fc[_0x296c5d(0xb54)],_0x296c5d(0x8c6)+_0x296c5d(0x4b2)+'e\x20min'+_0x296c5d(0x50e)+_0x296c5d(0x21e)+'right'+'.\x20Nee'+_0x296c5d(0x9e0)+'ly\x20po'+_0x296c5d(0xbbc)+'ns.')),_0xb64707['body']['appen'+_0x296c5d(0x566)+'d'](_0x34bdcf);var _0x3c3298=_0x5591fc['HGsYX'](_0x3a4759,0x1*0x11c9+-0x152+-0x104f,0x10*-0x26c+0x9e8*0x2+0x1390,0x3*0xa13+0x59a+0x1*-0x23c9,function(){return _0x30c840['span'];},function(_0x4a84e8){var _0x2192c4=_0x296c5d;_0x30c840[_0x2192c4(0x5b0)]=_0x4a84e8;});_0x3c3298[_0x296c5d(0x125)]['datas'+'et'][_0x296c5d(0x80b)]='m';var _0x28f77e=_0x5591fc[_0x296c5d(0xbd1)](_0x422836,'Range',_0x296c5d(0x7a9)+'\x20unit'+_0x296c5d(0x545)+_0x296c5d(0xa91)+'he\x20ra'+_0x296c5d(0xa74));_0x28f77e['appen'+_0x296c5d(0x566)+'d'](_0x3c3298),_0xb64707[_0x296c5d(0x7ef)][_0x296c5d(0x3df)+_0x296c5d(0x566)+'d'](_0x28f77e),_0x1e9360[_0x296c5d(0xb4)](_0xb64707);var _0x396cfb=_0x5591fc['PdHrI'](_0x5ba8cb,_0x5591fc['QgYVi'],_0x30c840[_0x296c5d(0x82e)]),_0x30941d=_0x422836(_0x296c5d(0x94a)+'ed');_0x30941d[_0x296c5d(0x3df)+'dChil'+'d'](_0x5591fc[_0x296c5d(0x9ca)](_0x64f32f,function(){var _0x18c999=_0x296c5d,_0x52e2d1={'EJZsD':_0x18c999(0x786),'wybSs':_0x18c999(0x72f)+'l','RZWma':_0x1d97f9[_0x18c999(0xa33)],'nQmCw':function(_0xe5d8f8,_0x49caef){var _0x5f2367=_0x18c999;return _0x1d97f9[_0x5f2367(0xb5f)](_0xe5d8f8,_0x49caef);}};if(_0x1d97f9[_0x18c999(0x925)](_0x18c999(0xa2d),_0x1d97f9[_0x18c999(0x9fc)])){var _0x14d52a=_0x3edd86(_0x52e2d1[_0x18c999(0x91f)],_0x52e2d1[_0x18c999(0x8f4)]),_0x2f027b=_0x561c04(_0x18c999(0x786),_0x52e2d1['RZWma'],_0x549502+(_0x921c75?_0x52e2d1[_0x18c999(0xb6a)](_0x18c999(0x8f8)+'\x20clas'+'s=\x27sk'+'-hint'+'\x27>',_0x52963a)+('</spa'+'n>'):''));return _0x14d52a[_0x18c999(0x3df)+_0x18c999(0x566)+'d'](_0x2f027b),_0x14d52a;}else return _0x30c840[_0x18c999(0x82e)];},function(_0x3a5eed){var _0x24aff5=_0x296c5d,_0x3d1344={'adtus':function(_0x3913c3){return _0x3913c3();},'Kcllu':function(_0x5054be,_0x403a73){return _0x5054be+_0x403a73;}};if(_0x24aff5(0x3ad)===_0x5591fc['WKvNx']){var _0x3fbe8c=(_0x24aff5(0x89c)+'|0|5|'+_0x24aff5(0x378))['split']('|'),_0x484fc2=0xdfe+-0x1*0x19a4+0x15*0x8e;while(!![]){switch(_0x3fbe8c[_0x484fc2++]){case'0':_0x54e0ce[_0x24aff5(0x37a)+_0x24aff5(0x82a)+'ptr']=_0x32c7b5[_0x24aff5(0x718)+'Look'];continue;case'1':if(!_0x32c7b5)return _0x54e0ce;continue;case'2':var _0x32c7b5=_0x3d1344['adtus'](_0xc6f5a8);continue;case'3':return _0x54e0ce;case'4':var _0x54e0ce={};continue;case'5':for(var _0x41badc in _0x32c7b5[_0x24aff5(0x62a)+'s'])_0x54e0ce[_0x3d1344[_0x24aff5(0x9d4)]('Mouse'+'Look+',_0x41badc)]=_0x32c7b5[_0x24aff5(0x62a)+'s'][_0x41badc];continue;case'6':if(_0x32c7b5[_0x24aff5(0x158)+'a'])_0x54e0ce[_0x24aff5(0x37a)+_0x24aff5(0x87f)+'camer'+'a']=_0x32c7b5[_0x24aff5(0x158)+'a'];continue;}break;}}else{if(_0x3a5eed&&!_0x5591fc['eVDMn'](_0x2bb59f)){_0x460173();return;}_0x5591fc[_0x24aff5(0xaac)](_0x18cf9e,!![],_0x3a5eed);}}));var _0x3b1bd3=_0x2e0113&&_0x2e0113['angle'+'s'];_0x396cfb[_0x296c5d(0x7ef)]['appen'+'dChil'+'d'](_0x5efdbe(_0x296c5d(0x786),_0x296c5d(0x351)+_0x296c5d(0x72c),_0x3b1bd3&&!_0x3b1bd3[_0x296c5d(0xb93)+'ified']?_0x5591fc['AIvlD']('Not\x20d'+'rawin'+'g.\x20',_0x3b1bd3[_0x296c5d(0x41a)]||_0x5591fc['zsnUk'])+('\x20-\x20th'+'ese\x20t'+'wo\x20fl'+'oats\x20'+_0x296c5d(0x603)+'ot\x20pi'+'tch\x20a'+_0x296c5d(0x37c)+'w.\x20Pr'+'ess\x20F'+_0x296c5d(0x17e)+'rn\x20ab'+'out\x209'+'0°,\x20p'+_0x296c5d(0x6c3)+_0x296c5d(0x8c2)):_0x3b1bd3&&!_0x3b1bd3[_0x296c5d(0x49f)+'ne']?_0x5591fc[_0x296c5d(0x712)](_0x5591fc[_0x296c5d(0x31c)],Math['round'](_0x3b1bd3['fov']))+(_0x296c5d(0x85a)+_0x296c5d(0x27e)+'\x20the\x20'+_0x296c5d(0x2b8)+'band.'+'\x20Rese'+_0x296c5d(0x9f2)+'below'+'.'):_0x296c5d(0x214)+_0x296c5d(0x6a3)+'ce\x20bo'+_0x296c5d(0x56d)+_0x296c5d(0x698)+'ield\x20'+'of\x20vi'+_0x296c5d(0x32f)+_0x296c5d(0xafc)+_0x296c5d(0x9cc)+_0x296c5d(0xbdf)+_0x296c5d(0x713)+_0x296c5d(0xa94)+'ild,\x20'+_0x296c5d(0x39b)+'\x20is\x20f'+'itted'+_0x296c5d(0x84b)+'ye.')),_0x396cfb[_0x296c5d(0x7ef)]['appen'+_0x296c5d(0x566)+'d'](_0x30941d);var _0x523384=_0x3a4759(-0x145d+-0x8e*0x2f+0x397*0xd,-0x13fc+-0x2*-0xd99+-0x6b4,0x202+-0xd2c+0xb2c,function(){var _0x3d767b=_0x296c5d;if(_0x5591fc[_0x3d767b(0x24b)]===_0x5591fc['UPpGw'])return _0x594e08[_0x3d767b(0x26a)];else _0x569274[_0x3d767b(0x3d7)+'em'](_0x127e50,_0x21f556[_0x3d767b(0xa97)+_0x3d767b(0x6d7)](_0x5d68da['pos']));},function(_0x49c4fe){var _0x19f492=_0x296c5d;_0x594e08[_0x19f492(0x26a)]=_0x49c4fe,_0x20e54e();});_0x523384['input']['datas'+'et']['unit']='°';var _0x97a914=_0x5591fc['XdFJI'](_0x422836,_0x296c5d(0x9a6)+_0x296c5d(0x856)+_0x296c5d(0xb1b),_0x5591fc[_0x296c5d(0x283)]);_0x97a914[_0x296c5d(0x3df)+_0x296c5d(0x566)+'d'](_0x523384);var _0x160285=_0x422836(_0x296c5d(0x345)+_0x296c5d(0xb3c),_0x5591fc[_0x296c5d(0x9bd)]),_0x248a65=_0x5591fc[_0x296c5d(0x24c)](_0x5efdbe,_0x296c5d(0x568)+'n',_0x296c5d(0xbc2)+'n',_0x296c5d(0x345));_0x248a65[_0x296c5d(0x5e6)+_0x296c5d(0x622)+_0x296c5d(0xb2c)+'r'](_0x296c5d(0xb83),function(){var _0x5451dc=_0x296c5d;if(_0x5451dc(0x8a7)!==_0x1d97f9['tkUJj'])_0x594e08[_0x5451dc(0x26a)]=-0x7c1*0x1+0x234d*0x1+-0x1b41,_0x20e54e(),_0x1d97f9[_0x5451dc(0x2fa)](_0x356c62,_0x4608e2['cat']);else return{'pos':null,'posAt':null,'inBand':0x0,'cluster':0x0,'reach':0x0};}),_0x160285[_0x296c5d(0x3df)+_0x296c5d(0x566)+'d'](_0x248a65),_0x396cfb[_0x296c5d(0x7ef)]['appen'+'dChil'+'d'](_0x97a914),_0x396cfb['body'][_0x296c5d(0x3df)+_0x296c5d(0x566)+'d'](_0x160285);var _0x154e47=_0x2e0113&&_0x2e0113['view'];_0x396cfb[_0x296c5d(0x7ef)][_0x296c5d(0x3df)+'dChil'+'d'](_0x5efdbe(_0x5591fc[_0x296c5d(0x167)],_0x5591fc['OBBeY'],_0x5591fc['mzDdJ'](_0x5591fc['tjQjC'](_0x296c5d(0xa27)+'\x20',_0x154e47?_0x154e47[_0x296c5d(0x718)+'Look']?_0x5591fc[_0x296c5d(0x8dd)](_0x5591fc[_0x296c5d(0x745)]+_0x154e47['mouse'+'Look'],_0x154e47['camer'+'a']?_0x5591fc[_0x296c5d(0x5a0)](_0x296c5d(0x4f3)+'era\x20',_0x154e47['camer'+'a']):''):_0x5591fc[_0x296c5d(0x65c)]:_0x5591fc['BQsBp'])+(_0x3b1bd3?'\x0a'+(_0x3b1bd3['sourc'+'e']===_0x5591fc['eSlBT']?_0x5591fc[_0x296c5d(0x48e)](_0x5591fc[_0x296c5d(0x510)](_0x5591fc['WTVnr'](_0x5591fc['EKxOw'](_0x5591fc[_0x296c5d(0xb35)]+_0x3b1bd3['yawAt'],_0x296c5d(0xbfe))+Math[_0x296c5d(0x2ff)](_0x3b1bd3[_0x296c5d(0x352)+'w']),_0x296c5d(0xad2)+'h\x20'),_0x3b1bd3['pitch'+'At']),_0x296c5d(0xbfe))+Math[_0x296c5d(0x2ff)](_0x3b1bd3[_0x296c5d(0xaa)+_0x296c5d(0xb0b)]):_0x5591fc[_0x296c5d(0x66d)]):''),_0x15e589?_0x296c5d(0x3db)+'ared\x20'+_0x296c5d(0x9b7)+'le\x20sa'+_0x296c5d(0x4a0)+_0x296c5d(0xc06)+_0x296c5d(0x443):''))),_0x1e9360[_0x296c5d(0xb4)](_0x396cfb);}if(_0x5591fc[_0x296c5d(0x775)](_0x4bde95,_0x5591fc[_0x296c5d(0xaeb)])){var _0x2304b6=[[_0x5591fc['yqnJh'],_0x296c5d(0x70a)+'ON',_0x2e0113?_0x2e0113['versi'+'on']:'-'],[_0x296c5d(0x57a),_0x5591fc['HcHon'],_0x2e0113?_0x5591fc[_0x296c5d(0xbe2)](_0x5591fc['idABv'](_0x2e0113['hooks'+_0x296c5d(0x8f5)+'ed'],_0x296c5d(0x867)),_0x2e0113[_0x296c5d(0x489)+'Regis'+_0x296c5d(0x7d7)+'AtArm']):'-'],[_0x296c5d(0x247),_0x5591fc[_0x296c5d(0x15b)],_0x2e0113&&_0x2e0113['wasmM'+_0x296c5d(0x714)]&&_0x2e0113[_0x296c5d(0xbf4)+_0x296c5d(0x714)]['captu'+'red']?_0x5591fc['PdIof'](Math['round'](_0x5591fc[_0x296c5d(0x410)](_0x2e0113['wasmM'+_0x296c5d(0x714)]['bytes'],0xbf5e5+-0x8e3cd+-0x1c*-0x7636))+('\x20MB\x20@'+'\x20')+_0x2e0113['wasmM'+'emory']['atMs'],'ms'):'-'],['Playe'+'rs',_0x296c5d(0x7c9)+_0x296c5d(0x197)+_0x296c5d(0xa5a)+'nc',_0x2e0113&&_0x2e0113['esp']?_0x5591fc['Fklxw'](String,_0x2e0113[_0x296c5d(0x6e9)][_0x296c5d(0x463)+_0x296c5d(0x7c6)+'t']):'-'],[_0x296c5d(0x855)+'es',_0x296c5d(0x759)+'one\x20b'+'ut\x20yo'+'u',_0x2e0113&&_0x2e0113['esp']?String(_0x2e0113[_0x296c5d(0x6e9)][_0x296c5d(0x14b)+_0x296c5d(0xbed)]):'-'],['Camer'+'a','off\x20t'+'he\x20li'+_0x296c5d(0x227)+'nager',_0x2e0113&&_0x2e0113['esp']&&_0x2e0113['esp']['camer'+'a']?_0x5591fc[_0x296c5d(0x35f)](_0x5591fc['RoSfQ'](_0x2e0113[_0x296c5d(0x6e9)][_0x296c5d(0x158)+'a'],'\x20(')+_0x2e0113['esp'][_0x296c5d(0x158)+_0x296c5d(0x97e)],')'):'-']];for(_0x52eca9=-0xd8c+0x1d34+-0x3*0x538;_0x5591fc[_0x296c5d(0x5a9)](_0x52eca9,_0x2304b6['lengt'+'h']);_0x52eca9++){var _0x164631=_0x422836(_0x2304b6[_0x52eca9][0x1f*-0x68+0x1e2*0x12+-0x154c]),_0x366459=_0x5efdbe(_0x5591fc[_0x296c5d(0x4a9)],_0x5591fc[_0x296c5d(0x6b7)]);_0x366459[_0x296c5d(0xd5)][_0x296c5d(0x58f)+'dth']='0',_0x366459[_0x296c5d(0xd5)]['flex']='1',_0x366459[_0x296c5d(0xd5)]['textA'+'lign']=_0x296c5d(0x521),_0x366459[_0x296c5d(0x173)+'onten'+'t']=_0x5591fc['YOrgH'](String,_0x2304b6[_0x52eca9][-0x1826+0xfb*-0x1+0x1923]),_0x366459[_0x296c5d(0xa1)+'et']['k']=_0x2304b6[_0x52eca9][-0x1*0x195f+-0x852+0x21b2],_0x164631['appen'+_0x296c5d(0x566)+'d'](_0x366459);var _0x232aa2=_0x1e9360[_0x296c5d(0xa6a)+'h']?_0x1e9360[_0x1e9360['lengt'+'h']-(0x64c+-0x29*-0x3d+0x808*-0x2)]:null;!_0x232aa2&&(_0x232aa2=_0x5ba8cb('Sessi'+'on',![]),_0x1e9360[_0x296c5d(0xb4)](_0x232aa2)),_0x232aa2[_0x296c5d(0x7ef)]['appen'+'dChil'+'d'](_0x164631),_0x232aa2[_0x296c5d(0x7ef)][_0x296c5d(0x40e)+_0x296c5d(0x474)]['sp']=_0x366459;}var _0x264b1e=_0x5591fc[_0x296c5d(0xa79)](_0x5ba8cb,_0x296c5d(0x2eb)+'r',![]),_0x19abc2=[[_0x5591fc[_0x296c5d(0xb2a)],_0x2e0113&&_0x2e0113['local']&&_0x2e0113[_0x296c5d(0x6ab)][_0x296c5d(0x225)]?_0x5591fc[_0x296c5d(0x2a6)](_0x296c5d(0x4e2)+'ntrol'+'ler+',_0x2e0113[_0x296c5d(0x6ab)][_0x296c5d(0x225)]):_0x296c5d(0x4e2)+_0x296c5d(0xb29)+_0x296c5d(0x92f),_0x2e0113&&_0x2e0113[_0x296c5d(0x6ab)]&&_0x2e0113[_0x296c5d(0x6ab)][_0x296c5d(0xb9b)]?_0x2e0113['local']['feet']['map'](function(_0x34f8c6){var _0x208662=_0x296c5d;if('xOZGs'===_0x208662(0x891))return Math[_0x208662(0x2ff)](_0x34f8c6*(0x193d+0x13a7+-0x2c80))/(-0xdcd*-0x2+0x4dc+-0x2012);else{var _0x15f1b6=_0x13b0ff['inner'+'Heigh'+'t']||-0x2661+-0x1c87+0x2*0x2304;if(_0x15f1b6<0x1*-0x110b+-0x2*-0xe59+0x8b*-0x11)_0x1d97f9['Ibazq'](_0x516da7,![]);}})['join']('\x20\x20'):'-'],[_0x296c5d(0xb77),_0x5591fc['fJavK']('+',_0x577cc5)+'m',_0x2e0113&&_0x2e0113[_0x296c5d(0x6ab)]&&_0x2e0113['local'][_0x296c5d(0x7df)]?_0x2e0113[_0x296c5d(0x6ab)][_0x296c5d(0x7df)][_0x296c5d(0x497)](function(_0x37ce03){var _0x5641bd=_0x296c5d;return Math[_0x5641bd(0x2ff)](_0x37ce03*(0x557*0x1+-0x26*-0xad+0x1*-0x1ea1))/(0x1dd2+-0x2466+0x6f8);})[_0x296c5d(0x1ed)]('\x20\x20'):'-'],[_0x5591fc[_0x296c5d(0x6f6)],_0x296c5d(0x7b5),_0x5591fc['EmoAz'](_0x4b3936,_0x2e0113,'FPSco'+'ntrol'+'ler',0x9*0x1d+-0x1d02+-0xa7*-0x2b)],[_0x296c5d(0x263)+_0x296c5d(0x32e)+'ed',_0x5591fc[_0x296c5d(0x970)],_0x5591fc['lUCoY'](_0x4b3936,_0x2e0113,'FPSco'+'ntrol'+'ler',-0x8fd+-0x1*-0x108+-0xbf*-0xb)],[_0x296c5d(0x734)+_0x296c5d(0x7e0)+'t',_0x296c5d(0x9a8),_0x5591fc[_0x296c5d(0x24c)](_0x4b3936,_0x2e0113,'FPSco'+_0x296c5d(0xb29)+_0x296c5d(0x92f),-0x17*0x13e+0x1380+-0x2*-0x517)],[_0x296c5d(0x107)+'h','Healt'+_0x296c5d(0x954)+_0x296c5d(0x6c6)+'C0',_0x5591fc[_0x296c5d(0x89e)](_0x4b3936,_0x2e0113,_0x296c5d(0x107)+'hScri'+'pt',0xa7d+0x1*0x190+-0xb4d)]];for(_0x52eca9=0xa0d*0x1+-0xf59+-0x54c*-0x1;_0x5591fc[_0x296c5d(0x369)](_0x52eca9,_0x19abc2[_0x296c5d(0xa6a)+'h']);_0x52eca9++){var _0x55bd0e=_0x5591fc[_0x296c5d(0x4b7)](_0x422836,_0x19abc2[_0x52eca9][0x24f*0x4+-0x1*0x15b+-0x7e1]),_0x20ce7f=_0x5efdbe(_0x5591fc[_0x296c5d(0x4a9)],_0x296c5d(0x7af)+'l');_0x20ce7f[_0x296c5d(0xd5)][_0x296c5d(0x58f)+_0x296c5d(0xbac)]='0',_0x20ce7f['style']['flex']='1',_0x20ce7f[_0x296c5d(0xd5)]['textA'+_0x296c5d(0x923)]=_0x5591fc[_0x296c5d(0x34c)],_0x20ce7f[_0x296c5d(0x173)+'onten'+'t']=_0x5591fc['AceAZ'](String,_0x19abc2[_0x52eca9][0x1*-0x1b8d+-0x1008+0x2b97*0x1]),_0x20ce7f['datas'+'et']['k']=_0x19abc2[_0x52eca9][0xf3b+0x1*-0x1c5f+0x5*0x2a1],_0x55bd0e[_0x296c5d(0x3df)+'dChil'+'d'](_0x20ce7f),_0x264b1e['body']['appen'+_0x296c5d(0x566)+'d'](_0x55bd0e),_0x264b1e['body'][_0x296c5d(0x40e)+'hild']['sp']=_0x20ce7f;}_0x1e9360[_0x296c5d(0xb4)](_0x264b1e);}if(_0x4bde95===_0x5591fc[_0x296c5d(0x921)]){var _0x3a2f2c=_0x5591fc['asrFz'](_0x5ba8cb,_0x296c5d(0x78d)+_0x296c5d(0x619)+'s',![]),_0x4afac2=_0x2e0113&&_0x2e0113[_0x296c5d(0x2d4)+'ngs']&&_0x2e0113[_0x296c5d(0x2d4)+'ngs']['lengt'+'h']?_0x2e0113['warni'+_0x296c5d(0x47b)]['join']('\x0a'):_0x296c5d(0x532)+_0x296c5d(0x893)+'s';_0x3a2f2c[_0x296c5d(0x7ef)][_0x296c5d(0x3df)+'dChil'+'d'](_0x5efdbe(_0x5591fc[_0x296c5d(0x167)],_0x296c5d(0xbcf)+'e',_0x4afac2)),_0x1e9360[_0x296c5d(0xb4)](_0x3a2f2c);var _0x5573cb=_0x5ba8cb('Repor'+'t',![]),_0x101ab9=_0x5efdbe(_0x5591fc[_0x296c5d(0x1b8)],'sk-bt'+'n',_0x5591fc['Fxrze']);_0x101ab9['type']=_0x5591fc[_0x296c5d(0x1b8)],_0x101ab9['oncli'+'ck']=function(){var _0x1c6604=_0x296c5d;if(_0x5591fc[_0x1c6604(0x46f)]==='NJevE'){if(_0x542ca9[_0x27da10]['conte'+'ntWin'+_0x1c6604(0x27b)])_0x695c00[_0x2a18ca][_0x1c6604(0x738)+'ntWin'+'dow'][_0x1c6604(0x10a)+_0x1c6604(0x95)+'e'](_0x546220,'*');}else try{var _0x2bd197=_0x5591fc[_0x1c6604(0x3ab)](_0x2aa061+'\x0a'+JSON['strin'+'gify'](_0x2e0113,null,0x8bb+0x1*0xe5c+0x7b2*-0x3)+'\x0a',_0x5b81c7);if(navigator['clipb'+_0x1c6604(0x607)]&&navigator[_0x1c6604(0x336)+_0x1c6604(0x607)][_0x1c6604(0x646)+'Text'])navigator[_0x1c6604(0x336)+'oard'][_0x1c6604(0x646)+_0x1c6604(0x2fd)](_0x2bd197)[_0x1c6604(0x398)](function(){var _0x2754d9=_0x1c6604;_0x101ab9[_0x2754d9(0x173)+_0x2754d9(0x3f4)+'t']=_0x2754d9(0xbf2)+'d';});else _0x101ab9[_0x1c6604(0x173)+_0x1c6604(0x3f4)+'t']=_0x5591fc[_0x1c6604(0x484)];}catch(_0x100b87){if(_0x1c6604(0x1cc)!==_0x1c6604(0x1cc))try{_0x1d97f9[_0x1c6604(0x66f)](_0x4bfd22);}catch(_0x2ee388){}else _0x101ab9['textC'+'onten'+'t']=_0x1c6604(0xf3)+'faile'+'d';}},_0x5573cb[_0x296c5d(0x7ef)]['appen'+_0x296c5d(0x566)+'d'](_0x5591fc['DIwgr'](_0x5efdbe,'div',_0x5591fc['nmFuG'],_0x296c5d(0x912)+'\x20the\x20'+'whole'+'\x20thin'+'g\x20whe'+'n\x20som'+_0x296c5d(0x3b3)+'g\x20loo'+_0x296c5d(0x328)+_0x296c5d(0x46e))),_0x5573cb['body'][_0x296c5d(0x3df)+_0x296c5d(0x566)+'d'](_0x101ab9),_0x1e9360[_0x296c5d(0xb4)](_0x5573cb);}return _0x1e9360;}function _0x22762c(){var _0x2122a4=_0x3e6ad4;if(_0x4608e2[_0x2122a4(0x199)])_0x1f5263(!![]);}function _0x19b991(){var _0x47c94f=_0x3e6ad4;try{var _0x4877e4=localStorage['getIt'+'em'](_0x476786);if(!_0x4877e4)return;var _0x11a7a7=JSON[_0x47c94f(0x944)](_0x4877e4);if(_0x11a7a7&&typeof _0x11a7a7['x']==='numbe'+'r'&&typeof _0x11a7a7['y']===_0x5591fc[_0x47c94f(0x1fc)])_0x4608e2[_0x47c94f(0x61a)]=_0x11a7a7;}catch(_0x38d4e9){}}function _0x20cdba(){var _0x43cbc8=_0x3e6ad4,_0xe8b545={'OGfEb':_0x43cbc8(0xb89)+'b','kHNJp':_0x5591fc[_0x43cbc8(0x4aa)]};try{if(_0x43cbc8(0x298)!=='qDxGT')localStorage['setIt'+'em'](_0x476786,JSON['strin'+'gify'](_0x4608e2['pos']));else{_0x45301c[_0x43cbc8(0x4da)]=_0x2a1771,_0x5b39e4[_0x43cbc8(0x96f)]=[];if(!_0x43992b['cols'])return;var _0x1ae59e=null;for(var _0x39a149=0x295+-0x1*0x3cc+-0x137*-0x1;_0x39a149<_0x4c3293[_0x43cbc8(0xa6a)+'h'];_0x39a149++)if(_0x1aff22[_0x39a149]['id']===_0x4189de)_0x1ae59e=_0x4dcd0e[_0x39a149];_0x3dd27f[_0x43cbc8(0xa5)][_0x43cbc8(0x173)+_0x43cbc8(0x3f4)+'t']=_0x43cbc8(0x9c0)+_0x43cbc8(0x271)+_0x43cbc8(0x530)+_0x43cbc8(0x481)+(_0x1ae59e&&_0x1ae59e['label']||'?');for(var _0x1d24c7 in _0x314b9a[_0x43cbc8(0x568)+'ns']){if(_0x32a231['butto'+'ns'][_0x1d24c7][_0x43cbc8(0x9ed)+_0x43cbc8(0xb52)])_0x1433b4['butto'+'ns'][_0x1d24c7][_0x43cbc8(0x9ed)+_0x43cbc8(0x624)]=_0xe8b545[_0x43cbc8(0x12f)]+(_0x1d24c7===_0x231ce2?_0xe8b545[_0x43cbc8(0x731)]:'');}var _0x56ba9e=[];try{_0x56ba9e=_0x2973f4(_0x15495e);}catch(_0xecdd0e){_0x56ba9e=[];}while(_0x5c48e4[_0x43cbc8(0x625)]['first'+_0x43cbc8(0x2a2)])_0x1746a9[_0x43cbc8(0x625)][_0x43cbc8(0x768)+_0x43cbc8(0xa8)+'d'](_0x853593[_0x43cbc8(0x625)][_0x43cbc8(0x3e1)+_0x43cbc8(0x2a2)]);for(var _0x144b72=-0x4ea+0x20df+-0x11*0x1a5;_0x144b72<_0x56ba9e[_0x43cbc8(0xa6a)+'h'];_0x144b72++)_0x499ad6['cols'][_0x43cbc8(0x3df)+_0x43cbc8(0x566)+'d'](_0x56ba9e[_0x144b72]);}}catch(_0x355d92){}}function _0x2bcc96(){var _0x26be21=_0x3e6ad4;if(_0x26be21(0x453)===_0x26be21(0x453)){var _0x18179f=_0x4608e2[_0x26be21(0x479)];if(!_0x18179f||!_0x18179f['style'])return;_0x4608e2[_0x26be21(0x61a)]?(_0x18179f[_0x26be21(0xd5)][_0x26be21(0xb3f)]=_0x4608e2['pos']['x']+'px',_0x18179f[_0x26be21(0xd5)]['top']=_0x4608e2['pos']['y']+'px',_0x18179f[_0x26be21(0xd5)][_0x26be21(0x521)]=_0x5591fc['mJfBX'],_0x18179f['style'][_0x26be21(0x3fa)+'m']=_0x26be21(0x4ef)):(_0x18179f[_0x26be21(0xd5)][_0x26be21(0xb3f)]='auto',_0x18179f['style'][_0x26be21(0x92)]=_0x26be21(0x4ef),_0x18179f[_0x26be21(0xd5)]['right']=_0x26be21(0x3a5),_0x18179f[_0x26be21(0xd5)]['botto'+'m']='24px');}else try{_0x44b624();}catch(_0x3c3674){}}function _0x8298ed(_0x27af38,_0x1ac09f){var _0x41f2c7=_0x3e6ad4,_0x278fe2={'HQPJV':function(_0x27704c,_0x4548b5){return _0x27704c===_0x4548b5;},'PnvrT':_0x5591fc['htcZe'],'QcnmF':function(_0x934e4,_0x457d81){var _0x401e4f=_0x3f00;return _0x5591fc[_0x401e4f(0x3cc)](_0x934e4,_0x457d81);},'HrVdL':function(_0x44028a,_0x4737d1){var _0x142694=_0x3f00;return _0x5591fc[_0x142694(0x662)](_0x44028a,_0x4737d1);},'YGkfo':'auto','tyWZH':function(_0x108c36,_0x498812){return _0x108c36===_0x498812;},'kSvvb':_0x5591fc[_0x41f2c7(0x974)],'yCLJs':function(_0x976c00,_0x608ac5){var _0x2e9ab1=_0x41f2c7;return _0x5591fc[_0x2e9ab1(0x8a4)](_0x976c00,_0x608ac5);},'NsEWr':_0x41f2c7(0x5fa)+'e','UchgH':function(_0x5e42fb,_0x421488){return _0x5e42fb!==_0x421488;},'XBdXp':_0x5591fc['LqJKp'],'MFNZO':function(_0x1c9109,_0x114ffd){return _0x5591fc['NmFJX'](_0x1c9109,_0x114ffd);},'oSYOd':function(_0x39b470,_0x50ef88){var _0x5a3da2=_0x41f2c7;return _0x5591fc[_0x5a3da2(0x429)](_0x39b470,_0x50ef88);}};if(_0x5591fc['KqCuO'](_0x41f2c7(0x179),_0x41f2c7(0x632)))_0x4e9dc2['xyz']=_0x5d32b0,_0x1e251d['v']=_0x29ac98[-0x130f+0x219f+-0xe90];else try{if(_0x5591fc[_0x41f2c7(0x643)]('PHodP',_0x41f2c7(0xa84))){var _0x2eb8c7=![],_0x397ae3=-0x1*0x33b+-0x25a5+0x4*0xa38,_0x5b08bc=-0x1635+0xfd9*-0x1+0x260e;_0x1ac09f[_0x41f2c7(0xd5)]['curso'+'r']='grab',_0x1ac09f[_0x41f2c7(0xd5)]['touch'+_0x41f2c7(0x4bd)+'n']='none';var _0x316144=function(_0x12ac9b){var _0x9a7616=_0x41f2c7;_0x2eb8c7=!![],_0x1ac09f[_0x9a7616(0xd5)][_0x9a7616(0x6ac)+'r']=_0x278fe2[_0x9a7616(0xb60)];var _0x52fe54={'left':parseFloat(_0x27af38[_0x9a7616(0xd5)][_0x9a7616(0xb3f)])||0x211e+0x3e3+-0x2501,'top':parseFloat(_0x27af38['style'][_0x9a7616(0x92)])||0x1faa+0x705*-0x3+0x389*-0x3};if(!_0x27af38[_0x9a7616(0xd5)][_0x9a7616(0xb3f)]||_0x27af38[_0x9a7616(0xd5)]['left']==='auto'){if(_0x278fe2['QcnmF'](_0x9a7616(0x776),_0x9a7616(0x266)))return _0x496ad5[_0x9a7616(0xa86)+'r'];else _0x52fe54[_0x9a7616(0xb3f)]=(window['inner'+_0x9a7616(0x4f9)]||-0x207b+-0x830+0x1*0x28ab)-(_0x27af38[_0x9a7616(0x9b9)+_0x9a7616(0x694)+'h']||0x171*0x1a+0x2453+-0x3*0x17cb)-(0x10f4+0x18df+0x4a3*-0x9);}if(!_0x27af38['style']['top']||_0x278fe2[_0x9a7616(0xa55)](_0x27af38['style'][_0x9a7616(0x92)],_0x278fe2[_0x9a7616(0x804)])){if(_0x278fe2[_0x9a7616(0xbd6)](_0x9a7616(0x7f9),_0x278fe2['kSvvb']))try{return _0x278fe2[_0x9a7616(0x499)](_0x1ab715['getIt'+'em'](_0x2fdc72),'1');}catch(_0x27ad0b){return![];}else _0x52fe54[_0x9a7616(0x92)]=_0x278fe2['yCLJs']((window[_0x9a7616(0x51d)+_0x9a7616(0x319)+'t']||0x43*0x39+-0x1646+-0x75b*-0x1)-(_0x27af38['offse'+'tHeig'+'ht']||-0xe03+0x3*0x8ef+0x1*-0xb3a),0x1c46+0x261*0xb+-0x3659);}_0x397ae3=_0x278fe2['yCLJs'](_0x12ac9b[_0x9a7616(0x7b9)+'tX']||0x1b1e+0xf2c+-0x2a4a,_0x52fe54['left']),_0x5b08bc=(_0x12ac9b[_0x9a7616(0x7b9)+'tY']||-0xb*-0x12+-0x1*-0x9d3+0x1*-0xa99)-_0x52fe54['top'];try{'OtZrU'!==_0x9a7616(0x2bf)?_0x2cb0f5=_0x364797(_0x48b5ba):_0x12ac9b[_0x9a7616(0x24a)+_0x9a7616(0x5da)+_0x9a7616(0x3f5)]();}catch(_0x1a10ae){}},_0x3ee86a=function(_0x38c703){var _0x31e339=_0x41f2c7;if(_0x278fe2[_0x31e339(0x36c)]('zgHpF',_0x278fe2['XBdXp'])){var _0xd3f315=_0x1f9d0d['hookP'+_0x31e339(0xa67)]({'typeName':_0x339c43[_0x31e339(0x394)],'methodName':_0x278fe2[_0x31e339(0x450)],'params':['i32',_0x31e339(0x63b)],'returnType':_0x327604},_0x17afc7(_0x52b9e8['type'],_0x3639ef[_0x31e339(0x3be)],_0x5c846d[_0x31e339(0x1a4)]));_0x7c9bfe[_0x31e339(0xb4)]({'type':_0x2b511b['type'],'hook':_0xd3f315,'keep':_0x2f13ed['keep']});}else{if(!_0x2eb8c7)return;var _0x14e1fe=_0x27af38[_0x31e339(0x9b9)+'tWidt'+'h']||0x9d8+-0x10a8+0x93c,_0xa398a6=_0x27af38[_0x31e339(0x9b9)+'tHeig'+'ht']||0x13a9+0x1aff+-0x2d18,_0x489363=(_0x38c703[_0x31e339(0x7b9)+'tX']||0xc*-0x2c2+0x2f1*0x1+-0x1f*-0xf9)-_0x397ae3,_0x35e250=_0x278fe2[_0x31e339(0xa7)](_0x38c703['clien'+'tY']||0x1c8b+-0x234e+0x6c3,_0x5b08bc);_0x489363=Math[_0x31e339(0x29f)](0x7a9*-0x1+-0x1741+0x1ef2,Math['min'](_0x278fe2[_0x31e339(0xa7)](_0x278fe2['MFNZO'](window[_0x31e339(0x51d)+_0x31e339(0x4f9)]||0x268c+0x4*-0x623+0xe*-0x100,_0x14e1fe),-0x2*-0xae1+0x2f*0x9+-0x1761),_0x489363)),_0x35e250=Math['max'](0x13a8+0x3*-0x557+0x1*-0x39b,Math[_0x31e339(0x2ac)](_0x278fe2['oSYOd'](window[_0x31e339(0x51d)+_0x31e339(0x319)+'t']||0xe8c+-0x7f4+-0x698,_0xa398a6)-(0x974+-0x14dd+0x1d*0x65),_0x35e250)),_0x27af38[_0x31e339(0xd5)][_0x31e339(0xb3f)]=_0x489363+'px',_0x27af38[_0x31e339(0xd5)][_0x31e339(0x92)]=_0x35e250+'px',_0x27af38['style']['right']=_0x31e339(0x4ef),_0x27af38['style']['botto'+'m']=_0x31e339(0x4ef),_0x4608e2[_0x31e339(0x61a)]={'x':_0x489363,'y':_0x35e250};}},_0x210433=function(){var _0x196cf9=_0x41f2c7;if(!_0x2eb8c7)return;_0x2eb8c7=![],_0x1ac09f[_0x196cf9(0xd5)][_0x196cf9(0x6ac)+'r']=_0x5591fc[_0x196cf9(0xa49)],_0x5591fc[_0x196cf9(0xa7c)](_0x20cdba);};_0x1ac09f['addEv'+_0x41f2c7(0x622)+_0x41f2c7(0xb2c)+'r'](_0x41f2c7(0x718)+_0x41f2c7(0x3d3),_0x316144),window['addEv'+_0x41f2c7(0x622)+'stene'+'r'](_0x5591fc[_0x41f2c7(0x2da)],_0x3ee86a),window[_0x41f2c7(0x5e6)+'entLi'+_0x41f2c7(0xb2c)+'r']('mouse'+'up',_0x210433),_0x1ac09f[_0x41f2c7(0x5e6)+_0x41f2c7(0x622)+_0x41f2c7(0xb2c)+'r'](_0x41f2c7(0xa60)+_0x41f2c7(0x96a),_0x316144,{'passive':![]}),window['addEv'+'entLi'+_0x41f2c7(0xb2c)+'r']('touch'+_0x41f2c7(0x3ea),_0x3ee86a,{'passive':![]}),window[_0x41f2c7(0x5e6)+_0x41f2c7(0x622)+'stene'+'r'](_0x41f2c7(0xa60)+_0x41f2c7(0x758),_0x210433);}else _0x44e6dc[_0x41f2c7(0x76c)]['enabl'+'ed']=![];}catch(_0x565934){}}function _0x3be0b4(){var _0x4d8048=_0x3e6ad4,_0x42bda8={'UXGTF':function(_0x242d2b,_0x2dacdb){var _0x1aa37d=_0x3f00;return _0x5591fc[_0x1aa37d(0x8e1)](_0x242d2b,_0x2dacdb);},'XkrSr':'Sakur'+_0x4d8048(0x271)+_0x4d8048(0x530)+_0x4d8048(0x89a)+_0x4d8048(0xaa9),'RKQJC':'Sakur'+_0x4d8048(0x271)+_0x4d8048(0x530)+_0x4d8048(0x85b)+'aitin'+'g\x20for'+_0x4d8048(0xb5b)+_0x4d8048(0x399)+_0x4d8048(0x6d2)+'rt)','OtiZC':function(_0x576770,_0x4b35f8){return _0x576770+_0x4b35f8;}};if(_0x4608e2['built'])return _0x4608e2['root'];try{if(!document['body']||!document['body']['appen'+_0x4d8048(0x566)+'d'])return null;if(!document['getEl'+_0x4d8048(0x3ff)+_0x4d8048(0x999)](_0x4d8048(0x6d0)+'a-men'+'u-css')){var _0x35e495=document[_0x4d8048(0x53b)+_0x4d8048(0xa9a)+'ent'](_0x4d8048(0xd5));_0x35e495['id']='sakur'+_0x4d8048(0xaec)+_0x4d8048(0x544),_0x35e495['textC'+_0x4d8048(0x3f4)+'t']=_0x25bb0a,(document[_0x4d8048(0xa5)]||document[_0x4d8048(0xbcd)+_0x4d8048(0x563)+_0x4d8048(0x3ff)])['appen'+_0x4d8048(0x566)+'d'](_0x35e495);}var _0x2967b2=_0x5591fc['KnyQn'](_0x5efdbe,_0x5591fc[_0x4d8048(0x167)],_0x4d8048(0x57d)+_0x4d8048(0x924));_0x2967b2['id']=_0x5591fc['VwxtM'];var _0x1c72e2=_0x5efdbe(_0x5591fc[_0x4d8048(0x167)],_0x5591fc[_0x4d8048(0x8f0)]),_0x1d940a=_0x5591fc['KNKvj'](_0x5efdbe,'div',_0x5591fc['rryWk'],_0x4ad88e);_0x1c72e2['appen'+_0x4d8048(0x566)+'d'](_0x1d940a);var _0x3fb536=_0x5efdbe('div',_0x5591fc['qdyTC']),_0x4cdae7=_0x5591fc[_0x4d8048(0x274)](_0x5efdbe,'div',_0x4d8048(0xbf0)+'p'),_0xaceb26=_0x5efdbe(_0x4d8048(0x786),'mn-ti'+_0x4d8048(0x4e1)),_0x3caf25=_0x5efdbe('div',_0x4d8048(0x7fc),'Sakur'+_0x4d8048(0x271)+'llWar'+'z'),_0x29af9b=_0x5591fc[_0x4d8048(0xc21)](_0x5efdbe,'div',_0x5591fc[_0x4d8048(0xa42)],_0x5591fc['FrZsi']);_0xaceb26[_0x4d8048(0x3df)+'dChil'+'d'](_0x3caf25),_0xaceb26['appen'+_0x4d8048(0x566)+'d'](_0x29af9b);var _0x35043b=_0x5591fc[_0x4d8048(0xa5b)](_0x5efdbe,_0x5591fc[_0x4d8048(0x167)],_0x4d8048(0xa39)+_0x4d8048(0xaa7),_0x5591fc[_0x4d8048(0x7d5)]);_0x35043b[_0x4d8048(0x898)+'ck']=function(){var _0x38607e=_0x4d8048,_0x452124={'KLfXT':function(_0x925a26,_0x1de5f3){var _0x147393=_0x3f00;return _0x5591fc[_0x147393(0x241)](_0x925a26,_0x1de5f3);},'iizOA':function(_0x302870,_0x185661){return _0x302870<_0x185661;}};if('wFApP'!==_0x38607e(0x1ef))_0x1f5263(![]);else{var _0x5b8e4d=('6|2|0'+'|1|4|'+'3|5')['split']('|'),_0x362b2e=0x5*-0x61+-0x5d0*0x2+0x1*0xd85;while(!![]){switch(_0x5b8e4d[_0x362b2e++]){case'0':if(_0x452124['KLfXT'](_0xfb533c,-0x2051+0x322*-0x4+0xef3*0x3)||_0x28bc76+_0x168e25*(-0x156a+-0x3*-0x98f+-0x73f)>_0x134fe7[_0x38607e(0xbcc)+_0x38607e(0x4b3)])return null;continue;case'1':var _0x501c2d=[];continue;case'2':if(!_0x134fe7)return null;continue;case'3':_0x1fd3b7['ok']+=_0xd28151;continue;case'4':for(var _0x19b88f=-0x250c+0x1*-0x3d0+0x28dc;_0x452124[_0x38607e(0xae2)](_0x19b88f,_0x2f3082);_0x19b88f++)_0x501c2d[_0x38607e(0xb4)](_0x134fe7[_0x38607e(0x40b)+'oat32'](_0x2012b6+_0x24fcaf+_0x19b88f*(-0x1fd+0x5*-0x3e+0x337),!![]));continue;case'5':return _0x501c2d;case'6':var _0x134fe7=_0x3c3c9b();continue;}break;}}},_0x4cdae7[_0x4d8048(0x3df)+_0x4d8048(0x566)+'d'](_0xaceb26),_0x4cdae7['appen'+_0x4d8048(0x566)+'d'](_0x35043b);var _0xdf1340=_0x5efdbe(_0x4d8048(0x786),'mn-co'+'ls');_0x3fb536['appen'+'dChil'+'d'](_0x4cdae7),_0x3fb536[_0x4d8048(0x3df)+_0x4d8048(0x566)+'d'](_0xdf1340),_0x2967b2[_0x4d8048(0x3df)+_0x4d8048(0x566)+'d'](_0x1c72e2),_0x2967b2[_0x4d8048(0x3df)+_0x4d8048(0x566)+'d'](_0x3fb536),document[_0x4d8048(0x7ef)]['appen'+_0x4d8048(0x566)+'d'](_0x2967b2),_0x4608e2[_0x4d8048(0x479)]=_0x2967b2,_0x4608e2[_0x4d8048(0x625)]=_0xdf1340,_0x4608e2[_0x4d8048(0xa5)]=_0x3caf25,_0x4608e2[_0x4d8048(0x6fa)]=_0x29af9b,_0x5591fc[_0x4d8048(0xaa2)](_0x19b991),_0x2bcc96(),_0x8298ed(_0x2967b2,_0x4cdae7);var _0x3531f8={};for(var _0x19e318=0x11c8+-0xf02+0x8e*-0x5;_0x19e318<_0x4fa367[_0x4d8048(0xa6a)+'h'];_0x19e318++){var _0x5da968=_0x4fa367[_0x19e318],_0x4cc737=_0x5efdbe(_0x4d8048(0x568)+'n','mn-ta'+'b',_0x5591fc['qumjR']+_0x5da968[_0x4d8048(0x4c1)]+(_0x4d8048(0x34d)+'ll>'));_0x4cc737['type']='butto'+'n',_0x4cc737[_0x4d8048(0x3c9)]=_0x5da968[_0x4d8048(0x4c1)],function(_0x58a3b4){_0x4cc737['oncli'+'ck']=function(){_0x356c62(_0x58a3b4);};}(_0x5da968['id']),_0x3531f8[_0x5da968['id']]=_0x4cc737,_0x1c72e2['appen'+_0x4d8048(0x566)+'d'](_0x4cc737);}_0x4608e2['butto'+'ns']=_0x3531f8;var _0x5364be=_0x5efdbe(_0x5591fc['EqJYW'],null,_0x5445fd);return _0x5364be['id']=_0x4d8048(0x6d0)+'a-pet'+'al',_0x5364be['title']='Sakur'+_0x4d8048(0x271)+_0x4d8048(0x530)+_0x4d8048(0x89a)+_0x4d8048(0xaa9),_0x5364be['onmou'+'seent'+'er']=function(){var _0x30232e=_0x4d8048,_0x5df457={'YTnzf':function(_0x3a6404,_0x587b31){return _0x5591fc['wNdIo'](_0x3a6404,_0x587b31);}};if(_0x5591fc['dDDoc']!=='Svomj')return _0x4e7ae1['query'+'Selec'+_0x30232e(0x7ee)](_0x5df457[_0x30232e(0x9e5)](_0x30232e(0x425)+'-a=\x22',_0x2224b5)+'\x22]');else _0x5364be[_0x30232e(0xd5)][_0x30232e(0x1b7)+'ty']='1';},_0x5364be['onmou'+'selea'+'ve']=function(){var _0xdd64b2=_0x4d8048;_0x5364be[_0xdd64b2(0xd5)][_0xdd64b2(0x1b7)+'ty']=_0x4608e2['open']?'1':'.5';},_0x5364be['oncli'+'ck']=function(_0x3b181a){var _0x3038b2=_0x4d8048;if(_0x3b181a&&_0x3b181a['stopP'+_0x3038b2(0x55a)+_0x3038b2(0x22c)])_0x3b181a['stopP'+_0x3038b2(0x55a)+'ation']();_0x42bda8['UXGTF'](_0x1f5263,!_0x4608e2['open']);},document['body'][_0x4d8048(0x3df)+'dChil'+'d'](_0x5364be),_0x4608e2[_0x4d8048(0x3c8)]=_0x5364be,setInterval(function(){var _0x463443=_0x4d8048;try{if(_0x463443(0x953)!==_0x463443(0x42a)){if(!_0x4608e2[_0x463443(0x3c8)])return;var _0x1037fc=_0x2800c4();_0x4608e2[_0x463443(0x3c8)][_0x463443(0xd5)][_0x463443(0x1b7)+'ty']=_0x4608e2['open']?'1':_0x1037fc?'.8':_0x463443(0x3ed),_0x4608e2[_0x463443(0x3c8)][_0x463443(0x3c9)]=_0x1037fc?_0x42bda8['XkrSr']:_0x42bda8[_0x463443(0x2f3)];}else{var _0x774c0c=_0x42ef26(_0x26b865);_0xccf90a[_0x1eac5c]=_0x774c0c['rows'],_0x4a01bb[_0xccac4d]={'key':_0x774c0c['key'],'sane':_0x774c0c[_0x463443(0x552)],'checked':_0x774c0c[_0x463443(0x9eb)+'ed'],'keyConsistent':_0x774c0c['keyCo'+_0x463443(0x445)+_0x463443(0xac3)],'keySource':_0x774c0c[_0x463443(0x905)+'urce']};}}catch(_0x21d1b9){}},0x1430+-0x263b*-0x1+-0x37af),_0x4608e2['built']=!![],_0x5591fc[_0x4d8048(0x677)](_0x356c62,_0x4608e2[_0x4d8048(0x4da)]),_0x2967b2;}catch(_0x1c3504){if(_0x5591fc[_0x4d8048(0xae9)]===_0x5591fc['eBxwd']){_0x117319[_0x4d8048(0x24a)+'ntDef'+'ault'](),_0x37c786(_0x2c7087['on'],_0x42bda8[_0x4d8048(0xbd3)](_0x43115a['facto'+'r'],0x325*-0x5+0x266*0x6+-0x155*-0x1+0.5));return;}else return console['warn'](_0x4d8048(0xbd9)+_0x4d8048(0x231)+_0x4d8048(0xb00)+_0x4d8048(0x69f)+_0x4d8048(0x92b)+'le',_0x5591fc[_0x4d8048(0xba0)]+_0x1bfdf2,_0x1c3504),null;}}function _0x356c62(_0x462019){var _0x52694f=_0x3e6ad4,_0xd16a02={'TjVRp':function(_0x5eeffe,_0x25c2fc){return _0x5eeffe(_0x25c2fc);},'bkSUx':_0x5591fc['uEjCh'],'embCE':_0x52694f(0x612),'lEsOG':'i32','ICkGO':_0x5591fc['SDXoa']};_0x4608e2['cat']=_0x462019,_0x4608e2[_0x52694f(0x96f)]=[];if(!_0x4608e2[_0x52694f(0x625)])return;var _0x2d5972=null;for(var _0xe787e4=-0x57b+-0x249b+0x2a16;_0x5591fc[_0x52694f(0xbd2)](_0xe787e4,_0x4fa367['lengt'+'h']);_0xe787e4++)if(_0x4fa367[_0xe787e4]['id']===_0x462019)_0x2d5972=_0x4fa367[_0xe787e4];_0x4608e2['head']['textC'+_0x52694f(0x3f4)+'t']=_0x52694f(0x9c0)+_0x52694f(0x271)+'llWar'+_0x52694f(0x481)+(_0x2d5972&&_0x2d5972[_0x52694f(0x4c1)]||'?');for(var _0x5e231b in _0x4608e2[_0x52694f(0x568)+'ns']){if(_0x52694f(0x38b)!=='wHHFm'){if(_0x4608e2[_0x52694f(0x568)+'ns'][_0x5e231b][_0x52694f(0x9ed)+_0x52694f(0xb52)])_0x4608e2[_0x52694f(0x568)+'ns'][_0x5e231b][_0x52694f(0x9ed)+_0x52694f(0x624)]=_0x5591fc[_0x52694f(0x4ac)]+(_0x5591fc['rHVMv'](_0x5e231b,_0x462019)?'\x20acti'+'ve':'');}else _0x1e8915[_0x52694f(0x19c)]=_0xd16a02[_0x52694f(0xc7)](_0x25110d,_0x44b0e9&&_0x169b3c[_0x52694f(0x153)+'ge']||_0x2b9fd5);}var _0x16aa20=[];try{if(_0x5591fc[_0x52694f(0x93c)](_0x52694f(0x7aa),_0x5591fc[_0x52694f(0x828)])){_0x2392a5['ok']++;switch(_0x4af6d9){case'u8':return _0x549a72['getUi'+'nt8'](_0x268737);case'i8':return _0x6cb2b0[_0x52694f(0x3e6)+'t8'](_0x49dc9e);case _0xd16a02[_0x52694f(0x175)]:return _0x402710[_0x52694f(0x3e6)+'t16'](_0x4f0813,!![]);case _0xd16a02['embCE']:return _0x30da02[_0x52694f(0xb7c)+_0x52694f(0x98c)](_0x4a0281,!![]);case _0xd16a02[_0x52694f(0xb62)]:return _0x240c06['getIn'+_0x52694f(0x826)](_0x2730cb,!![]);case _0xd16a02[_0x52694f(0x4dd)]:return _0x35a141['getUi'+_0x52694f(0x9c5)](_0x58e7c5,!![]);case _0x52694f(0x211):return _0x3512fa['getFl'+'oat32'](_0x58a383,!![]);case _0x52694f(0xf9):return _0x41c866[_0x52694f(0x40b)+'oat64'](_0x363cc2,!![]);case'v2':case'v3':case'v4':return _0x554e36['getFl'+_0x52694f(0x549)](_0x209504,!![]);default:return _0x1cbac0[_0x52694f(0x3e6)+'t32'](_0x4dcc2d,!![]);}}else _0x16aa20=_0x1a8514(_0x462019);}catch(_0x1255f6){_0x16aa20=[];}while(_0x4608e2[_0x52694f(0x625)]['first'+'Child'])_0x4608e2[_0x52694f(0x625)][_0x52694f(0x768)+'eChil'+'d'](_0x4608e2['cols'][_0x52694f(0x3e1)+_0x52694f(0x2a2)]);for(var _0x3bcc29=0x1*0xdd7+0xe9*0xf+-0x33*0x8a;_0x5591fc['CgHgk'](_0x3bcc29,_0x16aa20['lengt'+'h']);_0x3bcc29++)_0x4608e2['cols'][_0x52694f(0x3df)+'dChil'+'d'](_0x16aa20[_0x3bcc29]);}function _0x1f5263(_0x76cda1){var _0x49b408=_0x3e6ad4;if(_0x5591fc[_0x49b408(0x9f1)]('xAGLm',_0x49b408(0x161))){_0x4608e2[_0x49b408(0x199)]=!!_0x76cda1;var _0x4d4d3e=_0x3be0b4();if(!_0x4d4d3e)return;_0x4d4d3e['class'+_0x49b408(0x624)]=_0x5591fc['yLaUz']+(_0x4608e2[_0x49b408(0x199)]?_0x5591fc[_0x49b408(0x79f)]:'');if(_0x4608e2['petal'])_0x4608e2['petal'][_0x49b408(0xd5)][_0x49b408(0x1b7)+'ty']=_0x4608e2['open']?'1':'.5';if(_0x4608e2[_0x49b408(0x199)]){_0x5591fc[_0x49b408(0x57f)](_0x356c62,_0x4608e2['cat']);try{if(_0x5591fc[_0x49b408(0x1ec)](_0x5591fc[_0x49b408(0x232)],_0x49b408(0xa4a)))try{_0x18aee9=_0x4306ec['keys'](_0x13c125)[_0x49b408(0x4a5)](0x1075+-0x83*0x41+0x10ce,0x965+0x5c*-0x6a+0x5b*0x51);}catch(_0x4eb334){}else{var _0x393fba=window['inner'+_0x49b408(0x319)+'t']||0xb*-0x1fd+-0x17fb+0x30fa;if(_0x5591fc['mpdrA'](_0x393fba,0x1c34+-0x43c+-0x18a*0xe))_0x539dd7(![]);}}catch(_0x291f44){}}}else{var _0x5a2e91=_0x4f698f(_0x2e91b8[_0xa35e97][-0x8e4+0xa17+-0x133]),_0x4b2dc2=_0x50840b(_0x49b408(0x5b0),_0x5591fc['XCXPw']);_0x4b2dc2[_0x49b408(0xd5)][_0x49b408(0x58f)+'dth']='0',_0x4b2dc2['style'][_0x49b408(0x9a5)]='1',_0x4b2dc2['style'][_0x49b408(0x428)+'lign']='right',_0x4b2dc2[_0x49b408(0x173)+'onten'+'t']=_0x19bad7(_0xcb6445[_0x1c09f9][0x1*0x245d+-0x1*0x22df+-0x17c]),_0x4b2dc2[_0x49b408(0xa1)+'et']['k']=_0x341df6[_0x11c371][0x5f*-0x35+0x5e*-0xd+0x1872],_0x5a2e91[_0x49b408(0x3df)+'dChil'+'d'](_0x4b2dc2),_0x38b3b8[_0x49b408(0x7ef)]['appen'+_0x49b408(0x566)+'d'](_0x5a2e91),_0x14eca0[_0x49b408(0x7ef)][_0x49b408(0x40e)+_0x49b408(0x474)]['sp']=_0x4b2dc2;}}function _0xf5119(){var _0x311f10=_0x3e6ad4,_0xab6c3c={'jclrt':function(_0x1b4e68,_0x4b73e9,_0x437793,_0x24ad40){return _0x1b4e68(_0x4b73e9,_0x437793,_0x24ad40);}};if(!_0x4608e2[_0x311f10(0x199)]||!_0x4608e2['built'])return;try{for(var _0x59be10=0x1*0x805+0x1*0x21eb+-0x29f0;_0x59be10<_0x4608e2['syncs'][_0x311f10(0xa6a)+'h'];_0x59be10++){try{_0x4608e2['syncs'][_0x59be10]();}catch(_0x18224f){}}var _0x5bf708=_0x215df4;_0x4608e2['sub'][_0x311f10(0x173)+'onten'+'t']=_0x5bf708?_0x5591fc['bvHaz'](_0x5591fc['kiTmd'](_0x5591fc[_0x311f10(0x965)](_0x5591fc[_0x311f10(0x613)]('v',_0x5bf708['versi'+'on']),'\x20\x20·\x20\x20'+_0x311f10(0x489)+'\x20'),_0x5bf708['hooks'+_0x311f10(0x8f5)+'ed'])+'/'+_0x5bf708['hooks'+_0x311f10(0xf8)],'\x20\x20·\x20\x20'+_0x311f10(0x463)+_0x311f10(0x654))+(_0x5bf708[_0x311f10(0x6e9)]&&_0x5bf708[_0x311f10(0x6e9)]['playe'+_0x311f10(0x7c6)+'t']||0x6*0x3ec+0xb*0x2e6+-0x52*0xad)+_0x5591fc[_0x311f10(0xad7)]+(_0x5bf708[_0x311f10(0xbf4)+_0x311f10(0x714)]&&_0x5bf708[_0x311f10(0xbf4)+_0x311f10(0x714)][_0x311f10(0x6dc)+_0x311f10(0x10f)]?Math['round'](_0x5bf708['wasmM'+_0x311f10(0x714)]['bytes']/(-0x17208b+0x193255+0xdee36))+'MB':'-'):_0x311f10(0x28f)+'ng\x20fo'+'r\x20the'+'\x20firs'+_0x311f10(0x87b)+_0x311f10(0xabc);var _0x50fb3f=_0x4608e2[_0x311f10(0x625)][_0x311f10(0x672)+_0x311f10(0x5e1)+_0x311f10(0x156)+'l']?_0x4608e2[_0x311f10(0x625)]['query'+'Selec'+'torAl'+'l'](_0x311f10(0x425)+'-k]'):[];for(var _0xae17ea=-0xd07+-0x186a+0x163*0x1b;_0x5591fc['XQcuE'](_0xae17ea,_0x50fb3f['lengt'+'h']);_0xae17ea++){var _0x110480=_0x50fb3f[_0xae17ea][_0x311f10(0xa1)+'et']['k'],_0x3cff63='';if(_0x110480===_0x311f10(0x70a)+'ON')_0x3cff63=_0x5bf708?_0x5bf708[_0x311f10(0x9ce)+'on']:'-';else{if(_0x110480===_0x5591fc['HcHon'])_0x3cff63=_0x5bf708?_0x5591fc[_0x311f10(0x2db)](_0x5bf708[_0x311f10(0x489)+_0x311f10(0x8f5)+'ed'],_0x311f10(0x867))+_0x5bf708['hooks'+_0x311f10(0x2bd)+_0x311f10(0x7d7)+'AtArm']:'-';else{if(_0x110480===_0x5591fc['daRDw'])_0x3cff63=_0x5bf708&&_0x5bf708['wasmM'+_0x311f10(0x714)]&&_0x5bf708[_0x311f10(0xbf4)+_0x311f10(0x714)]['captu'+_0x311f10(0x10f)]?_0x5591fc[_0x311f10(0xd1)](Math['round'](_0x5591fc[_0x311f10(0xb43)](_0x5bf708[_0x311f10(0xbf4)+_0x311f10(0x714)]['bytes'],-0x1dea26+0x774*0x2e+0x1*0x2c934e))+_0x5591fc['wwWkX'],_0x5bf708['wasmM'+'emory']['atMs'])+'ms':'-';else{if(_0x110480==='Photo'+'nNetw'+_0x311f10(0xa5a)+'nc')_0x3cff63=_0x5bf708&&_0x5bf708['esp']?String(_0x5bf708[_0x311f10(0x6e9)][_0x311f10(0x463)+_0x311f10(0x7c6)+'t']):'-';else{if(_0x110480===_0x311f10(0x759)+_0x311f10(0x928)+_0x311f10(0x9f7)+'u')_0x3cff63=_0x5bf708&&_0x5bf708['esp']?String(_0x5bf708['esp']['enemy'+_0x311f10(0xbed)]):'-';else{if(_0x5591fc[_0x311f10(0x2c3)](_0x110480,_0x5591fc['fhMCN']))_0x3cff63=_0x5bf708&&_0x5bf708[_0x311f10(0x6e9)]&&_0x5bf708[_0x311f10(0x6e9)][_0x311f10(0x158)+'a']?_0x5591fc[_0x311f10(0x86d)](_0x5591fc['GjGUz'](_0x5bf708[_0x311f10(0x6e9)][_0x311f10(0x158)+'a'],'\x20('),_0x5bf708[_0x311f10(0x6e9)][_0x311f10(0x158)+'aFrom'])+')':'-';else{if(_0x110480===_0x5591fc[_0x311f10(0x30a)])_0x3cff63=_0x5bf708&&_0x5bf708[_0x311f10(0x6ab)]&&_0x5bf708['local'][_0x311f10(0xb9b)]?_0x5bf708[_0x311f10(0x6ab)]['feet']['map'](function(_0x543056){var _0x294914=_0x311f10;return Math[_0x294914(0x2ff)](_0x543056*(-0x1d7+-0x1420+-0x3b*-0x61))/(0xe05+-0x82*-0x21+0x1*-0x1e63);})[_0x311f10(0x1ed)]('\x20\x20'):'-';else{if(_0x5591fc[_0x311f10(0x12b)](_0x110480,_0x311f10(0xb36)+'8'))_0x3cff63=_0x5bf708&&_0x5bf708['local']&&_0x5bf708[_0x311f10(0x6ab)][_0x311f10(0x7df)]?_0x5bf708['local'][_0x311f10(0x7df)][_0x311f10(0x497)](function(_0x1e9487){var _0x2df60e=_0x311f10;return _0x5591fc[_0x2df60e(0x348)](Math['round'](_0x5591fc[_0x2df60e(0x2a0)](_0x1e9487,0x1*0x24dd+-0x46c+0x200d*-0x1)),-0x23d9+0x1*0x2192+0x1*0x2ab);})[_0x311f10(0x1ed)]('\x20\x20'):'-';else{if('CTVhe'!==_0x311f10(0xa85)){var _0x59a56b=_0x110480[_0x311f10(0xa3)]('+');_0x3cff63=_0x4b3936(_0x5bf708,_0x59a56b[-0xe*0x1af+0x2246+-0x5*0x224][_0x311f10(0x467)+'Of'](_0x5591fc[_0x311f10(0x92a)])===0x3*0x2f7+-0x1*0x1d31+0x6c4*0x3?_0x311f10(0x107)+'hScri'+'pt':_0x311f10(0x4e2)+_0x311f10(0xb29)+'ler',parseInt(_0x59a56b[0xbca+0x20e+-0xdd7],0x2*0xf47+-0x6ff+0x191*-0xf));}else{var _0xd33895=(_0x311f10(0xb16)+'|4|0|'+'6|3')[_0x311f10(0xa3)]('|'),_0x5e63e4=0x1*-0x1fc1+-0x7ee+-0x1*-0x27af;while(!![]){switch(_0xd33895[_0x5e63e4++]){case'0':var _0x708429=_0x22fe8d([_0x51cfa5]);continue;case'1':if(!_0x51cfa5)return null;continue;case'2':_0x51cfa5['o']=_0x6baf68;continue;case'3':return _0x708429['rows'][-0x1727+0x377*0x2+0x1039*0x1];case'4':_0x51cfa5['k']=_0xbbbe44;continue;case'5':var _0x51cfa5=_0xab6c3c[_0x311f10(0x565)](_0x365453,_0x7bfc3b,_0x1c18cf,_0x596950);continue;case'6':if(!_0x708429['rows']['lengt'+'h'])return null;continue;}break;}}}}}}}}}}if(_0x3cff63!==_0x50fb3f[_0xae17ea][_0x311f10(0x173)+_0x311f10(0x3f4)+'t'])_0x50fb3f[_0xae17ea][_0x311f10(0x173)+_0x311f10(0x3f4)+'t']=_0x3cff63;}}catch(_0x5362dd){}}function _0x5ca5cd(){var _0x5283df=_0x3e6ad4;if(_0x5591fc['qNwDt']!==_0x5283df(0xae8))_0x4fe195['oncli'+'ck']=function(){_0x5a896b(_0x3351b8);};else try{var _0x4d9043=_0x2f3d98();return _0x4d9043&&_0x4d9043['feet']?_0x4d9043['feet'][0x78b*0x1+-0x1*0x15f1+-0x3*-0x4cd]:null;}catch(_0x3f1eb7){if(_0x5283df(0x455)===_0x5591fc[_0x5283df(0xa59)])try{if(_0xa19bdb[_0x3a0384]['conte'+_0x5283df(0x53f)+_0x5283df(0x27b)])_0x3e5728[_0x181b44][_0x5283df(0x738)+'ntWin'+'dow'][_0x5283df(0x10a)+_0x5283df(0x95)+'e'](_0x780275,'*');}catch(_0x2c42e7){}else return null;}}var _0x32a0c1=0x16d5+-0x76c*0x3+-0x1*0x8f+0.5,_0x195cb5=0x3*-0x1a5+-0x1*0x455+0x94a+0.25,_0x577cc5=-0x19a6*0x1+0x116e*-0x2+0x3c83+0.8;function _0x1aa740(_0x49b276,_0x4cef58){var _0x21ccc8=_0x3e6ad4,_0x1ea789=[],_0x8f76fa,_0x3b325c,_0xf4dcf=_0x4cef58!==null&&_0x4cef58!==undefined&&_0x5591fc[_0x21ccc8(0x9d6)](isFinite,_0x4cef58);for(_0x8f76fa=-0x132d+0x3b*0x71+0x6de*-0x1;_0x8f76fa<_0x49b276['lengt'+'h'];_0x8f76fa++){var _0x382d32=_0x49b276[_0x8f76fa]['v'];if(!_0x382d32)continue;if(_0x5591fc['WzdSd'](_0x382d32[0x1819*0x1+-0x5f*-0x42+0x7*-0x6f1],0x254f+0x3d9*-0x5+0x2*-0x909)&&_0x5591fc[_0x21ccc8(0x687)](_0x382d32[-0x6d*-0xd+0x22a+-0xc5*0xa],0x3*-0xb1e+0x1*0x1892+0x8c8)&&_0x382d32[-0x1972+0x78d*0x4+-0x4c0]===-0x1*-0x1a73+0x21c+-0x1c8f)continue;if(_0xf4dcf&&Math['abs'](_0x5591fc[_0x21ccc8(0xbc3)](_0x382d32[0x22a+-0x1a*0x142+0x1*0x1e8b],_0x4cef58))>_0x32a0c1)continue;_0x1ea789[_0x21ccc8(0xb4)](_0x49b276[_0x8f76fa]);}if(!_0x1ea789['lengt'+'h'])for(_0x8f76fa=-0x2561+0x19c*0x1+0x23c5;_0x5591fc['VrOcR'](_0x8f76fa,_0x49b276['lengt'+'h']);_0x8f76fa++){if(_0x5591fc['QhUDi'](_0x5591fc[_0x21ccc8(0x56f)],_0x5591fc['HIshN'])){var _0x504a79=_0x49b276[_0x8f76fa]['v'];if(!_0x504a79)continue;if(_0x5591fc['SkeEw'](_0x504a79[-0x32f+0x194*0x16+0x12b*-0x1b],0x929+0x2b*0x71+-0x1c24)&&_0x504a79[0xe0b*0x2+-0x74d+-0x26*0x8c]===-0x26f9+-0x257*-0x5+0x1b46&&_0x504a79[0x5*-0x6f1+-0x1605+0x38bc*0x1]===-0xda1+0x2587*-0x1+-0x3328*-0x1)continue;_0x1ea789['push'](_0x49b276[_0x8f76fa]);}else{var _0x8767ec=_0x33a043[_0x17e249];_0x12abeb['push'](_0x8767ec+_0x21ccc8(0x4d0)+_0x15896d[_0x8767ec]);}}if(!_0x1ea789[_0x21ccc8(0xa6a)+'h'])return{'pos':null,'posAt':null,'inBand':0x0,'cluster':0x0,'reach':0x0};var _0x4946d6=[];for(_0x8f76fa=0x1*-0xfbf+0x580+-0xa3f*-0x1;_0x5591fc['MNzgO'](_0x8f76fa,_0x1ea789[_0x21ccc8(0xa6a)+'h']);_0x8f76fa++){var _0x5c27a0=_0x1ea789[_0x8f76fa]['v'],_0x3fbd82=-(0x4bb+-0x35a+-0x16*0x10);for(_0x3b325c=0x1892+-0x1fe*0xb+-0x88*0x5;_0x3b325c<_0x4946d6[_0x21ccc8(0xa6a)+'h'];_0x3b325c++){var _0x4b3a26=_0x4946d6[_0x3b325c]['c'][-0x2*0x595+-0x2046*0x1+0x2b70]['v'],_0x15c4f1=_0x5c27a0[-0x1dbd+0x131a+-0xaa3*-0x1]-_0x4b3a26[0x3*0x9d5+-0x76e*0x2+-0x3*0x4e1],_0x6cb2da=_0x5c27a0[0x406+-0x220f+0x1e0a]-_0x4b3a26[-0x4*-0x19c+-0x935+0x2c6],_0x2f1c38=_0x5c27a0[0x59e+-0x105*-0xd+0x1*-0x12dd]-_0x4b3a26[-0x1815+0x2173+-0x95c*0x1];if(_0x5591fc[_0x21ccc8(0x5c0)](_0x15c4f1*_0x15c4f1+_0x5591fc[_0x21ccc8(0x322)](_0x6cb2da,_0x6cb2da)+_0x2f1c38*_0x2f1c38,_0x195cb5)){_0x3fbd82=_0x3b325c;break;}}if(_0x3fbd82===-(0xf09+0xe6d+0x1d75*-0x1))_0x4946d6[_0x21ccc8(0xb4)]({'c':[_0x1ea789[_0x8f76fa]]});else _0x4946d6[_0x3fbd82]['c']['push'](_0x1ea789[_0x8f76fa]);}var _0x157081=_0x4946d6[-0x1*-0xf67+-0x85e+-0x709];for(_0x3b325c=-0x25c9*0x1+-0x1bb1+0x417b;_0x3b325c<_0x4946d6['lengt'+'h'];_0x3b325c++)if(_0x4946d6[_0x3b325c]['c'][_0x21ccc8(0xa6a)+'h']>_0x157081['c']['lengt'+'h'])_0x157081=_0x4946d6[_0x3b325c];var _0x358271=_0x157081['c'][-0xfb7*-0x1+0x1a1*0x13+0x1*-0x2eaa],_0x5ee7b0=-(-0x1101*0x1+-0x1296*-0x2+-0x3a*0x59);for(_0x3b325c=0x2047*-0x1+-0x1261*-0x1+0xde6;_0x5591fc[_0x21ccc8(0x36b)](_0x3b325c,_0x157081['c']['lengt'+'h']);_0x3b325c++){var _0x3534c3=_0x157081['c'][_0x3b325c]['v'],_0x3a1d56=_0x3534c3[-0x5b9*0x5+-0x115b+0x2df8*0x1]*_0x3534c3[-0x1*0x333+0x15ed+-0x12ba]+_0x5591fc['ANcdB'](_0x3534c3[-0x2*0x1260+0x673+0x1e4f],_0x3534c3[0x4fe+0x6*-0x148+0x2b4]);(_0x3a1d56>_0x5ee7b0||_0x3a1d56===_0x5ee7b0&&_0x5591fc['OYxgc'](_0x3534c3[-0x23f*-0x4+-0x19df+0x10e4],_0x358271['v'][-0x89e+-0x9*0x4f+-0x2*-0x5b3]))&&(_0x5ee7b0=_0x3a1d56,_0x358271=_0x157081['c'][_0x3b325c]);}return{'pos':_0x358271['v'],'posAt':_0x358271['o'],'inBand':_0xf4dcf?_0x1ea789[_0x21ccc8(0xa6a)+'h']:-0x18a5*-0x1+0x44f*0x1+-0x4*0x73d,'cluster':_0x157081['c'][_0x21ccc8(0xa6a)+'h'],'groups':_0x4946d6['lengt'+'h'],'reach':Math['sqrt'](_0x5ee7b0)};}function _0x2f3d98(){var _0x2b6715=_0x3e6ad4;if(_0x5591fc[_0x2b6715(0x765)]!==_0x2b6715(0x14c)){var _0x4a8c99=_0x3f2eb8['FPSco'+_0x2b6715(0xb29)+'ler'];if(!_0x4a8c99||!_0x4a8c99['ptr'])return null;var _0x195a79=_0x599afb[_0x2b6715(0x4e2)+_0x2b6715(0xb29)+_0x2b6715(0x92f)]||[],_0x2cbf76=[];for(var _0xafd00d=-0x2107+-0x7*0x2fe+0x35f9*0x1;_0xafd00d<_0x195a79[_0x2b6715(0xa6a)+'h'];_0xafd00d++){if(_0x2b6715(0x955)===_0x5591fc[_0x2b6715(0x63c)]){if(_0x5591fc['swkFK'](_0x195a79[_0xafd00d][0x10f8+-0x2603*0x1+0x150c],'v3'))continue;var _0x219ebe=_0x5591fc[_0x2b6715(0xa6c)](_0x3501e5,_0x4a8c99['ptr'],_0x195a79[_0xafd00d][-0x49*0xf+-0xac+0x4f3],-0x92d*-0x1+0x1e39*-0x1+-0x1*-0x150f);if(_0x219ebe)_0x2cbf76['push']({'o':_0x5591fc['RaRHz']('0x',_0x195a79[_0xafd00d][0x60d*0x1+-0x16a1+-0x425*-0x4]['toStr'+'ing'](0x63d*-0x1+-0x25*-0x5+0x594)),'v':_0x219ebe});}else return null;}var _0xe7b231=_0x1aa740(_0x2cbf76,null);if(!_0xe7b231['pos'])return null;var _0x1c09e9=_0xe7b231[_0x2b6715(0x61a)];return{'ptr':_0x4a8c99[_0x2b6715(0x6a2)],'feet':_0x1c09e9,'posAt':_0xe7b231[_0x2b6715(0x225)],'inBand':_0xe7b231['inBan'+'d'],'cluster':_0xe7b231[_0x2b6715(0xb7b)+'er'],'copies':_0x2cbf76[_0x2b6715(0x780)+'r'](function(_0xe760d2){var _0x34bc85=_0x2b6715;return _0x5591fc[_0x34bc85(0x687)](_0xe760d2['v'][0xc9b*-0x1+-0xdcf+-0x1e3*-0xe],_0x1c09e9[0xe6e+-0x7a7*-0x3+-0x2563])&&_0xe760d2['v'][0x14db+-0x1*-0xfcb+-0x24a5]===_0x1c09e9[-0x5*0x4df+-0x81c+-0x8*-0x40f]&&_0xe760d2['v'][-0x1b7*0x7+-0x10*-0x18e+-0xcdd]===_0x1c09e9[0x2d9+0x13d0+0x1*-0x16a7];})[_0x2b6715(0x497)](function(_0x3779d4){return _0x3779d4['o'];}),'eye':[_0x1c09e9[0xc17*-0x2+-0x49f+0x1ccd],_0x1c09e9[0xa5b*-0x1+0x211c+-0x16c0]+_0x577cc5,_0x1c09e9[0x1*-0x1465+-0x231e*-0x1+-0x1*0xeb7]],'reach':_0xe7b231[_0x2b6715(0xacf)],'pitch':_0xda4deb(_0x4a8c99[_0x2b6715(0x6a2)]+(-0x9b*0x3+-0x1*-0x12a8+0x1*-0xf6b),_0x2b6715(0x211)),'yaw':_0xda4deb(_0x4a8c99[_0x2b6715(0x6a2)]+(-0x4e5+-0x12e4+0x1939),'f32')};}else _0x531ad4[_0x2b6715(0x930)+'st']=_0x4ff5e9[0x1*0xa5e+-0xdb7+0x16*0x27][_0x2b6715(0xaf1)](),_0x1db3fe['setHi'+'ts']++;}function _0x172582(){var _0x467afc=_0x3e6ad4,_0x2a70f7=_0x2f3d98(),_0x1fee96=[],_0x26afcd=_0x385c38[_0x467afc(0x7c9)+_0x467afc(0x197)+'orkSy'+'nc']||{},_0x16eec3=Object[_0x467afc(0x6a5)](_0x26afcd);for(var _0xec9208=-0x2*0x7de+0x1d0*-0x12+0x5*0x9ac;_0x5591fc['GWAAA'](_0xec9208,_0x16eec3[_0x467afc(0xa6a)+'h'])&&_0xec9208<-0x220e+0xc42+0x15ec;_0xec9208++){if('vBjBs'!==_0x467afc(0x300)){var _0x4ad591=_0x26afcd[_0x16eec3[_0xec9208]],_0x152190=[],_0x4946dc=_0x599afb[_0x467afc(0x7c9)+'nNetw'+_0x467afc(0xa5a)+'nc']||[];for(var _0x3a4737=0x1*-0x1e59+0xd1c+0x113d;_0x3a4737<_0x4946dc[_0x467afc(0xa6a)+'h'];_0x3a4737++){if(_0x4946dc[_0x3a4737][-0x4*-0x4cd+-0x26fc+0x3f5*0x5]!=='v3')continue;var _0x48e836=_0x5591fc['zIyxt'](_0x3501e5,_0x4ad591[_0x467afc(0x6a2)],_0x4946dc[_0x3a4737][0x166c+0x171c+-0x2d88],0xd7*0x5+0x1910+0x1d40*-0x1);if(_0x48e836)_0x152190[_0x467afc(0xb4)]({'o':_0x5591fc[_0x467afc(0xbc0)]('0x',_0x4946dc[_0x3a4737][0x9c5*0x3+0x2*-0x137d+-0x339*-0x3][_0x467afc(0x8e7)+_0x467afc(0x9e7)](0xd4f+-0x26f3+0x19b4)),'v':_0x48e836});}var _0x4c97e6=_0x1aa740(_0x152190,_0x2a70f7?_0x2a70f7[_0x467afc(0xb9b)][-0x1*-0x11c7+-0x10f*0x1d+0xced]:null),_0x5077bd=_0x4c97e6[_0x467afc(0x61a)];if(!_0x5077bd)continue;var _0x9040be={'ptr':_0x4ad591[_0x467afc(0x6a2)],'x':_0x5077bd[0x1*-0x1432+0x1*-0x9+0x143b],'y':_0x5077bd[0xe3*0x2+-0x23d1*-0x1+-0x2596],'z':_0x5077bd[-0x1a89+0x1312+0x779],'posAt':_0x4c97e6[_0x467afc(0x225)],'inBand':_0x4c97e6['inBan'+'d'],'cluster':_0x4c97e6[_0x467afc(0xb7b)+'er'],'team':_0x5591fc['Vwtwg'](_0xda4deb,_0x4ad591['ptr']+(0x11*-0x2c+-0x1a7d+-0x1*-0x1dc1),_0x467afc(0x63b)),'localFlag':_0xda4deb(_0x4ad591[_0x467afc(0x6a2)]+(0x2336+0x1fb*0xf+0xce3*-0x5),'i32')};if(_0x2a70f7){var _0x25f982=_0x5077bd[-0x20b*0x3+0x10*0xb5+0x1*-0x52f]-_0x2a70f7['feet'][0x1e01*-0x1+0x72b+-0xb6b*-0x2],_0x59900a=_0x5591fc[_0x467afc(0xb87)](_0x5077bd[0x371*-0x9+-0xd*0x1fa+0x38ad],_0x2a70f7[_0x467afc(0xb9b)][-0x192*-0x4+0xf58*0x1+-0xacf*0x2]);_0x9040be['d']=Math[_0x467afc(0x1c0)](_0x5591fc[_0x467afc(0x56e)](_0x25f982*_0x25f982,_0x5591fc[_0x467afc(0x7bd)](_0x59900a,_0x59900a))),_0x9040be[_0x467afc(0x890)+'ng']=_0x5591fc[_0x467afc(0xb43)](Math['atan2'](_0x25f982,_0x59900a)*(-0x20c7*0x1+-0xc1*0x2+0x22fd),Math['PI']);}_0x1fee96[_0x467afc(0xb4)](_0x9040be);}else{if(_0x1c976b)_0x126016[_0x467afc(0xd5)][_0x467afc(0x68f)+'ay']=_0x4f4d17?'':_0x467afc(0x3cd);if(_0x2eef7d)_0x542964[_0x467afc(0x173)+'onten'+'t']=_0x3b5571?'close':_0x5591fc[_0x467afc(0x5e5)];_0x541ac7['style'][_0x467afc(0x708)]=_0x4a4a45?_0x467afc(0xabb)+_0x467afc(0xa5d)+_0x467afc(0x6a4):_0x467afc(0x4ef),_0x5df419[_0x467afc(0xd5)]['backg'+_0x467afc(0x2ff)]=_0x1d8168?'#150c'+'1d':_0x467afc(0x9d)+_0x467afc(0x950)+_0x467afc(0x720)+'9)';}}return{'me':_0x2a70f7,'list':_0x1fee96};}var _0x4b6123=null;function _0x277f79(){var _0x577535=_0x3e6ad4;if(_0x4b6123)return _0x4b6123;try{if('beyRN'!==_0x5591fc[_0x577535(0x771)])_0x9109ef['close']();else{var _0x20638e=_0x5591fc[_0x577535(0x787)]['split']('|'),_0x3f9c8e=-0x15ef+-0x1147+0x2736;while(!![]){switch(_0x20638e[_0x3f9c8e++]){case'0':if(!_0x4b6123['cv']||!_0x4b6123['cv']['getCo'+'ntext'])_0x4b6123=_0x471292;continue;case'1':var _0x30b4df=document[_0x577535(0x53b)+_0x577535(0xa9a)+_0x577535(0xac3)]('div');continue;case'2':return _0x4b6123;case'3':_0x30b4df[_0x577535(0x51d)+'HTML']=_0x5591fc[_0x577535(0x559)](_0x5591fc['pXfzd'],_0x577535(0x3a4)+_0x577535(0x882)+_0x577535(0x760)+'-esp-'+'lg\x22\x20s'+'tyle='+_0x577535(0x258)+_0x577535(0xbdb)+_0x577535(0xcb)+'ter\x22>'+_0x577535(0xb19)+'>');continue;case'4':_0x30b4df['style'][_0x577535(0x70f)+'xt']=_0x5591fc['FwHWx'](_0x5591fc['fJavK'](_0x5591fc['YmhPB'],_0x5591fc[_0x577535(0x447)]),_0x5591fc['ttTBb'])+(_0x577535(0xa6)+'selec'+_0x577535(0x426)+'e;-we'+_0x577535(0x4ea)+'user-'+'selec'+_0x577535(0x426)+'e;');continue;case'5':if(!document[_0x577535(0x7ef)]||!document[_0x577535(0x7ef)][_0x577535(0x3df)+'dChil'+'d'])return null;continue;case'6':_0x4b6123={'el':_0x30b4df,'cv':_0x30b4df[_0x577535(0x672)+'Selec'+'tor']('#saku'+_0x577535(0x512)+_0x577535(0x656)),'lg':_0x30b4df['query'+_0x577535(0x5e1)+_0x577535(0x7ee)]('#saku'+'ra-es'+_0x577535(0x877))};continue;case'7':var _0x471292={'cv':{'getContext':function(){return null;}},'el':_0x30b4df};continue;case'8':document[_0x577535(0x7ef)]['appen'+_0x577535(0x566)+'d'](_0x30b4df);continue;case'9':_0x30b4df['id']=_0x577535(0x6d0)+_0x577535(0x6c5);continue;}break;}}}catch(_0x47d20f){return null;}}var _0x114df0=null;function _0x21596e(){var _0xc02126=_0x3e6ad4;if(_0x114df0)return _0x114df0;try{if(_0x5591fc[_0xc02126(0x92c)]===_0xc02126(0x76f)){if(!document[_0xc02126(0x7ef)]||!document['body'][_0xc02126(0x3df)+_0xc02126(0x566)+'d'])return null;var _0x165395=document[_0xc02126(0x53b)+_0xc02126(0xa9a)+'ent'](_0x5591fc[_0xc02126(0x5b4)]);return _0x165395['id']=_0xc02126(0x6d0)+_0xc02126(0xbae)+'es',_0x165395[_0xc02126(0xd5)]['cssTe'+'xt']=_0x5591fc['jneNQ'],document[_0xc02126(0x7ef)][_0xc02126(0x3df)+_0xc02126(0x566)+'d'](_0x165395),_0x114df0={'cv':_0x165395},_0x114df0;}else _0x2fd275['span']=_0x59c97d;}catch(_0x444d57){return null;}}function _0x141994(_0x4b653c){var _0x139ead=_0x3e6ad4,_0x5c693b={'DEMex':_0x5591fc['oMsyi']};try{var _0x11af30=Math['max'](-0x821+-0x1921+-0x28f*-0xd,window['inner'+_0x139ead(0x4f9)]||document[_0x139ead(0xbcd)+_0x139ead(0x563)+'ement'][_0x139ead(0x7b9)+_0x139ead(0x694)+'h']||-0x1f87+-0x1*-0x3ff+0x1b88),_0x5238ad=Math[_0x139ead(0x29f)](-0xd19*-0x2+0x12fd+0x2d2e*-0x1,window['inner'+_0x139ead(0x319)+'t']||document[_0x139ead(0xbcd)+_0x139ead(0x563)+_0x139ead(0x3ff)]['clien'+_0x139ead(0x6e5)+'ht']||-0x178d+0x1*-0x5ed+0x1d7a);return(_0x4b653c['cv'][_0x139ead(0x708)]!==_0x11af30||_0x4b653c['cv']['heigh'+'t']!==_0x5238ad)&&(_0x4b653c['cv'][_0x139ead(0x708)]=_0x11af30,_0x4b653c['cv']['heigh'+'t']=_0x5238ad),{'w':_0x11af30,'h':_0x5238ad};}catch(_0x11a534){if(_0x5591fc['RwzWV'](_0x139ead(0x505),_0x139ead(0x505))){var _0x15472a=_0x4e6c58[_0x139ead(0x535)+'em'](_0x31357e);if(!_0x15472a)return;var _0x3a30c8=_0x18cfe6['parse'](_0x15472a);if(_0x3a30c8&&typeof _0x3a30c8['x']===_0x139ead(0x4c6)+'r'&&typeof _0x3a30c8['y']===_0x5c693b['DEMex'])_0x387c6c[_0x139ead(0x61a)]=_0x3a30c8;}else return{'w':0x0,'h':0x0};}}function _0x4fe6bf(_0x2c5b1a){var _0x5d41ef=_0x3e6ad4,_0x5a2fe5={'Buxnz':function(_0x5583ae,_0x56af55){return _0x5583ae*_0x56af55;},'WpHkR':function(_0x4a4daf,_0x1899b7){return _0x5591fc['hpkZl'](_0x4a4daf,_0x1899b7);},'jeVdt':_0x5591fc[_0x5d41ef(0x83a)]};if(_0x5591fc['FBFjY']!==_0x5d41ef(0x849))return _0x50cc3c['round'](_0x5a2fe5[_0x5d41ef(0x600)](_0xaab6b1,0x1340+0x22cc+-0x35a8))/(-0x54*-0x23+0xdcf+0x5*-0x4fb);else{var _0x2962f5=_0x114df0;if(!_0x2962f5)return;var _0x3a0765=_0x2962f5['cv'][_0x5d41ef(0x1aa)+'ntext']&&_0x2962f5['cv'][_0x5d41ef(0x1aa)+_0x5d41ef(0x605)]('2d');if(!_0x3a0765)return;var _0x38cc99=_0x5591fc[_0x5d41ef(0x44f)](_0x141994,_0x2962f5);_0x3a0765['clear'+_0x5d41ef(0x63e)](-0x7*0x421+0x22db+-0x7f*0xc,0xc*-0x1da+-0x7*-0x3ea+-0x52e,_0x38cc99['w'],_0x38cc99['h']);if(!_0x30c840[_0x5d41ef(0x82e)]||!_0x2c5b1a||!_0x2c5b1a['me'])return;var _0x39c026=_0x2c5b1a['me'],_0x5858c8=null,_0x13d342=_0x385c38['Photo'+_0x5d41ef(0x197)+'orkSy'+'nc']||{},_0xd15d0=Object[_0x5d41ef(0x6a5)](_0x13d342);for(var _0x170a2c=-0x26f+-0x191f+0x1b8e;_0x5591fc['xfyPc'](_0x170a2c,_0xd15d0['lengt'+'h']);_0x170a2c++){if(_0x5d41ef(0x359)!==_0x5591fc['gxxME'])_0x335204['textC'+_0x5d41ef(0x3f4)+'t']=_0x5a2fe5[_0x5d41ef(0xb14)](_0x3f5bc2,_0x1feed3[_0x5d41ef(0xa0b)][_0x5d41ef(0xa86)+'r'])[_0x5d41ef(0x91b)+'ed'](0x1933*0x1+0x8fe*-0x2+0x8e*-0xd)+'x';else{var _0x25f23e=_0x3501e5(_0x13d342[_0xd15d0[_0x170a2c]][_0x5d41ef(0x6a2)],0x7*0x14b+0x1cf+-0xaa8,0x5*0x63e+-0x9e9+-0x154a);if(_0x25f23e&&_0x25f23e[-0x1164+-0x69a+0x17fe]===0x85e+0x7f8+0x22*-0x7b&&_0x25f23e[0x129+-0x25a*-0xb+0x1*-0x1b06]===-0x16a9+0x1*-0x17db+0x2e84&&_0x5591fc['rHscG'](_0x25f23e[0x12ee*0x1+-0x23d7+-0x10eb*-0x1],-0xf24+0xa11+0x513*0x1)){if(_0x5d41ef(0xae4)!=='MJvZA'){_0x5858c8=_0x5591fc['lCshb'](_0xda4deb,_0x5591fc[_0x5d41ef(0x559)](_0x13d342[_0xd15d0[_0x170a2c]][_0x5d41ef(0x6a2)],0x2*-0x60d+0x1a9*-0x1+0xe1b),'i32');break;}else return _0x5b4135['sourc'+'e']=_0x5d41ef(0x5d9)+_0x5d41ef(0xa36)+_0x5d41ef(0x90d)+_0x5d41ef(0x887)+'e',_0x2eceae[_0x5d41ef(0x66a)];}}}for(var _0x3607a0=-0x246c+-0x1ede+0x434a;_0x3607a0<_0x2c5b1a[_0x5d41ef(0x6ad)][_0x5d41ef(0xa6a)+'h'];_0x3607a0++){if(_0x5591fc['DgmGf']('XcQrj',_0x5d41ef(0x516))){var _0x1a3726=_0x3cefd7[_0x5d41ef(0x531)+'veGam'+'e']();if(_0x1a3726)return _0x57149d[_0x5d41ef(0x498)+'e']='Runti'+'me.re'+'solve'+'Game('+')',_0x1a3726;}else{var _0x427b22=_0x2c5b1a['list'][_0x3607a0],_0xb74dde=_0x5591fc[_0x5d41ef(0xaa5)](_0x5858c8,null)&&_0x5591fc['pqsrZ'](_0x427b22['team'],_0x5858c8),_0x5beff4=_0x301384(_0x39c026['eye'],[_0x427b22['x'],_0x5591fc[_0x5d41ef(0x853)](_0x427b22['y'],-0xc0*0x2+-0x9*0x377+0x10*0x20b),_0x427b22['z']],_0x38cc99['w'],_0x38cc99['h']),_0x3edf35=_0x5591fc['iTrQv'](_0x301384,_0x39c026[_0x5d41ef(0x7df)],[_0x427b22['x'],_0x5591fc[_0x5d41ef(0xb96)](_0x427b22['y'],-0x1e66+-0x599*0x5+0x3a63*0x1+0.8),_0x427b22['z']],_0x38cc99['w'],_0x38cc99['h']);if(_0x5591fc[_0x5d41ef(0x276)](!_0x5beff4,!_0x3edf35))continue;var _0x22add0=Math[_0x5d41ef(0x2ac)](_0x5beff4['x'],_0x3edf35['x']),_0x45ece0=Math[_0x5d41ef(0x29f)](_0x5beff4['x'],_0x3edf35['x']),_0x44b843=Math['min'](_0x5beff4['y'],_0x3edf35['y']),_0x5f0eca=Math['max'](_0x5beff4['y'],_0x3edf35['y']),_0x205d16=Math['max'](0x1*-0x19eb+0x6*0x53f+-0x58c,Math[_0x5d41ef(0x2ac)](-0x4d*-0x25+0xb60+-0x1645,_0x45ece0-_0x22add0)),_0x28274e=Math['max'](0x8d4+-0x13a*-0x10+-0x97a*0x3,Math['min'](0x27*0x87+0x3*0x739+-0x29b0,_0x5591fc['NmFJX'](_0x5f0eca,_0x44b843))),_0x45464d=(_0x22add0+_0x45ece0)/(-0x9*0x83+0x24b3+0x4a*-0x6f),_0x94d600=(_0x44b843+_0x5f0eca)/(-0x1*-0x391+0xb73*-0x2+0x1357*0x1);_0x3a0765[_0x5d41ef(0x993)+'eStyl'+'e']=_0xb74dde?_0x5591fc['kfRiB']:_0x5d41ef(0x9d)+_0x5d41ef(0x933)+_0x5d41ef(0x75f)+_0x5d41ef(0xa66)+')',_0x3a0765[_0x5d41ef(0x6c4)+'idth']=_0xb74dde?-0x26ae+0x3*-0x455+0x33ae:-0x1f7*-0xd+-0xac4+-0xec5,_0x3a0765['strok'+'eRect'](_0x45464d-_0x205d16/(-0x7aa+0x95+0x717),_0x94d600-_0x5591fc[_0x5d41ef(0x325)](_0x28274e,-0x20ee+0x2702*-0x1+0x1*0x47f2),_0x205d16,_0x28274e);if(!_0xb74dde){if(_0x5591fc['OmYdk']===_0x5591fc['OmYdk'])_0x3a0765[_0x5d41ef(0x557)+_0x5d41ef(0xc19)]=_0x5591fc['rQcSs'],_0x3a0765['font']=_0x5591fc['MqbbX'],_0x3a0765['fillT'+_0x5d41ef(0x801)](_0x5591fc[_0x5d41ef(0x3f2)](Math['round'](_0x427b22['d']||-0xa0e+0x11b8+0xda*-0x9),'m'),_0x45464d-_0x205d16/(-0x1318+-0x76d*0x1+0x1a87),_0x5591fc[_0x5d41ef(0x610)](_0x94d600-_0x5591fc[_0x5d41ef(0x684)](_0x28274e,0x19*0x1d+-0xf1*0x5+0x1e2),0x11b9*-0x2+-0x1*-0x16f7+0xc7e));else{_0x90b80b[_0x5d41ef(0xb4)]({'o':-(0x1*0x99b+-0x1e68+0x2*0xa67),'v':0x0,'why':_0x5a2fe5['jeVdt']+_0x255f42+('\x20Obsc'+'uredF'+_0x5d41ef(0x960)+_0x5d41ef(0x54d)+'ed')});return;}}}}}}function _0x58075(){var _0x459216=_0x3e6ad4,_0x2c7b71={'fAean':function(_0x53e847,_0x3da8cd){return _0x53e847(_0x3da8cd);},'ZjzTa':function(_0x484bdb,_0x438384){return _0x484bdb/_0x438384;}},_0x538a29=_0x277f79();if(!_0x538a29||!_0x538a29['cv'])return;try{var _0x3ebec2=_0x538a29['cv']['getCo'+'ntext']&&_0x538a29['cv'][_0x459216(0x1aa)+'ntext']('2d');if(!_0x3ebec2)return;var _0x4e8e9c=_0x538a29['cv'][_0x459216(0x708)],_0x27e551=_0x4e8e9c/(-0x170b*-0x1+-0x21d4+0xacb),_0x50e173=_0x5591fc['SezFH'](_0x172582),_0x1a8aeb=_0x50e173['me'];_0x3ebec2[_0x459216(0x97d)+_0x459216(0x63e)](-0x2192+0x1c9*-0x7+-0x2e11*-0x1,0x129d+0x23b*0x4+-0x1b89,_0x4e8e9c,_0x4e8e9c),_0x3ebec2['strok'+_0x459216(0x321)+'e']='rgba('+_0x459216(0x933)+'43,17'+_0x459216(0x862)+')',_0x3ebec2['lineW'+_0x459216(0x174)]=0x268e+-0x17*0x137+-0xa9c*0x1;for(var _0x107788=-0x9f*-0x1+0x7*-0x1db+0xc5f*0x1;_0x5591fc[_0x459216(0x8fc)](_0x107788,0xe3+-0x67*0x5b+0x51b*0x7);_0x107788++){_0x3ebec2['begin'+_0x459216(0xc17)](),_0x3ebec2[_0x459216(0x20e)](_0x27e551,_0x27e551,_0x5591fc[_0x459216(0x1c2)](_0x5591fc['gKnxh'](_0x27e551,0x1fe+0x1*-0x2185+0x1f8b)*_0x107788,-0x1*0x749+-0x5a*-0x10+0x1ac),0x53*0x43+0x18b*-0x11+0x2*0x241,_0x5591fc[_0x459216(0x393)](Math['PI'],-0x1f7+0xed3+-0xcda)),_0x3ebec2['strok'+'e']();}_0x3ebec2['begin'+_0x459216(0xc17)](),_0x3ebec2[_0x459216(0x976)+'o'](-0x1*-0x1b05+-0x125e+-0x21*0x43,_0x27e551),_0x3ebec2[_0x459216(0x8cb)+'o'](_0x5591fc['slOIO'](_0x4e8e9c,-0x1487+-0x1ecf+-0x3*-0x111e),_0x27e551),_0x3ebec2['moveT'+'o'](_0x27e551,-0xf32+-0x215b*0x1+-0x3091*-0x1),_0x3ebec2[_0x459216(0x8cb)+'o'](_0x27e551,_0x4e8e9c-(-0x1461*0x1+0x4f*0x69+0x35*-0x3a)),_0x3ebec2['strok'+'e']();if(!_0x1a8aeb){if(_0x538a29['lg'])_0x538a29['lg'][_0x459216(0x173)+_0x459216(0x3f4)+'t']='';return;}var _0x2ccb1a=_0x5591fc[_0x459216(0x4c2)](_0x27e551-(-0xec*0x2a+-0x1*0x865+0x2f23),_0x30c840[_0x459216(0x5b0)]),_0x41025e=null,_0x2f42a5=_0x385c38[_0x459216(0x7c9)+_0x459216(0x197)+'orkSy'+'nc']||{},_0x5d3c54=Object['keys'](_0x2f42a5);for(var _0x1dc264=0x16a6+-0x184b+0x1a5;_0x5591fc['xfyPc'](_0x1dc264,_0x5d3c54[_0x459216(0xa6a)+'h']);_0x1dc264++){if(_0x5591fc[_0x459216(0x3c5)]!==_0x5591fc['hcXVs']){var _0x45957e=_0x5591fc[_0x459216(0x5d6)](_0x3501e5,_0x2f42a5[_0x5d3c54[_0x1dc264]][_0x459216(0x6a2)],-0x164d+0x1*-0x893+0xea*0x22,-0x914+-0x1*-0x162f+-0xd18);if(_0x45957e&&_0x45957e[0x1f27+0x392*0x1+-0x3*0xb93]===-0x24bd+0x1542*0x1+-0x3*-0x529&&_0x45957e[-0x1*-0x56b+-0x1b6b*-0x1+-0x1*0x20d5]===0x267a+-0x2b*-0x50+-0x33ea&&_0x5591fc[_0x459216(0x2c3)](_0x45957e[-0x235b+-0x5a*-0x2f+0x2b1*0x7],-0x1582+0x38*-0x7a+0x3032*0x1)){if(_0x459216(0xef)!==_0x5591fc[_0x459216(0x9c4)]){_0x41025e=_0x5591fc[_0x459216(0xae3)](_0xda4deb,_0x2f42a5[_0x5d3c54[_0x1dc264]]['ptr']+(0x2561*0x1+0x2*0x249+-0x299b),_0x5591fc['GhEVH']);break;}else return _0x28607e['faile'+'d']++,_0x518a66[_0x459216(0x1cb)+'rror']=_0x2f188a[_0x459216(0x1cb)+'rror']||_0x2c7b71[_0x459216(0xc10)](_0x201148,_0x61d3e6&&_0x30b50e['messa'+'ge']||_0x12e7d0)[_0x459216(0x4a5)](0x475*-0x3+0xcd2+0x8d,-0x1b1*0x3+-0x19ad+0x1*0x1f38),_0x4a7b26;}}else{var _0x4f306e={'lpfua':function(_0x58f528,_0x3156cb){return _0x58f528<_0x3156cb;},'ksnGW':function(_0x4088cf,_0x3ddbe2){return _0x4088cf(_0x3ddbe2);},'rRARU':function(_0x2021be,_0x404341){return _0x2021be/_0x404341;},'Etkmw':function(_0x1c2a2d,_0x51c76c){return _0x1c2a2d-_0x51c76c;},'bWBve':function(_0x499319,_0x1185fd){return _0x499319+_0x1185fd;},'sLudr':function(_0x4ea87e){var _0x4a69a0=_0x459216;return _0x5591fc[_0x4a69a0(0x872)](_0x4ea87e);}},_0x381ffb=_0x993606(_0x5591fc['EqJYW'],_0x459216(0xa15)+_0x459216(0x948)),_0x52d9d9=_0x13fe2c[_0x459216(0x53b)+'eElem'+_0x459216(0xac3)](_0x5591fc['Iagur']);_0x52d9d9['type']=_0x459216(0x487),_0x52d9d9[_0x459216(0x9ed)+_0x459216(0x624)]=_0x5591fc[_0x459216(0xf5)],_0x52d9d9['min']=_0x5591fc[_0x459216(0x490)](_0x7c1f56,_0x3f0cf8),_0x52d9d9[_0x459216(0x29f)]=_0x3eefc1(_0x19a25e),_0x52d9d9['step']=_0xe94134(_0x5cce2d);var _0x51998b=_0x522005(_0x459216(0x5b0),_0x5591fc[_0x459216(0x6b7)]),_0x5ad866=function(){var _0x4f5cd4=_0x459216,_0x4d9217=_0x4b9e54();_0x52d9d9[_0x4f5cd4(0x6c7)]=_0x4a6627(_0x4d9217),_0x51998b[_0x4f5cd4(0x173)+'onten'+'t']=(_0x4f306e['lpfua'](_0x530125,-0x1*-0x1327+-0x1d*-0x3d+-0x1a0f)?_0x4d9217[_0x4f5cd4(0x91b)+'ed'](0x1*0x10f1+-0x1*-0xf25+-0x2b*0xbf):_0x4f306e['ksnGW'](_0x42eb87,_0x4b3b78[_0x4f5cd4(0x2ff)](_0x4d9217)))+(_0x52d9d9[_0x4f5cd4(0xa1)+'et'][_0x4f5cd4(0x80b)]||'');var _0x136f56=_0x4f306e['rRARU'](_0x4f306e[_0x4f5cd4(0x60a)](_0x4d9217,_0x2dfd82),_0x4f306e['Etkmw'](_0x2d127b,_0x2af55d))*(0x1*0x20b0+0x1*-0x1f7c+-0xd*0x10);_0x52d9d9[_0x4f5cd4(0xd5)][_0x4f5cd4(0x5f8)+'opert'+'y'](_0x4f5cd4(0x818),_0x4f306e[_0x4f5cd4(0xbf1)](_0x136f56,'%'));};return _0x52d9d9[_0x459216(0x462)+'ut']=function(){var _0x229a37=_0x459216;_0x4f02db(_0x53fff0(_0x52d9d9[_0x229a37(0x6c7)])||_0x103eae),_0x4f306e['sLudr'](_0x5ad866);},_0x381ffb['appen'+'dChil'+'d'](_0x52d9d9),_0x381ffb[_0x459216(0x3df)+_0x459216(0x566)+'d'](_0x51998b),_0x381ffb['sync']=_0x5ad866,_0x381ffb['input']=_0x52d9d9,_0x5ad866(),_0x20ce5d[_0x459216(0x96f)][_0x459216(0xb4)](_0x5ad866),_0x381ffb;}}var _0x485e9d=-0x2bf*-0x1+-0x6e*0x2a+0x1*0xf4d;for(var _0x775143=-0x2*-0x1335+0x11ee+-0x3858;_0x775143<_0x50e173[_0x459216(0x6ad)]['lengt'+'h'];_0x775143++){if(_0x5591fc[_0x459216(0x8b8)]('pgfbi',_0x5591fc['BoEkp'])){var _0xa1fc40=_0x50e173[_0x459216(0x6ad)][_0x775143],_0x3d419b=_0x5591fc[_0x459216(0x23e)](_0x5591fc[_0x459216(0xb87)](_0xa1fc40['x'],_0x1a8aeb[_0x459216(0xb9b)][0x5*0x751+-0x18cf+-0xbc6]),_0x2ccb1a),_0x4cacad=(_0xa1fc40['z']-_0x1a8aeb['feet'][0x1e63+-0x1cab+-0x92*0x3])*_0x2ccb1a,_0x35b6ec=Math['sqrt'](_0x5591fc['zqAgA'](_0x5591fc[_0x459216(0x322)](_0x3d419b,_0x3d419b),_0x4cacad*_0x4cacad)),_0x2c2071=_0x27e551,_0x512d47=_0x27e551;if(_0x35b6ec>_0x27e551-(-0x1*0x137+-0x39+0x176)){if(_0x459216(0x55e)===_0x459216(0x127))return{'o':'0x'+_0x3a80d8[-0x1679+0x7*-0x484+-0x3615*-0x1]['toStr'+_0x459216(0x9e7)](0x1d86+0x26a2+-0x883*0x8),'v':_0x2ccd0a(_0x1252cc+_0x4518a1[0xe51*0x1+-0x1888+0xa37],_0x1fc115[0x1*-0x1d7b+-0x474+0x2d4*0xc])};else _0x2c2071=_0x5591fc[_0x459216(0x7a3)](_0x27e551,_0x5591fc[_0x459216(0x63f)](_0x5591fc['rkVxN'](_0x3d419b,_0x35b6ec),_0x5591fc[_0x459216(0x8a4)](_0x27e551,0xf6a*0x2+-0x395*-0x1+-0x2263))),_0x512d47=_0x27e551+_0x4cacad/_0x35b6ec*(_0x27e551-(0xf*0x13d+0xcf7+-0x1f84));}else _0x2c2071=_0x5591fc[_0x459216(0xb96)](_0x27e551,_0x3d419b),_0x512d47=_0x27e551+_0x4cacad;var _0x3d7889=_0x41025e!==null&&_0xa1fc40[_0x459216(0xe1)]===_0x41025e;_0x3ebec2[_0x459216(0x557)+'tyle']=_0x3d7889?_0x459216(0x851)+'6a':_0x5591fc[_0x459216(0x8f6)],_0x3ebec2['begin'+_0x459216(0xc17)](),_0x3ebec2[_0x459216(0x20e)](_0x2c2071,_0x512d47,_0x3d7889?-0x29*0xa2+-0x1008+-0x1*-0x29fc:0xdcc*0x1+0x19be+-0x3*0xd2d+0.20000000000000018,-0xddc+-0x16c3*0x1+0x4b*0x7d,Math['PI']*(-0xd27+-0x57a*0x5+0x6b*0x61)),_0x3ebec2['fill'](),_0x485e9d++;}else{var _0x72e568=_0x33723c(_0x106100[_0x459216(0x7df)],[_0x4a1bcc[_0x459216(0x7df)][0xc3e+0x1723+-0x2361],_0x5e2f2a[_0x459216(0x7df)][-0x119*-0xf+-0x1a9*0x7+-0x4d7],_0x5a1ee5[_0x459216(0x7df)][-0x383*0xa+-0x171+0x2491]+(0x2f*0x65+0xda2+-0x202c)],0x131a+-0x43*-0x19+-0x15bd,-0x13e*0xb+0x8e*-0x27+-0x1*-0x2734);_0x72e568&&(_0x7448a9=_0x72e568['x']/(-0x1*0x153b+-0xa3b+0x6*0x5e5),_0x129980=_0x2c7b71['ZjzTa'](_0x72e568['y'],0x2*0x125f+-0x72a+-0x19ac));}}_0x3ebec2['fillS'+'tyle']=_0x5591fc[_0x459216(0x482)],_0x3ebec2[_0x459216(0x1e6)+_0x459216(0xc17)](),_0x3ebec2[_0x459216(0x20e)](_0x27e551,_0x27e551,0x1*0x65b+0x3*0x157+0x7*-0x17b,0x1*0x851+0x1*0xc56+0x14a7*-0x1,Math['PI']*(-0x4*0x53+-0x46a+0x5b8)),_0x3ebec2[_0x459216(0x13b)](),_0x538a29['lg']&&(_0x538a29['lg'][_0x459216(0x173)+_0x459216(0x3f4)+'t']=_0x5591fc[_0x459216(0x5a0)](_0x5591fc[_0x459216(0x751)](_0x5591fc[_0x459216(0xb7a)](_0x5591fc['UCxNo']('esp\x20',_0x485e9d)+_0x459216(0x3ec),Math[_0x459216(0x2ff)](_0x30c840[_0x459216(0x5b0)])),'m')+(_0x30c840[_0x459216(0x82e)]?_0x5591fc[_0x459216(0x52b)](_0x5591fc[_0x459216(0xb81)](_0x5591fc[_0x459216(0x96b)],Math[_0x459216(0x2ff)](_0x594e08[_0x459216(0x26a)])),'°'):''),_0x5591fc['nhRqp'](_0x41025e,null)?_0x5591fc['uYDql']+_0x41025e:''));}catch(_0x84096e){}}function _0x2800c4(){var _0xd5ba6d=_0x3e6ad4,_0x7e71de=_0x385c38[_0xd5ba6d(0x7c9)+_0xd5ba6d(0x197)+_0xd5ba6d(0xa5a)+'nc']||{};if(!Object['keys'](_0x7e71de)['lengt'+'h'])return![];return!!_0x2f3d98();}function _0x539dd7(_0x362f0e){var _0x2ce175=_0x3e6ad4,_0x10a5b0={'wvgic':_0x5591fc['cpTJL']};try{if(_0x5591fc['NhZUg']('Kxfqd',_0x5591fc[_0x2ce175(0x86e)])){if(!_0x305750[_0x2ce175(0x7f6)+_0x2ce175(0x3ff)+_0x2ce175(0x999)](_0x2ce175(0x6d0)+_0x2ce175(0xabe)+'v2-cs'+'s')){var _0x378bd3=_0x236406[_0x2ce175(0x53b)+'eElem'+_0x2ce175(0xac3)](_0x2ce175(0xd5));_0x378bd3['id']=_0x10a5b0['wvgic'],_0x378bd3['textC'+'onten'+'t']=_0x2ce175(0x30d)+_0x2ce175(0xb25)+_0x2ce175(0x470)+'ll:in'+'itial'+'}',(_0x107743[_0x2ce175(0xa5)]||_0xd15c20[_0x2ce175(0xbcd)+_0x2ce175(0x563)+'ement'])[_0x2ce175(0x3df)+_0x2ce175(0x566)+'d'](_0x378bd3);}return _0x115122=_0xf8a364[_0x2ce175(0x53b)+_0x2ce175(0xa9a)+_0x2ce175(0xac3)](_0x2ce175(0x786)),_0x42e96a['id']=_0x2ce175(0x6d0)+_0x2ce175(0xabe)+'v2',_0x5454f1[_0x2ce175(0x7ef)][_0x2ce175(0x3df)+_0x2ce175(0x566)+'d'](_0xa41997),_0x2b32aa;}else{var _0x21b4de=_0x4b6123;if(_0x21b4de&&_0x21b4de['el'])_0x21b4de['el'][_0x2ce175(0xd5)][_0x2ce175(0x68f)+'ay']=_0x362f0e?'':_0x2ce175(0x3cd);var _0x349f0e=_0x114df0;if(_0x349f0e&&_0x349f0e['cv'])_0x349f0e['cv'][_0x2ce175(0xd5)]['displ'+'ay']=_0x362f0e?'':_0x2ce175(0x3cd);}}catch(_0x346c07){}}function _0xaa20c4(){var _0x5f434e=_0x3e6ad4,_0x25beba={'lhhMB':function(_0xd00214,_0x4d426f){return _0xd00214+_0x4d426f;},'wZlip':function(_0x522d6d,_0x48f573){return _0x522d6d+_0x48f573;},'bxoKR':function(_0x560c6f,_0x586d27){return _0x560c6f+_0x586d27;},'oDruc':_0x5591fc[_0x5f434e(0xba0)],'VMPui':_0x5591fc[_0x5f434e(0x9ee)],'bDxQE':function(_0x16aebf,_0x2a5cf9,_0x32c295){return _0x5591fc['Vwtwg'](_0x16aebf,_0x2a5cf9,_0x32c295);}};if(!_0x30c840['on']||!_0x5591fc[_0x5f434e(0x6c1)](_0x2800c4)){if('nZpZA'===_0x5591fc['Bhtvb']){_0x539dd7(![]),_0x5591fc[_0x5f434e(0x6b9)](setTimeout,_0xaa20c4,-0x80+-0x15f*0x12+0x1a5a);return;}else{_0x180747[_0x5f434e(0x75e)]={};for(var _0x4f8cfc=0xab8+-0x2b*0xb5+0x1*0x13af;_0x4f8cfc<_0x77e3b5['lengt'+'h'];_0x4f8cfc++){var _0x5e9963=_0x5591fc[_0x5f434e(0x96d)](_0x3aaa5b,_0x5591fc['edWyu'](_0xcb259,_0x47e3ac(_0x4e6c87[_0x4f8cfc][-0x21b4+0x129e*-0x2+0x14*0x38c],-0x1d19+0x1b6b+0x1be)),'i32');if(_0x5e9963!==_0x4b0beb)_0x5580bc['tag'][_0x52b0ec[_0x4f8cfc][0x1*-0x224f+0x1437*0x1+0xe19]]=_0x5e9963;}}}_0x5591fc['vwsXj'](_0x539dd7,!![]),_0x460173(),_0x5591fc[_0x5f434e(0x869)](_0x277f79);if(_0x30c840['boxes'])_0x21596e();var _0x35fd6c=null;try{if(_0x5f434e(0x48d)!=='TcCTC')_0x35fd6c=_0x172582();else{var _0x4ad0f1=(_0x5f434e(0x385)+'|1|4')['split']('|'),_0x42c22f=0x582+-0x9b*-0x11+-0xfcd;while(!![]){switch(_0x4ad0f1[_0x42c22f++]){case'0':_0x313c74=_0x23923f;continue;case'1':try{_0x69d4c(_0x26b6fc);}catch(_0x45dff4){}continue;case'2':_0xba5026[_0x5f434e(0xb1f)](_0x25beba['lhhMB'](_0x25beba[_0x5f434e(0x3f0)](_0x28b7b9,'\x0a')+_0x26151c['strin'+_0x5f434e(0x6d7)](_0x5eb3ec,null,0x6+0x1bff*-0x1+0x1bfa)+'\x0a',_0xfb5c66));continue;case'3':_0x23feea[_0x5f434e(0xb1f)](_0x5f434e(0xbd9)+_0x5f434e(0x231)+'\x20Skil'+'lWarz'+_0x5f434e(0x7d2)+'rt',_0x25beba[_0x5f434e(0x581)](_0x25beba[_0x5f434e(0x15a)]+_0x193223,_0x25beba[_0x5f434e(0x2ea)]),_0x1dd522);continue;case'4':_0x25beba[_0x5f434e(0x72a)](_0x5462e4,'repor'+'t',{'report':_0x3485e5});continue;}break;}}}catch(_0x5a44cb){}try{if(_0x5591fc['QhUDi'](_0x5591fc[_0x5f434e(0x70d)],'SisTl'))_0x5591fc[_0x5f434e(0xb9c)](_0x58075);else{_0x8a2b6a[_0x5f434e(0x199)]=!!_0xe5ba67;var _0x5dacfb=_0x1b7584();if(!_0x5dacfb)return;_0x5dacfb[_0x5f434e(0x9ed)+_0x5f434e(0x624)]=_0x5591fc['yLaUz']+(_0x1e5d9e[_0x5f434e(0x199)]?_0x5591fc[_0x5f434e(0x79f)]:'');if(_0x4fe2f9[_0x5f434e(0x3c8)])_0x50aa17['petal'][_0x5f434e(0xd5)][_0x5f434e(0x1b7)+'ty']=_0x47c544['open']?'1':'.5';if(_0x5b96a5[_0x5f434e(0x199)]){_0x480b55(_0x5e030f['cat']);try{var _0x44fadf=_0x398f86['inner'+'Heigh'+'t']||-0x65*0x11+0x1*-0x14cd+0x1ea2;if(_0x44fadf<0x6f4+-0x6*-0x3e+0x2*-0x2fe)_0x122c12(![]);}catch(_0x1f4991){}}}}catch(_0x90d591){}try{if(_0x5f434e(0xbbe)===_0x5591fc[_0x5f434e(0x2d9)])_0x5591fc[_0x5f434e(0x93)](_0x4fe6bf,_0x35fd6c);else return new _0x131762(_0x393ab6[_0x5f434e(0x957)+'r'],_0x450f69[_0x5f434e(0xa12)+'ffset'],_0x2cfdfb[_0x5f434e(0xbcc)+_0x5f434e(0x4b3)]);}catch(_0x2eb8ee){}_0x5591fc['sLjyd'](setTimeout,_0xaa20c4,0xc87+-0xe*0x261+0x3b*0x5b);}function _0x3e0690(){var _0x1bb0b1=_0x3e6ad4,_0x244c25={'bVGVg':function(_0x468c06,_0x2ada72){return _0x468c06+_0x2ada72;}};if(_0x1bb0b1(0x982)!==_0x1bb0b1(0x4ee)){var _0x220164=window['Unity'+_0x1bb0b1(0x94f)+'dkit']&&window[_0x1bb0b1(0xb3d)+'WebMo'+'dkit'][_0x1bb0b1(0x2de)+'me']||null,_0x335056=_0x220164&&_0x220164[_0x1bb0b1(0x334)+_0x1bb0b1(0x2d7)+_0x1bb0b1(0x801)],_0xb094e2=_0x335056&&_0x335056[_0x1bb0b1(0x602)+_0x1bb0b1(0xea)],_0x1111a2={},_0x57a5ae=[];for(var _0x56d33a in _0x3f2eb8){_0x1111a2[_0x56d33a]=_0x5591fc[_0x1bb0b1(0xbc8)]('0x',_0x3f2eb8[_0x56d33a]['ptr']['toStr'+_0x1bb0b1(0x9e7)](0x9e5+0x1cc9+0x269e*-0x1));if(_0x3f2eb8[_0x56d33a][_0x1bb0b1(0x67b)+'ced'])_0x57a5ae[_0x1bb0b1(0xb4)](_0x56d33a);}var _0x4897fb={};for(var _0x19e4c3 in _0x3f2eb8)_0x4897fb[_0x19e4c3]=_0x5591fc['qSGRo'](_0x362ea6,_0x3f2eb8[_0x19e4c3]['ptr']);var _0x2ab471={},_0x3031c9=null;try{_0x2ab471=_0x2fc3fc();}catch(_0x47ec4f){_0x3031c9=_0x5591fc['CMCuv'](String,_0x47ec4f&&_0x47ec4f['messa'+'ge']||_0x47ec4f);}var _0x3f86bb={'version':_0xd31e38,'when':new Date()[_0x1bb0b1(0x3b9)+_0x1bb0b1(0xbe)+'g'](),'elapsedMs':_0x5591fc['ErAtr'](Date['now'](),_0x50451a),'frame':location[_0x1bb0b1(0x5c3)][_0x1bb0b1(0x4a5)](0x2*-0x10d+0xd6*-0xb+-0x5a6*-0x2,-0x2*0xea3+0x204c+-0x28e*0x1),'host':_0x3dc887,'frameRole':_0x55f777,'uwmk':!!_0x220164,'il2CppContext':!!_0x335056,'typeCount':_0xb094e2?Object[_0x1bb0b1(0x6a5)](_0xb094e2)[_0x1bb0b1(0xa6a)+'h']:null,'arm':_0x4bce30,'assemblies':_0xe68dc2,'hooksTotal':_0x3e8aab[_0x1bb0b1(0xa6a)+'h'],'hooksApplied':_0x5591fc['NCiob'](_0x496b3b),'hooksResolved':_0x5591fc[_0x1bb0b1(0xa8a)](_0x34035f),'hooksRegisteredAtArm':_0x4bce30['hooks'+_0x1bb0b1(0x2bd)+'tered']||0x5a8*0x1+0x1*-0x121f+0xc77,'hookErrors':_0x491ad4[_0x1bb0b1(0x4a5)](-0x1f18+-0x30f*0x1+0x2227,-0x24ff+0x1c33+0x8d4),'instances':_0x1111a2,'classNames':_0x4897fb,'instancesReplaced':_0x57a5ae,'hookFireProof':_0x92977a,'survey':_0x2ab471,'actkKeys':_0x118c5e,'surveyRows':Object['keys'](_0x2ab471)['reduc'+'e'](function(_0x2bb453,_0x245c5a){var _0x426ed5=_0x1bb0b1,_0x87aaf2={'gqtaj':_0x426ed5(0x6e6)+'ion','pSsaI':function(_0x1cc1b9,_0x22cfb8){return _0x1cc1b9(_0x22cfb8);}};if(_0x5591fc['vJYAF']==='aAZlP')return _0x2bb453+_0x2ab471[_0x245c5a]['lengt'+'h'];else{if(_0xe81732&&typeof _0x4025c4['then']===_0x87aaf2[_0x426ed5(0xaae)])_0x2693e7[_0x426ed5(0x398)](_0x380c8b,function(){});else _0x87aaf2[_0x426ed5(0x6b2)](_0x2ef647,_0x58214);}},-0xbf*-0x25+-0x1e84+0x2e9*0x1),'reads':{'ok':_0x3bac15['ok'],'failed':_0x3bac15[_0x1bb0b1(0x5be)+'d'],'lastError':_0x3bac15[_0x1bb0b1(0x1cb)+_0x1bb0b1(0x8a9)],'source':_0x3bac15['sourc'+'e']},'identity':_0x3d7586(),'globals':_0x6724ae(),'wasmMemory':{'captured':!!_0x3311a8,'atMs':_0x3d4382,'bytes':(function(){var _0x28992d=_0x1bb0b1;try{return _0x3311a8&&_0x3311a8[_0x28992d(0x957)+'r']?_0x3311a8[_0x28992d(0x957)+'r'][_0x28992d(0xbcc)+_0x28992d(0x4b3)]:0x13e9+-0x12fd*-0x2+-0x39e3;}catch(_0x4317ad){return 0x57*-0x1+0x177e+-0x1727;}}()),'exportKeys':_0x4ac8f0},'diff':_0x33c5bb[_0x1bb0b1(0x4a5)](-0x21a5+-0x43d+-0x2*-0x12f1,0x1*-0x24fb+-0x1f*0xfd+0x2b6*0x19),'speed':{'on':_0x2680b6['on'],'factor':_0x2680b6[_0x1bb0b1(0xa86)+'r'],'writes':_0x13ba37,'scaled':_0x469dad['slice'](0x5b0+0x24da+-0x2a8a,-0x10cd+-0xb1e+0x1bfb),'skipped':_0x285db8[_0x1bb0b1(0x4a5)](0xa90+-0xb*0x61+0x1*-0x665,-0x59*0x14+0x106b+-0x967*0x1)},'esp':_0x277564(),'view':_0x5591fc[_0x1bb0b1(0x1ba)](_0x2ea369),'angles':(function(){var _0x1a84ea=_0x1bb0b1,_0x452bac={'nOLpu':_0x1a84ea(0x786),'LieLZ':_0x5591fc[_0x1a84ea(0x43c)],'kriTG':_0x5591fc[_0x1a84ea(0x1e4)]},_0x1b3204=_0x5591fc['nboMw'](_0x19adb5),_0x44d21e=null,_0x4d2290=null,_0x45926d=_0x2f3d98();if(_0x45926d){if(_0x5591fc['tlvas'](_0x5591fc['ZZHRf'],_0x5591fc[_0x1a84ea(0x296)])){if(!_0x2925c4['body']||!_0x12ebdc['body'][_0x1a84ea(0x3df)+'dChil'+'d'])return null;var _0x9628c5=_0x53cc4b['creat'+'eElem'+'ent'](_0x452bac[_0x1a84ea(0x4bf)]);_0x9628c5['id']=_0x1a84ea(0x6d0)+'a-esp',_0x9628c5[_0x1a84ea(0xd5)][_0x1a84ea(0x70f)+'xt']=_0x1a84ea(0x7e6)+_0x1a84ea(0xa63)+'ixed;'+'right'+':12px'+';top:'+_0x1a84ea(0x2be)+'z-ind'+_0x1a84ea(0x349)+'47483'+_0x1a84ea(0xb33)+_0x1a84ea(0x4ae)+'r-eve'+_0x1a84ea(0x29d)+'one;'+(_0x1a84ea(0x9a3)+_0x1a84ea(0x2ff)+':rgba'+_0x1a84ea(0x7a8)+_0x1a84ea(0x67e)+_0x1a84ea(0x874)+_0x1a84ea(0x526)+'r:1px'+'\x20soli'+_0x1a84ea(0xa2c)+'a(255'+',143,'+_0x1a84ea(0xbf9)+_0x1a84ea(0x23f)+_0x1a84ea(0xc16)+'radiu'+_0x1a84ea(0x2f5)+'x;')+('paddi'+_0x1a84ea(0x17f)+_0x1a84ea(0x27c)+_0x1a84ea(0x3d9)+_0x1a84ea(0x117)+'\x20ui-m'+_0x1a84ea(0xadd)+'ace,C'+'onsol'+_0x1a84ea(0x361)+_0x1a84ea(0xb97)+_0x1a84ea(0xa9c)+_0x1a84ea(0x926)+'bda9c'+'9;')+('user-'+_0x1a84ea(0xb7f)+'t:non'+_0x1a84ea(0x83c)+'bkit-'+'user-'+'selec'+_0x1a84ea(0x426)+'e;'),_0x9628c5['inner'+'HTML']='<canv'+'as\x20id'+_0x1a84ea(0x18d)+'ura-e'+'sp-cv'+_0x1a84ea(0x8af)+_0x1a84ea(0x5c8)+_0x1a84ea(0x7dc)+'eight'+'=\x22160'+'\x22\x20sty'+'le=\x22d'+'ispla'+'y:blo'+'ck\x22><'+_0x1a84ea(0x110)+_0x1a84ea(0xb45)+_0x452bac['LieLZ'];var _0x7b7e84={'cv':{'getContext':function(){return null;}},'el':_0x9628c5};_0x3ec12a[_0x1a84ea(0x7ef)][_0x1a84ea(0x3df)+'dChil'+'d'](_0x9628c5),_0x467e18={'el':_0x9628c5,'cv':_0x9628c5[_0x1a84ea(0x672)+'Selec'+_0x1a84ea(0x7ee)](_0x452bac['kriTG']),'lg':_0x9628c5[_0x1a84ea(0x672)+_0x1a84ea(0x5e1)+_0x1a84ea(0x7ee)](_0x1a84ea(0x30d)+_0x1a84ea(0x512)+'p-lg')};if(!_0xd1eeef['cv']||!_0x4f7499['cv']['getCo'+_0x1a84ea(0x605)])_0x52bcdd=_0x7b7e84;return _0x492e60;}else{var _0x36515c=_0x301384(_0x45926d[_0x1a84ea(0x7df)],[_0x45926d[_0x1a84ea(0x7df)][0x1d72+0x28e+0x800*-0x4],_0x45926d[_0x1a84ea(0x7df)][-0x4*0x3ec+0x1*-0x260f+0x35c0],_0x5591fc[_0x1a84ea(0xd1)](_0x45926d['eye'][0x406+0x21f+-0x1*0x623],-0x22f+-0x2c8+0x4f8)],-0x6*-0x60d+0x24f3+-0x1b1*0x29,0x1cf5+-0x35*-0x8+-0x1ab5*0x1);_0x36515c&&('GQPxQ'!==_0x5591fc[_0x1a84ea(0x793)]?(_0x44d21e=_0x36515c['x']/(0x375*0x8+-0x1*-0x21fa+-0x39ba),_0x4d2290=_0x5591fc['Rcfbs'](_0x36515c['y'],0x9*0x246+-0x1029+-0x1*0x65)):_0x2843dc[_0x1a84ea(0xb4)](_0x506d12(_0x5ec5e0&&_0x5be1ef[_0x1a84ea(0x153)+'ge']||_0x2c1fbe)[_0x1a84ea(0x4a5)](-0xc4a+-0x10*0x69+-0x26*-0x7f,-0x52*-0x67+-0x1*0x10c4+-0xfc2)));}}var _0xede8e0=null,_0x33caa8=null;if(_0x45926d){var _0x31e782=_0x5591fc[_0x1a84ea(0xa28)](_0x301384,_0x45926d['eye'],[_0x45926d['eye'][-0x1*-0x8e1+0x2351+0x2c32*-0x1],_0x5591fc[_0x1a84ea(0x56e)](_0x45926d[_0x1a84ea(0x7df)][-0x2193+-0x6*-0x30f+0xf3a],0xeb6+0x78d*0x1+0x1639*-0x1),_0x5591fc[_0x1a84ea(0x19e)](_0x45926d['eye'][-0x93*-0x19+-0x79*-0xb+-0x138c],-0x4e1*0x2+0xc3c+0xd*-0x30)],0x1716+0x216f+0x349d*-0x1,0x1a6c+0x7*-0xfb+0x1*-0xfa7);if(_0x31e782)_0xede8e0=_0x5591fc[_0x1a84ea(0x9a9)](_0x31e782['y'],0x1469+0x197e+-0x29ff);var _0x35c7e8=_0x301384(_0x45926d[_0x1a84ea(0x7df)],[_0x45926d[_0x1a84ea(0x7df)][-0x19db*0x1+0xb66+0xe75],_0x45926d[_0x1a84ea(0x7df)][0x15f6+-0x1*0x15ce+0x1*-0x27]-(-0x619+0x1d3f+-0x171c),_0x45926d[_0x1a84ea(0x7df)][0x22f1+0x1a0d+-0x1*0x3cfc]+(0xb8*0x29+0x1*0x24fd+0x31*-0x15b)],0x614+0x9*-0x53+-0x1*-0xbf,-0x1*0x1154+0x125c+-0x1*-0x2e0);if(_0x35c7e8)_0x33caa8=_0x35c7e8['y']/(-0x7de*-0x2+0x8b7+-0x148b);}return{'identified':_0x6211af['ident'+'ified'],'why':_0x6211af['why'],'source':_0x6211af['sourc'+'e'],'yawAt':_0x6211af['yawGe'+'tter']||_0x5591fc[_0x1a84ea(0x7d6)],'pitchAt':_0x6211af[_0x1a84ea(0x7c8)+'Gette'+'r']||_0x1a84ea(0x638)+_0x1a84ea(0x1d6)+'s)','getters':_0x6211af[_0x1a84ea(0xb3e)+'rs'],'rawPitch':_0x6211af[_0x1a84ea(0xaa)+_0x1a84ea(0xb0b)],'rawYaw':_0x6211af[_0x1a84ea(0x352)+'w'],'pitch':_0x6211af[_0x1a84ea(0x7c8)],'yaw':_0x6211af[_0x1a84ea(0x984)],'legacyOffsetsCleared':_0x15e589,'fov':_0x594e08[_0x1a84ea(0x26a)],'fovSane':_0x594e08['fov']>=-0x1*0x1696+0x1*-0x7ef+0x1ec1&&_0x594e08[_0x1a84ea(0x26a)]<=-0x2303+0xa8e+0x115*0x17,'centreX':_0x44d21e,'centreY':_0x4d2290,'aboveY':_0xede8e0,'belowY':_0x33caa8};}()),'fov':_0x594e08['fov'],'espView':{'on':_0x30c840['on'],'boxes':_0x30c840[_0x1bb0b1(0x82e)],'span':_0x30c840['span']},'local':(function(){var _0x202d12=_0x1bb0b1,_0x169c37=_0x2f3d98();if(!_0x169c37)return null;return{'ptr':_0x244c25['bVGVg']('0x',_0x169c37[_0x202d12(0x6a2)][_0x202d12(0x8e7)+_0x202d12(0x9e7)](0x1f22+-0xb0f+-0x6d*0x2f)),'feet':_0x169c37['feet'],'eye':_0x169c37[_0x202d12(0x7df)],'posAt':_0x169c37[_0x202d12(0x225)],'copies':_0x169c37['copie'+'s'],'cluster':_0x169c37['clust'+'er'],'eyeHeight':_0x577cc5,'pitch':_0x169c37[_0x202d12(0x7c8)],'yaw':_0x169c37[_0x202d12(0x984)],'reach':_0x169c37[_0x202d12(0xacf)]};}()),'uwmkLog':_0xf392a7[_0x1bb0b1(0x4a5)](-0x11f*0x1f+0x5b9+0x1d08,0x44*0x36+0x1*-0x265b+0x1817),'warnings':[]};if(_0x3031c9)_0x3f86bb[_0x1bb0b1(0x2d4)+'ngs'][_0x1bb0b1(0xb4)](_0x5591fc['PCmgN']+_0x3031c9);if(_0x4bce30[_0x1bb0b1(0x19c)])_0x3f86bb[_0x1bb0b1(0x2d4)+_0x1bb0b1(0x47b)][_0x1bb0b1(0xb4)](_0x5591fc[_0x1bb0b1(0xe8)](_0x5591fc[_0x1bb0b1(0x1d0)],_0x4bce30['error']));_0x3f86bb[_0x1bb0b1(0x4a2)+_0x1bb0b1(0x5ab)]===0x12e0+-0x16d9+-0x9*-0x71&&_0x5591fc['YcYVr'](Object['keys'](_0x3f86bb[_0x1bb0b1(0x294)+_0x1bb0b1(0x3a9)])['lengt'+'h'],0x3*0x66a+0x1*-0x1cd+-0x1171)&&(_0x5591fc[_0x1bb0b1(0xae7)](_0x5591fc[_0x1bb0b1(0x93f)],_0x1bb0b1(0x284))?_0x3f86bb[_0x1bb0b1(0x2d4)+'ngs'][_0x1bb0b1(0xb4)](_0x5591fc['toRXX'](_0x1bb0b1(0x6dc)+_0x1bb0b1(0x8a8),Object[_0x1bb0b1(0x6a5)](_0x3f86bb['insta'+'nces'])[_0x1bb0b1(0xa6a)+'h'])+_0x5591fc[_0x1bb0b1(0x3a0)]+(_0x3bac15[_0x1bb0b1(0x1cb)+'rror']?_0x5591fc[_0x1bb0b1(0x353)]+_0x3bac15[_0x1bb0b1(0x1cb)+'rror']:_0x5591fc['CJriY'])):_0x44533b[_0x1bb0b1(0xbca)]=_0x5591fc[_0x1bb0b1(0xbe2)](_0x5591fc['MgnUW'],_0x5591fc[_0x1bb0b1(0x3bb)]));_0x3f86bb['ident'+_0x1bb0b1(0xb48)]&&_0x5591fc['qEEaB'](_0x3f86bb[_0x1bb0b1(0xb93)+'ity'][_0x1bb0b1(0xa46)+'tches'],![])&&_0x3f86bb['warni'+_0x1bb0b1(0x47b)]['push'](_0x5591fc[_0x1bb0b1(0xd1)](_0x1bb0b1(0x45e)+_0x1bb0b1(0x145)+_0x1bb0b1(0xad0)+'PY\x20TO'+_0x1bb0b1(0x323)+_0x1bb0b1(0x311)+_0x1bb0b1(0xa65)+_0x1bb0b1(0xb3d)+_0x1bb0b1(0x94f)+'dkit.'+_0x1bb0b1(0x40d)+_0x1bb0b1(0x2de)+'me\x20we'+'\x20arme'+_0x1bb0b1(0x1ee)+'\x20'+('repla'+'ced\x20b'+'y\x20a\x20d'+'iffer'+'ent\x20i'+_0x1bb0b1(0xad6)+_0x1bb0b1(0x7e9)+_0x1bb0b1(0x67f)+'are\x20a'+'sking'+_0x1bb0b1(0xb5b)+'wrong'+_0x1bb0b1(0x47d)+_0x1bb0b1(0x663)+'r\x20'),'the\x20g'+'ame\x20w'+_0x1bb0b1(0x7d3)+_0x1bb0b1(0x5a1)+'ne\x20ho'+_0x1bb0b1(0xa68)+_0x1bb0b1(0xbba)+'s\x20orp'+_0x1bb0b1(0xb37)+_0x1bb0b1(0x70b)+'able\x20'+_0x1bb0b1(0x759)+_0x1bb0b1(0xa80)+'r\x20')+_0x5591fc[_0x1bb0b1(0x78a)]);_0x3f86bb[_0x1bb0b1(0xb93)+_0x1bb0b1(0xb48)]&&_0x3f86bb[_0x1bb0b1(0xb93)+_0x1bb0b1(0xb48)][_0x1bb0b1(0x5d9)+_0x1bb0b1(0xa64)+'imeIs'+'Expor'+_0x1bb0b1(0xf6)]===![]&&_0x3f86bb['warni'+_0x1bb0b1(0x47b)]['push'](_0x1bb0b1(0x5d9)+_0x1bb0b1(0xa36)+_0x1bb0b1(0x90d)+_0x1bb0b1(0x7a1)+_0x1bb0b1(0xb5)+_0x1bb0b1(0xa65)+_0x1bb0b1(0xb3d)+'WebMo'+_0x1bb0b1(0x5de)+_0x1bb0b1(0x2de)+'me\x20-\x20'+_0x1bb0b1(0x6c9)+_0x1bb0b1(0x16e)+'\x20was\x20'+_0x1bb0b1(0xbe8)+'\x20'+_0x5591fc['HVtyr']);if(_0x3f86bb['esp']&&_0x3f86bb[_0x1bb0b1(0x6e9)]['note'])_0x3f86bb[_0x1bb0b1(0x2d4)+_0x1bb0b1(0x47b)]['push'](_0x1bb0b1(0x506)+_0x3f86bb[_0x1bb0b1(0x6e9)][_0x1bb0b1(0xbca)]);if(_0x3f86bb['globa'+'ls']&&!_0x3f86bb[_0x1bb0b1(0x31f)+'ls']['heapU'+'8']){var _0x2bdce7='';_0x3f86bb[_0x1bb0b1(0x372)+_0x1bb0b1(0x405)+_0x1bb0b1(0xb53)]&&(_0x2bdce7=_0x5591fc[_0x1bb0b1(0x2bc)](_0x5591fc[_0x1bb0b1(0x996)](_0x5591fc['MRGXN'],_0x3f86bb['hookF'+'irePr'+'oof'][_0x1bb0b1(0x3b1)])+_0x5591fc[_0x1bb0b1(0x7ca)]+_0x3f86bb['hookF'+_0x1bb0b1(0x405)+_0x1bb0b1(0xb53)][_0x1bb0b1(0x9ab)+'nalFu'+'nc'],_0x1bb0b1(0x375)+'game\x20'+_0x1bb0b1(0x531)+'ved=')+_0x3f86bb[_0x1bb0b1(0x372)+_0x1bb0b1(0x405)+'oof']['resol'+_0x1bb0b1(0xb90)+_0x1bb0b1(0xc23)+'re']+_0x5591fc[_0x1bb0b1(0x3bf)]+(_0x3f86bb[_0x1bb0b1(0x372)+_0x1bb0b1(0x405)+'oof'][_0x1bb0b1(0xa1c)+'ource'+_0x1bb0b1(0x4b4)+'e']||_0x5591fc[_0x1bb0b1(0x3aa)])+_0x5591fc[_0x1bb0b1(0x742)]),_0x3f86bb[_0x1bb0b1(0x2d4)+'ngs'][_0x1bb0b1(0xb4)](_0x5591fc[_0x1bb0b1(0xe5)](_0x5591fc['HDjmH'](_0x5591fc['RieqN'](_0x5591fc[_0x1bb0b1(0x5f9)],_0x3f86bb['globa'+'ls']['gameS'+_0x1bb0b1(0x70c)]||'none')+_0x5591fc['sUZkG'],_0x5591fc[_0x1bb0b1(0x172)]),_0x2bdce7));}(_0x3f86bb[_0x1bb0b1(0x31f)+'ls']&&!_0x3f86bb['globa'+'ls']['value'+'Wrapp'+'er']||_0x3f86bb['globa'+'ls'][_0x1bb0b1(0x6c7)+_0x1bb0b1(0x347)+'er']==='undef'+'ined')&&_0x3f86bb['warni'+_0x1bb0b1(0x47b)][_0x1bb0b1(0xb4)]('windo'+_0x1bb0b1(0x9ec)+_0x1bb0b1(0x679)+_0x1bb0b1(0x693)+_0x1bb0b1(0x63a)+_0x1bb0b1(0x282)+'pper\x20'+'is\x20mi'+'ssing'+_0x1bb0b1(0xbc4)+_0x1bb0b1(0x561)+_0x1bb0b1(0x8c9)+'unnin'+_0x1bb0b1(0xb56)+'nd.');_0x3f86bb['hooks'+_0x1bb0b1(0xf8)]>-0x10f2+-0x28*-0x51+0x44a&&_0x3f86bb['hooks'+_0x1bb0b1(0x8f5)+'ed']===0xd*0x298+-0x86*-0xf+-0x2992&&_0xb094e2&&(_0x3f86bb['hooks'+'Resol'+'ved']===-0x223+-0x258b+0x27ae?_0x5591fc[_0x1bb0b1(0x9cb)](_0x1bb0b1(0x546),_0x1bb0b1(0x546))?_0x397d31=_0x3de3c7():_0x3f86bb[_0x1bb0b1(0x2d4)+'ngs'][_0x1bb0b1(0xb4)](_0x5591fc[_0x1bb0b1(0x7cd)](_0x1bb0b1(0x80f)+_0x3f86bb[_0x1bb0b1(0x489)+'Total']+_0x5591fc['GvGdw']+(_0x1bb0b1(0x120)+_0x1bb0b1(0x132)+_0x1bb0b1(0x310)+'g\x20Web'+_0x1bb0b1(0x1e0)+'bly.i'+_0x1bb0b1(0xad6)+_0x1bb0b1(0x903)+'\x20and\x20'+'snaps'+_0x1bb0b1(0x3e3)+'plugi'+'n.hoo'+_0x1bb0b1(0x5d1)+_0x1bb0b1(0xaaf)+'\x20')+(_0x1bb0b1(0x873)+'oks\x20r'+_0x1bb0b1(0xc14)+_0x1bb0b1(0x23c)+'after'+_0x1bb0b1(0x541)+_0x1bb0b1(0x1b6)+'nored'+_0x1bb0b1(0x5a4)+_0x1bb0b1(0x1d1)+'ife\x20o'+_0x1bb0b1(0x9b4)+_0x1bb0b1(0xb4a)+'.\x20'),'Regis'+'tered'+'\x20')+_0x3f86bb['hooks'+_0x1bb0b1(0x2bd)+_0x1bb0b1(0x7d7)+'AtArm']+_0x5591fc['DUaeR']):_0x3f86bb[_0x1bb0b1(0x2d4)+'ngs'][_0x1bb0b1(0xb4)](_0x5591fc[_0x1bb0b1(0x113)](_0x5591fc[_0x1bb0b1(0xab)](_0x5591fc[_0x1bb0b1(0xacd)](_0x5591fc['ePxIo'](_0x1bb0b1(0x4a3)+_0x1bb0b1(0x531)+_0x1bb0b1(0x5bc),_0x3f86bb['hooks'+'Resol'+'ved']),_0x5591fc['mKeck']),_0x3f86bb['hooks'+_0x1bb0b1(0xf8)]),_0x5591fc[_0x1bb0b1(0x80a)])+(_0x1bb0b1(0x371)+',\x20Met'+_0x1bb0b1(0x744)+_0x1bb0b1(0x894)+_0x1bb0b1(0x13d)+'id\x20do'+_0x1bb0b1(0x54a)+_0x1bb0b1(0x6fc)+'ch\x20th'+'is\x20bu'+_0x1bb0b1(0x165))));_0x3f86bb[_0x1bb0b1(0x489)+'Appli'+'ed']>0xca1+0x1e*-0x4a+0x3f5*-0x1&&!_0x3f86bb[_0x1bb0b1(0x294)+'nces'][_0x1bb0b1(0x4e2)+_0x1bb0b1(0xb29)+_0x1bb0b1(0x92f)]&&_0x3f86bb[_0x1bb0b1(0x2d4)+'ngs'][_0x1bb0b1(0xb4)]('Hooks'+_0x1bb0b1(0x290)+_0x1bb0b1(0x4b5)+_0x1bb0b1(0xb84)+_0x1bb0b1(0x14d)+_0x1bb0b1(0x4e2)+_0x1bb0b1(0xb29)+_0x1bb0b1(0x61e)+_0x1bb0b1(0x252)+_0x1bb0b1(0xbd8)+_0x1bb0b1(0x573)+(_0x1bb0b1(0x164)+_0x1bb0b1(0xb69)+'\x20are\x20'+'not\x20i'+'n\x20a\x20r'+'ound,'+'\x20or\x20t'+'he\x20ho'+'ok\x20is'+_0x1bb0b1(0x392)+_0x1bb0b1(0x732)+_0x1bb0b1(0x7f1)+_0x1bb0b1(0x35d)+_0x1bb0b1(0xc0f)));if(_0x3f86bb[_0x1bb0b1(0x294)+_0x1bb0b1(0x64b)+'eplac'+'ed'][_0x1bb0b1(0xa6a)+'h']){if('sLxWs'!==_0x5591fc[_0x1bb0b1(0x6a8)])_0x3f86bb['warni'+_0x1bb0b1(0x47b)]['push'](_0x5591fc['huZEv']('rebui'+_0x1bb0b1(0x390)+'nce\x20f'+'irst\x20'+_0x1bb0b1(0x6dc)+_0x1bb0b1(0xba9)+'espaw'+_0x1bb0b1(0x630),_0x3f86bb[_0x1bb0b1(0x294)+'ncesR'+'eplac'+'ed']['join'](',\x20')));else return![];}return _0x3f86bb;}else{var _0xff006e=_0x5591fc['WMnmD'](_0x25cb1e,'div',_0x1bb0b1(0xbdc)+'rd'+(_0x554913?_0x5591fc['CfxLN']:'')),_0x28f1cb=_0x3e19fc(_0x5591fc[_0x1bb0b1(0x167)],_0x5591fc[_0x1bb0b1(0x927)]),_0x5ed6df=_0x5591fc['hIVyh'](_0x39288e,_0x1bb0b1(0x786),_0x5591fc[_0x1bb0b1(0x852)],_0x5591fc['DvnCe'](_0x5591fc['aPiAV'](_0x1bb0b1(0x2c4)+_0x1bb0b1(0xab3),_0x5b2a32),_0x1bb0b1(0x1d9)+_0x1bb0b1(0x8ec)));_0x28f1cb['appen'+'dChil'+'d'](_0x5ed6df);var _0x5e8b38=_0x3f1bd0('div',_0x5591fc[_0x1bb0b1(0x98b)]);return _0xff006e[_0x1bb0b1(0x3df)+_0x1bb0b1(0x566)+'d'](_0x28f1cb),_0xff006e[_0x1bb0b1(0x3df)+_0x1bb0b1(0x566)+'d'](_0x5e8b38),_0xff006e['body']=_0x5e8b38,_0xff006e[_0x1bb0b1(0xa5)]=_0x5ed6df,_0xff006e;}}function _0x34ff87(_0xbb2bed){var _0x51d1c2=_0x3e6ad4,_0x3d0f09={'HByvb':function(_0x4bedc1,_0xe72b33){return _0x4bedc1(_0xe72b33);}};console[_0x51d1c2(0xb1f)](_0x5591fc['ofcMd'],_0x51d1c2(0x4e3)+':'+_0x1bfdf2+_0x5591fc[_0x51d1c2(0x9ee)],_0xbb2bed),console['log'](_0x5591fc['DvnCe'](_0x2aa061+'\x0a',JSON[_0x51d1c2(0xa97)+_0x51d1c2(0x6d7)](_0xbb2bed,null,-0x105e+-0x1fa4*-0x1+-0x517*0x3))+'\x0a'+_0x5b81c7),_0x215df4=_0xbb2bed;try{_0x5591fc['qILmf']!=='lhPcK'?_0xad4f91(_0xd2a2f5['on'],_0x3d0f09['HByvb'](_0x30bdd8,_0x5e7808[_0x51d1c2(0x6c7)])||-0x7a0+0xa*-0x1d3+0x1*0x19df):_0x59d095(_0xbb2bed);}catch(_0x1dd5d5){}_0x5591fc['ILnhd'](_0x496d79,_0x51d1c2(0x5ff)+'t',{'report':_0xbb2bed});}function _0x2362b0(){var _0xb39eb8=_0x3e6ad4;try{if(_0xb39eb8(0x5a5)===_0xb39eb8(0x1d8)){var _0x1f7ed4=_0x55d595==='v2'?0xd31*0x2+-0xc62+-0x12*0xc7:_0x5591fc[_0xb39eb8(0xa2f)](_0x477380,'v3')?0x231a+-0x1*-0x1516+0x382d*-0x1:-0x496+-0x1c5f+-0x16f*-0x17,_0x4fc2da=_0x51ff49(_0x495280[_0xb39eb8(0x6a2)],_0x2f4d64,_0x1f7ed4);_0x4fc2da&&(_0x5da87[_0xb39eb8(0x7be)]=_0x4fc2da,_0x296825['v']=_0x4fc2da[0x15d+-0x502*0x6+0x1caf]);}else return _0x3e0690();}catch(_0x169922){return{'version':_0xd31e38,'when':new Date()[_0xb39eb8(0x3b9)+'Strin'+'g'](),'elapsedMs':_0x5591fc['ZsGOK'](Date[_0xb39eb8(0x5e4)](),_0x50451a),'host':_0x3dc887,'uwmk':!!(window['Unity'+_0xb39eb8(0x94f)+_0xb39eb8(0x77b)]&&window[_0xb39eb8(0xb3d)+_0xb39eb8(0x94f)+_0xb39eb8(0x77b)][_0xb39eb8(0x2de)+'me']),'il2CppContext':![],'arm':_0x4bce30,'hooksTotal':_0x3e8aab['lengt'+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x5591fc[_0xb39eb8(0x6e7)](String,_0x169922&&_0x169922[_0xb39eb8(0x153)+'ge']||_0x169922)};}}function _0x350f45(){var _0x196c93=_0x3e6ad4,_0x44c440=-0x1fcf+0x1aed+-0x1*-0x4e2;try{_0xaa20c4();}catch(_0x371286){}try{if(_0x5591fc['HmMsC']('BSTjB',_0x5591fc[_0x196c93(0x4d2)])){var _0x409b04=_0x4a98fd[_0x196c93(0x531)+'veGam'+'e']();if(_0x409b04)return _0xb4a36b['sourc'+'e']=_0x5591fc[_0x196c93(0x180)],_0x409b04;}else _0x3be0b4();}catch(_0xce00ec){}setInterval(_0xf5119,0x880+0x2592+-0x2a8e),_0x5591fc['qtOaz'](_0x34ff87,_0x2362b0()),function _0x58cae2(){var _0x37e02b=_0x196c93;if(!_0x3e8aab['lengt'+'h'])try{_0x51b115();}catch(_0x204051){}_0x44c440++,_0x34ff87(_0x2362b0());if(!_0x3e8aab['lengt'+'h']&&_0x44c440<0x168e+0x1535+0x2a97*-0x1)_0x5591fc[_0x37e02b(0xbc5)](setTimeout,_0x58cae2,-0x1*-0x1c5e+0x53e+-0xfe*0x1a);else{if(!Object[_0x37e02b(0x6a5)](_0x3f2eb8)[_0x37e02b(0xa6a)+'h']&&_0x44c440<0x1*0x1aeb+0x9cc+-0x238b)setTimeout(_0x58cae2,0xfcf*0x1+0x1c2b*-0x1+-0x50b*-0x4);else setTimeout(_0x58cae2,-0x1539+0x112d+0x8bc);}}();}if(document[_0x3e6ad4(0x7ef)])_0x350f45();else document[_0x3e6ad4(0x5e6)+_0x3e6ad4(0x622)+'stene'+'r'](_0x5591fc[_0x3e6ad4(0x1f6)],_0x350f45,{'once':!![]});if(document[_0x3e6ad4(0x7ef)])try{_0x26f017();}catch(_0x148a1d){}else document['addEv'+'entLi'+_0x3e6ad4(0xb2c)+'r'](_0x5591fc[_0x3e6ad4(0x1f6)],function(){try{_0x26f017();}catch(_0x4650a1){}},{'once':!![]});})()));
