// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.1.0
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

(function(_0xf00df7,_0x303d87){var _0xbd8e28=_0x59dc,_0x58bd62=_0xf00df7();while(!![]){try{var _0x5d2938=-parseInt(_0xbd8e28(0x562))/(0x1857*-0x1+0x9cc+0xe8c)+-parseInt(_0xbd8e28(0x3fe))/(0x4*0x229+-0x1398+0xaf6)+-parseInt(_0xbd8e28(0x568))/(-0x4d*0x4f+0x1f39*-0x1+-0x3*-0x1255)+parseInt(_0xbd8e28(0x259))/(0xcb+-0xc15+0x2*0x5a7)+parseInt(_0xbd8e28(0x526))/(0x3b3*0x9+0x7*-0x295+-0xf33)*(-parseInt(_0xbd8e28(0x647))/(-0x2*-0x5ff+0x2224+-0x170e*0x2))+parseInt(_0xbd8e28(0x645))/(-0xa63*-0x2+0xc*0x31d+0x7*-0x84d)*(parseInt(_0xbd8e28(0x411))/(-0xd0+-0x9b2+0x1*0xa8a))+-parseInt(_0xbd8e28(0x583))/(-0x23c8+-0x2f*0x4b+-0xb*-0x482)*(-parseInt(_0xbd8e28(0x430))/(0x26b8+-0x192*-0x16+-0x7*0xa76));if(_0x5d2938===_0x303d87)break;else _0x58bd62['push'](_0x58bd62['shift']());}catch(_0x2570f5){_0x58bd62['push'](_0x58bd62['shift']());}}}(_0x4c90,-0x807d2+0xa7b39+-0xef*-0x329),((()=>{'use strict';var _0x2bf26f=_0x59dc,_0x5b6eaa={'VCFdw':function(_0x527fb8,_0x48fae1){return _0x527fb8!==_0x48fae1;},'qwoRo':function(_0x50fa59,_0x3812d6){return _0x50fa59+_0x3812d6;},'bBDDX':function(_0x47c887,_0x253b89){return _0x47c887(_0x253b89);},'Dpihf':_0x2bf26f(0x3c1),'OHKOO':_0x2bf26f(0x3db),'wdyMS':'sakur'+_0x2bf26f(0x1dc),'hGtrx':function(_0x3895de,_0x27ee74,_0x546061){return _0x3895de(_0x27ee74,_0x546061);},'XWceb':function(_0xcf84ee,_0x4f5883){return _0xcf84ee!==_0x4f5883;},'DOLuW':'style','HpWvx':'sakur'+_0x2bf26f(0x5a1)+'v2-cs'+'s','ocHUM':'sakur'+'a-sw-'+'v2','ugHMN':'aNScf','YBQrg':function(_0xdf3bf6){return _0xdf3bf6();},'Ysxrq':_0x2bf26f(0x594)+_0x2bf26f(0x539)+_0x2bf26f(0x38c)+'l\x20dis'+_0x2bf26f(0x4bd),'nRKxj':'color'+':','hPRqx':_0x2bf26f(0x3ba),'oCJBx':_0x2bf26f(0x2bc)+'le','iLFcj':function(_0x58037f,_0x181647){return _0x58037f===_0x181647;},'oIzss':_0x2bf26f(0x4b7),'ZWbGJ':function(_0x56a86d,_0x4587d3){return _0x56a86d===_0x4587d3;},'vRHiz':_0x2bf26f(0x2f0)+'74','gCCYR':function(_0x3db575,_0x1bc7e8){return _0x3db575===_0x1bc7e8;},'QtGVr':_0x2bf26f(0x5e4),'EamjS':_0x2bf26f(0x263)+'·\x20','TdPQS':'\x20obje'+'cts\x20·'+'\x20','Bubmv':_0x2bf26f(0x338)+'a8','AFCMe':function(_0x3860c5,_0x201716){return _0x3860c5+_0x201716;},'AKdHh':function(_0x363548,_0x24706a){return _0x363548+_0x24706a;},'gKrta':_0x2bf26f(0x50e)+'8a','jgHIE':function(_0x17757f,_0x21983c){return _0x17757f+_0x21983c;},'syRMR':'armed'+_0x2bf26f(0x4db),'BJOAE':_0x2bf26f(0x5d4)+'g\x20·\x20','sJkhC':'Diff\x20'+_0x2bf26f(0x24b)+_0x2bf26f(0x653)+_0x2bf26f(0x556),'WEMix':'F9\x20tw'+'ice\x20w'+_0x2bf26f(0x565)+_0x2bf26f(0x36a)+_0x2bf26f(0x253)+_0x2bf26f(0x2ab)+_0x2bf26f(0x2bf)+_0x2bf26f(0x507)+_0x2bf26f(0x3b1)+'marks'+_0x2bf26f(0x52c)+_0x2bf26f(0x2d4)+_0x2bf26f(0x5cf)+'\x20whic'+'h.','qgINz':'Speed'+'\x20ON','zdRDe':_0x2bf26f(0x3b8)+'1b','LplsQ':function(_0x4448fd,_0xe717b3){return _0x4448fd===_0xe717b3;},'bNXpE':function(_0x48b3cc,_0x1024e0){return _0x48b3cc(_0x1024e0);},'frPVi':function(_0xcb5319,_0x11b0f5){return _0xcb5319+_0x11b0f5;},'WiSMO':';font'+'-weig'+_0x2bf26f(0x571)+'0','IgWKd':function(_0xf74296,_0x9e1760){return _0xf74296+_0x9e1760;},'fRXBs':'McwtZ','sdYDZ':'Wldxh','fBqay':_0x2bf26f(0x36c)+_0x2bf26f(0x634)+'rmonk'+_0x2bf26f(0x2dc)+_0x2bf26f(0x3c3)+'injec'+_0x2bf26f(0x2bf)+'into\x20'+'the\x20c'+'ross-'+_0x2bf26f(0x470)+_0x2bf26f(0x658)+_0x2bf26f(0x628),'raHml':_0x2bf26f(0x461)+'Both\x20'+_0x2bf26f(0x4f0)+'a.ski'+_0x2bf26f(0x39a)+_0x2bf26f(0x2a0)+'r.js\x20'+_0x2bf26f(0x584)+_0x2bf26f(0x576)+_0x2bf26f(0x392)+'g\x20scr'+_0x2bf26f(0x378)+_0x2bf26f(0x472),'jAAsT':function(_0x82ae60,_0x9a22e9){return _0x82ae60+_0x9a22e9;},'HiRzj':'backg'+_0x2bf26f(0x3cc)+_0x2bf26f(0x51a)+'c1d;c'+'olor:'+_0x2bf26f(0x573)+_0x2bf26f(0x490)+'rder:'+_0x2bf26f(0x308)+_0x2bf26f(0x515)+_0x2bf26f(0x538)+_0x2bf26f(0x577)+_0x2bf26f(0x49b)+_0x2bf26f(0x315)+_0x2bf26f(0x44b)+_0x2bf26f(0x60d)+_0x2bf26f(0x529)+_0x2bf26f(0x40b),'gseRr':function(_0x148be2,_0x2e747b){return _0x148be2+_0x2e747b;},'HPBZf':function(_0x4bd3ae,_0x1d9d36){return _0x4bd3ae+_0x1d9d36;},'wGJOm':function(_0x1b931f,_0x597713){return _0x1b931f+_0x597713;},'PbaeQ':_0x2bf26f(0x57e)+_0x2bf26f(0x63e)+'\x20skil'+_0x2bf26f(0x2f9)+'</b>','waeRj':'<span'+'\x20id=\x22'+'sw2-s'+_0x2bf26f(0x542)+_0x2bf26f(0x471)+'le=\x22c'+_0x2bf26f(0x32f)+'#bda9'+_0x2bf26f(0x329)+_0x2bf26f(0x552)+_0x2bf26f(0x366)+'\x20game'+'\x20fram'+'e…</s'+_0x2bf26f(0x3c2),'znCBJ':'<butt'+_0x2bf26f(0x317)+'=\x22sw2'+_0x2bf26f(0x271)+_0x2bf26f(0x471)+_0x2bf26f(0x448)+_0x2bf26f(0x20f)+_0x2bf26f(0x558)+_0x2bf26f(0x1e0)+_0x2bf26f(0x5e9)+'eft:a'+'uto;b'+_0x2bf26f(0x5f8)+_0x2bf26f(0x4e2),'eKLwM':'<inpu'+_0x2bf26f(0x56e)+_0x2bf26f(0x413)+'facto'+'r\x22\x20ty'+'pe=\x22r'+'ange\x22'+_0x2bf26f(0x277)+_0x2bf26f(0x482)+_0x2bf26f(0x25b)+_0x2bf26f(0x2cb)+_0x2bf26f(0x1fb)+'1\x22\x20va'+_0x2bf26f(0x31e)+'1\x22\x20st'+'yle=\x22'+'width'+_0x2bf26f(0x1ee)+_0x2bf26f(0x367)+_0x2bf26f(0x61b)+'olor:','wzuSh':_0x2bf26f(0x379),'xnnVw':'<span'+'\x20id=\x22'+_0x2bf26f(0x3dc)+'int\x22\x20'+'style'+'=\x22col'+'or:#8'+_0x2bf26f(0x5de)+_0x2bf26f(0x421)+'twice'+_0x2bf26f(0x563)+_0x2bf26f(0x5ef)+'king\x20'+'/\x20spr'+_0x2bf26f(0x290)+_0x2bf26f(0x613)+_0x2bf26f(0x3eb)+_0x2bf26f(0x331)+_0x2bf26f(0x2db)+_0x2bf26f(0x39b)+'ield\x20'+_0x2bf26f(0x5c4)+'ich.<'+'/span'+'>','LfkWv':_0x2bf26f(0x35a)+'>','VemOG':'max-h'+_0x2bf26f(0x467)+':62vh'+_0x2bf26f(0x346)+'\x20repo'+'rt\x20ye'+'t.\x0a\x0aT'+'his\x20p'+_0x2bf26f(0x1f4)+_0x2bf26f(0x485)+_0x2bf26f(0x449)+'self\x20'+_0x2bf26f(0x5d9)+_0x2bf26f(0x3e0)+_0x2bf26f(0x2f2)+_0x2bf26f(0x394)+'loads'+_0x2bf26f(0x2de)+'\x20cons'+_0x2bf26f(0x504)+_0x2bf26f(0x3f3)+_0x2bf26f(0x5d6)+_0x2bf26f(0x3e5)+_0x2bf26f(0x2aa)+'empty'+',\x20Tam'+_0x2bf26f(0x64a)+_0x2bf26f(0x2c6)+_0x2bf26f(0x5c6)+'t\x20inj'+_0x2bf26f(0x296)+_0x2bf26f(0x386)+_0x2bf26f(0x1e8)+_0x2bf26f(0x3a0)+'s-ori'+_0x2bf26f(0x370)+_0x2bf26f(0x2f2)+'rame.'+'</pre'+'>','aWblA':_0x2bf26f(0x473)+_0x2bf26f(0x3ba),'aGJzc':'#sw2-'+_0x2bf26f(0x49f)+'r','qXIwL':_0x2bf26f(0x473)+'hint','vqsSX':function(_0x291719,_0x2feca8){return _0x291719+_0x2feca8;},'XzCvo':function(_0x326d7e,_0x50b6fa){return _0x326d7e+_0x50b6fa;},'dfgzH':'\x20\x20(','MBAZN':function(_0x4d4d47,_0x30048c){return _0x4d4d47/_0x30048c;},'Ettcq':'yes','uknFc':function(_0x560727,_0x27724c){return _0x560727+_0x27724c;},'WzjAe':'hooks'+_0x2bf26f(0x502),'AwDli':function(_0x4e3538,_0x5de860){return _0x4e3538+_0x5de860;},'nRPUW':function(_0x4ae94c,_0x493232){return _0x4ae94c+_0x493232;},'blQZe':function(_0x1b3b9b,_0x5b9226){return _0x1b3b9b<_0x5b9226;},'OiOdS':function(_0x1c53fb,_0x29b7e7){return _0x1c53fb+_0x29b7e7;},'OOZmX':function(_0x127f19,_0x57edde){return _0x127f19+_0x57edde;},'MMItC':_0x2bf26f(0x53d),'ihzyl':'warni'+'ngs','QsSBz':function(_0x14ade1,_0x5a5d00){return _0x14ade1(_0x5a5d00);},'muxZs':'No\x20re'+_0x2bf26f(0x31a)+_0x2bf26f(0x245)+'\x20so\x20e'+_0x2bf26f(0x3a8)+'offse'+_0x2bf26f(0x2f8)+'\x20skip'+_0x2bf26f(0x5e8)+_0x2bf26f(0x222)+'e.','jnMxq':function(_0x3a8e49,_0xfdafc2){return _0x3a8e49!==_0xfdafc2;},'lnnbE':_0x2bf26f(0x43d),'NOkuT':function(_0x542035,_0xde59bc){return _0x542035!==_0xde59bc;},'RncQN':_0x2bf26f(0x59e),'EyDDJ':function(_0x25c337,_0x3ca049){return _0x25c337!==_0x3ca049;},'PsCKc':'oQbqc','iwVoz':function(_0x4d84c0,_0x281903){return _0x4d84c0!==_0x281903;},'QDfVP':function(_0x426b1e,_0x1581c0){return _0x426b1e===_0x1581c0;},'Tkjps':function(_0x1a5320,_0x4f738b){return _0x1a5320+_0x4f738b;},'iyRai':'yVDol','FIkfy':_0x2bf26f(0x62c),'pOWiI':'error','aLTBP':'debug','KXKTq':function(_0x54a919,_0x527973){return _0x54a919===_0x527973;},'xxsMY':function(_0x255abf,_0x3db69d){return _0x255abf>_0x3db69d;},'NmhJQ':_0x2bf26f(0x305),'yMdFK':function(_0x346799,_0x229884){return _0x346799-_0x229884;},'seQUp':function(_0x529513,_0x1059be){return _0x529513(_0x1059be);},'WAbVE':function(_0x33f558,_0x6aed2){return _0x33f558===_0x6aed2;},'zFImo':function(_0x51bfd3,_0x58295e){return _0x51bfd3!==_0x58295e;},'MjbyN':function(_0x684eca,_0x1dee5c){return _0x684eca<_0x1dee5c;},'BBoyx':'Unity'+'WebMo'+_0x2bf26f(0x525),'CmKob':_0x2bf26f(0x630),'cUOiF':function(_0x52ef07,_0x322996){return _0x52ef07!==_0x322996;},'KIoMh':'QGBhf','ePzes':function(_0x5eb221){return _0x5eb221();},'Uaxiu':_0x2bf26f(0x4de),'KDQuV':function(_0x320a10,_0x1621f6){return _0x320a10(_0x1621f6);},'wKoGn':_0x2bf26f(0x543),'CkGmm':function(_0x225aba,_0x2e85d7){return _0x225aba^_0x2e85d7;},'nCSJH':function(_0x97a3e0,_0x44bab8){return _0x97a3e0!==_0x44bab8;},'rSAFP':'SqcQl','PNlSL':_0x2bf26f(0x4f5),'JUzEV':function(_0x4753b1,_0x5269f3){return _0x4753b1===_0x5269f3;},'nyqWT':'funct'+'ion','EOWHD':_0x2bf26f(0x1f7)+_0x2bf26f(0x586)+_0x2bf26f(0x516)+_0x2bf26f(0x570)+'e','dRJXt':function(_0x384dee,_0x4eb452){return _0x384dee!==_0x4eb452;},'hRTpq':'tNfPY','EqFtH':_0x2bf26f(0x4a1),'rKETk':function(_0x41a345,_0x2dd26b){return _0x41a345!==_0x2dd26b;},'lOtrV':'undef'+_0x2bf26f(0x3ed),'edOdC':'bare\x20'+_0x2bf26f(0x49d)+_0x2bf26f(0x22c)+'ng','VwBgi':_0x2bf26f(0x4e3)+'t','NFsEU':function(_0x37b90c,_0xa1c8d0){return _0x37b90c+_0xa1c8d0;},'bVXnL':_0x2bf26f(0x4f8)+'w.','ULDah':_0x2bf26f(0x59d)+'ra-sw'+'-v2{a'+_0x2bf26f(0x37f)+_0x2bf26f(0x4d9)+'}','wjxww':'Eithe'+_0x2bf26f(0x53c)+_0x2bf26f(0x30e)+_0x2bf26f(0x4ba)+'n\x20a\x20r'+_0x2bf26f(0x2a1)+'\x20or\x20t'+_0x2bf26f(0x3cb)+'ok\x20is'+'\x20on\x20t'+_0x2bf26f(0x62d)+'ong\x20o'+'verlo'+_0x2bf26f(0x23a),'WYygn':'gnckK','WGRUe':'ZXocJ','prAZa':function(_0x21b9f7){return _0x21b9f7();},'QeeOo':_0x2bf26f(0x60f)+'hot','xyIXx':function(_0xaec454,_0x40b521){return _0xaec454(_0x40b521);},'csYJM':_0x2bf26f(0x60b),'XIUCF':'veOnH','tcKlt':'no\x20HE'+_0x2bf26f(0x343)+'-\x20Uni'+_0x2bf26f(0x648)+_0x2bf26f(0x299)+_0x2bf26f(0x42b)+_0x2bf26f(0x23b)+_0x2bf26f(0x3ab)+'\x20via\x20'+'Runti'+'me.re'+_0x2bf26f(0x4bb)+_0x2bf26f(0x324)+_0x2bf26f(0x46d)+_0x2bf26f(0x20c)+'indow'+'\x20glob'+'al','sxsmg':function(_0x4fc07a,_0x5bc8ea){return _0x4fc07a>_0x5bc8ea;},'uvRfS':function(_0x5479fa,_0x2b5d63){return _0x5479fa+_0x2b5d63;},'tcJlm':_0x2bf26f(0x44c)+_0x2bf26f(0x34c),'BWLfQ':'\x20past'+'\x20heap'+_0x2bf26f(0x333)+'0x','iUjPd':_0x2bf26f(0x2eb),'yRfal':_0x2bf26f(0x61f),'gnQpc':_0x2bf26f(0x557),'EVeZi':'f64','GufmM':'vPTkJ','GOlPC':function(_0x204e61){return _0x204e61();},'ZMWNB':function(_0x4a8437,_0x189032){return _0x4a8437<_0x189032;},'KMeDj':'i16','AtMPZ':function(_0x50c563,_0x24420a){return _0x50c563|_0x24420a;},'XwsMJ':'u32','vmvsf':function(_0x756b2e,_0x383138){return _0x756b2e===_0x383138;},'VJEGm':_0x2bf26f(0x646),'PtRWb':function(_0xb29161,_0x2b3c5){return _0xb29161<_0x2b3c5;},'pKMFw':function(_0x316be0,_0x46573a){return _0x316be0+_0x46573a;},'IyBnz':'\x20A\x20ho'+'ok\x20fi'+'red\x20a'+'t\x20','DINsu':'ms\x20wi'+_0x2bf26f(0x3aa)+_0x2bf26f(0x607)+'lFunc'+'=','YusQf':function(_0x3577eb,_0x10dcfc){return _0x3577eb+_0x10dcfc;},'IHxGh':function(_0x52b7e0,_0x1a593d){return _0x52b7e0+_0x1a593d;},'wkhVu':function(_0x4aa8cf,_0x33d9fe){return _0x4aa8cf>_0x33d9fe;},'NxyVM':function(_0x29aac5,_0x136411){return _0x29aac5+_0x136411;},'mhPeu':_0x2bf26f(0x4e5),'CUdbP':function(_0x4132a0,_0x3f4bb6){return _0x4132a0<_0x3f4bb6;},'bdhgL':function(_0x4977dc,_0x4138b2){return _0x4977dc(_0x4138b2);},'hixao':function(_0x15f686,_0x5a7c28){return _0x15f686!==_0x5a7c28;},'MVWOh':_0x2bf26f(0x4a5),'LgnmK':function(_0x22b6bc,_0x4f72f4){return _0x22b6bc&_0x4f72f4;},'MuyAN':function(_0x557396,_0x1c891e){return _0x557396&_0x1c891e;},'ucAnl':_0x2bf26f(0x334),'AJqRO':function(_0x24fb4d,_0xea9db2){return _0x24fb4d(_0xea9db2);},'wUXjD':_0x2bf26f(0x21e),'zqGBR':function(_0x86f189,_0x3ca6b0){return _0x86f189&_0x3ca6b0;},'Yends':function(_0x269804,_0x5aa5bd){return _0x269804+_0x5aa5bd;},'qQZOq':function(_0x521236,_0x2d75a7){return _0x521236+_0x2d75a7;},'FqhBX':_0x2bf26f(0x5bb),'wdZhO':function(_0x1ae0be,_0x584f05){return _0x1ae0be+_0x584f05;},'mTFpH':function(_0x4d4570,_0x29100a,_0x273102){return _0x4d4570(_0x29100a,_0x273102);},'FSkuD':function(_0x706c7b,_0x3dbb7b){return _0x706c7b===_0x3dbb7b;},'bvpGF':_0x2bf26f(0x47d),'GXUOH':function(_0x421619,_0x1dd43f){return _0x421619+_0x1dd43f;},'ivWAj':function(_0x5485ac,_0x1753b3){return _0x5485ac||_0x1753b3;},'xBMgO':function(_0xa3fdb6,_0x20f6cd){return _0xa3fdb6(_0x20f6cd);},'UDkpO':'3|6|0'+_0x2bf26f(0x622)+_0x2bf26f(0x492),'lmAlP':function(_0x42477c,_0x243994){return _0x42477c|_0x243994;},'SXBPc':function(_0x35493f,_0x52d02c){return _0x35493f===_0x52d02c;},'CJVOT':function(_0x1db574,_0x21d398){return _0x1db574|_0x21d398;},'keSuU':function(_0x3e4d37,_0x34ce07,_0x4ece2f,_0x1cc9ff){return _0x3e4d37(_0x34ce07,_0x4ece2f,_0x1cc9ff);},'jBhiF':function(_0x19b057,_0x20faab){return _0x19b057!==_0x20faab;},'XCWNc':function(_0x429541,_0x3ef9b1){return _0x429541!==_0x3ef9b1;},'SAdGe':function(_0x454cf7,_0x287be1){return _0x454cf7>_0x287be1;},'ZtzAD':_0x2bf26f(0x456),'YBocm':_0x2bf26f(0x303),'SNGSS':function(_0x1c06a3,_0x3e1b59,_0x2677c8){return _0x1c06a3(_0x3e1b59,_0x2677c8);},'WeGzb':function(_0x14e45c,_0x300878){return _0x14e45c(_0x300878);},'gPSbc':'hhEuc','iAhMQ':'UOFTy','yLGHa':function(_0x146a4b,_0x496d47){return _0x146a4b===_0x496d47;},'hsIEn':_0x2bf26f(0x212),'KUMwB':function(_0x3dfda0,_0x40e610,_0x1ffac5){return _0x3dfda0(_0x40e610,_0x1ffac5);},'oTaEa':function(_0x475c57,_0x544250){return _0x475c57===_0x544250;},'kqUWB':function(_0x4d9e8f,_0x4501e8){return _0x4d9e8f!==_0x4501e8;},'cRpyl':_0x2bf26f(0x466),'mHUoy':_0x2bf26f(0x3fb),'hIVZv':function(_0x5af0eb,_0x48c21d,_0x42b231,_0xf50808){return _0x5af0eb(_0x48c21d,_0x42b231,_0xf50808);},'xOHZh':function(_0x45b4c2,_0x17a91e,_0x491a19){return _0x45b4c2(_0x17a91e,_0x491a19);},'qnENl':'obf','igmgH':_0x2bf26f(0x569)+'VE','vzBTa':_0x2bf26f(0x3d1),'mQTnJ':'\x20hex=','hfKLs':function(_0x266575,_0x3738ac){return _0x266575(_0x3738ac);},'bNkYc':'RESbV','qeuJZ':function(_0x274726,_0x5922d2){return _0x274726(_0x5922d2);},'sKjeo':_0x2bf26f(0x29b),'dyNbu':_0x2bf26f(0x50a)+'r','fwnkv':function(_0x49b24d,_0x44e86d){return _0x49b24d<=_0x44e86d;},'qVJwd':function(_0x28e70b,_0x32ef96){return _0x28e70b&&_0x32ef96;},'tkGak':function(_0x35fa2b,_0x19b873){return _0x35fa2b===_0x19b873;},'rgnCo':_0x2bf26f(0x5d3),'ABtxH':_0x2bf26f(0x650)+_0x2bf26f(0x3b6)+_0x2bf26f(0x4e0),'JIlrh':'unity'+_0x2bf26f(0x335),'ykbjN':_0x2bf26f(0x650)+_0x2bf26f(0x3b6)+'nceWr'+_0x2bf26f(0x2c8),'nfvAN':function(_0x593bc1,_0x455a0c){return _0x593bc1<_0x455a0c;},'zzgNY':function(_0x3c02d2,_0x2cdf9a){return _0x3c02d2!==_0x2cdf9a;},'QORrH':'OSglW','hwTph':function(_0x468ec2,_0x3a6c28){return _0x468ec2!==_0x3a6c28;},'NKbns':_0x2bf26f(0x5bc),'LMFSd':function(_0x335505,_0x167184){return _0x335505+_0x167184;},'bNtZl':_0x2bf26f(0x26c),'Oknqp':_0x2bf26f(0x5f7)+'an','Duhls':function(_0x6f82d6,_0x5ee6a1){return _0x6f82d6!==_0x5ee6a1;},'NSerL':_0x2bf26f(0x508),'khQYO':function(_0x505e3d,_0x8f393){return _0x505e3d!==_0x8f393;},'pKjsK':function(_0x1db50d,_0x3a0a80,_0x37d04c){return _0x1db50d(_0x3a0a80,_0x37d04c);},'qoacj':_0x2bf26f(0x627),'odapc':function(_0xfd16f8,_0x3a8c5c){return _0xfd16f8+_0x3a8c5c;},'EUCWP':'\x20->\x20','DHJwZ':_0x2bf26f(0x631)+'t','XVqKC':function(_0x2adcb0,_0x55af9b){return _0x2adcb0===_0x55af9b;},'fgIEK':'Runti'+'me.re'+_0x2bf26f(0x4bb)+_0x2bf26f(0x324)+')','BRRmj':function(_0x1cd764,_0x5eef96){return _0x1cd764===_0x5eef96;},'oxjLs':function(_0x25abff,_0x200f3d){return _0x25abff(_0x200f3d);},'GfaLe':'%c[sa'+_0x2bf26f(0x539)+_0x2bf26f(0x521)+'lWarz'+_0x2bf26f(0x39c)+'rt','nGPlv':function(_0xfda7f1,_0x5fb60e){return _0xfda7f1+_0x5fb60e;},'IsSZc':'copy','Shtkl':function(_0xef6e70,_0x9b8288){return _0xef6e70+_0x9b8288;},'ZlDMZ':_0x2bf26f(0x4cb),'kPUUf':_0x2bf26f(0x319),'nUewr':function(_0x2b02d1){return _0x2b02d1();},'VqISR':function(_0x3750c4,_0x3a4ae8){return _0x3750c4===_0x3a4ae8;},'EUBUl':function(_0xa4b381,_0x36de88){return _0xa4b381+_0x36de88;},'rmlHK':'\x20obje'+'ct(s)'+'\x20but\x20'+'read\x20'+_0x2bf26f(0x3d0)+_0x2bf26f(0x58d),'pfJUw':function(_0x3c945d,_0x175f02){return _0x3c945d+_0x175f02;},'pCPKn':_0x2bf26f(0x445)+_0x2bf26f(0x59a)+_0x2bf26f(0x23e)+'PY\x20TO'+_0x2bf26f(0x3dd)+'ER\x20wi'+_0x2bf26f(0x533)+'Unity'+_0x2bf26f(0x429)+_0x2bf26f(0x495)+_0x2bf26f(0x239)+_0x2bf26f(0x30b)+'me\x20we'+'\x20arme'+_0x2bf26f(0x5fe)+'\x20','mEPpj':_0x2bf26f(0x532)+'a/UWM'+'K\x20scr'+_0x2bf26f(0x491)+'n\x20Tam'+_0x2bf26f(0x64a)+'nkey\x20'+_0x2bf26f(0x642)+'ard-r'+'eload'+'.','DmKbV':_0x2bf26f(0x489),'ZkTJs':function(_0x140508,_0x298cba){return _0x140508!==_0x298cba;},'wysam':_0x2bf26f(0x223),'YllPB':function(_0x13f66c,_0x452579){return _0x13f66c+_0x452579;},'eGDuS':function(_0x4e6632,_0x418acb){return _0x4e6632+_0x418acb;},'AhHhP':function(_0x39df45,_0xb2120a){return _0x39df45+_0xb2120a;},'gUoFB':'Unity'+'\x20inst'+'ance\x20'+_0x2bf26f(0x22a)+_0x2bf26f(0x2a9)+_0x2bf26f(0x4fa)+_0x2bf26f(0x5b7)+'urce:'+'\x20','hcUea':_0x2bf26f(0x4c8)+'reads'+_0x2bf26f(0x5b4)+'\x20bloc'+_0x2bf26f(0x58e)+_0x2bf26f(0x55a)+'a\x20gam'+'e\x20obj'+_0x2bf26f(0x1e7)+_0x2bf26f(0x31f)+'odule'+_0x2bf26f(0x48d)+_0x2bf26f(0x362)+_0x2bf26f(0x23b)+_0x2bf26f(0x3ab)+'.','ewVEc':function(_0x5a37ee,_0x68360a){return _0x5a37ee===_0x68360a;},'fFhnb':'dBhVF','GebUB':function(_0x3857e1,_0xe4eb09){return _0x3857e1>_0xe4eb09;},'PKVYh':function(_0x8d7eb7,_0x43ec6b){return _0x8d7eb7+_0x43ec6b;},'UZrkx':'0\x20of\x20','qVDKY':_0x2bf26f(0x3ae)+_0x2bf26f(0x2a2)+_0x2bf26f(0x27c)+_0x2bf26f(0x22e)+_0x2bf26f(0x54f)+_0x2bf26f(0x41c)+'re\x20ig'+'nored'+_0x2bf26f(0x4b4)+_0x2bf26f(0x4cc)+_0x2bf26f(0x2c0)+_0x2bf26f(0x61d)+_0x2bf26f(0x2af)+'.\x20','MurEk':'Regis'+'tered'+'\x20','bOTCS':'UWMK\x20'+'resol'+_0x2bf26f(0x5b1),'OdivH':_0x2bf26f(0x201)+'(s)\x20t'+_0x2bf26f(0x38b)+'able\x20'+_0x2bf26f(0x279)+_0x2bf26f(0x48e)+_0x2bf26f(0x339)+_0x2bf26f(0x501)+_0x2bf26f(0x2d9)+_0x2bf26f(0x287)+_0x2bf26f(0x47c)+'re\x20','yloYO':function(_0x53d355,_0x959711){return _0x53d355>_0x959711;},'IONUN':_0x2bf26f(0x37e)+'\x20are\x20'+_0x2bf26f(0x339)+_0x2bf26f(0x2ca)+_0x2bf26f(0x595)+_0x2bf26f(0x548)+'ntrol'+_0x2bf26f(0x5dd)+'as\x20fi'+_0x2bf26f(0x414)+_0x2bf26f(0x5c8),'yHogq':'aUApV','HrmLG':_0x2bf26f(0x401),'EEdwl':function(_0x45dce3,_0x541271){return _0x45dce3+_0x541271;},'LuOgI':function(_0x30f04b,_0x298c8a){return _0x30f04b+_0x298c8a;},'xqwWZ':function(_0x452a55,_0x14f24d){return _0x452a55+_0x14f24d;},'EeRVe':_0x2bf26f(0x3a1),'dDBwH':function(_0x30b773,_0x22febc){return _0x30b773===_0x22febc;},'YqMNB':function(_0x859ebb,_0x560ec4,_0x1a10b2){return _0x859ebb(_0x560ec4,_0x1a10b2);},'xZQRS':function(_0x4515db){return _0x4515db();},'oLNie':_0x2bf26f(0x325)+'er','YEuPR':_0x2bf26f(0x528)+'r','xanuN':_0x2bf26f(0x624)+'b1','iAtiZ':_0x2bf26f(0x5aa)+_0x2bf26f(0x330)+'SKILL'+'WARZ-'+_0x2bf26f(0x3ac)+_0x2bf26f(0x418),'hMjRj':'===SA'+'KURA-'+'SKILL'+_0x2bf26f(0x48b)+_0x2bf26f(0x453)+'=','hgdmO':function(_0x2aa658,_0x179d72){return _0x2aa658!==_0x179d72;},'GUqoG':'ZvJkE','FtIRB':'messa'+'ge','xrKNV':_0x2bf26f(0x594)+_0x2bf26f(0x539)+_0x2bf26f(0x374)+'AL\x20AC'+'TIVE','iWJhn':'Weapo'+_0x2bf26f(0x2c4)+_0x2bf26f(0x26f),'IkFwF':_0x2bf26f(0x2b2)+_0x2bf26f(0x33a),'BDcFB':'keydo'+'wn','hcVxy':function(_0x29c5f1){return _0x29c5f1();}};var _0x20d729=location['hostn'+_0x2bf26f(0x3bf)]||'',_0x44d7a3=/(^|\.)www\.crazygames\.com$/[_0x2bf26f(0x1f5)](_0x20d729),_0xee28d8=/(^|\.)games\.crazygames\.com$/['test'](_0x20d729),_0x5d2d12=/(^|\.)crazygames\.com$/['test'](_0x20d729)&&!_0x44d7a3&&!_0xee28d8,_0x546f38=_0x44d7a3?'porta'+'l':_0xee28d8?_0x5b6eaa[_0x2bf26f(0x592)]:_0x5b6eaa[_0x2bf26f(0x46b)];if(_0x5b6eaa['qVJwd'](!_0x44d7a3,!_0xee28d8)&&!_0x5d2d12)return;var _0x4a64ed=_0x5b6eaa[_0x2bf26f(0x579)],_0xa116f8='__sak'+_0x2bf26f(0x454)+_0x2bf26f(0x24e),_0xc1b69c=_0x5b6eaa[_0x2bf26f(0x462)],_0x31345c=_0x5b6eaa[_0x2bf26f(0x582)],_0x26b926='2.1.0';if(_0xee28d8){if(_0x5b6eaa['hgdmO'](_0x5b6eaa[_0x2bf26f(0x5af)],_0x2bf26f(0x202))){window[_0x2bf26f(0x4e4)+_0x2bf26f(0x1ff)+'stene'+'r'](_0x5b6eaa[_0x2bf26f(0x4dd)],function(_0x4cf4ff){var _0x444de7=_0x2bf26f,_0x320343=_0x4cf4ff[_0x444de7(0x300)];if(!_0x320343||_0x320343['__sak'+_0x444de7(0x231)]!==_0xa116f8)return;try{if(window['paren'+'t']&&window['paren'+'t']!==window)window[_0x444de7(0x354)+'t']['postM'+_0x444de7(0x460)+'e'](_0x320343,'*');if(window['top']&&_0x5b6eaa[_0x444de7(0x265)](window['top'],window))window[_0x444de7(0x4d0)]['postM'+_0x444de7(0x460)+'e'](_0x320343,'*');}catch(_0x385041){}}),console['log']('%c[sa'+_0x2bf26f(0x539)+_0x2bf26f(0x655)+'RAPPE'+_0x2bf26f(0x224)+_0x2bf26f(0x641)+'relay'+_0x2bf26f(0x497)+')',_0x5b6eaa[_0x2bf26f(0x5a5)]+_0x4a64ed);return;}else _0x2983e3[_0x5b6eaa['qwoRo'](_0xbc7822,_0x2bf26f(0x44d))+_0x5afbf0[_0x55595e]['o'][_0x2bf26f(0x21a)+'ing'](0x4d*0x7b+0x202f+-0x6*0xb85)]=_0x508082[_0x40511e]['v'];}if(_0x44d7a3){console[_0x2bf26f(0x256)](_0x5b6eaa[_0x2bf26f(0x27e)],_0x5b6eaa[_0x2bf26f(0x59b)](_0x2bf26f(0x2fb)+':',_0x4a64ed)+(_0x2bf26f(0x215)+_0x2bf26f(0x2d1)+_0x2bf26f(0x571)+'0'),{'host':_0x20d729});var _0x1d0847={'set':function(){},'command':function(){}};function _0x4b1e8d(_0x25e15e,_0x264a94){var _0x288b22=_0x2bf26f;if(_0x288b22(0x42f)!==_0x288b22(0x42f))return _0x65a0f8[_0x288b22(0x4ff)+'e']=_0x288b22(0x57b)+_0x288b22(0x49d)+'bindi'+'ng',_0x31326c;else{var _0x472078={'__sakura':_0xa116f8,'kind':_0x5b6eaa['Dpihf'],'cmd':_0x25e15e,'arg':_0x264a94};try{if(_0x288b22(0x3db)!==_0x5b6eaa[_0x288b22(0x5a0)])_0x1e0fee['error']=_0x5b6eaa['bBDDX'](_0x115310,_0x3c5196&&_0x3af3e0[_0x288b22(0x26b)+'ge']||_0x2fbe89);else{var _0x3da1ac=new BroadcastChannel(_0x5b6eaa[_0x288b22(0x23f)]);_0x3da1ac['postM'+'essag'+'e'](_0x472078),_0x5b6eaa['hGtrx'](setTimeout,function(){try{_0x3da1ac['close']();}catch(_0x1b4770){}},0xd01*0x3+-0xa27*0x3+-0x794);}}catch(_0x6cee3d){}}}function _0x55b873(){var _0xf0bf0a=_0x2bf26f,_0x494716=document[_0xf0bf0a(0x327)+'ement'+_0xf0bf0a(0x4bc)](_0xf0bf0a(0x4f0)+'a-sw-'+'v2');if(_0x494716)return _0x494716;if(!document['body']||!document[_0xf0bf0a(0x4d3)][_0xf0bf0a(0x544)+'dChil'+'d'])return null;try{if(!document['getEl'+'ement'+_0xf0bf0a(0x4bc)](_0xf0bf0a(0x4f0)+_0xf0bf0a(0x5a1)+'v2-cs'+'s')){var _0x405866=document['creat'+_0xf0bf0a(0x21f)+_0xf0bf0a(0x4c3)](_0x5b6eaa['DOLuW']);_0x405866['id']=_0x5b6eaa['HpWvx'],_0x405866[_0xf0bf0a(0x638)+_0xf0bf0a(0x522)+'t']='#saku'+'ra-sw'+_0xf0bf0a(0x40d)+'ll:in'+_0xf0bf0a(0x4d9)+'}',(document[_0xf0bf0a(0x32c)]||document[_0xf0bf0a(0x50b)+'entEl'+_0xf0bf0a(0x54b)])[_0xf0bf0a(0x544)+'dChil'+'d'](_0x405866);}return _0x494716=document[_0xf0bf0a(0x260)+'eElem'+'ent']('div'),_0x494716['id']=_0x5b6eaa['ocHUM'],document[_0xf0bf0a(0x4d3)][_0xf0bf0a(0x544)+_0xf0bf0a(0x2bd)+'d'](_0x494716),_0x494716;}catch(_0x2fb4b8){if(_0xf0bf0a(0x644)===_0x5b6eaa['ugHMN']){if(_0x26d5e1[_0xf0bf0a(0x4d0)]&&_0x5b6eaa[_0xf0bf0a(0x640)](_0x2ae61d[_0xf0bf0a(0x4d0)],_0x562697))_0xe24b8c[_0xf0bf0a(0x4d0)][_0xf0bf0a(0x3f7)+_0xf0bf0a(0x460)+'e'](_0x1adfa2,'*');}else return null;}}function _0x200574(){var _0x36f54e=_0x2bf26f,_0x70cb08=_0x5b6eaa[_0x36f54e(0x32d)](_0x55b873);if(!_0x70cb08)return _0x1d0847;if(_0x70cb08[_0x36f54e(0x39d)+'et'][_0x36f54e(0x35d)])return _0x70cb08['api'];try{return _0x1f8502(_0x70cb08);}catch(_0x7ad4e2){return _0x70cb08[_0x36f54e(0x39d)+'et'][_0x36f54e(0x35d)]='1',_0x70cb08['api']=_0x1d0847,console[_0x36f54e(0x62c)](_0x5b6eaa[_0x36f54e(0x5b9)],_0x5b6eaa[_0x36f54e(0x5a5)]+_0x4a64ed,_0x7ad4e2),_0x1d0847;}}function _0x1f8502(_0x155ebb){var _0x1b2d80=_0x2bf26f,_0x2c02d0={'REXsZ':_0x1b2d80(0x609),'aBSNK':_0x5b6eaa[_0x1b2d80(0x4a8)],'YpFxo':_0x5b6eaa['qgINz'],'yftpJ':_0x5b6eaa[_0x1b2d80(0x4ec)],'wMels':_0x5b6eaa['sdYDZ'],'UVaGX':function(_0x3adec9){return _0x3adec9();},'KEaCf':function(_0x5e85c8,_0x244adc){return _0x5e85c8+_0x244adc;},'HRMQO':function(_0x5ce21b,_0x24e139){return _0x5ce21b+_0x24e139;},'vUxxW':_0x1b2d80(0x433)+_0x1b2d80(0x384),'hxywi':function(_0x359a2b,_0x40edf6){return _0x359a2b+_0x40edf6;},'iHSax':_0x1b2d80(0x60a)+'ame\x20f'+_0x1b2d80(0x394)+_0x1b2d80(0x51d)+'\x20post'+_0x1b2d80(0x3bc)+_0x1b2d80(0x4ac)+_0x1b2d80(0x3ca)+'ort.\x0a'+'\x0a','CZBJK':_0x5b6eaa['fBqay'],'BCZmS':_0x5b6eaa['raHml'],'kxfPb':function(_0x14d717,_0x5d6d32){return _0x14d717||_0x5d6d32;}};_0x155ebb[_0x1b2d80(0x1f9)]['cssTe'+'xt']=_0x5b6eaa[_0x1b2d80(0x408)](_0x5b6eaa['jAAsT']('posit'+_0x1b2d80(0x349)+_0x1b2d80(0x5a3)+'left:'+'12px;'+_0x1b2d80(0x40a)+_0x1b2d80(0x447)+_0x1b2d80(0x286)+_0x1b2d80(0x29e)+_0x1b2d80(0x410)+_0x1b2d80(0x295)+'dth:m'+'in(52'+'vw,62'+_0x1b2d80(0x1dd)+'max-h'+_0x1b2d80(0x467)+_0x1b2d80(0x214)+';'+_0x5b6eaa[_0x1b2d80(0x60c)],'font:'+'12px/'+'1.5\x20u'+_0x1b2d80(0x3e1)+_0x1b2d80(0x41a)+_0x1b2d80(0x34d)+'solas'+_0x1b2d80(0x348)+'space'+';box-'+'shado'+_0x1b2d80(0x369)+'0px\x205'+'0px\x20-'+'20px\x20'+_0x1b2d80(0x258)),'displ'+_0x1b2d80(0x233)+'ex;fl'+_0x1b2d80(0x593)+'recti'+_0x1b2d80(0x2b1)+_0x1b2d80(0x395)+'overf'+_0x1b2d80(0x2ea)+'idden'+';'),_0x155ebb[_0x1b2d80(0x32b)+'HTML']=_0x5b6eaa[_0x1b2d80(0x55c)](_0x5b6eaa[_0x1b2d80(0x33e)](_0x5b6eaa[_0x1b2d80(0x3d8)](_0x5b6eaa['jgHIE'](_0x5b6eaa['jAAsT'](_0x5b6eaa[_0x1b2d80(0x408)](_0x5b6eaa[_0x1b2d80(0x2c5)](_0x5b6eaa['jgHIE'](_0x1b2d80(0x391)+'style'+_0x1b2d80(0x559)+_0x1b2d80(0x387)+_0x1b2d80(0x4f3)+'2px;b'+_0x1b2d80(0x5d2)+_0x1b2d80(0x4cf)+_0x1b2d80(0x510)+_0x1b2d80(0x25d)+'id\x20rg'+_0x1b2d80(0x21c)+'5,143'+',177,'+_0x1b2d80(0x352)+_0x1b2d80(0x20f)+'y:fle'+_0x1b2d80(0x537)+':8px;'+_0x1b2d80(0x3f1)+'-item'+_0x1b2d80(0x311)+'ter;f'+_0x1b2d80(0x405)+_0x1b2d80(0x5ec)+'to;\x22>'+(_0x1b2d80(0x2fd)+'yle=\x22'+_0x1b2d80(0x2fb)+':')+_0x4a64ed+_0x5b6eaa['PbaeQ'],_0x1b2d80(0x2e3)+_0x1b2d80(0x40c)+_0x1b2d80(0x42d)+_0x1b2d80(0x393)+'\x20styl'+_0x1b2d80(0x3d6)+'lor:#'+_0x1b2d80(0x3e3)+_0x1b2d80(0x4b8)+_0x1b2d80(0x30c)+'e:11p'+'x;pad'+'ding:'+_0x1b2d80(0x309)+_0x1b2d80(0x5e3)+_0x1b2d80(0x505)+_0x1b2d80(0x308)+_0x1b2d80(0x515)+_0x1b2d80(0x538)+'255,1'+'43,17'+'7,.35'+_0x1b2d80(0x3c7)+_0x1b2d80(0x3e7)+_0x1b2d80(0x35e)+':999p'+_0x1b2d80(0x5a2)+_0x1b2d80(0x1eb)+_0x1b2d80(0x4d1))+_0x5b6eaa['waeRj'],_0x5b6eaa[_0x1b2d80(0x40f)])+_0x4a64ed+(_0x1b2d80(0x44b)+_0x1b2d80(0x46a)+'color'+':#2a0'+_0x1b2d80(0x53e)+_0x1b2d80(0x5d2)+'-radi'+_0x1b2d80(0x4ab)+_0x1b2d80(0x4a0)+'ding:'+_0x1b2d80(0x483)+'0px;f'+'ont-w'+_0x1b2d80(0x467)+_0x1b2d80(0x2c7)+_0x1b2d80(0x350)+_0x1b2d80(0x619)+'nter;'+'\x22>Cop'+_0x1b2d80(0x373)+'N</bu'+'tton>'),'<butt'+'on\x20id'+_0x1b2d80(0x200)+_0x1b2d80(0x270)+_0x1b2d80(0x434)+_0x1b2d80(0x365)+_0x1b2d80(0x43a)+_0x1b2d80(0x4b5)+'nspar'+'ent;b'+'order'+':1px\x20'+_0x1b2d80(0x598)+'\x20rgba'+_0x1b2d80(0x2b4)+_0x1b2d80(0x5ce)+'77,.4'+_0x1b2d80(0x5e0)+'or:#f'+'7eef5'+';bord'+_0x1b2d80(0x60d)+_0x1b2d80(0x529)+'7px;p'+_0x1b2d80(0x621)+_0x1b2d80(0x3cd)+'\x208px;'+'curso'+_0x1b2d80(0x619)+_0x1b2d80(0x4f6)+'\x22>x</'+'butto'+'n>')+(_0x1b2d80(0x35a)+'>'),'<div\x20'+'style'+_0x1b2d80(0x559)+'ding:'+'8px\x201'+_0x1b2d80(0x1fc)+_0x1b2d80(0x5d2)+_0x1b2d80(0x4cf)+_0x1b2d80(0x510)+_0x1b2d80(0x25d)+'id\x20rg'+_0x1b2d80(0x21c)+'5,143'+_0x1b2d80(0x34b)+'.18);'+_0x1b2d80(0x2d7)+_0x1b2d80(0x233)+_0x1b2d80(0x291)+'p:8px'+';alig'+'n-ite'+'ms:ce'+_0x1b2d80(0x4f6)+_0x1b2d80(0x5d1)+'0\x200\x20a'+'uto;f'+'lex-w'+_0x1b2d80(0x424)+_0x1b2d80(0x4af)+'>')+('<butt'+_0x1b2d80(0x317)+'=\x22sw2'+_0x1b2d80(0x475)+'d\x22\x20st'+'yle=\x22'+_0x1b2d80(0x651)+'round'+':tran'+_0x1b2d80(0x3b4)+_0x1b2d80(0x267)+'rder:'+_0x1b2d80(0x308)+_0x1b2d80(0x515)+_0x1b2d80(0x538)+_0x1b2d80(0x577)+_0x1b2d80(0x49b)+'7,.4)'+_0x1b2d80(0x1fa)+_0x1b2d80(0x353)+_0x1b2d80(0x25a)+'borde'+'r-rad'+'ius:7'+_0x1b2d80(0x4b2)+'dding'+':4px\x20'+'10px;'+_0x1b2d80(0x350)+_0x1b2d80(0x619)+'nter;'+'\x22>Spe'+_0x1b2d80(0x2ed)+_0x1b2d80(0x476)+'tton>')+_0x5b6eaa['eKLwM']+_0x4a64ed+_0x5b6eaa['wzuSh'],_0x1b2d80(0x2e3)+_0x1b2d80(0x40c)+_0x1b2d80(0x2a8)+'actor'+'label'+_0x1b2d80(0x471)+_0x1b2d80(0x35b)+'olor:'+'#bda9'+_0x1b2d80(0x2e6)+'n-wid'+_0x1b2d80(0x5ac)+'px;\x22>'+_0x1b2d80(0x626)+_0x1b2d80(0x64f)+'>')+(_0x1b2d80(0x3f6)+_0x1b2d80(0x317)+_0x1b2d80(0x200)+_0x1b2d80(0x5dc)+_0x1b2d80(0x471)+_0x1b2d80(0x62b)+'ackgr'+'ound:'+'trans'+_0x1b2d80(0x354)+'t;bor'+'der:1'+_0x1b2d80(0x439)+'lid\x20r'+'gba(2'+'55,14'+_0x1b2d80(0x3f9)+_0x1b2d80(0x377)+_0x1b2d80(0x2fb)+_0x1b2d80(0x54d)+'ef5;b'+_0x1b2d80(0x5d2)+_0x1b2d80(0x2e0)+_0x1b2d80(0x4ab)+_0x1b2d80(0x4a0)+'ding:'+_0x1b2d80(0x3c0)+_0x1b2d80(0x5f4)+_0x1b2d80(0x3f0)+'point'+_0x1b2d80(0x488)+_0x1b2d80(0x4ae)+'hot\x20('+'F9)</'+_0x1b2d80(0x40e)+'n>'),_0x5b6eaa[_0x1b2d80(0x213)])+_0x5b6eaa['LfkWv'],_0x1b2d80(0x3a3)+'id=\x22s'+'w2-ou'+_0x1b2d80(0x266)+'yle=\x22'+'margi'+'n:0;p'+'addin'+'g:10p'+_0x1b2d80(0x210)+'x;ove'+'rflow'+':auto'+_0x1b2d80(0x652)+_0x1b2d80(0x518)+'auto;'+'white'+_0x1b2d80(0x4b6)+'e:pre'+_0x1b2d80(0x3ff)+';word'+_0x1b2d80(0x5d0)+'k:bre'+'ak-wo'+'rd;fo'+_0x1b2d80(0x5ed)+_0x1b2d80(0x629)+';'),_0x5b6eaa[_0x1b2d80(0x20e)]);var _0x35f789=_0x155ebb[_0x1b2d80(0x246)+_0x1b2d80(0x1ea)+'tor'](_0x1b2d80(0x473)+_0x1b2d80(0x1e9)+'s'),_0x4b82ca=_0x155ebb[_0x1b2d80(0x246)+'Selec'+_0x1b2d80(0x376)]('#sw2-'+_0x1b2d80(0x251)),_0x4e8522=_0x155ebb[_0x1b2d80(0x246)+'Selec'+'tor'](_0x1b2d80(0x473)+'out'),_0x12e914=_0x155ebb[_0x1b2d80(0x246)+_0x1b2d80(0x1ea)+_0x1b2d80(0x376)]('#sw2-'+'copy'),_0x833e3=_0x155ebb[_0x1b2d80(0x246)+_0x1b2d80(0x1ea)+_0x1b2d80(0x376)]('#sw2-'+'x'),_0x2b4a30=_0x155ebb['query'+'Selec'+'tor']('#sw2-'+_0x1b2d80(0x237)),_0x5be14c=_0x155ebb[_0x1b2d80(0x246)+_0x1b2d80(0x1ea)+_0x1b2d80(0x376)](_0x5b6eaa[_0x1b2d80(0x43b)]),_0x2c377e=_0x155ebb[_0x1b2d80(0x246)+'Selec'+'tor'](_0x5b6eaa['aGJzc']),_0x13afb9=_0x155ebb['query'+'Selec'+_0x1b2d80(0x376)](_0x1b2d80(0x473)+_0x1b2d80(0x49f)+_0x1b2d80(0x389)+'l'),_0x35447d=_0x155ebb[_0x1b2d80(0x246)+_0x1b2d80(0x1ea)+_0x1b2d80(0x376)](_0x5b6eaa[_0x1b2d80(0x47b)]),_0x37a9a4=null;if(_0x833e3)_0x833e3['oncli'+'ck']=function(){try{_0x155ebb['remov'+'e']();}catch(_0x302565){}};if(_0x2b4a30)_0x2b4a30[_0x1b2d80(0x399)+'ck']=function(){var _0x1777d7=_0x1b2d80;_0x5b6eaa[_0x1777d7(0x275)](_0x4b1e8d,_0x1777d7(0x60f)+'hot');};var _0x396e5a=![];function _0x3b57aa(){var _0x586ff0=_0x1b2d80;_0x4b1e8d(_0x5b6eaa[_0x586ff0(0x612)],{'on':_0x396e5a,'factor':_0x5b6eaa[_0x586ff0(0x275)](parseFloat,_0x2c377e['value'])||0xf9e+0x17b8+-0x1*0x2755});}if(_0x5be14c)_0x5be14c[_0x1b2d80(0x399)+'ck']=function(){var _0x8e0a48=_0x1b2d80;if(_0x2c02d0['REXsZ']===_0x2c02d0[_0x8e0a48(0x2a5)])return _0x35260a['type']===_0x10d9d5;else _0x396e5a=!_0x396e5a,_0x5be14c[_0x8e0a48(0x638)+'onten'+'t']=_0x396e5a?_0x2c02d0[_0x8e0a48(0x28f)]:'Speed'+'\x20off',_0x5be14c[_0x8e0a48(0x1f9)][_0x8e0a48(0x651)+_0x8e0a48(0x3cc)]=_0x396e5a?_0x4a64ed:'trans'+_0x8e0a48(0x354)+'t',_0x5be14c[_0x8e0a48(0x1f9)][_0x8e0a48(0x2fb)]=_0x396e5a?_0x2c02d0[_0x8e0a48(0x45f)]:'#f7ee'+'f5',_0x3b57aa();};if(_0x2c377e)_0x2c377e[_0x1b2d80(0x207)+'ut']=function(){var _0x2d2e33=_0x1b2d80;if(_0x13afb9)_0x13afb9[_0x2d2e33(0x638)+'onten'+'t']=(parseFloat(_0x2c377e['value'])||0x214c*0x1+-0x2362+-0x5*-0x6b)[_0x2d2e33(0x415)+'ed'](0x1*-0x315+0x2260+-0x1f4a)+'x';_0x3b57aa();};if(_0x12e914)_0x12e914[_0x1b2d80(0x399)+'ck']=function(){var _0x1b304f=_0x1b2d80,_0x5d50ca=_0x2c02d0['KEaCf'](_0x2c02d0[_0x1b304f(0x320)](_0xc1b69c,'\x0a')+(_0x37a9a4?JSON[_0x1b304f(0x397)+'gify'](_0x37a9a4,null,0x16d*0x5+0x15d0+-0x1cf0):''),'\x0a')+_0x31345c,_0x27a933=function(){if(_0x12e914)_0x12e914['textC'+'onten'+'t']='Copie'+'d';};if(navigator['clipb'+_0x1b304f(0x561)]&&navigator[_0x1b304f(0x50c)+'oard']['write'+_0x1b304f(0x3e6)])navigator[_0x1b304f(0x50c)+'oard']['write'+'Text'](_0x5d50ca)[_0x1b304f(0x240)](_0x27a933,function(){_0x20d7b0();});else _0x2c02d0[_0x1b304f(0x52e)](_0x20d7b0);function _0x20d7b0(){var _0x182df7=_0x1b304f,_0x81ca34=document[_0x182df7(0x260)+'eElem'+'ent'](_0x182df7(0x274)+'rea');_0x81ca34['value']=_0x5d50ca;if(!document[_0x182df7(0x4d3)])return;document['body'][_0x182df7(0x544)+'dChil'+'d'](_0x81ca34),_0x81ca34[_0x182df7(0x206)+'t']();try{if(_0x2c02d0[_0x182df7(0x572)]!==_0x2c02d0['wMels'])return _0x31f083[_0x182df7(0x4ff)+'e']=_0x5ddab3[_0x182df7(0x4ff)+'e']||_0x182df7(0x41b)+'ntiat'+_0x182df7(0x54c)+'xport'+_0x182df7(0x611)+_0x182df7(0x477),new _0x3c6605(_0x1aa72f[_0x182df7(0x38e)+'r']);else document['execC'+_0x182df7(0x5d8)+'d']('copy'),_0x2c02d0[_0x182df7(0x52e)](_0x27a933);}catch(_0x3a11c1){}_0x81ca34[_0x182df7(0x33d)+'e']();}};setTimeout(function(){var _0x582724=_0x1b2d80,_0x98aef4=_0x2c02d0['vUxxW'][_0x582724(0x292)]('|'),_0x25fcd8=0xd2d+0x18a0+-0x25cd;while(!![]){switch(_0x98aef4[_0x25fcd8++]){case'0':_0x35f789['style']['color']='#ffb3'+'c7';continue;case'1':_0x4e8522['textC'+_0x582724(0x522)+'t']=_0x2c02d0[_0x582724(0x320)](_0x2c02d0[_0x582724(0x3f5)](_0x2c02d0[_0x582724(0x2cd)](_0x2c02d0[_0x582724(0x4f2)],'This\x20'+'panel'+_0x582724(0x284)+'es\x20th'+_0x582724(0x243)+'rscri'+'pt\x20IS'+_0x582724(0x5fa)+_0x582724(0x3fc)+_0x582724(0x58f)+'runni'+'ng\x20on'+'\x20the\x20'+_0x582724(0x375)+_0x582724(0x446)),_0x582724(0x3f2)+_0x582724(0x432)+_0x582724(0x4e8)+_0x582724(0x3d2)+_0x582724(0x3b5)+'\x20are:'+'\x0a\x0a')+_0x2c02d0['CZBJK'],_0x582724(0x493)+'The\x20p'+'age\x20h'+_0x582724(0x440)+'t\x20bee'+_0x582724(0x632)+_0x582724(0x225)+'\x20sinc'+'e\x20ins'+_0x582724(0x55f)+'ng.\x0a')+_0x2c02d0['BCZmS']+(_0x582724(0x3fd)+'insta'+'lled\x20'+_0x582724(0x43e)+'\x20copi'+'es\x20of'+_0x582724(0x437)+_0x582724(0x30d)+'\x20patc'+'h\x20Web'+_0x582724(0x45c)+_0x582724(0x328)+_0x582724(0x3ef)+'tiate'+'.\x0a\x0a')+('Reloa'+_0x582724(0x519)+_0x582724(0x288)+'\x20page'+'\x20once'+_0x582724(0x58f)+_0x582724(0x29c)+_0x582724(0x341)+_0x582724(0x38c)+_0x582724(0x620)+_0x582724(0x21d));continue;case'2':if(_0x37a9a4)return;continue;case'3':_0x35f789['textC'+'onten'+'t']=_0x582724(0x443)+'port\x20'+_0x582724(0x54f)+_0x582724(0x4b0)+'—\x20fra'+'me\x20no'+'t\x20inj'+'ected'+'?';continue;case'4':if(_0x2c02d0[_0x582724(0x53a)](!_0x35f789,!_0x4e8522))return;continue;}break;}},-0x4298*0x1+-0x8*0x70b+0x16550);var _0x1eb4a5={'set':function(_0x2e06b4){var _0x3dc1a1=_0x1b2d80,_0x4875e3={'DkSXQ':_0x5b6eaa['oCJBx']};if(_0x5b6eaa['iLFcj'](_0x5b6eaa[_0x3dc1a1(0x564)],_0x3dc1a1(0x4b7))){_0x37a9a4=_0x2e06b4;if(_0x12e914)_0x12e914[_0x3dc1a1(0x1f9)]['displ'+'ay']='';if(_0x4b82ca){_0x4b82ca[_0x3dc1a1(0x638)+_0x3dc1a1(0x522)+'t']='v'+(_0x2e06b4['versi'+'on']||'?');var _0x1183e6=_0x26b926,_0x1e8107=_0x2e06b4[_0x3dc1a1(0x55e)+'on']||'';_0x4b82ca['style'][_0x3dc1a1(0x2fb)]=_0x5b6eaa['ZWbGJ'](_0x1e8107,_0x1183e6)?_0x4a64ed:_0x5b6eaa[_0x3dc1a1(0x3a5)],_0x4b82ca['style'][_0x3dc1a1(0x597)+_0x3dc1a1(0x52a)+'r']=_0x1e8107===_0x1183e6?_0x3dc1a1(0x538)+_0x3dc1a1(0x577)+'43,17'+'7,.35'+')':_0x3dc1a1(0x2f0)+'74';}var _0x2b0780=_0x2e06b4[_0x3dc1a1(0x41b)+_0x3dc1a1(0x57c)]&&_0x2e06b4[_0x3dc1a1(0x41b)+_0x3dc1a1(0x57c)][_0x3dc1a1(0x548)+'ntrol'+_0x3dc1a1(0x654)],_0xa508cc=Math['round']((_0x2e06b4['elaps'+'edMs']||-0x6a3*-0x5+0x12f0+-0x341f)/(-0x1a79+-0x1*-0x1e3f+0x1*0x22));if(_0x35f789){if(_0x5b6eaa['gCCYR'](_0x5b6eaa[_0x3dc1a1(0x42a)],_0x5b6eaa['QtGVr'])){var _0x5e72b0,_0x277378;if(_0x2b0780&&_0x2e06b4[_0x3dc1a1(0x261)+'y']&&_0x2e06b4['surve'+'y'][_0x3dc1a1(0x548)+_0x3dc1a1(0x60e)+'ler'])_0x5e72b0=_0x5b6eaa[_0x3dc1a1(0x36e)]+Object['keys'](_0x2e06b4['insta'+_0x3dc1a1(0x57c)])['lengt'+'h']+_0x5b6eaa['TdPQS']+_0xa508cc+'s',_0x277378=_0x5b6eaa[_0x3dc1a1(0x242)];else{if(_0x2e06b4[_0x3dc1a1(0x2e7)+_0x3dc1a1(0x464)+'ed']>-0x21ff+-0x1*-0x8d3+-0x2cc*-0x9){if(_0x5b6eaa[_0x3dc1a1(0x640)]('DoriJ','DoriJ'))return _0x586f60['sourc'+'e']=_0x3dc1a1(0x4f8)+'w.'+_0x435611[_0x2faff1]+_0x4875e3[_0x3dc1a1(0x1ec)],_0x1c46e3;else _0x5e72b0=_0x5b6eaa[_0x3dc1a1(0x50f)](_0x5b6eaa[_0x3dc1a1(0x55c)](_0x3dc1a1(0x2e7)+'\x20arme'+_0x3dc1a1(0x1df),_0xa508cc),'s'),_0x277378=_0x5b6eaa['gKrta'];}else _0x2e06b4[_0x3dc1a1(0x5a6)+'tData']?(_0x5e72b0=_0x5b6eaa['AKdHh'](_0x3dc1a1(0x5df)+_0x3dc1a1(0x5a8)+_0x3dc1a1(0x388)+'·\x20'+_0xa508cc,'s'),_0x277378='#ffd4'+'8a'):(_0x5e72b0=_0x5b6eaa[_0x3dc1a1(0x616)](_0x5b6eaa[_0x3dc1a1(0x408)](_0x2e06b4['arm']&&_0x2e06b4[_0x3dc1a1(0x47a)]['ok']?_0x5b6eaa[_0x3dc1a1(0x238)]:_0x5b6eaa['BJOAE'],_0xa508cc),'s'),_0x277378=_0x3dc1a1(0x50e)+'8a');}_0x35f789['textC'+'onten'+'t']=_0x5e72b0,_0x35f789['style'][_0x3dc1a1(0x2fb)]=_0x277378;}else _0x3eedfb=_0x10f685['keys'](_0x1f0914)[_0x3dc1a1(0x3bb)](0x19ec+0xe1b*-0x1+-0x113*0xb,0x731*0x1+-0xc0*-0x1f+-0x1c9*0x11);}_0x35447d&&(_0x35447d[_0x3dc1a1(0x638)+_0x3dc1a1(0x522)+'t']=_0x2e06b4[_0x3dc1a1(0x5cb)]&&_0x2e06b4[_0x3dc1a1(0x5cb)]['lengt'+'h']?_0x5b6eaa['sJkhC']+_0x2e06b4['diff'][_0x3dc1a1(0x3b2)](',\x20'):_0x5b6eaa['WEMix']);if(_0x2e06b4[_0x3dc1a1(0x3ba)]&&_0x5be14c){_0x396e5a=!!_0x2e06b4['speed']['on'],_0x5be14c[_0x3dc1a1(0x638)+_0x3dc1a1(0x522)+'t']=_0x396e5a?_0x5b6eaa['qgINz']:_0x3dc1a1(0x419)+_0x3dc1a1(0x3da),_0x5be14c['style'][_0x3dc1a1(0x651)+_0x3dc1a1(0x3cc)]=_0x396e5a?_0x4a64ed:'trans'+_0x3dc1a1(0x354)+'t',_0x5be14c['style'][_0x3dc1a1(0x2fb)]=_0x396e5a?_0x5b6eaa[_0x3dc1a1(0x4ec)]:'#f7ee'+'f5';if(_0x13afb9&&_0x2e06b4['speed'][_0x3dc1a1(0x49f)+'r']){if(_0x5b6eaa[_0x3dc1a1(0x610)](_0x3dc1a1(0x45e),_0x3dc1a1(0x45e)))_0x13afb9['textC'+'onten'+'t']=_0x5b6eaa[_0x3dc1a1(0x2c2)](Number,_0x2e06b4['speed']['facto'+'r'])[_0x3dc1a1(0x415)+'ed'](-0x50f*-0x4+-0x2d4*-0x5+-0x225f)+'x';else return _0x28c935[-0x1fb9+-0x6*0x355+-0x33b7*-0x1]=_0x2f6a18|-0x1506+0x1304+0x1*0x202,_0x368960[-0x97b*-0x1+-0x7f8*0x4+-0x9*-0x27d];}}if(_0x4e8522)try{_0x4e8522[_0x3dc1a1(0x638)+_0x3dc1a1(0x522)+'t']=_0x5b6eaa['bNXpE'](_0x2aa550,_0x2e06b4);}catch(_0x83cc5a){_0x4e8522['textC'+_0x3dc1a1(0x522)+'t']=JSON[_0x3dc1a1(0x397)+_0x3dc1a1(0x48a)](_0x2e06b4,null,0x2ca*-0x4+0x73e+0x1*0x3eb);}console['log'](_0x3dc1a1(0x594)+'kura]'+_0x3dc1a1(0x521)+_0x3dc1a1(0x273)+_0x3dc1a1(0x39c)+'rt',_0x5b6eaa[_0x3dc1a1(0x53f)](_0x5b6eaa[_0x3dc1a1(0x5a5)]+_0x4a64ed,_0x5b6eaa[_0x3dc1a1(0x540)]),_0x2e06b4),console['log'](_0x5b6eaa['IgWKd'](_0xc1b69c+'\x0a'+JSON[_0x3dc1a1(0x397)+_0x3dc1a1(0x48a)](_0x2e06b4,null,0x29*0x9b+0x1*-0xfe+-0x17d4),'\x0a')+_0x31345c);}else{var _0x299b63=_0x23677a[_0xf74fea],_0x1cb4e4=typeof _0x2ed86c[_0x299b63];_0x4e37ae[_0x299b63]=_0x1cb4e4===_0x3dc1a1(0x4fb)+_0x3dc1a1(0x3ed)?'undef'+_0x3dc1a1(0x3ed):_0x1cb4e4;}}};return _0x155ebb['datas'+'et'][_0x1b2d80(0x35d)]='1',_0x155ebb[_0x1b2d80(0x35d)]=_0x1eb4a5,_0x1eb4a5;}function _0x2aa550(_0x3957f6){var _0x555a07=_0x2bf26f,_0x57117f=[];_0x57117f['push'](_0x5b6eaa[_0x555a07(0x2e8)](_0x5b6eaa[_0x555a07(0x2b3)](_0x555a07(0x1fd)+_0x555a07(0x502)+(_0x3957f6[_0x555a07(0x452)]||'?'),_0x5b6eaa['dfgzH'])+Math[_0x555a07(0x3cc)](_0x5b6eaa[_0x555a07(0x326)](_0x3957f6[_0x555a07(0x5ee)+_0x555a07(0x38a)]||0x48d+-0x11c9*-0x2+-0x281f,0x31*-0xab+-0x13*-0x1e7+0x7e)),'s)')),_0x57117f[_0x555a07(0x52f)](_0x5b6eaa['vqsSX'](_0x555a07(0x322)+_0x555a07(0x502)+(_0x3957f6['uwmk']?_0x5b6eaa[_0x555a07(0x43f)]:'no')+(_0x555a07(0x58c)+'ntext'+'\x20')+(_0x3957f6[_0x555a07(0x57f)+'pCont'+_0x555a07(0x2c3)]?_0x555a07(0x3d9):'no')+(_0x555a07(0x581)+'pes\x20'),_0x3957f6['typeC'+_0x555a07(0x3ee)]!=null?_0x3957f6['typeC'+'ount']:'?')),_0x57117f[_0x555a07(0x52f)](_0x5b6eaa[_0x555a07(0x380)](_0x5b6eaa[_0x555a07(0x428)]+_0x3957f6['hooks'+_0x555a07(0x464)+'ed']+'/'+_0x3957f6['hooks'+_0x555a07(0x63d)],_0x555a07(0x2f3)+'ied')),_0x57117f[_0x555a07(0x52f)]('');var _0x58ee95=_0x3957f6[_0x555a07(0x41b)+'nces']||{},_0x367487=Object[_0x555a07(0x657)](_0x58ee95);!_0x367487['lengt'+'h']&&(_0x57117f['push']('no\x20li'+_0x555a07(0x26a)+_0x555a07(0x527)+_0x555a07(0x5f9)+_0x555a07(0x56a)+_0x555a07(0x3a4)),_0x57117f['push'](''),_0x57117f['push'](_0x555a07(0x3e8)+_0x555a07(0x459)+'fire\x20'+_0x555a07(0x293)+_0x555a07(0x63a)+'e\x27s\x20o'+'wn\x20Up'+'date('+_0x555a07(0x4c9)+_0x555a07(0x46f)+_0x555a07(0x5f9)+_0x555a07(0x56a)+_0x555a07(0x255)),_0x57117f['push']('no\x20Up'+_0x555a07(0x2ec)+_0x555a07(0x26d)+_0x555a07(0x20d)+'r\x20the'+_0x555a07(0x49a)+_0x555a07(0x656)+_0x555a07(0x400)+_0x555a07(0x4a7)+'atch.'));for(var _0x2240b0=0xaf9*0x1+0xbcb*-0x2+-0xc9d*-0x1;_0x2240b0<_0x367487['lengt'+'h'];_0x2240b0++){var _0xba8b50=_0x367487[_0x2240b0];_0x57117f['push'](_0x5b6eaa['AwDli'](_0xba8b50,'\x20@\x20')+_0x58ee95[_0xba8b50]);}_0x57117f[_0x555a07(0x52f)]('');var _0x2e2492=_0x3957f6[_0x555a07(0x261)+'y']||{},_0x3f6b95=Object['keys'](_0x2e2492);for(var _0xaa694f=0xa34+0x112d*0x2+-0x2c8e*0x1;_0xaa694f<_0x3f6b95[_0x555a07(0x530)+'h'];_0xaa694f++){var _0xe640b7=_0x3f6b95[_0xaa694f],_0x582a57=_0x2e2492[_0xe640b7];if(!_0x582a57||!_0x582a57[_0x555a07(0x530)+'h'])continue;_0x57117f[_0x555a07(0x52f)](_0x5b6eaa[_0x555a07(0x3be)](_0x555a07(0x316),_0xe640b7)+'\x20'+new Array(Math[_0x555a07(0x43c)](-0x21fa*0x1+-0x911+0x2b0c,0xf9d+0x22fd+-0x3278-_0xe640b7[_0x555a07(0x530)+'h']))[_0x555a07(0x3b2)]('─')),_0x57117f[_0x555a07(0x52f)]('\x20\x20off'+_0x555a07(0x20a)+_0x555a07(0x26e)+'\x20\x20\x20\x20\x20'+_0x555a07(0x3d5)+'lue\x20\x20'+_0x555a07(0x3fd)+'\x20\x20\x20\x20\x20'+_0x555a07(0x347));for(var _0x29789b=-0x1026+0x661*0x1+0x9c5;_0x5b6eaa['blQZe'](_0x29789b,_0x582a57[_0x555a07(0x530)+'h']);_0x29789b++){var _0x1ad43f=_0x582a57[_0x29789b],_0x53ef8e=typeof _0x1ad43f['v']==='numbe'+'r'?Math['round'](_0x1ad43f['v']*(-0xeb3+-0x1b*0x99+-0x115f*-0x2))/(-0x23*0xc1+0x1*-0x13af+0x18fd*0x2):_0x1ad43f['v'];_0x57117f[_0x555a07(0x52f)](_0x5b6eaa[_0x555a07(0x5d7)](_0x5b6eaa[_0x555a07(0x56d)](_0x5b6eaa[_0x555a07(0x28d)]('\x20\x20',('0x'+_0x1ad43f['o'][_0x555a07(0x21a)+_0x555a07(0x2d2)](0x13*0xef+-0x2620+0x1473))[_0x555a07(0x531)+'d'](0x119b*0x1+-0xedd+0x15b*-0x2))+'\x20'+_0x1ad43f['k']['padEn'+'d'](-0x1*0xffb+-0xfff+0x493*0x7),'\x20'),String(_0x53ef8e)[_0x555a07(0x531)+'d'](-0x15a6+0x1*-0xfe3+0x2599))+'\x20'+(_0x1ad43f[_0x555a07(0x347)]||''));}_0x57117f[_0x555a07(0x52f)]('');}if(_0x3957f6['warni'+'ngs']&&_0x3957f6['warni'+_0x555a07(0x64b)]['lengt'+'h']){if(_0x555a07(0x204)===_0x5b6eaa['MMItC'])return _0xf89ff4['type']===_0x5aa567;else{_0x57117f['push'](_0x5b6eaa[_0x555a07(0x221)]);for(var _0x3c7652=-0x11c0+-0x1bed+0x2dad;_0x5b6eaa['blQZe'](_0x3c7652,_0x3957f6[_0x555a07(0x3b9)+'ngs']['lengt'+'h']);_0x3c7652++)_0x57117f['push'](_0x555a07(0x601)+_0x3957f6[_0x555a07(0x3b9)+_0x555a07(0x64b)][_0x3c7652]);}}return _0x57117f[_0x555a07(0x3b2)]('\x0a');}window['addEv'+'entLi'+'stene'+'r'](_0x2bf26f(0x26b)+'ge',function(_0x17ae40){var _0x14e4de=_0x2bf26f,_0x5df7f8={'NFVgE':function(_0x2fcf08,_0x5e4fce){return _0x2fcf08+_0x5e4fce;},'YLshO':_0x5b6eaa['muxZs'],'dcNyw':function(_0xc1e0,_0x571bff){return _0x5b6eaa['LplsQ'](_0xc1e0,_0x571bff);}};if(_0x5b6eaa[_0x14e4de(0x588)](_0x5b6eaa['lnnbE'],'inahr')){var _0x19e57b=_0x17ae40[_0x14e4de(0x300)];if(!_0x19e57b||_0x5b6eaa[_0x14e4de(0x5cd)](_0x19e57b['__sak'+_0x14e4de(0x231)],_0xa116f8))return;try{if(_0x19e57b[_0x14e4de(0x306)]===_0x14e4de(0x60b)){if(_0x5b6eaa[_0x14e4de(0x469)]==='skxst'){_0x5b6eaa['YBQrg'](_0x200574)['set']({'host':_0x19e57b[_0x14e4de(0x452)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}else _0x5b6eaa[_0x14e4de(0x62f)](_0x1ef7f6,_0x128896);}if(_0x19e57b[_0x14e4de(0x306)]===_0x14e4de(0x631)+'t')_0x5b6eaa['YBQrg'](_0x200574)['set'](_0x19e57b['repor'+'t']);}catch(_0x108fd3){_0x5b6eaa[_0x14e4de(0x5c2)](_0x5b6eaa[_0x14e4de(0x4dc)],_0x14e4de(0x5bd))?console[_0x14e4de(0x62c)](_0x14e4de(0x594)+_0x14e4de(0x539)+_0x14e4de(0x38c)+'l\x20upd'+'ate\x20f'+_0x14e4de(0x31c),_0x5b6eaa[_0x14e4de(0x496)](_0x14e4de(0x2fb)+':',_0x4a64ed),_0x108fd3):_0x157429[_0x14e4de(0x3b9)+_0x14e4de(0x64b)][_0x14e4de(0x52f)](_0x5df7f8[_0x14e4de(0x49c)]('captu'+'red\x20',_0x4a6ff5[_0x14e4de(0x657)](_0x4b6230[_0x14e4de(0x41b)+_0x14e4de(0x57c)])['lengt'+'h'])+(_0x14e4de(0x3c4)+'ct(s)'+'\x20but\x20'+_0x14e4de(0x1fe)+_0x14e4de(0x3d0)+_0x14e4de(0x58d))+(_0x213a8f['lastE'+_0x14e4de(0x580)]?_0x14e4de(0x52b)+_0x14e4de(0x2dd)+_0x5c0697['lastE'+'rror']:_0x5df7f8['YLshO']));}}else{if(!_0x470bcc||!_0x427cdd)return null;var _0x27471f=new _0x23dbfe(_0x471d4b)['getCl'+_0x14e4de(0x4d4)+'me']();return _0x5df7f8['dcNyw'](_0x27471f,_0x19e7fe)?null:_0x27471f;}});if(document[_0x2bf26f(0x4d3)])_0x200574();else document[_0x2bf26f(0x4e4)+_0x2bf26f(0x1ff)+_0x2bf26f(0x2e9)+'r'](_0x2bf26f(0x45b)+'ntent'+_0x2bf26f(0x4c5)+'d',_0x200574,{'once':!![]});return;}window['__SAK'+'URA_S'+'W__']=window['__SAK'+_0x2bf26f(0x5c3)+_0x2bf26f(0x39e)]||{'at':Date['now']()};function _0x19896b(_0x581d82,_0x53a2cb){var _0x129c92=_0x2bf26f,_0x1ca52b={'__sakura':_0xa116f8,'kind':_0x581d82};if(_0x53a2cb){for(var _0x53cb67 in _0x53a2cb)_0x1ca52b[_0x53cb67]=_0x53a2cb[_0x53cb67];}try{if(window['paren'+'t']&&window['paren'+'t']!==window)window[_0x129c92(0x354)+'t']['postM'+_0x129c92(0x460)+'e'](_0x1ca52b,'*');}catch(_0x7dee55){}try{if(window['top']&&_0x5b6eaa['iwVoz'](window['top'],window))window[_0x129c92(0x4d0)][_0x129c92(0x3f7)+_0x129c92(0x460)+'e'](_0x1ca52b,'*');}catch(_0x5cabba){}}console[_0x2bf26f(0x256)](_0x5b6eaa['nGPlv'](_0x2bf26f(0x594)+_0x2bf26f(0x539)+_0x2bf26f(0x56c)+'LAYER'+_0x2bf26f(0x569)+_0x2bf26f(0x22d),_0x26b926),_0x2bf26f(0x2fb)+':'+_0x4a64ed+(_0x2bf26f(0x215)+_0x2bf26f(0x2d1)+_0x2bf26f(0x571)+_0x2bf26f(0x5b8)+_0x2bf26f(0x30c)+'e:14p'+'x'),{'host':_0x20d729,'href':location[_0x2bf26f(0x637)],'version':_0x26b926}),_0x19896b(_0x2bf26f(0x60b),{'host':_0x20d729,'role':_0x546f38});var _0x5eda0c=window[_0x2bf26f(0x312)+'URA_S'+'W__']&&window['__SAK'+_0x2bf26f(0x5c3)+_0x2bf26f(0x39e)]['at']||Date[_0x2bf26f(0x4e7)]();try{var _0x4b59b7=new BroadcastChannel(_0x2bf26f(0x4f0)+_0x2bf26f(0x1dc));_0x4b59b7[_0x2bf26f(0x509)+'sage']=function(_0x3eec4d){var _0x56d197=_0x2bf26f,_0x3b0a49=_0x3eec4d['data'];if(_0x3b0a49&&_0x5b6eaa['QDfVP'](_0x3b0a49[_0x56d197(0x35f)+'ura'],_0xa116f8)&&_0x3b0a49['kind']===_0x56d197(0x3c1))_0x5b6eaa['hGtrx'](_0x5a3188,_0x3b0a49['cmd'],_0x3b0a49[_0x56d197(0x340)]);};}catch(_0x95c91e){}var _0x57e50c=[];(function _0x31ec00(){var _0x18dc61=_0x2bf26f,_0x4f703b={'sgFew':_0x5b6eaa[_0x18dc61(0x47e)],'DVVIX':function(_0x598487,_0x2e671c){return _0x598487<_0x2e671c;},'udPLk':function(_0x5b3b31,_0x25ba7b){return _0x5b3b31!==_0x25ba7b;},'gmJps':function(_0x214c0b,_0x26d73e){return _0x214c0b===_0x26d73e;}},_0x3d4547=['log',_0x5b6eaa[_0x18dc61(0x272)],_0x5b6eaa[_0x18dc61(0x3a6)],_0x18dc61(0x5c1),_0x5b6eaa[_0x18dc61(0x24d)]];for(var _0x39b5e7=0x11*0x3d+0x9d7+-0xde4;_0x39b5e7<_0x3d4547['lengt'+'h'];_0x39b5e7++){(function(_0x20967b){var _0x490a3f=_0x18dc61,_0x10bd80={'lVZxR':function(_0x5b0683,_0x41d5b6){var _0x145b02=_0x59dc;return _0x5b6eaa[_0x145b02(0x4a3)](_0x5b0683,_0x41d5b6);},'Lsvts':function(_0x11076d,_0x49a3ba){return _0x11076d(_0x49a3ba);}},_0x3423ff=console[_0x20967b];if(typeof _0x3423ff!==_0x490a3f(0x59c)+'ion')return;console[_0x20967b]=function(){var _0x4de9f8=_0x490a3f;try{if(_0x4de9f8(0x4d2)!==_0x4f703b['sgFew']){var _0x13e465=_0x2bedc6[_0xa57ea5];try{var _0x382ef0=_0x1d22ca['hookP'+_0x4de9f8(0x276)]({'typeName':_0x13e465[_0x4de9f8(0x423)],'methodName':_0x4de9f8(0x59f)+'e','params':['i32',_0x4de9f8(0x5bb)],'returnType':_0x4b4fd4},_0x4b8cb3(_0x13e465['type'],_0x13e465['keep']));_0x4e50b1['push']({'type':_0x13e465[_0x4de9f8(0x423)],'hook':_0x382ef0,'keep':_0x13e465[_0x4de9f8(0x2bb)]});}catch(_0x3fc2fe){_0x4a997f['push'](_0x10bd80[_0x4de9f8(0x28e)](_0x13e465['type']+':\x20',_0x10bd80[_0x4de9f8(0x550)](_0x2526f4,_0x3fc2fe&&_0x3fc2fe['messa'+'ge']||_0x3fc2fe)['slice'](0x3fc+0x2585+-0x7d*0x55,-0x8eb+-0x53b*0x1+-0x1f*-0x7a)));}}else{var _0x3f2c6d='';for(var _0x1dee13=0x13*0x133+-0xd27+-0x112*0x9;_0x4f703b[_0x4de9f8(0x3b0)](_0x1dee13,arguments[_0x4de9f8(0x530)+'h']);_0x1dee13++){var _0x16f9df=arguments[_0x1dee13];if(typeof _0x16f9df==='strin'+'g')_0x3f2c6d+=_0x16f9df;else{if(_0x16f9df&&_0x16f9df[_0x4de9f8(0x26b)+'ge'])_0x3f2c6d+=_0x16f9df[_0x4de9f8(0x26b)+'ge'];}}if(_0x4f703b['udPLk'](_0x3f2c6d[_0x4de9f8(0x279)+'Of'](_0xc1b69c),-(0xa0b+0xce8+-0x16f2)))return _0x3423ff[_0x4de9f8(0x25c)](console,arguments);if(_0x4f703b[_0x4de9f8(0x24a)](_0x3f2c6d[_0x4de9f8(0x279)+'Of'](_0x4de9f8(0x45a)+_0x4de9f8(0x429)+'dkit'),-(-0x1b6*-0x1+-0x815+-0x3*-0x220))){var _0x41fa2f=_0x3f2c6d[_0x4de9f8(0x3bb)](-0xe1b+0x29*-0xc1+-0x10c*-0x2b,0x1067+0x65*0x9+-0x12c8);if(_0x4f703b[_0x4de9f8(0x31b)](_0x57e50c[_0x4de9f8(0x279)+'Of'](_0x41fa2f),-(0x11f4+-0x5*-0x475+-0x4*0xa0f))&&_0x57e50c['lengt'+'h']<0x76f*-0x2+-0x31c*0x1+-0x3*-0x612)_0x57e50c[_0x4de9f8(0x52f)](_0x41fa2f);}}}catch(_0x1bc5a1){}return _0x3423ff['apply'](console,arguments);};}(_0x3d4547[_0x39b5e7]));}}());var _0x47d334={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x3aeacc=null,_0x574c84=null,_0x594449=-(0x12*-0x20e+-0x1463+-0x6*-0x990),_0xc22445=null;function _0x2703a3(_0x240796){var _0x30fb68=_0x2bf26f;try{if(!_0x240796)return;var _0x3f805d=_0x240796[_0x30fb68(0x41b)+_0x30fb68(0x4e0)]?_0x240796['insta'+_0x30fb68(0x4e0)][_0x30fb68(0x484)+'ts']:_0x240796[_0x30fb68(0x484)+'ts']||null;if(!_0x3f805d)return;if(!_0xc22445)try{_0xc22445=Object['keys'](_0x3f805d)[_0x30fb68(0x3bb)](-0x518*0x1+-0x78b*-0x2+0x9fe*-0x1,0x51b+0x36+-0x539);}catch(_0xda748a){}var _0x59e5db=_0x3f805d[_0x30fb68(0x514)+'y'];if(_0x59e5db&&_0x59e5db['buffe'+'r']&&_0x5b6eaa[_0x30fb68(0x61a)](_0x59e5db[_0x30fb68(0x38e)+'r'][_0x30fb68(0x5da)+_0x30fb68(0x535)],-0x191d+0x569*0x3+-0x17b*-0x6)){if(_0x30fb68(0x305)!==_0x5b6eaa[_0x30fb68(0x20b)]){if(_0x1a36b9&&_0x5b6eaa['KXKTq'](typeof _0x3b11e0['on'],_0x30fb68(0x5f7)+'an'))_0xeed1b9['on']=_0x156e0b['on'];_0x162165&&typeof _0x35c34a[_0x30fb68(0x49f)+'r']===_0x30fb68(0x50a)+'r'&&(_0x4bfc16['facto'+'r']=_0x597eec[_0x30fb68(0x304)](0x13f1*-0x1+0x11f9+0x1fd,_0x3eb1ea['max'](-0x4d9+0x35f*-0x2+0xb98,_0x10f7f0[_0x30fb68(0x49f)+'r'])));if(!_0x39fd16['on'])_0x30298b={};return;}else _0x574c84=_0x59e5db,_0x594449=_0x5b6eaa[_0x30fb68(0x2b0)](Date[_0x30fb68(0x4e7)](),_0x5eda0c);}}catch(_0x9556b0){}}function _0x449387(){var _0x4142ef=_0x2bf26f;try{if(_0x5b6eaa[_0x4142ef(0x4df)](typeof WebAssembly,_0x4142ef(0x4fb)+'ined'))return;var _0x3b6c16=[_0x4142ef(0x41b)+_0x4142ef(0x33c)+'e',_0x4142ef(0x41b)+_0x4142ef(0x33c)+_0x4142ef(0x3a9)+'aming'];for(var _0x5bc86c=0x124d*-0x2+-0x3af*0x3+0x2fa7;_0x5b6eaa[_0x4142ef(0x2fa)](_0x5bc86c,_0x3b6c16[_0x4142ef(0x530)+'h']);_0x5bc86c++){(function(_0xe25dd3){var _0x224863=_0x4142ef,_0x391014={'iLkKY':function(_0x5b7127,_0x501f26){return _0x5b6eaa['seQUp'](_0x5b7127,_0x501f26);},'NCdhL':_0x224863(0x4c1),'RvDbe':function(_0x16ba3e,_0x387f15){var _0x5566bf=_0x224863;return _0x5b6eaa[_0x5566bf(0x4da)](_0x16ba3e,_0x387f15);},'RxQEL':_0x224863(0x59c)+_0x224863(0x5eb)},_0x2c3d51=WebAssembly[_0xe25dd3];if(_0x5b6eaa['zFImo'](typeof _0x2c3d51,_0x224863(0x59c)+'ion')||_0x2c3d51['__sak'+_0x224863(0x285)+'moryT'+'ap'])return;var _0x2afc88=function(){var _0x344154=_0x224863,_0x4f1f26=_0x2c3d51['apply'](this,arguments);try{if(_0x344154(0x4ad)===_0x391014['NCdhL'])return _0x1aeb9f['faile'+'d']++,_0x3fe82b['lastE'+_0x344154(0x580)]=_0x33f924['lastE'+_0x344154(0x580)]||_0x391014[_0x344154(0x4d6)](_0xdf497,_0x169733&&_0x26aee2[_0x344154(0x26b)+'ge']||_0xf92ab)[_0x344154(0x3bb)](-0x3f*-0xa+-0x504+0x28e,0x213f*0x1+0x1369+-0x3430),_0x52da6e;else{if(_0x4f1f26&&_0x391014[_0x344154(0x2c9)](typeof _0x4f1f26[_0x344154(0x240)],_0x391014['RxQEL']))_0x4f1f26['then'](_0x2703a3,function(){});else _0x391014[_0x344154(0x4d6)](_0x2703a3,_0x4f1f26);}}catch(_0xb0bb1e){}return _0x4f1f26;};_0x2afc88[_0x224863(0x35f)+_0x224863(0x285)+'moryT'+'ap']=!![];try{Object['defin'+_0x224863(0x2e4)+'erty'](_0x2afc88,'name',{'value':_0x2c3d51['name'],'configurable':!![]});}catch(_0x51c5ae){}WebAssembly[_0xe25dd3]=_0x2afc88;}(_0x3b6c16[_0x5bc86c]));}}catch(_0x14d4a0){}}var _0x4133f5=null,_0x12a991=null,_0x1ea113={},_0x2fdd6=[],_0x2321f6=[],_0xf2d71f=[{'type':_0x2bf26f(0x548)+'ntrol'+_0x2bf26f(0x654),'keep':!![]},{'type':_0x2bf26f(0x602)+'hScri'+'pt','keep':!![]},{'type':_0x5b6eaa[_0x2bf26f(0x3a2)],'keep':![]},{'type':_0x2bf26f(0x604)+_0x2bf26f(0x62a)+'ager','keep':![]}],_0x308c8e=[_0x2bf26f(0x45c)+_0x2bf26f(0x585)+'Sharp'+'.dll','Assem'+'bly-C'+_0x2bf26f(0x4d5)+_0x2bf26f(0x4cd)+'tpass'+_0x2bf26f(0x355),_0x2bf26f(0x5db)+_0x2bf26f(0x248)+'ge.De'+_0x2bf26f(0x599)+'ll',_0x5b6eaa[_0x2bf26f(0x4ce)],_0x2bf26f(0x64e)+_0x2bf26f(0x254)+_0x2bf26f(0x4fc)+_0x2bf26f(0x578)+_0x2bf26f(0x2d3)+_0x2bf26f(0x29d),_0x2bf26f(0x278)+'erate'+'d'];(function _0x5945e4(){var _0x1a8a62=_0x2bf26f,_0x60f4df={'OTKxB':_0x5b6eaa['BBoyx']};if(_0x5b6eaa['CmKob']===_0x1a8a62(0x37b)){_0x243c72=_0x488e1e,_0x454153=[],_0x313df1('repor'+'t',{'report':_0x2dccd8()});return;}else try{var _0x51c9ae=window[_0x1a8a62(0x45a)+'WebMo'+'dkit']&&window['Unity'+_0x1a8a62(0x429)+_0x1a8a62(0x525)][_0x1a8a62(0x30b)+'me'];if(!_0x51c9ae||_0x5b6eaa[_0x1a8a62(0x560)](typeof _0x51c9ae['creat'+_0x1a8a62(0x441)+'in'],'funct'+'ion')){_0x47d334['error']=_0x1a8a62(0x30b)+_0x1a8a62(0x3b7)+_0x1a8a62(0x438)+'lugin'+'\x20unav'+_0x1a8a62(0x5ab)+'le';return;}_0x47d334['attem'+'pted']=!![],_0x12a991=_0x51c9ae['creat'+'ePlug'+'in']({'name':'sakur'+_0x1a8a62(0x2ba)+_0x1a8a62(0x39a)+'z','version':_0x26b926,'referencedAssemblies':_0x308c8e[_0x1a8a62(0x3bb)]()}),_0x47d334['ok']=!![];try{if(_0x5b6eaa[_0x1a8a62(0x3c6)]===_0x5b6eaa[_0x1a8a62(0x3c6)]){var _0x1a9ae8=window[_0x1a8a62(0x45a)+'WebMo'+_0x1a8a62(0x525)]['Runti'+'me'];_0x1a9ae8[_0x1a8a62(0x35f)+_0x1a8a62(0x2b6)+'g']=_0x26b926+':'+Math['rando'+'m']()[_0x1a8a62(0x21a)+_0x1a8a62(0x2d2)](0x9e8+0x1ee3+-0xd8d*0x3)['slice'](0x21b1+0x171*-0x13+-0x64c,0xae3*0x1+-0x9e*0x10+0x53*-0x3),_0x3aeacc=_0x1a9ae8[_0x1a8a62(0x35f)+_0x1a8a62(0x2b6)+'g'];}else{var _0x12635e=_0xd92f80[_0x1a8a62(0x650)+_0x1a8a62(0x3b6)+_0x1a8a62(0x4e0)]||_0x22ce17['unity'+_0x1a8a62(0x335)]||_0x130e24[_0x1a8a62(0x589)];if(_0x12635e)return _0x18b7b3[_0x1a8a62(0x4ff)+'e']=_0x1a8a62(0x4f8)+_0x1a8a62(0x216)+'bal',_0x12635e;}}catch(_0x2e7dbb){}_0x28f9d9(),_0x47d334[_0x1a8a62(0x2e7)+'Regis'+'tered']=_0x2fdd6[_0x1a8a62(0x530)+'h'],_0x5b6eaa[_0x1a8a62(0x30f)](_0x449387),_0x47d334['memor'+_0x1a8a62(0x553)]=!![];}catch(_0x45d830){if(_0x5b6eaa['Uaxiu']!==_0x1a8a62(0x536))_0x47d334[_0x1a8a62(0x4e9)]=_0x5b6eaa[_0x1a8a62(0x5b2)](String,_0x45d830&&_0x45d830[_0x1a8a62(0x26b)+'ge']||_0x45d830);else{var _0x2079ff='';for(var _0x15bdcc=-0x4*-0x124+0x903*0x3+-0x1f99;_0x15bdcc<arguments[_0x1a8a62(0x530)+'h'];_0x15bdcc++){var _0x5301ca=arguments[_0x15bdcc];if(typeof _0x5301ca===_0x1a8a62(0x397)+'g')_0x2079ff+=_0x5301ca;else{if(_0x5301ca&&_0x5301ca[_0x1a8a62(0x26b)+'ge'])_0x2079ff+=_0x5301ca[_0x1a8a62(0x26b)+'ge'];}}if(_0x2079ff[_0x1a8a62(0x279)+'Of'](_0x2d6a9e)!==-(0x252e*-0x1+-0x1cc1+0x41f0))return _0x3e795d[_0x1a8a62(0x25c)](_0x19961e,arguments);if(_0x2079ff[_0x1a8a62(0x279)+'Of'](_0x60f4df['OTKxB'])!==-(-0x3ef+0x2225+-0xb*0x2bf)){var _0x338fa6=_0x2079ff[_0x1a8a62(0x3bb)](-0xfd6*-0x2+0x1013+0x2cf*-0x11,0x1f5*0x7+-0x1*0xb1e+0x169*-0x1);if(_0x3e17ac['index'+'Of'](_0x338fa6)===-(-0xcbe+-0x1687+-0x1*-0x2346)&&_0x451352[_0x1a8a62(0x530)+'h']<0x1579+0xa*-0x21d+-0x1b)_0x2f616f[_0x1a8a62(0x52f)](_0x338fa6);}}}}());var _0x31fd8f=new Float32Array(-0x2f*-0xd+0x48*-0x20+0x69e),_0x27ee9e=new Int32Array(_0x31fd8f[_0x2bf26f(0x38e)+'r']);function _0x4030a2(_0x273f26){return _0x31fd8f[0x1b9e+-0x1714+-0x48a]=_0x273f26,_0x27ee9e[-0x9e1+0x2*0x36f+0x3*0x101];}function _0x58345a(_0x362ccf){var _0x245035=_0x2bf26f;return'XBTlV'!==_0x5b6eaa['wKoGn']?(_0x27ee9e[-0xbc5*-0x2+0x5bf*-0x1+-0x5*0x38f]=_0x362ccf|0x14f*0xa+-0x1*0x28f+-0xa87,_0x31fd8f[0x1*-0x18df+0xbe7*-0x3+0x3c94*0x1]):(_0x5eb60f[_0x245035(0x4ff)+'e']='Runti'+_0x245035(0x55b)+_0x245035(0x3bf),_0x5965ef);}var _0x5146fb={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x3bf365(){var _0x1ead00=_0x2bf26f,_0x47d9cc={'LAvAu':function(_0x3af066,_0x451aeb){return _0x3af066===_0x451aeb;},'gKgNv':'obfI','moIrX':function(_0x6c608d,_0x1d1004){var _0x50b501=_0x59dc;return _0x5b6eaa[_0x50b501(0x404)](_0x6c608d,_0x1d1004);},'yTrFD':function(_0x5037d8,_0x3fa5e8){return _0x5037d8!==_0x3fa5e8;}};try{if(_0x12a991&&_0x12a991['_runt'+_0x1ead00(0x48c)]){if(_0x5b6eaa[_0x1ead00(0x2a6)](_0x5b6eaa[_0x1ead00(0x5ff)],_0x5b6eaa['PNlSL'])){var _0x15de34=_0x12a991['_runt'+'ime'];if(_0x5b6eaa[_0x1ead00(0x547)](typeof _0x15de34['resol'+'veGam'+'e'],_0x5b6eaa[_0x1ead00(0x28a)])){var _0x3574ad=_0x15de34[_0x1ead00(0x3c9)+_0x1ead00(0x203)+'e']();if(_0x3574ad)return _0x5146fb['sourc'+'e']='plugi'+_0x1ead00(0x586)+_0x1ead00(0x516)+'.reso'+_0x1ead00(0x486)+'me()',_0x3574ad;}if(_0x15de34[_0x1ead00(0x4a2)])return _0x5146fb[_0x1ead00(0x4ff)+'e']=_0x5b6eaa['EOWHD'],_0x15de34['_game'];}else{var _0x2e90d7=_0x23dd2e['data'];if(_0x2e90d7&&_0x2e90d7['__sak'+_0x1ead00(0x231)]===_0x4d1492&&_0x2e90d7['kind']===_0x1ead00(0x3c1))_0x5b064a(_0x2e90d7['cmd'],_0x2e90d7['arg']);}}}catch(_0x474a81){}try{if(_0x5b6eaa[_0x1ead00(0x2b8)](_0x5b6eaa['hRTpq'],_0x5b6eaa['hRTpq'])){var _0x544450='';for(var _0x1905fb=0x329*0xb+-0xf56+-0x1*0x136d;_0x1905fb<_0x19d06d[_0x1ead00(0x530)+'h'];_0x1905fb++){var _0x4f6dcd=_0xa44216[_0x1905fb][_0x1ead00(0x21a)+_0x1ead00(0x2d2)](0x1*-0x1c9d+0x1b25+0x2*0xc4);_0x544450+=(_0x4f6dcd['lengt'+'h']<-0x1ff+-0x29a+0x189*0x3?'0':'')+_0x4f6dcd;}return _0x544450;}else{var _0xbfce0d=window[_0x1ead00(0x45a)+_0x1ead00(0x429)+'dkit']&&window[_0x1ead00(0x45a)+'WebMo'+_0x1ead00(0x525)]['Runti'+'me'];if(_0xbfce0d&&typeof _0xbfce0d['resol'+_0x1ead00(0x203)+'e']===_0x5b6eaa[_0x1ead00(0x28a)]){var _0x273e4d=_0xbfce0d[_0x1ead00(0x3c9)+'veGam'+'e']();if(_0x273e4d){if(_0x5b6eaa[_0x1ead00(0x2a6)](_0x5b6eaa['EqFtH'],'BydnO')){if(_0x47d9cc[_0x1ead00(0x3ec)](_0x17733a,_0x1ead00(0x334)))return _0x27b97e(_0x5e006f^_0x798312);if(_0x51051e===_0x47d9cc[_0x1ead00(0x3ce)])return _0x47d9cc[_0x1ead00(0x487)](_0xfae223,_0x2a6486)|0xe2*0x4+-0x1aab+0x1723;return _0x47d9cc['yTrFD']((_0x18594a^_0x24da79)&0x39b*0x7+0x25d3+-0x1*0x3e11,-0x25f9+0x117d+0x147c)?0x219b*-0x1+-0x218c+0xe*0x4cc:-0x4*-0x240+-0x8*-0x2d4+-0x5c*0x58;}else return _0x5146fb[_0x1ead00(0x4ff)+'e']=_0x1ead00(0x30b)+'me.re'+'solve'+_0x1ead00(0x324)+')',_0x273e4d;}}if(_0xbfce0d&&_0xbfce0d['_game'])return _0x5146fb['sourc'+'e']='Runti'+_0x1ead00(0x55b)+_0x1ead00(0x3bf),_0xbfce0d;}}catch(_0x283fb2){}try{var _0x3bfc7c=window[_0x1ead00(0x650)+_0x1ead00(0x3b6)+_0x1ead00(0x4e0)]||window[_0x1ead00(0x650)+_0x1ead00(0x335)]||window[_0x1ead00(0x589)];if(_0x3bfc7c)return _0x5b6eaa['rKETk'](_0x1ead00(0x5d5),_0x1ead00(0x5d5))?![]:(_0x5146fb[_0x1ead00(0x4ff)+'e']=_0x1ead00(0x4f8)+_0x1ead00(0x216)+'bal',_0x3bfc7c);}catch(_0x222e40){}try{if(typeof game!==_0x5b6eaa[_0x1ead00(0x5f2)]&&game)return _0x5146fb['sourc'+'e']=_0x5b6eaa[_0x1ead00(0x31d)],game;}catch(_0x16d154){}try{var _0x26bb2b=Object['keys'](window);for(var _0x4e2765=-0xa33+-0x12c3+0x151*0x16;_0x4e2765<_0x26bb2b[_0x1ead00(0x530)+'h']&&_0x5b6eaa[_0x1ead00(0x2fa)](_0x4e2765,0xfb5*-0x1+0x19a*-0x2+-0x1*-0x1541);_0x4e2765++){var _0x595ef0=window[_0x26bb2b[_0x4e2765]];if(_0x595ef0&&typeof _0x595ef0===_0x5b6eaa[_0x1ead00(0x283)]&&_0x595ef0['Modul'+'e']&&_0x595ef0['Modul'+'e'][_0x1ead00(0x35c)+'8']&&_0x595ef0[_0x1ead00(0x480)+'e']['HEAPU'+'8']['buffe'+'r'])return _0x5146fb[_0x1ead00(0x4ff)+'e']=_0x5b6eaa[_0x1ead00(0x3d7)](_0x5b6eaa[_0x1ead00(0x57d)],_0x26bb2b[_0x4e2765])+('.Modu'+'le'),_0x595ef0;}}catch(_0x213572){}return _0x5146fb['sourc'+'e']=null,null;}function _0x3092dc(){var _0x23db3f=_0x2bf26f,_0xcb872d={'gSrdf':_0x5b6eaa[_0x23db3f(0x574)]};try{if(_0x574c84&&_0x574c84['buffe'+'r']&&_0x574c84[_0x23db3f(0x38e)+'r'][_0x23db3f(0x5da)+_0x23db3f(0x535)]){if(_0x23db3f(0x422)!==_0x5b6eaa[_0x23db3f(0x27b)])return _0x5146fb['sourc'+'e']=_0x5146fb['sourc'+'e']||_0x23db3f(0x41b)+_0x23db3f(0x33c)+_0x23db3f(0x54c)+'xport'+_0x23db3f(0x611)+_0x23db3f(0x477),new Uint8Array(_0x574c84[_0x23db3f(0x38e)+'r']);else _0x33065d[_0x23db3f(0x3b9)+'ngs'][_0x23db3f(0x52f)]('Hooks'+_0x23db3f(0x30e)+_0x23db3f(0x339)+'ed\x20bu'+'t\x20no\x20'+'FPSco'+_0x23db3f(0x60e)+_0x23db3f(0x5dd)+_0x23db3f(0x45d)+'red\x20y'+'et.\x20'+_0xcb872d[_0x23db3f(0x4c2)]);}}catch(_0x51fea3){}try{if(_0x5b6eaa[_0x23db3f(0x337)]!=='ZXocJ'){var _0x2e00b7=_0xaf6d55['creat'+_0x23db3f(0x21f)+_0x23db3f(0x4c3)](_0x23db3f(0x1f9));_0x2e00b7['id']=_0x5b6eaa['HpWvx'],_0x2e00b7['textC'+_0x23db3f(0x522)+'t']=_0x5b6eaa[_0x23db3f(0x47f)],(_0x19c58c[_0x23db3f(0x32c)]||_0x5ef40a['docum'+_0x23db3f(0x226)+_0x23db3f(0x54b)])[_0x23db3f(0x544)+_0x23db3f(0x2bd)+'d'](_0x2e00b7);}else{var _0x3a9613=_0x5b6eaa[_0x23db3f(0x32d)](_0x3bf365);if(_0x3a9613&&_0x3a9613[_0x23db3f(0x480)+'e']&&_0x3a9613[_0x23db3f(0x480)+'e'][_0x23db3f(0x35c)+'8']&&_0x3a9613[_0x23db3f(0x480)+'e'][_0x23db3f(0x35c)+'8'][_0x23db3f(0x38e)+'r'])return _0x3a9613['Modul'+'e'][_0x23db3f(0x35c)+'8'];}}catch(_0x4d76e2){}return null;}function _0x2da527(){var _0x13f16c=_0x2bf26f,_0x973eb4=_0x5b6eaa['prAZa'](_0x3092dc);if(!_0x973eb4)return null;try{return new DataView(_0x973eb4[_0x13f16c(0x38e)+'r'],_0x973eb4[_0x13f16c(0x5f6)+_0x13f16c(0x205)],_0x973eb4['byteL'+_0x13f16c(0x535)]);}catch(_0x121bbf){return null;}}function _0x50ee37(_0x437632,_0x5eeb7a){var _0x190ef9=_0x2bf26f,_0xb9a905={'TCjDK':function(_0xe7a599,_0x3bb9dd){var _0x5b6645=_0x59dc;return _0x5b6eaa[_0x5b6645(0x5f0)](_0xe7a599,_0x3bb9dd);},'LIZvB':_0x5b6eaa['csYJM'],'cIeQC':function(_0xf80c09){return _0xf80c09();},'nzYIN':_0x190ef9(0x594)+'kura]'+_0x190ef9(0x38c)+_0x190ef9(0x310)+'ate\x20f'+_0x190ef9(0x31c),'fgjCk':function(_0x14fd33,_0x35067a){return _0x14fd33+_0x35067a;}};if(_0x5b6eaa[_0x190ef9(0x614)]===_0x5b6eaa[_0x190ef9(0x614)]){var _0x18b4bd=_0x5b6eaa['prAZa'](_0x2da527);if(!_0x18b4bd)return _0x5146fb[_0x190ef9(0x643)+'d']++,_0x5146fb['lastE'+'rror']=_0x5146fb[_0x190ef9(0x2e2)+_0x190ef9(0x580)]||_0x5b6eaa['tcKlt'],undefined;if(_0x437632<0x517+-0x12a+-0x43*0xf||_0x5b6eaa['sxsmg'](_0x5b6eaa['uvRfS'](_0x437632,-0x956+-0xaaf+0x1409),_0x18b4bd[_0x190ef9(0x5da)+_0x190ef9(0x535)]))return _0x5146fb['faile'+'d']++,_0x5146fb['lastE'+_0x190ef9(0x580)]=_0x5146fb[_0x190ef9(0x2e2)+'rror']||_0x5b6eaa['AwDli'](_0x5b6eaa['NFsEU'](_0x5b6eaa['tcJlm'],_0x437632[_0x190ef9(0x21a)+'ing'](0x19a9+0x1af2+-0x348b))+_0x5b6eaa[_0x190ef9(0x1f2)],_0x18b4bd[_0x190ef9(0x5da)+'ength']['toStr'+'ing'](-0x1c36*-0x1+-0x704*-0x2+-0x2a2e)),undefined;try{if('XcMGo'===_0x5b6eaa[_0x190ef9(0x1de)]){_0x5146fb['ok']++;switch(_0x5eeb7a){case'u8':return _0x18b4bd[_0x190ef9(0x474)+_0x190ef9(0x218)](_0x437632);case'i8':return _0x18b4bd['getIn'+'t8'](_0x437632);case'i16':return _0x18b4bd[_0x190ef9(0x5e2)+'t16'](_0x437632,!![]);case _0x5b6eaa[_0x190ef9(0x342)]:return _0x18b4bd['getUi'+_0x190ef9(0x596)](_0x437632,!![]);case _0x190ef9(0x5bb):return _0x18b4bd['getIn'+_0x190ef9(0x5ca)](_0x437632,!![]);case _0x190ef9(0x450):return _0x18b4bd[_0x190ef9(0x474)+_0x190ef9(0x2ff)](_0x437632,!![]);case _0x5b6eaa[_0x190ef9(0x2d5)]:return _0x18b4bd[_0x190ef9(0x23c)+'oat32'](_0x437632,!![]);case _0x5b6eaa[_0x190ef9(0x2e1)]:return _0x18b4bd[_0x190ef9(0x23c)+'oat64'](_0x437632,!![]);default:return _0x18b4bd[_0x190ef9(0x5e2)+_0x190ef9(0x5ca)](_0x437632,!![]);}}else try{_0xdb32b9['textC'+_0x190ef9(0x522)+'t']=_0xb9a905[_0x190ef9(0x44f)](_0x147186,_0x3e4303);}catch(_0x2f90fa){_0x431a19[_0x190ef9(0x638)+_0x190ef9(0x522)+'t']=_0xa50aba['strin'+'gify'](_0xa01fb5,null,-0x25c8+-0x16f0+0x5*0xc25);}}catch(_0x241c50){if('vPTkJ'!==_0x5b6eaa['GufmM'])_0x44ba95[_0x190ef9(0x50d)+_0x190ef9(0x503)+'ault'](),_0x463252(_0x5b6eaa['QeeOo']);else return _0x5146fb[_0x190ef9(0x643)+'d']++,_0x5146fb['lastE'+'rror']=_0x5146fb['lastE'+_0x190ef9(0x580)]||String(_0x241c50&&_0x241c50[_0x190ef9(0x26b)+'ge']||_0x241c50)['slice'](-0x1b12+0x1bb*0x9+0xb7f,-0xe*0xfe+-0xe90+0x73b*0x4),undefined;}}else{var _0x441e09=_0x5201b5[_0x190ef9(0x300)];if(!_0x441e09||_0x441e09[_0x190ef9(0x35f)+_0x190ef9(0x231)]!==_0x22fce5)return;try{if(_0x441e09[_0x190ef9(0x306)]===_0xb9a905[_0x190ef9(0x344)]){_0xb9a905[_0x190ef9(0x63b)](_0x1a9050)['set']({'host':_0x441e09[_0x190ef9(0x452)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x441e09[_0x190ef9(0x306)]==='repor'+'t')_0xb9a905['cIeQC'](_0x26c2c0)['set'](_0x441e09[_0x190ef9(0x631)+'t']);}catch(_0x29937d){_0x3686a5[_0x190ef9(0x62c)](_0xb9a905[_0x190ef9(0x268)],_0xb9a905['fgjCk'](_0x190ef9(0x2fb)+':',_0x4e0771),_0x29937d);}}}function _0x531d55(_0x3199bd,_0x1ce506,_0xacdb54){var _0x33e404=_0x2bf26f,_0x98fd2f={'DQoSK':function(_0x48414b,_0x1d387b){return _0x5b6eaa['XzCvo'](_0x48414b,_0x1d387b);}},_0x20af52=_0x5b6eaa[_0x33e404(0x4b1)](_0x2da527);if(!_0x20af52||_0x5b6eaa[_0x33e404(0x27d)](_0x3199bd,-0x114+-0x1f5d+0x2071)||_0x3199bd+(0x3a3*-0x8+-0xd9a*-0x2+0x4*0x7a)>_0x20af52[_0x33e404(0x5da)+_0x33e404(0x535)])return![];try{switch(_0x1ce506){case'u8':case'i8':_0x20af52['setUi'+_0x33e404(0x218)](_0x3199bd,_0xacdb54&-0x7bf*0x5+-0x1ce0+0x449a);break;case _0x5b6eaa[_0x33e404(0x2ce)]:case _0x5b6eaa[_0x33e404(0x342)]:_0x20af52[_0x33e404(0x357)+'t16'](_0x3199bd,_0x5b6eaa[_0x33e404(0x2b7)](_0xacdb54,0x1*-0x14e9+0x194d+-0x464),!![]);break;case _0x33e404(0x5bb):case _0x5b6eaa[_0x33e404(0x4b9)]:_0x20af52['setIn'+_0x33e404(0x5ca)](_0x3199bd,_0xacdb54|-0x125*0x1f+0x12*-0x17+0x2519*0x1,!![]);break;case _0x33e404(0x557):_0x20af52[_0x33e404(0x5f3)+_0x33e404(0x229)](_0x3199bd,_0xacdb54,!![]);break;default:_0x20af52[_0x33e404(0x357)+'t32'](_0x3199bd,_0x5b6eaa[_0x33e404(0x2b7)](_0xacdb54,0x1236+0x1f*-0x31+-0x1c1*0x7),!![]);}return!![];}catch(_0x55764f){if(_0x5b6eaa[_0x33e404(0x5e1)](_0x5b6eaa['VJEGm'],_0x33e404(0x646)))return![];else _0x2e7c21[_0x33e404(0x52f)](_0x98fd2f['DQoSK'](_0x5e3570[_0x33e404(0x423)],':\x20')+_0x5f5ac0(_0x4850e5&&_0x340082[_0x33e404(0x26b)+'ge']||_0x1f3b1c)[_0x33e404(0x3bb)](0xec5+-0x229+-0x3*0x434,-0x1d6c+-0x2078+-0x1f42*-0x2));}}var _0x4eea35={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':'i32'},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':_0x5b6eaa['FqhBX']},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0x4952d0(_0x32e829){var _0x47cf31=_0x2bf26f,_0x40d72c='';for(var _0x137601=-0x6d*0x4f+-0x2*0x4bc+-0x5*-0x89f;_0x5b6eaa['PtRWb'](_0x137601,_0x32e829[_0x47cf31(0x530)+'h']);_0x137601++){var _0x17c277=_0x32e829[_0x137601][_0x47cf31(0x21a)+'ing'](0xee7+0xb*-0x17b+0x172);_0x40d72c+=(_0x17c277['lengt'+'h']<-0xa7f+-0x24eb+0x2f6c?'0':'')+_0x17c277;}return _0x40d72c;}function _0x12969e(_0x2068ab,_0x506107,_0x5084d0){var _0x308172=_0x2bf26f,_0x2bff09=_0x2da527();if(!_0x2bff09)return _0x5146fb[_0x308172(0x643)+'d']++,_0x5146fb['lastE'+_0x308172(0x580)]=_0x5146fb[_0x308172(0x2e2)+_0x308172(0x580)]||_0x5b6eaa[_0x308172(0x33f)],null;if(_0x5b6eaa[_0x308172(0x457)](_0x506107,-0x58a+0x3*0xcc1+-0x20b9)||_0x5b6eaa['wkhVu'](_0x5b6eaa[_0x308172(0x59b)](_0x506107,_0x5084d0),_0x2bff09[_0x308172(0x5da)+'ength']))return _0x5146fb['faile'+'d']++,_0x5146fb[_0x308172(0x2e2)+_0x308172(0x580)]=_0x5146fb[_0x308172(0x2e2)+_0x308172(0x580)]||_0x5b6eaa[_0x308172(0x5fd)](_0x308172(0x44c)+_0x308172(0x34c)+(_0x2068ab+_0x506107)['toStr'+_0x308172(0x2d2)](-0x1*-0x1ed8+-0x28*-0x1b+-0x2300),_0x308172(0x22f)+_0x308172(0x51c)+_0x308172(0x333)+'0x')+_0x2bff09[_0x308172(0x5da)+_0x308172(0x535)]['toStr'+'ing'](-0x2005+-0x194e+0x3963),null;try{if(_0x5b6eaa[_0x308172(0x5cc)]!==_0x308172(0x2c1)){var _0xf7209d=new Uint8Array(_0x5084d0);for(var _0xfeeb36=0x1*0x1d8b+-0x19e4+-0x3a7;_0x5b6eaa[_0x308172(0x25f)](_0xfeeb36,_0x5084d0);_0xfeeb36++)_0xf7209d[_0xfeeb36]=_0x2bff09['getUi'+_0x308172(0x218)](_0x2068ab+_0x506107+_0xfeeb36);return _0x5146fb['ok']++,_0xf7209d;}else{var _0x49b95f='';_0xc1d1ba[_0x308172(0x4be)+'irePr'+_0x308172(0x321)]&&(_0x49b95f=_0x5b6eaa[_0x308172(0x465)](_0x5b6eaa[_0x308172(0x5d7)](_0x5b6eaa[_0x308172(0x36b)]+_0x18d214['hookF'+_0x308172(0x28b)+'oof'][_0x308172(0x48f)]+_0x5b6eaa['DINsu']+_0x2bdc22[_0x308172(0x4be)+_0x308172(0x28b)+_0x308172(0x321)][_0x308172(0x470)+_0x308172(0x4ed)+'nc']+('\x20and\x20'+_0x308172(0x49d)+_0x308172(0x3c9)+'ved='),_0x211c0a['hookF'+_0x308172(0x28b)+'oof']['resol'+_0x308172(0x203)+'eAtFi'+'re']),_0x308172(0x4f1)+'rce:\x20')+(_0x255615[_0x308172(0x4be)+_0x308172(0x28b)+'oof']['gameS'+'ource'+_0x308172(0x41d)+'e']||'none')+('),\x20so'+'\x20the\x20'+'refer'+'ence\x20'+'exist'+'ed\x20th'+'en\x20an'+_0x308172(0x27f)+'not\x20r'+'eacha'+'ble\x20n'+_0x308172(0x5bf))),_0x2d7dc5['warni'+'ngs'][_0x308172(0x52f)](_0x5b6eaa['YusQf'](_0x5b6eaa['IHxGh'](_0x308172(0x45a)+_0x308172(0x5fa)+_0x308172(0x481)+'not\x20r'+_0x308172(0x2a9)+_0x308172(0x4fa)+'t\x20(so'+_0x308172(0x606)+'\x20',_0x3c3b1f[_0x308172(0x4b3)+'ls']['gameS'+'ource']||_0x308172(0x5d3))+').\x20'+(_0x308172(0x4c8)+_0x308172(0x3e2)+'\x20stay'+_0x308172(0x513)+_0x308172(0x58e)+_0x308172(0x55a)+_0x308172(0x4e6)+'e\x20obj'+_0x308172(0x1e7)+'ith\x20M'+_0x308172(0x269)+_0x308172(0x48d)+'U8\x20is'+'\x20reac'+_0x308172(0x3ab)+'.'),_0x49b95f));}}catch(_0x581a5b){return _0x5146fb[_0x308172(0x643)+'d']++,_0x5146fb['lastE'+_0x308172(0x580)]=_0x5146fb['lastE'+'rror']||_0x5b6eaa[_0x308172(0x2b5)](String,_0x581a5b&&_0x581a5b[_0x308172(0x26b)+'ge']||_0x581a5b)[_0x308172(0x3bb)](-0x6a2*-0x1+0xb99*-0x2+0x424*0x4,-0x21a+0x7a*0x5+0x30),null;}}function _0x14d563(_0x3e7aec,_0x28f0ed,_0x57fae9){var _0x450a7d=_0x2bf26f;if(_0x5b6eaa['hixao'](_0x5b6eaa[_0x450a7d(0x2f7)],'zvxuD')){var _0x5e1fe3=('1|0|4'+'|6|7|'+'2|8|9'+'|5|3')['split']('|'),_0x5e4d74=0x1*-0x195e+-0x5b4+0x1f12;while(!![]){switch(_0x5e1fe3[_0x5e4d74++]){case'0':var _0x190e87=_0x12969e(_0x3e7aec,_0x28f0ed,_0x2a219f[_0x450a7d(0x356)]);continue;case'1':var _0x2a219f=_0x4eea35[_0x57fae9];continue;case'2':var _0x5a5bf6=_0x1d026e[_0x450a7d(0x5e2)+_0x450a7d(0x5ca)](_0x2a219f['hidde'+'n'],!![]);continue;case'3':return{'keyAtOffset0':_0x3d958,'hidden':_0x5a5bf6,'inited':_0x2a1038,'fake':_0x5b06fb,'act':_0x3ab481,'hex':_0x5b6eaa[_0x450a7d(0x62f)](_0x4952d0,_0x190e87),'alt':_0x57fae9===_0x450a7d(0x47d)?_0x5b6eaa[_0x450a7d(0x404)](_0x5a5bf6,_0x5b06fb|-0x62e+-0x1567+0x1b95):null};case'4':if(!_0x190e87)return null;continue;case'5':var _0x3ab481=_0x5b6eaa[_0x450a7d(0x2df)](_0x1d026e['getUi'+_0x450a7d(0x218)](_0x2a219f[_0x450a7d(0x3fa)+'e']),-0x281*-0x2+0x3*0x9b5+-0x2220);continue;case'6':var _0x1d026e=new DataView(_0x190e87[_0x450a7d(0x38e)+'r'],_0x190e87['byteO'+_0x450a7d(0x205)],_0x190e87['byteL'+_0x450a7d(0x535)]);continue;case'7':var _0x3d958=_0x1d026e[_0x450a7d(0x5e2)+'t32'](_0x2a219f[_0x450a7d(0x1f6)],!![]);continue;case'8':var _0x2a1038=_0x5b6eaa[_0x450a7d(0x3bd)](_0x1d026e[_0x450a7d(0x474)+_0x450a7d(0x218)](_0x2a219f[_0x450a7d(0x5c9)+'d']),0x1*0x191b+0x8*-0x1cd+-0xab2);continue;case'9':var _0x5b06fb=_0x57fae9===_0x5b6eaa['ucAnl']?_0x1d026e[_0x450a7d(0x23c)+_0x450a7d(0x229)](_0x2a219f['fake'],!![]):_0x57fae9===_0x450a7d(0x47d)?_0x1d026e['getIn'+'t32'](_0x2a219f['fake'],!![]):_0x1d026e[_0x450a7d(0x474)+'nt8'](_0x2a219f['fake']);continue;}break;}}else return _0x354790[_0x450a7d(0x24c)](_0x16cb36-_0x402118)<=_0x56d0c7[_0x450a7d(0x43c)](-0x170c+-0x10*0x1e5+0x2cf*0x13,_0x40832a[_0x450a7d(0x24c)](_0x575cd7)*(0xa61*0x1+0xd*-0x22f+0x1202+0.6));}function _0x2b5a3d(_0x35b482,_0xb26885,_0x2a808c){var _0x178451=_0x2bf26f;if(_0x5b6eaa['VCFdw']('hUvzf',_0x5b6eaa['wUXjD'])){if(_0x5b6eaa['ZWbGJ'](_0x35b482,_0x5b6eaa['ucAnl']))return _0x58345a(_0xb26885^_0x2a808c);if(_0x35b482==='obfI')return _0xb26885^_0x2a808c|0x9*-0x92+0x33*0xa1+-0x1af1;return _0x5b6eaa['zqGBR'](_0xb26885^_0x2a808c,-0x19c6*0x1+-0x1234+-0x18d*-0x1d)!==0x455*0x3+-0x1bcb+-0xecc*-0x1?-0x27*0x43+0x245+0x7f1*0x1:-0x2693+-0x2*0xf20+0x16f1*0x3;}else{if(_0x3b7220&&typeof _0x1c919e[_0x178451(0x240)]===_0x178451(0x59c)+_0x178451(0x5eb))_0x6d754b['then'](_0x65b2f5,function(){});else _0x5b6eaa[_0x178451(0x51f)](_0x5be3e4,_0x3e413f);}}function _0x26c87f(_0x5eb008,_0x1a1a77,_0x4a26b0){var _0x8bd586=_0x2bf26f,_0x419753=_0x4eea35[_0x4a26b0];if(!_0x419753)return null;var _0xc305e1=_0x5b6eaa['hGtrx'](_0x50ee37,_0x5b6eaa['Yends'](_0x5eb008,_0x1a1a77)+_0x419753[_0x8bd586(0x1f6)],'u8'),_0x2162aa=_0x50ee37(_0x5b6eaa['qQZOq'](_0x5eb008+_0x1a1a77,_0x419753[_0x8bd586(0x62e)+'n']),_0x5b6eaa['FqhBX']),_0x12968f=_0x50ee37(_0x5b6eaa['wdZhO'](_0x5b6eaa[_0x8bd586(0x479)](_0x5eb008,_0x1a1a77),_0x419753['inite'+'d']),'u8'),_0x138aeb=_0x5b6eaa[_0x8bd586(0x359)](_0x50ee37,_0x5b6eaa['qQZOq'](_0x5eb008+_0x1a1a77,_0x419753[_0x8bd586(0x4ee)]),_0x5b6eaa['FSkuD'](_0x4a26b0,'obfF')?_0x5b6eaa['gnQpc']:_0x5b6eaa['LplsQ'](_0x4a26b0,_0x5b6eaa[_0x8bd586(0x499)])?_0x8bd586(0x5bb):'u8'),_0x208213=_0x5b6eaa[_0x8bd586(0x359)](_0x50ee37,_0x5b6eaa[_0x8bd586(0x34e)](_0x5eb008,_0x1a1a77)+_0x419753['activ'+'e'],'u8');if(_0xc305e1===undefined||_0x2162aa===undefined||_0x138aeb===undefined||_0x5b6eaa[_0x8bd586(0x5e1)](_0x208213,undefined))return null;_0xc305e1&=0x2*-0xb3f+0x5*0x4e1+-0x8*0x1d,_0x2162aa|=0x386*0x7+-0x7*-0x397+-0x31cb,_0x12968f=_0x5b6eaa['ivWAj'](_0x12968f,-0x503*-0x1+0x1024+0x5*-0x43b)&0x12a6+-0xa4a+-0x85b,_0x208213&=0x1b66+-0x175e+0x1*-0x407;var _0x59bca0;if(_0x4a26b0===_0x5b6eaa[_0x8bd586(0x1e3)])_0x59bca0=_0x5b6eaa['xBMgO'](_0x58345a,_0x2162aa^_0xc305e1);else{if(_0x5b6eaa['JUzEV'](_0x4a26b0,_0x8bd586(0x47d)))_0x59bca0=_0x2162aa^_0xc305e1|-0x1a4b+0xaf1*0x1+0x189*0xa;else _0x59bca0=((_0x2162aa^_0xc305e1)&0x245c+-0xc7*-0x17+0x2f*-0x122)!==0x293*0xd+-0x2d6+-0x1ea1?0x1bb+-0x16a3+0x14e9*0x1:0x2b2+0x6f7+-0x9a9;}return{'real':_0x59bca0,'fake':_0x138aeb,'act':_0x208213,'init':_0x12968f,'key':_0xc305e1,'hidden':_0x2162aa};}function _0x5d2fdd(_0x434217,_0x235cb1,_0x46bb0a,_0x301ff8){var _0x5db617=_0x2bf26f,_0x5325fe={'FXCHZ':function(_0x32e026,_0x24a373){return _0x32e026===_0x24a373;},'gQeMC':_0x5b6eaa[_0x5db617(0x1e6)],'NUWgu':_0x5db617(0x631)+'t','utBio':function(_0x365389){var _0x18f35c=_0x5db617;return _0x5b6eaa[_0x18f35c(0x30f)](_0x365389);}};if(_0x5db617(0x3a7)===_0x5db617(0x3a7)){var _0x1c7e7d=_0x5b6eaa[_0x5db617(0x385)][_0x5db617(0x292)]('|'),_0xa95ea6=0x7a*-0x13+-0x173*-0x1+0x79b;while(!![]){switch(_0x1c7e7d[_0xa95ea6++]){case'0':if(!_0x5a1461)return![];continue;case'1':if(_0x5b6eaa[_0x5db617(0x5e1)](_0x46bb0a,_0x5db617(0x334)))_0x5c46d4=_0x4030a2(_0x301ff8);else{if(_0x46bb0a===_0x5db617(0x47d))_0x5c46d4=_0x5b6eaa['lmAlP'](_0x301ff8,-0x38*0x3e+0x5*0x65+0xb97);else _0x5c46d4=(_0x301ff8?0x1844+-0x12*-0x11a+-0x2c17*0x1:-0x19*0xbf+0x1076*0x1+0x231)&0x3*0x645+-0x292*-0xd+0x333a*-0x1;}continue;case'2':var _0x5c46d4;continue;case'3':var _0x5efb24=_0x4eea35[_0x46bb0a];continue;case'4':var _0x467187=new DataView(_0x5a1461['buffe'+'r'],_0x5a1461[_0x5db617(0x5f6)+_0x5db617(0x205)],_0x5a1461[_0x5db617(0x5da)+'ength']);continue;case'5':var _0x400c3b=_0x5efb24['keyTy'+'pe']==='u8'?_0x467187['getUi'+_0x5db617(0x218)](_0x5efb24[_0x5db617(0x1f6)]):_0x467187['getIn'+_0x5db617(0x5ca)](_0x5efb24[_0x5db617(0x1f6)],!![]);continue;case'6':var _0x5a1461=_0x12969e(_0x434217,_0x235cb1,_0x5efb24[_0x5db617(0x356)]);continue;case'7':return _0x531d55(_0x434217+_0x235cb1+_0x5efb24['hidde'+'n'],'i32',_0x5c46d4^_0x400c3b)&&_0x531d55(_0x5b6eaa[_0x5db617(0x53f)](_0x434217,_0x235cb1)+_0x5efb24[_0x5db617(0x4ee)],_0x5b6eaa[_0x5db617(0x5e1)](_0x46bb0a,_0x5b6eaa[_0x5db617(0x1e3)])?_0x5b6eaa[_0x5db617(0x2d5)]:_0x46bb0a===_0x5db617(0x47d)?'i32':'u8',_0x5b6eaa['KXKTq'](_0x46bb0a,_0x5db617(0x334))?_0x301ff8:_0x5b6eaa[_0x5db617(0x2a3)](_0x46bb0a,_0x5b6eaa['bvpGF'])?_0x5b6eaa[_0x5db617(0x406)](_0x301ff8,0x901+0x1*-0x1a7e+0x117d):_0x301ff8?-0x24e6+0x21b4*0x1+-0x111*-0x3:0x10af*0x1+-0x1019*0x1+0xf*-0xa)&&_0x5b6eaa['keSuU'](_0x531d55,_0x434217+_0x235cb1+_0x5efb24[_0x5db617(0x3fa)+'e'],'u8',-0xf0e+-0x1904+0x2812);}break;}}else{if(_0x5325fe[_0x5db617(0x5a4)](_0x4ea637['kind'],_0x5325fe[_0x5db617(0x37d)])){_0x20a487()['set']({'host':_0x1152cf[_0x5db617(0x452)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x1bd8f9[_0x5db617(0x306)]===_0x5325fe['NUWgu'])_0x5325fe[_0x5db617(0x545)](_0x16563d)['set'](_0x25ef88['repor'+'t']);}}var _0x49b315={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0x5d2a82={},_0x3ce3fa=-0x15ff+-0x104b+0x264a;function _0xab138b(_0x4feedd){var _0x57211b=_0x2bf26f,_0x433cc0=_0x351e2b[_0x57211b(0x548)+_0x57211b(0x60e)+_0x57211b(0x654)]||[];for(var _0x5f0f4b=-0x1*-0x145a+-0x200+-0x125a;_0x5f0f4b<_0x433cc0[_0x57211b(0x530)+'h'];_0x5f0f4b++){var _0x249998=_0x433cc0[_0x5f0f4b][0x3*0x610+0x65*-0x47+0x9d3];if(_0x433cc0[_0x5f0f4b][0x2136+-0x1*0x1202+-0xf33]!==_0x5b6eaa['ucAnl'])continue;var _0xfc5ced=_0x14d563(_0x4feedd,_0x249998,'obfF');if(!_0xfc5ced||_0x5b6eaa[_0x57211b(0x468)](_0xfc5ced['inite'+'d'],0x178*0x8+0x1a3f*0x1+-0x25fe))continue;var _0x16e0bb=_0x2b5a3d(_0x5b6eaa['ucAnl'],_0xfc5ced[_0x57211b(0x62e)+'n'],_0xfc5ced[_0x57211b(0x332)+_0x57211b(0x608)+'t0']);if(_0x5b6eaa[_0x57211b(0x523)](typeof _0x16e0bb,'numbe'+'r')||!_0x5b6eaa[_0x57211b(0x2fe)](isFinite,_0x16e0bb))continue;if(Math['abs'](_0x16e0bb)<_0x49b315[_0x57211b(0x304)]||_0x5b6eaa['SAdGe'](Math['abs'](_0x16e0bb),_0x49b315['max']))continue;var _0x36a4d7=_0x5b6eaa[_0x57211b(0x56d)](_0x4feedd+':',_0x249998),_0x57d0c8=_0x5d2a82[_0x36a4d7];if(!_0x57d0c8||_0x16e0bb!==_0x57d0c8[_0x57211b(0x5ad)+_0x57211b(0x2d6)+'n'])_0x57d0c8=_0x5d2a82[_0x36a4d7]={'base':_0x16e0bb,'lastWritten':null};var _0x4b3c58=_0x57d0c8[_0x57211b(0x49e)]*_0x49b315[_0x57211b(0x49f)+'r'];_0x5d2fdd(_0x4feedd,_0x249998,'obfF',_0x4b3c58)&&(_0x5b6eaa[_0x57211b(0x2a3)](_0x5b6eaa[_0x57211b(0x500)],_0x5b6eaa['YBocm'])?_0x405d12['textC'+_0x57211b(0x522)+'t']=_0x437f1b(_0x1aca93):(_0x57d0c8[_0x57211b(0x5ad)+_0x57211b(0x2d6)+'n']=_0x4b3c58,_0x3ce3fa++));}}var _0x351e2b={'FPScontroller':[[0x16e1*-0x1+-0x53d*0x5+0x3122,'obfF'],[-0x43e*0x9+-0x21f*-0x8+0x155e,'obfF'],[0x18af+0x131e*0x2+0x1*-0x3eab,_0x5b6eaa[_0x2bf26f(0x1e3)]],[0x1dd0+0x973*0x2+0x182f*-0x2,_0x2bf26f(0x334)],[0x45e+0x1db5+-0x21a3,_0x5b6eaa['ucAnl']],[-0x4e2+0x7ba+0x10*-0x25,_0x5b6eaa[_0x2bf26f(0x1e3)]],[0x9*-0xca+0x1018+-0x85e,_0x2bf26f(0x334)],[-0x1*-0x143b+-0x3*-0x2f+-0x18*0xd6,_0x2bf26f(0x29b)],[-0x1631+-0xc56+0x234b,_0x5b6eaa[_0x2bf26f(0x1e3)]],[-0x566+0x10ce+-0xa8c,_0x5b6eaa[_0x2bf26f(0x2cc)]],[-0x1d*-0xf2+0x17aa+-0x3228,'u8'],[-0x45+-0x7*-0x441+0x3*-0x986,'obfF'],[-0x1bc7*-0x1+-0x1ac8+-0x1*-0x9,_0x2bf26f(0x5bb)],[0x2596+0x1136+0x158*-0x28,'u8'],[0x1*-0x2441+0xa7c+0x1ad5,_0x5b6eaa['FqhBX']],[0x1*-0x14f+-0xbe*0x23+0x1*0x1c5d,'u8'],[0x512*0x2+0xb0*0x4+-0xbcf,'u8'],[0x1f53+0x1800+-0x3637,_0x5b6eaa[_0x2bf26f(0x1e3)]],[-0x851*0x2+0x505*0x1+-0xcd1*-0x1,_0x2bf26f(0x334)],[0x1470+0xc50+-0x1f74,_0x2bf26f(0x557)],[-0xb0e+0x13a*0x2+0x9ea,_0x2bf26f(0x557)],[0x1*-0x219e+0x1589+0x1*0xd81,_0x2bf26f(0x557)],[0x1c1*-0x1+-0x5d5+-0x3*-0x302,'f32'],[-0x692*-0x1+-0x907*0x1+-0x1*-0x3fd,'u8'],[0x112e+-0x567*-0x5+-0x2aa5,'f32'],[-0x1*-0x685+-0x6*-0x207+-0x110b,'u8'],[0x2*0x109d+-0x25a8+0x622,'f32'],[-0xf*-0xfd+0xad5+-0x17f0,_0x2bf26f(0x557)],[0x1847+0x86e+-0x1ef9,'u8'],[0x1*-0xfa3+-0x644*-0x2+-0x7c*-0xa,'u8'],[0xa*0x116+-0x515+-0x407,'obfF'],[0x47f*0x6+-0x1fc*0xd+0xaa,_0x2bf26f(0x557)],[0x352+0x1231+-0x13a7,'u8'],[0x1c7a+-0x1*0x72e+-0x136c,_0x5b6eaa[_0x2bf26f(0x1e3)]],[-0x4a*-0x74+0x500+-0x2480,_0x2bf26f(0x29b)],[0x1f9d+0x2428+0x2b*-0x187,'f32'],[-0x1*-0x1418+-0x22cd+0x5*0x35d,_0x2bf26f(0x557)],[-0x2*-0x3d7+0x1d0f+-0x2271,_0x5b6eaa[_0x2bf26f(0x2d5)]],[-0xafd*-0x3+0xb4b+-0x29f2,_0x2bf26f(0x557)],[-0xfe3+-0x855+-0x2*-0xd46,_0x5b6eaa[_0x2bf26f(0x2d5)]],[0x234a+0xe39+0x7*-0x6bd,_0x5b6eaa[_0x2bf26f(0x2d5)]],[-0x420+0x1220+-0x95*0x14,'u8'],[-0x337*0x9+-0x2266+0x41b2,'u8'],[-0x2*-0x128f+-0x132+-0x218e*0x1,'u8'],[-0x21f5*-0x1+0x2b*-0xe8+0x763,_0x5b6eaa['gnQpc']],[0x2ce*-0x6+-0x583*0x3+0x3f9*0x9,'u8'],[-0x1ba5+0x1*0x2083+-0x279*0x1,'u8'],[-0x7*-0x45d+0x23e5+0x556*-0xc,_0x5b6eaa['gnQpc']],[-0x1*0x201e+0x148b+0xdff,_0x5b6eaa[_0x2bf26f(0x2d5)]],[0x73*-0x47+-0x1d0d+-0x1ab*-0x26,_0x5b6eaa[_0x2bf26f(0x2d5)]],[0x1*0x1a06+-0x129d+-0x4f5,_0x2bf26f(0x557)],[-0x1718+0xb5a+-0x11*-0xd6,_0x2bf26f(0x557)],[0x34*-0x86+0x90f+-0x5*-0x421,_0x2bf26f(0x557)],[-0x5b1*-0x1+-0x248b+0x215a,_0x5b6eaa[_0x2bf26f(0x2d5)]],[-0x2*0x1332+0xa9d+0x1e5b,'u8'],[0x1c61+0x13bd+-0x2d7a*0x1,_0x5b6eaa['gnQpc']],[-0x14e1+0x5c6+-0x11d3*-0x1,_0x5b6eaa[_0x2bf26f(0x2d5)]],[0xbf3+0x225+-0xb5c,_0x5b6eaa['gnQpc']],[-0x1*0x1763+-0xdeb*-0x1+-0x88*-0x17,'f32'],[0xc57+0x1de7+-0x277a,'u8'],[-0x1*-0x1908+-0x73*-0x31+0x2*-0x1623,'u8'],[-0x5d5+0x3f*-0x33+0x306*0x7,_0x5b6eaa[_0x2bf26f(0x2d5)]],[-0x15*-0x47+-0x23a3+0xf6*0x22,_0x5b6eaa[_0x2bf26f(0x2d5)]],[-0x1*0x1e26+-0x22*0x49+0x1*0x2ad4,_0x5b6eaa[_0x2bf26f(0x2d5)]],[-0xb41+0x505+-0x4*-0x24f,_0x5b6eaa[_0x2bf26f(0x2d5)]],[-0x7*0x535+-0x2316+0x4a8d,_0x5b6eaa[_0x2bf26f(0x2d5)]],[0x1*0x809+0xb9a+-0x109b,_0x2bf26f(0x557)],[-0x3b*0x11+0x6*-0x3af+-0x101*-0x1d,'u8'],[-0x1265+0x1d24+-0x797,_0x5b6eaa[_0x2bf26f(0x2cc)]],[-0x8a6*0x3+0xa0f+-0x11f*-0x11,_0x2bf26f(0x557)],[0xde8+-0x1*-0x371+0x19*-0x91,_0x2bf26f(0x557)],[0x1cd*-0x7+0x21cd+-0x7*0x292,_0x5b6eaa['gnQpc']],[-0x1*0x1dfe+0x14bc+0xc7e,_0x2bf26f(0x557)],[0xf17*0x2+-0x1901+-0x1*0x1ed,'u8'],[0x13b5+0x1cf*-0x5+-0x769,'u8'],[0x1284+0x223*-0xa+0x1*0x626,'u8'],[0xd92+-0x12bf+0x136*0x7,'u8'],[-0x5*-0x60e+-0x1*0x3bb+-0x173d,'u8'],[-0x3c7*0x1+0x7b5*-0x1+0xecc,_0x2bf26f(0x557)],[-0xa6*0x39+-0x19f2*-0x1+0xe58,_0x2bf26f(0x557)],[0x1a3a+-0x369+0x5*-0x3e5,_0x2bf26f(0x557)],[-0x10d*0x1c+0x26ad*0x1+0x5e5*-0x1,_0x5b6eaa['gnQpc']],[-0x3*0x169+-0x1d9*0x7+0x148a,_0x2bf26f(0x557)],[-0x71a+-0x29f+0xd1d,'u8'],[-0x1*-0xe87+0xf99+-0x1ab8,_0x5b6eaa[_0x2bf26f(0x2d5)]],[0x1d58+-0x23+-0x19c9,_0x2bf26f(0x557)],[0x1e2a+-0xc2e+-0xe8c,'u8'],[-0xc9d*-0x1+-0x5*-0x4d9+-0x213e,_0x2bf26f(0x557)],[0x1344+0x18b2+-0x2856,_0x5b6eaa[_0x2bf26f(0x2d5)]],[-0x2541+0x1*-0x59+0x293e,_0x5b6eaa['gnQpc']],[-0x153d+0xb9+0x1838,'i32'],[-0x3*-0x29+0x1f53+-0xa*0x2cf,'u8'],[-0x61a+-0xc30+0x1606,_0x5b6eaa[_0x2bf26f(0x2cc)]],[0x457*-0x1+-0x8*-0x2d4+-0xe89,_0x5b6eaa[_0x2bf26f(0x2d5)]],[0x2353+0x107*0x4+-0x1*0x23ab,_0x5b6eaa[_0x2bf26f(0x2d5)]],[-0x1d69*0x1+-0x6be*0x3+0x356b,_0x5b6eaa[_0x2bf26f(0x2d5)]],[0x1*0xc1b+0x2567+-0x2db6*0x1,_0x5b6eaa[_0x2bf26f(0x2d5)]],[0x14f9*0x1+-0x21b+0x71*-0x22,'i32'],[-0x2000+0x7*0x3d6+0x42*0x23,'u8'],[0x266b+0x9*0x10c+-0x2bf6,'u8'],[0x801+0x2*-0x10a7+0x1d2f,'u8'],[-0xde2*0x2+0x23d0+0x7*-0x98,_0x2bf26f(0x557)],[-0x178*-0xf+0x17d*-0x1a+-0x1*-0x1492,'i32']],'HealthScript':[[0x34e*-0x5+0x1506+-0x428,'u8'],[0x1ddc+0x1*0xa2e+-0x27ae,_0x2bf26f(0x5bb)],[0x31*0xa3+0x2287*-0x1+0x3d4,_0x2bf26f(0x557)],[-0x13a7+0x1387+0xa4,_0x2bf26f(0x557)],[0x1421+0x77d+-0x1b16,_0x5b6eaa['gnQpc']],[-0x1*0x5c1+0x4a*-0x3+0x16f*0x5,_0x5b6eaa['gnQpc']],[-0x2e3*-0x8+-0x1980+0x2f8,_0x5b6eaa[_0x2bf26f(0x2d5)]],[0x1*0xf2c+0x1eda*-0x1+0x1*0x1042,'f32'],[0x186f+-0xf6d*0x2+-0x259*-0x3,'i32'],[0x1f8e*0x1+0xea1+-0x2d8b,'i32'],[0x6ac+0xc8e+-0x1292,'u8'],[0x2532+-0x1*0x210b+0x37e*-0x1,'u8'],[-0xfc1+-0x9c2+-0x1a2d*-0x1,'u8'],[0x7*-0x1dc+0xdb7+-0x8,'u8'],[0x1352*0x2+0x6e1*-0x3+-0x1141,_0x2bf26f(0x47d)],[-0x3a1*0x1+0x3*0x233+0x1*-0x224,'obfI'],[-0x1*0x1788+-0x6b*0x1a+0x234e,'obfI'],[0xa1b+-0x15dc+0x1*0xcbd,_0x2bf26f(0x47d)],[-0x57f+-0x2346+0x29d5,_0x2bf26f(0x47d)],[0x22a4+0x1409+-0x3589,_0x2bf26f(0x29b)],[0x8b8+0x18ca+-0x2052,'obfF'],[0x712+0x6d7+-0xca1*0x1,_0x2bf26f(0x557)],[-0x10e6+-0x1862+-0x5*-0x884,_0x2bf26f(0x557)],[-0x1646+0xc24+0xb72,'f32'],[0x1cac+0x1*-0x2117+0x5bf,_0x5b6eaa['gnQpc']],[0x1e24+-0x843+0x67*-0x33,_0x2bf26f(0x557)],[0xe*0x157+0x1160+0x1*-0x22b2,_0x5b6eaa['gnQpc']],[-0x2045+-0x103c+0x48b*0xb,'f32'],[-0x10ec+-0xfca+0x2236,'u8'],[0x1e9*-0x1+-0xd1e*-0x1+-0x1*0x9a9,'u8'],[0x1265+0x1f67+-0x303c,_0x2bf26f(0x5bb)]],'PlayerConfig':[],'WeaponManager':[[0x1876+0x2268+-0x1d63*0x2,_0x5b6eaa['FqhBX']],[0x1956+-0x2*0xf08+-0x26b*-0x2,'i32'],[0x1*-0x1f7b+-0x64e+0x25e9,'u8'],[0x2*-0xf35+0x24b9+-0x62b,_0x2bf26f(0x5bb)],[0x8f*-0x1f+0x814+-0x1*-0x9a1,_0x2bf26f(0x334)],[0x20a5*-0x1+0x6f*-0x2+0x21ff,_0x5b6eaa[_0x2bf26f(0x2d5)]],[0x603+0xb*-0x110+0x631,_0x5b6eaa[_0x2bf26f(0x2cc)]],[-0x1ac1+0x2ab*0xc+-0x4bb,'u8'],[-0x5be+0x1*-0x245b+0x2aa2,'u8'],[-0x138+-0x1b7f+-0xe3*-0x21,_0x2bf26f(0x5bb)],[-0x1c53+-0x9*-0x19d+-0x265*-0x6,'f32'],[-0x1*-0x1951+-0x1*0x26e8+0xe2f,'f32'],[-0x22d7+0x137*0x14+0xb37,_0x2bf26f(0x5bb)],[0x1180+-0x252c+0x1468,'u8'],[0x235b+-0xd*-0x14d+-0xa48*0x5,_0x5b6eaa[_0x2bf26f(0x499)]],[-0x12a*0x21+-0x644+-0x2*-0x16cf,_0x5b6eaa['bvpGF']],[0x6f5*0x4+0x3*-0xbd5+0x8af,_0x5b6eaa[_0x2bf26f(0x2d5)]],[0x12aa+-0x28e*0x7+0x40,_0x5b6eaa[_0x2bf26f(0x2d5)]],[0x374*-0x4+-0x18e5+-0x27c1*-0x1,'f32'],[-0x1b68+-0x166f*0x1+0x1*0x32ef,_0x2bf26f(0x557)],[0x6de*-0x4+0x3a*0x2c+0x12a0,_0x5b6eaa[_0x2bf26f(0x2d5)]],[0x2281+-0x1*0x150f+-0xc4a,'u8'],[0xf3*0xf+0x911+0x1622*-0x1,'obfI'],[0x7*-0x53+-0x1*0x9f1+0xd76,'obfI'],[-0x1c*-0x76+0x73*-0xd+-0x71*0xd,_0x2bf26f(0x47d)],[0x1*-0x1ff9+-0x173f+-0x12e0*-0x3,_0x5b6eaa['sKjeo']],[-0x147+-0x137d+0x24*0x9e,_0x5b6eaa[_0x2bf26f(0x236)]],[-0x35*-0x67+0xc*-0x13a+-0x51b,_0x2bf26f(0x29b)],[-0x2fc*-0x1+-0x16fb+0x158b,_0x5b6eaa['sKjeo']],[-0xe96+-0x467*-0x1+0x3f1*0x3,_0x5b6eaa['sKjeo']],[0x2*-0x15d+-0x9*0x15f+0x1*0x10c1,_0x5b6eaa['bvpGF']],[0x17a7+-0x584*0x1+-0x2f*0x59,_0x2bf26f(0x5bb)],[0x20c8+0x2*-0xb6b+-0x822,'u8'],[0x5*0x41f+0x1d2f*-0x1+-0x4*-0x29a,'i32'],[-0x2*0xc3a+-0xf53+0x299f,'i32'],[-0x1*-0x509+-0x5e4+0x2db,'i32'],[0x207a+0x1b82+-0x6d*0x88,'u8'],[0x50*-0x32+-0x1*-0xcd5+-0x5*-0xfb,'u8'],[0xbab*-0x3+0x346*-0xa+0x45da,'u8'],[0x8*0x1c4+-0x22ec+0x16ea,'u8'],[0x15f5+-0x1*-0x134+-0x150a,'u8'],[-0x8f4+0x1*0xa5e+0xe6,_0x5b6eaa[_0x2bf26f(0x2cc)]],[0x5*0x21e+-0x10*-0x72+-0xf5e,'u8']],'GG_GameManager':[[-0x219d+0x219a+0x27,'u8'],[-0x59*-0x1+0x1f24+0x1f51*-0x1,_0x2bf26f(0x557)],[0xf1*0x27+-0x200c+-0x467,'u8'],[-0x2305+0x1ca5+-0xf3*-0x7,'u8'],[0x1b0c+-0x1a17+-0xad,_0x5b6eaa[_0x2bf26f(0x2d5)]],[0xf*-0xc3+0x2328+-0x7*0x359,_0x5b6eaa['gnQpc']],[0x47*-0x6e+0x12cb*0x2+0x362*-0x2,'i32'],[-0x1*0xe1d+0x3*-0xcb6+-0x2b*-0x139,_0x5b6eaa[_0x2bf26f(0x2cc)]],[-0x2*-0x1082+0xa7b+0x2b27*-0x1,'u8'],[0x152*-0x2+-0x10d1+0x13e9,'u8'],[0x1*0x2492+0xa6f*0x1+0x169*-0x21,_0x2bf26f(0x557)],[0x12a6+-0xfef*-0x2+0x1*-0x3208,_0x5b6eaa[_0x2bf26f(0x2d5)]],[0xfef+0x6b5+-0x1614,'i32'],[-0x1c9e+-0x68*0x1+-0x2*-0xecd,'u8'],[-0x176*-0x1+-0x1e4d+-0x1*-0x1d8b,_0x5b6eaa[_0x2bf26f(0x2cc)]],[0x1368+-0x123a+0x39*-0x2,_0x5b6eaa['FqhBX']],[-0x1d9c+-0x62*0x2b+0x2ed2,_0x5b6eaa[_0x2bf26f(0x2cc)]],[0x223e+-0x43*-0x7c+-0x41ca,_0x5b6eaa[_0x2bf26f(0x499)]],[0xe10+0x3*-0xb51+0x14df,_0x2bf26f(0x47d)],[-0x17*0x86+-0x1*-0xaa9+0x5*0x7d,_0x5b6eaa['bvpGF']],[0x2256+0x277*0x9+-0x1*0x3759,'u8'],[-0xe1c+-0x994+0x4*0x638,_0x5b6eaa['FqhBX']],[-0xa8a+0x617*-0x5+0x2a61,'u8'],[-0x965+0x1*0x193d+-0xe68,_0x5b6eaa[_0x2bf26f(0x2d5)]],[0x26e7+-0x3e*0x2f+-0x1a05*0x1,'u8'],[-0x17d8+0xa9c+0xec4,'u8'],[0x1e2*0x11+0x104f+-0x2ead,'u8'],[0x1401+0x61a+-0x1873,_0x5b6eaa['FqhBX']],[0x1df*0x1+0x25b6+-0x25e9,_0x2bf26f(0x557)],[0x3a*0x6+0x5f0+-0x59c,'u8'],[-0x1*-0x1a05+-0x43*-0x85+0x1*-0x3b23,'u8'],[0x1d5c+0xe5d+0x2a01*-0x1,_0x5b6eaa[_0x2bf26f(0x2cc)]],[-0xa91+0x851+0x5*0xcc,_0x2bf26f(0x5bb)],[0x1*0xdf7+0x11fc+-0x1e33,_0x5b6eaa[_0x2bf26f(0x2d5)]],[0xdd*-0x1+0x345+-0x52*0x2,_0x5b6eaa[_0x2bf26f(0x2cc)]],[0x29*0x8f+-0x2*0x89f+-0x3e1,_0x5b6eaa['gnQpc']],[-0xec3+-0x178c+0x281b,'i32'],[-0x2*-0x146+0x1*0x11e4+-0x12a0,_0x2bf26f(0x5bb)]]};function _0x4f9fec(_0x3336ab,_0x404dfd){var _0x3703c7=_0x2bf26f,_0x20ee69={'KajtH':_0x3703c7(0x1f7)+'n._ru'+'ntime'+'.reso'+'lveGa'+_0x3703c7(0x247),'ZNrnk':_0x3703c7(0x4a9),'omBCt':_0x5b6eaa[_0x3703c7(0x1e2)],'MKyee':_0x3703c7(0x5bb),'uaOuc':function(_0x962df2,_0x2033ef,_0x287f47){var _0x27b916=_0x3703c7;return _0x5b6eaa[_0x27b916(0x257)](_0x962df2,_0x2033ef,_0x287f47);},'avbBY':_0x3703c7(0x4f0)+'a-ski'+_0x3703c7(0x39a)+'z','SSaQD':function(_0x5569f1,_0x57a215){return _0x5569f1+_0x57a215;},'djdtC':function(_0x165851){return _0x165851();},'zwcwr':_0x3703c7(0x548)+_0x3703c7(0x60e)+'ler','OXfIP':function(_0x891c67,_0x442815){var _0x4ffdf3=_0x3703c7;return _0x5b6eaa[_0x4ffdf3(0x32e)](_0x891c67,_0x442815);},'lFyrl':_0x5b6eaa['gPSbc'],'QsedD':_0x5b6eaa['iAhMQ'],'CpgIS':_0x3703c7(0x46e)};return function(_0x4eb4e3){var _0x5a0c4f=_0x3703c7,_0x11e833={'unvhB':'funct'+'ion','jshob':_0x20ee69[_0x5a0c4f(0x520)],'cimfI':function(_0x10513,_0x48b1e0,_0xcec38a){var _0xcb82a2=_0x5a0c4f;return _0x20ee69[_0xcb82a2(0x364)](_0x10513,_0x48b1e0,_0xcec38a);},'lzuda':function(_0x21bc49,_0x5428e1){return _0x21bc49(_0x5428e1);},'pzlBZ':'Runti'+_0x5a0c4f(0x3b7)+_0x5a0c4f(0x438)+'lugin'+'\x20unav'+'ailab'+'le','VCoTo':_0x20ee69['avbBY'],'ayxYu':function(_0x5bc31a,_0x4fdf77){var _0x30260f=_0x5a0c4f;return _0x20ee69[_0x30260f(0x3cf)](_0x5bc31a,_0x4fdf77);},'fnZci':function(_0x461311){return _0x461311();}};try{if(_0x5a0c4f(0x5ea)!==_0x5a0c4f(0x5ea)){if(_0x2c986e['lengt'+'h'])return!![];if(!_0x5c1daa['Unity'+'WebMo'+_0x5a0c4f(0x525)]||!_0x20e9b8[_0x5a0c4f(0x45a)+_0x5a0c4f(0x429)+'dkit'][_0x5a0c4f(0x30b)+'me'])return![];var _0x38e4c5=_0x21220d[_0x5a0c4f(0x45a)+'WebMo'+'dkit']['Runti'+'me'];if(!_0x38e4c5['plugi'+'ns']||!_0x38e4c5[_0x5a0c4f(0x1f7)+'ns']['lengt'+'h'])return![];_0x5d3bbd=_0x1845ac['Unity'+_0x5a0c4f(0x429)+_0x5a0c4f(0x525)][_0x5a0c4f(0x436)+_0x5a0c4f(0x262)+'er'],_0x3607ff=_0x513930||_0x38e4c5['plugi'+'ns'][_0x38e4c5[_0x5a0c4f(0x1f7)+'ns'][_0x5a0c4f(0x530)+'h']-(0xec0*-0x1+0x43*0x81+0x656*-0x3)];if(!_0x4e6fff||typeof _0x2fe2ed[_0x5a0c4f(0x3c8)+_0x5a0c4f(0x276)]!==_0x11e833['unvhB'])return![];for(var _0x173a39=0x67f*-0x5+-0x5bc*-0x5+0x3cf;_0x173a39<_0x571519[_0x5a0c4f(0x530)+'h'];_0x173a39++){var _0x1b18f0=_0x3060b3[_0x173a39];try{var _0x101f56=_0x299e97['hookP'+_0x5a0c4f(0x276)]({'typeName':_0x1b18f0['type'],'methodName':_0x5a0c4f(0x59f)+'e','params':[_0x5a0c4f(0x5bb),_0x11e833[_0x5a0c4f(0x44e)]],'returnType':_0x10865d},_0x11e833[_0x5a0c4f(0x625)](_0x523395,_0x1b18f0['type'],_0x1b18f0[_0x5a0c4f(0x2bb)]));_0x73be63[_0x5a0c4f(0x52f)]({'type':_0x1b18f0['type'],'hook':_0x101f56,'keep':_0x1b18f0['keep']});}catch(_0x48ee7b){_0x461cd5['push'](_0x1b18f0[_0x5a0c4f(0x423)]+':\x20'+_0x11e833[_0x5a0c4f(0x2f5)](_0x511f81,_0x48ee7b&&_0x48ee7b[_0x5a0c4f(0x26b)+'ge']||_0x48ee7b)['slice'](-0x1247+0x2544+-0x12fd*0x1,-0x1*0x22f9+0x19*0x9b+0x1476));}}return _0xfbd109[_0x5a0c4f(0x530)+'h']>0x2067+0x1686+-0x36ed;}else{var _0x495a04=_0x4eb4e3&&_0x4eb4e3[_0x5a0c4f(0x2ad)]?_0x4eb4e3[_0x5a0c4f(0x2ad)]():0x2510+0x21*0xfe+0x22e7*-0x2;if(!_0x495a04)return;var _0xbbadf3=_0x1ea113[_0x3336ab];if(!_0xbbadf3||_0xbbadf3[_0x5a0c4f(0x208)]!==_0x495a04){_0x1ea113[_0x3336ab]={'ptr':_0x495a04,'firstSeen':Date[_0x5a0c4f(0x4e7)](),'hits':0x0,'replaced':!!_0xbbadf3};try{var _0x1dca77=_0x2fdd6[_0x5a0c4f(0x2d0)+'r'](function(_0x17051f){var _0x7e1cde=_0x5a0c4f;return _0x17051f[_0x7e1cde(0x423)]===_0x3336ab;})[0xa5a*0x1+0x21cf+-0x2c29];_0x27b072={'type':_0x3336ab,'atMs':Date[_0x5a0c4f(0x4e7)]()-_0x5eda0c,'originalFunc':!!(_0x1dca77&&_0x1dca77['hook']&&typeof _0x1dca77['hook']['origi'+'nalFu'+'nc']===_0x5a0c4f(0x59c)+_0x5a0c4f(0x5eb)),'resolveGameAtFire':!!_0x20ee69[_0x5a0c4f(0x442)](_0x3bf365),'gameSourceAtFire':_0x5146fb['sourc'+'e']};}catch(_0x5dfe57){}}_0x1ea113[_0x3336ab][_0x5a0c4f(0x28c)]++;if(_0x3336ab===_0x20ee69[_0x5a0c4f(0x426)]&&_0x49b315['on'])try{_0x20ee69['OXfIP'](_0xab138b,_0x495a04);}catch(_0x3566c8){}if(!_0x404dfd){if(_0x20ee69[_0x5a0c4f(0x5ae)]===_0x20ee69['QsedD'])return _0x4fb63a['sourc'+'e']=_0x20ee69[_0x5a0c4f(0x590)],_0x55f258;else{var _0x1dca77=_0x2fdd6[_0x5a0c4f(0x2d0)+'r'](function(_0x3b4166){var _0x5144e1=_0x5a0c4f;if(_0x20ee69['ZNrnk']!==_0x5144e1(0x4a9)){var _0x572d3b=_0x4d2ee5['Unity'+'WebMo'+'dkit']&&_0x5d79c1[_0x5144e1(0x45a)+'WebMo'+'dkit'][_0x5144e1(0x30b)+'me'];if(!_0x572d3b||typeof _0x572d3b['creat'+_0x5144e1(0x441)+'in']!=='funct'+'ion'){_0x44febd[_0x5144e1(0x4e9)]=_0x11e833['pzlBZ'];return;}_0x5af071[_0x5144e1(0x39f)+'pted']=!![],_0x46ce6d=_0x572d3b['creat'+_0x5144e1(0x441)+'in']({'name':_0x11e833[_0x5144e1(0x5f5)],'version':_0x56bee7,'referencedAssemblies':_0x3e00cc['slice']()}),_0x41db21['ok']=!![];try{var _0x62bd08=_0x496533[_0x5144e1(0x45a)+_0x5144e1(0x429)+_0x5144e1(0x525)][_0x5144e1(0x30b)+'me'];_0x62bd08['__sak'+'uraTa'+'g']=_0x11e833['ayxYu'](_0x146d1a,':')+_0x4d2ebf[_0x5144e1(0x34a)+'m']()[_0x5144e1(0x21a)+'ing'](-0x1136+-0x688+-0x1*-0x17e2)['slice'](-0x2308+-0x88*0x31+-0x2*-0x1e89,-0x1fa9+0x56e+-0x541*-0x5),_0x5a6383=_0x62bd08[_0x5144e1(0x35f)+_0x5144e1(0x2b6)+'g'];}catch(_0x485dd6){}_0x5a74e1(),_0x3928eb[_0x5144e1(0x2e7)+_0x5144e1(0x603)+'tered']=_0x5d6540[_0x5144e1(0x530)+'h'],_0x11e833[_0x5144e1(0x554)](_0x1e7dbe),_0x26eec7['memor'+_0x5144e1(0x553)]=!![];}else return _0x3b4166['type']===_0x3336ab;})[0xcf+-0x91e*0x2+0x116d];if(_0x1dca77&&_0x1dca77[_0x5a0c4f(0x37a)]){if(_0x20ee69[_0x5a0c4f(0x398)]==='CiQsY')try{_0x1dca77['hook'][_0x5a0c4f(0x1ef)+'ed']=![];}catch(_0x45ca96){}else{var _0x93d11c={'Mepze':function(_0x1216de,_0x4696db){return _0x1216de===_0x4696db;},'iJUCn':function(_0x4c0e72,_0x4c1f23){return _0x4c0e72===_0x4c1f23;},'YxpMF':_0x20ee69['omBCt']},_0x164659=new _0x4a463a(_0x5a0c4f(0x4f0)+_0x5a0c4f(0x1dc));_0x164659[_0x5a0c4f(0x509)+'sage']=function(_0x236ae1){var _0x228204=_0x5a0c4f,_0x40ae2c=_0x236ae1[_0x228204(0x300)];if(_0x40ae2c&&_0x93d11c['Mepze'](_0x40ae2c[_0x228204(0x35f)+'ura'],_0x40baaf)&&_0x93d11c['iJUCn'](_0x40ae2c[_0x228204(0x306)],_0x93d11c[_0x228204(0x511)]))_0x15989b(_0x40ae2c[_0x228204(0x3c1)],_0x40ae2c['arg']);};}}}}}}catch(_0x2b1b37){}};}function _0x28f9d9(){var _0x2d5e25=_0x2bf26f;if(_0x5b6eaa['yLGHa'](_0x5b6eaa['hsIEn'],_0x2d5e25(0x212))){if(_0x2fdd6['lengt'+'h'])return!![];if(!window[_0x2d5e25(0x45a)+_0x2d5e25(0x429)+_0x2d5e25(0x525)]||!window[_0x2d5e25(0x45a)+_0x2d5e25(0x429)+_0x2d5e25(0x525)]['Runti'+'me'])return![];var _0x141db0=window['Unity'+'WebMo'+_0x2d5e25(0x525)][_0x2d5e25(0x30b)+'me'];if(!_0x141db0[_0x2d5e25(0x1f7)+'ns']||!_0x141db0['plugi'+'ns'][_0x2d5e25(0x530)+'h'])return![];_0x4133f5=window['Unity'+_0x2d5e25(0x429)+_0x2d5e25(0x525)][_0x2d5e25(0x436)+_0x2d5e25(0x262)+'er'],_0x12a991=_0x12a991||_0x141db0['plugi'+'ns'][_0x141db0[_0x2d5e25(0x1f7)+'ns'][_0x2d5e25(0x530)+'h']-(-0x104+0x1*-0x1c6+0x2cb)];if(!_0x12a991||_0x5b6eaa['zFImo'](typeof _0x12a991[_0x2d5e25(0x3c8)+_0x2d5e25(0x276)],_0x2d5e25(0x59c)+_0x2d5e25(0x5eb)))return![];for(var _0x564d41=0x427+0xef0+-0x1317;_0x5b6eaa['PtRWb'](_0x564d41,_0xf2d71f[_0x2d5e25(0x530)+'h']);_0x564d41++){var _0x4d4511=_0xf2d71f[_0x564d41];try{var _0x3995a2=_0x12a991['hookP'+_0x2d5e25(0x276)]({'typeName':_0x4d4511[_0x2d5e25(0x423)],'methodName':'Updat'+'e','params':[_0x5b6eaa[_0x2d5e25(0x2cc)],_0x2d5e25(0x5bb)],'returnType':undefined},_0x5b6eaa[_0x2d5e25(0x390)](_0x4f9fec,_0x4d4511['type'],_0x4d4511[_0x2d5e25(0x2bb)]));_0x2fdd6['push']({'type':_0x4d4511[_0x2d5e25(0x423)],'hook':_0x3995a2,'keep':_0x4d4511[_0x2d5e25(0x2bb)]});}catch(_0x52c27c){if('ndMbv'!=='JCgOj')_0x2321f6['push'](_0x5b6eaa['Tkjps'](_0x4d4511[_0x2d5e25(0x423)],':\x20')+String(_0x52c27c&&_0x52c27c['messa'+'ge']||_0x52c27c)[_0x2d5e25(0x3bb)](-0x21*-0x125+-0xb4a+-0x1a7b,-0x1a11*-0x1+0x13*-0xd6+0x1*-0x98f));else return _0x2fac2b[_0x2d5e25(0x4ff)+'e']='Runti'+_0x2d5e25(0x56b)+'solve'+'Game('+')',_0x531135;}}return _0x2fdd6[_0x2d5e25(0x530)+'h']>-0x5*-0x76b+0x178c+0x1*-0x3ca3;}else return _0x2e583d();}function _0x3b8701(){var _0x107069=_0x2bf26f,_0x39ecec=0xb85+-0x505+-0x680;for(var _0x179b06=-0x7*-0x485+-0x3*0x119+0x1*-0x1c58;_0x5b6eaa['ZMWNB'](_0x179b06,_0x2fdd6[_0x107069(0x530)+'h']);_0x179b06++){if(_0x2fdd6[_0x179b06][_0x107069(0x37a)]&&_0x2fdd6[_0x179b06]['hook']['table'+_0x107069(0x1f8)]!==undefined)_0x39ecec++;}return _0x39ecec;}function _0x4a4994(){var _0x21dbd6=_0x2bf26f,_0x20b4c4=0xd40+-0xa5e+-0x2e2;for(var _0x4b6094=-0x8*0x17b+-0x1fe2+0x1d*0x182;_0x4b6094<_0x2fdd6[_0x21dbd6(0x530)+'h'];_0x4b6094++){if(_0x2fdd6[_0x4b6094][_0x21dbd6(0x37a)]&&_0x2fdd6[_0x4b6094]['hook'][_0x21dbd6(0x339)+'ed'])_0x20b4c4++;}return _0x20b4c4;}var _0x378e21=null,_0x4bbccd=[],_0x3e5f61={},_0x27b072=null;function _0x428814(_0x3dad79){var _0x4e025f=_0x2bf26f,_0x18db6a={'IXXjZ':function(_0x44f41c,_0x3fd540){return _0x44f41c<_0x3fd540;}};try{if(!_0x4133f5||!_0x3dad79)return null;var _0x4ea1b1=new _0x4133f5(_0x3dad79)[_0x4e025f(0x298)+_0x4e025f(0x4d4)+'me']();return _0x5b6eaa[_0x4e025f(0x2ef)](_0x4ea1b1,undefined)?null:_0x4ea1b1;}catch(_0x22bbb2){if(_0x5b6eaa[_0x4e025f(0x252)](_0x5b6eaa['cRpyl'],'FWDWz'))return null;else{var _0x145ab2=new _0x389dcb(_0x300771);for(var _0x4e5a35=0x91*0x3e+0x1*-0xe73+0xb*-0x1e1;_0x18db6a['IXXjZ'](_0x4e5a35,_0x14cf6b);_0x4e5a35++)_0x145ab2[_0x4e5a35]=_0x3bb752[_0x4e025f(0x474)+'nt8'](_0x24a123+_0x1b9a26+_0x4e5a35);return _0x2ca89c['ok']++,_0x145ab2;}}}function _0x3624da(){var _0x2627fe=_0x2bf26f,_0x61896a={};_0x5146fb['ok']=0x140b+-0xda+-0x1*0x1331,_0x5146fb[_0x2627fe(0x643)+'d']=-0x2674+0x7fb*0x1+-0x1d*-0x10d,_0x5146fb[_0x2627fe(0x2e2)+_0x2627fe(0x580)]=null;var _0x39dc7b=Object[_0x2627fe(0x657)](_0x351e2b);for(var _0x53f59a=0x140f+0x919+0x74a*-0x4;_0x53f59a<_0x39dc7b['lengt'+'h'];_0x53f59a++){var _0xb38f7c=_0x39dc7b[_0x53f59a],_0x2a3bf3=_0x1ea113[_0xb38f7c];if(!_0x2a3bf3||!_0x2a3bf3['ptr'])continue;var _0x4d022f=_0x351e2b[_0xb38f7c]||[],_0x152a7a=[];for(var _0x4b95d3=0x1053+-0x6c3*-0x4+-0x2b5f;_0x4b95d3<_0x4d022f[_0x2627fe(0x530)+'h'];_0x4b95d3++){if(_0x5b6eaa[_0x2627fe(0x5cd)](_0x5b6eaa['mHUoy'],'tuWLM'))try{if(!_0x4fb60d||!_0x3c91f8)return null;var _0x5e7588=new _0xc41156(_0x323fe8)['getCl'+_0x2627fe(0x4d4)+'me']();return _0x5e7588===_0x370f35?null:_0x5e7588;}catch(_0x88f506){return null;}else{var _0x373253=_0x4d022f[_0x4b95d3][-0xf*-0x1c4+0x1730+-0x4*0xc6b],_0x1b305f=_0x4d022f[_0x4b95d3][-0xb87+0x12ea+-0x762];if(_0x1b305f[_0x2627fe(0x279)+'Of'](_0x2627fe(0x3f4))===0xb*0x13d+0x1d40+0x893*-0x5){var _0x165462=_0x5b6eaa[_0x2627fe(0x2f4)](_0x14d563,_0x2a3bf3['ptr'],_0x373253,_0x1b305f);if(!_0x165462)continue;_0x165462['o']=_0x373253,_0x165462['k']=_0x1b305f,_0x152a7a['push'](_0x165462);}else{var _0x68527c=_0x5b6eaa[_0x2627fe(0x4bf)](_0x50ee37,_0x5b6eaa['uvRfS'](_0x2a3bf3[_0x2627fe(0x208)],_0x373253),_0x1b305f);if(_0x68527c===undefined)continue;_0x152a7a['push']({'o':_0x373253,'k':_0x1b305f,'v':_0x68527c});}}}if(_0x152a7a[_0x2627fe(0x530)+'h']){var _0x498cfd=_0x5b6eaa['seQUp'](_0x382994,_0x152a7a);_0x61896a[_0xb38f7c]=_0x498cfd[_0x2627fe(0x3f8)],_0x3e5f61[_0xb38f7c]={'key':_0x498cfd[_0x2627fe(0x1f6)],'sane':_0x498cfd[_0x2627fe(0x64d)],'checked':_0x498cfd['check'+'ed'],'keyConsistent':_0x498cfd[_0x2627fe(0x517)+'nsist'+'ent'],'keySource':_0x498cfd[_0x2627fe(0x29f)+'urce']};}}return _0x61896a;}function _0x382994(_0x551dea){var _0x3e16be=_0x2bf26f,_0x51e4cb={'TLcGO':_0x3e16be(0x4eb)},_0x51639c=0xb8*0x10+0x4aa+0x102a*-0x1,_0x404019=0x3*0x5bb+-0x2481+0x3*0x670,_0x5da08e=null;for(var _0x2ca15b=-0x773+-0x27d+0x9f0;_0x5b6eaa['CUdbP'](_0x2ca15b,_0x551dea[_0x3e16be(0x530)+'h']);_0x2ca15b++){if('iYEEI'===_0x3e16be(0x307)){_0x462f26[_0x3e16be(0x4e9)]=_0x3e16be(0x30b)+_0x3e16be(0x3b7)+'eateP'+_0x3e16be(0x64c)+'\x20unav'+_0x3e16be(0x5ab)+'le';return;}else{var _0x1070c2=_0x551dea[_0x2ca15b];if(_0x1070c2['k']['index'+'Of'](_0x5b6eaa[_0x3e16be(0x635)])!==0x3a4*-0x8+0x22*-0x102+-0x3f64*-0x1)continue;_0x1070c2['v']=_0x5b6eaa[_0x3e16be(0x3e4)](_0x2b5a3d,_0x1070c2['k'],_0x1070c2[_0x3e16be(0x62e)+'n'],_0x1070c2[_0x3e16be(0x332)+'Offse'+'t0']),_0x1070c2[_0x3e16be(0x302)+'ed']=_0x1070c2[_0x3e16be(0x332)+_0x3e16be(0x608)+'t0'],_0x1070c2[_0x3e16be(0x347)]=_0x5b6eaa[_0x3e16be(0x5d7)](_0x3e16be(0x5e5)+_0x1070c2[_0x3e16be(0x62e)+'n']+('\x20fake'+'=')+_0x1070c2[_0x3e16be(0x4ee)]+(_0x1070c2['act']?_0x5b6eaa[_0x3e16be(0x494)]:'')+_0x5b6eaa[_0x3e16be(0x420)]+_0x1070c2[_0x3e16be(0x332)+_0x3e16be(0x608)+'t0']+_0x5b6eaa[_0x3e16be(0x1e5)],_0x1070c2['hex']);if(_0x5da08e===null)_0x5da08e=_0x1070c2[_0x3e16be(0x332)+_0x3e16be(0x608)+'t0'];_0x404019++,_0x5b6eaa['hfKLs'](_0x181488,_0x1070c2)?(_0x51639c++,_0x1070c2[_0x3e16be(0x64d)]=!![]):_0x5b6eaa[_0x3e16be(0x5cd)](_0x5b6eaa[_0x3e16be(0x435)],'AQAkL')?_0x1070c2[_0x3e16be(0x64d)]=![]:_0x16f143[_0x3e16be(0x512)+'eProp'+_0x3e16be(0x58b)](_0x2762d7,_0x51e4cb['TLcGO'],{'value':_0x3a3aa0['name'],'configurable':!![]}),delete _0x1070c2[_0x3e16be(0x396)];}}return{'rows':_0x551dea,'key':_0x5da08e,'sane':_0x51639c,'checked':_0x404019,'keyConsistent':_0x5b6eaa[_0x3e16be(0x636)](_0x37b574,_0x551dea),'keySource':_0x3e16be(0x358)+_0x3e16be(0x5f1)+'int-w'+'idth)'};}function _0x37b574(_0xb695df){var _0x414a26=_0x2bf26f,_0x17646a={};for(var _0x2367ea=-0x1*-0x7a2+-0x1ec1+0x171f*0x1;_0x2367ea<_0xb695df['lengt'+'h'];_0x2367ea++){var _0x3bc0be=_0xb695df[_0x2367ea];if(_0x3bc0be['k']['index'+'Of'](_0x5b6eaa[_0x414a26(0x635)])!==0x9*-0x37b+0x461+-0x1af2*-0x1)continue;if(_0x5b6eaa['gCCYR'](_0x17646a[_0x3bc0be['k']],undefined))_0x17646a[_0x3bc0be['k']]=_0x3bc0be['keyUs'+'ed'];else{if(_0x17646a[_0x3bc0be['k']]!==_0x3bc0be['keyUs'+'ed'])return![];}}return!![];}function _0x181488(_0x477da2){var _0x5e3fe6=_0x2bf26f,_0x39a5a7=_0x477da2['v'];if(typeof _0x39a5a7!==_0x5e3fe6(0x50a)+'r'||!isFinite(_0x39a5a7))return![];if(_0x477da2['k']===_0x5b6eaa[_0x5e3fe6(0x236)])return _0x5b6eaa['ZWbGJ'](_0x39a5a7,0x20f+-0x8a1*-0x1+-0xab0)||_0x39a5a7===-0x1a*-0x111+0xa01+-0x25ba;var _0x560573=_0x477da2[_0x5e3fe6(0x4ee)];if(typeof _0x560573!==_0x5b6eaa[_0x5e3fe6(0x36d)]||!_0x5b6eaa[_0x5e3fe6(0x51f)](isFinite,_0x560573))return!![];if(_0x477da2[_0x5e3fe6(0x51b)]===0xa7+-0xdbe*0x2+0x1ad6)return _0x5b6eaa[_0x5e3fe6(0x5c0)](Math[_0x5e3fe6(0x24c)](_0x39a5a7-_0x560573),Math['max'](0x121f*-0x1+-0xd71*-0x1+0x4af,Math[_0x5e3fe6(0x24c)](_0x560573)*(-0x1*0x25e2+0x1c1*0x11+0x811+0.6)));return Math[_0x5e3fe6(0x24c)](_0x39a5a7)<-0xc1bb58b+-0x2fffbbdf+-0x3bdb1db5*-0x2;}function _0x538a61(){var _0x4056a8=_0x2bf26f,_0x2ccc25={'rFDFv':function(_0xa7ceaa){return _0xa7ceaa();},'rMuQH':function(_0x3ee4aa){return _0x3ee4aa();},'OCgjs':function(_0x2a5bbb,_0x146955,_0x1c44cb){return _0x2a5bbb(_0x146955,_0x1c44cb);},'OXovM':function(_0x38dd4d,_0x2a856f){var _0x2583fc=_0x59dc;return _0x5b6eaa[_0x2583fc(0x457)](_0x38dd4d,_0x2a856f);}},_0x2f1931={};try{if(_0x4056a8(0x313)!==_0x4056a8(0x313)){if(!_0x2e83a0[_0x4056a8(0x530)+'h'])try{_0x2ccc25['rFDFv'](_0x551ef8);}catch(_0x110a18){}_0xa40daf++,_0x37dfe5(_0x2ccc25[_0x4056a8(0x3df)](_0x39f0d));if(!_0xce917['lengt'+'h']&&_0x724ebf<-0x212c+-0x1240+-0x264*-0x16)_0x2ccc25[_0x4056a8(0x3af)](_0x1a04f4,_0x4f43b9,0x12bb+0x744+-0x13*0xf5);else{if(!_0x1a86ca['keys'](_0x308e7d)[_0x4056a8(0x530)+'h']&&_0x2ccc25['OXovM'](_0x47f3e0,0x3*-0x707+-0x2587*-0x1+0x2*-0x7a3))_0x2c6ede(_0xf3bbb0,-0x25ad+0x22e+0x2b4f);else _0x2ccc25['OCgjs'](_0x37a0d0,_0x3bf3cc,0x46c+-0x396*-0x2+0x44*-0x1a);}}else{var _0x153355=window['Unity'+'WebMo'+_0x4056a8(0x525)]&&window[_0x4056a8(0x45a)+_0x4056a8(0x429)+_0x4056a8(0x525)][_0x4056a8(0x30b)+'me'];_0x2f1931['tag']=_0x153355&&_0x153355['__sak'+'uraTa'+'g']||null,_0x2f1931[_0x4056a8(0x623)+_0x4056a8(0x633)]=!!(_0x5b6eaa[_0x4056a8(0x3b3)](_0x153355,_0x3aeacc)&&_0x5b6eaa[_0x4056a8(0x1ed)](_0x153355['__sak'+_0x4056a8(0x2b6)+'g'],_0x3aeacc)),_0x2f1931['runti'+'meGam'+'e']=_0x153355&&_0x153355['_game']?typeof _0x153355[_0x4056a8(0x4a2)]:_0x4056a8(0x5d3),_0x2f1931[_0x4056a8(0x1f7)+_0x4056a8(0x23d)+_0x4056a8(0x2ac)+'Expor'+_0x4056a8(0x209)]=!!(_0x12a991&&_0x12a991['_runt'+'ime']&&_0x12a991['_runt'+_0x4056a8(0x48c)]===_0x153355),_0x2f1931[_0x4056a8(0x1f7)+'nRunt'+_0x4056a8(0x42c)+'me']=_0x12a991&&_0x12a991[_0x4056a8(0x58a)+_0x4056a8(0x48c)]&&_0x12a991[_0x4056a8(0x58a)+_0x4056a8(0x48c)][_0x4056a8(0x4a2)]?typeof _0x12a991['_runt'+'ime'][_0x4056a8(0x4a2)]:_0x5b6eaa[_0x4056a8(0x220)];}}catch(_0xbd6793){_0x2f1931[_0x4056a8(0x4e9)]=_0x5b6eaa['xyIXx'](String,_0xbd6793&&_0xbd6793['messa'+'ge']||_0xbd6793);}return _0x2f1931;}function _0x514bbc(){var _0x3b88ef=_0x2bf26f,_0xbda2a7=[_0x5b6eaa['ABtxH'],_0x5b6eaa[_0x3b88ef(0x2cf)],_0x3b88ef(0x589),_0x5b6eaa[_0x3b88ef(0x55d)]],_0x57ffc5={};for(var _0x1d3daf=-0x1dcc+0xb37+-0x47*-0x43;_0x5b6eaa[_0x3b88ef(0x2ae)](_0x1d3daf,_0xbda2a7[_0x3b88ef(0x530)+'h']);_0x1d3daf++){if(_0x5b6eaa['zzgNY'](_0x3b88ef(0x4f4),_0x5b6eaa['QORrH'])){var _0x3489b4=_0xbda2a7[_0x1d3daf],_0xa9ce81=typeof window[_0x3489b4];_0x57ffc5[_0x3489b4]=_0xa9ce81===_0x5b6eaa['lOtrV']?_0x5b6eaa[_0x3b88ef(0x5f2)]:_0xa9ce81;}else _0x4521ba[_0x3b88ef(0x5ad)+'ritte'+'n']=_0x1106d8,_0x21c134++;}var _0x370741=_0x3bf365();_0x57ffc5['gameS'+_0x3b88ef(0x567)]=_0x5146fb[_0x3b88ef(0x4ff)+'e'];try{_0x57ffc5['hasMo'+_0x3b88ef(0x2da)]=!!(_0x370741&&_0x370741[_0x3b88ef(0x480)+'e']),_0x57ffc5['heapU'+'8']=!!(_0x370741&&_0x370741['Modul'+'e']&&_0x370741[_0x3b88ef(0x480)+'e']['HEAPU'+'8']),_0x57ffc5[_0x3b88ef(0x314)+_0x3b88ef(0x4e1)]=_0x57ffc5[_0x3b88ef(0x4fd)+'8']?_0x370741['Modul'+'e'][_0x3b88ef(0x35c)+'8']['lengt'+'h']:0x1*-0x3e7+-0x2396+0x277d;}catch(_0x3d9603){_0x5b6eaa[_0x3b88ef(0x534)](_0x3b88ef(0x5bc),_0x5b6eaa[_0x3b88ef(0x21b)])?_0x15d2bb['remov'+'e']():(_0x57ffc5[_0x3b88ef(0x345)+'dule']=![],_0x57ffc5['heapU'+'8']=![],_0x57ffc5[_0x3b88ef(0x314)+_0x3b88ef(0x4e1)]=-0x694+0x986+-0x2*0x179);}return _0x57ffc5['value'+_0x3b88ef(0x262)+'er']=typeof _0x4133f5,_0x57ffc5;}function _0xf1d48e(_0x504cf0){var _0x45d78a=_0x2bf26f,_0x31c33c={};for(var _0x4df3a9 in _0x504cf0){var _0x22fb05=_0x504cf0[_0x4df3a9];for(var _0x2c4b63=-0x229e+-0x61b*0x1+-0x4b*-0x8b;_0x2c4b63<_0x22fb05[_0x45d78a(0x530)+'h'];_0x2c4b63++){_0x31c33c[_0x5b6eaa['AFCMe'](_0x4df3a9+_0x45d78a(0x44d),_0x22fb05[_0x2c4b63]['o'][_0x45d78a(0x21a)+_0x45d78a(0x2d2)](0x2062+0x63d+-0x268f*0x1))]=_0x22fb05[_0x2c4b63]['v'];}}return _0x31c33c;}function _0x5a3188(_0x4956fe,_0x36bb6e){var _0x235776=_0x2bf26f;if(_0x5b6eaa['oTaEa'](_0x4956fe,_0x235776(0x3ba))){if(_0x5b6eaa[_0x235776(0x36f)]('NimSf',_0x5b6eaa[_0x235776(0x280)])){if(_0x36bb6e&&_0x5b6eaa[_0x235776(0x5e1)](typeof _0x36bb6e['on'],_0x5b6eaa[_0x235776(0x431)]))_0x49b315['on']=_0x36bb6e['on'];if(_0x36bb6e&&typeof _0x36bb6e[_0x235776(0x49f)+'r']==='numbe'+'r'){if(_0x5b6eaa['Duhls'](_0x5b6eaa['NSerL'],_0x5b6eaa[_0x235776(0x1f0)])){var _0x5221f7=_0x43da93[_0x235776(0x45a)+'WebMo'+_0x235776(0x525)][_0x235776(0x30b)+'me'];_0x5221f7[_0x235776(0x35f)+'uraTa'+'g']=_0x234bb5+':'+_0x3e1986[_0x235776(0x34a)+'m']()[_0x235776(0x21a)+'ing'](-0x8aa+0x1bd2+0x4*-0x4c1)[_0x235776(0x3bb)](-0x1a89+-0x3*-0xbff+0x3e*-0x27,0x6be+0x1a10+0x831*-0x4),_0x18e1b8=_0x5221f7[_0x235776(0x35f)+_0x235776(0x2b6)+'g'];}else _0x49b315[_0x235776(0x49f)+'r']=Math[_0x235776(0x304)](0xe8+0xa45+0x3*-0x3b8,Math[_0x235776(0x43c)](-0x15c9+0x2*-0x11dc+0x3982,_0x36bb6e['facto'+'r']));}if(!_0x49b315['on'])_0x5d2a82={};return;}else _0x2975cf=_0x5b6eaa[_0x235776(0x4c0)](_0x5e5b1c[_0x235776(0x47a)]&&_0x5c9b50['arm']['ok']?_0x5b6eaa[_0x235776(0x238)]:'armin'+'g\x20·\x20',_0x429683)+'s',_0x59539a=_0x235776(0x50e)+'8a';}if(_0x5b6eaa['khQYO'](_0x4956fe,'snaps'+_0x235776(0x360)))return;var _0x54c827=_0x3624da(),_0x975cbe=_0xf1d48e(_0x54c827);if(!_0x378e21){_0x378e21=_0x975cbe,_0x4bbccd=[],_0x5b6eaa[_0x235776(0x51e)](_0x19896b,'repor'+'t',{'report':_0x5a5fd6()});return;}_0x4bbccd=[];for(var _0xa3720e in _0x975cbe){if(_0x5b6eaa[_0x235776(0x407)]===_0x235776(0x627)){var _0x27a554=_0x378e21[_0xa3720e],_0x4e8dce=_0x975cbe[_0xa3720e];if(_0x27a554!==_0x4e8dce)_0x4bbccd['push'](_0x5b6eaa['odapc'](_0xa3720e+':\x20',_0x27a554)+_0x5b6eaa['EUCWP']+_0x4e8dce);}else try{_0x2e5973[_0x235776(0x37a)][_0x235776(0x1ef)+'ed']=![];}catch(_0x5bcdff){}}_0x378e21=_0x975cbe,_0x19896b(_0x5b6eaa['DHJwZ'],{'report':_0x5a5fd6()});}window['addEv'+'entLi'+_0x2bf26f(0x2e9)+'r'](_0x5b6eaa['BDcFB'],function(_0x3c287b){var _0x2004c6=_0x2bf26f;if('NEpyW'===_0x2004c6(0x4ea)){var _0x2442ae=_0x4af6d7['Unity'+_0x2004c6(0x429)+'dkit']&&_0xb8607[_0x2004c6(0x45a)+_0x2004c6(0x429)+'dkit'][_0x2004c6(0x30b)+'me'];if(_0x2442ae&&_0x5b6eaa[_0x2004c6(0x455)](typeof _0x2442ae['resol'+'veGam'+'e'],_0x5b6eaa['nyqWT'])){var _0xdcb872=_0x2442ae['resol'+_0x2004c6(0x203)+'e']();if(_0xdcb872)return _0xbd6a49[_0x2004c6(0x4ff)+'e']=_0x5b6eaa[_0x2004c6(0x615)],_0xdcb872;}if(_0x2442ae&&_0x2442ae[_0x2004c6(0x4a2)])return _0xf0c7de['sourc'+'e']='Runti'+_0x2004c6(0x55b)+'ame',_0x2442ae;}else _0x3c287b&&_0x5b6eaa['BRRmj'](_0x3c287b[_0x2004c6(0x600)],'F9')&&(_0x3c287b[_0x2004c6(0x50d)+'ntDef'+_0x2004c6(0x402)](),_0x5b6eaa[_0x2004c6(0x235)](_0x5a3188,'snaps'+_0x2004c6(0x360)));},!![]);function _0x5a5fd6(){var _0x5be6f0=_0x2bf26f,_0x10b713={'vADUh':_0x5be6f0(0x371),'iUUHB':_0x5be6f0(0x397)+'g'},_0x4ab26e=window[_0x5be6f0(0x45a)+_0x5be6f0(0x429)+'dkit']&&window['Unity'+_0x5be6f0(0x429)+'dkit']['Runti'+'me']||null,_0x7345da=_0x4ab26e&&_0x4ab26e[_0x5be6f0(0x57f)+'pCont'+_0x5be6f0(0x2c3)],_0x5d2561=_0x7345da&&_0x7345da[_0x5be6f0(0x5a6)+_0x5be6f0(0x524)],_0x1e7a0d={},_0x5b0269=[];for(var _0x47eca4 in _0x1ea113){if(_0x5b6eaa['ZlDMZ']===_0x5be6f0(0x42e))_0x23dba3[_0x5be6f0(0x256)](_0x5b6eaa[_0x5be6f0(0x241)],_0x5b6eaa['nGPlv'](_0x5b6eaa['nRKxj']+_0x31dde8,_0x5be6f0(0x215)+_0x5be6f0(0x2d1)+'ht:70'+'0'),_0x52b815),_0x5abfbe[_0x5be6f0(0x256)](_0x5b6eaa[_0x5be6f0(0x412)](_0x473c4a+'\x0a'+_0x1251b5[_0x5be6f0(0x397)+'gify'](_0x4a6098,null,-0x1e6f+0x1fbf+0x43*-0x5)+'\x0a',_0x40be32)),_0x19e144('repor'+'t',{'report':_0x4e8121});else{_0x1e7a0d[_0x47eca4]='0x'+_0x1ea113[_0x47eca4][_0x5be6f0(0x208)][_0x5be6f0(0x21a)+_0x5be6f0(0x2d2)](-0x260a+0x1*-0xb8f+0x1*0x31a9);if(_0x1ea113[_0x47eca4][_0x5be6f0(0x546)+_0x5be6f0(0x46c)])_0x5b0269[_0x5be6f0(0x52f)](_0x47eca4);}}var _0x4b771f={};for(var _0x342576 in _0x1ea113)_0x4b771f[_0x342576]=_0x428814(_0x1ea113[_0x342576][_0x5be6f0(0x208)]);var _0x42252e={},_0x46fcc1=null;try{_0x42252e=_0x3624da();}catch(_0x4447ab){'yNJsa'!==_0x5b6eaa['kPUUf']?(_0x25fdf5=_0xb6c8e1,_0x32e27c=_0x28d37a['now']()-_0x2a71ba):_0x46fcc1=String(_0x4447ab&&_0x4447ab['messa'+'ge']||_0x4447ab);}var _0x2840e2={'version':_0x26b926,'when':new Date()[_0x5be6f0(0x34f)+_0x5be6f0(0x5fc)+'g'](),'elapsedMs':Date[_0x5be6f0(0x4e7)]()-_0x5eda0c,'frame':location[_0x5be6f0(0x637)][_0x5be6f0(0x3bb)](-0x1*0x1141+-0x22f3+0x3434,-0x17f9+-0x2f*-0x9+-0xb65*-0x2),'host':_0x20d729,'frameRole':_0x546f38,'uwmk':!!_0x4ab26e,'il2CppContext':!!_0x7345da,'typeCount':_0x5d2561?Object[_0x5be6f0(0x657)](_0x5d2561)['lengt'+'h']:null,'arm':_0x47d334,'assemblies':_0x308c8e,'hooksTotal':_0x2fdd6[_0x5be6f0(0x530)+'h'],'hooksApplied':_0x5b6eaa[_0x5be6f0(0x549)](_0x4a4994),'hooksResolved':_0x3b8701(),'hooksRegisteredAtArm':_0x47d334[_0x5be6f0(0x2e7)+'Regis'+_0x5be6f0(0x4c4)]||-0xeb7+0x6d*0x29+-0x2be,'hookErrors':_0x2321f6[_0x5be6f0(0x3bb)](0x1671+0x10*-0x147+-0x201*0x1,-0x16d1+-0xe31*0x1+0x250a),'instances':_0x1e7a0d,'classNames':_0x4b771f,'instancesReplaced':_0x5b0269,'hookFireProof':_0x27b072,'survey':_0x42252e,'actkKeys':_0x3e5f61,'surveyRows':Object[_0x5be6f0(0x657)](_0x42252e)[_0x5be6f0(0x61e)+'e'](function(_0x1e1477,_0x53d7d0){var _0xcd6da1=_0x5be6f0;return _0x1e1477+_0x42252e[_0x53d7d0][_0xcd6da1(0x530)+'h'];},-0x1*-0x21dd+0x10ed+-0x3*0x10ee),'reads':{'ok':_0x5146fb['ok'],'failed':_0x5146fb['faile'+'d'],'lastError':_0x5146fb['lastE'+_0x5be6f0(0x580)],'source':_0x5146fb['sourc'+'e']},'identity':_0x538a61(),'globals':_0x514bbc(),'wasmMemory':{'captured':!!_0x574c84,'atMs':_0x594449,'bytes':(function(){var _0x15684b=_0x5be6f0;try{return _0x10b713[_0x15684b(0x3ea)]==='dcXmC'?_0x574c84&&_0x574c84['buffe'+'r']?_0x574c84[_0x15684b(0x38e)+'r'][_0x15684b(0x5da)+_0x15684b(0x535)]:0x12d3+0x5c5*0x1+-0x1898:new _0x50e910(_0x4b8996['buffe'+'r'],_0x2bce26['byteO'+'ffset'],_0x41920d['byteL'+'ength']);}catch(_0x17f14f){return-0x234e+0x1778+0xbd6;}}()),'exportKeys':_0xc22445},'diff':_0x4bbccd[_0x5be6f0(0x3bb)](0xa3*-0x39+0xe22+-0xb7*-0x1f,0x1*0xb1d+-0x8c*0x32+0x1063),'speed':{'on':_0x49b315['on'],'factor':_0x49b315[_0x5be6f0(0x49f)+'r'],'writes':_0x3ce3fa},'uwmkLog':_0x57e50c['slice'](0xab4+-0x2*-0x896+-0x1be0,-0xc3a+0x5dc+0x6e*0xf),'warnings':[]};if(_0x46fcc1)_0x2840e2['warni'+'ngs'][_0x5be6f0(0x52f)](_0x5be6f0(0x261)+_0x5be6f0(0x591)+_0x5be6f0(0x618)+_0x46fcc1);if(_0x47d334['error'])_0x2840e2['warni'+'ngs']['push']('UWMK\x20'+'armin'+'g\x20fai'+_0x5be6f0(0x618)+_0x47d334['error']);_0x5b6eaa[_0x5be6f0(0x54e)](_0x2840e2[_0x5be6f0(0x261)+'yRows'],0x41e+0x1*-0x274+-0xd5*0x2)&&_0x5b6eaa['wkhVu'](Object['keys'](_0x2840e2[_0x5be6f0(0x41b)+'nces'])['lengt'+'h'],-0x151*0x11+0x2188+-0xb27)&&_0x2840e2[_0x5be6f0(0x3b9)+_0x5be6f0(0x64b)][_0x5be6f0(0x52f)](_0x5b6eaa['EUBUl']('captu'+_0x5be6f0(0x587),Object['keys'](_0x2840e2[_0x5be6f0(0x41b)+'nces'])[_0x5be6f0(0x530)+'h'])+_0x5b6eaa[_0x5be6f0(0x38d)]+(_0x5146fb['lastE'+_0x5be6f0(0x580)]?_0x5be6f0(0x52b)+'n:\x20'+_0x5146fb[_0x5be6f0(0x2e2)+_0x5be6f0(0x580)]:_0x5be6f0(0x4f9)+_0x5be6f0(0x31a)+'iled,'+_0x5be6f0(0x478)+_0x5be6f0(0x3a8)+_0x5be6f0(0x358)+_0x5be6f0(0x2f8)+_0x5be6f0(0x351)+'ped\x20b'+_0x5be6f0(0x222)+'e.'));if(_0x2840e2[_0x5be6f0(0x1f3)+_0x5be6f0(0x41e)]&&_0x2840e2[_0x5be6f0(0x1f3)+_0x5be6f0(0x41e)][_0x5be6f0(0x623)+_0x5be6f0(0x633)]===![]){if(_0x5be6f0(0x323)===_0x5be6f0(0x3de)){var _0x47afb9=arguments[_0x2f30c6];if(typeof _0x47afb9===_0x10b713['iUUHB'])_0x3b79fe+=_0x47afb9;else{if(_0x47afb9&&_0x47afb9['messa'+'ge'])_0x1501c7+=_0x47afb9[_0x5be6f0(0x26b)+'ge'];}}else _0x2840e2[_0x5be6f0(0x3b9)+_0x5be6f0(0x64b)]['push'](_0x5b6eaa[_0x5be6f0(0x5a7)](_0x5b6eaa['pCPKn']+(_0x5be6f0(0x546)+'ced\x20b'+'y\x20a\x20d'+_0x5be6f0(0x234)+_0x5be6f0(0x617)+_0x5be6f0(0x3ef)+_0x5be6f0(0x368)+'o\x20we\x20'+_0x5be6f0(0x27a)+'sking'+'\x20the\x20'+'wrong'+'\x20obje'+_0x5be6f0(0x555)+'r\x20')+('the\x20g'+_0x5be6f0(0x383)+_0x5be6f0(0x565)+'the\x20o'+_0x5be6f0(0x61c)+_0x5be6f0(0x5ba)+_0x5be6f0(0x2f6)+'s\x20orp'+_0x5be6f0(0x63c)+_0x5be6f0(0x5b3)+_0x5be6f0(0x381)+_0x5be6f0(0x4ca)+_0x5be6f0(0x2f1)+'r\x20'),_0x5b6eaa['mEPpj']));}_0x2840e2['ident'+_0x5be6f0(0x41e)]&&_0x2840e2[_0x5be6f0(0x1f3)+'ity'][_0x5be6f0(0x1f7)+'nRunt'+_0x5be6f0(0x2ac)+'Expor'+_0x5be6f0(0x209)]===![]&&(_0x5b6eaa[_0x5be6f0(0x5be)]==='nQRYg'?(_0x4068b2[_0x5be6f0(0x54a)+'omman'+'d'](_0x5b6eaa[_0x5be6f0(0x57a)]),_0x5b6eaa[_0x5be6f0(0x32d)](_0x30c8c3)):_0x2840e2['warni'+_0x5be6f0(0x64b)]['push'](_0x5b6eaa[_0x5be6f0(0x24f)]('plugi'+_0x5be6f0(0x586)+'ntime'+_0x5be6f0(0x361)+_0x5be6f0(0x3ad)+_0x5be6f0(0x533)+_0x5be6f0(0x45a)+_0x5be6f0(0x429)+_0x5be6f0(0x495)+_0x5be6f0(0x30b)+'me\x20-\x20'+'the\x20p'+'lugin'+_0x5be6f0(0x403)+'built'+'\x20',_0x5be6f0(0x1e4)+_0x5be6f0(0x5e7)+_0x5be6f0(0x282)+_0x5be6f0(0x32a)+'Runti'+_0x5be6f0(0x3e9)+_0x5be6f0(0x299)+'e\x20tha'+'n\x20the'+_0x5be6f0(0x2a7)+_0x5be6f0(0x41f)+_0x5be6f0(0x56f)+_0x5be6f0(0x244))));if(_0x2840e2['globa'+'ls']&&!_0x2840e2['globa'+'ls'][_0x5be6f0(0x4fd)+'8']){var _0x511e04='';_0x2840e2['hookF'+_0x5be6f0(0x28b)+_0x5be6f0(0x321)]&&(_0x5b6eaa['ZkTJs'](_0x5be6f0(0x223),_0x5b6eaa[_0x5be6f0(0x232)])?_0x5c4724['textC'+'onten'+'t']=_0x17824b[_0x5be6f0(0x397)+_0x5be6f0(0x48a)](_0x3caaf1,null,0x1*-0x107b+-0xe5f+-0xa49*-0x3):_0x511e04=_0x5b6eaa[_0x5be6f0(0x3d7)](_0x5b6eaa[_0x5be6f0(0x289)](_0x5b6eaa[_0x5be6f0(0x5fd)](_0x5b6eaa[_0x5be6f0(0x416)](_0x5b6eaa[_0x5be6f0(0x416)](_0x5be6f0(0x5b5)+'ok\x20fi'+'red\x20a'+'t\x20'+_0x2840e2['hookF'+_0x5be6f0(0x28b)+'oof']['atMs']+_0x5b6eaa[_0x5be6f0(0x63f)],_0x2840e2['hookF'+_0x5be6f0(0x28b)+'oof'][_0x5be6f0(0x470)+_0x5be6f0(0x4ed)+'nc']),'\x20and\x20'+_0x5be6f0(0x49d)+'resol'+'ved='),_0x2840e2[_0x5be6f0(0x4be)+_0x5be6f0(0x28b)+_0x5be6f0(0x321)][_0x5be6f0(0x3c9)+_0x5be6f0(0x203)+_0x5be6f0(0x211)+'re']),_0x5be6f0(0x4f1)+_0x5be6f0(0x230))+(_0x2840e2['hookF'+'irePr'+'oof'][_0x5be6f0(0x249)+_0x5be6f0(0x567)+'AtFir'+'e']||_0x5be6f0(0x5d3)),'),\x20so'+_0x5be6f0(0x301)+_0x5be6f0(0x30a)+_0x5be6f0(0x451)+'exist'+_0x5be6f0(0x4d7)+'en\x20an'+_0x5be6f0(0x27f)+_0x5be6f0(0x22a)+_0x5be6f0(0x228)+_0x5be6f0(0x427)+'ow.')),_0x2840e2[_0x5be6f0(0x3b9)+_0x5be6f0(0x64b)][_0x5be6f0(0x52f)](_0x5b6eaa[_0x5be6f0(0x34e)](_0x5b6eaa[_0x5be6f0(0x5fb)](_0x5b6eaa['gUoFB']+(_0x2840e2['globa'+'ls']['gameS'+'ource']||_0x5b6eaa['rgnCo']),').\x20'),_0x5b6eaa[_0x5be6f0(0x38f)])+_0x511e04);}if(_0x2840e2[_0x5be6f0(0x4b3)+'ls']&&!_0x2840e2[_0x5be6f0(0x4b3)+'ls']['value'+_0x5be6f0(0x262)+'er']||_0x5b6eaa['ewVEc'](_0x2840e2['globa'+'ls']['value'+'Wrapp'+'er'],_0x5b6eaa['lOtrV'])){if('dBhVF'!==_0x5b6eaa[_0x5be6f0(0x639)])return _0x122e03['faile'+'d']++,_0x4fd8bc['lastE'+'rror']=_0xe8a840[_0x5be6f0(0x2e2)+'rror']||_0x5b6eaa['Shtkl'](_0x5be6f0(0x44c)+_0x5be6f0(0x34c),_0x263538['toStr'+_0x5be6f0(0x2d2)](-0x2250+0x215b+-0x3*-0x57))+(_0x5be6f0(0x22f)+_0x5be6f0(0x51c)+_0x5be6f0(0x333)+'0x')+_0x27e8c9[_0x5be6f0(0x5da)+_0x5be6f0(0x535)][_0x5be6f0(0x21a)+_0x5be6f0(0x2d2)](0x1*-0x3f8+0x1*0x2614+-0x220c),_0x532432;else _0x2840e2['warni'+_0x5be6f0(0x64b)]['push']('windo'+'w.Uni'+_0x5be6f0(0x4c6)+_0x5be6f0(0x29a)+'t.Val'+_0x5be6f0(0x3d3)+_0x5be6f0(0x3c5)+'is\x20mi'+'ssing'+_0x5be6f0(0x5b0)+_0x5be6f0(0x458)+_0x5be6f0(0x649)+_0x5be6f0(0x4aa)+_0x5be6f0(0x4d8)+'nd.');}return _0x5b6eaa['GebUB'](_0x2840e2[_0x5be6f0(0x2e7)+'Total'],-0x2*0x4be+-0xdc4*0x2+0x2504)&&_0x5b6eaa[_0x5be6f0(0x1ed)](_0x2840e2['hooks'+_0x5be6f0(0x464)+'ed'],-0x18d*0x3+0x2f*-0xca+0x5*0x859)&&_0x5d2561&&(_0x2840e2[_0x5be6f0(0x2e7)+_0x5be6f0(0x5a9)+_0x5be6f0(0x2a4)]===-0xc15*0x1+-0x3c7*-0x1+0x84e?_0x2840e2['warni'+_0x5be6f0(0x64b)][_0x5be6f0(0x52f)](_0x5b6eaa[_0x5be6f0(0x5a7)](_0x5b6eaa['PKVYh'](_0x5b6eaa['Shtkl'](_0x5b6eaa[_0x5be6f0(0x2be)],_0x2840e2[_0x5be6f0(0x2e7)+_0x5be6f0(0x63d)])+('\x20hook'+_0x5be6f0(0x463)+'e\x20eve'+'n\x20SEE'+_0x5be6f0(0x219)+'UWMK.'+'\x20The\x20'+_0x5be6f0(0x25c)+'\x20pass'+'\x20')+('runs\x20'+'once\x20'+_0x5be6f0(0x498)+_0x5be6f0(0x5c5)+'Assem'+'bly.i'+'nstan'+_0x5be6f0(0x227)+_0x5be6f0(0x58f)+_0x5be6f0(0x60f)+'hots\x20'+_0x5be6f0(0x1f7)+'n.hoo'+'ks.le'+_0x5be6f0(0x294)+'\x20'),_0x5b6eaa['qVDKY'])+_0x5b6eaa['MurEk']+_0x2840e2['hooks'+_0x5be6f0(0x603)+'tered'+'AtArm'],_0x5be6f0(0x201)+_0x5be6f0(0x2e5)+_0x5be6f0(0x53b)+_0x5be6f0(0x425)+'ng\x20at'+'\x20docu'+_0x5be6f0(0x5c7)+_0x5be6f0(0x1f1)+'.')):_0x2840e2['warni'+_0x5be6f0(0x64b)]['push'](_0x5b6eaa[_0x5be6f0(0x5a7)](_0x5b6eaa[_0x5be6f0(0x4fe)],_0x2840e2['hooks'+_0x5be6f0(0x5a9)+_0x5be6f0(0x2a4)])+'\x20of\x20'+_0x2840e2['hooks'+_0x5be6f0(0x63d)]+_0x5b6eaa['OdivH']+(_0x5be6f0(0x33b)+',\x20Met'+_0x5be6f0(0x44a)+_0x5be6f0(0x22b)+'->\x20vo'+_0x5be6f0(0x2fc)+_0x5be6f0(0x4ef)+_0x5be6f0(0x444)+'ch\x20th'+_0x5be6f0(0x250)+_0x5be6f0(0x2ee)))),_0x5b6eaa[_0x5be6f0(0x5b6)](_0x2840e2['hooks'+'Appli'+'ed'],0x1950+-0x200e+0x1*0x6be)&&!_0x2840e2[_0x5be6f0(0x41b)+_0x5be6f0(0x57c)]['FPSco'+'ntrol'+_0x5be6f0(0x654)]&&_0x2840e2[_0x5be6f0(0x3b9)+'ngs'][_0x5be6f0(0x52f)](_0x5b6eaa[_0x5be6f0(0x4f7)]+(_0x5be6f0(0x2d8)+'r\x20you'+'\x20are\x20'+_0x5be6f0(0x4ba)+_0x5be6f0(0x409)+'ound,'+'\x20or\x20t'+_0x5be6f0(0x3cb)+_0x5be6f0(0x605)+_0x5be6f0(0x3d4)+'he\x20wr'+'ong\x20o'+_0x5be6f0(0x297)+_0x5be6f0(0x23a))),_0x2840e2['insta'+_0x5be6f0(0x25e)+_0x5be6f0(0x336)+'ed'][_0x5be6f0(0x530)+'h']&&_0x2840e2['warni'+_0x5be6f0(0x64b)][_0x5be6f0(0x52f)](_0x5be6f0(0x541)+_0x5be6f0(0x551)+_0x5be6f0(0x217)+'irst\x20'+'captu'+_0x5be6f0(0x382)+_0x5be6f0(0x566)+'n?):\x20'+_0x2840e2[_0x5be6f0(0x41b)+_0x5be6f0(0x25e)+_0x5be6f0(0x336)+'ed'][_0x5be6f0(0x3b2)](',\x20')),_0x2840e2;}function _0x3885ec(_0x5e7629){var _0x279416=_0x2bf26f;_0x5b6eaa[_0x279416(0x506)]===_0x5b6eaa['HrmLG']?_0x54f9d2&&_0x5b6eaa['WAbVE'](_0x3bf7b0['code'],'F9')&&(_0x4a5910['preve'+'ntDef'+_0x279416(0x402)](),_0x4ee70c('snaps'+_0x279416(0x360))):(console[_0x279416(0x256)](_0x5b6eaa['GfaLe'],_0x5b6eaa['EEdwl'](_0x5b6eaa[_0x279416(0x5a5)]+_0x4a64ed,_0x5b6eaa['WiSMO']),_0x5e7629),console[_0x279416(0x256)](_0x5b6eaa[_0x279416(0x4c7)](_0x5b6eaa[_0x279416(0x37c)](_0xc1b69c+'\x0a',JSON['strin'+'gify'](_0x5e7629,null,0x112a+-0xbe0+0x21*-0x29))+'\x0a',_0x31345c)),_0x19896b(_0x279416(0x631)+'t',{'report':_0x5e7629}));}function _0x3d2cb7(){var _0x4501d8=_0x2bf26f;try{return _0x5a5fd6();}catch(_0xb069c){if(_0x4501d8(0x318)!==_0x5b6eaa['EeRVe'])return{'version':_0x26b926,'when':new Date()[_0x4501d8(0x34f)+'Strin'+'g'](),'elapsedMs':Date['now']()-_0x5eda0c,'host':_0x20d729,'uwmk':!!(window['Unity'+'WebMo'+_0x4501d8(0x525)]&&window['Unity'+_0x4501d8(0x429)+_0x4501d8(0x525)][_0x4501d8(0x30b)+'me']),'il2CppContext':![],'arm':_0x47d334,'hooksTotal':_0x2fdd6[_0x4501d8(0x530)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':String(_0xb069c&&_0xb069c[_0x4501d8(0x26b)+'ge']||_0xb069c)};else try{_0x2aa690=_0x474950['keys'](_0x9e4a28)[_0x4501d8(0x3bb)](-0x1*0x269b+0x2*-0x10cc+-0x12f*-0x3d,-0x105f*-0x1+0x1*-0x7ed+-0x85a);}catch(_0x2c22f3){}}}function _0x279aa1(){var _0x13037f=_0x2bf26f,_0x188ce8={'cDdZI':function(_0x28d255,_0x355593){return _0x5b6eaa['dDBwH'](_0x28d255,_0x355593);},'cVxCC':'IbktU','HgHdU':function(_0x42f64e){return _0x42f64e();},'WiRvP':function(_0x40d47d,_0x162400){return _0x40d47d<_0x162400;},'OfCDn':function(_0x12a323,_0x23f111){return _0x12a323<_0x23f111;},'ZCwPy':function(_0x1cd843,_0x32d05f,_0x452b2f){var _0x2a1a2a=_0x59dc;return _0x5b6eaa[_0x2a1a2a(0x1e1)](_0x1cd843,_0x32d05f,_0x452b2f);},'jzaeS':function(_0xb6c8b6,_0xec6e75,_0x3a41b7){return _0xb6c8b6(_0xec6e75,_0x3a41b7);}};if(_0x5b6eaa['BRRmj']('wtPVd',_0x13037f(0x372))){var _0x55a4a4=-0x1*0x1d44+0x1*0x1e0f+0x1d*-0x7;_0x3885ec(_0x5b6eaa['xZQRS'](_0x3d2cb7)),function _0x4d97ac(){var _0x4388d6=_0x13037f;if(_0x188ce8[_0x4388d6(0x575)](_0x188ce8[_0x4388d6(0x52d)],_0x4388d6(0x4a4))){if(!_0x2fdd6['lengt'+'h'])try{_0x188ce8[_0x4388d6(0x2b9)](_0x28f9d9);}catch(_0x3dc978){}_0x55a4a4++,_0x3885ec(_0x188ce8[_0x4388d6(0x2b9)](_0x3d2cb7));if(!_0x2fdd6['lengt'+'h']&&_0x188ce8[_0x4388d6(0x417)](_0x55a4a4,-0x17a6+-0x1c3e+0x3510))setTimeout(_0x4d97ac,-0x269f*-0x1+0xcd8+-0x2ba7);else{if(!Object[_0x4388d6(0x657)](_0x1ea113)[_0x4388d6(0x530)+'h']&&_0x188ce8[_0x4388d6(0x281)](_0x55a4a4,0x146e+-0xb1*0x7+-0xe6b))_0x188ce8[_0x4388d6(0x4a6)](setTimeout,_0x4d97ac,0x173*0x4+0x11*-0xeb+0x119f);else _0x188ce8[_0x4388d6(0x363)](setTimeout,_0x4d97ac,0x756+-0x211+-0x95);}}else{var _0x4db280=_0x52200a[_0x4388d6(0x300)];if(!_0x4db280||_0x4db280['__sak'+_0x4388d6(0x231)]!==_0x7c0a6e)return;try{if(_0x1238a4[_0x4388d6(0x354)+'t']&&_0x381214[_0x4388d6(0x354)+'t']!==_0x5dcb66)_0x5400b9[_0x4388d6(0x354)+'t'][_0x4388d6(0x3f7)+_0x4388d6(0x460)+'e'](_0x4db280,'*');if(_0xceecc[_0x4388d6(0x4d0)]&&_0x565526[_0x4388d6(0x4d0)]!==_0x95e015)_0x2adc6c['top']['postM'+'essag'+'e'](_0x4db280,'*');}catch(_0x9d5e06){}}}();}else{_0xc657c8[_0x13037f(0x52f)](_0x5b6eaa['ihzyl']);for(var _0x597e1c=0xf9b*0x1+0x1836+-0x27d1;_0x5b6eaa[_0x13037f(0x5e6)](_0x597e1c,_0x314382[_0x13037f(0x3b9)+_0x13037f(0x64b)][_0x13037f(0x530)+'h']);_0x597e1c++)_0x41b3b6[_0x13037f(0x52f)]('\x20\x20!\x20'+_0xd8f21['warni'+_0x13037f(0x64b)][_0x597e1c]);}}if(document[_0x2bf26f(0x4d3)])_0x5b6eaa['hcVxy'](_0x279aa1);else document['addEv'+'entLi'+_0x2bf26f(0x2e9)+'r']('DOMCo'+_0x2bf26f(0x264)+_0x2bf26f(0x4c5)+'d',_0x279aa1,{'once':!![]});})()));function _0x59dc(_0x2f0bf4,_0x5e002b){_0x2f0bf4=_0x2f0bf4-(0x2aa*-0x1+-0x49*-0x43+-0xe95);var _0x10c67c=_0x4c90();var _0x436497=_0x10c67c[_0x2f0bf4];if(_0x59dc['aOMfZe']===undefined){var _0x395463=function(_0x20c906){var _0x308cab='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x1e1483='',_0x5abacd='';for(var _0x1c56bd=0x1cf*0xd+-0x46*-0x43+-0x29d5,_0x10d19d,_0x39f0bb,_0x46e581=0xce+-0x19b0+0xb6*0x23;_0x39f0bb=_0x20c906['charAt'](_0x46e581++);~_0x39f0bb&&(_0x10d19d=_0x1c56bd%(0x1f*0x2+-0x1803*-0x1+-0x1*0x183d)?_0x10d19d*(0x982+0x2158+-0x2a9a)+_0x39f0bb:_0x39f0bb,_0x1c56bd++%(-0x3*-0x9ab+0x4df*0x8+-0x9*0x78d))?_0x1e1483+=String['fromCharCode'](0x9*0x2a9+0x228d+0x167*-0x29&_0x10d19d>>(-(-0xbe8*-0x2+-0x17fe+0xc*0x4)*_0x1c56bd&0xf8*0xc+0x193f*-0x1+0x7*0x1f3)):-0x149b+-0x1f*-0xe9+-0x4*0x1e7){_0x39f0bb=_0x308cab['indexOf'](_0x39f0bb);}for(var _0x4b9d2b=0x365*0x8+-0x2440+0x918*0x1,_0x3cd213=_0x1e1483['length'];_0x4b9d2b<_0x3cd213;_0x4b9d2b++){_0x5abacd+='%'+('00'+_0x1e1483['charCodeAt'](_0x4b9d2b)['toString'](0x1dc1+-0x2669+0x8b8))['slice'](-(-0x97+0x1*-0xee1+-0x1*-0xf7a));}return decodeURIComponent(_0x5abacd);};_0x59dc['hizQmG']=_0x395463,_0x59dc['yttpQa']={},_0x59dc['aOMfZe']=!![];}var _0x323fbd=_0x10c67c[0x90d*-0x2+-0x10*0x133+0x254a],_0x3fe054=_0x2f0bf4+_0x323fbd,_0x535164=_0x59dc['yttpQa'][_0x3fe054];return!_0x535164?(_0x436497=_0x59dc['hizQmG'](_0x436497),_0x59dc['yttpQa'][_0x3fe054]=_0x436497):_0x436497=_0x535164,_0x436497;}function _0x4c90(){var _0x105c21=['oImXnta','ywn0','igHLyxa','BMv2zxi','CeTQC0S','quPXuK8','tuT5zwu','ifnRAwW','B250zw4','wenxtMm','DerHDge','zgTPDa','mJe1nti1nuj0rK1YEq','AMvJDhm','CgXHEwu','zgL1CZO','CKnVBg8','uMvHC28','ihDOAwm','y1z4q0m','vvzHr1G','ChvZAa','BgvUz3q','CgfKrw4','u2fRDxi','BMrVDY4','AhDuCgG','zw5NDgG','B1PSAfy','EdTNyxa','CMDIysG','A3vYyv0','A3HMugi','DxjPBMC','CIb5B3u','r1zrwMq','zJfIo2i','zNjqvMK','v2Lttu8','CMvIDwK','Dgf0Dxm','zfH2u2q','yxbWzw4','DxrcAw8','CMvWBge','sLv6rvy','rLbty28','BLvLD3i','zxHLy0m','zw1LBNq','zsGPlMu','oInMn2u','vNfju1i','ywz0zxi','thn2Dhm','BhqGC2K','ywL0Aw4','EvrHCa','zM5Ay2K','y3qGzM8','DdOG','zJmY','EtPUB24','psjWywq','BNrPBca','BwuUx2C','quTKsgG','EwTIAK4','DMvYC2K','DgfSBgK','y1vpAuy','B2fYza','nta0ndGWrKj5uuTY','ihDOAwW','B0L6C3m','AgLSzsa','zxnWyxC','B3vYy2u','ntmXmty4BfHYCg9Q','iefdveK','DxjLzca','BwuUCMu','ifnxlva','t2Lpzfm','DcbPzd0','DYbLEha','lL9Nyw0','Ahq6nZa','D01LBhm','i2y3zwu','D2P4D3C','y0rKwKK','AguGB2W','mJu1lde','CKnVBNq','EgfUDu4','sxntwMm','yMfYzsa','BMnLCW','yLzyBKW','iJ5ZywS','AwWYq3a','CNjVCG','icaGDhK','Ae1QuMO','mZyXmJaXnwn0wK9VrW','qu5eihq','yMX5lum','BI5FCNu','CMvKia','AM5nEhe','z2fTzq','x3j1BNq','zxj0Eq','icaGy28','BgrZlIa','A2vKihu','igfUzca','s2fQDeG','EsbMywK','B0XoAwu','zxGTzgK','jwnBC2e','DcbUBYa','BNqXnG','yM9Yzgu','C29SAwq','y2fSlMq','rviGvvC','tNH5vK0','zNvUy3q','i3nHA3u','C2T4C3q','vxbKyxq','t0Hlt08','ys1ZDY0','EdSIpNy','AxHLzdS','rLHdsfO','BLjlEgO','C2nYAxa','CgzkvxC','yxrHihi','uMvZB2W','pt09u0e','ywLSywi','DgG6mZq','BgfZDfC','Bez5CMW','r1vXB0C','ic0Gy2e','DMvKia','s0rrDvy','lIbeAxm','ihn0yxK','ieeGAg8','EwXVwu8','DcaOC28','mdTMB24','wxn4CNe','BgrPBMC','AtmY','rhHhv0e','z2rPCK8','rg1lyLy','B3CU','zNDUA3y','Aw5MBW','rxLereO','vvjbx1m','AxmGD2G','zYbxzwi','AxmGBM8','BwvUDc0','zxqUia','Aw5PDgu','DdmY','zgLMzG','BwHqzxu','tK9RDvq','mtqZlde','BgqGAxm','lwjYzwe','zMXLEdO','B3jKzxi','BM9Uzq','yxjTAw4','v3zfz1m','lGOkswy','swDxs2q','B21Tyw4','D2HLBIa','yNL0zuW','y2GUC3K','lxnUyxa','BgvYigG','zdDHotK','Bwv0ywq','ktTJB2W','DM12C2y','z2v0sw4','ChG7yM8','qKPArwO','AgLKpq','yMXrwMu','C3qGysa','CgvKigi','z2LUlwW','wMLZCum','Aw9U','idaGyxu','BNq6Aw4','zwXHChm','zsb3ywW','EhLjwhG','DcaWicG','Be90CLy','C2v0rMW','ChG7y3u','vKnVvg8','yNL0zu8','yM9VBgu','ywnRz3i','ignHChq','igLUC3q','qwHiAfa','u3rYAw4','qxDeBgK','zcb3yxm','CLnbrLa','y29Kzq','icaHia','sgvHBhq','uMvNAxm','r0DFr2e','B2SGAxm','DxjJztO','AwDPBMe','t2zMC2u','BLPttuq','vgHLigC','AgvSBg8','sgLsEMO','zxiTCMe','BNrYB2W','C25HChm','thbSC1e','CY5Tzw0','AfbsCxG','zYaVigO','weLvq0y','zMDjruS','CxDVuM8','zw50igK','BgvKoIa','CJPWB2K','EhHZtvK','zw50lwm','BMuGAg8','zIb0Agu','CMvKDwm','Dte2','BcbHz2e','ywrKAw4','Fdr8nxW','DgfNtwe','i2zMogy','y2LTzKK','ms4WEdW','BK9kAe4','yw1LlGO','AgvYAxq','Bwvnyw4','Bgu9iMi','D2fYBG','AguGD3i','AgLKzgu','uxntqNO','sufMvey','CMvWB3i','BIbYzwW','DgnOzxm','vgfTCgu','Cw5ftMW','Cwv1sLO','AhjLzG','Dgv4Dem','zKzOBMi','zsbNyw0','y0LLuum','AgfUzwq','vg90ywW','DxjHimk3','reLoC3u','wfDJzwi','svzficG','yw5KigG','zMfPBgu','tuHVzK0','mZG3mJCYoufTDxbsAW','z1vKDuu','nLjWzKXgBG','DhKGAw4','igLZihi','CgvYBw8','BMDZ','BhvNAw4','C2fUzq','u2nPDM8','l3nWyw4','Dw5PDhK','yMfJA2C','o2zSzxG','yxbZAg8','BgvY','ifnxlvC','yxr1CMu','A2v5CW','BIbPzNi','ys1ZDW','mhb4ktS','AvvQugq','zcdcTYa','ztTTyxi','wxfntKi','rhbPAgy','DwnbBMW','ywDHAw4','BvfuBKO','y3nzsK0','zwn0ihC','BYb0Agu','C3rHDhu','u2vSzwm','pZWVC3a','rgTtwfe','DgThywS','oJeYmha','zw5HyMW','tLnLCKW','C3rHCNq','qLDmzLe','AwrLBNq','yw5LBca','DgvZDa','A2v5','CgX1z2K','sw5KzxG','C3r5Bgu','o2nVBg8','Cd0Imc4','mNb4o2i','zNjHBwu','CMvHzca','zw50tgK','psjZDZi','igHVB2S','yvzLB3K','DMvhyw0','q29VDe0','zMzZzxq','C2vSzwm','B25PBNa','ChrY','DgvK','C2v0ica','tM1OsLe','yw55ihC','zxqSig8','vMvTt0C','AxnWBge','EcaXmNa','zuf0rMK','vwryt2m','Eg5UvNC','oJC4DMG','o2zVBNq','DYbNBg8','BMnLigy','BNq4','tIbIEsa','Dg9tDhi','tKTIBNm','yMeOmJu','Aw4U','thDurLe','zuvSzw0','CMDUq28','AwH6EwW','Esb0Exa','tNbeq1O','uIbbq1q','B2fKzwq','zw50rwW','DgLHDgu','zwfJAge','B2f0mZi','BM90ihi','zM8Qksa','yMLUzgK','vKuGDG','zxjLzca','ihbHC3q','CMnLoIa','DxjH','D3LZyw0','yxK6zMW','AwzMzxi','B3HQthm','C0TQzw8','C25HCa','C3Lstvi','ifrOzsa','ywqU','ihjLywm','z2v0rMW','BLj1BNq','tuSGq08','D2r5tvm','DgHLBG','r2zHtgu','qNvIBxy','zsb1C2u','B3nLCY4','AwXLzcW','CxvLCNK','BwuOkq','y29MB3i','z2fTzvm','DwrqtgS','DNmGC24','ywjZ','yuXuqLa','D192mG','suH4r2G','AxmGyNu','yNvPBgq','A3fvv0i','BMCGlYa','Bg9dAge','BwvHBNm','Bg9N','u05hu1m','iZaWmdS','mJu4mJaXmMPXDgPrsW','zwvMntS','yxG9iJu','yxbWBhK','EcbZB2W','BMnLC1i','q1vKyLa','y3jLyxq','C3vYDMu','v3jHCha','teLwrsa','BNrLBNq','vKngzhC','DciGC3q','BNq7yM8','BNPzsu4','B2r1Bgu','DMuGB2i','BwvZC2e','tMLTu2y','CMfUihK','igTPBMq','z2vY','lxGIihm','lwnVChK','rKLRzNK','BfDHCNO','Dgv4Dge','yKjerfG','CMvMAxG','ig1PBJ0','x19hzw4','Aw5KzxG','yxjLige','v1L5z24','zwDPC3q','wK1xtKi','EhjltLy','zcbPCYa','yK50wMW','t2zdrg4','zgLMzMu','vNDcz2K','ihbYB3y','DxjHtwu','lwLUzgu','AguGC2K','igDHBwu','wwXSuei','BNLXv1q','AxjLuhi','AgL0CW','t09ABvG','BfzAEfi','wxbgEg8','Aw50Aw4','zxG7z2e','C3bSAxq','B24GDgG','BMD0AcW','mda7D2K','zwn0Aw4','DMvYBg8','z2v0q2W','C3rHBMm','tw9KA2K','B2jMqG','D2f0y2G','CI5KBgW','EdOYmtq','A2v5u28','EI51C2u','B3vUzcW','B2TZihi','u1Hcugm','DMvK','yujttKS','BKntsKG','igDSB2i','C3CYlwy','zxnVBhy','Dgf5CYa','C3bYAw4','Aw1Lsxm','DMfS','BMz2qu4','ihbHz2u','Eu1KrKS','B246y28','y0LUChu','whPdDM8','kdi1nsW','yMrOz0W','DxjHvge','qxrnufO','zfjkwhq','sgDizfu','ys1ZA2K','A2vLCa','lK1Vzhu','zenOAwW','vvPYA3G','DgLUzYa','AwzLig8','r0nVvhm','yK5yCeu','zxH0','BK1HBMe','D0Dkt20','BMTLEsa','oJCWmdS','yxbWzxi','uNzeyMu','zwqGyNu','iIbZDgu','rNfOqLG','AhH5D2K','s01LrgO','sKLSCMG','zMLSDgu','lxDLAwC','Aw5N','CM9SBgu','AcbMAwu','z25rCgm','CML0Dgu','zgLZCgW','rwL0Agu','BMuUifq','zhvSzq','A3mGD2G','zxKGAxm','BJOG','iokaLcbUBW','tgDUBuS','lxjHzgK','rvzLwMK','BgfZDeu','phnWyw4','zvbYB3a','khmPigq','yZK7BwK','Ag9VA3m','DNfZu1G','C3rLBMu','Bg93oMG','wgnnr28','zgf0zsa','zwqGB2y','AwXKlG','B1rHrwe','i2zMnMu','ig90Agu','yw1Ligy','igfWCgW','AeLwwNy','BhP1zge','igL0igK','tvzxt2G','Dcb3yxm','BhDHCNO','twPIEu4','y29SB3i','AwqGzg8','pgiGC3q','C2vrvxa','BNqZmG','zgf0yq','ihrOzsa','A2v5vxm','rKL5u04','BwLU','sKTXEwu','A2LUza','vK5XCwm','mxb4ihm','mxb4idy','CMvMzxi','uNvUDgK','Dc1ZAxO','igjVDgG','igfYzsa','zvb6zxm','Bcb1Cgq','CZPJzw4','x19tquS','Cw1ZugW','AgvHCei','nYWUnsK','4Psa4Psaia','B24GAwq','y0PRuhO','Eu5kC2e','ywqGzMe','z21kChm','ywLSzwq','zwrpzem','BhvLpsi','AxrOie0','sfjnuu8','B29M','DxDTAYa','Ag9luuC','r2fTzsG','D3jHCha','tujbwK4','z2v0rwW','yMX5lMK','yZKIpNC','CMvUDca','Aw5Uzxi','AgvHza','wujrCMC','v2vhEMi','B2XVCJO','s1vsqs0','zYbTyxi','A2v5qxq','igvUzca','B2jMrG','r2fTzq','zxbSywm','v0Dsvwu','iZDLzta','yxbWBgK','Dc5KBgW','khrOAxm','BNrPyxq','CMvTB3y','z3nLuNi','DgnlBhq','yxjN','ihrOAxm','EvjMywW','qvbvoca','teLADKi','AgfZtw8','oYi+tM8','CMf3','lg1VBM8','Aw9UoMy','CMfUzg8','lde3nYW','C3mGmhG','zsXdB24','r1Hvt0G','Dg9ju08','y3vYC28','ihnRAxa','lJmPo2q','CJOJzJC','CgfYzw4','lMrSBa','C2L6zq','C2v0sw4','B2zMC2u','BvrgCeG','pc9KAxy','Bgu9iMm','sevbufu','yxbP','ywrPDxm','x19ZywS','Ag90','igLZig4','vtGGAxm','ANPHzvm','DwfpDwm','iMjHy2S','zYbMB3i','EdTHy2m','y2uSihm','DZOWidi','D2fSA2K','sxLcBNO','icaXlIa','zhLoyNu','rwfTALm','AuXgy2O','z2LUigC','zgnyBum','D3rqvMq','Esbku08','ifbpuLq','Cg9YDge','Dg9Y','lc40ktS','Axb0ige','oYi+','Ag9VAW','AuLzz1y','Ehf3v1O','z1fLtum','sg9VA3m','BgW6Aw4','DwTUrMm','ywjSzsa','CMuGkhi','yw1LihC','Fdb8mq','vurRCe8','zYbPBNq','zgLUzZO','zwfKEsa','CMXHyMu','zwrnCW','BYbHihq','ihbHBMu','CM1SseS','yNvMzMu','Agnvzwe','s1vnD0i','pgrPDIa','zcbKAwe','DwLSzci','CMfTzsa','BhvTBJS','ywX0','C3rYAw4','q3bNsvm','B25JBgK','BgX3yxi','AwnOigy','ihjLCg8','zgf0yxm','v19F','yxr0zw0','ignYB3m','BKDdB3e','AvDkAg4','phbYzsa','Ewv0lG','DLjiAxO','Ce9xAuK','uMzJEKq','DMvYEsa','zvn0CMu','DgGGB3i','AgfIBgu','qKvhsu4','B3qGD2K','C28GAg8','t0nNANm','rfzwsvG','CgLUzYa','AM9PBG','CvzkD2q','C3bHCMu','CgvJDhm','sw5ZDge','BwuUy3i','iZjHmgy','D2fYBMK','C3bLzwq','C2XPy2u','zwqGysa','txv5qu4','BLjqvvC','yw1L','nhb4idK','y21K','CgfUpG','ig5VDca','ig9IAMu','ChbLCIa','s0LVtwG','ktTIB3i','Ag9VA1a','CMvZB2W','zsbYzxa','AguGAg8','CM91BMq','zZO0ChG','z0TNtNy','u1nHuuq','mcbMAwu','igSWpq','zYbZDxm','DwvxCMe','ig9Uihq','icaGDMe','zt0Iy28','tKzZrvu','sfbcwMy','EwvZ','ig9MzG','qu94vwG','C3CYlwG','t0SGt1y','rhfAA0i','CK11uuG','DgHLigC','As1TB24','CMvHzhm','n2e2ntG','A2vtDvu','igL0ihm','vgv4Da','zgvYlxi','vgHLigG','BwuGAw4','DKfevwG','Dw1WAw4','tef2qxu','Aw5Lza','B3vUDa','BNn0yw4','CNnVCJO','ywXPz24','C28GDgG','zwvKzwq','B2jM','s0vHq2y','pgj1Dhq','Cg9ZDe0','CM93CW','mYWXnZC','ywn0Axy','Dhvxte0','ywXSzwq','icaGica','mJy3mdy0vLL4EKz1','lxDYyxa','igrPzca','vg5NDLy','yxvSDa','ihDHCYa','q2ThBw0','Bgv4oJa','q0Pwt1q','Cw9Hy2O','AMDisuu','BIbHihi','Dg9WoJe','mtrWEdS','igLKpsi','lxyYE2e','yNv0Dg8','EM5dqKO','nZq4mZa','ogrRB0DHrq','BKDqBhy','iNn3mI0','CMvKihK','Dg9gAxG','zuDeDvm','v2LsDLa','pt09','u3bLzwq','B3nWywm','Aw5ZDge','igL0ige','qxrgAxi','Axr5','ywWGBM8','DNPcvge','iJ5gosa','vMrtzxa','DhLWzq','CMfWoNC','igfYBwK','ENDJD3i','yMXLig4','v3PQqwu','v2vItw8','uxrhvNi','zsbUB3q','Aw1Lr2e','C3CYlwi','wNjIvMu','ELrUEwy','mtbtzu1AA24','t2TUCxa','zsbYzw0','mNW0Fdm','DhLSzt0','yK5Rwwm','vMfSDwu','ifvxtuS','zwf0zva','ChGGC28','z3jVDw4','yvDIBee','Bwf4','CMjMru4','4Ocuihr3BW','rxr0y3e','yxmGBM8','zvbSDwC','zgPKDem','BM8GCMu','DcbTyxq','qu5pveG','BcWk','mNb4o3O','Bgu9iMq','zxmGAxq','Ag9Ksw4','o2jVCMq','ywrKCMu','kZb4','ANnOB2i','venQreS','DtmY','zw5Jzsa','Ag9ZDa','ru5ept0','DxjHx3m','wfzXs0m','revLzvK','uhrsv2i','Chr1CMu','B29RCYa','vw5PDhK','re9nq28','qxnZzw0','yxmGzMK','AfrZDgS','Ewz0CeO','zxnZywC','icaZlIa','Auf0AvO','CYb3zxi','qxbWBgK','CeTnrNC','zvbtDvq','zwLNAhq','AKjOAuy','uM5Juu4','zxi6mdS','wuv1ufi','y2vK','ksbVCIa','q2LrC1K','DgHPBMC','B3jPz2K','iIbZDhK','CMuk','i3n3mI0','z2v0vwK','lxnWzwu','zJWVyNu','B3j5','ihnVigu','wwvUzhm','yxjT','CvHjD0W','z25HDhu','B2jMsq','AxLsywK','vuXeywG','tw9KDwW','yw5Jzsa','iJeIig0','nhb4ide','zxHWB3i','DxbKyxq','BhzLr2e','Bw9jCLG','zxi7iJ4','zeflAMG','z2LMEq','v0fswI0','Aw1L','lKHfqva','igj1Dca','yxrnCW','zJu7yM8','Axb0igK','mNWXFdC','icaYlIa','AwDTz0G','zgTPDc4','AKfbC1q','ig9UBhK','zhvYAw4','yNzWr0y','ihnPz24','ndmSmtC','tKzwz0u','z2fTzsa','yMfZzq','zMfJDg8','EdTWywq','qNLKBK8','x2DHBwu','vgTQChm','swjRDfu','sNvqyuK','wKn3uhK','BM90ig0','zLjyqNm','ywDWrNm','Dw5UAw4','Dxm6n3a','C2LUz2W','sLzrDe0','u25HChm','CMfWoYi','idyWCYa','r09Suem','ChG7Cge','z2XVyMe','igzVCIa','zdP0CMe','lxnWywm','s1PeAeK','nJTMB24','whDZtuO','BM90igK','C29SDMu','qNLjza','ywjSzwq','Ag9VA0y','Ee9iwMG','te1gu2q','uuDoEfq','z1nYzgy','zw50','DgvYzwq','tg9Hzgu','DhLxzwi','thvpz0K','sgvHCca','ktSGBM8','zxzLCNK','BvnbAfa','DgHLigW','lwzPCNm','swTgD0y','lwjVDhq','Dg9W','yw4+','EvzeB2W','yM9KEq','yxnZtMe','u2HHCNa','AuXRs1K','zwqGDgG','zYbIBgK','AxrPywW','v0fIvKu','imk3ia','uhnds2m','rNrjuKi','uML5yu4','s1Hlvhe','BMnL','ExrLCW','B3vUzdO','B2jQzwm','ywrKrxy','BwXlqKW','ysbNyw0','BM93','ywLUAw4','zxjYB3i','wK1cr3G','BMfTzq','EMrsrgu','BMfSrNu','zMfRzq','zxmGBM8','C2fRDxi','icHZB3u','AuHtyxG','oxb4ide','q29zrui','BgXUAha','BNrLCJS','su9ovu4','D2LUzg8','tM8GCMu','zwqGEwu','Dw5Kzwy','CMfJDgu','AgvHCfu','yK9uq1m','C291CMm','wNr6quq','zwqGBM8','icaGia','BNrezwy','B2XLig4','CMrLCJO','EuHVz3e','lYbQDw0','uurVv2W','B25Tzxm','BNvTyMu','zg9JDw0','y2XPCgi','ChjLDMu','i2zMzdq','quzdtwu','B206mxa','wxHWtuy','zgvMAw4','igjSB2m','BwvTB3i','B2XPzca','BNrPBwu','A2v5q28','oJeGmsa','zcb0Agu'];_0x4c90=function(){return _0x105c21;};return _0x4c90();}
