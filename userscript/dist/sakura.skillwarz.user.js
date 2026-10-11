// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.9.0
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

(function(_0x56ab0b,_0x5cb9a6){var _0x41474f=_0x32ef,_0x3f8301=_0x56ab0b();while(!![]){try{var _0x24720b=-parseInt(_0x41474f(0x93d))/(0x2*-0x9e9+0xf3*-0x2+0x15b9)+parseInt(_0x41474f(0xf0))/(-0x209*-0x12+-0xb8b+-0x1*0x1915)+-parseInt(_0x41474f(0xa36))/(0x675+0xf71+0x1af*-0xd)+-parseInt(_0x41474f(0x934))/(-0xd24+-0x124e+0x1f76)+-parseInt(_0x41474f(0x4e1))/(-0xa*0x3ab+0x24ff+-0x4c)+parseInt(_0x41474f(0x916))/(0x4b8+0x22e3*-0x1+0x1e31)*(parseInt(_0x41474f(0x4bf))/(-0x150*-0x16+0x395+0x1037*-0x2))+parseInt(_0x41474f(0x16d))/(-0x1e53+0x1743+0x718);if(_0x24720b===_0x5cb9a6)break;else _0x3f8301['push'](_0x3f8301['shift']());}catch(_0x4cfbc0){_0x3f8301['push'](_0x3f8301['shift']());}}}(_0x54d1,0x26b*-0x55d+-0x2b25f*-0x5+0x67aa7),((()=>{'use strict';var _0x4a04dc=_0x32ef,_0x66ae08={'oeyJE':function(_0x2a06aa,_0x176ef7){return _0x2a06aa===_0x176ef7;},'tLway':'Healt'+'h','ydwnb':function(_0x3def12,_0x8ed6d7,_0x4859ad){return _0x3def12(_0x8ed6d7,_0x4859ad);},'wVgwf':_0x4a04dc(0xa1a),'bdInm':'auzuV','MNQHJ':'bwQLd','iGwXz':function(_0x405fef,_0x154db8){return _0x405fef===_0x154db8;},'Fngmo':'mJVaS','foaRF':'xqmWV','fRDXI':_0x4a04dc(0x8d0)+'e','Dqwvh':function(_0x429ebb,_0x3c6b66){return _0x429ebb<_0x3c6b66;},'iLxQF':'sakur'+_0x4a04dc(0x504),'oYYEj':_0x4a04dc(0x2e6),'fLodC':'sakur'+_0x4a04dc(0x66d)+'v2','LGGtE':function(_0x5c41d5,_0x61ce9b){return _0x5c41d5===_0x61ce9b;},'AUibX':'vHSBf','erWYC':'3|0|2'+_0x4a04dc(0x7cc)+'5','tJGjR':_0x4a04dc(0x171)+'a-sw-'+_0x4a04dc(0x79f)+'b','FNDQR':_0x4a04dc(0x171)+'a','DeNQk':function(_0x4d3fb4,_0xc47b51){return _0x4d3fb4+_0xc47b51;},'xiUtb':function(_0x5b34c0,_0x3d6426){return _0x5b34c0+_0x3d6426;},'TmioQ':function(_0xc17d52,_0x392ccf){return _0xc17d52&&_0x392ccf;},'GAcDq':function(_0x563848,_0x28b746){return _0x563848(_0x28b746);},'tHOLR':function(_0x295b58,_0x3a74fe){return _0x295b58-_0x3a74fe;},'nCFJj':function(_0xb62dc0,_0x3d8773){return _0xb62dc0<_0x3d8773;},'zEdVu':function(_0x54a7c1,_0x2912e7){return _0x54a7c1(_0x2912e7);},'EZHyr':function(_0x1d8a00){return _0x1d8a00();},'xDxzN':_0x4a04dc(0x38f)+_0x4a04dc(0x9eb),'NDQVv':_0x4a04dc(0x171)+_0x4a04dc(0x66d)+_0x4a04dc(0x4ab)+'s','Ctewn':'style','dDdst':_0x4a04dc(0x635),'LfzfO':_0x4a04dc(0x581),'Gwpih':'div','UBeJK':'sk-ca'+_0x4a04dc(0x372)+'ad','lxhkI':function(_0x1fb16c,_0x3d272d){return _0x1fb16c+_0x3d272d;},'yPKlL':_0x4a04dc(0x5d7)+'ong>','ZLBHL':function(_0x1e5326){return _0x1e5326();},'TFUIy':function(_0x219f7f,_0x37a942){return _0x219f7f(_0x37a942);},'Dmpnh':_0x4a04dc(0x708),'KUxUU':_0x4a04dc(0x6bc)+':','xpkCN':_0x4a04dc(0x8ff),'IxetW':_0x4a04dc(0x71b),'ISrac':_0x4a04dc(0x2d9),'HrcCR':'rgba('+_0x4a04dc(0xac9)+_0x4a04dc(0x72b)+'9)','QNXGw':_0x4a04dc(0x913)+'\x20ON','YlcrN':_0x4a04dc(0x77f)+_0x4a04dc(0x67c)+'t','hAZIC':_0x4a04dc(0x51e)+'1b','OPIvG':function(_0x3ea582){return _0x3ea582();},'JBiUo':function(_0x94a63f,_0x2c2056){return _0x94a63f+_0x2c2056;},'xNlxh':'no\x20re'+_0x4a04dc(0x638)+_0x4a04dc(0x4ff)+_0x4a04dc(0x6a7)+_0x4a04dc(0x1ce)+_0x4a04dc(0x2f3)+'t\x20inj'+'ected'+'?','lNrDY':function(_0x13d8c0,_0x1ab877){return _0x13d8c0+_0x1ab877;},'qctoC':_0x4a04dc(0x268)+'e\x20rem'+_0x4a04dc(0x986)+'g\x20sus'+_0x4a04dc(0x64d)+_0x4a04dc(0x449)+'\x0a\x0a','xqmiH':_0x4a04dc(0x126)+_0x4a04dc(0x468)+_0x4a04dc(0x171)+_0x4a04dc(0x7dd)+_0x4a04dc(0x299)+'z.use'+'r.js\x20'+'AND\x20t'+'he\x20ol'+_0x4a04dc(0xaf6)+'g\x20scr'+_0x4a04dc(0x547)+'re\x0a','qjvnS':_0x4a04dc(0x2b0)+'d\x20the'+_0x4a04dc(0x3df)+'\x20page'+_0x4a04dc(0x2ac)+_0x4a04dc(0x160)+_0x4a04dc(0x14c)+'\x20this'+'\x20pane'+_0x4a04dc(0x72f)+'in.','gtckk':_0x4a04dc(0x96a)+_0x4a04dc(0x71e)+_0x4a04dc(0x87b),'rWrNk':function(_0x4b1d75,_0x4ea183){return _0x4b1d75===_0x4ea183;},'ExVRl':function(_0x4553fb,_0x4b6a38,_0x341b93){return _0x4553fb(_0x4b6a38,_0x341b93);},'ecfNw':_0x4a04dc(0x454),'BcTyn':_0x4a04dc(0x4d4)+'74','PIRfh':_0x4a04dc(0x69f)+_0x4a04dc(0xa96)+'\x20','PzQEN':_0x4a04dc(0x55c)+'\x20arme'+'d\x20·\x20','nbrTN':_0x4a04dc(0x1f8),'Zjhww':function(_0x4d4b71,_0x250606){return _0x4d4b71+_0x250606;},'PspwS':_0x4a04dc(0x376)+'round'+_0x4a04dc(0xa7a)+_0x4a04dc(0x378)+'olor:'+'#f7ee'+_0x4a04dc(0x5d6)+'rder:'+_0x4a04dc(0x341)+_0x4a04dc(0x940)+_0x4a04dc(0x947)+_0x4a04dc(0x687)+_0x4a04dc(0x7b2)+_0x4a04dc(0x662)+';bord'+_0x4a04dc(0x6f2)+'dius:'+_0x4a04dc(0x8c4),'oSwob':function(_0x23ba48,_0x12e1c8){return _0x23ba48+_0x12e1c8;},'EKOJo':function(_0x43ff12,_0x19a797){return _0x43ff12+_0x19a797;},'PMeVA':function(_0x5b937e,_0x159940){return _0x5b937e+_0x159940;},'WAKFx':function(_0x3039f6,_0x3cb323){return _0x3039f6+_0x3cb323;},'ocqKb':function(_0x468b79,_0x270c4e){return _0x468b79+_0x270c4e;},'VBtUM':function(_0xfd279,_0x2ea98d){return _0xfd279+_0x2ea98d;},'fdvqp':function(_0x3a7b7e,_0x461d79){return _0x3a7b7e+_0x461d79;},'qehiv':function(_0x264909,_0x47a03b){return _0x264909+_0x47a03b;},'ZlclG':function(_0x8299c9,_0x28cdc9){return _0x8299c9+_0x28cdc9;},'TSUdM':function(_0x5e80ca,_0x35b619){return _0x5e80ca+_0x35b619;},'URYbm':_0x4a04dc(0x2c2)+'style'+'=\x22pad'+_0x4a04dc(0x844)+_0x4a04dc(0xaa3)+'2px;b'+_0x4a04dc(0x36e)+_0x4a04dc(0x7da)+_0x4a04dc(0x956)+'x\x20sol'+'id\x20rg'+'ba(25'+'5,143'+_0x4a04dc(0x975)+_0x4a04dc(0xaef)+_0x4a04dc(0xaed)+'y:fle'+_0x4a04dc(0xa81)+':8px;'+_0x4a04dc(0x197)+_0x4a04dc(0x129)+'s:cen'+'ter;f'+'lex:0'+_0x4a04dc(0xa6c)+_0x4a04dc(0x8c6),'Aqfqt':_0x4a04dc(0x64f)+'yle=\x22'+'color'+':','okSrF':'<span'+_0x4a04dc(0x64c)+_0x4a04dc(0x458)+'tatus'+_0x4a04dc(0x7cf)+_0x4a04dc(0x619)+_0x4a04dc(0x18b)+_0x4a04dc(0x816)+_0x4a04dc(0x651)+'aitin'+'g\x20for'+_0x4a04dc(0x3df)+_0x4a04dc(0x27e)+'e…</s'+'pan>','IeTZg':_0x4a04dc(0x348)+'on\x20id'+_0x4a04dc(0x38c)+_0x4a04dc(0xae0)+_0x4a04dc(0x7cf)+_0x4a04dc(0x1e9)+'ispla'+_0x4a04dc(0x814)+'e;mar'+'gin-l'+_0x4a04dc(0x711)+_0x4a04dc(0x6df)+'ackgr'+_0x4a04dc(0x3d4),'vxVGW':'<butt'+_0x4a04dc(0x63a)+'=\x22sw2'+'-togg'+'le\x22\x20s'+'tyle='+_0x4a04dc(0x36d)+'groun'+'d:tra'+_0x4a04dc(0x532)+'ent;b'+'order'+':1px\x20'+'solid'+_0x4a04dc(0xa6d)+_0x4a04dc(0x955)+'143,1'+'77,.4'+');col'+'or:#f'+_0x4a04dc(0x9e1)+_0x4a04dc(0x32b)+_0x4a04dc(0x6f2)+'dius:'+_0x4a04dc(0x425)+'addin'+'g:4px'+_0x4a04dc(0x9b9)+_0x4a04dc(0x2a7)+_0x4a04dc(0x6be)+_0x4a04dc(0x16b)+_0x4a04dc(0x6bd)+'n</bu'+'tton>','mMKkV':_0x4a04dc(0x348)+_0x4a04dc(0x63a)+_0x4a04dc(0x38c)+_0x4a04dc(0x41b)+_0x4a04dc(0x3e0)+_0x4a04dc(0x36d)+_0x4a04dc(0x8e0)+'d:tra'+_0x4a04dc(0x532)+_0x4a04dc(0x5ac)+_0x4a04dc(0x36e)+_0x4a04dc(0xa02)+_0x4a04dc(0x70e)+'\x20rgba'+'(255,'+'143,1'+'77,.4'+_0x4a04dc(0x1b5)+_0x4a04dc(0x5ca)+'7eef5'+';bord'+_0x4a04dc(0x6f2)+'dius:'+'7px;p'+'addin'+'g:4px'+_0x4a04dc(0x9b9)+'curso'+'r:poi'+'nter;'+_0x4a04dc(0x7c0)+'butto'+'n>','wiYfR':_0x4a04dc(0x490)+'>','XpTEm':';\x22>','CHvDE':_0x4a04dc(0xeb)+_0x4a04dc(0x64c)+_0x4a04dc(0x8ca)+_0x4a04dc(0x1c4)+'label'+_0x4a04dc(0x7cf)+_0x4a04dc(0x619)+_0x4a04dc(0x18b)+'#bda9'+_0x4a04dc(0x76a)+'n-wid'+'th:34'+_0x4a04dc(0x145)+'1.0x<'+_0x4a04dc(0x432)+'>','beJPK':'#sw2-'+_0x4a04dc(0x606)+'s','oSBOk':_0x4a04dc(0x921)+_0x4a04dc(0x1f6),'GuCbS':_0x4a04dc(0x921)+'snap','dZOOw':function(_0x39b609,_0x3cd826,_0x4e43a2){return _0x39b609(_0x3cd826,_0x4e43a2);},'IqMgV':_0x4a04dc(0x68a)+_0x4a04dc(0x639),'wLOMb':function(_0x3c7ce7,_0x5ec27e){return _0x3c7ce7/_0x5ec27e;},'hbukb':function(_0x2ec25f,_0x213731){return _0x2ec25f+_0x213731;},'sMYmW':_0x4a04dc(0x4cd)+'ntext'+'\x20','htjuY':_0x4a04dc(0x1da)+_0x4a04dc(0x9ed),'mpefQ':function(_0x198bf3,_0x20616e){return _0x198bf3!=_0x20616e;},'LLJog':_0x4a04dc(0x607)+_0x4a04dc(0x2cb)+_0x4a04dc(0x430)+_0x4a04dc(0x4f9)+_0x4a04dc(0x6b0)+_0x4a04dc(0x769)+'ature'+'\x20did\x20'+_0x4a04dc(0x136)+'atch.','gPgeM':function(_0x1d6484,_0x474364){return _0x1d6484<_0x474364;},'LvciZ':function(_0x1ce9b8,_0x4d7d5c){return _0x1ce9b8===_0x4d7d5c;},'shKlr':_0x4a04dc(0x90c),'AUQpT':function(_0x567e57,_0x45e241){return _0x567e57+_0x45e241;},'pyvVA':_0x4a04dc(0x195),'gQYQz':function(_0x3a8281,_0x1bc5fe){return _0x3a8281-_0x1bc5fe;},'KVILc':function(_0x288a09,_0x39e7dd){return _0x288a09<_0x39e7dd;},'GNZWB':_0x4a04dc(0x597)+'r','ARXxJ':function(_0x1e62de,_0x3aaa38){return _0x1e62de*_0x3aaa38;},'BfQwX':function(_0x5bb62a,_0x3aad92){return _0x5bb62a+_0x3aad92;},'xVumN':function(_0x5341c6,_0x38234e){return _0x5341c6(_0x38234e);},'AEnUf':_0x4a04dc(0x4d9),'THcwa':_0x4a04dc(0xac3)+_0x4a04dc(0x16c)+'\x20pane'+'l\x20upd'+_0x4a04dc(0x586)+_0x4a04dc(0xa56),'iNJIg':function(_0x51caa1){return _0x51caa1();},'FyFaW':function(_0x30d702,_0x25daf9){return _0x30d702(_0x25daf9);},'cuPVR':function(_0x4f1fc6){return _0x4f1fc6();},'cSMRv':function(_0x1640ce,_0x1c9551){return _0x1640ce!==_0x1c9551;},'zTpkw':function(_0x2ce934,_0x443375){return _0x2ce934!==_0x443375;},'aZZHQ':function(_0x79dd0c,_0x18c1e7){return _0x79dd0c===_0x18c1e7;},'oAeeN':_0x4a04dc(0xaa5),'yvEIE':'ZbEWi','vfUdQ':'VtPnK','ciZJN':_0x4a04dc(0x6c1),'gJUmP':_0x4a04dc(0x8e3),'NUqXk':function(_0x4789bf,_0x4e59d8){return _0x4789bf+_0x4e59d8;},'zRAQo':_0x4a04dc(0x739)+'·\x20','tqITY':'%c[sa'+'kura]'+_0x4a04dc(0x675)+_0x4a04dc(0x28e)+_0x4a04dc(0x4e6)+'rt','SKZdr':function(_0x5a2f27,_0x42df94,_0x49419d){return _0x5a2f27(_0x42df94,_0x49419d);},'EyGnN':function(_0x11bec1,_0x1c4b50){return _0x11bec1===_0x1c4b50;},'YzAma':'YqTjf','JfKgi':_0x4a04dc(0xac7),'IZOce':function(_0x451f22,_0x2897fb){return _0x451f22+_0x2897fb;},'Sdvml':_0x4a04dc(0x6ec),'wZPds':function(_0x37b974,_0xf315d0,_0x478b5b){return _0x37b974(_0xf315d0,_0x478b5b);},'bJywP':_0x4a04dc(0x549)+'l','pFkVH':function(_0x5b0bd4,_0x59201e,_0x1e709b){return _0x5b0bd4(_0x59201e,_0x1e709b);},'YwaCg':function(_0x3759a6,_0x4f4ec6){return _0x3759a6!==_0x4f4ec6;},'qecgb':_0x4a04dc(0x1fd),'lrmoo':_0x4a04dc(0x8dd)+_0x4a04dc(0x3bb)+'e','AEegB':function(_0x10c92b,_0x507986){return _0x10c92b<_0x507986;},'QAysa':'SayBS','VbRiW':_0x4a04dc(0x80e)+'ion','ZBBWq':_0x4a04dc(0x4b9)+_0x4a04dc(0x77b)+_0x4a04dc(0xada)+'lugin'+'\x20unav'+_0x4a04dc(0x375)+'le','tUQVf':function(_0x5c9368,_0x5aefa3){return _0x5c9368+_0x5aefa3;},'DSDVS':function(_0x351c70,_0x21a9b2){return _0x351c70(_0x21a9b2);},'mhugC':function(_0x59f5f3,_0x59b220){return _0x59f5f3|_0x59b220;},'cDvlZ':_0x4a04dc(0x427)+'ined','LWcpi':_0x4a04dc(0x437)+_0x4a04dc(0x5cd)+'bindi'+'ng','uoZdV':function(_0x4420e5,_0x5e10f0){return _0x4420e5<_0x5e10f0;},'fJLoU':_0x4a04dc(0x4b9)+'me._g'+_0x4a04dc(0xa91),'OuARl':'f32','kSsfW':function(_0x4a9011,_0x16d251){return _0x4a9011+_0x16d251;},'MYKkU':'oHpqA','HFCFB':_0x4a04dc(0x5a6),'ufadz':_0x4a04dc(0x2ed)+_0x4a04dc(0x5a4)+_0x4a04dc(0x7b0)+_0x4a04dc(0x1b9)+_0x4a04dc(0x9d3)+_0x4a04dc(0x9e2),'MmVCW':function(_0x14fcaf,_0x12736c){return _0x14fcaf===_0x12736c;},'pIhHK':_0x4a04dc(0x13f),'iGReB':_0x4a04dc(0x4e4)+'w\x20glo'+_0x4a04dc(0xa92),'gHIOZ':function(_0x226059,_0x3cfeb4){return _0x226059<_0x3cfeb4;},'cbzSe':'ZXSKV','ofIhU':'.Modu'+'le','PkLRC':function(_0x5f5839,_0x287490){return _0x5f5839!==_0x287490;},'MruGR':'WJjMw','OGXQe':_0x4a04dc(0x1bb)+'oard\x20'+_0x4a04dc(0x7e2)+_0x4a04dc(0x9ef)+'open\x20'+_0x4a04dc(0x647)+_0x4a04dc(0x7b9)+_0x4a04dc(0x5fb)+'ad','LzghQ':'asRwe','lKstr':_0x4a04dc(0x753)+'APU8\x20'+'-\x20Uni'+'ty\x20in'+_0x4a04dc(0x8fd)+'e\x20not'+'\x20reac'+'hable'+_0x4a04dc(0x2e3)+'Runti'+_0x4a04dc(0x9cc)+'solve'+_0x4a04dc(0x192)+')\x20or\x20'+_0x4a04dc(0x564)+'indow'+'\x20glob'+'al','YFkPZ':function(_0x2269c1,_0x4c6a4c){return _0x2269c1+_0x4c6a4c;},'OfCAy':_0x4a04dc(0x26e)+_0x4a04dc(0x1aa),'lfHOw':'\x20past'+'\x20heap'+'\x20end\x20'+'0x','EKEDg':_0x4a04dc(0x648),'FLxzP':_0x4a04dc(0x53e),'imcJh':'f64','WaraC':function(_0x20a2b3,_0x477a96){return _0x20a2b3===_0x477a96;},'xBtqA':_0x4a04dc(0x12c),'rKeUH':function(_0x15efef,_0x23408a){return _0x15efef>_0x23408a;},'GmapD':_0x4a04dc(0x28c),'SDDhU':_0x4a04dc(0x2bb),'wUrJL':function(_0x1cbe62,_0x2d55ff){return _0x1cbe62|_0x2d55ff;},'Xrlkc':_0x4a04dc(0x6cf),'gActt':_0x4a04dc(0x3c9),'lYMEZ':function(_0x5a38fd,_0x2f0470){return _0x5a38fd+_0x2f0470;},'ZfKiS':function(_0x4f3def,_0x5f2616){return _0x4f3def+_0x5f2616;},'KFOxq':function(_0x57717d,_0x1cb53b){return _0x57717d(_0x1cb53b);},'kctuH':function(_0xc2b071,_0x1fef6d,_0x58a7e1,_0x245c36){return _0xc2b071(_0x1fef6d,_0x58a7e1,_0x245c36);},'FfXru':function(_0x465c8b,_0x502119){return _0x465c8b&_0x502119;},'cAVqP':function(_0x180372,_0x528ecb){return _0x180372===_0x528ecb;},'qkwMP':_0x4a04dc(0x6d2),'kdXvh':function(_0x538f7d,_0x17147b){return _0x538f7d===_0x17147b;},'IYowU':function(_0x1f0c26,_0xc362d3){return _0x1f0c26^_0xc362d3;},'KDJkU':function(_0x279270,_0x25f6dd){return _0x279270|_0x25f6dd;},'rjmKf':function(_0x5ce6cc,_0x5d03ca){return _0x5ce6cc^_0x5d03ca;},'qbSGN':function(_0x3370d1,_0x5e8cee){return _0x3370d1+_0x5e8cee;},'dZtqh':function(_0x12c7fa,_0x4e1d4f){return _0x12c7fa+_0x4e1d4f;},'DPYpE':function(_0x366b25,_0x18785f){return _0x366b25+_0x18785f;},'SGgSD':function(_0x5a258b,_0x2443cc){return _0x5a258b||_0x2443cc;},'IbMuF':function(_0x16c596,_0x528074){return _0x16c596(_0x528074);},'nkUyY':function(_0x125dc7,_0x5b0f9e){return _0x125dc7^_0x5b0f9e;},'XLgGl':function(_0x5e4690,_0x1e80d3){return _0x5e4690^_0x1e80d3;},'vyfFT':function(_0x27b939,_0xaad0f9,_0xd2cdb7,_0x5e91c3){return _0x27b939(_0xaad0f9,_0xd2cdb7,_0x5e91c3);},'QvdDi':function(_0x59b0c2,_0x42ba03){return _0x59b0c2+_0x42ba03;},'Ryxyj':_0x4a04dc(0x17f),'JIkSm':function(_0x71c924,_0x39baef){return _0x71c924===_0x39baef;},'fQwBM':function(_0x22c2f9,_0x119948){return _0x22c2f9|_0x119948;},'oNxEw':function(_0x428b07,_0x1a6fbd){return _0x428b07+_0x1a6fbd;},'zKgEh':function(_0x1ba5a8,_0x55ec2c){return _0x1ba5a8*_0x55ec2c;},'cPzZt':function(_0x2b8089,_0x100e17){return _0x2b8089(_0x100e17);},'Dssfc':function(_0x53dcec,_0x4a7ffe){return _0x53dcec!==_0x4a7ffe;},'ifVae':'impla'+_0x4a04dc(0x360)+'e','NHFsA':function(_0x108381,_0x1ab351){return _0x108381<_0x1ab351;},'KZZHt':_0x4a04dc(0xa60),'xEFEU':function(_0x11aaf6,_0x2517cb){return _0x11aaf6<_0x2517cb;},'seCqG':function(_0x46427e,_0x477e98){return _0x46427e!==_0x477e98;},'hOCit':_0x4a04dc(0x95f),'dYWtj':function(_0x1b6417,_0x5b4e82){return _0x1b6417>=_0x5b4e82;},'gDdxY':function(_0x4c8888,_0x52cd69){return _0x4c8888!==_0x52cd69;},'PQRUf':function(_0x114ebf,_0xce50a){return _0x114ebf*_0xce50a;},'soOIP':_0x4a04dc(0x52c),'fvbvR':_0x4a04dc(0x659)+_0x4a04dc(0x928)+'r\x20','rGNYs':function(_0x4d230e,_0x58aec4,_0xf29517,_0x1a640e,_0x540404){return _0x4d230e(_0x58aec4,_0xf29517,_0x1a640e,_0x540404);},'sgspR':_0x4a04dc(0x912),'gFAUH':function(_0x203729){return _0x203729();},'OBXLT':'OiHhY','WeUwt':_0x4a04dc(0x913)+_0x4a04dc(0x246),'povXl':'Updat'+'e','HKhWm':function(_0x59f68a,_0x4ff8cb){return _0x59f68a===_0x4ff8cb;},'jNhOo':function(_0x352fec,_0x1bb44e,_0x4530eb){return _0x352fec(_0x1bb44e,_0x4530eb);},'VjcMR':function(_0x2e58c1,_0x47fbca){return _0x2e58c1+_0x47fbca;},'JiNQo':function(_0x4cf659,_0x19abf5){return _0x4cf659(_0x19abf5);},'LnVOP':function(_0x5e5fd9,_0x11327c){return _0x5e5fd9+_0x11327c;},'dtzuF':'6|0|4'+_0x4a04dc(0x5c5)+_0x4a04dc(0x3a5)+_0x4a04dc(0x929)+'|7|1|'+_0x4a04dc(0x13b)+_0x4a04dc(0x829),'sXLeD':function(_0x422d01,_0x44f831){return _0x422d01||_0x44f831;},'gIGZH':function(_0x116376,_0x9bb34b){return _0x116376===_0x9bb34b;},'ZJjSK':function(_0x29cc29,_0x176732){return _0x29cc29!==_0x176732;},'moTka':function(_0x26d39c,_0x2b7a95,_0xd6b434){return _0x26d39c(_0x2b7a95,_0xd6b434);},'quJUo':function(_0x3bc156,_0x3b1504){return _0x3bc156+_0x3b1504;},'Hhbuf':function(_0x50b9a9,_0x14f428){return _0x50b9a9===_0x14f428;},'GRrPr':function(_0x4da430,_0x1f7f9f){return _0x4da430+_0x1f7f9f;},'sIMds':'fpuzt','NGFtk':'MOfQZ','FUUWS':function(_0x3d3ab1,_0x844dcf){return _0x3d3ab1===_0x844dcf;},'chqPN':function(_0x4597fa,_0x4bfc63){return _0x4597fa!==_0x4bfc63;},'Avqic':function(_0x1dd1bf,_0x197f71){return _0x1dd1bf(_0x197f71);},'MeExJ':function(_0x2599b0,_0x133f9){return _0x2599b0!==_0x133f9;},'LFrqP':function(_0x4ea735,_0x1dd3eb){return _0x4ea735*_0x1dd3eb;},'fLuds':'QBEmR','cvKLu':function(_0x278f17,_0x14116d){return _0x278f17<_0x14116d;},'rJVWw':_0x4a04dc(0x53f),'SNBQH':function(_0x8068e8,_0x50c3f6){return _0x8068e8<_0x50c3f6;},'OVhfw':function(_0x4eaf74,_0x40c7f1){return _0x4eaf74+_0x40c7f1;},'cRrIw':function(_0x559ad1,_0x7d719e){return _0x559ad1+_0x7d719e;},'LaxEh':function(_0x2cbacc,_0x3b9034){return _0x2cbacc>>>_0x3b9034;},'YbFKH':function(_0x4dff2d,_0x1d03f4){return _0x4dff2d(_0x1d03f4);},'lnDOk':'snaps'+'hot','FpcJc':function(_0x139a90,_0x3a194b){return _0x139a90===_0x3a194b;},'zqZyY':_0x4a04dc(0xa13)+_0x4a04dc(0x21f)+'pt','WHsrV':'NPC_C'+'otrol'+'ler','LHUKo':'FPSco'+'ntrol'+_0x4a04dc(0x24b),'ezCsO':function(_0xd2732e,_0x18b106){return _0xd2732e===_0x18b106;},'zDgDb':function(_0x445cf0,_0x5cb4b4){return _0x445cf0<_0x5cb4b4;},'QQLnE':function(_0x2a22a2,_0x485717){return _0x2a22a2+_0x485717;},'cqEZw':function(_0x3db937,_0x4dd9a5){return _0x3db937+_0x4dd9a5;},'CzrsO':'the\x20l'+'obby\x20'+_0x4a04dc(0x219)+_0x4a04dc(0x979)+_0x4a04dc(0x621)+'n\x20the'+_0x4a04dc(0x216)+_0x4a04dc(0x9f9)+_0x4a04dc(0x42d)+'\x20live'+'\x20roun'+_0x4a04dc(0xa10)+_0x4a04dc(0x1d8)+'\x20menu'+'.','eqXJz':function(_0x2e67fa,_0x15d8a4){return _0x2e67fa+_0x15d8a4;},'IVhVJ':_0x4a04dc(0x97c)+_0x4a04dc(0xae2)+'e\x20pre'+_0x4a04dc(0x7d8)+'but\x20n'+_0x4a04dc(0x8e9)+'re\x20cl'+_0x4a04dc(0x4b2)+'ied\x20a'+'s\x20ene'+'mies\x20'+_0x4a04dc(0x319)+'\x20chec'+'k\x20','xJMPJ':function(_0x5bb9ad,_0x122b4a){return _0x5bb9ad<_0x122b4a;},'xDCFh':function(_0x4cdaa4,_0x20de1a){return _0x4cdaa4<_0x20de1a;},'cQpWD':_0x4a04dc(0x924),'fwjdV':function(_0x43363f,_0x3e7d3f,_0x3c484d,_0x44bf16){return _0x43363f(_0x3e7d3f,_0x3c484d,_0x44bf16);},'FLkCN':function(_0x235a01,_0x2b1a57){return _0x235a01+_0x2b1a57;},'dLbHo':_0x4a04dc(0xeb)+_0x4a04dc(0x795)+_0x4a04dc(0x496)+'-hint'+'\x27>','NSkHF':_0x4a04dc(0x394)+'n>','eGnun':function(_0x1391cf,_0x4dcf19){return _0x1391cf<_0x4dcf19;},'PGTFj':_0x4a04dc(0x1d9),'NrzYf':'uvJdS','SvwHd':_0x4a04dc(0x6b4),'ADMtM':function(_0x244e04,_0x266862){return _0x244e04===_0x266862;},'Vqxay':function(_0x5e781e,_0x3d4e83,_0x174c3c,_0x1d0f83){return _0x5e781e(_0x3d4e83,_0x174c3c,_0x1d0f83);},'zXdKv':_0x4a04dc(0x207),'jjRch':_0x4a04dc(0x313),'hKeSW':function(_0x1605cc,_0x4caf5e,_0x1be274,_0x1c0160){return _0x1605cc(_0x4caf5e,_0x1be274,_0x1c0160);},'RewZi':function(_0x66778e,_0x33c050){return _0x66778e+_0x33c050;},'opnmV':function(_0x492906,_0x129df0){return _0x492906+_0x129df0;},'OaHvn':'hid=','qINJo':function(_0x27530a,_0x283cdc){return _0x27530a===_0x283cdc;},'iUuQt':function(_0xa1d0ff,_0x428178){return _0xa1d0ff<_0x428178;},'IvHHB':function(_0x3dde16,_0x12d1f9){return _0x3dde16===_0x12d1f9;},'mFoFc':function(_0x6dab69,_0x1eb7cd){return _0x6dab69+_0x1eb7cd;},'mrCfG':_0x4a04dc(0x653)+'s\x20','OztPk':_0x4a04dc(0x879),'dBjGJ':function(_0x325118,_0x2c53dc){return _0x325118&&_0x2c53dc;},'XNGlo':'YMvUC','MNlDS':_0x4a04dc(0x81f)+'Game','OGpTM':function(_0x30c4e8,_0x503b23){return _0x30c4e8===_0x503b23;},'FBnHt':'vmqQH','OzSbX':function(_0x43232c){return _0x43232c();},'BahQw':'crgyL','cthre':function(_0x23f9eb,_0xa77946){return _0x23f9eb!==_0xa77946;},'KVysv':'PxTmS','mmAPK':function(_0xdcde7,_0x5b47c5){return _0xdcde7+_0x5b47c5;},'LTOSP':'+0x','eJlXL':_0x4a04dc(0x2ed)+'n._ru'+'ntime'+'._gam'+'e','zqIjD':_0x4a04dc(0x22f),'nNcXT':function(_0x326cf9,_0x5e4720,_0x113ef8){return _0x326cf9(_0x5e4720,_0x113ef8);},'nrMRv':_0x4a04dc(0xab8)+'an','SqMaV':function(_0x551768,_0xd84b92){return _0x551768!==_0xd84b92;},'zsGVy':function(_0xe4c314){return _0xe4c314();},'MpLCs':_0x4a04dc(0x9af)+'t','lmGrQ':_0x4a04dc(0x781),'OXrla':function(_0x314478,_0x5edbed,_0x4bc9af){return _0x314478(_0x5edbed,_0x4bc9af);},'OwMAM':function(_0x3a6570){return _0x3a6570();},'rVJeT':_0x4a04dc(0x99d)+'eton','ZvBzj':'RrLNI','LLfsI':'fold','iQcEa':'#saku'+'ra-sw'+_0x4a04dc(0x3cc)+'all:i'+_0x4a04dc(0x40f)+'l}','XmmQn':function(_0x5983ca,_0x21bb2e){return _0x5983ca+_0x21bb2e;},'cWCfU':'posit'+_0x4a04dc(0x86c)+_0x4a04dc(0x654)+_0x4a04dc(0x824)+_0x4a04dc(0x1a0)+_0x4a04dc(0x77d)+_0x4a04dc(0x95b)+'z-ind'+_0x4a04dc(0x819)+'47483'+_0x4a04dc(0xa4a)+'ispla'+_0x4a04dc(0x62b)+_0x4a04dc(0x277)+_0x4a04dc(0x545)+_0x4a04dc(0x6ee)+_0x4a04dc(0x59f)+_0x4a04dc(0x4a3)+'ap:4p'+'x;','KDueB':function(_0x19612d,_0x1512fb){return _0x19612d+_0x1512fb;},'GOYDR':function(_0x575531,_0x17b300){return _0x575531+_0x17b300;},'vVVvX':function(_0x4a60f3,_0x30adfa){return _0x4a60f3+_0x30adfa;},'pQtnE':_0x4a04dc(0x2c2)+_0x4a04dc(0x371)+'a=\x22ba'+_0x4a04dc(0x11b)+_0x4a04dc(0xa68)+'displ'+_0x4a04dc(0xacf)+_0x4a04dc(0x5e5)+'p:6px'+';alig'+_0x4a04dc(0x3d5)+_0x4a04dc(0x878)+_0x4a04dc(0x16b)+'flex-'+'wrap:'+_0x4a04dc(0x766)+_0x4a04dc(0x789)+_0x4a04dc(0x1e4)+_0x4a04dc(0x10f)+_0x4a04dc(0x939),'bUZkP':_0x4a04dc(0x31c)+_0x4a04dc(0xa0c)+'b>','zLZzE':_0x4a04dc(0x6bc)+':#f7e'+_0x4a04dc(0x392)+_0x4a04dc(0x36e)+'-radi'+'us:6p'+_0x4a04dc(0x39c)+_0x4a04dc(0x844)+'2px\x208'+'px;cu'+'rsor:'+'point'+_0x4a04dc(0x892)+'nt:in'+_0x4a04dc(0x4aa)+_0x4a04dc(0x187)+'eed\x20o'+'ff</b'+_0x4a04dc(0x43e)+'>','zzHVe':'<span'+'\x20data'+_0x4a04dc(0x1a5)+'v\x22\x20st'+_0x4a04dc(0xa68)+_0x4a04dc(0x6bc)+':#bda'+_0x4a04dc(0x81c)+_0x4a04dc(0xadb)+'dth:3'+_0x4a04dc(0x9fe)+_0x4a04dc(0x578)+_0x4a04dc(0x394)+'n>','aduxW':function(_0x52fea9,_0x2d21c7){return _0x52fea9(_0x2d21c7);},'HSsMp':function(_0x284d42,_0xc75891){return _0x284d42(_0xc75891);},'wMvRa':_0x4a04dc(0x104),'Govva':_0x4a04dc(0x1ab),'UOJCn':_0x4a04dc(0x649),'XlUlM':_0x4a04dc(0xac3)+_0x4a04dc(0x16c)+_0x4a04dc(0x3e7)+_0x4a04dc(0x1db)+_0x4a04dc(0x8f5)+'isabl'+'ed','MeDeu':function(_0x1f513a,_0x2bf6b2){return _0x1f513a===_0x2bf6b2;},'kZfKZ':'MgmAB','Qcksf':_0x4a04dc(0x424)+'f5','lKstG':function(_0x16f655,_0x213cd8){return _0x16f655+_0x213cd8;},'RpPAH':function(_0x281854,_0x206dd9){return _0x281854/_0x206dd9;},'Hydvc':function(_0x405ee6,_0x2b84a7){return _0x405ee6+_0x2b84a7;},'IKrti':function(_0x2b82e8,_0x1c8ba4){return _0x2b82e8+_0x1c8ba4;},'GWddJ':function(_0xa2eb60,_0x4c53c4){return _0xa2eb60+_0x4c53c4;},'grNXb':function(_0x4eaefa,_0x11b99a){return _0x4eaefa+_0x11b99a;},'eJjQw':'\x20\x20mem'+'\x20','enrYJ':function(_0x442b42,_0x402480){return _0x442b42!==_0x402480;},'kvrOh':'aZpMZ','gZSaO':function(_0x20f802,_0x415771){return _0x20f802+_0x415771;},'lRtjG':_0x4a04dc(0x9b3)+'RS\x20','yRNDT':function(_0x58cf7a,_0x407ddd){return _0x58cf7a+_0x407ddd;},'iTMuX':'\x20bots','ppTDL':_0x4a04dc(0x88e)+'\x20-','rbDvO':'no\x20en'+_0x4a04dc(0x745)+'\x20yet\x20'+'(lobb'+_0x4a04dc(0xae8)+'cam\x20','FDRKL':function(_0xc94366,_0x3cdc24){return _0xc94366+_0x3cdc24;},'IGNln':function(_0x5424bc,_0x24da35){return _0x5424bc+_0x24da35;},'DaHSE':_0x4a04dc(0x526)+'(s)\x20t'+'o\x20a\x20t'+'able\x20'+'index'+_0x4a04dc(0x807)+_0x4a04dc(0x853)+'ed\x20no'+'ne.\x20T'+'he\x20si'+_0x4a04dc(0x612)+'re\x20','TcjPZ':_0x4a04dc(0x512)+_0x4a04dc(0x7fc)+'hodIn'+_0x4a04dc(0x1f3)+'->\x20vo'+_0x4a04dc(0x414)+_0x4a04dc(0x4f7)+_0x4a04dc(0x7e6)+'ch\x20th'+_0x4a04dc(0x6aa)+'ild.','TGkwA':function(_0x2d2928,_0xe32e2e){return _0x2d2928!==_0xe32e2e;},'twaUm':_0x4a04dc(0x205),'weaHR':'AKMUn','meGMy':_0x4a04dc(0x393),'ZaVuz':function(_0x3b36e8,_0x5cb244){return _0x3b36e8(_0x5cb244);},'SxgNE':'cWice','RxOhz':function(_0x27e2a9,_0x2ae177,_0x5887aa){return _0x27e2a9(_0x2ae177,_0x5887aa);},'zEvtu':_0x4a04dc(0x9c0)+'t','QvOLl':function(_0x5319af,_0x2e0160){return _0x5319af(_0x2e0160);},'islVv':function(_0x2e11ce,_0x5e2135){return _0x2e11ce===_0x5e2135;},'AxRjd':_0x4a04dc(0x140)+_0x4a04dc(0xacb)+'ht','EvgDR':function(_0x5e00d1,_0xb10c5){return _0x5e00d1+_0xb10c5;},'srmIO':function(_0x2e2384,_0x21c7ff){return _0x2e2384&&_0x21c7ff;},'AXHOy':function(_0x576144,_0x56e9d6){return _0x576144+_0x56e9d6;},'WigsX':_0x4a04dc(0x123),'QhaZp':function(_0x4b410b,_0x54e15c,_0x249aa8){return _0x4b410b(_0x54e15c,_0x249aa8);},'iAmQk':function(_0x378373,_0x4d92f2){return _0x378373+_0x4d92f2;},'poWoP':function(_0x208c8e,_0x14c292){return _0x208c8e+_0x14c292;},'CwKRx':function(_0x44ef4d,_0x1d5ac6){return _0x44ef4d<_0x1d5ac6;},'HiGnX':function(_0xa59f8b,_0x3955ac,_0x2ea77a,_0x2c193d){return _0xa59f8b(_0x3955ac,_0x2ea77a,_0x2c193d);},'yliJD':function(_0x252b48,_0x136b31){return _0x252b48(_0x136b31);},'WKnnu':function(_0x149354,_0x8b19b3){return _0x149354/_0x8b19b3;},'ZKygY':_0x4a04dc(0x467),'QKmlR':'6|5|0'+'|4|2|'+'1|3','Gfqld':function(_0x234073,_0x3165d9){return _0x234073+_0x3165d9;},'XxCis':function(_0x4bf571,_0x3d106f){return _0x4bf571+_0x3d106f;},'pylRL':function(_0x83ec99,_0x378811){return _0x83ec99/_0x378811;},'ugiSJ':function(_0x106e82,_0x619ffb){return _0x106e82*_0x619ffb;},'TbROy':function(_0x2ad184,_0x21570e){return _0x2ad184*_0x21570e;},'hzWaI':function(_0x199345,_0x5be733){return _0x199345<=_0x5be733;},'fAxkX':function(_0x4cc8e9,_0xb8711a){return _0x4cc8e9+_0xb8711a;},'unKoe':function(_0x538afb,_0x118c9a){return _0x538afb*_0x118c9a;},'MfPvm':function(_0x470b80,_0x7e9db5){return _0x470b80/_0x7e9db5;},'psLYj':function(_0x4b1df6,_0x15918f){return _0x4b1df6*_0x15918f;},'Fyuky':function(_0x1d60d1,_0x1b8808){return _0x1d60d1>_0x1b8808;},'TttKl':function(_0x2a40d5,_0x5594ee){return _0x2a40d5*_0x5594ee;},'DWdDm':function(_0x1d2636,_0x4c05d8){return _0x1d2636!==_0x4c05d8;},'muZYM':function(_0x5c7bcb,_0x120bf5){return _0x5c7bcb+_0x120bf5;},'wffNG':function(_0x73aee0){return _0x73aee0();},'dxsgu':function(_0x35de3e,_0x380bb7){return _0x35de3e!==_0x380bb7;},'hRkLH':_0x4a04dc(0x7b3),'xOFAB':function(_0xe96fb2,_0x4961b9,_0x1de4b2){return _0xe96fb2(_0x4961b9,_0x1de4b2);},'UjSUm':function(_0x21a961,_0x22e2e1,_0x1f7040,_0x4d13f2){return _0x21a961(_0x22e2e1,_0x1f7040,_0x4d13f2);},'XfGfi':'<stro'+_0x4a04dc(0x38e),'EhGqk':'true','IHLPv':_0x4a04dc(0x8d2),'ZjRQX':function(_0x217c6d,_0xdfe7bd){return _0x217c6d(_0xdfe7bd);},'hgaah':'sk-sw'+_0x4a04dc(0x834),'cvawP':function(_0x2883de,_0x380ef8){return _0x2883de!==_0x380ef8;},'GdyHP':function(_0x5d18c3,_0x2c165d){return _0x5d18c3+_0x2c165d;},'JbfRR':_0x4a04dc(0x622),'ULgGs':function(_0x251024){return _0x251024();},'zrOlK':function(_0x5e57ca,_0x309064){return _0x5e57ca(_0x309064);},'qrEyH':function(_0x4e677a,_0x4dfb2a){return _0x4e677a-_0x4dfb2a;},'Iwmxv':'--p','yiBNE':_0x4a04dc(0x1ea),'Ijvzy':function(_0x484ebd,_0x744683){return _0x484ebd(_0x744683);},'FDCKb':function(_0xe64d51,_0x1ddc33,_0x14d37f,_0x5a0eb6){return _0xe64d51(_0x1ddc33,_0x14d37f,_0x5a0eb6);},'aSWwV':function(_0x551d72,_0x5e2e5f){return _0x551d72+_0x5e2e5f;},'YCVnq':function(_0x54c46e,_0x5c5f97){return _0x54c46e*_0x5c5f97;},'vEDGQ':function(_0x39c6d1,_0x5126ff){return _0x39c6d1/_0x5126ff;},'HNclR':function(_0x3ec8da,_0x52c322){return _0x3ec8da===_0x52c322;},'qQcen':function(_0x2e200a,_0x1a4202){return _0x2e200a*_0x1a4202;},'mevku':function(_0x8f49d5,_0x540283){return _0x8f49d5(_0x540283);},'razbx':function(_0x39be0,_0xc09508){return _0x39be0+_0xc09508;},'VxSJg':function(_0x1fbbce,_0x5a3cba){return _0x1fbbce+_0x5a3cba;},'kOWlx':'yONjw','Pgchl':function(_0x1094da,_0x58867f){return _0x1094da+_0x58867f;},'Qzwov':function(_0x553d6a,_0x175962){return _0x553d6a!==_0x175962;},'zXlAL':_0x4a04dc(0x8db),'HUXiy':function(_0x21d25f,_0x2e8336){return _0x21d25f/_0x2e8336;},'EiZLY':function(_0x4b4287,_0x472025,_0xea9e19){return _0x4b4287(_0x472025,_0xea9e19);},'zvvKD':_0x4a04dc(0x913)+_0x4a04dc(0x5d8),'lFlmQ':'sk-md'+'esc','mzgiP':function(_0x171526,_0x54c88d){return _0x171526+_0x54c88d;},'YUwAd':'\x20on\x20','hpQrn':function(_0x49c7a3,_0x2d5a16){return _0x49c7a3(_0x2d5a16);},'GrQRc':_0x4a04dc(0x9a1)+'ed','ZIXIp':function(_0x4e07ab,_0x2b6789,_0x39569a,_0x1dea85,_0x5cf406,_0x3e37a5){return _0x4e07ab(_0x2b6789,_0x39569a,_0x1dea85,_0x5cf406,_0x3e37a5);},'dIOob':function(_0x58cf51,_0xad06bc){return _0x58cf51+_0xad06bc;},'mnZPa':_0x4a04dc(0x8f7)+_0x4a04dc(0x169),'BivuA':'Bindi'+'ngs','ozHUN':function(_0x4b9fcf,_0x43c817,_0x21622f,_0x137e56){return _0x4b9fcf(_0x43c817,_0x21622f,_0x137e56);},'QnPDq':_0x4a04dc(0x8f6)+'n','cEfuo':_0x4a04dc(0xa3e)+'n','PPWEa':function(_0x356938,_0xc81f22,_0x25f372){return _0x356938(_0xc81f22,_0x25f372);},'fHxPG':function(_0x64d393,_0x1a1000){return _0x64d393(_0x1a1000);},'McQro':function(_0x5b0f1f,_0x4f23f7,_0x5ac3d5){return _0x5b0f1f(_0x4f23f7,_0x5ac3d5);},'UIcFk':function(_0x40ab7c,_0x85c159,_0x2b272e,_0x3215e2){return _0x40ab7c(_0x85c159,_0x2b272e,_0x3215e2);},'hrMRm':'World'+_0x4a04dc(0x721)+_0x4a04dc(0x1b8)+_0x4a04dc(0x84a)+_0x4a04dc(0x717)+_0x4a04dc(0x8a0)+_0x4a04dc(0x7a6)+'ds\x20on'+_0x4a04dc(0x652)+'sitio'+_0x4a04dc(0x32a),'xZmIt':function(_0x16d8ff,_0xb95037,_0x39707d){return _0x16d8ff(_0xb95037,_0x39707d);},'cLfMm':_0x4a04dc(0xa1c),'PBPbW':'Scree'+_0x4a04dc(0x477)+_0x4a04dc(0x61e)+_0x4a04dc(0x1ee)+'The\x20f'+_0x4a04dc(0x58d)+'of\x20vi'+_0x4a04dc(0xae3)+_0x4a04dc(0x1ef)+'be\x20re'+_0x4a04dc(0x663)+'om\x20th'+'is\x20bu'+_0x4a04dc(0x3c2)+'so\x20it'+_0x4a04dc(0x3b0)+_0x4a04dc(0x984)+_0x4a04dc(0x7fb)+_0x4a04dc(0x1c5),'gSxxP':function(_0x23fc2e,_0xdf60a6,_0x5c9346){return _0x23fc2e(_0xdf60a6,_0x5c9346);},'ztIkA':_0x4a04dc(0x63c)+'\x20','OZJUX':function(_0x4eb166,_0xd84528){return _0x4eb166+_0xd84528;},'LyfAS':_0x4a04dc(0x7ea)+'Look\x20','lVROV':function(_0x3570c2,_0x3a0f8d){return _0x3570c2+_0x3a0f8d;},'NeOsD':function(_0x12c18e,_0x260a0e){return _0x12c18e+_0x260a0e;},'iXOAh':_0x4a04dc(0xa1b)+'s','kVaHN':'Build','tFRlz':'Hooks','huKTl':function(_0x3b7a39,_0x57aa12){return _0x3b7a39+_0x57aa12;},'WQBKe':function(_0x1a6cac,_0x57e1c3){return _0x1a6cac+_0x57e1c3;},'cRuOb':'\x20/\x20','zHKOW':_0x4a04dc(0x49b)+_0x4a04dc(0x8dd)+_0x4a04dc(0x3bb)+_0x4a04dc(0x6a0),'tikWY':function(_0x37a0d3,_0x34f634){return _0x37a0d3/_0x34f634;},'nsERg':_0x4a04dc(0x6b3)+'\x20','zLxfG':_0x4a04dc(0x97c)+'rs','yQOMY':_0x4a04dc(0x9f1)+'es','gOvkW':_0x4a04dc(0x6ea)+'a','jSXxV':function(_0x84fcd6,_0x310ac5){return _0x84fcd6!==_0x310ac5;},'UxfEc':'eJMWJ','MHiLB':function(_0x1b0feb,_0x3b277f){return _0x1b0feb(_0x3b277f);},'Vwccd':_0x4a04dc(0xaf3)+'on','rtRLY':'Playe'+'r','dqWAX':'FPSco'+_0x4a04dc(0x293)+_0x4a04dc(0x29c)+_0x4a04dc(0x20e),'TplZs':_0x4a04dc(0x85a),'rKhvE':'0x40','VnRzM':function(_0x363f4f,_0x3d62de,_0x3b63d0,_0x45e93b){return _0x363f4f(_0x3d62de,_0x3b63d0,_0x45e93b);},'nPvcp':'Jump\x20'+'heigh'+'t','gtXSV':function(_0x1e9f02,_0x2cab0b,_0x3452e5,_0xd2086c){return _0x1e9f02(_0x2cab0b,_0x3452e5,_0xd2086c);},'XExhO':_0x4a04dc(0x5c3),'NUjeu':_0x4a04dc(0xae9)+_0x4a04dc(0x2f9)+_0x4a04dc(0x37d)+_0x4a04dc(0x86a),'vfdOK':_0x4a04dc(0xab1),'YAnIl':_0x4a04dc(0x5d0)+_0x4a04dc(0x48c)+'s','wHwnu':'no\x20wa'+'rning'+'s','GvIWY':'sk-pr'+'e','GhHzo':function(_0xa45016,_0xb81806,_0x2fb9d2){return _0xa45016(_0xb81806,_0x2fb9d2);},'UogeP':function(_0x2a553a,_0x5d50df,_0x3955cd,_0x421c90){return _0x2a553a(_0x5d50df,_0x3955cd,_0x421c90);},'eCGEn':_0x4a04dc(0x235)+'\x20the\x20'+'whole'+_0x4a04dc(0x681)+_0x4a04dc(0x744)+'n\x20som'+_0x4a04dc(0x60a)+_0x4a04dc(0x55e)+'ks\x20wr'+'ong.','hQBEM':function(_0x143501){return _0x143501();},'gwiqm':'gZARc','VFxVk':'GNXfW','WRZOD':_0x4a04dc(0x171)+_0x4a04dc(0x433)+_0x4a04dc(0x33d)+'t','lmKpu':_0x4a04dc(0x3c3)+'p','izUxI':_0x4a04dc(0x600)+'tles','mgnqJ':'mn-h','rNDmU':_0x4a04dc(0x2c5)+'a\x20Ski'+_0x4a04dc(0x9f2)+'z','iFudX':_0x4a04dc(0x5f7)+'ose','aSSqv':_0x4a04dc(0x89d)+'viewB'+'ox=\x220'+_0x4a04dc(0x5f5)+'\x2024\x22>'+_0x4a04dc(0xac1)+_0x4a04dc(0xf9)+_0x4a04dc(0x31f)+'2\x2012M'+'18\x206\x20'+'6\x2018\x22'+'/></s'+_0x4a04dc(0x3e2),'nWYJU':_0x4a04dc(0x3a4)+'ls','rPPGm':function(_0x373f93,_0x50d07a){return _0x373f93!==_0x50d07a;},'ydEiy':_0x4a04dc(0xa2f),'gcEEd':_0x4a04dc(0x773)+'l>','AfecA':'sakur'+'a-pet'+'al','fMjlP':function(_0x1ad6f0,_0x47704b){return _0x1ad6f0===_0x47704b;},'UAgxo':_0x4a04dc(0x55f),'dGdTM':function(_0x5e6dbe,_0x5a245a){return _0x5e6dbe===_0x5a245a;},'tMGaa':function(_0x57fa0b,_0xc2965d){return _0x57fa0b+_0xc2965d;},'JgFcl':function(_0x340da8,_0x2c9338){return _0x340da8===_0x2c9338;},'JCSRS':function(_0x9c5871,_0x27c5ac){return _0x9c5871!==_0x27c5ac;},'ofYHj':function(_0x414adc,_0x3dc1b5){return _0x414adc+_0x3dc1b5;},'Vrlmg':_0x4a04dc(0x474)+_0x4a04dc(0x4dc),'DLKVj':_0x4a04dc(0x2b1)+'n','zMZpA':function(_0xb0d179,_0x3fa5cd){return _0xb0d179!==_0x3fa5cd;},'IBPUB':_0x4a04dc(0x521),'xIfpj':function(_0x14593d){return _0x14593d();},'duqdm':function(_0x250bc7,_0x48c73a){return _0x250bc7!==_0x48c73a;},'Plfee':_0x4a04dc(0xa5b),'mIpwx':_0x4a04dc(0x31a),'HbZED':function(_0x49f0a6,_0x5b17cf){return _0x49f0a6+_0x5b17cf;},'ISPpH':function(_0x333bd3,_0x1ebdc9){return _0x333bd3+_0x1ebdc9;},'cwflx':_0x4a04dc(0x501)+'playe'+_0x4a04dc(0x87d),'RlWqZ':_0x4a04dc(0x501)+_0x4a04dc(0x242),'EUDSd':function(_0x25f6e4,_0x23fbd0){return _0x25f6e4+_0x23fbd0;},'tcqBN':function(_0x1e2b3c,_0x1d29e3){return _0x1e2b3c+_0x1d29e3;},'enEHu':function(_0x2da1bb,_0x59dff0){return _0x2da1bb/_0x59dff0;},'uapSA':function(_0x1eb624,_0x4ec071){return _0x1eb624(_0x4ec071);},'jyjvK':'off\x20t'+_0x4a04dc(0x19c)+'ve\x20ma'+_0x4a04dc(0x421),'xXnOL':function(_0x26584b,_0xa30ef7){return _0x26584b===_0xa30ef7;},'umKWi':function(_0x47ff5f,_0x22058b){return _0x47ff5f===_0x22058b;},'JIBql':function(_0x2fde01,_0x58eb0a){return _0x2fde01*_0x58eb0a;},'hqnjA':function(_0x5c773b,_0x461a10){return _0x5c773b+_0x461a10;},'ppadN':function(_0x4de128,_0x61909f,_0x2ef0a9,_0x20bd22){return _0x4de128(_0x61909f,_0x2ef0a9,_0x20bd22);},'LLzbg':function(_0xc63a55,_0x1c9b23){return _0xc63a55===_0x1c9b23;},'uvjkb':function(_0x2e533b,_0x41778a,_0x5d7e7c){return _0x2e533b(_0x41778a,_0x5d7e7c);},'flUwI':function(_0x57ce08,_0x5a6187){return _0x57ce08+_0x5a6187;},'QPBHE':function(_0x33f539,_0x3aef1d){return _0x33f539*_0x3aef1d;},'xipoX':_0x4a04dc(0x492)+_0x4a04dc(0x86c)+'ixed;'+'right'+_0x4a04dc(0x5a3)+_0x4a04dc(0x2ad)+_0x4a04dc(0x15d)+'z-ind'+'ex:21'+'47483'+'646;p'+'ointe'+_0x4a04dc(0xaa1)+_0x4a04dc(0x455)+'one;','KAjzd':'paddi'+_0x4a04dc(0x2f2)+_0x4a04dc(0x9b1)+_0x4a04dc(0x563)+_0x4a04dc(0x609)+_0x4a04dc(0x3ef)+_0x4a04dc(0x764)+'ace,C'+_0x4a04dc(0xab0)+_0x4a04dc(0xaea)+'nospa'+'ce;co'+'lor:#'+'bda9c'+'9;','RvUtQ':function(_0x3298c3,_0x4c260e){return _0x3298c3+_0x4c260e;},'KrZCc':_0x4a04dc(0x171)+'a-esp','Hgkzb':_0x4a04dc(0x530)+_0x4a04dc(0xa70)+_0x4a04dc(0x608),'gvoZg':_0x4a04dc(0x530)+_0x4a04dc(0xa70)+'p-lg','VhHDV':'fSBmM','GFLNu':_0x4a04dc(0x5de)+'s','GpRcs':'posit'+_0x4a04dc(0x86c)+_0x4a04dc(0x654)+'left:'+'0;top'+':0;z-'+_0x4a04dc(0x792)+':2147'+_0x4a04dc(0x7eb)+_0x4a04dc(0x767)+_0x4a04dc(0x91b)+'event'+_0x4a04dc(0x583)+'e;','NBlfv':function(_0x541b87,_0x4dbe5b){return _0x541b87!==_0x4dbe5b;},'vqEWh':function(_0x4366f6,_0x2d5a1f){return _0x4366f6+_0x2d5a1f;},'dWUsK':_0x4a04dc(0x9b0),'vGZDu':_0x4a04dc(0x526)+'s\x20wer'+_0x4a04dc(0x80d)+_0x4a04dc(0x4e9)+'N\x20by\x20'+_0x4a04dc(0x460)+_0x4a04dc(0xad0)+'apply'+_0x4a04dc(0x88d)+'\x20','RFHBk':_0x4a04dc(0x8be)+_0x4a04dc(0x786)+_0x4a04dc(0x8a8)+_0x4a04dc(0xaee)+_0x4a04dc(0x4ff)+_0x4a04dc(0x88c)+_0x4a04dc(0x385)+_0x4a04dc(0x615)+'\x20for\x20'+_0x4a04dc(0x877)+_0x4a04dc(0x7c3)+_0x4a04dc(0x8d4)+'\x20page'+'.\x20','ZzHGF':function(_0x3b352b,_0x160d25){return _0x3b352b(_0x160d25);},'KLuun':function(_0x32bcac,_0x4934d3){return _0x32bcac===_0x4934d3;},'pvWAD':function(_0x3aa5e4,_0xfeaca,_0x19b744){return _0x3aa5e4(_0xfeaca,_0x19b744);},'qbsct':function(_0x1bfb94,_0x5ca80f){return _0x1bfb94!==_0x5ca80f;},'HAisP':function(_0x439681,_0xe7b9fd){return _0x439681-_0xe7b9fd;},'NKmJt':function(_0x5bd263,_0x4522ff){return _0x5bd263-_0x4522ff;},'FINif':_0x4a04dc(0x947)+_0x4a04dc(0x687)+'10,11'+'6,.95'+')','tUkMo':function(_0x4fa255,_0x74ca6a){return _0x4fa255-_0x74ca6a;},'hZQZF':function(_0x4b2a80,_0x1e2553){return _0x4b2a80===_0x1e2553;},'KlAQI':function(_0x110fa5,_0x566157){return _0x110fa5*_0x566157;},'WoTVu':function(_0x12110d,_0x3378d9){return _0x12110d<=_0x3378d9;},'exScr':function(_0x3feefa,_0x48f2f1){return _0x3feefa*_0x48f2f1;},'IRZMx':'no\x20lo'+'cal\x20p'+_0x4a04dc(0x987)+_0x4a04dc(0x1e2),'LtoZV':function(_0x41f46d,_0x100b34){return _0x41f46d===_0x100b34;},'wHjbn':_0x4a04dc(0x99b)+'6a','XTlTN':function(_0x28d7f2,_0x4397e4){return _0x28d7f2===_0x4397e4;},'xKeoc':function(_0x3c48cf,_0x298cbf){return _0x3c48cf*_0x298cbf;},'LWhaj':function(_0x3ffe9e,_0x228aa6){return _0x3ffe9e-_0x228aa6;},'OqxSM':function(_0x53e25e,_0x4522b7){return _0x53e25e/_0x4522b7;},'UFahm':'#7ee0'+'a8','cVBfG':function(_0x2fb368,_0x3ab75d){return _0x2fb368*_0x3ab75d;},'ZnTtp':'\x20·\x20','DAKSd':'\x20·\x20fo'+'v\x20','lXMlk':function(_0x55bc26,_0x3061b8){return _0x55bc26+_0x3061b8;},'RVuRc':function(_0x45be8b){return _0x45be8b();},'OoysL':function(_0x15124b){return _0x15124b();},'JtOyl':'gIrHS','clvAw':function(_0x11aaf5,_0x5042c6){return _0x11aaf5!==_0x5042c6;},'mQXqc':function(_0x408b0d,_0x4042f7){return _0x408b0d+_0x4042f7;},'vwMdk':function(_0x40fa33,_0x30697e){return _0x40fa33-_0x30697e;},'QCPWs':function(_0x387bbf){return _0x387bbf();},'NYiAe':function(_0x1d5e61){return _0x1d5e61();},'xTxMV':_0x4a04dc(0x779)+_0x4a04dc(0x5c2)+_0x4a04dc(0x748),'rsxBe':_0x4a04dc(0x7fe)+_0x4a04dc(0x76d)+_0x4a04dc(0x43c)+_0x4a04dc(0x748),'pjwrH':function(_0x3e144f,_0x59b8b3){return _0x3e144f+_0x59b8b3;},'sDEuE':_0x4a04dc(0x69f)+_0x4a04dc(0x73e)+'\x20but\x20'+_0x4a04dc(0x56f)+_0x4a04dc(0x355)+_0x4a04dc(0x7f5),'Nclwp':function(_0x102eff,_0x5e9f7b){return _0x102eff+_0x5e9f7b;},'xZRxT':'Reaso'+_0x4a04dc(0x874),'xqtho':_0x4a04dc(0x78e)+_0x4a04dc(0xa0f)+_0x4a04dc(0x89c)+'\x20so\x20e'+_0x4a04dc(0x6fb)+'offse'+_0x4a04dc(0x5df)+_0x4a04dc(0x966)+_0x4a04dc(0x148)+_0x4a04dc(0xe6)+'e.','GYwtc':function(_0x11b9b4,_0x571982){return _0x11b9b4===_0x571982;},'YHaiT':function(_0x32d8d1,_0x234643){return _0x32d8d1+_0x234643;},'oyxNY':_0x4a04dc(0x44e)+_0x4a04dc(0x1e3)+_0x4a04dc(0x3b9)+'the\x20o'+_0x4a04dc(0xa3b)+'lding'+_0x4a04dc(0x587)+'s\x20orp'+_0x4a04dc(0x238)+_0x4a04dc(0x1ac)+'able\x20'+_0x4a04dc(0x938)+'\x20othe'+'r\x20','unjtt':_0x4a04dc(0x2c5)+'a/UWM'+'K\x20scr'+_0x4a04dc(0x541)+'n\x20Tam'+'permo'+_0x4a04dc(0x707)+_0x4a04dc(0x6a6)+_0x4a04dc(0x8b7)+'eload'+'.','CgWAs':'again'+_0x4a04dc(0x9c8)+_0x4a04dc(0xf2)+_0x4a04dc(0x349)+'Runti'+_0x4a04dc(0x296)+_0x4a04dc(0x8fd)+'e\x20tha'+'n\x20the'+'\x20glob'+'al\x20no'+_0x4a04dc(0x7df)+_0x4a04dc(0x279),'kPxnx':function(_0x2fb36d,_0xe01bb3){return _0x2fb36d+_0xe01bb3;},'FMOMQ':'windo'+'w.Uni'+_0x4a04dc(0x107)+_0x4a04dc(0x953)+'t.Val'+'ueWra'+_0x4a04dc(0x8b6)+'is\x20mi'+'ssing'+_0x4a04dc(0xac0)+'pture'+_0x4a04dc(0x133)+_0x4a04dc(0x88a)+'g\x20bli'+'nd.','TPuUZ':_0x4a04dc(0x526)+'(s)\x20d'+_0x4a04dc(0xab4)+_0x4a04dc(0x4c8)+'ng\x20at'+'\x20docu'+_0x4a04dc(0x93b)+_0x4a04dc(0x32e)+'.','ydvzM':function(_0x14034e,_0x5385e5){return _0x14034e+_0x5385e5;},'WjRPg':function(_0x38f76c,_0x29fd98){return _0x38f76c+_0x29fd98;},'ueypk':_0x4a04dc(0x7fe)+_0x4a04dc(0x321)+'ved\x20','gndum':_0x4a04dc(0x448)+'\x20are\x20'+_0x4a04dc(0x853)+_0x4a04dc(0xad1)+'t\x20no\x20'+_0x4a04dc(0x1af)+'ntrol'+_0x4a04dc(0x262)+_0x4a04dc(0xa4c)+_0x4a04dc(0x46a)+_0x4a04dc(0x462),'tCZLK':'Eithe'+_0x4a04dc(0x8b1)+'\x20are\x20'+_0x4a04dc(0x51a)+'n\x20a\x20r'+_0x4a04dc(0x7ad)+_0x4a04dc(0x846)+'he\x20ho'+_0x4a04dc(0x259)+'\x20on\x20t'+'he\x20wr'+_0x4a04dc(0x7b1)+_0x4a04dc(0x925)+'ad.','uatCS':'rebui'+_0x4a04dc(0x1d0)+'nce\x20f'+_0x4a04dc(0x302)+'captu'+_0x4a04dc(0x6e7)+_0x4a04dc(0x203)+_0x4a04dc(0x397),'LmoTA':function(_0x2c461a,_0x1199f3){return _0x2c461a+_0x1199f3;},'fOwlb':function(_0xc14c61,_0x400e5c){return _0xc14c61+_0x400e5c;},'panUp':function(_0x2bdbc4,_0x533024){return _0x2bdbc4-_0x533024;},'agwWz':function(_0x12d10e){return _0x12d10e();},'pPfQB':function(_0x1ad1ac,_0x4c0552,_0x3c32a0){return _0x1ad1ac(_0x4c0552,_0x3c32a0);},'VlZcK':function(_0x384d94){return _0x384d94();},'hjHCu':function(_0x195299){return _0x195299();},'aqBki':function(_0x135611,_0x3ff354){return _0x135611!==_0x3ff354;},'YCRjR':_0x4a04dc(0x3cb),'BygCE':'porta'+'l','IsWmg':'#ff8f'+'b1','KPyDD':function(_0x45e208,_0x3fd72e){return _0x45e208+_0x3fd72e;},'wewEy':_0x4a04dc(0x3a0)+'ge','CxvEF':function(_0x3ca252,_0x599704){return _0x3ca252+_0x599704;},'sMJZF':function(_0x293845,_0x20a6e2,_0xfa11a3){return _0x293845(_0x20a6e2,_0xfa11a3);},'cZmfm':_0x4a04dc(0x7bf)+_0x4a04dc(0x891)+_0x4a04dc(0x4d2)+'nc','olbed':_0x4a04dc(0x5e7)+'bly-C'+'Sharp'+'-firs'+'tpass'+_0x4a04dc(0x794),'bCvzz':_0x4a04dc(0x5d9)+'cofor'+'ge.De'+_0x4a04dc(0x4e0)+'ll','IpUFZ':_0x4a04dc(0x3db),'RJwQl':'0x10','qOaVb':_0x4a04dc(0xa8a)+'h','OMOPy':_0x4a04dc(0x484),'DDlPm':_0x4a04dc(0x9b4),'DGdWy':'capsu'+'le','TwMyv':_0x4a04dc(0x2ce),'FQwNa':_0x4a04dc(0xa66)+'tHeal'+'th2','adrDJ':_0x4a04dc(0x77f)+_0x4a04dc(0x144),'ZySQL':_0x4a04dc(0x1a6),'diYBr':_0x4a04dc(0x7a7),'RJpKe':'sakur'+_0x4a04dc(0x66d)+_0x4a04dc(0x206),'bElIR':'ZFhcq','HxXOR':'comba'+'t','lNBvi':function(_0x547357,_0x1d50f3){return _0x547357+_0x1d50f3;},'ESBZf':function(_0x11376c,_0x25abdb){return _0x11376c+_0x25abdb;},'MxrOy':function(_0x462c7a,_0x380d64){return _0x462c7a+_0x380d64;},'OmydY':function(_0x18ca2c,_0x7aad10){return _0x18ca2c+_0x7aad10;},'qyUPb':function(_0x3bbc04,_0x5d57b4){return _0x3bbc04+_0x5d57b4;},'qJkrh':function(_0x33a31e,_0x3207fe){return _0x33a31e+_0x3207fe;},'tuZMo':function(_0x1f723f,_0x122385){return _0x1f723f+_0x122385;},'erhbP':function(_0x44af26,_0x5f4e4e){return _0x44af26+_0x5f4e4e;},'NoevY':function(_0x4476d6,_0x27f261){return _0x4476d6+_0x27f261;},'ufYFT':function(_0x22e694,_0x3dc927){return _0x22e694+_0x3dc927;},'nqWoh':function(_0x5f4402,_0xb22a67){return _0x5f4402+_0xb22a67;},'cGOdm':_0x4a04dc(0x530)+'ra-me'+'nu-ro'+_0x4a04dc(0x6e0)+'l:ini'+_0x4a04dc(0x493),'eUpJX':'displ'+_0x4a04dc(0xacf)+'ex;ga'+_0x4a04dc(0x76b)+'x;pad'+_0x4a04dc(0x844)+_0x4a04dc(0x5b9)+_0x4a04dc(0x13c)+'r-rad'+_0x4a04dc(0x96f)+_0x4a04dc(0x974)+'ointe'+_0x4a04dc(0xaa1)+'nts:a'+'uto;z'+_0x4a04dc(0x967)+_0x4a04dc(0x8ce)+'74836'+'47;','CZbSG':'backg'+'round'+':rgba'+'(24,1'+_0x4a04dc(0x98e)+_0x4a04dc(0x995)+'backd'+'rop-f'+_0x4a04dc(0x143)+':blur'+_0x4a04dc(0x8e5)+_0x4a04dc(0x48a)+_0x4a04dc(0x54e)+_0x4a04dc(0x357)+_0x4a04dc(0x444)+_0x4a04dc(0x858)+'backd'+_0x4a04dc(0x71c)+'ilter'+_0x4a04dc(0x5a2)+'(22px'+')\x20sat'+_0x4a04dc(0x54e)+'(150%'+');','aGWFY':_0x4a04dc(0x551)+'ty:0;'+_0x4a04dc(0x77f)+'form:'+'trans'+_0x4a04dc(0x866)+_0x4a04dc(0x124)+_0x4a04dc(0x731)+'nter-'+_0x4a04dc(0x590)+'s:non'+_0x4a04dc(0xa90)+_0x4a04dc(0x7ee)+_0x4a04dc(0x4fa)+_0x4a04dc(0x3a9)+_0x4a04dc(0x605)+_0x4a04dc(0x24c)+',tran'+_0x4a04dc(0x6fd)+_0x4a04dc(0x62a)+'\x20cubi'+_0x4a04dc(0x13d)+_0x4a04dc(0x5ae)+'22,1,'+'.36,1'+');','FgsIb':'color'+_0x4a04dc(0x81e)+_0x4a04dc(0xa46)+_0x4a04dc(0x251)+_0x4a04dc(0x38a)+_0x4a04dc(0xa6f)+_0x4a04dc(0xa0a)+'amily'+_0x4a04dc(0x22e)+_0x4a04dc(0x28a)+'Segoe'+_0x4a04dc(0x83d)+'syste'+_0x4a04dc(0x1cd)+_0x4a04dc(0x102)+'serif'+';}','ATyJX':_0x4a04dc(0x73b)+'anel.'+'shown'+_0x4a04dc(0x9f3)+'ity:1'+_0x4a04dc(0x39d)+_0x4a04dc(0x6fd)+_0x4a04dc(0x3b8)+_0x4a04dc(0x5d3)+_0x4a04dc(0x620)+'vents'+_0x4a04dc(0x906)+';}','xmslE':'.mn-s'+'ide{d'+'ispla'+_0x4a04dc(0x62b)+'x;fle'+'x-dir'+'ectio'+_0x4a04dc(0x59f)+'umn;a'+_0x4a04dc(0x2e1)+_0x4a04dc(0x190)+':cent'+_0x4a04dc(0x91a)+_0x4a04dc(0x488)+';widt'+_0x4a04dc(0xa7c)+_0x4a04dc(0x277)+'x:non'+'e;pad'+_0x4a04dc(0x844)+_0x4a04dc(0x2ae)+'0;','OzcKK':_0x4a04dc(0x13c)+'r-rad'+_0x4a04dc(0x6ba)+'6px;b'+'ackgr'+_0x4a04dc(0x3d4)+'rgba('+_0x4a04dc(0x75e)+_0x4a04dc(0xa9f)+_0x4a04dc(0x7c7)+_0x4a04dc(0x988)+_0x4a04dc(0x333)+'dow:i'+_0x4a04dc(0xa37)+_0x4a04dc(0xf7)+_0x4a04dc(0x37e)+_0x4a04dc(0x947)+_0x4a04dc(0x75e)+_0x4a04dc(0xa9f)+_0x4a04dc(0x8d7)+_0x4a04dc(0x93f),'isVEH':_0x4a04dc(0xaa2)+_0x4a04dc(0x91e)+'vg{wi'+_0x4a04dc(0x253)+'5px;h'+_0x4a04dc(0x980)+':25px'+';over'+_0x4a04dc(0x15b)+_0x4a04dc(0x42c)+_0x4a04dc(0x384)+'lter:'+_0x4a04dc(0x3f4)+_0x4a04dc(0x830)+_0x4a04dc(0x582)+_0x4a04dc(0x4b0)+_0x4a04dc(0x947)+'255,1'+'07,15'+_0x4a04dc(0x78b)+_0x4a04dc(0x93f),'IzuHw':'.mn-t'+_0x4a04dc(0x4a7)+'splay'+':flex'+_0x4a04dc(0xee)+_0x4a04dc(0x3d5)+'ms:ce'+_0x4a04dc(0x16b)+_0x4a04dc(0xac8)+_0x4a04dc(0x2a4)+'ntent'+':cent'+'er;wi'+_0x4a04dc(0x73f)+_0x4a04dc(0x350)+'eight'+_0x4a04dc(0x8e4)+';bord'+_0x4a04dc(0x19a)+'borde'+'r-rad'+_0x4a04dc(0x6ba)+_0x4a04dc(0x3de),'QrgKc':_0x4a04dc(0x312)+_0x4a04dc(0x982)+_0x4a04dc(0x174)+'olor:'+'rgba('+_0x4a04dc(0x61b)+_0x4a04dc(0xad8)+_0x4a04dc(0x629)+';}','DbXGr':_0x4a04dc(0x312)+_0x4a04dc(0x791)+'tive{'+'color'+':#ff6'+_0x4a04dc(0x98a)+_0x4a04dc(0x5f6)+_0x4a04dc(0x3d4)+'rgba('+'255,1'+_0x4a04dc(0x191)+'7,.1)'+';}','tQBwv':'.mn-t'+_0x4a04dc(0x59c)+'splay'+_0x4a04dc(0x959)+_0x4a04dc(0xee)+_0x4a04dc(0x3d5)+_0x4a04dc(0x878)+'nter;'+'gap:1'+_0x4a04dc(0x974)+_0x4a04dc(0xa89)+_0x4a04dc(0x339)+_0x4a04dc(0x2aa)+_0x4a04dc(0x97b)+_0x4a04dc(0x691)+'selec'+_0x4a04dc(0x6d6)+_0x4a04dc(0x489),'hzODG':_0x4a04dc(0x312)+'itles'+_0x4a04dc(0x491)+_0x4a04dc(0x5e4)+_0x4a04dc(0x1ff)+_0x4a04dc(0x304)+'}','JIZiU':_0x4a04dc(0xa7f)+'lose{'+'displ'+'ay:gr'+'id;pl'+'ace-i'+_0x4a04dc(0x7c5)+'cente'+_0x4a04dc(0xa2c)+_0x4a04dc(0x4c7)+'px;he'+'ight:'+_0x4a04dc(0xa23)+_0x4a04dc(0x13c)+'r:0;b'+'order'+_0x4a04dc(0x1cb)+'us:8p'+'x;bac'+_0x4a04dc(0x4f8)+'nd:tr'+_0x4a04dc(0x75a)+'rent;','MKgSe':'.mn-c'+'lose:'+_0x4a04dc(0x873)+_0x4a04dc(0x9f3)+'ity:1'+_0x4a04dc(0x951)+_0x4a04dc(0x8e0)+'d:rgb'+_0x4a04dc(0x137)+_0x4a04dc(0x20a)+'255,.'+_0x4a04dc(0x2b8),'kAhwu':'.mn-c'+'lose\x20'+'svg{w'+_0x4a04dc(0x1e4)+_0x4a04dc(0x8c4)+_0x4a04dc(0x8c0)+_0x4a04dc(0x2e7)+'x;fil'+_0x4a04dc(0x395)+_0x4a04dc(0x57c)+'oke:c'+'urren'+_0x4a04dc(0x2d7)+_0x4a04dc(0x7bd)+'oke-w'+_0x4a04dc(0x1e4)+'2;str'+_0x4a04dc(0x9ad)+_0x4a04dc(0x2f4)+_0x4a04dc(0x25e)+'nd;}','DSaHA':'.sk-c'+_0x4a04dc(0x16f)+_0x4a04dc(0x53b)+_0x4a04dc(0x709)+'g{fon'+_0x4a04dc(0x14f)+_0x4a04dc(0xaf8)+_0x4a04dc(0x9b1)+'t-wei'+'ght:6'+_0x4a04dc(0x96e)+_0x4a04dc(0x294)+_0x4a04dc(0x548)+'46,23'+_0x4a04dc(0x9f7)+',.45)'+';}','ModAC':_0x4a04dc(0xa39)+_0x4a04dc(0x24f)+_0x4a04dc(0x628)+_0x4a04dc(0x9c9)+_0x4a04dc(0x553)+_0x4a04dc(0x237)+_0x4a04dc(0x6b8)+_0x4a04dc(0x18b)+_0x4a04dc(0x8cf)+'f5;}','ifYpH':_0x4a04dc(0x25d)+_0x4a04dc(0x10c)+_0x4a04dc(0x47a)+_0x4a04dc(0x8c8)+'11px;'+_0x4a04dc(0x551)+_0x4a04dc(0x3ba)+_0x4a04dc(0x69a)+'in-bo'+_0x4a04dc(0x598)+_0x4a04dc(0x1bf)+_0x4a04dc(0x24a)+_0x4a04dc(0xa19)+_0x4a04dc(0x524)+_0x4a04dc(0x766)+'}','FqliZ':_0x4a04dc(0x4b1)+_0x4a04dc(0x9df)+'ispla'+_0x4a04dc(0x200)+'ck;fo'+'nt-si'+'ze:10'+_0x4a04dc(0x895)+'acity'+_0x4a04dc(0x95a),'rTNkk':_0x4a04dc(0x26a)+_0x4a04dc(0xe9)+_0x4a04dc(0x603)+_0x4a04dc(0x880)+'relat'+'ive;w'+_0x4a04dc(0x1e4)+_0x4a04dc(0x53d)+'heigh'+'t:14p'+_0x4a04dc(0x673)+_0x4a04dc(0x9b2)+_0x4a04dc(0x32b)+_0x4a04dc(0x6f2)+'dius:'+_0x4a04dc(0xa22)+_0x4a04dc(0x376)+_0x4a04dc(0x8aa)+':rgba'+_0x4a04dc(0x955)+_0x4a04dc(0x75e)+'55,.0'+'7);cu'+_0x4a04dc(0x41a)+_0x4a04dc(0x698)+_0x4a04dc(0x4c9)+'ex:no'+'ne;}','UhsRK':_0x4a04dc(0x26a)+'witch'+_0x4a04dc(0xa27)+'-chec'+_0x4a04dc(0x3b3)+_0x4a04dc(0x558)+']{bac'+'kgrou'+_0x4a04dc(0x33e)+'ba(25'+_0x4a04dc(0x2fc)+_0x4a04dc(0x833)+'.25);'+'}','GoRAv':_0x4a04dc(0xae1)+_0x4a04dc(0x8b3)+'displ'+'ay:fl'+'ex;al'+_0x4a04dc(0x77c)+_0x4a04dc(0x7c5)+_0x4a04dc(0x5bf)+'r;gap'+_0x4a04dc(0x95b)+'}','ocqts':'backg'+'round'+_0x4a04dc(0x21e)+_0x4a04dc(0x95d)+'adien'+'t(#ff'+'6b9d,'+_0x4a04dc(0x16e)+_0x4a04dc(0x8ed)+_0x4a04dc(0x263)+'var(-'+_0x4a04dc(0x66c)+_0x4a04dc(0x9b5)+_0x4a04dc(0x37c)+_0x4a04dc(0xec)+_0x4a04dc(0x33a)+_0x4a04dc(0x7e5)+_0x4a04dc(0x664)+',255,'+'.08);'+'}','DTKKr':_0x4a04dc(0x5a7)+'al{fo'+_0x4a04dc(0x109)+'ze:11'+_0x4a04dc(0x543)+'nt-we'+'ight:'+_0x4a04dc(0x9a2)+'in-wi'+'dth:3'+'4px;t'+'ext-a'+'lign:'+_0x4a04dc(0x8a0)+_0x4a04dc(0x475)+_0x4a04dc(0x5ef)+'a(246'+_0x4a04dc(0x6a5)+_0x4a04dc(0x7cb)+_0x4a04dc(0x63d),'RYtGT':'font-'+_0x4a04dc(0x8c8)+_0x4a04dc(0x580)+_0x4a04dc(0x9b1)+'t-wei'+'ght:7'+'00;cu'+_0x4a04dc(0x41a)+_0x4a04dc(0x698)+_0x4a04dc(0x892)+_0x4a04dc(0xaa0)+_0x4a04dc(0x215)+'inher'+_0x4a04dc(0x9d9),'jNVjN':'.sk-b'+_0x4a04dc(0x99e)+_0x4a04dc(0x8bd)+_0x4a04dc(0x143)+':brig'+'htnes'+_0x4a04dc(0x970)+');}','wJRqn':'<svg\x20'+'viewB'+_0x4a04dc(0x6a1)+'\x200\x2024'+_0x4a04dc(0x7c4)+_0x4a04dc(0xac1)+'\x20d=\x22M'+'12\x2021'+_0x4a04dc(0x4f1)+'-2.5-'+_0x4a04dc(0x550)+_0x4a04dc(0x471)+_0x4a04dc(0x4e7)+'.5\x201.'+_0x4a04dc(0x7b6)+_0x4a04dc(0x332)+_0x4a04dc(0x28f)+_0x4a04dc(0x141)+_0x4a04dc(0x61f)+'-2.5\x20'+_0x4a04dc(0x3ca)+_0x4a04dc(0x674),'HCuYS':'fill='+'\x22none'+'\x22\x20str'+'oke=\x22'+_0x4a04dc(0x16e)+_0x4a04dc(0x801)+_0x4a04dc(0x88f)+'-widt'+_0x4a04dc(0x25b)+'\x20stro'+_0x4a04dc(0x6e1)+_0x4a04dc(0x692)+'=\x22rou'+_0x4a04dc(0x49c)+_0x4a04dc(0x88f)+'-line'+'join='+_0x4a04dc(0x806)+_0x4a04dc(0x280),'mkUlf':function(_0x2c42c6,_0x56bad1){return _0x2c42c6+_0x56bad1;},'yLlvs':function(_0xac3387,_0x29d2dd){return _0xac3387+_0x29d2dd;},'VLcLB':_0x4a04dc(0x240)+'ntent'+_0x4a04dc(0x535)+'d','rpfAc':function(_0x350c4b){return _0x350c4b();}};var _0x2e0d56=location[_0x4a04dc(0x903)+'ame']||'',_0x56afde=/(^|\.)www\.crazygames\.com$/['test'](_0x2e0d56),_0x2f29b1=/(^|\.)games\.crazygames\.com$/[_0x4a04dc(0x1ec)](_0x2e0d56),_0x50c66b=/(^|\.)crazygames\.com$/[_0x4a04dc(0x1ec)](_0x2e0d56)&&!_0x56afde&&!_0x2f29b1,_0x3dd1cd=_0x56afde?_0x66ae08[_0x4a04dc(0x973)]:_0x2f29b1?_0x4a04dc(0x36c)+'er':_0x4a04dc(0x80a)+'r';if(!_0x56afde&&!_0x2f29b1&&!_0x50c66b)return;var _0x28be14=_0x66ae08['IsWmg'],_0x44b7bc=_0x4a04dc(0x170)+_0x4a04dc(0x1d7)+_0x4a04dc(0x1dd),_0x42cf5e='===SA'+_0x4a04dc(0x212)+_0x4a04dc(0x642)+_0x4a04dc(0x412)+'BEGIN'+_0x4a04dc(0x37a),_0x58e0c2=_0x4a04dc(0x996)+_0x4a04dc(0x212)+_0x4a04dc(0x642)+_0x4a04dc(0x412)+_0x4a04dc(0xa06)+'=',_0x4eebbe=_0x4a04dc(0x5a0);if(_0x2f29b1){window[_0x4a04dc(0x295)+'entLi'+_0x4a04dc(0x825)+'r']('messa'+'ge',function(_0x3af157){var _0x3e04fb=_0x4a04dc,_0x5d38ec={'FcxqO':function(_0x264337,_0x21c8ee,_0x44c56c,_0x54b89d){return _0x264337(_0x21c8ee,_0x44c56c,_0x54b89d);},'NEczp':_0x66ae08['tLway'],'AwPtL':function(_0x1d180c,_0x1dd0c4){return _0x1d180c>_0x1dd0c4;},'oTzMJ':function(_0x248c32,_0x327dc9,_0x106b7e){var _0x205a0b=_0x32ef;return _0x66ae08[_0x205a0b(0x4ec)](_0x248c32,_0x327dc9,_0x106b7e);}};if(_0x3e04fb(0x821)===_0x3e04fb(0x821)){var _0x52e10a=_0x3af157['data'];if(!_0x52e10a||_0x52e10a[_0x3e04fb(0x170)+'ura']!==_0x44b7bc)return;try{if(window['paren'+'t']&&window[_0x3e04fb(0x67c)+'t']!==window)window['paren'+'t'][_0x3e04fb(0x5a1)+_0x3e04fb(0x3d1)+'e'](_0x52e10a,'*');if(window[_0x3e04fb(0x35a)]&&window[_0x3e04fb(0x35a)]!==window)window['top']['postM'+_0x3e04fb(0x3d1)+'e'](_0x52e10a,'*');}catch(_0x556f53){}if(_0x52e10a&&_0x66ae08['oeyJE'](_0x52e10a['kind'],_0x66ae08['wVgwf'])){if(_0x66ae08[_0x3e04fb(0x185)](_0x66ae08[_0x3e04fb(0x15f)],_0x66ae08[_0x3e04fb(0x977)])){var _0x4987b4=_0x54f94f[_0x3e04fb(0x561)]('+');_0x5a416e=_0x5d38ec[_0x3e04fb(0x45d)](_0x438a58,_0x33c3b8,_0x4987b4[-0x1bc3+0x103d*0x1+0xb86][_0x3e04fb(0x792)+'Of'](_0x5d38ec[_0x3e04fb(0x7f2)])===-0x3b*0xa0+0xe9*-0xa+-0x16fd*-0x2?'Healt'+_0x3e04fb(0x21f)+'pt':_0x3e04fb(0x1af)+'ntrol'+_0x3e04fb(0x24b),_0x8ffadf(_0x4987b4[0x139d+-0x22c0*0x1+0xf24],-0x26fb*-0x1+-0x1ff1+-0x6fa));}else try{var _0x5bfd74=document[_0x3e04fb(0x591)+_0x3e04fb(0x2f0)+_0x3e04fb(0x55d)+'l']('ifram'+'e');for(var _0xccbbc8=0x74b*0x2+0xb*0x8f+-0xb7*0x1d;_0xccbbc8<_0x5bfd74['lengt'+'h'];_0xccbbc8++){if(_0x66ae08[_0x3e04fb(0x946)]('rOocA','jFGfw')){var _0x381691=_0x30ec8e[_0x3e04fb(0x676)+'cs'][_0x14d635]['v'],_0x5c0e3f=_0x381691[0x13*0x1c1+0x203a+0x418d*-0x1]*_0x381691[0x17f0+0x23e2+-0x3bd2]+_0x381691[-0x35*0x93+-0x1*-0x37f+-0x2*-0xd79]*_0x381691[-0x2206+0x4fe*-0x1+-0x36*-0xb9];_0x5d38ec[_0x3e04fb(0x983)](_0x5c0e3f,_0x4e2cde)&&(_0x11315e=_0x5c0e3f,_0x13d5ab[_0x3e04fb(0x714)]=_0x381691,_0x1af183['posAt']=_0xf9214c[_0x3e04fb(0x676)+'cs'][_0x566241]['o']);}else try{if(_0x66ae08[_0x3e04fb(0x185)](_0x66ae08['Fngmo'],'zgmqe'))_0x5d38ec[_0x3e04fb(0x641)](_0x40f255,!_0x4e6ddc['on'],_0x5b6921['facto'+'r']);else{if(_0x5bfd74[_0xccbbc8][_0x3e04fb(0x7d5)+'ntWin'+'dow'])_0x5bfd74[_0xccbbc8]['conte'+'ntWin'+'dow']['postM'+'essag'+'e'](_0x52e10a,'*');}}catch(_0x4e5887){}}}catch(_0x4c7467){}}}else return _0x66ae08['oeyJE'](_0x5ac750['type'],_0x7974ee);}),console['log'](_0x4a04dc(0xac3)+'kura]'+'\x20SW-W'+_0x4a04dc(0x3dc)+'R\x20ACT'+'IVE\x20('+_0x4a04dc(0x855)+'\x20up+d'+_0x4a04dc(0x90f),_0x66ae08[_0x4a04dc(0x871)](_0x66ae08['KUxUU'],_0x28be14));return;}if(_0x56afde){console[_0x4a04dc(0x60d)]('%c[sa'+'kura]'+_0x4a04dc(0x335)+_0x4a04dc(0x2db)+'TIVE',_0x66ae08[_0x4a04dc(0x6cd)]('color'+':',_0x28be14)+(';font'+_0x4a04dc(0xa08)+_0x4a04dc(0x86d)+'0'),{'host':_0x2e0d56});var _0x5bf8d5={'set':function(){},'command':function(){}};function _0x4cae58(_0x1c8f17,_0x13ba6d){var _0x21b156=_0x4a04dc,_0x481fda={'pdHwX':_0x66ae08[_0x21b156(0x182)]},_0x3c5ef5={'__sakura':_0x44b7bc,'kind':_0x21b156(0xa1a),'cmd':_0x1c8f17,'arg':_0x13ba6d};try{var _0x1545f0=document['query'+'Selec'+_0x21b156(0x55d)+'l'](_0x66ae08[_0x21b156(0x6ca)]);for(var _0x4173f1=0x1307+-0x26e0+0x13d9;_0x66ae08['Dqwvh'](_0x4173f1,_0x1545f0[_0x21b156(0x320)+'h']);_0x4173f1++){try{if(_0x1545f0[_0x4173f1][_0x21b156(0x7d5)+_0x21b156(0x271)+'dow'])_0x1545f0[_0x4173f1][_0x21b156(0x7d5)+_0x21b156(0x271)+'dow']['postM'+_0x21b156(0x3d1)+'e'](_0x3c5ef5,'*');}catch(_0x5a8969){}}}catch(_0x8c6b2f){}try{var _0x68a719=new BroadcastChannel(_0x66ae08[_0x21b156(0x9ca)]);_0x68a719[_0x21b156(0x5a1)+'essag'+'e'](_0x3c5ef5),setTimeout(function(){var _0x118d56=_0x21b156;if(_0x481fda[_0x118d56(0x86f)]!==_0x118d56(0xab5)){var _0x54e389=_0x4ea2e7[_0x2253e8],_0x392d18=_0x16a297(_0x118d56(0xa3e)+'n','mn-ta'+'b',_0x118d56(0x773)+'l>'+_0x54e389['label']+('</sma'+_0x118d56(0x927)));_0x392d18['type']=_0x118d56(0xa3e)+'n',_0x392d18[_0x118d56(0x7fd)]=_0x54e389['label'],function(_0x115bae){_0x392d18['oncli'+'ck']=function(){_0x592148(_0x115bae);};}(_0x54e389['id']),_0xa3aa6d[_0x54e389['id']]=_0x392d18,_0x2d42b3[_0x118d56(0x5b6)+'dChil'+'d'](_0x392d18);}else try{_0x68a719[_0x118d56(0x71b)]();}catch(_0x5046a5){}},0xf*-0x128+0x35*-0x95+0x312b);}catch(_0x179d23){}}var _0x11025e='sakur'+_0x4a04dc(0x66d)+'panel'+_0x4a04dc(0x7f0)+'en';function _0x823d25(){var _0x3a626b=_0x4a04dc;try{return localStorage[_0x3a626b(0x3e9)+'em'](_0x11025e)==='1';}catch(_0x2b75c3){return![];}}function _0x2a62f4(_0x2c5091){var _0x15aeca=_0x4a04dc,_0x14861b={'vrTRG':function(_0x11957f){return _0x11957f();},'sfKYT':function(_0x5e0449,_0x1b28bb){return _0x5e0449(_0x1b28bb);},'qSBjB':function(_0x431d88){return _0x431d88();}};try{_0x2c5091?localStorage['setIt'+'em'](_0x11025e,'1'):localStorage[_0x15aeca(0x2ff)+_0x15aeca(0x274)](_0x11025e);}catch(_0x3c27bc){}try{if(_0x66ae08[_0x15aeca(0xde)]!==_0x15aeca(0x2e6)){_0x14861b[_0x15aeca(0x636)](_0x3efa4e)[_0x15aeca(0xa44)]({'host':_0x14a9f9[_0x15aeca(0x788)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}else{var _0x46c08a=document['getEl'+_0x15aeca(0x6f5)+_0x15aeca(0x56d)](_0x66ae08[_0x15aeca(0x685)]);if(_0x46c08a)_0x46c08a[_0x15aeca(0x2ff)+'e']();}}catch(_0x50aa52){}try{var _0x1d42fa=document['getEl'+_0x15aeca(0x6f5)+_0x15aeca(0x56d)](_0x15aeca(0x171)+'a-sw-'+'v2-ta'+'b');if(_0x2c5091&&!_0x1d42fa&&document[_0x15aeca(0x86e)]){if(_0x66ae08['LGGtE'](_0x66ae08[_0x15aeca(0x441)],'vHSBf')){var _0x3df43b=_0x66ae08['erWYC'][_0x15aeca(0x561)]('|'),_0x579958=0x25*-0x3e+0x5*-0x7ab+0x1*0x2f4d;while(!![]){switch(_0x3df43b[_0x579958++]){case'0':_0x1b1f1b['id']=_0x66ae08['tJGjR'];continue;case'1':_0x1b1f1b['textC'+_0x15aeca(0x889)+'t']=_0x66ae08[_0x15aeca(0x634)];continue;case'2':_0x1b1f1b[_0x15aeca(0x443)][_0x15aeca(0x6c8)+'xt']=_0x66ae08['DeNQk'](_0x66ae08[_0x15aeca(0x5ab)](_0x15aeca(0x492)+'ion:f'+'ixed;'+'left:'+_0x15aeca(0x97b)+'top:1'+_0x15aeca(0x120)+_0x15aeca(0x967)+_0x15aeca(0x8ce)+_0x15aeca(0x54f)+_0x15aeca(0x667)+'rsor:'+'point'+_0x15aeca(0xa99)+_0x15aeca(0x10a)+_0x15aeca(0x8d8)+_0x15aeca(0x4b7),'backg'+_0x15aeca(0x8aa)+_0x15aeca(0x677)+'(21,1'+_0x15aeca(0x8a2)+'.9);b'+_0x15aeca(0x36e)+':1px\x20'+_0x15aeca(0x70e)+_0x15aeca(0xa6d)+_0x15aeca(0x955)+_0x15aeca(0xa62)+'77,.5'+_0x15aeca(0x1b5)+'or:')+_0x28be14,';')+('borde'+'r-rad'+_0x15aeca(0x5e6)+_0x15aeca(0xa22)+'paddi'+_0x15aeca(0x2f2)+_0x15aeca(0x183)+_0x15aeca(0x9b1)+'t:11p'+_0x15aeca(0x3cd)+'\x20ui-m'+_0x15aeca(0x764)+'ace,C'+'onsol'+_0x15aeca(0xaea)+_0x15aeca(0x40a)+'ce;');continue;case'3':var _0x1b1f1b=document[_0x15aeca(0xa21)+_0x15aeca(0x74c)+_0x15aeca(0x518)](_0x15aeca(0x46d));continue;case'4':_0x1b1f1b['oncli'+'ck']=function(){_0x14861b['sfKYT'](_0x2a62f4,![]),_0x14861b['qSBjB'](_0x22f499);};continue;case'5':document[_0x15aeca(0x86e)]['appen'+'dChil'+'d'](_0x1b1f1b);continue;}break;}}else _0x2daacd(_0x11e4d9['on'],_0x395101(_0x3def57[_0x15aeca(0xa1b)])||-0x2*0xca4+-0x28d*0x4+-0x18b*-0x17);}else _0x66ae08['TmioQ'](!_0x2c5091,_0x1d42fa)&&_0x1d42fa['remov'+'e']();}catch(_0x508d6c){}}function _0x210456(){var _0x5ac87e=_0x4a04dc;if(_0x66ae08['EZHyr'](_0x823d25))return null;var _0x766462=document[_0x5ac87e(0xa2b)+'ement'+_0x5ac87e(0x56d)](_0x5ac87e(0x171)+'a-sw-'+'v2');if(_0x766462)return _0x766462;if(!document[_0x5ac87e(0x86e)]||!document['body']['appen'+'dChil'+'d'])return null;try{var _0x23c86d=_0x66ae08[_0x5ac87e(0x3d7)][_0x5ac87e(0x561)]('|'),_0x4c6c98=-0x19ae+0xe4b+0xb63;while(!![]){switch(_0x23c86d[_0x4c6c98++]){case'0':return _0x766462;case'1':document[_0x5ac87e(0x86e)][_0x5ac87e(0x5b6)+'dChil'+'d'](_0x766462);continue;case'2':_0x766462=document['creat'+'eElem'+_0x5ac87e(0x518)](_0x5ac87e(0x46d));continue;case'3':if(!document[_0x5ac87e(0xa2b)+_0x5ac87e(0x6f5)+_0x5ac87e(0x56d)](_0x66ae08[_0x5ac87e(0xa75)])){var _0x3591e7=document['creat'+_0x5ac87e(0x74c)+_0x5ac87e(0x518)](_0x66ae08['Ctewn']);_0x3591e7['id']=_0x66ae08[_0x5ac87e(0xa75)],_0x3591e7[_0x5ac87e(0x665)+_0x5ac87e(0x889)+'t']='#saku'+_0x5ac87e(0x252)+'-v2{a'+_0x5ac87e(0xab3)+'itial'+'}',(document[_0x5ac87e(0x7e7)]||document[_0x5ac87e(0x919)+_0x5ac87e(0x33f)+_0x5ac87e(0x6f5)])['appen'+_0x5ac87e(0x3d0)+'d'](_0x3591e7);}continue;case'4':_0x766462['id']='sakur'+_0x5ac87e(0x66d)+'v2';continue;}break;}}catch(_0x1a6910){if(_0x66ae08[_0x5ac87e(0x4b3)]===_0x5ac87e(0x18c)){var _0x25ffe4=(_0x5ac87e(0x77e)+_0x5ac87e(0x8ee))['split']('|'),_0x1cb1c1=-0xb0f+0xd*0x1a1+-0x103*0xa;while(!![]){switch(_0x25ffe4[_0x1cb1c1++]){case'0':_0x25946d[_0x5ac87e(0xa1b)]=_0x66ae08['GAcDq'](_0x7fe508,_0x39c0ef);continue;case'1':var _0x39c0ef=_0x43774d();continue;case'2':_0x41adad['style']['setPr'+_0x5ac87e(0x7b7)+'y']('--p',_0x1e87f4+'%');continue;case'3':var _0x1e87f4=_0x66ae08[_0x5ac87e(0x4cf)](_0x39c0ef,_0x34b534)/(_0x10702a-_0x37a05a)*(0x623*0x3+-0x2*0x17+-0x11d7);continue;case'4':_0xf81cda[_0x5ac87e(0x665)+_0x5ac87e(0x889)+'t']=(_0x66ae08['nCFJj'](_0x5cc345,0x26cd+0x2*-0x1a8+-0x1*0x237c)?_0x39c0ef[_0x5ac87e(0x626)+'ed'](-0x124+-0x1575+0x1*0x169a):_0x66ae08['zEdVu'](_0x16eeca,_0x141c3a['round'](_0x39c0ef)))+(_0x3510cf[_0x5ac87e(0x884)+'et'][_0x5ac87e(0x9f6)]||'');continue;}break;}}else return null;}}function _0x22f499(){var _0x220554=_0x4a04dc,_0x48293f=_0x66ae08['ZLBHL'](_0x210456);if(!_0x48293f)return _0x5bf8d5;if(_0x48293f[_0x220554(0x884)+'et']['api'])return _0x48293f['api'];try{if(_0x220554(0x96c)===_0x220554(0x96c))return _0x66ae08[_0x220554(0x520)](_0x9c5a6f,_0x48293f);else{var _0x1d39db=_0x39db29('div',_0x66ae08[_0x220554(0x5ab)](_0x220554(0x461)+'rd',_0x869286?_0x66ae08[_0x220554(0x6ce)]:'')),_0x5c0281=_0x2de141(_0x66ae08['Gwpih'],_0x66ae08[_0x220554(0x798)]),_0x333490=_0x2a1449('div',_0x220554(0x461)+'rd-ti'+_0x220554(0x1f2),_0x66ae08['lxhkI'](_0x220554(0x2dc)+'ng>'+_0x52412b,_0x66ae08[_0x220554(0x9ea)]));_0x5c0281[_0x220554(0x5b6)+'dChil'+'d'](_0x333490);var _0x8bdab7=_0x66ae08['ydwnb'](_0x1d85d7,'div',_0x220554(0x327)+'ody');return _0x1d39db['appen'+'dChil'+'d'](_0x5c0281),_0x1d39db[_0x220554(0x5b6)+'dChil'+'d'](_0x8bdab7),_0x1d39db['body']=_0x8bdab7,_0x1d39db[_0x220554(0x7e7)]=_0x333490,_0x1d39db;}}catch(_0x47990d){if(_0x66ae08[_0x220554(0x11a)]==='xegwQ')return _0x48293f[_0x220554(0x884)+'et'][_0x220554(0x6a3)]='1',_0x48293f[_0x220554(0x6a3)]=_0x5bf8d5,console['warn'](_0x220554(0xac3)+_0x220554(0x16c)+'\x20pane'+'l\x20dis'+_0x220554(0x899),_0x66ae08[_0x220554(0x17c)](_0x66ae08['KUxUU'],_0x28be14),_0x47990d),_0x5bf8d5;else _0x504d64['setIt'+'em'](_0x6a852b,_0x19a8c3(_0x1bb053[_0x220554(0x206)]));}}function _0x9c5a6f(_0x51d3c7){var _0x2e61f5=_0x4a04dc,_0x300c40={'TDoKr':'snaps'+_0x2e61f5(0x87c),'sAGuX':_0x2e61f5(0x781),'iPGYx':function(_0x57e26a,_0x101321){return _0x66ae08['xiUtb'](_0x57e26a,_0x101321);},'hHZHa':function(_0x20e362,_0x65432){return _0x66ae08['iGwXz'](_0x20e362,_0x65432);},'swmjT':_0x66ae08['gtckk'],'uxAwb':function(_0x4df91e,_0x42bdd2){return _0x66ae08['rWrNk'](_0x4df91e,_0x42bdd2);},'gINoc':function(_0x3b5c3e,_0x382902,_0x295e40){var _0x448ade=_0x2e61f5;return _0x66ae08[_0x448ade(0x254)](_0x3b5c3e,_0x382902,_0x295e40);},'YAwSE':function(_0x97231f,_0x3a3c35,_0x296a61){return _0x66ae08['ExVRl'](_0x97231f,_0x3a3c35,_0x296a61);},'dZVWp':function(_0x245bcd,_0x5d9349){return _0x245bcd*_0x5d9349;},'OFtwx':_0x66ae08['ecfNw'],'KMXiA':_0x66ae08['BcTyn'],'gXTar':'MewzO','CmBWr':'tDjAu','dWBzS':_0x66ae08['PIRfh'],'JpzrM':function(_0x39bc81,_0x3e5a9c){return _0x39bc81>_0x3e5a9c;},'bCMcP':function(_0x2407d1,_0x446189){return _0x66ae08['DeNQk'](_0x2407d1,_0x446189);},'kyvqX':_0x66ae08['PzQEN'],'ngymH':_0x66ae08['nbrTN'],'uqlcU':function(_0x3f1e50,_0x466a0c){return _0x3f1e50+_0x466a0c;},'XvBkt':_0x2e61f5(0x2a8)+'vs\x20sn'+_0x2e61f5(0x4db)+_0x2e61f5(0x509),'zeYkW':function(_0x42b323,_0x1fe51e){return _0x66ae08['Zjhww'](_0x42b323,_0x1fe51e);},'IvfYY':function(_0x51b67e,_0x1ab55b){return _0x51b67e+_0x1ab55b;},'MRXQJ':function(_0x17c084,_0x314b49){return _0x17c084+_0x314b49;}};_0x51d3c7[_0x2e61f5(0x443)][_0x2e61f5(0x6c8)+'xt']=_0x66ae08[_0x2e61f5(0x57f)](_0x66ae08[_0x2e61f5(0x5ab)]('posit'+_0x2e61f5(0x86c)+_0x2e61f5(0x654)+_0x2e61f5(0x824)+_0x2e61f5(0x97b)+_0x2e61f5(0x14b)+_0x2e61f5(0x120)+_0x2e61f5(0x967)+_0x2e61f5(0x8ce)+'74830'+'00;ma'+_0x2e61f5(0xa34)+'th:mi'+_0x2e61f5(0x388)+_0x2e61f5(0x559)+'px);m'+'ax-he'+_0x2e61f5(0x29f)+'78vh;',_0x66ae08[_0x2e61f5(0x162)])+('font:'+'12px/'+_0x2e61f5(0x156)+_0x2e61f5(0x566)+'ospac'+'e,Con'+'solas'+',mono'+_0x2e61f5(0xa19)+';box-'+_0x2e61f5(0x830)+'w:0\x202'+'0px\x205'+'0px\x20-'+_0x2e61f5(0x90a)+'#000;'),_0x2e61f5(0x1e0)+'ay:fl'+_0x2e61f5(0x3a6)+'ex-di'+_0x2e61f5(0x503)+'on:co'+_0x2e61f5(0x41e)+_0x2e61f5(0x6b6)+'low:h'+_0x2e61f5(0xa1f)+';'),_0x51d3c7['inner'+_0x2e61f5(0x2c3)]=_0x66ae08['oSwob'](_0x66ae08['EKOJo'](_0x66ae08['PMeVA'](_0x66ae08[_0x2e61f5(0x8e6)](_0x66ae08['oSwob'](_0x66ae08['ocqKb'](_0x66ae08['VBtUM'](_0x66ae08['fdvqp'](_0x66ae08['qehiv'](_0x66ae08['ZlclG'](_0x66ae08[_0x2e61f5(0x7f3)](_0x66ae08[_0x2e61f5(0x31d)]+_0x66ae08[_0x2e61f5(0x57b)]+_0x28be14,'\x22>sak'+_0x2e61f5(0x222)+_0x2e61f5(0x740)+'lwarz'+_0x2e61f5(0x363))+('<span'+'\x20id=\x22'+_0x2e61f5(0x5e2)+_0x2e61f5(0x377)+'\x20styl'+_0x2e61f5(0x69d)+'lor:#'+_0x2e61f5(0x5fa)+_0x2e61f5(0x522)+'t-siz'+'e:11p'+'x;pad'+'ding:'+_0x2e61f5(0x21d)+_0x2e61f5(0x765)+'rder:'+_0x2e61f5(0x341)+_0x2e61f5(0x940)+_0x2e61f5(0x947)+_0x2e61f5(0x687)+'43,17'+_0x2e61f5(0x7f1)+');bor'+'der-r'+_0x2e61f5(0x67a)+':999p'+_0x2e61f5(0x693)+_0x2e61f5(0x8de)+_0x2e61f5(0x168))+_0x66ae08[_0x2e61f5(0x97e)],_0x66ae08['IeTZg'])+_0x28be14,_0x2e61f5(0x32b)+_0x2e61f5(0x19a)+_0x2e61f5(0x6bc)+_0x2e61f5(0x8ac)+_0x2e61f5(0x2b3)+_0x2e61f5(0x36e)+_0x2e61f5(0x1cb)+_0x2e61f5(0x27b)+'x;pad'+_0x2e61f5(0x844)+_0x2e61f5(0x2bc)+'0px;f'+'ont-w'+'eight'+_0x2e61f5(0x146)+'curso'+'r:poi'+_0x2e61f5(0x16b)+_0x2e61f5(0xa52)+'y\x20JSO'+_0x2e61f5(0x6d3)+_0x2e61f5(0x58c))+_0x66ae08[_0x2e61f5(0x352)],_0x66ae08['mMKkV']),_0x66ae08[_0x2e61f5(0x7f9)])+(_0x2e61f5(0x2c2)+_0x2e61f5(0x311)+'w2-bo'+_0x2e61f5(0x9fa)+_0x2e61f5(0x3e0)+'\x22disp'+'lay:n'+_0x2e61f5(0x1de)+'>'),_0x2e61f5(0x2c2)+'style'+_0x2e61f5(0x381)+'ding:'+_0x2e61f5(0x3d6)+_0x2e61f5(0x728)+'order'+'-bott'+_0x2e61f5(0x956)+'x\x20sol'+_0x2e61f5(0x5dc)+_0x2e61f5(0x7e5)+_0x2e61f5(0x1f7)+',177,'+_0x2e61f5(0x3ad)+'displ'+'ay:fl'+_0x2e61f5(0x5e5)+'p:8px'+_0x2e61f5(0xee)+_0x2e61f5(0x3d5)+_0x2e61f5(0x878)+'nter;'+'flex:'+_0x2e61f5(0x47c)+'uto;f'+_0x2e61f5(0xade)+_0x2e61f5(0xa8d)+_0x2e61f5(0x992)+'>'),'<butt'+'on\x20id'+'=\x22sw2'+_0x2e61f5(0x948)+_0x2e61f5(0x6c2)+_0x2e61f5(0xa68)+_0x2e61f5(0x376)+_0x2e61f5(0x8aa)+':tran'+_0x2e61f5(0x867)+'nt;bo'+_0x2e61f5(0x6b5)+'1px\x20s'+_0x2e61f5(0x940)+_0x2e61f5(0x947)+'255,1'+_0x2e61f5(0x7b2)+'7,.4)'+_0x2e61f5(0x475)+'r:#f7'+_0x2e61f5(0x822)+'borde'+'r-rad'+_0x2e61f5(0xff)+'px;pa'+_0x2e61f5(0xa41)+':4px\x20'+_0x2e61f5(0x5b9)+'curso'+_0x2e61f5(0x6be)+_0x2e61f5(0x16b)+_0x2e61f5(0x7e3)+'ed\x20of'+_0x2e61f5(0x2a0)+'tton>'),'<inpu'+_0x2e61f5(0x1d6)+'\x22sw2-'+_0x2e61f5(0x576)+_0x2e61f5(0xadd)+_0x2e61f5(0x127)+_0x2e61f5(0x68f)+_0x2e61f5(0x258)+_0x2e61f5(0x241)+'ax=\x225'+_0x2e61f5(0x91f)+_0x2e61f5(0x52e)+_0x2e61f5(0x452)+_0x2e61f5(0x8c7)+_0x2e61f5(0xaa8)+_0x2e61f5(0xa68)+_0x2e61f5(0x7a4)+':120p'+'x;acc'+_0x2e61f5(0x1bc)+'olor:')+_0x28be14,_0x66ae08['XpTEm']),_0x66ae08['CHvDE'])+(_0x2e61f5(0x348)+'on\x20id'+_0x2e61f5(0x38c)+_0x2e61f5(0x81b)+_0x2e61f5(0x7cf)+_0x2e61f5(0x65a)+'ackgr'+'ound:'+'trans'+_0x2e61f5(0x67c)+_0x2e61f5(0x900)+_0x2e61f5(0x8fe)+'px\x20so'+_0x2e61f5(0x3f6)+_0x2e61f5(0x548)+_0x2e61f5(0x45e)+'3,177'+_0x2e61f5(0x495)+'color'+_0x2e61f5(0x155)+'ef5;b'+'order'+_0x2e61f5(0x1cb)+'us:7p'+_0x2e61f5(0x39c)+'ding:'+'4px\x209'+_0x2e61f5(0xa95)+'rsor:'+'point'+_0x2e61f5(0x5cf)+_0x2e61f5(0x4ed)+'hot\x20('+_0x2e61f5(0x2a3)+'butto'+'n>'),_0x2e61f5(0xeb)+_0x2e61f5(0x64c)+_0x2e61f5(0x3ab)+'int\x22\x20'+'style'+_0x2e61f5(0x119)+'or:#8'+'d7a99'+_0x2e61f5(0x411)+_0x2e61f5(0x802)+_0x2e61f5(0x18d)+'e\x20wal'+_0x2e61f5(0x7fa)+_0x2e61f5(0x596)+_0x2e61f5(0x841)+_0x2e61f5(0xa9e)+_0x2e61f5(0xaf4)+_0x2e61f5(0xa17)+_0x2e61f5(0x67b)+'ich\x20f'+'ield\x20'+_0x2e61f5(0x75c)+_0x2e61f5(0x12a)+'/span'+'>')+_0x66ae08[_0x2e61f5(0x7f9)]+('<pre\x20'+'id=\x22s'+'w2-ou'+_0x2e61f5(0x9c2)+_0x2e61f5(0xa68)+'margi'+_0x2e61f5(0x3b6)+'addin'+_0x2e61f5(0x787)+'x\x2012p'+_0x2e61f5(0x81a)+'rflow'+':auto'+';flex'+_0x2e61f5(0x976)+_0x2e61f5(0xa4e)+'white'+_0x2e61f5(0x721)+_0x2e61f5(0x74b)+_0x2e61f5(0x584)+';word'+_0x2e61f5(0x30f)+'k:bre'+'ak-wo'+_0x2e61f5(0xa64)+_0x2e61f5(0x972)+_0x2e61f5(0x4aa)+';')+('max-h'+'eight'+_0x2e61f5(0x799)+_0x2e61f5(0x316)+_0x2e61f5(0x4e6)+_0x2e61f5(0x356)+_0x2e61f5(0x4a5)+_0x2e61f5(0x22d)+_0x2e61f5(0x7b9)+_0x2e61f5(0x45a)+'es\x20it'+'self\x20'+'when\x20'+_0x2e61f5(0x44e)+'ame\x20f'+_0x2e61f5(0x1db)+_0x2e61f5(0x8a9)+_0x2e61f5(0x718)+_0x2e61f5(0xa3a)+_0x2e61f5(0x50e)+_0x2e61f5(0x519)+_0x2e61f5(0x43f)+_0x2e61f5(0x556)+_0x2e61f5(0x6bb)+_0x2e61f5(0x52a)+',\x20Tam'+'permo'+_0x2e61f5(0x707)+'is\x20no'+_0x2e61f5(0x690)+'ectin'+_0x2e61f5(0x2fd)+'o\x20the'+'\x20cros'+_0x2e61f5(0x79c)+_0x2e61f5(0xa7b)+'ame\x20f'+_0x2e61f5(0x9a0)+_0x2e61f5(0xa11)+'>')+('</div'+'>');var _0x4b0677=_0x51d3c7['query'+_0x2e61f5(0x2f0)+'tor'](_0x66ae08[_0x2e61f5(0x83e)]),_0xc1dcc=_0x51d3c7['query'+_0x2e61f5(0x2f0)+'tor']('#sw2-'+_0x2e61f5(0x778)),_0x2bb58b=_0x51d3c7[_0x2e61f5(0x591)+_0x2e61f5(0x2f0)+'tor'](_0x66ae08[_0x2e61f5(0x4da)]),_0x4a3e5b=_0x51d3c7[_0x2e61f5(0x591)+'Selec'+_0x2e61f5(0xa29)]('#sw2-'+_0x2e61f5(0x2b9)),_0x56d62f=_0x51d3c7['query'+_0x2e61f5(0x2f0)+_0x2e61f5(0xa29)](_0x2e61f5(0x921)+'x'),_0x41af85=_0x51d3c7['query'+'Selec'+'tor'](_0x2e61f5(0x921)+_0x2e61f5(0x70f)+'e'),_0x1e9904=_0x51d3c7['query'+_0x2e61f5(0x2f0)+_0x2e61f5(0xa29)](_0x2e61f5(0x921)+_0x2e61f5(0x86e)),_0x53d720=_0x51d3c7['query'+_0x2e61f5(0x2f0)+'tor'](_0x66ae08[_0x2e61f5(0x3a3)]),_0x28832d=_0x51d3c7['query'+_0x2e61f5(0x2f0)+'tor']('#sw2-'+_0x2e61f5(0x7e0)),_0x3032d3=_0x51d3c7[_0x2e61f5(0x591)+'Selec'+_0x2e61f5(0xa29)]('#sw2-'+'facto'+'r'),_0x225862=_0x51d3c7[_0x2e61f5(0x591)+_0x2e61f5(0x2f0)+_0x2e61f5(0xa29)](_0x2e61f5(0x921)+'facto'+_0x2e61f5(0xa07)+'l'),_0x56b48d=_0x51d3c7['query'+'Selec'+'tor'](_0x2e61f5(0x921)+_0x2e61f5(0x3bd)),_0x4f3827=null,_0x414231=![];function _0x141855(){var _0x2a9a67=_0x2e61f5;if(_0x1e9904)_0x1e9904[_0x2a9a67(0x443)][_0x2a9a67(0x1e0)+'ay']=_0x414231?'':_0x66ae08['xpkCN'];if(_0x41af85)_0x41af85[_0x2a9a67(0x665)+'onten'+'t']=_0x414231?_0x66ae08['IxetW']:_0x66ae08[_0x2a9a67(0xfa)];_0x51d3c7[_0x2a9a67(0x443)]['width']=_0x414231?_0x2a9a67(0x702)+'2vw,6'+'20px)':'auto',_0x51d3c7[_0x2a9a67(0x443)]['backg'+_0x2a9a67(0x8aa)]=_0x414231?_0x2a9a67(0x969)+'1d':_0x66ae08[_0x2a9a67(0x5b5)];}if(_0x41af85)_0x41af85['oncli'+'ck']=function(){_0x414231=!_0x414231,_0x141855();};_0x141855();if(_0x56d62f)_0x56d62f['oncli'+'ck']=function(){_0x2a62f4(!![]);};if(_0x53d720)_0x53d720[_0x2e61f5(0xa94)+'ck']=function(){_0x4cae58(_0x300c40['TDoKr']);};var _0x3b0d15=![];function _0x2ea53f(){var _0xcb4c44=_0x2e61f5;_0x4cae58(_0xcb4c44(0x7e0),{'on':_0x3b0d15,'factor':parseFloat(_0x3032d3[_0xcb4c44(0xa1b)])||0xef5+-0x29b*-0xe+-0xe3*0x3a});}if(_0x28832d)_0x28832d['oncli'+'ck']=function(){var _0x31ad66=_0x2e61f5;_0x3b0d15=!_0x3b0d15,_0x28832d[_0x31ad66(0x665)+_0x31ad66(0x889)+'t']=_0x3b0d15?_0x66ae08[_0x31ad66(0x7b8)]:_0x31ad66(0x913)+_0x31ad66(0x246),_0x28832d[_0x31ad66(0x443)]['backg'+_0x31ad66(0x8aa)]=_0x3b0d15?_0x28be14:_0x66ae08[_0x31ad66(0x3d8)],_0x28832d[_0x31ad66(0x443)]['color']=_0x3b0d15?_0x66ae08[_0x31ad66(0x134)]:_0x31ad66(0x424)+'f5',_0x66ae08[_0x31ad66(0x763)](_0x2ea53f);};if(_0x3032d3)_0x3032d3['oninp'+'ut']=function(){var _0x1d5d2c=_0x2e61f5;if(_0x1d5d2c(0x57a)!=='tqyoI'){if(_0x225862)_0x225862[_0x1d5d2c(0x665)+'onten'+'t']=(parseFloat(_0x3032d3[_0x1d5d2c(0xa1b)])||-0x1122+0x4b+0x1c*0x9a)['toFix'+'ed'](-0x1835*-0x1+-0xb3*0x14+-0x4*0x28e)+'x';_0x2ea53f();}else{var _0x5582e2=_0x918634[_0x5098c1][_0x1d5d2c(0x78a)+'s']['join'](',')+_0x300c40[_0x1d5d2c(0x158)]+(_0x481581[_0x4396dd][_0x1d5d2c(0x483)+'nType']||_0x1d5d2c(0x310));_0x442326[_0x5582e2]=_0x300c40['iPGYx'](_0x53d962[_0x5582e2]||0x22f7+-0x14f4+-0xe03,-0xae7+0x1603+-0xb1b);}};if(_0x4a3e5b)_0x4a3e5b[_0x2e61f5(0xa94)+'ck']=function(){var _0x2f8269=_0x2e61f5,_0x187120={'pZKJA':_0x2f8269(0x4ce)+'rea','BGkjJ':function(_0x10d051){var _0x1b275b=_0x2f8269;return _0x66ae08[_0x1b275b(0x506)](_0x10d051);}},_0x4fcb93=_0x66ae08[_0x2f8269(0x1e6)](_0x66ae08[_0x2f8269(0x964)](_0x42cf5e+'\x0a',_0x4f3827?JSON['strin'+_0x2f8269(0x58f)](_0x4f3827,null,0x26bf+0x90+-0x274e):'')+'\x0a',_0x58e0c2),_0x21cfa9=function(){var _0x186768=_0x2f8269;if(_0x4a3e5b)_0x4a3e5b[_0x186768(0x665)+'onten'+'t']=_0x186768(0x746)+'d';};if(navigator[_0x2f8269(0x618)+_0x2f8269(0x1b0)]&&navigator[_0x2f8269(0x618)+'oard'][_0x2f8269(0x368)+_0x2f8269(0x838)])navigator[_0x2f8269(0x618)+_0x2f8269(0x1b0)][_0x2f8269(0x368)+_0x2f8269(0x838)](_0x4fcb93)['then'](_0x21cfa9,function(){_0x4381c8();});else _0x66ae08['OPIvG'](_0x4381c8);function _0x4381c8(){var _0x324399=_0x2f8269,_0x2c84b5=document[_0x324399(0xa21)+_0x324399(0x74c)+_0x324399(0x518)](_0x187120[_0x324399(0x965)]);_0x2c84b5['value']=_0x4fcb93;if(!document['body'])return;document['body'][_0x324399(0x5b6)+'dChil'+'d'](_0x2c84b5),_0x2c84b5[_0x324399(0x6f8)+'t']();try{document[_0x324399(0xa24)+'omman'+'d'](_0x324399(0x2b9)),_0x187120['BGkjJ'](_0x21cfa9);}catch(_0x2478d4){}_0x2c84b5[_0x324399(0x2ff)+'e']();}};_0x66ae08[_0x2e61f5(0x7aa)](setTimeout,function(){var _0x35220b=_0x2e61f5;if(_0x4f3827)return;if(!_0x4b0677||!_0x2bb58b)return;_0x4b0677[_0x35220b(0x665)+'onten'+'t']=_0x66ae08[_0x35220b(0x971)],_0x4b0677[_0x35220b(0x443)][_0x35220b(0x6bc)]=_0x35220b(0x5c6)+'c7',_0x2bb58b['textC'+_0x35220b(0x889)+'t']=_0x66ae08[_0x35220b(0x5ab)](_0x66ae08['lxhkI'](_0x66ae08['lNrDY'](_0x35220b(0x204)+'ame\x20f'+_0x35220b(0x1db)+_0x35220b(0x1a9)+_0x35220b(0x592)+_0x35220b(0x751)+_0x35220b(0x99d)+'e\x20rep'+'ort.\x0a'+'\x0a'+('This\x20'+_0x35220b(0x832)+'\x20prov'+'es\x20th'+_0x35220b(0x831)+'rscri'+_0x35220b(0x2c1)+_0x35220b(0x317)+_0x35220b(0x12b)+_0x35220b(0x160)+_0x35220b(0x92b)+_0x35220b(0x9bf)+'\x20the\x20'+_0x35220b(0x1ad)+'l,\x0a')+_0x66ae08[_0x35220b(0x3c7)],_0x35220b(0x23f)+_0x35220b(0x727)+'rmonk'+_0x35220b(0x287)+'\x20not\x20'+'injec'+_0x35220b(0x937)+_0x35220b(0x4f6)+'the\x20c'+_0x35220b(0x39f)+_0x35220b(0x4cc)+'n\x20ifr'+'ame.\x0a'),'\x20\x202.\x20'+'The\x20p'+_0x35220b(0x29a)+_0x35220b(0xa5d)+'t\x20bee'+_0x35220b(0x270)+_0x35220b(0x25a)+'\x20sinc'+_0x35220b(0x345)+'talli'+_0x35220b(0x712))+_0x66ae08[_0x35220b(0x326)],_0x35220b(0x5f3)+'insta'+'lled\x20'+'—\x20two'+_0x35220b(0x864)+_0x35220b(0x3cf)+'\x20UWMK'+_0x35220b(0x50c)+_0x35220b(0x447)+'h\x20Web'+_0x35220b(0x5e7)+_0x35220b(0x75d)+_0x35220b(0x1f0)+_0x35220b(0x338)+_0x35220b(0x2df))+_0x66ae08[_0x35220b(0x567)];},0x1a764+-0x24a2+-0x1d6*0x53);var _0x2a94cc={'set':function(_0x3e7831){var _0x58e388=_0x2e61f5,_0x2d4abe={'PBwEr':function(_0x3d6be5,_0x5e8c49){return _0x3d6be5/_0x5e8c49;},'fDOrZ':function(_0x41d106,_0x61927f){return _0x41d106===_0x61927f;},'LuPFm':_0x58e388(0x597)+'r','bcOom':function(_0x25ea7c,_0x537d61){return _0x300c40['dZVWp'](_0x25ea7c,_0x537d61);},'hhIhP':function(_0x4ccbde,_0x53d60d){return _0x4ccbde+_0x53d60d;},'oSaQo':function(_0x3ffe00,_0x2d48ee){return _0x3ffe00+_0x2d48ee;}};_0x4f3827=_0x3e7831;if(_0x4a3e5b)_0x4a3e5b[_0x58e388(0x443)]['displ'+'ay']='';if(_0xc1dcc){if('dMGDN'===_0x300c40[_0x58e388(0x528)]){var _0x402bdf=_0x566409[_0x310793],_0x17b3c5=typeof _0x329f7c[_0x402bdf];_0x8600a9[_0x402bdf]=_0x300c40['hHZHa'](_0x17b3c5,'undef'+_0x58e388(0x625))?_0x58e388(0x427)+'ined':_0x17b3c5;}else{_0xc1dcc['textC'+'onten'+'t']='v'+(_0x3e7831['versi'+'on']||'?');var _0x6c5df5=_0x4eebbe,_0x48cdf8=_0x3e7831['versi'+'on']||'';_0xc1dcc['style']['color']=_0x48cdf8===_0x6c5df5?_0x28be14:_0x58e388(0x4d4)+'74',_0xc1dcc[_0x58e388(0x443)]['borde'+_0x58e388(0x358)+'r']=_0x48cdf8===_0x6c5df5?_0x58e388(0x947)+'255,1'+'43,17'+_0x58e388(0x7f1)+')':_0x300c40[_0x58e388(0x289)];}}var _0x37f890=_0x3e7831['insta'+'nces']&&_0x3e7831[_0x58e388(0x8dd)+_0x58e388(0xa49)][_0x58e388(0x1af)+'ntrol'+_0x58e388(0x24b)],_0x1b2911=Math['round']((_0x3e7831['elaps'+'edMs']||-0xc*0x4f+0x59*0x23+-0x877)/(-0x1d*0x15+0x1fe1+-0x1998));if(_0x4b0677){if(_0x300c40[_0x58e388(0x82f)]===_0x58e388(0x97f)){var _0x583293,_0x20f882;if(_0x37f890&&_0x3e7831['surve'+'y']&&_0x3e7831[_0x58e388(0x779)+'y']['FPSco'+'ntrol'+_0x58e388(0x24b)]){if(_0x58e388(0x98f)!==_0x300c40[_0x58e388(0x783)])_0x583293=_0x300c40['iPGYx'](_0x300c40['iPGYx']('LIVE\x20'+'·\x20'+Object['keys'](_0x3e7831['insta'+_0x58e388(0xa49)])[_0x58e388(0x320)+'h'],_0x300c40[_0x58e388(0x84e)]),_0x1b2911)+'s',_0x20f882=_0x58e388(0x426)+'a8';else{var _0x5d9c85={'jVbmx':function(_0x55aeaf,_0x2b1fd1){var _0xe29b79=_0x58e388;return _0x2d4abe[_0xe29b79(0xa5a)](_0x55aeaf,_0x2b1fd1);}};if(_0xa32d15[_0x240a05]['o']===_0x7899da){if(_0x23d797==='v3'){var _0x5d01b9=_0x274cb8[_0x53ea20][_0x58e388(0x4d0)]||[_0x273ee3[_0x1b0c24]['v'],0x19d9+0x35*0x83+-0x8*0x69f,-0x2066+0xbbd+-0x29*-0x81];return _0x5d01b9[_0x58e388(0x805)](function(_0x5e6c9a){var _0x528c0e=_0x58e388;return _0x5d9c85[_0x528c0e(0x2c9)](_0x91dc8a[_0x528c0e(0x8aa)](_0x5e6c9a*(-0x1b38+0x12b6+0x8e6)),-0xb*-0x2a5+-0x1215+-0xa9e);})[_0x58e388(0x1ed)]('\x20\x20');}var _0x30293d=_0x41d422[_0x426cb0]['v'];return _0x2d4abe['fDOrZ'](typeof _0x30293d,_0x2d4abe['LuPFm'])?_0x2d4abe[_0x58e388(0xa5a)](_0x4ab269['round'](_0x2d4abe['bcOom'](_0x30293d,0xf01+-0x1*0x8ad+-0x26c)),0x1b30+0x1*0x151+-0x1*0x1899):_0x42d0a8(_0x30293d);}}}else{if(_0x300c40[_0x58e388(0x121)](_0x3e7831[_0x58e388(0x55c)+_0x58e388(0x5f8)+'ed'],-0x278*-0x3+-0x1*-0x89b+-0x1003))_0x583293=_0x300c40[_0x58e388(0x7f6)](_0x300c40['bCMcP'](_0x300c40[_0x58e388(0x989)],_0x1b2911),'s'),_0x20f882='#ffd4'+'8a';else{if(_0x3e7831['scrip'+'tData'])_0x583293=_0x300c40[_0x58e388(0x7f6)](_0x300c40['bCMcP'](_0x58e388(0x163)+'ata\x20r'+_0x58e388(0x5e3)+'·\x20',_0x1b2911),'s'),_0x20f882='#ffd4'+'8a';else{if(_0x300c40[_0x58e388(0x89f)]===_0x58e388(0x1f8))_0x583293=_0x300c40['uqlcU'](_0x300c40[_0x58e388(0x5bb)](_0x3e7831['arm']&&_0x3e7831[_0x58e388(0x153)]['ok']?_0x58e388(0xa7d)+'\x20·\x20':'armin'+_0x58e388(0xa30),_0x1b2911),'s'),_0x20f882=_0x58e388(0x776)+'8a';else{var _0x1b8389=_0x300c40[_0x58e388(0x65d)][_0x58e388(0x561)]('|'),_0x4c5157=-0x19f*0xa+-0x25fd+0x3633;while(!![]){switch(_0x1b8389[_0x4c5157++]){case'0':var _0x42404d=_0x7a4c13[_0x105dc2[_0x92092]];continue;case'1':_0x40f2d4['isLoc'+'al']=!!_0x3af2db&&_0x300c40[_0x58e388(0x438)](_0x40f2d4[_0x58e388(0x3af)]['fps'],'0x'+_0x4fe5ca['toStr'+_0x58e388(0x7e9)](0x1*-0x160f+-0x1*0x48d+0x1aac*0x1));continue;case'2':_0x40f2d4[_0x58e388(0x9f0)+'SeenM'+'s']=_0x42404d['first'+_0x58e388(0x390)]-_0x30e5ce;continue;case'3':if(_0x40f2d4[_0x58e388(0x3af)][_0x58e388(0xa8a)+'h']){var _0x157d9d=_0x300c40[_0x58e388(0x23c)](_0x3b3ad9,_0x40f2d4[_0x58e388(0x3af)][_0x58e388(0xa8a)+'h'],0x1be8+0x1968*0x1+-0x3540);_0x40f2d4[_0x58e388(0xa8a)+'h']=_0x96b07b(_0x157d9d,_0x58e388(0xa13)+'hScri'+'pt','obfI');}continue;case'4':_0x40f2d4[_0x58e388(0x6d9)]=_0x42404d[_0x58e388(0x6d9)];continue;case'5':_0x1aa0e5['playe'+'rs']['push'](_0x40f2d4);continue;case'6':var _0x40f2d4=_0x300c40[_0x58e388(0x6f3)](_0x4b5d82,_0x58e388(0x7bf)+_0x58e388(0x891)+_0x58e388(0x4d2)+'nc',_0x42404d['ptr']);continue;}break;}}}}}_0x4b0677['textC'+_0x58e388(0x889)+'t']=_0x583293,_0x4b0677['style'][_0x58e388(0x6bc)]=_0x20f882;}else _0x381642=_0x2d4abe['hhIhP'](_0x442214,_0x46b6ab/_0x2fa545*(_0xf58d6f-(0xc5d+0x16cd+-0x2324))),_0x5e0cc0=_0x2d4abe['oSaQo'](_0x4f14fe,_0x2d4abe[_0x58e388(0xa5a)](_0x16aadc,_0x735f2e)*(_0x415209-(-0x21f*0x12+-0x788+0xb6f*0x4)));}_0x56b48d&&(_0x56b48d['textC'+_0x58e388(0x889)+'t']=_0x3e7831['diff']&&_0x3e7831['diff'][_0x58e388(0x320)+'h']?_0x300c40[_0x58e388(0x815)]+_0x3e7831['diff']['join'](',\x20'):_0x58e388(0x670)+'ice\x20w'+_0x58e388(0x3b9)+_0x58e388(0x445)+'ng\x20/\x20'+_0x58e388(0x50b)+'ting\x20'+'/\x20jum'+'ping\x20'+'marks'+_0x58e388(0x2cd)+'h\x20fie'+'ld\x20is'+_0x58e388(0x2cd)+'h.');if(_0x3e7831['speed']&&_0x28832d){if(_0x58e388(0x35f)!==_0x58e388(0xa79)){_0x3b0d15=!!_0x3e7831[_0x58e388(0x7e0)]['on'],_0x28832d['textC'+_0x58e388(0x889)+'t']=_0x3b0d15?_0x58e388(0x913)+'\x20ON':_0x58e388(0x913)+'\x20off',_0x28832d[_0x58e388(0x443)]['backg'+_0x58e388(0x8aa)]=_0x3b0d15?_0x28be14:'trans'+_0x58e388(0x67c)+'t',_0x28832d[_0x58e388(0x443)][_0x58e388(0x6bc)]=_0x3b0d15?_0x58e388(0x51e)+'1b':'#f7ee'+'f5';if(_0x225862&&_0x3e7831[_0x58e388(0x7e0)]['facto'+'r']){if('yLejU'!==_0x58e388(0x37f))_0x225862['textC'+_0x58e388(0x889)+'t']=_0x300c40[_0x58e388(0x50d)](Number(_0x3e7831[_0x58e388(0x7e0)][_0x58e388(0x576)+'r'])[_0x58e388(0x626)+'ed'](0x8cb+-0x1135+0x86b),'x');else try{if(_0x59e57c[_0x5073da][_0x58e388(0x7d5)+_0x58e388(0x271)+'dow'])_0x14d99b[_0x19f145]['conte'+_0x58e388(0x271)+'dow'][_0x58e388(0x5a1)+_0x58e388(0x3d1)+'e'](_0x5a564d,'*');}catch(_0x1308bf){}}}else try{if(_0xd4fa84[_0x265134][_0x58e388(0x7d5)+_0x58e388(0x271)+_0x58e388(0x8bb)])_0x224cee[_0x186a46]['conte'+'ntWin'+'dow'][_0x58e388(0x5a1)+'essag'+'e'](_0x5eabb5,'*');}catch(_0x39d2a7){}}if(_0x2bb58b)try{_0x2bb58b['textC'+_0x58e388(0x889)+'t']=_0xd32f4a(_0x3e7831);}catch(_0x185791){_0x2bb58b['textC'+_0x58e388(0x889)+'t']=JSON['strin'+_0x58e388(0x58f)](_0x3e7831,null,-0x6d*-0x1d+-0x2566+-0x3*-0x85a);}console[_0x58e388(0x60d)]('%c[sa'+_0x58e388(0x16c)+'\x20Skil'+'lWarz'+'\x20repo'+'rt',_0x300c40[_0x58e388(0xa20)](_0x300c40[_0x58e388(0x8b2)](_0x58e388(0x6bc)+':',_0x28be14),_0x58e388(0xa77)+'-weig'+_0x58e388(0x86d)+'0'),_0x3e7831),console[_0x58e388(0x60d)](_0x42cf5e+'\x0a'+JSON['strin'+_0x58e388(0x58f)](_0x3e7831,null,0x1aa6+-0x805+-0x12a0)+'\x0a'+_0x58e0c2);}};return _0x51d3c7[_0x2e61f5(0x884)+'et'][_0x2e61f5(0x6a3)]='1',_0x51d3c7['api']=_0x2a94cc,_0x2a94cc;}function _0xd32f4a(_0x3e49b0){var _0x20785f=_0x4a04dc,_0xfc3026=[];_0xfc3026[_0x20785f(0x3f5)](_0x66ae08[_0x20785f(0x7f3)](_0x66ae08[_0x20785f(0x3c6)]+(_0x3e49b0['host']||'?')+'\x20\x20('+Math['round'](_0x66ae08[_0x20785f(0x2e2)](_0x3e49b0[_0x20785f(0x640)+_0x20785f(0x482)]||-0xe2+-0x4*0x710+-0xb*-0x2a6,0xab*-0x1+0xe3*0xa+-0x1*0x44b)),'s)')),_0xfc3026['push'](_0x66ae08[_0x20785f(0x5c8)](_0x66ae08[_0x20785f(0x5c8)](_0x20785f(0xa76)+_0x20785f(0x639)+(_0x3e49b0['uwmk']?'yes':'no'),_0x66ae08['sMYmW'])+(_0x3e49b0[_0x20785f(0x2cf)+_0x20785f(0x3c1)+_0x20785f(0x1e1)]?_0x20785f(0x978):'no'),_0x66ae08['htjuY'])+(_0x66ae08[_0x20785f(0x85d)](_0x3e49b0[_0x20785f(0x2fa)+'ount'],null)?_0x3e49b0[_0x20785f(0x2fa)+_0x20785f(0x902)]:'?')),_0xfc3026['push'](_0x66ae08[_0x20785f(0x1d2)](_0x20785f(0x55c)+_0x20785f(0x639),_0x3e49b0[_0x20785f(0x55c)+_0x20785f(0x5f8)+'ed'])+'/'+_0x3e49b0['hooks'+_0x20785f(0x8dc)]+(_0x20785f(0xa18)+_0x20785f(0x54b))),_0xfc3026[_0x20785f(0x3f5)]('');var _0x318007=_0x3e49b0[_0x20785f(0x8dd)+_0x20785f(0xa49)]||{},_0x14a99b=Object[_0x20785f(0x70c)](_0x318007);!_0x14a99b[_0x20785f(0x320)+'h']&&(_0xfc3026['push']('no\x20li'+_0x20785f(0x993)+'jects'+'\x20capt'+_0x20785f(0x888)+'yet.'),_0xfc3026[_0x20785f(0x3f5)](''),_0xfc3026[_0x20785f(0x3f5)]('The\x20h'+'ooks\x20'+_0x20785f(0x1a1)+'on\x20th'+'e\x20gam'+_0x20785f(0x3da)+'wn\x20Up'+_0x20785f(0x198)+_0x20785f(0x931)+'thing'+'\x20capt'+_0x20785f(0x888)+_0x20785f(0x10e)),_0xfc3026['push'](_0x66ae08[_0x20785f(0x286)]));for(var _0x4a7518=-0x2377+0x1856+0x197*0x7;_0x66ae08[_0x20785f(0x4df)](_0x4a7518,_0x14a99b['lengt'+'h']);_0x4a7518++){var _0x35029b=_0x14a99b[_0x4a7518];_0xfc3026[_0x20785f(0x3f5)](_0x66ae08[_0x20785f(0x836)](_0x35029b+'\x20@\x20',_0x318007[_0x35029b]));}_0xfc3026['push']('');var _0x180cb8=_0x3e49b0['surve'+'y']||{},_0x541f47=Object[_0x20785f(0x70c)](_0x180cb8);for(var _0x292287=-0x1bef+-0x2*0x86c+0x2cc7;_0x66ae08['gPgeM'](_0x292287,_0x541f47[_0x20785f(0x320)+'h']);_0x292287++){if(_0x66ae08[_0x20785f(0x303)](_0x66ae08['shKlr'],_0x20785f(0x90c))){var _0x5ca2ed=_0x541f47[_0x292287],_0x18d362=_0x180cb8[_0x5ca2ed];if(!_0x18d362||!_0x18d362[_0x20785f(0x320)+'h'])continue;_0xfc3026[_0x20785f(0x3f5)](_0x66ae08['AUQpT'](_0x66ae08[_0x20785f(0xa3f)],_0x5ca2ed)+'\x20'+new Array(Math['max'](-0x3*0x4bd+0x2270+0x1438*-0x1,_0x66ae08[_0x20785f(0x18f)](-0x47*-0x47+0x4*-0x87+-0x1173,_0x5ca2ed[_0x20785f(0x320)+'h'])))['join']('─')),_0xfc3026['push'](_0x20785f(0xaca)+_0x20785f(0x809)+_0x20785f(0x353)+_0x20785f(0x5f3)+'\x20\x20\x20va'+_0x20785f(0x47f)+'\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20'+_0x20785f(0x79b));for(var _0x25cca9=-0xda*0x14+0x1ce6+0x2*-0x5ef;_0x66ae08['KVILc'](_0x25cca9,_0x18d362[_0x20785f(0x320)+'h']);_0x25cca9++){var _0x3b1aa6=_0x18d362[_0x25cca9],_0x2e140d=typeof _0x3b1aa6['v']===_0x66ae08[_0x20785f(0x1c3)]?_0x66ae08[_0x20785f(0x2e2)](Math['round'](_0x66ae08[_0x20785f(0x7e4)](_0x3b1aa6['v'],0x1*0x15cd+0x2*-0x12ce+0x13b7)),0xedb+-0x1f97*0x1+0x14a4):_0x3b1aa6['v'];_0xfc3026[_0x20785f(0x3f5)](_0x66ae08[_0x20785f(0x1e6)](_0x66ae08[_0x20785f(0x3e8)](_0x66ae08['VBtUM']('\x20\x20'+('0x'+_0x3b1aa6['o']['toStr'+_0x20785f(0x7e9)](0x906+-0xe*-0x54+0x5*-0x2b6))[_0x20785f(0x3bc)+'d'](-0x1f47+0x9dd+0x1572)+'\x20',_0x3b1aa6['k'][_0x20785f(0x3bc)+'d'](0x92+-0x1*0x1abf+-0x68e*-0x4)),'\x20')+_0x66ae08['xVumN'](String,_0x2e140d)['padEn'+'d'](0x211*0xb+-0xf57+-0x754)+'\x20',_0x3b1aa6['raw']||''));}_0xfc3026[_0x20785f(0x3f5)]('');}else{if(_0x5e904d&&_0x4e7629[_0x20785f(0x595)+'ropag'+'ation'])_0x3fe31c[_0x20785f(0x595)+_0x20785f(0x239)+'ation']();_0x66ae08['GAcDq'](_0x327e01,!_0x2ea198[_0x20785f(0x2d9)]);}}if(_0x3e49b0[_0x20785f(0x7be)+'ngs']&&_0x3e49b0[_0x20785f(0x7be)+_0x20785f(0xa14)][_0x20785f(0x320)+'h']){_0xfc3026['push'](_0x20785f(0x7be)+_0x20785f(0xa14));for(var _0x2b1579=0x303*0x3+-0x1f76+0x166d;_0x2b1579<_0x3e49b0['warni'+_0x20785f(0xa14)][_0x20785f(0x320)+'h'];_0x2b1579++)_0xfc3026[_0x20785f(0x3f5)](_0x20785f(0x131)+_0x3e49b0['warni'+'ngs'][_0x2b1579]);}return _0xfc3026[_0x20785f(0x1ed)]('\x0a');}window[_0x4a04dc(0x295)+'entLi'+'stene'+'r'](_0x66ae08['wewEy'],function(_0x45833e){var _0x42c322=_0x4a04dc,_0x1bfcc3=_0x45833e['data'];if(!_0x1bfcc3||_0x1bfcc3['__sak'+_0x42c322(0x77a)]!==_0x44b7bc)return;try{if(_0x1bfcc3[_0x42c322(0x747)]===_0x66ae08[_0x42c322(0x4d7)]){_0x22f499()[_0x42c322(0xa44)]({'host':_0x1bfcc3['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x1bfcc3[_0x42c322(0x747)]===_0x42c322(0x9af)+'t')_0x22f499()['set'](_0x1bfcc3[_0x42c322(0x9af)+'t']);}catch(_0x5e095d){console['warn'](_0x66ae08[_0x42c322(0x73a)],_0x66ae08[_0x42c322(0x1d2)](_0x66ae08[_0x42c322(0xa8b)],_0x28be14),_0x5e095d);}});function _0x563fe4(){var _0x77fbb0=_0x4a04dc;if(_0x66ae08['iNJIg'](_0x823d25)){_0x66ae08['FyFaW'](_0x2a62f4,!![]);return;}_0x66ae08[_0x77fbb0(0xaae)](_0x22f499);}if(document[_0x4a04dc(0x86e)])_0x66ae08['hQBEM'](_0x563fe4);else document[_0x4a04dc(0x295)+_0x4a04dc(0x7ec)+_0x4a04dc(0x825)+'r'](_0x4a04dc(0x240)+_0x4a04dc(0x463)+_0x4a04dc(0x535)+'d',_0x563fe4,{'once':!![]});return;}window[_0x4a04dc(0x28b)+_0x4a04dc(0x4eb)+_0x4a04dc(0x679)]=window[_0x4a04dc(0x28b)+_0x4a04dc(0x4eb)+_0x4a04dc(0x679)]||{'at':Date[_0x4a04dc(0xf1)]()};function _0x577778(_0x11ec73,_0x209e56){var _0x1d19d7=_0x4a04dc,_0x502598={'qiRil':_0x1d19d7(0x443),'CZIWD':'#saku'+_0x1d19d7(0x252)+_0x1d19d7(0x514)+_0x1d19d7(0xab3)+'itial'+'}'},_0x39bfa0={'__sakura':_0x44b7bc,'kind':_0x11ec73};if(_0x209e56){for(var _0x2ffba4 in _0x209e56)_0x39bfa0[_0x2ffba4]=_0x209e56[_0x2ffba4];}try{if(_0x1d19d7(0x83c)!=='cBfuq'){if(window['paren'+'t']&&_0x66ae08['cSMRv'](window['paren'+'t'],window))window[_0x1d19d7(0x67c)+'t']['postM'+_0x1d19d7(0x3d1)+'e'](_0x39bfa0,'*');}else{var _0x4a04ad=_0x197966[_0x1d19d7(0xa21)+'eElem'+_0x1d19d7(0x518)](_0x502598[_0x1d19d7(0x3a7)]);_0x4a04ad['id']=_0x1d19d7(0x171)+_0x1d19d7(0x66d)+_0x1d19d7(0x4ab)+'s',_0x4a04ad[_0x1d19d7(0x665)+_0x1d19d7(0x889)+'t']=_0x502598[_0x1d19d7(0x337)],(_0x1ad7de['head']||_0x35c800[_0x1d19d7(0x919)+_0x1d19d7(0x33f)+_0x1d19d7(0x6f5)])['appen'+_0x1d19d7(0x3d0)+'d'](_0x4a04ad);}}catch(_0x160764){}try{if(window['top']&&window[_0x1d19d7(0x35a)]!==window)window[_0x1d19d7(0x35a)][_0x1d19d7(0x5a1)+_0x1d19d7(0x3d1)+'e'](_0x39bfa0,'*');}catch(_0x51f8f9){}}console['log'](_0x66ae08['NUqXk'](_0x4a04dc(0xac3)+'kura]'+_0x4a04dc(0x65f)+_0x4a04dc(0x7c2)+'\x20ACTI'+'VE\x20v',_0x4eebbe),_0x66ae08[_0x4a04dc(0x318)]('color'+':'+_0x28be14,_0x4a04dc(0xa77)+'-weig'+_0x4a04dc(0x86d)+'0;fon'+_0x4a04dc(0x14f)+_0x4a04dc(0x147)+'x'),{'host':_0x2e0d56,'href':location['href'],'version':_0x4eebbe}),_0x66ae08[_0x4a04dc(0x465)](_0x577778,_0x4a04dc(0x4d9),{'host':_0x2e0d56,'role':_0x3dd1cd});var _0x598176=window[_0x4a04dc(0x28b)+'URA_S'+'W__']&&window[_0x4a04dc(0x28b)+_0x4a04dc(0x4eb)+_0x4a04dc(0x679)]['at']||Date[_0x4a04dc(0xf1)]();window[_0x4a04dc(0x295)+_0x4a04dc(0x7ec)+'stene'+'r']('messa'+'ge',function(_0x19b45f){var _0xdab3bd=_0x4a04dc;try{var _0x2707a2=_0x19b45f&&_0x19b45f['data'];if(!_0x2707a2||_0x66ae08[_0xdab3bd(0x469)](_0x2707a2[_0xdab3bd(0x170)+'ura'],_0x44b7bc)||_0x2707a2['kind']!==_0xdab3bd(0xa1a))return;_0x1eff61(_0x2707a2['cmd'],_0x2707a2[_0xdab3bd(0x840)]);}catch(_0x3344af){}});try{var _0xc14cb1=new BroadcastChannel(_0x4a04dc(0x171)+'a-sw');_0xc14cb1['onmes'+'sage']=function(_0xb1d322){var _0x1e3192=_0x4a04dc,_0x5372ce=_0xb1d322[_0x1e3192(0x3be)];if(_0x5372ce&&_0x5372ce['__sak'+_0x1e3192(0x77a)]===_0x44b7bc&&_0x5372ce['kind']==='cmd')_0x1eff61(_0x5372ce['cmd'],_0x5372ce['arg']);};}catch(_0x3bac89){}var _0x1ed555=[];(function _0x8a86d2(){var _0x1d538a=_0x4a04dc,_0x3247d6={'ijAJX':_0x66ae08[_0x1d538a(0x685)],'YsrRq':function(_0x8199bc,_0x54169b){var _0x40df70=_0x1d538a;return _0x66ae08[_0x40df70(0x9cf)](_0x8199bc,_0x54169b);},'BjtpT':_0x1d538a(0x9cd),'ZfDoQ':_0x1d538a(0x761),'zKvsz':function(_0x2326a5,_0x1a998c){return _0x2326a5<_0x1a998c;},'sCZfj':_0x66ae08[_0x1d538a(0x8c3)],'iWwoB':_0x66ae08[_0x1d538a(0x513)],'zuGiY':function(_0x207349,_0x472eb9){return _0x207349!==_0x472eb9;},'kIUmu':function(_0x464739,_0xd4cfa3,_0x4cba52){return _0x464739(_0xd4cfa3,_0x4cba52);}};if(_0x66ae08['cSMRv'](_0x66ae08[_0x1d538a(0xa6e)],_0x1d538a(0x6dd))){var _0x2f6c53=[_0x1d538a(0x60d),_0x1d538a(0x5dd),_0x1d538a(0x883),_0x66ae08[_0x1d538a(0x8ab)],_0x66ae08[_0x1d538a(0x290)]];for(var _0x2cb74f=-0x6*-0x33a+-0x1*-0xbdb+-0x1f37;_0x2cb74f<_0x2f6c53[_0x1d538a(0x320)+'h'];_0x2cb74f++){(function(_0x249c54){var _0x5b0245=_0x1d538a,_0x5aebae={'anLcG':function(_0x154ba7,_0x5b7021,_0x5299e4){var _0x4168c9=_0x32ef;return _0x3247d6[_0x4168c9(0x9b8)](_0x154ba7,_0x5b7021,_0x5299e4);}},_0x199303=console[_0x249c54];if(_0x3247d6['zuGiY'](typeof _0x199303,_0x5b0245(0x80e)+_0x5b0245(0x92c)))return;console[_0x249c54]=function(){var _0x2e1f46=_0x5b0245,_0x43bb4a={'Mbtcp':_0x3247d6['ijAJX'],'LyoCu':_0x2e1f46(0x171)+'a-sw-'+_0x2e1f46(0x4ab)+'s'};if(_0x3247d6['YsrRq'](_0x3247d6['BjtpT'],_0x2e1f46(0x451)))return _0x5df8d4['facto'+'r'];else{try{if(_0x2e1f46(0x761)!==_0x3247d6[_0x2e1f46(0x139)]){_0x5aebae['anLcG'](_0x29f781,_0x5861dc,0xf8+-0x22c1+-0x23bd*-0x1);return;}else{var _0x533534='';for(var _0x3ac1e8=0x14c6+0x22af+0x1*-0x3775;_0x3247d6[_0x2e1f46(0x1ae)](_0x3ac1e8,arguments[_0x2e1f46(0x320)+'h']);_0x3ac1e8++){if(_0x3247d6[_0x2e1f46(0x4f2)]!==_0x3247d6['iWwoB']){var _0xd7ba75=arguments[_0x3ac1e8];if(_0x3247d6['YsrRq'](typeof _0xd7ba75,_0x2e1f46(0xa8c)+'g'))_0x533534+=_0xd7ba75;else{if(_0xd7ba75&&_0xd7ba75[_0x2e1f46(0x3a0)+'ge'])_0x533534+=_0xd7ba75[_0x2e1f46(0x3a0)+'ge'];}}else{if(_0x54dc6d())return null;var _0x51d648=_0x5e6217['getEl'+_0x2e1f46(0x6f5)+_0x2e1f46(0x56d)](_0x43bb4a['Mbtcp']);if(_0x51d648)return _0x51d648;if(!_0x5683b8[_0x2e1f46(0x86e)]||!_0x5a1ce7['body']['appen'+_0x2e1f46(0x3d0)+'d'])return null;try{var _0x1ac8d1=(_0x2e1f46(0x7a2)+_0x2e1f46(0x9eb))['split']('|'),_0x53b49d=-0x71a+0x31*-0x67+0x1ad1;while(!![]){switch(_0x1ac8d1[_0x53b49d++]){case'0':return _0x51d648;case'1':_0x263946[_0x2e1f46(0x86e)]['appen'+_0x2e1f46(0x3d0)+'d'](_0x51d648);continue;case'2':if(!_0x4e1c9f[_0x2e1f46(0xa2b)+_0x2e1f46(0x6f5)+_0x2e1f46(0x56d)](_0x43bb4a[_0x2e1f46(0x4c2)])){var _0x36b12e=_0x21edff['creat'+'eElem'+_0x2e1f46(0x518)]('style');_0x36b12e['id']=_0x2e1f46(0x171)+_0x2e1f46(0x66d)+'v2-cs'+'s',_0x36b12e['textC'+_0x2e1f46(0x889)+'t']=_0x2e1f46(0x530)+'ra-sw'+'-v2{a'+_0x2e1f46(0xab3)+'itial'+'}',(_0x52138d[_0x2e1f46(0x7e7)]||_0x4bfd61['docum'+'entEl'+_0x2e1f46(0x6f5)])[_0x2e1f46(0x5b6)+_0x2e1f46(0x3d0)+'d'](_0x36b12e);}continue;case'3':_0x51d648['id']=_0x2e1f46(0x171)+_0x2e1f46(0x66d)+'v2';continue;case'4':_0x51d648=_0x572d59['creat'+_0x2e1f46(0x74c)+'ent'](_0x2e1f46(0x46d));continue;}break;}}catch(_0x8e122c){return null;}}}if(_0x533534['index'+'Of'](_0x42cf5e)!==-(0x1d6*-0xe+-0x1a4f+0x3404))return _0x199303['apply'](console,arguments);if(_0x3247d6['zuGiY'](_0x533534['index'+'Of'](_0x2e1f46(0x849)+'WebMo'+_0x2e1f46(0x540)),-(-0xbc6+0x7a*0x4b+-0x17f7))){var _0x43287d=_0x533534['slice'](0xa84*-0x3+0x1*-0x194c+-0x6b*-0x88,-0x33b*0x9+0x65*0x13+0x16c0);if(_0x1ed555[_0x2e1f46(0x792)+'Of'](_0x43287d)===-(-0x20ca+0x2237+0xe*-0x1a)&&_0x1ed555['lengt'+'h']<-0xc02*-0x2+-0x234d*0x1+0xb85)_0x1ed555['push'](_0x43287d);}}}catch(_0x23055a){}return _0x199303[_0x2e1f46(0x103)](console,arguments);}};}(_0x2f6c53[_0x2cb74f]));}}else try{_0xc90eab();}catch(_0x541363){}}());var _0x18253c={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x344957=null,_0xd31229=null,_0x491191=-(-0x2390+0x98a+0x1a07),_0x532701=null;function _0x47d6db(_0x3321b1){var _0x5ee1d3=_0x4a04dc;try{if(!_0x3321b1)return;var _0x10b9ad=_0x3321b1[_0x5ee1d3(0x8dd)+_0x5ee1d3(0x2ab)]?_0x3321b1['insta'+'nce'][_0x5ee1d3(0x6c9)+'ts']:_0x3321b1[_0x5ee1d3(0x6c9)+'ts']||null;if(!_0x10b9ad)return;if(!_0x532701)try{_0x66ae08['EyGnN'](_0x66ae08[_0x5ee1d3(0x4e3)],_0x66ae08[_0x5ee1d3(0x4e3)])?_0x532701=Object[_0x5ee1d3(0x70c)](_0x10b9ad)['slice'](-0xbc2+-0x4ff*-0x1+0x6c3,-0x1495+0x1*0x175+0x1338):(_0x1049b7=_0x66ae08[_0x5ee1d3(0x8cd)](_0x66ae08[_0x5ee1d3(0x836)](_0x66ae08[_0x5ee1d3(0x99c)],_0x21fcbf[_0x5ee1d3(0x70c)](_0x766497['insta'+'nces'])['lengt'+'h'])+_0x66ae08['PIRfh']+_0xfab4ec,'s'),_0x2cd8da='#7ee0'+'a8');}catch(_0x17a26f){}var _0x6e99b7=_0x10b9ad['memor'+'y'];if(_0x6e99b7&&_0x6e99b7[_0x5ee1d3(0x8e1)+'r']&&_0x6e99b7[_0x5ee1d3(0x8e1)+'r']['byteL'+'ength']>0x259f+0xd*-0x113+-0x17a8){if(_0x66ae08['aZZHQ'](_0x5ee1d3(0xac7),_0x66ae08['JfKgi']))_0xd31229=_0x6e99b7,_0x491191=Date['now']()-_0x598176;else{_0x1be9d4[_0x5ee1d3(0x60d)](_0x66ae08[_0x5ee1d3(0x7ab)],_0x66ae08['KUxUU']+_0x54e8b0+(_0x5ee1d3(0xa77)+_0x5ee1d3(0xa08)+_0x5ee1d3(0x86d)+'0'),_0x4bd688),_0x36fcd7['log'](_0x66ae08[_0x5ee1d3(0x964)](_0x1a56e4+'\x0a',_0x2d3748[_0x5ee1d3(0xa8c)+'gify'](_0x4b4620,null,-0x14*0x167+-0x438+0xb*0x2ef))+'\x0a'+_0x233f49),_0x40ac8b=_0x5c3530;try{_0x26448c(_0x574d77);}catch(_0x235f4e){}_0x66ae08['SKZdr'](_0x3b5a9c,'repor'+'t',{'report':_0xbc0d5f});}}}catch(_0x4bb702){}}function _0x2cfeaf(){var _0x1c7dc2=_0x4a04dc,_0x38cf69={'aLKuK':function(_0x31262d,_0x310f4d){var _0x643df0=_0x32ef;return _0x66ae08[_0x643df0(0x27f)](_0x31262d,_0x310f4d);},'uciqv':function(_0x54a6de,_0x362a2f){return _0x66ae08['cSMRv'](_0x54a6de,_0x362a2f);},'rLfBN':_0x66ae08['Sdvml'],'CasNp':function(_0x4dd751,_0x384c37){return _0x4dd751===_0x384c37;},'LQKdo':'rwOcy','VAXgA':_0x1c7dc2(0x8d5),'YYRgk':function(_0xfe00a7,_0x56a7e3){var _0x36293c=_0x1c7dc2;return _0x66ae08[_0x36293c(0x520)](_0xfe00a7,_0x56a7e3);},'pWidk':function(_0x4497c4,_0x4adf0e,_0x40b2eb){var _0x3ff845=_0x1c7dc2;return _0x66ae08[_0x3ff845(0x130)](_0x4497c4,_0x4adf0e,_0x40b2eb);},'ABfRi':'span','bbLMc':_0x66ae08[_0x1c7dc2(0x60f)],'NiLmv':function(_0x5637b9,_0xa401ad,_0x30b06b){return _0x66ae08['pFkVH'](_0x5637b9,_0xa401ad,_0x30b06b);}};try{if(_0x66ae08['YwaCg'](_0x66ae08['qecgb'],'crDjQ')){if(_0x66ae08[_0x1c7dc2(0xa67)](typeof WebAssembly,'undef'+_0x1c7dc2(0x625)))return;var _0x85d0d1=[_0x66ae08['lrmoo'],'insta'+_0x1c7dc2(0x3bb)+_0x1c7dc2(0x7ae)+_0x1c7dc2(0x686)];for(var _0x5e21c7=0x10aa*-0x1+0x1440+-0x396*0x1;_0x66ae08['AEegB'](_0x5e21c7,_0x85d0d1['lengt'+'h']);_0x5e21c7++){(function(_0x391940){var _0x2086fd=_0x1c7dc2,_0x38b44f={'cQvog':function(_0x45cac5,_0x38d75c){return _0x38cf69['aLKuK'](_0x45cac5,_0x38d75c);},'GiWSG':function(_0x1276f7,_0x9ffa29){var _0xaf9e54=_0x32ef;return _0x38cf69[_0xaf9e54(0x6db)](_0x1276f7,_0x9ffa29);},'mKUiX':_0x38cf69['rLfBN'],'IgJQY':function(_0x1e4538,_0x5e3696){var _0x57bde7=_0x32ef;return _0x38cf69[_0x57bde7(0x800)](_0x1e4538,_0x5e3696);},'mhbGK':_0x38cf69[_0x2086fd(0x92f)]},_0x2e1dbf=WebAssembly[_0x391940];if(typeof _0x2e1dbf!==_0x2086fd(0x80e)+_0x2086fd(0x92c)||_0x2e1dbf['__sak'+'uraMe'+_0x2086fd(0x3a2)+'ap'])return;var _0x53b162=function(){var _0x26808f=_0x2086fd,_0x4ac86b={'wXdtL':function(_0x4729a6,_0xb8410,_0x121957){return _0x4729a6(_0xb8410,_0x121957);},'dCwDA':function(_0x2f3708,_0x1ee84c){return _0x2f3708+_0x1ee84c;},'yxgni':function(_0x55ed47,_0x4ddf13){return _0x55ed47+_0x4ddf13;},'gvExl':function(_0x23219f,_0x91fb6){var _0x38904e=_0x32ef;return _0x38b44f[_0x38904e(0x6c5)](_0x23219f,_0x91fb6);},'Sklcc':_0x26808f(0x13a),'vVRJt':_0x26808f(0xa2d)+_0x26808f(0x431)};if(_0x38b44f['GiWSG']('AWiZQ',_0x38b44f[_0x26808f(0x1fc)]))_0x4ac86b['wXdtL'](_0x22ad2a,_0x12b25c,_0x2c87c3[_0x26808f(0x576)+'r']),_0x3108ab['textC'+'onten'+'t']=_0x19eb0c?_0x4ac86b[_0x26808f(0x2c7)](_0x4ac86b[_0x26808f(0x49d)](_0x4ac86b['yxgni'](_0x4ac86b[_0x26808f(0x401)]('x',_0x403c14['facto'+'r'][_0x26808f(0x626)+'ed'](-0xc4d*0x1+-0x41*0x4b+0x141*0x19)),_0x4ac86b[_0x26808f(0x894)])+_0x3b2875['lengt'+'h'],_0x4ac86b[_0x26808f(0x2d3)])+_0x416f5b,_0x26808f(0x5a9)+'es'):_0x26808f(0x633)+_0x26808f(0x658)+'\x20move'+'ment-'+'speed'+'\x20fiel'+_0x26808f(0x826)+'ly.\x20H'+_0x26808f(0x980)+_0x26808f(0x466)+_0x26808f(0xa58)+_0x26808f(0x941)+_0x26808f(0x7ba)+_0x26808f(0x71d)+_0x26808f(0x1df);else{var _0x17b8b6=_0x2e1dbf['apply'](this,arguments);try{if(_0x38b44f['IgJQY'](_0x38b44f[_0x26808f(0x329)],_0x38b44f[_0x26808f(0x329)])){if(_0x17b8b6&&typeof _0x17b8b6[_0x26808f(0xa42)]==='funct'+_0x26808f(0x92c))_0x17b8b6['then'](_0x47d6db,function(){});else _0x47d6db(_0x17b8b6);}else _0xa01c2[_0x26808f(0x72d)]=![];}catch(_0x2d808a){}return _0x17b8b6;}};_0x53b162['__sak'+_0x2086fd(0x62c)+_0x2086fd(0x3a2)+'ap']=!![];try{Object[_0x2086fd(0x24e)+_0x2086fd(0x759)+'erty'](_0x53b162,_0x38cf69['VAXgA'],{'value':_0x2e1dbf[_0x2086fd(0x8d5)],'configurable':!![]});}catch(_0x4b92bd){}WebAssembly[_0x391940]=_0x53b162;}(_0x85d0d1[_0x5e21c7]));}}else{var _0x435501=_0x38cf69['YYRgk'](_0x270c87,_0x2b7573[_0x90d9a7][-0x17e+0x5d*0x3+0x1*0x67]),_0x20bb84=_0x38cf69[_0x1c7dc2(0xa1e)](_0x27ab9c,_0x38cf69['ABfRi'],_0x38cf69[_0x1c7dc2(0x8e2)]);_0x20bb84['style']['minWi'+'dth']='0',_0x20bb84['style'][_0x1c7dc2(0x260)]='1',_0x20bb84[_0x1c7dc2(0x443)][_0x1c7dc2(0xa45)+_0x1c7dc2(0x11e)]=_0x1c7dc2(0x8a0),_0x20bb84[_0x1c7dc2(0x665)+_0x1c7dc2(0x889)+'t']=_0x3e57c3(_0x4f3c61[_0x5b29e7][0x126b*0x1+0x1*0xc11+-0x1*0x1e7a]),_0x20bb84[_0x1c7dc2(0x884)+'et']['k']=_0x4faf2c[_0x161f9b][0x23a1+0xb45+0x1*-0x2ee5],_0x435501[_0x1c7dc2(0x5b6)+_0x1c7dc2(0x3d0)+'d'](_0x20bb84);var _0x54f71f=_0x353019[_0x1c7dc2(0x320)+'h']?_0x5d8c8b[_0x13f994[_0x1c7dc2(0x320)+'h']-(-0x1*0x130d+0x7df*0x3+0x3*-0x185)]:null;!_0x54f71f&&(_0x54f71f=_0x38cf69['NiLmv'](_0x31f72e,_0x1c7dc2(0xaf3)+'on',![]),_0x10d90b['push'](_0x54f71f)),_0x54f71f['body']['appen'+'dChil'+'d'](_0x435501),_0x54f71f[_0x1c7dc2(0x86e)]['lastC'+_0x1c7dc2(0x716)]['sp']=_0x20bb84;}}catch(_0xe5d925){}}var _0x167409=null,_0x457238=null,_0x29a47e={},_0x2c50f2=[],_0x2be9b0=[],_0x552302=[{'type':_0x66ae08['LHUKo'],'keep':!![]},{'type':_0x66ae08['zqZyY'],'keep':!![]},{'type':_0x4a04dc(0x82a)+'nMana'+_0x4a04dc(0x4b6),'keep':![]},{'type':'TDM_G'+'ameMa'+_0x4a04dc(0x421),'keep':!![]},{'type':_0x4a04dc(0x865)+_0x4a04dc(0x715)+'ager','keep':!![]},{'type':_0x66ae08['cZmfm'],'keep':!![],'many':!![]},{'type':_0x4a04dc(0x434)+'rkPla'+'yerAn'+_0x4a04dc(0x8b4)+'ons','keep':!![],'many':!![]},{'type':_0x66ae08[_0x4a04dc(0x74e)],'keep':!![],'many':!![]},{'type':'Enemy'+_0x4a04dc(0x5e0),'keep':!![],'many':!![]}],_0x58b63f=[_0x4a04dc(0x5e7)+_0x4a04dc(0x859)+_0x4a04dc(0x374)+'.dll',_0x66ae08[_0x4a04dc(0xa93)],_0x66ae08['bCvzz'],_0x4a04dc(0x2b2)+'t.dll','Scivo'+'loCha'+_0x4a04dc(0x244)+_0x4a04dc(0x5ff)+_0x4a04dc(0x90e)+_0x4a04dc(0xa47),_0x4a04dc(0x45b)+_0x4a04dc(0x93a)+'d'];(function _0x58d58d(){var _0xfacf5=_0x4a04dc,_0x2ed7e7={'dxsfQ':function(_0x2c828f,_0x14a853){return _0x2c828f(_0x14a853);}};try{if(_0x66ae08[_0xfacf5(0x172)]===_0xfacf5(0x7a1)){if(_0x3095be)_0x4d1be9[_0xfacf5(0x665)+'onten'+'t']=(_0x2ed7e7['dxsfQ'](_0x32b947,_0xcd64fe[_0xfacf5(0xa1b)])||0x18a4+0x247b+0x2*-0x1e8f)[_0xfacf5(0x626)+'ed'](-0xb86*-0x1+-0x1736*-0x1+-0x22bb)+'x';_0x1bf3a8();}else{var _0x115b2b=window['Unity'+_0xfacf5(0x166)+'dkit']&&window['Unity'+_0xfacf5(0x166)+_0xfacf5(0x540)][_0xfacf5(0x4b9)+'me'];if(!_0x115b2b||typeof _0x115b2b[_0xfacf5(0xa21)+'ePlug'+'in']!==_0x66ae08[_0xfacf5(0xa48)]){_0x18253c['error']=_0x66ae08['ZBBWq'];return;}_0x18253c[_0xfacf5(0x3c4)+_0xfacf5(0x387)]=!![],_0x457238=_0x115b2b[_0xfacf5(0xa21)+'ePlug'+'in']({'name':_0xfacf5(0x171)+_0xfacf5(0xa7e)+'llwar'+'z','version':_0x4eebbe,'referencedAssemblies':_0x58b63f[_0xfacf5(0x688)]()}),_0x18253c['ok']=!![];try{var _0x507b11=window['Unity'+'WebMo'+'dkit'][_0xfacf5(0x4b9)+'me'];_0x507b11['__sak'+_0xfacf5(0x3ea)+'g']=_0x66ae08['tUQVf'](_0x4eebbe,':')+Math[_0xfacf5(0x9e3)+'m']()[_0xfacf5(0x108)+'ing'](0x19e0+-0x1529*0x1+0x1*-0x493)[_0xfacf5(0x688)](-0x1725+-0x38b*0x1+0x2*0xd59,0xccf+0x12ed+-0x2*0xfd9),_0x344957=_0x507b11[_0xfacf5(0x170)+_0xfacf5(0x3ea)+'g'];}catch(_0x47e78d){}_0x66ae08[_0xfacf5(0x763)](_0x1f065d),_0x18253c[_0xfacf5(0x55c)+_0xfacf5(0x9c5)+'tered']=_0x2c50f2['lengt'+'h'],_0x66ae08['ZLBHL'](_0x2cfeaf),_0x18253c[_0xfacf5(0x666)+'yTap']=!![];}}catch(_0x5682c1){_0x18253c[_0xfacf5(0x883)]=_0x66ae08[_0xfacf5(0x181)](String,_0x5682c1&&_0x5682c1['messa'+'ge']||_0x5682c1);}}());var _0x4795b7=new Float32Array(0x1*-0x241f+-0xcbf+0x30df),_0x250c83=new Int32Array(_0x4795b7['buffe'+'r']);function _0x568945(_0x465007){return _0x4795b7[0x125f+0x1*0x2b+0x62e*-0x3]=_0x465007,_0x250c83[0x1*-0x6cb+-0xa3*-0xd+-0x17c];}function _0x165421(_0x1ddb19){return _0x250c83[0x173e+-0x3*0xc5b+0xdd3]=_0x66ae08['mhugC'](_0x1ddb19,0x299+0x1656+-0x18ef),_0x4795b7[-0x1c7c+0x1*0xd8b+-0x4fb*-0x3];}var _0x991340={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x581c21(){var _0x3ffcba=_0x4a04dc,_0x170f93={'BHTVS':function(_0x2ea975,_0x1b1b3d,_0xe4d4e3,_0x515258){return _0x2ea975(_0x1b1b3d,_0xe4d4e3,_0x515258);},'XwwoA':function(_0x25c7d7,_0x392019){return _0x25c7d7===_0x392019;},'wBcPk':'obfI','KrVbq':function(_0x4c6471,_0x17f76b){return _0x4c6471+_0x17f76b;},'KEYwF':_0x3ffcba(0x2bb),'VErNM':_0x66ae08[_0x3ffcba(0x71a)],'tzFaf':function(_0x5708c4,_0x11ecbb){return _0x5708c4===_0x11ecbb;},'HYcaE':function(_0x479c8b,_0x1c40a1){return _0x479c8b|_0x1c40a1;},'owMgg':function(_0x1d3bd4,_0x58ed6c){return _0x66ae08['kSsfW'](_0x1d3bd4,_0x58ed6c);},'efdyD':function(_0x4fd510,_0x26a421,_0x14b57e){return _0x4fd510(_0x26a421,_0x14b57e);},'VHFXj':function(_0x4eae1e,_0x4fba52){return _0x4eae1e+_0x4fba52;},'YsCXh':function(_0x3e5cb3,_0x213a21){return _0x3e5cb3>>>_0x213a21;}};if(_0x66ae08['MYKkU']===_0x66ae08[_0x3ffcba(0x231)]){try{if(_0x457238&&_0x457238[_0x3ffcba(0xa6a)+'ime']){var _0x54f358=_0x457238[_0x3ffcba(0xa6a)+_0x3ffcba(0x9e9)];if(typeof _0x54f358['resol'+'veGam'+'e']==='funct'+_0x3ffcba(0x92c)){if(_0x66ae08['cSMRv'](_0x66ae08[_0x3ffcba(0x886)],'wEgIe')){var _0x1f788d=_0x54f358[_0x3ffcba(0x321)+'veGam'+'e']();if(_0x1f788d)return _0x991340['sourc'+'e']=_0x66ae08[_0x3ffcba(0x19e)],_0x1f788d;}else{if(_0x3493fc[_0x75cc8b]['hook']&&_0x50f3bc[_0xab1c6e]['hook'][_0x3ffcba(0x853)+'ed'])_0x12076a++;}}if(_0x54f358['_game'])return _0x991340['sourc'+'e']=_0x3ffcba(0x2ed)+_0x3ffcba(0x5a4)+_0x3ffcba(0x7b0)+_0x3ffcba(0x869)+'e',_0x54f358['_game'];}}catch(_0x57ac32){}try{var _0x3b258f=window[_0x3ffcba(0x849)+_0x3ffcba(0x166)+'dkit']&&window[_0x3ffcba(0x849)+_0x3ffcba(0x166)+_0x3ffcba(0x540)]['Runti'+'me'];if(_0x3b258f&&_0x66ae08['MmVCW'](typeof _0x3b258f[_0x3ffcba(0x321)+'veGam'+'e'],'funct'+_0x3ffcba(0x92c))){if(_0x3ffcba(0xaac)!==_0x3ffcba(0x247)){var _0x3c03c5=_0x3b258f[_0x3ffcba(0x321)+_0x3ffcba(0x57e)+'e']();if(_0x3c03c5)return _0x991340[_0x3ffcba(0x6f9)+'e']='Runti'+_0x3ffcba(0x9cc)+'solve'+_0x3ffcba(0x192)+')',_0x3c03c5;}else{if(typeof _0x3c1bb1!==_0x66ae08[_0x3ffcba(0x803)]&&_0x4df936)return _0x5a6eb7[_0x3ffcba(0x6f9)+'e']=_0x66ae08['LWcpi'],_0x158882;}}if(_0x3b258f&&_0x3b258f['_game'])return _0x991340['sourc'+'e']=_0x66ae08['fJLoU'],_0x3b258f;}catch(_0x19ad21){}try{var _0x1a71ac=window[_0x3ffcba(0x81f)+_0x3ffcba(0x9c1)+_0x3ffcba(0x2ab)]||window[_0x3ffcba(0x81f)+'Game']||window[_0x3ffcba(0x2b5)];if(_0x1a71ac){if(_0x66ae08['rWrNk'](_0x66ae08['pIhHK'],_0x66ae08[_0x3ffcba(0xa6b)]))return _0x991340[_0x3ffcba(0x6f9)+'e']=_0x66ae08[_0x3ffcba(0x7dc)],_0x1a71ac;else{var _0x598306='';for(var _0x94707d=0x4*-0x62f+-0x163f+0x2efb;_0x94707d<_0x3aaf06[_0x3ffcba(0x320)+'h'];_0x94707d++){var _0x176b73=_0x495140[_0x94707d]['toStr'+_0x3ffcba(0x7e9)](-0x1080+0x635+0xa5b);_0x598306+=_0x66ae08[_0x3ffcba(0x7f3)](_0x66ae08['uoZdV'](_0x176b73[_0x3ffcba(0x320)+'h'],0x1*0x2149+-0x1*-0x51+0x35c*-0xa)?'0':'',_0x176b73);}return _0x598306;}}}catch(_0x29662a){}try{if(_0x3ffcba(0x8ba)==='MbtAg'){if(typeof game!==_0x66ae08[_0x3ffcba(0x803)]&&game)return _0x991340['sourc'+'e']='bare\x20'+'game\x20'+_0x3ffcba(0xa05)+'ng',game;}else{var _0x203869=_0x5a3969[_0x434a7e],_0xeaafe7=_0x170f93['BHTVS'](_0x152472,_0x595779,_0x1c7fc4,_0x203869['size']);if(!_0xeaafe7)return![];var _0x1a51e5=new _0x441ab9(_0xeaafe7['buffe'+'r'],_0xeaafe7[_0x3ffcba(0x2a9)+'ffset'],_0xeaafe7['byteL'+_0x3ffcba(0x4b8)]),_0x21de85=_0x203869[_0x3ffcba(0x23e)+'pe']==='u8'?_0x1a51e5[_0x3ffcba(0x6c4)+'nt8'](_0x203869['key']):_0x1a51e5[_0x3ffcba(0x896)+_0x3ffcba(0x373)](_0x203869[_0x3ffcba(0x106)],!![]),_0x242691;if(_0x170f93['XwwoA'](_0x543957,_0x3ffcba(0x6d2)))_0x242691=_0x3f19eb(_0x1d4913);else{if(_0x3b22c4===_0x170f93[_0x3ffcba(0x604)])_0x242691=_0x4b16f1|0xb*0x67+0x9c1+-0xe2e;else _0x242691=(_0x1a4231?0xd3a*-0x1+-0x1*-0xc9d+-0x2*-0x4f:0x4fd+0x261b+0x1*-0x2b18)&-0x1*0x1f5+0xd*0x136+-0xcca;}return _0x5ad296(_0x170f93[_0x3ffcba(0x862)](_0x5d4696+_0x109a3c,_0x203869['hidde'+'n']),_0x170f93['KEYwF'],_0x242691^_0x21de85)&&_0x260d71(_0x170f93[_0x3ffcba(0x862)](_0x2967a8,_0x127436)+_0x203869['fake'],_0x4726bb==='obfF'?_0x170f93[_0x3ffcba(0x20b)]:_0x170f93[_0x3ffcba(0x50f)](_0x93c92,_0x170f93['wBcPk'])?_0x3ffcba(0x2bb):'u8',_0x170f93['tzFaf'](_0xa030c3,'obfF')?_0x16bfd4:_0x5eb25c===_0x3ffcba(0x17f)?_0x170f93['HYcaE'](_0x533f32,-0x752+-0x1a70+0x21c2):_0x27972c?-0x116d*-0x1+0x1d0*0xd+-0x28fc:-0x1494+0x190f+-0x47b)&&_0x55a08a(_0x170f93['owMgg'](_0x418d05+_0x3082ee,_0x203869[_0x3ffcba(0x868)+'e']),'u8',0x18e2+0x1*-0x25b+-0x1687);}}catch(_0xce62f1){}try{var _0x5c6d32=Object['keys'](window);for(var _0x42e5f7=-0x1*-0xc7+-0x10e2+-0xd9*-0x13;_0x66ae08[_0x3ffcba(0x9e5)](_0x42e5f7,_0x5c6d32['lengt'+'h'])&&_0x42e5f7<-0x1f07*-0x1+0x6ad*-0x3+-0x22a*0x4;_0x42e5f7++){var _0x529019=window[_0x5c6d32[_0x42e5f7]];if(_0x529019&&_0x66ae08['LvciZ'](typeof _0x529019,'objec'+'t')&&_0x529019[_0x3ffcba(0x3f7)+'e']&&_0x529019['Modul'+'e'][_0x3ffcba(0x44d)+'8']&&_0x529019[_0x3ffcba(0x3f7)+'e'][_0x3ffcba(0x44d)+'8'][_0x3ffcba(0x8e1)+'r']){if(_0x66ae08[_0x3ffcba(0x2da)]===_0x3ffcba(0x7d9)){var _0x2940a2=_0x170f93[_0x3ffcba(0xaba)](_0x3b72ec,_0x170f93[_0x3ffcba(0xe0)](_0x178815,_0x142f7c(_0x3e2246[_0x56e50d][-0x2392+0x2*0xfad+-0xb4*-0x6],0x383*0x8+0x1b03+-0x370b)),'u32');if(_0x2940a2)_0x513931[_0x3ffcba(0x3af)][_0x3d0b48[_0x19c90a][-0x11eb+0xab*-0x11+0x1d47]]=_0x170f93[_0x3ffcba(0x862)]('0x',_0x170f93['YsCXh'](_0x2940a2,-0x21d8+-0x66*0x62+0x48e4)['toStr'+_0x3ffcba(0x7e9)](-0x50*0x22+0xc75+-0x1c5));}else return _0x991340[_0x3ffcba(0x6f9)+'e']=_0x66ae08[_0x3ffcba(0x5ab)](_0x3ffcba(0x4e4)+'w.'+_0x5c6d32[_0x42e5f7],_0x66ae08['ofIhU']),_0x529019;}}}catch(_0x592270){}return _0x991340[_0x3ffcba(0x6f9)+'e']=null,null;}else{var _0x228eda=_0x100bf9['Unity'+_0x3ffcba(0x166)+_0x3ffcba(0x540)]&&_0xa110df['Unity'+'WebMo'+_0x3ffcba(0x540)][_0x3ffcba(0x4b9)+'me'];if(_0x228eda&&typeof _0x228eda[_0x3ffcba(0x321)+_0x3ffcba(0x57e)+'e']===_0x3ffcba(0x80e)+_0x3ffcba(0x92c)){var _0x128358=_0x228eda['resol'+_0x3ffcba(0x57e)+'e']();if(_0x128358)return _0x28e1ba['sourc'+'e']='Runti'+'me.re'+_0x3ffcba(0x479)+_0x3ffcba(0x192)+')',_0x128358;}if(_0x228eda&&_0x228eda[_0x3ffcba(0x726)])return _0x26132a['sourc'+'e']=_0x66ae08[_0x3ffcba(0x7b5)],_0x228eda;}}function _0x23b14a(){var _0x5213f2=_0x4a04dc;try{if(_0xd31229&&_0xd31229[_0x5213f2(0x8e1)+'r']&&_0xd31229[_0x5213f2(0x8e1)+'r'][_0x5213f2(0x7f4)+_0x5213f2(0x4b8)]){if(_0x66ae08[_0x5213f2(0xa38)](_0x66ae08[_0x5213f2(0x96b)],_0x5213f2(0x885))){_0x5bfba5['preve'+'ntDef'+_0x5213f2(0x630)](),_0x45547e(!_0x68501e[_0x5213f2(0x2d9)]);return;}else return _0x991340[_0x5213f2(0x6f9)+'e']=_0x991340['sourc'+'e']||_0x5213f2(0x8dd)+_0x5213f2(0x3bb)+'e().e'+_0x5213f2(0xad4)+'s.mem'+_0x5213f2(0x7ca),new Uint8Array(_0xd31229[_0x5213f2(0x8e1)+'r']);}}catch(_0x4cfe12){}try{var _0x44200b=_0x581c21();if(_0x44200b&&_0x44200b[_0x5213f2(0x3f7)+'e']&&_0x44200b[_0x5213f2(0x3f7)+'e']['HEAPU'+'8']&&_0x44200b[_0x5213f2(0x3f7)+'e'][_0x5213f2(0x44d)+'8']['buffe'+'r'])return _0x44200b[_0x5213f2(0x3f7)+'e']['HEAPU'+'8'];}catch(_0x348f84){}return null;}function _0x48ea68(){var _0x30d2b3=_0x4a04dc,_0x4f86e1=_0x23b14a();if(!_0x4f86e1)return null;try{return new DataView(_0x4f86e1['buffe'+'r'],_0x4f86e1['byteO'+_0x30d2b3(0x83f)],_0x4f86e1['byteL'+_0x30d2b3(0x4b8)]);}catch(_0x30e725){return null;}}function _0x5b90ef(_0x5df502,_0x2fec0b){var _0x33cb3f=_0x4a04dc,_0x20855a=_0x66ae08[_0x33cb3f(0xaae)](_0x48ea68);if(!_0x20855a){if(_0x33cb3f(0x101)===_0x66ae08['LzghQ'])return _0x991340[_0x33cb3f(0x5f2)+'d']++,_0x991340['lastE'+_0x33cb3f(0x8eb)]=_0x991340['lastE'+'rror']||_0x66ae08[_0x33cb3f(0xa9c)],undefined;else{var _0x24d06f=_0x66ae08[_0x33cb3f(0x1e6)](_0x66ae08[_0x33cb3f(0x57f)](_0x36575d+'\x0a',_0x2327b9['strin'+_0x33cb3f(0x58f)](_0x26e509,null,-0x2156+-0x174+0x1*0x22cb))+'\x0a',_0x5d3b47);if(_0x3421fe['clipb'+'oard']&&_0x4c5907[_0x33cb3f(0x618)+_0x33cb3f(0x1b0)][_0x33cb3f(0x368)+'Text'])_0x7eb24b[_0x33cb3f(0x618)+'oard'][_0x33cb3f(0x368)+'Text'](_0x24d06f)['then'](function(){var _0x48c50d=_0x33cb3f;_0x4547d3[_0x48c50d(0x665)+'onten'+'t']=_0x48c50d(0x746)+'d';});else _0x4cfaef['textC'+_0x33cb3f(0x889)+'t']=_0x66ae08[_0x33cb3f(0x3ee)];}}if(_0x5df502<-0x1da8+-0x21f*0xf+0x3d79*0x1||_0x5df502+(-0x7*0x24e+0x1*0x17+0x100f)>_0x20855a['byteL'+'ength'])return _0x991340[_0x33cb3f(0x5f2)+'d']++,_0x991340[_0x33cb3f(0x408)+'rror']=_0x991340[_0x33cb3f(0x408)+'rror']||_0x66ae08[_0x33cb3f(0x323)](_0x66ae08[_0x33cb3f(0x554)](_0x66ae08[_0x33cb3f(0x9bb)]+_0x5df502[_0x33cb3f(0x108)+'ing'](-0x2*0x123+-0x1b*-0x103+-0x18fb),_0x66ae08[_0x33cb3f(0x5eb)]),_0x20855a['byteL'+'ength']['toStr'+_0x33cb3f(0x7e9)](0x1945+0x4bb*0x1+-0x1df0)),undefined;try{_0x991340['ok']++;switch(_0x2fec0b){case'u8':return _0x20855a['getUi'+'nt8'](_0x5df502);case'i8':return _0x20855a['getIn'+'t8'](_0x5df502);case _0x66ae08['EKEDg']:return _0x20855a[_0x33cb3f(0x896)+'t16'](_0x5df502,!![]);case _0x33cb3f(0x28c):return _0x20855a['getUi'+_0x33cb3f(0x269)](_0x5df502,!![]);case _0x33cb3f(0x2bb):return _0x20855a['getIn'+_0x33cb3f(0x373)](_0x5df502,!![]);case _0x66ae08['FLxzP']:return _0x20855a['getUi'+_0x33cb3f(0x301)](_0x5df502,!![]);case _0x33cb3f(0x2fb):return _0x20855a[_0x33cb3f(0x472)+_0x33cb3f(0x3f1)](_0x5df502,!![]);case _0x66ae08[_0x33cb3f(0x752)]:return _0x20855a[_0x33cb3f(0x472)+_0x33cb3f(0x6f6)](_0x5df502,!![]);case'v2':case'v3':case'v4':return _0x20855a[_0x33cb3f(0x472)+_0x33cb3f(0x3f1)](_0x5df502,!![]);default:return _0x20855a[_0x33cb3f(0x896)+'t32'](_0x5df502,!![]);}}catch(_0x20220){return _0x991340['faile'+'d']++,_0x991340['lastE'+'rror']=_0x991340['lastE'+'rror']||String(_0x20220&&_0x20220[_0x33cb3f(0x3a0)+'ge']||_0x20220)['slice'](0x4a*0x4+0x1b05+-0x1c2d*0x1,-0x13*-0x1c1+0x1806+-0x38e1),undefined;}}function _0xe6a797(_0x59c08f,_0x3a8a80,_0x11b294){var _0x593716=_0x4a04dc;if(_0x66ae08[_0x593716(0xaf7)](_0x593716(0x12c),_0x66ae08['xBtqA'])){var _0x477688=_0x48ea68();if(!_0x477688||_0x59c08f<0x20f1+-0xa*0x304+0x17*-0x1f||_0x66ae08['rKeUH'](_0x59c08f+(-0x225b+-0x1786+-0x1*-0x39e5),_0x477688['byteL'+_0x593716(0x4b8)]))return![];try{switch(_0x3a8a80){case'u8':case'i8':_0x477688[_0x593716(0x35c)+_0x593716(0xa3c)](_0x59c08f,_0x11b294&-0x1595+-0xf3f*0x2+-0x1a89*-0x2);break;case _0x66ae08['EKEDg']:case _0x66ae08['GmapD']:_0x477688[_0x593716(0x180)+_0x593716(0x314)](_0x59c08f,_0x11b294|0x1d9d+-0x228e+0x4f1,!![]);break;case _0x66ae08[_0x593716(0x7a8)]:case _0x593716(0x53e):_0x477688['setIn'+'t32'](_0x59c08f,_0x11b294|-0xcdd+0x1*-0x139+-0x70b*-0x2,!![]);break;case _0x593716(0x2fb):_0x477688[_0x593716(0x83a)+_0x593716(0x3f1)](_0x59c08f,_0x11b294,!![]);break;default:_0x477688['setIn'+'t32'](_0x59c08f,_0x66ae08['wUrJL'](_0x11b294,-0x259d+-0x224b+-0x2*-0x23f4),!![]);}return!![];}catch(_0x54c368){return![];}}else{var _0x589011=_0x20f5a1[_0x593716(0x81f)+_0x593716(0x9c1)+_0x593716(0x2ab)]||_0x3c6998[_0x593716(0x81f)+_0x593716(0x27d)]||_0x416d5c[_0x593716(0x2b5)];if(_0x589011)return _0x27465a['sourc'+'e']='windo'+'w\x20glo'+'bal',_0x589011;}}var _0x1e7d10={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':'i32'},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':_0x66ae08[_0x4a04dc(0x7a8)]},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0x4f9e39(_0x2fa7df){var _0x57ad57=_0x4a04dc;if(_0x57ad57(0x3c9)===_0x66ae08[_0x57ad57(0x456)]){var _0x536495='';for(var _0xc57fb0=-0x658*-0x4+-0x36b+0x323*-0x7;_0xc57fb0<_0x2fa7df['lengt'+'h'];_0xc57fb0++){var _0x1aff2e=_0x2fa7df[_0xc57fb0]['toStr'+'ing'](0x21e8+-0x56a+0x97a*-0x3);_0x536495+=(_0x1aff2e[_0x57ad57(0x320)+'h']<0x1bef*0x1+0xc35+-0x2822*0x1?'0':'')+_0x1aff2e;}return _0x536495;}else{var _0x55f773=_0x202452[_0xbf4725];_0x20fe51[_0x57ad57(0x3f5)](_0x55f773+_0x66ae08[_0x57ad57(0x398)]+_0xc737d2[_0x55f773]);}}function _0xe03130(_0x21aa06,_0x542752,_0x36f429){var _0x20f626=_0x4a04dc,_0x53a73e=_0x66ae08[_0x20f626(0xaae)](_0x48ea68);if(!_0x53a73e)return _0x991340['faile'+'d']++,_0x991340[_0x20f626(0x408)+_0x20f626(0x8eb)]=_0x991340[_0x20f626(0x408)+_0x20f626(0x8eb)]||_0x20f626(0x753)+_0x20f626(0x177)+_0x20f626(0x694)+'ty\x20in'+_0x20f626(0x8fd)+_0x20f626(0x97a)+_0x20f626(0xa12)+_0x20f626(0x367)+'\x20via\x20'+_0x20f626(0x4b9)+'me.re'+_0x20f626(0x479)+_0x20f626(0x192)+_0x20f626(0x419)+_0x20f626(0x564)+_0x20f626(0x9d0)+_0x20f626(0x790)+'al',null;if(_0x542752<0x1a4+-0x20ce+0x1f2a||_0x66ae08[_0x20f626(0x650)](_0x66ae08['lYMEZ'](_0x542752,_0x36f429),_0x53a73e[_0x20f626(0x7f4)+'ength']))return _0x66ae08[_0x20f626(0x38b)](_0x20f626(0xa69),_0x20f626(0xa69))?_0x5b23e2[_0x20f626(0x206)]:(_0x991340[_0x20f626(0x5f2)+'d']++,_0x991340['lastE'+_0x20f626(0x8eb)]=_0x991340['lastE'+_0x20f626(0x8eb)]||_0x66ae08[_0x20f626(0x50a)](_0x66ae08[_0x20f626(0x836)](_0x66ae08['ZfKiS'](_0x20f626(0x26e)+_0x20f626(0x1aa),(_0x21aa06+_0x542752)[_0x20f626(0x108)+'ing'](-0x32*0x4b+0x44d*-0x9+0x356b)),_0x20f626(0xa0e)+'\x20heap'+_0x20f626(0x26d)+'0x'),_0x53a73e[_0x20f626(0x7f4)+_0x20f626(0x4b8)][_0x20f626(0x108)+_0x20f626(0x7e9)](-0x12a6+-0x1*-0x26fb+0x1*-0x1445)),null);try{var _0x4e502e=new Uint8Array(_0x36f429);for(var _0x2c3a8e=0x87*0x44+0x1*0x150c+-0x38e8;_0x2c3a8e<_0x36f429;_0x2c3a8e++)_0x4e502e[_0x2c3a8e]=_0x53a73e[_0x20f626(0x6c4)+'nt8'](_0x66ae08['WAKFx'](_0x66ae08['AUQpT'](_0x21aa06,_0x542752),_0x2c3a8e));return _0x991340['ok']++,_0x4e502e;}catch(_0x5e485c){return _0x991340[_0x20f626(0x5f2)+'d']++,_0x991340['lastE'+_0x20f626(0x8eb)]=_0x991340[_0x20f626(0x408)+'rror']||_0x66ae08[_0x20f626(0x76c)](String,_0x5e485c&&_0x5e485c[_0x20f626(0x3a0)+'ge']||_0x5e485c)[_0x20f626(0x688)](0x1631+-0x11c3*-0x1+-0x1*0x27f4,-0x1*0x88a+0x1*-0x722+0x409*0x4),null;}}function _0x170f9a(_0x2c5e0f,_0x3cf671,_0x526836){var _0x49a01f=_0x4a04dc;if('MhrHL'===_0x49a01f(0x2d6)){var _0x168078=_0x1e7d10[_0x526836],_0x4926a1=_0x66ae08[_0x49a01f(0xa35)](_0xe03130,_0x2c5e0f,_0x3cf671,_0x168078['size']);if(!_0x4926a1)return null;var _0x1473af=new DataView(_0x4926a1['buffe'+'r'],_0x4926a1[_0x49a01f(0x2a9)+'ffset'],_0x4926a1['byteL'+_0x49a01f(0x4b8)]),_0x5f3c73=_0x1473af[_0x49a01f(0x896)+_0x49a01f(0x373)](_0x168078['key'],!![]),_0x3bcdde=_0x1473af['getIn'+_0x49a01f(0x373)](_0x168078[_0x49a01f(0x446)+'n'],!![]),_0x51b3bb=_0x66ae08['FfXru'](_0x1473af[_0x49a01f(0x6c4)+_0x49a01f(0xa3c)](_0x168078[_0x49a01f(0x410)+'d']),0x2629*-0x1+0x13b1+0x1279),_0x5325f8=_0x66ae08[_0x49a01f(0x5bd)](_0x526836,_0x66ae08[_0x49a01f(0x8bf)])?_0x1473af[_0x49a01f(0x472)+'oat32'](_0x168078['fake'],!![]):_0x66ae08['kdXvh'](_0x526836,_0x49a01f(0x17f))?_0x1473af['getIn'+_0x49a01f(0x373)](_0x168078['fake'],!![]):_0x1473af['getUi'+_0x49a01f(0xa3c)](_0x168078[_0x49a01f(0x54c)]),_0x527272=_0x1473af['getUi'+'nt8'](_0x168078[_0x49a01f(0x868)+'e'])&0x2410+-0x287*-0x7+-0x35c0;return{'keyAtOffset0':_0x5f3c73,'hidden':_0x3bcdde,'inited':_0x51b3bb,'fake':_0x5325f8,'act':_0x527272,'hex':_0x4f9e39(_0x4926a1),'alt':_0x66ae08['LGGtE'](_0x526836,_0x49a01f(0x17f))?_0x3bcdde^_0x66ae08[_0x49a01f(0x749)](_0x5325f8,-0x2*0x1336+0x1298+0x1b*0xbc):null};}else _0xa5ae6c['on']=![];}function _0x2940b9(_0x30158d,_0x46c808,_0x1090d5){var _0x4dbfb1=_0x4a04dc;if(_0x30158d===_0x66ae08[_0x4dbfb1(0x8bf)])return _0x165421(_0x66ae08['IYowU'](_0x46c808,_0x1090d5));if(_0x30158d===_0x4dbfb1(0x17f))return _0x66ae08[_0x4dbfb1(0x756)](_0x66ae08['rjmKf'](_0x46c808,_0x1090d5),0x7ff*0x2+0x5*-0x28d+-0x1*0x33d);return _0x66ae08[_0x4dbfb1(0x4c0)](_0x66ae08['rjmKf'](_0x46c808,_0x1090d5),-0x1590+0x10f5+0x59a)!==0x11b2+-0x1e53+0xca1?-0x1073*0x1+0x1918+-0x8a4:0x96d*-0x1+0x6ca+0x2a3;}function _0x55c386(_0x2966a4,_0x5b4ed6,_0x1c42c6){var _0x2abe15=_0x4a04dc,_0x25be05=_0x1e7d10[_0x1c42c6];if(!_0x25be05)return null;var _0x55b4da=_0x5b90ef(_0x2966a4+_0x5b4ed6+_0x25be05[_0x2abe15(0x106)],'u8'),_0x559c40=_0x5b90ef(_0x66ae08[_0x2abe15(0x34f)](_0x2966a4,_0x5b4ed6)+_0x25be05['hidde'+'n'],'i32'),_0x16e32b=_0x5b90ef(_0x66ae08['dZtqh'](_0x2966a4,_0x5b4ed6)+_0x25be05[_0x2abe15(0x410)+'d'],'u8'),_0x30d80e=_0x5b90ef(_0x66ae08['DPYpE'](_0x2966a4,_0x5b4ed6)+_0x25be05[_0x2abe15(0x54c)],_0x66ae08[_0x2abe15(0x9ba)](_0x1c42c6,_0x66ae08[_0x2abe15(0x8bf)])?_0x2abe15(0x2fb):_0x1c42c6===_0x2abe15(0x17f)?'i32':'u8'),_0x17ef26=_0x5b90ef(_0x66ae08[_0x2abe15(0x836)](_0x2966a4,_0x5b4ed6)+_0x25be05[_0x2abe15(0x868)+'e'],'u8');if(_0x55b4da===undefined||_0x559c40===undefined||_0x30d80e===undefined||_0x17ef26===undefined)return null;_0x55b4da&=0x253f*-0x1+-0x4*0x66f+0x3ffa,_0x559c40|=-0x2ad*-0x7+0x16*-0xcb+-0x149,_0x16e32b=_0x66ae08[_0x2abe15(0xa4d)](_0x16e32b,-0x11b3*-0x1+-0x199a+0x7e7*0x1)&-0x6de+0x1*0x22e5+-0x1c06,_0x17ef26&=-0x327*0x2+-0x14b0+0x1aff*0x1;var _0x357e58;if(_0x1c42c6==='obfF')_0x357e58=_0x66ae08['IbMuF'](_0x165421,_0x66ae08['nkUyY'](_0x559c40,_0x55b4da));else{if(_0x1c42c6===_0x2abe15(0x17f))_0x357e58=_0x66ae08[_0x2abe15(0x12d)](_0x559c40,_0x55b4da)|0x56b*0x5+-0x177*-0x5+-0x226a;else _0x357e58=((_0x559c40^_0x55b4da)&-0x7*0x235+-0x1733+0x27a5)!==0x22*-0xa4+0x2675+-0x58f*0x3?0x1355+0x16*0xc7+-0x246e:-0x397*0x6+-0x74c*0x1+0x1cd6*0x1;}return{'real':_0x357e58,'fake':_0x30d80e,'act':_0x17ef26,'init':_0x16e32b,'key':_0x55b4da,'hidden':_0x559c40};}function _0x13451b(_0x30d901,_0x3d5921,_0x1dd064,_0x94616c){var _0x2b4585=_0x4a04dc,_0x52c26a=_0x1e7d10[_0x1dd064],_0x54e3a0=_0x66ae08['vyfFT'](_0xe03130,_0x30d901,_0x3d5921,_0x52c26a[_0x2b4585(0xa9a)]);if(!_0x54e3a0)return![];var _0x43a168=new DataView(_0x54e3a0['buffe'+'r'],_0x54e3a0['byteO'+_0x2b4585(0x83f)],_0x54e3a0['byteL'+_0x2b4585(0x4b8)]),_0x382b8e=_0x52c26a['keyTy'+'pe']==='u8'?_0x43a168[_0x2b4585(0x6c4)+'nt8'](_0x52c26a['key']):_0x43a168[_0x2b4585(0x896)+'t32'](_0x52c26a[_0x2b4585(0x106)],!![]),_0x4e8017;if(_0x1dd064===_0x66ae08[_0x2b4585(0x8bf)])_0x4e8017=_0x568945(_0x94616c);else{if(_0x1dd064===_0x2b4585(0x17f))_0x4e8017=_0x66ae08['wUrJL'](_0x94616c,0x22d4+0xda7+-0x1029*0x3);else _0x4e8017=(_0x94616c?-0x517*-0x6+-0x4*0x8cc+0x4a7:-0x11f1+-0xa9e*0x3+0x31cb)&0x15d*-0x13+-0x982+0x2468;}return _0xe6a797(_0x66ae08['QvdDi'](_0x66ae08[_0x2b4585(0x236)](_0x30d901,_0x3d5921),_0x52c26a[_0x2b4585(0x446)+'n']),'i32',_0x4e8017^_0x382b8e)&&_0xe6a797(_0x30d901+_0x3d5921+_0x52c26a['fake'],_0x66ae08[_0x2b4585(0xa33)](_0x1dd064,'obfF')?'f32':_0x66ae08['aZZHQ'](_0x1dd064,_0x66ae08[_0x2b4585(0x17e)])?'i32':'u8',_0x66ae08[_0x2b4585(0x303)](_0x1dd064,'obfF')?_0x94616c:_0x66ae08['JIkSm'](_0x1dd064,_0x2b4585(0x17f))?_0x66ae08['fQwBM'](_0x94616c,-0xd*0x2b3+-0x1ba1+0xdf*0x48):_0x94616c?0x188+0x2*0xf17+0x1fb5*-0x1:-0xcf9+-0x3b9+0x1*0x10b2)&&_0xe6a797(_0x66ae08['WAKFx'](_0x66ae08['oNxEw'](_0x30d901,_0x3d5921),_0x52c26a[_0x2b4585(0x868)+'e']),'u8',-0x7ed+0x8d9+-0xec);}var _0x16a9cd={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0x17593b=0x25*-0x7b+-0x1c2b+0x2df2*0x1+0.03,_0x21d506=0x1*0x26a5+-0xa0a+-0x1c99,_0x40e8ea={},_0x2aa737=-0x1*0x1aa5+-0x1*0x1863+0x3308,_0xc6762a=[],_0x10f096=[];function _0x2536e0(_0x220699){var _0x53313d=_0x4a04dc,_0x3ca7d4={'QAdzf':function(_0x2fc60f,_0x5c55c5){return _0x2fc60f*_0x5c55c5;}},_0x569691=_0x35cfba[_0x53313d(0x1af)+_0x53313d(0x293)+'ler']||[],_0x4ce3d9=[];_0x10f096=[],_0xc6762a=[];for(var _0x209dd3=-0x125b+-0x6bb*-0x2+0x4e5;_0x209dd3<_0x569691['lengt'+'h'];_0x209dd3++){var _0x44a095=_0x569691[_0x209dd3][0x20*-0x106+-0x20b0+0x4170];if(_0x569691[_0x209dd3][-0xb1*-0x2d+-0x24f3+-0xd*-0x73]!=='obfF')continue;var _0x15c101=_0x66ae08[_0x53313d(0xa35)](_0x170f9a,_0x220699,_0x44a095,_0x66ae08[_0x53313d(0x8bf)]);if(!_0x15c101||_0x15c101[_0x53313d(0x410)+'d']!==0x7*0x4b4+-0x15fd+-0xaee)continue;var _0x569dfb=_0x66ae08['kctuH'](_0x2940b9,_0x66ae08['qkwMP'],_0x15c101[_0x53313d(0x446)+'n'],_0x15c101['keyAt'+'Offse'+'t0']);if(typeof _0x569dfb!==_0x66ae08[_0x53313d(0x1c3)]||!_0x66ae08['cPzZt'](isFinite,_0x569dfb))continue;var _0x37cd5d=_0x220699+':'+_0x44a095,_0x4db086=_0x40e8ea[_0x37cd5d];if(!_0x4db086||_0x66ae08[_0x53313d(0x1ba)](_0x569dfb,_0x4db086['lastW'+_0x53313d(0x817)+'n']))_0x4db086=_0x40e8ea[_0x37cd5d]={'base':_0x569dfb,'lastWritten':null};var _0x2c0c39=_0x4db086[_0x53313d(0x62f)],_0x8c9048=Math[_0x53313d(0x810)](_0x2c0c39);if(_0x8c9048<-0x11*0x1af+-0x752+0x23f1+0.0001||_0x8c9048>-0xfe37+0x1*0x3489+-0xa*-0x3b3b){_0x10f096['push']({'o':_0x44a095,'v':_0x569dfb,'why':_0x66ae08['ifVae']});continue;}_0x4ce3d9[_0x53313d(0x3f5)]({'o':_0x44a095,'v':_0x569dfb,'a':_0x8c9048,'base':_0x2c0c39,'key':_0x37cd5d,'st':_0x4db086});}var _0x162e51=[];for(var _0x4b4011=-0xd29+0x1f5c+0x1*-0x1233;_0x66ae08[_0x53313d(0x1a2)](_0x4b4011,_0x4ce3d9[_0x53313d(0x320)+'h']);_0x4b4011++){if(_0x66ae08[_0x53313d(0x922)]===_0x53313d(0x365))return _0x37b822['round'](_0x3ca7d4['QAdzf'](_0x523b7,0x13c2+0x7b*-0x4f+-0x1*-0x1297))/(-0xff+-0x24ef+0x2652);else{var _0x4e9134=_0x4ce3d9[_0x4b4011]['a'],_0x5b6fec=null;for(var _0x401020=0x2*0x12f8+0x608+0x6*-0x754;_0x401020<_0x162e51[_0x53313d(0x320)+'h'];_0x401020++){var _0x427f1c=_0x162e51[_0x401020][_0x53313d(0x27c)]/_0x4e9134;if(_0x427f1c>0x7*0x32b+-0x75a+-0x10f*0xe-_0x17593b&&_0x427f1c<_0x66ae08[_0x53313d(0x17b)](-0x21f8+0x624+0x11d*0x19,_0x17593b)){_0x5b6fec=_0x162e51[_0x401020];break;}}!_0x5b6fec&&(_0x5b6fec={'mean':_0x4e9134,'members':[]},_0x162e51[_0x53313d(0x3f5)](_0x5b6fec));_0x5b6fec['membe'+'rs'][_0x53313d(0x3f5)](_0x4ce3d9[_0x4b4011]),_0x5b6fec['mean']=-0x4f2+-0x337*0x5+0x1505;for(var _0x127d2a=0x1b*-0xd+0xaca*0x1+-0x96b;_0x127d2a<_0x5b6fec[_0x53313d(0x40b)+'rs'][_0x53313d(0x320)+'h'];_0x127d2a++)_0x5b6fec['mean']+=_0x5b6fec[_0x53313d(0x40b)+'rs'][_0x127d2a]['a'];_0x5b6fec[_0x53313d(0x27c)]/=_0x5b6fec['membe'+'rs'][_0x53313d(0x320)+'h'];}}var _0x427f24=[];for(var _0xdac221=0x1f41+0x1a88+0x1*-0x39c9;_0x66ae08[_0x53313d(0x15e)](_0xdac221,_0x162e51[_0x53313d(0x320)+'h']);_0xdac221++){if(_0x66ae08[_0x53313d(0x4ba)]('kvMwz',_0x66ae08['hOCit'])){if(_0x66ae08[_0x53313d(0xa28)](_0x162e51[_0xdac221]['membe'+'rs'][_0x53313d(0x320)+'h'],_0x21d506))_0x427f24[_0x53313d(0x3f5)](_0x162e51[_0xdac221]);}else return new _0xdae31b(_0x3df7fd[_0x53313d(0x8e1)+'r'],_0x17a96d[_0x53313d(0x2a9)+_0x53313d(0x83f)],_0x376735[_0x53313d(0x7f4)+_0x53313d(0x4b8)]);}if(!_0x427f24[_0x53313d(0x320)+'h']){if(_0x66ae08[_0x53313d(0x7d6)](_0x53313d(0x87f),'rKJNj')){var _0x2d3813=_0x190c94['Unity'+_0x53313d(0x166)+_0x53313d(0x540)][_0x53313d(0x4b9)+'me'];_0x2d3813[_0x53313d(0x170)+_0x53313d(0x3ea)+'g']=_0x214572+':'+_0x5322fe[_0x53313d(0x9e3)+'m']()[_0x53313d(0x108)+_0x53313d(0x7e9)](-0x1f1a+-0xd*-0x70+0x198e)['slice'](-0x19*-0x6c+0x62f+-0x10b9,0x1a66+-0x2653+-0x1*-0xbf7),_0x563a36=_0x2d3813['__sak'+'uraTa'+'g'];}else{_0x10f096['push']({'o':-(0x4d1+0x11*0xb8+0x368*-0x5),'v':0x0,'why':_0x66ae08['Zjhww']('no\x20gr'+_0x53313d(0x3ce)+'f\x20'+_0x21d506,_0x53313d(0x917)+'uredF'+_0x53313d(0x914)+'\x20agre'+'ed')});return;}}var _0x4a33e9=_0x427f24[0x189f+-0x8ac+0x3*-0x551]['mean'];for(var _0x135ad4=0x19*-0x1a+-0x5d*-0x42+-0x1570;_0x135ad4<_0x427f24['lengt'+'h'];_0x135ad4++)if(_0x427f24[_0x135ad4][_0x53313d(0x27c)]<_0x4a33e9)_0x4a33e9=_0x427f24[_0x135ad4][_0x53313d(0x27c)];var _0x482dcd=_0x66ae08['PQRUf'](_0x4a33e9,0xf*-0x5e+0x6be+0x2*-0x9e+0.5);for(var _0xe1ae44=0x2205*0x1+0x1436+-0x363b*0x1;_0xe1ae44<_0x162e51[_0x53313d(0x320)+'h'];_0xe1ae44++){if(_0x66ae08[_0x53313d(0xa28)](_0x162e51[_0xe1ae44]['membe'+'rs'][_0x53313d(0x320)+'h'],_0x21d506))continue;for(var _0x26769f=0xc23+-0x7*0xd+0x1a*-0x74;_0x26769f<_0x162e51[_0xe1ae44]['membe'+'rs']['lengt'+'h'];_0x26769f++){if('VExoP'!==_0x66ae08[_0x53313d(0x6a9)]){var _0x4f594f={'hPGEM':function(_0x56273b,_0xab227e){return _0x66ae08['wLOMb'](_0x56273b,_0xab227e);},'fGsVr':function(_0x32c07a,_0x3a9b1c){var _0xf79c50=_0x53313d;return _0x66ae08[_0xf79c50(0x257)](_0x32c07a,_0x3a9b1c);}},_0x5464a7=_0x1b2b08[_0x1158ce]['xyz']||[_0x427c9c[_0x55129d]['v'],0x417+-0x98*-0x19+0x12ef*-0x1,0x1bc7+0x5*0x14+0x1c2b*-0x1];return _0x5464a7['map'](function(_0x201314){var _0x27e664=_0x53313d;return _0x4f594f[_0x27e664(0xa57)](_0x11ce05['round'](_0x4f594f[_0x27e664(0x565)](_0x201314,0x21be+0x1fcf+0x94f*-0x7)),-0xe3c+0x15fa*0x1+-0x75a);})[_0x53313d(0x1ed)]('\x20\x20');}else _0x10f096[_0x53313d(0x3f5)]({'o':_0x162e51[_0xe1ae44]['membe'+'rs'][_0x26769f]['o'],'v':_0x162e51[_0xe1ae44]['membe'+'rs'][_0x26769f]['v'],'why':'singl'+_0x53313d(0x523)});}}for(var _0xef54b2=-0x149+0x1*0x179f+0x1*-0x1656;_0xef54b2<_0x427f24['lengt'+'h'];_0xef54b2++){if(_0x53313d(0x5bc)===_0x53313d(0x66a))try{_0x3759e6[_0x53313d(0x7c1)][_0x444032]();}catch(_0x41ddaa){}else{var _0x385bb5=_0x427f24[_0xef54b2]['membe'+'rs'];for(var _0xc3b85d=0x1334+0x4a2+0x6*-0x3f9;_0xc3b85d<_0x385bb5[_0x53313d(0x320)+'h'];_0xc3b85d++){var _0x3d3440=_0x385bb5[_0xc3b85d];if(_0x3d3440['a']<_0x482dcd){_0x10f096[_0x53313d(0x3f5)]({'o':_0x3d3440['o'],'v':_0x3d3440['v'],'why':_0x66ae08[_0x53313d(0x94c)]+_0x482dcd[_0x53313d(0x626)+'ed'](-0x74*-0x5+0x1d*-0x88+-0x176*-0x9)});continue;}var _0x5ea44f=_0x3d3440['base']*_0x16a9cd[_0x53313d(0x576)+'r'];if(_0x66ae08['rGNYs'](_0x13451b,_0x220699,_0x3d3440['o'],_0x66ae08['qkwMP'],_0x5ea44f)){if(_0x66ae08['sgspR']===_0x66ae08[_0x53313d(0xa50)])_0x3d3440['st'][_0x53313d(0x842)+_0x53313d(0x817)+'n']=Math[_0x53313d(0x261)+'d'](_0x5ea44f),_0x2aa737++,_0xc6762a['push']('0x'+_0x3d3440['o'][_0x53313d(0x108)+_0x53313d(0x7e9)](-0xf6a*-0x1+-0x1188+0x3e*0x9));else return _0x66ae08['dZtqh']('0x',_0x42f344['o']<-0x2470+-0x1*0xead+0x1*0x331d?'?':_0x38b77e['o'][_0x53313d(0x108)+_0x53313d(0x7e9)](0x212*0x8+0x1df0*0x1+0x8*-0x5ce))+'\x20('+_0x2cbdc0[_0x53313d(0x926)]+')';}}}}}var _0x35cfba={'FPScontroller':[[-0x13df*-0x1+-0x1384*-0x1+-0x1*0x2753,_0x66ae08['qkwMP']],[-0x1a27+0x1d6e+0x11*-0x2f,_0x66ae08['qkwMP']],[-0x18b+-0x2db*0x1+0x4a6,_0x66ae08[_0x4a04dc(0x8bf)]],[0x22b6+0xa*-0x10e+0x17d2*-0x1,'obfF'],[0x50c+-0x375+-0x127,_0x4a04dc(0x6d2)],[0x2423+0x1*0x1e32+-0x41cd,_0x4a04dc(0x6d2)],[-0xd8b+-0x16*0x1d+0x10a9,_0x4a04dc(0x6d2)],[-0x1*-0xb83+0xc51*-0x2+0xdd7,_0x4a04dc(0x3db)],[0x1*-0xdb7+0x1*0x204e+0x1fb*-0x9,_0x66ae08[_0x4a04dc(0x8bf)]],[0xa33+-0x13e9+0xa92,_0x66ae08['SDDhU']],[-0x2533+-0x2*-0xf10+-0x5*-0x197,'v3'],[-0x1*0x1dd0+0x1d44+0x178,'u8'],[-0x14e*-0x13+0x7a*-0x1+-0x1760,'obfF'],[-0x14d7+-0x1512+0x2af1,_0x4a04dc(0x2bb)],[0x2f6*-0x9+0x2f5*0x1+-0x3*-0x83f,'u8'],[-0x1d0f+-0x44d*-0x7+0x4,_0x4a04dc(0x2bb)],[-0x1697+0x28c*-0x9+0x2e97,'u8'],[0x1606+0x2419*-0x1+0x1e5*0x8,'u8'],[0x1*0x1c65+-0x3ed+-0x1*0x175c,_0x4a04dc(0x6d2)],[-0x1*-0x260f+-0x35c+-0x31*0xaf,_0x66ae08[_0x4a04dc(0x8bf)]],[-0x2504+-0x231e+0x496e,_0x4a04dc(0x2fb)],[-0x503*0x2+-0x7*-0x125+0x17*0x25,_0x66ae08[_0x4a04dc(0x71a)]],[0xc33+0x228c+-0x2d6b,'v3'],[-0x9c1+-0x1ee7+-0x14*-0x21a,'v3'],[-0x2037*0x1+-0x627+0x27ca,'f32'],[-0x12*0x16+0x1068+-0xd6c,_0x4a04dc(0x2fb)],[0x1e9*0x13+-0x19*0xb+-0x21b0,'u8'],[0x6*-0xa4+-0x1f38+-0x249c*-0x1,_0x66ae08[_0x4a04dc(0x71a)]],[-0xdd3*-0x1+-0x443*-0x3+0x1904*-0x1,'v3'],[-0x9d5+0xc4+0xab5,'u8'],[0x13ed+-0xd7*0x25+-0x2f*-0x46,_0x4a04dc(0x2fb)],[-0x25ee+-0x149c*-0x1+0x130a,_0x66ae08['OuARl']],[-0x38*-0x7b+0x18d7+-0x3203,'u8'],[-0xf9d*-0x2+-0x2593*-0x1+-0x128*0x3a,'u8'],[-0x16*-0x8+0xdf*0x24+0x1e4c*-0x1,'obfF'],[0x1*-0x115+-0xc8*0x1+-0xd*-0x49,_0x66ae08[_0x4a04dc(0x71a)]],[-0x1439+-0xfec+0x1a7*0x17,'u8'],[-0x1ea5+-0x14df+0x3564,_0x66ae08['qkwMP']],[-0x45*0x18+-0x1f14+0x2784,'v3'],[-0x1db0+-0x121d+0x31d5,'obfB'],[0x1d17+0x61f+-0x211e,_0x66ae08['OuARl']],[-0x4*-0x247+-0x11bf+-0x7*-0x189,_0x66ae08[_0x4a04dc(0x71a)]],[-0x670+0x2b*-0x17+-0xc99*-0x1,'f32'],[-0x1*0x1549+-0x1c4*-0x2+0x1411,_0x4a04dc(0x2fb)],[-0x1067+-0xbda*0x1+0x1e95,_0x66ae08['OuARl']],[0x1af9+0xe3*-0xb+-0xee0,_0x66ae08[_0x4a04dc(0x71a)]],[-0x1*-0x791+0x2034+0x3d*-0x9d,'u8'],[0x1*-0x17f+-0x4*-0x62a+0x2c*-0x79,'u8'],[-0xb8d*-0x1+-0x190d+0x1*0xfde,'u8'],[0x1a5*-0x3+-0x6*-0x5b3+-0x1ae3,'f32'],[-0x938+0x10*0x133+-0x184*0x5,'u8'],[0x177*0x6+-0x1*0x2524+0x1ebf*0x1,'u8'],[0x1*-0x1714+-0x11*0xd1+0x275d*0x1,_0x4a04dc(0x2fb)],[0x4*-0x24a+-0x10be+0x1*0x1c52,'f32'],[-0x1d*0xf6+0x4e8*0x3+0x85*0x1e,_0x66ae08['OuARl']],[-0x25d5+-0x19*-0x6d+-0x1*-0x1da4,_0x66ae08[_0x4a04dc(0x71a)]],[0xa16+-0xabe+0x320,_0x4a04dc(0x2fb)],[0xd7+0x65a+-0x4b5,_0x66ae08[_0x4a04dc(0x71a)]],[-0xede+-0x1f3e+0x309c,'f32'],[-0x22*0x5+0xf5f*0x1+-0xc31,'v3'],[-0x206a+-0x234f+0x15*0x359,'u8'],[0xd5e+-0xbfa+-0x4d*-0x4,'v3'],[-0xfcc*0x1+-0xb03*-0x1+0x1*0x76d,_0x4a04dc(0x2fb)],[0x1936+0x392+-0x1a1c,'v3'],[-0x1*0x2070+-0x19*0x18d+0x49ed,_0x66ae08[_0x4a04dc(0x71a)]],[-0x1b89+0xf5f*0x1+-0x1*-0xee6,_0x66ae08[_0x4a04dc(0x71a)]],[0x23ab*-0x1+0xa93+-0x18c*-0x12,'f32'],[-0x68*-0x1d+-0xdcf+-0x1*-0x4cb,'u8'],[0x1*-0x159+-0x2204+0x2622,'u8'],[-0x612+-0x8c+0x966,'f32'],[0x793+-0x18e7+-0x1*-0x1430,'f32'],[-0xdd+-0x1*0xc0b+0xfcc,'v3'],[0x3b*-0x83+0x24ff+-0x3de,'v3'],[-0x5bc*0x6+0x1fa2+0x86*0xb,_0x4a04dc(0x2fb)],[0x13c7+-0xbe3+0x4*-0x139,_0x66ae08['OuARl']],[0xd7a+-0x92a*-0x1+0x10*-0x13a,_0x66ae08['OuARl']],[0x7c6+-0x7c4+0x306,'f32'],[0x347*0xb+-0x3*-0x47d+-0x2e78,'v3'],[0x2*0xb3e+0x1941+-0x2ca5,'u8'],[0xc14+0x1a6f+-0x2367,'v3'],[-0x4*0x992+-0xe*-0x17e+-0x2*-0xa46,_0x66ae08[_0x4a04dc(0x7a8)]],[0x1bb4+0xbc*-0x9+-0x2*0x8f6,_0x66ae08['OuARl']],[0xf1+0x1*0x20e7+-0x1ea8,_0x4a04dc(0x2fb)],[-0x184c+0x2451+-0x8d1,_0x4a04dc(0x2fb)],[0x543+-0x2491+-0x2*-0x1145,_0x66ae08['OuARl']],[-0x238d+-0x5*-0x175+0x1f84,'u8'],[-0x52*-0x59+0x1a6*0x10+-0x33a1,'u8'],[-0x40c+-0x1f30+-0x66c*-0x6,'u8'],[0x212*-0x10+0x26*0xc1+-0xb5*-0xb,'u8'],[-0x1234+0x139*-0x17+-0x4d*-0xa5,'u8'],[0x1225+0x1f11*0x1+0x5e*-0x7d,'f32'],[0x1b10+-0xd5f+-0x7*0x17b,_0x4a04dc(0x2fb)],[0x5*-0x51d+-0x10f+0x8*0x3bf,_0x66ae08[_0x4a04dc(0x71a)]],[-0x519*-0x4+0x132e+-0x2436,'f32'],[0x25c3*-0x1+0x1d*-0x38+0x2f7b,'f32'],[-0x8b0+-0x3*-0xc09+-0x1807,'u8'],[0x19e2+0x1d68+-0x1ca*0x1d,'f32'],[-0x460+0x245f+-0x1c93,'f32'],[0x12e3*-0x1+0xe87+0x7cc,'u8'],[0x6*0x51e+-0xc04*-0x1+-0x2740,'v3'],[0x14cd+-0x267c+-0xc9*-0x1b,'v3'],[-0x13a9+-0x1d*0x1d+-0xd*-0x20a,'v3'],[-0x14fa+0x15b2+-0xb9*-0x4,'f32'],[-0x209d+0xb4b+-0xc79*-0x2,_0x4a04dc(0x2fb)],[0x1*-0x3d1+0x6f3+0x82,_0x4a04dc(0x2fb)],[0x2eb+-0x314*-0x2+-0x49*0x13,'v3'],[-0x63*0x2f+-0x25*-0x3+-0x225*-0xa,_0x4a04dc(0x2bb)],[-0x134c+-0x8e*0x1c+0x268c*0x1,'u8'],[-0x3*0x997+0xf01+-0x8*-0x230,'i32'],[-0xf1e*0x1+-0x1915+0x1*0x2bf3,_0x4a04dc(0x2fb)],[0x202b+0x1*-0x8f9+-0x136e,_0x66ae08['OuARl']],[0x11e4+0x46e+-0x128a,_0x66ae08[_0x4a04dc(0x71a)]],[0x1c89*0x1+0x1905+0x31c2*-0x1,'f32'],[0x1598+-0x5*0x6a3+0xf67*0x1,'v3'],[-0xcc1+0x30b*0xc+-0x13e7,_0x66ae08[_0x4a04dc(0x7a8)]],[0x2dc+0x2e0*-0xb+-0x829*-0x4,'u8'],[-0x217*0x1+0x1c*-0x40+-0x4*-0x33e,'u8'],[0xfa9+0x8e8+0x161*-0xf,'u8'],[0x183f*-0x1+-0x12c2*-0x2+0x31*-0x31,'f32'],[-0x1c77+0x1c09*-0x1+-0xf1a*-0x4,_0x4a04dc(0x2bb)]],'HealthScript':[[-0x31*-0x47+-0x13f9+0x6ba,'u8'],[-0x5c5+-0x1f6a+0x258b,'i32'],[-0x1*-0x26e9+0x1257+-0x38c0,_0x66ae08['OuARl']],[-0x2390+-0x1bf5+0x4009,_0x66ae08['OuARl']],[-0x11bc+0x1*0xe6e+0x3d6,_0x4a04dc(0x2fb)],[-0x126f+-0x17d6+0x1*0x2ad1,_0x66ae08[_0x4a04dc(0x71a)]],[0x153+0x2a*-0x76+-0xcf*-0x17,_0x66ae08[_0x4a04dc(0x71a)]],[0x204b+-0x1ad2+-0x4e5*0x1,_0x4a04dc(0x2fb)],[0x1*-0x782+0xd*-0x1ef+0x2145,_0x4a04dc(0x2bb)],[-0x1*-0xe5d+-0x1*-0x131e+0x20d7*-0x1,_0x4a04dc(0x2bb)],[0x1d*-0x2f+-0x264+0x85f,'u8'],[0xc1*-0x29+0x2504+-0x572,'u8'],[0x1a8f*0x1+-0xc9b+-0xd4a,'u8'],[-0x5*0x4b4+-0x159a+0x2dc9,'u8'],[0x8f*-0x37+-0x3af*0x1+0x2328,_0x4a04dc(0x17f)],[0x34+0xca2+0x1*-0xc02,_0x4a04dc(0x17f)],[-0x35+0x169e+-0x1581,_0x4a04dc(0x17f)],[-0x113d+-0x2f0*-0xa+-0x5*0x23b,_0x4a04dc(0x17f)],[0xdcc+0x461*0x1+0xd*-0x151,_0x66ae08['Ryxyj']],[-0x182c+0x1*-0x220a+0x3b5a,_0x66ae08['IpUFZ']],[-0x1d7*-0xf+0x123+-0x1b8c,_0x66ae08['qkwMP']],[0x974*-0x4+-0x179f+0x3eb7,'f32'],[0x1*-0x3d7+0x116*0x1+0x1*0x40d,_0x66ae08['OuARl']],[0x1*0x1efd+0x21a2+0x355*-0x13,_0x66ae08['OuARl']],[-0x178a+-0x1d9f+0xd*0x431,_0x66ae08[_0x4a04dc(0x71a)]],[-0x121*0xa+0x16ef*-0x1+0x2395,_0x66ae08[_0x4a04dc(0x71a)]],[0x2033+0x89e*0x3+0xb*-0x527,'v3'],[-0x1818+0x39*0x5b+0x545*0x1,_0x66ae08[_0x4a04dc(0x71a)]],[0x2*0x12cb+0x1ce3+0x3*-0x15ab,_0x4a04dc(0x2fb)],[-0x5*0x611+0xb23+-0x2*-0xa59,'u8'],[0x1491+-0x117*0xd+-0x1*0x4da,'u8'],[0x1dba+-0xdcd*0x1+0x1*-0xe5d,_0x4a04dc(0x2bb)]],'PlayerConfig':[],'WeaponManager':[[-0x16bb+0xf8d*0x2+-0x847,'i32'],[0x20df+0x5*0x4a8+-0x380b,'i32'],[-0x2245+-0x2d4*0x3+0x3*0xe4b,'u8'],[-0xc7*0x1d+-0x3*0x4c5+0x24fe,_0x66ae08['SDDhU']],[-0x366+-0x2643+0x1*0x2a0d,'obfF'],[0x25d4+-0x25b+-0x2b1*0xd,_0x66ae08[_0x4a04dc(0x71a)]],[0x1440+-0x2698+0x12dc,_0x66ae08['SDDhU']],[-0xe21+-0x9b+0xf44,'u8'],[0x11eb+0x2564+-0x36c6,'u8'],[0x7a2*0x3+-0xde3+-0x877,_0x4a04dc(0x2bb)],[0x9c6+-0x2306+0x19d0,_0x66ae08[_0x4a04dc(0x71a)]],[-0x1edc+-0x4*0x329+-0xa6*-0x44,_0x66ae08['OuARl']],[-0x24c7+-0x262d+-0x974*-0x8,_0x66ae08['SDDhU']],[-0x820*0x4+-0x114a*0x2+0x43d0,'u8'],[0x1a3e+0x47e+-0x1de0,_0x66ae08[_0x4a04dc(0x17e)]],[-0x5*0x4dd+0xdd5*0x1+0xb6c,'obfI'],[-0xaa9*0x1+-0x965+0x1512,'f32'],[0x1982*-0x1+0x4a3*0x7+-0x5eb,_0x66ae08['OuARl']],[-0x11b*0x3+0x5ec+-0x18f,'f32'],[0x12ce+0x11*-0x75+0x5*-0x1fd,_0x4a04dc(0x2fb)],[0x10d9*0x1+-0x215a+-0x11a1*-0x1,_0x66ae08[_0x4a04dc(0x71a)]],[-0x791*0x5+0x5d0+0x212d,'u8'],[0x1bd*-0x12+-0x681+0x26f7,'obfI'],[-0x1de4+0x6a*-0x12+0x2698,'obfI'],[0x370+0x1ea1+-0x20bd,'obfI'],[0x1b9f+-0xb*0x1d6+-0x605,_0x66ae08[_0x4a04dc(0x6e3)]],[0x5*0x3d1+0x1*0x1609+0x1*-0x27aa,'obfB'],[0x14b4+0x1309+-0x263d*0x1,_0x4a04dc(0x3db)],[0x1*-0x926+0x1e71+-0x13bf,_0x4a04dc(0x3db)],[-0x2*0x24a+-0xad*-0x25+-0x12c9,_0x4a04dc(0x3db)],[0x20ed*-0x1+-0x852+0x1*0x2aef,_0x66ae08[_0x4a04dc(0x17e)]],[0x1731+-0xf2b*-0x1+-0x2490,'i32'],[0x90b*0x2+0x24ba+0x6a0*-0x8,'u8'],[0x76a+0xfb9+0x443*-0x5,_0x4a04dc(0x2bb)],[0x878+0x8*0x1e8+-0x15e0,_0x4a04dc(0x2bb)],[0x198a+0x4*0x536+0x2*-0x1631,_0x66ae08['SDDhU']],[-0xe71+0x3d2+0xcb3*0x1,'u8'],[-0x2606+0xb49*0x1+-0x23*-0xd3,'u8'],[-0x17b4*0x1+-0x1*0x2ed+-0x236*-0xd,'u8'],[0x21d0+0x7de+-0x2790,'u8'],[-0x237+0x715*0x3+0x9*-0x1e1,'u8'],[-0x2091+0x1*0xd21+0x8*0x2b8,_0x66ae08['SDDhU']],[-0x39b*0x1+0x23b+-0x1c*-0x22,'u8']],'GG_GameManager':[[-0x1*0x916+0x2*0x229+0x4e8,'u8'],[0x17e*-0xd+0xef0*0x2+-0xa4e,'f32'],[0x188c*0x1+-0x81*0x45+-0x3*-0x37f,'u8'],[-0x14a+-0x5*0x43f+0xb65*0x2,'u8'],[-0x2292+0x1158+0x1182,_0x66ae08[_0x4a04dc(0x71a)]],[-0x3*0x3f5+0x4c*-0x2c+0x193b,_0x66ae08['OuARl']],[0x69e*-0x1+0xec+0x602,_0x66ae08['SDDhU']],[0x16e1+0xf03+0x964*-0x4,_0x66ae08['SDDhU']],[-0x2410+-0x4cf*0x1+-0x1*-0x2937,'u8'],[0xb*-0x1+0x10d*0x23+-0x2448,'u8'],[0xac1*0x2+-0x27d+-0x128d,_0x66ae08['OuARl']],[0x990+-0x17a2+0x12*0xcf,_0x66ae08[_0x4a04dc(0x71a)]],[-0x17de+-0x7c3+0x2031,_0x66ae08['SDDhU']],[-0x2f5*-0x7+-0x1a8+0xa3*-0x1d,'u8'],[0x10d9+0x1*0x17c3+-0x27e8,_0x66ae08[_0x4a04dc(0x7a8)]],[-0x2459+0xf7e+0x1597,'i32'],[-0x20aa+0x259e+-0x10d*0x4,_0x4a04dc(0x2bb)],[-0x7a3*-0x1+0x268+-0x1*0x923,_0x66ae08[_0x4a04dc(0x17e)]],[-0x2*0x1307+-0x1*-0x13a5+0x1365,_0x66ae08[_0x4a04dc(0x17e)]],[-0x5*-0x3ad+-0x1*0x1bcb+0xa7a,_0x4a04dc(0x17f)],[0x2556+0x1*-0x1601+0x7d*-0x1d,'u8'],[-0x1*-0x935+0x1*0x5cc+-0xdd1,_0x4a04dc(0x2bb)],[-0x6*0x505+0x3ea*-0x1+-0x8db*-0x4,'u8'],[0xf59*-0x2+-0x1d19+0x273*0x19,'f32'],[0x1ccc+-0x1*-0xf6b+-0x2ab7,'u8'],[-0x43e*0x1+0x107a+-0xab4,'u8'],[0x23b9+-0x1a63+-0x7b2*0x1,'u8'],[-0x410+0x1df+0x3d9*0x1,_0x4a04dc(0x2bb)],[-0x178+0xaf5+-0x29b*0x3,'f32'],[-0x83*0x2b+-0x388+0x3*0x913,'u8'],[-0x1bb8+-0x2626+0x438f,'u8'],[0x1e51+-0xb1f+0x8bd*-0x2,_0x4a04dc(0x2bb)],[-0x16d9+0x1c9*-0xd+-0x3*-0xfee,_0x4a04dc(0x2bb)],[0x1ef3+0x2*-0x3eb+0x155d*-0x1,_0x4a04dc(0x2fb)],[0x169+0x4e+0xd,'i32'],[0x20eb+-0x239*0x11+0x6a6,_0x4a04dc(0x2fb)],[0x17*0xeb+-0x1c90+0x315*0x3,'i32'],[-0x371*0x3+0x2*-0x833+-0x1*-0x1c89,_0x4a04dc(0x2bb)]],'TDM_GameManager':[[-0x1*-0x907+0x1*0x23c6+-0x8f1*0x5,'u8'],[0x59*-0x30+0xaac+0x189*0x4,'u8'],[0x9d*-0x7+-0x11*0x177+-0x1d53*-0x1,'u8'],[-0x5b*-0x1a+-0x1e07+0x14ed,_0x4a04dc(0x2fb)],[-0xd*0x10c+0x4*0x7b9+0x1*-0x10f0,'u8'],[0x266+-0x4*0x3da+0xd5e,'f32'],[-0x8f9*0x1+-0x6d2+-0x1*-0x102b,_0x66ae08[_0x4a04dc(0x71a)]],[0x4*-0x2b6+-0x270a*-0x1+0xde7*-0x2,'i32'],[0x6e*-0x53+-0x2*-0x248+0xfc1*0x2,_0x4a04dc(0x2bb)],[-0x1*-0x3ea+0x269a+-0x2a18*0x1,'u8'],[0x1287+0xdd2+0x9*-0x38c,'u8'],[-0xcd5+0x49*-0x1f+0x161c,_0x4a04dc(0x2fb)],[0x7*-0x39d+-0x13ac+0x97*0x4d,_0x66ae08[_0x4a04dc(0x71a)]],[0xe26+-0xb92+-0x21c,'i32'],[0xf0c+-0x8b*-0x22+-0x20f6,'u8'],[-0x180e*-0x1+-0x12e6+-0x498,_0x4a04dc(0x17f)],[-0x19c1+0x8a3+0x11f6,_0x4a04dc(0x17f)],[-0x1*0x1cf6+0x59f+0x1843,_0x4a04dc(0x17f)],[0x75*0x8+-0xeca+0xc22,_0x4a04dc(0x17f)],[0x56*-0x13+0x1cb4+0x1*-0x153e,'u8'],[0x1*0x3c5+-0x14a8+-0x1b*-0xad,'u8'],[0xbab*0x1+-0xbdd*-0x2+0x2205*-0x1,_0x4a04dc(0x2bb)],[0x1678+0x1*-0x2f1+-0x121b,'u8'],[0x20f*0xb+-0x21fb*-0x1+-0x371c*0x1,'u8'],[0x2003+-0x1*-0x2524+0x439f*-0x1,_0x4a04dc(0x2fb)],[-0x2214+-0x60b+0x29ab,_0x4a04dc(0x2bb)],[-0xa04+0x135a*0x1+-0x7c6,_0x66ae08[_0x4a04dc(0x7a8)]],[0x1*-0x1e43+0xb23*-0x2+-0x7bb*-0x7,_0x66ae08['OuARl']],[0x2*-0x1039+0x184e+0x9bc,_0x66ae08[_0x4a04dc(0x7a8)]],[0xa*0x2d1+-0x26a+-0x1824,_0x66ae08[_0x4a04dc(0x7a8)]],[0x238f+-0x22e2+0xf3,_0x66ae08[_0x4a04dc(0x71a)]],[-0x18a4+0x20e4+-0x69c,_0x4a04dc(0x2fb)],[0x52*-0xe+0x8+0x61c,'i32'],[-0x1c35+0x21c2+-0x3dd,'u8'],[0x1*0x14e6+-0x3*0x95e+0xb*0xcf,'u8'],[0xcc2+-0x119d*-0x1+0x32f*-0x9,_0x66ae08['OuARl']]],'PhotonNetworkSync':[[0x27*-0xe1+-0x64*0x43+-0x1*-0x3ca7,'v3'],[-0x1167+-0x543*0x1+0x1a3*0xe,'i32'],[-0x1e0f+-0x363+0x21b6,'u8'],[-0xb*0x336+-0x112a+0x34c1,'u8'],[-0x1f1+0xf3a+-0xd01,'v3'],[0x1*0xf4b+-0x1*0x1f37+-0x10*-0x104,'u8'],[0x1*0x1a0c+0x1706+-0x30ba,_0x66ae08[_0x4a04dc(0x7a8)]],[0x275+-0x270+0x1*0x57,_0x66ae08['SDDhU']],[0x2452+-0x1dca+-0xc5*0x8,_0x66ae08[_0x4a04dc(0x71a)]],[-0x177d+0x1e29+0x3*-0x218,_0x4a04dc(0x2fb)],[-0x779*-0x5+0xfe7+0x34dc*-0x1,_0x4a04dc(0x2fb)],[0xf9*-0x18+-0xcd*-0xb+-0xef5*-0x1,'v3'],[0x2df*-0x8+-0x1*-0x8ad+0xec3*0x1,_0x66ae08[_0x4a04dc(0x71a)]],[0x1c15+0x7*0x10f+-0x2302*0x1,_0x66ae08[_0x4a04dc(0x71a)]],[0x1995+-0x2033*0x1+0x71e,'i32'],[0x1*-0x8fe+0xc*-0x224+0x2336,'f32']],'MouseLook':[[-0x2662+0xe9*-0x9+0x2ea7,_0x4a04dc(0x2fb)],[-0x1ad*-0xc+-0x21e5+0xde1,_0x4a04dc(0x2fb)],[-0x4db*-0x8+0xa1*-0x1+-0x261b,_0x4a04dc(0x2fb)],[-0x5cd+0x1*0x1eeb+-0x1c9*0xe,_0x66ae08[_0x4a04dc(0x71a)]],[-0x16a2+-0x13e1+0x2aa7,'f32'],[0xf0e+0x1d32*-0x1+0xe4c,_0x66ae08['OuARl']],[-0x2527+0x10*-0x1a+0x26f7,_0x66ae08['OuARl']],[0x1b2+0x6b7+-0x835,'u8'],[-0x1bd4+-0x1bb3+-0x37bf*-0x1,_0x66ae08[_0x4a04dc(0x71a)]],[-0xb48+0x1ea5+-0x1321,_0x66ae08[_0x4a04dc(0x71a)]],[0x480*-0x8+-0x1e17*-0x1+0x629,_0x4a04dc(0x2bb)],[0x1e0b+0x20e7*-0x1+0x320,'u8'],[-0x23d1+0x20d9+-0x10*-0x34,'v2']],'NetworkPlayerAnimations':[[-0x1*0x239b+-0x234b+0x478e,'v3'],[-0x100c+-0x19b6+0x2a76,'v3'],[0x1e7*-0x7+0xb3*-0x16+-0x15*-0x167,'u8'],[0xd*-0x10b+0x239b+0x1c6*-0xc,_0x66ae08[_0x4a04dc(0x7a8)]],[0x7a7+-0x55+-0x68a,_0x4a04dc(0x2bb)],[-0x1*0x290+-0x24f3+0x284f,'f32'],[-0x2606+0x205d*-0x1+0x1*0x4733,_0x66ae08[_0x4a04dc(0x71a)]],[0x1735+-0x141+-0xe1*0x18,_0x66ae08[_0x4a04dc(0x71a)]],[-0xe7c+-0x1*-0x36e+-0x5f7*-0x2,_0x66ae08[_0x4a04dc(0x71a)]],[0x92e*-0x2+-0x1127+-0x246b*-0x1,_0x4a04dc(0x2fb)],[-0x1536+0x27*-0x30+0x1d72,_0x4a04dc(0x2fb)],[-0x452+0xcce+-0x78c,_0x66ae08['OuARl']],[-0xa6b+0xa45*0x1+0x11a,_0x4a04dc(0x2fb)],[0x1de9+0x16f*0x16+-0x3c7b,_0x66ae08['OuARl']],[-0x2*-0xbb7+-0x1*0x1345+0x10f*-0x3,'f32'],[0x9d*-0x3a+0x3*0x4a8+0x169a,_0x66ae08[_0x4a04dc(0x71a)]],[-0x1*-0x243d+0x2d*-0x5+-0x2258,_0x4a04dc(0x2fb)],[0xce4*0x1+-0x4ec+-0xde*0x8,'i32'],[0x1d*-0x4c+-0x1195+-0x13*-0x16f,'u8'],[-0x3*0x5cb+0x8*0x5d+-0x1*-0xf89,_0x66ae08['SDDhU']],[-0x5c4+0x1*-0x1c48+-0x10*-0x232,_0x4a04dc(0x2bb)],[0xd19+0x1a1*-0x3+-0x71e,'u8'],[0xf*-0x161+0xf7*0xb+0x6*0x1dd,_0x66ae08['OuARl']],[0x262f+-0x3e3+-0x1*0x212c,_0x4a04dc(0x2fb)],[-0x55b*-0x7+-0x161*-0x11+-0x3bca,'f32'],[-0x1bbf+0x19*-0xa6+0x2d1d,_0x4a04dc(0x2fb)],[-0xa27+-0x7*0x2d4+0x1f*0x101,'u8'],[0x57*-0x1c+-0x2199+-0xec7*-0x3,'u8'],[-0x72f+0x26ea+-0x1e7f,'v3'],[0x1539+-0x1763+-0x3f*-0xe,'v3'],[-0x1*-0x99+0x3*-0x44+0x5*0x5b,'u8']],'NPC_Cotroller':[[0x922*-0x1+-0x22e9+0x2c1f,'v3'],[0x20da+-0x25ad+0x4f3,_0x66ae08[_0x4a04dc(0x71a)]],[0xbe+-0x253f+-0xc37*-0x3,_0x4a04dc(0x2fb)],[-0x180*-0xa+-0x232f*0x1+0x1485*0x1,'u8'],[-0x25d+0x1*-0xeda+-0xd6*-0x15,'u8'],[-0xe50+-0x47f+0x2bd*0x7,'v3'],[-0x1*-0xdd5+-0xc6b+0x2*-0x67,'u8'],[0x1*0x8b+-0x701+0x716,'f32'],[-0x1*-0x238a+0x1d2e+0x200a*-0x2,_0x66ae08['OuARl']],[-0x4*-0x6b1+0x47*0x13+0x1f51*-0x1,'f32'],[-0xf6b*0x1+-0x1e27+0x2e4e,_0x66ae08[_0x4a04dc(0x71a)]],[0x1fbd+-0x124d+-0xca8,'u8'],[-0xcac+-0x9f3*-0x1+0x385,_0x4a04dc(0x2fb)],[-0x10e2+-0xfa3*0x1+0x215d,'f32'],[-0x15fa+-0x17c8+0x2e9e,_0x66ae08[_0x4a04dc(0x71a)]],[-0x1*-0x2f3+-0x697+0x484,_0x66ae08[_0x4a04dc(0x71a)]],[-0x3f1+0x11*0x175+-0xb0*0x1d,'u8'],[0x51*0x65+-0x6a6+-0x1863,_0x66ae08['OuARl']],[0x603+0x39*0x2e+-0xf51*0x1,'v3'],[-0x76*-0x1+0x91*-0x20+-0x155*-0xe,_0x4a04dc(0x2fb)],[-0x14cc+-0x1d23+-0x2ff*-0x11,_0x66ae08['SDDhU']],[-0x1*0xb5+-0x1b*0x113+0x1eba,_0x66ae08[_0x4a04dc(0x71a)]],[0xf70+-0x1fc1+0x1159,_0x4a04dc(0x2fb)],[0x37e*-0xa+0x1*0xa63+-0x1995*-0x1,_0x66ae08[_0x4a04dc(0x71a)]],[0x13*-0x97+-0x221d+0x2e66,'v3'],[0x9*-0x2be+-0x3*-0x64e+0x6e4,_0x66ae08['OuARl']],[0x2548+0x1f37+0x191*-0x2b,_0x66ae08['OuARl']],[-0x201d*-0x1+0x10e3+0x2e*-0x10a,'v3'],[0x2544+-0x1541+-0xebf,'u8'],[0x603+0x34d+-0x808,_0x66ae08[_0x4a04dc(0x71a)]],[-0x1*-0x17c5+-0xb*-0x147+-0x2482,'v3'],[-0x348+0x1cd1+0x1*-0x1829,'i32'],[-0xe4b+0x1446+0x48f*-0x1,_0x66ae08['SDDhU']],[-0x1*-0x8dd+0xa84*-0x2+-0x2b*-0x51,_0x4a04dc(0x2fb)],[0x1213+0x3*-0x409+-0x1*0x484,'u8'],[0x12a8+0x2*0x939+0x1*-0x23a2,'v4'],[-0xcb2+-0x25d4+0x8ad*0x6,_0x4a04dc(0x2fb)],[-0x15b0+0x55a+0x7*0x28e,_0x4a04dc(0x2fb)],[0x47*-0x79+-0x11*0x1bf+0x2*0x2067,_0x4a04dc(0x2fb)],[0x84a+0x1288*0x2+-0x2bc2,'u8'],[0x2708+0x9*0x13e+-0x819*0x6,'i32']],'TargetHealth':[[0xd12+0x1c45+-0x2947,_0x4a04dc(0x2bb)],[0xe6c+0xd7e+-0x1bd6*0x1,'i32'],[-0x286*0x2+0x7b*-0xb+0xa89,'u8'],[0x7f*-0x13+0x1060*-0x2+0x29*0x109,_0x4a04dc(0x2bb)],[0x172e+0xec5*-0x1+-0x821,_0x4a04dc(0x2bb)],[-0x73f+0x4c7+0x2c4,_0x66ae08['SDDhU']],[0xd4e+-0x1c80+0xf82,_0x66ae08[_0x4a04dc(0x7a8)]],[0x1da*0x10+-0x5*0x8+-0x1cf4,_0x4a04dc(0x2fb)],[-0x2168+0x4cc*0x8+-0x46c,_0x66ae08['OuARl']],[-0x51*-0x2f+-0x12*0x112+-0x4f5*-0x1,'u8'],[0x26b9*0x1+0x12fc*-0x2+0xf*-0x3,_0x4a04dc(0x2fb)],[-0x3*0x859+-0x1ee+0x1b9d*0x1,'u8'],[0x51b*-0x1+0x2237*0x1+-0x1c74,_0x4a04dc(0x2bb)],[0xb9+-0x89*-0x8+-0x455,_0x66ae08['SDDhU']],[-0x2bd*-0x2+0x1*0x1981+-0x47*0x6d,_0x66ae08[_0x4a04dc(0x71a)]],[0x21b2*0x1+-0x1ab6+-0x630,'u8']],'SectatorCamera':[[0x1ab4+0xb7*0xb+-0x227d,_0x66ae08[_0x4a04dc(0x71a)]],[-0xff6+0x895+0x779*0x1,'f32'],[0x245*0xd+-0x136a*-0x1+0x1045*-0x3,_0x66ae08['OuARl']],[0x14b*0x7+0x1*-0x23c3+-0x2*-0xd6b,'v3'],[-0x133e+0xfbb*-0x2+0x32e0,'v3'],[0x76*0x33+-0x1a70+0x336,_0x4a04dc(0x2bb)],[-0xeed*-0x2+0x23db+-0x4169,'i32'],[-0x1*0xe21+-0x1*0x1f85+0x2df6,_0x66ae08[_0x4a04dc(0x71a)]],[0x510+-0x250*0x4+0x22*0x22,_0x4a04dc(0x2bb)],[0x9*-0x2dd+-0x6*-0x63b+0x1*-0xb45,_0x66ae08['OuARl']],[-0x1ada+0x2602+-0xacc,'u8'],[0xffa+-0x166*0x7+0xba*-0x8,'v3'],[-0xb41+0x32a+0x883*0x1,'v4'],[-0x70b*0x3+-0x21f3+-0x1c*-0x1fc,'u8'],[0x2529+0x1*-0xf9e+-0x150b,'i32']],'UISettings':[[0x17f+0x8dd*0x1+-0xa3c,_0x66ae08['SDDhU']],[-0xe57*-0x1+0x1443+-0x2*0x1139,_0x4a04dc(0x2fb)],[0x103*-0x5+0x2198+0x3*-0x917,'u8'],[0xd47+-0xb*0x2b6+0x11d3,_0x66ae08['SDDhU']],[0x5d5*-0x4+-0x1081+-0x2929*-0x1,_0x66ae08['SDDhU']],[-0x1bb7+-0x1e38*0x1+0x3b47,_0x4a04dc(0x2bb)],[0x7a*-0x2b+-0x1*0x2b6+0x418*0x6,'u8'],[-0x1805+0x6c8+0x129a*0x1,'u8'],[0xaa0+-0x191b*-0x1+-0x1cf*0x13,'u8'],[-0xb3f*-0x1+-0x19d*-0x14+-0x2a24,'u8'],[-0x8*-0x41c+0x2540+-0x44c0,'u8'],[0x1*-0x2104+0x9eb+0x187a,'u8'],[-0xccb*-0x3+0x539*-0x1+0x31*-0xa6,'u8'],[-0x1*-0x6ab+0x1746+-0x1c35*0x1,_0x4a04dc(0x2fb)],[0x3*0x35f+0x177*-0xd+0xab2,_0x66ae08['OuARl']],[0x271*0x1+0x3*-0xc3b+0x2458,'u8'],[0x26da+-0x90b+-0x1b4f,_0x66ae08[_0x4a04dc(0x71a)]],[-0x20c5+-0xd03*-0x1+0x1662,_0x66ae08['SDDhU']],[-0x3*-0x21d+0x25*0xfc+-0x27cb,'u8'],[-0x9e*0x20+0x1f4b+-0x7ef,'u8'],[-0x1491+-0x9fd+-0xfa*-0x23,'v2'],[0x2*-0x68a+0x2168*-0x1+-0x2*-0x1912,'v2'],[0x2*0x63d+0x1*-0x443+-0x1*0x487,'u8'],[-0x1*0x1091+0x1a1*0x15+0xa2*-0x16,'u8'],[0x18*-0x3d+0x1912+0x16*-0xb5,_0x4a04dc(0x2fb)],[0x26*-0x9d+0xe9*0x2a+-0xb1c,'v3'],[-0x156d+-0x1203+-0x4d0*-0x9,_0x4a04dc(0x2fb)],[-0x14d6+0x2b5*0x1+-0x757*-0x3,_0x4a04dc(0x2fb)],[0x2cd*0x1+0x197d+-0x1862,_0x4a04dc(0x2fb)],[0x1ea4+-0x1ee3+0x42f,'u8'],[0x4*0x921+0x1*-0x527+-0x1b6c,'u8'],[-0x12a9+0x6*-0x409+-0x1*-0x2ed3,_0x66ae08[_0x4a04dc(0x7a8)]],[-0xe9*0x3+0xba0+-0x4e5,_0x66ae08[_0x4a04dc(0x7a8)]],[-0x1cff*-0x1+0x1*0x20ef+0x423*-0xe,_0x66ae08['SDDhU']],[-0x1aad+-0x1505+0x33ba,_0x66ae08[_0x4a04dc(0x7a8)]],[-0x10eb+-0xa1f+0x2*0xf8b,_0x66ae08['SDDhU']],[-0x2531+0x4aa*-0x3+0x373f,_0x66ae08[_0x4a04dc(0x7a8)]],[-0x1b17+0x1146+0xde5,_0x66ae08['SDDhU']],[-0x5*0x81+-0x1c54+-0x6fd*-0x5,_0x4a04dc(0x2bb)],[0x17b5+0x17*0xbb+-0x1233*0x2,_0x4a04dc(0x2bb)],[0x16a2+0xd54+0x146*-0x19,_0x66ae08[_0x4a04dc(0x7a8)]],[0x2447+0x1*0x496+-0xc7*0x2f,'u8'],[0x1750+0x1*0x32b+-0x1626,'u8'],[-0x127*-0x12+0x2*-0x33+0x556*-0x3,'u8'],[0x25b9+-0x1cdc+-0x182*0x3,'u8'],[0x5*0x6a9+-0x1a*-0xba+-0x1*0x2fa5,'f32']]},_0x46c299={},_0x10506e={};function _0x38eade(_0x1034af,_0x1644ef,_0x13aeb9){var _0x352e92=_0x4a04dc,_0x2e8a43={'VENaH':function(_0x5914cd,_0xda970e){return _0x5914cd===_0xda970e;},'UIxkM':'rWodL','ZYKWl':_0x66ae08['lKstr'],'Yryxz':'none','TamNt':_0x66ae08['VbRiW'],'PcvaP':function(_0x55c68b){var _0xc2e6e4=_0x32ef;return _0x66ae08[_0xc2e6e4(0x4a8)](_0x55c68b);},'vBWpS':_0x352e92(0x1af)+'ntrol'+_0x352e92(0x24b),'ZjciN':_0x352e92(0x5b0),'UFPlP':function(_0x303a91,_0x1daa1c){return _0x303a91(_0x1daa1c);},'XXfGa':_0x66ae08[_0x352e92(0x41c)]};return function(_0x506f54){var _0x541af7=_0x352e92,_0x3a9009={'bfWBE':function(_0x132b06,_0x27e6d5){return _0x132b06+_0x27e6d5;},'kXClH':_0x2e8a43['Yryxz']};try{var _0x373429=_0x506f54&&_0x506f54[_0x541af7(0x29b)]?_0x506f54[_0x541af7(0x29b)]():-0x138f*0x1+0x10b*0x2+0x1179;if(!_0x373429)return;var _0x160d31=_0x10506e[_0x1034af]||(_0x10506e[_0x1034af]={}),_0xa63ce1=_0x160d31[_0x373429];if(!_0xa63ce1)_0xa63ce1=_0x160d31[_0x373429]={'ptr':_0x373429,'firstSeen':Date[_0x541af7(0xf1)](),'hits':0x0};_0xa63ce1['hits']++;if(_0x13aeb9){if(!_0x46c299[_0x373429])_0x46c299[_0x373429]={'ptr':_0x373429,'kind':_0x1034af,'firstSeen':Date['now'](),'hits':0x0};_0x46c299[_0x373429][_0x541af7(0x6d9)]++;}else{var _0x3f07ac=_0x29a47e[_0x1034af];if(!_0x3f07ac||_0x3f07ac[_0x541af7(0x568)]!==_0x373429){_0x29a47e[_0x1034af]={'ptr':_0x373429,'firstSeen':Date[_0x541af7(0xf1)](),'hits':0x0,'replaced':!!_0x3f07ac};try{var _0x36d236=_0x2c50f2['filte'+'r'](function(_0x257839){var _0x176020=_0x541af7;if(_0x2e8a43[_0x176020(0xa00)](_0x2e8a43[_0x176020(0x960)],_0x176020(0x41d)))_0x2447d1[_0x176020(0x334)]=_0x3a9009[_0x176020(0x2e0)](_0x176020(0x48f)+_0x176020(0x4ad)+_0x176020(0x5f4)+_0x176020(0x95c)+',\x20no\x20'+_0x176020(0x347)+_0x176020(0x2e4)+'ler\x20a'+_0x176020(0x683)+_0x176020(0x3df)+_0x176020(0x32f)+'ger.\x20'+_0x176020(0x9de)+'is\x20wh'+_0x176020(0x413),_0x176020(0x877)+_0x176020(0x730)+_0x176020(0x219)+_0x176020(0x979)+_0x176020(0x621)+'n\x20the'+'\x20reco'+_0x176020(0x9f9)+_0x176020(0x42d)+_0x176020(0x954)+'\x20roun'+_0x176020(0xa10)+'t\x20the'+'\x20menu'+'.');else return _0x257839[_0x176020(0x4dd)]===_0x1034af;})[0x5d1+-0x1843*-0x1+-0x1e14];_0x428035={'type':_0x1034af,'atMs':Date[_0x541af7(0xf1)]()-_0x598176,'originalFunc':!!(_0x36d236&&_0x36d236[_0x541af7(0x5d2)]&&typeof _0x36d236['hook'][_0x541af7(0x4cc)+_0x541af7(0x62d)+'nc']===_0x2e8a43[_0x541af7(0x47d)]),'resolveGameAtFire':!!_0x2e8a43['PcvaP'](_0x581c21),'gameSourceAtFire':_0x991340[_0x541af7(0x6f9)+'e']};}catch(_0x1310d2){}}}if(_0x2e8a43['VENaH'](_0x1034af,_0x2e8a43[_0x541af7(0x4e5)])&&_0x16a9cd['on'])try{if(_0x2e8a43[_0x541af7(0x2dd)]==='dHdjT')_0x2e8a43[_0x541af7(0x839)](_0x2536e0,_0x373429);else{_0x265d63(_0x42dc18[_0x541af7(0x923)]);try{var _0x3f8b4d=_0xfacba3['inner'+_0x541af7(0x4f0)+'t']||0x13d2+0x5bd+-0x166f,_0x15bf77=_0x483d1b();if(_0x15bf77&&_0x15bf77['el'])_0x15bf77['el'][_0x541af7(0x443)]['displ'+'ay']=_0x3f8b4d<0x1*-0x95b+0x2d1+0x47b*0x2?_0x3a9009[_0x541af7(0x3fd)]:_0x5eec59['on']?'':_0x541af7(0x8ff);}catch(_0x491de3){}}}catch(_0x2900c5){}if(!_0x1644ef){var _0x36d236=_0x2c50f2['filte'+'r'](function(_0x57bf71){return _0x57bf71['type']===_0x1034af;})[0x1*-0x1c6d+0xa*-0xf5+-0x47*-0x89];if(_0x36d236&&_0x36d236[_0x541af7(0x5d2)]){if(_0x541af7(0x9d6)!==_0x2e8a43['XXfGa'])try{_0x36d236['hook']['enabl'+'ed']=![];}catch(_0x2be15a){}else return _0x55b387['faile'+'d']++,_0x3cd9a5['lastE'+_0x541af7(0x8eb)]=_0x44c458[_0x541af7(0x408)+'rror']||_0x2e8a43['ZYKWl'],null;}}}catch(_0x4e9897){}};}function _0x1f065d(){var _0xec1fd7=_0x4a04dc;if(_0x2c50f2['lengt'+'h'])return!![];if(!window['Unity'+_0xec1fd7(0x166)+_0xec1fd7(0x540)]||!window['Unity'+_0xec1fd7(0x166)+'dkit']['Runti'+'me'])return![];var _0x268991=window[_0xec1fd7(0x849)+_0xec1fd7(0x166)+'dkit'][_0xec1fd7(0x4b9)+'me'];if(!_0x268991[_0xec1fd7(0x2ed)+'ns']||!_0x268991[_0xec1fd7(0x2ed)+'ns'][_0xec1fd7(0x320)+'h'])return![];_0x167409=window[_0xec1fd7(0x849)+'WebMo'+_0xec1fd7(0x540)]['Value'+_0xec1fd7(0x35e)+'er'],_0x457238=_0x457238||_0x268991[_0xec1fd7(0x2ed)+'ns'][_0x268991[_0xec1fd7(0x2ed)+'ns'][_0xec1fd7(0x320)+'h']-(-0x628+0x761+-0x1a*0xc)];if(!_0x457238||typeof _0x457238['hookP'+'refix']!=='funct'+_0xec1fd7(0x92c))return![];for(var _0x2f2551=0x244+0x5a0+-0x65*0x14;_0x2f2551<_0x552302['lengt'+'h'];_0x2f2551++){var _0x4b117f=_0x552302[_0x2f2551];try{if(_0x66ae08[_0xec1fd7(0x469)]('xOSrp',_0xec1fd7(0x828))){var _0x85ae40=_0x457238[_0xec1fd7(0x19d)+_0xec1fd7(0x227)]({'typeName':_0x4b117f[_0xec1fd7(0x4dd)],'methodName':_0x66ae08[_0xec1fd7(0xa4b)],'params':['i32',_0x66ae08[_0xec1fd7(0x7a8)]],'returnType':undefined},_0x38eade(_0x4b117f[_0xec1fd7(0x4dd)],_0x4b117f[_0xec1fd7(0x555)],_0x4b117f[_0xec1fd7(0x476)]));_0x2c50f2[_0xec1fd7(0x3f5)]({'type':_0x4b117f[_0xec1fd7(0x4dd)],'hook':_0x85ae40,'keep':_0x4b117f[_0xec1fd7(0x555)]});}else{var _0x2aa191=_0x194986&&_0x13d145['data'];if(!_0x2aa191||_0x2aa191['__sak'+'ura']!==_0x4ca648||_0x2aa191['kind']!==_0x66ae08['wVgwf'])return;_0x4ce0d2(_0x2aa191[_0xec1fd7(0xa1a)],_0x2aa191[_0xec1fd7(0x840)]);}}catch(_0x1983ce){if(_0x66ae08[_0xec1fd7(0x7de)]('mBMZI',_0xec1fd7(0x164)))_0x2be9b0['push'](_0x66ae08['NUqXk'](_0x4b117f[_0xec1fd7(0x4dd)],':\x20')+String(_0x1983ce&&_0x1983ce[_0xec1fd7(0x3a0)+'ge']||_0x1983ce)['slice'](-0x1e7*-0xc+0x14*0x17e+-0x2*0x1a56,0x24fb+0x1939+-0x7*0x8cc));else{_0x13bb0a['sp']&&(_0xe96103['sp'][_0xec1fd7(0x665)+'onten'+'t']=_0x5174c7['on']?_0x66ae08[_0xec1fd7(0x7b8)]:_0x66ae08[_0xec1fd7(0x5ed)],_0x975d17['sp']['style'][_0xec1fd7(0x376)+'round']=_0x522e44['on']?_0x2a37d7:_0xec1fd7(0x77f)+_0xec1fd7(0x67c)+'t',_0x3d3ffc['sp'][_0xec1fd7(0x443)][_0xec1fd7(0x6bc)]=_0x5e090f['on']?_0xec1fd7(0x51e)+'1b':_0xec1fd7(0x424)+'f5');if(_0x5ec019['fx'])_0x8ee04b['fx'][_0xec1fd7(0xa1b)]=_0x66ae08[_0xec1fd7(0x181)](_0x431f2d,_0x41bee2[_0xec1fd7(0x576)+'r']);if(_0x55a96f['fv'])_0x23c592['fv']['textC'+'onten'+'t']=_0x66ae08[_0xec1fd7(0x571)](_0x312494[_0xec1fd7(0x576)+'r'][_0xec1fd7(0x626)+'ed'](-0x17ae+0xea5+0x90a),'x');}}}return _0x2c50f2['lengt'+'h']>-0x11*0xe5+0x22d3+-0x9cf*0x2;}function _0x10160d(){var _0x45d15a=_0x4a04dc,_0xa095b=-0x3ab*-0x4+-0xadc+0x1e8*-0x2;for(var _0x15103e=0x1ea2+0x43f*0x7+-0x3c5b*0x1;_0x15103e<_0x2c50f2[_0x45d15a(0x320)+'h'];_0x15103e++){if(_0x2c50f2[_0x15103e]['hook']&&_0x2c50f2[_0x15103e]['hook'][_0x45d15a(0x2f8)+'Index']!==undefined)_0xa095b++;}return _0xa095b;}function _0x24dc08(){var _0x3b4cab=_0x4a04dc,_0x188d92=-0x1*0xf7f+0x1792+-0x813;for(var _0x5ca057=-0x275*0xb+0x7*-0x2f6+-0x4b*-0xa3;_0x5ca057<_0x2c50f2[_0x3b4cab(0x320)+'h'];_0x5ca057++){if(_0x2c50f2[_0x5ca057]['hook']&&_0x2c50f2[_0x5ca057][_0x3b4cab(0x5d2)]['appli'+'ed'])_0x188d92++;}return _0x188d92;}var _0x36facd=null,_0x574e57=[],_0x5e9dab={},_0x428035=null;function _0x22a416(_0x5297a5){var _0x4e7a00=_0x4a04dc;try{if(_0x4e7a00(0xac5)!==_0x4e7a00(0x6e9)){if(!_0x167409||!_0x5297a5)return null;var _0x9317d4=new _0x167409(_0x5297a5)['getCl'+'assNa'+'me']();return _0x9317d4===undefined?null:_0x9317d4;}else{_0x5dca72[_0x4e7a00(0x3a1)]={};for(var _0x509976=-0x1803+-0x2ba*-0x4+0x131*0xb;_0x509976<_0x9e2887['lengt'+'h'];_0x509976++){var _0x549bcc=_0x344b4b(_0x66ae08[_0x4e7a00(0x9c7)](_0x2d279b,_0x66ae08[_0x4e7a00(0x98d)](_0x5b9933,_0x5e2cc5[_0x509976][-0xa24+0x1179+-0x755],0xb22*0x3+-0x55d+-0x1bf9)),_0x4e7a00(0x2bb));if(_0x549bcc!==_0x3fd200)_0x318b53['tag'][_0x255412[_0x509976][-0x257d+-0x1e68+0x43e6]]=_0x549bcc;}}}catch(_0x20a874){return null;}}function _0x2a0e06(_0x3d4467,_0x1d84c4,_0x23e1dc){var _0x1dde8f=_0x4a04dc,_0x2f464c={'kdGWT':function(_0x34e60d,_0x5b24a0){return _0x34e60d<_0x5b24a0;}};if(_0x66ae08['cSMRv']('MQJal',_0x1dde8f(0x4ca))){var _0x34f9f0=new _0x31f37e(_0x36a87b);for(var _0x4402f7=-0x169*0x9+-0x12c+0xddd;_0x2f464c[_0x1dde8f(0x4be)](_0x4402f7,_0x441ab4);_0x4402f7++)_0x34f9f0[_0x4402f7]=_0x25fb54['getUi'+_0x1dde8f(0xa3c)](_0x4ee93f+_0x42c516+_0x4402f7);return _0x2ced68['ok']++,_0x34f9f0;}else{var _0x4dc64f=_0x66ae08[_0x1dde8f(0x506)](_0x48ea68);if(!_0x4dc64f)return null;if(_0x66ae08[_0x1dde8f(0x369)](_0x1d84c4,0x1117+-0x2e*-0x3d+-0x1c0d*0x1)||_0x1d84c4+_0x23e1dc*(0x9*-0x25+-0x1eb7+0x2008)>_0x4dc64f[_0x1dde8f(0x7f4)+'ength'])return null;var _0x53950b=[];for(var _0x138015=-0x10a4+-0x3dd*0x8+0x2f8c;_0x66ae08['Dqwvh'](_0x138015,_0x23e1dc);_0x138015++)_0x53950b[_0x1dde8f(0x3f5)](_0x4dc64f['getFl'+_0x1dde8f(0x3f1)](_0x66ae08['VjcMR'](_0x3d4467+_0x1d84c4,_0x66ae08[_0x1dde8f(0xa98)](_0x138015,-0x10e+-0x1*0x1d0+-0x6*-0x7b)),!![]));return _0x991340['ok']+=_0x23e1dc,_0x53950b;}}var _0x484a9c={'PhotonNetworkSync':[[_0x66ae08[_0x4a04dc(0x720)],_0x4a04dc(0x757)+_0x4a04dc(0x777)],[_0x4a04dc(0x281),_0x66ae08[_0x4a04dc(0xaeb)]],['0x24',_0x4a04dc(0x77f)+_0x4a04dc(0x144)],[_0x66ae08[_0x4a04dc(0x72c)],_0x4a04dc(0x6f0)],[_0x4a04dc(0x184),_0x4a04dc(0x308)+'Look']],'NetworkPlayerAnimations':[[_0x4a04dc(0x9be),_0x4a04dc(0x875)+'le'],[_0x4a04dc(0x233),_0x4a04dc(0x324)]],'NPC_Cotroller':[[_0x66ae08['DDlPm'],_0x66ae08[_0x4a04dc(0x49e)]],['0xb4',_0x4a04dc(0xa66)+'tHeal'+'th'],[_0x4a04dc(0x8f4),'healt'+'h'],[_0x66ae08[_0x4a04dc(0x88b)],_0x66ae08[_0x4a04dc(0x473)]],[_0x4a04dc(0x2bd),_0x66ae08[_0x4a04dc(0x6d7)]]],'EnemyBot':[['0x14',_0x66ae08[_0x4a04dc(0x6d7)]]]},_0x3c1b77={'PhotonNetworkSync':[[_0x66ae08[_0x4a04dc(0xa2e)],_0x4a04dc(0x4d8)],[_0x66ae08['diYBr'],_0x4a04dc(0x1e7)+_0x4a04dc(0xa3d)],[_0x4a04dc(0x3b7),'id']]};function _0x28e1f6(_0x305ab7,_0xa70a22){var _0x246d29=_0x4a04dc,_0x27a274={'wkrpL':function(_0x4dcb85){return _0x4dcb85();}};if('LzQOE'===_0x246d29(0xa51)){var _0x121750=_0x35cfba[_0x305ab7]||[],_0x350674={'kind':_0x305ab7,'ptr':'0x'+_0xa70a22['toStr'+_0x246d29(0x7e9)](-0x1d83+0x208*0x2+0x1983),'pos':null,'posAt':null,'allVecs':[],'scalars':[],'refs':{}};for(var _0x5ee1bb=0x1*0x188f+0x229+-0x1ab8;_0x5ee1bb<_0x121750[_0x246d29(0x320)+'h'];_0x5ee1bb++){if(_0x66ae08[_0x246d29(0x27a)](_0x121750[_0x5ee1bb][-0x2fc+0xe42+-0x241*0x5],'v3'))continue;var _0x32f5e9=_0x2a0e06(_0xa70a22,_0x121750[_0x5ee1bb][0x27*-0xa5+0x4*0x72c+-0x38d],0x1435+-0x523*0x5+0x57d);if(!_0x32f5e9)continue;_0x350674[_0x246d29(0x676)+'cs'][_0x246d29(0x3f5)]({'o':'0x'+_0x121750[_0x5ee1bb][0x1cfb+-0x4b5+-0x1846]['toStr'+_0x246d29(0x7e9)](-0x522+0x16d9+0x11a7*-0x1),'v':_0x32f5e9});}var _0x1b24dc=0xc+-0x1e65+0x1e59;for(var _0x21825c=0x2*0x11c5+0xf77+-0x3301;_0x21825c<_0x350674[_0x246d29(0x676)+'cs']['lengt'+'h'];_0x21825c++){var _0x21d9ee=_0x350674['allVe'+'cs'][_0x21825c]['v'],_0xfc3f1b=_0x66ae08['LFrqP'](_0x21d9ee[0x191d*0x1+0x1a15+0x2*-0x1999],_0x21d9ee[0x1f*0xc8+-0xc12+0x26e*-0x5])+_0x21d9ee[-0x2053+0xd5a+0x12fb]*_0x21d9ee[0x63+-0xedc+0xb*0x151];if(_0xfc3f1b>_0x1b24dc){if(_0x66ae08[_0x246d29(0x185)](_0x66ae08[_0x246d29(0x1c0)],_0x246d29(0x8ea)))_0x1b24dc=_0xfc3f1b,_0x350674['pos']=_0x21d9ee,_0x350674[_0x246d29(0x1b6)]=_0x350674[_0x246d29(0x676)+'cs'][_0x21825c]['o'];else{var _0x5ec1b2=_0x1e1f2c['on'];_0x381109['on']=!!_0x3f26a0;_0x2f302c['on']&&!_0x5ec1b2&&(_0x4b9d6a===_0x5c1264||_0x5d3894===null||_0x4d4bf2(_0x3e085f)===0x28*-0x76+-0x1515+-0x2*-0x13c3)&&(_0x7d4796=_0x1c38e5);_0x11c89b['facto'+'r']=_0x10ebfd[_0x246d29(0x968)](_0x22ba89['max'],_0x5cefd0[_0x246d29(0x905)](_0x3a36c9[_0x246d29(0x968)],_0x66ae08[_0x246d29(0x5a8)](_0x1c37b4,_0x231eb0)||-0x18e*0x11+0x13da+0x695));if(!_0x3b1b31['on'])_0x12a07e={};var _0x6b61ce=_0x66ae08[_0x246d29(0x7a9)](_0x58a38b);if(_0x6b61ce){_0x6b61ce['sp']&&(_0x6b61ce['sp']['textC'+'onten'+'t']=_0x2562c9['on']?_0x246d29(0x913)+_0x246d29(0x67d):'Speed'+_0x246d29(0x246),_0x6b61ce['sp']['style'][_0x246d29(0x376)+'round']=_0x2f1756['on']?_0x390800:_0x66ae08[_0x246d29(0x3d8)],_0x6b61ce['sp']['style'][_0x246d29(0x6bc)]=_0x43c971['on']?_0x246d29(0x51e)+'1b':'#f7ee'+'f5');if(_0x6b61ce['fx'])_0x6b61ce['fx']['value']=_0x1d7c75(_0x40625e[_0x246d29(0x576)+'r']);if(_0x6b61ce['fv'])_0x6b61ce['fv'][_0x246d29(0x665)+_0x246d29(0x889)+'t']=_0x66ae08['LnVOP'](_0x56ef69['facto'+'r'][_0x246d29(0x626)+'ed'](0x7*0x549+0x1b60+-0x405e),'x');}}}}_0x350674[_0x246d29(0x719)]=Math[_0x246d29(0xacc)](_0x1b24dc);var _0x51bb2c=_0x484a9c[_0x305ab7],_0x100204=_0x3c1b77[_0x305ab7];if(_0x100204){_0x350674[_0x246d29(0x3a1)]={};for(var _0x2e51a3=0x1486+-0xea6+-0x5e0;_0x66ae08[_0x246d29(0x876)](_0x2e51a3,_0x100204[_0x246d29(0x320)+'h']);_0x2e51a3++){if(_0x66ae08['rJVWw']!==_0x66ae08['rJVWw']){var _0x2c4b95=_0x66ae08[_0x246d29(0xa78)][_0x246d29(0x561)]('|'),_0xa7b6d8=0xc39*-0x3+-0x97a*0x2+-0x1*-0x379f;while(!![]){switch(_0x2c4b95[_0xa7b6d8++]){case'0':if(!_0x1fbcfc)return null;continue;case'1':_0x43f0fe=_0x66ae08['sXLeD'](_0x43f0fe,0x724+0x256c+-0x2c90)&0x2166+0x2*0x9f0+-0x1*0x3545;continue;case'2':_0x21aecc&=0x2583*-0x1+-0x257*0x5+0x3235;continue;case'3':var _0x43f0fe=_0x2c778a(_0x66ae08['PMeVA'](_0x3969e8,_0x408377)+_0x1fbcfc[_0x246d29(0x410)+'d'],'u8');continue;case'4':var _0x21aecc=_0x5434f4(_0x3accde+_0x6da7c3+_0x1fbcfc[_0x246d29(0x106)],'u8');continue;case'5':if(_0x66ae08[_0x246d29(0x303)](_0x21aecc,_0x40f055)||_0x66ae08['HKhWm'](_0xea49a,_0x5b7a62)||_0x3c2135===_0x4ac7df||_0x154d0a===_0x24c675)return null;continue;case'6':var _0x1fbcfc=_0x4ec832[_0x20fbea];continue;case'7':_0xea49a|=-0x4f5+-0x5ab+-0x110*-0xa;continue;case'8':if(_0x302188===_0x246d29(0x6d2))_0x2febd2=_0x66ae08['IbMuF'](_0x43277d,_0x66ae08[_0x246d29(0x404)](_0xea49a,_0x21aecc));else{if(_0x66ae08[_0x246d29(0x79e)](_0xadede3,'obfI'))_0x2febd2=_0xea49a^_0x21aecc|-0x1a58+0x98*0x2e+-0xf8;else _0x2febd2=_0x66ae08[_0x246d29(0x950)](_0x66ae08['FfXru'](_0x66ae08[_0x246d29(0x306)](_0xea49a,_0x21aecc),-0x1f8+0x51b+-0x224),0x1*-0x296+0x15fd+-0x1367)?-0x1*-0x1267+0x26e8+-0x32f*0x12:0x575*0x1+0x12e*0x1d+-0x27ab;}continue;case'9':_0x154d0a&=-0x1*-0x6e+-0x10*0x21e+0x1*0x2173;continue;case'10':var _0xea49a=_0x66ae08[_0x246d29(0x682)](_0x51fe01,_0x3edffb+_0x7e4cda+_0x1fbcfc[_0x246d29(0x446)+'n'],_0x246d29(0x2bb));continue;case'11':return{'real':_0x2febd2,'fake':_0x3c2135,'act':_0x154d0a,'init':_0x43f0fe,'key':_0x21aecc,'hidden':_0xea49a};case'12':var _0x3c2135=_0x164f23(_0x66ae08[_0x246d29(0x323)](_0x66ae08[_0x246d29(0x4f3)](_0x41e3a7,_0x14ba0e),_0x1fbcfc['fake']),_0x4d277c===_0x246d29(0x6d2)?_0x66ae08['OuARl']:_0x66ae08[_0x246d29(0x9aa)](_0x55d234,'obfI')?_0x246d29(0x2bb):'u8');continue;case'13':var _0x2febd2;continue;case'14':var _0x154d0a=_0x2cd520(_0x66ae08[_0x246d29(0x9ce)](_0x15ea13,_0x22d5df)+_0x1fbcfc['activ'+'e'],'u8');continue;}break;}}else{var _0x4d23a0=_0x5b90ef(_0xa70a22+_0x66ae08[_0x246d29(0x98d)](parseInt,_0x100204[_0x2e51a3][0x14cc+0x17a3*-0x1+0x2d7],-0x1636+-0x207*-0x1+0x143f),_0x66ae08['SDDhU']);if(_0x4d23a0!==undefined)_0x350674['tag'][_0x100204[_0x2e51a3][0x2*0xdfa+-0x1*-0x1a55+0x486*-0xc]]=_0x4d23a0;}}}if(_0x51bb2c)for(var _0x22fed3=0xaa7+-0x1*0x1d43+0x129c;_0x66ae08[_0x246d29(0x298)](_0x22fed3,_0x51bb2c[_0x246d29(0x320)+'h']);_0x22fed3++){var _0x1aee71=_0x66ae08[_0x246d29(0x254)](_0x5b90ef,_0x66ae08[_0x246d29(0x122)](_0xa70a22,_0x66ae08[_0x246d29(0x89b)](parseInt,_0x51bb2c[_0x22fed3][-0x152*-0x4+-0xd13+-0x5*-0x18f],0x2*-0x11f8+0xbe9+0x1817)),_0x66ae08[_0x246d29(0x128)]);if(_0x1aee71)_0x350674[_0x246d29(0x3af)][_0x51bb2c[_0x22fed3][-0x17be+0x4*-0x25a+0x2127]]=_0x66ae08['cRrIw']('0x',_0x66ae08[_0x246d29(0x5c7)](_0x1aee71,-0x164*0x16+-0x12*-0x101+0xe5*0xe)['toStr'+_0x246d29(0x7e9)](0x1d9b+-0x215a+0x3cf));}return _0x350674[_0x246d29(0x808)+'rs']=_0x121750[_0x246d29(0x57d)+'r'](function(_0x1d98be){var _0x2335e9=_0x246d29;if(_0x66ae08['WaraC'](_0x66ae08[_0x2335e9(0x4d6)],_0x66ae08[_0x2335e9(0x297)]))_0x58a8c5['execC'+_0x2335e9(0x780)+'d'](_0x2335e9(0x2b9)),_0x27a274['wkrpL'](_0x72c1f4);else return _0x1d98be[-0xbcf+0x3*-0x786+0x2262]==='f32'||_0x66ae08[_0x2335e9(0x958)](_0x1d98be[0xcec*-0x3+0x7*0x531+-0x26e*-0x1],_0x2335e9(0x2bb));})[_0x246d29(0x805)](function(_0x11d22d){return{'o':'0x'+_0x11d22d[0x22c9+0x1e3a+-0x1*0x4103]['toStr'+'ing'](0x18*0xd6+-0x2*0xa47+0x8e),'v':_0x5b90ef(_0xa70a22+_0x11d22d[-0x3*-0x227+-0x1489+0xe14],_0x11d22d[-0x44+0x1*0x22f9+0x4*-0x8ad])};})[_0x246d29(0x57d)+'r'](function(_0x254574){var _0x52c5d9=_0x246d29;return _0x66ae08[_0x52c5d9(0x6f7)](_0x254574['v'],undefined)&&_0x66ae08[_0x52c5d9(0x8a7)](isFinite,_0x254574['v']);})[_0x246d29(0x688)](0x1511*-0x1+-0x81*0x1f+0x24b0,0x22c3+-0x1*0x1a4d+-0x86a),_0x350674;}else{_0x51b71b[_0x1a5f50]={'ptr':_0x4630f5,'firstSeen':_0x470590[_0x246d29(0xf1)](),'hits':0x0,'replaced':!!_0x53727b};try{var _0x199db7=_0x4262f2['filte'+'r'](function(_0x1d9a6c){var _0x4f292f=_0x246d29;return _0x1d9a6c[_0x4f292f(0x4dd)]===_0x2d3644;})[-0x394*-0x8+0x12d6+0x4bf*-0xa];_0x44c060={'type':_0xc76cf0,'atMs':_0x57c764[_0x246d29(0xf1)]()-_0x35f3a4,'originalFunc':!!(_0x199db7&&_0x199db7[_0x246d29(0x5d2)]&&typeof _0x199db7['hook']['origi'+'nalFu'+'nc']===_0x246d29(0x80e)+_0x246d29(0x92c)),'resolveGameAtFire':!!_0x5d015c(),'gameSourceAtFire':_0x1cb26a['sourc'+'e']};}catch(_0xd8ef7c){}}}function _0xe638cb(){var _0x3a416e=_0x4a04dc,_0x375d1f={'players':[],'bots':[],'enemies':[],'controllers':[],'camera':null,'cameraFrom':null,'playerList':null,'managers':{},'wasmTypes':null},_0x2a94a0=_0x29a47e[_0x3a416e(0x1af)+_0x3a416e(0x293)+'ler']&&_0x29a47e[_0x3a416e(0x1af)+_0x3a416e(0x293)+_0x3a416e(0x24b)][_0x3a416e(0x568)]||0x19c7*0x1+-0xe92+-0xb35,_0x2179b5=_0x10506e[_0x3a416e(0x7bf)+_0x3a416e(0x891)+_0x3a416e(0x4d2)+'nc']||{},_0x1f6a7c=Object['keys'](_0x2179b5);for(var _0x293c72=0x1464+-0x423+-0x1041;_0x293c72<_0x1f6a7c['lengt'+'h']&&_0x293c72<-0x1bb*0xa+0x7db+0x98b;_0x293c72++){var _0x483622=(_0x3a416e(0x796)+'|4|6|'+_0x3a416e(0x87b))[_0x3a416e(0x561)]('|'),_0xbedd94=-0x24a8+0xcb3*-0x1+0x315b;while(!![]){switch(_0x483622[_0xbedd94++]){case'0':var _0x80e6c5=_0x2179b5[_0x1f6a7c[_0x293c72]];continue;case'1':var _0x12647a=_0x66ae08['SKZdr'](_0x28e1f6,'Photo'+_0x3a416e(0x891)+_0x3a416e(0x4d2)+'nc',_0x80e6c5['ptr']);continue;case'2':_0x12647a[_0x3a416e(0x6d9)]=_0x80e6c5[_0x3a416e(0x6d9)];continue;case'3':if(_0x12647a[_0x3a416e(0x3af)][_0x3a416e(0xa8a)+'h']){var _0x4c659b=parseInt(_0x12647a['refs'][_0x3a416e(0xa8a)+'h'],-0x9cd+0x1ef2+-0x1515);_0x12647a['healt'+'h']=_0x46e0e1(_0x4c659b,'Healt'+'hScri'+'pt',_0x66ae08['Ryxyj']);}continue;case'4':_0x12647a['first'+_0x3a416e(0x61a)+'s']=_0x80e6c5[_0x3a416e(0x9f0)+'Seen']-_0x598176;continue;case'5':_0x375d1f['playe'+'rs'][_0x3a416e(0x3f5)](_0x12647a);continue;case'6':_0x12647a[_0x3a416e(0x9d8)+'al']=!!_0x2a94a0&&_0x66ae08['FpcJc'](_0x12647a['refs']['fps'],'0x'+_0x2a94a0[_0x3a416e(0x108)+'ing'](0xfcc+0x1be+0x1*-0x117a));continue;}break;}}_0x375d1f[_0x3a416e(0x80a)+_0x3a416e(0x6c3)+'t']=_0x1f6a7c[_0x3a416e(0x320)+'h'];var _0x26be90=_0x10506e[_0x3a416e(0x347)+_0x3a416e(0x2e4)+_0x3a416e(0x24b)]||{},_0x647d4c=Object['keys'](_0x26be90);for(var _0x47d6cf=-0x20*0x83+-0x3*-0x946+0x2*-0x5b9;_0x47d6cf<_0x647d4c[_0x3a416e(0x320)+'h']&&_0x47d6cf<-0x4*-0x66c+-0x12*-0x7d+-0x2262;_0x47d6cf++){var _0x40ef17=(_0x3a416e(0x9bd)+_0x3a416e(0x6c6))['split']('|'),_0x81797c=0x49*-0x37+0x1b4a+-0xb9b;while(!![]){switch(_0x40ef17[_0x81797c++]){case'0':_0x50de25[_0x3a416e(0x9f0)+'SeenM'+'s']=_0x26be90[_0x647d4c[_0x47d6cf]][_0x3a416e(0x9f0)+_0x3a416e(0x390)]-_0x598176;continue;case'1':_0x375d1f[_0x3a416e(0x39e)][_0x3a416e(0x3f5)](_0x50de25);continue;case'2':if(_0x50de25[_0x3a416e(0x3af)][_0x3a416e(0xa8a)+'h'])_0x50de25['healt'+'h']=_0x46e0e1(parseInt(_0x50de25[_0x3a416e(0x3af)]['healt'+'h'],0x1*-0x68f+-0x175*-0xe+-0xdc7),_0x66ae08[_0x3a416e(0x64e)],_0x3a416e(0x17f));continue;case'3':var _0x50de25=_0x28e1f6(_0x66ae08['WHsrV'],_0x26be90[_0x647d4c[_0x47d6cf]][_0x3a416e(0x568)]);continue;case'4':_0x50de25['hits']=_0x26be90[_0x647d4c[_0x47d6cf]]['hits'];continue;}break;}}_0x375d1f[_0x3a416e(0x710)+'unt']=_0x647d4c[_0x3a416e(0x320)+'h'];var _0x5d1c63=_0x10506e['FPSco'+'ntrol'+_0x3a416e(0x24b)]||{},_0x268d1f=Object[_0x3a416e(0x70c)](_0x5d1c63);for(var _0x309cec=-0x1460+0x1735+0x5*-0x91;_0x66ae08[_0x3a416e(0x15e)](_0x309cec,_0x268d1f['lengt'+'h'])&&_0x309cec<0x302+-0x17fc+0x1512;_0x309cec++){var _0x70f10a=_0x28e1f6(_0x66ae08['LHUKo'],_0x5d1c63[_0x268d1f[_0x309cec]][_0x3a416e(0x568)]);_0x70f10a[_0x3a416e(0x6d9)]=_0x5d1c63[_0x268d1f[_0x309cec]][_0x3a416e(0x6d9)],_0x70f10a['isLoc'+'al']=_0x66ae08[_0x3a416e(0x45c)](_0x5d1c63[_0x268d1f[_0x309cec]]['ptr'],_0x2a94a0),_0x375d1f[_0x3a416e(0xaec)+'oller'+'s'][_0x3a416e(0x3f5)](_0x70f10a);}_0x375d1f[_0x3a416e(0xaec)+'oller'+_0x3a416e(0x91d)]=_0x268d1f['lengt'+'h'];var _0x13ae2b=_0x375d1f['playe'+'rs']['conca'+'t'](_0x375d1f[_0x3a416e(0x39e)]);for(var _0x1c2245=0x58*-0x35+0x15df+-0x3a7;_0x66ae08['zDgDb'](_0x1c2245,_0x13ae2b[_0x3a416e(0x320)+'h']);_0x1c2245++){if(_0x3a416e(0x89e)===_0x3a416e(0x89e)){if(_0x13ae2b[_0x1c2245][_0x3a416e(0x9d8)+'al'])continue;_0x375d1f[_0x3a416e(0x389)+'es'][_0x3a416e(0x3f5)](_0x13ae2b[_0x1c2245]);}else _0x66ae08[_0x3a416e(0x226)](_0x414bd,_0x66ae08['lnDOk']);}_0x375d1f['enemy'+_0x3a416e(0x91d)]=_0x375d1f['enemi'+'es'][_0x3a416e(0x320)+'h'];var _0x37c348={'TDM_GameManager':0x2c,'GG_GameManager':0x14},_0x1f19e5={'TDM_GameManager':0x50,'GG_GameManager':0x5c};for(var _0x4c191b in _0x29a47e){if(_0x3a416e(0x7e1)!=='ZpxNj'){var _0x5eb68f=_0x341d1e['getEl'+_0x3a416e(0x6f5)+'ById'](_0x3a416e(0x171)+'a-sw-'+'v2');if(_0x5eb68f)_0x5eb68f['remov'+'e']();}else{var _0x11d42c=_0x29a47e[_0x4c191b];if(!_0x11d42c||!_0x11d42c[_0x3a416e(0x568)])continue;if(!(_0x4c191b in _0x37c348))continue;_0x375d1f[_0x3a416e(0x17d)+'ers'][_0x4c191b]='0x'+_0x11d42c[_0x3a416e(0x568)][_0x3a416e(0x108)+_0x3a416e(0x7e9)](0x252d+0xbf8+0x23*-0x167);var _0x2c3d50=_0x5b90ef(_0x66ae08[_0x3a416e(0x9ec)](_0x11d42c[_0x3a416e(0x568)],_0x37c348[_0x4c191b]),'u32'),_0x648f93=_0x66ae08['dZOOw'](_0x5b90ef,_0x66ae08[_0x3a416e(0x17c)](_0x11d42c[_0x3a416e(0x568)],_0x1f19e5[_0x4c191b]),_0x66ae08[_0x3a416e(0x128)]);_0x2c3d50&&_0x375d1f['camer'+'a']===null&&(_0x375d1f['camer'+'a']='0x'+_0x66ae08['LaxEh'](_0x2c3d50,-0x2304+-0x1f11+-0x1607*-0x3)[_0x3a416e(0x108)+'ing'](0x17b9+0x1d13+-0x1c2*0x1e),_0x375d1f[_0x3a416e(0x3bf)+'aFrom']=_0x4c191b);if(_0x648f93&&_0x66ae08['oeyJE'](_0x375d1f[_0x3a416e(0x80a)+'rList'],null))_0x375d1f[_0x3a416e(0x80a)+_0x3a416e(0x771)]=_0x66ae08[_0x3a416e(0x27f)]('0x',(_0x648f93>>>0x1283+-0x7*-0x3eb+-0x7a8*0x6)[_0x3a416e(0x108)+_0x3a416e(0x7e9)](-0x1e46+0x6f8+0x175e));}}if(!_0x375d1f['playe'+'rCoun'+'t']&&!_0x375d1f[_0x3a416e(0x710)+_0x3a416e(0x3b5)]&&!_0x375d1f[_0x3a416e(0x3bf)+'a'])_0x375d1f['note']=_0x66ae08['cqEZw'](_0x3a416e(0x48f)+'otonN'+'etwor'+'kSync'+',\x20no\x20'+'NPC_C'+_0x3a416e(0x2e4)+_0x3a416e(0x851)+_0x3a416e(0x683)+'\x20game'+_0x3a416e(0x32f)+'ger.\x20'+'That\x20'+'is\x20wh'+_0x3a416e(0x413),_0x66ae08['CzrsO']);else!_0x375d1f['enemy'+_0x3a416e(0x91d)]&&(_0x375d1f['note']=_0x66ae08[_0x3a416e(0x3d9)](_0x66ae08['IVhVJ'],'isLoc'+_0x3a416e(0x4cb)+_0x3a416e(0xf4)+_0x3a416e(0xaf5)+_0x3a416e(0x228)+_0x3a416e(0x10d)+_0x3a416e(0xacd)));try{var _0x42a19d=window[_0x3a416e(0x849)+'WebMo'+_0x3a416e(0x540)]&&window[_0x3a416e(0x849)+_0x3a416e(0x166)+'dkit']['Runti'+'me'],_0x1a7f47=_0x42a19d&&_0x42a19d['inter'+'nalWa'+_0x3a416e(0x33c)+'es']||[],_0x134235={};for(var _0x308a08=0xc3*-0xf+-0x179b*-0x1+-0xc2e*0x1;_0x66ae08['xJMPJ'](_0x308a08,_0x1a7f47[_0x3a416e(0x320)+'h'])&&_0x66ae08['xDCFh'](_0x308a08,-0x2385+0x1022+0x2303);_0x308a08++){if('ZJrnF'!=='QZlPn'){var _0x3ee778=_0x1a7f47[_0x308a08][_0x3a416e(0x78a)+'s'][_0x3a416e(0x1ed)](',')+_0x3a416e(0x781)+(_0x1a7f47[_0x308a08]['retur'+'nType']||'void');_0x134235[_0x3ee778]=(_0x134235[_0x3ee778]||0xe1d*0x1+0x1ae2+-0x1*0x28ff)+(-0x12fc+-0x1106+0xc01*0x3);}else{var _0x1169dc=-0x1ff+-0x2263*0x1+-0x1*-0x2462;for(var _0x31a1dc=-0x1*-0xd9a+0x1e*0x1d+-0x110*0x10;_0x31a1dc<_0x2ba570[_0x3a416e(0x320)+'h'];_0x31a1dc++){if(_0xf6437e[_0x31a1dc][_0x3a416e(0x5d2)]&&_0x2fcd77[_0x31a1dc][_0x3a416e(0x5d2)][_0x3a416e(0x853)+'ed'])_0x1169dc++;}return _0x1169dc;}}_0x375d1f[_0x3a416e(0x1f4)+'ypes']=_0x134235;}catch(_0x259b46){}return _0x375d1f;}function _0x46e0e1(_0x401743,_0x2c50e7,_0x5632cb){var _0x14ddd4=_0x4a04dc;try{var _0x4e46fe=_0x35cfba[_0x2c50e7]||[];for(var _0x1dba52=0xbe*-0x28+0x1*0x156d+0x843;_0x1dba52<_0x4e46fe[_0x14ddd4(0x320)+'h'];_0x1dba52++){if(_0x66ae08['cQpWD']!==_0x14ddd4(0xac6)){if(_0x66ae08[_0x14ddd4(0x8c9)](_0x4e46fe[_0x1dba52][0x23e5*0x1+-0x875+-0x1b6f],_0x5632cb))continue;var _0x5a5991=_0x4e46fe[_0x1dba52][-0x10ab+-0x7c*0x39+-0x5*-0x8db];if(_0x5632cb[_0x14ddd4(0x792)+'Of']('obf')===-0x437*-0x3+-0x2012+-0x136d*-0x1){var _0x300a40=_0x66ae08['fwjdV'](_0x170f9a,_0x401743,_0x5a5991,_0x5632cb);if(!_0x300a40)return null;_0x300a40['o']=_0x5a5991,_0x300a40['k']=_0x5632cb;var _0x5b1965=_0x500e9f([_0x300a40]);if(!_0x5b1965['rows'][_0x14ddd4(0x320)+'h'])return null;return _0x5b1965['rows'][-0x887+0x8cb+-0x44];}var _0x276a3f=_0x5b90ef(_0x401743+_0x5a5991,_0x5632cb);if(_0x66ae08[_0x14ddd4(0x59e)](_0x276a3f,undefined))return null;return{'o':'0x'+_0x5a5991[_0x14ddd4(0x108)+'ing'](0x128b*0x1+0x132d*0x2+-0x38d5),'v':_0x276a3f};}else return null;}}catch(_0x285d20){}return null;}function _0x534052(){var _0x2f5084=_0x4a04dc,_0x410a5c={'ILvio':function(_0x27a38f,_0x51c2e3,_0x129fee){return _0x27a38f(_0x51c2e3,_0x129fee);},'wYaNn':_0x66ae08[_0x2f5084(0x4d7)],'ovkqW':function(_0x38c4a6){return _0x38c4a6();},'NKLrh':function(_0x362ba0,_0xfba553){return _0x362ba0===_0xfba553;}},_0x287ec0={};_0x991340['ok']=0x824*0x2+-0x257e+0x1536,_0x991340[_0x2f5084(0x5f2)+'d']=0x12ca+-0x5*-0x709+-0x35f7,_0x991340[_0x2f5084(0x408)+_0x2f5084(0x8eb)]=null;var _0x36b281=Object['keys'](_0x35cfba);for(var _0x466056=0x16be+-0x7e2*0x2+-0x37d*0x2;_0x466056<_0x36b281[_0x2f5084(0x320)+'h'];_0x466056++){var _0x5b1187=_0x36b281[_0x466056],_0x4ccf0f=_0x29a47e[_0x5b1187];if(!_0x4ccf0f||!_0x4ccf0f[_0x2f5084(0x568)])continue;var _0x28941c=_0x35cfba[_0x5b1187]||[],_0xe25f0f=[];for(var _0x5764ac=0x15b9+-0x11*-0x99+-0x2e6*0xb;_0x66ae08['eGnun'](_0x5764ac,_0x28941c['lengt'+'h']);_0x5764ac++){var _0x636257=_0x28941c[_0x5764ac][0xec3*0x1+-0x2243+0x10*0x138],_0x2f0170=_0x28941c[_0x5764ac][-0x71*0x47+0x1336+0x1*0xc22];if(_0x2f0170[_0x2f5084(0x792)+'Of'](_0x66ae08['PGTFj'])===0x187*-0x5+-0x20ce+-0x15*-0x1ed){if(_0x2f5084(0x110)!=='bejza'){var _0x4df747=_0x3ca8e0(_0x2f5084(0x46d),_0x2f5084(0x5b7)+'l'),_0x28b7ef=_0x36051f(_0x2f5084(0x46d),_0x2f5084(0x2b7)+_0x2f5084(0x5b1),_0x1e6358+(_0x491714?_0x66ae08['FLkCN'](_0x66ae08['dLbHo'],_0x42786a)+_0x66ae08[_0x2f5084(0x82b)]:''));return _0x4df747['appen'+'dChil'+'d'](_0x28b7ef),_0x4df747;}else{var _0x1d018e=_0x66ae08[_0x2f5084(0x111)](_0x170f9a,_0x4ccf0f['ptr'],_0x636257,_0x2f0170);if(!_0x1d018e)continue;_0x1d018e['o']=_0x636257,_0x1d018e['k']=_0x2f0170,_0xe25f0f[_0x2f5084(0x3f5)](_0x1d018e);}}else{if(_0x66ae08[_0x2f5084(0x3eb)]!==_0x66ae08[_0x2f5084(0x5d5)]){var _0x1b29ed=_0x66ae08['ExVRl'](_0x5b90ef,_0x4ccf0f['ptr']+_0x636257,_0x2f0170);if(_0x1b29ed===undefined)continue;var _0x48653e={'o':_0x636257,'k':_0x2f0170,'v':_0x1b29ed};if(_0x2f0170==='v2'||_0x66ae08['ADMtM'](_0x2f0170,'v3')||_0x2f0170==='v4'){var _0x555403=_0x66ae08['ezCsO'](_0x2f0170,'v2')?0x1*-0x13ea+0x289*-0x3+0x105*0x1b:_0x2f0170==='v3'?0x1907+0x1*-0x1ed4+0xba*0x8:0x249b*-0x1+0xf88+0x1517,_0x39c8b8=_0x66ae08['Vqxay'](_0x2a0e06,_0x4ccf0f[_0x2f5084(0x568)],_0x636257,_0x555403);if(_0x39c8b8){if(_0x66ae08[_0x2f5084(0x94d)]!=='QLWkT'){var _0x208165=new _0x62c59f(_0x2f5084(0x171)+_0x2f5084(0x504));_0x208165[_0x2f5084(0x5a1)+_0x2f5084(0x3d1)+'e'](_0x5a1077),_0x410a5c['ILvio'](_0xbe7394,function(){var _0xc39273=_0x2f5084;try{_0x208165[_0xc39273(0x71b)]();}catch(_0x4151e3){}},-0x1ed7+-0xb*-0x95+0x196a);}else _0x48653e[_0x2f5084(0x4d0)]=_0x39c8b8,_0x48653e['v']=_0x39c8b8[-0x4*-0x8cc+-0x1*0xb76+-0x17ba];}}_0xe25f0f['push'](_0x48653e);}else{if(_0x4b43fe[_0x2f5084(0x747)]===_0x410a5c['wYaNn']){_0x410a5c[_0x2f5084(0x300)](_0x51af77)[_0x2f5084(0xa44)]({'host':_0x54408f[_0x2f5084(0x788)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x410a5c['NKLrh'](_0x3b03b7[_0x2f5084(0x747)],_0x2f5084(0x9af)+'t'))_0x52ec5a()['set'](_0x106f4f[_0x2f5084(0x9af)+'t']);}}}if(_0xe25f0f['lengt'+'h']){var _0x1f4e6c=_0x500e9f(_0xe25f0f);_0x287ec0[_0x5b1187]=_0x1f4e6c['rows'],_0x5e9dab[_0x5b1187]={'key':_0x1f4e6c[_0x2f5084(0x106)],'sane':_0x1f4e6c['sane'],'checked':_0x1f4e6c[_0x2f5084(0x812)+'ed'],'keyConsistent':_0x1f4e6c[_0x2f5084(0x81d)+_0x2f5084(0x4bc)+_0x2f5084(0x518)],'keySource':_0x1f4e6c['keySo'+_0x2f5084(0x336)]};}}return _0x287ec0;}function _0x500e9f(_0x54cbb3){var _0x3a78a0=_0x4a04dc,_0x150afb=0x256a+0x5d+-0x25c7*0x1,_0x49691d=0x1f7*0x5+0x22b6+0x36d*-0xd,_0x3e05e2=null;for(var _0x3046f9=0x2288+0x5e2+-0x5c6*0x7;_0x3046f9<_0x54cbb3[_0x3a78a0(0x320)+'h'];_0x3046f9++){if(_0x66ae08[_0x3a78a0(0xfb)]!==_0x3a78a0(0x23b)){var _0x22ac97=_0x54cbb3[_0x3046f9];if(_0x22ac97['k'][_0x3a78a0(0x792)+'Of']('obf')!==0x1a*-0x16a+0x6a7*-0x3+0x38b9)continue;_0x22ac97['v']=_0x66ae08[_0x3a78a0(0x1fe)](_0x2940b9,_0x22ac97['k'],_0x22ac97[_0x3a78a0(0x446)+'n'],_0x22ac97[_0x3a78a0(0xaaa)+_0x3a78a0(0x5a5)+'t0']),_0x22ac97['keyUs'+'ed']=_0x22ac97[_0x3a78a0(0xaaa)+'Offse'+'t0'],_0x22ac97[_0x3a78a0(0x79b)]=_0x66ae08['lxhkI'](_0x66ae08[_0x3a78a0(0x2f1)](_0x66ae08['opnmV'](_0x66ae08[_0x3a78a0(0x627)],_0x22ac97['hidde'+'n'])+('\x20fake'+'=')+_0x22ac97['fake']+(_0x22ac97[_0x3a78a0(0x701)]?'\x20ACTI'+'VE':'')+_0x3a78a0(0x99f),_0x22ac97['keyAt'+_0x3a78a0(0x5a5)+'t0'])+_0x3a78a0(0x729),_0x22ac97['hex']);if(_0x3e05e2===null)_0x3e05e2=_0x22ac97[_0x3a78a0(0xaaa)+_0x3a78a0(0x5a5)+'t0'];_0x49691d++,_0x3374a9(_0x22ac97)?(_0x150afb++,_0x22ac97['sane']=!![]):_0x22ac97[_0x3a78a0(0x72d)]=![],delete _0x22ac97['alt'];}else _0x8db804[_0x3a78a0(0x7be)+_0x3a78a0(0xa14)]['push'](_0x3a78a0(0x282)+_0x3a78a0(0x1d0)+_0x3a78a0(0x202)+'irst\x20'+'captu'+'re\x20(r'+'espaw'+_0x3a78a0(0x397)+_0x45bd1f[_0x3a78a0(0x8dd)+_0x3a78a0(0x16a)+_0x3a78a0(0x3ec)+'ed'][_0x3a78a0(0x1ed)](',\x20'));}return{'rows':_0x54cbb3,'key':_0x3e05e2,'sane':_0x150afb,'checked':_0x49691d,'keyConsistent':_0x594943(_0x54cbb3),'keySource':_0x3a78a0(0x267)+_0x3a78a0(0x536)+_0x3a78a0(0x6c7)+_0x3a78a0(0x6f4)};}function _0x594943(_0x4a0097){var _0x56401e=_0x4a04dc,_0x4e34dc={};for(var _0x5c97d4=-0x678*0x1+0xbb8*-0x1+0x1230;_0x5c97d4<_0x4a0097[_0x56401e(0x320)+'h'];_0x5c97d4++){var _0x165f78=_0x4a0097[_0x5c97d4];if(_0x165f78['k']['index'+'Of'](_0x56401e(0x1d9))!==-0x646+0x326+0xc8*0x4)continue;if(_0x66ae08['qINJo'](_0x4e34dc[_0x165f78['k']],undefined))_0x4e34dc[_0x165f78['k']]=_0x165f78['keyUs'+'ed'];else{if(_0x4e34dc[_0x165f78['k']]!==_0x165f78['keyUs'+'ed'])return![];}}return!![];}function _0x3374a9(_0xac1457){var _0x188e95=_0x4a04dc,_0x224cfb=_0xac1457['v'];if(typeof _0x224cfb!==_0x188e95(0x597)+'r'||!isFinite(_0x224cfb))return![];if(_0x66ae08['aZZHQ'](_0xac1457['k'],_0x188e95(0x3db)))return _0x224cfb===0x16e*-0x7+-0x1fc7*-0x1+-0x15c5||_0x224cfb===0x110d+0xf23+-0x202f;var _0x4d16d=_0xac1457['fake'];if(typeof _0x4d16d!==_0x66ae08['GNZWB']||!_0x66ae08[_0x188e95(0x13e)](isFinite,_0x4d16d))return!![];if(_0xac1457['act']===-0x1667+0x9f3*-0x2+0x2a4e)return Math[_0x188e95(0x810)](_0x224cfb-_0x4d16d)<=Math[_0x188e95(0x905)](-0xc8b*0x1+-0x24c7*0x1+0x3153,Math['abs'](_0x4d16d)*(0x1*0x94f+-0xf58*-0x2+-0x27ff+0.6));return _0x66ae08['iUuQt'](Math[_0x188e95(0x810)](_0x224cfb),-0x1c0a509c+-0x29e91f92+-0x1e*-0x4518a79);}function _0x4f380e(){var _0x50643b=_0x4a04dc,_0x184582={'TJdiQ':function(_0x4443da,_0x3c3e6a){return _0x4443da+_0x3c3e6a;},'tCtOh':'no-me'+'m','DzyzU':function(_0x277a19,_0x1708b0){return _0x277a19+_0x1708b0;},'AVoae':function(_0x1bc61c,_0x582b9b){var _0x8499cd=_0x32ef;return _0x66ae08[_0x8499cd(0x4ae)](_0x1bc61c,_0x582b9b);},'oJUQP':_0x66ae08[_0x50643b(0x768)],'wTPeQ':_0x50643b(0x507),'QxJkG':_0x50643b(0x1eb),'zZwOK':_0x50643b(0x918)+_0x50643b(0x745)+_0x50643b(0x2ca)+_0x50643b(0x594)+_0x50643b(0xae8)+_0x50643b(0x1be),'xGVmh':_0x50643b(0x426)+'a8'},_0x5c634a={};try{if(_0x66ae08[_0x50643b(0x6f7)](_0x66ae08[_0x50643b(0x25f)],'TGbCT')){var _0x412d4e=window['Unity'+'WebMo'+'dkit']&&window[_0x50643b(0x849)+'WebMo'+_0x50643b(0x540)][_0x50643b(0x4b9)+'me'];_0x5c634a[_0x50643b(0x3a1)]=_0x412d4e&&_0x412d4e['__sak'+_0x50643b(0x3ea)+'g']||null,_0x5c634a['tagMa'+_0x50643b(0xa5f)]=!!(_0x66ae08['dBjGJ'](_0x412d4e,_0x344957)&&_0x66ae08[_0x50643b(0x185)](_0x412d4e[_0x50643b(0x170)+_0x50643b(0x3ea)+'g'],_0x344957)),_0x5c634a[_0x50643b(0x142)+_0x50643b(0x7f7)+'e']=_0x412d4e&&_0x412d4e[_0x50643b(0x726)]?typeof _0x412d4e['_game']:_0x66ae08[_0x50643b(0x10b)],_0x5c634a['plugi'+_0x50643b(0x890)+_0x50643b(0x85e)+_0x50643b(0xe3)+'ted']=!!(_0x457238&&_0x457238[_0x50643b(0xa6a)+_0x50643b(0x9e9)]&&_0x457238[_0x50643b(0xa6a)+'ime']===_0x412d4e),_0x5c634a[_0x50643b(0x2ed)+_0x50643b(0x890)+_0x50643b(0x315)+'me']=_0x457238&&_0x457238[_0x50643b(0xa6a)+'ime']&&_0x457238['_runt'+_0x50643b(0x9e9)][_0x50643b(0x726)]?typeof _0x457238['_runt'+_0x50643b(0x9e9)]['_game']:'none';}else try{return _0x66ae08[_0x50643b(0x4ee)](_0x26e443[_0x50643b(0x3e9)+'em'](_0x57c1a4),'1');}catch(_0x2dea0a){return![];}}catch(_0x4df2d7){if(_0x66ae08['XNGlo']==='YMvUC')_0x5c634a['error']=String(_0x4df2d7&&_0x4df2d7['messa'+'ge']||_0x4df2d7);else{var _0x46b753=_0x4ff5f2[_0x50643b(0x70c)](_0x53f61c&&_0x289aba['insta'+_0x50643b(0xa49)]||{})[_0x50643b(0x320)+'h'],_0x4df743=_0x292d76&&_0x145d1b['esp']||null,_0x3f89a5=_0x4df743?_0x4df743[_0x50643b(0x34c)+_0x50643b(0x91d)]||-0x3*0x8b5+-0x311*0xc+0x3eeb:-0x11*0x2d+0x1*-0x132d+-0x2*-0xb15,_0x2f7b83=_0x4df743?_0x4df743[_0x50643b(0x710)+'unt']||-0x8f*-0x7+-0x1*-0x2225+-0x2*0x1307:-0x25ec+0x90e*0x2+-0x4f4*-0x4,_0x34c9c=_0x1c17c3?_0x184582['TJdiQ']((_0x366963[_0x50643b(0x8e1)+'r'][_0x50643b(0x7f4)+_0x50643b(0x4b8)]/(0x584*0x388+0x11b702+0x2*-0xa9891))[_0x50643b(0x626)+'ed'](0xaa*0x11+-0x19*-0x7f+-0x4bd*0x5),'MB'):_0x184582['tCtOh'],_0x47dab4=_0x184582['TJdiQ'](_0x184582[_0x50643b(0x4bd)](_0x184582['DzyzU'](_0x184582[_0x50643b(0xa88)](_0x184582[_0x50643b(0x4bd)]('v'+(_0xe4e684&&_0x24b65a[_0x50643b(0x330)+'on']||_0x3573af)+(_0x50643b(0x772)+'ks\x20'),_0xefa93f&&_0x3db67b['hooks'+_0x50643b(0x5f8)+'ed']||0x2601+-0x1*0x1ea6+-0x75b)+'/',_0x539be4&&_0x21cc8f['hooks'+_0x50643b(0x8dc)]||0x133f+-0x1*0x1418+0x7*0x1f)+_0x184582['oJUQP'],_0x46b753)+(_0x50643b(0x2ec)+'\x20'),_0x34c9c)+(_0x50643b(0x538)+_0x50643b(0x643)),_0x27fce9);_0x49a0a7['st']['textC'+'onten'+'t']=_0x47dab4;var _0x555042=_0x4d832b[_0x50643b(0x9f4)];_0x555042&&(_0x555042['textC'+'onten'+'t']=_0x3f89a5>-0x654+0xb*0x16d+-0x95b?_0x184582[_0x50643b(0xa88)]('PLAYE'+'RS\x20'+_0x3f89a5,_0x2f7b83?_0x184582['wTPeQ']+_0x2f7b83+_0x184582['QxJkG']:'')+(_0x4df743&&_0x4df743[_0x50643b(0x3bf)+'a']?'\x20\x20cam'+'\x20'+_0x4df743[_0x50643b(0x3bf)+_0x50643b(0x407)]:_0x50643b(0x88e)+'\x20-'):_0x184582[_0x50643b(0x4bd)](_0x184582[_0x50643b(0x21b)],_0x4df743&&_0x4df743['camer'+'a']?_0x4df743[_0x50643b(0x3bf)+'aFrom']:'-'),_0x555042[_0x50643b(0x443)]['color']=_0x3f89a5>0x120a+-0x23*0xf1+-0xee9*-0x1?_0x184582[_0x50643b(0x87e)]:'#8d7a'+'99');}}return _0x5c634a;}function _0x16003d(){var _0x43a7b8=_0x4a04dc,_0x2bb3de={'PbVrl':function(_0x5a5839,_0xc7f30c){return _0x5a5839+_0xc7f30c;}},_0x5a98a8=[_0x43a7b8(0x81f)+_0x43a7b8(0x9c1)+_0x43a7b8(0x2ab),_0x66ae08['MNlDS'],_0x43a7b8(0x2b5),'unity'+_0x43a7b8(0x9c1)+'nceWr'+_0x43a7b8(0x150)],_0xa4d019={};for(var _0x24b303=-0x220+-0x54a+0x76a*0x1;_0x24b303<_0x5a98a8[_0x43a7b8(0x320)+'h'];_0x24b303++){if(_0x66ae08[_0x43a7b8(0x26b)](_0x66ae08[_0x43a7b8(0x112)],'vmqQH')){var _0x31823b=_0x5a98a8[_0x24b303],_0x21ab87=typeof window[_0x31823b];_0xa4d019[_0x31823b]=_0x21ab87==='undef'+_0x43a7b8(0x625)?_0x66ae08['cDvlZ']:_0x21ab87;}else _0x145e3d[_0x43a7b8(0x40e)]=_0x215f90,_0x5020e0['on']=!![],_0x66ae08[_0x43a7b8(0x763)](_0x1395a4);}var _0x22284b=_0x581c21();_0xa4d019[_0x43a7b8(0x907)+_0x43a7b8(0x2c6)]=_0x991340[_0x43a7b8(0x6f9)+'e'];try{_0xa4d019['hasMo'+_0x43a7b8(0x208)]=!!(_0x22284b&&_0x22284b['Modul'+'e']),_0xa4d019[_0x43a7b8(0xa1d)+'8']=!!(_0x22284b&&_0x22284b[_0x43a7b8(0x3f7)+'e']&&_0x22284b[_0x43a7b8(0x3f7)+'e'][_0x43a7b8(0x44d)+'8']),_0xa4d019['heapB'+_0x43a7b8(0x201)]=_0xa4d019[_0x43a7b8(0xa1d)+'8']?_0x22284b[_0x43a7b8(0x3f7)+'e']['HEAPU'+'8'][_0x43a7b8(0x320)+'h']:0x229c*-0x1+-0x25*-0x8+0x2174;}catch(_0x121e90){if('IyIfZ'===_0x43a7b8(0x278))_0xa4d019['hasMo'+_0x43a7b8(0x208)]=![],_0xa4d019['heapU'+'8']=![],_0xa4d019[_0x43a7b8(0x3fe)+_0x43a7b8(0x201)]=-0x1*-0x21d+-0x1*0xb2b+0x487*0x2;else{var _0x3ef5ae={};for(var _0x2742e4 in _0x3bbd04){var _0x844272=_0x29256d[_0x2742e4];for(var _0x333319=0x101e*-0x1+-0xd6*-0x1+0xf48;_0x333319<_0x844272[_0x43a7b8(0x320)+'h'];_0x333319++){_0x3ef5ae[_0x2bb3de['PbVrl'](_0x2742e4,'+0x')+_0x844272[_0x333319]['o']['toStr'+'ing'](0x3*-0x39d+0x1e2*-0x10+0x2907)]=_0x844272[_0x333319]['v'];}}return _0x3ef5ae;}}return _0xa4d019[_0x43a7b8(0xa1b)+'Wrapp'+'er']=typeof _0x167409,_0xa4d019;}function _0x22171b(_0x422ecc){var _0x3935e1=_0x4a04dc,_0x2cc56c={};for(var _0x2479e0 in _0x422ecc){if(_0x3935e1(0x31e)!==_0x66ae08[_0x3935e1(0x898)]){var _0x1d1c17=_0x422ecc[_0x2479e0];for(var _0x4ea0ab=-0x2b*-0x61+0x1*-0x188f+-0x422*-0x2;_0x66ae08['uoZdV'](_0x4ea0ab,_0x1d1c17[_0x3935e1(0x320)+'h']);_0x4ea0ab++){_0x66ae08[_0x3935e1(0x485)](_0x3935e1(0x7db),_0x66ae08['KVysv'])?_0x2cc56c[_0x66ae08['mmAPK'](_0x2479e0+_0x66ae08[_0x3935e1(0x9f5)],_0x1d1c17[_0x4ea0ab]['o'][_0x3935e1(0x108)+'ing'](0x19e9+0x1b29+-0x3502))]=_0x1d1c17[_0x4ea0ab]['v']:_0x66ae08['OzSbX'](_0x113948);}}else _0x1d259b[_0x3935e1(0x5d2)][_0x3935e1(0x178)+'ed']=![];}return _0x2cc56c;}function _0x1eff61(_0x1dd5e9,_0x4aa414){var _0x343d2b=_0x4a04dc,_0x3de3d6={'OUcjs':_0x66ae08['eJlXL']};if(_0x1dd5e9===_0x343d2b(0x7e0)){if(_0x66ae08['JIkSm'](_0x66ae08[_0x343d2b(0x2b6)],_0x343d2b(0x22f))){_0x66ae08[_0x343d2b(0x70a)](_0xaf0655,_0x4aa414&&typeof _0x4aa414['on']===_0x66ae08['nrMRv']?_0x4aa414['on']:_0x16a9cd['on'],_0x4aa414&&typeof _0x4aa414['facto'+'r']===_0x66ae08[_0x343d2b(0x1c3)]?_0x4aa414[_0x343d2b(0x576)+'r']:_0x16a9cd['facto'+'r']);return;}else return _0x4dbe25['sourc'+'e']=_0x3de3d6[_0x343d2b(0x149)],_0x210d1e['_game'];}if(_0x66ae08['SqMaV'](_0x1dd5e9,_0x66ae08[_0x343d2b(0x2e8)]))return;var _0x3adb6d=_0x66ae08[_0x343d2b(0x713)](_0x534052),_0x336e20=_0x22171b(_0x3adb6d);if(!_0x36facd){_0x36facd=_0x336e20,_0x574e57=[],_0x577778(_0x66ae08[_0x343d2b(0x2a1)],{'report':_0x187b50()});return;}_0x574e57=[];for(var _0x4d91d2 in _0x336e20){var _0x187196=_0x36facd[_0x4d91d2],_0x38b592=_0x336e20[_0x4d91d2];if(_0x66ae08[_0x343d2b(0x469)](_0x187196,_0x38b592))_0x574e57['push'](_0x4d91d2+':\x20'+_0x187196+_0x66ae08['lmGrQ']+_0x38b592);}_0x36facd=_0x336e20,_0x66ae08['OXrla'](_0x577778,_0x66ae08['MpLCs'],{'report':_0x66ae08[_0x343d2b(0x135)](_0x187b50)});}var _0x3ff3c4=null;function _0x480ba8(){var _0x2eb912=_0x4a04dc,_0x259678={'utRrJ':function(_0x146841,_0x25b148,_0x32b62f){return _0x146841(_0x25b148,_0x32b62f);},'bTdsE':function(_0x449af9,_0x56f480){return _0x449af9(_0x56f480);},'KwBCB':_0x66ae08['rVJeT'],'DvMVk':_0x2eb912(0x516),'KNBkM':_0x66ae08[_0x2eb912(0x602)],'PkSbj':'eVOQZ','chcDb':_0x2eb912(0x36b),'pMUFV':_0x66ae08[_0x2eb912(0x134)],'cUxgE':function(_0x2bb015){return _0x2bb015();},'vpWFv':_0x2eb912(0x8ff),'FzTMI':function(_0x15e548,_0x33c1ee){return _0x15e548===_0x33c1ee;},'jNnpY':_0x66ae08['LLfsI']};if(_0x3ff3c4)return _0x3ff3c4;try{if(!document[_0x2eb912(0x86e)]||!document[_0x2eb912(0x86e)][_0x2eb912(0x5b6)+_0x2eb912(0x3d0)+'d'])return null;if(!document['getEl'+'ement'+_0x2eb912(0x56d)]('sakur'+'a-sw-'+_0x2eb912(0x577)+'ss')){var _0xb65625=document['creat'+_0x2eb912(0x74c)+'ent'](_0x66ae08['Ctewn']);_0xb65625['id']='sakur'+_0x2eb912(0x66d)+_0x2eb912(0x577)+'ss',_0xb65625[_0x2eb912(0x665)+'onten'+'t']=_0x66ae08[_0x2eb912(0x307)],(document[_0x2eb912(0x7e7)]||document[_0x2eb912(0x919)+_0x2eb912(0x33f)+'ement'])[_0x2eb912(0x5b6)+_0x2eb912(0x3d0)+'d'](_0xb65625);}var _0x5b6855=document[_0x2eb912(0xa21)+'eElem'+'ent'](_0x2eb912(0x46d));_0x5b6855['id']=_0x2eb912(0x171)+_0x2eb912(0x66d)+_0x2eb912(0x84b),_0x5b6855['style']['cssTe'+'xt']=_0x66ae08[_0x2eb912(0x4c1)](_0x66ae08['cWCfU']+('backg'+'round'+_0x2eb912(0x677)+_0x2eb912(0x95e)+'2,29,'+_0x2eb912(0x24d)+'borde'+'r:1px'+'\x20soli'+_0x2eb912(0x1a8)+'a(255'+',143,'+_0x2eb912(0x265)+'45);b'+'order'+_0x2eb912(0x1cb)+_0x2eb912(0x64a)+'px;')+('paddi'+'ng:6p'+'x\x208px'+_0x2eb912(0xa77)+':11px'+'/1.45'+'\x20ui-m'+'onosp'+_0x2eb912(0xdf)+'onsol'+'as,mo'+_0x2eb912(0x40a)+_0x2eb912(0x4e2)+_0x2eb912(0x511)+_0x2eb912(0x8b5)+'5;'),'box-s'+_0x2eb912(0x20d)+':0\x2010'+_0x2eb912(0x4a9)+'px\x20-1'+_0x2eb912(0x85c)+_0x2eb912(0x901)+_0x2eb912(0x4f5)+'elect'+_0x2eb912(0x3b8)+';-web'+'kit-u'+_0x2eb912(0x4f5)+_0x2eb912(0x785)+_0x2eb912(0x3b8)+';');var _0x12f941=_0x2eb912(0x2c2)+_0x2eb912(0x371)+_0x2eb912(0x6de)+'2\x22\x20st'+'yle=\x22'+_0x2eb912(0x6bc)+':#8d7'+_0x2eb912(0x159)+_0x2eb912(0xaa4)+'dth:2'+_0x2eb912(0xa5c)+_0x2eb912(0x5e9)+_0x2eb912(0xa32);_0x5b6855['inner'+_0x2eb912(0x2c3)]=_0x66ae08[_0x2eb912(0x157)](_0x66ae08[_0x2eb912(0x68c)](_0x66ae08['BfQwX'](_0x66ae08['QvdDi'](_0x66ae08['AUQpT'](_0x66ae08['mFoFc'](_0x66ae08[_0x2eb912(0x4f3)](_0x66ae08['GOYDR'](_0x66ae08['vVVvX'](_0x66ae08[_0x2eb912(0x7f3)](_0x66ae08[_0x2eb912(0x54a)]+(_0x2eb912(0x64f)+'yle=\x22'+_0x2eb912(0x6bc)+':')+_0x28be14,_0x66ae08[_0x2eb912(0x3d3)]),_0x2eb912(0x348)+_0x2eb912(0x8e7)+'ta-a='+'\x22sp\x22\x20'+'style'+_0x2eb912(0x7d0)+_0x2eb912(0x4f8)+'nd:tr'+_0x2eb912(0x75a)+'rent;'+_0x2eb912(0x13c)+'r:1px'+_0x2eb912(0x861)+_0x2eb912(0x1a8)+_0x2eb912(0x137)+',143,'+_0x2eb912(0x265)+_0x2eb912(0x9a5)),_0x66ae08[_0x2eb912(0x9a8)]),_0x2eb912(0x4ea)+_0x2eb912(0xad5)+_0x2eb912(0x935)+_0x2eb912(0xa31)+'ype=\x22'+_0x2eb912(0x32d)+'\x22\x20min'+'=\x221\x22\x20'+_0x2eb912(0x70b)+_0x2eb912(0x61d)+'ep=\x220'+_0x2eb912(0x5da)+'alue='+_0x2eb912(0x68d)+'tyle='+_0x2eb912(0x22b)+'h:92p'+_0x2eb912(0x30a)+'ent-c'+_0x2eb912(0x18b)),_0x28be14)+';\x22>'+_0x66ae08[_0x2eb912(0x617)]+('<butt'+'on\x20da'+_0x2eb912(0x418)+_0x2eb912(0x291)+_0x2eb912(0x69b)+_0x2eb912(0x811)+_0x2eb912(0xa86)+_0x2eb912(0x12f)+'ransp'+_0x2eb912(0x8d3)+_0x2eb912(0x32b)+'er:1p'+'x\x20sol'+_0x2eb912(0x5dc)+_0x2eb912(0x7e5)+_0x2eb912(0x1f7)+_0x2eb912(0x975)+_0x2eb912(0x229)),'color'+_0x2eb912(0x155)+_0x2eb912(0x392)+'order'+'-radi'+'us:6p'+_0x2eb912(0x39c)+'ding:'+_0x2eb912(0x8ae)+'px;cu'+_0x2eb912(0x41a)+'point'+_0x2eb912(0x892)+_0x2eb912(0x972)+_0x2eb912(0x4aa)+';\x22>ES'+_0x2eb912(0x8da)+_0x2eb912(0xa15)+'on>'),_0x2eb912(0x348)+_0x2eb912(0x8e7)+_0x2eb912(0x418)+_0x2eb912(0x7d2)+'\x22\x20sty'+_0x2eb912(0x65a)+'ackgr'+_0x2eb912(0x3d4)+_0x2eb912(0x77f)+_0x2eb912(0x67c)+_0x2eb912(0x900)+'der:1'+_0x2eb912(0x89a)+'lid\x20r'+_0x2eb912(0x548)+'55,14'+_0x2eb912(0x173)+',.45)'+';')+(_0x2eb912(0x6bc)+':#f7e'+'ef5;b'+_0x2eb912(0x36e)+'-radi'+_0x2eb912(0xf8)+_0x2eb912(0x39c)+_0x2eb912(0x844)+_0x2eb912(0x8ae)+_0x2eb912(0xa95)+_0x2eb912(0x41a)+'point'+_0x2eb912(0x892)+_0x2eb912(0x972)+_0x2eb912(0x4aa)+_0x2eb912(0xaab)+'ap</b'+'utton'+'>')+(_0x2eb912(0x348)+_0x2eb912(0x8e7)+_0x2eb912(0x418)+'\x22fold'+_0x2eb912(0x7cf)+_0x2eb912(0x680)+_0x2eb912(0x113)+_0x2eb912(0xadf)+_0x2eb912(0x906)+';back'+'groun'+_0x2eb912(0x961)+_0x2eb912(0x532)+_0x2eb912(0x5ac)+_0x2eb912(0x36e)+':1px\x20'+_0x2eb912(0x70e)+_0x2eb912(0xa6d)+_0x2eb912(0x955)+_0x2eb912(0xa62)+_0x2eb912(0x275)+'5);'),_0x2eb912(0x6bc)+_0x2eb912(0x155)+_0x2eb912(0x392)+_0x2eb912(0x36e)+_0x2eb912(0x1cb)+'us:6p'+_0x2eb912(0x39c)+_0x2eb912(0x844)+_0x2eb912(0x21d)+_0x2eb912(0xa95)+_0x2eb912(0x41a)+'point'+'er;fo'+'nt:in'+_0x2eb912(0x4aa)+';\x22>-<'+_0x2eb912(0xa15)+'on>'),_0x66ae08[_0x2eb912(0x7f9)]),_0x2eb912(0x2c2)+_0x2eb912(0x371)+_0x2eb912(0x6de)+'\x22\x20sty'+'le=\x22c'+_0x2eb912(0x18b)+_0x2eb912(0x44f)+_0x2eb912(0x5d4)+_0x2eb912(0xa34)+_0x2eb912(0x991)+'0px;\x22'+'></di'+'v>')+('<div\x20'+_0x2eb912(0x371)+'a=\x22st'+_0x2eb912(0x7d1)+'yle=\x22'+_0x2eb912(0x6bc)+_0x2eb912(0x8ad)+'a99;m'+_0x2eb912(0xaa4)+_0x2eb912(0x253)+_0x2eb912(0xa5c)+_0x2eb912(0x5e9)+_0x2eb912(0xa32)),_0x5b6855[_0x2eb912(0x361)+'HTML']=_0x12f941;var _0x5802ee=function(_0x456f94){var _0x37ff40=_0x2eb912;return _0x5b6855[_0x37ff40(0x591)+'Selec'+'tor'](_0x37ff40(0x15c)+_0x37ff40(0x4de)+_0x456f94+'\x22]');},_0x3eda93=_0x66ae08[_0x2eb912(0x5db)](_0x5802ee,'st'),_0x47b4a4=_0x5802ee('st2'),_0x357c00=_0x66ae08['HSsMp'](_0x5802ee,'sp'),_0xdcd25=_0x5802ee('fx'),_0xeb79d3=_0x5802ee('fv'),_0x109545=_0x5802ee(_0x66ae08[_0x2eb912(0x4fd)]);if(_0x357c00)_0x357c00['oncli'+'ck']=function(){var _0x2b6f10=_0x2eb912;_0xaf0655(!_0x16a9cd['on'],_0x16a9cd[_0x2b6f10(0x576)+'r']);};if(_0xdcd25)_0xdcd25[_0x2eb912(0x19b)+'ut']=function(){var _0x4f1284=_0x2eb912;_0x259678[_0x4f1284(0x533)](_0xaf0655,_0x16a9cd['on'],parseFloat(_0xdcd25['value'])||0xe53+-0x1*-0x199d+-0x27ef);};if(_0x66ae08[_0x2eb912(0x8a7)](_0x5802ee,_0x66ae08['Govva']))_0x5802ee('snap')['oncli'+'ck']=function(){var _0x3e22d9=_0x2eb912;if(_0x3e22d9(0x132)!==_0x3e22d9(0x8c5))_0x1eff61(_0x3e22d9(0x2a2)+_0x3e22d9(0x87c));else{var _0x2dea0c=_0x2bb90e[_0x3e22d9(0x103)](this,arguments);try{if(_0x2dea0c&&typeof _0x2dea0c['then']==='funct'+'ion')_0x2dea0c['then'](_0x2afbb4,function(){});else _0x259678['bTdsE'](_0x2545e0,_0x2dea0c);}catch(_0x368f89){}return _0x2dea0c;}};var _0x379e92=_0x5802ee(_0x2eb912(0x6e2));if(_0x379e92)_0x379e92[_0x2eb912(0xa94)+'ck']=function(){var _0x536264=_0x2eb912;if(!_0x59fc88['on'])_0x259678[_0x536264(0x39a)]!==_0x259678[_0x536264(0x30e)]?(_0x59fc88['on']=!![],_0x59fc88['boxes']=![]):_0x55f2df['push']({'o':_0x11ba99[_0x137318][_0x536264(0x40b)+'rs'][_0x13cedc]['o'],'v':_0x3b26ec[_0x267060]['membe'+'rs'][_0x1248bb]['v'],'why':_0x259678['KwBCB']});else!_0x59fc88['boxes']?_0x259678[_0x536264(0x92a)]!==_0x259678['chcDb']?_0x59fc88[_0x536264(0x40e)]=!![]:_0x1b0a4a[_0x536264(0x7be)+'ngs']['push'](_0x536264(0x4e4)+_0x536264(0x82e)+_0x536264(0x107)+_0x536264(0x953)+_0x536264(0xa2a)+_0x536264(0x705)+_0x536264(0x8b6)+'is\x20mi'+_0x536264(0x154)+_0x536264(0xac0)+_0x536264(0x904)+'\x20is\x20r'+'unnin'+'g\x20bli'+'nd.'):_0x59fc88['on']=![];_0x379e92[_0x536264(0x665)+_0x536264(0x889)+'t']=!_0x59fc88['on']?'ESP\x20o'+'ff':_0x59fc88['boxes']?_0x536264(0x758)+'oth':_0x536264(0xa04)+'ap',_0x379e92['style'][_0x536264(0x376)+_0x536264(0x8aa)]=_0x59fc88['on']?_0x28be14:_0x536264(0x77f)+'paren'+'t',_0x379e92[_0x536264(0x443)]['color']=_0x59fc88['on']?_0x259678['pMUFV']:_0x536264(0x424)+'f5';try{var _0x3f92c6=_0x259678['cUxgE'](_0x1d394);if(_0x3f92c6&&_0x3f92c6['el'])_0x3f92c6['el']['style'][_0x536264(0x1e0)+'ay']=_0x59fc88['on']?'':_0x259678[_0x536264(0x86b)];var _0xdbc217=_0x29b3e2;if(_0xdbc217&&_0xdbc217['cv'])_0xdbc217['cv'][_0x536264(0x443)]['displ'+'ay']=_0x59fc88['on']&&_0x59fc88[_0x536264(0x40e)]?'':'none';}catch(_0x4636c1){}};if(_0x5802ee('fold'))_0x66ae08[_0x2eb912(0x266)](_0x5802ee,_0x2eb912(0x63e))[_0x2eb912(0xa94)+'ck']=function(){var _0x49e531=_0x2eb912;if(!_0x109545)return;var _0x40fb6b=_0x259678[_0x49e531(0xaf9)](_0x109545[_0x49e531(0x443)]['displ'+'ay'],'none');_0x109545[_0x49e531(0x443)][_0x49e531(0x1e0)+'ay']=_0x40fb6b?'':'none',_0x259678['bTdsE'](_0x5802ee,_0x259678['jNnpY'])[_0x49e531(0x665)+_0x49e531(0x889)+'t']=_0x40fb6b?'-':'+';};return document[_0x2eb912(0x86e)][_0x2eb912(0x5b6)+_0x2eb912(0x3d0)+'d'](_0x5b6855),_0x3ff3c4={'el':_0x5b6855,'st':_0x3eda93,'st2':_0x47b4a4,'sp':_0x357c00,'fx':_0xdcd25,'fv':_0xeb79d3},_0x3ff3c4;}catch(_0x5479ba){if('cZnLD'===_0x66ae08[_0x2eb912(0x1fa)])_0x31c403[_0x2eb912(0x665)+_0x2eb912(0x889)+'t']=_0x529978[_0x2eb912(0xa8c)+_0x2eb912(0x58f)](_0x2da36d,null,-0xb19+-0xdcd+0x18e7);else return console['warn'](_0x66ae08[_0x2eb912(0x572)],_0x2eb912(0x6bc)+':'+_0x28be14,_0x5479ba),null;}}var _0x2bf877=-0x2*0x533+-0x2518+0x2f80;function _0xaf0655(_0x5aa6a2,_0x39d4cf){var _0x2301be=_0x4a04dc,_0x4eba29=_0x16a9cd['on'];_0x16a9cd['on']=!!_0x5aa6a2;_0x16a9cd['on']&&!_0x4eba29&&(_0x39d4cf===undefined||_0x66ae08['MeDeu'](_0x39d4cf,null)||Number(_0x39d4cf)===-0x109e*-0x1+-0x212*0xb+0x629)&&(_0x39d4cf=_0x2bf877);_0x16a9cd[_0x2301be(0x576)+'r']=Math[_0x2301be(0x968)](_0x16a9cd[_0x2301be(0x905)],Math['max'](_0x16a9cd[_0x2301be(0x968)],_0x66ae08[_0x2301be(0x520)](Number,_0x39d4cf)||0x213a+0xe41+-0x2f7a*0x1));if(!_0x16a9cd['on'])_0x40e8ea={};var _0x41753b=_0x480ba8();if(_0x41753b){_0x41753b['sp']&&(_0x66ae08[_0x2301be(0x4ee)](_0x2301be(0x94e),_0x66ae08[_0x2301be(0x91c)])?(_0x41753b['sp']['textC'+'onten'+'t']=_0x16a9cd['on']?_0x66ae08[_0x2301be(0x7b8)]:_0x2301be(0x913)+_0x2301be(0x246),_0x41753b['sp'][_0x2301be(0x443)][_0x2301be(0x376)+'round']=_0x16a9cd['on']?_0x28be14:_0x66ae08['YlcrN'],_0x41753b['sp']['style'][_0x2301be(0x6bc)]=_0x16a9cd['on']?_0x66ae08[_0x2301be(0x134)]:_0x66ae08[_0x2301be(0x9c3)]):_0x2f6da8());if(_0x41753b['fx'])_0x41753b['fx']['value']=String(_0x16a9cd['facto'+'r']);if(_0x41753b['fv'])_0x41753b['fv'][_0x2301be(0x665)+_0x2301be(0x889)+'t']=_0x66ae08[_0x2301be(0x342)](_0x16a9cd[_0x2301be(0x576)+'r']['toFix'+'ed'](-0xef6+-0xb14+0x1a0b),'x');}}function _0x2296eb(_0x2694b2){var _0x364d5=_0x4a04dc,_0x39bc93=_0x480ba8();if(!_0x39bc93||!_0x39bc93['st'])return;try{var _0x1f3da0=Object['keys'](_0x2694b2&&_0x2694b2[_0x364d5(0x8dd)+_0x364d5(0xa49)]||{})[_0x364d5(0x320)+'h'],_0x3d262c=_0x2694b2&&_0x2694b2['esp']||null,_0x196ac5=_0x3d262c?_0x3d262c[_0x364d5(0x34c)+'Count']||-0xe5a+-0x209b+0x2ef5:-0x672+0x1667+0xd7*-0x13,_0xacfb34=_0x3d262c?_0x3d262c[_0x364d5(0x710)+'unt']||-0xd*0x22b+-0x1d5b+0x398a:0x472*-0x3+0x10ce+-0x378,_0x394f98=_0xd31229?_0x66ae08[_0x364d5(0xab7)]((_0xd31229[_0x364d5(0x8e1)+'r'][_0x364d5(0x7f4)+'ength']/(-0x1b52bb*-0x1+-0xf46bd+0xa8ab*0x6))[_0x364d5(0x626)+'ed'](0x92d+-0x1*-0x22ad+-0xe9e*0x3),'MB'):_0x364d5(0x8b8)+'m',_0x546678=_0x66ae08[_0x364d5(0x2c0)](_0x66ae08[_0x364d5(0x213)](_0x66ae08['GWddJ'](_0x66ae08['grNXb'](_0x66ae08[_0x364d5(0x554)]('v',_0x2694b2&&_0x2694b2[_0x364d5(0x330)+'on']||_0x4eebbe),_0x364d5(0x772)+_0x364d5(0x1d5))+(_0x2694b2&&_0x2694b2[_0x364d5(0x55c)+'Appli'+'ed']||-0x2205+0x19*0x6f+0x172e),'/')+(_0x2694b2&&_0x2694b2['hooks'+_0x364d5(0x8dc)]||0x65*-0x29+-0x23ef*0x1+0x341c),_0x364d5(0x653)+'s\x20'),_0x1f3da0)+_0x66ae08['eJjQw']+_0x394f98+(_0x364d5(0x538)+'tes\x20')+_0x2aa737;_0x39bc93['st'][_0x364d5(0x665)+_0x364d5(0x889)+'t']=_0x546678;var _0xd8c131=_0x39bc93['st2'];if(_0xd8c131){if(_0x66ae08['enrYJ'](_0x66ae08[_0x364d5(0x994)],'aZpMZ')){var _0x185092=_0x4f2b54[_0x475f04],_0x36c4e8=_0x66ae08[_0x364d5(0xa67)](typeof _0x185092['v'],_0x66ae08[_0x364d5(0x1c3)])?_0x66ae08[_0x364d5(0x616)](_0x27bcf0['round'](_0x185092['v']*(0xc*-0x2ef+-0x1188+0x3a*0xfa)),-0x4*-0x47f+0xecf+-0xf*0x1ed):_0x185092['v'];_0x20e96d[_0x364d5(0x3f5)](_0x66ae08['Hydvc'](_0x66ae08[_0x364d5(0x6ed)](_0x66ae08[_0x364d5(0x7f3)]('\x20\x20',('0x'+_0x185092['o']['toStr'+_0x364d5(0x7e9)](0x5*-0x757+0x9*-0x319+0x2*0x2052))['padEn'+'d'](0x38*0x37+0xb9+-0xcb9))+'\x20'+_0x185092['k'][_0x364d5(0x3bc)+'d'](-0x2135*-0x1+-0x4d7+0x971*-0x3),'\x20')+_0x3aad13(_0x36c4e8)['padEn'+'d'](-0x27a+0x2671+0x65*-0x5b),'\x20')+(_0x185092[_0x364d5(0x79b)]||''));}else _0xd8c131['textC'+'onten'+'t']=_0x66ae08[_0x364d5(0x650)](_0x196ac5,0xe96*0x1+-0x1*-0x8fd+-0x1793)?_0x66ae08[_0x364d5(0x84c)](_0x66ae08['lRtjG']+_0x196ac5,_0xacfb34?_0x66ae08[_0x364d5(0x60e)](_0x364d5(0x507),_0xacfb34)+_0x66ae08[_0x364d5(0xa87)]:'')+(_0x3d262c&&_0x3d262c[_0x364d5(0x3bf)+'a']?_0x364d5(0x88e)+'\x20'+_0x3d262c['camer'+_0x364d5(0x407)]:_0x66ae08[_0x364d5(0x276)]):_0x66ae08['rbDvO']+(_0x3d262c&&_0x3d262c['camer'+'a']?_0x3d262c[_0x364d5(0x3bf)+_0x364d5(0x407)]:'-'),_0xd8c131[_0x364d5(0x443)][_0x364d5(0x6bc)]=_0x196ac5>0x1bea+0x2*-0x10e7+0xd*0x74?'#7ee0'+'a8':'#8d7a'+'99';}}catch(_0xd0f595){}}window['addEv'+_0x4a04dc(0x7ec)+'stene'+'r'](_0x4a04dc(0x6fe)+'wn',function(_0x439a64){var _0x36dfb9=_0x4a04dc,_0x271581={'hPlsH':function(_0x73d742,_0x375fa4){return _0x73d742+_0x375fa4;},'uKOsF':_0x66ae08['OfCAy'],'NpFDG':'\x20past'+_0x36dfb9(0x25c)+'\x20end\x20'+'0x','IwboJ':function(_0x1d602f,_0x232ca0){return _0x1d602f(_0x232ca0);},'hUsuv':'span','xVCHv':_0x36dfb9(0x549)+'l'};if(_0x66ae08[_0x36dfb9(0xa55)](_0x66ae08['twaUm'],_0x66ae08[_0x36dfb9(0x936)])){if(!_0x439a64)return;try{if(_0x439a64[_0x36dfb9(0x963)]==='F9'){if(_0x66ae08['meGMy']!==_0x66ae08[_0x36dfb9(0x49a)])_0x491a51[_0x36dfb9(0x7be)+_0x36dfb9(0xa14)][_0x36dfb9(0x3f5)](_0x66ae08[_0x36dfb9(0x5c8)](_0x66ae08['FDRKL'](_0x66ae08['GRrPr'](_0x66ae08[_0x36dfb9(0xa84)](_0x36dfb9(0x7fe)+'resol'+_0x36dfb9(0x2a5),_0x3fb111[_0x36dfb9(0x55c)+_0x36dfb9(0x5d1)+_0x36dfb9(0x3b1)]),_0x36dfb9(0x706))+_0x52116d[_0x36dfb9(0x55c)+'Total'],_0x66ae08[_0x36dfb9(0x440)]),_0x66ae08['TcjPZ']));else{_0x439a64['preve'+'ntDef'+_0x36dfb9(0x630)](),_0x66ae08['ZaVuz'](_0x1eff61,_0x66ae08[_0x36dfb9(0x2e8)]);return;}}if(_0x439a64['code']==='F7'){_0x439a64['preve'+_0x36dfb9(0x364)+'ault'](),_0x66ae08[_0x36dfb9(0x7aa)](_0xaf0655,!_0x16a9cd['on'],_0x16a9cd['facto'+'r']);return;}if(_0x439a64['code']==='F8'){if(_0x66ae08['SxgNE']===_0x66ae08[_0x36dfb9(0x498)]){_0x439a64[_0x36dfb9(0x53c)+_0x36dfb9(0x364)+_0x36dfb9(0x630)](),_0x66ae08['RxOhz'](_0xaf0655,_0x16a9cd['on'],_0x16a9cd['facto'+'r']+(-0xd*-0x94+0x11d8+-0x195c+0.5));return;}else return _0x5acc75[_0x36dfb9(0x5f2)+'d']++,_0x31e5bf['lastE'+'rror']=_0x33376d['lastE'+_0x36dfb9(0x8eb)]||_0x271581['hPlsH'](_0x271581[_0x36dfb9(0x9dd)]+(_0x347437+_0xf4e2ce)[_0x36dfb9(0x108)+_0x36dfb9(0x7e9)](0x4a9*0x5+-0x26d4+-0xd*-0x133)+_0x271581[_0x36dfb9(0x957)],_0x576012['byteL'+_0x36dfb9(0x4b8)][_0x36dfb9(0x108)+'ing'](0x188*0x11+-0x1a7f+0x87)),null;}if(_0x66ae08['ezCsO'](_0x439a64[_0x36dfb9(0x963)],'F6')){_0x439a64[_0x36dfb9(0x53c)+_0x36dfb9(0x364)+_0x36dfb9(0x630)](),_0x66ae08['SKZdr'](_0xaf0655,_0x16a9cd['on'],_0x16a9cd['facto'+'r']-(0x189c+-0x22*-0x17+-0x1baa+0.5));return;}if(_0x66ae08[_0x36dfb9(0x210)](_0x439a64['code'],_0x66ae08[_0x36dfb9(0x26f)])){_0x439a64[_0x36dfb9(0x53c)+'ntDef'+_0x36dfb9(0x630)](),_0x66ae08['QvOLl'](_0x84458,!_0x323eb3[_0x36dfb9(0x2d9)]);return;}if(_0x66ae08['islVv'](_0x439a64['code'],_0x66ae08[_0x36dfb9(0x29e)])){_0x439a64['preve'+_0x36dfb9(0x364)+'ault'](),_0x447f63[_0x36dfb9(0x206)]=Math[_0x36dfb9(0x968)](0x10be+-0xa27*-0x3+0x1*-0x2ea7,_0x66ae08[_0x36dfb9(0x420)](_0x447f63[_0x36dfb9(0x206)],0x26cc+-0xb46*0x1+0x1b84*-0x1)),_0x348d3f();return;}if(_0x66ae08['rWrNk'](_0x439a64[_0x36dfb9(0x963)],'Brack'+_0x36dfb9(0x3ff)+'t')){_0x439a64[_0x36dfb9(0x53c)+'ntDef'+_0x36dfb9(0x630)](),_0x447f63[_0x36dfb9(0x206)]=Math['max'](-0xabb+-0x2118+0x2bf1,_0x447f63[_0x36dfb9(0x206)]-(0x220*-0x5+-0x18e2+0x2384)),_0x66ae08[_0x36dfb9(0x713)](_0x348d3f);return;}}catch(_0x48088f){}}else{var _0xcc2d=('8|1|3'+_0x36dfb9(0x737)+_0x36dfb9(0x8af)+'|5|2')['split']('|'),_0x4de2ec=0x1393*0x1+-0x193*-0x11+0x172b*-0x2;while(!![]){switch(_0xcc2d[_0x4de2ec++]){case'0':_0x14564c[_0x36dfb9(0x665)+'onten'+'t']=_0x271581['IwboJ'](_0x21970b,_0x17afc8[_0x14e7ac][-0x642+0x1d*0x12d+-0x1bd5]);continue;case'1':var _0x14564c=_0x258831(_0x271581[_0x36dfb9(0x1ca)],_0x271581[_0x36dfb9(0x105)]);continue;case'2':_0x1a7702[_0x36dfb9(0x86e)][_0x36dfb9(0x70d)+'hild']['sp']=_0x14564c;continue;case'3':_0x14564c[_0x36dfb9(0x443)]['minWi'+_0x36dfb9(0x6ab)]='0';continue;case'4':_0x14564c[_0x36dfb9(0x443)][_0x36dfb9(0xa45)+'lign']=_0x36dfb9(0x8a0);continue;case'5':_0x2058d2['body'][_0x36dfb9(0x5b6)+_0x36dfb9(0x3d0)+'d'](_0x1b762c);continue;case'6':_0x1b762c['appen'+'dChil'+'d'](_0x14564c);continue;case'7':_0x14564c[_0x36dfb9(0x443)]['flex']='1';continue;case'8':var _0x1b762c=_0x271581['IwboJ'](_0x377ed3,_0x4b7c04[_0x595ba0][-0x1*0x1a7b+-0x1*-0x182+0x3*0x853]);continue;case'9':_0x14564c[_0x36dfb9(0x884)+'et']['k']=_0xacd2f6[_0x57f002][0x301+-0xf50+0xc50];continue;}break;}}},!![]);var _0x59fc88={'on':!![],'span':0x50,'boxes':![]};function _0x11d1c7(){var _0x58f602=_0x4a04dc,_0x4e4534=_0x10506e['Photo'+_0x58f602(0x891)+'orkSy'+'nc']||{},_0x466f6b=Object[_0x58f602(0x70c)](_0x4e4534);for(var _0xe536de=-0x261a+0x1*0x16ed+-0xf2d*-0x1;_0xe536de<_0x466f6b[_0x58f602(0x320)+'h'];_0xe536de++){if(_0x66ae08[_0x58f602(0xa0d)]!==_0x58f602(0x1f5)){var _0x33dd9b=_0x4e4534[_0x466f6b[_0xe536de]][_0x58f602(0x568)],_0x235ab3=_0x66ae08[_0x58f602(0x3f2)](_0x5b90ef,_0x66ae08[_0x58f602(0x2f6)](_0x33dd9b,-0x1*0x58e+-0x705*0x4+0x21d2),_0x66ae08[_0x58f602(0x128)]);if(!_0x235ab3)continue;var _0x16d3d3=_0x35cfba[_0x58f602(0x7ea)+'Look']||[],_0x751fdd={'mouseLook':_0x66ae08['poWoP']('0x',(_0x235ab3>>>-0x1be1+0x171e+-0x4c3*-0x1)[_0x58f602(0x108)+'ing'](-0x2351*-0x1+-0xebd+0x1484*-0x1)),'floats':{},'camera':null,'vec2':null};for(var _0xf6afe=0x13e*0x13+-0x2*0x432+-0xf36;_0x66ae08[_0x58f602(0x703)](_0xf6afe,_0x16d3d3[_0x58f602(0x320)+'h']);_0xf6afe++){if(_0x66ae08['enrYJ'](_0x16d3d3[_0xf6afe][0x20e8+0xea2+-0x2f89],_0x66ae08['OuARl']))continue;_0x751fdd[_0x58f602(0x3c0)+'s']['0x'+_0x16d3d3[_0xf6afe][0x1f7*0x1+0x5b1*0x4+-0x1e7*0xd][_0x58f602(0x108)+_0x58f602(0x7e9)](0x1ab0+-0x2300+0x43*0x20)]=_0x5b90ef(_0x235ab3+_0x16d3d3[_0xf6afe][-0x31*-0x81+-0x26*-0x34+-0x2069*0x1],_0x58f602(0x2fb));}var _0xb628a1=_0x5b90ef(_0x235ab3+(0x70c+0xe1f*0x2+0x1f*-0x122),_0x66ae08[_0x58f602(0x128)]);if(_0xb628a1)_0x751fdd['camer'+'a']=_0x66ae08[_0x58f602(0x9ec)]('0x',(_0xb628a1>>>0xe36+0x3e4*-0x1+-0x529*0x2)['toStr'+'ing'](-0x3*-0x569+-0x484+-0xba7));var _0x621aa2=_0x66ae08['HiGnX'](_0x2a0e06,_0x235ab3,-0xd0+-0x2275+0x13*0x1df,0x1cda+0xb89+0x1*-0x2861);if(_0x621aa2)_0x751fdd['vec2']=_0x621aa2;return _0x751fdd;}else{var _0x154551=_0x441fd9['getEl'+'ement'+_0x58f602(0x56d)]('sakur'+'a-sw-'+'v2-ta'+'b');if(_0x66ae08['srmIO'](_0x552432,!_0x154551)&&_0x13d84c[_0x58f602(0x86e)]){var _0x1c5dc9=_0xcc5c05['creat'+_0x58f602(0x74c)+_0x58f602(0x518)](_0x66ae08[_0x58f602(0x6fc)]);_0x1c5dc9['id']=_0x58f602(0x171)+'a-sw-'+_0x58f602(0x79f)+'b',_0x1c5dc9['style']['cssTe'+'xt']=_0x66ae08[_0x58f602(0x7f3)](_0x66ae08[_0x58f602(0xa73)](_0x58f602(0x492)+'ion:f'+_0x58f602(0x654)+_0x58f602(0x824)+_0x58f602(0x97b)+'top:1'+'2px;z'+_0x58f602(0x967)+'x:214'+'74829'+_0x58f602(0x667)+'rsor:'+_0x58f602(0x698)+_0x58f602(0xa99)+_0x58f602(0x10a)+_0x58f602(0x8d8)+'none;'+(_0x58f602(0x376)+'round'+_0x58f602(0x677)+_0x58f602(0x95e)+_0x58f602(0x8a2)+_0x58f602(0x250)+_0x58f602(0x36e)+_0x58f602(0xa02)+'solid'+_0x58f602(0xa6d)+'(255,'+_0x58f602(0xa62)+_0x58f602(0x1d1)+');col'+_0x58f602(0x7ef)),_0x5b4beb)+';',_0x58f602(0x13c)+'r-rad'+'ius:9'+_0x58f602(0xa22)+_0x58f602(0x856)+_0x58f602(0x2f2)+'x\x2012p'+_0x58f602(0x9b1)+_0x58f602(0x255)+_0x58f602(0x3cd)+'\x20ui-m'+_0x58f602(0x764)+_0x58f602(0xdf)+'onsol'+_0x58f602(0xaea)+_0x58f602(0x40a)+_0x58f602(0x52b)),_0x1c5dc9['textC'+_0x58f602(0x889)+'t']=_0x66ae08[_0x58f602(0x634)],_0x1c5dc9[_0x58f602(0xa94)+'ck']=function(){_0x4bf862(![]),_0x20451c();},_0x239614[_0x58f602(0x86e)][_0x58f602(0x5b6)+_0x58f602(0x3d0)+'d'](_0x1c5dc9);}else!_0x11c5b9&&_0x154551&&_0x154551[_0x58f602(0x2ff)+'e']();}}return null;}var _0x4ed70c=_0x66ae08['RJpKe'],_0x447f63={'pitch':null,'yaw':null,'pitchOff':0x0,'yawOff':0x0,'fov':0x5a,'known':![]};try{if(_0x66ae08[_0x4a04dc(0xa67)](_0x66ae08[_0x4a04dc(0x723)],_0x4a04dc(0x502))){var _0x59121a=localStorage[_0x4a04dc(0x3e9)+'em'](_0x4ed70c);if(_0x59121a)_0x447f63[_0x4a04dc(0x206)]=Math[_0x4a04dc(0x968)](-0x2*-0xb8d+-0x28b+-0x1403,Math[_0x4a04dc(0x905)](-0x15af*0x1+-0xee1+0xc3a*0x3,_0x66ae08[_0x4a04dc(0x5a8)](parseFloat,_0x59121a)||0x1ae+0x287*0x5+-0xdf7));}else _0x66ae08[_0x4a04dc(0x161)](_0x2d3ad5,_0xa4d5f7);}catch(_0x10a780){}function _0x348d3f(){try{localStorage['setIt'+'em'](_0x4ed70c,_0x66ae08['DSDVS'](String,_0x447f63['fov']));}catch(_0x27e5bf){}}function _0xffbf8f(){var _0x3e6d3e=_0x4a04dc,_0x245710={'pZhGd':function(_0x79ee4a,_0x2379c4){return _0x79ee4a-_0x2379c4;},'DoheK':function(_0x4b5554,_0x19f882){var _0x504e23=_0x32ef;return _0x66ae08[_0x504e23(0x257)](_0x4b5554,_0x19f882);},'JKxeg':function(_0x5a77b0,_0x229e47){return _0x5a77b0-_0x229e47;},'ItYsu':function(_0x45ba27,_0x53fb24){var _0x5af77b=_0x32ef;return _0x66ae08[_0x5af77b(0x9ec)](_0x45ba27,_0x53fb24);},'Mlqzt':function(_0x3ea090,_0x23e423){var _0x584d46=_0x32ef;return _0x66ae08[_0x584d46(0x610)](_0x3ea090,_0x23e423);},'NcQiX':function(_0xcd6f51,_0x27994a){return _0xcd6f51!==_0x27994a;},'LZLid':_0x3e6d3e(0x4d4)+'74'};if('pHNUd'!==_0x66ae08[_0x3e6d3e(0x8c2)]){var _0x736108=_0x430a80[_0x3e6d3e(0x6ae)][_0xeed1ba],_0x4fde73=(_0x736108['x']-_0x320619[_0x3e6d3e(0x8c1)][-0x63a+-0xa*-0x1a4+0x517*-0x2])*_0x3ddbcc,_0x4e5b4d=_0x245710[_0x3e6d3e(0x9e4)](_0x736108['z'],_0x27eb59['feet'][-0x3*0xc61+0x17c8+0xd5d])*_0x1fc574,_0x2004a9=_0x1393f1[_0x3e6d3e(0xacc)](_0x4fde73*_0x4fde73+_0x245710['DoheK'](_0x4e5b4d,_0x4e5b4d)),_0x249dfa=_0x37ef64,_0x486561=_0x19ab83;_0x2004a9>_0x30de4b-(-0x1a1f+-0xb*0x3d+0x1cc4)?(_0x249dfa=_0x4eac07+_0x4fde73/_0x2004a9*_0x245710['JKxeg'](_0x5afce2,0x1*0x174e+0x1c3+-0x190b),_0x486561=_0x245710['ItYsu'](_0x145796,_0x245710[_0x3e6d3e(0x7c8)](_0x245710[_0x3e6d3e(0x283)](_0x4e5b4d,_0x2004a9),_0xc9e25-(-0x103f*-0x2+-0x252a+-0x4b2*-0x1)))):(_0x249dfa=_0x4587cf+_0x4fde73,_0x486561=_0x41b864+_0x4e5b4d);var _0x52388a=_0x245710[_0x3e6d3e(0xabc)](_0x129c78,null)&&_0x736108[_0x3e6d3e(0x4d8)]===_0xcf4682;_0x515654[_0x3e6d3e(0x9da)+_0x3e6d3e(0x5c1)]=_0x52388a?_0x3e6d3e(0x99b)+'6a':_0x245710[_0x3e6d3e(0x284)],_0x3b0d23[_0x3e6d3e(0x415)+_0x3e6d3e(0x843)](),_0xe81186['arc'](_0x249dfa,_0x486561,_0x52388a?-0x9f5+-0x9*-0x386+-0x15bf*0x1:-0x83*0x2b+-0x2395+0x3999+0.20000000000000018,-0xeb9+0x6*-0x440+0x2839,_0x245710['DoheK'](_0x3a3845['PI'],-0x2289+-0x5d7+0x2862)),_0xb144b5['fill'](),_0xe2134e++;}else{var _0x114237=_0x66ae08['QKmlR']['split']('|'),_0x5a83af=0x194a+0x1*-0xad5+-0xe75;while(!![]){switch(_0x114237[_0x5a83af++]){case'0':var _0x556b0f=parseInt(_0x3a2627['mouse'+_0x3e6d3e(0x8f3)],0xd12+0x1*-0xb3f+0xb*-0x29);continue;case'1':if(_0x66ae08[_0x3e6d3e(0x27a)](typeof _0x1a83ac,_0x66ae08['GNZWB'])||typeof _0x22e47c!==_0x3e6d3e(0x597)+'r')return null;continue;case'2':var _0x22e47c=_0x66ae08['ydwnb'](_0x5b90ef,_0x66ae08[_0x3e6d3e(0x14a)](_0x556b0f,-0x1554+0x1f89+-0xa19),'f32');continue;case'3':return{'pitch':_0x1a83ac+_0x447f63['pitch'+'Off'],'yaw':_0x22e47c+_0x447f63[_0x3e6d3e(0x6cb)+'f']};case'4':var _0x1a83ac=_0x66ae08[_0x3e6d3e(0x89b)](_0x5b90ef,_0x66ae08['XxCis'](_0x556b0f,0x1e9c+0x1da4+-0x3c28),_0x3e6d3e(0x2fb));continue;case'5':if(!_0x3a2627||!_0x3a2627['mouse'+'Look'])return null;continue;case'6':var _0x3a2627=_0x11d1c7();continue;}break;}}}function _0x10d4af(_0x179a47,_0x4eb89c,_0x2147f3,_0x15e30b){var _0x2ba5a1=_0x4a04dc;if(_0x66ae08['LGGtE'](_0x2ba5a1(0x7a3),_0x2ba5a1(0x4e8)))try{if(!_0x4a0f7f||!_0x4467c9)return null;var _0x2eac8f=new _0x7b6cf4(_0x34485e)['getCl'+'assNa'+'me']();return _0x2eac8f===_0x5bdc3a?null:_0x2eac8f;}catch(_0x3ce5f6){return null;}else{var _0x64bf6e=_0xffbf8f();if(!_0x64bf6e)return null;var _0x54cea4=_0x66ae08['pylRL'](_0x64bf6e['pitch']*Math['PI'],0x1700+-0x16c0+0x74*0x1),_0x46835e=_0x66ae08[_0x2ba5a1(0x797)](_0x66ae08[_0x2ba5a1(0x9db)](_0x64bf6e[_0x2ba5a1(0x4f4)],Math['PI']),0x139c+-0x135d+0x75),_0x44756b=Math['cos'](_0x54cea4),_0x3e46bc=_0x66ae08['ugiSJ'](Math[_0x2ba5a1(0x34d)](_0x46835e),_0x44756b),_0x2659c2=-Math['sin'](_0x54cea4),_0x3e539c=_0x66ae08[_0x2ba5a1(0x7d7)](Math[_0x2ba5a1(0x508)](_0x46835e),_0x44756b),_0x1d74c9=_0x3e539c,_0x407e4c=0x10e1*0x1+0x85*0xb+-0x1698,_0x51e279=-_0x3e46bc,_0x5e4b55=_0x4eb89c[0x1f43+0x191*-0x17+0x4c4]-_0x179a47[0xe04+-0x1e66+-0x12*-0xe9],_0x4420a6=_0x4eb89c[-0x4*-0x1d3+-0x1623*0x1+0xed8]-_0x179a47[0x15d*-0x1+0x3d1+-0x3*0xd1],_0x27c55b=_0x4eb89c[0xca+0xe81+-0xf49]-_0x179a47[-0x70*-0x29+-0xa3*-0xa+-0x184c],_0x469ac6=_0x66ae08[_0x2ba5a1(0x85f)](_0x5e4b55,_0x3e46bc)+_0x66ae08[_0x2ba5a1(0xa98)](_0x4420a6,_0x2659c2)+_0x27c55b*_0x3e539c;if(_0x66ae08['hzWaI'](_0x469ac6,-0x6a8+-0x6a7+0xd4f+0.05))return null;var _0x504624=_0x66ae08[_0x2ba5a1(0xa98)](_0x5e4b55,_0x1d74c9)+_0x66ae08['TbROy'](_0x4420a6,_0x407e4c)+_0x27c55b*_0x51e279,_0x3d0672=_0x66ae08[_0x2ba5a1(0x9ae)](_0x66ae08[_0x2ba5a1(0x7e4)](_0x5e4b55,_0x66ae08[_0x2ba5a1(0x2ea)](_0x407e4c,_0x3e539c)-_0x51e279*_0x2659c2),_0x4420a6*_0x66ae08['gQYQz'](_0x66ae08['ARXxJ'](_0x51e279,_0x3e46bc),_0x1d74c9*_0x3e539c))+_0x27c55b*_0x66ae08[_0x2ba5a1(0x4cf)](_0x1d74c9*_0x2659c2,_0x66ae08[_0x2ba5a1(0x2ea)](_0x407e4c,_0x3e46bc)),_0x160681=_0x2147f3/_0x15e30b,_0x544d4b=_0x447f63[_0x2ba5a1(0x206)]*Math['PI']/(0x6d0+0x1cbb*0x1+-0x9*0x3df),_0x4520eb=Math['tan'](_0x66ae08['MfPvm'](_0x544d4b,-0x1bae+-0x1*-0x254a+0x2*-0x4cd)),_0x981508=_0x66ae08['WKnnu'](_0x504624/_0x469ac6,_0x66ae08[_0x2ba5a1(0x678)](_0x4520eb,_0x160681)),_0x5e5bd5=_0x66ae08[_0x2ba5a1(0x616)](_0x3d0672/_0x469ac6,_0x4520eb);if(_0x981508<-(-0x1325+-0x2*0xbab+0x4*0xa9f+0.6000000000000001)||_0x66ae08['Fyuky'](_0x981508,0xbf5+-0x27f+0x9*-0x10d+0.6000000000000001)||_0x66ae08[_0x2ba5a1(0x703)](_0x5e5bd5,-(0x35b+0xeda+-0x1234*0x1+0.6000000000000001))||_0x5e5bd5>0x1cf+0x1e1a+-0x1fe8+0.6000000000000001)return null;return{'x':(_0x66ae08['psLYj'](_0x981508,-0x35b+-0x1*-0x1ac0+-0x71*0x35+0.5)+(0x741+0x3*0xbf5+-0x2b20+0.5))*_0x2147f3,'y':_0x66ae08[_0x2ba5a1(0x257)](0x258b+0x10ec+0x49*-0xbf+0.5-_0x66ae08[_0x2ba5a1(0x1a7)](_0x5e5bd5,0x9*-0x16+-0x1b96+0x1c5c+0.5),_0x15e30b),'z':_0x469ac6};}}var _0x323eb3={'open':![],'cat':_0x4a04dc(0x409)+'t','built':![],'root':null,'cols':null,'head':null,'sub':null,'syncs':[]},_0x17e0e3=null,_0x318362=[{'id':_0x66ae08['HxXOR'],'label':_0x4a04dc(0x99a)},{'id':_0x4a04dc(0xad6)+'ls','label':'VIS'},{'id':_0x4a04dc(0xa1b)+'s','label':'VAL'},{'id':'log','label':'LOG'}],_0x3c06d2=_0x66ae08[_0x4a04dc(0x750)](_0x66ae08[_0x4a04dc(0x157)](_0x66ae08[_0x4a04dc(0x2ef)](_0x66ae08[_0x4a04dc(0x4c1)](_0x66ae08['IZOce'](_0x66ae08[_0x4a04dc(0x9d2)](_0x66ae08[_0x4a04dc(0xa84)](_0x66ae08[_0x4a04dc(0x436)](_0x66ae08[_0x4a04dc(0x6ed)](_0x66ae08[_0x4a04dc(0x1d2)](_0x66ae08[_0x4a04dc(0xabf)](_0x66ae08['kSsfW'](_0x66ae08[_0x4a04dc(0xa01)](_0x66ae08[_0x4a04dc(0x870)](_0x66ae08['qJkrh'](_0x66ae08[_0x4a04dc(0x827)](_0x66ae08[_0x4a04dc(0xabf)](_0x66ae08[_0x4a04dc(0x342)](_0x66ae08[_0x4a04dc(0x49f)](_0x66ae08[_0x4a04dc(0x366)](_0x66ae08[_0x4a04dc(0x7f3)](_0x66ae08['lXMlk'](_0x66ae08['Nclwp'](_0x66ae08['erhbP'](_0x66ae08[_0x4a04dc(0x439)](_0x66ae08[_0x4a04dc(0x2d8)](_0x66ae08[_0x4a04dc(0x40c)](_0x66ae08['nqWoh'](_0x66ae08[_0x4a04dc(0x8f1)]+('.mn-p'+_0x4a04dc(0x7e8)+'posit'+_0x4a04dc(0x86c)+_0x4a04dc(0x654)+_0x4a04dc(0x8a0)+':24px'+_0x4a04dc(0x3fa)+_0x4a04dc(0x8a5)+_0x4a04dc(0x21c)+'dth:m'+'in(62'+_0x4a04dc(0x248)+_0x4a04dc(0x76f)+'00vw\x20'+_0x4a04dc(0x74f)+'x));m'+_0x4a04dc(0x69c)+_0x4a04dc(0x29f)+_0x4a04dc(0x702)+_0x4a04dc(0x2fe)+_0x4a04dc(0x990)+_0x4a04dc(0x94b)+'\x20-\x2048'+_0x4a04dc(0x59d)),_0x66ae08[_0x4a04dc(0x505)]),_0x66ae08['CZbSG']),'box-s'+_0x4a04dc(0x20d)+_0x4a04dc(0x7bb)+_0x4a04dc(0x6e8)+_0x4a04dc(0xa6d)+_0x4a04dc(0x955)+'255,2'+'55,.0'+_0x4a04dc(0xae7)+_0x4a04dc(0x400)+'\x201px\x20'+_0x4a04dc(0x887)+'a(255'+',255,'+_0x4a04dc(0x52d)+'05),0'+_0x4a04dc(0x273)+_0x4a04dc(0x5b8)+_0x4a04dc(0xa6d)+'(0,0,'+'0,.55'+');'),_0x66ae08[_0x4a04dc(0x58e)]),_0x66ae08[_0x4a04dc(0x344)])+_0x66ae08[_0x4a04dc(0x5ce)]+_0x66ae08[_0x4a04dc(0x76e)]+_0x66ae08[_0x4a04dc(0xae5)],'.mn-l'+'ogo{d'+_0x4a04dc(0xaed)+'y:gri'+'d;pla'+_0x4a04dc(0x115)+_0x4a04dc(0x9ee)+'enter'+_0x4a04dc(0x1fb)+'h:32p'+'x;hei'+_0x4a04dc(0x734)+_0x4a04dc(0x188)+'argin'+_0x4a04dc(0x7da)+_0x4a04dc(0x23a)+_0x4a04dc(0x346)),_0x66ae08[_0x4a04dc(0x60b)]),_0x66ae08[_0x4a04dc(0xa43)])+('backg'+'round'+_0x4a04dc(0x74a)+'spare'+_0x4a04dc(0x46f)+_0x4a04dc(0x294)+'gba(2'+_0x4a04dc(0x3c8)+'8,242'+',.4);'+_0x4a04dc(0x2a7)+'r:poi'+'nter;'+_0x4a04dc(0x47a)+'size:'+'10px;'+_0x4a04dc(0x47a)+_0x4a04dc(0x4ef)+'t:700'+_0x4a04dc(0xa77)+'-fami'+_0x4a04dc(0x9c4)+'herit'+';}'),_0x66ae08[_0x4a04dc(0xa83)])+_0x66ae08['DbXGr']+('.mn-m'+'ain{f'+'lex:1'+_0x4a04dc(0x20c)+'width'+':0;di'+'splay'+_0x4a04dc(0x959)+_0x4a04dc(0x5f0)+_0x4a04dc(0x1d3)+_0x4a04dc(0x2e5)+_0x4a04dc(0xaa6)+_0x4a04dc(0x2ee)),_0x66ae08['tQBwv'])+_0x66ae08['hzODG']+(_0x4a04dc(0x2f5)+_0x4a04dc(0xa54)+_0x4a04dc(0x9d1)+_0x4a04dc(0x5fd)+_0x4a04dc(0xa77)+_0x4a04dc(0xa08)+_0x4a04dc(0x942)+_0x4a04dc(0xa5e))+('.mn-s'+_0x4a04dc(0x64b)+_0x4a04dc(0x109)+'ze:11'+_0x4a04dc(0x895)+'acity'+':.4;}')+_0x66ae08[_0x4a04dc(0x221)],_0x4a04dc(0x6bc)+':inhe'+_0x4a04dc(0x517)+_0x4a04dc(0x470)+'y:.45'+';curs'+_0x4a04dc(0x724)+'inter'+';}'),_0x66ae08['MKgSe'])+_0x66ae08['kAhwu'],_0x4a04dc(0xa7f)+'ols{f'+_0x4a04dc(0xaf0)+';min-'+_0x4a04dc(0x8c0)+'t:0;o'+'verfl'+'ow-y:'+_0x4a04dc(0xa4e)+_0x4a04dc(0x1e0)+_0x4a04dc(0x775)+_0x4a04dc(0x3ed)+_0x4a04dc(0xa53)+_0x4a04dc(0x3e3)+'e-col'+_0x4a04dc(0x18e)+'repea'+_0x4a04dc(0x999)+_0x4a04dc(0x845)+_0x4a04dc(0x29d)+'max(2'+_0x4a04dc(0xa74)+_0x4a04dc(0x695)+';'),'align'+_0x4a04dc(0x129)+'s:sta'+'rt;al'+_0x4a04dc(0x98b)+_0x4a04dc(0x889)+'t:sta'+'rt;ga'+_0x4a04dc(0x76b)+'x;pad'+'ding:'+_0x4a04dc(0x915)+_0x4a04dc(0x2aa)+_0x4a04dc(0xa5e))+(_0x4a04dc(0xa7f)+_0x4a04dc(0x1e5)+_0x4a04dc(0x9f8)+'it-sc'+_0x4a04dc(0x51b)+_0x4a04dc(0x199)+_0x4a04dc(0x527)+_0x4a04dc(0x116)),_0x4a04dc(0xa7f)+_0x4a04dc(0x1e5)+'-webk'+_0x4a04dc(0x4a4)+'rollb'+'ar-th'+'umb{b'+_0x4a04dc(0x5f6)+_0x4a04dc(0x3d4)+_0x4a04dc(0x947)+_0x4a04dc(0x75e)+'55,25'+'5,.08'+_0x4a04dc(0xa25)+'der-r'+'adius'+':4px;'+'}')+(_0x4a04dc(0xa39)+'ard{b'+_0x4a04dc(0x36e)+_0x4a04dc(0x1cb)+'us:12'+_0x4a04dc(0x32c)+'ckgro'+_0x4a04dc(0x428)+'gba(2'+_0x4a04dc(0xa9f)+'5,255'+_0x4a04dc(0x5c4)+_0x4a04dc(0xe1)+_0x4a04dc(0x4c3)+'ow:in'+'set\x200'+_0x4a04dc(0x8fa)+'1px\x20r'+'gba(2'+'55,25'+_0x4a04dc(0x664)+_0x4a04dc(0x90b)+';}'),_0x4a04dc(0xa39)+'ard.o'+_0x4a04dc(0xa9d)+_0x4a04dc(0x4f8)+_0x4a04dc(0x33e)+_0x4a04dc(0x7e5)+'5,255'+_0x4a04dc(0x20a)+'.04);'+_0x4a04dc(0x1d4)+_0x4a04dc(0x20d)+_0x4a04dc(0x37b)+_0x4a04dc(0x8a1)+'\x200\x201p'+_0x4a04dc(0x220)+_0x4a04dc(0x137)+_0x4a04dc(0x196)+_0x4a04dc(0x6d4)+_0x4a04dc(0x9fb)),'.sk-c'+'ard-h'+'ead{d'+'ispla'+_0x4a04dc(0x62b)+_0x4a04dc(0x18a)+_0x4a04dc(0x3dd)+_0x4a04dc(0x9ee)+'enter'+_0x4a04dc(0xafc)+'8px;p'+_0x4a04dc(0xa89)+'g:11p'+_0x4a04dc(0x183)+_0x4a04dc(0x346))+(_0x4a04dc(0xa39)+_0x4a04dc(0x16f)+'itle{'+'flex:'+'1;min'+'-widt'+_0x4a04dc(0x897)),_0x66ae08['DSaHA'])+_0x66ae08['ModAC']+(_0x4a04dc(0x25d)+'body{'+_0x4a04dc(0x856)+'ng:0\x20'+_0x4a04dc(0x2ae)+'10px;'+'}'),_0x66ae08[_0x4a04dc(0x245)]),'.sk-c'+'tl{di'+_0x4a04dc(0x3b2)+_0x4a04dc(0x959)+';alig'+'n-ite'+_0x4a04dc(0x878)+'nter;'+_0x4a04dc(0x848)+'px;pa'+_0x4a04dc(0xa41)+_0x4a04dc(0x2ba)+_0x4a04dc(0x7ff)+'t-siz'+_0x4a04dc(0x35d)+_0x4a04dc(0x5cc))+(_0x4a04dc(0x5b3)+_0x4a04dc(0x1b4)+'flex:'+_0x4a04dc(0x396)+'or:rg'+'ba(24'+'6,238'+',242,'+_0x4a04dc(0x96d)+'}'),_0x66ae08['FqliZ']),_0x66ae08['rTNkk'])+(_0x4a04dc(0x26a)+_0x4a04dc(0xe9)+'::aft'+_0x4a04dc(0x78c)+'ntent'+':\x22\x22;p'+_0x4a04dc(0x632)+_0x4a04dc(0x997)+_0x4a04dc(0x732)+'e;top'+_0x4a04dc(0x6f1)+_0x4a04dc(0x824)+_0x4a04dc(0xa80)+_0x4a04dc(0x1e4)+_0x4a04dc(0x704)+'eight'+':8px;'+_0x4a04dc(0x13c)+_0x4a04dc(0x6c0)+'ius:5'+'0%;')+('backg'+_0x4a04dc(0x8aa)+':rgba'+'(255,'+'255,2'+_0x4a04dc(0x8f9)+_0x4a04dc(0x3f9)+'ansit'+_0x4a04dc(0x5cb)+_0x4a04dc(0x804)+'2s,ba'+_0x4a04dc(0xa86)+_0x4a04dc(0x930)+'2s;}')+_0x66ae08[_0x4a04dc(0x1bd)],_0x4a04dc(0x26a)+'witch'+_0x4a04dc(0xa27)+'-chec'+_0x4a04dc(0x3b3)+'true\x22'+_0x4a04dc(0x39b)+_0x4a04dc(0x2a6)+_0x4a04dc(0x754)+_0x4a04dc(0x74d)+_0x4a04dc(0x5f6)+_0x4a04dc(0x3d4)+_0x4a04dc(0x16e)+'9d;}')+_0x66ae08[_0x4a04dc(0x2b4)],'.sk-s'+_0x4a04dc(0x1b7)+_0x4a04dc(0xad2)+'kit-a'+_0x4a04dc(0x331)+'ance:'+_0x4a04dc(0x4b7)+_0x4a04dc(0x167)+'rance'+_0x4a04dc(0x3b8)+_0x4a04dc(0x1fb)+_0x4a04dc(0x80b)+'x;hei'+'ght:8'+'px;ba'+_0x4a04dc(0xa86)+_0x4a04dc(0x12f)+_0x4a04dc(0x457)+_0x4a04dc(0x8d3)+';}'),'.sk-s'+_0x4a04dc(0x1b7)+'::-we'+_0x4a04dc(0x858)+'slide'+_0x4a04dc(0x26c)+_0x4a04dc(0x5be)+'-trac'+_0x4a04dc(0x8df)+'ght:2'+_0x4a04dc(0x765)+_0x4a04dc(0x66e)+_0x4a04dc(0x6b1)+'s:2px'+';')+_0x66ae08[_0x4a04dc(0x6ad)]+(_0x4a04dc(0x26a)+_0x4a04dc(0x1b7)+_0x4a04dc(0x63b)+_0x4a04dc(0x858)+'slide'+'r-thu'+'mb{-w'+'ebkit'+_0x4a04dc(0x5af)+_0x4a04dc(0xab2)+_0x4a04dc(0x370)+_0x4a04dc(0xe4)+'th:6p'+_0x4a04dc(0x62e)+_0x4a04dc(0x4bb)+'px;ma'+'rgin-'+_0x4a04dc(0x4af)+_0x4a04dc(0x728)+_0x4a04dc(0x36e)+_0x4a04dc(0x1cb)+_0x4a04dc(0x1a4)+_0x4a04dc(0xad7)+_0x4a04dc(0x4f8)+'nd:#f'+_0x4a04dc(0x3aa)+';}')+_0x66ae08['DTKKr']+('.sk-n'+_0x4a04dc(0x9ff)+'ont-s'+'ize:1'+_0x4a04dc(0x9ac)+_0x4a04dc(0x18b)+_0x4a04dc(0x947)+_0x4a04dc(0x61b)+'38,24'+'2,.5)'+_0x4a04dc(0x403)+_0x4a04dc(0x539)+_0x4a04dc(0x65b)+'white'+_0x4a04dc(0x721)+_0x4a04dc(0x74b)+'-wrap'+';}')+('.sk-n'+'ote.e'+_0x4a04dc(0x770)+'lor:#'+'ff7a9'+_0x4a04dc(0xa09))+(_0x4a04dc(0x3f8)+_0x4a04dc(0x36a)+'ign-s'+'elf:f'+_0x4a04dc(0x7f8)+_0x4a04dc(0x949)+_0x4a04dc(0x13c)+_0x4a04dc(0x66f)+'order'+_0x4a04dc(0x1cb)+'us:8p'+_0x4a04dc(0x39c)+'ding:'+'8px\x201'+_0x4a04dc(0x850)+'ackgr'+'ound:'+'#ff6b'+'9d;co'+_0x4a04dc(0x511)+_0x4a04dc(0x14d))+_0x66ae08[_0x4a04dc(0x623)]+_0x66ae08['jNVjN'],'.sk-p'+_0x4a04dc(0x214)+'nt:11'+'px/1.'+_0x4a04dc(0x911)+'monos'+'pace,'+_0x4a04dc(0x56a)+_0x4a04dc(0xa82)+_0x4a04dc(0x764)+'ace;w'+_0x4a04dc(0x24a)+_0x4a04dc(0xa19)+':pre-'+_0x4a04dc(0x766)+_0x4a04dc(0x223)+_0x4a04dc(0x44c)+':brea'+_0x4a04dc(0x908)+'d;mar'+'gin:0'+_0x4a04dc(0x44a)+_0x4a04dc(0x125)+_0x4a04dc(0x51c)+'x-hei'+_0x4a04dc(0x6e5)+_0x4a04dc(0x3f3)+'overf'+_0x4a04dc(0x48e)+'uto;}'),_0x4a04dc(0x530)+_0x4a04dc(0x9a7)+_0x4a04dc(0x79d)+_0x4a04dc(0x632)+_0x4a04dc(0x429)+'xed;t'+_0x4a04dc(0x8cb)+_0x4a04dc(0x6ac)+_0x4a04dc(0x9d5)+_0x4a04dc(0x120)+_0x4a04dc(0x967)+_0x4a04dc(0x8ce)+_0x4a04dc(0x51d)+'46;cu'+_0x4a04dc(0x41a)+'point'+_0x4a04dc(0x84f)+_0x4a04dc(0x253)+_0x4a04dc(0x847)+'eight'+_0x4a04dc(0xa59)+_0x4a04dc(0x44a)+'ity:.'+'5;'),'trans'+_0x4a04dc(0x41f)+':opac'+_0x4a04dc(0x575)+_0x4a04dc(0xa40)+_0x4a04dc(0x189)+'-even'+'ts:au'+'to;fi'+_0x4a04dc(0x2c8)+'drop-'+'shado'+'w(0\x200'+'\x204px\x20'+'rgba('+'255,1'+_0x4a04dc(0x191)+'7,.7)'+');}'),_0x26480e=_0x66ae08['WAKFx'](_0x66ae08[_0x4a04dc(0x8e8)]+_0x66ae08[_0x4a04dc(0x5b4)],_0x4a04dc(0x186)+'le\x20cx'+_0x4a04dc(0x818)+_0x4a04dc(0x380)+'10\x22\x20r'+_0x4a04dc(0xa26)+'\x22\x20fil'+_0x4a04dc(0x4fb)+'f6b9d'+_0x4a04dc(0x6b9)+_0x4a04dc(0x75b)),_0x14e4df=_0x66ae08[_0x4a04dc(0x4a6)](_0x66ae08[_0x4a04dc(0x656)](_0x4a04dc(0x89d)+_0x4a04dc(0x7ed)+_0x4a04dc(0x399)+'logo-'+'svg\x22\x20'+_0x4a04dc(0x5ba)+_0x4a04dc(0x6a1)+'\x200\x2024'+_0x4a04dc(0x7c4)+_0x4a04dc(0xac1)+_0x4a04dc(0xf9)+_0x4a04dc(0x46b)+'c-1.5'+'-2.5-'+_0x4a04dc(0x550)+_0x4a04dc(0x471)+'5\x200-2'+_0x4a04dc(0x637)+'8-4.5'+'\x204-4.'+'5s4\x202'+_0x4a04dc(0x141)+'5c0\x203'+_0x4a04dc(0x22c)+'5-4\x207'+'.5z\x22\x20','fill='+_0x4a04dc(0x3e4)+_0x4a04dc(0x952)+'oke=\x22'+'#ff6b'+'9d\x22\x20s'+_0x4a04dc(0x88f)+'-widt'+'h=\x221.'+'6\x22\x20st'+_0x4a04dc(0xe5)+'linec'+_0x4a04dc(0x292)+_0x4a04dc(0x1b2)+'\x20stro'+'ke-li'+'nejoi'+_0x4a04dc(0x5f9)+_0x4a04dc(0x1c2)+'>'),_0x4a04dc(0x186)+'le\x20cx'+_0x4a04dc(0x818)+_0x4a04dc(0x380)+_0x4a04dc(0x546)+'=\x221.2'+_0x4a04dc(0xae4)+'l=\x22#f'+'f6b9d'+_0x4a04dc(0x6b9)+'svg>');function _0x277e23(_0xcd3e3d,_0x46d536,_0x2d73e4){var _0x495ac4=_0x4a04dc,_0x464b72=document[_0x495ac4(0xa21)+_0x495ac4(0x74c)+_0x495ac4(0x518)](_0xcd3e3d);if(_0x46d536)_0x464b72['class'+_0x495ac4(0x529)]=_0x46d536;if(_0x2d73e4!=null)_0x464b72[_0x495ac4(0x361)+_0x495ac4(0x2c3)]=_0x2d73e4;return _0x464b72;}function _0xaf78dc(_0x23a9ae,_0x41482d){var _0x500db3=_0x4a04dc;if(_0x66ae08[_0x500db3(0x12e)]('OQIjP',_0x66ae08['hRkLH'])){var _0xdf6a41=_0x277e23(_0x66ae08['Gwpih'],_0x66ae08['eqXJz'](_0x500db3(0x461)+'rd',_0x41482d?'\x20on':'')),_0x4479d6=_0x66ae08[_0x500db3(0x152)](_0x277e23,'div',_0x500db3(0x461)+'rd-he'+'ad'),_0xf1da3f=_0x66ae08[_0x500db3(0x1c1)](_0x277e23,'div','sk-ca'+_0x500db3(0x175)+_0x500db3(0x1f2),_0x66ae08['XfGfi']+_0x23a9ae+('</str'+'ong>'));_0x4479d6['appen'+_0x500db3(0x3d0)+'d'](_0xf1da3f);var _0x9ec127=_0x277e23(_0x66ae08['Gwpih'],'sk-mb'+'ody');return _0xdf6a41['appen'+'dChil'+'d'](_0x4479d6),_0xdf6a41[_0x500db3(0x5b6)+'dChil'+'d'](_0x9ec127),_0xdf6a41[_0x500db3(0x86e)]=_0x9ec127,_0xdf6a41[_0x500db3(0x7e7)]=_0xf1da3f,_0xdf6a41;}else{var _0x34f329=_0x6a926b[_0x500db3(0x849)+'WebMo'+_0x500db3(0x540)]&&_0x1050bb[_0x500db3(0x849)+_0x500db3(0x166)+'dkit'][_0x500db3(0x4b9)+'me'];if(!_0x34f329||_0x66ae08[_0x500db3(0x351)](typeof _0x34f329[_0x500db3(0xa21)+'ePlug'+'in'],_0x500db3(0x80e)+'ion')){_0x4a27d1['error']='Runti'+_0x500db3(0x77b)+_0x500db3(0xada)+'lugin'+'\x20unav'+_0x500db3(0x375)+'le';return;}_0x377e52['attem'+'pted']=!![],_0xa6033f=_0x34f329['creat'+_0x500db3(0xf3)+'in']({'name':'sakur'+_0x500db3(0xa7e)+_0x500db3(0x299)+'z','version':_0x537c22,'referencedAssemblies':_0x32ac57[_0x500db3(0x688)]()}),_0x1906bc['ok']=!![];try{var _0x4d40b6=_0x2b385d['Unity'+_0x500db3(0x166)+'dkit'][_0x500db3(0x4b9)+'me'];_0x4d40b6[_0x500db3(0x170)+_0x500db3(0x3ea)+'g']=_0x66ae08['muZYM'](_0x4135c5,':')+_0x598d3c[_0x500db3(0x9e3)+'m']()[_0x500db3(0x108)+_0x500db3(0x7e9)](-0x24cd*0x1+0xf13*-0x1+0x3404)[_0x500db3(0x688)](-0x980+0x1*-0x1e67+0x27e9*0x1,0x1a8c+0x1187+0x1*-0x2c09),_0x2cbe2e=_0x4d40b6[_0x500db3(0x170)+_0x500db3(0x3ea)+'g'];}catch(_0xb415cd){}_0x66ae08[_0x500db3(0xf6)](_0x157b48),_0x213cd7[_0x500db3(0x55c)+'Regis'+'tered']=_0x39c232[_0x500db3(0x320)+'h'],_0x1bca2f(),_0x24c750[_0x500db3(0x666)+_0x500db3(0x63f)]=!![];}}function _0x1caa73(_0x371ac4,_0x3a4f86){var _0xea1df1=_0x4a04dc,_0x54b59f=_0x277e23(_0xea1df1(0xa3e)+'n',_0x66ae08['hgaah']);_0x54b59f[_0xea1df1(0x4dd)]='butto'+'n';var _0x5e5e99=function(){var _0x41e9fa=_0xea1df1;_0x54b59f['setAt'+_0x41e9fa(0x700)+'te']('aria-'+_0x41e9fa(0x812)+'ed',_0x371ac4()?_0x66ae08['EhGqk']:'false');};return _0x54b59f[_0xea1df1(0xa94)+'ck']=function(){var _0x311e21=_0xea1df1;if(_0x66ae08['iGwXz'](_0x66ae08[_0x311e21(0x552)],_0x311e21(0x65e))){var _0x319c20=_0x50971f(_0xab9b2e,_0xdadd6c,_0x20b4a1);if(!_0x319c20)return null;_0x319c20['o']=_0xdb4605,_0x319c20['k']=_0x22c8ec;var _0x3d7aa2=_0x53a35b([_0x319c20]);if(!_0x3d7aa2[_0x311e21(0x932)][_0x311e21(0x320)+'h'])return null;return _0x3d7aa2[_0x311e21(0x932)][-0xb50+0x1cd2+0x8c1*-0x2];}else _0x66ae08[_0x311e21(0x67e)](_0x3a4f86,!_0x371ac4()),_0x5e5e99();},_0x66ae08[_0xea1df1(0xaae)](_0x5e5e99),_0x54b59f['sync']=_0x5e5e99,_0x323eb3['syncs'][_0xea1df1(0x3f5)](_0x5e5e99),_0x54b59f;}function _0x150fc9(_0x41fb13,_0x462584,_0x4e3f4f,_0x57a9d4,_0x43811c){var _0x4565ca=_0x4a04dc,_0x1c2cf6={'qNtyo':function(_0x35f01a,_0x403aba){return _0x35f01a(_0x403aba);},'FvnHo':function(_0x2bdfda){return _0x2bdfda();}};if('RkRmb'==='RRKxg')_0x1a8b3d(_0x4565ca(0x2a2)+'hot');else{var _0x2bc5e4=_0x277e23(_0x4565ca(0x46d),'sk-ra'+_0x4565ca(0x671)),_0x1dd896=document[_0x4565ca(0xa21)+_0x4565ca(0x74c)+_0x4565ca(0x518)](_0x66ae08[_0x4565ca(0x5c9)]);_0x1dd896[_0x4565ca(0x4dd)]='range',_0x1dd896['class'+_0x4565ca(0x529)]=_0x4565ca(0x793)+'ider',_0x1dd896['min']=_0x66ae08['Ijvzy'](String,_0x41fb13),_0x1dd896['max']=String(_0x462584),_0x1dd896[_0x4565ca(0x59b)]=String(_0x4e3f4f);var _0x4664b4=_0x277e23(_0x4565ca(0x5e1),_0x4565ca(0x549)+'l'),_0x3a18c5=function(){var _0x1031e5=_0x4565ca,_0x481836={'BcGli':function(_0x52bcdf,_0x2a1b92){return _0x66ae08['cvawP'](_0x52bcdf,_0x2a1b92);},'XekUg':_0x1031e5(0x4d9),'wDhos':function(_0x86617a){return _0x86617a();},'eynKR':function(_0x2fb51a){return _0x2fb51a();},'QcxVJ':function(_0x4e4ace,_0x2e865b){return _0x66ae08['GdyHP'](_0x4e4ace,_0x2e865b);}};if(_0x66ae08[_0x1031e5(0x7af)]!==_0x66ae08[_0x1031e5(0x7af)]){var _0x3142c9=_0x5a409a['data'];if(!_0x3142c9||_0x481836[_0x1031e5(0x114)](_0x3142c9[_0x1031e5(0x170)+_0x1031e5(0x77a)],_0x4b6175))return;try{if(_0x3142c9[_0x1031e5(0x747)]===_0x481836['XekUg']){_0x481836[_0x1031e5(0x80f)](_0x29c47e)[_0x1031e5(0xa44)]({'host':_0x3142c9[_0x1031e5(0x788)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x3142c9[_0x1031e5(0x747)]==='repor'+'t')_0x481836[_0x1031e5(0x672)](_0x3ed4cd)[_0x1031e5(0xa44)](_0x3142c9['repor'+'t']);}catch(_0x3c5d4d){_0x26dd49[_0x1031e5(0x5dd)]('%c[sa'+_0x1031e5(0x16c)+_0x1031e5(0x7bc)+_0x1031e5(0x6d1)+_0x1031e5(0x586)+_0x1031e5(0xa56),_0x481836['QcxVJ'](_0x1031e5(0x6bc)+':',_0x26305f),_0x3c5d4d);}}else{var _0x140373=_0x66ae08[_0x1031e5(0x442)](_0x57a9d4);_0x1dd896['value']=String(_0x140373),_0x4664b4['textC'+'onten'+'t']=(_0x4e3f4f<-0x4c8+0x1d80+0x9*-0x2bf?_0x140373[_0x1031e5(0x626)+'ed'](0x1*-0xc3a+0x1c53+0x80c*-0x2):_0x66ae08[_0x1031e5(0x179)](String,Math[_0x1031e5(0x8aa)](_0x140373)))+(_0x1dd896[_0x1031e5(0x884)+'et']['unit']||'');var _0x5230d7=_0x66ae08['ugiSJ'](_0x66ae08['WKnnu'](_0x140373-_0x41fb13,_0x66ae08[_0x1031e5(0x35b)](_0x462584,_0x41fb13)),0xe*0x137+-0x33*-0x28+-0x1896);_0x1dd896['style'][_0x1031e5(0xace)+_0x1031e5(0x7b7)+'y'](_0x66ae08[_0x1031e5(0x272)],_0x5230d7+'%');}};return _0x1dd896['oninp'+'ut']=function(){var _0x17d6e9=_0x4565ca;_0x1c2cf6['qNtyo'](_0x43811c,_0x1c2cf6[_0x17d6e9(0x7ac)](parseFloat,_0x1dd896[_0x17d6e9(0xa1b)])||_0x41fb13),_0x1c2cf6['FvnHo'](_0x3a18c5);},_0x2bc5e4['appen'+_0x4565ca(0x3d0)+'d'](_0x1dd896),_0x2bc5e4['appen'+_0x4565ca(0x3d0)+'d'](_0x4664b4),_0x2bc5e4['sync']=_0x3a18c5,_0x2bc5e4[_0x4565ca(0x1ea)]=_0x1dd896,_0x3a18c5(),_0x323eb3[_0x4565ca(0x7c1)][_0x4565ca(0x3f5)](_0x3a18c5),_0x2bc5e4;}}function _0x3ebe6d(_0x2b7396,_0x59d523){var _0x26621a=_0x4a04dc,_0x4df2ed=_0x277e23('div','sk-ct'+'l'),_0x21ec89=_0x66ae08['FDCKb'](_0x277e23,_0x66ae08[_0x26621a(0x6fc)],_0x26621a(0x2b7)+'bel',_0x2b7396+(_0x59d523?_0x66ae08[_0x26621a(0x9cb)]('<span'+_0x26621a(0x795)+'s=\x27sk'+_0x26621a(0x30d)+'\x27>'+_0x59d523,'</spa'+'n>'):''));return _0x4df2ed[_0x26621a(0x5b6)+_0x26621a(0x3d0)+'d'](_0x21ec89),_0x4df2ed;}function _0x20adf2(_0x4229cc,_0x381a2c,_0x1dcb94,_0x394c6a){var _0x11073e=_0x4a04dc,_0x2c1daa={'yNubW':function(_0x217394,_0x2ba434){return _0x66ae08['vEDGQ'](_0x217394,_0x2ba434);}},_0x2bef4f=_0x4229cc&&_0x4229cc[_0x11073e(0x779)+'y']&&_0x4229cc[_0x11073e(0x779)+'y'][_0x381a2c];if(!_0x2bef4f)return'-';for(var _0x483897=-0x21ee+0x7f*0x27+0xe95;_0x483897<_0x2bef4f[_0x11073e(0x320)+'h'];_0x483897++){if('wWQCi'===_0x11073e(0x2d2)){if(_0x2bef4f[_0x483897]['o']===_0x1dcb94){if(_0x66ae08[_0x11073e(0x185)](_0x394c6a,'v3')){var _0x4b1f6f=_0x2bef4f[_0x483897]['xyz']||[_0x2bef4f[_0x483897]['v'],0x1786+-0x967+-0xe1f,0x129e*-0x1+0x3*0x47f+0x521];return _0x4b1f6f['map'](function(_0x3a549e){var _0x40152f=_0x11073e;return _0x2c1daa[_0x40152f(0x69e)](Math['round'](_0x3a549e*(0x57c+0x2*-0x6a6+0x834)),-0x153d*0x1+0x1383*-0x2+-0x1*-0x3ca7);})[_0x11073e(0x1ed)]('\x20\x20');}var _0x1dbdf2=_0x2bef4f[_0x483897]['v'];return _0x66ae08['HNclR'](typeof _0x1dbdf2,_0x66ae08[_0x11073e(0x1c3)])?Math['round'](_0x66ae08['qQcen'](_0x1dbdf2,-0x2708+-0xecf*-0x1+0x1c21))/(-0x10b5+0x14fd+0x30*-0x2):_0x66ae08[_0x11073e(0xab9)](String,_0x1dbdf2);}}else return _0x66ae08[_0x11073e(0x797)](_0x5a288d[_0x11073e(0x8aa)](_0x66ae08['YCVnq'](_0x10799d,0x756*-0x5+-0x18fc+0xa9*0x5e)),0x1a7b+0x10b9+-0x2ad0);}return'-';}function _0x5baa49(_0x1d02de){var _0x4e5001=_0x4a04dc,_0x15563b={'wZMam':function(_0x3f073a,_0x435908,_0x5f6c84){return _0x3f073a(_0x435908,_0x5f6c84);},'WGuBr':function(_0x445c93,_0x36ba2d){return _0x445c93+_0x36ba2d;},'ySGzN':function(_0x1ae01f,_0x21cd6b){var _0x354d8d=_0x32ef;return _0x66ae08[_0x354d8d(0x54d)](_0x1ae01f,_0x21cd6b);},'XqTyK':'Multi'+'plies'+'\x20move'+'ment-'+'speed'+_0x4e5001(0xa2d)+_0x4e5001(0x826)+'ly.\x20H'+'eight'+_0x4e5001(0x466)+'p\x20and'+_0x4e5001(0x941)+_0x4e5001(0x7ba)+'refus'+_0x4e5001(0x1df),'KXyvY':_0x4e5001(0x46d),'JFwKE':function(_0x2be4e4,_0x590c80){var _0x43f6e1=_0x4e5001;return _0x66ae08[_0x43f6e1(0xab7)](_0x2be4e4,_0x590c80);},'gaQwx':_0x4e5001(0x13c)+_0x4e5001(0x6c0)+_0x4e5001(0x5e6)+_0x4e5001(0xa22)+_0x4e5001(0x856)+'ng:4p'+_0x4e5001(0x183)+'x;fon'+'t:11p'+_0x4e5001(0x3cd)+'\x20ui-m'+_0x4e5001(0x764)+_0x4e5001(0xdf)+_0x4e5001(0xab0)+_0x4e5001(0xaea)+_0x4e5001(0x40a)+'ce;','OksoF':_0x66ae08['FNDQR'],'tjbos':_0x66ae08['kOWlx'],'RRjgU':function(_0x543eb8,_0x1366a7,_0x5a4666){return _0x543eb8(_0x1366a7,_0x5a4666);},'vCJVZ':function(_0x481346,_0x347467){var _0x42d149=_0x4e5001;return _0x66ae08[_0x42d149(0x2c0)](_0x481346,_0x347467);},'nxCok':function(_0xfd6359,_0x4ef169){var _0x3be8d9=_0x4e5001;return _0x66ae08[_0x3be8d9(0x45f)](_0xfd6359,_0x4ef169);},'USrCe':function(_0x5563d8,_0x5aca61){return _0x5563d8<_0x5aca61;},'QlHlX':function(_0x509739,_0x2cb7eb){var _0x440cee=_0x4e5001;return _0x66ae08[_0x440cee(0x5f1)](_0x509739,_0x2cb7eb);},'FhJdi':_0x4e5001(0x1b3),'jNzbj':_0x66ae08[_0x4e5001(0xafb)],'ADpKk':function(_0x40de60){return _0x40de60();},'yhEHF':function(_0x443db8,_0x49ac85){var _0x21331f=_0x4e5001;return _0x66ae08[_0x21331f(0x743)](_0x443db8,_0x49ac85);},'QKrrU':function(_0x1830ac,_0x2f7d5f){return _0x1830ac*_0x2f7d5f;},'KtFqL':function(_0x179a5d,_0x144bf7){return _0x179a5d+_0x144bf7;},'avUyZ':'Copy\x20'+_0x4e5001(0x5f2)+'d'},_0x1835ee=_0x17e0e3,_0xdf1596=[],_0x7f5fc1;if(_0x66ae08[_0x4e5001(0x958)](_0x1d02de,_0x4e5001(0x409)+'t')){var _0x5bbab7=_0x66ae08[_0x4e5001(0x21a)](_0xaf78dc,_0x66ae08[_0x4e5001(0xa63)],_0x16a9cd['on']),_0x4fadc0=_0x66ae08['FDCKb'](_0x277e23,'div',_0x66ae08['lFlmQ'],_0x16a9cd['on']?_0x66ae08['lYMEZ'](_0x66ae08[_0x4e5001(0x20f)](_0x66ae08[_0x4e5001(0x537)](_0x66ae08[_0x4e5001(0x9c7)]('x',_0x16a9cd[_0x4e5001(0x576)+'r']['toFix'+'ed'](0x1*0x950+0xef*-0xb+-0x7b*-0x2)),_0x66ae08['YUwAd'])+_0xc6762a['lengt'+'h']+(_0x4e5001(0xa2d)+_0x4e5001(0x431)),_0x2aa737),_0x4e5001(0x5a9)+'es'):_0x4e5001(0x633)+'plies'+_0x4e5001(0x3fb)+'ment-'+_0x4e5001(0x7e0)+_0x4e5001(0xa2d)+'ds\x20on'+_0x4e5001(0x36f)+_0x4e5001(0x980)+',\x20ste'+_0x4e5001(0xa58)+_0x4e5001(0x941)+'\x20are\x20'+'refus'+_0x4e5001(0x1df)),_0x760ed0=_0x66ae08['hpQrn'](_0x3ebe6d,_0x66ae08[_0x4e5001(0x7c9)]);_0x760ed0[_0x4e5001(0x5b6)+_0x4e5001(0x3d0)+'d'](_0x66ae08['EiZLY'](_0x1caa73,function(){return _0x16a9cd['on'];},function(_0x172bcf){var _0x134ef5=_0x4e5001;_0x15563b[_0x134ef5(0x151)](_0xaf0655,_0x172bcf,_0x16a9cd['facto'+'r']),_0x4fadc0['textC'+_0x134ef5(0x889)+'t']=_0x172bcf?_0x15563b['WGuBr'](_0x15563b['ySGzN']('x',_0x16a9cd[_0x134ef5(0x576)+'r']['toFix'+'ed'](0x7*-0x24a+0x375+0xc92*0x1))+'\x20on\x20'+_0xc6762a[_0x134ef5(0x320)+'h']+('\x20fiel'+_0x134ef5(0x431)),_0x2aa737)+(_0x134ef5(0x5a9)+'es'):_0x15563b['XqTyK'];})),_0x5bbab7['body']['appen'+_0x4e5001(0x3d0)+'d'](_0x4fadc0),_0x5bbab7['body']['appen'+_0x4e5001(0x3d0)+'d'](_0x760ed0);var _0x553348=_0x66ae08['ZIXIp'](_0x150fc9,-0x227c+-0x3*-0x289+0x1ae2,-0x8*-0x4b2+0xa*0x2f7+0x67*-0xa7,0xc6b*0x3+-0x1*-0x20e9+0x2315*-0x2+0.5,function(){var _0x584def=_0x4e5001;return _0x16a9cd[_0x584def(0x576)+'r'];},function(_0x1639f8){var _0x5a1170=_0x4e5001,_0x3c7149={'YLTDP':function(_0x12f934){return _0x12f934();}};if(_0x5a1170(0x47e)===_0x15563b[_0x5a1170(0x118)])_0x15563b[_0x5a1170(0x43a)](_0xaf0655,_0x16a9cd['on'],_0x1639f8);else{var _0x2b921f=_0x63e195[_0x5a1170(0xa21)+'eElem'+_0x5a1170(0x518)](_0x15563b['KXyvY']);_0x2b921f['id']='sakur'+_0x5a1170(0x66d)+'v2-ta'+'b',_0x2b921f[_0x5a1170(0x443)][_0x5a1170(0x6c8)+'xt']=_0x15563b['JFwKE'](_0x15563b[_0x5a1170(0x5aa)](_0x5a1170(0x492)+_0x5a1170(0x86c)+_0x5a1170(0x654)+_0x5a1170(0x824)+_0x5a1170(0x97b)+_0x5a1170(0x14b)+'2px;z'+_0x5a1170(0x967)+_0x5a1170(0x8ce)+_0x5a1170(0x54f)+_0x5a1170(0x667)+'rsor:'+'point'+'er;us'+'er-se'+_0x5a1170(0x8d8)+_0x5a1170(0x4b7)+(_0x5a1170(0x376)+_0x5a1170(0x8aa)+':rgba'+'(21,1'+'2,29,'+_0x5a1170(0x250)+'order'+':1px\x20'+'solid'+_0x5a1170(0xa6d)+_0x5a1170(0x955)+_0x5a1170(0xa62)+_0x5a1170(0x1d1)+');col'+_0x5a1170(0x7ef))+_0x4d4ddf,';'),_0x15563b[_0x5a1170(0x2bf)]),_0x2b921f['textC'+_0x5a1170(0x889)+'t']=_0x15563b['OksoF'],_0x2b921f['oncli'+'ck']=function(){_0x5ae5e9(![]),_0x3c7149['YLTDP'](_0x513c2e);},_0x531050[_0x5a1170(0x86e)][_0x5a1170(0x5b6)+_0x5a1170(0x3d0)+'d'](_0x2b921f);}});_0x553348['input'][_0x4e5001(0x884)+'et'][_0x4e5001(0x9f6)]='x';var _0x45936a=_0x3ebe6d(_0x4e5001(0x633)+_0x4e5001(0x94a),_0x4e5001(0xabe)+'F6\x20al'+'so\x20st'+_0x4e5001(0x288)+'is');_0x45936a[_0x4e5001(0x5b6)+'dChil'+'d'](_0x553348),_0x5bbab7['body']['appen'+'dChil'+'d'](_0x45936a);if(_0x10f096[_0x4e5001(0x320)+'h']){var _0x2b206c=_0x277e23('div',_0x4e5001(0x9a6)+'te',_0x66ae08['dIOob'](_0x66ae08['mnZPa'],_0x10f096[_0x4e5001(0x688)](-0x76a+-0x1691*0x1+0x133*0x19,-0x1*0x9e9+-0x239*0x2+0xe5f)['map'](function(_0x13a61a){var _0x4e4ffb=_0x4e5001;return _0x15563b['vCJVZ'](_0x15563b[_0x4e4ffb(0x100)]('0x'+(_0x15563b[_0x4e4ffb(0x230)](_0x13a61a['o'],-0x909+-0x7fd+0x2*0x883)?'?':_0x13a61a['o'][_0x4e4ffb(0x108)+'ing'](0x7b0+0x3*0x9db+-0x2531)),'\x20('),_0x13a61a[_0x4e4ffb(0x926)])+')';})[_0x4e5001(0x1ed)]('\x20\x20')));_0x5bbab7['body']['appen'+_0x4e5001(0x3d0)+'d'](_0x2b206c);}_0xdf1596[_0x4e5001(0x3f5)](_0x5bbab7);var _0x219032=_0xaf78dc(_0x66ae08[_0x4e5001(0x9b6)]),_0x53a4ae=_0x66ae08[_0x4e5001(0xe7)](_0x277e23,_0x4e5001(0xa3e)+'n',_0x66ae08[_0x4e5001(0x2c4)],_0x4e5001(0x4ed)+_0x4e5001(0x46c)+_0x4e5001(0x494)+'9)');_0x53a4ae['type']=_0x66ae08['cEfuo'],_0x53a4ae[_0x4e5001(0xa94)+'ck']=function(){var _0x283374=_0x4e5001;_0x66ae08[_0x283374(0x4b4)](_0x1eff61,'snaps'+_0x283374(0x87c));},_0x219032[_0x4e5001(0x86e)][_0x4e5001(0x5b6)+'dChil'+'d'](_0x277e23(_0x66ae08[_0x4e5001(0x6fc)],_0x4e5001(0x3e1)+'esc',_0x4e5001(0x193)+_0x4e5001(0x51f)+_0x4e5001(0x945)+'\x20F7\x20\x20'+'speed'+_0x4e5001(0x234)+'ff\x0aF8'+'\x20/\x20F6'+_0x4e5001(0x699)+'tor\x20+'+_0x4e5001(0x43b)+_0x4e5001(0x354)+'\x20\x20fie'+'ld\x20of'+'\x20view'+_0x4e5001(0x82d)+_0x4e5001(0x487)+'his\x20m'+_0x4e5001(0x6a8))),_0x219032['body'][_0x4e5001(0x5b6)+_0x4e5001(0x3d0)+'d'](_0x53a4ae),_0xdf1596[_0x4e5001(0x3f5)](_0x219032);}if(_0x1d02de===_0x4e5001(0xad6)+'ls'){var _0x1d5ea5=_0x66ae08['PPWEa'](_0xaf78dc,_0x4e5001(0x9bc),_0x59fc88['on']),_0x4c3faa=_0x66ae08[_0x4e5001(0x573)](_0x3ebe6d,_0x66ae08[_0x4e5001(0x7c9)]);_0x4c3faa['appen'+'dChil'+'d'](_0x66ae08[_0x4e5001(0x38d)](_0x1caa73,function(){return _0x59fc88['on'];},function(_0x432cb5){_0x59fc88['on']=_0x432cb5,_0x1e79c3();})),_0x1d5ea5[_0x4e5001(0x86e)][_0x4e5001(0x5b6)+'dChil'+'d'](_0x66ae08[_0x4e5001(0x6eb)](_0x277e23,'div',_0x4e5001(0x3e1)+'esc',_0x66ae08[_0x4e5001(0x944)])),_0x1d5ea5[_0x4e5001(0x86e)][_0x4e5001(0x5b6)+_0x4e5001(0x3d0)+'d'](_0x4c3faa);var _0x11cbd6=_0x150fc9(0x47*-0x6f+-0x7*0x56f+0x44fa,-0x1fdd*-0x1+-0xa3d*0x1+0x4*-0x540,-0x1a0b+-0x3df*0x8+0x390d,function(){var _0x30849f=_0x4e5001,_0x2ac549={'cqeaR':function(_0x312541,_0x2ee312,_0x23288b){return _0x312541(_0x2ee312,_0x23288b);}};if(_0x15563b[_0x30849f(0x1b1)]('yWaBd',_0x15563b[_0x30849f(0x3a8)])){_0x408b66[_0x30849f(0x53c)+_0x30849f(0x364)+_0x30849f(0x630)](),_0x2ac549['cqeaR'](_0x32d412,_0x1783e3['on'],_0x298c75['facto'+'r']-(-0x71f*-0x2+-0xd2*-0x6+-0x132a+0.5));return;}else return _0x59fc88['span'];},function(_0xe43912){var _0x2f0724=_0x4e5001,_0x597315={'eZZXc':function(_0x7dec01,_0x884d76){return _0x7dec01===_0x884d76;}};if(_0x15563b[_0x2f0724(0x9d4)]!==_0x2f0724(0x2e9))_0x59fc88[_0x2f0724(0x5e1)]=_0xe43912;else{var _0xbd7977=_0x2fc6b2['slice'](0x1*-0x64+0x14*0x1e8+-0x1cc*0x15,0x24da+0x8e4*0x2+-0x3576);if(_0x597315[_0x2f0724(0x689)](_0x5e8848[_0x2f0724(0x792)+'Of'](_0xbd7977),-(-0x1e3a+0x66f*-0x4+0x37f7))&&_0x1106df[_0x2f0724(0x320)+'h']<-0x1d*-0xb5+0x1953+0x4*-0xb66)_0x5e1756[_0x2f0724(0x3f5)](_0xbd7977);}});_0x11cbd6[_0x4e5001(0x1ea)][_0x4e5001(0x884)+'et'][_0x4e5001(0x9f6)]='m';var _0x269048=_0x66ae08['xZmIt'](_0x3ebe6d,'Range','world'+_0x4e5001(0x762)+_0x4e5001(0x453)+'oss\x20t'+_0x4e5001(0xa97)+_0x4e5001(0x9a9));_0x269048[_0x4e5001(0x5b6)+'dChil'+'d'](_0x11cbd6),_0x1d5ea5['body'][_0x4e5001(0x5b6)+_0x4e5001(0x3d0)+'d'](_0x269048),_0xdf1596['push'](_0x1d5ea5);var _0x1477c8=_0xaf78dc(_0x66ae08[_0x4e5001(0x696)],_0x59fc88[_0x4e5001(0x40e)]),_0x424bf0=_0x3ebe6d(_0x66ae08[_0x4e5001(0x7c9)]);_0x424bf0['appen'+'dChil'+'d'](_0x1caa73(function(){return _0x59fc88['boxes'];},function(_0x1a969d){var _0x2359e5=_0x4e5001;_0x59fc88['boxes']=_0x1a969d,_0x59fc88['on']=!![],_0x15563b[_0x2359e5(0x42a)](_0x1e79c3);})),_0x1477c8[_0x4e5001(0x86e)][_0x4e5001(0x5b6)+'dChil'+'d'](_0x277e23(_0x66ae08[_0x4e5001(0x6fc)],_0x4e5001(0x3e1)+_0x4e5001(0x8f2),_0x66ae08['PBPbW'])),_0x1477c8[_0x4e5001(0x86e)][_0x4e5001(0x5b6)+'dChil'+'d'](_0x424bf0);var _0x1102a2=_0x150fc9(0x445*0x4+0x4f*-0x14+-0xaac*0x1,-0x24ca*-0x1+-0x153f+-0xf09,-0x1507+0x373*-0x8+0x30a1,function(){var _0x44a218=_0x4e5001;return _0x447f63[_0x44a218(0x206)];},function(_0xc68dc8){var _0x1192d2=_0x4e5001;_0x447f63[_0x1192d2(0x206)]=_0xc68dc8,_0x348d3f();});_0x1102a2[_0x4e5001(0x1ea)][_0x4e5001(0x884)+'et'][_0x4e5001(0x9f6)]='°';var _0x3f520e=_0x66ae08['gSxxP'](_0x3ebe6d,_0x4e5001(0x78f)+_0x4e5001(0x6b7)+'iew',_0x4e5001(0x657)+'\x20]\x20al'+_0x4e5001(0x194)+_0x4e5001(0x288)+'is');_0x3f520e['appen'+_0x4e5001(0x3d0)+'d'](_0x1102a2),_0x1477c8['body'][_0x4e5001(0x5b6)+_0x4e5001(0x3d0)+'d'](_0x3f520e);var _0x3e5422=_0x1835ee&&_0x1835ee[_0x4e5001(0x909)];_0x1477c8[_0x4e5001(0x86e)][_0x4e5001(0x5b6)+_0x4e5001(0x3d0)+'d'](_0x66ae08['UjSUm'](_0x277e23,_0x4e5001(0x46d),_0x4e5001(0x9a6)+'te',_0x66ae08[_0x4e5001(0x736)](_0x66ae08['ztIkA']+(_0x3e5422?_0x3e5422['mouse'+'Look']?_0x66ae08[_0x4e5001(0x2f7)](_0x66ae08[_0x4e5001(0x8b0)]+_0x3e5422[_0x4e5001(0x308)+'Look'],_0x3e5422[_0x4e5001(0x3bf)+'a']?_0x4e5001(0x88e)+_0x4e5001(0xa8e)+_0x3e5422['camer'+'a']:''):_0x4e5001(0xe2)+'useLo'+'ok\x20ye'+'t':_0x4e5001(0xe2)+_0x4e5001(0x435)+'ok\x20ye'+'t'),_0x447f63[_0x4e5001(0x569)+'Off']||_0x447f63['yawOf'+'f']?_0x66ae08[_0x4e5001(0x589)](_0x66ae08['NeOsD'](_0x4e5001(0x34e)+'h\x20',Math['round'](_0x447f63[_0x4e5001(0x569)+_0x4e5001(0x9e7)]))+(_0x4e5001(0x684)+'\x20'),Math['round'](_0x447f63[_0x4e5001(0x6cb)+'f'])):''))),_0xdf1596['push'](_0x1477c8);}if(_0x66ae08[_0x4e5001(0x79e)](_0x1d02de,_0x66ae08['iXOAh'])){var _0x4da7e9=[[_0x66ae08['kVaHN'],_0x4e5001(0x542)+'ON',_0x1835ee?_0x1835ee[_0x4e5001(0x330)+'on']:'-'],[_0x66ae08['tFRlz'],_0x4e5001(0x853)+'ed\x20/\x20'+_0x4e5001(0x58a)+_0x4e5001(0x73c),_0x1835ee?_0x66ae08[_0x4e5001(0x52f)](_0x66ae08[_0x4e5001(0x2af)](_0x1835ee['hooks'+'Appli'+'ed'],_0x66ae08[_0x4e5001(0x570)]),_0x1835ee['hooks'+'Regis'+'tered'+_0x4e5001(0xa4f)]):'-'],['Heap',_0x66ae08[_0x4e5001(0x6b2)],_0x1835ee&&_0x1835ee[_0x4e5001(0x67f)+'emory']&&_0x1835ee['wasmM'+_0x4e5001(0xac2)][_0x4e5001(0x4b5)+_0x4e5001(0x98c)]?_0x66ae08[_0x4e5001(0x3d9)](Math['round'](_0x66ae08['tikWY'](_0x1835ee[_0x4e5001(0x67f)+'emory'][_0x4e5001(0x31b)],0x1ea4c+0x34adb+0xacad9)),_0x66ae08['nsERg'])+_0x1835ee[_0x4e5001(0x67f)+_0x4e5001(0xac2)][_0x4e5001(0x3b4)]+'ms':'-'],[_0x66ae08[_0x4e5001(0x65c)],_0x4e5001(0x7bf)+_0x4e5001(0x891)+_0x4e5001(0x4d2)+'nc',_0x1835ee&&_0x1835ee['esp']?_0x66ae08[_0x4e5001(0x520)](String,_0x1835ee[_0x4e5001(0x6e2)][_0x4e5001(0x80a)+'rCoun'+'t']):'-'],[_0x66ae08[_0x4e5001(0x55b)],'every'+_0x4e5001(0x34b)+_0x4e5001(0x225)+'u',_0x1835ee&&_0x1835ee['esp']?String(_0x1835ee[_0x4e5001(0x6e2)]['enemy'+_0x4e5001(0x91d)]):'-'],[_0x66ae08[_0x4e5001(0x217)],_0x4e5001(0x6af)+_0x4e5001(0x19c)+'ve\x20ma'+_0x4e5001(0x421),_0x1835ee&&_0x1835ee['esp']&&_0x1835ee[_0x4e5001(0x6e2)][_0x4e5001(0x3bf)+'a']?_0x66ae08[_0x4e5001(0x59a)](_0x1835ee[_0x4e5001(0x6e2)]['camer'+'a']+'\x20('+_0x1835ee['esp']['camer'+_0x4e5001(0x407)],')'):'-']];for(_0x7f5fc1=0xb45+-0x964*0x1+-0x1e1;_0x7f5fc1<_0x4da7e9['lengt'+'h'];_0x7f5fc1++){if(_0x66ae08[_0x4e5001(0xa8f)](_0x4e5001(0x525),_0x66ae08['UxfEc']))for(var _0x5bf004=-0x219e*0x1+0x1df*0x2+-0x778*-0x4;_0x5bf004<_0x3d9d68[_0x4e5001(0x320)+'h'];_0x5bf004++){var _0x5c6817=_0x537217(_0x66ae08[_0x4e5001(0x2d4)](_0x3ebfe1,_0x1c79a5(_0x360999[_0x5bf004][-0x213d*-0x1+0x2fb+-0x2438],-0xf9f+0x2*-0x6fb+0x1da5)),'u32');if(_0x5c6817)_0x393934['refs'][_0x6f4cb7[_0x5bf004][-0x19c*0x7+-0x241c+0x2f61]]=_0x66ae08['VxSJg']('0x',_0x66ae08['LaxEh'](_0x5c6817,0x15*0xb3+-0x1b39*0x1+0x3*0x42e)[_0x4e5001(0x108)+_0x4e5001(0x7e9)](-0x2*0x1376+-0x5*0x4e9+0x3f89));}else{var _0x535f30=_0x3ebe6d(_0x4da7e9[_0x7f5fc1][0x1*0x2ab+-0x3a*-0x92+-0x23bf]),_0x2086de=_0x277e23(_0x4e5001(0x5e1),'sk-va'+'l');_0x2086de[_0x4e5001(0x443)]['minWi'+_0x4e5001(0x6ab)]='0',_0x2086de['style']['flex']='1',_0x2086de[_0x4e5001(0x443)][_0x4e5001(0xa45)+'lign']='right',_0x2086de[_0x4e5001(0x665)+_0x4e5001(0x889)+'t']=_0x66ae08[_0x4e5001(0x285)](String,_0x4da7e9[_0x7f5fc1][-0x1*0x315+0xdbf+-0x554*0x2]),_0x2086de[_0x4e5001(0x884)+'et']['k']=_0x4da7e9[_0x7f5fc1][-0x3f3+-0x254*0x7+0x1440],_0x535f30['appen'+_0x4e5001(0x3d0)+'d'](_0x2086de);var _0x17eec7=_0xdf1596[_0x4e5001(0x320)+'h']?_0xdf1596[_0x66ae08['gQYQz'](_0xdf1596[_0x4e5001(0x320)+'h'],0x2304+-0xef3+-0x1410)]:null;!_0x17eec7&&(_0x17eec7=_0x66ae08[_0x4e5001(0xab6)](_0xaf78dc,_0x66ae08[_0x4e5001(0x4a1)],![]),_0xdf1596['push'](_0x17eec7)),_0x17eec7['body'][_0x4e5001(0x5b6)+_0x4e5001(0x3d0)+'d'](_0x535f30),_0x17eec7[_0x4e5001(0x86e)]['lastC'+'hild']['sp']=_0x2086de;}}var _0x38df12=_0xaf78dc(_0x66ae08[_0x4e5001(0x28d)],![]),_0x4e02f7=[[_0x4e5001(0x823)+_0x4e5001(0x92c),_0x66ae08['dqWAX'],_0x1835ee&&_0x1835ee[_0x4e5001(0x1e7)]&&_0x1835ee['local'][_0x4e5001(0x8c1)]?_0x1835ee[_0x4e5001(0x1e7)]['feet']['map'](function(_0x322db6){var _0x3f70b7=_0x4e5001;return _0x15563b[_0x3f70b7(0x66b)](Math[_0x3f70b7(0x8aa)](_0x15563b[_0x3f70b7(0x735)](_0x322db6,-0x3*-0x188+0x55b*-0x6+-0x1*-0x1bee)),0x2*-0x15c+-0x21a+0x536);})['join']('\x20\x20'):'-'],[_0x66ae08['TplZs'],_0x4e5001(0x6d8)+'8',_0x1835ee&&_0x1835ee[_0x4e5001(0x1e7)]&&_0x1835ee['local'][_0x4e5001(0x343)]?_0x1835ee[_0x4e5001(0x1e7)]['eye'][_0x4e5001(0x805)](function(_0x18ef61){var _0x1bc061=_0x4e5001;return Math['round'](_0x66ae08[_0x1bc061(0x9db)](_0x18ef61,0xc1d*-0x3+-0x1ad4+-0x133*-0x35))/(0x4f*-0x6b+-0xc66+0x517*0x9);})[_0x4e5001(0x1ed)]('\x20\x20'):'-'],[_0x4e5001(0x6dc)+_0x4e5001(0x7e0),'0x10',_0x20adf2(_0x1835ee,_0x66ae08[_0x4e5001(0xa85)],-0x7*0x29+0x18af+-0x20*0xbc)],['Sprin'+_0x4e5001(0x34a)+'ed',_0x66ae08['rKhvE'],_0x66ae08[_0x4e5001(0x2de)](_0x20adf2,_0x1835ee,_0x66ae08[_0x4e5001(0xa85)],-0x4*0x5d2+0x2*-0x11ff+0x3b86)],[_0x66ae08[_0x4e5001(0x601)],_0x4e5001(0x881),_0x66ae08['gtXSV'](_0x20adf2,_0x1835ee,_0x4e5001(0x1af)+'ntrol'+'ler',0x9*0x71+0x117*0x1f+0x24a6*-0x1)],[_0x4e5001(0xa13)+'h',_0x4e5001(0xa13)+'hScri'+_0x4e5001(0x515)+'C0',_0x20adf2(_0x1835ee,_0x4e5001(0xa13)+_0x4e5001(0x21f)+'pt',0x1*-0xe9b+-0x1fc*0xc+0x272b)]];for(_0x7f5fc1=-0x1ce1*-0x1+-0xb84+-0x7*0x27b;_0x7f5fc1<_0x4e02f7[_0x4e5001(0x320)+'h'];_0x7f5fc1++){if(_0x66ae08[_0x4e5001(0xa33)](_0x4e5001(0x5c3),_0x66ae08[_0x4e5001(0x138)])){var _0x2d8c97=_0x66ae08['NUjeu'][_0x4e5001(0x561)]('|'),_0x3055b8=0x65*-0x61+0x7*-0x419+0x42f4;while(!![]){switch(_0x2d8c97[_0x3055b8++]){case'0':_0x38df12[_0x4e5001(0x86e)]['appen'+'dChil'+'d'](_0x3e9feb);continue;case'1':_0x113ee6[_0x4e5001(0x443)][_0x4e5001(0x260)]='1';continue;case'2':_0x38df12[_0x4e5001(0x86e)]['lastC'+'hild']['sp']=_0x113ee6;continue;case'3':_0x3e9feb['appen'+_0x4e5001(0x3d0)+'d'](_0x113ee6);continue;case'4':_0x113ee6['textC'+'onten'+'t']=_0x66ae08['TFUIy'](String,_0x4e02f7[_0x7f5fc1][0x58*-0x5+-0x4dd+-0x1*-0x697]);continue;case'5':_0x113ee6[_0x4e5001(0x443)]['minWi'+_0x4e5001(0x6ab)]='0';continue;case'6':var _0x113ee6=_0x277e23(_0x4e5001(0x5e1),_0x4e5001(0x549)+'l');continue;case'7':_0x113ee6[_0x4e5001(0x443)][_0x4e5001(0xa45)+_0x4e5001(0x11e)]=_0x4e5001(0x8a0);continue;case'8':var _0x3e9feb=_0x3ebe6d(_0x4e02f7[_0x7f5fc1][-0x41*0x91+0x3*-0x25c+0x2be5]);continue;case'9':_0x113ee6[_0x4e5001(0x884)+'et']['k']=_0x4e02f7[_0x7f5fc1][0x14*0xa9+0xd20+0x125*-0x17];continue;}break;}}else return null;}_0xdf1596['push'](_0x38df12);}if(_0x1d02de===_0x4e5001(0x60d)){if(_0x66ae08[_0x4e5001(0x5e8)]==='ezYSu'){var _0x121cec=_0xaf78dc(_0x66ae08[_0x4e5001(0x176)],![]),_0xc7573d=_0x1835ee&&_0x1835ee['warni'+_0x4e5001(0xa14)]&&_0x1835ee[_0x4e5001(0x7be)+_0x4e5001(0xa14)]['lengt'+'h']?_0x1835ee[_0x4e5001(0x7be)+_0x4e5001(0xa14)]['join']('\x0a'):_0x66ae08[_0x4e5001(0x668)];_0x121cec['body']['appen'+_0x4e5001(0x3d0)+'d'](_0x277e23(_0x66ae08[_0x4e5001(0x6fc)],_0x66ae08['GvIWY'],_0xc7573d)),_0xdf1596[_0x4e5001(0x3f5)](_0x121cec);var _0x3311d9=_0x66ae08[_0x4e5001(0x782)](_0xaf78dc,'Repor'+'t',![]),_0x147356=_0x66ae08[_0x4e5001(0xfd)](_0x277e23,'butto'+'n','sk-bt'+'n',_0x4e5001(0x464)+'JSON\x20'+'to\x20cl'+'ipboa'+'rd');_0x147356[_0x4e5001(0x4dd)]=_0x4e5001(0xa3e)+'n',_0x147356[_0x4e5001(0xa94)+'ck']=function(){var _0x2ab3b2=_0x4e5001,_0x266968={'bctEs':_0x2ab3b2(0x746)+'d'};try{if(_0x2ab3b2(0x75f)!==_0x2ab3b2(0x75f)){if(_0x3de494[_0x57d3e0]['conte'+_0x2ab3b2(0x271)+_0x2ab3b2(0x8bb)])_0x53221f[_0x4c1e31][_0x2ab3b2(0x7d5)+'ntWin'+_0x2ab3b2(0x8bb)]['postM'+_0x2ab3b2(0x3d1)+'e'](_0xe75f9d,'*');}else{var _0x18e56f=_0x15563b['JFwKE'](_0x15563b[_0x2ab3b2(0x15a)](_0x42cf5e+'\x0a'+JSON['strin'+'gify'](_0x1835ee,null,0x1*0x3c4+-0x11af+0x18c*0x9),'\x0a'),_0x58e0c2);if(navigator[_0x2ab3b2(0x618)+_0x2ab3b2(0x1b0)]&&navigator[_0x2ab3b2(0x618)+_0x2ab3b2(0x1b0)][_0x2ab3b2(0x368)+'Text'])navigator[_0x2ab3b2(0x618)+_0x2ab3b2(0x1b0)][_0x2ab3b2(0x368)+_0x2ab3b2(0x838)](_0x18e56f)[_0x2ab3b2(0xa42)](function(){var _0x4be6f1=_0x2ab3b2;if('voBgc'==='voBgc')_0x147356[_0x4be6f1(0x665)+_0x4be6f1(0x889)+'t']=_0x266968[_0x4be6f1(0x11f)];else return![];});else _0x147356['textC'+_0x2ab3b2(0x889)+'t']='Clipb'+_0x2ab3b2(0xa16)+_0x2ab3b2(0x7e2)+'ed\x20-\x20'+'open\x20'+_0x2ab3b2(0x647)+'anel\x20'+_0x2ab3b2(0x5fb)+'ad';}}catch(_0x473b0a){_0x147356[_0x2ab3b2(0x665)+'onten'+'t']=_0x15563b[_0x2ab3b2(0x5ea)];}},_0x3311d9[_0x4e5001(0x86e)]['appen'+'dChil'+'d'](_0x66ae08['UjSUm'](_0x277e23,_0x66ae08['Gwpih'],'sk-md'+'esc',_0x66ae08[_0x4e5001(0xe8)])),_0x3311d9['body'][_0x4e5001(0x5b6)+_0x4e5001(0x3d0)+'d'](_0x147356),_0xdf1596[_0x4e5001(0x3f5)](_0x3311d9);}else try{return _0x126ead&&_0x2ffcc0['buffe'+'r']?_0x59cd3b['buffe'+'r'][_0x4e5001(0x7f4)+'ength']:0x2e5+-0x1*0x3d1+0xec;}catch(_0x6439cc){return 0x2622+0x1a83+0x1*-0x40a5;}}return _0xdf1596;}function _0x1e79c3(){var _0x101402=_0x4a04dc;try{var _0x9f3984=_0x66ae08['hQBEM'](_0x1d394);if(_0x9f3984&&_0x9f3984['el'])_0x9f3984['el'][_0x101402(0x443)][_0x101402(0x1e0)+'ay']=_0x59fc88['on']?'':_0x66ae08['xpkCN'];var _0x3b7b41=_0x29b3e2;if(_0x3b7b41&&_0x3b7b41['cv'])_0x3b7b41['cv'][_0x101402(0x443)][_0x101402(0x1e0)+'ay']=_0x59fc88['on']&&_0x59fc88[_0x101402(0x40e)]?'':_0x101402(0x8ff);}catch(_0x446710){}}function _0x1b7e74(){var _0xa67e63=_0x4a04dc,_0x55ce7d={'JunDD':function(_0x23e5b5,_0x3b4bf0){return _0x23e5b5===_0x3b4bf0;},'XwnSr':function(_0x3d2d3d,_0x5a5b08){var _0x5cc3a6=_0x32ef;return _0x66ae08[_0x5cc3a6(0x67e)](_0x3d2d3d,_0x5a5b08);},'nrGKG':function(_0x21ca50,_0x4d4642){return _0x21ca50*_0x4d4642;},'IZAgN':function(_0xba7cdb,_0x3435f1){return _0xba7cdb===_0x3435f1;}};if(_0x66ae08[_0xa67e63(0xac4)]==='sHAhs')return _0x66ae08[_0xa67e63(0x743)](_0x37ec81[_0xa67e63(0x8aa)](_0x4a8fe9*(-0x1a6b+0x1f6+0x18d9)),0x1873+-0x10*-0x170+-0x2f0f);else{if(_0x323eb3['built'])return _0x323eb3['root'];try{if(_0xa67e63(0xaf2)===_0x66ae08[_0xa67e63(0x998)]){if(!document[_0xa67e63(0x86e)]||!document['body'][_0xa67e63(0x5b6)+'dChil'+'d'])return null;if(!document['getEl'+'ement'+_0xa67e63(0x56d)](_0xa67e63(0x171)+'a-men'+_0xa67e63(0xabd))){var _0x2dae6c=document[_0xa67e63(0xa21)+_0xa67e63(0x74c)+_0xa67e63(0x518)](_0xa67e63(0x443));_0x2dae6c['id']='sakur'+'a-men'+'u-css',_0x2dae6c[_0xa67e63(0x665)+'onten'+'t']=_0x3c06d2,(document['head']||document['docum'+_0xa67e63(0x33f)+_0xa67e63(0x6f5)])[_0xa67e63(0x5b6)+_0xa67e63(0x3d0)+'d'](_0x2dae6c);}var _0x458bf0=_0x277e23(_0x66ae08[_0xa67e63(0x6fc)],_0xa67e63(0x474)+_0xa67e63(0x4dc));_0x458bf0['id']=_0x66ae08[_0xa67e63(0x835)];var _0x4e2046=_0x66ae08['nNcXT'](_0x277e23,_0x66ae08[_0xa67e63(0x6fc)],'mn-si'+'de'),_0x21b90a=_0x277e23(_0x66ae08['Gwpih'],'mn-lo'+'go',_0x14e4df);_0x4e2046['appen'+'dChil'+'d'](_0x21b90a);var _0x219b99=_0x66ae08['OXrla'](_0x277e23,'div','mn-ma'+'in'),_0x27d576=_0x277e23(_0xa67e63(0x46d),_0x66ae08[_0xa67e63(0x8fc)]),_0x701931=_0x277e23('div',_0x66ae08[_0xa67e63(0xaa7)]),_0x3c915f=_0x277e23(_0x66ae08['Gwpih'],_0x66ae08['mgnqJ'],_0x66ae08['rNDmU']),_0x27833a=_0x277e23(_0xa67e63(0x46d),'mn-su'+'b','start'+_0xa67e63(0x379));_0x701931['appen'+_0xa67e63(0x3d0)+'d'](_0x3c915f),_0x701931[_0xa67e63(0x5b6)+'dChil'+'d'](_0x27833a);var _0x93a2a7=_0x66ae08[_0xa67e63(0xaf1)](_0x277e23,_0x66ae08[_0xa67e63(0x6fc)],_0x66ae08[_0xa67e63(0x813)],_0x66ae08['aSSqv']);_0x93a2a7[_0xa67e63(0xa94)+'ck']=function(){_0x84458(![]);},_0x27d576[_0xa67e63(0x5b6)+_0xa67e63(0x3d0)+'d'](_0x701931),_0x27d576['appen'+'dChil'+'d'](_0x93a2a7);var _0x2f7b52=_0x277e23(_0x66ae08[_0xa67e63(0x6fc)],_0x66ae08['nWYJU']);_0x219b99['appen'+_0xa67e63(0x3d0)+'d'](_0x27d576),_0x219b99[_0xa67e63(0x5b6)+_0xa67e63(0x3d0)+'d'](_0x2f7b52),_0x458bf0['appen'+'dChil'+'d'](_0x4e2046),_0x458bf0['appen'+_0xa67e63(0x3d0)+'d'](_0x219b99),document['body'][_0xa67e63(0x5b6)+_0xa67e63(0x3d0)+'d'](_0x458bf0),_0x323eb3[_0xa67e63(0x857)]=_0x458bf0,_0x323eb3[_0xa67e63(0x211)]=_0x2f7b52,_0x323eb3['head']=_0x3c915f,_0x323eb3[_0xa67e63(0x4fe)]=_0x27833a;var _0x219af0={};for(var _0x54fc5b=0x179e+-0x3b*0x45+0x18b*-0x5;_0x54fc5b<_0x318362[_0xa67e63(0x320)+'h'];_0x54fc5b++){if(_0x66ae08['rPPGm'](_0x66ae08['ydEiy'],_0xa67e63(0xa2f))){var _0x2a0dcc=_0x43ef38[_0x58ed41];try{var _0x41862b=_0x435cf5['hookP'+'refix']({'typeName':_0x2a0dcc[_0xa67e63(0x4dd)],'methodName':_0xa67e63(0x661)+'e','params':[_0x66ae08['SDDhU'],_0xa67e63(0x2bb)],'returnType':_0x496ec1},_0x5213dc(_0x2a0dcc[_0xa67e63(0x4dd)],_0x2a0dcc['keep'],_0x2a0dcc['many']));_0x1cd328[_0xa67e63(0x3f5)]({'type':_0x2a0dcc['type'],'hook':_0x41862b,'keep':_0x2a0dcc[_0xa67e63(0x555)]});}catch(_0x149b21){_0x1f361f[_0xa67e63(0x3f5)](_0x2a0dcc[_0xa67e63(0x4dd)]+':\x20'+_0x66ae08[_0xa67e63(0x285)](_0x380144,_0x149b21&&_0x149b21['messa'+'ge']||_0x149b21)['slice'](0x16b8+0xdad+0x7*-0x533,-0x1b*0x15d+-0x4ca*-0x1+-0x89*-0x3d));}}else{var _0x2c6bfb=_0x318362[_0x54fc5b],_0x4e38e3=_0x277e23('butto'+'n',_0xa67e63(0x863)+'b',_0x66ae08['gcEEd']+_0x2c6bfb[_0xa67e63(0x624)]+(_0xa67e63(0x423)+'ll>'));_0x4e38e3['type']='butto'+'n',_0x4e38e3[_0xa67e63(0x7fd)]=_0x2c6bfb[_0xa67e63(0x624)],function(_0x1f973f){_0x4e38e3['oncli'+'ck']=function(){var _0x53141c=_0x32ef,_0xc6f163={'SyeQh':'Copie'+'d'};if(_0x55ce7d['JunDD'](_0x53141c(0x4d5),_0x53141c(0x1cc))){if(_0x2c03ca)_0x29e8d8['textC'+'onten'+'t']=_0xc6f163[_0x53141c(0x9a4)];}else _0x48cc99(_0x1f973f);};}(_0x2c6bfb['id']),_0x219af0[_0x2c6bfb['id']]=_0x4e38e3,_0x4e2046['appen'+'dChil'+'d'](_0x4e38e3);}}_0x323eb3['butto'+'ns']=_0x219af0;var _0x54dfeb=_0x277e23(_0xa67e63(0x46d),null,_0x26480e);return _0x54dfeb['id']=_0x66ae08['AfecA'],_0x54dfeb[_0xa67e63(0x7fd)]=_0xa67e63(0x2c5)+_0xa67e63(0x6e4)+'llWar'+'z\x20(In'+'sert)',_0x54dfeb[_0xa67e63(0x8d9)+_0xa67e63(0x53a)+'er']=function(){var _0x5c99a2=_0xa67e63;_0x54dfeb[_0x5c99a2(0x443)]['opaci'+'ty']='1';},_0x54dfeb['onmou'+_0xa67e63(0x7cd)+'ve']=function(){var _0x372fb5=_0xa67e63;_0x54dfeb[_0x372fb5(0x443)]['opaci'+'ty']=_0x323eb3['open']?'1':'.5';},_0x54dfeb['oncli'+'ck']=function(_0x24ee42){var _0x5f3eb2=_0xa67e63;if(_0x24ee42&&_0x24ee42[_0x5f3eb2(0x595)+_0x5f3eb2(0x239)+'ation'])_0x24ee42[_0x5f3eb2(0x595)+_0x5f3eb2(0x239)+_0x5f3eb2(0x774)]();_0x55ce7d['XwnSr'](_0x84458,!_0x323eb3[_0x5f3eb2(0x2d9)]);},document['body']['appen'+_0xa67e63(0x3d0)+'d'](_0x54dfeb),_0x323eb3[_0xa67e63(0x733)]=_0x54dfeb,_0x323eb3['built']=!![],_0x48cc99(_0x323eb3[_0xa67e63(0x923)]),_0x458bf0;}else{if(_0x55ce7d[_0xa67e63(0x9b7)](_0x1c4434,'v3')){var _0x272c72=_0x256542[_0x196d22][_0xa67e63(0x4d0)]||[_0x5e3f95[_0x5bfbd6]['v'],-0x52+-0x5*0x232+0x1e2*0x6,-0x1a7b*0x1+-0x15f7+0x9f*0x4e];return _0x272c72[_0xa67e63(0x805)](function(_0x30739a){var _0x56fcc2=_0xa67e63;return _0x1235f3[_0x56fcc2(0x8aa)](_0x55ce7d['nrGKG'](_0x30739a,0x1*0x1775+-0x108d*-0x2+-0x382b))/(0x2b*-0xbb+-0x1082+-0x304f*-0x1);})['join']('\x20\x20');}var _0x26a271=_0x5037de[_0x3e1527]['v'];return _0x55ce7d[_0xa67e63(0x72a)](typeof _0x26a271,_0xa67e63(0x597)+'r')?_0x4aad33['round'](_0x26a271*(-0x21a5+-0x125e+0x37eb))/(0x8e*-0x2b+-0x92d+0x24ef):_0x2ba0c8(_0x26a271);}}catch(_0x41e009){return console[_0xa67e63(0x5dd)](_0xa67e63(0xac3)+_0xa67e63(0x16c)+'\x20menu'+_0xa67e63(0x4a0)+'ailab'+'le',_0x66ae08['ZlclG'](_0xa67e63(0x6bc)+':',_0x28be14),_0x41e009),null;}}}function _0x48cc99(_0x365b1d){var _0x44e9dc=_0x4a04dc;if(_0x66ae08['fMjlP']('HCmRK',_0x66ae08[_0x44e9dc(0x8ec)])){_0x323eb3['cat']=_0x365b1d,_0x323eb3['syncs']=[];if(!_0x323eb3[_0x44e9dc(0x211)])return;var _0x2dc0cd=null;for(var _0x2c134d=-0x3*0xa36+-0x1d*0x23+0x2299;_0x66ae08['AEegB'](_0x2c134d,_0x318362[_0x44e9dc(0x320)+'h']);_0x2c134d++)if(_0x66ae08[_0x44e9dc(0x83b)](_0x318362[_0x2c134d]['id'],_0x365b1d))_0x2dc0cd=_0x318362[_0x2c134d];_0x323eb3['head'][_0x44e9dc(0x665)+_0x44e9dc(0x889)+'t']=_0x66ae08['tMGaa']('Sakur'+'a\x20Ski'+'llWar'+'z\x20—\x20',_0x2dc0cd&&_0x2dc0cd['label']||'?');for(var _0x50b479 in _0x323eb3[_0x44e9dc(0xa3e)+'ns']){if(_0x44e9dc(0x8a3)===_0x44e9dc(0x42b)){if(!_0x57ce2d||!_0x3aa775)return null;var _0x3a4a4c=new _0x44caa9(_0x220c40)['getCl'+_0x44e9dc(0xfe)+'me']();return _0x3a4a4c===_0x39662d?null:_0x3a4a4c;}else{if(_0x323eb3[_0x44e9dc(0xa3e)+'ns'][_0x50b479][_0x44e9dc(0x7ed)+'List'])_0x323eb3['butto'+'ns'][_0x50b479][_0x44e9dc(0x7ed)+_0x44e9dc(0x529)]=_0x66ae08['lYMEZ']('mn-ta'+'b',_0x66ae08[_0x44e9dc(0x2d0)](_0x50b479,_0x365b1d)?'\x20acti'+'ve':'');}}var _0x554860=[];try{_0x554860=_0x5baa49(_0x365b1d);}catch(_0x23685){_0x554860=[];}while(_0x323eb3['cols'][_0x44e9dc(0x9f0)+'Child'])_0x323eb3[_0x44e9dc(0x211)][_0x44e9dc(0x2ff)+'eChil'+'d'](_0x323eb3[_0x44e9dc(0x211)]['first'+'Child']);for(var _0x2d1559=0xa81+0x1*-0x10e7+-0xd*-0x7e;_0x2d1559<_0x554860[_0x44e9dc(0x320)+'h'];_0x2d1559++)_0x323eb3['cols'][_0x44e9dc(0x5b6)+_0x44e9dc(0x3d0)+'d'](_0x554860[_0x2d1559]);}else _0x3c900f(![]);}function _0x84458(_0x3a2c92){var _0x4db838=_0x4a04dc,_0x2dfc76={'hCQvS':function(_0x5aff4e,_0x15cfeb){return _0x66ae08['JCSRS'](_0x5aff4e,_0x15cfeb);}};_0x323eb3[_0x4db838(0x2d9)]=!!_0x3a2c92;var _0x2e2d01=_0x1b7e74();if(!_0x2e2d01)return;_0x2e2d01['class'+'Name']=_0x66ae08['ofYHj'](_0x66ae08[_0x4db838(0x962)],_0x323eb3['open']?_0x66ae08[_0x4db838(0xa0b)]:'');if(_0x323eb3['petal'])_0x323eb3[_0x4db838(0x733)]['style']['opaci'+'ty']=_0x323eb3['open']?'1':'.5';if(_0x323eb3[_0x4db838(0x2d9)]){_0x48cc99(_0x323eb3[_0x4db838(0x923)]);try{if(_0x66ae08[_0x4db838(0x55a)](_0x66ae08[_0x4db838(0x3d2)],'wvZEd')){if(_0x1a64b7['paren'+'t']&&_0x2dfc76[_0x4db838(0x655)](_0x49bc32[_0x4db838(0x67c)+'t'],_0x1acd20))_0x1dd0b4[_0x4db838(0x67c)+'t'][_0x4db838(0x5a1)+_0x4db838(0x3d1)+'e'](_0x4c4a4f,'*');}else{var _0xa57cf=window[_0x4db838(0x361)+_0x4db838(0x4f0)+'t']||-0x3*0x708+0x1e40+-0x2*0x304,_0x42b6a0=_0x1d394();if(_0x42b6a0&&_0x42b6a0['el'])_0x42b6a0['el'][_0x4db838(0x443)]['displ'+'ay']=_0xa57cf<0x1*0xc6+-0x1584+0x4a2*0x5?_0x4db838(0x8ff):_0x59fc88['on']?'':_0x4db838(0x8ff);}}catch(_0x5754c5){}}}function _0x2be979(){var _0x15b670=_0x4a04dc,_0xd16f12={'ipaXX':_0x15b670(0x6bc)+':'};if(_0x66ae08[_0x15b670(0x209)](_0x15b670(0xa5b),_0x66ae08[_0x15b670(0xad9)])){var _0x29c6f9=_0x66ae08[_0x15b670(0x9dc)](_0x13d33b);if(_0x29c6f9&&_0x29c6f9['el'])_0x29c6f9['el']['style'][_0x15b670(0x1e0)+'ay']=_0xeea6ee['on']?'':'none';var _0x337d22=_0x59e412;if(_0x337d22&&_0x337d22['cv'])_0x337d22['cv']['style']['displ'+'ay']=_0x18c38c['on']&&_0x55e21a[_0x15b670(0x40e)]?'':'none';}else{if(!_0x323eb3[_0x15b670(0x2d9)]||!_0x323eb3[_0x15b670(0x459)])return;try{for(var _0x21a194=-0x17d6+-0x2*-0x12b2+0x6c7*-0x2;_0x21a194<_0x323eb3[_0x15b670(0x7c1)]['lengt'+'h'];_0x21a194++){try{if(_0x66ae08['JCSRS'](_0x66ae08[_0x15b670(0x4ac)],'fNAIH')){var _0xc28b32=_0xa17e8b();if(!_0xc28b32)return _0x33858d;if(_0xc28b32[_0x15b670(0x884)+'et']['api'])return _0xc28b32['api'];try{return _0x1229ec(_0xc28b32);}catch(_0x442c5e){return _0xc28b32[_0x15b670(0x884)+'et']['api']='1',_0xc28b32[_0x15b670(0x6a3)]=_0x58255e,_0x2ab753[_0x15b670(0x5dd)](_0x15b670(0xac3)+_0x15b670(0x16c)+_0x15b670(0x7bc)+_0x15b670(0x61c)+_0x15b670(0x899),_0xd16f12['ipaXX']+_0x1795d8,_0x442c5e),_0x10063f;}}else _0x323eb3[_0x15b670(0x7c1)][_0x21a194]();}catch(_0x435b42){}}var _0x3ff919=_0x17e0e3;_0x323eb3[_0x15b670(0x4fe)][_0x15b670(0x665)+'onten'+'t']=_0x3ff919?_0x66ae08['HbZED'](_0x66ae08[_0x15b670(0x5fe)](_0x66ae08[_0x15b670(0x157)]('v',_0x3ff919['versi'+'on'])+('\x20\x20·\x20\x20'+_0x15b670(0x55c)+'\x20')+_0x3ff919[_0x15b670(0x55c)+_0x15b670(0x5f8)+'ed']+'/'+_0x3ff919['hooks'+_0x15b670(0x8dc)],_0x66ae08['cwflx'])+(_0x3ff919[_0x15b670(0x6e2)]&&_0x3ff919[_0x15b670(0x6e2)][_0x15b670(0x80a)+_0x15b670(0x6c3)+'t']||-0x2*0xbe7+-0x2020+-0x37ee*-0x1)+_0x66ae08[_0x15b670(0x611)],_0x3ff919[_0x15b670(0x67f)+_0x15b670(0xac2)]&&_0x3ff919[_0x15b670(0x67f)+_0x15b670(0xac2)][_0x15b670(0x4b5)+_0x15b670(0x98c)]?_0x66ae08[_0x15b670(0x48d)](Math[_0x15b670(0x8aa)](_0x3ff919['wasmM'+'emory']['bytes']/(0xffb*0x4d+0x2ecdc+0x844a5)),'MB'):'-'):_0x15b670(0xa65)+_0x15b670(0x3f0)+'r\x20the'+_0x15b670(0x4c4)+_0x15b670(0x97d)+'ort…';var _0x3d69af=_0x323eb3[_0x15b670(0x211)]['query'+_0x15b670(0x2f0)+'torAl'+'l']?_0x323eb3[_0x15b670(0x211)][_0x15b670(0x591)+_0x15b670(0x2f0)+_0x15b670(0x55d)+'l'](_0x15b670(0x15c)+'-k]'):[];for(var _0x10c538=-0x3d1*-0x7+0x2406+-0x3ebd;_0x10c538<_0x3d69af['lengt'+'h'];_0x10c538++){var _0x2983a5=_0x3d69af[_0x10c538]['datas'+'et']['k'],_0x14195a='';if(_0x2983a5==='VERSI'+'ON')_0x14195a=_0x3ff919?_0x3ff919[_0x15b670(0x330)+'on']:'-';else{if(_0x2983a5==='appli'+_0x15b670(0x92e)+_0x15b670(0x58a)+_0x15b670(0x73c))_0x14195a=_0x3ff919?_0x66ae08['Gfqld'](_0x66ae08[_0x15b670(0x305)](_0x3ff919['hooks'+_0x15b670(0x5f8)+'ed'],_0x66ae08[_0x15b670(0x570)]),_0x3ff919['hooks'+_0x15b670(0x9c5)+_0x15b670(0x73c)+_0x15b670(0xa4f)]):'-';else{if(_0x2983a5===_0x66ae08[_0x15b670(0x6b2)])_0x14195a=_0x3ff919&&_0x3ff919['wasmM'+_0x15b670(0xac2)]&&_0x3ff919[_0x15b670(0x67f)+_0x15b670(0xac2)]['captu'+'red']?_0x66ae08['tcqBN'](Math['round'](_0x66ae08[_0x15b670(0x85b)](_0x3ff919[_0x15b670(0x67f)+_0x15b670(0xac2)]['bytes'],0x7*0x2a665+-0x1aec31+0x185f6e)),_0x66ae08[_0x15b670(0x249)])+_0x3ff919['wasmM'+_0x15b670(0xac2)][_0x15b670(0x3b4)]+'ms':'-';else{if(_0x2983a5===_0x15b670(0x7bf)+'nNetw'+'orkSy'+'nc')_0x14195a=_0x3ff919&&_0x3ff919['esp']?String(_0x3ff919[_0x15b670(0x6e2)]['playe'+'rCoun'+'t']):'-';else{if(_0x2983a5==='every'+_0x15b670(0x34b)+'ut\x20yo'+'u')_0x14195a=_0x3ff919&&_0x3ff919['esp']?_0x66ae08[_0x15b670(0x5c0)](String,_0x3ff919[_0x15b670(0x6e2)][_0x15b670(0x34c)+'Count']):'-';else{if(_0x2983a5===_0x66ae08['jyjvK'])_0x14195a=_0x3ff919&&_0x3ff919[_0x15b670(0x6e2)]&&_0x3ff919[_0x15b670(0x6e2)]['camer'+'a']?_0x66ae08[_0x15b670(0x9cb)](_0x3ff919['esp'][_0x15b670(0x3bf)+'a']+'\x20('+_0x3ff919['esp']['camer'+_0x15b670(0x407)],')'):'-';else{if(_0x66ae08[_0x15b670(0x910)](_0x2983a5,_0x66ae08['dqWAX']))_0x14195a=_0x3ff919&&_0x3ff919['local']&&_0x3ff919['local'][_0x15b670(0x8c1)]?_0x3ff919['local']['feet']['map'](function(_0x483fed){return Math['round'](_0x66ae08['ugiSJ'](_0x483fed,0x15fd+0x65b+-0x1bf4))/(-0x1d8d+-0x4f3+-0x27e*-0xe);})[_0x15b670(0x1ed)]('\x20\x20'):'-';else{if(_0x66ae08[_0x15b670(0x574)](_0x2983a5,'+0x29'+'8'))_0x14195a=_0x3ff919&&_0x3ff919[_0x15b670(0x1e7)]&&_0x3ff919['local'][_0x15b670(0x343)]?_0x3ff919[_0x15b670(0x1e7)][_0x15b670(0x343)]['map'](function(_0x12081e){var _0x2b62d3=_0x15b670;return'cWuZn'==='nmREu'?-0x1*0xb51+-0xabe+0x160f:_0x66ae08[_0x2b62d3(0x616)](Math[_0x2b62d3(0x8aa)](_0x12081e*(-0x759*-0x2+-0x1758+0x90a*0x1)),-0x4*-0x2e3+0x1116+0x2d3*-0xa);})['join']('\x20\x20'):'-';else{var _0x1a8575=_0x2983a5[_0x15b670(0x561)]('+');_0x14195a=_0x66ae08['FDCKb'](_0x20adf2,_0x3ff919,_0x1a8575[0x1*-0xe4a+0x26da+-0x1890][_0x15b670(0x792)+'Of']('Healt'+'h')===0x15ac+0xf0e+-0x24ba?_0x66ae08['zqZyY']:_0x15b670(0x1af)+_0x15b670(0x293)+'ler',parseInt(_0x1a8575[0x696*0x5+-0x1791+-0x95c],-0x1*-0xa65+0x46*-0x20+-0x195));}}}}}}}}if(_0x66ae08[_0x15b670(0x6f7)](_0x14195a,_0x3d69af[_0x10c538]['textC'+_0x15b670(0x889)+'t']))_0x3d69af[_0x10c538]['textC'+_0x15b670(0x889)+'t']=_0x14195a;}}catch(_0x14c676){}}}function _0xdfb0c8(){var _0x3de283=_0x4a04dc,_0x29111e=_0x29a47e[_0x3de283(0x1af)+'ntrol'+_0x3de283(0x24b)];if(!_0x29111e||!_0x29111e[_0x3de283(0x568)])return null;var _0x11053f=_0x2a0e06(_0x29111e[_0x3de283(0x568)],-0x1018+0x2566+-0x126a,0xefe+0x10e5+-0x330*0xa),_0x437ac2=_0x2a0e06(_0x29111e['ptr'],0x22ba+-0x122d+-0xdf5,-0x230c*0x1+0x2*0x7db+0x1359);if(!_0x11053f)return null;return{'ptr':_0x29111e[_0x3de283(0x568)],'feet':_0x11053f,'eye':_0x437ac2,'reach':Math[_0x3de283(0xacc)](_0x66ae08['fdvqp'](_0x66ae08[_0x3de283(0x3ae)](_0x11053f[-0x5*-0x577+-0xa5b*-0x1+0x25ae*-0x1],_0x11053f[0x6c8+0x2017+-0x26df]),_0x66ae08[_0x3de283(0x9db)](_0x11053f[0x174a+-0x18b1+0x169],_0x11053f[0x3f+-0x176e+-0x7bb*-0x3]))),'pitch':_0x5b90ef(_0x66ae08[_0x3de283(0x870)](_0x29111e[_0x3de283(0x568)],-0x73e+-0x15d0+0x1e7a),_0x66ae08[_0x3de283(0x71a)]),'yaw':_0x5b90ef(_0x29111e[_0x3de283(0x568)]+(0x4b+0x350*0x4+-0xc1b),'f32')};}function _0x4e0c3d(){var _0x2b9e69=_0x4a04dc,_0x5e1fc0=_0x66ae08[_0x2b9e69(0x9dc)](_0xdfb0c8),_0x545b31=[],_0x4c830d=_0x10506e['Photo'+'nNetw'+_0x2b9e69(0x4d2)+'nc']||{},_0x378e82=Object['keys'](_0x4c830d);for(var _0x13e3e4=0xd49*-0x2+-0x725+0x21b7;_0x13e3e4<_0x378e82[_0x2b9e69(0x320)+'h']&&_0x13e3e4<-0x15cd+0x1d5b+0x3*-0x27a;_0x13e3e4++){var _0x208d5b=_0x4c830d[_0x378e82[_0x13e3e4]],_0x3f2e32=_0x66ae08[_0x2b9e69(0x7ce)](_0x2a0e06,_0x208d5b[_0x2b9e69(0x568)],-0xff7*0x2+-0x1055+0x3077,-0x1f00+0x2393*-0x1+0x3*0x1632);if(!_0x3f2e32||_0x3f2e32[-0x65*0x1d+0x1cfa+-0x1189]===-0x15cd+0x251*-0xd+0x1*0x33ea&&_0x3f2e32[-0x25e8+0x2514+0xd5*0x1]===0x1*-0xafc+-0xf3b+0x1a37*0x1&&_0x66ae08[_0x2b9e69(0x588)](_0x3f2e32[-0x63b*0x5+0x5ef+0x193a],-0xbbc+-0x132f+0x1*0x1eeb))continue;var _0x2b48c5={'ptr':_0x208d5b[_0x2b9e69(0x568)],'x':_0x3f2e32[-0xdab*0x2+-0xb89+0x26df],'y':_0x3f2e32[0xdc2+0xd89+0xe*-0x1f3],'z':_0x3f2e32[0x1d8+-0x1efd+0x1d27],'team':_0x66ae08['SKZdr'](_0x5b90ef,_0x208d5b[_0x2b9e69(0x568)]+(0x93c*-0x1+0x1491+-0xafd),_0x66ae08['SDDhU']),'localFlag':_0x66ae08[_0x2b9e69(0x631)](_0x5b90ef,_0x208d5b[_0x2b9e69(0x568)]+(0x1dbc+0x28*0x86+-0x3230),_0x66ae08['SDDhU'])};if(_0x5e1fc0){var _0xd1aa31=_0x66ae08[_0x2b9e69(0x4cf)](_0x3f2e32[-0x187+-0x1*-0x13eb+-0x1264],_0x5e1fc0[_0x2b9e69(0x8c1)][-0x1cbc+0x2f*0xc5+-0x76f]),_0x298eee=_0x3f2e32[0x27*0x46+0x122c*-0x1+0x1e1*0x4]-_0x5e1fc0[_0x2b9e69(0x8c1)][0x1*-0x19+-0x9*0x2ca+0x1b*0xef];_0x2b48c5['d']=Math[_0x2b9e69(0xacc)](_0x66ae08[_0x2b9e69(0x480)](_0xd1aa31*_0xd1aa31,_0x66ae08[_0x2b9e69(0x9d7)](_0x298eee,_0x298eee))),_0x2b48c5['beari'+'ng']=_0x66ae08['zKgEh'](Math[_0x2b9e69(0x697)](_0xd1aa31,_0x298eee),-0x151*-0x1d+0xfcc+-0x3545)/Math['PI'];}_0x545b31['push'](_0x2b48c5);}return{'me':_0x5e1fc0,'list':_0x545b31};}var _0x58b5ef=null;function _0x1d394(){var _0x1fe294=_0x4a04dc;if(_0x58b5ef)return _0x58b5ef;try{var _0x5af9cd=(_0x1fe294(0xabb)+_0x1fe294(0x531)+_0x1fe294(0x3c5)+'|5|9')['split']('|'),_0x244dd3=-0xe*-0x82+0x1c*0x28+-0x24c*0x5;while(!![]){switch(_0x5af9cd[_0x244dd3++]){case'0':var _0xfa869c={'cv':{'getContext':function(){return null;}},'el':_0x2e9e29};continue;case'1':if(!document[_0x1fe294(0x86e)]||!document[_0x1fe294(0x86e)]['appen'+'dChil'+'d'])return null;continue;case'2':_0x2e9e29['style'][_0x1fe294(0x6c8)+'xt']=_0x66ae08['xipoX']+(_0x1fe294(0x376)+_0x1fe294(0x8aa)+_0x1fe294(0x677)+_0x1fe294(0x95e)+'2,29,'+_0x1fe294(0x94f)+_0x1fe294(0x13c)+'r:1px'+_0x1fe294(0x861)+'d\x20rgb'+'a(255'+',143,'+'177,.'+'4);bo'+_0x1fe294(0x66e)+'radiu'+_0x1fe294(0x1f1)+'x;')+_0x66ae08[_0x1fe294(0x3e6)];continue;case'3':_0x2e9e29[_0x1fe294(0x361)+'HTML']=_0x66ae08[_0x1fe294(0x820)](_0x1fe294(0x391)+_0x1fe294(0x614)+_0x1fe294(0x4d1)+'ura-e'+_0x1fe294(0x6d0)+_0x1fe294(0x2d5)+'th=\x221'+'60\x22\x20h'+_0x1fe294(0x980)+_0x1fe294(0x5ad)+_0x1fe294(0x7cf)+_0x1fe294(0x1e9)+'ispla'+_0x1fe294(0x200)+'ck\x22><'+_0x1fe294(0x80c)+_0x1fe294(0x7d4),'<div\x20'+'id=\x22s'+'akura'+_0x1fe294(0x8bc)+'lg\x22\x20s'+_0x1fe294(0x3e0)+_0x1fe294(0x1f9)+_0x1fe294(0x6ef)+'n:cen'+_0x1fe294(0x264)+'</div'+'>');continue;case'4':document[_0x1fe294(0x86e)]['appen'+_0x1fe294(0x3d0)+'d'](_0x2e9e29);continue;case'5':if(!_0x58b5ef['cv']||!_0x58b5ef['cv']['getCo'+_0x1fe294(0x40d)])_0x58b5ef=_0xfa869c;continue;case'6':_0x2e9e29['id']=_0x66ae08['KrZCc'];continue;case'7':_0x58b5ef={'el':_0x2e9e29,'cv':_0x2e9e29['query'+_0x1fe294(0x2f0)+_0x1fe294(0xa29)](_0x66ae08[_0x1fe294(0x5fc)]),'lg':_0x2e9e29['query'+_0x1fe294(0x2f0)+_0x1fe294(0xa29)](_0x66ae08[_0x1fe294(0x44b)])};continue;case'8':var _0x2e9e29=document[_0x1fe294(0xa21)+'eElem'+_0x1fe294(0x518)](_0x66ae08['Gwpih']);continue;case'9':return _0x58b5ef;}break;}}catch(_0xab19af){return null;}}var _0x29b3e2=null;function _0x36a35d(){var _0x38209b=_0x4a04dc;if('fSBmM'!==_0x66ae08[_0x38209b(0x7a0)])_0x494aeb['camer'+'a']='0x'+_0x66ae08[_0x38209b(0x5c7)](_0x5b9366,0x2d9+0x1*-0xdf7+-0xb1e*-0x1)['toStr'+'ing'](-0x2271+0x1436+0xe4b*0x1),_0x2992d4[_0x38209b(0x3bf)+'aFrom']=_0x47a2a9;else{if(_0x29b3e2)return _0x29b3e2;try{if(!document['body']||!document['body'][_0x38209b(0x5b6)+_0x38209b(0x3d0)+'d'])return null;var _0x4432dd=document['creat'+_0x38209b(0x74c)+'ent'](_0x66ae08[_0x38209b(0x8a4)]);return _0x4432dd['id']=_0x38209b(0x171)+_0x38209b(0x416)+'es',_0x4432dd['style']['cssTe'+'xt']=_0x66ae08['GpRcs'],document['body']['appen'+_0x38209b(0x3d0)+'d'](_0x4432dd),_0x29b3e2={'cv':_0x4432dd},_0x29b3e2;}catch(_0x120d6c){return null;}}}function _0x2f9896(_0x26086a){var _0x1078bf=_0x4a04dc;try{var _0x25cc23=Math[_0x1078bf(0x905)](0xfc2+0x260a+0x2f*-0x125,window[_0x1078bf(0x361)+_0x1078bf(0x3e5)]||document['docum'+'entEl'+'ement'][_0x1078bf(0x7b4)+_0x1078bf(0x1c8)+'h']||-0xd*0xc7+0x2*0x126b+0x1*-0x1abb),_0x10e4d3=Math[_0x1078bf(0x905)](0x335+0x147*0x9+0xeb3*-0x1,window['inner'+'Heigh'+'t']||document['docum'+_0x1078bf(0x33f)+_0x1078bf(0x6f5)][_0x1078bf(0x7b4)+_0x1078bf(0x920)+'ht']||-0x88d+-0x1dbf+0x264c*0x1);return(_0x66ae08[_0x1078bf(0x5f1)](_0x26086a['cv']['width'],_0x25cc23)||_0x66ae08[_0x1078bf(0x478)](_0x26086a['cv']['heigh'+'t'],_0x10e4d3))&&(_0x26086a['cv'][_0x1078bf(0x7a4)]=_0x25cc23,_0x26086a['cv'][_0x1078bf(0x8c0)+'t']=_0x10e4d3),{'w':_0x25cc23,'h':_0x10e4d3};}catch(_0x130c63){return{'w':0x0,'h':0x0};}}function _0x27f755(_0x1c84f1){var _0x28bdcf=_0x4a04dc,_0x63ced9=_0x29b3e2;if(!_0x63ced9)return;var _0x403c70=_0x63ced9['cv']['getCo'+_0x28bdcf(0x40d)]&&_0x63ced9['cv'][_0x28bdcf(0x579)+'ntext']('2d');if(!_0x403c70)return;var _0x230aae=_0x66ae08[_0x28bdcf(0x3ac)](_0x2f9896,_0x63ced9);_0x403c70[_0x28bdcf(0x9fc)+_0x28bdcf(0x722)](-0x3b4+0xb81+0x1*-0x7cd,0xbf*0x23+-0x19*-0x73+-0x4*0x956,_0x230aae['w'],_0x230aae['h']);if(!_0x59fc88['boxes']||!_0x1c84f1||!_0x1c84f1['me'])return;var _0x160c81=_0x1c84f1['me'],_0x6479f8=null,_0x287afc=_0x10506e[_0x28bdcf(0x7bf)+_0x28bdcf(0x891)+'orkSy'+'nc']||{},_0x158f89=Object['keys'](_0x287afc);for(var _0x42e266=-0x73b*-0x2+0x2333+-0x31a9;_0x42e266<_0x158f89['lengt'+'h'];_0x42e266++){var _0x348974=_0x2a0e06(_0x287afc[_0x158f89[_0x42e266]][_0x28bdcf(0x568)],-0xbaa*-0x2+-0x1697+0x89*-0x1,0x1030+-0x121+-0xf0c);if(_0x348974&&_0x348974[-0x78b*0x1+-0x7*-0x457+-0x16d6]===0x1028+0x20bb+0x1*-0x30e3&&_0x348974[0x1*0x1ba3+-0x29*0x6a+-0xaa8]===-0x2d2*0x1+0x1c2f+0x2b*-0x97&&_0x66ae08['KLuun'](_0x348974[0x21c0+0x24f1+0xeb*-0x4d],-0x20f2+0x48*-0x30+0x2e72)){_0x6479f8=_0x66ae08[_0x28bdcf(0x486)](_0x5b90ef,_0x287afc[_0x158f89[_0x42e266]]['ptr']+(0x11de+0x1974+-0x2afa),_0x28bdcf(0x2bb));break;}}for(var _0x2d489c=0x600+0x8f8*0x1+-0x1df*0x8;_0x2d489c<_0x1c84f1[_0x28bdcf(0x6ae)][_0x28bdcf(0x320)+'h'];_0x2d489c++){if(_0x66ae08['qbsct'](_0x28bdcf(0x784),'GYPar')){var _0x711dda=_0x1c84f1['list'][_0x2d489c],_0x2853b3=_0x6479f8!==null&&_0x66ae08['fMjlP'](_0x711dda['team'],_0x6479f8),_0xda8627=_0x66ae08['rGNYs'](_0x10d4af,_0x160c81[_0x28bdcf(0x343)],[_0x711dda['x'],_0x66ae08[_0x28bdcf(0x328)](_0x711dda['y'],0x2*0x358+0x5*-0x188+0xf9),_0x711dda['z']],_0x230aae['w'],_0x230aae['h']),_0x302c23=_0x10d4af(_0x160c81[_0x28bdcf(0x343)],[_0x711dda['x'],_0x711dda['y']+(0x9f+-0x1a7e+0x19df*0x1+0.8),_0x711dda['z']],_0x230aae['w'],_0x230aae['h']);if(_0x66ae08[_0x28bdcf(0xa03)](!_0xda8627,!_0x302c23))continue;var _0x27eef6=Math['min'](_0xda8627['x'],_0x302c23['x']),_0x506f13=Math[_0x28bdcf(0x905)](_0xda8627['x'],_0x302c23['x']),_0x2368a1=Math[_0x28bdcf(0x968)](_0xda8627['y'],_0x302c23['y']),_0x22590b=Math[_0x28bdcf(0x905)](_0xda8627['y'],_0x302c23['y']),_0x3c9f6d=Math[_0x28bdcf(0x905)](-0xc7*0xb+-0x200+-0x152*-0x8,Math[_0x28bdcf(0x968)](-0x7dc+0xcb0+0xe*-0x54,_0x506f13-_0x27eef6)),_0x13ba98=Math['max'](0xf67+-0x11b9+0x8*0x4b,Math['min'](0xf1c*-0x1+0x1bbc+-0xc14,_0x66ae08[_0x28bdcf(0x422)](_0x22590b,_0x2368a1))),_0x1f58ad=(_0x27eef6+_0x506f13)/(-0x1204+0xf7c*-0x1+0x2182*0x1),_0x1cfad9=(_0x2368a1+_0x22590b)/(0x1*0x2462+-0x24c+-0x5ae*0x6);_0x403c70[_0x28bdcf(0x725)+_0x28bdcf(0xadc)+'e']=_0x2853b3?_0x28bdcf(0x947)+'79,14'+'3,106'+_0x28bdcf(0x386):_0x66ae08[_0x28bdcf(0x669)],_0x403c70[_0x28bdcf(0x382)+'idth']=_0x2853b3?-0x2*0x92c+0x1727*-0x1+-0x53*-0x80:0x1*-0x15a9+-0x2e5*-0xb+-0xa2c,_0x403c70['strok'+_0x28bdcf(0x6a2)](_0x66ae08['tUkMo'](_0x1f58ad,_0x3c9f6d/(-0x15aa+0x22d*0x7+0x671)),_0x1cfad9-_0x13ba98/(-0x1*0x1d45+0x17*0x1ab+-0x916),_0x3c9f6d,_0x13ba98),!_0x2853b3&&(_0x403c70[_0x28bdcf(0x9da)+_0x28bdcf(0x5c1)]=_0x66ae08[_0x28bdcf(0x669)],_0x403c70['font']=_0x28bdcf(0x985)+_0x28bdcf(0x741)+_0x28bdcf(0x40a)+'ce,Co'+'nsola'+_0x28bdcf(0x852)+_0x28bdcf(0x72e)+'e',_0x403c70[_0x28bdcf(0x1c9)+_0x28bdcf(0x1e1)](Math[_0x28bdcf(0x8aa)](_0x711dda['d']||-0x231e+-0x1a46+-0x2*-0x1eb2)+'m',_0x1f58ad-_0x66ae08[_0x28bdcf(0x8a6)](_0x3c9f6d,-0x1694+0x2678*-0x1+-0x3*-0x145a),_0x1cfad9-_0x13ba98/(0x1200+0x19c+-0x139a)-(0x618*-0x6+0x1a56*-0x1+0x3ee9*0x1)));}else _0x223a29[_0x28bdcf(0x7be)+_0x28bdcf(0xa14)]['push'](_0x66ae08[_0x28bdcf(0x19f)](_0x66ae08['vqEWh'](_0x66ae08[_0x28bdcf(0x17b)](_0x66ae08['QvdDi'](_0x66ae08[_0x28bdcf(0x117)]+_0x4bd29d[_0x28bdcf(0x55c)+_0x28bdcf(0x8dc)],_0x66ae08[_0x28bdcf(0x256)]),_0x28bdcf(0x660)+'once\x20'+_0x28bdcf(0x5ee)+_0x28bdcf(0x613)+_0x28bdcf(0x5e7)+_0x28bdcf(0x75d)+_0x28bdcf(0x1f0)+_0x28bdcf(0x338)+'\x20and\x20'+_0x28bdcf(0x2a2)+_0x28bdcf(0x14e)+_0x28bdcf(0x2ed)+_0x28bdcf(0x322)+_0x28bdcf(0x497)+_0x28bdcf(0x8b9)+'\x20'),_0x66ae08[_0x28bdcf(0x9c6)])+(_0x28bdcf(0x9c5)+'tered'+'\x20')+_0x1af736['hooks'+_0x28bdcf(0x9c5)+'tered'+_0x28bdcf(0xa4f)],'\x20hook'+'(s)\x20d'+_0x28bdcf(0xab4)+_0x28bdcf(0x4c8)+_0x28bdcf(0x56c)+_0x28bdcf(0x981)+_0x28bdcf(0x93b)+'start'+'.'));}}function _0x7aef50(){var _0x531c67=_0x4a04dc,_0x1133ec={'JVwfX':_0x66ae08[_0x531c67(0x1c3)],'nzkit':function(_0x581c56,_0x40be6c){return _0x581c56(_0x40be6c);},'XRoTf':_0x531c67(0x3db),'aTLMf':function(_0x4f06e7,_0x5c8866){var _0x24220a=_0x531c67;return _0x66ae08[_0x24220a(0x510)](_0x4f06e7,_0x5c8866);},'POVdA':function(_0x18780e,_0x2cddd){return _0x18780e===_0x2cddd;},'SNeLC':function(_0x4f8748,_0x574be2){return _0x4f8748!==_0x574be2;},'vDoub':function(_0x5f0263,_0x47318d){return _0x5f0263(_0x47318d);},'DLdqS':function(_0x131db6,_0x3e3d80){return _0x66ae08['KlAQI'](_0x131db6,_0x3e3d80);}},_0x29556b=_0x1d394();if(!_0x29556b||!_0x29556b['cv'])return;try{var _0x442ea6=_0x29556b['cv']['getCo'+_0x531c67(0x40d)]&&_0x29556b['cv']['getCo'+_0x531c67(0x40d)]('2d');if(!_0x442ea6)return;var _0x34748f=_0x29556b['cv'][_0x531c67(0x7a4)],_0xbb4654=_0x34748f/(0x100a*0x2+-0x163d+-0x9d5),_0x4741f6=_0x4e0c3d(),_0x149788=_0x4741f6['me'];_0x442ea6[_0x531c67(0x9fc)+'Rect'](-0x3*-0x106+-0x2*-0xb1b+-0x1948,0x204c+0xd*0x2a6+0x3*-0x163e,_0x34748f,_0x34748f),_0x442ea6[_0x531c67(0x725)+'eStyl'+'e']=_0x531c67(0x947)+_0x531c67(0x687)+'43,17'+_0x531c67(0x405)+')',_0x442ea6[_0x531c67(0x382)+_0x531c67(0x738)]=-0x22c7+0x2*0x10c1+0x2*0xa3;for(var _0x3ad26b=-0x217*-0x12+-0x5c*-0x17+0x9*-0x519;_0x66ae08[_0x531c67(0x71f)](_0x3ad26b,0xf07*0x1+0x1*-0x7d6+-0x2*0x397);_0x3ad26b++){_0x442ea6[_0x531c67(0x415)+_0x531c67(0x843)](),_0x442ea6[_0x531c67(0x9ab)](_0xbb4654,_0xbb4654,_0x66ae08[_0x531c67(0x616)](_0x66ae08[_0x531c67(0x73d)](_0xbb4654-(0x6ed+0x1666+-0x7b*0x3d),_0x3ad26b),-0x1cf2+0x94c+0x13a9),0x10d*0x22+-0x1f8c+-0x217*0x2,Math['PI']*(-0x9*0xf1+-0x1d1f+-0x2*-0x12cd)),_0x442ea6[_0x531c67(0x725)+'e']();}_0x442ea6['begin'+_0x531c67(0x843)](),_0x442ea6[_0x531c67(0x481)+'o'](-0x65b+0x2*0x114b+-0x1c37,_0xbb4654),_0x442ea6[_0x531c67(0x23d)+'o'](_0x34748f-(0x1fab+-0x11*-0x235+-0x452c),_0xbb4654),_0x442ea6[_0x531c67(0x481)+'o'](_0xbb4654,0x16ee+-0x24bd+0xdd3),_0x442ea6[_0x531c67(0x23d)+'o'](_0xbb4654,_0x34748f-(0x1*0x1282+0x29a*-0xd+0xf54)),_0x442ea6['strok'+'e']();if(!_0x149788){if(_0x29556b['lg'])_0x29556b['lg'][_0x531c67(0x665)+_0x531c67(0x889)+'t']=_0x66ae08[_0x531c67(0x8fb)];return;}var _0x6fafe5=_0x66ae08[_0x531c67(0x610)](_0xbb4654-(-0x1*-0xc88+0x1*-0x68e+-0x5f4),_0x59fc88[_0x531c67(0x5e1)]),_0x1b5f4b=null,_0x1de3e7=_0x10506e['Photo'+_0x531c67(0x891)+_0x531c67(0x4d2)+'nc']||{},_0x349c71=Object[_0x531c67(0x70c)](_0x1de3e7);for(var _0x5840c5=-0x10cb+-0x1d99*-0x1+-0xcce;_0x5840c5<_0x349c71[_0x531c67(0x320)+'h'];_0x5840c5++){var _0x2182fc=_0x2a0e06(_0x1de3e7[_0x349c71[_0x5840c5]]['ptr'],0x86d+-0x4f2+-0x347*0x1,-0x1aa6+-0xb*0x24e+0x3403);if(_0x2182fc&&_0x66ae08['HNclR'](_0x2182fc[0x122e+0x214f*-0x1+0xf21],-0x1c6f+-0xaf3+-0x2762*-0x1)&&_0x2182fc[0x13d8+0x1e6e+-0x3245]===-0x162e+0x207d+-0xa4f&&_0x66ae08['LtoZV'](_0x2182fc[0x82b*-0x4+0x452*-0x3+0x2da4],-0xc6f+-0x295*-0x2+-0x745*-0x1)){if(_0x531c67(0x87a)===_0x531c67(0x56e)){var _0x17a7a1=_0x366417['v'];if(typeof _0x17a7a1!==_0x1133ec['JVwfX']||!_0x1133ec[_0x531c67(0x5b2)](_0x1b08e7,_0x17a7a1))return![];if(_0x1baa55['k']===_0x1133ec[_0x531c67(0x232)])return _0x1133ec[_0x531c67(0xa9b)](_0x17a7a1,-0x1*0x156a+0xa*-0x3c1+0x3af4)||_0x1133ec[_0x531c67(0x1c6)](_0x17a7a1,-0x7*0x46f+-0x215b+0x4065);var _0x2386d2=_0x5cfcff[_0x531c67(0x54c)];if(_0x1133ec[_0x531c67(0x6bf)](typeof _0x2386d2,_0x531c67(0x597)+'r')||!_0x1133ec[_0x531c67(0xaad)](_0x3ddedb,_0x2386d2))return!![];if(_0x1133ec['aTLMf'](_0x24e5ae[_0x531c67(0x701)],0x2010+-0x207a+0x6b))return _0x57446f['abs'](_0x17a7a1-_0x2386d2)<=_0x1a8179[_0x531c67(0x905)](-0x1752+0x1*0x1bd1+-0x47e,_0x1133ec['DLdqS'](_0x4ee4dd['abs'](_0x2386d2),-0x11e5+0x23d6*0x1+0x11f1*-0x1+0.6));return _0x144a51['abs'](_0x17a7a1)<0x3af33346+-0x4e5*-0xa086e+-0x1c*0x1bafcfd;}else{_0x1b5f4b=_0x5b90ef(_0x1de3e7[_0x349c71[_0x5840c5]][_0x531c67(0x568)]+(-0x318*0x5+0x1c47+-0xc77*0x1),_0x531c67(0x2bb));break;}}}var _0x43349f=-0x1a13+-0x1bad+0x35c0;for(var _0x33086e=-0x73*0x2e+0x2e*-0x53+0x2394;_0x33086e<_0x4741f6[_0x531c67(0x6ae)][_0x531c67(0x320)+'h'];_0x33086e++){if(_0x531c67(0x2d1)==='Yakjn'){var _0x35c57f=(_0x531c67(0x599)+'|9|10'+_0x531c67(0x71e)+'0|4|8'+'|3')[_0x531c67(0x561)]('|'),_0x13164d=-0x4*-0x280+-0x1*-0x1981+-0x3d*0x95;while(!![]){switch(_0x35c57f[_0x13164d++]){case'0':_0x442ea6['begin'+'Path']();continue;case'1':_0x442ea6['fillS'+'tyle']=_0x207c36?_0x66ae08[_0x531c67(0x4a2)]:_0x531c67(0x4d4)+'74';continue;case'2':var _0x207c36=_0x66ae08[_0x531c67(0x860)](_0x1b5f4b,null)&&_0x66ae08[_0x531c67(0x47b)](_0x5daa19['team'],_0x1b5f4b);continue;case'3':_0x43349f++;continue;case'4':_0x442ea6[_0x531c67(0x9ab)](_0x37e3a1,_0x543672,_0x207c36?-0x1ed2+0x2137*-0x1+0x1*0x400b:0xe5*-0x1+0x607*0x1+-0x51f+0.20000000000000018,0x253f*-0x1+0x5*-0x277+0x2f*0x10e,_0x66ae08['xKeoc'](Math['PI'],-0x8*0x4c+0x5*0x2b7+0xf*-0xbf));continue;case'5':var _0x3fceaa=Math['sqrt'](_0x194c44*_0x194c44+_0x19188d*_0x19188d);continue;case'6':var _0x5daa19=_0x4741f6[_0x531c67(0x6ae)][_0x33086e];continue;case'7':var _0x194c44=(_0x5daa19['x']-_0x149788[_0x531c67(0x8c1)][-0x295*-0x8+-0x7*0x403+-0x76d*-0x1])*_0x6fafe5,_0x19188d=(_0x5daa19['z']-_0x149788['feet'][-0x1*-0x441+0xfe9+-0x1428])*_0x6fafe5;continue;case'8':_0x442ea6[_0x531c67(0x340)]();continue;case'9':var _0x37e3a1=_0xbb4654,_0x543672=_0xbb4654;continue;case'10':_0x66ae08['rKeUH'](_0x3fceaa,_0x66ae08['LWhaj'](_0xbb4654,0x16*0xfe+-0x1756+0x188))?(_0x37e3a1=_0x66ae08['lNrDY'](_0xbb4654,_0x194c44/_0x3fceaa*_0x66ae08[_0x531c67(0x422)](_0xbb4654,-0x167f+0x1bb0+0x1b9*-0x3)),_0x543672=_0xbb4654+_0x66ae08['ugiSJ'](_0x66ae08['OqxSM'](_0x19188d,_0x3fceaa),_0xbb4654-(0x21*-0xd5+0xc8b*-0x2+0x3491*0x1))):(_0x37e3a1=_0xbb4654+_0x194c44,_0x543672=_0xbb4654+_0x19188d);continue;}break;}}else try{_0x1cd46b['setIt'+'em'](_0x56eaf9,_0x14e845(_0x7faed1['fov']));}catch(_0x171de5){}}_0x442ea6['fillS'+_0x531c67(0x5c1)]=_0x66ae08[_0x531c67(0x359)],_0x442ea6[_0x531c67(0x415)+_0x531c67(0x843)](),_0x442ea6[_0x531c67(0x9ab)](_0xbb4654,_0xbb4654,0x23b*0x1+-0x73e*0x2+0xc44,0xfcb*0x2+-0x1*0x376+-0x1c20,_0x66ae08[_0x531c67(0xed)](Math['PI'],0x826+0x1c76+-0x249a)),_0x442ea6[_0x531c67(0x340)](),_0x29556b['lg']&&(_0x29556b['lg'][_0x531c67(0x665)+_0x531c67(0x889)+'t']=_0x66ae08[_0x531c67(0x1d2)](_0x531c67(0x84d),_0x43349f)+_0x66ae08[_0x531c67(0x1a3)]+Math[_0x531c67(0x8aa)](_0x59fc88[_0x531c67(0x5e1)])+'m'+(_0x59fc88[_0x531c67(0x40e)]?_0x66ae08[_0x531c67(0x1c7)](_0x66ae08[_0x531c67(0x56b)]+Math[_0x531c67(0x8aa)](_0x447f63['fov']),'°'):'')+(_0x1b5f4b!==null?_0x66ae08[_0x531c67(0x4ae)]('\x20·\x20te'+'am',_0x1b5f4b):''));}catch(_0x52c049){}}function _0x16cf43(){var _0x4fed44=_0x4a04dc,_0x2f2000={'eFLQV':function(_0x4f05de,_0x17e7a0){return _0x4f05de>_0x17e7a0;},'DWtwA':function(_0x56e56e,_0x4ec0a5){var _0x543229=_0x32ef;return _0x66ae08[_0x543229(0x11c)](_0x56e56e,_0x4ec0a5);},'kOXga':function(_0x239f4b,_0x15f121){return _0x239f4b+_0x15f121;},'SYrfG':'PLAYE'+_0x4fed44(0x417),'tfmcb':'#8d7a'+'99'};if(!_0x59fc88['on']){_0x66ae08[_0x4fed44(0x254)](setTimeout,_0x16cf43,-0x1e2c+0x239f+-0x1*0x37f);return;}_0x66ae08['hQBEM'](_0x1d394);if(_0x59fc88[_0x4fed44(0x40e)])_0x66ae08[_0x4fed44(0xa71)](_0x36a35d);var _0x373b19=null;try{_0x373b19=_0x4e0c3d();}catch(_0x3e853b){}try{_0x66ae08['OoysL'](_0x7aef50);}catch(_0x56ef54){}try{'gIrHS'!==_0x66ae08[_0x4fed44(0xad3)]?(_0x13cc56[_0x4fed44(0x665)+_0x4fed44(0x889)+'t']=_0x2f2000['eFLQV'](_0x2733cc,0x19f*-0x5+-0x1ae+0xa7*0xf)?_0x2f2000['DWtwA'](_0x2f2000[_0x4fed44(0x8cc)](_0x2f2000['SYrfG'],_0x4a9df8),_0x5ab4ff?_0x4fed44(0x507)+_0x1f5ca7+_0x4fed44(0x1eb):'')+(_0x5bfa49&&_0x31b972['camer'+'a']?_0x4fed44(0x88e)+'\x20'+_0x17b974['camer'+_0x4fed44(0x407)]:'\x20\x20cam'+'\x20-'):'no\x20en'+_0x4fed44(0x745)+_0x4fed44(0x2ca)+'(lobb'+'y?)\x20\x20'+_0x4fed44(0x1be)+(_0x54d419&&_0x4663f7['camer'+'a']?_0x23f9d1['camer'+_0x4fed44(0x407)]:'-'),_0x3b610b['style'][_0x4fed44(0x6bc)]=_0x257790>0x835+-0x79d*-0x1+0x12*-0xe1?_0x4fed44(0x426)+'a8':_0x2f2000[_0x4fed44(0x22a)]):_0x66ae08['TFUIy'](_0x27f755,_0x373b19);}catch(_0x2eff1e){}setTimeout(_0x16cf43,-0x602+-0x1*0x192b+0x1*0x1f5f);}function _0x187b50(){var _0x2db612=_0x4a04dc,_0x4aa56={'sEoEJ':function(_0x4c1600,_0x584699){return _0x4c1600===_0x584699;},'NytHb':_0x2db612(0x80e)+_0x2db612(0x92c),'WRFnI':_0x2db612(0x2ed)+'n._ru'+'ntime'+'.reso'+_0x2db612(0x9d3)+_0x2db612(0x9e2),'mkVGE':_0x2db612(0x9e6),'BkQPK':_0x2db612(0x243),'Yewbg':function(_0x5f2598,_0x5145e0){return _0x5f2598+_0x5145e0;},'pSnzE':function(_0x3f01d8,_0x3fe741){return _0x66ae08['clvAw'](_0x3f01d8,_0x3fe741);},'oQtxc':function(_0xd27c80){return _0xd27c80();},'CYxCC':function(_0x5c5e66){return _0x5c5e66();}},_0xdff9c=window['Unity'+'WebMo'+'dkit']&&window[_0x2db612(0x849)+_0x2db612(0x166)+_0x2db612(0x540)]['Runti'+'me']||null,_0x6e0b5e=_0xdff9c&&_0xdff9c['il2Cp'+'pCont'+'ext'],_0x5c0d55=_0x6e0b5e&&_0x6e0b5e[_0x2db612(0xa61)+'tData'],_0x1c1966={},_0x3310d0=[];for(var _0x44df8a in _0x29a47e){_0x1c1966[_0x44df8a]=_0x66ae08['mQXqc']('0x',_0x29a47e[_0x44df8a][_0x2db612(0x568)][_0x2db612(0x108)+_0x2db612(0x7e9)](-0x2683*0x1+0xac5*0x2+0x1*0x1109));if(_0x29a47e[_0x44df8a][_0x2db612(0x9a3)+'ced'])_0x3310d0['push'](_0x44df8a);}var _0x5d9f85={};for(var _0x13fab0 in _0x29a47e)_0x5d9f85[_0x13fab0]=_0x22a416(_0x29a47e[_0x13fab0]['ptr']);var _0x5e303c={},_0x40d88f=null;try{_0x5e303c=_0x534052();}catch(_0x3a0c4d){_0x40d88f=String(_0x3a0c4d&&_0x3a0c4d['messa'+'ge']||_0x3a0c4d);}var _0x1a10d2={'version':_0x4eebbe,'when':new Date()['toISO'+'Strin'+'g'](),'elapsedMs':_0x66ae08['vwMdk'](Date[_0x2db612(0xf1)](),_0x598176),'frame':location[_0x2db612(0x593)][_0x2db612(0x688)](0x8b1+-0x123*0xe+0x739,0x2011+-0x9d9*0x1+0x57*-0x40),'host':_0x2e0d56,'frameRole':_0x3dd1cd,'uwmk':!!_0xdff9c,'il2CppContext':!!_0x6e0b5e,'typeCount':_0x5c0d55?Object[_0x2db612(0x70c)](_0x5c0d55)[_0x2db612(0x320)+'h']:null,'arm':_0x18253c,'assemblies':_0x58b63f,'hooksTotal':_0x2c50f2[_0x2db612(0x320)+'h'],'hooksApplied':_0x24dc08(),'hooksResolved':_0x66ae08[_0x2db612(0x534)](_0x10160d),'hooksRegisteredAtArm':_0x18253c['hooks'+'Regis'+'tered']||0x139*0x11+0x3*-0x56e+0x47f*-0x1,'hookErrors':_0x2be9b0[_0x2db612(0x688)](-0x1*-0x203b+-0x3*-0x7cf+0xdea*-0x4,0x1*-0x1bd6+0x1141*0x1+-0x13*-0x8f),'instances':_0x1c1966,'classNames':_0x5d9f85,'instancesReplaced':_0x3310d0,'hookFireProof':_0x428035,'survey':_0x5e303c,'actkKeys':_0x5e9dab,'surveyRows':Object['keys'](_0x5e303c)[_0x2db612(0x644)+'e'](function(_0x457625,_0x303b7e){var _0x18f9bf=_0x2db612;if(_0x4aa56['mkVGE']===_0x4aa56[_0x18f9bf(0x68b)]){var _0x254022=_0x3e3ec5[_0x18f9bf(0xa6a)+_0x18f9bf(0x9e9)];if(_0x4aa56['sEoEJ'](typeof _0x254022['resol'+'veGam'+'e'],_0x4aa56[_0x18f9bf(0x7d3)])){var _0x2e1663=_0x254022[_0x18f9bf(0x321)+_0x18f9bf(0x57e)+'e']();if(_0x2e1663)return _0xb8eb2a[_0x18f9bf(0x6f9)+'e']=_0x4aa56[_0x18f9bf(0x383)],_0x2e1663;}if(_0x254022[_0x18f9bf(0x726)])return _0x2c5258[_0x18f9bf(0x6f9)+'e']='plugi'+'n._ru'+_0x18f9bf(0x7b0)+_0x18f9bf(0x869)+'e',_0x254022[_0x18f9bf(0x726)];}else return _0x4aa56['Yewbg'](_0x457625,_0x5e303c[_0x303b7e]['lengt'+'h']);},-0x1d76+-0x1*0x1ae7+-0x133*-0x2f),'reads':{'ok':_0x991340['ok'],'failed':_0x991340['faile'+'d'],'lastError':_0x991340['lastE'+_0x2db612(0x8eb)],'source':_0x991340['sourc'+'e']},'identity':_0x4f380e(),'globals':_0x16003d(),'wasmMemory':{'captured':!!_0xd31229,'atMs':_0x491191,'bytes':(function(){var _0x424d96=_0x2db612;try{return _0xd31229&&_0xd31229[_0x424d96(0x8e1)+'r']?_0xd31229['buffe'+'r'][_0x424d96(0x7f4)+_0x424d96(0x4b8)]:-0x1a16+0x61b+0x13fb;}catch(_0x595667){if(_0x4aa56['pSnzE']('RXUpm',_0x424d96(0x8ef)))_0x484a2c['remov'+'e']();else return 0x20*0x11+0xd78*-0x1+-0x3*-0x3c8;}}()),'exportKeys':_0x532701},'diff':_0x574e57[_0x2db612(0x688)](-0x21a+0xdcd+-0xbb3,0x323+-0x15b0+0x12b5),'speed':{'on':_0x16a9cd['on'],'factor':_0x16a9cd['facto'+'r'],'writes':_0x2aa737,'scaled':_0xc6762a[_0x2db612(0x688)](-0x1*0x777+0xf9f+-0x8*0x105,-0x41*-0x1f+0x2*-0x111a+-0x1*-0x1a65),'skipped':_0x10f096[_0x2db612(0x688)](-0x579*-0x1+0x1*0x26ad+-0x2c26,-0x1*0x714+0x24da+0x2*-0xedb)},'esp':_0x66ae08[_0x2db612(0x165)](_0xe638cb),'view':_0x66ae08[_0x2db612(0x218)](_0x11d1c7),'fov':_0x447f63[_0x2db612(0x206)],'espView':{'on':_0x59fc88['on'],'boxes':_0x59fc88[_0x2db612(0x40e)],'span':_0x59fc88['span']},'local':(function(){var _0x5681db=_0x2db612,_0x2dbdc8=_0x4aa56[_0x5681db(0x79a)](_0xdfb0c8);if(!_0x2dbdc8)return null;return{'ptr':'0x'+_0x2dbdc8[_0x5681db(0x568)][_0x5681db(0x108)+_0x5681db(0x7e9)](0x17e8+-0x4*-0x11f+-0x1c54),'feet':_0x2dbdc8[_0x5681db(0x8c1)],'eye':_0x2dbdc8[_0x5681db(0x343)],'pitch':_0x2dbdc8[_0x5681db(0x569)],'yaw':_0x2dbdc8[_0x5681db(0x4f4)],'reach':_0x2dbdc8[_0x5681db(0x719)]};}()),'uwmkLog':_0x1ed555['slice'](-0x302*-0x3+0x1*0x175d+-0x2063*0x1,0x1f76+-0x1*-0x210b+-0x1*0x406d),'warnings':[]};if(_0x40d88f)_0x1a10d2[_0x2db612(0x7be)+'ngs'][_0x2db612(0x3f5)](_0x66ae08[_0x2db612(0x9fd)]+_0x40d88f);if(_0x18253c[_0x2db612(0x883)])_0x1a10d2['warni'+'ngs'][_0x2db612(0x3f5)](_0x66ae08[_0x2db612(0x82c)]+_0x18253c[_0x2db612(0x883)]);_0x1a10d2['surve'+_0x2db612(0x11d)]===0x3*-0x65+-0x3d1*-0xa+-0x24fb&&Object[_0x2db612(0x70c)](_0x1a10d2[_0x2db612(0x8dd)+_0x2db612(0xa49)])[_0x2db612(0x320)+'h']>0x1306*0x2+0x2693+-0x5*0xf53&&_0x1a10d2['warni'+_0x2db612(0xa14)][_0x2db612(0x3f5)](_0x66ae08[_0x2db612(0x3d9)](_0x66ae08['pjwrH'](_0x2db612(0x4b5)+'red\x20'+Object['keys'](_0x1a10d2[_0x2db612(0x8dd)+_0x2db612(0xa49)])[_0x2db612(0x320)+'h'],_0x66ae08[_0x2db612(0xef)]),_0x991340['lastE'+'rror']?_0x66ae08['Nclwp'](_0x66ae08[_0x2db612(0x17a)],_0x991340['lastE'+'rror']):_0x66ae08[_0x2db612(0x42f)]));_0x1a10d2[_0x2db612(0x4d3)+_0x2db612(0x500)]&&_0x66ae08['GYwtc'](_0x1a10d2[_0x2db612(0x4d3)+'ity'][_0x2db612(0x30b)+_0x2db612(0xa5f)],![])&&_0x1a10d2['warni'+_0x2db612(0xa14)][_0x2db612(0x3f5)](_0x66ae08['dZtqh'](_0x66ae08[_0x2db612(0xafa)](_0x66ae08[_0x2db612(0x1e8)]('ANOTH'+_0x2db612(0x60c)+'MK\x20CO'+_0x2db612(0xae6)+_0x2db612(0x93e)+_0x2db612(0x9e0)+'ndow.'+_0x2db612(0x849)+'WebMo'+_0x2db612(0x2eb)+_0x2db612(0xad0)+'Runti'+_0x2db612(0x4c6)+'\x20arme'+'d\x20was'+'\x20',_0x2db612(0x9a3)+_0x2db612(0x450)+_0x2db612(0x882)+'iffer'+'ent\x20i'+_0x2db612(0x1f0)+_0x2db612(0xea)+_0x2db612(0x646)+'are\x20a'+'sking'+'\x20the\x20'+_0x2db612(0x406)+_0x2db612(0x69f)+_0x2db612(0x2cc)+'r\x20'),_0x66ae08[_0x2db612(0x8d1)]),_0x66ae08[_0x2db612(0x760)]));_0x1a10d2['ident'+_0x2db612(0x500)]&&_0x1a10d2[_0x2db612(0x4d3)+'ity']['plugi'+'nRunt'+_0x2db612(0x85e)+'Expor'+_0x2db612(0x544)]===![]&&(_0x2db612(0x8f0)===_0x2db612(0xa72)?_0x4e91af():_0x1a10d2[_0x2db612(0x7be)+'ngs'][_0x2db612(0x3f5)](_0x66ae08['pjwrH'](_0x2db612(0x2ed)+'n._ru'+_0x2db612(0x7b0)+_0x2db612(0x560)+_0x2db612(0x8f8)+_0x2db612(0x2be)+'Unity'+'WebMo'+_0x2db612(0x2eb)+'Runti'+'me\x20-\x20'+'the\x20p'+'lugin'+'\x20was\x20'+_0x2db612(0x459)+'\x20',_0x66ae08[_0x2db612(0x1dc)])));if(_0x1a10d2['esp']&&_0x1a10d2[_0x2db612(0x6e2)][_0x2db612(0x334)])_0x1a10d2['warni'+'ngs'][_0x2db612(0x3f5)]('ESP:\x20'+_0x1a10d2['esp'][_0x2db612(0x334)]);if(_0x1a10d2['globa'+'ls']&&!_0x1a10d2['globa'+'ls'][_0x2db612(0xa1d)+'8']){var _0x53561a='';_0x1a10d2[_0x2db612(0x78d)+_0x2db612(0x43d)+'oof']&&(_0x53561a=_0x66ae08[_0x2db612(0x236)](_0x2db612(0x854)+'ok\x20fi'+'red\x20a'+'t\x20'+_0x1a10d2['hookF'+_0x2db612(0x43d)+'oof'][_0x2db612(0x3b4)]+('ms\x20wi'+'th\x20or'+'igina'+'lFunc'+'=')+_0x1a10d2['hookF'+_0x2db612(0x43d)+_0x2db612(0x8d6)][_0x2db612(0x4cc)+_0x2db612(0x62d)+'nc']+(_0x2db612(0x160)+'game\x20'+'resol'+_0x2db612(0x4fc))+_0x1a10d2['hookF'+'irePr'+'oof']['resol'+'veGam'+_0x2db612(0x499)+'re']+('\x20(sou'+_0x2db612(0x585)),_0x1a10d2['hookF'+'irePr'+'oof'][_0x2db612(0x907)+_0x2db612(0x2c6)+_0x2db612(0x893)+'e']||_0x2db612(0x8ff))+('),\x20so'+'\x20the\x20'+_0x2db612(0x645)+_0x2db612(0x46e)+'exist'+'ed\x20th'+'en\x20an'+_0x2db612(0x933)+'not\x20r'+_0x2db612(0x7c6)+_0x2db612(0x90d)+'ow.')),_0x1a10d2[_0x2db612(0x7be)+_0x2db612(0xa14)]['push'](_0x66ae08[_0x2db612(0x68e)]('Unity'+'\x20inst'+_0x2db612(0x755)+'not\x20r'+_0x2db612(0x872)+'ed\x20ye'+_0x2db612(0x1cf)+_0x2db612(0x224)+'\x20',_0x1a10d2['globa'+'ls']['gameS'+_0x2db612(0x2c6)]||_0x2db612(0x8ff))+').\x20'+('Heap\x20'+_0x2db612(0x6fa)+_0x2db612(0x837)+_0x2db612(0x48b)+'ked\x20u'+'ntil\x20'+_0x2db612(0x42e)+'e\x20obj'+_0x2db612(0x6a4)+_0x2db612(0xfc)+'odule'+_0x2db612(0x309)+_0x2db612(0x3fc)+_0x2db612(0xa12)+'hable'+'.')+_0x53561a);}(_0x1a10d2[_0x2db612(0x33b)+'ls']&&!_0x1a10d2[_0x2db612(0x33b)+'ls'][_0x2db612(0xa1b)+'Wrapp'+'er']||_0x1a10d2[_0x2db612(0x33b)+'ls']['value'+'Wrapp'+'er']===_0x2db612(0x427)+'ined')&&_0x1a10d2['warni'+_0x2db612(0xa14)]['push'](_0x66ae08['FMOMQ']);if(_0x66ae08['Fyuky'](_0x1a10d2[_0x2db612(0x55c)+'Total'],-0xef+0x6a3*0x1+-0x5b4)&&_0x66ae08['JIkSm'](_0x1a10d2[_0x2db612(0x55c)+_0x2db612(0x5f8)+'ed'],0x1c*0x95+-0x1047+-0x5*0x1)&&_0x5c0d55){if(_0x2db612(0x4c5)==='NWkxp')_0x1a10d2['hooks'+_0x2db612(0x5d1)+'ved']===-0x1984+0x68f+0x12f5*0x1?_0x1a10d2[_0x2db612(0x7be)+_0x2db612(0xa14)][_0x2db612(0x3f5)](_0x66ae08[_0x2db612(0x571)](_0x66ae08[_0x2db612(0xa84)](_0x66ae08[_0x2db612(0x117)],_0x1a10d2[_0x2db612(0x55c)+_0x2db612(0x8dc)])+(_0x2db612(0x526)+_0x2db612(0x742)+_0x2db612(0x80d)+_0x2db612(0x4e9)+'N\x20by\x20'+_0x2db612(0x460)+_0x2db612(0xad0)+_0x2db612(0x103)+_0x2db612(0x88d)+'\x20')+('runs\x20'+'once\x20'+'durin'+'g\x20Web'+'Assem'+'bly.i'+_0x2db612(0x1f0)+'tiate'+'\x20and\x20'+_0x2db612(0x2a2)+_0x2db612(0x14e)+_0x2db612(0x2ed)+_0x2db612(0x322)+'ks.le'+_0x2db612(0x8b9)+'\x20'),_0x2db612(0x8be)+_0x2db612(0x786)+_0x2db612(0x8a8)+_0x2db612(0xaee)+_0x2db612(0x4ff)+_0x2db612(0x88c)+'re\x20ig'+_0x2db612(0x615)+_0x2db612(0x557)+_0x2db612(0x877)+_0x2db612(0x7c3)+_0x2db612(0x8d4)+_0x2db612(0xf5)+'.\x20')+(_0x2db612(0x9c5)+'tered'+'\x20')+_0x1a10d2[_0x2db612(0x55c)+_0x2db612(0x9c5)+_0x2db612(0x73c)+_0x2db612(0xa4f)]+_0x66ae08[_0x2db612(0x30c)]):_0x1a10d2[_0x2db612(0x7be)+_0x2db612(0xa14)][_0x2db612(0x3f5)](_0x66ae08['ydvzM'](_0x66ae08[_0x2db612(0x58b)](_0x66ae08['ueypk']+_0x1a10d2[_0x2db612(0x55c)+_0x2db612(0x5d1)+'ved']+_0x2db612(0x706),_0x1a10d2[_0x2db612(0x55c)+'Total'])+('\x20hook'+_0x2db612(0x325)+_0x2db612(0x93c)+'able\x20'+_0x2db612(0x792)+_0x2db612(0x807)+_0x2db612(0x853)+_0x2db612(0x9e8)+'ne.\x20T'+_0x2db612(0x6da)+'gnatu'+'re\x20'),_0x66ae08[_0x2db612(0x7a5)]));else return _0x4aa56['CYxCC'](_0x4edec4);}return _0x1a10d2['hooks'+'Appli'+'ed']>-0x15c0+0x268f+0x10cf*-0x1&&!_0x1a10d2[_0x2db612(0x8dd)+'nces'][_0x2db612(0x1af)+_0x2db612(0x293)+_0x2db612(0x24b)]&&_0x1a10d2[_0x2db612(0x7be)+_0x2db612(0xa14)][_0x2db612(0x3f5)](_0x66ae08[_0x2db612(0x402)]+_0x66ae08[_0x2db612(0xaa9)]),_0x1a10d2[_0x2db612(0x8dd)+'ncesR'+'eplac'+'ed'][_0x2db612(0x320)+'h']&&('pUhGA'!==_0x2db612(0xaaf)?_0x1a10d2['warni'+'ngs'][_0x2db612(0x3f5)](_0x66ae08[_0x2db612(0x5ec)]+_0x1a10d2[_0x2db612(0x8dd)+'ncesR'+_0x2db612(0x3ec)+'ed']['join'](',\x20')):_0x475e5f=_0x11edb9),_0x1a10d2;}function _0x1b72e3(_0x553f78){var _0x478e1e=_0x4a04dc;console[_0x478e1e(0x60d)](_0x478e1e(0xac3)+'kura]'+_0x478e1e(0x675)+_0x478e1e(0x28e)+'\x20repo'+'rt',_0x66ae08['LmoTA'](_0x66ae08['KUxUU']+_0x28be14,_0x478e1e(0xa77)+'-weig'+'ht:70'+'0'),_0x553f78),console[_0x478e1e(0x60d)](_0x66ae08[_0x478e1e(0x827)](_0x66ae08['AXHOy'](_0x42cf5e,'\x0a')+JSON[_0x478e1e(0xa8c)+_0x478e1e(0x58f)](_0x553f78,null,0x328*0x4+-0xd*-0x56+0x1*-0x10fd)+'\x0a',_0x58e0c2)),_0x17e0e3=_0x553f78;try{_0x2296eb(_0x553f78);}catch(_0x11f4b4){}_0x577778(_0x478e1e(0x9af)+'t',{'report':_0x553f78});}function _0x5e0a97(){var _0x3d2e8f=_0x4a04dc;try{return _0x66ae08['cuPVR'](_0x187b50);}catch(_0x5b3a4d){return{'version':_0x4eebbe,'when':new Date()[_0x3d2e8f(0x92d)+_0x3d2e8f(0x6e6)+'g'](),'elapsedMs':_0x66ae08['panUp'](Date['now'](),_0x598176),'host':_0x2e0d56,'uwmk':!!(window[_0x3d2e8f(0x849)+'WebMo'+_0x3d2e8f(0x540)]&&window[_0x3d2e8f(0x849)+'WebMo'+'dkit']['Runti'+'me']),'il2CppContext':![],'arm':_0x18253c,'hooksTotal':_0x2c50f2[_0x3d2e8f(0x320)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':String(_0x5b3a4d&&_0x5b3a4d[_0x3d2e8f(0x3a0)+'ge']||_0x5b3a4d)};}}function _0x1e7278(){var _0x3d771e=_0x4a04dc,_0x3ef00e=-0x35c*-0x4+-0x14aa+0x39d*0x2;try{if('Gdvxs'!==_0x3d771e(0x6cc)){if(!_0x11c3a2)return;var _0x21ca9a=_0x1df87a[_0x3d771e(0x443)][_0x3d771e(0x1e0)+'ay']===_0x3d771e(0x8ff);_0x488769['style'][_0x3d771e(0x1e0)+'ay']=_0x21ca9a?'':_0x3d771e(0x8ff),_0x36467f(_0x3d771e(0x63e))[_0x3d771e(0x665)+_0x3d771e(0x889)+'t']=_0x21ca9a?'-':'+';}else _0x66ae08[_0x3d771e(0x6ff)](_0x16cf43);}catch(_0x1f6513){}try{_0x66ae08[_0x3d771e(0x943)](_0x1b7e74);}catch(_0x4f4084){}setInterval(_0x2be979,0xab*-0x15+-0x207*0x4+0xc7*0x21),_0x1b72e3(_0x66ae08['cuPVR'](_0x5e0a97)),function _0x441d66(){var _0x34d2a3=_0x3d771e;if(!_0x2c50f2['lengt'+'h'])try{_0x66ae08[_0x34d2a3(0x562)](_0x1f065d);}catch(_0x23eb74){}_0x3ef00e++,_0x1b72e3(_0x5e0a97());if(!_0x2c50f2[_0x34d2a3(0x320)+'h']&&_0x3ef00e<0x1d1c+-0x48b*0x1+-0x1765)setTimeout(_0x441d66,0x3*-0xbe4+-0xc*0x31f+0x28*0x206);else{if(!Object['keys'](_0x29a47e)['lengt'+'h']&&_0x3ef00e<-0x13*-0xa7+-0x24b9+-0x110*-0x18)_0x66ae08['pPfQB'](setTimeout,_0x441d66,0x85f+0x90e+0x17*-0x6b);else setTimeout(_0x441d66,-0xf2e+0x1*-0x74c+0x1b2a);}}();}if(document['body'])_0x1e7278();else document['addEv'+'entLi'+_0x4a04dc(0x825)+'r'](_0x66ae08[_0x4a04dc(0x6d5)],_0x1e7278,{'once':!![]});if(document['body'])try{_0x66ae08['rpfAc'](_0x480ba8);}catch(_0x57149b){}else document[_0x4a04dc(0x295)+_0x4a04dc(0x7ec)+'stene'+'r'](_0x4a04dc(0x240)+_0x4a04dc(0x463)+_0x4a04dc(0x535)+'d',function(){var _0x568ff6=_0x4a04dc;if(_0x66ae08['aqBki'](_0x66ae08[_0x568ff6(0x362)],'CrUKc'))try{_0x480ba8();}catch(_0x3ca841){}else return _0x313a5d['on'];},{'once':!![]});})()));function _0x32ef(_0x1c8100,_0x3bb6e4){_0x1c8100=_0x1c8100-(0x1*0x190a+0x487*0x1+-0x1cb3*0x1);var _0x2b6df2=_0x54d1();var _0x1244d9=_0x2b6df2[_0x1c8100];if(_0x32ef['ugFWzE']===undefined){var _0x4f7259=function(_0xa8eefa){var _0x4ad7d5='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x114a30='',_0x3bb8e4='';for(var _0x62c59f=-0x11b+0x1947+0xdd*-0x1c,_0x5a1077,_0xbe7394,_0x2fda60=0x1*0x1b78+0x1a11*0x1+0xab5*-0x5;_0xbe7394=_0xa8eefa['charAt'](_0x2fda60++);~_0xbe7394&&(_0x5a1077=_0x62c59f%(-0x8a4+-0x33*0x6f+0x1ec5)?_0x5a1077*(0x1ecd+-0x1*-0x1697+-0x3524)+_0xbe7394:_0xbe7394,_0x62c59f++%(-0x5*-0x335+-0x1b2b*-0x1+0x4*-0xacc))?_0x114a30+=String['fromCharCode'](-0x1f6c+-0x3b*0x30+0x2b7b*0x1&_0x5a1077>>(-(0x2295+0x1ad8+-0x6d3*0x9)*_0x62c59f&0x57*0x2f+0xe34+0xa0d*-0x3)):0x1d0a+0x174b+0x3455*-0x1){_0xbe7394=_0x4ad7d5['indexOf'](_0xbe7394);}for(var _0x4f03f5=0x399+-0xf84+0xbeb,_0x4d4c92=_0x114a30['length'];_0x4f03f5<_0x4d4c92;_0x4f03f5++){_0x3bb8e4+='%'+('00'+_0x114a30['charCodeAt'](_0x4f03f5)['toString'](0x1c*-0x20+-0x8de+-0xc6e*-0x1))['slice'](-(0x1aa9+-0xa6f+-0x1038));}return decodeURIComponent(_0x3bb8e4);};_0x32ef['ywbBcT']=_0x4f7259,_0x32ef['ceXXPA']={},_0x32ef['ugFWzE']=!![];}var _0x53e125=_0x2b6df2[-0x7ae+0x2551*-0x1+0x2cff],_0x52c98d=_0x1c8100+_0x53e125,_0x83e0d3=_0x32ef['ceXXPA'][_0x52c98d];return!_0x83e0d3?(_0x1244d9=_0x32ef['ywbBcT'](_0x1244d9),_0x32ef['ceXXPA'][_0x52c98d]=_0x1244d9):_0x1244d9=_0x83e0d3,_0x1244d9;}function _0x54d1(){var _0x22e681=['vMjsAvC','BMnLCW','nJq3o2q','Cg92wgW','yxmGzMK','u0DNu0q','yxv0BZS','qxrbCM0','C2DZCfi','thPrt0u','iJ5dB3a','AwqTDgu','E2zVBNq','veDRD0e','ywLSzwq','Afbhru0','CcbHBMq','oJi2ChG','uej3rxi','B3H3r2G','otbWEdS','yxmGBM8','mdT9','DgnOzxm','ENLZy3u','C2nYAxa','mtqZlde','ENz2s0q','CMq7zM8','D2fPDgK','DgfYz2u','CLDYtMS','EwXLpsi','AMnfEum','x3j1BNq','CeLOseS','idaGyxu','ihjNyMe','DMzvzfe','m3b4o2y','CMeTzxm','uLz1uMm','Bg5Au3q','qvHit3K','ntbWEcW','tKrrvNy','DxDTAYa','o2zVBNq','zhr6Duy','r1HnExK','oImXnta','z2LUigC','AdO2mNa','yxjTzwq','ys1ZA2K','lM1Ulwm','m3b4o3C','EdTNyxa','BgfZlg0','uxjNs2m','suDoBg4','teHvs28','y2TNCM8','AvrnDvG','qvzVywu','ywrKAw4','AgvHBhq','s1v4vvu','C3rYAw4','CMfWoNC','zxjHia','ALnyEfy','ztT0CMe','yw1L','yMfS','B2XIzwq','B25JBgK','ChG7y3u','y3rZimk3','AguGCMe','uffsvwy','zxi7Dxm','C2L6zq','yvrmtwy','BeTZDhi','BNTIywm','zYaVigO','ntuSmJu','BNqTzMe','CI1LDMu','lM1UlwW','oxb4ide','yxGTD2K','tejyEK4','oMnVBhu','AxPvEeK','msiGC3q','DenAteS','A2v5qxq','oYi+u24','Ce5mAgC','DKrVDwi','y3vqvLi','Ahblse4','B25ZB2W','zxPzu3u','yxjHBMm','BgW6Aw4','DxjPBMC','EhfTv1y','t1HYBge','suTYDgK','yM9VBgu','Bwv2A3u','zwzKEuq','mxW4Fdy','tMnrAvG','Ds1JC3m','rJGGlYa','t215zfK','ic0Gy2e','phbHDgG','zw1VCNK','jwnBC2e','z3DPCw0','wxHSywi','v1rHyuS','sxrqELa','ANvZDgK','mJeSmti','icbVzMy','zxrsAwC','C3fYDa','zxjZyc4','C2v0uhi','yxK6zMW','ifrOzsa','zwqGyNu','EY13zwi','sNrpEwW','EhbVCNq','DcbKyxq','DMLZDwe','jtTIywm','mZGSmJq','ugXMzwu','zwf0zva','Aw4TD2K','zvn0EwW','CIiGDhK','Bgv4lxC','lwXLzNq','lwnVChK','lNnRlxi','CNmGyxi','zxCGy2e','iIbMAwW','t3PJs0S','ufKGve8','nIKSAw4','Et8Pica','ohW2Fdu','yxmSBw8','Cu9HvMi','y29UDhi','AxnWBge','zxjLzca','lJmPo2q','Bgv4oJe','rKrds2i','r05yzLC','u2vZC2K','Dw1WAw4','igvUDhi','zcbKAwe','v2fYyum','ztOXm3a','rNPutuK','wuHHAvq','ELHSquW','o2DHCdO','B1LzrwO','ywnLlem','vKHgwgO','ktTIB3G','BM8Gtw8','rxHWB3i','ztT3Awq','CM9Rzs0','Esb0Exa','B3Pivu4','zunhrw4','D2L0y2G','y2uSihm','phnWyw4','lxjLCgu','y1zczKC','o2fSAwC','C0rfDuu','nZu0mJuYvK9fyMLk','BM93','zgLMzMu','zvbSDwC','igvHy2G','ihbHz2u','D2zMtKC','mcaWida','Dxm6nNa','igq9iK0','svnYywm','AMPsy2G','AxrOie0','vw9Nzva','yxnZtMe','AxvZoJC','BNHdB2S','yxnsD2u','C2fUCY0','yxbWBhK','yMfY','Efzdshy','A2v5','DhLxzwi','Dg9tDhi','BNqTC2K','zxiTC2u','EhbRq04','zgvZy3S','yhbSyxK','BwvHBNm','mJKWChG','yMvQEMe','zNDQzfy','rKjUshq','yxjNAw4','qMnhBgK','y2uTAxq','ChG7Fq','zfDvC0S','DgPIB3m','psjJB2W','rg1WBMG','CIiGC3q','BfHnBgS','EvjVD3m','BgLNBG','yMn0rxm','mNb4o3O','sNb6CK0','t1zOzNC','uMXMDgS','kde4ChG','Axr5oI4','icaZlIa','Cgu9iNi','rKX4ELa','lwL0zw0','AwnOlJW','ywXSzwq','vMXnALy','weXNr2W','zhHZz3u','Dw5KoNq','D1Pqzhm','icaHia','CxfAr0C','igLZihi','AefAsum','t3Dnqu0','BM90ig0','ysGYntu','wev4Ae8','wMzeB1e','ig9Uia','oxWXm3W','yM9Yzgu','yY1IzxO','EKvKvNu','BMfzvLa','qNjHy2S','idqGnc4','CNvUDgK','AwX0zxi','zM9YBq','ChG7iJ4','oJCWmdS','ztOXnha','CgvKigi','t1vJANm','r2zXBgq','Dg9WoJe','D2f0y2G','zMzMoW','Ag90CYa','Dc1ZAxO','yxbWzxi','D1Pnyw0','Ee9gqui','yxjT','C3nPBMC','oInMn2u','ms41ihu','B054rxC','C0fhDvG','ytK5o20','s3rgCuW','zMXVDZO','w2rHDge','ndzWEdS','Eevgrvu','yMrjBM0','igfUzca','EwXPsKq','uhnWD1m','Bwv0ywq','BujnwKK','t295C0W','v2vItw8','yxbWzwe','yw4+','zwq6ia','BMnLC1i','BNrLCJS','A3vYyv0','mtiXnZa3mKLprgf5AW','i2zMnMi','yxjKlxq','x19ZywS','C2fRDxi','uuf5C2e','mYWXnZC','DMvYE2m','CMqTDgK','wufUswW','qvbvoca','zw5HyMW','ENjpBeS','EfPsEfq','vKj0vu0','BhHOA0K','BwfUywC','uNL4EwO','B2jMsq','C2v0sw4','rfnevLm','zM9HuKy','EcaXmNa','mhGZma','B2v5sKu','pgnPCMm','oYi+u3a','mNb4o20','Aw50zxi','EdTHBgK','B2XVCJO','uwfnt3O','ihDOAwW','Dw1UCZO','z1fzuxO','AxrLBxm','mdCSmtu','r2fTzsG','rJKGihm','C28GC3q','4Psa4Psaia','ldeWnYW','ywXPz24','zgf0zsG','yxj7D2K','zxi6mdS','B25PBNa','AguGBgK','Ag9VA1a','DwzHzhO','B1n3B2i','ohb4o2i','zMLYzsa','tKHgC0e','wM5uDha','Dxm6nta','lwe9iMy','mhG1oa','vhr0s2W','zcbYz2i','BMv2zxi','C3mGmhG','C25HCa','lIbeAxm','Cg9YDge','EKT2C3O','rLbty28','B2fYza','uwXiBfG','B3vUzci','EvDHqMq','ywjLBhS','ktTJB2W','Cg9Zqxq','BgLKzxi','zsbTAw4','lNjLC28','rhnZzMm','q2XPCgi','zw50lwm','vwHZuKS','y2fTia','nNb4o3C','zKX1zhm','vwPtvw0','Dw5KiI8','r05Av0i','ywn0B3i','EwuU','ue9wzee','De1hywe','DfDPzhq','zMLSBfq','AfvZDxy','lxjHzgK','tgLAueS','Bs11AsW','4OcuigzYyq','DcaOC28','BhqGC2K','nZCSlJu','B2nXs2i','lwrPCMu','yM94lxm','A3mG','DcbPzd0','DxjHx3m','Dcb0Agu','B2jM','icaGDhK','CMfTzsa','q2Dxqxm','D192mG','B25LoYi','zwqU','zgLZCgW','zxH0','ihLLDa','yw1LihC','Awr0AdO','B2XZoJO','sKjPvw8','Bg9JywW','DLzwDLG','Bgu9iMq','Aw5WDxq','igjVDhm','DgvZDa','AM9PBG','EgvZlIa','BM5VDca','BNn0yw4','CZOXmha','DgXL','zM8Qksa','D2fZBvq','zgTQDgW','B3v0','nsWXndm','y0zOsuG','iNrLEhq','vu9kq24','o3DPzhq','BuTvAvG','z1vyA3C','AeTLu1C','BI13Awq','EtPIBg8','ExrLCW','BMnLigy','zxnWyxC','vgHLigC','BMnmC0e','zM92','uuXxA1q','zhvSzq','zhvXzg0','ldi1nsW','vKvYtK0','o21PBI0','AgfKB3C','Edjfna','rKrss0W','sKLRu20','y29SCW','s1vsqs0','ue1LvKe','CMv7zM8','BwLSEtO','ihjLy28','z092A1C','tLLPqwu','Bg9VA3m','rwLAtfK','ELP3t0S','ChG7D2K','mxb4idy','oMXPBMu','AfnJCMK','EcbYz2i','sKLAAvu','DxjHimk3','D29Yzc0','DxjJztO','DxqGEw8','wwjgs0G','CMvMAxG','EsbPBIa','lJq1ktS','DgzTy2i','iNDPzhq','ltiUnsa','AgLZiha','oIjjBNq','t1rMDgy','vvnYq2u','tvLlA1u','wfjVvgy','mhGXoa','ig9Ul28','ugfZDgu','ruTpsM8','zsbZDhi','AgfUzwq','CM9WywC','B206nNa','zfvXuM0','z0LoB2m','BgLUzvq','A2v5vhK','icaXlIa','re9nq28','iJeIig0','AgvHCca','A3nqDfe','CMfJDgu','AwzzCeG','ig9MzG','qK9vyvi','mhb4lgm','BNnfuMC','AgL0zs0','BgvY','igvHC2u','lJKYktS','zgvMAw4','yxjKlM8','lJKPo2i','B250lxm','CMeTC3C','zhrOoJi','rxHwuMW','DdOXmxa','DKDArhu','EKTNrwG','ig1PBJ0','B2SGAxm','B2fKzwq','Ad0ImIi','igHLyxa','lNnRlw0','CdPYB3u','t3P0ugS','zMXLEa','zNjVDw4','BgvYigG','idaGlYa','DgvYiJ4','mtC3lc4','sfnZtxa','B2zMC2u','C28GDgG','BNqXnG','lNnRlxm','t0DWve0','CI1YDw4','igvUzca','ywrKCMu','EKv2Dhu','BIbYzwW','BNrxAw4','sxDTEhy','idmWChG','zuL0zw0','nZCSlJq','ChbureW','EdTMBgu','sxLjzLO','B3nLCY4','twvfEeO','Dxm6n3a','BwvHBG','r2fTzq','igzYyw0','svPpy2u','zciVpG','mhGYma','CMvIDwK','twXXENq','tfPmAwq','tuHPtei','teXkB2C','zxKGAxm','zxaGDgG','s01yAue','zxiIlci','x19tquS','Dte2','CNrstfK','BfDHCNO','nxm0idi','z0PvBva','iMvZCci','yxa9iNi','BNrYB2W','Bg9YoNi','ywrKrxy','BwuGAw4','tKDgDgS','u05cuuG','BgX3yxi','ywDLigG','DMfS','BgvYkZa','BcXTAw4','qxHsAMq','AwDODdO','zJWVyNu','txbmq3m','C25HChm','rJKPpc8','zNKTy28','DMvKia','DgvYE2W','y3vYC28','rgLMzIa','yNL0zu8','idzWEca','BMnL','ig9Uy2u','o3rVCdO','mtjWEca','v1fcs2u','uMvSB2e','ihnOB3C','y0LUChu','zJfIo2i','r29sqxy','z2fTzq','ENfjAKq','C2STBge','mduPo30','y29WEq','oJrWEca','AtmY','nhb4ide','mhHLoa','BMrVDY4','z2frD3G','r1DKzeO','ChqGsvm','pgrPDIa','sfrnta','uw5qrhe','u2fRDxi','B3vYy2u','zen3ree','BhrLCJO','ALzIBxG','ihLLDca','zgf0zsa','y3qGzM8','ihDOAwm','mhHKna','AwWYq3a','sMDgy2W','wwfRAM4','D1Drq2K','DLzssNq','CMf6yNG','iIb3Awq','twHYseW','DenVBg8','tM9LDLK','B3bLBG','y2j6u2u','quWGqum','phn0CM8','wMPJAu4','vM5sEK0','lGOk','yMzxqKu','BgLNBI0','D0Xptwi','ihzPysa','B3rYB2W','y3rPB24','zxDbs3G','DdOXnha','Bg5et2S','se1Xse8','Dw5lB2u','zgTPDc4','icbTzw0','CgX1z2K','Bw47Fq','Be5cDMK','u2vSzwm','uMv3wMK','BMC6nha','BwuGBM8','Aw5Ly2e','lM1UlwG','AufTuwS','t1PkvvG','DgfIBgu','Fdf8n3W','DhLWzum','zJmY','nsWXmdC','zYbPBNq','mdbWEcW','CMvTB3y','B3zRCvC','BNqZmG','AxjZDca','thzJAvO','DgG6mdS','tg5wt1a','CMPTs2y','AvfJrwe','Bw91C2u','lKHfqva','EdTHy2m','DgfNtwe','vfb1vvO','lwHPBNq','s05cA00','lwjYzwe','DM9Pza','Awq9iNm','lM1Ulxq','v01Ay1G','Dde2','Aw1Lr2e','oYi+tM8','igLUC3q','q3H2ruy','Ewv0ic0','zK5bsuG','yNL0zxm','iJ5ZywS','vvjzyM0','wfjrD0K','nIa2Bde','BgvUz3q','CMvZB2W','BI5OB28','A1nZzLC','C3LUyW','khmPihq','EhfTAuG','C2STBwi','sefPC1a','BwHIr0S','BNmU','o2jVCMq','ChG7yMe','CMfUz2u','C3rHCNq','ig1HBMe','DMvYC2K','ChbLyxi','idqTnc4','Ec1ZAge','BM90zq','ifbpuLq','DxjJzq','q1Pjv0q','DgLHDgu','zZO2ChG','yxqSCMC','z2XVyMe','C21uExa','Ds1YB28','BMq6CMC','zw50rwW','zMLSBa','mxb4ihm','BeTZDeC','zxLL','rMDZswi','zsbPBNm','EdT9','tLbdx0m','pgj1Dhq','CMvUDca','DcbZCgu','B25Ligi','zw5LBxK','C2LU','cNbPDgm','Cwjtr04','mNb4o2G','rfDKrg0','DNHwr1C','igTPBMq','cLSGif0','mcbMAwu','CNqGEwu','kde1mcu','CKnVBg8','vuzHAg0','Dg9W','CxjfEuG','C2v0vwK','ztOXms4','v3jHCha','D3bNANy','DxnPyMW','Aw5Uzxi','wunsALi','pc9IpG','BNrezwy','Bw5pCgS','DNffv2G','AgfIBgu','D3jPDgu','s1zjtgm','Dg57ywW','EeHWELC','D3jHCha','iMjHy2S','B3jKzxi','BhKUieG','ztPUB24','zgf0ys0','CMqTAgu','DdmY','u2HHCNa','ywLSywi','yMfJA2C','DwLSzci','yZfKo2m','Aw5N4OcM','pt09','oMLUC2u','mcuGBM8','nhW5Fdm','idfWEca','uvDVzfO','ign5psi','psjWywq','BgLUzvC','v1jgBKK','Bgu7zMK','CMuGAwC','lc45kq','ChrLza','BIG1mNy','zw5LBwK','AxPLoJe','y1nnuNy','psjZDZi','twnrCM8','BMC+','m3WYFdq','u2vLBG','pgnHBNy','zwy1o2i','rxHlCxG','pc9ZCge','BdPUB24','mtTJB2W','BJ8PoIa','whjSA2m','psjTBI0','rhznvMS','xtO6ywy','EdTWywq','o3rYyw4','yM90CW','CM9ZCY0','BwvZC2e','DgfN','Bw9YEvq','r3vdyLm','Bw4Ty28','FdeYFde','zxG7zMW','CwLsAwW','rMHkzgK','ywnPDhK','zJzIowq','C3CYlwG','wNPir0y','lJe4ktS','sKLcCwW','CMvMCW','igLZigy','DMvK','C3bSyxK','A2vKpsi','yxrnCW','Dw50','BJOWo3a','mhG1yW','oM5VBMu','AgLSzsa','DhK6lJq','BNrPyxq','CgfKrw4','AgLUDa','zgf0yq','y2fTzxi','zMXVyxq','CenVBNq','AwXKlca','Bw4TDg8','yxr0zw0','mhW0FdC','sxfnz1y','Cwn0B0m','ndySmJm','qLzkz0i','ns00idC','ufzlzM0','lwH1zhS','Ec8XlJq','B3vWig8','zxmGB2y','zenOAwW','zxnZywC','sujqvui','yLvAA1a','B3vUzdO','BI1PDgu','ohb4ide','Eer4EK4','wwXJCK4','zxfysNO','zsDZig8','B2jMqG','uKfqueu','z24TAxq','mhb4oW','igDHBwu','DhLSzt0','C2STBwq','DMC+','BxbSyxq','iM5VBMu','v2LKDgG','s0fQEMq','igLUlwy','qMzrD1G','z2v0sxq','DxjHvge','tNj6wwy','zxbSywm','Awq7z3i','t0Dyuwu','ihvPlw0','BMCGzM8','B2f0mZi','uwHHwNa','odbWEdS','zhjVCc0','ChvZAa','BgLKihi','tw9KDwW','lNnRlwi','nsK7Dhi','o2jVDhq','ig1VDMu','vtGGAxm','A1HdBeG','AgvHCei','zxrmzwy','C2v0ida','z3zfEgW','z25KDw0','o3bHzgq','BMTvEvK','nYWUmty','D3jVBMC','yuzYB20','BgfZDeu','y29TyMe','BM9ZCge','BwvTyMu','DwzzrLq','BNrLEhq','yM94zxm','BML0Awe','Aw5PDgu','iJ5gosa','v0fswI0','yxqG','AwqGzg8','yMvNAw4','ys1IB3G','uLmG','DgeTyt0','ksbVCIa','CNnVCJO','lxGIihm','t0jytfq','swznCgW','BhvTBJS','AxrPB24','rxzNrfi','BMfNzxi','tKTTsNq','pc9ZBwe','i2y3zwu','n3b4o3a','iZDLzta','Dw5Kzwy','Dw5KoNi','B246zMK','qurWs2S','uhLeq3e','DMLZAwi','surfige','ysbNyw0','Ehf0Ag8','CMfUihK','zhmGWRCG','l3nWyw4','ys1Tzw4','tMv0D28','DxnLtg8','txHYt3K','yMfYzsa','DxHbD2i','B2zzsgO','uLjQz1u','lY0WlJu','zYbMywK','AxjLuhi','Dxr0B24','lGOkswy','rgfiu0u','qvvPyLG','vuXNr3m','C3r5Bgu','ktSTD2u','D2fSA2K','AgLKzgu','ihbHDgm','sg9VA3m','igfYztO','o29Wywm','z3zVwMC','yNjLywS','sevbufu','DgHLigC','iZHKn2e','y2vKigi','DwjrwgG','msiGDMe','CYbHy3i','uMnYD08','BNrZoM4','z0fJDhq','CMfUC3a','C3CYlxm','yNvPBhq','DxbKyxq','x19hzw4','zxPdC08','rMn4Cu8','ntuSmtq','ugDJAgW','vvDnsY4','C2STy2e','zxqUia','BNrLBNq','q29WEsa','C01kwKy','lcbZDgu','CeHovwq','qM90Aca','ELrWA3C','CMvKihK','mtiGmJe','Ag90ig4','zgL2','zw5Jzsa','BNq7y28','CgfJAxq','ltqTnY4','z2v0rMW','rLf3tMe','Bw4TCge','o2nVBg8','BwfUEq','BI1ZCge','tKjSzNy','C29SDMu','zM9UDc0','wfrSve4','mcaWige','vgfTtNq','Eu9oANC','BhvLica','zMXvD0K','Bw92zvq','zwrnCW','CMv0Dxi','mhGYoa','y3rOCMu','Chzxquq','CNqGihq','CdO0ChG','ztT9','ksbZyxq','igjSB2m','B3n0Awm','rvveu2q','Bg93oMe','tM8GugG','pc9KAxy','E2zSzxG','Cg9ZAxq','DgLHBh0','B3CGkey','lc40ktS','CZ0NC2S','A3mUBgu','u3HNtKu','zuf0rMK','BwvhtxK','zNjVBsa','BMqIihm','ExHNBMK','reDKv3K','DhvAtw8','ihvUyxy','vNDJy2q','D0HQyM4','Dw1Uo2C','AxqTC2m','Dc4kcLq','BwTvBgy','ywj7zgK','z0zbvuG','ChGGmZa','AgvYAxq','DJiTy3m','BuLWD3G','B3rVBK4','BuzVrMm','Dg9WoI0','idrWEca','lNnRlwG','yxnZAwy','zerKC3q','wMfwDxO','y2fWDhu','z2vY','BM9UztS','zw5NDgG','uNvUDgK','C2vdCuC','z2H0oJy','BNnPC3q','rhP5ELu','A2rhv1q','odG5mtmZBK1SsLH5','rMzyCNu','wg1Tuw4','thLVq3u','lxnOywq','igzPCNm','tLDREha','BwuGD2u','DgG6mJG','igfYBwK','zxi7zMW','tvfkywW','ywWGB24','B3jPz2K','icaGy28','Dgv4Dge','DeHptfi','EhL6','psjZywS','B3jRu3K','AwrLBNq','i2zMnMu','qMnfs2m','C0Lnzhm','quvUvwy','DgvHBq','AgvSBg8','B1nct2S','yxbZAg8','BMvS','DhLWzq','lwe9iG','z1bNzu0','y2fSlMq','otC0ntvrz2T0B1O','y2u7y28','wxPbBwe','D2LUzg8','DKjxCfm','ihjLCg8','nsaWlti','r0DWqKi','BIbtruu','pgLUChu','vvjbx1m','Ewr3BMi','u25HChm','sxzisei','D2vPz2G','sgvPz2G','yY0XlJu','C0nAzMO','Cxvkvw8','Ewf3','C2vYlxm','Aw50BYa','zxmGBM8','A2DYB3u','zxqSig8','B246B3a','Bd0Ii2y','DMvKpq','D012uMe','C3vI','ywz0zxi','Axr5','icdcTYaG','wKzOy3e','CMvJDgK','ys1ZDW','zvvWsLG','t1bjDKC','icSG','y29Z','DdOG','zMr2Cxa','C3bYAw4','igjVDgG','EMvzA1C','B2XLig4','DhPgywy','AfPrwKy','Bg9YoIm','khrOAxm','Exzfsuu','lxyYE2e','ChqRmhG','y0fQDeW','CML0o28','zw50','zwvKzwq','BM90igK','CM9SBgi','nZu7Bwe','nZq4mZy','iZjHmgy','BMfWC2G','vezvsxK','D3zArwq','nJTMB24','zxrVBG','oNbYzs0','zuPnv0O','igHVB2S','zhrOoJG','t0z0D3G','tMfTzq','zw1WDhK','y2u7','vKv4B1a','mJu1lc4','Cd0Imc4','AhvlvgW','i3nHA3u','Fdj8m3W','BNnWyxi','DxrsCKO','uunqv3m','tg9Hzgu','DcaWicG','BxPNAva','icb3CMK','Aw5NoJi','C2vLBNq','AxrSzsa','ChjLDMu','mJzWEdS','DtmY','vKf2Awe','zgTPDa','Axb0igK','vKvsu0K','ChG7zM8','DgvK','Ec1KAxi','mtaIihi','Axb0ige','z2jHkdi','C2STDMe','Cff0BKu','AwvK','zMfRzq','zfP0CwG','DxjHDgu','nZq4mJK','nc00lJu','B3bHy2K','suHmuhy','lxrPDgW','wuzRufO','A2vLCa','igL0ihm','igzVCIa','Dhj1zsi','DYW2mJa','EK1ACee','EvfptvK','Ag9VA3m','Dg9YqwW','zYbSB28','senTuKS','igLZig4','C3bSAxq','ywD3v3O','DdOXmha','yw55ihC','zKDZvNi','As1TB24','CwP2BLm','ChrY','CgL0y2G','q29UC28','reflu2q','BMCGyxq','qNLjza','uMfnsxK','CMvHzca','y1j1t2i','BfLnrvO','wgXvBe0','zKH4ueC','Dw1lv2K','Axr5ic4','zMfJDg8','AhvKlwm','pJiUmhG','z2v0q28','DLPfDNG','qxfMCxq','ztTZDhi','zMLSDgu','DMvhyw0','Be5YrfK','mteUnxa','ig9U','DYGWida','CZPUB24','lxDYyxa','CMnLoIa','yxrLigy','igL0igK','teX6yMC','Bfzst1y','CMvNAxm','v2PsugC','DhrVBJ4','AwvSzca','yuDxrLK','z2LMEq','zxzLBNq','CxvLCNK','ihbVC3q','AhjLzG','kgXVyMi','C3rVCfa','lYbZChi','BNvTyMu','DhrVBtO','nNW3Fdu','Cg9xB1a','C3rLCa','B3b7zgK','ChGPktS','rNbJsMm','BJPJB2W','mI45lJa','Cg9ZDe0','oMjSDxi','oJeYChG','BI5FCNu','t2zMC2u','svH4zvy','lNnRlxy','sMLouw8','ihDYAxq','EvnhEK4','EgLvDgi','zw50o2i','psiXnJa','AwvYkc4','lwfWCgu','zeHKALq','yMvS','BNPRAxq','lNnRlwW','sen1wvm','shjJq1i','yxbWzw4','C2STy3q','idGWChG','mtbWEdS','DMLLD0i','yKnny1a','Cwv2qwW','y0fwCva','BMfIBgu','y2vUDgu','DwfWu0e','DhLSzq','EsbMywK','zujWvfe','lc4WmJu','FdeWFdm','i2zMyJm','tgf4rwG','Agj1A2i','EwLctKu','B3i6i2y','Aw9UoMW','nxb4o30','z2fTzsa','qvr5sLG','zxi7iJ4','rgLHz24','uMvZB2W','Ag9VAW','o3bVAw4','otK7Bwe','u3z3sgq','zJu7yM8','pc9ZDhi','igHHy2S','y2GUC3K','lJuIihy','ywr1EfC','AwqGCMC','D2fYBG','y2fUDMe','Dcb3yxm','qM90','C3bHBG','C3CYlwi','zwfKEsa','oJe7BwK','zxG7z2e','AxvZoJK','qxnZzw0','DMzKt0S','iJ48l2q','yxzvEvO','Bgzit3C','Dwf0q1m','v2vvD3q','zhvYAw4','CJPYz2i','o2zSzxG','uxP3B3y','zMfPBgu','icaGica','zxr3B3i','idaGmJq','ywnRz3i','Bw4Ty2W','qxbWBgK','BJ0ICM8','n2e2ntG','Aw5ZDgu','sgDREMi','oJe3ChG','svnqCeG','CKnVBNq','Bw4TDgK','BLb2y3a','wNzcEMO','E3bVC2K','D0jJugS','ic4Znxm','C3rHDhu','BM8Gvxa','Cc1JDG','Ec8XlJm','zxrOAw4','AxnwruG','rviGvvC','Bg9N','Evjorfq','yKP5D1a','v0TUBNu','uMXxCvO','z25HDhu','zYbxzwi','yxmGAwq','BM9Yzwq','uNbqquG','ENPivMu','y2XPCgi','Bgu9iMm','u2vLBK0','mJq2ldi','BcbKAxm','nsiGC3q','y2uGyM8','nwmWidm','DgvYlwu','ic0GCNu','DfDbBwm','uLL0r1q','BgfIzwW','Aw5Lza','Dg9gAxG','t2fiDM4','BIaUC2S','mIWUocK','ic40nxm','EtPMBgu','DxjHtwu','BMfSrNu','EdTOzwK','yMfZzq','yxvSDa','DxzQA2i','B3nPDgK','txvSDgK','rK5euvi','sMPqy3a','DNjuuKC','lJuGms4','Cg9YDca','icaGia','B24GAwq','oJOTD2u','DMLLDZO','ocK7Fq','zM9Sza','EvrHCa','zwXHChm','B1r6tuO','u0TjteW','DgvZia','CMvKDwm','CMvMzxi','BYb3zsa','DgHLiha','Ate2','DvzrwNy','Dxm6mta','Dwj7zM8','igLKpsi','CgvJDhm','ENfAEvK','pgiGC3q','CKTLvuG','yZKIpNC','BhKGCg8','icbVyMO','AxHLzdS','AenrDLm','EuXSDNm','wYbHBMq','CgXPzxm','yMvSB3C','Bgu9iMi','ChGGmdS','EKX4zKC','C3DTALq','AeHJt3a','ifnxlva','CNvUCYa','vxbKyxq','nYWUnsK','ywqGzNi','nsWYntu','Dgv4Dem','BwvTB3i','otK7y3u','D0H3BNu','rKLoAwy','A094Bgq','EwHfsey','lxaSnta','ys1ZDY0','CMrLCI0','CJOWo2i','rJKGDhC','BMDL','zxLUs1i','EdTIB3i','lJv6iIa','ifnRAwW','ywXSvMu','oNjNyMe','ChnmwwO','v19F','ywrPDxm','A3mGD2G','CgfYzw4','ie9o','wMPsuvG','D2fZBu0','Bgu9iM0','ihrOAw4','Bw9uA2e','BMqGBM8','icb5yxC','zKXVzem','yw1PBMC','mJu1lde','C2XPy2u','zvPAwgm','zNjHBwu','qMTrueS','s0r1zui','iJiIihm','A1b4BNG','yw5Nzsi','DcbPBMO','DxnLCI0','BMvJyxa','EdSIpNy','lsbvBMK','mwzYksK','y0XMtw0','yxrHBJi','Cg9PBNq','icbMywm','o21HCMC','ihn0EwW','yxGTAgu','zt0Iy28','Eu51yLC','ig9IAMu','zsGP','B3G9iJa','zvjLy3q','yxbP','zwn0ihC','ldiZocW','yw5KigG','idyWCYa','zw51','C29psva','AxmGyNu','zhrO','ChG7CMK','B2nXDhm','BgLZDa','B2zMihq','CIb0Agu','CMfKAxu','EKHlt1C','ie1ciea','Eg5MtKS','CMrLCJO','B3zLCMy','ig9Mihy','B25NE2m','iI8+pc8','AxvZoJe','Dgf5CYa','y29SB3i','iJ5VCgu','CJPWB2K','u05Ltem','CI1Yywq','Aw5MBW','zciGC3q','CKnVDw4','z2v0vwK','y1f2B2C','Fdj8mq','Aw50lxC','y3nZvgu','zxHWB3i','zLjeweK','Ewf3t2y','r2r2Ehm','wMzlAvm','tgz6zK8','ieaG','C3aTy3y','Bcb1Cgq','B2jMrG','tJWVyNu','mtu3lc4','vKXJtei','DdPUB24','ywrYreO','kZb4mJK','AgL0CW','AguGC2K','DwnPCxy','v2fSAYa','CfHNv3O','yt0IC3q','DxrVo2i','B3r7ywW','A2uTBgK','zxnW','sxbvrLO','ysbtA2K','z2H0oJi','u3rYAw4','CMuGkhi','mcaXChG','rxbQEuu','q2fTzxi','vuLJrMS','qvDPwLe','rfbzCeu','zwn0Aw8','lwfSAwC','zNbZ','oJnWEdS','zxiTCMe','wuf3u0u','Awr0AcK','zw1LBNq','B2f0nJq','y2HXue4','C2vSzwm','C291CMm','CMvHzhm','DMvYEsa','r3DWAwG','C2zVCM0','A2v5zg8','vMXAy0S','DhjPyNu','ywn0','BwLUkdu','q3DluNG','ohb4o2G','DwvxCMe','ig9Mia','BMTLEsa','EgvND1e','C3rYB24','BK5Jwfq','Bwf4psi','A2v5CW','BgfZDem','C29SAwq','Dg9Nz2W','yM90q28','zwz0oMe','BMCUcG','ENnhvNK','Cg9Z','Bwvnyw4','AgLSza','ihrVCc0','iokaLcbUBW','CMvHy2G','t3vbuMW','y2XVC2u','CM9Wlwy','CMvMDxm','Fdj8mxW','v29uvNu','uKP3uwW','lxnWywm','uMvJDa','yKvSsvi','B3i6Cg8','C3rYB2S','x2DHBwu','vgfTCgu','mNb4o2i','igHLEd0','sNvUreq','ldi5lc4','t01puhK','C2fUzq','B3nWywm','BcbHz2e','B2jIEsa','ktTWB2K','C29SDxq','Cgv0ywW','z2H0oJm','uuTYCLu','r2r5sfa','FdD8nhW','Awr0Aa','teLwrsa','veHJD2e','lM1Ulxa','DgvYzwq','zxHty3i','y3qOCYK','zhrOoJu','ihnRAwW','DwKTBw8','CYb3zxi','sfvyAxK','zYb3Agu','zw1Pzxm','q29WAwu','A2LUza','BgvKoIa','D1vYsKW','oNrYyw4','ztPWCMu','zuvSzw0','nxb4o2i','v0HZCLy','lsa0oha','tMnSD3a','zwqGysa','Aw1JsMG','BM8Gseu','zwz0oJe','yw5Jzsa','s0rkA1u','CgHVDg8','rvnqigi','zvbYB3a','yw5ZCge','C3zNpG','AxmGD2G','yMX5lMK','mJu1ldi','CKDgDfC','Dw5QDhq','ve1Myuy','ihvUAxq','wKXcseW','B25VC3a','ChG7yM8','D3jHCdS','ntTWB2K','BxjdzKC','ihnPz24','yZK7BwK','CdOXmha','s0zpEhe','yxjTAw4','Eg1ZBeu','ywXJkde','CNj7y28','CKXPC3q','icbOB28','phnTywW','yxrPB24','yxK6z3i','i2zMzdq','BLzPzxC','yNvPBgq','C3vYDMu','DxjH','BwuUy3i','AwDUlwK','B3r0B20','mxWWFdq','DhjHBNm','B21Tyw4','ic0+ia','r2HiEM8','q21cv3i','BLjrtgm','zwXLy3q','B2TZihi','zZOXmha','Ag9ZDa','Bwf4lxC','CgfYyw0','nYWUocK','zxj7y28','Ag9VA0y','tM8GCMu','rMLLBgq','igDSB2i','ywiUywm','Aw5KzxG','C2STC2W','lMrSBa','ignSyxm','mhWXFdi','ChLSuKW','vujLsKS','oJyYDMG','B1f0Egm','CMf3','CY1VCMK','DgfSE3a','z0LhwKG','DJiTDge','vMHirfy','Exr6y2S','mNW0Fdm','zwPZsxu','D2LKDgG','vgnQufO','lIbozwu','mhG3yW','u0reAfu','Au5kswC','zfPpt3C','DhfjvfK','Cu50Ew8','B3vUzcW','zvn0CMu','sMjMuLi','BNrPBwu','B25Nig8','ndmSmtC','AhDVEMO','y2XPzw4','zKPmB1u','oc00lJu','B3bLCNq','uu5yr3C','yw5LBca','igfYzsa','oJaGmca','ihbHBMu','CJTZDhi','D2fYBMK','ugHVDg8','iJ54pc8','C3LUy3m','tefzrvi','AwzLig8','idi0iJ4','DgvTCZO','zwfJAge','nsWUmdi','rg9OzuS','r3jruMm','B3j5','mJqYlc4','Fdf8nhW','C2vSzwe','ChbHze4','iIbZDhK','psjIywm','mIiGC3q','iNnUyxa','tNL0sgi','yxm+','y29UDgu','z0rKEfK','DwDPu0O','C2vUDca','EgD3v04','lwjVDhq','su5ZAge','AuDszui','ys5ZA2K','seTOv20','DYbLEha','C3bLzwq','wNb4tMO','yMXVy2S','iJ5tCgu','qvjyEeO','yMeOmJu','DcbTyxq','AgvHza','yw5LBhS','Aw5N','tw91C2u','ndGZnJq','zw50tgK','y2XHC3m','BNnPDgK','B3i6','lwHPzgq','nYWUmZu','tKvJENa','vfnvze0','yNL0zuW','BgrZlIa','AvbhwxG','Bwvhyw0','Bgv4lxm','D2LzzLi','A2LUzYa','igj5igu','lcbnzxq','DgL0Bgu','vvDnsYa','mdTMB24','q2fZtNa','owqIihm','DhDPy2u','y0r2BfO','zwz0ic4','BwfW','iNjVDw4','igj1Dca','C2nHBge','C2v0ica','CgXHEwu','AdO5nNa','l2nHBNy','zsbLDMu','zNvUy3q','D0rOB3m','ywjZ','zt0IyMe','y2HLy2S','Auz1zfG','EtPUB24','whzcA3q','i2jKytK','CML0Dgu','psiXmIi','zxG6mJe','EdTVDMu','lxnUyxa','owm5o20','A2v5q28','oInMnMu','Dw5PDhK','uNzvDfe','AMzQC1O','zwvMntS','ug9ZAxq','BgvMDdO','C3rLBMu','zhmGB24','zK93Bgi','EuXMqMe','ohWXmq','v2vHCg8','tLnRsey','CNn4qMu','cKLUC2u','DY5vBMK','z1Huyxi','C2HHzg8','zsb1C2u','CgfUzwW','lde1nYW','AxrJAa','v1jAt0q','wMPOD3C','ihn0yxK','vgv4Da','vuzqBfa','C2v0rMW','zeDKve0','zwv2t1O','ifvjiIW','yMvkueS','zMzZzxq','yxjN','Aw50Aw4','BgfZDfC','ugf0Aa','zgLUzZO','BY1MAwW','ig9Yihq','nNb4o2G','z2fWoJG','vw5PDhK','Aw1HCcW','AhvK','z1Ptyu8','zxnWia','zfDcELm','zxi7D2K','nNb4o2i','BgvYige','CYXTB24','yxbWBgK','ieeGAg8','CMvSyxK','CgfKzgK','CM9VDa','yMTPDc0','yMX5lum','rxLL','zw5fshu','mNb4icm','BxbLzLe','Aw1Lsxm','vgjst3K','CLbqr20','ihnVBgK','s3jwyNe','Bw4TDge','ignVCgK','r0DFr2e','Bgf0zvK','C3bHCMu','ywn0Axy','lL9Nyw0','Fdb8mG','DNbxrNy','Aw9UoMy','Ahq6nZa','yM9KEq','CgriD1G','AhfUAKe','s1b5req','zxnVBhy','Ag92zxi','BJOG','y2fWC3u','y3zlthu','DgHLigW','Bxm6y2u','BLjVzwO','y0TuBNO','m3W1','Ag90','CNmG','EeDwBwG','CKTktMO','DgLVBJO','mhGXmum','EsbHigq','zxjYB3i','zgf0yxm','v0PQtxC','sezdrKi','mcbYz2i','DxjLzca','B250zw4','Dw5UAw4','vhDnExy','igL0ige','ihbHC3m','icbJyw0','DhjVA2u','BLj1BNq','BK5LDhC','zxi7zM8','qxrgAxi','u2TSy2m','ChG7B3a','z2v0sw4','AdOWo30','qMfOuxC','ywjSzwq','ChGGC28','u0TAzhi','AwXLzcW','phn2zYa','ywnUwfe','BMD5BuG','CMLNAhq','DcaWida','mIWYosW','CMDetNy','r0zmtNu','B206mJq','DKver1e','qxzXAwm','zwDPC3q','Bg9Hzhm','CM91BMq','y2LAsK4','oImYyta','oIm4zdC','mNb4idC','mhW5Fdy','thLMqvm','CIb5B3u','tvjyuuO','yw5NzxS','Aw1HDgK','zJDLzwy','ChbLCIa','yxjKlxi','BM8TBwu','BMD0AcW','twj0qwC','zg93','lwvZCc0','DMvYE2y','C28GAg8','CwT3tva','AgvPz2G','zMvLDa','wKT5z1K','B0fLzu4','mtrWEdS','A3rRv28','Dg87iJ4','BhvLpsi','C2L6ztO','wxDHq2C','C3CYlwy','B3a6mti','A09yz2e','tLvXwgS','EdOYmtq','i2zMzJa','AwzYyw0','B3L4tLK','vuXHEfC','yxjLBNq','zIb0Agu','BMfTzq','B29M','nsWUmdu','BgvJDdO','B25TB3u','ucbVBJW','Ce9cCuK','vg90ywW','Aw5ZDge','pZWVC3a','A3TOzwK','z3jVDw4','yNvMzMu','yMjmtwm','zgvIDwC','oJm0ChG','kdiYChG','v0flrNG','B24Gzge','D0PsCw4','B25Lige','uujfBvi','CNjVCG','vufNEg8','owqPida','Fdn8mG','uLHvCg0','sMznEg4','y0Dpzg0','zxnJ','tg9VAW','mhHKma','sfveigq','C2STyNq','uMvMDxm','B3qGD2K','ntuSlJi','idaGmca','svjAtxG','Bg1lChu','C3rHBMm','zgvYoJe','BM9Uzq','DdTIB3i','mdaWo3u','B3vUDa','Ag9ZDg4','Chr1CMu','Bwf4','oMf1Dg8','z2fTzvm','AY13B3i','DMLLDW','mJbWEca','lc4WnsK','v1L5suq','yMXLig4','CM9SBgu','B3DUkq','EfHUt0W','nsb1As0','BwLxzxK','u3bLzwq','Bg9HDhm','mca0ChG','ndjiCMPJyMC','ie9IC2m','BM8Gzw4','zg9JDw0','zxi7z2e','BNrLCI0','A1PMs1O','q291BNq','B2DVlxm','iIbZDgu','DeHLAwC','i3n3mI0','s1PAshq','y2f0','BhPsBxC','DMvYBg8','D2H5','BgW+','igzSB28','nhW1Fdi','ugTtyMO','CNvUBMK','Aw9U','Dg9ju08','zwqGlYa','tfflzg8','Dw5Kic4','ktSGBM8','CM93CW','zcbPCYa','nJe2ndiWseDssKXV','ys1Hpsi','D2vHsfi','DgLUzYa','zxzLCNK','oYi+','zxjHDgu','BwvUDc0','BYbHihq','nZyYmZC1ruDsthDc','t0SGt1y','ktT9','B2XPzca','igP1Bxa','Ahq6nJu','AgPiq3u','AhjnuM0','B3qGica','AuD3whO','CMDIysG','lxnWzwu','DgfYDdS','CgXPzxi','mtaWDMG','zNzIDLi','ELHKs3y','twDTqui','lJCYktS','wKPQu0S','o2jHy2S','iIbZDhi','tw9KA2K','igXPDMu','kdi1nsW','B206mxa','tNbgreC','rLvvv1m','oMzSzxG','oI40o30','oJHWEdS','A1n5BMm','yxiTz3i','kdiXlde','DhbeCe8','vuL4A00','zdP0CMe','vNjSBwC','y29Kzq','rgvouwS','CfPlsKe','ihnRAxa','lwLUzgu','BwLU','iZe1mgm','mhW2Fdq','txj1r1i','yKjTD3a','lJC1ktS','mda7y28','AxvZoJi','CYGXlJe','Ee5SEgG','BNq6Aw4','qNLNq0u','mNb4o3a','lde3nYW','oJeGmsa','tu5rseO','EwvZ','igXPA2u','zsbUB3q','mtjWEdS','ugXHEwu','DcbYzxa','B2TtCKy','twv3EK8','zwLNAhq','igrVy3u','ywi6Ag8','qxDqDeW','Axr0zwq','mtbWEca','ywLUAw4','Bgf5zxi','nsK7yM8','A3L2CvG','yJLKo2i','AwDUlwm','CMvK','AK5Ot28','nYWYmsW','ExDMsve','y2fSyYG','DgG6mJK','CMfWoYi','DMuGB2i','A3zYt2G','lJGYktS','pt09u0e','B246ywi','vKz4vMS','DcHHDxq','q01c','iZrMogy','ELjbuw8','C2LUz2W','Dg46Ag8','igSWpq','CMfTzs4','rw5HyMW','nJaWo20','CMvWBge','u3LLuwG','nduPoW','C2STBM8','CMeTCgu','EKXAEKu','zgfY','sgHIDwy','yxjJ','mxb4o2m','B2TLlwW','zKf4A1G','CMvWB3i','mcbVzIa','EdTMB24','zgvYoJa','ueXbwuu','mhG5oa','jsKGmta','qML2Due','svPbz04','A0LvBxu','idHWEdS','teDhDeu','t2zdqxK','uMfKyxi','m3W0Fda','mhGXma','BMCGB24','sw5Zzxi','sw5ZDge','DciGC3q','uwnRC2y','BhK6Aw4','uMvNAxm','uKziqMS','CwvOAxy','C3qGysa','lwnHCMq','AuX4uuy','yvnxD1y','BwuUCMu','yvb4uMO','r1jYuhi','yvPAsfe','Aw5KB3C','lxnPEMu','rvncwMy','BhzLr2e','AK56yMO','z2H0oJe','ww5wvwy','uvbcseu','AxnmB2m','Axq7Fq','zMLSBfm','tezYCva','EeLMCgO','DuTpC0y','vgHHDca','Aw50E2q','rviGD2K','n2vLzJu','BwuOkq','CMfUzg8','CfPOr2q','z0Hjt1O','sMPNEhG','t2zM','zwqGBM8','Aw1L','EvblBeW','Fdf8ma','uvfmBKu','CgvZia','zw1ZoMm','zwqGlsa','zMLYC3q','rw5LBwK','BgXxyxi','E29Wywm','C3qY','tfrpu1a','Dw5PDa','ocWYndi','lxDLyMS','BIbjtLm','zhKIihm','mJGPo30','y2XLyxi','Efr4tvy','mhb4oYi','B3rLE2y','vKvoyuG','CxLvugi','oJfWEca','C1Hmzuq','rvnqig0','yMLUzgK','ru5ept0','CMXHyMu','lxDLAwC','mZT9','B250lwy','reXlvMO','DxjHpc8','v2LNC1G','ihbHC3q','ywqGzMe','zcWGBM8','pc9WCMu','ihjLywm','sgvHBhq','BMDZ','l2j1Dhq','B2fYzca','zYbTyxi','igfWCgW','C3bHy2u','y21K','DMfSDwu','qM94zxm','AgvHCfu','CfDPzgS','AwrKzw4','sxzMwvK','y3jLyxq','otLWEdS','mJHWEdS','zxHLy0m','ktTIB3i','psiXlJu','w2fYAwe','zfLxDgO','Dg9Y','Dc5wywW','z2v0rwW','CJT3Awq','igzPzwW','wNLtuuW','DuH1AhK','zYdcTYa','zNGIihq','Axy+','rxLhBK4','Ec13Awq','A2n0DuG','nZiWntD1AKfXsgu','BNnLDca','ugTmuKm','lNnRlwm','ignVBNm','BMuGAg8','BNq4','rMXHzW','yNv0Dg8','ChL2vKe','mNm7Cg8','zgrPBMC','DgHLBG','sxP1shC','C2v0','Dgv4Dee','zwyYo2y','CI5KBgW'];_0x54d1=function(){return _0x22e681;};return _0x54d1();}
