// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.6.0
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

function _0x36a4(_0x70991c,_0x4b700b){_0x70991c=_0x70991c-(0x222d+-0x3*-0x9d+-0x2389);var _0x295ac6=_0x2002();var _0x11b704=_0x295ac6[_0x70991c];if(_0x36a4['QsJuIo']===undefined){var _0x3fb050=function(_0x1592cc){var _0x28e9be='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x27a79c='',_0x4088fd='';for(var _0x31a8be=-0xb7e+0x25fa+-0x1a7c,_0x218023,_0x2ec2db,_0x17e5f4=-0x1990+0x1b57*-0x1+-0x34e7*-0x1;_0x2ec2db=_0x1592cc['charAt'](_0x17e5f4++);~_0x2ec2db&&(_0x218023=_0x31a8be%(0x1*-0x85+0x1c01*0x1+-0xc*0x24a)?_0x218023*(0x48*-0x86+0xa23*-0x1+0x1*0x3013)+_0x2ec2db:_0x2ec2db,_0x31a8be++%(-0xf8d+-0xe*-0xd5+0x3eb))?_0x27a79c+=String['fromCharCode'](-0x21f1*0x1+0x1190+0x1160&_0x218023>>(-(-0xb41+0xddb*0x1+0x4*-0xa6)*_0x31a8be&-0x1c1a+0x16cf+-0x551*-0x1)):-0x911*-0x1+-0x1bea+0x12d9*0x1){_0x2ec2db=_0x28e9be['indexOf'](_0x2ec2db);}for(var _0x3a3bef=-0x2*0x1115+-0xf97+0x31c1,_0x15f4ee=_0x27a79c['length'];_0x3a3bef<_0x15f4ee;_0x3a3bef++){_0x4088fd+='%'+('00'+_0x27a79c['charCodeAt'](_0x3a3bef)['toString'](0x1*-0x266c+0x71*0x40+0xa3c))['slice'](-(-0x35*-0xa9+-0x1d2c+-0x5cf));}return decodeURIComponent(_0x4088fd);};_0x36a4['tmqfao']=_0x3fb050,_0x36a4['UUyORI']={},_0x36a4['QsJuIo']=!![];}var _0x2604a4=_0x295ac6[-0x209c+0x1af2+0x5aa],_0x5b05eb=_0x70991c+_0x2604a4,_0x502d9e=_0x36a4['UUyORI'][_0x5b05eb];return!_0x502d9e?(_0x11b704=_0x36a4['tmqfao'](_0x11b704),_0x36a4['UUyORI'][_0x5b05eb]=_0x11b704):_0x11b704=_0x502d9e,_0x11b704;}function _0x2002(){var _0xd7c16f=['igDSB2i','zgrPBMC','DePpDMq','uvrYEhG','wwrbB3O','A3mUBgu','z2LUigC','zwqGyNu','nhW3FdG','Ag9VA3m','zgvYoJe','sLnHwuy','B05JBMS','u3rYAw4','idaGyxu','ywLSzwq','yxmSBw8','zM5uBNy','ChGGC28','zYbZDxm','Aw94CMS','Bwv0ywq','CMfWoNC','yw1Ltwe','ywnRz3i','DgvYzwq','zNGIihq','vfnwwMS','BM9Uzq','lGOkswy','x3j1BNq','zw5HyMW','igfYBwK','wMjqB00','mhGYna','zfLuv2u','z05du04','DgfIBgu','igrVy3u','A2LUza','y29UDhi','wuLey1q','oYi+u3a','y2GGDgG','ys1Hpsi','DhLSzt0','BhvTBJS','zwqGDgG','C3rHCNq','y2fOr2y','vM9WAuS','i2zMogy','CMvJDgK','FdH8nxW','AxLfCgW','D0jkDNy','mhHLoa','mtr8nxW','BgnowfC','BhzpBNK','zwn0Aw4','AxHUzey','iJ5gosa','EwXLpsi','u3Lmq2q','o3DVCMq','nJeWu0zjCvzY','BvfhCfm','yw55ihC','r0HQy3C','EdTWywq','zsbYzw0','uNvUDgK','uMvHC28','CYbVCNa','Be9fDu8','z2fTzq','Dgv4Dem','igj1Dca','y29Uy2e','ywrKAw4','mNb4o2i','ihbHz2u','A2zfDfu','z2jHkdi','Ate2','t0vPs00','igLUC3q','CenVBNq','zwDPC3q','r3znqwW','CgX1z2K','x19ZywS','C3rYAw4','BwvUDc0','Au1Twg4','CMvWB3i','sNvrv2u','B2TZihi','Dcb3yxm','igXPA2u','ysbNyw0','ktTJB2W','zJmY','wunJrNO','ifnxlva','igDHBwu','B2jMqG','weTZCeu','vNLduLu','DKDmrhO','BfDHCNO','BuzUCuK','i2zMzdq','AgXKDKG','zM9YBq','DMvK','BNnPC3q','DJiTDge','Dw5UAw4','ywnLlem','DhDPy2u','pt09','Aw5Uzxi','B25ZB2W','zw50tgK','BwLLCYa','zMLSDgu','s0Tvrxm','wxvHzgi','r0H0u2O','oMf1Dg8','lwnVChK','zw50igK','mIiGC3q','yMeOmJu','yxbWBgK','EgDmB2e','B2jQzwm','EI51C2u','v1ncDLO','Bgv4lxC','zYbPBNq','B2zMC2u','y1rwC3a','Dvv4A2m','AgfUzwq','icbVyMO','zxnWyxC','EuLSquq','CNnVCJO','zIb0Agu','DMvYC2K','Bcb1Cgq','y2GUC3K','BgzfDe4','wNHeCKG','A2Hqy24','oJK5oxa','oInMn2u','yur5vee','BI5OB28','r2fTzq','yuv5CMC','quDntMm','khmPihq','ys9vv00','uhnUtKO','EcaXmNa','ihjNyMe','Dxm6nNa','mhGXoa','vwzAC0m','v19F','sLjztxy','D3jHCdS','v2vHCg8','zw50o2i','sezXrui','uKP0Eeu','u2HHCNa','quWGqum','ihn0EwW','r2zuEeG','ywXPz24','igXPDMu','lxrVz2C','zxKGAxm','A3POBxe','wvz4vgS','qK1ts1m','C29SDMu','CIiGDhK','wffZwgO','tuSGq08','C3rHDhu','CIb0Agu','A2L0lxu','ihnPBMm','BwTAthu','BNrxAw4','kdiXlde','AgvYAxq','yM5cDNm','zsbVyMO','BgzvwhC','C3bSAxq','s09UDve','sujjteG','yLHiDuy','zw5Jzsa','lIbeAxm','BMCGlYa','sw1Av3e','BIbjtLm','ueXbwuu','vK5SEu0','BgLpuwK','vvfnuKy','ihbVC3q','BNvTyMu','B2jMsq','iJeIig0','DhLru1u','surfige','tg9Hzgu','DLnhqvi','vhbiBKy','Dc5KBgW','zNvUy3q','BMqGBM8','B3vYy2u','BxL1Dwq','A2v5q28','Dte2','DgHPBMC','zg9JDw0','lxnWywm','vLzYBxG','oNjNyMe','yNL0zu8','icaO','EMrPrMm','yw1Ligy','zcbKAwe','B206mxa','iZDLzta','DMfSDwu','CMDIysG','iNnWiIa','zEkaPJWVCW','DxDTAYa','iJiIihm','yxnZAwy','igrHDge','uLD6tve','y2vKigi','CdO4ChG','Dg9ju08','BMD0AcW','zw50rwW','ihzPysa','ChGGlte','s0DWC2G','rgTZu3u','vtGGAxm','DgvZDa','BM8TBwu','B2f0nJq','pc9KAxy','t2ffweu','ywWGB24','q0TLAxC','EhL6','r0jTCLC','vw5PDhK','icaGia','zxH0','wNvgBvy','wgDVANO','vgHHDca','B29M','yMr1A0C','CgvYBw8','swnWyK4','yLfHBhm','A2v5','AguGD3i','ieaG','oJrWEca','DMvhyw0','C2v0','igfYzsa','B0v1Ahy','rLbty28','ihnPz24','ywjSzsa','zw5NDgG','AxvPzfi','BgXLzca','zYdcTYa','zsbLDMu','Cg9YDca','t1ztsNm','CKnVDw4','qxbWBgK','B0vwwwG','mcbVzIa','Cfvdyw0','shHNBgi','C3fAq20','zJu7yM8','mtqXmtq3tNHwCKfK','yZfKo2m','zwXLy3q','tM8GugG','qxrgAxi','C3vYDMu','DhjHBNm','BM90zq','u3bLzwq','EMzkvve','nNWZ','zg93','uMv2y28','CgfYzw4','yMX5lMK','vgvmt0e','B2jMrG','psjZDZi','B2XSzxi','BI1PDgu','oYi+ltW','zxfTBxC','CKj4tMW','CMuk','EKf1D1i','yuzYB20','yM9VBgu','zcb3yxm','AwvKige','zxr3B3i','veDdsK4','A1n5BMm','ifnRAwW','mNb4idG','r09ls2q','EwDUCxe','Dw50','mhGYoa','CgfUpG','ihnRAwW','Bg93oMG','4Ocuihr3BW','svLgwM0','nsWXndm','zgf0yxm','Fdr8ma','yw4+','ugv6BMG','t2zMC2u','C25HCa','ywWGBM8','DhLWzum','BgvJDdO','pc9WCMu','vg9KqNu','AePSCvy','y29SB3i','u0D6y3m','zwXVywq','A0rjr0q','BNrpEeK','ru9PsLK','DNP6DwW','BgvUz3q','EKzxr2K','CMfWoYi','B24GDgG','C25HChm','B2zyCKO','zsbUB3q','rKrIvhu','BwvHBG','D2fYBMK','nhW1Fda','zgTPDa','mNW0','zgf0zsG','Dg9YqwW','BhPWDhe','BM93','Dw5Kzwy','ywDHAw4','sgvHCca','AwXKlG','CMuGkhi','vgHLigC','v3jHCha','mhG5oa','lNjLC28','wvfdAfa','ExrLCW','zvbSDwC','tJWVyNu','zJfIo2i','tunMz0K','mxb4ihm','vvjbx1m','B250lxC','jwnBC2e','B3i6i2y','CMnLoIa','zxiTC2u','BwvTB3i','D1HTwe8','BM8GBgK','BgLKihi','C3bHy2u','CIb5B3u','Dde2','AeLVt3u','zenOAwW','BNrezwy','igzYyw0','zuvSzw0','yMXLig4','BhqGC2K','ntu2nJe3Dxznyujx','DdmY','BMCGyxq','BNrLCJS','yxGTD2K','rxLKsNa','q29WAwu','z2fTzsa','CMvIDwK','z2vYlIa','yMX5lum','zhftEvy','B25VC3a','yw5Jzsa','qM90','DxjJztO','BgvMDdO','ywrKCMu','Aw5gzLG','lcbUBYa','igHLyxa','BML0Awe','mtqZlde','ywXSzwq','m3WXFdi','ihDOAwW','DxjHpc8','DgzvtwG','lMrSBa','zdDHotK','C29SAwq','zNjHBwu','AxHLzdS','Aw5MBW','qu5pveG','z0rXy0W','v0fswI0','Ag90CYa','BIbPzNi','mhb4oYi','zcbPCYa','ksbVCIa','DNmGC24','A2DYB3u','vwHbvw4','q3rouuO','kgXVyMi','whbLy08','shPbwfa','Fdb8mtm','ruXwEfC','B3rVBK4','ChG7yM8','uenwrvK','Dw5PDhK','u0XgBLu','t3LeENq','twfRq04','DvrrEgy','v1f4s2K','BgqGAxm','ywXSvMu','zw4Gyw4','igvHy2G','tuvjzhe','oJfWEca','i2zMyJm','Ag9VA0y','BM8Gseu','mhb4idu','zxHPC3q','ChG7y3u','ihrOzsa','yxjTzwq','BgvY','wenVvhq','lwH1zhS','zYbZy3i','s2rUEMe','iIbZDhK','BwfYz2K','oYi+tM8','A2jizNy','BwuGlsa','icbOB28','ig5VDca','DKLpz2q','zfnvAuG','icbVzMy','zwvKig8','DfDcswC','BNrYB2W','BwfUEq','nYWUmZu','Cg9PBNq','iIbZDgu','lL9Nyw0','lxnUyxa','ic0+ia','B246y28','Agneqwi','ywDLCG','tLzpq3y','Aw5KB3C','zuf0rMK','igTPBMq','Dxm6mta','C3CYlxm','B3jKzxi','qvbvoca','CMrLCJO','BMnLCW','DtmY','D2fYBG','BMq6Dhi','BMfYqwW','zYbMB3i','yM9Yzgu','zxqSig8','rMLdywO','DxnPyMW','BgX3yxi','y21K','Bvrgy04','BM9UztS','wuvmCKu','lGOk','wKHNreG','CgL3weO','CgfKzgK','u2rksxy','v3fJs1y','Axr5','icbJyw0','mI42lJa','ANvdzuK','v2vItw8','AwDPBMe','BM90ig0','zciGC3q','vvr1sw8','i2y3zwu','z0HfD2y','C2vYlxm','zg5IrhK','CdO2ChG','yNvMzMu','vuzgzhm','EKT1ufK','y2uSihm','qMXAq0W','lJKYktS','lxDYyxa','CMvTB3y','v2nnCva','C2fRDxi','DhKGAw4','AwnLihC','zxnVBhy','DYW2mJa','y2fWDhu','zxiTCMe','BM9ZCge','DM5Zs28','B25JBgK','DhLxzwi','ig9MzG','zKDKu0K','Dw1qvLG','DfLds28','AgvHCfu','yNv3ENy','zxjYB3i','AwDODdO','vgfTCgu','Ag9Ksw4','mhGYma','z2v0q2W','y3rZimk3','BYb0Agu','igjSB2m','DgHLiha','ywrKrxy','CgvJDhm','DxjH','DYbNBg8','zcbYz2i','qxnZzw0','tgHRvfi','zvLOBvG','yxjNAw4','Bg9HDhm','DZiTyM8','icaGy28','pgrPDIa','mNb4o3O','vwjOEg8','mYWXnZC','AguGB2W','suD0vKm','B2vKDLC','yNv0Dg8','nZH2AdS','C291CMm','y0r4rMi','igfYztO','rviGD2K','mJeSmti','ChrY','zxi7Dxm','mhW2Fde','DMuGB2i','AuDLCLK','u3DryvG','AMLzALy','v3b3Ahq','CNjVCG','AxmGBM8','BePAquO','sevbufu','mJKWChG','tefzrvi','sLDACLe','ignOzwm','zM9Sza','C3rLBMu','t0nQz0W','zxG7zMW','rxHWB3i','BK1HBMe','vg50yxi','zw50','tLbdx0m','yuvZD2S','BNrPBca','AwrKzw4','A1vhwMO','Fdz8m3W','yNHbwuy','BM90ihi','CwL0sfG','lZeUndu','Ag9VAW','r2fTzsG','ue5RwKq','n3b4o3a','igL0ihm','C2vSzIa','w2rHDge','DgLUzYa','DxrXCeS','igSWpq','B3j0lGO','CMvMCW','lwjVDhq','zxmGB2y','qvnbz1O','BNrPyxq','tw9KA2K','DxjHx3m','ywn0Axy','mxWWFdm','lwHPzgq','CMzSB3C','Bw5hyuG','ihnVBgK','vfrhBNG','Bgf5oM4','yNL0zuW','zuL0zw0','ihvUyxy','icbTzw0','CNnJCMK','te1mwvG','yxrJAc4','iJ5VCgu','EuLisxy','zxj0Eq','tMz4wLe','uwL0BKu','yxjTAw4','Aw50zxi','Bgu9iMm','ignHChq','lg1VBM8','ywDLigG','kdi1nsW','zxGTzgK','ExDTt1i','y2XPCgi','DgfSBgK','C2L6zq','AdO5mNa','lYbQDw0','C3CYlwi','zw1LBNq','vxbKyxq','CxvxwvK','uMvtr3K','uwTTBLC','zgTPDc4','tKzYAxe','sgvHBhq','vNjwu0e','iZHKn2e','AgLKzgu','ihbHBMu','ywqU','ChvZAa','zxi7iJ4','y2fTia','vMfSDwu','su9bzgq','zMXLEc0','Fdj8m3W','vurADge','icaZlIa','C3LUyW','ywLUAw4','n2vLzJu','zwy1o2i','zxjLzca','yxbWzw4','rxvfuMC','s0PWu00','EhbVCNq','suPet1O','v1vksLm','zgvYlxi','Ewv0ic0','AxjLuhi','uNbPu1G','vernx0C','ldi5lc4','yMfS','u0TjteW','lKHfqva','ys1ZDW','AgvHBhq','B3bLBG','v3rKDge','oM5VBMu','zwqGBM8','B24GAwq','CMvMAxG','D3jPDgu','BLr5Cgu','Aw50iIa','uvrYruW','vK5TuKG','mIWYosW','psjWywq','ihbHDgm','C2fUzq','Dw1WAw4','yxrnCW','r2vUvfO','ruzXDvK','ig90Agu','EtPUB24','Aw5KzxG','CMvMzxi','BwuGAw4','tNLnsMK','Aw5Lza','B3nLCY4','suDbuxO','C3bYAw4','Ag9ZDa','qwzjzfe','igzHA2u','i2zMnMu','AxmGD2G','zMfhB0u','mJu1lde','DMvKpq','seLKuvi','C29Syxm','AwXLzcW','yLL5z3m','pgLUChu','yxbP','iJ5ZywS','EdTMBgu','nJeXntG0nxfOqwz6qq','B3vUzdO','yMvSB3C','shDHzKq','C2v0sxq','CgLotNC','B3PMD2O','mhb4o2y','ChG7Cge','igfYBwu','BJOWo3a','t0Hpuhy','zwvMntS','AcbMAwu','Ec1KAxi','nZq4mJK','A0PbuNm','zxj4vLe','otbWEdS','ywz0zxi','tIbIEsa','CgXHEwu','4OcuigzYyq','icaGica','sNPlBMu','DgvZia','yxbZAg8','pt09u0e','CNmGyxi','BwuGBM8','ywjZ','uMj5que','uMvNAxm','EsbPBIa','A2vKihu','CgfKrw4','CMvKihK','zuLbD2q','Dg9Nz2W','y2XWzvC','wMnVCwG','ExDcr3C','ihvPlw0','AxvZoJC','teTes04','Dg9tDhi','CMXHyMu','zgPHz0O','zM8Qksa','Dg9W','B3j5','v1vLquC','BhvLica','EhvTEKW','vKuGDG','zMfJDg8','reLkvKi','ChG7iJ4','CgLUzYa','sMrNC1q','A2LUzYa','ihjLCg8','BhzLr2e','n0vOA3vvBa','DMvYEsa','C2vUDca','DKH6wLK','wwThqLK','B2fYza','rvnqoIa','Esbku08','yxrHihi','B2DvDKi','ihjVDw4','y3vYC28','D3jHCdO','q291BNq','s1vsqs0','y3nZvgu','BMfSrNu','y2fTzxi','wLbsENC','Cw5VwNu','CwHxruG','CI1Yywq','igLKpsi','y29UDgu','z3vcB2q','AxjZDca','Dg9Y','x19hzw4','yKXHweG','ywrPDxm','s3n4CNy','ALzIreG','pJiUmhG','oYi+','DfbrwMq','zZOXmha','zgL1CZO','BhDHCNO','CYbLBMu','rwLuzva','DgHLigW','BMDZ','D2fZBvq','x19tquS','AgLZiha','zuryy3K','DdTIB3i','zMLYC3q','vNryDve','yxK6zMW','ve1mwu0','BerNCvK','zxnZywC','BhvNAw4','DgG6mJK','B2fcEvO','zxG6mJe','D2fSA2K','C28GDgG','vvDnsY4','Be1ABfK','zgf0zsa','z2fTzvm','DxjHtwu','y2vK','seTwAxy','EdOYmtq','D2HPDgu','ie9o','ihLLDca','A3vYyv0','C2nYAxa','BwvTyMu','ys1ZDY0','otu1odmWnhDNAwPhqW','ywX0','mcbMAwu','vMTUu1i','BMC6nha','yZKIpNC','Ec13Awq','zcWGBM8','BNq4','muz0wfLrCG','lxjHzgK','zNnSC0y','BIbtruu','Aw5N','Cuz5Dge','i3nHA3u','BMCGB24','mhb4ic0','r3zeALC','otK7y3u','oxb4ide','q2j5zvm','DhLWzq','DeHLywW','DhHLtem','zwqGB2y','Cfjwz1K','AgL0CW','EfjxzfK','ChG7','Ahq6nZa','Duf3shu','D3jVBMC','yNv0ig4','tvrvvvG','BvDWrvq','sw5ZDge','zwrnCW','yw1PBMC','BNq6Aw4','s3bdDuG','lwzPCNm','A0nAvu0','DxDTAW','zsDZig8','oNrYyw4','Evjer1m','mdTMB24','ic0Gy2e','zvb5AKe','C2v0rMW','icSG','Cg9ZAxq','Bxm6y2u','ELvusgG','CuHVtvC','q0zLELu','y29WEq','ufblAfq','ohb4ide','AgvHza','D0HvreO','lxDLAwC','rgLMzIa','zMfRzq','lcbnzxq','BNrLEhq','nZCSlJu','CxvLCNK','DhrVBJ4','mhGXna','z2LMEq','ntuSmtq','BwfUywC','vgv4Da','yM94lxm','Bgu9iMq','wu9lzMu','icHZB3u','AxnmB2m','yxjT','qvvxALe','A0XLt3m','BLzPzxC','BwLxrKG','tMfpDuK','A3zcufq','shD2quq','B2XVCJO','yxmGzMK','BgvYigG','zMfPBgu','nhWWFdi','CM9SBgu','pgj1Dhq','ig9Yihq','zNjVDw4','nduPo2i','Aw1WBge','C3bLzwq','quT0D2y','ig9IAMu','AxvZoJK','lxyYE2e','rgrNAfq','DMryuNe','zcdcTYa','BMqU','CKznsNa','ieeGAg8','qu5eihq','lsbvBMK','o2jHy2S','ig9Uy2u','CMuGy2W','zgrLBNK','yK10uLi','B1PQBuK','ktSGBM8','vKPjDKW','B25LoYi','C3mGmhG','AhPoDKC','A2fMBvy','sfveigq','Bg9N','m3WYFda','CJPWB2K','B3vUzcW','iokaLcbUBW','yt0IyMe','ExbLCW','Ae5TAMG','BgvYige','A2HMDee','y2fSlMq','EMXkz24','lde0mYW','lt4GDM8','C2v0vwK','DgfNtwe','ig1HBMe','tuXOCfG','BIbuyw0','y21HDwe','yxmGBM8','zKn0t1a','u1DzqKu','AtmY','o2jVCMq','BwfYA3m','Bw9YEvq','CMuG','zwqGEwu','BLj1BNq','mhGXma','twjKBwW','AvbvvM4','BgfZDeu','yxrLigy','zgjVBMW','A2v5qxq','AunkCKG','uM1huxK','ifbpuLq','Fdf8nhW','igHVB2S','AxrPywW','z2v0rMW','B3rYB2W','DdOG','zgjJs3m','BM8Gvxa','z29RBu0','uMvZB2W','CxvOC3i','t0Hvsw8','yxjKlxi','rwnqqLy','uhviwum','yKXcv1e','rNfcCgm','CM93CW','mtC3lc4','qKLbyLq','sujcquK','BK5LDhC','B3i6','zxjZ','Agv4','nsiGC3q','C2v0sw4','ChjLDMu','ndmSmtC','4Psa4Psaia','D3jHCha','zwHoCK0','v1H6wu0','zsbNyw0','BwuGD2u','igLUlwy','BNq7yM8','Ewv0lG','Aw9UoMy','zsGPlMu','mtrWEdS','zgLUzZO','C3rHBMm','o2fSAwC','Bg9dAge','EtPMBgu','Dc1ZAxO','n2e2ntG','v0DltK8','DxjPBMC','Aw9jwuS','qM90Aca','msiGC3q','BhH4vfO','B3vUDa','BgjQt1i','swv0uMS','i2jKytK','C2PKB2C','iJ48l2q','D3v6AfC','igfNCMu','BwLU','z2v0rwW','iZjHmgy','BcbHz2e','ze9btKi','qxrbCM0','ru5ept0','Fdr8mti','AMjbEvK','y3jLyxq','CMvKDwm','CMvKige','Bgu9iMi','wvj2Afe','CwXWyNq','tgXOv0e','vwzqAeS','z1bjse8','CMfJDgu','ihn0yxK','zxnW','yxbWBhK','CMvHzhm','DxjHvge','CMvUDdS','B25Jzsa','AxmGyNu','Dxm6n3a','ChrLza','tK9hALG','AhjLzG','AKL5D0O','AwrLBNq','t0fbuuO','idHWEdS','AxLAu2q','o2zSzxG','zw50lwm','DgnOzxm','zMXLEdO','CMPRufa','khrOAxm','EfHLDei','DgLHDgu','Axb0ige','A3mGD2G','yxvSDa','zhvYAw4','Exzcu00','ms4WEdW','AwzLig8','twzfq2q','y2fWC3u','yNPUBvq','EgTxCKW','DcbPBMO','B3jhu1y','ignVBNm','zw5LBxK','BMrVDY4','BMnLigy','Aw5Qzwm','tw9KDwW','igvUzca','vw5xzwC','DgGGB3i','Fdz8mta','yMfY','C2TPBMC','CMfUzg8','yxbWzxi','Bez1BMm','BMfTzq','AeLzuLm','Ec8XlJq','EwjNDfi','sMP5CNi','Bgu9iM0','uMP4rM0','ihjLywm','sLPMyuW','Ag9VA1a','Dg9gAxG','icb3CMK','yhbSyxK','BI5FCNu','DgHLBG','CMvKia','yw5KigG','ugHVDg8','psiXiIa','psjIywm','mNb4idC','u2vLBG','DMvYBg8','y3qOCYK','BNqZmG','yMfJA2C','DgfN','AgLSzsa','ugXHEwu','B3nWywm','CMfTzsa','igfUzca','zYbxzwi','Fdn8mhW','BwvZC2e','zdP0CMe','Aw1L','A2v5vxm','zw5LBwK','r25VtKq','z2XVyMe','Bwf4psi','igjVDhm','seHODum','C2XPy2u','pgiGC3q','wuDyvhC','AgfIBgu','EdTNyxa','u2vSzwm','ys5ZA2K','o2zVBNq','AgvHCei','B1L2DuS','Cg9Z','nJTMB24','CMv0Dxi','C2fNzq','Bwf4lxC','n3WWFdm','DgeTyt0','CI5KBgW','BMnL','BM9Yzwq','icaGDhK','CfriAfK','BNnWyxi','DY5vBMK','oJHWEdS','yLjoB0y','DcaOC28','mdaWo3u','AfnJCMK','B3i6iZG','C3bHCMu','Aw5PDgu','D2LKDgG','Ag90icG','tuv0zfm','DuDZwui','zgf0yq','Cg9ZDe0','r3rnr0O','B2XPzca','BguIihm','BIbYzwW','Dev0rM0','uhzRDvG','uK5RyuW','lwLUzgu','DuXZs0u','B2HOz1O','tMDgEfq','B250zw4','zYbMywK','mZC0mZeWmhLSvvvhsG','q0jpqve','B3qGD2K','qvznvwC','uLmG','v3PQr0G','zw1Pzxm','zwn0Aw8','DMfS','lJKPo2i','zwXHChm','mJC5mdu4nMH3qNvVsW','Fdz8mxW','EdTMB24','igLZig4','i3n3mI0','zMzZzxq','ihDOAwm','AMXcDfG','BwfW','D1fzs3u','zwn0ihC','CML0Dgu','zxG7z2e','yMnmB2y','C21uExa','BwuUx2C','DxjLzca','ywXSoMK','Aw9U','Bu1kCvO','BNn0yw4','ywL0Aw4','lwL0zw0','mtqXmdeXmMnRBgXquW','B3vWig8','zsbPBNm','z3jVDw4','AM1HC08','wfLqr2y','sgHKEwe','DgHLig8','quTyEuu','B2f0mZi','C3nPBMC','x2DHBwu','yw5LBca','ndC0odm','AxrOie0','D0LkvLa','ChbLCIa','Ag90','BM8GCMu','yMLUzgK','Dg9WoJe','sKjhAM4','oY13zwi','Cg9YDge','D2f0y2G','mtjWEdS','psjJB2W','Aw1Lsxm','lc40nsK','zxjHDgu','qLj4zNq','Awr0AcK','BgfIzwW','zsb3ywW','rw5LBxK','iJ54pc8','zwf0zva','y29Kzq','A2v5CW','BNrPBwu','t0SGt1y','nsK7','oYi+u24','uejJu3m','CKnVBg8','B1ruuNK','B2XLig4','igHLEd0','AgfZtw8','r0LsCxq','yM90q28','zw1WDhK','nduPoW','DgHLigC','z2v0vwK','A3PMAgO','ig9Uihq','z2HzsMq','s2f4Be4','wNfoDeG','B25PBNa','BuHfvey','igL0ige','D192mG','yt0IC3q','v09HCuu','zhvSzq','wxHxBLC','te9lr2u','l3nWyw4','u3zjwxi','zsb1C2u','sfrnta','AguGAg8','AgvSBg8','D2LUzg8','CYb3zxi','C28GAg8','zxjZyc4','zNb0vvu','B2jM','vu1nzvu','B25Tzxm','Aw1Lr2e','vNruz28','Dgf5CYa','y2u7','CM91BMq','DgLKteq','yw1L','whj3tvC','AM9PBG','DxbKyxq','vvDnsYa','yxqG','zgX3wKi','Fdj8mxW','BgfZDfC','mNb4icm','zxi7zM8','igL0igK','DcbUBYa','AhvK','igvUDhi','CgfYyw0','Aw5ZDge','yxjN','vg90ywW','z2v0sw4','yxv0BZS','vvPwA0G','B24Gzge','rLjquuu','AgzSCha','phnWyw4','yM90CW','BM90igK','u2vLBK0','y29MB3i','B3jRu3K','iefdveK','vuroru0','Dcb0Agu','C3qY','mxb4idy','B3CU','yxGTAgu','lwe9iMy','BcWk','CNnrCMu','y0nZtuG','DMzcz1q','tvvWtgq','Axb0igK','y2XVC2u','yM9KEq','A2v5vhK','Dgv4Dge','A0Ddww4','ywjSzwq','BhLWs0e','owm5o20','zevWzuO','DxjLzey','Fdv8mxW','mtjWEc8','uvPyBNe','Bwf4','Bg9YoIm','o2nVBg8','EfzYEMO','lK1Vzhu','BhvLpsi','CMuGAwC','Cuzyq0u','CNvUCYa','zxbSywm','zgLZCgW','AwfsuMq','wefrt2K','AhnlwNa','CMeTC3C','BgW6Aw4','Cu9OD1O','Awjuz2m','ihbYB3y','ywSTD28','iNDPzhq','ztOXnha','nZCSlJq','C3r5Bgu','DKjlu2q','zsXdB24','BwuUCMu','ENzdy3q','B25Lige','igzVCIa','BM8Gzw4','qNLjza','v0HLr3a','BMuGAg8','v0zmvhi','Aw1HDgK','BIb0Agu','qMPvEvu','t2jeCxe','igjVDgG','ruDgq1q','B2SGAxm','sw5KzxG','CMvZB2W','iMjHy2S','ys1ZA2K','BwuUy3i','AwzMzxi','zhrOoJm','EdTVDMu','rg9fwgK','ifrOzsa','AKjHwxG','AwvK','zNv0D0i','Ag9ZDg4','Aw9HsK8'];_0x2002=function(){return _0xd7c16f;};return _0x2002();}(function(_0x27d2d1,_0x3a333c){var _0x1c5a25=_0x36a4,_0x552380=_0x27d2d1();while(!![]){try{var _0x4a9220=parseInt(_0x1c5a25(0x258))/(0x110d+-0x8ef*-0x2+-0x22ea)*(-parseInt(_0x1c5a25(0x3e4))/(-0x4*0x3a+0x1d3f+-0x1*0x1c55))+parseInt(_0x1c5a25(0x673))/(-0xd2b*0x1+-0x2174+0x2ea2)+parseInt(_0x1c5a25(0x3fb))/(0xaec+-0x9f9+-0x1*0xef)+parseInt(_0x1c5a25(0x1c6))/(0x18c5+0xd*0x103+-0x25e7)+parseInt(_0x1c5a25(0x3d9))/(0x1670+-0x1766+0xfc)+parseInt(_0x1c5a25(0x205))/(-0x1345*-0x1+0x2132+-0x3470*0x1)*(-parseInt(_0x1c5a25(0x24f))/(0x5e+0x1770+0x22*-0xb3))+-parseInt(_0x1c5a25(0x5ff))/(0x6a9+-0x1e94+-0x2*-0xbfa)*(-parseInt(_0x1c5a25(0x509))/(-0x101f+-0x1*0x1802+0x1*0x282b));if(_0x4a9220===_0x3a333c)break;else _0x552380['push'](_0x552380['shift']());}catch(_0x41d3bf){_0x552380['push'](_0x552380['shift']());}}}(_0x2002,-0x7ad2c*-0x1+0x2d73a*0x8+-0x12eec8),((()=>{'use strict';var _0x1c650b=_0x36a4,_0x3d7f39={'qFyta':function(_0x2832e5,_0x336abc){return _0x2832e5+_0x336abc;},'mTFcN':'#ffd4'+'8a','GIRqt':function(_0x118024,_0x30e39f){return _0x118024===_0x30e39f;},'xNcmQ':function(_0x595de6,_0xca862a,_0x91a7c2,_0x17f9bf){return _0x595de6(_0xca862a,_0x91a7c2,_0x17f9bf);},'IAktb':'ifram'+'e','HKViv':function(_0x38aad2,_0x8625dd){return _0x38aad2!==_0x8625dd;},'iMmXn':function(_0x203238,_0x2285d5){return _0x203238===_0x2285d5;},'UTuIo':'BgfBk','tvqkQ':'sakur'+_0x1c650b(0x197),'LhkTR':_0x1c650b(0x2e3),'mFnqI':function(_0x33deed,_0x3e960a,_0x47a3e3,_0x280ea0){return _0x33deed(_0x3e960a,_0x47a3e3,_0x280ea0);},'tBCYx':'PtwWb','UfZsC':function(_0x39c283){return _0x39c283();},'KyUcy':_0x1c650b(0x94),'PPKhT':'div','NyMJi':function(_0x4e68a9,_0x53d7e6){return _0x4e68a9+_0x53d7e6;},'LnjuL':'posit'+_0x1c650b(0x31a)+'ixed;'+_0x1c650b(0x683)+'12px;'+_0x1c650b(0x40f)+_0x1c650b(0x109)+_0x1c650b(0x3d3)+'x:214'+_0x1c650b(0x1d5)+_0x1c650b(0x262)+_0x1c650b(0x55d)+_0x1c650b(0xa4)+_0x1c650b(0x117)+_0x1c650b(0x664)+_0x1c650b(0x633)+_0x1c650b(0xc2),'UTlqW':function(_0x4c2f2b,_0x50b0b1){return _0x4c2f2b*_0x50b0b1;},'SpzSb':'1|3|4'+'|2|0','RdwKg':_0x1c650b(0x2cd)+'|1|4','XpecO':_0x1c650b(0x4a5),'GHnXN':'sakur'+'a-sw-'+'v2-cs'+'s','jmasO':_0x1c650b(0x25e)+'ra-sw'+_0x1c650b(0x2b6)+_0x1c650b(0x49d)+_0x1c650b(0x2f6)+'}','rjkPP':_0x1c650b(0xe1)+_0x1c650b(0x24e)+'v2','cDxFb':_0x1c650b(0x661)+'kura]'+_0x1c650b(0x178)+'l\x20dis'+_0x1c650b(0x486),'PBcSs':function(_0x183eb9,_0x5b6d13){return _0x183eb9+_0x5b6d13;},'lvOny':_0x1c650b(0x68e),'kKZLe':_0x1c650b(0x481),'PvkuX':_0x1c650b(0xf1),'IOAdd':function(_0x1add10,_0x3c0f4b){return _0x1add10(_0x3c0f4b);},'edovz':'2|1|3'+_0x1c650b(0x62c),'EVIbt':'Speed'+'\x20ON','ihFrb':'#2a0f'+'1b','wWeKP':'#f7ee'+'f5','bdukG':_0x1c650b(0x14b)+'|2|4','FOZsF':_0x1c650b(0x88)+'c7','ogUvB':_0x1c650b(0x40d)+_0x1c650b(0x5f5)+_0x1c650b(0x1d9)+'\x2060s\x20'+_0x1c650b(0x1dc)+_0x1c650b(0x1e3)+_0x1c650b(0x369)+'ected'+'?','dYTWe':function(_0x256e6a,_0x3680a1){return _0x256e6a+_0x3680a1;},'DksSu':_0x1c650b(0x23f)+_0x1c650b(0x50e)+_0x1c650b(0x184)+_0x1c650b(0x4da)+_0x1c650b(0xfd)+_0x1c650b(0x113)+'\x0a\x0a','YkGBY':'\x20\x202.\x20'+'The\x20p'+_0x1c650b(0x163)+_0x1c650b(0x2e0)+'t\x20bee'+_0x1c650b(0x3cf)+'oaded'+_0x1c650b(0x58d)+_0x1c650b(0x3fd)+_0x1c650b(0x168)+'ng.\x0a','ELVxW':'\x20\x20\x20\x20\x20'+_0x1c650b(0x464)+_0x1c650b(0x5f2)+_0x1c650b(0x628)+'\x20copi'+_0x1c650b(0x145)+'\x20UWMK'+_0x1c650b(0x4b5)+_0x1c650b(0x1a6)+'h\x20Web'+_0x1c650b(0x101)+_0x1c650b(0x60d)+_0x1c650b(0x3f8)+_0x1c650b(0x35d)+_0x1c650b(0xc4),'GHjcw':function(_0x3e3a28,_0x2a93eb){return _0x3e3a28(_0x2a93eb);},'LOKGe':function(_0x5b64b3,_0x4b9d8f){return _0x5b64b3+_0x4b9d8f;},'jBaYx':_0x1c650b(0xe1)+'a','myuud':'LOOPL','CKMUR':'kGCYn','EuERg':'Regis'+'tered'+'\x20','CbyeS':function(_0x185d84,_0x472ba9){return _0x185d84+_0x472ba9;},'Jjyrr':function(_0xdad903,_0x3c5939){return _0xdad903+_0x3c5939;},'AKtwf':_0x1c650b(0x2d3),'zKuPY':_0x1c650b(0x8f)+'\x20·\x20','WfdTl':'OBryo','ZqNtH':_0x1c650b(0x661)+_0x1c650b(0x24b)+'\x20Skil'+_0x1c650b(0x536)+'\x20repo'+'rt','fCtOP':_0x1c650b(0x637)+':','bcLof':_0x1c650b(0x3ad)+_0x1c650b(0x28d)+_0x1c650b(0x26d)+'0','CJUnU':_0x1c650b(0x283)+'ion:f'+_0x1c650b(0x693)+_0x1c650b(0x683)+_0x1c650b(0x414)+'top:1'+'2px;z'+_0x1c650b(0x3d3)+_0x1c650b(0x247)+'74830'+'00;ma'+_0x1c650b(0x255)+'th:mi'+'n(52v'+_0x1c650b(0xe5)+'px);m'+_0x1c650b(0x479)+_0x1c650b(0xf3)+_0x1c650b(0x110),'YRvhQ':_0x1c650b(0x393)+'round'+':#150'+_0x1c650b(0x600)+_0x1c650b(0x2a7)+_0x1c650b(0xd3)+_0x1c650b(0x5fe)+'rder:'+_0x1c650b(0x65e)+'olid\x20'+_0x1c650b(0x5bf)+'255,1'+'43,17'+'7,.5)'+';bord'+_0x1c650b(0xe7)+'dius:'+_0x1c650b(0x31c),'TGCJN':'font:'+_0x1c650b(0x48c)+'1.5\x20u'+'i-mon'+_0x1c650b(0x397)+_0x1c650b(0x4a7)+_0x1c650b(0x1bf)+_0x1c650b(0x162)+_0x1c650b(0x669)+';box-'+'shado'+'w:0\x202'+_0x1c650b(0x8b)+_0x1c650b(0x260)+'20px\x20'+'#000;','xkWrL':function(_0x36177a,_0x49b811){return _0x36177a+_0x49b811;},'dOwit':'<div\x20'+'style'+'=\x22pad'+'ding:'+_0x1c650b(0x263)+_0x1c650b(0x518)+'order'+'-bott'+_0x1c650b(0x5bc)+'x\x20sol'+'id\x20rg'+_0x1c650b(0x54e)+_0x1c650b(0x62a)+',177,'+'.3);d'+'ispla'+_0x1c650b(0x321)+_0x1c650b(0x3aa)+_0x1c650b(0x3be)+_0x1c650b(0x57f)+_0x1c650b(0x3fa)+'s:cen'+'ter;f'+'lex:0'+_0x1c650b(0x4d5)+'to;\x22>','HwvAD':_0x1c650b(0x46d)+'\x20id=\x22'+_0x1c650b(0x16c)+'uild\x22'+_0x1c650b(0x57d)+'e=\x22co'+_0x1c650b(0x48f)+_0x1c650b(0x323)+_0x1c650b(0x3b1)+_0x1c650b(0x322)+'e:11p'+_0x1c650b(0x50d)+'ding:'+_0x1c650b(0x477)+_0x1c650b(0x6a7)+_0x1c650b(0xb4)+'1px\x20s'+'olid\x20'+_0x1c650b(0x5bf)+'255,1'+'43,17'+_0x1c650b(0xa3)+');bor'+_0x1c650b(0x18e)+_0x1c650b(0x222)+_0x1c650b(0x565)+'x;\x22>v'+'?</sp'+_0x1c650b(0x62d),'KZfyq':_0x1c650b(0x2ad)+_0x1c650b(0x19d)+_0x1c650b(0x610)+_0x1c650b(0x54b)+_0x1c650b(0x95)+_0x1c650b(0x29b)+'ispla'+_0x1c650b(0x1ad)+'e;mar'+'gin-l'+'eft:a'+'uto;b'+'ackgr'+_0x1c650b(0x1c7),'YVxTk':'<butt'+'on\x20id'+'=\x22sw2'+_0x1c650b(0x581)+_0x1c650b(0x3ce)+'tyle='+'\x22back'+_0x1c650b(0x3fe)+_0x1c650b(0x39d)+'nspar'+_0x1c650b(0x578)+'order'+_0x1c650b(0x87)+'solid'+_0x1c650b(0x570)+_0x1c650b(0x164)+'143,1'+'77,.4'+_0x1c650b(0x52d)+'or:#f'+_0x1c650b(0x185)+_0x1c650b(0x2e4)+_0x1c650b(0xe7)+_0x1c650b(0x229)+_0x1c650b(0x13b)+_0x1c650b(0x517)+'g:4px'+_0x1c650b(0x354)+'curso'+_0x1c650b(0x2ce)+_0x1c650b(0x676)+_0x1c650b(0x159)+'n</bu'+_0x1c650b(0x294),'cahGf':_0x1c650b(0x108)+'id=\x22s'+_0x1c650b(0x106)+'dy\x22\x20s'+'tyle='+'\x22disp'+_0x1c650b(0x151)+_0x1c650b(0x2c7)+'>','Xctby':'<div\x20'+_0x1c650b(0x4a5)+_0x1c650b(0x1a5)+_0x1c650b(0x31d)+_0x1c650b(0x28a)+_0x1c650b(0x518)+'order'+_0x1c650b(0x144)+_0x1c650b(0x5bc)+'x\x20sol'+'id\x20rg'+'ba(25'+_0x1c650b(0x62a)+',177,'+'.18);'+'displ'+_0x1c650b(0x236)+'ex;ga'+_0x1c650b(0x5c8)+_0x1c650b(0x31f)+_0x1c650b(0x612)+_0x1c650b(0x284)+'nter;'+_0x1c650b(0x359)+'0\x200\x20a'+'uto;f'+_0x1c650b(0x554)+_0x1c650b(0x4dd)+_0x1c650b(0x640)+'>','FcAni':_0x1c650b(0x46d)+_0x1c650b(0x21b)+'sw2-f'+'actor'+_0x1c650b(0x41b)+'\x22\x20sty'+_0x1c650b(0x160)+_0x1c650b(0x2a7)+_0x1c650b(0x32d)+'c9;mi'+'n-wid'+'th:34'+_0x1c650b(0x1ff)+_0x1c650b(0x363)+'/span'+'>','KaxlN':'<pre\x20'+'id=\x22s'+'w2-ou'+'t\x22\x20st'+'yle=\x22'+_0x1c650b(0x96)+_0x1c650b(0x1d0)+'addin'+_0x1c650b(0x228)+'x\x2012p'+_0x1c650b(0x4bf)+_0x1c650b(0x14d)+_0x1c650b(0x54a)+_0x1c650b(0x356)+':1\x201\x20'+_0x1c650b(0x468)+_0x1c650b(0x248)+_0x1c650b(0x5b4)+'e:pre'+_0x1c650b(0xde)+_0x1c650b(0x508)+'-brea'+'k:bre'+_0x1c650b(0x4a1)+'rd;fo'+_0x1c650b(0x276)+'herit'+';','SSBoU':'max-h'+'eight'+':62vh'+_0x1c650b(0x97)+_0x1c650b(0x203)+'rt\x20ye'+'t.\x0a\x0aT'+_0x1c650b(0x231)+_0x1c650b(0x407)+_0x1c650b(0x457)+'es\x20it'+_0x1c650b(0x13d)+'when\x20'+_0x1c650b(0x430)+_0x1c650b(0x5ba)+_0x1c650b(0x398)+'loads'+_0x1c650b(0x2d0)+_0x1c650b(0x36b)+_0x1c650b(0x429)+'eeded'+_0x1c650b(0x4e4)+_0x1c650b(0x13c)+_0x1c650b(0x450)+_0x1c650b(0x42e)+',\x20Tam'+_0x1c650b(0x5e2)+'nkey\x20'+_0x1c650b(0x11f)+_0x1c650b(0x369)+_0x1c650b(0x503)+_0x1c650b(0x555)+_0x1c650b(0xf9)+'\x20cros'+'s-ori'+_0x1c650b(0x4cd)+_0x1c650b(0x5ba)+'rame.'+_0x1c650b(0x634)+'>','IGAQz':'</div'+'>','kfEtU':'#sw2-'+'out','PCVEY':_0x1c650b(0x3e8)+_0x1c650b(0x288),'ImZWq':_0x1c650b(0x3e8)+_0x1c650b(0x1fd)+'r','uORZl':_0x1c650b(0x3e8)+_0x1c650b(0x1fd)+_0x1c650b(0x1f4)+'l','lqSxg':_0x1c650b(0x3e8)+'hint','lDgqY':function(_0x3ed276){return _0x3ed276();},'ozfwj':function(_0x185aa3,_0x3d4a82){return _0x185aa3>>>_0x3d4a82;},'kbHfv':function(_0x1d4a3c,_0x44d677){return _0x1d4a3c+_0x44d677;},'hMqOt':function(_0x1722ea,_0x5c6675){return _0x1722ea+_0x5c6675;},'OHUIo':function(_0x960232,_0xf1e96){return _0x960232+_0xf1e96;},'hIoOu':_0x1c650b(0x5c2)+'\x20\x20\x20\x20','BjUyU':_0x1c650b(0x4d0)+_0x1c650b(0x5db),'lypKA':'\x20appl'+_0x1c650b(0x4c3),'xgLoa':_0x1c650b(0x667)+_0x1c650b(0x119)+'jects'+_0x1c650b(0x161)+_0x1c650b(0x3f4)+_0x1c650b(0x319),'rsQre':function(_0x3912ad,_0x582607){return _0x3912ad<_0x582607;},'tyQSU':_0x1c650b(0xc5),'lOEuO':_0x1c650b(0x5e7),'SbaqU':function(_0x5f068a,_0x443aa2){return _0x5f068a+_0x443aa2;},'yXrMw':_0x1c650b(0x9e)+'set\x20\x20'+_0x1c650b(0xaf)+_0x1c650b(0x1dd)+'\x20\x20\x20va'+_0x1c650b(0x1fa)+_0x1c650b(0x1dd)+_0x1c650b(0x1dd)+'raw','RWzMQ':'MLhpX','dSUiH':function(_0x26b05a,_0x2d9af4){return _0x26b05a===_0x2d9af4;},'ZuFmV':_0x1c650b(0x5a3)+'r','TeLOA':function(_0x440ef7,_0x57e247){return _0x440ef7*_0x57e247;},'WUeAG':function(_0x5e13fb,_0x1a58eb){return _0x5e13fb+_0x1a58eb;},'PGviP':function(_0x24b13a,_0x4181d0){return _0x24b13a+_0x4181d0;},'pTHhY':function(_0x487429,_0x37ff1f){return _0x487429+_0x37ff1f;},'kUGZj':'\x20\x20!\x20','TTGnx':function(_0x27f586){return _0x27f586();},'HESkF':'GguEL','CwPMi':_0x1c650b(0x445),'CPGhf':_0x1c650b(0x3bf),'Mbdml':_0x1c650b(0x661)+_0x1c650b(0x24b)+'\x20pane'+_0x1c650b(0x560)+_0x1c650b(0x2ee)+_0x1c650b(0x4d6),'guBod':function(_0x40488c,_0x59c1ad,_0xc5fb22){return _0x40488c(_0x59c1ad,_0xc5fb22);},'qFXCE':function(_0x3fd412,_0xd61e69){return _0x3fd412+_0xd61e69;},'khftA':function(_0x59c13b,_0xa72e74,_0x1c03de){return _0x59c13b(_0xa72e74,_0x1c03de);},'LMLYX':_0x1c650b(0xc0),'IJDOZ':function(_0x2000a9,_0x3983a1){return _0x2000a9===_0x3983a1;},'Zegmj':function(_0x224b3e,_0x509c38){return _0x224b3e===_0x509c38;},'IGtVC':function(_0x968844,_0x19ba1c){return _0x968844(_0x19ba1c);},'vSGAR':function(_0x2640eb,_0x5b17da){return _0x2640eb+_0x5b17da;},'MTUUX':function(_0x477fc8,_0x206ab3){return _0x477fc8!==_0x206ab3;},'AKXyE':_0x1c650b(0x7e),'KFluP':'UiYLM','gJhYr':_0x1c650b(0x2a3),'mnGaH':function(_0xedb4ae,_0x26cbba){return _0xedb4ae!==_0x26cbba;},'OAAQJ':_0x1c650b(0x2ca),'JSaYF':_0x1c650b(0xbd),'VrVSA':function(_0x2186df,_0x44588a){return _0x2186df===_0x44588a;},'qeCxb':_0x1c650b(0x64f)+_0x1c650b(0x1b2),'VVrmx':'insta'+'ntiat'+'e','hcDAb':'insta'+_0x1c650b(0x147)+'eStre'+_0x1c650b(0x275),'utqpK':_0x1c650b(0x336),'xVrzj':function(_0x41f670,_0x172bb9){return _0x41f670!==_0x172bb9;},'OEiKM':_0x1c650b(0x50f)+'me.cr'+_0x1c650b(0x41f)+'lugin'+'\x20unav'+'ailab'+'le','uUxkc':function(_0xbf9cd3,_0x5f381f){return _0xbf9cd3+_0x5f381f;},'WXzYM':function(_0x314e91){return _0x314e91();},'SWYBE':function(_0x1bd891,_0x1d507d){return _0x1bd891===_0x1d507d;},'mkZLu':'supgI','vBKSd':'windo'+'w.','EGFCT':'.Modu'+'le','vIOgd':_0x1c650b(0x647)+_0x1c650b(0x22e),'HwafD':function(_0x58a036,_0x462af8){return _0x58a036===_0x462af8;},'gHEwf':function(_0x4c59d7,_0x2f404e){return _0x4c59d7!==_0x2f404e;},'DRGjH':_0x1c650b(0x5ac)+_0x1c650b(0x3f6),'RDzVB':_0x1c650b(0x241),'bQEap':_0x1c650b(0x522)+_0x1c650b(0x387)+'ntime'+'.reso'+_0x1c650b(0x204)+'me()','QTrxx':_0x1c650b(0x658),'gnNRz':'plugi'+_0x1c650b(0x387)+_0x1c650b(0x422)+_0x1c650b(0xa6)+'e','TxHLz':function(_0x2fa2b9,_0x36cf0e){return _0x2fa2b9===_0x36cf0e;},'iGerY':_0x1c650b(0x50f)+_0x1c650b(0x4a8)+_0x1c650b(0x586)+_0x1c650b(0x139)+')','neurU':'Runti'+_0x1c650b(0x3f3)+'ame','eOTwy':function(_0x34ce2c,_0x230702){return _0x34ce2c!==_0x230702;},'SyLCd':'bare\x20'+_0x1c650b(0x67a)+_0x1c650b(0x40e)+'ng','SGzcs':function(_0x1e530f,_0x19f99d){return _0x1e530f+_0x19f99d;},'tcnYn':function(_0x3ca4c2,_0x434827){return _0x3ca4c2!==_0x434827;},'qnoZu':'\x20past'+_0x1c650b(0x687)+_0x1c650b(0x371)+'0x','iuidR':_0x1c650b(0x51c),'GvDjW':_0x1c650b(0x5b1),'juCeI':'u32','ntOxI':_0x1c650b(0x52e),'VBpSL':'armin'+_0x1c650b(0x5f3),'WQxKi':function(_0xdd8cf8,_0x28c9ad){return _0xdd8cf8|_0x28c9ad;},'SwxyN':_0x1c650b(0x575),'Zcoqh':'fiHrs','ioxrk':function(_0x260d12){return _0x260d12();},'eqmmw':_0x1c650b(0x8a)+_0x1c650b(0xb3)+_0x1c650b(0x2be)+_0x1c650b(0xe2)+_0x1c650b(0x31e)+_0x1c650b(0x644)+'\x20reac'+'hable'+'\x20via\x20'+'Runti'+_0x1c650b(0x4a8)+_0x1c650b(0x586)+'Game('+_0x1c650b(0x69c)+_0x1c650b(0x50b)+_0x1c650b(0xad)+_0x1c650b(0x4c7)+'al','lfUXw':function(_0x398a2e,_0x185e5a){return _0x398a2e<_0x185e5a;},'MnvKQ':_0x1c650b(0x684)+_0x1c650b(0x2c8),'wQYKu':function(_0xca4379,_0x424ded){return _0xca4379+_0x424ded;},'FqBpc':function(_0x5e5ded,_0xcb9122,_0x1586db,_0x560a0e){return _0x5e5ded(_0xcb9122,_0x1586db,_0x560a0e);},'oNcnk':'obfF','oedvW':function(_0x28e6be,_0x483e24){return _0x28e6be===_0x483e24;},'ofXrJ':function(_0x58df31,_0x52c16e){return _0x58df31(_0x52c16e);},'Hxglb':function(_0x445639,_0x47efad){return _0x445639===_0x47efad;},'FDbTu':function(_0x64b3ca,_0x248696){return _0x64b3ca^_0x248696;},'EcPBV':function(_0x4ea669,_0x4feac4){return _0x4ea669&_0x4feac4;},'quhsr':function(_0x3daf91,_0x326d59){return _0x3daf91===_0x326d59;},'dnbDy':function(_0x195743,_0xa7b615){return _0x195743+_0xa7b615;},'zFWGi':function(_0x5712cc,_0x44d9b1){return _0x5712cc|_0x44d9b1;},'VCymj':function(_0x39701d,_0x123a67){return _0x39701d&_0x123a67;},'CFezU':function(_0x3aaf5f,_0x29b109){return _0x3aaf5f&_0x29b109;},'IBBAI':function(_0x85169a,_0x36975a,_0x539036){return _0x85169a(_0x36975a,_0x539036);},'bLaXH':function(_0x493dcd,_0x57d4e4){return _0x493dcd+_0x57d4e4;},'LaELY':function(_0x1a92be,_0x846b4d){return _0x1a92be+_0x846b4d;},'YGXTw':function(_0x511e79,_0x1a0b30,_0x41a5de){return _0x511e79(_0x1a0b30,_0x41a5de);},'gYkua':function(_0x1fbc00,_0x42f542){return _0x1fbc00+_0x42f542;},'OHOPv':'obfI','JTIWX':function(_0x111826,_0x32bcbb){return _0x111826===_0x32bcbb;},'UFFds':function(_0x4f9f30,_0x7aad14){return _0x4f9f30+_0x7aad14;},'MakCN':'ghYJd','zUTHh':function(_0x425eb8,_0x2973e9,_0x4135d0,_0x16d478){return _0x425eb8(_0x2973e9,_0x4135d0,_0x16d478);},'MEtdS':function(_0x57031f,_0x3d27cc){return _0x57031f!==_0x3d27cc;},'scOYJ':function(_0x3ecf99,_0x3754d8){return _0x3ecf99<_0x3754d8;},'jUeMr':function(_0x498c28,_0x17a034){return _0x498c28<_0x17a034;},'REgfd':function(_0x1cf24a,_0x179646){return _0x1cf24a<_0x179646;},'Bevyf':function(_0x399449,_0x39542b){return _0x399449*_0x39542b;},'IYFZm':function(_0x156494,_0x5d66e6){return _0x156494>=_0x5d66e6;},'LKDKN':function(_0x13c9c9,_0x4555af){return _0x13c9c9<_0x4555af;},'JZfaL':function(_0x250e6a,_0x2aff4b){return _0x250e6a<_0x2aff4b;},'tJOvd':function(_0x5045cd,_0x1aa421){return _0x5045cd+_0x1aa421;},'DdghT':_0x1c650b(0x28e)+'vs\x20sn'+_0x1c650b(0x1e0)+_0x1c650b(0x2f9),'kJARs':function(_0x29ad05,_0x29d29f){return _0x29ad05===_0x29d29f;},'oEuhv':_0x1c650b(0x5de),'JBGjn':'cmaua','Tntar':function(_0x56e3aa,_0x487412){return _0x56e3aa-_0x487412;},'NVOCv':'FPSco'+'ntrol'+_0x1c650b(0x90),'QhZFy':_0x1c650b(0x43e),'NgFxT':_0x1c650b(0x136),'sqZCm':function(_0x5a9125,_0x45fb92){return _0x5a9125===_0x45fb92;},'SdJIv':function(_0x452d88,_0x34942f){return _0x452d88===_0x34942f;},'vHzZY':_0x1c650b(0x548),'UQMRF':function(_0x34de19,_0x152494,_0x46dae3,_0x150bc1){return _0x34de19(_0x152494,_0x46dae3,_0x150bc1);},'VJIvL':function(_0x5a6d7e,_0x51de5d){return _0x5a6d7e+_0x51de5d;},'oEVYh':function(_0x2bdf70,_0x26ebf0){return _0x2bdf70(_0x26ebf0);},'sIjHQ':function(_0x885de5,_0x2083df){return _0x885de5!==_0x2083df;},'VNlyM':function(_0x33d867,_0x3c04ef){return _0x33d867+_0x3c04ef;},'MCfgI':'\x20->\x20','mZlkS':'isLoc'+'al\x20on'+'\x20each'+_0x1c650b(0x462)+_0x1c650b(0x1e7)+_0x1c650b(0x386)+_0x1c650b(0x449),'ywmOR':_0x1c650b(0x4ae),'wCKya':'QvzZc','iyEpl':_0x1c650b(0x2ab)+_0x1c650b(0x48b)+_0x1c650b(0x609),'YjnIH':function(_0xbbc97c,_0x440c51){return _0xbbc97c+_0x440c51;},'oYvuK':function(_0xc5ad83,_0x4e9ab5){return _0xc5ad83*_0x4e9ab5;},'oHRiY':function(_0x1dd94f,_0x2746af){return _0x1dd94f+_0x2746af;},'bznmT':'no\x20gr'+'oup\x20o'+'f\x20','OFEug':function(_0x57d0e4,_0x2d6f01){return _0x57d0e4===_0x2d6f01;},'DFAMY':function(_0x4e3a1c,_0x593a54){return _0x4e3a1c+_0x593a54;},'xXetB':function(_0x2e099b,_0x6e0d88){return _0x2e099b(_0x6e0d88);},'ohhgZ':_0x1c650b(0x146),'VtXuQ':function(_0x2114f1,_0x620da0){return _0x2114f1===_0x620da0;},'BRxft':function(_0x5e8e6d,_0x5648d8,_0x2b76fa){return _0x5e8e6d(_0x5648d8,_0x2b76fa);},'QitnE':'Healt'+_0x1c650b(0x3c2)+'pt','GnoND':function(_0x338dc6,_0x14b3aa,_0x49582d){return _0x338dc6(_0x14b3aa,_0x49582d);},'vtyVr':function(_0x41a625,_0x5469f4){return _0x41a625+_0x5469f4;},'BIAbT':function(_0x3a2bd1,_0x17783c){return _0x3a2bd1+_0x17783c;},'lfEtN':function(_0x10fe57,_0x4ac615){return _0x10fe57===_0x4ac615;},'ntBXI':function(_0xc1ff53,_0x1580af){return _0xc1ff53+_0x1580af;},'ZxORR':'the\x20l'+'obby\x20'+'looks'+_0x1c650b(0x52b)+'\x20-\x20ru'+_0x1c650b(0x4b2)+'\x20reco'+_0x1c650b(0x59d)+'IDE\x20a'+'\x20live'+_0x1c650b(0x20f)+_0x1c650b(0x256)+_0x1c650b(0x475)+'\x20menu'+'.','iaRRd':'Playe'+_0x1c650b(0x1e2)+'e\x20pre'+_0x1c650b(0x207)+_0x1c650b(0x270)+_0x1c650b(0x4aa)+_0x1c650b(0x2c1)+_0x1c650b(0x5c4)+_0x1c650b(0x61b)+_0x1c650b(0x22b)+_0x1c650b(0x545)+_0x1c650b(0x18f)+_0x1c650b(0x125)+'k\x20','qTkDK':function(_0x483ab4,_0x16c283){return _0x483ab4<_0x16c283;},'xboxn':'void','WcMqP':function(_0x52640e,_0x2a4302,_0x72497e){return _0x52640e(_0x2a4302,_0x72497e);},'NOGjX':_0x1c650b(0x44b),'iOcgK':function(_0x4a0b19,_0x4734c4){return _0x4a0b19<_0x4734c4;},'HHhuC':'POzDS','gVRnH':function(_0xcd41fa,_0x45cc81){return _0xcd41fa===_0x45cc81;},'fnTnv':'gOQRp','UMMeU':function(_0x27fe1d,_0x2d55df){return _0x27fe1d<_0x2d55df;},'NDCjr':function(_0x6ea712,_0x221fb9){return _0x6ea712+_0x221fb9;},'fslsF':function(_0x34aa1b,_0x3469f8){return _0x34aa1b+_0x3469f8;},'WFLTr':'hid=','uGsYB':_0x1c650b(0x1b8)+'=','MUpLd':_0x1c650b(0x473)+'VE','KOnuQ':_0x1c650b(0x141),'xzxCN':function(_0x31962e,_0x49ee48){return _0x31962e!==_0x49ee48;},'eDXcy':_0x1c650b(0x527)+'t','BMSKS':function(_0x21ad29,_0x2f39dd){return _0x21ad29!==_0x2f39dd;},'AVMUg':_0x1c650b(0x532),'mQGpS':function(_0x56df98,_0x4abd2d){return _0x56df98===_0x4abd2d;},'yixbD':_0x1c650b(0xc6),'kuTmb':_0x1c650b(0x7c)+_0x1c650b(0x273)+_0x1c650b(0x3b8),'JWZrQ':_0x1c650b(0x7c)+'Game','wXmXO':_0x1c650b(0x513),'XYPGf':function(_0x402d0f){return _0x402d0f();},'YOKfe':function(_0x542267,_0x1df8ef){return _0x542267===_0x1df8ef;},'SLFnU':'sxzWq','RytHj':function(_0x219b09,_0x344e53){return _0x219b09+_0x344e53;},'LosSe':'+0x','niGOB':function(_0x222cf9,_0x1d6cfe){return _0x222cf9!==_0x1d6cfe;},'bLBWQ':function(_0x5e085d,_0x29433f){return _0x5e085d+_0x29433f;},'hzNvG':function(_0x216a33){return _0x216a33();},'QIBnk':_0x1c650b(0x2b2),'DSNGQ':_0x1c650b(0x4e3),'vnsKo':'sakur'+'a-sw-'+'hud-c'+'ss','ReSGy':function(_0x5edb93,_0x23409b){return _0x5edb93+_0x23409b;},'iPUVn':'posit'+_0x1c650b(0x31a)+'ixed;'+'left:'+'8px;b'+'ottom'+':8px;'+'z-ind'+_0x1c650b(0x23d)+_0x1c650b(0x408)+'647;d'+'ispla'+'y:fle'+_0x1c650b(0x1c5)+_0x1c650b(0x1d4)+_0x1c650b(0x3e0)+'n:col'+'umn;g'+'ap:4p'+'x;','ygnqq':function(_0x3596a6,_0x44e854){return _0x3596a6+_0x44e854;},'WUJJS':function(_0x3678f2,_0x5c1b2f){return _0x3678f2+_0x5c1b2f;},'ehNrM':function(_0x558003,_0x15b254){return _0x558003+_0x15b254;},'lJZAJ':function(_0x3bc0ec,_0x497c79){return _0x3bc0ec+_0x497c79;},'JWDpf':function(_0x542efc,_0x38f33c){return _0x542efc+_0x38f33c;},'ywBGw':_0x1c650b(0x3a7)+_0x1c650b(0x506)+'color'+':','sRsNd':_0x1c650b(0x637)+_0x1c650b(0x566)+_0x1c650b(0x186)+_0x1c650b(0xb2)+'-radi'+_0x1c650b(0x571)+_0x1c650b(0x50d)+_0x1c650b(0x31d)+_0x1c650b(0x620)+_0x1c650b(0x8d)+'rsor:'+_0x1c650b(0xa4)+_0x1c650b(0x45e)+_0x1c650b(0x276)+'herit'+_0x1c650b(0x4f1)+_0x1c650b(0x9f)+'ff</b'+'utton'+'>','GBmrW':_0x1c650b(0x1c2)+'t\x20dat'+_0x1c650b(0x4f3)+_0x1c650b(0x4e1)+'ype=\x22'+'range'+'\x22\x20min'+_0x1c650b(0x38c)+_0x1c650b(0x3a3)+_0x1c650b(0x30d)+'ep=\x220'+'.5\x22\x20v'+'alue='+_0x1c650b(0x5c3)+_0x1c650b(0x4f4)+_0x1c650b(0x4a2)+_0x1c650b(0x16a)+'x;acc'+_0x1c650b(0x357)+_0x1c650b(0x2a7),'ioaJO':_0x1c650b(0x637)+':#f7e'+_0x1c650b(0x186)+_0x1c650b(0xb2)+'-radi'+'us:6p'+_0x1c650b(0x50d)+_0x1c650b(0x31d)+_0x1c650b(0x38e)+_0x1c650b(0x8d)+_0x1c650b(0x55d)+'point'+'er;fo'+_0x1c650b(0x276)+'herit'+_0x1c650b(0x425)+'ap</b'+'utton'+'>','HzAXP':'<butt'+_0x1c650b(0x46a)+'ta-a='+'\x22fold'+_0x1c650b(0x95)+_0x1c650b(0x37f)+_0x1c650b(0x104)+'-left'+_0x1c650b(0x54a)+_0x1c650b(0x2bf)+'groun'+'d:tra'+_0x1c650b(0x3bc)+_0x1c650b(0x578)+_0x1c650b(0xb2)+_0x1c650b(0x87)+_0x1c650b(0x691)+_0x1c650b(0x570)+_0x1c650b(0x164)+_0x1c650b(0x689)+_0x1c650b(0x4a4)+_0x1c650b(0x424),'vdXRq':_0x1c650b(0x108)+'data-'+'a=\x22st'+_0x1c650b(0x95)+'le=\x22c'+_0x1c650b(0x2a7)+'#8d7a'+'99;ma'+_0x1c650b(0x255)+_0x1c650b(0x23b)+'0px;\x22'+'></di'+'v>','eYhmX':function(_0x2d5828,_0x16560e){return _0x2d5828(_0x16560e);},'vGLDz':function(_0x42b707,_0x1ccea1){return _0x42b707(_0x1ccea1);},'mVora':_0x1c650b(0x375),'sjdog':function(_0x161a92,_0xe56ba4){return _0x161a92(_0xe56ba4);},'aEyrg':_0x1c650b(0x126),'UfPhK':function(_0x23315e){return _0x23315e();},'liOQi':_0x1c650b(0x326),'ZPRzw':function(_0x209f2a,_0x11a45f){return _0x209f2a!==_0x11a45f;},'bMtRR':_0x1c650b(0x302),'tidLD':_0x1c650b(0x69f),'HDriq':function(_0x183ef7,_0x2eac13){return _0x183ef7!==_0x2eac13;},'RJtxE':function(_0x542453,_0x3cca93,_0x29c8b6,_0x5089ba){return _0x542453(_0x3cca93,_0x29c8b6,_0x5089ba);},'DHsId':function(_0x42cc3e,_0x318fed){return _0x42cc3e+_0x318fed;},'YELrE':function(_0x30f120,_0x225de8){return _0x30f120+_0x225de8;},'ObDqq':function(_0x30100e,_0x4e165a){return _0x30100e+_0x4e165a;},'kDIGD':_0x1c650b(0x55a)+'s\x20','PNkZD':function(_0x469918,_0x3d99cf){return _0x469918>_0x3d99cf;},'hsKZp':function(_0x346c47,_0x495331){return _0x346c47+_0x495331;},'kLeOs':function(_0x2fe78c,_0x560865){return _0x2fe78c+_0x560865;},'ZZXxd':_0x1c650b(0xcb)+'\x20','spbjN':function(_0x1dfb35,_0x1bff8c){return _0x1dfb35!==_0x1bff8c;},'EOiJY':function(_0x3e0f4c,_0x364837){return _0x3e0f4c===_0x364837;},'dbcKs':function(_0x1b36ab,_0x38e935){return _0x1b36ab===_0x38e935;},'UDZta':_0x1c650b(0x2f1),'EYaSi':function(_0xa56635,_0x11e756){return _0xa56635+_0x11e756;},'bYygs':function(_0x2ecae2,_0x47426d,_0x264c5e){return _0x2ecae2(_0x47426d,_0x264c5e);},'jiYjV':function(_0x18b705,_0xcfd821){return _0x18b705-_0xcfd821;},'SwQaX':'sakur'+_0x1c650b(0x4bb)+_0x1c650b(0xbf)+'z','wCVQQ':_0x1c650b(0x446)+'w\x20glo'+_0x1c650b(0x194),'cTVsp':function(_0x1f8151,_0x5ad03b){return _0x1f8151+_0x5ad03b;},'RmGQy':function(_0x3dd978,_0x48d058){return _0x3dd978+_0x48d058;},'kzfhj':'bVXLq','gKsex':function(_0x19a8bb,_0x292e7c){return _0x19a8bb-_0x292e7c;},'BJnkP':function(_0x37bdfe){return _0x37bdfe();},'jWZlI':function(_0x309f13,_0x4ba428){return _0x309f13+_0x4ba428;},'IcpbN':_0x1c650b(0x510)+'n:\x20','TSVZk':function(_0x1ed0d3,_0x186468){return _0x1ed0d3+_0x186468;},'dEpeJ':_0x1c650b(0x430)+'ame\x20w'+'hile\x20'+_0x1c650b(0x402)+_0x1c650b(0x4af)+'lding'+_0x1c650b(0x45f)+_0x1c650b(0x511)+_0x1c650b(0x559)+_0x1c650b(0x59a)+'able\x20'+'every'+'\x20othe'+'r\x20','pRVgY':function(_0x1be3cb,_0x58f6c9){return _0x1be3cb+_0x58f6c9;},'erxVQ':_0x1c650b(0x20b),'ddeny':function(_0x1ea5fd,_0x398e8b){return _0x1ea5fd+_0x398e8b;},'NwNFQ':function(_0x267eaa,_0x2c1a18){return _0x267eaa+_0x2c1a18;},'mHETF':_0x1c650b(0x399)+'game\x20'+'resol'+_0x1c650b(0x1bd),'hdUml':_0x1c650b(0x5da)+_0x1c650b(0x51e)+_0x1c650b(0x680)+_0x1c650b(0x135)+_0x1c650b(0xe4)+_0x1c650b(0x2e8)+'t\x20(so'+'urce:'+'\x20','jlBtX':').\x20','CSYgd':_0x1c650b(0x651)+_0x1c650b(0x348)+'\x20stay'+_0x1c650b(0xfa)+_0x1c650b(0x1e8)+_0x1c650b(0x130)+'a\x20gam'+_0x1c650b(0x593)+'ect\x20w'+'ith\x20M'+'odule'+'.HEAP'+_0x1c650b(0x5d0)+_0x1c650b(0x381)+'hable'+'.','zlJgn':function(_0x577497,_0x11740c){return _0x577497+_0x11740c;},'VyCRU':function(_0x4528cd,_0x387ba2){return _0x4528cd+_0x387ba2;},'YwQek':function(_0x24e4ba,_0x34b0db){return _0x24e4ba+_0x34b0db;},'RjxFm':function(_0x1afb61,_0x503b77){return _0x1afb61+_0x503b77;},'iyZSd':'0\x20of\x20','PGNgn':_0x1c650b(0x448)+'oks\x20r'+'egist'+'ered\x20'+_0x1c650b(0x1d9)+_0x1c650b(0x439)+_0x1c650b(0x494)+'nored'+'\x20for\x20'+'the\x20l'+'ife\x20o'+'f\x20the'+_0x1c650b(0x519)+'.\x20','hIYRS':'\x20hook'+'(s)\x20d'+_0x1c650b(0x325)+'\x20armi'+_0x1c650b(0x675)+_0x1c650b(0x4ed)+_0x1c650b(0x525)+'start'+'.','SjNRB':function(_0x3816aa,_0x297e69){return _0x3816aa+_0x297e69;},'nEscH':function(_0x403e68,_0x2ab27c){return _0x403e68+_0x2ab27c;},'txeLC':_0x1c650b(0x2f5)+_0x1c650b(0x56c)+'o\x20a\x20t'+_0x1c650b(0x5ef)+_0x1c650b(0x1ae)+_0x1c650b(0x515)+_0x1c650b(0x54f)+_0x1c650b(0x19c)+'ne.\x20T'+'he\x20si'+'gnatu'+_0x1c650b(0x2e7),'bXHuF':_0x1c650b(0x35b)+_0x1c650b(0x290)+_0x1c650b(0xf5)+_0x1c650b(0x1f6)+_0x1c650b(0x2d9)+'id\x20do'+'es\x20no'+'t\x20mat'+_0x1c650b(0x4f2)+_0x1c650b(0x34c)+_0x1c650b(0x652),'XKspE':function(_0xcb0732,_0x1641f9){return _0xcb0732>_0x1641f9;},'wVJTD':_0x1c650b(0x280),'haGEJ':function(_0x1ec84f,_0x58b3b9){return _0x1ec84f+_0x58b3b9;},'hflpp':function(_0x76b61,_0x4045c2){return _0x76b61+_0x4045c2;},'djagJ':_0x1c650b(0x67b)+_0x1c650b(0x672)+_0x1c650b(0x36e)+_0x1c650b(0x21e)+'captu'+_0x1c650b(0x653)+_0x1c650b(0x55b)+'n?):\x20','mWpET':function(_0x35a711,_0x13da76){return _0x35a711+_0x13da76;},'Ubhxo':function(_0x3660ab,_0x432fb3){return _0x3660ab+_0x432fb3;},'iOwKt':function(_0x558210,_0x5452c8){return _0x558210+_0x5452c8;},'RJKFq':function(_0x5ea93b,_0x3249cf){return _0x5ea93b+_0x3249cf;},'GenTZ':_0x1c650b(0x4fe),'MEIdq':_0x1c650b(0x252),'uzWIc':_0x1c650b(0x191),'nlVJH':_0x1c650b(0x695)+'ER\x20UW'+_0x1c650b(0x589)+'PY\x20TO'+_0x1c650b(0x423)+_0x1c650b(0x114)+'ndow.'+_0x1c650b(0x5da)+_0x1c650b(0xce)+_0x1c650b(0x172)+_0x1c650b(0x4c1)+_0x1c650b(0x50f)+_0x1c650b(0x316)+_0x1c650b(0x1cf)+'d\x20was'+'\x20','BnzwJ':'UTGMU','ybgtR':_0x1c650b(0xcc),'QkmnW':'messa'+'ge','EFquY':'DOMCo'+'ntent'+_0x1c650b(0x5a8)+'d','oVMwe':_0x1c650b(0x38b)+'nNetw'+_0x1c650b(0x472)+'nc','fGdSI':'NPC_C'+_0x1c650b(0x2f8)+'ler','mGGIJ':_0x1c650b(0x41d)+_0x1c650b(0x681),'biFWW':_0x1c650b(0x101)+_0x1c650b(0x67d)+_0x1c650b(0x57b)+_0x1c650b(0x68f),'JwxcE':'Assem'+_0x1c650b(0x67d)+_0x1c650b(0x57b)+_0x1c650b(0x278)+'tpass'+_0x1c650b(0x68f),'WSBvZ':_0x1c650b(0x561)+_0x1c650b(0x471)+'ge.De'+_0x1c650b(0x2d6)+'ll','LnSGO':'cInpu'+_0x1c650b(0x5ab),'GtMGJ':_0x1c650b(0x2ea),'LeGuR':'photo'+_0x1c650b(0x2a2),'MJZJb':_0x1c650b(0xf6),'jbAyY':_0x1c650b(0x4e9),'XQsXj':'fps','yIHIv':_0x1c650b(0x656),'WeyHd':_0x1c650b(0x366)+'le','qOhwZ':'0xb4','slroh':'0xd0','bQals':_0x1c650b(0x605)+_0x1c650b(0x53a)};var _0x162860=location[_0x1c650b(0x4c5)+_0x1c650b(0x454)]||'',_0x903add=/(^|\.)www\.crazygames\.com$/['test'](_0x162860),_0x18f671=/(^|\.)games\.crazygames\.com$/[_0x1c650b(0x5d1)](_0x162860),_0x54143c=/(^|\.)crazygames\.com$/['test'](_0x162860)&&!_0x903add&&!_0x18f671,_0x463f96=_0x903add?'porta'+'l':_0x18f671?_0x1c650b(0x312)+'er':'playe'+'r';if(!_0x903add&&!_0x18f671&&!_0x54143c)return;var _0x2ca8b4=_0x1c650b(0x4fa)+'b1',_0x311656=_0x1c650b(0x523)+_0x1c650b(0x149)+_0x1c650b(0x43a),_0x20760a=_0x1c650b(0x1e1)+_0x1c650b(0x213)+_0x1c650b(0x195)+_0x1c650b(0x697)+'BEGIN'+_0x1c650b(0x541),_0x502ba1=_0x1c650b(0x1e1)+'KURA-'+_0x1c650b(0x195)+'WARZ-'+_0x1c650b(0x338)+'=',_0x17730e=_0x3d7f39[_0x1c650b(0x37d)];if(_0x18f671){if('UDNEM'===_0x1c650b(0x474)){window[_0x1c650b(0xfc)+_0x1c650b(0x544)+_0x1c650b(0x127)+'r'](_0x3d7f39['QkmnW'],function(_0x23ac72){var _0x1c6ae2=_0x1c650b,_0x28df5b={'vzzul':function(_0x55af36,_0x4892b0){var _0x1ee2a0=_0x36a4;return _0x3d7f39[_0x1ee2a0(0x42c)](_0x55af36,_0x4892b0);},'Wtdta':function(_0x5501d0,_0x28c3e4,_0x4b1813,_0x4ea086){return _0x3d7f39['xNcmQ'](_0x5501d0,_0x28c3e4,_0x4b1813,_0x4ea086);}},_0x4af903=_0x23ac72['data'];if(!_0x4af903||_0x4af903['__sak'+_0x1c6ae2(0xfe)]!==_0x311656)return;try{if(window[_0x1c6ae2(0x60c)+'t']&&window['paren'+'t']!==window)window['paren'+'t'][_0x1c6ae2(0x3cb)+_0x1c6ae2(0x239)+'e'](_0x4af903,'*');if(window[_0x1c6ae2(0x1f7)]&&window[_0x1c6ae2(0x1f7)]!==window)window['top'][_0x1c6ae2(0x3cb)+_0x1c6ae2(0x239)+'e'](_0x4af903,'*');}catch(_0x1d6d50){}if(_0x4af903&&_0x3d7f39['GIRqt'](_0x4af903[_0x1c6ae2(0x4ee)],'cmd')){if('bGCdz'!=='bGCdz')_0x446bb3=_0x3d7f39[_0x1c6ae2(0x25d)](_0x3d7f39[_0x1c6ae2(0x25d)]('hooks'+'\x20arme'+_0x1c6ae2(0x2b9),_0x3601d8),'s'),_0x44affa=_0x3d7f39[_0x1c6ae2(0xc1)];else try{var _0x3c85be=document['query'+'Selec'+'torAl'+'l'](_0x3d7f39['IAktb']);for(var _0x355e88=0x235f*-0x1+0x1123+0x2*0x91e;_0x355e88<_0x3c85be[_0x1c6ae2(0x63e)+'h'];_0x355e88++){try{if(_0x3d7f39['HKViv']('JiiUd','oYwDt')){if(_0x3c85be[_0x355e88]['conte'+'ntWin'+_0x1c6ae2(0x60a)])_0x3c85be[_0x355e88]['conte'+'ntWin'+'dow'][_0x1c6ae2(0x3cb)+'essag'+'e'](_0x4af903,'*');}else{var _0x1143ae=_0x28df5b[_0x1c6ae2(0x63d)](_0x3a5080,'v2')?-0x123+-0xa08+-0xb2d*-0x1:_0x28df5b[_0x1c6ae2(0x63d)](_0x504f60,'v3')?-0x2*0xf1a+-0xb6e+0x29a5:-0x237e+0x3ec*0x5+-0xb*-0x172,_0x38fc2c=_0x28df5b[_0x1c6ae2(0x19a)](_0x3dab9f,_0x36432e['ptr'],_0x250b9b,_0x1143ae);_0x38fc2c&&(_0x333c05[_0x1c6ae2(0x5d8)]=_0x38fc2c,_0x6d90c1['v']=_0x38fc2c[-0x3da+0x1*0xc12+-0x838]);}}catch(_0x11ee77){}}}catch(_0x768f40){}}}),console[_0x1c650b(0x2cc)]('%c[sa'+_0x1c650b(0x24b)+'\x20SW-W'+'RAPPE'+'R\x20ACT'+'IVE\x20('+'relay'+'\x20up+d'+'own)',_0x3d7f39['ntBXI'](_0x1c650b(0x637)+':',_0x2ca8b4));return;}else return _0x3d7f39[_0x1c650b(0x42c)](_0x50121a[_0x1c650b(0x265)],_0x53ed57);}if(_0x903add){console['log']('%c[sa'+_0x1c650b(0x24b)+_0x1c650b(0x2f3)+_0x1c650b(0x57c)+'TIVE',_0x3d7f39['LOKGe']('color'+':',_0x2ca8b4)+_0x3d7f39[_0x1c650b(0x3f1)],{'host':_0x162860});var _0x14b7b4={'set':function(){},'command':function(){}};function _0x54ebd2(_0x1298ab,_0x2fea42){var _0x441470=_0x1c650b,_0x40a78e={'uLsKE':function(_0x4de7d1,_0x163e12){return _0x4de7d1>_0x163e12;},'dyzFH':function(_0x1a494a,_0x232ed2){return _0x3d7f39['qFyta'](_0x1a494a,_0x232ed2);},'ToaKg':_0x441470(0x464)+_0x441470(0x147)+_0x441470(0x31b)+_0x441470(0x18b)+'s.mem'+_0x441470(0x1f8),'hqCrh':function(_0x3842bb,_0x16e3c5){return _0x3842bb===_0x16e3c5;}},_0x50d4ab={'__sakura':_0x311656,'kind':_0x441470(0xc0),'cmd':_0x1298ab,'arg':_0x2fea42};try{var _0x384493=document[_0x441470(0x293)+'Selec'+'torAl'+'l']('ifram'+'e');for(var _0x4d5e0f=0x2d*0xb+0xa71+-0xc60;_0x4d5e0f<_0x384493[_0x441470(0x63e)+'h'];_0x4d5e0f++){if(_0x3d7f39[_0x441470(0x526)]('CeSpY',_0x3d7f39[_0x441470(0xd2)])){var _0x3d7875=_0x1c4908(_0x12c38a,_0x3078f8,_0x127a5f);if(!_0x3d7875)return null;_0x3d7875['o']=_0x2bc535,_0x3d7875['k']=_0x2d4d0c;var _0x147035=_0x306d57([_0x3d7875]);if(!_0x147035['rows'][_0x441470(0x63e)+'h'])return null;return _0x147035[_0x441470(0x305)][-0x2571+0x1c77+-0x2*-0x47d];}else try{if(_0x384493[_0x4d5e0f][_0x441470(0x21c)+_0x441470(0x58f)+'dow'])_0x384493[_0x4d5e0f][_0x441470(0x21c)+_0x441470(0x58f)+'dow']['postM'+_0x441470(0x239)+'e'](_0x50d4ab,'*');}catch(_0x329909){}}}catch(_0xd83dbb){}try{var _0x236b52=new BroadcastChannel(_0x3d7f39['tvqkQ']);_0x236b52[_0x441470(0x3cb)+_0x441470(0x239)+'e'](_0x50d4ab),setTimeout(function(){var _0x4f9818=_0x441470,_0x28a10c={'aDyTA':function(_0x5e78be,_0x40d887){var _0x4b21e6=_0x36a4;return _0x40a78e[_0x4b21e6(0x3d4)](_0x5e78be,_0x40d887);},'THmsw':function(_0x7c1a00,_0x56be97){return _0x7c1a00+_0x56be97;},'bQfvk':function(_0x33bb7c,_0x2a2328){return _0x33bb7c+_0x2a2328;},'vfBgT':function(_0x26a92b,_0x2db12c){return _0x40a78e['dyzFH'](_0x26a92b,_0x2db12c);},'eIAwd':'\x20\x20cam'+'\x20','qTHiC':_0x4f9818(0x4ac)+'emies'+_0x4f9818(0x24a)+_0x4f9818(0x6a1)+'y?)\x20\x20'+_0x4f9818(0x17c),'aZGrd':_0x4f9818(0x5bd)+'a8','uAwHu':'#8d7a'+'99','NfxZQ':_0x40a78e['ToaKg']};if(_0x40a78e['hqCrh'](_0x4f9818(0xdc),'HPTeo'))_0x121541['textC'+_0x4f9818(0x3d7)+'t']=_0x28a10c[_0x4f9818(0x567)](_0x2a8415,-0x1*-0x1c57+0x11d*-0x6+-0x15a9)?_0x28a10c['THmsw'](_0x4f9818(0x59e)+'RS\x20',_0x3109b7)+(_0x226183?_0x28a10c['bQfvk'](_0x28a10c[_0x4f9818(0x47e)](_0x4f9818(0x282),_0x5bb685),_0x4f9818(0x3a4)):'')+(_0x42bce6&&_0x18bf2d['camer'+'a']?_0x28a10c[_0x4f9818(0x1eb)]+_0x4f0db2[_0x4f9818(0x216)+'aFrom']:_0x4f9818(0xcb)+'\x20-'):_0x28a10c['qTHiC']+(_0x5c2613&&_0x4de0ab['camer'+'a']?_0x59b532[_0x4f9818(0x216)+'aFrom']:'-'),_0x4934bc['style']['color']=_0x532288>-0x18c4+-0x491*0x3+0x2677?_0x28a10c['aZGrd']:_0x28a10c[_0x4f9818(0x26e)];else try{if('gokmM'!==_0x4f9818(0x2fc))return _0x53678e[_0x4f9818(0x111)+'e']=_0x4d5c0a[_0x4f9818(0x111)+'e']||_0x28a10c[_0x4f9818(0x15c)],new _0x5a0af9(_0x3cda83['buffe'+'r']);else _0x236b52['close']();}catch(_0x38b5a9){}},-0x11a7*0x2+0x4a*-0x16+0x2aa4);}catch(_0x8ad4cf){}}var _0x19cd0f='sakur'+'a-sw-'+'panel'+_0x1c650b(0x14c)+'en';function _0x649500(){var _0x4f4442=_0x1c650b;try{if(_0x3d7f39['tBCYx']!=='iTdac')return localStorage['getIt'+'em'](_0x19cd0f)==='1';else{var _0x1f4ac2=_0x5d7897['hookP'+'refix']({'typeName':_0x57c40b[_0x4f4442(0x265)],'methodName':_0x4f4442(0x16e)+'e','params':[_0x3d7f39['LhkTR'],_0x3d7f39['LhkTR']],'returnType':_0x4fbb36},_0x3d7f39['mFnqI'](_0x8d4d5c,_0x1898d7[_0x4f4442(0x265)],_0x1f1d5d['keep'],_0x22841a[_0x4f4442(0xa2)]));_0x22bd50[_0x4f4442(0x17a)]({'type':_0x55a04c[_0x4f4442(0x265)],'hook':_0x1f4ac2,'keep':_0x501c5a['keep']});}}catch(_0x4db810){return![];}}function _0x454d81(_0x1ae5bd){var _0x5c4b13=_0x1c650b,_0x358c7c={'yRDGS':'4|3|0'+'|2|1','NJjmv':_0x5c4b13(0xd3)+'f5','mMJqZ':_0x5c4b13(0x607)+'\x20off','gPIHO':function(_0x18e50f){var _0x180613=_0x5c4b13;return _0x3d7f39[_0x180613(0x573)](_0x18e50f);},'cbcAX':function(_0x3151ee,_0x18421c,_0x6c1d3f){return _0x3151ee(_0x18421c,_0x6c1d3f);},'ChPNy':function(_0x1650ad,_0x2416e4){return _0x1650ad(_0x2416e4);},'clpeW':function(_0x3f791f){return _0x3f791f();}};try{if('BZgsL'!==_0x5c4b13(0x549))_0x1ae5bd?localStorage[_0x5c4b13(0x1ca)+'em'](_0x19cd0f,'1'):localStorage['remov'+_0x5c4b13(0x153)](_0x19cd0f);else{var _0x45fb39=_0x358c7c[_0x5c4b13(0x27d)][_0x5c4b13(0x595)]('|'),_0x49229d=0x1*0x1c6a+-0x1782+-0x4e8;while(!![]){switch(_0x45fb39[_0x49229d++]){case'0':_0x4254ad['style'][_0x5c4b13(0x393)+'round']=_0xb63693?_0x2ffc58:_0x5c4b13(0x605)+_0x5c4b13(0x60c)+'t';continue;case'1':_0x1379e4&&_0x322942['speed']['facto'+'r']&&(_0x4086a4[_0x5c4b13(0x514)+_0x5c4b13(0x3d7)+'t']=_0xd5f9e3(_0x362e54['speed'][_0x5c4b13(0x1fd)+'r'])[_0x5c4b13(0x384)+'ed'](-0x8*0x2c4+-0x4a2*-0x7+-0xa4d)+'x');continue;case'2':_0x8763f2['style'][_0x5c4b13(0x637)]=_0x5457c3?_0x5c4b13(0x334)+'1b':_0x358c7c['NJjmv'];continue;case'3':_0x54e88b[_0x5c4b13(0x514)+'onten'+'t']=_0x376329?'Speed'+_0x5c4b13(0x249):_0x358c7c[_0x5c4b13(0x3f7)];continue;case'4':_0x220cc9=!!_0x2b374c['speed']['on'];continue;}break;}}}catch(_0x36522a){}try{var _0x1c6b8d=document[_0x5c4b13(0x333)+_0x5c4b13(0x16d)+'ById'](_0x5c4b13(0xe1)+_0x5c4b13(0x24e)+'v2');if(_0x1c6b8d)_0x1c6b8d['remov'+'e']();}catch(_0x590179){}try{var _0x316d33=document[_0x5c4b13(0x333)+_0x5c4b13(0x16d)+_0x5c4b13(0x4ad)](_0x5c4b13(0xe1)+_0x5c4b13(0x24e)+_0x5c4b13(0x53d)+'b');if(_0x1ae5bd&&!_0x316d33&&document['body']){if(_0x3d7f39['KyUcy']!=='ZLhJa'){var _0x4608ef=document[_0x5c4b13(0x33b)+'eElem'+_0x5c4b13(0x12d)](_0x3d7f39['PPKhT']);_0x4608ef['id']=_0x5c4b13(0xe1)+'a-sw-'+_0x5c4b13(0x53d)+'b',_0x4608ef[_0x5c4b13(0x4a5)][_0x5c4b13(0x214)+'xt']=_0x3d7f39[_0x5c4b13(0x1b1)](_0x3d7f39['LnjuL']+(_0x5c4b13(0x393)+'round'+_0x5c4b13(0x5b6)+_0x5c4b13(0x590)+_0x5c4b13(0x1a4)+_0x5c4b13(0x3e2)+_0x5c4b13(0xb2)+':1px\x20'+_0x5c4b13(0x691)+_0x5c4b13(0x570)+_0x5c4b13(0x164)+'143,1'+_0x5c4b13(0x292)+');col'+_0x5c4b13(0x30a))+_0x2ca8b4+';',_0x5c4b13(0xbb)+_0x5c4b13(0x21a)+_0x5c4b13(0x2b5)+'99px;'+'paddi'+_0x5c4b13(0x253)+_0x5c4b13(0x56f)+_0x5c4b13(0x3e6)+'t:11p'+'x/1.4'+'\x20ui-m'+_0x5c4b13(0x67f)+_0x5c4b13(0x53f)+_0x5c4b13(0x543)+'as,mo'+_0x5c4b13(0xe8)+_0x5c4b13(0x451)),_0x4608ef[_0x5c4b13(0x514)+_0x5c4b13(0x3d7)+'t']=_0x5c4b13(0xe1)+'a',_0x4608ef[_0x5c4b13(0xea)+'ck']=function(){var _0x364c45=_0x5c4b13;_0x454d81(![]),_0x358c7c[_0x364c45(0x343)](_0x974d8a);},document['body'][_0x5c4b13(0x188)+_0x5c4b13(0x66d)+'d'](_0x4608ef);}else{_0x475099[_0x5c4b13(0x30f)+'ntDef'+_0x5c4b13(0x360)](),_0x358c7c['cbcAX'](_0x2b74b3,!_0x579664['on'],_0x5cb6ff[_0x5c4b13(0x1fd)+'r']);return;}}else!_0x1ae5bd&&_0x316d33&&(_0x5c4b13(0x362)!=='yvBSM'?(_0x358c7c['ChPNy'](_0x168336,![]),_0x358c7c[_0x5c4b13(0x1ed)](_0x372cfc)):_0x316d33[_0x5c4b13(0xdf)+'e']());}catch(_0x29b3f5){}}function _0x59db05(){var _0x5e3dc9=_0x1c650b,_0x2dad8f={'Hhdya':function(_0x1c9d13,_0x378b89){var _0x1facf0=_0x36a4;return _0x3d7f39[_0x1facf0(0x25d)](_0x1c9d13,_0x378b89);},'RKzdI':function(_0x419744,_0x585dbb){return _0x419744<_0x585dbb;},'mqtRV':function(_0x2e0f19,_0x2b636f){return _0x3d7f39['UTlqW'](_0x2e0f19,_0x2b636f);}};if(_0x5e3dc9(0x583)===_0x5e3dc9(0x583)){var _0x102318=_0x3d7f39['SpzSb']['split']('|'),_0x43a2ae=-0x1f63*0x1+0x1afa+0x1*0x469;while(!![]){switch(_0x102318[_0x43a2ae++]){case'0':try{var _0x438714=_0x3d7f39['RdwKg']['split']('|'),_0x20a033=0x136*-0x17+0x3a1*0x4+0xd56;while(!![]){switch(_0x438714[_0x20a033++]){case'0':_0x236e1f['id']=_0x5e3dc9(0xe1)+'a-sw-'+'v2';continue;case'1':document[_0x5e3dc9(0x482)]['appen'+'dChil'+'d'](_0x236e1f);continue;case'2':_0x236e1f=document[_0x5e3dc9(0x33b)+_0x5e3dc9(0x670)+_0x5e3dc9(0x12d)](_0x3d7f39[_0x5e3dc9(0x289)]);continue;case'3':if(!document[_0x5e3dc9(0x333)+_0x5e3dc9(0x16d)+'ById'](_0x5e3dc9(0xe1)+_0x5e3dc9(0x24e)+'v2-cs'+'s')){var _0x2f18b4=document['creat'+_0x5e3dc9(0x670)+_0x5e3dc9(0x12d)](_0x3d7f39[_0x5e3dc9(0x6a2)]);_0x2f18b4['id']=_0x3d7f39['GHnXN'],_0x2f18b4['textC'+_0x5e3dc9(0x3d7)+'t']=_0x3d7f39[_0x5e3dc9(0x3ff)],(document['head']||document[_0x5e3dc9(0x5b3)+'entEl'+_0x5e3dc9(0x16d)])[_0x5e3dc9(0x188)+'dChil'+'d'](_0x2f18b4);}continue;case'4':return _0x236e1f;}break;}}catch(_0x400d4f){return null;}continue;case'1':if(_0x649500())return null;continue;case'2':if(!document['body']||!document[_0x5e3dc9(0x482)][_0x5e3dc9(0x188)+'dChil'+'d'])return null;continue;case'3':var _0x236e1f=document[_0x5e3dc9(0x333)+_0x5e3dc9(0x16d)+_0x5e3dc9(0x4ad)](_0x3d7f39[_0x5e3dc9(0x35a)]);continue;case'4':if(_0x236e1f)return _0x236e1f;continue;}break;}}else{var _0x263c67=_0x19d58d();if(!_0x263c67)return null;if(_0x201017<-0x13c2+-0x1d7e+0x314*0x10||_0x2dad8f[_0x5e3dc9(0x401)](_0x40008c,_0x5dfcdc*(-0xa7b+-0x28c*0xb+0x1*0x2683))>_0x263c67[_0x5e3dc9(0x152)+'ength'])return null;var _0x357bc1=[];for(var _0x13c6c1=-0x21d7+-0x1d5a+0x7*0x907;_0x2dad8f['RKzdI'](_0x13c6c1,_0x46b949);_0x13c6c1++)_0x357bc1[_0x5e3dc9(0x17a)](_0x263c67[_0x5e3dc9(0x2f7)+'oat32'](_0x1bce38+_0x56c5d5+_0x2dad8f['mqtRV'](_0x13c6c1,-0x15b2+-0x2221+0x37d7),!![]));return _0x1a70b1['ok']+=_0x4c509b,_0x357bc1;}}function _0x974d8a(){var _0x2e533c=_0x1c650b,_0x3611c9=_0x59db05();if(!_0x3611c9)return _0x14b7b4;if(_0x3611c9[_0x2e533c(0x62b)+'et'][_0x2e533c(0x1c3)])return _0x3611c9[_0x2e533c(0x1c3)];try{return _0x1323c3(_0x3611c9);}catch(_0x2ddc32){return _0x3611c9['datas'+'et'][_0x2e533c(0x1c3)]='1',_0x3611c9[_0x2e533c(0x1c3)]=_0x14b7b4,console[_0x2e533c(0xb7)](_0x3d7f39[_0x2e533c(0x112)],_0x3d7f39[_0x2e533c(0x426)](_0x2e533c(0x637)+':',_0x2ca8b4),_0x2ddc32),_0x14b7b4;}}function _0x1323c3(_0x26aa14){var _0x42573c=_0x1c650b,_0x15b1f8={'MLahY':function(_0x16a061){return _0x16a061();},'JuQWe':function(_0x14096a,_0x5bbc4f){return _0x14096a===_0x5bbc4f;},'tYCKo':_0x42573c(0x47d),'DIJVB':function(_0x3a946a,_0x22b8ff){return _0x3d7f39['GHjcw'](_0x3a946a,_0x22b8ff);},'oaByZ':function(_0x4ff369,_0x21b557){var _0x334a9d=_0x42573c;return _0x3d7f39[_0x334a9d(0x43f)](_0x4ff369,_0x21b557);},'oXUFg':_0x42573c(0x527)+'t','uTQxf':_0x3d7f39['IAktb'],'KJpSM':'0|3|5'+_0x42573c(0x2f4)+'2','GvMAl':_0x3d7f39[_0x42573c(0x4c2)],'JdgsT':_0x3d7f39[_0x42573c(0x5af)],'LTaAc':_0x3d7f39['CKMUR'],'LvnNY':_0x3d7f39[_0x42573c(0x189)],'khPcn':_0x42573c(0x5ed)+_0x42573c(0xa1)+_0x42573c(0x90),'jVbDH':_0x42573c(0x1b9)+'74','quWYY':function(_0x3a92e2,_0x299d52){return _0x3d7f39['CbyeS'](_0x3a92e2,_0x299d52);},'EiTeP':function(_0x29e415,_0x5951fd){var _0x69118a=_0x42573c;return _0x3d7f39[_0x69118a(0x37e)](_0x29e415,_0x5951fd);},'inFfX':_0x42573c(0x2b4)+_0x42573c(0xf8)+'\x20','gjBVR':function(_0x1e920e,_0x27038f){return _0x1e920e>_0x27038f;},'OCjgL':_0x3d7f39[_0x42573c(0x2b3)],'CBOAQ':_0x42573c(0x538)+'8a','UnWeg':'APivS','ixndF':function(_0x476d4f,_0xd8a275){return _0x476d4f+_0xd8a275;},'eKnoX':_0x3d7f39['zKuPY'],'VBecu':_0x42573c(0x28c),'gNCSN':_0x3d7f39['EVIbt'],'zgkuL':'trans'+_0x42573c(0x60c)+'t','TodBu':_0x3d7f39['WfdTl'],'Revco':_0x3d7f39['ZqNtH'],'xRWdY':_0x3d7f39['fCtOP'],'tfNKw':_0x3d7f39['bcLof']};_0x26aa14[_0x42573c(0x4a5)][_0x42573c(0x214)+'xt']=_0x3d7f39['NyMJi'](_0x3d7f39['CJUnU']+_0x3d7f39[_0x42573c(0x33f)]+_0x3d7f39[_0x42573c(0x61d)],_0x42573c(0x498)+_0x42573c(0x236)+_0x42573c(0x129)+_0x42573c(0x165)+_0x42573c(0x4fb)+_0x42573c(0xa9)+_0x42573c(0x4f5)+'overf'+_0x42573c(0x627)+_0x42573c(0x131)+';'),_0x26aa14['inner'+_0x42573c(0x443)]=_0x3d7f39[_0x42573c(0x426)](_0x3d7f39[_0x42573c(0x37e)](_0x3d7f39['Jjyrr'](_0x3d7f39[_0x42573c(0x37e)](_0x3d7f39[_0x42573c(0x43f)](_0x3d7f39[_0x42573c(0x264)](_0x3d7f39['xkWrL'](_0x3d7f39['dOwit'],_0x42573c(0x3a7)+_0x42573c(0x506)+'color'+':'),_0x2ca8b4),_0x42573c(0x1c4)+'ura\x20·'+_0x42573c(0x626)+_0x42573c(0x22a)+'</b>'),_0x3d7f39[_0x42573c(0x2a6)])+('<span'+_0x42573c(0x21b)+_0x42573c(0xb1)+'tatus'+'\x22\x20sty'+_0x42573c(0x160)+_0x42573c(0x2a7)+'#bda9'+_0x42573c(0x254)+_0x42573c(0x3f9)+_0x42573c(0xba)+_0x42573c(0x531)+_0x42573c(0x66f)+_0x42573c(0x5c1)+_0x42573c(0x625)),_0x3d7f39['KZfyq']),_0x2ca8b4)+(_0x42573c(0x2e4)+'er:0;'+'color'+':#2a0'+_0x42573c(0x65c)+_0x42573c(0xb2)+_0x42573c(0x259)+'us:7p'+'x;pad'+'ding:'+'4px\x201'+_0x42573c(0x1cd)+_0x42573c(0x660)+'eight'+':700;'+_0x42573c(0x210)+_0x42573c(0x2ce)+_0x42573c(0x676)+'\x22>Cop'+_0x42573c(0x20c)+_0x42573c(0x65b)+_0x42573c(0x294))+_0x3d7f39[_0x42573c(0x584)]+('<butt'+_0x42573c(0x19d)+'=\x22sw2'+'-x\x22\x20s'+_0x42573c(0x4f4)+_0x42573c(0x4ba)+_0x42573c(0x3fe)+_0x42573c(0x39d)+'nspar'+'ent;b'+_0x42573c(0xb2)+':1px\x20'+'solid'+_0x42573c(0x570)+_0x42573c(0x164)+_0x42573c(0x689)+_0x42573c(0x4a4)+');col'+_0x42573c(0x662)+_0x42573c(0x185)+';bord'+_0x42573c(0xe7)+_0x42573c(0x229)+'7px;p'+'addin'+'g:4px'+'\x208px;'+'curso'+_0x42573c(0x2ce)+_0x42573c(0x676)+_0x42573c(0x41e)+'butto'+'n>')+(_0x42573c(0x5d4)+'>')+_0x3d7f39[_0x42573c(0x4f8)],_0x3d7f39['Xctby'])+(_0x42573c(0x2ad)+'on\x20id'+_0x42573c(0x610)+'-spee'+_0x42573c(0xd1)+'yle=\x22'+'backg'+'round'+_0x42573c(0x27c)+_0x42573c(0x3c4)+_0x42573c(0x318)+'rder:'+_0x42573c(0x65e)+_0x42573c(0x3cd)+'rgba('+_0x42573c(0x1bc)+_0x42573c(0x310)+'7,.4)'+_0x42573c(0x490)+'r:#f7'+_0x42573c(0x1d2)+_0x42573c(0xbb)+_0x42573c(0x21a)+_0x42573c(0x1f1)+_0x42573c(0x1ce)+_0x42573c(0x4c8)+_0x42573c(0x5e8)+'10px;'+'curso'+'r:poi'+'nter;'+'\x22>Spe'+_0x42573c(0x268)+'f</bu'+'tton>')+(_0x42573c(0x1c2)+'t\x20id='+'\x22sw2-'+'facto'+_0x42573c(0x587)+'pe=\x22r'+'ange\x22'+'\x20min='+_0x42573c(0x5a5)+'ax=\x225'+_0x42573c(0xa5)+'p=\x220.'+'1\x22\x20va'+_0x42573c(0x493)+_0x42573c(0x328)+'yle=\x22'+'width'+':120p'+'x;acc'+'ent-c'+'olor:')+_0x2ca8b4+_0x42573c(0x226)+_0x3d7f39['FcAni']+(_0x42573c(0x2ad)+_0x42573c(0x19d)+_0x42573c(0x610)+_0x42573c(0xa7)+'\x22\x20sty'+_0x42573c(0x33e)+'ackgr'+'ound:'+'trans'+'paren'+_0x42573c(0x233)+_0x42573c(0x4d1)+_0x42573c(0x4d9)+_0x42573c(0x668)+'gba(2'+'55,14'+_0x42573c(0x10b)+',.4);'+_0x42573c(0x637)+':#f7e'+_0x42573c(0x186)+'order'+'-radi'+_0x42573c(0x34d)+_0x42573c(0x50d)+_0x42573c(0x31d)+'4px\x209'+'px;cu'+_0x42573c(0x55d)+'point'+_0x42573c(0x17b)+'Snaps'+_0x42573c(0x3c7)+'F9)</'+_0x42573c(0x10f)+'n>')+('<span'+_0x42573c(0x21b)+'sw2-h'+_0x42573c(0x1a1)+'style'+_0x42573c(0x415)+_0x42573c(0x3c3)+_0x42573c(0x690)+_0x42573c(0x505)+_0x42573c(0x540)+_0x42573c(0x68c)+_0x42573c(0x41c)+_0x42573c(0x202)+'/\x20spr'+'intin'+'g\x20/\x20j'+_0x42573c(0x1a8)+'g\x20mar'+_0x42573c(0x35f)+'ich\x20f'+'ield\x20'+_0x42573c(0x1ba)+'ich.<'+_0x42573c(0x440)+'>')+(_0x42573c(0x5d4)+'>')+_0x3d7f39[_0x42573c(0x435)]+_0x3d7f39['SSBoU']+_0x3d7f39[_0x42573c(0x1b4)];var _0x14eacf=_0x26aa14[_0x42573c(0x293)+'Selec'+_0x42573c(0x21f)](_0x42573c(0x3e8)+_0x42573c(0x58a)+'s'),_0xf99cac=_0x26aa14['query'+_0x42573c(0x3ab)+_0x42573c(0x21f)]('#sw2-'+'build'),_0x4e30cd=_0x26aa14[_0x42573c(0x293)+'Selec'+'tor'](_0x3d7f39[_0x42573c(0x51a)]),_0xef6be4=_0x26aa14['query'+_0x42573c(0x3ab)+'tor'](_0x3d7f39[_0x42573c(0x7b)]),_0x2c0db7=_0x26aa14[_0x42573c(0x293)+'Selec'+_0x42573c(0x21f)](_0x42573c(0x3e8)+'x'),_0x7f62c3=_0x26aa14[_0x42573c(0x293)+'Selec'+'tor'](_0x42573c(0x3e8)+_0x42573c(0x1ec)+'e'),_0x2ebdbd=_0x26aa14['query'+_0x42573c(0x3ab)+'tor']('#sw2-'+'body'),_0x10e930=_0x26aa14['query'+_0x42573c(0x3ab)+_0x42573c(0x21f)]('#sw2-'+_0x42573c(0x630)),_0x15e554=_0x26aa14['query'+_0x42573c(0x3ab)+_0x42573c(0x21f)](_0x42573c(0x3e8)+'speed'),_0x3de14b=_0x26aa14[_0x42573c(0x293)+_0x42573c(0x3ab)+_0x42573c(0x21f)](_0x3d7f39[_0x42573c(0x59c)]),_0x370f08=_0x26aa14[_0x42573c(0x293)+_0x42573c(0x3ab)+_0x42573c(0x21f)](_0x3d7f39['uORZl']),_0x295751=_0x26aa14['query'+_0x42573c(0x3ab)+'tor'](_0x3d7f39['lqSxg']),_0xc52e70=null,_0x1a7184=![];function _0x1e24aa(){var _0x3482aa=_0x42573c;if(_0x3d7f39[_0x3482aa(0x502)]!==_0x3d7f39[_0x3482aa(0x502)])_0x2a6714();else{if(_0x2ebdbd)_0x2ebdbd['style']['displ'+'ay']=_0x1a7184?'':'none';if(_0x7f62c3)_0x7f62c3['textC'+_0x3482aa(0x3d7)+'t']=_0x1a7184?_0x3d7f39['kKZLe']:_0x3482aa(0x199);_0x26aa14[_0x3482aa(0x4a5)][_0x3482aa(0x3c6)]=_0x1a7184?'min(5'+'2vw,6'+'20px)':'auto',_0x26aa14[_0x3482aa(0x4a5)]['backg'+_0x3482aa(0x452)]=_0x1a7184?'#150c'+'1d':_0x3482aa(0x5bf)+_0x3482aa(0x115)+_0x3482aa(0x193)+'9)';}}if(_0x7f62c3)_0x7f62c3[_0x42573c(0xea)+'ck']=function(){_0x1a7184=!_0x1a7184,_0x15b1f8['MLahY'](_0x1e24aa);};_0x3d7f39['lDgqY'](_0x1e24aa);if(_0x2c0db7)_0x2c0db7['oncli'+'ck']=function(){var _0x4d64b4=_0x42573c;_0x3d7f39['PvkuX']!==_0x3d7f39[_0x4d64b4(0x3d1)]?_0x535567[_0x4d64b4(0xf2)]=_0x3124a2(_0x6cb1e&&_0x5cacdd['messa'+'ge']||_0x45c4e5):_0x3d7f39[_0x4d64b4(0x17e)](_0x454d81,!![]);};if(_0x10e930)_0x10e930[_0x42573c(0xea)+'ck']=function(){var _0x469a59=_0x42573c;if(_0x15b1f8['JuQWe'](_0x15b1f8[_0x469a59(0xef)],_0x15b1f8[_0x469a59(0xef)]))_0x54ebd2('snaps'+_0x469a59(0x40c));else{var _0x243ec7=0x1c8b+-0x33c+-0x194f;for(var _0x34d2ae=-0x25a3+0x1e47+-0x274*-0x3;_0x34d2ae<_0x437677[_0x469a59(0x63e)+'h'];_0x34d2ae++){if(_0xa133f9[_0x34d2ae][_0x469a59(0x138)]&&_0x276fd8[_0x34d2ae]['hook'][_0x469a59(0x4ec)+_0x469a59(0x4b8)]!==_0x257beb)_0x243ec7++;}return _0x243ec7;}};var _0x123ff8=![];function _0x435aad(){var _0x39584b=_0x42573c;_0x54ebd2(_0x39584b(0x2b2),{'on':_0x123ff8,'factor':_0x15b1f8['DIJVB'](parseFloat,_0x3de14b['value'])||0x1*0x7d6+-0x1*0x19e4+0x45*0x43});}if(_0x15e554)_0x15e554['oncli'+'ck']=function(){var _0x1fd27a=_0x42573c,_0x591838=_0x3d7f39['edovz'][_0x1fd27a(0x595)]('|'),_0x5ce1dc=0x118+-0x1*-0x28e+0x3a6*-0x1;while(!![]){switch(_0x591838[_0x5ce1dc++]){case'0':_0x435aad();continue;case'1':_0x15e554[_0x1fd27a(0x514)+_0x1fd27a(0x3d7)+'t']=_0x123ff8?_0x3d7f39['EVIbt']:_0x1fd27a(0x607)+_0x1fd27a(0xec);continue;case'2':_0x123ff8=!_0x123ff8;continue;case'3':_0x15e554['style'][_0x1fd27a(0x393)+_0x1fd27a(0x452)]=_0x123ff8?_0x2ca8b4:_0x1fd27a(0x605)+_0x1fd27a(0x60c)+'t';continue;case'4':_0x15e554['style']['color']=_0x123ff8?_0x3d7f39['ihFrb']:_0x3d7f39['wWeKP'];continue;}break;}};if(_0x3de14b)_0x3de14b[_0x42573c(0x437)+'ut']=function(){var _0x45629a=_0x42573c;if(_0x370f08)_0x370f08['textC'+_0x45629a(0x3d7)+'t']=_0x15b1f8[_0x45629a(0x23c)]((_0x15b1f8[_0x45629a(0x1fe)](parseFloat,_0x3de14b['value'])||0x6fb*0x1+-0x2412+0x26*0xc4)[_0x45629a(0x384)+'ed'](-0x1*-0x1f2e+0x1*0x1039+-0x2f66),'x');_0x435aad();};if(_0xef6be4)_0xef6be4[_0x42573c(0xea)+'ck']=function(){var _0x59d8bb=_0x42573c,_0x55daab={'MfECd':_0x15b1f8[_0x59d8bb(0x80)],'Ngvkd':_0x15b1f8[_0x59d8bb(0x18a)],'udXCH':_0x15b1f8[_0x59d8bb(0x521)],'OaEXE':function(_0x1551ca,_0xf39f44){return _0x1551ca+_0xf39f44;},'dqSyV':_0x59d8bb(0x283)+_0x59d8bb(0x31a)+_0x59d8bb(0x693)+'left:'+'12px;'+_0x59d8bb(0x40f)+_0x59d8bb(0x109)+'-inde'+'x:214'+_0x59d8bb(0x1d5)+_0x59d8bb(0x262)+_0x59d8bb(0x55d)+_0x59d8bb(0xa4)+'er;us'+'er-se'+'lect:'+_0x59d8bb(0xc2),'IBILH':function(_0x497c1b,_0xb38a79){return _0x497c1b!==_0xb38a79;},'KKUEs':_0x15b1f8[_0x59d8bb(0x201)],'oZjmI':_0x59d8bb(0x288)},_0x44bc80=_0x15b1f8[_0x59d8bb(0x23c)](_0x15b1f8[_0x59d8bb(0x23c)](_0x20760a+'\x0a',_0xc52e70?JSON['strin'+'gify'](_0xc52e70,null,0x1458+0x80*-0x7+-0x10d7):'')+'\x0a',_0x502ba1),_0x185cb8=function(){var _0x7e7766=_0x59d8bb;if(_0xef6be4)_0xef6be4['textC'+'onten'+'t']=_0x7e7766(0x679)+'d';};if(navigator['clipb'+_0x59d8bb(0x20a)]&&navigator[_0x59d8bb(0x167)+_0x59d8bb(0x20a)][_0x59d8bb(0x19f)+_0x59d8bb(0x299)]){if(_0x15b1f8['LTaAc']===_0x59d8bb(0x485))navigator[_0x59d8bb(0x167)+_0x59d8bb(0x20a)]['write'+_0x59d8bb(0x299)](_0x44bc80)['then'](_0x185cb8,function(){var _0x14d126=_0x59d8bb;if('uXbpY'==='igCYP'){var _0x1c7f9a=_0x1ca9bb['query'+_0x14d126(0x3ab)+_0x14d126(0x64c)+'l'](_0x55daab[_0x14d126(0x365)]);for(var _0x426535=0x1110+-0x3c5+-0xd4b;_0x426535<_0x1c7f9a[_0x14d126(0x63e)+'h'];_0x426535++){try{if(_0x1c7f9a[_0x426535]['conte'+'ntWin'+_0x14d126(0x60a)])_0x1c7f9a[_0x426535][_0x14d126(0x21c)+_0x14d126(0x58f)+'dow']['postM'+_0x14d126(0x239)+'e'](_0x6542c1,'*');}catch(_0x3d30f6){}}}else _0x3ef30e();});else{_0x162d97=_0x4020e2,_0x200281=[],_0x3f1f5d(_0x15b1f8['oXUFg'],{'report':_0x1ef29d()});return;}}else _0x3ef30e();function _0x3ef30e(){var _0x3ebfb9=_0x59d8bb,_0xed363b={'axXoc':_0x3ebfb9(0xe1)+'a-sw-'+'v2-ta'+'b','VNmRH':_0x55daab['Ngvkd'],'IhZgt':_0x55daab['udXCH'],'tWBIg':function(_0xddb21e,_0x4dddba){var _0x3a53ba=_0x3ebfb9;return _0x55daab[_0x3a53ba(0x5d5)](_0xddb21e,_0x4dddba);},'msriK':_0x55daab[_0x3ebfb9(0x67e)],'kvBPT':'backg'+_0x3ebfb9(0x452)+_0x3ebfb9(0x5b6)+'(21,1'+_0x3ebfb9(0x1a4)+'.9);b'+_0x3ebfb9(0xb2)+':1px\x20'+_0x3ebfb9(0x691)+_0x3ebfb9(0x570)+_0x3ebfb9(0x164)+'143,1'+'77,.5'+');col'+_0x3ebfb9(0x30a)};if(_0x55daab[_0x3ebfb9(0x597)](_0x55daab[_0x3ebfb9(0x547)],'LOOPL')){var _0x47bdf6={'eoytv':function(_0x48d246){return _0x48d246();}},_0x5e6434=_0x2cc15a[_0x3ebfb9(0x333)+_0x3ebfb9(0x16d)+_0x3ebfb9(0x4ad)](_0xed363b['axXoc']);if(_0x10ca43&&!_0x5e6434&&_0x4c05ab['body']){var _0x5db76a=_0xed363b[_0x3ebfb9(0x1a3)]['split']('|'),_0xe19e9c=0x7*0x14d+-0x154+-0x7c7;while(!![]){switch(_0x5db76a[_0xe19e9c++]){case'0':var _0x31c6e8=_0x36c85a[_0x3ebfb9(0x33b)+_0x3ebfb9(0x670)+'ent']('div');continue;case'1':_0x31c6e8['textC'+'onten'+'t']=_0xed363b['IhZgt'];continue;case'2':_0x18585b[_0x3ebfb9(0x482)]['appen'+'dChil'+'d'](_0x31c6e8);continue;case'3':_0x31c6e8['id']='sakur'+_0x3ebfb9(0x24e)+'v2-ta'+'b';continue;case'4':_0x31c6e8['oncli'+'ck']=function(){_0x2cac08(![]),_0x47bdf6['eoytv'](_0x392f32);};continue;case'5':_0x31c6e8[_0x3ebfb9(0x4a5)]['cssTe'+'xt']=_0xed363b['tWBIg'](_0xed363b[_0x3ebfb9(0xa0)](_0xed363b['msriK']+_0xed363b[_0x3ebfb9(0x2a5)],_0x259c3f)+';',_0x3ebfb9(0xbb)+_0x3ebfb9(0x21a)+'ius:9'+'99px;'+_0x3ebfb9(0xc7)+'ng:4p'+_0x3ebfb9(0x56f)+'x;fon'+'t:11p'+_0x3ebfb9(0x37c)+_0x3ebfb9(0x1f0)+_0x3ebfb9(0x67f)+_0x3ebfb9(0x53f)+'onsol'+_0x3ebfb9(0x4d7)+_0x3ebfb9(0xe8)+_0x3ebfb9(0x451));continue;}break;}}else!_0x330181&&_0x5e6434&&_0x5e6434[_0x3ebfb9(0xdf)+'e']();}else{var _0x3558ac=('0|4|5'+_0x3ebfb9(0x3e5)+'3|2')['split']('|'),_0x3a5c51=0x61*0x23+0x2*-0x102b+0x1313;while(!![]){switch(_0x3558ac[_0x3a5c51++]){case'0':var _0x45afe6=document[_0x3ebfb9(0x33b)+_0x3ebfb9(0x670)+_0x3ebfb9(0x12d)](_0x3ebfb9(0x484)+'rea');continue;case'1':_0x45afe6['selec'+'t']();continue;case'2':_0x45afe6[_0x3ebfb9(0xdf)+'e']();continue;case'3':try{document['execC'+'omman'+'d'](_0x55daab[_0x3ebfb9(0x2c4)]),_0x185cb8();}catch(_0xdae79d){}continue;case'4':_0x45afe6[_0x3ebfb9(0x5be)]=_0x44bc80;continue;case'5':if(!document[_0x3ebfb9(0x482)])return;continue;case'6':document[_0x3ebfb9(0x482)]['appen'+'dChil'+'d'](_0x45afe6);continue;}break;}}}};setTimeout(function(){var _0x1faeac=_0x42573c,_0x2f548e=_0x3d7f39[_0x1faeac(0x5e1)][_0x1faeac(0x595)]('|'),_0x1f700d=0x7*-0x1e7+0x26e9+-0x1998;while(!![]){switch(_0x2f548e[_0x1f700d++]){case'0':if(!_0x14eacf||!_0x4e30cd)return;continue;case'1':if(_0xc52e70)return;continue;case'2':_0x14eacf[_0x1faeac(0x4a5)]['color']=_0x3d7f39['FOZsF'];continue;case'3':_0x14eacf[_0x1faeac(0x514)+_0x1faeac(0x3d7)+'t']=_0x3d7f39[_0x1faeac(0x20e)];continue;case'4':_0x4e30cd['textC'+'onten'+'t']=_0x3d7f39['qFyta'](_0x3d7f39['dYTWe'](_0x3d7f39[_0x1faeac(0x25d)](_0x3d7f39[_0x1faeac(0x1b1)](_0x1faeac(0x654)+_0x1faeac(0x5ba)+'rame\x20'+'never'+_0x1faeac(0x5a2)+'ed\x20a\x20'+'singl'+'e\x20rep'+_0x1faeac(0x142)+'\x0a','This\x20'+'panel'+_0x1faeac(0x4a0)+'es\x20th'+_0x1faeac(0x442)+_0x1faeac(0x156)+'pt\x20IS'+_0x1faeac(0x51e)+_0x1faeac(0x68a)+_0x1faeac(0x399)+'runni'+_0x1faeac(0x25f)+_0x1faeac(0x8e)+_0x1faeac(0x412)+_0x1faeac(0x47b))+_0x3d7f39[_0x1faeac(0x5cf)],'\x20\x201.\x20'+_0x1faeac(0xf4)+'rmonk'+_0x1faeac(0x582)+_0x1faeac(0x9b)+_0x1faeac(0x36f)+'ting\x20'+'into\x20'+'the\x20c'+'ross-'+'origi'+_0x1faeac(0x699)+'ame.\x0a'),_0x3d7f39[_0x1faeac(0x209)])+(_0x1faeac(0x182)+_0x1faeac(0x327)+'sakur'+_0x1faeac(0x3ac)+'llwar'+_0x1faeac(0x552)+'r.js\x20'+_0x1faeac(0x2bd)+_0x1faeac(0x10c)+_0x1faeac(0x5bb)+_0x1faeac(0x93)+_0x1faeac(0x35e)+_0x1faeac(0x616)),_0x3d7f39[_0x1faeac(0x6a5)])+('Reloa'+'d\x20the'+_0x1faeac(0x531)+_0x1faeac(0x519)+_0x1faeac(0x2c0)+_0x1faeac(0x399)+_0x1faeac(0x413)+'\x20this'+_0x1faeac(0x178)+_0x1faeac(0x335)+'in.');continue;}break;}},0xe73f+-0x6bf1+0x6f12);var _0x34e93d={'set':function(_0x26becd){var _0x5a1e91=_0x42573c,_0x1cdf52={'AfIdQ':'the\x20l'+'obby\x20'+'looks'+_0x5a1e91(0x52b)+'\x20-\x20ru'+_0x5a1e91(0x4b2)+'\x20reco'+_0x5a1e91(0x59d)+_0x5a1e91(0x5a7)+_0x5a1e91(0x580)+_0x5a1e91(0x20f)+'d,\x20no'+_0x5a1e91(0x475)+'\x20menu'+'.'};_0xc52e70=_0x26becd;if(_0xef6be4)_0xef6be4[_0x5a1e91(0x4a5)][_0x5a1e91(0x498)+'ay']='';if(_0xf99cac){_0xf99cac['textC'+'onten'+'t']=_0x15b1f8[_0x5a1e91(0x23c)]('v',_0x26becd[_0x5a1e91(0x55f)+'on']||'?');var _0x424a6c=_0x17730e,_0x3f039b=_0x26becd[_0x5a1e91(0x55f)+'on']||'';_0xf99cac[_0x5a1e91(0x4a5)]['color']=_0x15b1f8[_0x5a1e91(0x528)](_0x3f039b,_0x424a6c)?_0x2ca8b4:_0x15b1f8[_0x5a1e91(0x224)],_0xf99cac[_0x5a1e91(0x4a5)]['borde'+_0x5a1e91(0x427)+'r']=_0x15b1f8[_0x5a1e91(0x528)](_0x3f039b,_0x424a6c)?_0x5a1e91(0x5bf)+_0x5a1e91(0x1bc)+'43,17'+'7,.35'+')':_0x15b1f8['jVbDH'];}var _0x4e0644=_0x26becd['insta'+_0x5a1e91(0xb5)]&&_0x26becd['insta'+_0x5a1e91(0xb5)][_0x5a1e91(0x5ed)+_0x5a1e91(0xa1)+_0x5a1e91(0x90)],_0x39eae9=Math[_0x5a1e91(0x452)]((_0x26becd[_0x5a1e91(0x3e3)+'edMs']||-0x1d*-0x43+-0x10f1+0x95a)/(-0x1470+-0x3*0x712+0x22*0x157));if(_0x14eacf){var _0x347949,_0x3680ba;if(_0x4e0644&&_0x26becd['surve'+'y']&&_0x26becd[_0x5a1e91(0x604)+'y']['FPSco'+_0x5a1e91(0xa1)+_0x5a1e91(0x90)])_0x347949=_0x15b1f8[_0x5a1e91(0x16f)](_0x15b1f8['EiTeP']('LIVE\x20'+'·\x20',Object[_0x5a1e91(0x421)](_0x26becd[_0x5a1e91(0x464)+'nces'])['lengt'+'h'])+_0x15b1f8[_0x5a1e91(0x685)],_0x39eae9)+'s',_0x3680ba='#7ee0'+'a8';else{if(_0x15b1f8['gjBVR'](_0x26becd['hooks'+'Appli'+'ed'],-0x15*-0xeb+-0x26e7+0x13a0))_0x15b1f8[_0x5a1e91(0x128)]!==_0x5a1e91(0x219)?(_0x347949=_0x5a1e91(0x4d0)+_0x5a1e91(0x1cf)+'d\x20·\x20'+_0x39eae9+'s',_0x3680ba='#ffd4'+'8a'):_0x27a067[_0x5a1e91(0x647)+'ngs'][_0x5a1e91(0x17a)](_0x15b1f8[_0x5a1e91(0x23c)](_0x15b1f8[_0x5a1e91(0x23c)](_0x5a1e91(0x5fa)+_0x145874['hooks'+_0x5a1e91(0x466)],'\x20hook'+'s\x20wer'+_0x5a1e91(0x5f4)+_0x5a1e91(0x25b)+'N\x20by\x20'+'UWMK.'+_0x5a1e91(0x4c1)+_0x5a1e91(0x347)+'\x20pass'+'\x20')+(_0x5a1e91(0x496)+'once\x20'+_0x5a1e91(0x361)+'g\x20Web'+_0x5a1e91(0x101)+_0x5a1e91(0x60d)+_0x5a1e91(0x3f8)+'tiate'+_0x5a1e91(0x399)+_0x5a1e91(0x642)+_0x5a1e91(0x698)+_0x5a1e91(0x522)+_0x5a1e91(0x568)+'ks.le'+'ngth,'+'\x20'),_0x5a1e91(0x448)+_0x5a1e91(0x529)+_0x5a1e91(0x520)+_0x5a1e91(0x187)+'after'+_0x5a1e91(0x439)+_0x5a1e91(0x494)+_0x5a1e91(0x3b9)+_0x5a1e91(0x4ab)+_0x5a1e91(0x22d)+_0x5a1e91(0x364)+_0x5a1e91(0x55e)+'\x20page'+'.\x20')+_0x15b1f8['LvnNY']+_0x38cacd[_0x5a1e91(0x4d0)+_0x5a1e91(0x1e6)+'tered'+_0x5a1e91(0x337)]+(_0x5a1e91(0x2f5)+'(s)\x20d'+_0x5a1e91(0x325)+_0x5a1e91(0x4e7)+_0x5a1e91(0x675)+_0x5a1e91(0x4ed)+'ment-'+_0x5a1e91(0x4f7)+'.'));else{if(_0x26becd[_0x5a1e91(0x24c)+'tData'])_0x347949=_0x5a1e91(0x4dc)+_0x5a1e91(0x20d)+'eady\x20'+'·\x20'+_0x39eae9+'s',_0x3680ba=_0x15b1f8[_0x5a1e91(0x3da)];else{if(_0x15b1f8[_0x5a1e91(0x372)]==='APivS')_0x347949=_0x15b1f8[_0x5a1e91(0x504)](_0x26becd[_0x5a1e91(0x29f)]&&_0x26becd[_0x5a1e91(0x29f)]['ok']?_0x15b1f8['eKnoX']:'armin'+_0x5a1e91(0x5f3),_0x39eae9)+'s',_0x3680ba=_0x15b1f8[_0x5a1e91(0x3da)];else try{_0x318815(_0x2d008e);}catch(_0x58186e){}}}}_0x14eacf[_0x5a1e91(0x514)+_0x5a1e91(0x3d7)+'t']=_0x347949,_0x14eacf[_0x5a1e91(0x4a5)][_0x5a1e91(0x637)]=_0x3680ba;}if(_0x295751){if(_0x5a1e91(0x28c)===_0x15b1f8['VBecu'])_0x295751[_0x5a1e91(0x514)+_0x5a1e91(0x3d7)+'t']=_0x26becd['diff']&&_0x26becd['diff']['lengt'+'h']?'Diff\x20'+_0x5a1e91(0x69d)+'apsho'+'t:\x20'+_0x26becd['diff']['join'](',\x20'):'F9\x20tw'+_0x5a1e91(0xe3)+_0x5a1e91(0x395)+_0x5a1e91(0x23e)+_0x5a1e91(0x59b)+_0x5a1e91(0x1b5)+'ting\x20'+'/\x20jum'+_0x5a1e91(0x200)+_0x5a1e91(0x2e5)+_0x5a1e91(0x3ea)+_0x5a1e91(0x1d3)+_0x5a1e91(0x82)+'\x20whic'+'h.';else{var _0x1b45c9=_0x4adb41(_0x15b1f8[_0x5a1e91(0x564)],_0x1ccbe8[_0x3a1a5a[_0x3adda1]][_0x5a1e91(0x116)]);_0x1b45c9['hits']=_0x154b7[_0x4d5821[_0x380030]]['hits'],_0x1b45c9[_0x5a1e91(0x29e)+'al']=_0x51f243[_0x4ee2b5[_0x52dcd2]][_0x5a1e91(0x116)]===_0x35ca51,_0x13e737[_0x5a1e91(0x4ef)+_0x5a1e91(0x611)+'s']['push'](_0x1b45c9);}}_0x26becd['speed']&&_0x15e554&&(_0x123ff8=!!_0x26becd['speed']['on'],_0x15e554[_0x5a1e91(0x514)+_0x5a1e91(0x3d7)+'t']=_0x123ff8?_0x15b1f8[_0x5a1e91(0x4eb)]:_0x5a1e91(0x607)+'\x20off',_0x15e554[_0x5a1e91(0x4a5)]['backg'+'round']=_0x123ff8?_0x2ca8b4:_0x15b1f8['zgkuL'],_0x15e554[_0x5a1e91(0x4a5)][_0x5a1e91(0x637)]=_0x123ff8?_0x5a1e91(0x334)+'1b':'#f7ee'+'f5',_0x370f08&&_0x26becd[_0x5a1e91(0x2b2)][_0x5a1e91(0x1fd)+'r']&&(_0x370f08[_0x5a1e91(0x514)+'onten'+'t']=Number(_0x26becd['speed'][_0x5a1e91(0x1fd)+'r'])['toFix'+'ed'](-0x1820*0x1+-0x619+0x2*0xf1d)+'x'));if(_0x4e30cd){if(_0x5a1e91(0x4c0)!==_0x15b1f8[_0x5a1e91(0x635)])try{_0x4e30cd[_0x5a1e91(0x514)+'onten'+'t']=_0x59d6a8(_0x26becd);}catch(_0x148b94){_0x4e30cd['textC'+'onten'+'t']=JSON[_0x5a1e91(0x524)+'gify'](_0x26becd,null,0x52*0x25+-0xd56+-0x3*-0x7f);}else _0x405b7a['note']=_0x5a1e91(0x602)+_0x5a1e91(0x6a6)+'etwor'+_0x5a1e91(0x61e)+_0x5a1e91(0x686)+'NPC_C'+'otrol'+_0x5a1e91(0x2d4)+'nd\x20no'+'\x20game'+_0x5a1e91(0x2dc)+_0x5a1e91(0x67c)+_0x5a1e91(0x5df)+_0x5a1e91(0x1ba)+'at\x20'+_0x1cdf52[_0x5a1e91(0x1b7)];}console[_0x5a1e91(0x2cc)](_0x15b1f8[_0x5a1e91(0x60b)],_0x15b1f8[_0x5a1e91(0x22c)](_0x15b1f8['ixndF'](_0x15b1f8[_0x5a1e91(0x26b)],_0x2ca8b4),_0x15b1f8['tfNKw']),_0x26becd),console['log'](_0x15b1f8[_0x5a1e91(0x22c)](_0x20760a+'\x0a'+JSON[_0x5a1e91(0x524)+'gify'](_0x26becd,null,0x58*-0x3b+0x235f*0x1+-0xf16)+'\x0a',_0x502ba1));}};return _0x26aa14[_0x42573c(0x62b)+'et']['api']='1',_0x26aa14['api']=_0x34e93d,_0x34e93d;}function _0x59d6a8(_0x29f313){var _0x2c5f82=_0x1c650b,_0x57ccdd={'PDqet':function(_0x40d00b,_0xb0e192){var _0x54917b=_0x36a4;return _0x3d7f39[_0x54917b(0x1cc)](_0x40d00b,_0xb0e192);}},_0x968ee4=[];_0x968ee4['push'](_0x3d7f39[_0x2c5f82(0x25d)](_0x3d7f39['kbHfv'](_0x2c5f82(0x692)+_0x2c5f82(0x5db),_0x29f313[_0x2c5f82(0x1b6)]||'?')+_0x2c5f82(0x5b8),Math[_0x2c5f82(0x452)]((_0x29f313['elaps'+_0x2c5f82(0x274)]||0x2*0x12e8+-0x1db9+-0x817)/(-0x6*0x44b+0x2*0x1323+0x1d*-0x4c)))+'s)'),_0x968ee4[_0x2c5f82(0x17a)](_0x3d7f39['kbHfv'](_0x3d7f39['hMqOt'](_0x3d7f39[_0x2c5f82(0x2ff)](_0x3d7f39[_0x2c5f82(0x66c)]+(_0x29f313[_0x2c5f82(0x27a)]?'yes':'no'),_0x2c5f82(0x107)+_0x2c5f82(0x291)+'\x20')+(_0x29f313['il2Cp'+_0x2c5f82(0x51f)+_0x2c5f82(0x5dc)]?'yes':'no'),_0x2c5f82(0x3ba)+'pes\x20'),_0x29f313[_0x2c5f82(0x632)+_0x2c5f82(0x32a)]!=null?_0x29f313['typeC'+_0x2c5f82(0x32a)]:'?')),_0x968ee4['push'](_0x3d7f39['qFyta'](_0x3d7f39[_0x2c5f82(0x4b3)]+_0x29f313['hooks'+_0x2c5f82(0x5f8)+'ed']+'/'+_0x29f313[_0x2c5f82(0x4d0)+_0x2c5f82(0x466)],_0x3d7f39[_0x2c5f82(0x487)])),_0x968ee4['push']('');var _0x52b7f7=_0x29f313[_0x2c5f82(0x464)+_0x2c5f82(0xb5)]||{},_0x39d1eb=Object['keys'](_0x52b7f7);!_0x39d1eb[_0x2c5f82(0x63e)+'h']&&(_0x968ee4[_0x2c5f82(0x17a)](_0x3d7f39[_0x2c5f82(0x550)]),_0x968ee4['push'](''),_0x968ee4[_0x2c5f82(0x17a)]('The\x20h'+'ooks\x20'+'fire\x20'+_0x2c5f82(0x641)+_0x2c5f82(0x315)+_0x2c5f82(0x27b)+'wn\x20Up'+_0x2c5f82(0x64b)+_0x2c5f82(0x2c5)+_0x2c5f82(0x5b2)+_0x2c5f82(0x161)+_0x2c5f82(0x3f4)+'means'),_0x968ee4['push'](_0x2c5f82(0x2fb)+_0x2c5f82(0x242)+'ran\x20y'+_0x2c5f82(0xbc)+_0x2c5f82(0x58b)+_0x2c5f82(0x5ee)+'ature'+'\x20did\x20'+_0x2c5f82(0xd0)+_0x2c5f82(0x158)));for(var _0x15c7ef=0x4*0x7e9+0x1*0x1b83+-0x13*0x31d;_0x3d7f39[_0x2c5f82(0x47c)](_0x15c7ef,_0x39d1eb['lengt'+'h']);_0x15c7ef++){if('nSAuJ'!==_0x3d7f39[_0x2c5f82(0x5a6)]){var _0x42f3fc=_0x39d1eb[_0x15c7ef];_0x968ee4['push'](_0x3d7f39[_0x2c5f82(0x4ea)](_0x42f3fc+_0x3d7f39[_0x2c5f82(0x512)],_0x52b7f7[_0x42f3fc]));}else{_0x164881['preve'+_0x2c5f82(0x66e)+_0x2c5f82(0x360)](),_0x3d7f39[_0x2c5f82(0x17e)](_0x35844d,'snaps'+_0x2c5f82(0x40c));return;}}_0x968ee4[_0x2c5f82(0x17a)]('');var _0x472a18=_0x29f313['surve'+'y']||{},_0x2011c1=Object[_0x2c5f82(0x421)](_0x472a18);for(var _0xb11e9e=-0xaa*-0x21+0x837+-0x1e21;_0xb11e9e<_0x2011c1[_0x2c5f82(0x63e)+'h'];_0xb11e9e++){var _0x42fc14=_0x2011c1[_0xb11e9e],_0x3d815b=_0x472a18[_0x42fc14];if(!_0x3d815b||!_0x3d815b[_0x2c5f82(0x63e)+'h'])continue;_0x968ee4[_0x2c5f82(0x17a)](_0x3d7f39['SbaqU'](_0x3d7f39['LOKGe'](_0x3d7f39['xkWrL'](_0x2c5f82(0x311),_0x42fc14),'\x20'),new Array(Math[_0x2c5f82(0x48e)](0x20*0x56+-0x826*0x3+0x491*0x3,0x1aed*-0x1+-0xc4+0x1bd3-_0x42fc14[_0x2c5f82(0x63e)+'h']))[_0x2c5f82(0x456)]('─'))),_0x968ee4[_0x2c5f82(0x17a)](_0x3d7f39['yXrMw']);for(var _0xda38ac=0x1658+0x142+-0x179a;_0xda38ac<_0x3d815b[_0x2c5f82(0x63e)+'h'];_0xda38ac++){if(_0x3d7f39[_0x2c5f82(0x5c6)]!==_0x2c5f82(0x2dd))_0x38be48['camer'+'a']='0x'+_0x57ccdd['PDqet'](_0xf57a76,-0x550+0x23e4+-0x4*0x7a5)[_0x2c5f82(0x1f3)+_0x2c5f82(0x25c)](-0x793+0x1db5+-0x1612),_0x214540[_0x2c5f82(0x216)+_0x2c5f82(0x618)]=_0x268422;else{var _0x78404=_0x3d815b[_0xda38ac],_0x3577c0=_0x3d7f39[_0x2c5f82(0x9d)](typeof _0x78404['v'],_0x3d7f39[_0x2c5f82(0x5dd)])?Math['round'](_0x3d7f39[_0x2c5f82(0x60e)](_0x78404['v'],0x116*-0x1+0x1be2+-0x16e4))/(-0x90d+-0x2673+0x3368):_0x78404['v'];_0x968ee4['push'](_0x3d7f39[_0x2c5f82(0x1f9)](_0x3d7f39['PGviP']('\x20\x20'+('0x'+_0x78404['o']['toStr'+_0x2c5f82(0x25c)](-0x68c*0x2+-0x31*0xcb+0x3403))['padEn'+'d'](0xfe6+0x245f+-0x343d)+'\x20'+_0x78404['k']['padEn'+'d'](0x15bc+0x104e+0x89*-0x47),'\x20'),_0x3d7f39['IOAdd'](String,_0x3577c0)[_0x2c5f82(0x1e9)+'d'](0x1*0x163+-0x3a*-0x9f+-0x1*0x2559))+'\x20'+(_0x78404['raw']||''));}}_0x968ee4['push']('');}if(_0x29f313['warni'+_0x2c5f82(0x22e)]&&_0x29f313[_0x2c5f82(0x647)+'ngs']['lengt'+'h']){_0x968ee4['push']('warni'+_0x2c5f82(0x22e));for(var _0x58ff11=-0xf1*-0x11+-0x5e*0x3b+0x7*0xcf;_0x3d7f39[_0x2c5f82(0x47c)](_0x58ff11,_0x29f313['warni'+_0x2c5f82(0x22e)]['lengt'+'h']);_0x58ff11++)_0x968ee4[_0x2c5f82(0x17a)](_0x3d7f39[_0x2c5f82(0x3bb)](_0x3d7f39[_0x2c5f82(0x132)],_0x29f313[_0x2c5f82(0x647)+'ngs'][_0x58ff11]));}return _0x968ee4[_0x2c5f82(0x456)]('\x0a');}window['addEv'+_0x1c650b(0x544)+_0x1c650b(0x127)+'r'](_0x1c650b(0x39c)+'ge',function(_0x454e89){var _0x46cf8b=_0x1c650b,_0x51f476={'kCZUM':function(_0x4f446d,_0x1558f5){return _0x4f446d===_0x1558f5;},'AUWjQ':_0x46cf8b(0x524)+'g'};if(_0x46cf8b(0x3de)===_0x3d7f39['HESkF']){var _0x5b4936=arguments[_0x308127];if(_0x51f476[_0x46cf8b(0x279)](typeof _0x5b4936,_0x51f476[_0x46cf8b(0x2a0)]))_0x1830a7+=_0x5b4936;else{if(_0x5b4936&&_0x5b4936['messa'+'ge'])_0x3162f9+=_0x5b4936[_0x46cf8b(0x39c)+'ge'];}}else{var _0x89427e=_0x454e89['data'];if(!_0x89427e||_0x89427e[_0x46cf8b(0x523)+_0x46cf8b(0xfe)]!==_0x311656)return;try{if(_0x89427e['kind']===_0x3d7f39['CwPMi']){_0x974d8a()['set']({'host':_0x89427e[_0x46cf8b(0x1b6)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x89427e['kind']==='repor'+'t')_0x3d7f39[_0x46cf8b(0x150)](_0x974d8a)[_0x46cf8b(0x5ea)](_0x89427e['repor'+'t']);}catch(_0x1249ee){if(_0x46cf8b(0x3bf)===_0x3d7f39['CPGhf'])console['warn'](_0x3d7f39[_0x46cf8b(0x2eb)],_0x46cf8b(0x637)+':'+_0x2ca8b4,_0x1249ee);else{var _0x1efea8=_0x3d7f39['TTGnx'](_0x181ca0);if(!_0x1efea8)return null;try{return new _0x482738(_0x1efea8[_0x46cf8b(0xd8)+'r'],_0x1efea8[_0x46cf8b(0x5b7)+'ffset'],_0x1efea8[_0x46cf8b(0x152)+'ength']);}catch(_0x18adfe){return null;}}}}});function _0x38b805(){var _0xa279a1=_0x1c650b;if(_0x649500()){_0x3d7f39[_0xa279a1(0x50c)](_0x454d81,!![]);return;}_0x974d8a();}if(document['body'])_0x3d7f39[_0x1c650b(0x314)](_0x38b805);else document[_0x1c650b(0xfc)+_0x1c650b(0x544)+'stene'+'r'](_0x3d7f39['EFquY'],_0x38b805,{'once':!![]});return;}window[_0x1c650b(0x230)+_0x1c650b(0x65f)+_0x1c650b(0x574)]=window[_0x1c650b(0x230)+_0x1c650b(0x65f)+_0x1c650b(0x574)]||{'at':Date[_0x1c650b(0x64e)]()};function _0x243f08(_0x1cb86c,_0x375fff){var _0x52b594=_0x1c650b,_0x1b73f5={'__sakura':_0x311656,'kind':_0x1cb86c};if(_0x375fff){for(var _0x47aef3 in _0x375fff)_0x1b73f5[_0x47aef3]=_0x375fff[_0x47aef3];}try{if(window['paren'+'t']&&window[_0x52b594(0x60c)+'t']!==window)window[_0x52b594(0x60c)+'t'][_0x52b594(0x3cb)+'essag'+'e'](_0x1b73f5,'*');}catch(_0x154dbb){}try{if(window['top']&&window['top']!==window)window[_0x52b594(0x1f7)]['postM'+_0x52b594(0x239)+'e'](_0x1b73f5,'*');}catch(_0x7f17d0){}}console[_0x1c650b(0x2cc)](_0x3d7f39[_0x1c650b(0x272)](_0x1c650b(0x661)+'kura]'+_0x1c650b(0x530)+_0x1c650b(0x123)+_0x1c650b(0x473)+_0x1c650b(0x1fc),_0x17730e),'color'+':'+_0x2ca8b4+(_0x1c650b(0x3ad)+'-weig'+_0x1c650b(0x26d)+_0x1c650b(0x27e)+_0x1c650b(0x322)+_0x1c650b(0x4a3)+'x'),{'host':_0x162860,'href':location[_0x1c650b(0x350)],'version':_0x17730e}),_0x3d7f39['YGXTw'](_0x243f08,_0x1c650b(0x445),{'host':_0x162860,'role':_0x463f96});var _0x3e0919=window[_0x1c650b(0x230)+_0x1c650b(0x65f)+_0x1c650b(0x574)]&&window[_0x1c650b(0x230)+_0x1c650b(0x65f)+_0x1c650b(0x574)]['at']||Date['now']();window[_0x1c650b(0xfc)+'entLi'+_0x1c650b(0x127)+'r'](_0x3d7f39[_0x1c650b(0x171)],function(_0x1cec7d){var _0x2d9426=_0x1c650b;try{if(_0x2d9426(0x3d0)!==_0x2d9426(0x134)){var _0x4126e9=_0x1cec7d&&_0x1cec7d['data'];if(!_0x4126e9||_0x3d7f39[_0x2d9426(0x246)](_0x4126e9['__sak'+_0x2d9426(0xfe)],_0x311656)||_0x3d7f39[_0x2d9426(0x246)](_0x4126e9[_0x2d9426(0x4ee)],_0x3d7f39[_0x2d9426(0x157)]))return;_0x1da388(_0x4126e9['cmd'],_0x4126e9['arg']);}else{var _0x13304c=_0x3d7f39[_0x2d9426(0x21d)](_0x260e2c,_0x3d7f39[_0x2d9426(0x495)](_0x581fbb,_0x3d7f39[_0x2d9426(0x2d5)](_0x183105,_0x2a4aa2[_0x218496][-0x5*-0x1af+0x1576+-0x1de1*0x1],0xb6d+-0x169+-0x9f4)),'u32');if(_0x13304c)_0x14a3d2[_0x2d9426(0x143)][_0x1ed7c7[_0x5e0e65][0xbed+0xb13+-0x16ff]]='0x'+(_0x13304c>>>0x10ae+-0x450*-0x2+0x52*-0x4f)[_0x2d9426(0x1f3)+_0x2d9426(0x25c)](0x25c5+-0x2692+-0x11*-0xd);}}catch(_0x3dd31b){}});try{var _0x515b07=new BroadcastChannel('sakur'+_0x1c650b(0x197));_0x515b07[_0x1c650b(0x44d)+_0x1c650b(0x3b3)]=function(_0x198ce8){var _0x5c5388=_0x1c650b,_0x239687=_0x198ce8[_0x5c5388(0x3ca)];if(_0x239687&&_0x3d7f39[_0x5c5388(0x18c)](_0x239687['__sak'+'ura'],_0x311656)&&_0x3d7f39['Zegmj'](_0x239687[_0x5c5388(0x4ee)],'cmd'))_0x1da388(_0x239687['cmd'],_0x239687[_0x5c5388(0x465)]);};}catch(_0x221b53){}var _0x4d9379=[];(function _0x3bb327(){var _0x35193a=_0x1c650b,_0x39a507={'AGMNc':function(_0x3f9dda,_0xd352b1){return _0x3f9dda(_0xd352b1);},'JNwlv':function(_0x5d5571,_0x9de0ff){var _0x1cfe51=_0x36a4;return _0x3d7f39[_0x1cfe51(0x5a9)](_0x5d5571,_0x9de0ff);},'WGKNO':function(_0x52e8ad,_0x4981ee){return _0x52e8ad+_0x4981ee;},'XrwMW':function(_0x575546,_0x20f0f5){return _0x575546===_0x20f0f5;},'Leggp':function(_0xb8f4c0,_0x5640f9){var _0x5ebe5a=_0x36a4;return _0x3d7f39[_0x5ebe5a(0x271)](_0xb8f4c0,_0x5640f9);},'QTrEL':_0x3d7f39[_0x35193a(0x403)],'zdiFc':_0x35193a(0x43c),'fBPEd':function(_0x5ebdd5,_0x3f7db0){return _0x5ebdd5===_0x3f7db0;},'faGoE':function(_0x20fddc,_0x327e35){return _0x3d7f39['rsQre'](_0x20fddc,_0x327e35);}};if(_0x3d7f39['KFluP']!=='UiYLM'){_0x3d7f39[_0x35193a(0x10d)](_0x449dc0,!![]);return;}else{var _0x58567e=[_0x35193a(0x2cc),_0x35193a(0xb7),_0x35193a(0xf2),_0x35193a(0x694),'debug'];for(var _0x238f58=-0x7e7+0x1f90+-0x17a9;_0x238f58<_0x58567e[_0x35193a(0x63e)+'h'];_0x238f58++){_0x35193a(0x2a3)!==_0x3d7f39['gJhYr']?_0x39a507[_0x35193a(0x56b)](_0x18a86b,!![]):function(_0x2ceb16){var _0x369c76=_0x35193a,_0x1ecddc=console[_0x2ceb16];if(typeof _0x1ecddc!==_0x369c76(0x5ac)+_0x369c76(0x3f6))return;console[_0x2ceb16]=function(){var _0x1d2606=_0x369c76,_0x2859a7={'hJlqV':function(_0x4f25a9,_0x373385){return _0x4f25a9+_0x373385;},'RNkaL':function(_0xe1eb87,_0xe07e6b){return _0xe1eb87+_0xe07e6b;},'ZbPoM':function(_0x1d585d,_0x3a10b0){return _0x39a507['JNwlv'](_0x1d585d,_0x3a10b0);},'maawk':_0x1d2606(0x4e3),'fScJM':function(_0x73095c,_0xb03575){var _0x462fbd=_0x1d2606;return _0x39a507[_0x462fbd(0x324)](_0x73095c,_0xb03575);},'WqcKV':').\x20'};try{var _0x1dad96='';for(var _0x555045=-0x563+-0x1a91+-0x1*-0x1ff4;_0x555045<arguments[_0x1d2606(0x63e)+'h'];_0x555045++){var _0x193612=arguments[_0x555045];if(_0x39a507[_0x1d2606(0x455)](typeof _0x193612,_0x1d2606(0x524)+'g'))_0x1dad96+=_0x193612;else{if(_0x193612&&_0x193612['messa'+'ge'])_0x1dad96+=_0x193612['messa'+'ge'];}}if(_0x39a507['Leggp'](_0x1dad96['index'+'Of'](_0x20760a),-(-0x5fd+0x4a*0x4c+-0xffa)))return _0x1ecddc['apply'](console,arguments);if(_0x1dad96[_0x1d2606(0x1ae)+'Of']('Unity'+_0x1d2606(0xce)+_0x1d2606(0x649))!==-(0x2335+-0x1def*-0x1+-0x4123)){if(_0x39a507[_0x1d2606(0x1a2)]===_0x39a507[_0x1d2606(0x5b9)]){var _0x3aeeda='';_0x12e514['hookF'+'irePr'+_0x1d2606(0x5e0)]&&(_0x3aeeda=_0x2859a7[_0x1d2606(0x636)](_0x2859a7[_0x1d2606(0x636)](_0x2859a7[_0x1d2606(0x3d2)](_0x2859a7[_0x1d2606(0x4e8)](_0x1d2606(0x2bc)+'ok\x20fi'+_0x1d2606(0x33d)+'t\x20',_0x5d3efb[_0x1d2606(0x89)+'irePr'+_0x1d2606(0x5e0)]['atMs']),'ms\x20wi'+_0x1d2606(0x373)+_0x1d2606(0xcf)+'lFunc'+'=')+_0xa11435[_0x1d2606(0x89)+_0x1d2606(0x190)+_0x1d2606(0x5e0)]['origi'+'nalFu'+'nc']+(_0x1d2606(0x399)+'game\x20'+_0x1d2606(0x4b9)+_0x1d2606(0x1bd)),_0x2b4c14[_0x1d2606(0x89)+_0x1d2606(0x190)+_0x1d2606(0x5e0)]['resol'+'veGam'+_0x1d2606(0xae)+'re'])+(_0x1d2606(0x29d)+_0x1d2606(0x663))+(_0x4f5225['hookF'+_0x1d2606(0x190)+'oof'][_0x1d2606(0x243)+_0x1d2606(0x5ae)+_0x1d2606(0x603)+'e']||_0x2859a7['maawk']),'),\x20so'+_0x1d2606(0x8e)+_0x1d2606(0x1af)+_0x1d2606(0x599)+_0x1d2606(0x8c)+_0x1d2606(0x4f6)+_0x1d2606(0x84)+'d\x20is\x20'+'not\x20r'+'eacha'+_0x1d2606(0x671)+_0x1d2606(0x478))),_0x9d8261['warni'+_0x1d2606(0x22e)]['push'](_0x2859a7['fScJM'](_0x1d2606(0x5da)+_0x1d2606(0x51e)+'ance\x20'+_0x1d2606(0x135)+'esolv'+_0x1d2606(0x2e8)+_0x1d2606(0x3c0)+_0x1d2606(0x682)+'\x20',_0x157edf[_0x1d2606(0x3a2)+'ls'][_0x1d2606(0x243)+_0x1d2606(0x5ae)]||'none')+_0x2859a7[_0x1d2606(0xc9)]+(_0x1d2606(0x651)+'reads'+_0x1d2606(0x345)+_0x1d2606(0xfa)+'ked\x20u'+'ntil\x20'+_0x1d2606(0x52c)+_0x1d2606(0x593)+_0x1d2606(0x3ee)+_0x1d2606(0x409)+'odule'+_0x1d2606(0x196)+'U8\x20is'+_0x1d2606(0x381)+_0x1d2606(0x3a9)+'.')+_0x3aeeda);}else{var _0x37aafb=_0x1dad96['slice'](0x120+-0x765*-0x1+0x3*-0x2d7,-0x1*0x14c2+0x1079*-0x1+0x2667);if(_0x39a507['fBPEd'](_0x4d9379[_0x1d2606(0x1ae)+'Of'](_0x37aafb),-(0x221a+-0x2363+0x14a*0x1))&&_0x39a507[_0x1d2606(0x1bb)](_0x4d9379[_0x1d2606(0x63e)+'h'],0x18f2+-0x1e39+0x583))_0x4d9379[_0x1d2606(0x17a)](_0x37aafb);}}}catch(_0x8733ef){}return _0x1ecddc[_0x1d2606(0x347)](console,arguments);};}(_0x58567e[_0x238f58]);}}}());var _0x1810a5={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x5f228e=null,_0x4b7c38=null,_0x31f441=-(-0x267c+0x1c81+0x9fc),_0x3502a7=null;function _0x13cf5e(_0x5ccd61){var _0x4ea0fb=_0x1c650b;try{if('TseBw'!==_0x4ea0fb(0x5ce)){if(!_0x5ccd61)return;var _0x15b6cd=_0x5ccd61[_0x4ea0fb(0x464)+_0x4ea0fb(0x3b8)]?_0x5ccd61['insta'+'nce']['expor'+'ts']:_0x5ccd61['expor'+'ts']||null;if(!_0x15b6cd)return;if(!_0x3502a7)try{_0x3502a7=Object[_0x4ea0fb(0x421)](_0x15b6cd)['slice'](-0xd9e+0xd71+-0x1*-0x2d,-0x648+-0x193e+0x1f9e);}catch(_0x595e12){}var _0x5d49d2=_0x15b6cd[_0x4ea0fb(0x665)+'y'];_0x5d49d2&&_0x5d49d2[_0x4ea0fb(0xd8)+'r']&&_0x5d49d2[_0x4ea0fb(0xd8)+'r'][_0x4ea0fb(0x152)+_0x4ea0fb(0x5f0)]>-0x585*0x2+-0x115b+0x1c65&&(_0x4b7c38=_0x5d49d2,_0x31f441=Date[_0x4ea0fb(0x64e)]()-_0x3e0919);}else _0x15ddf7=_0x17cd6a();}catch(_0x273978){}}function _0x8f790d(){var _0x1724ae=_0x1c650b,_0x123d28={'jIywJ':_0x1724ae(0x579)};if(_0x3d7f39['dSUiH'](_0x3d7f39[_0x1724ae(0x353)],_0x3d7f39['OAAQJ']))try{if(_0x1724ae(0x11d)===_0x3d7f39[_0x1724ae(0x4d2)])try{_0x43c1b9();}catch(_0x326a79){}else{if(_0x3d7f39[_0x1724ae(0x175)](typeof WebAssembly,_0x3d7f39['qeCxb']))return;var _0x3d4663=[_0x3d7f39[_0x1724ae(0x5b5)],_0x3d7f39[_0x1724ae(0xaa)]];for(var _0x168a41=0x137f+-0x6*0x62f+0x119b*0x1;_0x3d7f39[_0x1724ae(0x47c)](_0x168a41,_0x3d4663['lengt'+'h']);_0x168a41++){(function(_0x250b71){var _0x704fcb=_0x1724ae,_0x40294a=WebAssembly[_0x250b71];if(_0x3d7f39['mnGaH'](typeof _0x40294a,_0x704fcb(0x5ac)+'ion')||_0x40294a[_0x704fcb(0x523)+_0x704fcb(0x244)+_0x704fcb(0x2e6)+'ap'])return;var _0x341bb5=function(){var _0x15b6fc=_0x704fcb;if('WVNhU'!==_0x123d28[_0x15b6fc(0x351)]){var _0x47ceed=_0x40294a['apply'](this,arguments);try{if(_0x47ceed&&typeof _0x47ceed['then']==='funct'+'ion')_0x47ceed['then'](_0x13cf5e,function(){});else _0x13cf5e(_0x47ceed);}catch(_0xd4a822){}return _0x47ceed;}else{if(_0x3ea44a)_0x181471[_0x15b6fc(0x514)+'onten'+'t']='Copie'+'d';}};_0x341bb5[_0x704fcb(0x523)+'uraMe'+'moryT'+'ap']=!![];try{Object['defin'+'eProp'+_0x704fcb(0x15b)](_0x341bb5,'name',{'value':_0x40294a[_0x704fcb(0x37a)],'configurable':!![]});}catch(_0x31f499){}WebAssembly[_0x250b71]=_0x341bb5;}(_0x3d4663[_0x168a41]));}}}catch(_0x546d45){}else try{return _0x2efd98&&_0x2e03a6[_0x1724ae(0xd8)+'r']?_0x5be374[_0x1724ae(0xd8)+'r']['byteL'+'ength']:-0x16e*0x10+0x157*-0x1a+-0xb2*-0x53;}catch(_0xc78021){return 0x1acb+-0xd53*0x1+-0x4*0x35e;}}var _0x360884=null,_0x2855a7=null,_0x28a34d={},_0x1ee046=[],_0x4400ae=[],_0x8aa394=[{'type':_0x3d7f39['NVOCv'],'keep':!![]},{'type':_0x3d7f39[_0x1c650b(0x15d)],'keep':!![]},{'type':_0x1c650b(0x577)+_0x1c650b(0x12b)+'ger','keep':![]},{'type':_0x1c650b(0x192)+_0x1c650b(0x4de)+'nager','keep':!![]},{'type':'GG_Ga'+'meMan'+_0x1c650b(0xab),'keep':!![]},{'type':_0x3d7f39['oVMwe'],'keep':!![],'many':!![]},{'type':'Netwo'+'rkPla'+'yerAn'+_0x1c650b(0x4b1)+'ons','keep':!![],'many':!![]},{'type':_0x3d7f39[_0x1c650b(0xed)],'keep':!![],'many':!![]},{'type':_0x3d7f39['mGGIJ'],'keep':!![],'many':!![]}],_0x1d3f99=[_0x3d7f39['biFWW'],_0x3d7f39['JwxcE'],_0x3d7f39[_0x1c650b(0x553)],_0x3d7f39['LnSGO'],'Scivo'+_0x1c650b(0x320)+_0x1c650b(0x344)+'rCont'+_0x1c650b(0x2ac)+_0x1c650b(0x3b7),_0x1c650b(0x220)+_0x1c650b(0x418)+'d'];(function _0x3618da(){var _0x48f70d=_0x1c650b;try{if(_0x3d7f39[_0x48f70d(0x14e)](_0x3d7f39[_0x48f70d(0x140)],_0x48f70d(0x336)))try{if(!_0x3b2ef2||!_0x538c2c)return null;var _0x2178ed=new _0x56069a(_0x1e0540)[_0x48f70d(0xf7)+'assNa'+'me']();return _0x2178ed===_0x57e3f9?null:_0x2178ed;}catch(_0x3b660d){return null;}else{var _0x4a6b66=window['Unity'+'WebMo'+_0x48f70d(0x649)]&&window[_0x48f70d(0x5da)+_0x48f70d(0xce)+_0x48f70d(0x649)][_0x48f70d(0x50f)+'me'];if(!_0x4a6b66||_0x3d7f39[_0x48f70d(0x491)](typeof _0x4a6b66['creat'+'ePlug'+'in'],_0x48f70d(0x5ac)+_0x48f70d(0x3f6))){_0x1810a5[_0x48f70d(0xf2)]=_0x3d7f39[_0x48f70d(0x51d)];return;}_0x1810a5['attem'+_0x48f70d(0x34e)]=!![],_0x2855a7=_0x4a6b66['creat'+_0x48f70d(0x65a)+'in']({'name':_0x48f70d(0xe1)+_0x48f70d(0x4bb)+_0x48f70d(0xbf)+'z','version':_0x17730e,'referencedAssemblies':_0x1d3f99['slice']()}),_0x1810a5['ok']=!![];try{var _0x1f4122=window[_0x48f70d(0x5da)+_0x48f70d(0xce)+_0x48f70d(0x649)]['Runti'+'me'];_0x1f4122[_0x48f70d(0x523)+'uraTa'+'g']=_0x3d7f39[_0x48f70d(0x558)](_0x17730e+':',Math['rando'+'m']()['toStr'+'ing'](-0x1a3*0x5+-0x2492+0x2ce5)[_0x48f70d(0x3a6)](0x1563+-0x1e01+0x8a0,-0x88c+0x3d1+0x4c5)),_0x5f228e=_0x1f4122[_0x48f70d(0x523)+'uraTa'+'g'];}catch(_0xc627e4){}_0x3d7f39[_0x48f70d(0x573)](_0x555d5e),_0x1810a5['hooks'+_0x48f70d(0x1e6)+_0x48f70d(0x4e0)]=_0x1ee046['lengt'+'h'],_0x3d7f39[_0x48f70d(0x314)](_0x8f790d),_0x1810a5[_0x48f70d(0x665)+'yTap']=!![];}}catch(_0x4912f7){_0x1810a5[_0x48f70d(0xf2)]=String(_0x4912f7&&_0x4912f7[_0x48f70d(0x39c)+'ge']||_0x4912f7);}}());var _0x1da40c=new Float32Array(0x967+0x9de*0x1+-0x1344),_0x3ff4f7=new Int32Array(_0x1da40c[_0x1c650b(0xd8)+'r']);function _0x4f4f53(_0x4a814e){var _0x365ff5=_0x1c650b;if(_0x3d7f39[_0x365ff5(0x2e2)](_0x365ff5(0x55c),_0x3d7f39[_0x365ff5(0x58e)])){_0x3f6dec[_0x1c5ab1]='0x'+_0x350ffa[_0x1e0edd][_0x365ff5(0x116)]['toStr'+_0x365ff5(0x25c)](0x7f*0x6+-0xf*0x293+0x13*0x1e1);if(_0x2df528[_0x18c3fb]['repla'+_0x365ff5(0x245)])_0x9967f0[_0x365ff5(0x17a)](_0x528b40);}else return _0x1da40c[0x102b*0x1+-0x193c+0xb*0xd3]=_0x4a814e,_0x3ff4f7[-0x126f+0x1*0x672+0xbfd];}function _0x2d72d3(_0x50922b){return _0x3ff4f7[0xf6*-0x3+-0x1b4f*-0x1+0xd*-0x1e1]=_0x50922b|-0x205*-0xe+0x1ea5*-0x1+0x25f,_0x1da40c[-0x1d23*0x1+0x3*-0xa10+0x3b53];}var _0xdcd25d={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x238a88(){var _0xb897fd=_0x1c650b;if(_0x3d7f39[_0xb897fd(0x1c9)](_0xb897fd(0x501),_0xb897fd(0x501))){try{if(_0x2855a7&&_0x2855a7[_0xb897fd(0x4e5)+_0xb897fd(0x39e)]){if(_0x3d7f39[_0xb897fd(0xd4)](_0xb897fd(0x32c),_0xb897fd(0x6a0))){var _0x5aabf9=_0x2855a7['_runt'+_0xb897fd(0x39e)];if(typeof _0x5aabf9['resol'+'veGam'+'e']===_0x3d7f39['DRGjH']){if(_0x3d7f39[_0xb897fd(0x9d)](_0x3d7f39['RDzVB'],_0xb897fd(0x241))){var _0x48dacf=_0x5aabf9['resol'+'veGam'+'e']();if(_0x48dacf)return _0xdcd25d[_0xb897fd(0x111)+'e']=_0x3d7f39['bQEap'],_0x48dacf;}else{if(_0x2f73f5[_0x1d4a6a][_0xb897fd(0x138)]&&_0x189276[_0x2626c9][_0xb897fd(0x138)][_0xb897fd(0x4ec)+_0xb897fd(0x4b8)]!==_0x478130)_0x24d94c++;}}if(_0x5aabf9[_0xb897fd(0x406)])return _0xb897fd(0x658)===_0x3d7f39[_0xb897fd(0x4ca)]?(_0xdcd25d[_0xb897fd(0x111)+'e']=_0x3d7f39['gnNRz'],_0x5aabf9[_0xb897fd(0x406)]):{'version':_0xee7e02,'when':new _0x35762a()[_0xb897fd(0x5c9)+_0xb897fd(0x4d4)+'g'](),'elapsedMs':_0x15e819[_0xb897fd(0x64e)]()-_0x50c8ac,'host':_0x55331e,'uwmk':!!(_0x435093[_0xb897fd(0x5da)+'WebMo'+_0xb897fd(0x649)]&&_0x39c0f9['Unity'+'WebMo'+_0xb897fd(0x649)]['Runti'+'me']),'il2CppContext':![],'arm':_0x62838e,'hooksTotal':_0x5197d8[_0xb897fd(0x63e)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x36d336(_0x229ba7&&_0x25a8b6[_0xb897fd(0x39c)+'ge']||_0x521357)};}else _0x5228ae['warni'+_0xb897fd(0x22e)][_0xb897fd(0x17a)]('Hooks'+'\x20are\x20'+'appli'+_0xb897fd(0x4ce)+'t\x20no\x20'+_0xb897fd(0x5ed)+_0xb897fd(0xa1)+'ler\x20h'+_0xb897fd(0x2a8)+'red\x20y'+'et.\x20'+('Eithe'+_0xb897fd(0x66a)+'\x20are\x20'+_0xb897fd(0x46f)+'n\x20a\x20r'+_0xb897fd(0x2cf)+_0xb897fd(0x2ae)+_0xb897fd(0x444)+'ok\x20is'+'\x20on\x20t'+'he\x20wr'+'ong\x20o'+_0xb897fd(0x390)+'ad.'));}}catch(_0x51064f){}try{var _0x2f56f1=window['Unity'+_0xb897fd(0xce)+_0xb897fd(0x649)]&&window[_0xb897fd(0x5da)+_0xb897fd(0xce)+'dkit'][_0xb897fd(0x50f)+'me'];if(_0x2f56f1&&_0x3d7f39['TxHLz'](typeof _0x2f56f1['resol'+_0xb897fd(0x5e9)+'e'],_0x3d7f39['DRGjH'])){var _0x320d7f=_0x2f56f1['resol'+'veGam'+'e']();if(_0x320d7f)return _0x3d7f39[_0xb897fd(0x491)]('OXDec',_0xb897fd(0x469))?(_0xdcd25d[_0xb897fd(0x111)+'e']=_0x3d7f39[_0xb897fd(0x11a)],_0x320d7f):(_0x2c849f['sourc'+'e']=_0x3d7f39[_0xb897fd(0x368)](_0x3d7f39[_0xb897fd(0x4a6)],_0x468d43[_0x2e7976])+_0x3d7f39[_0xb897fd(0x4b6)],_0x1324cd);}if(_0x2f56f1&&_0x2f56f1['_game']){if(_0xb897fd(0x1de)===_0xb897fd(0x563)){_0x10b155[_0xb897fd(0x17a)](_0x3d7f39[_0xb897fd(0x9c)]);for(var _0x30e0af=0x10*-0xfa+-0x1d17+-0x1*-0x2cb7;_0x3d7f39[_0xb897fd(0x47c)](_0x30e0af,_0x43b238[_0xb897fd(0x647)+_0xb897fd(0x22e)][_0xb897fd(0x63e)+'h']);_0x30e0af++)_0x1ddd9a[_0xb897fd(0x17a)]('\x20\x20!\x20'+_0x3b0d89['warni'+'ngs'][_0x30e0af]);}else return _0xdcd25d[_0xb897fd(0x111)+'e']=_0x3d7f39['neurU'],_0x2f56f1;}}catch(_0x215729){}try{var _0x3cd791=window[_0xb897fd(0x7c)+'Insta'+'nce']||window[_0xb897fd(0x7c)+_0xb897fd(0x569)]||window[_0xb897fd(0x513)];if(_0x3cd791)return _0xdcd25d['sourc'+'e']=_0xb897fd(0x446)+_0xb897fd(0xff)+_0xb897fd(0x194),_0x3cd791;}catch(_0x454f27){}try{if(_0x3d7f39['eOTwy'](typeof game,_0x3d7f39['qeCxb'])&&game)return _0xdcd25d[_0xb897fd(0x111)+'e']=_0x3d7f39[_0xb897fd(0x507)],game;}catch(_0x5acce3){}try{var _0x20a368=Object[_0xb897fd(0x421)](window);for(var _0x2237f3=0x1*-0x1a7a+-0x1*0x1cc1+0x623*0x9;_0x3d7f39[_0xb897fd(0x47c)](_0x2237f3,_0x20a368[_0xb897fd(0x63e)+'h'])&&_0x3d7f39['rsQre'](_0x2237f3,0x1*0x1196+0x2bf+-0x11fd*0x1);_0x2237f3++){var _0xd0afd5=window[_0x20a368[_0x2237f3]];if(_0xd0afd5&&typeof _0xd0afd5===_0xb897fd(0x551)+'t'&&_0xd0afd5[_0xb897fd(0x370)+'e']&&_0xd0afd5['Modul'+'e']['HEAPU'+'8']&&_0xd0afd5[_0xb897fd(0x370)+'e']['HEAPU'+'8']['buffe'+'r'])return _0xdcd25d['sourc'+'e']=_0x3d7f39[_0xb897fd(0x638)](_0x3d7f39['vBKSd']+_0x20a368[_0x2237f3],_0xb897fd(0x492)+'le'),_0xd0afd5;}}catch(_0x542f49){}return _0xdcd25d[_0xb897fd(0x111)+'e']=null,null;}else{_0x3a236a[_0xb897fd(0x30f)+'ntDef'+_0xb897fd(0x360)](),_0x1be5ae(_0xa59425['on'],_0x30b05a[_0xb897fd(0x1fd)+'r']-(0x7*0x137+0x151+-0x9d2+0.5));return;}}function _0x632676(){var _0xba1615=_0x1c650b;try{if(_0x4b7c38&&_0x4b7c38['buffe'+'r']&&_0x4b7c38['buffe'+'r'][_0xba1615(0x152)+_0xba1615(0x5f0)])return _0xdcd25d[_0xba1615(0x111)+'e']=_0xdcd25d['sourc'+'e']||'insta'+_0xba1615(0x147)+_0xba1615(0x31b)+_0xba1615(0x18b)+'s.mem'+'ory',new Uint8Array(_0x4b7c38['buffe'+'r']);}catch(_0x2ac261){}try{var _0x198b8=_0x238a88();if(_0x198b8&&_0x198b8[_0xba1615(0x370)+'e']&&_0x198b8['Modul'+'e'][_0xba1615(0x121)+'8']&&_0x198b8['Modul'+'e'][_0xba1615(0x121)+'8'][_0xba1615(0xd8)+'r'])return _0x198b8['Modul'+'e']['HEAPU'+'8'];}catch(_0x11ac93){}return null;}function _0x194171(){var _0x1af6cb=_0x1c650b,_0x40da62=_0x3d7f39[_0x1af6cb(0x238)](_0x632676);if(!_0x40da62)return null;try{return new DataView(_0x40da62['buffe'+'r'],_0x40da62[_0x1af6cb(0x5b7)+'ffset'],_0x40da62[_0x1af6cb(0x152)+_0x1af6cb(0x5f0)]);}catch(_0x241c41){return null;}}function _0x4d7e8d(_0x51b2d6,_0x5a52df){var _0x572bde=_0x1c650b,_0x5ec478=_0x3d7f39[_0x572bde(0x314)](_0x194171);if(!_0x5ec478)return _0xdcd25d['faile'+'d']++,_0xdcd25d[_0x572bde(0x2ed)+_0x572bde(0x11e)]=_0xdcd25d[_0x572bde(0x2ed)+'rror']||'no\x20HE'+'APU8\x20'+_0x572bde(0x2be)+'ty\x20in'+_0x572bde(0x31e)+'e\x20not'+_0x572bde(0x381)+_0x572bde(0x3a9)+_0x572bde(0x5cc)+_0x572bde(0x50f)+'me.re'+_0x572bde(0x586)+'Game('+')\x20or\x20'+_0x572bde(0x50b)+'indow'+'\x20glob'+'al',undefined;if(_0x3d7f39['rsQre'](_0x51b2d6,0x1*0x15ba+-0x3a*-0x21+0xe*-0x216)||_0x3d7f39[_0x572bde(0x98)](_0x51b2d6,0xbe9+0x9*0x194+-0x1a19)>_0x5ec478[_0x572bde(0x152)+_0x572bde(0x5f0)])return _0xdcd25d[_0x572bde(0x2aa)+'d']++,_0xdcd25d[_0x572bde(0x2ed)+_0x572bde(0x11e)]=_0xdcd25d['lastE'+_0x572bde(0x11e)]||_0x3d7f39[_0x572bde(0x558)](_0x3d7f39[_0x572bde(0x4ea)]('addre'+_0x572bde(0x2c8),_0x51b2d6['toStr'+'ing'](-0x1411+0x19ee+-0x1b*0x37))+_0x3d7f39['qnoZu'],_0x5ec478['byteL'+'ength'][_0x572bde(0x1f3)+_0x572bde(0x25c)](-0x181*0xa+-0x849+-0x1763*-0x1)),undefined;try{if(_0x3d7f39['eOTwy'](_0x572bde(0x49a),_0x572bde(0x49a)))try{var _0x96c771=_0x553a10&&_0x4dc1df[_0x572bde(0x3ca)];if(!_0x96c771||_0x3d7f39['tcnYn'](_0x96c771[_0x572bde(0x523)+'ura'],_0x52103c)||_0x96c771[_0x572bde(0x4ee)]!==_0x572bde(0xc0))return;_0x3d7f39['guBod'](_0x4e9781,_0x96c771['cmd'],_0x96c771[_0x572bde(0x465)]);}catch(_0x42e699){}else{_0xdcd25d['ok']++;switch(_0x5a52df){case'u8':return _0x5ec478['getUi'+_0x572bde(0x257)](_0x51b2d6);case'i8':return _0x5ec478[_0x572bde(0x467)+'t8'](_0x51b2d6);case _0x3d7f39[_0x572bde(0x5f1)]:return _0x5ec478[_0x572bde(0x467)+'t16'](_0x51b2d6,!![]);case _0x3d7f39[_0x572bde(0x261)]:return _0x5ec478[_0x572bde(0x431)+'nt16'](_0x51b2d6,!![]);case _0x3d7f39['LhkTR']:return _0x5ec478['getIn'+_0x572bde(0x674)](_0x51b2d6,!![]);case _0x3d7f39[_0x572bde(0xcd)]:return _0x5ec478[_0x572bde(0x431)+_0x572bde(0x392)](_0x51b2d6,!![]);case _0x3d7f39['ntOxI']:return _0x5ec478[_0x572bde(0x2f7)+_0x572bde(0x404)](_0x51b2d6,!![]);case'f64':return _0x5ec478[_0x572bde(0x2f7)+_0x572bde(0x5d3)](_0x51b2d6,!![]);case'v2':case'v3':case'v4':return _0x5ec478[_0x572bde(0x2f7)+_0x572bde(0x404)](_0x51b2d6,!![]);default:return _0x5ec478[_0x572bde(0x467)+_0x572bde(0x674)](_0x51b2d6,!![]);}}}catch(_0x21ca7c){return _0xdcd25d['faile'+'d']++,_0xdcd25d['lastE'+_0x572bde(0x11e)]=_0xdcd25d[_0x572bde(0x2ed)+'rror']||String(_0x21ca7c&&_0x21ca7c['messa'+'ge']||_0x21ca7c)[_0x572bde(0x3a6)](-0x1*-0x19e3+-0x1ef1+0x50e,0xf56+-0x6*-0x257+-0x1ce8*0x1),undefined;}}function _0x3768a0(_0x560166,_0x3f780f,_0x2660e4){var _0xc48e1b=_0x1c650b,_0x98bf56=_0x194171();if(!_0x98bf56||_0x560166<0x1*-0x1c8c+-0x1f93+0x1*0x3c1f||_0x560166+(-0x95*0x15+-0x1f82+0x2bbf)>_0x98bf56['byteL'+_0xc48e1b(0x5f0)])return![];try{switch(_0x3f780f){case'u8':case'i8':_0x98bf56[_0xc48e1b(0x2da)+_0xc48e1b(0x257)](_0x560166,_0x2660e4&-0x44*-0x74+0x3e3*-0x2+-0x160b);break;case _0x3d7f39[_0xc48e1b(0x5f1)]:case'u16':_0x98bf56['setIn'+_0xc48e1b(0x66b)](_0x560166,_0x3d7f39[_0xc48e1b(0x81)](_0x2660e4,0x70f*0x1+0x2*0x1288+0x3*-0xeb5),!![]);break;case'i32':case'u32':_0x98bf56[_0xc48e1b(0x30e)+'t32'](_0x560166,_0x2660e4|-0x173c+0xcb*-0xc+0x20c0,!![]);break;case _0x3d7f39['ntOxI']:_0x98bf56[_0xc48e1b(0x281)+'oat32'](_0x560166,_0x2660e4,!![]);break;default:_0x98bf56['setIn'+_0xc48e1b(0x674)](_0x560166,_0x2660e4|-0x7d3*-0x2+0xe41+-0x1*0x1de7,!![]);}return!![];}catch(_0x4aba30){if(_0xc48e1b(0x575)!==_0x3d7f39['SwxyN'])_0x52f9d1=_0x3d7f39[_0xc48e1b(0x43f)](_0x42d004[_0xc48e1b(0x29f)]&&_0x50b88f[_0xc48e1b(0x29f)]['ok']?_0x3d7f39[_0xc48e1b(0xda)]:_0x3d7f39['VBpSL'],_0x199cca)+'s',_0x15749c=_0xc48e1b(0x538)+'8a';else return![];}}var _0x385007={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':'i32'},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':_0x3d7f39[_0x1c650b(0x102)]},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0x41819e(_0x53dbda){var _0x4e3224=_0x1c650b;if(_0x3d7f39['mnGaH'](_0x4e3224(0x62e),_0x3d7f39[_0x4e3224(0x1ee)])){var _0x4a94b1='';for(var _0xfe0df6=0x13f*-0x11+-0x33a+0x1869;_0xfe0df6<_0x53dbda['lengt'+'h'];_0xfe0df6++){var _0x5c7431=_0x53dbda[_0xfe0df6][_0x4e3224(0x1f3)+'ing'](-0xffb*-0x1+-0x166e+0x683*0x1);_0x4a94b1+=(_0x3d7f39[_0x4e3224(0x47c)](_0x5c7431['lengt'+'h'],0xd8e+-0x248e+-0x26*-0x9b)?'0':'')+_0x5c7431;}return _0x4a94b1;}else{var _0xf10d0e=_0x14647c();if(_0xf10d0e&&_0xf10d0e[_0x4e3224(0x370)+'e']&&_0xf10d0e[_0x4e3224(0x370)+'e'][_0x4e3224(0x121)+'8']&&_0xf10d0e[_0x4e3224(0x370)+'e']['HEAPU'+'8']['buffe'+'r'])return _0xf10d0e[_0x4e3224(0x370)+'e']['HEAPU'+'8'];}}function _0x2fd44e(_0x3b8eb0,_0x4ccacd,_0x4269db){var _0x2c41dd=_0x1c650b,_0x5eec80=_0x3d7f39[_0x2c41dd(0x4db)](_0x194171);if(!_0x5eec80)return _0xdcd25d[_0x2c41dd(0x2aa)+'d']++,_0xdcd25d['lastE'+_0x2c41dd(0x11e)]=_0xdcd25d[_0x2c41dd(0x2ed)+_0x2c41dd(0x11e)]||_0x3d7f39[_0x2c41dd(0x614)],null;if(_0x3d7f39[_0x2c41dd(0x594)](_0x4ccacd,-0x1*-0x1868+0x1919+-0x3181)||_0x4ccacd+_0x4269db>_0x5eec80[_0x2c41dd(0x152)+'ength'])return _0xdcd25d[_0x2c41dd(0x2aa)+'d']++,_0xdcd25d['lastE'+_0x2c41dd(0x11e)]=_0xdcd25d['lastE'+'rror']||_0x3d7f39['SbaqU'](_0x3d7f39['MnvKQ']+(_0x3b8eb0+_0x4ccacd)[_0x2c41dd(0x1f3)+'ing'](-0xddd*0x2+0x1425+-0x1*-0x7a5),_0x3d7f39[_0x2c41dd(0x218)])+_0x5eec80[_0x2c41dd(0x152)+'ength']['toStr'+'ing'](0x1e47+0x3*-0x67d+-0x2b0*0x4),null;try{var _0xcb49a7=new Uint8Array(_0x4269db);for(var _0x14a1bd=-0x114b+-0xa3+-0x66*-0x2d;_0x14a1bd<_0x4269db;_0x14a1bd++)_0xcb49a7[_0x14a1bd]=_0x5eec80[_0x2c41dd(0x431)+'nt8'](_0x3d7f39['wQYKu'](_0x3b8eb0,_0x4ccacd)+_0x14a1bd);return _0xdcd25d['ok']++,_0xcb49a7;}catch(_0x90bb1d){return _0xdcd25d['faile'+'d']++,_0xdcd25d[_0x2c41dd(0x2ed)+_0x2c41dd(0x11e)]=_0xdcd25d[_0x2c41dd(0x2ed)+_0x2c41dd(0x11e)]||String(_0x90bb1d&&_0x90bb1d[_0x2c41dd(0x39c)+'ge']||_0x90bb1d)['slice'](-0x2141+0xc9*0x2e+-0x1*0x2dd,0x287*0x9+-0x2*0x985+-0x1*0x33d),null;}}function _0x8bbc8f(_0x30336c,_0x563968,_0x3f7b38){var _0x5be29a=_0x1c650b,_0x59fd20=_0x385007[_0x3f7b38],_0x56fd2a=_0x3d7f39[_0x5be29a(0x304)](_0x2fd44e,_0x30336c,_0x563968,_0x59fd20[_0x5be29a(0x169)]);if(!_0x56fd2a)return null;var _0x29fd00=new DataView(_0x56fd2a[_0x5be29a(0xd8)+'r'],_0x56fd2a[_0x5be29a(0x5b7)+'ffset'],_0x56fd2a[_0x5be29a(0x152)+_0x5be29a(0x5f0)]),_0x493359=_0x29fd00['getIn'+_0x5be29a(0x674)](_0x59fd20[_0x5be29a(0x5e5)],!![]),_0x5ab364=_0x29fd00['getIn'+'t32'](_0x59fd20[_0x5be29a(0x177)+'n'],!![]),_0x5f1ee2=_0x29fd00[_0x5be29a(0x431)+'nt8'](_0x59fd20['inite'+'d'])&-0x359*0x5+0x679+-0xa45*-0x1,_0x1d4241=_0x3f7b38===_0x3d7f39[_0x5be29a(0x4d3)]?_0x29fd00[_0x5be29a(0x2f7)+'oat32'](_0x59fd20[_0x5be29a(0x28f)],!![]):_0x3d7f39[_0x5be29a(0x10e)](_0x3f7b38,_0x5be29a(0x5a4))?_0x29fd00['getIn'+'t32'](_0x59fd20['fake'],!![]):_0x29fd00[_0x5be29a(0x431)+_0x5be29a(0x257)](_0x59fd20[_0x5be29a(0x28f)]),_0x248de1=_0x29fd00['getUi'+_0x5be29a(0x257)](_0x59fd20['activ'+'e'])&-0x1e09+0x114+0x1cf6;return{'keyAtOffset0':_0x493359,'hidden':_0x5ab364,'inited':_0x5f1ee2,'fake':_0x1d4241,'act':_0x248de1,'hex':_0x3d7f39[_0x5be29a(0x643)](_0x41819e,_0x56fd2a),'alt':_0x3d7f39[_0x5be29a(0x5fc)](_0x3f7b38,'obfI')?_0x3d7f39[_0x5be29a(0x645)](_0x5ab364,_0x1d4241|0xee3+-0x25a9+0x16c6):null};}function _0x5aa587(_0x49583a,_0x4db963,_0x2fa58f){var _0x517a6c=_0x1c650b;if(_0x49583a===_0x3d7f39['oNcnk'])return _0x2d72d3(_0x4db963^_0x2fa58f);if(_0x3d7f39['dSUiH'](_0x49583a,_0x517a6c(0x5a4)))return _0x4db963^_0x2fa58f|0x1*0x427+0x1186+0x15ad*-0x1;return _0x3d7f39[_0x517a6c(0x301)](_0x3d7f39[_0x517a6c(0x645)](_0x4db963,_0x2fa58f),-0x13d*0x1a+-0x663*0x4+0x557*0xb)!==-0x26ae+-0x1*0x142d+0x3adb?-0x4*0x11a+-0x1*-0x1b85+-0x171c:-0x5c*0x1a+0x2298+-0x1940;}function _0x235e06(_0x3881d2,_0x33328a,_0x5a4b0c){var _0x4e1dac=_0x1c650b,_0x23a37c=(_0x4e1dac(0x68b)+_0x4e1dac(0x339)+_0x4e1dac(0x6a4)+_0x4e1dac(0x374)+'|9|8|'+_0x4e1dac(0x500)+'7|11')['split']('|'),_0x39e0c0=-0x19c6+-0x115+-0x55f*-0x5;while(!![]){switch(_0x23a37c[_0x39e0c0++]){case'0':var _0xd22cec=_0x3d7f39[_0x4e1dac(0x2d5)](_0x4d7e8d,_0x3d7f39['NyMJi'](_0x3881d2+_0x33328a,_0x4cd965[_0x4e1dac(0x28f)]),_0x3d7f39[_0x4e1dac(0x2fe)](_0x5a4b0c,_0x4e1dac(0x60f))?'f32':_0x3d7f39['oedvW'](_0x5a4b0c,_0x4e1dac(0x5a4))?_0x4e1dac(0x2e3):'u8');continue;case'1':if(!_0x4cd965)return null;continue;case'2':var _0x269d18=_0x4d7e8d(_0x3881d2+_0x33328a+_0x4cd965[_0x4e1dac(0x5e5)],'u8');continue;case'3':var _0x4cd965=_0x385007[_0x5a4b0c];continue;case'4':var _0x2dba2a=_0x3d7f39[_0x4e1dac(0x2d5)](_0x4d7e8d,_0x3d7f39[_0x4e1dac(0xd6)](_0x3881d2,_0x33328a)+_0x4cd965[_0x4e1dac(0x177)+'n'],'i32');continue;case'5':var _0x61996d;continue;case'6':if(_0x269d18===undefined||_0x2dba2a===undefined||_0xd22cec===undefined||_0x238717===undefined)return null;continue;case'7':if(_0x5a4b0c===_0x3d7f39[_0x4e1dac(0x4d3)])_0x61996d=_0x3d7f39[_0x4e1dac(0x17e)](_0x2d72d3,_0x2dba2a^_0x269d18);else{if(_0x5a4b0c===_0x4e1dac(0x5a4))_0x61996d=_0x3d7f39[_0x4e1dac(0x63f)](_0x2dba2a^_0x269d18,0x1050+-0x1*0x1d4f+0xcff);else _0x61996d=_0x3d7f39['VCymj'](_0x2dba2a^_0x269d18,-0xdce+0x199d+0x8*-0x15a)!==-0x1*0x22de+0x7*0xb3+0x1df9?-0x3d*0x13+0x1db1+-0x1929:0x1923+0x131c+0x2c3f*-0x1;}continue;case'8':_0x2b5ce0=_0x3d7f39[_0x4e1dac(0x287)](_0x2b5ce0||0x24e9+0xf34*-0x1+-0x15b5,0x1809+0xbb1*0x2+-0x2f6a);continue;case'9':_0x2dba2a|=-0xb35*-0x1+0x3*-0x219+-0x4ea;continue;case'10':_0x269d18&=-0x1*0xbb6+0x1a1a+-0xd65;continue;case'11':return{'real':_0x61996d,'fake':_0xd22cec,'act':_0x238717,'init':_0x2b5ce0,'key':_0x269d18,'hidden':_0x2dba2a};case'12':var _0x2b5ce0=_0x3d7f39['IBBAI'](_0x4d7e8d,_0x3d7f39[_0x4e1dac(0x221)](_0x3d7f39['LaELY'](_0x3881d2,_0x33328a),_0x4cd965[_0x4e1dac(0x3c5)+'d']),'u8');continue;case'13':var _0x238717=_0x3d7f39['YGXTw'](_0x4d7e8d,_0x3881d2+_0x33328a+_0x4cd965[_0x4e1dac(0x14a)+'e'],'u8');continue;case'14':_0x238717&=0xf*0x31+0x295*0x6+-0x125c;continue;}break;}}function _0x136509(_0x5b375b,_0x441c52,_0x388a49,_0x209e4a){var _0x46e2be=_0x1c650b,_0x72ec3d=_0x385007[_0x388a49],_0x27fc00=_0x2fd44e(_0x5b375b,_0x441c52,_0x72ec3d[_0x46e2be(0x169)]);if(!_0x27fc00)return![];var _0x56094b=new DataView(_0x27fc00[_0x46e2be(0xd8)+'r'],_0x27fc00['byteO'+_0x46e2be(0x3e9)],_0x27fc00[_0x46e2be(0x152)+_0x46e2be(0x5f0)]),_0x1e7a7c=_0x72ec3d[_0x46e2be(0x483)+'pe']==='u8'?_0x56094b[_0x46e2be(0x431)+_0x46e2be(0x257)](_0x72ec3d[_0x46e2be(0x5e5)]):_0x56094b['getIn'+'t32'](_0x72ec3d[_0x46e2be(0x5e5)],!![]),_0x99cf04;if(_0x3d7f39['Zegmj'](_0x388a49,_0x3d7f39['oNcnk']))_0x99cf04=_0x4f4f53(_0x209e4a);else{if(_0x388a49===_0x46e2be(0x5a4))_0x99cf04=_0x209e4a|0xfab+-0x2406+0xc1*0x1b;else _0x99cf04=(_0x209e4a?-0x10*0x26f+-0xfa3+0x3694:-0x1211+-0xcd*0x1+-0x6*-0x325)&0x1c*0x47+-0x13bb*0x1+0xcf6;}return _0x3768a0(_0x3d7f39['bLaXH'](_0x5b375b,_0x441c52)+_0x72ec3d['hidde'+'n'],_0x46e2be(0x2e3),_0x99cf04^_0x1e7a7c)&&_0x3768a0(_0x3d7f39['gYkua'](_0x5b375b,_0x441c52)+_0x72ec3d[_0x46e2be(0x28f)],_0x388a49==='obfF'?_0x3d7f39[_0x46e2be(0x63b)]:_0x388a49===_0x3d7f39[_0x46e2be(0x1d1)]?'i32':'u8',_0x3d7f39['JTIWX'](_0x388a49,_0x3d7f39[_0x46e2be(0x4d3)])?_0x209e4a:_0x388a49==='obfI'?_0x209e4a|0x16e7+-0x38d*0x3+-0xc40:_0x209e4a?0x1a89+-0x4*-0x7ae+0x1ca0*-0x2:-0x55+0x1896*-0x1+0x18eb*0x1)&&_0x3768a0(_0x3d7f39[_0x46e2be(0xd9)](_0x3d7f39['hMqOt'](_0x5b375b,_0x441c52),_0x72ec3d[_0x46e2be(0x14a)+'e']),'u8',0x270+0x8ad+-0xb1d);}var _0x2c3c3c={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0x34f042=0x44*0x37+0x8e1+-0x177d*0x1+0.03,_0x5d3066=-0x4d*-0x35+-0x6*0x26e+-0x15b*0x1,_0x3e9086={},_0x439c1e=0xfe6+0x1*0x1179+-0x215f*0x1,_0x52d859=[],_0x22fdec=[];function _0x3abefe(_0x343c74){var _0x33c124=_0x1c650b,_0x46daf6={'OVSJs':function(_0x2c7e02,_0x207255){return _0x2c7e02===_0x207255;},'HIdQR':_0x33c124(0x64f)+'ined','lzptq':function(_0x3be86f,_0xa05d52){return _0x3be86f(_0xa05d52);}};if(_0x3d7f39[_0x33c124(0x7f)]===_0x33c124(0x434)){var _0x43bbea=_0x2e3fc3[_0x33c124(0x5ed)+_0x33c124(0xa1)+_0x33c124(0x90)]||[],_0xb5d9ca=[];_0x22fdec=[],_0x52d859=[];for(var _0x17667d=-0x34a+0x2609+-0x1*0x22bf;_0x17667d<_0x43bbea['lengt'+'h'];_0x17667d++){var _0x2d5c1f=_0x43bbea[_0x17667d][0x1*0x2bb+0xd*0x218+-0x1df3];if(_0x43bbea[_0x17667d][0x541*-0x1+0x232f+-0xa3*0x2f]!==_0x33c124(0x60f))continue;var _0x578a36=_0x3d7f39['zUTHh'](_0x8bbc8f,_0x343c74,_0x2d5c1f,'obfF');if(!_0x578a36||_0x3d7f39[_0x33c124(0x3c8)](_0x578a36[_0x33c124(0x3c5)+'d'],0x1385+-0x1217+0x49*-0x5))continue;var _0xdc7107=_0x3d7f39[_0x33c124(0x285)](_0x5aa587,_0x33c124(0x60f),_0x578a36['hidde'+'n'],_0x578a36['keyAt'+'Offse'+'t0']);if(_0x3d7f39['MEtdS'](typeof _0xdc7107,_0x3d7f39['ZuFmV'])||!isFinite(_0xdc7107))continue;var _0x4e6bed=_0x343c74+':'+_0x2d5c1f,_0xf4789d=_0x3e9086[_0x4e6bed];if(!_0xf4789d||_0xdc7107!==_0xf4789d[_0x33c124(0x45c)+_0x33c124(0x3ef)+'n'])_0xf4789d=_0x3e9086[_0x4e6bed]={'base':_0xdc7107,'lastWritten':null};var _0x565182=_0xf4789d['base'],_0x1b3894=Math[_0x33c124(0x1e4)](_0x565182);if(_0x3d7f39['scOYJ'](_0x1b3894,-0xe46+-0xb78+-0x5*-0x526+0.0001)||_0x1b3894>-0x277d4+0x1b*0x83e+0x31fea){_0x22fdec['push']({'o':_0x2d5c1f,'v':_0xdc7107,'why':_0x33c124(0x2b1)+_0x33c124(0xbe)+'e'});continue;}_0xb5d9ca[_0x33c124(0x17a)]({'o':_0x2d5c1f,'v':_0xdc7107,'a':_0x1b3894,'base':_0x565182,'key':_0x4e6bed,'st':_0xf4789d});}var _0x158c37=[];for(var _0xd8495b=0x25d8*0x1+0x3*-0xb17+-0x493;_0x3d7f39['jUeMr'](_0xd8495b,_0xb5d9ca[_0x33c124(0x63e)+'h']);_0xd8495b++){var _0x8f7714=_0xb5d9ca[_0xd8495b]['a'],_0xd3990a=null;for(var _0x5a0968=-0x22f9+0x15b3+0xd46;_0x5a0968<_0x158c37[_0x33c124(0x63e)+'h'];_0x5a0968++){var _0x43941a=_0x158c37[_0x5a0968][_0x33c124(0x646)]/_0x8f7714;if(_0x43941a>0x53*-0xb+-0x5*-0x81+0x10d-_0x34f042&&_0x43941a<0x2275+-0x15*0x11f+-0x3*0x3a3+_0x34f042){if(_0x33c124(0x4a9)!=='zvCct')return 0x1*-0xa31+0x1*-0x1115+0x1b46;else{_0xd3990a=_0x158c37[_0x5a0968];break;}}}!_0xd3990a&&('TsTlX'!=='TsTlX'?_0x346f76['error']=_0x1e8543(_0x5e8ad9&&_0x100604[_0x33c124(0x39c)+'ge']||_0x2cafbd):(_0xd3990a={'mean':_0x8f7714,'members':[]},_0x158c37[_0x33c124(0x17a)](_0xd3990a)));_0xd3990a['membe'+'rs']['push'](_0xb5d9ca[_0xd8495b]),_0xd3990a['mean']=0x1d5e+0x1195+-0x2ef3;for(var _0x38f8f0=-0xd71+0xa84+0x2ed;_0x3d7f39['REgfd'](_0x38f8f0,_0xd3990a['membe'+'rs'][_0x33c124(0x63e)+'h']);_0x38f8f0++)_0xd3990a['mean']+=_0xd3990a[_0x33c124(0x24d)+'rs'][_0x38f8f0]['a'];_0xd3990a[_0x33c124(0x646)]/=_0xd3990a[_0x33c124(0x24d)+'rs']['lengt'+'h'];}var _0x144acd=[];for(var _0x42ef78=0x24*0x88+-0x9ac+-0x2c*0x37;_0x42ef78<_0x158c37[_0x33c124(0x63e)+'h'];_0x42ef78++){if(_0x33c124(0x52f)!=='YCcFz'){var _0x5cfba1=_0x110298[_0x23d78],_0x47f586=typeof _0x4c186b[_0x5cfba1];_0x58d72e[_0x5cfba1]=_0x46daf6[_0x33c124(0x5f6)](_0x47f586,_0x46daf6[_0x33c124(0x1be)])?_0x46daf6['HIdQR']:_0x47f586;}else{if(_0x158c37[_0x42ef78]['membe'+'rs']['lengt'+'h']>=_0x5d3066)_0x144acd['push'](_0x158c37[_0x42ef78]);}}if(!_0x144acd[_0x33c124(0x63e)+'h']){_0x22fdec['push']({'o':-(0x7e*-0x47+0xa12+0x1*0x18e1),'v':0x0,'why':'no\x20gr'+_0x33c124(0x3fc)+'f\x20'+_0x5d3066+('\x20Obsc'+_0x33c124(0x48a)+_0x33c124(0x105)+_0x33c124(0x331)+'ed')});return;}var _0x1483b2=_0x144acd[0x14b0+-0x1*0x214a+0xc9a]['mean'];for(var _0x596fd7=-0x7e6+-0x1f3*-0x13+0x1d23*-0x1;_0x596fd7<_0x144acd['lengt'+'h'];_0x596fd7++)if(_0x144acd[_0x596fd7][_0x33c124(0x646)]<_0x1483b2)_0x1483b2=_0x144acd[_0x596fd7]['mean'];var _0x4f4994=_0x3d7f39['Bevyf'](_0x1483b2,0x1c47+-0xe23+-0xe24+0.5);for(var _0x1fe7d1=-0x1*-0xeae+0x24cc+-0x337a;_0x1fe7d1<_0x158c37['lengt'+'h'];_0x1fe7d1++){if(_0x3d7f39[_0x33c124(0x629)](_0x158c37[_0x1fe7d1][_0x33c124(0x24d)+'rs'][_0x33c124(0x63e)+'h'],_0x5d3066))continue;for(var _0x3da5e1=-0x11*0x1db+0x115*0x1f+-0x200;_0x3d7f39[_0x33c124(0x1f2)](_0x3da5e1,_0x158c37[_0x1fe7d1]['membe'+'rs'][_0x33c124(0x63e)+'h']);_0x3da5e1++){_0x22fdec['push']({'o':_0x158c37[_0x1fe7d1][_0x33c124(0x24d)+'rs'][_0x3da5e1]['o'],'v':_0x158c37[_0x1fe7d1][_0x33c124(0x24d)+'rs'][_0x3da5e1]['v'],'why':'singl'+'eton'});}}for(var _0x4fbb88=0x2697+-0x15*0xf+-0x4*0x957;_0x3d7f39['JZfaL'](_0x4fbb88,_0x144acd[_0x33c124(0x63e)+'h']);_0x4fbb88++){var _0xb64a46=_0x144acd[_0x4fbb88][_0x33c124(0x24d)+'rs'];for(var _0x5e6bf9=0x1182+0x3*-0xc25+-0x64f*-0x3;_0x3d7f39['scOYJ'](_0x5e6bf9,_0xb64a46[_0x33c124(0x63e)+'h']);_0x5e6bf9++){var _0x5f3726=_0xb64a46[_0x5e6bf9];if(_0x3d7f39[_0x33c124(0x1f2)](_0x5f3726['a'],_0x4f4994)){_0x22fdec[_0x33c124(0x17a)]({'o':_0x5f3726['o'],'v':_0x5f3726['v'],'why':_0x3d7f39[_0x33c124(0x3ed)](_0x33c124(0x1c8)+'\x20floo'+'r\x20',_0x4f4994[_0x33c124(0x384)+'ed'](-0x1*0x832+0x625+-0x1f*-0x11))});continue;}var _0x5bfb23=_0x5f3726['base']*_0x2c3c3c['facto'+'r'];_0x136509(_0x343c74,_0x5f3726['o'],_0x3d7f39[_0x33c124(0x4d3)],_0x5bfb23)&&(_0x5f3726['st']['lastW'+'ritte'+'n']=Math[_0x33c124(0x2af)+'d'](_0x5bfb23),_0x439c1e++,_0x52d859[_0x33c124(0x17a)](_0x3d7f39[_0x33c124(0x4c9)]('0x',_0x5f3726['o']['toStr'+'ing'](-0x1b59+0x1*-0x103d+-0x2*-0x15d3))));}}}else _0x57a968=_0x46daf6[_0x33c124(0x64d)](_0x36e0f3,_0x34421f&&_0x15f4d3[_0x33c124(0x39c)+'ge']||_0x3b3894);}var _0x2e3fc3={'FPScontroller':[[-0x2469+0x970+-0x9*-0x301,'obfF'],[0xb0*0x17+-0x824+0x1*-0x784,'obfF'],[0x633+0x0+-0x5f3,'obfF'],[0xb*-0x293+0x1*0x2558+0x39*-0x27,_0x1c650b(0x60f)],[0x2*-0x8ec+-0x3e6*0xa+0x3944,'obfF'],[-0x1*-0xa6f+-0x49*0x86+0x1c4f*0x1,_0x3d7f39['oNcnk']],[0x1654+0x2b*0x95+0x1*-0x2ebb,_0x3d7f39['oNcnk']],[0x1*-0x1114+-0xa33+0x1*0x1bff,_0x1c650b(0x532)],[0x7*0x89+-0x1*-0x60d+-0x908,_0x3d7f39['oNcnk']],[0xa*-0x81+-0x1f67+0x254d,_0x3d7f39[_0x1c650b(0x102)]],[0x1d04+-0x22c0+0x69c,'v3'],[-0x22a*-0x5+-0x176d+0xd87,'u8'],[-0x20d3*-0x1+-0x1*-0x2131+-0x1*0x4114,_0x3d7f39[_0x1c650b(0x4d3)]],[-0x10fc+-0xbee+0x1df2,'i32'],[-0x1859*0x1+-0x1*0x17f5+0x315a,'u8'],[-0x1af9+0x153*0x11+0x586,_0x3d7f39[_0x1c650b(0x102)]],[0x2125+0x1*0xc41+-0xb7*0x3e,'u8'],[0x2615+0xbe7+-0x30e7,'u8'],[0x5*0xa7+0x2238+-0x245f,'obfF'],[-0x1*-0xccf+-0x23*-0x87+-0x4*0x784,_0x3d7f39['oNcnk']],[-0x6de+0xd*0x95+0x99,_0x3d7f39['ntOxI']],[0x846+0x1fc3*-0x1+0x18cd,_0x3d7f39[_0x1c650b(0x63b)]],[-0x2db+0x1*0x214c+0x1d1d*-0x1,'v3'],[0x1e10+0x470*0x5+0x10*-0x32e,'v3'],[0x2152+0x1*0x21eb+0x1d*-0x245,_0x3d7f39[_0x1c650b(0x63b)]],[-0x1*0x1607+0xbaa+0xbcd,'f32'],[0x9a+0x6d0+-0x5e2,'u8'],[0x1e79*-0x1+0xed+0x1f18,_0x1c650b(0x52e)],[0x17*0xd+0x1276+-0x1b*0xab,'v3'],[-0x178f+-0x5de+0x1f11,'u8'],[0xcb9*0x1+0x17b+-0xc80,_0x1c650b(0x52e)],[0x1327*-0x2+-0x1*-0x1316+0x14f0,_0x3d7f39[_0x1c650b(0x63b)]],[0x195d*-0x1+0x9*0x67+0xbbd*0x2,'u8'],[-0x8f3+-0x22c4+-0xb5d*-0x4,'u8'],[0x6b*-0x5+-0x2035+0x240c,'obfF'],[0x2*-0x878+0x2537+0x79*-0x27,'f32'],[-0x1c*-0x11d+-0x1a0+0x2*-0xdd8,'u8'],[-0x244e+0xaa0+-0xdc7*-0x2,'obfF'],[-0x21ad+0xb29*-0x1+0x2ece,'v3'],[-0x15*-0xd+0x53e*-0x1+0x635,_0x1c650b(0x532)],[0x2*-0x32d+-0x2662+-0x2*-0x176a,'f32'],[-0x65b+0xff7+-0x2*0x3c0,_0x3d7f39[_0x1c650b(0x63b)]],[0x1*0x227f+0x1ae7*0x1+-0x3b1a,_0x3d7f39[_0x1c650b(0x63b)]],[-0xa6+0x32*0x5+0x1fc,_0x3d7f39[_0x1c650b(0x63b)]],[0x727*0x4+-0x2010+0x5c8,_0x3d7f39[_0x1c650b(0x63b)]],[0xa89+0x197*-0x14+0x179b*0x1,'f32'],[-0x37+-0x2463+0x26f6,'u8'],[0x12d1*0x2+0x3cf+-0xa4*0x3d,'u8'],[0x200e+0x1d*-0x36+-0x2*0xbc9,'u8'],[0x98c+0x1685*0x1+0x2b3*-0xb,_0x1c650b(0x52e)],[-0x1904*0x1+-0x1*-0x20ec+-0x1*0x584,'u8'],[0x20c+0x1470+-0x1417,'u8'],[0x2*0xef7+-0x268d+-0x1*-0xb07,_0x3d7f39[_0x1c650b(0x63b)]],[-0x1afc+0x1*0x1acf+0x13*0x23,_0x3d7f39[_0x1c650b(0x63b)]],[0x2*-0x290+0xf90+-0x20*0x40,'f32'],[-0x17d5*-0x1+-0x1eef+0x98e,_0x3d7f39['ntOxI']],[-0x1*-0xa85+-0x2*-0xbe+-0x989,_0x1c650b(0x52e)],[0x1b4d+0x1ce6+-0x35b7,_0x3d7f39['ntOxI']],[-0x2*-0x215+-0x913+0x769,_0x3d7f39['ntOxI']],[-0x132b+-0x25f5+0x3ba4,'v3'],[-0x15*0x174+0x4*0x236+-0x40*-0x61,'u8'],[0x5*0x5e5+0x2559+-0x1*0x403a,'v3'],[-0x485*-0x1+-0x81+-0x160,_0x3d7f39['ntOxI']],[-0x13a7+-0xaa6+-0x16f*-0x17,'v3'],[-0x1663+0x14dd*-0x1+-0x2*-0x16fc,_0x1c650b(0x52e)],[0x4*0x8f5+-0x16d9+-0xa3f,_0x1c650b(0x52e)],[0x2dc+0x51c+-0x538,_0x1c650b(0x52e)],[-0x1250+-0xbf0+0x2104,'u8'],[-0x248f+-0x1b26+-0x43*-0xfe,'u8'],[-0x1da8+0x4*-0x919+-0x226a*-0x2,'f32'],[-0x1*0x2289+-0x1c*0x18+-0x2805*-0x1,'f32'],[-0x1de*-0x1+-0x2*0x126e+0x1*0x25e2,'v3'],[0x90*0x5+0xbb*0x12+-0xd06,'v3'],[-0x18fe+-0xb2c+0x2726,_0x3d7f39[_0x1c650b(0x63b)]],[-0x1*0x21a3+0x49*0x17+0x1e14,_0x3d7f39[_0x1c650b(0x63b)]],[0xcb4*-0x3+0x3d9*0x6+0x2*0x905,'f32'],[-0x1f86+-0x15*-0x121+0xad9,_0x3d7f39[_0x1c650b(0x63b)]],[0x25f4+-0x1*-0x29b+0xc81*-0x3,'v3'],[0x1698+-0xae8*0x1+-0x898,'u8'],[0x21a8+-0x466*0x5+0x1b6*-0x5,'v3'],[0x4*0x21+0xccd+0x99*-0x11,_0x1c650b(0x2e3)],[0x1a7e+0x321+-0x1a73,_0x1c650b(0x52e)],[-0x1a97+-0x2179+-0xb8*-0x58,_0x1c650b(0x52e)],[-0x1b3e+-0x2*0x433+0x26d8,_0x3d7f39[_0x1c650b(0x63b)]],[-0xb*-0xb0+-0x134f*-0x2+-0x2af2,_0x1c650b(0x52e)],[0xdf*0x25+-0x109*-0x1+-0x1e04,'u8'],[0x13a*0x2+-0x1*0x1343+0x1410,'u8'],[0xc95+0x1*0x677+-0xfc0,'u8'],[-0x1a9+0x249d+-0xa8d*0x3,'u8'],[0x11b6+-0x1ec2*-0x1+0x1695*-0x2,'u8'],[0x23e3+0x647*0x3+-0x3368,_0x1c650b(0x52e)],[-0x269b*-0x1+0x1942*-0x1+0x2d*-0x39,_0x3d7f39['ntOxI']],[0xc4e+-0x101*-0xe+-0x1704,'f32'],[0x877*0x2+0x1dcd+-0xe75*0x3,_0x1c650b(0x52e)],[-0x8d1+-0xa97+0x16c8,_0x1c650b(0x52e)],[-0xdf6*-0x2+0x18b6+-0x47a*0xb,'u8'],[-0x14d9+-0x59*-0x1+0x78*0x33,_0x3d7f39['ntOxI']],[0x2*0x611+-0x1bd0+0x131a*0x1,_0x1c650b(0x52e)],[0x3a9+-0x35f+0x3e*0xd,'u8'],[0x7*0x563+-0x9a*-0xd+-0x2a0f,'v3'],[0x12*0x124+-0x1136+0x32,'v3'],[0x621+-0x247+-0x4a,'v3'],[-0x4*-0x6b3+0x19b6+-0x30e6,_0x3d7f39['ntOxI']],[-0x1d8a+-0x8a*-0x13+0x16ec,_0x3d7f39[_0x1c650b(0x63b)]],[-0x6dd+0x1b81+0x88*-0x20,_0x1c650b(0x52e)],[-0x16dd+0x1641+-0x1*-0x444,'v3'],[-0x7e1+0x7e2*0x2+-0x3*0x165,_0x1c650b(0x2e3)],[-0x152a+0x2329*0x1+-0xa47,'u8'],[-0x7*-0x95+0x1298+-0x12ef,_0x1c650b(0x2e3)],[0x2503+0x1c82+0x3*-0x1497,_0x3d7f39[_0x1c650b(0x63b)]],[-0x1*-0x1746+-0x1*0xf1b+-0x17*0x31,'f32'],[-0x401+0x12*-0x1c9+0x27eb,_0x3d7f39['ntOxI']],[-0x17*-0x1af+0x361*-0xb+0x2*0x11f,_0x1c650b(0x52e)],[0x3*-0xc91+0x2439+0x2a5*0x2,'v3'],[-0x158*-0x8+-0xd4e+-0x1*-0x66a,_0x1c650b(0x2e3)],[-0x1268+0x2*0xc8f+-0x2d6,'u8'],[0x71*-0x2e+-0x1d7*0xd+0x1*0x301a,'u8'],[-0xb*0x206+0x11*0x23+0x367*0x7,'u8'],[0x1f3e+0xa*-0x2e6+-0xd1*-0x2,_0x3d7f39[_0x1c650b(0x63b)]],[-0x2e*0x25+-0x7d8+0x1266,_0x3d7f39['LhkTR']]],'HealthScript':[[0x1b*-0x84+0x3*0x287+-0x1d*-0x3b,'u8'],[0x1353+-0x8cd+-0x2*0x515,'i32'],[-0x1165*-0x2+-0x19e+-0x20ac,_0x3d7f39[_0x1c650b(0x63b)]],[-0x1cf*-0x9+-0x605*0x1+0x2b*-0x3a,_0x3d7f39['ntOxI']],[-0xc12*0x2+-0x11f9*-0x1+0x6b3,'f32'],[0x17*-0x175+0xd69+0x1*0x14a6,_0x3d7f39['ntOxI']],[-0x2336+-0x7b5*0x1+0x1*0x2b7b,'f32'],[-0x9*-0x184+0x25da+0x1975*-0x2,_0x1c650b(0x52e)],[-0x14f6*-0x1+0x481+0x1*-0x18d7,'i32'],[0x1139+0x2b*0x93+0x12*-0x24b,_0x1c650b(0x2e3)],[-0x7*0x21a+-0x8a+0x7f4*0x2,'u8'],[0x176c+-0x168b*0x1+-0x8*0x7,'u8'],[-0x1*0x263b+-0x2*0x7af+0x1*0x3643,'u8'],[-0x10*0xa4+-0x1d45+0x10*0x283,'u8'],[0x825+-0x269+-0x4fc,'obfI'],[-0x1*-0x11c3+0x98*0x29+-0x2947,_0x1c650b(0x5a4)],[0x186c+-0x1*-0x104d+-0x27d1,_0x3d7f39['OHOPv']],[-0xdfb*-0x2+-0x1*-0x65d+-0x2157,_0x1c650b(0x5a4)],[-0x58*0x62+0x6*-0x303+0x34d2,_0x3d7f39[_0x1c650b(0x1d1)]],[0x6*0x5f3+-0x1648+-0x1*0xc46,_0x1c650b(0x532)],[-0x1eb6*0x1+0x12d0+0xd16,_0x3d7f39['oNcnk']],[0x17*0x14e+-0x8f*0x3+0x569*-0x5,_0x3d7f39['ntOxI']],[0x121*-0x4+-0x983+-0x1*-0xf53,_0x3d7f39[_0x1c650b(0x63b)]],[-0x1485+0x1ab*0x7+0xa28,_0x1c650b(0x52e)],[-0x185c+-0x1a16+0x33c6,_0x1c650b(0x52e)],[0x15f5+0x2295+-0x7*0x7e2,_0x1c650b(0x52e)],[-0x66e*0x2+0xb*0x95+0x7d5,'v3'],[0x4*0x3bf+-0x3dc*-0x1+-0x1168,'f32'],[0x1a*-0x10f+0x15a3+0x1*0x75b,'f32'],[0xd56+-0x5*-0x18+-0xc4e,'u8'],[-0x1c35+0x1aa1+0x320,'u8'],[-0x44+-0x92a+0xafe,_0x3d7f39[_0x1c650b(0x102)]]],'PlayerConfig':[],'WeaponManager':[[-0x1efb+0x6*0x4b2+0x1*0x2e7,_0x1c650b(0x2e3)],[0xa78+0x52d+-0xf89*0x1,_0x1c650b(0x2e3)],[-0x1d41+0x143d+-0x3c*-0x27,'u8'],[0x1cb9+-0x1a35+-0x260,'i32'],[-0x53*-0x3+0xbad+-0xc42,_0x1c650b(0x60f)],[0x122d+0x1ee8+0x1d*-0x1ad,_0x3d7f39[_0x1c650b(0x63b)]],[0x1*-0x467+-0x1478+-0x43*-0x61,_0x1c650b(0x2e3)],[0x33b*0x1+-0x1*0x607+0x6*0x8e,'u8'],[0x1507*-0x1+0x286+-0x2*-0x985,'u8'],[-0x2153*-0x1+-0x50e*-0x3+-0x3*0xffb,_0x1c650b(0x2e3)],[0x3*0x191+0x2dd*0x9+-0x1de8,_0x3d7f39[_0x1c650b(0x63b)]],[0x8d1+0x2*-0x10f5+0x19b1,_0x1c650b(0x52e)],[-0x2312+-0x20*0x11a+0x46fe,_0x1c650b(0x2e3)],[-0xcdb+0x1*-0xb3+0x2*0x725,'u8'],[0x2*0x827+-0x1f5f+0xfed,_0x3d7f39['OHOPv']],[0xf*-0xe9+0x95d+-0x29d*-0x2,_0x1c650b(0x5a4)],[-0x1d87+0x24c+0x409*0x7,_0x1c650b(0x52e)],[-0x1436+-0x1bb4+0x30f2,'f32'],[0x2211+0x1*0x61+-0x2166,_0x1c650b(0x52e)],[0xa47+0x134b+-0x1c7a,'f32'],[-0x6*0x284+-0x167d*0x1+0x26b5,'f32'],[0xab*0x35+0x1a82+-0x3cc1*0x1,'u8'],[0x11*0x1c2+-0x130*-0x1b+-0x3cc6,_0x1c650b(0x5a4)],[-0x227*-0xd+0x1*0x16d7+-0x3192,'obfI'],[-0x68*0x55+0x25bf+-0x1e3,_0x3d7f39['OHOPv']],[-0x123*0xb+-0x1377+-0x164*-0x18,_0x1c650b(0x532)],[0x16d4+0xcaf+0x1*-0x220f,'obfB'],[-0x194b+-0x10f6+0x2bc1,_0x3d7f39[_0x1c650b(0x3dc)]],[-0x2282+-0xa29+-0x2e37*-0x1,'obfB'],[-0x87a+0x178+0x8a6,_0x1c650b(0x532)],[-0x3*0x808+0xb86+0xe42,_0x1c650b(0x5a4)],[-0x101*-0x7+0x2060+-0x1*0x259b,_0x1c650b(0x2e3)],[-0x3*-0xa01+0xab*0x26+-0x3595,'u8'],[-0x22db+0x23c*-0x4+-0xe5*-0x33,_0x1c650b(0x2e3)],[0x2593+-0x198d+-0x1*0xa2e,'i32'],[0x2c6+0x4*0x84a+-0x21ee,_0x3d7f39['LhkTR']],[-0x1f*-0x10b+-0xfd3*0x2+-0x165*-0x1,'u8'],[0x1*-0x1bec+-0x3*0xb85+0x1*0x4097,'u8'],[-0x2*-0x19c+-0x1d30+0x1c15,'u8'],[-0x3a1*-0x1+0x1*-0x26f+-0x4*-0x3b,'u8'],[-0x1b7a+-0xe6a+0x2c03,'u8'],[0xcd*-0x17+0x2*-0x68f+0x6c5*0x5,_0x3d7f39[_0x1c650b(0x102)]],[-0xd0a*-0x2+0xf*-0x1a5+0xef,'u8']],'GG_GameManager':[[-0x1296*-0x1+-0xe5d+-0xd1*0x5,'u8'],[0x29c*0x3+0xf*0x8d+-0xfeb,_0x1c650b(0x52e)],[-0x1d11+-0x3*-0xcad+-0x8b2,'u8'],[-0xcf7+0x5a8+0x14*0x61,'u8'],[0x3*-0x5c7+0x9*-0x315+-0xf*-0x306,_0x1c650b(0x52e)],[0xb*0xc2+-0x1*0x1b23+0x1319*0x1,_0x3d7f39[_0x1c650b(0x63b)]],[-0x1151+0x655*0x1+-0x3c4*-0x3,'i32'],[0x382*-0x3+0x3b1+0x729,_0x3d7f39['LhkTR']],[-0x11f4+0xb*-0xdf+0x1be1,'u8'],[0x1d*0xe7+-0x104d+0x4b5*-0x2,'u8'],[-0x5*-0x505+-0x2*0x517+0x3*-0x4d1,_0x3d7f39['ntOxI']],[-0x3d*-0x6f+-0x2251+0x85a,_0x3d7f39[_0x1c650b(0x63b)]],[0xd2a+-0x1e5a+0x11c0,_0x1c650b(0x2e3)],[0x1*0x2048+-0xab5*0x2+-0x3*0x36e,'u8'],[0xdea+-0x2568+-0x146*-0x13,_0x3d7f39[_0x1c650b(0x102)]],[0x22ef+-0x1*-0xeff+-0x3132*0x1,_0x3d7f39[_0x1c650b(0x102)]],[-0xba4+0xec1+-0x25d,_0x3d7f39[_0x1c650b(0x102)]],[0x1*0x2363+0x4f6+-0x2771,'obfI'],[0x5cb*-0x5+0x280+0x1*0x1b73,_0x3d7f39[_0x1c650b(0x1d1)]],[0x21*0xde+-0x6c3+-0x14cb,_0x3d7f39[_0x1c650b(0x1d1)]],[0x46*-0x65+-0x1493*0x1+0x315d,'u8'],[0x21c9+0x22ec+-0x4385,_0x1c650b(0x2e3)],[-0xd9e+0x7*-0x523+0x32f7*0x1,'u8'],[-0xf83+0xd9f+-0x8e*-0x6,_0x1c650b(0x52e)],[0x46+-0x209b+0x21d5,'u8'],[0x111c+-0x2233+0x129f,'u8'],[0x83*-0x45+0x1d*-0x152+-0x67*-0xbb,'u8'],[0x1*0xb6b+-0x1308*-0x1+-0x1ccb,'i32'],[-0x305*0x1+0x15b6+-0x1*0x1105,_0x3d7f39[_0x1c650b(0x63b)]],[-0xe62+-0x2018+0x302a,'u8'],[-0x509+-0x977*-0x2+-0xc34,'u8'],[0x8b0+-0x1eff+-0x1*-0x1807,'i32'],[0x2*0xdcd+-0x1*0x2f9+-0x16e5,'i32'],[0xf*-0x15a+-0xb58+0x215e,'f32'],[-0x55c*0x2+-0x10c*0x1c+0xd6*0x32,_0x1c650b(0x2e3)],[-0xbb0+-0xbc3*-0x1+0x1b5,'f32'],[0x1f*-0xf5+0x29*0x47+0x1418,_0x1c650b(0x2e3)],[-0x247a+0x141c+0x122e,_0x1c650b(0x2e3)]],'TDM_GameManager':[[0x2*0x1+-0x2415+0x242b,'u8'],[-0x1a5a+0x15ea+0x490,'u8'],[-0x10f*0x13+0xb*0x36a+0x8a8*-0x2,'u8'],[0xc8+-0x674*-0x6+0xe5*-0x2c,_0x3d7f39['ntOxI']],[-0x22aa+0x62e+0x1cd4,'u8'],[0x83b*-0x2+-0x5*-0x325+0x1*0x119,_0x1c650b(0x52e)],[0xbd3+0xe*-0x1ce+0xdd1,_0x1c650b(0x52e)],[0x6d3*-0x3+0x702+0xddb,'i32'],[-0x16fe+-0x1a4a*0x1+-0x3*-0x1090,_0x3d7f39['LhkTR']],[0x15*-0xe6+-0x4ea+0xc1a*0x2,'u8'],[-0x5*0x241+0x1*0x93b+0x277,'u8'],[0x21fc+0x187*0x3+-0x2621,_0x3d7f39['ntOxI']],[-0x1838*-0x1+0x22b3+-0x9*0x67f,'f32'],[0x2499+-0x3*-0xbc5+-0x4770,'i32'],[0x15*-0x8f+0xb*0x298+-0x1041,'u8'],[0x263*0x9+0xbd6+-0x20c1,_0x3d7f39[_0x1c650b(0x1d1)]],[-0x1e13+0xcab*0x1+-0x92*-0x20,_0x1c650b(0x5a4)],[-0x3*-0x651+-0x836*0x1+-0x9d1,'obfI'],[-0x121c*0x1+-0xc*-0x22a+-0x6dc,_0x1c650b(0x5a4)],[-0x55*-0x3a+0x1513+0x305*-0xd,'u8'],[-0x515+-0x8c3*0x1+-0x2*-0x79a,'u8'],[-0x1646+0x1*0xeef+0x8b7*0x1,_0x1c650b(0x2e3)],[0x1*-0x745+-0x1fdc+0x288d,'u8'],[-0x152+0x2683*-0x1+-0x49*-0x91,'u8'],[0xa*-0x17b+0x1*0x1004+0x52,'f32'],[0x2121+-0x1fc9+0x34,_0x3d7f39[_0x1c650b(0x102)]],[-0x4ec+0xd66+0x162*-0x5,'i32'],[0x1af6+0x255+-0x1bb7,_0x3d7f39['ntOxI']],[-0x1799+0x1f63+0x1*-0x632,_0x1c650b(0x2e3)],[-0x99c+0x83f+-0x2f9*-0x1,_0x3d7f39[_0x1c650b(0x102)]],[-0x1b33+0x25a3+-0x8d0,_0x3d7f39['ntOxI']],[0x12*0x173+0x1069+0x28db*-0x1,'f32'],[-0x1*0x52f+-0x10df*0x2+0x2895,_0x1c650b(0x2e3)],[0x1d7c+-0x2*-0xdab+0x3722*-0x1,'u8'],[-0x13a5+-0x7fe*-0x2+0x89*0xa,'u8'],[0xd67*0x2+-0x18ad*-0x1+-0x31c3,'f32']],'PhotonNetworkSync':[[-0x553*0x7+-0xef*-0x22+0x5bb,'v3'],[0x3c*-0xf+-0x12ff*-0x1+0x22d*-0x7,'i32'],[-0x118+-0xf6+0x252,'u8'],[-0x12cd*-0x1+-0x29*-0xb9+0x1*-0x3029,'u8'],[0xa5e+-0x129d+0x3b*0x25,'v3'],[-0x1c8d+-0x1*-0x864+0x1*0x147d,'u8'],[0x10d3+0x719+-0x3ee*0x6,_0x1c650b(0x2e3)],[0x5c8*0x4+0x38f*0x7+-0x2fad,_0x3d7f39[_0x1c650b(0x102)]],[0x13bf+0x1*-0x14ac+0x6f*0x3,_0x1c650b(0x52e)],[0x3*-0xa07+-0x1393+0x320c*0x1,_0x1c650b(0x52e)],[-0xcd4*-0x3+-0x192b+-0xce9,_0x1c650b(0x52e)],[-0x14b1+-0xfc9+0x2*0x1273,'v3'],[-0x1b5+-0xd*-0x15d+-0xf8c,_0x1c650b(0x52e)],[-0xd0*0x23+0xaee+0x11fe,_0x1c650b(0x52e)],[0x62*-0x3b+-0x1460+0x2b76,_0x3d7f39[_0x1c650b(0x102)]],[0x12f8+0x1076*0x2+0x13*-0x2b4,_0x1c650b(0x52e)]],'NetworkPlayerAnimations':[[-0x1c09+0x12*-0x83+0x25e7,'v3'],[0x4*0x1a7+0x2478+-0xc*0x388,'v3'],[-0x1*-0x2503+0x45*0x51+-0x3a18,'u8'],[0x245e+-0x14f7*0x1+-0xea3,'i32'],[-0x1914+-0x1a29+0x3405,_0x3d7f39['LhkTR']],[-0x1d7*0x5+-0xb02*0x3+0x2b05,_0x3d7f39[_0x1c650b(0x63b)]],[0x5*0x689+-0x1b71+-0x46c,_0x1c650b(0x52e)],[0x57b*-0x3+0x5a6+0x9d*0x13,_0x3d7f39[_0x1c650b(0x63b)]],[-0x2443*-0x1+0xf20+-0x3283,_0x3d7f39['ntOxI']],[-0x22ad+0x217+0x1*0x217e,'f32'],[-0x239a+0x1*-0x1db3+0x4239,_0x3d7f39[_0x1c650b(0x63b)]],[0xc91+0x1bc5+0x13b3*-0x2,_0x3d7f39[_0x1c650b(0x63b)]],[0xce0+-0x1b05+0xf19,_0x3d7f39[_0x1c650b(0x63b)]],[0x2648+0x2a*0x15+0x6*-0x6cb,_0x3d7f39[_0x1c650b(0x63b)]],[-0x37*-0x3b+0x2689+-0x323a,'f32'],[0x1d2*-0x7+0x4f*-0x6+-0x7cc*-0x2,_0x3d7f39['ntOxI']],[-0x601+0x1*-0x257d+0x2c82,'f32'],[-0x1*-0x2669+0x325*0x1+-0x2886,_0x1c650b(0x2e3)],[0x5*0x6b1+0x2581+-0xba7*0x6,'u8'],[0x17e6+0x1*-0xf97+-0x73f,_0x1c650b(0x2e3)],[-0x1520+0x1ec2+-0x88e,_0x1c650b(0x2e3)],[0x1acf*-0x1+0x121*-0xa+0x2731,'u8'],[0x21f7+-0x351*0x8+-0x653*0x1,_0x1c650b(0x52e)],[-0x1*-0x1669+0x2275*0x1+0x593*-0xa,_0x1c650b(0x52e)],[0x1*-0x1893+-0x615+0x1fcc,_0x1c650b(0x52e)],[0x2347*0x1+-0x9ca*0x1+-0x1855,'f32'],[-0xe78*0x1+-0x5*-0x41e+-0x4f2,'u8'],[-0x2*-0x5ea+0x127e+-0x1d1a,'u8'],[-0x9c*-0x34+-0x1b47*0x1+-0x1*0x32d,'v3'],[0x133+-0x5*0x404+0x1429,'v3'],[0x8*0xbc+0xa99+-0xee5,'u8']],'NPC_Cotroller':[[0xb35+-0x2dd+-0x844,'v3'],[-0x1*0x2e1+-0x1164+0x1465,'f32'],[-0x21bd+-0x1c67*-0x1+0x57a,_0x1c650b(0x52e)],[0x5c*-0x1d+-0x1f*0x64+0x16de,'u8'],[-0x2*0x11bf+-0x25*-0x4d+0x18b4,'u8'],[-0x1*0x20b3+-0x47d+0x258c,'v3'],[0x1a*-0x5c+0x1*0x2431+-0x3*0x8bf,'u8'],[0x6*-0x251+-0x1df9*-0x1+-0xf73,_0x1c650b(0x52e)],[-0x972+-0x768+-0x1*-0x117e,_0x1c650b(0x52e)],[-0xd*0x31+0x1*0xd57+-0xa22,_0x3d7f39[_0x1c650b(0x63b)]],[0x1c4e+-0xcf*-0x9+-0x22d9,_0x3d7f39[_0x1c650b(0x63b)]],[0x24b6+0x5e9+0x1*-0x29d7,'u8'],[-0x1*-0xf4d+0x1850*-0x1+0x9*0x117,_0x3d7f39['ntOxI']],[-0x17df+-0x15f8*0x1+-0x25*-0x143,'f32'],[-0x1*-0x1d13+-0x3d*0x65+-0x76*0x9,_0x3d7f39[_0x1c650b(0x63b)]],[0x10ed+0xbb6+-0x1bc3,_0x3d7f39[_0x1c650b(0x63b)]],[-0xa05*0x1+0x41f*0x5+-0x9b2,'u8'],[-0xc8a+0x1c7+0xbaf,_0x1c650b(0x52e)],[-0x1b53+0xad+0x1b96,'v3'],[-0x1ad7+-0xdd9*-0x2+0xb*0x3,_0x3d7f39['ntOxI']],[-0x27+-0x1bd6*-0x1+-0x9*0x2f7,_0x3d7f39['LhkTR']],[-0x1cd7+-0xd76*0x1+-0x2b51*-0x1,'f32'],[0x1010+-0x15*0x125+0x5*0x1cd,_0x1c650b(0x52e)],[-0x1fa9+-0x1fcc+0x4081,_0x3d7f39['ntOxI']],[0x1532+0x1*0x25c9+-0x39e7,'v3'],[0x2409+0x1c9c+-0x3f85,_0x1c650b(0x52e)],[0x2115+0x1f4e+-0x9*0x707,_0x3d7f39['ntOxI']],[0xcfb*-0x1+0x1d0b+-0xedc,'v3'],[-0x7*0x367+-0x10*0x11e+0x2af5,'u8'],[-0x2e*0x2f+-0x105+0x83*0x15,_0x3d7f39['ntOxI']],[-0x2*-0xe15+0x2066+-0xed0*0x4,'v3'],[0x3*-0x2e3+0x26*0x2c+0x3*0x12b,_0x3d7f39[_0x1c650b(0x102)]],[-0x3a*-0x88+0x1e8e+-0x2*0x1df9,_0x3d7f39[_0x1c650b(0x102)]],[0x86*0xe+-0x1*-0x179b+-0x1d7f,_0x3d7f39[_0x1c650b(0x63b)]],[0x27*0x25+-0xc28+-0x9d*-0xd,'u8'],[0xe67+0x264f+-0x333e,'v4'],[-0xfe8+0x1707*0x1+0x3*-0x1dd,_0x1c650b(0x52e)],[-0x1de9+-0x24c2+0x16bd*0x3,_0x3d7f39['ntOxI']],[0x1*-0x268c+0x9*0xad+0x2207,_0x3d7f39['ntOxI']],[-0x1ebe+-0x1*-0x2545+-0x4ef,'u8'],[0x210e+-0xd57*-0x2+-0x3a1c,_0x3d7f39[_0x1c650b(0x102)]]],'TargetHealth':[[-0xd74+-0x1bd1+0x2955,_0x1c650b(0x2e3)],[0x1*0x2114+0x31*0x47+0x2e97*-0x1,_0x3d7f39[_0x1c650b(0x102)]],[0x1*0x1e8b+-0x1837+-0x620,'u8'],[0x2b3*-0x2+0x439+0x171,_0x1c650b(0x2e3)],[-0x2689*0x1+0x12a1+-0x10*-0x143,_0x3d7f39['LhkTR']],[-0x1271+-0x1354+0x1*0x2611,_0x1c650b(0x2e3)],[-0x464*0x4+0x2*0x902+0x12*-0x2,'i32'],[-0x26*-0x95+-0x4b1*-0x4+-0x285e,_0x1c650b(0x52e)],[-0x41d*-0x1+0x15e1+-0x1972,'f32'],[-0xd*0x29+-0xc74+-0x305*-0x5,'u8'],[-0x2a2+-0x53a+0x28*0x36,_0x3d7f39[_0x1c650b(0x63b)]],[-0x1*0x22d5+-0x12c4+0x1*0x363d,'u8'],[0x174d+0xf*0x19f+-0x2ef6,_0x1c650b(0x2e3)],[-0x231a+0x4e5*0x3+0x1517*0x1,_0x1c650b(0x2e3)],[0x1f41+-0x7c*-0x38+-0x1*0x39a1,'f32'],[0x174e+-0x1*-0x191d+-0x2f9f,'u8']],'SectatorCamera':[[-0x830*0x3+-0x1*0x66c+0x1f10,_0x1c650b(0x52e)],[-0x2037+0xe49+-0x301*-0x6,_0x1c650b(0x52e)],[0x46d*-0x2+0x2454+-0x1b5e,_0x1c650b(0x52e)],[-0x34a*0x9+0x3*0x9aa+-0x5e*-0x2,'v3'],[0x1c25+-0x14ca+-0x72f,'v3'],[-0x1183+-0x1*-0x1e42+0x1*-0xc77,'i32'],[-0xb*-0x28d+0xb73+-0x2736,'i32'],[-0xefb*0x1+-0x3*0xc51+0x1a1f*0x2,_0x3d7f39['ntOxI']],[0x62*-0x7+-0x17d9+-0x7d*-0x37,_0x1c650b(0x2e3)],[0xe45*-0x1+0x5*-0x5d3+0x2bbc,'f32'],[-0x11*0x89+0x102c+-0x6b7,'u8'],[0x1312+0x6b8+-0x196a,'v3'],[0x631*-0x4+0x3*0x95d+-0x2e7,'v4'],[0x337*-0x2+-0xd89+0x1473,'u8'],[-0x167+-0x44*0x1c+-0x3*-0x31d,_0x3d7f39[_0x1c650b(0x102)]]]},_0x45c2a5={},_0x319c3a={};function _0x1edb65(_0x5307c4,_0x4bd8d8,_0x36ec19){var _0x20c2e2=_0x1c650b,_0x3bbf57={'RbyAA':function(_0x59855a,_0x4b5b5d){var _0x1e9516=_0x36a4;return _0x3d7f39[_0x1e9516(0x63f)](_0x59855a,_0x4b5b5d);},'VROmF':'1|0|5'+_0x20c2e2(0x133)+_0x20c2e2(0x64a),'aEswk':function(_0x56b08f,_0x268fe1){return _0x3d7f39['sqZCm'](_0x56b08f,_0x268fe1);},'CFlxJ':function(_0x4fbf37,_0x2b2740){var _0x16732e=_0x20c2e2;return _0x3d7f39[_0x16732e(0xc8)](_0x4fbf37,_0x2b2740);}};return function(_0x43c2fd){var _0x272f74=_0x20c2e2,_0x8735b3={'YdAoz':_0x3d7f39[_0x272f74(0x2b7)]};try{if(_0x3d7f39[_0x272f74(0x1d6)](_0x3d7f39[_0x272f74(0x5ec)],_0x272f74(0x5de))){var _0x51b190=_0x43c2fd&&_0x43c2fd[_0x272f74(0x3e1)]?_0x43c2fd[_0x272f74(0x3e1)]():-0x880+0xfbd+0x73d*-0x1;if(!_0x51b190)return;var _0x30c85f=_0x319c3a[_0x5307c4]||(_0x319c3a[_0x5307c4]={}),_0x32d16c=_0x30c85f[_0x51b190];if(!_0x32d16c)_0x32d16c=_0x30c85f[_0x51b190]={'ptr':_0x51b190,'firstSeen':Date['now'](),'hits':0x0};_0x32d16c['hits']++;if(_0x36ec19){if(!_0x45c2a5[_0x51b190])_0x45c2a5[_0x51b190]={'ptr':_0x51b190,'kind':_0x5307c4,'firstSeen':Date[_0x272f74(0x64e)](),'hits':0x0};_0x45c2a5[_0x51b190]['hits']++;}else{if(_0x272f74(0x2df)===_0x3d7f39[_0x272f74(0x410)]){var _0xe1d7c3=_0x28a34d[_0x5307c4];if(!_0xe1d7c3||_0x3d7f39['MTUUX'](_0xe1d7c3['ptr'],_0x51b190)){_0x28a34d[_0x5307c4]={'ptr':_0x51b190,'firstSeen':Date[_0x272f74(0x64e)](),'hits':0x0,'replaced':!!_0xe1d7c3};try{var _0x324b5c=_0x1ee046['filte'+'r'](function(_0x247a57){var _0x482344=_0x272f74;return _0x247a57[_0x482344(0x265)]===_0x5307c4;})[0x1832+0x16bc+-0x2eee];_0x279197={'type':_0x5307c4,'atMs':_0x3d7f39[_0x272f74(0x12c)](Date[_0x272f74(0x64e)](),_0x3e0919),'originalFunc':!!(_0x324b5c&&_0x324b5c[_0x272f74(0x138)]&&_0x3d7f39[_0x272f74(0x5fc)](typeof _0x324b5c['hook']['origi'+'nalFu'+'nc'],_0x272f74(0x5ac)+_0x272f74(0x3f6))),'resolveGameAtFire':!!_0x238a88(),'gameSourceAtFire':_0xdcd25d[_0x272f74(0x111)+'e']};}catch(_0x12969d){}}}else _0x5be3d9[_0x272f74(0x514)+'onten'+'t']=_0x2a2fd2['diff']&&_0x5bb9a2['diff'][_0x272f74(0x63e)+'h']?_0x8735b3[_0x272f74(0x4cb)]+_0x236502['diff'][_0x272f74(0x456)](',\x20'):'F9\x20tw'+'ice\x20w'+'hile\x20'+'walki'+'ng\x20/\x20'+'sprin'+_0x272f74(0x13f)+_0x272f74(0x16b)+'ping\x20'+_0x272f74(0x2e5)+_0x272f74(0x3ea)+'h\x20fie'+_0x272f74(0x82)+_0x272f74(0x3ea)+'h.';}if(_0x3d7f39['TxHLz'](_0x5307c4,_0x3d7f39[_0x272f74(0xac)])&&_0x2c3c3c['on'])try{if(_0x272f74(0x330)!==_0x3d7f39['QhZFy'])_0x3abefe(_0x51b190);else return _0x2f1600[0xf71+-0x11fd+0x28c]=_0x3bbf57[_0x272f74(0x1e5)](_0xd18eb4,0x2*0x11d8+-0x2503+0x153),_0x5b0f7e[0x289*-0x5+-0x1cc9+-0xae*-0x3d];}catch(_0x4cef56){}if(!_0x4bd8d8){var _0x324b5c=_0x1ee046[_0x272f74(0x546)+'r'](function(_0x2041ee){var _0x41438c=_0x272f74;return _0x2041ee[_0x41438c(0x265)]===_0x5307c4;})[0x1e5a+-0x1b82*-0x1+0x844*-0x7];if(_0x324b5c&&_0x324b5c['hook']){if(_0x3d7f39[_0x272f74(0x3d6)]!==_0x272f74(0x136))_0x1aac1f(_0x272f74(0x2b2),{'on':_0x1e1f94,'factor':_0x2c4dbc(_0x1b4cd4[_0x272f74(0x5be)])||0x14f4+0x158b*0x1+-0x715*0x6});else try{_0x324b5c['hook'][_0x272f74(0x4e6)+'ed']=![];}catch(_0x48ba05){}}}}else{var _0x1e6113=_0x3bbf57['VROmF'][_0x272f74(0x595)]('|'),_0x502aac=0xb3c+0x1a20+-0x255c;while(!![]){switch(_0x1e6113[_0x502aac++]){case'0':_0x57c4b2['on']=!!_0x2af5ea;continue;case'1':var _0x2a9c86=_0x76eb3f['on'];continue;case'2':var _0x32fca8=_0xb1a7a6();continue;case'3':if(!_0x4f1bb7['on'])_0x41cc05={};continue;case'4':if(_0x32fca8){_0x32fca8['sp']&&(_0x32fca8['sp']['textC'+_0x272f74(0x3d7)+'t']=_0x3c4208['on']?_0x272f74(0x607)+_0x272f74(0x249):'Speed'+'\x20off',_0x32fca8['sp']['style']['backg'+_0x272f74(0x452)]=_0x3d3269['on']?_0x7674c7:_0x272f74(0x605)+_0x272f74(0x60c)+'t',_0x32fca8['sp']['style']['color']=_0x5efe32['on']?'#2a0f'+'1b':'#f7ee'+'f5');if(_0x32fca8['fx'])_0x32fca8['fx'][_0x272f74(0x5be)]=_0x424b7b(_0x4163a9[_0x272f74(0x1fd)+'r']);if(_0x32fca8['fv'])_0x32fca8['fv']['textC'+'onten'+'t']=_0x52b1ae['facto'+'r']['toFix'+'ed'](0x1*0x55+-0x6d6+0x682)+'x';}continue;case'5':_0x119cee['on']&&!_0x2a9c86&&(_0x3bbf57[_0x272f74(0x12f)](_0x546199,_0x6672f4)||_0x5b16c7===null||_0x3bbf57['CFlxJ'](_0xd2f58(_0x25c042),-0x51*0x79+-0x1a08+0x4052))&&(_0x753b9d=_0x4ee750);continue;case'6':_0x535490[_0x272f74(0x1fd)+'r']=_0x3b00f2[_0x272f74(0x332)](_0x326971['max'],_0x52b11f[_0x272f74(0x48e)](_0x544fae[_0x272f74(0x332)],_0x153650(_0x25ada6)||-0x2*0x61d+-0x1943+0x257e));continue;}break;}}}catch(_0x2699e5){}};}function _0x555d5e(){var _0xa581d5=_0x1c650b;if(_0x1ee046[_0xa581d5(0x63e)+'h'])return!![];if(!window['Unity'+_0xa581d5(0xce)+'dkit']||!window['Unity'+'WebMo'+_0xa581d5(0x649)]['Runti'+'me'])return![];var _0x1a4112=window['Unity'+'WebMo'+_0xa581d5(0x649)][_0xa581d5(0x50f)+'me'];if(!_0x1a4112[_0xa581d5(0x522)+'ns']||!_0x1a4112['plugi'+'ns'][_0xa581d5(0x63e)+'h'])return![];_0x360884=window[_0xa581d5(0x5da)+'WebMo'+_0xa581d5(0x649)][_0xa581d5(0x17d)+_0xa581d5(0x655)+'er'],_0x2855a7=_0x2855a7||_0x1a4112[_0xa581d5(0x522)+'ns'][_0x1a4112['plugi'+'ns'][_0xa581d5(0x63e)+'h']-(0x1f7a+0xc4*-0x16+-0xea1)];if(!_0x2855a7||typeof _0x2855a7[_0xa581d5(0x383)+_0xa581d5(0x19e)]!=='funct'+_0xa581d5(0x3f6))return![];for(var _0x1d1a2f=0x85*-0x47+-0x1*0x1a49+0x3f2c;_0x3d7f39['lfUXw'](_0x1d1a2f,_0x8aa394['lengt'+'h']);_0x1d1a2f++){var _0xb0802a=_0x8aa394[_0x1d1a2f];try{if(_0x3d7f39[_0xa581d5(0x491)](_0xa581d5(0x548),_0x3d7f39[_0xa581d5(0x208)]))return _0x1e2480[_0xa581d5(0x2aa)+'d']++,_0x4fb772['lastE'+_0xa581d5(0x11e)]=_0x468d12['lastE'+_0xa581d5(0x11e)]||_0x3d7f39[_0xa581d5(0x98)]('addre'+_0xa581d5(0x2c8)+_0x462d27['toStr'+'ing'](-0x9d6*0x1+0x215b*-0x1+0x2b41*0x1),'\x20past'+_0xa581d5(0x687)+'\x20end\x20'+'0x')+_0x16d93b['byteL'+'ength']['toStr'+'ing'](0x1cac+0x1599+-0x3235),_0x31b812;else{var _0x4a78f5=_0x2855a7['hookP'+_0xa581d5(0x19e)]({'typeName':_0xb0802a[_0xa581d5(0x265)],'methodName':_0xa581d5(0x16e)+'e','params':[_0xa581d5(0x2e3),_0xa581d5(0x2e3)],'returnType':undefined},_0x3d7f39[_0xa581d5(0x5a1)](_0x1edb65,_0xb0802a['type'],_0xb0802a['keep'],_0xb0802a[_0xa581d5(0xa2)]));_0x1ee046[_0xa581d5(0x17a)]({'type':_0xb0802a[_0xa581d5(0x265)],'hook':_0x4a78f5,'keep':_0xb0802a['keep']});}}catch(_0x21a341){_0x4400ae[_0xa581d5(0x17a)](_0x3d7f39['VJIvL'](_0xb0802a[_0xa581d5(0x265)],':\x20')+_0x3d7f39['oEVYh'](String,_0x21a341&&_0x21a341['messa'+'ge']||_0x21a341)[_0xa581d5(0x3a6)](0x1*-0x13fc+-0xd42+-0xa*-0x353,0x1bff+-0x757+-0x1408*0x1));}}return _0x1ee046[_0xa581d5(0x63e)+'h']>0xa*0x2f4+-0x25d7+0x3*0x2c5;}function _0x40d48d(){var _0x845ec5=_0x1c650b,_0x41c305=-0x93c+-0x1879*0x1+0x21b5;for(var _0x58b2a2=-0x2*0x771+0xf4*-0xf+0x1d2e;_0x58b2a2<_0x1ee046['lengt'+'h'];_0x58b2a2++){if(_0x1ee046[_0x58b2a2]['hook']&&_0x3d7f39['sIjHQ'](_0x1ee046[_0x58b2a2][_0x845ec5(0x138)][_0x845ec5(0x4ec)+'Index'],undefined))_0x41c305++;}return _0x41c305;}function _0x1e03f4(){var _0x48b73e=_0x1c650b;if(_0x48b73e(0x5d7)!==_0x3d7f39[_0x48b73e(0x166)]){var _0x3fd1d0=-0x26d1+0xca0+0x1a31;for(var _0xd6c4a0=-0x16*0x199+-0xb4f+0x2e75;_0xd6c4a0<_0x1ee046['lengt'+'h'];_0xd6c4a0++){if(_0x3d7f39[_0x48b73e(0x246)](_0x48b73e(0x223),_0x3d7f39['wCKya'])){if(_0x1ee046[_0xd6c4a0][_0x48b73e(0x138)]&&_0x1ee046[_0xd6c4a0][_0x48b73e(0x138)][_0x48b73e(0x54f)+'ed'])_0x3fd1d0++;}else{var _0x51bf0f=_0x3d7f39[_0x48b73e(0x59f)](_0x40432a[_0x321df1][_0x48b73e(0x463)+'s']['join'](',')+_0x3d7f39[_0x48b73e(0x65d)],_0xb79dfb[_0xeeee99][_0x48b73e(0x3b2)+_0x48b73e(0x1a0)]||'void');_0x1415fc[_0x51bf0f]=_0x3d7f39['xkWrL'](_0x239a53[_0x51bf0f]||-0x2*0x11c2+0x1334*0x2+-0x2*0x172,-0x2449+0xc5+0x1*0x2385);}}return _0x3fd1d0;}else _0x1da435[_0x48b73e(0x606)]=_0x3d7f39['Jjyrr'](_0x48b73e(0x396)+_0x48b73e(0x1e2)+'e\x20pre'+_0x48b73e(0x207)+'but\x20n'+_0x48b73e(0x4aa)+_0x48b73e(0x2c1)+'assif'+_0x48b73e(0x61b)+_0x48b73e(0x22b)+_0x48b73e(0x545)+'yet\x20-'+'\x20chec'+'k\x20',_0x3d7f39['mZlkS']);}var _0x4bb003=null,_0x5aa30e=[],_0x218dc5={},_0x279197=null;function _0x54324f(_0x56bc13){try{if(!_0x360884||!_0x56bc13)return null;var _0x55c236=new _0x360884(_0x56bc13)['getCl'+'assNa'+'me']();return _0x55c236===undefined?null:_0x55c236;}catch(_0x2269d7){return null;}}function _0x525b72(_0x568301,_0x41e536,_0x186198){var _0x481eaa=_0x1c650b,_0x2a7013=_0x3d7f39[_0x481eaa(0x4fd)]['split']('|'),_0x447771=0x268a+-0xae*-0x1b+0xb*-0x52c;while(!![]){switch(_0x2a7013[_0x447771++]){case'0':if(!_0x13d5c8)return null;continue;case'1':for(var _0x5a491c=0xf93+-0xdee+-0x1*0x1a5;_0x5a491c<_0x186198;_0x5a491c++)_0x17c29a['push'](_0x13d5c8['getFl'+_0x481eaa(0x404)](_0x568301+_0x41e536+_0x5a491c*(-0x73e+0x1022+0x47*-0x20),!![]));continue;case'2':if(_0x41e536<0x1e61+-0x25c6+0x765||_0x3d7f39['YjnIH'](_0x41e536,_0x3d7f39[_0x481eaa(0x3af)](_0x186198,-0x9b*0x2b+-0x132f+0x2d3c))>_0x13d5c8['byteL'+'ength'])return null;continue;case'3':return _0x17c29a;case'4':var _0x13d5c8=_0x3d7f39[_0x481eaa(0x573)](_0x194171);continue;case'5':var _0x17c29a=[];continue;case'6':_0xdcd25d['ok']+=_0x186198;continue;}break;}}var _0x172f57={'PhotonNetworkSync':[[_0x3d7f39[_0x1c650b(0x3cc)],_0x3d7f39['LeGuR']],[_0x3d7f39['MJZJb'],_0x1c650b(0x198)+'h'],[_0x3d7f39[_0x1c650b(0x33a)],_0x1c650b(0x605)+'form'],[_0x1c650b(0x624),_0x3d7f39[_0x1c650b(0x588)]]],'NetworkPlayerAnimations':[[_0x1c650b(0x2ea),_0x1c650b(0x366)+'le'],[_0x1c650b(0x572),_0x1c650b(0x183)]],'NPC_Cotroller':[[_0x3d7f39[_0x1c650b(0x15a)],_0x3d7f39['WeyHd']],[_0x3d7f39[_0x1c650b(0x49e)],'targe'+_0x1c650b(0x266)+'th'],[_0x3d7f39['slroh'],_0x1c650b(0x198)+'h'],['0xd4','targe'+_0x1c650b(0x266)+'th2'],[_0x1c650b(0x4ff),_0x1c650b(0x605)+_0x1c650b(0x53a)]],'EnemyBot':[[_0x1c650b(0x295),_0x3d7f39[_0x1c650b(0x5e4)]]]};function _0x5cf0b4(_0x9619a1,_0x2970e2){var _0x438b95=_0x1c650b,_0x325e89={'rBxNl':function(_0x10a320,_0x4a9286){return _0x3d7f39['SdJIv'](_0x10a320,_0x4a9286);},'NFriq':_0x3d7f39[_0x438b95(0x63b)],'QlApX':function(_0x5564e4,_0x27579b,_0x161a08){return _0x5564e4(_0x27579b,_0x161a08);},'nrqpB':function(_0x22006c,_0x295128){return _0x22006c+_0x295128;}};if(_0x3d7f39[_0x438b95(0x5fc)]('tPQZd',_0x438b95(0x227))){var _0x145312=_0x2e3fc3[_0x9619a1]||[],_0x228928={'kind':_0x9619a1,'ptr':'0x'+_0x2970e2[_0x438b95(0x1f3)+_0x438b95(0x25c)](-0x4a*-0x77+0x22a9+-0x44ff),'pos':null,'posAt':null,'allVecs':[],'scalars':[],'refs':{}};for(var _0x1dd98d=-0x3cc+-0x26d5+0x2aa1*0x1;_0x1dd98d<_0x145312[_0x438b95(0x63e)+'h'];_0x1dd98d++){if(_0x145312[_0x1dd98d][-0x14a2*-0x1+0xaea+-0x1db*0x11]!=='v3')continue;var _0x11ca12=_0x3d7f39[_0x438b95(0x537)](_0x525b72,_0x2970e2,_0x145312[_0x1dd98d][-0xd4*-0x11+-0x1*0x7e+-0xd96],-0x1*0x19c1+0xad9+-0x1*-0xeeb);if(!_0x11ca12)continue;_0x228928[_0x438b95(0x83)+'cs'][_0x438b95(0x17a)]({'o':'0x'+_0x145312[_0x1dd98d][0x116d+0x1220+0x1df*-0x13][_0x438b95(0x1f3)+'ing'](0x1*-0x1e7c+-0x119*0x1f+0x4093),'v':_0x11ca12}),_0x3d7f39['OFEug'](_0x228928[_0x438b95(0x3b0)],null)&&(_0x11ca12[0x3*0xcac+0x1*-0x12ce+-0x1336]!==-0x3*-0x63d+-0x1d49+0xa92||_0x11ca12[0x1247+0x4d8+-0x171e]!==-0x24f9+-0x613*0x5+-0x10d6*-0x4||_0x11ca12[0x47b+-0x8*0x6d+-0x111]!==0x168a*0x1+0xf*0x30+-0x1*0x195a)&&(_0x228928['pos']=_0x11ca12,_0x228928['posAt']='0x'+_0x145312[_0x1dd98d][-0x1da9+-0x1e1+0x1f8a][_0x438b95(0x1f3)+_0x438b95(0x25c)](0x3d*-0x8f+-0x1b17+0x11*0x39a));}var _0x2fd793=_0x172f57[_0x9619a1];if(_0x2fd793)for(var _0x22364a=0x1b7d+-0xf58+-0xc25;_0x3d7f39[_0x438b95(0x594)](_0x22364a,_0x2fd793[_0x438b95(0x63e)+'h']);_0x22364a++){var _0x3806f8=_0x3d7f39[_0x438b95(0x2d5)](_0x4d7e8d,_0x3d7f39['DFAMY'](_0x2970e2,_0x3d7f39['guBod'](parseInt,_0x2fd793[_0x22364a][-0x11c*0x23+-0x4c0+-0xae5*-0x4],-0xae9+0x18d9+-0xde0)),_0x438b95(0xb6));if(_0x3806f8)_0x228928[_0x438b95(0x143)][_0x2fd793[_0x22364a][0x1*-0x361+0x1f59+-0x1bf7]]='0x'+(_0x3806f8>>>-0x1e1a+0xe40+0x2*0x7ed)['toStr'+_0x438b95(0x25c)](0x270+-0x77e+0x28f*0x2);}return _0x228928['scala'+'rs']=_0x145312['filte'+'r'](function(_0x50125c){var _0x5e6da0=_0x438b95;return _0x325e89[_0x5e6da0(0x615)](_0x50125c[-0x968+-0x1*0xe07+0x1770],_0x325e89[_0x5e6da0(0x173)])||_0x325e89['rBxNl'](_0x50125c[0x7c*-0xd+-0x1542+-0x11*-0x19f],'i32');})[_0x438b95(0x3ec)](function(_0xdd9f54){var _0x1d6686=_0x438b95;return{'o':'0x'+_0xdd9f54[-0x95c+-0xb8e+0x2*0xa75][_0x1d6686(0x1f3)+'ing'](0x15*0x125+-0x55*0x29+0x33*-0x34),'v':_0x325e89['QlApX'](_0x4d7e8d,_0x325e89['nrqpB'](_0x2970e2,_0xdd9f54[-0xcbf*-0x2+-0x3*0x27d+-0x1207*0x1]),_0xdd9f54[-0x80*-0xe+0x1667+-0x1d66])};})[_0x438b95(0x546)+'r'](function(_0x2ceb5c){var _0xe1519e=_0x438b95;if(_0x3d7f39[_0xe1519e(0x42c)]('jixwx',_0xe1519e(0x44f)))_0x209123[_0xe1519e(0x42b)+_0xe1519e(0x43d)]=!!(_0x1b02d3&&_0x1273d7[_0xe1519e(0x370)+'e']),_0x3d58b8['heapU'+'8']=!!(_0x21b1ab&&_0x438ee5[_0xe1519e(0x370)+'e']&&_0x3c79a0[_0xe1519e(0x370)+'e'][_0xe1519e(0x121)+'8']),_0x55b507[_0xe1519e(0x3ae)+_0xe1519e(0x659)]=_0x28c65b['heapU'+'8']?_0x21eddd[_0xe1519e(0x370)+'e']['HEAPU'+'8']['lengt'+'h']:0xb*-0x2ea+0x563+0x1aab;else return _0x2ceb5c['v']!==undefined&&isFinite(_0x2ceb5c['v']);})['slice'](-0x8*0x358+-0xf85+0x2a45,0x13*-0x2f+-0x61*-0x57+0x1d6e*-0x1),_0x228928;}else{_0xc7786b['push']({'o':-(-0x226d+0x61*0x2c+-0x8e1*-0x2),'v':0x0,'why':_0x3d7f39['oHRiY'](_0x3d7f39[_0x438b95(0xd9)](_0x3d7f39[_0x438b95(0x367)],_0x5aa416),'\x20Obsc'+_0x438b95(0x48a)+'loats'+_0x438b95(0x331)+'ed')});return;}}function _0x632241(){var _0x4c569d=_0x1c650b;if(_0x4c569d(0x49f)===_0x3d7f39[_0x4c569d(0x3d5)]){var _0x25f7b0=_0x583e67[_0x4c569d(0x4e5)+_0x4c569d(0x39e)];if(typeof _0x25f7b0['resol'+'veGam'+'e']==='funct'+'ion'){var _0x3665d2=_0x25f7b0[_0x4c569d(0x4b9)+'veGam'+'e']();if(_0x3665d2)return _0x49f5cb['sourc'+'e']=_0x4c569d(0x522)+'n._ru'+'ntime'+_0x4c569d(0x657)+'lveGa'+'me()',_0x3665d2;}if(_0x25f7b0[_0x4c569d(0x406)])return _0x1b2e8f['sourc'+'e']=_0x4c569d(0x522)+_0x4c569d(0x387)+_0x4c569d(0x422)+_0x4c569d(0xa6)+'e',_0x25f7b0[_0x4c569d(0x406)];}else{var _0x233ac2={'players':[],'bots':[],'enemies':[],'controllers':[],'camera':null,'cameraFrom':null,'playerList':null,'managers':{},'wasmTypes':null},_0x51f22a=_0x28a34d[_0x4c569d(0x5ed)+_0x4c569d(0xa1)+_0x4c569d(0x90)]&&_0x28a34d['FPSco'+_0x4c569d(0xa1)+_0x4c569d(0x90)]['ptr']||0x8*-0x47a+-0xa5f+-0x1*-0x2e2f,_0xa88547=_0x319c3a['Photo'+_0x4c569d(0x309)+'orkSy'+'nc']||{},_0x107825=Object['keys'](_0xa88547);for(var _0x50be47=0x25*-0x85+0x25d*-0x4+0x1cad;_0x50be47<_0x107825['lengt'+'h']&&_0x50be47<-0x1e9b+-0x16b0+-0x3563*-0x1;_0x50be47++){var _0x3afbb0=_0xa88547[_0x107825[_0x50be47]],_0x3af238=_0x5cf0b4(_0x4c569d(0x38b)+_0x4c569d(0x309)+_0x4c569d(0x472)+'nc',_0x3afbb0[_0x4c569d(0x116)]);_0x3af238['hits']=_0x3afbb0[_0x4c569d(0x26a)],_0x3af238[_0x4c569d(0x234)+'SeenM'+'s']=_0x3afbb0['first'+'Seen']-_0x3e0919,_0x3af238['isLoc'+'al']=!!_0x51f22a&&_0x3d7f39[_0x4c569d(0x235)](_0x3af238[_0x4c569d(0x143)]['fps'],_0x3d7f39[_0x4c569d(0x43f)]('0x',_0x51f22a[_0x4c569d(0x1f3)+'ing'](-0x1d2e+-0x24b3+0x41f1)));if(_0x3af238[_0x4c569d(0x143)][_0x4c569d(0x198)+'h']){var _0x4c6427=parseInt(_0x3af238[_0x4c569d(0x143)]['healt'+'h'],0x7*0x190+0x2*0x11e1+-0xfe*0x2f);_0x3af238['healt'+'h']=_0x1d9dca(_0x4c6427,_0x4c569d(0x174)+_0x4c569d(0x3c2)+'pt',_0x3d7f39['OHOPv']);}_0x233ac2[_0x4c569d(0x1db)+'rs'][_0x4c569d(0x17a)](_0x3af238);}_0x233ac2['playe'+'rCoun'+'t']=_0x107825['lengt'+'h'];var _0xf5f135=_0x319c3a[_0x4c569d(0x12e)+_0x4c569d(0x2f8)+_0x4c569d(0x90)]||{},_0x5393fd=Object[_0x4c569d(0x421)](_0xf5f135);for(var _0x263d90=-0xbdf*-0x2+-0xfa9+-0x1*0x815;_0x263d90<_0x5393fd[_0x4c569d(0x63e)+'h']&&_0x263d90<-0x903+-0x230d+0x2c28;_0x263d90++){var _0x423bf4=_0x3d7f39['BRxft'](_0x5cf0b4,_0x4c569d(0x12e)+'otrol'+_0x4c569d(0x90),_0xf5f135[_0x5393fd[_0x263d90]][_0x4c569d(0x116)]);_0x423bf4[_0x4c569d(0x26a)]=_0xf5f135[_0x5393fd[_0x263d90]][_0x4c569d(0x26a)],_0x423bf4[_0x4c569d(0x234)+_0x4c569d(0x470)+'s']=_0x3d7f39['Tntar'](_0xf5f135[_0x5393fd[_0x263d90]]['first'+_0x4c569d(0x38f)],_0x3e0919);if(_0x423bf4[_0x4c569d(0x143)][_0x4c569d(0x198)+'h'])_0x423bf4['healt'+'h']=_0x1d9dca(parseInt(_0x423bf4[_0x4c569d(0x143)]['healt'+'h'],-0xd70+-0x7e0+-0x2ac*-0x8),_0x3d7f39['QitnE'],_0x3d7f39[_0x4c569d(0x1d1)]);_0x233ac2['bots'][_0x4c569d(0x17a)](_0x423bf4);}_0x233ac2[_0x4c569d(0x42d)+_0x4c569d(0x623)]=_0x5393fd[_0x4c569d(0x63e)+'h'];var _0xb25db9=_0x319c3a[_0x4c569d(0x5ed)+_0x4c569d(0xa1)+'ler']||{},_0x3a0dd7=Object[_0x4c569d(0x421)](_0xb25db9);for(var _0x19bd08=-0x21a3+0x119e+0x1005;_0x19bd08<_0x3a0dd7['lengt'+'h']&&_0x19bd08<0x1b1*0x15+0x202c+-0x4399;_0x19bd08++){if(_0x3d7f39[_0x4c569d(0x491)]('GfTxH',_0x4c569d(0x57e)))_0x20ace4?_0x12eb42['setIt'+'em'](_0xcf1c4e,'1'):_0x4b13ff[_0x4c569d(0xdf)+'eItem'](_0x2f4039);else{var _0x55439e=_0x3d7f39[_0x4c569d(0x3a1)](_0x5cf0b4,_0x3d7f39[_0x4c569d(0xac)],_0xb25db9[_0x3a0dd7[_0x19bd08]][_0x4c569d(0x116)]);_0x55439e[_0x4c569d(0x26a)]=_0xb25db9[_0x3a0dd7[_0x19bd08]][_0x4c569d(0x26a)],_0x55439e[_0x4c569d(0x29e)+'al']=_0x3d7f39['VtXuQ'](_0xb25db9[_0x3a0dd7[_0x19bd08]][_0x4c569d(0x116)],_0x51f22a),_0x233ac2[_0x4c569d(0x4ef)+'oller'+'s']['push'](_0x55439e);}}_0x233ac2[_0x4c569d(0x4ef)+'oller'+'Count']=_0x3a0dd7[_0x4c569d(0x63e)+'h'];var _0x343ee4=_0x233ac2['playe'+'rs'][_0x4c569d(0x516)+'t'](_0x233ac2[_0x4c569d(0x46e)]);for(var _0x38c1d0=0x1850+0x4a9+-0x1cf9*0x1;_0x38c1d0<_0x343ee4['lengt'+'h'];_0x38c1d0++){if(_0x343ee4[_0x38c1d0][_0x4c569d(0x29e)+'al'])continue;_0x233ac2['enemi'+'es'][_0x4c569d(0x17a)](_0x343ee4[_0x38c1d0]);}_0x233ac2['enemy'+_0x4c569d(0x212)]=_0x233ac2[_0x4c569d(0x3a0)+'es'][_0x4c569d(0x63e)+'h'];var _0x14aa65={'TDM_GameManager':0x2c,'GG_GameManager':0x14},_0xca33f0={'TDM_GameManager':0x50,'GG_GameManager':0x5c};for(var _0x3544ca in _0x28a34d){var _0x3e096b=_0x28a34d[_0x3544ca];if(!_0x3e096b||!_0x3e096b['ptr'])continue;if(!(_0x3544ca in _0x14aa65))continue;_0x233ac2[_0x4c569d(0x298)+_0x4c569d(0x30b)][_0x3544ca]='0x'+_0x3e096b[_0x4c569d(0x116)][_0x4c569d(0x1f3)+'ing'](0x59f*-0x1+-0xa7*-0xf+0x32*-0x15);var _0x3fcbe6=_0x4d7e8d(_0x3d7f39['vtyVr'](_0x3e096b[_0x4c569d(0x116)],_0x14aa65[_0x3544ca]),_0x4c569d(0xb6)),_0x1f9e09=_0x3d7f39[_0x4c569d(0x3a8)](_0x4d7e8d,_0x3d7f39[_0x4c569d(0x307)](_0x3e096b['ptr'],_0xca33f0[_0x3544ca]),'u32');if(_0x3fcbe6&&_0x3d7f39['lfEtN'](_0x233ac2['camer'+'a'],null)){if('xumzL'===_0x4c569d(0x1fb))_0x233ac2[_0x4c569d(0x216)+'a']=_0x3d7f39['ntBXI']('0x',(_0x3fcbe6>>>0x8ae*0x1+-0x19bb*0x1+0x110d)[_0x4c569d(0x1f3)+_0x4c569d(0x25c)](0x738+0xc8*0x1+-0x7f0)),_0x233ac2[_0x4c569d(0x216)+'aFrom']=_0x3544ca;else return _0x3c8eee['v']!==_0x18f781&&_0x3d7f39[_0x4c569d(0x35c)](_0x24af37,_0x701674['v']);}if(_0x1f9e09&&_0x233ac2['playe'+'rList']===null)_0x233ac2[_0x4c569d(0x1db)+'rList']='0x'+(_0x1f9e09>>>-0x1d1d+-0x3*-0x5a1+0x139*0xa)[_0x4c569d(0x1f3)+_0x4c569d(0x25c)](-0x5*0x20b+-0x2077*0x1+0x2abe*0x1);}if(!_0x233ac2[_0x4c569d(0x1db)+_0x4c569d(0x5f7)+'t']&&!_0x233ac2[_0x4c569d(0x42d)+_0x4c569d(0x623)]&&!_0x233ac2['camer'+'a']){if(_0x4c569d(0x237)!==_0x4c569d(0x696))_0x233ac2[_0x4c569d(0x606)]='No\x20Ph'+'otonN'+_0x4c569d(0x61c)+'kSync'+_0x4c569d(0x686)+_0x4c569d(0x12e)+_0x4c569d(0x2f8)+_0x4c569d(0x2d4)+_0x4c569d(0x5ad)+'\x20game'+_0x4c569d(0x2dc)+_0x4c569d(0x67c)+'That\x20'+'is\x20wh'+_0x4c569d(0x459)+_0x3d7f39['ZxORR'];else return _0x5dafaa[_0x4c569d(0x111)+'e']=_0x3d7f39[_0x4c569d(0x507)],_0x1b5ea1;}else!_0x233ac2[_0x4c569d(0x36c)+_0x4c569d(0x212)]&&(_0x3d7f39['tcnYn']('GOKKd',_0x4c569d(0x621))?_0x2371b9():_0x233ac2[_0x4c569d(0x606)]=_0x3d7f39[_0x4c569d(0x499)]+('isLoc'+_0x4c569d(0x5d6)+_0x4c569d(0x85)+'\x20entr'+_0x4c569d(0x1e7)+'`play'+'ers`.'));try{var _0x8b366f=window[_0x4c569d(0x5da)+_0x4c569d(0xce)+'dkit']&&window[_0x4c569d(0x5da)+_0x4c569d(0xce)+_0x4c569d(0x649)][_0x4c569d(0x50f)+'me'],_0x255139=_0x8b366f&&_0x8b366f[_0x4c569d(0x15f)+'nalWa'+_0x4c569d(0x3f2)+'es']||[],_0x4c1d07={};for(var _0x1e6842=0x21cd+0x4f*0x17+-0x417*0xa;_0x3d7f39['qTkDK'](_0x1e6842,_0x255139[_0x4c569d(0x63e)+'h'])&&_0x3d7f39[_0x4c569d(0x382)](_0x1e6842,0x632+0x1*0x1163+-0x7f5);_0x1e6842++){var _0x12ec6d=_0x255139[_0x1e6842][_0x4c569d(0x463)+'s'][_0x4c569d(0x456)](',')+'\x20->\x20'+(_0x255139[_0x1e6842][_0x4c569d(0x3b2)+_0x4c569d(0x1a0)]||_0x3d7f39['xboxn']);_0x4c1d07[_0x12ec6d]=(_0x4c1d07[_0x12ec6d]||0x1c8a+0x1a8c*0x1+0x281*-0x16)+(0x3+-0x140a+0x1408);}_0x233ac2[_0x4c569d(0x22f)+_0x4c569d(0x2d2)]=_0x4c1d07;}catch(_0x1f6264){}return _0x233ac2;}}function _0x1d9dca(_0x3cc2ea,_0x3ca166,_0x4bb0db){var _0x45e277=_0x1c650b;try{var _0x7d4ac7=_0x2e3fc3[_0x3ca166]||[];for(var _0x116e46=0x1*0x1e1d+0x2261+-0x407e;_0x116e46<_0x7d4ac7[_0x45e277(0x63e)+'h'];_0x116e46++){if(_0x7d4ac7[_0x116e46][0x4*-0x40e+-0x38d*-0x1+-0x4*-0x32b]!==_0x4bb0db)continue;var _0x4848d8=_0x7d4ac7[_0x116e46][-0x1e0c+0x2f*0xca+0x6a*-0x11];if(_0x4bb0db[_0x45e277(0x1ae)+'Of'](_0x3d7f39[_0x45e277(0x34f)])===-0x1*-0x1331+-0xa83+-0x8ae){if('bnBvs'===_0x45e277(0x592)){var _0x193ae0=_0x8bbc8f(_0x3cc2ea,_0x4848d8,_0x4bb0db);if(!_0x193ae0)return null;_0x193ae0['o']=_0x4848d8,_0x193ae0['k']=_0x4bb0db;var _0x2dd83d=_0x3f8d46([_0x193ae0]);if(!_0x2dd83d['rows']['lengt'+'h'])return null;return _0x2dd83d['rows'][0x99a*0x4+-0xa9a*0x1+-0x1bce];}else{_0x3d7f39[_0x45e277(0xe0)](_0x245f93,_0x117e62&&_0x3d7f39['IJDOZ'](typeof _0x2bd1a4['on'],_0x45e277(0x619)+'an')?_0x502690['on']:_0x344b28['on'],_0x1b29c7&&typeof _0x5b824f[_0x45e277(0x1fd)+'r']===_0x3d7f39['ZuFmV']?_0x37ef23['facto'+'r']:_0x21ea38['facto'+'r']);return;}}var _0x3bb10b=_0x3d7f39[_0x45e277(0x419)](_0x4d7e8d,_0x3cc2ea+_0x4848d8,_0x4bb0db);if(_0x3bb10b===undefined)return null;return{'o':'0x'+_0x4848d8['toStr'+_0x45e277(0x25c)](0x441+-0x2126+0x1cf5),'v':_0x3bb10b};}}catch(_0x65dc1){}return null;}function _0x43bad3(){var _0x1fb060=_0x1c650b,_0x9da385={'narAl':'Speed'+'\x20ON','EydJp':'Speed'+'\x20off','EypJw':'trans'+_0x1fb060(0x60c)+'t'},_0x222119={};_0xdcd25d['ok']=-0x643+-0x2*0x133+0x8a9,_0xdcd25d[_0x1fb060(0x2aa)+'d']=-0x156b*0x1+0x14cd+0x9e,_0xdcd25d['lastE'+_0x1fb060(0x11e)]=null;var _0x529656=Object[_0x1fb060(0x421)](_0x2e3fc3);for(var _0x1e4a0f=0x2214+-0x62d+-0x1be7;_0x3d7f39['iOcgK'](_0x1e4a0f,_0x529656[_0x1fb060(0x63e)+'h']);_0x1e4a0f++){var _0x553423=_0x529656[_0x1e4a0f],_0x2fc350=_0x28a34d[_0x553423];if(!_0x2fc350||!_0x2fc350['ptr'])continue;var _0x25e390=_0x2e3fc3[_0x553423]||[],_0x2067b1=[];for(var _0x7ccf87=0x1f6+-0x17ca+0x15d4;_0x7ccf87<_0x25e390[_0x1fb060(0x63e)+'h'];_0x7ccf87++){var _0x2b991b=_0x25e390[_0x7ccf87][-0x3*0x8ce+-0x19e5*-0x1+0x85],_0x4c4a4e=_0x25e390[_0x7ccf87][-0xa3a+0x568+0x5*0xf7];if(_0x4c4a4e[_0x1fb060(0x1ae)+'Of']('obf')===-0xa*-0x15a+-0x2*0x6d7+0x2a){if(_0x3d7f39[_0x1fb060(0x5fd)](_0x3d7f39['HHhuC'],_0x3d7f39[_0x1fb060(0x3a5)])){var _0x1010b5=_0x3d7f39['mFnqI'](_0x8bbc8f,_0x2fc350['ptr'],_0x2b991b,_0x4c4a4e);if(!_0x1010b5)continue;_0x1010b5['o']=_0x2b991b,_0x1010b5['k']=_0x4c4a4e,_0x2067b1['push'](_0x1010b5);}else _0x226837['sp'][_0x1fb060(0x514)+_0x1fb060(0x3d7)+'t']=_0x2261cb['on']?_0x9da385[_0x1fb060(0xb9)]:_0x9da385[_0x1fb060(0x678)],_0x1f99d9['sp'][_0x1fb060(0x4a5)][_0x1fb060(0x393)+_0x1fb060(0x452)]=_0x238b22['on']?_0x4388fe:_0x9da385['EypJw'],_0x406091['sp'][_0x1fb060(0x4a5)]['color']=_0x14d5a9['on']?_0x1fb060(0x334)+'1b':_0x1fb060(0xd3)+'f5';}else{var _0x3ec636=_0x3d7f39['WcMqP'](_0x4d7e8d,_0x2fc350[_0x1fb060(0x116)]+_0x2b991b,_0x4c4a4e);if(_0x3ec636===undefined)continue;var _0x1684c3={'o':_0x2b991b,'k':_0x4c4a4e,'v':_0x3ec636};if(_0x4c4a4e==='v2'||_0x3d7f39['gVRnH'](_0x4c4a4e,'v3')||_0x3d7f39[_0x1fb060(0x526)](_0x4c4a4e,'v4')){var _0xbc554c=_0x3d7f39['kJARs'](_0x4c4a4e,'v2')?-0x43*-0x39+-0x2566+0x167d*0x1:_0x4c4a4e==='v3'?0x2*-0xebd+0x28*0x38+0x14bd:0x1*-0x1915+0x1e85+-0x56c,_0x56c104=_0x525b72(_0x2fc350[_0x1fb060(0x116)],_0x2b991b,_0xbc554c);if(_0x56c104){if(_0x3d7f39['xVrzj'](_0x3d7f39[_0x1fb060(0x4d8)],_0x3d7f39['fnTnv'])){var _0x38803f=_0xd0881d['apply'](this,arguments);try{if(_0x38803f&&typeof _0x38803f[_0x1fb060(0x388)]===_0x1fb060(0x5ac)+_0x1fb060(0x3f6))_0x38803f[_0x1fb060(0x388)](_0x39f40a,function(){});else _0x51720e(_0x38803f);}catch(_0x4565e8){}return _0x38803f;}else _0x1684c3[_0x1fb060(0x5d8)]=_0x56c104,_0x1684c3['v']=_0x56c104[0xefd+0x55*0x4f+0x527*-0x8];}}_0x2067b1[_0x1fb060(0x17a)](_0x1684c3);}}if(_0x2067b1[_0x1fb060(0x63e)+'h']){var _0x72f12=_0x3d7f39['IOAdd'](_0x3f8d46,_0x2067b1);_0x222119[_0x553423]=_0x72f12[_0x1fb060(0x305)],_0x218dc5[_0x553423]={'key':_0x72f12[_0x1fb060(0x5e5)],'sane':_0x72f12['sane'],'checked':_0x72f12['check'+'ed'],'keyConsistent':_0x72f12[_0x1fb060(0x5b0)+_0x1fb060(0x53c)+_0x1fb060(0x12d)],'keySource':_0x72f12['keySo'+'urce']};}}return _0x222119;}function _0x3f8d46(_0x49ae73){var _0x5eb4a6=_0x1c650b,_0x22cd45=0x20a5*-0x1+0x376+0x1d2f,_0x54c9ae=-0x1*0xc77+0x687*-0x5+0x2d1a,_0x3d18c9=null;for(var _0x12343c=-0x10f4+0x441+0xcb3;_0x3d7f39[_0x5eb4a6(0x44c)](_0x12343c,_0x49ae73[_0x5eb4a6(0x63e)+'h']);_0x12343c++){var _0x235d52=_0x49ae73[_0x12343c];if(_0x235d52['k'][_0x5eb4a6(0x1ae)+'Of'](_0x5eb4a6(0x44b))!==-0x35d*-0x1+-0x92b*0x1+0x5ce*0x1)continue;_0x235d52['v']=_0x5aa587(_0x235d52['k'],_0x235d52[_0x5eb4a6(0x177)+'n'],_0x235d52[_0x5eb4a6(0x2f0)+_0x5eb4a6(0x62f)+'t0']),_0x235d52[_0x5eb4a6(0x39f)+'ed']=_0x235d52['keyAt'+'Offse'+'t0'],_0x235d52['raw']=_0x3d7f39['NDCjr'](_0x3d7f39[_0x5eb4a6(0x25a)](_0x3d7f39[_0x5eb4a6(0x264)](_0x3d7f39[_0x5eb4a6(0x4b0)]+_0x235d52[_0x5eb4a6(0x177)+'n']+_0x3d7f39[_0x5eb4a6(0x3c9)]+_0x235d52[_0x5eb4a6(0x28f)],_0x235d52['act']?_0x3d7f39[_0x5eb4a6(0x47f)]:'')+_0x3d7f39[_0x5eb4a6(0x596)],_0x235d52['keyAt'+_0x5eb4a6(0x62f)+'t0'])+_0x5eb4a6(0x42a),_0x235d52[_0x5eb4a6(0x30c)]);if(_0x3d18c9===null)_0x3d18c9=_0x235d52[_0x5eb4a6(0x2f0)+_0x5eb4a6(0x62f)+'t0'];_0x54c9ae++,_0x583b0d(_0x235d52)?(_0x22cd45++,_0x235d52['sane']=!![]):_0x235d52[_0x5eb4a6(0x1a7)]=![],delete _0x235d52[_0x5eb4a6(0x250)];}return{'rows':_0x49ae73,'key':_0x3d18c9,'sane':_0x22cd45,'checked':_0x54c9ae,'keyConsistent':_0x3d7f39['IGtVC'](_0x1a7f68,_0x49ae73),'keySource':_0x5eb4a6(0x556)+'t\x200\x20('+'int-w'+_0x5eb4a6(0x41a)};}function _0x1a7f68(_0x1ad2b0){var _0x222bf0=_0x1c650b,_0x15cc1c={};for(var _0x5825b7=0x1e90+-0x3df*-0x6+-0x35ca;_0x5825b7<_0x1ad2b0[_0x222bf0(0x63e)+'h'];_0x5825b7++){var _0x501503=_0x1ad2b0[_0x5825b7];if(_0x501503['k']['index'+'Of'](_0x222bf0(0x44b))!==-0x13*0x1+-0x2*-0x5c6+0xb*-0x10b)continue;if(_0x15cc1c[_0x501503['k']]===undefined)_0x15cc1c[_0x501503['k']]=_0x501503['keyUs'+'ed'];else{if(_0x3d7f39['xzxCN'](_0x15cc1c[_0x501503['k']],_0x501503[_0x222bf0(0x39f)+'ed']))return![];}}return!![];}function _0x583b0d(_0x68fee9){var _0x4a966a=_0x1c650b,_0x557b78={'lxxTZ':'7|1|8'+'|6|5|'+'3|0|4'+'|2','orGSV':function(_0x4239a1,_0x3d9322){return _0x4239a1!==_0x3d9322;},'pUCam':_0x3d7f39['eDXcy'],'dbonl':function(_0x4e1022){return _0x4e1022();},'TpHnF':function(_0x21ab2e,_0x419cf9,_0xc3a32){return _0x21ab2e(_0x419cf9,_0xc3a32);},'NaOuI':function(_0xc67fe6,_0x147180){return _0xc67fe6===_0x147180;},'ZmwwN':'speed','qHoMW':'numbe'+'r'},_0x5e7051=_0x68fee9['v'];if(_0x3d7f39[_0x4a966a(0x585)](typeof _0x5e7051,'numbe'+'r')||!isFinite(_0x5e7051))return![];if(_0x3d7f39[_0x4a966a(0x5fc)](_0x68fee9['k'],_0x3d7f39['AVMUg']))return _0x3d7f39[_0x4a966a(0x42c)](_0x5e7051,-0x181b+-0xb*-0x6d+0xb*0x1c4)||_0x3d7f39[_0x4a966a(0x50a)](_0x5e7051,0xb69*-0x1+0x1b3+0x9b7);var _0x272f2e=_0x68fee9['fake'];if(typeof _0x272f2e!=='numbe'+'r'||!isFinite(_0x272f2e))return!![];if(_0x68fee9['act']===0x1*-0x148d+-0x1975+0x2e03*0x1){if(_0x3d7f39['yixbD']!==_0x3d7f39['yixbD']){var _0x42b607=_0x557b78[_0x4a966a(0x329)][_0x4a966a(0x595)]('|'),_0x30f721=-0x1680+-0x3*-0xae6+-0xa32;while(!![]){switch(_0x42b607[_0x30f721++]){case'0':for(var _0x58e2d8 in _0x1f6be4){var _0x5771a2=_0x293819[_0x58e2d8],_0x17c327=_0x1f6be4[_0x58e2d8];if(_0x557b78[_0x4a966a(0x36a)](_0x5771a2,_0x17c327))_0x2828e7['push'](_0x58e2d8+':\x20'+_0x5771a2+_0x4a966a(0xa8)+_0x17c327);}continue;case'1':if(_0x557b78[_0x4a966a(0x36a)](_0x429b2c,'snaps'+_0x4a966a(0x40c)))return;continue;case'2':_0x465bad(_0x557b78[_0x4a966a(0x5fb)],{'report':_0x557b78[_0x4a966a(0x2ef)](_0x130af5)});continue;case'3':_0x1a1eba=[];continue;case'4':_0x563a1d=_0x1f6be4;continue;case'5':if(!_0x25fa0e){_0x1bf46e=_0x1f6be4,_0x58bf8c=[],_0x557b78['TpHnF'](_0x2032b3,_0x4a966a(0x527)+'t',{'report':_0x317b1d()});return;}continue;case'6':var _0x1f6be4=_0x1dac0c(_0x523f9d);continue;case'7':if(_0x557b78[_0x4a966a(0x2a4)](_0x21d9ef,_0x557b78['ZmwwN'])){_0x557b78[_0x4a966a(0x5aa)](_0x579cb5,_0x2ee89d&&typeof _0xb51fbc['on']==='boole'+'an'?_0x845ed8['on']:_0x1dfb16['on'],_0x5aebeb&&typeof _0xcb0033['facto'+'r']===_0x557b78[_0x4a966a(0x286)]?_0x18a998[_0x4a966a(0x1fd)+'r']:_0x14414b[_0x4a966a(0x1fd)+'r']);return;}continue;case'8':var _0x523f9d=_0x557b78[_0x4a966a(0x2ef)](_0x11bacd);continue;}break;}}else return Math[_0x4a966a(0x1e4)](_0x5e7051-_0x272f2e)<=Math[_0x4a966a(0x48e)](0x1c0c+-0x1e13+0x14*0x1a,Math[_0x4a966a(0x1e4)](_0x272f2e)*(0x1*0x23ab+0xcf2*0x3+0x1*-0x4a81+0.6));}return Math[_0x4a966a(0x1e4)](_0x5e7051)<-0x2e8d2fc*-0x2+-0x1721eebd*0x4+0x9250defc;}function _0x4c48eb(){var _0x1e0b5f=_0x1c650b,_0x26e7c4={};try{var _0x3c4156=(_0x1e0b5f(0x648)+_0x1e0b5f(0x45b)+'3')[_0x1e0b5f(0x595)]('|'),_0x37bfd4=-0x1d8d+0xb99+0x11f4;while(!![]){switch(_0x3c4156[_0x37bfd4++]){case'0':_0x26e7c4[_0x1e0b5f(0x2db)+'tches']=!!(_0x4759f9&&_0x5f228e&&_0x3d7f39['Hxglb'](_0x4759f9[_0x1e0b5f(0x523)+_0x1e0b5f(0x349)+'g'],_0x5f228e));continue;case'1':_0x26e7c4[_0x1e0b5f(0x522)+'nRunt'+'imeIs'+_0x1e0b5f(0x12a)+'ted']=!!(_0x2855a7&&_0x2855a7['_runt'+_0x1e0b5f(0x39e)]&&_0x2855a7['_runt'+_0x1e0b5f(0x39e)]===_0x4759f9);continue;case'2':_0x26e7c4['runti'+'meGam'+'e']=_0x4759f9&&_0x4759f9[_0x1e0b5f(0x406)]?typeof _0x4759f9[_0x1e0b5f(0x406)]:'none';continue;case'3':_0x26e7c4[_0x1e0b5f(0x522)+'nRunt'+_0x1e0b5f(0x44e)+'me']=_0x2855a7&&_0x2855a7[_0x1e0b5f(0x4e5)+_0x1e0b5f(0x39e)]&&_0x2855a7[_0x1e0b5f(0x4e5)+_0x1e0b5f(0x39e)]['_game']?typeof _0x2855a7['_runt'+_0x1e0b5f(0x39e)]['_game']:_0x1e0b5f(0x4e3);continue;case'4':var _0x4759f9=window[_0x1e0b5f(0x5da)+'WebMo'+_0x1e0b5f(0x649)]&&window['Unity'+_0x1e0b5f(0xce)+'dkit'][_0x1e0b5f(0x50f)+'me'];continue;case'5':_0x26e7c4[_0x1e0b5f(0x394)]=_0x4759f9&&_0x4759f9['__sak'+_0x1e0b5f(0x349)+'g']||null;continue;}break;}}catch(_0x22a25a){_0x26e7c4['error']=String(_0x22a25a&&_0x22a25a[_0x1e0b5f(0x39c)+'ge']||_0x22a25a);}return _0x26e7c4;}function _0x4925b7(){var _0x38a48b=_0x1c650b,_0x545ba0=[_0x3d7f39['kuTmb'],_0x3d7f39[_0x38a48b(0x124)],_0x3d7f39[_0x38a48b(0x666)],'unity'+'Insta'+'nceWr'+_0x38a48b(0x378)],_0x4b5bdf={};for(var _0x508f70=-0x1*-0x1d41+-0x1*-0x58d+0x6f6*-0x5;_0x508f70<_0x545ba0[_0x38a48b(0x63e)+'h'];_0x508f70++){var _0x366318=_0x545ba0[_0x508f70],_0x588c13=typeof window[_0x366318];_0x4b5bdf[_0x366318]=_0x588c13===_0x38a48b(0x64f)+_0x38a48b(0x1b2)?_0x38a48b(0x64f)+_0x38a48b(0x1b2):_0x588c13;}var _0x36587a=_0x3d7f39[_0x38a48b(0x400)](_0x238a88);_0x4b5bdf['gameS'+_0x38a48b(0x5ae)]=_0xdcd25d['sourc'+'e'];try{_0x4b5bdf['hasMo'+_0x38a48b(0x43d)]=!!(_0x36587a&&_0x36587a['Modul'+'e']),_0x4b5bdf['heapU'+'8']=!!(_0x36587a&&_0x36587a[_0x38a48b(0x370)+'e']&&_0x36587a['Modul'+'e']['HEAPU'+'8']),_0x4b5bdf['heapB'+'ytes']=_0x4b5bdf[_0x38a48b(0xf0)+'8']?_0x36587a['Modul'+'e']['HEAPU'+'8']['lengt'+'h']:-0x38*0x49+0x76*0x3b+-0xb3a;}catch(_0xa2ad38){if(_0x3d7f39[_0x38a48b(0x29c)](_0x3d7f39[_0x38a48b(0x7d)],'sxzWq'))_0x4b5bdf['hasMo'+_0x38a48b(0x43d)]=![],_0x4b5bdf[_0x38a48b(0xf0)+'8']=![],_0x4b5bdf['heapB'+_0x38a48b(0x659)]=0x16*0x151+-0x4f*-0x3e+-0x3018;else return null;}return _0x4b5bdf[_0x38a48b(0x5be)+_0x38a48b(0x655)+'er']=typeof _0x360884,_0x4b5bdf;}function _0xbee8d9(_0x753041){var _0x152eb3=_0x1c650b,_0x4dab53={};for(var _0x59efc9 in _0x753041){var _0x359689=_0x753041[_0x59efc9];for(var _0x3517a0=-0x16af+-0x5c0+0xfb*0x1d;_0x3517a0<_0x359689['lengt'+'h'];_0x3517a0++){_0x4dab53[_0x3d7f39['RytHj'](_0x59efc9,_0x3d7f39['LosSe'])+_0x359689[_0x3517a0]['o'][_0x152eb3(0x1f3)+'ing'](0x13fe*0x1+0x7*0x284+-0x258a)]=_0x359689[_0x3517a0]['v'];}}return _0x4dab53;}function _0x1da388(_0x274be3,_0x271788){var _0x4c755f=_0x1c650b,_0x173d7a=('6|1|4'+_0x4c755f(0x4fc)+_0x4c755f(0x3b5)+'|2')['split']('|'),_0xc0ce1c=-0x2047*-0x1+-0x7a*0x43+-0x59;while(!![]){switch(_0x173d7a[_0xc0ce1c++]){case'0':for(var _0x57be83 in _0x2b79fc){var _0x14385e=_0x4bb003[_0x57be83],_0x51e329=_0x2b79fc[_0x57be83];if(_0x3d7f39['niGOB'](_0x14385e,_0x51e329))_0x5aa30e[_0x4c755f(0x17a)](_0x3d7f39['bLBWQ'](_0x57be83+':\x20'+_0x14385e+_0x3d7f39['MCfgI'],_0x51e329));}continue;case'1':if(_0x274be3!=='snaps'+_0x4c755f(0x40c))return;continue;case'2':_0x3d7f39[_0x4c755f(0x3a1)](_0x243f08,_0x4c755f(0x527)+'t',{'report':_0x39374f()});continue;case'3':_0x4bb003=_0x2b79fc;continue;case'4':var _0x147026=_0x43bad3();continue;case'5':if(!_0x4bb003){_0x4bb003=_0x2b79fc,_0x5aa30e=[],_0x3d7f39[_0x4c755f(0x3a1)](_0x243f08,_0x3d7f39[_0x4c755f(0x232)],{'report':_0x3d7f39['hzNvG'](_0x39374f)});return;}continue;case'6':if(_0x3d7f39['sqZCm'](_0x274be3,_0x3d7f39['QIBnk'])){_0x3d7f39[_0x4c755f(0x308)](_0x1efc89,_0x271788&&_0x3d7f39['quhsr'](typeof _0x271788['on'],_0x4c755f(0x619)+'an')?_0x271788['on']:_0x2c3c3c['on'],_0x271788&&_0x3d7f39['kJARs'](typeof _0x271788[_0x4c755f(0x1fd)+'r'],_0x4c755f(0x5a3)+'r')?_0x271788[_0x4c755f(0x1fd)+'r']:_0x2c3c3c['facto'+'r']);return;}continue;case'7':_0x5aa30e=[];continue;case'8':var _0x2b79fc=_0xbee8d9(_0x147026);continue;}break;}}var _0x30bf5e=null;function _0x507034(){var _0x453f8f=_0x1c650b,_0x249713={'PsnNJ':function(_0x59b778,_0x460acf,_0x5579e8){return _0x59b778(_0x460acf,_0x5579e8);},'zkZof':function(_0x336752,_0x25d64d){return _0x336752(_0x25d64d);},'VopiK':_0x3d7f39['DSNGQ'],'qlpbt':'fold'};if(_0x30bf5e)return _0x30bf5e;try{if(!document['body']||!document[_0x453f8f(0x482)][_0x453f8f(0x188)+'dChil'+'d'])return null;if(!document[_0x453f8f(0x333)+'ement'+'ById'](_0x3d7f39[_0x453f8f(0xe9)])){var _0xca094f=document[_0x453f8f(0x33b)+'eElem'+_0x453f8f(0x12d)](_0x3d7f39['XpecO']);_0xca094f['id']=_0x3d7f39['vnsKo'],_0xca094f['textC'+_0x453f8f(0x3d7)+'t']=_0x453f8f(0x25e)+_0x453f8f(0x49c)+_0x453f8f(0x92)+_0x453f8f(0x3f5)+_0x453f8f(0x688)+'l}',(document[_0x453f8f(0x28b)]||document['docum'+_0x453f8f(0x5cb)+'ement'])[_0x453f8f(0x188)+_0x453f8f(0x66d)+'d'](_0xca094f);}var _0x3c2eac=document['creat'+_0x453f8f(0x670)+'ent']('div');_0x3c2eac['id']='sakur'+_0x453f8f(0x24e)+_0x453f8f(0x461),_0x3c2eac[_0x453f8f(0x4a5)]['cssTe'+'xt']=_0x3d7f39[_0x453f8f(0x170)](_0x3d7f39[_0x453f8f(0x303)](_0x3d7f39[_0x453f8f(0x2ec)],_0x453f8f(0x393)+'round'+':rgba'+'(21,1'+'2,29,'+_0x453f8f(0xdd)+'borde'+'r:1px'+_0x453f8f(0x14f)+_0x453f8f(0x100)+'a(255'+',143,'+_0x453f8f(0x306)+_0x453f8f(0x2b0)+'order'+_0x453f8f(0x259)+_0x453f8f(0xb0)+_0x453f8f(0x26c)),'paddi'+'ng:6p'+'x\x208px'+_0x453f8f(0x3ad)+':11px'+_0x453f8f(0x137)+'\x20ui-m'+'onosp'+'ace,C'+_0x453f8f(0x543)+_0x453f8f(0x4d7)+_0x453f8f(0xe8)+'ce;co'+'lor:#'+'f7eef'+'5;')+(_0x453f8f(0x29a)+'hadow'+':0\x2010'+'px\x2030'+_0x453f8f(0x5cd)+_0x453f8f(0x45d)+_0x453f8f(0x3c1)+_0x453f8f(0xd5)+'elect'+_0x453f8f(0x19b)+_0x453f8f(0x411)+_0x453f8f(0x58c)+_0x453f8f(0xd5)+_0x453f8f(0x601)+_0x453f8f(0x19b)+';');var _0x1d4f12=_0x3d7f39['WUeAG'](_0x3d7f39['ygnqq'](_0x3d7f39[_0x453f8f(0x18d)](_0x3d7f39[_0x453f8f(0x313)](_0x3d7f39['WUeAG'](_0x3d7f39['PBcSs'](_0x3d7f39['lJZAJ'](_0x3d7f39['WUJJS'](_0x3d7f39['JWDpf'](_0x453f8f(0x108)+'data-'+_0x453f8f(0x2d1)+'r\x22\x20st'+_0x453f8f(0x506)+_0x453f8f(0x498)+'ay:fl'+_0x453f8f(0x3f0)+_0x453f8f(0xd7)+_0x453f8f(0x31f)+_0x453f8f(0x612)+_0x453f8f(0x284)+_0x453f8f(0x676)+_0x453f8f(0x17f)+_0x453f8f(0x211)+_0x453f8f(0x576)+_0x453f8f(0x3b4)+'idth:'+_0x453f8f(0x122)+_0x453f8f(0x226)+_0x3d7f39[_0x453f8f(0x1ef)]+_0x2ca8b4,'\x22>sak'+_0x453f8f(0x68d)+'b>'),_0x453f8f(0x2ad)+'on\x20da'+_0x453f8f(0x3b6)+_0x453f8f(0x5c0)+_0x453f8f(0x4a5)+_0x453f8f(0x38d)+_0x453f8f(0x69e)+_0x453f8f(0xb8)+'anspa'+_0x453f8f(0x34a)+_0x453f8f(0xbb)+'r:1px'+_0x453f8f(0x14f)+_0x453f8f(0x100)+'a(255'+_0x453f8f(0x2d8)+'177,.'+_0x453f8f(0x42f))+_0x3d7f39['sRsNd'],_0x3d7f39[_0x453f8f(0x5d9)]),_0x2ca8b4)+_0x453f8f(0x226),'<span'+_0x453f8f(0x5c5)+_0x453f8f(0x47a)+'v\x22\x20st'+_0x453f8f(0x506)+_0x453f8f(0x637)+':#bda'+_0x453f8f(0x488)+'in-wi'+_0x453f8f(0x4be)+_0x453f8f(0x69a)+_0x453f8f(0x225)+'</spa'+'n>')+('<butt'+'on\x20da'+_0x453f8f(0x3b6)+'\x22snap'+_0x453f8f(0x95)+_0x453f8f(0x33e)+_0x453f8f(0x4df)+'ound:'+_0x453f8f(0x605)+'paren'+_0x453f8f(0x233)+_0x453f8f(0x4d1)+_0x453f8f(0x4d9)+_0x453f8f(0x668)+_0x453f8f(0x51b)+_0x453f8f(0x297)+'3,177'+_0x453f8f(0x417)+';'),_0x3d7f39[_0x453f8f(0x4c6)]),_0x3d7f39[_0x453f8f(0x6a3)]),_0x453f8f(0x637)+_0x453f8f(0x566)+_0x453f8f(0x186)+_0x453f8f(0xb2)+'-radi'+'us:6p'+_0x453f8f(0x50d)+'ding:'+_0x453f8f(0x477)+_0x453f8f(0x8d)+'rsor:'+'point'+'er;fo'+_0x453f8f(0x276)+_0x453f8f(0x591)+_0x453f8f(0x613)+'/butt'+'on>')+_0x3d7f39[_0x453f8f(0x1b4)],_0x3d7f39[_0x453f8f(0x2b8)])+('<div\x20'+'data-'+_0x453f8f(0x43b)+_0x453f8f(0x54d)+_0x453f8f(0x506)+_0x453f8f(0x637)+':#8d7'+'a99;m'+_0x453f8f(0x677)+'dth:2'+_0x453f8f(0x1d8)+_0x453f8f(0x32f)+'iv>');_0x3c2eac[_0x453f8f(0x542)+_0x453f8f(0x443)]=_0x1d4f12;var _0x4ab365=function(_0x1d6e34){var _0x458e6d=_0x453f8f;return _0x3c2eac['query'+'Selec'+'tor'](_0x458e6d(0x13e)+'-a=\x22'+_0x1d6e34+'\x22]');},_0x16e6d1=_0x3d7f39[_0x453f8f(0x103)](_0x4ab365,'st'),_0x36b372=_0x4ab365(_0x453f8f(0x476)),_0x9bf71e=_0x3d7f39[_0x453f8f(0x535)](_0x4ab365,'sp'),_0x461002=_0x4ab365('fx'),_0x2ac2f6=_0x4ab365('fv'),_0x197e22=_0x3d7f39['vGLDz'](_0x4ab365,_0x3d7f39['mVora']);if(_0x9bf71e)_0x9bf71e['oncli'+'ck']=function(){var _0x3bb4f2=_0x453f8f;_0x1efc89(!_0x2c3c3c['on'],_0x2c3c3c[_0x3bb4f2(0x1fd)+'r']);};if(_0x461002)_0x461002['oninp'+'ut']=function(){var _0x3597f4=_0x453f8f;_0x249713[_0x3597f4(0x56e)](_0x1efc89,_0x2c3c3c['on'],_0x249713['zkZof'](parseFloat,_0x461002[_0x3597f4(0x5be)])||0x1caa+0x5d7*-0x1+-0x16d2);};if(_0x3d7f39['IOAdd'](_0x4ab365,_0x453f8f(0x630)))_0x3d7f39[_0x453f8f(0x32e)](_0x4ab365,_0x453f8f(0x630))['oncli'+'ck']=function(){var _0x3f971e=_0x453f8f;_0x1da388(_0x3f971e(0x642)+_0x3f971e(0x40c));};if(_0x4ab365(_0x453f8f(0x126)))_0x3d7f39[_0x453f8f(0x5f9)](_0x4ab365,_0x3d7f39[_0x453f8f(0x56a)])['oncli'+'ck']=function(){var _0x4ea0bc=_0x453f8f;if(!_0x197e22)return;var _0x13e778=_0x197e22[_0x4ea0bc(0x4a5)][_0x4ea0bc(0x498)+'ay']===_0x249713['VopiK'];_0x197e22[_0x4ea0bc(0x4a5)]['displ'+'ay']=_0x13e778?'':_0x249713[_0x4ea0bc(0x4f9)],_0x4ab365(_0x249713[_0x4ea0bc(0x340)])['textC'+_0x4ea0bc(0x3d7)+'t']=_0x13e778?'-':'+';};return document['body']['appen'+'dChil'+'d'](_0x3c2eac),_0x30bf5e={'el':_0x3c2eac,'st':_0x16e6d1,'st2':_0x36b372,'sp':_0x9bf71e,'fx':_0x461002,'fv':_0x2ac2f6},_0x30bf5e;}catch(_0x5c4d06){return console['warn'](_0x453f8f(0x661)+'kura]'+_0x453f8f(0x317)+'rame\x20'+_0x453f8f(0x2cb)+'isabl'+'ed',_0x453f8f(0x637)+':'+_0x2ca8b4,_0x5c4d06),null;}}var _0x671822=-0x1*-0x26c5+-0x2078+0x64b*-0x1;function _0x1efc89(_0x475a69,_0x3b3eba){var _0xba248c=_0x1c650b,_0x2fbd4b={'SvIYr':function(_0x44ecdd){return _0x3d7f39['UfPhK'](_0x44ecdd);}};if(_0x3d7f39[_0xba248c(0x5a0)]==='uCBWI'){_0x15a459['error']=_0xba248c(0x50f)+_0xba248c(0x4bc)+'eateP'+'lugin'+_0xba248c(0x154)+'ailab'+'le';return;}else{var _0x4423a3=_0x2c3c3c['on'];_0x2c3c3c['on']=!!_0x475a69;if(_0x2c3c3c['on']&&!_0x4423a3&&(_0x3d7f39['GIRqt'](_0x3b3eba,undefined)||_0x3b3eba===null||_0x3d7f39[_0xba248c(0x9d)](Number(_0x3b3eba),-0x3*-0x4cf+0x9*-0x70+0x1*-0xa7c))){if(_0x3d7f39[_0xba248c(0x217)](_0x3d7f39[_0xba248c(0x2c3)],_0x3d7f39['bMtRR'])){var _0x4bb1d6=_0x5d3779[_0x3b86f0];_0x81a258[_0xba248c(0x17a)](_0x3d7f39[_0xba248c(0x558)](_0x4bb1d6,_0xba248c(0x5e7))+_0x184c06[_0x4bb1d6]);}else _0x3b3eba=_0x671822;}_0x2c3c3c['facto'+'r']=Math[_0xba248c(0x332)](_0x2c3c3c['max'],Math[_0xba248c(0x48e)](_0x2c3c3c[_0xba248c(0x332)],_0x3d7f39['vGLDz'](Number,_0x3b3eba)||0x1dd9+0x1ec7+0x3c9f*-0x1));if(!_0x2c3c3c['on'])_0x3e9086={};var _0x2bd13f=_0x507034();if(_0x2bd13f){if(_0x3d7f39[_0xba248c(0x453)]===_0x3d7f39[_0xba248c(0x453)]){if(_0x2bd13f['sp']){if(_0x3d7f39['HDriq'](_0xba248c(0x617),_0xba248c(0x617))){_0x2fbd4b[_0xba248c(0x441)](_0xac87be)[_0xba248c(0x5ea)]({'host':_0x37ef56['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}else _0x2bd13f['sp'][_0xba248c(0x514)+'onten'+'t']=_0x2c3c3c['on']?_0xba248c(0x607)+_0xba248c(0x249):_0xba248c(0x607)+_0xba248c(0xec),_0x2bd13f['sp']['style'][_0xba248c(0x393)+_0xba248c(0x452)]=_0x2c3c3c['on']?_0x2ca8b4:_0xba248c(0x605)+_0xba248c(0x60c)+'t',_0x2bd13f['sp'][_0xba248c(0x4a5)]['color']=_0x2c3c3c['on']?'#2a0f'+'1b':_0xba248c(0xd3)+'f5';}if(_0x2bd13f['fx'])_0x2bd13f['fx'][_0xba248c(0x5be)]=String(_0x2c3c3c['facto'+'r']);if(_0x2bd13f['fv'])_0x2bd13f['fv'][_0xba248c(0x514)+_0xba248c(0x3d7)+'t']=_0x2c3c3c[_0xba248c(0x1fd)+'r']['toFix'+'ed'](-0x3b*0x12+-0x1da6+0x21cd)+'x';}else try{return _0x33db43();}catch(_0x175c8b){return{'version':_0x3f8a43,'when':new _0x3b1c37()['toISO'+'Strin'+'g'](),'elapsedMs':_0x62206[_0xba248c(0x64e)]()-_0xf787b3,'host':_0x276b2e,'uwmk':!!(_0x4ac148['Unity'+_0xba248c(0xce)+_0xba248c(0x649)]&&_0x4aa5d8[_0xba248c(0x5da)+_0xba248c(0xce)+'dkit'][_0xba248c(0x50f)+'me']),'il2CppContext':![],'arm':_0x33203e,'hooksTotal':_0x4d6181[_0xba248c(0x63e)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x3f7c49(_0x175c8b&&_0x175c8b[_0xba248c(0x39c)+'ge']||_0x175c8b)};}}}}function _0x318f50(_0x18e828){var _0x3fd911=_0x1c650b,_0x4a6b0b={'zfJUQ':function(_0x3a4009,_0x5070c7){return _0x3a4009===_0x5070c7;},'wIJVP':_0x3fd911(0x60f),'dlwZB':function(_0x167de5,_0x4d8e84){return _0x167de5|_0x4d8e84;},'umPVX':function(_0x51e972,_0x53808c,_0x356e6a,_0x3e9b27){var _0x197d0c=_0x3fd911;return _0x3d7f39[_0x197d0c(0x57a)](_0x51e972,_0x53808c,_0x356e6a,_0x3e9b27);},'XCoTt':function(_0x1155d4,_0x2db452){return _0x3d7f39['qFXCE'](_0x1155d4,_0x2db452);},'futwB':_0x3d7f39[_0x3fd911(0x1d1)],'hxPAV':_0x3d7f39['LhkTR'],'wpvst':function(_0x4ddf6b,_0x34a76c){return _0x4ddf6b===_0x34a76c;},'rFMJp':function(_0x445c3c,_0x24e977,_0x3a5e91,_0x40949b){return _0x445c3c(_0x24e977,_0x3a5e91,_0x40949b);}},_0x1b740f=_0x3d7f39[_0x3fd911(0x400)](_0x507034);if(!_0x1b740f||!_0x1b740f['st'])return;try{var _0xdbed91=Object[_0x3fd911(0x421)](_0x18e828&&_0x18e828[_0x3fd911(0x464)+_0x3fd911(0xb5)]||{})[_0x3fd911(0x63e)+'h'],_0x11c197=_0x18e828&&_0x18e828[_0x3fd911(0x346)]||null,_0x58fe5b=_0x11c197?_0x11c197['enemy'+_0x3fd911(0x212)]||-0x5*-0x45c+-0x85+0x1547*-0x1:-0x1*-0x11bc+0x202b+-0x16d*0x23,_0x2d90d2=_0x11c197?_0x11c197['botCo'+_0x3fd911(0x623)]||0xe0*-0x1d+-0x1de0+-0xdd0*-0x4:-0x8f5*0x4+-0x237*-0xc+0x940,_0x5a4f3c=_0x4b7c38?(_0x4b7c38[_0x3fd911(0xd8)+'r']['byteL'+_0x3fd911(0x5f0)]/(0x52ca+-0x13b8e1*0x1+0x236617))['toFix'+'ed'](0x225f*0x1+0x1f65+-0x41c4)+'MB':_0x3fd911(0x5d2)+'m',_0x5095c2=_0x3d7f39['DHsId'](_0x3d7f39['YjnIH'](_0x3d7f39['PBcSs'](_0x3d7f39['YELrE'](_0x3d7f39[_0x3fd911(0x4b4)](_0x3d7f39['qFyta']('v'+(_0x18e828&&_0x18e828['versi'+'on']||_0x17730e),_0x3fd911(0x9a)+'ks\x20')+(_0x18e828&&_0x18e828[_0x3fd911(0x4d0)+_0x3fd911(0x5f8)+'ed']||-0x17c6+-0x1*0x15d7+0x2d9d),'/')+(_0x18e828&&_0x18e828['hooks'+_0x3fd911(0x466)]||-0xfa2+-0x119*0x15+0x1*0x26af),_0x3d7f39[_0x3fd911(0x63a)]),_0xdbed91)+(_0x3fd911(0x155)+'\x20'),_0x5a4f3c),_0x3fd911(0x385)+_0x3fd911(0x1df))+_0x439c1e;_0x1b740f['st'][_0x3fd911(0x514)+'onten'+'t']=_0x5095c2;var _0x4fbc00=_0x1b740f['st2'];if(_0x4fbc00){if('YIDcT'!==_0x3fd911(0x4f0)){var _0x5ca60d=('6|5|1'+_0x3fd911(0x39b)+'7|2|4')['split']('|'),_0x430589=0x1*0x1e01+-0xa7*0x1a+0x3*-0x459;while(!![]){switch(_0x5ca60d[_0x430589++]){case'0':var _0x569005=_0x1242e5[_0x3fd911(0x483)+'pe']==='u8'?_0x4846d3['getUi'+'nt8'](_0x1242e5[_0x3fd911(0x5e5)]):_0x4846d3[_0x3fd911(0x467)+'t32'](_0x1242e5[_0x3fd911(0x5e5)],!![]);continue;case'1':if(!_0xeb9f94)return![];continue;case'2':if(_0x4a6b0b['zfJUQ'](_0x4d4e2c,_0x4a6b0b[_0x3fd911(0x40a)]))_0x4b22e0=_0x245114(_0x4519c8);else{if(_0x4a6b0b[_0x3fd911(0x608)](_0x3bb978,_0x3fd911(0x5a4)))_0x4b22e0=_0x4a6b0b[_0x3fd911(0x45a)](_0x4515f3,0xa73+0x10c2+-0x1b35);else _0x4b22e0=(_0x518708?0xf0e+0x256+-0x1163:-0x311*0xa+-0x22aa+0x4154)&0x6*0x5f+-0x8*0x42b+0x1*0x201d;}continue;case'3':var _0x4846d3=new _0xfa8b43(_0xeb9f94[_0x3fd911(0xd8)+'r'],_0xeb9f94[_0x3fd911(0x5b7)+'ffset'],_0xeb9f94['byteL'+_0x3fd911(0x5f0)]);continue;case'4':return _0x4a6b0b[_0x3fd911(0xee)](_0x16792f,_0x366ee2+_0x53d31b+_0x1242e5[_0x3fd911(0x177)+'n'],'i32',_0x4b22e0^_0x569005)&&_0x3ad812(_0x4a6b0b['XCoTt'](_0x4a6b0b[_0x3fd911(0x91)](_0x5df0c4,_0x15062f),_0x1242e5[_0x3fd911(0x28f)]),_0x481959===_0x3fd911(0x60f)?_0x3fd911(0x52e):_0x230c09===_0x4a6b0b[_0x3fd911(0x4c4)]?_0x4a6b0b['hxPAV']:'u8',_0x435b54===_0x3fd911(0x60f)?_0x2b35d8:_0x4a6b0b['wpvst'](_0x51718b,_0x3fd911(0x5a4))?_0x3bc35d|-0x1b*0x8b+0x145c+-0x5b3:_0x10f2bf?0x1ca+0x2*0x120d+-0x9f*0x3d:-0x1*-0x124f+0x3e5*-0x5+0x12a)&&_0x250c3e(_0x24d98a+_0x2359d0+_0x1242e5[_0x3fd911(0x14a)+'e'],'u8',0x9fc+0x4+-0xa00);case'5':var _0xeb9f94=_0x4a6b0b[_0x3fd911(0x2bb)](_0x2d705d,_0x3bdd13,_0x17c235,_0x1242e5[_0x3fd911(0x169)]);continue;case'6':var _0x1242e5=_0x6959f0[_0x4fb9df];continue;case'7':var _0x4b22e0;continue;}break;}}else _0x4fbc00[_0x3fd911(0x514)+_0x3fd911(0x3d7)+'t']=_0x3d7f39[_0x3fd911(0x13a)](_0x58fe5b,-0x1536+-0x6e6+0x1c1c)?_0x3d7f39[_0x3fd911(0x49b)](_0x3d7f39['kLeOs'](_0x3fd911(0x59e)+_0x3fd911(0x3dd),_0x58fe5b)+(_0x2d90d2?_0x3fd911(0x282)+_0x2d90d2+'\x20bots':''),_0x11c197&&_0x11c197[_0x3fd911(0x216)+'a']?_0x3d7f39['ZZXxd']+_0x11c197[_0x3fd911(0x216)+_0x3fd911(0x618)]:_0x3fd911(0xcb)+'\x20-'):_0x3fd911(0x4ac)+_0x3fd911(0x3df)+_0x3fd911(0x24a)+'(lobb'+'y?)\x20\x20'+'cam\x20'+(_0x11c197&&_0x11c197[_0x3fd911(0x216)+'a']?_0x11c197['camer'+'aFrom']:'-'),_0x4fbc00[_0x3fd911(0x4a5)][_0x3fd911(0x637)]=_0x58fe5b>-0xbd*-0x2+-0x1*-0x22a6+-0x2420?_0x3fd911(0x5bd)+'a8':_0x3fd911(0x176)+'99';}}catch(_0x1b7837){}}window[_0x1c650b(0xfc)+'entLi'+_0x1c650b(0x127)+'r']('keydo'+'wn',function(_0x4b8d82){var _0x2f2bae=_0x1c650b,_0x586b29={'jGjQi':function(_0x335227,_0x959620){var _0x299fc2=_0x36a4;return _0x3d7f39[_0x299fc2(0x32e)](_0x335227,_0x959620);}};if(_0x3d7f39['spbjN'](_0x2f2bae(0x341),_0x2f2bae(0x428))){if(!_0x4b8d82)return;try{if(_0x3d7f39[_0x2f2bae(0x63c)](_0x4b8d82[_0x2f2bae(0x420)],'F9')){_0x4b8d82[_0x2f2bae(0x30f)+_0x2f2bae(0x66e)+_0x2f2bae(0x360)](),_0x1da388(_0x2f2bae(0x642)+'hot');return;}if(_0x3d7f39[_0x2f2bae(0x2fa)](_0x4b8d82[_0x2f2bae(0x420)],'F7')){_0x4b8d82['preve'+_0x2f2bae(0x66e)+_0x2f2bae(0x360)](),_0x1efc89(!_0x2c3c3c['on'],_0x2c3c3c['facto'+'r']);return;}if(_0x4b8d82[_0x2f2bae(0x420)]==='F8'){if(_0x3d7f39[_0x2f2bae(0x181)]!==_0x2f2bae(0x46b)){_0x4b8d82['preve'+_0x2f2bae(0x66e)+_0x2f2bae(0x360)](),_0x1efc89(_0x2c3c3c['on'],_0x3d7f39['EYaSi'](_0x2c3c3c[_0x2f2bae(0x1fd)+'r'],0x1cae+0xabe+-0x276c+0.5));return;}else _0xd69d00=_0x213d8a[_0x2f2bae(0x421)](_0x28bdd2)[_0x2f2bae(0x3a6)](0x3f6+-0x10c3+0xccd,-0x1ed3*-0x1+0x2*0x1147+-0x741*0x9);}if(_0x4b8d82[_0x2f2bae(0x420)]==='F6'){_0x4b8d82[_0x2f2bae(0x30f)+_0x2f2bae(0x66e)+_0x2f2bae(0x360)](),_0x3d7f39[_0x2f2bae(0x1c1)](_0x1efc89,_0x2c3c3c['on'],_0x3d7f39[_0x2f2bae(0x11c)](_0x2c3c3c[_0x2f2bae(0x1fd)+'r'],0xdb2+0x4*0x957+-0x330e*0x1+0.5));return;}}catch(_0x1afc08){}}else{if(_0x550bb1&&typeof _0x214616['then']==='funct'+_0x2f2bae(0x3f6))_0x3f46d3[_0x2f2bae(0x388)](_0x5e359f,function(){});else _0x586b29['jGjQi'](_0x1f70f2,_0x5562fc);}},!![]);function _0x39374f(){var _0x46d0ab=_0x1c650b,_0x1610d0={'hscck':function(_0x1b00da,_0x85555d){return _0x1b00da+_0x85555d;}},_0x8d16fc=window[_0x46d0ab(0x5da)+_0x46d0ab(0xce)+_0x46d0ab(0x649)]&&window['Unity'+'WebMo'+_0x46d0ab(0x649)][_0x46d0ab(0x50f)+'me']||null,_0x54ede3=_0x8d16fc&&_0x8d16fc['il2Cp'+_0x46d0ab(0x51f)+_0x46d0ab(0x5dc)],_0xaad340=_0x54ede3&&_0x54ede3['scrip'+'tData'],_0x4b2c6b={},_0x3fdd1c=[];for(var _0x53295f in _0x28a34d){if(_0x3d7f39[_0x46d0ab(0x432)]!==_0x46d0ab(0x48d)){_0x4b2c6b[_0x53295f]='0x'+_0x28a34d[_0x53295f][_0x46d0ab(0x116)][_0x46d0ab(0x1f3)+_0x46d0ab(0x25c)](0xc24+0x7b2+-0x13c6);if(_0x28a34d[_0x53295f]['repla'+'ced'])_0x3fdd1c['push'](_0x53295f);}else{var _0x34892d=(_0x46d0ab(0x4cf)+_0x46d0ab(0x180)+_0x46d0ab(0x118)+'|9|5')['split']('|'),_0x2ef967=0x2f9+0x118d*0x1+-0x1486;while(!![]){switch(_0x34892d[_0x2ef967++]){case'0':try{var _0x2450f4=_0x5ee6a6[_0x46d0ab(0x5da)+_0x46d0ab(0xce)+'dkit']['Runti'+'me'];_0x2450f4[_0x46d0ab(0x523)+_0x46d0ab(0x349)+'g']=_0x5a28c7+':'+_0x1214e7[_0x46d0ab(0x377)+'m']()['toStr'+'ing'](-0x89*0x20+0x3*0x36d+0x6fd*0x1)['slice'](0xc*0x2dd+0xcf1+-0x2f4b,-0x2137+-0x244*0x6+-0xb3*-0x43),_0x15cbaf=_0x2450f4['__sak'+_0x46d0ab(0x349)+'g'];}catch(_0x343d7e){}continue;case'1':_0x2d484f[_0x46d0ab(0x4d0)+_0x46d0ab(0x1e6)+_0x46d0ab(0x4e0)]=_0x5e007d[_0x46d0ab(0x63e)+'h'];continue;case'2':_0x3517f4=_0x45c203['creat'+'ePlug'+'in']({'name':_0x3d7f39[_0x46d0ab(0x11b)],'version':_0x533f30,'referencedAssemblies':_0x3f6d5f[_0x46d0ab(0x3a6)]()});continue;case'3':_0x570c0e['ok']=!![];continue;case'4':var _0x45c203=_0x3c9edb[_0x46d0ab(0x5da)+_0x46d0ab(0xce)+_0x46d0ab(0x649)]&&_0x1cc941['Unity'+_0x46d0ab(0xce)+_0x46d0ab(0x649)]['Runti'+'me'];continue;case'5':_0x41f53f['memor'+'yTap']=!![];continue;case'6':_0x4b8fac();continue;case'7':if(!_0x45c203||typeof _0x45c203['creat'+'ePlug'+'in']!=='funct'+_0x46d0ab(0x3f6)){_0x154be1['error']=_0x3d7f39[_0x46d0ab(0x51d)];return;}continue;case'8':_0x183f9d['attem'+_0x46d0ab(0x34e)]=!![];continue;case'9':_0x42996c();continue;}break;}}}var _0x2b24f8={};for(var _0x3e15d7 in _0x28a34d)_0x2b24f8[_0x3e15d7]=_0x54324f(_0x28a34d[_0x3e15d7][_0x46d0ab(0x116)]);var _0x4234c0={},_0x4df4d3=null;try{_0x4234c0=_0x3d7f39[_0x46d0ab(0x342)](_0x43bad3);}catch(_0x296e00){_0x4df4d3=String(_0x296e00&&_0x296e00[_0x46d0ab(0x39c)+'ge']||_0x296e00);}var _0x23d260={'version':_0x17730e,'when':new Date()[_0x46d0ab(0x5c9)+_0x46d0ab(0x4d4)+'g'](),'elapsedMs':_0x3d7f39['gKsex'](Date['now'](),_0x3e0919),'frame':location[_0x46d0ab(0x350)][_0x46d0ab(0x3a6)](-0x1ad0+-0xe02+0x1db*0x16,-0x142*0x2+0x2018+-0x1d1c),'host':_0x162860,'frameRole':_0x463f96,'uwmk':!!_0x8d16fc,'il2CppContext':!!_0x54ede3,'typeCount':_0xaad340?Object[_0x46d0ab(0x421)](_0xaad340)[_0x46d0ab(0x63e)+'h']:null,'arm':_0x1810a5,'assemblies':_0x1d3f99,'hooksTotal':_0x1ee046['lengt'+'h'],'hooksApplied':_0x3d7f39[_0x46d0ab(0x4db)](_0x1e03f4),'hooksResolved':_0x3d7f39['BJnkP'](_0x40d48d),'hooksRegisteredAtArm':_0x1810a5[_0x46d0ab(0x4d0)+_0x46d0ab(0x1e6)+'tered']||-0xa3*0xb+0x2*-0x6a1+0x1443,'hookErrors':_0x4400ae['slice'](-0x1c*-0x11c+-0x1fc8+0xb8,0x22a+0x19dc+-0x1bfe),'instances':_0x4b2c6b,'classNames':_0x2b24f8,'instancesReplaced':_0x3fdd1c,'hookFireProof':_0x279197,'survey':_0x4234c0,'actkKeys':_0x218dc5,'surveyRows':Object['keys'](_0x4234c0)[_0x46d0ab(0x33c)+'e'](function(_0x5f2d46,_0x416780){return _0x1610d0['hscck'](_0x5f2d46,_0x4234c0[_0x416780]['lengt'+'h']);},-0x1d6e*-0x1+0xb33*-0x1+-0x123b),'reads':{'ok':_0xdcd25d['ok'],'failed':_0xdcd25d[_0x46d0ab(0x2aa)+'d'],'lastError':_0xdcd25d[_0x46d0ab(0x2ed)+_0x46d0ab(0x11e)],'source':_0xdcd25d['sourc'+'e']},'identity':_0x3d7f39['TTGnx'](_0x4c48eb),'globals':_0x4925b7(),'wasmMemory':{'captured':!!_0x4b7c38,'atMs':_0x31f441,'bytes':(function(){var _0x55b120=_0x46d0ab;try{return _0x4b7c38&&_0x4b7c38['buffe'+'r']?_0x4b7c38['buffe'+'r'][_0x55b120(0x152)+_0x55b120(0x5f0)]:-0x19b3+-0x4*0xf1+-0x1*-0x1d77;}catch(_0x4bd916){return-0x24a+0xc75+-0xa2b;}}()),'exportKeys':_0x3502a7},'diff':_0x5aa30e[_0x46d0ab(0x3a6)](0xabd*0x1+0x2262+-0x2d1f,-0x36*-0x6f+0x1*-0x8d+-0x16b5),'speed':{'on':_0x2c3c3c['on'],'factor':_0x2c3c3c['facto'+'r'],'writes':_0x439c1e,'scaled':_0x52d859['slice'](0x1adc+0xbc8+-0x2*0x1352,-0xba6+-0x21bf+-0x1af*-0x1b),'skipped':_0x22fdec[_0x46d0ab(0x3a6)](0x397*0x2+0x81f*0x3+-0x1f8b,0x150b+-0x53*-0x11+-0x2*0xd3f)},'esp':_0x3d7f39['TTGnx'](_0x632241),'uwmkLog':_0x4d9379['slice'](-0x56+0x1105*-0x2+-0x2c*-0xc8,-0x2517+-0x151b+-0x3a46*-0x1),'warnings':[]};if(_0x4df4d3)_0x23d260[_0x46d0ab(0x647)+_0x46d0ab(0x22e)]['push'](_0x3d7f39['jWZlI'](_0x46d0ab(0x604)+'y\x20fai'+'led:\x20',_0x4df4d3));if(_0x1810a5[_0x46d0ab(0xf2)])_0x23d260[_0x46d0ab(0x647)+_0x46d0ab(0x22e)]['push'](_0x46d0ab(0x458)+_0x46d0ab(0x15e)+_0x46d0ab(0x3d8)+'led:\x20'+_0x1810a5[_0x46d0ab(0xf2)]);if(_0x3d7f39[_0x46d0ab(0x562)](_0x23d260[_0x46d0ab(0x604)+'yRows'],-0x5*0x71e+-0x1136*0x1+0x1b4*0x1f)&&_0x3d7f39['PNkZD'](Object[_0x46d0ab(0x421)](_0x23d260[_0x46d0ab(0x464)+'nces'])['lengt'+'h'],-0x5ac+-0x6aa*-0x2+-0x7a8)){if(_0x46d0ab(0x277)!==_0x46d0ab(0x1cb))_0x23d260[_0x46d0ab(0x647)+_0x46d0ab(0x22e)]['push'](_0x3d7f39[_0x46d0ab(0x2a1)](_0x46d0ab(0xe6)+_0x46d0ab(0x389)+Object[_0x46d0ab(0x421)](_0x23d260[_0x46d0ab(0x464)+_0x46d0ab(0xb5)])['lengt'+'h']+(_0x46d0ab(0x2b4)+_0x46d0ab(0x391)+_0x46d0ab(0x515)+'read\x20'+_0x46d0ab(0x251)+'lds.\x20'),_0xdcd25d[_0x46d0ab(0x2ed)+'rror']?_0x3d7f39[_0x46d0ab(0x5e3)]+_0xdcd25d[_0x46d0ab(0x2ed)+_0x46d0ab(0x11e)]:'No\x20re'+'ad\x20fa'+_0x46d0ab(0x1c0)+'\x20so\x20e'+_0x46d0ab(0x206)+_0x46d0ab(0x556)+_0x46d0ab(0x52a)+'\x20skip'+'ped\x20b'+'y\x20typ'+'e.'));else{var _0x2eb81a=_0x398ab3['unity'+_0x46d0ab(0x273)+_0x46d0ab(0x3b8)]||_0x12d181[_0x46d0ab(0x7c)+'Game']||_0x44915c[_0x46d0ab(0x513)];if(_0x2eb81a)return _0x4d1262[_0x46d0ab(0x111)+'e']=_0x3d7f39['wCVQQ'],_0x2eb81a;}}_0x23d260[_0x46d0ab(0x352)+_0x46d0ab(0xca)]&&_0x23d260['ident'+_0x46d0ab(0xca)]['tagMa'+_0x46d0ab(0x358)]===![]&&_0x23d260[_0x46d0ab(0x647)+_0x46d0ab(0x22e)][_0x46d0ab(0x17a)](_0x3d7f39[_0x46d0ab(0x4e2)](_0x46d0ab(0x695)+'ER\x20UW'+_0x46d0ab(0x589)+'PY\x20TO'+'OK\x20OV'+_0x46d0ab(0x114)+_0x46d0ab(0x36d)+_0x46d0ab(0x5da)+'WebMo'+'dkit.'+_0x46d0ab(0x4c1)+_0x46d0ab(0x50f)+'me\x20we'+_0x46d0ab(0x1cf)+_0x46d0ab(0x61a)+'\x20'+('repla'+'ced\x20b'+'y\x20a\x20d'+_0x46d0ab(0x4bd)+_0x46d0ab(0x54c)+_0x46d0ab(0x3f8)+_0x46d0ab(0xdb)+'o\x20we\x20'+'are\x20a'+'sking'+_0x46d0ab(0x8e)+'wrong'+_0x46d0ab(0x2b4)+'ct\x20fo'+'r\x20')+_0x3d7f39[_0x46d0ab(0x489)],'Sakur'+_0x46d0ab(0x56d)+'K\x20scr'+'ipt\x20i'+_0x46d0ab(0x2de)+'permo'+'nkey\x20'+_0x46d0ab(0x38a)+_0x46d0ab(0x300)+_0x46d0ab(0x639)+'.'));_0x23d260['ident'+_0x46d0ab(0xca)]&&_0x23d260[_0x46d0ab(0x352)+'ity'][_0x46d0ab(0x522)+_0x46d0ab(0x2e9)+_0x46d0ab(0x416)+_0x46d0ab(0x12a)+'ted']===![]&&_0x23d260[_0x46d0ab(0x647)+_0x46d0ab(0x22e)]['push'](_0x3d7f39[_0x46d0ab(0x269)](_0x46d0ab(0x522)+'n._ru'+_0x46d0ab(0x422)+_0x46d0ab(0x3e7)+_0x46d0ab(0x3db)+'ndow.'+_0x46d0ab(0x5da)+_0x46d0ab(0xce)+'dkit.'+_0x46d0ab(0x50f)+_0x46d0ab(0x99)+_0x46d0ab(0xfb)+_0x46d0ab(0x23a)+'\x20was\x20'+'built'+'\x20',_0x46d0ab(0x650)+'st\x20a\x20'+'diffe'+'rent\x20'+_0x46d0ab(0x50f)+_0x46d0ab(0x1b0)+_0x46d0ab(0x31e)+'e\x20tha'+_0x46d0ab(0x4b2)+_0x46d0ab(0x4c7)+_0x46d0ab(0x631)+'w\x20exp'+_0x46d0ab(0x1b3)));if(_0x23d260['esp']&&_0x23d260[_0x46d0ab(0x346)]['note'])_0x23d260[_0x46d0ab(0x647)+_0x46d0ab(0x22e)]['push'](_0x3d7f39[_0x46d0ab(0x120)](_0x3d7f39[_0x46d0ab(0x1d7)],_0x23d260['esp'][_0x46d0ab(0x606)]));if(_0x23d260[_0x46d0ab(0x3a2)+'ls']&&!_0x23d260[_0x46d0ab(0x3a2)+'ls'][_0x46d0ab(0xf0)+'8']){var _0x2e2d5c='';_0x23d260['hookF'+_0x46d0ab(0x190)+'oof']&&(_0x2e2d5c=_0x3d7f39[_0x46d0ab(0x622)](_0x3d7f39[_0x46d0ab(0x2c2)](_0x3d7f39['NwNFQ'](_0x46d0ab(0x2bc)+'ok\x20fi'+_0x46d0ab(0x33d)+'t\x20'+_0x23d260['hookF'+_0x46d0ab(0x190)+_0x46d0ab(0x5e0)][_0x46d0ab(0x1a9)],'ms\x20wi'+_0x46d0ab(0x373)+'igina'+_0x46d0ab(0x379)+'=')+_0x23d260[_0x46d0ab(0x89)+'irePr'+_0x46d0ab(0x5e0)]['origi'+_0x46d0ab(0x215)+'nc'],_0x3d7f39[_0x46d0ab(0x438)]),_0x23d260['hookF'+'irePr'+'oof'][_0x46d0ab(0x4b9)+_0x46d0ab(0x5e9)+'eAtFi'+'re'])+('\x20(sou'+_0x46d0ab(0x663))+(_0x23d260[_0x46d0ab(0x89)+'irePr'+_0x46d0ab(0x5e0)]['gameS'+_0x46d0ab(0x5ae)+_0x46d0ab(0x603)+'e']||_0x46d0ab(0x4e3))+('),\x20so'+'\x20the\x20'+'refer'+'ence\x20'+'exist'+_0x46d0ab(0x4f6)+'en\x20an'+_0x46d0ab(0x69b)+'not\x20r'+'eacha'+_0x46d0ab(0x671)+_0x46d0ab(0x478))),_0x23d260[_0x46d0ab(0x647)+'ngs'][_0x46d0ab(0x17a)](_0x3d7f39[_0x46d0ab(0x18d)](_0x3d7f39['hdUml']+(_0x23d260['globa'+'ls']['gameS'+_0x46d0ab(0x5ae)]||_0x46d0ab(0x4e3))+_0x3d7f39[_0x46d0ab(0x3eb)],_0x3d7f39['CSYgd'])+_0x2e2d5c);}if(_0x23d260[_0x46d0ab(0x3a2)+'ls']&&!_0x23d260['globa'+'ls'][_0x46d0ab(0x5be)+_0x46d0ab(0x655)+'er']||_0x23d260[_0x46d0ab(0x3a2)+'ls']['value'+'Wrapp'+'er']===_0x46d0ab(0x64f)+_0x46d0ab(0x1b2)){if('fptUU'!==_0x46d0ab(0x44a))try{if(_0x2ab1dd[_0x7e2cd2][_0x46d0ab(0x21c)+_0x46d0ab(0x58f)+'dow'])_0x5092ee[_0x2162fa][_0x46d0ab(0x21c)+'ntWin'+_0x46d0ab(0x60a)][_0x46d0ab(0x3cb)+'essag'+'e'](_0x180179,'*');}catch(_0x4223be){}else _0x23d260[_0x46d0ab(0x647)+'ngs'][_0x46d0ab(0x17a)]('windo'+_0x46d0ab(0x3bd)+_0x46d0ab(0xeb)+_0x46d0ab(0x148)+'t.Val'+'ueWra'+_0x46d0ab(0x40b)+'is\x20mi'+_0x46d0ab(0x405)+_0x46d0ab(0x27f)+'pture'+'\x20is\x20r'+_0x46d0ab(0x53e)+'g\x20bli'+_0x46d0ab(0x2ba));}_0x3d7f39['PNkZD'](_0x23d260[_0x46d0ab(0x4d0)+'Total'],-0x4f+-0x1*-0x23e7+-0x2398)&&_0x3d7f39['SWYBE'](_0x23d260[_0x46d0ab(0x4d0)+'Appli'+'ed'],-0x17e+-0x761+-0x2f5*-0x3)&&_0xaad340&&(_0x23d260['hooks'+_0x46d0ab(0x2fd)+_0x46d0ab(0x53b)]===-0xcdb+-0x14f2+-0x1*-0x21cd?_0x23d260[_0x46d0ab(0x647)+'ngs'][_0x46d0ab(0x17a)](_0x3d7f39[_0x46d0ab(0x2d7)](_0x3d7f39[_0x46d0ab(0x534)](_0x3d7f39['YwQek'](_0x3d7f39[_0x46d0ab(0x380)](_0x3d7f39[_0x46d0ab(0x355)],_0x23d260[_0x46d0ab(0x4d0)+'Total']),_0x46d0ab(0x2f5)+_0x46d0ab(0x447)+_0x46d0ab(0x5f4)+_0x46d0ab(0x25b)+_0x46d0ab(0x1da)+_0x46d0ab(0x240)+'\x20The\x20'+'apply'+'\x20pass'+'\x20'),'runs\x20'+_0x46d0ab(0x34b)+_0x46d0ab(0x361)+_0x46d0ab(0x39a)+'Assem'+'bly.i'+_0x46d0ab(0x3f8)+'tiate'+'\x20and\x20'+'snaps'+_0x46d0ab(0x698)+_0x46d0ab(0x522)+_0x46d0ab(0x568)+_0x46d0ab(0x4cc)+_0x46d0ab(0x5ca)+'\x20')+_0x3d7f39['PGNgn'],_0x3d7f39[_0x46d0ab(0x189)])+_0x23d260['hooks'+_0x46d0ab(0x1e6)+_0x46d0ab(0x4e0)+'AtArm']+_0x3d7f39[_0x46d0ab(0x37b)]):_0x23d260[_0x46d0ab(0x647)+_0x46d0ab(0x22e)][_0x46d0ab(0x17a)](_0x3d7f39['SjNRB'](_0x3d7f39['nEscH']('UWMK\x20'+_0x46d0ab(0x4b9)+'ved\x20'+_0x23d260[_0x46d0ab(0x4d0)+_0x46d0ab(0x2fd)+'ved']+'\x20of\x20',_0x23d260[_0x46d0ab(0x4d0)+_0x46d0ab(0x466)])+_0x3d7f39[_0x46d0ab(0x267)],_0x3d7f39[_0x46d0ab(0x598)])));if(_0x3d7f39[_0x46d0ab(0x533)](_0x23d260['hooks'+'Appli'+'ed'],-0x126e+0x5*0x6e4+-0x24a*0x7)&&!_0x23d260['insta'+'nces'][_0x46d0ab(0x5ed)+'ntrol'+_0x46d0ab(0x90)]){if(_0x3d7f39['wVJTD']==='ePyjA')_0x23d260['warni'+'ngs']['push'](_0x3d7f39['haGEJ']('Hooks'+_0x46d0ab(0x5eb)+_0x46d0ab(0x54f)+'ed\x20bu'+_0x46d0ab(0x460)+_0x46d0ab(0x5ed)+_0x46d0ab(0xa1)+_0x46d0ab(0x2a9)+'as\x20fi'+_0x46d0ab(0x1ea)+'et.\x20','Eithe'+'r\x20you'+'\x20are\x20'+'not\x20i'+'n\x20a\x20r'+_0x46d0ab(0x2cf)+_0x46d0ab(0x2ae)+'he\x20ho'+_0x46d0ab(0x4b7)+_0x46d0ab(0x433)+_0x46d0ab(0x5e6)+'ong\x20o'+_0x46d0ab(0x390)+_0x46d0ab(0x179)));else{_0x51e2e4[_0x46d0ab(0x2cc)](_0x46d0ab(0x661)+_0x46d0ab(0x24b)+_0x46d0ab(0x61f)+'lWarz'+_0x46d0ab(0x203)+'rt',_0x3d7f39[_0x46d0ab(0x557)]('color'+':'+_0xc60e60,_0x46d0ab(0x3ad)+'-weig'+_0x46d0ab(0x26d)+'0'),_0x3523e8),_0x455313[_0x46d0ab(0x2cc)](_0x3d7f39[_0x46d0ab(0xc3)](_0x3d7f39[_0x46d0ab(0x2f2)](_0x40cad2,'\x0a'),_0x1764cf[_0x46d0ab(0x524)+_0x46d0ab(0x296)](_0x47c107,null,-0x68e+0x41*-0x8b+-0x1e7*-0x16))+'\x0a'+_0x55d5e5);try{_0x2029f3(_0x5b968c);}catch(_0x4c3762){}_0xaed126('repor'+'t',{'report':_0x476cf8});}}if(_0x23d260[_0x46d0ab(0x464)+'ncesR'+_0x46d0ab(0x497)+'ed'][_0x46d0ab(0x63e)+'h']){if('MZbLl'===_0x46d0ab(0x539))return _0x39a867[-0x5*0x1e7+-0x9f7+0x6*0x33f]=_0x261756,_0x483afb[0x107e+-0x8*0x67+-0x2*0x6a3];else _0x23d260[_0x46d0ab(0x647)+_0x46d0ab(0x22e)]['push'](_0x3d7f39[_0x46d0ab(0x46c)](_0x3d7f39[_0x46d0ab(0x1f5)],_0x23d260[_0x46d0ab(0x464)+'ncesR'+_0x46d0ab(0x497)+'ed']['join'](',\x20')));}return _0x23d260;}function _0x14fbda(_0x2ed512){var _0x2678a1=_0x1c650b;console[_0x2678a1(0x2cc)](_0x3d7f39[_0x2678a1(0x436)],_0x3d7f39['ygnqq'](_0x3d7f39[_0x2678a1(0x272)](_0x3d7f39[_0x2678a1(0x2e1)],_0x2ca8b4),';font'+_0x2678a1(0x28d)+_0x2678a1(0x26d)+'0'),_0x2ed512),console['log'](_0x3d7f39[_0x2678a1(0x2c6)](_0x3d7f39[_0x2678a1(0x10a)](_0x3d7f39['iOwKt'](_0x3d7f39['RJKFq'](_0x20760a,'\x0a'),JSON[_0x2678a1(0x524)+_0x2678a1(0x296)](_0x2ed512,null,0x20c0+0x161*-0x3+-0x1c9c)),'\x0a'),_0x502ba1));try{_0x318f50(_0x2ed512);}catch(_0x23e628){}_0x3d7f39['BRxft'](_0x243f08,_0x2678a1(0x527)+'t',{'report':_0x2ed512});}function _0x3bba07(){var _0x497f9b=_0x1c650b;try{if(_0x3d7f39[_0x497f9b(0x1aa)]!==_0x497f9b(0x4fe)){if(_0x377000[_0x497f9b(0x60c)+'t']&&_0x3d7f39['HKViv'](_0x34cc49[_0x497f9b(0x60c)+'t'],_0x527a22))_0x5aef1c['paren'+'t'][_0x497f9b(0x3cb)+_0x497f9b(0x239)+'e'](_0x5209d4,'*');}else return _0x3d7f39['UfZsC'](_0x39374f);}catch(_0xa8492d){if('bPQlJ'!==_0x3d7f39[_0x497f9b(0x86)])return{'version':_0x17730e,'when':new Date()[_0x497f9b(0x5c9)+_0x497f9b(0x4d4)+'g'](),'elapsedMs':_0x3d7f39['jiYjV'](Date[_0x497f9b(0x64e)](),_0x3e0919),'host':_0x162860,'uwmk':!!(window[_0x497f9b(0x5da)+'WebMo'+_0x497f9b(0x649)]&&window[_0x497f9b(0x5da)+_0x497f9b(0xce)+'dkit']['Runti'+'me']),'il2CppContext':![],'arm':_0x1810a5,'hooksTotal':_0x1ee046['lengt'+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x3d7f39[_0x497f9b(0x50c)](String,_0xa8492d&&_0xa8492d[_0x497f9b(0x39c)+'ge']||_0xa8492d)};else _0x3920ad[_0x497f9b(0x167)+'oard']['write'+'Text'](_0x35cc6a)[_0x497f9b(0x388)](_0xfa2c1,function(){_0x27348f();});}}function _0x5f596b(){var _0x532aea=_0x1c650b,_0x170f2f={'dAlKQ':_0x3d7f39['nlVJH']};if(_0x532aea(0x32b)===_0x3d7f39['BnzwJ']){var _0x100a1b=_0xa61b3e[_0x532aea(0x33b)+'eElem'+'ent'](_0x532aea(0x4a5));_0x100a1b['id']=_0x532aea(0xe1)+'a-sw-'+'hud-c'+'ss',_0x100a1b[_0x532aea(0x514)+'onten'+'t']='#saku'+_0x532aea(0x49c)+_0x532aea(0x92)+_0x532aea(0x3f5)+'nitia'+'l}',(_0xb4e7ab[_0x532aea(0x28b)]||_0xdc6ebb[_0x532aea(0x5b3)+_0x532aea(0x5cb)+'ement'])['appen'+'dChil'+'d'](_0x100a1b);}else{var _0x2b39a8=0xdc+-0x1085*0x2+0x202e;_0x14fbda(_0x3d7f39[_0x532aea(0x2c9)](_0x3bba07)),function _0xabbb0a(){var _0x1a1401=_0x532aea;if(_0x3d7f39['uzWIc']!=='RpiSX')_0x5e2df7[_0x1a1401(0x647)+'ngs'][_0x1a1401(0x17a)](_0x170f2f['dAlKQ']+('repla'+_0x1a1401(0x5c7)+'y\x20a\x20d'+_0x1a1401(0x4bd)+_0x1a1401(0x54c)+'nstan'+_0x1a1401(0xdb)+'o\x20we\x20'+'are\x20a'+_0x1a1401(0x376)+'\x20the\x20'+_0x1a1401(0x26f)+'\x20obje'+'ct\x20fo'+'r\x20')+(_0x1a1401(0x430)+'ame\x20w'+_0x1a1401(0x395)+_0x1a1401(0x402)+_0x1a1401(0x4af)+'lding'+_0x1a1401(0x45f)+_0x1a1401(0x511)+'haned'+'.\x20Dis'+_0x1a1401(0x5ef)+'every'+_0x1a1401(0x1ac)+'r\x20')+('Sakur'+_0x1a1401(0x56d)+'K\x20scr'+_0x1a1401(0x480)+_0x1a1401(0x2de)+_0x1a1401(0x5e2)+'nkey\x20'+_0x1a1401(0x38a)+'ard-r'+_0x1a1401(0x639)+'.'));else{if(!_0x1ee046[_0x1a1401(0x63e)+'h'])try{_0x555d5e();}catch(_0x54c501){}_0x2b39a8++,_0x3d7f39['IGtVC'](_0x14fbda,_0x3bba07());if(!_0x1ee046[_0x1a1401(0x63e)+'h']&&_0x2b39a8<0x2590+-0xef7*0x1+0x5*-0x449)_0x3d7f39['YGXTw'](setTimeout,_0xabbb0a,0x1b*-0x170+-0xd54+0xc*0x4ff);else{if(!Object[_0x1a1401(0x421)](_0x28a34d)['lengt'+'h']&&_0x2b39a8<-0x1c1e+-0x1df*-0x5+0x13ef)setTimeout(_0xabbb0a,0x2*-0x9a9+0x1cec+0xe5*-0x2);else _0x3d7f39[_0x1a1401(0x3a1)](setTimeout,_0xabbb0a,-0x2441*0x1+0xd*-0x111+0x36ce);}}}();}}if(document[_0x1c650b(0x482)])_0x3d7f39[_0x1c650b(0x314)](_0x5f596b);else document[_0x1c650b(0xfc)+'entLi'+'stene'+'r'](_0x3d7f39[_0x1c650b(0x1ab)],_0x5f596b,{'once':!![]});if(document[_0x1c650b(0x482)])try{_0x507034();}catch(_0x3e9c57){}else document[_0x1c650b(0xfc)+'entLi'+_0x1c650b(0x127)+'r']('DOMCo'+'ntent'+_0x1c650b(0x5a8)+'d',function(){try{_0x507034();}catch(_0x532790){}},{'once':!![]});})()));
