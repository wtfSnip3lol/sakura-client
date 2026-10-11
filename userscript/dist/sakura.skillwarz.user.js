// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.9.8
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

(function(_0x42e2f8,_0x3de00b){var _0x289684=_0x45e7,_0x16db2a=_0x42e2f8();while(!![]){try{var _0x2640db=-parseInt(_0x289684(0x200))/(0x634*-0x1+-0x257c+0x2bb1)+parseInt(_0x289684(0x624))/(0x18e3+0x15*0xf+0x1*-0x1a1c)*(parseInt(_0x289684(0x6e4))/(-0x13d7+-0x1efe+0x8*0x65b))+parseInt(_0x289684(0x819))/(0x155d+0x1cc*0x3+0x25*-0xb9)*(-parseInt(_0x289684(0x62d))/(0x145f+-0x1*-0x1439+0x31f*-0xd))+-parseInt(_0x289684(0x5ba))/(-0x659+-0xe03+-0x2*-0xa31)*(-parseInt(_0x289684(0x9ee))/(-0x2e*-0x92+-0x2511+0xadc))+-parseInt(_0x289684(0x2c0))/(-0x4dc+0x61*-0x23+0x3*0x60d)+parseInt(_0x289684(0x623))/(0x13d*0x1+0x2*0xdd4+-0x1cdc)+-parseInt(_0x289684(0xb39))/(-0x1e*0x52+0x184*0x17+-0x1936*0x1)*(parseInt(_0x289684(0x28b))/(0x235d*-0x1+0x26c8+-0x360));if(_0x2640db===_0x3de00b)break;else _0x16db2a['push'](_0x16db2a['shift']());}catch(_0x5a18d9){_0x16db2a['push'](_0x16db2a['shift']());}}}(_0x2613,0xa4*-0x849+0x2*-0x4a273+-0xdbc3e*-0x2),((()=>{'use strict';var _0xc5af74=_0x45e7,_0x308226={'zHJcJ':function(_0x3d4154,_0xc49cf2){return _0x3d4154(_0xc49cf2);},'HnbUq':'snaps'+_0xc5af74(0xc14),'AVPeB':function(_0x45708b,_0x9a2f5f){return _0x45708b!==_0x9a2f5f;},'lOFMk':function(_0x2e4d1d,_0x117337){return _0x2e4d1d===_0x117337;},'orsOA':_0xc5af74(0xb20),'eukHX':_0xc5af74(0x622),'dhCgA':function(_0x14d188,_0x1690f4){return _0x14d188<_0x1690f4;},'YJvBG':_0xc5af74(0x220),'LfQwr':function(_0x19d91a,_0x48d98c){return _0x19d91a<_0x48d98c;},'BtlMR':function(_0x3ff33e,_0xf35c15){return _0x3ff33e+_0xf35c15;},'PGYYf':_0xc5af74(0x533),'tBFJV':'zYpYW','daykW':_0xc5af74(0x503)+'e','xqHND':function(_0xaa1f3c,_0xd33c47,_0xf7967e){return _0xaa1f3c(_0xd33c47,_0xf7967e);},'UTGxG':function(_0x1d53bf,_0x34811e){return _0x1d53bf+_0x34811e;},'IkXcy':'color'+':','ELnof':function(_0x14c7a0,_0x490c91){return _0x14c7a0!==_0x490c91;},'DgXhA':_0xc5af74(0x82c),'KZnJI':_0xc5af74(0x43e),'crDcq':'sakur'+_0xc5af74(0xb7b)+_0xc5af74(0x7df)+'b','wySSQ':function(_0x228e1b,_0x5c6d05){return _0x228e1b&&_0x5c6d05;},'kykSS':_0xc5af74(0x7ff)+'ion:f'+'ixed;'+'left:'+_0xc5af74(0x1e5)+_0xc5af74(0x386)+_0xc5af74(0xb14)+_0xc5af74(0xc71)+_0xc5af74(0x4f7)+_0xc5af74(0xc5c)+_0xc5af74(0x334)+_0xc5af74(0x679)+'point'+'er;us'+'er-se'+'lect:'+_0xc5af74(0x249),'xZHAR':'borde'+'r-rad'+'ius:9'+_0xc5af74(0xaec)+_0xc5af74(0xc62)+'ng:4p'+_0xc5af74(0x74d)+'x;fon'+_0xc5af74(0x813)+'x/1.4'+_0xc5af74(0x969)+_0xc5af74(0x38c)+_0xc5af74(0x6e6)+_0xc5af74(0x9de)+_0xc5af74(0x8d9)+'nospa'+_0xc5af74(0x66e),'CVdtZ':_0xc5af74(0xa8c)+'a','RdvkK':function(_0x421dfb,_0xc5963c){return _0x421dfb+_0xc5963c;},'kAdPZ':function(_0x502896,_0x39f65f){return _0x502896+_0x39f65f;},'xXJMb':function(_0x583617,_0x6c88b1){return _0x583617+_0x6c88b1;},'XdoLK':function(_0x2313d7,_0x12f8f7){return _0x2313d7+_0x12f8f7;},'bjfza':_0xc5af74(0xbf0)+_0xc5af74(0x89b)+_0xc5af74(0x9f3)+_0xc5af74(0x690)+'Assem'+'bly.i'+_0xc5af74(0x900)+_0xc5af74(0x4de)+_0xc5af74(0x906)+_0xc5af74(0xb2d)+_0xc5af74(0x197)+_0xc5af74(0x962)+'n.hoo'+_0xc5af74(0x778)+_0xc5af74(0x621)+'\x20','xTfkH':_0xc5af74(0x435)+'oks\x20r'+_0xc5af74(0x676)+'ered\x20'+'after'+'\x20it\x20a'+_0xc5af74(0x433)+'nored'+_0xc5af74(0x65f)+'the\x20l'+'ife\x20o'+_0xc5af74(0x5e0)+_0xc5af74(0xc3f)+'.\x20','odVmw':_0xc5af74(0x348)+_0xc5af74(0x432)+'\x20','wcrJO':function(_0xa1c71e){return _0xa1c71e();},'CRboz':_0xc5af74(0x33d),'HNtkM':'sakur'+'a-sw-'+'v2-cs'+'s','Gyalo':_0xc5af74(0x5e5)+_0xc5af74(0x779)+'-v2{a'+'ll:in'+'itial'+'}','ZrTVO':_0xc5af74(0xa8c)+'a-sw-'+'v2','FhEIM':_0xc5af74(0x88d),'UXRgQ':function(_0xaf8bc9,_0x5dc838){return _0xaf8bc9!==_0x5dc838;},'lPmbx':_0xc5af74(0xb94),'NrmfI':function(_0x4d0102,_0x1e01f9){return _0x4d0102+_0x1e01f9;},'almkW':_0xc5af74(0xad2),'gvajS':'auto','WZLVU':function(_0xb741d8,_0x44b32f){return _0xb741d8*_0x44b32f;},'Upcyn':'kAgVd','rJDPk':function(_0x39640f,_0xc3a312){return _0x39640f(_0xc3a312);},'KuoZo':function(_0x155d3b,_0x5b5ba4){return _0x155d3b(_0x5b5ba4);},'qzdTA':_0xc5af74(0x4fe)+'port\x20'+'after'+'\x2060s\x20'+'—\x20fra'+_0xc5af74(0x1f8)+_0xc5af74(0x631)+_0xc5af74(0x5b7)+'?','IYoIt':function(_0x48ba61,_0x17a410){return _0x48ba61+_0x17a410;},'LZxik':_0xc5af74(0xc80)+'e\x20rem'+'ainin'+'g\x20sus'+_0xc5af74(0x4a8)+_0xc5af74(0x7c3)+'\x0a\x0a','KdgVr':_0xc5af74(0xb82)+_0xc5af74(0x34d)+_0xc5af74(0x64a)+_0xc5af74(0x39e)+_0xc5af74(0xb65)+_0xc5af74(0x28c)+_0xc5af74(0xbdd)+_0xc5af74(0x1ba)+'the\x20c'+_0xc5af74(0x27a)+'origi'+'n\x20ifr'+_0xc5af74(0x3bd),'TaHAu':'\x20\x203.\x20'+_0xc5af74(0x351)+_0xc5af74(0xa8c)+_0xc5af74(0x212)+'llwar'+_0xc5af74(0x4da)+_0xc5af74(0x4b3)+'AND\x20t'+'he\x20ol'+'d\x20dia'+_0xc5af74(0x250)+_0xc5af74(0x820)+'re\x0a','KMmOX':_0xc5af74(0x758)+_0xc5af74(0x611)+_0xc5af74(0xbd0)+_0xc5af74(0x888)+_0xc5af74(0x96b)+_0xc5af74(0x1ea)+_0xc5af74(0xc42)+_0xc5af74(0x9e0)+_0xc5af74(0xb03)+_0xc5af74(0x3d5)+_0xc5af74(0x764)+_0xc5af74(0xbbe)+'nstan'+'tiate'+_0xc5af74(0x4bb),'klmfs':function(_0x351793,_0x42e142){return _0x351793+_0x42e142;},'HDPGd':function(_0x37d8a9,_0x3af08d){return _0x37d8a9===_0x3af08d;},'FYYIj':_0xc5af74(0x454)+'74','pEWrf':'EcAsG','VynUR':_0xc5af74(0x7bb)+'·\x20','exLmb':function(_0x242ada,_0x5ac107){return _0x242ada>_0x5ac107;},'MfACc':function(_0xd4ae3e,_0x447d60){return _0xd4ae3e+_0x447d60;},'RxzyP':function(_0xd9103f,_0x12ef01){return _0xd9103f+_0x12ef01;},'tbJhH':'hooks'+'\x20arme'+_0xc5af74(0x7ab),'jUzFL':'#ffd4'+'8a','dAgIG':function(_0x4a8f6b,_0x223f74){return _0x4a8f6b+_0x223f74;},'CllCp':'F9\x20tw'+_0xc5af74(0x46e)+_0xc5af74(0xc1e)+'walki'+'ng\x20/\x20'+_0xc5af74(0xa49)+_0xc5af74(0xbdd)+_0xc5af74(0x379)+_0xc5af74(0x383)+_0xc5af74(0x216)+_0xc5af74(0x879)+_0xc5af74(0x5f4)+'ld\x20is'+_0xc5af74(0x879)+'h.','kRUkc':function(_0x2e7808,_0x463459){return _0x2e7808===_0x463459;},'PHNNU':_0xc5af74(0xa08)+_0xc5af74(0x490),'TVZKl':_0xc5af74(0x501)+_0xc5af74(0x3f1),'HjFvt':'Speed'+'\x20off','ZveDz':_0xc5af74(0xb7e)+'1b','IQLNU':_0xc5af74(0x8d8),'nlEyi':_0xc5af74(0x552),'cqqHO':function(_0xc7695d,_0x5aa931){return _0xc7695d+_0x5aa931;},'VaDeT':'#f7ee'+'f5','lAwyU':function(_0x1d1faa,_0x37c30c){return _0x1d1faa+_0x37c30c;},'isYKK':function(_0x1d00f0,_0x50ded7){return _0x1d00f0+_0x50ded7;},'snqtp':function(_0x5d7973,_0x5a1512){return _0x5d7973+_0x5a1512;},'TWsgk':function(_0x5565da,_0x3295b1){return _0x5565da+_0x3295b1;},'BOaJu':_0xc5af74(0x726)+'12px/'+_0xc5af74(0x2c9)+_0xc5af74(0x561)+_0xc5af74(0x53e)+_0xc5af74(0x44b)+'solas'+_0xc5af74(0x5b0)+_0xc5af74(0x2fe)+';box-'+_0xc5af74(0x328)+'w:0\x202'+_0xc5af74(0x6d2)+'0px\x20-'+'20px\x20'+'#000;','EjLYY':function(_0x5e696c,_0x2fdc5a){return _0x5e696c+_0x2fdc5a;},'eitvp':function(_0x2afd00,_0x4aa62f){return _0x2afd00+_0x4aa62f;},'ynGim':_0xc5af74(0x1a2)+'style'+_0xc5af74(0x1ff)+_0xc5af74(0xb8c)+_0xc5af74(0x5cf)+_0xc5af74(0x9b4)+_0xc5af74(0xa94)+_0xc5af74(0x3fe)+'om:1p'+_0xc5af74(0x67f)+'id\x20rg'+'ba(25'+_0xc5af74(0x271)+_0xc5af74(0x821)+'.3);d'+'ispla'+'y:fle'+'x;gap'+_0xc5af74(0xa3c)+'align'+_0xc5af74(0x4cc)+_0xc5af74(0x932)+_0xc5af74(0x859)+_0xc5af74(0x2a2)+_0xc5af74(0x42a)+_0xc5af74(0xb95),'UvJsd':_0xc5af74(0x689)+'yle=\x22'+'color'+':','tDOCf':'\x22>sak'+_0xc5af74(0x78f)+_0xc5af74(0x9aa)+_0xc5af74(0x4d2)+_0xc5af74(0x7e6),'kjFyl':_0xc5af74(0x61d)+'on\x20id'+_0xc5af74(0x627)+'-copy'+_0xc5af74(0xa2f)+_0xc5af74(0xb8a)+'ispla'+'y:non'+'e;mar'+_0xc5af74(0x2cb)+_0xc5af74(0x564)+_0xc5af74(0x61c)+_0xc5af74(0x2c2)+_0xc5af74(0x3d7),'egnGG':_0xc5af74(0x61d)+'on\x20id'+_0xc5af74(0x627)+_0xc5af74(0x210)+_0xc5af74(0x926)+'\x22back'+_0xc5af74(0xa42)+'d:tra'+_0xc5af74(0xb30)+_0xc5af74(0xbe4)+'order'+_0xc5af74(0xc18)+_0xc5af74(0x9ca)+'\x20rgba'+_0xc5af74(0x36f)+_0xc5af74(0x324)+_0xc5af74(0x579)+_0xc5af74(0x34e)+_0xc5af74(0x5cd)+_0xc5af74(0xa22)+';bord'+_0xc5af74(0xa6e)+_0xc5af74(0x340)+'7px;p'+_0xc5af74(0x36b)+_0xc5af74(0xb90)+_0xc5af74(0x92f)+_0xc5af74(0x41a)+_0xc5af74(0x4ab)+_0xc5af74(0x3d3)+'\x22>x</'+'butto'+'n>','MTzun':_0xc5af74(0x308)+'>','qilOM':_0xc5af74(0x1a2)+'id=\x22s'+_0xc5af74(0xa98)+'dy\x22\x20s'+_0xc5af74(0x926)+_0xc5af74(0x1d9)+'lay:n'+_0xc5af74(0x33e)+'>','JTXwL':_0xc5af74(0x1a2)+'style'+_0xc5af74(0x1ff)+'ding:'+_0xc5af74(0x93d)+_0xc5af74(0x9b4)+'order'+'-bott'+_0xc5af74(0x326)+_0xc5af74(0x67f)+'id\x20rg'+_0xc5af74(0x77f)+'5,143'+_0xc5af74(0x821)+'.18);'+'displ'+'ay:fl'+'ex;ga'+_0xc5af74(0x7cf)+_0xc5af74(0xa5e)+_0xc5af74(0x9e7)+_0xc5af74(0x6a5)+'nter;'+'flex:'+_0xc5af74(0x1c4)+'uto;f'+'lex-w'+_0xc5af74(0xa7a)+_0xc5af74(0x75f)+'>','inNGo':_0xc5af74(0x901)+_0xc5af74(0x289)+_0xc5af74(0x365)+_0xc5af74(0x922)+_0xc5af74(0x531)+_0xc5af74(0xbac)+_0xc5af74(0x95b)+'\x20min='+'\x221\x22\x20m'+_0xc5af74(0xb06)+_0xc5af74(0xc6a)+_0xc5af74(0x7f8)+'1\x22\x20va'+_0xc5af74(0x6f2)+'1\x22\x20st'+_0xc5af74(0x58b)+_0xc5af74(0x2d6)+':120p'+'x;acc'+_0xc5af74(0x634)+'olor:','FdZBL':_0xc5af74(0x582)+'\x20id=\x22'+_0xc5af74(0xa36)+_0xc5af74(0x4ec)+'label'+_0xc5af74(0xa2f)+_0xc5af74(0x73b)+_0xc5af74(0x269)+'#bda9'+'c9;mi'+'n-wid'+_0xc5af74(0xb7f)+'px;\x22>'+'1.0x<'+'/span'+'>','SusIF':_0xc5af74(0x582)+_0xc5af74(0xc0e)+_0xc5af74(0xba5)+'int\x22\x20'+_0xc5af74(0x74c)+_0xc5af74(0x921)+_0xc5af74(0xa86)+_0xc5af74(0x881)+_0xc5af74(0x806)+'twice'+_0xc5af74(0x50c)+_0xc5af74(0x918)+'king\x20'+'/\x20spr'+_0xc5af74(0x3ea)+_0xc5af74(0x7d4)+_0xc5af74(0x478)+_0xc5af74(0x669)+'ks\x20wh'+_0xc5af74(0x6ab)+_0xc5af74(0x3cd)+_0xc5af74(0x415)+'ich.<'+_0xc5af74(0x877)+'>','bokVT':_0xc5af74(0x3c5)+'id=\x22s'+_0xc5af74(0x320)+_0xc5af74(0x376)+_0xc5af74(0x58b)+'margi'+'n:0;p'+_0xc5af74(0x36b)+_0xc5af74(0xa5c)+'x\x2012p'+_0xc5af74(0x8d6)+'rflow'+_0xc5af74(0xa6f)+';flex'+':1\x201\x20'+_0xc5af74(0x640)+_0xc5af74(0x358)+_0xc5af74(0x6eb)+_0xc5af74(0x6a7)+'-wrap'+_0xc5af74(0x1e9)+'-brea'+'k:bre'+'ak-wo'+_0xc5af74(0x2b4)+_0xc5af74(0x635)+_0xc5af74(0x24e)+';','dWIvJ':_0xc5af74(0xaa7)+_0xc5af74(0x32c)+_0xc5af74(0x6b5)+_0xc5af74(0x9c8)+_0xc5af74(0x7cb)+_0xc5af74(0x917)+'t.\x0a\x0aT'+_0xc5af74(0x277)+_0xc5af74(0x30e)+_0xc5af74(0x400)+_0xc5af74(0x71e)+'self\x20'+_0xc5af74(0x542)+'the\x20g'+_0xc5af74(0x464)+_0xc5af74(0x6ad)+'loads'+_0xc5af74(0x45f)+_0xc5af74(0x730)+'ole\x20n'+_0xc5af74(0x20d)+_0xc5af74(0xbe0)+_0xc5af74(0x6fc)+_0xc5af74(0x1d1)+_0xc5af74(0x973)+_0xc5af74(0x788)+_0xc5af74(0x846)+'nkey\x20'+_0xc5af74(0xa83)+'t\x20inj'+_0xc5af74(0xac0)+'g\x20int'+_0xc5af74(0x8a7)+'\x20cros'+'s-ori'+'gin\x20g'+_0xc5af74(0x464)+_0xc5af74(0x22d)+'</pre'+'>','IZFzi':'#sw2-'+'out','WOHql':'#sw2-'+'x','siSRi':'#sw2-'+_0xc5af74(0x8f1)+'e','KBkTN':_0xc5af74(0x2b8)+_0xc5af74(0x8cd),'YHwAh':function(_0xd8cf56,_0x29d469){return _0xd8cf56+_0x29d469;},'ZqtBd':function(_0x5b51c8,_0x3d0a7c){return _0x5b51c8+_0x3d0a7c;},'RrDsd':_0xc5af74(0x9fd)+_0xc5af74(0x8cd),'maLPg':'\x20\x20\x20co'+_0xc5af74(0x652)+'\x20','Jonam':_0xc5af74(0x312)+'pes\x20','KFmxn':function(_0x26f888,_0x45dec3){return _0x26f888+_0x45dec3;},'LNAAR':_0xc5af74(0xa63)+_0xc5af74(0x8e3),'BkWXN':'no\x20Up'+'date\x20'+_0xc5af74(0x6e7)+'et,\x20o'+_0xc5af74(0x6dd)+_0xc5af74(0x1dd)+_0xc5af74(0xadc)+_0xc5af74(0x75a)+_0xc5af74(0x56d)+'atch.','LJoXo':_0xc5af74(0xb76),'mlZry':function(_0x2fa6f8,_0xc51430){return _0x2fa6f8-_0xc51430;},'nVJTG':_0xc5af74(0x23e)+_0xc5af74(0x98d)+_0xc5af74(0xa06)+_0xc5af74(0x758)+_0xc5af74(0x54a)+_0xc5af74(0x7c7)+'\x20\x20\x20\x20\x20'+_0xc5af74(0x758)+_0xc5af74(0x8a2),'iOAji':function(_0x8720e,_0x53543f){return _0x8720e===_0x53543f;},'CpUCE':function(_0x249617,_0x5e46da){return _0x249617+_0x5e46da;},'TlCMm':function(_0x9b8fdd,_0x2b3942){return _0x9b8fdd+_0x2b3942;},'VOLqS':function(_0x412a2e,_0x33f032){return _0x412a2e+_0x33f032;},'ZyrKy':'STfsa','JhPLG':function(_0x5fa051,_0x311bdb){return _0x5fa051+_0x311bdb;},'Zjzxl':_0xc5af74(0x1d0),'tqmfU':'hello','eerla':function(_0x5549b5){return _0x5549b5();},'Avpwg':function(_0x13e824,_0x4ae5e0){return _0x13e824===_0x4ae5e0;},'FzKvt':'repor'+'t','GzYDk':_0xc5af74(0x437)+_0xc5af74(0x6e9)+'\x20pane'+_0xc5af74(0x885)+'ate\x20f'+_0xc5af74(0x4ce),'hzdNs':function(_0x250f32,_0x527319){return _0x250f32+_0x527319;},'lUIwk':function(_0x293769,_0x5166ba){return _0x293769(_0x5166ba);},'CtYMl':function(_0x456c5e,_0x15339b){return _0x456c5e!==_0x15339b;},'eLhof':'vxkPN','djvKe':function(_0x13c07b,_0x5091c3,_0x5f4123){return _0x13c07b(_0x5091c3,_0x5f4123);},'fgGiu':'24px','MotrP':function(_0x591676,_0x56286a){return _0x591676!==_0x56286a;},'Xanqx':_0xc5af74(0xadb),'ejzZd':_0xc5af74(0x608)+'ion','mUmaj':'CKKaw','xgPQS':'error','XvQLB':'info','tSvuC':function(_0x10a58f,_0x18aa6c){return _0x10a58f+_0x18aa6c;},'uuRWV':function(_0x1509a1,_0xaaa934){return _0x1509a1+_0xaaa934;},'Fuhat':_0xc5af74(0x4c2)+'cts\x20·'+'\x20','TjyOq':function(_0x2fee06,_0x339d0c){return _0x2fee06(_0x339d0c);},'tESbV':_0xc5af74(0x842),'jNyRD':_0xc5af74(0x27f),'LoJmw':function(_0x13b0db,_0x26215c){return _0x13b0db!==_0x26215c;},'eLFRp':_0xc5af74(0x62f),'YkUfz':_0xc5af74(0x85b),'gEdgU':function(_0x5777d0,_0x41d788){return _0x5777d0===_0x41d788;},'JedQl':'insta'+_0xc5af74(0x85f)+_0xc5af74(0x51e)+_0xc5af74(0x839),'REMcK':'sakur'+'a-sw','zUTNZ':function(_0x23f39e,_0x8f52d9){return _0x23f39e!==_0x8f52d9;},'YVVIW':_0xc5af74(0xb78),'LQZZc':'Runti'+_0xc5af74(0x508)+_0xc5af74(0x42f)+'lugin'+'\x20unav'+_0xc5af74(0x5b5)+'le','TwxEZ':'sakur'+'a-ski'+'llwar'+'z','jHIRw':'XWRhu','QfrUp':function(_0x3a0c36,_0x12e576){return _0x3a0c36!==_0x12e576;},'DzDGX':_0xc5af74(0x945)+'r','IzSdz':function(_0x3c27b4,_0x25b2f4){return _0x3c27b4<=_0x25b2f4;},'QPgTi':_0xc5af74(0xac6)+_0xc5af74(0x31b),'fJmoe':_0xc5af74(0x333)+_0xc5af74(0x8c9)+'ht:70'+'0','yRUwg':function(_0x19595d,_0xd7de19,_0x4d58e7){return _0x19595d(_0xd7de19,_0x4d58e7);},'dlqCw':function(_0x48c9da,_0x12688a){return _0x48c9da(_0x12688a);},'AwTss':_0xc5af74(0x80b),'xTxtg':'plugi'+'n._ru'+_0xc5af74(0x556)+_0xc5af74(0x6f0)+'lveGa'+_0xc5af74(0x971),'yUZrK':function(_0x538147,_0x3ed37c){return _0x538147===_0x3ed37c;},'FJTHa':_0xc5af74(0xb84),'oNSRv':_0xc5af74(0xb86)+_0xc5af74(0x849)+'solve'+'Game('+')','EnXPR':_0xc5af74(0xb86)+'me._g'+_0xc5af74(0x77a),'oMvAw':_0xc5af74(0x85a),'jwNln':function(_0x37e280,_0x1bae2b){return _0x37e280<_0x1bae2b;},'btmpG':'EUmkY','SeVJG':_0xc5af74(0x952)+'t','CCMyA':_0xc5af74(0x6db)+'game\x20'+'bindi'+'ng','krXoP':'MmaHR','JXTNm':function(_0x47bcb9){return _0x47bcb9();},'Hwesd':function(_0x6626e7,_0x416313){return _0x6626e7>_0x416313;},'nLZrk':_0xc5af74(0x62a)+_0xc5af74(0x73a)+_0xc5af74(0x3b8)+'0x','UVhKI':_0xc5af74(0x8ec),'dkAeU':'i16','kQHog':'i32','ibDfE':_0xc5af74(0xc17),'BbKmz':_0xc5af74(0x63c),'ICNVO':function(_0x4c9f34,_0x4039f6){return _0x4c9f34<_0x4039f6;},'YbXCZ':function(_0x5db779,_0x1c758e){return _0x5db779|_0x1c758e;},'FzteE':function(_0x1f85df,_0x467097){return _0x1f85df===_0x467097;},'pMSGx':function(_0x26d89a,_0x84ba4e){return _0x26d89a<_0x84ba4e;},'gTzkQ':function(_0x2b7307,_0x5a0b8f){return _0x2b7307<_0x5a0b8f;},'FNmGI':function(_0x226580,_0x569c84){return _0x226580+_0x569c84;},'kbAYf':'MUwwZ','YpyHA':function(_0x2ccc1c,_0x54c81b){return _0x2ccc1c+_0x54c81b;},'PIooP':function(_0xeab793,_0x56f069){return _0xeab793(_0x56f069);},'BlXNS':function(_0x272d80,_0x538493){return _0x272d80&_0x538493;},'TLvUl':'obfI','sUssQ':function(_0x1c9f54,_0x164185,_0x4a54c6,_0x103a95){return _0x1c9f54(_0x164185,_0x4a54c6,_0x103a95);},'hpydI':function(_0xaad60b,_0x155219){return _0xaad60b===_0x155219;},'PmjSp':'Iueky','fJasb':_0xc5af74(0x783),'URcfb':function(_0x2a2e95,_0x10f4cd){return _0x2a2e95^_0x10f4cd;},'qOgjw':function(_0x5a4190,_0x421f8f){return _0x5a4190+_0x421f8f;},'BYViy':function(_0x23db47,_0x1b392d){return _0x23db47+_0x1b392d;},'OnipX':function(_0x5d295e,_0x54aee7){return _0x5d295e+_0x54aee7;},'NucKS':function(_0x198160,_0x49c881){return _0x198160+_0x49c881;},'ShpFm':function(_0x1d31d9,_0x1ead80){return _0x1d31d9===_0x1ead80;},'YCuzE':function(_0x2991b5,_0x4f7e71){return _0x2991b5||_0x4f7e71;},'xDjbp':function(_0x4e4dbc,_0xb5dcdd){return _0x4e4dbc(_0xb5dcdd);},'zuBLn':function(_0x1aee6a,_0x21b3c9){return _0x1aee6a!==_0x21b3c9;},'UEvBl':_0xc5af74(0xa12)+_0xc5af74(0x942)+_0xc5af74(0xb3f),'MWxqm':function(_0x5706bf,_0x217555,_0x8a893d,_0x10db77){return _0x5706bf(_0x217555,_0x8a893d,_0x10db77);},'otCTk':function(_0x582177,_0x1cf4ce){return _0x582177+_0x1cf4ce;},'tNUhx':function(_0x13b58e,_0x2f85d9){return _0x13b58e===_0x2f85d9;},'wRgCG':function(_0x19b18f,_0x5dedb9){return _0x19b18f+_0x5dedb9;},'WuiCi':_0xc5af74(0x768)+'d','baePQ':_0xc5af74(0x437)+_0xc5af74(0x6e9)+'\x20in-f'+'rame\x20'+_0xc5af74(0xbff)+_0xc5af74(0x430)+'ed','qyela':function(_0x53f0b9,_0x4ce187){return _0x53f0b9+_0x4ce187;},'rsBHY':function(_0x8ecf34,_0x1f9c99){return _0x8ecf34/_0x1f9c99;},'UDKDv':function(_0x43eb0d,_0x149937){return _0x43eb0d!==_0x149937;},'LmKRb':function(_0x4587a9,_0x4ec462){return _0x4587a9>_0x4ec462;},'CLhki':_0xc5af74(0x8bb),'naVBw':function(_0x38a9d3,_0x840182){return _0x38a9d3>=_0x840182;},'CpziP':function(_0x47a08c,_0x519002){return _0x47a08c===_0x519002;},'OBCSi':_0xc5af74(0x7a5)+_0xc5af74(0x2da)+'f\x20','nhunw':'kSxXl','JsVFZ':function(_0x307729,_0x1b3fbb){return _0x307729<_0x1b3fbb;},'ZeOTl':function(_0xca45da,_0x5233c2){return _0xca45da!==_0x5233c2;},'JxFYX':function(_0x3e38ae,_0x8773cf){return _0x3e38ae<_0x8773cf;},'onVBk':function(_0x1a67ca){return _0x1a67ca();},'RjOUA':'gPhyX','GPEJR':'lwXdm','HHNfJ':_0xc5af74(0x1f5)+_0xc5af74(0x4db),'lkyOo':_0xc5af74(0x2af),'tjiyN':_0xc5af74(0x238),'FOeTd':function(_0x46b1a7,_0x5edad8){return _0x46b1a7!==_0x5edad8;},'PqzkM':'cLOxH','RSuZH':function(_0x2dc527,_0x593270,_0x5f1f4c,_0x22583c){return _0x2dc527(_0x593270,_0x5f1f4c,_0x22583c);},'yLKFd':_0xc5af74(0xb83),'ZPhjc':function(_0x5d149d,_0x3bfee3){return _0x5d149d<_0x3bfee3;},'TAMSn':function(_0x234971,_0x47f93d){return _0x234971!==_0x47f93d;},'MbELf':function(_0x5dd6cf,_0x2c013c,_0x3c205b,_0x18157f,_0x1090b0){return _0x5dd6cf(_0x2c013c,_0x3c205b,_0x18157f,_0x1090b0);},'nSYcm':'eOTtr','fDEss':function(_0x215397,_0x168258){return _0x215397>_0x168258;},'dRhXh':function(_0x4c0b06,_0x10ff8f){return _0x4c0b06+_0x10ff8f;},'VPdzZ':function(_0x1d1e6b,_0x1c6dfa){return _0x1d1e6b+_0x1c6dfa;},'okmpT':function(_0x543a02,_0x4158e6){return _0x543a02+_0x4158e6;},'gFJEG':'esp\x20','chwwL':function(_0x276cea,_0x87cf3){return _0x276cea!==_0x87cf3;},'qMNeW':'QcekS','pGkxJ':function(_0x1299b4,_0x1c2d8b){return _0x1299b4+_0x1c2d8b;},'qDfiB':function(_0x62b37d,_0x22c810,_0x1e997f){return _0x62b37d(_0x22c810,_0x1e997f);},'AFtfE':_0xc5af74(0x91d),'mTecg':function(_0x143e15,_0x164f7b){return _0x143e15<_0x164f7b;},'Ivnbr':function(_0x532433,_0x3e2d5c,_0x21100b){return _0x532433(_0x3e2d5c,_0x21100b);},'kouXB':function(_0x308f3c,_0x2a67c2,_0x36b791){return _0x308f3c(_0x2a67c2,_0x36b791);},'zPUFg':function(_0x31cb99,_0x2ba6f3){return _0x31cb99>>>_0x2ba6f3;},'buUGe':function(_0x1ae779,_0x11c530,_0xd2e0f8){return _0x1ae779(_0x11c530,_0xd2e0f8);},'gxZsu':function(_0x15fa91,_0x5d6cab){return _0x15fa91+_0x5d6cab;},'VVwhj':function(_0x4bc1d5,_0x4c6de2,_0x5b3d04){return _0x4bc1d5(_0x4c6de2,_0x5b3d04);},'hTitn':function(_0xc012c5,_0xea0bc7){return _0xc012c5<_0xea0bc7;},'MzkyN':_0xc5af74(0xa4f)+_0xc5af74(0x1b6),'qIZNJ':_0xc5af74(0x2ed)+'hScri'+'pt','erDrO':_0xc5af74(0xbe7)+_0xc5af74(0xb9f)+_0xc5af74(0x2df),'RmRfM':function(_0x456620,_0x19e75a){return _0x456620<_0x19e75a;},'vFyKS':function(_0x13142e,_0x280612,_0x50e345){return _0x13142e(_0x280612,_0x50e345);},'yYLNH':function(_0x3a6031,_0x1aa470){return _0x3a6031 in _0x1aa470;},'mGoct':function(_0x55b775,_0x1ded2d){return _0x55b775+_0x1ded2d;},'BTrnJ':_0xc5af74(0xb2e),'Msemb':function(_0x5aa69c,_0x295053){return _0x5aa69c>>>_0x295053;},'NoXIZ':function(_0x40a32c,_0x2301fb){return _0x40a32c+_0x2301fb;},'xNwKL':function(_0x976357,_0x26403f){return _0x976357+_0x26403f;},'DhDBb':_0xc5af74(0x4ff)+'obby\x20'+_0xc5af74(0x3f6)+'\x20like'+'\x20-\x20ru'+'n\x20the'+'\x20reco'+'n\x20INS'+_0xc5af74(0xb5e)+'\x20live'+'\x20roun'+'d,\x20no'+_0xc5af74(0xac2)+'\x20menu'+'.','rKuxe':_0xc5af74(0x322)+'rs\x20ar'+'e\x20pre'+'sent\x20'+_0xc5af74(0x247)+_0xc5af74(0xb71)+_0xc5af74(0x202)+_0xc5af74(0xa7e)+_0xc5af74(0x905)+'s\x20ene'+_0xc5af74(0x284)+'yet\x20-'+'\x20chec'+'k\x20','hzrBM':_0xc5af74(0xc01),'nFnAd':'void','goVjH':'EvIsa','ISCFi':function(_0x33a49a,_0x15a54b){return _0x33a49a===_0x15a54b;},'JwplA':_0xc5af74(0x482)+_0xc5af74(0x3fa)+_0xc5af74(0x5f5)+'t:\x20','yOYxD':function(_0xa98dbe,_0x3b4bbb){return _0xa98dbe+_0x3b4bbb;},'BVdbo':_0xc5af74(0x5e7)+'The\x20p'+_0xc5af74(0x560)+_0xc5af74(0x6b3)+_0xc5af74(0x3fb)+_0xc5af74(0xa4c)+_0xc5af74(0x463)+_0xc5af74(0x5eb)+_0xc5af74(0x2fc)+'talli'+_0xc5af74(0x898),'kffKl':_0xc5af74(0x6de),'mNeBe':'vfxNx','TPvAu':'xqBwH','OqoPs':_0xc5af74(0x95f),'bFvWw':function(_0x966dc0,_0xa6eab7){return _0x966dc0+_0xa6eab7;},'pJsBr':_0xc5af74(0x7f5),'KVLwf':_0xc5af74(0x1c5)+'=','Dilmj':'\x20ACTI'+'VE','NjMwT':_0xc5af74(0xb1f),'GOrhj':function(_0xeff9e8,_0x408678){return _0xeff9e8===_0x408678;},'XlYjK':function(_0x107934,_0x3ed623){return _0x107934(_0x3ed623);},'BXloF':_0xc5af74(0x617)+'t\x200\x20('+'int-w'+'idth)','QArXT':function(_0x29a9cb,_0x1dbd36){return _0x29a9cb===_0x1dbd36;},'HySAU':function(_0x3842b7,_0x20e5ec){return _0x3842b7===_0x20e5ec;},'ehKKw':function(_0x80e55c,_0x50760a){return _0x80e55c!==_0x50760a;},'ByqnM':function(_0x2a58c3,_0x246cef){return _0x2a58c3===_0x246cef;},'VFqjd':function(_0x55bbaf,_0x53652a){return _0x55bbaf===_0x53652a;},'SmGWj':_0xc5af74(0xa8c)+_0xc5af74(0x405),'iismE':function(_0x3651bd,_0x26d997){return _0x3651bd+_0x26d997;},'FbCoL':function(_0x20bd9a,_0x4bf226){return _0x20bd9a+_0x4bf226;},'nFFzg':_0xc5af74(0x7ff)+'ion:f'+_0xc5af74(0x998)+'right'+':12px'+_0xc5af74(0x3eb)+_0xc5af74(0x541)+_0xc5af74(0x614)+_0xc5af74(0x999)+'47483'+'646;p'+_0xc5af74(0xbcb)+'r-eve'+'nts:n'+_0xc5af74(0x928),'GDAxE':_0xc5af74(0xc62)+_0xc5af74(0x5d1)+_0xc5af74(0x7eb)+'t:10p'+'x/1.3'+'\x20ui-m'+_0xc5af74(0x38c)+_0xc5af74(0x6e6)+_0xc5af74(0x9de)+_0xc5af74(0x8d9)+_0xc5af74(0x1b1)+'ce;co'+_0xc5af74(0x53a)+_0xc5af74(0xae5)+'9;','kfDYj':'<canv'+'as\x20id'+'=\x22sak'+'ura-e'+'sp-cv'+_0xc5af74(0x25d)+'th=\x221'+_0xc5af74(0x278)+_0xc5af74(0x32c)+_0xc5af74(0x59f)+_0xc5af74(0xa2f)+'le=\x22d'+_0xc5af74(0xbbc)+_0xc5af74(0x4ad)+_0xc5af74(0x7e8)+'/canv'+'as>','nVkRE':_0xc5af74(0x5e5)+_0xc5af74(0x9cf)+'p-lg','Rdtdn':_0xc5af74(0x674),'jWpKG':function(_0x105de4,_0x1a7959){return _0x105de4===_0x1a7959;},'YqQMc':_0xc5af74(0xa41)+_0xc5af74(0x29e),'FSCIu':_0xc5af74(0x78a),'jtKtd':_0xc5af74(0xb92),'Ddqem':_0xc5af74(0xa40)+_0xc5af74(0xb9b)+'t','Ymcit':'\x20on\x20','RjTNy':_0xc5af74(0x2ea),'iAksW':function(_0x4f3f83,_0x187f56){return _0x4f3f83===_0x187f56;},'XVlKg':_0xc5af74(0x2bf)+'an','SshLL':function(_0x10fe4c,_0x1c23a7){return _0x10fe4c!==_0x1c23a7;},'oMupD':_0xc5af74(0x9f4),'SHVZg':_0xc5af74(0x371),'UmvuD':function(_0x50c280,_0x5b81db,_0xf6a050){return _0x50c280(_0x5b81db,_0xf6a050);},'PuMMg':function(_0x1db80a,_0x2e8101){return _0x1db80a(_0x2e8101);},'OoJPN':_0xc5af74(0x38f),'kcIXn':_0xc5af74(0x74b),'zCkPo':_0xc5af74(0xa71),'ahpMM':_0xc5af74(0xa8c)+_0xc5af74(0xb7b)+_0xc5af74(0x863),'rpYAj':function(_0x1c4085,_0x1b50ee){return _0x1c4085+_0x1b50ee;},'gosXP':function(_0x4c5393,_0x252bcc){return _0x4c5393+_0x252bcc;},'kumAw':'box-s'+_0xc5af74(0x5f3)+_0xc5af74(0x72f)+_0xc5af74(0x965)+'px\x20-1'+_0xc5af74(0x8d3)+_0xc5af74(0x416)+_0xc5af74(0x48d)+_0xc5af74(0xb59)+_0xc5af74(0xb0b)+_0xc5af74(0x86d)+'kit-u'+'ser-s'+'elect'+':none'+';','vBiOp':function(_0x31c3da,_0xadd38a){return _0x31c3da+_0xadd38a;},'fkNzZ':function(_0x41a1fe,_0x5cedd9){return _0x41a1fe+_0x5cedd9;},'eDGov':function(_0x47cbbe,_0x1cbaa8){return _0x47cbbe+_0x1cbaa8;},'hcLPR':function(_0x5498be,_0x4ff545){return _0x5498be+_0x4ff545;},'kkLVl':_0xc5af74(0x1a2)+_0xc5af74(0x21a)+_0xc5af74(0x208)+_0xc5af74(0x8f0)+'yle=\x22'+'displ'+_0xc5af74(0x70e)+'ex;ga'+'p:6px'+';alig'+'n-ite'+_0xc5af74(0x6a5)+'nter;'+_0xc5af74(0xaf4)+_0xc5af74(0x497)+'wrap;'+_0xc5af74(0x8b4)+'idth:'+_0xc5af74(0x286)+';\x22>','QyBbx':'<butt'+_0xc5af74(0xb7d)+_0xc5af74(0xb31)+_0xc5af74(0xb74)+'style'+_0xc5af74(0xa61)+'kgrou'+'nd:tr'+'anspa'+_0xc5af74(0x3c0)+_0xc5af74(0x1ac)+_0xc5af74(0x8cb)+'\x20soli'+_0xc5af74(0x99c)+'a(255'+_0xc5af74(0x2f6)+_0xc5af74(0x28f)+'45);','NUgoc':_0xc5af74(0x62e)+_0xc5af74(0x796)+'ef5;b'+'order'+_0xc5af74(0x7fc)+'us:6p'+_0xc5af74(0x1fd)+_0xc5af74(0xb8c)+_0xc5af74(0xaff)+'px;cu'+_0xc5af74(0x679)+_0xc5af74(0x196)+_0xc5af74(0x3cc)+'nt:in'+_0xc5af74(0x24e)+';\x22>Sp'+_0xc5af74(0x54c)+_0xc5af74(0xb17)+_0xc5af74(0x476)+'>','UJGMr':_0xc5af74(0x582)+_0xc5af74(0xb01)+'-a=\x22f'+'v\x22\x20st'+_0xc5af74(0x58b)+_0xc5af74(0x62e)+_0xc5af74(0x4f6)+_0xc5af74(0x916)+'in-wi'+'dth:3'+_0xc5af74(0xc6c)+_0xc5af74(0x6b1)+_0xc5af74(0xa5f)+'n>','jClrE':'<butt'+'on\x20da'+'ta-a='+_0xc5af74(0x8c5)+'\x20styl'+'e=\x22ba'+_0xc5af74(0xa64)+_0xc5af74(0x744)+'ransp'+'arent'+_0xc5af74(0x902)+_0xc5af74(0x300)+'x\x20sol'+'id\x20rg'+'ba(25'+_0xc5af74(0x271)+_0xc5af74(0x821)+_0xc5af74(0x7ea),'FdMmr':'color'+_0xc5af74(0x796)+_0xc5af74(0x3a8)+_0xc5af74(0xa94)+'-radi'+_0xc5af74(0x919)+_0xc5af74(0x1fd)+_0xc5af74(0xb8c)+'2px\x207'+'px;cu'+_0xc5af74(0x679)+_0xc5af74(0x196)+_0xc5af74(0x3cc)+_0xc5af74(0x635)+'herit'+_0xc5af74(0x725)+_0xc5af74(0x736)+'utton'+'>','hQUdu':'<butt'+_0xc5af74(0xb7d)+_0xc5af74(0xb31)+_0xc5af74(0xb48)+_0xc5af74(0xa2f)+_0xc5af74(0x344)+_0xc5af74(0x96d)+_0xc5af74(0xba7)+_0xc5af74(0xa6f)+_0xc5af74(0x753)+'groun'+'d:tra'+_0xc5af74(0xb30)+'ent;b'+'order'+_0xc5af74(0xc18)+_0xc5af74(0x9ca)+_0xc5af74(0x3b7)+_0xc5af74(0x36f)+'143,1'+_0xc5af74(0x579)+_0xc5af74(0x5b3),'qvTZs':function(_0x4cdac0,_0x44c07d){return _0x4cdac0(_0x44c07d);},'CHpqJ':'bar','txQCR':function(_0x2b4c9f,_0x2f2134){return _0x2b4c9f(_0x2f2134);},'HRUGd':_0xc5af74(0x60c),'IaZcN':'fold','yJsfn':function(_0x1a1419,_0x33d87c){return _0x1a1419(_0x33d87c);},'cStdN':_0xc5af74(0x5fb)+'|3|2|'+_0xc5af74(0x226),'UriBD':function(_0x469efb,_0x42e207){return _0x469efb+_0x42e207;},'umiDZ':'Photo'+_0xc5af74(0x236)+'orkSy'+'nc','oXMQS':_0xc5af74(0x491)+_0xc5af74(0x699)+_0xc5af74(0x2c1),'yeorq':_0xc5af74(0x71a)+_0xc5af74(0xaed),'zVjpB':function(_0x3650d0){return _0x3650d0();},'IHlwJ':'no\x20Mo'+_0xc5af74(0xbfc)+_0xc5af74(0x754)+'t','IARKu':_0xc5af74(0xa01),'GEfQL':_0xc5af74(0x536),'kVaoP':'CjoZi','CglZE':function(_0x74011b,_0x25451c){return _0x74011b===_0x25451c;},'yPYNu':function(_0x505c13,_0x45d656){return _0x505c13(_0x45d656);},'unvKa':function(_0x24cf9a){return _0x24cf9a();},'wAoRX':function(_0x563c1d){return _0x563c1d();},'UioKl':function(_0x2d21a2){return _0x2d21a2();},'PYxpb':'%c[sa'+_0xc5af74(0x6e9)+_0xc5af74(0x694)+'l\x20dis'+_0xc5af74(0x215),'OKitP':_0xc5af74(0x521),'yglph':function(_0xef7535){return _0xef7535();},'QfaHS':'mAfAY','cIIwL':function(_0x827309,_0x2987a5){return _0x827309/_0x2987a5;},'shfkf':'no-me'+'m','lKdSk':function(_0x12b15e,_0x5d1ad3){return _0x12b15e+_0x5d1ad3;},'qYgji':_0xc5af74(0x761),'qqGRL':function(_0x2da946,_0x4576f0){return _0x2da946>_0x4576f0;},'QhVVK':function(_0x3a812a,_0x21e04e){return _0x3a812a+_0x21e04e;},'sxJjM':_0xc5af74(0xabd)+_0xc5af74(0x270),'pumYf':function(_0x3af72d,_0x1987d8){return _0x3af72d+_0x1987d8;},'chUZD':function(_0x24d261,_0x1f0462){return _0x24d261+_0x1f0462;},'Uvdea':_0xc5af74(0x59a)+'\x20-','uimQH':function(_0x259b83,_0x99db2c){return _0x259b83>_0x99db2c;},'rGhvn':function(_0x5b2fdf){return _0x5b2fdf();},'dVJFX':function(_0x8f1c6,_0x454676){return _0x8f1c6(_0x454676);},'oonNH':function(_0x327937,_0x6c4a5e){return _0x327937-_0x6c4a5e;},'YtmIM':function(_0x11f46f,_0xdde241){return _0x11f46f!==_0xdde241;},'DXaHQ':_0xc5af74(0x3b0),'tLByQ':_0xc5af74(0x2fa),'eqrtM':_0xc5af74(0x835),'NhcBQ':_0xc5af74(0x47d),'BjIyk':function(_0x43f05d,_0x38e6bb){return _0x43f05d-_0x38e6bb;},'RrHGs':_0xc5af74(0x865),'ylMHt':_0xc5af74(0x1d8),'IZQrY':_0xc5af74(0x480)+_0xc5af74(0x65c)+'t','UGNGU':'yGWms','rxGCm':function(_0x44f45b,_0x235322){return _0x44f45b+_0x235322;},'SBbJB':'backg'+'round'+_0xc5af74(0x82f)+_0xc5af74(0xb36)+_0xc5af74(0x4e2)+'.9);b'+_0xc5af74(0xa94)+':1px\x20'+'solid'+'\x20rgba'+_0xc5af74(0x36f)+_0xc5af74(0x324)+_0xc5af74(0x87c)+');col'+_0xc5af74(0x31e),'XQdag':function(_0x4b80fa,_0x337f81){return _0x4b80fa!==_0x337f81;},'KRGaA':'TZyDW','zJCCW':'kYHFv','wPjYx':function(_0xb82eb8,_0x101199){return _0xb82eb8+_0x101199;},'wQlRY':function(_0x24302d,_0x435162){return _0x24302d+_0x435162;},'uFsLm':_0xc5af74(0xa7d),'HRSSf':'EZVcd','GPotS':function(_0xe79052,_0x3d0901){return _0xe79052+_0x3d0901;},'PuKzI':function(_0x19f6bb,_0x48e373){return _0x19f6bb+_0x48e373;},'sonJA':function(_0xbd6ef2,_0x5a4853){return _0xbd6ef2(_0x5a4853);},'EQbMO':'CWLeC','PSNpP':_0xc5af74(0x46b),'SewAI':function(_0xfd305c,_0x380e23,_0x2954da){return _0xfd305c(_0x380e23,_0x2954da);},'LqkUX':function(_0x57bcb4,_0x13b959){return _0x57bcb4!==_0x13b959;},'fMZyn':'FOTLl','vglmf':function(_0x5c19cb,_0x31d72e){return _0x5c19cb>_0x31d72e;},'OVHDO':function(_0x59f840,_0x31ac89){return _0x59f840*_0x31ac89;},'jKrcb':function(_0x1f6907,_0x1d2549){return _0x1f6907+_0x1d2549;},'UPjDI':function(_0x3d72df,_0x3aefb8){return _0x3d72df*_0x3aefb8;},'VLsMb':function(_0x1f4958,_0x448752){return _0x1f4958*_0x448752;},'RZPSR':function(_0x4f9701,_0x2d9d6d){return _0x4f9701*_0x2d9d6d;},'gzvRV':function(_0x23f6e0,_0x39b808){return _0x23f6e0*_0x39b808;},'qlzsb':function(_0x366928,_0x317643){return _0x366928>_0x317643;},'tyRhw':function(_0x5ef719,_0x2ab06e){return _0x5ef719*_0x2ab06e;},'HIDOi':function(_0x54c05f,_0x25e985){return _0x54c05f-_0x25e985;},'mzRBW':function(_0x33a497,_0x9c660c){return _0x33a497*_0x9c660c;},'kQfbo':function(_0x3f9154,_0x359065){return _0x3f9154!==_0x359065;},'MhRpw':'sk-ca'+'rd','JRhGY':_0xc5af74(0x393),'eCmcs':function(_0x2a8f2e,_0x5a27df,_0x4d819f){return _0x2a8f2e(_0x5a27df,_0x4d819f);},'jKLxk':_0xc5af74(0x25a)+_0xc5af74(0x472)+'ad','drQaI':function(_0x4f07cf,_0x4e01fc){return _0x4f07cf+_0x4e01fc;},'xMgPH':_0xc5af74(0x4c9)+_0xc5af74(0x1d5),'LdbVP':_0xc5af74(0x36d)+'ong>','Vnhos':_0xc5af74(0xb04)+'n','AvKRp':function(_0x1c9176,_0x270361){return _0x1c9176/_0x270361;},'psaMF':function(_0x28790a,_0x33ba9e){return _0x28790a+_0x33ba9e;},'jcEIK':function(_0x51aee5,_0x49546a){return _0x51aee5<_0x49546a;},'YWQmr':function(_0x590fec){return _0x590fec();},'fYRnp':function(_0x1b599a,_0x49e7fa){return _0x1b599a(_0x49e7fa);},'eelEN':_0xc5af74(0xa8a)+'ider','ZwVte':_0xc5af74(0x22c)+'l','pAQAY':'<span'+_0xc5af74(0x1b8)+'s=\x27sk'+_0xc5af74(0x829)+'\x27>','WjAwE':function(_0x53f241,_0x32326c){return _0x53f241===_0x32326c;},'tOdNg':function(_0x4116d3,_0x262fcd){return _0x4116d3+_0x262fcd;},'lfoOt':function(_0x369723,_0x132547){return _0x369723+_0x132547;},'zBxHu':function(_0x1221c1,_0x426041){return _0x1221c1<_0x426041;},'sdoGs':_0xc5af74(0x297),'krqgm':function(_0x381ab6,_0x3dc7a0,_0x3ed8f6){return _0x381ab6(_0x3dc7a0,_0x3ed8f6);},'rJgDs':function(_0x3faf87,_0x8ddaab,_0x5e7ad7){return _0x3faf87(_0x8ddaab,_0x5e7ad7);},'EJCRv':function(_0x190c49,_0x12720b){return _0x190c49===_0x12720b;},'rwarv':_0xc5af74(0x5d4),'NhWan':_0xc5af74(0x815),'XeImc':'iPNBp','NKQYE':_0xc5af74(0xc39),'YALpI':'EVbye','SlXFf':'ndpEr','NmazY':function(_0x3d937a,_0x128aca){return _0x3d937a-_0x128aca;},'JRNRE':function(_0x48158c,_0x11bcc8){return _0x48158c+_0x11bcc8;},'ntxft':_0xc5af74(0x875)+_0xc5af74(0x20a)+_0xc5af74(0x85d)+_0xc5af74(0x2ba)+_0xc5af74(0x80f)+_0xc5af74(0xa79)+_0xc5af74(0x30e)+_0xc5af74(0xb0d)+'ad','zAHZz':'dWvyp','qdDee':function(_0x31c518,_0x39f067){return _0x31c518-_0x39f067;},'oWmcY':function(_0x26a307,_0xd7d7ca){return _0x26a307!==_0xd7d7ca;},'tSQaC':'VwWvU','WZzXJ':'sk-md'+_0xc5af74(0x930),'SRuuC':'Enabl'+'ed','LslCy':_0xc5af74(0xbea)+_0xc5af74(0x3d9)+_0xc5af74(0xc68)+_0xc5af74(0x368)+'is','EyMLL':function(_0x311dd7,_0xa31b45,_0x7bc708,_0x5d8c0a){return _0x311dd7(_0xa31b45,_0x7bc708,_0x5d8c0a);},'Rtpno':function(_0x14bc83,_0x451438,_0x4b01fb,_0x25c47a){return _0x14bc83(_0x451438,_0x4b01fb,_0x25c47a);},'cpEYX':'sk-bt'+'n','YLsPp':'Snaps'+_0xc5af74(0x3fd)+_0xc5af74(0x3d6)+'9)','ITAdL':_0xc5af74(0xa82)+_0xc5af74(0x6a9)+_0xc5af74(0x4e7)+_0xc5af74(0x646)+_0xc5af74(0x6c7)+'\x20on/o'+_0xc5af74(0x982)+'\x20/\x20F6'+_0xc5af74(0x7b7)+'tor\x20+'+'/-0.5'+_0xc5af74(0xb46)+'\x20\x20fie'+_0xc5af74(0x6e2)+_0xc5af74(0xaae)+'\x0aInse'+'rt\x20\x20t'+'his\x20m'+'enu','XNeZl':function(_0x4cdf5c,_0x337ffd){return _0x4cdf5c===_0x337ffd;},'AyWPV':_0xc5af74(0xc31)+'ls','QvUnh':function(_0x3b41e4,_0x33338a,_0x11d53b){return _0x3b41e4(_0x33338a,_0x11d53b);},'ylqyC':function(_0x5bbe34,_0x44452e,_0x309d4d,_0x2f2ef2,_0x4fd237,_0x1df8da){return _0x5bbe34(_0x44452e,_0x309d4d,_0x2f2ef2,_0x4fd237,_0x1df8da);},'xgYQc':function(_0x52f9ae,_0x3be1c0,_0x44faab){return _0x52f9ae(_0x3be1c0,_0x44faab);},'eSHzH':_0xc5af74(0x661),'edjKg':_0xc5af74(0x1a5)+'\x20unit'+'s\x20acr'+'oss\x20t'+_0xc5af74(0xa09)+_0xc5af74(0x9eb),'nhtnq':_0xc5af74(0xaf0),'SNbeE':function(_0x2c5b4b,_0x4f3fbb){return _0x2c5b4b+_0x4f3fbb;},'TXZgX':function(_0x598b5b,_0x585b05){return _0x598b5b+_0x585b05;},'qRpbW':_0xc5af74(0x862)+_0xc5af74(0x7f1)+'s\x20uni'+_0xc5af74(0xc79)+'fied','CYpRd':_0xc5af74(0x5e1)+_0xc5af74(0x7f4)+_0xc5af74(0x1c6)+_0xc5af74(0x989)+_0xc5af74(0xbab)+'\x20Rese'+'t\x20it\x20'+_0xc5af74(0xc1a)+'.','UlIKK':_0xc5af74(0x4e8)+'n-spa'+_0xc5af74(0x458)+_0xc5af74(0x9c3)+_0xc5af74(0x77e)+_0xc5af74(0x3cd)+_0xc5af74(0x9b0)+'ew\x20ca'+_0xc5af74(0x665)+'be\x20re'+_0xc5af74(0x9c7)+_0xc5af74(0x5df)+_0xc5af74(0x372)+_0xc5af74(0x1f0)+_0xc5af74(0x87f)+_0xc5af74(0xc09)+'itted'+'\x20by\x20e'+_0xc5af74(0x2b2),'Kfgjf':function(_0x310345,_0x2b9fb3,_0x730e56,_0x3bfc6b){return _0x310345(_0x2b9fb3,_0x730e56,_0x3bfc6b);},'vZcia':_0xc5af74(0x7da),'tpRgZ':function(_0xb3db34,_0x41c689,_0x6a7fdf){return _0xb3db34(_0x41c689,_0x6a7fdf);},'GqpAf':function(_0xdd1f85,_0x1614c1,_0x3a8c1a){return _0xdd1f85(_0x1614c1,_0x3a8c1a);},'oWLCE':'sk-no'+'te','DAGjF':function(_0x5a8d93,_0x84d893){return _0x5a8d93+_0x84d893;},'yacSN':function(_0x10a3cf,_0x1f3d52){return _0x10a3cf+_0x1f3d52;},'oHJSg':function(_0x1496ed,_0x4b72ca){return _0x1496ed+_0x4b72ca;},'gFQbK':function(_0x24bdaf,_0x740119){return _0x24bdaf===_0x740119;},'OQrbY':function(_0x12dd79,_0x4415b0){return _0x12dd79+_0x4415b0;},'CDfXH':_0xc5af74(0x763)+'s','cMlgc':'VERSI'+'ON','HoPcJ':_0xc5af74(0x5a3),'IoKAY':_0xc5af74(0x7e7)+_0xc5af74(0x611)+_0xc5af74(0x85f)+_0xc5af74(0x57e),'CqcSW':_0xc5af74(0x57b)+'\x20','ELryF':function(_0x5596c3,_0x4ce88b){return _0x5596c3(_0x4ce88b);},'FadLC':_0xc5af74(0x648)+'a','jjNCc':function(_0x5ac52e,_0x56705b){return _0x5ac52e<_0x56705b;},'MhlFW':function(_0x3affab,_0x2a0021){return _0x3affab-_0x2a0021;},'jBiOr':function(_0x55d450,_0x289ca2){return _0x55d450(_0x289ca2);},'HyEme':'Sessi'+'on','JjxtQ':function(_0x25cddb,_0x4a2297,_0x228786,_0x66ffa8){return _0x25cddb(_0x4a2297,_0x228786,_0x66ffa8);},'bOYOt':_0xc5af74(0x262)+'ntrol'+_0xc5af74(0x2df),'rbPGm':'0x11C','cMrVG':_0xc5af74(0x2ed)+'h','AINXZ':'Healt'+'hScri'+_0xc5af74(0x994)+'C0','dVOUc':function(_0x442aba,_0x2a9801,_0x26cf06,_0x32d189){return _0x442aba(_0x2a9801,_0x26cf06,_0x32d189);},'sWqYk':_0xc5af74(0x44a)+_0xc5af74(0x589)+_0xc5af74(0x4b1)+_0xc5af74(0x5ff),'Tzopw':function(_0xc2eee2,_0xf15f95){return _0xc2eee2===_0xf15f95;},'eYKLj':'sk-pr'+'e','waeYg':function(_0x3063e5,_0x480d51){return _0x3063e5+_0x480d51;},'oShaQ':function(_0x442bab,_0x2d245a){return _0x442bab===_0x2d245a;},'teJNb':function(_0x260d50,_0x2f284d){return _0x260d50===_0x2f284d;},'dBAKA':function(_0x35822b,_0x354ed6){return _0x35822b===_0x354ed6;},'drFLB':function(_0xfdefe7,_0x760032){return _0xfdefe7<_0x760032;},'qfqcs':function(_0x454feb,_0x3a2442){return _0x454feb+_0x3a2442;},'kgFxN':'no\x20li'+_0xc5af74(0xa04)+_0xc5af74(0xa17)+_0xc5af74(0x643)+_0xc5af74(0xb12)+_0xc5af74(0x51d),'WSOqs':_0xc5af74(0x5ee),'bfobM':function(_0x4183fb,_0x385d9c){return _0x4183fb-_0x385d9c;},'UzeMq':function(_0x12d222,_0x2993db){return _0x12d222-_0x2993db;},'cjnci':function(_0x5b5790,_0x555384){return _0x5b5790-_0x555384;},'sRboJ':_0xc5af74(0x3a3),'ElzLG':'10|6|'+_0xc5af74(0x3ad)+'1|7|1'+'|5|9|'+_0xc5af74(0x598),'IBCew':_0xc5af74(0x892)+'start','KavBX':'touch'+'move','zMfFW':'aduDN','uSOQO':function(_0x426c42,_0x2ebae8){return _0x426c42<_0x2ebae8;},'IHQjY':'AXYja','TQnLB':function(_0x505e51){return _0x505e51();},'XOArs':'Sakur'+'a\x20Ski'+_0xc5af74(0x53b)+_0xc5af74(0x8fa)+_0xc5af74(0x5da),'XuyNN':'style','Cjdma':_0xc5af74(0xa8c)+'a-men'+'u-css','hbHjT':'mn-pa'+_0xc5af74(0x231),'WlYbH':_0xc5af74(0x6c9)+'de','duYZv':_0xc5af74(0x265)+'in','YuRrZ':function(_0xf1a8d8,_0x19086d,_0x302e26){return _0xf1a8d8(_0x19086d,_0x302e26);},'ysneZ':_0xc5af74(0x26d)+'p','TSCDa':_0xc5af74(0x7e5)+'b','pTibX':_0xc5af74(0x39d)+_0xc5af74(0x55e),'Kinzj':function(_0x8543e0,_0x1443ad,_0xec3782,_0x30817a){return _0x8543e0(_0x1443ad,_0xec3782,_0x30817a);},'FGHKr':_0xc5af74(0xabf)+'ls','dISXB':function(_0x2ce3b7){return _0x2ce3b7();},'yvROb':_0xc5af74(0x29f)+'l>','hokcY':'</sma'+_0xc5af74(0xab7),'ymVCu':function(_0x3e87d6,_0x47cdb4,_0xaf39f0){return _0x3e87d6(_0x47cdb4,_0xaf39f0);},'yWqUI':function(_0x140da1,_0x470be7){return _0x140da1+_0x470be7;},'kJARi':function(_0xd6e7f9,_0x5d3d0a){return _0xd6e7f9+_0x5d3d0a;},'VKJRt':function(_0x5e4637,_0xf6423d){return _0x5e4637+_0xf6423d;},'BwKPo':function(_0x27568e,_0xbe75d9){return _0x27568e+_0xbe75d9;},'ijyqB':_0xc5af74(0x6d1)+_0xc5af74(0x221)+_0xc5af74(0x651)+_0xc5af74(0xaee)+_0xc5af74(0x1e7)+_0xc5af74(0x4a4)+'appli'+'ed\x20no'+'ne.\x20T'+_0xc5af74(0xa47)+_0xc5af74(0x9e9)+_0xc5af74(0xbc3),'NmTnl':'\x20acti'+'ve','tbqFa':_0xc5af74(0x9ac),'eBmKd':_0xc5af74(0x40b)+'n','xedJp':function(_0x1124b6,_0x598db7){return _0x1124b6<_0x598db7;},'vcZeZ':'canva'+'s','MTdRY':function(_0xc731bd,_0x1f7179){return _0xc731bd*_0x1f7179;},'PhTbC':function(_0x853533,_0x587e13){return _0x853533<_0x587e13;},'xTJFU':_0xc5af74(0x9f7),'ZuFks':function(_0x31c6fe,_0x51524e){return _0x31c6fe+_0x51524e;},'uXoxj':function(_0x218e7d,_0x509cd5){return _0x218e7d+_0x509cd5;},'DeNYq':function(_0x3757c2,_0x399619){return _0x3757c2+_0x399619;},'AvWEd':function(_0x4ae476,_0x555153){return _0x4ae476+_0x555153;},'rvoFv':_0xc5af74(0xb16)+_0xc5af74(0x78e),'UUqax':function(_0x46fbeb,_0x34990c){return _0x46fbeb===_0x34990c;},'FQZTh':'appli'+'ed\x20/\x20'+'regis'+_0xc5af74(0x432),'Psxbq':function(_0x79bd65,_0x494a70){return _0x79bd65===_0x494a70;},'lLQtP':function(_0x306b85,_0x1717a2){return _0x306b85(_0x1717a2);},'iQHZZ':_0xc5af74(0x262)+_0xc5af74(0x9b9)+_0xc5af74(0x4e6)+_0xc5af74(0xa9e),'ZBSzb':'+0x29'+'8','cLUGe':function(_0x5a0967,_0x41823f){return _0x5a0967===_0x41823f;},'HZvjL':'Updat'+'e','bXTVW':function(_0x4f1442,_0x2f1272){return _0x4f1442!==_0x2f1272;},'JRyoV':_0xc5af74(0xa1d),'ahuFr':'uEqFu','QRfyk':function(_0x206e38,_0x564213){return _0x206e38*_0x564213;},'CGNKU':function(_0x20e481,_0x3ce40a){return _0x20e481*_0x3ce40a;},'ADWPB':function(_0x272e03,_0x199377){return _0x272e03>_0x199377;},'sMzXu':function(_0x2bb1dc,_0xac9dfd){return _0x2bb1dc<_0xac9dfd;},'BasCo':function(_0x124509,_0xfec51e){return _0x124509+_0xfec51e;},'UsHjY':function(_0x4c0289,_0xc73449){return _0x4c0289+_0xc73449;},'FWZoS':_0xc5af74(0x56e),'wDAjN':function(_0x3cf9e2,_0x5b270e){return _0x3cf9e2*_0x5b270e;},'zwfkK':function(_0x4f65dd,_0x5c828a){return _0x4f65dd*_0x5c828a;},'kOvVl':_0xc5af74(0x93e)+'|8|9|'+_0xc5af74(0xc23)+_0xc5af74(0x2e6),'GCiFL':function(_0x4b9846,_0x427b82){return _0x4b9846+_0x427b82;},'lgdmy':_0xc5af74(0x4a6)+'round'+':rgba'+_0xc5af74(0xb36)+_0xc5af74(0x4e2)+'.72);'+_0xc5af74(0x1ac)+_0xc5af74(0x8cb)+'\x20soli'+_0xc5af74(0x99c)+_0xc5af74(0xc3a)+_0xc5af74(0x2f6)+'177,.'+_0xc5af74(0xa68)+_0xc5af74(0x7ce)+'radiu'+_0xc5af74(0x9b2)+'x;','vgKIm':_0xc5af74(0x1a2)+_0xc5af74(0x686)+_0xc5af74(0x69a)+_0xc5af74(0x246)+_0xc5af74(0x76f)+_0xc5af74(0x926)+_0xc5af74(0x18c)+_0xc5af74(0x3bb)+_0xc5af74(0x907)+_0xc5af74(0x94c)+_0xc5af74(0x308)+'>','UTdpk':'6|5|0'+_0xc5af74(0xa7f)+'4|2','bWkVU':'posit'+_0xc5af74(0x95e)+_0xc5af74(0x998)+_0xc5af74(0x523)+_0xc5af74(0x937)+_0xc5af74(0x52c)+'index'+':2147'+_0xc5af74(0x3c9)+_0xc5af74(0xa99)+'nter-'+_0xc5af74(0xc6f)+_0xc5af74(0x80d)+'e;','xWllu':function(_0x31e991,_0x3bb5ba){return _0x31e991*_0x3bb5ba;},'vfcWv':function(_0x5b435d,_0x2b194d){return _0x5b435d/_0x2b194d;},'zROLP':function(_0x55d093,_0x23713e){return _0x55d093>_0x23713e;},'AuGsR':function(_0x56409f,_0x5db3ea){return _0x56409f<_0x5db3ea;},'msOYD':_0xc5af74(0x72b),'tktfV':function(_0x23ec3c,_0xa11712){return _0x23ec3c!==_0xa11712;},'VdBHc':_0xc5af74(0x522),'UYPUh':_0xc5af74(0x382),'moCeO':_0xc5af74(0x5d8),'OicWe':function(_0x526d6c,_0xb2516b){return _0x526d6c===_0xb2516b;},'RZiVH':function(_0x2dc297,_0xfe3023){return _0x2dc297+_0xfe3023;},'MRBwl':_0xc5af74(0x787)+'255,1'+_0xc5af74(0x2f9)+'6,.95'+')','OjZzT':function(_0x708394,_0x10e8b1){return _0x708394-_0x10e8b1;},'vpaJK':'singl'+_0xc5af74(0x2c3),'eOSsQ':function(_0x227c56){return _0x227c56();},'moJpN':function(_0x3f4863,_0x1ab214){return _0x3f4863/_0x1ab214;},'zQHZf':function(_0x334f9e,_0x5cfde5){return _0x334f9e*_0x5cfde5;},'PtVPu':function(_0x4e44d,_0x3a936c){return _0x4e44d===_0x3a936c;},'MbwcZ':'dLPEu','ZWQPq':function(_0x35f9fa,_0x47de71,_0x12fb99){return _0x35f9fa(_0x47de71,_0x12fb99);},'gTowY':function(_0x1b77a6,_0x3ae181){return _0x1b77a6+_0x3ae181;},'qiexI':function(_0x28971c,_0x2e2916){return _0x28971c<_0x2e2916;},'XmZbH':'IfaPv','xrFJX':function(_0x5a5d79,_0x81b1ae){return _0x5a5d79-_0x81b1ae;},'QsXST':function(_0x36fb70,_0x1a7d38){return _0x36fb70-_0x1a7d38;},'lYKqE':function(_0x41635a,_0x1f34e9){return _0x41635a*_0x1f34e9;},'ULRZo':function(_0x3eb31a,_0x342add){return _0x3eb31a*_0x342add;},'kosep':function(_0x47ec99,_0x2a6c78){return _0x47ec99*_0x2a6c78;},'Dyygq':_0xc5af74(0x89a),'URCpK':function(_0x1ce091,_0x4daaa6){return _0x1ce091+_0x4daaa6;},'VykAn':function(_0x24d051,_0x50b1d5){return _0x24d051*_0x50b1d5;},'DYKDL':function(_0x5e62fc,_0x1f90ea){return _0x5e62fc+_0x1f90ea;},'Elloe':function(_0x173568,_0x512995){return _0x173568+_0x512995;},'MHTJj':function(_0x2de893,_0x7de7d4){return _0x2de893+_0x7de7d4;},'bdrGK':function(_0x426631,_0x5eb83f){return _0x426631+_0x5eb83f;},'MrWrD':'\x20·\x20fo'+'v\x20','wgZmO':'maypo','JquPY':function(_0x47cab5,_0x5f6df1){return _0x47cab5!==_0x5f6df1;},'Pmsgp':function(_0x1a1e45,_0xcf3496){return _0x1a1e45(_0xcf3496);},'iwSwN':_0xc5af74(0x5c0)+'ngs','Vmbiq':function(_0x45f432,_0x1370ec){return _0x45f432+_0x1370ec;},'ZTldt':function(_0x161332){return _0x161332();},'HInZE':function(_0x28faf7,_0x279c37){return _0x28faf7===_0x279c37;},'bjBUR':_0xc5af74(0x968),'ekvVY':'ZHKib','NflgU':function(_0x7c8fd5){return _0x7c8fd5();},'XsGhr':function(_0x469cc8,_0x3cb36b){return _0x469cc8+_0x3cb36b;},'fITFr':function(_0x409b2d,_0xeb9925){return _0x409b2d+_0xeb9925;},'XfSbj':function(_0x127639,_0x381543){return _0x127639+_0x381543;},'nVQOt':function(_0x5a56e4,_0x29ade7){return _0x5a56e4+_0x29ade7;},'BDIwE':_0xc5af74(0x7ef)+_0xc5af74(0x49d)+_0xc5af74(0x1df)+'iffer'+'ent\x20i'+_0xc5af74(0x900)+'ce,\x20s'+_0xc5af74(0x487)+'are\x20a'+'sking'+_0xc5af74(0x1c6)+_0xc5af74(0x2ca)+'\x20obje'+_0xc5af74(0xc4c)+'r\x20','GxvcO':function(_0x289c81,_0x3409e7){return _0x289c81===_0x3409e7;},'ASCEe':'eyhir','LDcxY':'again'+'st\x20a\x20'+_0xc5af74(0x1fc)+'rent\x20'+_0xc5af74(0xb86)+_0xc5af74(0x707)+_0xc5af74(0x9cc)+_0xc5af74(0x6ce)+_0xc5af74(0x8d0)+'\x20glob'+_0xc5af74(0x2ec)+'w\x20exp'+'oses.','GNDPN':function(_0x228edb,_0x7e3a1b){return _0x228edb+_0x7e3a1b;},'lnTan':'ESP:\x20','jHlnA':function(_0x4ebed6,_0x3911db){return _0x4ebed6+_0x3911db;},'lCItW':function(_0x379df2,_0x1906ae){return _0x379df2+_0x1906ae;},'XfFnW':_0xc5af74(0x8ed)+_0xc5af74(0xb69)+'red\x20a'+'t\x20','LMZlW':'ms\x20wi'+_0xc5af74(0x41e)+_0xc5af74(0x9bb)+_0xc5af74(0x205)+'=','LIjBF':_0xc5af74(0x2a6)+'\x20the\x20'+_0xc5af74(0x9e8)+_0xc5af74(0x920)+'exist'+_0xc5af74(0xad0)+'en\x20an'+_0xc5af74(0x8b8)+'not\x20r'+_0xc5af74(0xbcd)+'ble\x20n'+'ow.','tePQc':function(_0x3e3c1f,_0x1deba0){return _0x3e3c1f+_0x1deba0;},'qnLqO':').\x20','DLpIK':'windo'+_0xc5af74(0xc11)+'tyWeb'+_0xc5af74(0x245)+'t.Val'+'ueWra'+_0xc5af74(0x5ae)+'is\x20mi'+_0xc5af74(0xa55)+_0xc5af74(0x88e)+'pture'+_0xc5af74(0x397)+'unnin'+'g\x20bli'+_0xc5af74(0x28a),'HlKYy':function(_0x59221e,_0x11a6f7){return _0x59221e===_0x11a6f7;},'RJZwE':function(_0x27d93f,_0x511314){return _0x27d93f+_0x511314;},'advpg':function(_0x1b7daa,_0x3e371d){return _0x1b7daa+_0x3e371d;},'QnuXD':function(_0x23a5fa,_0x4beb81){return _0x23a5fa+_0x4beb81;},'UeHEU':_0xc5af74(0x9e2)+'resol'+'ved\x20','Jwmrc':_0xc5af74(0x268)+_0xc5af74(0x436)+_0xc5af74(0x83b)+_0xc5af74(0x8ad)+_0xc5af74(0x8df)+'id\x20do'+_0xc5af74(0x59b)+'t\x20mat'+_0xc5af74(0x8e0)+_0xc5af74(0x372)+_0xc5af74(0x5b9),'RIiCh':function(_0x220ebe,_0x54ddb1){return _0x220ebe!==_0x54ddb1;},'cxGJl':function(_0x1e2c45){return _0x1e2c45();},'ChGcS':_0xc5af74(0x5c3),'tUMAx':function(_0x1bf336,_0x2d81be){return _0x1bf336+_0x2d81be;},'nfwzL':function(_0x595d05,_0x473d15){return _0x595d05+_0x473d15;},'rdQjt':function(_0xa7991e,_0x1a701b){return _0xa7991e+_0x1a701b;},'dnoKg':'szeXS','VlNbt':function(_0x31f2f9){return _0x31f2f9();},'qZuda':function(_0xda75b2,_0xaed0ba){return _0xda75b2-_0xaed0ba;},'TRdTs':function(_0x1adc75,_0x5749bf,_0x44a8b8){return _0x1adc75(_0x5749bf,_0x44a8b8);},'Yeykh':function(_0x54b449){return _0x54b449();},'mrvNi':_0xc5af74(0x5f9)+_0xc5af74(0x1db)+_0xc5af74(0xaa4),'yVTYp':function(_0x2766c0,_0x408166){return _0x2766c0|_0x408166;},'uuWwy':function(_0x1df34d,_0x943308){return _0x1df34d^_0x943308;},'jkhLG':function(_0x2e47d2,_0x57b97a,_0x535197,_0x90197c){return _0x2e47d2(_0x57b97a,_0x535197,_0x90197c);},'PjrzH':function(_0x3afa57,_0x25ac12){return _0x3afa57+_0x25ac12;},'BPyKu':'playe'+'r','VupDw':_0xc5af74(0xc40),'sROgH':'messa'+'ge','DnRrq':_0xc5af74(0x437)+_0xc5af74(0x6e9)+_0xc5af74(0x8a3)+'LAYER'+_0xc5af74(0x311)+'VE\x20v','cumka':_0xc5af74(0x616),'UbtPI':_0xc5af74(0x50b)+'meMan'+'ager','OBtQb':'Assem'+'bly-C'+'Sharp'+_0xc5af74(0x511)+'tpass'+'.dll','iJsFZ':_0xc5af74(0x42c)+'t.dll','BnXaA':_0xc5af74(0x7b9),'mCioA':_0xc5af74(0xa88),'OeKVs':_0xc5af74(0x2c8),'ucnWM':_0xc5af74(0x851)+_0xc5af74(0xaf3),'MIgfa':_0xc5af74(0x68f),'MhXjA':_0xc5af74(0x69e),'uoxNS':'0x98','YmsQt':_0xc5af74(0x7ae)+'le','xgqeg':_0xc5af74(0x26c),'JXQrG':_0xc5af74(0x43d)+_0xc5af74(0xb55)+'th','vZAGz':_0xc5af74(0xc73)+'h','YVuFE':_0xc5af74(0x43d)+'tHeal'+'th2','HzrLz':'0x14','DZGEd':_0xc5af74(0x553),'opDAL':_0xc5af74(0xb8d),'FaevA':'0x5c','aOTQS':_0xc5af74(0xacc)+'wn','IvUeP':'sakur'+_0xc5af74(0xb7b)+_0xc5af74(0x63b),'rJVqq':'DaGAK','eeAxo':function(_0xae25d9,_0x5c009b){return _0xae25d9(_0x5c009b);},'SAMYm':function(_0x4b8151,_0x52203c){return _0x4b8151(_0x52203c);},'SNrHK':'comba'+'t','ZDohO':_0xc5af74(0x88b),'LRacZ':'log','jwAia':'LOG','YxZyZ':function(_0x10cf52,_0x39b6d3){return _0x10cf52+_0x39b6d3;},'YFFrq':function(_0x52b3b7,_0x5e5c25){return _0x52b3b7+_0x5e5c25;},'ruRyd':function(_0x3e9b1c,_0xff3944){return _0x3e9b1c+_0xff3944;},'NTmdd':function(_0x2aada4,_0x3c7f53){return _0x2aada4+_0x3c7f53;},'ERlOG':function(_0x1e3bac,_0x38e92e){return _0x1e3bac+_0x38e92e;},'mhYRs':function(_0x5d7c3e,_0x1cbc1f){return _0x5d7c3e+_0x1cbc1f;},'WBaHW':function(_0x564a22,_0x5237c9){return _0x564a22+_0x5237c9;},'xVhGe':function(_0x207ea2,_0x3be1e2){return _0x207ea2+_0x3be1e2;},'kssEG':function(_0x488231,_0x3df068){return _0x488231+_0x3df068;},'aXkko':_0xc5af74(0x5e5)+'ra-me'+'nu-ro'+_0xc5af74(0x9e3)+'l:ini'+_0xc5af74(0x8bd),'kIlYh':'box-s'+_0xc5af74(0x5f3)+_0xc5af74(0xbee)+_0xc5af74(0xa0e)+'\x20rgba'+'(255,'+_0xc5af74(0x446)+_0xc5af74(0x802)+'6),in'+_0xc5af74(0x7e2)+'\x201px\x20'+_0xc5af74(0x24f)+'a(255'+',255,'+'255,.'+_0xc5af74(0x5f8)+_0xc5af74(0xb98)+'\x2080px'+_0xc5af74(0x3b7)+'(0,0,'+_0xc5af74(0x3dd)+');','QUbBX':'.mn-s'+'ide{d'+_0xc5af74(0xbbc)+'y:fle'+'x;fle'+_0xc5af74(0x6f1)+_0xc5af74(0x857)+'n:col'+_0xc5af74(0x53d)+'lign-'+_0xc5af74(0x507)+_0xc5af74(0x637)+'er;ga'+_0xc5af74(0xa31)+_0xc5af74(0x77b)+_0xc5af74(0x316)+_0xc5af74(0xb64)+_0xc5af74(0xa8f)+_0xc5af74(0x673)+'ding:'+'12px\x20'+'0;','TEQGt':_0xc5af74(0x59e)+'ogo{d'+_0xc5af74(0xbbc)+_0xc5af74(0x3c4)+_0xc5af74(0x847)+'ce-it'+'ems:c'+'enter'+';widt'+_0xc5af74(0xa48)+_0xc5af74(0x722)+_0xc5af74(0x5dd)+_0xc5af74(0x45c)+'argin'+_0xc5af74(0x3fe)+_0xc5af74(0x7fe)+_0xc5af74(0x438),'yXErl':_0xc5af74(0x59e)+_0xc5af74(0x8a8)+_0xc5af74(0x55d)+_0xc5af74(0x660)+'5px;h'+_0xc5af74(0x32c)+_0xc5af74(0x9ed)+';over'+'flow:'+'visib'+_0xc5af74(0x89c)+_0xc5af74(0x473)+'drop-'+'shado'+_0xc5af74(0xb5b)+_0xc5af74(0x9a2)+'rgba('+_0xc5af74(0x2d1)+_0xc5af74(0x261)+'7,.8)'+_0xc5af74(0x488),'zPXEu':'.mn-t'+_0xc5af74(0x3ba)+_0xc5af74(0x7bf)+':flex'+_0xc5af74(0xa5e)+_0xc5af74(0x9e7)+_0xc5af74(0x6a5)+'nter;'+_0xc5af74(0x534)+'fy-co'+_0xc5af74(0x9dd)+_0xc5af74(0x637)+_0xc5af74(0x4eb)+'dth:5'+'2px;h'+_0xc5af74(0x32c)+_0xc5af74(0x27d)+';bord'+_0xc5af74(0x509)+_0xc5af74(0x1ac)+_0xc5af74(0xa70)+_0xc5af74(0xbb8)+_0xc5af74(0x90f),'hOVvr':_0xc5af74(0x4a6)+'round'+':tran'+'spare'+_0xc5af74(0x5a4)+_0xc5af74(0xb21)+_0xc5af74(0x86a)+'46,23'+_0xc5af74(0xacd)+_0xc5af74(0x573)+_0xc5af74(0x41a)+_0xc5af74(0x4ab)+_0xc5af74(0x3d3)+_0xc5af74(0x2bc)+_0xc5af74(0x858)+_0xc5af74(0xaa1)+_0xc5af74(0x2bc)+_0xc5af74(0xadd)+'t:700'+';font'+'-fami'+_0xc5af74(0x90d)+_0xc5af74(0x24e)+';}','orjkW':_0xc5af74(0x30a)+_0xc5af74(0x738)+_0xc5af74(0x8db)+'olor:'+'rgba('+_0xc5af74(0xaeb)+'38,24'+'2,.8)'+';}','cfDZC':_0xc5af74(0x30a)+_0xc5af74(0xbb6)+_0xc5af74(0x7bf)+_0xc5af74(0x332)+';alig'+_0xc5af74(0x9e7)+'ms:ce'+'nter;'+'gap:1'+'2px;p'+_0xc5af74(0x36b)+'g:6px'+_0xc5af74(0xb9e)+'12px;'+_0xc5af74(0x9f6)+_0xc5af74(0x807)+'t:non'+_0xc5af74(0x9b5),'qywED':_0xc5af74(0x30a)+_0xc5af74(0x526)+'{flex'+_0xc5af74(0x23d)+_0xc5af74(0x771)+_0xc5af74(0x7c0)+'}','skAiy':'.mn-h'+_0xc5af74(0xa85)+'-size'+_0xc5af74(0xb32)+_0xc5af74(0x333)+_0xc5af74(0x8c9)+_0xc5af74(0x3ed)+_0xc5af74(0x63e),'Oauru':_0xc5af74(0x3c1)+_0xc5af74(0x422)+_0xc5af74(0x469)+_0xc5af74(0xb2c)+_0xc5af74(0xa5a)+_0xc5af74(0x1c3)+_0xc5af74(0x823)+_0xc5af74(0x9dc)+_0xc5af74(0x96a)+_0xc5af74(0x87d)+_0xc5af74(0x86c)+'ight:'+_0xc5af74(0xc58)+'borde'+_0xc5af74(0xa30)+_0xc5af74(0xa94)+'-radi'+'us:8p'+_0xc5af74(0x276)+'kgrou'+'nd:tr'+_0xc5af74(0xbd5)+_0xc5af74(0x3c0),'ILELi':_0xc5af74(0x62e)+':inhe'+'rit;o'+'pacit'+_0xc5af74(0x5de)+_0xc5af74(0xc2b)+_0xc5af74(0x6f7)+_0xc5af74(0x339)+';}','VzftF':_0xc5af74(0x3c1)+'lose\x20'+'svg{w'+'idth:'+_0xc5af74(0xace)+'heigh'+_0xc5af74(0x1ad)+_0xc5af74(0xb1b)+_0xc5af74(0xc51)+_0xc5af74(0xa7b)+_0xc5af74(0x251)+'urren'+_0xc5af74(0x8fc)+_0xc5af74(0x701)+'oke-w'+_0xc5af74(0x644)+_0xc5af74(0x5f6)+_0xc5af74(0xa18)+_0xc5af74(0xc69)+_0xc5af74(0x58a)+'nd;}','CUOVV':_0xc5af74(0x3c1)+'ols::'+_0xc5af74(0xbb1)+_0xc5af74(0x427)+'rollb'+_0xc5af74(0x840)+_0xc5af74(0x5c1)+_0xc5af74(0x4ef),'TqyFK':_0xc5af74(0xa0d)+'ard-h'+_0xc5af74(0x8cf)+_0xc5af74(0xbbc)+'y:fle'+_0xc5af74(0x882)+'gn-it'+_0xc5af74(0xb3d)+'enter'+_0xc5af74(0x991)+_0xc5af74(0x824)+_0xc5af74(0x36b)+'g:11p'+_0xc5af74(0x74d)+'x;}','nVrqY':_0xc5af74(0xa0d)+_0xc5af74(0x7a2)+_0xc5af74(0x1fa)+'-card'+_0xc5af74(0x3f7)+'e\x20str'+_0xc5af74(0xbfd)+'olor:'+'#fff0'+_0xc5af74(0x6cf),'QwOMn':_0xc5af74(0x92c)+'desc{'+'font-'+'size:'+_0xc5af74(0xae3)+_0xc5af74(0x913)+_0xc5af74(0xab9)+_0xc5af74(0x456)+'in-bo'+'ttom:'+_0xc5af74(0x7a0)+_0xc5af74(0x5ab)+_0xc5af74(0x2fe)+':pre-'+'wrap;'+'}','Usmxl':'.sk-c'+_0xc5af74(0x9e1)+'splay'+':flex'+_0xc5af74(0xa5e)+_0xc5af74(0x9e7)+'ms:ce'+'nter;'+'gap:8'+_0xc5af74(0x6a6)+_0xc5af74(0xa6c)+':4px\x20'+'0;fon'+_0xc5af74(0x2a8)+_0xc5af74(0xc33)+_0xc5af74(0x7cc),'VtClW':'.sk-h'+_0xc5af74(0x8a5)+_0xc5af74(0xbbc)+_0xc5af74(0x4ad)+_0xc5af74(0x467)+_0xc5af74(0x956)+_0xc5af74(0xad3)+'px;op'+'acity'+':.4;}','bjBRQ':'.sk-s'+_0xc5af74(0x642)+_0xc5af74(0x6e5)+_0xc5af74(0x9e4)+'relat'+_0xc5af74(0x28e)+'idth:'+_0xc5af74(0x81e)+_0xc5af74(0x305)+_0xc5af74(0x1ad)+_0xc5af74(0x7ed)+_0xc5af74(0x23b)+';bord'+_0xc5af74(0xa6e)+'dius:'+'99px;'+_0xc5af74(0x4a6)+'round'+':rgba'+_0xc5af74(0x36f)+'255,2'+_0xc5af74(0x802)+'7);cu'+'rsor:'+'point'+'er;fl'+'ex:no'+_0xc5af74(0xc2a),'yVUjP':_0xc5af74(0x3e3)+'witch'+_0xc5af74(0x65b)+_0xc5af74(0x6cb)+_0xc5af74(0x2f2)+_0xc5af74(0x9c2)+_0xc5af74(0x296)+'ter{l'+_0xc5af74(0x830)+'5px;b'+'ackgr'+'ound:'+'#ff6b'+_0xc5af74(0x70b),'CUdXw':_0xc5af74(0x3e3)+'lider'+_0xc5af74(0x939)+_0xc5af74(0xbbb)+'slide'+_0xc5af74(0x244)+_0xc5af74(0xb27)+'-trac'+_0xc5af74(0x94a)+_0xc5af74(0x56a)+'px;bo'+'rder-'+'radiu'+_0xc5af74(0x7bc)+';','rjnbf':'backg'+_0xc5af74(0x647)+_0xc5af74(0x5d6)+_0xc5af74(0x87b)+_0xc5af74(0x592)+'t(#ff'+_0xc5af74(0x315)+'#ff6b'+_0xc5af74(0x2a0)+_0xc5af74(0x504)+_0xc5af74(0x80e)+_0xc5af74(0x4a5)+_0xc5af74(0x76c)+'0%\x20no'+_0xc5af74(0x56f)+_0xc5af74(0xc5d)+'ba(25'+'5,255'+',255,'+'.08);'+'}','mfSOM':_0xc5af74(0x3e3)+'lider'+'::-we'+_0xc5af74(0xbbb)+_0xc5af74(0x2f3)+_0xc5af74(0xa6d)+_0xc5af74(0x967)+'ebkit'+_0xc5af74(0x459)+_0xc5af74(0x4a3)+_0xc5af74(0x7e1)+_0xc5af74(0x880)+'th:6p'+_0xc5af74(0x722)+'ght:6'+_0xc5af74(0x6fa)+_0xc5af74(0x683)+_0xc5af74(0xafe)+_0xc5af74(0x9b4)+'order'+_0xc5af74(0x7fc)+_0xc5af74(0xb1c)+_0xc5af74(0x986)+'kgrou'+'nd:#f'+_0xc5af74(0x2de)+';}','jqlyH':_0xc5af74(0x4ed)+_0xc5af74(0xb60)+_0xc5af74(0x82b)+_0xc5af74(0x4c5)+'1px;c'+_0xc5af74(0x269)+'rgba('+_0xc5af74(0xaeb)+'38,24'+_0xc5af74(0x607)+_0xc5af74(0x4f9)+_0xc5af74(0x49b)+'px\x200;'+_0xc5af74(0x358)+'-spac'+_0xc5af74(0x6a7)+_0xc5af74(0x1bd)+';}','JTIGQ':_0xc5af74(0x4ed)+_0xc5af74(0x2ee)+_0xc5af74(0xa2d)+_0xc5af74(0x53a)+'ff7a9'+'3;}','jXboa':_0xc5af74(0x649)+_0xc5af74(0x2b0)+_0xc5af74(0x732)+_0xc5af74(0x5b2)+_0xc5af74(0x569)+_0xc5af74(0x29c)+_0xc5af74(0x1ac)+'r:0;b'+'order'+_0xc5af74(0x7fc)+_0xc5af74(0xaa8)+'x;pad'+_0xc5af74(0xb8c)+_0xc5af74(0x93d)+_0xc5af74(0x834)+_0xc5af74(0x2c2)+_0xc5af74(0x3d7)+_0xc5af74(0x477)+_0xc5af74(0xb52)+'lor:#'+'fff;','tgGoT':_0xc5af74(0x514)+_0xc5af74(0x1a0)+_0xc5af74(0xaf9)+'logo-'+_0xc5af74(0x5bc)+_0xc5af74(0x299)+_0xc5af74(0x37e)+_0xc5af74(0xa54)+_0xc5af74(0x370)+'<path'+'\x20d=\x22M'+_0xc5af74(0x3be)+_0xc5af74(0x9cd)+'-2.5-'+_0xc5af74(0x1f2)+_0xc5af74(0x468)+'5\x200-2'+'.5\x201.'+'8-4.5'+_0xc5af74(0x218)+_0xc5af74(0x8a0)+_0xc5af74(0x3f5)+_0xc5af74(0xaf1)+'-2.5\x20'+'5-4\x207'+_0xc5af74(0x912),'mbnOe':_0xc5af74(0xb7c)};var _0x4e3c5b=location['hostn'+_0xc5af74(0x77a)]||'',_0x3dc691=/(^|\.)www\.crazygames\.com$/[_0xc5af74(0x274)](_0x4e3c5b),_0x3e0db0=/(^|\.)games\.crazygames\.com$/[_0xc5af74(0x274)](_0x4e3c5b),_0x37b043=/(^|\.)crazygames\.com$/['test'](_0x4e3c5b)&&!_0x3dc691&&!_0x3e0db0,_0x52d3ac=_0x3dc691?_0xc5af74(0x7fd)+'l':_0x3e0db0?_0xc5af74(0x789)+'er':_0x308226['BPyKu'];if(_0x308226[_0xc5af74(0x5db)](!_0x3dc691,!_0x3e0db0)&&!_0x37b043)return;var _0x36b2b2='#ff8f'+'b1',_0x729b8b=_0xc5af74(0x94d)+'ura_s'+_0xc5af74(0x48c),_0x572883=_0xc5af74(0xbb4)+'KURA-'+_0xc5af74(0xae0)+_0xc5af74(0xa50)+'BEGIN'+'===',_0x32eb22=_0xc5af74(0xbb4)+_0xc5af74(0x3e7)+_0xc5af74(0xae0)+_0xc5af74(0xa50)+'END=='+'=',_0x48e762=_0xc5af74(0x987);if(_0x3e0db0){if(_0x308226['MotrP'](_0x308226[_0xc5af74(0x3bc)],_0xc5af74(0x2ac))){window['addEv'+_0xc5af74(0xbdf)+_0xc5af74(0x816)+'r'](_0xc5af74(0x2ff)+'ge',function(_0x36a8f7){var _0x2dd5dd=_0xc5af74,_0x2385fd=_0x36a8f7['data'];if(!_0x2385fd||_0x2385fd[_0x2dd5dd(0x94d)+'ura']!==_0x729b8b)return;try{if(_0x2dd5dd(0xb54)===_0x2dd5dd(0x88f)){var _0x5fb899=_0x581003['Unity'+_0x2dd5dd(0x3b4)+_0x2dd5dd(0x739)]&&_0x3059dd['Unity'+'WebMo'+_0x2dd5dd(0x739)]['Runti'+'me'];if(_0x5fb899&&typeof _0x5fb899['resol'+'veGam'+'e']===_0x2dd5dd(0x608)+'ion'){var _0x33330a=_0x5fb899[_0x2dd5dd(0x84f)+'veGam'+'e']();if(_0x33330a)return _0x56b4c4['sourc'+'e']=_0x2dd5dd(0xb86)+'me.re'+_0x2dd5dd(0x9d3)+'Game('+')',_0x33330a;}if(_0x5fb899&&_0x5fb899['_game'])return _0x1e625e[_0x2dd5dd(0x997)+'e']=_0x2dd5dd(0xb86)+'me._g'+'ame',_0x5fb899;}else{if(window[_0x2dd5dd(0xb9b)+'t']&&_0x308226[_0x2dd5dd(0x90b)](window[_0x2dd5dd(0xb9b)+'t'],window))window[_0x2dd5dd(0xb9b)+'t'][_0x2dd5dd(0x966)+_0x2dd5dd(0xc12)+'e'](_0x2385fd,'*');if(window['top']&&window[_0x2dd5dd(0x613)]!==window)window['top'][_0x2dd5dd(0x966)+'essag'+'e'](_0x2385fd,'*');}}catch(_0x5cd6c0){}if(_0x2385fd&&_0x308226[_0x2dd5dd(0x489)](_0x2385fd[_0x2dd5dd(0x641)],_0x308226[_0x2dd5dd(0x223)])){if(_0x308226[_0x2dd5dd(0x963)]==='Hfksz')try{var _0x24b252=document['query'+_0x2dd5dd(0x4b8)+_0x2dd5dd(0xb68)+'l'](_0x2dd5dd(0x503)+'e');for(var _0xad16e4=0x2322+0x1*0x1d64+-0x4086;_0x308226['dhCgA'](_0xad16e4,_0x24b252[_0x2dd5dd(0x687)+'h']);_0xad16e4++){if('wOHbp'===_0x308226[_0x2dd5dd(0x599)])try{if(_0x2dd5dd(0xc0b)!=='gzdsR'){if(_0x24b252[_0xad16e4]['conte'+_0x2dd5dd(0x399)+'dow'])_0x24b252[_0xad16e4][_0x2dd5dd(0xa75)+'ntWin'+_0x2dd5dd(0x4e1)]['postM'+'essag'+'e'](_0x2385fd,'*');}else _0x52c1d1(_0x339698);}catch(_0x5f076c){}else try{_0x455a3b=_0x28f5f9['keys'](_0xc228c2)['slice'](-0x7*-0x272+-0x24f0+0x13d2,0x1*0x157a+-0x1e3a+-0x1*-0x8d8);}catch(_0x2efbf9){}}}catch(_0x16a532){}else _0x308226[_0x2dd5dd(0x404)](_0x3707b1,_0x308226[_0x2dd5dd(0x283)]);}}),console[_0xc5af74(0xae8)](_0xc5af74(0x437)+'kura]'+_0xc5af74(0x366)+_0xc5af74(0xc83)+'R\x20ACT'+_0xc5af74(0x659)+'relay'+'\x20up+d'+_0xc5af74(0xa20),_0x308226[_0xc5af74(0x4cf)]+_0x36b2b2);return;}else return _0x93a1d3[_0xc5af74(0x844)];}if(_0x3dc691){console[_0xc5af74(0xae8)]('%c[sa'+_0xc5af74(0x6e9)+_0xc5af74(0x6bd)+'AL\x20AC'+'TIVE',_0x308226['vBiOp'](_0x308226[_0xc5af74(0x4cf)],_0x36b2b2)+(_0xc5af74(0x333)+_0xc5af74(0x8c9)+'ht:70'+'0'),{'host':_0x4e3c5b});var _0x491de3={'set':function(){},'command':function(){}};function _0x2ef9e3(_0x1e8180,_0x1ad68d){var _0x46fdc4=_0xc5af74,_0x5e2117={'JPYLZ':function(_0x2aef76,_0x3a957e){var _0x761b42=_0x45e7;return _0x308226[_0x761b42(0x404)](_0x2aef76,_0x3a957e);},'Ioimr':function(_0x472bb4,_0x4f4ca7){return _0x472bb4!==_0x4f4ca7;},'JjCId':'VqtcM','sbPnK':_0x308226['tBFJV']},_0x12f50a={'__sakura':_0x729b8b,'kind':_0x46fdc4(0xb20),'cmd':_0x1e8180,'arg':_0x1ad68d};try{var _0x91f75b=document['query'+'Selec'+_0x46fdc4(0xb68)+'l'](_0x308226[_0x46fdc4(0xb73)]);for(var _0x7c87a=0x1*0x2319+-0x1f6a*-0x1+-0x1*0x4283;_0x7c87a<_0x91f75b[_0x46fdc4(0x687)+'h'];_0x7c87a++){try{if(_0x46fdc4(0x21b)!==_0x46fdc4(0x7c5)){if(_0x91f75b[_0x7c87a][_0x46fdc4(0xa75)+_0x46fdc4(0x399)+_0x46fdc4(0x4e1)])_0x91f75b[_0x7c87a][_0x46fdc4(0xa75)+_0x46fdc4(0x399)+_0x46fdc4(0x4e1)]['postM'+_0x46fdc4(0xc12)+'e'](_0x12f50a,'*');}else{var _0x22bb0c=_0x44aeec[_0x1cb8a6];for(var _0x3a2af1=-0xc69*0x1+-0x57d*-0x2+0x16f;_0x308226[_0x46fdc4(0x7b5)](_0x3a2af1,_0x22bb0c['lengt'+'h']);_0x3a2af1++){_0x29ac1a[_0x308226[_0x46fdc4(0xb4c)](_0x1632c4+_0x308226['PGYYf'],_0x22bb0c[_0x3a2af1]['o'][_0x46fdc4(0x8d4)+_0x46fdc4(0x1aa)](-0x243c+-0xc5*0x1d+0x3a9d))]=_0x22bb0c[_0x3a2af1]['v'];}}}catch(_0x562b60){}}}catch(_0xed6f65){}try{var _0x2485cb=new BroadcastChannel(_0x46fdc4(0xa8c)+_0x46fdc4(0x970));_0x2485cb[_0x46fdc4(0x966)+_0x46fdc4(0xc12)+'e'](_0x12f50a),_0x308226[_0x46fdc4(0x961)](setTimeout,function(){var _0x4bff68=_0x46fdc4,_0x4b0d3c={'AMOTd':function(_0x1b0463,_0x54284b){return _0x1b0463+_0x54284b;}};if(_0x5e2117['Ioimr'](_0x4bff68(0xc41),_0x4bff68(0xc41)))_0x103217=_0x4b0d3c[_0x4bff68(0x7dc)]('hooks'+'\x20arme'+_0x4bff68(0x7ab),_0x4a4c52)+'s',_0x5f5369='#ffd4'+'8a';else try{_0x5e2117['JjCId']!==_0x5e2117['sbPnK']?_0x2485cb[_0x4bff68(0xb0c)]():_0x5e2117[_0x4bff68(0xb22)](_0x3b707a,![]);}catch(_0x116b9c){}},-0x932+-0x4e5*0x3+0x9*0x2c3);}catch(_0x827a94){}}var _0x31ad2b=_0xc5af74(0xa8c)+'a-sw-'+_0xc5af74(0x99b)+'-hidd'+'en';function _0x3a9069(){var _0x2785d2=_0xc5af74;try{if(_0x2785d2(0x8dc)!==_0x2785d2(0x8dc)){var _0x5b0acc={};for(var _0x3694e9 in _0x170141){var _0x59d8a3=_0x2af1f1[_0x3694e9];for(var _0x278330=0x62*-0x4+-0x327*-0x1+-0x19f*0x1;_0x308226[_0x2785d2(0x7b5)](_0x278330,_0x59d8a3[_0x2785d2(0x687)+'h']);_0x278330++){_0x5b0acc[_0x3694e9+_0x2785d2(0x533)+_0x59d8a3[_0x278330]['o'][_0x2785d2(0x8d4)+'ing'](0x1fb7+0x1*-0x2547+-0x18*-0x3c)]=_0x59d8a3[_0x278330]['v'];}}return _0x5b0acc;}else return localStorage[_0x2785d2(0x7e9)+'em'](_0x31ad2b)==='1';}catch(_0x50f0eb){return![];}}function _0x6c9ce8(_0x12274c){var _0xa1292=_0xc5af74,_0x5daa65={'yjrkp':function(_0x312a9c,_0x25d0b5){return _0x308226['UTGxG'](_0x312a9c,_0x25d0b5);},'UTMjI':_0x308226['IkXcy'],'CZvdF':function(_0x5a5dc0,_0x529afa){var _0x577820=_0x45e7;return _0x308226[_0x577820(0x404)](_0x5a5dc0,_0x529afa);}};if(_0x308226[_0xa1292(0xbaf)](_0x308226['DgXhA'],_0x308226['DgXhA']))return _0x299c8b[_0xa1292(0x5cc)](_0xa1292(0x437)+_0xa1292(0x6e9)+'\x20menu'+'\x20unav'+'ailab'+'le',_0x5daa65[_0xa1292(0xc76)](_0x5daa65['UTMjI'],_0xa5279b),_0x34df13),null;else{try{_0x12274c?localStorage[_0xa1292(0x555)+'em'](_0x31ad2b,'1'):localStorage[_0xa1292(0x335)+_0xa1292(0x301)](_0x31ad2b);}catch(_0x3068f8){}try{var _0x2b5644=document[_0xa1292(0x9bf)+_0xa1292(0x9a4)+_0xa1292(0x728)](_0xa1292(0xa8c)+_0xa1292(0xb7b)+'v2');if(_0x2b5644)_0x2b5644[_0xa1292(0x335)+'e']();}catch(_0x2860e9){}try{if('jZkuJ'!==_0x308226[_0xa1292(0xc57)]){if(!_0x414986)return;_0x3dec2b=![],_0xc4102f[_0xa1292(0x74c)][_0xa1292(0x41a)+'r']=_0xa1292(0x5ee),_0x4b6011();}else{var _0x438179=document['getEl'+_0xa1292(0x9a4)+_0xa1292(0x728)](_0x308226['crDcq']);if(_0x308226[_0xa1292(0x5db)](_0x12274c,!_0x438179)&&document['body']){var _0x1025f9=(_0xa1292(0x4f0)+_0xa1292(0x61e)+'2')['split']('|'),_0x595c7e=-0xbbe*-0x3+-0x1*-0x101f+0x4ab*-0xb;while(!![]){switch(_0x1025f9[_0x595c7e++]){case'0':_0x3a35ce[_0xa1292(0x74c)]['cssTe'+'xt']=_0x308226[_0xa1292(0xb4c)](_0x308226['kykSS']+(_0xa1292(0x4a6)+'round'+_0xa1292(0x82f)+'(21,1'+_0xa1292(0x4e2)+'.9);b'+'order'+_0xa1292(0xc18)+_0xa1292(0x9ca)+'\x20rgba'+_0xa1292(0x36f)+_0xa1292(0x324)+'77,.5'+_0xa1292(0x34e)+_0xa1292(0x31e))+_0x36b2b2+';',_0x308226['xZHAR']);continue;case'1':_0x3a35ce['id']=_0x308226[_0xa1292(0x2b5)];continue;case'2':document[_0xa1292(0x2d0)][_0xa1292(0x3de)+_0xa1292(0xbda)+'d'](_0x3a35ce);continue;case'3':_0x3a35ce['textC'+'onten'+'t']=_0x308226[_0xa1292(0x98b)];continue;case'4':var _0x3a35ce=document['creat'+_0xa1292(0x972)+_0xa1292(0x964)](_0xa1292(0xa71));continue;case'5':_0x3a35ce[_0xa1292(0x5dc)+'ck']=function(){var _0x5499d0=_0xa1292;_0x5daa65[_0x5499d0(0xa07)](_0x6c9ce8,![]),_0x37e908();};continue;}break;}}else!_0x12274c&&_0x438179&&_0x438179[_0xa1292(0x335)+'e']();}}catch(_0x899eaf){}}}function _0x5b1fdc(){var _0x5a53ef=_0xc5af74;if(_0x308226[_0x5a53ef(0x3e0)](_0x3a9069))return null;var _0x2c21ed=document[_0x5a53ef(0x9bf)+_0x5a53ef(0x9a4)+'ById']('sakur'+_0x5a53ef(0xb7b)+'v2');if(_0x2c21ed)return _0x2c21ed;if(!document[_0x5a53ef(0x2d0)]||!document[_0x5a53ef(0x2d0)]['appen'+'dChil'+'d'])return null;try{if(_0x308226[_0x5a53ef(0x303)]!==_0x5a53ef(0x33d))_0x52cbb8[_0x5a53ef(0x5c0)+_0x5a53ef(0x591)][_0x5a53ef(0x3f8)](_0x308226[_0x5a53ef(0x2aa)](_0x308226[_0x5a53ef(0xb61)](_0x308226[_0x5a53ef(0x7d1)](_0x308226['XdoLK'](_0x308226[_0x5a53ef(0xb61)](_0x5a53ef(0x6f9),_0x5e5166[_0x5a53ef(0x293)+_0x5a53ef(0x548)])+('\x20hook'+_0x5a53ef(0x8de)+'e\x20eve'+_0x5a53ef(0x6b4)+_0x5a53ef(0xa59)+_0x5a53ef(0x6c6)+_0x5a53ef(0x9d8)+'apply'+'\x20pass'+'\x20'),_0x308226[_0x5a53ef(0x204)]),_0x308226[_0x5a53ef(0x63d)]),_0x308226[_0x5a53ef(0x7c2)])+_0x589f24[_0x5a53ef(0x293)+'Regis'+'tered'+_0x5a53ef(0x44e)],'\x20hook'+'(s)\x20d'+_0x5a53ef(0x9b6)+_0x5a53ef(0xc72)+_0x5a53ef(0x352)+'\x20docu'+'ment-'+'start'+'.'));else{var _0xaafc7e=(_0x5a53ef(0xaa4)+_0x5a53ef(0x1b6))[_0x5a53ef(0x3c2)]('|'),_0x25916b=0x1c6c+-0x1303+-0x969;while(!![]){switch(_0xaafc7e[_0x25916b++]){case'0':return _0x2c21ed;case'1':document[_0x5a53ef(0x2d0)]['appen'+_0x5a53ef(0xbda)+'d'](_0x2c21ed);continue;case'2':if(!document['getEl'+_0x5a53ef(0x9a4)+_0x5a53ef(0x728)](_0x308226[_0x5a53ef(0x239)])){var _0x3dada5=document['creat'+'eElem'+_0x5a53ef(0x964)](_0x5a53ef(0x74c));_0x3dada5['id']=_0x308226['HNtkM'],_0x3dada5['textC'+_0x5a53ef(0x696)+'t']=_0x308226[_0x5a53ef(0x190)],(document['head']||document['docum'+_0x5a53ef(0x612)+_0x5a53ef(0x9a4)])['appen'+_0x5a53ef(0xbda)+'d'](_0x3dada5);}continue;case'3':_0x2c21ed=document['creat'+_0x5a53ef(0x972)+_0x5a53ef(0x964)]('div');continue;case'4':_0x2c21ed['id']=_0x308226[_0x5a53ef(0x7dd)];continue;}break;}}}catch(_0x112e31){if(_0x308226[_0x5a53ef(0xb89)]===_0x5a53ef(0xb77)){_0x5403cb[_0x5a53ef(0x95d)+_0x5a53ef(0x97f)+_0x5a53ef(0xb2f)](),_0x54b4c5(_0x308226['HnbUq']);return;}else return null;}}function _0x37e908(){var _0x29f289=_0xc5af74,_0x465f07={'ACxph':function(_0x469611,_0x5dc64f){return _0x469611===_0x5dc64f;},'tBhTY':function(_0x1bf15a,_0x53ed58,_0x49eaba){return _0x1bf15a(_0x53ed58,_0x49eaba);}},_0x1a3483=_0x5b1fdc();if(!_0x1a3483)return _0x491de3;if(_0x1a3483['datas'+'et']['api'])return _0x1a3483[_0x29f289(0x9a8)];try{if(_0x308226[_0x29f289(0x69c)](_0x29f289(0xbd6),_0x29f289(0x951)))return _0x308226['zHJcJ'](_0x3e8f88,_0x1a3483);else try{return _0x465f07['ACxph'](_0x291a54[_0x29f289(0x7e9)+'em'](_0x5ba885),'1');}catch(_0x3e2997){return![];}}catch(_0x2dcd45){if(_0x308226[_0x29f289(0x90b)](_0x29f289(0x4d0),_0x308226[_0x29f289(0xb6d)]))return _0x1a3483['datas'+'et']['api']='1',_0x1a3483['api']=_0x491de3,console[_0x29f289(0x5cc)](_0x29f289(0x437)+'kura]'+_0x29f289(0x694)+_0x29f289(0x428)+'abled',_0x308226[_0x29f289(0x605)]('color'+':',_0x36b2b2),_0x2dcd45),_0x491de3;else try{var _0x312420=_0x344a33&&_0x4f7b1c[_0x29f289(0x5ce)];if(!_0x312420||_0x312420['__sak'+'ura']!==_0xc65a61||_0x312420['kind']!=='cmd')return;_0x465f07['tBhTY'](_0x10185a,_0x312420[_0x29f289(0xb20)],_0x312420[_0x29f289(0xb25)]);}catch(_0x1ef45d){}}}function _0x3e8f88(_0x26d6dc){var _0xe2fbdd=_0xc5af74,_0x4744b7={'CGoBJ':function(_0x160a62,_0x3986f3){return _0x160a62!==_0x3986f3;},'DHokW':function(_0x4d028d,_0x4845ac){return _0x4d028d(_0x4845ac);},'aukGo':function(_0x280833,_0x160006){return _0x280833(_0x160006);},'dagBV':_0x308226['VaDeT'],'rKofc':function(_0x1102a7){return _0x1102a7();},'KbhQu':function(_0x1e042d,_0x2dd43e){return _0x1e042d===_0x2dd43e;},'zRIHk':'zMayE','XWWRx':function(_0x410bfb,_0x34c5e9){var _0x2ef36e=_0x45e7;return _0x308226[_0x2ef36e(0x298)](_0x410bfb,_0x34c5e9);},'KgbIS':function(_0x51ab5f,_0x4fcd51){var _0x48f274=_0x45e7;return _0x308226[_0x48f274(0x2a3)](_0x51ab5f,_0x4fcd51);},'kuQKn':function(_0x199e7b,_0x149543){return _0x199e7b+_0x149543;}};_0x26d6dc['style']['cssTe'+'xt']=_0x308226[_0xe2fbdd(0xb1e)](_0x308226[_0xe2fbdd(0x56c)](_0xe2fbdd(0x7ff)+_0xe2fbdd(0x95e)+_0xe2fbdd(0x998)+_0xe2fbdd(0x523)+_0xe2fbdd(0x1e5)+'top:1'+_0xe2fbdd(0xb14)+_0xe2fbdd(0xc71)+_0xe2fbdd(0x4f7)+_0xe2fbdd(0x96f)+_0xe2fbdd(0x18e)+'x-wid'+_0xe2fbdd(0x39b)+_0xe2fbdd(0xa35)+_0xe2fbdd(0x6fe)+'px);m'+_0xe2fbdd(0x5d7)+'ight:'+_0xe2fbdd(0x931),_0xe2fbdd(0x4a6)+_0xe2fbdd(0x647)+_0xe2fbdd(0xa1f)+_0xe2fbdd(0x99a)+_0xe2fbdd(0x269)+'#f7ee'+'f5;bo'+_0xe2fbdd(0x706)+'1px\x20s'+'olid\x20'+'rgba('+_0xe2fbdd(0x2d1)+'43,17'+_0xe2fbdd(0x92d)+_0xe2fbdd(0x902)+'er-ra'+_0xe2fbdd(0x340)+_0xe2fbdd(0xace))+_0x308226[_0xe2fbdd(0xbca)],_0xe2fbdd(0x469)+_0xe2fbdd(0x70e)+_0xe2fbdd(0x958)+'ex-di'+_0xe2fbdd(0x702)+_0xe2fbdd(0x797)+_0xe2fbdd(0x2d7)+_0xe2fbdd(0xa1a)+'low:h'+'idden'+';'),_0x26d6dc['inner'+'HTML']=_0x308226['dAgIG'](_0x308226['EjLYY'](_0x308226[_0xe2fbdd(0x424)](_0x308226[_0xe2fbdd(0x75e)](_0x308226['MfACc'](_0x308226['UTGxG'](_0x308226['ynGim']+_0x308226[_0xe2fbdd(0x62b)],_0x36b2b2)+_0x308226[_0xe2fbdd(0x243)],'<span'+_0xe2fbdd(0xc0e)+_0xe2fbdd(0x5e4)+_0xe2fbdd(0x692)+'\x20styl'+_0xe2fbdd(0xaf6)+'lor:#'+'7a658'+_0xe2fbdd(0x60a)+_0xe2fbdd(0x2a8)+_0xe2fbdd(0xa69)+_0xe2fbdd(0x1fd)+'ding:'+_0xe2fbdd(0xab5)+'px;bo'+_0xe2fbdd(0x706)+'1px\x20s'+_0xe2fbdd(0x64f)+'rgba('+'255,1'+_0xe2fbdd(0x43c)+'7,.35'+');bor'+_0xe2fbdd(0x30d)+_0xe2fbdd(0x1a1)+':999p'+'x;\x22>v'+_0xe2fbdd(0x30f)+_0xe2fbdd(0xa52))+(_0xe2fbdd(0x582)+'\x20id=\x22'+'sw2-s'+_0xe2fbdd(0x2be)+_0xe2fbdd(0xa2f)+_0xe2fbdd(0x73b)+_0xe2fbdd(0x269)+_0xe2fbdd(0x983)+_0xe2fbdd(0x772)+_0xe2fbdd(0x57c)+_0xe2fbdd(0xbd2)+'\x20game'+'\x20fram'+'e…</s'+'pan>')+_0x308226[_0xe2fbdd(0x41c)]+_0x36b2b2+(';bord'+_0xe2fbdd(0x509)+_0xe2fbdd(0x62e)+':#2a0'+'f1b;b'+_0xe2fbdd(0xa94)+_0xe2fbdd(0x7fc)+_0xe2fbdd(0x338)+_0xe2fbdd(0x1fd)+_0xe2fbdd(0xb8c)+_0xe2fbdd(0x698)+_0xe2fbdd(0xb3c)+_0xe2fbdd(0x45b)+_0xe2fbdd(0x32c)+':700;'+'curso'+'r:poi'+_0xe2fbdd(0x3d3)+_0xe2fbdd(0x2e2)+_0xe2fbdd(0xb85)+'N</bu'+'tton>')+(_0xe2fbdd(0x61d)+_0xe2fbdd(0xaaa)+_0xe2fbdd(0x627)+'-togg'+_0xe2fbdd(0x6bc)+'tyle='+_0xe2fbdd(0x341)+_0xe2fbdd(0xa42)+'d:tra'+'nspar'+'ent;b'+_0xe2fbdd(0xa94)+_0xe2fbdd(0xc18)+_0xe2fbdd(0x9ca)+'\x20rgba'+'(255,'+_0xe2fbdd(0x324)+_0xe2fbdd(0x579)+_0xe2fbdd(0x34e)+_0xe2fbdd(0x5cd)+'7eef5'+_0xe2fbdd(0x902)+_0xe2fbdd(0xa6e)+_0xe2fbdd(0x340)+_0xe2fbdd(0xa91)+'addin'+_0xe2fbdd(0xb90)+_0xe2fbdd(0x92f)+_0xe2fbdd(0x41a)+'r:poi'+_0xe2fbdd(0x3d3)+_0xe2fbdd(0xa6a)+'n</bu'+'tton>')+_0x308226['egnGG'],_0x308226[_0xe2fbdd(0x86b)])+_0x308226[_0xe2fbdd(0x6ed)]+_0x308226[_0xe2fbdd(0x2f5)],'<butt'+'on\x20id'+'=\x22sw2'+_0xe2fbdd(0x97b)+'d\x22\x20st'+_0xe2fbdd(0x58b)+_0xe2fbdd(0x4a6)+_0xe2fbdd(0x647)+_0xe2fbdd(0x449)+_0xe2fbdd(0x604)+_0xe2fbdd(0x8dd)+'rder:'+'1px\x20s'+'olid\x20'+_0xe2fbdd(0x787)+'255,1'+_0xe2fbdd(0x43c)+_0xe2fbdd(0x1bb)+';colo'+'r:#f7'+'eef5;'+_0xe2fbdd(0x1ac)+'r-rad'+_0xe2fbdd(0x5be)+'px;pa'+_0xe2fbdd(0xa6c)+':4px\x20'+'10px;'+_0xe2fbdd(0x41a)+_0xe2fbdd(0x4ab)+'nter;'+'\x22>Spe'+_0xe2fbdd(0x2cd)+'f</bu'+_0xe2fbdd(0x85c))+_0x308226[_0xe2fbdd(0x603)]+_0x36b2b2+';\x22>'+_0x308226[_0xe2fbdd(0x25b)],_0xe2fbdd(0x61d)+'on\x20id'+_0xe2fbdd(0x627)+_0xe2fbdd(0x4b9)+_0xe2fbdd(0xa2f)+'le=\x22b'+_0xe2fbdd(0x2c2)+_0xe2fbdd(0x3d7)+_0xe2fbdd(0xa40)+_0xe2fbdd(0xb9b)+_0xe2fbdd(0x3af)+_0xe2fbdd(0x825)+_0xe2fbdd(0x8f2)+'lid\x20r'+_0xe2fbdd(0x86a)+_0xe2fbdd(0x346)+'3,177'+_0xe2fbdd(0x573)+'color'+_0xe2fbdd(0x796)+_0xe2fbdd(0x3a8)+'order'+_0xe2fbdd(0x7fc)+_0xe2fbdd(0x338)+_0xe2fbdd(0x1fd)+'ding:'+_0xe2fbdd(0xb2b)+_0xe2fbdd(0x25f)+_0xe2fbdd(0x679)+_0xe2fbdd(0x196)+_0xe2fbdd(0x93c)+_0xe2fbdd(0x8fb)+_0xe2fbdd(0x630)+_0xe2fbdd(0x890)+_0xe2fbdd(0xb04)+'n>')+_0x308226[_0xe2fbdd(0x2a1)]+(_0xe2fbdd(0x308)+'>'),_0x308226['bokVT'])+_0x308226[_0xe2fbdd(0x804)]+('</div'+'>');var _0xf5877a=_0x26d6dc['query'+_0xe2fbdd(0x4b8)+_0xe2fbdd(0x562)](_0xe2fbdd(0x1a8)+_0xe2fbdd(0x5f7)+'s'),_0x142e37=_0x26d6dc['query'+'Selec'+_0xe2fbdd(0x562)](_0xe2fbdd(0x1a8)+_0xe2fbdd(0x9ef)),_0x1b70ad=_0x26d6dc['query'+_0xe2fbdd(0x4b8)+'tor'](_0x308226[_0xe2fbdd(0x1e6)]),_0x505be0=_0x26d6dc['query'+'Selec'+_0xe2fbdd(0x562)](_0xe2fbdd(0x1a8)+_0xe2fbdd(0x743)),_0x4227bc=_0x26d6dc[_0xe2fbdd(0x32e)+_0xe2fbdd(0x4b8)+_0xe2fbdd(0x562)](_0x308226[_0xe2fbdd(0xc5f)]),_0x1c004a=_0x26d6dc[_0xe2fbdd(0x32e)+_0xe2fbdd(0x4b8)+_0xe2fbdd(0x562)](_0x308226[_0xe2fbdd(0x457)]),_0x2bfdda=_0x26d6dc['query'+_0xe2fbdd(0x4b8)+'tor'](_0xe2fbdd(0x1a8)+'body'),_0x385260=_0x26d6dc['query'+'Selec'+'tor']('#sw2-'+'snap'),_0xbf893a=_0x26d6dc[_0xe2fbdd(0x32e)+'Selec'+_0xe2fbdd(0x562)]('#sw2-'+'speed'),_0x2cc630=_0x26d6dc[_0xe2fbdd(0x32e)+'Selec'+_0xe2fbdd(0x562)](_0xe2fbdd(0x1a8)+_0xe2fbdd(0x922)+'r'),_0x5153a2=_0x26d6dc['query'+_0xe2fbdd(0x4b8)+'tor'](_0xe2fbdd(0x1a8)+_0xe2fbdd(0x922)+'rlabe'+'l'),_0x2c39a1=_0x26d6dc[_0xe2fbdd(0x32e)+'Selec'+_0xe2fbdd(0x562)](_0xe2fbdd(0x1a8)+_0xe2fbdd(0x752)),_0x4ba1a4=null,_0x548fa6=![];function _0xd69344(){var _0x5715ad=_0xe2fbdd;if(_0x2bfdda)_0x2bfdda['style'][_0x5715ad(0x469)+'ay']=_0x548fa6?'':_0x308226[_0x5715ad(0x493)];if(_0x1c004a)_0x1c004a['textC'+_0x5715ad(0x696)+'t']=_0x548fa6?_0x5715ad(0xb0c):_0x5715ad(0x373);_0x26d6dc[_0x5715ad(0x74c)][_0x5715ad(0x2d6)]=_0x548fa6?_0x5715ad(0x801)+'2vw,6'+'20px)':_0x308226[_0x5715ad(0xc50)],_0x26d6dc['style'][_0x5715ad(0x4a6)+'round']=_0x548fa6?'#150c'+'1d':'rgba('+'21,12'+_0x5715ad(0x6b7)+'9)';}if(_0x1c004a)_0x1c004a[_0xe2fbdd(0x5dc)+'ck']=function(){var _0x3638da=_0xe2fbdd;_0x548fa6=!_0x548fa6,_0x308226[_0x3638da(0x3e0)](_0xd69344);};_0xd69344();if(_0x4227bc)_0x4227bc['oncli'+'ck']=function(){var _0x220760=_0xe2fbdd;if(_0x4744b7['CGoBJ']('tiKbD','IeXXd'))_0x4744b7[_0x220760(0x317)](_0x6c9ce8,!![]);else{_0x14a211['error']='Runti'+_0x220760(0x508)+_0x220760(0x42f)+'lugin'+_0x220760(0x6cd)+'ailab'+'le';return;}};if(_0x385260)_0x385260[_0xe2fbdd(0x5dc)+'ck']=function(){var _0x18a4c6=_0xe2fbdd,_0x7171c9={'txAgo':function(_0x31caf2,_0x3c1e69){return _0x308226['WZLVU'](_0x31caf2,_0x3c1e69);}};if(_0x18a4c6(0xab2)!==_0x308226[_0x18a4c6(0x230)]){var _0x3cc22a=_0x411e9e[_0x4a3c3d]['xyz']||[_0x3608fd[_0x19d21e]['v'],-0x11d+0x39*-0x75+-0x1*-0x1b2a,-0x4d*0x32+-0x90b+0x5*0x4d1];return _0x3cc22a[_0x18a4c6(0x356)](function(_0x97aa95){var _0x142bc6=_0x18a4c6;return _0x87e848[_0x142bc6(0x647)](_0x7171c9['txAgo'](_0x97aa95,0xc9*-0x3+-0x1891+0x1b50))/(0x3*0xbd8+-0x12e8+-0x103c);})[_0x18a4c6(0x19a)]('\x20\x20');}else _0x308226[_0x18a4c6(0xa9c)](_0x2ef9e3,_0x308226[_0x18a4c6(0x283)]);};var _0x47e304=![];function _0x44d0ea(){var _0x157fdc=_0xe2fbdd;_0x2ef9e3(_0x157fdc(0x6c7),{'on':_0x47e304,'factor':_0x4744b7[_0x157fdc(0x73c)](parseFloat,_0x2cc630['value'])||0x231a+0x1*0x1091+-0x33aa});}if(_0xbf893a)_0xbf893a[_0xe2fbdd(0x5dc)+'ck']=function(){var _0x1a11c8=_0xe2fbdd;_0x47e304=!_0x47e304,_0xbf893a[_0x1a11c8(0x500)+'onten'+'t']=_0x47e304?'Speed'+_0x1a11c8(0x3f1):_0x1a11c8(0x501)+'\x20off',_0xbf893a[_0x1a11c8(0x74c)][_0x1a11c8(0x4a6)+'round']=_0x47e304?_0x36b2b2:_0x1a11c8(0xa40)+'paren'+'t',_0xbf893a[_0x1a11c8(0x74c)]['color']=_0x47e304?_0x1a11c8(0xb7e)+'1b':_0x4744b7[_0x1a11c8(0xc82)],_0x4744b7['rKofc'](_0x44d0ea);};if(_0x2cc630)_0x2cc630[_0xe2fbdd(0x6c3)+'ut']=function(){var _0x5074d8=_0xe2fbdd;if(_0x5153a2)_0x5153a2[_0x5074d8(0x500)+'onten'+'t']=(_0x308226[_0x5074d8(0x845)](parseFloat,_0x2cc630['value'])||0x185*0x17+-0x12db+-0x1017)['toFix'+'ed'](-0x12de+0xa42*-0x2+0x2763*0x1)+'x';_0x44d0ea();};if(_0x505be0)_0x505be0[_0xe2fbdd(0x5dc)+'ck']=function(){var _0x22a89b=_0xe2fbdd,_0x2c9691={'pujLG':function(_0x12be91,_0x757903){return _0x12be91+_0x757903;},'VBhFE':_0x22a89b(0x66a)+_0x22a89b(0x9d4),'mxZkZ':function(_0x4c73b8){return _0x4c73b8();}},_0x53daa6=_0x4744b7[_0x22a89b(0x908)](_0x4744b7['KgbIS'](_0x4744b7[_0x22a89b(0x7cd)](_0x572883,'\x0a'),_0x4ba1a4?JSON[_0x22a89b(0x412)+'gify'](_0x4ba1a4,null,0x2*0x11f2+0x3db+0x2*-0x13df):''),'\x0a')+_0x32eb22,_0x2d9569=function(){var _0x1c5b18=_0x22a89b;if(_0x4744b7[_0x1c5b18(0x9c9)](_0x4744b7[_0x1c5b18(0x6aa)],'zMayE')){if(_0x505be0)_0x505be0['textC'+_0x1c5b18(0x696)+'t']='Copie'+'d';}else return _0x188d92['query'+_0x1c5b18(0x4b8)+'tor'](_0x2c9691['pujLG'](_0x2c9691['pujLG'](_0x2c9691['VBhFE'],_0x124473),'\x22]'));};if(navigator[_0x22a89b(0x935)+_0x22a89b(0x31d)]&&navigator[_0x22a89b(0x935)+_0x22a89b(0x31d)][_0x22a89b(0x936)+'Text']){if(_0x22a89b(0x1cd)===_0x22a89b(0xc05)){_0x44e331[_0x55c169]=_0x2c9691['pujLG']('0x',_0x18babe[_0x1e1538][_0x22a89b(0x1fb)][_0x22a89b(0x8d4)+_0x22a89b(0x1aa)](-0x4b1*0x2+-0x60b*0x3+0x1b93));if(_0x4a0e56[_0x759108][_0x22a89b(0x7ef)+_0x22a89b(0x194)])_0x335f5f[_0x22a89b(0x3f8)](_0x2d7c99);}else navigator['clipb'+_0x22a89b(0x31d)]['write'+'Text'](_0x53daa6)['then'](_0x2d9569,function(){_0x5ad2d0();});}else _0x4744b7['rKofc'](_0x5ad2d0);function _0x5ad2d0(){var _0x5cefc0=_0x22a89b,_0x4f982b=document['creat'+_0x5cefc0(0x972)+'ent'](_0x5cefc0(0x853)+'rea');_0x4f982b['value']=_0x53daa6;if(!document[_0x5cefc0(0x2d0)])return;document[_0x5cefc0(0x2d0)][_0x5cefc0(0x3de)+'dChil'+'d'](_0x4f982b),_0x4f982b['selec'+'t']();try{if(_0x5cefc0(0x884)===_0x5cefc0(0xa0f)){var _0x52d76a=_0x5a29a9[_0x5cefc0(0x9a3)+_0x5cefc0(0x972)+_0x5cefc0(0x964)](_0x5cefc0(0x74c));_0x52d76a['id']='sakur'+'a-sw-'+'hud-c'+'ss',_0x52d76a[_0x5cefc0(0x500)+'onten'+'t']='#saku'+_0x5cefc0(0x779)+'-hud{'+_0x5cefc0(0x39f)+_0x5cefc0(0xb81)+'l}',(_0x3a13b2['head']||_0x49d704[_0x5cefc0(0xbd7)+_0x5cefc0(0x612)+'ement'])[_0x5cefc0(0x3de)+'dChil'+'d'](_0x52d76a);}else document['execC'+'omman'+'d']('copy'),_0x2c9691['mxZkZ'](_0x2d9569);}catch(_0x4bbe30){}_0x4f982b[_0x5cefc0(0x335)+'e']();}};_0x308226['xqHND'](setTimeout,function(){var _0x4b28af=_0xe2fbdd;if(_0x4ba1a4)return;if(!_0xf5877a||!_0x1b70ad)return;_0xf5877a['textC'+'onten'+'t']=_0x308226['qzdTA'],_0xf5877a[_0x4b28af(0x74c)][_0x4b28af(0x62e)]=_0x4b28af(0xb09)+'c7',_0x1b70ad[_0x4b28af(0x500)+_0x4b28af(0x696)+'t']=_0x308226[_0x4b28af(0x424)](_0x308226[_0x4b28af(0x895)](_0x4b28af(0x9b1)+_0x4b28af(0x464)+'rame\x20'+_0x4b28af(0x977)+'\x20post'+_0x4b28af(0x2e0)+_0x4b28af(0xa56)+'e\x20rep'+_0x4b28af(0xba4)+'\x0a'+('This\x20'+_0x4b28af(0x99b)+'\x20prov'+_0x4b28af(0xaa9)+_0x4b28af(0xad6)+'rscri'+_0x4b28af(0x325)+'\x20inst'+'alled'+_0x4b28af(0x906)+_0x4b28af(0x9e6)+_0x4b28af(0x83c)+_0x4b28af(0x1c6)+_0x4b28af(0x7fd)+'l,\x0a')+_0x308226[_0x4b28af(0x988)]+_0x308226[_0x4b28af(0xa0c)],'\x20\x202.\x20'+'The\x20p'+_0x4b28af(0x560)+'as\x20no'+'t\x20bee'+'n\x20rel'+'oaded'+_0x4b28af(0x5eb)+_0x4b28af(0x2fc)+_0x4b28af(0x5bd)+_0x4b28af(0x898))+_0x308226[_0x4b28af(0x76d)],_0x308226['KMmOX'])+('Reloa'+'d\x20the'+_0x4b28af(0x7be)+_0x4b28af(0xc3f)+_0x4b28af(0x214)+'\x20and\x20'+'watch'+'\x20this'+'\x20pane'+_0x4b28af(0x357)+_0x4b28af(0x441));},0x3*0x5b55+-0x8*-0x96d+0x7307*-0x1);var _0x435fcb={'set':function(_0x533737){var _0x3dd23b=_0xe2fbdd,_0x49e431={'CKEXv':function(_0x158858,_0x26eac2){return _0x158858+_0x26eac2;},'rmIxB':function(_0x4dd1e8,_0x501abb){return _0x308226['klmfs'](_0x4dd1e8,_0x501abb);}};_0x4ba1a4=_0x533737;if(_0x505be0)_0x505be0['style'][_0x3dd23b(0x469)+'ay']='';if(_0x142e37){_0x142e37['textC'+_0x3dd23b(0x696)+'t']='v'+(_0x533737['versi'+'on']||'?');var _0x5a3dda=_0x48e762,_0x2cef8e=_0x533737['versi'+'on']||'';_0x142e37['style'][_0x3dd23b(0x62e)]=_0x308226[_0x3dd23b(0x34f)](_0x2cef8e,_0x5a3dda)?_0x36b2b2:_0x308226[_0x3dd23b(0x740)],_0x142e37[_0x3dd23b(0x74c)]['borde'+_0x3dd23b(0x58e)+'r']=_0x2cef8e===_0x5a3dda?_0x3dd23b(0x787)+_0x3dd23b(0x2d1)+_0x3dd23b(0x43c)+_0x3dd23b(0xa90)+')':_0x3dd23b(0x454)+'74';}var _0x5d7d4e=_0x533737[_0x3dd23b(0x611)+'nces']&&_0x533737[_0x3dd23b(0x611)+_0x3dd23b(0x5bb)][_0x3dd23b(0x262)+'ntrol'+_0x3dd23b(0x2df)],_0x48e773=Math[_0x3dd23b(0x647)]((_0x533737[_0x3dd23b(0x96c)+'edMs']||-0x1ece+-0x471+0x509*0x7)/(-0xb*-0xcd+0xc*-0x12c+0x23*0x43));if(_0xf5877a){if(_0x308226[_0x3dd23b(0x74f)]!=='EcAsG')return new _0x2339e9(_0x366ef8['buffe'+'r'],_0x3b209d[_0x3dd23b(0x950)+'ffset'],_0xce0c94['byteL'+_0x3dd23b(0xa2b)]);else{var _0x49574e,_0x40d43b;if(_0x5d7d4e&&_0x533737[_0x3dd23b(0x944)+'y']&&_0x533737['surve'+'y']['FPSco'+_0x3dd23b(0x9b9)+'ler'])_0x49574e=_0x308226[_0x3dd23b(0x424)](_0x308226['VynUR'],Object[_0x3dd23b(0x33f)](_0x533737[_0x3dd23b(0x611)+'nces'])['lengt'+'h'])+(_0x3dd23b(0x4c2)+'cts\x20·'+'\x20')+_0x48e773+'s',_0x40d43b='#7ee0'+'a8';else{if(_0x308226['exLmb'](_0x533737['hooks'+_0x3dd23b(0x947)+'ed'],0x1d*0xcd+0x1e92+-0x2f*0x125))_0x49574e=_0x308226[_0x3dd23b(0x6ba)](_0x308226[_0x3dd23b(0x539)](_0x308226['tbJhH'],_0x48e773),'s'),_0x40d43b=_0x308226[_0x3dd23b(0x866)];else _0x533737[_0x3dd23b(0x527)+_0x3dd23b(0xae1)]?(_0x49574e=_0x3dd23b(0x4e3)+_0x3dd23b(0x461)+_0x3dd23b(0x8cc)+'·\x20'+_0x48e773+'s',_0x40d43b=_0x308226[_0x3dd23b(0x866)]):(_0x49574e=_0x308226[_0x3dd23b(0xc44)]((_0x533737[_0x3dd23b(0x42e)]&&_0x533737['arm']['ok']?_0x3dd23b(0x8c0)+_0x3dd23b(0x9ea):'armin'+_0x3dd23b(0x22f))+_0x48e773,'s'),_0x40d43b='#ffd4'+'8a');}_0xf5877a['textC'+_0x3dd23b(0x696)+'t']=_0x49574e,_0xf5877a[_0x3dd23b(0x74c)][_0x3dd23b(0x62e)]=_0x40d43b;}}_0x2c39a1&&(_0x2c39a1[_0x3dd23b(0x500)+_0x3dd23b(0x696)+'t']=_0x533737[_0x3dd23b(0xb97)]&&_0x533737[_0x3dd23b(0xb97)][_0x3dd23b(0x687)+'h']?_0x3dd23b(0x482)+_0x3dd23b(0x3fa)+_0x3dd23b(0x5f5)+_0x3dd23b(0xb24)+_0x533737[_0x3dd23b(0xb97)][_0x3dd23b(0x19a)](',\x20'):_0x308226['CllCp']);if(_0x533737['speed']&&_0xbf893a){if(_0x308226[_0x3dd23b(0xa9d)](_0x3dd23b(0xa4d),'bZfvX'))return![];else{var _0x186e50=_0x308226[_0x3dd23b(0x362)][_0x3dd23b(0x3c2)]('|'),_0x5f1546=-0x8*-0x42a+0x2063+-0x8b*0x79;while(!![]){switch(_0x186e50[_0x5f1546++]){case'0':_0xbf893a[_0x3dd23b(0x500)+_0x3dd23b(0x696)+'t']=_0x47e304?_0x308226[_0x3dd23b(0x58f)]:_0x308226[_0x3dd23b(0x841)];continue;case'1':_0x5153a2&&_0x533737['speed'][_0x3dd23b(0x922)+'r']&&(_0x5153a2[_0x3dd23b(0x500)+'onten'+'t']=Number(_0x533737['speed'][_0x3dd23b(0x922)+'r'])['toFix'+'ed'](-0x11d7*-0x1+-0x1*-0x142d+0x25*-0x107)+'x');continue;case'2':_0xbf893a['style']['backg'+_0x3dd23b(0x647)]=_0x47e304?_0x36b2b2:_0x3dd23b(0xa40)+'paren'+'t';continue;case'3':_0x47e304=!!_0x533737[_0x3dd23b(0x6c7)]['on'];continue;case'4':_0xbf893a['style'][_0x3dd23b(0x62e)]=_0x47e304?_0x308226[_0x3dd23b(0x2c4)]:_0x3dd23b(0x82a)+'f5';continue;}break;}}}if(_0x1b70ad){if(_0x308226['IQLNU']!==_0x308226['nlEyi'])try{_0x1b70ad[_0x3dd23b(0x500)+_0x3dd23b(0x696)+'t']=_0xd08f6a(_0x533737);}catch(_0x2baf63){_0x1b70ad['textC'+_0x3dd23b(0x696)+'t']=JSON['strin'+_0x3dd23b(0x392)](_0x533737,null,-0x919+0x1713+-0xdf9);}else{var _0x3085fc=_0x49e431[_0x3dd23b(0x49f)](_0x49e431[_0x3dd23b(0xba6)](_0xbedb5b,'\x0a')+_0x3e3a2b['strin'+_0x3dd23b(0x392)](_0x10dc09,null,0x14be+-0x1060+-0x1*0x45d),'\x0a')+_0x528898;if(_0x14c69c[_0x3dd23b(0x935)+'oard']&&_0x5c5828[_0x3dd23b(0x935)+_0x3dd23b(0x31d)][_0x3dd23b(0x936)+_0x3dd23b(0x91c)])_0x4f40f2['clipb'+'oard'][_0x3dd23b(0x936)+'Text'](_0x3085fc)[_0x3dd23b(0xa96)](function(){var _0x23d3ac=_0x3dd23b;_0x55ffcf[_0x23d3ac(0x500)+_0x23d3ac(0x696)+'t']='Copie'+'d';});else _0x5bfdec['textC'+'onten'+'t']='Clipb'+_0x3dd23b(0x20a)+'block'+'ed\x20-\x20'+_0x3dd23b(0x80f)+_0x3dd23b(0xa79)+_0x3dd23b(0x30e)+_0x3dd23b(0xb0d)+'ad';}}console['log'](_0x3dd23b(0x437)+_0x3dd23b(0x6e9)+'\x20Skil'+'lWarz'+_0x3dd23b(0x7cb)+'rt',_0x308226['IYoIt'](_0x308226[_0x3dd23b(0x4cf)]+_0x36b2b2,';font'+_0x3dd23b(0x8c9)+_0x3dd23b(0x330)+'0'),_0x533737),console['log'](_0x308226['cqqHO'](_0x308226[_0x3dd23b(0x833)](_0x572883,'\x0a'),JSON[_0x3dd23b(0x412)+_0x3dd23b(0x392)](_0x533737,null,0x1d10+0x3*0x9b7+-0x3a34))+'\x0a'+_0x32eb22);}};return _0x26d6dc['datas'+'et'][_0xe2fbdd(0x9a8)]='1',_0x26d6dc[_0xe2fbdd(0x9a8)]=_0x435fcb,_0x435fcb;}function _0xd08f6a(_0x37843b){var _0x201879=_0xc5af74,_0x21a91c={'DeZgh':function(_0x1edfaa){var _0x5f1146=_0x45e7;return _0x308226[_0x5f1146(0x3e0)](_0x1edfaa);}};if('KACGH'===_0x201879(0x36c)){var _0x56068b=[];_0x56068b[_0x201879(0x3f8)](_0x308226['eitvp'](_0x308226[_0x201879(0x663)],_0x37843b[_0x201879(0x7e4)]||'?')+_0x201879(0xb3b)+Math[_0x201879(0x647)]((_0x37843b[_0x201879(0x96c)+_0x201879(0xa97)]||0x100b+0x181*0x17+-0x32a2)/(0x64*-0x15+-0x6*-0x431+-0x2*0x685))+'s)'),_0x56068b['push'](_0x308226['xXJMb'](_0x308226[_0x201879(0x8af)](_0x308226['ZqtBd'](_0x308226[_0x201879(0x594)],_0x37843b[_0x201879(0x98c)]?'yes':'no')+_0x308226['maLPg']+(_0x37843b['il2Cp'+'pCont'+'ext']?_0x201879(0xc87):'no'),_0x308226['Jonam']),_0x37843b[_0x201879(0x578)+'ount']!=null?_0x37843b['typeC'+_0x201879(0x50a)]:'?')),_0x56068b['push'](_0x308226['EjLYY'](_0x308226[_0x201879(0x2c6)](_0x308226['UTGxG']('hooks'+'\x20\x20\x20\x20',_0x37843b[_0x201879(0x293)+_0x201879(0x947)+'ed']),'/'),_0x37843b[_0x201879(0x293)+_0x201879(0x548)])+_0x308226['LNAAR']),_0x56068b[_0x201879(0x3f8)]('');var _0x3d5e64=_0x37843b['insta'+'nces']||{},_0x581336=Object['keys'](_0x3d5e64);!_0x581336[_0x201879(0x687)+'h']&&(_0x56068b[_0x201879(0x3f8)](_0x201879(0x720)+_0x201879(0xa04)+'jects'+_0x201879(0x643)+_0x201879(0xb12)+'yet.'),_0x56068b['push'](''),_0x56068b[_0x201879(0x3f8)](_0x201879(0x237)+'ooks\x20'+_0x201879(0x67a)+_0x201879(0x2bd)+_0x201879(0x4dc)+'e\x27s\x20o'+_0x201879(0x361)+_0x201879(0x3a5)+_0x201879(0x336)+'thing'+'\x20capt'+_0x201879(0xb12)+_0x201879(0xc37)),_0x56068b[_0x201879(0x3f8)](_0x308226['BkWXN']));for(var _0x25c094=-0x1e6f+-0x9*-0x2dd+0x4aa;_0x25c094<_0x581336['lengt'+'h'];_0x25c094++){var _0x5950df=_0x581336[_0x25c094];_0x56068b['push'](_0x308226[_0x201879(0x833)](_0x5950df,'\x20@\x20')+_0x3d5e64[_0x5950df]);}_0x56068b[_0x201879(0x3f8)]('');var _0x37c5c2=_0x37843b['surve'+'y']||{},_0xb35b64=Object[_0x201879(0x33f)](_0x37c5c2);for(var _0x3dbd17=-0xcf5*0x1+0x387+-0x1*-0x96e;_0x3dbd17<_0xb35b64[_0x201879(0x687)+'h'];_0x3dbd17++){var _0x2d63c4=_0xb35b64[_0x3dbd17],_0x443e83=_0x37c5c2[_0x2d63c4];if(!_0x443e83||!_0x443e83['lengt'+'h'])continue;_0x56068b['push'](_0x308226[_0x201879(0x848)]+_0x2d63c4+'\x20'+new Array(Math[_0x201879(0x571)](0xdd9*-0x2+-0x1c*0x106+0x385b,_0x308226[_0x201879(0xaef)](0x15d2+-0xa*0x26e+0x29c,_0x2d63c4['lengt'+'h'])))[_0x201879(0x19a)]('─')),_0x56068b[_0x201879(0x3f8)](_0x308226[_0x201879(0x189)]);for(var _0xf21360=0x18a1+-0xcd*0x9+-0x116c;_0xf21360<_0x443e83[_0x201879(0x687)+'h'];_0xf21360++){var _0x3c9f9d=_0x443e83[_0xf21360],_0x3899b3=_0x308226['iOAji'](typeof _0x3c9f9d['v'],_0x201879(0x945)+'r')?Math['round'](_0x3c9f9d['v']*(-0xee8+0x3df+0xef1))/(-0x8d0+-0x1b59+0x2811):_0x3c9f9d['v'];_0x56068b['push'](_0x308226['CpUCE'](_0x308226[_0x201879(0xb44)](_0x308226[_0x201879(0x337)](_0x308226['cqqHO'](_0x308226[_0x201879(0xb4c)]('\x20\x20',('0x'+_0x3c9f9d['o'][_0x201879(0x8d4)+'ing'](0x4*-0x729+0x3*0xae7+-0x401))['padEn'+'d'](-0x10f3+-0xe5b+0x1f56)),'\x20')+_0x3c9f9d['k']['padEn'+'d'](-0x3*0x420+0x334*-0x8+0x260b*0x1),'\x20'),String(_0x3899b3)[_0x201879(0x711)+'d'](-0x475+0x1c6*0x4+-0x1*0x293))+'\x20',_0x3c9f9d[_0x201879(0x8a2)]||''));}_0x56068b[_0x201879(0x3f8)]('');}if(_0x37843b[_0x201879(0x5c0)+'ngs']&&_0x37843b[_0x201879(0x5c0)+'ngs'][_0x201879(0x687)+'h']){if(_0x201879(0x23c)===_0x308226[_0x201879(0x869)]){_0x56068b[_0x201879(0x3f8)]('warni'+_0x201879(0x591));for(var _0x2a9a74=-0xa18+-0x1ea0+0x28b8;_0x2a9a74<_0x37843b[_0x201879(0x5c0)+'ngs'][_0x201879(0x687)+'h'];_0x2a9a74++)_0x56068b[_0x201879(0x3f8)](_0x308226['JhPLG'](_0x308226[_0x201879(0x852)],_0x37843b[_0x201879(0x5c0)+_0x201879(0x591)][_0x2a9a74]));}else _0x3ea37e['syncs'][_0x1d092c]();}return _0x56068b['join']('\x0a');}else _0xcfcc5c[_0x201879(0xc4b)+'omman'+'d']('copy'),_0x21a91c['DeZgh'](_0x2e7841);}window[_0xc5af74(0x4a0)+'entLi'+'stene'+'r'](_0x308226['sROgH'],function(_0x1bb9ec){var _0x72b6dd=_0xc5af74,_0x236703=_0x1bb9ec[_0x72b6dd(0x5ce)];if(!_0x236703||_0x236703['__sak'+_0x72b6dd(0x814)]!==_0x729b8b)return;try{if(_0x236703['kind']===_0x308226['tqmfU']){_0x308226[_0x72b6dd(0x78c)](_0x37e908)[_0x72b6dd(0x28d)]({'host':_0x236703['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x308226[_0x72b6dd(0x486)](_0x236703[_0x72b6dd(0x641)],_0x308226['FzKvt']))_0x308226['eerla'](_0x37e908)[_0x72b6dd(0x28d)](_0x236703[_0x72b6dd(0x9df)+'t']);}catch(_0x2809e9){console['warn'](_0x308226[_0x72b6dd(0x2e1)],_0x308226[_0x72b6dd(0xc38)](_0x72b6dd(0x62e)+':',_0x36b2b2),_0x2809e9);}});function _0x1d6dc3(){_0x308226['lUIwk'](_0x6c9ce8,!![]);}if(document[_0xc5af74(0x2d0)])_0x1d6dc3();else document['addEv'+'entLi'+_0xc5af74(0x816)+'r'](_0xc5af74(0xb6c)+_0xc5af74(0x9dd)+_0xc5af74(0x59d)+'d',_0x1d6dc3,{'once':!![]});return;}window['__SAK'+'URA_S'+_0xc5af74(0x3d0)]=window[_0xc5af74(0x87a)+'URA_S'+_0xc5af74(0x3d0)]||{'at':Date['now']()};function _0x33fd94(_0x278ffe,_0x5bdc9a){var _0x51b0a4=_0xc5af74,_0x2a9968={'__sakura':_0x729b8b,'kind':_0x278ffe};if(_0x5bdc9a){for(var _0x27bce4 in _0x5bdc9a)_0x2a9968[_0x27bce4]=_0x5bdc9a[_0x27bce4];}try{if(window['paren'+'t']&&_0x308226['CtYMl'](window['paren'+'t'],window))window['paren'+'t'][_0x51b0a4(0x966)+'essag'+'e'](_0x2a9968,'*');}catch(_0x4d8ec9){}try{if(window[_0x51b0a4(0x613)]&&window['top']!==window)window['top']['postM'+'essag'+'e'](_0x2a9968,'*');}catch(_0x2b4959){}}console['log'](_0x308226[_0xc5af74(0x960)](_0x308226['DnRrq'],_0x48e762),_0x308226[_0xc5af74(0x64e)](_0x308226['IkXcy']+_0x36b2b2,_0xc5af74(0x333)+_0xc5af74(0x8c9)+_0xc5af74(0x330)+'0;fon'+'t-siz'+_0xc5af74(0x9d6)+'x'),{'host':_0x4e3c5b,'href':location['href'],'version':_0x48e762}),_0x33fd94(_0x308226[_0xc5af74(0xc1f)],{'host':_0x4e3c5b,'role':_0x52d3ac});var _0x303305=window[_0xc5af74(0x87a)+_0xc5af74(0x304)+'W__']&&window[_0xc5af74(0x87a)+_0xc5af74(0x304)+_0xc5af74(0x3d0)]['at']||Date[_0xc5af74(0x682)]();window[_0xc5af74(0x4a0)+'entLi'+'stene'+'r'](_0x308226[_0xc5af74(0xac8)],function(_0x3ad1d6){var _0x3970f6=_0xc5af74,_0x40a8ee={'ZUSWj':'trans'+_0x3970f6(0xb9b)+'t','vSkQo':function(_0x1de2ca,_0x54c739){return _0x1de2ca+_0x54c739;}};if(_0x308226['eLhof']!==_0x3970f6(0x1e0))try{var _0x5ca53e=_0x3ad1d6&&_0x3ad1d6[_0x3970f6(0x5ce)];if(!_0x5ca53e||_0x308226[_0x3970f6(0x550)](_0x5ca53e[_0x3970f6(0x94d)+_0x3970f6(0x814)],_0x729b8b)||_0x5ca53e[_0x3970f6(0x641)]!==_0x308226['orsOA'])return;_0xb415d2(_0x5ca53e[_0x3970f6(0xb20)],_0x5ca53e['arg']);}catch(_0x30c26a){}else{_0x4991da['sp']&&(_0x3c19a1['sp'][_0x3970f6(0x500)+_0x3970f6(0x696)+'t']=_0x5c8d07['on']?_0x3970f6(0x501)+_0x3970f6(0x3f1):'Speed'+_0x3970f6(0xb80),_0x5a875d['sp']['style']['backg'+_0x3970f6(0x647)]=_0x53a2c7['on']?_0x548473:_0x40a8ee['ZUSWj'],_0x8b770f['sp'][_0x3970f6(0x74c)]['color']=_0x14c04c['on']?_0x3970f6(0xb7e)+'1b':_0x3970f6(0x82a)+'f5');if(_0x35d355['fx'])_0x4dd65f['fx'][_0x3970f6(0x763)]=_0x4d376f(_0x58cbb0[_0x3970f6(0x922)+'r']);if(_0x1dea83['fv'])_0x3ff14d['fv'][_0x3970f6(0x500)+_0x3970f6(0x696)+'t']=_0x40a8ee['vSkQo'](_0x2ba308[_0x3970f6(0x922)+'r'][_0x3970f6(0xa5d)+'ed'](-0x7*0x13d+-0x1*-0x703+-0x11*-0x19),'x');}});try{if(_0x308226[_0xc5af74(0x98e)]===_0x308226[_0xc5af74(0x98e)]){var _0x156f79=new BroadcastChannel('sakur'+'a-sw');_0x156f79[_0xc5af74(0x75c)+_0xc5af74(0x996)]=function(_0x21c419){var _0xe5390b=_0xc5af74,_0xae4632=_0x21c419['data'];if(_0xae4632&&_0xae4632[_0xe5390b(0x94d)+'ura']===_0x729b8b&&_0x308226['iOAji'](_0xae4632[_0xe5390b(0x641)],_0xe5390b(0xb20)))_0x308226[_0xe5390b(0xc5b)](_0xb415d2,_0xae4632[_0xe5390b(0xb20)],_0xae4632[_0xe5390b(0xb25)]);};}else{if(_0x54471e['el'])_0x2c5ebd['el']['style'][_0xc5af74(0x469)+'ay']=_0xc5af74(0xad2);return;}}catch(_0x5aa503){}var _0x341725=[];(function _0x4ee19b(){var _0x483898=_0xc5af74,_0x15c7d3={'SdUYg':_0x308226[_0x483898(0x8eb)],'Uzjqk':function(_0x45d3d3,_0x2b83b6){return _0x45d3d3===_0x2b83b6;},'gRFbB':_0x483898(0x412)+'g','igqxO':function(_0x577322,_0x4f7e7e){return _0x577322!==_0x4f7e7e;},'dYMxs':_0x483898(0x878)+_0x483898(0x3b4)+_0x483898(0x739),'FMRsh':function(_0xae4746,_0xfd35f2){return _0xae4746<_0xfd35f2;}},_0x4812c5=[_0x483898(0xae8),_0x483898(0x5cc),_0x308226[_0x483898(0xb47)],_0x308226['XvQLB'],_0x483898(0x350)];for(var _0x4c8278=-0x342*0xb+-0x1e5e+-0xdf*-0x4c;_0x308226[_0x483898(0x7b5)](_0x4c8278,_0x4812c5[_0x483898(0x687)+'h']);_0x4c8278++){(function(_0x278832){var _0x217d70=_0x483898,_0xbba38a={'ipORb':_0x308226[_0x217d70(0xc50)],'yRrtZ':_0x308226['fgGiu']};if(_0x308226[_0x217d70(0x818)](_0x217d70(0xc2c),_0x308226['Xanqx'])){var _0x523c1e=console[_0x278832];if(typeof _0x523c1e!==_0x308226['ejzZd'])return;console[_0x278832]=function(){var _0x149f1f=_0x217d70;if(_0x15c7d3[_0x149f1f(0x9d0)]!==_0x149f1f(0xbd8))_0x1803f1();else{try{var _0x422a19='';for(var _0xe44851=0x965*0x2+-0x1*-0x1270+-0x253a;_0xe44851<arguments[_0x149f1f(0x687)+'h'];_0xe44851++){var _0x33a393=arguments[_0xe44851];if(_0x15c7d3['Uzjqk'](typeof _0x33a393,_0x15c7d3[_0x149f1f(0x285)]))_0x422a19+=_0x33a393;else{if(_0x33a393&&_0x33a393[_0x149f1f(0x2ff)+'ge'])_0x422a19+=_0x33a393[_0x149f1f(0x2ff)+'ge'];}}if(_0x15c7d3['igqxO'](_0x422a19[_0x149f1f(0x1e7)+'Of'](_0x572883),-(-0x1bf3+0x1fb3+-0x1*0x3bf)))return _0x523c1e[_0x149f1f(0x976)](console,arguments);if(_0x422a19[_0x149f1f(0x1e7)+'Of'](_0x15c7d3[_0x149f1f(0x3d1)])!==-(0x377*-0xb+0x12e*-0x1c+0x4726)){var _0x186bfc=_0x422a19[_0x149f1f(0x750)](0x1ca3+0x47*-0x3c+0x53*-0x25,0x1*-0x7be+0x1ed7*0x1+-0x15ed);if(_0x341725[_0x149f1f(0x1e7)+'Of'](_0x186bfc)===-(0x1506+0x863*-0x1+-0x126*0xb)&&_0x15c7d3['FMRsh'](_0x341725['lengt'+'h'],-0x30*-0x87+-0x21*-0xd5+0x3*-0x1183))_0x341725[_0x149f1f(0x3f8)](_0x186bfc);}}catch(_0x9f2ae8){}return _0x523c1e['apply'](console,arguments);}};}else _0x43e0c1[_0x217d70(0x74c)][_0x217d70(0x29d)]=_0xbba38a['ipORb'],_0x37c6a8['style'][_0x217d70(0x613)]=_0xbba38a['ipORb'],_0x2aad6f[_0x217d70(0x74c)]['right']=_0xbba38a['yRrtZ'],_0x12dea8[_0x217d70(0x74c)][_0x217d70(0x7b8)+'m']=_0xbba38a['yRrtZ'];}(_0x4812c5[_0x4c8278]));}}());var _0x491cad={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x31d911=null,_0x184ee1=null,_0x3c023e=-(-0xedb*-0x1+0x920+-0x1*0x17fa),_0x252e0f=null;function _0x3843d5(_0x210bd5){var _0x52ea3d=_0xc5af74,_0x19ad0b={'JmRqI':function(_0x12ec71,_0x59f843){return _0x12ec71!==_0x59f843;}};if(_0x52ea3d(0xc16)!==_0x308226[_0x52ea3d(0x9db)])try{if(_0x308226['jNyRD']===_0x52ea3d(0x27f)){if(!_0x210bd5)return;var _0x30dad9=_0x210bd5[_0x52ea3d(0x611)+_0x52ea3d(0xbc1)]?_0x210bd5[_0x52ea3d(0x611)+'nce']['expor'+'ts']:_0x210bd5[_0x52ea3d(0x6be)+'ts']||null;if(!_0x30dad9)return;if(!_0x252e0f){if(_0x308226[_0x52ea3d(0x5a2)](_0x308226[_0x52ea3d(0x8ef)],'uGXue'))_0x299f07=_0x308226['tSvuC'](_0x308226['uuRWV'](_0x308226[_0x52ea3d(0xa46)],_0x12830c['keys'](_0x30621d['insta'+_0x52ea3d(0x5bb)])['lengt'+'h']),_0x308226['Fuhat'])+_0x4ff014+'s',_0x2987d7='#7ee0'+'a8';else try{_0x252e0f=Object['keys'](_0x30dad9)[_0x52ea3d(0x750)](-0x1f27+0x47c+0x1aab*0x1,0x3fa*-0x1+-0x1e9f+0x22b1);}catch(_0x1e751d){}}var _0x4ede10=_0x30dad9[_0x52ea3d(0x4ac)+'y'];_0x4ede10&&_0x4ede10[_0x52ea3d(0x267)+'r']&&_0x4ede10['buffe'+'r'][_0x52ea3d(0xb28)+'ength']>-0x5a6+-0x40+0x5e6&&(_0x184ee1=_0x4ede10,_0x3c023e=Date['now']()-_0x303305);}else try{var _0x54abf3=_0x538b18[_0x52ea3d(0x571)](0x1988+0x4b7*0x3+-0x27ac,_0x8dd09b[_0x52ea3d(0xa67)+_0x52ea3d(0x5fa)]||_0x2121d4[_0x52ea3d(0xbd7)+_0x52ea3d(0x612)+'ement'][_0x52ea3d(0xbf3)+_0x52ea3d(0x974)+'h']||0xe5e+-0x2675+0x1817),_0x583dd8=_0x191bb0[_0x52ea3d(0x571)](0x125d+0x3*-0x995+0xa63*0x1,_0x4101f8['inner'+'Heigh'+'t']||_0x345e5b['docum'+_0x52ea3d(0x612)+'ement'][_0x52ea3d(0xbf3)+'tHeig'+'ht']||0x49a+0x1*-0x31f+-0x1*0x17b);return(_0x4caa06['cv'][_0x52ea3d(0x2d6)]!==_0x54abf3||_0x19ad0b['JmRqI'](_0x5db246['cv'][_0x52ea3d(0x305)+'t'],_0x583dd8))&&(_0x20c0dc['cv'][_0x52ea3d(0x2d6)]=_0x54abf3,_0x4ba088['cv']['heigh'+'t']=_0x583dd8),{'w':_0x54abf3,'h':_0x583dd8};}catch(_0x63c979){return{'w':0x0,'h':0x0};}}catch(_0x1df82f){}else _0x308226['TjyOq'](_0x59728a,_0x5aebd5);}function _0x316c77(){var _0x385364=_0xc5af74,_0x1f7aa9={'HDoTB':function(_0x56af1b,_0x46821a){return _0x56af1b-_0x46821a;},'phTid':function(_0x46129a,_0x553fad){return _0x46129a(_0x553fad);}};if(_0x385364(0x85b)===_0x308226['YkUfz'])try{if(_0x308226['gEdgU'](_0x385364(0x8fd),_0x385364(0x42d)))return{'version':_0x164322,'when':new _0x2d836e()['toISO'+_0x385364(0xa16)+'g'](),'elapsedMs':_0x1f7aa9['HDoTB'](_0x2e09d3['now'](),_0xd4c0b9),'host':_0x53ea92,'uwmk':!!(_0x1c880f[_0x385364(0x878)+'WebMo'+_0x385364(0x739)]&&_0x429174['Unity'+_0x385364(0x3b4)+'dkit'][_0x385364(0xb86)+'me']),'il2CppContext':![],'arm':_0x1e3c1d,'hooksTotal':_0x37c6ac[_0x385364(0x687)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x1f7aa9['phTid'](_0x1f51bc,_0x141775&&_0x43fd4f['messa'+'ge']||_0x544dd1)};else{if(typeof WebAssembly===_0x385364(0x1f5)+'ined')return;var _0x49d691=['insta'+'ntiat'+'e',_0x308226[_0x385364(0x601)]];for(var _0x2e1778=-0x4*-0x46d+0xe3f+0x1*-0x1ff3;_0x2e1778<_0x49d691['lengt'+'h'];_0x2e1778++){(function(_0x2974e5){var _0x5bda02=_0x385364,_0x1408f7=(_0x5bda02(0x470)+'|4|0|'+'2')[_0x5bda02(0x3c2)]('|'),_0x3cf99f=-0x11c*0x1+-0x1*0xfb3+-0xd*-0x14b;while(!![]){switch(_0x1408f7[_0x3cf99f++]){case'0':try{Object[_0x5bda02(0xc6b)+_0x5bda02(0x3c6)+_0x5bda02(0xaac)](_0x29f84e,'name',{'value':_0x2ccfc9[_0x5bda02(0xb7a)],'configurable':!![]});}catch(_0xb5e447){}continue;case'1':if(typeof _0x2ccfc9!=='funct'+'ion'||_0x2ccfc9[_0x5bda02(0x94d)+'uraMe'+'moryT'+'ap'])return;continue;case'2':WebAssembly[_0x2974e5]=_0x29f84e;continue;case'3':var _0x2ccfc9=WebAssembly[_0x2974e5];continue;case'4':_0x29f84e[_0x5bda02(0x94d)+_0x5bda02(0x1ef)+_0x5bda02(0xb4d)+'ap']=!![];continue;case'5':var _0x29f84e=function(){var _0x5363e7=_0x5bda02,_0x2832f5=_0x2ccfc9[_0x5363e7(0x976)](this,arguments);try{if(_0x2832f5&&typeof _0x2832f5[_0x5363e7(0xa96)]==='funct'+_0x5363e7(0x2b6))_0x2832f5['then'](_0x3843d5,function(){});else _0x3843d5(_0x2832f5);}catch(_0x17669a){}return _0x2832f5;};continue;}break;}}(_0x49d691[_0x2e1778]));}}}catch(_0x3bbd65){}else return![];}var _0x4e470b=null,_0x4ee0ea=null,_0x44e9a2={},_0x420614=[],_0x272009=[],_0x145df1=[{'type':_0xc5af74(0x262)+_0xc5af74(0x9b9)+'ler','keep':!![]},{'type':_0x308226[_0xc5af74(0x2b9)],'keep':!![]},{'type':_0xc5af74(0xc6d)+'nMana'+_0xc5af74(0x557),'keep':![]},{'type':_0xc5af74(0x66d)+'ameMa'+_0xc5af74(0x7aa),'keep':!![]},{'type':_0x308226[_0xc5af74(0x4a9)],'keep':!![]},{'type':_0x308226['umiDZ'],'keep':!![],'many':!![]},{'type':'Netwo'+_0xc5af74(0x8f6)+'yerAn'+'imati'+'ons','keep':!![],'many':!![]},{'type':_0xc5af74(0xbe7)+'otrol'+'ler','keep':!![],'many':!![]},{'type':'Enemy'+'Bot','keep':!![],'many':!![]}],_0x36df06=[_0xc5af74(0x764)+_0xc5af74(0xc20)+_0xc5af74(0x389)+_0xc5af74(0x774),_0x308226[_0xc5af74(0x440)],'ch.sy'+_0xc5af74(0x775)+_0xc5af74(0xc3e)+_0xc5af74(0x342)+'ll',_0x308226[_0xc5af74(0xb3e)],'Scivo'+_0xc5af74(0xc26)+'racte'+_0xc5af74(0x7b2)+_0xc5af74(0xc7f)+_0xc5af74(0x4d5),_0xc5af74(0x37b)+'erate'+'d'];(function _0x516e96(){var _0x1fdb3c=_0xc5af74;try{if(_0x308226[_0x1fdb3c(0x6e0)](_0x308226[_0x1fdb3c(0x40e)],_0x1fdb3c(0xb78))){var _0x58c12e={'VmdpO':function(_0x4ffa72,_0x2380cf){return _0x308226['kRUkc'](_0x4ffa72,_0x2380cf);}},_0x4eca88=new _0x156669(_0x308226[_0x1fdb3c(0xbb7)]);_0x4eca88['onmes'+_0x1fdb3c(0x996)]=function(_0x384a1b){var _0x2437e1=_0x1fdb3c,_0x2bad5e=_0x384a1b['data'];if(_0x2bad5e&&_0x58c12e[_0x2437e1(0x827)](_0x2bad5e['__sak'+_0x2437e1(0x814)],_0x5e930e)&&_0x2bad5e['kind']===_0x2437e1(0xb20))_0x3cdb86(_0x2bad5e['cmd'],_0x2bad5e[_0x2437e1(0xb25)]);};}else{var _0x1881fe=window[_0x1fdb3c(0x878)+_0x1fdb3c(0x3b4)+_0x1fdb3c(0x739)]&&window[_0x1fdb3c(0x878)+_0x1fdb3c(0x3b4)+_0x1fdb3c(0x739)][_0x1fdb3c(0xb86)+'me'];if(!_0x1881fe||typeof _0x1881fe[_0x1fdb3c(0x9a3)+_0x1fdb3c(0x4d7)+'in']!==_0x1fdb3c(0x608)+_0x1fdb3c(0x2b6)){_0x491cad['error']=_0x308226[_0x1fdb3c(0xc7a)];return;}_0x491cad['attem'+_0x1fdb3c(0xc85)]=!![],_0x4ee0ea=_0x1881fe['creat'+'ePlug'+'in']({'name':_0x308226[_0x1fdb3c(0x4d3)],'version':_0x48e762,'referencedAssemblies':_0x36df06[_0x1fdb3c(0x750)]()}),_0x491cad['ok']=!![];try{var _0x235409=window['Unity'+_0x1fdb3c(0x3b4)+'dkit'][_0x1fdb3c(0xb86)+'me'];_0x235409[_0x1fdb3c(0x94d)+'uraTa'+'g']=_0x48e762+':'+Math[_0x1fdb3c(0x97c)+'m']()[_0x1fdb3c(0x8d4)+'ing'](-0x66*0x2e+0x183f+-0x5c7)[_0x1fdb3c(0x750)](0x2*0x1219+-0x11ef+-0x1241*0x1,0x19*-0x13+0xe82+-0xc9d*0x1),_0x31d911=_0x235409[_0x1fdb3c(0x94d)+_0x1fdb3c(0x35d)+'g'];}catch(_0x557cff){}_0x1b2197(),_0x491cad['hooks'+'Regis'+'tered']=_0x420614['lengt'+'h'],_0x308226['eerla'](_0x316c77),_0x491cad[_0x1fdb3c(0x4ac)+_0x1fdb3c(0x8ba)]=!![];}}catch(_0x55ef27){'XWRhu'===_0x308226['jHIRw']?_0x491cad['error']=String(_0x55ef27&&_0x55ef27[_0x1fdb3c(0x2ff)+'ge']||_0x55ef27):_0x258b5e[_0x1fdb3c(0x3f8)](_0x308226['lAwyU'](_0x51845d['type'],':\x20')+_0x16fcbf(_0x4e4492&&_0x4e72a8['messa'+'ge']||_0x5a9b9b)[_0x1fdb3c(0x750)](0x64*0x25+-0x203f+0x38f*0x5,-0x17ec+-0x2066+-0x2*-0x1c79));}}());var _0x258504=new Float32Array(-0x1*0xbd7+-0x1136+0x1d0e),_0x41fc1f=new Int32Array(_0x258504['buffe'+'r']);function _0xafd6a6(_0x3c155d){return _0x258504[-0x8*-0x128+0x7a2+-0x10e2]=_0x3c155d,_0x41fc1f[0x960+0x1*0x1eb6+0x1*-0x2816];}function _0x13675c(_0x3783d2){return _0x41fc1f[-0xbb*0x5+-0x1cf+0x576]=_0x3783d2|-0x93*0x14+0x565*-0x2+-0x1*-0x1646,_0x258504[0x451*-0x1+0xc*-0x2cf+0x2605];}var _0x2f8d40={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x1fa17d(){var _0x580c64=_0xc5af74,_0x95bc9d={'orGsv':_0x580c64(0x503)+'e','yJtmG':function(_0x34d9f3,_0x80876){return _0x34d9f3+_0x80876;}};if(_0x580c64(0xab4)===_0x308226['AwTss']){var _0x2e03d4=_0x241a23['v'];if(_0x308226[_0x580c64(0x975)](typeof _0x2e03d4,_0x308226[_0x580c64(0x874)])||!_0x521b33(_0x2e03d4))return![];if(_0x450e6d['k']===_0x580c64(0x7b9))return _0x308226[_0x580c64(0xa9d)](_0x2e03d4,0x1da8+0x1*0x1fe1+-0x3d89)||_0x308226['iOAji'](_0x2e03d4,-0x243+-0x1e80+0x20c4);var _0xdc243e=_0x7dd07e['fake'];if(_0x308226['ELnof'](typeof _0xdc243e,_0x308226['DzDGX'])||!_0x2eef26(_0xdc243e))return!![];if(_0x27223a[_0x580c64(0xbe2)]===-0x290+0x131f*-0x2+0x28cf*0x1)return _0x308226[_0x580c64(0x6b8)](_0x2bb3ca['abs'](_0x308226[_0x580c64(0xaef)](_0x2e03d4,_0xdc243e)),_0x4bb175[_0x580c64(0x571)](-0x1f2d+0x1*0x2007+-0xd9,_0x5b84c6[_0x580c64(0x2fd)](_0xdc243e)*(-0x221d+0x971+-0x18ac*-0x1+0.6)));return _0x25a4ca['abs'](_0x2e03d4)<-0x3c367932+-0x3afc5ed+0x7b81091f;}else{try{if(_0x4ee0ea&&_0x4ee0ea[_0x580c64(0x378)+'ime']){var _0x1f2e32=_0x4ee0ea[_0x580c64(0x378)+'ime'];if(typeof _0x1f2e32[_0x580c64(0x84f)+_0x580c64(0x92e)+'e']===_0x308226[_0x580c64(0xac5)]){var _0x10196a=_0x1f2e32[_0x580c64(0x84f)+_0x580c64(0x92e)+'e']();if(_0x10196a)return _0x2f8d40['sourc'+'e']=_0x308226['xTxtg'],_0x10196a;}if(_0x1f2e32['_game']){if(_0x308226[_0x580c64(0x757)]('vuNig',_0x580c64(0x377))){var _0x23192f=_0x5c485e[_0x580c64(0x32e)+_0x580c64(0x4b8)+_0x580c64(0xb68)+'l'](_0x95bc9d[_0x580c64(0x20b)]);for(var _0x1f6aef=0x3f2+0x1*-0xdcf+0x9dd;_0x1f6aef<_0x23192f[_0x580c64(0x687)+'h'];_0x1f6aef++){try{if(_0x23192f[_0x1f6aef][_0x580c64(0xa75)+_0x580c64(0x399)+_0x580c64(0x4e1)])_0x23192f[_0x1f6aef][_0x580c64(0xa75)+_0x580c64(0x399)+'dow']['postM'+'essag'+'e'](_0x14d151,'*');}catch(_0x471bd6){}}}else return _0x2f8d40[_0x580c64(0x997)+'e']=_0x580c64(0x962)+'n._ru'+_0x580c64(0x556)+'._gam'+'e',_0x1f2e32[_0x580c64(0xa33)];}}}catch(_0x5e160a){}try{var _0x4a4e42=window[_0x580c64(0x878)+_0x580c64(0x3b4)+_0x580c64(0x739)]&&window['Unity'+_0x580c64(0x3b4)+'dkit'][_0x580c64(0xb86)+'me'];if(_0x4a4e42&&typeof _0x4a4e42[_0x580c64(0x84f)+_0x580c64(0x92e)+'e']==='funct'+_0x580c64(0x2b6)){if(_0x308226[_0x580c64(0xa9d)](_0x308226[_0x580c64(0x481)],'CgDEa'))_0x2bf012[_0x580c64(0x74c)][_0x580c64(0x29d)]=_0x308226[_0x580c64(0x895)](_0xf6f4a1[_0x580c64(0x54d)]['x'],'px'),_0x405f91[_0x580c64(0x74c)][_0x580c64(0x613)]=_0x22af3d[_0x580c64(0x54d)]['y']+'px',_0x51acab[_0x580c64(0x74c)][_0x580c64(0x99d)]=_0x580c64(0xa29),_0x3dddad['style']['botto'+'m']=_0x580c64(0xa29);else{var _0x4aba52=_0x4a4e42[_0x580c64(0x84f)+_0x580c64(0x92e)+'e']();if(_0x4aba52)return _0x2f8d40[_0x580c64(0x997)+'e']=_0x308226['oNSRv'],_0x4aba52;}}if(_0x4a4e42&&_0x4a4e42[_0x580c64(0xa33)])return _0x2f8d40[_0x580c64(0x997)+'e']=_0x308226['EnXPR'],_0x4a4e42;}catch(_0x2beb72){}try{var _0x23affc=window[_0x580c64(0xa41)+_0x580c64(0x61b)+_0x580c64(0xbc1)]||window['unity'+'Game']||window['game'];if(_0x23affc)return _0x2f8d40[_0x580c64(0x997)+'e']=_0x580c64(0xa3d)+'w\x20glo'+_0x580c64(0x30b),_0x23affc;}catch(_0x5cee82){}try{if(typeof game!=='undef'+_0x580c64(0x4db)&&game){if(_0x308226['oMvAw']==='CsQqb'){_0x1e43e3['preve'+_0x580c64(0x97f)+_0x580c64(0xb2f)](),_0x17c74b(_0x5890dd['on'],_0x95bc9d['yJtmG'](_0xd8380a[_0x580c64(0x922)+'r'],0x5*0xdb+-0x1834+0x13ed*0x1+0.5));return;}else return _0x2f8d40[_0x580c64(0x997)+'e']='bare\x20'+_0x580c64(0x402)+'bindi'+'ng',game;}}catch(_0x17a133){}try{var _0x15ba8e=Object[_0x580c64(0x33f)](window);for(var _0x3e99a3=0x23f0+-0x78c+-0x1c64;_0x308226[_0x580c64(0x235)](_0x3e99a3,_0x15ba8e[_0x580c64(0x687)+'h'])&&_0x3e99a3<-0x1*0x26ce+-0x135e+0xf21*0x4;_0x3e99a3++){if(_0x580c64(0xb5f)!==_0x308226[_0x580c64(0x809)]){var _0x48fe2f=window[_0x15ba8e[_0x3e99a3]];if(_0x48fe2f&&_0x308226[_0x580c64(0x1da)](typeof _0x48fe2f,_0x308226['SeVJG'])&&_0x48fe2f[_0x580c64(0x8e5)+'e']&&_0x48fe2f['Modul'+'e']['HEAPU'+'8']&&_0x48fe2f[_0x580c64(0x8e5)+'e'][_0x580c64(0x559)+'8'][_0x580c64(0x267)+'r'])return _0x2f8d40[_0x580c64(0x997)+'e']=_0x308226[_0x580c64(0x8f4)](_0x308226[_0x580c64(0x8f4)](_0x580c64(0xa3d)+'w.',_0x15ba8e[_0x3e99a3]),'.Modu'+'le'),_0x48fe2f;}else{var _0x2c2a73=_0x308226['QPgTi'][_0x580c64(0x3c2)]('|'),_0x5347af=0x1*0x1865+0x1*-0x22df+-0x12*-0x95;while(!![]){switch(_0x2c2a73[_0x5347af++]){case'0':_0x2d4c0a=_0x1330c6;continue;case'1':_0x201041['log'](_0x580c64(0x437)+_0x580c64(0x6e9)+_0x580c64(0x53c)+_0x580c64(0x593)+'\x20repo'+'rt',_0x580c64(0x62e)+':'+_0x57feab+_0x308226[_0x580c64(0xa51)],_0x2d89ed);continue;case'2':_0x4e9ed1['log'](_0x4bc72e+'\x0a'+_0x329f33[_0x580c64(0x412)+'gify'](_0x509b46,null,-0x2*0x5b8+-0xf73+0x6b9*0x4)+'\x0a'+_0xe96599);continue;case'3':_0x308226['yRUwg'](_0x161e99,_0x308226['FzKvt'],{'report':_0x1dfbc8});continue;case'4':try{_0x308226[_0x580c64(0xa2c)](_0x610e4b,_0x895cbc);}catch(_0x321ec0){}continue;}break;}}}}catch(_0x19e5e3){}return _0x2f8d40[_0x580c64(0x997)+'e']=null,null;}}function _0x790d2a(){var _0x262b00=_0xc5af74;try{if(_0x184ee1&&_0x184ee1[_0x262b00(0x267)+'r']&&_0x184ee1[_0x262b00(0x267)+'r'][_0x262b00(0xb28)+_0x262b00(0xa2b)])return _0x2f8d40[_0x262b00(0x997)+'e']=_0x2f8d40['sourc'+'e']||_0x262b00(0x611)+'ntiat'+'e().e'+_0x262b00(0x4d9)+_0x262b00(0x609)+'ory',new Uint8Array(_0x184ee1[_0x262b00(0x267)+'r']);}catch(_0x31f51e){}try{var _0x3ca9e5=_0x308226['wcrJO'](_0x1fa17d);if(_0x3ca9e5&&_0x3ca9e5['Modul'+'e']&&_0x3ca9e5[_0x262b00(0x8e5)+'e']['HEAPU'+'8']&&_0x3ca9e5['Modul'+'e'][_0x262b00(0x559)+'8'][_0x262b00(0x267)+'r'])return _0x3ca9e5[_0x262b00(0x8e5)+'e'][_0x262b00(0x559)+'8'];}catch(_0x290d0e){}return null;}function _0x44e6cc(){var _0x5967cc=_0xc5af74,_0x5254d3=_0x790d2a();if(!_0x5254d3)return null;try{return new DataView(_0x5254d3[_0x5967cc(0x267)+'r'],_0x5254d3[_0x5967cc(0x950)+_0x5967cc(0x650)],_0x5254d3[_0x5967cc(0xb28)+'ength']);}catch(_0x3b44a9){return _0x308226[_0x5967cc(0x7f0)]!=='NDAUP'?null:(_0x797d46[_0x5967cc(0x997)+'e']=_0x308226[_0x5967cc(0x74e)],_0x6c49b8);}}function _0x5897db(_0x42b333,_0x23c051){var _0x5f5a9a=_0xc5af74,_0x3b2648={'eGMTf':function(_0x3b8727,_0x4065c9){return _0x3b8727(_0x4065c9);}},_0x2b0d60=_0x308226['JXTNm'](_0x44e6cc);if(!_0x2b0d60)return _0x2f8d40[_0x5f5a9a(0x7de)+'d']++,_0x2f8d40[_0x5f5a9a(0xbfe)+'rror']=_0x2f8d40[_0x5f5a9a(0xbfe)+_0x5f5a9a(0xa15)]||'no\x20HE'+_0x5f5a9a(0xa03)+_0x5f5a9a(0x65d)+_0x5f5a9a(0x193)+_0x5f5a9a(0x9cc)+_0x5f5a9a(0x4e5)+'\x20reac'+_0x5f5a9a(0x9f0)+_0x5f5a9a(0x4b4)+_0x5f5a9a(0xb86)+_0x5f5a9a(0x849)+'solve'+_0x5f5a9a(0x411)+_0x5f5a9a(0x3d4)+_0x5f5a9a(0x776)+_0x5f5a9a(0x18a)+_0x5f5a9a(0xc25)+'al',undefined;if(_0x308226['dhCgA'](_0x42b333,0x6*-0x658+-0x200c+0x7*0xa04)||_0x308226[_0x5f5a9a(0x69d)](_0x42b333+(-0xdf6+0x1*0x1e23+0x1*-0x1029),_0x2b0d60['byteL'+'ength']))return _0x2f8d40[_0x5f5a9a(0x7de)+'d']++,_0x2f8d40['lastE'+_0x5f5a9a(0xa15)]=_0x2f8d40['lastE'+'rror']||_0x308226['MfACc'](_0x5f5a9a(0x9ab)+_0x5f5a9a(0x33a)+_0x42b333['toStr'+'ing'](-0x818*0x2+-0x139+-0x5d3*-0x3),_0x308226[_0x5f5a9a(0x89d)])+_0x2b0d60['byteL'+'ength']['toStr'+'ing'](-0xc1*0x10+0x95*-0x2b+-0x1*-0x2527),undefined;try{if(_0x308226['HDPGd'](_0x308226[_0x5f5a9a(0xa4a)],_0x308226[_0x5f5a9a(0xa4a)])){_0x2f8d40['ok']++;switch(_0x23c051){case'u8':return _0x2b0d60[_0x5f5a9a(0xac3)+_0x5f5a9a(0x896)](_0x42b333);case'i8':return _0x2b0d60[_0x5f5a9a(0x81d)+'t8'](_0x42b333);case _0x308226[_0x5f5a9a(0x77d)]:return _0x2b0d60[_0x5f5a9a(0x81d)+'t16'](_0x42b333,!![]);case'u16':return _0x2b0d60[_0x5f5a9a(0xac3)+_0x5f5a9a(0x46a)](_0x42b333,!![]);case _0x308226['kQHog']:return _0x2b0d60[_0x5f5a9a(0x81d)+_0x5f5a9a(0xa4b)](_0x42b333,!![]);case _0x5f5a9a(0xb2e):return _0x2b0d60['getUi'+_0x5f5a9a(0x7b4)](_0x42b333,!![]);case _0x308226[_0x5f5a9a(0x9b8)]:return _0x2b0d60[_0x5f5a9a(0x7d7)+_0x5f5a9a(0x321)](_0x42b333,!![]);case _0x308226[_0x5f5a9a(0x3d8)]:return _0x2b0d60['getFl'+_0x5f5a9a(0x7f6)](_0x42b333,!![]);case'v2':case'v3':case'v4':return _0x2b0d60['getFl'+'oat32'](_0x42b333,!![]);default:return _0x2b0d60[_0x5f5a9a(0x81d)+_0x5f5a9a(0xa4b)](_0x42b333,!![]);}}else return _0x574e91[_0x5f5a9a(0x7de)+'d']++,_0x5cb964[_0x5f5a9a(0xbfe)+'rror']=_0x5e3eca[_0x5f5a9a(0xbfe)+_0x5f5a9a(0xa15)]||_0x3b2648['eGMTf'](_0x380900,_0x2818b2&&_0xdd6db3['messa'+'ge']||_0x48d0cf)[_0x5f5a9a(0x750)](-0x26d0*0x1+-0x1819+-0xc95*-0x5,-0x4c3*-0x7+0x367+-0x2444),_0xfc7e8;}catch(_0x8764f3){return _0x2f8d40['faile'+'d']++,_0x2f8d40['lastE'+'rror']=_0x2f8d40[_0x5f5a9a(0xbfe)+_0x5f5a9a(0xa15)]||_0x308226[_0x5f5a9a(0x404)](String,_0x8764f3&&_0x8764f3[_0x5f5a9a(0x2ff)+'ge']||_0x8764f3)[_0x5f5a9a(0x750)](0x24b1+-0x2552+0xa1,-0x8f2+0x506*0x4+-0xaae),undefined;}}function _0x23db62(_0x11bf5e,_0x47a8fa,_0x3d6568){var _0x6e01c3=_0xc5af74,_0xe17704=_0x44e6cc();if(!_0xe17704||_0x308226[_0x6e01c3(0x638)](_0x11bf5e,0x12c0+-0x155e+0x86*0x5)||_0x11bf5e+(0x873+0x12e5*-0x1+0xa76)>_0xe17704[_0x6e01c3(0xb28)+_0x6e01c3(0xa2b)])return![];try{switch(_0x47a8fa){case'u8':case'i8':_0xe17704['setUi'+_0x6e01c3(0x896)](_0x11bf5e,_0x3d6568&-0x1354*0x1+-0xc*0x1bb+-0x9d*-0x43);break;case'i16':case _0x6e01c3(0x7b6):_0xe17704[_0x6e01c3(0x7b3)+_0x6e01c3(0x452)](_0x11bf5e,_0x3d6568|0x551*0x7+0xb8e+-0x30c5,!![]);break;case'i32':case _0x6e01c3(0xb2e):_0xe17704[_0x6e01c3(0x7b3)+_0x6e01c3(0xa4b)](_0x11bf5e,_0x308226[_0x6e01c3(0x558)](_0x3d6568,0x4*0x1e+-0xaf7*-0x2+0x5e*-0x3d),!![]);break;case _0x6e01c3(0xc17):_0xe17704[_0x6e01c3(0x19e)+'oat32'](_0x11bf5e,_0x3d6568,!![]);break;default:_0xe17704['setIn'+'t32'](_0x11bf5e,_0x3d6568|0x13e1+-0x1b7e+-0x79d*-0x1,!![]);}return!![];}catch(_0x1287ec){return'AFoIc'!=='YHOpb'?![]:![];}}var _0x1e45bc={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':_0xc5af74(0xc35)},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':_0x308226['kQHog']},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0x1280c3(_0x3b88a7){var _0x2f5d61=_0xc5af74;if(_0x308226[_0x2f5d61(0x5c5)](_0x2f5d61(0x259),_0x2f5d61(0x259))){var _0x4a11ca='';for(var _0x4cae87=0x4e1*0x2+0x1*0x523+0x1*-0xee5;_0x308226[_0x2f5d61(0x67c)](_0x4cae87,_0x3b88a7['lengt'+'h']);_0x4cae87++){var _0x3a44d4=_0x3b88a7[_0x4cae87][_0x2f5d61(0x8d4)+_0x2f5d61(0x1aa)](0x1454*0x1+0x1633+0x2a77*-0x1);_0x4a11ca+=(_0x308226['gTzkQ'](_0x3a44d4['lengt'+'h'],0x2e7+-0x70a+-0x425*-0x1)?'0':'')+_0x3a44d4;}return _0x4a11ca;}else _0xcb640d['style'][_0x2f5d61(0x913)+'ty']=_0x43f633[_0x2f5d61(0x373)]?'1':'.5';}function _0x5af420(_0x3ca7dd,_0x498d60,_0x531ad8){var _0x178f70=_0xc5af74,_0x56cffa=_0x308226[_0x178f70(0x3e0)](_0x44e6cc);if(!_0x56cffa)return _0x2f8d40['faile'+'d']++,_0x2f8d40[_0x178f70(0xbfe)+_0x178f70(0xa15)]=_0x2f8d40['lastE'+_0x178f70(0xa15)]||_0x178f70(0x6d7)+_0x178f70(0xa03)+'-\x20Uni'+'ty\x20in'+_0x178f70(0x9cc)+_0x178f70(0x4e5)+_0x178f70(0x5ad)+'hable'+_0x178f70(0x4b4)+_0x178f70(0xb86)+'me.re'+'solve'+_0x178f70(0x411)+_0x178f70(0x3d4)+_0x178f70(0x776)+_0x178f70(0x18a)+_0x178f70(0xc25)+'al',null;if(_0x498d60<0x2*0x64d+-0x1094+0x3fa||_0x308226['FNmGI'](_0x498d60,_0x531ad8)>_0x56cffa[_0x178f70(0xb28)+_0x178f70(0xa2b)])return _0x2f8d40[_0x178f70(0x7de)+'d']++,_0x2f8d40[_0x178f70(0xbfe)+_0x178f70(0xa15)]=_0x2f8d40[_0x178f70(0xbfe)+_0x178f70(0xa15)]||_0x178f70(0x9ab)+'ss\x200x'+_0x308226['TlCMm'](_0x3ca7dd,_0x498d60)[_0x178f70(0x8d4)+_0x178f70(0x1aa)](0x2*-0x751+-0x25ef+0x34a1)+(_0x178f70(0x62a)+_0x178f70(0x73a)+'\x20end\x20'+'0x')+_0x56cffa[_0x178f70(0xb28)+_0x178f70(0xa2b)][_0x178f70(0x8d4)+'ing'](0x137e+0x41+-0x13af),null;try{if(_0x308226['kbAYf']==='MUwwZ'){var _0x48aab9=new Uint8Array(_0x531ad8);for(var _0x13f1d4=-0x8*0x55+0xde4+-0xb3c;_0x13f1d4<_0x531ad8;_0x13f1d4++)_0x48aab9[_0x13f1d4]=_0x56cffa[_0x178f70(0xac3)+'nt8'](_0x308226[_0x178f70(0xa28)](_0x3ca7dd+_0x498d60,_0x13f1d4));return _0x2f8d40['ok']++,_0x48aab9;}else{var _0x3be4a2=_0x435c71();if(!_0x3be4a2)return null;try{return new _0x447590(_0x3be4a2[_0x178f70(0x267)+'r'],_0x3be4a2[_0x178f70(0x950)+'ffset'],_0x3be4a2['byteL'+'ength']);}catch(_0x43b7c6){return null;}}}catch(_0x317771){return _0x2f8d40['faile'+'d']++,_0x2f8d40[_0x178f70(0xbfe)+_0x178f70(0xa15)]=_0x2f8d40[_0x178f70(0xbfe)+'rror']||_0x308226[_0x178f70(0x387)](String,_0x317771&&_0x317771[_0x178f70(0x2ff)+'ge']||_0x317771)[_0x178f70(0x750)](0x1f9b+0x1ad*-0xc+-0x9*0x147,0x53a*-0x3+0x139*-0xe+0x2144),null;}}function _0x681eed(_0x1ac353,_0x3bbfb4,_0x12ebde){var _0x4fb356=_0xc5af74,_0x5e1ee8=(_0x4fb356(0x8b5)+_0x4fb356(0x410)+_0x4fb356(0x9fe)+'|1|3')[_0x4fb356(0x3c2)]('|'),_0x5276b7=-0x1c70+-0x1*0x17e3+-0x39*-0xeb;while(!![]){switch(_0x5e1ee8[_0x5276b7++]){case'0':var _0x274cf2=_0x1e45bc[_0x12ebde];continue;case'1':var _0x23523d=_0x3766ed['getUi'+_0x4fb356(0x896)](_0x274cf2[_0x4fb356(0x3bf)+'e'])&-0xe10+0x2336+-0x1525*0x1;continue;case'2':var _0x27a2a9=_0x308226[_0x4fb356(0x811)](_0x3766ed[_0x4fb356(0xac3)+_0x4fb356(0x896)](_0x274cf2[_0x4fb356(0x71d)+'d']),-0x1126+0x21d7+-0x10b0);continue;case'3':return{'keyAtOffset0':_0x2c9634,'hidden':_0x430ced,'inited':_0x27a2a9,'fake':_0x4d64e3,'act':_0x23523d,'hex':_0x1280c3(_0x33977a),'alt':_0x308226[_0x4fb356(0x1da)](_0x12ebde,_0x308226['TLvUl'])?_0x430ced^(_0x4d64e3|-0x8d7+0xf9*-0x6+-0xead*-0x1):null};case'4':var _0x430ced=_0x3766ed['getIn'+_0x4fb356(0xa4b)](_0x274cf2['hidde'+'n'],!![]);continue;case'5':var _0x2c9634=_0x3766ed['getIn'+_0x4fb356(0xa4b)](_0x274cf2[_0x4fb356(0x700)],!![]);continue;case'6':var _0x3766ed=new DataView(_0x33977a['buffe'+'r'],_0x33977a[_0x4fb356(0x950)+_0x4fb356(0x650)],_0x33977a[_0x4fb356(0xb28)+'ength']);continue;case'7':var _0x33977a=_0x308226[_0x4fb356(0x850)](_0x5af420,_0x1ac353,_0x3bbfb4,_0x274cf2[_0x4fb356(0x703)]);continue;case'8':if(!_0x33977a)return null;continue;case'9':var _0x4d64e3=_0x12ebde==='obfF'?_0x3766ed[_0x4fb356(0x7d7)+_0x4fb356(0x321)](_0x274cf2[_0x4fb356(0x260)],!![]):_0x308226['lOFMk'](_0x12ebde,_0x308226['TLvUl'])?_0x3766ed['getIn'+_0x4fb356(0xa4b)](_0x274cf2[_0x4fb356(0x260)],!![]):_0x3766ed[_0x4fb356(0xac3)+_0x4fb356(0x896)](_0x274cf2['fake']);continue;}break;}}function _0x2c3828(_0x316946,_0x23bc90,_0x41cfec){var _0x47d4bf=_0xc5af74;if(_0x308226[_0x47d4bf(0xbc0)](_0x308226[_0x47d4bf(0xa62)],_0x47d4bf(0x1a3))){if(_0x316946===_0x308226['fJasb'])return _0x13675c(_0x23bc90^_0x41cfec);if(_0x316946===_0x308226['TLvUl'])return _0x308226[_0x47d4bf(0xbe5)](_0x23bc90,_0x41cfec)|-0x170+-0x1176*-0x2+-0x2*0x10be;return _0x308226['BlXNS'](_0x308226[_0x47d4bf(0xbe5)](_0x23bc90,_0x41cfec),-0x160a+0x18ae+-0x1*0x1a5)!==0x1f46+0x23c0+-0x175*0x2e?0xc3a+0x1eea+0x1*-0x2b23:-0x1f*-0x135+-0x16b6+0xeb5*-0x1;}else{var _0x59154c=-0x915*0x1+-0x1248+-0x1d3*-0xf;for(var _0x3091ca=-0x1a42+-0x477+0x1eb9;_0x3091ca<_0x33c768[_0x47d4bf(0x687)+'h'];_0x3091ca++){if(_0x56fba2[_0x3091ca]['hook']&&_0x5a05ed[_0x3091ca][_0x47d4bf(0x30c)][_0x47d4bf(0x727)+'ed'])_0x59154c++;}return _0x59154c;}}function _0x44ce1e(_0x4b120d,_0x2f6bce,_0x320a75){var _0x169a2e=_0xc5af74,_0x77a674=_0x1e45bc[_0x320a75];if(!_0x77a674)return null;var _0x3fdabb=_0x308226['xqHND'](_0x5897db,_0x4b120d+_0x2f6bce+_0x77a674['key'],'u8'),_0x3a5ec2=_0x5897db(_0x308226[_0x169a2e(0x833)](_0x4b120d,_0x2f6bce)+_0x77a674['hidde'+'n'],_0x169a2e(0xc35)),_0x2ae675=_0x5897db(_0x308226[_0x169a2e(0xb75)](_0x308226[_0x169a2e(0x6ae)](_0x4b120d,_0x2f6bce),_0x77a674[_0x169a2e(0x71d)+'d']),'u8'),_0x17130d=_0x5897db(_0x308226[_0x169a2e(0x6d3)](_0x308226[_0x169a2e(0x605)](_0x4b120d,_0x2f6bce),_0x77a674['fake']),_0x320a75==='obfF'?_0x169a2e(0xc17):_0x320a75===_0x308226['TLvUl']?_0x169a2e(0xc35):'u8'),_0x57d9c6=_0x5897db(_0x308226['OnipX'](_0x308226['NucKS'](_0x4b120d,_0x2f6bce),_0x77a674[_0x169a2e(0x3bf)+'e']),'u8');if(_0x308226[_0x169a2e(0xbc0)](_0x3fdabb,undefined)||_0x308226['ShpFm'](_0x3a5ec2,undefined)||_0x308226['FzteE'](_0x17130d,undefined)||_0x57d9c6===undefined)return null;_0x3fdabb&=0x6*0x15c+0x24fb*0x1+-0x2c24,_0x3a5ec2|=0x22e3+-0x370+-0x61*0x53,_0x2ae675=_0x308226['YCuzE'](_0x2ae675,0x15d9+0x2a4*0x1+-0x187d)&-0xe95*-0x1+-0x308+-0x2e3*0x4,_0x57d9c6&=0x1*-0x3e2+-0x2*-0x2c5+-0x1a7;var _0x2fa1ab;if(_0x308226[_0x169a2e(0x5c5)](_0x320a75,'obfF'))_0x2fa1ab=_0x308226[_0x169a2e(0x680)](_0x13675c,_0x3a5ec2^_0x3fdabb);else{if(_0x320a75===_0x308226['TLvUl'])_0x2fa1ab=_0x3a5ec2^_0x3fdabb|-0xf*-0x117+0x4b+0x58c*-0x3;else _0x2fa1ab=_0x308226[_0x169a2e(0x54b)](_0x308226['URcfb'](_0x3a5ec2,_0x3fdabb)&-0x4fa+0xd3*-0x17+0x18ee,-0x1c1f+0x1*-0x1b2c+-0x374b*-0x1)?0x1097*0x2+-0x1*0x1972+-0x7bb*0x1:-0x203f+0xdf*-0xb+-0x14ea*-0x2;}return{'real':_0x2fa1ab,'fake':_0x17130d,'act':_0x57d9c6,'init':_0x2ae675,'key':_0x3fdabb,'hidden':_0x3a5ec2};}function _0x23c246(_0x195d54,_0x2e73ad,_0x270591,_0x10a324){var _0x553429=_0xc5af74,_0x10d296=_0x308226['UEvBl'][_0x553429(0x3c2)]('|'),_0x34103a=0x25*-0x92+0x1*-0xee9+0x2403*0x1;while(!![]){switch(_0x10d296[_0x34103a++]){case'0':var _0x46bb35;continue;case'1':var _0x3d182e=new DataView(_0x585c0b[_0x553429(0x267)+'r'],_0x585c0b['byteO'+_0x553429(0x650)],_0x585c0b['byteL'+_0x553429(0xa2b)]);continue;case'2':if(_0x270591===_0x553429(0x783))_0x46bb35=_0xafd6a6(_0x10a324);else{if(_0x270591===_0x553429(0x494))_0x46bb35=_0x308226['YbXCZ'](_0x10a324,0x11f+0x12e5+-0x1404);else _0x46bb35=_0x308226['BlXNS'](_0x10a324?0x2443*-0x1+-0x29b+0x1f*0x141:0x3b*0xa3+0x1242+-0x1f*0x1cd,0x2543+-0x1e3d+-0x607);}continue;case'3':return _0x308226[_0x553429(0x81f)](_0x23db62,_0x308226[_0x553429(0x52f)](_0x195d54+_0x2e73ad,_0x2f8f93['hidde'+'n']),_0x308226[_0x553429(0x1e2)],_0x46bb35^_0x4120c5)&&_0x23db62(_0x308226[_0x553429(0x290)](_0x195d54+_0x2e73ad,_0x2f8f93[_0x553429(0x260)]),_0x270591===_0x308226[_0x553429(0x8f8)]?_0x308226['ibDfE']:_0x270591==='obfI'?_0x553429(0xc35):'u8',_0x308226[_0x553429(0x5b6)](_0x270591,_0x308226[_0x553429(0x8f8)])?_0x10a324:_0x270591==='obfI'?_0x10a324|-0x1dfd+-0x2*0xe52+-0x3*-0x138b:_0x10a324?-0x6f*-0x27+0x1419+-0x2501:0x4ad+-0x1ce3+-0x2*-0xc1b)&&_0x23db62(_0x308226[_0x553429(0xba0)](_0x195d54,_0x2e73ad)+_0x2f8f93['activ'+'e'],'u8',0x1333+-0x1f4c+0xc19);case'4':if(!_0x585c0b)return![];continue;case'5':var _0x4120c5=_0x2f8f93[_0x553429(0x7c1)+'pe']==='u8'?_0x3d182e[_0x553429(0xac3)+_0x553429(0x896)](_0x2f8f93['key']):_0x3d182e['getIn'+'t32'](_0x2f8f93[_0x553429(0x700)],!![]);continue;case'6':var _0x2f8f93=_0x1e45bc[_0x270591];continue;case'7':var _0x585c0b=_0x5af420(_0x195d54,_0x2e73ad,_0x2f8f93[_0x553429(0x703)]);continue;}break;}}var _0x172334={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0x75c9c4=0x20f5+0x8b5+-0x2*0x14d5+0.03,_0x1b3129=0x29*-0x98+-0x18ba*0x1+0x3114*0x1,_0x515c3c={},_0x5f5d15=-0x6da+0x83a*-0x1+-0x4*-0x3c5,_0x5e77db=[],_0x2b0dbe=[];function _0x35f685(_0x15d510){var _0x2939a5=_0xc5af74,_0x43374d={'BZopj':function(_0x64f63){return _0x64f63();},'KGNvU':function(_0x7ccd71,_0x23ef0c){return _0x7ccd71(_0x23ef0c);},'ghOdA':function(_0x3fbec1,_0x44d5de){return _0x308226['rsBHY'](_0x3fbec1,_0x44d5de);},'MTlrR':function(_0xc763bd,_0x57a332){var _0x3ef884=_0x45e7;return _0x308226[_0x3ef884(0xc49)](_0xc763bd,_0x57a332);},'aSNEj':function(_0x39a45b,_0x2f1a5b){return _0x39a45b-_0x2f1a5b;}},_0x24c452=_0x3c44e9[_0x2939a5(0x262)+'ntrol'+'ler']||[],_0xbe193f=[];_0x2b0dbe=[],_0x5e77db=[];for(var _0xee7952=0x12e4+0x1871+-0x2b55;_0xee7952<_0x24c452['lengt'+'h'];_0xee7952++){var _0x4d4f3f=_0x24c452[_0xee7952][-0xa*-0x209+-0x23be+-0x1*-0xf64];if(_0x24c452[_0xee7952][-0x1*0x172a+0x1*0xe11+0x91a]!=='obfF')continue;var _0x5b12f6=_0x681eed(_0x15d510,_0x4d4f3f,_0x2939a5(0x783));if(!_0x5b12f6||_0x5b12f6[_0x2939a5(0x71d)+'d']!==-0x1*0x8e6+-0x18b*0x11+0x2322)continue;var _0x2571b3=_0x2c3828(_0x308226[_0x2939a5(0x8f8)],_0x5b12f6[_0x2939a5(0x5a8)+'n'],_0x5b12f6[_0x2939a5(0x35e)+_0x2939a5(0x447)+'t0']);if(typeof _0x2571b3!==_0x2939a5(0x945)+'r'||!isFinite(_0x2571b3))continue;var _0x19089e=_0x15d510+':'+_0x4d4f3f,_0x138923=_0x515c3c[_0x19089e];if(!_0x138923||_0x308226['UDKDv'](_0x2571b3,_0x138923['lastW'+'ritte'+'n']))_0x138923=_0x515c3c[_0x19089e]={'base':_0x2571b3,'lastWritten':null};var _0x6f2846=_0x138923[_0x2939a5(0xbd3)],_0x41d127=Math[_0x2939a5(0x2fd)](_0x6f2846);if(_0x308226[_0x2939a5(0x7b5)](_0x41d127,-0xb99+-0x23b8+0x2f51+0.0001)||_0x41d127>-0x1e82e+-0x2ab11+-0xa3*-0x995){_0x2b0dbe['push']({'o':_0x4d4f3f,'v':_0x2571b3,'why':'impla'+_0x2939a5(0xaab)+'e'});continue;}_0xbe193f[_0x2939a5(0x3f8)]({'o':_0x4d4f3f,'v':_0x2571b3,'a':_0x41d127,'base':_0x6f2846,'key':_0x19089e,'st':_0x138923});}var _0x30bc52=[];for(var _0x123b6d=0x7c*0x1c+0x1223*-0x2+0x16b6;_0x123b6d<_0xbe193f[_0x2939a5(0x687)+'h'];_0x123b6d++){var _0x500799=_0xbe193f[_0x123b6d]['a'],_0x381073=null;for(var _0x50483d=0x1733+-0x1da0+0x66d;_0x50483d<_0x30bc52[_0x2939a5(0x687)+'h'];_0x50483d++){var _0x44ae19=_0x30bc52[_0x50483d][_0x2939a5(0x7d2)]/_0x500799;if(_0x308226['LmKRb'](_0x44ae19,0x1*0x1525+-0x13ed+-0x137-_0x75c9c4)&&_0x44ae19<0x22cc+0x1006+-0x32d1+_0x75c9c4){if(_0x308226[_0x2939a5(0x8ab)]===_0x2939a5(0x388)){if(_0x49afbd)_0x5b98fe[_0x2939a5(0x500)+'onten'+'t']=_0x308226[_0x2939a5(0x8ce)];}else{_0x381073=_0x30bc52[_0x50483d];break;}}}!_0x381073&&(_0x381073={'mean':_0x500799,'members':[]},_0x30bc52[_0x2939a5(0x3f8)](_0x381073));_0x381073[_0x2939a5(0xb50)+'rs'][_0x2939a5(0x3f8)](_0xbe193f[_0x123b6d]),_0x381073['mean']=-0x194a+-0x72*0x11+0xc*0x2bd;for(var _0x53b029=0x10a3*0x1+-0x1*-0x1284+-0x2327*0x1;_0x53b029<_0x381073[_0x2939a5(0xb50)+'rs'][_0x2939a5(0x687)+'h'];_0x53b029++)_0x381073[_0x2939a5(0x7d2)]+=_0x381073['membe'+'rs'][_0x53b029]['a'];_0x381073[_0x2939a5(0x7d2)]/=_0x381073[_0x2939a5(0xb50)+'rs']['lengt'+'h'];}var _0x43ef42=[];for(var _0x325612=-0x144f+0x1675*0x1+0x6e*-0x5;_0x325612<_0x30bc52[_0x2939a5(0x687)+'h'];_0x325612++){if(_0x308226['naVBw'](_0x30bc52[_0x325612][_0x2939a5(0xb50)+'rs'][_0x2939a5(0x687)+'h'],_0x1b3129))_0x43ef42[_0x2939a5(0x3f8)](_0x30bc52[_0x325612]);}if(!_0x43ef42['lengt'+'h']){if(_0x308226['CpziP']('xwZJs','ENqnz')){if(!_0x2324ad[_0x2939a5(0x687)+'h'])try{_0x43374d['BZopj'](_0x29ad24);}catch(_0x21b6ee){}_0x20c306++,_0x43374d[_0x2939a5(0x2d3)](_0x3e01dd,_0x13eba8());if(!_0x9f30eb['lengt'+'h']&&_0x3bf9a0<0x49*-0x49+-0x4b*-0x65+-0x79a)_0x48f229(_0x1945f2,0x2329*0x1+0x1b2d+0x2*-0x1b43);else{if(!_0x2f5408['keys'](_0x342d5a)[_0x2939a5(0x687)+'h']&&_0x37f98c<-0xcb7+0x1642+-0x85f)_0x555cd1(_0x38010e,-0xf*0x265+0xb57+0x2064);else _0x265bb7(_0x3b74e4,0x149b+0x583*0x7+0x4*-0xda0);}}else{_0x2b0dbe[_0x2939a5(0x3f8)]({'o':-(0x1f63+0x1*-0x511+-0x1a51),'v':0x0,'why':_0x308226[_0x2939a5(0xa28)](_0x308226[_0x2939a5(0xa66)]+_0x1b3129,_0x2939a5(0xc61)+_0x2939a5(0xaba)+'loats'+'\x20agre'+'ed')});return;}}var _0x53126c=_0x43ef42[-0x19a2+-0x12*0x80+0x1a*0x155]['mean'];for(var _0x3007e5=-0x438+-0xad7+0xf0f;_0x3007e5<_0x43ef42[_0x2939a5(0x687)+'h'];_0x3007e5++)if(_0x308226[_0x2939a5(0x235)](_0x43ef42[_0x3007e5]['mean'],_0x53126c))_0x53126c=_0x43ef42[_0x3007e5]['mean'];var _0x45bf3d=_0x308226['WZLVU'](_0x53126c,-0x22e4+-0x112d+0x3411+0.5);for(var _0x2e7351=0x1c42+-0x8*-0x229+0x192*-0x1d;_0x2e7351<_0x30bc52[_0x2939a5(0x687)+'h'];_0x2e7351++){if(_0x308226[_0x2939a5(0x8b3)]==='hUhJh'){if(_0x885a6[_0x2e6c4a][_0x2939a5(0x30c)]&&_0x4fce05[_0x170ed8][_0x2939a5(0x30c)][_0x2939a5(0x727)+'ed'])_0x5aa35b++;}else{if(_0x30bc52[_0x2e7351][_0x2939a5(0xb50)+'rs']['lengt'+'h']>=_0x1b3129)continue;for(var _0x4d72c2=0x23e5+-0x2658+-0x39*-0xb;_0x4d72c2<_0x30bc52[_0x2e7351]['membe'+'rs'][_0x2939a5(0x687)+'h'];_0x4d72c2++){_0x2b0dbe['push']({'o':_0x30bc52[_0x2e7351]['membe'+'rs'][_0x4d72c2]['o'],'v':_0x30bc52[_0x2e7351][_0x2939a5(0xb50)+'rs'][_0x4d72c2]['v'],'why':_0x2939a5(0xa56)+'eton'});}}}for(var _0x553dc5=-0xe3d+-0x1*0x1eeb+0x2d28;_0x308226[_0x2939a5(0x4f8)](_0x553dc5,_0x43ef42['lengt'+'h']);_0x553dc5++){if(_0x308226['zUTNZ'](_0x2939a5(0x7ad),_0x2939a5(0x4ca))){var _0x3944c5=_0x43ef42[_0x553dc5][_0x2939a5(0xb50)+'rs'];for(var _0x554f48=-0x2046+-0x1bf5+0x3c3b;_0x554f48<_0x3944c5['lengt'+'h'];_0x554f48++){var _0x3f1e02=_0x3944c5[_0x554f48];if(_0x3f1e02['a']<_0x45bf3d){if(_0x308226['ZeOTl']('kwxde',_0x2939a5(0x9a9)))_0x576111[_0x2939a5(0x6d0)+'Path'](),_0x4bb04d[_0x2939a5(0xb19)](_0x347d46,_0x2cfe67,_0x43374d[_0x2939a5(0x49e)](_0x43374d['MTlrR'](_0x43374d[_0x2939a5(0xaf7)](_0x28c35a,0x265a*0x1+0xcaf+0x1*-0x3305),_0x4c379b),-0x1*0x1ab3+-0x1f81+-0x7*-0x851),-0x7fa+0xe8*0x16+-0xbf6,_0x4cade9['PI']*(-0x8c3*0x1+-0xf18+0x17dd)),_0x1e3464['strok'+'e']();else{_0x2b0dbe['push']({'o':_0x3f1e02['o'],'v':_0x3f1e02['v'],'why':'below'+_0x2939a5(0x6f8)+'r\x20'+_0x45bf3d[_0x2939a5(0xa5d)+'ed'](0x1b9c+-0x2*-0xb8c+-0x135*0x2a)});continue;}}var _0x3e1f89=_0x3f1e02['base']*_0x172334['facto'+'r'];_0x23c246(_0x15d510,_0x3f1e02['o'],_0x2939a5(0x783),_0x3e1f89)&&(_0x3f1e02['st']['lastW'+_0x2939a5(0xaa3)+'n']=Math[_0x2939a5(0x1f4)+'d'](_0x3e1f89),_0x5f5d15++,_0x5e77db[_0x2939a5(0x3f8)]('0x'+_0x3f1e02['o'][_0x2939a5(0x8d4)+_0x2939a5(0x1aa)](-0x1ffc+0x849*-0x1+0x2855)));}}else return _0x37eea3['warn'](_0x308226[_0x2939a5(0x8f7)],_0x308226[_0x2939a5(0x39a)](_0x308226[_0x2939a5(0x4cf)],_0x204078),_0x12d1da),null;}}var _0x3c44e9={'FPScontroller':[[0x3*-0x14b+-0x14cf*0x1+-0x420*-0x6,_0x308226[_0xc5af74(0x8f8)]],[-0xf29*0x1+0x2225+-0x12d4,_0xc5af74(0x783)],[0xa01+0x236b*0x1+-0x2d2c,_0xc5af74(0x783)],[-0x19e0+-0x1e98+0x1c68*0x2,_0x308226[_0xc5af74(0x8f8)]],[0x1e0b+0x89e+-0x2639,_0x308226[_0xc5af74(0x8f8)]],[0x11*0x7e+0x8d4+-0x10aa,'obfF'],[0x8b*0x3a+-0x24bb*-0x1+-0x4399,_0xc5af74(0x783)],[0xfd6+0x11bc*-0x1+-0x1*-0x29e,'obfB'],[-0x91e+-0x571+0xf53,'obfF'],[-0x1e64+-0x673*-0x1+0x18cd*0x1,_0x308226[_0xc5af74(0x1e2)]],[0x17d8+0x1*0x14d+-0x1845*0x1,'v3'],[0x2*0x347+0x1e01*0x1+0xbe1*-0x3,'u8'],[0x2615*0x1+0x164f+-0x4*0xedd,_0x308226[_0xc5af74(0x8f8)]],[-0x27a*0x8+-0x1035*-0x2+-0x2*0x5c9,_0x308226['kQHog']],[0x174*-0x13+-0x1dc2+0x3a6a,'u8'],[-0x903*0x3+-0x1659+0x24b*0x16,_0x308226['kQHog']],[0x60f+-0x1b91*-0x1+0x1046*-0x2,'u8'],[0x3*0xbc3+0x23e5+-0x4619,'u8'],[-0x704+-0x71*-0x4a+-0x188a,_0xc5af74(0x783)],[-0x2*-0xdcd+-0x9d1+-0x1095,_0x308226['fJasb']],[0x92c+-0xb35*-0x2+-0x1e4a,_0x308226[_0xc5af74(0x9b8)]],[-0x7cf+-0x1*-0x1382+-0x1*0xa63,'f32'],[0x236c+-0x2151*-0x1+0x4369*-0x1,'v3'],[-0x39*-0x43+-0x869*-0x1+0xa*-0x232,'v3'],[0xd06+0x1*-0x1896+-0x1*-0xcfc,_0xc5af74(0xc17)],[0x1*-0x8db+-0x8*-0x4e1+-0x7*0x41b,_0xc5af74(0xc17)],[0x1*-0x25f0+0x225*0x5+-0x1*-0x1cbf,'u8'],[-0x1eee+-0x9*-0x44f+-0x64d,_0xc5af74(0xc17)],[-0xdc3*0x1+-0x1*0x1979+0x28d4,'v3'],[0x45*0x3+0x1182+0x1*-0x10ad,'u8'],[-0x1a3+-0x125d+0x15b4,_0xc5af74(0xc17)],[0x1ae4+0x2*0xba2+-0x3070,_0x308226[_0xc5af74(0x9b8)]],[0xda*-0x1+-0x1*0x2d5+-0x49*-0x13,'u8'],[0x69a*0x2+0x6*0x621+-0x303d,'u8'],[-0x921+-0x131f+-0xa00*-0x3,_0xc5af74(0x783)],[-0x1*-0xba7+0x3*-0x4cd+0x498,_0x308226[_0xc5af74(0x9b8)]],[-0x9b1*0x3+-0x24a5+0x4394,'u8'],[-0x293*-0x1+0x23ce+-0x2481,_0xc5af74(0x783)],[-0x1*0x23a3+-0xfc7+0x3562,'v3'],[-0xb7*-0x29+-0x8a*-0x8+-0x1*0x1f97,_0x308226[_0xc5af74(0x933)]],[-0x1*0x232f+-0x2625+0x4b6c,_0x308226['ibDfE']],[0xf97+0x1*-0x1db4+-0x1039*-0x1,'f32'],[-0xd*0x16+-0xca*-0x16+-0x4a6*0x3,_0x308226[_0xc5af74(0x9b8)]],[0x2334+0xa18+-0x2afc,_0x308226[_0xc5af74(0x9b8)]],[-0x3*-0x858+-0xc9*0x5+0xd1*-0x17,'f32'],[-0x751*-0x3+0x1367+-0x2702,_0xc5af74(0xc17)],[-0x5*0x267+-0x2046+0x2ea5,'u8'],[-0x40b*-0x1+-0x870+0xa*0xad,'u8'],[0x7c7*-0x1+0x1a5e+-0x1039*0x1,'u8'],[-0x8*0x40e+-0x187e+-0x1*-0x3b4e,_0xc5af74(0xc17)],[-0x263f*0x1+0x19ba+-0x1*-0xee9,'u8'],[-0x11b1+-0x1*0x17c9+0x2bdf,'u8'],[-0xe17+0x1*-0x23fb+-0x347a*-0x1,_0xc5af74(0xc17)],[0x1127+-0xd*0xe5+-0x31a,_0x308226[_0xc5af74(0x9b8)]],[0xef*0xc+0xa36*0x1+-0x2*0x97d,_0xc5af74(0xc17)],[0xad*-0x13+0x1*-0xef+0x43*0x3e,_0x308226['ibDfE']],[0x283*-0x1+-0xa91+0xf8c,'f32'],[-0x2070+0x2*-0xaf1+0x1*0x38ce,_0xc5af74(0xc17)],[0xec1+0x5*0x1f4+-0x1605,_0xc5af74(0xc17)],[-0x1c98+-0x66*-0x1d+0x138e,'v3'],[-0x9cb+-0x1e9d+0x2afc,'u8'],[0x2287+-0x1*0x1a13+-0x5dc,'v3'],[-0x101+0x15*-0x1d3+0xa7d*0x4,_0xc5af74(0xc17)],[0x2561+-0x1*-0x202f+0xb26*-0x6,'v3'],[0x2e*-0x59+-0x1fef+0x5*0xa21,_0x308226['ibDfE']],[-0x3*0x8fe+-0x21c4+0x3f7a,_0x308226[_0xc5af74(0x9b8)]],[0x1841+-0x1c5b*-0x1+0x4*-0xc77,_0x308226['ibDfE']],[0x14f4+-0x866+-0x2*0x4e5,'u8'],[-0x551*-0x4+-0x902*0x3+0x887,'u8'],[-0x612+0x24e9+-0x1c0f,_0x308226[_0xc5af74(0x9b8)]],[-0x15*0x69+0x20*0x10+0x979,_0x308226[_0xc5af74(0x9b8)]],[0x2*-0x6d+0x12f3+-0xf35,'v3'],[-0xd0+0x3c*0x71+0xb5e*-0x2,'v3'],[0x49+-0x7*-0xa3+-0x96*0x3,_0x308226[_0xc5af74(0x9b8)]],[-0x38*-0xe+0x1e1f+-0x1e2f,_0x308226['ibDfE']],[0x59f+-0x1709*-0x1+0x4*-0x669,_0x308226[_0xc5af74(0x9b8)]],[0x2*-0x6fc+0x1d44+0x311*-0x4,_0xc5af74(0xc17)],[0x7b7*0x3+-0x1*0x1e2+-0x1237,'v3'],[-0xc92*-0x2+0xdb*0x29+-0x7*0x829,'u8'],[0x2142+0x3b*-0x18+-0x189e,'v3'],[0x1ee3*-0x1+-0x2653*-0x1+0x112*-0x4,'i32'],[0x1*-0x2465+-0x3*0x409+0x33ac,_0xc5af74(0xc17)],[-0x11*-0x8+-0xf9*0x3+0x593,_0x308226[_0xc5af74(0x9b8)]],[0xe*-0xc5+-0x569+0x1363,_0x308226['ibDfE']],[-0x9*-0x277+0xd*-0x2e+-0x109d,_0x308226[_0xc5af74(0x9b8)]],[0xb79+-0x112+-0x727*0x1,'u8'],[0x1*-0xe95+0x1d2e+-0xb58,'u8'],[0x893+-0x34e*0x2+0x155*0x1,'u8'],[0xd18+0xdee+-0x17b9,'u8'],[-0x24*-0xc9+0xb3f*0x1+-0x2435,'u8'],[0xaa6+-0x1542+-0x4*-0x37b,'f32'],[-0x2313+0x1010+-0x1*-0x1657,'f32'],[0xea*-0x13+0x1c7e*-0x1+0x2f*0x10c,_0xc5af74(0xc17)],[-0x101b+0x147*-0x9+-0x6*-0x529,_0x308226[_0xc5af74(0x9b8)]],[-0x1c6e+0x6ab*0x3+0xbcd,_0xc5af74(0xc17)],[0x168+-0x6b*0xb+0x695*0x1,'u8'],[-0x2462*0x1+-0x1d13+0x44dd,'f32'],[0x5*-0x609+0x494*-0x1+0x262d,_0x308226[_0xc5af74(0x9b8)]],[0x2ef+0x10c1+-0xd*0x140,'u8'],[0xca9*-0x1+-0x730+0x1751,'v3'],[-0x2*0x508+0x13*0xbe+-0x1*0x86,'v3'],[-0x1*0x1d39+0x291*-0xe+0x31*0x167,'v3'],[-0x7ed+-0x15b*0x13+0x254a,_0xc5af74(0xc17)],[-0x83c*-0x2+0x1c0b+0x48b*-0x9,'f32'],[0x3b*0xa9+-0x5e1+0x1*-0x1d6e,_0xc5af74(0xc17)],[0x22e2+0x1*-0x2151+0x217,'v3'],[-0x1*0xe7d+0x1*-0xcbf+-0x48*-0x6e,_0xc5af74(0xc35)],[0x22b1+-0x1ab4+-0x445,'u8'],[-0xf68+-0xd*0x2d7+0x380f,_0xc5af74(0xc35)],[-0x397*0x1+0x1f46+-0x1*0x17ef,_0x308226[_0xc5af74(0x9b8)]],[0x2216+0x1*-0x173b+-0x717,'f32'],[-0x1e3a+0x3*0x8d9+-0x1*-0x777,_0xc5af74(0xc17)],[-0xb39+-0x493*0x1+0x1398,'f32'],[-0x1*0x1196+0x9fd*0x3+-0x1*0x891,'v3'],[0xe5*0x14+-0x1520+0x1*0x718,_0xc5af74(0xc35)],[-0x1725+-0x2a*0x3d+0x2507*0x1,'u8'],[0x39a*0x2+0x89b+-0xbee,'u8'],[-0x25c3*-0x1+-0x7*-0x76+-0x251b,'u8'],[0x1*-0xb9b+0x1d87*0x1+-0xe08,_0x308226['ibDfE']],[0x1f3d+0x29*0x5d+-0xa*0x439,_0xc5af74(0xc35)]],'HealthScript':[[-0x67a+0x277+0x45b,'u8'],[0x1962+-0x1*0x1079+-0xc7*0xb,_0xc5af74(0xc35)],[-0x674+0x1451+-0xd5d,_0xc5af74(0xc17)],[0x3bb+0xb85+-0xebc,_0x308226['ibDfE']],[-0x6*0xe8+0xdd*-0x11+0x14a5,_0x308226['ibDfE']],[-0x1d71*0x1+-0x1*0x123+0x1f20,_0x308226['ibDfE']],[0x1ac9*-0x1+-0x13ba+0x2f13*0x1,_0x308226['ibDfE']],[0xa00+-0x2179+0x1*0x180d,_0xc5af74(0xc17)],[0x1*0x322+-0x337*0x1+0xb5*0x1,'i32'],[0x14*-0xf3+-0x1*0x65a+0x19fa,_0x308226[_0xc5af74(0x1e2)]],[0x77*0x37+0x15*-0xb9+-0x9bc,'u8'],[0x2dd*-0x1+0x1*-0x2581+0x2907*0x1,'u8'],[0x1*0x1ff+-0x1*0x26db+0x2586,'u8'],[-0x53*0x9+0x186c+-0xfe*0x15,'u8'],[0x1314+0x561*0x7+-0x37fb,_0xc5af74(0x494)],[0xa*0x163+0x1669+-0x2373,_0x308226[_0xc5af74(0x6f4)]],[-0xea1+0x16dc+-0x753,_0x308226[_0xc5af74(0x6f4)]],[-0x16c3*-0x1+0x1b1*-0x3+-0x10b4,_0x308226['TLvUl']],[-0x23c0+0xe1f+-0x16b1*-0x1,'obfI'],[-0x263e+-0x1e36+0x4598,_0xc5af74(0x7b9)],[-0xd81*-0x2+-0x2008+0x636,'obfF'],[0x207b+0x869*-0x1+-0x16ca,_0x308226['ibDfE']],[-0xa9*-0x15+-0x1*-0x1871+-0x2502,_0x308226[_0xc5af74(0x9b8)]],[0x39f*-0x2+0x7d*-0xa+0xd70,_0xc5af74(0xc17)],[0x478+0x1*-0x14e7+0x11c3,_0x308226[_0xc5af74(0x9b8)]],[0x5*-0xc5+0xba*0x3+0x307*0x1,_0xc5af74(0xc17)],[-0x4*0x3f8+-0x21ba+0x96*0x57,'v3'],[0x1fc5*0x1+0x21e8+-0x403d,_0xc5af74(0xc17)],[0x2550+-0xa9*0x20+-0xeb8,'f32'],[-0x60d+0x69b*-0x5+0x2894,'u8'],[-0x802+0x163f+-0xcb1,'u8'],[0x1*0x10b7+-0x4a3*-0x7+-0xb*0x454,'i32']],'PlayerConfig':[],'WeaponManager':[[0x39*0x6+-0x1*-0xd72+-0xeb0,_0x308226[_0xc5af74(0x1e2)]],[0x1c5c+0xb8d*-0x1+-0x10b3,_0x308226['kQHog']],[-0x2375+-0x12f0+-0x11*-0x335,'u8'],[0x1*0xae6+0x1245+-0x9ad*0x3,_0xc5af74(0xc35)],[-0x43*-0x5d+-0x24d7+0xce4,_0x308226['fJasb']],[-0xe0c+-0xea+-0x293*-0x6,_0x308226['ibDfE']],[-0x5b*0x9+0x21f4+0x1e3d*-0x1,_0xc5af74(0xc35)],[0x1168+-0x13d4+0x7e*0x6,'u8'],[-0x1fab+0xb02+-0x1*-0x1532,'u8'],[0x9d4+-0x169+-0x1f*0x41,_0x308226[_0xc5af74(0x1e2)]],[-0xd2d*-0x1+-0x896+-0x407,_0x308226[_0xc5af74(0x9b8)]],[-0x11fd+0x5*-0x59d+-0x6aa*-0x7,'f32'],[-0x1*0x21a1+0x18e7*-0x1+-0x694*-0x9,'i32'],[0x158*-0x10+0x3b9+0x1283,'u8'],[-0x1d55+0xa2b+0x1406,_0xc5af74(0x494)],[-0x1157+0x6*0x4b+0x1085,_0xc5af74(0x494)],[0x22de+0x1*0x14f3+-0x36cd,_0xc5af74(0xc17)],[0xc7*-0x2f+-0x6*-0x200+0x1991,_0xc5af74(0xc17)],[0x9*-0x3ed+0x479*-0x5+-0x3abe*-0x1,_0xc5af74(0xc17)],[0x19*-0x106+0x2551*-0x1+0x3fff,'f32'],[0x8c4*0x3+-0x1b59+0x22d,_0x308226['ibDfE']],[0x226d*-0x1+0x2079*0x1+0x31c,'u8'],[0x138b*0x1+0x7*-0x12f+-0xa16,_0x308226[_0xc5af74(0x6f4)]],[-0x3*0xb+-0x14d6+0x1637,'obfI'],[-0x1c53*0x1+0x74e+0x1659,_0x308226[_0xc5af74(0x6f4)]],[-0x1004+-0x11*-0x132+-0x2e6,_0x308226[_0xc5af74(0x933)]],[-0x1*0x212+0xbec+-0x32*0x2b,'obfB'],[-0x17*-0x109+0x1e24+0x1cf*-0x1d,_0x308226[_0xc5af74(0x933)]],[-0xf*0x166+0x1a68+0x1*-0x3e2,'obfB'],[-0x860+0x1*0xdf5+-0x3f1,_0x308226['BnXaA']],[-0x2c6+-0xe20+0x2*0x94b,_0x308226[_0xc5af74(0x6f4)]],[0x1fc3+0x5*0x4b1+0x1*-0x356c,_0x308226['kQHog']],[-0x177+-0x24f8+-0x1*-0x283f,'u8'],[0x1*-0x1863+-0x104*0x17+0x3193,_0x308226[_0xc5af74(0x1e2)]],[0x14ca+0x1*0x259f+-0x3891*0x1,_0xc5af74(0xc35)],[-0x259e+0xf0b*-0x1+0x1*0x36a9,'i32'],[0x9ab+0x2cc*0xb+-0x265b,'u8'],[0x708+-0x49*-0x71+-0x1*0x2525,'u8'],[-0x8*0x4c7+0xaa1*-0x1+0x32f6,'u8'],[0x154*0x1c+-0x296*0x8+0xe*-0x107,'u8'],[0x9*-0x238+0x20cf+-0xab8,'u8'],[0xe5*0x1f+-0x5*0x782+0xc1f,_0xc5af74(0xc35)],[0x1*0x25f+0x2*0xf3f+0x1e85*-0x1,'u8']],'GG_GameManager':[[0x325*0xc+0x19+-0x25b1,'u8'],[0x724+0x827+-0xf1f,_0x308226[_0xc5af74(0x9b8)]],[-0xe*-0xf7+-0x48*0x1+-0xcf6*0x1,'u8'],[0x1fd6+0x194*-0xb+0x1*-0xe35,'u8'],[-0x1*0xca7+0x1ebb+-0x11cc,_0x308226['ibDfE']],[0xc97+-0x94b+-0x2*0x180,'f32'],[0x26c+-0x2459+0x223d,_0x308226[_0xc5af74(0x1e2)]],[-0x155d*-0x1+-0x136*-0xd+-0x24c7,_0xc5af74(0xc35)],[0x20c7+-0xab2+-0x15bd,'u8'],[0xdf3+-0x1858+0xad9,'u8'],[-0x12df*0x2+-0x737*0x1+0x2d6d,_0x308226[_0xc5af74(0x9b8)]],[-0x234b+0x85e+-0x923*-0x3,_0x308226[_0xc5af74(0x9b8)]],[-0x22a*-0x6+-0x600+-0x112*0x6,_0x308226[_0xc5af74(0x1e2)]],[-0x7d*0x11+0x31*0x1+0x10*0x8b,'u8'],[0x581*-0x2+-0x12*-0x2+-0x2*-0x5c9,_0x308226['kQHog']],[-0x1*0x226d+-0x251f+0x4848,_0xc5af74(0xc35)],[-0x53*-0x25+0x153*-0x1c+0x19d5,'i32'],[-0x4d2*-0x5+-0x120*0x11+-0x412,_0xc5af74(0x494)],[-0x1075*0x2+0xcbf*0x3+-0x65*0xb,_0xc5af74(0x494)],[0x8fd+-0x1d+0x14*-0x64,_0xc5af74(0x494)],[0x1df*0x3+-0x8*-0x71+-0x7f9,'u8'],[0x4a3*0x5+0x13cd+0x85c*-0x5,_0x308226[_0xc5af74(0x1e2)]],[-0x10*-0x268+0x11fb+-0x125d*0x3,'u8'],[-0x1abf+0xae5+0x114a,_0x308226['ibDfE']],[-0x8b4*-0x4+-0x30a+-0x1e46,'u8'],[0x169c+0x2168+-0x367c,'u8'],[-0x51*0x9+0xfb8+0x19*-0x73,'u8'],[-0x12*0x219+-0x9f4+-0x2*-0x18af,_0x308226[_0xc5af74(0x1e2)]],[-0x239e+-0x19e4*0x1+0x3f2e,_0xc5af74(0xc17)],[-0x45*0x3b+0x13*0x74+0x8fb,'u8'],[0x10*-0x10a+0x3*0x2e9+0x996,'u8'],[-0x12*0xb3+0x2*-0x31a+0x1482,_0xc5af74(0xc35)],[0xe9*-0x1+0x648+-0x3a3,_0x308226[_0xc5af74(0x1e2)]],[0x25a3+-0x2169*-0x1+-0x1*0x454c,_0x308226['ibDfE']],[0x23bf+-0x228c+0x1*0x91,_0xc5af74(0xc35)],[-0xc*-0x77+0x1922+-0x1cee,_0x308226[_0xc5af74(0x9b8)]],[0x7*0x38+0x1c41+0x599*-0x5,_0xc5af74(0xc35)],[-0x875+0x11*-0x133+0x1ea8,_0xc5af74(0xc35)]],'TDM_GameManager':[[-0x3*-0x91c+-0x1ac4+-0x4*0x1e,'u8'],[-0xe49*-0x1+0x2*-0xc22+-0xc7*-0xd,'u8'],[-0x6df+0x71b+-0x1b,'u8'],[-0xbd*-0x2d+-0x22*-0x9b+-0x35ab,_0x308226[_0xc5af74(0x9b8)]],[-0x2084+0x422*0x7+0x2*0x1f7,'u8'],[-0x1c4f+-0x15*-0x29+0x1*0x194e,_0xc5af74(0xc17)],[0x1657+-0xde1*-0x1+-0x23d8,_0x308226['ibDfE']],[0x1190+-0x2375+0x97*0x1f,_0xc5af74(0xc35)],[0x24da+-0x26e1*0x1+0x59*0x7,'i32'],[0xb01+-0x654+-0x441,'u8'],[-0xf*-0xa+-0x1a43+-0x1a1a*-0x1,'u8'],[0x1026+-0x17ff+-0x2c3*-0x3,_0x308226['ibDfE']],[-0x157a+-0x1a32+0x14*0x268,_0xc5af74(0xc17)],[-0xb*-0x1ca+0x39b+0x9*-0x289,_0x308226[_0xc5af74(0x1e2)]],[0x93*-0x42+-0x25*-0xa4+0xebe,'u8'],[0x1a7c+0x31*-0x3+-0x1959,_0xc5af74(0x494)],[0xc3a+-0x3*-0x8b5+-0x2581,_0xc5af74(0x494)],[-0x1e1b+0xb39*0x3+-0x2a4,_0xc5af74(0x494)],[0x3ab*-0x7+0x1e88+0x8d*-0x7,_0xc5af74(0x494)],[-0x5*0x3f3+0x3*0x143+0x110a,'u8'],[-0xb07*0x3+0x17ca+0xaa7,'u8'],[0x9c6+0xc65+0x1*-0x14cb,_0xc5af74(0xc35)],[0xb3*-0x1f+0x202e+-0x915,'u8'],[0x1c67+-0x1f29+0x446*0x1,'u8'],[0x1*-0x1479+-0x2052+0x3653,_0x308226[_0xc5af74(0x9b8)]],[0x17c2+-0x3*-0x43+-0x16ff*0x1,_0xc5af74(0xc35)],[0xb72+-0x762+-0x280,_0x308226[_0xc5af74(0x1e2)]],[-0x180d+0x1*-0x696+0x2037,_0x308226[_0xc5af74(0x9b8)]],[0x81*-0x47+-0xee1+0x40*0xd1,_0xc5af74(0xc35)],[-0x1294*-0x2+-0x72+-0x231a,_0xc5af74(0xc35)],[0x1a8*0x8+0x872+0x1*-0x1412,_0xc5af74(0xc17)],[0x1553+0x1a71+0x4*-0xb88,'f32'],[0x132*-0xa+0x1*-0x1393+0x212f,_0x308226[_0xc5af74(0x1e2)]],[0x31+-0x9*0x163+0xdfa,'u8'],[-0x17*-0xeb+0x2144+-0xd2c*0x4,'u8'],[-0x2539*0x1+0x1aab*0x1+0xc46,_0x308226[_0xc5af74(0x9b8)]]],'PhotonNetworkSync':[[-0x3*-0x6fa+-0x17bb+0x301,'v3'],[-0x4*0x86f+0x18d*0x9+0x1407,'i32'],[0x1786*0x1+0x1737+-0x2e79,'u8'],[0x3*-0x84f+-0x2*0xa21+-0x2d74*-0x1,'u8'],[0x1*-0x2089+-0x1530+-0x3601*-0x1,'v3'],[-0xa6a*-0x2+-0x12d5*-0x1+-0x2755,'u8'],[-0x2537+-0x3*-0x64d+0x12a8,_0x308226[_0xc5af74(0x1e2)]],[-0x2566+-0x1cb*-0x8+0xde*0x1b,_0xc5af74(0xc35)],[-0x1730+0x1ea4+-0x1*0x714,_0xc5af74(0xc17)],[-0x2*-0x73+0x9*-0xdf+0x755,_0xc5af74(0xc17)],[-0x1a33+-0x1*0x1b60+0x35fb,_0xc5af74(0xc17)],[-0x1*-0x2379+-0x6fa+-0x1*0x1c13,'v3'],[-0x13af*0x1+-0x255*-0x1+0x11d2,_0x308226[_0xc5af74(0x9b8)]],[-0xa93+0x6d0*-0x1+-0x1*-0x11df,'f32'],[-0x11b*-0x23+0x1*0xe59+-0x2*0x1a45,_0x308226[_0xc5af74(0x1e2)]],[0x7a2+0xab1+-0x11cb,_0x308226['ibDfE']]],'MouseLook':[[-0x1d7*0x13+-0x225e*0x1+0x6d*0xa3,_0xc5af74(0xc17)],[0x1e73+0x1fd1+-0x3e2c,'f32'],[-0x1*-0x1c3a+0xe1+-0x1cff,'f32'],[0x1dfa+0x4f8*-0x4+-0x9fa,_0x308226['ibDfE']],[0x534*-0x3+0x1*0xb51+0x46f,_0x308226['ibDfE']],[-0x19c8+-0x2*-0x926+0xc*0xa3,_0x308226[_0xc5af74(0x9b8)]],[-0x8a*0x3c+0xf6b*-0x2+-0x3f5e*-0x1,_0x308226[_0xc5af74(0x9b8)]],[-0x84d+-0xca1*0x1+0x1522,'u8'],[-0x1*-0x2239+0x4*0x8dd+0x1727*-0x3,_0xc5af74(0xc17)],[-0x86*-0x28+-0x8b*0x26+0x1*-0x12,_0xc5af74(0xc17)],[-0x1ec6+-0x13*-0x1c9+-0x13*0x27,'i32'],[0x1*0x2353+0x73a*-0x2+0x149b*-0x1,'u8'],[-0x1754+0x207*-0x11+0x3a13,'v2']],'NetworkPlayerAnimations':[[0xc2f*-0x1+0xe5*-0xf+0x1a42,'v3'],[0xb54+-0x18e*0x9+0x35e,'v3'],[0x267f+0x145d+-0xe87*0x4,'u8'],[-0x3*0x10b+0xf33*0x2+-0x1a81,_0xc5af74(0xc35)],[-0x58f*0x7+-0x1075+0x1*0x3826,_0x308226[_0xc5af74(0x1e2)]],[-0x1f*0x11f+0x466+0x1f27,'f32'],[0x4*-0x254+0x1007*0x2+-0x7*0x322,_0x308226[_0xc5af74(0x9b8)]],[-0x3e2*0x4+-0x1ba6+0x2c0a,'f32'],[0x5de+-0x2*0x69e+0x83e,'f32'],[0x2255+-0x19*0xf3+-0x9b2,'f32'],[0x1*-0xe11+0x2705+-0x1808,_0xc5af74(0xc17)],[-0x13b3+0x1*-0x26f5+0x4*0xee6,_0x308226[_0xc5af74(0x9b8)]],[0xe09+0x2*-0xd87+0xdf9,_0xc5af74(0xc17)],[0x1d03+-0xb63+-0x10a8*0x1,_0x308226[_0xc5af74(0x9b8)]],[0x8ae+-0x8b*-0x2e+0x1056*-0x2,_0x308226[_0xc5af74(0x9b8)]],[0x4*-0x533+0x9c9+0x29*0x4b,_0xc5af74(0xc17)],[-0x133+-0x1f*-0x76+-0xc13,_0x308226[_0xc5af74(0x9b8)]],[0xa6f+0xf5*0x7+-0x101a,_0xc5af74(0xc35)],[0x1*-0xb41+0x1*-0x1ac1+0x270e,'u8'],[-0x1d86+0x1ba8+-0x177*-0x2,_0x308226[_0xc5af74(0x1e2)]],[0xca2*-0x3+0x2556+0xa*0x2a,'i32'],[-0x104e+0x83b+0x1*0x92b,'u8'],[0x25bf*0x1+-0x1*-0x1ee5+-0x4388,'f32'],[-0x1*-0xf04+0x2*0x10fc+0x2*-0x17ee,'f32'],[0x22d8+0x35b*0x2+-0x286a,_0x308226[_0xc5af74(0x9b8)]],[0xa3*0x22+0x20df+0x1*-0x355d,'f32'],[-0x8*-0x3b+-0x55*-0x50+-0x1b3c,'u8'],[0x23c7+0x1*0x313+-0x12d1*0x2,'u8'],[0x277*0xc+-0x1d13+0x1*0xbb,'v3'],[-0x20dc+-0x9e9+0x2c0d,'v3'],[0xb69+0x776+0x1*-0x114b,'u8']],'NPC_Cotroller':[[0x1919+-0xb46+0xdbf*-0x1,'v3'],[0x1cb+-0x1460+0x12b5,'f32'],[-0x13c7*-0x1+0x109*0x6+-0x19d9,_0xc5af74(0xc17)],[-0x15f8+0x137f+0x2cf*0x1,'u8'],[-0x2003+-0x1*-0x26af+-0x655,'u8'],[-0x3*-0x6bc+0x161d+-0x29f5,'v3'],[0x18f7*0x1+-0x1b9d*0x1+0x342,'u8'],[-0x5*-0x6ab+0xe7+-0x219e,_0x308226[_0xc5af74(0x9b8)]],[-0x147*-0x9+-0x1*-0x235c+-0x2e37,_0x308226[_0xc5af74(0x9b8)]],[0x256*0x5+0x228c+-0x32*0xe9,_0x308226['ibDfE']],[0x2194+-0x1be2+-0x4f6,_0xc5af74(0xc17)],[-0x1b5d+0x2508+-0x8e3,'u8'],[-0x15*0x10a+0x1857+-0x9*0x31,_0x308226[_0xc5af74(0x9b8)]],[0x1d4b*-0x1+-0xe94*0x2+0x3b4b,_0x308226[_0xc5af74(0x9b8)]],[-0x6d*0x51+0xd1*0x14+0x1305,_0x308226[_0xc5af74(0x9b8)]],[0x89*0x2c+-0x1d*0x10b+-0x1*-0x793,'f32'],[0x1f*-0x13+-0x142e+0x1f*0xc1,'u8'],[-0x59f+-0xbe0+-0x3af*-0x5,'f32'],[0x2012+-0x1*0x608+-0x7*0x396,'v3'],[-0x23ae+0x110e*-0x2+0x1*0x46c6,'f32'],[-0xc*0x11+-0x9*0x219+0x14ad,'i32'],[0x24c2+0x1b24+-0x3ee2,'f32'],[0x2653+-0x6d*-0x4a+-0x44cd,_0x308226[_0xc5af74(0x9b8)]],[0x1213+-0x423*0x3+-0x49e,_0xc5af74(0xc17)],[0x25fd+0x2b0+0xd33*-0x3,'v3'],[0xd*-0x2a5+-0xedd+0x325e,_0x308226[_0xc5af74(0x9b8)]],[-0x1*-0x1a7d+0x132a+-0x2c83,_0x308226['ibDfE']],[-0x10*-0x32+-0x20c*0xa+0x2*0x946,'v3'],[0x136b+-0x191b+-0xa*-0xb2,'u8'],[-0x1a5b+-0xa1d+0x4b8*0x8,_0xc5af74(0xc17)],[0x23d8+-0x1c7a*0x1+-0x60e,'v3'],[-0x1833+0xde5+0xd*0xe6,_0x308226['kQHog']],[-0x152b+-0x3*0x6a3+0x440*0xa,_0xc5af74(0xc35)],[0x16d4+-0xba4+-0x3*0x340,_0x308226['ibDfE']],[0xb*0x97+0x1*0x73+-0x57c,'u8'],[-0x4f*-0xa+-0x4*-0x98a+-0x27c6,'v4'],[0x154e+0x179f+-0x2b65,'f32'],[-0x71f*0x4+-0x840+-0x4*-0x992,'f32'],[0xd*0x10d+-0x2d*0x4b+0x2*0x8b,'f32'],[0x911*0x3+0x1f9a+-0x3935,'u8'],[-0xad2*-0x2+0x121a+-0x2*0x130f,_0xc5af74(0xc35)]],'TargetHealth':[[0x1*-0x1253+-0x3f*0x99+0x380a,_0xc5af74(0xc35)],[-0x10bb*0x1+-0x1217+0x22e6,_0x308226['kQHog']],[-0x1915+0x1a8f+-0x146,'u8'],[-0xe3b*-0x1+0xd*0x2b6+-0x11*0x2e5,_0xc5af74(0xc35)],[0x20bb+-0x765+-0x190e,_0x308226['kQHog']],[-0x14d7+-0xca9*0x2+-0x6a3*-0x7,_0x308226['kQHog']],[-0x1*0x159+-0x98f*-0x1+-0x7e6,'i32'],[0xa6f+-0x77d+-0x26e,_0x308226[_0xc5af74(0x9b8)]],[-0xf*0xe3+-0x5f2*-0x3+0x3fd*-0x1,'f32'],[-0x1f01+-0x2*-0x10be+-0x1eb*0x1,'u8'],[-0x1ead+0x1016*0x1+0xf2b,'f32'],[0x18db+0x17aa+-0x7*0x6d7,'u8'],[-0x1fb4+-0x19dd+0x3a39,'i32'],[-0xe46+-0x26bb+0x35ad,_0x308226[_0xc5af74(0x1e2)]],[0x11f1+0xb2*-0x21+0x3*0x1eb,_0x308226[_0xc5af74(0x9b8)]],[0x5*-0x24d+-0x209a+0x2ce7,'u8']],'SectatorCamera':[[0x484*0x2+0x1*-0x266a+-0x346*-0x9,_0xc5af74(0xc17)],[-0x24ae+-0x2331+0x47f7,'f32'],[-0xf4a*0x1+-0x67*-0x10+0x8f6,_0x308226[_0xc5af74(0x9b8)]],[-0x67a+-0xec9+0x4b*0x49,'v3'],[-0x699+-0x194d+0x2012,'v3'],[0x25*-0x25+0x1b*-0x103+0x1*0x20f2,'i32'],[0xdb1+0x2*0x107b+-0x2e5b,'i32'],[-0x625+0x1*-0x21d4+-0x2849*-0x1,_0x308226[_0xc5af74(0x9b8)]],[-0x10e+0x2c+0x136,_0x308226[_0xc5af74(0x1e2)]],[0x5*0x115+0x7*0x355+0x1c64*-0x1,_0x308226[_0xc5af74(0x9b8)]],[0x180+-0x9f5+-0x1*-0x8d1,'u8'],[0x1ab8+-0x1fee+-0x8f*-0xa,'v3'],[0x1*0x967+0x176b+-0x2066,'v4'],[0x3*-0x183+-0xfb2+0x14b7*0x1,'u8'],[0x107*0x26+-0xd7b+-0x190f,_0xc5af74(0xc35)]],'UISettings':[[-0x1*-0xef+0x1948+0x1a17*-0x1,_0x308226[_0xc5af74(0x1e2)]],[-0x43f+0x24ef*-0x1+-0x11e*-0x25,_0xc5af74(0xc17)],[-0xe*0x69+-0x9*-0xc1+-0x1*-0x39,'u8'],[0x1e1d+0x713*-0x5+-0x12*-0x5d,_0x308226[_0xc5af74(0x1e2)]],[0x19ed*-0x1+0x1*0x1f23+0xe*-0x47,'i32'],[0x1*0x7ae+0x1*0x1b7a+0x10*-0x21d,'i32'],[0xf64+0x5*-0x74f+0x1683,'u8'],[0x1543+0x5ba+-0x52*0x50,'u8'],[0x1*0x1358+0x1602*-0x1+0x408,'u8'],[-0x7*-0x52f+-0x1bcf+-0x71b,'u8'],[0x202d+0x16b*0x7+0x145d*-0x2,'u8'],[0x1*-0x14f7+0x1aed*-0x1+0x3145*0x1,'u8'],[0x3b*-0x26+0x14c4+-0x28*0x44,'u8'],[-0x2b*0x85+-0xbfd+0x241*0x10,_0x308226['ibDfE']],[0x8dc+0xb1*0x13+-0x143b*0x1,_0xc5af74(0xc17)],[-0x1c6d+-0x24d*0x4+0x27b9*0x1,'u8'],[0x1521+0x1dcc+-0x306d,_0xc5af74(0xc17)],[-0x1*0x8b9+-0x1231+-0xc7*-0x26,'i32'],[0x2626+0x1adb+-0x3e09,'u8'],[-0xb*0x297+-0x108*0x19+-0x39e1*-0x1,'u8'],[-0x359+-0x15*0x43+0xc78,'v2'],[-0x5c2+-0x5ec+-0xd*-0x12e,'v2'],[0x16e1+-0x383*0x1+0xdf*-0x12,'u8'],[0x9d*-0x1f+0x1b44+-0x489,'u8'],[0x7*0x27b+-0xab6+-0x2db,_0xc5af74(0xc17)],[-0x1b89+-0x1d60+-0x5*-0xc25,'v3'],[0x24d9+-0x1dbd+0x114*-0x3,_0x308226[_0xc5af74(0x9b8)]],[-0x2693+0x101a+-0x1a5d*-0x1,'f32'],[-0x10c*0x13+0x945+0xe87,'f32'],[0x1*0xde7+0x7*0x48b+-0x29c4,'u8'],[-0x7dc*0x2+0x1c79+-0x234*0x4,'u8'],[-0x6f+-0x9*0x25b+0x1996,'i32'],[0x1*-0x543+0x2427+0x2*-0xd72,'i32'],[-0x11a+0x1517*0x1+-0x553*0x3,_0xc5af74(0xc35)],[0xcf+-0xe6f*0x1+0x11a8,_0x308226[_0xc5af74(0x1e2)]],[0x212*-0x12+0x97*0x9+0x2401,_0x308226[_0xc5af74(0x1e2)]],[-0x1306+-0x1a14+0x312a,_0x308226['kQHog']],[0x1b02+0x360*-0xb+-0x2e*-0x4f,'i32'],[0x1*-0x1223+-0xd26+0x1*0x2361,_0x308226[_0xc5af74(0x1e2)]],[-0x2610+0xf13+-0x1*-0x1b19,_0x308226['kQHog']],[0x3*0x393+-0xdd*-0xd+-0x8e9*0x2,_0x308226['kQHog']],[0x220a+-0x185b*-0x1+-0x3611*0x1,'u8'],[-0x540+-0x1cef+-0x11*-0x244,'u8'],[-0x260d+-0xa*0x65+0x2e55,'u8'],[0x2*-0x236+-0xef1+0x17b4,'u8'],[0x229f*0x1+-0x209d+-0x1a*-0x19,_0xc5af74(0xc17)]]},_0x2c131c={},_0x2b5089={};function _0x3ce006(_0x2c510a,_0x5d804d,_0x365c0a){var _0x5afe6d=_0xc5af74,_0x45c578={'biyGj':_0x308226[_0x5afe6d(0xbe1)],'HmLdk':function(_0x488b4a,_0xe552dd){return _0x488b4a===_0xe552dd;},'eYcPl':_0x5afe6d(0x501)+'\x20ON','vcicg':_0x5afe6d(0xb7e)+'1b','xCjjk':_0x308226[_0x5afe6d(0xbf7)]};return function(_0x9dd528){var _0x21a8da=_0x5afe6d,_0x5d8fb8={'JerCd':function(_0x412d7c,_0x20ad1a){return _0x308226['JxFYX'](_0x412d7c,_0x20ad1a);},'JLfHo':function(_0x55fde9,_0x141bee){return _0x55fde9>=_0x141bee;}};try{var _0x4ba443=_0x9dd528&&_0x9dd528['val']?_0x9dd528[_0x21a8da(0x4c0)]():-0x9*-0x189+0x2308+-0x30d9;if(!_0x4ba443)return;var _0x176652=_0x2b5089[_0x2c510a]||(_0x2b5089[_0x2c510a]={}),_0x4e7529=_0x176652[_0x4ba443];if(!_0x4e7529)_0x4e7529=_0x176652[_0x4ba443]={'ptr':_0x4ba443,'firstSeen':Date['now'](),'hits':0x0};_0x4e7529[_0x21a8da(0x3b3)]++;if(_0x365c0a){if('XvKLc'==='EBsal'){var _0x3bcc6b=_0xcac99e[_0x21a8da(0x750)](0xbdd+0x200+-0xddd,-0x692+-0x2245+0x1*0x2a03);if(_0x2b696c['index'+'Of'](_0x3bcc6b)===-(-0x2a1*0x9+-0x21d3+-0x1*-0x397d)&&_0x5d8fb8[_0x21a8da(0x20e)](_0xa499f2['lengt'+'h'],-0x1*-0x3e3+0x1793+0xcd*-0x22))_0x5d52a2[_0x21a8da(0x3f8)](_0x3bcc6b);}else{if(!_0x2c131c[_0x4ba443])_0x2c131c[_0x4ba443]={'ptr':_0x4ba443,'kind':_0x2c510a,'firstSeen':Date['now'](),'hits':0x0};_0x2c131c[_0x4ba443][_0x21a8da(0x3b3)]++;}}else{var _0xafcf57=_0x44e9a2[_0x2c510a];if(!_0xafcf57||_0xafcf57[_0x21a8da(0x1fb)]!==_0x4ba443){_0x44e9a2[_0x2c510a]={'ptr':_0x4ba443,'firstSeen':Date[_0x21a8da(0x682)](),'hits':0x0,'replaced':!!_0xafcf57};try{var _0x569d74=_0x420614[_0x21a8da(0x4c1)+'r'](function(_0x39654f){var _0x1e0d5e=_0x21a8da;if(_0x45c578['biyGj']===_0x45c578[_0x1e0d5e(0x6b2)])return _0x45c578['HmLdk'](_0x39654f['type'],_0x2c510a);else{if(_0x5d8fb8[_0x1e0d5e(0xc55)](_0x2d757a[_0x21b108]['membe'+'rs']['lengt'+'h'],_0x3e879e))_0xe7c553[_0x1e0d5e(0x3f8)](_0x4efdc9[_0x120410]);}})[-0x750+-0x5ab+0xcfb];_0x1ac892={'type':_0x2c510a,'atMs':Date[_0x21a8da(0x682)]()-_0x303305,'originalFunc':!!(_0x569d74&&_0x569d74[_0x21a8da(0x30c)]&&typeof _0x569d74[_0x21a8da(0x30c)][_0x21a8da(0x195)+'nalFu'+'nc']===_0x21a8da(0x608)+_0x21a8da(0x2b6)),'resolveGameAtFire':!!_0x308226['onVBk'](_0x1fa17d),'gameSourceAtFire':_0x2f8d40[_0x21a8da(0x997)+'e']};}catch(_0x445917){}}}if(_0x2c510a===_0x21a8da(0x262)+_0x21a8da(0x9b9)+_0x21a8da(0x2df)&&_0x172334['on'])try{_0x308226['lUIwk'](_0x35f685,_0x4ba443);}catch(_0xdfc58c){}if(!_0x5d804d){if(_0x21a8da(0x734)!==_0x308226[_0x21a8da(0x9da)]){var _0x569d74=_0x420614['filte'+'r'](function(_0x406ecd){return _0x406ecd['type']===_0x2c510a;})[0x15bf+-0x21e4+-0xc25*-0x1];if(_0x569d74&&_0x569d74[_0x21a8da(0x30c)])try{_0x569d74[_0x21a8da(0x30c)][_0x21a8da(0x90c)+'ed']=![];}catch(_0x74f9e1){}}else _0x2e9965['sp']['textC'+'onten'+'t']=_0x369103['on']?_0x45c578['eYcPl']:_0x21a8da(0x501)+'\x20off',_0x299ff5['sp'][_0x21a8da(0x74c)][_0x21a8da(0x4a6)+_0x21a8da(0x647)]=_0x4c6346['on']?_0x3e5987:'trans'+_0x21a8da(0xb9b)+'t',_0x171ec7['sp'][_0x21a8da(0x74c)]['color']=_0x2fe7c1['on']?_0x45c578['vcicg']:_0x45c578[_0x21a8da(0x747)];}}catch(_0x3ac6d1){}};}function _0x1b2197(){var _0x4ae469=_0xc5af74;if(_0x308226['lkyOo']!==_0x308226['tjiyN']){if(_0x420614[_0x4ae469(0x687)+'h'])return!![];if(!window['Unity'+'WebMo'+'dkit']||!window['Unity'+'WebMo'+_0x4ae469(0x739)]['Runti'+'me'])return![];var _0x3819a2=window[_0x4ae469(0x878)+_0x4ae469(0x3b4)+'dkit'][_0x4ae469(0xb86)+'me'];if(!_0x3819a2['plugi'+'ns']||!_0x3819a2[_0x4ae469(0x962)+'ns'][_0x4ae469(0x687)+'h'])return![];_0x4e470b=window[_0x4ae469(0x878)+'WebMo'+'dkit'][_0x4ae469(0x495)+'Wrapp'+'er'],_0x4ee0ea=_0x4ee0ea||_0x3819a2['plugi'+'ns'][_0x308226[_0x4ae469(0xaef)](_0x3819a2[_0x4ae469(0x962)+'ns']['lengt'+'h'],0x1f3*0xf+0x1*-0x32b+-0x1a11)];if(!_0x4ee0ea||_0x308226[_0x4ae469(0x242)](typeof _0x4ee0ea[_0x4ae469(0xc53)+_0x4ae469(0x899)],_0x4ae469(0x608)+_0x4ae469(0x2b6)))return![];for(var _0x2ed491=0x2038+-0x737+-0x1*0x1901;_0x2ed491<_0x145df1['lengt'+'h'];_0x2ed491++){if(_0x308226[_0x4ae469(0xa2e)]!==_0x308226['PqzkM']){if(typeof _0x5b6598!==_0x308226['HHNfJ']&&_0x596521)return _0x2d3576['sourc'+'e']=_0x308226[_0x4ae469(0x74e)],_0xc62c45;}else{var _0xeb3322=_0x145df1[_0x2ed491];try{var _0x4387be=_0x4ee0ea[_0x4ae469(0xc53)+_0x4ae469(0x899)]({'typeName':_0xeb3322['type'],'methodName':_0x4ae469(0x756)+'e','params':[_0x4ae469(0xc35),'i32'],'returnType':undefined},_0x308226[_0x4ae469(0x2db)](_0x3ce006,_0xeb3322[_0x4ae469(0x7af)],_0xeb3322[_0x4ae469(0x5ca)],_0xeb3322[_0x4ae469(0x9f9)]));_0x420614[_0x4ae469(0x3f8)]({'type':_0xeb3322[_0x4ae469(0x7af)],'hook':_0x4387be,'keep':_0xeb3322['keep']});}catch(_0x22f70f){_0x272009[_0x4ae469(0x3f8)](_0xeb3322['type']+':\x20'+_0x308226[_0x4ae469(0xa2c)](String,_0x22f70f&&_0x22f70f[_0x4ae469(0x2ff)+'ge']||_0x22f70f)['slice'](-0x87b+-0x1d*0x151+0x2ea8,0x3*0x65a+0x1f*0x4+-0x12ea));}}}return _0x420614[_0x4ae469(0x687)+'h']>0xff1*-0x1+-0xdf8+0x1de9;}else return _0x48534c['o'];}function _0x32ad60(){var _0x1eddb4=_0xc5af74;if(_0x308226['yLKFd']!==_0x1eddb4(0xc81)){var _0x4561b5=-0x24af+0x2*-0xf0b+0x42c5;for(var _0x33d71a=0x20*0x9e+-0xa5c+-0x964;_0x308226[_0x1eddb4(0x897)](_0x33d71a,_0x420614[_0x1eddb4(0x687)+'h']);_0x33d71a++){if(_0x420614[_0x33d71a][_0x1eddb4(0x30c)]&&_0x308226[_0x1eddb4(0x4be)](_0x420614[_0x33d71a]['hook'][_0x1eddb4(0x618)+_0x1eddb4(0xb66)],undefined))_0x4561b5++;}return _0x4561b5;}else try{_0x4f517d[_0x1eddb4(0x444)][_0x3e6372]();}catch(_0x24a85a){}}function _0x487c1a(){var _0x99ebe9=_0xc5af74,_0x5180d7=0x7*-0xf7+-0x1f*0x104+0x263d;for(var _0x201066=0x1*-0x1b68+0x28f+0x18d9;_0x201066<_0x420614['lengt'+'h'];_0x201066++){if(_0x420614[_0x201066]['hook']&&_0x420614[_0x201066]['hook'][_0x99ebe9(0x727)+'ed'])_0x5180d7++;}return _0x5180d7;}var _0xa393d9=null,_0x37f0b6=[],_0x1563e9={},_0x1ac892=null;function _0x44cb61(_0x93359b){var _0x2d6b49=_0xc5af74;try{if(!_0x4e470b||!_0x93359b)return null;var _0x1fde95=new _0x4e470b(_0x93359b)[_0x2d6b49(0x23f)+_0x2d6b49(0x54e)+'me']();return _0x308226['yUZrK'](_0x1fde95,undefined)?null:_0x1fde95;}catch(_0x1f6baa){if(_0x2d6b49(0xb4f)===_0x308226['nSYcm'])return null;else{var _0x4583e0=_0x308226[_0x2d6b49(0xa5b)](_0x5667b8,_0x3b6031[_0x2d6b49(0xbc8)],[_0x12b846[_0x2d6b49(0xbc8)][0x1a94+-0x16dc+-0x3b8],_0xf67836[_0x2d6b49(0xbc8)][0xeb1*-0x2+-0x243a+0x419d],_0x50a7fc[_0x2d6b49(0xbc8)][0x97*0x1f+0x14e*-0xf+0x14b]+(0x13fa*0x1+0xa34*-0x2+0x3*0x25)],-0x62*0x47+0x14f1+0xa25,0xc40+-0x21e2+0x198a);_0x4583e0&&(_0x558016=_0x4583e0['x']/(0x2*0x505+0x1e71+-0x2493),_0x2f85c6=_0x308226[_0x2d6b49(0xab6)](_0x4583e0['y'],0x6*0x14a+0x15*0xa2+0x2*-0x88f));}}}function _0x2b05eb(_0x597977,_0x1cc1e5,_0xa0312d){var _0x4615e0=_0xc5af74,_0x29c473=(_0x4615e0(0xa3a)+_0x4615e0(0xc78)+'4|1')['split']('|'),_0x5997c4=-0x70*-0x2c+0xfcb+-0x230b;while(!![]){switch(_0x29c473[_0x5997c4++]){case'0':if(!_0x48e7aa)return null;continue;case'1':return _0x37ab01;case'2':var _0x48e7aa=_0x44e6cc();continue;case'3':if(_0x1cc1e5<-0xa3*-0x2e+0x1ba4+-0x822*0x7||_0x308226['fDEss'](_0x308226['dRhXh'](_0x1cc1e5,_0xa0312d*(-0x1*-0x1ad5+-0x2b3*-0x3+0x52*-0x6d)),_0x48e7aa['byteL'+_0x4615e0(0xa2b)]))return null;continue;case'4':_0x2f8d40['ok']+=_0xa0312d;continue;case'5':var _0x37ab01=[];continue;case'6':for(var _0x33b438=0x421*-0x4+-0x1868+0x28ec;_0x33b438<_0xa0312d;_0x33b438++)_0x37ab01[_0x4615e0(0x3f8)](_0x48e7aa[_0x4615e0(0x7d7)+_0x4615e0(0x321)](_0x308226[_0x4615e0(0x56c)](_0x597977+_0x1cc1e5,_0x33b438*(0x29*-0x7d+0x1d1c+0x17*-0x65)),!![]));continue;}break;}}var _0x8839f3={'PhotonNetworkSync':[[_0xc5af74(0x68f),_0xc5af74(0x9cb)+'nView'],[_0xc5af74(0x51c),'healt'+'h'],[_0x308226[_0xc5af74(0x353)],'trans'+_0xc5af74(0xa44)],['0x28',_0xc5af74(0x770)],[_0x308226[_0xc5af74(0xada)],_0x308226['ucnWM']]],'NetworkPlayerAnimations':[[_0x308226['MIgfa'],_0xc5af74(0x7ae)+'le'],[_0x308226['MhXjA'],'sync']],'NPC_Cotroller':[[_0x308226[_0xc5af74(0x2a9)],_0x308226[_0xc5af74(0xc0a)]],[_0x308226[_0xc5af74(0x4fc)],_0x308226['JXQrG']],[_0xc5af74(0x2e7),_0x308226[_0xc5af74(0xa37)]],[_0xc5af74(0x1c1),_0x308226['YVuFE']],[_0xc5af74(0x421),'trans'+_0xc5af74(0xa44)]],'EnemyBot':[[_0x308226[_0xc5af74(0x8ac)],'trans'+_0xc5af74(0xa44)]]},_0x5ce201={'PhotonNetworkSync':[[_0x308226[_0xc5af74(0x448)],_0xc5af74(0x9a7)],[_0x308226['opDAL'],_0xc5af74(0x1d4)+_0xc5af74(0x2a4)],[_0x308226['FaevA'],'id']]};function _0x292854(_0x3890bb,_0x104c05){var _0x230c71=_0xc5af74,_0x4edcfe={'xxcxL':function(_0x2b8474,_0x1998ae){var _0x4fcb64=_0x45e7;return _0x308226[_0x4fcb64(0xa9a)](_0x2b8474,_0x1998ae);},'gmAZR':function(_0x1f6c4f,_0x2c5562){return _0x1f6c4f+_0x2c5562;},'RBFCX':_0x308226[_0x230c71(0xb18)],'GeQkX':'\x20·\x20','QjPGp':_0x230c71(0xb37)+'v\x20','wWrWS':function(_0x3ca85f,_0x486161){var _0x52834f=_0x230c71;return _0x308226[_0x52834f(0x345)](_0x3ca85f,_0x486161);},'WTneN':function(_0xe1265f,_0x7015c6){return _0xe1265f!==_0x7015c6;},'ohhJO':'rkhVW','yjWzG':_0x230c71(0x79d)};if(_0x308226['qMNeW']===_0x230c71(0xc5a))_0x2fc385[_0x230c71(0x63b)]=_0x3c56df,_0x4ca820();else{var _0x203282=_0x3c44e9[_0x3890bb]||[],_0x564816={'kind':_0x3890bb,'ptr':_0x308226[_0x230c71(0x596)]('0x',_0x104c05[_0x230c71(0x8d4)+'ing'](-0x179e+0x1*0x5b+0x1753)),'pos':null,'posAt':null,'allVecs':[],'scalars':[],'refs':{}};for(var _0x85652b=0x26fe+-0x1a65+0x19*-0x81;_0x85652b<_0x203282[_0x230c71(0x687)+'h'];_0x85652b++){if(_0x308226['TAMSn'](_0x203282[_0x85652b][-0x8*0x3da+-0xb72+-0x15d*-0x1f],'v3'))continue;var _0x78089c=_0x2b05eb(_0x104c05,_0x203282[_0x85652b][0x1954+-0x1c43+-0x2ef*-0x1],-0x2*-0x636+0x9ad*0x1+0x2*-0xb0b);if(!_0x78089c)continue;_0x564816[_0x230c71(0x8e4)+'cs']['push']({'o':_0x308226['OnipX']('0x',_0x203282[_0x85652b][-0x1703+-0x51b*-0x1+0x11e8]['toStr'+_0x230c71(0x1aa)](0x258d*0x1+-0x1d8f+0xa*-0xcb)),'v':_0x78089c});}var _0x83e9b=-0x1*0x21e9+-0x15a9*0x1+-0x1286*-0x3,_0x2d484c=_0x308226['qDfiB'](_0x2f1e19,_0x564816['allVe'+'cs'],_0x2a1d0f());_0x564816['pos']=_0x2d484c[_0x230c71(0x54d)],_0x564816[_0x230c71(0x9a1)]=_0x2d484c['posAt'],_0x564816['inBan'+'d']=_0x2d484c['inBan'+'d'],_0x564816[_0x230c71(0x4b7)+'er']=_0x2d484c[_0x230c71(0x4b7)+'er'],_0x564816[_0x230c71(0xacf)]=_0x2d484c['reach'],void _0x83e9b;var _0x1c1315=_0x8839f3[_0x3890bb],_0x54767a=_0x5ce201[_0x3890bb];if(_0x54767a){if('JgZOc'!==_0x308226[_0x230c71(0xab1)]){_0x564816['tag']={};for(var _0x3de8e2=-0x59c*0x2+-0x130c+-0x254*-0xd;_0x308226[_0x230c71(0xa02)](_0x3de8e2,_0x54767a['lengt'+'h']);_0x3de8e2++){var _0x2fb64a=_0x5897db(_0x308226['IYoIt'](_0x104c05,parseInt(_0x54767a[_0x3de8e2][0x305*0x7+-0x26c6+0x11a3],-0x333+0x2d1*-0x7+0x11*0x15a)),_0x308226[_0x230c71(0x1e2)]);if(_0x2fb64a!==undefined)_0x564816[_0x230c71(0x32b)][_0x54767a[_0x3de8e2][0x2269*0x1+-0x7*0x1e2+-0x153a]]=_0x2fb64a;}}else _0x1b4aac['lg']['textC'+'onten'+'t']=_0x4edcfe['xxcxL'](_0x4edcfe[_0x230c71(0x4cb)](_0x4edcfe[_0x230c71(0x3c8)](_0x4edcfe['RBFCX']+_0x135ad4+_0x4edcfe['GeQkX']+_0x996df6[_0x230c71(0x647)](_0x30dd5['span']),'m'),_0x5d73f7['boxes']?_0x4edcfe['xxcxL'](_0x4edcfe[_0x230c71(0x914)],_0x47d328['round'](_0x4fbbca[_0x230c71(0x63b)]))+'°':''),_0x6b3351!==null?_0x230c71(0x310)+'am'+_0x4d80e6:'');}if(_0x1c1315)for(var _0x154e86=0x8f5*-0x3+-0x11bf*0x1+-0x2*-0x164f;_0x154e86<_0x1c1315['lengt'+'h'];_0x154e86++){var _0x21309d=_0x308226[_0x230c71(0x209)](_0x5897db,_0x308226[_0x230c71(0x7d1)](_0x104c05,_0x308226[_0x230c71(0x306)](parseInt,_0x1c1315[_0x154e86][0x162*-0xe+-0x2323+0x367f],-0xa7a+-0x1*-0x127b+-0x7f1)),_0x230c71(0xb2e));if(_0x21309d)_0x564816[_0x230c71(0xc4e)][_0x1c1315[_0x154e86][-0x13a0+-0xc26+0x1fc7]]='0x'+_0x308226[_0x230c71(0x3a6)](_0x21309d,-0x67*-0x2e+0x174d*0x1+-0x8b*0x4d)['toStr'+'ing'](0x30*0x53+-0x3d*0x8+-0xd98);}return _0x564816[_0x230c71(0x19b)+'rs']=_0x203282[_0x230c71(0x4c1)+'r'](function(_0x45de8c){var _0x511f8a=_0x230c71;if(_0x4edcfe[_0x511f8a(0x3e4)](_0x4edcfe[_0x511f8a(0xbc2)],_0x4edcfe['yjWzG']))return _0x45de8c[-0x2*-0x902+0x1*0x10b1+-0x2*0x115a]===_0x511f8a(0xc17)||_0x45de8c[-0x3*-0x853+-0x7bd*0x1+-0x113b]===_0x511f8a(0xc35);else{if(_0x38896b[_0x511f8a(0xb9b)+'t']&&_0x4edcfe['wWrWS'](_0x5e8ad2['paren'+'t'],_0x9345c5))_0x284dad[_0x511f8a(0xb9b)+'t']['postM'+_0x511f8a(0xc12)+'e'](_0x508c4f,'*');if(_0x1580fd[_0x511f8a(0x613)]&&_0x35572a[_0x511f8a(0x613)]!==_0x5967fe)_0x248aa0[_0x511f8a(0x613)]['postM'+_0x511f8a(0xc12)+'e'](_0x204fc1,'*');}})['map'](function(_0x30623b){var _0x31d8dc=_0x230c71;return{'o':'0x'+_0x30623b[-0x1df1+-0x5ba+0x23ab][_0x31d8dc(0x8d4)+_0x31d8dc(0x1aa)](0x21ec+-0xb9f*0x1+-0x163d*0x1),'v':_0x5897db(_0x308226['VPdzZ'](_0x104c05,_0x30623b[-0x199*-0x8+-0x2207*-0x1+-0x2ecf]),_0x30623b[-0x2*0x1100+0x3*0x127+-0x17*-0x154])};})[_0x230c71(0x4c1)+'r'](function(_0x3e08a3){return _0x3e08a3['v']!==undefined&&isFinite(_0x3e08a3['v']);})['slice'](-0x2*0xaa6+-0x1134+0x2680,-0x25d8+0x1*-0x1c16+0x41fa),_0x564816;}}function _0x13a54e(){var _0xe625ac=_0xc5af74,_0x5aac51={'kMqFQ':function(_0x25c15f,_0x2bf470){return _0x25c15f+_0x2bf470;},'aZCqq':function(_0xa3848d,_0x127f29){return _0xa3848d===_0x127f29;},'eaxxp':_0xe625ac(0x787)+'255,1'+_0xe625ac(0x43c)+_0xe625ac(0xa90)+')'},_0x160e22={'players':[],'bots':[],'enemies':[],'controllers':[],'camera':null,'cameraFrom':null,'playerList':null,'managers':{},'wasmTypes':null},_0x23c288=_0x44e9a2[_0xe625ac(0x262)+_0xe625ac(0x9b9)+_0xe625ac(0x2df)]&&_0x44e9a2[_0xe625ac(0x262)+_0xe625ac(0x9b9)+_0xe625ac(0x2df)]['ptr']||0x1*-0x11b7+0x12df+-0x128,_0x3732f2=_0x2b5089[_0xe625ac(0x2ae)+'nNetw'+_0xe625ac(0x20c)+'nc']||{},_0x4d8011=Object[_0xe625ac(0x33f)](_0x3732f2);for(var _0x51de76=0xf75+-0x1963+-0x29*-0x3e;_0x308226[_0xe625ac(0x7b5)](_0x51de76,_0x4d8011[_0xe625ac(0x687)+'h'])&&_0x51de76<0x2*0x7d5+0x268b+-0x7*0x7bb;_0x51de76++){var _0x3f0000=_0x3732f2[_0x4d8011[_0x51de76]],_0x5ebe46=_0x308226['buUGe'](_0x292854,_0xe625ac(0x2ae)+'nNetw'+_0xe625ac(0x20c)+'nc',_0x3f0000[_0xe625ac(0x1fb)]);_0x5ebe46[_0xe625ac(0x3b3)]=_0x3f0000['hits'],_0x5ebe46['first'+'SeenM'+'s']=_0x3f0000[_0xe625ac(0x56b)+'Seen']-_0x303305,_0x5ebe46['isLoc'+'al']=!!_0x23c288&&_0x5ebe46['refs']['fps']===_0x308226['gxZsu']('0x',_0x23c288[_0xe625ac(0x8d4)+'ing'](0x89b+0x1b44*0x1+-0x1*0x23cf));if(_0x5ebe46['refs'][_0xe625ac(0xc73)+'h']){var _0x393f7e=_0x308226[_0xe625ac(0x3cf)](parseInt,_0x5ebe46['refs'][_0xe625ac(0xc73)+'h'],-0x256a*0x1+-0x4ce+0x3d8*0xb);_0x5ebe46['healt'+'h']=_0x4beae3(_0x393f7e,'Healt'+_0xe625ac(0xa53)+'pt',_0x308226[_0xe625ac(0x6f4)]);}_0x160e22[_0xe625ac(0x568)+'rs'][_0xe625ac(0x3f8)](_0x5ebe46);}_0x160e22[_0xe625ac(0x568)+_0xe625ac(0x69b)+'t']=_0x4d8011['lengt'+'h'];var _0x2964dd=_0x2b5089[_0xe625ac(0xbe7)+_0xe625ac(0xb9f)+'ler']||{},_0x378448=Object['keys'](_0x2964dd);for(var _0x3284c4=0x12c*0xc+-0x420+0x350*-0x3;_0x3284c4<_0x378448['lengt'+'h']&&_0x308226['hTitn'](_0x3284c4,0x2f5*0x5+0x3*0x123+-0x121a);_0x3284c4++){if(_0xe625ac(0x329)===_0xe625ac(0x329)){var _0x300ebe=_0x308226[_0xe625ac(0x5f1)][_0xe625ac(0x3c2)]('|'),_0x2d8497=-0xca9+0x2*-0x1129+0x2efb;while(!![]){switch(_0x300ebe[_0x2d8497++]){case'0':_0x160e22['bots'][_0xe625ac(0x3f8)](_0x35c006);continue;case'1':if(_0x35c006['refs']['healt'+'h'])_0x35c006[_0xe625ac(0xc73)+'h']=_0x4beae3(_0x308226[_0xe625ac(0x1cf)](parseInt,_0x35c006[_0xe625ac(0xc4e)]['healt'+'h'],0x196a+0x1*-0x189+-0x17d1),_0x308226['qIZNJ'],_0xe625ac(0x494));continue;case'2':_0x35c006[_0xe625ac(0x3b3)]=_0x2964dd[_0x378448[_0x3284c4]]['hits'];continue;case'3':var _0x35c006=_0x308226[_0xe625ac(0x3cf)](_0x292854,_0x308226['erDrO'],_0x2964dd[_0x378448[_0x3284c4]][_0xe625ac(0x1fb)]);continue;case'4':_0x35c006['first'+'SeenM'+'s']=_0x2964dd[_0x378448[_0x3284c4]]['first'+_0xe625ac(0x927)]-_0x303305;continue;}break;}}else _0x561c60=_0x208a6c,_0x4164f2=_0x2e57c0['c'][_0x5daf14];}_0x160e22[_0xe625ac(0x959)+_0xe625ac(0x84e)]=_0x378448['lengt'+'h'];var _0x1cba6f=_0x2b5089['FPSco'+_0xe625ac(0x9b9)+'ler']||{},_0x41849e=Object[_0xe625ac(0x33f)](_0x1cba6f);for(var _0x154385=0x2*0x1189+-0x93f*0x1+-0x19d3;_0x308226['RmRfM'](_0x154385,_0x41849e[_0xe625ac(0x687)+'h'])&&_0x154385<0xebe+0x1*0xb2b+0x89b*-0x3;_0x154385++){var _0x5ee429=_0x308226[_0xe625ac(0xc52)](_0x292854,_0xe625ac(0x262)+_0xe625ac(0x9b9)+_0xe625ac(0x2df),_0x1cba6f[_0x41849e[_0x154385]][_0xe625ac(0x1fb)]);_0x5ee429['hits']=_0x1cba6f[_0x41849e[_0x154385]]['hits'],_0x5ee429[_0xe625ac(0x1e3)+'al']=_0x1cba6f[_0x41849e[_0x154385]]['ptr']===_0x23c288,_0x160e22['contr'+'oller'+'s']['push'](_0x5ee429);}_0x160e22[_0xe625ac(0x8be)+_0xe625ac(0x5fc)+_0xe625ac(0x8ee)]=_0x41849e[_0xe625ac(0x687)+'h'];var _0xee8c16=_0x160e22['playe'+'rs'][_0xe625ac(0x8c2)+'t'](_0x160e22[_0xe625ac(0x4fd)]);for(var _0x5086cb=0x1996*-0x1+0x1c6f*-0x1+0x3605;_0x5086cb<_0xee8c16[_0xe625ac(0x687)+'h'];_0x5086cb++){if(_0xee8c16[_0x5086cb][_0xe625ac(0x1e3)+'al'])continue;_0x160e22[_0xe625ac(0x5a5)+'es'][_0xe625ac(0x3f8)](_0xee8c16[_0x5086cb]);}_0x160e22[_0xe625ac(0x3cb)+'Count']=_0x160e22['enemi'+'es'][_0xe625ac(0x687)+'h'];var _0x19d5e3={'TDM_GameManager':0x2c,'GG_GameManager':0x14},_0x3db824={'TDM_GameManager':0x50,'GG_GameManager':0x5c};for(var _0x5af045 in _0x44e9a2){var _0x43823e=_0x44e9a2[_0x5af045];if(!_0x43823e||!_0x43823e[_0xe625ac(0x1fb)])continue;if(!_0x308226['yYLNH'](_0x5af045,_0x19d5e3))continue;_0x160e22['manag'+_0xe625ac(0x401)][_0x5af045]='0x'+_0x43823e['ptr'][_0xe625ac(0x8d4)+_0xe625ac(0x1aa)](-0xf0a+-0xf5*0x23+-0x46b*-0xb);var _0x4495d6=_0x308226[_0xe625ac(0xc5b)](_0x5897db,_0x308226[_0xe625ac(0x978)](_0x43823e[_0xe625ac(0x1fb)],_0x19d5e3[_0x5af045]),'u32'),_0x905e26=_0x5897db(_0x43823e[_0xe625ac(0x1fb)]+_0x3db824[_0x5af045],_0x308226['BTrnJ']);_0x4495d6&&_0x160e22[_0xe625ac(0x64b)+'a']===null&&(_0x160e22[_0xe625ac(0x64b)+'a']='0x'+_0x308226['Msemb'](_0x4495d6,-0x53*-0x9+0x1d*0x29+-0x790)[_0xe625ac(0x8d4)+_0xe625ac(0x1aa)](-0xd85*0x2+0x1cc6*0x1+-0x2*0xd6),_0x160e22['camer'+'aFrom']=_0x5af045);if(_0x905e26&&_0x160e22[_0xe625ac(0x568)+_0xe625ac(0x909)]===null)_0x160e22['playe'+_0xe625ac(0x909)]=_0x308226['NoXIZ']('0x',(_0x905e26>>>0xc8a+-0x1834*-0x1+0x1*-0x24be)['toStr'+'ing'](-0xd2b+0x384*0x1+-0x33d*-0x3));}if(!_0x160e22[_0xe625ac(0x568)+_0xe625ac(0x69b)+'t']&&!_0x160e22['botCo'+'unt']&&!_0x160e22['camer'+'a'])_0x160e22['note']=_0x308226[_0xe625ac(0x6ee)](_0xe625ac(0x8c1)+_0xe625ac(0x4ae)+'etwor'+'kSync'+_0xe625ac(0x4b2)+_0xe625ac(0xbe7)+_0xe625ac(0xb9f)+'ler\x20a'+_0xe625ac(0x572)+_0xe625ac(0x7be)+_0xe625ac(0x407)+_0xe625ac(0x1bf)+'That\x20'+_0xe625ac(0x415)+'at\x20',_0x308226['DhDBb']);else!_0x160e22[_0xe625ac(0x3cb)+_0xe625ac(0x8ee)]&&(_0x160e22['note']=_0x308226[_0xe625ac(0x791)]+('isLoc'+'al\x20on'+_0xe625ac(0x708)+_0xe625ac(0x47c)+'y\x20in\x20'+'`play'+_0xe625ac(0x6a4)));try{if(_0x308226['ShpFm'](_0x308226[_0xe625ac(0x581)],'DHHdm')){var _0x2cb934=window['Unity'+'WebMo'+'dkit']&&window[_0xe625ac(0x878)+_0xe625ac(0x3b4)+_0xe625ac(0x739)][_0xe625ac(0xb86)+'me'],_0x3c9767=_0x2cb934&&_0x2cb934[_0xe625ac(0x339)+_0xe625ac(0x525)+_0xe625ac(0xa8e)+'es']||[],_0x19dcf7={};for(var _0x47d329=0x6*-0x233+0x1*0x67c+0x6b6;_0x47d329<_0x3c9767['lengt'+'h']&&_0x47d329<0x4*-0x296+-0xd*0x2fb+0x40b7;_0x47d329++){var _0x58e25a=_0x3c9767[_0x47d329][_0xe625ac(0x61a)+'s'][_0xe625ac(0x19a)](',')+'\x20->\x20'+(_0x3c9767[_0x47d329]['retur'+_0xe625ac(0xbb5)]||_0x308226['nFnAd']);_0x19dcf7[_0x58e25a]=(_0x19dcf7[_0x58e25a]||0x2119*0x1+-0xf*-0x9b+-0x2a2e)+(-0xaae+-0x11ec*-0x1+-0x73d);}_0x160e22['wasmT'+'ypes']=_0x19dcf7;}else{_0x1aeeec[_0xe625ac(0x500)+'onten'+'t']=_0x5aac51['kMqFQ']('v',_0x5adb24[_0xe625ac(0x354)+'on']||'?');var _0x3ded73=_0x467350,_0x564eff=_0x14dbba[_0xe625ac(0x354)+'on']||'';_0x158f8b[_0xe625ac(0x74c)][_0xe625ac(0x62e)]=_0x564eff===_0x3ded73?_0x478d43:_0xe625ac(0x454)+'74',_0x195415[_0xe625ac(0x74c)][_0xe625ac(0x1ac)+_0xe625ac(0x58e)+'r']=_0x5aac51['aZCqq'](_0x564eff,_0x3ded73)?_0x5aac51[_0xe625ac(0x5ac)]:_0xe625ac(0x454)+'74';}}catch(_0x228d2c){}return _0x160e22;}function _0x4beae3(_0x359cd2,_0x3a0942,_0x93d02e){var _0x5e46bd=_0xc5af74;try{var _0x4c939f=_0x3c44e9[_0x3a0942]||[];for(var _0x5278d2=-0x18f6+-0x3e0+-0x1*-0x1cd6;_0x5278d2<_0x4c939f[_0x5e46bd(0x687)+'h'];_0x5278d2++){if(_0x308226['TAMSn'](_0x308226[_0x5e46bd(0xa11)],_0x5e46bd(0x9d2))){if(_0x4c939f[_0x5278d2][0x7*-0xfa+-0x1*-0x1033+-0x2*0x4ae]!==_0x93d02e)continue;var _0x2f857f=_0x4c939f[_0x5278d2][0x1*0x99e+-0x15*0xeb+0x9a9];if(_0x308226[_0x5e46bd(0x18d)](_0x93d02e[_0x5e46bd(0x1e7)+'Of'](_0x5e46bd(0x95f)),-0x13*-0x11+0x1*-0x225d+0x211a)){var _0x2d6e93=(_0x5e46bd(0x1bc)+'|2|3|'+'4|5')['split']('|'),_0x29d665=-0x1294+0x9*0x7f+-0x1*-0xe1d;while(!![]){switch(_0x2d6e93[_0x29d665++]){case'0':var _0x1ebe30=_0x681eed(_0x359cd2,_0x2f857f,_0x93d02e);continue;case'1':_0x1ebe30['o']=_0x2f857f;continue;case'2':_0x1ebe30['k']=_0x93d02e;continue;case'3':var _0x261e8c=_0x5613ed([_0x1ebe30]);continue;case'4':if(!_0x261e8c['rows']['lengt'+'h'])return null;continue;case'5':return _0x261e8c[_0x5e46bd(0xbf9)][-0x4b*-0x1e+0x1bd7+-0x24a1];case'6':if(!_0x1ebe30)return null;continue;}break;}}var _0x5e508b=_0x5897db(_0x308226[_0x5e46bd(0xc38)](_0x359cd2,_0x2f857f),_0x93d02e);if(_0x5e508b===undefined)return null;return{'o':'0x'+_0x2f857f[_0x5e46bd(0x8d4)+_0x5e46bd(0x1aa)](0x1c4*-0x12+-0x28*0xb9+-0x12*-0x360),'v':_0x5e508b};}else try{_0x120298();}catch(_0x16dfc5){}}}catch(_0x4804b6){}return null;}function _0x251e1d(){var _0x1b5f62=_0xc5af74,_0x483fa2={};_0x2f8d40['ok']=-0xcd4*-0x2+-0x6*-0x1ed+0x16*-0x1b1,_0x2f8d40['faile'+'d']=-0x2156+0x16e3*-0x1+-0x25*-0x185,_0x2f8d40['lastE'+_0x1b5f62(0xa15)]=null;var _0x321ed1=Object[_0x1b5f62(0x33f)](_0x3c44e9);for(var _0x2cb4d2=-0x49*0x1d+0x1*0x1faf+-0x176a;_0x2cb4d2<_0x321ed1['lengt'+'h'];_0x2cb4d2++){if(_0x308226['ShpFm'](_0x1b5f62(0x876),'XBBoo')){var _0xd88ec2=_0x321ed1[_0x2cb4d2],_0x364173=_0x44e9a2[_0xd88ec2];if(!_0x364173||!_0x364173[_0x1b5f62(0x1fb)])continue;var _0x4e2f98=_0x3c44e9[_0xd88ec2]||[],_0x61b510=[];for(var _0x4ae0f4=0x49*-0x9+0x1*0x1b62+-0x18d1*0x1;_0x308226['dhCgA'](_0x4ae0f4,_0x4e2f98['lengt'+'h']);_0x4ae0f4++){var _0x385c95=_0x4e2f98[_0x4ae0f4][-0x6d*-0xb+-0x21a2+0x1cf3*0x1],_0x588dfd=_0x4e2f98[_0x4ae0f4][0x3e*-0x25+-0x47*0x2f+-0x40*-0x58];if(_0x588dfd[_0x1b5f62(0x1e7)+'Of']('obf')===-0x1040+0x1*-0x9f8+-0x4*-0x68e){if(_0x308226['kffKl']===_0x308226[_0x1b5f62(0x263)])_0x35f571['textC'+_0x1b5f62(0x696)+'t']=_0x580195['diff']&&_0x353c24['diff']['lengt'+'h']?_0x308226[_0x1b5f62(0x75e)](_0x308226[_0x1b5f62(0xc74)],_0x2f181e[_0x1b5f62(0xb97)]['join'](',\x20')):_0x1b5f62(0x82d)+_0x1b5f62(0x46e)+'hile\x20'+'walki'+_0x1b5f62(0xbb0)+_0x1b5f62(0xa49)+_0x1b5f62(0xbdd)+'/\x20jum'+_0x1b5f62(0x383)+_0x1b5f62(0x216)+'\x20whic'+'h\x20fie'+_0x1b5f62(0x990)+'\x20whic'+'h.';else{var _0x2dfbe6=_0x681eed(_0x364173[_0x1b5f62(0x1fb)],_0x385c95,_0x588dfd);if(!_0x2dfbe6)continue;_0x2dfbe6['o']=_0x385c95,_0x2dfbe6['k']=_0x588dfd,_0x61b510['push'](_0x2dfbe6);}}else{var _0x274cda=_0x308226[_0x1b5f62(0x3cf)](_0x5897db,_0x364173[_0x1b5f62(0x1fb)]+_0x385c95,_0x588dfd);if(_0x274cda===undefined)continue;var _0x36600d={'o':_0x385c95,'k':_0x588dfd,'v':_0x274cda};if(_0x308226[_0x1b5f62(0x5c5)](_0x588dfd,'v2')||_0x588dfd==='v3'||_0x588dfd==='v4'){if(_0x308226['HDPGd'](_0x308226[_0x1b5f62(0x8b9)],_0x1b5f62(0x61f))){if(_0x134dcc)return;if(_0x308226['YCuzE'](!_0x102695,!_0x4c2713))return;_0x26b748[_0x1b5f62(0x500)+_0x1b5f62(0x696)+'t']='no\x20re'+_0x1b5f62(0x1ae)+'after'+_0x1b5f62(0x4e4)+'—\x20fra'+_0x1b5f62(0x1f8)+'t\x20inj'+'ected'+'?',_0x44ba25[_0x1b5f62(0x74c)]['color']='#ffb3'+'c7',_0x1d46ed[_0x1b5f62(0x500)+'onten'+'t']=_0x308226['yOYxD']('The\x20g'+'ame\x20f'+_0x1b5f62(0x6ad)+'never'+_0x1b5f62(0x1f9)+_0x1b5f62(0x2e0)+_0x1b5f62(0xa56)+'e\x20rep'+_0x1b5f62(0xba4)+'\x0a'+('This\x20'+'panel'+_0x1b5f62(0xc10)+_0x1b5f62(0xaa9)+_0x1b5f62(0xad6)+_0x1b5f62(0x31c)+_0x1b5f62(0x325)+'\x20inst'+_0x1b5f62(0x69f)+_0x1b5f62(0x906)+'runni'+_0x1b5f62(0x83c)+'\x20the\x20'+_0x1b5f62(0x7fd)+'l,\x0a')+_0x308226[_0x1b5f62(0x988)],_0x1b5f62(0xb82)+_0x1b5f62(0x34d)+_0x1b5f62(0x64a)+_0x1b5f62(0x39e)+'\x20not\x20'+'injec'+_0x1b5f62(0xbdd)+_0x1b5f62(0x1ba)+_0x1b5f62(0xa74)+'ross-'+_0x1b5f62(0x195)+'n\x20ifr'+_0x1b5f62(0x3bd))+_0x308226['BVdbo']+('\x20\x203.\x20'+_0x1b5f62(0x351)+'sakur'+_0x1b5f62(0x212)+_0x1b5f62(0x423)+'z.use'+_0x1b5f62(0x4b3)+_0x1b5f62(0xbdb)+_0x1b5f62(0x241)+_0x1b5f62(0x3b6)+'g\x20scr'+_0x1b5f62(0x820)+'re\x0a')+(_0x1b5f62(0x758)+'insta'+'lled\x20'+'—\x20two'+'\x20copi'+_0x1b5f62(0x1ea)+_0x1b5f62(0xc42)+_0x1b5f62(0x9e0)+_0x1b5f62(0xb03)+'h\x20Web'+_0x1b5f62(0x764)+_0x1b5f62(0xbbe)+'nstan'+_0x1b5f62(0x4de)+_0x1b5f62(0x4bb))+(_0x1b5f62(0x22e)+'d\x20the'+_0x1b5f62(0x7be)+'\x20page'+'\x20once'+'\x20and\x20'+'watch'+'\x20this'+_0x1b5f62(0x694)+'l\x20aga'+_0x1b5f62(0x441));}else{var _0x38a2ce=_0x588dfd==='v2'?-0x1*0x2437+0xcd1+-0x38*-0x6b:_0x588dfd==='v3'?-0x11*-0x1d9+-0xc60+0x1e7*-0xa:0xfcf+-0x1*-0x2b+-0xff6,_0x4d2a7a=_0x308226['MWxqm'](_0x2b05eb,_0x364173[_0x1b5f62(0x1fb)],_0x385c95,_0x38a2ce);_0x4d2a7a&&(_0x36600d['xyz']=_0x4d2a7a,_0x36600d['v']=_0x4d2a7a[-0xf*-0x1a3+0x1*0x799+-0x2026]);}}_0x61b510[_0x1b5f62(0x3f8)](_0x36600d);}}if(_0x61b510['lengt'+'h']){var _0x195fad=_0x5613ed(_0x61b510);_0x483fa2[_0xd88ec2]=_0x195fad[_0x1b5f62(0xbf9)],_0x1563e9[_0xd88ec2]={'key':_0x195fad[_0x1b5f62(0x700)],'sane':_0x195fad[_0x1b5f62(0x855)],'checked':_0x195fad['check'+'ed'],'keyConsistent':_0x195fad[_0x1b5f62(0x685)+_0x1b5f62(0xa45)+_0x1b5f62(0x964)],'keySource':_0x195fad[_0x1b5f62(0x6e3)+'urce']};}}else{var _0x4330df=('9|7|4'+'|5|1|'+'8|0|3'+_0x1b5f62(0x390))['split']('|'),_0x5a28c8=0x8*-0x355+0xe7+0x19c1*0x1;while(!![]){switch(_0x4330df[_0x5a28c8++]){case'0':_0x4edaa7();continue;case'1':_0x2eb4c5['ok']=!![];continue;case'2':_0xdbafc8['memor'+'yTap']=!![];continue;case'3':_0x2a6903['hooks'+_0x1b5f62(0x348)+_0x1b5f62(0x432)]=_0x4a8cf3['lengt'+'h'];continue;case'4':_0x1eb28c['attem'+_0x1b5f62(0xc85)]=!![];continue;case'5':_0x32ba06=_0x53f2b1[_0x1b5f62(0x9a3)+'ePlug'+'in']({'name':_0x308226[_0x1b5f62(0x4d3)],'version':_0x2f6446,'referencedAssemblies':_0x3d9244[_0x1b5f62(0x750)]()});continue;case'6':_0x32ecc8();continue;case'7':if(!_0x53f2b1||typeof _0x53f2b1['creat'+'ePlug'+'in']!=='funct'+_0x1b5f62(0x2b6)){_0x26e884[_0x1b5f62(0x721)]=_0x308226['LQZZc'];return;}continue;case'8':try{var _0x119cfe=_0x133279[_0x1b5f62(0x878)+'WebMo'+_0x1b5f62(0x739)]['Runti'+'me'];_0x119cfe['__sak'+'uraTa'+'g']=_0x2c5034+':'+_0x6c6f4[_0x1b5f62(0x97c)+'m']()['toStr'+'ing'](0x11a1*0x1+0x174c*-0x1+0x5cf)[_0x1b5f62(0x750)](0x54*-0x32+-0x2495*-0x1+-0x142b,0x1*0xb1+-0x111e+-0x119*-0xf),_0x1c4586=_0x119cfe[_0x1b5f62(0x94d)+'uraTa'+'g'];}catch(_0xf271f3){}continue;case'9':var _0x53f2b1=_0x2c572f[_0x1b5f62(0x878)+_0x1b5f62(0x3b4)+'dkit']&&_0x19034c[_0x1b5f62(0x878)+_0x1b5f62(0x3b4)+_0x1b5f62(0x739)]['Runti'+'me'];continue;}break;}}}return _0x483fa2;}function _0x5613ed(_0x2e4b19){var _0x1f0354=_0xc5af74,_0x78daca=0x9*-0x265+0x484+0x59*0x31,_0x32d8d3=0x1*-0x6e6+0x995*-0x3+-0x49*-0x7d,_0x209db7=null;for(var _0x435cfe=-0x158a+0x2*0x2fa+0xf96;_0x435cfe<_0x2e4b19['lengt'+'h'];_0x435cfe++){var _0x42cb19=_0x2e4b19[_0x435cfe];if(_0x42cb19['k']['index'+'Of'](_0x308226[_0x1f0354(0x583)])!==-0x132*-0x9+-0xb95+0xd3)continue;_0x42cb19['v']=_0x2c3828(_0x42cb19['k'],_0x42cb19['hidde'+'n'],_0x42cb19[_0x1f0354(0x35e)+'Offse'+'t0']),_0x42cb19[_0x1f0354(0x620)+'ed']=_0x42cb19[_0x1f0354(0x35e)+'Offse'+'t0'],_0x42cb19[_0x1f0354(0x8a2)]=_0x308226[_0x1f0354(0x5cb)](_0x308226[_0x1f0354(0x8da)](_0x308226['cqqHO'](_0x308226['pJsBr']+_0x42cb19[_0x1f0354(0x5a8)+'n']+_0x308226[_0x1f0354(0x580)],_0x42cb19['fake'])+(_0x42cb19[_0x1f0354(0xbe2)]?_0x308226[_0x1f0354(0x380)]:''),_0x1f0354(0x4e0)),_0x42cb19['keyAt'+'Offse'+'t0'])+_0x308226[_0x1f0354(0x742)]+_0x42cb19[_0x1f0354(0xa93)];if(_0x308226['GOrhj'](_0x209db7,null))_0x209db7=_0x42cb19[_0x1f0354(0x35e)+_0x1f0354(0x447)+'t0'];_0x32d8d3++;if(_0x308226['XlYjK'](_0x5cb792,_0x42cb19)){if(_0x308226[_0x1f0354(0x345)]('ZmtIP',_0x1f0354(0x8f9)))_0x78daca++,_0x42cb19['sane']=!![];else return _0x1c22d3[0x1542+0x24d5+-0x3a17]=_0x495087,_0x317c9e[0x49d*0x2+-0x194f+0x1015];}else _0x42cb19['sane']=![];delete _0x42cb19[_0x1f0354(0x671)];}return{'rows':_0x2e4b19,'key':_0x209db7,'sane':_0x78daca,'checked':_0x32d8d3,'keyConsistent':_0x308226[_0x1f0354(0x845)](_0x275092,_0x2e4b19),'keySource':_0x308226['BXloF']};}function _0x275092(_0xfa6d96){var _0x5acce1=_0xc5af74,_0x36978a={};for(var _0x51cf62=-0x1*0x221b+0x45b*-0x2+0x2ad1;_0x308226[_0x5acce1(0xc07)](_0x51cf62,_0xfa6d96['lengt'+'h']);_0x51cf62++){var _0x20fdb5=_0xfa6d96[_0x51cf62];if(_0x20fdb5['k'][_0x5acce1(0x1e7)+'Of'](_0x5acce1(0x95f))!==0x1b90+0x7*-0x355+-0x7*0x9b)continue;if(_0x36978a[_0x20fdb5['k']]===undefined)_0x36978a[_0x20fdb5['k']]=_0x20fdb5['keyUs'+'ed'];else{if(_0x36978a[_0x20fdb5['k']]!==_0x20fdb5[_0x5acce1(0x620)+'ed'])return![];}}return!![];}function _0x5cb792(_0x59870e){var _0xdabc47=_0xc5af74,_0x2fc5bb={'fDilN':function(_0x4f7fca){return _0x4f7fca();}},_0x175387=_0x59870e['v'];if(typeof _0x175387!==_0x308226[_0xdabc47(0x874)]||!_0x308226['PIooP'](isFinite,_0x175387))return![];if(_0x308226[_0xdabc47(0x5f2)](_0x59870e['k'],_0xdabc47(0x7b9)))return _0x175387===-0x21*-0x43+-0x20a0+0x7ff*0x3||_0x308226[_0xdabc47(0x98a)](_0x175387,0x1*0x2020+-0x1c0d+-0x412);var _0x69f5e6=_0x59870e[_0xdabc47(0x260)];if(_0x308226[_0xdabc47(0xb4b)](typeof _0x69f5e6,_0xdabc47(0x945)+'r')||!isFinite(_0x69f5e6))return!![];if(_0x308226[_0xdabc47(0x3dc)](_0x59870e['act'],0x18e0+-0x1ee0+0x601)){if(_0x308226[_0xdabc47(0xb05)](_0xdabc47(0x360),_0xdabc47(0x360)))return Math['abs'](_0x175387-_0x69f5e6)<=Math['max'](-0x5b8+-0x35*-0x6+0x47b*0x1,Math['abs'](_0x69f5e6)*(0x6*0x19c+0x18f5+-0x229d+0.6));else _0x2fc5bb[_0xdabc47(0x6b0)](_0x4f9ee6);}return _0x308226[_0xdabc47(0xc07)](Math[_0xdabc47(0x2fd)](_0x175387),0x60d79*0x1051+-0x305*-0x20ded+-0x2d5b15ea);}function _0xf01f71(){var _0x557203=_0xc5af74;if(_0x308226[_0x557203(0x3ca)]===_0x308226[_0x557203(0x3ca)]){var _0x963b18={};try{var _0x522204=window[_0x557203(0x878)+_0x557203(0x3b4)+'dkit']&&window[_0x557203(0x878)+_0x557203(0x3b4)+_0x557203(0x739)]['Runti'+'me'];_0x963b18['tag']=_0x522204&&_0x522204[_0x557203(0x94d)+_0x557203(0x35d)+'g']||null,_0x963b18[_0x557203(0xafc)+_0x557203(0x7a6)]=!!(_0x522204&&_0x31d911&&_0x522204[_0x557203(0x94d)+'uraTa'+'g']===_0x31d911),_0x963b18['runti'+_0x557203(0xbc4)+'e']=_0x522204&&_0x522204[_0x557203(0xa33)]?typeof _0x522204['_game']:_0x557203(0xad2),_0x963b18[_0x557203(0x962)+'nRunt'+'imeIs'+_0x557203(0x1fe)+_0x557203(0x279)]=!!(_0x4ee0ea&&_0x4ee0ea[_0x557203(0x378)+_0x557203(0x716)]&&_0x308226['CpziP'](_0x4ee0ea['_runt'+'ime'],_0x522204)),_0x963b18['plugi'+_0x557203(0x8a9)+_0x557203(0x765)+'me']=_0x4ee0ea&&_0x4ee0ea['_runt'+'ime']&&_0x4ee0ea[_0x557203(0x378)+_0x557203(0x716)]['_game']?typeof _0x4ee0ea[_0x557203(0x378)+_0x557203(0x716)][_0x557203(0xa33)]:_0x557203(0xad2);}catch(_0x519eda){_0x963b18['error']=_0x308226['TjyOq'](String,_0x519eda&&_0x519eda['messa'+'ge']||_0x519eda);}return _0x963b18;}else{if(!_0x429dd8[_0x557203(0x2d0)]||!_0x47e96f[_0x557203(0x2d0)][_0x557203(0x3de)+_0x557203(0xbda)+'d'])return null;var _0x46a7d3=_0x2e1f42[_0x557203(0x9a3)+'eElem'+_0x557203(0x964)](_0x557203(0xa71));_0x46a7d3['id']=_0x308226[_0x557203(0x2b7)],_0x46a7d3['style']['cssTe'+'xt']=_0x308226['iismE'](_0x308226['FbCoL'](_0x308226[_0x557203(0x1b5)],'backg'+_0x557203(0x647)+':rgba'+_0x557203(0xb36)+_0x557203(0x4e2)+'.72);'+_0x557203(0x1ac)+_0x557203(0x8cb)+'\x20soli'+'d\x20rgb'+'a(255'+_0x557203(0x2f6)+'177,.'+'4);bo'+_0x557203(0x7ce)+_0x557203(0xbdc)+'s:10p'+'x;')+_0x308226[_0x557203(0x1d7)],_0x557203(0x9f6)+'selec'+'t:non'+_0x557203(0x52d)+_0x557203(0xbbb)+_0x557203(0x9f6)+'selec'+'t:non'+'e;'),_0x46a7d3[_0x557203(0xa67)+'HTML']=_0x308226[_0x557203(0x733)]+(_0x557203(0x1a2)+'id=\x22s'+_0x557203(0x69a)+'-esp-'+_0x557203(0x76f)+_0x557203(0x926)+_0x557203(0x18c)+'-alig'+_0x557203(0x907)+_0x557203(0x94c)+_0x557203(0x308)+'>');var _0x5a802a={'cv':{'getContext':function(){return null;}},'el':_0x46a7d3};_0x25631d[_0x557203(0x2d0)][_0x557203(0x3de)+_0x557203(0xbda)+'d'](_0x46a7d3),_0x2c1481={'el':_0x46a7d3,'cv':_0x46a7d3[_0x557203(0x32e)+_0x557203(0x4b8)+_0x557203(0x562)]('#saku'+_0x557203(0x9cf)+_0x557203(0x323)),'lg':_0x46a7d3[_0x557203(0x32e)+'Selec'+_0x557203(0x562)](_0x308226[_0x557203(0x9ff)])};if(!_0x1a17e3['cv']||!_0xa3c403['cv'][_0x557203(0x714)+_0x557203(0x652)])_0x2e59b1=_0x5a802a;return _0x5e36f2;}}function _0x49f4cd(){var _0x1f83f=_0xc5af74,_0x59f9de=[_0x1f83f(0xa41)+_0x1f83f(0x61b)+_0x1f83f(0xbc1),_0x308226[_0x1f83f(0x41f)],_0x308226['FSCIu'],_0x1f83f(0xa41)+'Insta'+'nceWr'+_0x1f83f(0x602)],_0x2ddc32={};for(var _0xc627ed=0x867+0x5*0x13d+-0xe98;_0x308226['pMSGx'](_0xc627ed,_0x59f9de[_0x1f83f(0x687)+'h']);_0xc627ed++){if(_0x1f83f(0x21d)==='BYtRb'){var _0x17164f=_0x59f9de[_0xc627ed],_0x165fed=typeof window[_0x17164f];_0x2ddc32[_0x17164f]=_0x308226['tNUhx'](_0x165fed,_0x1f83f(0x1f5)+'ined')?_0x1f83f(0x1f5)+_0x1f83f(0x4db):_0x165fed;}else _0x19f849=_0x57e5dd,_0x9d002f=_0x330936[_0x1f83f(0x682)]()-_0x2e6553;}var _0x1a2eb3=_0x308226[_0x1f83f(0x78c)](_0x1fa17d);_0x2ddc32[_0x1f83f(0x766)+_0x1f83f(0xb07)]=_0x2f8d40['sourc'+'e'];try{if(_0x1f83f(0xb38)==='paDsy')_0x2ddc32['hasMo'+_0x1f83f(0x600)]=!!(_0x1a2eb3&&_0x1a2eb3['Modul'+'e']),_0x2ddc32[_0x1f83f(0x6df)+'8']=!!(_0x1a2eb3&&_0x1a2eb3['Modul'+'e']&&_0x1a2eb3[_0x1f83f(0x8e5)+'e'][_0x1f83f(0x559)+'8']),_0x2ddc32['heapB'+'ytes']=_0x2ddc32[_0x1f83f(0x6df)+'8']?_0x1a2eb3['Modul'+'e']['HEAPU'+'8']['lengt'+'h']:0xa82+-0x27*-0x61+0x1949*-0x1;else try{var _0x42e2ac=_0x4da846[_0x1f83f(0x7e9)+'em'](_0x1fa022);if(!_0x42e2ac)return;var _0x5cf03f=_0x2e794d[_0x1f83f(0x381)](_0x42e2ac);if(_0x5cf03f&&_0x308226[_0x1f83f(0x745)](typeof _0x5cf03f['x'],_0x308226[_0x1f83f(0x874)])&&typeof _0x5cf03f['y']===_0x1f83f(0x945)+'r')_0x353263['pos']=_0x5cf03f;}catch(_0x4022e1){}}catch(_0x4edd2d){_0x2ddc32['hasMo'+'dule']=![],_0x2ddc32['heapU'+'8']=![],_0x2ddc32['heapB'+'ytes']=0x19bf+-0x1e0e+0x44f;}return _0x2ddc32[_0x1f83f(0x763)+'Wrapp'+'er']=typeof _0x4e470b,_0x2ddc32;}function _0x3afaff(){var _0x46d6f6=_0xc5af74,_0x354c6b={'tjwgO':function(_0x484028){return _0x484028();}};if(_0x308226[_0x46d6f6(0x6e0)](_0x308226[_0x46d6f6(0x2f8)],'geXJL'))_0x2c01c6(!_0x3156bc()),_0x354c6b['tjwgO'](_0x284f0b);else{var _0x20ba82={},_0x5b3abe=_0x248de2();if(!_0x5b3abe)return _0x20ba82;_0x20ba82['Mouse'+'Look@'+'ptr']=_0x5b3abe['mouse'+_0x46d6f6(0xaf3)];for(var _0x5e0009 in _0x5b3abe[_0x46d6f6(0x45e)+'s'])_0x20ba82[_0x308226[_0x46d6f6(0xc38)]('Mouse'+'Look+',_0x5e0009)]=_0x5b3abe['float'+'s'][_0x5e0009];if(_0x5b3abe['camer'+'a'])_0x20ba82[_0x46d6f6(0x576)+_0x46d6f6(0x724)+_0x46d6f6(0x64b)+'a']=_0x5b3abe['camer'+'a'];return _0x20ba82;}}function _0x515022(_0x1a111e){var _0x504175=_0xc5af74,_0x479b7e={'vNxjy':_0x308226[_0x504175(0x6e1)],'gRmcg':_0x504175(0xb7e)+'1b'};if(_0x308226[_0x504175(0x5a2)](_0x504175(0x327),'jqwqX'))_0x2fd5dc=!_0x2be2cd,_0x2471c0[_0x504175(0x500)+_0x504175(0x696)+'t']=_0x3f0f41?_0x504175(0x501)+_0x504175(0x3f1):'Speed'+_0x504175(0xb80),_0x50caa2['style'][_0x504175(0x4a6)+'round']=_0x5db350?_0x41a18a:_0x479b7e[_0x504175(0x91e)],_0x2ff571['style']['color']=_0x2f5cb1?_0x479b7e[_0x504175(0x1f6)]:'#f7ee'+'f5',_0x1f5906();else{var _0x39bf6d={};for(var _0x27ff77 in _0x1a111e){var _0x24fc9e=_0x1a111e[_0x27ff77];for(var _0x56b7f4=-0x4*0x27b+0xe*0x15+0x2*0x463;_0x308226[_0x504175(0x638)](_0x56b7f4,_0x24fc9e['lengt'+'h']);_0x56b7f4++){_0x39bf6d[_0x308226[_0x504175(0x895)](_0x27ff77,_0x504175(0x533))+_0x24fc9e[_0x56b7f4]['o'][_0x504175(0x8d4)+'ing'](0x34b+-0x19e6+0x16ab)]=_0x24fc9e[_0x56b7f4]['v'];}}return _0x39bf6d;}}function _0xb415d2(_0x191034,_0x1a080c){var _0x55893c=_0xc5af74,_0x26a209={'PByPW':function(_0xb125aa,_0x11392f){return _0xb125aa+_0x11392f;},'ZhTkK':function(_0x31b980,_0x4288c1){return _0x31b980+_0x4288c1;},'hjBGz':_0x308226['Ymcit'],'eRHum':_0x55893c(0x8e9)+'ds\x20·\x20','gBnBy':_0x55893c(0x870)+'es','XsczN':'Multi'+_0x55893c(0x1ed)+'\x20move'+'ment-'+'speed'+'\x20fiel'+'ds\x20on'+'ly.\x20H'+'eight'+',\x20ste'+_0x55893c(0x695)+_0x55893c(0xc63)+_0x55893c(0xbe6)+'refus'+_0x55893c(0xc7b)};if('TgyTm'!==_0x308226['RjTNy']){if(_0x308226[_0x55893c(0x1b7)](_0x191034,'speed')){_0x254d50(_0x1a080c&&_0x308226[_0x55893c(0x18d)](typeof _0x1a080c['on'],_0x308226['XVlKg'])?_0x1a080c['on']:_0x172334['on'],_0x1a080c&&typeof _0x1a080c[_0x55893c(0x922)+'r']==='numbe'+'r'?_0x1a080c[_0x55893c(0x922)+'r']:_0x172334['facto'+'r']);return;}if(_0x308226['SshLL'](_0x191034,'snaps'+_0x55893c(0xc14)))return;var _0x251599=_0x251e1d(),_0x2ec753=_0x515022(_0x251599),_0x28b7ca=_0x3afaff();for(var _0x6bd2d8 in _0x28b7ca)_0x2ec753[_0x6bd2d8]=_0x28b7ca[_0x6bd2d8];if(!_0xa393d9){_0xa393d9=_0x2ec753,_0x37f0b6=[],_0x33fd94(_0x308226[_0x55893c(0x97d)],{'report':_0x3235d2()});return;}_0x37f0b6=[];for(var _0x45b31f in _0x2ec753){if(_0x308226[_0x55893c(0x94b)]==='QYSHu'){var _0xfad472=_0xa393d9[_0x45b31f],_0x428569=_0x2ec753[_0x45b31f];if(_0x308226['SshLL'](_0xfad472,_0x428569))_0x37f0b6[_0x55893c(0x3f8)](_0x308226[_0x55893c(0x539)](_0x45b31f+':\x20',_0xfad472)+_0x55893c(0x222)+_0x428569);}else _0x5de05a++,_0x4504d5['sane']=!![];}_0xa393d9=_0x2ec753,_0x33fd94(_0x308226[_0x55893c(0x97d)],{'report':_0x3235d2()});}else _0x5ecca8(_0x1cfac9,_0x31b004['facto'+'r']),_0x41a33c['textC'+_0x55893c(0x696)+'t']=_0x384dc3?_0x26a209['PByPW'](_0x26a209[_0x55893c(0x1dc)]('x'+_0x206dff[_0x55893c(0x922)+'r']['toFix'+'ed'](0x8a9+-0x1ea1+-0x5*-0x465),_0x26a209['hjBGz']),_0x5a5cf3[_0x55893c(0x687)+'h'])+_0x26a209['eRHum']+_0x3e26f5+_0x26a209[_0x55893c(0x6d4)]:_0x26a209['XsczN'];}var _0x141f50=null;function _0x5c53bc(){var _0x7df0cd=_0xc5af74,_0x32e625={'BlbBI':_0x7df0cd(0x66a)+'-a=\x22','IDjDd':function(_0x4ffe89,_0x1ccf82,_0x3c8182){return _0x308226['UmvuD'](_0x4ffe89,_0x1ccf82,_0x3c8182);},'zBIDf':function(_0xe96c48,_0x3100fb,_0x125476){return _0xe96c48(_0x3100fb,_0x125476);},'GPxhZ':function(_0x2c5172){return _0x2c5172();},'pEWdN':'none','mUOyB':function(_0x855e41,_0x3290c4){return _0x308226['PuMMg'](_0x855e41,_0x3290c4);}};if(_0x141f50)return _0x141f50;try{if(!document['body']||!document[_0x7df0cd(0x2d0)]['appen'+'dChil'+'d'])return null;if(!document['getEl'+_0x7df0cd(0x9a4)+_0x7df0cd(0x728)]('sakur'+_0x7df0cd(0xb7b)+'hud-c'+'ss')){if(_0x308226['OoJPN']!==_0x308226[_0x7df0cd(0xc70)]){var _0x3f6a20=document[_0x7df0cd(0x9a3)+'eElem'+_0x7df0cd(0x964)]('style');_0x3f6a20['id']=_0x7df0cd(0xa8c)+'a-sw-'+_0x7df0cd(0x3d2)+'ss',_0x3f6a20['textC'+_0x7df0cd(0x696)+'t']='#saku'+_0x7df0cd(0x779)+_0x7df0cd(0xc43)+_0x7df0cd(0x39f)+_0x7df0cd(0xb81)+'l}',(document[_0x7df0cd(0x2dc)]||document['docum'+_0x7df0cd(0x612)+_0x7df0cd(0x9a4)])[_0x7df0cd(0x3de)+_0x7df0cd(0xbda)+'d'](_0x3f6a20);}else{if(!_0x4ebbff[_0x884887])_0x19a9ce[_0x44bae8]={'ptr':_0x14c98e,'kind':_0x2b1fec,'firstSeen':_0x3e5db7['now'](),'hits':0x0};_0x29a028[_0x1495af][_0x7df0cd(0x3b3)]++;}}var _0x1ec2f7=document['creat'+_0x7df0cd(0x972)+_0x7df0cd(0x964)](_0x308226['zCkPo']);_0x1ec2f7['id']=_0x308226['ahpMM'],_0x1ec2f7['style'][_0x7df0cd(0x9be)+'xt']=_0x308226['qyela'](_0x308226[_0x7df0cd(0xbf2)](_0x308226['gosXP']('posit'+'ion:f'+'ixed;'+'left:'+_0x7df0cd(0x1f7)+_0x7df0cd(0xae6)+':8px;'+_0x7df0cd(0x614)+_0x7df0cd(0x999)+'47483'+'647;d'+_0x7df0cd(0xbbc)+'y:fle'+_0x7df0cd(0xb64)+_0x7df0cd(0x6f1)+_0x7df0cd(0x857)+_0x7df0cd(0xb08)+_0x7df0cd(0x8ae)+_0x7df0cd(0x288)+'x;','backg'+_0x7df0cd(0x647)+_0x7df0cd(0x82f)+'(21,1'+'2,29,'+'.92);'+'borde'+_0x7df0cd(0x8cb)+_0x7df0cd(0x1d2)+'d\x20rgb'+_0x7df0cd(0xc3a)+_0x7df0cd(0x2f6)+_0x7df0cd(0x28f)+_0x7df0cd(0x3ec)+'order'+_0x7df0cd(0x7fc)+'us:10'+'px;'),_0x7df0cd(0xc62)+_0x7df0cd(0xbb9)+_0x7df0cd(0x9fb)+_0x7df0cd(0x333)+':11px'+_0x7df0cd(0x47a)+'\x20ui-m'+_0x7df0cd(0x38c)+'ace,C'+_0x7df0cd(0x9de)+_0x7df0cd(0x8d9)+_0x7df0cd(0x1b1)+'ce;co'+'lor:#'+'f7eef'+'5;'),_0x308226[_0x7df0cd(0xba3)]);var _0x598975=_0x7df0cd(0x1a2)+_0x7df0cd(0x21a)+_0x7df0cd(0x29a)+_0x7df0cd(0x626)+'yle=\x22'+_0x7df0cd(0x62e)+':#8d7'+_0x7df0cd(0x291)+'ax-wi'+_0x7df0cd(0x660)+'90px;'+_0x7df0cd(0x502)+'iv>';_0x1ec2f7[_0x7df0cd(0xa67)+_0x7df0cd(0x759)]=_0x308226[_0x7df0cd(0x3fc)](_0x308226['fkNzZ'](_0x308226[_0x7df0cd(0x75e)](_0x308226['eDGov'](_0x308226[_0x7df0cd(0xbc9)](_0x308226[_0x7df0cd(0x7f7)],_0x308226['UvJsd'])+_0x36b2b2+('\x22>sak'+_0x7df0cd(0x946)+'b>'),_0x308226[_0x7df0cd(0x5a1)]),_0x308226[_0x7df0cd(0xc34)])+('<inpu'+'t\x20dat'+_0x7df0cd(0xbed)+_0x7df0cd(0x318)+_0x7df0cd(0xa78)+_0x7df0cd(0x6ef)+_0x7df0cd(0x2d2)+'=\x221\x22\x20'+_0x7df0cd(0xb43)+'5\x22\x20st'+_0x7df0cd(0x794)+_0x7df0cd(0x566)+'alue='+_0x7df0cd(0x4f3)+_0x7df0cd(0x926)+_0x7df0cd(0x83d)+'h:92p'+_0x7df0cd(0x615)+_0x7df0cd(0x634)+_0x7df0cd(0x269))+_0x36b2b2+';\x22>'+_0x308226['UJGMr']+_0x308226[_0x7df0cd(0x777)]+('color'+_0x7df0cd(0x796)+'ef5;b'+'order'+_0x7df0cd(0x7fc)+_0x7df0cd(0x919)+'x;pad'+'ding:'+_0x7df0cd(0xae7)+'px;cu'+_0x7df0cd(0x679)+_0x7df0cd(0x196)+_0x7df0cd(0x3cc)+_0x7df0cd(0x635)+_0x7df0cd(0x24e)+_0x7df0cd(0x76e)+_0x7df0cd(0x25e)+'/butt'+_0x7df0cd(0x9f5)),_0x7df0cd(0x61d)+'on\x20da'+_0x7df0cd(0xb31)+_0x7df0cd(0x812)+_0x7df0cd(0xa2f)+_0x7df0cd(0x443)+_0x7df0cd(0x2c2)+'ound:'+_0x7df0cd(0xa40)+'paren'+_0x7df0cd(0x3af)+_0x7df0cd(0x825)+_0x7df0cd(0x8f2)+_0x7df0cd(0x70f)+_0x7df0cd(0x86a)+_0x7df0cd(0x346)+_0x7df0cd(0x3df)+_0x7df0cd(0x681)+';')+_0x308226['FdMmr']+_0x308226[_0x7df0cd(0xabe)]+(_0x7df0cd(0x62e)+_0x7df0cd(0x796)+_0x7df0cd(0x3a8)+'order'+'-radi'+'us:6p'+_0x7df0cd(0x1fd)+'ding:'+_0x7df0cd(0xab5)+_0x7df0cd(0x25f)+_0x7df0cd(0x679)+_0x7df0cd(0x196)+_0x7df0cd(0x3cc)+'nt:in'+_0x7df0cd(0x24e)+';\x22>-<'+'/butt'+_0x7df0cd(0x9f5)),'</div'+'>')+('<div\x20'+'data-'+_0x7df0cd(0x29a)+'\x22\x20sty'+_0x7df0cd(0x73b)+_0x7df0cd(0x269)+_0x7df0cd(0x451)+_0x7df0cd(0xbfb)+_0x7df0cd(0x38a)+_0x7df0cd(0xc59)+'0px;\x22'+_0x7df0cd(0x670)+'v>')+('<div\x20'+_0x7df0cd(0x21a)+_0x7df0cd(0x29a)+'2\x22\x20st'+_0x7df0cd(0x58b)+'color'+':#8d7'+_0x7df0cd(0x291)+'ax-wi'+_0x7df0cd(0x660)+_0x7df0cd(0x5a0)+'\x22></d'+_0x7df0cd(0xc3b)),_0x1ec2f7[_0x7df0cd(0xa67)+_0x7df0cd(0x759)]=_0x598975;var _0x17c150=function(_0x4260cc){var _0x5c6540=_0x7df0cd;return _0x1ec2f7[_0x5c6540(0x32e)+_0x5c6540(0x4b8)+_0x5c6540(0x562)](_0x32e625[_0x5c6540(0x518)]+_0x4260cc+'\x22]');},_0xfa6b5c=_0x308226[_0x7df0cd(0x1e4)](_0x17c150,'st'),_0x6b60d8=_0x17c150(_0x7df0cd(0x496)),_0x585aa3=_0x308226['qvTZs'](_0x17c150,'sp'),_0x4e9956=_0x17c150('fx'),_0x404569=_0x308226[_0x7df0cd(0x1e4)](_0x17c150,'fv'),_0x9e2c8c=_0x17c150(_0x308226['CHpqJ']);if(_0x585aa3)_0x585aa3[_0x7df0cd(0x5dc)+'ck']=function(){var _0x4ae107=_0x7df0cd;_0x32e625[_0x4ae107(0x32d)](_0x254d50,!_0x172334['on'],_0x172334[_0x4ae107(0x922)+'r']);};if(_0x4e9956)_0x4e9956[_0x7df0cd(0x6c3)+'ut']=function(){var _0x4be11a=_0x7df0cd;_0x254d50(_0x172334['on'],_0x308226[_0x4be11a(0x680)](parseFloat,_0x4e9956['value'])||0x43c+0x1e24+-0x225f);};if(_0x308226['txQCR'](_0x17c150,_0x308226[_0x7df0cd(0x5af)]))_0x17c150(_0x308226['HRUGd'])[_0x7df0cd(0x5dc)+'ck']=function(){var _0x482244=_0x7df0cd,_0x18c37b={'PJbuP':function(_0x94725e,_0x344e3a){return _0x94725e(_0x344e3a);},'DMwEx':function(_0x4a4548,_0xe0596a){return _0x4a4548<_0xe0596a;}};if(_0x308226['SHVZg']==='AfMpm')_0xb415d2(_0x308226['HnbUq']);else{_0x18c37b[_0x482244(0x26e)](_0x1a5d49,_0x3b05c1[_0x482244(0xc2d)]);try{var _0x3cabf5=_0x33b066[_0x482244(0xa67)+_0x482244(0x938)+'t']||0x18f4+-0x8ca+0x1*-0xd0a;if(_0x18c37b[_0x482244(0x854)](_0x3cabf5,-0xa85*0x3+0x7*-0x50e+0x455d))_0x2af19e(![]);}catch(_0x36612c){}}};var _0x10aa20=_0x17c150(_0x7df0cd(0x731));if(_0x10aa20)_0x10aa20[_0x7df0cd(0x5dc)+'ck']=function(){var _0x10eace=_0x7df0cd;if(!_0x14ed59['on'])_0x38080f(!![],![]);else{if(_0x14ed59['boxes'])_0x32e625[_0x10eace(0x8b0)](_0x38080f,![],![]);else{if(_0x32e625['GPxhZ'](_0xcf2c66))_0x32e625['IDjDd'](_0x38080f,!![],!![]);else _0x38080f(![],![]);}}};if(_0x308226[_0x7df0cd(0xa2c)](_0x17c150,_0x308226['IaZcN']))_0x308226[_0x7df0cd(0x192)](_0x17c150,_0x308226[_0x7df0cd(0x65e)])['oncli'+'ck']=function(){var _0x276049=_0x7df0cd;if(!_0x9e2c8c)return;var _0x1ba7c8=_0x9e2c8c[_0x276049(0x74c)][_0x276049(0x469)+'ay']===_0x276049(0xad2);_0x9e2c8c[_0x276049(0x74c)][_0x276049(0x469)+'ay']=_0x1ba7c8?'':_0x32e625[_0x276049(0x88c)],_0x32e625[_0x276049(0x6fb)](_0x17c150,'fold')[_0x276049(0x500)+'onten'+'t']=_0x1ba7c8?'-':'+';};return document['body']['appen'+_0x7df0cd(0xbda)+'d'](_0x1ec2f7),_0x141f50={'el':_0x1ec2f7,'st':_0xfa6b5c,'st2':_0x6b60d8,'sp':_0x585aa3,'fx':_0x4e9956,'fv':_0x404569,'esp':_0x10aa20},_0x141f50;}catch(_0x4cd824){return console[_0x7df0cd(0x5cc)](_0x7df0cd(0x437)+_0x7df0cd(0x6e9)+_0x7df0cd(0x2e5)+'rame\x20'+_0x7df0cd(0xbff)+'isabl'+'ed',_0x308226['IkXcy']+_0x36b2b2,_0x4cd824),null;}}function _0xcf2c66(){var _0x51d9e1=_0xc5af74;if(_0x51d9e1(0x1cb)===_0x51d9e1(0x1cb))try{var _0x20faea=_0x2cd0a4();return!!(_0x20faea&&_0x21b45e[_0x51d9e1(0x7d3)+_0x51d9e1(0x264)]);}catch(_0x5166a9){return![];}else{var _0x1c6241=_0x308226[_0x51d9e1(0x9b7)]['split']('|'),_0x7b7075=-0x17d4+0x626*0x1+-0x1*-0x11ae;while(!![]){switch(_0x1c6241[_0x7b7075++]){case'0':var _0x5a8142=_0x31d0c0[_0x219a9c[_0x4577bb]];continue;case'1':_0x1aeee4[_0x51d9e1(0x3b3)]=_0x5a8142['hits'];continue;case'2':_0x1aeee4['isLoc'+'al']=!!_0x21fbc4&&_0x1aeee4[_0x51d9e1(0xc4e)][_0x51d9e1(0x770)]===_0x308226[_0x51d9e1(0x8c8)]('0x',_0x1fbdfe['toStr'+_0x51d9e1(0x1aa)](0x29*-0xb7+-0x5*0x8b+0x4a*0x6f));continue;case'3':_0x1aeee4[_0x51d9e1(0x56b)+_0x51d9e1(0x7ac)+'s']=_0x5a8142[_0x51d9e1(0x56b)+_0x51d9e1(0x927)]-_0x2ab53c;continue;case'4':if(_0x1aeee4[_0x51d9e1(0xc4e)]['healt'+'h']){var _0x1e07b5=_0x313406(_0x1aeee4['refs'][_0x51d9e1(0xc73)+'h'],0x442+0x1f1*-0xf+0x18ed);_0x1aeee4['healt'+'h']=_0x1d80bd(_0x1e07b5,_0x308226['qIZNJ'],'obfI');}continue;case'5':var _0x1aeee4=_0x2c7df1(_0x308226['umiDZ'],_0x5a8142[_0x51d9e1(0x1fb)]);continue;case'6':_0x370b7d[_0x51d9e1(0x568)+'rs']['push'](_0x1aeee4);continue;}break;}}}function _0x33c57f(){var _0x1d5a75=_0xc5af74;try{var _0x177598=_0x308226[_0x1d5a75(0x50d)][_0x1d5a75(0x3c2)]('|'),_0x97e112=-0x15e6+-0xafb*0x1+0x20e1;while(!![]){switch(_0x177598[_0x97e112++]){case'0':if(_0x46b810!==_0x4394cf[_0x1d5a75(0x500)+'onten'+'t'])_0x4394cf['textC'+'onten'+'t']=_0x46b810;continue;case'1':var _0x46b810=!_0x14ed59['on']?_0x1d5a75(0xc5e)+'ff':_0x14ed59[_0x1d5a75(0xc75)]?_0x308226[_0x1d5a75(0x980)]:_0x1d5a75(0x63a)+'ap';continue;case'2':if(!_0x4394cf)return;continue;case'3':_0x4394cf['style'][_0x1d5a75(0x62e)]=_0x14ed59['on']?'#2a0f'+'1b':_0x308226['VaDeT'];continue;case'4':_0x4394cf[_0x1d5a75(0x74c)][_0x1d5a75(0x4a6)+_0x1d5a75(0x647)]=_0x14ed59['on']?_0x36b2b2:_0x1d5a75(0xa40)+_0x1d5a75(0xb9b)+'t';continue;case'5':if(_0x14ed59['boxes']&&!_0xcf2c66())_0x14ed59['boxes']=![];continue;case'6':var _0x4394cf=_0x141f50&&_0x141f50['esp'];continue;}break;}}catch(_0x212001){}}function _0x38080f(_0x5e5e75,_0x33449b){var _0x45be45=_0xc5af74;if(_0x308226[_0x45be45(0x91a)]!=='qefiK'){_0x14ed59['on']=!!_0x5e5e75,_0x14ed59['boxes']=!!_0x33449b,_0x308226['onVBk'](_0x33c57f);try{if(_0x308226[_0x45be45(0xa89)]('QRsNw',_0x308226['kVaoP'])){var _0x5f0d7a=_0x3e1d96();if(_0x5f0d7a&&_0x5f0d7a['el'])_0x5f0d7a['el']['style'][_0x45be45(0x469)+'ay']=_0x14ed59['on']?'':'none';var _0x33b4b7=_0x49a485;if(_0x33b4b7&&_0x33b4b7['cv'])_0x33b4b7['cv'][_0x45be45(0x74c)][_0x45be45(0x469)+'ay']=_0x14ed59['on']&&_0x14ed59[_0x45be45(0xc75)]?'':_0x308226[_0x45be45(0x493)];}else{var _0x575cc6=_0x2a620e(_0x5f4d50,_0x1b12ea,_0x116c2a);if(!_0x575cc6)return null;_0x575cc6['o']=_0x2ded87,_0x575cc6['k']=_0x5d11ff;var _0xd7ecc0=_0x308226['dlqCw'](_0x692d18,[_0x575cc6]);if(!_0xd7ecc0['rows']['lengt'+'h'])return null;return _0xd7ecc0[_0x45be45(0xbf9)][-0x29*-0x73+0x671*-0x5+-0xdca*-0x1];}}catch(_0x4072c3){}}else{var _0x2e0df2=_0x308226['zVjpB'](_0x362bca);if(!_0x2e0df2||!_0x2e0df2[_0x45be45(0x851)+'Look'])return _0xf19c44['ident'+_0x45be45(0x264)]=![],_0x569464[_0x45be45(0xb67)]=_0x308226[_0x45be45(0x18b)],null;var _0x179d92=_0x3dc9f2(_0x2e0df2[_0x45be45(0x851)+'Look'],0xf32+0x2703*-0x1+0x17e1),_0x3896e1=_0x3883ec(_0x179d92+_0x3bbb81,'f32'),_0x2fc724=_0xc074af(_0x308226[_0x45be45(0x2aa)](_0x179d92,_0x275b4e),_0x45be45(0xc17));_0xa7c365[_0x45be45(0x6c8)+'w']=_0x3896e1,_0x453547[_0x45be45(0xad8)+'tch']=_0x2fc724;if(_0x308226[_0x45be45(0xa89)](typeof _0x3896e1,'numbe'+'r')||!_0x200589(_0x3896e1)||typeof _0x2fc724!==_0x45be45(0x945)+'r'||!_0x308226[_0x45be45(0x192)](_0x363199,_0x2fc724))return _0x3719ac['ident'+'ified']=![],_0x32c44a['why']='Mouse'+'Look\x20'+'float'+'s\x20unr'+'eadab'+'le',null;if(_0x2fc724<-(-0xa*0x91+0x5e+0x5a6)||_0x2fc724>0x11f3+-0x10f0+0x1*-0xa9)return _0x56a76e[_0x45be45(0x7d3)+_0x45be45(0x264)]=![],_0x3485b4['why']=_0x308226['IARKu']+_0x303562[_0x45be45(0x647)](_0x2fc724)+('\x20is\x20n'+_0x45be45(0x295)+_0x45be45(0x59c)),null;return _0x5172e7['why']='',_0x43b449[_0x45be45(0x7d3)+_0x45be45(0x264)]=!![],_0x777e41['pitch']=_0x2fc724+_0x373192[_0x45be45(0x59c)+_0x45be45(0x7a4)],_0x424b4e[_0x45be45(0x889)]=_0x3896e1+_0xcd6328['yawOf'+'f'],_0x2cd390;}}var _0x4023d5=-0x2*0x305+0x40a+0x202;function _0x254d50(_0x20ab34,_0x53f0e0){var _0x7c8125=_0xc5af74,_0xb33181=_0x172334['on'];_0x172334['on']=!!_0x20ab34;_0x172334['on']&&!_0xb33181&&(_0x308226[_0x7c8125(0x3dc)](_0x53f0e0,undefined)||_0x308226['CglZE'](_0x53f0e0,null)||_0x308226['yPYNu'](Number,_0x53f0e0)===-0x113e+-0xded+-0x31e*-0xa)&&(_0x53f0e0=_0x4023d5);_0x172334[_0x7c8125(0x922)+'r']=Math['min'](_0x172334[_0x7c8125(0x571)],Math[_0x7c8125(0x571)](_0x172334['min'],Number(_0x53f0e0)||0x1*0x25f9+-0x15b5+-0x1043));if(!_0x172334['on'])_0x515c3c={};var _0x52b55e=_0x308226[_0x7c8125(0x25c)](_0x5c53bc);if(_0x52b55e){if(_0x308226[_0x7c8125(0x1b7)](_0x7c8125(0x3b9),'BPzOC')){var _0x27c85b=_0x2030eb[_0x7c8125(0x19c)];if(!_0x27c85b||!_0x27c85b['style'])return;_0x575c64[_0x7c8125(0x54d)]?(_0x27c85b[_0x7c8125(0x74c)][_0x7c8125(0x29d)]=_0x528fe5[_0x7c8125(0x54d)]['x']+'px',_0x27c85b[_0x7c8125(0x74c)][_0x7c8125(0x613)]=_0x3403d0[_0x7c8125(0x54d)]['y']+'px',_0x27c85b[_0x7c8125(0x74c)]['right']='auto',_0x27c85b[_0x7c8125(0x74c)][_0x7c8125(0x7b8)+'m']='auto'):(_0x27c85b['style']['left']='auto',_0x27c85b[_0x7c8125(0x74c)][_0x7c8125(0x613)]=_0x7c8125(0xa29),_0x27c85b[_0x7c8125(0x74c)]['right']='24px',_0x27c85b['style']['botto'+'m']=_0x308226[_0x7c8125(0x2ce)]);}else{_0x52b55e['sp']&&(_0x52b55e['sp'][_0x7c8125(0x500)+_0x7c8125(0x696)+'t']=_0x172334['on']?_0x7c8125(0x501)+'\x20ON':'Speed'+'\x20off',_0x52b55e['sp']['style'][_0x7c8125(0x4a6)+_0x7c8125(0x647)]=_0x172334['on']?_0x36b2b2:_0x7c8125(0xa40)+'paren'+'t',_0x52b55e['sp']['style'][_0x7c8125(0x62e)]=_0x172334['on']?_0x7c8125(0xb7e)+'1b':_0x308226[_0x7c8125(0xbf7)]);if(_0x52b55e['fx'])_0x52b55e['fx']['value']=String(_0x172334[_0x7c8125(0x922)+'r']);if(_0x52b55e['fv'])_0x52b55e['fv']['textC'+_0x7c8125(0x696)+'t']=_0x172334[_0x7c8125(0x922)+'r'][_0x7c8125(0xa5d)+'ed'](0xd*0x1bd+-0x509+0x1f*-0x91)+'x';}}}function _0x46c10d(_0x2c662c){var _0x40d00d=_0xc5af74;if(_0x308226[_0x40d00d(0x757)](_0x308226[_0x40d00d(0x5aa)],_0x40d00d(0x521))){var _0x2c7467=_0x5c53bc();if(!_0x2c7467||!_0x2c7467['st'])return;try{if(_0x40d00d(0x832)!=='DrGvw'){if(!_0x308226['yglph'](_0x4b087d)&&!_0x1794da){if(_0x40d00d(0x76b)!==_0x308226['QfaHS'])_0x308226[_0x40d00d(0xb5c)](_0x337a9b);else{if(_0x2c7467['el'])_0x2c7467['el'][_0x40d00d(0x74c)][_0x40d00d(0x469)+'ay']=_0x308226[_0x40d00d(0x493)];return;}}if(_0x2c7467['el'])_0x2c7467['el']['style'][_0x40d00d(0x469)+'ay']='';var _0x28c134=Object[_0x40d00d(0x33f)](_0x2c662c&&_0x2c662c[_0x40d00d(0x611)+_0x40d00d(0x5bb)]||{})[_0x40d00d(0x687)+'h'],_0x362e0b=_0x2c662c&&_0x2c662c[_0x40d00d(0x731)]||null,_0x2ba88a=_0x362e0b?_0x362e0b['enemy'+_0x40d00d(0x8ee)]||-0x52*0x76+-0x12*-0x33+-0x1*-0x2236:-0x1b7+-0x43*0x6c+0x1dfb,_0x1199ca=_0x362e0b?_0x362e0b[_0x40d00d(0x959)+_0x40d00d(0x84e)]||0x9f*-0x1f+0x338*-0x7+0x29c9:-0x1656+-0x6b4*0x1+0x1d0a,_0x39fef0=_0x184ee1?_0x308226['cIIwL'](_0x184ee1[_0x40d00d(0x267)+'r'][_0x40d00d(0xb28)+'ength'],-0xa31b3*0x1+0x1*0x1ce17b+-0x4*0xabf2)['toFix'+'ed'](0x2*-0x995+0x15bf+-0x295)+'MB':_0x308226[_0x40d00d(0xa10)],_0x3392fc=_0x308226[_0x40d00d(0x978)](_0x308226[_0x40d00d(0x792)]('v'+(_0x2c662c&&_0x2c662c[_0x40d00d(0x354)+'on']||_0x48e762)+(_0x40d00d(0xa43)+_0x40d00d(0xa19)),_0x2c662c&&_0x2c662c['hooks'+'Appli'+'ed']||-0x9ab+0x3*-0x7cf+0x2118)+'/'+(_0x2c662c&&_0x2c662c['hooks'+_0x40d00d(0x548)]||0x1f89+0x2*0x12c8+-0x4519)+(_0x40d00d(0x8c6)+'s\x20')+_0x28c134,_0x40d00d(0x668)+'\x20')+_0x39fef0+('\x20\x20wri'+'tes\x20')+_0x5f5d15;_0x2c7467['st']['textC'+'onten'+'t']=_0x3392fc;var _0x3fc862=_0x2c7467[_0x40d00d(0x496)];_0x3fc862&&('JRaTs'!==_0x308226[_0x40d00d(0x499)]?(_0x3fc862['textC'+'onten'+'t']=_0x308226[_0x40d00d(0x735)](_0x2ba88a,0x585+0x8b*0x7+-0x2*0x4a9)?_0x308226[_0x40d00d(0x70c)](_0x308226['sxJjM']+_0x2ba88a+(_0x1199ca?_0x308226[_0x40d00d(0x258)](_0x308226[_0x40d00d(0x672)](_0x40d00d(0x79e),_0x1199ca),_0x40d00d(0x7e0)):''),_0x362e0b&&_0x362e0b[_0x40d00d(0x64b)+'a']?'\x20\x20cam'+'\x20'+_0x362e0b[_0x40d00d(0x64b)+_0x40d00d(0xb99)]:_0x308226[_0x40d00d(0x84c)]):_0x40d00d(0xc1d)+_0x40d00d(0xa77)+_0x40d00d(0x586)+_0x40d00d(0x6af)+_0x40d00d(0x4bc)+_0x40d00d(0x87e)+(_0x362e0b&&_0x362e0b[_0x40d00d(0x64b)+'a']?_0x362e0b[_0x40d00d(0x64b)+'aFrom']:'-'),_0x3fc862[_0x40d00d(0x74c)]['color']=_0x308226['uimQH'](_0x2ba88a,0x930+0x216+-0xb46)?'#7ee0'+'a8':_0x40d00d(0x451)+'99'):_0x3d7ab3=_0x308226[_0x40d00d(0x1b3)](_0x30c6a0));}else{var _0x32a77a=_0x5431ec();if(!_0x32a77a)return _0x30e253;if(_0x32a77a[_0x40d00d(0x9bd)+'et'][_0x40d00d(0x9a8)])return _0x32a77a['api'];try{return _0x134cd5(_0x32a77a);}catch(_0x3b5782){return _0x32a77a[_0x40d00d(0x9bd)+'et'][_0x40d00d(0x9a8)]='1',_0x32a77a[_0x40d00d(0x9a8)]=_0x5eca3b,_0xac6935[_0x40d00d(0x5cc)](_0x308226['PYxpb'],_0x40d00d(0x62e)+':'+_0x358986,_0x3b5782),_0x223b94;}}}catch(_0x5c3c84){}}else return{'pos':null,'posAt':null,'inBand':0x0,'cluster':0x0,'reach':0x0};}window['addEv'+_0xc5af74(0xbdf)+'stene'+'r'](_0x308226[_0xc5af74(0x3ee)],function(_0x458601){var _0x1a15ef=_0xc5af74;if('aigaH'===_0x308226[_0x1a15ef(0x2ad)])try{_0x2a5ed6[_0x1a15ef(0x555)+'em'](_0x253bfa,_0x59d89c['strin'+_0x1a15ef(0x392)]({'y':_0x55c3f0[_0x1a15ef(0x6ea)+'f'],'p':_0x3a6a63['pitch'+'Off']}));}catch(_0x490053){}else{if(!_0x458601)return;try{if('nQTnu'===_0x308226[_0x1a15ef(0x75b)])return _0x5f5189['v']!==_0x4c3eb9&&_0x385680(_0x445845['v']);else{if(_0x458601['code']==='F9'){if('qFYPx'===_0x308226[_0x1a15ef(0xb45)])_0x32d594=_0x308226['okmpT'](_0x2d4186,_0x3c5a00),_0x17f9fe=_0x5176f7+_0x9bd6cd;else{_0x458601['preve'+_0x1a15ef(0x97f)+'ault'](),_0xb415d2('snaps'+_0x1a15ef(0xc14));return;}}if(_0x458601[_0x1a15ef(0x3aa)]==='F7'){if(_0x308226[_0x1a15ef(0x35f)]!==_0x1a15ef(0x47d)){_0x21ff44['open']=!!_0x1751e6;var _0x20740e=_0x308226['rGhvn'](_0x4159cb);if(!_0x20740e)return;_0x20740e['class'+_0x1a15ef(0x5ec)]=_0x1a15ef(0xbcc)+'nel'+(_0x4b6f3d[_0x1a15ef(0x373)]?_0x1a15ef(0x40b)+'n':'');if(_0x2518e9[_0x1a15ef(0x856)])_0x1fec9a[_0x1a15ef(0x856)]['style']['opaci'+'ty']=_0x147470[_0x1a15ef(0x373)]?'1':'.5';if(_0x384840['open']){_0x308226[_0x1a15ef(0x864)](_0x2ca366,_0x30963b['cat']);try{var _0x1c96ee=_0x13f8fe[_0x1a15ef(0xa67)+'Heigh'+'t']||0x166b+-0x97*-0x2b+-0x2ca8;if(_0x1c96ee<0x211d*-0x1+-0x7cd*-0x1+0x2*0xdde)_0x2421fc(![]);}catch(_0x3b3c8e){}}}else{_0x458601[_0x1a15ef(0x95d)+_0x1a15ef(0x97f)+_0x1a15ef(0xb2f)](),_0x308226['kouXB'](_0x254d50,!_0x172334['on'],_0x172334['facto'+'r']);return;}}if(_0x458601[_0x1a15ef(0x3aa)]==='F8'){_0x458601['preve'+_0x1a15ef(0x97f)+'ault'](),_0x254d50(_0x172334['on'],_0x172334[_0x1a15ef(0x922)+'r']+(0x1a90+-0x125+-0x196b+0.5));return;}if(_0x458601[_0x1a15ef(0x3aa)]==='F6'){if(_0x1a15ef(0x8d1)!==_0x1a15ef(0x8d1))try{return _0x308226['eerla'](_0x514dc0);}catch(_0x162dfd){return{'version':_0x176880,'when':new _0x5535af()['toISO'+_0x1a15ef(0xa16)+'g'](),'elapsedMs':_0x308226['oonNH'](_0x52a57c[_0x1a15ef(0x682)](),_0x5ea691),'host':_0x4cd035,'uwmk':!!(_0x1fa8a1[_0x1a15ef(0x878)+_0x1a15ef(0x3b4)+_0x1a15ef(0x739)]&&_0x3ce561[_0x1a15ef(0x878)+_0x1a15ef(0x3b4)+'dkit'][_0x1a15ef(0xb86)+'me']),'il2CppContext':![],'arm':_0x522476,'hooksTotal':_0x15306b[_0x1a15ef(0x687)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x561221(_0x162dfd&&_0x162dfd['messa'+'ge']||_0x162dfd)};}else{_0x458601[_0x1a15ef(0x95d)+_0x1a15ef(0x97f)+'ault'](),_0x254d50(_0x172334['on'],_0x308226['BjIyk'](_0x172334[_0x1a15ef(0x922)+'r'],0x595*0x5+0x2154+-0x3d3d*0x1+0.5));return;}}if(_0x308226[_0x1a15ef(0xa9d)](_0x458601['code'],'Inser'+'t')){if(_0x308226['RrHGs']!==_0x308226['ylMHt']){_0x458601['preve'+'ntDef'+_0x1a15ef(0xb2f)](),_0x12bf0e(!_0x1faeb2[_0x1a15ef(0x373)]);return;}else{var _0x3bab4f='';for(var _0x1bfdc3=0x493+-0x491+0x1*-0x2;_0x1bfdc3<arguments[_0x1a15ef(0x687)+'h'];_0x1bfdc3++){var _0x4e16e5=arguments[_0x1bfdc3];if(typeof _0x4e16e5==='strin'+'g')_0x3bab4f+=_0x4e16e5;else{if(_0x4e16e5&&_0x4e16e5[_0x1a15ef(0x2ff)+'ge'])_0x3bab4f+=_0x4e16e5['messa'+'ge'];}}if(_0x308226[_0x1a15ef(0x957)](_0x3bab4f[_0x1a15ef(0x1e7)+'Of'](_0x1c9611),-(0x1f*-0xbf+0x91f*-0x1+0x2041)))return _0x48bb14[_0x1a15ef(0x976)](_0xdbe574,arguments);if(_0x308226[_0x1a15ef(0x219)](_0x3bab4f[_0x1a15ef(0x1e7)+'Of'](_0x1a15ef(0x878)+_0x1a15ef(0x3b4)+_0x1a15ef(0x739)),-(0x1*-0xc6d+0x2*0x13f+0x9f0))){var _0x5af2fe=_0x3bab4f[_0x1a15ef(0x750)](0x2c4+-0xcde+-0x50d*-0x2,-0x23a9+-0x1e7a+0x434f);if(_0x1a6241[_0x1a15ef(0x1e7)+'Of'](_0x5af2fe)===-(0x206b+0x1*-0xca3+0x53*-0x3d)&&_0x5e3649['lengt'+'h']<0x1dbb+0x73e*0x3+-0x1*0x3339)_0x4b94e0[_0x1a15ef(0x3f8)](_0x5af2fe);}}}if(_0x458601[_0x1a15ef(0x3aa)]===_0x1a15ef(0x480)+'etRig'+'ht'){_0x458601['preve'+'ntDef'+'ault'](),_0x4e9310['fov']=Math['min'](-0x95d+-0x1e+0xa07,_0x4e9310[_0x1a15ef(0x63b)]+(-0x12bd+0x17b7+-0x8*0x9f)),_0x32cae7();return;}if(_0x308226[_0x1a15ef(0x5c5)](_0x458601[_0x1a15ef(0x3aa)],_0x308226[_0x1a15ef(0x3a1)])){if(_0x308226['ByqnM']('TAxVW',_0x308226[_0x1a15ef(0x800)]))_0x7a18c6[_0x1a15ef(0x555)+'em'](_0x366a09,_0x1402ca(_0x20a79b[_0x1a15ef(0x63b)]));else{_0x458601[_0x1a15ef(0x95d)+_0x1a15ef(0x97f)+'ault'](),_0x4e9310[_0x1a15ef(0x63b)]=Math['max'](-0x3f*-0x6+-0x1a34+0x18d8,_0x4e9310[_0x1a15ef(0x63b)]-(-0x1ed0+-0x527*-0x5+0x103*0x5)),_0x32cae7();return;}}}}catch(_0x237d4a){}}},!![]);var _0x14ed59={'on':!![],'span':0x50,'boxes':![]};function _0x248de2(){var _0x2dc307=_0xc5af74,_0xcbdca8=_0x2b5089[_0x2dc307(0x2ae)+'nNetw'+_0x2dc307(0x20c)+'nc']||{},_0x16d410=Object[_0x2dc307(0x33f)](_0xcbdca8);for(var _0x6e3afe=-0x67*-0x1+0x126d+-0x12d4;_0x6e3afe<_0x16d410[_0x2dc307(0x687)+'h'];_0x6e3afe++){if(_0x308226[_0x2dc307(0x780)](_0x308226['KRGaA'],_0x308226['zJCCW'])){var _0x532b7b=_0xcbdca8[_0x16d410[_0x6e3afe]][_0x2dc307(0x1fb)],_0x2340e8=_0x5897db(_0x308226['wPjYx'](_0x532b7b,0x2379+0x73*0x2b+-0x369a*0x1),_0x2dc307(0xb2e));if(!_0x2340e8)continue;var _0x529485=_0x3c44e9['Mouse'+_0x2dc307(0xaf3)]||[],_0x510d5b={'mouseLook':_0x308226['wQlRY']('0x',(_0x2340e8>>>-0x65f*-0x2+0x3*0x45f+-0x19db)[_0x2dc307(0x8d4)+'ing'](-0x5*0x4b3+0x1bf8+-0x469)),'floats':{},'camera':null,'vec2':null};for(var _0x338da1=0x2687+0x8*-0x469+-0x33f;_0x338da1<_0x529485[_0x2dc307(0x687)+'h'];_0x338da1++){if(_0x308226[_0x2dc307(0x453)]===_0x308226[_0x2dc307(0xac1)]){var _0x2d54e6=_0x1302c2['creat'+_0x2dc307(0x972)+_0x2dc307(0x964)](_0x10f4f1);if(_0x1a66fd)_0x2d54e6['class'+_0x2dc307(0x5ec)]=_0x24d05a;if(_0x4ff587!=null)_0x2d54e6[_0x2dc307(0xa67)+'HTML']=_0x331bf1;return _0x2d54e6;}else{if(_0x308226[_0x2dc307(0x5a2)](_0x529485[_0x338da1][-0x426+0x3f6+0x31],_0x2dc307(0xc17)))continue;_0x510d5b[_0x2dc307(0x45e)+'s'][_0x308226[_0x2dc307(0x2fb)]('0x',_0x529485[_0x338da1][-0x25cf+-0x23f+-0x6ad*-0x6]['toStr'+_0x2dc307(0x1aa)](0x77a+-0x156b+0xe01))]=_0x5897db(_0x2340e8+_0x529485[_0x338da1][0x37a+-0x157*0x14+0x1752],'f32');}}var _0x3e2488=_0x5897db(_0x2340e8+(0x2606+0x2bf*0xe+-0x404*0x13),_0x308226['BTrnJ']);if(_0x3e2488)_0x510d5b[_0x2dc307(0x64b)+'a']=_0x308226[_0x2dc307(0x751)]('0x',(_0x3e2488>>>-0x1d8a+-0x58*0x1+0x1de2)[_0x2dc307(0x8d4)+'ing'](0x1f6*-0xb+-0x1ff8+0x359a));var _0x5c8ce8=_0x2b05eb(_0x2340e8,-0x17f*-0x5+0x136f*0x1+0x1aa2*-0x1,-0xa9b+-0x11bb+-0xe2c*-0x2);if(_0x5c8ce8)_0x510d5b['vec2']=_0x5c8ce8;return _0x510d5b;}else{var _0x3f8705=_0x5640b8[_0x2dc307(0x9a3)+'eElem'+'ent']('div');_0x3f8705['id']=_0x308226['crDcq'],_0x3f8705[_0x2dc307(0x74c)]['cssTe'+'xt']=_0x308226[_0x2dc307(0xc46)](_0x308226['iismE'](_0x308226[_0x2dc307(0xa9a)]('posit'+_0x2dc307(0x95e)+_0x2dc307(0x998)+'left:'+_0x2dc307(0x1e5)+_0x2dc307(0x386)+_0x2dc307(0xb14)+_0x2dc307(0xc71)+_0x2dc307(0x4f7)+_0x2dc307(0xc5c)+_0x2dc307(0x334)+_0x2dc307(0x679)+'point'+'er;us'+_0x2dc307(0xc86)+_0x2dc307(0xa24)+'none;',_0x308226['SBbJB'])+_0x145f58,';'),'borde'+_0x2dc307(0xa70)+'ius:9'+'99px;'+_0x2dc307(0xc62)+_0x2dc307(0x5d1)+'x\x2012p'+'x;fon'+'t:11p'+'x/1.4'+'\x20ui-m'+'onosp'+_0x2dc307(0x6e6)+_0x2dc307(0x9de)+'as,mo'+_0x2dc307(0x1b1)+'ce;'),_0x3f8705['textC'+_0x2dc307(0x696)+'t']='sakur'+'a',_0x3f8705['oncli'+'ck']=function(){_0x34de6f(![]),_0x49d767();},_0x6dbaea[_0x2dc307(0x2d0)]['appen'+_0x2dc307(0xbda)+'d'](_0x3f8705);}}return null;}var _0x3b4150=_0x308226[_0xc5af74(0x2f4)],_0x37e9a9=_0xc5af74(0xa8c)+'a-sw-'+'view-'+_0xc5af74(0x483),_0x4e9310={'pitch':null,'yaw':null,'pitchOff':0x0,'yawOff':0x0,'fov':0x5a,'known':![]};try{if(_0xc5af74(0x375)===_0x308226['rJVqq']){_0x5506ea(![]),_0x5887a5(_0x12eb66,0x1622+-0x1c24*-0x1+-0x311a);return;}else{var _0x51e2b1=localStorage[_0xc5af74(0x7e9)+'em'](_0x3b4150);if(_0x51e2b1)_0x4e9310['fov']=Math[_0xc5af74(0x73d)](0x26c0+0xda2+0x2*-0x19eb,Math[_0xc5af74(0x571)](-0x1*0xf1b+0x1*0x5c6+0x973,_0x308226[_0xc5af74(0xc48)](parseFloat,_0x51e2b1)||0x35*0x9b+0x1*0xc9f+-0x2c5c));}}catch(_0x373c94){}try{var _0x4a90e9=localStorage['getIt'+'em'](_0x37e9a9);if(_0x4a90e9){var _0x180509=JSON[_0xc5af74(0x381)](_0x4a90e9);if(typeof _0x180509['y']===_0x308226[_0xc5af74(0x874)]&&_0x308226[_0xc5af74(0x864)](isFinite,_0x180509['y']))_0x4e9310[_0xc5af74(0x6ea)+'f']=_0x180509['y'];if(_0x308226['VFqjd'](typeof _0x180509['p'],_0xc5af74(0x945)+'r')&&_0x308226['SAMYm'](isFinite,_0x180509['p']))_0x4e9310[_0xc5af74(0x59c)+_0xc5af74(0x7a4)]=_0x180509['p'];}}catch(_0x2755e9){}function _0x32cae7(){var _0x2fc3b5=_0xc5af74;try{localStorage[_0x2fc3b5(0x555)+'em'](_0x3b4150,_0x308226['sonJA'](String,_0x4e9310['fov']));}catch(_0x1eb6cc){}}function _0x3ad637(){var _0x382d3f=_0xc5af74;if(_0x308226[_0x382d3f(0xa9d)](_0x308226[_0x382d3f(0x8f3)],_0x308226[_0x382d3f(0x355)]))return null;else try{localStorage['setIt'+'em'](_0x37e9a9,JSON[_0x382d3f(0x412)+_0x382d3f(0x392)]({'y':_0x4e9310['yawOf'+'f'],'p':_0x4e9310['pitch'+'Off']}));}catch(_0x41f5c4){}}var _0x11d9e2=-0x1719+0x6*0x63d+-0x1*0xe2d,_0x243fb8=-0x22a5+0x1b14+0x7ad,_0x21b45e={'pitch':null,'yaw':null,'identified':![],'why':'no\x20Mo'+'useLo'+'ok\x20ye'+'t'};function _0x2cd0a4(){var _0x26518d=_0xc5af74,_0x4997ea={'zYhZm':function(_0x2083cd,_0x2b89f6){return _0x2083cd<_0x2b89f6;},'uTrkT':function(_0x5c5afb,_0x1c5b86){var _0x1a0007=_0x45e7;return _0x308226[_0x1a0007(0x818)](_0x5c5afb,_0x1c5b86);}},_0x21c22d=_0x248de2();if(!_0x21c22d||!_0x21c22d[_0x26518d(0x851)+'Look'])return _0x26518d(0x715)!=='kehHu'?(_0x21b45e['ident'+_0x26518d(0x264)]=![],_0x21b45e['why']='no\x20Mo'+'useLo'+'ok\x20ye'+'t',null):(_0x1a0f9e[_0x26518d(0x7de)+'d']++,_0x40d8f1[_0x26518d(0xbfe)+_0x26518d(0xa15)]=_0x432844['lastE'+_0x26518d(0xa15)]||_0x372e79(_0x14f57c&&_0x9c9c25['messa'+'ge']||_0x4dbf1a)['slice'](0x1*-0xed1+0x9c*-0xf+0x1*0x17f5,-0x252f+0x1696+0x7*0x227),null);var _0x4a3315=parseInt(_0x21c22d['mouse'+_0x26518d(0xaf3)],-0x2157+0x1228+-0x3*-0x515),_0x5bc538=_0x308226[_0x26518d(0x343)](_0x5897db,_0x4a3315+_0x11d9e2,_0x26518d(0xc17)),_0x1397c2=_0x308226[_0x26518d(0x306)](_0x5897db,_0x308226['TWsgk'](_0x4a3315,_0x243fb8),_0x26518d(0xc17));_0x21b45e[_0x26518d(0x6c8)+'w']=_0x5bc538,_0x21b45e[_0x26518d(0xad8)+_0x26518d(0x47f)]=_0x1397c2;if(typeof _0x5bc538!==_0x26518d(0x945)+'r'||!isFinite(_0x5bc538)||_0x308226[_0x26518d(0x68e)](typeof _0x1397c2,'numbe'+'r')||!isFinite(_0x1397c2)){if(_0x26518d(0x6b9)===_0x308226[_0x26518d(0xc15)])return _0x21b45e[_0x26518d(0x7d3)+'ified']=![],_0x21b45e[_0x26518d(0xb67)]=_0x26518d(0x576)+_0x26518d(0xbf8)+_0x26518d(0x45e)+_0x26518d(0xb0f)+_0x26518d(0xa1b)+'le',null;else{var _0x387b86=-0xae6+0x832*-0x3+0x237c;for(var _0x6f4933=-0x1b5*0x10+0x371+-0x2a7*-0x9;_0x4997ea[_0x26518d(0x9c5)](_0x6f4933,_0x4314ab[_0x26518d(0x687)+'h']);_0x6f4933++){if(_0x2d944b[_0x6f4933][_0x26518d(0x30c)]&&_0x4997ea[_0x26518d(0x191)](_0x7d9872[_0x6f4933][_0x26518d(0x30c)]['table'+_0x26518d(0xb66)],_0x20ad32))_0x387b86++;}return _0x387b86;}}if(_0x1397c2<-(0xff+0xabd+0x5e*-0x1f)||_0x308226['vglmf'](_0x1397c2,-0xe5d*-0x1+-0x169c+0x899)){if(_0x26518d(0x73e)===_0x26518d(0x9c1)){var _0x1205f9=_0x36a165[_0x26518d(0x976)](this,arguments);try{if(_0x1205f9&&typeof _0x1205f9[_0x26518d(0xa96)]===_0x308226[_0x26518d(0xac5)])_0x1205f9[_0x26518d(0xa96)](_0x305578,function(){});else _0xf36331(_0x1205f9);}catch(_0x1db05f){}return _0x1205f9;}else return _0x21b45e[_0x26518d(0x7d3)+_0x26518d(0x264)]=![],_0x21b45e[_0x26518d(0xb67)]=_0x308226[_0x26518d(0x4c8)](_0x308226['IARKu'],Math['round'](_0x1397c2))+('\x20is\x20n'+'ot\x20a\x20'+_0x26518d(0x59c)),null;}return _0x21b45e['why']='',_0x21b45e['ident'+_0x26518d(0x264)]=!![],_0x21b45e[_0x26518d(0x59c)]=_0x1397c2+_0x4e9310['pitch'+_0x26518d(0x7a4)],_0x21b45e[_0x26518d(0x889)]=_0x308226[_0x26518d(0xa9a)](_0x5bc538,_0x4e9310[_0x26518d(0x6ea)+'f']),_0x21b45e;}function _0x407a4a(_0x38796b,_0x3bff70,_0x3104bd,_0x5bc8aa){var _0x188371=_0xc5af74,_0x57421f=_0x2cd0a4();if(!_0x57421f)return null;var _0x4abb56=_0x57421f['pitch']*Math['PI']/(-0x3*-0x90e+0x62c+-0x20a2),_0x503be4=_0x308226[_0x188371(0xb6b)](_0x57421f[_0x188371(0x889)]*Math['PI'],0x1*-0x1789+-0x3*0xc13+0x3c76),_0x22dbb7=Math[_0x188371(0x2e3)](_0x4abb56),_0x37c821=_0x308226[_0x188371(0xc49)](Math['sin'](_0x503be4),_0x22dbb7),_0x5c87de=-Math['sin'](_0x4abb56),_0x59206c=Math['cos'](_0x503be4)*_0x22dbb7,_0x360a6c=_0x59206c,_0x3a1b28=0x7d8+-0x11*-0xfa+-0x1*0x1872,_0x2bf100=-_0x37c821,_0x37e987=_0x3bff70[0xbfc+0xae*0x1a+-0x1da8]-_0x38796b[0x9dd+-0x7f7+-0x1e6*0x1],_0x576660=_0x3bff70[-0x2057+-0x16*0x7+0x1079*0x2]-_0x38796b[-0x329*0x9+-0x1773+0x33e5],_0x2e68da=_0x3bff70[-0x6df+0x6*-0x32b+-0x19e3*-0x1]-_0x38796b[-0x73*-0x37+0x158f*0x1+0x1*-0x2e42],_0x4c3ceb=_0x308226['OVHDO'](_0x37e987,_0x37c821)+_0x308226['OVHDO'](_0x576660,_0x5c87de)+_0x2e68da*_0x59206c;if(_0x4c3ceb<=0x133*-0xa+0x1*-0x5e5+0x13*0xf1+0.05)return null;var _0x20aa18=_0x308226['jKrcb'](_0x308226['UPjDI'](_0x37e987,_0x360a6c),_0x576660*_0x3a1b28)+_0x308226[_0x188371(0x7d9)](_0x2e68da,_0x2bf100),_0x23d2ea=_0x308226[_0x188371(0x6ca)](_0x37e987,_0x308226['RZPSR'](_0x3a1b28,_0x59206c)-_0x2bf100*_0x5c87de)+_0x576660*(_0x308226[_0x188371(0x6ca)](_0x2bf100,_0x37c821)-_0x308226['WZLVU'](_0x360a6c,_0x59206c))+_0x2e68da*(_0x360a6c*_0x5c87de-_0x308226[_0x188371(0xc0f)](_0x3a1b28,_0x37c821)),_0x149728=_0x3104bd/_0x5bc8aa,_0x5a3391=_0x308226[_0x188371(0x72e)](_0x4e9310[_0x188371(0x63b)],Math['PI'])/(-0x198+0xc3*-0xa+0x36*0x2f),_0x57803a=Math[_0x188371(0x52e)](_0x5a3391/(0x733+0x1ab3+-0x21e4)),_0x4f5e53=_0x20aa18/_0x4c3ceb/(_0x57803a*_0x149728),_0x4950c9=_0x308226['rsBHY'](_0x23d2ea,_0x4c3ceb)/_0x57803a;if(_0x4f5e53<-(-0x27e+-0x1603*-0x1+-0x9c2*0x2+0.6000000000000001)||_0x4f5e53>0x16*0x81+-0x264b+0x56*0x51+0.6000000000000001||_0x4950c9<-(-0x89+-0x2*0xee8+0xe*0x22b+0.6000000000000001)||_0x308226[_0x188371(0x6bf)](_0x4950c9,-0x25c6+0x1*0x2631+-0x35*0x2+0.6000000000000001))return null;return{'x':_0x308226[_0x188371(0x6ca)](_0x4f5e53*(0x2422+-0x2451+0x2f+0.5)+(-0x837+-0x1*0x1a2d+-0x8e*-0x3e+0.5),_0x3104bd),'y':_0x308226[_0x188371(0x7f3)](_0x308226[_0x188371(0x211)](0x18ee+0x750+-0x203e+0.5,_0x308226['mzRBW'](_0x4950c9,-0x1*0x184c+-0x25ff*0x1+0x3e4b+0.5)),_0x5bc8aa),'z':_0x4c3ceb};}var _0x1faeb2={'open':![],'cat':_0x308226[_0xc5af74(0x4b6)],'built':![],'root':null,'cols':null,'head':null,'sub':null,'syncs':[],'pos':null},_0x352100='sakur'+_0xc5af74(0xb7b)+'menu-'+_0xc5af74(0x54d),_0x1794da=null,_0x3ff3f4=[{'id':_0xc5af74(0x83f)+'t','label':_0xc5af74(0x5b1)},{'id':_0xc5af74(0xc31)+'ls','label':_0xc5af74(0x911)},{'id':'value'+'s','label':_0x308226['ZDohO']},{'id':_0x308226[_0xc5af74(0x7c8)],'label':_0x308226['jwAia']}],_0x559e35=_0x308226['uuRWV'](_0x308226[_0xc5af74(0x978)](_0x308226[_0xc5af74(0x51a)](_0x308226['chUZD'](_0x308226['YxZyZ'](_0x308226['YFFrq'](_0x308226['ruRyd'](_0x308226[_0xc5af74(0xbe8)](_0x308226[_0xc5af74(0x979)](_0x308226['Elloe'](_0x308226[_0xc5af74(0x2c5)](_0x308226[_0xc5af74(0x23a)](_0x308226['XsGhr'](_0x308226[_0xc5af74(0xc1b)](_0x308226['QhVVK'](_0x308226[_0xc5af74(0xa28)](_0x308226['xVhGe'](_0x308226[_0xc5af74(0x1c2)](_0x308226[_0xc5af74(0x554)](_0x308226['drQaI'](_0x308226[_0xc5af74(0x319)](_0x308226['mhYRs'](_0x308226['wRgCG'](_0x308226['JhPLG'](_0x308226[_0xc5af74(0x72d)](_0x308226['aXkko']+(_0xc5af74(0x5e5)+'ra-me'+'nu-ro'+_0xc5af74(0x38b)+_0xc5af74(0x9ad)+'l{pos'+'ition'+':fixe'+_0xc5af74(0xade)+_0xc5af74(0x97a)+'px;bo'+'ttom:'+_0xc5af74(0xbc5)+_0xc5af74(0x2d6)+':min('+'620px'+_0xc5af74(0x903)+_0xc5af74(0xb23)+_0xc5af74(0x281)+'8px))'+';max-'+_0xc5af74(0x305)+_0xc5af74(0xafa)+_0xc5af74(0xc06)+'x,cal'+_0xc5af74(0x3ac)+_0xc5af74(0x97e)+'48px)'+');')+(_0xc5af74(0x469)+'ay:fl'+'ex;ga'+'p:10p'+_0xc5af74(0x1fd)+_0xc5af74(0xb8c)+_0xc5af74(0xaa1)+'borde'+_0xc5af74(0xa70)+'ius:2'+_0xc5af74(0xa0a)+_0xc5af74(0xbcb)+_0xc5af74(0x429)+'nts:a'+_0xc5af74(0x512)+_0xc5af74(0xc71)+_0xc5af74(0x4f7)+_0xc5af74(0x3e8)+'47;'),'backg'+_0xc5af74(0x647)+':rgba'+_0xc5af74(0x40a)+_0xc5af74(0x1c7)+_0xc5af74(0x34c)+'backd'+_0xc5af74(0x3b5)+_0xc5af74(0x32f)+_0xc5af74(0x9fc)+_0xc5af74(0xc66)+_0xc5af74(0x417)+_0xc5af74(0x831)+'(150%'+_0xc5af74(0x4dd)+'bkit-'+_0xc5af74(0x57d)+_0xc5af74(0x3b5)+_0xc5af74(0x32f)+':blur'+'(22px'+_0xc5af74(0x417)+'urate'+_0xc5af74(0x474)+');')+_0x308226[_0xc5af74(0x29b)],'opaci'+_0xc5af74(0x44f)+'trans'+'form:'+'trans'+'lateY'+_0xc5af74(0x8b2)+_0xc5af74(0x37a)+_0xc5af74(0x941)+'event'+'s:non'+_0xc5af74(0x60f)+_0xc5af74(0x7a9)+_0xc5af74(0x528)+_0xc5af74(0x3a9)+_0xc5af74(0x3ae)+_0xc5af74(0x577)+',tran'+_0xc5af74(0x2d8)+_0xc5af74(0x1f3)+_0xc5af74(0x697)+'c-bez'+_0xc5af74(0xb62)+_0xc5af74(0x35c)+'.36,1'+');')+(_0xc5af74(0x62e)+_0xc5af74(0xbc7)+_0xc5af74(0xb34)+_0xc5af74(0x82b)+_0xc5af74(0x4c5)+_0xc5af74(0x80c)+'ont-f'+_0xc5af74(0x6d5)+':\x22Int'+'er\x22,\x22'+'Segoe'+'\x20UI\x22,'+_0xc5af74(0x71c)+_0xc5af74(0x77c)+_0xc5af74(0xc22)+'serif'+';}'),_0xc5af74(0x5e5)+'ra-me'+_0xc5af74(0x667)+'ot.mn'+_0xc5af74(0x9ad)+'l.sho'+_0xc5af74(0x406)+_0xc5af74(0x3a9)+_0xc5af74(0x915)+'ansfo'+_0xc5af74(0x6f3)+_0xc5af74(0xab3)+_0xc5af74(0x339)+_0xc5af74(0x71b)+'ts:au'+_0xc5af74(0x60b))+_0x308226[_0xc5af74(0xa80)]+(_0xc5af74(0x1ac)+'r-rad'+_0xc5af74(0xbb8)+'6px;b'+'ackgr'+'ound:'+'rgba('+'255,2'+_0xc5af74(0x4d8)+_0xc5af74(0x26a)+_0xc5af74(0xb26)+_0xc5af74(0x8f5)+_0xc5af74(0x188)+'nset\x20'+_0xc5af74(0xc7e)+'\x201px\x20'+'rgba('+_0xc5af74(0x446)+_0xc5af74(0x4d8)+_0xc5af74(0x62c)+_0xc5af74(0x488))+_0x308226[_0xc5af74(0x4a1)]+_0x308226[_0xc5af74(0xb49)]+_0x308226['zPXEu']+_0x308226[_0xc5af74(0xb8b)]+_0x308226['orjkW']+('.mn-t'+_0xc5af74(0xad4)+_0xc5af74(0x2c7)+_0xc5af74(0x62e)+':#ff6'+'b9d;b'+_0xc5af74(0x2c2)+_0xc5af74(0x3d7)+_0xc5af74(0x787)+_0xc5af74(0x2d1)+_0xc5af74(0x261)+_0xc5af74(0x5ea)+';}')+(_0xc5af74(0x20f)+'ain{f'+_0xc5af74(0x27e)+_0xc5af74(0xbb2)+_0xc5af74(0x2d6)+':0;di'+_0xc5af74(0x7bf)+_0xc5af74(0x332)+';flex'+'-dire'+_0xc5af74(0xbf5)+_0xc5af74(0x2b1)+_0xc5af74(0xb70))+_0x308226['cfDZC'],_0x308226[_0xc5af74(0x8ea)])+_0x308226[_0xc5af74(0x68b)],_0xc5af74(0xbce)+'ub{fo'+_0xc5af74(0x956)+_0xc5af74(0xad1)+_0xc5af74(0xa05)+_0xc5af74(0x3a9)+':.4;}')+_0x308226['Oauru'],_0x308226[_0xc5af74(0xa34)]),'.mn-c'+'lose:'+'hover'+_0xc5af74(0x662)+_0xc5af74(0x628)+_0xc5af74(0x753)+_0xc5af74(0xa42)+_0xc5af74(0x22b)+'a(255'+',255,'+'255,.'+_0xc5af74(0x83e)),_0x308226['VzftF']),'.mn-c'+_0xc5af74(0x3a7)+'lex:1'+_0xc5af74(0xbb2)+_0xc5af74(0x305)+'t:0;o'+'verfl'+'ow-y:'+'auto;'+'displ'+'ay:gr'+'id;gr'+_0xc5af74(0x746)+_0xc5af74(0x273)+_0xc5af74(0x2dd)+_0xc5af74(0x394)+_0xc5af74(0xb0a)+'t(aut'+_0xc5af74(0xa26)+'l,min'+'max(2'+_0xc5af74(0xab8)+_0xc5af74(0x24d)+';')+('align'+_0xc5af74(0x4cc)+_0xc5af74(0x658)+_0xc5af74(0xaea)+_0xc5af74(0x2e9)+_0xc5af74(0x696)+_0xc5af74(0xac7)+'rt;ga'+'p:10p'+_0xc5af74(0x1fd)+_0xc5af74(0xb8c)+_0xc5af74(0x868)+'\x206px\x20'+_0xc5af74(0x63e)),_0x308226[_0xc5af74(0x688)]),_0xc5af74(0x3c1)+_0xc5af74(0x331)+_0xc5af74(0xbb1)+'it-sc'+'rollb'+'ar-th'+'umb{b'+'ackgr'+'ound:'+_0xc5af74(0x787)+_0xc5af74(0x446)+_0xc5af74(0x4d8)+_0xc5af74(0xb1d)+');bor'+_0xc5af74(0x30d)+'adius'+_0xc5af74(0x1e1)+'}'),_0xc5af74(0xa0d)+'ard{b'+_0xc5af74(0xa94)+_0xc5af74(0x7fc)+_0xc5af74(0x229)+'px;ba'+_0xc5af74(0xa64)+'und:r'+'gba(2'+'55,25'+_0xc5af74(0x524)+',.025'+');box'+_0xc5af74(0xb79)+_0xc5af74(0x953)+_0xc5af74(0x7e2)+_0xc5af74(0xbd1)+_0xc5af74(0x55f)+_0xc5af74(0x86a)+_0xc5af74(0x4d8)+_0xc5af74(0x524)+_0xc5af74(0x44c)+';}')+('.sk-c'+_0xc5af74(0x7a2)+'n{bac'+_0xc5af74(0x712)+_0xc5af74(0xb51)+'ba(25'+_0xc5af74(0x524)+_0xc5af74(0xa8d)+_0xc5af74(0x940)+'box-s'+_0xc5af74(0x5f3)+_0xc5af74(0x595)+_0xc5af74(0xb9a)+'\x200\x201p'+_0xc5af74(0x867)+'a(255'+_0xc5af74(0x9ae)+'157,.'+_0xc5af74(0x704)),_0x308226[_0xc5af74(0x4d6)]),_0xc5af74(0xa0d)+'ard-t'+_0xc5af74(0xc3c)+_0xc5af74(0xb5d)+_0xc5af74(0x24c)+_0xc5af74(0x3a2)+_0xc5af74(0xbbd))+('.sk-c'+_0xc5af74(0xaf5)+'itle\x20'+_0xc5af74(0x543)+'g{fon'+_0xc5af74(0x2a8)+'e:13p'+'x;fon'+'t-wei'+'ght:6'+_0xc5af74(0x2f1)+'lor:r'+_0xc5af74(0x86a)+'46,23'+_0xc5af74(0xacd)+_0xc5af74(0x681)+';}'),_0x308226['nVrqY']),_0xc5af74(0x92c)+_0xc5af74(0x5e8)+_0xc5af74(0xc62)+_0xc5af74(0x7a1)+_0xc5af74(0xb56)+'10px;'+'}')+_0x308226[_0xc5af74(0x2ef)]+_0x308226['Usmxl'],_0xc5af74(0x803)+_0xc5af74(0x535)+_0xc5af74(0xb5d)+'1;col'+_0xc5af74(0xaad)+'ba(24'+_0xc5af74(0xb53)+_0xc5af74(0xa9f)+_0xc5af74(0x4fa)+'}'),_0x308226[_0xc5af74(0x26f)]),_0x308226[_0xc5af74(0xb33)]),'.sk-s'+_0xc5af74(0x642)+'::aft'+'er{co'+_0xc5af74(0x9dd)+_0xc5af74(0x993)+_0xc5af74(0x78b)+_0xc5af74(0xc4d)+_0xc5af74(0x95c)+'e;top'+_0xc5af74(0xc64)+'left:'+_0xc5af74(0x799)+_0xc5af74(0x644)+'8px;h'+'eight'+_0xc5af74(0xa3c)+_0xc5af74(0x1ac)+_0xc5af74(0xa70)+_0xc5af74(0xc84)+_0xc5af74(0x861))+(_0xc5af74(0x4a6)+_0xc5af74(0x647)+_0xc5af74(0x82f)+_0xc5af74(0x36f)+'255,2'+_0xc5af74(0xc30)+_0xc5af74(0x769)+_0xc5af74(0x43f)+'ion:l'+_0xc5af74(0x485)+_0xc5af74(0x414)+_0xc5af74(0xa64)+_0xc5af74(0xae9)+'2s;}'),_0xc5af74(0x3e3)+'witch'+_0xc5af74(0x65b)+'-chec'+'ked=\x22'+_0xc5af74(0x9c2)+']{bac'+'kgrou'+_0xc5af74(0xb51)+'ba(25'+'5,107'+_0xc5af74(0x893)+_0xc5af74(0x810)+'}')+_0x308226[_0xc5af74(0x79a)]+(_0xc5af74(0xbc6)+'ange{'+_0xc5af74(0x469)+_0xc5af74(0x70e)+'ex;al'+'ign-i'+_0xc5af74(0x823)+'cente'+_0xc5af74(0x3f4)+':8px;'+'}')+(_0xc5af74(0x3e3)+_0xc5af74(0x7d5)+_0xc5af74(0xb29)+'kit-a'+'ppear'+'ance:'+'none;'+_0xc5af74(0x5d2)+'rance'+_0xc5af74(0xb0b)+_0xc5af74(0x77b)+_0xc5af74(0x3e1)+_0xc5af74(0x722)+_0xc5af74(0x92b)+_0xc5af74(0x90a)+_0xc5af74(0xa64)+_0xc5af74(0x744)+_0xc5af74(0x45a)+_0xc5af74(0x904)+';}'),_0x308226[_0xc5af74(0x790)]),_0x308226[_0xc5af74(0xab0)])+_0x308226[_0xc5af74(0x629)]+(_0xc5af74(0x588)+_0xc5af74(0xb42)+_0xc5af74(0x956)+'ze:11'+'px;fo'+_0xc5af74(0x5e2)+'ight:'+_0xc5af74(0x408)+'in-wi'+_0xc5af74(0xac9)+'4px;t'+_0xc5af74(0x31a)+_0xc5af74(0x645)+_0xc5af74(0x99d)+';colo'+_0xc5af74(0x199)+'a(246'+',238,'+_0xc5af74(0xa39)+'8);}')+_0x308226[_0xc5af74(0x7c9)]+_0x308226[_0xc5af74(0x93b)]+_0x308226['jXboa']+(_0xc5af74(0x2bc)+_0xc5af74(0x858)+_0xc5af74(0x79f)+'x;fon'+'t-wei'+_0xc5af74(0x82e)+'00;cu'+_0xc5af74(0x679)+'point'+_0xc5af74(0x3cc)+_0xc5af74(0x551)+'mily:'+_0xc5af74(0x49a)+_0xc5af74(0xb87))+(_0xc5af74(0x649)+'tn:ho'+_0xc5af74(0xb88)+'ilter'+':brig'+'htnes'+'s(1.1'+_0xc5af74(0x488)),_0xc5af74(0x3f9)+_0xc5af74(0x32a)+'nt:11'+'px/1.'+'5\x20ui-'+'monos'+_0xc5af74(0xa6b)+_0xc5af74(0x385)+_0xc5af74(0x57f)+'onosp'+_0xc5af74(0x1ce)+_0xc5af74(0x5ab)+'space'+_0xc5af74(0xa0b)+_0xc5af74(0x657)+'word-'+_0xc5af74(0x42b)+':brea'+'k-wor'+_0xc5af74(0xbde)+_0xc5af74(0x891)+_0xc5af74(0x51b)+'ity:.'+_0xc5af74(0x369)+'x-hei'+_0xc5af74(0x56a)+_0xc5af74(0x86e)+'overf'+_0xc5af74(0x6f5)+_0xc5af74(0x9ec))+(_0xc5af74(0x5e5)+'ra-pe'+_0xc5af74(0x36a)+_0xc5af74(0x78b)+'on:fi'+'xed;t'+_0xc5af74(0x6a2)+_0xc5af74(0xadf)+_0xc5af74(0x666)+_0xc5af74(0xb14)+_0xc5af74(0xc71)+_0xc5af74(0x4f7)+_0xc5af74(0x3e8)+_0xc5af74(0x450)+_0xc5af74(0x679)+_0xc5af74(0x196)+_0xc5af74(0x4eb)+_0xc5af74(0x660)+_0xc5af74(0x1a9)+'eight'+_0xc5af74(0x619)+_0xc5af74(0x51b)+_0xc5af74(0xbfa)+_0xc5af74(0x6c1)),'trans'+'ition'+_0xc5af74(0x7bd)+_0xc5af74(0xbd4)+_0xc5af74(0xaf8)+_0xc5af74(0x339)+_0xc5af74(0x71b)+_0xc5af74(0x537)+'to;fi'+'lter:'+_0xc5af74(0x9bc)+'shado'+'w(0\x200'+_0xc5af74(0x9a2)+_0xc5af74(0x787)+_0xc5af74(0x2d1)+_0xc5af74(0x261)+'7,.7)'+_0xc5af74(0x488)),_0x309bb7=_0x308226['QnuXD'](_0x308226[_0xc5af74(0x751)]('<svg\x20'+'viewB'+'ox=\x220'+'\x200\x2024'+_0xc5af74(0x370)+'<path'+_0xc5af74(0x307)+'12\x2021'+_0xc5af74(0x9cd)+_0xc5af74(0x8b7)+_0xc5af74(0x1f2)+'-4-7.'+'5\x200-2'+_0xc5af74(0x282)+_0xc5af74(0x93a)+_0xc5af74(0x218)+_0xc5af74(0x8a0)+'\x204\x204.'+_0xc5af74(0xaf1)+'-2.5\x20'+_0xc5af74(0x52a)+_0xc5af74(0x912),'fill='+_0xc5af74(0x255)+_0xc5af74(0x7c6)+'oke=\x22'+_0xc5af74(0x477)+'9d\x22\x20s'+_0xc5af74(0xb5a)+_0xc5af74(0x3a2)+_0xc5af74(0x4bd)+_0xc5af74(0x3e5)+'ke-li'+_0xc5af74(0x8e8)+_0xc5af74(0x8d2)+'nd\x22\x20s'+'troke'+'-line'+_0xc5af74(0x37d)+'\x22roun'+_0xc5af74(0xbd9)),_0xc5af74(0x252)+_0xc5af74(0x632)+'=\x2212\x22'+_0xc5af74(0xb13)+'10\x22\x20r'+_0xc5af74(0x7f9)+_0xc5af74(0x1c0)+'l=\x22#f'+'f6b9d'+'\x22/></'+_0xc5af74(0x6c0)),_0x19dc3d=_0x308226[_0xc5af74(0xc77)]+('fill='+_0xc5af74(0x255)+'\x22\x20str'+_0xc5af74(0xb6f)+'#ff6b'+_0xc5af74(0x49c)+_0xc5af74(0xb5a)+_0xc5af74(0x3a2)+_0xc5af74(0x887)+_0xc5af74(0x9f8)+_0xc5af74(0x2e4)+_0xc5af74(0x31f)+_0xc5af74(0x203)+_0xc5af74(0x8e6)+_0xc5af74(0x3e5)+'ke-li'+_0xc5af74(0x86f)+'n=\x22ro'+_0xc5af74(0x4c7)+'>')+('<circ'+_0xc5af74(0x632)+_0xc5af74(0x46f)+_0xc5af74(0xb13)+'10\x22\x20r'+_0xc5af74(0x4aa)+_0xc5af74(0x1c0)+_0xc5af74(0x6f6)+_0xc5af74(0x2de)+'\x22/></'+_0xc5af74(0x6c0));function _0x391aa5(_0x25b71d,_0x38b76e,_0xf6023a){var _0x2e898e=_0xc5af74,_0x24e0f6=document[_0x2e898e(0x9a3)+'eElem'+'ent'](_0x25b71d);if(_0x38b76e)_0x24e0f6['class'+'Name']=_0x38b76e;if(_0xf6023a!=null)_0x24e0f6[_0x2e898e(0xa67)+_0x2e898e(0x759)]=_0xf6023a;return _0x24e0f6;}function _0x215410(_0x4ba6ee,_0x407b6b){var _0x288918=_0xc5af74,_0x53b162={'ftFUv':function(_0x346991,_0x2fba71){var _0x388fc4=_0x45e7;return _0x308226[_0x388fc4(0x2a3)](_0x346991,_0x2fba71);},'mlSqz':function(_0x5d26e7,_0x1cecf9,_0xe938be){return _0x5d26e7(_0x1cecf9,_0xe938be);},'VVHRO':function(_0x3b4eeb,_0x3f1c8a){return _0x3b4eeb===_0x3f1c8a;},'yQgdG':'boole'+'an','uxSAB':'repor'+'t'};if(_0x308226['kQfbo']('XFQNH',_0x288918(0xb2a))){var _0x116148=_0x391aa5('div',_0x308226[_0x288918(0x228)]+(_0x407b6b?_0x308226[_0x288918(0x5bf)]:'')),_0x31ac7c=_0x308226[_0x288918(0x985)](_0x391aa5,_0x308226[_0x288918(0x929)],_0x308226[_0x288918(0x782)]),_0x3ae66b=_0x391aa5(_0x308226[_0x288918(0x929)],_0x288918(0x25a)+_0x288918(0xaa2)+_0x288918(0x925),_0x308226[_0x288918(0x513)](_0x308226[_0x288918(0x254)](_0x308226[_0x288918(0x60d)],_0x4ba6ee),_0x308226[_0x288918(0x549)]));_0x31ac7c[_0x288918(0x3de)+'dChil'+'d'](_0x3ae66b);var _0x57319d=_0x391aa5('div',_0x288918(0x520)+'ody');return _0x116148[_0x288918(0x3de)+'dChil'+'d'](_0x31ac7c),_0x116148[_0x288918(0x3de)+_0x288918(0xbda)+'d'](_0x57319d),_0x116148[_0x288918(0x2d0)]=_0x57319d,_0x116148['head']=_0x3ae66b,_0x116148;}else{var _0x4239ae=('3|10|'+'9|0|4'+_0x288918(0x65a)+_0x288918(0x445)+'|6')[_0x288918(0x3c2)]('|'),_0x3a1c33=-0x1d57+0x2099+-0x342*0x1;while(!![]){switch(_0x4239ae[_0x3a1c33++]){case'0':var _0x5e3e7d=_0x42378f(_0x46dcc2);continue;case'1':for(var _0x3d336b in _0x5e3e7d){var _0x230a90=_0x14b0e2[_0x3d336b],_0x5a112e=_0x5e3e7d[_0x3d336b];if(_0x230a90!==_0x5a112e)_0x485cac['push'](_0x53b162['ftFUv'](_0x3d336b+':\x20'+_0x230a90+_0x288918(0x222),_0x5a112e));}continue;case'2':_0x3905e3=[];continue;case'3':if(_0x5deb3a===_0x288918(0x6c7)){_0x53b162['mlSqz'](_0x186eb4,_0x1999da&&_0x53b162['VVHRO'](typeof _0x18790c['on'],_0x53b162['yQgdG'])?_0x18111b['on']:_0x2fb3f3['on'],_0x569d93&&typeof _0x44afec['facto'+'r']==='numbe'+'r'?_0x4a6d37[_0x288918(0x922)+'r']:_0x4e63b6['facto'+'r']);return;}continue;case'4':var _0x39e230=_0x566961();continue;case'5':for(var _0x1fab64 in _0x39e230)_0x5e3e7d[_0x1fab64]=_0x39e230[_0x1fab64];continue;case'6':_0x261ed0(_0x53b162[_0x288918(0x24b)],{'report':_0x40cf0b()});continue;case'7':if(!_0x103877){_0x4acf04=_0x5e3e7d,_0x3ea1ba=[],_0xf01bd(_0x288918(0x9df)+'t',{'report':_0x2ab7c2()});return;}continue;case'8':_0x39698c=_0x5e3e7d;continue;case'9':var _0x46dcc2=_0x5e7b72();continue;case'10':if(_0x204bdb!==_0x288918(0xb2d)+'hot')return;continue;}break;}}}function _0x5d5b75(_0x5e70a3,_0xa50e82){var _0x4a6738=_0xc5af74,_0x40312e={'VtJjm':_0x4a6738(0xbf4)},_0x1265d5=_0x391aa5('butto'+'n',_0x4a6738(0x34b)+'itch');_0x1265d5['type']=_0x308226['Vnhos'];var _0x5d7b67=function(){var _0x13f6ad=_0x4a6738;_0x1265d5['setAt'+'tribu'+'te'](_0x13f6ad(0x677)+'check'+'ed',_0x5e70a3()?'true':_0x40312e['VtJjm']);};return _0x1265d5['oncli'+'ck']=function(){_0xa50e82(!_0x5e70a3()),_0x308226['JXTNm'](_0x5d7b67);},_0x5d7b67(),_0x1265d5[_0x4a6738(0x873)]=_0x5d7b67,_0x1faeb2[_0x4a6738(0x444)]['push'](_0x5d7b67),_0x1265d5;}function _0x48f9e0(_0x280bc5,_0x51f5c6,_0x12307e,_0xcd6836,_0x4bd7b2){var _0x78a845=_0xc5af74,_0xbffcc1=(_0x78a845(0x910)+'0|8|0'+'|2|9|'+_0x78a845(0x41b)+_0x78a845(0x426)+_0x78a845(0x36e)+_0x78a845(0xc28)+'1|7|3')['split']('|'),_0x38ea19=-0x2553+-0x1*0x1ca2+0x133*0x37;while(!![]){switch(_0xbffcc1[_0x38ea19++]){case'0':_0x3af79e[_0x78a845(0x73d)]=_0x308226[_0x78a845(0x387)](String,_0x280bc5);continue;case'1':_0x3bebaf();continue;case'2':_0x3af79e[_0x78a845(0x571)]=String(_0x51f5c6);continue;case'3':return _0x147340;case'4':var _0x147340=_0x308226[_0x78a845(0x306)](_0x391aa5,'div',_0x78a845(0x475)+_0x78a845(0x5e9));continue;case'5':_0x3af79e['oninp'+'ut']=function(){_0x308226['fYRnp'](_0x4bd7b2,parseFloat(_0x3af79e['value'])||_0x280bc5),_0x3bebaf();};continue;case'6':var _0x3af79e=document['creat'+_0x78a845(0x972)+_0x78a845(0x964)](_0x78a845(0x6a0));continue;case'7':_0x1faeb2[_0x78a845(0x444)]['push'](_0x3bebaf);continue;case'8':_0x3af79e['class'+_0x78a845(0x5ec)]=_0x308226[_0x78a845(0xb91)];continue;case'9':_0x3af79e[_0x78a845(0x68a)]=_0x308226[_0x78a845(0x587)](String,_0x12307e);continue;case'10':_0x3af79e['type']=_0x78a845(0x6ef);continue;case'11':var _0x5ac6df=_0x391aa5(_0x78a845(0x844),_0x308226[_0x78a845(0x38d)]);continue;case'12':_0x147340[_0x78a845(0x6a0)]=_0x3af79e;continue;case'13':var _0x3bebaf=function(){var _0x14270f=_0x78a845,_0x1d6c61=(_0x14270f(0x50f)+'|1|0')[_0x14270f(0x3c2)]('|'),_0x439458=0xa6a+0x10c2+0x2f*-0x94;while(!![]){switch(_0x1d6c61[_0x439458++]){case'0':_0x3af79e['style'][_0x14270f(0xc32)+_0x14270f(0x7ee)+'y']('--p',_0x308226['pGkxJ'](_0x28fc42,'%'));continue;case'1':var _0x28fc42=_0x308226['AvKRp'](_0x40d873-_0x280bc5,_0x51f5c6-_0x280bc5)*(-0x171a+0x10*0xc7+0xb0e);continue;case'2':_0x5ac6df[_0x14270f(0x500)+'onten'+'t']=_0x308226['psaMF'](_0x308226[_0x14270f(0xa1e)](_0x12307e,0x254c+-0x10b3+-0x1498)?_0x40d873[_0x14270f(0xa5d)+'ed'](-0x7*-0x45d+-0x241c+0x592):String(Math['round'](_0x40d873)),_0x3af79e['datas'+'et']['unit']||'');continue;case'3':_0x3af79e[_0x14270f(0x763)]=String(_0x40d873);continue;case'4':var _0x40d873=_0x308226['YWQmr'](_0xcd6836);continue;}break;}};continue;case'14':_0x147340[_0x78a845(0x873)]=_0x3bebaf;continue;case'15':_0x147340['appen'+_0x78a845(0xbda)+'d'](_0x3af79e);continue;case'16':_0x147340[_0x78a845(0x3de)+'dChil'+'d'](_0x5ac6df);continue;}break;}}function _0x412477(_0x382aa4,_0x1859bd){var _0x54db06=_0xc5af74;if(_0x54db06(0x484)!=='keStd')return-0x1b*-0x68+0xf95*0x1+-0x1a8d*0x1;else{var _0xd935f0=_0x308226['eCmcs'](_0x391aa5,_0x308226[_0x54db06(0x929)],_0x54db06(0xa21)+'l'),_0x437d8f=_0x391aa5(_0x54db06(0xa71),'sk-la'+_0x54db06(0x8b1),_0x382aa4+(_0x1859bd?_0x308226[_0x54db06(0x337)](_0x308226['pAQAY'],_0x1859bd)+(_0x54db06(0xa5f)+'n>'):''));return _0xd935f0[_0x54db06(0x3de)+'dChil'+'d'](_0x437d8f),_0xd935f0;}}function _0x23ef8f(_0xa9110c,_0x4c33bc,_0x1fd2c3,_0x3591cc){var _0x6cd95f=_0xc5af74,_0x142eb2=_0xa9110c&&_0xa9110c['surve'+'y']&&_0xa9110c[_0x6cd95f(0x944)+'y'][_0x4c33bc];if(!_0x142eb2)return'-';for(var _0x4e39c2=-0x1*0xd5f+0xd*-0x14f+-0x1e62*-0x1;_0x4e39c2<_0x142eb2[_0x6cd95f(0x687)+'h'];_0x4e39c2++){if(_0x142eb2[_0x4e39c2]['o']===_0x1fd2c3){if(_0x308226[_0x6cd95f(0xc7d)](_0x3591cc,'v3')){var _0x38431d=_0x142eb2[_0x4e39c2][_0x6cd95f(0x817)]||[_0x142eb2[_0x4e39c2]['v'],0x4f*-0x6b+0xcd8+0x1*0x142d,0x1fe1+0x24c6+-0x44a7];return _0x38431d[_0x6cd95f(0x356)](function(_0x4d8542){return Math['round'](_0x4d8542*(-0x8*0x378+-0x2*-0xb90+0xc*0x6b))/(-0xd2*0x1b+0x141f+0x26b);})[_0x6cd95f(0x19a)]('\x20\x20');}var _0x3a56e3=_0x142eb2[_0x4e39c2]['v'];return _0x308226[_0x6cd95f(0x486)](typeof _0x3a56e3,_0x308226[_0x6cd95f(0x874)])?_0x308226[_0x6cd95f(0xb6b)](Math[_0x6cd95f(0x647)](_0x3a56e3*(0x578+-0x250*-0x9+-0x1660)),0x1cc2+0x935*-0x3+0x1*0x2c5):String(_0x3a56e3);}}return'-';}function _0x5ca101(_0x331147){var _0x4ec57=_0xc5af74,_0x5ae7d3={'qsTyj':function(_0x2548dd,_0x243290){return _0x2548dd!==_0x243290;},'ciXZb':_0x4ec57(0x654),'VxLwl':_0x4ec57(0xb2d)+_0x4ec57(0xc14),'cXcgE':_0x4ec57(0x611)+'ntiat'+_0x4ec57(0x3f3)+'xport'+'s.mem'+_0x4ec57(0x981),'RHVio':function(_0x331f52,_0x30e4a2){return _0x308226['qdDee'](_0x331f52,_0x30e4a2);},'RHGSj':function(_0x1fcb37){return _0x1fcb37();},'Alrxo':function(_0x85458d,_0x58a346){return _0x85458d===_0x58a346;},'RugqW':_0x4ec57(0x58d),'oGSof':_0x4ec57(0x4cd),'ZSCXk':_0x308226['WuiCi']};if(_0x308226[_0x4ec57(0x4c4)](_0x308226[_0x4ec57(0x872)],_0x4ec57(0x805)))_0xcea081={'mean':_0x49cd76,'members':[]},_0x844f7a['push'](_0x441c11);else{var _0x338846=_0x1794da,_0x2f8108=[],_0x27eb86;if(_0x331147===_0x4ec57(0x83f)+'t'){var _0x2240ff=_0x308226['UmvuD'](_0x215410,_0x4ec57(0x501)+_0x4ec57(0x4f1),_0x172334['on']),_0x5e3595=_0x391aa5(_0x4ec57(0xa71),_0x308226[_0x4ec57(0xb93)],_0x172334['on']?_0x308226[_0x4ec57(0xb75)](_0x308226[_0x4ec57(0x6ae)]('x',_0x172334['facto'+'r'][_0x4ec57(0xa5d)+'ed'](0x4c*0xe+-0x17*-0x149+-0x21b6))+_0x308226['Ymcit']+_0x5e77db[_0x4ec57(0x687)+'h']+('\x20fiel'+'ds\x20·\x20')+_0x5f5d15,_0x4ec57(0x870)+'es'):_0x4ec57(0x431)+_0x4ec57(0x1ed)+_0x4ec57(0x19d)+_0x4ec57(0x590)+'speed'+'\x20fiel'+_0x4ec57(0xb0e)+'ly.\x20H'+'eight'+',\x20ste'+'p\x20and'+_0x4ec57(0xc63)+_0x4ec57(0xbe6)+_0x4ec57(0x84b)+_0x4ec57(0xc7b)),_0x30f85c=_0x412477(_0x308226[_0x4ec57(0x949)]);_0x30f85c['appen'+'dChil'+'d'](_0x5d5b75(function(){return _0x172334['on'];},function(_0x1de701){var _0x520148=_0x4ec57;_0x254d50(_0x1de701,_0x172334['facto'+'r']),_0x5e3595[_0x520148(0x500)+'onten'+'t']=_0x1de701?_0x308226[_0x520148(0x6c5)](_0x308226['yOYxD'](_0x308226['lfoOt']('x'+_0x172334[_0x520148(0x922)+'r'][_0x520148(0xa5d)+'ed'](0x669*0x3+0x16e+-0x2*0xa54),_0x520148(0x1cc))+_0x5e77db['lengt'+'h'],'\x20fiel'+'ds\x20·\x20'),_0x5f5d15)+(_0x520148(0x870)+'es'):_0x520148(0x431)+_0x520148(0x1ed)+'\x20move'+_0x520148(0x590)+_0x520148(0x6c7)+'\x20fiel'+'ds\x20on'+_0x520148(0x47b)+_0x520148(0x32c)+_0x520148(0x5c4)+'p\x20and'+_0x520148(0xc63)+_0x520148(0xbe6)+'refus'+'ed.';})),_0x2240ff[_0x4ec57(0x2d0)][_0x4ec57(0x3de)+'dChil'+'d'](_0x5e3595),_0x2240ff[_0x4ec57(0x2d0)][_0x4ec57(0x3de)+_0x4ec57(0xbda)+'d'](_0x30f85c);var _0x553153=_0x48f9e0(-0x4*0x94c+-0xda4+0x32d5,-0xd35+0x7*0xdb+0x6d*0x11,-0x8a*-0x30+0x1226*0x1+0x8ce*-0x5+0.5,function(){var _0x14f9dc=_0x4ec57;return'WCCuX'!==_0x14f9dc(0xb9d)?_0x172334[_0x14f9dc(0x922)+'r']:_0x30a15d&&_0x413d95[_0x14f9dc(0x267)+'r']?_0x7ddde4[_0x14f9dc(0x267)+'r'][_0x14f9dc(0xb28)+_0x14f9dc(0xa2b)]:0x6*0x59b+0x2139+0xa3*-0x69;},function(_0x5c4705){var _0x430f3d=_0x4ec57;if(_0x5ae7d3[_0x430f3d(0xc47)](_0x5ae7d3[_0x430f3d(0x72a)],'SLQUq')){_0x15aad2();return;}else _0x254d50(_0x172334['on'],_0x5c4705);});_0x553153[_0x4ec57(0x6a0)]['datas'+'et']['unit']='x';var _0x21e8cb=_0x308226[_0x4ec57(0x1cf)](_0x412477,_0x4ec57(0x431)+_0x4ec57(0xba9),_0x308226['LslCy']);_0x21e8cb[_0x4ec57(0x3de)+_0x4ec57(0xbda)+'d'](_0x553153),_0x2240ff[_0x4ec57(0x2d0)][_0x4ec57(0x3de)+'dChil'+'d'](_0x21e8cb);if(_0x2b0dbe[_0x4ec57(0x687)+'h']){var _0x2f731e=_0x308226[_0x4ec57(0xba1)](_0x391aa5,_0x4ec57(0xa71),'sk-no'+'te',_0x4ec57(0x1c8)+_0x4ec57(0x419)+_0x2b0dbe[_0x4ec57(0x750)](-0x17e4+-0x1020+0x2804,0x1ddb+0x1511+0x65d*-0x8)[_0x4ec57(0x356)](function(_0x32b2c1){var _0x428865=_0x4ec57;return _0x308226[_0x428865(0x513)](_0x308226['okmpT']('0x',_0x308226['zBxHu'](_0x32b2c1['o'],0x2f0*0xb+0x18ae+-0x1c7f*0x2)?'?':_0x32b2c1['o'][_0x428865(0x8d4)+_0x428865(0x1aa)](0x2f*0x2+0x16d+-0x1bb)),'\x20(')+_0x32b2c1['why']+')';})[_0x4ec57(0x19a)]('\x20\x20'));_0x2240ff[_0x4ec57(0x2d0)]['appen'+'dChil'+'d'](_0x2f731e);}_0x2f8108['push'](_0x2240ff);var _0x3a6dae=_0x215410('Bindi'+'ngs'),_0x2dbd32=_0x308226['Rtpno'](_0x391aa5,_0x4ec57(0xb04)+'n',_0x308226['cpEYX'],_0x308226[_0x4ec57(0x6ff)]);_0x2dbd32['type']=_0x4ec57(0xb04)+'n',_0x2dbd32[_0x4ec57(0x5dc)+'ck']=function(){var _0x56acda=_0x4ec57;_0xb415d2(_0x5ae7d3[_0x56acda(0xa72)]);},_0x3a6dae[_0x4ec57(0x2d0)][_0x4ec57(0x3de)+'dChil'+'d'](_0x391aa5(_0x4ec57(0xa71),_0x4ec57(0xb57)+_0x4ec57(0x930),_0x308226['ITAdL'])),_0x3a6dae[_0x4ec57(0x2d0)]['appen'+'dChil'+'d'](_0x2dbd32),_0x2f8108['push'](_0x3a6dae);}if(_0x308226['XNeZl'](_0x331147,_0x308226['AyWPV'])){var _0x2deb54=_0x308226[_0x4ec57(0x709)](_0x215410,_0x4ec57(0xaca),_0x14ed59['on']),_0x340d8e=_0x412477(_0x308226['SRuuC']);_0x340d8e['appen'+'dChil'+'d'](_0x308226['yRUwg'](_0x5d5b75,function(){var _0x4749e0=_0x4ec57,_0xdfc5d6={'ZyBiC':function(_0x490c98,_0xc09129){var _0x3f1328=_0x45e7;return _0x308226[_0x3f1328(0x292)](_0x490c98,_0xc09129);}};return _0x4749e0(0x363)===_0x308226[_0x4749e0(0xb15)]?_0x416067[_0x4749e0(0x2fd)](_0xdfc5d6[_0x4749e0(0x90e)](_0x1a20b8,_0x47e34f))<=_0x517ec9[_0x4749e0(0x571)](-0x1*0xe1b+-0x1692+0x3*0xc3a,_0x51dd8c['abs'](_0x3a583a)*(-0xa83+0x1acd+-0x104a+0.6)):_0x14ed59['on'];},function(_0x2a0f3b){_0x308226['krqgm'](_0x38080f,_0x2a0f3b,_0x14ed59['boxes']);})),_0x2deb54[_0x4ec57(0x2d0)][_0x4ec57(0x3de)+_0x4ec57(0xbda)+'d'](_0x391aa5(_0x4ec57(0xa71),_0x308226['WZzXJ'],_0x4ec57(0x95a)+'-spac'+'e\x20min'+_0x4ec57(0x253)+_0x4ec57(0x374)+'right'+_0x4ec57(0x83a)+_0x4ec57(0xb0e)+'ly\x20po'+_0x4ec57(0xb8e)+_0x4ec57(0xa38))),_0x2deb54[_0x4ec57(0x2d0)]['appen'+_0x4ec57(0xbda)+'d'](_0x340d8e);var _0x4c1874=_0x308226[_0x4ec57(0xb6a)](_0x48f9e0,-0x2202+-0x9a2+0x2bcc,-0x12f5+-0x1fc1*-0x1+-0x26*0x52,-0x29*-0xd+0x932+-0xb3d,function(){var _0x368a58=_0x4ec57;return _0x368a58(0xa14)==='FGNRn'?(_0x4798a1[_0x368a58(0x997)+'e']=_0x3559cd[_0x368a58(0x997)+'e']||_0x5ae7d3[_0x368a58(0x85e)],new _0x5e693d(_0x11dd06['buffe'+'r'])):_0x14ed59['span'];},function(_0x35b1ee){var _0x2e5b2d=_0x4ec57;_0x14ed59[_0x2e5b2d(0x844)]=_0x35b1ee;});_0x4c1874[_0x4ec57(0x6a0)][_0x4ec57(0x9bd)+'et']['unit']='m';var _0x5240e8=_0x308226[_0x4ec57(0x984)](_0x412477,_0x308226['eSHzH'],_0x308226['edjKg']);_0x5240e8[_0x4ec57(0x3de)+_0x4ec57(0xbda)+'d'](_0x4c1874),_0x2deb54['body'][_0x4ec57(0x3de)+_0x4ec57(0xbda)+'d'](_0x5240e8),_0x2f8108[_0x4ec57(0x3f8)](_0x2deb54);var _0x234ab1=_0x308226['djvKe'](_0x215410,_0x308226[_0x4ec57(0xa1c)],_0x14ed59[_0x4ec57(0xc75)]),_0x13e0ef=_0x412477(_0x4ec57(0x5ef)+'ed');_0x13e0ef[_0x4ec57(0x3de)+'dChil'+'d'](_0x308226[_0x4ec57(0x209)](_0x5d5b75,function(){var _0x5063e2=_0x4ec57;return _0x14ed59[_0x5063e2(0xc75)];},function(_0x135597){var _0x4521f5=_0x4ec57;if(_0x135597&&!_0x308226['eerla'](_0xcf2c66)){_0x33c57f();return;}_0x308226[_0x4521f5(0x5a9)](_0x38080f,!![],_0x135597);}));var _0x257a8e=_0x338846&&_0x338846['angle'+'s'];_0x234ab1['body'][_0x4ec57(0x3de)+'dChil'+'d'](_0x391aa5(_0x4ec57(0xa71),_0x4ec57(0xb57)+_0x4ec57(0x930),_0x257a8e&&!_0x257a8e['ident'+_0x4ec57(0x264)]?_0x308226['SNbeE'](_0x308226[_0x4ec57(0x45d)](_0x4ec57(0x9b3)+_0x4ec57(0x6bb)+_0x4ec57(0x34a),_0x257a8e['why']||_0x308226[_0x4ec57(0x923)]),_0x4ec57(0x462)+_0x4ec57(0x713)+_0x4ec57(0x413)+'oats\x20'+_0x4ec57(0x4ba)+'ot\x20pi'+_0x4ec57(0x3db)+'nd\x20ya'+'w.\x20Pr'+_0x4ec57(0x2d4)+_0x4ec57(0x21e)+'rn\x20ab'+'out\x209'+'0°,\x20p'+_0x4ec57(0x1be)+_0x4ec57(0x954)):_0x257a8e&&!_0x257a8e[_0x4ec57(0x287)+'ne']?_0x4ec57(0x639)+_0x4ec57(0x9a5)+_0x4ec57(0x3a4)+'s\x20'+Math['round'](_0x257a8e['fov'])+_0x308226[_0x4ec57(0x584)]:_0x308226['UlIKK'])),_0x234ab1[_0x4ec57(0x2d0)][_0x4ec57(0x3de)+_0x4ec57(0xbda)+'d'](_0x13e0ef);var _0x5e2ea1=_0x48f9e0(-0x1ba1+0x837*-0x3+0x3482*0x1,-0x7ea+0x406+-0x1*-0x466,0x1*0x1d7f+-0x2*0x1e9+0x1*-0x19ab,function(){return _0x4e9310['fov'];},function(_0x3f9ecb){var _0x3147d8=_0x4ec57;_0x308226[_0x3147d8(0x693)](_0x308226[_0x3147d8(0x217)],_0x308226['NhWan'])?_0x3f4274['top']=_0x5ae7d3[_0x3147d8(0x843)](_0x56974f[_0x3147d8(0xa67)+'Heigh'+'t']||-0xca9*0x3+-0x12a9+-0x5*-0xb54,_0x5b2e83['offse'+_0x3147d8(0x48a)+'ht']||0x86*-0x1+0x1700+-0x14ea)-(-0x19c9*-0x1+0x1790+-0x3141*0x1):(_0x4e9310['fov']=_0x3f9ecb,_0x308226['eerla'](_0x32cae7));});_0x5e2ea1['input'][_0x4ec57(0x9bd)+'et'][_0x4ec57(0xa81)]='°';var _0xab632=_0x412477(_0x4ec57(0x639)+_0x4ec57(0x9a5)+'iew',_0x4ec57(0xad7)+_0x4ec57(0x798)+'so\x20st'+_0x4ec57(0x368)+'is');_0xab632['appen'+_0x4ec57(0xbda)+'d'](_0x5e2ea1);var _0x34100f=_0x412477(_0x4ec57(0x7da)+_0x4ec57(0xaae),_0x4ec57(0x460)+_0x4ec57(0x302)+'o\x2075,'+'\x20offs'+'ets\x20c'+_0x4ec57(0x80a)),_0x356edc=_0x308226['Kfgjf'](_0x391aa5,_0x308226['Vnhos'],_0x4ec57(0x1a4)+'n',_0x308226['vZcia']);_0x356edc[_0x4ec57(0x4a0)+'entLi'+_0x4ec57(0x816)+'r']('click',function(){var _0x3ef66a=_0x4ec57;if(_0x308226['XeImc']===_0x308226[_0x3ef66a(0xa84)]){if(!_0x5d80f9['on'])_0x10274b(!![],![]);else{if(_0x573170[_0x3ef66a(0xc75)])_0x10a923(![],![]);else{if(_0x5ae7d3['RHGSj'](_0xf463d5))_0x279e8e(!![],!![]);else _0x3796b3(![],![]);}}}else{var _0x131ccb=(_0x3ef66a(0x7fa)+_0x3ef66a(0x699)+'4')[_0x3ef66a(0x3c2)]('|'),_0x3506d5=0x1db8*-0x1+0x1aec*-0x1+0x38a4;while(!![]){switch(_0x131ccb[_0x3506d5++]){case'0':_0x3ad637();continue;case'1':_0x32cae7();continue;case'2':_0x4e9310[_0x3ef66a(0x63b)]=-0x1a1b+-0xe6*0x1d+0x3474;continue;case'3':_0x4e9310['pitch'+'Off']=0x251f+0x28d+-0x27ac;continue;case'4':_0x3d8e5f(_0x1faeb2[_0x3ef66a(0xc2d)]);continue;case'5':_0x4e9310[_0x3ef66a(0x6ea)+'f']=-0x53*-0x59+0x3*0xa1d+0x3b32*-0x1;continue;}break;}}}),_0x34100f[_0x4ec57(0x3de)+_0x4ec57(0xbda)+'d'](_0x356edc),_0x234ab1['body']['appen'+_0x4ec57(0xbda)+'d'](_0xab632),_0x234ab1['body'][_0x4ec57(0x3de)+_0x4ec57(0xbda)+'d'](_0x34100f);var _0x51223e=_0x48f9e0(-(-0x2226+-0x2155*-0x1+-0x1*-0x185),0x1571+0xa7b+-0x1f38,-0x48d*-0x8+-0x1*0x163d+0xe2a*-0x1,function(){var _0x4082dc=_0x4ec57,_0x13142c={'MTMwC':function(_0x426c4d,_0x3872e3){return _0x5ae7d3['Alrxo'](_0x426c4d,_0x3872e3);},'JfPIV':function(_0x4957b6,_0x735a4){return _0x4957b6(_0x735a4);},'qQiiZ':function(_0x92430f,_0x2ab6ab){return _0x92430f|_0x2ab6ab;}};if(_0x5ae7d3[_0x4082dc(0xa3e)]!==_0x5ae7d3[_0x4082dc(0x532)])return _0x4e9310['yawOf'+'f'];else{if(_0x13142c['MTMwC'](_0x24ea32,'obfF'))return _0x13142c[_0x4082dc(0x51f)](_0x28cbe7,_0x2d52b2^_0xa80f2c);if(_0x36756d===_0x4082dc(0x494))return _0x13142c[_0x4082dc(0xa65)](_0x594206^_0x44cfe1,0x1f*0x134+0x167c+-0x3bc8);return((_0x4594ce^_0x409dae)&0xa03+0x1770+-0x2074)!==0x1465+-0x1*-0x6e1+-0x1b46?-0x16cc+0xa*-0x1d2+-0x2901*-0x1:-0x3*0x7fd+0x2*-0xa5+0x1941;}},function(_0x292153){_0x4e9310['yawOf'+'f']=_0x292153,_0x5ae7d3['RHGSj'](_0x3ad637),_0x33c57f();});_0x51223e['input'][_0x4ec57(0x9bd)+'et'][_0x4ec57(0xa81)]='°';var _0x5ad427=_0x308226[_0x4ec57(0xb63)](_0x412477,_0x4ec57(0x5f0)+_0x4ec57(0xb9c)+_0x4ec57(0x225),_0x4ec57(0x67d)+'boxes'+_0x4ec57(0x8c4)+'\x20up');_0x5ad427[_0x4ec57(0x3de)+_0x4ec57(0xbda)+'d'](_0x51223e),_0x234ab1[_0x4ec57(0x2d0)][_0x4ec57(0x3de)+_0x4ec57(0xbda)+'d'](_0x5ad427);var _0x27b06b=_0x48f9e0(-(-0x1*0x1fc1+0x13*-0x14d+0x1*0x38d2),0x2362+0x477+-0x1*0x277f,-0x54b+0x6d*0x29+0x11b*-0xb,function(){return _0x4e9310['pitch'+'Off'];},function(_0x553a46){var _0x381557=_0x4ec57,_0x133bdb={'caAZm':function(_0x1cb742,_0x32fd96){var _0x38d876=_0x45e7;return _0x308226[_0x38d876(0xba0)](_0x1cb742,_0x32fd96);}};_0x308226[_0x381557(0x280)]===_0x308226['SlXFf']?(_0x192b5e['st']['lastW'+'ritte'+'n']=_0x4cc7a9[_0x381557(0x1f4)+'d'](_0x25c5eb),_0x2afe9b++,_0x1ea92a[_0x381557(0x3f8)](_0x133bdb[_0x381557(0x44d)]('0x',_0x59b98c['o'][_0x381557(0x8d4)+_0x381557(0x1aa)](0x2ca+-0x1459*-0x1+-0x1713)))):(_0x4e9310['pitch'+_0x381557(0x7a4)]=_0x553a46,_0x3ad637(),_0x33c57f());});_0x27b06b[_0x4ec57(0x6a0)]['datas'+'et'][_0x4ec57(0xa81)]='°';var _0x578850=_0x308226[_0x4ec57(0x4af)](_0x412477,_0x4ec57(0x1de)+_0x4ec57(0x934)+'ectio'+'n','pitch'+_0x4ec57(0x653)+_0x4ec57(0x47e)+_0x4ec57(0xafb));_0x578850['appen'+'dChil'+'d'](_0x27b06b),_0x234ab1['body'][_0x4ec57(0x3de)+'dChil'+'d'](_0x578850);var _0x509f88=_0x338846&&_0x338846['view'];_0x234ab1['body']['appen'+'dChil'+'d'](_0x391aa5(_0x4ec57(0xa71),_0x308226[_0x4ec57(0xc4a)],_0x308226[_0x4ec57(0x1b9)](_0x4ec57(0x314)+'\x20'+(_0x509f88?_0x509f88[_0x4ec57(0x851)+_0x4ec57(0xaf3)]?_0x308226[_0x4ec57(0x275)](_0x4ec57(0x576)+_0x4ec57(0xbf8)+_0x509f88['mouse'+_0x4ec57(0xaf3)],_0x509f88[_0x4ec57(0x64b)+'a']?'\x20\x20cam'+_0x4ec57(0x6d8)+_0x509f88['camer'+'a']:''):'no\x20Mo'+_0x4ec57(0xbfc)+'ok\x20ye'+'t':_0x4ec57(0x719)+'useLo'+'ok\x20ye'+'t')+(_0x257a8e?_0x308226['yacSN'](_0x308226[_0x4ec57(0x5cb)](_0x308226['oHJSg'](_0x308226[_0x4ec57(0x792)](_0x308226[_0x4ec57(0xa9a)]('\x0aread'+_0x4ec57(0x71f)+(_0x257a8e[_0x4ec57(0x955)]||'0x28'),'='),_0x257a8e['rawYa'+'w']===null||_0x257a8e['rawYa'+'w']===undefined?'-':Math[_0x4ec57(0x647)](_0x257a8e[_0x4ec57(0x6c8)+'w']))+(_0x257a8e[_0x4ec57(0x6ea)+'f']?_0x308226[_0x4ec57(0xc36)]('\x20'+(_0x257a8e[_0x4ec57(0x6ea)+'f']>0x4a*0x7c+0x4*0x9a2+-0x4a60?'+':''),Math[_0x4ec57(0x647)](_0x257a8e['yawOf'+'f'])):''),_0x4ec57(0xc54)+_0x4ec57(0x7a3)+'nfirm'+'ed)\x0a')+(_0x257a8e[_0x4ec57(0x59c)+'At']||'0x1c'),'='),_0x308226[_0x4ec57(0x206)](_0x257a8e[_0x4ec57(0xad8)+_0x4ec57(0x47f)],null)||_0x257a8e['rawPi'+_0x4ec57(0x47f)]===undefined?'-':Math['round'](_0x257a8e['rawPi'+'tch']))+(_0x257a8e[_0x4ec57(0x59c)+_0x4ec57(0x7a4)]?'\x20'+(_0x257a8e[_0x4ec57(0x59c)+_0x4ec57(0x7a4)]>0x22d1+0x1*0xae7+-0x2db8?'+':'')+Math[_0x4ec57(0x647)](_0x257a8e[_0x4ec57(0x59c)+'Off']):'')+(_0x4ec57(0x201)+_0x4ec57(0xc0c)+_0x4ec57(0x21f)+_0x4ec57(0x264)+')'):''),_0x4e9310[_0x4ec57(0x59c)+_0x4ec57(0x7a4)]||_0x4e9310[_0x4ec57(0x6ea)+'f']?_0x308226['QhVVK'](_0x308226['OQrbY'](_0x4ec57(0x6a1)+'h\x20',Math['round'](_0x4e9310[_0x4ec57(0x59c)+'Off'])),_0x4ec57(0x838)+'\x20')+Math[_0x4ec57(0x647)](_0x4e9310[_0x4ec57(0x6ea)+'f']):''))),_0x2f8108['push'](_0x234ab1);}if(_0x331147===_0x308226[_0x4ec57(0x2d9)]){var _0x205303=[[_0x4ec57(0x4c6),_0x308226['cMlgc'],_0x338846?_0x338846[_0x4ec57(0x354)+'on']:'-'],[_0x4ec57(0x48e),_0x4ec57(0x727)+'ed\x20/\x20'+_0x4ec57(0xb40)+_0x4ec57(0x432),_0x338846?_0x338846[_0x4ec57(0x293)+_0x4ec57(0x947)+'ed']+_0x308226['HoPcJ']+_0x338846[_0x4ec57(0x293)+_0x4ec57(0x348)+_0x4ec57(0x432)+'AtArm']:'-'],[_0x4ec57(0x40c),_0x308226['IoKAY'],_0x338846&&_0x338846['wasmM'+'emory']&&_0x338846['wasmM'+_0x4ec57(0xa00)]['captu'+_0x4ec57(0x48b)]?_0x308226['SNbeE'](_0x308226[_0x4ec57(0x7d8)](Math['round'](_0x338846[_0x4ec57(0x4d1)+_0x4ec57(0xa00)]['bytes']/(0x36aa2+0x3834*0x57+-0x21*0x328e)),_0x308226['CqcSW'])+_0x338846['wasmM'+_0x4ec57(0xa00)]['atMs'],'ms'):'-'],[_0x4ec57(0x322)+'rs',_0x308226['umiDZ'],_0x338846&&_0x338846[_0x4ec57(0x731)]?String(_0x338846[_0x4ec57(0x731)]['playe'+_0x4ec57(0x69b)+'t']):'-'],[_0x4ec57(0xc24)+'es',_0x4ec57(0xa27)+_0x4ec57(0x309)+_0x4ec57(0x2e8)+'u',_0x338846&&_0x338846['esp']?_0x308226[_0x4ec57(0x46d)](String,_0x338846[_0x4ec57(0x731)][_0x4ec57(0x3cb)+_0x4ec57(0x8ee)]):'-'],[_0x308226['FadLC'],'off\x20t'+_0x4ec57(0xb8f)+'ve\x20ma'+_0x4ec57(0x7aa),_0x338846&&_0x338846[_0x4ec57(0x731)]&&_0x338846[_0x4ec57(0x731)][_0x4ec57(0x64b)+'a']?_0x338846['esp']['camer'+'a']+'\x20('+_0x338846['esp']['camer'+'aFrom']+')':'-']];for(_0x27eb86=0x13*0x59+0x1*0x581+-0xc1c;_0x308226[_0x4ec57(0x439)](_0x27eb86,_0x205303['lengt'+'h']);_0x27eb86++){var _0x3e8b75=(_0x4ec57(0x455)+'|8|4|'+_0x4ec57(0x48f)+'|1|11'+'|10|2')['split']('|'),_0x3132fb=-0x101*0x8+0xef*0x1d+-0x130b;while(!![]){switch(_0x3e8b75[_0x3132fb++]){case'0':_0x18d483['style'][_0x4ec57(0xa60)+_0x4ec57(0x6fd)]='0';continue;case'1':var _0x363d50=_0x2f8108[_0x4ec57(0x687)+'h']?_0x2f8108[_0x308226[_0x4ec57(0x9f2)](_0x2f8108['lengt'+'h'],-0x1b5b*0x1+0x56+0x1b06)]:null;continue;case'2':_0x363d50['body']['lastC'+'hild']['sp']=_0x18d483;continue;case'3':_0x18d483['datas'+'et']['k']=_0x205303[_0x27eb86][0x135*0x3+0x3dc+0x3a*-0x21];continue;case'4':_0x18d483[_0x4ec57(0x74c)][_0x4ec57(0x66f)+'lign']=_0x4ec57(0x99d);continue;case'5':_0x18d483['textC'+_0x4ec57(0x696)+'t']=_0x308226['jBiOr'](String,_0x205303[_0x27eb86][0x1*-0x75+-0x1df*-0x4+0x257*-0x3]);continue;case'6':var _0x18d483=_0x308226['UmvuD'](_0x391aa5,'span',_0x4ec57(0x22c)+'l');continue;case'7':_0x3f9043['appen'+_0x4ec57(0xbda)+'d'](_0x18d483);continue;case'8':_0x18d483[_0x4ec57(0x74c)]['flex']='1';continue;case'9':var _0x3f9043=_0x308226[_0x4ec57(0x387)](_0x412477,_0x205303[_0x27eb86][-0x2*-0x4ea+-0xc6e+0x29a]);continue;case'10':_0x363d50[_0x4ec57(0x2d0)]['appen'+_0x4ec57(0xbda)+'d'](_0x3f9043);continue;case'11':!_0x363d50&&(_0x363d50=_0x215410(_0x308226['HyEme'],![]),_0x2f8108[_0x4ec57(0x3f8)](_0x363d50));continue;}break;}}var _0x240e13=_0x215410(_0x4ec57(0x322)+'r',![]),_0x4c9725=[[_0x4ec57(0x705)+'ion',_0x338846&&_0x338846[_0x4ec57(0x1d4)]&&_0x338846[_0x4ec57(0x1d4)]['posAt']?'FPSco'+_0x4ec57(0x9b9)+_0x4ec57(0x5e6)+_0x338846[_0x4ec57(0x1d4)][_0x4ec57(0x9a1)]:_0x4ec57(0x262)+_0x4ec57(0x9b9)+_0x4ec57(0x2df),_0x338846&&_0x338846['local']&&_0x338846['local']['feet']?_0x338846['local'][_0x4ec57(0x784)]['map'](function(_0x509054){return Math['round'](_0x509054*(0x259*-0xf+-0x2*0x1ee+0x2777))/(0x17*0xf8+-0xf14+0x1b4*-0x4);})['join']('\x20\x20'):'-'],['Eye','+'+_0xa35a9f+'m',_0x338846&&_0x338846[_0x4ec57(0x1d4)]&&_0x338846[_0x4ec57(0x1d4)][_0x4ec57(0xbc8)]?_0x338846['local'][_0x4ec57(0xbc8)][_0x4ec57(0x356)](function(_0x49a59c){return Math['round'](_0x49a59c*(0x55d*0x5+0x4*0x8c3+0x1*-0x3d79))/(0x1974+-0x5e*0x5b+0x85a);})['join']('\x20\x20'):'-'],[_0x4ec57(0xb41)+'speed',_0x4ec57(0x68f),_0x308226[_0x4ec57(0x18f)](_0x23ef8f,_0x338846,_0x308226['bOYOt'],-0x2263+-0xb9d*0x3+0x4f3*0xe)],['Sprin'+_0x4ec57(0x8a1)+'ed',_0x4ec57(0x1c9),_0x23ef8f(_0x338846,'FPSco'+'ntrol'+'ler',0x1*-0x2077+-0x16bb+-0x12e*-0x2f)],['Jump\x20'+'heigh'+'t',_0x308226['rbPGm'],_0x308226[_0x4ec57(0x1eb)](_0x23ef8f,_0x338846,'FPSco'+_0x4ec57(0x9b9)+_0x4ec57(0x2df),-0x241c*-0x1+0xe*-0x1+-0x22f2)],[_0x308226[_0x4ec57(0x760)],_0x308226['AINXZ'],_0x308226['dVOUc'](_0x23ef8f,_0x338846,'Healt'+'hScri'+'pt',-0x3*-0x3fe+0xc80+-0x17ba)]];for(_0x27eb86=0x1*0x1139+-0x4*0x757+-0xd*-0xef;_0x27eb86<_0x4c9725['lengt'+'h'];_0x27eb86++){var _0xbc43ec=_0x308226[_0x4ec57(0x27c)][_0x4ec57(0x3c2)]('|'),_0x4ebff2=-0x997+0x12b5+-0x91e;while(!![]){switch(_0xbc43ec[_0x4ebff2++]){case'0':_0x4e28d7[_0x4ec57(0x74c)][_0x4ec57(0x66f)+_0x4ec57(0x39c)]='right';continue;case'1':_0x240e13['body']['appen'+'dChil'+'d'](_0x21b88b);continue;case'2':_0x4e28d7[_0x4ec57(0x500)+_0x4ec57(0x696)+'t']=String(_0x4c9725[_0x27eb86][-0x4d2*-0x1+-0x98f*-0x1+0x11b*-0xd]);continue;case'3':var _0x21b88b=_0x308226['fYRnp'](_0x412477,_0x4c9725[_0x27eb86][0x1f17+-0x30*0x1a+0x3*-0x8bd]);continue;case'4':_0x4e28d7['datas'+'et']['k']=_0x4c9725[_0x27eb86][-0x2ce*0x3+-0xc54*0x2+-0x2113*-0x1];continue;case'5':_0x4e28d7[_0x4ec57(0x74c)][_0x4ec57(0xa60)+_0x4ec57(0x6fd)]='0';continue;case'6':_0x21b88b['appen'+'dChil'+'d'](_0x4e28d7);continue;case'7':var _0x4e28d7=_0x391aa5(_0x4ec57(0x844),_0x4ec57(0x22c)+'l');continue;case'8':_0x4e28d7[_0x4ec57(0x74c)]['flex']='1';continue;case'9':_0x240e13['body'][_0x4ec57(0xa87)+_0x4ec57(0x64d)]['sp']=_0x4e28d7;continue;}break;}}_0x2f8108['push'](_0x240e13);}if(_0x308226['Tzopw'](_0x331147,'log')){var _0x5a17c6=_0x215410(_0x4ec57(0x434)+'ostic'+'s',![]),_0x450aa0=_0x338846&&_0x338846['warni'+'ngs']&&_0x338846[_0x4ec57(0x5c0)+'ngs']['lengt'+'h']?_0x338846[_0x4ec57(0x5c0)+'ngs']['join']('\x0a'):_0x4ec57(0x6c4)+'rning'+'s';_0x5a17c6[_0x4ec57(0x2d0)]['appen'+_0x4ec57(0xbda)+'d'](_0x308226[_0x4ec57(0x68c)](_0x391aa5,_0x308226['zCkPo'],_0x308226['eYKLj'],_0x450aa0)),_0x2f8108['push'](_0x5a17c6);var _0x1e5d97=_0x308226[_0x4ec57(0x306)](_0x215410,'Repor'+'t',![]),_0x1ce2ff=_0x391aa5(_0x308226['Vnhos'],'sk-bt'+'n','Copy\x20'+_0x4ec57(0x21c)+'to\x20cl'+_0x4ec57(0xae2)+'rd');_0x1ce2ff[_0x4ec57(0x7af)]=_0x4ec57(0xb04)+'n',_0x1ce2ff[_0x4ec57(0x5dc)+'ck']=function(){var _0x4a5a03=_0x4ec57,_0xd7165c={'RUSNG':_0x4a5a03(0xc03)+_0x4a5a03(0x7db),'EdyQq':function(_0x5348fe,_0x456ead,_0x1d0571){return _0x5348fe(_0x456ead,_0x1d0571);},'UqCLa':'Healt'+_0x4a5a03(0xa53)+'pt','zMMNK':function(_0x20e88f,_0x54786e){return _0x308226['NmazY'](_0x20e88f,_0x54786e);}};try{var _0x3ab99d=_0x308226['MfACc'](_0x308226[_0x4a5a03(0x4df)](_0x572883,'\x0a')+JSON['strin'+'gify'](_0x338846,null,-0x8ad+0xd*0x1d3+-0xf09)+'\x0a',_0x32eb22);if(navigator['clipb'+_0x4a5a03(0x31d)]&&navigator['clipb'+_0x4a5a03(0x31d)]['write'+_0x4a5a03(0x91c)])navigator['clipb'+_0x4a5a03(0x31d)]['write'+_0x4a5a03(0x91c)](_0x3ab99d)['then'](function(){var _0x4b11d7=_0x4a5a03;_0x1ce2ff[_0x4b11d7(0x500)+'onten'+'t']=_0x5ae7d3[_0x4b11d7(0x992)];});else _0x1ce2ff[_0x4a5a03(0x500)+_0x4a5a03(0x696)+'t']=_0x308226[_0x4a5a03(0xbaa)];}catch(_0x444ca4){if(_0x4a5a03(0x266)===_0x308226[_0x4a5a03(0x8d5)])_0x1ce2ff['textC'+_0x4a5a03(0x696)+'t']=_0x4a5a03(0x4d4)+_0x4a5a03(0x7de)+'d';else{var _0x3f4c27=_0xd7165c[_0x4a5a03(0x63f)]['split']('|'),_0x1afef1=0x1c0c+-0x13cc+-0x840;while(!![]){switch(_0x3f4c27[_0x1afef1++]){case'0':if(_0x4e104e[_0x4a5a03(0xc4e)][_0x4a5a03(0xc73)+'h'])_0x4e104e['healt'+'h']=_0x2292ca(_0xd7165c[_0x4a5a03(0x1ca)](_0x5a77eb,_0x4e104e['refs'][_0x4a5a03(0xc73)+'h'],0x9cf+0x1fa*-0x12+0x19d5),_0xd7165c['UqCLa'],'obfI');continue;case'1':_0x4e104e['hits']=_0x3cfc3c[_0x5e6e28[_0x25e4cb]][_0x4a5a03(0x3b3)];continue;case'2':_0x24caa4[_0x4a5a03(0x4fd)]['push'](_0x4e104e);continue;case'3':_0x4e104e[_0x4a5a03(0x56b)+_0x4a5a03(0x7ac)+'s']=_0xd7165c[_0x4a5a03(0xc56)](_0xc3be60[_0x42467e[_0x413ecd]][_0x4a5a03(0x56b)+_0x4a5a03(0x927)],_0x4c0137);continue;case'4':var _0x4e104e=_0xb44ba8(_0x4a5a03(0xbe7)+'otrol'+_0x4a5a03(0x2df),_0x4ee0c0[_0x2dcbff[_0x45491e]][_0x4a5a03(0x1fb)]);continue;}break;}}}},_0x1e5d97[_0x4ec57(0x2d0)]['appen'+_0x4ec57(0xbda)+'d'](_0x391aa5(_0x308226[_0x4ec57(0x929)],_0x4ec57(0xb57)+'esc',_0x4ec57(0x395)+_0x4ec57(0x1c6)+_0x4ec57(0x6dc)+_0x4ec57(0x8bc)+_0x4ec57(0xc0d)+'n\x20som'+'ethin'+_0x4ec57(0x749)+_0x4ec57(0x7b0)+_0x4ec57(0x98f))),_0x1e5d97['body']['appen'+_0x4ec57(0xbda)+'d'](_0x1ce2ff),_0x2f8108[_0x4ec57(0x3f8)](_0x1e5d97);}return _0x2f8108;}}function _0x165289(){var _0x21475=_0xc5af74,_0x11bcb9={'gzifZ':function(_0x3123d3,_0x251ea6){var _0x5803eb=_0x45e7;return _0x308226[_0x5803eb(0x5c6)](_0x3123d3,_0x251ea6);}};if(_0x308226['oShaQ'](_0x21475(0x66b),_0x21475(0xbae)))_0x27786c[_0x11bcb9['gzifZ'](_0x533a96,_0x21475(0x533))+_0x15e6e3[_0x44768c]['o']['toStr'+'ing'](0x1786+-0x3*-0x92+-0x192c)]=_0x5eeec7[_0x4e9447]['v'];else{if(_0x1faeb2[_0x21475(0x373)])_0x12bf0e(!![]);}}function _0x5e351e(){var _0x2ffad2=_0xc5af74;try{var _0x388f3a=localStorage[_0x2ffad2(0x7e9)+'em'](_0x352100);if(!_0x388f3a)return;var _0x33416e=JSON['parse'](_0x388f3a);if(_0x33416e&&_0x308226[_0x2ffad2(0x1ee)](typeof _0x33416e['x'],_0x308226['DzDGX'])&&_0x308226['dBAKA'](typeof _0x33416e['y'],_0x2ffad2(0x945)+'r'))_0x1faeb2[_0x2ffad2(0x54d)]=_0x33416e;}catch(_0x32dba4){}}function _0x4f71ad(){var _0x4f2113=_0xc5af74;try{localStorage[_0x4f2113(0x555)+'em'](_0x352100,JSON[_0x4f2113(0x412)+_0x4f2113(0x392)](_0x1faeb2['pos']));}catch(_0x52ed74){}}function _0x314644(){var _0xb063d1=_0xc5af74,_0x31ebad=_0x1faeb2[_0xb063d1(0x19c)];if(!_0x31ebad||!_0x31ebad['style'])return;if(_0x1faeb2[_0xb063d1(0x54d)]){if(_0xb063d1(0x5c9)!=='XQkxr'){var _0x335c6c=new _0xf1063b(_0x494492);for(var _0x28059c=-0x8a9*0x1+0x68+0x1*0x841;_0x308226[_0xb063d1(0x517)](_0x28059c,_0xd3d3d);_0x28059c++)_0x335c6c[_0x28059c]=_0x597e1c['getUi'+'nt8'](_0x308226['qfqcs'](_0x5e9b4a+_0x4ae5c7,_0x28059c));return _0x8671c0['ok']++,_0x335c6c;}else _0x31ebad['style']['left']=_0x1faeb2['pos']['x']+'px',_0x31ebad[_0xb063d1(0x74c)]['top']=_0x1faeb2[_0xb063d1(0x54d)]['y']+'px',_0x31ebad['style'][_0xb063d1(0x99d)]=_0xb063d1(0xa29),_0x31ebad['style'][_0xb063d1(0x7b8)+'m']=_0x308226[_0xb063d1(0xc50)];}else _0x31ebad[_0xb063d1(0x74c)]['left']=_0xb063d1(0xa29),_0x31ebad['style']['top']='auto',_0x31ebad[_0xb063d1(0x74c)]['right']=_0xb063d1(0xc13),_0x31ebad[_0xb063d1(0x74c)][_0xb063d1(0x7b8)+'m']='24px';}function _0x58a698(_0x4a36f0,_0x30a1e6){var _0x127e21=_0xc5af74,_0xa0913={'GbUWH':_0x127e21(0x94f)+_0x127e21(0x1aa),'IgsgJ':function(_0x1017c5,_0x13ef6d){var _0x40e755=_0x127e21;return _0x308226[_0x40e755(0x5d5)](_0x1017c5,_0x13ef6d);},'kWzCD':function(_0xb9b178,_0x2c79a4){return _0xb9b178===_0x2c79a4;},'CjUYJ':'auto','ZRsdl':function(_0x25f041,_0x231642){var _0x838f52=_0x127e21;return _0x308226[_0x838f52(0xc67)](_0x25f041,_0x231642);},'jRxHw':function(_0x3d945f,_0x944f40){var _0x344b5e=_0x127e21;return _0x308226[_0x344b5e(0x5c8)](_0x3d945f,_0x944f40);},'djzZO':function(_0x319794,_0x1c9103){return _0x319794-_0x1c9103;},'xKeqL':function(_0x1913b3,_0x583523){var _0x1cd96e=_0x127e21;return _0x308226[_0x1cd96e(0x4f4)](_0x1913b3,_0x583523);},'hFQfl':function(_0x537315,_0x3f7482){var _0x26dec6=_0x127e21;return _0x308226[_0x26dec6(0x9f2)](_0x537315,_0x3f7482);},'pnJBW':function(_0x1620bc,_0xa6f9d5){var _0x502a08=_0x127e21;return _0x308226[_0x502a08(0x52f)](_0x1620bc,_0xa6f9d5);}};if(_0x127e21(0x8e1)===_0x308226['sRboJ'])_0x21b1b9[_0x127e21(0x3f8)](_0x308226[_0x127e21(0xaaf)]),_0x4f2cd7[_0x127e21(0x3f8)](''),_0x4ed7cd[_0x127e21(0x3f8)](_0x127e21(0x237)+_0x127e21(0x729)+'fire\x20'+'on\x20th'+_0x127e21(0x4dc)+_0x127e21(0x294)+'wn\x20Up'+'date('+_0x127e21(0x336)+'thing'+_0x127e21(0x643)+_0x127e21(0xb12)+_0x127e21(0xc37)),_0x14fb80['push'](_0x127e21(0x234)+'date\x20'+_0x127e21(0x6e7)+_0x127e21(0x871)+_0x127e21(0x6dd)+'\x20sign'+_0x127e21(0xadc)+'\x20did\x20'+_0x127e21(0x56d)+'atch.');else try{var _0x203b16=_0x308226[_0x127e21(0x5d3)][_0x127e21(0x3c2)]('|'),_0xb6cdb0=-0x1cad+0x2073+-0x3c6;while(!![]){switch(_0x203b16[_0xb6cdb0++]){case'0':_0x30a1e6[_0x127e21(0x4a0)+_0x127e21(0xbdf)+_0x127e21(0x816)+'r'](_0x308226['IBCew'],_0x40f88e,{'passive':![]});continue;case'1':_0x30a1e6['addEv'+_0x127e21(0xbdf)+_0x127e21(0x816)+'r'](_0x127e21(0x851)+'down',_0x40f88e);continue;case'2':window[_0x127e21(0x4a0)+'entLi'+'stene'+'r'](_0x308226[_0x127e21(0xb10)],_0x442193,{'passive':![]});continue;case'3':_0x30a1e6[_0x127e21(0x74c)][_0x127e21(0x892)+_0x127e21(0x1b0)+'n']=_0x127e21(0xad2);continue;case'4':window['addEv'+_0x127e21(0xbdf)+_0x127e21(0x816)+'r'](_0x127e21(0x892)+_0x127e21(0x35b),_0x113634);continue;case'5':window[_0x127e21(0x4a0)+'entLi'+'stene'+'r']('mouse'+'move',_0x442193);continue;case'6':_0x30a1e6['style'][_0x127e21(0x41a)+'r']=_0x308226['WSOqs'];continue;case'7':var _0x113634=function(){var _0x4b6122=_0x127e21;if(!_0x1e736c)return;_0x1e736c=![],_0x30a1e6['style'][_0x4b6122(0x41a)+'r']=_0x308226[_0x4b6122(0x4c3)],_0x308226['onVBk'](_0x4f71ad);};continue;case'8':var _0x40f88e=function(_0x3b6568){var _0x902ac9=_0x127e21;_0x1e736c=!![],_0x30a1e6['style'][_0x902ac9(0x41a)+'r']=_0xa0913[_0x902ac9(0x5fe)];var _0x37bb16={'left':_0xa0913[_0x902ac9(0x5fd)](parseFloat,_0x4a36f0['style'][_0x902ac9(0x29d)])||-0x871+-0xad4+0x1345,'top':parseFloat(_0x4a36f0['style'][_0x902ac9(0x613)])||-0xf1*-0x1f+-0xd89+-0xfa6};(!_0x4a36f0['style'][_0x902ac9(0x29d)]||_0xa0913[_0x902ac9(0xc27)](_0x4a36f0[_0x902ac9(0x74c)][_0x902ac9(0x29d)],_0xa0913['CjUYJ']))&&(_0x37bb16['left']=_0xa0913[_0x902ac9(0x52b)](_0xa0913['ZRsdl'](window[_0x902ac9(0xa67)+_0x902ac9(0x5fa)]||-0x112e+-0x207*0x10+0x319e,_0x4a36f0[_0x902ac9(0x617)+_0x902ac9(0x974)+'h']||0x316+0x1*0xb73+-0xc1d*0x1),-0x4*0x22e+0x2*-0x480+0x11d0));(!_0x4a36f0['style'][_0x902ac9(0x613)]||_0x4a36f0['style'][_0x902ac9(0x613)]===_0xa0913['CjUYJ'])&&(_0x37bb16['top']=_0xa0913[_0x902ac9(0x2bb)](window[_0x902ac9(0xa67)+_0x902ac9(0x938)+'t']||-0x1589+-0x1d05+0x328e,_0x4a36f0[_0x902ac9(0x617)+'tHeig'+'ht']||-0x185*0x16+0xf1b+-0x1*-0x13e3)-(0x1a65+0xc1+-0xd87*0x2));_0x1b7b35=(_0x3b6568['clien'+'tX']||0x1466+0x233e*-0x1+0xed8)-_0x37bb16['left'],_0x362a79=(_0x3b6568[_0x902ac9(0xbf3)+'tY']||-0x1691+0xde3+-0xb*-0xca)-_0x37bb16['top'];try{_0x3b6568['preve'+'ntDef'+'ault']();}catch(_0x3e308d){}};continue;case'9':window['addEv'+_0x127e21(0xbdf)+'stene'+'r']('mouse'+'up',_0x113634);continue;case'10':var _0x1e736c=![],_0x1b7b35=-0x6cd+-0x19*-0xcb+-0xd06,_0x362a79=0x107*0x1b+0x1839+-0x33f6;continue;case'11':var _0x442193=function(_0x3b6a85){var _0x50c194=_0x127e21;if(!_0x1e736c)return;var _0x213460=_0x4a36f0['offse'+'tWidt'+'h']||0x21dc+0x3*-0xa16+0x97*-0x2,_0x16e790=_0x4a36f0['offse'+'tHeig'+'ht']||0xce3*0x3+-0xbd4+-0x1945,_0x53de41=(_0x3b6a85[_0x50c194(0xbf3)+'tX']||-0x58b*0x4+0x3b9+0x1273*0x1)-_0x1b7b35,_0x5b4926=_0xa0913[_0x50c194(0x7a7)](_0x3b6a85['clien'+'tY']||-0x197c+0xd*0x141+0x1*0x92f,_0x362a79);_0x53de41=Math[_0x50c194(0x571)](0x24af*0x1+0x2340+-0x47e7,Math['min'](_0xa0913[_0x50c194(0xc02)](window[_0x50c194(0xa67)+_0x50c194(0x5fa)]||-0xef*0x7+0x125c+-0xbd3,_0x213460)-(0x1ceb*-0x1+-0xd3e+0x2a31),_0x53de41)),_0x5b4926=Math[_0x50c194(0x571)](-0x2010+-0xd63+-0x3*-0xf29,Math[_0x50c194(0x73d)](_0xa0913[_0x50c194(0x396)]((window['inner'+'Heigh'+'t']||0x2*0xfde+-0x45b*0x2+-0x1706)-_0x16e790,0x923*0x1+0x107*-0xd+0x440),_0x5b4926)),_0x4a36f0[_0x50c194(0x74c)][_0x50c194(0x29d)]=_0xa0913['pnJBW'](_0x53de41,'px'),_0x4a36f0[_0x50c194(0x74c)][_0x50c194(0x613)]=_0x5b4926+'px',_0x4a36f0[_0x50c194(0x74c)][_0x50c194(0x99d)]=_0xa0913[_0x50c194(0x1f1)],_0x4a36f0[_0x50c194(0x74c)][_0x50c194(0x7b8)+'m']=_0x50c194(0xa29),_0x1faeb2[_0x50c194(0x54d)]={'x':_0x53de41,'y':_0x5b4926};};continue;}break;}}catch(_0x3e4e68){}}function _0x41e19e(){var _0x114c42=_0xc5af74,_0x508f44={'dbGIS':function(_0x62031,_0x3be080){var _0x122c4c=_0x45e7;return _0x308226[_0x122c4c(0x5d5)](_0x62031,_0x3be080);},'CXDam':_0x114c42(0x608)+_0x114c42(0x2b6),'bGbxR':function(_0x55d9fc,_0x50fe0d){return _0x308226['iOAji'](_0x55d9fc,_0x50fe0d);},'cHaAZ':'JlBDK'};if(_0x1faeb2[_0x114c42(0xa73)])return _0x1faeb2['root'];try{if(!document[_0x114c42(0x2d0)]||!document[_0x114c42(0x2d0)]['appen'+_0x114c42(0xbda)+'d'])return null;if(!document[_0x114c42(0x9bf)+_0x114c42(0x9a4)+'ById'](_0x114c42(0xa8c)+_0x114c42(0x3c3)+_0x114c42(0xc45))){var _0x6cfcaa=document['creat'+'eElem'+'ent'](_0x308226['XuyNN']);_0x6cfcaa['id']=_0x308226[_0x114c42(0x2f0)],_0x6cfcaa[_0x114c42(0x500)+_0x114c42(0x696)+'t']=_0x559e35,(document[_0x114c42(0x2dc)]||document[_0x114c42(0xbd7)+_0x114c42(0x612)+_0x114c42(0x9a4)])[_0x114c42(0x3de)+'dChil'+'d'](_0x6cfcaa);}var _0x567ce5=_0x308226[_0x114c42(0x5a9)](_0x391aa5,_0x308226['zCkPo'],_0x308226['hbHjT']);_0x567ce5['id']='sakur'+_0x114c42(0x3c3)+_0x114c42(0x465)+'t';var _0x5b60af=_0x391aa5(_0x308226[_0x114c42(0x929)],_0x308226[_0x114c42(0xb1a)]),_0x547ad6=_0x308226[_0x114c42(0x18f)](_0x391aa5,'div','mn-lo'+'go',_0x19dc3d);_0x5b60af['appen'+'dChil'+'d'](_0x547ad6);var _0x3d5f8b=_0x391aa5(_0x308226['zCkPo'],_0x308226['duYZv']),_0x4067b7=_0x308226['YuRrZ'](_0x391aa5,'div',_0x308226[_0x114c42(0x5b4)]),_0x1eab20=_0x391aa5(_0x114c42(0xa71),'mn-ti'+_0x114c42(0xa92)),_0x42a60c=_0x391aa5(_0x308226[_0x114c42(0x929)],_0x114c42(0xa95),'Sakur'+_0x114c42(0x359)+_0x114c42(0x53b)+'z'),_0x4d4d37=_0x391aa5('div',_0x308226['TSCDa'],_0x308226[_0x114c42(0x546)]);_0x1eab20[_0x114c42(0x3de)+_0x114c42(0xbda)+'d'](_0x42a60c),_0x1eab20[_0x114c42(0x3de)+_0x114c42(0xbda)+'d'](_0x4d4d37);var _0x3c08be=_0x308226[_0x114c42(0x68d)](_0x391aa5,_0x308226[_0x114c42(0x929)],'mn-cl'+'ose',_0x114c42(0x514)+'viewB'+'ox=\x220'+_0x114c42(0xa54)+_0x114c42(0x370)+_0x114c42(0x364)+_0x114c42(0x307)+'6\x206l1'+_0x114c42(0xbe3)+_0x114c42(0x420)+_0x114c42(0x498)+_0x114c42(0xbad)+'vg>');_0x3c08be[_0x114c42(0x5dc)+'ck']=function(){var _0xb9fde=_0x114c42,_0xa0e51b={'KpnuZ':_0xb9fde(0x62a)+'\x20heap'+_0xb9fde(0x3b8)+'0x'};if(_0x308226['zMfFW']!=='BgLHR')_0x12bf0e(![]);else return _0x86a52f[_0xb9fde(0x7de)+'d']++,_0x34f125['lastE'+_0xb9fde(0xa15)]=_0x467fe9[_0xb9fde(0xbfe)+_0xb9fde(0xa15)]||_0xb9fde(0x9ab)+_0xb9fde(0x33a)+_0x4b9b5c[_0xb9fde(0x8d4)+_0xb9fde(0x1aa)](0x9ac*-0x2+0xc2*-0x25+0x2f72)+_0xa0e51b[_0xb9fde(0x3ab)]+_0x474433[_0xb9fde(0xb28)+'ength'][_0xb9fde(0x8d4)+_0xb9fde(0x1aa)](-0x3*-0x468+0x1152+-0x2*0xf3d),_0x4b0bbe;},_0x4067b7['appen'+'dChil'+'d'](_0x1eab20),_0x4067b7['appen'+_0x114c42(0xbda)+'d'](_0x3c08be);var _0x5e6366=_0x391aa5(_0x308226['zCkPo'],_0x308226[_0x114c42(0xa32)]);_0x3d5f8b['appen'+'dChil'+'d'](_0x4067b7),_0x3d5f8b[_0x114c42(0x3de)+_0x114c42(0xbda)+'d'](_0x5e6366),_0x567ce5[_0x114c42(0x3de)+'dChil'+'d'](_0x5b60af),_0x567ce5['appen'+_0x114c42(0xbda)+'d'](_0x3d5f8b),document[_0x114c42(0x2d0)]['appen'+_0x114c42(0xbda)+'d'](_0x567ce5),_0x1faeb2[_0x114c42(0x19c)]=_0x567ce5,_0x1faeb2[_0x114c42(0x6c2)]=_0x5e6366,_0x1faeb2[_0x114c42(0x2dc)]=_0x42a60c,_0x1faeb2['sub']=_0x4d4d37,_0x308226[_0x114c42(0xac4)](_0x5e351e),_0x314644(),_0x58a698(_0x567ce5,_0x4067b7);var _0x507166={};for(var _0x1030f8=0x2041+0x2514+0x4555*-0x1;_0x1030f8<_0x3ff3f4[_0x114c42(0x687)+'h'];_0x1030f8++){var _0x1089df=_0x3ff3f4[_0x1030f8],_0x138c23=_0x308226['MWxqm'](_0x391aa5,_0x308226[_0x114c42(0x610)],_0x114c42(0x78d)+'b',_0x308226[_0x114c42(0x2c6)](_0x308226[_0x114c42(0x894)],_0x1089df['label'])+_0x308226[_0x114c42(0x8a4)]);_0x138c23['type']='butto'+'n',_0x138c23[_0x114c42(0xb3a)]=_0x1089df['label'],function(_0x435e80){var _0xa9d881=_0x114c42,_0x1c84e0={'Mvqwb':function(_0x4c7ff2,_0x1a28b6){return _0x4c7ff2===_0x1a28b6;},'ZoQEq':_0x508f44[_0xa9d881(0x570)]};if(_0x508f44['bGbxR'](_0xa9d881(0x92a),_0x508f44[_0xa9d881(0x723)]))_0x138c23[_0xa9d881(0x5dc)+'ck']=function(){var _0x1cd4fe=_0xa9d881;_0x508f44[_0x1cd4fe(0xa25)](_0x3d8e5f,_0x435e80);};else{var _0x46d7ee=_0x56c539['_runt'+'ime'];if(_0x1c84e0[_0xa9d881(0x367)](typeof _0x46d7ee[_0xa9d881(0x84f)+'veGam'+'e'],_0x1c84e0[_0xa9d881(0x43b)])){var _0x5b0de8=_0x46d7ee[_0xa9d881(0x84f)+'veGam'+'e']();if(_0x5b0de8)return _0x350e81[_0xa9d881(0x997)+'e']='plugi'+_0xa9d881(0x664)+'ntime'+_0xa9d881(0x6f0)+'lveGa'+_0xa9d881(0x971),_0x5b0de8;}if(_0x46d7ee[_0xa9d881(0xa33)])return _0x204810[_0xa9d881(0x997)+'e']='plugi'+'n._ru'+'ntime'+'._gam'+'e',_0x46d7ee[_0xa9d881(0xa33)];}}(_0x1089df['id']),_0x507166[_0x1089df['id']]=_0x138c23,_0x5b60af[_0x114c42(0x3de)+'dChil'+'d'](_0x138c23);}_0x1faeb2[_0x114c42(0xb04)+'ns']=_0x507166;var _0x8158f0=_0x391aa5(_0x308226['zCkPo'],null,_0x309bb7);return _0x8158f0['id']='sakur'+_0x114c42(0x3ff)+'al',_0x8158f0['title']=_0x114c42(0x2cc)+'a\x20Ski'+_0x114c42(0x53b)+'z\x20(In'+'sert)',_0x8158f0[_0x114c42(0x7d6)+'seent'+'er']=function(){var _0x4a4bfe=_0x114c42;_0x8158f0[_0x4a4bfe(0x74c)][_0x4a4bfe(0x913)+'ty']='1';},_0x8158f0['onmou'+_0x114c42(0x924)+'ve']=function(){var _0x21eac2=_0x114c42;_0x8158f0[_0x21eac2(0x74c)][_0x21eac2(0x913)+'ty']=_0x1faeb2[_0x21eac2(0x373)]?'1':'.5';},_0x8158f0['oncli'+'ck']=function(_0x5f219c){var _0x57b10f=_0x114c42;if(_0x5f219c&&_0x5f219c['stopP'+_0x57b10f(0xa3f)+_0x57b10f(0x4f2)])_0x5f219c['stopP'+'ropag'+_0x57b10f(0x4f2)]();_0x12bf0e(!_0x1faeb2[_0x57b10f(0x373)]);},document[_0x114c42(0x2d0)]['appen'+_0x114c42(0xbda)+'d'](_0x8158f0),_0x1faeb2[_0x114c42(0x856)]=_0x8158f0,_0x308226[_0x114c42(0xbeb)](setInterval,function(){var _0x518b97=_0x114c42,_0x2047f7={'ZmwXU':function(_0x133d1a,_0x246383){return _0x308226['uSOQO'](_0x133d1a,_0x246383);},'EIRka':function(_0x3a10f7,_0x531f53){return _0x308226['vBiOp'](_0x3a10f7,_0x531f53);}};try{if(_0x308226[_0x518b97(0x5a2)](_0x308226[_0x518b97(0x84a)],_0x518b97(0xabb))){if(!_0x1faeb2[_0x518b97(0x856)])return;var _0xd27492=_0x308226[_0x518b97(0x606)](_0x4b087d);_0x1faeb2[_0x518b97(0x856)]['style']['opaci'+'ty']=_0x1faeb2[_0x518b97(0x373)]?'1':_0xd27492?'.8':_0x518b97(0x4a2),_0x1faeb2[_0x518b97(0x856)][_0x518b97(0xb3a)]=_0xd27492?_0x308226['XOArs']:_0x518b97(0x2cc)+_0x518b97(0x359)+'llWar'+'z\x20-\x20w'+'aitin'+_0x518b97(0xbd2)+'\x20the\x20'+'game\x20'+_0x518b97(0x213)+'rt)';}else{var _0x5c95c8='';for(var _0x3d3e8c=0x889+0x13c5+-0x1c4e*0x1;_0x2047f7['ZmwXU'](_0x3d3e8c,_0xa51bdb['lengt'+'h']);_0x3d3e8c++){var _0x555272=_0x364655[_0x3d3e8c][_0x518b97(0x8d4)+'ing'](-0x3*-0x97c+-0x2591+-0x1b*-0x57);_0x5c95c8+=_0x2047f7[_0x518b97(0x1a7)](_0x555272[_0x518b97(0x687)+'h']<0xd4*-0x2d+0xca3+0x18a3?'0':'',_0x555272);}return _0x5c95c8;}}catch(_0x551c5a){}},0x8*0x43+0x22a5+-0x2201),_0x1faeb2[_0x114c42(0xa73)]=!![],_0x3d8e5f(_0x1faeb2[_0x114c42(0xc2d)]),_0x567ce5;}catch(_0x54dca6){return console['warn'](_0x114c42(0x437)+_0x114c42(0x6e9)+'\x20menu'+'\x20unav'+_0x114c42(0x5b5)+'le',_0x114c42(0x62e)+':'+_0x36b2b2,_0x54dca6),null;}}function _0x3d8e5f(_0x5a978c){var _0x1d2ebd=_0xc5af74,_0x5831ac={'BpzsC':_0x1d2ebd(0xa3d)+_0x1d2ebd(0x5a7)+_0x1d2ebd(0x30b)};_0x1faeb2[_0x1d2ebd(0xc2d)]=_0x5a978c,_0x1faeb2[_0x1d2ebd(0x444)]=[];if(!_0x1faeb2['cols'])return;var _0x953d53=null;for(var _0x16c4dc=-0x1*0x259d+0x11ba+0x3*0x6a1;_0x308226['jcEIK'](_0x16c4dc,_0x3ff3f4[_0x1d2ebd(0x687)+'h']);_0x16c4dc++)if(_0x3ff3f4[_0x16c4dc]['id']===_0x5a978c)_0x953d53=_0x3ff3f4[_0x16c4dc];_0x1faeb2['head'][_0x1d2ebd(0x500)+'onten'+'t']='Sakur'+_0x1d2ebd(0x359)+_0x1d2ebd(0x53b)+_0x1d2ebd(0x198)+(_0x953d53&&_0x953d53['label']||'?');for(var _0x39c52e in _0x1faeb2[_0x1d2ebd(0xb04)+'ns']){if(_0x308226['CpziP'](_0x1d2ebd(0x81a),'xskrQ'))_0x308226[_0x1d2ebd(0x5c5)](_0x5204a4[_0x1d2ebd(0x293)+_0x1d2ebd(0x46c)+'ved'],-0xb9*0xa+0x1*-0x2498+0x2bd2)?_0x265714[_0x1d2ebd(0x5c0)+'ngs'][_0x1d2ebd(0x3f8)](_0x308226[_0x1d2ebd(0x70d)](_0x308226[_0x1d2ebd(0x554)]('0\x20of\x20'+_0x3bbe98[_0x1d2ebd(0x293)+_0x1d2ebd(0x548)]+('\x20hook'+'s\x20wer'+'e\x20eve'+'n\x20SEE'+'N\x20by\x20'+'UWMK.'+_0x1d2ebd(0x9d8)+'apply'+_0x1d2ebd(0x9f1)+'\x20')+(_0x1d2ebd(0xbf0)+'once\x20'+'durin'+'g\x20Web'+_0x1d2ebd(0x764)+_0x1d2ebd(0xbbe)+_0x1d2ebd(0x900)+'tiate'+_0x1d2ebd(0x906)+_0x1d2ebd(0xb2d)+'hots\x20'+'plugi'+'n.hoo'+'ks.le'+_0x1d2ebd(0x621)+'\x20')+_0x308226['xTfkH'],_0x308226[_0x1d2ebd(0x7c2)]),_0x4f0d25[_0x1d2ebd(0x293)+_0x1d2ebd(0x348)+_0x1d2ebd(0x432)+_0x1d2ebd(0x44e)])+(_0x1d2ebd(0x6d1)+_0x1d2ebd(0x718)+_0x1d2ebd(0x9b6)+'\x20armi'+_0x1d2ebd(0x352)+'\x20docu'+'ment-'+_0x1d2ebd(0x39d)+'.')):_0x4fc67e[_0x1d2ebd(0x5c0)+'ngs'][_0x1d2ebd(0x3f8)](_0x308226[_0x1d2ebd(0x7b1)](_0x308226[_0x1d2ebd(0x9a6)](_0x308226[_0x1d2ebd(0x94e)](_0x1d2ebd(0x9e2)+_0x1d2ebd(0x84f)+_0x1d2ebd(0xad9),_0x361616[_0x1d2ebd(0x293)+'Resol'+'ved'])+_0x1d2ebd(0x22a),_0xd0647e[_0x1d2ebd(0x293)+'Total'])+_0x308226[_0x1d2ebd(0xa2a)],_0x1d2ebd(0x268)+',\x20Met'+_0x1d2ebd(0x83b)+_0x1d2ebd(0x8ad)+'->\x20vo'+_0x1d2ebd(0x597)+'es\x20no'+'t\x20mat'+'ch\x20th'+'is\x20bu'+_0x1d2ebd(0x5b9)));else{if(_0x1faeb2[_0x1d2ebd(0xb04)+'ns'][_0x39c52e]['class'+'List'])_0x1faeb2['butto'+'ns'][_0x39c52e][_0x1d2ebd(0x1a0)+_0x1d2ebd(0x5ec)]=_0x1d2ebd(0x78d)+'b'+(_0x39c52e===_0x5a978c?_0x308226['NmTnl']:'');}}var _0x1d465f=[];try{_0x1d465f=_0x5ca101(_0x5a978c);}catch(_0x17bd34){if(_0x308226['tbqFa']!=='syVja')_0x1d465f=[];else{var _0x2b17ac=_0x4f4d87[_0x1d2ebd(0xa41)+_0x1d2ebd(0x61b)+_0x1d2ebd(0xbc1)]||_0x12377e['unity'+'Game']||_0x1647ca[_0x1d2ebd(0x78a)];if(_0x2b17ac)return _0x1e81cf[_0x1d2ebd(0x997)+'e']=_0x5831ac[_0x1d2ebd(0x3f2)],_0x2b17ac;}}while(_0x1faeb2[_0x1d2ebd(0x6c2)]['first'+_0x1d2ebd(0x785)])_0x1faeb2['cols']['remov'+'eChil'+'d'](_0x1faeb2['cols'][_0x1d2ebd(0x56b)+'Child']);for(var _0x399906=-0x2295+-0x1a6b+-0x3d00*-0x1;_0x399906<_0x1d465f[_0x1d2ebd(0x687)+'h'];_0x399906++)_0x1faeb2[_0x1d2ebd(0x6c2)]['appen'+_0x1d2ebd(0xbda)+'d'](_0x1d465f[_0x399906]);}function _0x12bf0e(_0x5d88cb){var _0x4868f5=_0xc5af74;_0x1faeb2[_0x4868f5(0x373)]=!!_0x5d88cb;var _0x1b2b9c=_0x41e19e();if(!_0x1b2b9c)return;_0x1b2b9c[_0x4868f5(0x1a0)+'Name']=_0x4868f5(0xbcc)+_0x4868f5(0x231)+(_0x1faeb2['open']?_0x308226['eBmKd']:'');if(_0x1faeb2[_0x4868f5(0x856)])_0x1faeb2['petal'][_0x4868f5(0x74c)][_0x4868f5(0x913)+'ty']=_0x1faeb2['open']?'1':'.5';if(_0x1faeb2['open']){if('hKWAL'!==_0x4868f5(0x886)){if(_0x5e375e[_0x23d2fc]['conte'+_0x4868f5(0x399)+'dow'])_0x2a5928[_0x170b46]['conte'+'ntWin'+'dow'][_0x4868f5(0x966)+'essag'+'e'](_0x13117f,'*');}else{_0x3d8e5f(_0x1faeb2[_0x4868f5(0xc2d)]);try{var _0x47a76d=window['inner'+_0x4868f5(0x938)+'t']||-0x19*0xb7+0x5*-0x17b+-0xa*-0x2d7;if(_0x308226[_0x4868f5(0xa57)](_0x47a76d,-0x18ad+-0x254f+0x4068))_0x308226[_0x4868f5(0x387)](_0x2e8aac,![]);}catch(_0x32fd7f){}}}}function _0x1cd5d6(){var _0x1ce7d0=_0xc5af74,_0x227946={'CeUEe':function(_0x1c2e48,_0x40c62a){var _0x3cf70c=_0x45e7;return _0x308226[_0x3cf70c(0xab6)](_0x1c2e48,_0x40c62a);},'bjEfF':function(_0x57b065,_0x1bc7d9){var _0x39c832=_0x45e7;return _0x308226[_0x39c832(0x492)](_0x57b065,_0x1bc7d9);}};if(!_0x1faeb2[_0x1ce7d0(0x373)]||!_0x1faeb2[_0x1ce7d0(0xa73)])return;try{for(var _0x16c603=-0x4cc+-0x3*0x46b+0x120d*0x1;_0x308226[_0x1ce7d0(0x5ed)](_0x16c603,_0x1faeb2['syncs'][_0x1ce7d0(0x687)+'h']);_0x16c603++){if(_0x1ce7d0(0x2d5)!==_0x308226[_0x1ce7d0(0x995)])try{_0x1faeb2['syncs'][_0x16c603]();}catch(_0x1d220d){}else return _0x2e41cb['faile'+'d']++,_0x3eec37[_0x1ce7d0(0xbfe)+_0x1ce7d0(0xa15)]=_0xa71ce1[_0x1ce7d0(0xbfe)+'rror']||_0x1ce7d0(0x6d7)+_0x1ce7d0(0xa03)+_0x1ce7d0(0x65d)+'ty\x20in'+_0x1ce7d0(0x9cc)+_0x1ce7d0(0x4e5)+'\x20reac'+_0x1ce7d0(0x9f0)+'\x20via\x20'+'Runti'+_0x1ce7d0(0x849)+_0x1ce7d0(0x9d3)+'Game('+_0x1ce7d0(0x3d4)+'any\x20w'+_0x1ce7d0(0x18a)+_0x1ce7d0(0xc25)+'al',_0x209775;}var _0x580ee0=_0x1794da;_0x1faeb2['sub'][_0x1ce7d0(0x500)+'onten'+'t']=_0x580ee0?_0x308226[_0x1ce7d0(0xbbf)](_0x308226['uXoxj'](_0x308226[_0x1ce7d0(0x7ec)](_0x308226[_0x1ce7d0(0x5c6)](_0x308226[_0x1ce7d0(0x9fa)]('v',_0x580ee0[_0x1ce7d0(0x354)+'on'])+(_0x1ce7d0(0xb16)+_0x1ce7d0(0x293)+'\x20'),_0x580ee0['hooks'+_0x1ce7d0(0x947)+'ed'])+'/'+_0x580ee0[_0x1ce7d0(0x293)+'Total'],'\x20\x20·\x20\x20'+_0x1ce7d0(0x568)+'rs\x20'),_0x580ee0['esp']&&_0x580ee0[_0x1ce7d0(0x731)]['playe'+_0x1ce7d0(0x69b)+'t']||0x2509+0x695*0x1+0x2b9e*-0x1)+_0x308226[_0x1ce7d0(0x1d6)],_0x580ee0[_0x1ce7d0(0x4d1)+_0x1ce7d0(0xa00)]&&_0x580ee0[_0x1ce7d0(0x4d1)+_0x1ce7d0(0xa00)][_0x1ce7d0(0x793)+'red']?Math[_0x1ce7d0(0x647)](_0x580ee0['wasmM'+_0x1ce7d0(0xa00)][_0x1ce7d0(0xbf1)]/(-0x1c4451+0x139926+0x18ab2b))+'MB':'-'):_0x1ce7d0(0x240)+_0x1ce7d0(0xc04)+_0x1ce7d0(0x6dd)+'\x20firs'+_0x1ce7d0(0x547)+_0x1ce7d0(0x948);var _0x205a01=_0x1faeb2[_0x1ce7d0(0x6c2)][_0x1ce7d0(0x32e)+_0x1ce7d0(0x4b8)+_0x1ce7d0(0xb68)+'l']?_0x1faeb2[_0x1ce7d0(0x6c2)][_0x1ce7d0(0x32e)+'Selec'+_0x1ce7d0(0xb68)+'l'](_0x1ce7d0(0x66a)+_0x1ce7d0(0x3c7)):[];for(var _0x440fec=0x1e34+0x20d3*-0x1+-0xb*-0x3d;_0x308226[_0x1ce7d0(0x7b5)](_0x440fec,_0x205a01[_0x1ce7d0(0x687)+'h']);_0x440fec++){if(_0x308226[_0x1ce7d0(0x224)](_0x1ce7d0(0x540),'yFOKO')){if(_0x2d8dc5)return _0x47708e;try{var _0x341fca=(_0x1ce7d0(0xbcf)+_0x1ce7d0(0x510)+_0x1ce7d0(0x565))[_0x1ce7d0(0x3c2)]('|'),_0x4c58b3=0x2b5*-0x2+0x1875+-0x130b;while(!![]){switch(_0x341fca[_0x4c58b3++]){case'0':_0x777832={'cv':_0x47133a};continue;case'1':_0x47133a[_0x1ce7d0(0x74c)][_0x1ce7d0(0x9be)+'xt']=_0x1ce7d0(0x7ff)+'ion:f'+_0x1ce7d0(0x998)+'left:'+_0x1ce7d0(0x937)+_0x1ce7d0(0x52c)+_0x1ce7d0(0x1e7)+_0x1ce7d0(0x5e3)+_0x1ce7d0(0x3c9)+_0x1ce7d0(0xa99)+_0x1ce7d0(0x941)+_0x1ce7d0(0xc6f)+_0x1ce7d0(0x80d)+'e;';continue;case'2':_0x1139ce[_0x1ce7d0(0x2d0)][_0x1ce7d0(0x3de)+_0x1ce7d0(0xbda)+'d'](_0x47133a);continue;case'3':var _0x47133a=_0x3ba525[_0x1ce7d0(0x9a3)+_0x1ce7d0(0x972)+_0x1ce7d0(0x964)](_0x308226[_0x1ce7d0(0x8ca)]);continue;case'4':_0x47133a['id']='sakur'+_0x1ce7d0(0x529)+'es';continue;case'5':return _0x2115e9;case'6':if(!_0x19dd41[_0x1ce7d0(0x2d0)]||!_0x5bacfe[_0x1ce7d0(0x2d0)]['appen'+'dChil'+'d'])return null;continue;}break;}}catch(_0x1653a8){return null;}}else{var _0xc4fce2=_0x205a01[_0x440fec][_0x1ce7d0(0x9bd)+'et']['k'],_0xb9fae3='';if(_0xc4fce2===_0x308226['cMlgc'])_0xb9fae3=_0x580ee0?_0x580ee0['versi'+'on']:'-';else{if(_0xc4fce2===_0x308226[_0x1ce7d0(0x8e7)])_0xb9fae3=_0x580ee0?_0x580ee0['hooks'+_0x1ce7d0(0x947)+'ed']+_0x1ce7d0(0x5a3)+_0x580ee0[_0x1ce7d0(0x293)+'Regis'+_0x1ce7d0(0x432)+'AtArm']:'-';else{if(_0x308226[_0x1ce7d0(0x403)](_0xc4fce2,_0x308226['IoKAY']))_0xb9fae3=_0x580ee0&&_0x580ee0[_0x1ce7d0(0x4d1)+_0x1ce7d0(0xa00)]&&_0x580ee0['wasmM'+_0x1ce7d0(0xa00)]['captu'+_0x1ce7d0(0x48b)]?_0x308226['QhVVK'](_0x308226[_0x1ce7d0(0x2a3)](Math['round'](_0x580ee0[_0x1ce7d0(0x4d1)+'emory'][_0x1ce7d0(0xbf1)]/(-0x16113a+-0x1d69eb+-0x1*-0x437b25))+_0x308226[_0x1ce7d0(0x398)],_0x580ee0[_0x1ce7d0(0x4d1)+_0x1ce7d0(0xa00)][_0x1ce7d0(0x755)]),'ms'):'-';else{if(_0xc4fce2==='Photo'+_0x1ce7d0(0x236)+_0x1ce7d0(0x20c)+'nc')_0xb9fae3=_0x580ee0&&_0x580ee0['esp']?_0x308226[_0x1ce7d0(0x79c)](String,_0x580ee0[_0x1ce7d0(0x731)]['playe'+_0x1ce7d0(0x69b)+'t']):'-';else{if(_0x308226[_0x1ce7d0(0x757)](_0xc4fce2,_0x1ce7d0(0xa27)+_0x1ce7d0(0x309)+_0x1ce7d0(0x2e8)+'u'))_0xb9fae3=_0x580ee0&&_0x580ee0['esp']?String(_0x580ee0['esp']['enemy'+'Count']):'-';else{if(_0xc4fce2==='off\x20t'+_0x1ce7d0(0xb8f)+'ve\x20ma'+'nager')_0xb9fae3=_0x580ee0&&_0x580ee0[_0x1ce7d0(0x731)]&&_0x580ee0[_0x1ce7d0(0x731)][_0x1ce7d0(0x64b)+'a']?_0x308226[_0x1ce7d0(0xc38)](_0x580ee0[_0x1ce7d0(0x731)][_0x1ce7d0(0x64b)+'a'],'\x20(')+_0x580ee0[_0x1ce7d0(0x731)][_0x1ce7d0(0x64b)+'aFrom']+')':'-';else{if(_0xc4fce2===_0x308226[_0x1ce7d0(0xacb)])_0xb9fae3=_0x580ee0&&_0x580ee0[_0x1ce7d0(0x1d4)]&&_0x580ee0[_0x1ce7d0(0x1d4)][_0x1ce7d0(0x784)]?_0x580ee0[_0x1ce7d0(0x1d4)]['feet'][_0x1ce7d0(0x356)](function(_0x56f01f){var _0x4281f5=_0x1ce7d0;return Math[_0x4281f5(0x647)](_0x56f01f*(0x1*0x1f46+-0x1f31*-0x1+0x14b1*-0x3))/(0x58f*0x7+-0x13a5+-0x12e0);})['join']('\x20\x20'):'-';else{if(_0xc4fce2===_0x308226['ZBSzb'])_0xb9fae3=_0x580ee0&&_0x580ee0[_0x1ce7d0(0x1d4)]&&_0x580ee0['local'][_0x1ce7d0(0xbc8)]?_0x580ee0[_0x1ce7d0(0x1d4)][_0x1ce7d0(0xbc8)]['map'](function(_0x5f0cff){var _0x26d633=_0x1ce7d0;return _0x227946[_0x26d633(0xc2e)](Math[_0x26d633(0x647)](_0x227946[_0x26d633(0x636)](_0x5f0cff,-0x17*-0x1b+0x4f*-0x31+0x5*0x29e)),0x95b+0x5a0+-0xe97);})[_0x1ce7d0(0x19a)]('\x20\x20'):'-';else{var _0x3dd8bd=_0xc4fce2['split']('+');_0xb9fae3=_0x308226[_0x1ce7d0(0xba1)](_0x23ef8f,_0x580ee0,_0x308226[_0x1ce7d0(0x313)](_0x3dd8bd[-0x1aa0+0x1c95+-0x1f5]['index'+'Of'](_0x308226[_0x1ce7d0(0x760)]),-0x782*-0x4+0x1ab1+-0x38b9)?_0x1ce7d0(0x2ed)+'hScri'+'pt':_0x308226['bOYOt'],_0x308226['buUGe'](parseInt,_0x3dd8bd[-0x2ad*-0x8+-0xe*-0x227+-0x3389],0xed7*-0x1+-0xe3b+0x1d22));}}}}}}}}if(_0xb9fae3!==_0x205a01[_0x440fec][_0x1ce7d0(0x500)+'onten'+'t'])_0x205a01[_0x440fec][_0x1ce7d0(0x500)+'onten'+'t']=_0xb9fae3;}}}catch(_0xedf670){}}function _0x2a1d0f(){var _0x1b3938=_0xc5af74,_0x28570a={'CynHJ':_0x308226['HZvjL'],'IoTFg':function(_0x3288eb,_0x19cdf3){return _0x3288eb+_0x19cdf3;},'SaoIw':function(_0x128616,_0x17ca49){return _0x128616(_0x17ca49);}};try{if(_0x308226[_0x1b3938(0x50e)](_0x308226[_0x1b3938(0xc6e)],_0x308226[_0x1b3938(0x54f)])){var _0xbbc9cc=_0x308226['wAoRX'](_0x17b226);return _0xbbc9cc&&_0xbbc9cc[_0x1b3938(0x784)]?_0xbbc9cc['feet'][-0x1353+0x1083+0x67*0x7]:null;}else{var _0x52a960=_0x33bef1[_0x56ab6e];try{var _0x2b890f=_0x50c641[_0x1b3938(0xc53)+_0x1b3938(0x899)]({'typeName':_0x52a960['type'],'methodName':_0x28570a[_0x1b3938(0x99e)],'params':['i32','i32'],'returnType':_0x2503d5},_0x25f036(_0x52a960[_0x1b3938(0x7af)],_0x52a960[_0x1b3938(0x5ca)],_0x52a960['many']));_0x42a36e[_0x1b3938(0x3f8)]({'type':_0x52a960[_0x1b3938(0x7af)],'hook':_0x2b890f,'keep':_0x52a960['keep']});}catch(_0xdaf78c){_0x546978[_0x1b3938(0x3f8)](_0x28570a[_0x1b3938(0x89f)](_0x28570a['IoTFg'](_0x52a960['type'],':\x20'),_0x28570a[_0x1b3938(0x9ce)](_0x29661c,_0xdaf78c&&_0xdaf78c[_0x1b3938(0x2ff)+'ge']||_0xdaf78c)['slice'](-0x1520+-0x6f0+0x1*0x1c10,-0x1*-0x1ffa+-0xbad*0x1+0x3*-0x68f)));}}}catch(_0x1bf8a5){return null;}}var _0x5ed0d6=-0x1dfa+0x1*0xd7d+-0x1*-0x107f+0.5,_0x3b933c=-0x9e8+0x1735+0x46d*-0x3+0.25,_0xa35a9f=-0x300+0x45a*-0x4+0x37*0x5f+0.8;function _0x2f1e19(_0x1ae39b,_0x1b2f50){var _0x26304d=_0xc5af74,_0x5f571d=[],_0xed8da3,_0x227f08,_0x25aabd=_0x1b2f50!==null&&_0x308226[_0x26304d(0x242)](_0x1b2f50,undefined)&&_0x308226['lUIwk'](isFinite,_0x1b2f50);for(_0xed8da3=0xffd+0x206e+-0x306b;_0xed8da3<_0x1ae39b[_0x26304d(0x687)+'h'];_0xed8da3++){var _0x2a67b3=_0x1ae39b[_0xed8da3]['v'];if(!_0x2a67b3)continue;if(_0x308226[_0x26304d(0x224)](_0x2a67b3[0x3d9*0x8+-0x1*0x24a9+0x5e1],-0x192b+0x28*-0xec+0x3e0b)&&_0x2a67b3[-0x1b4d+0x2*0x68d+0xe34]===0x1b3a+0x665*-0x1+-0x1*0x14d5&&_0x2a67b3[-0xf4f+0x55*0x1d+0x5b0]===0x1690+0x1697*-0x1+-0x1*-0x7)continue;if(_0x25aabd&&Math['abs'](_0x2a67b3[-0xdaa+0x5*-0x633+-0x1655*-0x2]-_0x1b2f50)>_0x5ed0d6)continue;_0x5f571d[_0x26304d(0x3f8)](_0x1ae39b[_0xed8da3]);}if(!_0x5f571d['lengt'+'h'])for(_0xed8da3=0x2466+0x22*-0x10a+-0x112;_0xed8da3<_0x1ae39b['lengt'+'h'];_0xed8da3++){var _0x20172a=_0x1ae39b[_0xed8da3]['v'];if(!_0x20172a)continue;if(_0x20172a[-0x680+0x18*0x17f+-0x75a*0x4]===-0x1*0x1d0+0x4e3*0x7+-0x2065&&_0x20172a[0x25*0x35+-0x3a9*-0x2+-0xefa]===0x1eec+0x1*-0x1b29+-0x3c3*0x1&&_0x308226['HDPGd'](_0x20172a[0x28*-0x29+-0x24a6+0xac4*0x4],-0xa4b+0x25a2+0x1b57*-0x1))continue;_0x5f571d[_0x26304d(0x3f8)](_0x1ae39b[_0xed8da3]);}if(!_0x5f571d[_0x26304d(0x687)+'h'])return{'pos':null,'posAt':null,'inBand':0x0,'cluster':0x0,'reach':0x0};var _0x24728f=[];for(_0xed8da3=-0x2621+-0xcf5+-0x1*-0x3316;_0xed8da3<_0x5f571d[_0x26304d(0x687)+'h'];_0xed8da3++){var _0x29001f=_0x5f571d[_0xed8da3]['v'],_0x201923=-(-0x13*0x187+-0x1360+0x3066);for(_0x227f08=-0xd4e*0x1+-0x11b*-0x1b+-0x108b;_0x308226['uSOQO'](_0x227f08,_0x24728f[_0x26304d(0x687)+'h']);_0x227f08++){var _0x1e371d=_0x24728f[_0x227f08]['c'][-0x708+0x1*-0x1e4f+0x2557]['v'],_0x2f8063=_0x29001f[0x16ff+0x8b*-0x17+-0xa*0x10d]-_0x1e371d[-0x542*-0x1+-0x1*0x2349+0x1*0x1e07],_0x4ef799=_0x29001f[0x1982*-0x1+-0x1655*0x1+0x2fd8]-_0x1e371d[-0x1d*0x73+0x1e5f*0x1+-0x1*0x1157],_0x38d320=_0x29001f[-0x1873+-0x135e+0x2bd3]-_0x1e371d[0xcc3+0xff2+-0x1cb3];if(_0x308226[_0x26304d(0xbe9)](_0x2f8063,_0x2f8063)+_0x308226['CGNKU'](_0x4ef799,_0x4ef799)+_0x308226[_0x26304d(0x7d9)](_0x38d320,_0x38d320)<=_0x3b933c){_0x201923=_0x227f08;break;}}if(_0x308226['HySAU'](_0x201923,-(-0xc1*0x2c+-0x7e3+0x2910)))_0x24728f[_0x26304d(0x3f8)]({'c':[_0x5f571d[_0xed8da3]]});else _0x24728f[_0x201923]['c']['push'](_0x5f571d[_0xed8da3]);}var _0x37d7b3=_0x24728f[-0xcfb*-0x3+-0x459*0x1+0x18*-0x171];for(_0x227f08=-0x1*-0xd9+-0xdf*-0x19+0x169f*-0x1;_0x227f08<_0x24728f['lengt'+'h'];_0x227f08++)if(_0x24728f[_0x227f08]['c'][_0x26304d(0x687)+'h']>_0x37d7b3['c'][_0x26304d(0x687)+'h'])_0x37d7b3=_0x24728f[_0x227f08];var _0x41a38c=_0x37d7b3['c'][-0x54c+-0xaf*0x32+0x3e*0xa3],_0x5c4ec8=-(-0x1630+0xd0a+0xb*0xd5);for(_0x227f08=-0x167*-0xb+0x11*0x1ac+0x2bd9*-0x1;_0x227f08<_0x37d7b3['c'][_0x26304d(0x687)+'h'];_0x227f08++){var _0x443519=_0x37d7b3['c'][_0x227f08]['v'],_0x5ee32a=_0x308226['UPjDI'](_0x443519[-0x19db*-0x1+-0x237*0x4+0xe5*-0x13],_0x443519[-0xa46+-0x5bc+-0x801*-0x2])+_0x443519[-0x22b1*-0x1+0x93a+0x4e1*-0x9]*_0x443519[0x12b7+-0x6d*0x56+0x11e9];(_0x308226[_0x26304d(0xc1c)](_0x5ee32a,_0x5c4ec8)||_0x5ee32a===_0x5c4ec8&&_0x308226[_0x26304d(0x767)](_0x443519[0x23da+0x11a4+-0x357d],_0x41a38c['v'][0x4e+-0x11bd+0x7c*0x24]))&&(_0x5c4ec8=_0x5ee32a,_0x41a38c=_0x37d7b3['c'][_0x227f08]);}return{'pos':_0x41a38c['v'],'posAt':_0x41a38c['o'],'inBand':_0x25aabd?_0x5f571d[_0x26304d(0x687)+'h']:0x17f+-0xa05+0x886,'cluster':_0x37d7b3['c'][_0x26304d(0x687)+'h'],'groups':_0x24728f[_0x26304d(0x687)+'h'],'reach':Math[_0x26304d(0x3a0)](_0x5c4ec8)};}function _0x17b226(){var _0x14c7f9=_0xc5af74,_0x3a9d52={'OxokY':function(_0x292490,_0x6284a3){return _0x308226['oShaQ'](_0x292490,_0x6284a3);}},_0x3bee1d=_0x44e9a2[_0x14c7f9(0x262)+_0x14c7f9(0x9b9)+_0x14c7f9(0x2df)];if(!_0x3bee1d||!_0x3bee1d[_0x14c7f9(0x1fb)])return null;var _0x2d04cc=_0x3c44e9[_0x14c7f9(0x262)+'ntrol'+_0x14c7f9(0x2df)]||[],_0x3367d6=[];for(var _0xcb3f29=-0x1a6c+0xaa9*-0x1+0x2515;_0xcb3f29<_0x2d04cc[_0x14c7f9(0x687)+'h'];_0xcb3f29++){if(_0x308226[_0x14c7f9(0x818)](_0x2d04cc[_0xcb3f29][-0x82f*0x2+-0x1c42*-0x1+-0xb3*0x11],'v3'))continue;var _0x31405b=_0x2b05eb(_0x3bee1d['ptr'],_0x2d04cc[_0xcb3f29][-0xfc7+-0x26c+-0x1233*-0x1],0xe13+0x1ee8+0x4*-0xb3e);if(_0x31405b)_0x3367d6[_0x14c7f9(0x3f8)]({'o':_0x308226['BasCo']('0x',_0x2d04cc[_0xcb3f29][0x61d*-0x3+-0x2*-0xebb+-0xdb*0xd]['toStr'+'ing'](0xfc*0xb+0xe2*-0x27+0x17aa)),'v':_0x31405b});}var _0x11cf52=_0x2f1e19(_0x3367d6,null);if(!_0x11cf52[_0x14c7f9(0x54d)])return null;var _0xef7968=_0x11cf52['pos'];return{'ptr':_0x3bee1d[_0x14c7f9(0x1fb)],'feet':_0xef7968,'posAt':_0x11cf52['posAt'],'inBand':_0x11cf52[_0x14c7f9(0xb6e)+'d'],'cluster':_0x11cf52[_0x14c7f9(0x4b7)+'er'],'copies':_0x3367d6['filte'+'r'](function(_0x1e613c){var _0x1a30e0=_0x14c7f9;return _0x3a9d52[_0x1a30e0(0xbba)](_0x1e613c['v'][-0xe10+0x392+0xa7e],_0xef7968[0x210c+-0x98a+-0x1782])&&_0x1e613c['v'][-0x55+-0x72*-0x41+0x4*-0x727]===_0xef7968[0x213f+-0x1*-0x161e+-0x1*0x375c]&&_0x1e613c['v'][0x1e4a+0xf*0xa9+0xd65*-0x3]===_0xef7968[0x386+-0x13b5+0x1031];})['map'](function(_0x3fd6a4){return _0x3fd6a4['o'];}),'eye':[_0xef7968[0xf1a+-0xc*0x2ae+0x110e],_0xef7968[0x8cd*-0x3+0x192*-0x12+0x4*0xdab]+_0xa35a9f,_0xef7968[0x269+0x180a*-0x1+-0x15a3*-0x1]],'reach':_0x11cf52['reach'],'pitch':_0x308226['Ivnbr'](_0x5897db,_0x308226[_0x14c7f9(0x1ec)](_0x3bee1d[_0x14c7f9(0x1fb)],0x19a7+0x6*-0x1+-0x1835*0x1),'f32'),'yaw':_0x5897db(_0x308226[_0x14c7f9(0x72d)](_0x3bee1d['ptr'],-0xa17+-0x7*-0x265+0xa*-0x86),_0x308226[_0x14c7f9(0x9b8)])};}function _0x84c0ad(){var _0x3fae08=_0xc5af74,_0x5d4cb3=_0x17b226(),_0xcf96b=[],_0x2ced84=_0x2b5089['Photo'+'nNetw'+'orkSy'+'nc']||{},_0x4dd4e6=Object[_0x3fae08(0x33f)](_0x2ced84);for(var _0x590ec7=0x1c*0xa7+0x1f*0xaa+-0x26da*0x1;_0x590ec7<_0x4dd4e6[_0x3fae08(0x687)+'h']&&_0x308226[_0x3fae08(0x538)](_0x590ec7,-0x62d+0x13d0+-0xd83);_0x590ec7++){var _0x2c4574=_0x2ced84[_0x4dd4e6[_0x590ec7]],_0x9b413e=[],_0x29ac0f=_0x3c44e9[_0x3fae08(0x2ae)+_0x3fae08(0x236)+_0x3fae08(0x20c)+'nc']||[];for(var _0x2aa652=0x149*-0xb+0x7e6*-0x3+0x25d5;_0x308226[_0x3fae08(0x633)](_0x2aa652,_0x29ac0f[_0x3fae08(0x687)+'h']);_0x2aa652++){if(_0x29ac0f[_0x2aa652][-0x5b3*-0x3+0x3*-0x6b+-0xfd7]!=='v3')continue;var _0x23aaa3=_0x2b05eb(_0x2c4574[_0x3fae08(0x1fb)],_0x29ac0f[_0x2aa652][0x1*0x6c+0x92f*-0x2+0x11f2],0x1b*0x155+-0x1908+-0xaec);if(_0x23aaa3)_0x9b413e['push']({'o':'0x'+_0x29ac0f[_0x2aa652][-0x648+0x5*-0xcb+0xa3f][_0x3fae08(0x8d4)+'ing'](-0x1660+0x1b8c+-0x51c),'v':_0x23aaa3});}var _0x2b4088=_0x308226[_0x3fae08(0x343)](_0x2f1e19,_0x9b413e,_0x5d4cb3?_0x5d4cb3[_0x3fae08(0x784)][-0xce*-0xd+0x238b+0x1*-0x2e00]:null),_0x50882c=_0x2b4088['pos'];if(!_0x50882c)continue;var _0x3906b5={'ptr':_0x2c4574[_0x3fae08(0x1fb)],'x':_0x50882c[0x1*0x1264+0x17e5+-0x2a49],'y':_0x50882c[0x1*-0x1a+0x21ec+-0x21d1],'z':_0x50882c[0x1dea+0xdd7*-0x1+-0x1011],'posAt':_0x2b4088['posAt'],'inBand':_0x2b4088['inBan'+'d'],'cluster':_0x2b4088[_0x3fae08(0x4b7)+'er'],'team':_0x5897db(_0x2c4574[_0x3fae08(0x1fb)]+(0xb9d*0x1+-0xbe3*0x3+-0x619*-0x4),_0x308226[_0x3fae08(0x1e2)]),'localFlag':_0x5897db(_0x2c4574[_0x3fae08(0x1fb)]+(-0xb1e+0x309+-0x81*-0x11),_0x3fae08(0xc35))};if(_0x5d4cb3){if(_0x308226['FWZoS']===_0x308226[_0x3fae08(0x425)]){var _0x546e75=_0x308226[_0x3fae08(0xc67)](_0x50882c[0x307*-0x9+0x1*0xfc7+-0x2de*-0x4],_0x5d4cb3[_0x3fae08(0x784)][-0x6c9+-0x1d9+-0x41*-0x22]),_0x4aeefc=_0x308226[_0x3fae08(0x4f4)](_0x50882c[-0x2*0x1099+-0x17d0+0xa4*0x59],_0x5d4cb3['feet'][0xa1a+-0x10b*0x24+-0x1b74*-0x1]);_0x3906b5['d']=Math['sqrt'](_0x546e75*_0x546e75+_0x308226[_0x3fae08(0xa4e)](_0x4aeefc,_0x4aeefc)),_0x3906b5['beari'+'ng']=_0x308226[_0x3fae08(0x7ca)](Math[_0x3fae08(0x1af)](_0x546e75,_0x4aeefc),-0x1*0x2151+-0x2204*0x1+0x4409)/Math['PI'];}else{if(_0x33f3b4[_0x1b5677]['o']===_0x4ad53f){if(_0x42eb04==='v3'){var _0x3a460e=_0x50bc06[_0x5c8cf8][_0x3fae08(0x817)]||[_0x2839b3[_0x40894d]['v'],0x2*-0x127f+0x1d*0xcd+0xdc5,-0xceb*0x2+-0x1633*-0x1+0x3a3];return _0x3a460e[_0x3fae08(0x356)](function(_0x5927fc){return _0x194bd1['round'](_0x5927fc*(0x122+-0xff3+0xe5*0x11))/(0x1f4a+0x27*0x3+-0x17*0x15d);})['join']('\x20\x20');}var _0x1b3121=_0x3013ea[_0x25a186]['v'];return _0x308226[_0x3fae08(0xbf6)](typeof _0x1b3121,_0x3fae08(0x945)+'r')?_0x2fc04b['round'](_0x308226[_0x3fae08(0xbe9)](_0x1b3121,0x1*-0x38f+-0x21c7+0x293e*0x1))/(-0x4bd+-0x517*-0x1+0x38e):_0x77984f(_0x1b3121);}}}_0xcf96b[_0x3fae08(0x3f8)](_0x3906b5);}return{'me':_0x5d4cb3,'list':_0xcf96b};}var _0x30ede6=null;function _0x3e1d96(){var _0x4e2919=_0xc5af74;if(_0x30ede6)return _0x30ede6;try{var _0x1602a4=_0x308226[_0x4e2919(0x678)]['split']('|'),_0x359b3f=-0x1*-0x1eb9+0x11*-0x182+-0x517;while(!![]){switch(_0x1602a4[_0x359b3f++]){case'0':return _0x30ede6;case'1':if(!document[_0x4e2919(0x2d0)]||!document[_0x4e2919(0x2d0)][_0x4e2919(0x3de)+_0x4e2919(0xbda)+'d'])return null;continue;case'2':if(!_0x30ede6['cv']||!_0x30ede6['cv'][_0x4e2919(0x714)+_0x4e2919(0x652)])_0x30ede6=_0x3ef016;continue;case'3':_0x3b0e9e['id']=_0x4e2919(0xa8c)+_0x4e2919(0x405);continue;case'4':var _0x3ef016={'cv':{'getContext':function(){return null;}},'el':_0x3b0e9e};continue;case'5':var _0x3b0e9e=document[_0x4e2919(0x9a3)+_0x4e2919(0x972)+_0x4e2919(0x964)](_0x4e2919(0xa71));continue;case'6':document[_0x4e2919(0x2d0)][_0x4e2919(0x3de)+_0x4e2919(0xbda)+'d'](_0x3b0e9e);continue;case'7':_0x30ede6={'el':_0x3b0e9e,'cv':_0x3b0e9e['query'+_0x4e2919(0x4b8)+_0x4e2919(0x562)](_0x4e2919(0x5e5)+_0x4e2919(0x9cf)+'p-cv'),'lg':_0x3b0e9e[_0x4e2919(0x32e)+_0x4e2919(0x4b8)+'tor']('#saku'+_0x4e2919(0x9cf)+_0x4e2919(0x7fb))};continue;case'8':_0x3b0e9e[_0x4e2919(0x74c)]['cssTe'+'xt']=_0x308226['DAGjF'](_0x308226[_0x4e2919(0x258)](_0x308226[_0x4e2919(0x960)]('posit'+_0x4e2919(0x95e)+'ixed;'+_0x4e2919(0x99d)+_0x4e2919(0x8a6)+';top:'+_0x4e2919(0x541)+'z-ind'+_0x4e2919(0x999)+_0x4e2919(0xc3d)+_0x4e2919(0x1a6)+'ointe'+_0x4e2919(0x429)+_0x4e2919(0x466)+_0x4e2919(0x928),_0x308226['lgdmy']),_0x308226['GDAxE']),'user-'+_0x4e2919(0x807)+_0x4e2919(0x37c)+'e;-we'+'bkit-'+'user-'+_0x4e2919(0x807)+_0x4e2919(0x37c)+'e;');continue;case'9':_0x3b0e9e[_0x4e2919(0xa67)+_0x4e2919(0x759)]=_0x308226[_0x4e2919(0x733)]+_0x308226['vgKIm'];continue;}break;}}catch(_0x2c2753){return null;}}var _0x49a485=null;function _0x572b19(){var _0x3523b4=_0xc5af74,_0x5693ca={'RTLgE':_0x3523b4(0xb04)+'n','VCGoV':function(_0x3325a0,_0x496fba,_0xa2b513,_0xd28d5e){return _0x3325a0(_0x496fba,_0xa2b513,_0xd28d5e);},'dZKUc':'</sma'+_0x3523b4(0xab7)};if(_0x3523b4(0x33b)!=='gCIhg'){if(_0x49a485)return _0x49a485;try{var _0x208a4b=_0x308226['UTdpk']['split']('|'),_0x4813af=-0x1d89+0x19c6+0x3c3;while(!![]){switch(_0x208a4b[_0x4813af++]){case'0':_0x350820['id']=_0x3523b4(0xa8c)+'a-box'+'es';continue;case'1':document['body'][_0x3523b4(0x3de)+_0x3523b4(0xbda)+'d'](_0x350820);continue;case'2':return _0x49a485;case'3':_0x350820['style'][_0x3523b4(0x9be)+'xt']=_0x308226['bWkVU'];continue;case'4':_0x49a485={'cv':_0x350820};continue;case'5':var _0x350820=document['creat'+'eElem'+_0x3523b4(0x964)]('canva'+'s');continue;case'6':if(!document[_0x3523b4(0x2d0)]||!document[_0x3523b4(0x2d0)][_0x3523b4(0x3de)+_0x3523b4(0xbda)+'d'])return null;continue;}break;}}catch(_0x133ea7){return null;}}else{var _0x57b72e=('5|4|3'+_0x3523b4(0x8e2)+_0x3523b4(0xba8))[_0x3523b4(0x3c2)]('|'),_0x55f232=-0x1fdc+-0x211e+-0x1*-0x40fa;while(!![]){switch(_0x57b72e[_0x55f232++]){case'0':_0x163c88[_0x3523b4(0xb3a)]=_0x76a06e['label'];continue;case'1':(function(_0x23d108){var _0x594bca=_0x3523b4;_0x163c88[_0x594bca(0x5dc)+'ck']=function(){_0x26b1fc(_0x23d108);};}(_0x76a06e['id']));continue;case'2':_0x414965['appen'+_0x3523b4(0xbda)+'d'](_0x163c88);continue;case'3':_0x163c88['type']=_0x5693ca[_0x3523b4(0x38e)];continue;case'4':var _0x163c88=_0x5693ca['VCGoV'](_0x501ff8,'butto'+'n',_0x3523b4(0x78d)+'b','<smal'+'l>'+_0x76a06e[_0x3523b4(0xafd)]+_0x5693ca[_0x3523b4(0x741)]);continue;case'5':var _0x76a06e=_0x57fe29[_0x467c45];continue;case'6':_0x340d08[_0x76a06e['id']]=_0x163c88;continue;}break;}}}function _0x241998(_0x3b310a){var _0x38a400=_0xc5af74,_0x4903ac={'vnqaQ':function(_0x1a7191,_0x508bfc){var _0x2809a2=_0x45e7;return _0x308226[_0x2809a2(0x519)](_0x1a7191,_0x508bfc);},'CAZaE':function(_0x273585,_0x4347f6){return _0x308226['UzeMq'](_0x273585,_0x4347f6);},'vzxVb':function(_0x4f30c1,_0x4d8570){var _0x3ce814=_0x45e7;return _0x308226[_0x3ce814(0x5c8)](_0x4f30c1,_0x4d8570);},'gaone':function(_0x10d531,_0x4de1d2){return _0x10d531+_0x4de1d2;},'VHOPm':function(_0x4609cb,_0xd4d5c4){return _0x4609cb*_0xd4d5c4;},'WlDtI':function(_0x2f57d7,_0x5720cb){return _0x2f57d7*_0x5720cb;},'PBwGs':function(_0x1d6170,_0x1ca296){return _0x1d6170*_0x1ca296;},'kxmmn':function(_0x262744,_0x10ed05){return _0x262744*_0x10ed05;},'GduWD':function(_0x300a43,_0x42f23b){return _0x308226['vfcWv'](_0x300a43,_0x42f23b);},'UkaOO':function(_0x2e7dfb,_0x1b8ff5){var _0x6b7028=_0x45e7;return _0x308226[_0x6b7028(0x492)](_0x2e7dfb,_0x1b8ff5);},'TqXXy':function(_0x7ac74b,_0x49694a){return _0x7ac74b<_0x49694a;},'hOYtJ':function(_0x3ab85b,_0x55349){return _0x308226['zROLP'](_0x3ab85b,_0x55349);},'CNPkU':function(_0x5f9654,_0x14ffd3){return _0x308226['AuGsR'](_0x5f9654,_0x14ffd3);}};if(_0x308226[_0x38a400(0x3da)]===_0x308226[_0x38a400(0x3da)])try{if(_0x308226[_0x38a400(0x55a)](_0x308226['VdBHc'],_0x308226[_0x38a400(0xa3b)])){var _0x4eab73=Math[_0x38a400(0x571)](0x1cb0+0x268a+-0x4339,window[_0x38a400(0xa67)+_0x38a400(0x5fa)]||document['docum'+_0x38a400(0x612)+_0x38a400(0x9a4)][_0x38a400(0xbf3)+_0x38a400(0x974)+'h']||-0x1c7b+0x866+-0x61*-0x35),_0x19d04f=Math[_0x38a400(0x571)](-0x2*0x1371+0x1978+0xd6b,window[_0x38a400(0xa67)+'Heigh'+'t']||document['docum'+'entEl'+_0x38a400(0x9a4)]['clien'+'tHeig'+'ht']||-0x20ae*-0x1+-0x193b+0x1*-0x773);return(_0x308226[_0x38a400(0x54b)](_0x3b310a['cv'][_0x38a400(0x2d6)],_0x4eab73)||_0x3b310a['cv'][_0x38a400(0x305)+'t']!==_0x19d04f)&&(_0x3b310a['cv']['width']=_0x4eab73,_0x3b310a['cv']['heigh'+'t']=_0x19d04f),{'w':_0x4eab73,'h':_0x19d04f};}else try{_0x34b6ab['hook']['enabl'+'ed']=![];}catch(_0xf48794){}}catch(_0x14c568){return{'w':0x0,'h':0x0};}else{var _0xffc23f=_0xad5c1c();if(!_0xffc23f)return null;var _0x93c67e=_0xffc23f['pitch']*_0x45ec0e['PI']/(0x1*0x135d+0xc6d*0x1+0x17*-0x15a),_0x4ffcc3=_0xffc23f['yaw']*_0x50bfcc['PI']/(-0x8*0x213+-0x7*0x400+0x2d4c),_0x5beeca=_0x4a929c[_0x38a400(0x2e3)](_0x93c67e),_0x20ff84=_0x29767d['sin'](_0x4ffcc3)*_0x5beeca,_0x290a4b=-_0x56f430[_0x38a400(0x272)](_0x93c67e),_0x180483=_0x4903ac['vnqaQ'](_0x59b11b['cos'](_0x4ffcc3),_0x5beeca),_0x37ce7c=_0x180483,_0x91fb0e=-0x3c4+-0x1*-0x1b23+-0xc1*0x1f,_0x229dab=-_0x20ff84,_0x10fce5=_0x47de2b[0xc36+0x12ee+-0x1*0x1f24]-_0x12bbe0[0x437*0x1+-0x1f33+0x2*0xd7e],_0x91361f=_0x4903ac['CAZaE'](_0x47bdbe[0x1f1c+-0x1a51+0x4ca*-0x1],_0x5a20f0[0x367+-0x154*0xb+0xb36]),_0xfd68f9=_0x4903ac[_0x38a400(0x3e9)](_0x43b950[-0x3*-0xa86+0x17*0x171+-0x40b7*0x1],_0x5a2141[-0x148+-0x2*-0x827+-0xf04]),_0x491e42=_0x4903ac['gaone'](_0x10fce5*_0x20ff84+_0x91361f*_0x290a4b,_0xfd68f9*_0x180483);if(_0x491e42<=0x1*-0xd69+-0x1acc+-0xd67*-0x3+0.05)return null;var _0x45d1ec=_0x10fce5*_0x37ce7c+_0x4903ac['vnqaQ'](_0x91361f,_0x91fb0e)+_0x4903ac[_0x38a400(0xae4)](_0xfd68f9,_0x229dab),_0x57750b=_0x4903ac['gaone'](_0x10fce5*_0x4903ac[_0x38a400(0x9d9)](_0x91fb0e*_0x180483,_0x229dab*_0x290a4b)+_0x91361f*(_0x229dab*_0x20ff84-_0x4903ac['WlDtI'](_0x37ce7c,_0x180483)),_0xfd68f9*(_0x4903ac['PBwGs'](_0x37ce7c,_0x290a4b)-_0x4903ac[_0x38a400(0x6ec)](_0x91fb0e,_0x20ff84))),_0x47c539=_0x3a2cc3/_0xc1c029,_0x1227bb=_0x10ced4[_0x38a400(0x63b)]*_0x3a60a8['PI']/(0x1362+-0xde*-0x12+0x4e6*-0x7),_0x51b59b=_0x30c5e7[_0x38a400(0x52e)](_0x1227bb/(0x277*0xd+-0x5d7+-0x1a32)),_0xec81ff=_0x4903ac['GduWD'](_0x45d1ec,_0x491e42)/_0x4903ac['UkaOO'](_0x51b59b,_0x47c539),_0x51a0d7=_0x57750b/_0x491e42/_0x51b59b;if(_0x4903ac[_0x38a400(0x67b)](_0xec81ff,-(-0x6ca+-0x9dc+-0x261*-0x7+0.6000000000000001))||_0x4903ac[_0x38a400(0x73f)](_0xec81ff,-0x395+-0x38f*0x5+0x1561+0.6000000000000001)||_0x4903ac['CNPkU'](_0x51a0d7,-(-0xaa9+0x2*0x773+-0x43c+0.6000000000000001))||_0x51a0d7>-0x3*-0x407+-0x314*-0x5+-0x3*0x928+0.6000000000000001)return null;return{'x':(_0xec81ff*(-0xfe2+0x63b+0x7*0x161+0.5)+(0x2053+-0x1b4+0x9*-0x367+0.5))*_0x401557,'y':(-0x1c81+0x9a*0x6+0x18e5+0.5-_0x51a0d7*(0x1f*-0x4a+0x1279*-0x2+-0xd*-0x388+0.5))*_0x3fa4f9,'z':_0x491e42};}}function _0x5d3ef3(_0x1603f3){var _0x1b126f=_0xc5af74,_0xedde3f={'rFKjt':function(_0x4c0e2b,_0x115c23){return _0x308226['UXRgQ'](_0x4c0e2b,_0x115c23);},'ikrFS':function(_0x301905,_0xf7daed){return _0x301905===_0xf7daed;},'dfAYj':function(_0x35549e){return _0x35549e();},'pLZBB':'color'+':'},_0x48d354=_0x49a485;if(!_0x48d354)return;var _0x1fd885=_0x48d354['cv']['getCo'+'ntext']&&_0x48d354['cv']['getCo'+'ntext']('2d');if(!_0x1fd885)return;var _0x587eed=_0x241998(_0x48d354);_0x1fd885['clear'+_0x1b126f(0x1ab)](-0x2*0x241+0x3d*-0x4d+0x16db,-0x1b1*-0xb+0x20e8+-0x3383*0x1,_0x587eed['w'],_0x587eed['h']);if(!_0x14ed59[_0x1b126f(0xc75)]||!_0x1603f3||!_0x1603f3['me'])return;var _0x370483=_0x1603f3['me'],_0x4cfbee=null,_0x362fae=_0x2b5089['Photo'+'nNetw'+'orkSy'+'nc']||{},_0x57ed8a=Object[_0x1b126f(0x33f)](_0x362fae);for(var _0x27e833=-0x3e*0x49+0x1ecf*0x1+-0xd21;_0x308226[_0x1b126f(0x5c2)](_0x27e833,_0x57ed8a['lengt'+'h']);_0x27e833++){if(_0x308226['moCeO']===_0x308226['moCeO']){var _0x4fc4ae=_0x2b05eb(_0x362fae[_0x57ed8a[_0x27e833]]['ptr'],0x7a9*-0x1+-0xec*-0x8+0x1*0x7d,0x1*-0x1b57+-0x100c+0x2b66*0x1);if(_0x4fc4ae&&_0x4fc4ae[0xdf6+-0x2667+0x1871]===0x1*-0x1677+0x1*0x595+0x10e2&&_0x4fc4ae[0x80d+0x2521+-0x2d2d]===0xc98+-0x1a2*-0x13+-0x2b9e&&_0x4fc4ae[0x15c5*-0x1+0x23eb*-0x1+0x39b2]===-0x73b*0x2+0x87b*0x1+-0x5fb*-0x1){_0x4cfbee=_0x5897db(_0x362fae[_0x57ed8a[_0x27e833]]['ptr']+(0x25+-0x380*0xa+0x2333),_0x308226[_0x1b126f(0x1e2)]);break;}}else{var _0x4f27f9=_0x3beaf1[_0x1b126f(0x5ce)];if(!_0x4f27f9||_0xedde3f['rFKjt'](_0x4f27f9['__sak'+_0x1b126f(0x814)],_0xf530fc))return;try{if(_0xedde3f['ikrFS'](_0x4f27f9[_0x1b126f(0x641)],'hello')){_0x4089fe()['set']({'host':_0x4f27f9[_0x1b126f(0x7e4)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0xedde3f['ikrFS'](_0x4f27f9['kind'],_0x1b126f(0x9df)+'t'))_0xedde3f[_0x1b126f(0x3ce)](_0x48e213)[_0x1b126f(0x28d)](_0x4f27f9['repor'+'t']);}catch(_0x1c0944){_0x33523d['warn']('%c[sa'+_0x1b126f(0x6e9)+_0x1b126f(0x694)+'l\x20upd'+'ate\x20f'+_0x1b126f(0x4ce),_0xedde3f['pLZBB']+_0x2e6fd6,_0x1c0944);}}}for(var _0x2ce9fa=0x2*-0x28d+0x6*-0x14a+-0xcd6*-0x1;_0x2ce9fa<_0x1603f3[_0x1b126f(0x89e)][_0x1b126f(0x687)+'h'];_0x2ce9fa++){var _0x4ad3ef=_0x1603f3[_0x1b126f(0x89e)][_0x2ce9fa],_0x65c02c=_0x4cfbee!==null&&_0x308226['OicWe'](_0x4ad3ef[_0x1b126f(0x9a7)],_0x4cfbee),_0x1c148c=_0x308226[_0x1b126f(0xa5b)](_0x407a4a,_0x370483['eye'],[_0x4ad3ef['x'],_0x4ad3ef['y']-(-0x1a1b*0x1+-0x1d08+-0x1b92*-0x2),_0x4ad3ef['z']],_0x587eed['w'],_0x587eed['h']),_0x427f24=_0x407a4a(_0x370483['eye'],[_0x4ad3ef['x'],_0x4ad3ef['y']+(0x598+0x24*0x67+-0x1414+0.8),_0x4ad3ef['z']],_0x587eed['w'],_0x587eed['h']);if(_0x308226[_0x1b126f(0x1b2)](!_0x1c148c,!_0x427f24))continue;var _0x41fcaf=Math['min'](_0x1c148c['x'],_0x427f24['x']),_0x456e74=Math[_0x1b126f(0x571)](_0x1c148c['x'],_0x427f24['x']),_0x56d161=Math[_0x1b126f(0x73d)](_0x1c148c['y'],_0x427f24['y']),_0x391208=Math[_0x1b126f(0x571)](_0x1c148c['y'],_0x427f24['y']),_0xbe2ddc=Math[_0x1b126f(0x571)](0x1515+-0x1b*0x53+-0xc51,Math[_0x1b126f(0x73d)](0x18f2+-0x6eb+0x1*-0x11cb,_0x456e74-_0x41fcaf)),_0x4fce28=Math['max'](-0x1*-0xc92+0x359*-0x9+0x7*0x283,Math['min'](0x1b9f+-0x76*-0x49+-0x5*0xc25,_0x391208-_0x56d161)),_0x89125b=(_0x41fcaf+_0x456e74)/(0x837+0x66*0x11+-0x127*0xd),_0x5dbabd=_0x308226[_0x1b126f(0x860)](_0x56d161,_0x391208)/(0x1f6d+-0xaf*-0x2f+-0x3f8c);_0x1fd885['strok'+'eStyl'+'e']=_0x65c02c?_0x1b126f(0x787)+_0x1b126f(0x60e)+_0x1b126f(0xabc)+',.9)':_0x308226[_0x1b126f(0x5a6)],_0x1fd885['lineW'+'idth']=_0x65c02c?-0x2705+-0x17a8+-0x71*-0x8e:0x2121+-0x6ab*0x2+-0x3f5*0x5,_0x1fd885['strok'+'eRect'](_0x89125b-_0x308226[_0x1b126f(0xc2f)](_0xbe2ddc,-0x15d7*0x1+0x1ed9+-0x900),_0x5dbabd-_0x4fce28/(0x1*0xd1a+0x1*-0x2293+0x1a7*0xd),_0xbe2ddc,_0x4fce28),!_0x65c02c&&(_0x1fd885['fillS'+_0x1b126f(0x506)]=_0x308226[_0x1b126f(0x5a6)],_0x1fd885[_0x1b126f(0xc08)]=_0x1b126f(0x4ea)+'ui-mo'+'nospa'+_0x1b126f(0x2b3)+_0x1b126f(0x72c)+_0x1b126f(0x530)+'ospac'+'e',_0x1fd885['fillT'+'ext'](_0x308226[_0x1b126f(0xbc9)](Math[_0x1b126f(0x647)](_0x4ad3ef['d']||-0x95*-0x13+-0x2bd*-0xb+-0x5e2*0x7),'m'),_0x89125b-_0xbe2ddc/(0x270*-0x6+0x16c+0xd36),_0x308226[_0x1b126f(0xc19)](_0x5dbabd-_0x4fce28/(-0x1*-0x20ff+-0x6af*-0x1+-0x27ac),-0xdae+0x61*-0x13+0x14e4*0x1)));}}function _0x264d7e(){var _0x466ba5=_0xc5af74,_0x21b8af={'XcvtR':function(_0x2ad30d,_0x254ed1){return _0x2ad30d+_0x254ed1;},'VGlmV':'numbe'+'r','HsCNQ':function(_0x24f72d,_0x89abe7){return _0x24f72d(_0x89abe7);},'oMbgK':function(_0x2264e4,_0x400153){var _0x3ec107=_0x45e7;return _0x308226[_0x3ec107(0x3f0)](_0x2264e4,_0x400153);},'rlJLF':function(_0x227801,_0x51c206){return _0x227801(_0x51c206);}},_0x1e852e=_0x308226[_0x466ba5(0x3e0)](_0x3e1d96);if(!_0x1e852e||!_0x1e852e['cv'])return;try{var _0x330d67=_0x1e852e['cv'][_0x466ba5(0x714)+_0x466ba5(0x652)]&&_0x1e852e['cv'][_0x466ba5(0x714)+_0x466ba5(0x652)]('2d');if(!_0x330d67)return;var _0x4a8bee=_0x1e852e['cv'][_0x466ba5(0x2d6)],_0x135bcc=_0x4a8bee/(-0x7dd+0x1edc*0x1+-0x16fd),_0x1d3bbb=_0x308226[_0x466ba5(0x88a)](_0x84c0ad),_0x3fc37a=_0x1d3bbb['me'];_0x330d67[_0x466ba5(0x79b)+_0x466ba5(0x1ab)](-0x1ad9+-0x1dad*0x1+0x3886,0x2014+0x5f6+-0x260a,_0x4a8bee,_0x4a8bee),_0x330d67[_0x466ba5(0x76a)+_0x466ba5(0x9c6)+'e']=_0x466ba5(0x787)+_0x466ba5(0x2d1)+_0x466ba5(0x43c)+'7,.16'+')',_0x330d67[_0x466ba5(0xa23)+_0x466ba5(0x207)]=-0x30*0x20+0x4*0x63c+-0x12ef;for(var _0x14d916=-0x561+0x2579+0x1f*-0x109;_0x308226['IzSdz'](_0x14d916,0xf8*0x20+-0x35*-0x9b+-0x3f14);_0x14d916++){_0x308226[_0x466ba5(0x717)]('bfbXw',_0x466ba5(0x57a))?_0x45faab?_0x281219['setIt'+'em'](_0x4ba4e5,'1'):_0x952300['remov'+_0x466ba5(0x301)](_0x6d43b0):(_0x330d67[_0x466ba5(0x6d0)+'Path'](),_0x330d67[_0x466ba5(0xb19)](_0x135bcc,_0x135bcc,_0x308226[_0x466ba5(0x795)]((_0x135bcc-(-0x1312+-0x1edb+0x31f1))*_0x14d916,-0xb*-0xc+-0x854*-0x1+0x7*-0x143),0x33*0x72+-0x2*-0xb45+-0x16a0*0x2,_0x308226[_0x466ba5(0x6d9)](Math['PI'],0x1f*0x1f+-0x2335*-0x1+-0x2*0x137a)),_0x330d67['strok'+'e']());}_0x330d67[_0x466ba5(0x6d0)+'Path'](),_0x330d67['moveT'+'o'](0x6cd+-0x6e5*-0x1+0x6d7*-0x2,_0x135bcc),_0x330d67[_0x466ba5(0x737)+'o'](_0x4a8bee-(-0x1db1+-0x55d+0x1189*0x2),_0x135bcc),_0x330d67[_0x466ba5(0xa13)+'o'](_0x135bcc,0x2*0x131c+0x3*0x61d+-0x388b),_0x330d67['lineT'+'o'](_0x135bcc,_0x4a8bee-(-0x1afc+0x971+0x118f)),_0x330d67['strok'+'e']();if(!_0x3fc37a){if(_0x1e852e['lg'])_0x1e852e['lg'][_0x466ba5(0x500)+_0x466ba5(0x696)+'t']='';return;}var _0x4ca67c=(_0x135bcc-(0x7f9+0x1eca+-0x26bd))/_0x14ed59[_0x466ba5(0x844)],_0x172584=null,_0x3fe972=_0x2b5089['Photo'+'nNetw'+'orkSy'+'nc']||{},_0x4773d5=Object['keys'](_0x3fe972);for(var _0x49241c=0x21c2*0x1+-0x11*-0x133+0x3625*-0x1;_0x49241c<_0x4773d5['lengt'+'h'];_0x49241c++){if(_0x308226['PtVPu'](_0x308226[_0x466ba5(0x7d0)],_0x466ba5(0x75d))){var _0x5c508c=_0x2b05eb(_0x3fe972[_0x4773d5[_0x49241c]]['ptr'],-0xe*0x3a+-0x138e*0x1+-0xa*-0x24b,0x5e*0x6a+0x1*0x18eb+-0x3fd4);if(_0x5c508c&&_0x5c508c[0x172a+-0x23ba+0xc90]===-0x7*-0x38c+0x767+0xdf*-0x25&&_0x5c508c[-0x16*0x16+-0x1*-0x1e17+-0xe19*0x2]===-0x20ca+0x1*-0x33a+-0x1202*-0x2&&_0x5c508c[-0x2b*-0x4e+-0x11fa+0x4e2]===-0x2707+-0x1d4b+0x4452){_0x172584=_0x308226['ZWQPq'](_0x5897db,_0x308226[_0x466ba5(0x2f7)](_0x3fe972[_0x4773d5[_0x49241c]]['ptr'],-0x116f+0xc49+0x57e),_0x466ba5(0xc35));break;}}else _0x1f7ba1['push']({'o':_0x433759[_0x50ed4d][_0x466ba5(0xb50)+'rs'][_0x345df0]['o'],'v':_0x58192b[_0x2c2746][_0x466ba5(0xb50)+'rs'][_0x30e40b]['v'],'why':_0x308226[_0x466ba5(0x943)]});}var _0x1a8d68=0x1*-0x2114+-0x1*-0x21b3+-0x9f;for(var _0x4fa6cc=0x7e*0x1f+0x2029+0xc7*-0x3d;_0x308226[_0x466ba5(0xad5)](_0x4fa6cc,_0x1d3bbb[_0x466ba5(0x89e)][_0x466ba5(0x687)+'h']);_0x4fa6cc++){if(_0x466ba5(0xa58)===_0x308226['XmZbH'])return _0x331e30[_0x466ba5(0x997)+'e']=_0x21b8af[_0x466ba5(0x505)](_0x466ba5(0xa3d)+'w.'+_0x2d2372[_0x3efae3],_0x466ba5(0x41d)+'le'),_0x578fa1;else{var _0x16d93a=_0x1d3bbb['list'][_0x4fa6cc],_0x3c333f=_0x308226[_0x466ba5(0xa4e)](_0x308226[_0x466ba5(0x684)](_0x16d93a['x'],_0x3fc37a[_0x466ba5(0x784)][0x1498+-0x851+0xc47*-0x1]),_0x4ca67c),_0xb794db=_0x308226['mzRBW'](_0x308226['QsXST'](_0x16d93a['z'],_0x3fc37a[_0x466ba5(0x784)][0x13*-0x1d6+0xf12+0x1*0x13d2]),_0x4ca67c),_0x3ad7b9=Math['sqrt'](_0x308226[_0x466ba5(0xa8b)](_0x3c333f,_0x3c333f)+_0x308226[_0x466ba5(0x8fe)](_0xb794db,_0xb794db)),_0x5a2e43=_0x135bcc,_0x1131b2=_0x135bcc;_0x3ad7b9>_0x135bcc-(-0x17f*-0xf+-0x138b+0x1*-0x2e0)?(_0x5a2e43=_0x308226['JhPLG'](_0x135bcc,_0x3c333f/_0x3ad7b9*(_0x135bcc-(-0x7*0x61+-0x23e3+0x2690))),_0x1131b2=_0x135bcc+_0x308226[_0x466ba5(0xc7c)](_0x308226[_0x466ba5(0xc2f)](_0xb794db,_0x3ad7b9),_0x135bcc-(-0x1c0a+0x4*-0x1+0x1c14))):_0x308226['Dyygq']!=='BnBXo'?(_0x5a2e43=_0x135bcc+_0x3c333f,_0x1131b2=_0x308226[_0x466ba5(0x19f)](_0x135bcc,_0xb794db)):_0x2a2215[_0x466ba5(0x855)]=![];var _0x4d7afa=_0x308226['ELnof'](_0x172584,null)&&_0x16d93a['team']===_0x172584;_0x330d67['fillS'+_0x466ba5(0x506)]=_0x4d7afa?_0x466ba5(0xaa5)+'6a':_0x466ba5(0x454)+'74',_0x330d67[_0x466ba5(0x6d0)+'Path'](),_0x330d67['arc'](_0x5a2e43,_0x1131b2,_0x4d7afa?0x1009+-0x1a*-0x61+0x19e1*-0x1:-0x1*-0x1bb+0x47*0x4f+-0x17a1+0.20000000000000018,0x34*0x99+-0x923*-0x1+0x1*-0x2837,_0x308226[_0x466ba5(0x37f)](Math['PI'],0x7c+-0x17a1+0x1727)),_0x330d67[_0x466ba5(0x9d5)](),_0x1a8d68++;}}_0x330d67[_0x466ba5(0x1d3)+_0x466ba5(0x506)]='#7ee0'+'a8',_0x330d67[_0x466ba5(0x6d0)+_0x466ba5(0x233)](),_0x330d67['arc'](_0x135bcc,_0x135bcc,0x1*0xd2d+0x116e+0xb2*-0x2c,-0x1*0x2527+0x11fa+0x132d*0x1,Math['PI']*(0x1c6a+0x139f*0x1+-0x1*0x3007)),_0x330d67['fill']();if(_0x1e852e['lg']){if('AXnnl'==='AXnnl')_0x1e852e['lg'][_0x466ba5(0x500)+_0x466ba5(0x696)+'t']=_0x308226['DYKDL'](_0x308226[_0x466ba5(0x33c)](_0x308226[_0x466ba5(0x94e)](_0x308226[_0x466ba5(0x8b6)](_0x308226['bdrGK'](_0x466ba5(0x479),_0x1a8d68)+_0x466ba5(0x9ea),Math['round'](_0x14ed59['span'])),'m'),_0x14ed59[_0x466ba5(0xc75)]?_0x308226['NoXIZ'](_0x308226['MrWrD']+Math[_0x466ba5(0x647)](_0x4e9310['fov']),'°'):''),_0x172584!==null?_0x466ba5(0x310)+'am'+_0x172584:'');else{var _0xa59395=_0x68d137[_0x466ba5(0x7e9)+'em'](_0x194689);if(_0xa59395){var _0x59ecf3=_0x5bc36d[_0x466ba5(0x381)](_0xa59395);if(typeof _0x59ecf3['y']===_0x21b8af['VGlmV']&&_0x21b8af[_0x466ba5(0x2eb)](_0xcc9a62,_0x59ecf3['y']))_0x1c6777['yawOf'+'f']=_0x59ecf3['y'];if(_0x21b8af[_0x466ba5(0x5c7)](typeof _0x59ecf3['p'],_0x21b8af[_0x466ba5(0x3e6)])&&_0x21b8af[_0x466ba5(0x349)](_0x22c3d4,_0x59ecf3['p']))_0x294d83['pitch'+_0x466ba5(0x7a4)]=_0x59ecf3['p'];}}}}catch(_0x19fd50){}}function _0x4b087d(){var _0x385d6c=_0xc5af74,_0x105742=_0x2b5089[_0x385d6c(0x2ae)+_0x385d6c(0x236)+'orkSy'+'nc']||{};if(!Object[_0x385d6c(0x33f)](_0x105742)['lengt'+'h'])return![];return!!_0x17b226();}function _0x2e8aac(_0x4b2cad){var _0x1b8cbd=_0xc5af74,_0x41b53e={'Xmcxl':function(_0x5a328c,_0x25addc){return _0x5a328c+_0x25addc;}};if(_0x1b8cbd(0x64c)===_0x308226['wgZmO'])try{if(_0x308226['JquPY'](_0x1b8cbd(0xbec),'OlCxM'))_0x22dd55['camer'+'a']=_0x41b53e[_0x1b8cbd(0x675)]('0x',(_0x1b167a>>>0x28d*-0x6+-0x10a9+0x31*0xa7)['toStr'+'ing'](-0x7bf*0x1+-0x141d+0x1bec)),_0x522a1b['camer'+_0x1b8cbd(0xb99)]=_0x57310f;else{var _0x3c057f=_0x30ede6;if(_0x3c057f&&_0x3c057f['el'])_0x3c057f['el']['style'][_0x1b8cbd(0x469)+'ay']=_0x4b2cad?'':'none';var _0xe116b6=_0x49a485;if(_0xe116b6&&_0xe116b6['cv'])_0xe116b6['cv']['style'][_0x1b8cbd(0x469)+'ay']=_0x4b2cad?'':_0x1b8cbd(0xad2);}}catch(_0x4ed85c){}else try{if(_0x4625bd[_0x45aaad][_0x1b8cbd(0xa75)+'ntWin'+_0x1b8cbd(0x4e1)])_0x3201d6[_0x23bd07]['conte'+_0x1b8cbd(0x399)+'dow'][_0x1b8cbd(0x966)+'essag'+'e'](_0x2d717b,'*');}catch(_0x2c5ac1){}}function _0x456d1c(){var _0x29c0a1=_0xc5af74;if(_0x29c0a1(0x585)==='OVBLI')try{_0x308226['eOSsQ'](_0x234e24);}catch(_0x5b6b74){}else{if(!_0x14ed59['on']||!_0x308226[_0x29c0a1(0xac4)](_0x4b087d)){_0x308226['Pmsgp'](_0x2e8aac,![]),setTimeout(_0x456d1c,-0x15ce+0xc74+0xa86*0x1);return;}_0x308226['PIooP'](_0x2e8aac,!![]),_0x33c57f(),_0x3e1d96();if(_0x14ed59[_0x29c0a1(0xc75)])_0x572b19();var _0x4a2db8=null;try{_0x4a2db8=_0x84c0ad();}catch(_0xdd2c6c){}try{_0x308226[_0x29c0a1(0xaa6)](_0x264d7e);}catch(_0x1f6218){}try{_0x5d3ef3(_0x4a2db8);}catch(_0x3be891){}setTimeout(_0x456d1c,0x1195+-0x1*0x1ec1+0xd5e);}}function _0x3235d2(){var _0x25a2df=_0xc5af74,_0x7d2708={'akqZD':_0x308226['almkW'],'GYYVG':function(_0x1c1fc0,_0x8272d7){return _0x1c1fc0(_0x8272d7);},'UqFEc':_0x308226[_0x25a2df(0x65e)],'fjYSJ':function(_0x871187){var _0x236a17=_0x25a2df;return _0x308226[_0x236a17(0x4fb)](_0x871187);},'ARGcB':function(_0x188ed8,_0xe5ccae){return _0x188ed8+_0xe5ccae;},'nbXsc':function(_0x138e97,_0x44b6b8){return _0x138e97/_0x44b6b8;},'PrPLz':function(_0x1408b9,_0x2420d6){return _0x1408b9>=_0x2420d6;},'guJRt':function(_0x2d7a57,_0x5a283a){return _0x2d7a57<=_0x5a283a;},'nhDdl':_0x25a2df(0x437)+'kura]'+'\x20pane'+_0x25a2df(0x885)+_0x25a2df(0x3e2)+'ailed'};if(_0x308226[_0x25a2df(0xb00)](_0x308226[_0x25a2df(0x1b4)],_0x308226[_0x25a2df(0x8aa)])){if(!_0x426086)return;var _0xf1a0c8=_0x1f90c3[_0x25a2df(0x74c)]['displ'+'ay']===_0x25a2df(0xad2);_0x36a6e4['style'][_0x25a2df(0x469)+'ay']=_0xf1a0c8?'':_0x7d2708['akqZD'],_0x7d2708[_0x25a2df(0x66c)](_0x10101c,_0x7d2708['UqFEc'])['textC'+_0x25a2df(0x696)+'t']=_0xf1a0c8?'-':'+';}else{var _0x1b2fb9=window['Unity'+'WebMo'+_0x25a2df(0x739)]&&window[_0x25a2df(0x878)+'WebMo'+_0x25a2df(0x739)][_0x25a2df(0xb86)+'me']||null,_0x4a2992=_0x1b2fb9&&_0x1b2fb9['il2Cp'+'pCont'+_0x25a2df(0x691)],_0x14a9a8=_0x4a2992&&_0x4a2992[_0x25a2df(0x527)+'tData'],_0x5abf28={},_0x3b43a7=[];for(var _0x171169 in _0x44e9a2){_0x5abf28[_0x171169]=_0x308226[_0x25a2df(0x596)]('0x',_0x44e9a2[_0x171169][_0x25a2df(0x1fb)][_0x25a2df(0x8d4)+_0x25a2df(0x1aa)](0x1734+0x17c*-0x16+0x3a*0x2a));if(_0x44e9a2[_0x171169]['repla'+'ced'])_0x3b43a7['push'](_0x171169);}var _0x241818={};for(var _0x2a18f3 in _0x44e9a2)_0x241818[_0x2a18f3]=_0x44cb61(_0x44e9a2[_0x2a18f3]['ptr']);var _0x3db07c={},_0x21f744=null;try{'OplLI'!=='OplLI'?(_0x25b79a['cv'][_0x25a2df(0x2d6)]=_0x22d233,_0x308e0c['cv'][_0x25a2df(0x305)+'t']=_0x62dc1e):_0x3db07c=_0x251e1d();}catch(_0x1f6a2b){_0x21f744=String(_0x1f6a2b&&_0x1f6a2b[_0x25a2df(0x2ff)+'ge']||_0x1f6a2b);}var _0x53f90d={'version':_0x48e762,'when':new Date()['toISO'+'Strin'+'g'](),'elapsedMs':Date['now']()-_0x303305,'frame':location['href']['slice'](-0x258b+0x8a*0x13+0xf1*0x1d,-0x237e+0x1f*0x42+0x1bf8),'host':_0x4e3c5b,'frameRole':_0x52d3ac,'uwmk':!!_0x1b2fb9,'il2CppContext':!!_0x4a2992,'typeCount':_0x14a9a8?Object[_0x25a2df(0x33f)](_0x14a9a8)[_0x25a2df(0x687)+'h']:null,'arm':_0x491cad,'assemblies':_0x36df06,'hooksTotal':_0x420614['lengt'+'h'],'hooksApplied':_0x308226[_0x25a2df(0xc00)](_0x487c1a),'hooksResolved':_0x32ad60(),'hooksRegisteredAtArm':_0x491cad[_0x25a2df(0x293)+_0x25a2df(0x348)+_0x25a2df(0x432)]||-0x2*0xa7e+0x59*0x41+-0x19d,'hookErrors':_0x272009['slice'](0xf74+0x21b6+0x3a*-0xd9,-0xf1e+0x1fb0+-0x3a*0x49),'instances':_0x5abf28,'classNames':_0x241818,'instancesReplaced':_0x3b43a7,'hookFireProof':_0x1ac892,'survey':_0x3db07c,'actkKeys':_0x1563e9,'surveyRows':Object['keys'](_0x3db07c)[_0x25a2df(0x3ef)+'e'](function(_0x5028cc,_0x1ff285){var _0x54c533=_0x25a2df;if(_0x54c533(0x786)===_0x54c533(0x786))return _0x5028cc+_0x3db07c[_0x1ff285]['lengt'+'h'];else{_0x2042a6()['set']({'host':_0x1fb915['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}},0x19f6+-0x9ce+0x58*-0x2f),'reads':{'ok':_0x2f8d40['ok'],'failed':_0x2f8d40[_0x25a2df(0x7de)+'d'],'lastError':_0x2f8d40['lastE'+'rror'],'source':_0x2f8d40['sourc'+'e']},'identity':_0x308226[_0x25a2df(0x883)](_0xf01f71),'globals':_0x308226[_0x25a2df(0x3e0)](_0x49f4cd),'wasmMemory':{'captured':!!_0x184ee1,'atMs':_0x3c023e,'bytes':(function(){var _0x160e71=_0x25a2df;try{return _0x184ee1&&_0x184ee1['buffe'+'r']?_0x184ee1[_0x160e71(0x267)+'r'][_0x160e71(0xb28)+'ength']:-0x2*0x17c+-0xf2f+0x1227;}catch(_0x2365ac){return 0x1a98*-0x1+0x6*0x1a+0x19fc;}}()),'exportKeys':_0x252e0f},'diff':_0x37f0b6[_0x25a2df(0x750)](0x1814+-0x237*0x5+-0xd01,0x1*0x12aa+0x1131+-0x13*0x1e1),'speed':{'on':_0x172334['on'],'factor':_0x172334[_0x25a2df(0x922)+'r'],'writes':_0x5f5d15,'scaled':_0x5e77db['slice'](0x26e7*0x1+-0x113a+-0x15ad*0x1,0x741*0x3+-0x3cd*0x1+-0x4f*0x3a),'skipped':_0x2b0dbe['slice'](-0x6*-0xb0+0x4*-0x13e+0xd8,-0x581+0x14c0+-0xf2f*0x1)},'esp':_0x308226[_0x25a2df(0xc00)](_0x13a54e),'view':_0x248de2(),'angles':(function(){var _0x189788=_0x25a2df,_0x5787aa=_0x2cd0a4(),_0xecd319=null,_0x5f4eec=null,_0x2b306e=_0x7d2708[_0x189788(0x748)](_0x17b226);if(_0x2b306e){var _0x7a6226=_0x407a4a(_0x2b306e[_0x189788(0xbc8)],[_0x2b306e['eye'][-0x320*-0xc+-0x24dc+-0xa4],_0x2b306e['eye'][0x1ca7+-0xb8a+-0x1e*0x92],_0x7d2708[_0x189788(0x347)](_0x2b306e[_0x189788(0xbc8)][-0xc6f+0x2de+0x993],0xf35*-0x1+0x17a6+-0x870)],-0x17a6+-0x1b2f+0x3*0x123f,-0x24d4*-0x1+0x1*-0x24ac+0x3c0);_0x7a6226&&(_0xecd319=_0x7d2708[_0x189788(0x248)](_0x7a6226['x'],0xca*0xb+-0x3*-0x869+-0x1e01),_0x5f4eec=_0x7a6226['y']/(-0x187f+-0x95+0x1cfc));}return{'identified':_0x21b45e[_0x189788(0x7d3)+_0x189788(0x264)],'why':_0x21b45e['why'],'yawAt':'0x'+_0x11d9e2[_0x189788(0x8d4)+_0x189788(0x1aa)](0x2*0xa75+-0x283*0x2+-0xfd4*0x1),'pitchAt':'0x'+_0x243fb8['toStr'+_0x189788(0x1aa)](0x1c9+0x1ebb*0x1+-0x3e*0x86),'rawPitch':_0x21b45e['rawPi'+'tch'],'rawYaw':_0x21b45e[_0x189788(0x6c8)+'w'],'pitch':_0x21b45e[_0x189788(0x59c)],'yaw':_0x21b45e[_0x189788(0x889)],'pitchOff':_0x4e9310['pitch'+'Off'],'yawOff':_0x4e9310[_0x189788(0x6ea)+'f'],'fov':_0x4e9310['fov'],'fovSane':_0x7d2708['PrPLz'](_0x4e9310[_0x189788(0x63b)],0x1c76+0x1b35*-0x1+-0x105)&&_0x7d2708[_0x189788(0x9af)](_0x4e9310['fov'],-0x1f*0x83+0x229a+-0x124f),'centreX':_0xecd319,'centreY':_0x5f4eec};}()),'fov':_0x4e9310[_0x25a2df(0x63b)],'espView':{'on':_0x14ed59['on'],'boxes':_0x14ed59[_0x25a2df(0xc75)],'span':_0x14ed59[_0x25a2df(0x844)]},'local':(function(){var _0x3d5b25=_0x25a2df,_0x2fbbef=_0x7d2708['fjYSJ'](_0x17b226);if(!_0x2fbbef)return null;return{'ptr':'0x'+_0x2fbbef[_0x3d5b25(0x1fb)][_0x3d5b25(0x8d4)+'ing'](0x104e+0xd13+-0x1*0x1d51),'feet':_0x2fbbef['feet'],'eye':_0x2fbbef[_0x3d5b25(0xbc8)],'posAt':_0x2fbbef['posAt'],'copies':_0x2fbbef['copie'+'s'],'cluster':_0x2fbbef[_0x3d5b25(0x4b7)+'er'],'eyeHeight':_0xa35a9f,'pitch':_0x2fbbef['pitch'],'yaw':_0x2fbbef[_0x3d5b25(0x889)],'reach':_0x2fbbef['reach']};}()),'uwmkLog':_0x341725[_0x25a2df(0x750)](-0x2f*0x7+-0x22e3+-0x1216*-0x2,0x1b1*0x1+0x182*0xb+-0x1233),'warnings':[]};if(_0x21f744)_0x53f90d[_0x25a2df(0x5c0)+_0x25a2df(0x591)][_0x25a2df(0x3f8)](_0x25a2df(0x944)+_0x25a2df(0xbb3)+_0x25a2df(0xb72)+_0x21f744);if(_0x491cad[_0x25a2df(0x721)])_0x53f90d[_0x25a2df(0x5c0)+'ngs']['push'](_0x308226[_0x25a2df(0x81c)](_0x25a2df(0x9e2)+'armin'+_0x25a2df(0x67e)+_0x25a2df(0xb72),_0x491cad[_0x25a2df(0x721)]));_0x308226[_0x25a2df(0x34f)](_0x53f90d['surve'+_0x25a2df(0x70a)],-0x1ab4+0x1e2d+-0x379)&&Object['keys'](_0x53f90d['insta'+'nces'])[_0x25a2df(0x687)+'h']>-0x13d5+-0xe2*0x1+-0x1*-0x14b7&&_0x53f90d[_0x25a2df(0x5c0)+'ngs'][_0x25a2df(0x3f8)](_0x308226['fITFr'](_0x308226['XfSbj'](_0x25a2df(0x793)+_0x25a2df(0xa7c)+Object[_0x25a2df(0x33f)](_0x53f90d['insta'+_0x25a2df(0x5bb)])[_0x25a2df(0x687)+'h'],'\x20obje'+_0x25a2df(0xc21)+_0x25a2df(0x4a4)+'read\x20'+_0x25a2df(0x8bf)+_0x25a2df(0xb96)),_0x2f8d40['lastE'+_0x25a2df(0xa15)]?_0x25a2df(0xc29)+_0x25a2df(0x6b6)+_0x2f8d40['lastE'+_0x25a2df(0xa15)]:_0x25a2df(0x256)+_0x25a2df(0x6a3)+'iled,'+_0x25a2df(0x384)+_0x25a2df(0x26b)+_0x25a2df(0x617)+_0x25a2df(0x391)+_0x25a2df(0xb11)+'ped\x20b'+_0x25a2df(0x471)+'e.'));_0x53f90d[_0x25a2df(0x7d3)+'ity']&&_0x308226[_0x25a2df(0x745)](_0x53f90d[_0x25a2df(0x7d3)+_0x25a2df(0x7a8)]['tagMa'+'tches'],![])&&_0x53f90d['warni'+_0x25a2df(0x591)][_0x25a2df(0x3f8)](_0x308226['nVQOt']('ANOTH'+_0x25a2df(0x773)+_0x25a2df(0x8c7)+_0x25a2df(0x27b)+_0x25a2df(0x5d9)+'ER\x20wi'+_0x25a2df(0xa9b)+'Unity'+_0x25a2df(0x3b4)+'dkit.'+'\x20The\x20'+'Runti'+'me\x20we'+_0x25a2df(0x4b0)+_0x25a2df(0xb4e)+'\x20'+_0x308226['BDIwE'],_0x25a2df(0x58c)+'ame\x20w'+'hile\x20'+'the\x20o'+_0x25a2df(0x655)+_0x25a2df(0x7ba)+'\x20it\x20i'+_0x25a2df(0x40d)+'haned'+'.\x20Dis'+_0x25a2df(0xaee)+_0x25a2df(0xa27)+_0x25a2df(0x762)+'r\x20')+(_0x25a2df(0x2cc)+'a/UWM'+_0x25a2df(0x2ab)+'ipt\x20i'+'n\x20Tam'+_0x25a2df(0x846)+_0x25a2df(0x232)+_0x25a2df(0x656)+_0x25a2df(0x6e8)+'eload'+'.'));if(_0x53f90d[_0x25a2df(0x7d3)+'ity']&&_0x308226[_0x25a2df(0x4bf)](_0x53f90d[_0x25a2df(0x7d3)+_0x25a2df(0x7a8)][_0x25a2df(0x962)+_0x25a2df(0x8a9)+'imeIs'+_0x25a2df(0x1fe)+'ted'],![])){if('zWpnv'!==_0x308226[_0x25a2df(0x4e9)])_0x53f90d['warni'+_0x25a2df(0x591)][_0x25a2df(0x3f8)](_0x25a2df(0x962)+_0x25a2df(0x664)+_0x25a2df(0x556)+'\x20is\x20n'+_0x25a2df(0x9d1)+_0x25a2df(0xa9b)+_0x25a2df(0x878)+_0x25a2df(0x3b4)+_0x25a2df(0x43a)+_0x25a2df(0xb86)+'me\x20-\x20'+_0x25a2df(0xa79)+'lugin'+_0x25a2df(0x9e5)+'built'+'\x20'+_0x308226[_0x25a2df(0x7e3)]);else{var _0x11139e=_0x20eac5;if(_0x11139e&&_0x11139e['el'])_0x11139e['el'][_0x25a2df(0x74c)][_0x25a2df(0x469)+'ay']=_0x13e1a1?'':_0x25a2df(0xad2);var _0x11c6d4=_0x4586bb;if(_0x11c6d4&&_0x11c6d4['cv'])_0x11c6d4['cv']['style'][_0x25a2df(0x469)+'ay']=_0x1e6d86?'':_0x7d2708[_0x25a2df(0x574)];}}if(_0x53f90d['esp']&&_0x53f90d[_0x25a2df(0x731)][_0x25a2df(0x8d7)])_0x53f90d['warni'+'ngs']['push'](_0x308226[_0x25a2df(0x7f2)](_0x308226['lnTan'],_0x53f90d[_0x25a2df(0x731)]['note']));if(_0x53f90d['globa'+'ls']&&!_0x53f90d['globa'+'ls'][_0x25a2df(0x6df)+'8']){var _0x22d68b='';_0x53f90d['hookF'+_0x25a2df(0x545)+'oof']&&(_0x25a2df(0xaa0)===_0x25a2df(0xaa0)?_0x22d68b=_0x308226['CpUCE'](_0x308226[_0x25a2df(0x84d)](_0x308226['drQaI'](_0x308226[_0x25a2df(0x828)](_0x308226['wQlRY'](_0x308226['XfFnW'],_0x53f90d['hookF'+'irePr'+_0x25a2df(0x4f5)]['atMs'])+_0x308226[_0x25a2df(0x4b5)],_0x53f90d[_0x25a2df(0x544)+'irePr'+'oof']['origi'+'nalFu'+'nc'])+(_0x25a2df(0x906)+'game\x20'+'resol'+'ved=')+_0x53f90d[_0x25a2df(0x544)+_0x25a2df(0x545)+'oof']['resol'+'veGam'+'eAtFi'+'re'],_0x25a2df(0x91f)+'rce:\x20'),_0x53f90d['hookF'+_0x25a2df(0x545)+_0x25a2df(0x4f5)]['gameS'+'ource'+_0x25a2df(0x6cc)+'e']||_0x25a2df(0xad2)),_0x308226['LIjBF']):_0xe98e55['warn'](_0x7d2708['nhDdl'],_0x25a2df(0x62e)+':'+_0x4dcab7,_0x377780)),_0x53f90d[_0x25a2df(0x5c0)+'ngs']['push'](_0x308226['tePQc'](_0x308226[_0x25a2df(0xa28)]('Unity'+'\x20inst'+_0x25a2df(0xc65)+_0x25a2df(0x516)+_0x25a2df(0x822)+'ed\x20ye'+'t\x20(so'+_0x25a2df(0xc60)+'\x20'+(_0x53f90d['globa'+'ls']['gameS'+_0x25a2df(0xb07)]||_0x25a2df(0xad2)),_0x308226[_0x25a2df(0x9a0)])+('Heap\x20'+'reads'+'\x20stay'+'\x20bloc'+'ked\x20u'+'ntil\x20'+_0x25a2df(0x6d6)+_0x25a2df(0x418)+_0x25a2df(0x781)+_0x25a2df(0x826)+'odule'+'.HEAP'+'U8\x20is'+_0x25a2df(0x5ad)+_0x25a2df(0x9f0)+'.'),_0x22d68b));}(_0x53f90d[_0x25a2df(0x9d7)+'ls']&&!_0x53f90d[_0x25a2df(0x9d7)+'ls']['value'+_0x25a2df(0x3b2)+'er']||_0x308226['ByqnM'](_0x53f90d[_0x25a2df(0x9d7)+'ls'][_0x25a2df(0x763)+_0x25a2df(0x3b2)+'er'],'undef'+_0x25a2df(0x4db)))&&_0x53f90d['warni'+_0x25a2df(0x591)][_0x25a2df(0x3f8)](_0x308226[_0x25a2df(0x442)]);if(_0x308226[_0x25a2df(0x8ff)](_0x53f90d[_0x25a2df(0x293)+_0x25a2df(0x548)],-0xc96+0xa53+0xc1*0x3)&&_0x308226['HlKYy'](_0x53f90d[_0x25a2df(0x293)+'Appli'+'ed'],0x201b*0x1+-0xfab+-0x1070)&&_0x14a9a8){if(_0x308226['oShaQ'](_0x53f90d['hooks'+'Resol'+_0x25a2df(0x227)],-0x1*-0x2221+-0x105+0x34*-0xa3))_0x53f90d['warni'+'ngs']['push'](_0x308226[_0x25a2df(0x6ba)](_0x308226[_0x25a2df(0x2cf)](_0x308226['advpg'](_0x25a2df(0x6f9)+_0x53f90d['hooks'+_0x25a2df(0x548)]+(_0x25a2df(0x6d1)+_0x25a2df(0x8de)+_0x25a2df(0x625)+'n\x20SEE'+_0x25a2df(0xa59)+'UWMK.'+_0x25a2df(0x9d8)+_0x25a2df(0x976)+_0x25a2df(0x9f1)+'\x20')+_0x308226[_0x25a2df(0x204)],_0x308226[_0x25a2df(0x63d)])+('Regis'+'tered'+'\x20'),_0x53f90d[_0x25a2df(0x293)+'Regis'+'tered'+_0x25a2df(0x44e)]),_0x25a2df(0x6d1)+_0x25a2df(0x718)+_0x25a2df(0x9b6)+_0x25a2df(0xc72)+'ng\x20at'+'\x20docu'+'ment-'+'start'+'.'));else{if('ghYTy'==='Mfunk'){_0x53d4d4[_0x25a2df(0x3f8)](_0x308226['iwSwN']);for(var _0x2abcda=-0x2d3*0x7+-0x1938+0x2cfd;_0x2abcda<_0x54e8c8[_0x25a2df(0x5c0)+_0x25a2df(0x591)][_0x25a2df(0x687)+'h'];_0x2abcda++)_0x376f92['push'](_0x308226[_0x25a2df(0x81b)](_0x308226[_0x25a2df(0x852)],_0x43155b['warni'+'ngs'][_0x2abcda]));}else _0x53f90d['warni'+_0x25a2df(0x591)][_0x25a2df(0x3f8)](_0x308226[_0x25a2df(0x6a8)](_0x308226['RxzyP'](_0x308226[_0x25a2df(0x55b)],_0x53f90d['hooks'+_0x25a2df(0x46c)+'ved'])+_0x25a2df(0x22a)+_0x53f90d['hooks'+'Total'],_0x25a2df(0x6d1)+_0x25a2df(0x221)+'o\x20a\x20t'+_0x25a2df(0xaee)+'index'+_0x25a2df(0x4a4)+'appli'+'ed\x20no'+_0x25a2df(0x2a7)+'he\x20si'+'gnatu'+'re\x20')+_0x308226[_0x25a2df(0x8c3)]);}}return _0x308226[_0x25a2df(0x69d)](_0x53f90d[_0x25a2df(0x293)+_0x25a2df(0x947)+'ed'],0x1166+0x1368+-0x24ce)&&!_0x53f90d[_0x25a2df(0x611)+'nces'][_0x25a2df(0x262)+_0x25a2df(0x9b9)+_0x25a2df(0x2df)]&&_0x53f90d[_0x25a2df(0x5c0)+'ngs'][_0x25a2df(0x3f8)]('Hooks'+_0x25a2df(0xbe6)+_0x25a2df(0x727)+'ed\x20bu'+_0x25a2df(0x6ac)+_0x25a2df(0x262)+'ntrol'+_0x25a2df(0x9c4)+_0x25a2df(0x55c)+_0x25a2df(0x93f)+_0x25a2df(0x836)+(_0x25a2df(0x2a5)+_0x25a2df(0x96e)+_0x25a2df(0xbe6)+'not\x20i'+'n\x20a\x20r'+_0x25a2df(0x6da)+'\x20or\x20t'+_0x25a2df(0x35a)+'ok\x20is'+'\x20on\x20t'+_0x25a2df(0x3b1)+_0x25a2df(0x74a)+'verlo'+_0x25a2df(0x710))),_0x53f90d[_0x25a2df(0x611)+_0x25a2df(0xa76)+_0x25a2df(0xb35)+'ed'][_0x25a2df(0x687)+'h']&&(_0x308226[_0x25a2df(0x9ba)]('qNPyl','MsBfK')?_0x53f90d['warni'+_0x25a2df(0x591)][_0x25a2df(0x3f8)]('rebui'+_0x25a2df(0x24a)+_0x25a2df(0xba2)+'irst\x20'+'captu'+_0x25a2df(0x1e8)+_0x25a2df(0x40f)+_0x25a2df(0x91b)+_0x53f90d[_0x25a2df(0x611)+_0x25a2df(0xa76)+_0x25a2df(0xb35)+'ed']['join'](',\x20')):_0x93930f=_0x27675e(_0x1a2224&&_0x2881e3[_0x25a2df(0x2ff)+'ge']||_0x4c4321)),_0x53f90d;}}function _0x2a9fdc(_0x22fe2d){var _0x3121de=_0xc5af74,_0x137aee={'mELpg':_0x308226['ibDfE'],'xRIao':_0x308226[_0x3121de(0x1e2)]};if(_0x308226['CglZE'](_0x308226['ChGcS'],_0x308226['ChGcS'])){console[_0x3121de(0xae8)](_0x3121de(0x437)+'kura]'+'\x20Skil'+'lWarz'+'\x20repo'+'rt',_0x308226[_0x3121de(0xbef)]('color'+':'+_0x36b2b2,';font'+_0x3121de(0x8c9)+'ht:70'+'0'),_0x22fe2d),console['log'](_0x308226['nfwzL'](_0x308226['rdQjt'](_0x572883,'\x0a')+JSON[_0x3121de(0x412)+'gify'](_0x22fe2d,null,-0x16b3+-0x1*-0x656+-0xa*-0x1a3)+'\x0a',_0x32eb22)),_0x1794da=_0x22fe2d;try{'szeXS'!==_0x308226[_0x3121de(0x567)]?(_0x1817df=!_0x19ea84,_0x308226[_0x3121de(0xaf2)](_0x4d55db)):_0x308226[_0x3121de(0x46d)](_0x46c10d,_0x22fe2d);}catch(_0x5bdc06){}_0x308226[_0x3121de(0x4af)](_0x33fd94,_0x308226[_0x3121de(0x97d)],{'report':_0x22fe2d});}else return _0x40a3c6[-0x2086+-0x6*0xa6+0x246b]===_0x137aee[_0x3121de(0x409)]||_0x25f8c1[0xb05+0x1*0x1169+-0x1c6d]===_0x137aee[_0x3121de(0x7c4)];}function _0x25f1ac(){var _0x18fcc3=_0xc5af74;try{return _0x308226[_0x18fcc3(0xc4f)](_0x3235d2);}catch(_0x19b187){return{'version':_0x48e762,'when':new Date()[_0x18fcc3(0x563)+_0x18fcc3(0xa16)+'g'](),'elapsedMs':_0x308226[_0x18fcc3(0x575)](Date[_0x18fcc3(0x682)](),_0x303305),'host':_0x4e3c5b,'uwmk':!!(window['Unity'+'WebMo'+'dkit']&&window[_0x18fcc3(0x878)+_0x18fcc3(0x3b4)+'dkit'][_0x18fcc3(0xb86)+'me']),'il2CppContext':![],'arm':_0x491cad,'hooksTotal':_0x420614['lengt'+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x308226[_0x18fcc3(0xa9c)](String,_0x19b187&&_0x19b187['messa'+'ge']||_0x19b187)};}}function _0x49bb77(){var _0x1a3df8=_0xc5af74,_0x30dd24={'RYUPW':_0x1a3df8(0xa8c)+_0x1a3df8(0xb7b)+_0x1a3df8(0x99f)+'s','GsqZM':'zDhxo','BbUGv':function(_0x237417,_0x12dab0){return _0x237417(_0x12dab0);},'BicLs':function(_0x1ea989,_0x1f12a5,_0x224c78){return _0x1ea989(_0x1f12a5,_0x224c78);},'sZYmd':function(_0x386337,_0x34c448,_0x346be4){return _0x386337(_0x34c448,_0x346be4);},'wdvGq':function(_0x8480db,_0x411200,_0x2d2fe5){return _0x8480db(_0x411200,_0x2d2fe5);}},_0x2cb20a=-0x25*0xe7+-0x55d*-0x3+0xa4*0x1b;try{_0x308226[_0x1a3df8(0x837)](_0x456d1c);}catch(_0x1790d6){}try{if('MXzpz'!=='MXzpz'){var _0xec2588=(_0x1a3df8(0x4ee)+_0x1a3df8(0x5b8))[_0x1a3df8(0x3c2)]('|'),_0x1bf800=-0x23e7+0x61*-0x4f+0x41d6;while(!![]){switch(_0xec2588[_0x1bf800++]){case'0':_0x2eee4d=_0x9c393d[_0x1a3df8(0x9a3)+_0x1a3df8(0x972)+_0x1a3df8(0x964)]('div');continue;case'1':return _0x23538a;case'2':_0x3c118e[_0x1a3df8(0x2d0)]['appen'+_0x1a3df8(0xbda)+'d'](_0xef3f4a);continue;case'3':_0x36e6ca['id']='sakur'+'a-sw-'+'v2';continue;case'4':if(!_0x5538a2[_0x1a3df8(0x9bf)+_0x1a3df8(0x9a4)+'ById'](_0x30dd24[_0x1a3df8(0x808)])){var _0x34db02=_0x5a904a[_0x1a3df8(0x9a3)+'eElem'+'ent']('style');_0x34db02['id']=_0x1a3df8(0xa8c)+'a-sw-'+_0x1a3df8(0x99f)+'s',_0x34db02['textC'+'onten'+'t']='#saku'+_0x1a3df8(0x779)+'-v2{a'+_0x1a3df8(0xb4a)+_0x1a3df8(0x5d0)+'}',(_0x14bd5['head']||_0x524531[_0x1a3df8(0xbd7)+_0x1a3df8(0x612)+'ement'])[_0x1a3df8(0x3de)+'dChil'+'d'](_0x34db02);}continue;}break;}}else _0x41e19e();}catch(_0x5742d4){}_0x308226[_0x1a3df8(0x53f)](setInterval,_0x1cd5d6,-0x249b+0x1*0x218+-0x289*-0xf),_0x308226[_0x1a3df8(0x587)](_0x2a9fdc,_0x308226[_0x1a3df8(0xb02)](_0x25f1ac)),function _0x1c9ca0(){var _0x3f7ce1=_0x1a3df8;if(_0x30dd24[_0x3f7ce1(0x257)]===_0x30dd24[_0x3f7ce1(0x257)]){if(!_0x420614['lengt'+'h'])try{_0x1b2197();}catch(_0x42bbab){}_0x2cb20a++,_0x30dd24['BbUGv'](_0x2a9fdc,_0x25f1ac());if(!_0x420614['lengt'+'h']&&_0x2cb20a<0x2526*-0x1+0x15b2+0x10a0)_0x30dd24['BicLs'](setTimeout,_0x1c9ca0,0x1c51+-0x1b70+-0x163*-0x5);else{if(!Object['keys'](_0x44e9a2)['lengt'+'h']&&_0x2cb20a<-0xb*-0x189+0x1*-0x895+-0xa6*0xb)_0x30dd24['sZYmd'](setTimeout,_0x1c9ca0,0x4f3*-0x4+0x648+-0x1e*-0xb6);else _0x30dd24[_0x3f7ce1(0xb58)](setTimeout,_0x1c9ca0,-0x6*-0x58a+-0x20bf+0x5*0xd7);}}else _0x26bc27=[];}();}if(document[_0xc5af74(0x2d0)])_0x308226[_0xc5af74(0xb02)](_0x49bb77);else document[_0xc5af74(0x4a0)+_0xc5af74(0xbdf)+_0xc5af74(0x816)+'r'](_0xc5af74(0xb6c)+_0xc5af74(0x9dd)+_0xc5af74(0x59d)+'d',_0x49bb77,{'once':!![]});if(document['body'])try{if('jZmdg'===_0x308226[_0xc5af74(0x515)]){var _0x3ef734=_0x308226[_0xc5af74(0x4a7)][_0xc5af74(0x3c2)]('|'),_0x97a9e7=0x1501+0x1621+-0x2b22;while(!![]){switch(_0x3ef734[_0x97a9e7++]){case'0':if(!_0x4c9c6d)return![];continue;case'1':var _0x4c9c6d=_0x99cab1(_0x18961a,_0x3c434b,_0xbe6755[_0xc5af74(0x703)]);continue;case'2':var _0x2a16a4;continue;case'3':if(_0x5adfab===_0xc5af74(0x783))_0x2a16a4=_0xb68ccd(_0x3d3a06);else{if(_0x45f9ab===_0x308226[_0xc5af74(0x6f4)])_0x2a16a4=_0x308226['yVTYp'](_0x37859b,-0x6a*0x56+-0x9*0x41b+0x488f);else _0x2a16a4=(_0x10f225?0x8c5+0x21c*0x2+0x2*-0x67e:0x395+-0x11e7*-0x2+-0x3*0xd21)&-0x11f8+0x957+-0xe*-0xb0;}continue;case'4':return _0xf6276d(_0x2192ee+_0x23e921+_0xbe6755[_0xc5af74(0x5a8)+'n'],_0xc5af74(0xc35),_0x308226[_0xc5af74(0x9c0)](_0x2a16a4,_0x2ad21e))&&_0x308226['jkhLG'](_0x2c6198,_0x308226[_0xc5af74(0x319)](_0x5c1183+_0xa3d05c,_0xbe6755[_0xc5af74(0x260)]),_0x5d798a===_0x308226[_0xc5af74(0x8f8)]?_0xc5af74(0xc17):_0x2aeec3===_0xc5af74(0x494)?'i32':'u8',_0x67bb2d===_0xc5af74(0x783)?_0x51772d:_0x44d1c5===_0xc5af74(0x494)?_0x603b43|-0x179*0x17+0x13*0x147+-0x1*-0x99a:_0x5a0a27?0xc8+-0x13*-0x37+-0x2*0x26e:-0x17*0x3b+-0x4eb+0xa38)&&_0x33b693(_0x308226[_0xc5af74(0x4df)](_0x6f2297+_0x248d2f,_0xbe6755['activ'+'e']),'u8',-0x14c6+-0x2165+0x362b);case'5':var _0xbe6755=_0x207c21[_0x126fee];continue;case'6':var _0x2ad21e=_0xbe6755[_0xc5af74(0x7c1)+'pe']==='u8'?_0x136621[_0xc5af74(0xac3)+'nt8'](_0xbe6755[_0xc5af74(0x700)]):_0x136621['getIn'+_0xc5af74(0xa4b)](_0xbe6755[_0xc5af74(0x700)],!![]);continue;case'7':var _0x136621=new _0x534437(_0x4c9c6d[_0xc5af74(0x267)+'r'],_0x4c9c6d[_0xc5af74(0x950)+_0xc5af74(0x650)],_0x4c9c6d['byteL'+_0xc5af74(0xa2b)]);continue;}break;}}else _0x5c53bc();}catch(_0x4bf5b6){}else document[_0xc5af74(0x4a0)+_0xc5af74(0xbdf)+_0xc5af74(0x816)+'r'](_0xc5af74(0xb6c)+'ntent'+_0xc5af74(0x59d)+'d',function(){try{_0x5c53bc();}catch(_0x586045){}},{'once':!![]});})()));function _0x45e7(_0x140309,_0x41c2c0){_0x140309=_0x140309-(0x6f3+0x267e*-0x1+0x2113);var _0x362394=_0x2613();var _0x528cff=_0x362394[_0x140309];if(_0x45e7['CbItsh']===undefined){var _0x550008=function(_0x236fae){var _0x2b2b8e='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x54e355='',_0x1f5e2f='';for(var _0x29e21f=-0x67*0x61+-0x1*0x103d+0x3744,_0x4e3d32,_0x79792a,_0x20e284=-0x18*-0x1f+-0xb*-0x203+0xd*-0x1ed;_0x79792a=_0x236fae['charAt'](_0x20e284++);~_0x79792a&&(_0x4e3d32=_0x29e21f%(0x2663+-0x3f1*0x8+0x6d7*-0x1)?_0x4e3d32*(0xa7*-0xe+-0x256b+0x2ecd*0x1)+_0x79792a:_0x79792a,_0x29e21f++%(-0x88a*0x3+0x10a6+0x8fc))?_0x54e355+=String['fromCharCode'](-0x2d*0x9c+0xb68+0x41*0x43&_0x4e3d32>>(-(0x1*-0x23a2+0x1267+0x113d)*_0x29e21f&-0x2d9*-0x7+0x21*0xd2+-0x3*0xfa9)):-0x460+-0x6bb*0x3+0x13*0x14b){_0x79792a=_0x2b2b8e['indexOf'](_0x79792a);}for(var _0xdce534=-0x13*0xd7+-0x1604+0x25f9,_0x5147d6=_0x54e355['length'];_0xdce534<_0x5147d6;_0xdce534++){_0x1f5e2f+='%'+('00'+_0x54e355['charCodeAt'](_0xdce534)['toString'](-0xf*0x113+-0x13eb+-0x1ce*-0x14))['slice'](-(-0x498+0x1ba5+-0x170b));}return decodeURIComponent(_0x1f5e2f);};_0x45e7['fnCBWF']=_0x550008,_0x45e7['OVyECV']={},_0x45e7['CbItsh']=!![];}var _0x1e6a54=_0x362394[0x2033+0x2289+0x1*-0x42bc],_0xdaa8c8=_0x140309+_0x1e6a54,_0x597d7d=_0x45e7['OVyECV'][_0xdaa8c8];return!_0x597d7d?(_0x528cff=_0x45e7['fnCBWF'](_0x528cff),_0x45e7['OVyECV'][_0xdaa8c8]=_0x528cff):_0x528cff=_0x597d7d,_0x528cff;}function _0x2613(){var _0x3914c3=['qurxuei','BM8Gzw4','AgLSzsa','DhfTzLu','yMX5lum','y3qOCYK','C2fUCY0','nhW2FdC','rw5LBwK','igDSB2i','Bg9dAge','A1D6q0q','nhWXmNW','uMvHC28','BMu7Fq','o2n1CNm','vwzmz1m','y2f0','q2vvrwu','qxzluNa','ntuSlJi','DMLZDwe','C2v0uhi','ztOXms4','tLvNB2m','AtmY','AwLZBuu','BwvHBNm','AhPKtNm','vMPgshG','ysGYntu','Axy+','AxrSzxS','ndC0odm','z2uUrgu','ihbHz2u','rwHtrKO','seXouMS','ifvxtuS','lwH1zhS','zefNsuC','Ds1JC3m','CNHhq20','CxnuEwO','zwvbEg8','v1PmvLu','B1Dmq0u','zxHLy0m','y3qGzM8','B246ywi','CMvMCW','vMXoyNq','z3zHALm','BdPUB24','DKz5s1m','Ag9VA1a','icaOEwe','sKXMsg8','EK1ntKS','s1PUsKK','mJHWEdS','DgG6mJK','Dgz5y0q','zgP2s2u','nZq4mJK','yxqSCMC','rvnqig8','v09iCwW','DxjJztO','ie9IC2m','CgfKzgK','igP1Bxa','oJnWEdS','yw5Jzsa','kdiYChG','yMzVyK0','C28GC3q','Aw5Ly2e','iIbZDgu','zgvMAw4','mhb4oYi','v2vHCg8','sLj5B1y','zxzLBNq','A2njwg4','lwLUzgu','igfYBwK','AgvHBhq','sNDWBee','yM94zxm','EwPYA3a','DgDhB1q','Fdv8nNW','zgvUDgK','tffAwMm','zwqU','A29Zzxa','v2PbD0u','mcaWida','CM9SBgu','C28GDgG','EeDvDNG','zgfNqLy','uKfqueu','AxvZoJu','ChrLza','zxiTC2u','EwvZ','zg93oMK','BLzkveC','Aw5KB3C','suHSD0O','iNrLEhq','svndrMK','mda7Bwe','sMP4Dfe','r3LHBg8','DvrYA1q','EuPZzM4','DhKGAw4','y2vK','B3jPz2K','Cg9PBNq','Ag90CYa','EIdIGjqG','CJPYz2i','AM9PBG','C2nHBge','CM9VDa','ig1VDMu','C2v0rMW','vvjdCeS','y2XHC3m','ywrPDxm','pgrPDIa','sxvLA3K','C2STyNq','D29YBgq','nJq2o3a','ruLsA2e','i3n3mI0','nNb4o2G','Aw5N','uMvJDa','yM9Yzgu','DdOXnha','Cg9YDca','yxrHBJi','qwn0Aw8','BM9ZCge','wun1EKu','vwLVs2W','yMPcvvi','BKzgEMC','Fdf8ma','AufRC1C','ignSyxm','Dxvsv1y','Aw50BYa','nYWUncK','mhW2Fde','lxDYyxa','CMvZCYa','z2vYlIa','iIbMAwW','mhHKna','A3nZruC','ywnLlwK','mcaWige','igzHA2u','ihrOzsa','nYWYmsW','uMvMDxm','mhG0ma','rwr5uxe','t2P3tfe','ig9Uia','CNLYAxe','ywnLo3C','EvjvD2C','icaHia','Dgf5CYa','ihnVBgK','zMLSBfm','Bg9JywW','BMC+','CNzVrNy','r0rbEeu','wK9jshO','iMrPC3a','z0vKz1u','FdD8nNW','wMHuA0S','ihnPz24','ugL0y2G','EsbHigq','sxrfDeK','oJrWEdS','A1fiB2C','AxnmB2m','vgP5t3e','mtjWEdS','svPgEMK','Aw5KzxG','CMuGkhi','o3DVCMq','zxmGB2y','uNrWBM8','vxniALK','CgXPzxm','DgvktMi','DxjHtwu','AwXKlca','q2PvwuO','nc00lJu','ic40nxm','zNjVDw4','Dw5Kzwy','z1jTy2C','ohb4o2i','BwuGBM8','ihbVC3q','BIaUC2S','ChrY','zgLMzMu','EdTWywq','rxHWB3i','psjWywq','mtuXmJm0Dhnvuevo','icaOCgK','CMuGy2W','yxa9iNi','yMPMEMe','Bez1BMm','z0zryKS','Awr0Aa','yt0IyMe','sxzUyNi','B2fYzca','B3jhC3y','B3jRu3K','zwvKzwq','sMvYq2q','lM1Ulw0','lxGIihm','seLet2K','ys5ZA2K','keLUC2u','ig9Uy2u','ywjSzwq','BwfYA3m','CNDHCNy','idqTnc4','vurlrhy','zgf0ys0','ru52zum','sLnptIa','qLL0uMi','osWGDhu','Dw52zxi','D09iyNa','khmPihq','ic0+ia','B3jZt0e','vvvXyxG','DgLVBG','nhW2','DMvK','twHsChC','Dxm6mti','ig9Mia','zdPYz2i','C2STDMe','CMfTzs4','uMvSB2e','zYdcTYa','vxbJEw4','BMvS','BMTLEsa','ugf0Aa','BM8Gvxa','ANDoBg4','BK5LDhC','vgHLigG','wxL1DhG','se50A00','BwHzuNm','zgvYoJa','u1rMC2e','oJe7BwK','icbVzMy','z2v0q2W','D2fPDgK','AguGB2W','rK9Lvgq','Derpq2y','CI1YDw4','tw9KA2K','lwvZCc0','yNv0ig4','BMjyC2m','BM9UztS','BhqGC2K','DxHtqui','mtTTAw4','mwzYksK','AgvYAxq','mcbYz2i','zYbZy3i','B2TLoMm','pgnPCMm','Aw1HCcW','AKTYy2i','iM5VBMu','tM8GCMu','r3nXwK0','ChvTwwy','ufnXz1e','C2STy2e','rMrAqKW','Dw52s2e','iIb3Awq','ucbVBJW','ChG7y3u','zMfRzq','mdCSmtu','rLbty28','Bu5LqMu','AwzPzwq','Bw4TBwe','zfD2Exa','yNvMzMu','khrOAxm','B2XVCJO','nsWUmdi','DMvYEsa','mhHIna','Bw4TDg8','uePIDva','vNrdBfC','uLmG','nsWXndm','C2LU','BxbSyxq','DgvZDa','refhAKy','EdTIywm','AgLZiha','nJaIigG','DgvK','CM9ZCY0','ufKGve8','C1DXwwS','oJm0ChG','Bgv4oJe','ugPXy0m','wufmCeK','DYaTidq','lJuGms4','sg5Ivxe','BwLLCYa','z1jgyKi','mJKWChG','zM92u2e','yxa6nha','DcbPzd0','BMqU','mtK2nZaYv29LB3jc','Aw5Qzwm','C2v0','AxzLo3C','mtC3lc4','B3rdvgS','ytK5o20','qMPjEwS','Ag9VA3m','zsDZig8','B3qGysa','xtO6ywy','t0jbCxi','Bef3Evu','DMLLD0i','yt0IC3q','A0LSwwG','DgfYDdS','BgvMDa','r2fTzq','phnTywW','owqPida','u3vZsuy','Bgv4oJa','Axnzs0S','rMXHzW','rwL0Agu','ksWGC28','BMuUifq','Dc1ZAxO','Dw94tLm','uMr2A0S','sYbZy3i','zNbLB0y','rfHHsfe','ugHVDg8','B3DRzKW','Dg57ywW','oMnVBhu','EwuU','y2uSq28','CMq7zM8','y3jey3e','Aw9U','u21hv2O','zNjHBwu','CuLAtKO','zwqGlsa','ALj4shC','zM9UDc0','B24GDgG','Dgf0Dxm','yM9VBgu','nJm4mtmZnKfjvxPNBG','nhWZ','ywnRz3i','zxrVBG','wNzLrhO','rvjSt0C','s0zTEg4','DgL2zxS','mhGZma','ms41ihu','D3jVBMC','z2LUlwW','u2fRDxi','zwqGB2y','zMDhAxu','uKPAD0u','yM9KEq','mJu1lde','iIbTAw4','s0DoDLu','zxnZiey','uKffA3a','D2LKDgG','BhvTBJS','C2zVCM0','q0rMweG','B3vWig8','uLn1wKG','AgvHza','zs1JB2W','zJzIowq','BgvY','zwqGysa','r3PzrgS','iJ5dB3a','y29Z','CM9Rzs0','igLUlwy','Fdj8ma','mhHKma','DxqGEw8','AwDUlwm','CK5zDMm','shndtLe','ywWGBM8','sgvHBhq','B3rLlMu','uxDptw4','q2PKBwe','mda7y28','A2vKpsi','C2XPzgu','sxzvzva','sLryD0W','lde0mYW','z1rVD1K','ANrlDgq','mtaSmte','C0LktKm','r1bVDfm','zsbPBNm','ywjZ','C3bHy2u','BwvZC2e','zxi6mxa','zuL0zw0','ywnRihq','q1jIB3O','vvjbx1m','AgvPz2G','A291wei','igq9iK0','pc9KAxy','B25Ligi','lM1Ulxq','yMfS','Ag9VAW','zgvYlxi','yw5LBca','pZWVC3a','imk3ihrL','iefdveK','icaGDhK','y0Xvr2u','DMLLDZO','nMi5zcW','AdO2mNa','reHVA1C','zNGIihq','ugPYEKG','zxH0lwe','Fdr8mW','CNnJCMK','B2fYza','B3i6','BgLUzwm','DZiTB3u','B2f0mZi','ugXHEwu','Cc1JDG','mtqZlde','ChqGsvm','B206mxa','ANf3CvG','C2HHzg8','yMDMvvy','CMv7zM8','DgfN','zwLNAhq','surQrgq','CxvLCNK','AwX0zxi','Ahq6nZa','B2XZoJO','oMzSzxG','o2zVBNq','otK7y3u','CMvTB3y','ktSGBM8','vK9mCvm','Dxm6n3a','Aw50zxi','C3mGmhG','q2X1s2S','rwXSB2u','CwDwv3y','B25LoYi','A2v5CW','zgL1CZO','iMjHy2S','y2fSlMq','u2v3quK','Bgu9iM0','y2H3D0W','ntuSmtq','qvjhy0i','uMvNAxm','CMXktey','zY4G','C2STC3C','lJGYktS','vgfTCgu','ktTJB2W','serqr2q','zgvIDwC','qM90Aca','BMCGyxq','BunPB0e','DMvYC2K','ufnoCfa','BwfW','BcbHz2e','D2HPDgu','ysbtA2K','AguGAg8','zw5K','mJiSmsW','DxjHvge','A2v5qxq','tMHJqLe','Dhvhufm','D24Gvxa','ueHotLu','wNrPsLm','phbHDgG','iNn3mI0','ifnxlvC','txzXD2i','zxaGDgG','nZu7Bwe','DgfSE3a','ywrKAw4','s0fdr0G','pc9ZDhi','Fde2Fde','kdi1nsW','idi0iJ4','qwznCg0','AxmGyNu','B3bLBG','ihrVCc0','ruHcqvq','DciGC3q','A0zYwK8','x3j1BNq','lYbQDw0','ktTWB2K','x19hzw4','DdPUB24','AM9PBJ0','B3G9iJa','vNLRqw4','rgLSBwO','CgfYC2u','zwryv2u','CgLUzYa','ihnVigu','q29UC28','Dg9WoJe','ueLVB1a','t1HvtuG','u2HHCNa','Ec13Awq','B3qUBw4','B25VC3a','wNDwDgu','uLrmz0u','v3PQrwS','Fdz8mG','Dcb3yxm','z2LMEq','ig9U','Dw1UCZO','ugfZDgu','AezrzMW','igLZihi','q3fJu1C','BNrxAw4','CxLLBge','DgG6BwK','BgLNBG','C3rHCNq','zxKGAxm','ywXSoMK','C3fYDa','svPrCLK','lxDPzhq','Eu9eDuK','Awv3igK','zgf0zsG','ELbvrMC','B2XZE2y','zwy1o2i','ywnPDhK','y29Kzq','s3bUDvO','yYGXmda','m3W4Fde','ic4Znxm','DdTIB3i','AxHsq3u','AguGD3i','v3jHCha','AgL0CW','v2vItw8','CM9Wlwy','zcbKAwe','ihjNyMe','igvUzca','uwj1u3e','ywj7zgK','lwfSAwC','vNvWrhC','yw1LlGO','mtiGmJe','ywn0Axy','CMvUDdS','lM1Ulwm','C3bSAxq','ys1Tzw4','EtPNCMK','phbYzsa','zvbYB3a','lwTD','z21bwLi','ndGZnJq','uMr0zg4','zw5LBxK','zxi7zM8','AwvSzca','zgzbwwO','vLz3AgO','v19F','zfLnEhm','AhvKlwm','BNrLCJS','ksbVCIa','Acbxzwi','B3CGkey','B3vUzdO','qMjlBxO','rJyGywW','Bxnpwuq','DgnOige','qNLXBK0','mcWUntu','yxbWzw4','mYWXnZC','D2nYsK8','AdO5nNa','yxrLigy','lNnRlxm','v1rUzu4','ihn0CM8','vKDSBvy','s1vsqs0','nZq4mZy','DNP4vMi','Aw50Aw4','o3rVCdO','nduPo2i','Ahq6nJu','yu9uuvm','CMvKDwm','vhPVChC','ie9o','qNb6C0m','zsGPlMu','CJTNyxa','idqGnc4','Bg9VA3m','lxrPDgW','ChvZAa','lNnRlxa','DNmGC24','DcbIzwu','DKjPt3a','Ag90ig4','lwjVDhq','ys1Wzxq','DxbKyxq','zxjZ','z2fTzsa','uhn4yNe','EKHky0O','ys1LC3a','D257B3a','ig1HBMe','nJaWo20','BuvmCgC','kdi0lde','ihnOB3C','sgvHCa','CYbVCNa','wvzwsvC','zxnWyxC','Fdz8nxW','r2fTzsG','C3rYAw4','D28GzMW','mNmSyMe','AxmGD2G','mdaWo3u','ksbZyxq','zsbVyMO','zwq6ia','y3vYC28','mtf8mtm','A2PgEwW','lK1Vzhu','DgGGB3i','wxfrtwm','mtGGnIa','mhHLoa','Bg9ZzxS','BgX3yxi','vvrhEeC','rLDAB1m','Fdv8mtu','AxqTC2m','BcbKAxm','CI1LDMu','idaGyxu','yNjLywS','y0LUChu','s2D4B1y','yxjT','zwf0zva','AxnHyMW','txvSDgK','DgvYzwq','CMuGAwC','rgLHz24','C28GAg8','lcbnzxq','jwnBC2e','EdT9','AMPoq2m','zgTPDc4','wM9rrxe','ndmSmtC','DgfYz2u','ALPRDuO','yw5ZAxq','t0j0uwi','Aw4U','reXWsuS','Bgu9iMi','C3LUy3m','mNWXFdG','mJu1ldi','t2zMC2u','rfPhrwq','oNrYyw4','m3W3Fdu','zsXdB24','lc4WnsK','y2fbwM0','qxrbCM0','DhK6mdS','ndy7y3u','iZHKn2e','Dde2','DuzZtg0','i2zMnMu','oxW2Fda','o21HCMC','C2LtuMK','y2uGyM8','lwfWCgu','CMfUC3a','B250lxC','mNb4o20','vfHAz1G','zMXVyxq','iokaLcbUBW','zM92igi','yxrHihi','ic0GDgG','B2fKzwq','yw1Ligy','Ds1YB28','BNrZoM4','y2S7zM8','ltqTnY4','zgLZCgW','BNqXnG','BurvBw4','uMvZB2W','ruXYEuy','AwnLihC','psiXmIi','m3WXFdu','Esb0Exa','CMqTAgu','BhrLCJO','kde1mcu','C2STCMe','Dxr0B24','i2zMnMi','Dw1WAw4','zxnWia','lZeUndu','BhKUieG','igvUDhi','t1rmzhK','BNzLCMK','DgnO','qNjHy2S','rKPusge','rgLMzIa','B2zM','A2vtDgq','zwz0ic4','qxzWD2C','BYb3zsa','ktT9','Be9gtwS','DeHLAwC','CMvK','D192mG','C2vYlxm','sg9VA3m','nxWZFdC','Fdr8mq','nNWYFdu','tvrKuLK','ywXTA1C','B2jMsq','vMfSDwu','C3qY','D3jHCdO','nIaXoci','CvLNAMK','Aw5Ozxi','Aw5NoJi','owqIihm','y2vKigi','z2Hpzee','q0Tfwhy','ywrKrxy','vevrr3q','lJi4','yxjHBMm','igj1Dca','lxaSnta','yMfJA2C','Bxj2tMK','CgvJDhm','vwj0ueK','psiXlJi','CJPWB2K','BwvTB3i','EtPIBg8','B3rVBK4','r3fWqwy','igfYBwu','mNW0Fdy','lcbUBYa','CI5QCYa','ihzPysa','te1ABfC','u05YseS','y2X1C3q','u2vSzwm','lxnUyxa','yxjLig4','lGOk','Et8Pica','Ad0ImIi','vefnu24','r3H2y08','DMfS','zMLSDgu','ig9IAMu','v1npCxm','B1DTy1K','AxPLoJe','qNvPBgq','Dw5KiI8','z3HAC3u','phn0CM8','tMPrq3u','EhHJEeW','lwL0zw0','zMvZwwO','ywLSzwq','swTyy3K','yNvhsw0','D2fZBu0','BhDHCNO','vhD4rvO','q29WEsa','CI5KBgW','vhf5rKS','zvbSDwC','ntuSmJu','EhbVCNq','EI51C2u','Aw5Lza','zsbNyw0','ktSTD2u','DgLHDgu','sLjouKu','igSWpq','zg93','mIWYosW','Bwv0ywq','idyWCYa','zsbUB3q','BgvYkZa','B3qGica','u2nYzwu','qvndrwu','mtbWEca','zxi7D2K','ywn0B3i','lNnRlw4','nhWWFdm','ChG7Fq','nhWXFda','igHHy2S','yxrPB24','iJiIihm','y2PUy2K','B29M','oInIzge','EdOYmtq','sNnwrLO','o3bHzgq','lJC1ktS','wLrSzhq','EgDXzwC','yM90CW','BM8GCMu','DgHLigW','Dgv4Dem','u3bLzwq','iJ48l2q','AwzYyw0','idaGlYa','wgn2Dfi','DhLSzq','AxrLBxm','BwuUy3i','zxi6mdS','B3vUDa','r0DFr2e','ihDOAwW','B1Hnuvm','yLHuvLC','nhWZFdi','Fdf8mNW','lwzPCNm','DxrVo3O','zhjryuK','phn2zYa','BwjUt2u','BM90ihi','zhjgtei','qMXIqKK','EfDSBhu','zfjOwgG','o29Wywm','mhGYma','Ewv0lG','zvn0CMu','sMzqsvy','C2STBwi','y09JzLm','uejktue','BgvMDdO','nsWYntu','BMfSv2e','AxrSzxm','C2nYAxa','B246B3a','ys1IB3G','ns00idC','wLjZzgW','oJa7EI0','ztSTD2u','DgfU','sMHqteC','CYXTB24','CIiGDhK','B0DtB2y','kZb4','ANvZDgK','ywjLBhS','uuDOB2O','Dhm6yxu','zgHdz0e','uNH6Eva','Bg9YoIm','BgXxyxi','ifnRAwW','Dw1Uo2e','B3nWywm','vfjKvhm','rK1ytfu','ndzWEdS','D2HLBIa','C3rYB24','Ag9VA0y','AxjLuhi','CfrPyLG','DcbYzxa','vg90ywW','tgrIvLa','icaGDMe','ENvctg4','zwvKig8','Cg9Z','yxnZtMe','ywH1rNi','q3rztwW','BNqTzMe','yMXWyNm','mhG1oa','Dfn2Dum','C2v0sxq','BNrPBwu','z2vY','wwjyq1O','sevbufu','DgT0zLy','vwvirvu','yxmGzMK','DMD7D2K','Aw5N4OcM','mxb4ihi','ywDLigG','As1TB24','Dg9Y','Dg9ju08','zwz0oMe','mhW1','lJuIihy','zg5Vs2C','CgXHEwu','Bgv4lxm','z2H0oJi','zMLYC3q','vfDZz2S','BM90ig0','uxrHCgC','lxjLCgu','q1Heyw0','Bwf4','BMqGBM8','lc40ktS','ywTXwKq','CvP1zge','tw91C2u','igvHC2u','DhLWzum','nZCSlJq','q1zUwhK','ie1ciea','ywL0Aw4','yMfJA2q','zsGP','BgfZlg0','s1zmD2y','AhPYqK0','phnWyw4','t3fVuhm','q1LWuMq','vxn0zK0','ihLLDca','wgXzAKS','lNnRlxy','FdH8mhW','CdPYB3u','EwXLpsi','DgHLigC','t3H0DwW','CKnVBg8','vfzAs2W','BwvUDc0','BMDZ','ywrPzw4','BfDHCNO','uNjeC2q','oMLUC2u','CeDREeO','AwqGzg8','mhWYFdq','wuP2qKC','icbJyw0','zxmGBM8','CgL0y2G','tg9Hzgu','lM1UlwW','psiXnJa','otbWEdS','uxLcyNG','tg9kBxC','ic8G','BNq7y28','zw5LBwK','tvjcD2W','DYbNBg8','AgLKzgu','CKPNrhm','t0TPDfa','AgL0zs0','zwf4Eha','ihjLywm','ChbLCIa','sfjvr2q','lg1VBM8','q01c','zwXMoMy','nsK7','ExnUzvO','ywLSywi','De5vAhG','zwn0zwq','Fdj8mq','AwXKlG','nKTJDuXfrq','BMnLCW','C3zNiIa','DgfSBgK','AxvZoJC','sLjOr1K','D2fYBMK','zhrOoJG','qxvhC1i','CNL4C20','lcbZDgu','rNP0zuu','D2fLwwC','B01Iz0S','vxPLtxe','wffREhi','A2vLCa','A2XTzNm','D2fYBG','B3i6i2y','zgf0yq','oxb4ide','AxrPywW','BMC6nha','yxbWzwe','rwX6teC','rujRsxO','EvbztNu','oMXPBMu','yxGTAgu','CK9fwLq','t0SGt1y','C2vYDcK','D3Ltu1e','B25JBgK','z2H0oJm','EtOUndu','B20GDgG','zIb0Agu','WRaSig91','BNqTD2u','oJiXndC','C3CYlwi','i3nHA3u','BgvYkW','icaYlIa','yM9KExS','BMDL','nYWUmsK','ihnPBMm','tMfTzq','ugHuyKm','z3jHyG','rw5HyMW','wwf3igm','txPREu4','uufYwfq','AgfKB3C','AcbMAwu','yxbZAg8','mJTZDhi','C3rHDhu','mduPlda','nxWXFda','v2LKDgG','mhW1Fde','B2XSzxi','swDZz0O','r2jvv0G','Fdf8oq','zhvSzq','sMvKuwW','yxbWzxi','Aw5or28','C3bHCMu','tNjTzKK','vffUtei','mIWUnsK','zNvUy3q','CY5Tzw0','nJTMB24','Dg87Fq','C25HCa','Ee1NueG','nZKSmtq','ztT0CMe','vM5OB3m','Aw5ZDge','zw50rwW','Dg9W','EI1PBMq','EdTHy2m','wLn6uwm','B2zMC2u','DgfIBgu','oJi2ChG','CgfYyw0','sw5ZDge','DxrVo2i','pgj1Dhq','Fdn8nxW','u1z5qMe','A2v5vxm','BMD0AcW','sgzRC3O','otmZmtyXnfPyyMXPtW','mJuWA3zVExbs','zsbLDMu','mIiGC3q','psjZDZi','Axr5oJe','Bwztt00','ihbHC3q','vxzkC2q','nsWUmdu','mta0mJCXnufRqLfxDa','y29SB3i','DuDyDwu','Ag90icG','DcbPBMO','BguGy3G','sNHgwvG','zw50lwm','BNq6Aw4','yMPfzKy','oMnLBNq','sunovK8','rMLLBgq','rvnqig0','zM92','zJy0','EfrMA0G','mdT9','uLvttKC','yxv0BZS','A2LUza','D2L0y2G','ignHChq','Awr0AdO','BgLNBJO','iey3ica','CM91BMq','q2fTzxi','lNnRlwi','CM1VBMS','y2fTzxi','Bwf5Cg8','AgLSza','D1fSuLK','B2XPzca','zMzZzxq','BYbHihq','BNrLEhq','igLZihu','u0Xrvxe','BMuGAg8','yw5KigG','D3jHCdS','CZPZDge','svzficG','Fdv8n3W','w2fYAwe','zxrmzwy','lsbvBMK','swfAy04','igzVCIa','zhrOoJi','uMfUz2u','E29Wywm','s0jRve4','BI5FCNu','BM5VDca','z2H0oJe','BNuTCM8','icbTzw0','zYbTyxi','w2rHDge','tvvIwwW','r1LzvKC','vernx0C','y2u7','Dgv4Dee','pJWVzgK','ywX0','y2HvwKq','ztTWywq','yMPWwLG','wg1JEgW','zwDPC3q','yxjPys0','A092vMW','CNnVCJO','zMLYzsa','vhfywhK','Ce1tr3G','mcbPzIa','zYbMywK','EcbZB2W','EerQyNa','lc40nsK','BM93','CMDPBI0','EhjgsLG','A2v5q28','Awq9iNm','BgvUz3q','q1vpvLy','pgiGC3q','C3rLCa','C2TbAxK','zfzpvwm','s2LUEMO','thfRvvG','mhGXma','zYbxzwi','zxH0','DwLSzci','ruPduNy','ihbHBMu','CcbHBMq','B250zw4','ign1yMK','nhb4ide','Fdf8mhW','ywT1CMe','CKnVDw4','vvHsz1e','shDLC2q','mhGXoa','ywXSzwq','Aw5WDxq','cNbPDgm','B3a6mti','ywqGzMe','zxjZyc4','Bxm6y2u','ChG7Cge','ztPWCMu','uw51weq','BMfWC2G','ELjjsgS','AwnOigy','DcbUBYa','CMfTzsa','q3bvq0u','kgXVyMi','zKrPBe4','pJiUmhG','yML5r2O','yxmGBM8','BIbtruu','oJyYDMG','BJOG','ldi5lc4','sxPtzhO','rK9utgW','twzbq2m','CMf3Aw4','BguIihm','ifbpuLq','zxHWB3i','CwX6C2i','C3zNpG','mJG7','y29SCW','B25PBNa','BM8GD2e','De9KtMC','vvDnsY4','C3bLzwq','CMf3wwe','Bw4TC2K','vKXZtwi','lwnOzwm','qxrgAxi','ihvUyxy','zsb0Age','zJu7Fq','yMvNAw4','igHVB2S','mhb4idu','qLLwAxK','z0jUqNK','yw1PBhK','ysbNyw0','BM8Gseu','zxjHia','ELfiwMy','B3vUzcW','yMfYzsa','D2HVBgu','CIb0Agu','AK1cugm','AgvHCfu','ELvutLO','rgrXzw0','BgqGB2y','A2v5u28','mtu4mtnWzeflALK','E3bVC2K','ywnLlem','CMfUihK','yxjKlxi','A3vYyv0','Ewf3t2y','lxnWywm','A3HTBw4','CwLSt00','Ee53s0W','CMfUz2u','lNjLC28','Ec1KAxi','BhvLpsi','CM06BM8','veX2vwW','Bg93oMe','Bd0Ii2y','B3i6Cg8','igzSB28','mcbVzIa','ChG7Bwe','BvvpEui','igL0ihm','zhrO','DYW2mJa','wuXZuha','A2v5','CJTZDhi','CMvJDgK','C2L6zq','mJGPo30','ug9ZAxq','CMrLCJO','BwuGAw4','igvHy2G','uxzvBMG','EvjVD3m','owq7Fq','uwHwvKS','EvDXvuK','yxK6zMW','BgLKihi','ywqU','CgfKrw4','A2DYB3u','zxnLihq','z2v0q28','z3zHqNG','Aw1L','B1nOyve','khmPigq','BM8Gtw8','rvnqigi','lwv2zw4','C3LZDgu','Aw5PDgu','zxmGAxq','Aw5Nia','BM8GBgK','zxjYB3i','EdTOzwK','y0HHqvO','tg9VAYS','oYi+u24','zM9UDdO','yxbWBgK','qNLjza','B29RCYa','y2LywMi','yNPmreS','BNnVBge','EwfJu04','uLPqu1i','oJaGmta','ignVBNm','zxnW','AwDUlxm','A2zewwO','twH0uKS','CxfhuKW','yxa8l2i','BgLUzvq','ywi6Ag8','zgTPDa','igHLyxa','Bgu9iMm','yxvRr28','BwLU','ufjMt2y','Ae9zDeO','rLLzswO','zfPlvwm','tMPnD1q','y29WEq','Dw5KoNq','ALDWs0C','AwqTDgu','EenQAMS','zMPzu0O','zYbSB28','B25Nig8','B2rAvvm','C3r5Bgu','EcaXmNa','q0nnEue','CevxCMy','C2XPy2u','uhvlEKK','AgLUDa','o2jHy2S','B2SGEwu','yxrnCW','vxbKyxq','EvvACKS','icaGica','sfrnta','igrPzca','DeXcEve','B25Tzxm','zeXqrxu','zwL0DNa','CMfWoYi','y01YvKC','wMHsvg8','ig90Agu','DMfSDwu','qxnZzw0','Aw1Lr2e','z2fTzvm','C016whu','q29WAwu','nsK7Dhi','C3rYB2S','BufMqvK','jsKGmta','vgfiqxu','oYi+rvm','BgCIihm','zNbZ','BI13Awq','yZKIpNC','rviGvvC','lMrSBa','y29MB3i','yw55ihC','AKnSCKu','A3mUBgu','CMeTC3C','yw1L','o3DPzhq','Bs11AsW','zgTbzvu','vgHLigy','yMeOmJu','wffKywC','zwn0ihC','AKTmEgS','B2jMrG','zMvLDa','q2HPBgq','vMPTyLG','CMDIysG','lcbuyw0','D3jHCha','z2fTzq','B3nPDgK','zwvYBge','Bw4TDge','AgvHCca','DxjHimk3','q1vKwhC','CKT1Egu','BeTKu2S','y2fWDhu','zxa9iJa','Bw9kCe4','oInMn2u','B246y28','if0GywW','m3b4o3C','EvzvALa','y2XLyxi','BeXrDfa','ALj3B0C','icSG','mteUnxa','nNb4o3C','BMC6mca','yxjKlM8','DYWGy28','t2zM','BM8Gz3i','DgnOzxm','zgP6wK8','Axr5','BNnPDgK','BMfNzxi','zcdcTYa','u2vLBK0','DNHJtgW','y2fWC3u','DhLWzq','A3mGD3i','A0PbuMK','CKnVBNq','C2v0sw4','BNqZmG','tgzrD3i','Dte2','icbMywm','yM90Dg8','B2jMqG','BgrPBMC','teLwrsa','CZOYChG','oM9Wywm','igDHBwu','C3bSyxK','DgG6mdS','A2v5vhK','B2rwBxC','igfYztO','Efjjyw8','rxbzv0O','iIbZDhi','BhvLica','tfjHy1O','ANfSEuG','ENDMA0S','ihjLCg8','nxb4o30','A3vrs24','CMrLCI0','CdO4ChG','twj3y1O','EfHktwi','BwvHBG','AwrLBNq','zYaVigO','BgLKzxi','B25TB3u','z2v0rMW','B0Hku2C','t1zire8','uMvZzxq','Fdb8mG','qu1pvgq','wNjuvK8','zMfPBgu','DJiTDge','igjVDhm','ztPUB24','C2v0ida','terJEfK','Ag9ZDa','Bw4TC3u','pc9IpG','zNjVBsa','y2SIpJW','z2v0sxq','lJq1ktS','EdTMB24','rgvowxe','EdTIB3i','B3bLCNq','CMvWBge','A3jyB1a','yw5NBgu','r05eue4','DhLsAhC','DhnPzgu','AgLKpq','B2f0nJq','A2TmvMW','Cd0Imc4','psiXlJu','mNWZFdu','Cc1SzW','lxjHzgK','Cg9YDge','B206nNa','Cg9ZAxq','vuDor1u','BwLUkdu','ntuSlJa','lNnRlwW','zfDjDKO','vNDxDLu','iJ5gosa','C2vSzwm','uLLvufC','yNrTCeC','BgvHCG','CxjSwM4','m3b4o2y','CZPUB24','DMfYkc0','B3bLBIa','lJi1ktS','qMXytLm','iNnUyxa','DdOXmxa','DxjH','tMf3vuC','C3rLBMu','EhL6','tw90CLa','nhvMtxneuW','yuPQs1O','vM1IAxe','whnhAhi','z2v0sw4','mJzWEdS','tvD4Cw0','Axb0ige','lde3nYW','zxnVBhy','DgvTCZO','ohb4o3a','zgvYoJe','AxrOie0','vM1KCe8','BenjDfC','lwHPBNq','i2y3zwu','B250lxm','CwTVueO','rJKGDhC','z2H0oJC','oNjNyMe','zwz0oJe','DxjHDgu','yMfOCMS','y3fXse8','nNb4o2i','shblBvi','zxqUia','CKDODM4','icb5yxC','yw1PBMC','lIbozwu','Ag9Ksw4','BMCGB24','iNDPzhq','mduPo30','y29TyMe','yxj7D2K','sgPgDNq','DwLABeO','uKHwAw8','C3bHBG','s3vVwM8','CgvYBw8','zdTWBge','tePVwg8','BwuUCMu','suHrALK','CMvMDxm','vxzKzwe','AKHSBKe','Dw50','CMvZB2W','C1vZC1e','Bw91C2u','wMP6EgW','Dgv4Dge','re13rxG','C2fUzq','Cgv0ywW','zwn0Aw8','C2L6ztO','DgvYo2y','EMnXBLi','A2XHqNC','DhrVBJ4','yMXVy2S','y1HJz0u','BNrPyxq','uLPPvKG','mcu7','DMLLDYa','AhvK','zfzkrLG','B0nOBuq','ALv6rKW','EcbYz2i','mca0ChG','wNLYs3K','z2jHkdi','tvr6Dw4','ChG7Agu','oY13zwi','odbWEdS','BMvQB2K','ihDYAxq','zxqSig8','Dfnryum','C3LUyW','rhPer1G','q2XPCgi','wejcB28','l3nWyw4','vw5PDhK','ihDOAwm','x19tquS','yxiTz3i','nZCSlJu','DgG6mJG','y2fTia','C28GAxq','ztT3Awq','zdDHotK','EdTHBgK','wvDrBxi','y3fxrwi','Bcb1Cgq','AeTxquW','Ad0Ims4','4Ocuihr3BW','Ewf3','zu9tC1e','vKfm','Cevxze4','DMf1tgK','ic0Gy2e','vM9MDMK','rJKPpc8','z2LUoJa','Dg91y2G','lde1nYW','Exzst2i','svLVsxq','BNq4','wLbOAMm','BMCUcG','CMvMAxG','r1rgwLG','B25Jzsa','Bgu7zMK','BKXACMS','BgLZDa','sw9urMC','nxm0idi','DcbZCgu','CMf3','ifnxlva','Ag9Ry1K','Aw50E2q','oJeYChG','BYb0Agu','B2DVlxm','BLj1BNq','zwT2vLK','q0XOA2K','shPYthO','zM8Qksa','Dw1Uo2C','wuH3qwG','EKjjrgy','yMvS','kde4ChG','BMH1BNC','Bwf4lxC','mhW3FdG','tuHusMO','ltiUns0','zcbPCYa','vfb2qxu','EvrHCa','zhzpA2y','ihrOAw4','DgLHBh0','y29UDhi','mcbMAwu','yxjTzwq','tM8GugG','y29Uy2e','sNDTCMm','igXPBMu','iMvZCci','icbVyMO','tuSGq08','vxjPqKq','lxDLAwC','DMnAzvO','CJOXChG','zwfKEsa','icaGia','v3vPq2K','zwfKE2q','BIb0Agu','vK1QANG','psjYB3u','mNb4icm','Dg9tDhi','EKfiwNO','EdTVDMu','BM90zq','BuLuu0u','yxmSBw8','yKz2v3C','DMvYE2m','thPVzfm','BNq7yM8','CYb3zxi','lt4GDM8','y2GGDgG','qxv0DhK','Fdb8mxW','AwvK','ywXSvMu','tw9KDwW','B3vUzci','rLfAvgG','BMvJyxa','igzPzwW','CxL3ruq','BvvTywO','q2nAteK','ieeGAg8','q291BNq','zuXguNa','CIiGC3q','Dg9Nz2W','ChGGC28','rvfItu8','wgrVteS','Ec1ZAge','CMTqBge','yMfLufe','zKPHC2i','BgrHv1K','EIaOsw4','u25HChm','DenVBg8','CgPmyK0','vuXswM8','DMDSBwy','BNn0yw4','pgLUChu','o2jVCMq','lgnHBgm','yxjLBNq','AwvKige','igfUzca','BJPJzw4','wfDxuNG','CKXPC3q','ChG7yMe','qvzqzui','zw5HyMW','BhK6Aw4','wNLcAum','mhb4oW','nhW2Fde','vKLt','lJv6iIa','B3bHy2K','uwPqr3a','oJe7Dhi','owm5o20','CNqGEwu','zsb3ywW','Dxm6nNa','r0vMuuW','BJ8PoIa','vgv4Da','CvrMs0m','DK54ANK','icHZB3u','zw5Jzsa','psjJB2W','zMfJDg8','CvjWyLC','C2vSzwe','DgXL','DhLSzt0','u2vLBG','B25LoW','EKnRug8','sMXcreS','z2H0oJG','lNnRlw0','nYWUnsK','DMvhyw0','idHWEdS','zxnJ','nZH2AdS','CZPJzw4','qM5yyue','ignVCNi','y2XPCgi','D3jPDgu','mdT0B3a','sgvPz2G','oJOTD2u','oc00lJu','sLrjr1e','zxi7iJ4','ohb4ide','mxW1Fdm','CMvKihK','lJa0ktS','BNrLCI0','Fdf8nxW','DNbHsKS','C3vYDMu','BNvTyMu','DxjHpc8','qxbWBgK','B3j04OcM','u1j1Dum','A3TOzwK','B011Ceq','DgvYiJ4','x19ZywS','qNDlug8','z3jHyMi','yNL0zu8','rgLgD2y','B2jQzwm','B3C6Aw4','rJKU','Ewf3qxq','BNqTC2K','wxrTsu0','zxG7zMW','yM90q28','v29YBgq','yw5Nzsi','C29SDxq','ChjLDMu','Aw9UoMy','B2jM','r0nPrKW','EhfitKq','CgX1z2K','zxvRsfG','zw50','ChGGmZa','Cg9ZDe0','Bwj7lxC','t1HVyKW','ihvPlw0','CJT3Awq','ignVCgK','zwXHChm','yxjNAw4','CIb5B3u','nZq4mZa','ys1ZDW','BwuOkq','zuvSzw0','zw1WDhK','DfDPzhq','uwzYvxa','yxbWBhK','BMv2zxi','BuDVy3q','tLrTzgq','Ahq6mJq','lxnWzwu','CMfUzg8','rNPlDNq','DMGGlsa','BNrezwy','EwvVCNe','B3j5','zMykrJG','i2jKytK','EgDzuwm','zunTy3m','jtTIywm','mI45lJG','tfP4AwS','C2fUzsa','shLtqvu','q1zKDfO','DxDTAW','C2v0ica','y3vTA2e','B25NlG','BgqGAxm','o2DHCdO','wLndwgS','oIiIo3a','ChqRmhG','EfrkrLu','C2fNzq','C291CMm','AxHLzdS','zxG6mJe','yZfKo2m','CgfUzwW','zcbYz2i','CMLNAhq','q3LUseO','DJiTy3m','Cw5mCu8','Cg9Zqxq','idrWEca','y3jLyxq','zw1LBNq','ig9Mihy','vKTkuNq','DgvHBq','yxbP','A3D4zgu','ihnRAwW','ywrKCMu','CLLrzLe','lxbHBMu','ldeWnYW','z3vkuNq','B2yGDMK','vgHLigC','CZOXmha','tM90igq','mNb4o2i','ztT9','DxjPBMC','y1n0ze4','AwjezKu','BNrYB2W','uKLPq2G','AwDPBMe','zhjVCc0','zgf0yxm','y3nZvgu','z2v0rwW','DxvxD3K','EvbmDgq','Dhj1zsi','EgvZlIa','BgvYigG','ELLOwM0','zvn0EwW','ywqGzNi','oYi+tM8','s2jOuxu','C29SAwq','CgHVDg8','C3rHBMm','yY0XlJu','u2fVsxC','CMeTzxm','u2rvwwC','B3qGD2K','D2vQu0m','C29SDMu','lwe9iG','zMLSBa','ztOXnha','z2XVyMe','ifrOzsa','q0fAyuu','uMPpvue','DevtyLy','y2vUDgu','BNrLBNq','B25ZB2W','CMvWB3i','igjVDgG','DgX7zgK','vvDnsYa','B3r7ywW','DgLVBJO','ihDHCYa','CNvUBMK','BI1PDgu','CMvMzxi','z25HDhu','imk3ia','zgfY','DxrVo30','oJi1ChG','ntC3nZe3n2DOBgnbtW','yNvPBgq','AgfIBgu','ihbHC3m','twHSrLC','zhvYAw4','uvLtshu','B24+','DxnLCI0','D0jhvxC','nIiGC3q','BwfUEq','qxzxrwq','Eca4ChG','oMjSDxi','DxDTAYa','nhWYFdK','BLzRuKu','zw1VCNK','mhGXqZ0','BvrLy2C','qvbvoca','DMuGB2i','ChG7B3a','igTPBMq','q1P2zey','m3WWFdi','AguGCMe','mNb4o3a','oNbYzs0','s2rNvNi','lNnRlwm','mcaXChG','B1LgDK8','C2HMA2y','z29wAKG','nNW3Fdq','Bw92zvq','s3zss0K','CNjVCG','u3rYAw4','AMvJDhm','B2TLlwW','A3mG','B3zLCMy','zwfKywi','BMH0BNe','t2DAA3i','AMnfsuS','oImXnta','B3DUkq','C2STy3q','n2vLzJu','BgLUzvC','BgvJDdO','zgjhsvm','BY1MAwW','zxzLCNK','wxb5see','yxv0BW','AwP5Cui','zw5NDgG','zgXXq3C','CNj7y28','uhf6A00','iIbZDhK','CJOWo2i','CdO0ChG','rKDis3i','x2DHBwu','suXftgK','BIG1mNy','C3CYlwy','DLPbr3O','BNmU','mJqYlc4','mNWWFdm','vvLqvwG','oJHWEdS','D2LUzg8','uNvNCvC','CM9WywC','DhjHBNm','Dw5PDhK','z3jVDw4','icbOB28','zM9YBq','BNnPC3q','vNLUvvi','AguGC2K','AdOZmNa','C3bYAw4','vvzOs0K','DdmY','BIbYzwW','ywPxEM0','D0rbAK4','m3WYFdq','v0fswI0','zKPTB2u','yw4+','AfnJCMK','idaGmJq','C3nPBMC','C2LUz2W','EgvKsNa','DvDXtLa','tIbIEsa','Awq7CgW','twjftgy','zZOXmha','Dg9gAxG','o2fSAwC','pc9ZCge','BwLUv2K','psjIywm','ug1Qu3a','igfWCgW','y2TNCM8','CvfPAvO','t0jdu2K','Aw5Uzxi','ncK7yM8','ztOXmxa','iJ5VCgu','CgfJzsW','zgrPBMC','CI10Ahu','zxiTCMe','oMf1Dg8','CI1Yywq','zgL2','vNHmD2W','yNvPBhq','DgHLigm','y29UDgu','BMnLC1i','zw1Pzxm','ExbLpsi','DgHLiha','CMfWoNC','ztTZDhi','CMvKia','zfbUEeC','yxnZAwy','Fdn8mxW','uvvIqLG','Dw5PDa','rJKGihm','AxmGBM8','tKTrwuu','E2zVBNq','B3i6iZG','BgfZDem','mhGYna','u3nOteW','C2STC2W','BfLlCuu','C2fRDxi','ldi1nsW','C21uExa','EdPUB24','nYWUmZu','n3b4o3a','DgXLCW','Agv4','B3jKzxi','Bw4TAa','DgHLBG','zwrnCW','DZiTyM8','ntTWB2K','B2TTCfq','BMrVDY4','CKPeugS','A1jvA2m','Edjfna','ldi0mIW','BM9puLu','mtbWEdS','CMqTDgK','CML0Dgu','mNWZFdq','iZrMogy','EwDSCgG','Bwf4lwG','Dxm6oha','zxmGDgG','B24GAwq','DxnPyMW','zxj0Eq','B3i6CMC','ihzPzxC','A2DgEe4','CMPUyMy','quz0zKu','A0fNvMq','BMu7Cg8','uePfwgq','mxb4idy','CNncsfK','BgW+','ntbWEcW','DhK6lJq','DxjLzey','sMz2uha','mYWXmdy','ueXbwuu','Affvzhu','Bw4Ty28','zwn0Aw4','sfjtu2y','Dcb0Agu','z2v0vwK','zeLtwei','zwP6wMq','mxWYFda','DdPZDge','C1jpz0G','zhrOoJm','uMfKyxi','AvfiwLO','A2v5zg8','ocWYndi','mtrWEdS','CMvHy2G','zwqGDgG','EMu6mte','BM9Uzq','EMu6mta','ywiUywm','CwLLEeK','zsb1C2u','wYbHBMq','CMf3ugK','DMvKia','t2vlvNm','C3jyuNy','yxr1CMu','D2vPz2G','zdTYAwC','ChG7CMK','u0TjteW','DerHDge','AxbIB2e','mtfWEdS','vKHpug0','yMrHowm','B3r0B20','mNb4idC','Bg9N','Dw5Kic4','CNq7ywW','mJq2ldi','otLWEdS','B3rO','ywjSzsa','BwXACNK','qM94zxm','nwmWidm','y3HhsMW','tg9VAW','zMXLEc0','yxjKlxq','zt0Iy28','yvnorwO','mNm7Cg8','psjTBI0','DdPTAw4','zMLLza','DgfNtwe','BgfIzwW','Dg9WoI0','mNb4idG','seLUwKu','igrHDge','wwv5A2G','ihbHDgm','yNv0Dg8','vKzXAMq','yxG9iJu','B3vYy2u','BJPJB2W','i2zMyJm','CMvWzwe','oM5VBMu','y2XVC2u','Aw5ZDgu','zhmGB24','CYb1BNi','s2f2qLG','ihnRAxa','DxjLzca','ign5psi','mNb4o3O','C2rVr3m','icdcTYaG','zMy8l2i','z0zkruC','yxjJ','v2XzyKG','EdTMAwW','Dxm6nta','nsWUmdG','C25XDha','igHLEd0','y21K','Bg9YoNi','sLbztfO','kdeWmhy','DdOG','yxjN','nsK7yM8','BMfIBgu','yNL0zuW','EY13zwi','B1Dvs2m','nhb4idK','yxK6z3i','C25HChm','DtmY','yxvSDa','BNnWyxi','DgeTyt0','oJe3ChG','yMPcuLe','zwyYo2y','zxbSywm','kdiXlde','imk3igzV','CgfeC3K','mJKWANvRv1v3','DgL0Bgu','icaO','mhb4o2y','zw1ZoMm','AuPZrLO','mhWYFdm','CMvNAxm','v2fSAYa','ywX7zM8','Bwf4psi','vgXdtw0','zxfYDe0','cLSGif0','EgDquvm','iMzVBgq','EvHfCMW','BgW6Aw4','zwHls3C','qNrStvi','Bw9YEvq','zcb3yxm','zu9uDhi','BwvTyMu','BMq6CMC','owq7y28','nIWYmZG','s25tDxe','DeHLywW','mtjWEca','C2STBwq','D2r2r3e','zwXLy3q','DhjVA2u','DYGWida','D0fVuLG','zMXLEdO','surfige','BMjezg4','B3rLE2y','A0fKufO','AwvYkc4','Dhbsz1O','EdTMBgu','ig5VDca','sw5KzxG','D2H5','Dg9YqwW','B2SGzMK','EwXXEum','y0LjD0W','re9nq28','BfbTyNG','Aw5cyw4','B2TLpsi','Bw47Fq','B25Lige','BgvKoIa','zgf5A1C','iNnWiIa','Cu9NANC','4Psa4Psaia','txHlrxK','sgDYBgW','lxnOywq','BMfTzq','ys1ZDY0','z2LMwwq','B24Gzge','iZjHmgy','DgG6mZq','ig9MzG','BML0Awe','icaXlIa','C2nTDhu','thbnu0u','Esbku08','uNvUDgK','Axq7Fq','DMvYE2y','rMHfsu0','Bgu9iMq','Ae9wDNi','zgLUzZO','mhG3yW','C2L0Aw8','AguGBgK','zZO0ChG','zwvSru4','z2vysKW','v1P6weO','BxbQv1C','Dg87iJ4','BgrZlIa','zgLMzG','idmWChG','yuzYB20','DcaWida','CgfYzw4','B3jYzwm','Cwr2q20','idzWEca','B3rYB2W','D1jNq0C','rxLnteW','BMnLigy','A3vTqxC','B3j0lGO','C3CYlwG','CM1jEei','lwXLzNq','nNWY','CgXPzxi','BNr4zNq','yMfUzc4','Cgu9iNi','lZ48l3m','tgPzvLC','ruXUB2y','BMCGlYa','lxDLyMS','o21PBI0','EsbMywK','pt09u0e','BLr5Cgu','B3b7zgK','uKvny0S','AxvZoJe','BMC6nNa','t3HVA1K','yMTPDc0','AxnWBge','AdOWo30','yMX5lMK','wNvgA3m','Ahb5zeK','BMnL','B2HOsK8','CMuG','Bwvhyw0','mJrWEdS','lNnRlxi','oInMnMu','zxLL','Agnmufi','qK9HsNu','B2LUDgu','Bw4TCge','zwfJAge','lM1Ulxm','nNWZFdq','BgXLzca','idaGmca','zYbMB3i','yMfZzq','Axr5ic4','yw5ZCge','BNfNAMC','zg9JDw0','q0TlyxC','zciVpG','zenOAwW','qu5eihq','CMfKAxu','DgLUzYa','zdTTyxi','zw50tgK','lGOkswy','r1bfsLi','ywn0','mIaXmK0','zw50o2i','vvjJzMi','igfYzsa','tLbdx0m','wNf0qMq','uvjMEwS','rJGGlYa','Ew1wq3u','t2XdEe0','ys1Hpsi','oJaGmca','DfvnqxG','CNvUCYa','yNL0zxm','CNbzqwO','y2XPzw4','zMfSC2u','y3rPB24','q3b6Ava','vMfezvq','tg9VAYa','CM93CW','Axr5oI4','otK7Bwe','DxnLtg8','B25NE2m','BgfZDeu','sfveigq','tMzSz1u','reHizg0','EeTLCuW','nhWXFdm','BMCGzM8','C3jWzwe','kduWmha','AfrPDg4','zM9UDa','igLZigy','ww1Zuxq','u0DyBMe','DgnOlca','zYb3Agu','igLKpsi','z3P2uLy','ihbYB3y','DY5vBMK','zxnZywC','mJrWEa','Ag90','zK1AEw4','rufTrhO','zJmY','oJfWEca','t2PAELq','yMvSB3C','v0jHsfC'];_0x2613=function(){return _0x3914c3;};return _0x2613();}
