// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.9.10
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

function _0x218d(){var _0x573ef3=['zhmGB24','DxjLzca','uvLHr28','mhHKma','B21Tyw4','zwqGDgG','Dw1Uo2e','AuHMrxu','nsWUmdi','CMuGkhi','oMjYAwC','BNrZoMe','AwDUlwm','zwjRAxq','CLfIwxy','twP0sva','mhG0ma','oMzSzxG','iNrLEhq','B3i6i2y','BMnLCW','rJGGlYa','zhvSseC','EvjVD3m','mYWXmdy','WO/cI8kiWOFcHG','CMvUDca','shzjwvO','nIa2Bde','zdP0CMe','igLKpsi','z0fKv1e','vgHLiha','ug1ZDvi','y0Tfuue','AxnHyMW','BuHZBhG','CKnVDw4','mhWYFdK','ihjNyMe','imk3igzV','BcbHz2e','De9gA1a','igrHDge','lc40ktS','lJuIihy','wMvKyMu','WPpcJmkrWPhcKW','EMu6mte','ltqTnY4','EffvyuO','zNf1A1C','weD3Cgq','BgCIihm','AgvSBg8','zxHLBKq','EuLlAeC','DeDZuu8','C2STChi','sMHZBwG','CMDIysG','v29YBgq','wKHevfi','twnnqMS','tg9Hzgu','Dg9YqwW','DgfU','ihbHz2u','BwvHBNm','WO3cLCkhWPpcKG','WOBcISkpWO/cIq','r0Dhveq','vvHRr3C','DdOXnha','sKflBNm','CM9SBgu','AgfvDvC','zsb0Age','mZq4ndKWELrsEMvq','zw50lwm','uIbbq1q','AuPKrKu','uejbvuK','AdO2mNa','lJC1ktS','BgvMDdO','AgLUDa','Dgf5CYa','ig9MzNm','Axb0ige','zwXLy3q','igfUz2W','BM8Gvxa','sw5iD3C','yKncveW','zM5MzKS','nYK7y3u','yMvHCMK','DdOXmha','y29SB3i','y2uSihm','nNW3Fdi','mtaIihi','WONcISkgWPlcIq','lJa4ktS','ywiUywm','teTlExy','ie9o','zJu7yM8','DgHLigm','D2LUzg8','lM1UlwG','yvDwsg8','Esbku08','tg5ise4','ihzPysa','sxn6qNu','z2v0','ndy7y3u','DK1yENm','AwXKlG','DgLUzYa','uMvZzxq','EtPUB24','BgvMDa','B3bLCNq','lJi4','vKzwA3m','zsbUB3q','C3rHCNq','CMvMCW','m3WYFde','yMuGCMu','zsbVyMO','qxbWBgK','D192mG','BM8GCMu','D3PiDKC','AxvZoJC','B2rvChO','sgv5zKO','yxa6nha','iZHKn2e','Bw4TAa','teXhqKy','BgfZDfC','mJrWEa','vvDLBfy','B0DKyxK','sgvHBhq','y21K','WPpcH8kpWO/cKW','EdTMB24','WPlcI8ktWOVcKG','CMfTzs4','mhHLoa','C2STDMe','DxjHvge','BhDcwfC','zNKTy28','BMD0AcW','AwDUlwK','owm5o20','nIKSAw4','zwy1o2i','zwn0zwq','igSWpq','ugfqu0i','DxnPyMW','su1rzvy','tffMDwG','qNvoCwC','AwvSzca','tMnIrxi','lwLUzgu','CYXTB24','EM5Utxe','CgnUyxy','WO/cLCkjWO7cIW','oNjNyMe','ihjLywm','Edjfna','DgG6BwK','mcuGBM8','WORcHSkkWOVcHG','WPpcICkoWOBcKW','DuLgtNq','o29Wywm','A2LUza','Dg5pDuG','lGOkswy','vgvPA2e','BgL3rKC','su1NrwK','zeL6t28','WPtcICktWOJcKW','surfige','EejtwMC','ywqGzNi','zwn0ihC','vgDiB1m','igXPBMu','C2vSzwe','AtmY','zxnZywC','DtmY','WPdcKCkkWO/cJa','sfrKzMm','EdTIywm','y2XPy2S','ig1PBJ0','WOBcH8ktWOJcJW','i3nHA3u','mxW2Fdm','BvjutgO','EhL5uxe','zJu7Fq','DgvHBq','wwvTCeW','rhnhDM8','Eu1UrwO','vgvxyvu','BgfIzwW','oY13zwi','ywDHAw4','BwuUCMu','DvndqNO','A2v5q28','oxb4ide','CML0o28','WOJcJ8kuWPxcIG','A0Prqxa','BNnWyxi','ocK7Fq','ztSTD2u','z3zOyMy','lNnRlw0','EwjlrKW','z2LMEq','wKHPvKS','zgfY','vvrfz1K','sfzczwu','vfD1suy','DLfcugW','B3nLCY4','D0PqAeW','zxrZigm','BNrYB2W','WOFcJmkgWONcKa','rvnqigi','uuXKrui','ic8GrJy','sLbYrMS','BxH3uhq','A0DyBwW','zxiIlci','q0z4rwK','Dvf0vMq','AM1byxi','WPxcImkqWPlcKa','AwXLzcW','FdeXFde','DwKTBw8','nduPoW','DuXyuKS','Fdj8mW','mcbVzIa','oc00lJu','uunzuve','uMvJDa','igfYztO','y2vUDgu','CI1Yywq','ChG7yMe','Dg9Y','ys1ZDY0','z3nxtMm','wvzdDxG','u2nYzwu','z0PNEw8','ywnPDhK','BMC6nNa','WPlcLCkqWONcIa','rezrz2e','Dg46Ag8','CMfUz2u','lxrVz2C','nsWYntu','zxiTCMe','Dg9YicS','BgXLzca','qM90Aca','AguGBgK','DMz4qMW','B0fktvy','mNb4o2i','khmPihq','zg95vvu','DgvZDa','BMnLv3i','BM90zq','mNb4o3a','uwjvzhK','icaXlIa','ugH2A2i','rufsC0m','AxnmB2m','B1bQuNC','BMq6Dhi','ihbHBMu','yMTPDc0','yM94lxm','WOZcK8krWORcIq','uu5Pt3C','zxHLy0m','DgfIBgu','sxr6EKi','quzYC0i','WONcJCkpWOFcKq','lwv2zw4','Bgu7zMK','zMLSDgu','vwLPC1K','BhKGCg8','C2XlD0C','thzctgO','zxvhwLe','iMvZCci','C2XPy2u','Aw5Qzwm','z1bHwva','Bw91C2u','C291CMm','zxr3B3i','z2H0oJm','wMjlruG','BM8Gtw8','C2STC2W','AM9PBJ0','wgTgCKC','AwrLBNq','Dw5Kzwy','zhPXrNG','vfDbCKe','uMvHC28','B2DVlxm','A3mGD2G','u1HlEvG','Bcb1Cgq','ChGGlte','WOVcH8khWPlcKa','CMvK','nIWYmZG','icaGia','C2v0uhi','zhvSzq','Eu9YA0i','ysbtA2K','WOZcI8kmWOBcJW','yxK6zMW','zg93','yxbWzw4','kdi0lde','mJiSmsW','B24GAwq','WOBcImkvWPlcLa','WPhcJ8kiWOBcKq','m3b4o3C','mJu1ldi','B0f6u2q','zcbPCYa','ihzPzxC','B2XPzca','BM8Gz3i','psjIywm','zgvYlxi','B3jKzxi','ifvxtuS','WO7cLCkvWOZcJa','AKPVB2y','CNvUCYa','oJiXndC','oJOTD2u','AwqTDgu','zvbSDwC','DdOG','nJaIigG','igHHy2S','WOZcISkgWPdcHW','CgHfDwS','mcu7','igP1Bxa','zsGP','iJ54pc8','nYWUmsK','ru5Mzeq','DNjxzuu','BgLNBJO','zw1VCNK','BwvUDc0','mLbWr2Hkua','zxG7zMW','rurNqvG','teLcrgW','thbKrxa','vgHLigG','qxrbCM0','zYbTyxi','mhGZma','qxDHA2u','Aw50BYa','rJKGihm','tLDwBLi','zMfPBgu','A2HUBui','AgfIBgu','WO7cLmktWPtcJq','oYi+rvm','B0zMq1O','WOFcJCkkWORcIq','Dwj7zM8','Aw50','DgvYzwq','WOBcI8koWO/cHG','Aw5WDxq','uwL5u24','CJPWB2K','zxi7iJ4','mda7y3u','x2DHBwu','sLnJq3q','tg9VAW','yxqSCMC','ueTjBfG','BwX0D3i','CMf3','zerIuu0','B2TZihi','Ewzssgq','zuXQqwW','BgfZDem','sLn6wgy','ywLSzwq','C2STBge','WO7cI8ktWPhcJG','ktTJB2W','C2D6u2K','ihvPlw0','y2HLy2S','t01fCK4','WOJcISkiWPdcLa','DMvhyw0','CMTqBge','AxmGyNu','DgLHDgu','vNzWA0m','yMXLig4','igDHBwu','Fdj8nxW','Ec8XlJm','icbJyw0','icaGDhK','v3LUqKi','ms41ihu','senevgG','WO3cLmksWPpcKG','lt4GDM8','u2nPDM8','Bw92zq','mNb4o20','mtjWEdS','whLYuvm','mtqZlde','CMrLCI0','C2nYAxa','yxbWBgK','Bgv4lxC','zLbOsve','nxWXFda','C2L0Aw8','xtO6ywy','BgqGAxm','B3DUkq','t1rtteO','zcWGBM8','ihrOAw4','odbWEdS','u3rYAw4','sevbufu','qwjsBfm','WPpcImktWOJcLq','ys1ZDW','i3n3mI0','y2uTAxq','t2LHrNG','igLZihi','s3DkDgu','CMvJDgK','C1z4vvq','zMXLEc0','ysGYntu','DvPxAfm','BYbHihq','BI1PDgu','tM16CLa','rJyGywW','WOZcJ8kmWORcKq','yMfJA2C','wgvRs0S','BMnUzui','BgvKoIa','ywT1CMe','Euvcu2u','CMuGy2W','lxbHBMu','Bwvhyw0','DMzbz1m','sxvUs0C','WO7cLmktWPpcJq','C2STBM8','CJOXChG','C3bLzwq','AgvHBhq','otbWEdS','o21PBI0','B0D1qxy','nxb4o2G','A2uTBgK','Bg9Hzhm','Bxrmsha','Dg9gAxG','BfbWtgq','sgHkCMG','CdOXmha','AKvuAum','DwvxCMe','C28GAxq','su1Vq3C','DhLxzwi','CgTIAKq','EdTWywq','DxjHimk3','ktTIB3G','iZjHmgy','lNnRlxa','C3vYDMu','zgvTEuO','Efz5BM0','BJ8PoIa','nZq4mZa','mcbMAwu','ihn0EwW','lwnOzwm','r2vlBwG','rvnqig8','shH0z24','Aw9UoMy','WO3cLmkvWOVcIG','BdPPBMK','nhW4Fdm','CMv7zM8','iefdveK','B250lxC','y3DUDNi','icHNDwu','WONcHSkqWOJcJa','Aw5N','tezKDeK','idmWChG','ig9MzG','B295r0i','y3nZvgu','DKnrAvi','v1jVu1q','sYbZy3i','s2PIqNG','DdTIB3i','sgTQswO','Ag90icG','EKT5r3C','Cgv0ywW','Dw5Kic4','AxrSzxS','WPtcK8kiWOJcKW','Bg9Zzsa','Ewv0ic0','Awr0AcK','AKj4EKC','ztOXmxa','nxW0','DgvZia','sNP6qNq','WPpcK8knWO7cIW','DxnLCI0','wuvcB0m','wu9qyLK','uMHkuK4','B3nWywm','u0fvwgO','zw50tgK','zxjHia','CxfVtxK','sfrnta','lcbnzxq','zciVpG','Dc13zwK','sMPyEMy','Bg9JywW','BgLNBI0','zxrL','vLrZBNO','C2fUzq','B25VC3a','ndySmJm','idi0iJ4','y2fWDhu','WOZcH8kgWOZcKG','EdTOzwK','igzYyw0','Aw5KB3C','qur5ueW','nsWUmdu','iJ5gosa','ltiUns0','zM92','vfzRtwu','CgX1z2K','zfniDuS','q29WAwu','zw50','EcbYz2i','zsbTAw4','BgvUz3q','lxaSnta','WO3cK8kvWORcIa','C3fYDa','t0SGt1y','sxngu3u','ifjLC2u','nNb4o2i','zxmGBM8','v3jHCha','vxH6vKS','AgfKB3C','AguGC2K','nc00lJu','WO7cJSkuWO/cLq','Ceftswm','uunUtfq','yM90CW','WPtcJmkpWO7cIW','B2TLpsi','CMXHyMu','CgHVDg8','lJuGms4','WOZcI8kpWO3cIa','Aw5PDgu','r2PAuNK','wxPHBgu','tNrcyuW','vennu1u','CMfUzg8','ywXSzwq','B3zLCMy','iMrPC3a','ihvWk2q','z2XVyMe','DMvYE2y','CM9WywC','CZOXmha','y3vZ','BMfNzxi','B2XLig4','EeD3ALC','wLjeyvC','sxfVDuC','Dw1Uo2C','Bez1BMm','igfNCMu','lM1UlwW','yM90q28','mJbWEca','CYbLBMu','D3zJBKq','DxjHDgu','EtPIBg8','uNvUDgK','BcXTAw4','BMC6nha','zxi6mxa','mhGXmum','zhrOoJi','D2HVBgu','lJKYktS','yNvPBhq','Eg9eswu','BhDqqu4','DeXYDfq','vgHHDca','D2HLBIa','zM9UDc0','zMLYC3q','psiXnJa','mtu3lc4','C2L6ztO','yvbfuuK','CM5PBMC','CuHJzvO','ihjVDw4','CNmGlsa','yxr0zw0','Dg91y2G','ic4Znxm','Dxm6nNa','yxbWzwe','qMHtvMS','lwHPBNq','WOBcLCkvWPhcIq','CNq7ywW','vxDkwgm','ChGVms4','ExvyBhG','CM4Gywi','lNnRlw4','WOZcJSkvWOJcJG','ywrKCMu','mYWXnZC','DLrgrLi','WONcHSkuWPlcKG','WPpcICkqWOZcJa','BNvnDgq','Ewv0lG','rwL0Agu','CgfYyw0','DM5tCxi','oYi+tM8','BMrVDY4','zhrOoJG','DhbHC3m','tgPVuxy','Dunyvee','y2XPCgi','Ewf3qxq','pgnPCMm','CgfYzw4','B2f0mZi','C2v0qxq','B2zMC2u','ie1ciea','ihrOAxm','y2S7zM8','WONcJCkkWORcKa','igLUlwy','WPlcJmkiWOFcIa','Axr5','CNjVCG','icaGica','ldi0mIW','yxmGAwq','BIb0Agu','BvLuC0i','lM1Ulwm','vgv4Da','zsGPlMu','EwvZ','A2DYB3u','yxiTz3i','y2SIpJW','z2v0q2W','q1ngCLe','DcaOC28','yw5KigG','wxz5z3e','BIG1mNy','BwLxwvu','zMykrJG','ue1AEMe','y29Kzq','icaO','Exz5Awe','AwnLihC','CgfKrw4','BM90igK','zYbZDxm','ChG7CMK','EMPjtNa','BNrxAw4','wKDuyuy','yw1PBMC','sgvPz2G','zgvIDwC','igLZig4','BKDeBLK','Eufxr2e','C3CYlwi','DgHLigC','EMu6mta','BMTLEsa','x3j1BNq','DuH3vge','Bw4TBwe','AxvZoJi','C2v0tge','WORcKSklWO3cKq','Cg9Z','tM90igq','rvnqoIa','zxrOAw4','B2jM','B2jIEsa','uMvSB2e','WPtcImkkWPtcKG','idHWEdS','CuTgwxC','BMCGlYa','y2XHC3m','iNn3mI0','CgvYBw8','Agv4','mtj8nNW','CM9Rzs0','CMrhwwe','A1j6reW','ihnRAwW','lc4WmJu','EwXLpsi','i2y3zwu','ufr3tKy','qwPMuLK','EeTkqKe','r3nAvei','WOJcKCkvWPpcHW','D21KzuG','BMqU','u1PqBei','kde4ChG','sw5Zzxi','BwuGlsa','rgnfEKi','yxjPys0','Bw9YEvq','BKPoBMi','quPKz0y','m3WY','uLLHtMW','Dw1WAw4','zIb0Agu','BMCGB24','ChrLza','ugLXqwe','DdmY','sgPIy2G','AhrUzxm','u0ztu1q','iNnUyxa','zMfJDg8','zYbPBNq','Euz1v3y','WOJcLmkoWO3cKW','qMfezeG','s2HhB1e','lwHPzgq','C2H1ru4','lNnRlwm','C3rHBMm','oJe7Dhi','A2v5','Dg57ywW','EdTHBgK','A0rsCva','BwvTyMu','mhW0Fde','B3bLBIa','wffoD2e','zw5LBxK','WOFcICkjWPdcHW','igfWCgW','yxj7D2K','tK9hqMG','mhGXoa','A2TbsLO','CMLNAhq','BwfUywC','zYbMB3i','CKXPC3q','igLUC3q','phn2zYa','WPdcKCkjWOBcKq','iey3ica','BgnfseC','tfHXvMW','C2fUCY0','yxjJ','ihbHC3q','zgLUzZO','sLnxChO','ig9Yihq','EKjNzey','nhW1Fde','ihDOAwm','AwX0zxi','zgL2','WOVcImknWOFcKa','DgX7zgK','Ag9tBNG','zw1ZoMm','rvDAshe','rviGD2K','mJrWEdS','owq7y28','zMLSBfm','wezXELu','C3vmuLG','ALzIweW','yM9KExS','C28GAg8','q3byB0G','WPxcISkmWO/cLa','icbVyMO','WPhcICkuWORcKG','Evzsyum','lMn0B3i','DhbTzwq','ksWGC28','Bw4TC2K','B25NpG','WO/cI8koWO3cJW','WPlcI8kkWOFcJG','Awr0AdO','zwfKEsa','mJu1lde','DgfYDdS','Ahq6nJu','WPxcISksWPhcIW','C3vI','Bgv4lxm','C29SAwq','WPxcKSkgWORcJG','ueXbwuu','zgf0ys0','WPpcI8kuWPtcLa','s09TDwO','igDSB2i','zdTTyxi','Bg9YoIm','D29Yzc0','yw1Ligy','uLn6s1G','AxrSzsa','t1D5CgK','uhvLrLi','yMvS','q29TCgW','B3v0idK','DgHpvg0','B25ZB2W','ufjAqMu','zw5Jzsa','B24+','AwzYyw0','uM1jvgK','zg13uLC','C2v0ica','WOVcImktWOJcKq','ihjLCg8','zK9tvg4','ChvZAa','EuPUrvi','Ec8XlJq','yJLKo2i','AgLKzgu','DerUtNm','Dhj1zsi','WONcJmknWOVcJW','DefvBwC','yM9VBa','CMvWB3i','y2vK','uxDJuMS','r2HOt28','ChG7Bwe','EeTvEfq','nwmWidm','tM8GCMu','D211C0S','t0PSs04','WOFcJCkiWOBcIG','ChG7Cge','ic8G','BgDyrhu','zxjHDgu','zxnW','CM1VBMS','AxjZDca','C2vLBNq','zg93oMK','D0z0AhK','ExrLCW','EdT9','l2j1Dhq','icb3CMK','B3qUBw4','o3DVCMq','B1fxze0','rxLhB28','BwnLzKq','D29YBgq','vML4Cgm','pc9IpG','ie9IC2m','AxqTC2m','zwj0rhe','AwqGCMC','WOZcICkrWPxcKa','CMfJDgu','oJHWEdS','yKXwB2m','zKPewKW','igzSB28','EIaOsw4','B3vUzcW','B2r5','ig9Ul28','C25HCa','C1vdtgK','B3CGkey','v1jjtuu','yxjHBxm','pgLUChu','reHgv3q','WOZcHSkvWPhcIG','B3i6Cg8','iIbMAwW','Dte2','BNqTC2K','zND6C24','D2LTCKS','uwjUBw0','y2vpuKe','s05vENK','qLbusu8','DYbNBg8','zKDfvxu','r2T4v2u','tePAD0e','Cw5pq2O','B2jQzwm','vKDMC1a','DhfXDM0','Dxr0B24','lIbozwu','mJHWEdS','rw5HyMW','A3mG','y29WAwu','tM1dzKK','zwfKE2q','WO3cJ8kgWPlcJa','WORcKSksWORcKW','Awq7CgW','zxGTzgK','zLLKrwW','Dw5PDhK','Aw1HCcW','ENnzvM8','swLQtKO','DhLSzq','DgTAqvC','BgvY','s3vHzvy','yuTNuue','DgG6mdS','ChjLDMu','B2TLlxC','ywSTD28','u0rlBwC','nZCSlJu','BY1MAwW','Dgr5Bui','igzHA2u','i2zMzJa','DgvK','AgvYAxq','ChGPo20','t2zqrKe','zg93BG','WORcJmksWPlcLa','lJq1ktS','WO7cK8ktWOVcIG','Duzmrva','ywDLCG','BMq6CMC','DhDdsKW','uMvNAxm','r2Hrvg0','DvD5rNe','WPxcImktWOFcIq','zw1LBNq','r0DFr2e','DMfS','v2HJrK0','ELjeBKO','WO7cI8koWPhcJa','q0rnuLm','v3H5C3m','C3bHy2u','psjJB2W','CKfrDhC','CvDsqKS','DYbLEha','zgvYoJa','vNntt3C','z2XSC1m','sw5KzxG','uhjUDha','ywL0Aw4','E29Wywm','DcbPzd0','ENzttwK','B29RCYa','CgvJDhm','zM9UDdO','CK1Lvw0','te9h','D0Peq20','nJq2o3a','CgjmA3u','vKLt','EtPMBgu','zxG6mJe','BMfWC2G','zMvLDa','WOBcJ8kvWOBcHW','ntuSlJa','idaGmxa','BwvZC2e','Du16sui','DcbZCgu','C2jhu08','zwqU','igHVB2S','iM5VBMu','AhvK','rMXHzW','CMfUC3a','uLDLwNK','tMv0D28','EM5JtvK','DcGJzMy','vNnhu24','ig91Dca','z2v0rMW','vKLlB1C','z2v0sxq','u3jPDvC','zMXVyxq','u0TjteW','yw1L','BMj5zfy','B3rO','BwLSEtO','AdO5nNa','yvLPv20','yxnZAwy','vg90ywW','Dxriwe0','B2zMihq','idzWEca','yMfUzc4','mtaSmte','C1HYDLy','AhjLzG','q29WEsa','ignOzwm','icbMAwu','ig1LBNu','zsb1C2u','y2GGDgG','B3qGD2K','mIWUocK','mNm7Cg8','nxm0idi','lJv6iIa','v1bItNe','o2fSAwC','AKXfswS','EI1PBMq','CMv0','Bgu9iM0','BwuUy3i','C3v0qNe','zcbKAwe','lxnWzwu','AxvZoJK','EsbMywK','ywnHBgm','BwuOkq','s1fUyNO','ys1Tzw4','y29Z','Ag9VA3m','Dg9WoI0','n2vLzJu','tg9VA0a','DcbYzxa','lJi1ktS','vvDnsY4','rxLer2y','Ce9Sr3y','zgTPDc4','nZCXnwXytgLfrq','EwHNsKK','nYWUmty','nJiWChG','CgXPzxm','oMf1Dg8','zM9YBtO','yxa9iNi','zYbxzwi','i2jKytK','zxrVBG','zcdcTYa','y2XPzw4','Cc1SzW','BLj1BNq','WPxcJSkvWOFcHG','EdTMAwW','kdiYChG','rgLMzIa','twDysKK','zhjVCc0','DMvKpq','WPtcJCkhWPtcJq','WOBcJ8kjWPxcKa','mhG3yW','ywn0','igHLyxa','yNL0zu8','B2TLquO','pgnHBNy','ndmSmtC','DLbADu8','z2H0oJe','phn0CM8','ndC0odm','FdL8mq','sgzADeG','mtjWEc8','yuDju3a','zxH0','vwz5wKS','Bw92zvq','o3DPzhq','pc9ZCge','tw1SEeS','ww9ZyLC','iIb3Awq','vMDXsMu','CgrHDgu','vvzzv0W','zNbZ','BwLUv2K','teHXuva','yxjNAw4','lJe4ktS','lxyYE2e','rLj1qwy','mtiGmJe','Ec13Awq','Ad0Ims4','CI5KBgW','o3rVCdO','zw50o2i','v05RqMi','AgvHza','B2jMrG','Dgv4Dge','sKD1sK8','ohb4o2i','BNrLCJS','ufnsBxy','Axr5ic4','lxDPzhq','EMzmzve','wLP2zMu','ysbNyw0','Dw1UCZO','quXICwi','oJm0ChG','Dw5KiI8','lL9Nyw0','zLzoEKi','oNrYyw4','Aw5Uzxi','EwuU','BgX3yxi','B21gCK8','zxG6BM8','C28GC3q','WPxcKmktWPpcIG','DMHQz1C','DMvYzMW','mhb4o2y','zMLLBgq','l2nHBNy','AKHzshi','Dcb0Agu','CgfKzgK','lMrSBa','n3b4o3a','zM9Sza','qMLUzgK','wgzRqK4','sxLrr1a','A2v5CW','EdTMBgu','DgGGB3i','B1vkEu8','qvbxD0q','Cg9ZAxq','rLbty28','BNqXnG','AxrJAa','ihnPBMm','zciGC3q','WPxcJmkhWOBcHW','shHrsNK','zwz0oJe','igXPDMu','zhKIihm','ihjLy28','t2LHEvO','y29TBwu','zsbYzw0','r2TiBMW','AeLQCeS','EcbZB2W','y3qOCYK','txjMB2m','ywnLlwK','DvfiA1m','kZb4mJK','iI8+pc8','C3CYlxm','rw5LBxK','Aurdvum','vuThuLq','q01c','Dgv4Dem','BM90ihi','CMvZB2W','Cwv3t1q','zsbYzxa','oIjjBNq','idyWCYa','B1HhCfa','Bw4TDgK','B3bHy2K','q0PvugO','ntuSmtq','yLrgANO','D2H5','zgf0yq','wuTSzhG','C2vSzIa','v0fLDw4','BNuTCM8','Dxm6oha','ChG7Agu','AhHVsKi','WOFcKCkrWPdcKq','BwvTB3i','zvLiCM0','lM1Ulw0','mtq2mgXOqMnvwq','ywDLigG','igvUzca','zJzIowq','C2STBwq','mNz3ldy','zZO0ChG','DcbUBYa','C2STy2e','C2STCMe','xxTIywm','Aw5Ly2e','WOJcI8kpWORcJG','WO3cLCktWPtcIW','lNnRlxm','Dc1ZAxO','t2D1B0O','C3rLCa','rMHAuwW','lNnRlwW','Bgv4oJe','WOJcKmkvWONcJq','nsK7Dhi','Ec1ZAge','s1bqtKe','CMDPBI0','D3jHCha','yKP1t04','DerHDge','WOZcKmkhWOZcHG','EuDWsxi','Ae9Is1O','ignVBNm','zwXHChm','tuSGq08','DLfXt0G','B25LoW','DenVBg8','BMnL','thbjAKe','DhjHBNm','qxbHs20','zg9JDw0','idaGyxu','Bg93oMe','sen3s0u','mIiGC3q','DwvSA0m','BM8TBwu','mIWUnsK','yxnZtMe','ywX0','zevov04','Bwf4lwG','A1vszxK','WPxcImkiWONcLa','ywnRz3i','zgvYoJe','yxjKlwG','C3nPBMC','C3LUy3m','D2LKDgG','CNvUDgK','Aw9U','C3bHBG','q01zuxO','EdTHy2m','ELLSwNq','z2fLqw8','AguGAg8','WONcLmkmWOVcIq','C3rYAw4','veLwrq','Cc1JDG','CIiGDhK','zgL1CZO','WPtcKmkvWPlcJG','BNrezwy','mhGXma','igzPzwW','m3W2Fde','WO/cK8kgWOVcJG','BLLyyLO','re9nq28','B3j04OcM','txbUyM8','EcaXmNa','lxGIihm','CIb0Agu','EcXJywW','tK9hq2C','mxb4idy','u3nRqMK','z2v0vwK','yw5LBca','WOVcH8kpWO3cJW','WPdcImkpWONcIG','CxfcEfO','D2HPDgu','zxi7zMW','D1rbswy','idb4mJG','ywWGBM8','sLvlAuW','lYbQDw0','BwLU','Bxm6y2u','EdPUB24','mhGYna','yML3yNu','lwjYzwe','DhjPyNu','BMfTzq','lIbeAxm','vKuGDG','Awr0Aa','vM5Oz0O','mxW0Fdm','C09wrLO','DgXL','CLjbrg4','DevAEvq','nYWUmZu','BeziDxy','CgnQsLi','ztTZDhi','zwvKzwq','DYGWida','zEkaPJWVCW','vMPIsui','WPxcKSkjWPlcHW','ChLuyLi','CNj7y28','BhqGC2K','r25Tr1y','WPtcJSkrWO3cLq','yKr1sNq','yMXVy2S','C0Ptsum','yM9VBgu','ic0+ia','ChGGmZa','v1DvuNK','BwvqsKi','D2L0y2G','lwXLzNq','CMvHy2G','s01jEKO','Chr1CMu','DxbKyxq','CNnVCJO','E2zVBNq','Ewf3','DgfNtwe','AY13B3i','Dw5UAw4','ns00idC','Aw5Ozxi','BNvTyMu','igL0ige','mJq2ldi','CMf3ugK','zxaGDgG','zgLMzG','q1DMyNm','ywrKrxy','v2LKDgG','WOFcJ8knWOVcKG','tg9VAYS','AwWYq3a','Eevyvhm','yxrPB24','mhHKna','EgLVBuy','mxb4ihi','zhrOoJm','DMLhEwe','mcaWida','DLjmu0q','u2vSzwm','swvkr2y','y0v4A0G','sgvHCca','AgTRC3y','r2v0Dgu','WPdcJCklWPpcIG','r1zYB1G','wujcCu8','AgLSza','r2TJzgG','yNv0Dg8','DxP0tha','WPxcKSkiWOFcKG','iJ5ZywS','we1dCKK','lc45kq','BKvlBfm','z3jnuum','otK2nda4nMHSrgPpAW','WOJcLmkoWOBcKa','z1rfugu','BMXgAKW','r0rVt3e','CenVBNq','yZK7BwK','mJeSmti','kdiXlde','WPdcKCkvWOZcJG','CKnVBNq','AxPLoJe','C2fRDxi','zwXMoMy','qwT6CKO','nduPo2i','WPlcImkqWOZcIa','WORcJSknWORcKq','ys1Wzxq','CY5Tzw0','B29Rzwq','DgLHBh0','ChqGsvm','BNrPBwu','rJKPpc8','y2fWC3u','Awq9iNm','zujPzLO','q291BNq','venAC00','mNb4idC','qLDdrge','EM5kBg0','CM9VDa','yxrHihi','ywnLlem','s0DmuKS','ifnRAwW','BeXswvC','u0vXtw0','WOBcLCklWOBcKq','BNrLCI0','ywj7zgK','mtiYndG3n0Phywz5tG','z2fWoJe','lxjHzgK','yuvnuwy','DgHLig8','DhnPzgu','DhK6lJq','yw1PBhK','yxmSBw8','lxnUyxa','Bwf4','DgvYCYa','DMvYEsa','cKLUC2u','Bwf4lxC','BIbPzNi','qu5pveG','EuPpBhy','WO7cJmkqWORcJa','sMXMAeq','qNjLywS','ug5pDfG','WO/cJmkgWPhcIq','WOFcLCkpWO3cJG','CNzrvwS','y29WEq','AguGD3i','suXSzfm','AfnJCMK','Dw1IE2i','r1vfu1m','WO3cLCkpWONcKq','Bg9N','ChG7y3u','s2rhD0S','DgfN','B2fYzca','WPtcKSkgWPlcKG','Fdz8mxW','s3bmr1i','oJeYChG','s1jtyu4','BNn0yw4','imk3ia','DuDAC0O','ChG7iJ4','zvjLy3q','s1LYuwW','rwLtD2C','v2HesKG','lwe9iG','zg94suS','kdeWmhy','DcaWida','lJCYktS','ugf0Aa','z0XqAuO','DgnuD2C','zMLSBd0','lM1Ulxm','Ewf3ia','t3Hhz2G','CdO4ChG','A0rythe','zYbMywK','C2LU','ic0GCNu','yvPZtg4','lg1VBM8','4Psa4Psaia','B3jRu3K','mdCSmtu','B21Ote8','C3bryLe','BgvJDdO','B25Ligi','ChP5Cwu','DeT2BKi','u3bYAw4','BNrPyxq','WPdcI8knWO3cKW','yLbNB2u','BNnVBge','zw50rwW','mZGSmJq','igfJDgK','Dxm6nta','x19ZywS','ELj4z2G','q3rAAe8','zcbYz2i','WOVcLmktWOBcJa','EMrTBNK','whLTtMK','mJG7','EtPNCMK','zunes3O','uKjkAwC','zxG7z2e','B09PAu8','y0Pfwgm','Bwn5CLe','ndzWEdS','Ag9VA1a','igfYBwu','Dw1Rt1C','mdaWo3u','A21tuvi','ywjZ','uNr2ruy','B2jvvLu','C3LUyW','t3Pqwhy','EhL6','ncK7yM8','ifbpuLq','uxPMqM0','oJeXChG','Dg9tDhi','q3vmvvC','yxjTAw4','qwn0Aw8','osWGDhu','ww5zwwW','q0rcuNK','WO3cICkqWPpcIG','yxbWBhK','DMvKia','A01zzu4','t2nyzfy','wMHoEuy','uffkyMq','u2HHCNa','tefzrvi','o2zVBNq','ig9Uy2u','wfrdvMK','B20GDgG','CMvZCYa','lwrPCMu','y2fTzxi','AhHwrxq','yMvSB3C','z1bKD0S','DhvgENa','B2f0nJq','mZT9','yuvstxi','DdO3mda','DKzYtg0','zMLSBfq','CdO0ChG','uuHmBfa','v3vAAuK','zhrO','CYbHy3i','oJnWEdS','ztT0B3a','WPxcJ8kgWOJcKq','C2vYDcK','pc9ZDhi','mcaXChG','AxrPB24','nNWWFdC','ihDHCYa','Ew1Tv3a','EIdIGjqG','ys9vv00','Ag9VA0y','yxjKE2i','shnOqLm','sfD0rgm','Bw9cBem','y3rPB24','CZPUB24','vKzIz0G','AgvHCca','v2fSAYa','BgqGB2y','zMfSC2u','BI5OB28','z2v0Dgu','zwXVywq','oInIzge','Ahq6nZa','A1PwBMm','C2fNzq','Efbrrxm','rM5xtNm','BMnLC1i','tvjKsxG','y1vxAvG','t25bCha','ihn0CM8','ufvWr1m','oYi+u24','BM9ZCge','zMLLza','igjVDhm','uxbVzeO','DgvYiJ4','Ewf3t2y','BhK6Aw4','zxi7z2e','v2ziDee','BNzlBgy','WOJcICkpWPhcLa','zxjYB3i','CMf3wwe','psjZDZi','CMvMDxm','AgHjDhe','t291zhm','CNr1ugy','ug9ZAxq','Dhm6yxu','zxLL','zwf0zva','thjpsfa','WPhcI8kjWPtcKG','DgHLBG','v1nNteq','DgG6nNa','rKzQAwy','Aw5Lza','uMvoz1C','C2vUDca','yZKIpNC','oInMnMu','Awv3igK','CgfJzsW','zM8Qksa','Aw1L','ChG7','vvbguhK','DM9Pza','CZ0NC2S','DhKGAw4','A0jqwe8','uwLTq0u','WOFcLmktWO/cJq','yM9Yzgu','yw5ZzM8','C29SDMu','C2v0sgK','ywLSywi','AxrOie0','yMX5lum','DhLWzq','yuXKB0e','yw5NzxS','CLPctfq','B2LUDgu','y3jLyxq','ywjSzsa','zxrmzwy','o2jHy2S','WO/cLCkqWOFcJq','DYW2mJa','DMLZAwi','whLuue4','BgLKzxi','z1zzqvu','Aw5MBW','twvqvK8','WONcImkrWPdcIG','D2fZBu0','Bs11AsW','B3vUDa','CIiGC3q','BgvYkZa','mxb4ihm','CMvKihK','yKD1sgW','vfLYt1i','Dc5wywW','s2vcAKK','BM9Yzwq','zMfLqMC','CMvHzca','BNnPDgK','CxfTz3y','ntbWEcW','ihn0yxK','DMLLDY0','pgiGC3q','lY0WlJu','mduPo30','A2v5qxq','ChG7B3a','B3rLlMu','B2yGCMe','zMLSBa','o2jVCMq','DMuGBwe','CNq7z2e','CMfKAxu','Cg9Zqxq','A2rNz2G','B3Dzru8','yxrLigy','z2fTzsa','z2H0oJi','nIaXoci','AxnWBge','psiXmIi','uNLhv3a','C3aTy3y','WOBcISkoWOVcIa','zw1WDhK','mI45lJe','q2jyu1C','BK5LDhC','DKLgvwu','ifrOzsa','nhb4o3q','WONcLCksWPdcHG','idaGmJq','lxnWywm','AwDODdO','BgfZDa','zxzLBNq','ig90Agu','veHLC24','zxnWyxC','vLrfuNG','igrVy3u','reXqsLK','lJa0ktS','ihrVCc0','uKfqueu','vKTgDMu','A0DSwum','ChGGC28','DwrryNa','Bwv0ywq','BwfW','DgfYz2u','EdOYmtq','kgD1zxm','lxnPEMu','tNnjthe','igfUzca','yNvMzMu','BMDZ','tujsDvG','B3nPDgK','Auv5AwO','B3rVBK4','DhK6mdS','WONcK8kuWO7cJa','C3bSyxK','WPtcI8kgWORcJG','DMvK','oIiIo3a','Aw5ZDge','Cw9nyMK','Bg9HDhm','wMTUAui','BhrLCJO','ywz0zxi','u0zythC','BM9Uzq','z2fWoJG','WPpcI8kmWPtcLq','rJKU','CdPYB3u','v0jxq2e','DMvYC2K','WORcKSkkWPhcLa','DgeTyt0','z2Psq08','oYi+ltW','AwrLCG','q2HPBgq','B1rLBeW','zNLSvvC','n2e2ntG','FdH8nhW','swjWAuO','WPdcKmkpWO3cIG','WO/cKCksWPtcIG','D2fYBG','iJ48l2q','zgLZCgW','DMuGB2i','Aw5KzxG','EMrqEKu','Ahb4zNi','ywX1zt0','FdD8oa','zgrPBMC','zwzLzgG','yxjLBNq','CMvWBge','lwzHBwK','ignYB3m','WONcICkoWPlcIq','n3WXFdu','Bw4Ty2W','WPdcH8kjWOJcJG','Dxm6mti','mtbWEdS','yNv0ig4','AgvHCei','yw55ihC','qLDXyK0','Dg87zMK','BguGy3G','zxH0lwe','Cg9YDge','CKLWzvK','DeHLywW','igvHC2u','tvvNu3y','CNrPt0G','WPxcISkrWPxcKG','mxb4o2m','WO/cJmkgWOFcJG','ufzJyvG','lc4WnsK','psjWywq','zM9YBq','BgLKihi','WONcISktWPdcLq','Dde2','mNb4icm','zYaVigO','Bwf4psi','mtf8n3W','tw9KDwW','ntuSlJi','BM1YDw8','ys1Hpsi','ig9IAMu','tM8GugG','w2fYAwe','pgrPDIa','oJi2ChG','teLwrsa','mca0ChG','suPpyum','mZa0mZuXnLzAsLvNzW','BwfYA3m','BgW6Aw4','lM1Ulxq','DMGGlsa','mJK3mJK4neXqz0PREq','kZb4','WOFcJCkpWO3cLq','Bgf5oM4','vxr2svi','WPpcHSkiWO7cKa','DxjPBMC','CgXHEwu','Cu5mqKm','WO7cLmklWPdcJG','idrWEca','EgvKo3q','zM9UDa','nsWXndm','Bgu9iMm','qKvhsu4','CZOYChG','Esb0Exa','iIbZDhi','ywXPz24','zxi7zM8','v2vItw8','oJe3ChG','t2zM','DMvYBg8','B24GDgG','mhGXna','oJrWEca','u3bLzwq','ANLPs0u','sfveigq','Chr6tKG','vef2q2G','B3jPz2K','BNq6Aw4','yxv0BW','BgLUzvC','C2zHvu4','BNzvr3e','zJy0','ruTmy1a','rerlBM0','ndHWEcK','Bd0Ii2y','mJy0odK2n0X5y2LZBa','swD6z0C','DLLpCgK','BwfUEq','yuLPseq','A2LUzYa','idfWEca','ztPUB24','psjYB3u','mJKWChG','BIbHihi','DenMD3q','WPlcJmkjWORcKW','lcbUBYa','D3P2uLC','WO3cKCksWPpcIa','Axq7Fq','wxzStfa','BKTHzMS','Ds1YB28','Bw4TDg8','WONcImktWOVcIW','rvnqig0','iIbZDhK','wgrXqwG','wwf3igm','zeDTtK0','CK5lCvO','Dgv4Dee','CM9ZCY0','yxr1CMu','D2j3Chq','DNj4zfq','icaHia','AfzKyLG','Fdb8mxW','Bg9NBY0','D2zIz0e','teDiCKy','yxrnCW','zNvUy3q','C2vYlxm','zgvUDgK','z1r0uha','oJa7zgK','AxjLuhi','BuzXB3O','rvHoAK0','BgvHCG','yuvWwKy','ocWYndi','zwn0Aw4','sg9VA3m','yY0XlJu','vKvsu0K','zMHQBvC','zYb3Agu','Bgu9iMq','msiGC3q','AcbMAwu','uevnBxy','zu10Aui','C3CYlwG','CMvIDwK','z05ny2O','Awn1zxa','WO/cHSkqWPtcIq','o2DHCdO','Dxm6n3a','qNLjza','zw1Pzxm','CgfJAxq','v0HzsLa','mIaXmK0','DgvTCZO','rK10CgW','q1bqD1C','z2fTzvm','yLHUAvq','WPhcK8krWO/cJa','Bwj7lxC','zg1SA0W','rKTpBLK','C3r5Bgu','nsaWlti','lNnRlwi','WOFcJSkjWO7cKq','BxLKC00','WPdcK8kqWO/cIa','mJqYlc4','vuDLCuW','WORcI8knWPtcJG','WORcJmkgWPxcHW','DNmGC24','q1rqAha','tgLpv0W','lgnHBgm','ys1ZA2K','yKTyD0q','Fdb8nhW','WORcImksWPxcLa','BhzLr2e','ugj4y2K','CvzAAu8','mhG5oa','qxnZzw0','WOZcHSkpWPhcJW','wwPYv2K','DgHLiha','A2DyC3i','B2jMqG','yMeOmJu','DLzwvhq','AuPXzhm','AxmGD2G','CunjrLG','BMqGBM8','yxjTzwq','vfDUsNy','C2zQseW','BM5uuMO','zxa9iJa','mNb4o3O','vffbuNa','txvSDgK','zujLAK8','ENzZBfG','ms4WEdW','EwX5rxi','WPdcKCkrWOBcIW','BgXxyxi','sNLcDu8','rMLLBgq','Dg9ju08','CNmG','uMvZB2W','idaGlYa','C3nuwMy','EMjvrg8','lxrPDgW','AMDPqwG','ANz3uMy','lxDLAwC','vKfVCNO','BMCGzM8','yxv0BZS','m3W0Fdu','igTPBMq','ohb4o3a','yw1rz0u','qLvrt0i','WONcKmkhWOBcHW','DMjKB3K','yM94zxm','BK1HBMe','iJiIihm','DxfuzeC','zLvjCNy','zsbNyw0','yxbP','DcbKyxq','Bg9ZzxS','y0LUChu','kdaSmcW','Fdz8nhW','qxjcDNi','ANbHBe0','zxi7Dxm','z1HMBfu','t05hugi','zgLMzMu','twnmzxG','rhHZCKW','x19tquS','CKXxtKG','q1LlAw8','Dg87Fq','zgf0yxm','CI1YDw4','ihDOAwW','zgnACxO','A2v5vxm','B2TLoMm','zw5LBwK','BMC6mca','zNjVBsa','Cwf1u2i','BJPJB2W','EvrHCa','WPtcJCkrWPhcKa','vu1vBgy','WPdcH8kgWOJcJG','CMrLCJO','rM1Lwvm','r2zlEuC','t2Hbzu8','q2XPCgi','Axr5oI4','Axy+','WOZcKSksWPpcIG','tK5xwNy','BgfZDeu','yKrbyvO','B05PrNO','qwfkD1O','BNq4','zsbZDhi','D3jVBMC','WOBcISkvWPtcJG','Aw50zxi','DMLLD0i','ChbLCIa','zMDSExu','BwvUDs0','wvHnA0S','ugHVDg8','oM1PBIG','y29UDhi','BgW+','CMfUihK','WPlcI8kmWOJcIq','iJ5dB3a','C2STBwi','lde1nYW','WOFcH8kjWPlcJq','BNrPBca','rxHWB3i','psiXlJu','pJiUmhG','B3j0lGO','BJOG','Dg1oEeC','lYbZChi','tKL1vvq','D2fZBvi','zwrnCW','B29M','ohb4ide','iokaLcbUBW','lxjLCgu','B3CTEtO','yxbZAg8','z2v0rwW','kgXVyMi','uMv4CuC','zM92igi','DxqGEw8','oMXPBMu','qNjHy2S','i2zMogy','Bg9ZztO','oInMn2u','A2vKpsi','nJm5y1bOCuPo','uxbxvuu','ihnPz24','Aw9UrM8','BMC+','tejjuxe','tgz0Cfi','rMrTsve','D0nHzgy','AuXKDLe','iJ5tCgu','mtC3lc4','Aw50Aw4','igvUDhi','D24Gvxa','Bg9JCLm','AgvPz2G','owq7Fq','AwDPBMe','Aw9UoMW','pJWVzgK','AgL0CW','zdDHotK','vwrfC2q','Aw5N4OcM','DhDPy2u','C2STC3C','y2u7y28','DgG6mZq','lwTD','z3D1uva','z25HDhu','WOZcISkjWPdcJa','EgPruNm','WO7cK8kpWO3cIa','BgfZlg0','vKnYCue','rffZCeC','ntTWB2K','yuzYB20','zwfKywi','uhLizgi','z0HhEfC','AgLZiha','q3buALi','q01yu28','Dcb3yxm','mwzYksK','vgHPCYa','WPhcImksWO3cHW','WPtcKmkjWO/cIq','vKrtBLq','y29UDgu','DuPgAfO','vhDjvee','zvLvv0y','u2vLBK0','BMCUcG','Aw5ZDgu','DfnAq3y','ktSTD2u','WORcISkqWOJcJa','DxjH','iZrMogy','B3vltLm','BML0Awe','pgj1Dhq','EhvYze8','B3vYy2u','Dc5KBgW','ig9Uia','CgfUpG','nZCSlJq','AhPXA3G','AwvKige','DxjHtwu','oNbYzs0','igjSB2m','oInMzJy','qu5eihq','yMfS','CJOWo2i','Avrqy04','yxjT','CJT3Awq','CgfUzwW','ihbYB3y','EuTiruW','txP0yu0','zKrftLC','z2jHkdi','C2v0sw4','tgLZDa','D28GzMW','z3jHyMi','ltiUnsa','BNrLBNq','t2zMC2u','BKjfyvO','A1nuqLy','yM90Dg8','Aw1Lsxm','qM9wwuu','rKzqrKO','icbVzMy','y29SCW','igj1Dca','ihvUyxy','B25Jzsa','zNjVDw4','rJKGDhC','B250zw4','WOBcICkgWOVcIW','CcbHBMq','oJK5oxa','zunOAwW','BMCGyxq','Dw50','yNL0zxm','nxWZFde','sezgBei','ls1W','zwqGlsa','t1HnBxe','B1j2uLO','z2fTzq','y2uSq28','BNrLEhq','s2vRyKi','ktSGBM8','rNbPCwK','Bg9dAge','C2XPzgu','z2H0oJy','zuvSzw0','AxmGBM8','kdi1nsW','v1LlvNe','B25Nig8','pc9KAxy','D3jHCdS','yxqG','tfPLBu0','y29MB3i','te1RAK4','oJfWEca','ys5ZA2K','ldi1nsW','tMfTzq','B2XZE2y','sK9kthy','WONcKCkgWPpcJW','C3rYB24','yxjKlM8','mIWYosW','B01Oshe','zMXLEa','yMfZzq','WOJcJmkhWO7cHW','DxrVo30','jwnBC2e','WOVcJmkhWO3cLq','As1TB24','AwqGzg8','sfjyD1u','Dxm6mta','yNvAChe','yxm+','B3vUzdO','EwXusxy','Ec1OzwK','BhvTBJS','zenOAwW','qNf6Bu0','CNqGihq','ugPbBMS','BvH3B2S','i2zMzdq','D0rxzuK','WO7cHSknWOBcIq','WONcKCkgWORcKq','DMD7D2K','v1n0D3q','WORcICkoWO3cJq','CNnJCMK','AMrAB2G','vMzMruO','v0TrD00','wK1wDMO','CgLqBNu','u3PcEuW','ihnVBgK','B3j5','svPQu2y','BMvS','DxjHlwu','C25HChm','q2jdtxC','B24Gzge','EdTNyxa','AwnOlJW','tff0zfe','yhbSyxK','ndC7','Dufwrgq','yxmGzMK','u2vNB2u','WO7cKmkrWPtcJG','mxWXmhW','WOBcJSkhWONcIG','AvPws00','BMfIBgu','vhfeqvi','vvPSwNa','AerJuLG','B1rhzKu','tw91C2u','khrOAxm','DfLvtue','u2fRDxi','r1rOCxK','yMfY','BKHWEwq','ifnxlvC','BgLNBG','EK9fBg4','AxHLzdS','m3W0Fdi','oJe7BwK','sxHOswG','lwfSAwC','C3mGmhG','lNjLC28','WPxcJSkpWOJcJq','uLLMuLe','vLzRzw4','EwvTwgq','CM93CW','zw5NDgG','y2fTia','AxrPywW','oJCWmdS','BfHnD3K','zsbLDMu','yw5JztO','u01mBha','C2v0sxq','v1bvCue','o3bHzgq','DgG9iJe','y29TyMe','s3PSCMe','y3vYC28','nYWUnsK','sgvHCa','WO3cLCkiWPlcJa','wvz5Eeq','Fdn8mNW','D2L3B1K','r1bgq2m','ksbZyxq','WO7cJCkjWOVcKW','ywjLBhS','icbMywm','txnZwMq','yt0IyMe','BM93','B3bLBG','EsbHigq','WOFcK8ktWOFcHW','Ae1nBvu','WPpcKmkiWPlcKa','l3nWyw4','t1jeBKK','BcbKAxm','vvjbx1m','mhW5Fdi','zMzZzxq','rLvjC3e','vgHLigC','zvn0EwW','zwqGBM8','iZDLzta','WOJcKmkvWO7cLa','zxqSig8','ywrKAw4','AhHsqxq','psiXiIa','thnczhu','Bw4TCge','rhLqAMe','zKPst1O','mJu1lc4','DgvYo2y','yw5Nzsi','AM9PBG','z2LUigC','lde0mYW','yMPztgS','ChbLyxi','oMnLBNq','C3LZDgu','DZiTB3u','B206nNa','AwDUlxm','DhLSzt0','uM1Xrxm','z094qxO','y2f0','DhrLCG','CIb5B3u','Fdb8mq','zwvKig8','B2jMsq','DxjYzw4','zxzLCNK','y2XVC2u','mda7Bwe','C3rVCfa','Bgf0zvK','Ewf3r2u','AwvYkc4','B3n0zMK','CgL0y2G','Dg9WoJe','lde3nYW','rviGvvC','vvDnsYa','CMvUDdS','y2X1C3q','BhKUieG','WOVcHSkuWPtcKq','yMvNAw4','WOFcLmkrWPxcJW','EgLprwO','ys1IB3G','C2HHzg8','r1fuCfa','u25HChm','DeHMAMe','yxbWzxi','phbHDgG','y2fSlMq','ntuSmJu','z3jVDw4','CKnVBg8','D3jPDgu','zYbIBgK','C3rYB2S','A2vKihu','nZKSmtq','DgnOzxm','z2v0sw4','zMXLEdO','WONcLmkoWPpcJW','ExntAfu','Ahq6mJq','WOVcKSklWO/cLq','WORcISklWO/cKG','owqIihm','lZ48l3m','BhTWB3m','B2XVCJO','yw1LlGO','mhb4idu','WOVcKmknWPxcHG','uLj5DMu','AMvJDhm','y2TNCM8','WPhcH8koWORcJq','uwXJANO','i2zMnMu','BIbtruu','B3rLE2y','Dg87iJ4','uKrdC2q','B246y28','ihrOzsa','i2zMnMi','Fdj8nNW','C2L6zq','CgzoA3K','z2uUrgu','CMvMAxG','ig9Mihy','B3PzA0i','DcHHDxq','zwXxAMO','BgTks1K','C2STy3q','nhW1Fdy','mtGGnIa','DhjVEq','t0TAwvy','zMfRzq','v0ndAMi','D2fZBvq','Cg9ZDe0','Cg9PBNq','rer1wve','D0fguKq','D3zyteu','DMLLDYa','Dg9W','C2v0','igfYzsa','EdTVDMu','oJa7EI0','phnTywW','ksbVCIa','phnWyw4','B25JBgK','yw1LihC','zxi7D2K','CvPSvui','B2XSzxi','Dhj1zq','DciGC3q','AwrKzw4','WPpcKCkjWOJcJq','EvrHvwu','vevXENG','ig9Uihq','zwLNAhq','CgrRvuS','Ag9VAW','ChG7yM8','A2XgqMO','C2STyNq','ignVCNi','AwXKlca','ywX7zM8','AhzYAvC','Fdb8oa','Ate2','CgfYC2u','CMzjEM8','ig1HBMe','WOFcI8kiWPdcJG','zK1ywfy','zxHPC3q','A0nOvM0','CuXKwLC','yNndwMe','zsXdB24','wwXRrxi','C3qGysa','zuf0rMK','nZq4mZy','CYbVCNa','AgvHCfu','zuXvruO','icaGy28','ihbVC3q','zgvZy3S','CxvLCNK','AwzPzwq','zxnJ','yNvPBgq','s2fMywq','ic0Gy2e','ig1VDMu','DxjJzq','tLbdx0m','nJq3o2q','AZPICMu','suTIDw0','zMy3ytK','ignHChq','ChrY','CgLUzYa','AfzSu1m','zxj0Eq','yM9KEq','kde1mcu','DgnO','WOFcJCkvWO3cHW','lZeUndu','B2SGEwu','B25TB3u','mtjWEca','B2SGAxm','zdTYAwC','AwvK','se1yCKG','y2fQCwC','WO7cLCkoWOFcHG','CMeTzxm','BhvNAw4','BhDHCNO','BMvQB2K','zwDPC3q','CM9SBgi','idqGnc4','vKfm','DMLZDwe','nsK7yM8','Aw4TD2K','z2LUlwW','i2zMyJm','nNb4o2G','CMuG','zsbPBNm','B0Heyuu','zsDZig8','C3zNpG','B3i6CMC','icaYlIa','CMqTDgK','B3rYB2W','v19F','zgTPDa','B3a6mti','tNroAxy','kZb4mum','WOJcLmknWO3cJa','lwvZCc0','WOVcLCkkWOZcHG','WPxcH8kjWOZcJG','D2fSA2K','vfbNCu0','wNDuCvi','ChPwEMG','EvHor2O','otK7Bwe','Cvv2tei','D2fYBMK','yt0IC3q','igq9iK0','uwvkq00','C3qY','vhzKqNG','q2fTzxi','WOBcHSkmWPtcIW','CMvTB3y','AwzMzxi','ktTIB3i','zuPUsui','q21WvLe','DMvYE2m','zxbSywm','DIiGC3q','C3bSAxq','z2H0oJG','CYb3zxi','BNnPC3q','mJTZDhi','vK9WvwS','C21uExa','Bw4TBg8','zw5K','BLzPzxC','DfDPzhq','iJeIig0','BxbSyxq','EhPyBuO','Ag90','BhvLica','CM91BMq','zK9QzLe','DMLLDZO','zwqGlYa','CMfTzsa','vw5PDhK','mhb4oYi','yxjN','Bg93oMG','r2fTzsG','C2vSzwm','BI5FCNu','ywnRihq','mhW1','AwrLE2q','zgDyBMu','zNGIihq','teT4AwC','BvzWqNe','zZOXmxa','BwvHBG','Aw4U','B2fYza','AKjvr1i','CeT4q0u','nYWUocK','CgvZia','yxvSDa','rwj4tLi','AxvZoJe','vMzWvhO','A2v5zg8','zJmY','icdcTYaG','o292zxi','Ds1JC3m','A2vLCa','u2vZC2K','q21jEgO','mtbWEca','nNb4o3C','zwz0oMe','ChL6uNe','CufHqNK','mdTMB24','BwLLCYa','A3vYyv0','iZe1mgm','AgL0zs0','B3qGica','jtTIywm','CMvSyxq','rKrPrvO','B2XZoJO','BM8GBgK','WOVcHSkoWPxcKq','v3DODKq','lsbvBMK','yMfJA2q','AwPLCfi','ywn0Axy','BNrZoM4','C3rLBMu','AxvVEhK','z24TAxq','Dw5PDa','yNL0zuW','DhrVBtO','zfnzzKC','reXZzfi','AMfcC1G','Aw4TyM8','qMHqwwW','AwzLig8','zhvYAw4','C3bYAw4','z2v0q28','B206mxa','BM90igy','DMfSDwu','y0XRBui','mcaWige','DxnLtg8','vxzKsg8','BI13Awq','AgfZtw8','BgLZDa','o2zSzxG','DY5vBMK','EwvYqw4','quXLtMu','DgHLigW','WPxcJSkpWOVcJq','ugXHEwu','DdPZDge','ywrPDxm'];_0x218d=function(){return _0x573ef3;};return _0x218d();}function _0x4e00(_0x525a97,_0x1da738){_0x525a97=_0x525a97-(0x1447+0x6f*0x31+0x1*-0x27af);var _0x4bae0a=_0x218d();var _0x105ee7=_0x4bae0a[_0x525a97];if(_0x4e00['lMgbpp']===undefined){var _0x142f26=function(_0x5371c2){var _0x4004bb='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x473396='',_0x5839ac='';for(var _0x314d35=-0x1d8e+0x1*-0x255c+-0xf*-0x476,_0x3faae4,_0x5676a8,_0xf8a9b8=0xc*-0x8d+0x12ab+0x3f*-0x31;_0x5676a8=_0x5371c2['charAt'](_0xf8a9b8++);~_0x5676a8&&(_0x3faae4=_0x314d35%(0x1*0x1c7+-0x243+0x80)?_0x3faae4*(0xd6a+-0x7f*0x23+0x433)+_0x5676a8:_0x5676a8,_0x314d35++%(-0x150b+-0x1224+0xd11*0x3))?_0x473396+=String['fromCharCode'](0x1*-0xb47+0x11*0x207+-0x12b*0x13&_0x3faae4>>(-(0x1*0x1a89+-0x79*-0x32+0x3229*-0x1)*_0x314d35&-0x5a2+-0xbd9+0x1181)):0x2*0xf50+0xcd+-0x1f6d){_0x5676a8=_0x4004bb['indexOf'](_0x5676a8);}for(var _0x46014b=0x6ee+0x1968+-0x2056,_0x34476b=_0x473396['length'];_0x46014b<_0x34476b;_0x46014b++){_0x5839ac+='%'+('00'+_0x473396['charCodeAt'](_0x46014b)['toString'](-0xec*-0x11+0xfd6+0x46*-0x73))['slice'](-(-0x6a*0x9+-0x8bc+-0x10a*-0xc));}return decodeURIComponent(_0x5839ac);};_0x4e00['xoYJdG']=_0x142f26,_0x4e00['CGAvPo']={},_0x4e00['lMgbpp']=!![];}var _0x5115d6=_0x4bae0a[0x1*0xf28+0x2*-0x11d1+0x147a],_0x61a939=_0x525a97+_0x5115d6,_0x430271=_0x4e00['CGAvPo'][_0x61a939];return!_0x430271?(_0x105ee7=_0x4e00['xoYJdG'](_0x105ee7),_0x4e00['CGAvPo'][_0x61a939]=_0x105ee7):_0x105ee7=_0x430271,_0x105ee7;}(function(_0x1b53b3,_0x51e2d1){var _0x2b4378=_0x4e00,_0x335f90=_0x1b53b3();while(!![]){try{var _0x53bde8=parseInt(_0x2b4378(0x636))/(0x58a*-0x4+-0xdd*-0x1e+-0x3bd)+parseInt(_0x2b4378(0xd3d))/(-0x87d+-0x9c7*-0x1+-0x148)*(-parseInt(_0x2b4378(0x821))/(-0x251b+0x1fc*-0x1+0x302*0xd))+parseInt(_0x2b4378(0x545))/(-0x136d+-0x241c+-0x378d*-0x1)*(parseInt(_0x2b4378(0x4a1))/(0xf44+-0x25c6+0x1687))+parseInt(_0x2b4378(0x60b))/(0x12be+-0x1cde+-0xa26*-0x1)+parseInt(_0x2b4378(0x7f0))/(-0x25da+-0x1ca4+0x4285)+parseInt(_0x2b4378(0x7f5))/(-0x7b3*0x2+-0x113e+0x20ac)+parseInt(_0x2b4378(0x91e))/(0x1*-0x1575+0xaa6*0x3+-0x1be*0x6)*(-parseInt(_0x2b4378(0xbfa))/(-0xfcd*-0x1+-0x1a68+0x221*0x5));if(_0x53bde8===_0x51e2d1)break;else _0x335f90['push'](_0x335f90['shift']());}catch(_0x4676bc){_0x335f90['push'](_0x335f90['shift']());}}}(_0x218d,-0xbedc5+-0xc33a2+-0x29*-0xec37),((()=>{'use strict';var _0x2fbbc2=_0x4e00,_0xba7dc7={'cUWiX':function(_0x1fe787,_0x4f8296){return _0x1fe787===_0x4f8296;},'HfZtH':function(_0xd95dfb,_0x36ac15){return _0xd95dfb!==_0x36ac15;},'bCBTL':function(_0x5ab4d0,_0x34a342){return _0x5ab4d0!==_0x34a342;},'vPZuO':function(_0x208f56,_0x2e9b9c){return _0x208f56!==_0x2e9b9c;},'HxQJy':'cmd','tpmed':_0x2fbbc2(0xd7b),'MjtIP':function(_0x26840f,_0x2ad68d){return _0x26840f<_0x2ad68d;},'haUuW':_0x2fbbc2(0xd7d),'BUQOB':_0x2fbbc2(0x617)+_0x2fbbc2(0xd98),'tqqvm':function(_0x5a76f3,_0x9582ae,_0x3ee482){return _0x5a76f3(_0x9582ae,_0x3ee482);},'fYdEl':_0x2fbbc2(0x211)+'ff','zKyGw':function(_0x4a58e4,_0x441167){return _0x4a58e4!==_0x441167;},'XdqAh':function(_0x1622e8,_0x3d9748){return _0x1622e8===_0x3d9748;},'sUCLi':function(_0x1769c9,_0x4fef80){return _0x1769c9+_0x4fef80;},'GThqy':function(_0x1e6da6,_0x4fb7c3){return _0x1e6da6*_0x4fb7c3;},'WfHtA':function(_0x5cf0c1,_0x392a4e){return _0x5cf0c1/_0x392a4e;},'LnHHN':function(_0x222bae,_0x4bb0b2){return _0x222bae-_0x4bb0b2;},'TRCrO':'EveUj','Wxyss':_0x2fbbc2(0x617)+_0x2fbbc2(0xcc0)+'v2-ta'+'b','ysShU':'div','GkHnl':function(_0x4aa18e,_0x2ecd87){return _0x4aa18e+_0x2ecd87;},'yemXd':_0x2fbbc2(0x727)+'r-rad'+_0x2fbbc2(0x490)+'99px;'+_0x2fbbc2(0x502)+'ng:4p'+_0x2fbbc2(0x59b)+_0x2fbbc2(0xc44)+'t:11p'+_0x2fbbc2(0x3af)+'\x20ui-m'+_0x2fbbc2(0x24b)+_0x2fbbc2(0x62e)+'onsol'+_0x2fbbc2(0x63e)+_0x2fbbc2(0x6fa)+'ce;','jNrTT':'sakur'+'a','PMZza':function(_0x19bd96,_0x2c6c3a){return _0x19bd96&&_0x2c6c3a;},'LQfuh':function(_0x489dc7){return _0x489dc7();},'IJOaC':_0x2fbbc2(0xa2f),'gAdWQ':'WsQeF','aHpdh':_0x2fbbc2(0x617)+_0x2fbbc2(0xcc0)+'v2-cs'+'s','UILva':_0x2fbbc2(0x874),'NtNiv':_0x2fbbc2(0xc80)+'ra-sw'+_0x2fbbc2(0x4d8)+_0x2fbbc2(0x7f2)+_0x2fbbc2(0xa0e)+'}','hzqkx':function(_0x147f3d,_0xb60be7){return _0x147f3d<_0xb60be7;},'eBifZ':function(_0x39a9ea,_0x115580){return _0x39a9ea===_0x115580;},'aWVHo':_0x2fbbc2(0xc6e),'zbUDo':function(_0x53c3c9,_0x2936a3){return _0x53c3c9(_0x2936a3);},'mYTsB':function(_0x225fc3,_0x3afa17){return _0x225fc3!==_0x3afa17;},'znnMq':_0x2fbbc2(0x366),'acKFJ':_0x2fbbc2(0x355),'RmqEs':_0x2fbbc2(0xc0f)+':','gPaYP':'ogBOZ','qKFYw':_0x2fbbc2(0x7a0),'OiayZ':_0x2fbbc2(0xa5a),'vQqOH':_0x2fbbc2(0xa29),'CtZhO':function(_0x1f5cd7){return _0x1f5cd7();},'fhjmW':_0x2fbbc2(0x1f0),'omFrO':_0x2fbbc2(0x833),'fqukW':_0x2fbbc2(0x64f),'PRZBe':function(_0x3c7ba9,_0x3af05b){return _0x3c7ba9+_0x3af05b;},'SFXLw':function(_0x52efee,_0x17f351){return _0x52efee+_0x17f351;},'Kafad':'hwFcr','mcefD':_0x2fbbc2(0x846),'MRdIx':function(_0x44a068){return _0x44a068();},'PEMmv':_0x2fbbc2(0xa91)+'74','hObKZ':function(_0x2822a1,_0x393136){return _0x2822a1+_0x393136;},'TqDAR':_0x2fbbc2(0x7e8)+'cts\x20·'+'\x20','oUJyO':function(_0x17f9cb,_0xf595aa){return _0x17f9cb>_0xf595aa;},'hoSnx':_0x2fbbc2(0x9cf)+'8a','bPgoe':function(_0x1de1ac,_0x5c64b7){return _0x1de1ac+_0x5c64b7;},'aboyL':'armin'+'g\x20·\x20','juNSv':_0x2fbbc2(0x4b3)+_0x2fbbc2(0x87e)+_0x2fbbc2(0x912)+_0x2fbbc2(0xd2e),'QMrdz':_0x2fbbc2(0x98c)+_0x2fbbc2(0x2f3)+'hile\x20'+_0x2fbbc2(0xb25)+_0x2fbbc2(0x315)+_0x2fbbc2(0xb97)+'ting\x20'+'/\x20jum'+_0x2fbbc2(0xaf4)+_0x2fbbc2(0x7f1)+'\x20whic'+'h\x20fie'+_0x2fbbc2(0xd8e)+_0x2fbbc2(0x36a)+'h.','odUpz':_0x2fbbc2(0x811)+'\x20off','TeWaU':function(_0x3e6602,_0x210bec){return _0x3e6602(_0x210bec);},'wzvRW':_0x2fbbc2(0x6bc)+'-weig'+'ht:70'+'0','FFPFJ':function(_0x1505d5,_0x692bd3){return _0x1505d5+_0x692bd3;},'YVCux':function(_0x4a9836,_0x52c912){return _0x4a9836+_0x52c912;},'uMzIB':function(_0x14b5d4,_0x16f105){return _0x14b5d4(_0x16f105);},'FCGkW':'Speed'+_0x2fbbc2(0xc17),'EyGoo':_0x2fbbc2(0x56d)+'paren'+'t','oGday':function(_0x3611fe){return _0x3611fe();},'okeAJ':'2|0|1'+'|3|4','ZHiVK':function(_0x1c2c91,_0x5d142c){return _0x1c2c91+_0x5d142c;},'FnWNs':function(_0x3ae07c,_0x36df32){return _0x3ae07c+_0x36df32;},'DHFWt':_0x2fbbc2(0x50e)+'ion:f'+_0x2fbbc2(0xa00)+_0x2fbbc2(0xc01)+'12px;'+'top:1'+_0x2fbbc2(0x89b)+'-inde'+'x:214'+_0x2fbbc2(0x20c)+_0x2fbbc2(0xa5b)+_0x2fbbc2(0x4db)+_0x2fbbc2(0xc62)+_0x2fbbc2(0x2ec)+_0x2fbbc2(0x738)+_0x2fbbc2(0x422)+'ax-he'+_0x2fbbc2(0x775)+'78vh;','VKFve':function(_0x402393,_0x3b5fc9){return _0x402393+_0x3b5fc9;},'oTelL':function(_0x4f0b21,_0x3e3e27){return _0x4f0b21+_0x3e3e27;},'HeyfJ':function(_0x1532c7,_0x209ff7){return _0x1532c7+_0x209ff7;},'jBUGR':function(_0x225116,_0xf032d8){return _0x225116+_0xf032d8;},'IijNJ':function(_0x4fff28,_0xb86f){return _0x4fff28+_0xb86f;},'fJROZ':';bord'+'er:0;'+_0x2fbbc2(0xc0f)+':#2a0'+'f1b;b'+'order'+'-radi'+'us:7p'+_0x2fbbc2(0x203)+_0x2fbbc2(0x365)+'4px\x201'+_0x2fbbc2(0x4fd)+_0x2fbbc2(0x219)+_0x2fbbc2(0xac5)+_0x2fbbc2(0xa0f)+_0x2fbbc2(0xa1a)+_0x2fbbc2(0xd57)+'nter;'+_0x2fbbc2(0x8fe)+_0x2fbbc2(0xc1d)+'N</bu'+'tton>','IMgEi':_0x2fbbc2(0x9a9)+'>','SriuW':_0x2fbbc2(0x7eb)+_0x2fbbc2(0x874)+_0x2fbbc2(0x7db)+'ding:'+_0x2fbbc2(0x90e)+_0x2fbbc2(0xcd4)+_0x2fbbc2(0xd25)+'-bott'+_0x2fbbc2(0xb99)+_0x2fbbc2(0x51f)+_0x2fbbc2(0x3db)+_0x2fbbc2(0x890)+'5,143'+_0x2fbbc2(0xa63)+_0x2fbbc2(0x4d7)+_0x2fbbc2(0x7b6)+'ay:fl'+_0x2fbbc2(0x698)+_0x2fbbc2(0x674)+';alig'+_0x2fbbc2(0x1de)+_0x2fbbc2(0x5af)+_0x2fbbc2(0x4e6)+_0x2fbbc2(0xa7f)+_0x2fbbc2(0xb9d)+'uto;f'+_0x2fbbc2(0xd89)+'rap:w'+'rap;\x22'+'>','dmlkL':_0x2fbbc2(0x960)+_0x2fbbc2(0xd19)+_0x2fbbc2(0x707)+_0x2fbbc2(0x48f)+_0x2fbbc2(0x513)+'yle=\x22'+_0x2fbbc2(0x1e2)+'round'+':tran'+'spare'+'nt;bo'+_0x2fbbc2(0x8e1)+_0x2fbbc2(0x745)+_0x2fbbc2(0xd21)+'rgba('+_0x2fbbc2(0x389)+_0x2fbbc2(0x4bf)+'7,.4)'+';colo'+'r:#f7'+'eef5;'+_0x2fbbc2(0x727)+_0x2fbbc2(0xcbd)+_0x2fbbc2(0xc36)+_0x2fbbc2(0x3c2)+_0x2fbbc2(0x7bd)+_0x2fbbc2(0x810)+_0x2fbbc2(0x7c8)+'curso'+_0x2fbbc2(0xd57)+'nter;'+_0x2fbbc2(0x928)+'ed\x20of'+'f</bu'+'tton>','bGuHl':';\x22>','CbXSW':'<butt'+_0x2fbbc2(0xd19)+'=\x22sw2'+_0x2fbbc2(0x63f)+_0x2fbbc2(0x838)+'le=\x22b'+_0x2fbbc2(0x57d)+'ound:'+'trans'+_0x2fbbc2(0x2cf)+'t;bor'+_0x2fbbc2(0x57e)+_0x2fbbc2(0x783)+_0x2fbbc2(0x7dd)+_0x2fbbc2(0x978)+_0x2fbbc2(0x536)+_0x2fbbc2(0x2bd)+_0x2fbbc2(0xbd8)+'color'+':#f7e'+'ef5;b'+'order'+_0x2fbbc2(0x638)+_0x2fbbc2(0x865)+'x;pad'+'ding:'+'4px\x209'+'px;cu'+'rsor:'+'point'+_0x2fbbc2(0xd58)+'Snaps'+_0x2fbbc2(0x229)+_0x2fbbc2(0x623)+'butto'+'n>','fqClO':'<pre\x20'+_0x2fbbc2(0x625)+_0x2fbbc2(0xa4c)+_0x2fbbc2(0xabf)+'yle=\x22'+'margi'+'n:0;p'+'addin'+'g:10p'+'x\x2012p'+_0x2fbbc2(0xab4)+'rflow'+_0x2fbbc2(0x4a6)+_0x2fbbc2(0xba3)+':1\x201\x20'+_0x2fbbc2(0x8b2)+_0x2fbbc2(0x5a7)+'-spac'+'e:pre'+'-wrap'+_0x2fbbc2(0x3d1)+_0x2fbbc2(0x5b3)+_0x2fbbc2(0xaef)+_0x2fbbc2(0x419)+'rd;fo'+'nt:in'+_0x2fbbc2(0x421)+';','KGLRK':_0x2fbbc2(0xd99)+'statu'+'s','ILldS':'#sw2-'+'out','ocXOq':_0x2fbbc2(0xd99)+'toggl'+'e','yVRaC':_0x2fbbc2(0xd99)+'snap','qVZiO':_0x2fbbc2(0xd99)+'facto'+'r','SskBi':'#sw2-'+_0x2fbbc2(0x33e)+_0x2fbbc2(0x273)+'l','kHTgd':'#sw2-'+_0x2fbbc2(0xc02),'DyPja':function(_0x19e790,_0x564438){return _0x19e790+_0x564438;},'BWxzd':_0x2fbbc2(0xae2)+'ntext'+'\x20','PKIlX':_0x2fbbc2(0xd7a)+_0x2fbbc2(0xb66),'teaNx':function(_0x299d1a,_0x31d6e6){return _0x299d1a+_0x31d6e6;},'bzaGG':'hooks'+_0x2fbbc2(0xd0e),'NOGCg':_0x2fbbc2(0xb82)+_0x2fbbc2(0x7b7)+_0x2fbbc2(0xa8d)+_0x2fbbc2(0xaf2)+'ured\x20'+_0x2fbbc2(0x2c2),'QwcRk':_0x2fbbc2(0xd42)+_0x2fbbc2(0x446)+'fire\x20'+_0x2fbbc2(0x80e)+_0x2fbbc2(0x8bf)+_0x2fbbc2(0xb16)+_0x2fbbc2(0x92c)+'date('+_0x2fbbc2(0x99f)+'thing'+'\x20capt'+_0x2fbbc2(0xbad)+_0x2fbbc2(0xbf0),'mVpBq':_0x2fbbc2(0xc08)+'date\x20'+_0x2fbbc2(0x8fc)+_0x2fbbc2(0xa3a)+_0x2fbbc2(0x59d)+_0x2fbbc2(0x920)+_0x2fbbc2(0x83f)+'\x20did\x20'+'not\x20m'+'atch.','LONvv':function(_0x18f767,_0x22d544){return _0x18f767+_0x22d544;},'fOjfQ':_0x2fbbc2(0x986)+_0x2fbbc2(0x3a9)+_0x2fbbc2(0x8b4)+_0x2fbbc2(0x2db)+'\x20\x20\x20va'+_0x2fbbc2(0xb4b)+'\x20\x20\x20\x20\x20'+_0x2fbbc2(0x2db)+_0x2fbbc2(0xd60),'HkjIj':function(_0x39653d,_0x5e8e82){return _0x39653d*_0x5e8e82;},'zncMY':function(_0x2d701a,_0x5984f1){return _0x2d701a+_0x5984f1;},'rNKqZ':function(_0x1021a9,_0x217dc3){return _0x1021a9+_0x217dc3;},'TwITA':function(_0x403ad9,_0x464258){return _0x403ad9(_0x464258);},'gBIwr':_0x2fbbc2(0x842),'kmSQR':function(_0x355310,_0x162916,_0x29a0d6,_0x63d73){return _0x355310(_0x162916,_0x29a0d6,_0x63d73);},'vfxBl':_0x2fbbc2(0x1ee)+'te','JPrFk':'Refus'+'ed:\x20','wmdeH':function(_0x3f283a,_0x50ea47){return _0x3f283a<_0x50ea47;},'WCCjb':function(_0x5e8802){return _0x5e8802();},'zOEln':_0x2fbbc2(0x9f8),'uSCBz':'IatxL','faeBg':_0x2fbbc2(0x3f7),'jBxzG':'repor'+'t','KjbBx':function(_0x195d4e){return _0x195d4e();},'eLjAl':'%c[sa'+_0x2fbbc2(0xb7a)+'\x20pane'+_0x2fbbc2(0xd09)+'ate\x20f'+_0x2fbbc2(0xd67),'RRyve':function(_0x315899){return _0x315899();},'vnSqr':function(_0x523e41){return _0x523e41();},'uWyFq':_0x2fbbc2(0x666),'hAnCw':_0x2fbbc2(0xac6),'ZMVvj':function(_0x383128,_0x5a80a7,_0x11f46a){return _0x383128(_0x5a80a7,_0x11f46a);},'BeYlh':_0x2fbbc2(0x406),'pOlGv':'Updat'+'e','fCBlQ':function(_0x1c22b7,_0x50e6c7){return _0x1c22b7+_0x50e6c7;},'uGZsJ':_0x2fbbc2(0x474),'uQtVd':'log','sOVFZ':function(_0x3976b2,_0x589007){return _0x3976b2<_0x589007;},'QpWUE':_0x2fbbc2(0x9e2)+_0x2fbbc2(0xb4a),'aZsLn':_0x2fbbc2(0x999),'sbGSO':'funct'+'ion','ElFJF':_0x2fbbc2(0xd02)+_0x2fbbc2(0x716),'wmVsW':'insta'+_0x2fbbc2(0x685)+'e','pzVzh':_0x2fbbc2(0xd22)+'oup\x20o'+'f\x20','jyiKE':_0x2fbbc2(0x3d8)+'uredF'+_0x2fbbc2(0x79b)+_0x2fbbc2(0x28d)+'ed','Phvkb':'CCHUK','rAQtw':_0x2fbbc2(0xa3e),'QHLlP':'windo'+'w.','hxoJB':function(_0xf11abd,_0x29cde2){return _0xf11abd!==_0x29cde2;},'Qbnmm':'VsGSn','Ezmia':_0x2fbbc2(0x259)+_0x2fbbc2(0xb57)+'ntime'+'._gam'+'e','LZemM':'OJlKN','FKOnY':'Runti'+'me._g'+'ame','AZqqF':_0x2fbbc2(0xc1a)+_0x2fbbc2(0x3f8)+'bal','yJOlv':function(_0x16f537,_0x6adcfd){return _0x16f537!==_0x6adcfd;},'Prntp':function(_0x2ead6b,_0x4c2356){return _0x2ead6b<_0x4c2356;},'locrS':_0x2fbbc2(0x3fd)+'t','ItzzB':function(_0x1b1394,_0x3d5922){return _0x1b1394+_0x3d5922;},'jVbXL':'.Modu'+'le','egStC':'Urppn','gVYAU':'repla'+'ced\x20b'+_0x2fbbc2(0xa2a)+_0x2fbbc2(0xb35)+'ent\x20i'+_0x2fbbc2(0x660)+_0x2fbbc2(0xc10)+'o\x20we\x20'+'are\x20a'+'sking'+'\x20the\x20'+_0x2fbbc2(0x8f0)+_0x2fbbc2(0x7e8)+'ct\x20fo'+'r\x20','acalc':_0x2fbbc2(0x302)+_0x2fbbc2(0xaba)+'hile\x20'+_0x2fbbc2(0x63a)+'ne\x20ho'+'lding'+'\x20it\x20i'+_0x2fbbc2(0xadf)+'haned'+_0x2fbbc2(0x5b6)+_0x2fbbc2(0x734)+_0x2fbbc2(0xa59)+_0x2fbbc2(0x778)+'r\x20','TEqzx':_0x2fbbc2(0x9f9)+_0x2fbbc2(0x6dd)+_0x2fbbc2(0x225)+'ipt\x20i'+'n\x20Tam'+'permo'+_0x2fbbc2(0x304)+_0x2fbbc2(0x2ea)+'ard-r'+_0x2fbbc2(0x6ec)+'.','RBJig':_0x2fbbc2(0x961),'yIKhG':function(_0x42e921,_0x134333){return _0x42e921+_0x134333;},'KdAVH':_0x2fbbc2(0x2bc)+_0x2fbbc2(0xa05),'lwpSH':_0x2fbbc2(0x574),'vYOpi':_0x2fbbc2(0x3f0),'XQNwa':_0x2fbbc2(0xb6c),'wFthy':function(_0xe44783,_0x223844){return _0xe44783>_0x223844;},'qqBxZ':function(_0x53f973,_0x28be20){return _0x53f973&_0x28be20;},'WBWCa':_0x2fbbc2(0xc77),'InHww':function(_0x197347,_0x3073b8){return _0x197347|_0x3073b8;},'UdEsd':function(_0x2c65f5,_0x303771){return _0x2c65f5+_0x303771;},'aXATj':_0x2fbbc2(0x23d),'OguoJ':function(_0x417de5,_0x3d847e){return _0x417de5+_0x3d847e;},'yFuWv':'tlLfs','EWgHy':_0x2fbbc2(0x1e3),'PQJbd':function(_0x51cd13){return _0x51cd13();},'eMtiB':function(_0x568204,_0x3f5e20){return _0x568204+_0x3f5e20;},'IsFSu':'yhgJI','ececc':function(_0x2fbc18,_0x3b5f65){return _0x2fbc18+_0x3b5f65;},'znJlm':function(_0x2838d9,_0x6176e0){return _0x2838d9+_0x6176e0;},'sgzSi':'\x20past'+_0x2fbbc2(0x4bb)+'\x20end\x20'+'0x','IszBu':function(_0x40d080,_0x3ca21e){return _0x40d080&_0x3ca21e;},'PmsuR':function(_0xf00289,_0x21397e){return _0xf00289===_0x21397e;},'wmusK':_0x2fbbc2(0x4e2),'JyBuO':function(_0x3dd6b2,_0x5ab7b9){return _0x3dd6b2(_0x5ab7b9);},'ylTIv':function(_0x4cbe13,_0x5decd2){return _0x4cbe13===_0x5decd2;},'SXKyX':_0x2fbbc2(0xa57),'eBejO':function(_0x255fec,_0x16a0bb){return _0x255fec^_0x16a0bb;},'KYrQl':function(_0x224f5c,_0x326ec0,_0x3dd94c){return _0x224f5c(_0x326ec0,_0x3dd94c);},'McLex':function(_0x28b8eb,_0x5497c0,_0x554756){return _0x28b8eb(_0x5497c0,_0x554756);},'CDBRy':function(_0x52f9f0,_0x557274,_0x6b5d51){return _0x52f9f0(_0x557274,_0x6b5d51);},'dmwRW':function(_0x2e0344,_0x90d4c9,_0x280c98,_0x436276){return _0x2e0344(_0x90d4c9,_0x280c98,_0x436276);},'cyDVP':_0x2fbbc2(0x24e)+'red\x20','WStwt':_0x2fbbc2(0x7e8)+'ct(s)'+'\x20but\x20'+_0x2fbbc2(0x74d)+'0\x20fie'+'lds.\x20','ajXel':_0x2fbbc2(0xd05)+'n:\x20','oFelz':_0x2fbbc2(0x3be)+'ad\x20fa'+'iled,'+'\x20so\x20e'+'very\x20'+'offse'+'t\x20was'+'\x20skip'+'ped\x20b'+_0x2fbbc2(0x806)+'e.','YosbW':function(_0x329dce,_0x46d57f){return _0x329dce(_0x46d57f);},'YempL':_0x2fbbc2(0x5e3)+'r','WKQwM':function(_0x320bb0,_0x343756){return _0x320bb0!==_0x343756;},'Hxtgn':'BCDFS','cLkmB':_0x2fbbc2(0x210),'kDXLq':_0x2fbbc2(0xce6),'Oouds':function(_0x5e3509,_0x4ffe9b){return _0x5e3509!==_0x4ffe9b;},'LdeWh':function(_0x1460ef,_0x29ad92,_0x63c8cb,_0x2446de){return _0x1460ef(_0x29ad92,_0x63c8cb,_0x2446de);},'RshaM':function(_0x40ecc2,_0x3c274c){return _0x40ecc2+_0x3c274c;},'Jhsmh':function(_0x3e8e51,_0x55c724){return _0x3e8e51>=_0x55c724;},'pUZEN':_0x2fbbc2(0x926),'nvKlf':function(_0x2ca88a,_0x55c860){return _0x2ca88a+_0x55c860;},'BoVYE':function(_0x11b486,_0xee765){return _0x11b486+_0xee765;},'bDuJt':function(_0x2d2279,_0x184a8b){return _0x2d2279<_0x184a8b;},'LpIjA':function(_0x1db554,_0x1ef1e0){return _0x1db554<_0x1ef1e0;},'Fpiqi':'singl'+_0x2fbbc2(0x4ab),'lOUuf':'VDSnT','qCMHC':_0x2fbbc2(0x5f9),'VOpUk':_0x2fbbc2(0xb2f),'jmAar':function(_0x47752e,_0x22a25a){return _0x47752e!==_0x22a25a;},'KhGoQ':_0x2fbbc2(0x3f2),'xoDIe':function(_0x2c7419,_0x2f7070,_0x36612f,_0x2cbee1){return _0x2c7419(_0x2f7070,_0x36612f,_0x2cbee1);},'ZHDTR':function(_0x4a64d0,_0x1fd65d){return _0x4a64d0===_0x1fd65d;},'nuMtd':function(_0x210eed,_0x5364b4){return _0x210eed===_0x5364b4;},'Mpnbo':function(_0x2589d1,_0x28c37e){return _0x2589d1!==_0x28c37e;},'IMoCw':function(_0x37cf92,_0x51af70){return _0x37cf92!==_0x51af70;},'pKxCE':'ONGPb','nITuu':_0x2fbbc2(0xabc),'eTUjv':'get','wvXLE':'void','pZiDv':function(_0x45f025,_0x4c5f3a){return _0x45f025===_0x4c5f3a;},'zRxgh':_0x2fbbc2(0x46a),'vBiQU':_0x2fbbc2(0x9f6)+_0x2fbbc2(0xd5c),'GfKyG':_0x2fbbc2(0xab2),'IgzgG':function(_0x492319,_0x3f4320){return _0x492319<_0x3f4320;},'kZVnc':'vitAS','uQHkS':function(_0x4a9580,_0x21d946){return _0x4a9580+_0x21d946;},'zBgdF':function(_0x182db0,_0x5028f8){return _0x182db0+_0x5028f8;},'shuEN':function(_0x544e9c,_0xa4aab3){return _0x544e9c!==_0xa4aab3;},'uLXRK':'caHOf','hWKpd':_0x2fbbc2(0xcea),'QOeYU':function(_0x446487,_0x5246aa){return _0x446487+_0x5246aa;},'dOLfF':_0x2fbbc2(0x21a),'sBifi':function(_0x58c150,_0x25d745){return _0x58c150+_0x25d745;},'TVkMe':function(_0x24506f,_0x4c6782){return _0x24506f+_0x4c6782;},'LLGBF':function(_0x306357,_0x23f582){return _0x306357+_0x23f582;},'LJZwA':_0x2fbbc2(0xad0),'uztLp':function(_0x3bf6ac,_0x2f13cd){return _0x3bf6ac<_0x2f13cd;},'WhDJH':function(_0x12994d,_0xc5f64d){return _0x12994d<_0xc5f64d;},'nEsLR':_0x2fbbc2(0x8f8)+_0x2fbbc2(0x76e)+'orkSy'+'nc','xzXmJ':function(_0x3d8e49,_0x5bac9f){return _0x3d8e49-_0x5bac9f;},'LBIQq':function(_0x2f0b07,_0x30cc21){return _0x2f0b07+_0x30cc21;},'BWqbM':'vavgL','mWvJo':_0x2fbbc2(0x649),'uUZko':function(_0x3bfb5e,_0x199e26,_0x392235,_0x313371){return _0x3bfb5e(_0x199e26,_0x392235,_0x313371);},'fwBFR':_0x2fbbc2(0xa01)+_0x2fbbc2(0xa55),'GDdwg':function(_0x5c534b,_0x2e992d,_0x2f4d93,_0x4248a0){return _0x5c534b(_0x2e992d,_0x2f4d93,_0x4248a0);},'EARsC':'Healt'+_0x2fbbc2(0x652)+'pt','KPPNA':function(_0x58a03a,_0x570913){return _0x58a03a-_0x570913;},'qewOT':_0x2fbbc2(0xaed)+_0x2fbbc2(0xb1b)+_0x2fbbc2(0x413),'wAFRD':function(_0x3dbae2,_0x224679,_0x3f29bf){return _0x3dbae2(_0x224679,_0x3f29bf);},'CJUPj':'DBpWY','yfRHd':function(_0x6fc64,_0x3a66dc){return _0x6fc64 in _0x3a66dc;},'vhjgW':function(_0x2f6449,_0x5ba9b6){return _0x2f6449+_0x5ba9b6;},'WYKVq':_0x2fbbc2(0xc79),'WNkBb':function(_0x1b0af8,_0x596b86){return _0x1b0af8===_0x596b86;},'Kzlra':function(_0x56bbbc,_0x50161a){return _0x56bbbc+_0x50161a;},'MDYmJ':function(_0x2812b0,_0x34aa25){return _0x2812b0>>>_0x34aa25;},'KWbAH':_0x2fbbc2(0x43e),'LQtdQ':function(_0x232628,_0x41da0c){return _0x232628+_0x41da0c;},'BxRIt':'isLoc'+'al\x20on'+'\x20each'+_0x2fbbc2(0x92b)+'y\x20in\x20'+_0x2fbbc2(0x9e8)+'ers`.','IywKE':_0x2fbbc2(0xa09),'piMSV':_0x2fbbc2(0x376),'GDoOq':_0x2fbbc2(0x710),'lXMwy':function(_0x3a2eca,_0x299f75){return _0x3a2eca<_0x299f75;},'AbAGD':'obf','BMGIl':function(_0x5ec745,_0x343d6b){return _0x5ec745===_0x343d6b;},'qRLJR':_0x2fbbc2(0x81a),'mJPfX':function(_0x8bb434,_0x201494,_0x464127){return _0x8bb434(_0x201494,_0x464127);},'AkzrJ':function(_0x2712e,_0x3d1973){return _0x2712e===_0x3d1973;},'zYlZt':function(_0x4e612e,_0x310ac4){return _0x4e612e+_0x310ac4;},'nvUGq':'OqiNX','sutBq':'FcXCX','lcEHG':_0x2fbbc2(0x4e4),'aYiWm':function(_0x4b1c85,_0x391926){return _0x4b1c85+_0x391926;},'TQARp':_0x2fbbc2(0x88c),'vRLSD':function(_0x1c300c,_0x42adf1){return _0x1c300c(_0x42adf1);},'BDNfx':function(_0x5d4cf4,_0xb3a61){return _0x5d4cf4+_0xb3a61;},'ogYEt':_0x2fbbc2(0xc52),'CDMRS':'SEqMm','oAzSd':_0x2fbbc2(0x2d2)+'t\x200\x20('+'int-w'+_0x2fbbc2(0x231),'hvriW':function(_0x14920f,_0x2b6b78){return _0x14920f===_0x2b6b78;},'wTAIf':function(_0x456d91,_0x12aa2f){return _0x456d91!==_0x12aa2f;},'zfLeQ':_0x2fbbc2(0x34e)+'|2|3|'+'5','AjfRY':function(_0x29bd17,_0xf4b124){return _0x29bd17(_0xf4b124);},'KRSaN':'unity'+'Game','tLrtT':_0x2fbbc2(0x99b),'CSFrQ':function(_0x1771b9,_0x3d7527){return _0x1771b9===_0x3d7527;},'hMMmU':'Mouse'+_0x2fbbc2(0x5ed),'nlFjL':_0x2fbbc2(0xaa3)+'l','jJoof':'pMaoJ','ZEWbL':function(_0x4e05f4,_0x1d9fa3,_0x41db1c){return _0x4e05f4(_0x1d9fa3,_0x41db1c);},'jHYHr':'boole'+'an','gTtPp':function(_0x37cdd8,_0x296c31,_0x5c88fa){return _0x37cdd8(_0x296c31,_0x5c88fa);},'kGXml':function(_0x673326,_0x3718c6){return _0x673326+_0x3718c6;},'buZpq':function(_0x31e1d4,_0xd1f7dc){return _0x31e1d4!==_0xd1f7dc;},'tWLGu':_0x2fbbc2(0x8be),'viGya':function(_0x2d07f4,_0x470aa5){return _0x2d07f4+_0x470aa5;},'YXMkK':'[data'+_0x2fbbc2(0x668),'eCDKz':function(_0x184189,_0x6b5292){return _0x184189(_0x6b5292);},'nHpyd':function(_0x12ced0,_0x3d9147){return _0x12ced0===_0x3d9147;},'qqmgv':_0x2fbbc2(0x617)+_0x2fbbc2(0xcc0)+'hud-c'+'ss','PueFR':_0x2fbbc2(0x50e)+_0x2fbbc2(0x213)+_0x2fbbc2(0xa00)+_0x2fbbc2(0xc01)+_0x2fbbc2(0x4e5)+'ottom'+':8px;'+_0x2fbbc2(0x489)+_0x2fbbc2(0x450)+_0x2fbbc2(0x4c3)+_0x2fbbc2(0xaee)+_0x2fbbc2(0x766)+_0x2fbbc2(0x44f)+_0x2fbbc2(0x50a)+'x-dir'+'ectio'+_0x2fbbc2(0x8dc)+_0x2fbbc2(0x28b)+_0x2fbbc2(0xc39)+'x;','biwbu':'backg'+_0x2fbbc2(0xb4c)+_0x2fbbc2(0xc5f)+'(21,1'+_0x2fbbc2(0x9b8)+_0x2fbbc2(0x29c)+'borde'+_0x2fbbc2(0x1ef)+_0x2fbbc2(0x9dd)+_0x2fbbc2(0x690)+_0x2fbbc2(0x1db)+_0x2fbbc2(0xa47)+'177,.'+_0x2fbbc2(0x61a)+_0x2fbbc2(0xd25)+_0x2fbbc2(0x638)+_0x2fbbc2(0x9c3)+_0x2fbbc2(0x71f),'GQTpP':function(_0xfee7b8,_0x11e841){return _0xfee7b8+_0x11e841;},'pkbjD':function(_0x2e491e,_0x3d9919){return _0x2e491e+_0x3d9919;},'WvoMb':function(_0x523792,_0x24610f){return _0x523792+_0x24610f;},'pzyqe':_0x2fbbc2(0x960)+'on\x20da'+_0x2fbbc2(0x7a8)+'\x22sp\x22\x20'+'style'+_0x2fbbc2(0xd23)+_0x2fbbc2(0x2e4)+_0x2fbbc2(0xce1)+'anspa'+_0x2fbbc2(0xa66)+'borde'+'r:1px'+_0x2fbbc2(0x9dd)+_0x2fbbc2(0x690)+'a(255'+_0x2fbbc2(0xa47)+_0x2fbbc2(0x929)+_0x2fbbc2(0xcb4),'aPiAV':_0x2fbbc2(0x3eb)+_0x2fbbc2(0x8c1)+_0x2fbbc2(0x7e7)+_0x2fbbc2(0xb5c)+'ype=\x22'+_0x2fbbc2(0xcca)+'\x22\x20min'+_0x2fbbc2(0xa3d)+_0x2fbbc2(0x7e2)+'5\x22\x20st'+_0x2fbbc2(0x89a)+_0x2fbbc2(0xbd9)+_0x2fbbc2(0x7bb)+_0x2fbbc2(0x8bc)+_0x2fbbc2(0xa4f)+'\x22widt'+'h:92p'+_0x2fbbc2(0x587)+_0x2fbbc2(0xbfb)+'olor:','rdGYa':'color'+_0x2fbbc2(0x91c)+_0x2fbbc2(0xc50)+'order'+'-radi'+_0x2fbbc2(0x2b0)+'x;pad'+_0x2fbbc2(0x365)+_0x2fbbc2(0x629)+_0x2fbbc2(0x657)+'rsor:'+'point'+_0x2fbbc2(0x809)+_0x2fbbc2(0x817)+'herit'+_0x2fbbc2(0xd4e)+'P\x20on<'+'/butt'+'on>','WuZiI':_0x2fbbc2(0x960)+'on\x20da'+_0x2fbbc2(0x7a8)+'\x22fold'+_0x2fbbc2(0x838)+_0x2fbbc2(0x48b)+'argin'+_0x2fbbc2(0x5d6)+_0x2fbbc2(0x4a6)+_0x2fbbc2(0x736)+'groun'+_0x2fbbc2(0xbc9)+'nspar'+'ent;b'+_0x2fbbc2(0xd25)+_0x2fbbc2(0x9af)+'solid'+'\x20rgba'+'(255,'+_0x2fbbc2(0xd85)+_0x2fbbc2(0x966)+'5);','rQbYv':_0x2fbbc2(0x7eb)+_0x2fbbc2(0x392)+_0x2fbbc2(0xb2d)+'\x22\x20sty'+'le=\x22c'+_0x2fbbc2(0xa88)+'#8d7a'+_0x2fbbc2(0xb2a)+_0x2fbbc2(0x4db)+'th:29'+_0x2fbbc2(0xb52)+_0x2fbbc2(0x932)+'v>','fECKf':'<div\x20'+_0x2fbbc2(0x392)+'a=\x22st'+_0x2fbbc2(0x573)+'yle=\x22'+_0x2fbbc2(0xc0f)+':#8d7'+'a99;m'+'ax-wi'+_0x2fbbc2(0x29a)+'90px;'+'\x22></d'+'iv>','iDCUC':'st2','KpLGR':function(_0x5840d8,_0x5eb8e1){return _0x5840d8(_0x5eb8e1);},'VFbgH':function(_0x2bd81a,_0x28a04e){return _0x2bd81a(_0x28a04e);},'DDuYQ':_0x2fbbc2(0x3e6),'GfvPq':'esp','RwXLW':'fold','gSjbu':_0x2fbbc2(0x9be)+'kura]'+_0x2fbbc2(0x2d7)+_0x2fbbc2(0xb50)+_0x2fbbc2(0x813)+_0x2fbbc2(0xbcf)+'ed','KaKGZ':_0x2fbbc2(0xd66),'vrxdT':function(_0x49d4d2){return _0x49d4d2();},'FpuwG':_0x2fbbc2(0xca6)+_0x2fbbc2(0x46e),'jlyfa':'#2a0f'+'1b','Hjbch':_0x2fbbc2(0x321)+'f5','MDLDN':function(_0x2e1606,_0x201f22){return _0x2e1606===_0x201f22;},'CMXSo':'gllsS','iKJND':function(_0x54323f,_0x1057c6){return _0x54323f===_0x1057c6;},'XyTPN':'YnYYl','aKgQA':function(_0x2410e0,_0x171516){return _0x2410e0+_0x171516;},'zdmny':function(_0x3132a4,_0x37ffe7){return _0x3132a4+_0x37ffe7;},'QOYEM':function(_0x52f74a,_0x14561f){return _0x52f74a+_0x14561f;},'FRuAf':function(_0x459346,_0x3a7180){return _0x459346+_0x3a7180;},'eYUWF':function(_0xb89664,_0x3a6932){return _0xb89664+_0x3a6932;},'EWZHq':_0x2fbbc2(0x37d)+'s\x20','QiySn':_0x2fbbc2(0x391)+'RS\x20','IIbaS':'\x20+\x20','Pbxci':function(_0xab0e03,_0x4c1d93){return _0xab0e03>_0x4c1d93;},'lgXDu':_0x2fbbc2(0xa38)+'a8','SDKmg':_0x2fbbc2(0xc3a)+'99','CcXvY':'Healt'+'h','NsILq':_0x2fbbc2(0x50f)+_0x2fbbc2(0xca4)+_0x2fbbc2(0x413),'LbMEp':'slKwG','UKGRT':function(_0x1dc904,_0x67f66c,_0x2f7c4d){return _0x1dc904(_0x67f66c,_0x2f7c4d);},'xQUaJ':function(_0x35679f,_0x3535fc){return _0x35679f!==_0x3535fc;},'BaDdH':_0x2fbbc2(0x894),'NjNhJ':_0x2fbbc2(0x3a1),'qLdZW':function(_0x33759b,_0xbfc9de){return _0x33759b!==_0xbfc9de;},'FjWPZ':'dvqkV','IZjSf':function(_0x504416,_0x4739f1){return _0x504416<_0x4739f1;},'dOFNd':function(_0x1768b1,_0x2eefec){return _0x1768b1+_0x2eefec;},'oMhHq':_0x2fbbc2(0x507),'mltwr':function(_0x5e54cb,_0x55383f){return _0x5e54cb===_0x55383f;},'hVlSS':_0x2fbbc2(0x8c6),'oNiFz':function(_0x29817b,_0x2e32f9,_0xe63a8f){return _0x29817b(_0x2e32f9,_0xe63a8f);},'RtvEF':function(_0x1cdd45,_0x1c53c0,_0x152bf2,_0x24fbe4){return _0x1cdd45(_0x1c53c0,_0x152bf2,_0x24fbe4);},'LoPQh':_0x2fbbc2(0xa95),'oHDaE':function(_0x22ff90,_0x376f8c){return _0x22ff90===_0x376f8c;},'Vixpc':function(_0x2fad63,_0x26ef61){return _0x2fad63-_0x26ef61;},'gHGxW':function(_0x3d3d42,_0x4a27ee){return _0x3d3d42+_0x4a27ee;},'rcprc':function(_0x1f21be,_0x133ffe){return _0x1f21be+_0x133ffe;},'IxhIh':function(_0x55df1f){return _0x55df1f();},'NcbEr':_0x2fbbc2(0xcfd)+'useLo'+'ok\x20ye'+'t','DVxfT':function(_0xa419ab,_0xf05eae){return _0xa419ab===_0xf05eae;},'tGsQO':'gette'+'r','NcsQz':_0x2fbbc2(0x4fe)+_0x2fbbc2(0x5aa)+_0x2fbbc2(0x21b)+'ss)','FDiEZ':function(_0x2e0cc8,_0x51c8bc){return _0x2e0cc8+_0x51c8bc;},'YBaip':_0x2fbbc2(0xab0)+_0x2fbbc2(0x46a)+'s\x20unr'+'eadab'+'le','phEuk':'pitch'+'\x20','UZlZp':_0x2fbbc2(0x31a)+'13|3|'+'17|5|'+_0x2fbbc2(0x9ee)+_0x2fbbc2(0xbd2)+'|4|7|'+'14|15'+_0x2fbbc2(0xcb2)+'6|8','ZGTaF':function(_0x48c494,_0x32e1ac){return _0x48c494-_0x32e1ac;},'OTSLJ':function(_0x55da2b,_0x59cdc9){return _0x55da2b*_0x59cdc9;},'AbRlS':function(_0x568e91,_0x308895){return _0x568e91*_0x308895;},'ALeNe':function(_0x34083a,_0x4f6d3a){return _0x34083a+_0x4f6d3a;},'ozYkB':function(_0x29ad9f,_0x5b69ca){return _0x29ad9f-_0x5b69ca;},'bLVoc':function(_0x46b6e0,_0x4dcd50){return _0x46b6e0*_0x4dcd50;},'jRnnt':function(_0xbfb291,_0x296dbd){return _0xbfb291*_0x296dbd;},'UwJXc':function(_0x5eab20,_0x177779){return _0x5eab20-_0x177779;},'NSCei':function(_0x3c1493,_0x32e8f4){return _0x3c1493*_0x32e8f4;},'TgHoS':function(_0x4001fd,_0x363ad1){return _0x4001fd*_0x363ad1;},'iEyij':function(_0x286f57,_0x179c70){return _0x286f57*_0x179c70;},'sXrvV':function(_0x54f065,_0x4715d0){return _0x54f065/_0x4715d0;},'LOnrn':function(_0xf622e4,_0x1c6a62){return _0xf622e4>_0x1c6a62;},'OAXMo':function(_0x5aed40,_0x21cd1f){return _0x5aed40*_0x21cd1f;},'NaDXj':function(_0x5bd8d3,_0x350939){return _0x5bd8d3!=_0x350939;},'ZbKEH':'2|5|0'+'|9|4|'+_0x2fbbc2(0xc81)+_0x2fbbc2(0x7bc),'gOuYU':'<stro'+_0x2fbbc2(0x922),'rrJdd':_0x2fbbc2(0x54d)+'rd','hxVEt':'\x20on','kRcJr':_0x2fbbc2(0x8ff)+'ody','dgXne':function(_0x4cecf4){return _0x4cecf4();},'bDAaZ':function(_0x249125,_0x10022f){return _0x249125(_0x10022f);},'KeBjI':_0x2fbbc2(0x603)+'n','YlkEr':function(_0x47f609,_0x5471e6){return _0x47f609+_0x5471e6;},'xEXTs':'FMFrk','liwFG':'input','dcNIM':_0x2fbbc2(0xcfe)+_0x2fbbc2(0x7ab),'gTEPe':_0x2fbbc2(0xc48)+'l','TYrOR':function(_0x2a24ec,_0x39d0f4,_0x31598d){return _0x2a24ec(_0x39d0f4,_0x31598d);},'RhJRN':function(_0x1c3e6e,_0x2c45d5){return _0x1c3e6e+_0x2c45d5;},'oyvHK':'</spa'+'n>','pyzRq':function(_0x40bbcf,_0x203f5a){return _0x40bbcf*_0x203f5a;},'cJEXc':function(_0x459b57,_0x21b365){return _0x459b57===_0x21b365;},'IunKG':function(_0x2f7359,_0x5c0caf,_0xf9e075){return _0x2f7359(_0x5c0caf,_0xf9e075);},'xyYWi':_0x2fbbc2(0x9d7),'KfNBd':'ikEEU','hxRAt':function(_0x396d87,_0x245e2f){return _0x396d87===_0x245e2f;},'Yzale':function(_0x377fd4,_0x1a109d){return _0x377fd4===_0x1a109d;},'gUZLM':function(_0x496fa1,_0x410d32){return _0x496fa1*_0x410d32;},'GVroX':function(_0x59aa6f,_0x4ba269){return _0x59aa6f+_0x4ba269;},'CLWFt':function(_0x4e8493,_0x48b644,_0x1c9306){return _0x4e8493(_0x48b644,_0x1c9306);},'uIpMK':_0x2fbbc2(0x42d),'DLPJY':function(_0x276aad,_0x7649c6){return _0x276aad===_0x7649c6;},'uqTdG':_0x2fbbc2(0xcf2),'ptzNH':function(_0x453404,_0x5d6411){return _0x453404===_0x5d6411;},'CMYQz':_0x2fbbc2(0x94a),'Jxxzh':'Copy\x20'+_0x2fbbc2(0xd4a)+'d','QLdEB':function(_0x5e44eb,_0x3e969d){return _0x5e44eb+_0x3e969d;},'JAKns':function(_0x452dfb,_0x36d583){return _0x452dfb||_0x36d583;},'bjYLk':'vNpsb','gLPiJ':_0x2fbbc2(0xa18)+'t','IKbum':function(_0x150156,_0x2ffd73){return _0x150156+_0x2ffd73;},'TWArA':function(_0x2d4e9c,_0x4919a6){return _0x2d4e9c+_0x4919a6;},'GjZRy':function(_0x1f14c4,_0x3a9a7e){return _0x1f14c4+_0x3a9a7e;},'WhcFM':_0x2fbbc2(0x594)+'ds\x20·\x20','DcEzB':'\x20writ'+'es','LMkjN':function(_0x4417f6,_0x45c657,_0x4c5488,_0x1fe244,_0x42bf15,_0x1b9e55){return _0x4417f6(_0x45c657,_0x4c5488,_0x1fe244,_0x42bf15,_0x1b9e55);},'FhZQl':function(_0x52b1d3,_0x233752,_0x2d570f){return _0x52b1d3(_0x233752,_0x2d570f);},'VHpaE':_0x2fbbc2(0x832),'CEKtz':_0x2fbbc2(0x506)+_0x2fbbc2(0x78e),'lkJKY':function(_0x16146a,_0x3e51a1,_0x70414,_0xceb95c){return _0x16146a(_0x3e51a1,_0x70414,_0xceb95c);},'nGDnY':'sk-bt'+'n','XTCVi':_0x2fbbc2(0x549)+_0x2fbbc2(0xae7),'Zedbe':'visua'+'ls','pHuRr':'Radar','zvslX':function(_0x507654,_0x14bba6,_0x412993,_0x43818b){return _0x507654(_0x14bba6,_0x412993,_0x43818b);},'kRzDL':function(_0x311143,_0x318564,_0x13f990,_0x44e3c5,_0x2b970c,_0x39049c){return _0x311143(_0x318564,_0x13f990,_0x44e3c5,_0x2b970c,_0x39049c);},'ScyKf':_0x2fbbc2(0x3d5)+'\x20unit'+_0x2fbbc2(0x6d1)+'oss\x20t'+'he\x20ra'+_0x2fbbc2(0xc9c),'wBcxy':'Enabl'+'ed','LXqVl':function(_0x32af0c,_0xb4b0b4){return _0x32af0c+_0xb4b0b4;},'WjYni':function(_0x3c3ebe,_0x5466ce){return _0x3c3ebe+_0x5466ce;},'OyFci':'Field'+_0x2fbbc2(0xa9e)+_0x2fbbc2(0x71b)+'s\x20','mQSvF':'°,\x20ou'+_0x2fbbc2(0x63b)+'\x20the\x20'+'sane\x20'+_0x2fbbc2(0x477)+_0x2fbbc2(0x265)+'t\x20it\x20'+_0x2fbbc2(0x6c4)+'.','wJDCm':function(_0x366161,_0x3d2b67,_0x2a0a68){return _0x366161(_0x3d2b67,_0x2a0a68);},'HcioF':_0x2fbbc2(0x8a5)+_0x2fbbc2(0xa9e)+'iew','tAUmg':_0x2fbbc2(0x916)+_0x2fbbc2(0xb58)+'o\x2075,'+_0x2fbbc2(0xc04)+_0x2fbbc2(0xca3)+_0x2fbbc2(0x851),'yXNGj':_0x2fbbc2(0xc26),'xKJBA':_0x2fbbc2(0x83a)+'orrec'+'tion','TvdBx':'0\x20if\x20'+'boxes'+_0x2fbbc2(0xc75)+'\x20up','rvQUk':_0x2fbbc2(0xb4e)+'\x20','qmvVN':_0x2fbbc2(0x9f6)+'Look\x20','CTPhp':function(_0x31ebb1,_0x2581df){return _0x31ebb1+_0x2581df;},'spQbQ':function(_0x45181a,_0xe89556){return _0x45181a+_0xe89556;},'oFfCZ':function(_0x4e46ef,_0x4894c2){return _0x4e46ef+_0x4894c2;},'xjQRs':'\x0apitc'+'h\x20','aLdoA':function(_0x5e3f04,_0x3aa95c){return _0x5e3f04===_0x3aa95c;},'wimrK':_0x2fbbc2(0x857)+'ON','ctkib':_0x2fbbc2(0xa1c),'yjeHT':_0x2fbbc2(0x2d3)+'\x20','ADyPL':'Enemi'+'es','vbdoy':function(_0x4d1c91,_0x35185f,_0x1c07a6){return _0x4d1c91(_0x35185f,_0x1c07a6);},'ynfSe':'right','grMQC':function(_0x115f45,_0x5b93d2){return _0x115f45(_0x5b93d2);},'NmzrP':_0x2fbbc2(0xb71)+'on','LHqQP':'Playe'+'r','ZkniB':function(_0x17f7d4,_0x309a8d){return _0x17f7d4+_0x309a8d;},'ILJwy':_0x2fbbc2(0x684)+_0x2fbbc2(0x458)+'ed','pFcAl':_0x2fbbc2(0xc41)+_0x2fbbc2(0x652)+'pt+0x'+'C0','tmNxG':function(_0x33ecfd,_0x5c572b){return _0x33ecfd<_0x5c572b;},'nKwOL':'span','MztaM':function(_0x14f719,_0x1e4f51){return _0x14f719(_0x1e4f51);},'JzzBt':function(_0x427e0f,_0x42fee7){return _0x427e0f===_0x42fee7;},'UiisY':function(_0x66800a,_0x3b47aa){return _0x66800a+_0x3b47aa;},'OcXdV':'24px','KPlQD':'auto','demyJ':function(_0x3860c8,_0x3db7f2){return _0x3860c8-_0x3db7f2;},'cExkH':'FGosv','HTdfc':function(_0x3398b8,_0x7d0d59){return _0x3398b8!==_0x7d0d59;},'mFqoz':'jcWtN','oBpbR':_0x2fbbc2(0x2a8),'PnOtX':'mouse'+'up','WJanp':_0x2fbbc2(0x631),'PTwNF':function(_0x168ab8,_0x38466a){return _0x168ab8!==_0x38466a;},'tXODD':_0x2fbbc2(0xcdb),'kdggh':_0x2fbbc2(0x6ad),'PjAnk':_0x2fbbc2(0x9f9)+'a\x20Ski'+_0x2fbbc2(0x8a3)+_0x2fbbc2(0x3e2)+'sert)','hkksv':_0x2fbbc2(0x617)+'a-men'+'u-css','ZvMTq':_0x2fbbc2(0x383)+'de','vTNAO':_0x2fbbc2(0x307)+'in','jaBsX':_0x2fbbc2(0x835)+'p','KoLnu':function(_0x51fb98,_0x14b022,_0x3951d4){return _0x51fb98(_0x14b022,_0x3951d4);},'KNUzy':'start'+_0x2fbbc2(0x936),'mxwPt':function(_0x5cdbc4,_0x1196b3,_0x2afdf2){return _0x5cdbc4(_0x1196b3,_0x2afdf2);},'efedh':'mn-ta'+'b','ndxSz':_0x2fbbc2(0x617)+_0x2fbbc2(0x61d)+'al','tEZyT':'plugi'+_0x2fbbc2(0xb57)+_0x2fbbc2(0x622)+_0x2fbbc2(0x2fe)+_0x2fbbc2(0x481)+_0x2fbbc2(0x2c7)+'Unity'+_0x2fbbc2(0x80a)+_0x2fbbc2(0x4a0)+_0x2fbbc2(0x295)+'me\x20-\x20'+_0x2fbbc2(0x88d)+_0x2fbbc2(0xb06)+'\x20was\x20'+_0x2fbbc2(0x29d)+'\x20','HFFlB':function(_0x5d7f52,_0x160929){return _0x5d7f52===_0x160929;},'jiWuV':_0x2fbbc2(0xa13),'fylUW':function(_0x51c814,_0x55fde2){return _0x51c814===_0x55fde2;},'CWfbs':_0x2fbbc2(0xb37),'qNLBC':_0x2fbbc2(0xa3f)+'nel','ALbqb':function(_0x4b8897,_0x3fa01d){return _0x4b8897!==_0x3fa01d;},'TCMSU':function(_0x37ce2c,_0x50e4b1){return _0x37ce2c/_0x50e4b1;},'ZIRvO':function(_0x2e4a96,_0x5460b4){return _0x2e4a96*_0x5460b4;},'KoDZE':_0x2fbbc2(0xbfd),'qoMbi':function(_0x33ac9f,_0xc6139a){return _0x33ac9f+_0xc6139a;},'GGGTD':'\x20\x20·\x20\x20'+'playe'+_0x2fbbc2(0x8a7),'MUgSv':'\x20\x20·\x20\x20'+_0x2fbbc2(0x6e6),'TqWsc':function(_0x4aae53,_0x356474){return _0x4aae53/_0x356474;},'RSzKX':'[data'+_0x2fbbc2(0x93b),'hsjuX':_0x2fbbc2(0x7b1),'tuPzM':function(_0x2d7820,_0x2a0767){return _0x2d7820+_0x2a0767;},'eYHrm':_0x2fbbc2(0x8da)+'insta'+_0x2fbbc2(0x685)+_0x2fbbc2(0xd35),'ylyEr':function(_0x11b307,_0x32d518){return _0x11b307+_0x32d518;},'WRoST':function(_0x4721e7,_0x58c715){return _0x4721e7===_0x58c715;},'pcnav':_0x2fbbc2(0xa59)+_0x2fbbc2(0x681)+_0x2fbbc2(0x917)+'u','FTOQx':_0x2fbbc2(0x475)+_0x2fbbc2(0xcd1)+_0x2fbbc2(0x75c)+_0x2fbbc2(0x286),'WPUqA':_0x2fbbc2(0x524)+'8','KQnbz':'oRvRZ','UtvIR':function(_0x290b38,_0x2d1b10){return _0x290b38!==_0x2d1b10;},'QimCE':function(_0x35e9d5,_0x43d8ef){return _0x35e9d5===_0x43d8ef;},'gjRCO':function(_0x12648a,_0x109e00){return _0x12648a<_0x109e00;},'vkGNm':function(_0x39a6f2,_0x505ac4){return _0x39a6f2-_0x505ac4;},'OhAeO':function(_0xbe0390,_0x176edc){return _0xbe0390<=_0x176edc;},'ebtDq':function(_0x78561b,_0x5a06b9){return _0x78561b+_0x5a06b9;},'OHfsl':function(_0xb38880,_0x21e057){return _0xb38880===_0x21e057;},'LKLhA':function(_0x25fbf7,_0x170fc9){return _0x25fbf7*_0x170fc9;},'VTERx':function(_0x434f20,_0x28a378){return _0x434f20>_0x28a378;},'NrtcQ':function(_0xebd4dd,_0x39fa69){return _0xebd4dd===_0x39fa69;},'fMBvS':function(_0x110d5f,_0x538529){return _0x110d5f<_0x538529;},'aEpZF':_0x2fbbc2(0x9f6)+_0x2fbbc2(0x5ed)+'camer'+'a','uCXTA':_0x2fbbc2(0x761),'xiOEj':function(_0x253611,_0x4eb277){return _0x253611+_0x4eb277;},'aERMr':function(_0x306a45,_0x5a6c22,_0x3ad6c1){return _0x306a45(_0x5a6c22,_0x3ad6c1);},'JVRfk':function(_0x3fbc1e,_0x2d8da3){return _0x3fbc1e!==_0x2d8da3;},'ceORA':_0x2fbbc2(0x4b4),'KdGwK':function(_0x5d16d5,_0x370827,_0x53de48){return _0x5d16d5(_0x370827,_0x53de48);},'dcKxY':function(_0x38b2de,_0x56d49c){return _0x38b2de===_0x56d49c;},'zUvoc':_0x2fbbc2(0x898),'DsGvo':_0x2fbbc2(0xb73)+_0x2fbbc2(0xcb3)+_0x2fbbc2(0x6fa)+'ce,Co'+_0x2fbbc2(0x688)+_0x2fbbc2(0xc5b)+_0x2fbbc2(0x23c)+'e','ZFhhH':_0x2fbbc2(0x995)+_0x2fbbc2(0x8c5)+'7|9|2'+_0x2fbbc2(0xacf),'MsEie':_0x2fbbc2(0xc80)+_0x2fbbc2(0xb05)+_0x2fbbc2(0x4ae),'BhPYl':_0x2fbbc2(0x4be)+_0x2fbbc2(0x2dd)+'=\x22sak'+'ura-e'+_0x2fbbc2(0x769)+'\x22\x20wid'+_0x2fbbc2(0xa17)+_0x2fbbc2(0xd2f)+_0x2fbbc2(0xac5)+_0x2fbbc2(0x2a5)+_0x2fbbc2(0x838)+_0x2fbbc2(0x85a)+'ispla'+_0x2fbbc2(0x294)+'ck\x22><'+_0x2fbbc2(0x4ff)+_0x2fbbc2(0x9c5),'amQgE':'<div\x20'+_0x2fbbc2(0x625)+_0x2fbbc2(0x1e6)+_0x2fbbc2(0xb22)+_0x2fbbc2(0xbe1)+'tyle='+_0x2fbbc2(0xbbe)+'-alig'+'n:cen'+_0x2fbbc2(0x6fe)+_0x2fbbc2(0x9a9)+'>','oQWdM':function(_0x110b09,_0x1ce223){return _0x110b09+_0x1ce223;},'IhmTM':function(_0xcdbe43){return _0xcdbe43();},'WHYJP':_0x2fbbc2(0x5d3),'nJNnb':function(_0x344924,_0x2a6d04){return _0x344924===_0x2a6d04;},'dbuNa':'canva'+'s','tcTwg':_0x2fbbc2(0x7e3)+_0x2fbbc2(0xd8b)+_0x2fbbc2(0x7b0)+_0x2fbbc2(0x595)+_0x2fbbc2(0xa32),'kHWrQ':function(_0x14f4ab,_0x2dbf7d){return _0x14f4ab(_0x2dbf7d);},'PSRmv':function(_0x210e37,_0x349bc4){return _0x210e37===_0x349bc4;},'bJuON':'bDefc','twCJL':function(_0x4ca3a5,_0x51b349){return _0x4ca3a5===_0x51b349;},'WPbNq':_0x2fbbc2(0x34c),'XymNi':function(_0x1a3931,_0x25c375){return _0x1a3931===_0x25c375;},'QpodJ':function(_0x281898,_0x58f85b){return _0x281898===_0x58f85b;},'VnhgJ':function(_0x899a24,_0x3a572e){return _0x899a24/_0x3a572e;},'pcjJR':_0x2fbbc2(0xbe8)+_0x2fbbc2(0xa7c)+_0x2fbbc2(0xbc4)+_0x2fbbc2(0x608),'RYaNl':_0x2fbbc2(0xbe8)+'255,1'+_0x2fbbc2(0x478)+'6,.95'+')','NtBaL':function(_0x3e92a4,_0x475abc){return _0x3e92a4-_0x475abc;},'cajqg':function(_0x3ee932,_0x24c7a4){return _0x3ee932-_0x24c7a4;},'xGwjW':function(_0x289287,_0x5a28c8){return _0x289287===_0x5a28c8;},'TPgqM':function(_0x98d0a9,_0x725594){return _0x98d0a9<_0x725594;},'FMtpl':function(_0x5dddf0,_0xd8aedc){return _0x5dddf0(_0xd8aedc);},'mRTLj':'vvQOg','ncneB':_0x2fbbc2(0xbe8)+'255,1'+_0x2fbbc2(0x4bf)+_0x2fbbc2(0x4a3)+')','lPpLd':function(_0x3ad4dc,_0x5219e0,_0x449153,_0x331899){return _0x3ad4dc(_0x5219e0,_0x449153,_0x331899);},'Qlcjz':function(_0x4d8611,_0x30fe4e){return _0x4d8611===_0x30fe4e;},'mydsM':function(_0x37333a,_0xb7c96d){return _0x37333a+_0xb7c96d;},'rtuPf':function(_0x26d3f1,_0x178b25){return _0x26d3f1===_0x178b25;},'pbLku':'tZPqN','Yvygq':function(_0x2fcb83,_0x42e9ae){return _0x2fcb83*_0x42e9ae;},'ceNQt':'#4f8f'+'6a','McMBk':function(_0x531ecb,_0x496b00){return _0x531ecb*_0x496b00;},'vfAgS':function(_0x5e0ae5,_0x50323d){return _0x5e0ae5===_0x50323d;},'KuaeV':function(_0x316d66,_0x15863e){return _0x316d66-_0x15863e;},'MgCqg':function(_0x5bbaa7,_0x3526ec){return _0x5bbaa7+_0x3526ec;},'OWWWL':_0x2fbbc2(0xbd4)+'v\x20','RyGWp':function(_0x244147,_0xb65330){return _0x244147(_0xb65330);},'lYxGD':function(_0xf81c75,_0x48a551){return _0xf81c75+_0x48a551;},'tdymB':'esp\x20','JJjAT':'0x28\x20'+_0x2fbbc2(0x789)+'s)','MssZd':function(_0x521567,_0x1b5cbe){return _0x521567<=_0x1b5cbe;},'rtiOH':_0x2fbbc2(0x32e)+_0x2fbbc2(0xd6d)+'ed','LglNf':_0x2fbbc2(0x6e9),'jgiAh':function(_0x3f2af3,_0x5afda7){return _0x3f2af3+_0x5afda7;},'JjXzf':function(_0x12a09e,_0x34b314){return _0x12a09e===_0x34b314;},'QCYQQ':'yAWGa','gNMcj':function(_0x2f928b){return _0x2f928b();},'THesn':function(_0x2eb3fd){return _0x2eb3fd();},'FmeYS':function(_0x5b134c,_0x32af87){return _0x5b134c+_0x32af87;},'SjmTH':function(_0x312746,_0x25c9ed){return _0x312746+_0x25c9ed;},'wzHvG':function(_0xa02b71,_0x806b53){return _0xa02b71+_0x806b53;},'AoEht':'ms\x20wi'+_0x2fbbc2(0x50b)+_0x2fbbc2(0x930)+_0x2fbbc2(0x28c)+'=','aGISp':'\x20and\x20'+'game\x20'+_0x2fbbc2(0x52d)+_0x2fbbc2(0x4b6),'ooyGB':function(_0x309257,_0x52724e){return _0x309257+_0x52724e;},'EDgAX':'Unity'+_0x2fbbc2(0x35c)+'ance\x20'+_0x2fbbc2(0x52c)+'esolv'+'ed\x20ye'+_0x2fbbc2(0x2e9)+'urce:'+'\x20','sJSIC':_0x2fbbc2(0x5fb)+'reads'+_0x2fbbc2(0x751)+_0x2fbbc2(0x96b)+_0x2fbbc2(0xa7b)+_0x2fbbc2(0x902)+_0x2fbbc2(0x4ec)+_0x2fbbc2(0xc31)+_0x2fbbc2(0xc73)+_0x2fbbc2(0x72c)+'odule'+'.HEAP'+'U8\x20is'+_0x2fbbc2(0xc60)+_0x2fbbc2(0xd4c)+'.','VIKoW':'xBSZg','CKaZS':'windo'+'w.Uni'+'tyWeb'+'Modki'+_0x2fbbc2(0x749)+_0x2fbbc2(0x1fe)+_0x2fbbc2(0x8f4)+'is\x20mi'+_0x2fbbc2(0x580)+_0x2fbbc2(0xaea)+_0x2fbbc2(0x5d9)+_0x2fbbc2(0xd9c)+_0x2fbbc2(0x5e0)+'g\x20bli'+_0x2fbbc2(0x328),'eQKFs':'nXdaA','AOBAY':function(_0x4360f8,_0x5d0c83){return _0x4360f8+_0x5d0c83;},'LzCAn':function(_0x1cd8b8,_0x2ba1e6){return _0x1cd8b8+_0x2ba1e6;},'OkhjA':function(_0x30357f,_0x3c2406){return _0x30357f+_0x3c2406;},'Nzprk':_0x2fbbc2(0xcb7),'nsKyK':_0x2fbbc2(0xa65)+_0x2fbbc2(0x52d)+_0x2fbbc2(0x6b5),'GYDrL':'\x20of\x20','doxIK':_0x2fbbc2(0x2c3)+_0x2fbbc2(0xa54)+_0x2fbbc2(0xab3)+_0x2fbbc2(0x2f5)+_0x2fbbc2(0x82b)+_0x2fbbc2(0x3e3)+_0x2fbbc2(0x367)+_0x2fbbc2(0x58a)+_0x2fbbc2(0xaff)+_0x2fbbc2(0xac4)+_0x2fbbc2(0x650)+_0x2fbbc2(0x9a8)+_0x2fbbc2(0x80d)+'ad.','rIpeY':'1|0|4'+_0x2fbbc2(0xcb6),'XdNfp':function(_0x399e83,_0x3fdd6c){return _0x399e83+_0x3fdd6c;},'fPhIQ':function(_0x1af810,_0x89b618){return _0x1af810+_0x89b618;},'pNeUz':_0x2fbbc2(0x9be)+_0x2fbbc2(0xb7a)+_0x2fbbc2(0x630)+'lWarz'+_0x2fbbc2(0x3ab)+'rt','DPTzA':function(_0x51a159,_0x5f08ee){return _0x51a159(_0x5f08ee);},'suLRX':_0x2fbbc2(0xbe8)+'255,1'+'43,17'+_0x2fbbc2(0x5bf)+')','QNfFW':function(_0x2ae986){return _0x2ae986();},'BWCDa':function(_0x1f57b9,_0x2c3fce){return _0x1f57b9<_0x2c3fce;},'gSrZm':function(_0x4dbf60,_0x18f41d,_0x4f9cb6){return _0x4dbf60(_0x18f41d,_0x4f9cb6);},'ANgBy':function(_0x389b73){return _0x389b73();},'XhziM':_0x2fbbc2(0x628),'pHkgE':function(_0x98e8e0,_0x4a723b,_0x4bcb03){return _0x98e8e0(_0x4a723b,_0x4bcb03);},'enMeV':_0x2fbbc2(0x8d0),'WAeun':_0x2fbbc2(0x7d0)+'l','JlbBI':_0x2fbbc2(0x55f)+'er','qUvLB':_0x2fbbc2(0x7fc)+'r','EUFrh':'kiLKY','sStVj':_0x2fbbc2(0x9be)+'kura]'+_0x2fbbc2(0x9fd)+_0x2fbbc2(0x780)+_0x2fbbc2(0xbfc)+'IVE\x20('+'relay'+_0x2fbbc2(0x280)+_0x2fbbc2(0xd8f),'CPPwW':_0x2fbbc2(0x9be)+_0x2fbbc2(0xb7a)+_0x2fbbc2(0x6a9)+'AL\x20AC'+_0x2fbbc2(0x58d),'LnTtW':_0x2fbbc2(0x617)+_0x2fbbc2(0xcc0)+_0x2fbbc2(0x973)+_0x2fbbc2(0x344)+'en','lwBXW':_0x2fbbc2(0x598)+_0x2fbbc2(0x97e)+'Loade'+'d','CFxEi':function(_0x59394b,_0x35fb04,_0x12a851){return _0x59394b(_0x35fb04,_0x12a851);},'RIbeT':_0x2fbbc2(0xbe2),'vrWeE':function(_0x587246,_0x3c39ea){return _0x587246!==_0x3c39ea;},'NCycE':_0x2fbbc2(0xb91),'OHjhI':'\u008d\u0091\u008e\u008a\u008a'+_0x2fbbc2(0x35e)+'\u0092','wiwoY':'LateU'+_0x2fbbc2(0x4d1),'btCDY':'\u0088\u0091\u008b\u0087\u0087'+'\u008e\u008f\u0091\u0088\u008c'+'\u0095','OWypi':_0x2fbbc2(0xd1b)+_0x2fbbc2(0x61b)+'\u0090','NjqrF':_0x2fbbc2(0x877)+_0x2fbbc2(0xa8f)+'\u0088','fDENW':_0x2fbbc2(0xa1d)+'\u008c\u0090\u0089\u0086\u0092'+'\u0092','kgXsr':_0x2fbbc2(0x614)+_0x2fbbc2(0xac1)+'\u008a','gvhbf':_0x2fbbc2(0x8a2)+_0x2fbbc2(0xceb)+'\u0093','hVdbX':_0x2fbbc2(0x261)+_0x2fbbc2(0x409)+'\u008a','fGEUu':_0x2fbbc2(0xca5)+_0x2fbbc2(0x655)+'\u0086','KwNND':'\u008b\u0092\u0089\u0090\u008d'+_0x2fbbc2(0xc65)+'\u0088','zRDnJ':_0x2fbbc2(0x87d)+_0x2fbbc2(0x9d2)+'\u008a','CmIxj':'\u0090\u008e\u0095\u0093\u008d'+_0x2fbbc2(0x58b)+'\u0093','OMErN':_0x2fbbc2(0x2d8)+_0x2fbbc2(0x93e)+'\u0090','vVVTt':_0x2fbbc2(0xc64)+'\u008f\u0091\u008e\u008d\u0086'+'\u008d','qHceZ':'\u0089\u008c\u0095\u0088\u008a'+'\u0094\u0090\u0094\u008c\u0094'+'\u0094','HMXrH':_0x2fbbc2(0x7c6)+'\u0086\u008b\u0091\u0087\u008a'+'\u008b','Eiuqh':'\u0092\u0088\u008b\u0095\u0089'+_0x2fbbc2(0x57c)+'\u008a','IyQGP':_0x2fbbc2(0x3b6),'mtLHp':_0x2fbbc2(0x435)+'\u008b\u0094\u0088\u0090\u0088'+'\u008a','kChVm':_0x2fbbc2(0x633)+'\u0095\u0089\u008b\u008d\u008a'+'\u008b','svvbY':_0x2fbbc2(0x7c3)+'\u0086\u0090\u0086\u0091\u008a'+'\u0092','eEBsL':_0x2fbbc2(0x4b0)+'\u0090\u0089\u008f\u008e\u0093'+'\u008e','GkxWe':'\u0091\u0088\u0095\u0088\u0088'+'\u0086\u008c\u008a\u008b\u0086'+'\u0089','EyDGf':'\u008f\u0092\u008d\u008d\u0089'+_0x2fbbc2(0x9d5)+'\u0086','BhSVk':_0x2fbbc2(0xbf1)+'\u0092\u0094\u0087\u008d\u008c'+'\u008b','VffEJ':'\u008c\u0089\u008b\u0092\u0093'+'\u0089\u008e\u0095\u0095\u0087'+'\u008a','PHFDC':_0x2fbbc2(0xad4)+'\u008b\u0089\u0089\u0088\u0093'+'\u0092','QzfBm':_0x2fbbc2(0x551)+'\u0095\u008e\u008c\u008c\u0092'+'\u0091','ZRDaW':'\u0093\u0086\u0088\u008d\u008f'+'\u0094\u0087\u008c\u0091\u008a'+'\u0094','BmmUV':'\u0094\u0087\u008b\u008d\u0089'+_0x2fbbc2(0x7d6)+'\u0090','aSZlI':'\u0094\u0094\u008e\u0091\u0090'+'\u008c\u0091\u008c\u008a\u008f'+'\u0095','XGuFm':_0x2fbbc2(0x4b7)+_0x2fbbc2(0x30a)+'\u0094','gtbhJ':_0x2fbbc2(0xa83)+'\u0088\u0091\u0095\u0092\u0092'+'\u008f','KMIzJ':'\u008e\u008b\u0095\u0092\u008e'+_0x2fbbc2(0x1e1)+'\u0086','xVynm':'.ctor','GLADI':_0x2fbbc2(0x870)+'\u0095\u0094\u008b\u0093\u008a'+'\u008f','dcZqz':_0x2fbbc2(0xa2b)+'\u008e\u0089\u0093\u0095\u0094'+'\u0094','bTFjz':_0x2fbbc2(0xa8b)+_0x2fbbc2(0x737)+'\u008c','YVyxD':_0x2fbbc2(0x5cc)+_0x2fbbc2(0x596)+'\u008e','ZhTJy':_0x2fbbc2(0x4fa)+'\u0094\u008a\u0092\u0087\u0092'+'\u0086','obUVU':_0x2fbbc2(0x591)+_0x2fbbc2(0xd97)+'\u008f','tOFkP':'\u008d\u008c\u0086\u0094\u008d'+'\u0091\u0095\u0088\u008f\u0088'+'\u008c','LftpR':_0x2fbbc2(0xcb0)+_0x2fbbc2(0x794)+'\u0095','VvpkC':'\u008e\u0091\u0092\u0087\u0089'+'\u0086\u0094\u0094\u008e\u008d'+'\u0090','tSWBj':_0x2fbbc2(0x863)+_0x2fbbc2(0x42f)+'\u008a','doyUU':'int','tuFzp':_0x2fbbc2(0x541)+_0x2fbbc2(0x796)+'\u0086','tdRTm':_0x2fbbc2(0xb83)+'\u0090\u008d\u0094\u0087\u0091'+'\u0094','LjoQv':_0x2fbbc2(0x36d)+_0x2fbbc2(0x648)+'\u0094','TcKDe':_0x2fbbc2(0x237)+_0x2fbbc2(0x885)+'\u0086','BjYRP':_0x2fbbc2(0x326)+'\u0091\u0089\u0093\u0089\u0089'+'\u008c','qEGUf':_0x2fbbc2(0xa39)+'\u008e\u0090\u0087\u0087\u0092'+'\u008e','OxGgh':'\u0088\u008c\u0089\u008e\u0095'+'\u008a\u0087\u0092\u0095\u0086'+'\u008e','cKEQA':_0x2fbbc2(0x7fe)+_0x2fbbc2(0x390)+'\u008c','qAaBy':_0x2fbbc2(0x76a)+'\u008e\u008f\u008c\u0088\u0086'+'\u0091','osliJ':_0x2fbbc2(0x6f6)+'licat'+_0x2fbbc2(0x921)+_0x2fbbc2(0x285),'JScCt':_0x2fbbc2(0xb33)+_0x2fbbc2(0x8f1)+'\u008f','kSTBV':_0x2fbbc2(0xd1a)+_0x2fbbc2(0x98e)+'\u0088','XkFrG':_0x2fbbc2(0x6d4)+_0x2fbbc2(0x8e0)+'\u0094','uFLEP':_0x2fbbc2(0xc92)+_0x2fbbc2(0x711)+'\u0095','SHmGU':_0x2fbbc2(0x60c)+'\u0092\u0091\u0094\u008d\u0093'+'\u0086','PBxKY':_0x2fbbc2(0x5fe)+_0x2fbbc2(0x6b3)+'\u008a','JzdOd':_0x2fbbc2(0x9ef)+_0x2fbbc2(0x26d)+'\u0095','dGmNM':_0x2fbbc2(0xd4d)+_0x2fbbc2(0xd13)+'\u0089','AaJwZ':_0x2fbbc2(0x431)+'meMan'+_0x2fbbc2(0x429),'mLpHM':_0x2fbbc2(0x88a)+_0x2fbbc2(0x72d)+_0x2fbbc2(0x6ba)+'.dll','FzlIv':_0x2fbbc2(0x88a)+_0x2fbbc2(0x72d)+_0x2fbbc2(0x6ba)+'-firs'+_0x2fbbc2(0x2c9)+_0x2fbbc2(0x503),'LfWGE':_0x2fbbc2(0x8c3)+_0x2fbbc2(0x963),'WwhvD':'__Gen'+_0x2fbbc2(0x3c5)+'d','jvwRf':'obfB','PiqAa':_0x2fbbc2(0x5b1),'moBlC':_0x2fbbc2(0x4d3),'evyGj':_0x2fbbc2(0xd45),'IMQeV':'mouse'+'Look','PUpGS':_0x2fbbc2(0x6a5),'rLWNH':_0x2fbbc2(0x1f1)+'h','yEBSe':_0x2fbbc2(0x5f1),'icuep':_0x2fbbc2(0x4b9),'VCrqA':_0x2fbbc2(0xb6b)+'wn','XAZsC':function(_0x25201c,_0x543b99){return _0x25201c(_0x543b99);},'oHQau':function(_0x32b8c1,_0x346bb1){return _0x32b8c1(_0x346bb1);},'uwNkp':'sakur'+_0x2fbbc2(0xcc0)+_0x2fbbc2(0x8f6)+'pos','pyTbR':_0x2fbbc2(0x52a),'zsYVo':function(_0x110134,_0x2e9d3a){return _0x110134+_0x2e9d3a;},'xiomF':function(_0x2dad53,_0x5249f1){return _0x2dad53+_0x5249f1;},'MAeoM':function(_0x4deba3,_0x2c326e){return _0x4deba3+_0x2c326e;},'HVBee':function(_0x340e5b,_0x3c1960){return _0x340e5b+_0x3c1960;},'hhItq':function(_0xfedcfb,_0x3c2f24){return _0xfedcfb+_0x3c2f24;},'svOis':function(_0x1078cf,_0x43628e){return _0x1078cf+_0x43628e;},'klFBj':function(_0x2b10b6,_0xfa915d){return _0x2b10b6+_0xfa915d;},'uPkok':function(_0x521633,_0x4e3a31){return _0x521633+_0x4e3a31;},'bXniT':function(_0x108d50,_0x4e1841){return _0x108d50+_0x4e1841;},'tKvnB':function(_0x531028,_0x16466a){return _0x531028+_0x16466a;},'lFGJo':_0x2fbbc2(0xc80)+'ra-me'+'nu-ro'+'ot.mn'+_0x2fbbc2(0x1e9)+_0x2fbbc2(0xa87)+'ition'+':fixe'+_0x2fbbc2(0xb00)+_0x2fbbc2(0xa82)+_0x2fbbc2(0xac8)+_0x2fbbc2(0xb8f)+_0x2fbbc2(0x373)+'width'+_0x2fbbc2(0x8f9)+_0x2fbbc2(0x4a4)+_0x2fbbc2(0x881)+_0x2fbbc2(0x66a)+'w\x20-\x204'+'8px))'+';max-'+_0x2fbbc2(0x92e)+'t:min'+'(500p'+_0x2fbbc2(0x59e)+'c(100'+_0x2fbbc2(0x7f4)+_0x2fbbc2(0x81f)+');','gwuQP':_0x2fbbc2(0xce4)+_0x2fbbc2(0x26a)+':0\x200\x20'+_0x2fbbc2(0x6d7)+'\x20rgba'+_0x2fbbc2(0x9a6)+_0x2fbbc2(0xd1d)+_0x2fbbc2(0x454)+_0x2fbbc2(0xc4f)+'set\x200'+_0x2fbbc2(0x827)+'0\x20rgb'+'a(255'+_0x2fbbc2(0x9b1)+'255,.'+'05),0'+_0x2fbbc2(0x21f)+'\x2080px'+'\x20rgba'+_0x2fbbc2(0x8c4)+'0,.55'+');','YMZya':_0x2fbbc2(0xc80)+'ra-me'+'nu-ro'+_0x2fbbc2(0x3d0)+_0x2fbbc2(0x1e9)+'l.sho'+'wn{op'+_0x2fbbc2(0xcc5)+_0x2fbbc2(0x348)+_0x2fbbc2(0x728)+'rm:no'+'ne;po'+_0x2fbbc2(0x8f2)+'-even'+'ts:au'+_0x2fbbc2(0x8d1),'nmruo':_0x2fbbc2(0x727)+'r-rad'+_0x2fbbc2(0xb69)+_0x2fbbc2(0x266)+'ackgr'+_0x2fbbc2(0x9c6)+_0x2fbbc2(0xbe8)+_0x2fbbc2(0xd1d)+_0x2fbbc2(0xa75)+_0x2fbbc2(0xbb4)+_0x2fbbc2(0xb0e)+_0x2fbbc2(0x55c)+_0x2fbbc2(0x3ca)+'nset\x20'+_0x2fbbc2(0x5f6)+'\x201px\x20'+_0x2fbbc2(0xbe8)+_0x2fbbc2(0xd1d)+_0x2fbbc2(0xa75)+_0x2fbbc2(0x254)+');}','gaeAo':_0x2fbbc2(0x28e)+_0x2fbbc2(0xd06)+_0x2fbbc2(0x9d3)+_0x2fbbc2(0x29a)+_0x2fbbc2(0x1f5)+_0x2fbbc2(0xac5)+':25px'+_0x2fbbc2(0xb6e)+'flow:'+_0x2fbbc2(0x739)+_0x2fbbc2(0xced)+_0x2fbbc2(0x79d)+'drop-'+'shado'+'w(0\x200'+_0x2fbbc2(0x7ff)+_0x2fbbc2(0xbe8)+_0x2fbbc2(0x389)+'07,15'+_0x2fbbc2(0xb65)+');}','bsCZa':_0x2fbbc2(0x7f3)+_0x2fbbc2(0xc15)+'tive{'+'color'+_0x2fbbc2(0x96c)+_0x2fbbc2(0x3b0)+_0x2fbbc2(0x57d)+'ound:'+_0x2fbbc2(0xbe8)+_0x2fbbc2(0x389)+'07,15'+_0x2fbbc2(0xd37)+';}','TWuIF':_0x2fbbc2(0x544)+'ain{f'+_0x2fbbc2(0x559)+_0x2fbbc2(0x1f3)+_0x2fbbc2(0x582)+_0x2fbbc2(0x84d)+_0x2fbbc2(0x795)+':flex'+';flex'+_0x2fbbc2(0x6c1)+_0x2fbbc2(0x6e3)+':colu'+'mn;}','zGVbD':_0x2fbbc2(0xc1b)+_0x2fbbc2(0x5dc)+_0x2fbbc2(0x78a)+_0x2fbbc2(0x80b)+';font'+'-weig'+_0x2fbbc2(0x38b)+'0;}','OXFEu':_0x2fbbc2(0x671)+_0x2fbbc2(0xd51)+_0x2fbbc2(0x3f1)+_0x2fbbc2(0xbdc)+_0x2fbbc2(0x757)+_0x2fbbc2(0xcc5)+':.4;}','vMXzs':'.mn-c'+_0x2fbbc2(0x22f)+'svg{w'+_0x2fbbc2(0x387)+'14px;'+_0x2fbbc2(0x92e)+'t:14p'+_0x2fbbc2(0x4b1)+'l:non'+_0x2fbbc2(0x5c2)+_0x2fbbc2(0x8d7)+_0x2fbbc2(0xa58)+_0x2fbbc2(0x56a)+'r;str'+_0x2fbbc2(0x418)+_0x2fbbc2(0x387)+_0x2fbbc2(0xb40)+'oke-l'+_0x2fbbc2(0x550)+_0x2fbbc2(0x7a4)+'nd;}','MEQpQ':'.mn-c'+_0x2fbbc2(0x9b3)+_0x2fbbc2(0x559)+_0x2fbbc2(0x1f3)+'heigh'+'t:0;o'+_0x2fbbc2(0x4fc)+_0x2fbbc2(0x911)+_0x2fbbc2(0x8b2)+_0x2fbbc2(0x7b6)+'ay:gr'+'id;gr'+_0x2fbbc2(0xd2c)+_0x2fbbc2(0xb48)+'e-col'+_0x2fbbc2(0x4ed)+'repea'+_0x2fbbc2(0xaa0)+_0x2fbbc2(0x41c)+_0x2fbbc2(0x296)+'max(2'+_0x2fbbc2(0x750)+_0x2fbbc2(0x94d)+';','vQBPl':_0x2fbbc2(0x808)+'-item'+'s:sta'+_0x2fbbc2(0x2b5)+_0x2fbbc2(0xbb8)+_0x2fbbc2(0x98d)+_0x2fbbc2(0xbaa)+_0x2fbbc2(0x75d)+'p:10p'+_0x2fbbc2(0x203)+_0x2fbbc2(0x365)+_0x2fbbc2(0x7ee)+'\x206px\x20'+'0;}','PLeuZ':'.mn-c'+'ols::'+'-webk'+_0x2fbbc2(0x3d9)+_0x2fbbc2(0xb0a)+'ar-th'+_0x2fbbc2(0x653)+_0x2fbbc2(0x57d)+_0x2fbbc2(0x9c6)+_0x2fbbc2(0xbe8)+'255,2'+_0x2fbbc2(0xa75)+'5,.08'+');bor'+_0x2fbbc2(0xd24)+_0x2fbbc2(0xbab)+':4px;'+'}','KTKcG':_0x2fbbc2(0xc98)+_0x2fbbc2(0x379)+_0x2fbbc2(0x502)+_0x2fbbc2(0x8d9)+_0x2fbbc2(0xafe)+_0x2fbbc2(0x7c8)+'}','VTsnz':'.sk-m'+_0x2fbbc2(0xae4)+_0x2fbbc2(0x2a3)+'size:'+'11px;'+_0x2fbbc2(0x534)+_0x2fbbc2(0x63c)+';marg'+_0x2fbbc2(0xb93)+_0x2fbbc2(0xb8f)+_0x2fbbc2(0xb74)+_0x2fbbc2(0xb7c)+'space'+':pre-'+'wrap;'+'}','iXeHy':'.sk-r'+_0x2fbbc2(0x730)+_0x2fbbc2(0x7b6)+'ay:fl'+'ex;al'+_0x2fbbc2(0xc4d)+'tems:'+_0x2fbbc2(0xcbc)+'r;gap'+_0x2fbbc2(0x3de)+'}','sVxUT':'.sk-s'+_0x2fbbc2(0x73b)+'{-web'+'kit-a'+_0x2fbbc2(0xa49)+_0x2fbbc2(0xa12)+'none;'+_0x2fbbc2(0x2b1)+'rance'+':none'+_0x2fbbc2(0x4cb)+_0x2fbbc2(0x470)+_0x2fbbc2(0x250)+_0x2fbbc2(0xb3d)+_0x2fbbc2(0xcbe)+_0x2fbbc2(0xa8e)+'und:t'+_0x2fbbc2(0x45f)+'arent'+';}','kkAJZ':_0x2fbbc2(0x1e2)+'round'+_0x2fbbc2(0x918)+_0x2fbbc2(0x2e5)+'adien'+_0x2fbbc2(0x463)+'6b9d,'+_0x2fbbc2(0xa98)+'9d)\x200'+_0x2fbbc2(0x8a9)+'var(-'+_0x2fbbc2(0x260)+'%)\x2010'+_0x2fbbc2(0xc63)+_0x2fbbc2(0x910)+_0x2fbbc2(0xd5d)+'ba(25'+_0x2fbbc2(0xccc)+_0x2fbbc2(0x9b1)+_0x2fbbc2(0xc14)+'}','LwQHR':_0x2fbbc2(0x876)+_0x2fbbc2(0x34a)+_0x2fbbc2(0xa4e)+_0x2fbbc2(0x618)+_0x2fbbc2(0x38e)+_0x2fbbc2(0x38a)+'borde'+_0x2fbbc2(0x96f)+'order'+'-radi'+_0x2fbbc2(0x53e)+_0x2fbbc2(0x203)+'ding:'+_0x2fbbc2(0x90e)+_0x2fbbc2(0x266)+_0x2fbbc2(0x57d)+_0x2fbbc2(0x9c6)+_0x2fbbc2(0xa98)+_0x2fbbc2(0x374)+'lor:#'+'fff;','PaPSB':_0x2fbbc2(0x56d)+_0x2fbbc2(0x6d8)+':opac'+_0x2fbbc2(0x4e8)+_0x2fbbc2(0x483)+_0x2fbbc2(0x8f2)+_0x2fbbc2(0xcec)+_0x2fbbc2(0x70d)+_0x2fbbc2(0x7cd)+_0x2fbbc2(0x79d)+_0x2fbbc2(0x4b5)+_0x2fbbc2(0xa6e)+_0x2fbbc2(0x5c4)+'\x204px\x20'+_0x2fbbc2(0xbe8)+_0x2fbbc2(0x389)+_0x2fbbc2(0x67d)+'7,.7)'+');}','dzqFx':function(_0x48fd00,_0x1a1b05){return _0x48fd00+_0x1a1b05;},'BYIQk':function(_0x54c931,_0x326226){return _0x54c931+_0x326226;},'eTCvt':_0x2fbbc2(0x35d)+_0x2fbbc2(0x8f3)+'ox=\x220'+_0x2fbbc2(0x773)+'\x2024\x22>'+_0x2fbbc2(0xa73)+'\x20d=\x22M'+'12\x2021'+'c-1.5'+_0x2fbbc2(0x256)+_0x2fbbc2(0x26c)+_0x2fbbc2(0xbdd)+_0x2fbbc2(0x875)+'.5\x201.'+_0x2fbbc2(0xcb8)+'\x204-4.'+_0x2fbbc2(0x484)+_0x2fbbc2(0xb0b)+'5c0\x203'+_0x2fbbc2(0x97d)+'5-4\x207'+_0x2fbbc2(0x485),'jvUvW':_0x2fbbc2(0x670)+_0x2fbbc2(0x45c)+_0x2fbbc2(0x807)+_0x2fbbc2(0x272)+'#ff6b'+_0x2fbbc2(0xa85)+'troke'+'-widt'+'h=\x222\x22'+_0x2fbbc2(0x6f7)+_0x2fbbc2(0x1f6)+'necap'+_0x2fbbc2(0x829)+'nd\x22\x20s'+'troke'+'-line'+_0x2fbbc2(0xcff)+'\x22roun'+_0x2fbbc2(0x243),'BXwTJ':_0x2fbbc2(0x2ce)+_0x2fbbc2(0x7ce)+_0x2fbbc2(0x767)+'\x20cy=\x22'+_0x2fbbc2(0xc12)+_0x2fbbc2(0x904)+'\x22\x20fil'+_0x2fbbc2(0x820)+'f6b9d'+_0x2fbbc2(0x525)+'svg>','APWwD':_0x2fbbc2(0x35d)+_0x2fbbc2(0x316)+'=\x22mn-'+_0x2fbbc2(0x845)+'svg\x22\x20'+_0x2fbbc2(0x8f3)+'ox=\x220'+_0x2fbbc2(0x773)+'\x2024\x22>'+'<path'+'\x20d=\x22M'+_0x2fbbc2(0x4da)+_0x2fbbc2(0x856)+'-2.5-'+'4-4.5'+_0x2fbbc2(0xbdd)+_0x2fbbc2(0x875)+_0x2fbbc2(0x275)+_0x2fbbc2(0xcb8)+'\x204-4.'+'5s4\x202'+'\x204\x204.'+_0x2fbbc2(0x3bd)+_0x2fbbc2(0x97d)+_0x2fbbc2(0x5e1)+_0x2fbbc2(0x485),'rfIzo':'<circ'+_0x2fbbc2(0x7ce)+_0x2fbbc2(0x767)+'\x20cy=\x22'+'10\x22\x20r'+'=\x221.2'+_0x2fbbc2(0x3ef)+_0x2fbbc2(0x820)+_0x2fbbc2(0x548)+'\x22/></'+_0x2fbbc2(0xb17)};var _0x1108e0=location['hostn'+'ame']||'',_0x335e1f=/(^|\.)www\.crazygames\.com$/[_0x2fbbc2(0xcd7)](_0x1108e0),_0x530906=/(^|\.)games\.crazygames\.com$/[_0x2fbbc2(0xcd7)](_0x1108e0),_0x29f6a1=/(^|\.)crazygames\.com$/['test'](_0x1108e0)&&!_0x335e1f&&!_0x530906,_0x4a7871=_0x335e1f?_0xba7dc7[_0x2fbbc2(0x53c)]:_0x530906?_0xba7dc7['JlbBI']:_0xba7dc7[_0x2fbbc2(0xb2b)];if(!_0x335e1f&&!_0x530906&&!_0x29f6a1)return;var _0x2660e4=_0x2fbbc2(0x91a)+'b1',_0x356741=_0x2fbbc2(0x68d)+'ura_s'+_0x2fbbc2(0xc33),_0x2e43a2='===SA'+'KURA-'+'SKILL'+'WARZ-'+_0x2fbbc2(0x804)+'===',_0x18aa39='===SA'+'KURA-'+_0x2fbbc2(0x46b)+'WARZ-'+'END=='+'=',_0x1a991b=_0x2fbbc2(0x76c)+'0';if(_0x530906){if('QCSJg'===_0xba7dc7['EUFrh']){var _0x43d03d=_0x7119c(_0x2fbbc2(0x50f)+_0x2fbbc2(0xca4)+'ler',_0x12c7b6[_0x34c2a2[_0x25021f]]['ptr']);_0x43d03d['hits']=_0xc6b888[_0xa664d9[_0x4b1481]]['hits'],_0x43d03d['isLoc'+'al']=_0xba7dc7[_0x2fbbc2(0x6f5)](_0x3637ec[_0x1a7235[_0x4e9db7]][_0x2fbbc2(0xaf3)],_0x5bb16b),_0x2a3a6d['contr'+'oller'+'s'][_0x2fbbc2(0x3ad)](_0x43d03d);}else{window[_0x2fbbc2(0x5ea)+_0x2fbbc2(0x23e)+_0x2fbbc2(0xb8a)+'r']('messa'+'ge',function(_0x17ede4){var _0x43a106=_0x2fbbc2,_0x4eb89f={'nnTRj':'aria-'+_0x43a106(0xd6d)+'ed'},_0x5b2802=_0x17ede4['data'];if(!_0x5b2802||_0xba7dc7[_0x43a106(0x4c5)](_0x5b2802[_0x43a106(0x68d)+'ura'],_0x356741))return;try{if(window['paren'+'t']&&_0xba7dc7['bCBTL'](window[_0x43a106(0x2cf)+'t'],window))window[_0x43a106(0x2cf)+'t'][_0x43a106(0xaab)+_0x43a106(0xc78)+'e'](_0x5b2802,'*');if(window[_0x43a106(0xab1)]&&_0xba7dc7[_0x43a106(0x4c0)](window[_0x43a106(0xab1)],window))window['top'][_0x43a106(0xaab)+_0x43a106(0xc78)+'e'](_0x5b2802,'*');}catch(_0x1fa77e){}if(_0x5b2802&&_0x5b2802[_0x43a106(0xc68)]===_0xba7dc7['HxQJy']){if(_0xba7dc7['tpmed']===_0xba7dc7[_0x43a106(0x381)])try{var _0x454d6b=document[_0x43a106(0xae5)+'Selec'+_0x43a106(0xbed)+'l'](_0x43a106(0x3a6)+'e');for(var _0x205d00=0x1*0xb32+0x7de*-0x2+0x48a;_0xba7dc7[_0x43a106(0xbbb)](_0x205d00,_0x454d6b[_0x43a106(0x25f)+'h']);_0x205d00++){if(_0x43a106(0x3b2)!==_0x43a106(0x7ba))try{if(_0x454d6b[_0x205d00][_0x43a106(0x952)+'ntWin'+'dow'])_0x454d6b[_0x205d00][_0x43a106(0x952)+_0x43a106(0x2f9)+_0x43a106(0xd15)][_0x43a106(0xaab)+_0x43a106(0xc78)+'e'](_0x5b2802,'*');}catch(_0x338a1a){}else{var _0x4d74a4=(_0x43a106(0xc11)+_0x43a106(0x844)+_0x43a106(0x8b3))[_0x43a106(0xb3c)]('|'),_0x41f8f2=0x4cf*-0x3+0x1a23+-0xbb6;while(!![]){switch(_0x4d74a4[_0x41f8f2++]){case'0':_0x1e817c[_0x43a106(0xab9)+'ck']=function(){_0x40173f(!_0x58f83f()),_0x22a586();};continue;case'1':_0x22a586();continue;case'2':var _0x22a586=function(){var _0x10235e=_0x43a106;_0x1e817c[_0x10235e(0x2d1)+_0x10235e(0x5b4)+'te'](_0x4eb89f[_0x10235e(0x899)],_0x758ad7()?_0x10235e(0xabe):'false');};continue;case'3':_0x1e817c[_0x43a106(0x6a5)]=_0x22a586;continue;case'4':_0x405e03[_0x43a106(0x581)]['push'](_0x22a586);continue;case'5':return _0x1e817c;case'6':var _0x1e817c=_0x3d2ff6(_0x43a106(0x603)+'n',_0x43a106(0x938)+_0x43a106(0x511));continue;case'7':_0x1e817c[_0x43a106(0x72e)]='butto'+'n';continue;}break;}}}}catch(_0x4cbb61){}else{var _0x412e65=_0x45615a[0x22*0x3d+-0x6*-0x1ac+-0x1221]['val']();if(_0x412e65)_0x771ea2=_0x412e65;}}}),console[_0x2fbbc2(0x656)](_0xba7dc7['sStVj'],_0x2fbbc2(0xc0f)+':'+_0x2660e4);return;}}if(_0x335e1f){console['log'](_0xba7dc7[_0x2fbbc2(0x86d)],_0x2fbbc2(0xc0f)+':'+_0x2660e4+(';font'+_0x2fbbc2(0x8af)+_0x2fbbc2(0x6ee)+'0'),{'host':_0x1108e0});var _0xe067c0={'set':function(){},'command':function(){}};function _0x40ab6b(_0x5ad560,_0x4fa292){var _0x1d4e60=_0x2fbbc2,_0x11ebc9={'__sakura':_0x356741,'kind':'cmd','cmd':_0x5ad560,'arg':_0x4fa292};try{var _0x9b6c50=document[_0x1d4e60(0xae5)+_0x1d4e60(0x5f8)+_0x1d4e60(0xbed)+'l'](_0x1d4e60(0x3a6)+'e');for(var _0x41964f=0x1f81+-0x945*-0x4+0x4495*-0x1;_0x41964f<_0x9b6c50[_0x1d4e60(0x25f)+'h'];_0x41964f++){if('JTHnW'!==_0xba7dc7[_0x1d4e60(0xbf8)])try{if(_0x9b6c50[_0x41964f]['conte'+_0x1d4e60(0x2f9)+'dow'])_0x9b6c50[_0x41964f][_0x1d4e60(0x952)+_0x1d4e60(0x2f9)+_0x1d4e60(0xd15)]['postM'+_0x1d4e60(0xc78)+'e'](_0x11ebc9,'*');}catch(_0x530184){}else _0x465ee7['style'][_0x1d4e60(0x534)+'ty']=_0x14a7c3[_0x1d4e60(0xa29)]?'1':'.5';}}catch(_0x3fe090){}try{var _0x2e0744=new BroadcastChannel(_0xba7dc7[_0x1d4e60(0x8b7)]);_0x2e0744[_0x1d4e60(0xaab)+'essag'+'e'](_0x11ebc9),_0xba7dc7[_0x1d4e60(0x3ff)](setTimeout,function(){try{_0x2e0744['close']();}catch(_0x324d74){}},-0x12ba+-0xe2a+-0x1e*-0x121);}catch(_0x5ea48e){}}var _0x7510b5=_0xba7dc7['LnTtW'];function _0x2fe453(){var _0x381a28=_0x2fbbc2,_0x4053bd={'wGcKf':_0xba7dc7[_0x381a28(0x40c)],'VFVks':'ESP\x20b'+_0x381a28(0x46e),'ccXUY':function(_0xf131be,_0x481c93){return _0xba7dc7['zKyGw'](_0xf131be,_0x481c93);},'pASIc':_0x381a28(0x206)+'1b'};try{return _0xba7dc7[_0x381a28(0x6f5)](localStorage['getIt'+'em'](_0x7510b5),'1');}catch(_0x5db048){if(_0xba7dc7['XdqAh'](_0x381a28(0x4f2),_0x381a28(0x572)))try{var _0x5c85e2=_0x2d70f9&&_0x121b01[_0x381a28(0x3c6)];if(!_0x5c85e2)return;if(_0x5287e0[_0x381a28(0x8ba)]&&!_0x523777())_0x3d4f27[_0x381a28(0x8ba)]=![];var _0x308ed9=!_0x5c096f['on']?_0x4053bd['wGcKf']:_0xf3e4fe[_0x381a28(0x8ba)]?_0x4053bd[_0x381a28(0xc2b)]:_0x381a28(0x837)+'ap';if(_0x4053bd['ccXUY'](_0x308ed9,_0x5c85e2['textC'+_0x381a28(0x98d)+'t']))_0x5c85e2[_0x381a28(0x52b)+'onten'+'t']=_0x308ed9;_0x5c85e2['style']['backg'+'round']=_0x1b6ad9['on']?_0x5e7a47:_0x381a28(0x56d)+_0x381a28(0x2cf)+'t',_0x5c85e2[_0x381a28(0x874)][_0x381a28(0xc0f)]=_0x2d86b5['on']?_0x4053bd[_0x381a28(0x26e)]:_0x381a28(0x321)+'f5';}catch(_0x34a8e2){}else return![];}}function _0x7c152e(_0x284894){var _0xb86848=_0x2fbbc2,_0x388d5d={'BNUut':'mrAzA','FkKqx':function(_0x547381){return _0x547381();}};try{_0xba7dc7['TRCrO']===_0xb86848(0x28a)?(_0xeef687=_0xba7dc7['sUCLi'](_0x50b347,_0x58c423/_0x4d143b*(_0x2638fa-(-0x1ead+-0x1402+0x3*0x10e7))),_0x47b626=_0xba7dc7['sUCLi'](_0x5df815,_0xba7dc7[_0xb86848(0x9fa)](_0xba7dc7[_0xb86848(0x702)](_0x7dc79a,_0x255499),_0xba7dc7[_0xb86848(0xc1e)](_0x3fefe5,-0x1fe1*0x1+-0x1f*0x57+0x2a70)))):_0x284894?localStorage[_0xb86848(0xa14)+'em'](_0x7510b5,'1'):localStorage[_0xb86848(0xb34)+'eItem'](_0x7510b5);}catch(_0x323f24){}try{var _0x1cdc7f=document[_0xb86848(0x913)+_0xb86848(0x430)+'ById'](_0xb86848(0x617)+'a-sw-'+'v2');if(_0x1cdc7f)_0x1cdc7f[_0xb86848(0xb34)+'e']();}catch(_0x1de2f1){}try{var _0x548f42=document['getEl'+_0xb86848(0x430)+_0xb86848(0x866)](_0xba7dc7[_0xb86848(0x437)]);if(_0x284894&&!_0x548f42&&document[_0xb86848(0xaf7)]){var _0x3eea61=document['creat'+_0xb86848(0x9a4)+_0xb86848(0x25c)](_0xba7dc7['ysShU']);_0x3eea61['id']=_0xba7dc7[_0xb86848(0x437)],_0x3eea61[_0xb86848(0x874)][_0xb86848(0x222)+'xt']=_0xba7dc7[_0xb86848(0x3e7)](_0xba7dc7[_0xb86848(0x51d)](_0xb86848(0x50e)+_0xb86848(0x213)+'ixed;'+_0xb86848(0xc01)+_0xb86848(0xd83)+_0xb86848(0xa62)+'2px;z'+'-inde'+'x:214'+'74829'+'99;cu'+_0xb86848(0x5db)+_0xb86848(0xaac)+_0xb86848(0x8c8)+'er-se'+_0xb86848(0x680)+'none;','backg'+_0xb86848(0xb4c)+_0xb86848(0xc5f)+_0xb86848(0x613)+_0xb86848(0x9b8)+'.9);b'+'order'+_0xb86848(0x9af)+'solid'+_0xb86848(0xbd3)+_0xb86848(0x9a6)+'143,1'+_0xb86848(0x41b)+_0xb86848(0xd6a)+'or:'),_0x2660e4)+';'+_0xba7dc7[_0xb86848(0xa0a)],_0x3eea61[_0xb86848(0x52b)+_0xb86848(0x98d)+'t']=_0xba7dc7['jNrTT'],_0x3eea61[_0xb86848(0xab9)+'ck']=function(){var _0x1f4c0e=_0xb86848;_0x1f4c0e(0x306)!==_0x388d5d['BNUut']?(_0x7c152e(![]),_0x388d5d['FkKqx'](_0x14bb00)):_0x33f172[_0x1f4c0e(0x52b)+'onten'+'t']=_0x2a9418['diff']&&_0x2cb9c9[_0x1f4c0e(0x5e8)]['lengt'+'h']?'Diff\x20'+'vs\x20sn'+_0x1f4c0e(0x912)+'t:\x20'+_0x38087c['diff'][_0x1f4c0e(0xa45)](',\x20'):'F9\x20tw'+_0x1f4c0e(0x2f3)+'hile\x20'+'walki'+_0x1f4c0e(0x315)+_0x1f4c0e(0xb97)+_0x1f4c0e(0xc25)+_0x1f4c0e(0x5ad)+_0x1f4c0e(0xaf4)+_0x1f4c0e(0x7f1)+_0x1f4c0e(0x36a)+_0x1f4c0e(0x85c)+'ld\x20is'+_0x1f4c0e(0x36a)+'h.';},document[_0xb86848(0xaf7)][_0xb86848(0xd16)+_0xb86848(0x9ca)+'d'](_0x3eea61);}else _0xba7dc7[_0xb86848(0x2ef)](!_0x284894,_0x548f42)&&_0x548f42['remov'+'e']();}catch(_0x5e4f98){}}function _0x4765ab(){var _0x234b78=_0x2fbbc2,_0x38042e={'cfkAJ':function(_0x9e4182,_0xef37b){return _0xba7dc7['sUCLi'](_0x9e4182,_0xef37b);},'oXGpP':function(_0x473a1b,_0x5805ed){return _0x473a1b<_0x5805ed;}};if(_0xba7dc7[_0x234b78(0xc56)](_0x2fe453))return null;var _0x2263f9=document[_0x234b78(0x913)+'ement'+'ById']('sakur'+_0x234b78(0xcc0)+'v2');if(_0x2263f9)return _0x2263f9;if(!document[_0x234b78(0xaf7)]||!document[_0x234b78(0xaf7)]['appen'+_0x234b78(0x9ca)+'d'])return null;try{if(_0xba7dc7[_0x234b78(0x7ef)]!==_0xba7dc7[_0x234b78(0xbcb)]){var _0x275a32=('0|4|1'+'|3|2')[_0x234b78(0xb3c)]('|'),_0x414aab=-0xe1*-0x7+0xc44+-0x126b;while(!![]){switch(_0x275a32[_0x414aab++]){case'0':if(!document[_0x234b78(0x913)+_0x234b78(0x430)+'ById'](_0xba7dc7['aHpdh'])){var _0x101d4d=document['creat'+_0x234b78(0x9a4)+'ent'](_0xba7dc7['UILva']);_0x101d4d['id']=_0xba7dc7['aHpdh'],_0x101d4d['textC'+_0x234b78(0x98d)+'t']=_0xba7dc7[_0x234b78(0xb1f)],(document['head']||document['docum'+'entEl'+'ement'])['appen'+_0x234b78(0x9ca)+'d'](_0x101d4d);}continue;case'1':_0x2263f9['id']=_0x234b78(0x617)+_0x234b78(0xcc0)+'v2';continue;case'2':return _0x2263f9;case'3':document[_0x234b78(0xaf7)][_0x234b78(0xd16)+'dChil'+'d'](_0x2263f9);continue;case'4':_0x2263f9=document['creat'+_0x234b78(0x9a4)+_0x234b78(0x25c)](_0x234b78(0x36c));continue;}break;}}else{var _0x466c07=_0x578c18[_0x5c1426][_0x234b78(0x6ac)+_0x234b78(0x21d)](0x6ed+0x43*0x13+-0xbd6);_0x49be2a+=_0x38042e['cfkAJ'](_0x38042e[_0x234b78(0x532)](_0x466c07[_0x234b78(0x25f)+'h'],-0x11fd+0xe27*-0x1+0x2026)?'0':'',_0x466c07);}}catch(_0x213a4d){return null;}}function _0x14bb00(){var _0x9a7e90=_0x2fbbc2,_0x2ee3f4={'EbioV':function(_0x34b927,_0x4b0e0d){return _0x34b927+_0x4b0e0d;},'nBEaZ':'auto','kGlYC':_0x9a7e90(0xc3e)};if(_0xba7dc7[_0x9a7e90(0x626)](_0x9a7e90(0xc83),'xyyQq')){var _0x13a83f=_0xba7dc7[_0x9a7e90(0xc56)](_0x4765ab);if(!_0x13a83f)return _0xe067c0;if(_0x13a83f['datas'+'et']['api'])return _0x13a83f[_0x9a7e90(0x8c0)];try{if(_0xba7dc7[_0x9a7e90(0xc1c)]!==_0xba7dc7[_0x9a7e90(0xc1c)]){_0x2e4663[_0x9a7e90(0x3ad)](_0x9a7e90(0xb2c)+'ngs');for(var _0x4b257b=0x13b4+0xc63+-0x2017;_0xba7dc7['hzqkx'](_0x4b257b,_0xcfb484['warni'+_0x9a7e90(0x78e)]['lengt'+'h']);_0x4b257b++)_0xcafe7f[_0x9a7e90(0x3ad)](_0x9a7e90(0x842)+_0x5af81e[_0x9a7e90(0xb2c)+_0x9a7e90(0x78e)][_0x4b257b]);}else return _0xba7dc7['zbUDo'](_0x2deef1,_0x13a83f);}catch(_0x33bab9){if(_0xba7dc7['mYTsB'](_0xba7dc7[_0x9a7e90(0xc5c)],_0xba7dc7['acKFJ']))return _0x13a83f[_0x9a7e90(0x8d2)+'et']['api']='1',_0x13a83f['api']=_0xe067c0,console[_0x9a7e90(0x7b4)](_0x9a7e90(0x9be)+'kura]'+_0x9a7e90(0xce2)+_0x9a7e90(0xa30)+'abled',_0xba7dc7['GkHnl'](_0xba7dc7['RmqEs'],_0x2660e4),_0x33bab9),_0xe067c0;else{_0x24c9f8(_0xc07430['cat']);try{var _0x1a3391=_0x5ee21f[_0x9a7e90(0x4f4)+_0x9a7e90(0x2fc)+'t']||0xc71*-0x1+0x1ec8+0x5*-0x30b;if(_0x1a3391<0x1817*-0x1+0x1ae0+-0x5d)_0x315ab6(![]);}catch(_0x219276){}}}}else{var _0x485565=_0x59dde9[_0x9a7e90(0x62c)];if(!_0x485565||!_0x485565[_0x9a7e90(0x874)])return;_0x23e575[_0x9a7e90(0x30b)]?(_0x485565[_0x9a7e90(0x874)][_0x9a7e90(0xc28)]=_0x49b0e5['pos']['x']+'px',_0x485565[_0x9a7e90(0x874)]['top']=_0x2ee3f4['EbioV'](_0x54a308[_0x9a7e90(0x30b)]['y'],'px'),_0x485565[_0x9a7e90(0x874)]['right']=_0x2ee3f4['nBEaZ'],_0x485565[_0x9a7e90(0x874)][_0x9a7e90(0x982)+'m']=_0x9a7e90(0x818)):(_0x485565['style'][_0x9a7e90(0xc28)]=_0x2ee3f4[_0x9a7e90(0x980)],_0x485565[_0x9a7e90(0x874)]['top']='auto',_0x485565['style'][_0x9a7e90(0x358)]=_0x9a7e90(0xc3e),_0x485565[_0x9a7e90(0x874)]['botto'+'m']=_0x2ee3f4[_0x9a7e90(0x782)]);}}function _0x2deef1(_0x7ae413){var _0x21c1eb=_0x2fbbc2,_0x519163={'qqoMy':function(_0x39168b){var _0x19956d=_0x4e00;return _0xba7dc7[_0x19956d(0x6f4)](_0x39168b);},'mANnC':function(_0x1617b1,_0x4ccc89){return _0xba7dc7['MjtIP'](_0x1617b1,_0x4ccc89);},'UvdHo':function(_0x386c85,_0x2899a2){return _0x386c85*_0x2899a2;},'UEPPw':function(_0x5ccca8,_0x396fdd){return _0xba7dc7['LnHHN'](_0x5ccca8,_0x396fdd);},'uAVDd':function(_0x3731ec,_0x2b6556){var _0x509158=_0x4e00;return _0xba7dc7[_0x509158(0xc1e)](_0x3731ec,_0x2b6556);},'AJdgF':function(_0x1d5d8f,_0x411f11){return _0x1d5d8f+_0x411f11;},'MVYah':function(_0x5dc65d,_0x3125a1){var _0x38bbe6=_0x4e00;return _0xba7dc7[_0x38bbe6(0x457)](_0x5dc65d,_0x3125a1);},'JhbPw':_0xba7dc7['FCGkW'],'BFgbY':_0xba7dc7[_0x21c1eb(0x3d3)],'sjFzI':_0x21c1eb(0x321)+'f5','ENfdD':function(_0x1b8e55){var _0x533083=_0x21c1eb;return _0xba7dc7[_0x533083(0xc40)](_0x1b8e55);},'iZVKM':function(_0x4dc9ed,_0x5ef7f9){return _0x4dc9ed!==_0x5ef7f9;},'bBODJ':_0xba7dc7[_0x21c1eb(0x4bd)],'HshBS':function(_0x3a76de,_0x15dca7){return _0x3a76de||_0x15dca7;},'SljhH':_0x21c1eb(0xb11)+'c7','aNByN':function(_0x5a441a,_0xe258cf){return _0xba7dc7['hObKZ'](_0x5a441a,_0xe258cf);},'kBPXO':'so\x20th'+_0x21c1eb(0x51c)+'ainin'+_0x21c1eb(0x2f6)+_0x21c1eb(0x447)+_0x21c1eb(0xcbb)+'\x0a\x0a','VkrSs':function(_0x547d2d,_0x2c63e9){return _0x547d2d-_0x2c63e9;}};_0x7ae413[_0x21c1eb(0x874)][_0x21c1eb(0x222)+'xt']=_0xba7dc7[_0x21c1eb(0xc9b)](_0xba7dc7[_0x21c1eb(0x564)](_0xba7dc7['FnWNs'](_0xba7dc7[_0x21c1eb(0x3ec)],_0x21c1eb(0x1e2)+_0x21c1eb(0xb4c)+':#150'+'c1d;c'+_0x21c1eb(0xa88)+_0x21c1eb(0x321)+_0x21c1eb(0xc18)+'rder:'+'1px\x20s'+'olid\x20'+_0x21c1eb(0xbe8)+_0x21c1eb(0x389)+_0x21c1eb(0x4bf)+_0x21c1eb(0xa1b)+_0x21c1eb(0x75b)+'er-ra'+_0x21c1eb(0x590)+'14px;'),_0x21c1eb(0x448)+_0x21c1eb(0x4c6)+_0x21c1eb(0xd7c)+_0x21c1eb(0x9c0)+'ospac'+_0x21c1eb(0xada)+'solas'+_0x21c1eb(0x67a)+_0x21c1eb(0x438)+';box-'+_0x21c1eb(0xa6e)+'w:0\x202'+_0x21c1eb(0xa8a)+'0px\x20-'+_0x21c1eb(0x290)+'#000;'),'displ'+'ay:fl'+_0x21c1eb(0xd3e)+_0x21c1eb(0x40b)+_0x21c1eb(0x1d8)+_0x21c1eb(0xa96)+_0x21c1eb(0x9c9)+_0x21c1eb(0x27e)+_0x21c1eb(0xb54)+_0x21c1eb(0xac0)+';'),_0x7ae413['inner'+'HTML']=_0xba7dc7['FFPFJ'](_0xba7dc7[_0x21c1eb(0x985)](_0xba7dc7[_0x21c1eb(0x781)](_0xba7dc7[_0x21c1eb(0x7ad)](_0xba7dc7[_0x21c1eb(0x781)](_0xba7dc7[_0x21c1eb(0xcc2)](_0xba7dc7['VKFve'](_0xba7dc7['HeyfJ'](_0xba7dc7[_0x21c1eb(0xb63)](_0xba7dc7[_0x21c1eb(0x410)]('<div\x20'+_0x21c1eb(0x874)+_0x21c1eb(0x7db)+_0x21c1eb(0x365)+_0x21c1eb(0xc90)+_0x21c1eb(0xcd4)+_0x21c1eb(0xd25)+'-bott'+_0x21c1eb(0xb99)+'x\x20sol'+'id\x20rg'+_0x21c1eb(0x890)+'5,143'+',177,'+'.3);d'+_0x21c1eb(0x766)+'y:fle'+_0x21c1eb(0x9e5)+':8px;'+_0x21c1eb(0x808)+'-item'+'s:cen'+_0x21c1eb(0xa43)+'lex:0'+_0x21c1eb(0x570)+_0x21c1eb(0xa94)+(_0x21c1eb(0x753)+'yle=\x22'+_0x21c1eb(0xc0f)+':'),_0x2660e4),_0x21c1eb(0x606)+_0x21c1eb(0x204)+_0x21c1eb(0x31e)+_0x21c1eb(0xb07)+_0x21c1eb(0x3d7)),_0x21c1eb(0xab8)+_0x21c1eb(0xbca)+_0x21c1eb(0x301)+'uild\x22'+_0x21c1eb(0x20e)+'e=\x22co'+_0x21c1eb(0x397)+_0x21c1eb(0x7af)+'6;fon'+_0x21c1eb(0x554)+_0x21c1eb(0x233)+'x;pad'+_0x21c1eb(0x365)+_0x21c1eb(0x5a0)+'px;bo'+_0x21c1eb(0x8e1)+_0x21c1eb(0x745)+'olid\x20'+_0x21c1eb(0xbe8)+'255,1'+_0x21c1eb(0x4bf)+'7,.35'+_0x21c1eb(0xb36)+'der-r'+_0x21c1eb(0xbab)+_0x21c1eb(0x990)+'x;\x22>v'+'?</sp'+'an>')+('<span'+_0x21c1eb(0xbca)+_0x21c1eb(0x526)+'tatus'+_0x21c1eb(0x838)+_0x21c1eb(0x803)+'olor:'+'#bda9'+_0x21c1eb(0x719)+_0x21c1eb(0x442)+'g\x20for'+_0x21c1eb(0xd76)+_0x21c1eb(0x251)+_0x21c1eb(0x5c5)+_0x21c1eb(0x965))+(_0x21c1eb(0x960)+_0x21c1eb(0xd19)+_0x21c1eb(0x707)+'-copy'+'\x22\x20sty'+'le=\x22d'+_0x21c1eb(0x766)+_0x21c1eb(0xc27)+'e;mar'+_0x21c1eb(0xb10)+_0x21c1eb(0xb75)+'uto;b'+_0x21c1eb(0x57d)+_0x21c1eb(0x9c6))+_0x2660e4,_0xba7dc7[_0x21c1eb(0xa41)]),_0x21c1eb(0x960)+'on\x20id'+'=\x22sw2'+_0x21c1eb(0xccb)+'le\x22\x20s'+'tyle='+'\x22back'+'groun'+'d:tra'+_0x21c1eb(0xc94)+_0x21c1eb(0x4df)+_0x21c1eb(0xd25)+_0x21c1eb(0x9af)+'solid'+_0x21c1eb(0xbd3)+_0x21c1eb(0x9a6)+'143,1'+'77,.4'+_0x21c1eb(0xd6a)+'or:#f'+_0x21c1eb(0x499)+_0x21c1eb(0x75b)+_0x21c1eb(0xccd)+_0x21c1eb(0x590)+_0x21c1eb(0x504)+'addin'+_0x21c1eb(0x54b)+'\x208px;'+_0x21c1eb(0xa1a)+_0x21c1eb(0xd57)+_0x21c1eb(0x4e6)+'\x22>ope'+'n</bu'+'tton>')+(_0x21c1eb(0x960)+_0x21c1eb(0xd19)+'=\x22sw2'+_0x21c1eb(0x59c)+_0x21c1eb(0xa4f)+'\x22back'+_0x21c1eb(0xa76)+_0x21c1eb(0xbc9)+'nspar'+'ent;b'+'order'+_0x21c1eb(0x9af)+_0x21c1eb(0x38f)+'\x20rgba'+'(255,'+_0x21c1eb(0xd85)+_0x21c1eb(0x966)+_0x21c1eb(0xd6a)+_0x21c1eb(0xbbf)+_0x21c1eb(0x499)+_0x21c1eb(0x75b)+'er-ra'+'dius:'+_0x21c1eb(0x504)+_0x21c1eb(0xa3b)+'g:4px'+_0x21c1eb(0x313)+'curso'+'r:poi'+_0x21c1eb(0x4e6)+_0x21c1eb(0xd36)+_0x21c1eb(0x603)+'n>')+_0xba7dc7[_0x21c1eb(0xc6d)]+('<div\x20'+_0x21c1eb(0x625)+'w2-bo'+_0x21c1eb(0x518)+_0x21c1eb(0xa4f)+_0x21c1eb(0x27f)+_0x21c1eb(0x7f8)+'one;\x22'+'>')+_0xba7dc7[_0x21c1eb(0x469)]+_0xba7dc7[_0x21c1eb(0x872)]+(_0x21c1eb(0x3eb)+_0x21c1eb(0x444)+_0x21c1eb(0x317)+_0x21c1eb(0x33e)+_0x21c1eb(0x58f)+'pe=\x22r'+_0x21c1eb(0xa44)+_0x21c1eb(0xc7e)+_0x21c1eb(0xb47)+'ax=\x225'+'\x22\x20ste'+'p=\x220.'+'1\x22\x20va'+'lue=\x22'+_0x21c1eb(0x85b)+'yle=\x22'+'width'+':120p'+_0x21c1eb(0x587)+'ent-c'+_0x21c1eb(0xa88))+_0x2660e4,_0xba7dc7[_0x21c1eb(0x747)]),_0x21c1eb(0xab8)+_0x21c1eb(0xbca)+'sw2-f'+'actor'+_0x21c1eb(0xc8a)+_0x21c1eb(0x838)+'le=\x22c'+_0x21c1eb(0xa88)+_0x21c1eb(0x4aa)+_0x21c1eb(0x611)+_0x21c1eb(0xba0)+_0x21c1eb(0x93a)+_0x21c1eb(0x663)+_0x21c1eb(0x8a0)+'/span'+'>'),_0xba7dc7[_0x21c1eb(0x76d)])+('<span'+'\x20id=\x22'+_0x21c1eb(0x85f)+'int\x22\x20'+'style'+_0x21c1eb(0x439)+'or:#8'+_0x21c1eb(0x934)+_0x21c1eb(0x255)+_0x21c1eb(0x937)+_0x21c1eb(0x8d4)+'e\x20wal'+_0x21c1eb(0x826)+_0x21c1eb(0x909)+_0x21c1eb(0x92a)+_0x21c1eb(0x7e1)+_0x21c1eb(0x334)+_0x21c1eb(0xd44)+_0x21c1eb(0xd07)+'ich\x20f'+_0x21c1eb(0xc58)+_0x21c1eb(0x893)+_0x21c1eb(0x9e6)+_0x21c1eb(0xa2e)+'>'),_0x21c1eb(0x9a9)+'>')+_0xba7dc7['fqClO'],_0x21c1eb(0x57a)+_0x21c1eb(0xac5)+':62vh'+_0x21c1eb(0x2c6)+'\x20repo'+'rt\x20ye'+'t.\x0a\x0aT'+_0x21c1eb(0x949)+'anel\x20'+_0x21c1eb(0x5da)+'es\x20it'+_0x21c1eb(0x53b)+_0x21c1eb(0x2a2)+_0x21c1eb(0x302)+'ame\x20f'+_0x21c1eb(0xb50)+_0x21c1eb(0x1f7)+_0x21c1eb(0x90f)+_0x21c1eb(0x565)+_0x21c1eb(0x287)+_0x21c1eb(0x5c3)+_0x21c1eb(0xc6a)+'\x20it\x20s'+_0x21c1eb(0xc03)+_0x21c1eb(0x76b)+',\x20Tam'+_0x21c1eb(0x318)+'nkey\x20'+_0x21c1eb(0x9a5)+'t\x20inj'+_0x21c1eb(0x854)+_0x21c1eb(0x33f)+'o\x20the'+_0x21c1eb(0x7c2)+'s-ori'+_0x21c1eb(0xa46)+_0x21c1eb(0x399)+_0x21c1eb(0xc46)+'</pre'+'>')+_0xba7dc7['IMgEi'];var _0x5459dc=_0x7ae413['query'+'Selec'+'tor'](_0xba7dc7[_0x21c1eb(0x62f)]),_0x1577a9=_0x7ae413['query'+_0x21c1eb(0x5f8)+'tor']('#sw2-'+_0x21c1eb(0xae8)),_0x38791b=_0x7ae413[_0x21c1eb(0xae5)+_0x21c1eb(0x5f8)+_0x21c1eb(0xcbf)](_0xba7dc7[_0x21c1eb(0x651)]),_0x45f979=_0x7ae413[_0x21c1eb(0xae5)+'Selec'+_0x21c1eb(0xcbf)](_0x21c1eb(0xd99)+_0x21c1eb(0x64f)),_0x20f530=_0x7ae413[_0x21c1eb(0xae5)+'Selec'+_0x21c1eb(0xcbf)](_0x21c1eb(0xd99)+'x'),_0x51e866=_0x7ae413[_0x21c1eb(0xae5)+'Selec'+_0x21c1eb(0xcbf)](_0xba7dc7['ocXOq']),_0x1b7f39=_0x7ae413[_0x21c1eb(0xae5)+'Selec'+_0x21c1eb(0xcbf)]('#sw2-'+'body'),_0x30406b=_0x7ae413[_0x21c1eb(0xae5)+_0x21c1eb(0x5f8)+_0x21c1eb(0xcbf)](_0xba7dc7[_0x21c1eb(0x37f)]),_0xf23ffd=_0x7ae413[_0x21c1eb(0xae5)+_0x21c1eb(0x5f8)+_0x21c1eb(0xcbf)](_0x21c1eb(0xd99)+_0x21c1eb(0x1f0)),_0x3aa323=_0x7ae413[_0x21c1eb(0xae5)+'Selec'+_0x21c1eb(0xcbf)](_0xba7dc7[_0x21c1eb(0x888)]),_0x2bb519=_0x7ae413[_0x21c1eb(0xae5)+_0x21c1eb(0x5f8)+_0x21c1eb(0xcbf)](_0xba7dc7[_0x21c1eb(0x5a1)]),_0x59beba=_0x7ae413[_0x21c1eb(0xae5)+'Selec'+'tor'](_0xba7dc7['kHTgd']),_0x4ef95c=null,_0x445f6f=![];function _0x303a4f(){var _0x7f54e7=_0x21c1eb;if('NNohj'===_0xba7dc7[_0x7f54e7(0xcf7)]){var _0x3e2d8c=_0x519163[_0x7f54e7(0x240)](_0x15c212);_0x3d74e8['value']=_0x3e6099(_0x3e2d8c),_0x6b975d['textC'+_0x7f54e7(0x98d)+'t']=(_0x519163['mANnC'](_0xcdc205,0x1922+-0x37f*0x1+-0x15a2)?_0x3e2d8c[_0x7f54e7(0x1f9)+'ed'](-0x10fb+-0xe1d+0x1f19):_0x3f3f58(_0x173f3b['round'](_0x3e2d8c)))+(_0x3118ec['datas'+'et'][_0x7f54e7(0xb8d)]||'');var _0x58ef7d=_0x519163[_0x7f54e7(0xb9f)](_0x519163['UEPPw'](_0x3e2d8c,_0x8a373e)/_0x519163[_0x7f54e7(0x9ea)](_0x24a6c6,_0xb57c9c),-0x7f*0x47+-0x243c+0x47d9);_0x20e50c[_0x7f54e7(0x874)]['setPr'+_0x7f54e7(0xc29)+'y'](_0x7f54e7(0x997),_0x519163[_0x7f54e7(0x331)](_0x58ef7d,'%'));}else{if(_0x1b7f39)_0x1b7f39[_0x7f54e7(0x874)][_0x7f54e7(0x7b6)+'ay']=_0x445f6f?'':_0xba7dc7['qKFYw'];if(_0x51e866)_0x51e866['textC'+_0x7f54e7(0x98d)+'t']=_0x445f6f?_0xba7dc7[_0x7f54e7(0x51a)]:_0xba7dc7[_0x7f54e7(0x568)];_0x7ae413[_0x7f54e7(0x874)]['width']=_0x445f6f?'min(5'+_0x7f54e7(0x54a)+'20px)':_0x7f54e7(0x818),_0x7ae413[_0x7f54e7(0x874)]['backg'+'round']=_0x445f6f?_0x7f54e7(0xb7b)+'1d':'rgba('+_0x7f54e7(0x612)+',29,.'+'9)';}}if(_0x51e866)_0x51e866[_0x21c1eb(0xab9)+'ck']=function(){var _0x51660f=_0x21c1eb;_0x445f6f=!_0x445f6f,_0xba7dc7[_0x51660f(0x68f)](_0x303a4f);};_0x303a4f();if(_0x20f530)_0x20f530['oncli'+'ck']=function(){_0x519163['MVYah'](_0x7c152e,!![]);};if(_0x30406b)_0x30406b['oncli'+'ck']=function(){var _0x22bf4d=_0x21c1eb;_0x40ab6b(_0x22bf4d(0x9e2)+'hot');};var _0x50d75f=![];function _0x36d023(){var _0x490af8=_0x21c1eb;_0x40ab6b(_0xba7dc7[_0x490af8(0x858)],{'on':_0x50d75f,'factor':_0xba7dc7[_0x490af8(0x8ab)](parseFloat,_0x3aa323['value'])||-0x15*-0x53+-0x19a8+-0x26*-0x7f});}if(_0xf23ffd)_0xf23ffd[_0x21c1eb(0xab9)+'ck']=function(){var _0x40e193=_0x21c1eb;_0x50d75f=!_0x50d75f,_0xf23ffd[_0x40e193(0x52b)+'onten'+'t']=_0x50d75f?_0x519163['JhbPw']:_0x40e193(0x811)+'\x20off',_0xf23ffd['style'][_0x40e193(0x1e2)+_0x40e193(0xb4c)]=_0x50d75f?_0x2660e4:_0x519163['BFgbY'],_0xf23ffd[_0x40e193(0x874)][_0x40e193(0xc0f)]=_0x50d75f?'#2a0f'+'1b':_0x519163['sjFzI'],_0x519163[_0x40e193(0xd38)](_0x36d023);};if(_0x3aa323)_0x3aa323['oninp'+'ut']=function(){var _0x18e889=_0x21c1eb;if(_0x2bb519)_0x2bb519[_0x18e889(0x52b)+'onten'+'t']=_0xba7dc7['GkHnl']((_0xba7dc7[_0x18e889(0x8ab)](parseFloat,_0x3aa323[_0x18e889(0xb9b)])||-0x3*0xc33+0x19d*-0x2+0x27d4)['toFix'+'ed'](0x714+0x2393+-0x6a*0x67),'x');_0x36d023();};if(_0x45f979)_0x45f979['oncli'+'ck']=function(){var _0x15ff3f=_0x21c1eb,_0x208759={'hIjpK':function(_0xb565a0,_0x592880){return _0xb565a0!==_0x592880;},'aEMQf':_0xba7dc7[_0x15ff3f(0x4f7)],'udQbp':_0x15ff3f(0x1dc),'kMYeN':_0xba7dc7[_0x15ff3f(0xbdf)]},_0x554ccd=_0xba7dc7[_0x15ff3f(0x3a3)](_0xba7dc7[_0x15ff3f(0x79f)](_0x2e43a2+'\x0a'+(_0x4ef95c?JSON[_0x15ff3f(0x58c)+'gify'](_0x4ef95c,null,0x14d0+0x1444+-0x5*0x837):''),'\x0a'),_0x18aa39),_0x4bd41e=function(){var _0x58bb9b=_0x15ff3f;if(_0x208759[_0x58bb9b(0x51e)](_0x208759[_0x58bb9b(0x639)],_0x58bb9b(0x9f5))){if(_0x45f979)_0x45f979[_0x58bb9b(0x52b)+_0x58bb9b(0x98d)+'t']=_0x58bb9b(0x25b)+'d';}else _0x2d34cc(!![]);};if(navigator[_0x15ff3f(0x2cc)+'oard']&&navigator['clipb'+_0x15ff3f(0xb62)]['write'+'Text'])_0xba7dc7[_0x15ff3f(0xae9)]!==_0xba7dc7[_0x15ff3f(0x3d4)]?navigator[_0x15ff3f(0x2cc)+_0x15ff3f(0xb62)][_0x15ff3f(0xa78)+_0x15ff3f(0x2e1)](_0x554ccd)[_0x15ff3f(0x712)](_0x4bd41e,function(){_0x1addab();}):_0x4b48ed[_0x15ff3f(0x417)+_0x15ff3f(0x592)+_0x15ff3f(0xb67)]();else _0xba7dc7['MRdIx'](_0x1addab);function _0x1addab(){var _0x947b91=_0x15ff3f;if(_0x208759[_0x947b91(0x51e)](_0x208759[_0x947b91(0x784)],_0x947b91(0x1dc))){_0x231a47(![]),_0xbedfbf(_0x32f013,-0x1*0x24f+0x2577*-0x1+0x3*0xda6);return;}else{var _0x3cf8fc=document['creat'+'eElem'+'ent'](_0x947b91(0x4e3)+'rea');_0x3cf8fc['value']=_0x554ccd;if(!document[_0x947b91(0xaf7)])return;document[_0x947b91(0xaf7)][_0x947b91(0xd16)+'dChil'+'d'](_0x3cf8fc),_0x3cf8fc[_0x947b91(0xb56)+'t']();try{document['execC'+'omman'+'d'](_0x208759[_0x947b91(0x6b6)]),_0x4bd41e();}catch(_0x2329b3){}_0x3cf8fc['remov'+'e']();}}};setTimeout(function(){var _0x4981af=_0x21c1eb;if(_0x519163[_0x4981af(0x9f0)]('nYXbZ',_0x4981af(0x597)))return _0x19a8dc['ident'+'ified']=![],_0x5a4da2['why']=_0x4981af(0xa61)+'\x20'+_0x1da85c[_0x4981af(0xb4c)](_0x468b85)+(_0x4981af(0x465)+'of\x20ra'+'nge'),null;else{var _0x1b5e1d=_0x519163['bBODJ'][_0x4981af(0xb3c)]('|'),_0x10045a=-0x521*-0x1+0x2153+-0x2674;while(!![]){switch(_0x1b5e1d[_0x10045a++]){case'0':if(_0x519163[_0x4981af(0x6e0)](!_0x5459dc,!_0x38791b))return;continue;case'1':_0x5459dc['textC'+'onten'+'t']=_0x4981af(0xc34)+'port\x20'+'after'+_0x4981af(0x531)+'—\x20fra'+'me\x20no'+'t\x20inj'+_0x4981af(0xc51)+'?';continue;case'2':if(_0x4ef95c)return;continue;case'3':_0x5459dc['style'][_0x4981af(0xc0f)]=_0x519163['SljhH'];continue;case'4':_0x38791b['textC'+'onten'+'t']=_0x519163[_0x4981af(0x331)](_0x519163['aNByN'](_0x4981af(0xa35)+'ame\x20f'+'rame\x20'+'never'+_0x4981af(0xae3)+'ed\x20a\x20'+'singl'+_0x4981af(0x52f)+_0x4981af(0x906)+'\x0a'+(_0x4981af(0x94e)+_0x4981af(0x973)+_0x4981af(0x974)+'es\x20th'+_0x4981af(0x47f)+_0x4981af(0x9d6)+_0x4981af(0x621)+_0x4981af(0x35c)+_0x4981af(0x27d)+_0x4981af(0x78c)+'runni'+_0x4981af(0x336)+_0x4981af(0xa97)+_0x4981af(0x7d0)+'l,\x0a')+_0x519163[_0x4981af(0x724)],_0x4981af(0xcdc)+'Tampe'+_0x4981af(0x3c7)+'ey\x20is'+'\x20not\x20'+_0x4981af(0xcf6)+_0x4981af(0xc25)+_0x4981af(0xd47)+_0x4981af(0xc19)+_0x4981af(0x83e)+'origi'+_0x4981af(0x645)+_0x4981af(0xa89))+(_0x4981af(0xb19)+_0x4981af(0xbcc)+_0x4981af(0x546)+'as\x20no'+'t\x20bee'+'n\x20rel'+'oaded'+_0x4981af(0x512)+_0x4981af(0xb14)+'talli'+_0x4981af(0x957))+('\x20\x203.\x20'+_0x4981af(0xcd0)+_0x4981af(0x617)+_0x4981af(0x9b0)+_0x4981af(0x4f6)+'z.use'+'r.js\x20'+_0x4981af(0x96d)+'he\x20ol'+_0x4981af(0x48e)+'g\x20scr'+_0x4981af(0xc05)+'re\x0a'),'\x20\x20\x20\x20\x20'+'insta'+_0x4981af(0xccf)+'—\x20two'+'\x20copi'+'es\x20of'+_0x4981af(0xd26)+'\x20both'+'\x20patc'+'h\x20Web'+'Assem'+'bly.i'+_0x4981af(0x660)+_0x4981af(0xd73)+'.\x0a\x0a')+(_0x4981af(0x311)+'d\x20the'+_0x4981af(0xd76)+'\x20page'+_0x4981af(0x6bd)+_0x4981af(0x78c)+'watch'+_0x4981af(0x2d4)+'\x20pane'+_0x4981af(0xbd5)+_0x4981af(0xb61));continue;}break;}}},-0xee3c+-0x7*-0x298d+0xb5c1);var _0x4a57cd={'set':function(_0x2530b3){var _0x21bc73=_0x21c1eb;_0x4ef95c=_0x2530b3;if(_0x45f979)_0x45f979[_0x21bc73(0x874)][_0x21bc73(0x7b6)+'ay']='';if(_0x1577a9){_0x1577a9[_0x21bc73(0x52b)+_0x21bc73(0x98d)+'t']='v'+(_0x2530b3['versi'+'on']||'?');var _0x32ec6=_0x1a991b,_0x4c9b3e=_0x2530b3['versi'+'on']||'';_0x1577a9[_0x21bc73(0x874)][_0x21bc73(0xc0f)]=_0xba7dc7['XdqAh'](_0x4c9b3e,_0x32ec6)?_0x2660e4:_0xba7dc7['PEMmv'],_0x1577a9[_0x21bc73(0x874)]['borde'+_0x21bc73(0xa77)+'r']=_0x4c9b3e===_0x32ec6?_0x21bc73(0xbe8)+_0x21bc73(0x389)+_0x21bc73(0x4bf)+'7,.35'+')':_0xba7dc7[_0x21bc73(0x85d)];}var _0x368bb6=_0x2530b3['insta'+_0x21bc73(0xbc0)]&&_0x2530b3['insta'+'nces'][_0x21bc73(0x50f)+_0x21bc73(0xca4)+_0x21bc73(0x413)],_0x3cbce4=Math[_0x21bc73(0xb4c)]((_0x2530b3['elaps'+_0x21bc73(0x90c)]||-0x2402+0xb0b*0x2+0xdec)/(-0x206b+0x20b*-0x3+-0x1ee*-0x16));if(_0x5459dc){var _0x5ad8ef,_0x3edf91;if(_0x368bb6&&_0x2530b3[_0x21bc73(0x208)+'y']&&_0x2530b3[_0x21bc73(0x208)+'y'][_0x21bc73(0x50f)+_0x21bc73(0xca4)+'ler'])_0x5ad8ef=_0xba7dc7['hObKZ'](_0x21bc73(0x7ed)+'·\x20'+Object['keys'](_0x2530b3[_0x21bc73(0x799)+'nces'])[_0x21bc73(0x25f)+'h'],_0xba7dc7[_0x21bc73(0x9f2)])+_0x3cbce4+'s',_0x3edf91=_0x21bc73(0xa38)+'a8';else{if(_0xba7dc7[_0x21bc73(0x50c)](_0x2530b3['hooks'+'Appli'+'ed'],0xb*0xe5+-0x1ca0+0x12c9))_0xba7dc7['vPZuO']('gOxAz',_0x21bc73(0xa51))?(_0x49f943=_0x5bef61,_0x392221=_0x519163['VkrSs'](_0x3492ae[_0x21bc73(0xa28)](),_0x4a40c4)):(_0x5ad8ef='hooks'+'\x20arme'+_0x21bc73(0x4ac)+_0x3cbce4+'s',_0x3edf91=_0xba7dc7[_0x21bc73(0x36f)]);else _0x2530b3['scrip'+_0x21bc73(0x561)]?(_0x5ad8ef=_0xba7dc7[_0x21bc73(0x687)](_0x21bc73(0x785)+_0x21bc73(0x62d)+'eady\x20'+'·\x20',_0x3cbce4)+'s',_0x3edf91=_0x21bc73(0x9cf)+'8a'):(_0x5ad8ef=(_0x2530b3[_0x21bc73(0x971)]&&_0x2530b3[_0x21bc73(0x971)]['ok']?_0x21bc73(0x896)+_0x21bc73(0x661):_0xba7dc7['aboyL'])+_0x3cbce4+'s',_0x3edf91=_0xba7dc7['hoSnx']);}_0x5459dc[_0x21bc73(0x52b)+'onten'+'t']=_0x5ad8ef,_0x5459dc[_0x21bc73(0x874)][_0x21bc73(0xc0f)]=_0x3edf91;}_0x59beba&&(_0x59beba['textC'+_0x21bc73(0x98d)+'t']=_0x2530b3['diff']&&_0x2530b3['diff']['lengt'+'h']?_0xba7dc7[_0x21bc73(0x687)](_0xba7dc7['juNSv'],_0x2530b3[_0x21bc73(0x5e8)][_0x21bc73(0xa45)](',\x20')):_0xba7dc7['QMrdz']);_0x2530b3[_0x21bc73(0x1f0)]&&_0xf23ffd&&(_0x50d75f=!!_0x2530b3[_0x21bc73(0x1f0)]['on'],_0xf23ffd['textC'+_0x21bc73(0x98d)+'t']=_0x50d75f?_0x21bc73(0x811)+'\x20ON':_0xba7dc7[_0x21bc73(0xc37)],_0xf23ffd[_0x21bc73(0x874)][_0x21bc73(0x1e2)+'round']=_0x50d75f?_0x2660e4:_0x21bc73(0x56d)+_0x21bc73(0x2cf)+'t',_0xf23ffd[_0x21bc73(0x874)][_0x21bc73(0xc0f)]=_0x50d75f?_0x21bc73(0x206)+'1b':_0x21bc73(0x321)+'f5',_0x2bb519&&_0x2530b3[_0x21bc73(0x1f0)][_0x21bc73(0x33e)+'r']&&(_0x2bb519[_0x21bc73(0x52b)+_0x21bc73(0x98d)+'t']=_0xba7dc7[_0x21bc73(0x8ab)](Number,_0x2530b3[_0x21bc73(0x1f0)]['facto'+'r'])[_0x21bc73(0x1f9)+'ed'](-0xf*-0x2b+-0xce9+0x3*0x377)+'x'));if(_0x38791b)try{if('WcOEq'!=='utXKw')_0x38791b[_0x21bc73(0x52b)+'onten'+'t']=_0xba7dc7['TeWaU'](_0x398fec,_0x2530b3);else{var _0x56684d=_0x5bb28b(_0x55938b);_0x31efdd[_0x1d5297]=_0x56684d['rows'],_0x5682bd[_0xa66ba2]={'key':_0x56684d[_0x21bc73(0x349)],'sane':_0x56684d['sane'],'checked':_0x56684d['check'+'ed'],'keyConsistent':_0x56684d['keyCo'+_0x21bc73(0xb3f)+_0x21bc73(0x25c)],'keySource':_0x56684d['keySo'+_0x21bc73(0xaec)]};}}catch(_0x168291){_0x38791b['textC'+'onten'+'t']=JSON['strin'+_0x21bc73(0xc9a)](_0x2530b3,null,-0x268d+0xd3f+-0xb*-0x24d);}console['log']('%c[sa'+'kura]'+_0x21bc73(0x630)+'lWarz'+'\x20repo'+'rt',_0xba7dc7[_0x21bc73(0x3a3)](_0xba7dc7['RmqEs'],_0x2660e4)+_0xba7dc7[_0x21bc73(0x82f)],_0x2530b3),console['log'](_0xba7dc7[_0x21bc73(0x985)](_0xba7dc7[_0x21bc73(0xcc2)](_0xba7dc7[_0x21bc73(0x564)](_0x2e43a2,'\x0a'),JSON[_0x21bc73(0x58c)+'gify'](_0x2530b3,null,0x556*-0x5+-0x9*-0x149+0x50a*0x3))+'\x0a',_0x18aa39));}};return _0x7ae413['datas'+'et'][_0x21c1eb(0x8c0)]='1',_0x7ae413[_0x21c1eb(0x8c0)]=_0x4a57cd,_0x4a57cd;}function _0x398fec(_0x51c29f){var _0x4fa82b=_0x2fbbc2,_0x1a8ff4=[];_0x1a8ff4['push'](_0xba7dc7['IijNJ']('frame'+_0x4fa82b(0xd0e),_0x51c29f['host']||'?')+_0x4fa82b(0x2f1)+Math[_0x4fa82b(0xb4c)]((_0x51c29f[_0x4fa82b(0x566)+'edMs']||-0x203*-0xa+-0x102a+-0x3f4)/(-0x1d*0x6f+0x1711+-0x696*0x1))+'s)'),_0x1a8ff4[_0x4fa82b(0x3ad)](_0xba7dc7[_0x4fa82b(0x410)](_0xba7dc7[_0x4fa82b(0xa40)]('uwmk\x20'+_0x4fa82b(0xd0e),_0x51c29f['uwmk']?_0x4fa82b(0x2e3):'no')+_0xba7dc7['BWxzd'],_0x51c29f['il2Cp'+_0x4fa82b(0x610)+'ext']?_0x4fa82b(0x2e3):'no')+_0xba7dc7[_0x4fa82b(0xd5e)]+(_0x51c29f['typeC'+_0x4fa82b(0x742)]!=null?_0x51c29f['typeC'+'ount']:'?')),_0x1a8ff4[_0x4fa82b(0x3ad)](_0xba7dc7['teaNx'](_0xba7dc7['bzaGG']+_0x51c29f[_0x4fa82b(0x497)+'Appli'+'ed']+'/',_0x51c29f[_0x4fa82b(0x497)+_0x4fa82b(0x473)])+(_0x4fa82b(0x353)+_0x4fa82b(0xb01))),_0x1a8ff4[_0x4fa82b(0x3ad)]('');var _0x59934f=_0x51c29f[_0x4fa82b(0x799)+_0x4fa82b(0xbc0)]||{},_0x4385fc=Object[_0x4fa82b(0x509)](_0x59934f);!_0x4385fc['lengt'+'h']&&(_0x1a8ff4[_0x4fa82b(0x3ad)](_0xba7dc7[_0x4fa82b(0x59f)]),_0x1a8ff4['push'](''),_0x1a8ff4[_0x4fa82b(0x3ad)](_0xba7dc7[_0x4fa82b(0x3b9)]),_0x1a8ff4[_0x4fa82b(0x3ad)](_0xba7dc7[_0x4fa82b(0xb5e)]));for(var _0x112bf7=-0x6b*0x39+0x132c+-0x18d*-0x3;_0x112bf7<_0x4385fc['lengt'+'h'];_0x112bf7++){var _0x3e7c63=_0x4385fc[_0x112bf7];_0x1a8ff4[_0x4fa82b(0x3ad)](_0xba7dc7['LONvv'](_0x3e7c63,'\x20@\x20')+_0x59934f[_0x3e7c63]);}_0x1a8ff4[_0x4fa82b(0x3ad)]('');var _0x1ebcfe=_0x51c29f[_0x4fa82b(0x208)+'y']||{},_0x51a136=Object[_0x4fa82b(0x509)](_0x1ebcfe);for(var _0x463e35=-0x905+-0x1e6a+0x276f*0x1;_0x463e35<_0x51a136[_0x4fa82b(0x25f)+'h'];_0x463e35++){var _0x5cca96=_0x51a136[_0x463e35],_0x410ea6=_0x1ebcfe[_0x5cca96];if(!_0x410ea6||!_0x410ea6[_0x4fa82b(0x25f)+'h'])continue;_0x1a8ff4[_0x4fa82b(0x3ad)](_0xba7dc7['ZHiVK'](_0x4fa82b(0x67b),_0x5cca96)+'\x20'+new Array(Math[_0x4fa82b(0x640)](-0x650*-0x4+-0xd70+-0xbcf,-0x979*0x1+0x13c2*-0x1+0x1d5d-_0x5cca96['lengt'+'h']))[_0x4fa82b(0xa45)]('─')),_0x1a8ff4[_0x4fa82b(0x3ad)](_0xba7dc7[_0x4fa82b(0xb4d)]);for(var _0x4821f6=-0x221b+-0xa66*0x1+0x2c81;_0xba7dc7[_0x4fa82b(0x967)](_0x4821f6,_0x410ea6[_0x4fa82b(0x25f)+'h']);_0x4821f6++){var _0x131ed2=_0x410ea6[_0x4821f6],_0x4846dc=typeof _0x131ed2['v']==='numbe'+'r'?Math[_0x4fa82b(0xb4c)](_0xba7dc7[_0x4fa82b(0x228)](_0x131ed2['v'],0x19d*-0xe+-0x12*-0x16a+-0x26*-0x7))/(0x2678+-0x9f5+-0x1*0x189b):_0x131ed2['v'];_0x1a8ff4['push'](_0xba7dc7['teaNx'](_0xba7dc7['LONvv'](_0xba7dc7['zncMY'](_0xba7dc7[_0x4fa82b(0x687)]('\x20\x20'+_0xba7dc7['rNKqZ']('0x',_0x131ed2['o'][_0x4fa82b(0x6ac)+_0x4fa82b(0x21d)](0x844+0xa0+-0x8d4))['padEn'+'d'](-0x169b+-0xe5*-0x1d+-0x1*0x34e)+'\x20',_0x131ed2['k'][_0x4fa82b(0x2f4)+'d'](-0x39*-0x8b+-0xc08+-0x12e0))+'\x20',_0xba7dc7['TwITA'](String,_0x4846dc)['padEn'+'d'](-0x3*-0x939+-0x239a+0x7ff)),'\x20'),_0x131ed2[_0x4fa82b(0xd60)]||''));}_0x1a8ff4[_0x4fa82b(0x3ad)]('');}if(_0x51c29f['warni'+_0x4fa82b(0x78e)]&&_0x51c29f[_0x4fa82b(0xb2c)+'ngs']['lengt'+'h']){_0x1a8ff4['push']('warni'+_0x4fa82b(0x78e));for(var _0x2fb92b=-0x4e7+-0xaef+-0x1*-0xfd6;_0xba7dc7['hzqkx'](_0x2fb92b,_0x51c29f['warni'+_0x4fa82b(0x78e)][_0x4fa82b(0x25f)+'h']);_0x2fb92b++)_0x1a8ff4[_0x4fa82b(0x3ad)](_0xba7dc7['gBIwr']+_0x51c29f[_0x4fa82b(0xb2c)+'ngs'][_0x2fb92b]);}return _0x1a8ff4[_0x4fa82b(0xa45)]('\x0a');}window[_0x2fbbc2(0x5ea)+_0x2fbbc2(0x23e)+'stene'+'r'](_0x2fbbc2(0x456)+'ge',function(_0x490204){var _0x1fe269=_0x2fbbc2,_0x1befac={'PQqcx':function(_0x5a2aaf,_0x18412f){var _0x1bca33=_0x4e00;return _0xba7dc7[_0x1bca33(0xa40)](_0x5a2aaf,_0x18412f);},'wOyPH':function(_0x72e4c1,_0x408391){var _0x2e2282=_0x4e00;return _0xba7dc7[_0x2e2282(0x327)](_0x72e4c1,_0x408391);},'tgBzx':function(_0x518ae2){var _0x52c093=_0x4e00;return _0xba7dc7[_0x52c093(0xaa9)](_0x518ae2);}};if(_0xba7dc7[_0x1fe269(0x6f5)](_0xba7dc7[_0x1fe269(0x9ff)],_0xba7dc7[_0x1fe269(0xc8e)])){var _0x23a534=_0xba7dc7['kmSQR'](_0x58f0d7,_0x1fe269(0x36c),_0xba7dc7[_0x1fe269(0xcd2)],_0xba7dc7[_0x1fe269(0xca9)]+_0x34dbbc[_0x1fe269(0xcf5)](-0x1*-0xefe+0x21d2+-0x30d0,-0x1*-0x1b6b+-0x816+-0x1351)['map'](function(_0x221c70){var _0x144e00=_0x1fe269;return _0x1befac['PQqcx']('0x'+(_0x1befac['wOyPH'](_0x221c70['o'],-0x2*-0x17d+-0x19f1+0x16f7*0x1)?'?':_0x221c70['o'][_0x144e00(0x6ac)+_0x144e00(0x21d)](-0x13b0+-0x4*-0x31+0x12fc)),'\x20(')+_0x221c70[_0x144e00(0x538)]+')';})[_0x1fe269(0xa45)]('\x20\x20'));_0x4acb20['body']['appen'+_0x1fe269(0x9ca)+'d'](_0x23a534);}else{var _0x529b69=_0x490204[_0x1fe269(0x539)];if(!_0x529b69||_0x529b69[_0x1fe269(0x68d)+_0x1fe269(0x95c)]!==_0x356741)return;try{if(_0xba7dc7[_0x1fe269(0x74c)]==='VoOOk')_0x3439d9['yawOf'+'f']=_0x28956d,_0x1befac['tgBzx'](_0x4613e6),_0xa094a5();else{if(_0x529b69['kind']==='hello'){_0xba7dc7['CtZhO'](_0x14bb00)['set']({'host':_0x529b69['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0xba7dc7[_0x1fe269(0x6f5)](_0x529b69[_0x1fe269(0xc68)],_0xba7dc7[_0x1fe269(0x232)]))_0xba7dc7[_0x1fe269(0x226)](_0x14bb00)[_0x1fe269(0xab2)](_0x529b69['repor'+'t']);}}catch(_0x1cf53d){console[_0x1fe269(0x7b4)](_0xba7dc7[_0x1fe269(0xd64)],_0xba7dc7[_0x1fe269(0xa50)]+_0x2660e4,_0x1cf53d);}}});function _0x35fc6c(){var _0xe7d5f9=_0x2fbbc2;if(_0xe7d5f9(0x666)!==_0xba7dc7[_0xe7d5f9(0x42e)]){var _0x2dd386=_0x1d1419['Unity'+_0xe7d5f9(0x80a)+'dkit']&&_0x46a861[_0xe7d5f9(0xb51)+_0xe7d5f9(0x80a)+'dkit'][_0xe7d5f9(0x295)+'me'];if(!_0x2dd386||typeof _0x2dd386[_0xe7d5f9(0x733)+'ePlug'+'in']!=='funct'+_0xe7d5f9(0x584)){_0x1d1431[_0xe7d5f9(0x705)]='Runti'+_0xe7d5f9(0x48c)+_0xe7d5f9(0x70f)+'lugin'+_0xe7d5f9(0x989)+_0xe7d5f9(0x72b)+'le';return;}_0x428ec0[_0xe7d5f9(0x2ad)+_0xe7d5f9(0x337)]=!![],_0x15055d=_0x2dd386[_0xe7d5f9(0x733)+'ePlug'+'in']({'name':_0xe7d5f9(0x617)+_0xe7d5f9(0x882)+_0xe7d5f9(0x4f6)+'z','version':_0x335be3,'referencedAssemblies':_0x1b6c88['slice']()}),_0x399230['ok']=!![];try{var _0x5b7712=_0x5abafb[_0xe7d5f9(0xb51)+_0xe7d5f9(0x80a)+_0xe7d5f9(0xb1d)][_0xe7d5f9(0x295)+'me'];_0x5b7712[_0xe7d5f9(0x68d)+_0xe7d5f9(0xc49)+'g']=_0xba7dc7['jBUGR'](_0x3d6ea7,':')+_0x143d72['rando'+'m']()[_0xe7d5f9(0x6ac)+_0xe7d5f9(0x21d)](0x93e+0x1718*0x1+0x1a*-0x13d)['slice'](-0x1*-0x14c6+-0x19d6+0x512,0x2b3+0x505*-0x3+0x633*0x2),_0x4961ce=_0x5b7712[_0xe7d5f9(0x68d)+'uraTa'+'g'];}catch(_0x54a251){}_0xba7dc7[_0xe7d5f9(0xa8c)](_0x891aa3),_0xba7dc7[_0xe7d5f9(0x2c5)](_0x2f5e33),_0x34d926[_0xe7d5f9(0x497)+_0xe7d5f9(0x42c)+'tered']=_0x193ba9['lengt'+'h'],_0x4f8f83(),_0x552827[_0xe7d5f9(0x542)+_0xe7d5f9(0x8dd)]=!![];}else _0x7c152e(!![]);}if(document[_0x2fbbc2(0xaf7)])_0x35fc6c();else document[_0x2fbbc2(0x5ea)+'entLi'+'stene'+'r'](_0xba7dc7[_0x2fbbc2(0xc4a)],_0x35fc6c,{'once':!![]});return;}window[_0x2fbbc2(0x8ce)+'URA_S'+_0x2fbbc2(0xb1c)]=window['__SAK'+'URA_S'+_0x2fbbc2(0xb1c)]||{'at':Date[_0x2fbbc2(0xa28)]()};function _0x596e49(_0x35cf60,_0x3b3789){var _0x512854=_0x2fbbc2;if(_0xba7dc7[_0x512854(0xc0a)](_0xba7dc7['hAnCw'],_0x512854(0xac6)))try{if(_0xb8801a[_0x422fe7]['conte'+_0x512854(0x2f9)+'dow'])_0x432a19[_0x562637][_0x512854(0x952)+_0x512854(0x2f9)+'dow'][_0x512854(0xaab)+'essag'+'e'](_0x310d6d,'*');}catch(_0x2db841){}else{var _0x85a911={'__sakura':_0x356741,'kind':_0x35cf60};if(_0x3b3789){for(var _0x8c61e8 in _0x3b3789)_0x85a911[_0x8c61e8]=_0x3b3789[_0x8c61e8];}try{if(window[_0x512854(0x2cf)+'t']&&window['paren'+'t']!==window)window['paren'+'t'][_0x512854(0xaab)+_0x512854(0xc78)+'e'](_0x85a911,'*');}catch(_0x4f5d17){}try{if(window[_0x512854(0xab1)]&&_0xba7dc7[_0x512854(0x2df)](window[_0x512854(0xab1)],window))window[_0x512854(0xab1)]['postM'+_0x512854(0xc78)+'e'](_0x85a911,'*');}catch(_0x7dcba1){}}}console[_0x2fbbc2(0x656)]('%c[sa'+_0x2fbbc2(0xb7a)+'\x20SW-P'+_0x2fbbc2(0x6bb)+_0x2fbbc2(0x218)+_0x2fbbc2(0x5b7)+_0x1a991b,_0xba7dc7['RmqEs']+_0x2660e4+(';font'+_0x2fbbc2(0x8af)+_0x2fbbc2(0x6ee)+_0x2fbbc2(0xb78)+_0x2fbbc2(0x554)+'e:14p'+'x'),{'host':_0x1108e0,'href':location[_0x2fbbc2(0x47a)],'version':_0x1a991b}),_0xba7dc7[_0x2fbbc2(0xcad)](_0x596e49,_0xba7dc7['RIbeT'],{'host':_0x1108e0,'role':_0x4a7871});var _0x507012=window[_0x2fbbc2(0x8ce)+_0x2fbbc2(0xa31)+'W__']&&window['__SAK'+'URA_S'+_0x2fbbc2(0xb1c)]['at']||Date[_0x2fbbc2(0xa28)]();window['addEv'+'entLi'+'stene'+'r'](_0x2fbbc2(0x456)+'ge',function(_0x4450c4){var _0x169145=_0x2fbbc2,_0x566ff2={'jpalM':function(_0x55c722,_0x25a693,_0x104898){var _0x2cafaf=_0x4e00;return _0xba7dc7[_0x2cafaf(0x9da)](_0x55c722,_0x25a693,_0x104898);}};if('ngCGM'===_0xba7dc7['BeYlh']){if(!_0x4f3072['on'])_0x3ec55d(!![],![]);else{if(_0x1eaa55['boxes'])_0x473448(![],![]);else{if(_0x2c4c73())_0x566ff2[_0x169145(0x8c7)](_0x4b527c,!![],!![]);else _0x566ff2['jpalM'](_0x46e459,![],![]);}}}else try{var _0x3876d8=_0x4450c4&&_0x4450c4[_0x169145(0x539)];if(!_0x3876d8||_0x3876d8['__sak'+_0x169145(0x95c)]!==_0x356741||_0x3876d8[_0x169145(0xc68)]!==_0xba7dc7[_0x169145(0x515)])return;_0x5bfd7b(_0x3876d8[_0x169145(0xc42)],_0x3876d8['arg']);}catch(_0x1c516c){}});try{if(_0xba7dc7[_0x2fbbc2(0xd39)](_0x2fbbc2(0xb91),_0xba7dc7['NCycE'])){var _0x43538c=('5|3|8'+_0x2fbbc2(0x65c)+'0|2|7'+'|4')['split']('|'),_0x4229a9=0x254c+-0x1f1*0x3+-0x1f79;while(!![]){switch(_0x43538c[_0x4229a9++]){case'0':_0x20fdbc=_0x30ff02||_0x11e1b7[_0x2fbbc2(0x259)+'ns'][_0x11e1b7[_0x2fbbc2(0x259)+'ns'][_0x2fbbc2(0x25f)+'h']-(-0x49*-0x1b+0x172*-0x8+0x3de)];continue;case'1':_0x2f506b=_0x132cce[_0x2fbbc2(0xb51)+_0x2fbbc2(0x80a)+'dkit']['Value'+_0x2fbbc2(0x268)+'er'];continue;case'2':if(!_0x1f4f73||typeof _0xb8114e[_0x2fbbc2(0x69d)+_0x2fbbc2(0xa9d)]!==_0x2fbbc2(0x849)+'ion')return![];continue;case'3':if(!_0x1c24fb['Unity'+_0x2fbbc2(0x80a)+_0x2fbbc2(0xb1d)]||!_0x191ed0[_0x2fbbc2(0xb51)+_0x2fbbc2(0x80a)+_0x2fbbc2(0xb1d)]['Runti'+'me'])return![];continue;case'4':return _0x11d3bd['lengt'+'h']>-0x1d29+0x3d*0x2+0x1caf;case'5':if(_0x4b40ed[_0x2fbbc2(0x25f)+'h'])return!![];continue;case'6':if(!_0x11e1b7[_0x2fbbc2(0x259)+'ns']||!_0x11e1b7[_0x2fbbc2(0x259)+'ns']['lengt'+'h'])return![];continue;case'7':for(var _0x5e764f=0x1b1*0x2+0x4*-0x701+0x18a2;_0xba7dc7[_0x2fbbc2(0xbbb)](_0x5e764f,_0x1a88bc[_0x2fbbc2(0x25f)+'h']);_0x5e764f++){var _0x5167ba=_0x305120[_0x5e764f];try{var _0x35d3c4=_0x50218d[_0x2fbbc2(0x69d)+_0x2fbbc2(0xa9d)]({'typeName':_0x5167ba[_0x2fbbc2(0x72e)],'methodName':_0xba7dc7[_0x2fbbc2(0x49f)],'params':['i32','i32'],'returnType':_0x164a4b},_0x588cfc(_0x5167ba[_0x2fbbc2(0x72e)],_0x5167ba[_0x2fbbc2(0xb70)],_0x5167ba[_0x2fbbc2(0x824)]));_0x508578[_0x2fbbc2(0x3ad)]({'type':_0x5167ba['type'],'hook':_0x35d3c4,'keep':_0x5167ba['keep']});}catch(_0x22a59a){_0x970414[_0x2fbbc2(0x3ad)](_0x5167ba[_0x2fbbc2(0x72e)]+':\x20'+_0x139ab1(_0x22a59a&&_0x22a59a['messa'+'ge']||_0x22a59a)[_0x2fbbc2(0xcf5)](0x8*-0x29+-0x801+0x949,0x56*-0x3b+-0x1*0x1370+0x27e2));}}continue;case'8':var _0x11e1b7=_0x20b85a[_0x2fbbc2(0xb51)+_0x2fbbc2(0x80a)+'dkit'][_0x2fbbc2(0x295)+'me'];continue;}break;}}else{var _0x1a7896=new BroadcastChannel('sakur'+_0x2fbbc2(0xd98));_0x1a7896['onmes'+'sage']=function(_0x1e2c65){var _0x24c510=_0x2fbbc2,_0x2abcab=_0x1e2c65['data'];if(_0x2abcab&&_0x2abcab[_0x24c510(0x68d)+'ura']===_0x356741&&_0xba7dc7['cUWiX'](_0x2abcab['kind'],_0xba7dc7['HxQJy']))_0xba7dc7['tqqvm'](_0x5bfd7b,_0x2abcab['cmd'],_0x2abcab[_0x24c510(0xb53)]);};}}catch(_0x44525f){}var _0x466588=[];(function _0x4a1177(){var _0x479042=_0x2fbbc2,_0x5c3fc5={'vlrnS':function(_0x4a5471,_0x5ac09f){return _0xba7dc7['fCBlQ'](_0x4a5471,_0x5ac09f);},'KwJte':'Clipb'+'oard\x20'+_0x479042(0x5ce)+_0x479042(0x998)+_0x479042(0x34f)+'the\x20p'+'anel\x20'+_0x479042(0x958)+'ad','ApaKm':'strin'+'g','yGpIr':function(_0x1a3aa4,_0x91ac2){return _0x1a3aa4!==_0x91ac2;},'OFwSY':'bPJYg','BuNqg':function(_0x723dc0,_0x47356c){return _0x723dc0===_0x47356c;},'Smuji':_0xba7dc7[_0x479042(0x662)],'DxsrL':_0x479042(0x849)+_0x479042(0x584)};if(_0xba7dc7[_0x479042(0x626)]('XyVuM','eQeLP')){if(_0x10ff78[_0x4c4106][_0x479042(0x34d)+'rs'][_0x479042(0x25f)+'h']>=_0x585159)_0x3ed1cb['push'](_0x589140[_0x4b5022]);}else{var _0x265536=[_0xba7dc7[_0x479042(0xcae)],_0x479042(0x7b4),_0x479042(0x705),_0x479042(0x73d),_0x479042(0x2fd)];for(var _0x3e7b46=0x127f+-0x169d+0x20f*0x2;_0xba7dc7[_0x479042(0x5bb)](_0x3e7b46,_0x265536['lengt'+'h']);_0x3e7b46++){(function(_0x28351c){var _0x281028=_0x479042,_0xb89b84={'SZPlB':'Copie'+'d'};if(_0x5c3fc5[_0x281028(0x563)](_0x5c3fc5['Smuji'],'utHXM')){var _0x2f3e75=_0x5c3fc5['vlrnS'](_0x4663cc+'\x0a'+_0x5ef36['strin'+'gify'](_0x435c24,null,-0x1563+-0x1b8e+-0x7*-0x6fe),'\x0a')+_0x1c0c88;if(_0x305f98['clipb'+'oard']&&_0x13e7e9[_0x281028(0x2cc)+'oard'][_0x281028(0xa78)+'Text'])_0x27e8d4[_0x281028(0x2cc)+_0x281028(0xb62)]['write'+'Text'](_0x2f3e75)[_0x281028(0x712)](function(){var _0x5f5111=_0x281028;_0x5f20ee['textC'+_0x5f5111(0x98d)+'t']=_0xb89b84[_0x5f5111(0x329)];});else _0xda704[_0x281028(0x52b)+'onten'+'t']=_0x5c3fc5[_0x281028(0x1d7)];}else{var _0x5d3d87=console[_0x28351c];if(_0x5c3fc5['yGpIr'](typeof _0x5d3d87,_0x5c3fc5[_0x281028(0x8cd)]))return;console[_0x28351c]=function(){var _0xe7e9ec=_0x281028;try{var _0x411afb='';for(var _0x32ce58=0x21c9+-0x3bf+0x2*-0xf05;_0x32ce58<arguments['lengt'+'h'];_0x32ce58++){var _0x18d575=arguments[_0x32ce58];if(typeof _0x18d575===_0x5c3fc5[_0xe7e9ec(0x56e)])_0x411afb+=_0x18d575;else{if(_0x18d575&&_0x18d575['messa'+'ge'])_0x411afb+=_0x18d575['messa'+'ge'];}}if(_0x411afb[_0xe7e9ec(0x7b8)+'Of'](_0x2e43a2)!==-(0x8f*-0x22+0x6*0x571+-0x1*0xda7))return _0x5d3d87['apply'](console,arguments);if(_0x411afb[_0xe7e9ec(0x7b8)+'Of'](_0xe7e9ec(0xb51)+'WebMo'+'dkit')!==-(-0x18d1+0x4*-0x797+0x7e2*0x7)){if(_0x5c3fc5[_0xe7e9ec(0x563)](_0xe7e9ec(0x6a6),_0x5c3fc5['OFwSY'])){var _0x3710a1=_0x411afb['slice'](0x1829+0x3*-0x89c+0x1ab,-0x270e+-0x6c*0x4f+0x498e);if(_0x5c3fc5[_0xe7e9ec(0xc57)](_0x466588['index'+'Of'](_0x3710a1),-(0x2428+0x101*-0x13+0x4*-0x445))&&_0x466588['lengt'+'h']<0xcd*0x7+-0x5d1*0x1+0x72)_0x466588[_0xe7e9ec(0x3ad)](_0x3710a1);}else _0x44f82d['span']=_0x1cd849;}}catch(_0x134cb6){}return _0x5d3d87[_0xe7e9ec(0x6b4)](console,arguments);};}}(_0x265536[_0x3e7b46]));}}}());var _0x1fd036={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x24f615=null,_0x2411c3=null,_0x3e4385=-(0x3*0x7a1+-0x24cb+0xde9),_0x4bcd42=null;function _0x252d5f(_0x44e430){var _0x17bd62=_0x2fbbc2,_0x2f15ec={'UTEgY':_0xba7dc7[_0x17bd62(0x91f)]};try{if(_0xba7dc7[_0x17bd62(0x839)](_0xba7dc7[_0x17bd62(0x679)],_0xba7dc7['aZsLn'])){if(!_0x44e430)return;var _0x150922=_0x44e430['insta'+_0x17bd62(0x56b)]?_0x44e430[_0x17bd62(0x799)+'nce']['expor'+'ts']:_0x44e430['expor'+'ts']||null;if(!_0x150922)return;if(!_0x4bcd42)try{_0x4bcd42=Object[_0x17bd62(0x509)](_0x150922)[_0x17bd62(0xcf5)](0x231e+0x1*0x1828+-0x9e1*0x6,-0x2179+0x97*0x3+0x1fcc);}catch(_0x3b43da){}var _0x20f41e=_0x150922[_0x17bd62(0x542)+'y'];if(_0x20f41e&&_0x20f41e['buffe'+'r']&&_0x20f41e['buffe'+'r'][_0x17bd62(0xb8e)+_0x17bd62(0xa0c)]>0x1b1+-0x11c*-0x5+-0x73d){if('hxeDD'==='hxeDD')_0x2411c3=_0x20f41e,_0x3e4385=Date[_0x17bd62(0xa28)]()-_0x507012;else return _0x12528d['faile'+'d']++,_0x1a5332['lastE'+_0x17bd62(0x2da)]=_0x327272[_0x17bd62(0x8ea)+_0x17bd62(0x2da)]||_0x3b992c(_0x3338fe&&_0x550b03['messa'+'ge']||_0x1dd5e0)['slice'](0x7aa+0x8e*0x1f+-0xc6e*0x2,0x22ca+-0x724+-0x1b2e),null;}}else _0x2ee723(_0x2f15ec[_0x17bd62(0xc9d)]);}catch(_0x47eaa7){}}function _0x122836(){var _0x13ee24=_0x2fbbc2,_0x5e19b8={'Jszlc':_0x13ee24(0xbae),'zdPzE':function(_0x1773c9,_0x3d2690){return _0xba7dc7['XdqAh'](_0x1773c9,_0x3d2690);},'UxzVK':_0x13ee24(0x849)+'ion','XnRof':function(_0x47b457,_0xea770){return _0x47b457(_0xea770);}};try{if(_0xba7dc7[_0x13ee24(0x626)](typeof WebAssembly,_0xba7dc7['ElFJF']))return;var _0x317adc=[_0xba7dc7['wmVsW'],_0x13ee24(0x799)+'ntiat'+'eStre'+_0x13ee24(0x2fb)];for(var _0x2458de=-0x1b4*-0xc+0x3d0+-0x1840;_0x2458de<_0x317adc[_0x13ee24(0x25f)+'h'];_0x2458de++){(function(_0x3e292e){var _0x25f0f7=_0x13ee24,_0x3de7e3=WebAssembly[_0x3e292e];if(_0xba7dc7[_0x25f0f7(0x4c5)](typeof _0x3de7e3,_0xba7dc7[_0x25f0f7(0x459)])||_0x3de7e3['__sak'+_0x25f0f7(0x969)+'moryT'+'ap'])return;var _0x29f2a3=function(){var _0x1748a6=_0x25f0f7;if(_0x5e19b8['Jszlc']==='QYaGo'){var _0x3dbf33=_0x3de7e3[_0x1748a6(0x6b4)](this,arguments);try{if(_0x3dbf33&&_0x5e19b8[_0x1748a6(0x7b9)](typeof _0x3dbf33['then'],_0x5e19b8[_0x1748a6(0x269)]))_0x3dbf33[_0x1748a6(0x712)](_0x252d5f,function(){});else _0x5e19b8['XnRof'](_0x252d5f,_0x3dbf33);}catch(_0x136a9a){}return _0x3dbf33;}else return _0x2ba8b4['on'];};_0x29f2a3[_0x25f0f7(0x68d)+'uraMe'+_0x25f0f7(0x32f)+'ap']=!![];try{Object['defin'+'eProp'+_0x25f0f7(0xaf6)](_0x29f2a3,_0x25f0f7(0x5b5),{'value':_0x3de7e3['name'],'configurable':!![]});}catch(_0x4acb6b){}WebAssembly[_0x3e292e]=_0x29f2a3;}(_0x317adc[_0x2458de]));}}catch(_0x2a8bb4){}}var _0x218efb=null,_0x3ea3df=null,_0x342350={},_0x24f94f={'MouseLook':[{'name':_0x2fbbc2(0xd0b)+_0x2fbbc2(0x4b8)+'\u0094','ret':_0xba7dc7['wvXLE'],'params':[],'wasmParams':[_0x2fbbc2(0xc77)]},{'name':_0x2fbbc2(0x950)+_0x2fbbc2(0x5c7)+'\u008e','ret':_0xba7dc7['wvXLE'],'params':[_0xba7dc7['zRxgh']],'wasmParams':[_0x2fbbc2(0xc77),_0x2fbbc2(0xb6c)]},{'name':_0xba7dc7['OHjhI'],'ret':'void','params':[_0x2fbbc2(0x46a)],'wasmParams':[_0xba7dc7['WBWCa'],_0x2fbbc2(0xb6c)]},{'name':'\u0086\u0093\u0094\u008b\u0092'+_0x2fbbc2(0x9ed)+'\u0095','ret':_0xba7dc7[_0x2fbbc2(0xaaf)],'params':[_0x2fbbc2(0x46a)],'wasmParams':['i32',_0xba7dc7['XQNwa']]},{'name':_0x2fbbc2(0x73f)+_0x2fbbc2(0xa2d)+'\u0091','ret':'void','params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]]},{'name':_0x2fbbc2(0x830)+_0x2fbbc2(0x8e8)+'\u0094','ret':_0xba7dc7[_0x2fbbc2(0xaaf)],'params':[],'wasmParams':['i32']},{'name':_0x2fbbc2(0xc7f)+'\u008b\u008a\u0087\u0089\u0091'+'\u008f','ret':'void','params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]]},{'name':_0xba7dc7[_0x2fbbc2(0xa20)],'ret':'void','params':[],'wasmParams':[_0x2fbbc2(0xc77)]},{'name':_0xba7dc7['btCDY'],'ret':_0xba7dc7[_0x2fbbc2(0xaaf)],'params':[],'wasmParams':[_0xba7dc7['WBWCa']]},{'name':'\u008c\u0091\u0088\u0095\u008c'+_0x2fbbc2(0x38c)+'\u0095','ret':_0xba7dc7['zRxgh'],'params':[],'wasmParams':[_0xba7dc7['WBWCa']],'wasmRet':_0x2fbbc2(0xb6c)},{'name':_0xba7dc7[_0x2fbbc2(0x39c)],'ret':_0x2fbbc2(0x721),'params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]]},{'name':_0xba7dc7['NjqrF'],'ret':'void','params':[_0xba7dc7[_0x2fbbc2(0x68e)]],'wasmParams':[_0xba7dc7['WBWCa'],_0xba7dc7[_0x2fbbc2(0x350)]]},{'name':'\u0093\u0089\u0095\u0092\u0090'+_0x2fbbc2(0xc45)+'\u008d','ret':'float','params':[],'wasmParams':[_0x2fbbc2(0xc77)],'wasmRet':_0xba7dc7['XQNwa']},{'name':_0xba7dc7[_0x2fbbc2(0x977)],'ret':'void','params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]]},{'name':'\u008f\u008c\u0086\u008e\u008f'+'\u0087\u0087\u008c\u0086\u0086'+'\u0091','ret':'void','params':[],'wasmParams':[_0xba7dc7['WBWCa']]},{'name':_0xba7dc7[_0x2fbbc2(0x88e)],'ret':_0x2fbbc2(0x721),'params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]]},{'name':_0xba7dc7[_0x2fbbc2(0xc97)],'ret':'void','params':[],'wasmParams':[_0x2fbbc2(0xc77)]},{'name':_0xba7dc7[_0x2fbbc2(0x843)],'ret':_0xba7dc7['wvXLE'],'params':[_0x2fbbc2(0x46a),_0x2fbbc2(0x46a)],'wasmParams':[_0x2fbbc2(0xc77),_0x2fbbc2(0xb6c),_0x2fbbc2(0xb6c)]},{'name':_0xba7dc7[_0x2fbbc2(0x3f9)],'ret':_0xba7dc7['zRxgh'],'params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]],'wasmRet':_0xba7dc7[_0x2fbbc2(0x350)]},{'name':_0xba7dc7['KwNND'],'ret':_0xba7dc7[_0x2fbbc2(0xaaf)],'params':[],'wasmParams':[_0xba7dc7['WBWCa']]},{'name':'.ctor','ret':_0xba7dc7['wvXLE'],'params':[],'wasmParams':['i32']},{'name':_0x2fbbc2(0xbdb)+'\u0090\u0091\u008e\u008f\u0089'+'\u008e','ret':_0xba7dc7['wvXLE'],'params':[_0x2fbbc2(0x46a)],'wasmParams':[_0x2fbbc2(0xc77),_0x2fbbc2(0xb6c)]},{'name':_0x2fbbc2(0xce5)+'\u0087\u0092\u0088\u0088\u008c'+'\u0088','ret':_0xba7dc7['zRxgh'],'params':[],'wasmParams':[_0x2fbbc2(0xc77)],'wasmRet':_0xba7dc7[_0x2fbbc2(0x350)]},{'name':_0x2fbbc2(0x8de)+_0x2fbbc2(0x691)+'\u008a','ret':_0x2fbbc2(0x721),'params':[_0x2fbbc2(0x46a),_0x2fbbc2(0x46a)],'wasmParams':[_0xba7dc7['WBWCa'],_0x2fbbc2(0xb6c),_0x2fbbc2(0xb6c)]},{'name':_0x2fbbc2(0x9b5)+_0x2fbbc2(0x24f)+'\u008d','ret':'void','params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]]},{'name':_0xba7dc7[_0x2fbbc2(0x434)],'ret':_0xba7dc7['wvXLE'],'params':[],'wasmParams':[_0x2fbbc2(0xc77)]},{'name':'\u008e\u0092\u0091\u0088\u0092'+'\u0090\u0095\u008d\u0090\u0088'+'\u008b','ret':'void','params':[_0x2fbbc2(0x46a)],'wasmParams':[_0x2fbbc2(0xc77),_0xba7dc7['XQNwa']]},{'name':_0xba7dc7[_0x2fbbc2(0xb72)],'ret':_0xba7dc7[_0x2fbbc2(0x68e)],'params':[],'wasmParams':['i32'],'wasmRet':_0x2fbbc2(0xb6c)},{'name':_0x2fbbc2(0x940)+_0x2fbbc2(0x55a)+'\u008a','ret':_0xba7dc7['zRxgh'],'params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]],'wasmRet':'f32'},{'name':_0x2fbbc2(0x7b3)+_0x2fbbc2(0x7de)+'\u0088','ret':'void','params':[_0x2fbbc2(0x46a)],'wasmParams':[_0xba7dc7['WBWCa'],_0xba7dc7['XQNwa']]},{'name':_0x2fbbc2(0x5ec)+_0x2fbbc2(0x8b8)+'\u008c','ret':'void','params':[],'wasmParams':['i32']},{'name':'\u008c\u0091\u0093\u0095\u0087'+_0x2fbbc2(0xd31)+'\u0093','ret':_0xba7dc7['wvXLE'],'params':['float'],'wasmParams':[_0x2fbbc2(0xc77),_0x2fbbc2(0xb6c)]},{'name':'\u008c\u0089\u008e\u0086\u0086'+_0x2fbbc2(0xd50)+'\u0089','ret':_0xba7dc7[_0x2fbbc2(0xaaf)],'params':[],'wasmParams':[_0xba7dc7['WBWCa']]},{'name':_0xba7dc7[_0x2fbbc2(0xd6e)],'ret':_0xba7dc7[_0x2fbbc2(0xaaf)],'params':[],'wasmParams':[_0x2fbbc2(0xc77)]},{'name':_0xba7dc7[_0x2fbbc2(0x891)],'ret':_0x2fbbc2(0x721),'params':['float'],'wasmParams':[_0xba7dc7['WBWCa'],_0xba7dc7['XQNwa']]}],'FPScontroller':[{'name':'\u0092\u0091\u008e\u0095\u0092'+_0x2fbbc2(0x686)+'\u008e','ret':_0xba7dc7['zRxgh'],'params':[],'wasmParams':[_0x2fbbc2(0xc77)],'wasmRet':_0x2fbbc2(0xb6c)},{'name':'\u0090\u0093\u0091\u0091\u008b'+'\u0092\u0091\u0088\u008c\u0090'+'\u0092','ret':_0x2fbbc2(0x721),'params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]]},{'name':_0xba7dc7[_0x2fbbc2(0x2aa)],'ret':_0x2fbbc2(0x3b6),'params':[],'wasmParams':[_0x2fbbc2(0xc77)],'wasmRet':_0x2fbbc2(0xc77)},{'name':_0xba7dc7[_0x2fbbc2(0xb02)],'ret':_0xba7dc7['wvXLE'],'params':[_0x2fbbc2(0x3b6)],'wasmParams':['i32',_0xba7dc7[_0x2fbbc2(0x7a5)]]},{'name':_0x2fbbc2(0x605)+_0x2fbbc2(0xcc7)+'\u0092','ret':_0xba7dc7[_0x2fbbc2(0xaaf)],'params':[],'wasmParams':[_0x2fbbc2(0xc77)]},{'name':_0xba7dc7['Eiuqh'],'ret':_0x2fbbc2(0x721),'params':[],'wasmParams':['i32']},{'name':_0xba7dc7[_0x2fbbc2(0x434)],'ret':'void','params':[],'wasmParams':[_0x2fbbc2(0xc77)]},{'name':'\u0088\u0093\u0088\u0095\u008b'+_0x2fbbc2(0xbc5)+'\u0087','ret':_0xba7dc7[_0x2fbbc2(0x508)],'params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]],'wasmRet':_0xba7dc7[_0x2fbbc2(0x7a5)]},{'name':'\u0094\u008d\u0087\u0087\u008a'+'\u008c\u0088\u008a\u0089\u0092'+'\u0087','ret':'void','params':[],'wasmParams':[_0x2fbbc2(0xc77)]},{'name':'\u0090\u0092\u008e\u008e\u0087'+_0x2fbbc2(0x64c)+'\u0093','ret':_0x2fbbc2(0x3b6),'params':[],'wasmParams':['i32'],'wasmRet':_0xba7dc7[_0x2fbbc2(0x7a5)]},{'name':_0xba7dc7[_0x2fbbc2(0x1f8)],'ret':_0x2fbbc2(0x3b6),'params':[],'wasmParams':[_0xba7dc7['WBWCa']],'wasmRet':_0x2fbbc2(0xc77)},{'name':_0x2fbbc2(0x836)+'\u008c\u0087\u0095\u0093\u008b'+'\u0094','ret':_0xba7dc7[_0x2fbbc2(0xaaf)],'params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]]},{'name':_0x2fbbc2(0xb24)+'\u008b\u0089\u0092\u0089\u008b'+'\u0095','ret':_0x2fbbc2(0x721),'params':[],'wasmParams':[_0x2fbbc2(0xc77)]},{'name':_0xba7dc7[_0x2fbbc2(0xad7)],'ret':_0xba7dc7[_0x2fbbc2(0x508)],'params':[_0xba7dc7[_0x2fbbc2(0x508)],_0x2fbbc2(0x3b6)],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)],_0x2fbbc2(0xc77),_0xba7dc7[_0x2fbbc2(0x7a5)]],'wasmRet':_0xba7dc7['WBWCa']},{'name':_0x2fbbc2(0x704)+_0x2fbbc2(0x8fd)+'\u0090','ret':_0x2fbbc2(0x721),'params':[],'wasmParams':[_0xba7dc7['WBWCa']]},{'name':_0xba7dc7['svvbY'],'ret':_0xba7dc7['IyQGP'],'params':[],'wasmParams':[_0x2fbbc2(0xc77)],'wasmRet':'i32'},{'name':_0x2fbbc2(0x7a7)+_0x2fbbc2(0x9bf)+'\u008f','ret':_0xba7dc7[_0x2fbbc2(0xaaf)],'params':[_0x2fbbc2(0x3b6)],'wasmParams':[_0xba7dc7['WBWCa'],_0xba7dc7['WBWCa']]},{'name':_0xba7dc7['eEBsL'],'ret':_0xba7dc7[_0x2fbbc2(0xaaf)],'params':[],'wasmParams':['i32']},{'name':_0xba7dc7[_0x2fbbc2(0x3fa)],'ret':'bool','params':[],'wasmParams':[_0x2fbbc2(0xc77)],'wasmRet':_0xba7dc7[_0x2fbbc2(0x7a5)]},{'name':_0x2fbbc2(0xafa)+'\u008e\u0093\u0095\u008d\u008e'+'\u008f','ret':_0xba7dc7[_0x2fbbc2(0xaaf)],'params':[],'wasmParams':[_0x2fbbc2(0xc77)]},{'name':'\u0088\u0087\u0093\u008c\u0094'+_0x2fbbc2(0x94f)+'\u0094','ret':'void','params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]]},{'name':_0x2fbbc2(0x425)+_0x2fbbc2(0x37e)+'\u0089','ret':_0xba7dc7['wvXLE'],'params':[],'wasmParams':[_0xba7dc7['WBWCa']]},{'name':'\u008a\u0088\u0087\u0090\u008f'+'\u0086\u008b\u008e\u008a\u0089'+'\u008b','ret':'void','params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]]},{'name':_0x2fbbc2(0x352)+_0x2fbbc2(0x385)+'\u0094','ret':'void','params':[],'wasmParams':[_0x2fbbc2(0xc77)]},{'name':'\u008b\u0090\u0088\u008d\u0087'+'\u008b\u0091\u008d\u0086\u0093'+'\u0090','ret':_0x2fbbc2(0x721),'params':[_0xba7dc7[_0x2fbbc2(0x508)]],'wasmParams':['i32','i32']},{'name':_0xba7dc7[_0x2fbbc2(0x49e)],'ret':_0x2fbbc2(0x721),'params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]]},{'name':_0xba7dc7[_0x2fbbc2(0x2b2)],'ret':_0xba7dc7['wvXLE'],'params':[],'wasmParams':['i32']},{'name':'\u0086\u0090\u0092\u0091\u0090'+'\u008b\u0091\u0091\u0089\u0091'+'\u008c','ret':_0x2fbbc2(0x721),'params':[],'wasmParams':['i32']},{'name':_0x2fbbc2(0xb23)+_0x2fbbc2(0x552)+'\u0091','ret':_0x2fbbc2(0x721),'params':[],'wasmParams':['i32']},{'name':_0xba7dc7[_0x2fbbc2(0x9d8)],'ret':_0xba7dc7[_0x2fbbc2(0xaaf)],'params':[],'wasmParams':[_0xba7dc7['WBWCa']]},{'name':_0xba7dc7['PHFDC'],'ret':_0x2fbbc2(0x721),'params':[],'wasmParams':['i32']},{'name':_0xba7dc7[_0x2fbbc2(0x6aa)],'ret':_0x2fbbc2(0x721),'params':[],'wasmParams':['i32']},{'name':_0xba7dc7[_0x2fbbc2(0x289)],'ret':_0xba7dc7['wvXLE'],'params':['bool'],'wasmParams':[_0x2fbbc2(0xc77),_0x2fbbc2(0xc77)]},{'name':_0xba7dc7['BmmUV'],'ret':_0x2fbbc2(0x721),'params':[],'wasmParams':[_0x2fbbc2(0xc77)]},{'name':_0xba7dc7['aSZlI'],'ret':_0xba7dc7[_0x2fbbc2(0xaaf)],'params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]]},{'name':_0x2fbbc2(0x87c)+_0x2fbbc2(0x2c0)+'\u008a','ret':_0xba7dc7[_0x2fbbc2(0xaaf)],'params':[],'wasmParams':[_0x2fbbc2(0xc77)]},{'name':_0x2fbbc2(0xa6b)+_0x2fbbc2(0x562)+'\u0087','ret':_0x2fbbc2(0x721),'params':[],'wasmParams':[_0x2fbbc2(0xc77)]},{'name':_0x2fbbc2(0x3dc)+'\u008b\u008e\u008e\u0091\u0086'+'\u0087','ret':'void','params':[],'wasmParams':[_0xba7dc7['WBWCa']]},{'name':_0x2fbbc2(0x82d)+_0x2fbbc2(0xd54)+'\u0087','ret':'void','params':[],'wasmParams':[_0x2fbbc2(0xc77)]},{'name':_0xba7dc7['XGuFm'],'ret':_0xba7dc7[_0x2fbbc2(0xaaf)],'params':[_0xba7dc7[_0x2fbbc2(0x508)]],'wasmParams':[_0x2fbbc2(0xc77),_0x2fbbc2(0xc77)]},{'name':_0xba7dc7['gtbhJ'],'ret':_0xba7dc7[_0x2fbbc2(0x508)],'params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]],'wasmRet':_0xba7dc7[_0x2fbbc2(0x7a5)]},{'name':_0xba7dc7[_0x2fbbc2(0x5d8)],'ret':'bool','params':[],'wasmParams':[_0xba7dc7['WBWCa']],'wasmRet':_0xba7dc7[_0x2fbbc2(0x7a5)]},{'name':_0x2fbbc2(0x772)+'\u0093\u0086\u0087\u008c\u008a'+'\u008d','ret':'bool','params':[],'wasmParams':[_0xba7dc7['WBWCa']],'wasmRet':_0x2fbbc2(0xc77)},{'name':_0x2fbbc2(0x427)+'\u008f\u008d\u0086\u0089\u008d'+'\u0094','ret':_0x2fbbc2(0x721),'params':[],'wasmParams':[_0x2fbbc2(0xc77)]},{'name':_0xba7dc7[_0x2fbbc2(0x20a)],'ret':_0xba7dc7['wvXLE'],'params':[],'wasmParams':['i32']},{'name':'\u0088\u0091\u0095\u008a\u0087'+_0x2fbbc2(0x386)+'\u008b','ret':_0x2fbbc2(0x721),'params':[],'wasmParams':['i32']},{'name':_0x2fbbc2(0x64d)+'\u0089\u0087\u008f\u0092\u0095'+'\u0091','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x2fbbc2(0x21c)+'\u0088\u008e\u0088\u008b\u0090'+'\u008b','ret':_0xba7dc7[_0x2fbbc2(0xaaf)],'params':[],'wasmParams':['i32']},{'name':_0xba7dc7['GLADI'],'ret':'void','params':[],'wasmParams':[_0xba7dc7['WBWCa']]},{'name':_0x2fbbc2(0x214)+'\u0093\u0095\u0095\u0093\u008a'+'\u0094','ret':'void','params':[_0x2fbbc2(0x46a)],'wasmParams':[_0xba7dc7['WBWCa'],_0x2fbbc2(0xb6c)]},{'name':'\u008c\u008d\u0095\u0089\u008a'+'\u0089\u008e\u0086\u0095\u008c'+'\u0092','ret':_0xba7dc7[_0x2fbbc2(0x508)],'params':[],'wasmParams':[_0x2fbbc2(0xc77)],'wasmRet':_0x2fbbc2(0xc77)},{'name':'\u0086\u0092\u0092\u008a\u008e'+_0x2fbbc2(0xd27)+'\u0087','ret':_0x2fbbc2(0x721),'params':[],'wasmParams':[_0x2fbbc2(0xc77)]},{'name':_0xba7dc7[_0x2fbbc2(0x8d5)],'ret':_0x2fbbc2(0x721),'params':[],'wasmParams':[_0xba7dc7['WBWCa']]},{'name':_0x2fbbc2(0x7b2)+_0x2fbbc2(0x22e)+'\u0092','ret':_0xba7dc7[_0x2fbbc2(0xaaf)],'params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]]},{'name':_0xba7dc7[_0x2fbbc2(0x537)],'ret':_0x2fbbc2(0x3b6),'params':[],'wasmParams':['i32'],'wasmRet':_0xba7dc7['WBWCa']},{'name':_0x2fbbc2(0x271)+_0x2fbbc2(0x7f7)+'\u0087','ret':_0x2fbbc2(0x3b6),'params':[_0xba7dc7['IyQGP'],_0x2fbbc2(0x3b6)],'wasmParams':[_0xba7dc7['WBWCa'],_0x2fbbc2(0xc77),_0x2fbbc2(0xc77)],'wasmRet':_0xba7dc7[_0x2fbbc2(0x7a5)]},{'name':_0xba7dc7['pOlGv'],'ret':_0x2fbbc2(0x721),'params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]]},{'name':_0xba7dc7[_0x2fbbc2(0xa1e)],'ret':_0x2fbbc2(0x721),'params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]]},{'name':'\u0090\u008c\u008a\u008a\u0090'+'\u0091\u0092\u008f\u0090\u008e'+'\u0091','ret':_0xba7dc7['wvXLE'],'params':[],'wasmParams':[_0x2fbbc2(0xc77)]},{'name':_0xba7dc7['ZhTJy'],'ret':_0xba7dc7[_0x2fbbc2(0xaaf)],'params':[],'wasmParams':[_0xba7dc7['WBWCa']]},{'name':_0x2fbbc2(0x879)+_0x2fbbc2(0xa07)+'\u008f','ret':_0xba7dc7['wvXLE'],'params':[_0x2fbbc2(0x46a)],'wasmParams':[_0x2fbbc2(0xc77),_0x2fbbc2(0xb6c)]},{'name':'\u0086\u0087\u0087\u008e\u0094'+'\u008a\u0093\u0090\u0086\u008c'+'\u008b','ret':_0x2fbbc2(0x721),'params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]]},{'name':_0x2fbbc2(0xd69)+'\u008b\u0091\u0092\u008e\u0087'+'\u008d','ret':_0xba7dc7['IyQGP'],'params':['bool',_0xba7dc7[_0x2fbbc2(0x508)]],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)],_0xba7dc7['WBWCa'],_0xba7dc7['WBWCa']],'wasmRet':'i32'},{'name':_0x2fbbc2(0xd7e)+'\u0086\u008c\u008a\u0087\u0089'+'\u0095','ret':_0xba7dc7[_0x2fbbc2(0xaaf)],'params':[_0xba7dc7['zRxgh'],_0x2fbbc2(0x3b6)],'wasmParams':[_0x2fbbc2(0xc77),_0xba7dc7['XQNwa'],_0x2fbbc2(0xc77)]},{'name':_0xba7dc7[_0x2fbbc2(0x6a4)],'ret':_0x2fbbc2(0x721),'params':[],'wasmParams':['i32']},{'name':_0xba7dc7[_0x2fbbc2(0xbd6)],'ret':'void','params':[],'wasmParams':[_0xba7dc7['WBWCa']]},{'name':_0xba7dc7[_0x2fbbc2(0x924)],'ret':_0x2fbbc2(0x721),'params':[],'wasmParams':[_0x2fbbc2(0xc77)]}],'TDM_GameManager':[{'name':_0xba7dc7[_0x2fbbc2(0xd74)],'ret':'void','params':[],'wasmParams':[_0x2fbbc2(0xc77)]},{'name':_0xba7dc7['tSWBj'],'ret':'void','params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]]},{'name':'\u0094\u0090\u0089\u008c\u008e'+_0x2fbbc2(0x276)+'\u0089','ret':'bool','params':[_0xba7dc7['doyUU']],'wasmParams':[_0x2fbbc2(0xc77),_0x2fbbc2(0xc77)],'wasmRet':'i32'},{'name':_0xba7dc7[_0x2fbbc2(0x6c6)],'ret':_0xba7dc7[_0x2fbbc2(0xaaf)],'params':[],'wasmParams':[_0x2fbbc2(0xc77)]},{'name':_0x2fbbc2(0x726)+_0x2fbbc2(0xb21)+'\u008c','ret':_0xba7dc7[_0x2fbbc2(0xaaf)],'params':[_0x2fbbc2(0x3b6)],'wasmParams':[_0x2fbbc2(0xc77),_0x2fbbc2(0xc77)]},{'name':_0xba7dc7['tdRTm'],'ret':_0xba7dc7[_0x2fbbc2(0xaaf)],'params':[],'wasmParams':['i32']},{'name':_0x2fbbc2(0x9d1)+'\u0093\u0092\u0093\u0092\u0089'+'\u008c','ret':'void','params':[],'wasmParams':[_0x2fbbc2(0xc77)]},{'name':_0x2fbbc2(0x408)+_0x2fbbc2(0x2b4)+'\u0087','ret':_0xba7dc7['wvXLE'],'params':[],'wasmParams':[_0x2fbbc2(0xc77)]},{'name':_0x2fbbc2(0x380),'ret':_0xba7dc7[_0x2fbbc2(0xaaf)],'params':[],'wasmParams':[_0x2fbbc2(0xc77)]},{'name':'\u0086\u008c\u008e\u0094\u0090'+_0x2fbbc2(0x95b)+'\u0088','ret':_0x2fbbc2(0x721),'params':[],'wasmParams':['i32']},{'name':_0x2fbbc2(0x37c)+_0x2fbbc2(0x3b4)+'\u0093','ret':_0xba7dc7['wvXLE'],'params':[],'wasmParams':['i32']},{'name':_0xba7dc7[_0x2fbbc2(0x2ca)],'ret':_0x2fbbc2(0x721),'params':[],'wasmParams':[_0x2fbbc2(0xc77)]},{'name':_0x2fbbc2(0xc43)+'\u0091\u0091\u0089\u0091\u0092'+'\u008c','ret':_0x2fbbc2(0x721),'params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]]},{'name':'\u0093\u008b\u008c\u008e\u0089'+'\u008a\u008e\u0092\u0095\u008b'+'\u0088','ret':_0x2fbbc2(0x721),'params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]]},{'name':'OnDes'+_0x2fbbc2(0xaa6),'ret':_0xba7dc7['wvXLE'],'params':[],'wasmParams':['i32']},{'name':_0x2fbbc2(0x2d6)+'\u008c\u008f\u0086\u0095\u0094'+'\u008a','ret':_0xba7dc7[_0x2fbbc2(0xaaf)],'params':[],'wasmParams':['i32']},{'name':_0x2fbbc2(0xb04)+_0x2fbbc2(0x2bb)+'\u0091','ret':'void','params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]]},{'name':'\u0091\u0095\u0087\u0088\u0091'+'\u0088\u0094\u0094\u008e\u008e'+'\u008a','ret':_0x2fbbc2(0x721),'params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]]},{'name':_0x2fbbc2(0x51b)+'rcial'+_0x2fbbc2(0x64a)+_0x2fbbc2(0x39f)+_0x2fbbc2(0x248),'ret':'void','params':[],'wasmParams':['i32']},{'name':_0x2fbbc2(0xa69)+_0x2fbbc2(0xc7a)+'\u0093','ret':_0xba7dc7[_0x2fbbc2(0xaaf)],'params':[_0x2fbbc2(0x3b6)],'wasmParams':[_0xba7dc7['WBWCa'],_0xba7dc7[_0x2fbbc2(0x7a5)]]},{'name':_0xba7dc7['TcKDe'],'ret':'void','params':[_0x2fbbc2(0xd52),_0x2fbbc2(0xd52),_0xba7dc7[_0x2fbbc2(0xcd6)]],'wasmParams':['i32',_0xba7dc7['WBWCa'],_0xba7dc7[_0x2fbbc2(0x7a5)],_0xba7dc7['WBWCa']]},{'name':'\u008b\u008f\u0089\u0093\u0094'+_0x2fbbc2(0xc6f)+'\u0089','ret':_0xba7dc7[_0x2fbbc2(0xaaf)],'params':[],'wasmParams':[_0x2fbbc2(0xc77)]},{'name':_0xba7dc7['BjYRP'],'ret':'void','params':['int','int',_0xba7dc7[_0x2fbbc2(0xcd6)]],'wasmParams':['i32',_0x2fbbc2(0xc77),_0xba7dc7['WBWCa'],_0x2fbbc2(0xc77)]},{'name':'\u0094\u0086\u008a\u008f\u008e'+'\u0086\u008f\u0095\u0092\u0092'+'\u0092','ret':_0x2fbbc2(0x3b6),'params':[],'wasmParams':[_0xba7dc7['WBWCa']],'wasmRet':_0xba7dc7[_0x2fbbc2(0x7a5)]},{'name':_0xba7dc7['pOlGv'],'ret':'void','params':[],'wasmParams':[_0x2fbbc2(0xc77)]},{'name':'\u008f\u0088\u008f\u0089\u0089'+_0x2fbbc2(0x1ed)+'\u0087','ret':_0x2fbbc2(0x721),'params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]]},{'name':'\u0086\u0090\u0086\u008c\u0090'+_0x2fbbc2(0x514)+'\u008b','ret':_0xba7dc7[_0x2fbbc2(0xaaf)],'params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]]},{'name':_0x2fbbc2(0x901)+'\u008f\u008e\u008f\u0086\u0093'+'\u0092','ret':_0x2fbbc2(0x721),'params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]]},{'name':_0xba7dc7['qEGUf'],'ret':_0x2fbbc2(0x721),'params':[],'wasmParams':[_0x2fbbc2(0xc77)]},{'name':'\u008e\u0092\u0090\u0088\u0091'+'\u0093\u008f\u0095\u0087\u008e'+'\u008c','ret':_0xba7dc7['wvXLE'],'params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]]},{'name':_0xba7dc7[_0x2fbbc2(0x673)],'ret':_0x2fbbc2(0x721),'params':[_0xba7dc7[_0x2fbbc2(0x508)]],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)],_0xba7dc7['WBWCa']]},{'name':_0x2fbbc2(0x453)+_0x2fbbc2(0x5a4)+'\u0094','ret':_0xba7dc7[_0x2fbbc2(0xaaf)],'params':[],'wasmParams':[_0xba7dc7['WBWCa']]},{'name':_0xba7dc7[_0x2fbbc2(0xbce)],'ret':_0xba7dc7[_0x2fbbc2(0xaaf)],'params':[],'wasmParams':['i32']},{'name':_0xba7dc7[_0x2fbbc2(0xb77)],'ret':_0x2fbbc2(0x721),'params':[],'wasmParams':['i32']},{'name':_0xba7dc7['osliJ'],'ret':_0xba7dc7[_0x2fbbc2(0xaaf)],'params':[_0x2fbbc2(0x3b6)],'wasmParams':[_0xba7dc7['WBWCa'],_0xba7dc7['WBWCa']]},{'name':_0x2fbbc2(0x7d8)+_0x2fbbc2(0x3aa)+'\u0095','ret':_0x2fbbc2(0x3b6),'params':[],'wasmParams':['i32'],'wasmRet':_0xba7dc7[_0x2fbbc2(0x7a5)]},{'name':_0xba7dc7[_0x2fbbc2(0xd5b)],'ret':_0xba7dc7[_0x2fbbc2(0xaaf)],'params':[],'wasmParams':['i32']},{'name':_0x2fbbc2(0x3ed)+_0x2fbbc2(0x341)+'\u008a','ret':_0xba7dc7['IyQGP'],'params':['int'],'wasmParams':['i32',_0xba7dc7['WBWCa']],'wasmRet':_0x2fbbc2(0xc77)},{'name':_0x2fbbc2(0x3c1)+_0x2fbbc2(0x5a5)+'\u008e','ret':_0x2fbbc2(0x721),'params':[_0x2fbbc2(0x3b6)],'wasmParams':[_0x2fbbc2(0xc77),'i32']},{'name':_0x2fbbc2(0xba8)+_0x2fbbc2(0xc5e)+'\u0094','ret':'void','params':[],'wasmParams':[_0x2fbbc2(0xc77)]},{'name':_0x2fbbc2(0xbf2)+_0x2fbbc2(0xa23)+'\u008e','ret':_0xba7dc7[_0x2fbbc2(0xaaf)],'params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]]},{'name':_0x2fbbc2(0xa84)+_0x2fbbc2(0x9bc)+'\u008c','ret':_0xba7dc7['wvXLE'],'params':['int','int',_0xba7dc7[_0x2fbbc2(0xcd6)]],'wasmParams':[_0x2fbbc2(0xc77),_0x2fbbc2(0xc77),_0xba7dc7['WBWCa'],_0x2fbbc2(0xc77)]},{'name':_0x2fbbc2(0x2bf)+_0x2fbbc2(0x393)+'\u008e','ret':_0xba7dc7['wvXLE'],'params':[],'wasmParams':['i32']},{'name':_0x2fbbc2(0xd46),'ret':_0xba7dc7['wvXLE'],'params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]]},{'name':_0xba7dc7[_0x2fbbc2(0x981)],'ret':_0xba7dc7['wvXLE'],'params':[],'wasmParams':[_0xba7dc7['WBWCa']]},{'name':_0x2fbbc2(0x65b)+_0x2fbbc2(0x88b)+'\u008e','ret':_0x2fbbc2(0x721),'params':[],'wasmParams':[_0x2fbbc2(0xc77)]},{'name':_0xba7dc7[_0x2fbbc2(0xd00)],'ret':_0xba7dc7['wvXLE'],'params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]]},{'name':'\u0087\u0089\u008f\u008a\u0095'+'\u0089\u0094\u0091\u0087\u0087'+'\u0086','ret':_0x2fbbc2(0x721),'params':[_0xba7dc7[_0x2fbbc2(0x508)]],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)],'i32']},{'name':_0xba7dc7[_0x2fbbc2(0x428)],'ret':_0x2fbbc2(0x721),'params':[],'wasmParams':[_0x2fbbc2(0xc77)]},{'name':_0x2fbbc2(0xc13)+_0x2fbbc2(0x7fa)+'\u0092','ret':_0x2fbbc2(0x721),'params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]]},{'name':_0x2fbbc2(0xd6f)+'\u008b\u0091\u008d\u008a\u008b'+'\u008e','ret':'void','params':[],'wasmParams':[_0x2fbbc2(0xc77)]},{'name':_0x2fbbc2(0x61c)+'\u008a\u008c\u0095\u0093\u008d'+'\u0092','ret':_0xba7dc7[_0x2fbbc2(0xaaf)],'params':[_0xba7dc7[_0x2fbbc2(0xcd6)],_0x2fbbc2(0xd52)],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)],_0xba7dc7['WBWCa'],_0xba7dc7['WBWCa']]},{'name':_0xba7dc7['SHmGU'],'ret':_0x2fbbc2(0x721),'params':[],'wasmParams':[_0x2fbbc2(0xc77)]},{'name':'\u0093\u0094\u0087\u008b\u0086'+_0x2fbbc2(0x7a2)+'\u008e','ret':_0xba7dc7['wvXLE'],'params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]]},{'name':_0x2fbbc2(0x312)+_0x2fbbc2(0xa80)+'\u0092','ret':_0x2fbbc2(0x721),'params':[_0xba7dc7['IyQGP']],'wasmParams':['i32',_0x2fbbc2(0xc77)]},{'name':_0xba7dc7['PBxKY'],'ret':'void','params':[],'wasmParams':[_0x2fbbc2(0xc77)]},{'name':_0xba7dc7['JzdOd'],'ret':'void','params':[],'wasmParams':[_0xba7dc7[_0x2fbbc2(0x7a5)]]},{'name':_0xba7dc7[_0x2fbbc2(0x83b)],'ret':_0x2fbbc2(0x721),'params':[],'wasmParams':[_0x2fbbc2(0xc77)]}]},_0x49480d=[],_0x250741=[],_0x4fc906={},_0x3a61f3=0x16e3+0x96b+-0x204e,_0x58849c=![],_0xf2a6fe=[],_0x22f4bf=[{'type':_0x2fbbc2(0x50f)+_0x2fbbc2(0xca4)+'ler','keep':!![]},{'type':'Healt'+_0x2fbbc2(0x652)+'pt','keep':!![]},{'type':'Weapo'+_0x2fbbc2(0x8bb)+'ger','keep':![]},{'type':'TDM_G'+'ameMa'+'nager','keep':!![]},{'type':_0xba7dc7[_0x2fbbc2(0x8ed)],'keep':!![]},{'type':_0xba7dc7['nEsLR'],'keep':!![],'many':!![]},{'type':_0x2fbbc2(0x461)+_0x2fbbc2(0xd71)+_0x2fbbc2(0xba5)+'imati'+'ons','keep':!![],'many':!![]},{'type':'NPC_C'+_0x2fbbc2(0xb1b)+'ler','keep':!![],'many':!![]},{'type':_0x2fbbc2(0x527)+'Bot','keep':!![],'many':!![]}],_0x15ff0c=[_0xba7dc7['mLpHM'],_0xba7dc7['FzlIv'],'ch.sy'+_0x2fbbc2(0x9ad)+_0x2fbbc2(0xa9c)+_0x2fbbc2(0xa74)+'ll',_0xba7dc7['LfWGE'],_0x2fbbc2(0xd80)+_0x2fbbc2(0x9a1)+_0x2fbbc2(0x3dd)+_0x2fbbc2(0x615)+_0x2fbbc2(0xbf7)+_0x2fbbc2(0x4dd),_0xba7dc7[_0x2fbbc2(0xb84)]];(function _0xbdc304(){var _0x2ee59a=_0x2fbbc2,_0x51c421={'GsZTB':function(_0x46394f,_0x1a9597){return _0x46394f+_0x1a9597;},'daZxv':function(_0x1cbaf5,_0x4d5d63){return _0x1cbaf5+_0x4d5d63;},'dSHuK':function(_0x45665d,_0x50ac3a){return _0x45665d+_0x50ac3a;},'wDWeI':_0x2ee59a(0x89d)+'plies'+'\x20move'+_0x2ee59a(0xd3c)+'speed'+_0x2ee59a(0x594)+'ds\x20on'+_0x2ee59a(0xa68)+_0x2ee59a(0xac5)+',\x20ste'+'p\x20and'+_0x2ee59a(0xd34)+'\x20are\x20'+_0x2ee59a(0x708)+'ed.'};if(_0x2ee59a(0xae1)===_0xba7dc7[_0x2ee59a(0xcdd)]){_0x12cab6[_0x2ee59a(0x3ad)]({'o':-(-0x6a0+-0x1*0x4+0xbd*0x9),'v':0x0,'why':_0xba7dc7['pzVzh']+_0x33af10+_0xba7dc7['jyiKE']});return;}else try{var _0x5d9b94=window['Unity'+'WebMo'+_0x2ee59a(0xb1d)]&&window['Unity'+'WebMo'+'dkit'][_0x2ee59a(0x295)+'me'];if(!_0x5d9b94||_0xba7dc7['bCBTL'](typeof _0x5d9b94[_0x2ee59a(0x733)+_0x2ee59a(0xd2d)+'in'],'funct'+'ion')){_0x1fd036['error']='Runti'+_0x2ee59a(0x48c)+'eateP'+'lugin'+'\x20unav'+'ailab'+'le';return;}_0x1fd036[_0x2ee59a(0x2ad)+'pted']=!![],_0x3ea3df=_0x5d9b94[_0x2ee59a(0x733)+'ePlug'+'in']({'name':'sakur'+'a-ski'+_0x2ee59a(0x4f6)+'z','version':_0x1a991b,'referencedAssemblies':_0x15ff0c[_0x2ee59a(0xcf5)]()}),_0x1fd036['ok']=!![];try{if(_0xba7dc7[_0x2ee59a(0x43a)]===_0x2ee59a(0xa3e)){var _0xd6b98f=window[_0x2ee59a(0xb51)+_0x2ee59a(0x80a)+_0x2ee59a(0xb1d)][_0x2ee59a(0x295)+'me'];_0xd6b98f['__sak'+_0x2ee59a(0xc49)+'g']=_0x1a991b+':'+Math[_0x2ee59a(0x27c)+'m']()[_0x2ee59a(0x6ac)+_0x2ee59a(0x21d)](-0x25a7+0x1f4a+0x9*0xb9)[_0x2ee59a(0xcf5)](-0x84d+-0x79d*0x5+-0x350*-0xe,0x11bb+-0x20*0xfb+0xdaf),_0x24f615=_0xd6b98f['__sak'+_0x2ee59a(0xc49)+'g'];}else _0x3023d9(_0x4dd765,_0xa04a82[_0x2ee59a(0x33e)+'r']),_0x5ef27a['textC'+_0x2ee59a(0x98d)+'t']=_0x56c248?_0x51c421[_0x2ee59a(0x325)](_0x51c421['GsZTB'](_0x51c421[_0x2ee59a(0x325)](_0x51c421['daZxv'](_0x51c421[_0x2ee59a(0x25a)]('x',_0x35e8a5[_0x2ee59a(0x33e)+'r'][_0x2ee59a(0x1f9)+'ed'](-0x1*0x1807+-0x74c+-0x14*-0x191)),_0x2ee59a(0x964)),_0x45c062['lengt'+'h'])+(_0x2ee59a(0x594)+'ds\x20·\x20'),_0x4e631d),'\x20writ'+'es'):_0x51c421[_0x2ee59a(0x9d0)];}catch(_0x840ec8){}_0x469067(),_0xba7dc7['MRdIx'](_0x227639),_0x1fd036[_0x2ee59a(0x497)+_0x2ee59a(0x42c)+_0x2ee59a(0xd53)]=_0x49480d[_0x2ee59a(0x25f)+'h'],_0x122836(),_0x1fd036['memor'+_0x2ee59a(0x8dd)]=!![];}catch(_0x565223){_0x1fd036[_0x2ee59a(0x705)]=_0xba7dc7[_0x2ee59a(0xc89)](String,_0x565223&&_0x565223['messa'+'ge']||_0x565223);}}());var _0x2b789d=new Float32Array(0x1505+-0xc73*0x1+-0x891),_0x331c18=new Int32Array(_0x2b789d['buffe'+'r']);function _0x45380a(_0x41155d){return _0x2b789d[-0x2*-0x1053+0xcf6+0x7*-0x684]=_0x41155d,_0x331c18[0x6*-0x4a7+-0x1572+-0x1074*-0x3];}function _0x46b2e3(_0x401a81){return _0x331c18[0x2419*0x1+-0x1*0x2668+0x24f]=_0x401a81|0x1e7*0x1+0x2*0x3fb+-0x9dd,_0x2b789d[0x1169+0x3*0xb0c+-0x328d];}var _0x24366e={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x47f984(){var _0x23944b=_0x2fbbc2;try{if(_0x3ea3df&&_0x3ea3df['_runt'+'ime']){if(_0xba7dc7['mYTsB'](_0x23944b(0xb38),'CmpVQ'))return _0x395737['sourc'+'e']=_0xba7dc7['hObKZ'](_0xba7dc7[_0x23944b(0x6ce)]+_0x22e072[_0x38f3c2],'.Modu'+'le'),_0x292cff;else{var _0x460ce2=_0x3ea3df[_0x23944b(0x305)+'ime'];if(typeof _0x460ce2[_0x23944b(0x52d)+_0x23944b(0xd70)+'e']===_0x23944b(0x849)+'ion'){var _0xd1c60d=_0x460ce2['resol'+'veGam'+'e']();if(_0xd1c60d){if(_0xba7dc7[_0x23944b(0x3f4)]!==_0x23944b(0x464))_0x324532['remov'+'e']();else return _0x24366e['sourc'+'e']=_0x23944b(0x259)+'n._ru'+_0x23944b(0x622)+_0x23944b(0xa06)+_0x23944b(0x886)+_0x23944b(0x493),_0xd1c60d;}}if(_0x460ce2[_0x23944b(0xd5a)]){if('iTPcN'===_0x23944b(0x970))return _0x24366e[_0x23944b(0xcf9)+'e']=_0xba7dc7['Ezmia'],_0x460ce2['_game'];else try{return _0x585814&&_0x2afda1['buffe'+'r']?_0x525b67[_0x23944b(0x78d)+'r'][_0x23944b(0xb8e)+_0x23944b(0xa0c)]:-0x13fa+-0x52f+0x1929;}catch(_0x3e3395){return 0x131b*-0x1+0x1*-0xad6+0x16d*0x15;}}}}}catch(_0x4848b2){}try{var _0x2035c5=window['Unity'+_0x23944b(0x80a)+'dkit']&&window[_0x23944b(0xb51)+'WebMo'+'dkit'][_0x23944b(0x295)+'me'];if(_0x2035c5&&typeof _0x2035c5['resol'+_0x23944b(0xd70)+'e']===_0xba7dc7[_0x23944b(0x459)]){var _0x7e1404=_0x2035c5[_0x23944b(0x52d)+'veGam'+'e']();if(_0x7e1404){if(_0xba7dc7[_0x23944b(0x540)](_0xba7dc7[_0x23944b(0x9ac)],_0x23944b(0x3c0))){_0x55fcb9[_0x23944b(0x417)+_0x23944b(0x592)+_0x23944b(0xb67)](),_0x595bf6(!_0x2e2839['on'],_0x478d91[_0x23944b(0x33e)+'r']);return;}else return _0x24366e['sourc'+'e']=_0x23944b(0x295)+_0x23944b(0xc8d)+_0x23944b(0x729)+_0x23944b(0xb55)+')',_0x7e1404;}}if(_0x2035c5&&_0x2035c5[_0x23944b(0xd5a)]){if('oGuAv'===_0x23944b(0x1f4))return _0x24366e[_0x23944b(0xcf9)+'e']=_0xba7dc7[_0x23944b(0x873)],_0x2035c5;else{var _0x33b444=-0x7*0x4af+-0x1b7d+-0xa*-0x607;for(var _0x4fbbdc=0x32*-0x56+0xc25*-0x1+-0x1f*-0xef;_0x4fbbdc<_0x55768f[_0x23944b(0x25f)+'h'];_0x4fbbdc++){if(_0x1201ad[_0x4fbbdc]['hook']&&_0xba7dc7['hxoJB'](_0x2d7299[_0x4fbbdc][_0x23944b(0xac7)]['table'+_0x23944b(0x440)],_0x5152fd))_0x33b444++;}return _0x33b444;}}}catch(_0x5480b0){}try{if(_0x23944b(0x3e0)!=='fJDZL')return new _0xbe9229(_0x28f462[_0x23944b(0x78d)+'r'],_0x4232c9[_0x23944b(0x4bc)+_0x23944b(0xa33)],_0x1b5f2c['byteL'+'ength']);else{var _0x27fe30=window['unity'+'Insta'+_0x23944b(0x56b)]||window[_0x23944b(0x40d)+'Game']||window[_0x23944b(0x99b)];if(_0x27fe30)return _0x24366e[_0x23944b(0xcf9)+'e']=_0xba7dc7['AZqqF'],_0x27fe30;}}catch(_0x8ceb){}try{if(_0xba7dc7[_0x23944b(0x647)](typeof game,'undef'+_0x23944b(0x716))&&game)return _0x24366e['sourc'+'e']='bare\x20'+'game\x20'+'bindi'+'ng',game;}catch(_0x551be0){}try{var _0x54e8ce=Object[_0x23944b(0x509)](window);for(var _0x5dd3b4=0x1184*0x2+0x20cc+-0x43d4;_0x5dd3b4<_0x54e8ce[_0x23944b(0x25f)+'h']&&_0xba7dc7[_0x23944b(0x441)](_0x5dd3b4,-0xc*0x2d2+-0xbd*0x19+0x36a5);_0x5dd3b4++){var _0x5e05f5=window[_0x54e8ce[_0x5dd3b4]];if(_0x5e05f5&&typeof _0x5e05f5===_0xba7dc7[_0x23944b(0x92d)]&&_0x5e05f5[_0x23944b(0x7e4)+'e']&&_0x5e05f5[_0x23944b(0x7e4)+'e'][_0x23944b(0xd95)+'8']&&_0x5e05f5['Modul'+'e'][_0x23944b(0xd95)+'8'][_0x23944b(0x78d)+'r'])return _0x24366e[_0x23944b(0xcf9)+'e']=_0xba7dc7[_0x23944b(0x79f)](_0xba7dc7[_0x23944b(0xce9)](_0xba7dc7[_0x23944b(0x6ce)],_0x54e8ce[_0x5dd3b4]),_0xba7dc7[_0x23944b(0x378)]),_0x5e05f5;}}catch(_0x245442){}return _0x24366e[_0x23944b(0xcf9)+'e']=null,null;}function _0x3da03a(){var _0x3a828b=_0x2fbbc2,_0x510817={'omhLO':function(_0x48275b,_0x5a86af){return _0x48275b+_0x5a86af;}};try{if(_0xba7dc7['egStC']!==_0x3a828b(0x78f)){if(_0x2411c3&&_0x2411c3[_0x3a828b(0x78d)+'r']&&_0x2411c3[_0x3a828b(0x78d)+'r'][_0x3a828b(0xb8e)+_0x3a828b(0xa0c)])return _0x24366e['sourc'+'e']=_0x24366e[_0x3a828b(0xcf9)+'e']||'insta'+_0x3a828b(0x685)+_0x3a828b(0x2e2)+'xport'+_0x3a828b(0x61e)+_0x3a828b(0x9de),new Uint8Array(_0x2411c3['buffe'+'r']);}else{var _0x3f166c=_0x2cfd56[_0x3a828b(0xb51)+_0x3a828b(0x80a)+_0x3a828b(0xb1d)][_0x3a828b(0x295)+'me'];_0x3f166c[_0x3a828b(0x68d)+_0x3a828b(0xc49)+'g']=_0x510817[_0x3a828b(0x67e)](_0x449ce1+':',_0x2d6843[_0x3a828b(0x27c)+'m']()[_0x3a828b(0x6ac)+'ing'](0x1ede+0x1e94+-0x1ea7*0x2)[_0x3a828b(0xcf5)](-0x2311*0x1+0x6c0+0x1c53,0x1d6c+-0x930+-0x1432)),_0x3a0258=_0x3f166c[_0x3a828b(0x68d)+_0x3a828b(0xc49)+'g'];}}catch(_0x3a3475){}try{if('LKKyv'!==_0x3a828b(0xc16))_0xd524e0[_0x3a828b(0xa14)+'em'](_0x20955c,_0x17e827(_0x12b45c['fov']));else{var _0x43bb99=_0xba7dc7[_0x3a828b(0xa8c)](_0x47f984);if(_0x43bb99&&_0x43bb99['Modul'+'e']&&_0x43bb99[_0x3a828b(0x7e4)+'e']['HEAPU'+'8']&&_0x43bb99[_0x3a828b(0x7e4)+'e'][_0x3a828b(0xd95)+'8']['buffe'+'r'])return _0x43bb99[_0x3a828b(0x7e4)+'e']['HEAPU'+'8'];}}catch(_0x5825dc){}return null;}function _0x51ce11(){var _0x4e8c3b=_0x2fbbc2,_0x2c4783=_0xba7dc7['oGday'](_0x3da03a);if(!_0x2c4783)return null;try{return new DataView(_0x2c4783[_0x4e8c3b(0x78d)+'r'],_0x2c4783['byteO'+'ffset'],_0x2c4783[_0x4e8c3b(0xb8e)+_0x4e8c3b(0xa0c)]);}catch(_0x2314cc){return null;}}function _0x35121f(_0x4b62e9,_0x125a9a){var _0x5967a3=_0x2fbbc2,_0x30af01={'SMKbC':_0x5967a3(0x617)+'a-esp','FbRcE':function(_0x352a65,_0x100486){return _0x352a65+_0x100486;},'GnmGV':_0x5967a3(0x1e2)+'round'+_0x5967a3(0xc5f)+_0x5967a3(0x613)+'2,29,'+_0x5967a3(0x66c)+_0x5967a3(0x727)+'r:1px'+_0x5967a3(0x9dd)+_0x5967a3(0x690)+_0x5967a3(0x1db)+_0x5967a3(0xa47)+'177,.'+'4);bo'+_0x5967a3(0xd86)+'radiu'+'s:10p'+'x;','bwTwU':'paddi'+_0x5967a3(0x297)+'x;fon'+_0x5967a3(0xc0e)+_0x5967a3(0xd78)+'\x20ui-m'+_0x5967a3(0x24b)+_0x5967a3(0x62e)+_0x5967a3(0x3a2)+_0x5967a3(0x63e)+_0x5967a3(0x6fa)+_0x5967a3(0x939)+'lor:#'+'bda9c'+'9;','YEBoC':'<div\x20'+'id=\x22s'+_0x5967a3(0x1e6)+_0x5967a3(0xb22)+'lg\x22\x20s'+_0x5967a3(0xa4f)+'\x22text'+_0x5967a3(0xa04)+'n:cen'+'ter\x22>'+'</div'+'>','GIPwX':'#saku'+'ra-es'+_0x5967a3(0x58e),'kuBso':_0x5967a3(0xc80)+_0x5967a3(0xb05)+_0x5967a3(0x4ae)};if(_0x5967a3(0x961)!==_0xba7dc7[_0x5967a3(0x697)]){if(!_0x247869['body']||!_0x4bfce1[_0x5967a3(0xaf7)][_0x5967a3(0xd16)+'dChil'+'d'])return null;var _0x35acf2=_0x5606d['creat'+'eElem'+_0x5967a3(0x25c)]('div');_0x35acf2['id']=_0x30af01['SMKbC'],_0x35acf2[_0x5967a3(0x874)][_0x5967a3(0x222)+'xt']=_0x30af01['FbRcE'](_0x5967a3(0x50e)+_0x5967a3(0x213)+_0x5967a3(0xa00)+'right'+_0x5967a3(0x65e)+_0x5967a3(0x4de)+'46px;'+_0x5967a3(0x489)+_0x5967a3(0x450)+_0x5967a3(0x4c3)+_0x5967a3(0x44c)+'ointe'+'r-eve'+'nts:n'+'one;'+_0x30af01[_0x5967a3(0x5cb)]+_0x30af01['bwTwU'],_0x5967a3(0x238)+_0x5967a3(0xb56)+'t:non'+_0x5967a3(0xc96)+_0x5967a3(0xce3)+'user-'+_0x5967a3(0xb56)+'t:non'+'e;'),_0x35acf2[_0x5967a3(0x4f4)+'HTML']=_0x5967a3(0x4be)+_0x5967a3(0x2dd)+'=\x22sak'+_0x5967a3(0x9e1)+'sp-cv'+_0x5967a3(0x4cf)+_0x5967a3(0xa17)+'60\x22\x20h'+'eight'+'=\x22160'+_0x5967a3(0x838)+'le=\x22d'+'ispla'+'y:blo'+_0x5967a3(0x2e6)+_0x5967a3(0x4ff)+_0x5967a3(0x9c5)+_0x30af01[_0x5967a3(0x239)];var _0x319ef4={'cv':{'getContext':function(){return null;}},'el':_0x35acf2};_0x5c7b0c['body'][_0x5967a3(0xd16)+'dChil'+'d'](_0x35acf2),_0x23466a={'el':_0x35acf2,'cv':_0x35acf2[_0x5967a3(0xae5)+_0x5967a3(0x5f8)+'tor'](_0x30af01['GIPwX']),'lg':_0x35acf2[_0x5967a3(0xae5)+'Selec'+'tor'](_0x30af01['kuBso'])};if(!_0xf31cc3['cv']||!_0x251dca['cv'][_0x5967a3(0xb98)+_0x5967a3(0x99d)])_0x4590e0=_0x319ef4;return _0x5c1b44;}else{var _0x45c6f1=_0xba7dc7[_0x5967a3(0x226)](_0x51ce11);if(!_0x45c6f1)return _0x24366e['faile'+'d']++,_0x24366e[_0x5967a3(0x8ea)+_0x5967a3(0x2da)]=_0x24366e[_0x5967a3(0x8ea)+_0x5967a3(0x2da)]||'no\x20HE'+'APU8\x20'+_0x5967a3(0xb85)+'ty\x20in'+_0x5967a3(0x347)+_0x5967a3(0xc2c)+_0x5967a3(0xc60)+'hable'+_0x5967a3(0xc1f)+'Runti'+'me.re'+'solve'+'Game('+_0x5967a3(0xab7)+_0x5967a3(0x7cb)+_0x5967a3(0x252)+_0x5967a3(0x395)+'al',undefined;if(_0x4b62e9<0x51+0x6*-0x53+0x1a1||_0x4b62e9+(0x26d8+0x1f*0xc3+0x8b*-0x73)>_0x45c6f1[_0x5967a3(0xb8e)+'ength']){if(_0x5967a3(0x6cb)===_0x5967a3(0x37b)){var _0x112d9d=_0x2693d9[_0x5967a3(0x733)+_0x5967a3(0x9a4)+_0x5967a3(0x25c)](_0x5967a3(0x874));_0x112d9d['id']=_0x5967a3(0x617)+_0x5967a3(0x495)+_0x5967a3(0xb6f),_0x112d9d['textC'+'onten'+'t']=_0x2d89c5,(_0x588382[_0x5967a3(0x4e1)]||_0x293e92[_0x5967a3(0x56f)+_0x5967a3(0x689)+_0x5967a3(0x430)])[_0x5967a3(0xd16)+_0x5967a3(0x9ca)+'d'](_0x112d9d);}else return _0x24366e['faile'+'d']++,_0x24366e['lastE'+_0x5967a3(0x2da)]=_0x24366e[_0x5967a3(0x8ea)+_0x5967a3(0x2da)]||_0xba7dc7[_0x5967a3(0xbe4)](_0xba7dc7['KdAVH']+_0x4b62e9['toStr'+'ing'](0x2130+0x6e0+-0x2800),_0x5967a3(0x364)+'\x20heap'+_0x5967a3(0x547)+'0x')+_0x45c6f1['byteL'+_0x5967a3(0xa0c)]['toStr'+_0x5967a3(0x21d)](-0xd*0x111+-0x24d+0x103a),undefined;}try{if(_0xba7dc7[_0x5967a3(0x626)](_0xba7dc7['lwpSH'],'WqxeO'))_0x1cef30[_0x5967a3(0xb2c)+'ngs']['push'](_0xba7dc7['jBUGR']('ANOTH'+_0x5967a3(0xa64)+_0x5967a3(0x567)+'PY\x20TO'+_0x5967a3(0x263)+'ER\x20wi'+_0x5967a3(0x2c7)+_0x5967a3(0xb51)+_0x5967a3(0x80a)+'dkit.'+'\x20The\x20'+'Runti'+'me\x20we'+'\x20arme'+'d\x20was'+'\x20'+_0xba7dc7['gVYAU'],_0xba7dc7[_0x5967a3(0x492)])+_0xba7dc7[_0x5967a3(0xac3)]);else{_0x24366e['ok']++;switch(_0x125a9a){case'u8':return _0x45c6f1[_0x5967a3(0x5a2)+_0x5967a3(0x8ee)](_0x4b62e9);case'i8':return _0x45c6f1[_0x5967a3(0xa7e)+'t8'](_0x4b62e9);case'i16':return _0x45c6f1[_0x5967a3(0xa7e)+'t16'](_0x4b62e9,!![]);case _0xba7dc7[_0x5967a3(0x823)]:return _0x45c6f1[_0x5967a3(0x5a2)+_0x5967a3(0x510)](_0x4b62e9,!![]);case'i32':return _0x45c6f1['getIn'+'t32'](_0x4b62e9,!![]);case'u32':return _0x45c6f1['getUi'+'nt32'](_0x4b62e9,!![]);case _0xba7dc7['XQNwa']:return _0x45c6f1[_0x5967a3(0x466)+_0x5967a3(0x2d0)](_0x4b62e9,!![]);case _0x5967a3(0x81c):return _0x45c6f1[_0x5967a3(0x466)+_0x5967a3(0x6c7)](_0x4b62e9,!![]);case'v2':case'v3':case'v4':return _0x45c6f1[_0x5967a3(0x466)+_0x5967a3(0x2d0)](_0x4b62e9,!![]);default:return _0x45c6f1[_0x5967a3(0xa7e)+_0x5967a3(0x339)](_0x4b62e9,!![]);}}}catch(_0x4e8a76){return _0x24366e['faile'+'d']++,_0x24366e[_0x5967a3(0x8ea)+'rror']=_0x24366e[_0x5967a3(0x8ea)+_0x5967a3(0x2da)]||String(_0x4e8a76&&_0x4e8a76[_0x5967a3(0x456)+'ge']||_0x4e8a76)['slice'](-0x2*-0x285+-0x198d+0x59*0x3b,0x11c5+-0x1207+0xba),undefined;}}}function _0x57e5e3(_0x415738,_0x329137,_0x1d3139){var _0x436531=_0x2fbbc2,_0x11293a=_0x51ce11();if(!_0x11293a||_0x415738<-0x3f0+-0x1*0x24d9+0x28c9||_0xba7dc7[_0x436531(0x3cb)](_0x415738+(0x1c*0xbf+0x197d+-0x2e5d),_0x11293a[_0x436531(0xb8e)+_0x436531(0xa0c)]))return![];try{switch(_0x329137){case'u8':case'i8':_0x11293a['setUi'+_0x436531(0x8ee)](_0x415738,_0xba7dc7[_0x436531(0x5a6)](_0x1d3139,0x1d*0x3d+0x3b*0x13+-0x11*0x9b));break;case'i16':case _0x436531(0x3f0):_0x11293a[_0x436531(0x979)+_0x436531(0x7df)](_0x415738,_0x1d3139|-0x41f+0xb36+-0x717,!![]);break;case _0xba7dc7['WBWCa']:case _0x436531(0xc79):_0x11293a[_0x436531(0x979)+_0x436531(0x339)](_0x415738,_0x1d3139|-0x100b*-0x1+0x4*0x801+-0x1005*0x3,!![]);break;case'f32':_0x11293a['setFl'+_0x436531(0x2d0)](_0x415738,_0x1d3139,!![]);break;default:_0x11293a[_0x436531(0x979)+_0x436531(0x339)](_0x415738,_0xba7dc7[_0x436531(0xc09)](_0x1d3139,-0x4c8*0x1+-0x53d+-0x87*-0x13),!![]);}return!![];}catch(_0x14899f){return![];}}var _0x53254b={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':_0x2fbbc2(0xc77)},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':_0xba7dc7[_0x2fbbc2(0x7a5)]},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0x6f7b62(_0x6154c8){var _0x15e40b=_0x2fbbc2,_0x5a4cb9={'mHtim':'objec'+'t','TWnJv':function(_0x2cdde6,_0x169f8e){var _0x5672bb=_0x4e00;return _0xba7dc7[_0x5672bb(0x935)](_0x2cdde6,_0x169f8e);}},_0x39e659='';for(var _0x18e004=-0x46f+-0x213+0x682;_0x18e004<_0x6154c8['lengt'+'h'];_0x18e004++){if(_0xba7dc7['aXATj']==='SAUXj'){var _0x3a7f9f=_0x6154c8[_0x18e004]['toStr'+_0x15e40b(0x21d)](0x1e5*0x1+-0x33*-0x26+-0x967);_0x39e659+=_0xba7dc7['OguoJ'](_0x3a7f9f[_0x15e40b(0x25f)+'h']<0x4ae*0x1+0x2474+-0x2920?'0':'',_0x3a7f9f);}else{var _0x3ca6ae=_0xe42821[_0x391141[_0x378ac2]];if(_0x3ca6ae&&typeof _0x3ca6ae===_0x5a4cb9['mHtim']&&_0x3ca6ae[_0x15e40b(0x7e4)+'e']&&_0x3ca6ae['Modul'+'e'][_0x15e40b(0xd95)+'8']&&_0x3ca6ae['Modul'+'e']['HEAPU'+'8'][_0x15e40b(0x78d)+'r'])return _0x34122f[_0x15e40b(0xcf9)+'e']=_0x5a4cb9[_0x15e40b(0x897)](_0x15e40b(0xc1a)+'w.',_0x4cb8ee[_0x4cabec])+('.Modu'+'le'),_0x3ca6ae;}}return _0x39e659;}function _0x269289(_0x50f566,_0x431bb4,_0x259f0e){var _0x291c5d=_0x2fbbc2;if(_0xba7dc7[_0x291c5d(0x540)](_0xba7dc7[_0x291c5d(0x340)],_0xba7dc7['EWgHy'])){var _0x40e22f=_0xba7dc7[_0x291c5d(0x6b9)](_0x51ce11);if(!_0x40e22f)return _0x24366e['faile'+'d']++,_0x24366e['lastE'+_0x291c5d(0x2da)]=_0x24366e[_0x291c5d(0x8ea)+'rror']||'no\x20HE'+'APU8\x20'+_0x291c5d(0xb85)+_0x291c5d(0x723)+'stanc'+_0x291c5d(0xc2c)+'\x20reac'+'hable'+_0x291c5d(0xc1f)+_0x291c5d(0x295)+'me.re'+_0x291c5d(0x729)+'Game('+')\x20or\x20'+_0x291c5d(0x7cb)+_0x291c5d(0x252)+'\x20glob'+'al',null;if(_0x431bb4<0x2*-0x919+0xc1*-0x1+0x2b5*0x7||_0xba7dc7[_0x291c5d(0x85e)](_0x431bb4,_0x259f0e)>_0x40e22f['byteL'+_0x291c5d(0xa0c)]){if(_0xba7dc7[_0x291c5d(0x4c0)](_0xba7dc7[_0x291c5d(0x264)],_0x291c5d(0x4a2))){if(_0x252cfd&&_0x34b7b1[_0x291c5d(0x78d)+'r']&&_0x12fc65[_0x291c5d(0x78d)+'r']['byteL'+_0x291c5d(0xa0c)])return _0x451c76['sourc'+'e']=_0x297d75['sourc'+'e']||_0x291c5d(0x799)+_0x291c5d(0x685)+'e().e'+'xport'+'s.mem'+_0x291c5d(0x9de),new _0x2988ea(_0x697b77['buffe'+'r']);}else return _0x24366e[_0x291c5d(0xd4a)+'d']++,_0x24366e['lastE'+_0x291c5d(0x2da)]=_0x24366e[_0x291c5d(0x8ea)+'rror']||_0xba7dc7['ececc'](_0xba7dc7['znJlm']('addre'+_0x291c5d(0xa05)+_0xba7dc7[_0x291c5d(0xc9b)](_0x50f566,_0x431bb4)[_0x291c5d(0x6ac)+'ing'](0xff2+0x1f3e*0x1+-0x2f20),_0xba7dc7[_0x291c5d(0xd6b)]),_0x40e22f[_0x291c5d(0xb8e)+_0x291c5d(0xa0c)]['toStr'+_0x291c5d(0x21d)](-0x1377+-0x141a+0x27a1)),null;}try{if('mhcWY'!==_0x291c5d(0x43b)){var _0x221e36=new Uint8Array(_0x259f0e);for(var _0x39d416=-0x23c8+-0x3*-0x2c6+0xdbb*0x2;_0xba7dc7['hzqkx'](_0x39d416,_0x259f0e);_0x39d416++)_0x221e36[_0x39d416]=_0x40e22f[_0x291c5d(0x5a2)+'nt8'](_0x50f566+_0x431bb4+_0x39d416);return _0x24366e['ok']++,_0x221e36;}else{if(_0x5f19c4['lg'])_0x40b243['lg']['textC'+'onten'+'t']='';return;}}catch(_0x285d77){return _0x24366e['faile'+'d']++,_0x24366e['lastE'+'rror']=_0x24366e[_0x291c5d(0x8ea)+_0x291c5d(0x2da)]||String(_0x285d77&&_0x285d77[_0x291c5d(0x456)+'ge']||_0x285d77)[_0x291c5d(0xcf5)](-0x149+0x369*0x9+-0x1d68,0x1f6b*0x1+-0x5db*-0x1+-0x24ce*0x1),null;}}else _0xab8810();}function _0x184bdf(_0x4e9900,_0x46ad48,_0x2f7230){var _0x243bec=_0x2fbbc2,_0x22968a=_0x53254b[_0x2f7230],_0x5423c1=_0xba7dc7['kmSQR'](_0x269289,_0x4e9900,_0x46ad48,_0x22968a['size']);if(!_0x5423c1)return null;var _0x5ae988=new DataView(_0x5423c1[_0x243bec(0x78d)+'r'],_0x5423c1[_0x243bec(0x4bc)+_0x243bec(0xa33)],_0x5423c1[_0x243bec(0xb8e)+_0x243bec(0xa0c)]),_0x1905fd=_0x5ae988[_0x243bec(0xa7e)+_0x243bec(0x339)](_0x22968a[_0x243bec(0x349)],!![]),_0x2cd3c2=_0x5ae988['getIn'+_0x243bec(0x339)](_0x22968a[_0x243bec(0x3b1)+'n'],!![]),_0x2b5b9a=_0xba7dc7[_0x243bec(0xc20)](_0x5ae988['getUi'+_0x243bec(0x8ee)](_0x22968a['inite'+'d']),-0x7a1+0x8*-0x7+0x6*0x14f),_0x56cab0=_0xba7dc7[_0x243bec(0xbcd)](_0x2f7230,_0xba7dc7[_0x243bec(0x3bf)])?_0x5ae988['getFl'+_0x243bec(0x2d0)](_0x22968a['fake'],!![]):_0x2f7230===_0x243bec(0xa57)?_0x5ae988[_0x243bec(0xa7e)+_0x243bec(0x339)](_0x22968a[_0x243bec(0xaa8)],!![]):_0x5ae988['getUi'+'nt8'](_0x22968a['fake']),_0x42bbaa=_0xba7dc7['IszBu'](_0x5ae988[_0x243bec(0x5a2)+_0x243bec(0x8ee)](_0x22968a['activ'+'e']),-0x1bfa+0x124*-0xd+0x2acf);return{'keyAtOffset0':_0x1905fd,'hidden':_0x2cd3c2,'inited':_0x2b5b9a,'fake':_0x56cab0,'act':_0x42bbaa,'hex':_0xba7dc7[_0x243bec(0x8a4)](_0x6f7b62,_0x5423c1),'alt':_0xba7dc7['ylTIv'](_0x2f7230,_0xba7dc7['SXKyX'])?_0x2cd3c2^(_0x56cab0|-0x5*-0x6c+0x49d*0x1+-0x6b9):null};}function _0x3d15b7(_0x307a99,_0x522e6f,_0x3338b4){var _0x14c6c7=_0x2fbbc2;if(_0x307a99===_0x14c6c7(0x4e2))return _0xba7dc7['zbUDo'](_0x46b2e3,_0xba7dc7[_0x14c6c7(0x89e)](_0x522e6f,_0x3338b4));if(_0x307a99===_0x14c6c7(0xa57))return _0xba7dc7['InHww'](_0x522e6f^_0x3338b4,-0x1c22+0x52*0x11+0x16b0);return _0xba7dc7['IszBu'](_0x522e6f^_0x3338b4,-0x3d6*-0x1+0x80f+0x573*-0x2)!==0xc8b+0xf+-0xc9a?0x1771+0x12e*-0xf+-0xf5*0x6:0x1ee4+0x10e3+-0x2fc7;}function _0x386429(_0x560d1d,_0x53c2cf,_0x154c5d){var _0x51205a=_0x2fbbc2,_0x2bcae3=_0x53254b[_0x154c5d];if(!_0x2bcae3)return null;var _0x5591e1=_0xba7dc7[_0x51205a(0x665)](_0x35121f,_0xba7dc7[_0x51205a(0x85e)](_0x560d1d+_0x53c2cf,_0x2bcae3[_0x51205a(0x349)]),'u8'),_0x4b50ef=_0xba7dc7[_0x51205a(0x8cc)](_0x35121f,_0x560d1d+_0x53c2cf+_0x2bcae3['hidde'+'n'],_0x51205a(0xc77)),_0x5e91ce=_0xba7dc7[_0x51205a(0x6b2)](_0x35121f,_0x560d1d+_0x53c2cf+_0x2bcae3[_0x51205a(0x277)+'d'],'u8'),_0xbec966=_0x35121f(_0x560d1d+_0x53c2cf+_0x2bcae3['fake'],_0x154c5d===_0x51205a(0x4e2)?_0x51205a(0xb6c):_0x154c5d==='obfI'?_0x51205a(0xc77):'u8'),_0x332c84=_0x35121f(_0x560d1d+_0x53c2cf+_0x2bcae3['activ'+'e'],'u8');if(_0x5591e1===undefined||_0x4b50ef===undefined||_0xbec966===undefined||_0x332c84===undefined)return null;_0x5591e1&=0x2*-0xfbd+-0x1*0xeaf+0x2f28,_0x4b50ef|=0xb5+0x2532+-0x25e7,_0x5e91ce=(_0x5e91ce||0xcc0+-0x1d82+0x10c2)&-0x196f+-0x1a7d+0x33ed,_0x332c84&=-0xbf*-0x31+-0x1*0x269+-0x2225*0x1;var _0x16828f;if(_0x154c5d==='obfF')_0x16828f=_0xba7dc7[_0x51205a(0x8ab)](_0x46b2e3,_0x4b50ef^_0x5591e1);else{if(_0x154c5d===_0x51205a(0xa57))_0x16828f=_0xba7dc7['eBejO'](_0x4b50ef,_0x5591e1)|-0x1c68+0x1036+0xc32;else _0x16828f=(_0xba7dc7['eBejO'](_0x4b50ef,_0x5591e1)&-0x1c48+-0xa2d+-0x9dd*-0x4)!==-0x1b1e+-0x317+-0x2bf*-0xb?-0xd*-0x5+-0x1494+0x1454:0x2*-0x12ac+-0xafc+-0x182a*-0x2;}return{'real':_0x16828f,'fake':_0xbec966,'act':_0x332c84,'init':_0x5e91ce,'key':_0x5591e1,'hidden':_0x4b50ef};}function _0x16520d(_0x357018,_0x4054c2,_0x1e2f7f,_0xf4cb){var _0x4804cd=_0x2fbbc2,_0x6a26ba=('3|5|6'+_0x4804cd(0x884)+'1|2|7')['split']('|'),_0x46b866=-0x7f0+-0x24fc+0x2cec;while(!![]){switch(_0x6a26ba[_0x46b866++]){case'0':var _0x426b71=new DataView(_0x150890['buffe'+'r'],_0x150890['byteO'+'ffset'],_0x150890['byteL'+_0x4804cd(0xa0c)]);continue;case'1':var _0x4cfe35;continue;case'2':if(_0x1e2f7f===_0x4804cd(0x4e2))_0x4cfe35=_0x45380a(_0xf4cb);else{if(_0x1e2f7f==='obfI')_0x4cfe35=_0xf4cb|-0x1cdc*0x1+0x1977+0xb*0x4f;else _0x4cfe35=(_0xf4cb?-0x16d1+-0x10b*-0x17+0x17*-0xd:0x77a+-0x11d6+0xa5c)&0x1539+0x522+0x4*-0x657;}continue;case'3':var _0x46bca1=_0x53254b[_0x1e2f7f];continue;case'4':var _0x199f8a=_0xba7dc7['cUWiX'](_0x46bca1['keyTy'+'pe'],'u8')?_0x426b71[_0x4804cd(0x5a2)+'nt8'](_0x46bca1['key']):_0x426b71[_0x4804cd(0xa7e)+_0x4804cd(0x339)](_0x46bca1[_0x4804cd(0x349)],!![]);continue;case'5':var _0x150890=_0x269289(_0x357018,_0x4054c2,_0x46bca1[_0x4804cd(0xa9a)]);continue;case'6':if(!_0x150890)return![];continue;case'7':return _0x57e5e3(_0xba7dc7[_0x4804cd(0xb63)](_0x357018,_0x4054c2)+_0x46bca1[_0x4804cd(0x3b1)+'n'],_0xba7dc7[_0x4804cd(0x7a5)],_0x4cfe35^_0x199f8a)&&_0xba7dc7['dmwRW'](_0x57e5e3,_0x357018+_0x4054c2+_0x46bca1['fake'],_0x1e2f7f==='obfF'?_0x4804cd(0xb6c):_0x1e2f7f===_0xba7dc7[_0x4804cd(0xd08)]?'i32':'u8',_0x1e2f7f===_0xba7dc7['wmusK']?_0xf4cb:_0x1e2f7f===_0x4804cd(0xa57)?_0xf4cb|-0x135c+0x1*-0x275+-0x45d*-0x5:_0xf4cb?-0x2*-0x135f+-0x1*0x2525+-0x22*0xc:0x7*-0x4dc+0x467+0x13*0x18f)&&_0x57e5e3(_0x357018+_0x4054c2+_0x46bca1[_0x4804cd(0xb88)+'e'],'u8',0x1*0x19d3+-0xb*0x16+-0x18e1);}break;}}var _0x2786ed={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0x5994b6=-0xc2a+0x14d8+0x457*-0x2+0.03,_0x3a75eb=-0x3c0*0x8+-0x15e4+0x7*0x76a,_0x1283a2={},_0xf3eae3=-0xa*0xd1+0x1*0x1c19+0x15*-0xf3,_0x171be9=[],_0x52a75f=[];function _0x2636bf(_0xeb71cb){var _0x445657=_0x2fbbc2,_0x25774e={'XMCrI':function(_0x54da30,_0x1e7276){var _0x34f7e1=_0x4e00;return _0xba7dc7[_0x34f7e1(0x4ce)](_0x54da30,_0x1e7276);},'mJsFg':function(_0x247a0e,_0x5adf78,_0x36a140){return _0x247a0e(_0x5adf78,_0x36a140);},'iuoxy':function(_0xaf1696,_0x25f260){return _0xaf1696===_0x25f260;},'hDcRX':_0xba7dc7['YempL']};if(_0xba7dc7[_0x445657(0x9d9)](_0xba7dc7[_0x445657(0x212)],_0x445657(0xa71))){var _0x47ce5c=_0x2cad2b[_0x445657(0x50f)+_0x445657(0xca4)+_0x445657(0x413)]||[],_0x430fd3=[];_0x52a75f=[],_0x171be9=[];for(var _0x30730f=-0xe8f*0x1+-0xe29+0x1*0x1cb8;_0x30730f<_0x47ce5c[_0x445657(0x25f)+'h'];_0x30730f++){if(_0xba7dc7[_0x445657(0xb9c)]===_0xba7dc7[_0x445657(0x675)])_0x574431=_0xcd30f6;else{var _0x310843=_0x47ce5c[_0x30730f][0x65+-0x22bb+0xa*0x36f];if(_0xba7dc7[_0x445657(0x70a)](_0x47ce5c[_0x30730f][-0x171a+0x2*0xe20+-0x525],_0xba7dc7['wmusK']))continue;var _0x256570=_0x184bdf(_0xeb71cb,_0x310843,'obfF');if(!_0x256570||_0x256570['inite'+'d']!==-0x1*0xaed+-0xf3a+0x45c*0x6)continue;var _0x134ea0=_0xba7dc7['LdeWh'](_0x3d15b7,_0xba7dc7['wmusK'],_0x256570['hidde'+'n'],_0x256570[_0x445657(0x756)+'Offse'+'t0']);if(typeof _0x134ea0!==_0x445657(0x5e3)+'r'||!_0xba7dc7[_0x445657(0xc89)](isFinite,_0x134ea0))continue;var _0x9b556=_0xba7dc7[_0x445657(0x62b)](_0xeb71cb+':',_0x310843),_0x2fc8e2=_0x1283a2[_0x9b556];if(!_0x2fc8e2||_0x134ea0!==_0x2fc8e2[_0x445657(0xc3d)+'ritte'+'n'])_0x2fc8e2=_0x1283a2[_0x9b556]={'base':_0x134ea0,'lastWritten':null};var _0x202742=_0x2fc8e2['base'],_0x539956=Math['abs'](_0x202742);if(_0xba7dc7[_0x445657(0x5bb)](_0x539956,0x1f45+-0x57*-0x3d+-0x10*0x340+0.0001)||_0xba7dc7['wFthy'](_0x539956,0x8baa+-0xf37b+0x25*0xd5d)){_0x52a75f[_0x445657(0x3ad)]({'o':_0x310843,'v':_0x134ea0,'why':'impla'+_0x445657(0xc54)+'e'});continue;}_0x430fd3['push']({'o':_0x310843,'v':_0x134ea0,'a':_0x539956,'base':_0x202742,'key':_0x9b556,'st':_0x2fc8e2});}}var _0x225bf7=[];for(var _0x5f3c46=0x1fa5+-0xa73*0x1+-0x1532;_0x5f3c46<_0x430fd3['lengt'+'h'];_0x5f3c46++){var _0x330646=_0x430fd3[_0x5f3c46]['a'],_0x112d60=null;for(var _0x467139=0x17*-0x151+0x1ce8+-0x1b*-0xd;_0xba7dc7[_0x445657(0xbbb)](_0x467139,_0x225bf7['lengt'+'h']);_0x467139++){var _0x66557f=_0x225bf7[_0x467139][_0x445657(0xb60)]/_0x330646;if(_0x66557f>_0xba7dc7[_0x445657(0xc1e)](0x1*-0x243b+0xd46+0x16f6,_0x5994b6)&&_0x66557f<_0xba7dc7['RshaM'](-0xf47+0x7*0x224+0x4c,_0x5994b6)){_0x112d60=_0x225bf7[_0x467139];break;}}!_0x112d60&&(_0x112d60={'mean':_0x330646,'members':[]},_0x225bf7[_0x445657(0x3ad)](_0x112d60));_0x112d60[_0x445657(0x34d)+'rs']['push'](_0x430fd3[_0x5f3c46]),_0x112d60['mean']=0x1323+-0x819*0x2+-0x2f1;for(var _0x38a73c=-0xb*0xed+-0x3b*-0x86+-0x7*0x2f5;_0x38a73c<_0x112d60[_0x445657(0x34d)+'rs'][_0x445657(0x25f)+'h'];_0x38a73c++)_0x112d60[_0x445657(0xb60)]+=_0x112d60[_0x445657(0x34d)+'rs'][_0x38a73c]['a'];_0x112d60['mean']/=_0x112d60[_0x445657(0x34d)+'rs'][_0x445657(0x25f)+'h'];}var _0x3b348e=[];for(var _0x26529c=0x1*-0xabd+-0x61b*0x1+0x10d8;_0x26529c<_0x225bf7['lengt'+'h'];_0x26529c++){if(_0xba7dc7[_0x445657(0xbe7)](_0x225bf7[_0x26529c]['membe'+'rs'][_0x445657(0x25f)+'h'],_0x3a75eb))_0x3b348e[_0x445657(0x3ad)](_0x225bf7[_0x26529c]);}if(!_0x3b348e[_0x445657(0x25f)+'h']){if(_0xba7dc7[_0x445657(0x22a)](_0xba7dc7['pUZEN'],_0x445657(0xc3f))){_0x52a75f[_0x445657(0x3ad)]({'o':-(0x5*-0xb1+0xf36+-0x4*0x2f0),'v':0x0,'why':_0xba7dc7[_0x445657(0x703)](_0xba7dc7['BoVYE'](_0xba7dc7[_0x445657(0xb28)],_0x3a75eb),_0xba7dc7[_0x445657(0x812)])});return;}else try{_0x2308c3[_0x445657(0x581)][_0x553b3d]();}catch(_0x416609){}}var _0x11bbc0=_0x3b348e[-0x1b9a+0x1424+-0xbf*-0xa][_0x445657(0xb60)];for(var _0x2b4b6=-0xd30*0x2+-0x1*-0x23fd+-0x17*0x6b;_0x2b4b6<_0x3b348e[_0x445657(0x25f)+'h'];_0x2b4b6++)if(_0xba7dc7['bDuJt'](_0x3b348e[_0x2b4b6][_0x445657(0xb60)],_0x11bbc0))_0x11bbc0=_0x3b348e[_0x2b4b6]['mean'];var _0x27e425=_0x11bbc0*(-0x1a7d+-0x278+0x1cf5+0.5);for(var _0x14901d=-0x1c45+-0x4*-0x78d+-0x1*0x1ef;_0xba7dc7['LpIjA'](_0x14901d,_0x225bf7[_0x445657(0x25f)+'h']);_0x14901d++){if(_0x445657(0x8df)!==_0x445657(0xad5)){if(_0x225bf7[_0x14901d]['membe'+'rs']['lengt'+'h']>=_0x3a75eb)continue;for(var _0x445886=0x4*-0x61f+-0x1*0xeaa+0x2726;_0x445886<_0x225bf7[_0x14901d][_0x445657(0x34d)+'rs'][_0x445657(0x25f)+'h'];_0x445886++){_0x445657(0x9cb)!==_0x445657(0xb87)?_0x52a75f[_0x445657(0x3ad)]({'o':_0x225bf7[_0x14901d][_0x445657(0x34d)+'rs'][_0x445886]['o'],'v':_0x225bf7[_0x14901d][_0x445657(0x34d)+'rs'][_0x445886]['v'],'why':_0xba7dc7[_0x445657(0x9a0)]}):_0x25774e[_0x445657(0x607)](_0x39e08e,![]);}}else _0x16bc2b[_0x445657(0xb2c)+'ngs'][_0x445657(0x3ad)](_0xba7dc7['cyDVP']+_0x32bf2a['keys'](_0x39b368['insta'+_0x445657(0xbc0)])[_0x445657(0x25f)+'h']+_0xba7dc7[_0x445657(0x9d4)]+(_0x57bc43[_0x445657(0x8ea)+'rror']?_0xba7dc7['ajXel']+_0x2aa3bd[_0x445657(0x8ea)+_0x445657(0x2da)]:_0xba7dc7['oFelz']));}for(var _0x56a81c=-0x19*-0x55+0x1*-0x1150+0x903;_0xba7dc7[_0x445657(0xbbb)](_0x56a81c,_0x3b348e['lengt'+'h']);_0x56a81c++){if(_0x445657(0x951)===_0xba7dc7['lOUuf']){var _0x44a7ea=_0x3b348e[_0x56a81c][_0x445657(0x34d)+'rs'];for(var _0x263c6f=0x1a2a+0x995*0x1+0x23bf*-0x1;_0xba7dc7[_0x445657(0x5cd)](_0x263c6f,_0x44a7ea[_0x445657(0x25f)+'h']);_0x263c6f++){var _0x54dc5f=_0x44a7ea[_0x263c6f];if(_0x54dc5f['a']<_0x27e425){_0x52a75f['push']({'o':_0x54dc5f['o'],'v':_0x54dc5f['v'],'why':'below'+_0x445657(0x3e1)+'r\x20'+_0x27e425[_0x445657(0x1f9)+'ed'](0x7a0*-0x1+0x17ba+0x80c*-0x2)});continue;}var _0x481920=_0x54dc5f[_0x445657(0x9bb)]*_0x2786ed[_0x445657(0x33e)+'r'];_0x16520d(_0xeb71cb,_0x54dc5f['o'],_0xba7dc7[_0x445657(0x3bf)],_0x481920)&&(_0x54dc5f['st']['lastW'+'ritte'+'n']=Math[_0x445657(0x98b)+'d'](_0x481920),_0xf3eae3++,_0x171be9['push'](_0xba7dc7['bPgoe']('0x',_0x54dc5f['o'][_0x445657(0x6ac)+'ing'](-0x1c86+-0xbbc*0x2+-0x2*-0x1a07))));}}else{_0x25774e['mJsFg'](_0xb2cc8f,_0x12c9f1&&typeof _0xb43bf6['on']===_0x445657(0x5d0)+'an'?_0x2e0019['on']:_0x27a4ea['on'],_0x55f83a&&_0x25774e[_0x445657(0xb8b)](typeof _0x13e9e2[_0x445657(0x33e)+'r'],_0x25774e[_0x445657(0x9f4)])?_0x4bb131[_0x445657(0x33e)+'r']:_0x3ddb42[_0x445657(0x33e)+'r']);return;}}}else{var _0x29cc8d=_0x414bb8();if(_0x29cc8d&&_0x29cc8d[_0x445657(0x7e4)+'e']&&_0x29cc8d[_0x445657(0x7e4)+'e'][_0x445657(0xd95)+'8']&&_0x29cc8d['Modul'+'e'][_0x445657(0xd95)+'8']['buffe'+'r'])return _0x29cc8d['Modul'+'e']['HEAPU'+'8'];}}var _0x2cad2b={'FPScontroller':[[0x2219+0x25e5+0x129*-0x3e,_0x2fbbc2(0x4e2)],[-0x1*-0x321+-0x15f1+0x12f8,_0x2fbbc2(0x4e2)],[-0x50d*-0x7+0x1633+-0x394e,_0x2fbbc2(0x4e2)],[0x2230+0x2364+-0x453c,_0xba7dc7[_0x2fbbc2(0x3bf)]],[-0x261*0x2+0x7dd+0x2ab*-0x1,'obfF'],[-0x1aa7*-0x1+-0x1c94+-0x1*-0x275,'obfF'],[-0x6*-0x591+-0x6c5*-0x3+-0x3515,_0xba7dc7['wmusK']],[0x2057+0xe*0x1d5+-0x3945,_0x2fbbc2(0x88f)],[0x8c6*-0x1+-0x1418+0x1da2,_0x2fbbc2(0x4e2)],[0x1*0xcf2+-0x238c+0x1776,_0xba7dc7[_0x2fbbc2(0x7a5)]],[-0x871*0x4+-0xf*-0x1a3+0xa17,'v3'],[0x1413+0x2546+0x645*-0x9,'u8'],[0x3*0x709+-0x3*0xa1f+0xf*0xae,_0xba7dc7['wmusK']],[0x1225+0x33e*-0x9+-0xc11*-0x1,_0x2fbbc2(0xc77)],[-0xfe9+0x262e+-0x1539,'u8'],[-0x946+-0xf06+0x6*0x43a,_0xba7dc7[_0x2fbbc2(0x7a5)]],[-0x1455+-0x1330+0x2899,'u8'],[0x2397+0xf00+-0x3182,'u8'],[0xda+-0x7aa+0x27*0x34,_0xba7dc7['wmusK']],[-0x431+-0x1*-0xc74+-0x70f*0x1,_0xba7dc7[_0x2fbbc2(0x3bf)]],[0x1d6c+0x5*-0x39a+0x5*-0x206,_0x2fbbc2(0xb6c)],[0x1cf*-0x7+0x355*-0xb+0x32a0,'f32'],[0x1*0x2233+-0x219f+0xc0,'v3'],[0x40+0x4*-0x2f0+0xce0,'v3'],[0xe94+-0x178d+0x377*0x3,_0xba7dc7[_0x2fbbc2(0x350)]],[-0x362+-0x13c3*0x1+0x1895,_0x2fbbc2(0xb6c)],[-0x13ea*-0x1+0x1*0xf31+-0x3bb*0x9,'u8'],[0x791+-0x1fa7+0xc1*0x22,_0x2fbbc2(0xb6c)],[-0x17b5+-0x85a*0x3+0x325b,'v3'],[-0x165e+0xb62+0xca0,'u8'],[0x33f+0x25cc+0x175*-0x1b,_0xba7dc7['XQNwa']],[0xf23+-0xe*0xca+-0x25f,'f32'],[-0x9*-0x325+-0x2541+0xab0,'u8'],[0x1ed*0x5+-0x9eb+0x207,'u8'],[-0x5*-0x419+-0x2370+0x10b3,_0x2fbbc2(0x4e2)],[0x1069+0x2*0xef9+-0x2c83,_0xba7dc7['XQNwa']],[0x2415*-0x1+-0x11*0x137+0x3a98,'u8'],[0x167*0x1a+-0x11e5+-0x10b1,_0x2fbbc2(0x4e2)],[0x1229*0x2+0x23a0+-0x45fa,'v3'],[-0xb*0x20e+0x111f+0x783,_0xba7dc7[_0x2fbbc2(0x8ae)]],[-0x1d*-0x13d+0x268*-0x2+-0x2a3*0xb,_0x2fbbc2(0xb6c)],[-0xa05+-0xc5b+-0x2*-0xc3e,_0x2fbbc2(0xb6c)],[0x2*0x5c+-0x2143+0x22d7,'f32'],[-0x2594+-0x948+0xc*0x419,_0xba7dc7['XQNwa']],[0x10e2+0x1*0x14f9+-0x2387,_0xba7dc7[_0x2fbbc2(0x350)]],[0x793+0x714+-0x17*0x89,'f32'],[-0x8b*-0x7+0x1efd+0x2*-0x1037,'u8'],[0x14c1+-0x1d59+0x5*0x231,'u8'],[0x1c0*-0x11+-0x1ec7+-0x3ee5*-0x1,'u8'],[0x123*0x17+-0x4fd*-0x2+0x21bf*-0x1,_0xba7dc7['XQNwa']],[-0x1d75*0x1+-0xd72*-0x1+0x1267,'u8'],[-0x2*0xb1b+0xe5c+0xa3f,'u8'],[0x237d+0xf3b+-0x305*0x10,'f32'],[0x1*0x1239+-0x1d1d+0xd50,'f32'],[0x10b1*0x2+-0xf24+-0x11*0xee,'f32'],[-0x2*-0xc3d+-0x15a1+-0x65,'f32'],[0xe*-0xeb+0x25d2+-0x1680,_0xba7dc7['XQNwa']],[-0x17a9+0x1f0+0x1835,_0x2fbbc2(0xb6c)],[0x17d3+0x12dc+-0x282f,_0xba7dc7['XQNwa']],[-0x25f6+-0x1e97+0x4711,'v3'],[0x1*-0xf33+0xf7*0x17+-0x46a,'u8'],[0x141b*-0x1+-0xa55+0x2108,'v3'],[-0x11dd+-0x11*0xe9+0x23fa,_0x2fbbc2(0xb6c)],[0xc09+0x3*0x4d7+-0x17e2,'v3'],[0x121c+-0xbc*0xe+-0x6d*0xc,_0x2fbbc2(0xb6c)],[-0x1cbd+-0x1*-0x45d+0x1b1c,_0x2fbbc2(0xb6c)],[-0x5*0x518+-0x482*0x4+0x2e40,_0xba7dc7[_0x2fbbc2(0x350)]],[0x13*0x10+-0x2166+-0xb*-0x32e,'u8'],[0x1548+0x17*-0x19+-0x1044,'u8'],[0x24c8+-0x1e75+0x38b*-0x1,_0x2fbbc2(0xb6c)],[-0x1*-0x154f+0x124c+-0x24bf*0x1,'f32'],[-0x1*0x1664+-0xc00+0x2548,'v3'],[-0x27*-0x17+-0x2b7+0x226,'v3'],[-0xb8f+0x6e9*-0x3+0x2346,'f32'],[-0x14cb+0x1859+-0x8e,_0x2fbbc2(0xb6c)],[-0x18d*0xb+0x3*0x44c+0x72f,_0x2fbbc2(0xb6c)],[0x341+0x858*0x4+0x2199*-0x1,_0x2fbbc2(0xb6c)],[-0x29*-0xd9+0x10*0x9e+-0x2995,'v3'],[-0x1a1*0xa+-0x2*0x9e3+0x2728,'u8'],[-0x67*-0x1a+-0x1590+0xe36,'v3'],[0x1efb+0x2705*-0x1+0xb32,_0x2fbbc2(0xc77)],[-0x1ce8+-0x659+0x3*0xccf,_0x2fbbc2(0xb6c)],[0x22ec+-0x1bc2*0x1+-0x1fd*0x2,_0xba7dc7[_0x2fbbc2(0x350)]],[-0x15f0+0x1555+0x3cf,_0xba7dc7[_0x2fbbc2(0x350)]],[-0x2486+0x3*-0xb5c+0x49d6,_0x2fbbc2(0xb6c)],[-0xd*0x2d9+0x226b+0x5da*0x1,'u8'],[-0x4*-0x874+-0x1f3c+0xad*0x1,'u8'],[-0x19*-0x13c+-0x172+0x2*-0xd0f,'u8'],[-0x1113+0x1*-0x5fb+0x1*0x1a5b,'u8'],[-0x64*0x19+0x1fd*-0xd+0x26eb,'u8'],[-0x1546*0x1+-0x1*0x466+0x1cfc,_0x2fbbc2(0xb6c)],[-0x1310+-0x23a4+0x741*0x8,_0xba7dc7[_0x2fbbc2(0x350)]],[-0x8*-0x384+0x919+-0x21e1*0x1,_0xba7dc7[_0x2fbbc2(0x350)]],[-0x1*0x2203+-0x44d*0x9+0x4c14,_0xba7dc7['XQNwa']],[0x2*0x724+-0x142d*-0x1+-0x1*0x1f15,'f32'],[0x12*-0xd9+0x17*-0xfd+0x2961,'u8'],[0x424*0x7+0x49*0x25+0x1*-0x2421,'f32'],[-0x25c2+0x775+0x21b9,_0xba7dc7[_0x2fbbc2(0x350)]],[-0x35*-0x2+0x38f*-0x1+0x695,'u8'],[0xd22+-0xf26*-0x1+-0x18d0,'v3'],[-0x2d4+0x439*-0x1+0xa91,'v3'],[0x2fb*0x7+-0xb73*0x3+0x110c,'v3'],[-0x7*-0x79+-0x716+0x763,_0x2fbbc2(0xb6c)],[-0x228c+-0x860+-0x24*-0x14b,_0x2fbbc2(0xb6c)],[0x19c7*-0x1+0xfe5+0x482*0x3,_0x2fbbc2(0xb6c)],[0x1d2c+0x5b*-0x67+0x3*0x3b3,'v3'],[-0xe08*-0x2+-0x1*-0x1d39+0x3595*-0x1,_0xba7dc7['WBWCa']],[0x8e*-0x22+-0x1*-0x1639+0x5b*0x1,'u8'],[0x2383+-0x14b0+-0xb17,_0x2fbbc2(0xc77)],[0x22a7+-0x102d+-0xeba,_0xba7dc7[_0x2fbbc2(0x350)]],[0x25*0x2+-0x2249+-0x565*-0x7,'f32'],[-0x5de*-0x1+-0x20ed+-0x1*-0x1ed7,'f32'],[0x365*0x6+-0x1f5*-0xd+-0x2cd*0xf,_0x2fbbc2(0xb6c)],[-0x1*-0x4b3+0x1eea+-0x1fcd,'v3'],[-0x715+0x2359*-0x1+0x19*0x1da,_0xba7dc7['WBWCa']],[0xd4*-0x1+-0x11*-0x1ed+0x1c09*-0x1,'u8'],[0x8b+0x126b+-0xf15,'u8'],[-0xfe0*0x2+-0xb*-0x27e+-0x1*-0x838,'u8'],[-0x71*0x1d+-0x2e*-0x15+0xceb,_0x2fbbc2(0xb6c)],[-0x1be1*-0x1+0x2*-0x50c+-0xde1,'i32']],'HealthScript':[[0x2565+0x17*-0x40+0x1*-0x1f4d,'u8'],[0x14d0+-0x11*0x169+0x385,'i32'],[0x1*-0x6c8+-0x6d*0x9+0xb1d,_0x2fbbc2(0xb6c)],[-0x1bad+0x9*-0xd3+-0x1*-0x239c,'f32'],[0x68*0x5e+-0x259a+-0xe,_0xba7dc7[_0x2fbbc2(0x350)]],[0x10e2+0x252a+-0x3580,'f32'],[-0x2f*-0xc5+0x1331+-0x36cc,_0x2fbbc2(0xb6c)],[-0x10af+0x1*-0x134d+0x2490,_0xba7dc7['XQNwa']],[-0x207b+0x202a+-0xf1*-0x1,_0xba7dc7[_0x2fbbc2(0x7a5)]],[0x1da4+0x1*0x10e5+-0x2de5,_0xba7dc7[_0x2fbbc2(0x7a5)]],[-0x27*0x7+-0x72f*0x5+0x25a4,'u8'],[0x20*0x40+-0x180c+-0x2f*-0x5b,'u8'],[0x1b6c+0x1614+-0x30d6,'u8'],[-0x1929*0x1+0x2*0xba2+-0x4*-0xa4,'u8'],[-0x3dd*0x4+0x2*-0x5d5+-0x1bde*-0x1,'obfI'],[-0x96b*-0x2+-0x1*0x1a93+0x891,_0xba7dc7['SXKyX']],[-0xb3*0x10+-0x994+0x15ac,_0xba7dc7[_0x2fbbc2(0xd08)]],[-0x11e7*0x2+0xce9+0x17e1*0x1,_0x2fbbc2(0xa57)],[-0x4d2+0x3ee*0x6+-0x38a*0x5,_0x2fbbc2(0xa57)],[-0xba7+0x17c5+0x1*-0xafa,_0xba7dc7['jvwRf']],[-0xb4e*0x1+-0x153b+-0x21b9*-0x1,_0xba7dc7[_0x2fbbc2(0x3bf)]],[-0x2*-0xae1+-0x21d+-0x1*0x125d,_0x2fbbc2(0xb6c)],[-0x109f+-0x19a7+0x2b92,_0xba7dc7[_0x2fbbc2(0x350)]],[0xa10+-0x8*-0x1ba+-0x10*0x169,_0x2fbbc2(0xb6c)],[-0x1*-0x120e+-0x18cc+-0x812*-0x1,_0xba7dc7['XQNwa']],[-0x4ca+0x44*-0x8b+0x2b12,_0x2fbbc2(0xb6c)],[0xa9f+0x2380+0x4f*-0x91,'v3'],[-0x1*0x10e8+0x1*0x9ef+-0x1*-0x869,_0x2fbbc2(0xb6c)],[-0x2339+0x1*-0xb45+-0x2ff6*-0x1,_0xba7dc7[_0x2fbbc2(0x350)]],[0xb*-0x11d+0x2b*-0x83+0x23c0,'u8'],[-0x1*0x22e7+0x1*0x6be+0x5*0x5f1,'u8'],[0x8e+-0x1f5a*0x1+0x205c,_0xba7dc7[_0x2fbbc2(0x7a5)]]],'PlayerConfig':[],'WeaponManager':[[-0x15*0x11f+0x10ef+-0x9c*-0xb,'i32'],[0x1*0x1a06+0x17*0x9d+0x1*-0x2805,_0xba7dc7[_0x2fbbc2(0x7a5)]],[-0x1*-0x1597+-0x489+-0x10ee,'u8'],[-0x1e3a+-0x1*0x6a1+0x24ff,_0x2fbbc2(0xc77)],[-0x9f1+0x25f4*0x1+-0x1b9f,_0xba7dc7['wmusK']],[0x1531+0x4*-0x717+0x7a7,_0xba7dc7[_0x2fbbc2(0x350)]],[-0x1423+0x2447+-0x19*0xa0,_0xba7dc7[_0x2fbbc2(0x7a5)]],[-0x1b82+0xa*-0x30b+-0x1*-0x3a78,'u8'],[-0xb*0x358+-0x1*0x247f+0x2*0x24e8,'u8'],[0xb74*-0x1+-0x2152+0x1*0x2d52,_0xba7dc7[_0x2fbbc2(0x7a5)]],[0x1*0x259e+0x1f34+-0x2*0x2221,'f32'],[0x1f0d*0x1+-0x1c69+-0x20c,_0x2fbbc2(0xb6c)],[-0xa*0x19f+0x2647+-0x1565,_0xba7dc7['WBWCa']],[-0x2*0xb99+-0x9d*-0x3a+-0x4*0x2e9,'u8'],[-0x3ab+0x2133+-0x1cac,_0xba7dc7[_0x2fbbc2(0xd08)]],[-0x1e33+-0x4*0x47f+-0x9d3*-0x5,'obfI'],[-0x79d*0x1+0x231d+0x69f*-0x4,_0x2fbbc2(0xb6c)],[0x163a+0x22c9+0x3*-0x12a9,'f32'],[-0xa*0x2a7+0x352+-0x1840*-0x1,_0x2fbbc2(0xb6c)],[-0x46*-0x4f+-0x4cd*0x4+-0x1*0x14e,_0xba7dc7['XQNwa']],[-0x1bb0+0x544+0x178c,_0x2fbbc2(0xb6c)],[0x16cd+0x36*0x35+-0xaf1*0x3,'u8'],[0x13e6+0x1932+0x3*-0xea4,_0xba7dc7['SXKyX']],[0x46b*-0x1+-0x1488+0x13*0x161,_0xba7dc7[_0x2fbbc2(0xd08)]],[0x23*-0x4c+-0x9*-0x395+-0x1485,_0x2fbbc2(0xa57)],[0x27*0xea+-0x57e+-0x1cc0,_0x2fbbc2(0x88f)],[-0x2f8*-0x4+0x11ad+0x1*-0x1c19,'obfB'],[0x3*-0x9ad+0x1d0d+0x15*0x12,_0xba7dc7[_0x2fbbc2(0x8ae)]],[0x1*-0x213b+-0x52+0x2319,_0xba7dc7['jvwRf']],[-0xd5+0x1c65*0x1+-0x19ec,'obfB'],[0x8db+0x15b3+-0x2*0xe6f,'obfI'],[0x18f1+-0x1931+-0x2*-0x106,_0xba7dc7[_0x2fbbc2(0x7a5)]],[0x953+-0x17*-0x168+-0x27db,'u8'],[-0x1*-0x1623+0x1eba+-0x3309,_0xba7dc7['WBWCa']],[-0xdc2+0x723*0x4+-0xcf2,_0x2fbbc2(0xc77)],[-0x114b+0x2236+-0xeeb,_0x2fbbc2(0xc77)],[-0x1aa9+0x21a1*-0x1+0x6ee*0x9,'u8'],[0x156a*0x1+0x52*-0xb+-0xfc8,'u8'],[0x1fdb*0x1+-0x13*0xd+-0x1cc7,'u8'],[-0x115*0x9+-0x83*-0x34+-0xec1,'u8'],[-0x1*-0x2381+0x1*0x82e+-0x85*0x50,'u8'],[0x15*0x1c1+0x7*0x1c3+-0xf9e*0x3,'i32'],[-0x20e+0x18f6+0xe*-0x178,'u8']],'GG_GameManager':[[0x10ab*-0x2+-0x8+0x2182*0x1,'u8'],[0x2076+0x3*0x29e+-0x2824,_0xba7dc7[_0x2fbbc2(0x350)]],[0x152+-0x1*-0x3d+-0x14b*0x1,'u8'],[-0x1e5f*-0x1+-0x4a*0x7+-0x1c14,'u8'],[0xf6a*-0x1+0x22a*0x8+0xcf*-0x2,'f32'],[0x5ac+-0x1*0x1e59+0x18f9,'f32'],[0x5*-0x236+-0x37d*0xa+-0xb9*-0x40,'i32'],[-0xf92+-0x14*-0x110+-0x112*0x5,_0xba7dc7['WBWCa']],[-0x1d*-0xe3+0xb*-0x9e+0x1*-0x1295,'u8'],[0x12c*-0x18+-0x599*0x2+0x27c6,'u8'],[0x1527+-0x13d*0xd+0x496*-0x1,_0xba7dc7[_0x2fbbc2(0x350)]],[0x16d9+-0xabf+-0xb9e,_0xba7dc7['XQNwa']],[-0x22c2+0x234*-0x1+-0x6*-0x641,_0x2fbbc2(0xc77)],[0x133a+0x23*-0x3f+-0xa09,'u8'],[0x1263+0x5*0x4f+-0x133a,'i32'],[0xfab+-0x23d7+0x14e8,_0xba7dc7['WBWCa']],[-0x2689*-0x1+0x1*-0x36+-0x2593,_0xba7dc7[_0x2fbbc2(0x7a5)]],[-0x3*0x931+-0x2634+-0x18d*-0x2b,_0xba7dc7[_0x2fbbc2(0xd08)]],[-0x1e97*0x1+0x318+0x1c7b,'obfI'],[0x8c+0x10f*0xe+-0xe4e,'obfI'],[-0x8*-0x343+-0xb65*0x1+-0xd87*0x1,'u8'],[0xbca+-0x21b*0x1+-0x4b*0x1d,_0x2fbbc2(0xc77)],[-0x1846+-0x1733+0x30dd,'u8'],[0xab5+-0x1629+-0x19*-0x84,'f32'],[0x9fc*-0x2+-0x1be6*-0x1+-0x66e*0x1,'u8'],[-0x11cf+0xbda*-0x3+0x439*0xd,'u8'],[0x1a3f+0x2*-0x4f4+-0xeb3*0x1,'u8'],[-0x5c7+0xa0c+-0x29d,_0xba7dc7[_0x2fbbc2(0x7a5)]],[0x1eb6*-0x1+0x3b*-0x3d+-0x529*-0x9,_0x2fbbc2(0xb6c)],[0xd43+-0x476+-0x25f*0x3,'u8'],[-0xda*-0x2b+-0x11f+-0x21ce,'u8'],[0x136*-0x4+-0x1*-0x1bf4+-0x1564,_0x2fbbc2(0xc77)],[-0x8*0x181+-0x4e7+0x12ab,_0x2fbbc2(0xc77)],[0x1*0x2273+0xa00+0x11*-0x283,_0xba7dc7[_0x2fbbc2(0x350)]],[0x1fc4+0x7*0x409+0x1*-0x3a3f,_0x2fbbc2(0xc77)],[0x2ef*0xd+0xd50*0x1+-0x31ab,'f32'],[-0x18ea*-0x1+-0x1436+-0x2e8,_0xba7dc7[_0x2fbbc2(0x7a5)]],[-0x1*0x1fc5+-0x1492+-0x3627*-0x1,_0x2fbbc2(0xc77)]],'TDM_GameManager':[[0x1*0x17f5+-0x1*-0x12e9+-0x2ac6,'u8'],[-0x1ae5+0x257f+-0x37e*0x3,'u8'],[0x1e42+0x551+-0x2372,'u8'],[-0xdec+0x1191+-0x381,'f32'],[0x7af+-0x5*0x448+0xe11,'u8'],[-0xc2d+-0xf66+-0x1*-0x1bef,_0x2fbbc2(0xb6c)],[0x97*0x3b+0x76*-0x3c+-0x6c5,_0x2fbbc2(0xb6c)],[0x1*-0x191e+-0xc9*-0x1d+0x2bd,_0x2fbbc2(0xc77)],[-0x2*-0x293+-0xa*0x239+-0x1*-0x117c,_0xba7dc7[_0x2fbbc2(0x7a5)]],[0xa*-0x31a+0x1ee+0x1d82,'u8'],[-0x39a+0x8f7+-0x4f0,'u8'],[0x21ed+-0x110d*0x2+-0x1*-0x9d,'f32'],[-0x1e5e+0x513+0x19bf,_0xba7dc7[_0x2fbbc2(0x350)]],[-0x2199+-0x122d+0x343e,_0xba7dc7['WBWCa']],[-0x19e*0x5+-0x14+-0xa*-0xdf,'u8'],[0x2158+-0xf4c+-0x117c,_0xba7dc7[_0x2fbbc2(0xd08)]],[-0xf*-0x239+0x11e*-0x11+0xd81*-0x1,'obfI'],[-0x5d9*-0x3+0x1905+-0x29a4,_0xba7dc7['SXKyX']],[0x5fd+0x1e3a+-0x2337,_0xba7dc7[_0x2fbbc2(0xd08)]],[-0xda*0x25+0xe4*0x11+0x1172,'u8'],[0x2565+-0xec7+-0x1542,'u8'],[0x2e2+0x1*-0x18a7+0x18b*0xf,'i32'],[0x1*0x667+0x113+-0x60e,'u8'],[0x1b0+-0x89b+0x86f,'u8'],[-0x1*-0x1120+-0xa48+0x50*-0x11,_0x2fbbc2(0xb6c)],[-0xc88*-0x2+0x2*-0xffb+0x872,_0x2fbbc2(0xc77)],[-0x1f9d+-0xbaf+0x2cdc,'i32'],[0x1533+0x15c2+-0x63*0x6b,'f32'],[-0x19f5+0x296*-0x1+0x1e23*0x1,_0xba7dc7['WBWCa']],[0x9*0x383+-0x1*-0x88c+-0x21*0x12b,_0xba7dc7[_0x2fbbc2(0x7a5)]],[-0xa7e+-0x231+0xb*0x14d,_0xba7dc7[_0x2fbbc2(0x350)]],[0x1200+-0x1*-0x1e4f+0x1*-0x2eab,'f32'],[-0x156a+-0x1*0x1697+-0x2da9*-0x1,_0x2fbbc2(0xc77)],[0x1a91+-0x11d8*-0x1+-0x2ab9,'u8'],[-0x29*0x62+-0x40f*-0x4+0x127,'u8'],[0xd3f*-0x1+0x1738*0x1+-0x841,_0xba7dc7[_0x2fbbc2(0x350)]]],'PhotonNetworkSync':[[0xa50+-0xa*-0xac+-0x10d4,'v3'],[-0xe*-0x167+-0x5b*0x11+-0xd57,_0x2fbbc2(0xc77)],[0x1bcb+0x463*-0x7+0x32e,'u8'],[-0xc73*0x3+0x8db*0x3+0xb0d,'u8'],[0x16f3+0x2203*-0x1+-0x21*-0x58,'v3'],[-0x1*0x1f28+-0x9a2+0x291e,'u8'],[-0x2*-0x4eb+0x2f*-0x27+-0x255,_0xba7dc7[_0x2fbbc2(0x7a5)]],[0x3b*-0x34+-0x243e+0x3096,_0xba7dc7[_0x2fbbc2(0x7a5)]],[-0x7*-0x355+0x1f76+-0x3669,'f32'],[0x233+-0x9b*-0x1+-0x2*0x135,_0xba7dc7[_0x2fbbc2(0x350)]],[-0x1*0x1ca5+0x1297+0xa76,_0x2fbbc2(0xb6c)],[-0x105d+-0x15e9+0x26b2,'v3'],[0x1e94+-0x7*-0x511+-0x4193,_0xba7dc7['XQNwa']],[-0xa*-0x304+-0x192b+-0x1*0x481,_0x2fbbc2(0xb6c)],[-0x14d9+0x210b+0x2*-0x5d9,_0xba7dc7[_0x2fbbc2(0x7a5)]],[-0x185a+-0x1*-0x159e+0x344,_0xba7dc7[_0x2fbbc2(0x350)]]],'MouseLook':[[-0x672*0x4+0x241*0xd+-0x371,_0xba7dc7['XQNwa']],[-0x83b+0x808+-0x19*-0x3,_0xba7dc7['XQNwa']],[0x9f7+0x1765+-0x4*0x850,_0x2fbbc2(0xb6c)],[0x2*0xa97+-0x104f+-0x4bf,_0x2fbbc2(0xb6c)],[0x1*0x175d+0x292*0x1+-0x19cb*0x1,_0x2fbbc2(0xb6c)],[-0x2e3*0x8+0x3e*0x38+-0x3e*-0x28,_0x2fbbc2(0xb6c)],[0xd17+0x1*0xcbd+0xc*-0x223,_0xba7dc7['XQNwa']],[-0x58*-0x58+0xdd8+-0x6a*0x6a,'u8'],[-0x2005+0x1df7*-0x1+0x3e34,_0x2fbbc2(0xb6c)],[0xb87+0x1f77+0x1*-0x2ac2,_0xba7dc7[_0x2fbbc2(0x350)]],[0x28d*-0x8+-0x6ae+0x2*0xdab,'i32'],[0x1360+-0x1b06+0x7ea,'u8'],[-0x6a3*-0x1+0x9f5*0x3+-0x243a*0x1,'v2']],'NetworkPlayerAnimations':[[0x2509+-0x2*0x1e9+0x5*-0x683,'v3'],[0x1a1*-0xe+0x6b4+0x10ce,'v3'],[0xb19+0x7c8+-0x1221,'u8'],[-0x23a1+0x1d2b*-0x1+0x4190,_0xba7dc7['WBWCa']],[0x2709+0x1d47+-0x4388,_0xba7dc7[_0x2fbbc2(0x7a5)]],[0xd6*0xc+0x26cd+-0x3009,'f32'],[0xf56+0x19fe+-0x2884,_0xba7dc7[_0x2fbbc2(0x350)]],[-0x2*0x10cb+-0x1b15+0x33d*0x13,_0xba7dc7['XQNwa']],[0x1*-0x14c6+-0x1*0x1025+0x25cb,_0xba7dc7['XQNwa']],[-0x916+-0x4b8*0x1+0xeb6,_0x2fbbc2(0xb6c)],[0x22d5+0x5*-0x2c2+0x11*-0x12f,_0xba7dc7[_0x2fbbc2(0x350)]],[0x238f*0x1+-0x2169+-0x136*0x1,_0x2fbbc2(0xb6c)],[-0x1bb6+-0xd*0x29b+0x1*0x3e89,_0x2fbbc2(0xb6c)],[0x17fe+-0xd69+-0x99d,'f32'],[0xd10+-0x7e1*0x3+0xb8f,'f32'],[0x19*-0x136+-0xdf*-0x13+0xeb9,_0xba7dc7[_0x2fbbc2(0x350)]],[0x4*-0x35e+0x9e3+-0x1*-0x499,'f32'],[0x26fb+-0x1d*0x92+-0x1569,_0xba7dc7[_0x2fbbc2(0x7a5)]],[0xfb2+0x820+-0x109*0x16,'u8'],[0x1*0x15b5+0x2ae+-0x1753*0x1,_0xba7dc7[_0x2fbbc2(0x7a5)]],[0x9b*-0x21+0x3*0x476+-0xf*-0x83,'i32'],[0x145*0x1d+0x67*-0x57+0x17*-0x8,'u8'],[-0x971*-0x2+0x8d1*-0x1+-0x8f5,'f32'],[0x1579+0x1*0x9a3+-0x4*0x77f,'f32'],[-0x77e+-0x1*0x1077+0x1919,_0x2fbbc2(0xb6c)],[-0x2187+0x67d+0x1c32,_0xba7dc7[_0x2fbbc2(0x350)]],[-0x1*-0xf7b+0x7*-0x2a4+0x42d,'u8'],[0x2*0xe11+0x2ce+-0x4*0x76e,'u8'],[-0x1697+0x15ac+0x227,'v3'],[0x1c1*-0x6+0xea3+-0x2d5,'v3'],[0x224d+0x1*-0x23b1+0x2f8,'u8']],'NPC_Cotroller':[[-0x52f+0xdf6+0x83*-0x11,'v3'],[0x7f8+0x1eb8+-0x1*0x2690,_0x2fbbc2(0xb6c)],[0x2167+0x1c8d+-0x3dd0,_0xba7dc7['XQNwa']],[-0x1898+0x8f3*0x3+-0x1*0x1eb,'u8'],[0x84d+0x2*-0x616+0x436,'u8'],[-0x1091+0x1*0x12c6+-0x1d9,'v3'],[0x1831+0x7e*0x30+-0x971*0x5,'u8'],[-0x1*-0xe27+-0x1*-0x1ee5+-0xb1b*0x4,'f32'],[0x1efd*-0x1+0x1*-0x1687+0x3628,_0x2fbbc2(0xb6c)],[0x8*0x11f+-0x1238+0x9f8,_0x2fbbc2(0xb6c)],[-0x1*0x10fd+0x13e7+-0x22e,_0xba7dc7[_0x2fbbc2(0x350)]],[0x19*0x119+0x1b*0x91+-0x29f4,'u8'],[-0x313*0x3+-0x2b6*0x7+0x1*0x1cff,_0x2fbbc2(0xb6c)],[0x1*0x13b8+0x1*-0x1583+-0x1*-0x2a3,_0xba7dc7['XQNwa']],[0x1*-0xed5+0x58d*-0x4+0x6d*0x59,_0x2fbbc2(0xb6c)],[0x6af*0x2+0xff8+-0x1c76,_0xba7dc7[_0x2fbbc2(0x350)]],[-0x2465*-0x1+0x135b*0x1+-0x36dc,'u8'],[0x13d3+0x17*0x16f+-0x33e0,_0xba7dc7['XQNwa']],[0x1992+0x140b+-0x2cad,'v3'],[-0x12*-0x1df+0x12*-0x2f+0xc6*-0x26,_0xba7dc7['XQNwa']],[-0x22e+0x269*-0x5+-0x7*-0x22d,_0xba7dc7[_0x2fbbc2(0x7a5)]],[0x7*0x4b1+0x6*-0x321+-0xd0d,_0xba7dc7['XQNwa']],[0x3*0xc0f+0x19*0xf5+-0x3b12,_0xba7dc7[_0x2fbbc2(0x350)]],[0x3*-0x12e+-0x204*0x5+0xeaa*0x1,'f32'],[-0x3fd+-0x12b7+0x17c8,'v3'],[-0x4*0x565+0x1*0x1bb+0x14f9*0x1,_0xba7dc7[_0x2fbbc2(0x350)]],[-0x2672+0x17fe+0xf98,_0x2fbbc2(0xb6c)],[0xd29+0x322+-0x1*0xf17,'v3'],[-0x9*0x1d+0x17a5*0x1+-0x4*0x557,'u8'],[0x7f*0x1+-0x1f3d+0x2006,_0xba7dc7['XQNwa']],[-0x8f9*0x2+-0x1*-0x2495+-0x1153,'v3'],[0xd5a+-0x89a*-0x4+-0x7bb*0x6,_0x2fbbc2(0xc77)],[0xe65+-0x3*0x54a+-0x1*-0x2e5,_0xba7dc7['WBWCa']],[0x3*-0x6dd+0x26fd+0x1a*-0xa7,_0x2fbbc2(0xb6c)],[-0x18c1+0x2f*-0x97+0x35ee,'u8'],[-0x2184+0xec0+0x143c,'v4'],[-0x1b8e+-0x1bbf*-0x1+0x157,_0xba7dc7[_0x2fbbc2(0x350)]],[-0x37*0x3b+-0x1c*-0x6d+0x1f*0x13,'f32'],[-0x1caa+0x1c09+0x231,_0x2fbbc2(0xb6c)],[0x2534+-0x4*-0x8ab+-0x4648,'u8'],[0x313*-0x1+0x1868+-0x13b5,_0x2fbbc2(0xc77)]],'TargetHealth':[[0x1*0x12f4+0x1b8*0x16+-0x4*0xe2d,'i32'],[0x21ee+0x14d3+-0x36ad,'i32'],[-0x1b47+-0xb85+0x30*0xd0,'u8'],[-0xffc+-0x2e*0x56+0x7ed*0x4,_0x2fbbc2(0xc77)],[0x315*-0x5+-0x3*-0x652+-0x345,_0xba7dc7['WBWCa']],[-0x1*-0x1ca9+0x25d4+-0xd3d*0x5,'i32'],[0xff5+-0x2628+-0x1*-0x1683,'i32'],[0x252a+0xe47+-0x32ed*0x1,_0xba7dc7[_0x2fbbc2(0x350)]],[-0x6a1+0x4ea*-0x2+0x1101,_0x2fbbc2(0xb6c)],[0x134f+0x1c97+-0x2f56,'u8'],[0x1bd4*-0x1+-0x123b+0x1*0x2ea3,'f32'],[-0x5*-0x257+-0x181*0x5+-0x38a,'u8'],[-0x816+-0x413+-0xcd1*-0x1,_0xba7dc7[_0x2fbbc2(0x7a5)]],[0x1dd7*-0x1+0x1*0x151b+0x968,_0xba7dc7[_0x2fbbc2(0x7a5)]],[-0x1*0x1fd5+0x757*-0x3+0x369a,_0x2fbbc2(0xb6c)],[0x2209*-0x1+0x1e97+0x3*0x16a,'u8']],'SectatorCamera':[[-0x178*0x17+0x22c4+-0xe8,_0xba7dc7[_0x2fbbc2(0x350)]],[0x696+0x13*0x159+-0x2019,_0xba7dc7['XQNwa']],[-0x1596+0x553*0x1+-0x105f*-0x1,_0x2fbbc2(0xb6c)],[-0x87*-0x3c+0xe*0x1d3+-0x390e,'v3'],[-0x1*-0xba7+0x2*0x101f+-0x2bb9,'v3'],[0x1*0x432+-0x4bb+0x1*0xd1,_0xba7dc7[_0x2fbbc2(0x7a5)]],[0x160a+0x1d44+0x1*-0x3302,_0xba7dc7['WBWCa']],[-0x2*0x3eb+0x2*-0x1f7+-0x305*-0x4,'f32'],[0x8df*-0x1+0x22a7+0x16a*-0x12,'i32'],[-0x2141+0xa67+0x1732,_0x2fbbc2(0xb6c)],[-0x2597+-0x3*-0xa13+0x7ba,'u8'],[0xe*-0x185+0x1ae+0x13f8,'v3'],[0x2e9*0xb+0xdb+-0x2072,'v4'],[0x4e3+-0xd55*0x1+-0x12*-0x7f,'u8'],[0x19e0+0x177*-0x10+-0x1f0,_0xba7dc7[_0x2fbbc2(0x7a5)]]],'UISettings':[[-0xf*-0x57+-0x1ca*-0xa+-0x16dd,'i32'],[-0x17bd+-0x1299+0x2a7e,'f32'],[0x2*-0x4f+0x2177+-0x37*0x93,'u8'],[0x1b38+0x7e*0x24+0x2*-0x15d4,_0xba7dc7[_0x2fbbc2(0x7a5)]],[0x3d*-0x25+-0x25f7+0x301c,_0x2fbbc2(0xc77)],[-0x2e*-0x53+-0x1069+0x2d7*0x1,_0x2fbbc2(0xc77)],[0x955*0x1+-0x266a+0x1e71,'u8'],[0x9dc+0x2550+0xf45*-0x3,'u8'],[0x233+-0x13*-0x12b+0x1a5*-0xe,'u8'],[-0x1543*-0x1+0x6d9+0x559*-0x5,'u8'],[-0x1c2e+-0x1*0x23e3+0x4171,'u8'],[0x1f20+0x24bb+-0x427a,'u8'],[-0x1*-0x175+-0x3b*0x4f+0x1222,'u8'],[-0xe8e+0x117a*-0x2+0x333e,'f32'],[0x1629+0x1795+0x362*-0xd,_0x2fbbc2(0xb6c)],[0x220+-0x778*-0x4+0x57*-0x58,'u8'],[0x5cc*0x1+0x114d+-0x1499,_0xba7dc7['XQNwa']],[0xfb5+-0x9*0x444+-0x194f*-0x1,_0x2fbbc2(0xc77)],[0x13*-0x20b+-0xcc0+0x3689,'u8'],[-0xfd+0x1c9e+-0x1805,'u8'],[0x85c+0x11d2*-0x1+0xd16,'v2'],[-0x6ad+0x17ba+-0x3*0x477,'v2'],[0x639+-0x1*0x8cf+0x646,'u8'],[0xcc3+-0x99e+0x93,'u8'],[0x15b*0x1b+-0x21ec+-0x29*-0x7,'f32'],[-0xc29*0x3+-0x183*0x9+-0x1*-0x35e6,'v3'],[0xe78+-0x14d2+0xa3a,'f32'],[0x1e4f+0x8e4+0x83*-0x45,_0x2fbbc2(0xb6c)],[0xd*0x3+0x16*0x193+-0x1ee1,_0x2fbbc2(0xb6c)],[-0xb1b+0xb99+-0x372*-0x1,'u8'],[0x14e7+0x119b+0x1*-0x2291,'u8'],[0x1d9f*0x1+-0xbc6+0x1*-0xde5,_0xba7dc7[_0x2fbbc2(0x7a5)]],[0x410+0x19fd+-0x1a0d,'i32'],[0x1f3*-0x13+-0x1516*0x1+0x1*0x3e23,_0xba7dc7['WBWCa']],[0x11*0x1d2+0x11a*-0x5+-0x448*0x5,'i32'],[-0x5*-0x142+-0x1d31+0x1af3,_0xba7dc7['WBWCa']],[-0x1*-0x153d+-0x1bbf+-0x7b*-0x16,_0x2fbbc2(0xc77)],[-0x2125+0x13*-0xde+0x35b3,_0xba7dc7['WBWCa']],[0x93c*-0x2+0xed*-0xb+0x20bf*0x1,_0x2fbbc2(0xc77)],[-0x1993+-0x1*0x1105+0x1c*0x1ab,'i32'],[-0xc38+-0x14e7*0x1+0x253f,'i32'],[-0x61+-0x421*0x2+0xcf7*0x1,'u8'],[-0x1df2*0x1+-0x1*-0x1157+0x10f0,'u8'],[0x259c+-0x1*-0xe6+-0x3*0xb64,'u8'],[-0x46f*-0x7+0x9a4+-0x2456,'u8'],[0x79*0x17+0x1*-0x3f1+0x131*-0x2,_0xba7dc7['XQNwa']]]},_0x115eb1={},_0x4e8ae5={};function _0x224919(_0x2026b3,_0xe60680,_0x3b410d){var _0x2f8287=_0x2fbbc2,_0x1fb809={'oJoFS':function(_0x3f3e49,_0x1cc52b){return _0x3f3e49(_0x1cc52b);},'AJDWE':function(_0x5a52e7,_0x2bb1bb){return _0x5a52e7!==_0x2bb1bb;},'pRJic':function(_0x474fb9,_0x1c3487){return _0xba7dc7['LnHHN'](_0x474fb9,_0x1c3487);},'RyawM':_0xba7dc7[_0x2f8287(0x459)],'FFjif':function(_0x287b5a){return _0x287b5a();},'FUIsq':function(_0x5e8f84,_0x5882a5){return _0x5e8f84===_0x5882a5;},'vIFUe':_0xba7dc7['qCMHC'],'yMnEj':_0xba7dc7[_0x2f8287(0xb41)]};return function(_0x4718ca){var _0x175977=_0x2f8287;try{var _0x2dddba=_0x4718ca&&_0x4718ca[_0x175977(0x432)]?_0x4718ca[_0x175977(0x432)]():0x1*0x1e97+-0x10*-0x10f+-0x2f87;if(!_0x2dddba)return;var _0x307488=_0x4e8ae5[_0x2026b3]||(_0x4e8ae5[_0x2026b3]={}),_0x4023cb=_0x307488[_0x2dddba];if(!_0x4023cb)_0x4023cb=_0x307488[_0x2dddba]={'ptr':_0x2dddba,'firstSeen':Date['now'](),'hits':0x0};_0x4023cb[_0x175977(0x933)]++;if(_0x3b410d){if(!_0x115eb1[_0x2dddba])_0x115eb1[_0x2dddba]={'ptr':_0x2dddba,'kind':_0x2026b3,'firstSeen':Date['now'](),'hits':0x0};_0x115eb1[_0x2dddba]['hits']++;}else{var _0x4d9115=_0x342350[_0x2026b3];if(!_0x4d9115||_0x1fb809['AJDWE'](_0x4d9115[_0x175977(0xaf3)],_0x2dddba)){_0x342350[_0x2026b3]={'ptr':_0x2dddba,'firstSeen':Date[_0x175977(0xa28)](),'hits':0x0,'replaced':!!_0x4d9115};try{var _0x4db37f=_0x49480d[_0x175977(0xcee)+'r'](function(_0x1ceb36){return _0x1ceb36['type']===_0x2026b3;})[0x717+-0x1d16+0x15ff];_0x9cd7fd={'type':_0x2026b3,'atMs':_0x1fb809['pRJic'](Date[_0x175977(0xa28)](),_0x507012),'originalFunc':!!(_0x4db37f&&_0x4db37f['hook']&&typeof _0x4db37f[_0x175977(0xac7)][_0x175977(0x816)+'nalFu'+'nc']===_0x1fb809['RyawM']),'resolveGameAtFire':!!_0x1fb809[_0x175977(0x715)](_0x47f984),'gameSourceAtFire':_0x24366e[_0x175977(0xcf9)+'e']};}catch(_0x2cf4c9){}}}if(_0x1fb809[_0x175977(0xa34)](_0x2026b3,_0x175977(0x50f)+_0x175977(0xca4)+_0x175977(0x413))&&_0x2786ed['on'])try{_0x175977(0x880)!==_0x1fb809[_0x175977(0x76f)]?_0x2636bf(_0x2dddba):_0x3555a6[_0x175977(0x705)]=_0x1fb809['oJoFS'](_0x180b6a,_0x3c6418&&_0x570529['messa'+'ge']||_0x34c3fa);}catch(_0x31082e){}if(!_0xe60680){if(_0x1fb809[_0x175977(0xc88)]==='JlRci')return _0x13246b[_0x175977(0xcf9)+'e']='Runti'+_0x175977(0xc8d)+_0x175977(0x729)+'Game('+')',_0x17bada;else{var _0x4db37f=_0x49480d[_0x175977(0xcee)+'r'](function(_0x5e9169){var _0x5d9a44=_0x175977;return _0x5e9169[_0x5d9a44(0x72e)]===_0x2026b3;})[-0x4*-0x709+0x1c78+0x2*-0x1c4e];if(_0x4db37f&&_0x4db37f[_0x175977(0xac7)])try{if(_0x175977(0xcc1)===_0x175977(0x521))try{_0x503b75['setIt'+'em'](_0x2aff70,_0x38babc['strin'+'gify'](_0x343a11['pos']));}catch(_0x4c3369){}else _0x4db37f[_0x175977(0xac7)]['enabl'+'ed']=![];}catch(_0x4a7e00){}}}}catch(_0x2ba092){}};}function _0x469067(){var _0x8f12c4=_0x2fbbc2;if(_0x49480d[_0x8f12c4(0x25f)+'h'])return!![];if(!window[_0x8f12c4(0xb51)+'WebMo'+_0x8f12c4(0xb1d)]||!window[_0x8f12c4(0xb51)+'WebMo'+_0x8f12c4(0xb1d)][_0x8f12c4(0x295)+'me'])return![];var _0x52cf49=window['Unity'+'WebMo'+_0x8f12c4(0xb1d)][_0x8f12c4(0x295)+'me'];if(!_0x52cf49['plugi'+'ns']||!_0x52cf49['plugi'+'ns'][_0x8f12c4(0x25f)+'h'])return![];_0x218efb=window[_0x8f12c4(0xb51)+_0x8f12c4(0x80a)+'dkit']['Value'+_0x8f12c4(0x268)+'er'],_0x3ea3df=_0x3ea3df||_0x52cf49[_0x8f12c4(0x259)+'ns'][_0xba7dc7[_0x8f12c4(0xc1e)](_0x52cf49[_0x8f12c4(0x259)+'ns']['lengt'+'h'],-0x1*-0x3d1+-0x1de2+0xd09*0x2)];if(!_0x3ea3df||_0xba7dc7[_0x8f12c4(0xcaf)](typeof _0x3ea3df['hookP'+_0x8f12c4(0xa9d)],_0x8f12c4(0x849)+_0x8f12c4(0x584)))return![];for(var _0x226ee8=0x1659+0x18c1+0x1*-0x2f1a;_0x226ee8<_0x22f4bf['lengt'+'h'];_0x226ee8++){var _0x478077=_0x22f4bf[_0x226ee8];try{if(_0xba7dc7[_0x8f12c4(0x343)]==='VVzpH')return{'pos':null,'posAt':null,'inBand':0x0,'cluster':0x0,'reach':0x0};else{var _0x29be18=_0x3ea3df[_0x8f12c4(0x69d)+'refix']({'typeName':_0x478077['type'],'methodName':'Updat'+'e','params':[_0xba7dc7['WBWCa'],_0xba7dc7[_0x8f12c4(0x7a5)]],'returnType':undefined},_0xba7dc7[_0x8f12c4(0x29e)](_0x224919,_0x478077[_0x8f12c4(0x72e)],_0x478077[_0x8f12c4(0xb70)],_0x478077['many']));_0x49480d['push']({'type':_0x478077['type'],'hook':_0x29be18,'keep':_0x478077['keep']});}}catch(_0x9c7596){_0x250741['push'](_0x478077['type']+':\x20'+String(_0x9c7596&&_0x9c7596['messa'+'ge']||_0x9c7596)[_0x8f12c4(0xcf5)](0xab4+-0x1*0x115b+0x6a7,-0x2*0x9fc+-0x1dfb+0x499*0xb));}}return _0xba7dc7[_0x8f12c4(0x3cb)](_0x49480d['lengt'+'h'],-0x5*-0x74f+0x2565*-0x1+0xda);}function _0x282e62(_0x25fea7,_0x29f0f4){var _0x30277c=_0x2fbbc2,_0x263930={'wtcGD':function(_0x49336a,_0x3bcc05){var _0x5ebdb2=_0x4e00;return _0xba7dc7[_0x5ebdb2(0xbea)](_0x49336a,_0x3bcc05);},'oOiiO':_0x30277c(0xc21),'sIamR':function(_0x201160,_0x5737dc){var _0x2e8556=_0x30277c;return _0xba7dc7[_0x2e8556(0xbcd)](_0x201160,_0x5737dc);},'RbIMK':function(_0x5aa112,_0x52c260){return _0x5aa112===_0x52c260;},'jLEIk':function(_0x191d8b,_0x5cc020){var _0x71e53b=_0x30277c;return _0xba7dc7[_0x71e53b(0x2c1)](_0x191d8b,_0x5cc020);},'mePJB':_0x30277c(0xa21),'FXbbm':_0x30277c(0x849)+'ion'};return function(){var _0x2dc93d=_0x30277c;try{var _0x5940f1=_0x4fc906[_0x29f0f4]||(_0x4fc906[_0x29f0f4]={'last':null,'hits':0x0,'setLast':null,'setHits':0x0}),_0x8860f=arguments;if(_0x263930['wtcGD'](_0x25fea7,_0x263930[_0x2dc93d(0x699)])){var _0x5be6eb=_0x8860f[0x649+0x3*-0xc14+0x1df3];if(_0x5be6eb&&_0x263930['sIamR'](typeof _0x5be6eb['val'],'funct'+'ion')){_0x5940f1['last']=_0x5be6eb[_0x2dc93d(0x432)](),_0x5940f1['hits']++;if(_0x8860f[-0x2*0x11ab+0x236d*0x1+-0x16]&&_0x263930['RbIMK'](typeof _0x8860f[-0x39*0xab+-0x1cc2+-0x3a*-0x127][_0x2dc93d(0x432)],'funct'+_0x2dc93d(0x584))){if(_0x263930[_0x2dc93d(0x488)](_0x263930[_0x2dc93d(0x5d4)],'KWCSq'))_0x4c5650['hasMo'+_0x2dc93d(0xd10)]=![],_0x57cf2c[_0x2dc93d(0xae0)+'8']=![],_0x580c1f[_0x2dc93d(0x7ca)+_0x2dc93d(0x3cc)]=0x1b28+0x984*-0x1+-0x11a4;else{var _0x7f353=_0x8860f[0x23c3+0xa28+-0x3*0xf4e]['val']();if(_0x7f353)_0x3a61f3=_0x7f353;}}}}else{_0x8860f[-0x65b*-0x3+0x7c7+0x1*-0x1ad7]&&typeof _0x8860f[0x1586+-0x321+-0x1264][_0x2dc93d(0x432)]===_0x263930['FXbbm']&&(_0x5940f1[_0x2dc93d(0x309)+'st']=_0x8860f[-0x112*0x1+0x11de*-0x1+0x12f1]['val'](),_0x5940f1['setHi'+'ts']++);if(_0x8860f[0x16fe+-0x7f*0x27+-0x3a5]&&typeof _0x8860f[-0xf+0x1f06+-0x1ef7]['val']==='funct'+_0x2dc93d(0x584)){var _0x40b144=_0x8860f[-0x1298+-0x2*0xad0+0x2838]['val']();if(_0x40b144)_0x3a61f3=_0x40b144;}}}catch(_0x354d18){}};}function _0x227639(){var _0x216150=_0x2fbbc2;if(_0x58849c)return!![];if(!_0x3ea3df||_0xba7dc7[_0x216150(0x59a)](typeof _0x3ea3df[_0x216150(0x69d)+'ostfi'+'x'],_0xba7dc7['sbGSO']))return![];var _0x1f7cc8=_0x24f94f['Mouse'+'Look']||[];for(var _0x1fb9ac=-0x3e1*-0x2+0x1138+-0x18fa;_0x1fb9ac<_0x1f7cc8['lengt'+'h'];_0x1fb9ac++){var _0x4dd126=_0x1f7cc8[_0x1fb9ac];try{if(_0xba7dc7[_0x216150(0x200)](_0x216150(0x8ca),_0xba7dc7[_0x216150(0xb64)]))_0x5403a6[_0x216150(0x52b)+_0x216150(0x98d)+'t']=_0x2b2dc1(_0xed0645[_0x216150(0x1f0)]['facto'+'r'])['toFix'+'ed'](0x1113*-0x1+0x74*0x19+0x5c0)+'x';else{if(_0x4dd126[_0x216150(0x48a)]==='float'){if(_0x216150(0xabc)===_0xba7dc7['nITuu'])_0x3ea3df[_0x216150(0x69d)+_0x216150(0xa60)+'x']({'typeName':_0x216150(0x9f6)+_0x216150(0xd5c),'methodName':_0x4dd126[_0x216150(0x5b5)],'params':_0x4dd126['wasmP'+_0x216150(0x3ea)],'returnType':_0x4dd126[_0x216150(0x90b)+'et']},_0xba7dc7[_0x216150(0x8cc)](_0x282e62,_0xba7dc7['eTUjv'],_0x4dd126[_0x216150(0x5b5)]));else{var _0x4a0fc4=_0x343954[_0x119af6][_0x216150(0x6a7)]||[_0x5bcab5[_0x2b0553]['v'],-0x90*0x30+0x1*-0x2682+0x4182,0x1c76*-0x1+-0x1646+0x4*0xcaf];return _0x4a0fc4[_0x216150(0x786)](function(_0x1d2c18){return _0x16f669['round'](_0x1d2c18*(-0x2*0xf95+0x3*-0x5bf+-0x1*-0x30cb))/(-0x364*0x1+0xc73*0x2+-0x66*0x35);})['join']('\x20\x20');}}else _0x4dd126[_0x216150(0x48a)]===_0xba7dc7[_0x216150(0xaaf)]&&_0xba7dc7['pZiDv'](_0x4dd126[_0x216150(0x2c4)+'s'][_0x216150(0x25f)+'h'],0xa*0x89+-0x464+-0xf5)&&_0x4dd126[_0x216150(0x2c4)+'s'][0x799+-0xfd8+0x83f]===_0xba7dc7[_0x216150(0x68e)]&&_0x3ea3df['hookP'+'refix']({'typeName':_0xba7dc7['vBiQU'],'methodName':_0x4dd126[_0x216150(0x5b5)],'params':_0x4dd126['wasmP'+'arams'],'returnType':undefined},_0x282e62(_0xba7dc7[_0x216150(0x8e3)],_0x4dd126['name']));}}catch(_0x4a6916){_0x216150(0x4c9)!=='PwKMC'?_0xf2a6fe[_0x216150(0x3ad)](_0xba7dc7[_0x216150(0x457)](String,_0x4a6916&&_0x4a6916[_0x216150(0x456)+'ge']||_0x4a6916)[_0x216150(0xcf5)](-0x7*0x364+0x1cd*0x13+0xa7b*-0x1,0x14b0+-0x2599+0x1161*0x1)):_0x310865();}}return _0x58849c=!![],!![];}function _0x556b49(){var _0xe0c229=_0x2fbbc2,_0x30ad3e=0x2478+-0x264f+0x1d7;for(var _0x30c681=0x1bff+0x165d*0x1+-0x325c;_0xba7dc7[_0xe0c229(0x822)](_0x30c681,_0x49480d[_0xe0c229(0x25f)+'h']);_0x30c681++){if(_0x49480d[_0x30c681][_0xe0c229(0xac7)]&&_0x49480d[_0x30c681][_0xe0c229(0xac7)][_0xe0c229(0xce8)+_0xe0c229(0x440)]!==undefined)_0x30ad3e++;}return _0x30ad3e;}function _0x4149c6(){var _0x25d105=_0x2fbbc2,_0x5bc223=-0x1d07+0x13*-0xfb+0x64*0x7a;for(var _0x4b39f6=0x4*0x465+0x19dc+-0x2b70;_0x4b39f6<_0x49480d[_0x25d105(0x25f)+'h'];_0x4b39f6++){if(_0x49480d[_0x4b39f6]['hook']&&_0x49480d[_0x4b39f6][_0x25d105(0xac7)]['appli'+'ed'])_0x5bc223++;}return _0x5bc223;}var _0xb30bfa=null,_0x7a9f53=[],_0x4c1c31={},_0x9cd7fd=null;function _0x390ca2(_0x485133){var _0x37929f=_0x2fbbc2;try{if(!_0x218efb||!_0x485133)return null;var _0x3b16f9=new _0x218efb(_0x485133)[_0x37929f(0x2e7)+'assNa'+'me']();return _0xba7dc7[_0x37929f(0x839)](_0x3b16f9,undefined)?null:_0x3b16f9;}catch(_0x3565e7){return null;}}function _0x2ff316(_0x17d99e,_0x55c66d,_0x1b045f){var _0x2765a2=_0x2fbbc2;if(_0x2765a2(0xa08)!==_0xba7dc7[_0x2765a2(0x6ef)]){var _0x56ed61=_0xba7dc7[_0x2765a2(0xaa9)](_0x51ce11);if(!_0x56ed61)return null;if(_0xba7dc7['LpIjA'](_0x55c66d,-0x2e*-0x79+0x59b+-0x1b59*0x1)||_0xba7dc7['uQHkS'](_0x55c66d,_0x1b045f*(0x5f2*-0x1+0xab+0x54b))>_0x56ed61['byteL'+'ength'])return null;var _0x5173b0=[];for(var _0x4dc5f0=-0x12*-0x21a+0xd04+-0x1*0x32d8;_0x4dc5f0<_0x1b045f;_0x4dc5f0++)_0x5173b0[_0x2765a2(0x3ad)](_0x56ed61[_0x2765a2(0x466)+_0x2765a2(0x2d0)](_0xba7dc7['zBgdF'](_0xba7dc7['LONvv'](_0x17d99e,_0x55c66d),_0xba7dc7[_0x2765a2(0x228)](_0x4dc5f0,0x438+-0x11*0xd5+-0x5*-0x1fd)),!![]));return _0x24366e['ok']+=_0x1b045f,_0x5173b0;}else{var _0x547c6e=_0xb04daf['creat'+_0x2765a2(0x9a4)+_0x2765a2(0x25c)](_0x1a67b7);if(_0x4d4e24)_0x547c6e[_0x2765a2(0x316)+_0x2765a2(0x9b2)]=_0x413a00;if(_0x3090d7!=null)_0x547c6e[_0x2765a2(0x4f4)+_0x2765a2(0x241)]=_0x132a72;return _0x547c6e;}}var _0x294f72={'PhotonNetworkSync':[[_0x2fbbc2(0x593),_0x2fbbc2(0x274)+_0x2fbbc2(0xb45)],['0x20','healt'+'h'],[_0xba7dc7[_0x2fbbc2(0x338)],'trans'+_0x2fbbc2(0x7dc)],['0x28',_0xba7dc7[_0x2fbbc2(0x6e2)]],[_0xba7dc7['evyGj'],_0xba7dc7[_0x2fbbc2(0xc55)]]],'NetworkPlayerAnimations':[[_0x2fbbc2(0x593),'capsu'+'le'],[_0x2fbbc2(0x356),_0xba7dc7[_0x2fbbc2(0x6f8)]]],'NPC_Cotroller':[[_0x2fbbc2(0x889),_0x2fbbc2(0x624)+'le'],['0xb4',_0x2fbbc2(0x787)+_0x2fbbc2(0x7d2)+'th'],[_0x2fbbc2(0xbaf),_0xba7dc7[_0x2fbbc2(0x8cf)]],[_0xba7dc7[_0x2fbbc2(0x1e7)],'targe'+_0x2fbbc2(0x7d2)+'th2'],[_0x2fbbc2(0xc47),'trans'+'form']],'EnemyBot':[[_0x2fbbc2(0x80f),'trans'+_0x2fbbc2(0x7dc)]]},_0x186f98={'PhotonNetworkSync':[['0x58',_0x2fbbc2(0xc85)],[_0xba7dc7[_0x2fbbc2(0x862)],_0x2fbbc2(0x246)+_0x2fbbc2(0x45e)],['0x5c','id']]};function _0x262561(_0x346e3d,_0xbbfb29){var _0x5bd264=_0x2fbbc2;if(_0xba7dc7[_0x5bd264(0xcb5)]!==_0xba7dc7['hWKpd']){var _0x4e3b9d=_0x2cad2b[_0x346e3d]||[],_0x373893={'kind':_0x346e3d,'ptr':_0xba7dc7['QOeYU']('0x',_0xbbfb29[_0x5bd264(0x6ac)+'ing'](0xb03+0x2129+-0x6*0x75a)),'pos':null,'posAt':null,'allVecs':[],'scalars':[],'refs':{}};for(var _0x2bd04d=-0x1d63+-0x7*-0x37a+0x50d;_0xba7dc7[_0x5bd264(0x56c)](_0x2bd04d,_0x4e3b9d['lengt'+'h']);_0x2bd04d++){if(_0x4e3b9d[_0x2bd04d][-0x1707+0x26f4+-0xfec]!=='v3')continue;var _0x24c690=_0xba7dc7[_0x5bd264(0x3a8)](_0x2ff316,_0xbbfb29,_0x4e3b9d[_0x2bd04d][-0xe6d+-0x256a+0x17*0x241],0x1468+-0x1786+0x321);if(!_0x24c690)continue;_0x373893['allVe'+'cs'][_0x5bd264(0x3ad)]({'o':'0x'+_0x4e3b9d[_0x2bd04d][-0x75b*0x4+-0x1853+0x1*0x35bf][_0x5bd264(0x6ac)+_0x5bd264(0x21d)](0x95c+0x738+-0x1084),'v':_0x24c690});}var _0x207e8e=0x37*-0x1f+-0x382*0x1+0xa2b,_0x25030a=_0xba7dc7[_0x5bd264(0x665)](_0x4ea8d8,_0x373893['allVe'+'cs'],_0x4c2cec());_0x373893[_0x5bd264(0x30b)]=_0x25030a[_0x5bd264(0x30b)],_0x373893[_0x5bd264(0x75f)]=_0x25030a['posAt'],_0x373893['inBan'+'d']=_0x25030a['inBan'+'d'],_0x373893[_0x5bd264(0xa67)+'er']=_0x25030a['clust'+'er'],_0x373893[_0x5bd264(0x5d7)]=_0x25030a[_0x5bd264(0x5d7)],void _0x207e8e;var _0x259cd4=_0x294f72[_0x346e3d],_0x510b4e=_0x186f98[_0x346e3d];if(_0x510b4e){if(_0xba7dc7[_0x5bd264(0x345)](_0xba7dc7['dOLfF'],_0x5bd264(0x21a)))try{_0x2080fe(_0x5db1dc);}catch(_0x1267c7){}else{_0x373893[_0x5bd264(0x659)]={};for(var _0x5116bf=0x2*0x2e+-0x137b*0x1+0x131f;_0xba7dc7[_0x5bd264(0x327)](_0x5116bf,_0x510b4e[_0x5bd264(0x25f)+'h']);_0x5116bf++){var _0x334ebf=_0xba7dc7[_0x5bd264(0x8cc)](_0x35121f,_0xba7dc7['sBifi'](_0xbbfb29,parseInt(_0x510b4e[_0x5116bf][-0x22c2+-0x5ec*0x5+-0x499*-0xe],-0x1887+-0x17fc+-0x1*-0x3093)),_0xba7dc7[_0x5bd264(0x7a5)]);if(_0x334ebf!==undefined)_0x373893[_0x5bd264(0x659)][_0x510b4e[_0x5116bf][-0x1259+0x1*-0xdd5+0x202f]]=_0x334ebf;}}}if(_0x259cd4)for(var _0x489abb=-0x57+0x14d*0x1e+-0x26af;_0x489abb<_0x259cd4['lengt'+'h'];_0x489abb++){var _0x107adc=_0x35121f(_0xbbfb29+_0xba7dc7[_0x5bd264(0x6b2)](parseInt,_0x259cd4[_0x489abb][-0x18f6+0x130f+0x1*0x5e7],0x34*0x4c+0x1052+0x1fb2*-0x1),'u32');if(_0x107adc)_0x373893[_0x5bd264(0xc2e)][_0x259cd4[_0x489abb][0x581+-0x218d+0x1c0d]]='0x'+(_0x107adc>>>0x24ad+0xa13*-0x1+0x1c6*-0xf)[_0x5bd264(0x6ac)+_0x5bd264(0x21d)](-0x17c1+0x7*0x438+-0x5b7);}return _0x373893['scala'+'rs']=_0x4e3b9d['filte'+'r'](function(_0x172f50){var _0x288369=_0x5bd264;return _0x172f50[-0x56*0x73+0x20c9+0x5da]===_0x288369(0xb6c)||_0x172f50[0x1*0x158+0x23ab+-0x2502]===_0x288369(0xc77);})[_0x5bd264(0x786)](function(_0x317e0f){var _0x550252=_0x5bd264;return{'o':_0xba7dc7['fCBlQ']('0x',_0x317e0f[-0x305*0x4+-0x1*-0x2ee+-0x926*-0x1][_0x550252(0x6ac)+_0x550252(0x21d)](-0xb*-0xa9+-0x2299+0x1f5*0xe)),'v':_0xba7dc7[_0x550252(0x3ff)](_0x35121f,_0xbbfb29+_0x317e0f[0x18c7+-0x13ba+-0x50d],_0x317e0f[-0x58e*0x7+0xc58+0x1a8b])};})['filte'+'r'](function(_0x278ecc){return _0xba7dc7['shuEN'](_0x278ecc['v'],undefined)&&isFinite(_0x278ecc['v']);})['slice'](0x2663+-0x13dc+0x117*-0x11,-0x1804+0x3bb*-0x3+-0x13*-0x1db),_0x373893;}else{var _0x1716a7='';for(var _0x36a3d7=-0x1*0x18f9+0x173b+0x1be;_0x36a3d7<_0x1f7d08['lengt'+'h'];_0x36a3d7++){var _0x315d5f=_0x389a6b[_0x36a3d7]['toStr'+_0x5bd264(0x21d)](0x11*-0xff+0x5d5*0x2+0x555);_0x1716a7+=_0xba7dc7['hObKZ'](_0x315d5f['lengt'+'h']<-0x2f*-0xe+0x1fe3+-0x1*0x2273?'0':'',_0x315d5f);}return _0x1716a7;}}function _0x887b8a(){var _0x1c4245=_0x2fbbc2,_0x509723={'ZZvfe':_0xba7dc7[_0x1c4245(0x3fb)],'jETiC':_0xba7dc7[_0x1c4245(0x823)],'khnmB':'u32','psFdr':_0xba7dc7[_0x1c4245(0x350)],'wJPhL':'f64','lwPAN':function(_0x5a75f2,_0x4e8675){var _0x3fb058=_0x1c4245;return _0xba7dc7[_0x3fb058(0xb63)](_0x5a75f2,_0x4e8675);}},_0x556688={'players':[],'bots':[],'enemies':[],'controllers':[],'camera':null,'cameraFrom':null,'playerList':null,'managers':{},'wasmTypes':null},_0x505683=_0x342350['FPSco'+_0x1c4245(0xca4)+_0x1c4245(0x413)]&&_0x342350['FPSco'+_0x1c4245(0xca4)+_0x1c4245(0x413)]['ptr']||0xed*0x1b+-0x1f2e+-0x1*-0x62f,_0x51ca56=_0x4e8ae5['Photo'+'nNetw'+'orkSy'+'nc']||{},_0x491dc6=Object[_0x1c4245(0x509)](_0x51ca56);for(var _0xab358c=-0x3a2+0x4a4*-0x2+0xcea;_0xba7dc7[_0x1c4245(0x604)](_0xab358c,_0x491dc6['lengt'+'h'])&&_0xba7dc7[_0x1c4245(0x667)](_0xab358c,-0x29*-0x2+0x2*0x10d9+0x14e*-0x1a);_0xab358c++){var _0x3cdeab=_0x51ca56[_0x491dc6[_0xab358c]],_0x356d3c=_0xba7dc7[_0x1c4245(0x8cc)](_0x262561,_0xba7dc7['nEsLR'],_0x3cdeab[_0x1c4245(0xaf3)]);_0x356d3c[_0x1c4245(0x933)]=_0x3cdeab[_0x1c4245(0x933)],_0x356d3c[_0x1c4245(0x2a4)+_0x1c4245(0x956)+'s']=_0xba7dc7[_0x1c4245(0xb49)](_0x3cdeab[_0x1c4245(0x2a4)+'Seen'],_0x507012),_0x356d3c['isLoc'+'al']=!!_0x505683&&_0x356d3c['refs']['fps']===_0xba7dc7['LBIQq']('0x',_0x505683['toStr'+_0x1c4245(0x21d)](0x1*0xe90+-0xecd+0x4d));if(_0x356d3c['refs'][_0x1c4245(0x1f1)+'h']){if(_0xba7dc7[_0x1c4245(0x7cc)]===_0xba7dc7['mWvJo'])_0x173ff3[_0x1c4245(0x2cc)+_0x1c4245(0xb62)]['write'+_0x1c4245(0x2e1)](_0x4e2c6e)[_0x1c4245(0x712)](_0x4e8c40,function(){_0x2af156();});else{var _0x592a1e=parseInt(_0x356d3c[_0x1c4245(0xc2e)][_0x1c4245(0x1f1)+'h'],-0xe39+-0x1591+-0x1*-0x23da);_0x356d3c[_0x1c4245(0x1f1)+'h']=_0xba7dc7['uUZko'](_0x5400e1,_0x592a1e,_0x1c4245(0xc41)+_0x1c4245(0x652)+'pt',_0x1c4245(0xa57));}}_0x556688[_0x1c4245(0x7fc)+'rs']['push'](_0x356d3c);}_0x556688['playe'+'rCoun'+'t']=_0x491dc6['lengt'+'h'];var _0x453ef3=_0x4e8ae5[_0x1c4245(0xaed)+'otrol'+'ler']||{},_0x39f38c=Object['keys'](_0x453ef3);for(var _0x18bb6f=-0x7d*-0x4f+-0x12f0+0x13a3*-0x1;_0x18bb6f<_0x39f38c[_0x1c4245(0x25f)+'h']&&_0x18bb6f<0x2123*-0x1+-0x1*0x1b7f+-0x1e5d*-0x2;_0x18bb6f++){if(_0x1c4245(0xbfe)==='PBAUI'){var _0x52e8e9=_0xba7dc7['fwBFR']['split']('|'),_0x598b6f=0xe*-0x287+-0x1*0x16d9+0x3a3b;while(!![]){switch(_0x52e8e9[_0x598b6f++]){case'0':if(_0xbf4b7[_0x1c4245(0xc2e)]['healt'+'h'])_0xbf4b7['healt'+'h']=_0xba7dc7['GDdwg'](_0x5400e1,parseInt(_0xbf4b7[_0x1c4245(0xc2e)][_0x1c4245(0x1f1)+'h'],-0x2085+-0xba3+0x2c38),_0xba7dc7[_0x1c4245(0xcde)],'obfI');continue;case'1':_0x556688[_0x1c4245(0x270)][_0x1c4245(0x3ad)](_0xbf4b7);continue;case'2':_0xbf4b7[_0x1c4245(0x2a4)+'SeenM'+'s']=_0xba7dc7[_0x1c4245(0x55d)](_0x453ef3[_0x39f38c[_0x18bb6f]][_0x1c4245(0x2a4)+'Seen'],_0x507012);continue;case'3':var _0xbf4b7=_0xba7dc7[_0x1c4245(0x665)](_0x262561,_0xba7dc7[_0x1c4245(0x52e)],_0x453ef3[_0x39f38c[_0x18bb6f]]['ptr']);continue;case'4':_0xbf4b7['hits']=_0x453ef3[_0x39f38c[_0x18bb6f]][_0x1c4245(0x933)];continue;}break;}}else{var _0x2eb2c6=_0x443f72(_0xba7dc7[_0x1c4245(0xa81)],_0x1c4245(0x54d)+'rd'+(_0x4b1b36?'\x20on':'')),_0x361194=_0x59bc72(_0x1c4245(0x36c),'sk-ca'+'rd-he'+'ad'),_0x33ab41=_0x13233(_0x1c4245(0x36c),_0x1c4245(0x54d)+'rd-ti'+_0x1c4245(0x5bc),_0xba7dc7[_0x1c4245(0x258)](_0xba7dc7[_0x1c4245(0xc3c)](_0x1c4245(0x4c2)+'ng>',_0x29ec0f),_0x1c4245(0x6d6)+_0x1c4245(0x384)));_0x361194[_0x1c4245(0xd16)+_0x1c4245(0x9ca)+'d'](_0x33ab41);var _0x401b58=_0x1770b0(_0xba7dc7[_0x1c4245(0xa81)],'sk-mb'+_0x1c4245(0x3e4));return _0x2eb2c6['appen'+_0x1c4245(0x9ca)+'d'](_0x361194),_0x2eb2c6[_0x1c4245(0xd16)+_0x1c4245(0x9ca)+'d'](_0x401b58),_0x2eb2c6[_0x1c4245(0xaf7)]=_0x401b58,_0x2eb2c6[_0x1c4245(0x4e1)]=_0x33ab41,_0x2eb2c6;}}_0x556688[_0x1c4245(0x28f)+'unt']=_0x39f38c[_0x1c4245(0x25f)+'h'];var _0x1a8d6d=_0x4e8ae5['FPSco'+_0x1c4245(0xca4)+_0x1c4245(0x413)]||{},_0x52ff80=Object[_0x1c4245(0x509)](_0x1a8d6d);for(var _0x1fe2e3=-0x1060*0x2+0x1f3c*0x1+0x184;_0x1fe2e3<_0x52ff80[_0x1c4245(0x25f)+'h']&&_0x1fe2e3<-0x2063*0x1+0x1562+0xb19;_0x1fe2e3++){var _0x7a28a5=_0xba7dc7[_0x1c4245(0xaae)](_0x262561,'FPSco'+'ntrol'+'ler',_0x1a8d6d[_0x52ff80[_0x1fe2e3]][_0x1c4245(0xaf3)]);_0x7a28a5['hits']=_0x1a8d6d[_0x52ff80[_0x1fe2e3]][_0x1c4245(0x933)],_0x7a28a5[_0x1c4245(0xcdf)+'al']=_0x1a8d6d[_0x52ff80[_0x1fe2e3]][_0x1c4245(0xaf3)]===_0x505683,_0x556688['contr'+_0x1c4245(0xabd)+'s'][_0x1c4245(0x3ad)](_0x7a28a5);}_0x556688[_0x1c4245(0x8fa)+_0x1c4245(0xabd)+'Count']=_0x52ff80[_0x1c4245(0x25f)+'h'];var _0x3c54ed=_0x556688[_0x1c4245(0x7fc)+'rs']['conca'+'t'](_0x556688[_0x1c4245(0x270)]);for(var _0x5919f5=0xefd+0x1*-0x363+0xa5*-0x12;_0x5919f5<_0x3c54ed[_0x1c4245(0x25f)+'h'];_0x5919f5++){if('yudVo'!==_0xba7dc7[_0x1c4245(0x535)]){if(_0x3c54ed[_0x5919f5][_0x1c4245(0xcdf)+'al'])continue;_0x556688[_0x1c4245(0x8d8)+'es'][_0x1c4245(0x3ad)](_0x3c54ed[_0x5919f5]);}else{_0x29a94f['ok']++;switch(_0xd4490c){case'u8':return _0x2ceabe['getUi'+_0x1c4245(0x8ee)](_0x1f336e);case'i8':return _0x2c6d2d[_0x1c4245(0xa7e)+'t8'](_0x1f8ecd);case _0x509723[_0x1c4245(0x4eb)]:return _0x30d4ff[_0x1c4245(0xa7e)+_0x1c4245(0x7df)](_0x475618,!![]);case _0x509723[_0x1c4245(0x1fd)]:return _0x4f56ad[_0x1c4245(0x5a2)+'nt16'](_0x50435c,!![]);case _0x1c4245(0xc77):return _0x99f0e[_0x1c4245(0xa7e)+_0x1c4245(0x339)](_0x2b79b0,!![]);case _0x509723[_0x1c4245(0xd4b)]:return _0x28db10[_0x1c4245(0x5a2)+'nt32'](_0xa479df,!![]);case _0x509723['psFdr']:return _0x7bff7e['getFl'+'oat32'](_0x4ade96,!![]);case _0x509723[_0x1c4245(0xca2)]:return _0x4a0d21[_0x1c4245(0x466)+'oat64'](_0x1536df,!![]);case'v2':case'v3':case'v4':return _0x58071b[_0x1c4245(0x466)+'oat32'](_0x1bbf08,!![]);default:return _0x4cde9c[_0x1c4245(0xa7e)+'t32'](_0x31a090,!![]);}}}_0x556688['enemy'+_0x1c4245(0x627)]=_0x556688[_0x1c4245(0x8d8)+'es'][_0x1c4245(0x25f)+'h'];var _0x203d68={'TDM_GameManager':0x2c,'GG_GameManager':0x14},_0x384361={'TDM_GameManager':0x50,'GG_GameManager':0x5c};for(var _0x1a1eaa in _0x342350){var _0x18ad58=_0x342350[_0x1a1eaa];if(!_0x18ad58||!_0x18ad58[_0x1c4245(0xaf3)])continue;if(!_0xba7dc7[_0x1c4245(0xd63)](_0x1a1eaa,_0x203d68))continue;_0x556688[_0x1c4245(0x359)+'ers'][_0x1a1eaa]='0x'+_0x18ad58['ptr'][_0x1c4245(0x6ac)+'ing'](0x796+-0x39*0x13+-0x34b);var _0x29d554=_0xba7dc7[_0x1c4245(0x8cc)](_0x35121f,_0xba7dc7[_0x1c4245(0x4fb)](_0x18ad58[_0x1c4245(0xaf3)],_0x203d68[_0x1a1eaa]),_0x1c4245(0xc79)),_0x13ef10=_0x35121f(_0x18ad58['ptr']+_0x384361[_0x1a1eaa],_0xba7dc7[_0x1c4245(0x9a7)]);_0x29d554&&_0xba7dc7[_0x1c4245(0x4e0)](_0x556688[_0x1c4245(0x6c2)+'a'],null)&&(_0x556688['camer'+'a']=_0xba7dc7[_0x1c4245(0xa19)]('0x',_0xba7dc7['MDYmJ'](_0x29d554,0x1ebf*-0x1+-0xe3*-0x1d+-0x4*-0x142)[_0x1c4245(0x6ac)+_0x1c4245(0x21d)](0x12b4+-0xfb1*-0x2+-0x3206)),_0x556688[_0x1c4245(0x6c2)+_0x1c4245(0x945)]=_0x1a1eaa);if(_0x13ef10&&_0xba7dc7[_0x1c4245(0xbea)](_0x556688['playe'+_0x1c4245(0x35b)],null))_0x556688[_0x1c4245(0x7fc)+'rList']=_0xba7dc7[_0x1c4245(0x62b)]('0x',(_0x13ef10>>>0x10d2+-0x2*-0x5ab+-0x1c28)['toStr'+'ing'](-0x1589+-0x5d4+0x19d*0x11));}if(!_0x556688[_0x1c4245(0x7fc)+'rCoun'+'t']&&!_0x556688['botCo'+_0x1c4245(0x993)]&&!_0x556688['camer'+'a'])_0x556688['note']=_0xba7dc7['LLGBF'](_0x1c4245(0x7e9)+_0x1c4245(0x792)+_0x1c4245(0xcfa)+'kSync'+_0x1c4245(0x82e)+_0x1c4245(0xaed)+'otrol'+'ler\x20a'+_0x1c4245(0x895)+_0x1c4245(0xd76)+_0x1c4245(0xad3)+'ger.\x20'+_0x1c4245(0x2a1)+'is\x20wh'+_0x1c4245(0x9ab),'the\x20l'+_0x1c4245(0x310)+'looks'+'\x20like'+_0x1c4245(0x678)+'n\x20the'+_0x1c4245(0x519)+'n\x20INS'+_0x1c4245(0xc70)+_0x1c4245(0x517)+_0x1c4245(0x2ab)+_0x1c4245(0xd91)+_0x1c4245(0x501)+_0x1c4245(0x47e)+'.');else{if(!_0x556688[_0x1c4245(0x351)+_0x1c4245(0x627)]){if(_0xba7dc7['hxoJB'](_0xba7dc7['KWbAH'],_0x1c4245(0x43e)))return _0x260cd8[_0x1c4245(0xd01)+'ified']=![],_0xf2c8e1[_0x1c4245(0x538)]=_0x1c4245(0xab0)+_0x1c4245(0x46a)+'s\x20unr'+_0x1c4245(0x946)+'le',null;else _0x556688[_0x1c4245(0xcd9)]=_0xba7dc7[_0x1c4245(0x9e7)](_0x1c4245(0xba9)+'rs\x20ar'+'e\x20pre'+_0x1c4245(0x718)+_0x1c4245(0x7c9)+'one\x20a'+_0x1c4245(0x1e8)+_0x1c4245(0x472)+_0x1c4245(0x968)+_0x1c4245(0x291)+_0x1c4245(0xb79)+_0x1c4245(0x230)+_0x1c4245(0x47c)+'k\x20',_0xba7dc7['BxRIt']);}}try{if(_0xba7dc7['IywKE']===_0x1c4245(0x7d9))_0x32fa2f['st'][_0x1c4245(0xc3d)+'ritte'+'n']=_0x595ae1['froun'+'d'](_0x4b218a),_0x286e10++,_0xbe9fc5[_0x1c4245(0x3ad)](_0x509723[_0x1c4245(0x29f)]('0x',_0x10710a['o'][_0x1c4245(0x6ac)+'ing'](0xc*0x2b3+-0xc2e*0x1+-0xa13*0x2)));else{var _0xbd6e93=window['Unity'+_0x1c4245(0x80a)+'dkit']&&window['Unity'+'WebMo'+_0x1c4245(0xb1d)]['Runti'+'me'],_0x321b5e=_0xbd6e93&&_0xbd6e93['inter'+'nalWa'+_0x1c4245(0xb42)+'es']||[],_0x495a99={};for(var _0x2c8536=0x2*0x238+0x1a*-0xb+-0x352;_0x2c8536<_0x321b5e['lengt'+'h']&&_0xba7dc7['wmdeH'](_0x2c8536,0x25*0x8f+0x29*0x11+-0x7c4);_0x2c8536++){if(_0x1c4245(0xb5d)===_0xba7dc7['piMSV'])return _0x19afac[_0x1c4245(0xcf9)+'e']=_0x1c4245(0x259)+_0x1c4245(0xb57)+'ntime'+_0x1c4245(0x4f1)+'e',_0x715509[_0x1c4245(0xd5a)];else{var _0x861425=_0x321b5e[_0x2c8536][_0x1c4245(0x2c4)+'s']['join'](',')+'\x20->\x20'+(_0x321b5e[_0x2c8536]['retur'+'nType']||'void');_0x495a99[_0x861425]=(_0x495a99[_0x861425]||-0x2*-0xe9a+0x1*0x4cf+-0x2203)+(0x1cf1+-0x12*0x1cf+0x1cf*0x2);}}_0x556688[_0x1c4245(0xaaa)+'ypes']=_0x495a99;}}catch(_0x52f4ef){}return _0x556688;}function _0x5400e1(_0x54e4a2,_0x90f2,_0x5679cc){var _0x10142e=_0x2fbbc2,_0x366fe7={'ouKNS':function(_0x5c5833,_0x27568a){return _0x5c5833+_0x27568a;},'nEKlS':_0x10142e(0x7f6)};if(_0x10142e(0x710)===_0xba7dc7[_0x10142e(0x60f)]){try{var _0xb576aa=_0x2cad2b[_0x90f2]||[];for(var _0x251ba0=0x2515*0x1+0x13*0x47+-0x2a5a;_0xba7dc7[_0x10142e(0xa10)](_0x251ba0,_0xb576aa[_0x10142e(0x25f)+'h']);_0x251ba0++){if(_0xb576aa[_0x251ba0][0x1b46*-0x1+0x67*-0x1+-0x1*-0x1bae]!==_0x5679cc)continue;var _0x173092=_0xb576aa[_0x251ba0][0x7d8+0x3*0xa8e+-0x2782];if(_0x5679cc[_0x10142e(0x7b8)+'Of'](_0xba7dc7['AbAGD'])===0x132c+-0x8*-0x259+-0x25f4){if(_0xba7dc7['BMGIl']('sfaUN',_0xba7dc7['qRLJR'])){var _0x696736=_0xba7dc7[_0x10142e(0x3a8)](_0x184bdf,_0x54e4a2,_0x173092,_0x5679cc);if(!_0x696736)return null;_0x696736['o']=_0x173092,_0x696736['k']=_0x5679cc;var _0x40e612=_0x4b83d9([_0x696736]);if(!_0x40e612[_0x10142e(0xa0b)][_0x10142e(0x25f)+'h'])return null;return _0x40e612['rows'][0xe65*-0x1+-0x1*-0x14a3+-0x22*0x2f];}else{var _0x339e9a={};for(var _0x5c6222 in _0x20914b){var _0x460a54=_0x1d4d65[_0x5c6222];for(var _0x44024d=-0xeb7+0x1*-0x212b+0x17f1*0x2;_0x44024d<_0x460a54[_0x10142e(0x25f)+'h'];_0x44024d++){_0x339e9a[_0x366fe7[_0x10142e(0x95e)](_0x5c6222+_0x366fe7[_0x10142e(0x609)],_0x460a54[_0x44024d]['o'][_0x10142e(0x6ac)+_0x10142e(0x21d)](0x1d3+-0x1*0x1a1e+-0x2b*-0x91))]=_0x460a54[_0x44024d]['v'];}}return _0x339e9a;}}var _0x18a9b6=_0xba7dc7['mJPfX'](_0x35121f,_0x54e4a2+_0x173092,_0x5679cc);if(_0xba7dc7[_0x10142e(0x619)](_0x18a9b6,undefined))return null;return{'o':_0xba7dc7[_0x10142e(0x588)]('0x',_0x173092[_0x10142e(0x6ac)+_0x10142e(0x21d)](-0x1*-0x1fb4+-0x5d8+-0x4*0x673)),'v':_0x18a9b6};}}catch(_0x1a1489){}return null;}else _0x1e658a[_0x10142e(0xa14)+'em'](_0x431010,_0x40add7['strin'+'gify'](_0x431cba[_0x10142e(0x30b)]));}function _0x1f0aaa(){var _0x42986e=_0x2fbbc2,_0x2881c6={'GDGct':function(_0x216ffc,_0x20c16f){return _0x216ffc!==_0x20c16f;},'OfPFA':_0x42986e(0xbe2),'KOmuj':_0x42986e(0x3b7)+'t','JTqyQ':'color'+':','llFFi':_0x42986e(0x860)+'lt\x20si'+'nce\x20f'+_0x42986e(0x3c8)+_0x42986e(0x24e)+_0x42986e(0xbb5)+_0x42986e(0x77a)+_0x42986e(0x20b)};if(_0xba7dc7[_0x42986e(0x81b)]!==_0xba7dc7[_0x42986e(0x48d)]){var _0x3aff9f={};_0x24366e['ok']=0x13*0x1b5+0x148d+-0x34fc,_0x24366e['faile'+'d']=-0x1*-0x269+-0xc65+0xd5*0xc,_0x24366e[_0x42986e(0x8ea)+_0x42986e(0x2da)]=null;var _0x111d0d=Object[_0x42986e(0x509)](_0x2cad2b);for(var _0x3e5d22=0x120+-0x4*-0x368+-0xec0;_0x3e5d22<_0x111d0d[_0x42986e(0x25f)+'h'];_0x3e5d22++){if(_0x42986e(0x81d)==='EKLcP'){var _0x5e9058=_0x111d0d[_0x3e5d22],_0x326a1d=_0x342350[_0x5e9058];if(!_0x326a1d||!_0x326a1d[_0x42986e(0xaf3)])continue;var _0x2c8be5=_0x2cad2b[_0x5e9058]||[],_0x44a7f5=[];for(var _0x33f23b=0x1ea0+0x2*0x296+-0x4f*0x74;_0x33f23b<_0x2c8be5[_0x42986e(0x25f)+'h'];_0x33f23b++){if(_0xba7dc7[_0x42986e(0x345)](_0xba7dc7[_0x42986e(0x360)],_0x42986e(0x3bc))){var _0x1e1573=_0x2c8be5[_0x33f23b][-0x107b*-0x1+0x67*-0x40+0x1*0x945],_0x565e68=_0x2c8be5[_0x33f23b][-0x60+0x1*0x1418+0x1*-0x13b7];if(_0x565e68['index'+'Of'](_0x42986e(0x30f))===0x1a2*0x15+0x2*0x123+-0x2490){var _0x1cc08f=_0x184bdf(_0x326a1d['ptr'],_0x1e1573,_0x565e68);if(!_0x1cc08f)continue;_0x1cc08f['o']=_0x1e1573,_0x1cc08f['k']=_0x565e68,_0x44a7f5['push'](_0x1cc08f);}else{if('MePVO'!==_0x42986e(0x73e)){_0x547fc5[_0x42986e(0x417)+_0x42986e(0x592)+'ault'](),_0x81ffa7(!_0x428405[_0x42986e(0xa29)]);return;}else{var _0x27e3da=_0x35121f(_0xba7dc7[_0x42986e(0x471)](_0x326a1d[_0x42986e(0xaf3)],_0x1e1573),_0x565e68);if(_0x27e3da===undefined)continue;var _0x16bbc8={'o':_0x1e1573,'k':_0x565e68,'v':_0x27e3da};if(_0x565e68==='v2'||_0x565e68==='v3'||_0xba7dc7[_0x42986e(0x626)](_0x565e68,'v4')){if(_0xba7dc7['bCBTL'](_0xba7dc7[_0x42986e(0x89c)],_0x42986e(0x21e))){var _0x3361b4=_0x565e68==='v2'?-0x2c*-0x5+-0x43+0x1*-0x97:_0x565e68==='v3'?-0x1fa0+0x19e7+0x5bc*0x1:0x1a03*0x1+-0x255b+0xb5c,_0x13239a=_0xba7dc7[_0x42986e(0x6a1)](_0x2ff316,_0x326a1d[_0x42986e(0xaf3)],_0x1e1573,_0x3361b4);_0x13239a&&(_0x16bbc8[_0x42986e(0x6a7)]=_0x13239a,_0x16bbc8['v']=_0x13239a[0xb64+0x9f*-0x1b+0x561]);}else _0x348b7b();}_0x44a7f5[_0x42986e(0x3ad)](_0x16bbc8);}}}else return _0x426ed8&&_0x58f51b[_0x42986e(0x78d)+'r']?_0x2d9ed9[_0x42986e(0x78d)+'r']['byteL'+_0x42986e(0xa0c)]:-0x38+0x3*0x37b+-0xa39;}if(_0x44a7f5[_0x42986e(0x25f)+'h']){var _0x115d4d=_0xba7dc7[_0x42986e(0x8a4)](_0x4b83d9,_0x44a7f5);_0x3aff9f[_0x5e9058]=_0x115d4d['rows'],_0x4c1c31[_0x5e9058]={'key':_0x115d4d[_0x42986e(0x349)],'sane':_0x115d4d[_0x42986e(0x24a)],'checked':_0x115d4d['check'+'ed'],'keyConsistent':_0x115d4d[_0x42986e(0xc8f)+'nsist'+'ent'],'keySource':_0x115d4d['keySo'+_0x42986e(0xaec)]};}}else{var _0x4a2fec=_0x4605e5[_0x42986e(0x539)];if(!_0x4a2fec||_0x2881c6['GDGct'](_0x4a2fec['__sak'+_0x42986e(0x95c)],_0x237b3f))return;try{if(_0x4a2fec['kind']===_0x2881c6[_0x42986e(0x423)]){_0x59d2e1()['set']({'host':_0x4a2fec['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x4a2fec['kind']===_0x2881c6[_0x42986e(0x394)])_0x4df2dc()[_0x42986e(0xab2)](_0x4a2fec[_0x42986e(0x3b7)+'t']);}catch(_0x4fe442){_0x4a8a09['warn']('%c[sa'+_0x42986e(0xb7a)+'\x20pane'+_0x42986e(0xd09)+_0x42986e(0x762)+_0x42986e(0xd67),_0x2881c6['JTqyQ']+_0xe3a47f,_0x4fe442);}}}return _0x3aff9f;}else _0x3f754a['warni'+_0x42986e(0x78e)]['push'](_0x2881c6['llFFi']+_0x57c4fd[_0x42986e(0x799)+_0x42986e(0x6f3)+'eplac'+'ed']['join'](',\x20'));}function _0x4b83d9(_0x47b221){var _0x2a7e56=_0x2fbbc2,_0x1c3b57=-0x7e5+0x359*-0x1+0xb3e,_0x2283a8=0x8*0xbf+-0x259a*0x1+0x1fa2*0x1,_0xd8eaf=null;for(var _0x38c41d=0x2400+0x5d*-0x7+-0x2175;_0x38c41d<_0x47b221['lengt'+'h'];_0x38c41d++){var _0x28c748=_0x47b221[_0x38c41d];if(_0xba7dc7[_0x2a7e56(0x2df)](_0x28c748['k'][_0x2a7e56(0x7b8)+'Of']('obf'),0x292*-0x2+0x95*-0x3+0x6e3))continue;_0x28c748['v']=_0x3d15b7(_0x28c748['k'],_0x28c748['hidde'+'n'],_0x28c748[_0x2a7e56(0x756)+_0x2a7e56(0x97f)+'t0']),_0x28c748[_0x2a7e56(0x8d6)+'ed']=_0x28c748['keyAt'+'Offse'+'t0'],_0x28c748['raw']=_0xba7dc7['sBifi'](_0xba7dc7[_0x2a7e56(0x462)](_0xba7dc7[_0x2a7e56(0x368)](_0xba7dc7['SFXLw'](_0xba7dc7['BDNfx'](_0xba7dc7['sBifi']('hid=',_0x28c748['hidde'+'n'])+(_0x2a7e56(0x41e)+'='),_0x28c748[_0x2a7e56(0xaa8)]),_0x28c748[_0x2a7e56(0x4ba)]?_0x2a7e56(0x218)+'VE':''),_0xba7dc7['ogYEt']),_0x28c748[_0x2a7e56(0x756)+_0x2a7e56(0x97f)+'t0'])+'\x20hex=',_0x28c748[_0x2a7e56(0x319)]);if(_0xba7dc7[_0x2a7e56(0x839)](_0xd8eaf,null))_0xd8eaf=_0x28c748[_0x2a7e56(0x756)+_0x2a7e56(0x97f)+'t0'];_0x2283a8++,_0x326598(_0x28c748)?_0xba7dc7['HfZtH'](_0xba7dc7[_0x2a7e56(0x436)],_0x2a7e56(0x632))?_0xba7dc7['CDBRy'](_0x545d9a,_0xba7dc7['fhjmW'],{'on':_0x2eb423,'factor':_0xba7dc7['vRLSD'](_0x554344,_0x2b17e5['value'])||-0x6*-0x133+0x23a0+-0x2ad1}):(_0x1c3b57++,_0x28c748['sane']=!![]):_0x28c748['sane']=![],delete _0x28c748[_0x2a7e56(0x578)];}return{'rows':_0x47b221,'key':_0xd8eaf,'sane':_0x1c3b57,'checked':_0x2283a8,'keyConsistent':_0x4fa826(_0x47b221),'keySource':_0xba7dc7[_0x2a7e56(0xd1e)]};}function _0x4fa826(_0x37d28e){var _0xd12d22=_0x2fbbc2,_0x3ea188={};for(var _0x237f4b=-0x1886+-0x150b+-0x91d*-0x5;_0x237f4b<_0x37d28e[_0xd12d22(0x25f)+'h'];_0x237f4b++){var _0xcbc92=_0x37d28e[_0x237f4b];if(_0xcbc92['k'][_0xd12d22(0x7b8)+'Of'](_0xba7dc7['AbAGD'])!==0x2*-0xa97+-0x6c9*-0x5+0xfb*-0xd)continue;if(_0x3ea188[_0xcbc92['k']]===undefined)_0x3ea188[_0xcbc92['k']]=_0xcbc92[_0xd12d22(0x8d6)+'ed'];else{if(_0x3ea188[_0xcbc92['k']]!==_0xcbc92[_0xd12d22(0x8d6)+'ed'])return![];}}return!![];}function _0x326598(_0x247007){var _0x55617f=_0x2fbbc2,_0x3bfdb0=_0x247007['v'];if(typeof _0x3bfdb0!==_0x55617f(0x5e3)+'r'||!isFinite(_0x3bfdb0))return![];if(_0xba7dc7[_0x55617f(0xace)](_0x247007['k'],'obfB'))return _0x3bfdb0===0x2*-0xdd5+-0x3*-0xc6f+0x1*-0x9a3||_0x3bfdb0===0x45b+0x1f9*0x9+-0x161b;var _0x4422a2=_0x247007[_0x55617f(0xaa8)];if(_0xba7dc7[_0x55617f(0x5a9)](typeof _0x4422a2,_0x55617f(0x5e3)+'r')||!_0xba7dc7['YosbW'](isFinite,_0x4422a2))return!![];if(_0xba7dc7[_0x55617f(0xbcd)](_0x247007[_0x55617f(0x4ba)],0x86+-0x731+0x356*0x2))return Math[_0x55617f(0x6a2)](_0x3bfdb0-_0x4422a2)<=Math[_0x55617f(0x640)](-0x1*0x243d+-0x1*-0x182e+0xc10,Math['abs'](_0x4422a2)*(-0x210f+-0xa6d*-0x3+0x1c8+0.6));return Math[_0x55617f(0x6a2)](_0x3bfdb0)<-0x25931c37+-0x25ea2ff2+-0x2d080763*-0x3;}function _0x30faec(){var _0x45497a=_0x2fbbc2,_0x2a9503={};try{if('Arsyd'===_0x45497a(0x3e9))return _0x3c1ca0['warn'](_0x45497a(0x9be)+_0x45497a(0xb7a)+_0x45497a(0x2d7)+'rame\x20'+'HUD\x20d'+_0x45497a(0xbcf)+'ed','color'+':'+_0x12feb8,_0x2cb28a),null;else{var _0x32ab7e=_0xba7dc7[_0x45497a(0x4ea)][_0x45497a(0xb3c)]('|'),_0x18ba44=-0xebd+-0xb55+0x1a12;while(!![]){switch(_0x32ab7e[_0x18ba44++]){case'0':var _0x392172=window['Unity'+'WebMo'+_0x45497a(0xb1d)]&&window[_0x45497a(0xb51)+'WebMo'+'dkit'][_0x45497a(0x295)+'me'];continue;case'1':_0x2a9503[_0x45497a(0x5de)+'tches']=!!(_0x392172&&_0x24f615&&_0x392172['__sak'+_0x45497a(0xc49)+'g']===_0x24f615);continue;case'2':_0x2a9503[_0x45497a(0x583)+_0x45497a(0x1ea)+'e']=_0x392172&&_0x392172[_0x45497a(0xd5a)]?typeof _0x392172['_game']:'none';continue;case'3':_0x2a9503[_0x45497a(0x259)+_0x45497a(0x4af)+_0x45497a(0x983)+_0x45497a(0x903)+_0x45497a(0x420)]=!!(_0x3ea3df&&_0x3ea3df[_0x45497a(0x305)+_0x45497a(0x71e)]&&_0x3ea3df['_runt'+_0x45497a(0x71e)]===_0x392172);continue;case'4':_0x2a9503['tag']=_0x392172&&_0x392172[_0x45497a(0x68d)+_0x45497a(0xc49)+'g']||null;continue;case'5':_0x2a9503[_0x45497a(0x259)+_0x45497a(0x4af)+'imeGa'+'me']=_0x3ea3df&&_0x3ea3df['_runt'+'ime']&&_0x3ea3df[_0x45497a(0x305)+_0x45497a(0x71e)][_0x45497a(0xd5a)]?typeof _0x3ea3df[_0x45497a(0x305)+_0x45497a(0x71e)][_0x45497a(0xd5a)]:'none';continue;}break;}}}catch(_0x5ba2c4){_0x2a9503['error']=_0xba7dc7[_0x45497a(0x323)](String,_0x5ba2c4&&_0x5ba2c4['messa'+'ge']||_0x5ba2c4);}return _0x2a9503;}function _0x237735(){var _0x4c3671=_0x2fbbc2,_0x53144a=[_0x4c3671(0x40d)+'Insta'+'nce',_0xba7dc7[_0x4c3671(0x65f)],_0xba7dc7[_0x4c3671(0x2a0)],_0x4c3671(0x40d)+'Insta'+_0x4c3671(0xcd8)+_0x4c3671(0xa72)],_0x3fd5f0={};for(var _0x100aa9=0x287*0x5+-0x1447+0x7a4;_0xba7dc7[_0x4c3671(0x667)](_0x100aa9,_0x53144a['lengt'+'h']);_0x100aa9++){var _0x1e13c3=_0x53144a[_0x100aa9],_0x5e3b7a=typeof window[_0x1e13c3];_0x3fd5f0[_0x1e13c3]=_0xba7dc7[_0x4c3671(0x2e8)](_0x5e3b7a,_0x4c3671(0xd02)+_0x4c3671(0x716))?'undef'+_0x4c3671(0x716):_0x5e3b7a;}var _0x396733=_0x47f984();_0x3fd5f0[_0x4c3671(0x86e)+'ource']=_0x24366e[_0x4c3671(0xcf9)+'e'];try{_0x3fd5f0[_0x4c3671(0xba1)+_0x4c3671(0xd10)]=!!(_0x396733&&_0x396733[_0x4c3671(0x7e4)+'e']),_0x3fd5f0[_0x4c3671(0xae0)+'8']=!!(_0x396733&&_0x396733['Modul'+'e']&&_0x396733[_0x4c3671(0x7e4)+'e'][_0x4c3671(0xd95)+'8']),_0x3fd5f0['heapB'+_0x4c3671(0x3cc)]=_0x3fd5f0['heapU'+'8']?_0x396733[_0x4c3671(0x7e4)+'e']['HEAPU'+'8']['lengt'+'h']:0x1*-0x72d+-0x1*-0x215e+0x5*-0x53d;}catch(_0x163c4d){_0x3fd5f0[_0x4c3671(0xba1)+'dule']=![],_0x3fd5f0['heapU'+'8']=![],_0x3fd5f0['heapB'+'ytes']=-0x15bf+-0x1af5*0x1+0x4*0xc2d;}return _0x3fd5f0[_0x4c3671(0xb9b)+_0x4c3671(0x268)+'er']=typeof _0x218efb,_0x3fd5f0;}function _0x23db01(){var _0xc63f98=_0x2fbbc2,_0x63cb9f=(_0xc63f98(0x5ba)+'|6|2|'+_0xc63f98(0xb59))['split']('|'),_0x50da05=-0x1*-0x150b+-0x57*-0x3+-0x2c2*0x8;while(!![]){switch(_0x63cb9f[_0x50da05++]){case'0':if(_0x25b069['camer'+'a'])_0x23505e['Mouse'+'Look+'+_0xc63f98(0x6c2)+'a']=_0x25b069[_0xc63f98(0x6c2)+'a'];continue;case'1':var _0x23505e={};continue;case'2':for(var _0xa74687 in _0x25b069['float'+'s'])_0x23505e[_0xba7dc7[_0xc63f98(0xa40)](_0xba7dc7[_0xc63f98(0xa2c)],_0xa74687)]=_0x25b069['float'+'s'][_0xa74687];continue;case'3':if(!_0x25b069)return _0x23505e;continue;case'4':var _0x25b069=_0x38891b();continue;case'5':return _0x23505e;case'6':_0x23505e[_0xc63f98(0x9f6)+_0xc63f98(0x49a)+_0xc63f98(0xaf3)]=_0x25b069[_0xc63f98(0xcf8)+_0xc63f98(0xd5c)];continue;}break;}}function _0x5a2c09(_0x22d649){var _0x587c98=_0x2fbbc2,_0x2ec939={};for(var _0x4519ae in _0x22d649){var _0x157a95=_0x22d649[_0x4519ae];for(var _0x5c4637=0x209d+0x27*-0xd+-0x1ea2;_0x5c4637<_0x157a95[_0x587c98(0x25f)+'h'];_0x5c4637++){_0x2ec939[_0x4519ae+_0x587c98(0x7f6)+_0x157a95[_0x5c4637]['o']['toStr'+'ing'](-0x1*-0xee9+-0x5*0x26b+-0x2c2)]=_0x157a95[_0x5c4637]['v'];}}return _0x2ec939;}function _0x5bfd7b(_0x766872,_0xb8d61d){var _0x1c53e4=_0x2fbbc2,_0x293b7a={'rYYCj':function(_0x53506b,_0x111d96,_0x31730c){return _0x53506b(_0x111d96,_0x31730c);},'GhhOo':_0x1c53e4(0x36c),'HvIYZ':_0xba7dc7['nlFjL'],'DFQga':function(_0x12ff3a,_0x59d519,_0x2513ae,_0x27b983){return _0x12ff3a(_0x59d519,_0x2513ae,_0x27b983);},'yOrkB':'sk-la'+_0x1c53e4(0x39e),'fOSTn':function(_0x89d601,_0x161711){return _0x89d601+_0x161711;},'uIFNt':_0x1c53e4(0x4cc)+'n>'};if(_0x766872===_0xba7dc7['fhjmW']){if(_0xba7dc7[_0x1c53e4(0x6f5)](_0x1c53e4(0x4cd),_0xba7dc7[_0x1c53e4(0xd28)])){var _0x537716=_0x293b7a['rYYCj'](_0x3c7855,_0x293b7a['GhhOo'],_0x293b7a[_0x1c53e4(0xbc7)]),_0xb11b87=_0x293b7a[_0x1c53e4(0xcc8)](_0xf1659,_0x293b7a[_0x1c53e4(0x3ba)],_0x293b7a[_0x1c53e4(0xd11)],_0x293b7a[_0x1c53e4(0x3ac)](_0x14b24c,_0x166f1b?'<span'+'\x20clas'+'s=\x27sk'+_0x1c53e4(0x2b3)+'\x27>'+_0x48c247+_0x293b7a[_0x1c53e4(0xc66)]:''));return _0x537716[_0x1c53e4(0xd16)+_0x1c53e4(0x9ca)+'d'](_0xb11b87),_0x537716;}else{_0xba7dc7['ZEWbL'](_0x589ea5,_0xb8d61d&&typeof _0xb8d61d['on']===_0xba7dc7[_0x1c53e4(0x500)]?_0xb8d61d['on']:_0x2786ed['on'],_0xb8d61d&&typeof _0xb8d61d[_0x1c53e4(0x33e)+'r']===_0x1c53e4(0x5e3)+'r'?_0xb8d61d['facto'+'r']:_0x2786ed[_0x1c53e4(0x33e)+'r']);return;}}if(_0x766872!=='snaps'+'hot')return;var _0x26a491=_0xba7dc7['vnSqr'](_0x1f0aaa),_0x4d456c=_0x5a2c09(_0x26a491),_0x51a4a9=_0x23db01();for(var _0x40476d in _0x51a4a9)_0x4d456c[_0x40476d]=_0x51a4a9[_0x40476d];if(!_0xb30bfa){_0xb30bfa=_0x4d456c,_0x7a9f53=[],_0xba7dc7[_0x1c53e4(0x84c)](_0x596e49,_0x1c53e4(0x3b7)+'t',{'report':_0x3f8fae()});return;}_0x7a9f53=[];for(var _0x44fbd0 in _0x4d456c){var _0x1ba30e=_0xb30bfa[_0x44fbd0],_0x2debf1=_0x4d456c[_0x44fbd0];if(_0xba7dc7[_0x1c53e4(0x200)](_0x1ba30e,_0x2debf1))_0x7a9f53['push'](_0xba7dc7[_0x1c53e4(0xcab)](_0x44fbd0+':\x20'+_0x1ba30e,_0x1c53e4(0x5d1))+_0x2debf1);}_0xb30bfa=_0x4d456c,_0x596e49(_0xba7dc7[_0x1c53e4(0x232)],{'report':_0x3f8fae()});}var _0x2f6426=null;function _0x167d4a(){var _0x403eed=_0x2fbbc2;if(_0x2f6426)return _0x2f6426;try{if(!document[_0x403eed(0xaf7)]||!document['body'][_0x403eed(0xd16)+'dChil'+'d'])return null;if(!document['getEl'+'ement'+'ById'](_0xba7dc7[_0x403eed(0x74f)])){if('NkISW'!=='xnvKY'){var _0x3212c1=document['creat'+_0x403eed(0x9a4)+_0x403eed(0x25c)](_0x403eed(0x874));_0x3212c1['id']=_0xba7dc7['qqmgv'],_0x3212c1[_0x403eed(0x52b)+_0x403eed(0x98d)+'t']=_0x403eed(0xc80)+'ra-sw'+'-hud{'+'all:i'+_0x403eed(0x95f)+'l}',(document['head']||document[_0x403eed(0x56f)+_0x403eed(0x689)+'ement'])['appen'+'dChil'+'d'](_0x3212c1);}else return null;}var _0x5489bb=document[_0x403eed(0x733)+'eElem'+_0x403eed(0x25c)](_0x403eed(0x36c));_0x5489bb['id']='sakur'+_0x403eed(0xcc0)+_0x403eed(0x45d),_0x5489bb[_0x403eed(0x874)][_0x403eed(0x222)+'xt']=_0xba7dc7['QOeYU'](_0xba7dc7[_0x403eed(0x39d)]+_0xba7dc7[_0x403eed(0x5b2)],_0x403eed(0x502)+_0x403eed(0xcc6)+'x\x208px'+_0x403eed(0x6bc)+_0x403eed(0x6ab)+_0x403eed(0xafb)+_0x403eed(0xd6c)+_0x403eed(0x24b)+_0x403eed(0x62e)+_0x403eed(0x3a2)+_0x403eed(0x63e)+_0x403eed(0x6fa)+_0x403eed(0x939)+'lor:#'+'f7eef'+'5;')+('box-s'+_0x403eed(0x26a)+':0\x2010'+_0x403eed(0x5d2)+_0x403eed(0xd0a)+_0x403eed(0x7e0)+_0x403eed(0x6a0)+'ser-s'+_0x403eed(0xc06)+':none'+_0x403eed(0xc8b)+'kit-u'+_0x403eed(0x84a)+'elect'+':none'+';');var _0x344954=_0x403eed(0x7eb)+_0x403eed(0x392)+'a=\x22st'+'2\x22\x20st'+_0x403eed(0x320)+'color'+':#8d7'+'a99;m'+'ax-wi'+_0x403eed(0x29a)+_0x403eed(0x1f2)+_0x403eed(0x7b5)+_0x403eed(0x8e7);_0x5489bb[_0x403eed(0x4f4)+_0x403eed(0x241)]=_0xba7dc7['GQTpP'](_0xba7dc7['FFPFJ'](_0xba7dc7[_0x403eed(0x202)](_0xba7dc7[_0x403eed(0x588)](_0xba7dc7['oTelL'](_0xba7dc7['WvoMb'](_0x403eed(0x7eb)+_0x403eed(0x392)+_0x403eed(0xa27)+_0x403eed(0x743)+'yle=\x22'+_0x403eed(0x7b6)+_0x403eed(0xd14)+_0x403eed(0x698)+'p:6px'+';alig'+'n-ite'+_0x403eed(0x5af)+_0x403eed(0x4e6)+_0x403eed(0x1da)+'wrap:'+_0x403eed(0x9aa)+_0x403eed(0x644)+'idth:'+_0x403eed(0x82a)+';\x22>'+('<b\x20st'+'yle=\x22'+_0x403eed(0xc0f)+':')+_0x2660e4+(_0x403eed(0x606)+'ura</'+'b>')+_0xba7dc7[_0x403eed(0x682)],'color'+':#f7e'+'ef5;b'+_0x403eed(0xd25)+_0x403eed(0x638)+'us:6p'+_0x403eed(0x203)+'ding:'+'2px\x208'+'px;cu'+_0x403eed(0x5db)+_0x403eed(0xaac)+_0x403eed(0x809)+_0x403eed(0x817)+'herit'+';\x22>Sp'+_0x403eed(0xa56)+'ff</b'+_0x403eed(0x400)+'>'),_0xba7dc7['aPiAV'])+_0x2660e4,';\x22>')+(_0x403eed(0xab8)+_0x403eed(0xbd7)+'-a=\x22f'+_0x403eed(0xb3b)+'yle=\x22'+'color'+_0x403eed(0x6ed)+_0x403eed(0xc4e)+'in-wi'+_0x403eed(0x5f4)+'0px;\x22'+_0x403eed(0x905)+_0x403eed(0x4cc)+'n>')+(_0x403eed(0x960)+'on\x20da'+_0x403eed(0x7a8)+_0x403eed(0xcf4)+_0x403eed(0x20e)+'e=\x22ba'+_0x403eed(0xa8e)+'und:t'+'ransp'+_0x403eed(0x7bf)+_0x403eed(0x75b)+_0x403eed(0x298)+'x\x20sol'+_0x403eed(0x3db)+_0x403eed(0x890)+_0x403eed(0x802)+',177,'+_0x403eed(0x426))+_0xba7dc7[_0x403eed(0x31c)],_0x403eed(0x960)+_0x403eed(0x9e4)+'ta-a='+_0x403eed(0x33d)+_0x403eed(0x838)+'le=\x22b'+_0x403eed(0x57d)+'ound:'+'trans'+_0x403eed(0x2cf)+_0x403eed(0x227)+_0x403eed(0x57e)+_0x403eed(0x783)+'lid\x20r'+_0x403eed(0x978)+_0x403eed(0x536)+_0x403eed(0x2bd)+',.45)'+';')+(_0x403eed(0xc0f)+':#f7e'+'ef5;b'+_0x403eed(0xd25)+_0x403eed(0x638)+'us:6p'+_0x403eed(0x203)+_0x403eed(0x365)+_0x403eed(0x629)+_0x403eed(0x657)+'rsor:'+'point'+_0x403eed(0x809)+'nt:in'+_0x403eed(0x421)+_0x403eed(0x6f9)+'ap</b'+'utton'+'>')+_0xba7dc7[_0x403eed(0x6cf)],'color'+_0x403eed(0x91c)+'ef5;b'+_0x403eed(0xd25)+'-radi'+_0x403eed(0x2b0)+_0x403eed(0x203)+_0x403eed(0x365)+'1px\x206'+'px;cu'+_0x403eed(0x5db)+_0x403eed(0xaac)+_0x403eed(0x809)+_0x403eed(0x817)+_0x403eed(0x421)+_0x403eed(0x7aa)+_0x403eed(0x3ce)+_0x403eed(0x3a5))+_0xba7dc7[_0x403eed(0xc6d)],_0xba7dc7[_0x403eed(0xbba)])+_0xba7dc7['fECKf'],_0x5489bb['inner'+'HTML']=_0x344954;var _0x463c27=function(_0x53df35){var _0x1dc6c0=_0x403eed;if(_0xba7dc7['buZpq'](_0x1dc6c0(0x8be),_0xba7dc7['tWLGu'])){var _0x198110=_0x32e2fc['filte'+'r'](function(_0x1a029c){var _0x511215=_0x1dc6c0;return _0x1a029c[_0x511215(0x72e)]===_0x541e1f;})[0x503+-0x468+-0x9b];_0x3cbe81={'type':_0x2c67c8,'atMs':_0x1be77d[_0x1dc6c0(0xa28)]()-_0x127b70,'originalFunc':!!(_0x198110&&_0x198110[_0x1dc6c0(0xac7)]&&typeof _0x198110[_0x1dc6c0(0xac7)]['origi'+'nalFu'+'nc']===_0x1dc6c0(0x849)+'ion'),'resolveGameAtFire':!!_0x12801b(),'gameSourceAtFire':_0x59b9aa[_0x1dc6c0(0xcf9)+'e']};}else return _0x5489bb['query'+'Selec'+'tor'](_0xba7dc7['sBifi'](_0xba7dc7[_0x1dc6c0(0x5f5)](_0xba7dc7[_0x1dc6c0(0x8f7)],_0x53df35),'\x22]'));},_0x2f866e=_0x463c27('st'),_0x39b350=_0x463c27(_0xba7dc7[_0x403eed(0x528)]),_0x2de7b2=_0xba7dc7[_0x403eed(0x4ce)](_0x463c27,'sp'),_0x2cb1bc=_0xba7dc7[_0x403eed(0x65d)](_0x463c27,'fx'),_0x192e48=_0xba7dc7[_0x403eed(0x6e5)](_0x463c27,'fv'),_0x1e59be=_0xba7dc7[_0x403eed(0xc89)](_0x463c27,_0x403eed(0x9fb));if(_0x2de7b2)_0x2de7b2[_0x403eed(0xab9)+'ck']=function(){_0x589ea5(!_0x2786ed['on'],_0x2786ed['facto'+'r']);};if(_0x2cb1bc)_0x2cb1bc['oninp'+'ut']=function(){_0x589ea5(_0x2786ed['on'],parseFloat(_0x2cb1bc['value'])||0x1*0x1a57+-0xfd6*0x2+0x556);};if(_0x463c27(_0xba7dc7[_0x403eed(0xaad)]))_0xba7dc7[_0x403eed(0x8a4)](_0x463c27,'snap')[_0x403eed(0xab9)+'ck']=function(){var _0x1ce002=_0x403eed;_0xba7dc7[_0x1ce002(0x696)](_0x5bfd7b,_0x1ce002(0x9e2)+_0x1ce002(0xb4a));};var _0x3ae6fa=_0x463c27(_0xba7dc7['GfvPq']);if(_0x3ae6fa)_0x3ae6fa['oncli'+'ck']=function(){var _0x4b1683=_0x403eed;if(!_0x459161['on'])_0x50b2dc(!![],![]);else{if(_0x459161['boxes'])_0x50b2dc(![],![]);else{if(_0xba7dc7[_0x4b1683(0x2c5)](_0x1fe234))_0x50b2dc(!![],!![]);else _0xba7dc7[_0x4b1683(0x3ff)](_0x50b2dc,![],![]);}}};if(_0xba7dc7[_0x403eed(0x8a4)](_0x463c27,_0xba7dc7['RwXLW']))_0x463c27(_0xba7dc7['RwXLW'])[_0x403eed(0xab9)+'ck']=function(){var _0x409523=_0x403eed;if(!_0x1e59be)return;var _0x56df36=_0xba7dc7[_0x409523(0x9fc)](_0x1e59be[_0x409523(0x874)]['displ'+'ay'],_0xba7dc7['qKFYw']);_0x1e59be[_0x409523(0x874)]['displ'+'ay']=_0x56df36?'':_0x409523(0x7a0),_0x463c27(_0x409523(0x505))['textC'+_0x409523(0x98d)+'t']=_0x56df36?'-':'+';};return document[_0x403eed(0xaf7)]['appen'+_0x403eed(0x9ca)+'d'](_0x5489bb),_0x2f6426={'el':_0x5489bb,'st':_0x2f866e,'st2':_0x39b350,'sp':_0x2de7b2,'fx':_0x2cb1bc,'fv':_0x192e48,'esp':_0x3ae6fa},_0x2f6426;}catch(_0x19ed65){return console['warn'](_0xba7dc7['gSjbu'],_0x403eed(0xc0f)+':'+_0x2660e4,_0x19ed65),null;}}function _0x1fe234(){var _0x3e66f3=_0x2fbbc2,_0xc12482={'tfqmI':function(_0x2c3521){return _0xba7dc7['KjbBx'](_0x2c3521);}};try{var _0x2b6f4a=_0x5619a6();return!!(_0x2b6f4a&&_0x20b344['ident'+_0x3e66f3(0xae6)]);}catch(_0x2299f4){if(_0xba7dc7[_0x3e66f3(0x4c0)](_0x3e66f3(0x33c),_0xba7dc7['KaKGZ']))return![];else _0x5e280f=_0xc12482['tfqmI'](_0x59b0a7);}}function _0xc23780(){var _0x54d862=_0x2fbbc2;try{var _0x343bbc=_0x2f6426&&_0x2f6426[_0x54d862(0x3c6)];if(!_0x343bbc)return;if(_0x459161[_0x54d862(0x8ba)]&&!_0xba7dc7['vrxdT'](_0x1fe234))_0x459161[_0x54d862(0x8ba)]=![];var _0x23edea=!_0x459161['on']?'ESP\x20o'+'ff':_0x459161['boxes']?_0xba7dc7['FpuwG']:_0x54d862(0x837)+'ap';if(_0x23edea!==_0x343bbc[_0x54d862(0x52b)+'onten'+'t'])_0x343bbc[_0x54d862(0x52b)+_0x54d862(0x98d)+'t']=_0x23edea;_0x343bbc[_0x54d862(0x874)]['backg'+_0x54d862(0xb4c)]=_0x459161['on']?_0x2660e4:_0xba7dc7[_0x54d862(0x3d3)],_0x343bbc[_0x54d862(0x874)][_0x54d862(0xc0f)]=_0x459161['on']?_0xba7dc7['jlyfa']:_0xba7dc7[_0x54d862(0x33a)];}catch(_0x105b97){}}function _0x50b2dc(_0x2d6f34,_0x231133){var _0x10f518=_0x2fbbc2;_0x459161['on']=!!_0x2d6f34,_0x459161['boxes']=!!_0x231133,_0xc23780();try{var _0xd62eb8=_0x1741c4();if(_0xd62eb8&&_0xd62eb8['el'])_0xd62eb8['el']['style']['displ'+'ay']=_0x459161['on']?'':_0x10f518(0x7a0);var _0xbba4a6=_0x358740;if(_0xbba4a6&&_0xbba4a6['cv'])_0xbba4a6['cv'][_0x10f518(0x874)][_0x10f518(0x7b6)+'ay']=_0x459161['on']&&_0x459161[_0x10f518(0x8ba)]?'':_0x10f518(0x7a0);}catch(_0x1dd75a){}}var _0x26bfb6=-0x1c6*0x5+0x541+0x67*0x9;function _0x589ea5(_0x11af04,_0x2648c6){var _0x5e47aa=_0x2fbbc2,_0x329026=_0x2786ed['on'];_0x2786ed['on']=!!_0x11af04;_0x2786ed['on']&&!_0x329026&&(_0x2648c6===undefined||_0xba7dc7[_0x5e47aa(0x9c7)](_0x2648c6,null)||_0xba7dc7['MDLDN'](Number(_0x2648c6),0x1163*0x2+0x1e36+-0x40fb))&&(_0xba7dc7[_0x5e47aa(0x94b)]===_0x5e47aa(0x43f)?_0x2648c6=_0x26bfb6:(_0x564d86['cv'][_0x5e47aa(0x582)]=_0x84143a,_0x22f826['cv'][_0x5e47aa(0x92e)+'t']=_0x32b9da));_0x2786ed[_0x5e47aa(0x33e)+'r']=Math['min'](_0x2786ed[_0x5e47aa(0x640)],Math[_0x5e47aa(0x640)](_0x2786ed[_0x5e47aa(0x5ae)],Number(_0x2648c6)||-0x15d*0x7+-0x1*0xbce+0x155a));if(!_0x2786ed['on'])_0x1283a2={};var _0x475bae=_0x167d4a();if(_0x475bae){if(_0x475bae['sp']){if(_0xba7dc7['iKJND'](_0x5e47aa(0x6b1),_0xba7dc7[_0x5e47aa(0x73a)]))_0x475bae['sp']['textC'+'onten'+'t']=_0x2786ed['on']?_0xba7dc7['FCGkW']:_0x5e47aa(0x811)+_0x5e47aa(0x220),_0x475bae['sp'][_0x5e47aa(0x874)]['backg'+_0x5e47aa(0xb4c)]=_0x2786ed['on']?_0x2660e4:'trans'+_0x5e47aa(0x2cf)+'t',_0x475bae['sp'][_0x5e47aa(0x874)][_0x5e47aa(0xc0f)]=_0x2786ed['on']?'#2a0f'+'1b':'#f7ee'+'f5';else return 0x1268+-0x2309*0x1+0x10a1;}if(_0x475bae['fx'])_0x475bae['fx']['value']=_0xba7dc7['zbUDo'](String,_0x2786ed[_0x5e47aa(0x33e)+'r']);if(_0x475bae['fv'])_0x475bae['fv'][_0x5e47aa(0x52b)+_0x5e47aa(0x98d)+'t']=_0xba7dc7[_0x5e47aa(0x415)](_0x2786ed['facto'+'r'][_0x5e47aa(0x1f9)+'ed'](0xcc8+0x1f*-0x92+-0x4e7*-0x1),'x');}}function _0x5a7714(_0x4fceaa){var _0x350295=_0x2fbbc2,_0x3ba6cb=_0x167d4a();if(!_0x3ba6cb||!_0x3ba6cb['st'])return;try{if(!_0x1f56cf()&&!_0x552ce7){if(_0x3ba6cb['el'])_0x3ba6cb['el']['style'][_0x350295(0x7b6)+'ay']=_0x350295(0x7a0);return;}if(_0x3ba6cb['el'])_0x3ba6cb['el'][_0x350295(0x874)][_0x350295(0x7b6)+'ay']='';var _0x5f1161=Object['keys'](_0x4fceaa&&_0x4fceaa[_0x350295(0x799)+'nces']||{})[_0x350295(0x25f)+'h'],_0x88ecd2=_0x4fceaa&&_0x4fceaa[_0x350295(0x3c6)]||null,_0x162c71=_0x88ecd2?_0x88ecd2['enemy'+_0x350295(0x627)]||-0x1*0x58a+0x1*-0x23a3+0x292d:0x9*-0xc2+0x2*-0xb7e+0x1dce,_0x54fbf1=_0x88ecd2?_0x88ecd2['botCo'+_0x350295(0x993)]||-0x1a82+-0x193b+-0x33bd*-0x1:0x14*-0x16a+-0x1fdd+0x3c25,_0x54a052=_0x2411c3?_0xba7dc7[_0x350295(0xcab)]((_0x2411c3[_0x350295(0x78d)+'r']['byteL'+'ength']/(0x1a847f+0x1*-0x58643+-0x4fe3c))[_0x350295(0x1f9)+'ed'](-0x1*0x1164+0x4a8+0xcbc),'MB'):_0x350295(0x575)+'m',_0x17e15e=_0xba7dc7['zdmny'](_0xba7dc7[_0x350295(0x985)](_0xba7dc7[_0x350295(0x83c)](_0xba7dc7['QOYEM'](_0xba7dc7[_0x350295(0x4d9)](_0xba7dc7[_0x350295(0x955)](_0xba7dc7[_0x350295(0x3a3)]('v',_0x4fceaa&&_0x4fceaa['versi'+'on']||_0x1a991b)+('\x20\x20hoo'+_0x350295(0x404))+(_0x4fceaa&&_0x4fceaa['hooks'+_0x350295(0xc32)+'ed']||0x1*-0x1c3e+0x20e1+-0x4a3)+'/',_0x4fceaa&&_0x4fceaa[_0x350295(0x497)+_0x350295(0x473)]||0x241b+-0x443*0x3+-0x1752),_0xba7dc7[_0x350295(0x371)])+_0x5f1161,'\x20\x20mem'+'\x20'),_0x54a052),_0x350295(0x3cf)+_0x350295(0x235)),_0xf3eae3);_0x3ba6cb['st'][_0x350295(0x52b)+_0x350295(0x98d)+'t']=_0x17e15e;var _0x461f31=_0x3ba6cb[_0x350295(0xb30)];_0x461f31&&(_0x350295(0xbc2)!=='EmpUA'?(_0x461f31['textC'+'onten'+'t']=_0x162c71>0x20a3+0x2*0x113d+-0x431d?_0xba7dc7[_0x350295(0x955)](_0xba7dc7[_0x350295(0xd56)]+_0x162c71,_0x54fbf1?_0xba7dc7[_0x350295(0x3a3)](_0xba7dc7[_0x350295(0x692)](_0xba7dc7['IIbaS'],_0x54fbf1),_0x350295(0x6fc)):'')+(_0x88ecd2&&_0x88ecd2[_0x350295(0x6c2)+'a']?_0x350295(0xd79)+'\x20'+_0x88ecd2['camer'+'aFrom']:'\x20\x20cam'+'\x20-'):'no\x20en'+_0x350295(0x867)+'\x20yet\x20'+_0x350295(0x914)+'y?)\x20\x20'+_0x350295(0xa0d)+(_0x88ecd2&&_0x88ecd2[_0x350295(0x6c2)+'a']?_0x88ecd2[_0x350295(0x6c2)+'aFrom']:'-'),_0x461f31['style']['color']=_0xba7dc7[_0x350295(0x887)](_0x162c71,0x1b51+0x163b*0x1+0x318c*-0x1)?_0xba7dc7[_0x350295(0x3c4)]:_0xba7dc7[_0x350295(0x41a)]):_0x29e8bc=_0x4bd392());}catch(_0x338271){}}window[_0x2fbbc2(0x5ea)+'entLi'+'stene'+'r'](_0xba7dc7[_0x2fbbc2(0x942)],function(_0xbf0d05){var _0xdd4a45=_0x2fbbc2;if(!_0xbf0d05)return;try{if(_0xba7dc7[_0xdd4a45(0xbcd)](_0xbf0d05['code'],'F9')){_0xbf0d05[_0xdd4a45(0x417)+_0xdd4a45(0x592)+_0xdd4a45(0xb67)](),_0xba7dc7['uMzIB'](_0x5bfd7b,_0xba7dc7[_0xdd4a45(0x91f)]);return;}if(_0xba7dc7[_0xdd4a45(0x6f5)](_0xbf0d05[_0xdd4a45(0x2f0)],'F7')){if(_0xba7dc7['LbMEp']!==_0xdd4a45(0xcf1))_0x2f5982(_0x1b167c);else{_0xbf0d05[_0xdd4a45(0x417)+'ntDef'+_0xdd4a45(0xb67)](),_0xba7dc7[_0xdd4a45(0x84c)](_0x589ea5,!_0x2786ed['on'],_0x2786ed[_0xdd4a45(0x33e)+'r']);return;}}if(_0xbf0d05[_0xdd4a45(0x2f0)]==='F8'){if('yQoPt'===_0xdd4a45(0x720)){if(_0x5511b6[_0x30aafc]['conte'+'ntWin'+'dow'])_0x421c56[_0x3137f0][_0xdd4a45(0x952)+'ntWin'+'dow'][_0xdd4a45(0xaab)+'essag'+'e'](_0x19f7b7,'*');}else{_0xbf0d05[_0xdd4a45(0x417)+'ntDef'+_0xdd4a45(0xb67)](),_0xba7dc7[_0xdd4a45(0x529)](_0x589ea5,_0x2786ed['on'],_0x2786ed[_0xdd4a45(0x33e)+'r']+(0xd59+0x1474+-0x1*0x21cd+0.5));return;}}if(_0xbf0d05[_0xdd4a45(0x2f0)]==='F6'){if(_0xba7dc7['xQUaJ'](_0xba7dc7[_0xdd4a45(0x342)],_0xdd4a45(0x3ae))){_0xbf0d05['preve'+'ntDef'+'ault'](),_0x589ea5(_0x2786ed['on'],_0x2786ed['facto'+'r']-(-0x14*-0xe5+-0x1e9+-0xffb+0.5));return;}else{if(_0x6679fe['top']&&_0x2027ff[_0xdd4a45(0xab1)]!==_0x38b54b)_0x34a0bc['top']['postM'+_0xdd4a45(0xc78)+'e'](_0x247b48,'*');}}if(_0xbf0d05['code']===_0xdd4a45(0x32b)+'t'){if(_0xba7dc7[_0xdd4a45(0x5a9)](_0xdd4a45(0x847),_0xba7dc7['NjNhJ'])){_0xbf0d05[_0xdd4a45(0x417)+_0xdd4a45(0x592)+_0xdd4a45(0xb67)](),_0x357a45(!_0x50ad68[_0xdd4a45(0xa29)]);return;}else{var _0x5be982=_0x170c0d[_0xdd4a45(0xb3c)]('+');_0x54ddda=_0xba7dc7['dmwRW'](_0x3d83da,_0xb20ba4,_0x5be982[0x320+-0x17*0x19b+0x11*0x1fd][_0xdd4a45(0x7b8)+'Of'](_0xba7dc7['CcXvY'])===-0x1*0x143e+0x21c4+-0xd86?_0xdd4a45(0xc41)+_0xdd4a45(0x652)+'pt':_0xba7dc7[_0xdd4a45(0x78b)],_0x52940a(_0x5be982[-0x10e1+-0x265a+0x1f9*0x1c],0x1*0xc5e+-0xa40+-0x20e));}}if(_0xbf0d05['code']===_0xdd4a45(0x919)+'etRig'+'ht'){if(_0xba7dc7['qLdZW'](_0xba7dc7['FjWPZ'],_0xdd4a45(0xce0))){_0xbf0d05[_0xdd4a45(0x417)+_0xdd4a45(0x592)+'ault'](),_0x410599[_0xdd4a45(0x257)]=Math[_0xdd4a45(0x5ae)](0x22d+-0x611*0x3+0x849*0x2,_0x410599['fov']+(0xcc1*-0x2+-0x5*-0x541+-0xc1)),_0xba7dc7[_0xdd4a45(0x841)](_0x5dccee);return;}else return![];}if(_0xbf0d05[_0xdd4a45(0x2f0)]===_0xdd4a45(0x919)+_0xdd4a45(0x735)+'t'){_0xbf0d05[_0xdd4a45(0x417)+'ntDef'+'ault'](),_0x410599[_0xdd4a45(0x257)]=Math['max'](0x50e+0x1*-0x6bc+0x1cc,_0x410599[_0xdd4a45(0x257)]-(-0x23*0xd7+-0x4*0x679+0x374b)),_0x5dccee();return;}}catch(_0x5d1ab2){}},!![]);var _0x459161={'on':!![],'span':0x50,'boxes':![]};function _0x38891b(){var _0x31b257=_0x2fbbc2,_0x28d628=_0x4e8ae5['Photo'+_0x31b257(0x76e)+'orkSy'+'nc']||{},_0x4bccfa=Object[_0x31b257(0x509)](_0x28d628);for(var _0x5d9498=-0x21f*-0x6+-0x1901+0xc47;_0x5d9498<_0x4bccfa['lengt'+'h'];_0x5d9498++){var _0x2ed76b=_0x28d628[_0x4bccfa[_0x5d9498]][_0x31b257(0xaf3)],_0x3832eb=_0x35121f(_0x2ed76b+(-0x3*-0x4eb+0x28b+-0x111c),_0x31b257(0xc79));if(!_0x3832eb)continue;var _0x4917dd=_0x2cad2b[_0x31b257(0x9f6)+'Look']||[],_0x17ea70={'mouseLook':_0xba7dc7['sUCLi']('0x',(_0x3832eb>>>0x612+-0x1b8+-0x45a)['toStr'+'ing'](-0x1*0x1a0f+-0x6d*0x2c+0x2cdb)),'floats':{},'camera':null,'vec2':null};for(var _0x4751f3=-0xd15+-0x3*0xbc3+0x1*0x305e;_0xba7dc7[_0x31b257(0x9df)](_0x4751f3,_0x4917dd['lengt'+'h']);_0x4751f3++){if(_0x4917dd[_0x4751f3][-0x1*-0x83b+0x3a9+-0xbe3]!==_0x31b257(0xb6c))continue;_0x17ea70['float'+'s']['0x'+_0x4917dd[_0x4751f3][0x956*0x1+-0x6*-0x287+-0x38*0x70][_0x31b257(0x6ac)+_0x31b257(0x21d)](0x1be0+-0x91*-0x17+-0x28d7)]=_0x35121f(_0xba7dc7['BDNfx'](_0x3832eb,_0x4917dd[_0x4751f3][0x2*0xc5+-0xf5c+-0x2*-0x6e9]),'f32');}var _0x395747=_0x35121f(_0x3832eb+(0x14a7*0x1+-0x2408+-0xf8d*-0x1),_0xba7dc7['WYKVq']);if(_0x395747)_0x17ea70[_0x31b257(0x6c2)+'a']=_0xba7dc7['dOFNd']('0x',_0xba7dc7['MDYmJ'](_0x395747,-0x3*-0xa21+0xd5f+-0x2bc2)[_0x31b257(0x6ac)+_0x31b257(0x21d)](0x2a8*-0xd+0x97+0x2201));var _0x1bac86=_0x2ff316(_0x3832eb,0x43*-0x5+0x3ce*0x9+-0x20a7,0x10c4+-0x93f*0x3+-0x1*-0xafb);if(_0x1bac86)_0x17ea70['vec2']=_0x1bac86;return _0x17ea70;}return null;}var _0x16d164='sakur'+_0x2fbbc2(0xcc0)+'fov',_0x4d79f9='sakur'+'a-sw-'+_0x2fbbc2(0x752)+'off',_0x410599={'pitch':null,'yaw':null,'pitchOff':0x0,'yawOff':0x0,'fov':0x5a,'known':![]};try{var _0x1ba798=localStorage[_0x2fbbc2(0x468)+'em'](_0x16d164);if(_0x1ba798)_0x410599['fov']=Math['min'](-0x63d*-0x5+-0xb*-0x53+-0x1d*0x12e,Math[_0x2fbbc2(0x640)](0x1b19+0x2*0x656+0x1*-0x27a7,parseFloat(_0x1ba798)||0x926+0x94e+-0x121a));}catch(_0x127388){}try{var _0x349148=localStorage['getIt'+'em'](_0x4d79f9);if(_0x349148){var _0x4dc72a=JSON['parse'](_0x349148);if(typeof _0x4dc72a['y']==='numbe'+'r'&&_0xba7dc7['XAZsC'](isFinite,_0x4dc72a['y']))_0x410599['yawOf'+'f']=_0x4dc72a['y'];if(_0xba7dc7[_0x2fbbc2(0x4e7)](typeof _0x4dc72a['p'],_0xba7dc7['YempL'])&&_0xba7dc7['oHQau'](isFinite,_0x4dc72a['p']))_0x410599['pitch'+'Off']=_0x4dc72a['p'];}}catch(_0x226431){}function _0x5dccee(){var _0x457d46=_0x2fbbc2;try{'XfkBN'!==_0xba7dc7[_0x457d46(0x9b9)]?_0x165d64(!![]):localStorage['setIt'+'em'](_0x16d164,_0xba7dc7['uMzIB'](String,_0x410599[_0x457d46(0x257)]));}catch(_0x4954fb){}}function _0x597a1c(){var _0x4f6fe8=_0x2fbbc2;if(_0xba7dc7[_0x4f6fe8(0xd5f)](_0x4f6fe8(0xd84),_0xba7dc7[_0x4f6fe8(0xaf5)]))return null;else try{localStorage[_0x4f6fe8(0xa14)+'em'](_0x4d79f9,JSON[_0x4f6fe8(0x58c)+_0x4f6fe8(0xc9a)]({'y':_0x410599['yawOf'+'f'],'p':_0x410599[_0x4f6fe8(0xa61)+'Off']}));}catch(_0x4b4557){}}var _0x44451e=-0x1a6*0xc+0x17*-0x151+0x3237,_0x12fd72=0x452+0x1022+-0xf8*0x15,_0x44451e=0x3eb+0x92d*0x3+-0x1f4a,_0x12fd72=-0x1*0x1102+0x1fc+0xf22,_0x20b344={'pitch':null,'yaw':null,'identified':![],'why':_0x2fbbc2(0xcfd)+'useLo'+'ok\x20ye'+'t','source':null,'yawGetter':null,'pitchGetter':null,'getters':[]};function _0x2cf06a(_0x2c3494){var _0x3258dd=_0x2fbbc2,_0x4dcb03=null,_0x2007e9=0x106e+0x72c+-0x179a;for(var _0x5df27b in _0x4fc906){var _0x227d43=_0x4fc906[_0x5df27b];if(!_0x227d43['hits']||_0x227d43[_0x3258dd(0x776)]===null)continue;var _0x1ff44a=_0xba7dc7[_0x3258dd(0x8ec)](_0x35121f,_0x3a61f3+_0x2c3494,'f32');if(_0xba7dc7['shuEN'](typeof _0x1ff44a,'numbe'+'r'))continue;Math[_0x3258dd(0x6a2)](_0x227d43[_0x3258dd(0x776)]-_0x1ff44a)<0xd50+-0x10dd+0x38d+0.001&&_0x227d43[_0x3258dd(0x933)]>_0x2007e9&&(_0x4dcb03=_0x5df27b,_0x2007e9=_0x227d43[_0x3258dd(0x933)]);}return _0x4dcb03;}function _0x20ef03(_0xb0470b){var _0x369057=_0x2fbbc2,_0x2cf89d={'QPdrN':'Updat'+'e','QCnLT':_0x369057(0xc77),'RmITi':function(_0x3d724e,_0xa64202,_0x3d73a7,_0x2bcdb2){var _0x2b582b=_0x369057;return _0xba7dc7[_0x2b582b(0x6a3)](_0x3d724e,_0xa64202,_0x3d73a7,_0x2bcdb2);}};if('sYcBu'==='rMhau')return _0x5ce74a[_0x369057(0x8d2)+'et'][_0x369057(0x8c0)]='1',_0x32ee12[_0x369057(0x8c0)]=_0x43b7c6,_0x413972['warn'](_0x369057(0x9be)+_0x369057(0xb7a)+'\x20pane'+'l\x20dis'+'abled','color'+':'+_0x3337b2,_0xa508af),_0x2b640e;else{var _0x4e1637=[],_0x2a7dc3=_0x2cad2b[_0x369057(0x9f6)+_0x369057(0xd5c)]||[];for(var _0x29f9c4 in _0x4fc906){var _0x436eac=_0x4fc906[_0x29f9c4];if(!_0x436eac[_0x369057(0x933)])continue;var _0x1716f7=null;for(var _0xd9641c=0x8e1+-0x4d*0x47+0xc7a;_0xd9641c<_0x2a7dc3[_0x369057(0x25f)+'h'];_0xd9641c++){if(_0xba7dc7['LoPQh']===_0x369057(0xa95)){if(_0xba7dc7[_0x369057(0xcaf)](_0x2a7dc3[_0xd9641c][0x1*-0x21dd+0x615*0x6+-0x2a0],_0xba7dc7[_0x369057(0x350)]))continue;var _0x81db0c=_0xba7dc7['UKGRT'](_0x35121f,_0xb0470b+_0x2a7dc3[_0xd9641c][-0x1*0x26ad+0xaf3*0x2+-0x5*-0x35b],_0x369057(0xb6c));if(_0xba7dc7[_0x369057(0xb15)](typeof _0x81db0c,_0x369057(0x5e3)+'r')&&Math[_0x369057(0x6a2)](_0xba7dc7[_0x369057(0x3d6)](_0x81db0c,_0x436eac[_0x369057(0x776)]))<-0xb8f*0x1+-0xa9*-0x1+0x5a*0x1f+0.001){_0x1716f7='0x'+_0x2a7dc3[_0xd9641c][0x2357+0x198d+-0x3ce4]['toStr'+_0x369057(0x21d)](0x15c9+0x2330+-0x38e9);break;}}else{var _0xf634ec=_0x5792a5[_0x369057(0x69d)+_0x369057(0xa9d)]({'typeName':_0x39c673[_0x369057(0x72e)],'methodName':_0x2cf89d['QPdrN'],'params':[_0x2cf89d['QCnLT'],_0x2cf89d[_0x369057(0x26f)]],'returnType':_0x17ca83},_0x2cf89d[_0x369057(0x3a7)](_0xc21c6a,_0x25c7a8['type'],_0x317291['keep'],_0x503868['many']));_0x28a32a['push']({'type':_0x4d1d28[_0x369057(0x72e)],'hook':_0xf634ec,'keep':_0x827e1b[_0x369057(0xb70)]});}}_0x4e1637[_0x369057(0x3ad)]({'name':_0x29f9c4,'value':_0x436eac[_0x369057(0x776)],'matches':_0x1716f7,'hits':_0x436eac[_0x369057(0x933)],'set':_0x436eac[_0x369057(0x72a)+'ts']?_0x436eac[_0x369057(0x309)+'st']:null});}return _0x4e1637;}}function _0x5619a6(){var _0x45f401=_0x2fbbc2,_0x52353a={'YOPbY':function(_0x28ee8c,_0x296332){var _0x1f2ed2=_0x4e00;return _0xba7dc7[_0x1f2ed2(0x948)](_0x28ee8c,_0x296332);},'HhJrh':function(_0x4af0d3,_0x4b1350){return _0xba7dc7['rcprc'](_0x4af0d3,_0x4b1350);},'begiW':'\x20of\x20','uJFhZ':_0x45f401(0x9f7)+_0x45f401(0x242)+'hodIn'+_0x45f401(0x71d)+_0x45f401(0xd7f)+'id\x20do'+_0x45f401(0x267)+'t\x20mat'+'ch\x20th'+'is\x20bu'+'ild.'},_0x561cf8=_0xba7dc7[_0x45f401(0xa03)](_0x38891b);if(!_0x561cf8||!_0x561cf8['mouse'+_0x45f401(0xd5c)]){if(_0xba7dc7[_0x45f401(0xd5f)]('tJXsP','tJXsP'))return _0x20b344[_0x45f401(0xd01)+'ified']=![],_0x20b344[_0x45f401(0x538)]=_0xba7dc7['NcbEr'],null;else _0x4f01eb['warni'+'ngs']['push'](_0x52353a['YOPbY'](_0x52353a[_0x45f401(0x23a)](_0x52353a[_0x45f401(0x23a)](_0x52353a[_0x45f401(0x1fb)](_0x45f401(0xa65)+_0x45f401(0x52d)+_0x45f401(0x6b5),_0x3af429[_0x45f401(0x497)+_0x45f401(0x8a8)+_0x45f401(0x797)]),_0x52353a['begiW']),_0x14ab83['hooks'+_0x45f401(0x473)]),'\x20hook'+_0x45f401(0xcd5)+_0x45f401(0x1dd)+'able\x20'+'index'+_0x45f401(0x988)+_0x45f401(0xd88)+'ed\x20no'+'ne.\x20T'+'he\x20si'+'gnatu'+_0x45f401(0xb13))+_0x52353a[_0x45f401(0x953)]);}var _0xd9cae0=parseInt(_0x561cf8[_0x45f401(0xcf8)+_0x45f401(0xd5c)],-0x522*0x7+-0x10c6+0x34c4);if(_0x3a61f3!==_0xd9cae0)_0x3a61f3=_0xd9cae0;_0x20b344['gette'+'rs']=_0x20ef03(_0xd9cae0);var _0x5e9512=_0x2cf06a(_0x44451e),_0x292981=null;for(var _0x3fc898 in _0x4fc906){if(_0xba7dc7['DVxfT'](_0x3fc898,_0x5e9512))continue;var _0x4a7426=_0x4fc906[_0x3fc898];if(!_0x4a7426['hits']||_0x4a7426[_0x45f401(0x776)]===null)continue;if(_0x4a7426['last']>=-(0x176*-0x15+-0x2*-0xe97+0x4f*0x6)&&_0x4a7426[_0x45f401(0x776)]<=-0x258d+-0x19bd+0x1*0x3fa4){_0x292981=_0x3fc898;break;}}_0x20b344['yawGe'+_0x45f401(0xa53)]=_0x5e9512,_0x20b344[_0x45f401(0xa61)+'Gette'+'r']=_0x292981;var _0x2a2b85,_0x431932;_0x5e9512?(_0x2a2b85=_0x4fc906[_0x5e9512]['last'],_0x20b344['sourc'+'e']=_0xba7dc7[_0x45f401(0xbe5)]):(_0x2a2b85=_0x35121f(_0xd9cae0+_0x44451e,_0xba7dc7[_0x45f401(0x350)]),_0x20b344['sourc'+'e']=_0xba7dc7['NcsQz']);if(_0x292981)_0x431932=_0x4fc906[_0x292981]['last'];else _0x431932=_0x35121f(_0xba7dc7[_0x45f401(0xb80)](_0xd9cae0,_0x12fd72),_0xba7dc7[_0x45f401(0x350)]);_0x20b344[_0x45f401(0x706)+'w']=_0x2a2b85,_0x20b344[_0x45f401(0x5e6)+_0x45f401(0xaf9)]=_0x431932;if(_0xba7dc7['HfZtH'](typeof _0x2a2b85,_0x45f401(0x5e3)+'r')||!_0xba7dc7[_0x45f401(0x5f7)](isFinite,_0x2a2b85)||_0xba7dc7['shuEN'](typeof _0x431932,_0xba7dc7[_0x45f401(0xc86)])||!isFinite(_0x431932))return _0x20b344['ident'+'ified']=![],_0x20b344[_0x45f401(0x538)]=_0xba7dc7['YBaip'],null;if(_0x431932<-(0x2*-0x1336+0xca1*0x1+-0x61*-0x45)||_0x431932>0xd*0x183+0x29*-0x5a+0x4e3*-0x1)return _0x20b344[_0x45f401(0xd01)+'ified']=![],_0x20b344[_0x45f401(0x538)]=_0xba7dc7[_0x45f401(0xd32)]+Math[_0x45f401(0xb4c)](_0x431932)+(_0x45f401(0x465)+_0x45f401(0x759)+'nge'),null;return _0x20b344['why']='',_0x20b344[_0x45f401(0xd01)+'ified']=!![],_0x20b344[_0x45f401(0xa61)]=_0xba7dc7[_0x45f401(0x368)](_0x431932,_0x410599['pitch'+_0x45f401(0x80c)]),_0x20b344[_0x45f401(0x5dd)]=_0x2a2b85+_0x410599[_0x45f401(0x6ff)+'f'],_0x20b344;}function _0xf5d4f2(_0x4fc150,_0x5398b5,_0x218169,_0xf80f64){var _0x231fb2=_0x2fbbc2,_0x3dcc2d=_0xba7dc7[_0x231fb2(0x9f3)]['split']('|'),_0x109703=0x130*-0x1d+-0xc7*-0x3+0x201b*0x1;while(!![]){switch(_0x3dcc2d[_0x109703++]){case'0':if(_0x495ca8<=-0x25de+-0x1*0x25c+0x283a+0.05)return null;continue;case'1':var _0x4ad75b=_0x5398b5[0x194e+-0x1890+-0xbe]-_0x4fc150[0x2c+-0x2*-0x1349+-0x26be],_0x33b1c1=_0xba7dc7[_0x231fb2(0x2fa)](_0x5398b5[-0x46e*0x1+0x1bb1+0x1a*-0xe5],_0x4fc150[0x94*-0x4+-0xe6a+-0x10bb*-0x1]),_0x244d0c=_0x5398b5[0x5*0x40d+0x3*0x9d7+0x82*-0x62]-_0x4fc150[0x1fe5+0x1b16*-0x1+0x4cd*-0x1];continue;case'2':var _0x281556=_0xba7dc7[_0x231fb2(0xd90)](_0x4ad75b,_0x12c10e)+_0x33b1c1*_0x2aa654+_0xba7dc7[_0x231fb2(0xd90)](_0x244d0c,_0x354f39);continue;case'3':var _0x405646=Math[_0x231fb2(0x496)](_0x5a8e98);continue;case'4':var _0xa4ba5a=_0x218169/_0xf80f64;continue;case'5':var _0x12c10e=_0x350ecd,_0x2aa654=-0x10b2*-0x2+-0x3a1*-0x5+0xa7*-0x4f,_0x354f39=-_0x339f09;continue;case'6':if(!_0x28a22a)return null;continue;case'7':var _0x42ce05=_0x410599['fov']*Math['PI']/(-0x19c1*0x1+0x13ba+-0x6bb*-0x1);continue;case'8':return{'x':(_0x5a557c*(-0x8da+-0xdf8+-0x7f*-0x2e+0.5)+(-0x1*0x1a57+0x78c+0x12cb+0.5))*_0x218169,'y':_0xba7dc7[_0x231fb2(0xb49)](0x4f8*0x2+0x9e6+-0x2*0x9eb+0.5,_0xba7dc7['AbRlS'](_0x1fd369,0x2547+0x15ef+-0x3b36+0.5))*_0xf80f64,'z':_0x495ca8};case'9':var _0x198d8b=_0xba7dc7['ALeNe'](_0x4ad75b*_0xba7dc7['ozYkB'](_0xba7dc7[_0x231fb2(0xd96)](_0x2aa654,_0x350ecd),_0xba7dc7[_0x231fb2(0x3df)](_0x354f39,_0x214b8c))+_0xba7dc7['jRnnt'](_0x33b1c1,_0xba7dc7[_0x231fb2(0x2b6)](_0xba7dc7[_0x231fb2(0x9fa)](_0x354f39,_0x339f09),_0x12c10e*_0x350ecd)),_0x244d0c*(_0x12c10e*_0x214b8c-_0xba7dc7['NSCei'](_0x2aa654,_0x339f09)));continue;case'10':var _0x495ca8=_0xba7dc7['LBIQq'](_0xba7dc7[_0x231fb2(0xc74)](_0x4ad75b,_0x339f09),_0xba7dc7['iEyij'](_0x33b1c1,_0x214b8c))+_0x244d0c*_0x350ecd;continue;case'11':var _0x1fd369=_0xba7dc7[_0x231fb2(0x702)](_0x198d8b/_0x495ca8,_0x321363);continue;case'12':var _0x28a22a=_0xba7dc7[_0x231fb2(0xa03)](_0x5619a6);continue;case'13':var _0x5a8e98=_0xba7dc7[_0x231fb2(0x479)](_0xba7dc7['NSCei'](_0x28a22a[_0x231fb2(0xa61)],Math['PI']),0x10d8+-0x1*-0x173+-0x5dd*0x3),_0xfaacbb=_0x28a22a[_0x231fb2(0x5dd)]*Math['PI']/(0x1efd*0x1+-0x133e+-0xb0b);continue;case'14':var _0x321363=Math[_0x231fb2(0xbee)](_0x42ce05/(0x9*0x37d+-0x1d1a+0x2d*-0xd));continue;case'15':var _0x5a557c=_0x281556/_0x495ca8/(_0x321363*_0xa4ba5a);continue;case'16':if(_0xba7dc7[_0x231fb2(0x9df)](_0x5a557c,-(-0x6e2*-0x2+-0xe95*-0x2+0xb*-0x3e7+0.6000000000000001))||_0x5a557c>-0x1efe+0x5*0x2dd+0x356*0x5+0.6000000000000001||_0x1fd369<-(-0x192d+0x1d*0xbb+0x21*0x1f+0.6000000000000001)||_0xba7dc7['LOnrn'](_0x1fd369,-0x1ced+0x11dd*0x2+0x15c*-0x5+0.6000000000000001))return null;continue;case'17':var _0x339f09=Math[_0x231fb2(0x677)](_0xfaacbb)*_0x405646,_0x214b8c=-Math[_0x231fb2(0x677)](_0x5a8e98),_0x350ecd=_0xba7dc7['OAXMo'](Math['cos'](_0xfaacbb),_0x405646);continue;}break;}}var _0x50ad68={'open':![],'cat':_0x2fbbc2(0xa18)+'t','built':![],'root':null,'cols':null,'head':null,'sub':null,'syncs':[],'pos':null},_0x5638d8=_0xba7dc7['uwNkp'],_0x552ce7=null,_0x1cb02f=[{'id':_0x2fbbc2(0xa18)+'t','label':_0xba7dc7[_0x2fbbc2(0x5c8)]},{'id':_0x2fbbc2(0xb0d)+'ls','label':_0x2fbbc2(0x44e)},{'id':_0x2fbbc2(0xb9b)+'s','label':_0x2fbbc2(0xb0c)},{'id':_0xba7dc7['uQtVd'],'label':_0x2fbbc2(0x44a)}],_0x455321=_0xba7dc7[_0x2fbbc2(0x40f)](_0xba7dc7[_0x2fbbc2(0x221)](_0xba7dc7['viGya'](_0xba7dc7[_0x2fbbc2(0x588)](_0xba7dc7[_0x2fbbc2(0x85e)](_0xba7dc7[_0x2fbbc2(0x51d)](_0xba7dc7[_0x2fbbc2(0x79a)](_0xba7dc7[_0x2fbbc2(0x5f2)](_0xba7dc7[_0x2fbbc2(0xc35)](_0xba7dc7['MAeoM'](_0xba7dc7[_0x2fbbc2(0x79c)](_0xba7dc7[_0x2fbbc2(0xc9e)](_0xba7dc7[_0x2fbbc2(0x709)](_0xba7dc7['svOis'](_0xba7dc7['jgiAh'](_0xba7dc7['QLdEB'](_0xba7dc7['sUCLi'](_0xba7dc7[_0x2fbbc2(0xac9)](_0xba7dc7['LXqVl'](_0xba7dc7[_0x2fbbc2(0x202)](_0xba7dc7['uPkok'](_0xba7dc7[_0x2fbbc2(0x86f)](_0xba7dc7[_0x2fbbc2(0x5f5)](_0xba7dc7[_0x2fbbc2(0x683)](_0xba7dc7[_0x2fbbc2(0x555)](_0x2fbbc2(0xc80)+'ra-me'+_0x2fbbc2(0x53d)+'ot{al'+_0x2fbbc2(0x215)+_0x2fbbc2(0x620)+_0xba7dc7['lFGJo'],'displ'+'ay:fl'+_0x2fbbc2(0x698)+_0x2fbbc2(0x1fc)+_0x2fbbc2(0x203)+'ding:'+_0x2fbbc2(0x7c8)+'borde'+'r-rad'+_0x2fbbc2(0x308)+_0x2fbbc2(0xcda)+_0x2fbbc2(0x732)+'r-eve'+_0x2fbbc2(0xbb7)+'uto;z'+_0x2fbbc2(0xc5a)+_0x2fbbc2(0x788)+_0x2fbbc2(0xade)+_0x2fbbc2(0x9e9))+('backg'+_0x2fbbc2(0xb4c)+':rgba'+_0x2fbbc2(0xd17)+'7,21,'+'.82);'+_0x2fbbc2(0xb86)+'rop-f'+_0x2fbbc2(0x36b)+':blur'+_0x2fbbc2(0x4b2)+_0x2fbbc2(0xa22)+'urate'+'(150%'+_0x2fbbc2(0x95a)+'bkit-'+_0x2fbbc2(0xb86)+'rop-f'+_0x2fbbc2(0x36b)+':blur'+'(22px'+_0x2fbbc2(0xa22)+_0x2fbbc2(0x293)+_0x2fbbc2(0xaf8)+');')+_0xba7dc7[_0x2fbbc2(0x93c)]+(_0x2fbbc2(0x534)+_0x2fbbc2(0x793)+_0x2fbbc2(0x56d)+_0x2fbbc2(0x4a7)+'trans'+_0x2fbbc2(0xa5d)+_0x2fbbc2(0x32a)+');poi'+'nter-'+_0x2fbbc2(0x777)+_0x2fbbc2(0x6e4)+'e;tra'+_0x2fbbc2(0x74e)+'on:op'+_0x2fbbc2(0xcc5)+_0x2fbbc2(0x2af)+_0x2fbbc2(0x7d3)+',tran'+'sform'+'\x20.45s'+'\x20cubi'+'c-bez'+_0x2fbbc2(0xa5f)+_0x2fbbc2(0xd18)+'.36,1'+');')+(_0x2fbbc2(0xc0f)+_0x2fbbc2(0x71a)+'ef2;f'+'ont-s'+_0x2fbbc2(0x616)+'3px;f'+'ont-f'+_0x2fbbc2(0x63d)+_0x2fbbc2(0x530)+_0x2fbbc2(0xcac)+_0x2fbbc2(0x9ec)+'\x20UI\x22,'+_0x2fbbc2(0xa4b)+_0x2fbbc2(0x741)+_0x2fbbc2(0x362)+'serif'+';}')+_0xba7dc7['YMZya']+('.mn-s'+_0x2fbbc2(0xb5a)+_0x2fbbc2(0x766)+'y:fle'+_0x2fbbc2(0x50a)+'x-dir'+'ectio'+_0x2fbbc2(0x8dc)+_0x2fbbc2(0xbb2)+_0x2fbbc2(0x247)+'items'+':cent'+_0x2fbbc2(0x701)+_0x2fbbc2(0x6cd)+_0x2fbbc2(0x4cb)+_0x2fbbc2(0xbff)+'x;fle'+_0x2fbbc2(0x5b0)+'e;pad'+_0x2fbbc2(0x365)+_0x2fbbc2(0xafe)+'0;'),_0xba7dc7[_0x2fbbc2(0x7e6)])+(_0x2fbbc2(0x28e)+'ogo{d'+'ispla'+_0x2fbbc2(0x695)+'d;pla'+_0x2fbbc2(0xd9a)+'ems:c'+'enter'+_0x2fbbc2(0x4cb)+'h:32p'+'x;hei'+_0x2fbbc2(0xcfb)+_0x2fbbc2(0xd82)+_0x2fbbc2(0x4d6)+'-bott'+_0x2fbbc2(0xa4d)+'x;}'),_0xba7dc7[_0x2fbbc2(0x589)])+(_0x2fbbc2(0x7f3)+_0x2fbbc2(0x635)+_0x2fbbc2(0x795)+':flex'+_0x2fbbc2(0x487)+_0x2fbbc2(0x1de)+_0x2fbbc2(0x5af)+'nter;'+'justi'+_0x2fbbc2(0xc4b)+'ntent'+_0x2fbbc2(0xa4a)+_0x2fbbc2(0xabb)+'dth:5'+'2px;h'+_0x2fbbc2(0xac5)+_0x2fbbc2(0x4ef)+_0x2fbbc2(0x75b)+'er:0;'+_0x2fbbc2(0x727)+'r-rad'+_0x2fbbc2(0xb69)+'0px;'),_0x2fbbc2(0x1e2)+'round'+_0x2fbbc2(0x4f3)+'spare'+'nt;co'+'lor:r'+_0x2fbbc2(0x978)+_0x2fbbc2(0x24c)+_0x2fbbc2(0x853)+',.4);'+_0x2fbbc2(0xa1a)+'r:poi'+_0x2fbbc2(0x4e6)+'font-'+_0x2fbbc2(0x2a7)+_0x2fbbc2(0x7c8)+'font-'+'weigh'+_0x2fbbc2(0x6ca)+_0x2fbbc2(0x6bc)+_0x2fbbc2(0x7c1)+_0x2fbbc2(0x700)+_0x2fbbc2(0x421)+';}')+(_0x2fbbc2(0x7f3)+'ab:ho'+_0x2fbbc2(0xb39)+'olor:'+_0x2fbbc2(0xbe8)+_0x2fbbc2(0x5e5)+_0x2fbbc2(0x68a)+_0x2fbbc2(0x482)+';}'),_0xba7dc7[_0x2fbbc2(0xad9)]),_0xba7dc7[_0x2fbbc2(0xc9f)]),_0x2fbbc2(0x7f3)+'op{di'+_0x2fbbc2(0x795)+':flex'+_0x2fbbc2(0x487)+'n-ite'+_0x2fbbc2(0x5af)+'nter;'+_0x2fbbc2(0x637)+_0x2fbbc2(0xcda)+_0x2fbbc2(0xa3b)+'g:6px'+_0x2fbbc2(0x476)+_0x2fbbc2(0xd83)+_0x2fbbc2(0x238)+'selec'+'t:non'+'e;}'),_0x2fbbc2(0x7f3)+'itles'+'{flex'+_0x2fbbc2(0xa02)+_0x2fbbc2(0xba0)+_0x2fbbc2(0x416)+'}'),_0xba7dc7['zGVbD'])+_0xba7dc7['OXFEu']+('.mn-c'+_0x2fbbc2(0x8c2)+_0x2fbbc2(0x7b6)+'ay:gr'+_0x2fbbc2(0x40a)+_0x2fbbc2(0x522)+_0x2fbbc2(0x86b)+_0x2fbbc2(0xcbc)+_0x2fbbc2(0x972)+'th:28'+_0x2fbbc2(0x53f)+'ight:'+_0x2fbbc2(0x402)+_0x2fbbc2(0x727)+_0x2fbbc2(0x96f)+_0x2fbbc2(0xd25)+_0x2fbbc2(0x638)+_0x2fbbc2(0x53e)+_0x2fbbc2(0xc7c)+_0x2fbbc2(0x2e4)+_0x2fbbc2(0xce1)+'anspa'+'rent;')+(_0x2fbbc2(0xc0f)+':inhe'+_0x2fbbc2(0xc91)+_0x2fbbc2(0x868)+'y:.45'+';curs'+_0x2fbbc2(0x3ee)+'inter'+';}')+(_0x2fbbc2(0x2e0)+_0x2fbbc2(0x91b)+'hover'+_0x2fbbc2(0x443)+'ity:1'+_0x2fbbc2(0x736)+_0x2fbbc2(0xa76)+'d:rgb'+'a(255'+_0x2fbbc2(0x9b1)+_0x2fbbc2(0xa42)+_0x2fbbc2(0x755)),_0xba7dc7[_0x2fbbc2(0xc23)])+_0xba7dc7['MEQpQ'],_0xba7dc7[_0x2fbbc2(0xca0)])+('.mn-c'+_0x2fbbc2(0xb81)+'-webk'+_0x2fbbc2(0x3d9)+'rollb'+_0x2fbbc2(0x354)+_0x2fbbc2(0x2c8)+'px;}')+_0xba7dc7['PLeuZ'],'.sk-c'+_0x2fbbc2(0x6df)+_0x2fbbc2(0xd25)+_0x2fbbc2(0x638)+_0x2fbbc2(0x7c7)+'px;ba'+'ckgro'+'und:r'+_0x2fbbc2(0x978)+_0x2fbbc2(0xa75)+'5,255'+_0x2fbbc2(0x31f)+_0x2fbbc2(0x205)+'-shad'+'ow:in'+'set\x200'+'\x200\x200\x20'+_0x2fbbc2(0x5f3)+_0x2fbbc2(0x978)+'55,25'+'5,255'+_0x2fbbc2(0x7da)+';}')+(_0x2fbbc2(0x346)+_0x2fbbc2(0x9b7)+'n{bac'+_0x2fbbc2(0x2e4)+_0x2fbbc2(0x42a)+_0x2fbbc2(0x890)+_0x2fbbc2(0xccc)+_0x2fbbc2(0x9b1)+_0x2fbbc2(0x77e)+_0x2fbbc2(0xce4)+'hadow'+':inse'+_0x2fbbc2(0x66b)+_0x2fbbc2(0x455)+_0x2fbbc2(0x25d)+'a(255'+',107,'+_0x2fbbc2(0x2a6)+'28);}'),'.sk-c'+_0x2fbbc2(0x57f)+_0x2fbbc2(0x407)+_0x2fbbc2(0x766)+_0x2fbbc2(0x44f)+_0x2fbbc2(0x34b)+_0x2fbbc2(0xb8c)+_0x2fbbc2(0x370)+'enter'+_0x2fbbc2(0x864)+_0x2fbbc2(0x8b5)+'addin'+_0x2fbbc2(0xb5f)+'x\x2012p'+_0x2fbbc2(0x3cd)),'.sk-c'+'ard-t'+_0x2fbbc2(0x22d)+_0x2fbbc2(0xa7f)+'1;min'+'-widt'+'h:0;}'),_0x2fbbc2(0x346)+'ard-t'+_0x2fbbc2(0x39b)+_0x2fbbc2(0x9b6)+'g{fon'+'t-siz'+'e:13p'+_0x2fbbc2(0xc44)+_0x2fbbc2(0x244)+_0x2fbbc2(0x9a3)+'00;co'+'lor:r'+'gba(2'+'46,23'+_0x2fbbc2(0x853)+',.45)'+';}')+(_0x2fbbc2(0x346)+_0x2fbbc2(0x9b7)+'n\x20.sk'+'-card'+_0x2fbbc2(0x8ac)+_0x2fbbc2(0x8ef)+'ong{c'+'olor:'+_0x2fbbc2(0x41f)+_0x2fbbc2(0xc84)),_0xba7dc7['KTKcG']),_0xba7dc7[_0x2fbbc2(0x249)]),_0x2fbbc2(0x346)+_0x2fbbc2(0x36e)+'splay'+_0x2fbbc2(0xbbd)+_0x2fbbc2(0x487)+'n-ite'+_0x2fbbc2(0x5af)+_0x2fbbc2(0x4e6)+_0x2fbbc2(0x7a1)+_0x2fbbc2(0x3c2)+_0x2fbbc2(0x7bd)+':4px\x20'+_0x2fbbc2(0xb78)+_0x2fbbc2(0x554)+'e:11.'+'5px;}')+(_0x2fbbc2(0x558)+_0x2fbbc2(0xa24)+'flex:'+'1;col'+_0x2fbbc2(0xb18)+'ba(24'+_0x2fbbc2(0xd0d)+_0x2fbbc2(0x2dc)+_0x2fbbc2(0xc00)+'}')+('.sk-h'+'int{d'+_0x2fbbc2(0x766)+_0x2fbbc2(0x294)+_0x2fbbc2(0x2d5)+'nt-si'+_0x2fbbc2(0x303)+_0x2fbbc2(0x757)+'acity'+':.4;}')+('.sk-s'+_0x2fbbc2(0x5d5)+'{posi'+'tion:'+_0x2fbbc2(0xb7f)+'ive;w'+_0x2fbbc2(0x387)+'26px;'+'heigh'+_0x2fbbc2(0xbf5)+'x;bor'+_0x2fbbc2(0x43d)+_0x2fbbc2(0x75b)+_0x2fbbc2(0xccd)+_0x2fbbc2(0x590)+'99px;'+_0x2fbbc2(0x1e2)+_0x2fbbc2(0xb4c)+':rgba'+_0x2fbbc2(0x9a6)+'255,2'+_0x2fbbc2(0x454)+_0x2fbbc2(0xc0c)+'rsor:'+'point'+_0x2fbbc2(0x5a8)+_0x2fbbc2(0x4f8)+'ne;}')+(_0x2fbbc2(0x553)+_0x2fbbc2(0x5d5)+'::aft'+'er{co'+'ntent'+_0x2fbbc2(0x798)+_0x2fbbc2(0x790)+'on:ab'+'solut'+_0x2fbbc2(0x6d3)+_0x2fbbc2(0x6d2)+'left:'+_0x2fbbc2(0xd1c)+'idth:'+'8px;h'+'eight'+':8px;'+_0x2fbbc2(0x727)+_0x2fbbc2(0xcbd)+'ius:5'+_0x2fbbc2(0xd33))+(_0x2fbbc2(0x1e2)+_0x2fbbc2(0xb4c)+_0x2fbbc2(0xc5f)+'(255,'+'255,2'+_0x2fbbc2(0x7e5)+_0x2fbbc2(0x55b)+'ansit'+_0x2fbbc2(0x931)+'eft\x20.'+'2s,ba'+_0x2fbbc2(0xa8e)+_0x2fbbc2(0x22c)+'2s;}'),_0x2fbbc2(0x553)+'witch'+_0x2fbbc2(0x7ea)+'-chec'+_0x2fbbc2(0x91d)+_0x2fbbc2(0x3b3)+_0x2fbbc2(0x54f)+_0x2fbbc2(0x2e4)+'nd:rg'+_0x2fbbc2(0x890)+'5,107'+_0x2fbbc2(0x900)+_0x2fbbc2(0x49c)+'}'),'.sk-s'+'witch'+_0x2fbbc2(0x7ea)+_0x2fbbc2(0x20f)+_0x2fbbc2(0x91d)+_0x2fbbc2(0x3b3)+_0x2fbbc2(0xd8d)+'ter{l'+_0x2fbbc2(0x516)+'5px;b'+_0x2fbbc2(0x57d)+'ound:'+'#ff6b'+_0x2fbbc2(0x92f)),_0xba7dc7['iXeHy']),_0xba7dc7[_0x2fbbc2(0x1d9)])+(_0x2fbbc2(0x553)+'lider'+_0x2fbbc2(0xd2b)+_0x2fbbc2(0xce3)+_0x2fbbc2(0x9a2)+_0x2fbbc2(0x8d3)+_0x2fbbc2(0x9f1)+'-trac'+'k{hei'+_0x2fbbc2(0x764)+_0x2fbbc2(0xac8)+_0x2fbbc2(0xd86)+_0x2fbbc2(0x75e)+_0x2fbbc2(0x805)+';'),_0xba7dc7[_0x2fbbc2(0x357)])+(_0x2fbbc2(0x553)+_0x2fbbc2(0x73b)+_0x2fbbc2(0xd2b)+_0x2fbbc2(0xce3)+'slide'+'r-thu'+_0x2fbbc2(0x871)+_0x2fbbc2(0xbb9)+'-appe'+'aranc'+_0x2fbbc2(0x828)+'e;wid'+_0x2fbbc2(0x714)+_0x2fbbc2(0x250)+'ght:6'+_0x2fbbc2(0x3bb)+_0x2fbbc2(0x55e)+_0x2fbbc2(0x498)+_0x2fbbc2(0xcd4)+'order'+'-radi'+_0x2fbbc2(0x68c)+_0x2fbbc2(0xb7e)+'kgrou'+'nd:#f'+'f6b9d'+';}')+('.sk-v'+_0x2fbbc2(0xacd)+_0x2fbbc2(0x3f1)+'ze:11'+'px;fo'+'nt-we'+_0x2fbbc2(0x775)+'600;m'+_0x2fbbc2(0xb0f)+'dth:3'+_0x2fbbc2(0x771)+_0x2fbbc2(0x7cf)+_0x2fbbc2(0xd3a)+_0x2fbbc2(0x358)+';colo'+'r:rgb'+'a(246'+',238,'+_0x2fbbc2(0x87a)+_0x2fbbc2(0xc95))+('.sk-n'+_0x2fbbc2(0xa93)+'ont-s'+'ize:1'+_0x2fbbc2(0x7d7)+_0x2fbbc2(0xa88)+'rgba('+_0x2fbbc2(0x5e5)+_0x2fbbc2(0x68a)+_0x2fbbc2(0x576)+_0x2fbbc2(0xa16)+'ing:2'+'px\x200;'+_0x2fbbc2(0x5a7)+'-spac'+'e:pre'+'-wrap'+';}')+(_0x2fbbc2(0x2ba)+_0x2fbbc2(0x758)+_0x2fbbc2(0x5c9)+_0x2fbbc2(0x397)+_0x2fbbc2(0xaf1)+_0x2fbbc2(0x6c8))+_0xba7dc7['LwQHR'],_0x2fbbc2(0x2a3)+_0x2fbbc2(0x2a7)+'11.5p'+_0x2fbbc2(0xc44)+_0x2fbbc2(0x244)+'ght:7'+_0x2fbbc2(0xd59)+'rsor:'+_0x2fbbc2(0xaac)+_0x2fbbc2(0x809)+'nt-fa'+_0x2fbbc2(0x46f)+_0x2fbbc2(0x5e2)+_0x2fbbc2(0x831)),'.sk-b'+_0x2fbbc2(0xcc9)+_0x2fbbc2(0x282)+_0x2fbbc2(0x36b)+_0x2fbbc2(0xbb6)+_0x2fbbc2(0x33b)+'s(1.1'+');}')+(_0x2fbbc2(0x207)+_0x2fbbc2(0x217)+'nt:11'+_0x2fbbc2(0x2b7)+'5\x20ui-'+'monos'+_0x2fbbc2(0x71c)+'Conso'+_0x2fbbc2(0x941)+_0x2fbbc2(0x24b)+'ace;w'+'hite-'+'space'+_0x2fbbc2(0x96a)+'wrap;'+_0x2fbbc2(0x398)+'break'+':brea'+_0x2fbbc2(0x5df)+_0x2fbbc2(0x396)+'gin:0'+_0x2fbbc2(0xc67)+'ity:.'+'75;ma'+_0x2fbbc2(0x9c8)+'ght:2'+_0x2fbbc2(0xd93)+_0x2fbbc2(0x27e)+_0x2fbbc2(0x571)+_0x2fbbc2(0x9bd))+(_0x2fbbc2(0xc80)+'ra-pe'+'tal{p'+_0x2fbbc2(0x790)+'on:fi'+_0x2fbbc2(0x800)+_0x2fbbc2(0xb1e)+_0x2fbbc2(0x2f7)+_0x2fbbc2(0x4c1)+_0x2fbbc2(0x89b)+_0x2fbbc2(0xc5a)+_0x2fbbc2(0x788)+_0x2fbbc2(0xade)+_0x2fbbc2(0xc22)+_0x2fbbc2(0x5db)+_0x2fbbc2(0xaac)+_0x2fbbc2(0xabb)+_0x2fbbc2(0x29a)+_0x2fbbc2(0xb12)+_0x2fbbc2(0xac5)+_0x2fbbc2(0x7ec)+_0x2fbbc2(0xc67)+_0x2fbbc2(0x8e6)+_0x2fbbc2(0x694))+_0xba7dc7[_0x2fbbc2(0xc53)],_0xcefdff=_0xba7dc7[_0x2fbbc2(0xd03)](_0xba7dc7['BYIQk'](_0xba7dc7['eTCvt'],_0xba7dc7['jvUvW']),_0xba7dc7['BXwTJ']),_0x379633=_0xba7dc7[_0x2fbbc2(0x50d)]+('fill='+'\x22none'+_0x2fbbc2(0x807)+_0x2fbbc2(0x272)+'#ff6b'+_0x2fbbc2(0xa85)+'troke'+_0x2fbbc2(0x4e9)+_0x2fbbc2(0x4dc)+'6\x22\x20st'+_0x2fbbc2(0x31b)+'linec'+_0x2fbbc2(0x4a8)+'ound\x22'+'\x20stro'+_0x2fbbc2(0x1f6)+_0x2fbbc2(0xb08)+'n=\x22ro'+_0x2fbbc2(0x4f0)+'>')+_0xba7dc7[_0x2fbbc2(0xad2)];function _0x5d4881(_0x1cc829,_0x4dada5,_0x48a443){var _0x37a23b=_0x2fbbc2,_0x58c1d7=document['creat'+_0x37a23b(0x9a4)+_0x37a23b(0x25c)](_0x1cc829);if(_0x4dada5)_0x58c1d7[_0x37a23b(0x316)+'Name']=_0x4dada5;if(_0xba7dc7['NaDXj'](_0x48a443,null))_0x58c1d7[_0x37a23b(0x4f4)+_0x37a23b(0x241)]=_0x48a443;return _0x58c1d7;}function _0xd32149(_0x54b832,_0x1451fd){var _0x472766=_0x2fbbc2,_0x184820=_0xba7dc7[_0x472766(0xcfc)]['split']('|'),_0x49498f=-0x1e*0x113+-0x1286+-0x1*-0x32c0;while(!![]){switch(_0x184820[_0x49498f++]){case'0':var _0x149359=_0x5d4881(_0xba7dc7[_0x472766(0xa81)],_0x472766(0x54d)+_0x472766(0xb1a)+'tle',_0xba7dc7['jBUGR'](_0xba7dc7['gOuYU'],_0x54b832)+(_0x472766(0x6d6)+_0x472766(0x384)));continue;case'1':_0x5d6528[_0x472766(0xd16)+_0x472766(0x9ca)+'d'](_0x264c5f);continue;case'2':var _0x5d6528=_0x5d4881(_0x472766(0x36c),_0xba7dc7['QOeYU'](_0xba7dc7['rrJdd'],_0x1451fd?_0xba7dc7[_0x472766(0x6c3)]:''));continue;case'3':_0x5d6528[_0x472766(0xaf7)]=_0x10da30;continue;case'4':var _0x10da30=_0x5d4881('div',_0xba7dc7['kRcJr']);continue;case'5':var _0x264c5f=_0x5d4881(_0x472766(0x36c),_0x472766(0x54d)+'rd-he'+'ad');continue;case'6':_0x5d6528[_0x472766(0xd16)+_0x472766(0x9ca)+'d'](_0x10da30);continue;case'7':_0x5d6528[_0x472766(0x4e1)]=_0x149359;continue;case'8':return _0x5d6528;case'9':_0x264c5f['appen'+_0x472766(0x9ca)+'d'](_0x149359);continue;}break;}}function _0x5c744f(_0x5753e2,_0x34c703){var _0x17d1af=_0x2fbbc2,_0x3094b2={'aIYLm':function(_0x5e5a5,_0x204483){return _0x5e5a5(_0x204483);},'VGfsP':_0x17d1af(0x32e)+_0x17d1af(0xd6d)+'ed','ymmWp':function(_0x54d938){var _0xaba0c2=_0x17d1af;return _0xba7dc7[_0xaba0c2(0xb5b)](_0x54d938);},'UXkGw':function(_0x4e8eed,_0x3b2139){var _0x9079ad=_0x17d1af;return _0xba7dc7[_0x9079ad(0x8eb)](_0x4e8eed,_0x3b2139);},'rZBLT':function(_0x3175b6){var _0x215953=_0x17d1af;return _0xba7dc7[_0x215953(0x68f)](_0x3175b6);},'zjINp':function(_0x3710c0){var _0x11c095=_0x17d1af;return _0xba7dc7[_0x11c095(0xc56)](_0x3710c0);}},_0x64d6d7=_0x5d4881(_0xba7dc7['KeBjI'],_0x17d1af(0x938)+'itch');_0x64d6d7[_0x17d1af(0x72e)]=_0xba7dc7[_0x17d1af(0x74a)];var _0x4c9aab=function(){var _0x7ffbed=_0x17d1af;if(_0x7ffbed(0x9dc)!=='mAeSB')_0x64d6d7['setAt'+'tribu'+'te'](_0x3094b2[_0x7ffbed(0x3fe)],_0x3094b2[_0x7ffbed(0x6db)](_0x5753e2)?_0x7ffbed(0xabe):'false');else{var _0x5c7dcc=_0x588018[_0x7ffbed(0x6b4)](this,arguments);try{if(_0x5c7dcc&&typeof _0x5c7dcc[_0x7ffbed(0x712)]===_0x7ffbed(0x849)+_0x7ffbed(0x584))_0x5c7dcc['then'](_0x480e34,function(){});else _0x3094b2['aIYLm'](_0x420a75,_0x5c7dcc);}catch(_0x43373f){}return _0x5c7dcc;}};return _0x64d6d7['oncli'+'ck']=function(){var _0x1be9cf=_0x17d1af;_0x3094b2[_0x1be9cf(0xbf4)](_0x34c703,!_0x3094b2[_0x1be9cf(0x731)](_0x5753e2)),_0x3094b2[_0x1be9cf(0x2f8)](_0x4c9aab);},_0x4c9aab(),_0x64d6d7['sync']=_0x4c9aab,_0x50ad68['syncs'][_0x17d1af(0x3ad)](_0x4c9aab),_0x64d6d7;}function _0x888f82(_0x3a3252,_0xb509e4,_0x24accc,_0xf870b,_0x322d92){var _0x494822=_0x2fbbc2,_0xcfcd70={'yTaUe':function(_0x158f2a,_0x279042){return _0xba7dc7['TwITA'](_0x158f2a,_0x279042);},'RWeZy':function(_0x442e55,_0x4e9834){return _0x442e55*_0x4e9834;},'EbxNR':function(_0x5dd41b,_0x2cb348){return _0x5dd41b/_0x2cb348;},'fglyu':function(_0x36b3ba,_0x1aab7a){return _0x36b3ba-_0x1aab7a;},'ongBD':function(_0x6868f4,_0x11faff){var _0x50bcb5=_0x4e00;return _0xba7dc7[_0x50bcb5(0xadb)](_0x6868f4,_0x11faff);}};if(_0xba7dc7['xEXTs']===_0xba7dc7[_0x494822(0x5ef)]){var _0x43e9f8=_0x5d4881(_0xba7dc7[_0x494822(0xa81)],_0x494822(0x54e)+'nge'),_0x1b9801=document[_0x494822(0x733)+_0x494822(0x9a4)+_0x494822(0x25c)](_0xba7dc7[_0x494822(0xc6c)]);_0x1b9801[_0x494822(0x72e)]='range',_0x1b9801[_0x494822(0x316)+_0x494822(0x9b2)]=_0xba7dc7['dcNIM'],_0x1b9801[_0x494822(0x5ae)]=String(_0x3a3252),_0x1b9801['max']=_0xba7dc7[_0x494822(0x8a4)](String,_0xb509e4),_0x1b9801[_0x494822(0x556)]=String(_0x24accc);var _0x2d6d74=_0x5d4881(_0x494822(0x585),_0xba7dc7[_0x494822(0x60d)]),_0x12beec=function(){var _0x4377cc=_0x494822,_0x5d7f31=_0xf870b();_0x1b9801['value']=_0xcfcd70[_0x4377cc(0xac2)](String,_0x5d7f31),_0x2d6d74['textC'+_0x4377cc(0x98d)+'t']=(_0x24accc<0x242b*0x1+0x21bd*-0x1+-0x26d?_0x5d7f31[_0x4377cc(0x1f9)+'ed'](-0x1*-0x209+-0x2ef*-0x9+-0x1c6f):String(Math[_0x4377cc(0xb4c)](_0x5d7f31)))+(_0x1b9801[_0x4377cc(0x8d2)+'et'][_0x4377cc(0xb8d)]||'');var _0x4d1556=_0xcfcd70[_0x4377cc(0x460)](_0xcfcd70[_0x4377cc(0xb68)](_0xcfcd70[_0x4377cc(0x8f5)](_0x5d7f31,_0x3a3252),_0xb509e4-_0x3a3252),0x7*0x257+0x11f9+-0x21f6);_0x1b9801['style'][_0x4377cc(0xd0f)+_0x4377cc(0xc29)+'y']('--p',_0xcfcd70['ongBD'](_0x4d1556,'%'));};return _0x1b9801['oninp'+'ut']=function(){var _0x440675=_0x494822;_0xba7dc7[_0x440675(0x6e5)](_0x322d92,parseFloat(_0x1b9801[_0x440675(0xb9b)])||_0x3a3252),_0x12beec();},_0x43e9f8['appen'+_0x494822(0x9ca)+'d'](_0x1b9801),_0x43e9f8['appen'+_0x494822(0x9ca)+'d'](_0x2d6d74),_0x43e9f8['sync']=_0x12beec,_0x43e9f8[_0x494822(0xd55)]=_0x1b9801,_0x12beec(),_0x50ad68[_0x494822(0x581)][_0x494822(0x3ad)](_0x12beec),_0x43e9f8;}else _0x863e21=_0x569352('Sessi'+'on',![]),_0xdf602e[_0x494822(0x3ad)](_0x59b44d);}function _0x146b53(_0x4ddd94,_0x44c404){var _0x58e106=_0x2fbbc2,_0x2e18cb=_0xba7dc7[_0x58e106(0x748)](_0x5d4881,'div',_0xba7dc7[_0x58e106(0x60e)]),_0x42590b=_0x5d4881(_0x58e106(0x36c),_0x58e106(0xd68)+'bel',_0x4ddd94+(_0x44c404?_0xba7dc7['RhJRN'](_0x58e106(0xab8)+'\x20clas'+_0x58e106(0x722)+_0x58e106(0x2b3)+'\x27>',_0x44c404)+_0xba7dc7['oyvHK']:''));return _0x2e18cb[_0x58e106(0xd16)+'dChil'+'d'](_0x42590b),_0x2e18cb;}function _0x5751bb(_0x1c4936,_0xf2a061,_0x281aea,_0x4a2370){var _0x520ba0=_0x2fbbc2,_0xd60ad1={'iHfEu':'mn-ta'+'b','HzTVF':function(_0x1980c6,_0x13fbfb){var _0x11dae0=_0x4e00;return _0xba7dc7[_0x11dae0(0x69a)](_0x1980c6,_0x13fbfb);},'ssTZf':function(_0x4d2256,_0x2d815c,_0x4bc212){var _0x57eac0=_0x4e00;return _0xba7dc7[_0x57eac0(0x1ec)](_0x4d2256,_0x2d815c,_0x4bc212);}},_0x445b05=_0x1c4936&&_0x1c4936[_0x520ba0(0x208)+'y']&&_0x1c4936[_0x520ba0(0x208)+'y'][_0xf2a061];if(!_0x445b05)return'-';for(var _0x2b89cc=0x85*-0x7+0x1*0x5aa+-0x207;_0x2b89cc<_0x445b05['lengt'+'h'];_0x2b89cc++){if(_0xba7dc7['xyYWi']!==_0xba7dc7['KfNBd']){if(_0x445b05[_0x2b89cc]['o']===_0x281aea){if(_0x4a2370==='v3'){if(_0xba7dc7[_0x520ba0(0xa3c)]('ZNwxa','ZNwxa')){var _0x58f055=_0x445b05[_0x2b89cc][_0x520ba0(0x6a7)]||[_0x445b05[_0x2b89cc]['v'],0x2f*-0x19+0x1c1f+-0x1788,-0x1*-0x14b7+-0x4f*-0x1+-0x1506];return _0x58f055[_0x520ba0(0x786)](function(_0x26f359){var _0x226ad2=_0x520ba0;return _0xba7dc7[_0x226ad2(0x702)](Math[_0x226ad2(0xb4c)](_0xba7dc7[_0x226ad2(0xb76)](_0x26f359,0x132c+-0x19b2+0xf*0x76)),-0x6*-0x2a2+0x3c7*0x5+-0x224b);})['join']('\x20\x20');}else{if(_0x4d7eb6[_0x520ba0(0x603)+'ns'][_0x5ab968][_0x520ba0(0x316)+_0x520ba0(0x97a)])_0x1f4fa6['butto'+'ns'][_0x22ef8e][_0x520ba0(0x316)+_0x520ba0(0x9b2)]=_0xd60ad1[_0x520ba0(0xbb3)]+(_0xd60ad1['HzTVF'](_0x292d09,_0xd1f7a9)?_0x520ba0(0x68b)+'ve':'');}}var _0x472748=_0x445b05[_0x2b89cc]['v'];return _0xba7dc7[_0x520ba0(0x279)](typeof _0x472748,_0x520ba0(0x5e3)+'r')?Math['round'](_0xba7dc7['gUZLM'](_0x472748,-0x8d9+-0x4*0xa2+0x5b*0x2b))/(0x1087+0x1d65+-0x2a04):_0xba7dc7[_0x520ba0(0x6e5)](String,_0x472748);}}else{_0x5066ae=_0x4ac21c,_0x1ad735=[],_0xd60ad1[_0x520ba0(0x8aa)](_0x254443,_0x520ba0(0x3b7)+'t',{'report':_0x52c7bc()});return;}}return'-';}function _0x28bcbd(_0x5bc0bb){var _0x26c27d=_0x2fbbc2,_0x24fc4d={'kJQAp':function(_0x3d39ec,_0x116d47){var _0x3a4f34=_0x4e00;return _0xba7dc7[_0x3a4f34(0xca7)](_0x3d39ec,_0x116d47);},'mcyrQ':_0x26c27d(0x964),'mBObx':function(_0x44aaa1,_0x409fed){return _0x44aaa1===_0x409fed;},'YBBqO':'ttSwR','mHslx':function(_0x19b9ca,_0x1d95f1){return _0x19b9ca(_0x1d95f1);},'qnOCj':function(_0x192b16,_0x30d5b6){var _0x1b5976=_0x26c27d;return _0xba7dc7[_0x1b5976(0xbf6)](_0x192b16,_0x30d5b6);},'nbydV':function(_0x50490d,_0x28674b){return _0xba7dc7['ylTIv'](_0x50490d,_0x28674b);},'NNWZv':function(_0x2d8402,_0x1c2852){return _0x2d8402!==_0x1c2852;},'DkJnX':_0xba7dc7[_0x26c27d(0xa48)],'tSZCv':function(_0x2cef80,_0x24f5bf){return _0xba7dc7['WfHtA'](_0x2cef80,_0x24f5bf);},'thUNs':function(_0x332cba,_0x51ed14){return _0x332cba*_0x51ed14;},'kURey':_0x26c27d(0x5e3)+'r','iJqds':function(_0x5b5781,_0x4af3b0){return _0xba7dc7['uMzIB'](_0x5b5781,_0x4af3b0);},'WSgLD':function(_0x115736,_0x12d891){return _0x115736<=_0x12d891;},'WVCQP':function(_0x3a7cf5,_0x3f4279){return _0x3a7cf5*_0x3f4279;},'Teika':_0xba7dc7['EyGoo']},_0x484547=_0x552ce7,_0x4861ef=[],_0x58f71e;if(_0x5bc0bb===_0xba7dc7[_0x26c27d(0x66e)]){var _0x169494=_0xd32149('Speed'+_0x26c27d(0xd30),_0x2786ed['on']),_0xc22723=_0xba7dc7['xoDIe'](_0x5d4881,_0xba7dc7[_0x26c27d(0xa81)],_0x26c27d(0x549)+'esc',_0x2786ed['on']?_0xba7dc7[_0x26c27d(0xaf0)](_0xba7dc7['TWArA'](_0xba7dc7[_0x26c27d(0x278)]('x',_0x2786ed['facto'+'r']['toFix'+'ed'](0x863+0x1*-0xc5b+0x3f9))+_0x26c27d(0x964)+_0x171be9[_0x26c27d(0x25f)+'h'],_0xba7dc7[_0x26c27d(0x433)]),_0xf3eae3)+_0xba7dc7[_0x26c27d(0x32d)]:_0x26c27d(0x89d)+_0x26c27d(0x4a5)+'\x20move'+'ment-'+'speed'+_0x26c27d(0x594)+'ds\x20on'+_0x26c27d(0xa68)+_0x26c27d(0xac5)+',\x20ste'+'p\x20and'+'\x20jump'+_0x26c27d(0xab3)+'refus'+'ed.'),_0x1bce45=_0x146b53(_0x26c27d(0x403)+'ed');_0x1bce45['appen'+_0x26c27d(0x9ca)+'d'](_0x5c744f(function(){return _0x2786ed['on'];},function(_0x3d7644){var _0x41f949=_0x26c27d;_0x589ea5(_0x3d7644,_0x2786ed['facto'+'r']),_0xc22723['textC'+_0x41f949(0x98d)+'t']=_0x3d7644?_0x24fc4d[_0x41f949(0xc93)]('x'+_0x2786ed['facto'+'r']['toFix'+'ed'](-0x1*0x23c3+0x1c2e+0x2*0x3cb)+_0x24fc4d[_0x41f949(0x69b)]+_0x171be9['lengt'+'h'],_0x41f949(0x594)+'ds\x20·\x20')+_0xf3eae3+('\x20writ'+'es'):'Multi'+_0x41f949(0x4a5)+_0x41f949(0xaeb)+_0x41f949(0xd3c)+_0x41f949(0x1f0)+_0x41f949(0x594)+_0x41f949(0xbac)+'ly.\x20H'+'eight'+',\x20ste'+_0x41f949(0x98f)+'\x20jump'+'\x20are\x20'+_0x41f949(0x708)+_0x41f949(0x45a);})),_0x169494[_0x26c27d(0xaf7)]['appen'+_0x26c27d(0x9ca)+'d'](_0xc22723),_0x169494[_0x26c27d(0xaf7)][_0x26c27d(0xd16)+_0x26c27d(0x9ca)+'d'](_0x1bce45);var _0x17611a=_0xba7dc7[_0x26c27d(0x9ae)](_0x888f82,-0x3d*0xb+0x15fb+0x3df*-0x5,-0xf82+0x241c+0x1df*-0xb,0xe*0x1bd+0x20*-0xfa+-0xb1*-0xa+0.5,function(){var _0x472a62=_0x26c27d;return _0x2786ed[_0x472a62(0x33e)+'r'];},function(_0x111965){_0x589ea5(_0x2786ed['on'],_0x111965);});_0x17611a['input']['datas'+'et'][_0x26c27d(0xb8d)]='x';var _0x384001=_0xba7dc7['FhZQl'](_0x146b53,_0x26c27d(0x89d)+'plier',_0x26c27d(0xbc1)+_0x26c27d(0x1e0)+'so\x20st'+_0x26c27d(0x5e7)+'is');_0x384001[_0x26c27d(0xd16)+_0x26c27d(0x9ca)+'d'](_0x17611a),_0x169494[_0x26c27d(0xaf7)][_0x26c27d(0xd16)+'dChil'+'d'](_0x384001);if(_0x52a75f['lengt'+'h']){if(_0xba7dc7['VHpaE']!==_0x26c27d(0x6e1)){var _0x4a7cf2=_0x5d4881(_0xba7dc7['ysShU'],_0x26c27d(0x1ee)+'te',_0xba7dc7['JPrFk']+_0x52a75f[_0x26c27d(0xcf5)](-0x1410+-0xf01+0x2311,0x1*0x291+0xb07*-0x2+0x1381)['map'](function(_0x395386){var _0x2bd154=_0x26c27d;return _0xba7dc7[_0x2bd154(0x5ff)](_0xba7dc7['oTelL']('0x'+(_0x395386['o']<0x4*0x8c6+-0x75*-0x9+0x2735*-0x1?'?':_0x395386['o'][_0x2bd154(0x6ac)+'ing'](-0xdaa+0x42f+0x1*0x98b)),'\x20(')+_0x395386['why'],')');})[_0x26c27d(0xa45)]('\x20\x20'));_0x169494['body'][_0x26c27d(0xd16)+_0x26c27d(0x9ca)+'d'](_0x4a7cf2);}else return _0x16fe9a[0x5e1*-0x2+-0x2011+-0x22*-0x14a]==='f32'||_0x24fc4d['mBObx'](_0x59a484[-0xe1c+-0x1bb3+0x29d0],_0x26c27d(0xc77));}_0x4861ef['push'](_0x169494);var _0x9e39bb=_0xd32149(_0xba7dc7['CEKtz']),_0x5d9c6f=_0xba7dc7[_0x26c27d(0xaa2)](_0x5d4881,_0x26c27d(0x603)+'n',_0xba7dc7[_0x26c27d(0x2ff)],_0x26c27d(0xa70)+'hot\x20n'+_0x26c27d(0x3e8)+'9)');_0x5d9c6f[_0x26c27d(0x72e)]=_0x26c27d(0x603)+'n',_0x5d9c6f[_0x26c27d(0xab9)+'ck']=function(){var _0x89716e=_0x26c27d;_0x5bfd7b(_0xba7dc7[_0x89716e(0x91f)]);},_0x9e39bb[_0x26c27d(0xaf7)]['appen'+_0x26c27d(0x9ca)+'d'](_0x5d4881(_0x26c27d(0x36c),_0xba7dc7[_0x26c27d(0x6be)],_0x26c27d(0xd48)+_0x26c27d(0x451)+_0x26c27d(0xb7d)+_0x26c27d(0x35f)+'speed'+_0x26c27d(0x3e5)+_0x26c27d(0x2ee)+_0x26c27d(0xca8)+_0x26c27d(0xa25)+_0x26c27d(0xcce)+_0x26c27d(0x754)+'\x0a[\x20\x20]'+_0x26c27d(0x47d)+_0x26c27d(0x6e8)+_0x26c27d(0xd20)+_0x26c27d(0x643)+_0x26c27d(0x9cc)+'his\x20m'+'enu')),_0x9e39bb[_0x26c27d(0xaf7)][_0x26c27d(0xd16)+'dChil'+'d'](_0x5d9c6f),_0x4861ef[_0x26c27d(0x3ad)](_0x9e39bb);}if(_0xba7dc7['hxRAt'](_0x5bc0bb,_0xba7dc7[_0x26c27d(0xbda)])){var _0x361413=_0xd32149(_0xba7dc7['pHuRr'],_0x459161['on']),_0x157a12=_0x146b53(_0x26c27d(0x403)+'ed');_0x157a12[_0x26c27d(0xd16)+'dChil'+'d'](_0x5c744f(function(){return _0x459161['on'];},function(_0x2cb2b9){var _0x60fe65=_0x26c27d;_0xba7dc7['CLWFt'](_0x50b2dc,_0x2cb2b9,_0x459161[_0x60fe65(0x8ba)]);})),_0x361413['body'][_0x26c27d(0xd16)+'dChil'+'d'](_0xba7dc7[_0x26c27d(0x89f)](_0x5d4881,_0x26c27d(0x36c),_0x26c27d(0x549)+'esc',_0x26c27d(0xbe9)+_0x26c27d(0x774)+_0x26c27d(0x25e)+_0x26c27d(0x40e)+_0x26c27d(0x77f)+'right'+_0x26c27d(0x401)+_0x26c27d(0xbac)+_0x26c27d(0xcf0)+_0x26c27d(0xd8c)+'ns.')),_0x361413['body'][_0x26c27d(0xd16)+'dChil'+'d'](_0x157a12);var _0x4647d6=_0xba7dc7[_0x26c27d(0x31d)](_0x888f82,0x928+-0x2a+-0x8d6,0x1c1*0x2+-0x17fd+0x151b,-0x1*0x1dc2+-0x4*-0xdf+0x1a50,function(){var _0x5df67b=_0x26c27d;return _0x459161[_0x5df67b(0x585)];},function(_0x5ef36d){var _0x5681fc=_0x26c27d;_0x459161[_0x5681fc(0x585)]=_0x5ef36d;});_0x4647d6[_0x26c27d(0xd55)][_0x26c27d(0x8d2)+'et'][_0x26c27d(0xb8d)]='m';var _0x28aaef=_0x146b53('Range',_0xba7dc7['ScyKf']);_0x28aaef[_0x26c27d(0xd16)+_0x26c27d(0x9ca)+'d'](_0x4647d6),_0x361413[_0x26c27d(0xaf7)][_0x26c27d(0xd16)+'dChil'+'d'](_0x28aaef),_0x4861ef[_0x26c27d(0x3ad)](_0x361413);var _0x57d1ad=_0xd32149('Boxes',_0x459161['boxes']),_0x34ad7b=_0xba7dc7[_0x26c27d(0x954)](_0x146b53,_0xba7dc7['wBcxy']);_0x34ad7b['appen'+_0x26c27d(0x9ca)+'d'](_0xba7dc7['gTtPp'](_0x5c744f,function(){var _0x54c3c8=_0x26c27d;if(_0x54c3c8(0x87b)==='llpgG')_0x37ae2e++,_0x1628ed['sane']=!![];else return _0x459161['boxes'];},function(_0x769fff){if(_0x769fff&&!_0x1fe234()){_0xba7dc7['IxhIh'](_0xc23780);return;}_0x50b2dc(!![],_0x769fff);}));var _0x317b30=_0x484547&&_0x484547['angle'+'s'];_0x57d1ad[_0x26c27d(0xaf7)]['appen'+_0x26c27d(0x9ca)+'d'](_0xba7dc7[_0x26c27d(0x3a8)](_0x5d4881,'div','sk-md'+_0x26c27d(0xae7),_0x317b30&&!_0x317b30[_0x26c27d(0xd01)+_0x26c27d(0xae6)]?_0xba7dc7[_0x26c27d(0x361)](_0x26c27d(0x30c)+'rawin'+'g.\x20'+(_0x317b30[_0x26c27d(0x538)]||'view\x20'+'angle'+'s\x20uni'+_0x26c27d(0x84b)+'fied'),'\x20-\x20th'+'ese\x20t'+_0x26c27d(0x97b)+'oats\x20'+'are\x20n'+'ot\x20pi'+'tch\x20a'+'nd\x20ya'+'w.\x20Pr'+'ess\x20F'+_0x26c27d(0x6b0)+_0x26c27d(0x2b9)+_0x26c27d(0x3a0)+'0°,\x20p'+_0x26c27d(0x6c0)+_0x26c27d(0x7a3)):_0x317b30&&!_0x317b30['fovSa'+'ne']?_0xba7dc7['WjYni'](_0xba7dc7['OyFci'],Math[_0x26c27d(0xb4c)](_0x317b30['fov']))+_0xba7dc7['mQSvF']:_0x26c27d(0xcc3)+'n-spa'+'ce\x20bo'+'xes.\x20'+'The\x20f'+'ield\x20'+'of\x20vi'+'ew\x20ca'+'nnot\x20'+_0x26c27d(0xc30)+_0x26c27d(0xc72)+_0x26c27d(0x6bf)+_0x26c27d(0xd72)+_0x26c27d(0xacc)+_0x26c27d(0x1ff)+'\x20is\x20f'+'itted'+'\x20by\x20e'+_0x26c27d(0x4f5))),_0x57d1ad['body'][_0x26c27d(0xd16)+_0x26c27d(0x9ca)+'d'](_0x34ad7b);var _0x4f68dd=_0x888f82(0xd0c+0x2*0xe84+-0x4*0xa76,0x15*0x119+0x2392+-0x3a1d,-0x9c3+-0xa*-0x10c+-0xb3,function(){var _0x6ce8a6=_0x26c27d;return _0x410599[_0x6ce8a6(0x257)];},function(_0x1d9a58){var _0x425b74=_0x26c27d;_0x410599[_0x425b74(0x257)]=_0x1d9a58,_0x5dccee();});_0x4f68dd['input'][_0x26c27d(0x8d2)+'et']['unit']='°';var _0x30053c=_0xba7dc7[_0x26c27d(0x44b)](_0x146b53,_0xba7dc7['HcioF'],'[\x20and'+'\x20]\x20al'+_0x26c27d(0x4f9)+_0x26c27d(0x5e7)+'is');_0x30053c[_0x26c27d(0xd16)+_0x26c27d(0x9ca)+'d'](_0x4f68dd);var _0x596fa9=_0x146b53(_0x26c27d(0xc26)+_0x26c27d(0xd20),_0xba7dc7[_0x26c27d(0x3b5)]),_0x3dd79d=_0x5d4881(_0xba7dc7[_0x26c27d(0x74a)],'sk-bt'+'n',_0xba7dc7[_0x26c27d(0xb29)]);_0x3dd79d[_0x26c27d(0x5ea)+_0x26c27d(0x23e)+'stene'+'r'](_0x26c27d(0xc7d),function(){var _0x172ecf=_0x26c27d;if(_0x24fc4d[_0x172ecf(0x600)]===_0x172ecf(0xb6a))try{_0x394915();}catch(_0x11096f){}else _0x410599[_0x172ecf(0x257)]=-0x137d+-0x304+0x16cc,_0x410599['pitch'+_0x172ecf(0x80c)]=0x1565+-0x147f+-0xe6,_0x410599['yawOf'+'f']=-0x9de+0x6a6*0x5+-0x1760,_0x5dccee(),_0x597a1c(),_0x24fc4d[_0x172ecf(0xbd0)](_0x2c77b8,_0x50ad68[_0x172ecf(0xa52)]);}),_0x596fa9[_0x26c27d(0xd16)+'dChil'+'d'](_0x3dd79d),_0x57d1ad[_0x26c27d(0xaf7)]['appen'+_0x26c27d(0x9ca)+'d'](_0x30053c),_0x57d1ad[_0x26c27d(0xaf7)][_0x26c27d(0xd16)+_0x26c27d(0x9ca)+'d'](_0x596fa9);var _0x283cc5=_0x888f82(-(-0x6*0xe6+0x1020+-0x1*0xa08),-0x47*-0x41+0x4dc*-0x8+0x158d,0x4a8+-0x28*0x1f+0x31,function(){return _0x410599['yawOf'+'f'];},function(_0x1a8476){var _0x4fd131=_0x26c27d;if('lgHTm'!==_0xba7dc7['uIpMK'])_0x410599[_0x4fd131(0x6ff)+'f']=_0x1a8476,_0x597a1c(),_0xc23780();else{var _0x48e216={'zDFSJ':_0x4fd131(0x25b)+'d'};_0x2bc1d6[_0x4fd131(0x2cc)+_0x4fd131(0xb62)][_0x4fd131(0xa78)+_0x4fd131(0x2e1)](_0x753091)[_0x4fd131(0x712)](function(){var _0x200469=_0x4fd131;_0x38e3de[_0x200469(0x52b)+_0x200469(0x98d)+'t']=_0x48e216['zDFSJ'];});}});_0x283cc5['input']['datas'+'et'][_0x26c27d(0xb8d)]='°';var _0x1b5333=_0xba7dc7[_0x26c27d(0x529)](_0x146b53,_0xba7dc7[_0x26c27d(0x324)],_0xba7dc7[_0x26c27d(0xb31)]);_0x1b5333[_0x26c27d(0xd16)+'dChil'+'d'](_0x283cc5),_0x57d1ad[_0x26c27d(0xaf7)]['appen'+_0x26c27d(0x9ca)+'d'](_0x1b5333);var _0x172726=_0x888f82(-(0xe20+-0x2359*-0x1+0x5*-0x9d3),-0x5*-0x443+0x1*-0x269+-0x128c,0x1*-0x214a+0x56*0x47+0x971,function(){var _0x139d18=_0x26c27d;return _0x410599[_0x139d18(0xa61)+_0x139d18(0x80c)];},function(_0x1388c7){var _0x2a4aec=_0x26c27d;_0x410599['pitch'+_0x2a4aec(0x80c)]=_0x1388c7,_0x597a1c(),_0xc23780();});_0x172726[_0x26c27d(0xd55)][_0x26c27d(0x8d2)+'et']['unit']='°';var _0x53961b=_0xba7dc7[_0x26c27d(0x748)](_0x146b53,'Pitch'+_0x26c27d(0xacb)+'ectio'+'n',_0x26c27d(0xa61)+'\x20is\x20u'+'nveri'+_0x26c27d(0x6fb));_0x53961b[_0x26c27d(0xd16)+'dChil'+'d'](_0x172726),_0x57d1ad[_0x26c27d(0xaf7)][_0x26c27d(0xd16)+_0x26c27d(0x9ca)+'d'](_0x53961b);var _0x29212a=_0x484547&&_0x484547['view'];_0x57d1ad['body']['appen'+_0x26c27d(0x9ca)+'d'](_0xba7dc7[_0x26c27d(0x3a8)](_0x5d4881,_0x26c27d(0x36c),_0xba7dc7[_0x26c27d(0xcd2)],_0xba7dc7[_0x26c27d(0x79f)](_0xba7dc7[_0x26c27d(0x64e)],_0x29212a?_0x29212a[_0x26c27d(0xcf8)+_0x26c27d(0xd5c)]?_0xba7dc7[_0x26c27d(0x23b)](_0xba7dc7['qmvVN'],_0x29212a['mouse'+'Look'])+(_0x29212a['camer'+'a']?'\x20\x20cam'+_0x26c27d(0x23f)+_0x29212a[_0x26c27d(0x6c2)+'a']:''):_0x26c27d(0xcfd)+_0x26c27d(0xb9e)+_0x26c27d(0xafc)+'t':_0xba7dc7[_0x26c27d(0xc59)])+(_0x317b30?'\x0a'+(_0xba7dc7['ylTIv'](_0x317b30['sourc'+'e'],_0x26c27d(0x6eb)+'r')?_0xba7dc7[_0x26c27d(0x87f)](_0xba7dc7[_0x26c27d(0x984)](_0xba7dc7[_0x26c27d(0x67f)](_0xba7dc7[_0x26c27d(0xbe4)]('read\x20'+_0x26c27d(0x8da)+_0x26c27d(0x9f6)+'Look\x20'+'gette'+_0x26c27d(0x2ac)+_0x26c27d(0x672)+_0x317b30[_0x26c27d(0x2cd)],'=')+Math[_0x26c27d(0xb4c)](_0x317b30[_0x26c27d(0x706)+'w'])+(_0x317b30[_0x26c27d(0x6ff)+'f']?_0xba7dc7[_0x26c27d(0x523)](_0xba7dc7[_0x26c27d(0xd4f)]('\x20',_0x317b30['yawOf'+'f']>-0x14*0x6f+0x2*-0x347+0xf3a?'+':''),Math[_0x26c27d(0xb4c)](_0x317b30[_0x26c27d(0x6ff)+'f'])):'')+('\x0apitc'+'h\x20'),_0x317b30['pitch'+'At']),'='),Math[_0x26c27d(0xb4c)](_0x317b30[_0x26c27d(0x5e6)+_0x26c27d(0xaf9)])):_0x26c27d(0x654)+'ING\x20f'+'rom\x20s'+'truct'+'\x20offs'+'ets:\x20'+'+0x28'+'\x20and\x20'+_0x26c27d(0xb20)+'.\x0aThe'+_0x26c27d(0xc07)+'e\x20get'+_0x26c27d(0x641)+'are\x20h'+_0x26c27d(0x61f)+_0x26c27d(0x988)+'have\x20'+_0x26c27d(0xb9a)+'ired.'):'')+(_0x410599[_0x26c27d(0xa61)+'Off']||_0x410599['yawOf'+'f']?_0xba7dc7[_0x26c27d(0x5ff)](_0xba7dc7[_0x26c27d(0x93f)]+Math[_0x26c27d(0xb4c)](_0x410599[_0x26c27d(0xa61)+'Off'])+('\x20\x20yaw'+'\x20'),Math['round'](_0x410599[_0x26c27d(0x6ff)+'f'])):''))),_0x4861ef[_0x26c27d(0x3ad)](_0x57d1ad);}if(_0xba7dc7[_0x26c27d(0x72f)](_0x5bc0bb,_0x26c27d(0xb9b)+'s')){var _0x430cee=[['Build',_0xba7dc7['wimrK'],_0x484547?_0x484547[_0x26c27d(0x7a6)+'on']:'-'],[_0x26c27d(0x855),_0x26c27d(0xd88)+_0x26c27d(0xb4f)+'regis'+_0x26c27d(0xd53),_0x484547?_0xba7dc7['viGya'](_0x484547[_0x26c27d(0x497)+_0x26c27d(0xc32)+'ed']+_0x26c27d(0x3c3),_0x484547['hooks'+'Regis'+_0x26c27d(0xd53)+_0x26c27d(0xd43)]):'-'],[_0xba7dc7['ctkib'],'from\x20'+_0x26c27d(0x799)+_0x26c27d(0x685)+_0x26c27d(0xd35),_0x484547&&_0x484547[_0x26c27d(0x740)+_0x26c27d(0xd3b)]&&_0x484547[_0x26c27d(0x740)+'emory']['captu'+_0x26c27d(0xd0c)]?_0xba7dc7[_0x26c27d(0x415)](Math[_0x26c27d(0xb4c)](_0x484547[_0x26c27d(0x740)+_0x26c27d(0xd3b)][_0x26c27d(0x994)]/(-0xd8b6a+-0x5205a*-0x1+0x186b10)),_0xba7dc7['yjeHT'])+_0x484547['wasmM'+_0x26c27d(0xd3b)][_0x26c27d(0x848)]+'ms':'-'],['Playe'+'rs',_0x26c27d(0x8f8)+'nNetw'+_0x26c27d(0x67c)+'nc',_0x484547&&_0x484547[_0x26c27d(0x3c6)]?String(_0x484547[_0x26c27d(0x3c6)]['playe'+_0x26c27d(0xbd1)+'t']):'-'],[_0xba7dc7[_0x26c27d(0x253)],_0x26c27d(0xa59)+_0x26c27d(0x681)+'ut\x20yo'+'u',_0x484547&&_0x484547['esp']?String(_0x484547['esp']['enemy'+'Count']):'-'],[_0x26c27d(0xb32)+'a',_0x26c27d(0x475)+'he\x20li'+_0x26c27d(0x75c)+'nager',_0x484547&&_0x484547[_0x26c27d(0x3c6)]&&_0x484547['esp'][_0x26c27d(0x6c2)+'a']?_0x484547['esp'][_0x26c27d(0x6c2)+'a']+'\x20('+_0x484547[_0x26c27d(0x3c6)][_0x26c27d(0x6c2)+'aFrom']+')':'-']];for(_0x58f71e=-0x21e*0x9+0x15b*0x2+-0x8*-0x20b;_0x58f71e<_0x430cee[_0x26c27d(0x25f)+'h'];_0x58f71e++){var _0x54bae3=_0x146b53(_0x430cee[_0x58f71e][-0x14a4+0x1a10+0x4*-0x15b]),_0x3f8a3f=_0xba7dc7[_0x26c27d(0x8b9)](_0x5d4881,'span',_0xba7dc7[_0x26c27d(0x60d)]);_0x3f8a3f[_0x26c27d(0x874)][_0x26c27d(0x4d4)+_0x26c27d(0x6d0)]='0',_0x3f8a3f[_0x26c27d(0x874)]['flex']='1',_0x3f8a3f[_0x26c27d(0x874)][_0x26c27d(0x83d)+'lign']=_0xba7dc7['ynfSe'],_0x3f8a3f[_0x26c27d(0x52b)+_0x26c27d(0x98d)+'t']=_0xba7dc7[_0x26c27d(0x60a)](String,_0x430cee[_0x58f71e][0x2069*-0x1+0x4ab*-0x7+-0x2*-0x208c]),_0x3f8a3f[_0x26c27d(0x8d2)+'et']['k']=_0x430cee[_0x58f71e][-0x7b*-0x49+0x1*0xe9+-0x23fb],_0x54bae3['appen'+'dChil'+'d'](_0x3f8a3f);var _0x2e46fb=_0x4861ef[_0x26c27d(0x25f)+'h']?_0x4861ef[_0x4861ef['lengt'+'h']-(-0x1925+-0x1672+-0x4*-0xbe6)]:null;!_0x2e46fb&&(_0x2e46fb=_0xd32149(_0xba7dc7[_0x26c27d(0x1df)],![]),_0x4861ef['push'](_0x2e46fb)),_0x2e46fb['body'][_0x26c27d(0xd16)+_0x26c27d(0x9ca)+'d'](_0x54bae3),_0x2e46fb[_0x26c27d(0xaf7)][_0x26c27d(0xd65)+_0x26c27d(0x601)]['sp']=_0x3f8a3f;}var _0x5de97e=_0xba7dc7['ZEWbL'](_0xd32149,_0xba7dc7[_0x26c27d(0x4d5)],![]),_0x45c92c=[[_0x26c27d(0x70c)+_0x26c27d(0x584),_0x484547&&_0x484547['local']&&_0x484547[_0x26c27d(0x246)][_0x26c27d(0x75f)]?'FPSco'+_0x26c27d(0xca4)+'ler+'+_0x484547['local'][_0x26c27d(0x75f)]:_0xba7dc7[_0x26c27d(0x78b)],_0x484547&&_0x484547[_0x26c27d(0x246)]&&_0x484547['local']['feet']?_0x484547[_0x26c27d(0x246)][_0x26c27d(0x452)]['map'](function(_0xfe0934){var _0x2fc56f=_0x26c27d,_0x2afd06={'TIATy':function(_0x2f62ff,_0x11b7c2){var _0xf3df9e=_0x4e00;return _0x24fc4d[_0xf3df9e(0x3fc)](_0x2f62ff,_0x11b7c2);},'zvSMi':function(_0x5f4c93,_0x5cba98){var _0x4785b2=_0x4e00;return _0x24fc4d[_0x4785b2(0x46d)](_0x5f4c93,_0x5cba98);}};if(_0x24fc4d[_0x2fc56f(0x8e9)]('uIAuI',_0x24fc4d['DkJnX']))return _0x24fc4d[_0x2fc56f(0x959)](Math['round'](_0x24fc4d['thUNs'](_0xfe0934,0x1b*0x119+0x1901+0x3640*-0x1)),-0x16d2+-0xa47+0x1*0x217d);else{if(_0x2afd06['TIATy'](!_0x51a795,!_0x1606c2))return null;var _0x50f5f0=new _0x4c7bcd(_0x4407c4)['getCl'+_0x2fc56f(0x577)+'me']();return _0x2afd06[_0x2fc56f(0x445)](_0x50f5f0,_0x5c8ff7)?null:_0x50f5f0;}})[_0x26c27d(0xa45)]('\x20\x20'):'-'],['Eye',_0xba7dc7[_0x26c27d(0x79c)]('+',_0x1b07b4)+'m',_0x484547&&_0x484547['local']&&_0x484547[_0x26c27d(0x246)]['eye']?_0x484547['local']['eye'][_0x26c27d(0x786)](function(_0x4c63c6){return _0x24fc4d['tSZCv'](Math['round'](_0x4c63c6*(0x367*-0x8+0x10d8+0xac4)),0x1db8+-0x2*-0xef5+-0x1*0x3b3e);})[_0x26c27d(0xa45)]('\x20\x20'):'-'],[_0x26c27d(0x6e7)+_0x26c27d(0x1f0),_0x26c27d(0x593),_0x5751bb(_0x484547,_0x26c27d(0x50f)+'ntrol'+_0x26c27d(0x413),-0x977+0x254+0x733)],[_0xba7dc7['ILJwy'],_0x26c27d(0xbbc),_0x5751bb(_0x484547,_0x26c27d(0x50f)+'ntrol'+'ler',0x7a6+-0x1*0x1336+0xbd0)],['Jump\x20'+_0x26c27d(0x92e)+'t',_0x26c27d(0x299),_0x5751bb(_0x484547,'FPSco'+_0x26c27d(0xca4)+_0x26c27d(0x413),0x119d*-0x1+0x45*-0x17+0x4fc*0x5)],[_0x26c27d(0xc41)+'h',_0xba7dc7['pFcAl'],_0xba7dc7[_0x26c27d(0xaa2)](_0x5751bb,_0x484547,_0x26c27d(0xc41)+_0x26c27d(0x652)+'pt',-0x1*-0x674+0x2a0+-0x4*0x215)]];for(_0x58f71e=-0x4cf*0x1+0x11bc+-0xced;_0xba7dc7[_0x26c27d(0x908)](_0x58f71e,_0x45c92c[_0x26c27d(0x25f)+'h']);_0x58f71e++){if(_0x26c27d(0xb27)===_0x26c27d(0xb27)){var _0x46ebee=_0x146b53(_0x45c92c[_0x58f71e][0x1*0x985+-0x7fb*-0x3+-0x10bb*0x2]),_0x136c94=_0x5d4881(_0xba7dc7['nKwOL'],_0xba7dc7['gTEPe']);_0x136c94['style'][_0x26c27d(0x4d4)+_0x26c27d(0x6d0)]='0',_0x136c94['style']['flex']='1',_0x136c94[_0x26c27d(0x874)][_0x26c27d(0x83d)+_0x26c27d(0x9fe)]=_0x26c27d(0x358),_0x136c94['textC'+'onten'+'t']=_0xba7dc7[_0x26c27d(0x954)](String,_0x45c92c[_0x58f71e][0x63d*-0x1+-0x1856+-0x1e95*-0x1]),_0x136c94[_0x26c27d(0x8d2)+'et']['k']=_0x45c92c[_0x58f71e][-0xcec*0x2+-0x24a*0xa+0x30bd],_0x46ebee[_0x26c27d(0xd16)+_0x26c27d(0x9ca)+'d'](_0x136c94),_0x5de97e['body'][_0x26c27d(0xd16)+_0x26c27d(0x9ca)+'d'](_0x46ebee),_0x5de97e['body'][_0x26c27d(0xd65)+'hild']['sp']=_0x136c94;}else{var _0x2edc85=_0x2b6cac['v'];if(_0x24fc4d[_0x26c27d(0x8e9)](typeof _0x2edc85,_0x24fc4d[_0x26c27d(0x57b)])||!_0x24fc4d['mHslx'](_0x36020,_0x2edc85))return![];if(_0xd6f30f['k']==='obfB')return _0x2edc85===0x2*-0x198+0xa2*-0x25+0x3*0x8de||_0x2edc85===-0x1*-0x1f83+-0x25*-0x50+-0x1589*0x2;var _0x198bf6=_0x3b4f75[_0x26c27d(0xaa8)];if(typeof _0x198bf6!==_0x24fc4d['kURey']||!_0x24fc4d[_0x26c27d(0x892)](_0x2bb4c0,_0x198bf6))return!![];if(_0x2f7912[_0x26c27d(0x4ba)]===0xb*-0x1b6+0x171d+0x225*-0x2)return _0x24fc4d[_0x26c27d(0x713)](_0x57af9d['abs'](_0x2edc85-_0x198bf6),_0x40aca8['max'](0x1f*0xf3+0xd95+-0x6d*0x65,_0x24fc4d['WVCQP'](_0x5d2da1[_0x26c27d(0x6a2)](_0x198bf6),-0x7ab+0x3*-0x632+-0xd*-0x205+0.6)));return _0x525396['abs'](_0x2edc85)<0x38437*-0x1ecb+0x8993*-0xcf22+-0x117333623*-0x1;}}_0x4861ef['push'](_0x5de97e);}if(_0x5bc0bb===_0x26c27d(0x656)){var _0x104b22=_0xd32149('Diagn'+'ostic'+'s',![]),_0x57fb7a=_0x484547&&_0x484547['warni'+_0x26c27d(0x78e)]&&_0x484547[_0x26c27d(0xb2c)+_0x26c27d(0x78e)]['lengt'+'h']?_0x484547[_0x26c27d(0xb2c)+_0x26c27d(0x78e)][_0x26c27d(0xa45)]('\x0a'):'no\x20wa'+_0x26c27d(0x2a9)+'s';_0x104b22[_0x26c27d(0xaf7)][_0x26c27d(0xd16)+_0x26c27d(0x9ca)+'d'](_0x5d4881(_0xba7dc7['ysShU'],_0x26c27d(0xbe6)+'e',_0x57fb7a)),_0x4861ef[_0x26c27d(0x3ad)](_0x104b22);var _0x39bbfc=_0xba7dc7['FhZQl'](_0xd32149,'Repor'+'t',![]),_0x200b04=_0x5d4881(_0xba7dc7[_0x26c27d(0x74a)],_0x26c27d(0xaca)+'n',_0x26c27d(0x47b)+'JSON\x20'+'to\x20cl'+'ipboa'+'rd');_0x200b04['type']=_0xba7dc7[_0x26c27d(0x74a)],_0x200b04[_0x26c27d(0xab9)+'ck']=function(){var _0x27fbdb=_0x26c27d;if(_0xba7dc7[_0x27fbdb(0x77d)](_0xba7dc7[_0x27fbdb(0x8bd)],'LvBLj'))try{var _0xe79239=_0xba7dc7['QOYEM'](_0x2e43a2+'\x0a',JSON[_0x27fbdb(0x58c)+'gify'](_0x484547,null,-0x1*-0x1558+0xe*0x155+-0x27fd))+'\x0a'+_0x18aa39;if(navigator[_0x27fbdb(0x2cc)+'oard']&&navigator[_0x27fbdb(0x2cc)+_0x27fbdb(0xb62)]['write'+'Text'])_0xba7dc7[_0x27fbdb(0x814)]('vGfCy',_0xba7dc7[_0x27fbdb(0x586)])?(_0x4c2035=!!_0x101d80[_0x27fbdb(0x1f0)]['on'],_0x24d4f9['textC'+_0x27fbdb(0x98d)+'t']=_0x39fbd1?_0x27fbdb(0x811)+_0x27fbdb(0xc17):_0x27fbdb(0x811)+_0x27fbdb(0x220),_0x10aedb[_0x27fbdb(0x874)][_0x27fbdb(0x1e2)+'round']=_0x3fc849?_0x271f7e:_0x24fc4d[_0x27fbdb(0xc6b)],_0x275386['style'][_0x27fbdb(0xc0f)]=_0x4b227f?_0x27fbdb(0x206)+'1b':_0x27fbdb(0x321)+'f5',_0x213a6d&&_0x4b3ced['speed']['facto'+'r']&&(_0x1594ec[_0x27fbdb(0x52b)+_0x27fbdb(0x98d)+'t']=_0x24fc4d['kJQAp'](_0x56181a(_0x38ffc0[_0x27fbdb(0x1f0)]['facto'+'r'])[_0x27fbdb(0x1f9)+'ed'](-0x2*-0xc92+-0x2671+0xd4e*0x1),'x'))):navigator[_0x27fbdb(0x2cc)+'oard']['write'+'Text'](_0xe79239)[_0x27fbdb(0x712)](function(){var _0x21f4fc=_0x27fbdb;_0x200b04['textC'+'onten'+'t']=_0x21f4fc(0x25b)+'d';});else _0x200b04['textC'+_0x27fbdb(0x98d)+'t']=_0x27fbdb(0x8e5)+_0x27fbdb(0x65a)+'block'+_0x27fbdb(0x998)+'open\x20'+_0x27fbdb(0x88d)+_0x27fbdb(0x5a3)+_0x27fbdb(0x958)+'ad';}catch(_0x6222f7){_0x200b04['textC'+_0x27fbdb(0x98d)+'t']=_0xba7dc7['Jxxzh'];}else try{var _0x5758e1=_0x568a12();return!!(_0x5758e1&&_0x123b89[_0x27fbdb(0xd01)+'ified']);}catch(_0xdb251d){return![];}},_0x39bbfc['body'][_0x26c27d(0xd16)+_0x26c27d(0x9ca)+'d'](_0x5d4881(_0xba7dc7['ysShU'],_0xba7dc7[_0x26c27d(0x6be)],'Paste'+_0x26c27d(0xa97)+_0x26c27d(0x29b)+_0x26c27d(0xd92)+_0x26c27d(0x859)+'n\x20som'+_0x26c27d(0x30e)+'g\x20loo'+'ks\x20wr'+'ong.')),_0x39bbfc[_0x26c27d(0xaf7)]['appen'+_0x26c27d(0x9ca)+'d'](_0x200b04),_0x4861ef[_0x26c27d(0x3ad)](_0x39bbfc);}return _0x4861ef;}function _0x32d551(){var _0x2db60e=_0x2fbbc2;if(_0x50ad68[_0x2db60e(0xa29)])_0xba7dc7['MztaM'](_0x357a45,!![]);}function _0x4b35db(){var _0x547520=_0x2fbbc2,_0x41b40c={'vTFFR':function(_0x227309,_0x5cb241){return _0xba7dc7['AbRlS'](_0x227309,_0x5cb241);},'aBcqi':function(_0x3c8550,_0x5b96b9){return _0x3c8550-_0x5b96b9;},'YKldx':function(_0x12de93,_0x28c65a){return _0x12de93*_0x28c65a;},'HRXwU':function(_0x5936d7,_0x536dd0){return _0x5936d7+_0x536dd0;},'qauSb':_0x547520(0x95d)+'6a','zSHma':function(_0x2ccd4c,_0x1e3eca){return _0x2ccd4c*_0x1e3eca;}};try{if('PDQeE'===_0x547520(0x81e)){var _0x7bbd53=_0x5092b9[_0x547520(0xba2)][_0x2359c5],_0x5ce7e9=_0x41b40c[_0x547520(0x2be)](_0x41b40c['aBcqi'](_0x7bbd53['x'],_0x821a9b[_0x547520(0x452)][-0x55d*-0x7+0x1bd*0x10+-0x415b]),_0x75e5d8),_0xf241b2=_0x41b40c[_0x547520(0x53a)](_0x7bbd53['z']-_0x3838bb[_0x547520(0x452)][-0xc50*-0x2+-0x1eee+0xca*0x8],_0x5d590a),_0x5a69ab=_0x2ebd10['sqrt'](_0x5ce7e9*_0x5ce7e9+_0xf241b2*_0xf241b2),_0x3cc42b=_0x5f24d0,_0x44aa00=_0x1c7afd;_0x5a69ab>_0x12836a-(0x1*0x2217+0x373+-0x2584)?(_0x3cc42b=_0x41b40c['HRXwU'](_0x2c7124,_0x5ce7e9/_0x5a69ab*(_0x23ad87-(-0x232f*0x1+-0x135b+-0x24*-0x184))),_0x44aa00=_0x31d441+_0xf241b2/_0x5a69ab*(_0x29a00d-(0xac+0x215f+-0x2205))):(_0x3cc42b=_0x41b40c[_0x547520(0x9c2)](_0x1e68e4,_0x5ce7e9),_0x44aa00=_0x3197de+_0xf241b2);var _0x520863=_0x4993c0!==null&&_0x7bbd53[_0x547520(0xc85)]===_0x423024;_0x380632[_0x547520(0x375)+'tyle']=_0x520863?_0x41b40c[_0x547520(0x8db)]:_0x547520(0xa91)+'74',_0x3393e8[_0x547520(0xa6a)+_0x547520(0x66d)](),_0x2c4eff[_0x547520(0x363)](_0x3cc42b,_0x44aa00,_0x520863?0x1964+0x1e5c+-0x37be:0x12c8*-0x1+-0x25ec+0x38b7+0.20000000000000018,-0x1225+0x596+0xc8f,_0x41b40c['zSHma'](_0xf92e43['PI'],0x11be+0x7c3+-0x197f)),_0x4888d9['fill'](),_0x314efc++;}else{var _0x57bb2f=localStorage[_0x547520(0x468)+'em'](_0x5638d8);if(!_0x57bb2f)return;var _0x95198d=JSON[_0x547520(0xad1)](_0x57bb2f);if(_0x95198d&&typeof _0x95198d['x']===_0xba7dc7['YempL']&&typeof _0x95198d['y']===_0x547520(0x5e3)+'r')_0x50ad68[_0x547520(0x30b)]=_0x95198d;}}catch(_0x5d1120){}}function _0x52f3b3(){var _0x433525=_0x2fbbc2,_0x44c90d={'yKHEL':function(_0x3b4c2e,_0x1d3aa6){return _0x3b4c2e===_0x1d3aa6;}};try{if(_0xba7dc7[_0x433525(0x236)](_0x433525(0x223),'vrJXn'))return _0x44c90d[_0x433525(0x975)](_0x109432[_0x433525(0x468)+'em'](_0x468cca),'1');else localStorage['setIt'+'em'](_0x5638d8,JSON[_0x433525(0x58c)+_0x433525(0xc9a)](_0x50ad68[_0x433525(0x30b)]));}catch(_0x3a29f2){}}function _0x2dc883(){var _0x10c184=_0x2fbbc2,_0x1763fe=_0x50ad68[_0x10c184(0x62c)];if(!_0x1763fe||!_0x1763fe[_0x10c184(0x874)])return;_0x50ad68[_0x10c184(0x30b)]?(_0x1763fe['style'][_0x10c184(0xc28)]=_0xba7dc7[_0x10c184(0x523)](_0x50ad68['pos']['x'],'px'),_0x1763fe[_0x10c184(0x874)]['top']=_0xba7dc7[_0x10c184(0xcef)](_0x50ad68[_0x10c184(0x30b)]['y'],'px'),_0x1763fe['style'][_0x10c184(0x358)]=_0x10c184(0x818),_0x1763fe['style'][_0x10c184(0x982)+'m']='auto'):(_0x1763fe[_0x10c184(0x874)]['left']='auto',_0x1763fe['style']['top']='auto',_0x1763fe['style']['right']=_0x10c184(0xc3e),_0x1763fe[_0x10c184(0x874)]['botto'+'m']=_0xba7dc7[_0x10c184(0x6b7)]);}function _0x3a9907(_0xb7ff61,_0x33ee1a){var _0x4dde1b=_0x2fbbc2,_0x4959ad={'dDbQM':_0xba7dc7['KPlQD'],'lFHuv':function(_0x286cfe,_0x2fdf8c){return _0x286cfe-_0x2fdf8c;},'fnffK':function(_0x435b53,_0x26264a){var _0x3ce99c=_0x4e00;return _0xba7dc7[_0x3ce99c(0x696)](_0x435b53,_0x26264a);},'VjbIB':function(_0x552848,_0x1a7586){return _0x552848-_0x1a7586;},'iLdvQ':function(_0x167995,_0x1cfc55){var _0x37f8b2=_0x4e00;return _0xba7dc7[_0x37f8b2(0x209)](_0x167995,_0x1cfc55);}};if(_0xba7dc7['yJOlv'](_0xba7dc7[_0x4dde1b(0x5fa)],_0x4dde1b(0xaa1)))try{if(_0xba7dc7[_0x4dde1b(0xc7b)](_0xba7dc7[_0x4dde1b(0x84f)],_0xba7dc7['oBpbR'])){var _0x368505=('11|6|'+'3|0|4'+'|7|5|'+'8|9|1'+'0|2|1')['split']('|'),_0x530d92=-0x3*0x39+0x97a*0x4+-0x253d;while(!![]){switch(_0x368505[_0x530d92++]){case'0':var _0x3e15c8=function(_0x6e9d3e){var _0x2ff511=_0x4dde1b,_0x15b376=('7|0|6'+_0x2ff511(0xa1f)+_0x2ff511(0x369))['split']('|'),_0x4083b9=-0x127f+0x1*-0x727+0x19a6;while(!![]){switch(_0x15b376[_0x4083b9++]){case'0':_0x33ee1a[_0x2ff511(0x874)]['curso'+'r']=_0x2ff511(0x97c)+_0x2ff511(0x21d);continue;case'1':try{_0x6e9d3e[_0x2ff511(0x417)+_0x2ff511(0x592)+_0x2ff511(0xb67)]();}catch(_0x2a9f8a){}continue;case'2':(!_0xb7ff61['style']['top']||_0xb7ff61['style'][_0x2ff511(0xab1)]===_0x4959ad[_0x2ff511(0xd61)])&&(_0x326b1c['top']=(window['inner'+'Heigh'+'t']||0x44d*0x9+-0x1*-0x14aa+-0x3b5f)-(_0xb7ff61[_0x2ff511(0x2d2)+'tHeig'+'ht']||-0x1e1e+-0xa6f*0x2+-0x26*-0x162)-(0x3*0x647+-0x2f*0x15+-0xee2));continue;case'3':(!_0xb7ff61[_0x2ff511(0x874)]['left']||_0xb7ff61['style'][_0x2ff511(0xc28)]==='auto')&&(_0x326b1c[_0x2ff511(0xc28)]=_0x4959ad['lFHuv'](window[_0x2ff511(0x4f4)+_0x2ff511(0x5eb)]||-0xd86*-0x1+-0x8ea+-0x49c,_0xb7ff61[_0x2ff511(0x2d2)+_0x2ff511(0xb46)+'h']||-0x22be*0x1+-0x613+0x2b3d)-(-0xc8+0x98e+-0x8ae));continue;case'4':_0x12bb1a=(_0x6e9d3e['clien'+'tX']||-0x133e+0x1a26*0x1+-0x1ba*0x4)-_0x326b1c['left'];continue;case'5':_0x56ec6a=(_0x6e9d3e['clien'+'tY']||0x632+0xdee*0x2+-0x220e)-_0x326b1c[_0x2ff511(0xab1)];continue;case'6':var _0x326b1c={'left':_0x4959ad[_0x2ff511(0xc0b)](parseFloat,_0xb7ff61[_0x2ff511(0x874)][_0x2ff511(0xc28)])||-0x2*-0x4a3+0x1e6d*0x1+0x27b3*-0x1,'top':_0x4959ad['fnffK'](parseFloat,_0xb7ff61[_0x2ff511(0x874)][_0x2ff511(0xab1)])||-0xdf3+-0x94e*-0x2+0x1*-0x4a9};continue;case'7':_0x585b34=!![];continue;}break;}};continue;case'1':window['addEv'+'entLi'+_0x4dde1b(0xb8a)+'r'](_0x4dde1b(0x2ae)+_0x4dde1b(0xb44),_0x440bc4);continue;case'2':window['addEv'+_0x4dde1b(0x23e)+'stene'+'r'](_0x4dde1b(0x2ae)+'move',_0x3ba80d,{'passive':![]});continue;case'3':_0x33ee1a[_0x4dde1b(0x874)][_0x4dde1b(0x2ae)+_0x4dde1b(0x6af)+'n']=_0xba7dc7['qKFYw'];continue;case'4':var _0x3ba80d=function(_0x5b0415){var _0x35e87f=_0x4dde1b,_0xe6db7b=(_0x35e87f(0x6d9)+_0x35e87f(0xd77)+_0x35e87f(0x216)+_0x35e87f(0x4c4))['split']('|'),_0x594fb0=0x1d*0x103+0xbaa*0x1+-0x1*0x2901;while(!![]){switch(_0xe6db7b[_0x594fb0++]){case'0':var _0x2ce1e6=_0xb7ff61['offse'+_0x35e87f(0xb46)+'h']||0x2*-0x726+0x1d9e+-0xfe*0xd,_0x482fa8=_0xb7ff61['offse'+'tHeig'+'ht']||-0xf13*-0x2+-0x1ce2+-0x2*-0x26;continue;case'1':_0x50ad68[_0x35e87f(0x30b)]={'x':_0x3447e,'y':_0x31702e};continue;case'2':_0x3447e=Math[_0x35e87f(0x640)](-0x7*0x30a+-0x1a2*0x8+0xa6*0x35,Math[_0x35e87f(0x5ae)](_0x4959ad[_0x35e87f(0x5c0)](_0x4959ad[_0x35e87f(0x5c6)](window[_0x35e87f(0x4f4)+'Width']||0xf0f+0x56*-0x3+-0xe0d,_0x2ce1e6),-0x1c17+-0x315*-0x1+0xa*0x281),_0x3447e));continue;case'3':_0xb7ff61[_0x35e87f(0x874)][_0x35e87f(0x358)]=_0x35e87f(0x818);continue;case'4':_0xb7ff61[_0x35e87f(0x874)][_0x35e87f(0xc28)]=_0x3447e+'px';continue;case'5':_0x31702e=Math[_0x35e87f(0x640)](-0xc38+-0xe*-0x287+-0x1722,Math['min'](_0x4959ad['VjbIB'](_0x4959ad['lFHuv'](window['inner'+_0x35e87f(0x2fc)+'t']||-0x258a*0x1+-0x186b+-0x1*-0x3df5,_0x482fa8),0x1*-0x15d1+-0x1a1f+0x2ff8),_0x31702e));continue;case'6':if(!_0x585b34)return;continue;case'7':var _0x3447e=(_0x5b0415[_0x35e87f(0x4ad)+'tX']||-0x5*-0x511+0x336+0x1*-0x1c8b)-_0x12bb1a,_0x31702e=_0x4959ad[_0x35e87f(0x927)](_0x5b0415['clien'+'tY']||0xe56+0x1*-0x56f+-0x8e7,_0x56ec6a);continue;case'8':_0xb7ff61[_0x35e87f(0x874)][_0x35e87f(0xab1)]=_0x31702e+'px';continue;case'9':_0xb7ff61[_0x35e87f(0x874)][_0x35e87f(0x982)+'m']=_0x35e87f(0x818);continue;}break;}};continue;case'5':_0x33ee1a[_0x4dde1b(0x5ea)+_0x4dde1b(0x23e)+_0x4dde1b(0xb8a)+'r'](_0x4dde1b(0xcf8)+_0x4dde1b(0x424),_0x3e15c8);continue;case'6':_0x33ee1a['style'][_0x4dde1b(0xa1a)+'r']='grab';continue;case'7':var _0x440bc4=function(){var _0x1475a0=_0x4dde1b;if(!_0x585b34)return;_0x585b34=![],_0x33ee1a[_0x1475a0(0x874)][_0x1475a0(0xa1a)+'r']='grab',_0x52f3b3();};continue;case'8':window['addEv'+'entLi'+'stene'+'r'](_0x4dde1b(0xcf8)+_0x4dde1b(0xd81),_0x3ba80d);continue;case'9':window['addEv'+_0x4dde1b(0x23e)+_0x4dde1b(0xb8a)+'r'](_0xba7dc7[_0x4dde1b(0x64b)],_0x440bc4);continue;case'10':_0x33ee1a[_0x4dde1b(0x5ea)+'entLi'+'stene'+'r'](_0x4dde1b(0x2ae)+'start',_0x3e15c8,{'passive':![]});continue;case'11':var _0x585b34=![],_0x12bb1a=-0x3*-0x221+0x1*0x18b3+-0x1f16,_0x56ec6a=-0x261f+0x1b1*0x1+0x246e;continue;}break;}}else return _0xfabe45['v']!==_0x51ecbf&&_0x2cb95c(_0x5c3ba3['v']);}catch(_0x359574){}else _0x5bc8a3=!_0xcdbece,_0x2503d7();}function _0x3bf62f(){var _0x2a6014=_0x2fbbc2,_0x222d2b={'EXNjM':function(_0x15e45d,_0x1a1334){return _0x15e45d(_0x1a1334);},'XGwpd':_0xba7dc7[_0x2a6014(0x760)],'dtXYp':function(_0x2ca584){return _0x2ca584();},'qlUWz':_0xba7dc7[_0x2a6014(0x9cd)]};if(_0x50ad68[_0x2a6014(0x29d)])return _0x50ad68[_0x2a6014(0x62c)];try{if(!document['body']||!document[_0x2a6014(0xaf7)][_0x2a6014(0xd16)+_0x2a6014(0x9ca)+'d'])return null;if(!document['getEl'+'ement'+_0x2a6014(0x866)]('sakur'+_0x2a6014(0x495)+'u-css')){var _0x37247e=document[_0x2a6014(0x733)+'eElem'+_0x2a6014(0x25c)](_0xba7dc7['UILva']);_0x37247e['id']=_0xba7dc7[_0x2a6014(0x5fc)],_0x37247e['textC'+'onten'+'t']=_0x455321,(document[_0x2a6014(0x4e1)]||document[_0x2a6014(0x56f)+_0x2a6014(0x689)+_0x2a6014(0x430)])['appen'+_0x2a6014(0x9ca)+'d'](_0x37247e);}var _0x3ad8a5=_0x5d4881(_0x2a6014(0x36c),_0x2a6014(0xa3f)+_0x2a6014(0x9e0));_0x3ad8a5['id']=_0x2a6014(0x617)+_0x2a6014(0x495)+_0x2a6014(0x834)+'t';var _0x62e015=_0x5d4881('div',_0xba7dc7['ZvMTq']),_0x180baa=_0x5d4881('div',_0x2a6014(0xb43)+'go',_0x379633);_0x62e015[_0x2a6014(0xd16)+_0x2a6014(0x9ca)+'d'](_0x180baa);var _0x768621=_0x5d4881(_0xba7dc7[_0x2a6014(0xa81)],_0xba7dc7['vTNAO']),_0x565bcc=_0x5d4881(_0xba7dc7[_0x2a6014(0xa81)],_0xba7dc7[_0x2a6014(0xb92)]),_0x15c782=_0xba7dc7['KoLnu'](_0x5d4881,_0xba7dc7['ysShU'],_0x2a6014(0x533)+'tles'),_0x4893ce=_0x5d4881(_0xba7dc7['ysShU'],_0x2a6014(0xc3b),'Sakur'+_0x2a6014(0xd12)+_0x2a6014(0x8a3)+'z'),_0x5ee88e=_0x5d4881('div','mn-su'+'b',_0xba7dc7[_0x2a6014(0x3f6)]);_0x15c782['appen'+_0x2a6014(0x9ca)+'d'](_0x4893ce),_0x15c782['appen'+_0x2a6014(0x9ca)+'d'](_0x5ee88e);var _0x57847d=_0x5d4881(_0x2a6014(0x36c),_0x2a6014(0x7c5)+'ose',_0x2a6014(0x35d)+_0x2a6014(0x8f3)+'ox=\x220'+_0x2a6014(0x773)+_0x2a6014(0x24d)+'<path'+_0x2a6014(0xb2e)+_0x2a6014(0xbc8)+_0x2a6014(0x86a)+_0x2a6014(0xaa5)+_0x2a6014(0x765)+_0x2a6014(0xa86)+'vg>');_0x57847d['oncli'+'ck']=function(){var _0x4bcf7b=_0x2a6014;_0x222d2b[_0x4bcf7b(0x850)](_0x357a45,![]);},_0x565bcc['appen'+_0x2a6014(0x9ca)+'d'](_0x15c782),_0x565bcc[_0x2a6014(0xd16)+'dChil'+'d'](_0x57847d);var _0x45819c=_0xba7dc7['mxwPt'](_0x5d4881,_0x2a6014(0x36c),'mn-co'+'ls');_0x768621[_0x2a6014(0xd16)+'dChil'+'d'](_0x565bcc),_0x768621[_0x2a6014(0xd16)+_0x2a6014(0x9ca)+'d'](_0x45819c),_0x3ad8a5[_0x2a6014(0xd16)+_0x2a6014(0x9ca)+'d'](_0x62e015),_0x3ad8a5[_0x2a6014(0xd16)+'dChil'+'d'](_0x768621),document[_0x2a6014(0xaf7)][_0x2a6014(0xd16)+_0x2a6014(0x9ca)+'d'](_0x3ad8a5),_0x50ad68[_0x2a6014(0x62c)]=_0x3ad8a5,_0x50ad68[_0x2a6014(0x987)]=_0x45819c,_0x50ad68['head']=_0x4893ce,_0x50ad68[_0x2a6014(0x38d)]=_0x5ee88e,_0x4b35db(),_0x2dc883(),_0xba7dc7[_0x2a6014(0xcaa)](_0x3a9907,_0x3ad8a5,_0x565bcc);var _0x158188={};for(var _0x49f015=-0x2c3+0x1b8d+-0x2*0xc65;_0x49f015<_0x1cb02f['lengt'+'h'];_0x49f015++){var _0xf04442=_0x1cb02f[_0x49f015],_0x4ab83b=_0x5d4881(_0x2a6014(0x603)+'n',_0xba7dc7[_0x2a6014(0x7be)],_0xba7dc7[_0x2a6014(0x6f2)](_0x2a6014(0xab6)+'l>',_0xf04442[_0x2a6014(0xc8a)])+('</sma'+_0x2a6014(0x8fb)));_0x4ab83b['type']=_0x2a6014(0x603)+'n',_0x4ab83b['title']=_0xf04442['label'],function(_0x3b2285){var _0x267f01=_0x2a6014,_0x1220b2={'OiaFx':function(_0x14a27b,_0x46b990){var _0x32c625=_0x4e00;return _0xba7dc7[_0x32c625(0x2fa)](_0x14a27b,_0x46b990);},'sInjt':function(_0x2ba09e,_0x509aca){return _0x2ba09e*_0x509aca;},'osUpr':function(_0x49d3de,_0x14a287){return _0x49d3de/_0x14a287;}};_0x267f01(0xb90)!==_0xba7dc7['WJanp']?_0x4ab83b['oncli'+'ck']=function(){var _0x338658=_0x267f01;if(_0x338658(0x6ad)===_0x222d2b[_0x338658(0xbe0)])_0x222d2b['EXNjM'](_0x2c77b8,_0x3b2285);else{var _0x835183=_0x2267b8[-0x16fd+-0x190f+0x300c]-_0x467944[_0x338658(0x452)][0x1*-0x763+-0x10e2+0x1845],_0x247ba0=_0x1220b2[_0x338658(0xd9b)](_0x1ed7ff[0x2256+0x1eab+-0x40ff],_0x1fdf25[_0x338658(0x452)][0x41*0xe+0x1acb*0x1+-0x1e57]);_0x4e0fa2['d']=_0x474fcd[_0x338658(0x262)](_0x1220b2['sInjt'](_0x835183,_0x835183)+_0x247ba0*_0x247ba0),_0x368700[_0x338658(0xc0d)+'ng']=_0x1220b2['osUpr'](_0x4cbb81['atan2'](_0x835183,_0x247ba0)*(-0x20*0xbe+-0x47e+0x1cf2),_0xd4b2c4['PI']);}}:_0x22d182=_0xecac22['keys'](_0x1fcb18)['slice'](-0xa5+-0x22fe+0xbe1*0x3,0x131b+-0x11*0x19a+0x1*0x837);}(_0xf04442['id']),_0x158188[_0xf04442['id']]=_0x4ab83b,_0x62e015['appen'+'dChil'+'d'](_0x4ab83b);}_0x50ad68['butto'+'ns']=_0x158188;var _0x404a0a=_0x5d4881(_0x2a6014(0x36c),null,_0xcefdff);return _0x404a0a['id']=_0xba7dc7['ndxSz'],_0x404a0a['title']=_0x2a6014(0x9f9)+_0x2a6014(0xd12)+_0x2a6014(0x8a3)+_0x2a6014(0x3e2)+_0x2a6014(0x6d5),_0x404a0a[_0x2a6014(0xafd)+_0x2a6014(0x3c9)+'er']=function(){var _0x47adef=_0x2a6014;_0x404a0a[_0x47adef(0x874)]['opaci'+'ty']='1';},_0x404a0a[_0x2a6014(0xafd)+_0x2a6014(0xc76)+'ve']=function(){var _0x204a67=_0x2a6014;_0x404a0a['style'][_0x204a67(0x534)+'ty']=_0x50ad68['open']?'1':'.5';},_0x404a0a['oncli'+'ck']=function(_0x4ebfa6){var _0x3e9ce5=_0x2a6014;if(_0xba7dc7[_0x3e9ce5(0x322)](_0xba7dc7['tXODD'],'ylyJX')){if(_0x4ebfa6&&_0x4ebfa6[_0x3e9ce5(0xa5c)+_0x3e9ce5(0x283)+'ation'])_0x4ebfa6['stopP'+_0x3e9ce5(0x283)+_0x3e9ce5(0x5f0)]();_0x357a45(!_0x50ad68[_0x3e9ce5(0xa29)]);}else _0x1482b7['warni'+'ngs']['push'](_0x3e9ce5(0xc1a)+_0x3e9ce5(0xba4)+_0x3e9ce5(0x201)+'Modki'+_0x3e9ce5(0x749)+_0x3e9ce5(0x1fe)+'pper\x20'+'is\x20mi'+_0x3e9ce5(0x580)+_0x3e9ce5(0xaea)+_0x3e9ce5(0x5d9)+_0x3e9ce5(0xd9c)+_0x3e9ce5(0x5e0)+_0x3e9ce5(0xa79)+_0x3e9ce5(0x328));},document[_0x2a6014(0xaf7)][_0x2a6014(0xd16)+_0x2a6014(0x9ca)+'d'](_0x404a0a),_0x50ad68[_0x2a6014(0x22b)]=_0x404a0a,setInterval(function(){var _0x4e488c=_0x2a6014;try{if(!_0x50ad68['petal'])return;var _0x8eb52e=_0x222d2b['dtXYp'](_0x1f56cf);_0x50ad68[_0x4e488c(0x22b)]['style'][_0x4e488c(0x534)+'ty']=_0x50ad68[_0x4e488c(0xa29)]?'1':_0x8eb52e?'.8':_0x4e488c(0xc2a),_0x50ad68[_0x4e488c(0x22b)]['title']=_0x8eb52e?_0x222d2b['qlUWz']:'Sakur'+_0x4e488c(0xd12)+_0x4e488c(0x8a3)+'z\x20-\x20w'+_0x4e488c(0x442)+_0x4e488c(0x35a)+_0x4e488c(0xa97)+_0x4e488c(0x763)+'(Inse'+'rt)';}catch(_0x352d3f){}},0xc12+0x6d*0x2+0x1*-0xa30),_0x50ad68[_0x2a6014(0x29d)]=!![],_0x2c77b8(_0x50ad68[_0x2a6014(0xa52)]),_0x3ad8a5;}catch(_0x47d1c5){return console[_0x2a6014(0x7b4)](_0x2a6014(0x9be)+_0x2a6014(0xb7a)+'\x20menu'+'\x20unav'+'ailab'+'le',_0xba7dc7['aKgQA'](_0xba7dc7[_0x2a6014(0xa50)],_0x2660e4),_0x47d1c5),null;}}function _0x2c77b8(_0x3eee6f){var _0x4aa20e=_0x2fbbc2,_0x2d3f0d={'OKZYV':_0xba7dc7[_0x4aa20e(0x5be)]};_0x50ad68['cat']=_0x3eee6f,_0x50ad68['syncs']=[];if(!_0x50ad68['cols'])return;var _0x299159=null;for(var _0x4e9da1=0xe9b+-0xcac+0x9*-0x37;_0x4e9da1<_0x1cb02f[_0x4aa20e(0x25f)+'h'];_0x4e9da1++)if(_0x1cb02f[_0x4e9da1]['id']===_0x3eee6f)_0x299159=_0x1cb02f[_0x4e9da1];_0x50ad68[_0x4aa20e(0x4e1)][_0x4aa20e(0x52b)+_0x4aa20e(0x98d)+'t']=_0x4aa20e(0x9f9)+'a\x20Ski'+'llWar'+_0x4aa20e(0x6dc)+(_0x299159&&_0x299159[_0x4aa20e(0xc8a)]||'?');for(var _0x5348af in _0x50ad68[_0x4aa20e(0x603)+'ns']){if(_0x4aa20e(0x925)==='FdmIQ'){if(_0x50ad68['butto'+'ns'][_0x5348af][_0x4aa20e(0x316)+'List'])_0x50ad68[_0x4aa20e(0x603)+'ns'][_0x5348af][_0x4aa20e(0x316)+_0x4aa20e(0x9b2)]=_0xba7dc7[_0x4aa20e(0x7be)]+(_0xba7dc7[_0x4aa20e(0x996)](_0x5348af,_0x3eee6f)?_0x4aa20e(0x68b)+'ve':'');}else _0x464055[_0x4aa20e(0xb2c)+'ngs'][_0x4aa20e(0x3ad)](_0x2d3f0d[_0x4aa20e(0xaa7)]+(_0x4aa20e(0xc8c)+_0x4aa20e(0xadc)+_0x4aa20e(0x8cb)+'rent\x20'+_0x4aa20e(0x295)+'me\x20in'+_0x4aa20e(0x347)+'e\x20tha'+_0x4aa20e(0x2de)+_0x4aa20e(0x395)+_0x4aa20e(0x5ab)+_0x4aa20e(0x43c)+'oses.'));}var _0x1f8ba1=[];try{_0x1f8ba1=_0xba7dc7[_0x4aa20e(0x6e5)](_0x28bcbd,_0x3eee6f);}catch(_0xdfec2d){if(_0xba7dc7[_0x4aa20e(0x200)](_0x4aa20e(0xcf3),_0xba7dc7['jiWuV']))_0x1f8ba1=[];else return _0x26a9b7[_0x4aa20e(0xcf9)+'e']=_0x4aa20e(0x295)+'me._g'+_0x4aa20e(0x46c),_0x45733b;}while(_0x50ad68[_0x4aa20e(0x987)][_0x4aa20e(0x2a4)+_0x4aa20e(0x7ac)])_0x50ad68['cols'][_0x4aa20e(0xb34)+'eChil'+'d'](_0x50ad68['cols']['first'+_0x4aa20e(0x7ac)]);for(var _0x58a20b=-0x23f*-0xd+0xb5*-0x1f+-0x748;_0x58a20b<_0x1f8ba1[_0x4aa20e(0x25f)+'h'];_0x58a20b++)_0x50ad68['cols'][_0x4aa20e(0xd16)+'dChil'+'d'](_0x1f8ba1[_0x58a20b]);}function _0x357a45(_0x2c3c66){var _0x48f197=_0x2fbbc2,_0x15ee8e={'RexqG':_0xba7dc7[_0x48f197(0x314)],'OsbCC':function(_0x544a35,_0x23f918){return _0xba7dc7['fylUW'](_0x544a35,_0x23f918);}};if(_0xba7dc7[_0x48f197(0x5e9)]===_0x48f197(0xb37)){_0x50ad68[_0x48f197(0xa29)]=!!_0x2c3c66;var _0x3b80c8=_0x3bf62f();if(!_0x3b80c8)return;_0x3b80c8[_0x48f197(0x316)+_0x48f197(0x9b2)]=_0xba7dc7['LQtdQ'](_0xba7dc7[_0x48f197(0x7fd)],_0x50ad68[_0x48f197(0xa29)]?'\x20show'+'n':'');if(_0x50ad68[_0x48f197(0x22b)])_0x50ad68['petal'][_0x48f197(0x874)][_0x48f197(0x534)+'ty']=_0x50ad68[_0x48f197(0xa29)]?'1':'.5';if(_0x50ad68[_0x48f197(0xa29)]){_0x2c77b8(_0x50ad68[_0x48f197(0xa52)]);try{if(_0xba7dc7[_0x48f197(0x4ee)]('NsbWg',_0x48f197(0xc69))){var _0x1cddd1=window[_0x48f197(0x4f4)+_0x48f197(0x2fc)+'t']||0x4*0x409+0x3c5*-0x1+-0x93f;if(_0x1cddd1<0x7*0x2d7+-0x564+-0xc11)_0xba7dc7[_0x48f197(0x976)](_0x42b081,![]);}else try{var _0x24102f=_0x142321;if(_0x24102f&&_0x24102f['el'])_0x24102f['el']['style'][_0x48f197(0x7b6)+'ay']=_0x5a6dc5?'':_0x48f197(0x7a0);var _0x9ca432=_0x1324e3;if(_0x9ca432&&_0x9ca432['cv'])_0x9ca432['cv'][_0x48f197(0x874)]['displ'+'ay']=_0x5ccd9f?'':_0x15ee8e[_0x48f197(0x915)];}catch(_0x52cf57){}}catch(_0x3dbccb){}}}else try{if(!_0x58f12e||!_0x463d11)return null;var _0x38efd5=new _0x5bc25b(_0x9c436f)[_0x48f197(0x2e7)+_0x48f197(0x577)+'me']();return _0x15ee8e['OsbCC'](_0x38efd5,_0x3ecc68)?null:_0x38efd5;}catch(_0xddbd4d){return null;}}function _0x207e82(){var _0x27844f=_0x2fbbc2;if(!_0x50ad68[_0x27844f(0xa29)]||!_0x50ad68[_0x27844f(0x29d)])return;try{if(_0xba7dc7['KoDZE']!==_0xba7dc7['KoDZE']){if(_0x481811['paren'+'t']&&_0x31dc02['paren'+'t']!==_0x2ced46)_0x340629['paren'+'t']['postM'+_0x27844f(0xc78)+'e'](_0x34226d,'*');if(_0x2a4a66[_0x27844f(0xab1)]&&_0x8e3b43[_0x27844f(0xab1)]!==_0x400fcc)_0x1a7ec8[_0x27844f(0xab1)][_0x27844f(0xaab)+'essag'+'e'](_0x2c1458,'*');}else{for(var _0x4b98dd=-0x1ce6+-0x2165+0x3e4b;_0x4b98dd<_0x50ad68[_0x27844f(0x581)]['lengt'+'h'];_0x4b98dd++){if('pfDRU'===_0x27844f(0xd40))return _0x411f92[_0x27844f(0xcf9)+'e']=_0x27844f(0xc1a)+'w\x20glo'+_0x27844f(0x96e),_0x3b2643;else try{_0x50ad68[_0x27844f(0x581)][_0x4b98dd]();}catch(_0x2e1676){}}var _0x198c56=_0x552ce7;_0x50ad68[_0x27844f(0x38d)]['textC'+'onten'+'t']=_0x198c56?_0xba7dc7[_0x27844f(0x5f5)](_0xba7dc7[_0x27844f(0x79a)]('v'+_0x198c56[_0x27844f(0x7a6)+'on'],_0x27844f(0xb6d)+_0x27844f(0x497)+'\x20')+_0x198c56[_0x27844f(0x497)+_0x27844f(0xc32)+'ed']+'/'+_0x198c56[_0x27844f(0x497)+_0x27844f(0x473)],_0xba7dc7[_0x27844f(0xbf3)])+(_0x198c56[_0x27844f(0x3c6)]&&_0x198c56[_0x27844f(0x3c6)][_0x27844f(0x7fc)+'rCoun'+'t']||0x1d*0x54+0x379+-0x19*0x85)+_0xba7dc7[_0x27844f(0x7d4)]+(_0x198c56[_0x27844f(0x740)+_0x27844f(0xd3b)]&&_0x198c56[_0x27844f(0x740)+_0x27844f(0xd3b)][_0x27844f(0x24e)+'red']?_0xba7dc7[_0x27844f(0xd04)](Math['round'](_0xba7dc7['TqWsc'](_0x198c56[_0x27844f(0x740)+'emory']['bytes'],-0x127680+-0x155c71+0x37d2f1)),'MB'):'-'):'waiti'+_0x27844f(0x8b1)+_0x27844f(0x59d)+'\x20firs'+_0x27844f(0x49b)+_0x27844f(0x599);var _0x521364=_0x50ad68['cols'][_0x27844f(0xae5)+_0x27844f(0x5f8)+_0x27844f(0xbed)+'l']?_0x50ad68[_0x27844f(0x987)][_0x27844f(0xae5)+'Selec'+_0x27844f(0xbed)+'l'](_0xba7dc7[_0x27844f(0x39a)]):[];for(var _0x4bdfab=0x1ea9+-0x7*0x7c+-0x1b45;_0x4bdfab<_0x521364[_0x27844f(0x25f)+'h'];_0x4bdfab++){if(_0xba7dc7['nuMtd']('IbpiJ',_0xba7dc7['hsjuX'])){var _0x4551ed=_0x521364[_0x4bdfab][_0x27844f(0x8d2)+'et']['k'],_0x7c0324='';if(_0x4551ed===_0xba7dc7[_0x27844f(0x3f3)])_0x7c0324=_0x198c56?_0x198c56['versi'+'on']:'-';else{if(_0xba7dc7[_0x27844f(0x7ae)](_0x4551ed,_0x27844f(0xd88)+'ed\x20/\x20'+'regis'+'tered'))_0x7c0324=_0x198c56?_0xba7dc7['tuPzM'](_0x198c56[_0x27844f(0x497)+_0x27844f(0xc32)+'ed'],_0x27844f(0x3c3))+_0x198c56[_0x27844f(0x497)+'Regis'+_0x27844f(0xd53)+'AtArm']:'-';else{if(_0x4551ed===_0xba7dc7[_0x27844f(0x543)])_0x7c0324=_0x198c56&&_0x198c56[_0x27844f(0x740)+_0x27844f(0xd3b)]&&_0x198c56[_0x27844f(0x740)+_0x27844f(0xd3b)][_0x27844f(0x24e)+_0x27844f(0xd0c)]?_0xba7dc7[_0x27844f(0x8a1)](_0xba7dc7[_0x27844f(0x51d)](Math[_0x27844f(0xb4c)](_0x198c56['wasmM'+_0x27844f(0xd3b)][_0x27844f(0x994)]/(0x2*0x144ff+-0x1f3*-0x1c+0x2*0x69fb7)),_0x27844f(0x2d3)+'\x20'),_0x198c56[_0x27844f(0x740)+_0x27844f(0xd3b)]['atMs'])+'ms':'-';else{if(_0x4551ed===_0x27844f(0x8f8)+_0x27844f(0x76e)+'orkSy'+'nc')_0x7c0324=_0x198c56&&_0x198c56[_0x27844f(0x3c6)]?String(_0x198c56[_0x27844f(0x3c6)][_0x27844f(0x7fc)+'rCoun'+'t']):'-';else{if(_0xba7dc7[_0x27844f(0x224)](_0x4551ed,_0xba7dc7[_0x27844f(0xc5d)]))_0x7c0324=_0x198c56&&_0x198c56[_0x27844f(0x3c6)]?String(_0x198c56[_0x27844f(0x3c6)][_0x27844f(0x351)+_0x27844f(0x627)]):'-';else{if(_0x4551ed===_0xba7dc7['FTOQx'])_0x7c0324=_0x198c56&&_0x198c56[_0x27844f(0x3c6)]&&_0x198c56[_0x27844f(0x3c6)][_0x27844f(0x6c2)+'a']?_0x198c56[_0x27844f(0x3c6)][_0x27844f(0x6c2)+'a']+'\x20('+_0x198c56[_0x27844f(0x3c6)]['camer'+_0x27844f(0x945)]+')':'-';else{if(_0x4551ed==='FPSco'+_0x27844f(0xca4)+_0x27844f(0x744)+_0x27844f(0xc61))_0x7c0324=_0x198c56&&_0x198c56[_0x27844f(0x246)]&&_0x198c56['local'][_0x27844f(0x452)]?_0x198c56[_0x27844f(0x246)][_0x27844f(0x452)][_0x27844f(0x786)](function(_0x1c1d1c){var _0x45494b=_0x27844f;return _0xba7dc7[_0x45494b(0x27b)](Math[_0x45494b(0xb4c)](_0xba7dc7['ZIRvO'](_0x1c1d1c,0xa5*0x1f+0x9ce+0x5e1*-0x5)),0x1*-0x1ede+0x6*-0x61+0x2188);})[_0x27844f(0xa45)]('\x20\x20'):'-';else{if(_0xba7dc7['pZiDv'](_0x4551ed,_0xba7dc7[_0x27844f(0xa15)]))_0x7c0324=_0x198c56&&_0x198c56['local']&&_0x198c56['local']['eye']?_0x198c56['local']['eye']['map'](function(_0x4c36f3){var _0x5ae1fc=_0x27844f;return Math[_0x5ae1fc(0xb4c)](_0x4c36f3*(0xb*0x2d9+0x20af*-0x1+-0x40*-0x7))/(0x11b*0xe+-0x155f+0x1*0x649);})[_0x27844f(0xa45)]('\x20\x20'):'-';else{var _0x36628a=_0x4551ed[_0x27844f(0xb3c)]('+');_0x7c0324=_0x5751bb(_0x198c56,_0x36628a[-0x5*0x652+-0x19*-0x155+0x1d*-0xf][_0x27844f(0x7b8)+'Of'](_0x27844f(0xc41)+'h')===-0x1a4a+0xc3a*-0x1+0x244*0x11?_0xba7dc7[_0x27844f(0xcde)]:'FPSco'+_0x27844f(0xca4)+_0x27844f(0x413),parseInt(_0x36628a[-0x2*0x54+-0x4ac+0x555],0x141a+-0x9d1*0x1+0x1*-0xa39));}}}}}}}}if(_0x7c0324!==_0x521364[_0x4bdfab][_0x27844f(0x52b)+_0x27844f(0x98d)+'t'])_0x521364[_0x4bdfab]['textC'+'onten'+'t']=_0x7c0324;}else _0x25d968();}}}catch(_0x185b63){}}function _0x4c2cec(){var _0x3800c8=_0x2fbbc2;try{if(_0xba7dc7[_0x3800c8(0x494)]===_0x3800c8(0x99a)){var _0x5e03ef=_0x1cd95b();return _0x5e03ef&&_0x5e03ef['feet']?_0x5e03ef[_0x3800c8(0x452)][-0x1*-0x1757+0x16dd+0x2e33*-0x1]:null;}else{var _0x13cfeb=_0x557aa9(_0xba7dc7['YlkEr'](_0x31716a,_0x1aad74(_0x2578ca[_0x6c9649][-0x145e+0x1076+0x5*0xc8],0x8d5*-0x4+-0xeff*-0x1+0x17*0xe3)),_0xba7dc7[_0x3800c8(0x7a5)]);if(_0x13cfeb!==_0x5c99d4)_0xa36e0c['tag'][_0x24ca62[_0x5f14c7][0xc04*0x1+0x325+-0xf28]]=_0x13cfeb;}}catch(_0x3524cf){return null;}}var _0x4fe6d3=-0x947*0x1+-0x1*-0x170f+-0xdc6+0.5,_0x25e21e=-0x7*-0x21+-0x1b22+-0xb*-0x263+0.25,_0x1b07b4=-0x1*-0xf3e+-0x1927+0x3*0x34e+0.8;function _0x4ea8d8(_0x1ace75,_0x14f646){var _0x48c5f3=_0x2fbbc2;if(_0xba7dc7[_0x48c5f3(0x540)](_0x48c5f3(0xc99),_0x48c5f3(0xd49))){var _0x121b93=[],_0x2b8797,_0x2d0207,_0x9b5ad7=_0x14f646!==null&&_0xba7dc7[_0x48c5f3(0x7f9)](_0x14f646,undefined)&&isFinite(_0x14f646);for(_0x2b8797=-0x1ea8+0xd6c+0x113c;_0x2b8797<_0x1ace75[_0x48c5f3(0x25f)+'h'];_0x2b8797++){var _0x590cb4=_0x1ace75[_0x2b8797]['v'];if(!_0x590cb4)continue;if(_0xba7dc7[_0x48c5f3(0xd5f)](_0x590cb4[-0x2*0x493+-0x1a7f+0x721*0x5],0x10c4*0x1+0x7*0x1b7+-0x1cc5)&&_0xba7dc7[_0x48c5f3(0x725)](_0x590cb4[-0x931*0x1+-0x1342+0x1c74],-0x1007+-0x1f*0x11f+0x32c8)&&_0x590cb4[-0xc28+0xced+-0xf*0xd]===0x2e*0xc9+0xa*0x166+0x1*-0x321a)continue;if(_0x9b5ad7&&Math[_0x48c5f3(0x6a2)](_0xba7dc7[_0x48c5f3(0x3d6)](_0x590cb4[-0x1*0x8b9+0x2b9+0x601],_0x14f646))>_0x4fe6d3)continue;_0x121b93[_0x48c5f3(0x3ad)](_0x1ace75[_0x2b8797]);}if(!_0x121b93[_0x48c5f3(0x25f)+'h'])for(_0x2b8797=0x305*0xb+0x1*-0x164b+0x6*-0x1d2;_0x2b8797<_0x1ace75[_0x48c5f3(0x25f)+'h'];_0x2b8797++){var _0x3a0d6e=_0x1ace75[_0x2b8797]['v'];if(!_0x3a0d6e)continue;if(_0x3a0d6e[-0x2b7+-0x2*-0x10f5+-0x1f33*0x1]===0x1*0x9+0xf9b+-0x23c*0x7&&_0x3a0d6e[-0x19c*-0x11+-0x108d*-0x1+0x57d*-0x8]===-0x2*0x1382+0x1*-0xed1+0x35d5&&_0xba7dc7[_0x48c5f3(0x236)](_0x3a0d6e[0x21f0+0x5d*-0x6b+0x37*0x17],-0x2685+0x11*-0x17+0x2c*0xe9))continue;_0x121b93[_0x48c5f3(0x3ad)](_0x1ace75[_0x2b8797]);}if(!_0x121b93[_0x48c5f3(0x25f)+'h'])return{'pos':null,'posAt':null,'inBand':0x0,'cluster':0x0,'reach':0x0};var _0x2113cf=[];for(_0x2b8797=0x4*-0x317+-0xb64+0x17c0;_0x2b8797<_0x121b93[_0x48c5f3(0x25f)+'h'];_0x2b8797++){var _0x4a5bd2=_0x121b93[_0x2b8797]['v'],_0x59b78f=-(-0xcba+-0x25*0xfb+0x3102);for(_0x2d0207=-0x4*-0x109+-0xd1f+0x8fb;_0xba7dc7[_0x48c5f3(0x7a9)](_0x2d0207,_0x2113cf['lengt'+'h']);_0x2d0207++){var _0x48b1=_0x2113cf[_0x2d0207]['c'][0x1*-0x1feb+-0x2c5+0x22b0]['v'],_0x57bd23=_0x4a5bd2[0x1cf9+-0xb*-0x1df+-0x318e]-_0x48b1[0x1d*0x101+-0x101*-0xa+-0x101*0x27],_0x10ccd0=_0xba7dc7['vkGNm'](_0x4a5bd2[-0xf69*0x1+-0x47d*0x1+0x13e7],_0x48b1[0x56c*0x2+0x3b*-0x2e+-0x3d]),_0x2ce084=_0x4a5bd2[0x1be*0x13+-0xa*-0x70+-0x2578]-_0x48b1[-0x1*-0xa3+-0x751*-0x5+-0x2536];if(_0xba7dc7[_0x48c5f3(0x8e4)](_0xba7dc7[_0x48c5f3(0x3da)](_0x57bd23*_0x57bd23,_0x10ccd0*_0x10ccd0)+_0x2ce084*_0x2ce084,_0x25e21e)){_0x59b78f=_0x2d0207;break;}}if(_0xba7dc7['OHfsl'](_0x59b78f,-(0x1cd4+-0x1752+-0x581)))_0x2113cf['push']({'c':[_0x121b93[_0x2b8797]]});else _0x2113cf[_0x59b78f]['c'][_0x48c5f3(0x3ad)](_0x121b93[_0x2b8797]);}var _0x161bf4=_0x2113cf[-0xec8+0x2219+-0x1351];for(_0x2d0207=-0xb8a+-0x1*0xddf+0x196a*0x1;_0x2d0207<_0x2113cf[_0x48c5f3(0x25f)+'h'];_0x2d0207++)if(_0xba7dc7['LOnrn'](_0x2113cf[_0x2d0207]['c'][_0x48c5f3(0x25f)+'h'],_0x161bf4['c'][_0x48c5f3(0x25f)+'h']))_0x161bf4=_0x2113cf[_0x2d0207];var _0x5302fe=_0x161bf4['c'][0x23a1+0x66c*0x2+0x3079*-0x1],_0x3ceb7b=-(0xd52+0x1ebd+-0x2c0e);for(_0x2d0207=0xb5*0x29+0x1f24*-0x1+0x227;_0x2d0207<_0x161bf4['c']['lengt'+'h'];_0x2d0207++){var _0x1c7930=_0x161bf4['c'][_0x2d0207]['v'],_0x19b2a6=_0x1c7930[0x53*-0x67+0x354+-0x2b*-0xb3]*_0x1c7930[0x85b+0x84*0x17+-0x1437]+_0xba7dc7['LKLhA'](_0x1c7930[-0x3*-0x781+0x3ce+-0x1a4f],_0x1c7930[-0x11b1+0xed5*0x1+0x2de]);if(_0xba7dc7['VTERx'](_0x19b2a6,_0x3ceb7b)||_0xba7dc7['NrtcQ'](_0x19b2a6,_0x3ceb7b)&&_0xba7dc7['fMBvS'](_0x1c7930[0xfd5+-0xd*-0xdc+0xd8*-0x20],_0x5302fe['v'][0x95*-0x16+-0xaf6+0x17c5*0x1])){if(_0x48c5f3(0x883)==='bKXwD')_0x3ceb7b=_0x19b2a6,_0x5302fe=_0x161bf4['c'][_0x2d0207];else try{_0x1757cd[_0x48c5f3(0xa14)+'em'](_0x145bf2,_0xba7dc7[_0x48c5f3(0x8a4)](_0x47f3ac,_0x4705f8[_0x48c5f3(0x257)]));}catch(_0x4cbddc){}}}return{'pos':_0x5302fe['v'],'posAt':_0x5302fe['o'],'inBand':_0x9b5ad7?_0x121b93[_0x48c5f3(0x25f)+'h']:-0x1e3a+-0x159b+-0x3*-0x1147,'cluster':_0x161bf4['c']['lengt'+'h'],'groups':_0x2113cf['lengt'+'h'],'reach':Math[_0x48c5f3(0x262)](_0x3ceb7b)};}else _0x9fb20e['pitch'+_0x48c5f3(0x80c)]=_0x1317c0,_0x2d20df(),_0x334678();}function _0x1cd95b(){var _0x2b8d75=_0x2fbbc2,_0xfaab85={'rMeUm':function(_0x2d5e8e,_0x1c52c7){return _0x2d5e8e===_0x1c52c7;}};if(_0xba7dc7[_0x2b8d75(0x2cb)]==='pOYCp'){var _0x527530={},_0x3a52ef=_0x54f763();if(!_0x3a52ef)return _0x527530;_0x527530['Mouse'+_0x2b8d75(0x49a)+_0x2b8d75(0xaf3)]=_0x3a52ef[_0x2b8d75(0xcf8)+_0x2b8d75(0xd5c)];for(var _0x4d3dab in _0x3a52ef[_0x2b8d75(0x46a)+'s'])_0x527530[_0xba7dc7[_0x2b8d75(0xa6f)](_0x2b8d75(0x9f6)+_0x2b8d75(0x5ed),_0x4d3dab)]=_0x3a52ef['float'+'s'][_0x4d3dab];if(_0x3a52ef['camer'+'a'])_0x527530[_0xba7dc7[_0x2b8d75(0x852)]]=_0x3a52ef['camer'+'a'];return _0x527530;}else{var _0x2b2b0e=_0x342350[_0x2b8d75(0x50f)+'ntrol'+_0x2b8d75(0x413)];if(!_0x2b2b0e||!_0x2b2b0e[_0x2b8d75(0xaf3)])return null;var _0x1489c7=_0x2cad2b['FPSco'+_0x2b8d75(0xca4)+_0x2b8d75(0x413)]||[],_0x398c79=[];for(var _0x27a532=-0x1f08+0x121d*0x1+0xceb;_0x27a532<_0x1489c7[_0x2b8d75(0x25f)+'h'];_0x27a532++){if(_0xba7dc7['mYTsB'](_0x1489c7[_0x27a532][-0x11fd+0x1bfe+-0x200*0x5],'v3'))continue;var _0x55e453=_0x2ff316(_0x2b2b0e['ptr'],_0x1489c7[_0x27a532][0xb27*-0x1+-0x161c+0x2143],-0x105*0x11+-0x1aea+0x2c42*0x1);if(_0x55e453)_0x398c79[_0x2b8d75(0x3ad)]({'o':'0x'+_0x1489c7[_0x27a532][-0x1cd*-0x4+-0xba*0x1d+0x2c6*0x5]['toStr'+'ing'](-0x2b2+-0xf33*0x1+0x11f5),'v':_0x55e453});}var _0x32aa85=_0x4ea8d8(_0x398c79,null);if(!_0x32aa85[_0x2b8d75(0x30b)])return null;var _0x1e5e8f=_0x32aa85[_0x2b8d75(0x30b)];return{'ptr':_0x2b2b0e[_0x2b8d75(0xaf3)],'feet':_0x1e5e8f,'posAt':_0x32aa85['posAt'],'inBand':_0x32aa85['inBan'+'d'],'cluster':_0x32aa85[_0x2b8d75(0xa67)+'er'],'copies':_0x398c79['filte'+'r'](function(_0x2aceab){var _0x542c6a=_0x2b8d75;return _0xfaab85[_0x542c6a(0x449)](_0x2aceab['v'][0x657*0x1+0x22ff+-0x11e*0x25],_0x1e5e8f[0x1e+0x23ad*0x1+0x341*-0xb])&&_0x2aceab['v'][0xc5*-0x2+-0x7*-0xc2+-0x3c3]===_0x1e5e8f[-0x70f+-0x19c8+0x106c*0x2]&&_0x2aceab['v'][0x1373*-0x2+-0x619*0x5+0x4565]===_0x1e5e8f[-0xaa9+-0x1*0xc81+0x172c];})['map'](function(_0x3c32d1){return _0x3c32d1['o'];}),'eye':[_0x1e5e8f[0x1ff+-0xdaf+0xbb0],_0xba7dc7[_0x2b8d75(0xce9)](_0x1e5e8f[-0x625*0x1+-0x18b9+0x1edf],_0x1b07b4),_0x1e5e8f[-0x1dc5*-0x1+0x9bc+-0x277f]],'reach':_0x32aa85['reach'],'pitch':_0x35121f(_0xba7dc7[_0x2b8d75(0xa6c)](_0x2b2b0e[_0x2b8d75(0xaf3)],-0x1660+-0x9d5+0x1*0x21a1),_0x2b8d75(0xb6c)),'yaw':_0xba7dc7[_0x2b8d75(0x6c9)](_0x35121f,_0x2b2b0e[_0x2b8d75(0xaf3)]+(-0x71*0x19+-0x8d5+0x154e),_0xba7dc7[_0x2b8d75(0x350)])};}}function _0x13da8c(){var _0x265c17=_0x2fbbc2,_0x150796={'exenD':_0xba7dc7['fYdEl'],'aZNXQ':_0x265c17(0x837)+'ap','wbwpt':_0xba7dc7['jlyfa'],'fljZQ':_0x265c17(0x321)+'f5','NIuUT':function(_0x4cdc62,_0x407e89){var _0x4791f5=_0x265c17;return _0xba7dc7[_0x4791f5(0x9c4)](_0x4cdc62,_0x407e89);}};if(_0xba7dc7['JVRfk'](_0xba7dc7[_0x265c17(0x3f5)],_0x265c17(0x4d2))){var _0x5cfa94=_0x1cd95b(),_0x2bd21c=[],_0x7313c=_0x4e8ae5['Photo'+_0x265c17(0x76e)+'orkSy'+'nc']||{},_0x3a4c41=Object[_0x265c17(0x509)](_0x7313c);for(var _0x111dd6=-0x1e80*-0x1+0x122e+0xc9*-0x3e;_0x111dd6<_0x3a4c41['lengt'+'h']&&_0x111dd6<-0x216+-0x1697*-0x1+-0x1*0x1461;_0x111dd6++){var _0x5ce012=_0x7313c[_0x3a4c41[_0x111dd6]],_0x477762=[],_0x33fcf7=_0x2cad2b['Photo'+_0x265c17(0x76e)+_0x265c17(0x67c)+'nc']||[];for(var _0x5186bd=-0x263e+-0x1c46+0xb16*0x6;_0x5186bd<_0x33fcf7['lengt'+'h'];_0x5186bd++){if(_0xba7dc7[_0x265c17(0xbde)](_0x33fcf7[_0x5186bd][-0x10a9+-0x1*0x470+0x151a],'v3'))continue;var _0x2e6760=_0x2ff316(_0x5ce012['ptr'],_0x33fcf7[_0x5186bd][0xcd6+-0x1b9a+0x3c*0x3f],-0x1*0x607+0x28d*0x1+0x1*0x37d);if(_0x2e6760)_0x477762[_0x265c17(0x3ad)]({'o':'0x'+_0x33fcf7[_0x5186bd][-0x1*0x1f17+-0x24cb+-0x43e2*-0x1][_0x265c17(0x6ac)+_0x265c17(0x21d)](0xd*-0xc9+-0xb2*0x5+0xdbf),'v':_0x2e6760});}var _0x242767=_0xba7dc7[_0x265c17(0x658)](_0x4ea8d8,_0x477762,_0x5cfa94?_0x5cfa94[_0x265c17(0x452)][0x20b8+-0x2d2+-0x9f7*0x3]:null),_0x5e33d1=_0x242767[_0x265c17(0x30b)];if(!_0x5e33d1)continue;var _0x146e36={'ptr':_0x5ce012[_0x265c17(0xaf3)],'x':_0x5e33d1[-0x85b+0x15*-0xd4+0x19bf],'y':_0x5e33d1[-0xc8a+0x22a3+-0x1618],'z':_0x5e33d1[-0x196e+0x49a+0x2a*0x7f],'posAt':_0x242767[_0x265c17(0x75f)],'inBand':_0x242767['inBan'+'d'],'cluster':_0x242767['clust'+'er'],'team':_0x35121f(_0x5ce012[_0x265c17(0xaf3)]+(-0x1295+-0x1*0x3e5+0x1*0x16d2),_0x265c17(0xc77)),'localFlag':_0xba7dc7['oNiFz'](_0x35121f,_0x5ce012[_0x265c17(0xaf3)]+(-0xb*0xef+-0xc79+0x6*0x3df),_0x265c17(0xc77))};if(_0x5cfa94){if(_0xba7dc7['dcKxY'](_0x265c17(0x898),_0xba7dc7['zUvoc'])){var _0x3152de=_0xba7dc7[_0x265c17(0xb49)](_0x5e33d1[-0x1bef*0x1+0x3bc+0x1833],_0x5cfa94[_0x265c17(0x452)][-0x1700+0xa79*0x3+-0x86b]),_0x3f9245=_0xba7dc7[_0x265c17(0x2b6)](_0x5e33d1[0x2*0x674+0x50*0x65+-0x2c76],_0x5cfa94[_0x265c17(0x452)][0x1ded+-0x1483+-0x968]);_0x146e36['d']=Math['sqrt'](_0xba7dc7['LBIQq'](_0x3152de*_0x3152de,_0x3f9245*_0x3f9245)),_0x146e36[_0x265c17(0xc0d)+'ng']=_0xba7dc7[_0x265c17(0xd90)](Math['atan2'](_0x3152de,_0x3f9245),0x1a98+-0x1596+-0x3a*0x13)/Math['PI'];}else{var _0x41c897=('1|5|0'+_0x265c17(0xa99)+'4|3')['split']('|'),_0x106bdd=-0x15af*0x1+-0x29*-0x5b+0x71c;while(!![]){switch(_0x41c897[_0x106bdd++]){case'0':if(_0x5ebe24[_0x265c17(0x8ba)]&&!_0x4c3233())_0x477a87['boxes']=![];continue;case'1':var _0x2f8c07=_0x3bbf78&&_0x583d0c[_0x265c17(0x3c6)];continue;case'2':var _0x58cca1=!_0xd48bc3['on']?_0x150796[_0x265c17(0xbe3)]:_0x566f63[_0x265c17(0x8ba)]?_0x265c17(0xca6)+_0x265c17(0x46e):_0x150796['aZNXQ'];continue;case'3':_0x2f8c07['style']['color']=_0x5aa3d4['on']?_0x150796[_0x265c17(0x840)]:_0x150796['fljZQ'];continue;case'4':_0x2f8c07[_0x265c17(0x874)]['backg'+_0x265c17(0xb4c)]=_0xd3bf69['on']?_0x132840:'trans'+'paren'+'t';continue;case'5':if(!_0x2f8c07)return;continue;case'6':if(_0x150796[_0x265c17(0x90a)](_0x58cca1,_0x2f8c07['textC'+_0x265c17(0x98d)+'t']))_0x2f8c07[_0x265c17(0x52b)+'onten'+'t']=_0x58cca1;continue;}break;}}}_0x2bd21c[_0x265c17(0x3ad)](_0x146e36);}return{'me':_0x5cfa94,'list':_0x2bd21c};}else{var _0x58656f=_0x4bc245['on'];_0x3047d0['on']=!!_0x370383;_0x24c60e['on']&&!_0x58656f&&(_0x45ad24===_0x554396||_0xe6a7c0===null||_0x1dfd5b(_0x309949)===0x19f+-0x2f6*-0x8+-0xca7*0x2)&&(_0x5dde6a=_0x368a83);_0x19a9a8['facto'+'r']=_0x111ca0['min'](_0x5ed11c['max'],_0xc14cbc[_0x265c17(0x640)](_0x5b459c[_0x265c17(0x5ae)],_0x3865b3(_0x321f0a)||0x2233+-0xbed+-0x1645));if(!_0x513ac4['on'])_0x5ec399={};var _0x394db9=_0x383647();if(_0x394db9){_0x394db9['sp']&&(_0x394db9['sp'][_0x265c17(0x52b)+'onten'+'t']=_0x1d70f3['on']?'Speed'+'\x20ON':'Speed'+'\x20off',_0x394db9['sp'][_0x265c17(0x874)][_0x265c17(0x1e2)+_0x265c17(0xb4c)]=_0x2e412d['on']?_0x5ad6de:_0xba7dc7[_0x265c17(0x3d3)],_0x394db9['sp'][_0x265c17(0x874)][_0x265c17(0xc0f)]=_0x3d7349['on']?'#2a0f'+'1b':'#f7ee'+'f5');if(_0x394db9['fx'])_0x394db9['fx'][_0x265c17(0xb9b)]=_0x42a461(_0x42ac35[_0x265c17(0x33e)+'r']);if(_0x394db9['fv'])_0x394db9['fv']['textC'+'onten'+'t']=_0x27d751['facto'+'r'][_0x265c17(0x1f9)+'ed'](0x12e1+0x1a52+0x41*-0xb2)+'x';}}}var _0x40e899=null;function _0x1741c4(){var _0x1d84f1=_0x2fbbc2,_0x103396={'aIiHD':_0xba7dc7[_0x1d84f1(0xc87)],'TAvCh':function(_0x52a6ba,_0x25d9e7){return _0x52a6ba+_0x25d9e7;},'VAorz':function(_0x29565b){return _0x29565b();}};if(_0xba7dc7[_0x1d84f1(0xad8)](_0x1d84f1(0x69f),'umkOW'))_0x476fe1['fillS'+_0x1d84f1(0x411)]='rgba('+'255,1'+'10,11'+'6,.95'+')',_0x3d8d06[_0x1d84f1(0x801)]=_0x103396[_0x1d84f1(0x825)],_0x2b4028['fillT'+_0x1d84f1(0x4c8)](_0x103396[_0x1d84f1(0x815)](_0x4eb8bf['round'](_0x188755['d']||-0x214e+-0xced+0x2e3b),'m'),_0x51cbb3-_0x32b125/(-0x1e55+-0x2621+0x4478),_0x10f465-_0x11089f/(-0x11d*0x1b+-0x1222+-0x1*-0x3033)-(-0x2628+-0x1d6f*0x1+0x439a));else{if(_0x40e899)return _0x40e899;try{if('miWYU'===_0x1d84f1(0x2ed)){var _0x59ab5b=_0xba7dc7['ZFhhH']['split']('|'),_0x173268=-0x1d*0x43+0xcb7+-0x520;while(!![]){switch(_0x59ab5b[_0x173268++]){case'0':if(!_0x40e899['cv']||!_0x40e899['cv']['getCo'+'ntext'])_0x40e899=_0x2fe1e1;continue;case'1':_0x584d16['id']=_0x1d84f1(0x617)+'a-esp';continue;case'2':_0x40e899={'el':_0x584d16,'cv':_0x584d16['query'+'Selec'+_0x1d84f1(0xcbf)](_0x1d84f1(0xc80)+_0x1d84f1(0xb05)+_0x1d84f1(0x58e)),'lg':_0x584d16[_0x1d84f1(0xae5)+_0x1d84f1(0x5f8)+_0x1d84f1(0xcbf)](_0xba7dc7['MsEie'])};continue;case'3':var _0x584d16=document['creat'+_0x1d84f1(0x9a4)+_0x1d84f1(0x25c)](_0x1d84f1(0x36c));continue;case'4':_0x584d16[_0x1d84f1(0x4f4)+_0x1d84f1(0x241)]=_0xba7dc7[_0x1d84f1(0xba6)](_0xba7dc7[_0x1d84f1(0xb94)],_0xba7dc7[_0x1d84f1(0x8b6)]);continue;case'5':if(!document[_0x1d84f1(0xaf7)]||!document['body'][_0x1d84f1(0xd16)+'dChil'+'d'])return null;continue;case'6':_0x584d16[_0x1d84f1(0x874)][_0x1d84f1(0x222)+'xt']=_0xba7dc7[_0x1d84f1(0x62b)](_0xba7dc7[_0x1d84f1(0x523)](_0xba7dc7[_0x1d84f1(0x3d2)](_0x1d84f1(0x50e)+_0x1d84f1(0x213)+_0x1d84f1(0xa00)+_0x1d84f1(0x358)+_0x1d84f1(0x65e)+_0x1d84f1(0x4de)+_0x1d84f1(0x69c)+'z-ind'+_0x1d84f1(0x450)+'47483'+_0x1d84f1(0x44c)+_0x1d84f1(0x732)+'r-eve'+_0x1d84f1(0xb89)+_0x1d84f1(0x569),_0x1d84f1(0x1e2)+'round'+':rgba'+_0x1d84f1(0x613)+'2,29,'+'.72);'+_0x1d84f1(0x727)+'r:1px'+_0x1d84f1(0x9dd)+_0x1d84f1(0x690)+'a(255'+_0x1d84f1(0xa47)+_0x1d84f1(0x929)+_0x1d84f1(0x6a8)+_0x1d84f1(0xd86)+'radiu'+_0x1d84f1(0x284)+'x;'),_0x1d84f1(0x502)+'ng:4p'+'x;fon'+'t:10p'+'x/1.3'+_0x1d84f1(0xd6c)+_0x1d84f1(0x24b)+'ace,C'+'onsol'+_0x1d84f1(0x63e)+_0x1d84f1(0x6fa)+'ce;co'+'lor:#'+'bda9c'+'9;'),_0x1d84f1(0x238)+'selec'+'t:non'+_0x1d84f1(0xc96)+_0x1d84f1(0xce3)+_0x1d84f1(0x238)+_0x1d84f1(0xb56)+'t:non'+'e;');continue;case'7':var _0x2fe1e1={'cv':{'getContext':function(){return null;}},'el':_0x584d16};continue;case'8':return _0x40e899;case'9':document['body']['appen'+'dChil'+'d'](_0x584d16);continue;}break;}}else{if(_0x5090c6&&!_0x103396[_0x1d84f1(0x8b0)](_0x17fe7a)){_0x103396[_0x1d84f1(0x8b0)](_0x115b09);return;}_0x53bd5f(!![],_0x26cab1);}}catch(_0x547a30){return null;}}}var _0x358740=null;function _0x3329b6(){var _0x5e9af8=_0x2fbbc2;if(_0xba7dc7['AkzrJ'](_0xba7dc7[_0x5e9af8(0x869)],_0x5e9af8(0x5d3))){if(_0x358740)return _0x358740;try{if(_0xba7dc7[_0x5e9af8(0x330)](_0x5e9af8(0x8c9),_0x5e9af8(0x6f1)))_0x312acc(_0x59c87d);else{var _0xa42c59=(_0x5e9af8(0xc2f)+'|6|0|'+_0x5e9af8(0x234))['split']('|'),_0x459621=-0x1*0xadb+-0x1976+0x2451;while(!![]){switch(_0xa42c59[_0x459621++]){case'0':document[_0x5e9af8(0xaf7)][_0x5e9af8(0xd16)+_0x5e9af8(0x9ca)+'d'](_0x2604b5);continue;case'1':_0x2604b5['id']=_0x5e9af8(0x617)+_0x5e9af8(0xa6d)+'es';continue;case'2':var _0x2604b5=document[_0x5e9af8(0x733)+_0x5e9af8(0x9a4)+'ent'](_0xba7dc7['dbuNa']);continue;case'3':if(!document['body']||!document[_0x5e9af8(0xaf7)][_0x5e9af8(0xd16)+_0x5e9af8(0x9ca)+'d'])return null;continue;case'4':return _0x358740;case'5':_0x358740={'cv':_0x2604b5};continue;case'6':_0x2604b5['style'][_0x5e9af8(0x222)+'xt']=_0x5e9af8(0x50e)+_0x5e9af8(0x213)+_0x5e9af8(0xa00)+'left:'+'0;top'+_0x5e9af8(0xab5)+_0x5e9af8(0x7b8)+_0x5e9af8(0xd2a)+'48364'+_0x5e9af8(0x944)+_0x5e9af8(0x634)+'event'+_0x5e9af8(0x6e4)+'e;';continue;}break;}}}catch(_0x4c1646){if('rRADn'!==_0x5e9af8(0x5bd)){var _0x48fb5a=(_0x5e9af8(0xaa4)+_0x5e9af8(0x844)+_0x5e9af8(0x332))[_0x5e9af8(0xb3c)]('|'),_0x1a7752=-0x4ac+-0x256a+0x2a16;while(!![]){switch(_0x48fb5a[_0x1a7752++]){case'0':var _0x37c1d3=[];continue;case'1':for(var _0x222507=-0x21c8+0x18cc+0x8fc;_0x222507<_0x25e06e;_0x222507++)_0x37c1d3['push'](_0x2e8656['getFl'+_0x5e9af8(0x2d0)](_0xba7dc7[_0x5e9af8(0xb80)](_0x2c7be6,_0xf55d41)+_0x222507*(-0x1581+-0x3b6+0x193b),!![]));continue;case'2':return _0x37c1d3;case'3':_0x504b31['ok']+=_0x2620ab;continue;case'4':var _0x2e8656=_0xba7dc7['IhmTM'](_0x193ccd);continue;case'5':if(!_0x2e8656)return null;continue;case'6':if(_0xba7dc7[_0x5e9af8(0x667)](_0x26c423,-0x2df+-0xcaa+0xf89)||_0xba7dc7[_0x5e9af8(0x77b)](_0x11a86f+_0x28b4af*(0x1069+0x160+-0x11c5),_0x2e8656[_0x5e9af8(0xb8e)+'ength']))return null;continue;}break;}}else return null;}}else _0x46dafe();}function _0x6d001a(_0x395494){var _0x1eaebf=_0x2fbbc2,_0x5d13ce={'gJgyo':'cmd'};try{if(_0xba7dc7[_0x1eaebf(0x4e7)](_0x1eaebf(0x2f2),_0xba7dc7[_0x1eaebf(0x560)]))return _0x2dea4b(_0x2f9234);else{var _0x1d16c0=Math['max'](0x1*-0x1d69+0x1e73+-0x109,window[_0x1eaebf(0x4f4)+'Width']||document[_0x1eaebf(0x56f)+_0x1eaebf(0x689)+_0x1eaebf(0x430)]['clien'+_0x1eaebf(0xb46)+'h']||0x11e+0x853+-0x971),_0x26e9db=Math[_0x1eaebf(0x640)](0x1*-0xeb9+-0x1*0x1dbc+0x2c76,window[_0x1eaebf(0x4f4)+_0x1eaebf(0x2fc)+'t']||document[_0x1eaebf(0x56f)+'entEl'+_0x1eaebf(0x430)]['clien'+'tHeig'+'ht']||0x3*-0xa3d+-0x2148+-0x17d*-0x2b);if(_0xba7dc7[_0x1eaebf(0x647)](_0x395494['cv'][_0x1eaebf(0x582)],_0x1d16c0)||_0xba7dc7[_0x1eaebf(0x4ee)](_0x395494['cv'][_0x1eaebf(0x92e)+'t'],_0x26e9db)){if(_0xba7dc7[_0x1eaebf(0x42b)](_0x1eaebf(0x5ac),_0x1eaebf(0x5ac)))_0x395494['cv'][_0x1eaebf(0x582)]=_0x1d16c0,_0x395494['cv']['heigh'+'t']=_0x26e9db;else{var _0x4469d9=_0xba7dc7[_0x1eaebf(0x66f)][_0x1eaebf(0xb3c)]('|'),_0x62185d=0x19f2+-0x114+-0x1*0x18de;while(!![]){switch(_0x4469d9[_0x62185d++]){case'0':_0x3febc6[_0x1eaebf(0x874)][_0x1eaebf(0x83d)+_0x1eaebf(0x9fe)]='right';continue;case'1':_0x3febc6['style'][_0x1eaebf(0x9ba)]='1';continue;case'2':_0x47d4bf[_0x1eaebf(0xaf7)][_0x1eaebf(0xd65)+_0x1eaebf(0x601)]['sp']=_0x3febc6;continue;case'3':_0x16f2c7[_0x1eaebf(0xd16)+_0x1eaebf(0x9ca)+'d'](_0x3febc6);continue;case'4':_0x3febc6[_0x1eaebf(0x8d2)+'et']['k']=_0x242baf[_0x54253f][0x2471+-0xbf*0x14+-0x1584];continue;case'5':_0x3febc6['style'][_0x1eaebf(0x4d4)+_0x1eaebf(0x6d0)]='0';continue;case'6':var _0x47d4bf=_0x427149[_0x1eaebf(0x25f)+'h']?_0xd23fdb[_0xba7dc7['xzXmJ'](_0x41e3fe['lengt'+'h'],0xeb7+-0x17bb+-0x905*-0x1)]:null;continue;case'7':var _0x3febc6=_0x54617b(_0xba7dc7['nKwOL'],_0xba7dc7[_0x1eaebf(0x60d)]);continue;case'8':_0x3febc6['textC'+'onten'+'t']=_0x55458e(_0x1aeb0d[_0xd0f00b][0xc5b*-0x3+0x258+0x1*0x22bb]);continue;case'9':_0x47d4bf['body'][_0x1eaebf(0xd16)+'dChil'+'d'](_0x16f2c7);continue;case'10':!_0x47d4bf&&(_0x47d4bf=_0x14eb98('Sessi'+'on',![]),_0x4d3c47['push'](_0x47d4bf));continue;case'11':var _0x16f2c7=_0xba7dc7['kHWrQ'](_0x3fbfce,_0xc37454[_0x4c74c9][-0x873+0xf7b+-0x5a*0x14]);continue;}break;}}}return{'w':_0x1d16c0,'h':_0x26e9db};}}catch(_0xbdb943){if(_0xba7dc7[_0x1eaebf(0x4c0)](_0xba7dc7['WPbNq'],_0xba7dc7[_0x1eaebf(0x486)])){var _0x26caa0={'pfNky':function(_0x2a1b5d,_0x32d991){return _0x2a1b5d===_0x32d991;},'Yacoy':_0x5d13ce[_0x1eaebf(0xcc4)],'oAJMV':function(_0x57328c,_0x378356,_0x25a3fe){return _0x57328c(_0x378356,_0x25a3fe);}},_0x1198ab=new _0x3c1050('sakur'+_0x1eaebf(0xd98));_0x1198ab['onmes'+_0x1eaebf(0x6f0)]=function(_0x10ad27){var _0xfd362e=_0x1eaebf,_0x2747ee=_0x10ad27['data'];if(_0x2747ee&&_0x26caa0[_0xfd362e(0xa9b)](_0x2747ee[_0xfd362e(0x68d)+_0xfd362e(0x95c)],_0xecf601)&&_0x2747ee['kind']===_0x26caa0['Yacoy'])_0x26caa0[_0xfd362e(0xcd3)](_0x3b20fb,_0x2747ee['cmd'],_0x2747ee[_0xfd362e(0xb53)]);};}else return{'w':0x0,'h':0x0};}}function _0x19c3eb(_0x421ade){var _0x1d1e89=_0x2fbbc2,_0xfbaa6b=_0x358740;if(!_0xfbaa6b)return;var _0x6eb251=_0xfbaa6b['cv']['getCo'+_0x1d1e89(0x99d)]&&_0xfbaa6b['cv']['getCo'+'ntext']('2d');if(!_0x6eb251)return;var _0x48d619=_0x6d001a(_0xfbaa6b);_0x6eb251['clear'+_0x1d1e89(0xcba)](-0x2*0x221+-0x59f*-0x4+-0x123a,0x8d*-0x16+0x2445+-0x1827*0x1,_0x48d619['w'],_0x48d619['h']);if(!_0x459161['boxes']||!_0x421ade||!_0x421ade['me'])return;var _0x44c619=_0x421ade['me'],_0x4707c3=null,_0x533f4f=_0x4e8ae5[_0x1d1e89(0x8f8)+_0x1d1e89(0x76e)+'orkSy'+'nc']||{},_0xba5035=Object[_0x1d1e89(0x509)](_0x533f4f);for(var _0x5ebb4d=0x6*0x117+-0xd83*-0x1+0x1*-0x140d;_0xba7dc7[_0x1d1e89(0x5bb)](_0x5ebb4d,_0xba5035['lengt'+'h']);_0x5ebb4d++){var _0x35be3c=_0x2ff316(_0x533f4f[_0xba5035[_0x5ebb4d]][_0x1d1e89(0xaf3)],0x8*-0x1a9+0xbc1+-0x1*-0x1bb,0x14*-0x88+-0x15c1+-0x6*-0x566);if(_0x35be3c&&_0xba7dc7[_0x1d1e89(0x693)](_0x35be3c[0x47*-0x42+0x1b0a+-0x8bc],0x814+-0x23*0x46+0x17e)&&_0xba7dc7[_0x1d1e89(0x6fd)](_0x35be3c[0x1*-0x2f6+-0x7ed*0x2+0x12d1],-0x1745+0x1dee+-0x1*0x6a9)&&_0x35be3c[0x25e1+0x0+-0x25df]===0x2661+0x295*0x3+-0x2e20){if('JOJLv'!==_0x1d1e89(0x9b4)){if(_0x3bd02b[_0x1d1e89(0x2cf)+'t']&&_0x5af3ed[_0x1d1e89(0x2cf)+'t']!==_0x23fb68)_0x2efa87['paren'+'t']['postM'+'essag'+'e'](_0x2a0f45,'*');}else{_0x4707c3=_0x35121f(_0x533f4f[_0xba5035[_0x5ebb4d]]['ptr']+(-0x2*-0xed1+-0x1b*-0x1d+0x5b*-0x5b),_0xba7dc7['WBWCa']);break;}}}for(var _0x1b9f38=0x57*0x6b+-0x6bb*0x5+-0x2b6;_0x1b9f38<_0x421ade[_0x1d1e89(0xba2)][_0x1d1e89(0x25f)+'h'];_0x1b9f38++){var _0x39fa4d=_0x421ade[_0x1d1e89(0xba2)][_0x1b9f38],_0xb70d1c=_0xba7dc7[_0x1d1e89(0x540)](_0x4707c3,null)&&_0x39fa4d[_0x1d1e89(0xc85)]===_0x4707c3,_0x1b7b12=_0xf5d4f2(_0x44c619['eye'],[_0x39fa4d['x'],_0x39fa4d['y']-(0xdb*0x19+-0x193*0xd+-0xeb),_0x39fa4d['z']],_0x48d619['w'],_0x48d619['h']),_0x53b40c=_0xf5d4f2(_0x44c619[_0x1d1e89(0x70e)],[_0x39fa4d['x'],_0x39fa4d['y']+(-0xd*-0x2b+-0x24cf+0x22a0+0.8),_0x39fa4d['z']],_0x48d619['w'],_0x48d619['h']);if(!_0x1b7b12||!_0x53b40c)continue;var _0xdd3530=Math[_0x1d1e89(0x5ae)](_0x1b7b12['x'],_0x53b40c['x']),_0x2284db=Math['max'](_0x1b7b12['x'],_0x53b40c['x']),_0x56c5a7=Math[_0x1d1e89(0x5ae)](_0x1b7b12['y'],_0x53b40c['y']),_0xf5b4af=Math['max'](_0x1b7b12['y'],_0x53b40c['y']),_0x4af7ec=Math[_0x1d1e89(0x640)](-0x1*-0x1da7+0x1c4*-0xb+0xc*-0xda,Math['min'](0x873+0xb8e+-0x13c5,_0x2284db-_0xdd3530)),_0x1a379a=Math[_0x1d1e89(0x640)](0x1c*0x151+0x5d*0x25+-0x3247,Math['min'](0x1*0x60d+0xa8a+-0x100b,_0xf5b4af-_0x56c5a7)),_0x181c74=_0xba7dc7['sXrvV'](_0xdd3530+_0x2284db,0x1*0x1f3+-0x36a+0x179),_0x1fc770=_0xba7dc7[_0x1d1e89(0x5b9)](_0x56c5a7+_0xf5b4af,0x13*0x64+0x1152+-0x18bc);_0x6eb251[_0x1d1e89(0xa7a)+'eStyl'+'e']=_0xb70d1c?_0xba7dc7[_0x1d1e89(0x5c1)]:_0xba7dc7[_0x1d1e89(0x333)],_0x6eb251[_0x1d1e89(0x819)+_0x1d1e89(0x5b8)]=_0xb70d1c?0x1d8b+-0x1784+-0x606:-0xc93+0x5a4+-0x1*-0x6f1,_0x6eb251['strok'+_0x1d1e89(0x664)](_0xba7dc7[_0x1d1e89(0x27a)](_0x181c74,_0x4af7ec/(0x552*0x7+0x1c51+-0x418d)),_0xba7dc7[_0x1d1e89(0x209)](_0x1fc770,_0x1a379a/(-0x33f*-0x9+-0x265b*-0x1+-0x170*0x2f)),_0x4af7ec,_0x1a379a),!_0xb70d1c&&(_0x6eb251['fillS'+_0x1d1e89(0x411)]=_0xba7dc7[_0x1d1e89(0x333)],_0x6eb251[_0x1d1e89(0x801)]=_0x1d1e89(0xb73)+_0x1d1e89(0xcb3)+'nospa'+_0x1d1e89(0x99c)+_0x1d1e89(0x688)+_0x1d1e89(0xc5b)+_0x1d1e89(0x23c)+'e',_0x6eb251[_0x1d1e89(0x6cc)+_0x1d1e89(0x4c8)](_0xba7dc7[_0x1d1e89(0xa6f)](Math[_0x1d1e89(0xb4c)](_0x39fa4d['d']||-0x1*0x583+0xd5*-0x17+0x18a6),'m'),_0x181c74-_0x4af7ec/(0x1*0x504+-0x4*0x7c1+0x1a02),_0xba7dc7[_0x1d1e89(0xb03)](_0x1fc770-_0x1a379a/(-0x11*0xab+-0x1*0x654+-0x11b1*-0x1),0x1448+0x2*0xc3+-0x15cb)));}}function _0xd33cb9(){var _0xa83c69=_0x2fbbc2,_0x3b5c44={'PyHdb':function(_0x7a58cd,_0x1d02b9){var _0x2987bd=_0x4e00;return _0xba7dc7[_0x2987bd(0xb26)](_0x7a58cd,_0x1d02b9);},'NSTOT':function(_0x51156a,_0x51068d){return _0xba7dc7['FMtpl'](_0x51156a,_0x51068d);}},_0x630ae3=_0x1741c4();if(!_0x630ae3||!_0x630ae3['cv'])return;try{if('vvQOg'!==_0xba7dc7[_0xa83c69(0xc82)]){_0x10aabc[0x72*-0x21+-0x1158+0x200b]&&_0xba7dc7[_0xa83c69(0x288)](typeof _0x2f15aa[0xf06+-0x1*0x167f+-0x3bd*-0x2][_0xa83c69(0x432)],'funct'+_0xa83c69(0x584))&&(_0x4aa222[_0xa83c69(0x309)+'st']=_0x4bf289[-0x103b+-0x6*0x35+-0x117a*-0x1]['val'](),_0x227f5f[_0xa83c69(0x72a)+'ts']++);if(_0x14f7ff[-0xab7+-0xd3f*-0x1+-0x288]&&_0xba7dc7['dcKxY'](typeof _0x414380[0x19d0+0x14*0x1ee+-0x4068][_0xa83c69(0x432)],'funct'+'ion')){var _0x3958cc=_0x34f934[0x1c56+-0x2ed+-0x1969]['val']();if(_0x3958cc)_0xd135b3=_0x3958cc;}}else{var _0x1a7014=_0x630ae3['cv'][_0xa83c69(0xb98)+_0xa83c69(0x99d)]&&_0x630ae3['cv'][_0xa83c69(0xb98)+_0xa83c69(0x99d)]('2d');if(!_0x1a7014)return;var _0x531370=_0x630ae3['cv'][_0xa83c69(0x582)],_0x14287c=_0x531370/(-0x2ba*-0x5+0x2365*0x1+-0x3105),_0x39607c=_0x13da8c(),_0xa614a=_0x39607c['me'];_0x1a7014['clear'+'Rect'](-0x1de8+-0x17*0x13a+0x2b*0x15a,-0x16af*-0x1+0x1*-0x7af+-0xc0*0x14,_0x531370,_0x531370),_0x1a7014[_0xa83c69(0xa7a)+_0xa83c69(0xa36)+'e']=_0xba7dc7[_0xa83c69(0x1e4)],_0x1a7014['lineW'+_0xa83c69(0x5b8)]=-0x1ef5+-0x107c+0x2f72;for(var _0x3d764a=0x2132+0x83e+0x296f*-0x1;_0xba7dc7[_0xa83c69(0x8e4)](_0x3d764a,0x7c3*0x2+0x488+-0x2dd*0x7);_0x3d764a++){_0x1a7014[_0xa83c69(0xa6a)+_0xa83c69(0x66d)](),_0x1a7014[_0xa83c69(0x363)](_0x14287c,_0x14287c,_0xba7dc7[_0xa83c69(0x479)]((_0x14287c-(0x1*-0x1283+0xcab+0x5dc))*_0x3d764a,0x1fba+0x1a6*-0x11+-0x3b1),-0x18e*-0x15+0x1b5*0x13+-0x4115,Math['PI']*(-0x1aee+0x32*-0xab+0x3c56*0x1)),_0x1a7014['strok'+'e']();}_0x1a7014[_0xa83c69(0xa6a)+_0xa83c69(0x66d)](),_0x1a7014['moveT'+'o'](0x2*0xc3d+0x20bc+0x3932*-0x1,_0x14287c),_0x1a7014['lineT'+'o'](_0xba7dc7[_0xa83c69(0xc1e)](_0x531370,0x1*0x73e+-0xd88+-0x2*-0x327),_0x14287c),_0x1a7014[_0xa83c69(0x4ca)+'o'](_0x14287c,-0x23fa+-0x3*-0x1f3+0x1e25),_0x1a7014['lineT'+'o'](_0x14287c,_0x531370-(-0x28a*0xf+0x1e03+-0x1*-0x817)),_0x1a7014['strok'+'e']();if(!_0xa614a){if(_0x630ae3['lg'])_0x630ae3['lg'][_0xa83c69(0x52b)+_0xa83c69(0x98d)+'t']='';return;}var _0x24827a=(_0x14287c-(-0x1cdd+0xb*-0x23b+-0xd*-0x41c))/_0x459161[_0xa83c69(0x585)],_0x57baea=null,_0xd78081=_0x4e8ae5[_0xa83c69(0x8f8)+_0xa83c69(0x76e)+'orkSy'+'nc']||{},_0x1fce78=Object[_0xa83c69(0x509)](_0xd78081);for(var _0x595093=-0x1db2+0x22b8+-0x506;_0x595093<_0x1fce78[_0xa83c69(0x25f)+'h'];_0x595093++){if(_0xba7dc7['Oouds'](_0xa83c69(0x412),_0xa83c69(0x412))){var _0x3985a3=_0x462225[_0xa83c69(0x4f4)+'Heigh'+'t']||0x6c0+0x262a+-0x14e5*0x2;if(_0x3b5c44[_0xa83c69(0x947)](_0x3985a3,-0x13df*-0x1+0x233*0x1+-0x1*0x13a6))_0x3b5c44['NSTOT'](_0x4257ed,![]);}else{var _0x273209=_0xba7dc7[_0xa83c69(0x1fa)](_0x2ff316,_0xd78081[_0x1fce78[_0x595093]]['ptr'],-0x10a6+0x8*-0x21e+0x2*0x10e5,0x14ce+0xc22+-0x20ed);if(_0x273209&&_0xba7dc7[_0xa83c69(0xa90)](_0x273209[-0x9bf+-0x100f*-0x1+0x2*-0x328],-0xafc+0x132e+-0x832)&&_0xba7dc7[_0xa83c69(0x72f)](_0x273209[0x81c*-0x2+-0x1*0x1796+-0xed*-0x2b],0x2d5+0x14ab+-0x10*0x178)&&_0x273209[0x1e7d+-0xc2c+-0x124f]===-0x2537+0x1*-0x3b+0x2572){_0x57baea=_0x35121f(_0xba7dc7[_0xa83c69(0x878)](_0xd78081[_0x1fce78[_0x595093]][_0xa83c69(0xaf3)],0x19a9+-0x687*0x1+-0x12ca),_0xa83c69(0xc77));break;}}}var _0x3feb5c=0x1908+0x97*-0x26+-0x29e;for(var _0x50bee1=-0x89*-0x36+0x1*0x126+-0x6*0x502;_0xba7dc7['wmdeH'](_0x50bee1,_0x39607c[_0xa83c69(0xba2)]['lengt'+'h']);_0x50bee1++){if(_0xba7dc7[_0xa83c69(0x70b)](_0xba7dc7[_0xa83c69(0x44d)],'jBzFD'))_0x3b0059=_0xba7dc7[_0xa83c69(0x948)](_0xa83c69(0x785)+'ata\x20r'+_0xa83c69(0x388)+'·\x20'+_0x46c507,'s'),_0x43a939=_0xa83c69(0x9cf)+'8a';else{var _0x362249=('6|8|4'+'|9|2|'+_0xa83c69(0x7c4)+'|0|3|'+'10')['split']('|'),_0x1b54a7=0x12ef+-0x2c9+-0x1026;while(!![]){switch(_0x362249[_0x1b54a7++]){case'0':_0x1a7014[_0xa83c69(0x363)](_0x3af4d4,_0x275384,_0x2ee3d2?-0x12fb+0x1981+-0x684:-0x25*-0x49+-0x99c+-0x11*0xe+0.20000000000000018,-0x2b5*-0xc+-0x5e+-0x201e,_0xba7dc7[_0xa83c69(0x2eb)](Math['PI'],0x20f2+-0x205*-0x7+-0xfb1*0x3));continue;case'1':_0x1a7014[_0xa83c69(0x375)+'tyle']=_0x2ee3d2?_0xba7dc7['ceNQt']:'#ff6e'+'74';continue;case'2':_0x1afba7>_0xba7dc7['LnHHN'](_0x14287c,0x1617+0xdf*0x29+-0xac*0x56)?(_0x3af4d4=_0x14287c+_0xa35a0e/_0x1afba7*_0xba7dc7[_0xa83c69(0xa9f)](_0x14287c,-0x21*-0x113+-0x107a+-0x12f3),_0x275384=_0xba7dc7['UiisY'](_0x14287c,_0x577347/_0x1afba7*(_0x14287c-(-0x1*0x224b+-0x19*-0x7+0x21a2)))):(_0x3af4d4=_0x14287c+_0xa35a0e,_0x275384=_0x14287c+_0x577347);continue;case'3':_0x1a7014[_0xa83c69(0x75a)]();continue;case'4':var _0x1afba7=Math['sqrt'](_0xba7dc7[_0xa83c69(0xbeb)](_0xa35a0e,_0xa35a0e)+_0x577347*_0x577347);continue;case'5':_0x1a7014[_0xa83c69(0xa6a)+_0xa83c69(0x66d)]();continue;case'6':var _0x1f51f5=_0x39607c[_0xa83c69(0xba2)][_0x50bee1];continue;case'7':var _0x2ee3d2=_0x57baea!==null&&_0xba7dc7[_0xa83c69(0x1eb)](_0x1f51f5[_0xa83c69(0xc85)],_0x57baea);continue;case'8':var _0xa35a0e=_0xba7dc7[_0xa83c69(0x791)](_0x1f51f5['x']-_0xa614a['feet'][-0x9*-0x255+0x19cb+-0x1764*0x2],_0x24827a),_0x577347=_0xba7dc7[_0xa83c69(0x414)](_0x1f51f5['z'],_0xa614a[_0xa83c69(0x452)][0x919+0x15df+-0x1ef6])*_0x24827a;continue;case'9':var _0x3af4d4=_0x14287c,_0x275384=_0x14287c;continue;case'10':_0x3feb5c++;continue;}break;}}}_0x1a7014['fillS'+_0xa83c69(0x411)]=_0xa83c69(0xa38)+'a8',_0x1a7014[_0xa83c69(0xa6a)+'Path'](),_0x1a7014[_0xa83c69(0x363)](_0x14287c,_0x14287c,0x2015+0x33d*-0xb+0x38d,-0x1264+-0xc*-0x2a2+-0xd34,Math['PI']*(-0x1395+-0x158c+0x2923*0x1)),_0x1a7014['fill'](),_0x630ae3['lg']&&(_0x630ae3['lg']['textC'+_0xa83c69(0x98d)+'t']=_0xba7dc7['YVCux'](_0xba7dc7['MgCqg']('esp\x20'+_0x3feb5c+'\x20·\x20',Math[_0xa83c69(0xb4c)](_0x459161[_0xa83c69(0x585)]))+'m',_0x459161[_0xa83c69(0x8ba)]?_0xba7dc7['OWWWL']+Math[_0xa83c69(0xb4c)](_0x410599['fov'])+'°':'')+(_0xba7dc7[_0xa83c69(0xbde)](_0x57baea,null)?_0xba7dc7[_0xa83c69(0x555)]('\x20·\x20te'+'am',_0x57baea):''));}}catch(_0x4abeda){}}function _0x1f56cf(){var _0x56b7ad=_0x2fbbc2,_0x4f7099=_0x4e8ae5[_0x56b7ad(0x8f8)+_0x56b7ad(0x76e)+_0x56b7ad(0x67c)+'nc']||{};if(!Object[_0x56b7ad(0x509)](_0x4f7099)['lengt'+'h'])return![];return!!_0x1cd95b();}function _0x42b081(_0x4c61db){var _0x252f02=_0x2fbbc2;try{var _0x16adae=_0x40e899;if(_0x16adae&&_0x16adae['el'])_0x16adae['el'][_0x252f02(0x874)][_0x252f02(0x7b6)+'ay']=_0x4c61db?'':'none';var _0x23cf53=_0x358740;if(_0x23cf53&&_0x23cf53['cv'])_0x23cf53['cv']['style']['displ'+'ay']=_0x4c61db?'':'none';}catch(_0x152ba7){}}function _0x5ba810(){var _0x127ef6=_0x2fbbc2;if(!_0x459161['on']||!_0x1f56cf()){_0xba7dc7[_0x127ef6(0x86c)](_0x42b081,![]),setTimeout(_0x5ba810,-0x266a+-0x1144+0x38da);return;}_0x42b081(!![]),_0xc23780(),_0x1741c4();if(_0x459161['boxes'])_0xba7dc7['WCCjb'](_0x3329b6);var _0x3be525=null;try{_0x3be525=_0x13da8c();}catch(_0x4971d2){}try{_0xd33cb9();}catch(_0x2336ec){}try{'DQspG'!==_0x127ef6(0x943)?(_0x454f4b=_0x1866f4[_0x1a83e1]['last'],_0x6d96f4['sourc'+'e']=_0xba7dc7[_0x127ef6(0xbe5)]):_0xba7dc7[_0x127ef6(0x768)](_0x19c3eb,_0x3be525);}catch(_0x796dcc){}_0xba7dc7[_0x127ef6(0x557)](setTimeout,_0x5ba810,-0xb4f+0x1*0xa0c+-0x1*-0x175);}function _0x3f8fae(){var _0x4775f2=_0x2fbbc2,_0x48f5a9={'piPnu':function(_0x412874,_0x4f7ef0){return _0x412874===_0x4f7ef0;},'TSHHN':function(_0x4e6ccf,_0xcf745b){var _0x17bded=_0x4e00;return _0xba7dc7[_0x17bded(0x8ad)](_0x4e6ccf,_0xcf745b);},'yuXlx':_0xba7dc7[_0x4775f2(0x7be)],'ReNgW':function(_0x9b8bc7,_0x66004d){return _0xba7dc7['pZiDv'](_0x9b8bc7,_0x66004d);},'CbCMw':_0x4775f2(0x68b)+'ve','dENWN':function(_0x48cd57,_0x21da19){return _0x48cd57<_0x21da19;}},_0x1a8563=window['Unity'+_0x4775f2(0x80a)+_0x4775f2(0xb1d)]&&window[_0x4775f2(0xb51)+_0x4775f2(0x80a)+'dkit'][_0x4775f2(0x295)+'me']||null,_0xb80cb4=_0x1a8563&&_0x1a8563[_0x4775f2(0x5ee)+_0x4775f2(0x610)+'ext'],_0x4148ae=_0xb80cb4&&_0xb80cb4[_0x4775f2(0xd87)+_0x4775f2(0x561)],_0x426cfe={},_0x54b900=[];for(var _0x18d6fe in _0x342350){_0x426cfe[_0x18d6fe]=_0xba7dc7['LXqVl']('0x',_0x342350[_0x18d6fe][_0x4775f2(0xaf3)]['toStr'+_0x4775f2(0x21d)](0x1bae+0x8a*-0x3a+-0x3a6*-0x1));if(_0x342350[_0x18d6fe][_0x4775f2(0x7c0)+_0x4775f2(0x3b8)])_0x54b900[_0x4775f2(0x3ad)](_0x18d6fe);}var _0x555142={};for(var _0x208fc4 in _0x342350)_0x555142[_0x208fc4]=_0x390ca2(_0x342350[_0x208fc4]['ptr']);var _0x34dc32={},_0x3544fb=null;try{_0x34dc32=_0x1f0aaa();}catch(_0xa4a210){_0xba7dc7[_0x4775f2(0x245)](_0xba7dc7[_0x4775f2(0xcb9)],_0x4775f2(0x300))?_0x3544fb=String(_0xa4a210&&_0xa4a210['messa'+'ge']||_0xa4a210):(_0x38e7fd[_0x4775f2(0xce7)+_0x4775f2(0xbb0)+'d'](_0xba7dc7[_0x4775f2(0xbdf)]),_0x29717f());}var _0x5ed60a={'version':_0x1a991b,'when':new Date()[_0x4775f2(0x8a6)+_0x4775f2(0xd94)+'g'](),'elapsedMs':Date['now']()-_0x507012,'frame':location[_0x4775f2(0x47a)][_0x4775f2(0xcf5)](0x11a7*0x1+-0x10d2*0x2+0xffd,-0x1715+0xc00+0xb8d),'host':_0x1108e0,'frameRole':_0x4a7871,'uwmk':!!_0x1a8563,'il2CppContext':!!_0xb80cb4,'typeCount':_0x4148ae?Object[_0x4775f2(0x509)](_0x4148ae)[_0x4775f2(0x25f)+'h']:null,'arm':_0x1fd036,'assemblies':_0x15ff0c,'hooksTotal':_0x49480d[_0x4775f2(0x25f)+'h'],'hooksApplied':_0x4149c6(),'hooksResolved':_0x556b49(),'hooksRegisteredAtArm':_0x1fd036[_0x4775f2(0x497)+'Regis'+'tered']||0x257b+0x2*0x4b8+-0x2eeb,'hookErrors':_0x250741['slice'](-0xdca+0x1ea0+-0x86b*0x2,0x1285+0x2*-0xd17+0x7b1),'instances':_0x426cfe,'classNames':_0x555142,'instancesReplaced':_0x54b900,'hookFireProof':_0x9cd7fd,'survey':_0x34dc32,'actkKeys':_0x4c1c31,'surveyRows':Object[_0x4775f2(0x509)](_0x34dc32)['reduc'+'e'](function(_0x474264,_0x2d7ca5){var _0x4cff78=_0x4775f2;return _0xba7dc7[_0x4cff78(0xadb)](_0x474264,_0x34dc32[_0x2d7ca5][_0x4cff78(0x25f)+'h']);},0x8*0x221+0x2017+-0x19*0x1f7),'reads':{'ok':_0x24366e['ok'],'failed':_0x24366e['faile'+'d'],'lastError':_0x24366e[_0x4775f2(0x8ea)+_0x4775f2(0x2da)],'source':_0x24366e[_0x4775f2(0xcf9)+'e']},'identity':_0x30faec(),'globals':_0xba7dc7['gNMcj'](_0x237735),'wasmMemory':{'captured':!!_0x2411c3,'atMs':_0x3e4385,'bytes':(function(){var _0x3ab526=_0x4775f2;try{return _0x2411c3&&_0x2411c3[_0x3ab526(0x78d)+'r']?_0x2411c3[_0x3ab526(0x78d)+'r']['byteL'+_0x3ab526(0xa0c)]:-0xc95+0x520+0x53*0x17;}catch(_0x497e93){return-0x236*-0xe+-0x9b*0x6+0x10d*-0x1a;}}()),'exportKeys':_0x4bcd42},'diff':_0x7a9f53[_0x4775f2(0xcf5)](-0x5b*-0x1a+-0x1*0x125f+0x921,-0x23b+-0x1*-0x2632+0x1*-0x23cf),'speed':{'on':_0x2786ed['on'],'factor':_0x2786ed[_0x4775f2(0x33e)+'r'],'writes':_0xf3eae3,'scaled':_0x171be9['slice'](-0x18cd+0x2b*-0x33+0x215e,-0x1b04+0x25ce*0x1+-0xaba),'skipped':_0x52a75f['slice'](0x33*0xb8+0x2167+-0x460f,-0x765+0x816+-0xa1)},'esp':_0xba7dc7[_0x4775f2(0x6f4)](_0x887b8a),'view':_0xba7dc7[_0x4775f2(0x779)](_0x38891b),'angles':(function(){var _0x1dbc2f=_0x4775f2,_0x127c8f={'gPdwK':function(_0x35f408,_0x4f64b2){return _0xba7dc7['lYxGD'](_0x35f408,_0x4f64b2);},'LpdEp':_0xba7dc7[_0x1dbc2f(0x41d)],'wvcnD':_0xba7dc7['OWWWL'],'mXwok':function(_0x869df3,_0x26991b){return _0x869df3+_0x26991b;}};if(_0xba7dc7['AkzrJ'](_0x1dbc2f(0x6b8),_0x1dbc2f(0x6b8))){var _0x1f73c2=(_0x1dbc2f(0xc2f)+'|0|4')[_0x1dbc2f(0xb3c)]('|'),_0x3f179e=-0x203a+-0x2571+0x45ab;while(!![]){switch(_0x1f73c2[_0x3f179e++]){case'0':if(_0x10700a){var _0x156922=_0xf5d4f2(_0x10700a[_0x1dbc2f(0x70e)],[_0x10700a['eye'][0xff8+-0x1d*0xe1+0x985],_0x10700a['eye'][0xf3*0xb+-0x76b*0x1+-0x1*0x305],_0xba7dc7['rcprc'](_0x10700a[_0x1dbc2f(0x70e)][0x584*-0x2+-0x1004+0x1b0e],-0x8fd+0x1*0x1a1+0x91*0xd)],-0x3*-0x281+-0x19e*0xa+0xc91,0x18d4+-0x2253+0xd67);_0x156922&&(_0x48c45f=_0xba7dc7['TCMSU'](_0x156922['x'],-0x13b7+0x6b4*0x3+-0x1*-0x383),_0x325778=_0xba7dc7['WfHtA'](_0x156922['y'],0x3db*0x9+0x23f1+-0x10af*0x4));}continue;case'1':var _0x10700a=_0x1cd95b();continue;case'2':var _0x48c45f=null,_0x325778=null;continue;case'3':var _0x5638c1=_0x5619a6();continue;case'4':return{'identified':_0x20b344[_0x1dbc2f(0xd01)+_0x1dbc2f(0xae6)],'why':_0x20b344[_0x1dbc2f(0x538)],'source':_0x20b344['sourc'+'e'],'yawAt':_0x20b344[_0x1dbc2f(0xa5e)+_0x1dbc2f(0xa53)]||_0xba7dc7['JJjAT'],'pitchAt':_0x20b344['pitch'+_0x1dbc2f(0x5fd)+'r']||'0x1c\x20'+_0x1dbc2f(0x789)+'s)','getters':_0x20b344['gette'+'rs'],'rawPitch':_0x20b344[_0x1dbc2f(0x5e6)+_0x1dbc2f(0xaf9)],'rawYaw':_0x20b344['rawYa'+'w'],'pitch':_0x20b344[_0x1dbc2f(0xa61)],'yaw':_0x20b344['yaw'],'pitchOff':_0x410599['pitch'+'Off'],'yawOff':_0x410599[_0x1dbc2f(0x6ff)+'f'],'fov':_0x410599['fov'],'fovSane':_0xba7dc7['Jhsmh'](_0x410599[_0x1dbc2f(0x257)],-0x3a*-0x91+0x1b1+0x224f*-0x1)&&_0xba7dc7[_0x1dbc2f(0xa26)](_0x410599['fov'],0x531+0x1e*-0x66+0x731),'centreX':_0x48c45f,'centreY':_0x325778};}break;}}else _0xb7563['lg']['textC'+_0x1dbc2f(0x98d)+'t']=_0x127c8f[_0x1dbc2f(0x6c5)](_0x127c8f[_0x1dbc2f(0xd41)],_0x1b4aa7)+'\x20·\x20'+_0x187d72[_0x1dbc2f(0xb4c)](_0x51b2c7['span'])+'m'+(_0x5e0b00['boxes']?_0x127c8f[_0x1dbc2f(0x292)]+_0x1f02b3[_0x1dbc2f(0xb4c)](_0x50419e[_0x1dbc2f(0x257)])+'°':'')+(_0x5c1afd!==null?_0x127c8f[_0x1dbc2f(0x9ce)]('\x20·\x20te'+'am',_0x45efed):'');}()),'fov':_0x410599[_0x4775f2(0x257)],'espView':{'on':_0x459161['on'],'boxes':_0x459161['boxes'],'span':_0x459161['span']},'local':(function(){var _0x5cd4c6=_0x4775f2,_0x3039ac=_0x1cd95b();if(!_0x3039ac)return null;return{'ptr':_0xba7dc7['RshaM']('0x',_0x3039ac['ptr']['toStr'+_0x5cd4c6(0x21d)](-0x1*-0x79d+-0x2349+0xa*0x2c6)),'feet':_0x3039ac[_0x5cd4c6(0x452)],'eye':_0x3039ac['eye'],'posAt':_0x3039ac['posAt'],'copies':_0x3039ac[_0x5cd4c6(0x405)+'s'],'cluster':_0x3039ac['clust'+'er'],'eyeHeight':_0x1b07b4,'pitch':_0x3039ac[_0x5cd4c6(0xa61)],'yaw':_0x3039ac['yaw'],'reach':_0x3039ac['reach']};}()),'uwmkLog':_0x466588['slice'](0x25ca+0x1d1d+0x1*-0x42e7,-0x1208+0x307+-0x3*-0x507),'warnings':[]};if(_0x3544fb)_0x5ed60a['warni'+_0x4775f2(0x78e)]['push'](_0x4775f2(0x208)+_0x4775f2(0x491)+'led:\x20'+_0x3544fb);if(_0x1fd036['error'])_0x5ed60a[_0x4775f2(0xb2c)+_0x4775f2(0x78e)][_0x4775f2(0x3ad)](_0xba7dc7[_0x4775f2(0x8e2)]('UWMK\x20'+_0x4775f2(0x6ae)+_0x4775f2(0x676)+_0x4775f2(0x1e5),_0x1fd036[_0x4775f2(0x705)]));_0x5ed60a['surve'+_0x4775f2(0xbc3)]===0x4b+-0x6cb+0x40*0x1a&&Object[_0x4775f2(0x509)](_0x5ed60a['insta'+'nces'])['lengt'+'h']>-0x1*0x1384+0x263a+0x12b6*-0x1&&_0x5ed60a[_0x4775f2(0xb2c)+'ngs']['push'](_0x4775f2(0x24e)+'red\x20'+Object['keys'](_0x5ed60a[_0x4775f2(0x799)+'nces'])[_0x4775f2(0x25f)+'h']+('\x20obje'+_0x4775f2(0x520)+_0x4775f2(0x988)+'read\x20'+_0x4775f2(0x20d)+'lds.\x20')+(_0x24366e[_0x4775f2(0x8ea)+'rror']?_0xba7dc7[_0x4775f2(0x3da)](_0x4775f2(0xd05)+_0x4775f2(0x907),_0x24366e[_0x4775f2(0x8ea)+_0x4775f2(0x2da)]):_0x4775f2(0x3be)+'ad\x20fa'+_0x4775f2(0xcb1)+'\x20so\x20e'+_0x4775f2(0x642)+_0x4775f2(0x2d2)+_0x4775f2(0x94c)+'\x20skip'+'ped\x20b'+_0x4775f2(0x806)+'e.'));_0x5ed60a[_0x4775f2(0xd01)+_0x4775f2(0x2d9)]&&_0xba7dc7['nHpyd'](_0x5ed60a[_0x4775f2(0xd01)+'ity']['tagMa'+_0x4775f2(0xa7d)],![])&&(_0x4775f2(0x99e)!=='ERijK'?_0x5ed60a[_0x4775f2(0xb2c)+'ngs']['push'](_0xba7dc7[_0x4775f2(0x4d9)](_0x4775f2(0x646)+_0x4775f2(0xa64)+'MK\x20CO'+'PY\x20TO'+'OK\x20OV'+_0x4775f2(0x372)+'ndow.'+'Unity'+_0x4775f2(0x80a)+'dkit.'+_0x4775f2(0x770)+'Runti'+'me\x20we'+_0x4775f2(0x69e)+'d\x20was'+'\x20',_0xba7dc7[_0x4775f2(0x73c)])+_0xba7dc7['acalc']+_0xba7dc7['TEqzx']):_0x5ce35f[_0x4775f2(0x2d1)+'tribu'+'te'](_0xba7dc7[_0x4775f2(0x7d5)],_0xba7dc7[_0x4775f2(0x226)](_0xec5ac5)?_0x4775f2(0xabe):_0xba7dc7['LglNf']));_0x5ed60a[_0x4775f2(0xd01)+'ity']&&_0x5ed60a['ident'+'ity'][_0x4775f2(0x259)+_0x4775f2(0x4af)+_0x4775f2(0x983)+_0x4775f2(0x903)+_0x4775f2(0x420)]===![]&&_0x5ed60a['warni'+'ngs']['push'](_0xba7dc7[_0x4775f2(0x523)](_0x4775f2(0x259)+_0x4775f2(0xb57)+'ntime'+'\x20is\x20n'+'ot\x20wi'+_0x4775f2(0x2c7)+_0x4775f2(0xb51)+_0x4775f2(0x80a)+'dkit.'+_0x4775f2(0x295)+_0x4775f2(0x32c)+'the\x20p'+'lugin'+_0x4775f2(0x6da)+_0x4775f2(0x29d)+'\x20','again'+_0x4775f2(0xadc)+_0x4775f2(0x8cb)+_0x4775f2(0xbc6)+_0x4775f2(0x295)+'me\x20in'+'stanc'+_0x4775f2(0xbf9)+_0x4775f2(0x2de)+'\x20glob'+'al\x20no'+_0x4775f2(0x43c)+_0x4775f2(0xca1)));if(_0x5ed60a[_0x4775f2(0x3c6)]&&_0x5ed60a['esp'][_0x4775f2(0xcd9)])_0x5ed60a['warni'+'ngs']['push'](_0x4775f2(0x30d)+_0x5ed60a['esp']['note']);if(_0x5ed60a[_0x4775f2(0x281)+'ls']&&!_0x5ed60a['globa'+'ls'][_0x4775f2(0xae0)+'8']){var _0xb5b8d1='';_0x5ed60a[_0x4775f2(0x6de)+'irePr'+'oof']&&(_0xb5b8d1=_0xba7dc7[_0x4775f2(0xadb)](_0xba7dc7[_0x4775f2(0xa40)](_0xba7dc7[_0x4775f2(0x923)](_0xba7dc7['SjmTH'](_0xba7dc7[_0x4775f2(0xc35)]('\x20A\x20ho'+'ok\x20fi'+'red\x20a'+'t\x20'+_0x5ed60a[_0x4775f2(0x6de)+_0x4775f2(0x84e)+'oof'][_0x4775f2(0x848)]+_0xba7dc7['AoEht'],_0x5ed60a[_0x4775f2(0x6de)+'irePr'+'oof']['origi'+'nalFu'+'nc']),_0xba7dc7[_0x4775f2(0x4c7)]),_0x5ed60a[_0x4775f2(0x6de)+'irePr'+'oof'][_0x4775f2(0x52d)+'veGam'+_0x4775f2(0xadd)+'re']),'\x20(sou'+'rce:\x20'),_0x5ed60a[_0x4775f2(0x6de)+_0x4775f2(0x84e)+_0x4775f2(0x90d)][_0x4775f2(0x86e)+_0x4775f2(0x962)+'AtFir'+'e']||_0x4775f2(0x7a0))+(_0x4775f2(0x382)+_0x4775f2(0xa97)+'refer'+_0x4775f2(0x3a4)+_0x4775f2(0xad6)+_0x4775f2(0xbb1)+'en\x20an'+_0x4775f2(0xd1f)+'not\x20r'+'eacha'+_0x4775f2(0xd75)+'ow.')),_0x5ed60a[_0x4775f2(0xb2c)+_0x4775f2(0x78e)]['push'](_0xba7dc7[_0x4775f2(0x221)](_0xba7dc7[_0x4775f2(0xc38)](_0xba7dc7['QLdEB'](_0xba7dc7[_0x4775f2(0xd3f)]+(_0x5ed60a[_0x4775f2(0x281)+'ls'][_0x4775f2(0x86e)+_0x4775f2(0x962)]||_0xba7dc7[_0x4775f2(0x314)]),').\x20'),_0xba7dc7[_0x4775f2(0x5cf)]),_0xb5b8d1));}if(_0x5ed60a[_0x4775f2(0x281)+'ls']&&!_0x5ed60a['globa'+'ls']['value'+'Wrapp'+'er']||_0x5ed60a[_0x4775f2(0x281)+'ls'][_0x4775f2(0xb9b)+_0x4775f2(0x268)+'er']==='undef'+'ined'){if(_0xba7dc7[_0x4775f2(0x1eb)](_0x4775f2(0xc71),_0xba7dc7[_0x4775f2(0x467)]))_0x5ed60a['warni'+_0x4775f2(0x78e)][_0x4775f2(0x3ad)](_0xba7dc7['CKaZS']);else{_0x4dedb4[_0x4775f2(0xa52)]=_0x8a468b,_0x18b266[_0x4775f2(0x581)]=[];if(!_0x56e209['cols'])return;var _0x15d64e=null;for(var _0x50ecbb=-0x76f*-0x3+-0xd44+-0x909;_0x50ecbb<_0x40633d[_0x4775f2(0x25f)+'h'];_0x50ecbb++)if(_0x48f5a9[_0x4775f2(0x9db)](_0x4053bc[_0x50ecbb]['id'],_0x3d0830))_0x15d64e=_0x22a06a[_0x50ecbb];_0x1f9cd7[_0x4775f2(0x4e1)][_0x4775f2(0x52b)+'onten'+'t']='Sakur'+_0x4775f2(0xd12)+_0x4775f2(0x8a3)+'z\x20—\x20'+(_0x15d64e&&_0x15d64e['label']||'?');for(var _0x3c85e9 in _0x27f17a['butto'+'ns']){if(_0x3c7010[_0x4775f2(0x603)+'ns'][_0x3c85e9][_0x4775f2(0x316)+_0x4775f2(0x97a)])_0x57d1ac['butto'+'ns'][_0x3c85e9][_0x4775f2(0x316)+_0x4775f2(0x9b2)]=_0x48f5a9['TSHHN'](_0x48f5a9[_0x4775f2(0x2b8)],_0x48f5a9[_0x4775f2(0x717)](_0x3c85e9,_0xde3a35)?_0x48f5a9[_0x4775f2(0x9e3)]:'');}var _0xcc42a9=[];try{_0xcc42a9=_0x2bccd7(_0x577cb3);}catch(_0x77593c){_0xcc42a9=[];}while(_0xb96584[_0x4775f2(0x987)]['first'+'Child'])_0x3e5498['cols']['remov'+_0x4775f2(0x991)+'d'](_0x564fe7[_0x4775f2(0x987)]['first'+_0x4775f2(0x7ac)]);for(var _0x540e3c=0xc9c+-0x444*-0x3+-0x1*0x1968;_0x48f5a9[_0x4775f2(0x579)](_0x540e3c,_0xcc42a9['lengt'+'h']);_0x540e3c++)_0x50799c[_0x4775f2(0x987)][_0x4775f2(0xd16)+_0x4775f2(0x9ca)+'d'](_0xcc42a9[_0x540e3c]);}}return _0x5ed60a[_0x4775f2(0x497)+'Total']>0x8e4*-0x4+0x48b*0x1+0x1f05&&_0x5ed60a[_0x4775f2(0x497)+_0x4775f2(0xc32)+'ed']===0x1fae+0x141f+-0x33cd&&_0x4148ae&&(_0x5ed60a['hooks'+_0x4775f2(0x8a8)+'ved']===-0xa7f*0x1+0x1a6d+-0xfee?_0x4775f2(0x602)!==_0xba7dc7['eQKFs']?_0x5ed60a['warni'+_0x4775f2(0x78e)][_0x4775f2(0x3ad)](_0xba7dc7['AOBAY'](_0xba7dc7['LzCAn'](_0xba7dc7['OkhjA'](_0xba7dc7['Nzprk']+_0x5ed60a[_0x4775f2(0x497)+'Total']+('\x20hook'+_0x4775f2(0xb3e)+_0x4775f2(0xa11)+_0x4775f2(0xa92)+'N\x20by\x20'+_0x4775f2(0x49d)+_0x4775f2(0x770)+'apply'+'\x20pass'+'\x20'),_0x4775f2(0xd29)+_0x4775f2(0x98a)+_0x4775f2(0xb96)+_0x4775f2(0x4a9)+'Assem'+'bly.i'+_0x4775f2(0x660)+'tiate'+_0x4775f2(0x78c)+_0x4775f2(0x9e2)+'hots\x20'+_0x4775f2(0x259)+_0x4775f2(0x6ea)+'ks.le'+_0x4775f2(0xc4c)+'\x20')+(_0x4775f2(0x37a)+_0x4775f2(0xd62)+_0x4775f2(0xb09)+'ered\x20'+_0x4775f2(0x79e)+_0x4775f2(0x5e4)+'re\x20ig'+_0x4775f2(0x74b)+'\x20for\x20'+_0x4775f2(0xba7)+_0x4775f2(0xb95)+_0x4775f2(0x335)+_0x4775f2(0xbef)+'.\x20')+('Regis'+_0x4775f2(0xd53)+'\x20'),_0x5ed60a[_0x4775f2(0x497)+'Regis'+'tered'+'AtArm']),'\x20hook'+'(s)\x20d'+_0x4775f2(0x7fb)+'\x20armi'+_0x4775f2(0x992)+_0x4775f2(0x77c)+_0x4775f2(0xd3c)+_0x4775f2(0xc2d)+'.')):(_0x1290df=_0x163869,_0x2d99e0=_0x497f45['c'][_0x31b464]):_0x5ed60a['warni'+_0x4775f2(0x78e)]['push'](_0xba7dc7['pkbjD'](_0xba7dc7['nsKyK']+_0x5ed60a[_0x4775f2(0x497)+_0x4775f2(0x8a8)+'ved']+_0xba7dc7['GYDrL'],_0x5ed60a[_0x4775f2(0x497)+_0x4775f2(0x473)])+(_0x4775f2(0x45b)+_0x4775f2(0xcd5)+_0x4775f2(0x1dd)+_0x4775f2(0x734)+_0x4775f2(0x7b8)+'\x20but\x20'+'appli'+_0x4775f2(0xa37)+'ne.\x20T'+_0x4775f2(0x26b)+_0x4775f2(0x93d)+_0x4775f2(0xb13))+('(this'+_0x4775f2(0x242)+'hodIn'+_0x4775f2(0x71d)+_0x4775f2(0xd7f)+_0x4775f2(0x9c1)+_0x4775f2(0x267)+'t\x20mat'+_0x4775f2(0x480)+_0x4775f2(0xd72)+_0x4775f2(0xc24)))),_0x5ed60a[_0x4775f2(0x497)+'Appli'+'ed']>-0x1c1+0x13a1+0xb0*-0x1a&&!_0x5ed60a[_0x4775f2(0x799)+_0x4775f2(0xbc0)][_0x4775f2(0x50f)+'ntrol'+_0x4775f2(0x413)]&&_0x5ed60a[_0x4775f2(0xb2c)+'ngs'][_0x4775f2(0x3ad)]('Hooks'+'\x20are\x20'+_0x4775f2(0xd88)+'ed\x20bu'+_0x4775f2(0x54c)+_0x4775f2(0x50f)+_0x4775f2(0xca4)+'ler\x20h'+_0x4775f2(0x9eb)+_0x4775f2(0x746)+'et.\x20'+_0xba7dc7[_0x4775f2(0x669)]),_0x5ed60a[_0x4775f2(0x799)+'ncesR'+'eplac'+'ed']['lengt'+'h']&&_0x5ed60a[_0x4775f2(0xb2c)+_0x4775f2(0x78e)]['push']('rebui'+_0x4775f2(0x5ca)+'nce\x20f'+_0x4775f2(0x3c8)+'captu'+'re\x20(r'+_0x4775f2(0x77a)+'n?):\x20'+_0x5ed60a[_0x4775f2(0x799)+_0x4775f2(0x6f3)+_0x4775f2(0xb3a)+'ed'][_0x4775f2(0xa45)](',\x20')),_0x5ed60a;}function _0x4a0503(_0x4dabc0){var _0x414b9c=_0x2fbbc2,_0x1d2c91=_0xba7dc7[_0x414b9c(0x7d1)][_0x414b9c(0xb3c)]('|'),_0x86dd21=-0x7cd+0x1c61+0xa4a*-0x2;while(!![]){switch(_0x1d2c91[_0x86dd21++]){case'0':console[_0x414b9c(0x656)](_0xba7dc7['XdNfp'](_0xba7dc7[_0x414b9c(0xd8a)](_0x2e43a2,'\x0a')+JSON[_0x414b9c(0x58c)+'gify'](_0x4dabc0,null,0x1*0x202f+0x3*0xa3+-0x2217),'\x0a')+_0x18aa39);continue;case'1':console['log'](_0xba7dc7['pNeUz'],_0xba7dc7[_0x414b9c(0xb80)](_0x414b9c(0xc0f)+':',_0x2660e4)+_0xba7dc7['wzvRW'],_0x4dabc0);continue;case'2':try{_0x5a7714(_0x4dabc0);}catch(_0x331a1b){}continue;case'3':_0x596e49(_0xba7dc7['jBxzG'],{'report':_0x4dabc0});continue;case'4':_0x552ce7=_0x4dabc0;continue;}break;}}function _0x3d43f3(){var _0x43984e=_0x2fbbc2;try{return _0xba7dc7[_0x43984e(0x861)](_0x3f8fae);}catch(_0x370cf6){return{'version':_0x1a991b,'when':new Date()[_0x43984e(0x8a6)+_0x43984e(0xd94)+'g'](),'elapsedMs':Date['now']()-_0x507012,'host':_0x1108e0,'uwmk':!!(window['Unity'+_0x43984e(0x80a)+_0x43984e(0xb1d)]&&window['Unity'+'WebMo'+_0x43984e(0xb1d)][_0x43984e(0x295)+'me']),'il2CppContext':![],'arm':_0x1fd036,'hooksTotal':_0x49480d['lengt'+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0xba7dc7['DPTzA'](String,_0x370cf6&&_0x370cf6['messa'+'ge']||_0x370cf6)};}}function _0x425cfd(){var _0x36f828=_0x2fbbc2,_0x2de4e8={'nZSSp':function(_0x16e211){return _0x16e211();}},_0x556081=-0x15*0xb7+-0x1*0x1321+-0x17c*-0x17;try{_0xba7dc7['ANgBy'](_0x5ba810);}catch(_0x595b0a){}try{if('BWmEA'!==_0xba7dc7['XhziM'])_0xba7dc7['KjbBx'](_0x3bf62f);else{_0x327d1a['textC'+_0x36f828(0x98d)+'t']=_0xba7dc7[_0x36f828(0x9e7)]('v',_0x3d5c25['versi'+'on']||'?');var _0xc2224a=_0x25fc2b,_0x529818=_0x1d97a6['versi'+'on']||'';_0x10d630['style']['color']=_0x529818===_0xc2224a?_0x481f66:_0x36f828(0xa91)+'74',_0x1e090f[_0x36f828(0x874)][_0x36f828(0x727)+_0x36f828(0xa77)+'r']=_0xba7dc7['CSFrQ'](_0x529818,_0xc2224a)?_0xba7dc7[_0x36f828(0x377)]:_0xba7dc7[_0x36f828(0x85d)];}}catch(_0x548cb7){}_0xba7dc7['pHkgE'](setInterval,_0x207e82,-0x1ef3+-0x1d4f+-0x3*-0x1542),_0x4a0503(_0xba7dc7[_0x36f828(0xa03)](_0x3d43f3)),function _0x14acde(){var _0x228090=_0x36f828;if(!_0x49480d[_0x228090(0x25f)+'h']){if('lnsmC'!==_0x228090(0x4d0))try{_0x469067();}catch(_0x269b3e){}else _0x2de4e8['nZSSp'](_0x287245);}_0x556081++,_0x4a0503(_0xba7dc7['QNfFW'](_0x3d43f3));if(!_0x49480d['lengt'+'h']&&_0xba7dc7[_0x228090(0x62a)](_0x556081,-0x1eb7+0x502*0x1+0x7*0x3d7))setTimeout(_0x14acde,-0x5f6+-0xb47+-0x1*-0x190d);else{if(!Object['keys'](_0x342350)[_0x228090(0x25f)+'h']&&_0x556081<0x660+-0x230c+0x1dd8)_0xba7dc7['gSrZm'](setTimeout,_0x14acde,-0xbed+-0x2050+-0x29*-0x145);else setTimeout(_0x14acde,0x5*0x4da+-0x1a8e+0x12a*0x6);}}();}if(document['body'])_0x425cfd();else document[_0x2fbbc2(0x5ea)+_0x2fbbc2(0x23e)+_0x2fbbc2(0xb8a)+'r'](_0x2fbbc2(0x598)+_0x2fbbc2(0x97e)+_0x2fbbc2(0xbec)+'d',_0x425cfd,{'once':!![]});if(document[_0x2fbbc2(0xaf7)])try{_0x167d4a();}catch(_0x2c6c97){}else document[_0x2fbbc2(0x5ea)+'entLi'+'stene'+'r'](_0xba7dc7['lwBXW'],function(){var _0x40e8a4=_0x2fbbc2;if(_0xba7dc7['enMeV']===_0x40e8a4(0x82c))return null;else try{_0x167d4a();}catch(_0x5bd83f){}},{'once':!![]});})()));
