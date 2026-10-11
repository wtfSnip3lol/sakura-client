// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.0.8
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

(function(_0x43a40a,_0x250400){var _0x4b4223=_0xc99a,_0x477376=_0x43a40a();while(!![]){try{var _0x229f5b=-parseInt(_0x4b4223(0x546))/(-0x209c+0x537+-0x491*-0x6)+-parseInt(_0x4b4223(0x1e6))/(-0x1dad+0x124d+-0x5e*-0x1f)+parseInt(_0x4b4223(0x5fc))/(-0x1f45+0x96*0x3+-0xec3*-0x2)*(parseInt(_0x4b4223(0x572))/(-0x2075+0x4d1*0x4+0xd35))+-parseInt(_0x4b4223(0x352))/(-0x3*-0x146+-0x1f2b+0xdaf*0x2)*(-parseInt(_0x4b4223(0x3dc))/(0x1b6e*0x1+-0x2*-0xf65+-0x3a32))+parseInt(_0x4b4223(0x248))/(0xa7*0x19+-0xd8+0xf70*-0x1)*(-parseInt(_0x4b4223(0x3c5))/(-0xe0f*0x1+-0x1345*-0x1+-0x52e))+-parseInt(_0x4b4223(0x1f8))/(0x9a9*0x1+0x840+-0x11e0)*(parseInt(_0x4b4223(0x5c1))/(0x216e+0x1*-0xe6a+-0x12fa*0x1))+-parseInt(_0x4b4223(0x602))/(0x83c*0x4+-0x570*0x3+-0x1095)*(-parseInt(_0x4b4223(0x2f6))/(0xe3b+-0x1ed0+-0x58b*-0x3));if(_0x229f5b===_0x250400)break;else _0x477376['push'](_0x477376['shift']());}catch(_0x3cfb6c){_0x477376['push'](_0x477376['shift']());}}}(_0x555b,-0x15f*0xd9f+-0x19b743+0xd*0x47d9e),((()=>{'use strict';var _0x5d38bd=_0xc99a,_0xd463b0={'OiiKC':function(_0x36cdeb,_0x58b34f){return _0x36cdeb!==_0x58b34f;},'HTFPy':'undef'+_0x5d38bd(0x308),'aJnPN':_0x5d38bd(0x5f3)+_0x5d38bd(0x40f)+'bindi'+'ng','EWauB':'vNxHC','PkxyD':function(_0x30eb35,_0x2e7b7f,_0x360423){return _0x30eb35(_0x2e7b7f,_0x360423);},'bORdn':'sakur'+_0x5d38bd(0x5dc)+'v2-cs'+'s','EwmZD':_0x5d38bd(0x207)+_0x5d38bd(0x1f3)+'-v2{a'+'ll:in'+'itial'+'}','CnlJj':_0x5d38bd(0x383),'xKZmf':_0x5d38bd(0x510)+_0x5d38bd(0x5dc)+'v2','GPwQE':function(_0xe72ce0){return _0xe72ce0();},'EzMmu':function(_0x4b856d,_0x2afaa0){return _0x4b856d+_0x2afaa0;},'FSxqQ':'metad'+'ata\x20r'+'eady\x20'+'·\x20','puGDJ':function(_0x52fe1b,_0x534d2d){return _0x52fe1b+_0x534d2d;},'YwVBU':function(_0x375ec2,_0x43be56){return _0x375ec2+_0x43be56;},'jjRbQ':function(_0xe762ca,_0xda24a8){return _0xe762ca||_0xda24a8;},'CDMMf':_0x5d38bd(0x475)+'c7','rrGaA':function(_0x889939,_0x529818){return _0x889939+_0x529818;},'SqaiH':'\x20\x201.\x20'+_0x5d38bd(0x4b9)+'rmonk'+'ey\x20is'+'\x20not\x20'+'injec'+_0x5d38bd(0x270)+'into\x20'+_0x5d38bd(0x4d9)+_0x5d38bd(0x3d4)+_0x5d38bd(0x3b5)+_0x5d38bd(0x40d)+_0x5d38bd(0x3c8),'KAOsk':'snaps'+_0x5d38bd(0x234),'vgSeW':_0x5d38bd(0x529),'tgTtj':function(_0x259022,_0x1a89dd){return _0x259022!==_0x1a89dd;},'MAbkV':_0x5d38bd(0x5e4)+'Insta'+_0x5d38bd(0x3f3)+'apper','JSunc':function(_0x1a434b,_0x1d55b0){return _0x1a434b===_0x1d55b0;},'CWINO':'#ffd4'+'8a','pllQa':_0x5d38bd(0x4e5)+_0x5d38bd(0x5ab),'YSDHu':function(_0x5338ec,_0x481865){return _0x5338ec+_0x481865;},'socew':function(_0x2630c5,_0x3844eb){return _0x2630c5+_0x3844eb;},'YGpaO':_0x5d38bd(0x4c5)+_0x5d38bd(0x3ef)+':#150'+'c1d;c'+_0x5d38bd(0x523)+_0x5d38bd(0x3ff)+_0x5d38bd(0x608)+'rder:'+_0x5d38bd(0x4ea)+_0x5d38bd(0x53e)+_0x5d38bd(0x3de)+'255,1'+_0x5d38bd(0x42d)+_0x5d38bd(0x4f5)+_0x5d38bd(0x295)+_0x5d38bd(0x298)+'dius:'+'14px;','RnXWQ':function(_0x15c312,_0x48ec2a){return _0x15c312+_0x48ec2a;},'UVQhG':function(_0x2b2e25,_0x4d5e9c){return _0x2b2e25+_0x4d5e9c;},'BCbDE':function(_0x72f4b5,_0x20f27b){return _0x72f4b5+_0x20f27b;},'oRGIF':_0x5d38bd(0x394)+_0x5d38bd(0x44a)+_0x5d38bd(0x38b)+_0x5d38bd(0x5e9)+_0x5d38bd(0x2f4),'Tllfg':_0x5d38bd(0x4b6)+_0x5d38bd(0x222)+_0x5d38bd(0x417)+_0x5d38bd(0x616)+_0x5d38bd(0x3e3)+'e=\x22co'+'lor:#'+'7a658'+_0x5d38bd(0x533)+_0x5d38bd(0x402)+_0x5d38bd(0x20c)+'x;pad'+_0x5d38bd(0x1e5)+_0x5d38bd(0x507)+'px;bo'+_0x5d38bd(0x357)+_0x5d38bd(0x4ea)+_0x5d38bd(0x53e)+'rgba('+_0x5d38bd(0x1fc)+_0x5d38bd(0x42d)+'7,.35'+');bor'+'der-r'+_0x5d38bd(0x2be)+_0x5d38bd(0x597)+_0x5d38bd(0x451)+'?</sp'+'an>','qIODF':';bord'+'er:0;'+_0x5d38bd(0x489)+':#2a0'+'f1b;b'+_0x5d38bd(0x1df)+_0x5d38bd(0x524)+'us:7p'+'x;pad'+_0x5d38bd(0x1e5)+'4px\x201'+_0x5d38bd(0x5c2)+_0x5d38bd(0x2ec)+_0x5d38bd(0x2c9)+':700;'+_0x5d38bd(0x3d0)+_0x5d38bd(0x437)+'nter;'+'\x22>Cop'+'y\x20JSO'+'N</bu'+_0x5d38bd(0x249),'gbgjv':_0x5d38bd(0x241)+_0x5d38bd(0x36e)+'=\x22pad'+_0x5d38bd(0x1e5)+_0x5d38bd(0x2b6)+_0x5d38bd(0x562)+_0x5d38bd(0x1df)+_0x5d38bd(0x263)+_0x5d38bd(0x2e3)+_0x5d38bd(0x3fc)+_0x5d38bd(0x28f)+_0x5d38bd(0x480)+_0x5d38bd(0x344)+_0x5d38bd(0x2c6)+'.18);'+_0x5d38bd(0x2cb)+_0x5d38bd(0x3c9)+_0x5d38bd(0x46d)+_0x5d38bd(0x230)+_0x5d38bd(0x302)+_0x5d38bd(0x448)+'ms:ce'+_0x5d38bd(0x5aa)+_0x5d38bd(0x405)+_0x5d38bd(0x453)+_0x5d38bd(0x3c6)+'>','HGFSq':'<butt'+_0x5d38bd(0x27c)+'=\x22sw2'+'-snap'+'\x22\x20sty'+'le=\x22b'+'ackgr'+'ound:'+_0x5d38bd(0x2e9)+'paren'+_0x5d38bd(0x385)+'der:1'+'px\x20so'+_0x5d38bd(0x47d)+'gba(2'+_0x5d38bd(0x274)+_0x5d38bd(0x53f)+_0x5d38bd(0x2c4)+_0x5d38bd(0x489)+':#f7e'+_0x5d38bd(0x356)+'order'+_0x5d38bd(0x524)+_0x5d38bd(0x57e)+_0x5d38bd(0x292)+_0x5d38bd(0x1e5)+'4px\x209'+'px;cu'+_0x5d38bd(0x1f5)+'point'+_0x5d38bd(0x330)+'Snaps'+_0x5d38bd(0x293)+_0x5d38bd(0x50c)+_0x5d38bd(0x252)+'n>','WCTIq':_0x5d38bd(0x4b6)+_0x5d38bd(0x222)+_0x5d38bd(0x31a)+_0x5d38bd(0x27e)+'style'+_0x5d38bd(0x303)+'or:#8'+_0x5d38bd(0x4bb)+_0x5d38bd(0x21f)+'twice'+_0x5d38bd(0x425)+'e\x20wal'+_0x5d38bd(0x257)+_0x5d38bd(0x4c8)+_0x5d38bd(0x463)+'g\x20/\x20j'+_0x5d38bd(0x464)+_0x5d38bd(0x51b)+_0x5d38bd(0x416)+_0x5d38bd(0x291)+_0x5d38bd(0x47e)+_0x5d38bd(0x2cf)+_0x5d38bd(0x5e6)+'/span'+'>','PtCdM':_0x5d38bd(0x554)+'build','nXHDj':'#sw2-'+'copy','HbIIz':_0x5d38bd(0x554)+_0x5d38bd(0x5a5),'SUygq':function(_0x5b6fd,_0x3ca14b){return _0x5b6fd+_0x3ca14b;},'XnmxI':function(_0x5098ad,_0x5590ae){return _0x5098ad/_0x5590ae;},'uAuNq':function(_0x3ea7f0,_0xcd3838){return _0x3ea7f0+_0xcd3838;},'PBPYD':function(_0x1805b8,_0x1de625){return _0x1805b8+_0x1de625;},'HxmMP':function(_0x3b5b7f,_0x135de1){return _0x3b5b7f+_0x135de1;},'CNcRy':_0x5d38bd(0x461)+'\x20\x20\x20\x20','NPiQV':'yes','aiEYs':'hooks'+_0x5d38bd(0x24a),'iNdQj':_0x5d38bd(0x237)+_0x5d38bd(0x52c)+'fire\x20'+_0x5d38bd(0x516)+_0x5d38bd(0x41e)+_0x5d38bd(0x3b6)+_0x5d38bd(0x5b4)+_0x5d38bd(0x553)+_0x5d38bd(0x5b5)+_0x5d38bd(0x493)+_0x5d38bd(0x321)+_0x5d38bd(0x34d)+'means','rpvpw':'no\x20Up'+_0x5d38bd(0x4c9)+_0x5d38bd(0x37c)+'et,\x20o'+_0x5d38bd(0x46f)+'\x20sign'+_0x5d38bd(0x606)+'\x20did\x20'+'not\x20m'+_0x5d38bd(0x362),'bCDjD':function(_0x1dce4f,_0x3a22d9){return _0x1dce4f+_0x3a22d9;},'bkTfX':'\x20@\x20','fkYIG':function(_0x436ae9,_0x35db58){return _0x436ae9+_0x35db58;},'pxopt':_0x5d38bd(0x412),'FnfDO':_0x5d38bd(0x229)+'set\x20\x20'+'\x20kind'+'\x20\x20\x20\x20\x20'+'\x20\x20\x20va'+_0x5d38bd(0x3eb)+'\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20'+_0x5d38bd(0x326),'TieWb':function(_0x43d68d,_0x5783e0){return _0x43d68d+_0x5783e0;},'HJeNo':function(_0x162b79,_0x373b38){return _0x162b79+_0x373b38;},'KyZRZ':'warni'+'ngs','VPXLV':function(_0x5a9edf,_0x346d06){return _0x5a9edf+_0x346d06;},'VsxRR':function(_0x5c2ee8,_0x4b220a){return _0x5c2ee8+_0x4b220a;},'Hdhuu':_0x5d38bd(0x1c9)+'ct(s)'+'\x20but\x20'+_0x5d38bd(0x518)+'0\x20fie'+'lds.\x20','dpITB':'Reaso'+'n:\x20','nKZRk':function(_0x12af0f,_0x9bac1e){return _0x12af0f!==_0x9bac1e;},'AFcfL':_0x5d38bd(0x48a)+'t','bbUlE':'%c[sa'+_0x5d38bd(0x56b)+_0x5d38bd(0x35b)+_0x5d38bd(0x568)+'ate\x20f'+_0x5d38bd(0x25e),'kHGJB':_0x5d38bd(0x31c),'yOkaR':function(_0x4656ca,_0x3cfe66){return _0x4656ca!==_0x3cfe66;},'ADMWR':function(_0x3ea5ff,_0x2a7bed){return _0x3ea5ff===_0x2a7bed;},'Vjpss':'cmd','wOiat':_0x5d38bd(0x2ab),'Fawhq':function(_0xda6341,_0x456efa,_0x218246){return _0xda6341(_0x456efa,_0x218246);},'wymnw':function(_0x4f205f,_0x58c6ce){return _0x4f205f>_0x58c6ce;},'vYuyL':function(_0x2cd9b6,_0x2cf5ea){return _0x2cd9b6===_0x2cf5ea;},'brAAL':_0x5d38bd(0x47a),'trFNF':function(_0x5ea315,_0x17b7b0){return _0x5ea315<_0x17b7b0;},'qvyTY':_0x5d38bd(0x510)+'a-ski'+_0x5d38bd(0x4d0)+'z','pzJGT':_0x5d38bd(0x278),'RttXj':function(_0x1059c8,_0x527f94){return _0x1059c8<_0x527f94;},'PuiFB':function(_0x3dbc41,_0x5e1c11){return _0x3dbc41|_0x5e1c11;},'CWEkr':function(_0x17e934,_0x17c3b2){return _0x17e934+_0x17c3b2;},'sqBhv':function(_0x23a63a,_0x15a122){return _0x23a63a+_0x15a122;},'wmXgB':function(_0xbac0bc,_0x1f94af){return _0xbac0bc+_0x1f94af;},'WyBRn':_0x5d38bd(0x30a)+',\x20Met'+_0x5d38bd(0x600)+_0x5d38bd(0x22f)+'->\x20vo'+'id\x20do'+'es\x20no'+_0x5d38bd(0x468)+'ch\x20th'+_0x5d38bd(0x3b9)+'ild.','CZhfh':function(_0x15550b,_0x10c6be){return _0x15550b(_0x10c6be);},'WTeew':function(_0x51190c,_0x4bc6e9){return _0x51190c!==_0x4bc6e9;},'HvSXs':_0x5d38bd(0x40a)+'ion','qSkYX':function(_0x3728a1,_0x33fa19){return _0x3728a1!==_0x33fa19;},'cLJbX':_0x5d38bd(0x591),'sTjAW':_0x5d38bd(0x54a)+'n._ru'+'ntime'+'._gam'+'e','ZDEUj':_0x5d38bd(0x236)+'me.re'+'solve'+_0x5d38bd(0x2d0)+')','xrPwr':'BohEM','GElVW':function(_0x56ce13,_0x17c2df){return _0x56ce13===_0x17c2df;},'fKtIb':_0x5d38bd(0x427),'HnrEl':function(_0x5a6b5f,_0x9dbf6c){return _0x5a6b5f!==_0x9dbf6c;},'foRsY':function(_0x581bdb,_0x39fe45){return _0x581bdb<_0x39fe45;},'gzTiM':_0x5d38bd(0x345),'bEubT':_0x5d38bd(0x4db)+'le','irwRU':function(_0x4da94e,_0x4360af){return _0x4da94e+_0x4360af;},'QWwFf':'\x20A\x20ho'+_0x5d38bd(0x5f0)+_0x5d38bd(0x37f)+'t\x20','eVIfB':'\x20(sou'+'rce:\x20','EZFOw':'Unity'+_0x5d38bd(0x49c)+_0x5d38bd(0x284)+_0x5d38bd(0x28d)+_0x5d38bd(0x3bd)+'ed\x20ye'+_0x5d38bd(0x37a)+_0x5d38bd(0x1cb)+'\x20','eubbB':_0x5d38bd(0x4b4),'PgECp':'Heap\x20'+_0x5d38bd(0x4bc)+_0x5d38bd(0x268)+'\x20bloc'+'ked\x20u'+'ntil\x20'+'a\x20gam'+'e\x20obj'+_0x5d38bd(0x31b)+'ith\x20M'+'odule'+_0x5d38bd(0x477)+_0x5d38bd(0x494)+'\x20reac'+_0x5d38bd(0x4dd)+'.','vqFNP':_0x5d38bd(0x429),'JuCKP':function(_0x200814,_0x56fe68){return _0x200814===_0x56fe68;},'weOyl':_0x5d38bd(0x3f4),'xyClo':function(_0x52fbd7){return _0x52fbd7();},'keGQJ':function(_0x4405b0){return _0x4405b0();},'GJlSz':_0x5d38bd(0x4c6),'MuffB':_0x5d38bd(0x54e),'pszFr':function(_0x100299,_0x419bc5){return _0x100299+_0x419bc5;},'frrvD':'u32','Rhrkh':'f32','VnrgM':function(_0x469269,_0x3e13a3){return _0x469269<_0x3e13a3;},'ySFxR':'no\x20HE'+_0x5d38bd(0x318)+_0x5d38bd(0x324)+_0x5d38bd(0x4a5)+_0x5d38bd(0x2d9)+'e\x20not'+'\x20reac'+_0x5d38bd(0x4dd)+_0x5d38bd(0x365)+_0x5d38bd(0x236)+_0x5d38bd(0x3cb)+'solve'+_0x5d38bd(0x2d0)+_0x5d38bd(0x1fb)+_0x5d38bd(0x594)+_0x5d38bd(0x273)+'\x20glob'+'al','YAmwR':function(_0x5205de,_0x2c6938){return _0x5205de+_0x2c6938;},'eKYzB':_0x5d38bd(0x610),'WHlhf':function(_0x10ff1f,_0xcfcb4e){return _0x10ff1f<_0xcfcb4e;},'wEBNt':function(_0x5b37c4,_0x5c4081){return _0x5b37c4(_0x5c4081);},'hPdjo':function(_0x34e6dd,_0x48b217){return _0x34e6dd&_0x48b217;},'JTFfg':'obfI','zbgcU':function(_0x4617e1,_0x489b6b,_0x90f76){return _0x4617e1(_0x489b6b,_0x90f76);},'QjDIX':function(_0x167e7e,_0x386b22){return _0x167e7e+_0x386b22;},'tTUav':_0x5d38bd(0x358),'qrwdq':function(_0x2aac0c,_0xfc6ea4){return _0x2aac0c===_0xfc6ea4;},'Kfnuh':function(_0x1e96f8,_0x2b52c4){return _0x1e96f8===_0x2b52c4;},'iWgwt':function(_0x9a0b6b,_0x48c412){return _0x9a0b6b^_0x48c412;},'cNsZm':function(_0x201d9e,_0x5c4c2c){return _0x201d9e&_0x5c4c2c;},'HuEXz':function(_0x3b0e6b,_0x459ef9){return _0x3b0e6b^_0x459ef9;},'ESJjv':_0x5d38bd(0x5c9)+_0x5d38bd(0x3b3)+_0x5d38bd(0x332)+'|5|2','Gildo':function(_0x11ec95,_0x341c3b){return _0x11ec95+_0x341c3b;},'PTDgu':function(_0x5946c0,_0x90c035){return _0x5946c0|_0x90c035;},'itGfs':function(_0x26a1ee,_0x5cbe14){return _0x26a1ee^_0x5cbe14;},'BtKxd':function(_0x3b4e65,_0x147026){return _0x3b4e65===_0x147026;},'MdnAQ':function(_0x1bbe41,_0x1d0509){return _0x1bbe41^_0x1d0509;},'KrpHi':function(_0x3fd876,_0x206c59,_0x224e47){return _0x3fd876(_0x206c59,_0x224e47);},'aLllK':function(_0x48c1a0,_0x2005e6){return _0x48c1a0+_0x2005e6;},'JpHDI':function(_0x461c41,_0x224c5a){return _0x461c41(_0x224c5a);},'JhyGZ':function(_0x47f246,_0x12ee85){return _0x47f246===_0x12ee85;},'bIxpj':'nxYag','RpDFK':_0x5d38bd(0x58d)+'e','DjaCJ':function(_0x33f746,_0x432e08){return _0x33f746+_0x432e08;},'eZbFW':function(_0x208e3d,_0x2fa45d){return _0x208e3d<_0x2fa45d;},'gBZHX':function(_0x33ed23,_0x2bbcf3){return _0x33ed23<=_0x2bbcf3;},'DFGpU':function(_0x2912d5,_0x5e2c46,_0x4adfd2,_0x5937d2){return _0x2912d5(_0x5e2c46,_0x4adfd2,_0x5937d2);},'weqaR':function(_0x10b44b,_0x55736d){return _0x10b44b+_0x55736d;},'RRUgy':_0x5d38bd(0x4fd)+'r','YMRar':'obfB','okTWb':function(_0x3e1f75,_0x5d3444){return _0x3e1f75!==_0x5d3444;},'otiRx':function(_0x2f91aa,_0x365e99){return _0x2f91aa===_0x365e99;},'RDCWK':function(_0x1fe135,_0x99b416){return _0x1fe135===_0x99b416;},'IkPNU':function(_0x36ce87,_0x127248){return _0x36ce87+_0x127248;},'BOJxQ':function(_0x318de2,_0x3cfb0){return _0x318de2+_0x3cfb0;},'iOKzN':_0x5d38bd(0x5a9),'CMlhD':function(_0x1912c5,_0x50eafd){return _0x1912c5===_0x50eafd;},'UgsiY':_0x5d38bd(0x3b2)+_0x5d38bd(0x57a)+'\x20','ZXUhd':function(_0x1aaa9d,_0xf76bd3){return _0x1aaa9d+_0xf76bd3;},'xkFnI':'UWMK\x20'+_0x5d38bd(0x58e)+_0x5d38bd(0x2b1),'lYliP':'\x20hook'+_0x5d38bd(0x24e)+_0x5d38bd(0x34a)+_0x5d38bd(0x267)+_0x5d38bd(0x543)+'\x20but\x20'+'appli'+'ed\x20no'+'ne.\x20T'+'he\x20si'+_0x5d38bd(0x4f9)+_0x5d38bd(0x490),'mAika':function(_0x3b7fdc,_0x58c184){return _0x3b7fdc+_0x58c184;},'kfqaU':function(_0x3a1cd1,_0x3af284){return _0x3a1cd1!==_0x3af284;},'lhPwx':'pwdkY','kNgXK':function(_0x11b5bc,_0x10193e){return _0x11b5bc===_0x10193e;},'PYJAJ':'NORHs','sQRIS':function(_0x525a66,_0x4648cb){return _0x525a66<=_0x4648cb;},'ypziS':function(_0x1c9696,_0xb37eb6){return _0x1c9696-_0xb37eb6;},'KmYCQ':function(_0x3104b5,_0x2d83a2){return _0x3104b5*_0x2d83a2;},'VWqKA':function(_0x458fd5,_0x4c2496){return _0x458fd5<_0x4c2496;},'eYswz':function(_0x5dd214,_0x58223c){return _0x5dd214===_0x58223c;},'XPUHN':function(_0x3808df,_0x40f3bf){return _0x3808df===_0x40f3bf;},'jLlkM':_0x5d38bd(0x3ac),'oCtiS':_0x5d38bd(0x5e4)+'Insta'+'nce','Zbocj':'jHUWM','NFOJl':function(_0xb76b46){return _0xb76b46();},'CsFIu':function(_0x8b31ea){return _0x8b31ea();},'EccVW':_0x5d38bd(0x3d1),'jGDIe':function(_0x18e1b4,_0x48a756){return _0x18e1b4+_0x48a756;},'vgryx':function(_0x3b729d,_0x398abe){return _0x3b729d+_0x398abe;},'jXnaN':function(_0x2ec86a){return _0x2ec86a();},'KSvWo':'NWetu','Cruii':'Oalov','BBokh':'naglS','VqcCN':_0x5d38bd(0x1c9)+_0x5d38bd(0x3b1)+'\x20','OabKF':_0x5d38bd(0x312)+'a8','qwhco':function(_0x14252a,_0x419d5a){return _0x14252a!==_0x419d5a;},'OEMpm':_0x5d38bd(0x348),'AjrPn':_0x5d38bd(0x359),'qQJjJ':_0x5d38bd(0x33f)+_0x5d38bd(0x613),'JDDMK':_0x5d38bd(0x5f2)+_0x5d38bd(0x3d8)+'hile\x20'+_0x5d38bd(0x328)+_0x5d38bd(0x251)+'lding'+'\x20it\x20i'+_0x5d38bd(0x58a)+'haned'+_0x5d38bd(0x5c6)+_0x5d38bd(0x267)+_0x5d38bd(0x301)+_0x5d38bd(0x227)+'r\x20','ZOfvL':_0x5d38bd(0x54a)+'n._ru'+_0x5d38bd(0x5c7)+_0x5d38bd(0x320)+'ot\x20wi'+_0x5d38bd(0x486)+'Unity'+_0x5d38bd(0x560)+_0x5d38bd(0x238)+_0x5d38bd(0x236)+_0x5d38bd(0x618)+_0x5d38bd(0x224)+_0x5d38bd(0x37d)+'\x20was\x20'+'built'+'\x20','ezcZj':_0x5d38bd(0x617),'yTbxz':function(_0x3af5e8,_0x7f6b89){return _0x3af5e8+_0x7f6b89;},'ppSPv':'\x20and\x20'+'game\x20'+_0x5d38bd(0x58e)+_0x5d38bd(0x389),'uQkHw':_0x5d38bd(0x41c)+_0x5d38bd(0x1d0)+_0x5d38bd(0x373)+'ence\x20'+'exist'+_0x5d38bd(0x55a)+_0x5d38bd(0x4ce)+_0x5d38bd(0x38e)+'not\x20r'+_0x5d38bd(0x346)+_0x5d38bd(0x46b)+'ow.','wOQfs':function(_0x5322c5,_0x29bc3e){return _0x5322c5+_0x29bc3e;},'fXJfC':_0x5d38bd(0x5c4),'nmrIm':function(_0x20fc82,_0x632a47){return _0x20fc82+_0x632a47;},'vwxPR':_0x5d38bd(0x2db)+'s\x20wer'+'e\x20eve'+_0x5d38bd(0x4e8)+'N\x20by\x20'+'UWMK.'+_0x5d38bd(0x57f)+'apply'+'\x20pass'+'\x20','xnVCN':_0x5d38bd(0x2db)+_0x5d38bd(0x607)+_0x5d38bd(0x583)+_0x5d38bd(0x395)+'ng\x20at'+'\x20docu'+'ment-'+'start'+'.','ccFpx':function(_0x233ade,_0x40bee8){return _0x233ade+_0x40bee8;},'dbGKb':function(_0x445ce4,_0x4621e9){return _0x445ce4+_0x4621e9;},'Qotbp':function(_0x4c8451,_0x4903f8){return _0x4c8451+_0x4903f8;},'AADil':function(_0x226e79,_0x523668){return _0x226e79+_0x523668;},'zmDFQ':function(_0x2051a6,_0xceae31){return _0x2051a6<_0xceae31;},'cCzIp':function(_0x14ec28,_0xa6c38e,_0x3c5074){return _0x14ec28(_0xa6c38e,_0x3c5074);},'sRvFo':function(_0x15b03d,_0xd805c6,_0x397521){return _0x15b03d(_0xd805c6,_0x397521);},'AOkEB':_0x5d38bd(0x5a3)+'b1','RSmEg':_0x5d38bd(0x4f1),'lhlpt':_0x5d38bd(0x489)+':','jRtMu':_0x5d38bd(0x590)+'ge','Vfvrj':'%c[sa'+_0x5d38bd(0x56b)+_0x5d38bd(0x2fa)+_0x5d38bd(0x612)+_0x5d38bd(0x2c0)+_0x5d38bd(0x40e),'TYVpo':function(_0x35e259,_0x479578,_0x3040f0){return _0x35e259(_0x479578,_0x3040f0);},'GQATf':_0x5d38bd(0x3a7),'ZLuXs':'sakur'+_0x5d38bd(0x2f0),'bAjXm':'Healt'+_0x5d38bd(0x4b1)+'pt','TJdwa':'GG_Ga'+'meMan'+_0x5d38bd(0x2e1),'lltHS':_0x5d38bd(0x401)+_0x5d38bd(0x5c0)+_0x5d38bd(0x420)+'cal.d'+'ll','yURlO':'cInpu'+_0x5d38bd(0x53b),'vdsPI':_0x5d38bd(0x3ce),'dsQNF':_0x5d38bd(0x307)+'wn'};var _0x3ae824=location['hostn'+_0x5d38bd(0x28a)]||'',_0x358c76=/(^|\.)www\.crazygames\.com$/['test'](_0x3ae824),_0x13b524=/(^|\.)games\.crazygames\.com$/[_0x5d38bd(0x60e)](_0x3ae824),_0x3a68b1=/(^|\.)crazygames\.com$/[_0x5d38bd(0x60e)](_0x3ae824)&&!_0x358c76&&!_0x13b524,_0x41824f=_0x358c76?_0x5d38bd(0x605)+'l':_0x13b524?'wrapp'+'er':'playe'+'r';if(!_0x358c76&&!_0x13b524&&!_0x3a68b1)return;var _0x159097=_0xd463b0['AOkEB'],_0x54bb91='__sak'+_0x5d38bd(0x262)+'w_v2',_0x1cbba4='===SA'+'KURA-'+'SKILL'+_0x5d38bd(0x1fd)+_0x5d38bd(0x580)+'===',_0x281245='===SA'+_0x5d38bd(0x3d2)+'SKILL'+_0x5d38bd(0x1fd)+'END=='+'=',_0x3813b2=_0xd463b0[_0x5d38bd(0x5b8)];if(_0x13b524){window['addEv'+_0x5d38bd(0x211)+_0x5d38bd(0x3af)+'r'](_0x5d38bd(0x590)+'ge',function(_0x560134){var _0x2e6723=_0x5d38bd,_0x1e4dba=_0x560134['data'];if(!_0x1e4dba||_0x1e4dba['__sak'+'ura']!==_0x54bb91)return;try{if(window[_0x2e6723(0x203)+'t']&&window[_0x2e6723(0x203)+'t']!==window)window[_0x2e6723(0x203)+'t'][_0x2e6723(0x525)+'essag'+'e'](_0x1e4dba,'*');if(window['top']&&_0xd463b0[_0x2e6723(0x5e0)](window[_0x2e6723(0x2df)],window))window[_0x2e6723(0x2df)][_0x2e6723(0x525)+_0x2e6723(0x5ea)+'e'](_0x1e4dba,'*');}catch(_0x427650){}}),console[_0x5d38bd(0x520)](_0x5d38bd(0x446)+_0x5d38bd(0x56b)+'\x20SW-W'+_0x5d38bd(0x3df)+_0x5d38bd(0x406)+_0x5d38bd(0x396)+'relay'+_0x5d38bd(0x52a)+')',_0xd463b0[_0x5d38bd(0x1e9)]+_0x159097);return;}if(_0x358c76){console[_0x5d38bd(0x520)]('%c[sa'+'kura]'+_0x5d38bd(0x209)+'AL\x20AC'+_0x5d38bd(0x5b7),'color'+':'+_0x159097+(_0x5d38bd(0x367)+'-weig'+'ht:70'+'0'),{'host':_0x3ae824});var _0x587be1={'set':function(){},'command':function(){}};function _0x50ba6c(_0x2c5c31,_0x20ed00){var _0x12a2ac=_0x5d38bd,_0x3e6892={'__sakura':_0x54bb91,'kind':'cmd','cmd':_0x2c5c31,'arg':_0x20ed00};try{if(_0xd463b0['OiiKC'](_0xd463b0['EWauB'],_0x12a2ac(0x575))){var _0x2b7899=new BroadcastChannel('sakur'+_0x12a2ac(0x2f0));_0x2b7899[_0x12a2ac(0x525)+_0x12a2ac(0x5ea)+'e'](_0x3e6892),_0xd463b0['PkxyD'](setTimeout,function(){try{_0x2b7899['close']();}catch(_0x29a759){}},0x5f7+0x35*-0x8b+0x17ca);}else{if(_0xd463b0['OiiKC'](typeof _0x86b381,_0xd463b0['HTFPy'])&&_0x51e2d9)return _0x30d93e[_0x12a2ac(0x256)+'e']=_0xd463b0[_0x12a2ac(0x415)],_0x4d6b92;}}catch(_0x24adae){}}function _0x46ba2d(){var _0x1e6d87=_0x5d38bd,_0x26d9e5=document[_0x1e6d87(0x30d)+_0x1e6d87(0x4a7)+'ById'](_0x1e6d87(0x510)+_0x1e6d87(0x5dc)+'v2');if(_0x26d9e5)return _0x26d9e5;if(!document[_0x1e6d87(0x3c0)]||!document[_0x1e6d87(0x3c0)]['appen'+_0x1e6d87(0x4d4)+'d'])return null;try{if(!document['getEl'+'ement'+_0x1e6d87(0x377)](_0xd463b0[_0x1e6d87(0x3aa)])){var _0x293c68=document[_0x1e6d87(0x1ed)+'eElem'+_0x1e6d87(0x521)](_0x1e6d87(0x36e));_0x293c68['id']='sakur'+'a-sw-'+'v2-cs'+'s',_0x293c68[_0x1e6d87(0x517)+_0x1e6d87(0x1da)+'t']=_0xd463b0[_0x1e6d87(0x4f8)],(document['head']||document['docum'+_0x1e6d87(0x5ed)+'ement'])[_0x1e6d87(0x35d)+_0x1e6d87(0x4d4)+'d'](_0x293c68);}return _0x26d9e5=document['creat'+'eElem'+_0x1e6d87(0x521)](_0xd463b0[_0x1e6d87(0x3e5)]),_0x26d9e5['id']=_0xd463b0['xKZmf'],document[_0x1e6d87(0x3c0)][_0x1e6d87(0x35d)+'dChil'+'d'](_0x26d9e5),_0x26d9e5;}catch(_0x4cf86c){return null;}}function _0x32958d(){var _0x3ed3d1=_0x5d38bd,_0x54934b=_0xd463b0['GPwQE'](_0x46ba2d);if(!_0x54934b)return _0x587be1;if(_0x54934b[_0x3ed3d1(0x447)+'et'][_0x3ed3d1(0x2a9)])return _0x54934b[_0x3ed3d1(0x2a9)];try{return _0x1eee9e(_0x54934b);}catch(_0x17992c){return _0x54934b[_0x3ed3d1(0x447)+'et'][_0x3ed3d1(0x2a9)]='1',_0x54934b[_0x3ed3d1(0x2a9)]=_0x587be1,console['warn'](_0x3ed3d1(0x446)+_0x3ed3d1(0x56b)+'\x20pane'+'l\x20dis'+_0x3ed3d1(0x2bc),_0xd463b0['EzMmu']('color'+':',_0x159097),_0x17992c),_0x587be1;}}function _0x1eee9e(_0x921750){var _0x253883=_0x5d38bd,_0x5119ca={'hmohc':_0xd463b0[_0x253883(0x3e7)],'VNKoP':_0xd463b0[_0x253883(0x492)],'jFkDA':function(_0x50983b,_0x35a2fc){return _0xd463b0['tgTtj'](_0x50983b,_0x35a2fc);},'qItuG':_0x253883(0x5e4)+_0x253883(0x2a6),'ZXCHj':_0xd463b0[_0x253883(0x4ae)],'jPeZy':function(_0x506995,_0xa15927){return _0x506995===_0xa15927;},'vWbPt':_0xd463b0['HTFPy'],'RHOsn':function(_0x332282){return _0x332282();},'APHBP':function(_0x40d1bf,_0x498283){return _0x40d1bf+_0x498283;},'jiYWZ':_0x253883(0x319),'Whsnm':'GFthe','UAsYI':function(_0x27b200,_0x2df6d7){return _0xd463b0['JSunc'](_0x27b200,_0x2df6d7);},'iSmCe':'#ff6e'+'74','zvQVb':function(_0x272e0e,_0x32db25){return _0x272e0e!==_0x32db25;},'VEXDl':_0x253883(0x312)+'a8','VzrAD':_0xd463b0['CWINO'],'nkXti':function(_0x4d67b5,_0x5c32e1){var _0x45d69f=_0x253883;return _0xd463b0[_0x45d69f(0x1ec)](_0x4d67b5,_0x5c32e1);},'PCWfg':_0xd463b0['pllQa'],'dTRsl':function(_0x4275db,_0x1f63a9){return _0x4275db+_0x1f63a9;},'tCnbP':function(_0x3f634f,_0x46fb26){var _0x58315b=_0x253883;return _0xd463b0[_0x58315b(0x36c)](_0x3f634f,_0x46fb26);}};_0x921750['style']['cssTe'+'xt']=_0xd463b0['YwVBU'](_0xd463b0[_0x253883(0x35e)](_0x253883(0x582)+'ion:f'+_0x253883(0x60f)+'left:'+_0x253883(0x1ca)+'top:1'+'2px;z'+'-inde'+'x:214'+_0x253883(0x1ea)+'00;wi'+'dth:m'+'in(52'+_0x253883(0x388)+_0x253883(0x25c)+_0x253883(0x3e9)+_0x253883(0x2c9)+_0x253883(0x4f2)+';',_0xd463b0['YGpaO']),_0x253883(0x42e)+_0x253883(0x59a)+_0x253883(0x4dc)+_0x253883(0x2b0)+_0x253883(0x53a)+_0x253883(0x27a)+'solas'+_0x253883(0x435)+_0x253883(0x399)+_0x253883(0x433)+'shado'+_0x253883(0x201)+_0x253883(0x5d2)+'0px\x20-'+_0x253883(0x43f)+'#000;')+(_0x253883(0x2cb)+_0x253883(0x3c9)+_0x253883(0x398)+'ex-di'+_0x253883(0x3f7)+_0x253883(0x47f)+_0x253883(0x4df)+_0x253883(0x265)+'low:h'+_0x253883(0x588)+';'),_0x921750[_0x253883(0x329)+_0x253883(0x555)]=_0xd463b0[_0x253883(0x35e)](_0xd463b0['socew'](_0xd463b0['RnXWQ'](_0xd463b0['YwVBU'](_0xd463b0[_0x253883(0x381)](_0xd463b0[_0x253883(0x620)](_0xd463b0[_0x253883(0x36c)](_0xd463b0[_0x253883(0x620)]('<div\x20'+_0x253883(0x36e)+'=\x22pad'+_0x253883(0x1e5)+_0x253883(0x1d8)+_0x253883(0x562)+'order'+_0x253883(0x263)+'om:1p'+_0x253883(0x3fc)+_0x253883(0x28f)+'ba(25'+_0x253883(0x344)+',177,'+_0x253883(0x280)+_0x253883(0x500)+'y:fle'+_0x253883(0x5a1)+':8px;'+_0x253883(0x400)+'-item'+_0x253883(0x33d)+_0x253883(0x55e)+'lex:0'+_0x253883(0x366)+_0x253883(0x414)+('<b\x20st'+_0x253883(0x239)+_0x253883(0x489)+':'),_0x159097)+_0xd463b0['oRGIF'],_0xd463b0['Tllfg'])+(_0x253883(0x4b6)+'\x20id=\x22'+_0x253883(0x57d)+_0x253883(0x49d)+'\x22\x20sty'+_0x253883(0x2a7)+'olor:'+_0x253883(0x44e)+_0x253883(0x585)+_0x253883(0x57b)+_0x253883(0x2dd)+'\x20game'+'\x20fram'+_0x253883(0x3d9)+'pan>'),'<butt'+'on\x20id'+_0x253883(0x369)+_0x253883(0x25f)+'\x22\x20sty'+'le=\x22d'+_0x253883(0x500)+_0x253883(0x43d)+_0x253883(0x44f)+_0x253883(0x2c8)+_0x253883(0x327)+_0x253883(0x5af)+'ackgr'+'ound:')+_0x159097,_0xd463b0['qIODF'])+(_0x253883(0x4ba)+'on\x20id'+_0x253883(0x369)+'-x\x22\x20s'+'tyle='+'\x22back'+_0x253883(0x208)+_0x253883(0x1f2)+_0x253883(0x26b)+_0x253883(0x4a6)+_0x253883(0x1df)+':1px\x20'+'solid'+'\x20rgba'+'(255,'+_0x253883(0x537)+_0x253883(0x354)+');col'+_0x253883(0x370)+'7eef5'+';bord'+_0x253883(0x298)+'dius:'+'7px;p'+_0x253883(0x52b)+'g:4px'+'\x208px;'+'curso'+_0x253883(0x437)+'nter;'+'\x22>x</'+'butto'+'n>')+(_0x253883(0x419)+'>'),_0xd463b0[_0x253883(0x4a8)])+_0xd463b0['HGFSq']+_0xd463b0[_0x253883(0x4cf)],_0x253883(0x419)+'>'),'<pre\x20'+'id=\x22s'+'w2-ou'+'t\x22\x20st'+'yle=\x22'+_0x253883(0x4aa)+'n:0;p'+_0x253883(0x52b)+_0x253883(0x25d)+_0x253883(0x38f)+'x;ove'+_0x253883(0x558)+_0x253883(0x3cc)+';flex'+_0x253883(0x5fa)+_0x253883(0x316)+_0x253883(0x61b)+_0x253883(0x49b)+_0x253883(0x3e1)+_0x253883(0x4c0)+_0x253883(0x445)+_0x253883(0x3ae)+_0x253883(0x59c)+_0x253883(0x337)+_0x253883(0x4d3)+_0x253883(0x1cf)+_0x253883(0x36f)+';'),_0x253883(0x3e9)+'eight'+_0x253883(0x52e)+_0x253883(0x1d4)+'\x20repo'+_0x253883(0x1ff)+_0x253883(0x4b3)+_0x253883(0x304)+'anel\x20'+_0x253883(0x49e)+_0x253883(0x566)+_0x253883(0x474)+'when\x20'+'the\x20g'+_0x253883(0x611)+_0x253883(0x3fa)+_0x253883(0x469)+_0x253883(0x576)+_0x253883(0x5e7)+'ole\x20n'+'eeded'+'.\x0a\x0aIf'+_0x253883(0x61d)+_0x253883(0x46a)+'empty'+',\x20Tam'+_0x253883(0x5b9)+'nkey\x20'+'is\x20no'+'t\x20inj'+_0x253883(0x2f5)+_0x253883(0x34b)+'o\x20the'+_0x253883(0x487)+_0x253883(0x5ad)+_0x253883(0x418)+'ame\x20f'+_0x253883(0x54c)+_0x253883(0x614)+'>');var _0x26cfd3=_0x921750['query'+_0x253883(0x202)+'tor'](_0x253883(0x554)+'statu'+'s'),_0x1808c0=_0x921750[_0x253883(0x20a)+'Selec'+_0x253883(0x514)](_0xd463b0[_0x253883(0x3ca)]),_0x224341=_0x921750['query'+_0x253883(0x202)+'tor'](_0x253883(0x554)+'out'),_0x452039=_0x921750['query'+_0x253883(0x202)+_0x253883(0x514)](_0xd463b0['nXHDj']),_0x80713d=_0x921750[_0x253883(0x20a)+'Selec'+'tor'](_0x253883(0x554)+'x'),_0x218bda=_0x921750[_0x253883(0x20a)+_0x253883(0x202)+_0x253883(0x514)](_0xd463b0[_0x253883(0x2ac)]),_0x34672a=_0x921750['query'+'Selec'+'tor'](_0x253883(0x554)+_0x253883(0x403)),_0x178170=null;if(_0x80713d)_0x80713d['oncli'+'ck']=function(){try{_0x921750['remov'+'e']();}catch(_0x32fcf5){}};if(_0x218bda)_0x218bda[_0x253883(0x276)+'ck']=function(){_0x50ba6c(_0x5119ca['hmohc']);};if(_0x452039)_0x452039['oncli'+'ck']=function(){var _0x49d2e4=_0x253883,_0x53a95c={'GHMsK':function(_0x41c2f5){return _0x41c2f5();},'Mchyx':function(_0x551ffa,_0x4b28e0){return _0x551ffa+_0x4b28e0;},'xQKtp':_0xd463b0['FSxqQ'],'NycDE':'#ffd4'+'8a'},_0x2c84e8=_0xd463b0[_0x49d2e4(0x1ec)](_0xd463b0[_0x49d2e4(0x467)](_0xd463b0[_0x49d2e4(0x1ec)](_0x1cbba4+'\x0a',_0x178170?JSON[_0x49d2e4(0x212)+_0x49d2e4(0x4d7)](_0x178170,null,0xf0d+-0x9*0x35+-0xd2f):''),'\x0a'),_0x281245),_0x4aa8f9=function(){var _0x4f5d00=_0x49d2e4;if(_0x452039)_0x452039[_0x4f5d00(0x517)+_0x4f5d00(0x1da)+'t']=_0x4f5d00(0x261)+'d';};if(navigator[_0x49d2e4(0x3bf)+_0x49d2e4(0x1f6)]&&navigator[_0x49d2e4(0x3bf)+_0x49d2e4(0x1f6)][_0x49d2e4(0x39d)+'Text'])navigator[_0x49d2e4(0x3bf)+'oard']['write'+'Text'](_0x2c84e8)[_0x49d2e4(0x2c5)](_0x4aa8f9,function(){var _0x31fde7=_0x49d2e4;_0x53a95c[_0x31fde7(0x3cf)](_0x5adaaa);});else _0xd463b0['GPwQE'](_0x5adaaa);function _0x5adaaa(){var _0x2c35f8=_0x49d2e4;if(_0x5119ca[_0x2c35f8(0x539)]===_0x2c35f8(0x2a5))_0x2b077d=_0x53a95c[_0x2c35f8(0x279)](_0x53a95c[_0x2c35f8(0x4f0)]+_0xfb20f4,'s'),_0x52b056=_0x53a95c[_0x2c35f8(0x615)];else{var _0x3b0f90=document[_0x2c35f8(0x1ed)+'eElem'+_0x2c35f8(0x521)](_0x2c35f8(0x27b)+_0x2c35f8(0x54b));_0x3b0f90[_0x2c35f8(0x471)]=_0x2c84e8;if(!document[_0x2c35f8(0x3c0)])return;document['body'][_0x2c35f8(0x35d)+'dChil'+'d'](_0x3b0f90),_0x3b0f90[_0x2c35f8(0x294)+'t']();try{if(_0x5119ca['jFkDA'](_0x2c35f8(0x41a),'ZnADI'))document[_0x2c35f8(0x538)+_0x2c35f8(0x215)+'d'](_0x2c35f8(0x595)),_0x4aa8f9();else return new _0x6f47b2(_0x5a6222[_0x2c35f8(0x297)+'r'],_0x3b9d93[_0x2c35f8(0x2ce)+'ffset'],_0x5ab64c['byteL'+'ength']);}catch(_0x50028d){}_0x3b0f90[_0x2c35f8(0x2d4)+'e']();}}};setTimeout(function(){var _0x3269d6=_0x253883;if('kbCCY'==='egPYn'){var _0x134313=[_0x3269d6(0x5e4)+_0x3269d6(0x584)+_0x3269d6(0x5cf),_0x5119ca[_0x3269d6(0x495)],'game',_0x5119ca[_0x3269d6(0x21c)]],_0x1fef75={};for(var _0x410934=-0x41*-0x9+-0x69e+-0x1*-0x455;_0x410934<_0x134313[_0x3269d6(0x3a0)+'h'];_0x410934++){var _0x2f8a66=_0x134313[_0x410934],_0x149305=typeof _0x4eede3[_0x2f8a66];_0x1fef75[_0x2f8a66]=_0x5119ca['jPeZy'](_0x149305,'undef'+_0x3269d6(0x308))?_0x5119ca[_0x3269d6(0x61f)]:_0x149305;}var _0x412d8d=_0x5119ca[_0x3269d6(0x2ca)](_0x4d7ed7);_0x1fef75['gameS'+_0x3269d6(0x29d)]=_0x384a73['sourc'+'e'];try{_0x1fef75[_0x3269d6(0x48e)+_0x3269d6(0x2ef)]=!!(_0x412d8d&&_0x412d8d[_0x3269d6(0x4b5)+'e']),_0x1fef75[_0x3269d6(0x609)+'8']=!!(_0x412d8d&&_0x412d8d[_0x3269d6(0x4b5)+'e']&&_0x412d8d[_0x3269d6(0x4b5)+'e'][_0x3269d6(0x4b0)+'8']),_0x1fef75[_0x3269d6(0x456)+_0x3269d6(0x5db)]=_0x1fef75['heapU'+'8']?_0x412d8d['Modul'+'e']['HEAPU'+'8'][_0x3269d6(0x3a0)+'h']:0x2035*-0x1+-0x41*0x31+0x2ca6;}catch(_0x51d74b){_0x1fef75['hasMo'+_0x3269d6(0x2ef)]=![],_0x1fef75[_0x3269d6(0x609)+'8']=![],_0x1fef75[_0x3269d6(0x456)+'ytes']=0x1829+-0x1*-0xb56+-0x2bb*0xd;}return _0x1fef75['value'+'Wrapp'+'er']=typeof _0x192ec3,_0x1fef75;}else{if(_0x178170)return;if(_0xd463b0[_0x3269d6(0x4e9)](!_0x26cfd3,!_0x224341))return;_0x26cfd3[_0x3269d6(0x517)+'onten'+'t']='no\x20re'+_0x3269d6(0x55d)+_0x3269d6(0x231)+_0x3269d6(0x3e8)+_0x3269d6(0x569)+_0x3269d6(0x5b1)+_0x3269d6(0x5bf)+_0x3269d6(0x4c7)+'?',_0x26cfd3[_0x3269d6(0x36e)][_0x3269d6(0x489)]=_0xd463b0[_0x3269d6(0x526)],_0x224341[_0x3269d6(0x517)+_0x3269d6(0x1da)+'t']=_0xd463b0[_0x3269d6(0x501)](_0x3269d6(0x503)+_0x3269d6(0x611)+_0x3269d6(0x3fa)+'never'+'\x20post'+'ed\x20a\x20'+_0x3269d6(0x2d2)+_0x3269d6(0x27f)+_0x3269d6(0x51a)+'\x0a'+(_0x3269d6(0x59b)+_0x3269d6(0x4b8)+_0x3269d6(0x422)+'es\x20th'+'e\x20use'+_0x3269d6(0x3d6)+_0x3269d6(0x589)+'\x20inst'+_0x3269d6(0x2da)+_0x3269d6(0x23d)+_0x3269d6(0x5f6)+'ng\x20on'+_0x3269d6(0x1d0)+_0x3269d6(0x605)+_0x3269d6(0x1e0))+(_0x3269d6(0x545)+'e\x20rem'+'ainin'+'g\x20sus'+_0x3269d6(0x481)+_0x3269d6(0x48c)+'\x0a\x0a'),_0xd463b0[_0x3269d6(0x315)])+(_0x3269d6(0x2b4)+'The\x20p'+_0x3269d6(0x226)+_0x3269d6(0x408)+_0x3269d6(0x28c)+'n\x20rel'+_0x3269d6(0x5b2)+_0x3269d6(0x59e)+_0x3269d6(0x45e)+_0x3269d6(0x411)+'ng.\x0a')+(_0x3269d6(0x282)+_0x3269d6(0x5ec)+_0x3269d6(0x510)+_0x3269d6(0x596)+'llwar'+_0x3269d6(0x466)+_0x3269d6(0x24c)+_0x3269d6(0x570)+'he\x20ol'+_0x3269d6(0x306)+_0x3269d6(0x530)+'ipt\x20a'+'re\x0a')+(_0x3269d6(0x29e)+_0x3269d6(0x289)+_0x3269d6(0x3c4)+'—\x20two'+'\x20copi'+'es\x20of'+'\x20UWMK'+'\x20both'+_0x3269d6(0x51e)+'h\x20Web'+'Assem'+_0x3269d6(0x532)+_0x3269d6(0x2b2)+_0x3269d6(0x5cb)+_0x3269d6(0x3f9))+('Reloa'+'d\x20the'+_0x3269d6(0x1d1)+_0x3269d6(0x1f4)+'\x20once'+'\x20and\x20'+_0x3269d6(0x210)+'\x20this'+'\x20pane'+'l\x20aga'+_0x3269d6(0x29a));}},-0x9f85+-0x1bef3+-0x1a46c*-0x2);var _0x4c1941={'set':function(_0x4a3064){var _0x52aaeb=_0x253883;_0x178170=_0x4a3064;if(_0x452039)_0x452039['style'][_0x52aaeb(0x2cb)+'ay']='';if(_0x1808c0){if(_0x5119ca[_0x52aaeb(0x3c7)]==='GFthe'){_0x1808c0['textC'+_0x52aaeb(0x1da)+'t']=_0x5119ca[_0x52aaeb(0x5a0)]('v',_0x4a3064[_0x52aaeb(0x2f9)+'on']||'?');var _0x50dc69=_0x3813b2,_0x5e3feb=_0x4a3064[_0x52aaeb(0x2f9)+'on']||'';_0x1808c0[_0x52aaeb(0x36e)][_0x52aaeb(0x489)]=_0x5119ca[_0x52aaeb(0x48f)](_0x5e3feb,_0x50dc69)?_0x159097:_0x52aaeb(0x45f)+'74',_0x1808c0['style']['borde'+_0x52aaeb(0x45a)+'r']=_0x5119ca['UAsYI'](_0x5e3feb,_0x50dc69)?_0x52aaeb(0x3de)+'255,1'+_0x52aaeb(0x42d)+_0x52aaeb(0x290)+')':_0x5119ca[_0x52aaeb(0x5bd)];}else return null;}var _0x4a389f=_0x4a3064[_0x52aaeb(0x289)+_0x52aaeb(0x4e7)]&&_0x4a3064[_0x52aaeb(0x289)+_0x52aaeb(0x4e7)][_0x52aaeb(0x5e3)+_0x52aaeb(0x338)+'ler'],_0x2dbd6a=Math[_0x52aaeb(0x3ef)]((_0x4a3064[_0x52aaeb(0x5a4)+_0x52aaeb(0x2d7)]||-0xf1*0xf+-0x1d91+0x2bb0)/(0xe14+0x9b+-0xac7));if(_0x26cfd3){var _0x3fcc0e,_0x49a6f4;if(_0x4a389f&&_0x4a3064[_0x52aaeb(0x3ab)+'y']&&_0x4a3064['surve'+'y']['FPSco'+'ntrol'+_0x52aaeb(0x2d3)]){if(_0x5119ca[_0x52aaeb(0x5c8)](_0x52aaeb(0x436),_0x52aaeb(0x436))){var _0x5ae150=_0x16f062[_0x53b3e0];for(var _0x4e4961=-0x2*-0xa84+-0x1798+-0x4*-0xa4;_0x4e4961<_0x5ae150['lengt'+'h'];_0x4e4961++){_0x6212e7[_0x5119ca[_0x52aaeb(0x5a0)](_0x40210b+_0x5119ca[_0x52aaeb(0x3e6)],_0x5ae150[_0x4e4961]['o'][_0x52aaeb(0x599)+_0x52aaeb(0x2e7)](0x17d6+0x2421*-0x1+0xc5b))]=_0x5ae150[_0x4e4961]['v'];}}else _0x3fcc0e='LIVE\x20'+'·\x20'+Object['keys'](_0x4a3064[_0x52aaeb(0x289)+_0x52aaeb(0x4e7)])['lengt'+'h']+(_0x52aaeb(0x1c9)+_0x52aaeb(0x3b1)+'\x20')+_0x2dbd6a+'s',_0x49a6f4=_0x5119ca[_0x52aaeb(0x557)];}else{if(_0x4a3064[_0x52aaeb(0x374)+_0x52aaeb(0x2c1)+'ed']>-0x51+-0x1739+-0x17*-0x106)_0x3fcc0e=_0x5119ca[_0x52aaeb(0x5a0)](_0x5119ca[_0x52aaeb(0x5a0)](_0x52aaeb(0x374)+'\x20arme'+_0x52aaeb(0x42a),_0x2dbd6a),'s'),_0x49a6f4='#ffd4'+'8a';else _0x4a3064[_0x52aaeb(0x5f9)+'tData']?(_0x3fcc0e=_0x5119ca[_0x52aaeb(0x5a0)](_0x52aaeb(0x423)+_0x52aaeb(0x32a)+'eady\x20'+'·\x20'+_0x2dbd6a,'s'),_0x49a6f4=_0x5119ca['VzrAD']):(_0x3fcc0e=_0x5119ca[_0x52aaeb(0x23a)](_0x4a3064['arm']&&_0x4a3064[_0x52aaeb(0x379)]['ok']?_0x5119ca[_0x52aaeb(0x505)]:_0x52aaeb(0x4b2)+'g\x20·\x20',_0x2dbd6a)+'s',_0x49a6f4=_0x5119ca[_0x52aaeb(0x2b5)]);}_0x26cfd3['textC'+_0x52aaeb(0x1da)+'t']=_0x3fcc0e,_0x26cfd3['style'][_0x52aaeb(0x489)]=_0x49a6f4;}_0x34672a&&(_0x34672a['textC'+_0x52aaeb(0x1da)+'t']=_0x4a3064[_0x52aaeb(0x2cc)]&&_0x4a3064[_0x52aaeb(0x2cc)][_0x52aaeb(0x3a0)+'h']?_0x52aaeb(0x497)+'vs\x20sn'+'apsho'+_0x52aaeb(0x561)+_0x4a3064[_0x52aaeb(0x2cc)][_0x52aaeb(0x397)](',\x20'):_0x52aaeb(0x2d8)+_0x52aaeb(0x556)+_0x52aaeb(0x3a6)+'walki'+'ng\x20/\x20'+_0x52aaeb(0x1dd)+'ting\x20'+_0x52aaeb(0x459)+_0x52aaeb(0x3a3)+_0x52aaeb(0x4a9)+'\x20whic'+'h\x20fie'+'ld\x20is'+'\x20whic'+'h.');if(_0x224341)try{_0x224341[_0x52aaeb(0x517)+_0x52aaeb(0x1da)+'t']=_0x41d02b(_0x4a3064);}catch(_0x580787){_0x224341[_0x52aaeb(0x517)+_0x52aaeb(0x1da)+'t']=JSON[_0x52aaeb(0x212)+'gify'](_0x4a3064,null,-0x3f1*0x1+-0x1ba1*0x1+-0x89*-0x3b);}console['log']('%c[sa'+_0x52aaeb(0x56b)+'\x20Skil'+'lWarz'+_0x52aaeb(0x283)+'rt',_0x5119ca['nkXti'](_0x5119ca[_0x52aaeb(0x23a)]('color'+':',_0x159097),_0x52aaeb(0x367)+'-weig'+_0x52aaeb(0x2e8)+'0'),_0x4a3064),console[_0x52aaeb(0x520)](_0x5119ca[_0x52aaeb(0x567)](_0x5119ca[_0x52aaeb(0x48d)](_0x1cbba4,'\x0a')+JSON[_0x52aaeb(0x212)+_0x52aaeb(0x4d7)](_0x4a3064,null,0x689+-0x1d92+0x2*0xb85)+'\x0a',_0x281245));}};return _0x921750['datas'+'et'][_0x253883(0x2a9)]='1',_0x921750[_0x253883(0x2a9)]=_0x4c1941,_0x4c1941;}function _0x41d02b(_0x3f0b78){var _0x333d86=_0x5d38bd,_0x1a5388=[];_0x1a5388[_0x333d86(0x30c)](_0xd463b0['SUygq'](_0xd463b0['rrGaA'](_0x333d86(0x221)+'\x20\x20\x20\x20'+(_0x3f0b78['host']||'?'),'\x20\x20('),Math['round'](_0xd463b0['XnmxI'](_0x3f0b78['elaps'+_0x333d86(0x2d7)]||0x25b7+0x1e03+-0x1*0x43ba,-0x22+0x1b2d+-0x1723)))+'s)'),_0x1a5388['push'](_0xd463b0[_0x333d86(0x45c)](_0xd463b0[_0x333d86(0x364)](_0xd463b0[_0x333d86(0x288)](_0xd463b0[_0x333d86(0x364)](_0xd463b0[_0x333d86(0x5bc)]+(_0x3f0b78[_0x333d86(0x372)]?_0x333d86(0x3bc):'no'),_0x333d86(0x22c)+'ntext'+'\x20'),_0x3f0b78[_0x333d86(0x604)+_0x333d86(0x2a3)+_0x333d86(0x25a)]?_0xd463b0[_0x333d86(0x21b)]:'no'),_0x333d86(0x384)+'pes\x20'),_0x3f0b78['typeC'+_0x333d86(0x5c3)]!=null?_0x3f0b78[_0x333d86(0x20d)+'ount']:'?')),_0x1a5388['push'](_0xd463b0[_0x333d86(0x35e)](_0xd463b0['aiEYs'],_0x3f0b78[_0x333d86(0x374)+_0x333d86(0x2c1)+'ed'])+'/'+_0x3f0b78['hooks'+'Total']+('\x20appl'+_0x333d86(0x34c))),_0x1a5388['push']('');var _0x42459d=_0x3f0b78[_0x333d86(0x289)+_0x333d86(0x4e7)]||{},_0x8ab603=Object['keys'](_0x42459d);!_0x8ab603['lengt'+'h']&&(_0x1a5388[_0x333d86(0x30c)](_0x333d86(0x57c)+'ve\x20ob'+'jects'+_0x333d86(0x321)+'ured\x20'+_0x333d86(0x21a)),_0x1a5388[_0x333d86(0x30c)](''),_0x1a5388[_0x333d86(0x30c)](_0xd463b0['iNdQj']),_0x1a5388[_0x333d86(0x30c)](_0xd463b0['rpvpw']));for(var _0xdbf0b1=-0x1aad+0x6d7+0x9eb*0x2;_0xdbf0b1<_0x8ab603['lengt'+'h'];_0xdbf0b1++){var _0x1153de=_0x8ab603[_0xdbf0b1];_0x1a5388[_0x333d86(0x30c)](_0xd463b0[_0x333d86(0x272)](_0xd463b0[_0x333d86(0x443)](_0x1153de,_0xd463b0[_0x333d86(0x509)]),_0x42459d[_0x1153de]));}_0x1a5388[_0x333d86(0x30c)]('');var _0x4f090d=_0x3f0b78[_0x333d86(0x3ab)+'y']||{},_0x3dc655=Object[_0x333d86(0x4af)](_0x4f090d);for(var _0x1e3fed=-0xf28+-0x689*-0x5+-0x73*0x27;_0x1e3fed<_0x3dc655[_0x333d86(0x3a0)+'h'];_0x1e3fed++){var _0x351af5=_0x3dc655[_0x1e3fed],_0x12101c=_0x4f090d[_0x351af5];if(!_0x12101c||!_0x12101c['lengt'+'h'])continue;_0x1a5388[_0x333d86(0x30c)](_0xd463b0[_0x333d86(0x296)](_0xd463b0['pxopt']+_0x351af5,'\x20')+new Array(Math[_0x333d86(0x38d)](-0x131*-0x8+-0x3*-0x335+0x993*-0x2,0x16a9+0xd*0x61+-0x1b74-_0x351af5['lengt'+'h']))[_0x333d86(0x397)]('─')),_0x1a5388[_0x333d86(0x30c)](_0xd463b0[_0x333d86(0x20f)]);for(var _0xd9f84a=0x5*-0x297+0x4a8+0xc1*0xb;_0xd9f84a<_0x12101c['lengt'+'h'];_0xd9f84a++){var _0x27fad6=_0x12101c[_0xd9f84a],_0x3e46e6=_0xd463b0[_0x333d86(0x578)](typeof _0x27fad6['v'],'numbe'+'r')?_0xd463b0['XnmxI'](Math[_0x333d86(0x3ef)](_0x27fad6['v']*(-0x15ec+0xd*-0x293+0x3b4b)),-0x14f2+-0x239a+0x3c74):_0x27fad6['v'];_0x1a5388['push'](_0xd463b0[_0x333d86(0x5a7)](_0xd463b0['HJeNo']('\x20\x20'+('0x'+_0x27fad6['o']['toStr'+_0x333d86(0x2e7)](0x1f31+-0x9db*0x2+-0x4f*0x25))['padEn'+'d'](-0x15*0xc7+0xf*-0x117+0x256*0xe)+'\x20'+_0x27fad6['k'][_0x333d86(0x4d2)+'d'](-0x11dd*0x2+0x1962+0xa63),'\x20')+String(_0x3e46e6)[_0x333d86(0x4d2)+'d'](-0x526+0xd*-0x18d+0x195f),'\x20')+(_0x27fad6[_0x333d86(0x326)]||''));}_0x1a5388['push']('');}if(_0x3f0b78['warni'+'ngs']&&_0x3f0b78['warni'+'ngs'][_0x333d86(0x3a0)+'h']){_0x1a5388[_0x333d86(0x30c)](_0xd463b0['KyZRZ']);for(var _0x430f34=-0x91b+-0x3*0x581+0x199e;_0x430f34<_0x3f0b78[_0x333d86(0x59d)+_0x333d86(0x4ab)][_0x333d86(0x3a0)+'h'];_0x430f34++)_0x1a5388[_0x333d86(0x30c)](_0xd463b0[_0x333d86(0x2de)]('\x20\x20!\x20',_0x3f0b78['warni'+'ngs'][_0x430f34]));}return _0x1a5388[_0x333d86(0x397)]('\x0a');}window[_0x5d38bd(0x1d7)+'entLi'+_0x5d38bd(0x3af)+'r'](_0xd463b0['jRtMu'],function(_0x5411a8){var _0x5acc46=_0x5d38bd,_0x4cb4dc=_0x5411a8[_0x5acc46(0x601)];if(!_0x4cb4dc||_0xd463b0[_0x5acc46(0x228)](_0x4cb4dc[_0x5acc46(0x515)+'ura'],_0x54bb91))return;try{if(_0x4cb4dc[_0x5acc46(0x439)]===_0x5acc46(0x3a7)){if(_0x5acc46(0x5d6)!=='HZTgy')_0x14ec0e['warni'+_0x5acc46(0x4ab)]['push'](_0xd463b0['VsxRR'](_0xd463b0[_0x5acc46(0x443)](_0xd463b0[_0x5acc46(0x55f)](_0x5acc46(0x33f)+_0x5acc46(0x613),_0x480c4d['keys'](_0x4d812e[_0x5acc46(0x289)+_0x5acc46(0x4e7)])[_0x5acc46(0x3a0)+'h']),_0xd463b0['Hdhuu']),_0x592382[_0x5acc46(0x58c)+_0x5acc46(0x42c)]?_0xd463b0[_0x5acc46(0x59f)]+_0x3ba028[_0x5acc46(0x58c)+_0x5acc46(0x42c)]:_0x5acc46(0x2c2)+_0x5acc46(0x216)+_0x5acc46(0x4fe)+'\x20so\x20e'+'very\x20'+'offse'+_0x5acc46(0x3f5)+_0x5acc46(0x1dc)+_0x5acc46(0x299)+_0x5acc46(0x496)+'e.'));else{_0x32958d()['set']({'host':_0x4cb4dc['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}}if(_0xd463b0['JSunc'](_0x4cb4dc[_0x5acc46(0x439)],_0xd463b0[_0x5acc46(0x1e2)]))_0x32958d()['set'](_0x4cb4dc[_0x5acc46(0x48a)+'t']);}catch(_0x3b96a6){console['warn'](_0xd463b0[_0x5acc46(0x5d4)],_0x5acc46(0x489)+':'+_0x159097,_0x3b96a6);}});if(document['body'])_0x32958d();else document[_0x5d38bd(0x1d7)+'entLi'+_0x5d38bd(0x3af)+'r'](_0x5d38bd(0x2a1)+_0x5d38bd(0x32b)+_0x5d38bd(0x61c)+'d',_0x32958d,{'once':!![]});return;}window[_0x5d38bd(0x3b0)+_0x5d38bd(0x29c)+'W__']=window[_0x5d38bd(0x3b0)+_0x5d38bd(0x29c)+'W__']||{'at':Date['now']()};function _0x510521(_0x19e6fd,_0x1442c1){var _0x11935c=_0x5d38bd,_0x4b5192={'__sakura':_0x54bb91,'kind':_0x19e6fd};if(_0x1442c1){for(var _0x3289ef in _0x1442c1)_0x4b5192[_0x3289ef]=_0x1442c1[_0x3289ef];}try{if('tRZSY'===_0xd463b0['kHGJB']){if(window['paren'+'t']&&window[_0x11935c(0x203)+'t']!==window)window[_0x11935c(0x203)+'t'][_0x11935c(0x525)+_0x11935c(0x5ea)+'e'](_0x4b5192,'*');}else{if(_0x1a1c9f[_0x4c17b0]['hook']&&_0x546469[_0x52cf77]['hook']['table'+_0x11935c(0x375)]!==_0x40b4c7)_0x450285++;}}catch(_0xc46f18){}try{if(window['top']&&_0xd463b0['yOkaR'](window[_0x11935c(0x2df)],window))window[_0x11935c(0x2df)][_0x11935c(0x525)+_0x11935c(0x5ea)+'e'](_0x4b5192,'*');}catch(_0x1d9da0){}}console['log'](_0xd463b0[_0x5d38bd(0x60d)]+_0x3813b2,_0xd463b0[_0x5d38bd(0x55c)](_0xd463b0[_0x5d38bd(0x1e9)]+_0x159097,_0x5d38bd(0x367)+_0x5d38bd(0x1f0)+_0x5d38bd(0x2e8)+_0x5d38bd(0x1e3)+_0x5d38bd(0x402)+_0x5d38bd(0x547)+'x'),{'host':_0x3ae824,'href':location[_0x5d38bd(0x371)],'version':_0x3813b2}),_0xd463b0[_0x5d38bd(0x260)](_0x510521,_0xd463b0['GQATf'],{'host':_0x3ae824,'role':_0x41824f});var _0x44caad=window[_0x5d38bd(0x3b0)+_0x5d38bd(0x29c)+'W__']&&window['__SAK'+'URA_S'+'W__']['at']||Date[_0x5d38bd(0x573)]();try{if(_0x5d38bd(0x2eb)==='ANkoe'){var _0x7849e=new BroadcastChannel(_0xd463b0['ZLuXs']);_0x7849e[_0x5d38bd(0x440)+'sage']=function(_0x1eb186){var _0x1e71fb=_0x5d38bd,_0x3c0f63=_0x1eb186[_0x1e71fb(0x601)];if(_0x3c0f63&&_0x3c0f63['__sak'+'ura']===_0x54bb91&&_0xd463b0[_0x1e71fb(0x1cd)](_0x3c0f63['kind'],_0xd463b0[_0x1e71fb(0x4eb)]))_0xd463b0['PkxyD'](_0x12c0c2,_0x3c0f63['cmd'],_0x3c0f63[_0x1e71fb(0x1ee)]);};}else{var _0x280394=_0x1b2e1f[_0x5d38bd(0x601)];if(!_0x280394||_0x280394['__sak'+'ura']!==_0x28638a)return;try{if(_0x400dde[_0x5d38bd(0x203)+'t']&&_0x1c259f['paren'+'t']!==_0x2cc2f0)_0x3bc4be[_0x5d38bd(0x203)+'t'][_0x5d38bd(0x525)+_0x5d38bd(0x5ea)+'e'](_0x280394,'*');if(_0x3bd585[_0x5d38bd(0x2df)]&&_0xd463b0[_0x5d38bd(0x2f1)](_0x4798d1['top'],_0x31a674))_0x456def[_0x5d38bd(0x2df)]['postM'+_0x5d38bd(0x5ea)+'e'](_0x280394,'*');}catch(_0x2c0abb){}}}catch(_0x3b975c){}var _0x2c5603=[];(function _0x43ad82(){var _0x17c9e3=_0x5d38bd,_0x45f598={'uvowD':function(_0x58c53f,_0x448cd9){return _0x58c53f<_0x448cd9;},'xPjOj':'Unity'+'WebMo'+_0x17c9e3(0x355),'dhrcf':function(_0x1377dc,_0x168d97){return _0xd463b0['ADMWR'](_0x1377dc,_0x168d97);},'phMDY':_0xd463b0[_0x17c9e3(0x5d3)],'fdIAk':_0x17c9e3(0x25b)},_0x5c5ace=['log','warn','error','info',_0x17c9e3(0x4bd)];for(var _0x25e5be=-0x2d3+-0x3*-0x6e6+-0x11df;_0x25e5be<_0x5c5ace[_0x17c9e3(0x3a0)+'h'];_0x25e5be++){(function(_0x77d01){var _0x16c833=_0x17c9e3;if(_0x45f598['dhrcf'](_0x45f598['phMDY'],_0x45f598['fdIAk']))_0x1c445e[_0x16c833(0x517)+'onten'+'t']=_0x284fe4['strin'+_0x16c833(0x4d7)](_0x399d6c,null,-0x1cbb+-0x1*0x26fb+0x1*0x43b7);else{var _0x1c6a6d=console[_0x77d01];if(typeof _0x1c6a6d!==_0x16c833(0x40a)+'ion')return;console[_0x77d01]=function(){var _0x38b77f=_0x16c833;try{var _0x51d21c='';for(var _0x1854ac=0x1*0xf4d+0x11bc+-0x3*0xb03;_0x45f598['uvowD'](_0x1854ac,arguments['lengt'+'h']);_0x1854ac++){var _0xfcc17a=arguments[_0x1854ac];if(typeof _0xfcc17a===_0x38b77f(0x212)+'g')_0x51d21c+=_0xfcc17a;else{if(_0xfcc17a&&_0xfcc17a[_0x38b77f(0x590)+'ge'])_0x51d21c+=_0xfcc17a[_0x38b77f(0x590)+'ge'];}}if(_0x51d21c['index'+'Of'](_0x1cbba4)!==-(-0x3*-0xbef+-0x15f2+0x9*-0x18a))return _0x1c6a6d[_0x38b77f(0x33a)](console,arguments);if(_0x51d21c['index'+'Of'](_0x45f598[_0x38b77f(0x4f4)])!==-(0x26c1+-0x1*0x244+-0x247c)){var _0x5391ac=_0x51d21c['slice'](0x649*-0x3+0x21f2+-0xf17,-0x22a8+-0x1e9c+0x4270);if(_0x2c5603['index'+'Of'](_0x5391ac)===-(0x2574+0x2196+0x5*-0xe35)&&_0x2c5603['lengt'+'h']<-0x114e+0x88*-0x13+0x1ba2)_0x2c5603[_0x38b77f(0x30c)](_0x5391ac);}}catch(_0x3c96e4){}return _0x1c6a6d['apply'](console,arguments);};}}(_0x5c5ace[_0x25e5be]));}}());var _0x29f8cb={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x6cc1d5=null,_0x34c463=null,_0x4d6baf=-(-0xde*0x7+0x849*0x4+-0x1b11),_0x1d2225=null;function _0x230344(_0x50e6b3){var _0x5e9de2=_0x5d38bd;if(_0x5e9de2(0x4c3)!=='dToNs')return _0x234a4d['faile'+'d']++,_0x59d2ea[_0x5e9de2(0x58c)+'rror']=_0x195d33[_0x5e9de2(0x58c)+_0x5e9de2(0x42c)]||'no\x20HE'+'APU8\x20'+'-\x20Uni'+_0x5e9de2(0x4a5)+_0x5e9de2(0x2d9)+'e\x20not'+_0x5e9de2(0x310)+_0x5e9de2(0x4dd)+'\x20via\x20'+_0x5e9de2(0x236)+'me.re'+_0x5e9de2(0x1de)+_0x5e9de2(0x2d0)+')\x20or\x20'+_0x5e9de2(0x594)+'indow'+_0x5e9de2(0x29b)+'al',null;else try{if(!_0x50e6b3)return;var _0x392e26=_0x50e6b3[_0x5e9de2(0x289)+'nce']?_0x50e6b3[_0x5e9de2(0x289)+_0x5e9de2(0x5cf)][_0x5e9de2(0x3ec)+'ts']:_0x50e6b3[_0x5e9de2(0x3ec)+'ts']||null;if(!_0x392e26)return;if(!_0x1d2225)try{_0x1d2225=Object['keys'](_0x392e26)['slice'](-0x2642+0x5fc+-0x3*-0xac2,0x263b+-0xd17+-0x190c);}catch(_0xe2b85f){}var _0x6f4d6f=_0x392e26[_0x5e9de2(0x1e1)+'y'];if(_0x6f4d6f&&_0x6f4d6f[_0x5e9de2(0x297)+'r']&&_0xd463b0['wymnw'](_0x6f4d6f[_0x5e9de2(0x297)+'r'][_0x5e9de2(0x29f)+_0x5e9de2(0x56e)],-0x1c2*0x3+-0x33c+0xc6*0xb)){if(_0xd463b0[_0x5e9de2(0x1cd)]('ppkXX','ThAwj')){var _0x4fc13c=_0x48bb6e['hookP'+_0x5e9de2(0x2c7)]({'typeName':_0x29eab7['type'],'methodName':'Updat'+'e','params':['i32','i32'],'returnType':_0x26456d},_0xd463b0[_0x5e9de2(0x479)](_0xb47f3f,_0x54d724['type'],_0x3ab0e3[_0x5e9de2(0x336)]));_0x4a3b8c[_0x5e9de2(0x30c)]({'type':_0x310bc3['type'],'hook':_0x4fc13c,'keep':_0x35ed42[_0x5e9de2(0x336)]});}else _0x34c463=_0x6f4d6f,_0x4d6baf=Date[_0x5e9de2(0x573)]()-_0x44caad;}}catch(_0x30f5fa){}}function _0x4e19a8(){var _0x43d088=_0x5d38bd,_0x281e48={'npjhR':function(_0x2023e7,_0xd89333){var _0x54df3b=_0xc99a;return _0xd463b0[_0x54df3b(0x434)](_0x2023e7,_0xd89333);},'CeThn':_0xd463b0[_0x43d088(0x392)],'RxUiG':function(_0x43633d,_0xb879ec){return _0x43633d(_0xb879ec);},'cabIf':_0x43d088(0x5b6)};try{if(_0xd463b0[_0x43d088(0x434)](_0x43d088(0x2b3),'iLoqF')){var _0x4f8db5=new _0x4e139c(_0x29cb1b);for(var _0xa891a1=-0x7a4+0x3d*-0x67+0x202f;_0xa891a1<_0x2eb947;_0xa891a1++)_0x4f8db5[_0xa891a1]=_0x1ee436['getUi'+_0x43d088(0x5f7)](_0x2e453d+_0x25d6a1+_0xa891a1);return _0x11bf93['ok']++,_0x4f8db5;}else{if(typeof WebAssembly===_0x43d088(0x5cc)+_0x43d088(0x308))return;var _0x45eb61=[_0x43d088(0x289)+_0x43d088(0x30f)+'e',_0x43d088(0x289)+_0x43d088(0x30f)+_0x43d088(0x1e7)+_0x43d088(0x4da)];for(var _0x2067b=0x1*-0x1c97+-0x1acd+0x58a*0xa;_0xd463b0['trFNF'](_0x2067b,_0x45eb61['lengt'+'h']);_0x2067b++){(function(_0xda2f54){var _0x2d5b99=_0x43d088,_0x165c75=WebAssembly[_0xda2f54];if(typeof _0x165c75!=='funct'+'ion'||_0x165c75[_0x2d5b99(0x515)+_0x2d5b99(0x2f8)+_0x2d5b99(0x5a8)+'ap'])return;var _0xaec11b=function(){var _0x4bc060=_0x2d5b99,_0x4d4dd5=_0x165c75[_0x4bc060(0x33a)](this,arguments);try{if(_0x281e48['npjhR']('yegnm',_0x281e48[_0x4bc060(0x5df)])){if(_0x4d4dd5&&typeof _0x4d4dd5['then']==='funct'+_0x4bc060(0x55b))_0x4d4dd5['then'](_0x230344,function(){});else _0x281e48[_0x4bc060(0x3fd)](_0x230344,_0x4d4dd5);}else return _0x26c2e3[_0x4bc060(0x256)+'e']=_0x4bc060(0x4fb)+'w.'+_0x5bd19d[_0x4a50f5]+('.Modu'+'le'),_0x4feda7;}catch(_0x5d983c){}return _0x4d4dd5;};_0xaec11b['__sak'+_0x2d5b99(0x2f8)+_0x2d5b99(0x5a8)+'ap']=!![];try{Object[_0x2d5b99(0x51c)+'eProp'+_0x2d5b99(0x5bb)](_0xaec11b,_0x281e48[_0x2d5b99(0x393)],{'value':_0x165c75['name'],'configurable':!![]});}catch(_0x411b68){}WebAssembly[_0xda2f54]=_0xaec11b;}(_0x45eb61[_0x2067b]));}}}catch(_0x219429){}}var _0x55f77f=null,_0x83bd16=null,_0x391f45={},_0x4b5b4c=[],_0x30cfd2=[],_0x4b4404=[{'type':_0x5d38bd(0x5e3)+'ntrol'+_0x5d38bd(0x2d3),'keep':!![]},{'type':_0xd463b0[_0x5d38bd(0x2ed)],'keep':!![]},{'type':'Weapo'+'nMana'+_0x5d38bd(0x4e2),'keep':![]},{'type':_0xd463b0[_0x5d38bd(0x247)],'keep':![]}],_0x151d63=[_0x5d38bd(0x5c5)+_0x5d38bd(0x4ca)+_0x5d38bd(0x407)+_0x5d38bd(0x3f6),_0x5d38bd(0x5c5)+_0x5d38bd(0x4ca)+_0x5d38bd(0x407)+_0x5d38bd(0x368)+'tpass'+'.dll',_0xd463b0[_0x5d38bd(0x3f0)],_0xd463b0[_0x5d38bd(0x2af)],'Scivo'+'loCha'+_0x5d38bd(0x577)+_0x5d38bd(0x350)+_0x5d38bd(0x47c)+'r.dll',_0x5d38bd(0x32e)+'erate'+'d'];(function _0x251300(){var _0x2f40da=_0x5d38bd;try{var _0xd1f5f7=window[_0x2f40da(0x5f1)+_0x2f40da(0x560)+_0x2f40da(0x355)]&&window[_0x2f40da(0x5f1)+_0x2f40da(0x560)+'dkit']['Runti'+'me'];if(!_0xd1f5f7||typeof _0xd1f5f7['creat'+'ePlug'+'in']!==_0x2f40da(0x40a)+_0x2f40da(0x55b)){_0x29f8cb['error']='Runti'+_0x2f40da(0x1fa)+'eateP'+'lugin'+_0x2f40da(0x34f)+'ailab'+'le';return;}_0x29f8cb['attem'+_0x2f40da(0x519)]=!![],_0x83bd16=_0xd1f5f7['creat'+_0x2f40da(0x43a)+'in']({'name':_0xd463b0[_0x2f40da(0x44d)],'version':_0x3813b2,'referencedAssemblies':_0x151d63['slice']()}),_0x29f8cb['ok']=!![];try{var _0x1e744f=window[_0x2f40da(0x5f1)+_0x2f40da(0x560)+'dkit']['Runti'+'me'];_0x1e744f['__sak'+'uraTa'+'g']=_0x3813b2+':'+Math[_0x2f40da(0x552)+'m']()['toStr'+_0x2f40da(0x2e7)](-0x1ba7+0x1189*-0x1+0x78e*0x6)[_0x2f40da(0x4e3)](-0x8e0+0x1488+-0xba6,0x2481+-0xb3*0x4+0x21ab*-0x1),_0x6cc1d5=_0x1e744f[_0x2f40da(0x515)+_0x2f40da(0x3da)+'g'];}catch(_0x139bd3){}_0xd463b0['GPwQE'](_0x63cf43),_0x29f8cb['hooks'+_0x2f40da(0x3b2)+'tered']=_0x4b5b4c[_0x2f40da(0x3a0)+'h'],_0x4e19a8(),_0x29f8cb['memor'+_0x2f40da(0x342)]=!![];}catch(_0x12e194){_0x29f8cb['error']=String(_0x12e194&&_0x12e194[_0x2f40da(0x590)+'ge']||_0x12e194);}}());var _0x5d81b9=new Float32Array(-0x1f60+-0xb5b*-0x1+0x1406),_0x3af7f7=new Int32Array(_0x5d81b9['buffe'+'r']);function _0x56e99a(_0x5657d5){var _0x3dc176=_0x5d38bd;if(_0x3dc176(0x278)===_0xd463b0[_0x3dc176(0x4a1)])return _0x5d81b9[0x55*0x6b+0x2386+-0x470d]=_0x5657d5,_0x3af7f7[-0x1589+0x16*-0x101+0x2b9f];else{var _0x3b77ab=_0x24a2b8[_0x1f3106][_0x3dc176(0x599)+_0x3dc176(0x2e7)](-0xf*-0x9+0x346*-0x7+0x1673);_0x52a1aa+=(_0x3b77ab['lengt'+'h']<-0x16a1+-0x6e0+0x5*0x5e7?'0':'')+_0x3b77ab;}}function _0xfa5db1(_0x180fbf){var _0x26362c=_0x5d38bd;if(_0x26362c(0x462)!==_0x26362c(0x462)){var _0x1c150c='';for(var _0x231741=0x493+-0x37*-0x5+-0x5a6;_0xd463b0[_0x26362c(0x390)](_0x231741,_0x55ddfb['lengt'+'h']);_0x231741++){var _0x43eda3=_0x28c970[_0x231741][_0x26362c(0x599)+'ing'](0x708+-0x3*0x527+0x35*0x29);_0x1c150c+=(_0xd463b0['RttXj'](_0x43eda3['lengt'+'h'],-0xc70+0x1d*0x3a+-0x2*-0x2f0)?'0':'')+_0x43eda3;}return _0x1c150c;}else return _0x3af7f7[-0x1*0x159b+0x1a1a*-0x1+0x2fb5]=_0xd463b0[_0x26362c(0x4ed)](_0x180fbf,-0x714+-0x7cd*0x3+0x1e7b),_0x5d81b9[0x24b0+-0x2a6+-0x220a];}var _0x4c0276={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x46f52e(){var _0x40b220=_0x5d38bd,_0x10622d={'aVwWd':function(_0x28aa94,_0x42f73e){return _0x28aa94>_0x42f73e;},'YmBXO':_0x40b220(0x58d)+'e','ZnWVE':function(_0x37087d,_0xfb31c9){var _0x3f5406=_0x40b220;return _0xd463b0[_0x3f5406(0x20b)](_0x37087d,_0xfb31c9);},'uoXRb':function(_0x2500cd,_0x4c5e43){var _0x514324=_0x40b220;return _0xd463b0[_0x514324(0x5e1)](_0x2500cd,_0x4c5e43);},'nrCFi':_0xd463b0['HvSXs'],'htTEY':_0xd463b0[_0x40b220(0x603)],'dIXSf':_0x40b220(0x236)+_0x40b220(0x3cb)+'solve'+_0x40b220(0x2d0)+')'};try{if(_0xd463b0['ADMWR']('sTHxW','sTHxW')){if(_0x83bd16&&_0x83bd16[_0x40b220(0x2e2)+_0x40b220(0x442)]){var _0x537815=_0x83bd16[_0x40b220(0x2e2)+'ime'];if(typeof _0x537815[_0x40b220(0x58e)+'veGam'+'e']===_0x40b220(0x40a)+'ion'){var _0x3815a6=_0x537815[_0x40b220(0x58e)+_0x40b220(0x3a4)+'e']();if(_0x3815a6){if(_0xd463b0[_0x40b220(0x335)](_0xd463b0[_0x40b220(0x535)],_0xd463b0[_0x40b220(0x535)])){var _0x31f362=(_0x40b220(0x51f)+'|1|8|'+'0|6|3'+'|2')[_0x40b220(0x39e)]('|'),_0x2ab29b=0x25aa+0x20*0x12b+0x2*-0x2585;while(!![]){switch(_0x31f362[_0x2ab29b++]){case'0':_0x443683=_0x47cdf6||_0x569ae9['plugi'+'ns'][_0x569ae9['plugi'+'ns'][_0x40b220(0x3a0)+'h']-(-0x1f4d+0x1*-0x1d9f+0x3*0x144f)];continue;case'1':if(!_0x569ae9[_0x40b220(0x54a)+'ns']||!_0x569ae9[_0x40b220(0x54a)+'ns']['lengt'+'h'])return![];continue;case'2':return _0x10622d['aVwWd'](_0x30177c['lengt'+'h'],-0xe*-0x28f+-0x1cca+-0x708);case'3':for(var _0x13d94e=0x2*0x1369+0x5*-0x4c7+-0xeef;_0x13d94e<_0x407e95[_0x40b220(0x3a0)+'h'];_0x13d94e++){var _0x49a392=_0x4c2c14[_0x13d94e];try{var _0xa2f095=_0x35d74b[_0x40b220(0x4f6)+_0x40b220(0x2c7)]({'typeName':_0x49a392['type'],'methodName':_0x10622d[_0x40b220(0x250)],'params':['i32',_0x40b220(0x358)],'returnType':_0x1d836b},_0x30d7e6(_0x49a392[_0x40b220(0x1d3)],_0x49a392[_0x40b220(0x336)]));_0x175c1b[_0x40b220(0x30c)]({'type':_0x49a392['type'],'hook':_0xa2f095,'keep':_0x49a392[_0x40b220(0x336)]});}catch(_0x4b4a28){_0x1377a3[_0x40b220(0x30c)](_0x49a392[_0x40b220(0x1d3)]+':\x20'+_0x10622d[_0x40b220(0x470)](_0xc19edd,_0x4b4a28&&_0x4b4a28[_0x40b220(0x590)+'ge']||_0x4b4a28)[_0x40b220(0x4e3)](0x4e1*-0x4+-0x19*0x3d+0x1979,-0x1389+-0x7cc+0x1bf5*0x1));}}continue;case'4':if(_0x975dd7[_0x40b220(0x3a0)+'h'])return!![];continue;case'5':var _0x569ae9=_0x1b6989['Unity'+'WebMo'+_0x40b220(0x355)]['Runti'+'me'];continue;case'6':if(!_0x59ce50||_0x10622d['uoXRb'](typeof _0x55849c['hookP'+_0x40b220(0x2c7)],_0x10622d[_0x40b220(0x511)]))return![];continue;case'7':if(!_0x39e576['Unity'+'WebMo'+_0x40b220(0x355)]||!_0x249930['Unity'+_0x40b220(0x560)+'dkit'][_0x40b220(0x236)+'me'])return![];continue;case'8':_0x4cbef4=_0x30b528[_0x40b220(0x5f1)+_0x40b220(0x560)+_0x40b220(0x355)][_0x40b220(0x28b)+'Wrapp'+'er'];continue;}break;}}else return _0x4c0276['sourc'+'e']=_0x40b220(0x54a)+_0x40b220(0x23f)+'ntime'+'.reso'+'lveGa'+'me()',_0x3815a6;}}if(_0x537815[_0x40b220(0x1d6)])return _0x4c0276['sourc'+'e']=_0xd463b0[_0x40b220(0x361)],_0x537815[_0x40b220(0x1d6)];}}else{if(_0x2bc734&&_0x25a3da[_0x40b220(0x297)+'r']&&_0x15246c[_0x40b220(0x297)+'r'][_0x40b220(0x29f)+'ength'])return _0x103d83[_0x40b220(0x256)+'e']=_0x345e54['sourc'+'e']||_0x40b220(0x289)+_0x40b220(0x30f)+'e().e'+_0x40b220(0x5d8)+_0x40b220(0x421)+_0x40b220(0x1f7),new _0x21ab7a(_0x2b0407[_0x40b220(0x297)+'r']);}}catch(_0x3deeb4){}try{var _0x8cc551=window[_0x40b220(0x5f1)+_0x40b220(0x560)+'dkit']&&window['Unity'+'WebMo'+'dkit'][_0x40b220(0x236)+'me'];if(_0x8cc551&&typeof _0x8cc551['resol'+_0x40b220(0x3a4)+'e']==='funct'+_0x40b220(0x55b)){var _0x10b549=_0x8cc551[_0x40b220(0x58e)+_0x40b220(0x3a4)+'e']();if(_0x10b549)return _0x4c0276['sourc'+'e']=_0xd463b0['ZDEUj'],_0x10b549;}if(_0x8cc551&&_0x8cc551[_0x40b220(0x1d6)]){if('rFzOP'!==_0xd463b0[_0x40b220(0x269)])return _0x4c0276[_0x40b220(0x256)+'e']=_0x40b220(0x236)+_0x40b220(0x564)+_0x40b220(0x28a),_0x8cc551;else _0x2d7e6a['warni'+'ngs']['push'](_0xd463b0['CWEkr'](_0xd463b0[_0x40b220(0x542)](_0xd463b0[_0x40b220(0x55c)]('UWMK\x20'+_0x40b220(0x58e)+'ved\x20',_0x2a3bbc[_0x40b220(0x374)+_0x40b220(0x4ec)+_0x40b220(0x26e)]),'\x20of\x20'),_0xc99eb2[_0x40b220(0x374)+_0x40b220(0x2b9)])+('\x20hook'+_0x40b220(0x24e)+_0x40b220(0x34a)+'able\x20'+_0x40b220(0x543)+'\x20but\x20'+_0x40b220(0x4d6)+_0x40b220(0x37e)+_0x40b220(0x4fc)+_0x40b220(0x51d)+'gnatu'+_0x40b220(0x490))+_0xd463b0['WyBRn']);}}catch(_0x4e984b){}try{var _0x2cbbcd=window[_0x40b220(0x5e4)+_0x40b220(0x584)+'nce']||window[_0x40b220(0x5e4)+_0x40b220(0x2a6)]||window[_0x40b220(0x347)];if(_0x2cbbcd){if(_0xd463b0['GElVW'](_0xd463b0[_0x40b220(0x43c)],'pAFXG'))return _0x4c0276[_0x40b220(0x256)+'e']=_0x40b220(0x4fb)+'w\x20glo'+'bal',_0x2cbbcd;else{var _0x416060=_0xe0de19[_0x58f0b9],_0x29453=typeof _0x43c49f[_0x416060];_0x58ec32[_0x416060]=_0x29453===_0x40b220(0x5cc)+'ined'?_0x10622d[_0x40b220(0x286)]:_0x29453;}}}catch(_0x1685c2){}try{if(_0xd463b0[_0x40b220(0x40b)](_0x40b220(0x598),_0x40b220(0x598))){_0x1e4a5d()[_0x40b220(0x565)]({'host':_0x1ba998[_0x40b220(0x2c3)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}else{if(typeof game!==_0x40b220(0x5cc)+_0x40b220(0x308)&&game)return _0x4c0276[_0x40b220(0x256)+'e']=_0xd463b0[_0x40b220(0x415)],game;}}catch(_0x151153){}try{var _0x4c8124=Object[_0x40b220(0x4af)](window);for(var _0x46b54f=-0x2b*-0x1+0x95*0x4+0x1*-0x27f;_0xd463b0['foRsY'](_0x46b54f,_0x4c8124[_0x40b220(0x3a0)+'h'])&&_0x46b54f<-0x691+0x7ad*0x4+-0x15cb;_0x46b54f++){var _0x414d99=window[_0x4c8124[_0x46b54f]];if(_0x414d99&&_0xd463b0['vYuyL'](typeof _0x414d99,_0x40b220(0x444)+'t')&&_0x414d99['Modul'+'e']&&_0x414d99[_0x40b220(0x4b5)+'e'][_0x40b220(0x4b0)+'8']&&_0x414d99[_0x40b220(0x4b5)+'e'][_0x40b220(0x4b0)+'8'][_0x40b220(0x297)+'r'])return _0xd463b0['gzTiM']===_0x40b220(0x2b7)?(_0xc8fda3[_0x40b220(0x256)+'e']=_0x10622d['dIXSf'],_0x2dbef4):(_0x4c0276[_0x40b220(0x256)+'e']='windo'+'w.'+_0x4c8124[_0x46b54f]+_0xd463b0[_0x40b220(0x5e5)],_0x414d99);}}catch(_0x150dc8){}return _0x4c0276['sourc'+'e']=null,null;}function _0xedf663(){var _0x33c1e9=_0x5d38bd;if(_0x33c1e9(0x5de)===_0xd463b0['vqFNP'])try{return _0x28a8a9&&_0x3d61d3[_0x33c1e9(0x297)+'r']?_0x3b1ced[_0x33c1e9(0x297)+'r']['byteL'+_0x33c1e9(0x56e)]:0x3*0x75b+0x480+-0x1a91*0x1;}catch(_0x3f294b){return-0x2314+-0x260d+-0x1*-0x4921;}else{try{if(_0xd463b0['JuCKP'](_0x33c1e9(0x3f4),_0xd463b0['weOyl'])){if(_0x34c463&&_0x34c463[_0x33c1e9(0x297)+'r']&&_0x34c463['buffe'+'r'][_0x33c1e9(0x29f)+_0x33c1e9(0x56e)])return _0x4c0276[_0x33c1e9(0x256)+'e']=_0x4c0276[_0x33c1e9(0x256)+'e']||'insta'+_0x33c1e9(0x30f)+_0x33c1e9(0x44b)+_0x33c1e9(0x5d8)+_0x33c1e9(0x421)+_0x33c1e9(0x1f7),new Uint8Array(_0x34c463[_0x33c1e9(0x297)+'r']);}else{var _0x443665='';_0x89b28a[_0x33c1e9(0x513)+_0x33c1e9(0x38a)+_0x33c1e9(0x380)]&&(_0x443665=_0xd463b0['irwRU'](_0xd463b0[_0x33c1e9(0x23b)]+_0x53224e[_0x33c1e9(0x513)+_0x33c1e9(0x38a)+'oof'][_0x33c1e9(0x465)]+('ms\x20wi'+'th\x20or'+_0x33c1e9(0x528)+_0x33c1e9(0x3ea)+'=')+_0x10b06b['hookF'+'irePr'+_0x33c1e9(0x380)]['origi'+'nalFu'+'nc']+('\x20and\x20'+_0x33c1e9(0x40f)+_0x33c1e9(0x58e)+_0x33c1e9(0x389))+_0x2a6889[_0x33c1e9(0x513)+'irePr'+'oof'][_0x33c1e9(0x58e)+_0x33c1e9(0x3a4)+'eAtFi'+'re'],_0xd463b0[_0x33c1e9(0x512)])+(_0x4e682a['hookF'+_0x33c1e9(0x38a)+'oof'][_0x33c1e9(0x2a2)+_0x33c1e9(0x29d)+_0x33c1e9(0x4d1)+'e']||'none')+('),\x20so'+'\x20the\x20'+'refer'+'ence\x20'+'exist'+'ed\x20th'+'en\x20an'+_0x33c1e9(0x38e)+_0x33c1e9(0x28d)+_0x33c1e9(0x346)+_0x33c1e9(0x46b)+_0x33c1e9(0x387))),_0x2e5a18['warni'+'ngs'][_0x33c1e9(0x30c)](_0xd463b0['fkYIG'](_0xd463b0[_0x33c1e9(0x311)]+(_0x2abb74['globa'+'ls'][_0x33c1e9(0x2a2)+_0x33c1e9(0x29d)]||'none')+_0xd463b0[_0x33c1e9(0x571)],_0xd463b0['PgECp'])+_0x443665);}}catch(_0x15b65a){}try{var _0x49c378=_0xd463b0[_0x33c1e9(0x1e4)](_0x46f52e);if(_0x49c378&&_0x49c378[_0x33c1e9(0x4b5)+'e']&&_0x49c378[_0x33c1e9(0x4b5)+'e']['HEAPU'+'8']&&_0x49c378[_0x33c1e9(0x4b5)+'e'][_0x33c1e9(0x4b0)+'8'][_0x33c1e9(0x297)+'r'])return _0x49c378[_0x33c1e9(0x4b5)+'e']['HEAPU'+'8'];}catch(_0x21cd75){}return null;}}function _0x668726(){var _0x10d777=_0x5d38bd,_0x2fb555=_0xedf663();if(!_0x2fb555)return null;try{return new DataView(_0x2fb555['buffe'+'r'],_0x2fb555['byteO'+'ffset'],_0x2fb555[_0x10d777(0x29f)+_0x10d777(0x56e)]);}catch(_0x2d7212){return null;}}function _0x2110bb(_0x36b197,_0x12294){var _0x148d85=_0x5d38bd,_0x2f0f0d={'AkVrX':function(_0x4068d9){return _0x4068d9();},'fCIrE':function(_0x2396d0){var _0x48c822=_0xc99a;return _0xd463b0[_0x48c822(0x275)](_0x2396d0);},'SBvAW':function(_0x5e9c62,_0x3c032e){var _0x231114=_0xc99a;return _0xd463b0[_0x231114(0x3e2)](_0x5e9c62,_0x3c032e);},'CsZAj':function(_0x2d9c57,_0x300c10,_0x2ca344){return _0xd463b0['PkxyD'](_0x2d9c57,_0x300c10,_0x2ca344);}},_0x520acd=_0xd463b0['keGQJ'](_0x668726);if(!_0x520acd)return _0x4c0276[_0x148d85(0x3d7)+'d']++,_0x4c0276[_0x148d85(0x58c)+'rror']=_0x4c0276[_0x148d85(0x58c)+'rror']||'no\x20HE'+'APU8\x20'+_0x148d85(0x324)+_0x148d85(0x4a5)+_0x148d85(0x2d9)+'e\x20not'+_0x148d85(0x310)+_0x148d85(0x4dd)+_0x148d85(0x365)+'Runti'+'me.re'+'solve'+'Game('+')\x20or\x20'+_0x148d85(0x594)+'indow'+_0x148d85(0x29b)+'al',undefined;if(_0x36b197<-0x236e+-0x2*-0x696+0x1642||_0xd463b0['puGDJ'](_0x36b197,0x1*0x106f+0xa13*0x2+-0x2491)>_0x520acd[_0x148d85(0x29f)+'ength']){if(_0xd463b0[_0x148d85(0x5da)]===_0xd463b0[_0x148d85(0x22e)]){if(!_0x17ba18[_0x148d85(0x3a0)+'h'])try{_0x2f0f0d[_0x148d85(0x50d)](_0x23200a);}catch(_0x20e8dd){}_0x111d80++,_0x23517d(_0x2f0f0d[_0x148d85(0x24d)](_0x4bb622));if(!_0x5d4974['lengt'+'h']&&_0x2f0f0d[_0x148d85(0x314)](_0xa70f3c,0x199b+0x24fe+-0x3d6d))_0x44490f(_0x3a93ce,-0x1f9b+-0x1e46+0x45b1);else{if(!_0x5937eb['keys'](_0x394f70)[_0x148d85(0x3a0)+'h']&&_0x348510<-0xcb9*-0x2+0x1*0x13f9+-0x2c3f)_0x2f0f0d[_0x148d85(0x5f5)](_0x51e988,_0x24e5f9,-0x8d5+-0x1bfb+0x2ca0);else _0x2f0f0d['CsZAj'](_0x52aa2f,_0x355d61,0x305*0x3+0x20e7*0x1+-0x2de*0xd);}}else return _0x4c0276[_0x148d85(0x3d7)+'d']++,_0x4c0276['lastE'+'rror']=_0x4c0276[_0x148d85(0x58c)+'rror']||_0xd463b0[_0x148d85(0x4c1)](_0xd463b0[_0x148d85(0x491)](_0x148d85(0x45b)+'ss\x200x',_0x36b197[_0x148d85(0x599)+'ing'](0x13ec+0x22c5+-0xaed*0x5)),'\x20past'+_0x148d85(0x5d0)+_0x148d85(0x3e4)+'0x')+_0x520acd[_0x148d85(0x29f)+_0x148d85(0x56e)][_0x148d85(0x599)+_0x148d85(0x2e7)](0x210+0x451+-0x3*0x21b),undefined;}try{_0x4c0276['ok']++;switch(_0x12294){case'u8':return _0x520acd['getUi'+_0x148d85(0x5f7)](_0x36b197);case'i8':return _0x520acd[_0x148d85(0x478)+'t8'](_0x36b197);case'i16':return _0x520acd['getIn'+'t16'](_0x36b197,!![]);case _0x148d85(0x360):return _0x520acd[_0x148d85(0x1fe)+'nt16'](_0x36b197,!![]);case _0x148d85(0x358):return _0x520acd[_0x148d85(0x478)+_0x148d85(0x4bf)](_0x36b197,!![]);case _0xd463b0[_0x148d85(0x41d)]:return _0x520acd[_0x148d85(0x1fe)+'nt32'](_0x36b197,!![]);case'f32':return _0x520acd[_0x148d85(0x300)+_0x148d85(0x410)](_0x36b197,!![]);case _0x148d85(0x386):return _0x520acd[_0x148d85(0x300)+'oat64'](_0x36b197,!![]);default:return _0x520acd[_0x148d85(0x478)+'t32'](_0x36b197,!![]);}}catch(_0x3dff0d){return _0x4c0276['faile'+'d']++,_0x4c0276[_0x148d85(0x58c)+_0x148d85(0x42c)]=_0x4c0276[_0x148d85(0x58c)+_0x148d85(0x42c)]||_0xd463b0[_0x148d85(0x20b)](String,_0x3dff0d&&_0x3dff0d[_0x148d85(0x590)+'ge']||_0x3dff0d)['slice'](0x11*-0x11+-0x1d3c*-0x1+-0x59f*0x5,0x3*-0xccb+0x114f+0x1*0x158a),undefined;}}function _0x203407(_0x594007,_0x71f7f7,_0x5dc710){var _0xc46e83=_0x5d38bd,_0x2607d2={'kONaE':function(_0x4b4afc,_0x5253c7){return _0x4b4afc-_0x5253c7;}};if(_0xd463b0['GElVW'](_0xc46e83(0x50e),_0xc46e83(0x50e))){var _0x5d61a1=_0xd463b0['xyClo'](_0x668726);if(!_0x5d61a1||_0xd463b0[_0xc46e83(0x390)](_0x594007,0x1fa2*0x1+0x221*0x1+-0x21c3)||_0xd463b0[_0xc46e83(0x455)](_0x594007+(-0x337*-0x2+0x851*-0x3+0x1289),_0x5d61a1[_0xc46e83(0x29f)+_0xc46e83(0x56e)]))return![];try{if(_0xd463b0[_0xc46e83(0x40b)](_0xc46e83(0x485),'GzqEs')){switch(_0x71f7f7){case'u8':case'i8':_0x5d61a1['setUi'+'nt8'](_0x594007,_0x5dc710&0x1b2d+-0x284*0x4+0x80f*-0x2);break;case _0xc46e83(0x391):case'u16':_0x5d61a1[_0xc46e83(0x33b)+_0xc46e83(0x473)](_0x594007,_0x5dc710|-0xa0b+0x7*-0x78+-0x3*-0x471,!![]);break;case _0xc46e83(0x358):case'u32':_0x5d61a1[_0xc46e83(0x33b)+_0xc46e83(0x4bf)](_0x594007,_0xd463b0['PuiFB'](_0x5dc710,-0x17*-0xf1+-0x5*0x569+-0x2b3*-0x2),!![]);break;case _0xd463b0['Rhrkh']:_0x5d61a1['setFl'+_0xc46e83(0x410)](_0x594007,_0x5dc710,!![]);break;default:_0x5d61a1[_0xc46e83(0x33b)+_0xc46e83(0x4bf)](_0x594007,_0x5dc710|0x101*-0x1+-0x720+0x821,!![]);}return!![];}else{_0x3d60f9[_0x47c2bc]='0x'+_0x177309[_0x2b7829]['ptr'][_0xc46e83(0x599)+'ing'](0xb1a+0x1*-0x129c+0x792);if(_0x3c0afe[_0x2eb4f4][_0xc46e83(0x23e)+_0xc46e83(0x45d)])_0x4a5a1f['push'](_0x5f42e4);}}catch(_0x18820d){return![];}}else try{return _0x248240();}catch(_0x7ef12c){return{'version':_0x26d335,'when':new _0x5445c6()[_0xc46e83(0x3a2)+_0xc46e83(0x544)+'g'](),'elapsedMs':_0x2607d2[_0xc46e83(0x214)](_0x2a0a3e[_0xc46e83(0x573)](),_0x1ee191),'host':_0x49e81c,'uwmk':!!(_0x52787c[_0xc46e83(0x5f1)+_0xc46e83(0x560)+_0xc46e83(0x355)]&&_0x24a69f[_0xc46e83(0x5f1)+_0xc46e83(0x560)+'dkit']['Runti'+'me']),'il2CppContext':![],'arm':_0x2e4cfe,'hooksTotal':_0x20544a['lengt'+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x364f1c(_0x7ef12c&&_0x7ef12c['messa'+'ge']||_0x7ef12c)};}}var _0x27a070={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':_0xd463b0[_0x5d38bd(0x2e0)]},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':_0xd463b0['tTUav']},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0x21c96a(_0x213f6c){var _0x58b627=_0x5d38bd,_0x468268='';for(var _0x123ba7=-0x115d*-0x1+0x5d1+-0x6*0x3dd;_0xd463b0['VnrgM'](_0x123ba7,_0x213f6c['lengt'+'h']);_0x123ba7++){var _0x4ed240=_0x213f6c[_0x123ba7]['toStr'+'ing'](0x1*-0x89f+0x1*-0x22e+0x3*0x39f);_0x468268+=(_0x4ed240[_0x58b627(0x3a0)+'h']<-0xd+-0x10*-0x142+-0xb*0x1d3?'0':'')+_0x4ed240;}return _0x468268;}function _0x264ed0(_0xb9b97d,_0x5a453e,_0x36c218){var _0x82a56a=_0x5d38bd,_0x230f9f=_0x668726();if(!_0x230f9f){if('TgTfH'===_0x82a56a(0x5a6))return _0x4c0276['faile'+'d']++,_0x4c0276[_0x82a56a(0x58c)+_0x82a56a(0x42c)]=_0x4c0276['lastE'+'rror']||_0xd463b0[_0x82a56a(0x430)],null;else _0x4b1dd6=_0x345ea2();}if(_0x5a453e<-0x1*-0xa9f+-0x2*0x436+-0x233||_0xd463b0[_0x82a56a(0x53d)](_0x5a453e,_0x36c218)>_0x230f9f[_0x82a56a(0x29f)+_0x82a56a(0x56e)])return _0x4c0276[_0x82a56a(0x3d7)+'d']++,_0x4c0276[_0x82a56a(0x58c)+'rror']=_0x4c0276[_0x82a56a(0x58c)+_0x82a56a(0x42c)]||_0xd463b0['wmXgB']('addre'+_0x82a56a(0x1eb),(_0xb9b97d+_0x5a453e)[_0x82a56a(0x599)+_0x82a56a(0x2e7)](0x9d2+-0x11e9+0x827*0x1))+('\x20past'+'\x20heap'+'\x20end\x20'+'0x')+_0x230f9f[_0x82a56a(0x29f)+_0x82a56a(0x56e)]['toStr'+_0x82a56a(0x2e7)](-0xf2b*-0x2+-0x10ad*0x1+-0xd99),null;try{if('LsWLF'!==_0xd463b0[_0x82a56a(0x2fb)]){var _0x22a0ca=new Uint8Array(_0x36c218);for(var _0xbea62c=0x806+-0x31*0x16+-0x3d0;_0xd463b0['WHlhf'](_0xbea62c,_0x36c218);_0xbea62c++)_0x22a0ca[_0xbea62c]=_0x230f9f['getUi'+'nt8'](_0xd463b0['HxmMP'](_0xb9b97d+_0x5a453e,_0xbea62c));return _0x4c0276['ok']++,_0x22a0ca;}else return null;}catch(_0x2047b8){return _0x4c0276[_0x82a56a(0x3d7)+'d']++,_0x4c0276[_0x82a56a(0x58c)+_0x82a56a(0x42c)]=_0x4c0276[_0x82a56a(0x58c)+_0x82a56a(0x42c)]||_0xd463b0['wEBNt'](String,_0x2047b8&&_0x2047b8[_0x82a56a(0x590)+'ge']||_0x2047b8)[_0x82a56a(0x4e3)](-0x5*-0x183+-0xb29+0x39a,0x29*-0x3a+0x2173+0x4bd*-0x5),null;}}function _0x3aba4d(_0x265b65,_0x52828c,_0x293fac){var _0x4d115e=_0x5d38bd,_0x24cfae=_0x27a070[_0x293fac],_0xa07801=_0x264ed0(_0x265b65,_0x52828c,_0x24cfae[_0x4d115e(0x3d5)]);if(!_0xa07801)return null;var _0x44b284=new DataView(_0xa07801[_0x4d115e(0x297)+'r'],_0xa07801[_0x4d115e(0x2ce)+_0x4d115e(0x579)],_0xa07801[_0x4d115e(0x29f)+'ength']),_0x4faaf7=_0x44b284['getIn'+'t32'](_0x24cfae['key'],!![]),_0x19cf5d=_0x44b284['getIn'+'t32'](_0x24cfae['hidde'+'n'],!![]),_0x338600=_0xd463b0['hPdjo'](_0x44b284['getUi'+_0x4d115e(0x5f7)](_0x24cfae[_0x4d115e(0x56f)+'d']),-0x6*0x4bf+0x1fa8+-0x32d*0x1),_0x1edc18=_0x293fac===_0x4d115e(0x3ce)?_0x44b284[_0x4d115e(0x300)+'oat32'](_0x24cfae[_0x4d115e(0x2fc)],!![]):_0xd463b0[_0x4d115e(0x1cd)](_0x293fac,'obfI')?_0x44b284[_0x4d115e(0x478)+'t32'](_0x24cfae['fake'],!![]):_0x44b284['getUi'+_0x4d115e(0x5f7)](_0x24cfae[_0x4d115e(0x2fc)]),_0x5e85f0=_0x44b284[_0x4d115e(0x1fe)+_0x4d115e(0x5f7)](_0x24cfae['activ'+'e'])&-0x15d4+0x18a+-0x40f*-0x5;return{'keyAtOffset0':_0x4faaf7,'hidden':_0x19cf5d,'inited':_0x338600,'fake':_0x1edc18,'act':_0x5e85f0,'hex':_0xd463b0[_0x4d115e(0x563)](_0x21c96a,_0xa07801),'alt':_0x293fac===_0xd463b0['JTFfg']?_0x19cf5d^(_0x1edc18|-0x190d+0x1362+0x1*0x5ab):null};}function _0x34c35a(_0x12e820,_0x1f8320,_0x14e209){var _0x33d34d=_0x5d38bd;if(_0x12e820===_0x33d34d(0x3ce))return _0xfa5db1(_0x1f8320^_0x14e209);if(_0x12e820==='obfI')return _0x1f8320^_0x14e209|0x1269*0x1+0x3*0x92b+0xf4e*-0x3;return _0xd463b0[_0x33d34d(0x335)]((_0x1f8320^_0x14e209)&0x6*0x3da+0x11c0+-0x27dd,-0x250b+-0x1590+0x3a9b*0x1)?-0x562+0x7b*-0xf+0xc98:-0x1840*0x1+0xa6d+0xdd3;}function _0x153588(_0x21a9c6,_0x5035a1,_0x22fb65){var _0x15596f=_0x5d38bd,_0x4f2c8f=_0x27a070[_0x22fb65];if(!_0x4f2c8f)return null;var _0x5c8346=_0x2110bb(_0x21a9c6+_0x5035a1+_0x4f2c8f[_0x15596f(0x258)],'u8'),_0x1302af=_0xd463b0[_0x15596f(0x536)](_0x2110bb,_0xd463b0[_0x15596f(0x36a)](_0x21a9c6,_0x5035a1)+_0x4f2c8f[_0x15596f(0x498)+'n'],_0xd463b0['tTUav']),_0x5fbd3=_0x2110bb(_0xd463b0[_0x15596f(0x288)](_0x21a9c6+_0x5035a1,_0x4f2c8f['inite'+'d']),'u8'),_0x4d4c6b=_0xd463b0['PkxyD'](_0x2110bb,_0x21a9c6+_0x5035a1+_0x4f2c8f['fake'],_0xd463b0['qrwdq'](_0x22fb65,_0x15596f(0x3ce))?_0xd463b0['Rhrkh']:_0xd463b0[_0x15596f(0x376)](_0x22fb65,_0x15596f(0x4a4))?'i32':'u8'),_0x405c04=_0xd463b0['PkxyD'](_0x2110bb,_0x21a9c6+_0x5035a1+_0x4f2c8f[_0x15596f(0x454)+'e'],'u8');if(_0x5c8346===undefined||_0x1302af===undefined||_0xd463b0['ADMWR'](_0x4d4c6b,undefined)||_0xd463b0[_0x15596f(0x2ff)](_0x405c04,undefined))return null;_0x5c8346&=0x7*-0x251+-0x1497+0x1*0x25cd,_0x1302af|=-0x10f*0x3+-0x1b17+0x4*0x791,_0x5fbd3=_0xd463b0['hPdjo'](_0x5fbd3||0x6a1*-0x4+-0xc*-0x19b+0x1d0*0x4,0x2f*0xc+-0x1360+0x112d),_0x405c04&=-0x24b7+-0x2*0xcda+0x3e6c;var _0x9101f8;if(_0xd463b0['ADMWR'](_0x22fb65,_0x15596f(0x3ce)))_0x9101f8=_0xd463b0[_0x15596f(0x563)](_0xfa5db1,_0xd463b0[_0x15596f(0x4a2)](_0x1302af,_0x5c8346));else{if(_0x22fb65===_0xd463b0['JTFfg'])_0x9101f8=_0xd463b0['iWgwt'](_0x1302af,_0x5c8346)|0x976*-0x2+-0xc6a+0x1f56;else _0x9101f8=_0xd463b0[_0x15596f(0x204)](_0xd463b0[_0x15596f(0x4f3)](_0x1302af,_0x5c8346),-0x32d+-0xc6+-0x3*-0x1a6)!==0x192f*0x1+0x127*0x10+-0x2b9f?-0xa99*0x3+0x1ad*-0xb+0x323b:-0xe25+-0x2541+0x3366;}return{'real':_0x9101f8,'fake':_0x4d4c6b,'act':_0x405c04,'init':_0x5fbd3,'key':_0x5c8346,'hidden':_0x1302af};}function _0x292157(_0x1e16fe,_0xea1ca1,_0x17c75e,_0x38a626){var _0x3aabd8=_0x5d38bd,_0x459d4e=_0xd463b0[_0x3aabd8(0x213)]['split']('|'),_0x4c1716=0x258+-0x2393+0x213b;while(!![]){switch(_0x459d4e[_0x4c1716++]){case'0':if(!_0x3d990c)return![];continue;case'1':var _0x15e472=_0x27a070[_0x17c75e];continue;case'2':return _0x203407(_0xd463b0['Gildo'](_0x1e16fe,_0xea1ca1)+_0x15e472[_0x3aabd8(0x498)+'n'],_0xd463b0['tTUav'],_0x4f8b42|-0x2677+0xdcf+0x18a8)&&_0x203407(_0xd463b0['rrGaA'](_0x1e16fe+_0xea1ca1,_0x15e472['fake']),_0x13a5ab,_0x9e80a8)&&_0x203407(_0xd463b0[_0x3aabd8(0x443)](_0x1e16fe,_0xea1ca1)+_0x15e472['activ'+'e'],'u8',-0x1*0x1981+-0x3*0x3f1+0x2554);case'3':var _0x4f8b42;continue;case'4':var _0x512f0f=_0x3d990c['key'];continue;case'5':var _0x9e80a8=_0x17c75e==='obfF'?_0x38a626:_0x17c75e===_0xd463b0['JTFfg']?_0xd463b0['PTDgu'](_0x38a626,-0x2ea*0x6+-0x1a5a+0x2bd6):_0x38a626?-0xe*-0x1a1+0x1*0x17f+0x613*-0x4:0x1*0x37+0x43*-0x74+0x1e25;continue;case'6':var _0x13a5ab=_0x17c75e===_0x3aabd8(0x3ce)?_0xd463b0[_0x3aabd8(0x44c)]:_0x17c75e==='obfI'?_0x3aabd8(0x358):'u8';continue;case'7':if(_0x17c75e==='obfF')_0x4f8b42=_0xd463b0[_0x3aabd8(0x4d5)](_0x56e99a(_0x38a626),_0x512f0f);else{if(_0xd463b0['BtKxd'](_0x17c75e,'obfI'))_0x4f8b42=_0xd463b0[_0x3aabd8(0x4d5)](_0xd463b0['PuiFB'](_0x38a626,-0xe8e*-0x1+0x32b+-0xd*0x15d),_0x512f0f);else _0x4f8b42=_0xd463b0['MdnAQ'](_0xd463b0[_0x3aabd8(0x204)](_0x38a626?-0x2434+-0xc33+-0x1834*-0x2:0x6b*0x1f+0xa*-0x392+0x16bf,0x1*-0x1ef4+-0x2233+-0x2113*-0x2),_0x512f0f);}continue;case'8':var _0x3d990c=_0x153588(_0x1e16fe,_0xea1ca1,_0x17c75e);continue;case'9':if(!_0x15e472)return![];continue;}break;}}var _0x4f8a2a={'FPScontroller':[[0x127*0x21+-0x671*0x3+-0x4a9*0x4,_0xd463b0[_0x5d38bd(0x32f)]],[-0x1c8c+-0x35a*0x7+0x1*0x342a,_0x5d38bd(0x3ce)],[-0x2b*-0x13+0x16fc+-0x19ed,_0xd463b0[_0x5d38bd(0x32f)]],[-0xf3*-0x7+0x1674+0x1cc1*-0x1,'obfF'],[-0x2603*-0x1+0x1435*-0x1+-0x9*0x1ee,'obfF'],[0x1*-0x1e86+0x5d7+0x1937*0x1,_0x5d38bd(0x3ce)],[0x57e+-0x1513*0x1+0x1035*0x1,'obfF'],[-0x20*-0x4f+-0xb1*0x36+0x1c2e,_0x5d38bd(0x506)],[-0x18c8+-0x8cc+-0x896*-0x4,'obfF'],[-0x1349+0x162c+0x3*-0xad,_0x5d38bd(0x358)],[0x1*-0x113f+0x7*0x2f3+-0x2*0x13d,'u8'],[0x1081*-0x2+-0x1505+0x1*0x36f7,'obfF'],[0x2*-0xb2d+0x22fa+-0xb98,'i32'],[0xf00+-0x177+-0x17*0x8b,'u8'],[0x2*-0x26+-0x1c81*0x1+0x1ddd,'i32'],[0x50*-0x24+0xf0d+0x11*-0x29,'u8'],[0x6d*0x33+0x160c+0x2*-0x1557,'u8'],[-0x1689+-0x10d+-0xc59*-0x2,_0xd463b0[_0x5d38bd(0x32f)]],[-0x1416+0xb*0x191+-0x40f*-0x1,_0x5d38bd(0x3ce)],[-0x1508+-0x455*0x4+0x234*0x12,_0x5d38bd(0x472)],[0xa45+0x1cef+-0x25e4,'f32'],[-0x1b6*-0x1+0x629+0x1*-0x673,_0xd463b0[_0x5d38bd(0x44c)]],[0x76*-0x1e+-0x1*0x1fba+0x2efe,_0x5d38bd(0x472)],[-0xda6+0x984+-0x2*-0x2d5,'u8'],[-0x23bb+0x6*0x3e5+0xde9,_0xd463b0[_0x5d38bd(0x44c)]],[-0xe*0x1af+0xb01+0x1*0xe35,'u8'],[-0xdbf+0x162*0xc+-0x125*0x1,'f32'],[0x9*-0x12e+-0xb79*0x1+0x17cf,_0xd463b0[_0x5d38bd(0x44c)]],[-0x11f*0x7+-0x2189+0x2b1e,'u8'],[-0x244d*-0x1+-0x988*-0x4+-0x122c*0x4,'u8'],[0x1b7f*-0x1+-0x1*-0x14bd+0x882,'obfF'],[0x1*0x837+0x16af+0xe87*-0x2,_0x5d38bd(0x472)],[0x3e1*0x2+0x3*0x665+-0x1915,'u8'],[-0x96b+0x3eb*-0x4+-0x213*-0xd,_0xd463b0['vdsPI']],[0x1d*-0x42+-0x5*-0xdf+-0x1*-0x527,_0x5d38bd(0x506)],[-0x2*0xc69+0x4c8+0x1622,_0xd463b0['Rhrkh']],[-0x1*0x8ec+0x11aa+-0x6a2,_0x5d38bd(0x472)],[-0x2b1*0xe+0x7ef*0x2+0x2*0xc0e,_0xd463b0['Rhrkh']],[-0xe6*-0xc+-0x487+-0x3f1,_0x5d38bd(0x472)],[-0x17f7+-0x15f1+-0x3f*-0xc4,_0xd463b0[_0x5d38bd(0x44c)]],[0x6*-0x6d+-0x2*-0xe9b+-0x1850,'f32'],[-0x5ed+0x7*-0x41c+0x250d,'u8'],[0x1b0+-0x16c7+-0x13*-0x13c,'u8'],[-0x22bd*-0x1+0x9*-0x121+-0x1636,'u8'],[-0x1d1a+0x903+0x1677,_0x5d38bd(0x472)],[-0x165*-0x19+-0x1292+-0xde7,'u8'],[0x1f0c+0x1c87+-0x1*0x392e,'u8'],[0x3*0x44e+0x13e0+-0xf31*0x2,_0xd463b0['Rhrkh']],[-0x2125*0x1+0x18b*0x13+0x50*0x14,_0xd463b0['Rhrkh']],[-0x286+0x16*0x8e+-0x73e,'f32'],[-0x330+-0x3*-0x7d8+-0x11e4,_0xd463b0[_0x5d38bd(0x44c)]],[-0x64d+-0x40f*-0x4+-0x1*0x777,'f32'],[0xb28*-0x3+-0x2324+0x4718,'f32'],[0x1530+0x1*0xa9f+-0x1d4f*0x1,'f32'],[-0x1b79*0x1+0x268a+-0x87d*0x1,'u8'],[-0x1*0x1ac8+-0xccd+-0x4b1*-0x9,'f32'],[0xc*-0x1b7+0x1235+0x517,_0xd463b0['Rhrkh']],[-0x128e*0x1+-0x131a+0x2864,_0xd463b0[_0x5d38bd(0x44c)]],[-0x90+0x298*-0x5+-0x824*-0x2,_0xd463b0[_0x5d38bd(0x44c)]],[-0x3a*0x11+0xb09+-0x46b,'u8'],[-0x1*0x19e4+-0x2*0x8f0+0x2e89,'u8'],[0x1661+-0x15b0+-0x217*-0x1,_0x5d38bd(0x472)],[0x2*-0x680+-0x4d*-0x29+-0x7*-0x81,'f32'],[-0x362*0x6+-0x5f3*0x1+-0x42d*-0x7,_0xd463b0['Rhrkh']],[0x2d1+0x2557*-0x1+0x2586,_0xd463b0['Rhrkh']],[0xcac+-0xe86+0x4de,'f32'],[-0x1f96+-0x3*0x96b+0x3edf,_0xd463b0['Rhrkh']],[0x219f+0x1968+-0x12a5*0x3,'u8'],[-0x19*-0x85+-0x1*0x939+-0x9c,_0x5d38bd(0x358)],[-0x7ea*0x1+-0x33f+0x1*0xe55,_0xd463b0['Rhrkh']],[0x38f+0x2513+-0x2572,'f32'],[0x235f*0x1+-0x1737+-0xc*0xbf,_0x5d38bd(0x472)],[0xefd+-0x6f7*0x4+0x101b,_0xd463b0[_0x5d38bd(0x44c)]],[-0x1*0x1369+-0x12e3+0x298c,'u8'],[-0x24ca+0x2f*0x3+0x6*0x695,'u8'],[0x11d2+0x7*0xcb+-0x1413,'u8'],[0x1cf4+-0xd29*-0x2+0x5*-0xa65,'u8'],[0x1e1*0x2+0x2318+-0x145*0x1c,'u8'],[-0x7*0x1f2+-0xfe*0x1+0x3e*0x4a,_0xd463b0['Rhrkh']],[0x19d1+0x1a04+-0x1*0x3081,_0xd463b0[_0x5d38bd(0x44c)]],[-0x2622+0x980+0x1ffa*0x1,_0x5d38bd(0x472)],[-0x12*0xa4+-0x9aa*-0x3+-0xe1a,_0x5d38bd(0x472)],[-0x54c*-0x3+-0x1123+-0xa9*-0x7,_0xd463b0[_0x5d38bd(0x44c)]],[-0x25a5+-0x1ae4+0x43ed,'u8'],[0xce0+0x1da9+0x2721*-0x1,_0xd463b0['Rhrkh']],[0x2172+-0x2*0xa78+0x48b*-0x2,_0x5d38bd(0x472)],[0x400+-0xabd+0xa2d,'u8'],[-0x16*0x1a5+-0xd1f+0x34e9,_0x5d38bd(0x472)],[-0x8bb+0xb20+0x13b,_0xd463b0['Rhrkh']],[-0xb56+-0x458+0x1*0x1352,_0xd463b0[_0x5d38bd(0x44c)]],[-0x2351+0xcd5+-0x346*-0x8,_0xd463b0[_0x5d38bd(0x2e0)]],[0x846*-0x2+-0x1ba3+0x1*0x2fe7,'u8'],[-0xdd5+0x13a4+-0x213,_0x5d38bd(0x358)],[-0x254d+0x1*-0x22f1+0x2*0x25ff,_0x5d38bd(0x472)],[-0x1*-0x19ae+0x1e60+-0x344a,_0x5d38bd(0x472)],[-0x10*-0x1e+0x1275+0x13*-0xdf,_0xd463b0['Rhrkh']],[-0x1*-0x1d36+0x13*0x159+-0x3305,'f32'],[-0x2*0x6d7+-0xc11*0x1+0x1d9b,_0x5d38bd(0x358)],[-0x1a13+-0x1318+0x310b,'u8'],[-0x12a*-0x1+-0x1a04*-0x1+0x5*-0x4a9,'u8'],[-0xb3*-0x33+-0x2f4+-0x1cd3,'u8'],[-0x196a+-0xc3f+0x298d,_0xd463b0['Rhrkh']],[0x1*-0xf73+-0x2418+-0xb17*-0x5,_0x5d38bd(0x358)]],'HealthScript':[[-0x334*0x5+-0x5f4+0x1*0x1650,'u8'],[-0x19*0xc5+-0x1*0xf29+0x22c2,_0x5d38bd(0x358)],[0x7*-0x89+-0x1*0xb7a+0xfb9,'f32'],[-0xc11*0x1+-0x210c+0x2da1,_0xd463b0[_0x5d38bd(0x44c)]],[0x689+0x1*0x1b2+-0x49*0x1b,_0xd463b0['Rhrkh']],[-0xff2+-0x8*0x257+-0x2336*-0x1,_0x5d38bd(0x472)],[0x1f7b+-0x494+-0x1a57,'f32'],[-0x2d*0x33+0x1b9b+0x22*-0x88,_0xd463b0['Rhrkh']],[-0x1190*0x1+0x2*0xc9b+-0x1f*0x3a,_0x5d38bd(0x358)],[0x14bd+-0x1d9b+-0x982*-0x1,_0xd463b0[_0x5d38bd(0x2e0)]],[0x9*0x119+0xb61+-0x24a*0x9,'u8'],[-0x17cb*0x1+0x74d+0x1127,'u8'],[0x1251+0xc50+-0x1df7*0x1,'u8'],[0x1*0x1d09+0x97+0x9a7*-0x3,'u8'],[-0x6ba+-0x11*-0x80+0x106*-0x1,_0xd463b0['JTFfg']],[0x6d8+-0x235+-0x3cf,_0x5d38bd(0x4a4)],[-0x1875*-0x1+0xe60+-0x25ed,_0x5d38bd(0x4a4)],[0xe41+0x530+-0x1275,_0xd463b0['JTFfg']],[-0x1859+-0x1*0x47+0x18*0x112,'obfI'],[-0xd2+0x1274+0x107e*-0x1,'obfB'],[0x1c51+-0x1716+-0xf*0x45,_0x5d38bd(0x3ce)],[0xa5c+0x1*0x15c5+0x1ed9*-0x1,_0xd463b0['Rhrkh']],[0x1fb4+0x1cfd*0x1+-0x3b65,_0xd463b0[_0x5d38bd(0x44c)]],[0x7bc+0x14b6*0x1+-0x2*0xd91,_0x5d38bd(0x472)],[-0x13ee+-0xbe5+0x171*0x17,'f32'],[-0x73*0x11+0xb15+0x3*-0xb2,_0x5d38bd(0x472)],[-0x7e8+-0x207a+-0xca*-0x35,'f32'],[0x1c1e+0x1e2f+-0x1*0x38d5,_0xd463b0['Rhrkh']],[-0x458+0x16e8+-0x1110,'u8'],[-0x1*0x32b+-0x5*-0x76f+-0x2074*0x1,'u8'],[0x1bc6+-0x212e+-0x6f8*-0x1,'i32']],'PlayerConfig':[],'WeaponManager':[[-0x2*0xa67+-0x185a*0x1+0x2d40,_0x5d38bd(0x358)],[-0x300+0x1*-0x15e3+-0x1*-0x18ff,_0xd463b0[_0x5d38bd(0x2e0)]],[0x81d*0x3+0x1*0x1389+-0x2bc0,'u8'],[0x150d*-0x1+-0x69d+0x1bce,'i32'],[0x2230+0x929+-0x623*0x7,_0xd463b0[_0x5d38bd(0x32f)]],[0x2e*-0xb3+0xb1d+0x1589,_0x5d38bd(0x472)],[0x1987*-0x1+-0x1789+0x13*0x29c,'i32'],[0xe8e+-0x1307+0x501,'u8'],[0x132f+0xa5c*0x2+-0x1*0x275e,'u8'],[0xac6+-0x416*0x3+0x5*0x68,_0x5d38bd(0x358)],[0x1902+0x4*0xa9+-0x1b16,_0x5d38bd(0x472)],[-0x10d*-0x24+-0x97*-0x17+0x5*-0xa29,_0x5d38bd(0x472)],[-0x427*0x1+0x2ac+0x227,_0xd463b0['tTUav']],[0x21c1+0x34f*0x5+-0x3190,'u8'],[0x2143+0x202a*0x1+-0x4091,_0xd463b0[_0x5d38bd(0x3ad)]],[-0x1*0xc+-0x24bc+0x22*0x11c,_0x5d38bd(0x4a4)],[-0x1452+-0xf9a+0x4*0x93c,'f32'],[-0x494+-0x1*-0xf6b+-0x9cf,'f32'],[0x260f+-0x7*0x132+0x1*-0x1ca5,_0x5d38bd(0x472)],[-0x1a05+0x1529+0x5f4,'f32'],[0x4*0x675+0x731+-0x1*0x1fe5,_0xd463b0[_0x5d38bd(0x44c)]],[0x18be+0x7*-0x65+-0x14d3,'u8'],[-0x25d+-0x1c3b+0x1fc4,_0xd463b0[_0x5d38bd(0x3ad)]],[0x21*-0x9b+-0x71+-0x92*-0x26,_0x5d38bd(0x4a4)],[-0x1b33+0x1ea8+0x221*-0x1,_0x5d38bd(0x4a4)],[0x2698+-0x6c*0x30+0x878*-0x2,_0x5d38bd(0x506)],[0x154+-0x7*0x167+0x9f1,_0x5d38bd(0x506)],[-0x1*0x4fb+-0x1*-0x15d+0x5*0x106,'obfB'],[0x3bf+-0x1d30+0x1afd,'obfB'],[-0x1c17+-0x1*-0x102e+0xd8d,_0x5d38bd(0x506)],[0x1f*0xcd+-0x638+-0x10eb,_0x5d38bd(0x4a4)],[-0x21b5+0x1*0xc9d+-0xa*-0x24a,_0xd463b0['tTUav']],[0x1fd3+-0x20c4+-0xf*-0x2f,'u8'],[-0x1975+-0x1685+-0xaa*-0x4b,_0xd463b0['tTUav']],[-0x1789+0x9d*0x23+0x3ea,_0x5d38bd(0x358)],[-0x3*0x3c4+0x83a+0x512,_0x5d38bd(0x358)],[-0xa*-0x379+0xf9d+-0x3043,'u8'],[0x2a+-0xf70+0x19*0xb2,'u8'],[-0x1*0xf59+-0x1*0x739+0x18af,'u8'],[0x1b*0x4d+0x1758+0xb*-0x2ab,'u8'],[0x8*0x4b1+0x2343+0x1*-0x46ac,'u8'],[-0x15bc+-0x1d02+-0x1*-0x350e,_0xd463b0['tTUav']],[0x2*-0xb+-0x3*-0xaca+-0x1df0,'u8']],'GG_GameManager':[[-0x1efa+0xb3d+-0x1*-0x13e1,'u8'],[0x1*-0x1b65+-0xcd6+0x2867*0x1,_0xd463b0['Rhrkh']],[0x1417*0x1+-0x7*0x143+-0x7*0x192,'u8'],[-0x96c+-0x1*-0x11bb+0x7*-0x126,'u8'],[0x97f+0x132b*0x2+-0x2f8d,_0x5d38bd(0x472)],[0x152c+-0x4f3+-0xfed,'f32'],[0x151d+-0x120a+0x1*-0x2c3,'i32'],[-0x1*0x7fb+0x18a3+0x5f*-0x2c,_0x5d38bd(0x358)],[0x1b36+-0x12ef+0x2a5*-0x3,'u8'],[0x25c8+0xea0+-0x33f4,'u8'],[-0x1fc*-0x8+-0x1be1+0x1f*0x67,_0x5d38bd(0x472)],[0x21dc+-0x1b97+0x1*-0x5c9,_0x5d38bd(0x472)],[-0xbe6*-0x1+-0x1*0x641+-0x515,'i32'],[0x235e*0x1+0x1eb9+0x21d*-0x1f,'u8'],[-0x760+-0x26c2+0x2ed6,_0xd463b0[_0x5d38bd(0x2e0)]],[0x654+0x3fa*-0x3+0x656,_0x5d38bd(0x358)],[-0x1bb2+-0xfea+0x2c5c,'i32'],[0x1a37+0x1a07+-0x3356,_0xd463b0['JTFfg']],[-0x775+0xf8c+-0x71b,_0x5d38bd(0x4a4)],[-0x2096+-0x72d+0x28d3,'obfI'],[-0x21be+0x1edf+0x40b,'u8'],[-0x1b80+-0x2000+0x3cb0,_0x5d38bd(0x358)],[0xf2+0x6c8+-0x656,'u8'],[-0x1414+-0x22a5+0x3829*0x1,_0x5d38bd(0x472)],[0x1*0xb51+0x7d7*-0x1+-0xfd*0x2,'u8'],[-0x1277+-0x7fc+0x1bfb,'u8'],[0x10b6+0xf85+0x1*-0x1e97,'u8'],[0x1*-0x1446+0x21cf+-0xbe1,_0x5d38bd(0x358)],[0x1d0f+-0x81*0x2f+-0x3b4,_0xd463b0['Rhrkh']],[-0x2b*-0xc0+-0x168c+0x4c*-0x1b,'u8'],[-0xa15+0x6*0x503+-0x124c,'u8'],[0x233c+0x44b*-0x5+-0x5*0x269,_0xd463b0['tTUav']],[0x16a*-0x16+0x1*-0x115b+-0x3233*-0x1,'i32'],[0x3d2+-0x1*0x1e7e+0x1c6c,_0xd463b0[_0x5d38bd(0x44c)]],[-0x2*-0x9ff+-0x781+-0xab9,_0xd463b0[_0x5d38bd(0x2e0)]],[0x76*-0x4f+0xe9b*0x1+0x1797,_0xd463b0[_0x5d38bd(0x44c)]],[0x2*-0x41b+0xb74+-0x172,'i32'],[0x2133*-0x1+-0x497+-0x25*-0x112,_0xd463b0['tTUav']]]};function _0x201ca6(_0x5765cc,_0xb299c6){var _0x50de10=_0x5d38bd,_0x3722f7={'nCYMw':_0x50de10(0x551),'EXFyI':function(_0x547465,_0x182fcb){var _0x5ed2ea=_0x50de10;return _0xd463b0[_0x5ed2ea(0x484)](_0x547465,_0x182fcb);},'YiSmK':'Updat'+'e','UNvhr':_0xd463b0[_0x50de10(0x2e0)],'MyAhD':function(_0x35cad6,_0x1a9bad,_0x5351b1){var _0x387782=_0x50de10;return _0xd463b0[_0x387782(0x413)](_0x35cad6,_0x1a9bad,_0x5351b1);},'XLRxT':function(_0x1b31a7,_0x26c55b){var _0x5141d1=_0x50de10;return _0xd463b0[_0x5141d1(0x5d9)](_0x1b31a7,_0x26c55b);},'STsTi':function(_0x4c79bd,_0x37cb6b){return _0x4c79bd+_0x37cb6b;},'HdaDy':function(_0x472ccd,_0x51ccdd){return _0xd463b0['JpHDI'](_0x472ccd,_0x51ccdd);},'xxLOd':function(_0x31a863,_0x482e8d){return _0x31a863-_0x482e8d;},'HakfZ':function(_0x2a90b5,_0x417312){return _0xd463b0['JhyGZ'](_0x2a90b5,_0x417312);},'mfhUv':'funct'+_0x50de10(0x55b),'AamoX':function(_0x40b674){return _0x40b674();}};return function(_0x1dc0f3){var _0x22f3c3=_0x50de10,_0x3b9a36={'wpUQj':function(_0x1e2968,_0x45d83e){var _0x5b5e72=_0xc99a;return _0x3722f7[_0x5b5e72(0x5ba)](_0x1e2968,_0x45d83e);},'rCWYU':function(_0x170cfa,_0x5e81d9){var _0x353e5b=_0xc99a;return _0x3722f7[_0x353e5b(0x431)](_0x170cfa,_0x5e81d9);}};try{var _0x4e37f9=_0x1dc0f3&&_0x1dc0f3['val']?_0x1dc0f3['val']():0x1cdc+0x1e22+-0x3afe;if(!_0x4e37f9)return;var _0x14b68c=_0x391f45[_0x5765cc];if(!_0x14b68c||_0x14b68c[_0x22f3c3(0x37b)]!==_0x4e37f9){_0x391f45[_0x5765cc]={'ptr':_0x4e37f9,'firstSeen':Date[_0x22f3c3(0x573)](),'hits':0x0,'replaced':!!_0x14b68c};try{if(_0x3722f7[_0x22f3c3(0x3c2)]('FjJQL','fOhpG')){var _0x13fe45=_0x3b5236[_0x22f3c3(0x33e)+'r'](function(_0x26cec3){return _0x26cec3['type']===_0x135275;})[0x1625+0x103*0xe+-0x244f];_0x57e40f={'type':_0xaa9d8c,'atMs':_0x3b9a36[_0x22f3c3(0x53c)](_0x3091e1['now'](),_0x1f189e),'originalFunc':!!(_0x13fe45&&_0x13fe45[_0x22f3c3(0x61a)]&&typeof _0x13fe45[_0x22f3c3(0x61a)][_0x22f3c3(0x3b5)+_0x22f3c3(0x1d2)+'nc']==='funct'+_0x22f3c3(0x55b)),'resolveGameAtFire':!!_0x422cdd(),'gameSourceAtFire':_0x235b28[_0x22f3c3(0x256)+'e']};}else{var _0x5d5d85=_0x4b5b4c['filte'+'r'](function(_0x524dc5){var _0x1739b1=_0x22f3c3;return _0x3b9a36[_0x1739b1(0x5fe)](_0x524dc5['type'],_0x5765cc);})[-0x1*0x165+0x3*-0x6ee+0x162f];_0x54649c={'type':_0x5765cc,'atMs':Date[_0x22f3c3(0x573)]()-_0x44caad,'originalFunc':!!(_0x5d5d85&&_0x5d5d85[_0x22f3c3(0x61a)]&&typeof _0x5d5d85[_0x22f3c3(0x61a)][_0x22f3c3(0x3b5)+'nalFu'+'nc']===_0x3722f7[_0x22f3c3(0x235)]),'resolveGameAtFire':!!_0x3722f7[_0x22f3c3(0x32d)](_0x46f52e),'gameSourceAtFire':_0x4c0276[_0x22f3c3(0x256)+'e']};}}catch(_0x2e4a24){}}_0x391f45[_0x5765cc][_0x22f3c3(0x4ee)]++;if(!_0xb299c6){if(_0x22f3c3(0x32c)==='vOwwR'){var _0x5d5d85=_0x4b5b4c['filte'+'r'](function(_0x169884){var _0x3f4ed7=_0x22f3c3;return _0x3722f7[_0x3f4ed7(0x3b8)]!==_0x3f4ed7(0x551)?_0x8785de&&_0x87e42a[_0x3f4ed7(0x297)+'r']?_0x1f90b7['buffe'+'r'][_0x3f4ed7(0x29f)+_0x3f4ed7(0x56e)]:0x8*0x222+-0x135c+0x54*0x7:_0x3722f7[_0x3f4ed7(0x3c2)](_0x169884[_0x3f4ed7(0x1d3)],_0x5765cc);})[-0x1*0x1e5f+0x1380+0xadf];if(_0x5d5d85&&_0x5d5d85[_0x22f3c3(0x61a)])try{_0x5d5d85[_0x22f3c3(0x61a)]['enabl'+'ed']=![];}catch(_0x240929){}}else{var _0x5aa591=_0x451251[_0x3199de];try{var _0x5f4842=_0x2bb12a['hookP'+_0x22f3c3(0x2c7)]({'typeName':_0x5aa591[_0x22f3c3(0x1d3)],'methodName':_0x3722f7[_0x22f3c3(0x5d1)],'params':[_0x3722f7['UNvhr'],_0x3722f7['UNvhr']],'returnType':_0x4f6707},_0x3722f7['MyAhD'](_0xb82d32,_0x5aa591['type'],_0x5aa591[_0x22f3c3(0x336)]));_0x6491e1['push']({'type':_0x5aa591[_0x22f3c3(0x1d3)],'hook':_0x5f4842,'keep':_0x5aa591[_0x22f3c3(0x336)]});}catch(_0x545a5d){_0x1aae4b['push'](_0x3722f7['XLRxT'](_0x3722f7[_0x22f3c3(0x5f4)](_0x5aa591[_0x22f3c3(0x1d3)],':\x20'),_0x3722f7['HdaDy'](_0x4b49d1,_0x545a5d&&_0x545a5d[_0x22f3c3(0x590)+'ge']||_0x545a5d)['slice'](0xa*0x61+0x3f1+-0x7bb*0x1,0x16*-0x100+-0x1f*-0x9e+0x37e*0x1)));}}}}catch(_0x13ddb7){}};}function _0x63cf43(){var _0x2ac86f=_0x5d38bd,_0x558b0d={'Llymm':_0x2ac86f(0x510)+_0x2ac86f(0x5dc)+_0x2ac86f(0x50b)+'s','CLPgc':_0x2ac86f(0x383),'uRIuG':function(_0x4d6e93,_0xc4a2d2){return _0x4d6e93+_0xc4a2d2;},'fzkcH':'\x20@\x20'};if('nxYag'!==_0xd463b0[_0x2ac86f(0x2a0)]){if(!_0x546da9[_0x2ac86f(0x30d)+_0x2ac86f(0x4a7)+_0x2ac86f(0x377)](_0x2ac86f(0x510)+_0x2ac86f(0x5dc)+_0x2ac86f(0x50b)+'s')){var _0x23fbac=_0x5565c7['creat'+_0x2ac86f(0x322)+_0x2ac86f(0x521)]('style');_0x23fbac['id']=_0x558b0d[_0x2ac86f(0x363)],_0x23fbac['textC'+_0x2ac86f(0x1da)+'t']=_0x2ac86f(0x207)+_0x2ac86f(0x1f3)+_0x2ac86f(0x24f)+_0x2ac86f(0x2dc)+_0x2ac86f(0x317)+'}',(_0x20d841[_0x2ac86f(0x5ee)]||_0x4c83db[_0x2ac86f(0x21e)+'entEl'+'ement'])[_0x2ac86f(0x35d)+_0x2ac86f(0x4d4)+'d'](_0x23fbac);}return _0x5b3e3d=_0x33058c[_0x2ac86f(0x1ed)+'eElem'+'ent'](_0x558b0d['CLPgc']),_0x97a4b5['id']=_0x2ac86f(0x510)+_0x2ac86f(0x5dc)+'v2',_0x2da73d[_0x2ac86f(0x3c0)][_0x2ac86f(0x35d)+_0x2ac86f(0x4d4)+'d'](_0x38ba2c),_0x5c493b;}else{if(_0x4b5b4c['lengt'+'h'])return!![];if(!window[_0x2ac86f(0x5f1)+_0x2ac86f(0x560)+_0x2ac86f(0x355)]||!window[_0x2ac86f(0x5f1)+_0x2ac86f(0x560)+'dkit'][_0x2ac86f(0x236)+'me'])return![];var _0x324c1a=window[_0x2ac86f(0x5f1)+_0x2ac86f(0x560)+_0x2ac86f(0x355)]['Runti'+'me'];if(!_0x324c1a[_0x2ac86f(0x54a)+'ns']||!_0x324c1a[_0x2ac86f(0x54a)+'ns']['lengt'+'h'])return![];_0x55f77f=window[_0x2ac86f(0x5f1)+'WebMo'+_0x2ac86f(0x355)][_0x2ac86f(0x28b)+_0x2ac86f(0x2a8)+'er'],_0x83bd16=_0x83bd16||_0x324c1a['plugi'+'ns'][_0x324c1a['plugi'+'ns'][_0x2ac86f(0x3a0)+'h']-(-0x22db+0x20fe+0x1de)];if(!_0x83bd16||typeof _0x83bd16[_0x2ac86f(0x4f6)+_0x2ac86f(0x2c7)]!==_0xd463b0[_0x2ac86f(0x3f8)])return![];for(var _0x57fef4=-0x1*-0xb1e+-0x1*0x180e+-0x3*-0x450;_0xd463b0[_0x2ac86f(0x390)](_0x57fef4,_0x4b4404[_0x2ac86f(0x3a0)+'h']);_0x57fef4++){if(_0xd463b0['yOkaR'](_0x2ac86f(0x5fb),'wfEpB')){var _0xa7c245=_0x4b4404[_0x57fef4];try{if(_0xd463b0[_0x2ac86f(0x484)](_0x2ac86f(0x243),_0x2ac86f(0x2e5)))try{_0x2c483f=_0x2a54e4['keys'](_0x3656e7)[_0x2ac86f(0x4e3)](0x2566+-0x15db+-0xad*0x17,0x22a3+-0x1f3d+-0x12*0x2f);}catch(_0x5cefb7){}else{var _0x24cc1e=_0x83bd16['hookP'+_0x2ac86f(0x2c7)]({'typeName':_0xa7c245[_0x2ac86f(0x1d3)],'methodName':_0xd463b0[_0x2ac86f(0x41b)],'params':['i32','i32'],'returnType':undefined},_0xd463b0['zbgcU'](_0x201ca6,_0xa7c245[_0x2ac86f(0x1d3)],_0xa7c245['keep']));_0x4b5b4c['push']({'type':_0xa7c245[_0x2ac86f(0x1d3)],'hook':_0x24cc1e,'keep':_0xa7c245['keep']});}}catch(_0x27bd8f){_0x30cfd2['push'](_0xd463b0[_0x2ac86f(0x242)](_0xa7c245['type']+':\x20',String(_0x27bd8f&&_0x27bd8f[_0x2ac86f(0x590)+'ge']||_0x27bd8f)['slice'](-0x21d5+0x18ab+0x33*0x2e,0x1b*-0xf2+-0x18f+0xad*0x29)));}}else{var _0x2951f1=_0x399b93[_0x37fe5d];_0x271b51['push'](_0x558b0d['uRIuG'](_0x2951f1,_0x558b0d[_0x2ac86f(0x259)])+_0x5af290[_0x2951f1]);}}return _0x4b5b4c[_0x2ac86f(0x3a0)+'h']>0x3*0xb47+-0x140f+-0xdc6;}}function _0x85300f(){var _0x19a259=_0x5d38bd,_0x2a153b=-0x2*0x1bd+0x726*0x1+0x5*-0xbc;for(var _0x3b418b=-0x10c*0x19+-0x10e7+-0x1*-0x2b13;_0xd463b0[_0x19a259(0x619)](_0x3b418b,_0x4b5b4c[_0x19a259(0x3a0)+'h']);_0x3b418b++){if(_0x4b5b4c[_0x3b418b][_0x19a259(0x61a)]&&_0x4b5b4c[_0x3b418b][_0x19a259(0x61a)][_0x19a259(0x52d)+_0x19a259(0x375)]!==undefined)_0x2a153b++;}return _0x2a153b;}function _0xe3dcc6(){var _0x36f94a=_0x5d38bd,_0x5cbf87=-0x7e3+-0x21de+-0x5f7*-0x7;for(var _0x3548ef=0x9c4+-0x167+-0x85d;_0xd463b0['WHlhf'](_0x3548ef,_0x4b5b4c[_0x36f94a(0x3a0)+'h']);_0x3548ef++){if(_0x4b5b4c[_0x3548ef]['hook']&&_0x4b5b4c[_0x3548ef][_0x36f94a(0x61a)]['appli'+'ed'])_0x5cbf87++;}return _0x5cbf87;}var _0xddc9b3=null,_0x589edb=[],_0x190a45={},_0x54649c=null;function _0x466848(_0x2c5adb){var _0x292da8=_0x5d38bd,_0x1ad235={'WCwpB':function(_0x551738,_0x3da888){return _0xd463b0['gBZHX'](_0x551738,_0x3da888);},'biMUN':function(_0x33981d,_0x139fb7){return _0x33981d*_0x139fb7;}};try{if(_0xd463b0[_0x292da8(0x4e9)](!_0x55f77f,!_0x2c5adb))return null;var _0x1ff450=new _0x55f77f(_0x2c5adb)[_0x292da8(0x287)+_0x292da8(0x5be)+'me']();return _0x1ff450===undefined?null:_0x1ff450;}catch(_0x27d466){return _0x292da8(0x5e2)===_0x292da8(0x5e2)?null:_0x1ad235[_0x292da8(0x4de)](_0x56612f['abs'](_0x4b81f4-_0x2ffeb6),_0x2e17f2['max'](-0x13df+0x13*-0x59+0x1*0x1a7b,_0x1ad235[_0x292da8(0x266)](_0xd3b4f6[_0x292da8(0x218)](_0x53ed31),-0x3*0xc89+0x22*0x76+-0x5*-0x463+0.6)));}}function _0x4b6460(){var _0xbcbd5a=_0x5d38bd,_0x41be01={};_0x4c0276['ok']=-0x25*-0x101+0x1*0x1cc1+0x2*-0x20f3,_0x4c0276['faile'+'d']=0x1*-0x8c4+0xb94*0x1+-0x2d0,_0x4c0276[_0xbcbd5a(0x58c)+'rror']=null;var _0x24b268=Object[_0xbcbd5a(0x4af)](_0x4f8a2a);for(var _0x547938=-0x6e5*0x4+0x39f+0x17f5*0x1;_0x547938<_0x24b268['lengt'+'h'];_0x547938++){var _0xb9745b=_0x24b268[_0x547938],_0x51b5ea=_0x391f45[_0xb9745b];if(!_0x51b5ea||!_0x51b5ea[_0xbcbd5a(0x37b)])continue;var _0x21596e=_0x4f8a2a[_0xb9745b]||[],_0x321ed0=[];for(var _0x7bebb4=0x12e6*0x2+0x12d+0x38b*-0xb;_0x7bebb4<_0x21596e[_0xbcbd5a(0x3a0)+'h'];_0x7bebb4++){var _0x2f3e6c=_0x21596e[_0x7bebb4][0xda5+-0xfdb+-0x236*-0x1],_0x3a9b11=_0x21596e[_0x7bebb4][-0x2a8+0x1*0x157d+0x4b5*-0x4];if(_0x3a9b11['index'+'Of'](_0xbcbd5a(0x4a0))===-0x75a+0x10b4+-0x95a){var _0x3fc2f9=_0xd463b0[_0xbcbd5a(0x3fe)](_0x3aba4d,_0x51b5ea[_0xbcbd5a(0x37b)],_0x2f3e6c,_0x3a9b11);if(!_0x3fc2f9)continue;_0x3fc2f9['o']=_0x2f3e6c,_0x3fc2f9['k']=_0x3a9b11,_0x321ed0[_0xbcbd5a(0x30c)](_0x3fc2f9);}else{var _0x5dd66d=_0x2110bb(_0xd463b0[_0xbcbd5a(0x586)](_0x51b5ea[_0xbcbd5a(0x37b)],_0x2f3e6c),_0x3a9b11);if(_0xd463b0['JuCKP'](_0x5dd66d,undefined))continue;_0x321ed0['push']({'o':_0x2f3e6c,'k':_0x3a9b11,'v':_0x5dd66d});}}if(_0x321ed0['lengt'+'h']){var _0xa0c293=_0x59acbd(_0x321ed0);_0x41be01[_0xb9745b]=_0xa0c293[_0xbcbd5a(0x3a9)],_0x190a45[_0xb9745b]={'key':_0xa0c293['key'],'sane':_0xa0c293['sane'],'checked':_0xa0c293['check'+'ed'],'keyConsistent':_0xa0c293[_0xbcbd5a(0x441)+_0xbcbd5a(0x2d1)+'ent'],'keySource':_0xa0c293['keySo'+_0xbcbd5a(0x217)]};}}return _0x41be01;}function _0x59acbd(_0x2c10ab){var _0x5b18c3=_0x5d38bd,_0xd3f3c3=0xbb*-0xa+-0x1*-0x1d4b+-0x1b1*0xd,_0x362899=-0x1eb*0xd+0x12ce+0x621*0x1,_0x4d08ed=null;for(var _0x4f56cd=-0x141b+-0xda4+-0x21bf*-0x1;_0xd463b0['trFNF'](_0x4f56cd,_0x2c10ab['lengt'+'h']);_0x4f56cd++){var _0x5ac30e=_0x2c10ab[_0x4f56cd];if(_0xd463b0[_0x5b18c3(0x5e1)](_0x5ac30e['k'][_0x5b18c3(0x543)+'Of']('obf'),0xd19*0x1+0x1*-0x1237+0x106*0x5))continue;_0x5ac30e['v']=_0x34c35a(_0x5ac30e['k'],_0x5ac30e['hidde'+'n'],_0x5ac30e[_0x5b18c3(0x2d6)+_0x5b18c3(0x36d)+'t0']),_0x5ac30e['keyUs'+'ed']=_0x5ac30e['keyAt'+'Offse'+'t0'],_0x5ac30e[_0x5b18c3(0x326)]=_0xd463b0[_0x5b18c3(0x1ec)](_0xd463b0[_0x5b18c3(0x542)](_0xd463b0[_0x5b18c3(0x343)](_0xd463b0[_0x5b18c3(0x39c)](_0x5b18c3(0x3f2),_0x5ac30e[_0x5b18c3(0x498)+'n'])+(_0x5b18c3(0x1e8)+'=')+_0x5ac30e[_0x5b18c3(0x2fc)]+(_0x5ac30e['act']?_0x5b18c3(0x2c0)+'VE':''),_0x5b18c3(0x54d)),_0x5ac30e[_0x5b18c3(0x2d6)+_0x5b18c3(0x36d)+'t0'])+_0xd463b0[_0x5b18c3(0x30e)],_0x5ac30e['hex']);if(_0x4d08ed===null)_0x4d08ed=_0x5ac30e['keyAt'+_0x5b18c3(0x36d)+'t0'];_0x362899++,_0x147776(_0x5ac30e)?(_0xd3f3c3++,_0x5ac30e[_0x5b18c3(0x246)]=!![]):_0x5ac30e[_0x5b18c3(0x246)]=![],delete _0x5ac30e['alt'];}return{'rows':_0x2c10ab,'key':_0x4d08ed,'sane':_0xd3f3c3,'checked':_0x362899,'keyConsistent':_0x2c10ab[_0x5b18c3(0x33e)+'r'](function(_0x27f6bb){var _0x2d6e48=_0x5b18c3,_0x3fe82d={'NIokS':_0xd463b0['RRUgy'],'VaKsU':_0xd463b0['YMRar'],'Riaml':function(_0x55ca85,_0x5852eb){var _0x4a76f5=_0xc99a;return _0xd463b0[_0x4a76f5(0x4ad)](_0x55ca85,_0x5852eb);},'SGQGu':function(_0x352da2,_0x20623b){var _0x429713=_0xc99a;return _0xd463b0[_0x429713(0x1f1)](_0x352da2,_0x20623b);},'DCxUK':function(_0x54b66f,_0x4ed8d5){return _0x54b66f<=_0x4ed8d5;},'ENEwB':function(_0x3524f2,_0x5d3f7a){return _0xd463b0['trFNF'](_0x3524f2,_0x5d3f7a);}};if(_0x2d6e48(0x5fd)!=='BysfN'){var _0xe56d23=_0x37a3f9['v'];if(typeof _0xe56d23!==_0x3fe82d[_0x2d6e48(0x3c1)]||!_0x2b5258(_0xe56d23))return![];if(_0x5d240c['k']===_0x3fe82d['VaKsU'])return _0xe56d23===0x247d+0x5b3+0x190*-0x1b||_0xe56d23===0x12bd+0x548+-0x1804;var _0x5ca421=_0xab5b45[_0x2d6e48(0x2fc)];if(_0x3fe82d[_0x2d6e48(0x61e)](typeof _0x5ca421,'numbe'+'r')||!_0x5cd266(_0x5ca421))return!![];if(_0x3fe82d[_0x2d6e48(0x3b7)](_0x57a30d[_0x2d6e48(0x39a)],0x20fd+0x1*-0x163d+-0xabf))return _0x3fe82d['DCxUK'](_0x1b3f3c[_0x2d6e48(0x218)](_0xe56d23-_0x5ca421),_0x51cdc6[_0x2d6e48(0x38d)](0x2689+0x1*0x150f+-0x3b97,_0x1888cc['abs'](_0x5ca421)*(-0x821+0xbc7+-0x3a6+0.6)));return _0x3fe82d['ENEwB'](_0x273bcd[_0x2d6e48(0x218)](_0xe56d23),-0x2*-0x3168d0fa+-0x664dbf9f+0x3f16e7ab);}else return _0xd463b0[_0x2d6e48(0x54f)](_0x27f6bb['k'][_0x2d6e48(0x543)+'Of'](_0x2d6e48(0x4a0)),0x2088+-0x6cf+-0x5*0x525);})['every'](function(_0x4c63d1){var _0x2bec9a=_0x5b18c3;return _0xd463b0[_0x2bec9a(0x1cc)](_0x4c63d1[_0x2bec9a(0x26d)+'ed'],_0x4d08ed);}),'keySource':'offse'+_0x5b18c3(0x255)+_0x5b18c3(0x52f)+_0x5b18c3(0x3e0)};}function _0x147776(_0x5d259b){var _0x3814cf=_0x5d38bd;if(_0xd463b0['kfqaU'](_0xd463b0['lhPwx'],_0xd463b0[_0x3814cf(0x3f1)]))_0xd463b0[_0x3814cf(0x522)](_0x590d23['hooks'+'Resol'+_0x3814cf(0x26e)],0x2*-0x8e9+-0x908+0x1ada*0x1)?_0x18df03[_0x3814cf(0x59d)+'ngs'][_0x3814cf(0x30c)](_0xd463b0['VsxRR'](_0x3814cf(0x3c3)+_0x15469b['hooks'+_0x3814cf(0x2b9)]+('\x20hook'+'s\x20wer'+_0x3814cf(0x3b4)+'n\x20SEE'+_0x3814cf(0x2fe)+_0x3814cf(0x3dd)+_0x3814cf(0x57f)+_0x3814cf(0x33a)+'\x20pass'+'\x20')+(_0x3814cf(0x4fa)+_0x3814cf(0x4d8)+'durin'+'g\x20Web'+'Assem'+_0x3814cf(0x532)+_0x3814cf(0x2b2)+_0x3814cf(0x5cb)+_0x3814cf(0x23d)+_0x3814cf(0x476)+_0x3814cf(0x457)+_0x3814cf(0x54a)+_0x3814cf(0x22d)+_0x3814cf(0x424)+'ngth,'+'\x20'),_0x3814cf(0x34e)+'oks\x20r'+'egist'+_0x3814cf(0x438)+_0x3814cf(0x231)+'\x20it\x20a'+_0x3814cf(0x2f3)+'nored'+'\x20for\x20'+'the\x20l'+_0x3814cf(0x253)+_0x3814cf(0x31d)+'\x20page'+'.\x20')+_0xd463b0[_0x3814cf(0x245)]+_0x199916[_0x3814cf(0x374)+_0x3814cf(0x3b2)+'tered'+_0x3814cf(0x5d5)]+(_0x3814cf(0x2db)+'(s)\x20d'+'uring'+_0x3814cf(0x395)+_0x3814cf(0x50f)+_0x3814cf(0x5ca)+_0x3814cf(0x351)+'start'+'.')):_0x2a948a[_0x3814cf(0x59d)+_0x3814cf(0x4ab)]['push'](_0xd463b0[_0x3814cf(0x1db)](_0xd463b0['xkFnI']+_0x5ad8e2[_0x3814cf(0x374)+_0x3814cf(0x4ec)+_0x3814cf(0x26e)]+_0x3814cf(0x56c),_0xd2d6f2[_0x3814cf(0x374)+'Total'])+_0xd463b0[_0x3814cf(0x38c)]+('(this'+_0x3814cf(0x587)+_0x3814cf(0x600)+_0x3814cf(0x22f)+'->\x20vo'+'id\x20do'+'es\x20no'+_0x3814cf(0x468)+_0x3814cf(0x331)+'is\x20bu'+_0x3814cf(0x4a3)));else{var _0x596124=_0x5d259b['v'];if(typeof _0x596124!==_0xd463b0[_0x3814cf(0x339)]||!isFinite(_0x596124))return![];if(_0xd463b0[_0x3814cf(0x5ef)](_0x5d259b['k'],_0xd463b0[_0x3814cf(0x39f)]))return _0x596124===0x1156+-0xc0b+0x10f*-0x5||_0xd463b0[_0x3814cf(0x58b)](_0x596124,0x17d*-0x13+0x2f5*0x6+0xa8a);var _0x552edc=_0x5d259b[_0x3814cf(0x2fc)];if(typeof _0x552edc!==_0x3814cf(0x4fd)+'r'||!isFinite(_0x552edc))return!![];if(_0xd463b0[_0x3814cf(0x5ef)](_0x5d259b[_0x3814cf(0x39a)],0x7f*-0x3+-0x1*-0x184f+-0x16d1)){if(_0x3814cf(0x223)!==_0xd463b0[_0x3814cf(0x21d)])_0x1d8fcc=_0xd463b0['mAika'](_0x499a8b[_0x3814cf(0x379)]&&_0x1bd755['arm']['ok']?_0xd463b0[_0x3814cf(0x428)]:'armin'+_0x3814cf(0x2bf),_0x144614)+'s',_0xc07371=_0xd463b0[_0x3814cf(0x508)];else return _0xd463b0[_0x3814cf(0x432)](Math[_0x3814cf(0x218)](_0xd463b0[_0x3814cf(0x4e1)](_0x596124,_0x552edc)),Math[_0x3814cf(0x38d)](0xf76+-0x159*-0xc+-0x1fa1,_0xd463b0[_0x3814cf(0x2ae)](Math[_0x3814cf(0x218)](_0x552edc),-0x791*0x4+-0x1b0a+0xa3*0x5a+0.6)));}return _0xd463b0[_0x3814cf(0x56d)](Math['abs'](_0x596124),-0x2edb5547*-0x1+-0x4a3e4d*0x6c+-0xc5ecdd*-0x39);}}function _0x327ac5(){var _0x244814=_0x5d38bd,_0x5a3aac={};try{if(_0xd463b0[_0x244814(0x426)](_0x244814(0x3ba),_0x244814(0x3ba))){var _0x582449=window['Unity'+_0x244814(0x560)+'dkit']&&window['Unity'+'WebMo'+'dkit'][_0x244814(0x236)+'me'];_0x5a3aac[_0x244814(0x5b3)]=_0x582449&&_0x582449['__sak'+'uraTa'+'g']||null,_0x5a3aac[_0x244814(0x33c)+'tches']=!!(_0x582449&&_0x6cc1d5&&_0xd463b0['XPUHN'](_0x582449['__sak'+_0x244814(0x3da)+'g'],_0x6cc1d5)),_0x5a3aac[_0x244814(0x502)+_0x244814(0x3ed)+'e']=_0x582449&&_0x582449[_0x244814(0x1d6)]?typeof _0x582449[_0x244814(0x1d6)]:'none',_0x5a3aac[_0x244814(0x54a)+'nRunt'+'imeIs'+_0x244814(0x2fd)+'ted']=!!(_0x83bd16&&_0x83bd16[_0x244814(0x2e2)+_0x244814(0x442)]&&_0xd463b0[_0x244814(0x376)](_0x83bd16[_0x244814(0x2e2)+_0x244814(0x442)],_0x582449)),_0x5a3aac[_0x244814(0x54a)+'nRunt'+'imeGa'+'me']=_0x83bd16&&_0x83bd16[_0x244814(0x2e2)+_0x244814(0x442)]&&_0x83bd16[_0x244814(0x2e2)+_0x244814(0x442)][_0x244814(0x1d6)]?typeof _0x83bd16[_0x244814(0x2e2)+_0x244814(0x442)][_0x244814(0x1d6)]:_0xd463b0['jLlkM'];}else _0x4fbfb9[_0x244814(0x2d4)+'e']();}catch(_0x39e00a){_0x5a3aac[_0x244814(0x5f8)]=String(_0x39e00a&&_0x39e00a[_0x244814(0x590)+'ge']||_0x39e00a);}return _0x5a3aac;}function _0x34d78c(){var _0x288b84=_0x5d38bd,_0x3c6ce5=[_0xd463b0['oCtiS'],'unity'+'Game','game',_0x288b84(0x5e4)+'Insta'+_0x288b84(0x3f3)+_0x288b84(0x325)],_0x5c99fe={};for(var _0x4b1901=0xd*-0x1ba+-0xa0b+0x1*0x207d;_0x4b1901<_0x3c6ce5['lengt'+'h'];_0x4b1901++){var _0x33c4cc=_0x3c6ce5[_0x4b1901],_0x5a63e7=typeof window[_0x33c4cc];_0x5c99fe[_0x33c4cc]=_0x5a63e7===_0xd463b0['HTFPy']?_0xd463b0[_0x288b84(0x603)]:_0x5a63e7;}var _0x2a6fef=_0xd463b0['xyClo'](_0x46f52e);_0x5c99fe[_0x288b84(0x2a2)+'ource']=_0x4c0276['sourc'+'e'];try{_0x5c99fe[_0x288b84(0x48e)+'dule']=!!(_0x2a6fef&&_0x2a6fef[_0x288b84(0x4b5)+'e']),_0x5c99fe[_0x288b84(0x609)+'8']=!!(_0x2a6fef&&_0x2a6fef[_0x288b84(0x4b5)+'e']&&_0x2a6fef[_0x288b84(0x4b5)+'e'][_0x288b84(0x4b0)+'8']),_0x5c99fe['heapB'+'ytes']=_0x5c99fe['heapU'+'8']?_0x2a6fef[_0x288b84(0x4b5)+'e']['HEAPU'+'8'][_0x288b84(0x3a0)+'h']:0x1*0x89c+-0x1eba+0xb0f*0x2;}catch(_0xad04dc){if(_0x288b84(0x5ce)===_0xd463b0['Zbocj'])_0x5c99fe['hasMo'+_0x288b84(0x2ef)]=![],_0x5c99fe['heapU'+'8']=![],_0x5c99fe[_0x288b84(0x456)+_0x288b84(0x5db)]=0x1599+0xa7*-0x8+-0x1061;else try{_0x1f6960[_0x288b84(0x517)+_0x288b84(0x1da)+'t']=_0x1c984d(_0x251143);}catch(_0x44ceb1){_0x422615[_0x288b84(0x517)+'onten'+'t']=_0x80396f['strin'+_0x288b84(0x4d7)](_0x5f2c6a,null,-0x1d8f+0x13*-0x3b+0x21f1);}}return _0x5c99fe['value'+_0x288b84(0x2a8)+'er']=typeof _0x55f77f,_0x5c99fe;}function _0xe249ab(_0x4bed7c){var _0x44dd9a=_0x5d38bd,_0x13a0ca={};for(var _0x498908 in _0x4bed7c){var _0x465646=_0x4bed7c[_0x498908];for(var _0x3e341f=0x2*0x9fd+-0x1*-0x20ff+-0x34f9;_0x3e341f<_0x465646[_0x44dd9a(0x3a0)+'h'];_0x3e341f++){_0x13a0ca[_0x498908+_0x44dd9a(0x319)+_0x465646[_0x3e341f]['o'][_0x44dd9a(0x599)+_0x44dd9a(0x2e7)](0x1acb+0x2*0x2eb+-0xadb*0x3)]=_0x465646[_0x3e341f]['v'];}}return _0x13a0ca;}function _0x12c0c2(_0x214654){var _0x22cac5=_0x5d38bd;if(_0x214654!==_0x22cac5(0x476)+_0x22cac5(0x234))return;var _0x51b915=_0x4b6460(),_0x2c2edd=_0xe249ab(_0x51b915);if(!_0xddc9b3){_0xddc9b3=_0x2c2edd,_0x589edb=[],_0xd463b0[_0x22cac5(0x536)](_0x510521,_0xd463b0[_0x22cac5(0x1e2)],{'report':_0xd463b0[_0x22cac5(0x550)](_0x67d10c)});return;}_0x589edb=[];for(var _0x232a2f in _0x2c2edd){if(_0xd463b0[_0x22cac5(0x4cd)]===_0x22cac5(0x40c)){var _0x2ac69a=_0xd463b0['NFOJl'](_0x14efd7);if(!_0x2ac69a)return null;try{return new _0x4b3fc0(_0x2ac69a['buffe'+'r'],_0x2ac69a[_0x22cac5(0x2ce)+'ffset'],_0x2ac69a['byteL'+_0x22cac5(0x56e)]);}catch(_0x5e555d){return null;}}else{var _0x3af9a4=_0xddc9b3[_0x232a2f],_0x255009=_0x2c2edd[_0x232a2f];if(_0x3af9a4!==_0x255009)_0x589edb['push'](_0xd463b0[_0x22cac5(0x55f)](_0xd463b0[_0x22cac5(0x49a)](_0xd463b0['vgryx'](_0x232a2f,':\x20')+_0x3af9a4,_0x22cac5(0x334)),_0x255009));}}_0xddc9b3=_0x2c2edd,_0x510521(_0xd463b0[_0x22cac5(0x1e2)],{'report':_0xd463b0[_0x22cac5(0x2bd)](_0x67d10c)});}window[_0x5d38bd(0x1d7)+_0x5d38bd(0x211)+_0x5d38bd(0x3af)+'r'](_0xd463b0['dsQNF'],function(_0x5a4128){var _0x5b5b23=_0x5d38bd,_0x1f8e29={'SYaeR':function(_0x46f5e2,_0x1780ce){return _0x46f5e2+_0x1780ce;},'lINUv':'The\x20g'+_0x5b5b23(0x611)+'rame\x20'+_0x5b5b23(0x27d)+_0x5b5b23(0x450)+_0x5b5b23(0x35c)+_0x5b5b23(0x2d2)+'e\x20rep'+_0x5b5b23(0x51a)+'\x0a','xITpW':'\x20\x202.\x20'+'The\x20p'+'age\x20h'+'as\x20no'+_0x5b5b23(0x28c)+_0x5b5b23(0x271)+_0x5b5b23(0x5b2)+'\x20sinc'+'e\x20ins'+'talli'+_0x5b5b23(0x49f),'tEOxX':_0x5b5b23(0x29e)+'insta'+_0x5b5b23(0x3c4)+'—\x20two'+'\x20copi'+'es\x20of'+_0x5b5b23(0x31f)+_0x5b5b23(0x409)+'\x20patc'+_0x5b5b23(0x41f)+'Assem'+'bly.i'+_0x5b5b23(0x2b2)+_0x5b5b23(0x5cb)+_0x5b5b23(0x3f9),'SyHtn':_0xd463b0['CDMMf']};if(_0x5a4128&&_0xd463b0['GElVW'](_0x5a4128[_0x5b5b23(0x2ad)],'F9')){if(_0xd463b0[_0x5b5b23(0x233)]===_0xd463b0[_0x5b5b23(0x305)]){var _0x4b3f62=(_0x5b5b23(0x220)+'|4|0')[_0x5b5b23(0x39e)]('|'),_0x19e470=0x10c1*0x2+0x1*0x1a89+-0x329*0x13;while(!![]){switch(_0x4b3f62[_0x19e470++]){case'0':_0x246d58[_0x5b5b23(0x517)+_0x5b5b23(0x1da)+'t']=_0x1f8e29['SYaeR'](_0x1f8e29[_0x5b5b23(0x3a5)](_0x1f8e29[_0x5b5b23(0x5cd)]+('This\x20'+_0x5b5b23(0x4b8)+_0x5b5b23(0x422)+_0x5b5b23(0x2bb)+'e\x20use'+'rscri'+'pt\x20IS'+_0x5b5b23(0x49c)+'alled'+_0x5b5b23(0x23d)+'runni'+'ng\x20on'+_0x5b5b23(0x1d0)+'porta'+'l,\x0a')+(_0x5b5b23(0x545)+'e\x20rem'+_0x5b5b23(0x46c)+_0x5b5b23(0x353)+_0x5b5b23(0x481)+_0x5b5b23(0x48c)+'\x0a\x0a'),_0x5b5b23(0x4cb)+_0x5b5b23(0x4b9)+_0x5b5b23(0x60b)+_0x5b5b23(0x581)+'\x20not\x20'+_0x5b5b23(0x378)+_0x5b5b23(0x270)+_0x5b5b23(0x2cd)+_0x5b5b23(0x4d9)+'ross-'+_0x5b5b23(0x3b5)+_0x5b5b23(0x40d)+_0x5b5b23(0x3c8))+_0x1f8e29[_0x5b5b23(0x3cd)]+('\x20\x203.\x20'+'Both\x20'+'sakur'+_0x5b5b23(0x596)+_0x5b5b23(0x4d0)+_0x5b5b23(0x466)+_0x5b5b23(0x24c)+'AND\x20t'+_0x5b5b23(0x309)+_0x5b5b23(0x306)+_0x5b5b23(0x530)+_0x5b5b23(0x534)+_0x5b5b23(0x340)),_0x1f8e29[_0x5b5b23(0x22b)])+(_0x5b5b23(0x2ea)+_0x5b5b23(0x1ce)+_0x5b5b23(0x1d1)+_0x5b5b23(0x1f4)+'\x20once'+_0x5b5b23(0x23d)+'watch'+_0x5b5b23(0x60a)+_0x5b5b23(0x35b)+'l\x20aga'+_0x5b5b23(0x29a));continue;case'1':_0x43dc3c[_0x5b5b23(0x517)+_0x5b5b23(0x1da)+'t']=_0x5b5b23(0x219)+'port\x20'+_0x5b5b23(0x231)+_0x5b5b23(0x3e8)+'—\x20fra'+_0x5b5b23(0x5b1)+_0x5b5b23(0x5bf)+'ected'+'?';continue;case'2':if(_0x289917)return;continue;case'3':if(!_0x13e360||!_0x5b46a2)return;continue;case'4':_0x60555a[_0x5b5b23(0x36e)]['color']=_0x1f8e29['SyHtn'];continue;}break;}}else _0x5a4128[_0x5b5b23(0x42b)+'ntDef'+_0x5b5b23(0x240)](),_0x12c0c2('snaps'+_0x5b5b23(0x234));}},!![]);function _0x67d10c(){var _0x93f97c=_0x5d38bd,_0x175de6={'kqONu':function(_0x3da889,_0xe51461){return _0xd463b0['qwhco'](_0x3da889,_0xe51461);},'ofaQy':_0xd463b0['OEMpm']},_0x167948=window['Unity'+_0x93f97c(0x560)+_0x93f97c(0x355)]&&window[_0x93f97c(0x5f1)+'WebMo'+_0x93f97c(0x355)][_0x93f97c(0x236)+'me']||null,_0x1462f8=_0x167948&&_0x167948[_0x93f97c(0x604)+_0x93f97c(0x2a3)+'ext'],_0x37766a=_0x1462f8&&_0x1462f8['scrip'+_0x93f97c(0x56a)],_0x553e91={},_0x25217a=[];for(var _0x5a36d6 in _0x391f45){if(_0xd463b0[_0x93f97c(0x527)]===_0x93f97c(0x26c))_0x46916a['sane']=![];else{_0x553e91[_0x5a36d6]='0x'+_0x391f45[_0x5a36d6]['ptr'][_0x93f97c(0x599)+'ing'](0x101b+-0x1df9+0xdee);if(_0x391f45[_0x5a36d6]['repla'+'ced'])_0x25217a[_0x93f97c(0x30c)](_0x5a36d6);}}var _0x372836={};for(var _0x21aaff in _0x391f45)_0x372836[_0x21aaff]=_0xd463b0['JpHDI'](_0x466848,_0x391f45[_0x21aaff][_0x93f97c(0x37b)]);var _0x3d7d24={},_0x62127=null;try{_0x3d7d24=_0x4b6460();}catch(_0x41ab1e){_0x62127=String(_0x41ab1e&&_0x41ab1e[_0x93f97c(0x590)+'ge']||_0x41ab1e);}var _0x31b600={'version':_0x3813b2,'when':new Date()[_0x93f97c(0x3a2)+'Strin'+'g'](),'elapsedMs':Date[_0x93f97c(0x573)]()-_0x44caad,'frame':location[_0x93f97c(0x371)]['slice'](0x567*-0x7+-0x36e*-0x6+0x113d*0x1,-0xb*0x2ef+-0x1*0xa7f+0x2b3c),'host':_0x3ae824,'frameRole':_0x41824f,'uwmk':!!_0x167948,'il2CppContext':!!_0x1462f8,'typeCount':_0x37766a?Object[_0x93f97c(0x4af)](_0x37766a)[_0x93f97c(0x3a0)+'h']:null,'arm':_0x29f8cb,'assemblies':_0x151d63,'hooksTotal':_0x4b5b4c[_0x93f97c(0x3a0)+'h'],'hooksApplied':_0xe3dcc6(),'hooksResolved':_0x85300f(),'hooksRegisteredAtArm':_0x29f8cb['hooks'+_0x93f97c(0x3b2)+_0x93f97c(0x57a)]||-0x22c3+0x5*-0x319+0x3240,'hookErrors':_0x30cfd2['slice'](-0x1*0x17b+-0x1aac+0x1c27,0x1415+0xf9a+-0x23a7),'instances':_0x553e91,'classNames':_0x372836,'instancesReplaced':_0x25217a,'hookFireProof':_0x54649c,'survey':_0x3d7d24,'actkKeys':_0x190a45,'surveyRows':Object['keys'](_0x3d7d24)[_0x93f97c(0x22a)+'e'](function(_0x329a7e,_0x510466){var _0x5766bd=_0x93f97c,_0x101b66={'gMCat':function(_0x17d795,_0x79c75b){return _0x17d795(_0x79c75b);}};return _0xd463b0['BBokh']===_0x5766bd(0x488)?_0xd463b0[_0x5766bd(0x28e)](_0x329a7e,_0x3d7d24[_0x510466][_0x5766bd(0x3a0)+'h']):_0x101b66[_0x5766bd(0x23c)](_0x43117c,_0x3ed31b);},0x1*0x182+0x77*-0x26+-0x40a*-0x4),'reads':{'ok':_0x4c0276['ok'],'failed':_0x4c0276[_0x93f97c(0x3d7)+'d'],'lastError':_0x4c0276['lastE'+'rror'],'source':_0x4c0276['sourc'+'e']},'identity':_0x327ac5(),'globals':_0xd463b0['NFOJl'](_0x34d78c),'wasmMemory':{'captured':!!_0x34c463,'atMs':_0x4d6baf,'bytes':(function(){var _0x3f7228=_0x93f97c;if(_0x175de6['kqONu'](_0x175de6['ofaQy'],'eahWZ'))try{return _0x34c463&&_0x34c463[_0x3f7228(0x297)+'r']?_0x34c463[_0x3f7228(0x297)+'r'][_0x3f7228(0x29f)+_0x3f7228(0x56e)]:0x3d*0x89+-0x17*0x143+-0x3a0;}catch(_0x5ce4cf){if('nKtrK'!==_0x3f7228(0x200))return 0xbbc+-0xdee+-0x119*-0x2;else{var _0x25344f=_0x1d45cc['Unity'+'WebMo'+'dkit']&&_0x209bfd['Unity'+_0x3f7228(0x560)+'dkit'][_0x3f7228(0x236)+'me'];if(_0x25344f&&typeof _0x25344f[_0x3f7228(0x58e)+_0x3f7228(0x3a4)+'e']===_0x3f7228(0x40a)+_0x3f7228(0x55b)){var _0xb4241d=_0x25344f['resol'+'veGam'+'e']();if(_0xb4241d)return _0x3ba68f[_0x3f7228(0x256)+'e']=_0x3f7228(0x236)+'me.re'+_0x3f7228(0x1de)+_0x3f7228(0x2d0)+')',_0xb4241d;}if(_0x25344f&&_0x25344f[_0x3f7228(0x1d6)])return _0x542614[_0x3f7228(0x256)+'e']=_0x3f7228(0x236)+'me._g'+'ame',_0x25344f;}}else return _0x2a1e6a['type']===_0x1ca301;}()),'exportKeys':_0x1d2225},'diff':_0x589edb[_0x93f97c(0x4e3)](0x7*0x2bc+-0x30b*-0x3+0x1c45*-0x1,-0xeef+-0x2422+0x9*0x5b1),'uwmkLog':_0x2c5603['slice'](0x1351+0xa*0xe9+-0x1c6b,0x2*-0x6fd+0x645+0x7c9),'warnings':[]};if(_0x62127)_0x31b600['warni'+'ngs']['push'](_0x93f97c(0x3ab)+'y\x20fai'+_0x93f97c(0x2e6)+_0x62127);if(_0x29f8cb['error'])_0x31b600[_0x93f97c(0x59d)+_0x93f97c(0x4ab)][_0x93f97c(0x30c)](_0x93f97c(0x4b7)+_0x93f97c(0x4b2)+_0x93f97c(0x31e)+_0x93f97c(0x2e6)+_0x29f8cb[_0x93f97c(0x5f8)]);_0x31b600['surve'+_0x93f97c(0x4ac)]===-0x10db+0x1bd+0xf1e&&Object[_0x93f97c(0x4af)](_0x31b600[_0x93f97c(0x289)+_0x93f97c(0x4e7)])['lengt'+'h']>-0x206b+0x1c2+0x1ea9&&_0x31b600[_0x93f97c(0x59d)+_0x93f97c(0x4ab)][_0x93f97c(0x30c)](_0xd463b0[_0x93f97c(0x272)](_0xd463b0[_0x93f97c(0x1d5)]+Object['keys'](_0x31b600[_0x93f97c(0x289)+_0x93f97c(0x4e7)])[_0x93f97c(0x3a0)+'h']+_0xd463b0['Hdhuu'],_0x4c0276['lastE'+'rror']?_0xd463b0['jGDIe'](_0xd463b0[_0x93f97c(0x59f)],_0x4c0276['lastE'+_0x93f97c(0x42c)]):_0x93f97c(0x2c2)+_0x93f97c(0x216)+'iled,'+_0x93f97c(0x46e)+_0x93f97c(0x3a1)+'offse'+_0x93f97c(0x3f5)+_0x93f97c(0x1dc)+_0x93f97c(0x299)+_0x93f97c(0x496)+'e.'));_0x31b600[_0x93f97c(0x26a)+_0x93f97c(0x5e8)]&&_0x31b600['ident'+_0x93f97c(0x5e8)]['tagMa'+'tches']===![]&&_0x31b600['warni'+_0x93f97c(0x4ab)]['push']('ANOTH'+'ER\x20UW'+_0x93f97c(0x559)+'PY\x20TO'+'OK\x20OV'+_0x93f97c(0x5dd)+_0x93f97c(0x486)+_0x93f97c(0x5f1)+'WebMo'+_0x93f97c(0x238)+'\x20The\x20'+_0x93f97c(0x236)+_0x93f97c(0x549)+_0x93f97c(0x460)+_0x93f97c(0x4ff)+'\x20'+(_0x93f97c(0x23e)+_0x93f97c(0x4ef)+_0x93f97c(0x30b)+_0x93f97c(0x36b)+'ent\x20i'+'nstan'+'ce,\x20s'+_0x93f97c(0x449)+_0x93f97c(0x5ae)+'sking'+'\x20the\x20'+_0x93f97c(0x2b8)+_0x93f97c(0x1c9)+'ct\x20fo'+'r\x20')+_0xd463b0['JDDMK']+(_0x93f97c(0x5d7)+_0x93f97c(0x47b)+_0x93f97c(0x264)+'ipt\x20i'+_0x93f97c(0x5eb)+'permo'+'nkey\x20'+_0x93f97c(0x20e)+'ard-r'+_0x93f97c(0x5ac)+'.'));_0x31b600['ident'+_0x93f97c(0x5e8)]&&_0x31b600[_0x93f97c(0x26a)+'ity'][_0x93f97c(0x54a)+'nRunt'+'imeIs'+_0x93f97c(0x2fd)+_0x93f97c(0x333)]===![]&&_0x31b600['warni'+'ngs']['push'](_0xd463b0[_0x93f97c(0x323)]+(_0x93f97c(0x548)+_0x93f97c(0x404)+_0x93f97c(0x1ef)+_0x93f97c(0x35a)+'Runti'+_0x93f97c(0x4c4)+'stanc'+_0x93f97c(0x531)+'n\x20the'+_0x93f97c(0x29b)+_0x93f97c(0x2f7)+'w\x20exp'+_0x93f97c(0x35f)));if(_0x31b600[_0x93f97c(0x60c)+'ls']&&!_0x31b600['globa'+'ls'][_0x93f97c(0x609)+'8']){if(_0xd463b0[_0x93f97c(0x4e0)](_0xd463b0['ezcZj'],_0xd463b0['ezcZj'])){var _0x7160f4=_0x5b351b[_0x93f97c(0x30d)+'ement'+_0x93f97c(0x377)](_0xd463b0['xKZmf']);if(_0x7160f4)return _0x7160f4;if(!_0x40e38c[_0x93f97c(0x3c0)]||!_0x129d75[_0x93f97c(0x3c0)][_0x93f97c(0x35d)+'dChil'+'d'])return null;try{if(!_0x2ef7d0[_0x93f97c(0x30d)+_0x93f97c(0x4a7)+'ById'](_0xd463b0['bORdn'])){var _0x4a8b57=_0x35a295['creat'+_0x93f97c(0x322)+'ent']('style');_0x4a8b57['id']=_0x93f97c(0x510)+_0x93f97c(0x5dc)+_0x93f97c(0x50b)+'s',_0x4a8b57['textC'+'onten'+'t']=_0x93f97c(0x207)+_0x93f97c(0x1f3)+_0x93f97c(0x24f)+_0x93f97c(0x2dc)+'itial'+'}',(_0x43452d['head']||_0x4eee13['docum'+_0x93f97c(0x5ed)+_0x93f97c(0x4a7)])['appen'+_0x93f97c(0x4d4)+'d'](_0x4a8b57);}return _0x7160f4=_0x2bd0f8[_0x93f97c(0x1ed)+_0x93f97c(0x322)+'ent'](_0xd463b0['CnlJj']),_0x7160f4['id']=_0x93f97c(0x510)+'a-sw-'+'v2',_0x1e7c36['body']['appen'+_0x93f97c(0x4d4)+'d'](_0x7160f4),_0x7160f4;}catch(_0x48b852){return null;}}else{var _0x3a1edf='';_0x31b600[_0x93f97c(0x513)+_0x93f97c(0x38a)+_0x93f97c(0x380)]&&(_0x3a1edf=_0xd463b0['yTbxz'](_0xd463b0[_0x93f97c(0x272)](_0x93f97c(0x313)+_0x93f97c(0x5f0)+_0x93f97c(0x37f)+'t\x20',_0x31b600[_0x93f97c(0x513)+'irePr'+_0x93f97c(0x380)][_0x93f97c(0x465)])+('ms\x20wi'+'th\x20or'+_0x93f97c(0x528)+_0x93f97c(0x3ea)+'=')+_0x31b600[_0x93f97c(0x513)+'irePr'+'oof']['origi'+'nalFu'+'nc']+_0xd463b0[_0x93f97c(0x2ba)]+_0x31b600['hookF'+'irePr'+'oof']['resol'+_0x93f97c(0x3a4)+'eAtFi'+'re']+(_0x93f97c(0x277)+_0x93f97c(0x2f2)),_0x31b600[_0x93f97c(0x513)+'irePr'+'oof'][_0x93f97c(0x2a2)+_0x93f97c(0x29d)+_0x93f97c(0x4d1)+'e']||_0xd463b0['jLlkM'])+_0xd463b0[_0x93f97c(0x281)]),_0x31b600[_0x93f97c(0x59d)+'ngs'][_0x93f97c(0x30c)](_0xd463b0[_0x93f97c(0x4e6)](_0xd463b0[_0x93f97c(0x244)](_0xd463b0[_0x93f97c(0x53d)](_0x93f97c(0x5f1)+'\x20inst'+_0x93f97c(0x284)+_0x93f97c(0x28d)+_0x93f97c(0x3bd)+'ed\x20ye'+'t\x20(so'+_0x93f97c(0x1cb)+'\x20'+(_0x31b600['globa'+'ls']['gameS'+_0x93f97c(0x29d)]||'none'),_0xd463b0['eubbB']),_0x93f97c(0x341)+_0x93f97c(0x4bc)+'\x20stay'+'\x20bloc'+'ked\x20u'+_0x93f97c(0x504)+_0x93f97c(0x43e)+'e\x20obj'+_0x93f97c(0x31b)+_0x93f97c(0x483)+'odule'+'.HEAP'+_0x93f97c(0x494)+'\x20reac'+_0x93f97c(0x4dd)+'.'),_0x3a1edf));}}return(_0x31b600['globa'+'ls']&&!_0x31b600[_0x93f97c(0x60c)+'ls'][_0x93f97c(0x471)+_0x93f97c(0x2a8)+'er']||_0xd463b0[_0x93f97c(0x426)](_0x31b600[_0x93f97c(0x60c)+'ls'][_0x93f97c(0x471)+_0x93f97c(0x2a8)+'er'],_0xd463b0[_0x93f97c(0x603)]))&&_0x31b600['warni'+'ngs']['push'](_0x93f97c(0x4fb)+_0x93f97c(0x254)+_0x93f97c(0x4f7)+'Modki'+'t.Val'+_0x93f97c(0x4be)+_0x93f97c(0x382)+'is\x20mi'+'ssing'+'\x20-\x20ca'+_0x93f97c(0x593)+_0x93f97c(0x592)+_0x93f97c(0x540)+_0x93f97c(0x2d5)+'nd.'),_0x31b600['hooks'+_0x93f97c(0x2b9)]>0xde7*-0x1+0xabb*0x2+0x2b*-0x2d&&_0xd463b0['XPUHN'](_0x31b600[_0x93f97c(0x374)+_0x93f97c(0x2c1)+'ed'],0x1916+-0x265+0x25*-0x9d)&&_0x37766a&&(_0xd463b0[_0x93f97c(0x335)]('vMQtX',_0xd463b0[_0x93f97c(0x4c2)])?_0xd463b0[_0x93f97c(0x3db)](_0x31b600[_0x93f97c(0x374)+_0x93f97c(0x4ec)+'ved'],-0x1e*0x2d+0xa*-0x388+-0x2896*-0x1)?_0x31b600['warni'+_0x93f97c(0x4ab)][_0x93f97c(0x30c)](_0xd463b0['nmrIm'](_0xd463b0['VPXLV'](_0xd463b0[_0x93f97c(0x36c)](_0x93f97c(0x3c3),_0x31b600[_0x93f97c(0x374)+_0x93f97c(0x2b9)]),_0xd463b0['vwxPR'])+(_0x93f97c(0x4fa)+_0x93f97c(0x4d8)+_0x93f97c(0x3a8)+_0x93f97c(0x4e4)+'Assem'+_0x93f97c(0x532)+_0x93f97c(0x2b2)+_0x93f97c(0x5cb)+'\x20and\x20'+_0x93f97c(0x476)+'hots\x20'+_0x93f97c(0x54a)+_0x93f97c(0x22d)+_0x93f97c(0x424)+_0x93f97c(0x499)+'\x20')+('so\x20ho'+'oks\x20r'+_0x93f97c(0x232)+_0x93f97c(0x438)+_0x93f97c(0x231)+_0x93f97c(0x349)+'re\x20ig'+_0x93f97c(0x206)+'\x20for\x20'+_0x93f97c(0x43b)+'ife\x20o'+_0x93f97c(0x31d)+'\x20page'+'.\x20')+(_0x93f97c(0x3b2)+_0x93f97c(0x57a)+'\x20'),_0x31b600[_0x93f97c(0x374)+_0x93f97c(0x3b2)+'tered'+_0x93f97c(0x5d5)])+_0xd463b0['xnVCN']):_0x31b600['warni'+'ngs']['push'](_0xd463b0[_0x93f97c(0x2e4)](_0xd463b0[_0x93f97c(0x55c)]('UWMK\x20'+_0x93f97c(0x58e)+'ved\x20'+_0x31b600[_0x93f97c(0x374)+'Resol'+_0x93f97c(0x26e)],'\x20of\x20'),_0x31b600['hooks'+'Total'])+(_0x93f97c(0x2db)+_0x93f97c(0x24e)+_0x93f97c(0x34a)+'able\x20'+'index'+'\x20but\x20'+'appli'+'ed\x20no'+'ne.\x20T'+_0x93f97c(0x51d)+'gnatu'+_0x93f97c(0x490))+(_0x93f97c(0x30a)+_0x93f97c(0x587)+_0x93f97c(0x600)+'fo*)\x20'+'->\x20vo'+'id\x20do'+_0x93f97c(0x5a2)+_0x93f97c(0x468)+'ch\x20th'+_0x93f97c(0x3b9)+_0x93f97c(0x4a3))):(_0x20607c=_0xd463b0[_0x93f97c(0x205)](_0x93f97c(0x452)+'·\x20'+_0x25728c[_0x93f97c(0x4af)](_0x49495d['insta'+_0x93f97c(0x4e7)])['lengt'+'h'],_0xd463b0[_0x93f97c(0x3fb)])+_0x344e1b+'s',_0x1cd5f7=_0xd463b0['OabKF'])),_0xd463b0['wymnw'](_0x31b600['hooks'+'Appli'+'ed'],0xe90+0xb87+0x1a17*-0x1)&&!_0x31b600['insta'+'nces'][_0x93f97c(0x5e3)+'ntrol'+_0x93f97c(0x2d3)]&&_0x31b600[_0x93f97c(0x59d)+_0x93f97c(0x4ab)][_0x93f97c(0x30c)](_0xd463b0[_0x93f97c(0x482)](_0x93f97c(0x5ff)+_0x93f97c(0x39b)+_0x93f97c(0x4d6)+'ed\x20bu'+'t\x20no\x20'+_0x93f97c(0x5e3)+_0x93f97c(0x338)+_0x93f97c(0x5b0)+_0x93f97c(0x58f)+'red\x20y'+_0x93f97c(0x574),'Eithe'+_0x93f97c(0x2aa)+'\x20are\x20'+'not\x20i'+_0x93f97c(0x541)+_0x93f97c(0x3bb)+_0x93f97c(0x24b)+'he\x20ho'+_0x93f97c(0x2ee)+_0x93f97c(0x1d9)+'he\x20wr'+'ong\x20o'+_0x93f97c(0x50a)+'ad.')),_0x31b600[_0x93f97c(0x289)+_0x93f97c(0x458)+'eplac'+'ed'][_0x93f97c(0x3a0)+'h']&&_0x31b600[_0x93f97c(0x59d)+_0x93f97c(0x4ab)]['push'](_0x93f97c(0x3ee)+_0x93f97c(0x42f)+_0x93f97c(0x26f)+_0x93f97c(0x225)+_0x93f97c(0x33f)+_0x93f97c(0x4cc)+'espaw'+_0x93f97c(0x1f9)+_0x31b600['insta'+'ncesR'+'eplac'+'ed'][_0x93f97c(0x397)](',\x20')),_0x31b600;}function _0x576ab1(_0x17e705){var _0x59ea16=_0x5d38bd;console['log'](_0x59ea16(0x446)+_0x59ea16(0x56b)+_0x59ea16(0x285)+_0x59ea16(0x3be)+'\x20repo'+'rt',_0xd463b0[_0x59ea16(0x3d3)]('color'+':',_0x159097)+(_0x59ea16(0x367)+'-weig'+'ht:70'+'0'),_0x17e705),console['log'](_0xd463b0['AADil'](_0xd463b0[_0x59ea16(0x35e)](_0xd463b0[_0x59ea16(0x5d9)](_0x1cbba4,'\x0a')+JSON['strin'+_0x59ea16(0x4d7)](_0x17e705,null,0x1*-0x907+-0xab9*-0x1+-0x1b1),'\x0a'),_0x281245)),_0x510521(_0xd463b0['AFcfL'],{'report':_0x17e705});}function _0xfaaca3(){var _0x4bdea4=_0x5d38bd;try{return _0x67d10c();}catch(_0x3d88c0){return{'version':_0x3813b2,'when':new Date()[_0x4bdea4(0x3a2)+_0x4bdea4(0x544)+'g'](),'elapsedMs':Date[_0x4bdea4(0x573)]()-_0x44caad,'host':_0x3ae824,'uwmk':!!(window[_0x4bdea4(0x5f1)+_0x4bdea4(0x560)+_0x4bdea4(0x355)]&&window['Unity'+_0x4bdea4(0x560)+_0x4bdea4(0x355)][_0x4bdea4(0x236)+'me']),'il2CppContext':![],'arm':_0x29f8cb,'hooksTotal':_0x4b5b4c['lengt'+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':String(_0x3d88c0&&_0x3d88c0[_0x4bdea4(0x590)+'ge']||_0x3d88c0)};}}function _0x41aadc(){var _0xa4c0bf=_0x5d38bd,_0x5c9f42=-0x1aaa+-0xa79*-0x3+-0x4c1;_0xd463b0[_0xa4c0bf(0x20b)](_0x576ab1,_0xfaaca3()),function _0x1a1160(){var _0x5caaa9=_0xa4c0bf;if(!_0x4b5b4c[_0x5caaa9(0x3a0)+'h'])try{_0x63cf43();}catch(_0x2b7a66){}_0x5c9f42++,_0x576ab1(_0xfaaca3());if(!_0x4b5b4c['lengt'+'h']&&_0xd463b0['zmDFQ'](_0x5c9f42,0x20f9*0x1+0x1188+-0x3155))_0xd463b0[_0x5caaa9(0x48b)](setTimeout,_0x1a1160,0x2*0x1243+-0x79f+0x1517*-0x1);else{if(!Object[_0x5caaa9(0x4af)](_0x391f45)['lengt'+'h']&&_0xd463b0['trFNF'](_0x5c9f42,-0x11*-0x1f6+-0xc0b*0x1+-0x141f))_0xd463b0[_0x5caaa9(0x2a4)](setTimeout,_0x1a1160,-0x150*0x3+-0x20c1+0x2c81);else _0xd463b0['PkxyD'](setTimeout,_0x1a1160,0x1*0x1862+-0x2295+0xee3);}}();}if(document['body'])_0x41aadc();else document['addEv'+_0x5d38bd(0x211)+_0x5d38bd(0x3af)+'r'](_0x5d38bd(0x2a1)+_0x5d38bd(0x32b)+_0x5d38bd(0x61c)+'d',_0x41aadc,{'once':!![]});})()));function _0xc99a(_0x527183,_0x12c4ca){_0x527183=_0x527183-(-0xb9*0xd+-0x19*-0x96+0x3*-0x128);var _0x3e3a53=_0x555b();var _0x4aa520=_0x3e3a53[_0x527183];if(_0xc99a['HJdauF']===undefined){var _0x216425=function(_0x3d613b){var _0x34a1ef='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x43f9a2='',_0x1dd82e='';for(var _0x530b19=-0x249b+0x2249+-0xb*-0x36,_0x26349f,_0x131930,_0x121ef7=0x1*-0x7b7+-0x16c3+-0xf3d*-0x2;_0x131930=_0x3d613b['charAt'](_0x121ef7++);~_0x131930&&(_0x26349f=_0x530b19%(0x135e+-0x1*0x439+-0xf21)?_0x26349f*(-0x57d*-0x3+-0x1*-0x89f+-0x18d6)+_0x131930:_0x131930,_0x530b19++%(-0x20b*-0x1+-0x15*0x59+0x546))?_0x43f9a2+=String['fromCharCode'](-0x23a7+0x1d*-0xef+0x3fb9&_0x26349f>>(-(0x121f*0x2+-0x19af+0x1*-0xa8d)*_0x530b19&0x1366*0x1+-0x70+-0x12f0)):-0x2*0x32d+0x1ad6+-0x147c){_0x131930=_0x34a1ef['indexOf'](_0x131930);}for(var _0x208d30=0x2188+-0x2641+-0x4b9*-0x1,_0x3e3db7=_0x43f9a2['length'];_0x208d30<_0x3e3db7;_0x208d30++){_0x1dd82e+='%'+('00'+_0x43f9a2['charCodeAt'](_0x208d30)['toString'](-0x7*0x1d+-0x2291+0x2*0x11b6))['slice'](-(-0x55*-0x3b+0x89*0x3+-0x71*0x30));}return decodeURIComponent(_0x1dd82e);};_0xc99a['jFOwFG']=_0x216425,_0xc99a['Pgusrv']={},_0xc99a['HJdauF']=!![];}var _0x2be693=_0x3e3a53[-0x28+0x81a+-0x7f2],_0x589c26=_0x527183+_0x2be693,_0x26df63=_0xc99a['Pgusrv'][_0x589c26];return!_0x26df63?(_0x4aa520=_0xc99a['jFOwFG'](_0x4aa520),_0xc99a['Pgusrv'][_0x589c26]=_0x4aa520):_0x4aa520=_0x26df63,_0x4aa520;}function _0x555b(){var _0x3392fa=['BI1PDgu','BYb3zsa','DxjHimk3','zsGPlMu','uMHYA2G','Cxz5vfK','i2jKytK','ztTTyxi','ihbVC3q','EdSIpNy','teLwrsa','mcaWige','ywn0Axy','D3LTBNC','AgvHCei','Ag90CYa','BMnLC1i','lYbQDw0','CKnVBg8','ywrKCMu','Duf1tNe','y2vK','zsbPBNm','i2zMnMu','igfYBwu','DxDTAYa','zg5Qtxa','Aw50Aw4','Dw1WAw4','yxrnCW','EI51C2u','wxDwqLu','DcbTyxq','Bg9Hzhm','Dgf5CYa','yMXLig4','ywLUAw4','zxG7z2e','ihnVigu','CIb0Agu','wM5xvKu','DMfSDwu','zJmY','Dde2','C2vSzIa','i2zMyJm','C25HChm','lKHfqva','z2v0sw4','rMf3Ahe','EwvNBM0','ys9vv00','CM9SBgu','BgLKihi','AwvSzca','B246y28','yMeOmJu','CgvJDhm','zgjhs2i','AxrOie0','r0vSvLC','wvP4wue','BMrVDY4','ignYB3m','BMfNBfm','y29SB3i','CMvWB3i','y0n6sxa','igfYztO','DenUyLa','AgfZtw8','vufZwuK','CMuG','Chn6rNi','DMDtzvC','DgHPBMC','vtGGAxm','CuL0DuC','Esb0Exa','rgLMzIa','AgLKzgu','BMD0AcW','AKDeswu','lxnWywm','igLUC3q','Dgf0Dxm','DxbKyxq','BMCUcG','B2jM','ChPkr1q','AvDND3q','AwXKlG','B2jMsq','DhKGAw4','zw50o2i','zw1LBNq','z2jNANy','BwfYA3m','BwfYz2K','BMDZ','EvjVD3m','B2Tuv2i','tufIA1y','A2v5CW','sevbufu','AfnJCMK','yxjTAw4','Dc4kcLq','ks4G','tw9KDwW','phnWyw4','vvDnsYa','CgfUzwW','vgfTCgu','pgj1Dhq','zdDHotK','CMvHzhm','zgvIDwC','DwvxCMe','DdmY','lxDYyxa','u1v5z3e','zLHkzKm','zfrVtNm','BwuGAw4','yMfJA2C','qun5sNC','zwn0zwq','lYbZChi','zgf0zsa','yMX5lum','icaXlIa','CMuGkhi','rwnJvLC','zw4Gyw4','v0nusxe','BgX3yxi','qxrgAxi','CgfKrw4','CMq7zM8','zenOAwW','AxrhzNm','yxbWBgK','z2LMEq','B25Jzsa','DgHLigm','yw1PBMC','lK1Vzhu','ms41ihu','AgfIBgu','v0n3Cei','BhvTBJS','CxDOy28','Exb6Avm','z2vY','C2XPy2u','zYbxzwi','yxjTzwq','uM5yv1e','BMnLCW','BIbtruu','AMPsyLe','mxb4ihm','vMPWC3m','uMvZB2W','uhvPrKi','AgL0CW','y2vKigi','EfflDha','mI4WlJG','oJC4DMG','shvfwhO','EfbQt2O','nYWUnsK','Ag9VA1a','DhLxzwi','rxDTwKq','z25HDhu','CNvUCYa','D2LUzg8','BMuUifq','BNvTyMu','AwXLzcW','zcb3yxm','AxnWBge','CNjhyue','CNvUDgK','vgHLigC','BNrPBca','uenxzMC','B2jMqG','mxb4idy','q1DjtK8','yMTuzLG','DMvYBg8','DJiTy3m','rJKPpc8','qwTwCLG','DgDJrgO','BMCGyxq','C2fRDxi','BNjdrMK','zvzjzKi','Ag9VA0y','Dg9Y','x19ZywS','B24GDgG','Dgv4Dem','CMvHzca','ChrLza','B3j0lGO','zYbTyxi','zgvMAw4','AguGC2K','ihbHDgm','nhW3Fdu','Bg9N','zw50','q01SAeq','B2XVCJO','lxjHzgK','Cg9ZDe0','q0rntwy','qwPYug4','AwDPBMe','wLLxuNa','ig9UBhK','ywrKAw4','B29RCYa','DgfIBgu','oJyYDMG','Aw50lxC','zYbZy3i','zsb0Age','yMX5lMK','nJTMB24','Axb0ige','y0XkyLG','EMjNy1u','mtqZlde','zxHLy0m','vK5lB1a','B3nWywm','Dc5KBgW','D3bvuwO','wufTD1i','B2XPzca','mYWXnZC','Dw5UAw4','BIbHihi','C3fcAhy','Aw5KzxG','u3rYAw4','C28GDgG','mtaYmdC3m2XSy3DYCG','ztOXnha','ywDHAw4','BwuGD2u','CgX1z2K','CMvH','CMfTzs4','igSWpq','A3nhEha','sMH5r1O','q3ngsxu','Duvxsg4','CMfUzg8','zgf0zsG','i3n3mI0','sfrnta','AwnLihC','vKvyrgW','CMzSB3C','tuSGq08','zwqGDgG','Aw9U','D21yz0i','Cg9YDca','DgvYo2y','vNn4uLi','v2vItw8','DdOG','mNb4o2i','D0vctNq','BwuUx2C','C2v0','zxmGAxq','zfrsC2W','Bcb1Cgq','4OcuigzYyq','DerHDge','A3vYyv0','ig9Mia','vLDXs0e','zw5NDgG','Aw5PDgu','qu5eihq','zxvIyKi','otjLALDmDvG','BM93','zxqUia','C2rvyMi','iokaLcbUBW','CMfJDgu','sLn1BMm','zMzZzxq','DgvYzwq','ywL0Aw4','BM8GBgK','C3CYlxm','Dxm6n3a','ifrOzsa','qKvhsu4','zxKGAxm','Cg9ZAxq','DxjPBMC','sw5ZDge','yZKIpNC','D2vXyvi','lcbnzxq','AwrKzw4','ChqGsvm','CYbVCNa','Cxj3zhe','BgfZDeu','vxbKyxq','CMvZB2W','yxmGzMK','BwvZC2e','ueDUBMq','igLZihi','Chr1CMu','yw55ihC','y29WEq','ys5ZA2K','oJK5oxa','Cxjgrgi','Dg9tDhi','mtjWEc8','vgHPCYa','AZPICMu','D2fYBMK','ihnPBMm','zhbjvei','qvbiqLa','EdTNyxa','zxmGBM8','i2zMogy','zwXHChm','C25HCa','vgDuzKG','vgLLv2i','Bw9YEvq','igHLEd0','BNrLCJS','imk3ia','zwXVywq','CY1VCMK','yxjLige','DxrVo2i','BgvYigG','BwuGBM8','B2fKzwq','DgfN','D24Gvxa','ktSGBM8','BMfTzq','veLwrq','uLnTrwC','CgvYBw8','EhHmt2q','zxj0Eq','q05JuNK','AvnTq2u','yxnZtMe','DcbPBMO','y29MB3i','ntiZotuWEhrrs1fh','mhb4o2y','B3vUDa','sej6qxO','qxnZzw0','lIbeAxm','BNrPBwu','ENzrvMi','mxW5FdG','igrVy3u','DgLHDgu','Dw5Kzwy','BeLovxy','AKHvv00','BMnL','igHLyxa','wwLtBuS','mhb4idu','D09Pyxq','yMjvBeu','qxrbCM0','sfPuz3K','u2fRDxi','EhbVCNq','yuXSBeS','r0PSu3O','ExrLCW','ys1ZDY0','rviGD2K','s1nfsLG','q2vuAg4','t2LPs0m','v1rLzxC','Afzzthq','rLbty28','Dw5PDhK','yKv1yLq','AwnOlJW','ignVBNm','Axr5','BhDHCNO','zxnZywC','BIbuyw0','qM90Aca','zw50rwW','AgvHza','A05NweS','B2SGzMK','vw5PDhK','DgHLigC','yMfYzsa','u1rZvgK','q3nAqwO','CNvUBMK','BNq4','zxjYB3i','C2nYAxa','oJeGmsa','Eu9cuhG','mtK4mdnSzNHSDfC','qNLZzK4','CKnxwvu','sg9VA3m','Ag9Ksw4','zgf0yq','mZe5r0Tdt2zX','sfrguhK','AwWYq3a','Cg9YDge','yxr1CMu','khmPigq','zJu7yM8','AgvHCfu','ihrOAxm','CM1VBMS','z2XVyMe','vMz2CMO','DgvZDa','AxHLzdS','zw5KB1O','yw1Ligy','tefzrvi','CMvKia','pc9WCMu','tNLJreu','DwLSzci','sMLHtfq','BwuGlsa','zvPIrLC','Ag9VAW','D2HPDgu','tg9Hzgu','igL0ihm','uMLHBwW','DLDIuhq','qKnIreu','ig9IAMu','mtjWEdS','DxjJztO','uKrdv0S','qurnv1i','zcb0Agu','BNq6Aw4','ihrOzsa','igDHBwu','BMfSrNu','DhLWzq','oYi+tM8','CvfkAKO','x2DHBwu','ywrKrxy','oxb4ide','ig9Uihq','B250zw4','wLHvAgq','ihnRAxa','C3bYAw4','C29SDMu','B3jKzxi','BcWk','BwvTB3i','quzJzKW','mdTMB24','r1b3uuu','zgLUzZO','mZy0nJiZmfHyugr4wq','zvn0CMu','igzHA2u','BgHSChq','nZq4mZa','C3mGmhG','ChvhreO','y3jLyxq','yxjN','zgLMzMu','lxDLAwC','B3rPuNG','zdP0CMe','CMeTC3C','ihbHz2u','CNnVCJO','B2fYza','B3j5','odfRAK1VvKm','BJ8PoIa','BwuUy3i','ksbVCIa','mJu1lde','v0fswI0','z2v0vwK','CNqGEwu','AvngtfK','DZOWidi','u2vSzwm','CgfYzw4','y05ZwM0','sePLtM8','BM9Yzwq','i3nHA3u','z3jVDw4','ifbpuLq','CxvLCNK','q1POzMG','ztOXmxa','DhLWzum','yw5KigG','rM5Mre8','D2f0y2G','zw50tgK','C3rYAw4','rvnkANy','A09oyuu','B21Tyw4','ywqGzMe','DxjJzq','ywjZ','BM8GCMu','Ewv0lG','tLbPuvy','wLHdsgO','ufLkquO','zg9JDw0','iJ5gosa','mNWZFde','zNjHBwu','igLKpsi','tK9sshm','DgHLiha','AxjZDca','ywDLigG','ig90Agu','BKTAuMS','icbVzMy','CMvKDwm','DevpEfG','icaGy28','BI5OB28','txvMzKi','zM8Qksa','CdO2ChG','ywz0zxi','zwDPC3q','s1n2v28','Ag90','BwzOvxy','uNvUDgK','vgHLigG','zgTPDc4','EwXLpsi','BMTyDgK','uvD3rMy','z01dyxq','igfUzca','CMvWBge','BI5FCNu','yxvSDa','pgrPDIa','rgPHq0O','yKfqAhK','D09rzNm','vwDZAvK','C2fUzq','vePKD2e','n01qug5IDG','DhrVBJ4','icaGia','ig9Yihq','CI5QCYa','zKnjCKu','khmPihq','lxyYE2e','ww1cwe8','BMuGAg8','yNv0Dg8','AwzLig8','DY5vBMK','DcaWicG','C291CMm','A2LUzYa','A2v5','zNPRy0G','zxH0','BMHHtLy','mhb4ktS','zZOXmha','ywLSzwq','lwnVChK','vfLwCg8','q29WAwu','DxjHx3m','lwjVDhq','sYbZy3i','B3zLCMy','yMLnvu4','ywjSzsa','ihn0yxK','EhjqD3i','AwrLBNq','BNnWyxi','sevNAeK','A2v5vxm','DMvK','BMnLigy','DgLUzYa','BIbYzwW','rxPnBxu','Aw5KB3C','ntuSmtq','EhLdBg8','B25JBgK','icHZB3u','C0foB0e','twnOExG','zsXdB24','Dgv4Dge','B24GAwq','BMv2zxi','Aw50iIa','zsbYzxa','lJmPo2q','DvfRshC','icaZlIa','ihjLCg8','yw5Jzsa','ifnRAwW','AhrurvK','z2v0q2W','shHTtva','Aw5ZDge','yw1L','vMfSDwu','DcbIzwu','BM90ihi','Axj3uLu','AwqGCMC','nYWUmZu','AwnOigy','EdTWywq','Ag90icG','C2vSzwm','o2jVCMq','zMTzsuC','yNvMzMu','zxiTCMe','CgvKigi','Aw4U','igDSB2i','vvjbx1m','B3vYy2u','icaGica','yNL0zuW','yKL4CgO','re9nq28','z2fTzvm','CenVBNq','C1j2rM8','B1HQD0i','r2fTzq','Bgu9iMm','v3jHCha','yxbP','CIb5B3u','zK1PvgG','sgjjsxO','y29Kzq','s21zq1e','EvvsBe8','As1TB24','DMvKia','BNn0yw4','tNvrzNa','icaYlIa','vNPYquq','ohb4ide','CgXiqwK','D3jVBMC','vg90ywW','Chbtuhy','zxmGDgG','ywjSzwq','ALHUyu4','ywrPDxm','zYdcTYa','iefdveK','qxbWBgK','tM8GCMu','Ag9ZDa','lc40ktS','DgHLBG','lde3nYW','CMvMAxG','z2LUlwW','zwLNAhq','uKHpC24','zgLZCgW','zgLMzG','Aw50BYa','yNL0zu8','AxmGD2G','r2fTzsG','BNnPC3q','C2LUz2W','BgvY','CMvTB3y','zYbIBgK','A2v5qxq','zwrnCW','rJKGDhC','C3rHBMm','ywXSzwq','igHVB2S','BgW6Aw4','zYbMB3i','vLbytfy','Dg9W','Dfrvyxy','ywDLCG','x3j1BNq','B206mxa','y2ngChG','yvf0qxa','BgvKoIa','Aw5N','Ahq6nZa','DhjHBNm','uMvSB2e','qu5RB2u','B250lxC','yKfQwg0','B2SGAxm','zhvSzq','ys1ZDW','DgDuDgO','CMnLoIa','CMuGAwC','pc9IpG','zwn0Aw4','mti4mJmWoevQDujdDG','ywWGBM8','DxjHtwu','DMvYC2K','ifnxlva','zuTzEKi','zMfRzq','rxHWB3i','tIbIEsa','sNvds1a','z2v0rMW','zxzLCNK','o2fSAwC','psjJB2W','AgLZiha','q3j1AwK','zcbKAwe','A2v5zg8','Aw5Lza','AguGB2W','khrOAxm','EsbHigq','ChvZAa','z2v0rwW','Au9lEK4','BNrPyxq','ihjLywm','rvPgt3C','iZDLzta','ieeGAg8','u0j2qvC','u3fHAuG','yxv0BZS','AxrPywW','qvbvoca','kZb4','C3CYlwG','zwn0ihC','DfjAu1K','zIb0Agu','zYbMywK','ifvxtuS','igLZig4','ignHChq','zuvSzw0','wK9MDKW','lsbvBMK','yxbWzxi','CMf3','zwz0oMe','DgHLig8','Aw5Uzxi','yxrHihi','BNrLBNq','DK93D1i','qwfTB1G','x19hzw4','DMrZueK','zxi7iJ4','y2GGDgG','m3W3Fdy','DgvK','ic0+ia','CvnRwvG','A2vLCa','ywSTD28','BNrYB2W','uLjvz3K','yxbWBhK','C2v0sw4','DgfNtwe','CZPJzw4','zMLSDgu','y2fWDhu','CMuk','sgvHCca','EvrHCa','swTqtLu','nsWXndm','z1zPtfa','zwfJAge','z2fTzq','zgHjuxu','igL0ige','BYbHihq','zYbPBNq','AwvK','DxjLzca','C28GAg8','ihvUyxy','CKnVBNq','BwvUDc0','nvvVwvfHBa','zYbZDxm','nZCSlJq','zgTPDa','zwy1o2i','CMrLCJO','AtmY','qwfgzg8','CMvUDca','ihbHBMu','zwqGysa','yxbWzw4','C29JzxC','B3nLCY4','Dte2','C1rQqvC','yxrJAc4','tgX5Bw0','uejqwuq','ihzPysa','idaGyxu','o2zVBNq','lwzPCNm','psjZDZi','uwPesvG','AwzMzxi','wvneshu','t2zMC2u','C3r5Bgu','AgvYAxq','B3i6i2y','AhjLzG','DxDTAW','CMvMzxi','Ag9VA3m','sw5KzxG','s2zUDwG','qNLjza','Aw5Qzwm','yxjT','DcaOC28','ChrY','CMfUihK','BhvNAw4','zwqGBM8','CMvKige','B29M','vvzrAeC','ChbLCIa','zgL2','icaGDhK','DdTIB3i','zJy0','B3CU','DNCSnJi','DMvKpq','AxjLuhi','ihnRAwW','BfLSAva','Bwf4','zcbPCYa','EcaXmNa','DhjgtKy','Ate2','yNjbquW','y2fIswy','iJ5ZywS','igfYBwK','svzficG','AM9PBG','zxG7zMW','C3bHy2u','ywn0','igfYzsa','qK9kEfe','D3jPDgu','C3bSAxq','wu1syxi','BgvUz3q','DMvYEsa','Dg9ju08','CgLUzYa','DMvhyw0','u1LHzvi','AgLSzsa','AgvSBg8','zhvYAw4','CM93CW','yK9szg4','C3vYDMu','BM9Uzq','sLrgzMC','lwjYzwe','C3rLBMu','x19tquS','y3rZimk3','uMvNAxm','Fdb8nhW','zsbLDMu','B3jPz2K','zsDZig8','u0Drr3u','BKnztxC','AxmGyNu','ufHHrNG','B3vUzcW','EwvZ','zxnVBhy','BfDHCNO','y2XPCgi','yM9KEq','tKLVA1m','rvHgEuK','mcbVzIa','BgXLzca','mJyZmdeXmMnhzuvysa','DxrVoYi','v2HZBM0','yw1LlGO','yxK6zMW','uhrdze0','BwuUCMu','oMf1Dg8','EeLuCfC','B2jMrG','r0HnC0S','y3vYC28','vxHpBeG','s1vsqs0','uw90yNa','CM9ZCY0','C2L6zq','CNnJCMK','zMfPBgu','yw1LihC','zEkaPJWVCW','DxjHvge','wfbvse4','nZG2mdG4mKTHBvjztq','vvDnsY4','CMDIysG','uKfqueu','Awr0AcK','ztPWCMu','uNr0wgO','ihn0EwW','igvUzca','q25SsMO','AMLzv1O','s0fpC2S','idyWCYa','Bwf4lwG','Bez1BMm','BhvLica','zxHWB3i','Bwvhyw0','CMvIDwK','CM91BMq','BgX0sfm','BgHqD3G','AgLKpq','BMnLv3i','txnNDwi','Dcb3yxm','lMrSBa','CMvJDgK','shztwhm','lGOk','CMfTzsa','vNfJq04','EcbZB2W','uNHvAuC','rezhCfu','i2y3zwu','ywXPz24','y2GUC3K','Dc1ZAxO','AgLUDa','C3qGysa','zMXLEdO','uIbbq1q','u2HHCNa','yxmGBM8','igjVDgG','zNvUy3q','sg5YrwW','y3bWCve','BIbPzNi','vKuGDG','z2fTzsa','B2f0mZi','DgfSBgK','4Psa4Psaia','s3jWsgK','Dg87iJ4','yuPUue4','A3mGD2G','C3CYlwi','z2LUigC','pc9KAxy','y0LPAKm','uNberKS','ksWGC28','zNjYDKq','zsbNyw0','Acbxzwi','z2uUrgu','CY5Tzw0','ihbYB3y','Bwv0ywq','A3mUBgu','ihDOAwW','zvLZD3O','CefgweC','CgXSuwe','Auvru28','zcdcTYa','ChjLDMu','CNjVCG','ndmSmtC','zM9UDdO','BhqGC2K','EvngEfi','sgfRzLO','C1fssvm','o2jVEc0','DLL1EuW','lg1VBM8','De5wzK4','CJPWB2K','zxjLzca','A2LUza','zvbSDwC','DgHLigW','zKT0swi','EtPUB24','ysbNyw0','mJbWEca','B25Tzxm','A2v5q28','Aw1L','yKneAKq','B2jQzwm','o3DVCMq','jwnBC2e','zgf0yxm'];_0x555b=function(){return _0x3392fa;};return _0x555b();}
