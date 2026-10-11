// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.3.0
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

function _0x791f(){var _0x3c69c3=['oImXnta','Aw50BYa','zgTPDa','Bez1BMm','zMjVu3G','CM9SBgu','ywqU','mtj8oxW','CMDIysG','i2zMnMu','y29Kzq','BIbtruu','ihvUyxy','BKDnC08','ig9Yihq','zMy8l2i','B2f0mZi','B24Gzge','Dg9Y','D1Pnt3u','mcaWige','DMvK','Dxm6n3a','DcbTyxq','ywX1zt0','zJu7yM8','AvH2CeO','AgLZiha','BLHZAve','zvvkr3i','iIbZDhK','ueT6Bei','nsiGC3q','v1DQCKS','svjMBwu','DxjLzca','yw5ZCge','r0DFr2e','C29SAwq','BxmGD2K','CLvrvuy','BgvYigG','zxGTzgK','ig5Via','DLrfvva','pZWVC3a','lde0mYW','AwvSzca','BeTfzvC','BNrxAw4','ChrY','sfrnta','qNLjza','DgHLig8','Cg9Z','AxnWBge','Ag9VA1a','BgrZlIa','mYWXnZC','Aw4Onti','CujlD3q','C21uExa','zMfJDg8','Ag90icG','zfHTAe8','ww9nwvq','rNDWBNm','zsbYzxa','BwvTB3i','EvPuEM0','ywLSywi','DgHPBMC','whHZrKG','zIb0Agu','zxnWyxC','AwqGzg8','zhHbtvG','B2jM','zwf0zva','CKnVBNq','Dg87iJ4','nsWXndm','igLZig4','Dg9tDhi','ihjLCg8','AwDPBMe','jwnBC2e','z2XVyMe','CgrJCLm','Ahzsqwm','mtm4ntmYmJnrBKLVz0e','Aw5ZDge','DxjHx3m','CZPJzw4','B3vYy2u','yNL0zu8','B3zLCMy','pt09u0e','zxnVBhy','ks4G','vLzNquG','C28GDgG','zYbTyxi','BNrLCJS','AgvSBg8','DerHDge','y2vKigi','rgLMzIa','Dxm6nNa','zefZCuC','Axb0igK','BM9ZCge','Cg9ZDe0','C3bLzwq','BMCGB24','igfUzca','B2jMsq','z2fTzq','C3bSAxq','ndKWmJG0tgDAzMrT','BMrVDY4','q01Xq0S','BcbHz2e','lde3nYW','tvD5rxa','BM9Yzwq','zxG6mJe','v19F','u2HHCNa','zgDeCLq','AgvHza','CenZBuK','D3jHCdS','phbYzsa','psiXiIa','txPZC2i','EhL6','AwLTv0q','icaGia','lKHfqva','uuXOvvO','zvDRqMG','ndmSmtC','lK1Vzhu','uMvSB2e','DxDTAYa','CMvTB3y','BwuUx2C','tvfqBg8','yw5Jzsa','Dgf5CYa','BM8Gvxa','Ag90CYa','icaGica','Ag90','nNW1Fdm','EhPQsLy','C2L6zq','qM90Aca','y2u7y28','mtrWEdS','yMfJA2C','mcbMAwu','CM91BMq','zNv5u2m','ic0+ia','BNrLEhq','D2fYBMK','DgvK','Bwf4lwG','Ag9ZDg4','zgf0zsG','CgvYBw8','EKLIC2O','yw1Ligy','rgv3EwG','CMfUzg8','EMnlsuq','wu1oCwm','ChjLDMu','ChrPy3i','s0PWz3O','uuTvEuS','C3bHCMu','BgqGAxm','rviGD2K','Cwj6quS','CgvZia','D2LOrfe','Bwvhyw0','zMfRzq','AwzYyw0','mZfXDvPgtMu','AxHLzdS','iJ5ZywS','zYbPBNq','EK9uuMy','ztOXnha','sg5MvvC','CLDyru4','BNrYB2W','A2vKihu','Bg9dAge','y09dAeC','pt09','B2TZigW','Ag9Ksw4','yxjT','BM8GCMu','wKnUDNG','phnWyw4','C3r5Bgu','yNvPBgq','ihnPBMm','B3i6i2y','A0DJvgW','y2uSihm','Ec13Awq','z2LUigC','ktTIB3i','zwfKEsa','zcbYz2i','u0rprgq','Cg9Zqxq','CMvZB2W','ChvZAa','Aw5PDgu','Esb0Exa','C2vYlxm','Ag9VA3m','B250lxC','o2zVBNq','DMvhyw0','kZb4','BNrPBca','we5yreS','nJTMB24','CeXvyuO','B2jMqG','zw5LBwK','uurAzgK','CMf3','z2fTzsa','AwWYq3a','Bw9YEvq','z2v0vwK','yvLdr1u','AgfKB3C','mNb4idC','igrPzca','zeHxsw0','vwLfB0G','lZeUndu','zsXdB24','DxjJztO','BureuLG','nhb4ide','CMfTzsa','ihDOAwm','wwvUCwq','ChGGlte','qMTXy2W','DgGGB3i','yw5LBca','lwjYzwe','CYbHBMq','Bwf4','BhvNAw4','mhb4oYi','Ee5UvMK','D3jHCdO','swLWsKK','ihrOzsa','B206mxa','BgXLzca','yMfZzq','DxjHimk3','igL0ihm','o2jVCMq','Ahq6nZa','ruHVzMm','Efrgqwm','BfDHCNO','CKnVBg8','zYaVigO','ywjSzsa','BNrPyxq','weXbz1C','C2nYAxa','C3rHCNq','vevhqwW','DxjHtwu','z2LMEq','BwvUDc0','DcaWicG','ignVCgK','ifrOzsa','Bgu9iMq','rgrUChO','rhrmsLq','B3vUzcW','zgL1CZO','ihbHC3m','m3WYFdq','uvLcqve','msiGC3q','CMvKia','CuL2BNO','mIWYosW','A2rTDxO','ms41ihu','sgvHBhq','wMnNEvy','AxjLuhi','CMuGkhi','yw5Nzsi','zxnW','mNb4o2i','DgfNtwe','AwrLBNq','zw50igK','zMLSDgu','zxiTCMe','pJWVzgK','EKLXzge','lxDLAwC','C2v0vwK','lt4GDM8','BNnPC3q','mI4ZlJa','vKTdy2W','BwfYz2K','rhzIq3O','ufLzDKm','psjZDZi','D2fYBG','veLwrq','q2H5tu0','vKuGDG','vgHLigC','sMXor3e','x3j1BNq','CMvKic0','q1bZEw4','BKrbwhi','sgvHCca','ifnxlvC','igrVy3u','wgjKr20','lwe9iG','mhb4ic0','z2fTzvm','A0fmqMK','psjWywq','uNr6sKi','yxbWzw4','uMfqtgS','vNDZs1e','mtr8mNW','rhPuwfK','zxbSywm','ALrQrxi','BIbuyw0','ihzPysa','igjSB2m','A2v5zg8','icaHia','AM94zLe','yLD4yKi','AcbMAwu','vvjbx1m','B25JBgK','ms4WEdW','EeXxq1e','yw1LlGO','AwvK','y2nlqu8','zgrPBMC','C1PYsu0','igHVB2S','BfzHt2i','B2jQzwm','mhb4ktS','iMzVBgq','BfHYyMu','uNvUDgK','zxjYB3i','ufjgA3e','tg9Hzgu','idaGyxu','yxrHihi','nhWWFdi','ue5kzfu','AxmGD2G','C2v0','Dcb3yxm','BMnLCW','lJKYktS','tfDrAvm','z0jlshK','CKrcsLa','zxHPC3q','zgL2','m3WXFde','s1vsqs0','mtrrBNbPzhK','Dde2','yMfYzsa','qKHWz1a','v1rpB0q','y2XTCey','ztPWCMu','A2LUza','CJOXChG','DcaOC28','mJu1lde','BNrezwy','idyWCYa','C3bHy2u','EwXLpsi','r0vfDNO','BhzsuwG','AfnJCMK','AtmY','oJHWEdS','zMXLEc0','owm5o20','pgj1Dhq','tKfPvMq','icaGDhK','rw10t3O','x2DHBwu','Ce5tA3G','pgiGC3q','yw55ihC','C3rHBMm','CMuG','Dgv4Dem','CYb3zxi','BcbKAxm','yM9KEq','yu1nAuK','Dc5wywW','CMuGAwC','rwzluLm','A2v5vxm','C2v0sw4','lJuIihy','sKXPBuC','zuPJCeG','BwLU','BMD0AcW','ChGGC28','BNq6Aw4','EdTVDMu','C2vSzwm','qxHJq1a','qwLvreW','sw9IEM4','zw5Jzsa','i3nHA3u','DwvxCMe','B250zw4','CgXHEwu','wvzbtxm','o2nVBg8','zw4Gyw4','DgfIBgu','y29SB3i','lxGIihm','CMeTC3C','CMvMzxi','BNn0yw4','CMvUDdS','AxrPywW','wxLwrum','y2XPCgi','ufboq08','ihjNyMe','Dxr0B24','BcWk','yxbWBgK','qLfcB0m','qM90','r1rhAKW','BgX4vLm','CMvUDca','C3CYlxm','sxHrzfi','Dc1ZAxO','icaGDMe','Aw4TD2K','C3nPBMC','ywDLCG','x0DHBwu','ihvWk2q','uuLbwfq','zuf0rMK','zgLMzG','suPJruS','zsb0Age','CNqGEwu','y29MB3i','zxmGAxq','EvrHCa','C3rYAw4','zLr0qMS','D2fSA2K','B01yy00','BNnWyxi','v3jHCha','C3rHDhu','lxnWzwu','BgPPBhy','CdO2ChG','As1TB24','iIbZDgu','u055Ewy','y29WEq','A2v5','zM8Qksa','BMfTzq','BxHOEhG','whvWAhm','Aw5Lza','C29SDMu','DgfSBgK','oM5VBMu','CMfUz2u','tLLND0K','Cw1su2W','ztOXmxa','CwDNEwm','Bwvnyw4','4Ocuihr3BW','zM9UDdO','zxi7zM8','Aw4U','sevbufu','A3mG','DhLWzum','EdTHy2m','igfYzsa','Bgu9iMi','B2XVCJO','BMTLEsa','ignVBNm','igLUlwy','Aw1L','Cd0Imc4','ufKGve8','zvn0CMu','BNq4','s1rxs1a','C3CYlwG','ihbHBMu','qwDzD0e','zxiGzMK','Aw50lxC','zZOXmha','rw5LBxK','lGOkswy','yxbZAg8','BMuGAg8','Bwf4lxC','yw1L','y2HLy2S','ww91zeO','BvDHDva','BwuUy3i','EfrYEfi','BMTvqKO','q291BNq','oJK5oxa','zwDPC3q','ihvPlw0','sNHduu8','A1fVEw8','CJOJzJC','tw9KDwW','BI5OB28','zwvKig8','CMvHzhm','ig9IAMu','zwLNAhq','CgfUzwW','mJyWndjyuM5Hvfa','BwuOkq','igTPBMq','EsbHigq','y1zTwxu','oJaGmta','B3nLCY4','icHZB3u','B246y28','zYbxzwi','y3POveK','Bcb1Cgq','BwfUEq','EdTWywq','Ate2','DciGC3q','Dw5PDhK','zw50','uxHgBuO','lxjHzgK','DhjHBNm','AfLvueK','ohb4ide','ihDHCYa','EKzLteC','AhvKlwm','B3CU','icbOB28','y29UDgu','wxLyrMC','rKjdruq','B2XLig4','idHWEdS','r1jpr0q','zxnZywC','EvnVCey','zenOAwW','zNLVu0q','ALn4Ewe','CvrbANO','nYWUncK','zgLUzZO','i2zMzdq','igLKpsi','Dw5Kzwy','EhzQrLG','rvHfsw4','Dw1Uo2C','ywrKCMu','BLzmwfa','ChrLza','yxjN','EtPUB24','FdeZFdi','nZq4mZa','y1Dus1O','BJOG','tM8GCMu','AgfZtw8','ywLUAw4','igvUzca','DcbKyxq','zxmGBM8','ufbyuvi','y2TfuKe','zsbNyw0','B29M','yxvSDa','Dg9gAxG','DhDPy2u','CMvIDwK','ywWGBM8','yxr1CMu','qu5pveG','B25Tzxm','C3CYlwy','zLjnAe0','rLbty28','D2f0y2G','x19ZywS','r0rdtKS','kdi1nsW','uvHbqxa','Aw1Lsxm','ig1PBJ0','Aw5Uzxi','DxrVo2y','ihjLywm','Dg9YqwW','EcbZB2W','y1LQC2W','BMnLC1i','BwuGlsa','q0nVtKW','DgHLBG','D09LsK0','khrOAxm','CgLUzYa','uvD5zhy','nJq3o2q','nZCSlJq','suzvufy','seXOsuy','A211rNu','B3DUkq','BgfZDeu','AwHcz3e','yxr0zw0','ELrRuKC','DgLHDgu','A2LUzYa','zwqGBM8','EfPwvwO','kdiXlde','CMvWBge','uMvZB2W','DgG6mJK','D2PsuLy','EhbVCNq','yxa8l2i','D2zYvKi','i2jKytK','t2H4A0m','CNvUDgK','zvbSDwC','ENHwrem','uMvNAxm','yNL0zuW','qNbMue4','icaZlIa','t2zMC2u','qwPmy1i','rJKPpc8','zsbVyMO','zhvYAw4','s2HUAuW','ywn0','Fdf8ma','n2vLzJu','qM90ige','DMfS','ywqGzMe','B05xEMS','C28GAg8','A0zlwvu','Cg9PBNq','veDvBvG','renSvM4','qxrgAxi','B3qGD2K','Ewv0lG','BwvZC2e','txrJzNu','z3jVDw4','BM8GBgK','ihbVC3q','zhjSuuu','ALzNy2C','C3mGmhG','CMvKige','igj1Dca','C2fUzq','zhrOoJm','mtbVsKP4tfa','zJmY','x19tquS','FdD8nxW','C1LNu1y','wfDwsgy','tK5KqLi','yZfKo2m','AwXLzcW','BML0Awe','ig5VDca','yxbWBhK','mtC3lc4','ihnPz24','ywn0Axy','DgHLigm','D2HHDca','r2fTzq','DtmY','iJ5gosa','lwXLzNq','Ag9VAW','Fdr8nxW','CuXwBuG','re9nq28','l2j1Dhq','Bwf4psi','zwqGDgG','DhLxzwi','y3vYC28','qxnZzw0','ksbVCIa','DhLSzt0','EI1PBMq','BM90zq','mtCZntC1EezjA1ne','wfvwzfO','zMLYzsa','t1n0suy','DhP1A1y','z2LUlwW','lg1VBM8','C29Syxm','tLnAwwe','AguGD3i','lwL0zw0','q3Ddy08','ywXPz24','BMDZ','igfYBwK','tevPBwK','t0TkwMq','zxG7z2e','uwDqtMe','qwHjy0m','AwjbBgW','yvzywhq','zxmGDgG','BvvntMC','ihn0EwW','yMX5lum','A2DYB3u','tu5mtKO','vLLiv2m','r2XjC0q','sgfvthG','C3vYDMu','ChGGmZa','qxDJsKK','qKrntMe','yxG9iJu','mtmZntK4me1Xu3nAqW','yuDpzMG','BIb0Agu','BMuUifq','uMPer04','B2jMrG','Aw50zxi','thLttNe','ALvsAKm','r2fTzsG','D2LKDgG','DZOWidi','BgfZDfC','vvDYEwy','z25HDhu','uw1my2u','zM9Sza','mty1nta1mLDlBLLkAa','mJGZmdeYmhLqueD5sa','zwvKzwq','icaO','ywn0B3i','u1PJyLi','ywjjA0q','ywX0','BLr5Cgu','CMXHyMu','vg90ywW','AxjZDca','BgLKihi','DJiTy3m','CgfKrw4','nYWUmZu','t0LKvLm','oNjNyMe','BvfXrw4','B3nWywm','Densyue','yxmSBw8','B25PBNa','BgvUz3q','A2v5u28','EI51C2u','lJe4ktS','B3vUDa','CMuk','EgPtwMi','vMzMEhy','uM1As3e','zgf0ys0','ignHChq','yxbP','BwvHBNm','o2fSAwC','DLvvrvm','ywDHAw4','igHLEd0','zwXHChm','BLLoCLy','Aw1Lr2e','CNnVCJO','iZHKn2e','mxb4idy','DYbNBg8','rhrLAfC','A3mGD2G','CwL2Cwe','uxjHteK','z2v0sw4','C3qGysa','BM90ihi','rMjsC1a','CM1VBMS','qvjtz2i','C2v0ica','re9MBge','Bwv0ywq','A3mUBgu','B3vUzdO','Aw5KzxG','sYbZy3i','BM90ig0','DNr1B1C','oInMn2u','zhvSzq','tMnjzwK','CgHjsfC','BMqGr0C','suzfB1u','AgvHCei','sNL3veG','C3rLBMu','lxyYE2e','CgX1z2K','EdTMBgu','A21Yvhe','zxzMt3q','iZjHmgy','lwnVChK','DgG6mZq','Ag9VA0y','AgfJve0','vw55u1G','C2XPy2u','y2GUC3K','AguGB2W','pJiUmhG','B3jPz2K','ihrOAxm','BMnL','mhb4idu','mtbWEdS','CenVBNq','zwqGyNu','y1fxvMq','D1Lctu8','B05yBw8','qu5eihq','CI1Yywq','s0Hus0m','A2v5q28','C2vSzIa','rwPHqvC','AgLSzsa','u2fRDxi','C2fNzq','yxnZtMe','ywjZ','zw50lwm','nduPoW','zwn0Aw8','zwqGysa','lNjLC28','vxbKyxq','igeGBgK','zg9JDw0','CxrpDK0','D3jPDgu','CMq7zM8','oJeGmsa','CJPWB2K','rKrewKm','AguGC2K','iNDPzhq','psjJB2W','yxa6nha','BhvLpsi','sKzNCxy','vgP3Egm','ywz0zxi','mNWXFda','C0v3Bxm','ig9Uy2u','ywDLigG','BM93','ifnRAwW','ihnVigu','zYbMB3i','t2vcqLi','zwn0Aw4','mJbWEca','r1ncwK0','CgfYzw4','zsb1C2u','zLjhs3i','BwuGAw4','uMvHC28','A2v5qxq','zgf0yxm','Aw9U','ktTJB2W','Fdf8mhW','BgrPBMC','uK12Exq','rMvPDhK','zw5LBxK','BgX3yxi','zgLZCgW','rujXEha','y3rZimk3','DwLSzci','lsbvBMK','B21Tyw4','zwfJAge','AgfIBgu','CNvUCYa','Bxm6y2u','B2TZihi','zxKGAxm','CxfRAK4','suTZsK4','DdmY','AxrOie0','B2XPzca','yZKIpNC','y21K','yKHsB3G','shvjz1m','z0jpAwy','ie9o','ihnVBgK','Chr1CMu','D0T6rNa','pgrPDIa','oInIzge','DxjJzq','Dg9WoJe','CMHxz08','AwnOlJW','yw1PBMC','BvDbzfu','rMjSugq','qNjfzhq','igrHDge','B2SGAxm','y2XVC2u','DxjHvge','psjIywm','DxjH','ywXSzwq','u295rKG','Bxv4sgm','vvDnsY4','C25HCa','yNvPBhq','i2zMogy','oJfWEca','DgeTyt0','A2vLCa','A3vYyv0','Dg9W','lwzPCNm','ys1Hpsi','iefdveK','zhrOoM0','z2v0rMW','zYbMywK','ysbSB2i','ExrLCW','Dg9ju08','CIb0Agu','yxjTzwq','yxK6zMW','C291CMm','sujHtum','CML0Dgu','BMqU','BgW6Aw4','ywrKAw4','icaYlIa','BMCUcG','n2e2ntG','AwzLig8','D3jVBMC','EgjIqNe','wgzduwm','4OcuigzYyq','BIbPzNi','Axr5','AgvHCfu','ruXHCe8','weL1q2m','CKXPC3q','AZPICMu','igDSB2i','z2jHkdi','ywjSzwq','tvbyzKG','ChG7y3u','B24+','Aw5N','zMfPBgu','B1zxs04','zsbPBNm','BNrPBwu','zgf0yq','i2zMyJm','zsbLDMu','yMX5lMK','B3j5','zw5NDgG','A2v5CW','y3nZvgu','D2fZBvq','DhLWzq','igDHBwu','Bg9N','BhqGC2K','zgf0zsa','BYb0Agu','l3nWyw4','igL0ige','CMnLoIa','zxqUia','wM5lANe','igzVCIa','igfYBwu','zgvMAw4','lYbQDw0','z0TWr1e','vgHLigG','B3jKzxi','BM9Uzq','igL0igK','CM1OEfu','Aw5KB3C','BMfSrNu','yMfS','B2fYza','AgL0CW','yxjKlxi','BxvYExe','zxi7iJ4','ywnRz3i','tJWVyNu','ig9MzG','oYi+u24','Cwrwufe','qvbvoca','BNqZmG','Aw9UoMy','zwrnCW','sev3qMG','C2nHBge','Ag9ZDa','AK1Xyxe','AM9PBG','AKDvAee','DufIzMm','BIbHihi','uIbbq1q','uKfqueu','zwn0ihC','lL9Nyw0','BLj1BNq','sw5KzxG','ANHYwwG','zxHWB3i','Cu1hqKq','z2vY','EtPMBgu','A1flBfK','ihnRAwW','ywrKrxy','ys1ZDY0','vw5PDhK','zYdcTYa','x19hzw4','q3fJufi','zvbYB3a','DMfSDwu','AxnHyMW','zdDHotK','CMfWoNC','DcbPBMO','ihbHz2u','rvnqoIa','C0PpCMS','s0vZD3a','zgvYoJe','yxLTuuO','Dc5KBgW','khmPigq','zZO0ChG','rviGvvC','Fdn8nhW','zg93','zw50tgK','DY5vBMK','v3nOu3G','ChG7yM8','rwL0Agu','uwHJCMO','t0PrvvC','quX4vum','DgfN','sw5ZDge','ieeGAg8','vgv4Da','zdP0CMe','zwXLy3q','zw50o2i','z2uUrgu','wwreB2m','ohWWFde','lwjVDhq','CMfWoYi','Cgu9iNi','yxjTAw4','AhjLzG','t212qwe','ysGYntu','zMXLEdO','icbVyMO','i3n3mI0','Esbku08','DgvYzwq','CMrLCJO','z0TjqMq','zwqGEwu','shj5uem','Bgu9iMm','zgvIDwC','DMvYC2K','s3rUq0i','zcbPCYa','t251ug0','qxLRuLi','ve1cq2e','zt0Iy28','mtjWEdS','zMzZzxq','BNvTyMu','CxvLCNK','B24GAwq','zxH0','ksWGC28','AhvK','B2SGzMK','z2v0rwW','zw50rwW','Cg9QvuW','DgvZDa','AMXREK4','BNrLBNq','y2fTzxi','BwuGD2u','qxbWBgK','y3jLyxq','B2jUwhO','z2v0q2W','yuDdzge','ifbpuLq','u0TjteW','CMvWB3i','seTQCKS','m3W0Fdy','yLnwzw8','ihbHC3q','ihbHDgm','oxWXmq','ig5Vigu','D2HPDgu','r1n5A2q','D290CuK','Ag92zKe','tKfst1C','EuvMDvO','AgvYAxq','C2fRDxi','DxjPBMC','w2rHDge','vgHPCYa','lc40ktS','BgvY','igHLyxa','zw1LBNq','ndC0odm','yM9Yzgu','zcdcTYa','CMzSB3C','mxb4ihm','D1L6DhC','zw5HyMW','uwrJywy','Eca4ChG','zYbZDxm','zuvSzw0','yxrLigy','oMf1Dg8','twDuBeW','yxmGBM8','yuTut3K','yxv0BZS','y0LUChu','D2LUzg8','lIbeAxm','BLbmwee','i2y3zwu','lwe9iMy','yxrnCW','y3qOCYK','v2vItw8','yNvMzMu','AgLKzgu','ig9Mia','DgLUzYa','ktSGBM8','zwy1o2i','u3rYAw4','q2PsD1y','CM93CW','zxqSig8','y2GGDgG','vKTvAey','v3zVy0S','Cffoqwy','EeHNqxi','DvnXrg4','uNfOCgy','ihDOAwW','DgnOzxm','igLUC3q','ELv3uNq','BK1HBMe','yZK7BwK','u3bLzwq','BwuUCMu','zNvUy3q','C25HChm','BxbUDe8','ug96r0m','BYb3zsa','ys9vv00','iJ5dB3a','u2vSzwm','D24Gvxa','BMv2zxi','CLbMu3C','BYbHihq','lcbuyw0','mtqZlde','twrRCei','CfzJyw0','Dgz1tK4','zJDLzwy','mdaWo3u','yNv0Dg8','Cg9YDge','CNjVCG'];_0x791f=function(){return _0x3c69c3;};return _0x791f();}function _0x9852(_0x438a24,_0x25e5f0){_0x438a24=_0x438a24-(-0x22c8+-0x1cb6+0xa0*0x67);var _0x55673a=_0x791f();var _0x448e5a=_0x55673a[_0x438a24];if(_0x9852['yazFjU']===undefined){var _0x52b21a=function(_0x2ce2b8){var _0x1adedb='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x6d3ab0='',_0x53d8e5='';for(var _0x23b559=-0x380+0x1e12+-0x1a92,_0x33ed70,_0x560c5f,_0x19387b=-0x19d5*-0x1+-0x269*-0xa+-0x31ef;_0x560c5f=_0x2ce2b8['charAt'](_0x19387b++);~_0x560c5f&&(_0x33ed70=_0x23b559%(-0x76b*-0x3+0x1*-0x10af+-0x58e)?_0x33ed70*(0x185f+0x10e1+-0x2900)+_0x560c5f:_0x560c5f,_0x23b559++%(0x1c*0xa3+0xbaf*-0x3+0x113d))?_0x6d3ab0+=String['fromCharCode'](0x230f*-0x1+0x101d+0x5*0x3fd&_0x33ed70>>(-(-0x544+0x10*-0x23b+-0x31*-0xd6)*_0x23b559&0x2*-0x607+0x222f+0x161b*-0x1)):-0x1568+-0xd50+0x22b8){_0x560c5f=_0x1adedb['indexOf'](_0x560c5f);}for(var _0x21a78f=-0x1f8c+0x2524+-0x598,_0x455ee0=_0x6d3ab0['length'];_0x21a78f<_0x455ee0;_0x21a78f++){_0x53d8e5+='%'+('00'+_0x6d3ab0['charCodeAt'](_0x21a78f)['toString'](-0xe0f*0x1+0x1*0xf0b+0x2*-0x76))['slice'](-(-0x953+-0x1b54+0x5*0x755));}return decodeURIComponent(_0x53d8e5);};_0x9852['WRxdmL']=_0x52b21a,_0x9852['OFlsrP']={},_0x9852['yazFjU']=!![];}var _0x46a6e2=_0x55673a[-0xce9*-0x1+-0x99+-0xc50],_0x2e276e=_0x438a24+_0x46a6e2,_0x2701ed=_0x9852['OFlsrP'][_0x2e276e];return!_0x2701ed?(_0x448e5a=_0x9852['WRxdmL'](_0x448e5a),_0x9852['OFlsrP'][_0x2e276e]=_0x448e5a):_0x448e5a=_0x2701ed,_0x448e5a;}(function(_0x2d2fc7,_0x110a42){var _0xfee720=_0x9852,_0x13f46a=_0x2d2fc7();while(!![]){try{var _0x5e049d=parseInt(_0xfee720(0x58b))/(0x1674+0x10c1*-0x2+0x13*0x95)*(-parseInt(_0xfee720(0x1cf))/(0x25f6+-0x1175+-0x1dd*0xb))+-parseInt(_0xfee720(0x542))/(0x7*0x28c+0x1a94+-0x2c65)+parseInt(_0xfee720(0x2b9))/(-0x679+-0x26d2+0x1*0x2d4f)+parseInt(_0xfee720(0x295))/(-0xf29*-0x2+0x1e6a+-0x3cb7)+-parseInt(_0xfee720(0x2ca))/(-0x8b*0x3a+0x215c+-0x1d8)+-parseInt(_0xfee720(0x11a))/(-0x6bc+-0xac*0x6+0x399*0x3)*(parseInt(_0xfee720(0x2cb))/(-0x2341+-0x73d*0x3+0x3900))+parseInt(_0xfee720(0x525))/(-0xac9+0x2581*0x1+-0x1aaf)*(parseInt(_0xfee720(0x272))/(-0x15bb+0x347+0x127e));if(_0x5e049d===_0x110a42)break;else _0x13f46a['push'](_0x13f46a['shift']());}catch(_0xf1ea8f){_0x13f46a['push'](_0x13f46a['shift']());}}}(_0x791f,0x33590+0x1bb4*-0x5c+-0x270ba*-0x5),((()=>{'use strict';var _0x212d44=_0x9852,_0x2376e3={'czhTI':_0x212d44(0x58a)+'e','cetwk':function(_0x4b882b,_0x2429f2){return _0x4b882b<_0x2429f2;},'FjdRG':function(_0x3a826a,_0x1f8bf6){return _0x3a826a!==_0x1f8bf6;},'wLPlX':'NAROW','muxHc':_0x212d44(0x18e),'rhWgO':_0x212d44(0x55a)+'le','PPNCO':'ZJVkr','nPLXA':'Jcagf','MNLNJ':'sakur'+'a-sw','OmvAa':'funct'+_0x212d44(0x362),'veUMV':_0x212d44(0x47a)+_0x212d44(0x411)+'v2','tzukV':function(_0x546a39,_0x388a9b){return _0x546a39===_0x388a9b;},'jlkzN':_0x212d44(0x47a)+_0x212d44(0x411)+'v2-cs'+'s','YoVot':_0x212d44(0x59e),'xNnVi':_0x212d44(0x117),'XLAgW':function(_0x2734d8){return _0x2734d8();},'wihDQ':function(_0x3cb067,_0x15502a){return _0x3cb067(_0x15502a);},'xvjFX':_0x212d44(0x521)+_0x212d44(0x39e)+_0x212d44(0x1b0)+_0x212d44(0x13c)+_0x212d44(0x3c3),'aYCGU':'color'+':','yAQDI':_0x212d44(0x37e),'ALxUC':function(_0x5680d7,_0x4a7a05){return _0x5680d7+_0x4a7a05;},'YoMYT':_0x212d44(0x5bb),'SKQyc':_0x212d44(0x4d4)+'74','sZrIM':'LIVE\x20'+'·\x20','qLVmH':function(_0x1873ef,_0x518b32){return _0x1873ef>_0x518b32;},'MdkpB':_0x212d44(0x1f9)+'8a','rWXEN':function(_0x4d09c6,_0x173fa8){return _0x4d09c6+_0x173fa8;},'QgPNa':_0x212d44(0x43d)+_0x212d44(0x413),'IxQdR':function(_0x167295,_0x30cbea){return _0x167295!==_0x30cbea;},'mUMNg':'GEEvz','RjDGN':_0x212d44(0x536)+'vs\x20sn'+_0x212d44(0x1b7)+'t:\x20','Feity':_0x212d44(0x31a)+'1b','zUwRt':_0x212d44(0x497)+'f5','CWImE':'BrEdt','HLhIF':function(_0x18257f,_0x2521fa){return _0x18257f!==_0x2521fa;},'euAhZ':_0x212d44(0x4ec),'MWyEp':function(_0x1efad7,_0x34341a){return _0x1efad7(_0x34341a);},'VjMtl':'PKxmR','wYBMO':'%c[sa'+_0x212d44(0x39e)+_0x212d44(0x354)+_0x212d44(0x5e5)+_0x212d44(0x51f)+'rt','OnuPm':_0x212d44(0x5b2)+_0x212d44(0x610)+'ht:70'+'0','qTAjz':function(_0x2d4cfb,_0x3fd659){return _0x2d4cfb(_0x3fd659);},'yloRP':_0x212d44(0x530)+'e\x20rem'+_0x212d44(0x20a)+_0x212d44(0x48b)+'pects'+'\x20are:'+'\x0a\x0a','Ozjqh':'\x20\x201.\x20'+'Tampe'+_0x212d44(0x301)+_0x212d44(0x375)+_0x212d44(0x27c)+'injec'+_0x212d44(0x49f)+_0x212d44(0x4cc)+_0x212d44(0x281)+'ross-'+'origi'+_0x212d44(0x3ba)+_0x212d44(0xfb),'IBaMC':function(_0x45657c,_0x2ed13c){return _0x45657c||_0x2ed13c;},'zIbsj':_0x212d44(0x106)+_0x212d44(0x55e)+_0x212d44(0x1ba),'JFgqv':'posit'+_0x212d44(0x3f9)+'ixed;'+'left:'+_0x212d44(0x453)+_0x212d44(0x387)+'2px;z'+'-inde'+'x:214'+_0x212d44(0x205)+'00;wi'+_0x212d44(0x3a3)+_0x212d44(0x506)+'vw,62'+_0x212d44(0x103)+_0x212d44(0x574)+'eight'+':78vh'+';','xtigD':_0x212d44(0x56c)+_0x212d44(0x56e)+_0x212d44(0x4cb)+_0x212d44(0x279)+'olor:'+'#f7ee'+_0x212d44(0x4e4)+_0x212d44(0x446)+_0x212d44(0x486)+_0x212d44(0x37a)+_0x212d44(0x4d3)+_0x212d44(0x124)+'43,17'+'7,.5)'+_0x212d44(0x5e1)+_0x212d44(0x60d)+_0x212d44(0x5f8)+_0x212d44(0x56b),'aVXXt':_0x212d44(0x19c)+'12px/'+_0x212d44(0x601)+_0x212d44(0x188)+_0x212d44(0x2dd)+_0x212d44(0x5c8)+_0x212d44(0x29c)+_0x212d44(0x29b)+_0x212d44(0x127)+';box-'+'shado'+_0x212d44(0x2c4)+_0x212d44(0x327)+_0x212d44(0xe3)+_0x212d44(0x359)+'#000;','qtOvM':_0x212d44(0x36a)+_0x212d44(0x3ab)+'ex;fl'+_0x212d44(0x4f5)+'recti'+_0x212d44(0x1d7)+'lumn;'+_0x212d44(0x52b)+'low:h'+'idden'+';','cOChG':function(_0xb6ca42,_0x5d9429){return _0xb6ca42+_0x5d9429;},'ZcgyV':_0x212d44(0x136)+_0x212d44(0x128)+_0x212d44(0x159)+':','cWTKZ':_0x212d44(0x58d)+_0x212d44(0x5df)+_0x212d44(0x40f)+'lwarz'+'</b>','DvbCz':_0x212d44(0x59d)+_0x212d44(0x1fa)+'sw2-b'+_0x212d44(0x36d)+_0x212d44(0x2ad)+_0x212d44(0x452)+'lor:#'+_0x212d44(0x3b4)+_0x212d44(0x5b7)+_0x212d44(0x16e)+_0x212d44(0x198)+_0x212d44(0x1dc)+_0x212d44(0x1f8)+_0x212d44(0x2f7)+_0x212d44(0x42b)+_0x212d44(0x446)+'1px\x20s'+'olid\x20'+_0x212d44(0x4d3)+'255,1'+_0x212d44(0x559)+'7,.35'+_0x212d44(0x5a6)+'der-r'+'adius'+_0x212d44(0x1c2)+'x;\x22>v'+_0x212d44(0x4f8)+'an>','wjRRV':'<butt'+'on\x20id'+'=\x22sw2'+_0x212d44(0x31b)+_0x212d44(0x4e9)+_0x212d44(0x5f4)+'ispla'+_0x212d44(0x203)+'e;mar'+_0x212d44(0x29a)+'eft:a'+'uto;b'+_0x212d44(0x3f2)+'ound:','CvVoD':_0x212d44(0x130)+_0x212d44(0x457)+_0x212d44(0x619)+_0x212d44(0x15a)+_0x212d44(0x292)+'\x22back'+_0x212d44(0x268)+'d:tra'+_0x212d44(0x182)+_0x212d44(0x436)+_0x212d44(0x3e6)+_0x212d44(0x39b)+'solid'+_0x212d44(0x163)+_0x212d44(0x220)+_0x212d44(0x4c2)+'77,.4'+_0x212d44(0x363)+_0x212d44(0x5a1)+_0x212d44(0x259)+_0x212d44(0x5e1)+_0x212d44(0x60d)+_0x212d44(0x5f8)+'7px;p'+_0x212d44(0x3b1)+_0x212d44(0x424)+_0x212d44(0x1ef)+_0x212d44(0x28f)+'r:poi'+'nter;'+'\x22>x</'+'butto'+'n>','bBSnD':'<div\x20'+_0x212d44(0x59e)+_0x212d44(0xe6)+_0x212d44(0x1f8)+_0x212d44(0x1e5)+'2px;b'+_0x212d44(0x3e6)+'-bott'+'om:1p'+_0x212d44(0x228)+'id\x20rg'+'ba(25'+_0x212d44(0x51c)+',177,'+_0x212d44(0x2e4)+'displ'+'ay:fl'+'ex;ga'+'p:8px'+_0x212d44(0x2ee)+'n-ite'+_0x212d44(0x373)+_0x212d44(0x532)+_0x212d44(0x441)+_0x212d44(0x4df)+_0x212d44(0x225)+'lex-w'+_0x212d44(0x41a)+_0x212d44(0x43b)+'>','QxFmJ':';\x22>','rPfSw':_0x212d44(0x59d)+'\x20id=\x22'+_0x212d44(0x21a)+_0x212d44(0x2ce)+'label'+_0x212d44(0x4e9)+_0x212d44(0x44a)+_0x212d44(0x1a5)+_0x212d44(0x248)+_0x212d44(0x4b2)+'n-wid'+_0x212d44(0x31c)+'px;\x22>'+_0x212d44(0xf9)+_0x212d44(0x3db)+'>','rNByZ':'<butt'+_0x212d44(0x457)+_0x212d44(0x619)+'-snap'+'\x22\x20sty'+'le=\x22b'+_0x212d44(0x3f2)+_0x212d44(0x307)+'trans'+'paren'+'t;bor'+_0x212d44(0x420)+'px\x20so'+_0x212d44(0x2d6)+'gba(2'+'55,14'+'3,177'+_0x212d44(0x47e)+'color'+_0x212d44(0x30c)+'ef5;b'+'order'+_0x212d44(0x1e2)+_0x212d44(0x4e1)+_0x212d44(0x1dc)+_0x212d44(0x1f8)+'4px\x209'+_0x212d44(0x3c5)+_0x212d44(0x2f5)+_0x212d44(0x260)+_0x212d44(0x3f1)+'Snaps'+_0x212d44(0x50a)+_0x212d44(0x253)+_0x212d44(0x4c8)+'n>','mxzdj':_0x212d44(0x59d)+'\x20id=\x22'+_0x212d44(0x1af)+'int\x22\x20'+'style'+_0x212d44(0x349)+'or:#8'+_0x212d44(0x419)+_0x212d44(0x285)+_0x212d44(0x214)+_0x212d44(0x4ad)+'e\x20wal'+_0x212d44(0x23d)+'/\x20spr'+'intin'+_0x212d44(0x5e7)+'umpin'+_0x212d44(0x531)+_0x212d44(0x2fa)+'ich\x20f'+_0x212d44(0x4fa)+_0x212d44(0x10e)+_0x212d44(0x389)+_0x212d44(0x3db)+'>','oWhqv':_0x212d44(0x574)+_0x212d44(0x1cd)+':62vh'+';\x22>No'+'\x20repo'+_0x212d44(0x17a)+'t.\x0a\x0aT'+_0x212d44(0x4e6)+_0x212d44(0x5d2)+'updat'+_0x212d44(0x17c)+_0x212d44(0x332)+'when\x20'+'the\x20g'+'ame\x20f'+_0x212d44(0x5cc)+'loads'+'\x20—\x20no'+_0x212d44(0x1a7)+_0x212d44(0x1ee)+_0x212d44(0x2cc)+_0x212d44(0x1b6)+_0x212d44(0x5e0)+_0x212d44(0x561)+'empty'+_0x212d44(0x4c1)+_0x212d44(0x577)+_0x212d44(0x1a6)+'is\x20no'+_0x212d44(0x41b)+_0x212d44(0x358)+_0x212d44(0x58e)+_0x212d44(0x3da)+'\x20cros'+'s-ori'+_0x212d44(0x5a5)+_0x212d44(0x579)+'rame.'+'</pre'+'>','qNEcA':'#sw2-'+'out','iNqMs':_0x212d44(0x443)+'x','xTrxR':_0x212d44(0x443)+'snap','Xuphs':_0x212d44(0x443)+_0x212d44(0x509)+'r','FuFDH':_0x212d44(0x443)+'facto'+_0x212d44(0x2d3)+'l','AykRR':function(_0x36a363,_0x2f58ab,_0x2b1414){return _0x36a363(_0x2f58ab,_0x2b1414);},'joxfQ':function(_0x18ed86,_0x21a730){return _0x18ed86+_0x21a730;},'lVaOb':function(_0x5525f7,_0x542d33){return _0x5525f7+_0x542d33;},'uzrtx':'frame'+'\x20\x20\x20\x20','UiEoH':_0x212d44(0x2cd),'jURjC':'yes','wwTkC':_0x212d44(0x132)+_0x212d44(0x586),'KtnCB':function(_0x536df9,_0x2d895e){return _0x536df9!=_0x2d895e;},'fTtBk':function(_0x1f3b24,_0x4479a8){return _0x1f3b24+_0x4479a8;},'wKzFp':function(_0x3c2a50,_0x385172){return _0x3c2a50+_0x385172;},'lvRQh':_0x212d44(0x3e5)+'ooks\x20'+_0x212d44(0x297)+'on\x20th'+_0x212d44(0x210)+'e\x27s\x20o'+_0x212d44(0x4bd)+'date('+_0x212d44(0x4a0)+_0x212d44(0x512)+'\x20capt'+'ured\x20'+_0x212d44(0x2ed),'pNSkx':function(_0x14c617,_0x1d847e){return _0x14c617<_0x1d847e;},'pojUL':function(_0x40a991,_0x33ad95){return _0x40a991-_0x33ad95;},'zxVDC':'\x20\x20off'+_0x212d44(0x303)+_0x212d44(0x1d1)+_0x212d44(0x564)+_0x212d44(0x16f)+'lue\x20\x20'+_0x212d44(0x564)+_0x212d44(0x564)+'raw','EmtOz':'numbe'+'r','EHofc':function(_0x35d337,_0x5eb4ff){return _0x35d337+_0x5eb4ff;},'hacTM':function(_0x59e659,_0x595e33){return _0x59e659+_0x595e33;},'ibAll':function(_0x56ca29,_0x1e2a2e){return _0x56ca29<_0x1e2a2e;},'DOfla':function(_0x4ba116,_0xa8a027){return _0x4ba116+_0xa8a027;},'KTWKP':_0x212d44(0x4f2)+_0x212d44(0x5d1)+_0x212d44(0x520)+_0x212d44(0x4ce)+'=','RmZKq':'\x20and\x20'+_0x212d44(0x5bd)+_0x212d44(0x5ab)+'ved=','vUUES':_0x212d44(0x1d6)+'rce:\x20','GhCFO':function(_0x3cee6e,_0x68e309){return _0x3cee6e!==_0x68e309;},'YyVEC':'AnfVB','hvRAc':function(_0x5c4f10,_0x146733){return _0x5c4f10===_0x146733;},'BQBoC':function(_0xa46fc8,_0x2000fe){return _0xa46fc8===_0x2000fe;},'OeBBR':_0x212d44(0x18f),'dFYKQ':function(_0x568306,_0x4bb460){return _0x568306!==_0x4bb460;},'obnXz':function(_0x442ad7,_0x4a2c10){return _0x442ad7!==_0x4a2c10;},'LgQEo':_0x212d44(0x37c),'HryPC':function(_0x301376,_0x3d2e97){return _0x301376<_0x3d2e97;},'SSVEn':function(_0x5368bd,_0x4ac468){return _0x5368bd!==_0x4ac468;},'fRGKr':'info','oNXmo':_0x212d44(0x1f5),'dgrlF':_0x212d44(0x313),'wZMOu':function(_0x140937,_0x3879df){return _0x140937>_0x3879df;},'IFEoU':function(_0x453c31,_0x3de061){return _0x453c31-_0x3de061;},'yZTzm':'akWzS','PPXQR':'undef'+'ined','qivqa':'insta'+'ntiat'+'e','xzjJV':function(_0x7b2a30,_0x476973){return _0x7b2a30<_0x476973;},'AhIcC':_0x212d44(0x3e7),'AxcCP':function(_0x15405f,_0x54bb93){return _0x15405f!==_0x54bb93;},'PozGC':'zVAJr','Qhcrj':_0x212d44(0x196),'wfrVB':'Runti'+_0x212d44(0x1be)+_0x212d44(0x519)+_0x212d44(0x5d6)+'\x20unav'+_0x212d44(0x511)+'le','ljilv':_0x212d44(0x47a)+'a-ski'+_0x212d44(0x369)+'z','muryq':function(_0x20639f,_0x2c9bea){return _0x20639f+_0x2c9bea;},'zFeLG':function(_0x4623a2,_0x54011a){return _0x4623a2+_0x54011a;},'BAZQg':function(_0x5c6f7a,_0x3e32a4){return _0x5c6f7a+_0x3e32a4;},'yEfuZ':_0x212d44(0x56f),'TMBCa':_0x212d44(0x474),'UWryf':_0x212d44(0x494)+_0x212d44(0x2f8)+_0x212d44(0x3ec),'JxCQO':'bare\x20'+'game\x20'+'bindi'+'ng','WvocK':function(_0x326647,_0xc8014d){return _0x326647===_0xc8014d;},'gCsTs':_0x212d44(0x494)+'w.','hYUPI':_0x212d44(0x5fe),'sEwms':_0x212d44(0x10c)+'|3|1','qHOGr':function(_0x313d75){return _0x313d75();},'kFurr':'trans'+'paren'+'t','oMXcM':function(_0x3edef0,_0x43aab9){return _0x3edef0+_0x43aab9;},'PKzlB':_0x212d44(0x1ff)+'ss\x200x','qifRR':'\x20past'+_0x212d44(0x480)+_0x212d44(0x20b)+'0x','SoyFH':_0x212d44(0x2c8),'kmrTq':'KCabN','Iobzn':'f32','XITpa':_0x212d44(0x118)+'0|0|6'+'|12|1'+'4|8|7'+_0x212d44(0x204)+_0x212d44(0x288)+_0x212d44(0x471),'ELapO':'i32','XWVHf':function(_0x1ab7d2,_0x3301b9){return _0x1ab7d2||_0x3301b9;},'iXvpJ':function(_0x47dbd0,_0x2497b6){return _0x47dbd0(_0x2497b6);},'ZCnvx':function(_0x471273,_0x4fef89){return _0x471273^_0x4fef89;},'VVgAH':function(_0x598739,_0x2321d3){return _0x598739===_0x2321d3;},'wOeJM':_0x212d44(0x53f),'Dewyh':function(_0x11f71d,_0x45b387){return _0x11f71d|_0x45b387;},'IRfme':function(_0x1427a5,_0x244723){return _0x1427a5&_0x244723;},'EXEIn':function(_0x4285c4,_0x4c0eb8){return _0x4285c4+_0x4c0eb8;},'aGOfh':'obfF','fyoSD':function(_0x44128a,_0x563c20){return _0x44128a===_0x563c20;},'zcKID':function(_0x3d7b03,_0x23c360){return _0x3d7b03+_0x23c360;},'fIWBV':_0x212d44(0x151)+'ra-sw'+_0x212d44(0x315)+'ll:in'+_0x212d44(0x15f)+'}','QraLI':function(_0x5a8eb8){return _0x5a8eb8();},'aKTOy':function(_0x23a072,_0x514ca4){return _0x23a072>_0x514ca4;},'HPBDb':function(_0x460047,_0x652621){return _0x460047+_0x652621;},'qdVPQ':_0x212d44(0x507),'HKjrK':'yGqMN','XxsFH':_0x212d44(0x1dd),'xTFAc':function(_0x41d7c2,_0x42afa7){return _0x41d7c2|_0x42afa7;},'oVWKN':function(_0x2209ea,_0x42ef05){return _0x2209ea|_0x42ef05;},'bZDPq':'qzuKB','GKpvj':function(_0x23f112,_0x201296){return _0x23f112<_0x201296;},'bHRox':function(_0xd09c15,_0x463ef0){return _0xd09c15+_0x463ef0;},'paCXi':function(_0x16ff00,_0x283193){return _0x16ff00<_0x283193;},'KhniL':function(_0x1e2939,_0x23c23b){return _0x1e2939===_0x23c23b;},'jZjUy':'RBIcu','MWlHi':'udPbj','xbbBq':'no\x20HE'+_0x212d44(0x3f7)+_0x212d44(0x36e)+'ty\x20in'+'stanc'+'e\x20not'+_0x212d44(0x226)+_0x212d44(0x371)+'\x20via\x20'+'Runti'+_0x212d44(0x4b4)+_0x212d44(0x192)+'Game('+_0x212d44(0x291)+_0x212d44(0x137)+_0x212d44(0x3ea)+_0x212d44(0x3c1)+'al','hovfA':function(_0x1bab0c,_0xccfe52){return _0x1bab0c<_0xccfe52;},'psvsR':function(_0x5a985a,_0x2d397a){return _0x5a985a+_0x2d397a;},'QIAXT':function(_0x47c428,_0x21214a){return _0x47c428+_0x21214a;},'RMvyt':function(_0x5294b2,_0x25ae8f){return _0x5294b2(_0x25ae8f);},'gpZbb':function(_0xcf2091,_0x42c250){return _0xcf2091===_0x42c250;},'EWvzr':function(_0x37890d,_0x3bc79d){return _0x37890d^_0x3bc79d;},'cQWVd':function(_0x5d48a8,_0xa466b0,_0x297af0){return _0x5d48a8(_0xa466b0,_0x297af0);},'OKJZd':function(_0x1b9a81,_0x45cb19,_0x4c2e65){return _0x1b9a81(_0x45cb19,_0x4c2e65);},'Mzssb':function(_0x1b4503,_0x1d5caa){return _0x1b4503+_0x1d5caa;},'HRUpJ':function(_0x140749,_0x5290b6){return _0x140749===_0x5290b6;},'cRpfE':function(_0x3c203e,_0x5263d4){return _0x3c203e===_0x5263d4;},'CwCcO':function(_0x316796,_0x1f7499){return _0x316796(_0x1f7499);},'XUVdZ':function(_0x4814df,_0x4c8604){return _0x4814df^_0x4c8604;},'oNWzk':function(_0x1cbb83,_0x22f150){return _0x1cbb83^_0x22f150;},'CPsyn':function(_0x25637d,_0x2ef5cc){return _0x25637d===_0x2ef5cc;},'mWauP':function(_0x32f94e,_0x182c7b){return _0x32f94e===_0x182c7b;},'zTkRG':function(_0x48216d,_0xf122b3){return _0x48216d(_0xf122b3);},'kGcTl':function(_0xebd2b9,_0xe33983){return _0xebd2b9===_0xe33983;},'dxAMX':function(_0x40a8d5,_0x92d254){return _0x40a8d5|_0x92d254;},'VYHWc':function(_0x2c992e,_0x45b942){return _0x2c992e^_0x45b942;},'WshSx':function(_0x4580dd,_0x4f3e14,_0x1b6366,_0x387d53){return _0x4580dd(_0x4f3e14,_0x1b6366,_0x387d53);},'pLUaJ':function(_0x561223,_0x351203){return _0x561223+_0x351203;},'mDDRX':function(_0x3adf86,_0x35958e,_0xfc5620,_0x31c18){return _0x3adf86(_0x35958e,_0xfc5620,_0x31c18);},'SZcbR':function(_0x47a702,_0x523538){return _0x47a702!==_0x523538;},'nXsiQ':function(_0x253095,_0x2bb8c8){return _0x253095!==_0x2bb8c8;},'kmMJg':function(_0x2d0d27,_0x34a411,_0x21260d,_0x5a589b,_0x24f686){return _0x2d0d27(_0x34a411,_0x21260d,_0x5a589b,_0x24f686);},'MgTlL':function(_0x4c9dff,_0x3bc7c1){return _0x4c9dff===_0x3bc7c1;},'Tjwxc':'pJBMt','GDCNK':function(_0x22cd35,_0x5610db){return _0x22cd35===_0x5610db;},'ZnZSh':'FPSco'+'ntrol'+_0x212d44(0x47f),'CjRwV':_0x212d44(0x409),'ErBOf':_0x212d44(0x468),'YMNqc':function(_0x4b0d77,_0x16864e){return _0x4b0d77+_0x16864e;},'OsZZU':function(_0x305eeb,_0x288581){return _0x305eeb!==_0x288581;},'ARSgb':'XzYCT','dgDrT':'zHYKr','rmhxU':function(_0x592025,_0x5ebdd8){return _0x592025<_0x5ebdd8;},'cLFAs':_0x212d44(0x197),'FDDZC':_0x212d44(0x566)+_0x212d44(0x364)+'2|4','JlNGq':function(_0x2e38df,_0xa485ff){return _0x2e38df===_0xa485ff;},'vTEUP':_0x212d44(0x4b3)+'\x20ON','nIigY':function(_0x2d579f,_0x22ffc2){return _0x2d579f<_0x22ffc2;},'eJcpH':function(_0x212e59,_0x445f08){return _0x212e59!==_0x445f08;},'ckERA':function(_0x1e74ad,_0x59d513){return _0x1e74ad<_0x59d513;},'Bkqcl':function(_0x3459d3,_0x333dc3){return _0x3459d3(_0x333dc3);},'tfuNN':function(_0x1b547f){return _0x1b547f();},'CCoNL':function(_0x33b155,_0x2c35ba){return _0x33b155+_0x2c35ba;},'GlIsD':function(_0x3b58bb,_0x4d611a){return _0x3b58bb+_0x4d611a;},'OIdVS':'NMhrE','PRFkq':_0x212d44(0xe7),'IipJI':function(_0x99731,_0x481dca,_0x176530){return _0x99731(_0x481dca,_0x176530);},'QWydv':function(_0x50afbe,_0x18d25e){return _0x50afbe+_0x18d25e;},'AjLcR':function(_0x111df6,_0x5d9f81){return _0x111df6===_0x5d9f81;},'cOzWf':function(_0x5a1b17,_0x437086){return _0x5a1b17===_0x437086;},'JRNus':_0x212d44(0x489),'bkmHN':_0x212d44(0x262),'istaP':'obf','kFKYU':function(_0x5a2d84,_0x194116,_0x149b94,_0x4a781e){return _0x5a2d84(_0x194116,_0x149b94,_0x4a781e);},'dHWIm':function(_0x24e1fd,_0x7dc9d8){return _0x24e1fd+_0x7dc9d8;},'jVgcg':function(_0xc43a0,_0x333d16){return _0xc43a0+_0x333d16;},'fboSx':'\x20fake'+'=','CMqCK':'\x20k0=','NAiVd':_0x212d44(0x2f1),'kPMyK':function(_0x1e6bff,_0x22d917){return _0x1e6bff===_0x22d917;},'SXDKl':'offse'+_0x212d44(0x5f1)+_0x212d44(0x1b3)+'idth)','qMGBD':function(_0x371a36,_0x14dedc){return _0x371a36!==_0x14dedc;},'AiUDL':function(_0x416fb9,_0x366d5e){return _0x416fb9===_0x366d5e;},'YoudJ':function(_0x41cb0c,_0x4069dd){return _0x41cb0c(_0x4069dd);},'NQAWA':function(_0x593b07,_0x1b064f){return _0x593b07===_0x1b064f;},'evfOt':function(_0x1e7859,_0x254eb4){return _0x1e7859*_0x254eb4;},'lKEeW':'Wsspp','Vffxv':'2|1|5'+_0x212d44(0x426)+'0','FdefB':function(_0x24a9a4,_0x47a485){return _0x24a9a4===_0x47a485;},'VKCcl':function(_0x422f41,_0x28e47a){return _0x422f41&&_0x28e47a;},'fRMhM':function(_0x13d879,_0x5664c6){return _0x13d879+_0x5664c6;},'TTxpt':function(_0x2764a6,_0x3bb0c0){return _0x2764a6===_0x3bb0c0;},'jGUhA':_0x212d44(0x53c),'SNyyf':'boole'+'an','FbRsP':'snaps'+'hot','gKpGQ':function(_0x372fd8,_0x512d5b){return _0x372fd8(_0x512d5b);},'lFjOP':function(_0x23eb23,_0x3c9c86){return _0x23eb23+_0x3c9c86;},'gKIBd':function(_0x142776){return _0x142776();},'XNXDK':function(_0x3ce96a){return _0x3ce96a();},'rYuoo':function(_0x9eda37,_0x5f17d2){return _0x9eda37+_0x5f17d2;},'tCRaA':_0x212d44(0x47c)+_0x212d44(0xe2),'iimWD':function(_0x3cd74c,_0x37c608){return _0x3cd74c(_0x37c608);},'EjaAW':'UWMK\x20'+_0x212d44(0x5ab)+'ved\x20','XfCQc':function(_0x1d08cc,_0x35b59a){return _0x1d08cc===_0x35b59a;},'LXepI':_0x212d44(0x200),'Fwpns':function(_0x467f70,_0x5ae744){return _0x467f70===_0x5ae744;},'XoGrA':'kaeXs','jMqaq':function(_0x13b3df,_0x4a10b6){return _0x13b3df+_0x4a10b6;},'PFHqP':'paddi'+'ng:6p'+_0x212d44(0x48a)+';font'+':11px'+_0x212d44(0x5c7)+_0x212d44(0x1c4)+'onosp'+'ace,C'+'onsol'+_0x212d44(0x2df)+_0x212d44(0x53a)+_0x212d44(0x56a)+'lor:#'+_0x212d44(0x4c6)+'5;','GROGD':'box-s'+_0x212d44(0x5c2)+_0x212d44(0x1d4)+_0x212d44(0x2b5)+_0x212d44(0x5cf)+'2px\x20#'+_0x212d44(0x4c7)+_0x212d44(0x5af)+_0x212d44(0x435)+':none'+';-web'+'kit-u'+_0x212d44(0x5af)+_0x212d44(0x435)+_0x212d44(0x194)+';','fSHaA':function(_0x4a82a3,_0xa60188){return _0x4a82a3+_0xa60188;},'wotqI':'<inpu'+_0x212d44(0x20c)+_0x212d44(0x3a1)+'fx\x22\x20t'+'ype=\x22'+_0x212d44(0x195)+'\x22\x20min'+_0x212d44(0x551)+_0x212d44(0x28c)+_0x212d44(0x4eb)+'ep=\x220'+_0x212d44(0x144)+_0x212d44(0x4e3)+'\x222\x22\x20s'+_0x212d44(0x292)+_0x212d44(0x348)+'h:92p'+'x;acc'+_0x212d44(0x339)+'olor:','pQNAf':'<butt'+'on\x20da'+_0x212d44(0x39c)+_0x212d44(0x104)+_0x212d44(0x4e9)+'le=\x22m'+'argin'+_0x212d44(0x286)+_0x212d44(0x48e)+';back'+'groun'+_0x212d44(0x434)+_0x212d44(0x182)+_0x212d44(0x436)+_0x212d44(0x3e6)+':1px\x20'+_0x212d44(0x4f1)+_0x212d44(0x163)+_0x212d44(0x220)+'143,1'+_0x212d44(0x233)+'5);','mZnEq':'<div\x20'+'data-'+'a=\x22st'+'\x22\x20sty'+'le=\x22c'+_0x212d44(0x1a5)+_0x212d44(0x2f6)+'99;ma'+_0x212d44(0x5a4)+_0x212d44(0x243)+_0x212d44(0x5d7)+_0x212d44(0x60e)+'v>','pDkuT':function(_0x2be532,_0x31f980){return _0x2be532(_0x31f980);},'ZnKjq':'fold','IKsJN':_0x212d44(0x521)+'kura]'+_0x212d44(0x1a8)+_0x212d44(0x5cc)+'HUD\x20d'+_0x212d44(0x418)+'ed','FblPd':function(_0x468410,_0x3641ab){return _0x468410!==_0x3641ab;},'DzTXY':function(_0xca4216,_0x14bbd8){return _0xca4216===_0x14bbd8;},'uAbfc':'Speed'+'\x20off','DtehW':function(_0x1f1f72,_0x5ee051){return _0x1f1f72+_0x5ee051;},'qFzlt':function(_0x1a5532,_0x2e7425){return _0x1a5532+_0x2e7425;},'yFmIr':_0x212d44(0x442)+'s\x20','TGUmX':'#7ee0'+'a8','coalM':function(_0x973014,_0x43e94b){return _0x973014===_0x43e94b;},'ChyMM':function(_0x328572,_0x2a3709){return _0x328572===_0x2a3709;},'hfsWy':function(_0x2c4d24,_0x11d4b2,_0x24032d){return _0x2c4d24(_0x11d4b2,_0x24032d);},'LWQiS':function(_0x3b2781,_0x386c4f){return _0x3b2781===_0x386c4f;},'AgYwA':function(_0x5d94ed,_0x270b3c){return _0x5d94ed+_0x270b3c;},'phIHW':function(_0xcda417,_0x13302d){return _0xcda417===_0x13302d;},'AlxRb':_0x212d44(0x1f2),'jPmYF':'ihBgq','xZVUj':function(_0x510deb,_0x202bcb){return _0x510deb+_0x202bcb;},'dUsiR':function(_0x3e158d){return _0x3e158d();},'HnfUW':function(_0x4a9a75){return _0x4a9a75();},'LySNq':'UWMK\x20'+'armin'+_0x212d44(0x3a5)+'led:\x20','vyzii':_0x212d44(0x1cc)+_0x212d44(0x49a)+'\x20but\x20'+'read\x20'+_0x212d44(0x56d)+_0x212d44(0x504),'mpntO':_0x212d44(0x208)+_0x212d44(0x25c)+_0x212d44(0x27a)+_0x212d44(0x355)+'very\x20'+'offse'+_0x212d44(0x110)+'\x20skip'+'ped\x20b'+_0x212d44(0x5ae)+'e.','dXmhO':'the\x20g'+'ame\x20w'+'hile\x20'+_0x212d44(0x500)+_0x212d44(0x1b8)+_0x212d44(0x365)+_0x212d44(0x3e8)+'s\x20orp'+'haned'+_0x212d44(0x495)+_0x212d44(0x5e8)+'every'+'\x20othe'+'r\x20','dAsqG':function(_0x317167,_0xe7f38f){return _0x317167===_0xe7f38f;},'Yenqd':function(_0x2ab530,_0x37f94f){return _0x2ab530+_0x37f94f;},'KEswp':_0x212d44(0x316)+'n._ru'+_0x212d44(0x3cb)+_0x212d44(0x51d)+_0x212d44(0x264)+_0x212d44(0x543)+_0x212d44(0x412)+'WebMo'+'dkit.'+_0x212d44(0x106)+_0x212d44(0x22b)+'the\x20p'+'lugin'+_0x212d44(0x1e6)+_0x212d44(0x399)+'\x20','GSBZM':_0x212d44(0x2f0)+_0x212d44(0x2fe)+'diffe'+_0x212d44(0x16b)+_0x212d44(0x106)+_0x212d44(0x35e)+_0x212d44(0x138)+_0x212d44(0x179)+_0x212d44(0x2bb)+_0x212d44(0x3c1)+_0x212d44(0x216)+'w\x20exp'+_0x212d44(0x1d5),'eUJGr':function(_0x105a62,_0x5c8bbb){return _0x105a62+_0x5c8bbb;},'ykqeE':function(_0x2a66b5,_0x53924a){return _0x2a66b5+_0x53924a;},'ZQtXJ':function(_0x126079,_0x6381dd){return _0x126079+_0x6381dd;},'clmpF':'Unity'+'\x20inst'+_0x212d44(0x560)+_0x212d44(0x2ff)+_0x212d44(0x52d)+_0x212d44(0x448)+_0x212d44(0x123)+_0x212d44(0x5c9)+'\x20','zOTRf':_0x212d44(0x624)+_0x212d44(0x1cb)+'\x20stay'+_0x212d44(0xf1)+'ked\x20u'+_0x212d44(0x5b5)+'a\x20gam'+_0x212d44(0x254)+_0x212d44(0x405)+_0x212d44(0x379)+'odule'+'.HEAP'+'U8\x20is'+_0x212d44(0x226)+_0x212d44(0x371)+'.','IJcEK':function(_0x59bd13,_0x2525d6){return _0x59bd13===_0x2525d6;},'RaPLk':function(_0x5d6016,_0x4411f4){return _0x5d6016===_0x4411f4;},'BobwS':'zCvDr','Ahgav':function(_0x3039e2,_0x3ab72b){return _0x3039e2+_0x3ab72b;},'xeTNH':function(_0x592fc7,_0x5e97ee){return _0x592fc7+_0x5e97ee;},'AnlUL':'0\x20of\x20','llxVS':'\x20hook'+_0x212d44(0x13b)+_0x212d44(0x3ce)+_0x212d44(0x4d6)+'N\x20by\x20'+_0x212d44(0x397)+_0x212d44(0x5f3)+_0x212d44(0x27d)+_0x212d44(0x5f9)+'\x20','pticr':_0x212d44(0x25e)+_0x212d44(0x374)+_0x212d44(0x1c3)+'ered\x20'+_0x212d44(0x34e)+_0x212d44(0x3dc)+_0x212d44(0x140)+_0x212d44(0x548)+_0x212d44(0x3e0)+'the\x20l'+_0x212d44(0x3b5)+_0x212d44(0x514)+_0x212d44(0x41c)+'.\x20','sUnPs':function(_0x30203e,_0x455079){return _0x30203e+_0x455079;},'iNbZG':function(_0x12c9d8,_0x2725c8){return _0x12c9d8+_0x2725c8;},'NzyoZ':_0x212d44(0x49e),'ecyAv':function(_0x22a643,_0x45917d){return _0x22a643>_0x45917d;},'yplzB':function(_0x55e227,_0x499c2a){return _0x55e227+_0x499c2a;},'nFars':_0x212d44(0x215)+_0x212d44(0x3d8)+'nce\x20f'+_0x212d44(0x2d5)+'captu'+_0x212d44(0x605)+_0x212d44(0x515)+'n?):\x20','gifCE':function(_0x1d4135,_0xed637a){return _0x1d4135+_0xed637a;},'Mtcfu':'repor'+'t','FNXUK':function(_0x453eb1,_0x1e129d){return _0x453eb1===_0x1e129d;},'YNxoH':function(_0x580834,_0x2280f0){return _0x580834(_0x2280f0);},'OJQUW':function(_0x67a5b8,_0x5ad0d1){return _0x67a5b8===_0x5ad0d1;},'ZkVsc':function(_0x57460b,_0x5910d8){return _0x57460b===_0x5910d8;},'lmQJU':_0x212d44(0x236),'NcIei':function(_0x8e4810,_0x5252e5){return _0x8e4810-_0x5252e5;},'DYgUb':function(_0x18b145,_0x38b789){return _0x18b145(_0x38b789);},'JLimG':'porta'+'l','NuEXH':_0x212d44(0x154)+'r','kALBi':_0x212d44(0x52c)+_0x212d44(0x119)+_0x212d44(0x46a)+'WARZ-'+'END=='+'=','EEuyW':function(_0x501cb8,_0x20a5ee){return _0x501cb8+_0x20a5ee;},'KHTKC':_0x212d44(0x521)+_0x212d44(0x39e)+'\x20SW-P'+'LAYER'+'\x20ACTI'+_0x212d44(0x61d),'JPaJq':';font'+_0x212d44(0x610)+_0x212d44(0x5e2)+'0;fon'+_0x212d44(0x16e)+_0x212d44(0x590)+'x','eGNkK':_0x212d44(0x533),'UnySX':_0x212d44(0x290)+_0x212d44(0x2ae)+'Sharp'+_0x212d44(0x3a0)+'tpass'+'.dll','NSZYa':_0x212d44(0x493)+_0x212d44(0x422),'neYUP':'Scivo'+_0x212d44(0x595)+'racte'+_0x212d44(0x51a)+_0x212d44(0x4d0)+'r.dll','EBqxp':_0x212d44(0x5b9),'RaHkw':_0x212d44(0xf2)+'wn','AJHGl':_0x212d44(0x278)};var _0x3cebaa=location[_0x212d44(0x575)+'ame']||'',_0x328ccf=/(^|\.)www\.crazygames\.com$/[_0x212d44(0x45f)](_0x3cebaa),_0x4a1036=/(^|\.)games\.crazygames\.com$/[_0x212d44(0x45f)](_0x3cebaa),_0x37406c=/(^|\.)crazygames\.com$/[_0x212d44(0x45f)](_0x3cebaa)&&!_0x328ccf&&!_0x4a1036,_0x1fc25e=_0x328ccf?_0x2376e3[_0x212d44(0x145)]:_0x4a1036?'wrapp'+'er':_0x2376e3['NuEXH'];if(_0x2376e3[_0x212d44(0x615)](!_0x328ccf,!_0x4a1036)&&!_0x37406c)return;var _0x40d99a=_0x212d44(0x39a)+'b1',_0x15f57e=_0x212d44(0x21e)+_0x212d44(0x527)+'w_v2',_0x54c1da='===SA'+'KURA-'+_0x212d44(0x46a)+'WARZ-'+'BEGIN'+_0x212d44(0x597),_0x38a83a=_0x2376e3[_0x212d44(0xe5)],_0x589948=_0x212d44(0x614);if(_0x4a1036){if(_0x212d44(0x221)!=='OsCSN'){window['addEv'+_0x212d44(0x428)+'stene'+'r'](_0x212d44(0x266)+'ge',function(_0x493f1e){var _0x4f6899=_0x212d44,_0x5a60f4=_0x493f1e['data'];if(!_0x5a60f4||_0x5a60f4[_0x4f6899(0x21e)+'ura']!==_0x15f57e)return;try{if(window[_0x4f6899(0x35b)+'t']&&_0x2376e3['FjdRG'](window['paren'+'t'],window))window[_0x4f6899(0x35b)+'t'][_0x4f6899(0x53b)+'essag'+'e'](_0x5a60f4,'*');if(window['top']&&window['top']!==window)window[_0x4f6899(0x39f)][_0x4f6899(0x53b)+'essag'+'e'](_0x5a60f4,'*');}catch(_0x204489){}if(_0x5a60f4&&_0x5a60f4[_0x4f6899(0x121)]===_0x4f6899(0x37c))try{var _0x13aaca=document['query'+'Selec'+'torAl'+'l'](_0x4f6899(0x58a)+'e');for(var _0x2e5853=-0xa54+0x3b*-0x94+-0x13c*-0x24;_0x2376e3['cetwk'](_0x2e5853,_0x13aaca['lengt'+'h']);_0x2e5853++){if(_0x4f6899(0x477)===_0x2376e3['wLPlX'])try{if(_0x13aaca[_0x2e5853][_0x4f6899(0x1eb)+_0x4f6899(0x4fc)+'dow'])_0x13aaca[_0x2e5853][_0x4f6899(0x1eb)+'ntWin'+'dow'][_0x4f6899(0x53b)+_0x4f6899(0x1f1)+'e'](_0x5a60f4,'*');}catch(_0x380070){}else{var _0x4a01b3=_0x12a1de['query'+_0x4f6899(0x4bc)+_0x4f6899(0x227)+'l'](_0x2376e3[_0x4f6899(0x1d9)]);for(var _0x5688b4=0x5*-0x749+-0xf4*0x1d+0x4011;_0x2376e3['cetwk'](_0x5688b4,_0x4a01b3[_0x4f6899(0x2e1)+'h']);_0x5688b4++){try{if(_0x4a01b3[_0x5688b4][_0x4f6899(0x1eb)+_0x4f6899(0x4fc)+'dow'])_0x4a01b3[_0x5688b4][_0x4f6899(0x1eb)+_0x4f6899(0x4fc)+_0x4f6899(0x427)]['postM'+_0x4f6899(0x1f1)+'e'](_0x337f6c,'*');}catch(_0x39be00){}}}}}catch(_0x3ec077){}}),console[_0x212d44(0x3d7)]('%c[sa'+'kura]'+_0x212d44(0x625)+_0x212d44(0x404)+_0x212d44(0x403)+'IVE\x20('+'relay'+_0x212d44(0x174)+_0x212d44(0x237),_0x2376e3[_0x212d44(0x5c1)]+_0x40d99a);return;}else _0x5c5ea2[_0x212d44(0x3e2)+'eProp'+'erty'](_0x4d9d37,_0x2376e3[_0x212d44(0x396)],{'value':_0x229fea['name'],'configurable':!![]});}if(_0x328ccf){console['log'](_0x212d44(0x521)+_0x212d44(0x39e)+_0x212d44(0x469)+'AL\x20AC'+_0x212d44(0x61b),_0x2376e3['EEuyW'](_0x212d44(0x159)+':',_0x40d99a)+(_0x212d44(0x5b2)+_0x212d44(0x610)+_0x212d44(0x5e2)+'0'),{'host':_0x3cebaa});var _0x5ecd7e={'set':function(){},'command':function(){}};function _0x18cb0a(_0x5738e4,_0x394d18){var _0x56cc2e=_0x212d44,_0x67914f={'AwcJI':function(_0xaf92f1,_0x2ff63a){return _0xaf92f1(_0x2ff63a);}};if(_0x56cc2e(0x4a7)===_0x2376e3[_0x56cc2e(0x162)]){if(_0x5aab27)_0x4e11af[_0x56cc2e(0x13a)+'onten'+'t']='Copie'+'d';}else{var _0x58016b={'__sakura':_0x15f57e,'kind':'cmd','cmd':_0x5738e4,'arg':_0x394d18};try{var _0x5f4d66=document[_0x56cc2e(0x456)+'Selec'+'torAl'+'l'](_0x56cc2e(0x58a)+'e');for(var _0x4a2092=0x49*0x23+0x1*-0x3e7+-0x4*0x185;_0x4a2092<_0x5f4d66[_0x56cc2e(0x2e1)+'h'];_0x4a2092++){if(_0x2376e3[_0x56cc2e(0x496)]!==_0x56cc2e(0x24f))try{if(_0x56cc2e(0x1ec)===_0x56cc2e(0x623))try{_0x4ce8f2[_0x56cc2e(0x13a)+_0x56cc2e(0x153)+'t']=_0x67914f[_0x56cc2e(0x2b6)](_0xf91096,_0x273c8a);}catch(_0x8d1561){_0x5632d8[_0x56cc2e(0x13a)+_0x56cc2e(0x153)+'t']=_0x1a428f[_0x56cc2e(0x17e)+_0x56cc2e(0x5ef)](_0x3ee5fb,null,0x1*-0x2329+0x262d+-0x303);}else{if(_0x5f4d66[_0x4a2092][_0x56cc2e(0x1eb)+'ntWin'+_0x56cc2e(0x427)])_0x5f4d66[_0x4a2092][_0x56cc2e(0x1eb)+_0x56cc2e(0x4fc)+'dow']['postM'+_0x56cc2e(0x1f1)+'e'](_0x58016b,'*');}}catch(_0xd76021){}else{var _0x238f7c=_0x26f220['keys'](_0x3146d6);for(var _0x42a25e=0x132d*0x1+0x1e62*-0x1+-0x97*-0x13;_0x42a25e<_0x238f7c['lengt'+'h']&&_0x42a25e<0x747+-0x198d+0x149e*0x1;_0x42a25e++){var _0x54df25=_0x31775c[_0x238f7c[_0x42a25e]];if(_0x54df25&&typeof _0x54df25===_0x56cc2e(0x102)+'t'&&_0x54df25['Modul'+'e']&&_0x54df25['Modul'+'e']['HEAPU'+'8']&&_0x54df25[_0x56cc2e(0x1c8)+'e']['HEAPU'+'8']['buffe'+'r'])return _0x562231['sourc'+'e']='windo'+'w.'+_0x238f7c[_0x42a25e]+_0x2376e3[_0x56cc2e(0x388)],_0x54df25;}}}}catch(_0x32875){}try{var _0x5d3dcd=new BroadcastChannel(_0x2376e3[_0x56cc2e(0x2b0)]);_0x5d3dcd[_0x56cc2e(0x53b)+_0x56cc2e(0x1f1)+'e'](_0x58016b),setTimeout(function(){var _0x10b7be=_0x56cc2e;try{if(_0x10b7be(0x3be)==='XIuCc')_0x5d3dcd[_0x10b7be(0x390)]();else{var _0x30e81d=_0x4cc7d2[_0x10b7be(0x5ab)+'veGam'+'e']();if(_0x30e81d)return _0x489b8d[_0x10b7be(0x3ac)+'e']=_0x10b7be(0x316)+'n._ru'+'ntime'+_0x10b7be(0x33d)+'lveGa'+_0x10b7be(0x1d0),_0x30e81d;}}catch(_0x269455){}},-0x435*-0x4+-0x1*-0x19a3+-0x1*0x297d);}catch(_0x396989){}}}function _0x1ef589(){var _0x179780=_0x212d44;if('YdDoc'!==_0x179780(0x438)){_0x385922[_0x179780(0x57e)+_0x179780(0x125)+_0x179780(0x212)](),_0x2328dd(!_0x566093['on'],_0x2f87d5[_0x179780(0x509)+'r']);return;}else{var _0x22d7e3=document[_0x179780(0x45c)+'ement'+'ById'](_0x2376e3['veUMV']);if(_0x22d7e3)return _0x22d7e3;if(!document[_0x179780(0x13d)]||!document['body']['appen'+_0x179780(0x1f3)+'d'])return null;try{if(_0x2376e3[_0x179780(0x299)](_0x179780(0x4c4),_0x179780(0x3fb))){var _0x2825f6=_0x5daeb6[_0x179780(0x412)+_0x179780(0x49b)+'dkit']&&_0x4d3a49[_0x179780(0x412)+_0x179780(0x49b)+_0x179780(0x4cd)]['Runti'+'me'];if(_0x2825f6&&typeof _0x2825f6[_0x179780(0x5ab)+_0x179780(0x5b3)+'e']===_0x2376e3[_0x179780(0x43f)]){var _0x56384a=_0x2825f6[_0x179780(0x5ab)+_0x179780(0x5b3)+'e']();if(_0x56384a)return _0x43cef8['sourc'+'e']=_0x179780(0x106)+'me.re'+'solve'+_0x179780(0x2c2)+')',_0x56384a;}if(_0x2825f6&&_0x2825f6[_0x179780(0x134)])return _0x52d7da['sourc'+'e']='Runti'+'me._g'+'ame',_0x2825f6;}else{if(!document['getEl'+'ement'+_0x179780(0x4ff)](_0x2376e3[_0x179780(0x460)])){var _0x5bc3fd=document['creat'+_0x179780(0x48c)+'ent'](_0x2376e3['YoVot']);_0x5bc3fd['id']=_0x179780(0x47a)+_0x179780(0x411)+'v2-cs'+'s',_0x5bc3fd[_0x179780(0x13a)+_0x179780(0x153)+'t']='#saku'+_0x179780(0x15b)+'-v2{a'+'ll:in'+'itial'+'}',(document[_0x179780(0x54d)]||document[_0x179780(0x340)+_0x179780(0x45d)+'ement'])[_0x179780(0xe8)+_0x179780(0x1f3)+'d'](_0x5bc3fd);}return _0x22d7e3=document['creat'+_0x179780(0x48c)+_0x179780(0x1e0)](_0x2376e3[_0x179780(0x5d8)]),_0x22d7e3['id']=_0x179780(0x47a)+_0x179780(0x411)+'v2',document[_0x179780(0x13d)]['appen'+'dChil'+'d'](_0x22d7e3),_0x22d7e3;}}catch(_0x1e4a68){return null;}}}function _0x36c5da(){var _0x5dc356=_0x212d44,_0x5d22d2=_0x2376e3['XLAgW'](_0x1ef589);if(!_0x5d22d2)return _0x5ecd7e;if(_0x5d22d2['datas'+'et']['api'])return _0x5d22d2[_0x5dc356(0x2ec)];try{return _0x2376e3['wihDQ'](_0x8dbd02,_0x5d22d2);}catch(_0x51859f){return _0x5d22d2[_0x5dc356(0x361)+'et']['api']='1',_0x5d22d2[_0x5dc356(0x2ec)]=_0x5ecd7e,console['warn'](_0x2376e3[_0x5dc356(0x1fc)],_0x2376e3[_0x5dc356(0x5c1)]+_0x40d99a,_0x51859f),_0x5ecd7e;}}function _0x8dbd02(_0x1f1097){var _0x1fb549=_0x212d44,_0xc3f4f5={'QKUyK':function(_0x55a937,_0x43de15){var _0x103dbe=_0x9852;return _0x2376e3[_0x103dbe(0x1f6)](_0x55a937,_0x43de15);},'QLhUZ':_0x1fb549(0x4b6)+_0x1fb549(0x565),'sJOrk':'hello','vPinf':function(_0x1cf04c,_0x241a89){return _0x1cf04c+_0x241a89;},'abIkD':function(_0xe8e603){return _0x2376e3['XLAgW'](_0xe8e603);},'PBGKs':'texta'+'rea','rUQUF':_0x2376e3['yloRP'],'WTOoD':_0x2376e3['Ozjqh'],'cYjsl':function(_0x189cc3,_0x183f91){var _0x5331cd=_0x1fb549;return _0x2376e3[_0x5331cd(0x3ad)](_0x189cc3,_0x183f91);},'PNJdU':_0x2376e3[_0x1fb549(0x578)]};_0x1f1097['style'][_0x1fb549(0x3d3)+'xt']=_0x2376e3[_0x1fb549(0x34c)]+_0x2376e3['xtigD']+_0x2376e3[_0x1fb549(0x2aa)]+_0x2376e3[_0x1fb549(0x341)],_0x1f1097['inner'+_0x1fb549(0x4fe)]=_0x2376e3['rWXEN'](_0x2376e3['rWXEN'](_0x2376e3[_0x1fb549(0x592)](_0x2376e3[_0x1fb549(0x596)](_0x2376e3[_0x1fb549(0x596)](_0x2376e3['rWXEN'](_0x2376e3['ALxUC']('<div\x20'+'style'+_0x1fb549(0xe6)+'ding:'+'9px\x201'+_0x1fb549(0x608)+_0x1fb549(0x3e6)+_0x1fb549(0x43a)+_0x1fb549(0x5dc)+'x\x20sol'+'id\x20rg'+'ba(25'+'5,143'+_0x1fb549(0x546)+'.3);d'+_0x1fb549(0x502)+'y:fle'+'x;gap'+':8px;'+_0x1fb549(0x2a1)+_0x1fb549(0x29f)+_0x1fb549(0x528)+'ter;f'+'lex:0'+_0x1fb549(0x10a)+_0x1fb549(0x51b)+_0x2376e3[_0x1fb549(0x603)],_0x40d99a)+_0x2376e3[_0x1fb549(0x206)],_0x2376e3[_0x1fb549(0x617)]),'<span'+_0x1fb549(0x1fa)+_0x1fb549(0x16c)+'tatus'+_0x1fb549(0x4e9)+'le=\x22c'+_0x1fb549(0x1a5)+_0x1fb549(0x248)+_0x1fb549(0x37b)+'aitin'+_0x1fb549(0x356)+_0x1fb549(0x3d6)+'\x20fram'+'e…</s'+'pan>'),_0x2376e3[_0x1fb549(0x244)])+_0x40d99a+(_0x1fb549(0x5e1)+'er:0;'+'color'+':#2a0'+'f1b;b'+_0x1fb549(0x3e6)+_0x1fb549(0x1e2)+_0x1fb549(0x4e1)+'x;pad'+_0x1fb549(0x1f8)+_0x1fb549(0x5cb)+'0px;f'+_0x1fb549(0x5b1)+_0x1fb549(0x1cd)+':700;'+_0x1fb549(0x28f)+_0x1fb549(0x345)+'nter;'+_0x1fb549(0x4bb)+_0x1fb549(0x444)+_0x1fb549(0x3f3)+'tton>')+_0x2376e3['CvVoD']+('</div'+'>')+_0x2376e3['bBSnD']+(_0x1fb549(0x130)+_0x1fb549(0x457)+_0x1fb549(0x619)+_0x1fb549(0x185)+'d\x22\x20st'+_0x1fb549(0x128)+_0x1fb549(0x56c)+_0x1fb549(0x56e)+':tran'+_0x1fb549(0x582)+'nt;bo'+_0x1fb549(0x446)+_0x1fb549(0x486)+_0x1fb549(0x37a)+'rgba('+_0x1fb549(0x124)+_0x1fb549(0x559)+_0x1fb549(0x1f7)+_0x1fb549(0x156)+_0x1fb549(0x1c7)+'eef5;'+_0x1fb549(0x483)+_0x1fb549(0x32f)+'ius:7'+'px;pa'+_0x1fb549(0xfe)+':4px\x20'+_0x1fb549(0x328)+_0x1fb549(0x28f)+'r:poi'+_0x1fb549(0x532)+'\x22>Spe'+'ed\x20of'+'f</bu'+'tton>')+('<inpu'+'t\x20id='+'\x22sw2-'+'facto'+'r\x22\x20ty'+_0x1fb549(0x43c)+_0x1fb549(0x606)+_0x1fb549(0x223)+'\x221\x22\x20m'+_0x1fb549(0x2b8)+_0x1fb549(0x189)+_0x1fb549(0x1aa)+'1\x22\x20va'+_0x1fb549(0x34b)+_0x1fb549(0x5fc)+_0x1fb549(0x128)+_0x1fb549(0x2c3)+':120p'+_0x1fb549(0x1a2)+_0x1fb549(0x339)+'olor:')+_0x40d99a,_0x2376e3[_0x1fb549(0x1e1)]),_0x2376e3[_0x1fb549(0x4bf)])+_0x2376e3['rNByZ']+_0x2376e3['mxzdj']+('</div'+'>')+(_0x1fb549(0x550)+'id=\x22s'+'w2-ou'+_0x1fb549(0x1de)+_0x1fb549(0x128)+_0x1fb549(0x616)+'n:0;p'+_0x1fb549(0x3b1)+_0x1fb549(0x1b4)+'x\x2012p'+_0x1fb549(0x14b)+_0x1fb549(0x485)+_0x1fb549(0x48e)+';flex'+_0x1fb549(0x344)+_0x1fb549(0x492)+_0x1fb549(0x473)+'-spac'+_0x1fb549(0x120)+'-wrap'+';word'+_0x1fb549(0x5d3)+_0x1fb549(0x3c0)+'ak-wo'+_0x1fb549(0x343)+_0x1fb549(0x14a)+'herit'+';'),_0x2376e3['oWhqv']);var _0x1c1e99=_0x1f1097[_0x1fb549(0x456)+_0x1fb549(0x4bc)+_0x1fb549(0x4dd)](_0x1fb549(0x443)+_0x1fb549(0x184)+'s'),_0x461541=_0x1f1097[_0x1fb549(0x456)+_0x1fb549(0x4bc)+'tor'](_0x1fb549(0x443)+_0x1fb549(0x59f)),_0x21806c=_0x1f1097['query'+_0x1fb549(0x4bc)+'tor'](_0x2376e3['qNEcA']),_0x1ec01e=_0x1f1097[_0x1fb549(0x456)+_0x1fb549(0x4bc)+_0x1fb549(0x4dd)]('#sw2-'+'copy'),_0x20510d=_0x1f1097['query'+'Selec'+_0x1fb549(0x4dd)](_0x2376e3['iNqMs']),_0x592227=_0x1f1097[_0x1fb549(0x456)+'Selec'+'tor'](_0x2376e3[_0x1fb549(0x1bf)]),_0xa8f68a=_0x1f1097[_0x1fb549(0x456)+_0x1fb549(0x4bc)+_0x1fb549(0x4dd)]('#sw2-'+_0x1fb549(0x53c)),_0x5bf280=_0x1f1097['query'+'Selec'+'tor'](_0x2376e3[_0x1fb549(0x190)]),_0x4e7bd9=_0x1f1097[_0x1fb549(0x456)+_0x1fb549(0x4bc)+_0x1fb549(0x4dd)](_0x2376e3['FuFDH']),_0x4d445c=_0x1f1097['query'+'Selec'+_0x1fb549(0x4dd)](_0x1fb549(0x443)+'hint'),_0x4e67ac=null;if(_0x20510d)_0x20510d[_0x1fb549(0xf8)+'ck']=function(){var _0x2ee8b1=_0x1fb549;try{_0x1f1097[_0x2ee8b1(0x55d)+'e']();}catch(_0x319e9f){}};if(_0x592227)_0x592227['oncli'+'ck']=function(){var _0x61d68a=_0x1fb549;_0xc3f4f5[_0x61d68a(0x581)](_0x18cb0a,_0xc3f4f5[_0x61d68a(0x557)]);};var _0x5413fa=![];function _0x3720ed(){var _0x3ea6d7=_0x1fb549;_0x18cb0a(_0x3ea6d7(0x53c),{'on':_0x5413fa,'factor':parseFloat(_0x5bf280[_0x3ea6d7(0x417)])||0x1077+0x26e4+0xa*-0x589});}if(_0xa8f68a)_0xa8f68a['oncli'+'ck']=function(){var _0x36765b=_0x1fb549;if(_0x2376e3['yAQDI']===_0x36765b(0x298)){if(_0x1f56a1[_0x36765b(0x121)]===_0xc3f4f5[_0x36765b(0x41e)]){_0x337a0c()['set']({'host':_0x1fd143[_0x36765b(0x3fd)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x295da3[_0x36765b(0x121)]===_0x36765b(0x46b)+'t')_0x492687()['set'](_0x158d28[_0x36765b(0x46b)+'t']);}else _0x5413fa=!_0x5413fa,_0xa8f68a[_0x36765b(0x13a)+'onten'+'t']=_0x5413fa?'Speed'+_0x36765b(0x380):'Speed'+_0x36765b(0x3f4),_0xa8f68a[_0x36765b(0x59e)]['backg'+'round']=_0x5413fa?_0x40d99a:_0x36765b(0x1e3)+_0x36765b(0x35b)+'t',_0xa8f68a[_0x36765b(0x59e)][_0x36765b(0x159)]=_0x5413fa?'#2a0f'+'1b':_0x36765b(0x497)+'f5',_0x3720ed();};if(_0x5bf280)_0x5bf280['oninp'+'ut']=function(){var _0x5212df=_0x1fb549;if(_0x4e7bd9)_0x4e7bd9[_0x5212df(0x13a)+_0x5212df(0x153)+'t']=_0xc3f4f5['vPinf']((_0xc3f4f5['QKUyK'](parseFloat,_0x5bf280[_0x5212df(0x417)])||-0x303*-0xb+-0x1*0x2069+-0xb7)[_0x5212df(0x213)+'ed'](0x26fa+-0xa3*0x5+-0x2*0x11e5),'x');_0xc3f4f5[_0x5212df(0x2d0)](_0x3720ed);};if(_0x1ec01e)_0x1ec01e['oncli'+'ck']=function(){var _0x38ac3e=_0x1fb549,_0x2a8b92={'bWxbB':'Copie'+'d'},_0x4baffb=_0x2376e3[_0x38ac3e(0x42f)](_0x54c1da,'\x0a')+(_0x4e67ac?JSON['strin'+_0x38ac3e(0x5ef)](_0x4e67ac,null,0xc1*0xd+-0x1daa+0x9ef*0x2):'')+'\x0a'+_0x38a83a,_0x20d5d3=function(){var _0x5220aa=_0x38ac3e;if(_0x1ec01e)_0x1ec01e['textC'+_0x5220aa(0x153)+'t']=_0x2a8b92[_0x5220aa(0xf5)];};if(navigator['clipb'+_0x38ac3e(0x3ed)]&&navigator[_0x38ac3e(0x161)+'oard']['write'+_0x38ac3e(0x433)]){if(_0x2376e3[_0x38ac3e(0x50c)]==='QDZdi')navigator[_0x38ac3e(0x161)+'oard'][_0x38ac3e(0x342)+_0x38ac3e(0x433)](_0x4baffb)[_0x38ac3e(0x22d)](_0x20d5d3,function(){_0x127bf1();});else{var _0x57ce19=-0x200b+-0x21e5+0x41f0;for(var _0x47ae17=-0x20*-0x1+-0x2001+0x1fe1;_0x47ae17<_0x3b9735[_0x38ac3e(0x2e1)+'h'];_0x47ae17++){if(_0x2477f3[_0x47ae17][_0x38ac3e(0x287)]&&_0x90b7b9[_0x47ae17]['hook']['appli'+'ed'])_0x57ce19++;}return _0x57ce19;}}else _0x127bf1();function _0x127bf1(){var _0x589798=_0x38ac3e,_0x2fe4cf=document[_0x589798(0x465)+_0x589798(0x48c)+_0x589798(0x1e0)](_0xc3f4f5['PBGKs']);_0x2fe4cf['value']=_0x4baffb;if(!document[_0x589798(0x13d)])return;document[_0x589798(0x13d)][_0x589798(0xe8)+_0x589798(0x1f3)+'d'](_0x2fe4cf),_0x2fe4cf[_0x589798(0x14c)+'t']();try{document['execC'+_0x589798(0x36f)+'d'](_0x589798(0x18b)),_0x20d5d3();}catch(_0x44b6b0){}_0x2fe4cf['remov'+'e']();}};_0x2376e3[_0x1fb549(0x450)](setTimeout,function(){var _0x22c910=_0x1fb549,_0x278005=('4|3|2'+_0x22c910(0x258))['split']('|'),_0x1f8f2e=0x677+-0x2512+0x1e9b;while(!![]){switch(_0x278005[_0x1f8f2e++]){case'0':_0x21806c['textC'+'onten'+'t']=_0xc3f4f5['vPinf'](_0xc3f4f5['vPinf'](_0x22c910(0x61e)+_0x22c910(0x579)+'rame\x20'+_0x22c910(0x4be)+_0x22c910(0x26a)+_0x22c910(0x33c)+'singl'+_0x22c910(0x50e)+'ort.\x0a'+'\x0a',_0x22c910(0x47d)+_0x22c910(0x1ce)+'\x20prov'+_0x22c910(0x2ab)+_0x22c910(0x35c)+'rscri'+'pt\x20IS'+_0x22c910(0x4af)+_0x22c910(0x394)+_0x22c910(0x53e)+'runni'+_0x22c910(0x53d)+'\x20the\x20'+_0x22c910(0x4c9)+_0x22c910(0x165))+_0xc3f4f5[_0x22c910(0x4f3)],_0xc3f4f5[_0x22c910(0x11e)])+(_0x22c910(0x3b2)+'The\x20p'+_0x22c910(0x352)+_0x22c910(0x490)+'t\x20bee'+'n\x20rel'+'oaded'+_0x22c910(0x5a0)+_0x22c910(0x3ca)+_0x22c910(0x193)+_0x22c910(0x3b3))+(_0x22c910(0x250)+_0x22c910(0x569)+_0x22c910(0x47a)+'a.ski'+'llwar'+_0x22c910(0x2e3)+'r.js\x20'+_0x22c910(0x32e)+_0x22c910(0x322)+'d\x20dia'+'g\x20scr'+'ipt\x20a'+_0x22c910(0x2e6))+('\x20\x20\x20\x20\x20'+_0x22c910(0x526)+_0x22c910(0x5dd)+_0x22c910(0x19b)+_0x22c910(0x5f2)+'es\x20of'+'\x20UWMK'+'\x20both'+_0x22c910(0x470)+'h\x20Web'+_0x22c910(0x290)+_0x22c910(0x3cf)+'nstan'+_0x22c910(0x23c)+'.\x0a\x0a')+(_0x22c910(0x55b)+'d\x20the'+_0x22c910(0x3d6)+'\x20page'+_0x22c910(0x351)+_0x22c910(0x53e)+_0x22c910(0x21d)+_0x22c910(0x325)+'\x20pane'+_0x22c910(0x545)+_0x22c910(0x19e));continue;case'1':_0x1c1e99['style']['color']=_0x22c910(0x3cd)+'c7';continue;case'2':_0x1c1e99[_0x22c910(0x13a)+'onten'+'t']=_0x22c910(0x59b)+'port\x20'+_0x22c910(0x34e)+_0x22c910(0x126)+_0x22c910(0x3b9)+'me\x20no'+_0x22c910(0x41b)+'ected'+'?';continue;case'3':if(_0xc3f4f5[_0x22c910(0x229)](!_0x1c1e99,!_0x21806c))return;continue;case'4':if(_0x4e67ac)return;continue;}break;}},0xb9*-0x1c3+-0xb3ab+0x2e3f6);var _0x56a134={'set':function(_0x436823){var _0x4e7c90=_0x1fb549,_0x62a6b0={'EfKRS':function(_0x43755a,_0xcc162c){return _0x43755a===_0xcc162c;},'xjSZb':function(_0x5c6744){return _0x5c6744();}};_0x4e67ac=_0x436823;if(_0x1ec01e)_0x1ec01e[_0x4e7c90(0x59e)][_0x4e7c90(0x36a)+'ay']='';if(_0x461541){_0x461541['textC'+'onten'+'t']='v'+(_0x436823['versi'+'on']||'?');var _0x21c517=_0x589948,_0x1d6137=_0x436823['versi'+'on']||'';_0x461541[_0x4e7c90(0x59e)][_0x4e7c90(0x159)]=_0x1d6137===_0x21c517?_0x40d99a:_0x4e7c90(0x4d4)+'74',_0x461541['style'][_0x4e7c90(0x483)+_0x4e7c90(0x5e6)+'r']=_0x1d6137===_0x21c517?'rgba('+'255,1'+_0x4e7c90(0x559)+_0x4e7c90(0x2d9)+')':_0x2376e3['SKQyc'];}var _0x396086=_0x436823[_0x4e7c90(0x526)+_0x4e7c90(0x111)]&&_0x436823['insta'+_0x4e7c90(0x111)][_0x4e7c90(0x21c)+_0x4e7c90(0x593)+_0x4e7c90(0x47f)],_0x111f2a=Math[_0x4e7c90(0x56e)]((_0x436823[_0x4e7c90(0x2f2)+'edMs']||-0x4f*-0x6+-0xa72+0x37*0x28)/(0x22ea*-0x1+0x173c+0xf96));if(_0x1c1e99){var _0x567179,_0x2951fa;if(_0x396086&&_0x436823['surve'+'y']&&_0x436823[_0x4e7c90(0x2b4)+'y']['FPSco'+_0x4e7c90(0x593)+'ler'])_0x567179=_0x2376e3['ALxUC'](_0x2376e3[_0x4e7c90(0x42f)](_0x2376e3[_0x4e7c90(0xff)],Object[_0x4e7c90(0x3d2)](_0x436823[_0x4e7c90(0x526)+_0x4e7c90(0x111)])[_0x4e7c90(0x2e1)+'h']),_0x4e7c90(0x1cc)+_0x4e7c90(0x36c)+'\x20')+_0x111f2a+'s',_0x2951fa='#7ee0'+'a8';else{if(_0x2376e3[_0x4e7c90(0x289)](_0x436823[_0x4e7c90(0x5b0)+_0x4e7c90(0x464)+'ed'],-0x65*-0x49+-0x246c+0x79f))_0x567179=_0x4e7c90(0x5b0)+_0x4e7c90(0x3e1)+_0x4e7c90(0x484)+_0x111f2a+'s',_0x2951fa=_0x2376e3[_0x4e7c90(0x4c3)];else _0x436823[_0x4e7c90(0x5eb)+'tData']?(_0x567179=_0x2376e3['rWXEN'](_0x4e7c90(0x305)+'ata\x20r'+_0x4e7c90(0x5a7)+'·\x20',_0x111f2a)+'s',_0x2951fa=_0x2376e3['MdkpB']):(_0x567179=_0x2376e3[_0x4e7c90(0x592)]((_0x436823[_0x4e7c90(0x59a)]&&_0x436823['arm']['ok']?_0x4e7c90(0x3aa)+'\x20·\x20':_0x2376e3[_0x4e7c90(0x2a7)])+_0x111f2a,'s'),_0x2951fa='#ffd4'+'8a');}_0x1c1e99[_0x4e7c90(0x13a)+_0x4e7c90(0x153)+'t']=_0x567179,_0x1c1e99[_0x4e7c90(0x59e)][_0x4e7c90(0x159)]=_0x2951fa;}if(_0x4d445c){if(_0x2376e3[_0x4e7c90(0x16d)](_0x2376e3[_0x4e7c90(0x2ac)],_0x4e7c90(0x129))){_0x58a788=_0x579d35,_0x295962=[],_0x3abd88(_0x4e7c90(0x46b)+'t',{'report':_0x207795()});return;}else _0x4d445c[_0x4e7c90(0x13a)+_0x4e7c90(0x153)+'t']=_0x436823[_0x4e7c90(0x177)]&&_0x436823['diff'][_0x4e7c90(0x2e1)+'h']?_0x2376e3[_0x4e7c90(0x2bd)]+_0x436823[_0x4e7c90(0x177)]['join'](',\x20'):'F9\x20tw'+'ice\x20w'+_0x4e7c90(0x334)+_0x4e7c90(0x180)+'ng\x20/\x20'+'sprin'+'ting\x20'+_0x4e7c90(0x3e3)+_0x4e7c90(0x230)+'marks'+'\x20whic'+_0x4e7c90(0xf6)+_0x4e7c90(0x583)+_0x4e7c90(0x5cd)+'h.';}if(_0x436823[_0x4e7c90(0x53c)]&&_0xa8f68a){_0x5413fa=!!_0x436823['speed']['on'],_0xa8f68a['textC'+_0x4e7c90(0x153)+'t']=_0x5413fa?_0x4e7c90(0x4b3)+'\x20ON':_0x4e7c90(0x4b3)+_0x4e7c90(0x3f4),_0xa8f68a['style'][_0x4e7c90(0x56c)+'round']=_0x5413fa?_0x40d99a:_0x4e7c90(0x1e3)+'paren'+'t',_0xa8f68a[_0x4e7c90(0x59e)]['color']=_0x5413fa?_0x2376e3[_0x4e7c90(0x367)]:_0x2376e3['zUwRt'];if(_0x4e7bd9&&_0x436823[_0x4e7c90(0x53c)]['facto'+'r']){if(_0x4e7c90(0x38d)!==_0x2376e3['CWImE']){var _0x3c2016=_0x4cd044[_0x4e7c90(0x3cc)];if(!_0x3c2016||_0x3c2016['__sak'+_0x4e7c90(0x393)]!==_0x56c6d5)return;try{if(_0x62a6b0[_0x4e7c90(0x141)](_0x3c2016['kind'],'hello')){_0x62a6b0[_0x4e7c90(0x2e7)](_0x587e31)['set']({'host':_0x3c2016[_0x4e7c90(0x3fd)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x62a6b0[_0x4e7c90(0x141)](_0x3c2016[_0x4e7c90(0x121)],_0x4e7c90(0x46b)+'t'))_0x526775()[_0x4e7c90(0x10f)](_0x3c2016[_0x4e7c90(0x46b)+'t']);}catch(_0x531f82){_0x4823d4['warn'](_0x4e7c90(0x521)+'kura]'+_0x4e7c90(0x1b0)+_0x4e7c90(0x1da)+_0x4e7c90(0x48d)+'ailed',_0x4e7c90(0x159)+':'+_0x43f081,_0x531f82);}}else _0x4e7bd9['textC'+_0x4e7c90(0x153)+'t']=Number(_0x436823[_0x4e7c90(0x53c)][_0x4e7c90(0x509)+'r'])[_0x4e7c90(0x213)+'ed'](-0x1ae+0x2120+0xa7b*-0x3)+'x';}}if(_0x21806c){if(_0x2376e3['HLhIF'](_0x2376e3['euAhZ'],_0x4e7c90(0x4ec)))try{if(_0x5eac8d[_0xb100d3][_0x4e7c90(0x1eb)+_0x4e7c90(0x4fc)+_0x4e7c90(0x427)])_0x209a0f[_0xd53dcb]['conte'+'ntWin'+_0x4e7c90(0x427)]['postM'+_0x4e7c90(0x1f1)+'e'](_0x438a24,'*');}catch(_0x1614a7){}else try{_0x21806c[_0x4e7c90(0x13a)+_0x4e7c90(0x153)+'t']=_0x2376e3[_0x4e7c90(0x547)](_0xdf8178,_0x436823);}catch(_0x50f4c2){if(_0x2376e3[_0x4e7c90(0x235)]('KxDCP',_0x2376e3['VjMtl']))_0x21806c[_0x4e7c90(0x13a)+'onten'+'t']=JSON[_0x4e7c90(0x17e)+_0x4e7c90(0x5ef)](_0x436823,null,-0x23f*0x6+-0x1b*0x154+0x3157);else return _0x1c65b2[_0x4e7c90(0x3ac)+'e']=_0xc3f4f5[_0x4e7c90(0x10d)],_0x24ae32;}}console[_0x4e7c90(0x3d7)](_0x2376e3[_0x4e7c90(0x32c)],_0x2376e3[_0x4e7c90(0x42f)]('color'+':'+_0x40d99a,_0x2376e3[_0x4e7c90(0x44f)]),_0x436823),console['log'](_0x2376e3['ALxUC'](_0x2376e3[_0x4e7c90(0x592)](_0x54c1da,'\x0a'),JSON['strin'+'gify'](_0x436823,null,0xde1+0xd8c+-0x1b6c))+'\x0a'+_0x38a83a);}};return _0x1f1097[_0x1fb549(0x361)+'et'][_0x1fb549(0x2ec)]='1',_0x1f1097['api']=_0x56a134,_0x56a134;}function _0xdf8178(_0x36600d){var _0x5b89be=_0x212d44,_0x5ec56b={'HaULx':'style'},_0x31aef5=[];_0x31aef5[_0x5b89be(0x5ac)](_0x2376e3[_0x5b89be(0x596)](_0x2376e3['joxfQ'](_0x2376e3['lVaOb'](_0x2376e3['uzrtx']+(_0x36600d[_0x5b89be(0x3fd)]||'?'),_0x2376e3[_0x5b89be(0x5c6)]),Math['round']((_0x36600d[_0x5b89be(0x2f2)+_0x5b89be(0x3fa)]||-0x6*-0x2e+0x1a8d+-0x1ba1)/(-0x14b5+-0x229*-0xf+-0x7ca))),'s)')),_0x31aef5[_0x5b89be(0x5ac)](_0x2376e3['rWXEN'](_0x2376e3['joxfQ'](_0x5b89be(0x55c)+_0x5b89be(0x555),_0x36600d['uwmk']?'yes':'no'),'\x20\x20\x20co'+_0x5b89be(0x571)+'\x20')+(_0x36600d[_0x5b89be(0x5be)+_0x5b89be(0x329)+_0x5b89be(0x458)]?_0x2376e3[_0x5b89be(0x2c1)]:'no')+_0x2376e3['wwTkC']+(_0x2376e3[_0x5b89be(0x44d)](_0x36600d[_0x5b89be(0x1a1)+_0x5b89be(0x2e5)],null)?_0x36600d[_0x5b89be(0x1a1)+'ount']:'?')),_0x31aef5[_0x5b89be(0x5ac)](_0x2376e3[_0x5b89be(0x17f)](_0x2376e3[_0x5b89be(0x383)]('hooks'+_0x5b89be(0x555),_0x36600d[_0x5b89be(0x5b0)+'Appli'+'ed'])+'/'+_0x36600d['hooks'+_0x5b89be(0x2d4)],'\x20appl'+_0x5b89be(0xfc))),_0x31aef5['push']('');var _0x1c1ee4=_0x36600d['insta'+_0x5b89be(0x111)]||{},_0x353854=Object['keys'](_0x1c1ee4);!_0x353854[_0x5b89be(0x2e1)+'h']&&(_0x31aef5[_0x5b89be(0x5ac)](_0x5b89be(0x269)+'ve\x20ob'+'jects'+_0x5b89be(0x2eb)+_0x5b89be(0x4ee)+_0x5b89be(0x265)),_0x31aef5['push'](''),_0x31aef5['push'](_0x2376e3[_0x5b89be(0x12a)]),_0x31aef5['push'](_0x5b89be(0x562)+_0x5b89be(0x3d9)+'ran\x20y'+_0x5b89be(0x4a5)+_0x5b89be(0x3a9)+_0x5b89be(0x27f)+_0x5b89be(0x217)+_0x5b89be(0x5c4)+_0x5b89be(0x30a)+'atch.'));for(var _0x310a3d=-0x1*-0x1fcd+-0x1c0c+0x1f*-0x1f;_0x310a3d<_0x353854[_0x5b89be(0x2e1)+'h'];_0x310a3d++){var _0x33fdc1=_0x353854[_0x310a3d];_0x31aef5[_0x5b89be(0x5ac)](_0x2376e3[_0x5b89be(0x101)](_0x33fdc1+'\x20@\x20',_0x1c1ee4[_0x33fdc1]));}_0x31aef5[_0x5b89be(0x5ac)]('');var _0x37c729=_0x36600d['surve'+'y']||{},_0x534538=Object[_0x5b89be(0x3d2)](_0x37c729);for(var _0x713727=0x7e7+0x1*-0x16d4+-0x1*-0xeed;_0x2376e3[_0x5b89be(0x135)](_0x713727,_0x534538[_0x5b89be(0x2e1)+'h']);_0x713727++){var _0x28d620=_0x534538[_0x713727],_0x177b70=_0x37c729[_0x28d620];if(!_0x177b70||!_0x177b70[_0x5b89be(0x2e1)+'h'])continue;_0x31aef5[_0x5b89be(0x5ac)](_0x2376e3['cOChG']('──\x20'+_0x28d620,'\x20')+new Array(Math[_0x5b89be(0x5d5)](-0xe*-0x21f+-0x2b1*-0xa+-0x389b,_0x2376e3[_0x5b89be(0x45e)](0x228f+-0x2458+0x1eb*0x1,_0x28d620['lengt'+'h'])))[_0x5b89be(0x3ff)]('─')),_0x31aef5['push'](_0x2376e3[_0x5b89be(0x24c)]);for(var _0x3ebaef=0x1774+0x21de+-0x3952;_0x3ebaef<_0x177b70['lengt'+'h'];_0x3ebaef++){if(_0x5b89be(0x55f)==='MQPlo'){var _0x1c1d59=_0x177b70[_0x3ebaef],_0x18f101=_0x2376e3['tzukV'](typeof _0x1c1d59['v'],_0x2376e3[_0x5b89be(0x133)])?Math[_0x5b89be(0x56e)](_0x1c1d59['v']*(-0x891+-0xdca+-0x51*-0x53))/(0x4c*0x61+-0x8*-0x1af+-0x265c):_0x1c1d59['v'];_0x31aef5[_0x5b89be(0x5ac)](_0x2376e3[_0x5b89be(0x5e3)](_0x2376e3['hacTM']('\x20\x20'+_0x2376e3[_0x5b89be(0x101)]('0x',_0x1c1d59['o']['toStr'+_0x5b89be(0x3c7)](0x1*-0x105d+0x47*0x71+-0x53*0x2e))[_0x5b89be(0x2d8)+'d'](0x23b*0x11+-0xd*0xfb+0x1*-0x1924),'\x20'),_0x1c1d59['k']['padEn'+'d'](-0x1a0c+-0x8fe+0x2315))+'\x20'+_0x2376e3[_0x5b89be(0x587)](String,_0x18f101)[_0x5b89be(0x2d8)+'d'](-0x228+0xf61+-0xd29)+'\x20'+(_0x1c1d59[_0x5b89be(0x5bc)]||''));}else{var _0x540d5f=_0x1902e4[_0x5b89be(0x465)+_0x5b89be(0x48c)+'ent'](_0x5ec56b[_0x5b89be(0x2b3)]);_0x540d5f['id']='sakur'+'a-sw-'+_0x5b89be(0x2d7)+'s',_0x540d5f['textC'+'onten'+'t']='#saku'+_0x5b89be(0x15b)+_0x5b89be(0x315)+_0x5b89be(0x3b0)+'itial'+'}',(_0x21f9ce['head']||_0x2ad504[_0x5b89be(0x340)+'entEl'+_0x5b89be(0x481)])['appen'+_0x5b89be(0x1f3)+'d'](_0x540d5f);}}_0x31aef5[_0x5b89be(0x5ac)]('');}if(_0x36600d['warni'+_0x5b89be(0x2a2)]&&_0x36600d['warni'+_0x5b89be(0x2a2)][_0x5b89be(0x2e1)+'h']){_0x31aef5['push']('warni'+_0x5b89be(0x2a2));for(var _0x294995=0x5*0x683+0x1*0xf1+0x860*-0x4;_0x2376e3[_0x5b89be(0x2a9)](_0x294995,_0x36600d[_0x5b89be(0x572)+_0x5b89be(0x2a2)][_0x5b89be(0x2e1)+'h']);_0x294995++)_0x31aef5[_0x5b89be(0x5ac)](_0x5b89be(0xf3)+_0x36600d[_0x5b89be(0x572)+_0x5b89be(0x2a2)][_0x294995]);}return _0x31aef5[_0x5b89be(0x3ff)]('\x0a');}window['addEv'+'entLi'+'stene'+'r']('messa'+'ge',function(_0x76a0a5){var _0x184e58=_0x212d44,_0x4751fb=_0x76a0a5['data'];if(!_0x4751fb||_0x4751fb[_0x184e58(0x21e)+_0x184e58(0x393)]!==_0x15f57e)return;try{if(_0x2376e3['GhCFO']('ckEgK',_0x2376e3[_0x184e58(0x160)])){if(_0x2376e3['hvRAc'](_0x4751fb[_0x184e58(0x121)],_0x184e58(0x533))){_0x36c5da()[_0x184e58(0x10f)]({'host':_0x4751fb[_0x184e58(0x3fd)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x2376e3['hvRAc'](_0x4751fb['kind'],_0x184e58(0x46b)+'t'))_0x36c5da()[_0x184e58(0x10f)](_0x4751fb[_0x184e58(0x46b)+'t']);}else{var _0x2e9b05=_0x49de90['data'];if(_0x2e9b05&&_0x2e9b05['__sak'+'ura']===_0x4eeedb&&_0x2e9b05['kind']==='cmd')_0x2376e3['AykRR'](_0x5eadab,_0x2e9b05[_0x184e58(0x37c)],_0x2e9b05[_0x184e58(0x202)]);}}catch(_0x575225){_0x2376e3[_0x184e58(0x167)](_0x2376e3[_0x184e58(0x357)],_0x184e58(0x18f))?console[_0x184e58(0x61a)](_0x184e58(0x521)+_0x184e58(0x39e)+_0x184e58(0x1b0)+'l\x20upd'+_0x184e58(0x48d)+'ailed',_0x2376e3['cOChG']('color'+':',_0x40d99a),_0x575225):_0xea5b62=_0x2376e3[_0x184e58(0x304)](_0x2376e3['wKzFp'](_0x2376e3[_0x184e58(0x31e)](_0x184e58(0x432)+_0x184e58(0x45b)+'red\x20a'+'t\x20'+_0x2d3e3a[_0x184e58(0x31d)+'irePr'+'oof'][_0x184e58(0x499)]+_0x2376e3[_0x184e58(0x1ae)]+_0x48dcd5[_0x184e58(0x31d)+'irePr'+_0x184e58(0x211)][_0x184e58(0x324)+_0x184e58(0x3eb)+'nc']+_0x2376e3[_0x184e58(0x2e9)]+_0x27e0c4['hookF'+'irePr'+_0x184e58(0x211)][_0x184e58(0x5ab)+'veGam'+_0x184e58(0x176)+'re'],_0x2376e3['vUUES']),_0x3f6863[_0x184e58(0x31d)+_0x184e58(0x604)+'oof']['gameS'+_0x184e58(0x529)+_0x184e58(0x263)+'e']||'none'),_0x184e58(0x459)+_0x184e58(0x5db)+_0x184e58(0x15c)+_0x184e58(0x150)+'exist'+_0x184e58(0x28d)+_0x184e58(0x157)+'d\x20is\x20'+_0x184e58(0x2ff)+'eacha'+'ble\x20n'+'ow.');}});if(document[_0x212d44(0x13d)])_0x36c5da();else document['addEv'+_0x212d44(0x428)+_0x212d44(0x314)+'r']('DOMCo'+'ntent'+'Loade'+'d',_0x36c5da,{'once':!![]});return;}window['__SAK'+_0x212d44(0xf7)+_0x212d44(0x54a)]=window[_0x212d44(0x274)+'URA_S'+_0x212d44(0x54a)]||{'at':Date[_0x212d44(0x353)]()};function _0x529cae(_0x3229d7,_0x365001){var _0x1f3c00=_0x212d44,_0x4b4637={'__sakura':_0x15f57e,'kind':_0x3229d7};if(_0x365001){for(var _0x105619 in _0x365001)_0x4b4637[_0x105619]=_0x365001[_0x105619];}try{if(window[_0x1f3c00(0x35b)+'t']&&window[_0x1f3c00(0x35b)+'t']!==window)window[_0x1f3c00(0x35b)+'t']['postM'+'essag'+'e'](_0x4b4637,'*');}catch(_0x5a4254){}try{if(window['top']&&window['top']!==window)window[_0x1f3c00(0x39f)]['postM'+_0x1f3c00(0x1f1)+'e'](_0x4b4637,'*');}catch(_0x833d75){}}console['log'](_0x2376e3[_0x212d44(0x330)]+_0x589948,_0x2376e3[_0x212d44(0x101)](_0x212d44(0x159)+':'+_0x40d99a,_0x2376e3['JPaJq']),{'host':_0x3cebaa,'href':location[_0x212d44(0x43e)],'version':_0x589948}),_0x529cae(_0x2376e3['eGNkK'],{'host':_0x3cebaa,'role':_0x1fc25e});var _0x5c73ce=window[_0x212d44(0x274)+_0x212d44(0xf7)+_0x212d44(0x54a)]&&window[_0x212d44(0x274)+'URA_S'+'W__']['at']||Date[_0x212d44(0x353)]();window[_0x212d44(0x410)+_0x212d44(0x428)+_0x212d44(0x314)+'r'](_0x212d44(0x266)+'ge',function(_0x2c080a){var _0x46d46a=_0x212d44;if('FoTZV'!=='gMKkm')try{var _0x191001=_0x2c080a&&_0x2c080a['data'];if(!_0x191001||_0x2376e3['dFYKQ'](_0x191001[_0x46d46a(0x21e)+_0x46d46a(0x393)],_0x15f57e)||_0x2376e3[_0x46d46a(0x466)](_0x191001[_0x46d46a(0x121)],_0x2376e3['LgQEo']))return;_0x2376e3[_0x46d46a(0x450)](_0x182b32,_0x191001[_0x46d46a(0x37c)],_0x191001['arg']);}catch(_0x1c0305){}else{if(_0x42cde7&&_0x1f8923[_0x46d46a(0x49c)+'r']&&_0x34aa2b[_0x46d46a(0x49c)+'r'][_0x46d46a(0x24e)+'ength'])return _0x4f408e['sourc'+'e']=_0x5387c8['sourc'+'e']||_0x46d46a(0x526)+_0x46d46a(0x5e9)+'e().e'+'xport'+'s.mem'+'ory',new _0x165b72(_0x593e65[_0x46d46a(0x49c)+'r']);}});try{var _0x4ad34b=new BroadcastChannel(_0x212d44(0x47a)+'a-sw');_0x4ad34b[_0x212d44(0x219)+_0x212d44(0x336)]=function(_0x59a41e){var _0x9dcf7c=_0x212d44,_0x9ed5ac=_0x59a41e['data'];if(_0x9ed5ac&&_0x2376e3[_0x9dcf7c(0x524)](_0x9ed5ac[_0x9dcf7c(0x21e)+'ura'],_0x15f57e)&&_0x9ed5ac[_0x9dcf7c(0x121)]===_0x9dcf7c(0x37c))_0x2376e3[_0x9dcf7c(0x450)](_0x182b32,_0x9ed5ac['cmd'],_0x9ed5ac[_0x9dcf7c(0x202)]);};}catch(_0x5737d7){}var _0x3e8add=[];(function _0x4ddb28(){var _0x3b383e=_0x212d44,_0x299489={'kdmuz':function(_0x397057,_0x38d019){var _0xff3d2=_0x9852;return _0x2376e3[_0xff3d2(0x449)](_0x397057,_0x38d019);},'VwsKQ':function(_0x470ded,_0x1a8f8a){return _0x2376e3['hvRAc'](_0x470ded,_0x1a8f8a);},'IFUPV':function(_0x193996,_0xf4640f){return _0x2376e3['SSVEn'](_0x193996,_0xf4640f);},'zIqda':function(_0x2b2810,_0x29a419){return _0x2b2810!==_0x29a419;},'bSVeo':'funct'+'ion'},_0x3d7564=['log','warn','error',_0x2376e3[_0x3b383e(0x35d)],_0x3b383e(0x44b)];for(var _0x5d4fd9=-0x577*-0x1+-0xb57*0x2+0x1137;_0x5d4fd9<_0x3d7564['lengt'+'h'];_0x5d4fd9++){(function(_0x43ce59){var _0x789376=_0x3b383e,_0x1781c4=console[_0x43ce59];if(typeof _0x1781c4!==_0x299489[_0x789376(0x46e)])return;console[_0x43ce59]=function(){var _0x11c3d8=_0x789376,_0x215df1={'drlQE':'windo'+'w.'};try{var _0xc758e7='';for(var _0x1e8f92=-0x659*-0x3+-0x1f13*-0x1+-0x321e;_0x299489[_0x11c3d8(0x600)](_0x1e8f92,arguments[_0x11c3d8(0x2e1)+'h']);_0x1e8f92++){var _0x38cb38=arguments[_0x1e8f92];if(_0x299489[_0x11c3d8(0xea)](typeof _0x38cb38,'strin'+'g'))_0xc758e7+=_0x38cb38;else{if(_0x38cb38&&_0x38cb38['messa'+'ge'])_0xc758e7+=_0x38cb38[_0x11c3d8(0x266)+'ge'];}}if(_0x299489[_0x11c3d8(0x234)](_0xc758e7[_0x11c3d8(0x308)+'Of'](_0x54c1da),-(-0x2668+-0x151f+0x3f8*0xf)))return _0x1781c4['apply'](console,arguments);if(_0x299489[_0x11c3d8(0x60f)](_0xc758e7['index'+'Of'](_0x11c3d8(0x412)+_0x11c3d8(0x49b)+'dkit'),-(-0xa17+0xfd*0x10+-0x5b8))){if(_0x11c3d8(0x376)!==_0x11c3d8(0x558)){var _0x3751aa=_0xc758e7[_0x11c3d8(0x320)](0x4ed*0x6+0x5*-0x33b+-0xd67,0x2535+0x26a+0x243*-0x11);if(_0x3e8add[_0x11c3d8(0x308)+'Of'](_0x3751aa)===-(0x2a*0x40+0x1406+-0x1e85)&&_0x3e8add['lengt'+'h']<-0x2*0xbb+-0x1*0x2072+0x1b5*0x14)_0x3e8add['push'](_0x3751aa);}else return _0x45ba1d[_0x11c3d8(0x3ac)+'e']=_0x215df1[_0x11c3d8(0x26b)]+_0x3ecf55[_0x1ad149]+(_0x11c3d8(0x55a)+'le'),_0x51d522;}}catch(_0x102c06){}return _0x1781c4[_0x11c3d8(0x27d)](console,arguments);};}(_0x3d7564[_0x5d4fd9]));}}());var _0x5d0b54={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x297ddb=null,_0x428f7f=null,_0x5b4018=-(0x948+-0x1d97+0x1450),_0xa2a562=null;function _0x559ba6(_0x2e42ce){var _0x55e3f2=_0x212d44;try{if(_0x2376e3[_0x55e3f2(0x299)](_0x2376e3[_0x55e3f2(0x32d)],_0x2376e3['oNXmo'])){if(!_0x2e42ce)return;var _0xf14fac=_0x2e42ce[_0x55e3f2(0x526)+'nce']?_0x2e42ce['insta'+'nce'][_0x55e3f2(0x40a)+'ts']:_0x2e42ce[_0x55e3f2(0x40a)+'ts']||null;if(!_0xf14fac)return;if(!_0xa2a562){if(_0x2376e3[_0x55e3f2(0x299)](_0x2376e3['dgrlF'],_0x55e3f2(0x249)))return _0x5d0af7['sourc'+'e']=_0x55e3f2(0x11c)+_0x55e3f2(0x5bd)+'bindi'+'ng',_0x3e396e;else try{_0xa2a562=Object['keys'](_0xf14fac)[_0x55e3f2(0x320)](0x7e2*0x2+0x1*0x1408+0x3a*-0x9e,0xa4+-0xbe6+0xb5a);}catch(_0x239f4e){}}var _0x120191=_0xf14fac[_0x55e3f2(0x50f)+'y'];_0x120191&&_0x120191[_0x55e3f2(0x49c)+'r']&&_0x2376e3[_0x55e3f2(0x4de)](_0x120191[_0x55e3f2(0x49c)+'r'][_0x55e3f2(0x24e)+'ength'],-0x1*-0x1147+-0x2389+0x1242)&&(_0x428f7f=_0x120191,_0x5b4018=_0x2376e3[_0x55e3f2(0x311)](Date['now'](),_0x5c73ce));}else _0x3b58fa=_0xca494d;}catch(_0x37e38e){}}function _0x53a3e6(){var _0x53008b=_0x212d44,_0x3863fc={'aymQJ':function(_0x578076,_0x464b72){return _0x578076===_0x464b72;},'ccKAO':'funct'+'ion','cVmYu':function(_0x176ef4,_0x23b60d){return _0x176ef4(_0x23b60d);},'sWEww':function(_0x5201a1,_0x255b92){return _0x5201a1!==_0x255b92;},'xLWCQ':function(_0x28106e,_0x352fe5){return _0x28106e===_0x352fe5;},'vtuoW':_0x2376e3[_0x53008b(0x510)],'wiZiP':'JSMFK'};try{if(_0x2376e3['BQBoC'](typeof WebAssembly,_0x2376e3['PPXQR']))return;var _0x438d9c=[_0x2376e3[_0x53008b(0x2fb)],'insta'+_0x53008b(0x5e9)+_0x53008b(0x1ac)+_0x53008b(0x38a)];for(var _0x4cea16=-0xd*0x2cf+0x1a35+0xa4e;_0x2376e3[_0x53008b(0x567)](_0x4cea16,_0x438d9c['lengt'+'h']);_0x4cea16++){(function(_0x2adecb){var _0x727402=_0x53008b,_0x4c461d=WebAssembly[_0x2adecb];if(_0x3863fc['sWEww'](typeof _0x4c461d,_0x727402(0x4b5)+'ion')||_0x4c461d[_0x727402(0x21e)+'uraMe'+_0x727402(0x5bf)+'ap'])return;var _0x16ef8f=function(){var _0x43fc1c=_0x727402,_0x24785f=_0x4c461d[_0x43fc1c(0x27d)](this,arguments);try{if(_0x24785f&&_0x3863fc[_0x43fc1c(0x421)](typeof _0x24785f[_0x43fc1c(0x22d)],_0x3863fc[_0x43fc1c(0xfd)]))_0x24785f[_0x43fc1c(0x22d)](_0x559ba6,function(){});else _0x3863fc[_0x43fc1c(0x1d3)](_0x559ba6,_0x24785f);}catch(_0x3bd9cb){}return _0x24785f;};_0x16ef8f[_0x727402(0x21e)+_0x727402(0x5ee)+_0x727402(0x5bf)+'ap']=!![];try{if(_0x3863fc[_0x727402(0xfa)](_0x3863fc[_0x727402(0x30b)],_0x3863fc['wiZiP']))return null;else Object[_0x727402(0x3e2)+_0x727402(0x416)+'erty'](_0x16ef8f,'name',{'value':_0x4c461d['name'],'configurable':!![]});}catch(_0x2703f9){}WebAssembly[_0x2adecb]=_0x16ef8f;}(_0x438d9c[_0x4cea16]));}}catch(_0x306a98){}}var _0x2756f6=null,_0x4a22eb=null,_0x3fa30b={},_0x4ecd8b=[],_0xa5983a=[],_0x335939=[{'type':_0x212d44(0x21c)+_0x212d44(0x593)+_0x212d44(0x47f),'keep':!![]},{'type':_0x212d44(0x602)+_0x212d44(0x12b)+'pt','keep':!![]},{'type':'Weapo'+_0x212d44(0x4b1)+_0x212d44(0x40c),'keep':![]},{'type':_0x212d44(0x4f0)+_0x212d44(0x19a)+_0x212d44(0x172),'keep':!![]},{'type':'Enemy'+_0x212d44(0x168),'keep':!![],'many':!![]}],_0x30b624=[_0x212d44(0x290)+'bly-C'+_0x212d44(0x54b)+'.dll',_0x2376e3[_0x212d44(0x31f)],_0x212d44(0x321)+_0x212d44(0x17b)+_0x212d44(0x437)+'cal.d'+'ll',_0x2376e3[_0x212d44(0x29d)],_0x2376e3['neYUP'],_0x212d44(0x414)+'erate'+'d'];(function _0x3d7b9b(){var _0x5ef61e=_0x212d44,_0x221ee7={'zpHtc':_0x2376e3['AhIcC']};try{var _0x566fae=window['Unity'+_0x5ef61e(0x49b)+'dkit']&&window[_0x5ef61e(0x412)+_0x5ef61e(0x49b)+'dkit']['Runti'+'me'];if(!_0x566fae||typeof _0x566fae['creat'+'ePlug'+'in']!==_0x5ef61e(0x4b5)+_0x5ef61e(0x362)){if(_0x2376e3['AxcCP'](_0x2376e3[_0x5ef61e(0x4b8)],_0x2376e3[_0x5ef61e(0x42d)])){_0x5d0b54['error']=_0x2376e3[_0x5ef61e(0x247)];return;}else{var _0x4ae96f=_0x54b4e3[_0x5ef61e(0x412)+'WebMo'+_0x5ef61e(0x4cd)]&&_0x1a7f7e[_0x5ef61e(0x412)+_0x5ef61e(0x49b)+_0x5ef61e(0x4cd)][_0x5ef61e(0x106)+'me'];_0x57178f[_0x5ef61e(0x430)]=_0x4ae96f&&_0x4ae96f['__sak'+'uraTa'+'g']||null,_0x13d87e['tagMa'+_0x5ef61e(0x4ae)]=!!(_0x4ae96f&&_0x137419&&_0x4ae96f[_0x5ef61e(0x21e)+'uraTa'+'g']===_0x1f113d),_0x2d7627[_0x5ef61e(0x24a)+_0x5ef61e(0x588)+'e']=_0x4ae96f&&_0x4ae96f['_game']?typeof _0x4ae96f[_0x5ef61e(0x134)]:_0x221ee7['zpHtc'],_0x104ca8['plugi'+'nRunt'+'imeIs'+'Expor'+_0x5ef61e(0x573)]=!!(_0x43c2b0&&_0xa7ce99['_runt'+'ime']&&_0x2493f8['_runt'+_0x5ef61e(0x1a9)]===_0x4ae96f),_0x573873[_0x5ef61e(0x316)+'nRunt'+'imeGa'+'me']=_0x5e4c83&&_0x4193a1[_0x5ef61e(0x620)+'ime']&&_0x48ad30[_0x5ef61e(0x620)+_0x5ef61e(0x1a9)]['_game']?typeof _0x8a97ad[_0x5ef61e(0x620)+_0x5ef61e(0x1a9)][_0x5ef61e(0x134)]:_0x221ee7['zpHtc'];}}_0x5d0b54[_0x5ef61e(0x23a)+_0x5ef61e(0x201)]=!![],_0x4a22eb=_0x566fae[_0x5ef61e(0x465)+'ePlug'+'in']({'name':_0x2376e3['ljilv'],'version':_0x589948,'referencedAssemblies':_0x30b624['slice']()}),_0x5d0b54['ok']=!![];try{var _0x5649c8=window[_0x5ef61e(0x412)+_0x5ef61e(0x49b)+_0x5ef61e(0x4cd)][_0x5ef61e(0x106)+'me'];_0x5649c8[_0x5ef61e(0x21e)+'uraTa'+'g']=_0x2376e3[_0x5ef61e(0x3f0)](_0x589948+':',Math['rando'+'m']()['toStr'+_0x5ef61e(0x3c7)](0x1*-0x1fd5+0x44f*0x1+-0x2*-0xdd5)['slice'](-0x278+-0x291*0x6+0x11e0,-0x18d1+-0x3*0x8ed+0x19d1*0x2)),_0x297ddb=_0x5649c8[_0x5ef61e(0x21e)+_0x5ef61e(0x391)+'g'];}catch(_0x58d596){}_0x35955c(),_0x5d0b54['hooks'+'Regis'+'tered']=_0x4ecd8b[_0x5ef61e(0x2e1)+'h'],_0x2376e3['XLAgW'](_0x53a3e6),_0x5d0b54[_0x5ef61e(0x50f)+_0x5ef61e(0x17d)]=!![];}catch(_0x45135c){_0x5d0b54['error']=_0x2376e3[_0x5ef61e(0x547)](String,_0x45135c&&_0x45135c[_0x5ef61e(0x266)+'ge']||_0x45135c);}}());var _0x2dcc5c=new Float32Array(0x1eff+0x2646+-0x155*0x34),_0x2b41f2=new Int32Array(_0x2dcc5c[_0x212d44(0x49c)+'r']);function _0x2fecf6(_0x36df9b){return _0x2dcc5c[-0x216+-0x1*0x173f+0x511*0x5]=_0x36df9b,_0x2b41f2[0x1d9b+0x1396+-0x3131];}function _0x202980(_0x2c8f47){return _0x2b41f2[-0x16*0x26+0x2330+-0x1fec]=_0x2c8f47|0x589*-0x3+-0x2*-0x505+0x691,_0x2dcc5c[-0x22be+-0x1f81+-0x423f*-0x1];}var _0x40b65f={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x464311(){var _0x182df8=_0x212d44;try{if(_0x4a22eb&&_0x4a22eb[_0x182df8(0x620)+_0x182df8(0x1a9)]){var _0x55196b=_0x4a22eb['_runt'+_0x182df8(0x1a9)];if(_0x2376e3['hvRAc'](typeof _0x55196b[_0x182df8(0x5ab)+_0x182df8(0x5b3)+'e'],_0x2376e3['OmvAa'])){var _0x4b6b67=_0x55196b[_0x182df8(0x5ab)+'veGam'+'e']();if(_0x4b6b67)return _0x40b65f['sourc'+'e']='plugi'+'n._ru'+_0x182df8(0x3cb)+'.reso'+'lveGa'+'me()',_0x4b6b67;}if(_0x55196b['_game'])return _0x40b65f[_0x182df8(0x3ac)+'e']='plugi'+'n._ru'+'ntime'+_0x182df8(0x406)+'e',_0x55196b[_0x182df8(0x134)];}}catch(_0x17d7d8){}try{var _0x46102f=window['Unity'+_0x182df8(0x49b)+'dkit']&&window[_0x182df8(0x412)+_0x182df8(0x49b)+'dkit'][_0x182df8(0x106)+'me'];if(_0x46102f&&typeof _0x46102f[_0x182df8(0x5ab)+'veGam'+'e']===_0x182df8(0x4b5)+_0x182df8(0x362)){var _0x3e8430=_0x46102f[_0x182df8(0x5ab)+_0x182df8(0x5b3)+'e']();if(_0x3e8430){if('PbTMG'===_0x2376e3[_0x182df8(0x478)]){var _0x4c3aed=_0x5e6fe9['Unity'+'WebMo'+'dkit']&&_0x4f0bce['Unity'+'WebMo'+_0x182df8(0x4cd)][_0x182df8(0x106)+'me'];if(!_0x4c3aed||_0x2376e3['HLhIF'](typeof _0x4c3aed[_0x182df8(0x465)+_0x182df8(0x24b)+'in'],_0x2376e3[_0x182df8(0x43f)])){_0xacc7c3['error']='Runti'+_0x182df8(0x1be)+_0x182df8(0x519)+_0x182df8(0x5d6)+_0x182df8(0x4d7)+_0x182df8(0x511)+'le';return;}_0x416665[_0x182df8(0x23a)+'pted']=!![],_0x8b3131=_0x4c3aed[_0x182df8(0x465)+_0x182df8(0x24b)+'in']({'name':_0x2376e3[_0x182df8(0x186)],'version':_0x4c377a,'referencedAssemblies':_0x382a20[_0x182df8(0x320)]()}),_0x3ca46a['ok']=!![];try{var _0x5551e8=_0x28c115['Unity'+_0x182df8(0x49b)+'dkit']['Runti'+'me'];_0x5551e8[_0x182df8(0x21e)+'uraTa'+'g']=_0x2376e3[_0x182df8(0x1e7)](_0x2376e3['BAZQg'](_0x417bcc,':'),_0x2a20cd[_0x182df8(0x57b)+'m']()[_0x182df8(0x51e)+_0x182df8(0x3c7)](-0x15be+-0xf08+0x24ea)['slice'](-0x16a3+0x1068+0x1*0x63d,-0x17d3+-0x427*-0x2+-0x7*-0x239)),_0x107104=_0x5551e8['__sak'+_0x182df8(0x391)+'g'];}catch(_0x106a48){}_0x6a433d(),_0x3e0ae4['hooks'+_0x182df8(0x24d)+_0x182df8(0x445)]=_0x1cb0ee['lengt'+'h'],_0x292097(),_0xa474c4[_0x182df8(0x50f)+'yTap']=!![];}else return _0x40b65f[_0x182df8(0x3ac)+'e']=_0x182df8(0x106)+_0x182df8(0x4b4)+'solve'+_0x182df8(0x2c2)+')',_0x3e8430;}}if(_0x46102f&&_0x46102f[_0x182df8(0x134)])return _0x40b65f[_0x182df8(0x3ac)+'e']=_0x182df8(0x106)+_0x182df8(0x55e)+'ame',_0x46102f;}catch(_0x328476){}try{if('JXWMV'===_0x2376e3[_0x182df8(0x451)]){_0x5a4ddd[_0x182df8(0x57e)+'ntDef'+'ault'](),_0x2376e3['qTAjz'](_0x435ac4,_0x182df8(0x4b6)+_0x182df8(0x565));return;}else{var _0x11ccfb=window[_0x182df8(0x1df)+_0x182df8(0x431)+_0x182df8(0x326)]||window[_0x182df8(0x1df)+'Game']||window[_0x182df8(0x540)];if(_0x11ccfb)return _0x40b65f['sourc'+'e']=_0x2376e3[_0x182df8(0x2c6)],_0x11ccfb;}}catch(_0x5f02a2){}try{if(typeof game!==_0x182df8(0x1fb)+_0x182df8(0x191)&&game)return _0x40b65f[_0x182df8(0x3ac)+'e']=_0x2376e3[_0x182df8(0x1c5)],game;}catch(_0x5a35f7){}try{var _0x13d9a8=Object['keys'](window);for(var _0x5cfd3b=-0x2e*-0x9+0x7*0x58f+-0x2887;_0x2376e3['pNSkx'](_0x5cfd3b,_0x13d9a8['lengt'+'h'])&&_0x5cfd3b<0x186*-0x15+-0x1*0x23e5+0x463b;_0x5cfd3b++){var _0x1a2b5a=window[_0x13d9a8[_0x5cfd3b]];if(_0x1a2b5a&&_0x2376e3[_0x182df8(0x4a8)](typeof _0x1a2b5a,_0x182df8(0x102)+'t')&&_0x1a2b5a['Modul'+'e']&&_0x1a2b5a['Modul'+'e'][_0x182df8(0x19f)+'8']&&_0x1a2b5a[_0x182df8(0x1c8)+'e']['HEAPU'+'8'][_0x182df8(0x49c)+'r'])return _0x40b65f['sourc'+'e']=_0x2376e3[_0x182df8(0x3f0)](_0x2376e3['ALxUC'](_0x2376e3['gCsTs'],_0x13d9a8[_0x5cfd3b]),_0x2376e3[_0x182df8(0x388)]),_0x1a2b5a;}}catch(_0x5cb966){}return _0x40b65f[_0x182df8(0x3ac)+'e']=null,null;}function _0x49d14a(){var _0x1a7eb8=_0x212d44;try{if(_0x428f7f&&_0x428f7f[_0x1a7eb8(0x49c)+'r']&&_0x428f7f[_0x1a7eb8(0x49c)+'r']['byteL'+_0x1a7eb8(0x3d1)])return _0x40b65f['sourc'+'e']=_0x40b65f['sourc'+'e']||_0x1a7eb8(0x526)+_0x1a7eb8(0x5e9)+'e().e'+_0x1a7eb8(0x245)+'s.mem'+_0x1a7eb8(0x3d0),new Uint8Array(_0x428f7f[_0x1a7eb8(0x49c)+'r']);}catch(_0x44579d){}try{if(_0x2376e3[_0x1a7eb8(0x1e4)]!==_0x1a7eb8(0x5a9)){var _0xaaa165=_0x2376e3[_0x1a7eb8(0x5ea)](_0x464311);if(_0xaaa165&&_0xaaa165['Modul'+'e']&&_0xaaa165['Modul'+'e'][_0x1a7eb8(0x19f)+'8']&&_0xaaa165[_0x1a7eb8(0x1c8)+'e'][_0x1a7eb8(0x19f)+'8'][_0x1a7eb8(0x49c)+'r'])return _0xaaa165[_0x1a7eb8(0x1c8)+'e'][_0x1a7eb8(0x19f)+'8'];}else{var _0x35eaec=_0x468d16(_0x4873d1);_0x3a5889[_0x523ebf]=_0x35eaec[_0x1a7eb8(0x4a4)],_0x3b3cf1[_0x5bba00]={'key':_0x35eaec['key'],'sane':_0x35eaec[_0x1a7eb8(0x270)],'checked':_0x35eaec[_0x1a7eb8(0x1bb)+'ed'],'keyConsistent':_0x35eaec[_0x1a7eb8(0x331)+_0x1a7eb8(0x613)+_0x1a7eb8(0x1e0)],'keySource':_0x35eaec[_0x1a7eb8(0x2e2)+_0x1a7eb8(0x386)]};}}catch(_0x1481b9){}return null;}function _0x44ec33(){var _0x3b6e11=_0x212d44,_0x4a77a3=_0x49d14a();if(!_0x4a77a3)return null;try{return new DataView(_0x4a77a3[_0x3b6e11(0x49c)+'r'],_0x4a77a3['byteO'+'ffset'],_0x4a77a3[_0x3b6e11(0x24e)+_0x3b6e11(0x3d1)]);}catch(_0x3a7ded){return null;}}function _0x42d4f6(_0x259bec,_0x17c4fd){var _0x39d6d0=_0x212d44,_0x332d0d=_0x44ec33();if(!_0x332d0d)return _0x2376e3['dFYKQ']('wSByK','wSByK')?(_0x178f70['sourc'+'e']=_0x39d6d0(0x106)+'me.re'+'solve'+'Game('+')',_0xb91490):(_0x40b65f[_0x39d6d0(0x3c8)+'d']++,_0x40b65f['lastE'+_0x39d6d0(0x4ca)]=_0x40b65f['lastE'+'rror']||'no\x20HE'+'APU8\x20'+'-\x20Uni'+'ty\x20in'+_0x39d6d0(0x138)+'e\x20not'+_0x39d6d0(0x226)+'hable'+_0x39d6d0(0xf0)+'Runti'+'me.re'+_0x39d6d0(0x192)+_0x39d6d0(0x2c2)+_0x39d6d0(0x291)+_0x39d6d0(0x137)+'indow'+_0x39d6d0(0x3c1)+'al',undefined);if(_0x259bec<0x1419+-0x12d4+-0x145||_0x2376e3['oMXcM'](_0x259bec,0x51*-0x5+-0x1d70+0x1f09)>_0x332d0d['byteL'+'ength'])return _0x40b65f['faile'+'d']++,_0x40b65f[_0x39d6d0(0x238)+_0x39d6d0(0x4ca)]=_0x40b65f[_0x39d6d0(0x238)+_0x39d6d0(0x4ca)]||_0x2376e3[_0x39d6d0(0x4ea)]+_0x259bec[_0x39d6d0(0x51e)+_0x39d6d0(0x3c7)](0x1f8f+0xe5*0x1b+-0x2*0x1bd3)+_0x2376e3['qifRR']+_0x332d0d['byteL'+_0x39d6d0(0x3d1)]['toStr'+_0x39d6d0(0x3c7)](-0x3*0xb11+-0x1b14+0x3c57),undefined;try{if(_0x2376e3[_0x39d6d0(0x395)]===_0x2376e3[_0x39d6d0(0x318)]){var _0x3d43ae=_0x2376e3[_0x39d6d0(0x350)]['split']('|'),_0x1c1043=-0x5f5*0x5+0x2569+-0x20*0x3d;while(!![]){switch(_0x3d43ae[_0x1c1043++]){case'0':_0x3933e6['textC'+_0x39d6d0(0x153)+'t']=_0x7d07ca?_0x39d6d0(0x4b3)+_0x39d6d0(0x380):'Speed'+'\x20off';continue;case'1':_0x2376e3['qHOGr'](_0x1189d3);continue;case'2':_0x2bc478[_0x39d6d0(0x59e)]['backg'+_0x39d6d0(0x56e)]=_0x47575f?_0x3ac106:_0x2376e3['kFurr'];continue;case'3':_0x42e434['style'][_0x39d6d0(0x159)]=_0x527060?_0x39d6d0(0x31a)+'1b':_0x2376e3['zUwRt'];continue;case'4':_0xec77d7=!_0x3b98df;continue;}break;}}else{_0x40b65f['ok']++;switch(_0x17c4fd){case'u8':return _0x332d0d[_0x39d6d0(0x5c0)+_0x39d6d0(0x1ad)](_0x259bec);case'i8':return _0x332d0d[_0x39d6d0(0x2fd)+'t8'](_0x259bec);case'i16':return _0x332d0d[_0x39d6d0(0x2fd)+_0x39d6d0(0x11b)](_0x259bec,!![]);case'u16':return _0x332d0d['getUi'+'nt16'](_0x259bec,!![]);case _0x39d6d0(0x12c):return _0x332d0d[_0x39d6d0(0x2fd)+'t32'](_0x259bec,!![]);case'u32':return _0x332d0d['getUi'+_0x39d6d0(0x3f8)](_0x259bec,!![]);case _0x2376e3[_0x39d6d0(0x14f)]:return _0x332d0d['getFl'+_0x39d6d0(0x4db)](_0x259bec,!![]);case'f64':return _0x332d0d['getFl'+'oat64'](_0x259bec,!![]);case'v2':case'v3':case'v4':return _0x332d0d['getFl'+'oat32'](_0x259bec,!![]);default:return _0x332d0d[_0x39d6d0(0x2fd)+_0x39d6d0(0x378)](_0x259bec,!![]);}}}catch(_0x117dbe){return _0x40b65f['faile'+'d']++,_0x40b65f['lastE'+'rror']=_0x40b65f['lastE'+'rror']||_0x2376e3['wihDQ'](String,_0x117dbe&&_0x117dbe['messa'+'ge']||_0x117dbe)[_0x39d6d0(0x320)](0x1766+-0x47*-0x15+-0x1d39,-0x9d*0x22+-0x44c*0x3+0x2236),undefined;}}function _0x142f05(_0x3b2a72,_0xaecc7a,_0x5c7928){var _0x5c132c=_0x212d44,_0x5ea394={'aMMiI':'sakur'+_0x5c132c(0x411)+'v2','XbdGm':_0x2376e3[_0x5c132c(0x460)],'OhQhe':_0x5c132c(0x59e),'YqQar':_0x2376e3['fIWBV']},_0x5ed4d8=_0x2376e3[_0x5c132c(0x2fc)](_0x44ec33);if(!_0x5ed4d8||_0x2376e3['ibAll'](_0x3b2a72,-0x256f+0x2566+-0x9*-0x1)||_0x2376e3[_0x5c132c(0x491)](_0x2376e3['HPBDb'](_0x3b2a72,-0x12d6*0x2+-0x1611+0x3bc1),_0x5ed4d8[_0x5c132c(0x24e)+_0x5c132c(0x3d1)]))return![];try{if(_0x2376e3[_0x5c132c(0x3f6)]!==_0x2376e3[_0x5c132c(0x46c)]){switch(_0xaecc7a){case'u8':case'i8':_0x5ed4d8[_0x5c132c(0x611)+_0x5c132c(0x1ad)](_0x3b2a72,_0x5c7928&-0x1f5b*-0x1+-0x845+-0x1617*0x1);break;case _0x2376e3[_0x5c132c(0x513)]:case'u16':_0x5ed4d8[_0x5c132c(0x143)+_0x5c132c(0x11b)](_0x3b2a72,_0x2376e3[_0x5c132c(0x5e4)](_0x5c7928,-0x81c+0x1f63+-0x1*0x1747),!![]);break;case _0x5c132c(0x12c):case _0x5c132c(0x284):_0x5ed4d8['setIn'+_0x5c132c(0x378)](_0x3b2a72,_0x2376e3[_0x5c132c(0x3c9)](_0x5c7928,-0xcbc+0x31*0x35+-0xd*-0x33),!![]);break;case'f32':_0x5ed4d8['setFl'+_0x5c132c(0x4db)](_0x3b2a72,_0x5c7928,!![]);break;default:_0x5ed4d8[_0x5c132c(0x143)+_0x5c132c(0x378)](_0x3b2a72,_0x5c7928|-0x257f*0x1+0x22fb+-0xe*-0x2e,!![]);}return!![];}else{var _0x329b8b=_0x2376e3['XITpa']['split']('|'),_0x9d66ee=-0x2122+0x16ab+0xa77;while(!![]){switch(_0x329b8b[_0x9d66ee++]){case'0':var _0x29bb0b=_0x47f981(_0x3b611f+_0x3623d1+_0x351653[_0x5c132c(0x49d)+'n'],_0x2376e3[_0x5c132c(0x3bd)]);continue;case'1':if(!_0x351653)return null;continue;case'2':_0x350a3c=_0x2376e3[_0x5c132c(0x277)](_0x350a3c,-0x9c6*-0x3+0x1a83+-0x37d5)&-0x1*0x1fc9+0xc*-0x16f+-0x2*-0x187f;continue;case'3':var _0x351653=_0x2d0788[_0x42663d];continue;case'4':_0x4d3a67&=0xa7b*0x1+0x6af*0x2+-0x17d8;continue;case'5':var _0x174cd7;continue;case'6':var _0x350a3c=_0x1017e0(_0x2376e3['zFeLG'](_0x44b6a8+_0x210442,_0x351653[_0x5c132c(0x5ad)+'d']),'u8');continue;case'7':_0x5714b8&=-0xdfd+0x25eb+-0x39*0x67;continue;case'8':if(_0x5714b8===_0x5f2db1||_0x29bb0b===_0x2c271a||_0x56fa16===_0x4f127b||_0x4d3a67===_0x1c2208)return null;continue;case'9':if(_0x5211d9==='obfF')_0x174cd7=_0x2376e3[_0x5c132c(0x4e5)](_0x5e69c0,_0x2376e3[_0x5c132c(0x59c)](_0x29bb0b,_0x5714b8));else{if(_0x2376e3[_0x5c132c(0x52f)](_0x107601,_0x2376e3['wOeJM']))_0x174cd7=_0x2376e3[_0x5c132c(0x57a)](_0x2376e3[_0x5c132c(0x59c)](_0x29bb0b,_0x5714b8),-0x1672+0x1705+-0x93);else _0x174cd7=_0x2376e3[_0x5c132c(0x4ed)](_0x29bb0b^_0x5714b8,-0x3e3+-0x1*-0x1c57+-0x1775)!==-0x35*0x71+-0x7c9*-0x5+-0xf88?0x1180+-0x1725+0x5a6:0x1744+-0xb4e+-0xbf6;}continue;case'10':var _0x5714b8=_0x4a8058(_0x2376e3[_0x5c132c(0x1fd)](_0x46e98d,_0xc58eaf)+_0x351653['key'],'u8');continue;case'11':return{'real':_0x174cd7,'fake':_0x56fa16,'act':_0x4d3a67,'init':_0x350a3c,'key':_0x5714b8,'hidden':_0x29bb0b};case'12':var _0x56fa16=_0x297e8e(_0x2376e3['EHofc'](_0x2376e3['zFeLG'](_0x148f61,_0xcbe3bf),_0x351653['fake']),_0x2170f3===_0x2376e3[_0x5c132c(0x2ba)]?_0x2376e3[_0x5c132c(0x14f)]:_0x2376e3['fyoSD'](_0x27da5d,'obfI')?_0x2376e3[_0x5c132c(0x3bd)]:'u8');continue;case'13':_0x29bb0b|=-0xd79+0x13a*0x11+-0x761;continue;case'14':var _0x4d3a67=_0x1700cf(_0x2376e3[_0x5c132c(0x57c)](_0x1bad66,_0x57f742)+_0x351653['activ'+'e'],'u8');continue;}break;}}}catch(_0x274e12){if(_0x2376e3[_0x5c132c(0x14d)]('BHpgP',_0x5c132c(0x11d))){var _0x29a13e=_0xeef12[_0x5c132c(0x45c)+_0x5c132c(0x481)+_0x5c132c(0x4ff)](_0x5ea394[_0x5c132c(0x13e)]);if(_0x29a13e)return _0x29a13e;if(!_0x4d0ad7['body']||!_0x554855[_0x5c132c(0x13d)][_0x5c132c(0xe8)+'dChil'+'d'])return null;try{var _0x4fb475=(_0x5c132c(0x34f)+'|4|3')[_0x5c132c(0x541)]('|'),_0x246bb2=-0x673*0x1+-0x2154+0x27c7;while(!![]){switch(_0x4fb475[_0x246bb2++]){case'0':_0x29a13e['id']=_0x5c132c(0x47a)+'a-sw-'+'v2';continue;case'1':_0x29a13e=_0x8e6540[_0x5c132c(0x465)+_0x5c132c(0x48c)+_0x5c132c(0x1e0)]('div');continue;case'2':if(!_0x4c5775[_0x5c132c(0x45c)+'ement'+'ById'](_0x5ea394[_0x5c132c(0x627)])){var _0x43a7c5=_0x57459b[_0x5c132c(0x465)+_0x5c132c(0x48c)+_0x5c132c(0x1e0)](_0x5ea394['OhQhe']);_0x43a7c5['id']=_0x5ea394['XbdGm'],_0x43a7c5['textC'+'onten'+'t']=_0x5ea394['YqQar'],(_0x4cf919['head']||_0x3768ba[_0x5c132c(0x340)+_0x5c132c(0x45d)+_0x5c132c(0x481)])[_0x5c132c(0xe8)+_0x5c132c(0x1f3)+'d'](_0x43a7c5);}continue;case'3':return _0x29a13e;case'4':_0x293fb0[_0x5c132c(0x13d)]['appen'+_0x5c132c(0x1f3)+'d'](_0x29a13e);continue;}break;}}catch(_0x4b93ba){return null;}}else return![];}}var _0x567023={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':_0x2376e3[_0x212d44(0x3bd)]},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':_0x212d44(0x12c)},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0x543a86(_0x10c6c4){var _0x2c6d76=_0x212d44,_0xfae6ce={'RqzfF':function(_0x46fd9f,_0x4260f0){return _0x46fd9f!==_0x4260f0;},'sYgSV':'cmd'};if(_0x2376e3['bZDPq']!=='qzuKB'){var _0x843bab=_0xc0b3cc&&_0x349d5b['data'];if(!_0x843bab||_0xfae6ce['RqzfF'](_0x843bab['__sak'+_0x2c6d76(0x393)],_0xcb9e08)||_0x843bab['kind']!==_0xfae6ce[_0x2c6d76(0x276)])return;_0xe92605(_0x843bab[_0x2c6d76(0x37c)],_0x843bab[_0x2c6d76(0x202)]);}else{var _0x1b633b='';for(var _0x496f21=-0xc9d*-0x2+-0x9bc+-0xf7e;_0x2376e3['GKpvj'](_0x496f21,_0x10c6c4[_0x2c6d76(0x2e1)+'h']);_0x496f21++){var _0x201dae=_0x10c6c4[_0x496f21][_0x2c6d76(0x51e)+_0x2c6d76(0x3c7)](-0xe1f+-0x1ab+0xfda);_0x1b633b+=_0x2376e3[_0x2c6d76(0x37d)](_0x2376e3['paCXi'](_0x201dae[_0x2c6d76(0x2e1)+'h'],-0x3e7+0x1*-0x1f51+0x233a)?'0':'',_0x201dae);}return _0x1b633b;}}function _0x193433(_0x2c9796,_0x58fe85,_0x30288d){var _0x4b29ce=_0x212d44,_0x132ec0={'uSqDn':function(_0x578f80,_0x45e4b3){return _0x578f80+_0x45e4b3;}},_0x5d09de=_0x44ec33();if(!_0x5d09de)return _0x2376e3[_0x4b29ce(0x256)](_0x2376e3['jZjUy'],_0x2376e3['MWlHi'])?_0x2d91d8[_0x4b29ce(0x456)+_0x4b29ce(0x4bc)+_0x4b29ce(0x4dd)](_0x132ec0[_0x4b29ce(0x4ab)](_0x132ec0[_0x4b29ce(0x4ab)]('[data'+'-a=\x22',_0x30c3b4),'\x22]')):(_0x40b65f[_0x4b29ce(0x3c8)+'d']++,_0x40b65f[_0x4b29ce(0x238)+_0x4b29ce(0x4ca)]=_0x40b65f[_0x4b29ce(0x238)+'rror']||_0x2376e3[_0x4b29ce(0x3b7)],null);if(_0x2376e3[_0x4b29ce(0x476)](_0x58fe85,-0x1b*-0x9f+-0x1*-0x3d7+-0x527*0x4)||_0x58fe85+_0x30288d>_0x5d09de[_0x4b29ce(0x24e)+_0x4b29ce(0x3d1)])return _0x40b65f[_0x4b29ce(0x3c8)+'d']++,_0x40b65f[_0x4b29ce(0x238)+_0x4b29ce(0x4ca)]=_0x40b65f['lastE'+_0x4b29ce(0x4ca)]||_0x2376e3['psvsR'](_0x2376e3[_0x4b29ce(0x175)](_0x4b29ce(0x1ff)+'ss\x200x',(_0x2c9796+_0x58fe85)[_0x4b29ce(0x51e)+'ing'](-0x1d9*0x6+0x1*0x1862+-0xd3c))+('\x20past'+_0x4b29ce(0x480)+'\x20end\x20'+'0x'),_0x5d09de[_0x4b29ce(0x24e)+_0x4b29ce(0x3d1)]['toStr'+_0x4b29ce(0x3c7)](0x1bd5*0x1+0x224e*0x1+-0x3e13)),null;try{var _0x4c6fef=new Uint8Array(_0x30288d);for(var _0x4c40e2=0x13*0x1+0x7a*0x16+-0xa8f;_0x4c40e2<_0x30288d;_0x4c40e2++)_0x4c6fef[_0x4c40e2]=_0x5d09de['getUi'+'nt8'](_0x2376e3[_0x4b29ce(0x101)](_0x2376e3[_0x4b29ce(0xf4)](_0x2c9796,_0x58fe85),_0x4c40e2));return _0x40b65f['ok']++,_0x4c6fef;}catch(_0x48342c){return _0x40b65f[_0x4b29ce(0x3c8)+'d']++,_0x40b65f['lastE'+'rror']=_0x40b65f[_0x4b29ce(0x238)+_0x4b29ce(0x4ca)]||_0x2376e3[_0x4b29ce(0x366)](String,_0x48342c&&_0x48342c[_0x4b29ce(0x266)+'ge']||_0x48342c)[_0x4b29ce(0x320)](-0x162c+0x6ec+0xf40,0xc00+-0x529+0xe9*-0x7),null;}}function _0x9c23e2(_0x52f570,_0x10b1b5,_0x575735){var _0xb7627f=_0x212d44,_0x2a5d8b=_0x567023[_0x575735],_0x24e151=_0x193433(_0x52f570,_0x10b1b5,_0x2a5d8b[_0xb7627f(0x568)]);if(!_0x24e151)return null;var _0x30d233=new DataView(_0x24e151['buffe'+'r'],_0x24e151['byteO'+_0xb7627f(0x454)],_0x24e151['byteL'+_0xb7627f(0x3d1)]),_0x12d92c=_0x30d233['getIn'+'t32'](_0x2a5d8b['key'],!![]),_0x554a80=_0x30d233[_0xb7627f(0x2fd)+_0xb7627f(0x378)](_0x2a5d8b[_0xb7627f(0x49d)+'n'],!![]),_0x26d3a3=_0x30d233['getUi'+'nt8'](_0x2a5d8b[_0xb7627f(0x5ad)+'d'])&0x1d7e+0x1c82+-0x39ff,_0x519967=_0x2376e3['gpZbb'](_0x575735,'obfF')?_0x30d233['getFl'+_0xb7627f(0x4db)](_0x2a5d8b[_0xb7627f(0x589)],!![]):_0x2376e3[_0xb7627f(0x524)](_0x575735,'obfI')?_0x30d233['getIn'+'t32'](_0x2a5d8b['fake'],!![]):_0x30d233[_0xb7627f(0x5c0)+'nt8'](_0x2a5d8b[_0xb7627f(0x589)]),_0x25b171=_0x30d233[_0xb7627f(0x5c0)+_0xb7627f(0x1ad)](_0x2a5d8b[_0xb7627f(0x280)+'e'])&0x1*0x1efa+0xa3*0x1d+-0x3170;return{'keyAtOffset0':_0x12d92c,'hidden':_0x554a80,'inited':_0x26d3a3,'fake':_0x519967,'act':_0x25b171,'hex':_0x543a86(_0x24e151),'alt':_0x2376e3[_0xb7627f(0x524)](_0x575735,_0xb7627f(0x53f))?_0x554a80^_0x2376e3[_0xb7627f(0x3c9)](_0x519967,-0x1d29+-0x2607+0x2*0x2198):null};}function _0x54a665(_0x4746d7,_0x1836e7,_0x3e1eca){var _0xbe86bd=_0x212d44;if(_0x4746d7===_0x2376e3[_0xbe86bd(0x2ba)])return _0x2376e3[_0xbe86bd(0x547)](_0x202980,_0x1836e7^_0x3e1eca);if(_0x4746d7===_0x2376e3[_0xbe86bd(0x22e)])return _0x2376e3['EWvzr'](_0x1836e7,_0x3e1eca)|-0x1*-0xe2f+0x202*0xb+-0x741*0x5;return((_0x1836e7^_0x3e1eca)&0x3*-0xcf9+0xe0c*-0x1+0x35f6)!==0x1640+-0x130c+-0x334?0x1460+0xb15+-0xf4*0x21:0xc51*-0x1+0xf3e+0x1*-0x2ed;}function _0x2664c5(_0x2004e5,_0x5ecb32,_0x98f251){var _0x5ee1e6=_0x212d44,_0x5bde98=(_0x5ee1e6(0x118)+_0x5ee1e6(0x46d)+_0x5ee1e6(0x275)+_0x5ee1e6(0xeb)+_0x5ee1e6(0x4d2)+_0x5ee1e6(0x439)+'1|10')[_0x5ee1e6(0x541)]('|'),_0x324c5d=0x9da+-0x7fe+0x22*-0xe;while(!![]){switch(_0x5bde98[_0x324c5d++]){case'0':var _0xf5424e;continue;case'1':if(!_0x372e9b)return null;continue;case'2':_0x59d0a4&=0xde*-0x1+-0x1e16+-0x1ff3*-0x1;continue;case'3':var _0x372e9b=_0x567023[_0x98f251];continue;case'4':var _0x1195cd=_0x2376e3['cQWVd'](_0x42d4f6,_0x2004e5+_0x5ecb32+_0x372e9b[_0x5ee1e6(0x49d)+'n'],_0x2376e3[_0x5ee1e6(0x3bd)]);continue;case'5':var _0x26038f=_0x2376e3['OKJZd'](_0x42d4f6,_0x2004e5+_0x5ecb32+_0x372e9b['activ'+'e'],'u8');continue;case'6':var _0x284e7a=_0x42d4f6(_0x2004e5+_0x5ecb32+_0x372e9b[_0x5ee1e6(0x5ad)+'d'],'u8');continue;case'7':var _0x14cdf1=_0x42d4f6(_0x2376e3[_0x5ee1e6(0x552)](_0x2004e5+_0x5ecb32,_0x372e9b[_0x5ee1e6(0x589)]),_0x98f251===_0x2376e3['aGOfh']?'f32':_0x2376e3['HRUpJ'](_0x98f251,_0x2376e3[_0x5ee1e6(0x22e)])?_0x2376e3['ELapO']:'u8');continue;case'8':_0x26038f&=-0x78d+-0x5b*-0x11+0x183;continue;case'9':_0x284e7a=(_0x284e7a||-0x1fd4+0x3d*0x7+0x1e29)&-0x982+-0xca5*-0x1+-0x191*0x2;continue;case'10':return{'real':_0xf5424e,'fake':_0x14cdf1,'act':_0x26038f,'init':_0x284e7a,'key':_0x59d0a4,'hidden':_0x1195cd};case'11':if(_0x2376e3['cRpfE'](_0x98f251,'obfF'))_0xf5424e=_0x2376e3['CwCcO'](_0x202980,_0x2376e3[_0x5ee1e6(0x296)](_0x1195cd,_0x59d0a4));else{if(_0x98f251===_0x5ee1e6(0x53f))_0xf5424e=_0x1195cd^_0x59d0a4|-0x7b8+-0x3a9*-0x7+-0x11e7;else _0xf5424e=_0x2376e3[_0x5ee1e6(0x4ed)](_0x2376e3[_0x5ee1e6(0x25d)](_0x1195cd,_0x59d0a4),-0x18c6+-0x2511+0x3ed6*0x1)!==-0xae3+-0x10fd*-0x1+-0x61a?0x2b*0x3b+0x12b2+0x1*-0x1c9a:-0x11d8+-0x2*-0x1046+0x75a*-0x2;}continue;case'12':_0x1195cd|=0xf7*0x22+-0x2349+0x27b;continue;case'13':var _0x59d0a4=_0x2376e3[_0x5ee1e6(0x32b)](_0x42d4f6,_0x2376e3[_0x5ee1e6(0x101)](_0x2004e5,_0x5ecb32)+_0x372e9b['key'],'u8');continue;case'14':if(_0x2376e3[_0x5ee1e6(0x1f4)](_0x59d0a4,undefined)||_0x1195cd===undefined||_0x2376e3[_0x5ee1e6(0x622)](_0x14cdf1,undefined)||_0x26038f===undefined)return null;continue;}break;}}function _0x3da243(_0x54be48,_0x1375e1,_0x28960f,_0x46e4b9){var _0x1517e9=_0x212d44,_0x10f3ff=_0x567023[_0x28960f],_0x12894f=_0x193433(_0x54be48,_0x1375e1,_0x10f3ff[_0x1517e9(0x568)]);if(!_0x12894f)return![];var _0x4fdddb=new DataView(_0x12894f['buffe'+'r'],_0x12894f['byteO'+'ffset'],_0x12894f['byteL'+_0x1517e9(0x3d1)]),_0x1e1f5a=_0x10f3ff['keyTy'+'pe']==='u8'?_0x4fdddb[_0x1517e9(0x5c0)+_0x1517e9(0x1ad)](_0x10f3ff[_0x1517e9(0x18c)]):_0x4fdddb[_0x1517e9(0x2fd)+'t32'](_0x10f3ff[_0x1517e9(0x18c)],!![]),_0x5b7c36;if(_0x2376e3[_0x1517e9(0x1bd)](_0x28960f,_0x1517e9(0x2be)))_0x5b7c36=_0x2376e3[_0x1517e9(0x23b)](_0x2fecf6,_0x46e4b9);else{if(_0x2376e3[_0x1517e9(0x5a2)](_0x28960f,'obfI'))_0x5b7c36=_0x2376e3[_0x1517e9(0x517)](_0x46e4b9,-0x1*0x3ad+0x99*0x3+0x1e2);else _0x5b7c36=(_0x46e4b9?-0x1a4d+-0x1*0x486+-0x1ed4*-0x1:-0xd*-0x1cf+0xb63+-0x22e6)&-0x19fb+0x10c2+0xa38;}return _0x142f05(_0x54be48+_0x1375e1+_0x10f3ff[_0x1517e9(0x49d)+'n'],_0x1517e9(0x12c),_0x2376e3[_0x1517e9(0x2b1)](_0x5b7c36,_0x1e1f5a))&&_0x142f05(_0x2376e3[_0x1517e9(0x37d)](_0x54be48+_0x1375e1,_0x10f3ff[_0x1517e9(0x589)]),_0x2376e3['CPsyn'](_0x28960f,'obfF')?'f32':_0x28960f===_0x1517e9(0x53f)?_0x2376e3['ELapO']:'u8',_0x2376e3[_0x1517e9(0x622)](_0x28960f,_0x2376e3['aGOfh'])?_0x46e4b9:_0x2376e3[_0x1517e9(0x1f4)](_0x28960f,_0x2376e3['wOeJM'])?_0x2376e3['oVWKN'](_0x46e4b9,-0xdb2*-0x1+-0x7*-0x47+-0x1*0xfa3):_0x46e4b9?0x1f84+0x78e+-0x2711:0x1*0x1b73+-0xee9*0x1+-0x5*0x282)&&_0x2376e3[_0x1517e9(0x42a)](_0x142f05,_0x2376e3[_0x1517e9(0x5b8)](_0x54be48,_0x1375e1)+_0x10f3ff[_0x1517e9(0x280)+'e'],'u8',-0x1b1c+0x1*0x1691+-0x48b*-0x1);}var _0xced96e={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0x13e1a9={},_0x503023=-0x1*-0x1840+0x1*0x6eb+-0x1f2b;function _0x29f156(_0x21d9db){var _0x2f770b=_0x212d44,_0x5884c6=_0x494704[_0x2f770b(0x21c)+'ntrol'+'ler']||[];for(var _0x541d9e=0xb*0x1dd+-0x1537+0x1*0xb8;_0x541d9e<_0x5884c6[_0x2f770b(0x2e1)+'h'];_0x541d9e++){var _0x556e24=_0x5884c6[_0x541d9e][-0x4f2*-0x1+0xfed*-0x2+0x1ae8];if(_0x2376e3['GhCFO'](_0x5884c6[_0x541d9e][-0x17*-0x21+0x57*-0x59+0x1b49],'obfF'))continue;var _0x105f62=_0x2376e3[_0x2f770b(0x5ca)](_0x9c23e2,_0x21d9db,_0x556e24,_0x2f770b(0x2be));if(!_0x105f62||_0x2376e3[_0x2f770b(0x2cf)](_0x105f62[_0x2f770b(0x5ad)+'d'],-0xc3d+-0x2513+0x5*0x9dd))continue;var _0x26b369=_0x54a665(_0x2f770b(0x2be),_0x105f62['hidde'+'n'],_0x105f62[_0x2f770b(0x360)+'Offse'+'t0']);if(_0x2376e3[_0x2f770b(0x4e7)](typeof _0x26b369,_0x2376e3[_0x2f770b(0x133)])||!isFinite(_0x26b369))continue;if(_0x2376e3['hovfA'](Math['abs'](_0x26b369),_0xced96e[_0x2f770b(0x147)])||Math[_0x2f770b(0x338)](_0x26b369)>_0xced96e[_0x2f770b(0x5d5)])continue;var _0x35604f=_0x2376e3[_0x2f770b(0x5b8)](_0x21d9db+':',_0x556e24),_0x2231d5=_0x13e1a9[_0x35604f];if(!_0x2231d5||_0x26b369!==_0x2231d5[_0x2f770b(0x2c5)+_0x2f770b(0x3ae)+'n'])_0x2231d5=_0x13e1a9[_0x35604f]={'base':_0x26b369,'lastWritten':null};var _0x2dee3f=_0x2231d5[_0x2f770b(0x5de)]*_0xced96e['facto'+'r'];_0x2376e3['kmMJg'](_0x3da243,_0x21d9db,_0x556e24,_0x2f770b(0x2be),_0x2dee3f)&&(_0x2231d5[_0x2f770b(0x2c5)+_0x2f770b(0x3ae)+'n']=_0x2dee3f,_0x503023++);}}var _0x494704={'FPScontroller':[[-0x230+-0xf6d*0x2+0x2*0x108d,_0x2376e3[_0x212d44(0x2ba)]],[0x2*0x844+-0x2522+0x14c2,_0x212d44(0x2be)],[-0x4ff*0x1+0x14*0x53+-0x13d*0x1,_0x212d44(0x2be)],[0x2683+0xea*0x2a+0x3*-0x1985,_0x2376e3['aGOfh']],[-0x2325+-0x16d9+-0x1b*-0x22a,_0x2376e3[_0x212d44(0x2ba)]],[0xdcb+-0x1*-0x16a9+-0x2c*0xd1,'obfF'],[0x1*0x1665+0x1996+0x3*-0xfc9,_0x212d44(0x2be)],[0x11c0+0x256a+-0x2*0x1b39,_0x2376e3['EBqxp']],[-0x24a6+-0x899+0x2e03,_0x2376e3['aGOfh']],[-0x1*0xe4e+-0x8*0x1d3+-0x1a*-0x125,'i32'],[0xc4+-0x4*0x9a3+0x26a8,'v3'],[-0x1f0+-0x2601+0x1*0x28dd,'u8'],[-0x1c6f*0x1+-0x1543+-0x1*-0x32a2,_0x212d44(0x2be)],[0x1a0f+0x84*-0x5+-0x1673,_0x212d44(0x12c)],[0x100e+-0x2176+0x1*0x1274,'u8'],[-0x1aab+-0x20*-0x42+0x137b,_0x2376e3['ELapO']],[0x6aa+-0xb3*-0x1+0x1*-0x649,'u8'],[-0x16*0x155+-0x86*-0x1+0x5*0x5f9,'u8'],[-0x2f5*-0x1+-0x1ff1+0x1e18,_0x2376e3[_0x212d44(0x2ba)]],[-0x60d+0x4*-0x15a+0xca9,_0x212d44(0x2be)],[0x3*0x29d+0x1*0x1292+0x191d*-0x1,_0x212d44(0x273)],[0xb84+-0xbd3+0x19f,_0x212d44(0x273)],[-0x1*-0xcb3+0x7b*0x25+-0x215*0xe,'v3'],[0x678+0x466*0x5+-0xd8b*0x2,'v3'],[-0x643+0x6ff+0x4*0x2c,_0x2376e3[_0x212d44(0x14f)]],[-0x1*0x15b5+-0x1*0x7f+0x17a4,_0x2376e3['Iobzn']],[0x2d5+0x110b*0x2+-0x1*0x2363,'u8'],[0x5*0x1+-0x882+0xa09,_0x2376e3[_0x212d44(0x14f)]],[0xbf8+-0x4ff+-0x561,'v3'],[-0x9*-0x229+0x1*0x448+-0x1615,'u8'],[0x17e8+0x1e7d+-0x34b1,_0x2376e3[_0x212d44(0x14f)]],[-0x1fe0*0x1+-0x425*0x5+0x3651,_0x2376e3[_0x212d44(0x14f)]],[0x24d9+0x77b+-0x2a98,'u8'],[0xc94*0x2+0x52*0x13+-0x245*0xd,'u8'],[0x13*0x7d+-0x1c74+0x14ed,_0x2376e3['aGOfh']],[0xfea+0xe13+-0x1*0x1c25,_0x2376e3['Iobzn']],[0x113c+0x2*0x185+-0x1*0x126a,'u8'],[0x17da+-0x1712+0x118,'obfF'],[0x1b37*0x1+-0x641*0x5+0x606,'v3'],[-0xe90+-0x1d3c+0x2dd4,_0x212d44(0x5b9)],[-0x7*-0x129+0x1*-0x1d3d+0x1736,_0x2376e3[_0x212d44(0x14f)]],[0x1e83*-0x1+0x1feb+0xb4,_0x2376e3[_0x212d44(0x14f)]],[-0xd70+0x17ae+-0x7f2,'f32'],[0xb11+-0x26f7+0x2*0xf1b,_0x2376e3[_0x212d44(0x14f)]],[0x1fa2*-0x1+0xe*0x293+-0x214,_0x212d44(0x273)],[0x1c0f+0xdc5+-0x5a4*0x7,_0x2376e3[_0x212d44(0x14f)]],[0x25ab*-0x1+-0x160+0xdcd*0x3,'u8'],[0x1f0a+0x1532+-0x11*0x2ef,'u8'],[-0x268b+0x5*0x765+-0x4*-0xfc,'u8'],[0x2539+0x6*0x1c3+-0x2d6b,_0x212d44(0x273)],[-0x1*-0x139+0x21ef+0xc*-0x2bb,'u8'],[-0x95*0xc+0xcb9+0x8*-0x6b,'u8'],[0x1*0x11b+0x1cc6+0x21d*-0xd,'f32'],[-0x21d8+-0x1713+0x3b57,_0x212d44(0x273)],[-0x172b+0x1*0x2333+-0x266*0x4,_0x212d44(0x273)],[0xc7a+0x119*0x5+0x169*-0xb,_0x2376e3[_0x212d44(0x14f)]],[-0x1916+-0x8bd+-0x3*-0xc19,_0x212d44(0x273)],[0x3a9*-0x7+0x95b+0x12c0,'f32'],[-0x7*-0x2ab+0x240a+-0x3437,_0x2376e3[_0x212d44(0x14f)]],[-0x1*0x1533+0xd0a+-0x3*-0x38f,'v3'],[0x2593+0x15a0+-0x389f,'u8'],[-0x1092+0x669+0x1*0xcc1,'v3'],[0x19ef+-0x9*0x2fb+0x71*0x8,_0x212d44(0x273)],[0x1*0x6f2+0x25a9+-0x29ef,'v3'],[-0x1*-0x157b+0x20b9*-0x1+0x1*0xdf6,_0x2376e3['Iobzn']],[0x11*-0x1a4+-0x18ce+0x376e,_0x212d44(0x273)],[-0x2*0x11fb+-0x1b94+0x424a,'f32'],[-0xd30*-0x1+-0xf30+-0xa*-0x7a,'u8'],[0x759+-0x33b+-0x159,'u8'],[-0x1cce+0x25e0+0x73*-0xe,_0x212d44(0x273)],[0x1*0xb45+-0x8db*0x2+0x94d,'f32'],[0x118f*0x1+-0x4*0x61f+0x9d1,'v3'],[0xc*0x169+-0x1a29+0xc2d,'v3'],[-0x8*0x2d6+0x4d2*0x2+-0x8*-0x201,_0x2376e3['Iobzn']],[0x1939+0x3*0x2dd+-0x1ed0,_0x2376e3[_0x212d44(0x14f)]],[0x53+-0x1*0x44d+0xb3*0xa,_0x212d44(0x273)],[0x210*0x9+-0xb5*-0x34+-0x344c,'f32'],[0x47*-0x51+0xab*0x2f+-0x2f1*0x2,'v3'],[-0xbcb*0x1+-0x33e+0x1221,'u8'],[0x2360+-0x424+0x5a*-0x50,'v3'],[0x1205*0x2+-0x1190+-0xf52,_0x212d44(0x12c)],[0x19*0xa1+-0x2333+0x16a6,_0x2376e3['Iobzn']],[0xfdc*-0x2+0x9*-0x67+0x2687,'f32'],[0x13*0x6d+0x17e*-0x5+-0x1*-0x293,'f32'],[0x9a2+0x118f*-0x1+-0x1*-0xb29,_0x2376e3[_0x212d44(0x14f)]],[0x38b*0x7+0xb01+0xada*-0x3,'u8'],[0x213c+-0x2191+0x6*0x99,'u8'],[0x50*-0x37+-0x2c*0xdc+-0x16c*-0x29,'u8'],[0xdbc*-0x1+-0x2106+-0x1*-0x320f,'u8'],[-0x1811+0x12f9+-0xa*-0xd7,'u8'],[-0x5*-0x69b+-0x1207+-0x11*0xb0,_0x2376e3[_0x212d44(0x14f)]],[0x1*0x6f3+0x17d3+-0x1b72,_0x212d44(0x273)],[-0xa9e+-0x1d0c+0x3*0xe56,_0x212d44(0x273)],[0xaa5+-0x25aa+0x2c3*0xb,_0x2376e3[_0x212d44(0x14f)]],[0x33c+-0x1*-0xc9c+-0xc78,_0x212d44(0x273)],[-0x4*-0x31f+0x1c73*-0x1+0x135b*0x1,'u8'],[0x4*0x38f+-0x10f*0x1a+0x10b2,'f32'],[-0xad*-0x2b+-0x1fc+0xad*-0x23,_0x212d44(0x273)],[-0x2*-0xaa9+-0x1*0x203+0x1*-0xfdf,'u8'],[-0x380+0x6cd*-0x1+-0x4b*-0x2f,'v3'],[-0x23f9*-0x1+0x1*-0x18ff+-0x776,'v3'],[0x1*-0x4de+0xa35+-0x23*0xd,'v3'],[-0x443*0x5+0x8e4+-0x1007*-0x1,'f32'],[0x1d74+-0x2475+0x3*0x38b,_0x2376e3[_0x212d44(0x14f)]],[-0x536*0x3+-0x53*-0x47+-0x3bf*0x1,_0x2376e3['Iobzn']],[0x9*-0x355+0x1*-0x24eb+0x4690,'v3'],[-0x210b+0x137*-0x14+0x3d0b,'i32'],[0x1*-0xe43+0xf*-0x174+0x27c7,'u8'],[-0x329+-0x300*-0x8+0x1d*-0x97,_0x212d44(0x12c)],[0x1b3e+-0x1309+-0x475,_0x212d44(0x273)],[0x32e+-0x3bb*0xa+0x25e4,'f32'],[0x312+0x79c*0x1+-0x6e6,_0x2376e3['Iobzn']],[0x208e+0x189a+0x2ab*-0x14,'f32'],[-0x135+-0xbe+0x5c3,'v3'],[-0x2699+0x6b*0xd+-0xe*-0x2a5,'i32'],[-0x95*-0xb+-0x1fba+0x1d33,'u8'],[0x191*0xa+0x60*-0x1b+0x19*-0x11,'u8'],[-0x1*-0xc13+-0x183+-0x6ae,'u8'],[0x179c+0x55e+-0xd*0x1ee,_0x2376e3[_0x212d44(0x14f)]],[-0x24a0+-0x4*0x665+0x421c,'i32']],'HealthScript':[[0x803+0x1*-0x24dd+-0x25*-0xca,'u8'],[0xb98*0x1+-0x503+-0xb1*0x9,_0x212d44(0x12c)],[-0x1ff3*0x1+0x1cba*0x1+0x3b9,_0x2376e3['Iobzn']],[-0xf9*-0x8+0x812+-0xf56,'f32'],[0x2674+-0x2434*0x1+-0x2c*0xa,_0x212d44(0x273)],[-0x7*-0x16f+-0x27b+-0x702,_0x2376e3[_0x212d44(0x14f)]],[0x53a+0x2396+-0x4*0xa10,_0x212d44(0x273)],[0x5*-0x3b+-0x18ce+0x1a89*0x1,'f32'],[0x24a3+-0xb87+0x2*-0xc3e,_0x212d44(0x12c)],[-0x2375+0x45d*-0x8+0x4701,_0x212d44(0x12c)],[0x98f*-0x4+-0xc23+0x1*0x3307,'u8'],[-0x1ab+-0x1ea7+-0x20fb*-0x1,'u8'],[0x3*-0x453+-0xb27+0x18ca,'u8'],[0x1*0x1406+-0x1f53+0xbf8,'u8'],[-0x1*-0x71b+-0x22e0+0x7*0x413,_0x2376e3['wOeJM']],[0x196f+0x3f8+-0x1c93,'obfI'],[0x807+0x12*-0xb5+0x1*0x59b,_0x212d44(0x53f)],[0x6ea+-0x5f0+0x2,'obfI'],[-0x2427*-0x1+0xb5*-0x36+0x317,_0x2376e3['wOeJM']],[-0x1*-0x123b+-0x2161+0x104a,'obfB'],[-0x48d+0x11ad+-0x2*0x5f8,_0x212d44(0x2be)],[-0x7*0x40f+-0x1e70+0x3c21,_0x2376e3['Iobzn']],[0x1157*0x1+-0x169*0xe+0x3b3*0x1,_0x2376e3['Iobzn']],[-0x70+0x2121+-0x1f61,_0x212d44(0x273)],[0x21fd+0x1*0x20c5+0x1*-0x416e,_0x212d44(0x273)],[0x195a+0xc7*-0x5+-0x141b,_0x2376e3['Iobzn']],[0x15e7*-0x1+0x1c1e+-0x4d7*0x1,'v3'],[-0x26fb+0x1535+0x1336,_0x2376e3[_0x212d44(0x14f)]],[0x2294+0x8e9+-0x15b*0x1f,_0x2376e3[_0x212d44(0x14f)]],[0xb2+-0x1381*0x2+0xc4*0x34,'u8'],[-0x10*0x1aa+-0xf53+0x2b7f,'u8'],[-0x13b7*-0x1+-0x10*-0x240+-0x3627,_0x212d44(0x12c)]],'PlayerConfig':[],'WeaponManager':[[-0x20da+-0x1*0x25c5+0x46b7,_0x2376e3[_0x212d44(0x3bd)]],[-0xd20+0x1a66+0x5*-0x2a2,_0x212d44(0x12c)],[-0x2*-0x3fa+0xb55+0x663*-0x3,'u8'],[-0x1e5*-0xf+0x4b3+0xe*-0x25b,_0x212d44(0x12c)],[-0x1e*0x107+0x133a+0xbfc,_0x2376e3['aGOfh']],[0x7e+0x1126+-0x5b8*0x3,_0x212d44(0x273)],[0x1*0x96d+-0x3*0xad7+0x179c,_0x2376e3[_0x212d44(0x3bd)]],[0x23*-0x9d+0x1b81+-0x582,'u8'],[0x1a*0x11d+0xde4+-0x27d*0x11,'u8'],[0x1*0x4bd+-0x20a1+-0x10*-0x1c7,_0x212d44(0x12c)],[0x1*0x160d+-0x1e17+0x89a,_0x2376e3['Iobzn']],[0xdb4+0x1460+-0x217c*0x1,_0x212d44(0x273)],[0x4a*0x71+0x25cf+0x45cd*-0x1,_0x2376e3['ELapO']],[0x1083+0x2343+-0x330a,'u8'],[0x1851+-0x1d*0x103+0x3*0x1f6,_0x2376e3['wOeJM']],[0x2cf+-0x1abf*-0x1+-0x1c9e,_0x212d44(0x53f)],[0x53d+-0x1*0x21ad+0x1d74,_0x2376e3['Iobzn']],[-0x1750+-0xb5f+0x23b7*0x1,_0x2376e3[_0x212d44(0x14f)]],[0x18*-0x6d+-0x16*0x185+-0x2cb2*-0x1,_0x2376e3['Iobzn']],[0x2*-0x12ac+-0x2*0xcd7+0x1d*0x236,_0x212d44(0x273)],[-0x1dc4+-0x1bd1+0x3ab5,_0x212d44(0x273)],[0x12a8+0x174c+-0x28cc,'u8'],[0x1c07+-0x231a*-0x1+-0x3a5*0x11,_0x2376e3['wOeJM']],[-0x214b+-0x207b+0x4306,'obfI'],[0x6*0x3a+0x1c92+-0x1c9a,_0x212d44(0x53f)],[-0xc05*0x2+-0x1280+0x2bf2,_0x2376e3[_0x212d44(0x36b)]],[-0x1d30+-0xd*-0x1f6+-0x1*-0x526,'obfB'],[-0x682+0x11d+0x6e5,'obfB'],[-0xc9a+-0xbed*0x2+-0x1*-0x2600,'obfB'],[0x21e8+-0x1721+-0x923*0x1,'obfB'],[0x1*0x19f8+-0x1e05*0x1+0x71*0xd,_0x212d44(0x53f)],[0x1647+-0x1*-0xe1e+0x2299*-0x1,_0x2376e3['ELapO']],[0x13d2+0x10b7+-0x22b9,'u8'],[0x83*0x1f+-0x1bf9+0xdf0,_0x212d44(0x12c)],[-0xbb6+0x224e+-0x14c0,_0x212d44(0x12c)],[-0x8e5*-0x3+-0x17f9*0x1+-0xb6,'i32'],[-0x2323+-0xe*0x2a2+0x4a13,'u8'],[-0x4b0*0x3+-0x1954*0x1+0x4*0xa60,'u8'],[0x21d8+0x1*0x27+-0xff1*0x2,'u8'],[0x16a*-0x14+0x24fa+0x34a*-0x2,'u8'],[0x13bb*-0x1+0x983*-0x3+-0x1*-0x3263,'u8'],[-0x15a9+0xcf2+0xb07*0x1,'i32'],[-0xd48*-0x1+0x3*-0x977+0x1175,'u8']],'GG_GameManager':[[-0x287*0x7+0x1*0xd51+0x484,'u8'],[0xd20+-0x10c1*-0x2+-0x2e76,'f32'],[0x1*-0xabd+-0x822*0x2+0x219*0xd,'u8'],[-0xfa7+0x9*0x7a+0xba2,'u8'],[0x1f*-0xe9+0x1a5*0xf+0x46*0xe,_0x212d44(0x273)],[-0x48+-0x1b43+0x1bd7,_0x212d44(0x273)],[-0x92b+-0xe6*0x12+-0x255*-0xb,_0x212d44(0x12c)],[-0x1e*-0x112+-0x1c58+-0x370,_0x212d44(0x12c)],[0x1d*0x89+0x52b+0x6*-0x364,'u8'],[-0xe7*0x28+0x2*0x56f+0x19ae,'u8'],[-0x68*-0x4c+-0x246+-0x2*0xe11,_0x2376e3[_0x212d44(0x14f)]],[0x3e8+0x6cf+-0xa3b,_0x212d44(0x273)],[-0x4*-0x3f6+0x1849*-0x1+-0x5*-0x1cd,'i32'],[-0x36f*-0x3+0x8ba+-0x1273,'u8'],[-0xb8e*-0x2+0x55d*0x1+0x1bc5*-0x1,_0x212d44(0x12c)],[-0x24b*-0x1+0x117*0xf+0xbf*-0x18,_0x212d44(0x12c)],[0x87*0x43+0x2*-0xe6f+-0x85*0xb,'i32'],[0x4*0x2e+-0x26a*-0x2+-0x4a4,'obfI'],[0x162+0x13b3*-0x1+0x134d,'obfI'],[-0x1*-0x11c7+-0x1*-0x263b+0x1a*-0x21d,_0x2376e3[_0x212d44(0x22e)]],[0x6b*0x11+0x16ce+-0x41b*0x7,'u8'],[0x9dd+0x769+0x8e*-0x1d,'i32'],[-0x201d+0x13d5+0xdac,'u8'],[0x2103+0x139a+-0xb*0x4a7,_0x2376e3['Iobzn']],[0x15*0x9+-0x29*0xf1+0x275c,'u8'],[0x23c4+-0x1a74+-0x7c8,'u8'],[-0x22fb+0x25*0x17+0x214c,'u8'],[-0x2684+0xabd*0x1+0x1d6f,_0x212d44(0x12c)],[0x1*0x9ec+0x183f+-0x207f,_0x2376e3['Iobzn']],[0xfdd+-0xdb*0x11+0x5e,'u8'],[0x126b+-0x2161+0x10a7,'u8'],[0xe*0x5f+-0xf89+-0x7*-0x1b9,_0x2376e3[_0x212d44(0x3bd)]],[0x2dd+-0x285+0x164,_0x212d44(0x12c)],[0x192b*0x1+-0x109e+-0x6cd*0x1,'f32'],[0x1245+0x18df+-0xa58*0x4,'i32'],[-0x191b*0x1+0x1a65*0x1+0x7e*0x1,_0x2376e3['Iobzn']],[-0x11*-0x13d+0x1*0x2357+0x4*-0xda6,_0x212d44(0x12c)],[-0x73d+-0x70*-0x9+0x51d*0x1,'i32']],'EnemyBot':[[-0x1e73+-0xf*0x24a+0x40e9,_0x2376e3['Iobzn']],[0x503*0x2+-0x4*0x232+-0x11a,'v3'],[0xa*-0x20b+0x43a+0x1064,'u8'],[0x600+0x1b35+-0x2101,_0x2376e3[_0x212d44(0x14f)]],[0x9*0x10e+-0x257d+0x1c37,_0x212d44(0x273)],[0xf21*-0x2+0x423*0x1+0x8c9*0x3,'u8'],[0x7*0x1b4+-0xafa+0xae*-0x1,_0x212d44(0x273)],[0x937+-0x1f8a+-0x789*-0x3,_0x2376e3[_0x212d44(0x14f)]],[-0x897+-0x404*-0x4+-0x72d,'u8'],[0x1c0d*0x1+0x1b75+-0x3735,'u8']]},_0x1b794d={};function _0x33578a(_0x260bc1,_0xdb6b56,_0x47a5bc){var _0x12af07=_0x212d44,_0x28ecc3={'jTjEr':function(_0x352877,_0x2b97d4){return _0x2376e3['cOChG'](_0x352877,_0x2b97d4);},'kQoyo':function(_0x1e7773,_0x54feec){return _0x1e7773+_0x54feec;},'AgaPZ':'armed'+'\x20·\x20','gBOif':_0x12af07(0x1f9)+'8a'};return function(_0x10a004){var _0xc75599=_0x12af07,_0x14800f={'deofW':function(_0x358cb3,_0x525df8){return _0x358cb3+_0x525df8;},'mWAdU':function(_0x53c418,_0x136d0e){var _0x254c17=_0x9852;return _0x2376e3[_0x254c17(0x48f)](_0x53c418,_0x136d0e);},'awpWf':_0xc75599(0x4d3)+_0xc75599(0x124)+_0xc75599(0x559)+'7,.35'+')'};try{var _0xb2786e=_0x10a004&&_0x10a004[_0xc75599(0x25b)]?_0x10a004[_0xc75599(0x25b)]():-0x1d69*-0x1+0x1550+0xa25*-0x5;if(!_0xb2786e)return;if(_0x47a5bc){if(_0x2376e3[_0xc75599(0x34d)]!=='deqor'){if(!_0x1b794d[_0xb2786e])_0x1b794d[_0xb2786e]={'ptr':_0xb2786e,'firstSeen':Date[_0xc75599(0x353)](),'hits':0x0};_0x1b794d[_0xb2786e]['hits']++;}else _0x1613c1=_0x28ecc3[_0xc75599(0xee)]('metad'+_0xc75599(0x10b)+_0xc75599(0x5a7)+'·\x20'+_0x4ae8d9,'s'),_0x5a1d3b='#ffd4'+'8a';}else{var _0x162a70=_0x3fa30b[_0x260bc1];if(!_0x162a70||_0x162a70['ptr']!==_0xb2786e){_0x3fa30b[_0x260bc1]={'ptr':_0xb2786e,'firstSeen':Date[_0xc75599(0x353)](),'hits':0x0,'replaced':!!_0x162a70};try{var _0x3b00ef=_0x4ecd8b[_0xc75599(0x60c)+'r'](function(_0x1d8648){return _0x1d8648['type']===_0x260bc1;})[0x14e8+0x1a64+0xfc4*-0x3];_0x20c34f={'type':_0x260bc1,'atMs':Date[_0xc75599(0x353)]()-_0x5c73ce,'originalFunc':!!(_0x3b00ef&&_0x3b00ef['hook']&&_0x2376e3[_0xc75599(0x21f)](typeof _0x3b00ef['hook']['origi'+_0xc75599(0x3eb)+'nc'],_0xc75599(0x4b5)+_0xc75599(0x362))),'resolveGameAtFire':!!_0x464311(),'gameSourceAtFire':_0x40b65f['sourc'+'e']};}catch(_0xf31ad8){}}}if(_0x260bc1===_0x2376e3['ZnZSh']&&_0xced96e['on']){if(_0xc75599(0x199)!==_0xc75599(0x199)){_0x1ffdfe()[_0xc75599(0x10f)]({'host':_0x2858d4[_0xc75599(0x3fd)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}else try{_0x2376e3[_0xc75599(0x4a3)]!=='Axqvy'?_0x29f156(_0xb2786e):(_0x44ac35['xyz']=_0x9b8885,_0x1c8fc4['v']=_0x3d0c7d[-0x1b8d+0xf76+0x5*0x26b]);}catch(_0x19fb03){}}if(!_0xdb6b56){if('axAec'==='axAec'){var _0x3b00ef=_0x4ecd8b[_0xc75599(0x60c)+'r'](function(_0x2bb7a8){var _0x1ff426=_0xc75599;return _0x2bb7a8[_0x1ff426(0x3d5)]===_0x260bc1;})[0x2283+-0x158c+0x1*-0xcf7];if(_0x3b00ef&&_0x3b00ef[_0xc75599(0x287)])try{if(_0xc75599(0x105)===_0xc75599(0x105))_0x3b00ef[_0xc75599(0x287)][_0xc75599(0x488)+'ed']=![];else{_0x11ee34[_0xc75599(0x13a)+_0xc75599(0x153)+'t']=_0x14800f['deofW']('v',_0x5324da[_0xc75599(0x44c)+'on']||'?');var _0x1c0ecf=_0x40af3f,_0x46d72e=_0x32dd44['versi'+'on']||'';_0x1a1ef1[_0xc75599(0x59e)]['color']=_0x14800f[_0xc75599(0x38b)](_0x46d72e,_0x1c0ecf)?_0x2b2a73:'#ff6e'+'74',_0x16fd0d['style'][_0xc75599(0x483)+_0xc75599(0x5e6)+'r']=_0x46d72e===_0x1c0ecf?_0x14800f['awpWf']:'#ff6e'+'74';}}catch(_0x2f268f){}}else _0x30efb6=_0x28ecc3[_0xc75599(0x1c6)]((_0x8c919f[_0xc75599(0x59a)]&&_0x28d5b6['arm']['ok']?_0x28ecc3['AgaPZ']:_0xc75599(0x43d)+'g\x20·\x20')+_0x417f71,'s'),_0x3cf6d2=_0x28ecc3[_0xc75599(0x37f)];}}catch(_0x3757cc){}};}function _0x35955c(){var _0x3b56d0=_0x212d44,_0xaa39ac={'gBKHy':_0x3b56d0(0x5b0)+_0x3b56d0(0x3e1)+'d\x20·\x20'};if('cFLeY'===_0x3b56d0(0x1c0))_0x17f82f['error']=_0x4246d3(_0x93a32c&&_0x1fff5d['messa'+'ge']||_0x56daad);else{if(_0x4ecd8b[_0x3b56d0(0x2e1)+'h'])return!![];if(!window[_0x3b56d0(0x412)+'WebMo'+'dkit']||!window[_0x3b56d0(0x412)+'WebMo'+_0x3b56d0(0x4cd)]['Runti'+'me'])return![];var _0x4669c0=window[_0x3b56d0(0x412)+_0x3b56d0(0x49b)+_0x3b56d0(0x4cd)][_0x3b56d0(0x106)+'me'];if(!_0x4669c0[_0x3b56d0(0x316)+'ns']||!_0x4669c0['plugi'+'ns'][_0x3b56d0(0x2e1)+'h'])return![];_0x2756f6=window['Unity'+'WebMo'+_0x3b56d0(0x4cd)]['Value'+_0x3b56d0(0x183)+'er'],_0x4a22eb=_0x4a22eb||_0x4669c0[_0x3b56d0(0x316)+'ns'][_0x4669c0[_0x3b56d0(0x316)+'ns']['lengt'+'h']-(0x10ec+0x2438+0x1*-0x3523)];if(!_0x4a22eb||typeof _0x4a22eb[_0x3b56d0(0x503)+'refix']!==_0x3b56d0(0x4b5)+_0x3b56d0(0x362))return![];for(var _0x495611=-0x261b+0x13d*-0x4+-0x1*-0x2b0f;_0x495611<_0x335939[_0x3b56d0(0x2e1)+'h'];_0x495611++){var _0x45d69a=_0x335939[_0x495611];try{var _0x19ff48=_0x4a22eb['hookP'+'refix']({'typeName':_0x45d69a['type'],'methodName':_0x3b56d0(0x33e)+'e','params':[_0x2376e3['ELapO'],_0x2376e3[_0x3b56d0(0x3bd)]],'returnType':undefined},_0x33578a(_0x45d69a[_0x3b56d0(0x3d5)],_0x45d69a['keep'],_0x45d69a[_0x3b56d0(0x1db)]));_0x4ecd8b[_0x3b56d0(0x5ac)]({'type':_0x45d69a[_0x3b56d0(0x3d5)],'hook':_0x19ff48,'keep':_0x45d69a[_0x3b56d0(0x39d)]});}catch(_0x51a445){_0x2376e3['ErBOf']==='aGCda'?_0xa5983a[_0x3b56d0(0x5ac)](_0x2376e3['YMNqc'](_0x45d69a['type']+':\x20',String(_0x51a445&&_0x51a445[_0x3b56d0(0x266)+'ge']||_0x51a445)[_0x3b56d0(0x320)](-0x19ba+-0x1f0f*0x1+-0x38c9*-0x1,0x124d*0x2+0x2*0x37e+0x729*-0x6))):(_0x2811a5=_0xaa39ac[_0x3b56d0(0x114)]+_0x5f4e09+'s',_0x5a6ec2=_0x3b56d0(0x1f9)+'8a');}}return _0x4ecd8b[_0x3b56d0(0x2e1)+'h']>-0x76f*-0x3+0x4*-0x4e5+-0x2b9;}}function _0xe9286b(){var _0x1b7419=_0x212d44;if(_0x2376e3['AxcCP'](_0x2376e3[_0x1b7419(0x302)],_0x2376e3[_0x1b7419(0x54c)])){var _0x280d35=-0x1ba4+-0x22*0x107+0x3e92;for(var _0x10ffb4=0x2*-0x1189+-0x2f*0x65+-0x4b*-0xb7;_0x2376e3[_0x1b7419(0x3e9)](_0x10ffb4,_0x4ecd8b[_0x1b7419(0x2e1)+'h']);_0x10ffb4++){if(_0x2376e3['cLFAs']!=='qmRSl'){var _0xb160fd=_0x37580c[_0x1b7419(0x320)](0x386*-0x5+-0x1877+0x2a15,-0xbc9+-0x22d*0x7+0x1c30);if(_0x225606[_0x1b7419(0x308)+'Of'](_0xb160fd)===-(0x174c+-0x1ed3+-0x1e2*-0x4)&&_0x622216[_0x1b7419(0x2e1)+'h']<0x8*0x28+-0x2f5*0x7+0x1*0x13af)_0x45130d[_0x1b7419(0x5ac)](_0xb160fd);}else{if(_0x4ecd8b[_0x10ffb4]['hook']&&_0x2376e3['OsZZU'](_0x4ecd8b[_0x10ffb4][_0x1b7419(0x287)][_0x1b7419(0x158)+_0x1b7419(0x408)],undefined))_0x280d35++;}}return _0x280d35;}else{var _0x20e43f=-0x141*-0x10+0x4b6+-0x18c6;for(var _0x24f64a=0x257a+0xfd6*0x2+-0x4526;_0x24f64a<_0x1b63b2[_0x1b7419(0x2e1)+'h'];_0x24f64a++){if(_0x25d521[_0x24f64a]['hook']&&_0x2376e3['OsZZU'](_0x3e4c29[_0x24f64a]['hook'][_0x1b7419(0x158)+'Index'],_0x3a07c5))_0x20e43f++;}return _0x20e43f;}}function _0x4a4df6(){var _0x39ef37=_0x212d44,_0x519a2c=-0x13e1*-0x1+0x1222+0x107*-0x25;for(var _0x250a7b=0x1*0x22af+-0x1449+-0x1*0xe66;_0x250a7b<_0x4ecd8b[_0x39ef37(0x2e1)+'h'];_0x250a7b++){if(_0x4ecd8b[_0x250a7b]['hook']&&_0x4ecd8b[_0x250a7b][_0x39ef37(0x287)][_0x39ef37(0x166)+'ed'])_0x519a2c++;}return _0x519a2c;}var _0x4bba7f=null,_0xaae5e4=[],_0x575202={},_0x20c34f=null;function _0x1cd6bb(_0x333503){var _0x4c4ee5=_0x212d44;try{if(!_0x2756f6||!_0x333503)return null;var _0x51ab7e=new _0x2756f6(_0x333503)[_0x4c4ee5(0x467)+_0x4c4ee5(0x337)+'me']();return _0x51ab7e===undefined?null:_0x51ab7e;}catch(_0x4e8bd0){return null;}}function _0x20a859(_0x4f5ed5,_0x209346,_0x5cc712){var _0x5dff35=_0x212d44,_0x42bc2e=_0x2376e3[_0x5dff35(0x346)]['split']('|'),_0x1e537f=0xe*0xd+0x315+0x3cb*-0x1;while(!![]){switch(_0x42bc2e[_0x1e537f++]){case'0':for(var _0x1c877b=0xdef+-0x1*0x1246+0x457;_0x2376e3['paCXi'](_0x1c877b,_0x5cc712);_0x1c877b++)_0x1787ec[_0x5dff35(0x5ac)](_0x90bf21[_0x5dff35(0x3a4)+'oat32'](_0x2376e3[_0x5dff35(0x57d)](_0x4f5ed5+_0x209346,_0x1c877b*(0x33c*0xc+-0x51*-0xe+-0x2*0x159d)),!![]));continue;case'1':var _0x1787ec=[];continue;case'2':_0x40b65f['ok']+=_0x5cc712;continue;case'3':if(_0x209346<0x22e2+0x4*0xac+-0x2592||_0x209346+_0x5cc712*(-0x1e1d+-0xe09+0x2c2a)>_0x90bf21[_0x5dff35(0x24e)+_0x5dff35(0x3d1)])return null;continue;case'4':return _0x1787ec;case'5':if(!_0x90bf21)return null;continue;case'6':var _0x90bf21=_0x44ec33();continue;}break;}}function _0x156bcb(){var _0x3d2188=_0x212d44,_0xc7ec74={'tYSBG':function(_0x357e11,_0x3dae4c){return _0x357e11(_0x3dae4c);},'Rqhpf':_0x2376e3[_0x3d2188(0x4f7)]},_0x25bc5e={'enemies':[],'camera':null,'playerList':null,'wasmTypes':null},_0x3105c7=Object[_0x3d2188(0x3d2)](_0x1b794d);for(var _0x3c9c1a=-0x1937+-0x10ba+0x29f1;_0x2376e3['nIigY'](_0x3c9c1a,_0x3105c7[_0x3d2188(0x2e1)+'h'])&&_0x3c9c1a<0xb*-0x1aa+-0x229b+-0x11ab*-0x3;_0x3c9c1a++){if(_0x2376e3[_0x3d2188(0x146)](_0x3d2188(0x4d8),_0x3d2188(0x5ed))){var _0x1ac559=_0x1b794d[_0x3105c7[_0x3c9c1a]],_0x146aff=_0x494704[_0x3d2188(0x1b5)+_0x3d2188(0x168)]||[],_0x5a8a63={'ptr':'0x'+_0x1ac559['ptr']['toStr'+'ing'](-0x1*0x20a1+0x1b93+0x51e),'hits':_0x1ac559[_0x3d2188(0x3ee)],'pos':null};for(var _0x2fa038=0x35*0x9a+0x6f2*0x4+-0x3baa;_0x2fa038<_0x146aff[_0x3d2188(0x2e1)+'h'];_0x2fa038++){if(_0x146aff[_0x2fa038][-0x1*0x2378+-0x1*-0x239+-0x7*-0x4c0]!=='v3')continue;_0x5a8a63[_0x3d2188(0x501)]=_0x2376e3['WshSx'](_0x20a859,_0x1ac559['ptr'],_0x146aff[_0x2fa038][-0x749+0x8c9*-0x3+0x21a4],-0x8b1*0x2+-0x1f39+0xe*0x379),_0x5a8a63[_0x3d2188(0x5aa)]='0x'+_0x146aff[_0x2fa038][0x9*0x2ad+0x11b9*-0x2+-0x1*-0xb5d][_0x3d2188(0x51e)+'ing'](-0x699+-0xb49+0x11f2);break;}_0x5a8a63[_0x3d2188(0x3fc)+'rs']=_0x146aff[_0x3d2188(0x60c)+'r'](function(_0x1eac76){var _0x42aa6d=_0x3d2188;return _0x2376e3[_0x42aa6d(0x61f)](_0x1eac76[0xc76+0x241f*-0x1+-0xd*-0x1d2],_0x42aa6d(0x273));})['map'](function(_0x275c56){return{'o':_0x275c56[-0x134d+0x355*0x2+0xca3],'v':_0x42d4f6(_0x1ac559['ptr']+_0x275c56[0xa*0xc5+0xd18*0x2+-0x10f1*0x2],'f32')};})[_0x3d2188(0x60c)+'r'](function(_0x3bc224){return _0x3bc224['v']!==undefined&&_0xc7ec74['tYSBG'](isFinite,_0x3bc224['v']);})['slice'](0x15ac+0xaa+-0x1656,-0xf1c+-0xe8a+0x1dac),_0x25bc5e[_0x3d2188(0x5ba)+'es']['push'](_0x5a8a63);}else{_0x2188be['sp']&&(_0x31572b['sp'][_0x3d2188(0x13a)+'onten'+'t']=_0x20e144['on']?_0xc7ec74[_0x3d2188(0x4ac)]:'Speed'+_0x3d2188(0x3f4),_0x2a3171['sp']['style']['backg'+_0x3d2188(0x56e)]=_0x3ca479['on']?_0xe6de3e:'trans'+_0x3d2188(0x35b)+'t',_0x5bdeb7['sp']['style'][_0x3d2188(0x159)]=_0x1431f8['on']?_0x3d2188(0x31a)+'1b':'#f7ee'+'f5');if(_0x5cc9ca['fx'])_0x40f12e['fx']['value']=_0x4efbf2(_0x312550[_0x3d2188(0x509)+'r']);if(_0x12e9ae['fv'])_0xb4994e['fv'][_0x3d2188(0x13a)+'onten'+'t']=_0x3b999b[_0x3d2188(0x509)+'r']['toFix'+'ed'](-0xdcf+-0xa57+0x80d*0x3)+'x';}}_0x25bc5e[_0x3d2188(0x368)+_0x3d2188(0x1c1)]=_0x3105c7[_0x3d2188(0x2e1)+'h'];var _0x176550=_0x3fa30b[_0x3d2188(0x4f0)+'meMan'+_0x3d2188(0x172)];if(_0x176550&&_0x176550['ptr']){var _0x3848a0=_0x2376e3[_0x3d2188(0x2a5)](_0x42d4f6,_0x176550[_0x3d2188(0x4fd)]+(-0x1d*-0x157+0x2e3+-0x1*0x29aa),'u32'),_0x28a38b=_0x42d4f6(_0x2376e3[_0x3d2188(0xf4)](_0x176550[_0x3d2188(0x4fd)],0xb68*0x2+0xd*0x17f+-0x29e7),'u32');_0x25bc5e[_0x3d2188(0x462)+'a']=_0x3848a0?_0x2376e3[_0x3d2188(0x181)]('0x',(_0x3848a0>>>0x201+0x189c+-0x1a9d)[_0x3d2188(0x51e)+_0x3d2188(0x3c7)](-0xd93+0xc75*0x2+-0xb47)):null,_0x25bc5e[_0x3d2188(0x154)+_0x3d2188(0x3bf)]=_0x28a38b?'0x'+(_0x28a38b>>>-0x795*0x1+-0xf14+0x16a9)[_0x3d2188(0x51e)+_0x3d2188(0x3c7)](0xa*-0x1ac+-0xb31*0x3+0x325b):null;}else _0x25bc5e[_0x3d2188(0x294)]=_0x3d2188(0x1b5)+_0x3d2188(0x25a)+_0x3d2188(0x310)+_0x3d2188(0x173)+'Manag'+'er\x20Up'+_0x3d2188(0x576)+')\x20nev'+_0x3d2188(0x1b2)+_0x3d2188(0x621)+_0x3d2188(0x472)+'nemie'+_0x3d2188(0x5d4)+_0x3d2188(0x4f6)+('GG_Ga'+_0x3d2188(0x19a)+'ager,'+_0x3d2188(0x5cd)+'h\x20is\x20'+_0x3d2188(0x282)+_0x3d2188(0x3a6)+'by\x20lo'+_0x3d2188(0x598)+'ike.\x20'+'Run\x20t'+'he\x20re'+'con\x20I'+'NSIDE'+_0x3d2188(0x33f)+'ve\x20ma'+'tch.');try{var _0x20b35c=(_0x3d2188(0x5fa)+_0x3d2188(0x258))[_0x3d2188(0x541)]('|'),_0x437882=0x66b*0x2+-0x12c5+0x5ef;while(!![]){switch(_0x20b35c[_0x437882++]){case'0':_0x25bc5e[_0x3d2188(0x3d4)+'ypes']=_0x269b7c;continue;case'1':for(var _0x1a6bd5=0x19*-0xfb+0xbb*0x3+0x1652;_0x2376e3[_0x3d2188(0x20f)](_0x1a6bd5,_0x48211f[_0x3d2188(0x2e1)+'h'])&&_0x1a6bd5<0x35a+-0xed5+0x1b1b;_0x1a6bd5++){var _0x514eb3=_0x2376e3['muryq'](_0x48211f[_0x1a6bd5]['param'+'s'][_0x3d2188(0x3ff)](','),_0x3d2188(0x570))+(_0x48211f[_0x1a6bd5]['retur'+_0x3d2188(0x2d2)]||'void');_0x269b7c[_0x514eb3]=_0x2376e3[_0x3d2188(0x37d)](_0x269b7c[_0x514eb3]||0x1a3b+-0x65*-0x29+0xb8*-0x3b,-0x5d*-0x43+-0x209*0xd+0x21f);}continue;case'2':var _0x48211f=_0x52d29c&&_0x52d29c[_0x3d2188(0x2bf)+'nalWa'+_0x3d2188(0x508)+'es']||[];continue;case'3':var _0x52d29c=window[_0x3d2188(0x412)+_0x3d2188(0x49b)+_0x3d2188(0x4cd)]&&window['Unity'+_0x3d2188(0x49b)+_0x3d2188(0x4cd)]['Runti'+'me'];continue;case'4':var _0x269b7c={};continue;}break;}}catch(_0x34205d){}return _0x25bc5e;}function _0x3ad1c1(){var _0x44b52a=_0x212d44;if('lTtZq'==='suNMj'){if(_0x13e7b3[_0x109735]['conte'+'ntWin'+_0x44b52a(0x427)])_0x29fb46[_0x92f4ad][_0x44b52a(0x1eb)+'ntWin'+'dow']['postM'+_0x44b52a(0x1f1)+'e'](_0x5d046c,'*');}else{var _0x1880b3={};_0x40b65f['ok']=0x5*0x67+0x1822+-0x1a25,_0x40b65f['faile'+'d']=0x23a4+0x1be*-0xb+0x4a*-0x39,_0x40b65f[_0x44b52a(0x238)+_0x44b52a(0x4ca)]=null;var _0xf88e8e=Object['keys'](_0x494704);for(var _0x1a4edf=0x70+0x1a93*-0x1+0x1a23;_0x1a4edf<_0xf88e8e[_0x44b52a(0x2e1)+'h'];_0x1a4edf++){var _0xe8a00=_0xf88e8e[_0x1a4edf],_0x3f9abc=_0x3fa30b[_0xe8a00];if(!_0x3f9abc||!_0x3f9abc['ptr'])continue;var _0xf2003=_0x494704[_0xe8a00]||[],_0x832988=[];for(var _0x38570d=0x26b3+-0x5*-0x670+-0x46e3;_0x38570d<_0xf2003['lengt'+'h'];_0x38570d++){if(_0x2376e3[_0x44b52a(0x2da)]!=='NMhrE'){var _0x50b738=_0x2d5a68['on'];_0x33587d['on']=!!_0x4e2eb9;_0x3c4c8a['on']&&!_0x50b738&&(_0x527c66===_0x5a370d||_0x52a613===null||_0x2376e3[_0x44b52a(0x5d0)](_0x563ce5,_0x14389d)===-0x1447+-0x1bba+0x3002)&&(_0x1dbd0a=_0xca06c4);_0x261d69[_0x44b52a(0x509)+'r']=_0x1f5ec3[_0x44b52a(0x147)](_0x4fbc3d['max'],_0x384829['max'](_0x54d5d6[_0x44b52a(0x147)],_0x50befe(_0x48b0c4)||0x959*0x1+0xc6*0x8+-0x8*0x1f1));if(!_0x588560['on'])_0x3ea016={};var _0x2caa26=_0x2376e3['tfuNN'](_0x21aa8d);if(_0x2caa26){_0x2caa26['sp']&&(_0x2caa26['sp'][_0x44b52a(0x13a)+_0x44b52a(0x153)+'t']=_0x565d1f['on']?_0x44b52a(0x4b3)+_0x44b52a(0x380):_0x44b52a(0x4b3)+_0x44b52a(0x3f4),_0x2caa26['sp'][_0x44b52a(0x59e)][_0x44b52a(0x56c)+_0x44b52a(0x56e)]=_0x5cdf29['on']?_0x24967c:_0x2376e3['kFurr'],_0x2caa26['sp'][_0x44b52a(0x59e)]['color']=_0x486210['on']?_0x44b52a(0x31a)+'1b':_0x2376e3[_0x44b52a(0x4b0)]);if(_0x2caa26['fx'])_0x2caa26['fx']['value']=_0x10d0f2(_0x1220b9['facto'+'r']);if(_0x2caa26['fv'])_0x2caa26['fv']['textC'+'onten'+'t']=_0x3c29d3['facto'+'r']['toFix'+'ed'](-0x6a0+-0x101*-0x17+-0x83b*0x2)+'x';}}else{var _0x4d6343=_0xf2003[_0x38570d][-0xb*0x217+0x1ed3+-0x7d6],_0x5a15cc=_0xf2003[_0x38570d][0x3*0x387+-0x468+0x316*-0x2];if(_0x5a15cc['index'+'Of']('obf')===0x2*0xf94+-0x1389*0x1+-0xb9f){if(_0x44b52a(0xe7)!==_0x2376e3[_0x44b52a(0x108)])return _0x4aed2c['faile'+'d']++,_0x31b1c0['lastE'+_0x44b52a(0x4ca)]=_0x1e29a2[_0x44b52a(0x238)+_0x44b52a(0x4ca)]||_0x2376e3['CCoNL'](_0x2376e3[_0x44b52a(0x2b2)]('addre'+_0x44b52a(0x26d),_0x5d4de3['toStr'+_0x44b52a(0x3c7)](0xbaa+-0x25*0xc3+0x1095))+(_0x44b52a(0x46f)+'\x20heap'+_0x44b52a(0x20b)+'0x'),_0x2053db[_0x44b52a(0x24e)+'ength']['toStr'+'ing'](-0x688+0x1e82+-0x17ea)),_0x5ce4d3;else{var _0x3c214f=_0x2376e3['WshSx'](_0x9c23e2,_0x3f9abc[_0x44b52a(0x4fd)],_0x4d6343,_0x5a15cc);if(!_0x3c214f)continue;_0x3c214f['o']=_0x4d6343,_0x3c214f['k']=_0x5a15cc,_0x832988['push'](_0x3c214f);}}else{var _0x3e931f=_0x2376e3[_0x44b52a(0x5da)](_0x42d4f6,_0x2376e3[_0x44b52a(0x231)](_0x3f9abc['ptr'],_0x4d6343),_0x5a15cc);if(_0x2376e3[_0x44b52a(0x252)](_0x3e931f,undefined))continue;var _0x8551d7={'o':_0x4d6343,'k':_0x5a15cc,'v':_0x3e931f};if(_0x5a15cc==='v2'||_0x2376e3['cOzWf'](_0x5a15cc,'v3')||_0x5a15cc==='v4'){var _0x44a4b3=_0x5a15cc==='v2'?-0xaa8+-0x3f1+0x1*0xe9b:_0x5a15cc==='v3'?-0x3*-0xcc9+0x65f*-0x6+-0x6*0x5:0x33+0x377+-0x3a6,_0x9d0d=_0x20a859(_0x3f9abc[_0x44b52a(0x4fd)],_0x4d6343,_0x44a4b3);_0x9d0d&&('Qdcaf'===_0x2376e3['JRNus']?(_0x8551d7[_0x44b52a(0x553)]=_0x9d0d,_0x8551d7['v']=_0x9d0d[-0x2*0xc9+-0x1f66+-0x34c*-0xa]):_0x240d1c[_0x44b52a(0x13a)+_0x44b52a(0x153)+'t']=_0x39da8a(_0x538a2e[_0x44b52a(0x53c)]['facto'+'r'])[_0x44b52a(0x213)+'ed'](0x1714+-0x2df+0x3*-0x6bc)+'x');}_0x832988[_0x44b52a(0x5ac)](_0x8551d7);}}}if(_0x832988[_0x44b52a(0x2e1)+'h']){var _0x5ee399=_0x2376e3[_0x44b52a(0x547)](_0x13dc62,_0x832988);_0x1880b3[_0xe8a00]=_0x5ee399[_0x44b52a(0x4a4)],_0x575202[_0xe8a00]={'key':_0x5ee399[_0x44b52a(0x18c)],'sane':_0x5ee399[_0x44b52a(0x270)],'checked':_0x5ee399['check'+'ed'],'keyConsistent':_0x5ee399[_0x44b52a(0x331)+'nsist'+_0x44b52a(0x1e0)],'keySource':_0x5ee399[_0x44b52a(0x2e2)+_0x44b52a(0x386)]};}}return _0x1880b3;}}function _0x13dc62(_0xd396b4){var _0x4b5b70=_0x212d44,_0x4c8562={'DtTLo':function(_0x306430,_0x4133fd){return _0x306430+_0x4133fd;},'PYYvC':_0x2376e3[_0x4b5b70(0x1ae)],'GTGjL':_0x4b5b70(0x53e)+_0x4b5b70(0x5bd)+_0x4b5b70(0x5ab)+'ved=','SARYz':_0x4b5b70(0x1d6)+_0x4b5b70(0x3dd),'JvfOG':function(_0x3849ed,_0x3fa3a4){return _0x3849ed+_0x3fa3a4;}};if(_0x4b5b70(0x54e)===_0x2376e3['bkmHN']){var _0x181272='';_0x484e38[_0x4b5b70(0x31d)+'irePr'+'oof']&&(_0x181272=_0x4c8562['DtTLo'](_0x4c8562['DtTLo'](_0x4c8562['DtTLo']('\x20A\x20ho'+'ok\x20fi'+'red\x20a'+'t\x20',_0x3fa427[_0x4b5b70(0x31d)+'irePr'+'oof'][_0x4b5b70(0x499)]),_0x4c8562[_0x4b5b70(0x618)])+_0x37fbae[_0x4b5b70(0x31d)+'irePr'+_0x4b5b70(0x211)][_0x4b5b70(0x324)+_0x4b5b70(0x3eb)+'nc'],_0x4c8562[_0x4b5b70(0x169)])+_0x43a85e[_0x4b5b70(0x31d)+_0x4b5b70(0x604)+_0x4b5b70(0x211)][_0x4b5b70(0x5ab)+'veGam'+_0x4b5b70(0x176)+'re']+_0x4c8562['SARYz']+(_0x5a3d80['hookF'+'irePr'+_0x4b5b70(0x211)]['gameS'+_0x4b5b70(0x529)+'AtFir'+'e']||_0x4b5b70(0x3e7))+(_0x4b5b70(0x459)+'\x20the\x20'+_0x4b5b70(0x15c)+_0x4b5b70(0x150)+'exist'+'ed\x20th'+_0x4b5b70(0x157)+_0x4b5b70(0x44e)+_0x4b5b70(0x2ff)+_0x4b5b70(0x370)+'ble\x20n'+_0x4b5b70(0x1e9))),_0x55181a['warni'+_0x4b5b70(0x2a2)]['push'](_0x4c8562['JvfOG']('Unity'+'\x20inst'+_0x4b5b70(0x560)+_0x4b5b70(0x2ff)+_0x4b5b70(0x52d)+_0x4b5b70(0x448)+_0x4b5b70(0x123)+'urce:'+'\x20'+(_0x4e1d39[_0x4b5b70(0x522)+'ls'][_0x4b5b70(0xe4)+_0x4b5b70(0x529)]||'none')+_0x4b5b70(0x52e),_0x4b5b70(0x624)+_0x4b5b70(0x1cb)+'\x20stay'+_0x4b5b70(0xf1)+_0x4b5b70(0x594)+_0x4b5b70(0x5b5)+'a\x20gam'+'e\x20obj'+_0x4b5b70(0x405)+_0x4b5b70(0x379)+'odule'+_0x4b5b70(0x556)+'U8\x20is'+_0x4b5b70(0x226)+_0x4b5b70(0x371)+'.')+_0x181272);}else{var _0x32e0d0=0x5*0x9+0x481*-0x3+0xd56,_0x39f378=-0x52f+-0x25a7+-0x1*-0x2ad6,_0x2d4db8=null;for(var _0x4fb4fd=0x169d*-0x1+0x4*-0x219+0x1f01;_0x4fb4fd<_0xd396b4[_0x4b5b70(0x2e1)+'h'];_0x4fb4fd++){var _0x2a86c6=_0xd396b4[_0x4fb4fd];if(_0x2a86c6['k']['index'+'Of'](_0x2376e3['istaP'])!==-0x1f*-0x8a+0x2a5*-0x4+-0x622)continue;_0x2a86c6['v']=_0x2376e3[_0x4b5b70(0x25f)](_0x54a665,_0x2a86c6['k'],_0x2a86c6[_0x4b5b70(0x49d)+'n'],_0x2a86c6['keyAt'+'Offse'+'t0']),_0x2a86c6['keyUs'+'ed']=_0x2a86c6[_0x4b5b70(0x360)+_0x4b5b70(0x251)+'t0'],_0x2a86c6[_0x4b5b70(0x5bc)]=_0x2376e3[_0x4b5b70(0x5c5)](_0x2376e3[_0x4b5b70(0x26c)]('hid='+_0x2a86c6[_0x4b5b70(0x49d)+'n']+_0x2376e3[_0x4b5b70(0x4cf)],_0x2a86c6[_0x4b5b70(0x589)])+(_0x2a86c6[_0x4b5b70(0x257)]?_0x4b5b70(0x3a2)+'VE':'')+_0x2376e3[_0x4b5b70(0x544)],_0x2a86c6[_0x4b5b70(0x360)+'Offse'+'t0'])+_0x2376e3[_0x4b5b70(0x131)]+_0x2a86c6['hex'];if(_0x2376e3['kPMyK'](_0x2d4db8,null))_0x2d4db8=_0x2a86c6[_0x4b5b70(0x360)+_0x4b5b70(0x251)+'t0'];_0x39f378++,_0x346296(_0x2a86c6)?(_0x32e0d0++,_0x2a86c6[_0x4b5b70(0x270)]=!![]):_0x2a86c6['sane']=![],delete _0x2a86c6[_0x4b5b70(0x2d1)];}return{'rows':_0xd396b4,'key':_0x2d4db8,'sane':_0x32e0d0,'checked':_0x39f378,'keyConsistent':_0x3a8906(_0xd396b4),'keySource':_0x2376e3['SXDKl']};}}function _0x3a8906(_0x50398c){var _0x52c86c=_0x212d44,_0x413e21={};for(var _0xd5aa57=0x1abf+-0xe*0xb0+-0x111f;_0xd5aa57<_0x50398c[_0x52c86c(0x2e1)+'h'];_0xd5aa57++){var _0x19e6f3=_0x50398c[_0xd5aa57];if(_0x19e6f3['k']['index'+'Of'](_0x52c86c(0x518))!==0xe3*0x16+0x1dfe+-0x3180)continue;if(_0x413e21[_0x19e6f3['k']]===undefined)_0x413e21[_0x19e6f3['k']]=_0x19e6f3[_0x52c86c(0x142)+'ed'];else{if(_0x413e21[_0x19e6f3['k']]!==_0x19e6f3[_0x52c86c(0x142)+'ed'])return![];}}return!![];}function _0x346296(_0x284b69){var _0x5dc3b9=_0x212d44,_0x2b569e=_0x284b69['v'];if(_0x2376e3[_0x5dc3b9(0x40b)](typeof _0x2b569e,'numbe'+'r')||!_0x2376e3[_0x5dc3b9(0x2a0)](isFinite,_0x2b569e))return![];if(_0x2376e3[_0x5dc3b9(0x14e)](_0x284b69['k'],_0x5dc3b9(0x5b9)))return _0x2b569e===0x6c6+-0x1*0x1cbd+0x15f7||_0x2b569e===0xe81+-0x52*0x12+-0x8bc;var _0x37361d=_0x284b69[_0x5dc3b9(0x589)];if(typeof _0x37361d!==_0x5dc3b9(0x455)+'r'||!_0x2376e3[_0x5dc3b9(0x1bc)](isFinite,_0x37361d))return!![];if(_0x2376e3['NQAWA'](_0x284b69['act'],0x7*-0x27a+0x4d8*-0x3+0x1fdf))return Math['abs'](_0x2b569e-_0x37361d)<=Math['max'](0x1c44+0x2309+-0x3f4c,_0x2376e3[_0x5dc3b9(0x319)](Math[_0x5dc3b9(0x338)](_0x37361d),0xe35+0x130d+-0x81*0x42+0.6));return Math['abs'](_0x2b569e)<0x7d193f7*0xf+0x1*-0x702ed715+0x3681f59c;}function _0xe706d6(){var _0x52166b=_0x212d44,_0x4b85fd={'QYBAQ':'Runti'+_0x52166b(0x1be)+_0x52166b(0x519)+_0x52166b(0x5d6)+'\x20unav'+_0x52166b(0x511)+'le'},_0x3afe6c={};try{if(_0x2376e3[_0x52166b(0x4fb)]===_0x2376e3['lKEeW']){var _0x10d140=_0x2376e3[_0x52166b(0x2e8)][_0x52166b(0x541)]('|'),_0x4abdd2=-0x4*-0x8ec+0x874+-0x2c24;while(!![]){switch(_0x10d140[_0x4abdd2++]){case'0':_0x3afe6c[_0x52166b(0x316)+_0x52166b(0x407)+_0x52166b(0x2f4)+'me']=_0x4a22eb&&_0x4a22eb[_0x52166b(0x620)+_0x52166b(0x1a9)]&&_0x4a22eb['_runt'+_0x52166b(0x1a9)][_0x52166b(0x134)]?typeof _0x4a22eb['_runt'+_0x52166b(0x1a9)][_0x52166b(0x134)]:_0x2376e3['AhIcC'];continue;case'1':_0x3afe6c[_0x52166b(0x430)]=_0x5515ab&&_0x5515ab['__sak'+_0x52166b(0x391)+'g']||null;continue;case'2':var _0x5515ab=window[_0x52166b(0x412)+_0x52166b(0x49b)+'dkit']&&window['Unity'+_0x52166b(0x49b)+'dkit']['Runti'+'me'];continue;case'3':_0x3afe6c[_0x52166b(0x24a)+_0x52166b(0x588)+'e']=_0x5515ab&&_0x5515ab['_game']?typeof _0x5515ab[_0x52166b(0x134)]:_0x2376e3['AhIcC'];continue;case'4':_0x3afe6c['plugi'+'nRunt'+_0x52166b(0x222)+'Expor'+'ted']=!!(_0x4a22eb&&_0x4a22eb[_0x52166b(0x620)+'ime']&&_0x2376e3['FdefB'](_0x4a22eb['_runt'+_0x52166b(0x1a9)],_0x5515ab));continue;case'5':_0x3afe6c['tagMa'+_0x52166b(0x4ae)]=!!(_0x2376e3[_0x52166b(0x615)](_0x5515ab,_0x297ddb)&&_0x2376e3['mWauP'](_0x5515ab[_0x52166b(0x21e)+_0x52166b(0x391)+'g'],_0x297ddb));continue;}break;}}else{_0x4005bf['error']=_0x4b85fd[_0x52166b(0x5fb)];return;}}catch(_0xdace9b){_0x3afe6c['error']=_0x2376e3[_0x52166b(0x4e5)](String,_0xdace9b&&_0xdace9b[_0x52166b(0x266)+'ge']||_0xdace9b);}return _0x3afe6c;}function _0x5cf617(){var _0x12df6a=_0x212d44,_0x33563e=[_0x12df6a(0x1df)+_0x12df6a(0x431)+'nce',_0x12df6a(0x1df)+_0x12df6a(0x283),_0x12df6a(0x540),_0x12df6a(0x1df)+'Insta'+'nceWr'+'apper'],_0x243253={};for(var _0x3b085e=-0x1bb*0x2+-0x4ff*-0x7+-0x1*0x1f83;_0x3b085e<_0x33563e[_0x12df6a(0x2e1)+'h'];_0x3b085e++){var _0xf01198=_0x33563e[_0x3b085e],_0x3d8516=typeof window[_0xf01198];_0x243253[_0xf01198]=_0x2376e3['gpZbb'](_0x3d8516,_0x12df6a(0x1fb)+_0x12df6a(0x191))?_0x2376e3[_0x12df6a(0x20e)]:_0x3d8516;}var _0x56b1ac=_0x2376e3['XLAgW'](_0x464311);_0x243253['gameS'+_0x12df6a(0x529)]=_0x40b65f[_0x12df6a(0x3ac)+'e'];try{_0x243253[_0x12df6a(0x209)+_0x12df6a(0x30d)]=!!(_0x56b1ac&&_0x56b1ac[_0x12df6a(0x1c8)+'e']),_0x243253[_0x12df6a(0x3bc)+'8']=!!(_0x56b1ac&&_0x56b1ac['Modul'+'e']&&_0x56b1ac[_0x12df6a(0x1c8)+'e'][_0x12df6a(0x19f)+'8']),_0x243253['heapB'+'ytes']=_0x243253[_0x12df6a(0x3bc)+'8']?_0x56b1ac['Modul'+'e'][_0x12df6a(0x19f)+'8']['lengt'+'h']:-0x309*-0x3+-0x4cd+-0x44e;}catch(_0x41748a){_0x243253[_0x12df6a(0x209)+_0x12df6a(0x30d)]=![],_0x243253[_0x12df6a(0x3bc)+'8']=![],_0x243253[_0x12df6a(0x312)+_0x12df6a(0x3a7)]=-0x137+-0x3*0x716+0x1679;}return _0x243253[_0x12df6a(0x417)+_0x12df6a(0x183)+'er']=typeof _0x2756f6,_0x243253;}function _0x278726(_0x33629c){var _0x27223e=_0x212d44,_0x632016={};for(var _0x4e6dea in _0x33629c){var _0x27332c=_0x33629c[_0x4e6dea];for(var _0x5b395b=-0x98e+0x1*0x1974+-0xfe6;_0x5b395b<_0x27332c[_0x27223e(0x2e1)+'h'];_0x5b395b++){_0x632016[_0x2376e3[_0x27223e(0x21b)](_0x2376e3[_0x27223e(0x5c5)](_0x4e6dea,_0x27223e(0x5b4)),_0x27332c[_0x5b395b]['o']['toStr'+_0x27223e(0x3c7)](0x2*-0xae5+-0x23fc*0x1+0x39d6))]=_0x27332c[_0x5b395b]['v'];}}return _0x632016;}function _0x182b32(_0x7c3fde,_0x4852bf){var _0x2dad8b=_0x212d44;if(_0x2376e3['TTxpt'](_0x7c3fde,_0x2376e3[_0x2dad8b(0x400)])){_0x128752(_0x4852bf&&typeof _0x4852bf['on']===_0x2376e3[_0x2dad8b(0x18a)]?_0x4852bf['on']:_0xced96e['on'],_0x4852bf&&_0x2376e3['WvocK'](typeof _0x4852bf['facto'+'r'],_0x2376e3[_0x2dad8b(0x133)])?_0x4852bf[_0x2dad8b(0x509)+'r']:_0xced96e['facto'+'r']);return;}if(_0x2376e3['AxcCP'](_0x7c3fde,_0x2376e3[_0x2dad8b(0x300)]))return;var _0x84f1f9=_0x3ad1c1(),_0x44aa63=_0x2376e3[_0x2dad8b(0x3e4)](_0x278726,_0x84f1f9);if(!_0x4bba7f){_0x4bba7f=_0x44aa63,_0xaae5e4=[],_0x2376e3[_0x2dad8b(0x32b)](_0x529cae,_0x2dad8b(0x46b)+'t',{'report':_0x3cba95()});return;}_0xaae5e4=[];for(var _0x5e1df6 in _0x44aa63){var _0x1157b7=_0x4bba7f[_0x5e1df6],_0x5c6b74=_0x44aa63[_0x5e1df6];if(_0x2376e3[_0x2dad8b(0x466)](_0x1157b7,_0x5c6b74))_0xaae5e4['push'](_0x2376e3['lFjOP'](_0x2376e3['dHWIm'](_0x2376e3['Mzssb'](_0x5e1df6,':\x20'),_0x1157b7)+_0x2dad8b(0x570),_0x5c6b74));}_0x4bba7f=_0x44aa63,_0x2376e3[_0x2dad8b(0x450)](_0x529cae,'repor'+'t',{'report':_0x2376e3[_0x2dad8b(0x447)](_0x3cba95)});}var _0x4f4e1d=null;function _0x993778(){var _0x504b68=_0x212d44,_0x3557ae={'Ddnpz':function(_0x3d6e35,_0x3fb1a4,_0x7b7abc){return _0x3d6e35(_0x3fb1a4,_0x7b7abc);},'MPXfH':_0x2376e3[_0x504b68(0x2a8)],'FXtVt':_0x504b68(0x2c9)};if(_0x2376e3[_0x504b68(0x50d)](_0x2376e3['XoGrA'],_0x504b68(0x155)))_0x2376e3[_0x504b68(0x5b6)](_0x10d610);else{if(_0x4f4e1d)return _0x4f4e1d;try{if(!document['body']||!document['body'][_0x504b68(0xe8)+'dChil'+'d'])return null;if(!document['getEl'+'ement'+_0x504b68(0x4ff)](_0x504b68(0x47a)+'a-sw-'+_0x504b68(0x1e8)+'ss')){var _0x543cb5=document['creat'+_0x504b68(0x48c)+_0x504b68(0x1e0)]('style');_0x543cb5['id']='sakur'+'a-sw-'+_0x504b68(0x1e8)+'ss',_0x543cb5[_0x504b68(0x13a)+'onten'+'t']=_0x504b68(0x151)+_0x504b68(0x15b)+'-hud{'+'all:i'+_0x504b68(0x27b)+'l}',(document['head']||document[_0x504b68(0x340)+_0x504b68(0x45d)+_0x504b68(0x481)])[_0x504b68(0xe8)+'dChil'+'d'](_0x543cb5);}var _0x14a662=document['creat'+_0x504b68(0x48c)+_0x504b68(0x1e0)]('div');_0x14a662['id']=_0x504b68(0x47a)+'a-sw-'+_0x504b68(0x45a),_0x14a662['style'][_0x504b68(0x3d3)+'xt']=_0x2376e3[_0x504b68(0x3fe)]('posit'+'ion:f'+_0x504b68(0x58c)+'left:'+'8px;b'+'ottom'+_0x504b68(0x12d)+_0x504b68(0x293)+_0x504b68(0x549)+_0x504b68(0x482)+_0x504b68(0x232)+'ispla'+_0x504b68(0x40d)+_0x504b68(0x317)+'x-dir'+_0x504b68(0x33b)+'n:col'+_0x504b68(0x1fe)+_0x504b68(0x34a)+'x;',_0x504b68(0x56c)+_0x504b68(0x56e)+_0x504b68(0x2db)+_0x504b68(0x240)+_0x504b68(0x5ff)+_0x504b68(0x112)+_0x504b68(0x483)+'r:1px'+_0x504b68(0x381)+'d\x20rgb'+_0x504b68(0x440)+',143,'+'177,.'+'45);b'+_0x504b68(0x3e6)+_0x504b68(0x1e2)+'us:10'+'px;')+_0x2376e3['PFHqP']+_0x2376e3[_0x504b68(0x1f0)];var _0x401109=_0x2376e3[_0x504b68(0xf4)](_0x2376e3['HPBDb'](_0x2376e3['zFeLG'](_0x2376e3['fSHaA'](_0x504b68(0x384)+_0x504b68(0x2ea)+'a=\x22ba'+'r\x22\x20st'+'yle=\x22'+_0x504b68(0x36a)+'ay:fl'+_0x504b68(0x2a6)+_0x504b68(0x187)+_0x504b68(0x2ee)+'n-ite'+_0x504b68(0x373)+_0x504b68(0x532)+_0x504b68(0x12e)+_0x504b68(0x5d9)+_0x504b68(0x54f)+_0x504b68(0x1b9)+'idth:'+'290px'+';\x22>'+_0x2376e3[_0x504b68(0x603)]+_0x40d99a+('\x22>sak'+'ura</'+'b>')+('<butt'+'on\x20da'+'ta-a='+'\x22sp\x22\x20'+_0x504b68(0x59e)+_0x504b68(0x392)+_0x504b68(0x2af)+'nd:tr'+_0x504b68(0x4ef)+_0x504b68(0x15e)+'borde'+_0x504b68(0x122)+'\x20soli'+_0x504b68(0x5a8)+_0x504b68(0x440)+_0x504b68(0x4f9)+_0x504b68(0x27e)+_0x504b68(0x33a)),_0x504b68(0x159)+_0x504b68(0x30c)+'ef5;b'+_0x504b68(0x3e6)+_0x504b68(0x1e2)+'us:6p'+_0x504b68(0x1dc)+_0x504b68(0x1f8)+'2px\x208'+_0x504b68(0x3c5)+'rsor:'+_0x504b68(0x260)+_0x504b68(0x19d)+_0x504b68(0x14a)+'herit'+';\x22>Sp'+_0x504b68(0x1ca)+_0x504b68(0x4da)+_0x504b68(0x164)+'>')+_0x2376e3[_0x504b68(0x475)],_0x40d99a),_0x2376e3['QxFmJ'])+(_0x504b68(0x59d)+_0x504b68(0x38e)+_0x504b68(0x498)+'v\x22\x20st'+_0x504b68(0x128)+_0x504b68(0x159)+_0x504b68(0x385)+_0x504b68(0x12f)+_0x504b68(0x170)+_0x504b68(0x271)+_0x504b68(0x5d7)+_0x504b68(0x323)+'</spa'+'n>')+(_0x504b68(0x130)+_0x504b68(0x4dc)+_0x504b68(0x39c)+'\x22snap'+_0x504b68(0x4e9)+_0x504b68(0x1a4)+_0x504b68(0x3f2)+_0x504b68(0x307)+'trans'+_0x504b68(0x35b)+'t;bor'+'der:1'+_0x504b68(0x149)+_0x504b68(0x2d6)+_0x504b68(0x3c2)+'55,14'+_0x504b68(0x505)+',.45)'+';')+(_0x504b68(0x159)+_0x504b68(0x30c)+_0x504b68(0x4a1)+_0x504b68(0x3e6)+_0x504b68(0x1e2)+_0x504b68(0x537)+'x;pad'+_0x504b68(0x1f8)+_0x504b68(0x5c3)+'px;cu'+_0x504b68(0x2f5)+_0x504b68(0x260)+'er;fo'+_0x504b68(0x14a)+'herit'+_0x504b68(0x3f5)+_0x504b68(0x246)+_0x504b68(0x164)+'>'),_0x2376e3[_0x504b68(0x4a9)])+(_0x504b68(0x159)+':#f7e'+_0x504b68(0x4a1)+_0x504b68(0x3e6)+'-radi'+_0x504b68(0x537)+_0x504b68(0x1dc)+_0x504b68(0x1f8)+_0x504b68(0x2f7)+'px;cu'+'rsor:'+_0x504b68(0x260)+_0x504b68(0x19d)+_0x504b68(0x14a)+_0x504b68(0x479)+';\x22>-<'+_0x504b68(0x28b)+_0x504b68(0x3c6))+('</div'+'>')+_0x2376e3['mZnEq'];_0x14a662[_0x504b68(0x224)+_0x504b68(0x4fe)]=_0x401109;var _0xe68a67=function(_0x43b944){var _0x428203=_0x504b68;return _0x14a662[_0x428203(0x456)+'Selec'+_0x428203(0x4dd)](_0x2376e3['rYuoo'](_0x2376e3[_0x428203(0x2de)]+_0x43b944,'\x22]'));},_0x3fafd4=_0x2376e3[_0x504b68(0x5d0)](_0xe68a67,'st'),_0x16edcf=_0xe68a67('sp'),_0x3e3ac0=_0x2376e3['pDkuT'](_0xe68a67,'fx'),_0x200dae=_0xe68a67('fv'),_0xe42bfe=_0xe68a67('bar');if(_0x16edcf)_0x16edcf[_0x504b68(0xf8)+'ck']=function(){var _0x52628f=_0x504b68;_0x3557ae[_0x52628f(0x5f5)](_0x128752,!_0xced96e['on'],_0xced96e[_0x52628f(0x509)+'r']);};if(_0x3e3ac0)_0x3e3ac0[_0x504b68(0x2e0)+'ut']=function(){var _0x9d8c81=_0x504b68;if(_0x9d8c81(0x5f6)!=='DtLJT'){var _0x4bc61e=new _0x170a77(_0x4102c9);for(var _0x463b7b=-0xb49+-0xdea+0x1933;_0x463b7b<_0x527953;_0x463b7b++)_0x4bc61e[_0x463b7b]=_0x36bb27['getUi'+_0x9d8c81(0x1ad)](_0x13035f+_0x57819b+_0x463b7b);return _0x5a7c8c['ok']++,_0x4bc61e;}else _0x128752(_0xced96e['on'],_0x2376e3[_0x9d8c81(0x554)](parseFloat,_0x3e3ac0['value'])||0x1311+-0x43*-0x84+-0x2*0x1ace);};if(_0xe68a67(_0x504b68(0x398)))_0xe68a67('snap')['oncli'+'ck']=function(){var _0x30187e=_0x504b68,_0x36588d={'rDBJP':function(_0x1b45ea,_0x1a6ad9){return _0x1b45ea+_0x1a6ad9;},'RMoVK':function(_0x337a9a,_0x4be4dc){return _0x337a9a+_0x4be4dc;},'BDMNa':function(_0x49467f,_0x4d84cb){return _0x49467f+_0x4d84cb;},'VrKOO':_0x2376e3[_0x30187e(0x333)]};_0x2376e3[_0x30187e(0x3b8)](_0x2376e3['LXepI'],_0x30187e(0x200))?_0x182b32(_0x2376e3['FbRsP']):_0x2f5c17['warni'+'ngs']['push'](_0x36588d[_0x30187e(0x115)](_0x36588d['RMoVK'](_0x36588d[_0x30187e(0x2b7)](_0x36588d['VrKOO']+_0x559c78[_0x30187e(0x5b0)+'Resol'+_0x30187e(0x4e0)]+_0x30187e(0x49e),_0xf34050[_0x30187e(0x5b0)+_0x30187e(0x2d4)]),'\x20hook'+'(s)\x20t'+'o\x20a\x20t'+_0x30187e(0x5e8)+_0x30187e(0x308)+_0x30187e(0x26f)+_0x30187e(0x166)+_0x30187e(0x23e)+_0x30187e(0x2bc)+'he\x20si'+_0x30187e(0x2c7)+'re\x20'),'(this'+',\x20Met'+'hodIn'+_0x30187e(0x18d)+'->\x20vo'+'id\x20do'+_0x30187e(0x20d)+'t\x20mat'+_0x30187e(0x4a6)+'is\x20bu'+'ild.'));};if(_0xe68a67(_0x2376e3[_0x504b68(0x3df)]))_0xe68a67(_0x504b68(0x2c9))[_0x504b68(0xf8)+'ck']=function(){var _0x2481be=_0x504b68;if(!_0xe42bfe)return;var _0x198675=_0xe42bfe[_0x2481be(0x59e)]['displ'+'ay']===_0x3557ae[_0x2481be(0x3c4)];_0xe42bfe[_0x2481be(0x59e)]['displ'+'ay']=_0x198675?'':_0x3557ae[_0x2481be(0x3c4)],_0xe68a67(_0x3557ae['FXtVt'])['textC'+'onten'+'t']=_0x198675?'-':'+';};return document[_0x504b68(0x13d)]['appen'+_0x504b68(0x1f3)+'d'](_0x14a662),_0x4f4e1d={'el':_0x14a662,'st':_0x3fafd4,'sp':_0x16edcf,'fx':_0x3e3ac0,'fv':_0x200dae},_0x4f4e1d;}catch(_0x3faa40){return console[_0x504b68(0x61a)](_0x2376e3[_0x504b68(0x377)],_0x504b68(0x159)+':'+_0x40d99a,_0x3faa40),null;}}}var _0x391255=-0x1731+-0x2*0xcee+-0x13*-0x295;function _0x128752(_0x4491cd,_0xe42322){var _0x4a960c=_0x212d44,_0x41d1d4={'xHgAr':function(_0x4066cf,_0x45733f,_0x32159b){return _0x4066cf(_0x45733f,_0x32159b);},'pdcrS':function(_0x11e536,_0x136acd){return _0x11e536(_0x136acd);}};if(_0x2376e3[_0x4a960c(0x38c)](_0x4a960c(0x585),'eKFuA')){var _0x1faf0e=_0xced96e['on'];_0xced96e['on']=!!_0x4491cd;_0xced96e['on']&&!_0x1faf0e&&(_0x2376e3[_0x4a960c(0x256)](_0xe42322,undefined)||_0x2376e3[_0x4a960c(0xec)](_0xe42322,null)||Number(_0xe42322)===-0x3ac+-0x141*0x2+0x62f)&&(_0xe42322=_0x391255);_0xced96e['facto'+'r']=Math['min'](_0xced96e['max'],Math[_0x4a960c(0x5d5)](_0xced96e['min'],Number(_0xe42322)||0x3*0xcdc+0x23f4+-0x4a87));if(!_0xced96e['on'])_0x13e1a9={};var _0x18c54b=_0x2376e3[_0x4a960c(0x447)](_0x993778);if(_0x18c54b){_0x18c54b['sp']&&(_0x18c54b['sp'][_0x4a960c(0x13a)+_0x4a960c(0x153)+'t']=_0xced96e['on']?_0x4a960c(0x4b3)+_0x4a960c(0x380):_0x2376e3[_0x4a960c(0x401)],_0x18c54b['sp'][_0x4a960c(0x59e)][_0x4a960c(0x56c)+_0x4a960c(0x56e)]=_0xced96e['on']?_0x40d99a:_0x4a960c(0x1e3)+'paren'+'t',_0x18c54b['sp'][_0x4a960c(0x59e)][_0x4a960c(0x159)]=_0xced96e['on']?'#2a0f'+'1b':_0x2376e3[_0x4a960c(0x4b0)]);if(_0x18c54b['fx'])_0x18c54b['fx'][_0x4a960c(0x417)]=String(_0xced96e[_0x4a960c(0x509)+'r']);if(_0x18c54b['fv'])_0x18c54b['fv'][_0x4a960c(0x13a)+_0x4a960c(0x153)+'t']=_0x2376e3[_0x4a960c(0x2f9)](_0xced96e['facto'+'r'][_0x4a960c(0x213)+'ed'](0xf17+0x4fe+-0x5*0x404),'x');}}else _0x41d1d4[_0x4a960c(0x4aa)](_0x25437b,_0x333680['on'],_0x41d1d4[_0x4a960c(0x523)](_0x4e4566,_0x23a323['value'])||-0x25c1+-0xbbb+0x1*0x317d);}function _0x2de922(_0x1ae064){var _0x3a3c0a=_0x212d44,_0x5c9407=_0x993778();if(!_0x5c9407||!_0x5c9407['st'])return;try{var _0x1138d5=Object[_0x3a3c0a(0x3d2)](_0x1ae064&&_0x1ae064[_0x3a3c0a(0x526)+_0x3a3c0a(0x111)]||{})['lengt'+'h'],_0x117bb4=_0x428f7f?(_0x428f7f[_0x3a3c0a(0x49c)+'r'][_0x3a3c0a(0x24e)+'ength']/(-0x133175+-0xd*-0x2714c+0x37099))[_0x3a3c0a(0x213)+'ed'](-0xb97+-0x1*0x17c2+0x1*0x2359)+'MB':'no-me'+'m',_0x53ebf8=_0x2376e3[_0x3a3c0a(0x57c)](_0x2376e3[_0x3a3c0a(0x592)](_0x2376e3[_0x3a3c0a(0x592)](_0x2376e3['qFzlt']('v',_0x1ae064&&_0x1ae064['versi'+'on']||_0x589948)+(_0x3a3c0a(0x1ea)+_0x3a3c0a(0x1a0))+(_0x1ae064&&_0x1ae064[_0x3a3c0a(0x5b0)+'Appli'+'ed']||0x1*0x1d4e+0xb7f*-0x3+0x52f)+'/',_0x1ae064&&_0x1ae064['hooks'+_0x3a3c0a(0x2d4)]||0xc0f+0xdd7+-0x19e6),_0x2376e3['yFmIr']),_0x1138d5)+('\x20\x20mem'+'\x20')+_0x117bb4+('\x20\x20wri'+'tes\x20')+_0x503023;_0x5c9407['st'][_0x3a3c0a(0x13a)+_0x3a3c0a(0x153)+'t']=_0x53ebf8,_0x5c9407['st'][_0x3a3c0a(0x59e)]['color']=_0x1ae064&&_0x2376e3[_0x3a3c0a(0x289)](_0x1ae064[_0x3a3c0a(0x5b0)+'Appli'+'ed'],0x478*0x1+0x3*0x11a+-0x7c6)?_0x2376e3[_0x3a3c0a(0x261)]:_0x3a3c0a(0x1f9)+'8a';}catch(_0x54f75f){}}window[_0x212d44(0x410)+_0x212d44(0x428)+'stene'+'r'](_0x2376e3['RaHkw'],function(_0x45b83f){var _0x19734e=_0x212d44;if(!_0x45b83f)return;try{if(_0x2376e3['coalM'](_0x45b83f['code'],'F9')){_0x45b83f[_0x19734e(0x57e)+'ntDef'+'ault'](),_0x182b32('snaps'+_0x19734e(0x565));return;}if(_0x2376e3[_0x19734e(0x61c)](_0x45b83f[_0x19734e(0x4d5)],'F7')){_0x45b83f['preve'+'ntDef'+'ault'](),_0x2376e3['hfsWy'](_0x128752,!_0xced96e['on'],_0xced96e['facto'+'r']);return;}if(_0x45b83f['code']==='F8'){_0x45b83f[_0x19734e(0x57e)+_0x19734e(0x125)+'ault'](),_0x128752(_0xced96e['on'],_0xced96e[_0x19734e(0x509)+'r']+(-0xe*-0xe0+-0x1123*0x2+0xb03*0x2+0.5));return;}if(_0x2376e3[_0x19734e(0x113)](_0x45b83f[_0x19734e(0x4d5)],'F6')){if(_0x19734e(0x2dc)!=='mQqEn')_0x2da844();else{_0x45b83f[_0x19734e(0x57e)+_0x19734e(0x125)+'ault'](),_0x128752(_0xced96e['on'],_0xced96e[_0x19734e(0x509)+'r']-(0x156e+0x1*0x37a+-0x18e8+0.5));return;}}}catch(_0x4bbdd5){}},!![]);function _0x3cba95(){var _0x54fcb8=_0x212d44,_0x182a8b={'wYztw':function(_0x34a22f){return _0x34a22f();},'CqcPR':function(_0x19e24e,_0x4af8d5){return _0x19e24e!==_0x4af8d5;},'AOuJk':_0x2376e3['AlxRb']};if(_0x2376e3['jPmYF']===_0x54fcb8(0x239)){var _0x3812f8=window['Unity'+'WebMo'+'dkit']&&window[_0x54fcb8(0x412)+'WebMo'+'dkit'][_0x54fcb8(0x106)+'me']||null,_0x2de028=_0x3812f8&&_0x3812f8[_0x54fcb8(0x5be)+_0x54fcb8(0x329)+_0x54fcb8(0x458)],_0x5ed466=_0x2de028&&_0x2de028[_0x54fcb8(0x5eb)+_0x54fcb8(0x534)],_0xb5802d={},_0x54f394=[];for(var _0x2b474d in _0x3fa30b){_0xb5802d[_0x2b474d]=_0x2376e3[_0x54fcb8(0x23f)]('0x',_0x3fa30b[_0x2b474d][_0x54fcb8(0x4fd)][_0x54fcb8(0x51e)+_0x54fcb8(0x3c7)](0x71f+-0x3d*-0x43+-0xb83*0x2));if(_0x3fa30b[_0x2b474d][_0x54fcb8(0x241)+'ced'])_0x54f394[_0x54fcb8(0x5ac)](_0x2b474d);}var _0xbbf321={};for(var _0x7b3239 in _0x3fa30b)_0xbbf321[_0x7b3239]=_0x2376e3[_0x54fcb8(0x547)](_0x1cd6bb,_0x3fa30b[_0x7b3239][_0x54fcb8(0x4fd)]);var _0x17b7ca={},_0x3e059c=null;try{_0x17b7ca=_0x2376e3['dUsiR'](_0x3ad1c1);}catch(_0x3a36c3){_0x3e059c=String(_0x3a36c3&&_0x3a36c3[_0x54fcb8(0x266)+'ge']||_0x3a36c3);}var _0x5c4695={'version':_0x589948,'when':new Date()[_0x54fcb8(0x3a8)+'Strin'+'g'](),'elapsedMs':Date['now']()-_0x5c73ce,'frame':location[_0x54fcb8(0x43e)][_0x54fcb8(0x320)](0x4ca+-0x3be+-0x10c,-0x14b*-0x14+-0x93*0x2+-0x2*0xc1f),'host':_0x3cebaa,'frameRole':_0x1fc25e,'uwmk':!!_0x3812f8,'il2CppContext':!!_0x2de028,'typeCount':_0x5ed466?Object[_0x54fcb8(0x3d2)](_0x5ed466)[_0x54fcb8(0x2e1)+'h']:null,'arm':_0x5d0b54,'assemblies':_0x30b624,'hooksTotal':_0x4ecd8b['lengt'+'h'],'hooksApplied':_0x4a4df6(),'hooksResolved':_0xe9286b(),'hooksRegisteredAtArm':_0x5d0b54[_0x54fcb8(0x5b0)+_0x54fcb8(0x24d)+_0x54fcb8(0x445)]||0x26d7+0x1*0x2291+-0x4968,'hookErrors':_0xa5983a[_0x54fcb8(0x320)](0xbb1+-0x1*0x2206+-0x1655*-0x1,0x2587*-0x1+-0x1*-0x1ed5+0x11f*0x6),'instances':_0xb5802d,'classNames':_0xbbf321,'instancesReplaced':_0x54f394,'hookFireProof':_0x20c34f,'survey':_0x17b7ca,'actkKeys':_0x575202,'surveyRows':Object['keys'](_0x17b7ca)['reduc'+'e'](function(_0xd29ec,_0x51b2c4){var _0x5b6994=_0x54fcb8;return _0x2376e3[_0x5b6994(0x1b1)](_0xd29ec,_0x17b7ca[_0x51b2c4]['lengt'+'h']);},-0xfe*0x1+0x9d3+0x77*-0x13),'reads':{'ok':_0x40b65f['ok'],'failed':_0x40b65f[_0x54fcb8(0x3c8)+'d'],'lastError':_0x40b65f[_0x54fcb8(0x238)+_0x54fcb8(0x4ca)],'source':_0x40b65f['sourc'+'e']},'identity':_0xe706d6(),'globals':_0x2376e3[_0x54fcb8(0x591)](_0x5cf617),'wasmMemory':{'captured':!!_0x428f7f,'atMs':_0x5b4018,'bytes':(function(){var _0x4f6862=_0x54fcb8,_0x476eb1={'nYNrV':function(_0x1d21d7){var _0x513081=_0x9852;return _0x182a8b[_0x513081(0x487)](_0x1d21d7);}};if(_0x182a8b[_0x4f6862(0x415)](_0x182a8b['AOuJk'],_0x4f6862(0x1f2)))try{_0x476eb1[_0x4f6862(0x2f3)](_0x118c22);}catch(_0x3cc389){}else try{return _0x428f7f&&_0x428f7f['buffe'+'r']?_0x428f7f['buffe'+'r']['byteL'+_0x4f6862(0x3d1)]:0x1997+0x2059+0xce*-0x48;}catch(_0x386f98){return-0x8*-0xc0+-0x27*0x49+0x51f;}}()),'exportKeys':_0xa2a562},'diff':_0xaae5e4['slice'](-0x96*-0x3f+0x133a+-0x3824,0x3b*0x6d+-0x166e+-0x289),'speed':{'on':_0xced96e['on'],'factor':_0xced96e['facto'+'r'],'writes':_0x503023},'esp':_0x156bcb(),'uwmkLog':_0x3e8add[_0x54fcb8(0x320)](0x1*0x1f6f+0x370+-0x22df*0x1,-0xd*-0x2a2+-0x1fee*0x1+-0x4*0x8e),'warnings':[]};if(_0x3e059c)_0x5c4695['warni'+_0x54fcb8(0x2a2)][_0x54fcb8(0x5ac)](_0x2376e3[_0x54fcb8(0x5b8)](_0x54fcb8(0x2b4)+'y\x20fai'+'led:\x20',_0x3e059c));if(_0x5d0b54[_0x54fcb8(0x107)])_0x5c4695['warni'+_0x54fcb8(0x2a2)][_0x54fcb8(0x5ac)](_0x2376e3[_0x54fcb8(0x2c0)]+_0x5d0b54[_0x54fcb8(0x107)]);_0x5c4695[_0x54fcb8(0x2b4)+'yRows']===0x908*-0x2+-0x9c9+-0x1bd9*-0x1&&Object['keys'](_0x5c4695['insta'+'nces'])[_0x54fcb8(0x2e1)+'h']>0x19be+0x266+-0x1c24&&_0x5c4695[_0x54fcb8(0x572)+'ngs'][_0x54fcb8(0x5ac)](_0x2376e3['hacTM']('captu'+_0x54fcb8(0x5fd)+Object[_0x54fcb8(0x3d2)](_0x5c4695[_0x54fcb8(0x526)+'nces'])[_0x54fcb8(0x2e1)+'h'],_0x2376e3['vyzii'])+(_0x40b65f['lastE'+'rror']?_0x2376e3['joxfQ'](_0x54fcb8(0x35f)+_0x54fcb8(0x207),_0x40b65f[_0x54fcb8(0x238)+_0x54fcb8(0x4ca)]):_0x2376e3[_0x54fcb8(0x4b7)]));_0x5c4695['ident'+_0x54fcb8(0x3bb)]&&_0x5c4695['ident'+_0x54fcb8(0x3bb)][_0x54fcb8(0x609)+_0x54fcb8(0x4ae)]===![]&&_0x5c4695[_0x54fcb8(0x572)+_0x54fcb8(0x2a2)][_0x54fcb8(0x5ac)](_0x2376e3['bHRox'](_0x2376e3['zcKID'](_0x54fcb8(0x218)+_0x54fcb8(0x425)+'MK\x20CO'+_0x54fcb8(0x1ab)+'OK\x20OV'+_0x54fcb8(0x584)+_0x54fcb8(0x543)+_0x54fcb8(0x412)+_0x54fcb8(0x49b)+'dkit.'+_0x54fcb8(0x5f3)+'Runti'+_0x54fcb8(0x463)+_0x54fcb8(0x3e1)+'d\x20was'+'\x20',_0x54fcb8(0x241)+_0x54fcb8(0x535)+_0x54fcb8(0x1d2)+'iffer'+_0x54fcb8(0x60b)+_0x54fcb8(0x15d)+_0x54fcb8(0x5a3)+_0x54fcb8(0x4b9)+'are\x20a'+'sking'+_0x54fcb8(0x5db)+_0x54fcb8(0x3b6)+_0x54fcb8(0x1cc)+'ct\x20fo'+'r\x20')+_0x2376e3[_0x54fcb8(0x50b)],_0x54fcb8(0x335)+_0x54fcb8(0x4ba)+_0x54fcb8(0x309)+_0x54fcb8(0x539)+_0x54fcb8(0xef)+_0x54fcb8(0x577)+_0x54fcb8(0x1a6)+'and\x20h'+_0x54fcb8(0x3ef)+'eload'+'.'));_0x5c4695['ident'+_0x54fcb8(0x3bb)]&&_0x2376e3[_0x54fcb8(0x538)](_0x5c4695[_0x54fcb8(0x60a)+_0x54fcb8(0x3bb)]['plugi'+_0x54fcb8(0x407)+_0x54fcb8(0x222)+'Expor'+_0x54fcb8(0x573)],![])&&_0x5c4695['warni'+'ngs'][_0x54fcb8(0x5ac)](_0x2376e3[_0x54fcb8(0x5ce)](_0x2376e3[_0x54fcb8(0x41f)],_0x2376e3[_0x54fcb8(0x35a)]));if(_0x5c4695['esp']&&_0x5c4695[_0x54fcb8(0x607)][_0x54fcb8(0x294)])_0x5c4695[_0x54fcb8(0x572)+_0x54fcb8(0x2a2)]['push'](_0x54fcb8(0x41d)+_0x5c4695[_0x54fcb8(0x607)]['note']);if(_0x5c4695[_0x54fcb8(0x522)+'ls']&&!_0x5c4695['globa'+'ls'][_0x54fcb8(0x3bc)+'8']){if(_0x54fcb8(0x2a4)==='LEimi'){var _0x12fa62='';_0x5c4695[_0x54fcb8(0x31d)+'irePr'+'oof']&&(_0x12fa62=_0x2376e3['zFeLG']('\x20A\x20ho'+_0x54fcb8(0x45b)+_0x54fcb8(0x26e)+'t\x20'+_0x5c4695[_0x54fcb8(0x31d)+_0x54fcb8(0x604)+_0x54fcb8(0x211)][_0x54fcb8(0x499)],'ms\x20wi'+'th\x20or'+'igina'+'lFunc'+'=')+_0x5c4695[_0x54fcb8(0x31d)+_0x54fcb8(0x604)+'oof']['origi'+_0x54fcb8(0x3eb)+'nc']+_0x2376e3[_0x54fcb8(0x2e9)]+_0x5c4695[_0x54fcb8(0x31d)+'irePr'+_0x54fcb8(0x211)][_0x54fcb8(0x5ab)+_0x54fcb8(0x5b3)+_0x54fcb8(0x176)+'re']+_0x2376e3[_0x54fcb8(0x2ef)]+(_0x5c4695[_0x54fcb8(0x31d)+_0x54fcb8(0x604)+_0x54fcb8(0x211)][_0x54fcb8(0xe4)+_0x54fcb8(0x529)+_0x54fcb8(0x263)+'e']||'none')+(_0x54fcb8(0x459)+'\x20the\x20'+_0x54fcb8(0x15c)+'ence\x20'+_0x54fcb8(0x116)+_0x54fcb8(0x28d)+_0x54fcb8(0x157)+'d\x20is\x20'+'not\x20r'+_0x54fcb8(0x370)+'ble\x20n'+_0x54fcb8(0x1e9))),_0x5c4695[_0x54fcb8(0x572)+'ngs']['push'](_0x2376e3[_0x54fcb8(0x4e8)](_0x2376e3['ykqeE'](_0x2376e3['ZQtXJ'](_0x2376e3[_0x54fcb8(0x11f)]+(_0x5c4695['globa'+'ls']['gameS'+'ource']||_0x54fcb8(0x3e7)),_0x54fcb8(0x52e)),_0x2376e3[_0x54fcb8(0x58f)]),_0x12fa62));}else _0x4960b9=_0x534622();}if(_0x5c4695[_0x54fcb8(0x522)+'ls']&&!_0x5c4695[_0x54fcb8(0x522)+'ls']['value'+_0x54fcb8(0x183)+'er']||_0x2376e3[_0x54fcb8(0x178)](_0x5c4695[_0x54fcb8(0x522)+'ls']['value'+_0x54fcb8(0x183)+'er'],'undef'+'ined')){if(_0x2376e3[_0x54fcb8(0xe9)](_0x2376e3['BobwS'],'zCvDr'))_0x5c4695[_0x54fcb8(0x572)+_0x54fcb8(0x2a2)]['push'](_0x54fcb8(0x494)+_0x54fcb8(0x429)+_0x54fcb8(0x28e)+'Modki'+_0x54fcb8(0x13f)+_0x54fcb8(0x152)+'pper\x20'+'is\x20mi'+_0x54fcb8(0x171)+'\x20-\x20ca'+_0x54fcb8(0x382)+'\x20is\x20r'+'unnin'+'g\x20bli'+_0x54fcb8(0x3af));else try{if(!_0x351baf||!_0x2f8b59)return null;var _0x3a0078=new _0x66e633(_0x4927e6)[_0x54fcb8(0x467)+'assNa'+'me']();return _0x2376e3[_0x54fcb8(0x30f)](_0x3a0078,_0x8e5fff)?null:_0x3a0078;}catch(_0x44d31f){return null;}}return _0x5c4695[_0x54fcb8(0x5b0)+_0x54fcb8(0x2d4)]>-0x247e+-0x22bc+0x12*0x3f5&&_0x5c4695[_0x54fcb8(0x5b0)+'Appli'+'ed']===-0x229a+-0x209*-0xd+0x825&&_0x5ed466&&(_0x5c4695[_0x54fcb8(0x5b0)+_0x54fcb8(0x242)+_0x54fcb8(0x4e0)]===0x1*-0xdcd+0x39*-0x89+0x2c4e?_0x5c4695[_0x54fcb8(0x572)+'ngs'][_0x54fcb8(0x5ac)](_0x2376e3[_0x54fcb8(0x22c)](_0x2376e3['Ahgav'](_0x2376e3['xeTNH'](_0x2376e3['GlIsD'](_0x2376e3['AnlUL'],_0x5c4695[_0x54fcb8(0x5b0)+_0x54fcb8(0x2d4)]),_0x2376e3[_0x54fcb8(0x16a)])+(_0x54fcb8(0x372)+'once\x20'+_0x54fcb8(0x255)+_0x54fcb8(0x1d8)+_0x54fcb8(0x290)+_0x54fcb8(0x3cf)+_0x54fcb8(0x15d)+_0x54fcb8(0x23c)+_0x54fcb8(0x53e)+_0x54fcb8(0x4b6)+_0x54fcb8(0x563)+_0x54fcb8(0x316)+_0x54fcb8(0x1c9)+_0x54fcb8(0x306)+_0x54fcb8(0x148)+'\x20')+_0x2376e3[_0x54fcb8(0x57f)],_0x54fcb8(0x24d)+'tered'+'\x20')+_0x5c4695[_0x54fcb8(0x5b0)+'Regis'+_0x54fcb8(0x445)+'AtArm'],'\x20hook'+_0x54fcb8(0x423)+_0x54fcb8(0x47b)+_0x54fcb8(0x2a3)+'ng\x20at'+_0x54fcb8(0x626)+_0x54fcb8(0x5f0)+_0x54fcb8(0x5ec)+'.')):_0x5c4695[_0x54fcb8(0x572)+_0x54fcb8(0x2a2)][_0x54fcb8(0x5ac)](_0x2376e3['sUnPs'](_0x2376e3['jVgcg'](_0x2376e3['iNbZG'](_0x2376e3[_0x54fcb8(0x333)],_0x5c4695['hooks'+_0x54fcb8(0x242)+_0x54fcb8(0x4e0)])+_0x2376e3['NzyoZ'],_0x5c4695['hooks'+'Total']),_0x54fcb8(0x100)+'(s)\x20t'+_0x54fcb8(0x4c0)+_0x54fcb8(0x5e8)+'index'+_0x54fcb8(0x26f)+_0x54fcb8(0x166)+_0x54fcb8(0x23e)+_0x54fcb8(0x2bc)+_0x54fcb8(0x347)+_0x54fcb8(0x2c7)+_0x54fcb8(0x139))+(_0x54fcb8(0x22f)+',\x20Met'+_0x54fcb8(0x599)+_0x54fcb8(0x18d)+_0x54fcb8(0x612)+_0x54fcb8(0x516)+'es\x20no'+_0x54fcb8(0x4e2)+_0x54fcb8(0x4a6)+'is\x20bu'+'ild.'))),_0x2376e3['ecyAv'](_0x5c4695[_0x54fcb8(0x5b0)+_0x54fcb8(0x464)+'ed'],-0x1697+0xc7*0xa+0xed1)&&!_0x5c4695['insta'+_0x54fcb8(0x111)][_0x54fcb8(0x21c)+_0x54fcb8(0x593)+'ler']&&_0x5c4695['warni'+_0x54fcb8(0x2a2)]['push']('Hooks'+'\x20are\x20'+_0x54fcb8(0x166)+_0x54fcb8(0x32a)+'t\x20no\x20'+'FPSco'+_0x54fcb8(0x593)+_0x54fcb8(0x4f4)+'as\x20fi'+'red\x20y'+_0x54fcb8(0x3de)+(_0x54fcb8(0x42c)+'r\x20you'+_0x54fcb8(0x1a3)+'not\x20i'+_0x54fcb8(0x402)+_0x54fcb8(0x5f7)+_0x54fcb8(0x4d9)+'he\x20ho'+_0x54fcb8(0x38f)+'\x20on\x20t'+_0x54fcb8(0x29e)+'ong\x20o'+'verlo'+_0x54fcb8(0x4d1))),_0x5c4695[_0x54fcb8(0x526)+_0x54fcb8(0x22a)+_0x54fcb8(0xed)+'ed']['lengt'+'h']&&_0x5c4695['warni'+_0x54fcb8(0x2a2)]['push'](_0x2376e3['yplzB'](_0x2376e3['nFars'],_0x5c4695['insta'+_0x54fcb8(0x22a)+'eplac'+'ed']['join'](',\x20'))),_0x5c4695;}else _0x335548(_0x5617bb);}function _0xfa2a62(_0x181e1d){var _0x1021b2=_0x212d44,_0x5e11d7={'FBCED':function(_0x1c1361){return _0x1c1361();}};console[_0x1021b2(0x3d7)]('%c[sa'+_0x1021b2(0x39e)+_0x1021b2(0x354)+'lWarz'+_0x1021b2(0x51f)+'rt',_0x2376e3['gifCE'](_0x2376e3['rYuoo'](_0x1021b2(0x159)+':',_0x40d99a),_0x1021b2(0x5b2)+'-weig'+_0x1021b2(0x5e2)+'0'),_0x181e1d),console['log'](_0x2376e3[_0x1021b2(0x57d)](_0x54c1da,'\x0a')+JSON['strin'+_0x1021b2(0x5ef)](_0x181e1d,null,-0x127*-0x1f+-0xf1+-0x22c7)+'\x0a'+_0x38a83a);try{_0x1021b2(0x40e)===_0x1021b2(0x580)?_0x6448c4[_0x1021b2(0x161)+_0x1021b2(0x3ed)][_0x1021b2(0x342)+'Text'](_0x1411e5)['then'](_0x3964fc,function(){var _0xb0c92a=_0x1021b2;_0x5e11d7[_0xb0c92a(0x1ed)](_0x5215da);}):_0x2de922(_0x181e1d);}catch(_0x477e62){}_0x2376e3['cQWVd'](_0x529cae,_0x2376e3[_0x1021b2(0x267)],{'report':_0x181e1d});}function _0x2b1159(){var _0x77b80d=_0x212d44;if(_0x2376e3['ZkVsc'](_0x2376e3['lmQJU'],_0x77b80d(0x236)))try{return _0x2376e3['tfuNN'](_0x3cba95);}catch(_0x22a3e6){return{'version':_0x589948,'when':new Date()['toISO'+_0x77b80d(0x4a2)+'g'](),'elapsedMs':_0x2376e3[_0x77b80d(0x30e)](Date['now'](),_0x5c73ce),'host':_0x3cebaa,'uwmk':!!(window[_0x77b80d(0x412)+_0x77b80d(0x49b)+_0x77b80d(0x4cd)]&&window[_0x77b80d(0x412)+'WebMo'+_0x77b80d(0x4cd)]['Runti'+'me']),'il2CppContext':![],'arm':_0x5d0b54,'hooksTotal':_0x4ecd8b['lengt'+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x2376e3['DYgUb'](String,_0x22a3e6&&_0x22a3e6[_0x77b80d(0x266)+'ge']||_0x22a3e6)};}else{var _0x4ca184=_0x33184d[_0xb9d45e],_0x4ade5e=_0x1e1684(_0x525ea9,_0x3245c2,_0x4ca184['size']);if(!_0x4ade5e)return null;var _0x9e1b82=new _0x39ac2f(_0x4ade5e[_0x77b80d(0x49c)+'r'],_0x4ade5e[_0x77b80d(0x52a)+'ffset'],_0x4ade5e['byteL'+'ength']),_0x478f6f=_0x9e1b82[_0x77b80d(0x2fd)+_0x77b80d(0x378)](_0x4ca184[_0x77b80d(0x18c)],!![]),_0x5574bb=_0x9e1b82['getIn'+'t32'](_0x4ca184[_0x77b80d(0x49d)+'n'],!![]),_0x117557=_0x9e1b82[_0x77b80d(0x5c0)+'nt8'](_0x4ca184['inite'+'d'])&-0x4bb+-0x18a4+0x1d60,_0x531f3c=_0x2376e3['AjLcR'](_0x2dd51a,_0x77b80d(0x2be))?_0x9e1b82[_0x77b80d(0x3a4)+'oat32'](_0x4ca184['fake'],!![]):_0x2376e3['FNXUK'](_0x11f8b8,'obfI')?_0x9e1b82[_0x77b80d(0x2fd)+_0x77b80d(0x378)](_0x4ca184[_0x77b80d(0x589)],!![]):_0x9e1b82[_0x77b80d(0x5c0)+'nt8'](_0x4ca184[_0x77b80d(0x589)]),_0x36a9d1=_0x9e1b82[_0x77b80d(0x5c0)+'nt8'](_0x4ca184['activ'+'e'])&-0x32*0x5+0x1c18+-0x1b1d;return{'keyAtOffset0':_0x478f6f,'hidden':_0x5574bb,'inited':_0x117557,'fake':_0x531f3c,'act':_0x36a9d1,'hex':_0x2376e3['YNxoH'](_0x171f99,_0x4ade5e),'alt':_0x2376e3[_0x77b80d(0x42e)](_0x233e63,'obfI')?_0x5574bb^(_0x531f3c|0x1cc5+0x24b*0x2+-0x215b):null};}}function _0xa141b(){var _0x5d9d75={'iBvOi':function(_0x55b943,_0x49c21c){return _0x55b943<_0x49c21c;}},_0x2a7a07=0x1aa1+0x11*0xca+0x9*-0x473;_0x2376e3['CwCcO'](_0xfa2a62,_0x2b1159()),function _0x2e56e1(){var _0x2c0a97=_0x9852;if(!_0x4ecd8b['lengt'+'h'])try{_0x35955c();}catch(_0x937dba){}_0x2a7a07++,_0xfa2a62(_0x2b1159());if(!_0x4ecd8b[_0x2c0a97(0x2e1)+'h']&&_0x2a7a07<-0x27*-0x2b+0x1ebe+-0x241f*0x1)setTimeout(_0x2e56e1,-0x578*0x1+-0x359*-0xa+-0x1432*0x1);else{if(!Object[_0x2c0a97(0x3d2)](_0x3fa30b)[_0x2c0a97(0x2e1)+'h']&&_0x5d9d75['iBvOi'](_0x2a7a07,0x1*-0x1ed6+0xeb0+0x1152))setTimeout(_0x2e56e1,0x1632+-0x22*-0xcd+-0x299c);else setTimeout(_0x2e56e1,-0x5a3+-0x1f8d+0x29e0);}}();}if(document[_0x212d44(0x13d)])_0xa141b();else document['addEv'+'entLi'+_0x212d44(0x314)+'r'](_0x212d44(0x28a)+'ntent'+'Loade'+'d',_0xa141b,{'once':!![]});if(document[_0x212d44(0x13d)])try{if(_0x212d44(0x278)!==_0x2376e3['AJHGl']){if(!_0x66cac0)return;var _0x36673b=_0x56caaa['style']['displ'+'ay']===_0x2376e3['AhIcC'];_0x39e3ea[_0x212d44(0x59e)][_0x212d44(0x36a)+'ay']=_0x36673b?'':_0x2376e3['AhIcC'],_0x8a1c90('fold')['textC'+_0x212d44(0x153)+'t']=_0x36673b?'-':'+';}else _0x2376e3[_0x212d44(0x4c5)](_0x993778);}catch(_0x251b27){}else document[_0x212d44(0x410)+'entLi'+_0x212d44(0x314)+'r'](_0x212d44(0x28a)+_0x212d44(0x461)+_0x212d44(0x109)+'d',function(){try{_0x993778();}catch(_0x1564c5){}},{'once':!![]});})()));
