// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.2.0
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

function _0x3650(){var _0x8cfb48=['BMCUcG','lwjVDhq','CIb5B3u','Ag9VA3m','CMH1u1O','y3r1tgy','C2L6zq','oJeYmha','igL0igK','z2v0sw4','yMfJA2C','CMXHyMu','DcbUBYa','yNvMzMu','DeDtzuS','rgLqA3G','B250zw4','CMDIysG','Ate2','C3vYDMu','zxG7zMW','DgvZDa','ywDHAw4','B3vYy2u','zw5LBxK','zNLYA24','Dw1WAw4','tLfdu3C','rufjB1K','u25TCuq','y0vhwKC','z2v0q2W','vxvHt0W','s0fhsKm','zw50rwW','ExzyEu0','zcb0Agu','AgnOrwi','rw93s3u','z2v0vwK','ohW0FdC','CYbVCNa','C2v0','Cg9ZDe0','B2f0mZi','rMfnwvK','sNLHDLe','z3j3A3e','BwfYz2K','vevAAxC','zLnqwuS','C28GDgG','su1irvi','DcbPzd0','yxnZtMe','B2SGzMK','Aw5MBW','C2vSzwm','oYi+tM8','igLUC3q','D2DeugG','CML0Dgu','DgfN','AMnYBxG','iMjHy2S','rMrnsKm','uKfhDLy','z3jVDw4','CMuk','BwjJB1C','qKnisuC','ndmSmtC','C1zJs1e','wfnlAKS','CJOJzJC','rNHJueW','CKXPC3q','Dgv4Dge','mYWXnZC','Dte2','yxbWBgK','DcbPBMO','ywXPz24','rw5LBxK','BIbHihi','iJ54pc8','BgvYigG','BMnLv3i','B2jMqG','zwHdvKO','BLLbrLO','BNq7yM8','iJeIig0','zgLMzG','ywn0','AxPgtKu','zw5NDgG','B3j0lGO','B25Tzxm','C2fRDxi','yxrHihi','BuP2q1q','yxrLigy','BMnLC1i','x19tquS','BfDHCNO','icaO','B3rPv0i','Bg9dAge','t0vZtfm','sg9VA3m','lt4GDM8','lGOk','DurkCM8','CgLUzYa','qxbAAM4','wwDzvey','z2LUigC','C3rHBMm','lL9Nyw0','zsbPBNm','DvP6uhG','zMfRzq','Bw9YEvq','ufHUv2C','BM9Uzq','igfYBwu','B2jMsq','zxmGBM8','Bxm6y2u','yxjLige','zwDpz3O','BcbKAxm','x3j1BNq','q1HLwge','AKntDNi','BgfIzwW','D192mG','zEkaPJWVCW','BwvUDc0','igfYBwK','EcaXmNa','q29WAwu','AhjLzG','CxDzruO','CMfUihK','uMvHC28','yKXJrg0','quvsywy','BgqGAxm','DJiTy3m','yw55ihC','AKPOuNK','rNfvEKK','BKD5Eeu','ywqGzMe','DfDRC1e','CNvUBMK','BhvTBJS','CMfTzsa','i2jKytK','kZb4','C2fUzq','ywz0zxi','zw5LBwK','Aw5KzxG','4Psa4Psaia','qLDrvve','AwnOigy','BNq4','y2fSlMq','DgHYs1m','qM90','we5zuNq','C3nPBMC','A2v5zg8','CMvIDwK','B206mxa','EKnuzNa','tLzzveW','Aw50Aw4','Aw1L','Cuv0ENu','zxH0','zMzkuKi','AwLICKG','sernu28','uefpDxq','BwvHBNm','y3Phv3m','vvvWtwm','ignVBNm','BhqGC2K','odiYAvb3AfvK','BMfTzq','uNvUDgK','ig9Uy2u','tMPlsKS','BLDZyKu','vgHLiha','mxb4ihm','BcbHz2e','B2XPzca','lNjLC28','AwWYq3a','lK1Vzhu','vMnRr2S','Dc5KBgW','ChvZAa','uhP1C1C','t29cuhe','tNbutxi','rxHTEva','DdTIB3i','lxGIihm','C28GAg8','igjSB2m','A2vKihu','sg5qvMG','DgHPBMC','ChbLCIa','qM90Aca','ywqU','iZjHmgy','BNz1BNO','B3i6i2y','zgvYlxi','u1vMv3a','zuvSzw0','yxbP','uwHREeG','y29WEq','Bev0u1O','CMvJDgK','icaHia','Bez1BMm','x19ZywS','CMvKige','CM9SBgu','y3nZvgu','uLzls2q','oNrYyw4','ywn0B3i','z09YzxO','phnWyw4','zMfPBgu','ihbHz2u','DMvhyw0','zxj0Eq','Ahq6nZa','igrPzca','DLHqvwm','Dxm6n3a','CJPWB2K','mtaWnJbVAMDMANa','DerHDge','A3vYyv0','Aw9U','Awq9iNm','BMCGB24','BM90igK','nsWXndm','Dg9WoJe','idHWEdS','mZC1ndG5mfbKvuv6qq','DhjHBNm','Efrbs1O','BMD0AcW','lxDLAwC','uMvZB2W','nhb4ide','r0LdwLO','vKPIveq','AwvK','qLjMt0u','B3vUzdO','sKjdv0O','yMfYzsa','Aw50iIa','AgvSBg8','vMLtCLu','o2zVBNq','zcbKAwe','ifnRAwW','CgfYzw4','BM9Yzwq','EwvZ','BNnWyxi','DgLUzYa','DgHLBG','Cvznt3K','n2e2ntG','Ag90','BxbICuK','Cg9Zqxq','q291BNq','s0HRAgO','CNPzDeu','BNrPBwu','lwnVChK','wfLYC0S','yw4+','qNLjza','ruDMq0K','AguGD3i','nYWUnsK','uKr5ANC','yvDvyMC','weD4ALm','BNrLBNq','D2fSA2K','DgHLiha','AwrLBNq','BNrYB2W','zgTPDc4','swnlyu4','zgf0zsa','igLKpsi','mtf8mtm','t0zSre0','DMfS','Fdn8na','ExrLCW','yvfmwKG','sMDhwLe','zvbYB3a','ihjLCg8','wevKqw4','BNq6Aw4','mtq3mfLpCMjSDW','Cg9YDge','DNDNrfm','EwXLpsi','DhrVBJ4','DcaOC28','r3bsBgG','Ag9ZDa','BhvLpsi','B2j2BMS','i3n3mI0','C25HCa','rJKGDhC','ieeGAg8','BgzOsvO','zJfIo2i','CM9ZCY0','BhHvBuK','Ag90icG','ywSTD28','DvDWAMi','BwvZC2e','vw5PDhK','4Ocuihr3BW','tM8GCMu','zxjnC2u','EI51C2u','zwqGB2y','ihnPz24','B29M','Ag9ZDg4','z2v0rMW','CMvTB3y','CgX1z2K','D3zUEwK','zxbSywm','sfrnta','y05vwKW','BfPttvu','q2zuqMK','zsb1C2u','mcaWige','v19F','DdOG','ks4G','zYbZy3i','ig9UBhK','qu5pveG','ALLjv1O','D2fZBvq','Ehnqvxe','qKnTzxq','tvrdDMm','Bgu9iMq','zxG7z2e','vvDnsY4','C3rLBMu','BuvVvw0','zxHPC3q','DMvYBg8','zxnZywC','Dg9ju08','pt09u0e','mJmZndG5oxnHrwnNqG','AgfUzwq','zg9JDw0','vuriyvy','z2v0rwW','ihbHDgm','r0DFr2e','AgL0CW','i2zMyJm','iIbZDgu','z0v5v28','Fdb8nhW','B2f0nJq','CgvJDhm','igL0ige','uMvSB2e','u2HkBMe','AuXHqMO','Dg9tDhi','runbtgK','ig1PBJ0','oJyYDMG','igDHBwu','A2v5','mtjWEdS','BJ8PoIa','zw1WDhK','qxbWBgK','AgvHCfu','AgvHza','rxHWB3i','igHLyxa','wuzryNG','yxbWzxi','ztOXmxa','Fdj8nNW','CI5QCYa','uxPfthy','ys5ZA2K','AwzLig8','vKX6r3G','wuvzBgq','DxbKyxq','zwqGysa','yw1L','u2jNvuW','CgfKrw4','AuDAu00','qLvtqNe','mtbWEdS','u29Iq3e','sYbZy3i','DgvYzwq','tvbnsxK','uxD5B2W','yMX5lum','Dhvstw4','mNb4o2i','wLjwAhe','Aw9UoMy','reLiwg0','C3CYlwy','ztTTyxi','y3rZimk3','rgrnCxm','AwPOqLy','C25HChm','y2XPCgi','AxmGyNu','rgLMzIa','teHMs0W','uvPRBfq','zwqGyNu','t2zMC2u','ignHChq','CMvWB3i','zxmGDgG','EtPUB24','s1LYsw8','zgHRquu','Dg93AgS','z2LMEq','yLjJzuq','BgfZDfC','sgXVB3y','uxHZuxy','DxjHvge','pc9WCMu','ic0+ia','zNvUy3q','rxbJAeu','CMeTC3C','Cgvfy00','BwuOkq','CNnVCJO','CxvLCNK','yxDKyMm','CMvH','mhW0Fdu','mtjWEc8','y3jLyxq','lxyYE2e','y3vYC28','svr4B0i','swrVtvO','DMvK','BwuUx2C','C3bSAxq','ig9Yihq','CI5KBgW','s0P1vNm','mhWXFdi','yLzyBhe','Fdj8mhW','DMvKpq','DhLWzum','tJWVyNu','q2f4A2e','yxbWBhK','Agv4','Dg9gAxG','lYbZChi','DMuGB2i','u2vSzwm','C21uExa','txbks1y','ihbYB3y','BNqZmG','AuXuB0y','yw5KigG','ig9MzG','ufKGve8','EsbMywK','Aw1Lr2e','idaGyxu','D2LUzg8','iJ5gosa','icaGica','C3CYlwi','kdi1nsW','DgHLigW','khrOAxm','wgzjAu4','B3nLCY4','tgDiDK8','ogrizNz0tG','CMfJDgu','zw50igK','ANbqrwS','tw9KDwW','C2vSzIa','EMjorue','zYaVigO','D2HPDgu','AguGAg8','vgfTCgu','AgfZtw8','BvnWCeu','BMnLCW','ic0Gy2e','BMTLEsa','BgvwEgq','uhnezxC','DMfSDwu','DMvYC2K','BLj1BNq','A3mUBgu','ihn0yxK','zw50lwm','BIbtruu','yMeOmJu','BI1PDgu','rJKPpc8','oImXnta','Cxnwsgm','ywjSzsa','BhDHCNO','CgvKigi','Ce9dsKO','mtqZlde','vxbKyxq','lcbnzxq','ufvIu2u','swHfENm','lc40ktS','D1jIqKW','B21Tyw4','Ag9VAW','wKLgz3m','zxjYB3i','q0HAB1y','Ag9Ksw4','zdDHotK','s0vnswq','rMvWAu4','reTryNe','wwvpv20','zxjHDgu','zJmY','D3jHCha','DcbTyxq','DgHLigC','icaGDMe','B3foDwC','BI5FCNu','CM91BMq','q25Irwy','DwviBMi','y29Kzq','Bgu9iMm','CMuGkhi','v2vItw8','CMvKia','BhvLica','zYbZDxm','BgrPBMC','DMvKia','C3rHCNq','BIbuyw0','zMzZzxq','yKL6A0q','tg9Hzgu','mNWX','C3bLzwq','Eevzsuu','zwXVywq','A2v5qxq','z2fTzq','Cg9YDca','D2XqEMC','y2fWDhu','Bcb1Cgq','ze50yKC','wKL0wMm','ktTJB2W','FdL8nxW','igzHA2u','Cgu9iNi','ywn0Axy','otyWnxbSCuvTsW','BwuGAw4','CI1Yywq','zMLSDgu','C2P0r1q','igfYzsa','pgiGC3q','BNvTyMu','EKDVCxu','qLn3yMu','zxnWyxC','ELrwBMO','ihnPBMm','mZvPDvbWCeC','CNqGEwu','Dw5UAw4','z0P4veG','DNvHtKC','zu5YA2G','Dc1ZAxO','nhb4idK','lMrSBa','DxjLzca','l3nWyw4','qvbvoca','zMfJDg8','DdmY','Bgv4oJa','n3b4o3a','BwuUy3i','Ag5Lthm','ntuSmtq','yMX5lMK','ignVCgK','vuDdseO','ktTIB3i','ywrKrxy','B3vUzcW','B2TZihi','ndu3odjOChjzvuC','icaGy28','FdH8mG','C093sNa','C3rYAw4','pt09','BwfYA3m','lde3nYW','igHLEd0','Bgu9iMi','yxvSDa','BcWk','reres0C','yw1Ligy','zsbVyMO','BMnLigy','ChGGC28','AxjLuhi','igzVCIa','lxDYyxa','BgvKoIa','A2TAAwS','zvndBw0','ywjSzwq','yNvPBgq','y2XVC2u','AMHYz1u','sMDgtg4','DtmY','B3zLCMy','y2GUC3K','BMLMAuy','rgfuvNi','v2vHCg8','ihnRAwW','v0zzCfy','v253B1q','sLvRDgS','zwrnCW','BhHKB1y','Fde0FdC','zsbYzxa','z25HDhu','zLbpsxC','igvUzca','B2fKzwq','B2jM','zwDPC3q','lwjYzwe','ueziB3a','teLwrsa','zxiTCMe','t3jxyvu','yxmGBM8','zZO0ChG','vM14yLi','zYbIBgK','shvvrfG','zxmGB2y','zsb3ywW','z2fTzu0','AwnOlJW','C2v0ica','zwn0ihC','BgfZDeu','B24GAwq','CMuG','CIiGDhK','DNmGC24','Dg9W','jwnBC2e','nYWUmZu','DfvNtfi','wLjtsxy','BK1HBMe','yxjTzwq','zxnVBhy','vgHPCYa','iokaLcbUBW','quDdr3K','zffSBeK','ChrY','uMvNAxm','ugD6B1C','zJu7yM8','y2fTzxi','tgvyC2q','AxrWAeC','rvfhA0C','v3jHCha','Dgf0Dxm','CMvWBge','EdTHy2m','B2jMrG','vMXkBe4','A2v5vhK','ELrZDKS','nxW0','ig9IAMu','oJrWEca','ChG7y3u','uevArhq','m3W3Fdi','igjVDgG','t3PgwLi','zwLNAhq','AguGB2W','y2uSihm','CgXHEwu','yZKIpNC','mhb4o2y','ihjLywm','AxHLzdS','zvzdrNK','AwnLihC','t0nsDvi','qxLrALC','AtmY','pc9IpG','zwvMntS','BLfQteC','Aw1Lsxm','D3jPDgu','Bwf4','Axb0ige','Chr1CMu','B3nWywm','nJTMB24','pZWVC3a','zw4Gyw4','B2XLig4','DMjvr2K','Dw5PDhK','C0XrCMm','sw5ZDge','C2v0sw4','Dw5Kzwy','AuPorfm','zxqUia','AgLSzsa','DY5vBMK','y29SB3i','D2fYBG','EsbHigq','C29Syxm','zwvKzwq','D2jKvfu','B25Jzsa','o3DVCMq','AwXLzcW','BxrzBwC','ChjLDMu','iJ5ZywS','DgfSBgK','q21uvvK','reD3DgO','B3vUDa','tLvswMu','icaZlIa','ywrKCMu','yNv0Dg8','BwvTB3i','AxmGD2G','DhLWzq','yxf4v2i','sLDhvfi','icaYlIa','CKnVBNq','icaGia','D2fYBMK','CuXuDK4','ChG7Cge','DgTVueu','BwHbrKy','BgrZlIa','BI5OB28','ihjNyMe','ExbLCW','x2DHBwu','AxjZDca','z2fTzvm','BIbYzwW','Aw5Lza','CMrLCJO','CNnJCMK','AM9KBhy','BMDZ','zgf0zsG','ruzuDuq','C2v0rMW','EvjVD3m','CMf3','rxnJzNe','EevgwuS','igLZihi','r3nwz2C','Axr5','yNL0zuW','BwLU','zgf0yq','zw50tgK','BNn0yw4','sfLwtwu','ksWGC28','AMvJDhm','ywXSzwq','AxrPywW','ihbHC3m','CMvSyxK','Bgv4lxC','mdTMB24','sNfzrfe','i2y3zwu','Axb0igK','B3j5','nYWUncK','yxK6zMW','zYbxzwi','v0fswI0','Bwv0ywq','ifnxlva','AgvHCei','BgXLzca','yM9VBgu','vvjbx1m','BNrPyxq','ywLSzwq','BM90ihi','DwvxCMe','oInMn2u','B2fYza','pc9KAxy','Bwf4lwG','psjWywq','B2XVCJO','q2LtCMO','o2jVCMq','B3jPz2K','vxzkBfO','BMqU','EMHishi','DxDTAYa','we9dwMO','yMDYsum','BM8GCMu','ywLUAw4','yw5Nzsi','C3bHCMu','zNndtuO','BhzLr2e','z2XVyMe','CMq7zM8','CgfUpG','zenOAwW','A2zmyxO','BIbPzNi','DgLHDgu','lxnUyxa','sfbsAuO','B25JBgK','D2LXu3K','oJfWEca','BgvUz3q','zgLZCgW','A2v5u28','vff0BM4','y2vKigi','zuf0rMK','uefuyMO','uIbbq1q','mJu1lde','ywnRz3i','Aw50BYa','sePbu00','mJG5nty1nNvZv2HHtG','yMfZzq','zvrdDem','ifbpuLq','DxjH','CNvUDgK','v2HZDKK','CNjVCG','zgf0yxm','tM90tM4','CMvZB2W','u3bLzwq','C3bHy2u','zgL1CZO','CuPjz00','Bwvnyw4','igj1Dca','CgvYBw8','yNvPBhq','Aw4U','Aw5ZDge','nZq4mZa','x19hzw4','mtrWEdS','zsDZig8','zw50','D2HLBIa','CunkvMe','Dgv4Dem','C29SDMu','BM8Gvxa','zMDRA3a','vNL4CNq','zwn0Aw4','icaXlIa','BMCGlYa','yw1LihC','iJ5tCgu','CfnpwKu','y2vK','zvDxD0i','Aw5N','yxjTAw4','pgrPDIa','Dfjkq0e','zIb0Agu','ChrLza','yM9KEq','Bg9YoIm','wffiqvu','ihbHC3q','DgnOzxm','nNWZFde','A3rrA3m','yM1XrM0','ihrOAxm','CNrUEg4','DhbMv3e','zNHZEuC','psjZDZi','B3i6iZG','sevbufu','ze5YwKe','CMfUzg8','BwuGD2u','AcbMAwu','s21urwS','Bg9N','zgLUzZO','Aw5PDgu','EcbZB2W','CMuGAwC','vNzVq0u','uwTyugK','iIbZDhK','igHVB2S','iJ5dB3a','i2zMnMu','tw55sMO','zwfKEsa','AeXpAuO','lJe4ktS','DurMCva','zsb0Age','C291CMm','vg90ywW','uMfoz3a','zwfJAge','ihbHBMu','zxmGAxq','rvrpse0','mhb4idu','qxnZzw0','Ag9VA1a','zxjLzca','ztPWCMu','mhb4ktS','EdSIpNy','EhLWq1G','DxjHx3m','q0DiBfi','C29SAwq','C3LWzgK','igLZig4','BgvY','BM93','DcbIzwu','BLr5Cgu','zgvMAw4','yMfS','vuDqEhO','sfLmz2i','BwfW','vvPgBKC','BK5MqxC','AwDPBMe','wu1oB3u','A2v5CW','ywX0','y3P2tvO','yNL0zu8','vgv4Da','CMvHzca','Dgf5CYa','BwfUEq','Bg93oMG','BNrLCJS','BMnL','rLbty28','C3r5Bgu','A2LUza','AfnZsxe','yw1LlGO','AxnWBge','B246y28','vvDnsYa','BM8GBgK','ys1ZDY0','qLLqCgu','ywjZ','zYbMB3i','mJbWEca','DhbHC3m','zwXHChm','yxbWzw4','zxKGAxm','n2vLzJu','CgfUzwW','CKnVBg8','C2XPy2u','D2PAvLe','A2v5vxm','zw5Jzsa','zsGPlMu','ihDOAwm','ALniue4','BwuGlsa','zxHLy0m','AguGC2K','EdTWywq','v0L5DeC','ktSGBM8','ChqGsvm','yM9Yzgu','B25Nig8','yZfKo2m','AwqGCMC','AKHKwwm','y21K','AwzMzxi','zxzLCNK','ihrOzsa','re9nq28','u1nrzuC','r2TnC0q','ys1ZDW','zM8Qksa','ChG7iJ4','zcbPCYa','s1vsqs0','tw9KA2K','DLfiB2q','B2jQzwm','EKXnAKS','v3DRq3C','AMXIugq','yxr1CMu','uNn4DhK','ChvKENy','zhvSzq','B24GDgG','lKHfqva','B3jKzxi','yxjT','mty5nZC5DLf4BvLd','vgHLigC','ignYB3m','ywDLCG','yxv0BZS','zwqGBM8','zsbYzw0','C2LUz2W','zg9ouM0','zgTPDa','yu1kDLC','AgfIBgu','BMv2zxi','EwHTvNO','tuSGq08','idyWCYa','sfPfvNe','Fdf8nNW','ihvUyxy','DgvK','Dde2','s0H3wvu','AwvSzca','u0Xus2K','Be5gsKS','vMfSDwu','nhWZFdi','ugXvzfu','BgX3yxi','4OcuigzYyq','EtPMBgu','zwn0zwq','lxjHzgK','zuXpveS','CM1VBMS','y0XADe0','v3HQrvq','DhKGAw4','Aw1Vuw8','mxb4idy','igTPBMq','u2nOCfm','zw1LBNq','BMfSrNu','igDSB2i','u3rYAw4','vhLysuG','B3CU','qKvhsu4','uNDLALm','igfUzca','msiGDMe','BMrVDY4','AM9PBG','zgrPBMC','DMXqqvC','Cg9ZAxq','veLwrq','AgLKzgu','ihbVC3q','EKzkwwq','ys9vv00','Dg9Y','y1zdB08','DMfUsKW','vxLttu8','DxjHtwu','i3nHA3u','v21tCNC','zw5HyMW','vgresee','Ag9VA0y','EuPvuLi','DwfVy0S','ifrOzsa','thLnwuC','t01hy3u','qM1wr3C','BNrezwy','DhDPy2u','ig9Mia','r2fTzsG','CNbPuMq','ie9o','rviGvvC','oImYyta','iZDLzta'];_0x3650=function(){return _0x8cfb48;};return _0x3650();}function _0x111b(_0x4dcb15,_0x3f6f77){_0x4dcb15=_0x4dcb15-(-0xcd*-0x16+0x5ef+-0x15f4);var _0x3ab18d=_0x3650();var _0x39762a=_0x3ab18d[_0x4dcb15];if(_0x111b['oWCXZA']===undefined){var _0x31b3a1=function(_0x4ba458){var _0x1be3ee='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x192a5b='',_0x3f6898='';for(var _0x3603a7=0x23f+-0x361*0x3+0x7e4*0x1,_0x5ad8f1,_0x32aee7,_0x229e8a=0x1*-0xe63+0x61e+0x845;_0x32aee7=_0x4ba458['charAt'](_0x229e8a++);~_0x32aee7&&(_0x5ad8f1=_0x3603a7%(0x1*0x1751+-0x2636+0xee9)?_0x5ad8f1*(0x1*0x25ba+0x164a+0x1c2*-0x22)+_0x32aee7:_0x32aee7,_0x3603a7++%(-0x169*0xb+-0x1*-0x17bf+-0x838))?_0x192a5b+=String['fromCharCode'](0x1*0x242f+-0x1e3+0xb*-0x307&_0x5ad8f1>>(-(-0x180+0x81e+0x12*-0x5e)*_0x3603a7&0xbb*-0x22+0x1a3+0x1d*0xcd)):0x1ad7*0x1+0x1*-0x1c96+0x1*0x1bf){_0x32aee7=_0x1be3ee['indexOf'](_0x32aee7);}for(var _0xaa8345=-0x3aa+-0x24f6+0x28a0,_0x511ced=_0x192a5b['length'];_0xaa8345<_0x511ced;_0xaa8345++){_0x3f6898+='%'+('00'+_0x192a5b['charCodeAt'](_0xaa8345)['toString'](-0x1803+0x220b+-0x8*0x13f))['slice'](-(-0x184b+0x1*0x1619+0x234));}return decodeURIComponent(_0x3f6898);};_0x111b['jXJTVu']=_0x31b3a1,_0x111b['KPfoHT']={},_0x111b['oWCXZA']=!![];}var _0x55f6b1=_0x3ab18d[-0x1510+-0x662+-0x493*-0x6],_0x18cb03=_0x4dcb15+_0x55f6b1,_0x2ada85=_0x111b['KPfoHT'][_0x18cb03];return!_0x2ada85?(_0x39762a=_0x111b['jXJTVu'](_0x39762a),_0x111b['KPfoHT'][_0x18cb03]=_0x39762a):_0x39762a=_0x2ada85,_0x39762a;}(function(_0x1e1396,_0x2d006b){var _0x4c85c5=_0x111b,_0x27640b=_0x1e1396();while(!![]){try{var _0x5cb26b=parseInt(_0x4c85c5(0x230))/(-0xc79*0x1+-0x109d*0x2+0x145*0x24)*(parseInt(_0x4c85c5(0x573))/(0x1fda+-0x2eb+-0x5c9*0x5))+-parseInt(_0x4c85c5(0x41e))/(0x3*-0x4a2+0x1af+0xc3a)*(-parseInt(_0x4c85c5(0x1c5))/(-0x4c*-0x63+-0x8*-0x367+0x4*-0xe26))+-parseInt(_0x4c85c5(0x223))/(-0x1b52+-0x2069+0xef*0x40)*(-parseInt(_0x4c85c5(0x536))/(0xf30+0x42a+-0x1354))+parseInt(_0x4c85c5(0x5fd))/(-0x2066+0x35*0xb7+-0x3*0x1d2)+parseInt(_0x4c85c5(0x35c))/(0x1*-0x131f+0x1*0x207b+-0x6aa*0x2)+-parseInt(_0x4c85c5(0x57d))/(-0x1183+0x15b*-0x1+0x12e7)+parseInt(_0x4c85c5(0x5be))/(0x1b0a+0x138*-0xe+0x3*-0x350)*(-parseInt(_0x4c85c5(0x24a))/(0x1*-0x1891+-0xc13*-0x1+-0x1*-0xc89));if(_0x5cb26b===_0x2d006b)break;else _0x27640b['push'](_0x27640b['shift']());}catch(_0x436d68){_0x27640b['push'](_0x27640b['shift']());}}}(_0x3650,0x2644d*0x1+0x81*0x182+0x3048),((()=>{'use strict';var _0x275951=_0x111b,_0x21be6c={'vwgDS':function(_0x2d89d4,_0x1d09c3){return _0x2d89d4!==_0x1d09c3;},'EAIoY':_0x275951(0x503)+'d','sDIHU':_0x275951(0x29a),'lxdoV':_0x275951(0x50f),'PUbSe':'sakur'+_0x275951(0x3e5)+'v2','aqAtx':_0x275951(0x3dd),'tWksQ':_0x275951(0x4d8)+'a-sw-'+_0x275951(0x50b)+'s','XGxjS':function(_0x1fc3e4,_0xfc3d9e){return _0x1fc3e4+_0xfc3d9e;},'pWCIj':function(_0x51929e){return _0x51929e();},'EFTuD':_0x275951(0x4c2)+'rea','bmqFm':_0x275951(0x1d5),'RVKKd':'ExqrN','WFYpV':function(_0x4626c0,_0x5711fa){return _0x4626c0===_0x5711fa;},'QuDwN':'rgba('+'255,1'+_0x275951(0x4bc)+'7,.35'+')','dMvjw':_0x275951(0x52e),'RAGvV':_0x275951(0x27c)+'·\x20','qEtzu':'#ffd4'+'8a','KAGJC':_0x275951(0x325)+_0x275951(0x4d9)+_0x275951(0x3ab)+'·\x20','PICqS':_0x275951(0x4ba),'XfIiN':function(_0x1a1ef0,_0x4c11b2){return _0x1a1ef0+_0x4c11b2;},'BCHIG':_0x275951(0x295)+'\x20·\x20','DMWIX':'armin'+'g\x20·\x20','cxJbM':function(_0x5735fe,_0x7e69ca){return _0x5735fe!==_0x7e69ca;},'FHVmY':_0x275951(0x5b8),'vQHod':function(_0x13edb5,_0x21dbba){return _0x13edb5+_0x21dbba;},'fxsyG':_0x275951(0x5ca)+_0x275951(0x2bc)+'hile\x20'+_0x275951(0x5ab)+_0x275951(0x37f)+'sprin'+_0x275951(0x595)+'/\x20jum'+_0x275951(0x4e7)+_0x275951(0x250)+_0x275951(0x3f6)+_0x275951(0x39d)+_0x275951(0x50a)+_0x275951(0x3f6)+'h.','HZEVq':_0x275951(0x367)+'\x20ON','AERaf':_0x275951(0x367)+_0x275951(0x1b6),'XqDoe':'#f7ee'+'f5','xEYIE':function(_0x41a330,_0x4262d0){return _0x41a330+_0x4262d0;},'kkZik':function(_0x4725b0,_0x1a1308){return _0x4725b0!==_0x1a1308;},'SSQeG':';font'+'-weig'+_0x275951(0x56e)+'0','KJuVs':function(_0x1f961a,_0x535683){return _0x1f961a+_0x535683;},'jpPEk':function(_0x2791f2,_0x1fafd6){return _0x2791f2+_0x1fafd6;},'ffJRB':'#2a0f'+'1b','XSKjK':'qvdAE','HYLgb':_0x275951(0x2f0)+_0x275951(0x53c)+'age\x20h'+'as\x20no'+_0x275951(0x3c6)+'n\x20rel'+_0x275951(0x277)+_0x275951(0x22f)+_0x275951(0x4ed)+'talli'+_0x275951(0x475),'fnzqm':_0x275951(0x60c)+_0x275951(0x499)+_0x275951(0x613)+_0x275951(0x56b)+_0x275951(0x539)+'\x20and\x20'+'watch'+'\x20this'+_0x275951(0x3b4)+'l\x20aga'+_0x275951(0x36f),'RlGQb':function(_0x3d790b,_0x355d29){return _0x3d790b|_0x355d29;},'IhEzs':function(_0x465427,_0x2837e4){return _0x465427<_0x2837e4;},'ogWfJ':_0x275951(0x412)+'t','RaNgp':function(_0x16602a,_0x2c673a){return _0x16602a+_0x2c673a;},'OrWaU':function(_0x1bbe54,_0x1bd2e1){return _0x1bbe54+_0x1bd2e1;},'wjZVQ':function(_0x3d9654,_0x534bce){return _0x3d9654+_0x534bce;},'MpJKV':'<butt'+'on\x20id'+'=\x22sw2'+_0x275951(0x54b)+'tyle='+_0x275951(0x4b5)+_0x275951(0x4b8)+'d:tra'+_0x275951(0x594)+'ent;b'+_0x275951(0x41c)+_0x275951(0x34f)+_0x275951(0x3c1)+_0x275951(0x2fa)+_0x275951(0x1bf)+_0x275951(0x1e7)+'77,.4'+_0x275951(0x21e)+_0x275951(0x556)+_0x275951(0x3ee)+_0x275951(0x336)+'er-ra'+_0x275951(0x369)+_0x275951(0x23f)+'addin'+_0x275951(0x280)+_0x275951(0x57c)+_0x275951(0x19a)+'r:poi'+_0x275951(0x3da)+_0x275951(0x4ca)+_0x275951(0x2ea)+'n>','ITxoB':_0x275951(0x387)+'style'+_0x275951(0x333)+_0x275951(0x3a0)+'8px\x201'+_0x275951(0x636)+_0x275951(0x41c)+_0x275951(0x476)+_0x275951(0x526)+'x\x20sol'+_0x275951(0x402)+_0x275951(0x1de)+_0x275951(0x57a)+_0x275951(0x251)+_0x275951(0x3ad)+'displ'+'ay:fl'+_0x275951(0x5f4)+'p:8px'+';alig'+_0x275951(0x1df)+_0x275951(0x4f6)+_0x275951(0x3da)+'flex:'+_0x275951(0x5e7)+'uto;f'+_0x275951(0x31b)+'rap:w'+'rap;\x22'+'>','PzusW':'<span'+_0x275951(0x5b2)+_0x275951(0x63a)+_0x275951(0x567)+_0x275951(0x4fd)+'\x22\x20sty'+'le=\x22c'+'olor:'+_0x275951(0x515)+'c9;mi'+'n-wid'+'th:34'+_0x275951(0x40d)+'1.0x<'+'/span'+'>','JUktk':'<butt'+_0x275951(0x28b)+_0x275951(0x397)+_0x275951(0x34b)+'\x22\x20sty'+_0x275951(0x253)+_0x275951(0x359)+_0x275951(0x588)+'trans'+_0x275951(0x591)+_0x275951(0x54a)+'der:1'+_0x275951(0x25a)+'lid\x20r'+'gba(2'+_0x275951(0x242)+_0x275951(0x4c3)+_0x275951(0x1ec)+_0x275951(0x2d7)+_0x275951(0x32f)+'ef5;b'+_0x275951(0x41c)+'-radi'+_0x275951(0x571)+_0x275951(0x3fb)+_0x275951(0x3a0)+_0x275951(0x237)+_0x275951(0x2ae)+_0x275951(0x65b)+'point'+'er;\x22>'+'Snaps'+_0x275951(0x5d0)+_0x275951(0x1e0)+_0x275951(0x2ea)+'n>','bsIEh':'<pre\x20'+_0x275951(0x577)+'w2-ou'+'t\x22\x20st'+_0x275951(0x5c1)+_0x275951(0x4a5)+'n:0;p'+'addin'+'g:10p'+_0x275951(0x502)+'x;ove'+'rflow'+':auto'+';flex'+':1\x201\x20'+_0x275951(0x422)+_0x275951(0x1cd)+'-spac'+_0x275951(0x3bb)+_0x275951(0x25d)+_0x275951(0x2de)+_0x275951(0x27a)+'k:bre'+_0x275951(0x5d1)+_0x275951(0x345)+_0x275951(0x5bd)+'herit'+';','ZMVAI':'#sw2-'+'out','VCKLy':_0x275951(0x5c8)+_0x275951(0x5c9),'Vyxrt':'#sw2-'+_0x275951(0x213),'aWUbg':'#sw2-'+_0x275951(0x23c)+_0x275951(0x480)+'l','egOgz':function(_0x396df9){return _0x396df9();},'iLToF':'frame'+_0x275951(0x2f2),'KHkhj':_0x275951(0x4df),'IcKaN':function(_0x5960d6,_0x3d0e0a){return _0x5960d6/_0x3d0e0a;},'ktQks':_0x275951(0x33b)+_0x275951(0x2f2),'zhhRu':_0x275951(0x593),'bgrIC':function(_0x1ca0c3,_0x32308b){return _0x1ca0c3+_0x32308b;},'Qwyol':_0x275951(0x478)+_0x275951(0x2f2),'fsCMJ':_0x275951(0x3e4)+_0x275951(0x1ae)+_0x275951(0x316)+_0x275951(0x647)+_0x275951(0x239)+'yet.','WlGZS':'The\x20h'+'ooks\x20'+'fire\x20'+_0x275951(0x41a)+'e\x20gam'+_0x275951(0x374)+'wn\x20Up'+_0x275951(0x305)+_0x275951(0x3fd)+_0x275951(0x550)+_0x275951(0x647)+'ured\x20'+_0x275951(0x531),'HPRiJ':function(_0x5a2924,_0x122599){return _0x5a2924<_0x122599;},'izFNE':function(_0x121299,_0x30ee2f){return _0x121299-_0x30ee2f;},'wgDPh':'\x20\x20off'+_0x275951(0x288)+_0x275951(0x446)+_0x275951(0x1bd)+_0x275951(0x1fe)+_0x275951(0x209)+_0x275951(0x1bd)+_0x275951(0x1bd)+'raw','UDHaV':function(_0x239f43,_0x318373){return _0x239f43===_0x318373;},'fSPYK':function(_0x36a6e3,_0x1ab8c9){return _0x36a6e3+_0x1ab8c9;},'OFlDM':function(_0x2169ae,_0x531716){return _0x2169ae(_0x531716);},'CfTBi':'warni'+'ngs','ilAPg':_0x275951(0x55f),'xEFYK':_0x275951(0x58c),'pOCJJ':'HYVMe','SobCq':'%c[sa'+'kura]'+_0x275951(0x3b4)+_0x275951(0x21b)+_0x275951(0x4db)+_0x275951(0x32c),'HDMSo':function(_0x49f106,_0x546ad2){return _0x49f106!==_0x546ad2;},'iqaJM':'fhPqc','zTsvK':function(_0x5e0aa8,_0x3c1e48,_0x3ce7b9){return _0x5e0aa8(_0x3c1e48,_0x3ce7b9);},'ieXpb':'speed','czvMZ':'log','jMeJf':'warn','hSsIq':'debug','SnOgz':function(_0x52174a,_0x5a631b){return _0x52174a<_0x5a631b;},'cVCoO':'u16','Rsxty':_0x275951(0x438)+'|5|0|'+'1','RDyjw':function(_0x4f4b83,_0x538efd){return _0x4f4b83>_0x538efd;},'zhHHr':function(_0x25956f,_0x291ffe){return _0x25956f-_0x291ffe;},'ECALi':function(_0x3aab43,_0xdccc5a){return _0x3aab43!==_0xdccc5a;},'jCSvr':_0x275951(0x656)+_0x275951(0x576),'cLZtM':'hjTGW','mpbqI':function(_0x5a8ffa,_0x41e68f){return _0x5a8ffa===_0x41e68f;},'jlbPd':'insta'+'ntiat'+'eStre'+'aming','tgBVD':'MGDvp','jcrmx':'ZkbdL','HJASM':_0x275951(0x538)+_0x275951(0x240)+'eateP'+'lugin'+_0x275951(0x430)+'ailab'+'le','mEoUm':_0x275951(0x4d8)+'a-ski'+_0x275951(0x43a)+'z','mSppE':_0x275951(0x4e6),'wvnyi':_0x275951(0x24e)+'g','NURZe':function(_0x5c18ae,_0x4afe16){return _0x5c18ae!==_0x4afe16;},'eVCFy':_0x275951(0x5d4)+_0x275951(0x207)+'dkit','KmTEk':function(_0x15faba){return _0x15faba();},'McGMZ':function(_0x55c6b9){return _0x55c6b9();},'vjyJT':function(_0x427c45,_0x1eece1,_0x9a9013){return _0x427c45(_0x1eece1,_0x9a9013);},'grwkq':function(_0xaeeee8,_0x15f5c0,_0x33820a){return _0xaeeee8(_0x15f5c0,_0x33820a);},'ExmyP':'f32','thrKS':_0x275951(0x4f4),'ZRVhq':function(_0x5c36dc,_0x1ddb5f){return _0x5c36dc&_0x1ddb5f;},'QZklT':function(_0x9fb429,_0x59764d){return _0x9fb429||_0x59764d;},'wiqSy':function(_0x38f589,_0x4ab2c6){return _0x38f589===_0x4ab2c6;},'QxsQv':'obfF','zFJYd':function(_0x5413f4,_0xfaea2e){return _0x5413f4^_0xfaea2e;},'SbgUL':function(_0x2765cc,_0x4ed59c){return _0x2765cc^_0x4ed59c;},'EGfCI':function(_0x3e50c0,_0x4999c9){return _0x3e50c0&_0x4999c9;},'QhkxH':function(_0x1286a6,_0x3675c4){return _0x1286a6!==_0x3675c4;},'BUSBq':_0x275951(0x648)+'t','qLTvN':'color'+':','LHfKL':function(_0x135a39,_0x888150){return _0x135a39+_0x888150;},'BCmet':'gCThQ','XfpJS':_0x275951(0x527),'rpwWI':function(_0x2bdb3d,_0x49a4d1){return _0x2bdb3d!==_0x49a4d1;},'LiGyG':_0x275951(0x5df)+_0x275951(0x200)+'ntime'+_0x275951(0x4ec)+'e','KHwYU':_0x275951(0x3a5),'rJeqQ':_0x275951(0x2ef),'hJCUn':_0x275951(0x49b),'KEMId':'Runti'+'me.re'+'solve'+'Game('+')','CmTUY':_0x275951(0x538)+_0x275951(0x19e)+'ame','QpuGt':_0x275951(0x1bb)+'w\x20glo'+_0x275951(0x3c9),'zYYFe':'cgGly','JyavQ':function(_0x5e29d6,_0x8a6dec){return _0x5e29d6+_0x8a6dec;},'FepiN':'xVGQZ','CJCDP':'insta'+_0x275951(0x32b)+_0x275951(0x3f5)+'xport'+'s.mem'+_0x275951(0x320),'WxjET':function(_0x4638a0){return _0x4638a0();},'KEsOe':function(_0x6f6aa8){return _0x6f6aa8();},'WIytG':_0x275951(0x444),'sOwJp':'no\x20HE'+_0x275951(0x23b)+'-\x20Uni'+_0x275951(0x443)+_0x275951(0x4eb)+'e\x20not'+'\x20reac'+_0x275951(0x429)+'\x20via\x20'+'Runti'+'me.re'+'solve'+_0x275951(0x46f)+')\x20or\x20'+_0x275951(0x50c)+'indow'+_0x275951(0x44a)+'al','tUgLR':function(_0x36f48d,_0x31ddae){return _0x36f48d>_0x31ddae;},'QBSfp':function(_0x8eaa98,_0x3f807c){return _0x8eaa98+_0x3f807c;},'UQUaT':function(_0xf07d6e,_0x32ef6e){return _0xf07d6e+_0x32ef6e;},'AyQjW':'\x20past'+_0x275951(0x61c)+_0x275951(0x276)+'0x','UuaOL':'i32','OzFZR':'u32','bRceD':function(_0xa1c68b,_0x444b6d){return _0xa1c68b+_0x444b6d;},'TyXIH':_0x275951(0x487),'otiWB':function(_0x36e8de,_0x58eec7){return _0x36e8de|_0x58eec7;},'lZSMU':function(_0x3f4230,_0x1100bb){return _0x3f4230|_0x1100bb;},'LKiHG':'NGijl','EEBHj':_0x275951(0x2e5),'hBdHc':function(_0x568e9b,_0x4415fa){return _0x568e9b>_0x4415fa;},'awdbc':function(_0x385173,_0x32c8fe){return _0x385173+_0x32c8fe;},'Caxka':function(_0xbe03d1,_0x98dc18){return _0xbe03d1===_0x98dc18;},'mfMVs':'mdzEE','GkMsD':function(_0x3d06ee,_0x4f35f2){return _0x3d06ee===_0x4f35f2;},'ZRSIv':_0x275951(0x39a),'jJhRy':'8|3|6'+'|9|5|'+'0|7|1'+'|2|4','VvoCE':function(_0xda2c7d,_0x2375ad){return _0xda2c7d^_0x2375ad;},'KnpIU':function(_0x551cca,_0x132876){return _0x551cca&_0x132876;},'nNfAw':'6|4|1'+'|3|10'+_0x275951(0x272)+'|0|12'+_0x275951(0x21f)+_0x275951(0x5b3)+_0x275951(0x24c),'rzYtE':function(_0x10f000,_0x1e1406){return _0x10f000===_0x1e1406;},'cNUZL':function(_0x12f298,_0x1b1aeb){return _0x12f298===_0x1b1aeb;},'KYrIo':function(_0x5f32d7,_0x3f2003){return _0x5f32d7+_0x3f2003;},'EjVZz':function(_0x2a8939,_0x43c1cd){return _0x2a8939||_0x43c1cd;},'EQGkG':function(_0x1d97dd,_0x13301a){return _0x1d97dd+_0x13301a;},'iBVEC':function(_0x2285d6,_0x442402,_0x2a1daf){return _0x2285d6(_0x442402,_0x2a1daf);},'OGjlM':function(_0xf0cff4,_0x2e0018){return _0xf0cff4+_0x2e0018;},'rhuSZ':function(_0x3fa224,_0x1a9658){return _0x3fa224===_0x1a9658;},'yKCdb':'pOpFq','aXQkO':_0x275951(0x65f)+_0x275951(0x42f)+_0x275951(0x2b0),'LgPTe':function(_0x341025,_0x323389,_0x1ef376,_0x1c4001){return _0x341025(_0x323389,_0x1ef376,_0x1c4001);},'PAOut':function(_0x15c9fd,_0x5d596c){return _0x15c9fd+_0x5d596c;},'MnyJj':function(_0x398d65,_0x3d3b3d){return _0x398d65===_0x3d3b3d;},'EOybs':function(_0x412677,_0x32fcbb){return _0x412677+_0x32fcbb;},'dhkAE':function(_0x3be860,_0x15d785){return _0x3be860===_0x15d785;},'XEdAn':'undef'+_0x275951(0x300),'tqGIB':'kXFUd','nwylk':function(_0x563f11,_0x47aecd){return _0x563f11+_0x47aecd;},'vanJL':function(_0x5c6da5,_0x47b736){return _0x5c6da5*_0x47b736;},'pRIXq':function(_0x4657cf,_0x58a093,_0x456cd3,_0x478f29,_0x558b59){return _0x4657cf(_0x58a093,_0x456cd3,_0x478f29,_0x558b59);},'JqYDQ':function(_0x2a815d,_0x4d6fd3){return _0x2a815d!==_0x4d6fd3;},'OEsLS':_0x275951(0x35e),'uScVL':_0x275951(0x60d),'wRbBL':'WClyc','VmxbR':'oRAYG','OMGcu':function(_0x101839){return _0x101839();},'Hloov':function(_0x29cddb,_0xd2aad8){return _0x29cddb===_0xd2aad8;},'UGCHJ':'FPSco'+'ntrol'+_0x275951(0x3c4),'kfLaz':_0x275951(0x1e8)+'e','NqPbs':function(_0x59fcfe,_0x3e662f){return _0x59fcfe+_0x3e662f;},'doNRm':function(_0x1def87,_0x450222){return _0x1def87(_0x450222);},'MxqjP':function(_0x5adbe9,_0x3f372){return _0x5adbe9===_0x3f372;},'hLOiJ':function(_0x38677e,_0x3c4c40){return _0x38677e||_0x3c4c40;},'towhk':_0x275951(0x382),'zXukE':function(_0x465f8c,_0x64b021){return _0x465f8c<_0x64b021;},'vbUGi':function(_0x210f07,_0x244766){return _0x210f07>_0x244766;},'ImfQJ':function(_0x13e97a,_0x1d3763){return _0x13e97a+_0x1d3763;},'GICZZ':function(_0xe1df63,_0x104bd2){return _0xe1df63+_0x104bd2;},'BSwbe':'RAtKH','SnmqD':function(_0x11aeaa,_0x16a2c6){return _0x11aeaa<_0x16a2c6;},'YfoIg':function(_0x3832f9,_0x171a26){return _0x3832f9!==_0x171a26;},'lNFJK':function(_0x4a2e9a,_0x5b7a36){return _0x4a2e9a+_0x5b7a36;},'eNrkh':function(_0x181145,_0xff840){return _0x181145>>>_0xff840;},'VckGk':function(_0x5825b4,_0x75ab72){return _0x5825b4+_0x75ab72;},'fgkkp':function(_0x5c594d,_0x380af7){return _0x5c594d+_0x380af7;},'aMJvW':'\x20->\x20','jodlv':'void','JBCWJ':function(_0x5baac2,_0x17d449){return _0x5baac2<_0x17d449;},'XQHAU':'obf','sypdi':function(_0x184437,_0x51c7da){return _0x184437===_0x51c7da;},'FdpMA':'rTRAp','UvJlZ':function(_0x41d27d,_0x7c2938,_0x19efa5,_0x5b88c0){return _0x41d27d(_0x7c2938,_0x19efa5,_0x5b88c0);},'WhsvI':_0x275951(0x5df)+'n._ru'+'ntime'+'.reso'+'lveGa'+_0x275951(0x65a),'QuXJE':'CiSrj','fvBqR':'xTAKZ','Evamh':function(_0x2617f2,_0x10533b){return _0x2617f2!==_0x10533b;},'ESFmL':function(_0x169c94,_0x2c9c43){return _0x169c94+_0x2c9c43;},'vXPUc':function(_0x2939ba,_0x1675c7){return _0x2939ba+_0x1675c7;},'eyKHJ':'\x20ACTI'+'VE','aqxWb':'\x20k0=','XNYRt':_0x275951(0x252),'nYAFZ':_0x275951(0x44f),'oqNug':function(_0x342949,_0x699943){return _0x342949!==_0x699943;},'Qcqsa':'numbe'+'r','OoBPq':_0x275951(0x4cd),'ixqPn':function(_0x4e36b5,_0x196e77){return _0x4e36b5===_0x196e77;},'nvunz':function(_0x49bc22,_0x309c3b){return _0x49bc22<=_0x309c3b;},'GsVgg':function(_0x51fbed,_0x487559){return _0x51fbed&&_0x487559;},'MPMIy':'none','tuRMn':_0x275951(0x4bd),'akeia':_0x275951(0x217),'twYuX':function(_0x508935,_0x38c885){return _0x508935<_0x38c885;},'xDHTi':_0x275951(0x2e9)+'ss\x200x','XYrsK':function(_0x37f98e,_0x2288a1){return _0x37f98e!==_0x2288a1;},'cEGZG':_0x275951(0x356),'fyrkn':_0x275951(0x1f0),'jMWwq':function(_0x31e53f,_0x373c04){return _0x31e53f!==_0x373c04;},'kyKka':'ApNog','PXnWg':function(_0x559deb,_0x1028c4){return _0x559deb+_0x1028c4;},'GnCTF':_0x275951(0x329)+'an','ueHnb':function(_0x4db7b9,_0x593735){return _0x4db7b9===_0x593735;},'PevzG':function(_0x4a85e4,_0xaaf2c8){return _0x4a85e4(_0xaaf2c8);},'uWpjb':function(_0x2a9f06,_0x54f145){return _0x2a9f06+_0x54f145;},'PgzoW':_0x275951(0x403),'gOrez':function(_0x47974a,_0x26f30b){return _0x47974a(_0x26f30b);},'bLcDm':function(_0x4bede9,_0x1823bd){return _0x4bede9!==_0x1823bd;},'NtCKN':_0x275951(0x47a),'sLQrc':'3|6|5'+_0x275951(0x608)+_0x275951(0x212),'DreFt':function(_0x56fcb8,_0x18b752){return _0x56fcb8-_0x18b752;},'kJPys':function(_0x3d0f84,_0x2be3be){return _0x3d0f84*_0x2be3be;},'UqAYg':function(_0xe06709,_0x46ed77){return _0xe06709!==_0x46ed77;},'AVtGC':function(_0x2b82dc,_0x5cef3b){return _0x2b82dc!==_0x5cef3b;},'LeXsd':'snaps'+'hot','YFWAc':function(_0x48c696,_0x3d21ee){return _0x48c696+_0x3d21ee;},'aRbsu':function(_0x155c52,_0x47ff56){return _0x155c52!==_0x47ff56;},'qVMOy':function(_0x50bffe,_0x40f472){return _0x50bffe(_0x40f472);},'SvIiB':_0x275951(0x3e3)+_0x275951(0x386)+'g\x20fai'+'led:\x20','hneLs':function(_0xc1160a,_0x31e690){return _0xc1160a+_0x31e690;},'tGSeK':function(_0x47121e,_0x1257fd){return _0x47121e+_0x1257fd;},'olwLZ':_0x275951(0x5d6)+_0x275951(0x510)+_0x275951(0x2df)+'\x20so\x20e'+'very\x20'+'offse'+'t\x20was'+'\x20skip'+_0x275951(0x1e5)+'y\x20typ'+'e.','vuaNG':function(_0x58991c,_0x29f3e6){return _0x58991c===_0x29f3e6;},'rmIPn':function(_0x4f8395,_0x107d0f){return _0x4f8395+_0x107d0f;},'hJxyQ':_0x275951(0x5ed)+_0x275951(0x472)+_0x275951(0x42c)+_0x275951(0x1b7)+'OK\x20OV'+'ER\x20wi'+_0x275951(0x452)+'Unity'+_0x275951(0x207)+'dkit.'+_0x275951(0x468)+'Runti'+_0x275951(0x39c)+'\x20arme'+'d\x20was'+'\x20','xypCX':_0x275951(0x1a4),'fAeic':function(_0x530479,_0x1852a4){return _0x530479+_0x1852a4;},'zfgWk':_0x275951(0x5cb)+_0x275951(0x4ac)+_0x275951(0x562)+'t\x20','YWxRf':'ms\x20wi'+'th\x20or'+_0x275951(0x3cf)+_0x275951(0x560)+'=','fGktl':'\x20(sou'+'rce:\x20','ZbWdb':_0x275951(0x315)+'\x20the\x20'+'refer'+_0x275951(0x3f4)+_0x275951(0x5f8)+'ed\x20th'+_0x275951(0x2cb)+_0x275951(0x40e)+_0x275951(0x32d)+_0x275951(0x3b3)+'ble\x20n'+_0x275951(0x44d),'OCRuR':function(_0x587ca3,_0xd7de8b){return _0x587ca3+_0xd7de8b;},'TdDHA':_0x275951(0x5d4)+'\x20inst'+'ance\x20'+'not\x20r'+_0x275951(0x296)+'ed\x20ye'+_0x275951(0x5c3)+'urce:'+'\x20','nWsbE':'Heap\x20'+'reads'+_0x275951(0x1db)+_0x275951(0x54d)+_0x275951(0x54e)+'ntil\x20'+'a\x20gam'+_0x275951(0x258)+_0x275951(0x289)+'ith\x20M'+'odule'+_0x275951(0x41b)+'U8\x20is'+_0x275951(0x2b9)+'hable'+'.','NQCSw':function(_0x2e8bfc,_0xae8116){return _0x2e8bfc===_0xae8116;},'EpchE':'RbRGf','mTsEy':_0x275951(0x5f2),'fPOIw':function(_0x541335,_0x50491f){return _0x541335+_0x50491f;},'SUfWp':function(_0x376a50,_0x1f9b37){return _0x376a50+_0x1f9b37;},'CXeXa':function(_0x996dad,_0x836059){return _0x996dad+_0x836059;},'eSCmm':function(_0x2b006f,_0x232c2e){return _0x2b006f+_0x232c2e;},'mJvCT':'runs\x20'+_0x275951(0x2dd)+'durin'+_0x275951(0x323)+_0x275951(0x3b8)+'bly.i'+_0x275951(0x313)+'tiate'+'\x20and\x20'+'snaps'+'hots\x20'+_0x275951(0x5df)+_0x275951(0x2f9)+_0x275951(0x1da)+_0x275951(0x580)+'\x20','dNtbG':function(_0x5d02fa,_0x4aa342){return _0x5d02fa+_0x4aa342;},'CHZoV':function(_0x12032b,_0x121043){return _0x12032b+_0x121043;},'BmVGw':'\x20hook'+'(s)\x20t'+'o\x20a\x20t'+'able\x20'+_0x275951(0x51a)+_0x275951(0x36c)+_0x275951(0x4c5)+_0x275951(0x423)+'ne.\x20T'+_0x275951(0x3fa)+_0x275951(0x274)+'re\x20','RAlkc':'(this'+',\x20Met'+_0x275951(0x1f3)+_0x275951(0x40c)+_0x275951(0x4e4)+'id\x20do'+_0x275951(0x4f5)+_0x275951(0x1fc)+'ch\x20th'+_0x275951(0x641)+'ild.','lfhIZ':'YqdGn','JgGZQ':_0x275951(0x4e3)+_0x275951(0x228)+_0x275951(0x4c5)+_0x275951(0x645)+_0x275951(0x481)+'FPSco'+'ntrol'+_0x275951(0x4cb)+'as\x20fi'+'red\x20y'+'et.\x20','mQfEZ':'Eithe'+_0x275951(0x477)+'\x20are\x20'+_0x275951(0x579)+_0x275951(0x4c9)+'ound,'+_0x275951(0x1a0)+_0x275951(0x1ce)+'ok\x20is'+'\x20on\x20t'+'he\x20wr'+_0x275951(0x400)+_0x275951(0x5f9)+_0x275951(0x553),'BDHPF':function(_0x130cd6,_0x3539fd){return _0x130cd6===_0x3539fd;},'hchEb':_0x275951(0x3ae),'DaTVr':function(_0x2c1a74,_0x376568){return _0x2c1a74+_0x376568;},'FxcPL':function(_0x1bddc9,_0x365e07){return _0x1bddc9===_0x365e07;},'CokNi':_0x275951(0x58d),'DiPkx':function(_0x3b6b5d,_0x55315e){return _0x3b6b5d(_0x55315e);},'JgFLn':_0x275951(0x1fb)+'er','ocHbA':_0x275951(0x2b6)+'r','HuUDX':'#ff8f'+'b1','bIzkD':_0x275951(0x561)+_0x275951(0x3bf)+_0x275951(0x4fe),'yuTJB':'===SA'+_0x275951(0x40f)+'SKILL'+_0x275951(0x324)+'END=='+'=','ayUnG':'%c[sa'+_0x275951(0x575)+_0x275951(0x35f)+'AL\x20AC'+_0x275951(0x457),'LyMYG':function(_0x32a398,_0x14a738){return _0x32a398+_0x14a738;},'itphG':'DOMCo'+_0x275951(0x5aa)+_0x275951(0x211)+'d','iTfav':function(_0x34f17d,_0x2a9a44){return _0x34f17d===_0x2a9a44;},'GpRlh':_0x275951(0x4ee),'iLaBj':_0x275951(0x4d8)+_0x275951(0x40b),'wUmNw':'Healt'+'hScri'+'pt','IMHER':_0x275951(0x26b)+_0x275951(0x294)+'ger','HnPVh':_0x275951(0x3b8)+_0x275951(0x634)+'Sharp'+_0x275951(0x238),'QMTHx':_0x275951(0x3b8)+_0x275951(0x634)+'Sharp'+'-firs'+_0x275951(0x3ea)+_0x275951(0x238),'tRJCA':'Scivo'+_0x275951(0x4e1)+_0x275951(0x1c6)+_0x275951(0x2f1)+_0x275951(0x563)+_0x275951(0x1a1)};var _0x396ef7=location[_0x275951(0x5dc)+_0x275951(0x629)]||'',_0x71f8f1=/(^|\.)www\.crazygames\.com$/[_0x275951(0x48a)](_0x396ef7),_0x2274ff=/(^|\.)games\.crazygames\.com$/[_0x275951(0x48a)](_0x396ef7),_0x32081c=/(^|\.)crazygames\.com$/['test'](_0x396ef7)&&!_0x71f8f1&&!_0x2274ff,_0x3497d5=_0x71f8f1?_0x275951(0x5bf)+'l':_0x2274ff?_0x21be6c[_0x275951(0x265)]:_0x21be6c['ocHbA'];if(!_0x71f8f1&&!_0x2274ff&&!_0x32081c)return;var _0x525b8f=_0x21be6c[_0x275951(0x283)],_0x4559a5=_0x21be6c[_0x275951(0x210)],_0x2aff69=_0x275951(0x5fc)+_0x275951(0x40f)+'SKILL'+'WARZ-'+_0x275951(0x44e)+_0x275951(0x24f),_0x324a38=_0x21be6c['yuTJB'],_0x2340e2='2.2.0';if(_0x2274ff){window['addEv'+_0x275951(0x312)+_0x275951(0x5f6)+'r']('messa'+'ge',function(_0x4bdee5){var _0x397eed=_0x275951,_0x42ee76=_0x4bdee5['data'];if(!_0x42ee76||_0x42ee76[_0x397eed(0x561)+'ura']!==_0x4559a5)return;try{if(window['paren'+'t']&&_0x21be6c[_0x397eed(0x5c0)](window['paren'+'t'],window))window['paren'+'t'][_0x397eed(0x4a0)+'essag'+'e'](_0x42ee76,'*');if(window[_0x397eed(0x28f)]&&window[_0x397eed(0x28f)]!==window)window[_0x397eed(0x28f)]['postM'+_0x397eed(0x5fa)+'e'](_0x42ee76,'*');}catch(_0x1251bc){}}),console[_0x275951(0x39f)]('%c[sa'+_0x275951(0x575)+'\x20SW-W'+'RAPPE'+_0x275951(0x357)+'IVE\x20('+_0x275951(0x31a)+_0x275951(0x5ec)+')',_0x275951(0x2d7)+':'+_0x525b8f);return;}if(_0x71f8f1){console['log'](_0x21be6c['ayUnG'],_0x21be6c[_0x275951(0x469)](_0x275951(0x2d7)+':'+_0x525b8f,_0x21be6c[_0x275951(0x409)]),{'host':_0x396ef7});var _0x589fb9={'set':function(){},'command':function(){}};function _0x57ef18(_0x146f63,_0x27d2b3){var _0x7f2246=_0x275951,_0x17713d={'zLMjK':_0x21be6c['sDIHU'],'raQZT':'lJHFe'};if(_0x21be6c[_0x7f2246(0x271)]!==_0x7f2246(0x50f)){if(_0x4f8ad7)_0x567de8['textC'+_0x7f2246(0x485)+'t']=_0x21be6c[_0x7f2246(0x491)];}else{var _0x7f4633={'__sakura':_0x4559a5,'kind':_0x7f2246(0x404),'cmd':_0x146f63,'arg':_0x27d2b3};try{var _0x102bcc=new BroadcastChannel(_0x7f2246(0x4d8)+_0x7f2246(0x40b));_0x102bcc['postM'+_0x7f2246(0x5fa)+'e'](_0x7f4633),setTimeout(function(){var _0x21afe7=_0x7f2246;try{if(_0x17713d[_0x21afe7(0x413)]===_0x17713d['raQZT']){if(_0x28bd93[_0x36c68b]['hook']&&_0xb4c409[_0x14e06c][_0x21afe7(0x1ef)][_0x21afe7(0x4c5)+'ed'])_0x3e919c++;}else _0x102bcc['close']();}catch(_0x25a2ab){}},0x36a*0xa+-0x1817+0x65*-0x17);}catch(_0xc7b6c7){}}}function _0x26c688(){var _0x521865=_0x275951,_0x10d140={'BWQUQ':function(_0x22cc1d,_0x2a8f7f){return _0x22cc1d<_0x2a8f7f;}},_0x59be4d=document[_0x521865(0x601)+_0x521865(0x448)+_0x521865(0x5a3)](_0x21be6c['PUbSe']);if(_0x59be4d)return _0x59be4d;if(!document['body']||!document[_0x521865(0x38b)]['appen'+'dChil'+'d'])return null;try{if(!document['getEl'+_0x521865(0x448)+'ById'](_0x521865(0x4d8)+'a-sw-'+'v2-cs'+'s')){if(_0x521865(0x3cd)==='JhrqY'){var _0x9275d5=0x27e*0xa+-0xb40+-0xdac;for(var _0x39ee48=0x1c24+-0xc7a*-0x1+0x3*-0xd8a;_0x10d140[_0x521865(0x51c)](_0x39ee48,_0x2a1d9d[_0x521865(0x350)+'h']);_0x39ee48++){if(_0x3bfc97[_0x39ee48]['hook']&&_0x4eb803[_0x39ee48][_0x521865(0x1ef)][_0x521865(0x4c5)+'ed'])_0x9275d5++;}return _0x9275d5;}else{var _0x2410c8=document['creat'+_0x521865(0x559)+_0x521865(0x375)](_0x21be6c['aqAtx']);_0x2410c8['id']=_0x21be6c[_0x521865(0x511)],_0x2410c8[_0x521865(0x378)+'onten'+'t']='#saku'+'ra-sw'+_0x521865(0x199)+'ll:in'+'itial'+'}',(document[_0x521865(0x61a)]||document['docum'+'entEl'+'ement'])[_0x521865(0x3ec)+_0x521865(0x347)+'d'](_0x2410c8);}}return _0x59be4d=document['creat'+_0x521865(0x559)+'ent']('div'),_0x59be4d['id']=_0x21be6c[_0x521865(0x1ea)],document[_0x521865(0x38b)]['appen'+_0x521865(0x347)+'d'](_0x59be4d),_0x59be4d;}catch(_0x4ea877){return null;}}function _0x17acc1(){var _0x47bcb0=_0x275951,_0x29cc97=_0x26c688();if(!_0x29cc97)return _0x589fb9;if(_0x29cc97[_0x47bcb0(0x364)+'et']['api'])return _0x29cc97[_0x47bcb0(0x55a)];try{if('kPpqT'!=='kPpqT'){var _0x55f706=_0x1d60d5[_0x47bcb0(0x3f1)](0x699+-0xcf*0xa+0x17d,0x7ef+-0x2687+0x1fc4);if(_0x35b11f[_0x47bcb0(0x51a)+'Of'](_0x55f706)===-(-0x23b1*0x1+-0x171b+-0x3acd*-0x1)&&_0x12a775['lengt'+'h']<0xd*0x2a2+-0x9*-0x120+-0x160f*0x2)_0x54ea47[_0x47bcb0(0x545)](_0x55f706);}else return _0x10ce55(_0x29cc97);}catch(_0x4860da){return _0x29cc97[_0x47bcb0(0x364)+'et'][_0x47bcb0(0x55a)]='1',_0x29cc97['api']=_0x589fb9,console[_0x47bcb0(0x2d8)]('%c[sa'+'kura]'+'\x20pane'+'l\x20dis'+_0x47bcb0(0x261),_0x21be6c['XGxjS'](_0x47bcb0(0x2d7)+':',_0x525b8f),_0x4860da),_0x589fb9;}}function _0x10ce55(_0x3bfedf){var _0x5c5342=_0x275951,_0x3f1eea={'sjtGT':'shUwG','UUpMc':_0x5c5342(0x367)+_0x5c5342(0x1b6),'JrjVR':_0x21be6c[_0x5c5342(0x52d)],'fYpoa':_0x5c5342(0x2d7)+':','Bbuyj':function(_0x20fb2f,_0x5bbc08){return _0x20fb2f!==_0x5bbc08;},'VrsSs':_0x21be6c[_0x5c5342(0x4be)],'nifiF':_0x5c5342(0x41f)+_0x5c5342(0x257)+_0x5c5342(0x514)+'never'+_0x5c5342(0x459)+_0x5c5342(0x628)+_0x5c5342(0x425)+_0x5c5342(0x273)+'ort.\x0a'+'\x0a','qCJVa':_0x21be6c[_0x5c5342(0x3cb)],'kgRxf':'\x20\x20\x20\x20\x20'+_0x5c5342(0x370)+_0x5c5342(0x328)+_0x5c5342(0x5d5)+_0x5c5342(0x244)+_0x5c5342(0x284)+'\x20UWMK'+_0x5c5342(0x2b1)+'\x20patc'+'h\x20Web'+'Assem'+_0x5c5342(0x243)+'nstan'+_0x5c5342(0x34a)+_0x5c5342(0x4e5),'ETOHM':_0x21be6c['fnzqm'],'wlPzg':function(_0x4dfc86,_0xc4f0da){return _0x21be6c['RlGQb'](_0x4dfc86,_0xc4f0da);},'iFcCz':function(_0x356551,_0x4792ae){return _0x21be6c['IhEzs'](_0x356551,_0x4792ae);},'sHxNq':function(_0x1ff782,_0x552126){return _0x1ff782<_0x552126;},'peEcM':_0x21be6c['ogWfJ'],'PsDew':function(_0x5a0e7a){return _0x21be6c['pWCIj'](_0x5a0e7a);}};_0x3bfedf['style'][_0x5c5342(0x564)+'xt']=_0x21be6c[_0x5c5342(0x1c8)](_0x21be6c[_0x5c5342(0x5a9)](_0x21be6c['vQHod'](_0x5c5342(0x456)+_0x5c5342(0x638)+_0x5c5342(0x2ba)+'left:'+_0x5c5342(0x615)+_0x5c5342(0x57b)+'2px;z'+'-inde'+'x:214'+_0x5c5342(0x371)+'00;wi'+'dth:m'+'in(52'+'vw,62'+_0x5c5342(0x3bc)+'max-h'+_0x5c5342(0x2b3)+':78vh'+';','backg'+'round'+_0x5c5342(0x1e1)+_0x5c5342(0x401)+_0x5c5342(0x334)+_0x5c5342(0x31e)+_0x5c5342(0x29e)+'rder:'+'1px\x20s'+_0x5c5342(0x53f)+'rgba('+_0x5c5342(0x358)+'43,17'+_0x5c5342(0x5a6)+';bord'+_0x5c5342(0x27d)+_0x5c5342(0x369)+_0x5c5342(0x373)),'font:'+_0x5c5342(0x660)+'1.5\x20u'+'i-mon'+_0x5c5342(0x2c8)+'e,Con'+_0x5c5342(0x2da)+',mono'+_0x5c5342(0x368)+';box-'+'shado'+'w:0\x202'+_0x5c5342(0x3b7)+'0px\x20-'+_0x5c5342(0x3e9)+'#000;'),_0x5c5342(0x351)+_0x5c5342(0x322)+_0x5c5342(0x489)+'ex-di'+_0x5c5342(0x55e)+_0x5c5342(0x3e2)+_0x5c5342(0x513)+_0x5c5342(0x267)+_0x5c5342(0x3d9)+'idden'+';'),_0x3bfedf['inner'+_0x5c5342(0x5e2)]=_0x21be6c['xEYIE'](_0x21be6c[_0x5c5342(0x3b2)](_0x21be6c['RaNgp'](_0x21be6c[_0x5c5342(0x27e)](_0x21be6c['wjZVQ'](_0x21be6c['XGxjS'](_0x21be6c[_0x5c5342(0x5a9)]('<div\x20'+_0x5c5342(0x3dd)+_0x5c5342(0x333)+'ding:'+'9px\x201'+_0x5c5342(0x636)+_0x5c5342(0x41c)+'-bott'+'om:1p'+_0x5c5342(0x3a2)+_0x5c5342(0x402)+_0x5c5342(0x1de)+'5,143'+',177,'+'.3);d'+_0x5c5342(0x3e1)+_0x5c5342(0x43c)+'x;gap'+':8px;'+_0x5c5342(0x4c7)+'-item'+'s:cen'+'ter;f'+_0x5c5342(0x23e)+_0x5c5342(0x1ba)+'to;\x22>',_0x5c5342(0x229)+'yle=\x22'+'color'+':'),_0x525b8f)+(_0x5c5342(0x2e2)+'ura\x20·'+_0x5c5342(0x26c)+_0x5c5342(0x1e4)+_0x5c5342(0x2c0)),_0x5c5342(0x569)+_0x5c5342(0x5b2)+_0x5c5342(0x1be)+'uild\x22'+'\x20styl'+'e=\x22co'+_0x5c5342(0x38c)+_0x5c5342(0x598)+_0x5c5342(0x2c9)+'t-siz'+_0x5c5342(0x61f)+_0x5c5342(0x3fb)+_0x5c5342(0x3a0)+_0x5c5342(0x445)+'px;bo'+_0x5c5342(0x301)+_0x5c5342(0x53d)+_0x5c5342(0x53f)+_0x5c5342(0x486)+'255,1'+_0x5c5342(0x4bc)+'7,.35'+_0x5c5342(0x246)+_0x5c5342(0x557)+'adius'+':999p'+_0x5c5342(0x3bd)+_0x5c5342(0x2ca)+_0x5c5342(0x5a2)),'<span'+_0x5c5342(0x5b2)+'sw2-s'+_0x5c5342(0x2a4)+_0x5c5342(0x3a6)+_0x5c5342(0x205)+'olor:'+_0x5c5342(0x515)+_0x5c5342(0x2b7)+'aitin'+_0x5c5342(0x3e8)+'\x20game'+'\x20fram'+_0x5c5342(0x4ff)+_0x5c5342(0x346))+('<butt'+_0x5c5342(0x28b)+_0x5c5342(0x397)+_0x5c5342(0x5a0)+'\x22\x20sty'+_0x5c5342(0x5f3)+_0x5c5342(0x3e1)+_0x5c5342(0x64a)+_0x5c5342(0x63b)+'gin-l'+'eft:a'+'uto;b'+'ackgr'+_0x5c5342(0x588))+_0x525b8f+(_0x5c5342(0x336)+'er:0;'+_0x5c5342(0x2d7)+_0x5c5342(0x473)+_0x5c5342(0x5cd)+_0x5c5342(0x41c)+_0x5c5342(0x43e)+_0x5c5342(0x571)+_0x5c5342(0x3fb)+_0x5c5342(0x3a0)+_0x5c5342(0x583)+_0x5c5342(0x2b8)+'ont-w'+'eight'+':700;'+_0x5c5342(0x19a)+_0x5c5342(0x572)+_0x5c5342(0x3da)+_0x5c5342(0x3a8)+'y\x20JSO'+_0x5c5342(0x1a8)+'tton>'),_0x21be6c[_0x5c5342(0x1b1)])+(_0x5c5342(0x331)+'>')+_0x21be6c[_0x5c5342(0x19b)]+('<butt'+_0x5c5342(0x28b)+_0x5c5342(0x397)+'-spee'+'d\x22\x20st'+'yle=\x22'+_0x5c5342(0x47f)+_0x5c5342(0x201)+_0x5c5342(0x566)+_0x5c5342(0x341)+_0x5c5342(0x4d0)+_0x5c5342(0x301)+_0x5c5342(0x53d)+_0x5c5342(0x53f)+_0x5c5342(0x486)+_0x5c5342(0x358)+_0x5c5342(0x4bc)+_0x5c5342(0x321)+';colo'+_0x5c5342(0x4bf)+_0x5c5342(0x2c1)+_0x5c5342(0x3ff)+_0x5c5342(0x225)+'ius:7'+_0x5c5342(0x2f5)+_0x5c5342(0x454)+_0x5c5342(0x2ad)+_0x5c5342(0x62e)+_0x5c5342(0x19a)+_0x5c5342(0x572)+_0x5c5342(0x3da)+_0x5c5342(0x381)+_0x5c5342(0x5d9)+'f</bu'+_0x5c5342(0x5c2))+('<inpu'+_0x5c5342(0x4aa)+'\x22sw2-'+'facto'+_0x5c5342(0x28d)+_0x5c5342(0x221)+_0x5c5342(0x340)+_0x5c5342(0x611)+_0x5c5342(0x4d1)+'ax=\x225'+_0x5c5342(0x606)+'p=\x220.'+_0x5c5342(0x451)+_0x5c5342(0x5c6)+'1\x22\x20st'+'yle=\x22'+'width'+_0x5c5342(0x47c)+_0x5c5342(0x2a6)+_0x5c5342(0x1dc)+'olor:')+_0x525b8f,';\x22>')+_0x21be6c[_0x5c5342(0x546)]+_0x21be6c[_0x5c5342(0x26f)]+(_0x5c5342(0x569)+'\x20id=\x22'+'sw2-h'+_0x5c5342(0x58b)+_0x5c5342(0x3dd)+'=\x22col'+_0x5c5342(0x398)+_0x5c5342(0x1f4)+_0x5c5342(0x1bc)+_0x5c5342(0x46d)+'\x20whil'+_0x5c5342(0x285)+'king\x20'+_0x5c5342(0x1ad)+_0x5c5342(0x529)+_0x5c5342(0x1cc)+_0x5c5342(0x48f)+'g\x20mar'+'ks\x20wh'+_0x5c5342(0x51d)+_0x5c5342(0x434)+_0x5c5342(0x2ec)+_0x5c5342(0x287)+_0x5c5342(0x23a)+'>')+(_0x5c5342(0x331)+'>'),_0x21be6c['bsIEh'])+(_0x5c5342(0x332)+_0x5c5342(0x2b3)+_0x5c5342(0x612)+_0x5c5342(0x4af)+_0x5c5342(0x5bb)+_0x5c5342(0x231)+'t.\x0a\x0aT'+'his\x20p'+'anel\x20'+_0x5c5342(0x627)+_0x5c5342(0x3b5)+_0x5c5342(0x1ca)+_0x5c5342(0x376)+_0x5c5342(0x1fd)+'ame\x20f'+'rame\x20'+'loads'+_0x5c5342(0x298)+_0x5c5342(0x534)+_0x5c5342(0x2cc)+_0x5c5342(0x2db)+'.\x0a\x0aIf'+'\x20it\x20s'+_0x5c5342(0x3d7)+_0x5c5342(0x617)+',\x20Tam'+'permo'+'nkey\x20'+'is\x20no'+'t\x20inj'+_0x5c5342(0x37d)+'g\x20int'+'o\x20the'+_0x5c5342(0x420)+'s-ori'+_0x5c5342(0x4ea)+_0x5c5342(0x257)+'rame.'+_0x5c5342(0x654)+'>');var _0x22ea47=_0x3bfedf[_0x5c5342(0x65c)+_0x5c5342(0x1af)+_0x5c5342(0x45c)](_0x5c5342(0x5c8)+'statu'+'s'),_0xbb5572=_0x3bfedf[_0x5c5342(0x65c)+'Selec'+'tor']('#sw2-'+_0x5c5342(0x262)),_0xf7618f=_0x3bfedf['query'+_0x5c5342(0x1af)+_0x5c5342(0x45c)](_0x21be6c['ZMVAI']),_0x3718d3=_0x3bfedf['query'+_0x5c5342(0x1af)+'tor'](_0x5c5342(0x5c8)+_0x5c5342(0x55c)),_0x3ace93=_0x3bfedf['query'+'Selec'+_0x5c5342(0x45c)]('#sw2-'+'x'),_0x308770=_0x3bfedf[_0x5c5342(0x65c)+_0x5c5342(0x1af)+_0x5c5342(0x45c)](_0x21be6c['VCKLy']),_0x423e6e=_0x3bfedf['query'+_0x5c5342(0x1af)+'tor'](_0x21be6c[_0x5c5342(0x37c)]),_0x47970b=_0x3bfedf[_0x5c5342(0x65c)+'Selec'+'tor'](_0x5c5342(0x5c8)+_0x5c5342(0x23c)+'r'),_0x3db185=_0x3bfedf['query'+_0x5c5342(0x1af)+_0x5c5342(0x45c)](_0x21be6c[_0x5c5342(0x5a8)]),_0x5e5c1f=_0x3bfedf['query'+_0x5c5342(0x1af)+_0x5c5342(0x45c)](_0x5c5342(0x5c8)+'hint'),_0x3a0e13=null;if(_0x3ace93)_0x3ace93['oncli'+'ck']=function(){var _0xa7c519=_0x5c5342,_0x1ea13e={'SLTKi':function(_0x2c2454,_0x2bb8c9){return _0x2c2454(_0x2bb8c9);}};try{_0x3f1eea[_0xa7c519(0x227)]!=='shUwG'?_0x19a70e=_0x1ea13e[_0xa7c519(0x435)](_0x2414b1,_0x1f5dd7&&_0x5c36da[_0xa7c519(0x5d3)+'ge']||_0x4fdd23):_0x3bfedf['remov'+'e']();}catch(_0x55752c){}};if(_0x308770)_0x308770[_0x5c5342(0x34d)+'ck']=function(){var _0x4ffd5a=_0x5c5342,_0x11fd29={'uBZtQ':'F9\x20tw'+_0x4ffd5a(0x2bc)+_0x4ffd5a(0x2d5)+_0x4ffd5a(0x5ab)+_0x4ffd5a(0x37f)+'sprin'+_0x4ffd5a(0x595)+'/\x20jum'+_0x4ffd5a(0x4e7)+_0x4ffd5a(0x250)+'\x20whic'+_0x4ffd5a(0x39d)+_0x4ffd5a(0x50a)+_0x4ffd5a(0x3f6)+'h.'};_0x4ffd5a(0x4e9)===_0x4ffd5a(0x4e9)?_0x57ef18(_0x4ffd5a(0x63f)+_0x4ffd5a(0x599)):_0x241633['textC'+'onten'+'t']=_0x1c3c58['diff']&&_0x392fe7[_0x4ffd5a(0x4d2)][_0x4ffd5a(0x350)+'h']?'Diff\x20'+_0x4ffd5a(0x28e)+'apsho'+'t:\x20'+_0x335593[_0x4ffd5a(0x4d2)][_0x4ffd5a(0x453)](',\x20'):_0x11fd29['uBZtQ'];};var _0x5a3449=![];function _0x53a0cb(){var _0x4244cd=_0x5c5342;_0x57ef18(_0x4244cd(0x213),{'on':_0x5a3449,'factor':parseFloat(_0x47970b[_0x4244cd(0x1d7)])||0x72c+0x1*0x2359+-0x4*0xaa1});}if(_0x423e6e)_0x423e6e['oncli'+'ck']=function(){var _0x36b368=_0x5c5342,_0x28fec4=(_0x36b368(0x1a3)+_0x36b368(0x5b6))['split']('|'),_0x299017=0xe*0x2b+-0xf4f+0x1*0xcf5;while(!![]){switch(_0x28fec4[_0x299017++]){case'0':_0x5a3449=!_0x5a3449;continue;case'1':_0x423e6e['textC'+_0x36b368(0x485)+'t']=_0x5a3449?_0x36b368(0x367)+_0x36b368(0x471):_0x3f1eea[_0x36b368(0x533)];continue;case'2':_0x423e6e[_0x36b368(0x3dd)][_0x36b368(0x47f)+_0x36b368(0x201)]=_0x5a3449?_0x525b8f:'trans'+'paren'+'t';continue;case'3':_0x423e6e[_0x36b368(0x3dd)]['color']=_0x5a3449?_0x3f1eea['JrjVR']:_0x36b368(0x31e)+'f5';continue;case'4':_0x53a0cb();continue;}break;}};if(_0x47970b)_0x47970b['oninp'+'ut']=function(){var _0xcac486=_0x5c5342;if('YeOWm'!==_0xcac486(0x1f8))return _0x401799['datas'+'et'][_0xcac486(0x55a)]='1',_0x4bf749[_0xcac486(0x55a)]=_0x1f6228,_0x4878e7[_0xcac486(0x2d8)](_0xcac486(0x290)+'kura]'+'\x20pane'+_0xcac486(0x4f9)+'abled',_0x3f1eea['fYpoa']+_0x326fbb,_0x126854),_0x284583;else{if(_0x3db185)_0x3db185[_0xcac486(0x378)+_0xcac486(0x485)+'t']=(parseFloat(_0x47970b['value'])||0x1bde+-0x1b23+-0xba)[_0xcac486(0x1ac)+'ed'](-0x1a75+0x728+0x134e)+'x';_0x21be6c['pWCIj'](_0x53a0cb);}};if(_0x3718d3)_0x3718d3[_0x5c5342(0x34d)+'ck']=function(){var _0x2f939b=_0x5c5342,_0x45f679={'jhrgU':_0x21be6c[_0x2f939b(0x306)],'AGCGy':_0x2f939b(0x55c)},_0x147d43=_0x21be6c['XGxjS'](_0x2aff69+'\x0a'+(_0x3a0e13?JSON['strin'+_0x2f939b(0x64e)](_0x3a0e13,null,-0x3*-0xbe1+0x23a7*-0x1+0x5):'')+'\x0a',_0x324a38),_0x24d48c=function(){var _0xb3a0c6=_0x2f939b;if(_0x3f1eea['Bbuyj']('sJUJL',_0x3f1eea['VrsSs'])){if(_0x3718d3)_0x3718d3[_0xb3a0c6(0x378)+'onten'+'t']='Copie'+'d';}else return null;};if(navigator[_0x2f939b(0x640)+_0x2f939b(0x330)]&&navigator[_0x2f939b(0x640)+_0x2f939b(0x330)]['write'+_0x2f939b(0x3d5)])navigator[_0x2f939b(0x640)+'oard'][_0x2f939b(0x2c4)+_0x2f939b(0x3d5)](_0x147d43)[_0x2f939b(0x596)](_0x24d48c,function(){_0x15a028();});else _0x15a028();function _0x15a028(){var _0x5203ef=_0x2f939b,_0x157251=document[_0x5203ef(0x661)+'eElem'+_0x5203ef(0x375)](_0x45f679[_0x5203ef(0x264)]);_0x157251[_0x5203ef(0x1d7)]=_0x147d43;if(!document[_0x5203ef(0x38b)])return;document['body'][_0x5203ef(0x3ec)+_0x5203ef(0x347)+'d'](_0x157251),_0x157251[_0x5203ef(0x4ae)+'t']();try{document[_0x5203ef(0x3f9)+_0x5203ef(0x1ee)+'d'](_0x45f679[_0x5203ef(0x299)]),_0x24d48c();}catch(_0x498366){}_0x157251[_0x5203ef(0x5de)+'e']();}};setTimeout(function(){var _0x1cd047=_0x5c5342;if(_0x3a0e13)return;if(!_0x22ea47||!_0xf7618f)return;_0x22ea47['textC'+'onten'+'t']=_0x1cd047(0x33e)+_0x1cd047(0x218)+'after'+_0x1cd047(0x42d)+_0x1cd047(0x43b)+'me\x20no'+_0x1cd047(0x4c6)+'ected'+'?',_0x22ea47[_0x1cd047(0x3dd)][_0x1cd047(0x2d7)]=_0x1cd047(0x605)+'c7',_0xf7618f[_0x1cd047(0x378)+_0x1cd047(0x485)+'t']=_0x3f1eea[_0x1cd047(0x269)]+(_0x1cd047(0x297)+'panel'+'\x20prov'+_0x1cd047(0x649)+'e\x20use'+_0x1cd047(0x302)+_0x1cd047(0x3fe)+_0x1cd047(0x4b0)+'alled'+'\x20and\x20'+_0x1cd047(0x512)+_0x1cd047(0x578)+_0x1cd047(0x407)+_0x1cd047(0x5bf)+_0x1cd047(0x255))+(_0x1cd047(0x4a8)+'e\x20rem'+_0x1cd047(0x33f)+_0x1cd047(0x20a)+'pects'+'\x20are:'+'\x0a\x0a')+(_0x1cd047(0x37e)+_0x1cd047(0x1cf)+_0x1cd047(0x440)+_0x1cd047(0x3ed)+'\x20not\x20'+'injec'+_0x1cd047(0x595)+_0x1cd047(0x35a)+'the\x20c'+'ross-'+_0x1cd047(0x337)+_0x1cd047(0x349)+_0x1cd047(0x3e0))+_0x3f1eea[_0x1cd047(0x377)]+('\x20\x203.\x20'+_0x1cd047(0x552)+'sakur'+_0x1cd047(0x623)+_0x1cd047(0x43a)+_0x1cd047(0x5d8)+_0x1cd047(0x621)+'AND\x20t'+'he\x20ol'+'d\x20dia'+'g\x20scr'+_0x1cd047(0x2c6)+_0x1cd047(0x4b9))+_0x3f1eea['kgRxf']+_0x3f1eea[_0x1cd047(0x3b6)];},-0x201f*-0x6+-0x99ff+0xc3a5);var _0x48d2e3={'set':function(_0x161cfc){var _0x47b90c=_0x5c5342,_0x211271={'DLKKE':function(_0x3354d1,_0x4073d6){return _0x3354d1(_0x4073d6);}};_0x3a0e13=_0x161cfc;if(_0x3718d3)_0x3718d3[_0x47b90c(0x3dd)]['displ'+'ay']='';if(_0xbb5572){if(_0x21be6c['vwgDS'](_0x21be6c[_0x47b90c(0x392)],_0x21be6c[_0x47b90c(0x565)])){_0xbb5572['textC'+_0x47b90c(0x485)+'t']='v'+(_0x161cfc[_0x47b90c(0x1d8)+'on']||'?');var _0x2c2cdd=_0x2340e2,_0x5de7c3=_0x161cfc['versi'+'on']||'';_0xbb5572['style']['color']=_0x21be6c[_0x47b90c(0x26d)](_0x5de7c3,_0x2c2cdd)?_0x525b8f:_0x47b90c(0x3a9)+'74',_0xbb5572[_0x47b90c(0x3dd)][_0x47b90c(0x3ff)+'rColo'+'r']=_0x21be6c[_0x47b90c(0x26d)](_0x5de7c3,_0x2c2cdd)?_0x21be6c['QuDwN']:_0x47b90c(0x3a9)+'74';}else return _0x3193ae[0x1*-0x237b+0x7e6*0x3+0xbc9]=_0x3f1eea[_0x47b90c(0x219)](_0x5c51f4,0x784+0x1*-0x1ab7+-0x1*-0x1333),_0x3006ee[-0x1b4b+0xd08+0xe43];}var _0x49fcd9=_0x161cfc[_0x47b90c(0x370)+_0x47b90c(0x1d2)]&&_0x161cfc['insta'+'nces']['FPSco'+'ntrol'+_0x47b90c(0x3c4)],_0x18b684=Math[_0x47b90c(0x201)]((_0x161cfc[_0x47b90c(0x3eb)+_0x47b90c(0x270)]||-0xb5*-0x24+0x9*-0xee+-0x1116)/(0xfd1*0x2+-0xd*0x34+-0xf7*0x1a));if(_0x22ea47){if(_0x21be6c['dMvjw']===_0x47b90c(0x353))_0x189178[_0x47b90c(0x378)+_0x47b90c(0x485)+'t']=_0x321d00[_0x47b90c(0x24e)+_0x47b90c(0x64e)](_0x41addf,null,0xc2f*-0x1+-0x3*-0xc11+-0x1803);else{var _0x562315,_0x3b43d3;if(_0x49fcd9&&_0x161cfc['surve'+'y']&&_0x161cfc[_0x47b90c(0x488)+'y'][_0x47b90c(0x3dc)+_0x47b90c(0x5ae)+_0x47b90c(0x3c4)])_0x562315=_0x21be6c['XGxjS'](_0x21be6c[_0x47b90c(0x4b7)]+Object[_0x47b90c(0x3d1)](_0x161cfc['insta'+_0x47b90c(0x1d2)])[_0x47b90c(0x350)+'h']+(_0x47b90c(0x2ac)+_0x47b90c(0x63c)+'\x20'),_0x18b684)+'s',_0x3b43d3=_0x47b90c(0x474)+'a8';else{if(_0x161cfc['hooks'+_0x47b90c(0x618)+'ed']>0x11ab+-0x3c2+-0xde9)_0x562315=_0x47b90c(0x478)+_0x47b90c(0x4f3)+'d\x20·\x20'+_0x18b684+'s',_0x3b43d3=_0x21be6c[_0x47b90c(0x52b)];else{if(_0x161cfc['scrip'+'tData'])_0x562315=_0x21be6c[_0x47b90c(0x496)]+_0x18b684+'s',_0x3b43d3='#ffd4'+'8a';else{if('pftkt'===_0x21be6c['PICqS']){if(_0x4661ea[_0x4dd021][_0x47b90c(0x1ef)]&&_0x5b0490[_0x494100][_0x47b90c(0x1ef)]['table'+'Index']!==_0x2c0146)_0x193b8e++;}else _0x562315=_0x21be6c[_0x47b90c(0x1c2)]((_0x161cfc['arm']&&_0x161cfc[_0x47b90c(0x41d)]['ok']?_0x21be6c[_0x47b90c(0x4bb)]:_0x21be6c['DMWIX'])+_0x18b684,'s'),_0x3b43d3=_0x21be6c['qEtzu'];}}}_0x22ea47[_0x47b90c(0x378)+_0x47b90c(0x485)+'t']=_0x562315,_0x22ea47['style'][_0x47b90c(0x2d7)]=_0x3b43d3;}}if(_0x5e5c1f){if(_0x21be6c['cxJbM'](_0x21be6c['FHVmY'],_0x47b90c(0x22e)))_0x5e5c1f['textC'+_0x47b90c(0x485)+'t']=_0x161cfc[_0x47b90c(0x4d2)]&&_0x161cfc['diff'][_0x47b90c(0x350)+'h']?_0x21be6c[_0x47b90c(0x411)](_0x47b90c(0x642)+_0x47b90c(0x28e)+'apsho'+_0x47b90c(0x5e9),_0x161cfc[_0x47b90c(0x4d2)][_0x47b90c(0x453)](',\x20')):_0x21be6c[_0x47b90c(0x396)];else{var _0x1f2c74=_0x55362d['keys'](_0x2097f8);for(var _0x138644=0x21fa+0x3*0x7cf+-0x3967;_0x3f1eea['iFcCz'](_0x138644,_0x1f2c74['lengt'+'h'])&&_0x3f1eea['sHxNq'](_0x138644,0x2c1+0x188*-0x3+0x42f);_0x138644++){var _0x1cd62c=_0x3c33d9[_0x1f2c74[_0x138644]];if(_0x1cd62c&&typeof _0x1cd62c===_0x3f1eea[_0x47b90c(0x659)]&&_0x1cd62c[_0x47b90c(0x1c9)+'e']&&_0x1cd62c[_0x47b90c(0x1c9)+'e'][_0x47b90c(0x399)+'8']&&_0x1cd62c[_0x47b90c(0x1c9)+'e']['HEAPU'+'8'][_0x47b90c(0x482)+'r'])return _0x39de60['sourc'+'e']=_0x47b90c(0x1bb)+'w.'+_0x1f2c74[_0x138644]+('.Modu'+'le'),_0x1cd62c;}}}if(_0x161cfc[_0x47b90c(0x213)]&&_0x423e6e){_0x5a3449=!!_0x161cfc[_0x47b90c(0x213)]['on'],_0x423e6e['textC'+_0x47b90c(0x485)+'t']=_0x5a3449?_0x21be6c[_0x47b90c(0x42e)]:_0x21be6c[_0x47b90c(0x509)],_0x423e6e['style']['backg'+_0x47b90c(0x201)]=_0x5a3449?_0x525b8f:_0x47b90c(0x57e)+'paren'+'t',_0x423e6e[_0x47b90c(0x3dd)][_0x47b90c(0x2d7)]=_0x5a3449?_0x47b90c(0x554)+'1b':_0x21be6c['XqDoe'];if(_0x3db185&&_0x161cfc['speed'][_0x47b90c(0x23c)+'r']){if('KsxMY'===_0x47b90c(0x587)){var _0x33aebd=_0x408ad5[_0x47b90c(0x226)+'r'](function(_0x507d22){var _0x54c46e=_0x47b90c;return _0x507d22[_0x54c46e(0x2ed)]===_0x39d479;})[0x20bc+0x1cd*-0x7+0x1*-0x1421];_0x5e4fd4={'type':_0x37670f,'atMs':_0x14248e['now']()-_0x53b081,'originalFunc':!!(_0x33aebd&&_0x33aebd[_0x47b90c(0x1ef)]&&typeof _0x33aebd[_0x47b90c(0x1ef)]['origi'+_0x47b90c(0x449)+'nc']===_0x47b90c(0x656)+_0x47b90c(0x576)),'resolveGameAtFire':!!_0x3f1eea[_0x47b90c(0x1d6)](_0x1fca05),'gameSourceAtFire':_0x3bb766[_0x47b90c(0x3b0)+'e']};}else _0x3db185['textC'+_0x47b90c(0x485)+'t']=_0x21be6c['xEYIE'](Number(_0x161cfc['speed']['facto'+'r'])['toFix'+'ed'](0x1*0x146b+-0xb6a+-0x900),'x');}}if(_0xf7618f){if(_0x21be6c[_0x47b90c(0x25f)]('NdGxb','NdGxb'))return _0x423606[_0x47b90c(0x56a)+'d']++,_0x587136['lastE'+_0x47b90c(0x363)]=_0x59f79d[_0x47b90c(0x28a)+_0x47b90c(0x363)]||_0x211271['DLKKE'](_0x5ce666,_0x5c4ef9&&_0x19ddee['messa'+'ge']||_0x387b2b)['slice'](-0xd49+0x1*-0x1c4b+-0x2*-0x14ca,-0x623+0xb8e+-0x4f3),_0x3d22d6;else try{_0xf7618f['textC'+'onten'+'t']=_0x58c202(_0x161cfc);}catch(_0x4c4e17){_0xf7618f[_0x47b90c(0x378)+_0x47b90c(0x485)+'t']=JSON[_0x47b90c(0x24e)+'gify'](_0x161cfc,null,-0x2*-0xb03+-0x109+0x4f*-0x44);}}console['log'](_0x47b90c(0x290)+_0x47b90c(0x575)+_0x47b90c(0x590)+_0x47b90c(0x4de)+_0x47b90c(0x5bb)+'rt',_0x21be6c[_0x47b90c(0x5a9)]('color'+':',_0x525b8f)+_0x21be6c[_0x47b90c(0x409)],_0x161cfc),console['log'](_0x21be6c['XGxjS'](_0x21be6c[_0x47b90c(0x1a2)](_0x21be6c['jpPEk'](_0x21be6c['XGxjS'](_0x2aff69,'\x0a'),JSON['strin'+_0x47b90c(0x64e)](_0x161cfc,null,0x1e47*-0x1+-0x3fd*0x1+0x2245)),'\x0a'),_0x324a38));}};return _0x3bfedf[_0x5c5342(0x364)+'et']['api']='1',_0x3bfedf[_0x5c5342(0x55a)]=_0x48d2e3,_0x48d2e3;}function _0x58c202(_0x39ef06){var _0x27dbb4=_0x275951,_0x2ff006=[];_0x2ff006[_0x27dbb4(0x545)](_0x21be6c[_0x27dbb4(0x1c8)](_0x21be6c['XfIiN'](_0x21be6c[_0x27dbb4(0x1b4)],_0x39ef06[_0x27dbb4(0x5c5)]||'?')+_0x21be6c[_0x27dbb4(0x59d)]+Math[_0x27dbb4(0x201)](_0x21be6c[_0x27dbb4(0x5b0)](_0x39ef06[_0x27dbb4(0x3eb)+'edMs']||0x167f*-0x1+0x1*-0xd93+0x1*0x2412,-0x1623+-0x5b0+0x1*0x1fbb)),'s)')),_0x2ff006[_0x27dbb4(0x545)](_0x21be6c[_0x27dbb4(0x214)](_0x21be6c['jpPEk'](_0x21be6c['vQHod'](_0x21be6c[_0x27dbb4(0x5a9)](_0x21be6c[_0x27dbb4(0x391)]+(_0x39ef06['uwmk']?_0x21be6c['zhhRu']:'no'),_0x27dbb4(0x24b)+'ntext'+'\x20'),_0x39ef06[_0x27dbb4(0x541)+'pCont'+'ext']?_0x21be6c['zhhRu']:'no'),'\x20\x20\x20ty'+'pes\x20'),_0x39ef06[_0x27dbb4(0x1a7)+'ount']!=null?_0x39ef06[_0x27dbb4(0x1a7)+_0x27dbb4(0x2e6)]:'?')),_0x2ff006[_0x27dbb4(0x545)](_0x21be6c[_0x27dbb4(0x214)](_0x21be6c['bgrIC'](_0x21be6c[_0x27dbb4(0x33d)](_0x21be6c[_0x27dbb4(0x633)],_0x39ef06[_0x27dbb4(0x478)+'Appli'+'ed']),'/')+_0x39ef06['hooks'+'Total'],'\x20appl'+_0x27dbb4(0x586))),_0x2ff006[_0x27dbb4(0x545)]('');var _0x4f48cd=_0x39ef06['insta'+'nces']||{},_0x2f776d=Object['keys'](_0x4f48cd);!_0x2f776d[_0x27dbb4(0x350)+'h']&&(_0x2ff006['push'](_0x21be6c[_0x27dbb4(0x342)]),_0x2ff006[_0x27dbb4(0x545)](''),_0x2ff006['push'](_0x21be6c['WlGZS']),_0x2ff006['push'](_0x27dbb4(0x37a)+_0x27dbb4(0x5b1)+_0x27dbb4(0x506)+'et,\x20o'+'r\x20the'+_0x27dbb4(0x5da)+_0x27dbb4(0x416)+_0x27dbb4(0x56f)+'not\x20m'+'atch.'));for(var _0x507168=-0x2f*0xd3+0x128b*0x1+0x1432;_0x21be6c[_0x27dbb4(0x34c)](_0x507168,_0x2f776d['lengt'+'h']);_0x507168++){if(_0x21be6c['vwgDS'](_0x27dbb4(0x63d),_0x27dbb4(0x256))){var _0x3b7925=_0x2f776d[_0x507168];_0x2ff006['push'](_0x21be6c[_0x27dbb4(0x1c8)](_0x3b7925+'\x20@\x20',_0x4f48cd[_0x3b7925]));}else _0x452152[_0x27dbb4(0x3f9)+'omman'+'d'](_0x27dbb4(0x55c)),_0x21be6c[_0x27dbb4(0x4f8)](_0x48836a);}_0x2ff006['push']('');var _0x5535ce=_0x39ef06['surve'+'y']||{},_0x59f7e4=Object[_0x27dbb4(0x3d1)](_0x5535ce);for(var _0x39cc80=0x1ab6+0xf1*-0x26+0x910;_0x21be6c[_0x27dbb4(0x34c)](_0x39cc80,_0x59f7e4[_0x27dbb4(0x350)+'h']);_0x39cc80++){var _0x3730fd=_0x59f7e4[_0x39cc80],_0x5d6a32=_0x5535ce[_0x3730fd];if(!_0x5d6a32||!_0x5d6a32[_0x27dbb4(0x350)+'h'])continue;_0x2ff006[_0x27dbb4(0x545)](_0x27dbb4(0x51b)+_0x3730fd+'\x20'+new Array(Math['max'](0x1a6+0x13*0x1e2+0x67*-0x5d,_0x21be6c[_0x27dbb4(0x4d4)](-0x26fa+0x1826+0xef6,_0x3730fd[_0x27dbb4(0x350)+'h'])))['join']('─')),_0x2ff006[_0x27dbb4(0x545)](_0x21be6c[_0x27dbb4(0x4b1)]);for(var _0x4eeabc=0x17a*-0x18+0x570+0x1*0x1e00;_0x4eeabc<_0x5d6a32[_0x27dbb4(0x350)+'h'];_0x4eeabc++){var _0x3e70af=_0x5d6a32[_0x4eeabc],_0x303a1b=_0x21be6c['UDHaV'](typeof _0x3e70af['v'],_0x27dbb4(0x22a)+'r')?Math['round'](_0x3e70af['v']*(0x1*-0x18f5+0x1b31+0x1ac))/(0x1*-0x23f+0x94c+-0x325):_0x3e70af['v'];_0x2ff006[_0x27dbb4(0x545)](_0x21be6c[_0x27dbb4(0x1c2)](_0x21be6c['vQHod'](_0x21be6c['OrWaU'](_0x21be6c[_0x27dbb4(0x4a7)]('\x20\x20',('0x'+_0x3e70af['o']['toStr'+_0x27dbb4(0x385)](0x1553*0x1+-0x1*0x17c7+0x284))[_0x27dbb4(0x62b)+'d'](-0x2675+0xc96+0x19e7))+'\x20'+_0x3e70af['k']['padEn'+'d'](-0x245+-0x301+-0x1*-0x551),'\x20'),_0x21be6c['OFlDM'](String,_0x303a1b)['padEn'+'d'](-0x11a7+0x1*-0x16c4+0x287b)),'\x20')+(_0x3e70af['raw']||''));}_0x2ff006[_0x27dbb4(0x545)]('');}if(_0x39ef06['warni'+'ngs']&&_0x39ef06[_0x27dbb4(0x2f3)+'ngs'][_0x27dbb4(0x350)+'h']){_0x2ff006['push'](_0x21be6c[_0x27dbb4(0x5e5)]);for(var _0x34741d=-0x13ca+0x2390+-0xfc6;_0x34741d<_0x39ef06[_0x27dbb4(0x2f3)+_0x27dbb4(0x304)][_0x27dbb4(0x350)+'h'];_0x34741d++)_0x2ff006[_0x27dbb4(0x545)](_0x21be6c[_0x27dbb4(0x33d)](_0x21be6c['ilAPg'],_0x39ef06[_0x27dbb4(0x2f3)+_0x27dbb4(0x304)][_0x34741d]));}return _0x2ff006[_0x27dbb4(0x453)]('\x0a');}window[_0x275951(0x247)+_0x275951(0x312)+'stene'+'r'](_0x275951(0x5d3)+'ge',function(_0x585ff6){var _0x260b9c=_0x275951,_0x4ea7d7={'TEZiw':function(_0x1a7080,_0x2bd45f){return _0x21be6c['KJuVs'](_0x1a7080,_0x2bd45f);},'thDMP':'Eithe'+_0x260b9c(0x477)+_0x260b9c(0x228)+'not\x20i'+'n\x20a\x20r'+_0x260b9c(0x248)+'\x20or\x20t'+_0x260b9c(0x1ce)+'ok\x20is'+'\x20on\x20t'+_0x260b9c(0x5a5)+_0x260b9c(0x400)+'verlo'+'ad.'},_0x2da807=_0x585ff6['data'];if(!_0x2da807||_0x2da807['__sak'+_0x260b9c(0x360)]!==_0x4559a5)return;try{if(_0x2da807[_0x260b9c(0x3de)]===_0x21be6c[_0x260b9c(0x30b)]){if(_0x21be6c[_0x260b9c(0x1e6)]===_0x260b9c(0x314)){_0x17acc1()['set']({'host':_0x2da807['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}else _0x349e28[_0x260b9c(0x2f3)+'ngs']['push'](_0x4ea7d7[_0x260b9c(0x4a6)](_0x260b9c(0x4e3)+_0x260b9c(0x228)+_0x260b9c(0x4c5)+_0x260b9c(0x645)+'t\x20no\x20'+_0x260b9c(0x3dc)+_0x260b9c(0x5ae)+_0x260b9c(0x4cb)+'as\x20fi'+'red\x20y'+_0x260b9c(0x2d4),_0x4ea7d7['thDMP']));}if(_0x21be6c['UDHaV'](_0x2da807['kind'],_0x260b9c(0x648)+'t'))_0x17acc1()['set'](_0x2da807[_0x260b9c(0x648)+'t']);}catch(_0x28f059){console[_0x260b9c(0x2d8)](_0x21be6c[_0x260b9c(0x62f)],'color'+':'+_0x525b8f,_0x28f059);}});if(document['body'])_0x21be6c['egOgz'](_0x17acc1);else document['addEv'+_0x275951(0x312)+'stene'+'r'](_0x21be6c[_0x275951(0x2a1)],_0x17acc1,{'once':!![]});return;}window[_0x275951(0x4dd)+_0x275951(0x32a)+_0x275951(0x5e8)]=window[_0x275951(0x4dd)+'URA_S'+'W__']||{'at':Date['now']()};function _0x18df9f(_0x1c02cf,_0x2b5e4b){var _0x236e4a=_0x275951,_0xa6c872={'__sakura':_0x4559a5,'kind':_0x1c02cf};if(_0x2b5e4b){for(var _0x5c4b9d in _0x2b5e4b)_0xa6c872[_0x5c4b9d]=_0x2b5e4b[_0x5c4b9d];}try{if(window[_0x236e4a(0x591)+'t']&&_0x21be6c['HDMSo'](window[_0x236e4a(0x591)+'t'],window))window[_0x236e4a(0x591)+'t'][_0x236e4a(0x4a0)+_0x236e4a(0x5fa)+'e'](_0xa6c872,'*');}catch(_0x30c268){}try{if(_0x21be6c['iqaJM']===_0x21be6c['iqaJM']){if(window[_0x236e4a(0x28f)]&&window['top']!==window)window['top'][_0x236e4a(0x4a0)+_0x236e4a(0x5fa)+'e'](_0xa6c872,'*');}else _0x49b180['warni'+_0x236e4a(0x304)][_0x236e4a(0x545)](_0x236e4a(0x1bb)+'w.Uni'+'tyWeb'+'Modki'+'t.Val'+_0x236e4a(0x32e)+'pper\x20'+'is\x20mi'+'ssing'+_0x236e4a(0x1d3)+_0x236e4a(0x2c7)+_0x236e4a(0x30c)+_0x236e4a(0x232)+_0x236e4a(0x282)+_0x236e4a(0x339));}catch(_0x527404){}}console[_0x275951(0x39f)](_0x21be6c[_0x275951(0x64b)](_0x275951(0x290)+_0x275951(0x575)+_0x275951(0x326)+'LAYER'+'\x20ACTI'+'VE\x20v',_0x2340e2),_0x21be6c['qLTvN']+_0x525b8f+(_0x275951(0x58e)+'-weig'+_0x275951(0x56e)+_0x275951(0x31c)+_0x275951(0x236)+'e:14p'+'x'),{'host':_0x396ef7,'href':location[_0x275951(0x504)],'version':_0x2340e2}),_0x18df9f(_0x21be6c[_0x275951(0x30b)],{'host':_0x396ef7,'role':_0x3497d5});var _0xa4994f=window[_0x275951(0x4dd)+_0x275951(0x32a)+_0x275951(0x5e8)]&&window['__SAK'+_0x275951(0x32a)+_0x275951(0x5e8)]['at']||Date[_0x275951(0x3c5)]();try{if(_0x21be6c['iTfav'](_0x275951(0x4ee),_0x21be6c[_0x275951(0x5c4)])){var _0x38c98a=new BroadcastChannel(_0x21be6c[_0x275951(0x60e)]);_0x38c98a[_0x275951(0x4d7)+'sage']=function(_0x102db1){var _0x182f25=_0x275951,_0x109f3b=_0x102db1[_0x182f25(0x311)];if(_0x109f3b&&_0x109f3b[_0x182f25(0x561)+_0x182f25(0x360)]===_0x4559a5&&_0x109f3b[_0x182f25(0x3de)]===_0x182f25(0x404))_0x21be6c[_0x182f25(0x2aa)](_0x511082,_0x109f3b[_0x182f25(0x404)],_0x109f3b['arg']);};}else _0x3883e7(_0x21be6c['ieXpb'],{'on':_0x290371,'factor':_0x5c88dd(_0x3ed232[_0x275951(0x1d7)])||-0x3a+-0x37*0xf+0x44*0xd});}catch(_0x1ffa78){}var _0x8c480f=[];(function _0x2bd322(){var _0x4e6cf6=_0x275951,_0x123618={'boWOX':function(_0x2411d0,_0x2abf56){var _0x5b6e5a=_0x111b;return _0x21be6c[_0x5b6e5a(0x26d)](_0x2411d0,_0x2abf56);},'ogxIg':'JptPd','XOCZj':'CWBaw','jSHPN':function(_0x2b95e9,_0xb64fd7){var _0x4137be=_0x111b;return _0x21be6c[_0x4137be(0x25f)](_0x2b95e9,_0xb64fd7);},'YFQbx':function(_0x314667,_0x117eb6){return _0x314667!==_0x117eb6;},'GSsrk':_0x4e6cf6(0x656)+_0x4e6cf6(0x576)};if(_0x4e6cf6(0x5ee)===_0x4e6cf6(0x447))try{_0x5cbaa4[_0x4e6cf6(0x5de)+'e']();}catch(_0x5802b4){}else{var _0x5af4ef=[_0x21be6c[_0x4e6cf6(0x3d3)],_0x21be6c['jMeJf'],'error',_0x4e6cf6(0x4ad),_0x21be6c[_0x4e6cf6(0x3df)]];for(var _0x2d3510=0xf7d+-0x58d+0x10*-0x9f;_0x21be6c['SnOgz'](_0x2d3510,_0x5af4ef['lengt'+'h']);_0x2d3510++){(function(_0x37cde2){var _0x1df8be=_0x4e6cf6,_0x3c8cfd=console[_0x37cde2];if(_0x123618[_0x1df8be(0x61d)](typeof _0x3c8cfd,_0x123618['GSsrk']))return;console[_0x37cde2]=function(){var _0x329fbd=_0x1df8be,_0x4d878d={'eWWwB':_0x329fbd(0x538)+_0x329fbd(0x19e)+'ame'};try{var _0x1ca829='';for(var _0x10c516=-0x554+-0x1*-0xbf+0x495;_0x10c516<arguments[_0x329fbd(0x350)+'h'];_0x10c516++){if(_0x123618['boWOX'](_0x123618['ogxIg'],_0x123618[_0x329fbd(0x33c)]))return _0x208786[_0x329fbd(0x3b0)+'e']=_0x4d878d[_0x329fbd(0x384)],_0x35f45f;else{var _0xba88b1=arguments[_0x10c516];if(typeof _0xba88b1==='strin'+'g')_0x1ca829+=_0xba88b1;else{if(_0xba88b1&&_0xba88b1[_0x329fbd(0x5d3)+'ge'])_0x1ca829+=_0xba88b1[_0x329fbd(0x5d3)+'ge'];}}}if(_0x1ca829[_0x329fbd(0x51a)+'Of'](_0x2aff69)!==-(-0x26a2+0xa51+-0xe29*-0x2))return _0x3c8cfd['apply'](console,arguments);if(_0x123618[_0x329fbd(0x3f7)](_0x1ca829[_0x329fbd(0x51a)+'Of'](_0x329fbd(0x5d4)+'WebMo'+_0x329fbd(0x427)),-(0x1596+0x119d*-0x1+-0x3f8))){var _0x37280f=_0x1ca829[_0x329fbd(0x3f1)](0xe25+-0x1efe*0x1+0x13*0xe3,-0x1*-0x2f+-0x13e0+0x14dd);if(_0x8c480f['index'+'Of'](_0x37280f)===-(-0x6b*-0x2b+-0x346*0xa+-0x762*-0x2)&&_0x8c480f['lengt'+'h']<-0x1f38+0x15d+-0x1e17*-0x1)_0x8c480f[_0x329fbd(0x545)](_0x37280f);}}catch(_0x2be345){}return _0x3c8cfd['apply'](console,arguments);};}(_0x5af4ef[_0x2d3510]));}}}());var _0x29cb12={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x56ed44=null,_0x1f92b8=null,_0x208727=-(0x148d*0x1+0xe42+-0x22ce),_0x11b3e4=null;function _0x2ab049(_0x1eed3e){var _0x94dd4=_0x275951,_0x5f7bf2={'vlLoo':_0x21be6c[_0x94dd4(0x45d)],'XIzSk':'u32','NjKJK':_0x94dd4(0x1fa)};if(_0x94dd4(0x3e6)===_0x94dd4(0x3e6))try{var _0x1bc6b2=_0x21be6c[_0x94dd4(0x417)][_0x94dd4(0x19f)]('|'),_0x141e7c=-0x1*-0x543+-0x1f3*-0x1+-0x736;while(!![]){switch(_0x1bc6b2[_0x141e7c++]){case'0':var _0xc0444d=_0x3a0d15[_0x94dd4(0x2eb)+'y'];continue;case'1':_0xc0444d&&_0xc0444d[_0x94dd4(0x482)+'r']&&_0x21be6c[_0x94dd4(0x5a7)](_0xc0444d[_0x94dd4(0x482)+'r']['byteL'+'ength'],0x153a+-0x1*0x1e9+-0x1351)&&(_0x1f92b8=_0xc0444d,_0x208727=_0x21be6c[_0x94dd4(0x33a)](Date[_0x94dd4(0x3c5)](),_0xa4994f));continue;case'2':if(!_0x3a0d15)return;continue;case'3':var _0x3a0d15=_0x1eed3e['insta'+_0x94dd4(0x3db)]?_0x1eed3e['insta'+'nce']['expor'+'ts']:_0x1eed3e['expor'+'ts']||null;continue;case'4':if(!_0x1eed3e)return;continue;case'5':if(!_0x11b3e4)try{_0x11b3e4=Object[_0x94dd4(0x3d1)](_0x3a0d15)[_0x94dd4(0x3f1)](0x1ce4+-0x1*-0x1315+-0x2ff9,0x10a2+-0xb6b+-0x51f*0x1);}catch(_0x3b9152){}continue;}break;}}catch(_0x362c2e){}else{_0xfcb0a['ok']++;switch(_0x1a6c06){case'u8':return _0x130f27[_0x94dd4(0x49c)+'nt8'](_0x45ffa0);case'i8':return _0x2833c6['getIn'+'t8'](_0x31e48b);case'i16':return _0x3b6044['getIn'+_0x94dd4(0x432)](_0x20a2cb,!![]);case _0x5f7bf2['vlLoo']:return _0x328fe4['getUi'+'nt16'](_0x1009db,!![]);case _0x94dd4(0x2bf):return _0x5020c0['getIn'+'t32'](_0x6d9f15,!![]);case _0x5f7bf2['XIzSk']:return _0x3063da[_0x94dd4(0x49c)+'nt32'](_0x2c5cd8,!![]);case _0x5f7bf2[_0x94dd4(0x53a)]:return _0x1699fb['getFl'+'oat32'](_0x3afc46,!![]);case'f64':return _0x1d51ff[_0x94dd4(0x5dd)+'oat64'](_0x16bf70,!![]);default:return _0x71a86c[_0x94dd4(0x47e)+'t32'](_0xfe8b08,!![]);}}}function _0x118e38(){var _0x431114=_0x275951;if(_0x21be6c[_0x431114(0x441)]===_0x21be6c[_0x431114(0x441)])try{if(_0x21be6c['mpbqI'](typeof WebAssembly,_0x431114(0x2d2)+'ined'))return;var _0x420532=[_0x431114(0x370)+'ntiat'+'e',_0x21be6c[_0x431114(0x415)]];for(var _0x3e6827=-0x39e*-0x1+0x4ea*-0x3+0xb20;_0x3e6827<_0x420532[_0x431114(0x350)+'h'];_0x3e6827++){if(_0x21be6c['tgBVD']==='ofZnG'){var _0x4a6482=_0x313c6f[_0x431114(0x311)];if(!_0x4a6482||_0x4a6482['__sak'+_0x431114(0x360)]!==_0x49e079)return;try{if(_0x2bae70[_0x431114(0x591)+'t']&&_0x21be6c[_0x431114(0x610)](_0x2b44ff[_0x431114(0x591)+'t'],_0x34a4fb))_0x240c4d['paren'+'t'][_0x431114(0x4a0)+_0x431114(0x5fa)+'e'](_0x4a6482,'*');if(_0x1209c5[_0x431114(0x28f)]&&_0x4aa881[_0x431114(0x28f)]!==_0x3fcbf7)_0x59bf2f[_0x431114(0x28f)]['postM'+_0x431114(0x5fa)+'e'](_0x4a6482,'*');}catch(_0x26bb84){}}else(function(_0x127678){var _0x156252=_0x431114,_0x298221={'JkYMm':function(_0x250ed1,_0x2b3642){var _0x335a2b=_0x111b;return _0x21be6c[_0x335a2b(0x5b4)](_0x250ed1,_0x2b3642);}},_0x7a314c=WebAssembly[_0x127678];if(typeof _0x7a314c!==_0x21be6c['jCSvr']||_0x7a314c[_0x156252(0x561)+'uraMe'+_0x156252(0x4f0)+'ap'])return;var _0x5ebf0a=function(){var _0x336a56=_0x156252,_0x2946e1=_0x7a314c[_0x336a56(0x1aa)](this,arguments);try{if(_0x2946e1&&typeof _0x2946e1['then']===_0x336a56(0x656)+_0x336a56(0x576))_0x2946e1['then'](_0x2ab049,function(){});else _0x298221['JkYMm'](_0x2ab049,_0x2946e1);}catch(_0x32a2a1){}return _0x2946e1;};_0x5ebf0a['__sak'+_0x156252(0x460)+'moryT'+'ap']=!![];try{Object[_0x156252(0x3c8)+_0x156252(0x5ba)+_0x156252(0x56d)](_0x5ebf0a,_0x156252(0x537),{'value':_0x7a314c['name'],'configurable':!![]});}catch(_0x324851){}WebAssembly[_0x127678]=_0x5ebf0a;}(_0x420532[_0x3e6827]));}}catch(_0x5b1fdd){}else _0x4c0dbf['lastW'+'ritte'+'n']=_0x29d4a7,_0x31705b++;}var _0x35dc26=null,_0x13ee58=null,_0x4e8d6c={},_0x58e02a=[],_0xc9aed6=[],_0x5887d1=[{'type':_0x275951(0x3dc)+_0x275951(0x5ae)+_0x275951(0x3c4),'keep':!![]},{'type':_0x21be6c['wUmNw'],'keep':!![]},{'type':_0x21be6c[_0x275951(0x4a9)],'keep':![]},{'type':_0x275951(0x603)+'meMan'+_0x275951(0x421),'keep':!![]},{'type':_0x275951(0x4c8)+_0x275951(0x521),'keep':!![],'many':!![]}],_0x3311f=[_0x21be6c[_0x275951(0x54f)],_0x21be6c['QMTHx'],_0x275951(0x268)+'cofor'+'ge.De'+_0x275951(0x51f)+'ll','cInpu'+_0x275951(0x544),_0x21be6c[_0x275951(0x388)],_0x275951(0x372)+_0x275951(0x1f9)+'d'];(function _0x32d94d(){var _0x20a9ab=_0x275951;try{var _0x57e661=window[_0x20a9ab(0x5d4)+_0x20a9ab(0x207)+_0x20a9ab(0x427)]&&window[_0x20a9ab(0x5d4)+'WebMo'+'dkit']['Runti'+'me'];if(!_0x57e661||_0x21be6c[_0x20a9ab(0x25f)](typeof _0x57e661['creat'+'ePlug'+'in'],_0x20a9ab(0x656)+'ion')){if(_0x21be6c['jcrmx']===_0x21be6c[_0x20a9ab(0x4b4)]){_0x29cb12[_0x20a9ab(0x1f1)]=_0x21be6c[_0x20a9ab(0x35b)];return;}else return _0x4245c2&&_0x48d1a6['buffe'+'r']?_0xa0ecff[_0x20a9ab(0x482)+'r'][_0x20a9ab(0x30f)+_0x20a9ab(0x4d5)]:0x1*0xf71+-0x4f+0x95*-0x1a;}_0x29cb12['attem'+_0x20a9ab(0x38a)]=!![],_0x13ee58=_0x57e661[_0x20a9ab(0x661)+'ePlug'+'in']({'name':_0x21be6c[_0x20a9ab(0x5f7)],'version':_0x2340e2,'referencedAssemblies':_0x3311f[_0x20a9ab(0x3f1)]()}),_0x29cb12['ok']=!![];try{var _0x2e8e84=window['Unity'+'WebMo'+'dkit'][_0x20a9ab(0x538)+'me'];_0x2e8e84['__sak'+'uraTa'+'g']=_0x2340e2+':'+Math[_0x20a9ab(0x39b)+'m']()[_0x20a9ab(0x60f)+_0x20a9ab(0x385)](0xab3*-0x1+-0x1d97*-0x1+-0x190*0xc)[_0x20a9ab(0x3f1)](-0x6d0+-0xfe5+0x16b7,-0x373*-0x7+0x17c2+-0x2fdd),_0x56ed44=_0x2e8e84['__sak'+'uraTa'+'g'];}catch(_0x58f12b){}_0x4cef25(),_0x29cb12[_0x20a9ab(0x478)+_0x20a9ab(0x29c)+_0x20a9ab(0x631)]=_0x58e02a['lengt'+'h'],_0x118e38(),_0x29cb12[_0x20a9ab(0x2eb)+'yTap']=!![];}catch(_0x477d1d){_0x21be6c[_0x20a9ab(0x1d1)]!=='aRHqC'?_0x29cb12[_0x20a9ab(0x1f1)]=String(_0x477d1d&&_0x477d1d[_0x20a9ab(0x5d3)+'ge']||_0x477d1d):_0x20bcaf[_0x20a9ab(0x263)]();}}());var _0x5789ca=new Float32Array(-0x134+-0x1b42+0x1c77),_0x1cd72c=new Int32Array(_0x5789ca['buffe'+'r']);function _0x3c2b0e(_0x37a52b){return _0x5789ca[0x668+0x209+-0x1*0x871]=_0x37a52b,_0x1cd72c[-0x4d*0x2b+-0x77c+0x146b];}function _0x57e24f(_0x3c2dc7){return _0x1cd72c[-0x337+-0x108d+0x13c4]=_0x3c2dc7|-0x1*0x412+0x2378+0x2*-0xfb3,_0x5789ca[0x1569+-0x18c7+-0x35e*-0x1];}var _0x5470a2={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x3633a4(){var _0x4a97fc=_0x275951,_0x41bdbb={'tpfWq':function(_0x3e8716,_0x19d401){var _0x194206=_0x111b;return _0x21be6c[_0x194206(0x643)](_0x3e8716,_0x19d401);}};try{if(_0x21be6c[_0x4a97fc(0x5f1)]===_0x21be6c['XfpJS']){var _0x5ca91d='';for(var _0x48bdce=-0x823*0x3+-0x25a9+0x3e12;_0x48bdce<arguments[_0x4a97fc(0x350)+'h'];_0x48bdce++){var _0x2bf092=arguments[_0x48bdce];if(typeof _0x2bf092===_0x21be6c[_0x4a97fc(0x5e0)])_0x5ca91d+=_0x2bf092;else{if(_0x2bf092&&_0x2bf092['messa'+'ge'])_0x5ca91d+=_0x2bf092['messa'+'ge'];}}if(_0x21be6c[_0x4a97fc(0x2e7)](_0x5ca91d['index'+'Of'](_0x5e84a4),-(0xfde+0x5*0x6cd+-0x31de)))return _0xd01290['apply'](_0x1abe88,arguments);if(_0x21be6c[_0x4a97fc(0x2e7)](_0x5ca91d['index'+'Of'](_0x21be6c[_0x4a97fc(0x2bb)]),-(-0x159b+0x1391+0x20b))){var _0x4bf0b8=_0x5ca91d[_0x4a97fc(0x3f1)](-0xf3f+-0x1*-0x1638+-0x1*0x6f9,-0xb17+-0x23f0+0x3033);if(_0x5e1ba7['index'+'Of'](_0x4bf0b8)===-(0x25ed+0x16b0+-0x3c9c)&&_0x21be6c['SnOgz'](_0x110182['lengt'+'h'],-0xe*-0x7+0x1*-0x121f+-0x6b*-0x2b))_0x3dd049[_0x4a97fc(0x545)](_0x4bf0b8);}}else{if(_0x13ee58&&_0x13ee58[_0x4a97fc(0x4fa)+_0x4a97fc(0x52a)]){var _0x3246b9=_0x13ee58['_runt'+_0x4a97fc(0x52a)];if(typeof _0x3246b9[_0x4a97fc(0x366)+_0x4a97fc(0x56c)+'e']===_0x21be6c[_0x4a97fc(0x4fc)]){if(_0x21be6c['rpwWI'](_0x4a97fc(0x462),_0x4a97fc(0x3c0))){var _0x496dcb=_0x3246b9['resol'+'veGam'+'e']();if(_0x496dcb)return _0x5470a2['sourc'+'e']=_0x4a97fc(0x5df)+_0x4a97fc(0x200)+'ntime'+_0x4a97fc(0x540)+_0x4a97fc(0x343)+_0x4a97fc(0x65a),_0x496dcb;}else return _0x21be6c[_0x4a97fc(0x39e)](_0x20a6d2);}if(_0x3246b9[_0x4a97fc(0x2fc)])return _0x5470a2['sourc'+'e']=_0x21be6c['LiGyG'],_0x3246b9[_0x4a97fc(0x2fc)];}}}catch(_0x27cecf){}try{if(_0x21be6c[_0x4a97fc(0x433)]!==_0x21be6c['rJeqQ']){var _0x5e269c=window['Unity'+'WebMo'+'dkit']&&window['Unity'+_0x4a97fc(0x207)+_0x4a97fc(0x427)]['Runti'+'me'];if(_0x5e269c&&_0x21be6c['mpbqI'](typeof _0x5e269c[_0x4a97fc(0x366)+'veGam'+'e'],_0x21be6c['jCSvr'])){if(_0x21be6c['hJCUn']!==_0x4a97fc(0x439)){var _0x1f8475=_0x5e269c[_0x4a97fc(0x366)+_0x4a97fc(0x56c)+'e']();if(_0x1f8475){if('ZItZc'!==_0x4a97fc(0x21d)){var _0x4aba03=(_0x4a97fc(0x390)+_0x4a97fc(0x1a5)+_0x4a97fc(0x2ab))[_0x4a97fc(0x19f)]('|'),_0x3b2520=-0xa3d*-0x3+0x4f*-0x19+0x170*-0x10;while(!![]){switch(_0x4aba03[_0x3b2520++]){case'0':_0x3e98c5['selec'+'t']();continue;case'1':if(!_0x4eff20[_0x4a97fc(0x38b)])return;continue;case'2':_0x132064['body']['appen'+_0x4a97fc(0x347)+'d'](_0x3e98c5);continue;case'3':_0x3e98c5[_0x4a97fc(0x1d7)]=_0x2f898f;continue;case'4':_0x3e98c5['remov'+'e']();continue;case'5':try{_0x45ffbe[_0x4a97fc(0x3f9)+'omman'+'d']('copy'),_0x21be6c['McGMZ'](_0x22f0d9);}catch(_0x39804c){}continue;case'6':var _0x3e98c5=_0x79b165['creat'+'eElem'+'ent']('texta'+_0x4a97fc(0x65e));continue;}break;}}else return _0x5470a2[_0x4a97fc(0x3b0)+'e']=_0x21be6c[_0x4a97fc(0x1f5)],_0x1f8475;}}else{var _0x3c96f4=_0x3313f1[_0x3664e1];if(!_0x3c96f4)return null;var _0x13bf13=_0x21be6c['vjyJT'](_0x606e4c,_0x21be6c[_0x4a97fc(0x1c8)](_0x4d8a2e+_0x389d77,_0x3c96f4[_0x4a97fc(0x614)]),'u8'),_0x1738f8=_0x429c5d(_0x21be6c['RaNgp'](_0x17a6a2,_0x579700)+_0x3c96f4['hidde'+'n'],'i32'),_0x19b608=_0x21be6c[_0x4a97fc(0x4a4)](_0x8852f0,_0x21be6c['jpPEk'](_0x3dc165+_0x3ba4fe,_0x3c96f4[_0x4a97fc(0x3a1)+'d']),'u8'),_0x168cf9=_0x2553db(_0x90cce4+_0x377d9a+_0x3c96f4['fake'],_0xe238fc==='obfF'?_0x21be6c[_0x4a97fc(0x549)]:_0x1b459e===_0x21be6c[_0x4a97fc(0x520)]?_0x4a97fc(0x2bf):'u8'),_0xc19552=_0x21be6c['grwkq'](_0x4a877b,_0x21be6c['XfIiN'](_0x1e2730+_0x4875c8,_0x3c96f4['activ'+'e']),'u8');if(_0x13bf13===_0x4375ef||_0x1738f8===_0x2f51f4||_0x168cf9===_0xcbd4d6||_0x21be6c['UDHaV'](_0xc19552,_0x10a3dd))return null;_0x13bf13&=0x657+-0x6*-0x5a+-0x774,_0x1738f8|=0x8af*0x3+-0x16c8+-0x117*0x3,_0x19b608=_0x21be6c['ZRVhq'](_0x21be6c[_0x4a97fc(0x644)](_0x19b608,0x1*0x168b+-0x72e*-0x1+-0x1db9),-0x2102+0x1a7a+0x689),_0xc19552&=-0x1ede+0x11*-0x36+0x2275;var _0x177031;if(_0x21be6c[_0x4a97fc(0x34e)](_0x5e48cf,_0x21be6c[_0x4a97fc(0x652)]))_0x177031=_0x21be6c['OFlDM'](_0x604fa6,_0x21be6c[_0x4a97fc(0x45a)](_0x1738f8,_0x13bf13));else{if(_0x228736===_0x21be6c[_0x4a97fc(0x520)])_0x177031=_0x21be6c[_0x4a97fc(0x62a)](_0x1738f8,_0x13bf13)|-0x2623+0xbe8+0x1a3b;else _0x177031=_0x21be6c[_0x4a97fc(0x5a4)](_0x1738f8^_0x13bf13,0x3*0x610+-0x28a+-0xea7)!==-0xf23*-0x2+0x1*0xcc1+0x5*-0x89b?-0xc22*-0x2+0x120b+-0x6*0x70d:0x2001+-0x7c9*0x4+-0xdd;}return{'real':_0x177031,'fake':_0x168cf9,'act':_0xc19552,'init':_0x19b608,'key':_0x13bf13,'hidden':_0x1738f8};}}if(_0x5e269c&&_0x5e269c[_0x4a97fc(0x2fc)])return _0x5470a2[_0x4a97fc(0x3b0)+'e']=_0x21be6c[_0x4a97fc(0x2e4)],_0x5e269c;}else{var _0x11ab25=_0x544d31[_0x4a97fc(0x311)];if(!_0x11ab25||_0x21be6c[_0x4a97fc(0x55b)](_0x11ab25[_0x4a97fc(0x561)+'ura'],_0x5edfad))return;try{if(_0x11ab25[_0x4a97fc(0x3de)]===_0x4a97fc(0x58c)){_0x468378()[_0x4a97fc(0x49f)]({'host':_0x11ab25['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x11ab25['kind']===_0x21be6c['BUSBq'])_0x53cbce()[_0x4a97fc(0x49f)](_0x11ab25[_0x4a97fc(0x648)+'t']);}catch(_0x3542ee){_0x95e800['warn'](_0x4a97fc(0x290)+_0x4a97fc(0x575)+'\x20pane'+_0x4a97fc(0x21b)+_0x4a97fc(0x4db)+_0x4a97fc(0x32c),_0x21be6c[_0x4a97fc(0x2f4)]+_0x216237,_0x3542ee);}}}catch(_0xc0cc8c){}try{var _0x4fdb36=window['unity'+_0x4a97fc(0x2d0)+'nce']||window[_0x4a97fc(0x2ce)+'Game']||window[_0x4a97fc(0x217)];if(_0x4fdb36)return _0x5470a2['sourc'+'e']=_0x21be6c['QpuGt'],_0x4fdb36;}catch(_0x225457){}try{if(_0x21be6c['zYYFe']!=='GUPfO'){if(typeof game!==_0x4a97fc(0x2d2)+_0x4a97fc(0x300)&&game)return _0x5470a2[_0x4a97fc(0x3b0)+'e']=_0x4a97fc(0x58a)+'game\x20'+'bindi'+'ng',game;}else _0x304084['push'](_0x41bdbb[_0x4a97fc(0x395)](_0x21e7c2[_0x4a97fc(0x2ed)]+':\x20',_0x4a5332(_0x4db533&&_0x554690['messa'+'ge']||_0x1009f8)[_0x4a97fc(0x3f1)](0x465*-0x3+-0x1*0x6d9+0x1408,0x8a*-0x47+0x263d+-0x1*-0xa9)));}catch(_0x1e3888){}try{var _0x27c8f1=Object[_0x4a97fc(0x3d1)](window);for(var _0x4bd076=-0x131d+-0xac*-0x1+0x1271;_0x4bd076<_0x27c8f1[_0x4a97fc(0x350)+'h']&&_0x4bd076<-0x15ad*0x1+0x121b+0x5ea;_0x4bd076++){var _0x4c7003=window[_0x27c8f1[_0x4bd076]];if(_0x4c7003&&typeof _0x4c7003==='objec'+'t'&&_0x4c7003[_0x4a97fc(0x1c9)+'e']&&_0x4c7003['Modul'+'e'][_0x4a97fc(0x399)+'8']&&_0x4c7003['Modul'+'e']['HEAPU'+'8'][_0x4a97fc(0x482)+'r'])return _0x5470a2['sourc'+'e']=_0x21be6c[_0x4a97fc(0x4a3)]('windo'+'w.',_0x27c8f1[_0x4bd076])+(_0x4a97fc(0x542)+'le'),_0x4c7003;}}catch(_0x12c0be){}return _0x5470a2['sourc'+'e']=null,null;}function _0x5c27ac(){var _0x1e63aa=_0x275951;if(_0x21be6c[_0x1e63aa(0x1f6)]!==_0x21be6c[_0x1e63aa(0x1f6)])_0x2a2427['hook']['enabl'+'ed']=![];else{try{if(_0x1f92b8&&_0x1f92b8[_0x1e63aa(0x482)+'r']&&_0x1f92b8[_0x1e63aa(0x482)+'r'][_0x1e63aa(0x30f)+_0x1e63aa(0x4d5)])return _0x5470a2['sourc'+'e']=_0x5470a2[_0x1e63aa(0x3b0)+'e']||_0x21be6c['CJCDP'],new Uint8Array(_0x1f92b8['buffe'+'r']);}catch(_0x5c41c6){}try{var _0x3e8bf=_0x21be6c[_0x1e63aa(0x442)](_0x3633a4);if(_0x3e8bf&&_0x3e8bf[_0x1e63aa(0x1c9)+'e']&&_0x3e8bf[_0x1e63aa(0x1c9)+'e']['HEAPU'+'8']&&_0x3e8bf['Modul'+'e'][_0x1e63aa(0x399)+'8'][_0x1e63aa(0x482)+'r'])return _0x3e8bf[_0x1e63aa(0x1c9)+'e'][_0x1e63aa(0x399)+'8'];}catch(_0x333b36){}return null;}}function _0x1dcdb0(){var _0x2babe6=_0x275951,_0x5ce500={'ldwgb':_0x2babe6(0x2a7),'iGZSM':function(_0x53c5a9,_0x319fa2){return _0x53c5a9(_0x319fa2);},'ffuYt':function(_0xb4b7bf,_0x2f19ca){return _0xb4b7bf^_0x2f19ca;},'zbNEA':function(_0x5b89d9,_0x31d9bc){var _0x21d39b=_0x2babe6;return _0x21be6c[_0x21d39b(0x34e)](_0x5b89d9,_0x31d9bc);},'YMNou':function(_0x509e07,_0x58eda5){return _0x509e07|_0x58eda5;},'zGoqu':function(_0x1dde3f,_0x77d07){return _0x1dde3f&_0x77d07;}};if(_0x2babe6(0x2c2)!==_0x2babe6(0x2e0)){var _0x29cb7a=_0x5c27ac();if(!_0x29cb7a)return null;try{return new DataView(_0x29cb7a['buffe'+'r'],_0x29cb7a[_0x2babe6(0x3d4)+_0x2babe6(0x20f)],_0x29cb7a[_0x2babe6(0x30f)+_0x2babe6(0x4d5)]);}catch(_0xf75340){return null;}}else{if(_0x5a3f78===_0x5ce500['ldwgb'])return _0x5ce500[_0x2babe6(0x62c)](_0x132d9f,_0x5ce500['ffuYt'](_0x4f6358,_0x2c38a1));if(_0x5ce500[_0x2babe6(0x1cb)](_0x1bb383,_0x2babe6(0x4f4)))return _0x5ce500[_0x2babe6(0x3d0)](_0x5c4c90^_0x520eda,0x5*0x403+0x1*-0x94d+-0x396*0x3);return _0x5ce500[_0x2babe6(0x22b)](_0x40ce9d^_0xeca433,0xb61*-0x3+0x5*-0x6ad+0x4483)!==0x57c+0x2490+0x2e*-0xea?0xecb+0x178d+0x97*-0x41:0xf45+-0x196c+0xa27;}}function _0x2b5f25(_0x29c0c6,_0x3f2e79){var _0x45fa8f=_0x275951,_0x1ac6a0={'QzELv':function(_0x162c9f,_0x38f5ce){var _0x4b44eb=_0x111b;return _0x21be6c[_0x4b44eb(0x52f)](_0x162c9f,_0x38f5ce);},'DIHXm':_0x45fa8f(0x655)};if(_0x21be6c['NURZe']('MFeHb','qbaHH')){var _0x4be7a1=_0x21be6c['KEsOe'](_0x1dcdb0);if(!_0x4be7a1){if(_0x21be6c[_0x45fa8f(0x3fc)]==='imoQo')return _0x5470a2[_0x45fa8f(0x56a)+'d']++,_0x5470a2[_0x45fa8f(0x28a)+_0x45fa8f(0x363)]=_0x5470a2[_0x45fa8f(0x28a)+'rror']||_0x21be6c[_0x45fa8f(0x24d)],undefined;else _0x1145e4(_0x1947fe);}if(_0x29c0c6<-0x137+0x12b5+-0x117e||_0x21be6c[_0x45fa8f(0x292)](_0x29c0c6+(0x7*-0x337+-0x21a7+0x382c),_0x4be7a1['byteL'+_0x45fa8f(0x4d5)]))return _0x5470a2['faile'+'d']++,_0x5470a2[_0x45fa8f(0x28a)+'rror']=_0x5470a2['lastE'+'rror']||_0x21be6c['QBSfp'](_0x21be6c['UQUaT']('addre'+'ss\x200x',_0x29c0c6[_0x45fa8f(0x60f)+'ing'](-0x3*0x4c5+-0x2243+0x30a2))+_0x21be6c['AyQjW'],_0x4be7a1[_0x45fa8f(0x30f)+_0x45fa8f(0x4d5)]['toStr'+_0x45fa8f(0x385)](-0x2682+0x18fd+0xd95)),undefined;try{_0x5470a2['ok']++;switch(_0x3f2e79){case'u8':return _0x4be7a1['getUi'+'nt8'](_0x29c0c6);case'i8':return _0x4be7a1['getIn'+'t8'](_0x29c0c6);case'i16':return _0x4be7a1['getIn'+'t16'](_0x29c0c6,!![]);case'u16':return _0x4be7a1['getUi'+'nt16'](_0x29c0c6,!![]);case _0x21be6c[_0x45fa8f(0x495)]:return _0x4be7a1['getIn'+_0x45fa8f(0x23d)](_0x29c0c6,!![]);case _0x21be6c[_0x45fa8f(0x2b2)]:return _0x4be7a1['getUi'+_0x45fa8f(0x1b3)](_0x29c0c6,!![]);case'f32':return _0x4be7a1[_0x45fa8f(0x5dd)+'oat32'](_0x29c0c6,!![]);case'f64':return _0x4be7a1[_0x45fa8f(0x5dd)+_0x45fa8f(0x609)](_0x29c0c6,!![]);default:return _0x4be7a1['getIn'+_0x45fa8f(0x23d)](_0x29c0c6,!![]);}}catch(_0x497d97){return _0x5470a2[_0x45fa8f(0x56a)+'d']++,_0x5470a2['lastE'+'rror']=_0x5470a2[_0x45fa8f(0x28a)+'rror']||_0x21be6c[_0x45fa8f(0x5b4)](String,_0x497d97&&_0x497d97[_0x45fa8f(0x5d3)+'ge']||_0x497d97)[_0x45fa8f(0x3f1)](-0xe74+-0x8f*0x2b+0x2679,0x241a+0x18f*-0x1+-0x2213),undefined;}}else{var _0x46e862=_0x9381e5[_0x3e08ea],_0x1dc645=_0xae6b31[_0x52db98];if(_0x1ac6a0[_0x45fa8f(0x622)](_0x46e862,_0x1dc645))_0x266c05['push'](_0x586bb3+':\x20'+_0x46e862+_0x1ac6a0[_0x45fa8f(0x639)]+_0x1dc645);}}function _0x437aeb(_0x1c4b97,_0x3952bb,_0x584c11){var _0x296803=_0x275951,_0x12ce9d=_0x1dcdb0();if(!_0x12ce9d||_0x21be6c[_0x296803(0x34c)](_0x1c4b97,-0x189f+0x240f+-0xb70)||_0x21be6c[_0x296803(0x64f)](_0x1c4b97,-0xa27+0x547*-0x4+0xa6d*0x3)>_0x12ce9d['byteL'+_0x296803(0x4d5)])return![];try{switch(_0x3952bb){case'u8':case'i8':_0x12ce9d['setUi'+_0x296803(0x51e)](_0x1c4b97,_0x21be6c[_0x296803(0x637)](_0x584c11,-0x50e*0x1+0x16*-0xd3+0x182f));break;case _0x21be6c[_0x296803(0x44c)]:case _0x296803(0x4c4):_0x12ce9d['setIn'+_0x296803(0x432)](_0x1c4b97,_0x21be6c[_0x296803(0x4e0)](_0x584c11,0x318+0x256d+-0x29*0xfd),!![]);break;case'i32':case _0x21be6c[_0x296803(0x2b2)]:_0x12ce9d[_0x296803(0x2d1)+'t32'](_0x1c4b97,_0x584c11|-0x3d9*-0x3+0x1e36+0x1*-0x29c1,!![]);break;case _0x296803(0x1fa):_0x12ce9d[_0x296803(0x307)+'oat32'](_0x1c4b97,_0x584c11,!![]);break;default:_0x12ce9d[_0x296803(0x2d1)+'t32'](_0x1c4b97,_0x21be6c[_0x296803(0x5e4)](_0x584c11,0x1593+-0x517*0x3+-0x2*0x327),!![]);}return!![];}catch(_0x240795){if(_0x21be6c[_0x296803(0x600)](_0x21be6c['LKiHG'],_0x21be6c['EEBHj'])){var _0x35768b=_0x3f992c['creat'+'eElem'+_0x296803(0x375)](_0x296803(0x3dd));_0x35768b['id']=_0x296803(0x4d8)+_0x296803(0x3e5)+_0x296803(0x50b)+'s',_0x35768b[_0x296803(0x378)+_0x296803(0x485)+'t']=_0x296803(0x461)+_0x296803(0x658)+_0x296803(0x199)+'ll:in'+_0x296803(0x318)+'}',(_0x5efcd2[_0x296803(0x61a)]||_0x43ceaf[_0x296803(0x5ff)+_0x296803(0x497)+_0x296803(0x448)])['appen'+'dChil'+'d'](_0x35768b);}else return![];}}var _0x26b097={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':_0x21be6c['UuaOL']},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':'i32'},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0x9814bf(_0x37d381){var _0x1e3922=_0x275951,_0x34518c='';for(var _0x2ea9ee=0x14*-0xfe+0xd4a+0x347*0x2;_0x21be6c[_0x1e3922(0x34c)](_0x2ea9ee,_0x37d381[_0x1e3922(0x350)+'h']);_0x2ea9ee++){var _0x15cdb0=_0x37d381[_0x2ea9ee][_0x1e3922(0x60f)+_0x1e3922(0x385)](0x9bc+0x25*-0x4f+0x1bf);_0x34518c+=(_0x15cdb0['lengt'+'h']<0xf1*-0x2+-0x2*0xcee+-0x6f*-0x40?'0':'')+_0x15cdb0;}return _0x34518c;}function _0x1a37df(_0x26faf3,_0x410431,_0x15df38){var _0x5919d7=_0x275951,_0x418dba=_0x1dcdb0();if(!_0x418dba)return _0x5470a2['faile'+'d']++,_0x5470a2['lastE'+_0x5919d7(0x363)]=_0x5470a2['lastE'+_0x5919d7(0x363)]||_0x21be6c[_0x5919d7(0x24d)],null;if(_0x410431<0x215f+0x250c+-0x466b||_0x21be6c['hBdHc'](_0x410431+_0x15df38,_0x418dba[_0x5919d7(0x30f)+'ength']))return _0x5470a2[_0x5919d7(0x56a)+'d']++,_0x5470a2[_0x5919d7(0x28a)+_0x5919d7(0x363)]=_0x5470a2[_0x5919d7(0x28a)+'rror']||_0x21be6c[_0x5919d7(0x65d)](_0x21be6c[_0x5919d7(0x65d)](_0x5919d7(0x2e9)+'ss\x200x',(_0x26faf3+_0x410431)[_0x5919d7(0x60f)+_0x5919d7(0x385)](-0x1b27+-0x6*-0x59e+0x67d*-0x1))+_0x21be6c[_0x5919d7(0x2be)],_0x418dba['byteL'+'ength'][_0x5919d7(0x60f)+'ing'](0x1f2a+0x6c9+-0x25e3*0x1)),null;try{if(_0x21be6c[_0x5919d7(0x1a9)](_0x21be6c['mfMVs'],'mdzEE')){var _0x2f0111=new Uint8Array(_0x15df38);for(var _0x3c02d8=0x269c+-0x6*0x290+-0x173c;_0x3c02d8<_0x15df38;_0x3c02d8++)_0x2f0111[_0x3c02d8]=_0x418dba[_0x5919d7(0x49c)+_0x5919d7(0x51e)](_0x26faf3+_0x410431+_0x3c02d8);return _0x5470a2['ok']++,_0x2f0111;}else{if(!_0x1c25d1[_0x283583])_0xcc3917[_0x4b05d3]={'ptr':_0x440238,'firstSeen':_0x21b307[_0x5919d7(0x3c5)](),'hits':0x0};_0x56a4dd[_0x37bda4]['hits']++;}}catch(_0x46d180){return _0x5470a2['faile'+'d']++,_0x5470a2[_0x5919d7(0x28a)+_0x5919d7(0x363)]=_0x5470a2[_0x5919d7(0x28a)+_0x5919d7(0x363)]||String(_0x46d180&&_0x46d180[_0x5919d7(0x5d3)+'ge']||_0x46d180)[_0x5919d7(0x3f1)](0x12*-0xf9+0x2033+-0xeb1,-0xe*0xd3+-0x26d8+-0x2e*-0x11b),null;}}function _0x6ad263(_0x9246ea,_0xa51869,_0x551b26){var _0x2c50ec=_0x275951,_0x2366d0={'QYIIO':'Updat'+'e'};if(_0x21be6c['GkMsD'](_0x21be6c[_0x2c50ec(0x293)],'dNrZA')){var _0x499364=_0x21be6c[_0x2c50ec(0x50d)]['split']('|'),_0x57f795=-0x347+-0x17e1+0x6ca*0x4;while(!![]){switch(_0x499364[_0x57f795++]){case'0':var _0x7ee974=_0x34a5e4['getIn'+_0x2c50ec(0x23d)](_0x2f2c88['hidde'+'n'],!![]);continue;case'1':var _0x40b84b=_0x551b26===_0x21be6c[_0x2c50ec(0x652)]?_0x34a5e4['getFl'+_0x2c50ec(0x4a1)](_0x2f2c88['fake'],!![]):_0x551b26==='obfI'?_0x34a5e4[_0x2c50ec(0x47e)+_0x2c50ec(0x23d)](_0x2f2c88[_0x2c50ec(0x4ef)],!![]):_0x34a5e4[_0x2c50ec(0x49c)+'nt8'](_0x2f2c88['fake']);continue;case'2':var _0x59819c=_0x34a5e4['getUi'+_0x2c50ec(0x51e)](_0x2f2c88[_0x2c50ec(0x222)+'e'])&-0x1a56+-0x7f2+-0x43*-0x83;continue;case'3':var _0x34c707=_0x1a37df(_0x9246ea,_0xa51869,_0x2f2c88[_0x2c50ec(0x47b)]);continue;case'4':return{'keyAtOffset0':_0x72d537,'hidden':_0x7ee974,'inited':_0x575d4a,'fake':_0x40b84b,'act':_0x59819c,'hex':_0x9814bf(_0x34c707),'alt':_0x551b26==='obfI'?_0x7ee974^(_0x40b84b|-0x2*0x10c1+-0x59*0xe+0x2660):null};case'5':var _0x72d537=_0x34a5e4['getIn'+_0x2c50ec(0x23d)](_0x2f2c88['key'],!![]);continue;case'6':if(!_0x34c707)return null;continue;case'7':var _0x575d4a=_0x34a5e4['getUi'+'nt8'](_0x2f2c88[_0x2c50ec(0x3a1)+'d'])&-0x1*-0x16ed+-0x2*0x1327+0xf62;continue;case'8':var _0x2f2c88=_0x26b097[_0x551b26];continue;case'9':var _0x34a5e4=new DataView(_0x34c707[_0x2c50ec(0x482)+'r'],_0x34c707['byteO'+_0x2c50ec(0x20f)],_0x34c707[_0x2c50ec(0x30f)+'ength']);continue;}break;}}else{var _0x384ef2=_0x166ee9['hookP'+'refix']({'typeName':_0x1e5ac9[_0x2c50ec(0x2ed)],'methodName':_0x2366d0['QYIIO'],'params':[_0x2c50ec(0x2bf),'i32'],'returnType':_0x46eab3},_0x4f2bf8(_0x26d37b['type'],_0x489fe1['keep'],_0x102d7d['many']));_0xb28c5b[_0x2c50ec(0x545)]({'type':_0x109d0d[_0x2c50ec(0x2ed)],'hook':_0x384ef2,'keep':_0x23ef6d['keep']});}}function _0x11cf2f(_0x2a9c32,_0x570f12,_0x2ddfd1){var _0x194de6=_0x275951;if(_0x194de6(0x43f)===_0x194de6(0x43f)){if(_0x2a9c32===_0x194de6(0x2a7))return _0x57e24f(_0x21be6c[_0x194de6(0x3a4)](_0x570f12,_0x2ddfd1));if(_0x2a9c32===_0x21be6c[_0x194de6(0x520)])return _0x21be6c['RlGQb'](_0x570f12^_0x2ddfd1,-0x57e+0x15d4+-0x7b*0x22);return _0x21be6c[_0x194de6(0x55b)](_0x21be6c['KnpIU'](_0x570f12^_0x2ddfd1,0x1bf3+0x4ed+-0x1fe1*0x1),-0x9c9+0x16f*-0x9+0x16b0)?0x2636*0x1+0x2680+-0x4cb5:-0x3c8*0x9+-0xf29*0x2+0x405a;}else _0x39da96&&_0x21be6c[_0x194de6(0x40a)](_0x29b0c4['code'],'F9')&&(_0x3bfe6b[_0x194de6(0x2e1)+'ntDef'+_0x194de6(0x254)](),_0x19cfe6(_0x194de6(0x63f)+_0x194de6(0x599)));}function _0x2907ad(_0x50639d,_0x6caa21,_0x104584){var _0xddf71a=_0x275951,_0x196fd3=_0x21be6c[_0xddf71a(0x3ce)]['split']('|'),_0x22afe=-0x22f2+0xd36+0x15bc*0x1;while(!![]){switch(_0x196fd3[_0x22afe++]){case'0':if(_0x4d3ea6===undefined||_0x21be6c[_0xddf71a(0x59e)](_0x41be47,undefined)||_0x21be6c['cNUZL'](_0x426825,undefined)||_0x4378be===undefined)return null;continue;case'1':var _0x4d3ea6=_0x21be6c[_0xddf71a(0x2aa)](_0x2b5f25,_0x21be6c[_0xddf71a(0x64f)](_0x21be6c['KYrIo'](_0x50639d,_0x6caa21),_0x2f96c3[_0xddf71a(0x614)]),'u8');continue;case'2':return{'real':_0x5b9325,'fake':_0x426825,'act':_0x4378be,'init':_0x4d6fec,'key':_0x4d3ea6,'hidden':_0x41be47};case'3':var _0x41be47=_0x2b5f25(_0x50639d+_0x6caa21+_0x2f96c3[_0xddf71a(0x458)+'n'],_0xddf71a(0x2bf));continue;case'4':if(!_0x2f96c3)return null;continue;case'5':_0x4d6fec=_0x21be6c['EjVZz'](_0x4d6fec,-0x1*-0x1a05+-0x25*-0x60+-0x7*0x5b3)&-0x18ff+-0xac*-0x2+0x17a8;continue;case'6':var _0x2f96c3=_0x26b097[_0x104584];continue;case'7':var _0x4378be=_0x21be6c['zTsvK'](_0x2b5f25,_0x21be6c[_0xddf71a(0x411)](_0x21be6c[_0xddf71a(0x2a2)](_0x50639d,_0x6caa21),_0x2f96c3[_0xddf71a(0x222)+'e']),'u8');continue;case'8':if(_0x104584===_0x21be6c[_0xddf71a(0x652)])_0x5b9325=_0x21be6c['OFlDM'](_0x57e24f,_0x41be47^_0x4d3ea6);else{if(_0x21be6c[_0xddf71a(0x5e3)](_0x104584,_0x21be6c['thrKS']))_0x5b9325=_0x41be47^_0x4d3ea6|-0x2657+0x2a5*0x6+0x1679;else _0x5b9325=((_0x41be47^_0x4d3ea6)&0x73b+0x207*0x9+-0x1*0x187b)!==-0x2383+0x1b6+0x1fd*0x11?0x1006+-0x75*-0x6+-0x12c3:-0x2662*0x1+-0x1553+0x1*0x3bb5;}continue;case'9':_0x41be47|=0x19a7+-0x15cd*0x1+0x11*-0x3a;continue;case'10':var _0x4d6fec=_0x21be6c['iBVEC'](_0x2b5f25,_0x50639d+_0x6caa21+_0x2f96c3[_0xddf71a(0x3a1)+'d'],'u8');continue;case'11':_0x4378be&=0x19f4+-0x1*0x26ce+0xcdb;continue;case'12':_0x4d3ea6&=0x3ce+0x1*0x2630+0x28ff*-0x1;continue;case'13':var _0x5b9325;continue;case'14':var _0x426825=_0x21be6c['grwkq'](_0x2b5f25,_0x21be6c['OGjlM'](_0x21be6c[_0xddf71a(0x1c8)](_0x50639d,_0x6caa21),_0x2f96c3[_0xddf71a(0x4ef)]),_0x104584===_0xddf71a(0x2a7)?_0x21be6c[_0xddf71a(0x549)]:_0x21be6c['rhuSZ'](_0x104584,'obfI')?'i32':'u8');continue;}break;}}function _0x2478c5(_0x532f1f,_0x5d82ed,_0x1436ab,_0xcd297b){var _0x2924a2=_0x275951;if(_0x21be6c['yKCdb']!=='pOpFq')return _0x43ef7c+_0x5d9830[_0x10e6b1]['lengt'+'h'];else{var _0x55ad91=_0x21be6c['aXQkO'][_0x2924a2(0x19f)]('|'),_0x34fb98=-0x5d9+-0x361+0x93a;while(!![]){switch(_0x55ad91[_0x34fb98++]){case'0':var _0x224cbc=_0x26b097[_0x1436ab];continue;case'1':var _0x41654e=new DataView(_0x101206[_0x2924a2(0x482)+'r'],_0x101206[_0x2924a2(0x3d4)+_0x2924a2(0x20f)],_0x101206['byteL'+_0x2924a2(0x4d5)]);continue;case'2':return _0x437aeb(_0x532f1f+_0x5d82ed+_0x224cbc[_0x2924a2(0x458)+'n'],_0x21be6c[_0x2924a2(0x495)],_0x4ed9a0^_0x18a874)&&_0x21be6c['LgPTe'](_0x437aeb,_0x21be6c[_0x2924a2(0x530)](_0x532f1f,_0x5d82ed)+_0x224cbc[_0x2924a2(0x4ef)],_0x1436ab==='obfF'?_0x21be6c['ExmyP']:_0x1436ab===_0x2924a2(0x4f4)?'i32':'u8',_0x21be6c[_0x2924a2(0x34e)](_0x1436ab,_0x2924a2(0x2a7))?_0xcd297b:_0x21be6c[_0x2924a2(0x3aa)](_0x1436ab,_0x21be6c['thrKS'])?_0x21be6c['lZSMU'](_0xcd297b,0x1990+0x145+0x1ad5*-0x1):_0xcd297b?0x2*-0xa12+0xec5*-0x2+0x31af:-0x1439+-0x137+0x1570)&&_0x437aeb(_0x21be6c['EOybs'](_0x21be6c[_0x2924a2(0x5a9)](_0x532f1f,_0x5d82ed),_0x224cbc[_0x2924a2(0x222)+'e']),'u8',0x11b9+0x1e32*-0x1+0xc79);case'3':var _0x4ed9a0;continue;case'4':var _0x101206=_0x1a37df(_0x532f1f,_0x5d82ed,_0x224cbc['size']);continue;case'5':if(!_0x101206)return![];continue;case'6':var _0x18a874=_0x21be6c[_0x2924a2(0x59e)](_0x224cbc[_0x2924a2(0x2a9)+'pe'],'u8')?_0x41654e[_0x2924a2(0x49c)+'nt8'](_0x224cbc['key']):_0x41654e[_0x2924a2(0x47e)+_0x2924a2(0x23d)](_0x224cbc[_0x2924a2(0x614)],!![]);continue;case'7':if(_0x21be6c[_0x2924a2(0x64c)](_0x1436ab,'obfF'))_0x4ed9a0=_0x3c2b0e(_0xcd297b);else{if(_0x1436ab==='obfI')_0x4ed9a0=_0xcd297b|0x1e1d*0x1+-0x1*0x1e39+-0x2*-0xe;else _0x4ed9a0=(_0xcd297b?0x1697+0x14aa+-0x2b40:-0x1c2e*-0x1+-0x18aa+-0x384)&-0x28+0x1*0x25d1+-0x24aa;}continue;}break;}}}var _0x413885={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0x4a54a1={},_0x35c5c0=-0x4f8*0x4+0x4b9*-0x2+0x1b*0x116;function _0x46ebe8(_0x180d92){var _0x9dfed=_0x275951;if(_0x21be6c[_0x9dfed(0x600)](_0x9dfed(0x4ce),_0x21be6c['tqGIB']))try{_0x2d345f[_0x9dfed(0x1ef)]['enabl'+'ed']=![];}catch(_0x61f43d){}else{var _0x319dad=_0x553681[_0x9dfed(0x3dc)+'ntrol'+'ler']||[];for(var _0x333d7b=0x1e8d+0x66c+-0x24f9*0x1;_0x333d7b<_0x319dad[_0x9dfed(0x350)+'h'];_0x333d7b++){if('pdbgn'===_0x9dfed(0x626))return![];else{var _0x2de544=_0x319dad[_0x333d7b][0xde*-0x1a+0x779*-0x1+0x1e05];if(_0x319dad[_0x333d7b][0x7*0xa9+-0x1*-0x1192+-0x1630]!==_0x21be6c[_0x9dfed(0x652)])continue;var _0x25e706=_0x21be6c['LgPTe'](_0x6ad263,_0x180d92,_0x2de544,'obfF');if(!_0x25e706||_0x25e706['inite'+'d']!==0x1e14+-0x1*0x1a7+-0x1c6c)continue;var _0x2fc626=_0x11cf2f(_0x21be6c['QxsQv'],_0x25e706['hidde'+'n'],_0x25e706[_0x9dfed(0x216)+_0x9dfed(0x646)+'t0']);if(_0x21be6c[_0x9dfed(0x55b)](typeof _0x2fc626,_0x9dfed(0x22a)+'r')||!_0x21be6c['OFlDM'](isFinite,_0x2fc626))continue;if(Math[_0x9dfed(0x3e7)](_0x2fc626)<_0x413885['min']||Math[_0x9dfed(0x3e7)](_0x2fc626)>_0x413885[_0x9dfed(0x2c5)])continue;var _0x36a3dd=_0x21be6c['nwylk'](_0x180d92+':',_0x2de544),_0x3bd7b8=_0x4a54a1[_0x36a3dd];if(!_0x3bd7b8||_0x2fc626!==_0x3bd7b8[_0x9dfed(0x650)+'ritte'+'n'])_0x3bd7b8=_0x4a54a1[_0x36a3dd]={'base':_0x2fc626,'lastWritten':null};var _0x3ead4e=_0x21be6c['vanJL'](_0x3bd7b8[_0x9dfed(0x35d)],_0x413885[_0x9dfed(0x23c)+'r']);if(_0x21be6c['pRIXq'](_0x2478c5,_0x180d92,_0x2de544,_0x9dfed(0x2a7),_0x3ead4e)){if(_0x21be6c[_0x9dfed(0x31d)](_0x9dfed(0x1f7),_0x9dfed(0x1f7))){var _0x74e269=_0x365b84[_0x580580],_0x529e0c=typeof _0x29ad10[_0x74e269];_0x5b34cb[_0x74e269]=_0x529e0c==='undef'+_0x9dfed(0x300)?_0x21be6c[_0x9dfed(0x5bc)]:_0x529e0c;}else _0x3bd7b8['lastW'+_0x9dfed(0x4b2)+'n']=_0x3ead4e,_0x35c5c0++;}}}}}var _0x553681={'FPScontroller':[[-0xb9d*-0x2+0x1c9+0x1*-0x18f3,'obfF'],[0x3*0x761+-0xada+-0xb21,_0x21be6c[_0x275951(0x652)]],[0xb08+0x219*-0x8+-0x600*-0x1,'obfF'],[0x124d*0x2+0x1555*0x1+-0x17*0x281,'obfF'],[-0x380+-0x2b+-0x1*-0x41b,_0x21be6c[_0x275951(0x652)]],[-0x254b+0x1*-0x7ce+0x2da1,_0x21be6c[_0x275951(0x652)]],[0x2ef+-0x1*0x1485+0x1236,_0x275951(0x2a7)],[0x812*-0x4+0x1116*-0x1+0x6*0x859,_0x21be6c['OoBPq']],[0x1369*0x2+0x20*-0x9+-0x24ee,'obfF'],[0x1af*-0xd+-0x4*-0x695+0x1*-0x395,_0x21be6c['UuaOL']],[-0x475*0x1+0x19c1+-0x146c,'v3'],[0x5*0x3f7+-0x2*-0x77c+-0x21df,'u8'],[0x1*0x1f0d+-0x572+-0x1*0x18ab,'obfF'],[-0x2058+0x3a*0x1d+0x1ace,_0x21be6c['UuaOL']],[-0x5f3+0x1*0x14ad+-0xdae,'u8'],[-0x2*-0x8b+-0x24e9+0x1*0x24e3,'i32'],[0x1*-0x1142+-0x1499*-0x1+0x3*-0xc1,'u8'],[0x14*-0x14e+-0x1873+0x33a0,'u8'],[-0xe54+0x144d+-0x4dd,_0x21be6c[_0x275951(0x652)]],[-0x25b8+0x1fa8+0x744,'obfF'],[-0xee8+-0x29*-0xb+0xe71*0x1,_0x21be6c['ExmyP']],[0xaeb+0xd6c*0x1+-0x189*0xf,_0x21be6c['ExmyP']],[-0xcb7*-0x3+-0x1*-0x135+-0x13a*0x1f,'v3'],[0xd97+-0xe5*0xe+0x4f,'v3'],[0x2fe*-0xc+0x13af+0x11a5*0x1,_0x21be6c[_0x275951(0x549)]],[-0x50a+-0x1a3c+0x20b6,_0x21be6c[_0x275951(0x549)]],[-0x122d+0xec*-0x21+0x29*0x139,'u8'],[-0xaa9+0x1*-0xb8b+0x17c0,_0x21be6c[_0x275951(0x549)]],[-0x5ab*-0x2+0x1*-0x1d6f+0x13b1,'v3'],[0x138b+0xfb3+-0xb*0x30e,'u8'],[-0x1bc9*0x1+0x7b*0x13+0x145c*0x1,_0x275951(0x1fa)],[-0xe*-0x2a+0x3c*-0x2f+0xa70,_0x21be6c['ExmyP']],[0x11be+0x2104+0x3106*-0x1,'u8'],[-0x1fe3+-0xa*0x32f+0x4176,'u8'],[0xe*0xb9+-0x3*0xc77+0x1d07*0x1,'obfF'],[-0x1*-0x230b+-0x769+0x19ca*-0x1,_0x275951(0x1fa)],[-0x232a+-0x12e*-0x21+-0x4*0x7a,'u8'],[-0x479+-0x220d+0x1433*0x2,_0x275951(0x2a7)],[-0x28f*-0x2+-0x721*0x2+0xb1c,'v3'],[-0x381+-0x1*-0x1367+0x19*-0x8e,_0x275951(0x4cd)],[0x1394+-0xa*-0xde+-0x1a28,_0x21be6c[_0x275951(0x549)]],[-0xd53+0x1a23+-0xab4,_0x275951(0x1fa)],[-0x3b4*0x9+-0x2144*-0x1+-0x25c*-0x1,_0x275951(0x1fa)],[0xdbd+-0x535+0x638*-0x1,_0x275951(0x1fa)],[-0x201a+0x2*0x88d+-0x8aa*-0x2,'f32'],[0x246b+-0x1f77+-0x29c,_0x21be6c[_0x275951(0x549)]],[0x205e+0x2*0xc4c+-0x369a,'u8'],[0x2348+0xc49*0x2+-0x397d,'u8'],[0x2*0x29+-0xf0c+0x1118,'u8'],[-0x3d5*0x9+-0xa25+-0x2f02*-0x1,'f32'],[0x1add+0x3e2+-0x1c5b,'u8'],[-0x1*-0x13bd+0x26cd+0x1*-0x3825,'u8'],[0x7*-0x257+0x703+-0x89*-0x16,_0x275951(0x1fa)],[-0x2d1+0x20fe*0x1+-0x1bc1,'f32'],[-0x639+0x3*-0x11b+0xbfa,_0x21be6c[_0x275951(0x549)]],[-0x1e98+0xdd9*-0x1+0x6b3*0x7,_0x21be6c['ExmyP']],[0x1ba1+0x4*-0x841+0x7db*0x1,_0x275951(0x1fa)],[-0x19e7+0x269a+-0xa37,_0x275951(0x1fa)],[0x16a3+0x10e2*-0x2+0xda1,_0x21be6c['ExmyP']],[0x1f*0xee+-0xb4f*0x1+-0xeff,'v3'],[-0x10b7+-0x73*0x2a+0x2629,'u8'],[-0xf2d+-0x178b+0x2950,'v3'],[-0x4*-0x3f1+0x23*-0x7f+0x7*0x9b,_0x21be6c['ExmyP']],[-0x2*-0x1eb+0x977*-0x1+0x84d,'v3'],[0x3*-0xb23+0x61*0x18+0x301*0x9,_0x21be6c[_0x275951(0x549)]],[-0x5*-0x265+-0x2303+0x19c6,_0x275951(0x1fa)],[-0x299+0x1583+0x815*-0x2,'f32'],[0xa78*-0x1+0x2390+-0x1654*0x1,'u8'],[-0xb41+-0x11*-0x6b+0x6eb,'u8'],[-0xeab+-0xaf9*0x1+-0x1ac*-0x11,_0x21be6c[_0x275951(0x549)]],[0x1f1*-0x1+0x973+-0x4a6,'f32'],[0x1baa+-0x16*-0x17+0x1ac*-0x10,'v3'],[-0x99b+-0x2b9*-0xd+-0x16da,'v3'],[-0x1c9b*0x1+-0x12c4+-0x10c9*-0x3,_0x275951(0x1fa)],[0xe*-0x13d+0x20d4+-0xc7e,_0x21be6c['ExmyP']],[-0x1cd0*0x1+-0x1e2b+0x3dff,_0x275951(0x1fa)],[0x3*0xcad+0x1271+0x11d*-0x30,_0x275951(0x1fa)],[0xd21+-0x22d*0x1+0x1*-0x7e8,'v3'],[0x227e+-0x10dc+0x1*-0xe8a,'u8'],[-0x6bb*-0x3+-0x4*-0x30a+-0x1*0x1d3d,'v3'],[0x646+-0x23de*0x1+-0x20c0*-0x1,'i32'],[0x3e*-0x8b+0x24e0+-0xa,_0x275951(0x1fa)],[-0xf*-0x257+-0x3*0x22c+-0x1965,'f32'],[-0x1c18+0x1ae7+0x465,'f32'],[-0x7f*-0x17+-0x17f+-0x1e*0x39,'f32'],[0x29*0x91+0x38+-0x1431,'u8'],[-0x239+0x21aa+-0x1c30,'u8'],[0x48*0x76+-0x233*0x7+0x3*-0x4d5,'u8'],[0x1e6c+0xc7*-0x1f+0x12*-0x2b,'u8'],[-0x706*-0x1+0x2c*0x79+-0x1884,'u8'],[0x1b62+0x1794+0x1*-0x2fa6,_0x21be6c['ExmyP']],[0x25e9+-0xd0*-0xc+-0x2c55,_0x275951(0x1fa)],[0x2244+-0x15b7+-0x935,_0x21be6c['ExmyP']],[-0x17c0+-0x1643+0x315f,_0x21be6c[_0x275951(0x549)]],[-0x1c9e+0x3ad+-0x1c51*-0x1,_0x21be6c[_0x275951(0x549)]],[0x1a97+-0x19a6*0x1+0x273,'u8'],[-0x1*-0x1bb6+-0x4f2+-0x135c,_0x275951(0x1fa)],[0x3*0x1a2+0x1ef5+-0x13*0x1b5,_0x21be6c['ExmyP']],[-0x18*0xc2+-0x2e4*0x3+0x2*0xf26,'u8'],[0xe19+0x7*0x4a3+-0x2b16,'v3'],[0x1e12+0x9*0x242+-0x2ee0,'v3'],[0x1724+0x22dc+-0x3670,'v3'],[-0x110f+0x1b49*-0x1+0x2ff4,_0x21be6c['ExmyP']],[-0x1df4+0x122c+0xf68,_0x275951(0x1fa)],[0x579*0x1+0x7*0x2dd+-0x15e0,'f32'],[-0x22cf+0x26a7+-0x4*0xc,'v3'],[0x11fc+-0x21c9+0x1381,_0x21be6c['UuaOL']],[0x1*0x1acb+-0x15*-0x77+0x1d3*-0x12,'u8'],[0x1d5e+-0x1b1*-0xf+-0x3301,_0x21be6c[_0x275951(0x495)]],[0x1b8f+0x2*0xb5f+0x1*-0x2e8d,_0x275951(0x1fa)],[0x2e2+0x5b*-0x5d+0x1*0x21f1,'f32'],[0x8d3+0x1c74+-0xaf*0x31,_0x21be6c['ExmyP']],[-0x23b6+-0x25ab+-0x1*-0x4d2d,_0x275951(0x1fa)],[-0x190b+0x1f06+-0x22b,'v3'],[0x1484+-0x1746+0x69e,_0x21be6c[_0x275951(0x495)]],[-0xa24+-0x1*-0xb0f+0x2f5*0x1,'u8'],[-0x3*0xa96+-0xb67+0x12*0x29d,'u8'],[0x25ec+-0x1789+0xa81*-0x1,'u8'],[0x4*-0x893+-0x57c+-0xaeb*-0x4,'f32'],[-0x3*-0x4d1+0x2c*0x74+-0x1e7b,_0x21be6c[_0x275951(0x495)]]],'HealthScript':[[-0xfbb*0x1+-0xf9a*-0x1+0x79,'u8'],[-0x26aa+-0x19*-0x6b+0x1c93,'i32'],[-0xf6+-0x2158+0x3de*0x9,_0x21be6c['ExmyP']],[0x167c+0x20e3*-0x1+0xaeb,_0x21be6c[_0x275951(0x549)]],[-0x1d02+-0xc96+0x2a20,'f32'],[-0x95*0x3e+0xa92+0x684*0x4,_0x21be6c[_0x275951(0x549)]],[-0xd*-0x1e2+0x16*0xcb+-0x295c,_0x21be6c['ExmyP']],[-0x15ef+0x25ad*-0x1+-0x3*-0x1410,_0x275951(0x1fa)],[0x432+-0x741+0x3af,_0x275951(0x2bf)],[0x19*0x21+-0xc*-0xab+-0xa99,'i32'],[-0x199b+-0x262+0x1ca5,'u8'],[0x2178+-0x18b*0x13+0x95*-0x6,'u8'],[0x1065*0x2+0x3c+-0x205c,'u8'],[0x1486+-0x2162+0xd87*0x1,'u8'],[0x1124+-0x106*-0xb+-0x1ba6,_0x21be6c[_0x275951(0x520)]],[0x16*0x8b+0xcf*-0x17+0x17f*0x5,'obfI'],[0x17*0x167+-0x29*0x8b+-0x916,_0x275951(0x4f4)],[-0x10ab+0x1442*0x1+-0x1*0x29b,_0x275951(0x4f4)],[0x185f+0x6fd*0x3+-0x2c46,'obfI'],[-0x1afd+-0xea7+0x2ac8,_0x21be6c['OoBPq']],[0x26*0x2+0x82f+-0x1*0x74b,_0x275951(0x2a7)],[-0x2b2+0x1f*0x8a+-0xcbc,_0x275951(0x1fa)],[-0x13cb+0x273+-0x4*-0x4a9,_0x21be6c['ExmyP']],[-0x19ec+0x1*0xd86+0xdb6,_0x275951(0x1fa)],[0x1973+0x1*0x20a7+0x1a*-0x22f,_0x275951(0x1fa)],[-0x4f4+-0x1*-0x1f9+0x457,_0x275951(0x1fa)],[-0x2*0x623+0x48a+0x91c,'v3'],[-0x19f*0x1+-0x20f8+0x2407,'f32'],[0x2177+0x2*-0x7f+-0x1f01*0x1,_0x275951(0x1fa)],[-0xad*0x17+-0x1952+0x3*0xe1f,'u8'],[-0x104a+-0x9b*0x1+0x1271,'u8'],[0x3*-0x81e+0x144f+0x59b,_0x275951(0x2bf)]],'PlayerConfig':[],'WeaponManager':[[-0x451+-0x7e2+-0x3*-0x419,'i32'],[-0xd52+-0x73c+0x422*0x5,_0x275951(0x2bf)],[0x46*0x1b+0x2660+-0x2da2,'u8'],[0x2fa*0x5+0x1a6e+-0x292c,_0x275951(0x2bf)],[-0x2332+-0x1ab1+0x95*0x6b,_0x21be6c[_0x275951(0x652)]],[-0xa26+-0x1529*0x1+0x1fcb,_0x275951(0x1fa)],[0x1*0xde5+-0x2*0xb11+0x8c1*0x1,_0x21be6c[_0x275951(0x495)]],[-0x1f*0x71+0x192a+-0xaf3,'u8'],[0x1670+0x97c+-0x5*0x647,'u8'],[0x2131+0x4*-0x2b7+-0xa9*0x21,_0x275951(0x2bf)],[0xcc2+-0x1311*-0x1+-0x1f43,'f32'],[-0xcbb+-0x1*0x1b15+0x2868,_0x275951(0x1fa)],[0x3*-0x445+0x2*-0x5ab+0x18d1,_0x275951(0x2bf)],[-0x21c+0x14cd+0x1*-0x11f5,'u8'],[-0x1*-0x79a+-0x4*-0x49c+-0x192e,_0x275951(0x4f4)],[-0xd9c+-0x7b8+0x1644,_0x275951(0x4f4)],[0x2*0x10a5+0x2643+0x1*-0x4689,_0x275951(0x1fa)],[0x1f*0x111+-0x1*-0x1f9b+-0x2*0x1fd1,_0x275951(0x1fa)],[0xb23*0x3+-0x1ed1+0x3*-0x84,_0x275951(0x1fa)],[-0x1fc*-0x5+0x24fe+0x8a*-0x55,_0x275951(0x1fa)],[-0x4cd*-0x5+0x1e8d+0x356e*-0x1,_0x275951(0x1fa)],[0x6*-0x12d+-0x5c2+0xdf8,'u8'],[0x24bb*0x1+-0xb*-0x36f+0x34*-0x169,_0x21be6c[_0x275951(0x520)]],[-0x1d7d*-0x1+0x1487+-0x2*0x1862,'obfI'],[0x1745+-0x8*-0x449+-0x3839,'obfI'],[0x1*0x7b5+-0x2420+0x9f1*0x3,_0x275951(0x4cd)],[-0x2588+0x13f6+0x1306,_0x275951(0x4cd)],[-0x17*-0x12c+-0x25c3+-0x17*-0x89,_0x21be6c['OoBPq']],[-0x1cad+-0x22df+-0x823*-0x8,_0x275951(0x4cd)],[-0x244b+0x2554+0x9b,_0x275951(0x4cd)],[-0xbdf+0x1606*0x1+0x1*-0x877,_0x275951(0x4f4)],[0x5*-0x18f+-0xef*-0x19+-0xdc0,_0x21be6c[_0x275951(0x495)]],[-0xe67+-0x1a4d*-0x1+0xa16*-0x1,'u8'],[-0x2388+-0x15a2+0x3afe,_0x275951(0x2bf)],[0x1bd+0xb65+0x22*-0x55,_0x275951(0x2bf)],[-0x3f7+-0x1158+0x174f*0x1,_0x275951(0x2bf)],[-0x13*-0x20+0x1abd+-0x1b09,'u8'],[0x2267*0x1+0x3e5*0x3+-0x2bfa,'u8'],[-0xe86+0x19b+0xf08,'u8'],[0x1f4c+0xc9a+-0x29c8,'u8'],[0x1*0x251b+-0xcb6*-0x2+-0x3c68,'u8'],[0x779*-0x2+-0x1fd1+0x3113,'i32'],[0x9d2+-0x3*0x7af+0xf93*0x1,'u8']],'GG_GameManager':[[0xf*0x1ed+-0x1b6a+0x155*-0x1,'u8'],[0x1*-0x1db6+-0x2d3+0x3*0xae7,_0x21be6c[_0x275951(0x549)]],[0x7*-0x20f+-0xf79+0x1e26,'u8'],[0x2f1+-0x3*0x6bb+-0x45*-0x41,'u8'],[-0xfa*-0x1+-0x205*0xb+0x7*0x313,'f32'],[0x7*0x14d+0x1273+-0x1b42,_0x275951(0x1fa)],[0x12bf*0x1+0x26*0xc5+-0x989*0x5,'i32'],[0x1*0xdd1+0xb9+-0x2*0x71b,_0x275951(0x2bf)],[0x1*0x2593+0x2702*-0x1+0x1c7,'u8'],[0x149b+-0x5*-0x2af+-0x2192,'u8'],[-0x1816+0x26*-0x63+0x9d*0x40,_0x275951(0x1fa)],[0x20d5+0x2ab+-0x2304,_0x21be6c['ExmyP']],[0x997+0x1370+-0x1c77,_0x275951(0x2bf)],[0x1cab+0x2152+-0x3d69,'u8'],[0x1850+-0x2*0x356+-0x21e*0x8,'i32'],[-0xed5*0x1+-0xd*-0xe6+0x3e3,_0x21be6c['UuaOL']],[-0x1925+0x2466+-0xa81,'i32'],[-0x217e+-0x20ee+-0x2*-0x21aa,_0x21be6c['thrKS']],[0x2493+-0xebd+-0x14da,'obfI'],[0x14ed+0x1*-0x2059+0xc7c,_0x275951(0x4f4)],[0x2268+-0xe91+-0x9*0x213,'u8'],[-0x1852+-0x24a9+0x3e2b*0x1,_0x275951(0x2bf)],[0x1b57+-0x66e+-0x1385,'u8'],[-0x1ab4*0x1+-0x1ae3+-0x3707*-0x1,_0x21be6c['ExmyP']],[0x21f8+0x20cd+-0x4145,'u8'],[-0x1c49+-0x1be0+0x39b1,'u8'],[0x1450+0x1*-0x15be+0x2*0x189,'u8'],[0x1*-0x248e+-0x1*-0x1606+0x1030,_0x21be6c[_0x275951(0x495)]],[-0x548+-0xa2c+-0x1*-0x1120,_0x21be6c['ExmyP']],[-0x1*0x3df+0x1*-0x1543+0x1ad2,'u8'],[-0x2*0x1274+-0x1c8b+0x4324,'u8'],[-0x13c4+0x29*-0x37+0x1e4b,_0x21be6c[_0x275951(0x495)]],[-0x24f+0x620+-0x215,_0x275951(0x2bf)],[-0x6e7+0x27*-0xc2+0x2635,_0x21be6c['ExmyP']],[-0x1c53+0x115d+0x9*0x16a,_0x275951(0x2bf)],[-0x5*0x445+-0x1225+0x2946,_0x21be6c['ExmyP']],[0xaa*-0x32+0x85d+-0x8e1*-0x3,_0x21be6c['UuaOL']],[0x17af+0x1c91+0x3270*-0x1,'i32']],'EnemyBot':[[-0x249b+0x1bba+-0x5*-0x1cd,_0x21be6c['ExmyP']],[0x1284+0xd42+0xfd1*-0x2,'v3'],[0x46d*0x3+-0x23df+0x16c8,'u8'],[0x1a8*-0x8+-0x1ae1+-0x19d*-0x19,_0x275951(0x1fa)],[-0x1297+0x19*0xdf+-0x2f8,_0x21be6c[_0x275951(0x549)]],[-0x1bb*0x13+0x11ed+-0x1e6*-0x8,'u8'],[-0x1*0x12fd+0xf49*-0x1+0x2*0x1145,_0x21be6c['ExmyP']],[-0xbf1+-0x14e0+-0x25*-0xe5,_0x21be6c['ExmyP']],[0x6bb+0x1362+-0x19d1,'u8'],[-0x3*0x9ad+0x31+0x1d23,'u8']]},_0x1ce22d={};function _0x475f03(_0x146893,_0x5726fa,_0x4f974d){var _0x146489=_0x275951,_0x3dd90e={'lUPdD':_0x146489(0x1fa),'yvXyM':_0x21be6c[_0x146489(0x4e2)],'lxUmI':_0x21be6c['uScVL'],'IdoMZ':_0x21be6c[_0x146489(0x1ed)],'xQxFn':function(_0x51b0f9,_0x1f4eff){var _0x330b04=_0x146489;return _0x21be6c[_0x330b04(0x610)](_0x51b0f9,_0x1f4eff);},'czGWs':_0x21be6c[_0x146489(0x281)],'uaocK':_0x146489(0x2f6),'ZLNtx':function(_0x233561,_0x142beb){return _0x233561-_0x142beb;},'xsPUq':_0x146489(0x656)+_0x146489(0x576),'PZxtT':function(_0x6086e0){return _0x21be6c['OMGcu'](_0x6086e0);},'ZQrEG':function(_0x5906c7,_0x2b5a7a){var _0x2a78c3=_0x146489;return _0x21be6c[_0x2a78c3(0x651)](_0x5906c7,_0x2b5a7a);},'PFHop':_0x21be6c[_0x146489(0x245)]};return _0x21be6c[_0x146489(0x479)]('UAzuR','mNyZY')?_0xb96b10(_0x4594ac[_0x146489(0x29b)]+_0x38ecfe,_0x146489(0x266)):function(_0x985ee9){var _0x141ddd=_0x146489,_0x3e53a0={'rtnxn':function(_0x503f6a,_0x1318e2){return _0x503f6a&_0x1318e2;},'TKEFr':function(_0x43106e,_0x6aa9ea){return _0x43106e&_0x6aa9ea;},'WzsSk':_0x3dd90e[_0x141ddd(0x498)]};try{var _0x72329b=_0x985ee9&&_0x985ee9[_0x141ddd(0x5b5)]?_0x985ee9[_0x141ddd(0x5b5)]():0x201a+-0x1aba+-0x10*0x56;if(!_0x72329b)return;if(_0x4f974d){if(_0x141ddd(0x5d7)!==_0x3dd90e[_0x141ddd(0x5cf)]){if(!_0x1ce22d[_0x72329b])_0x1ce22d[_0x72329b]={'ptr':_0x72329b,'firstSeen':Date['now'](),'hits':0x0};_0x1ce22d[_0x72329b]['hits']++;}else return _0x2e1a44[-0x1664+-0xa3*-0xb+0x5*0x314]===_0x3dd90e['lUPdD'];}else{if(_0x141ddd(0x365)!==_0x3dd90e[_0x141ddd(0x19c)]){var _0x462f70=_0x4e8d6c[_0x146893];if(!_0x462f70||_0x462f70['ptr']!==_0x72329b){_0x4e8d6c[_0x146893]={'ptr':_0x72329b,'firstSeen':Date[_0x141ddd(0x3c5)](),'hits':0x0,'replaced':!!_0x462f70};try{if(_0x3dd90e['xQxFn'](_0x3dd90e[_0x141ddd(0x532)],_0x3dd90e[_0x141ddd(0x467)])){var _0x43c50d=_0x58e02a[_0x141ddd(0x226)+'r'](function(_0x4ab0b8){var _0x9ca81c=_0x141ddd;return _0x4ab0b8[_0x9ca81c(0x2ed)]===_0x146893;})[-0x1f84+0x1e7+0x1d9d];_0x1d7cb1={'type':_0x146893,'atMs':_0x3dd90e['ZLNtx'](Date['now'](),_0xa4994f),'originalFunc':!!(_0x43c50d&&_0x43c50d[_0x141ddd(0x1ef)]&&typeof _0x43c50d[_0x141ddd(0x1ef)][_0x141ddd(0x337)+'nalFu'+'nc']===_0x3dd90e[_0x141ddd(0x5f0)]),'resolveGameAtFire':!!_0x3dd90e['PZxtT'](_0x3633a4),'gameSourceAtFire':_0x5470a2[_0x141ddd(0x3b0)+'e']};}else{var _0x294e63=new _0x511ced('sakur'+_0x141ddd(0x40b));_0x294e63[_0x141ddd(0x4a0)+_0x141ddd(0x5fa)+'e'](_0x37dacb),_0x31e6b8(function(){var _0x5e4d43=_0x141ddd;try{_0x294e63[_0x5e4d43(0x263)]();}catch(_0x3feab9){}},0x1*0xdcb+-0x155a+0x889);}}catch(_0x3489d2){}}}else try{_0x19e23e['textC'+_0x141ddd(0x485)+'t']=_0x16c142(_0x2eb4c9);}catch(_0x6a849b){_0x442798['textC'+_0x141ddd(0x485)+'t']=_0x9f737b['strin'+'gify'](_0x4c41,null,0x4cb+0xca2+-0x5*0x37c);}}if(_0x3dd90e['ZQrEG'](_0x146893,_0x3dd90e[_0x141ddd(0x27b)])&&_0x413885['on'])try{_0x46ebe8(_0x72329b);}catch(_0x555abc){}if(!_0x5726fa){var _0x43c50d=_0x58e02a['filte'+'r'](function(_0x5ca679){var _0x1fc247=_0x141ddd,_0x9794d8={'ijhBV':function(_0x4743bd,_0x380637){var _0x167378=_0x111b;return _0x3e53a0[_0x167378(0x394)](_0x4743bd,_0x380637);},'RyCRj':function(_0x40872c,_0x1a4966){return _0x3e53a0['TKEFr'](_0x40872c,_0x1a4966);},'mhAFF':function(_0x2ae6a0,_0x56a80b){return _0x2ae6a0===_0x56a80b;},'NpTMr':'obfI'};if(_0x3e53a0['WzsSk']==='nZkWj'){var _0x289a35=('1|3|0'+_0x1fc247(0x620)+_0x1fc247(0x49d)+'|5|9')['split']('|'),_0x16d2f8=-0x126a*-0x1+0x1*0x1fad+-0x1*0x3217;while(!![]){switch(_0x289a35[_0x16d2f8++]){case'0':if(!_0x33f6cc)return null;continue;case'1':var _0x5ac7a4=_0x250f91[_0x825c9];continue;case'2':var _0x293823=new _0x5d9c7a(_0x33f6cc['buffe'+'r'],_0x33f6cc['byteO'+'ffset'],_0x33f6cc['byteL'+_0x1fc247(0x4d5)]);continue;case'3':var _0x33f6cc=_0x2e2ee7(_0x5902ad,_0x826c5b,_0x5ac7a4[_0x1fc247(0x47b)]);continue;case'4':var _0xebf0ed=_0x9794d8[_0x1fc247(0x63e)](_0x293823[_0x1fc247(0x49c)+'nt8'](_0x5ac7a4[_0x1fc247(0x3a1)+'d']),0xb2*-0x2f+-0x977*-0x3+0x44a);continue;case'5':var _0x1b9ea3=_0x9794d8['RyCRj'](_0x293823['getUi'+_0x1fc247(0x51e)](_0x5ac7a4[_0x1fc247(0x222)+'e']),0x110e+0x1a98+-0x2ba5);continue;case'6':var _0x43d639=_0x293823[_0x1fc247(0x47e)+'t32'](_0x5ac7a4['key'],!![]);continue;case'7':var _0x5a54ef=_0x29861f===_0x1fc247(0x2a7)?_0x293823['getFl'+_0x1fc247(0x4a1)](_0x5ac7a4[_0x1fc247(0x4ef)],!![]):_0x131f13==='obfI'?_0x293823[_0x1fc247(0x47e)+'t32'](_0x5ac7a4[_0x1fc247(0x4ef)],!![]):_0x293823[_0x1fc247(0x49c)+_0x1fc247(0x51e)](_0x5ac7a4[_0x1fc247(0x4ef)]);continue;case'8':var _0x327475=_0x293823[_0x1fc247(0x47e)+_0x1fc247(0x23d)](_0x5ac7a4[_0x1fc247(0x458)+'n'],!![]);continue;case'9':return{'keyAtOffset0':_0x43d639,'hidden':_0x327475,'inited':_0xebf0ed,'fake':_0x5a54ef,'act':_0x1b9ea3,'hex':_0x5b83f4(_0x33f6cc),'alt':_0x9794d8[_0x1fc247(0x2f7)](_0x1f9d45,_0x9794d8[_0x1fc247(0x548)])?_0x327475^(_0x5a54ef|0x2*0xd6d+0x76*0x2e+-0x300e):null};}break;}}else return _0x5ca679[_0x1fc247(0x2ed)]===_0x146893;})[0x17*-0x1a5+-0x1*-0x9ce+-0x3*-0x957];if(_0x43c50d&&_0x43c50d['hook'])try{_0x43c50d['hook'][_0x141ddd(0x463)+'ed']=![];}catch(_0x4139c0){}}}catch(_0x3b23ec){}};}function _0x4cef25(){var _0x199041=_0x275951,_0x21b6cf={'rpiRd':'#ffb3'+'c7','PEZDt':function(_0x3ee2ce,_0xfa07b4){return _0x3ee2ce+_0xfa07b4;},'qwYEJ':function(_0x7e626f,_0x2325c1){return _0x7e626f+_0x2325c1;},'gEyWo':function(_0x1efa07,_0x4353b9){return _0x1efa07+_0x4353b9;},'LQbtL':_0x199041(0x41f)+_0x199041(0x257)+_0x199041(0x514)+_0x199041(0x42a)+_0x199041(0x459)+_0x199041(0x628)+_0x199041(0x425)+'e\x20rep'+_0x199041(0x4d6)+'\x0a','FdMJC':_0x199041(0x297)+_0x199041(0x3ef)+_0x199041(0x1b2)+'es\x20th'+_0x199041(0x5e6)+'rscri'+_0x199041(0x3fe)+'\x20inst'+_0x199041(0x317)+_0x199041(0x450)+'runni'+_0x199041(0x578)+_0x199041(0x407)+_0x199041(0x5bf)+_0x199041(0x255),'UGPxz':'so\x20th'+_0x199041(0x424)+'ainin'+_0x199041(0x20a)+_0x199041(0x60a)+'\x20are:'+'\x0a\x0a'};if(_0x58e02a[_0x199041(0x350)+'h'])return!![];if(!window[_0x199041(0x5d4)+'WebMo'+_0x199041(0x427)]||!window[_0x199041(0x5d4)+'WebMo'+_0x199041(0x427)]['Runti'+'me'])return![];var _0x56a9e8=window[_0x199041(0x5d4)+_0x199041(0x207)+_0x199041(0x427)]['Runti'+'me'];if(!_0x56a9e8[_0x199041(0x5df)+'ns']||!_0x56a9e8[_0x199041(0x5df)+'ns']['lengt'+'h'])return![];_0x35dc26=window[_0x199041(0x5d4)+_0x199041(0x207)+'dkit'][_0x199041(0x437)+_0x199041(0x2a3)+'er'],_0x13ee58=_0x13ee58||_0x56a9e8['plugi'+'ns'][_0x56a9e8[_0x199041(0x5df)+'ns']['lengt'+'h']-(-0x17b5+-0x925+0x20db)];if(!_0x13ee58||_0x21be6c[_0x199041(0x31d)](typeof _0x13ee58['hookP'+'refix'],_0x21be6c['jCSvr']))return![];for(var _0x3ac24c=-0x2636+-0xccf+-0x161*-0x25;_0x3ac24c<_0x5887d1['lengt'+'h'];_0x3ac24c++){if('gJxTH'!==_0x199041(0x233))_0x2c87ed();else{var _0x12be70=_0x5887d1[_0x3ac24c];try{var _0x13e7f0=_0x13ee58[_0x199041(0x3b9)+'refix']({'typeName':_0x12be70['type'],'methodName':_0x21be6c[_0x199041(0x348)],'params':['i32',_0x199041(0x2bf)],'returnType':undefined},_0x475f03(_0x12be70[_0x199041(0x2ed)],_0x12be70['keep'],_0x12be70[_0x199041(0x3d8)]));_0x58e02a[_0x199041(0x545)]({'type':_0x12be70['type'],'hook':_0x13e7f0,'keep':_0x12be70['keep']});}catch(_0x27d1e9){if(_0x21be6c[_0x199041(0x34e)]('VLzGx',_0x199041(0x625)))_0xc9aed6[_0x199041(0x545)](_0x21be6c[_0x199041(0x33d)](_0x21be6c['NqPbs'](_0x12be70['type'],':\x20'),_0x21be6c[_0x199041(0x426)](String,_0x27d1e9&&_0x27d1e9[_0x199041(0x5d3)+'ge']||_0x27d1e9)[_0x199041(0x3f1)](-0x24ec+0x1*0xb8+-0x90d*-0x4,0x1887+-0x39a+-0x144d)));else{if(_0x1ec95d)return;if(!_0x550dc6||!_0xdf2a50)return;_0x1499dd['textC'+_0x199041(0x485)+'t']=_0x199041(0x33e)+_0x199041(0x218)+'after'+'\x2060s\x20'+'—\x20fra'+'me\x20no'+_0x199041(0x4c6)+_0x199041(0x43d)+'?',_0x58f5ad[_0x199041(0x3dd)]['color']=_0x21b6cf[_0x199041(0x470)],_0x52a286['textC'+_0x199041(0x485)+'t']=_0x21b6cf[_0x199041(0x2af)](_0x21b6cf['PEZDt'](_0x21b6cf[_0x199041(0x505)](_0x21b6cf[_0x199041(0x607)](_0x21b6cf['qwYEJ'](_0x21b6cf['LQbtL'],_0x21b6cf[_0x199041(0x4b6)]),_0x21b6cf[_0x199041(0x3ca)]),'\x20\x201.\x20'+_0x199041(0x1cf)+'rmonk'+_0x199041(0x3ed)+'\x20not\x20'+'injec'+'ting\x20'+_0x199041(0x35a)+'the\x20c'+_0x199041(0x5ce)+'origi'+'n\x20ifr'+'ame.\x0a')+(_0x199041(0x2f0)+_0x199041(0x53c)+'age\x20h'+_0x199041(0x27f)+'t\x20bee'+_0x199041(0x2ff)+_0x199041(0x277)+'\x20sinc'+_0x199041(0x4ed)+_0x199041(0x2e3)+_0x199041(0x475)),_0x199041(0x2e8)+_0x199041(0x552)+_0x199041(0x4d8)+_0x199041(0x623)+'llwar'+'z.use'+_0x199041(0x621)+'AND\x20t'+_0x199041(0x2b4)+_0x199041(0x58f)+_0x199041(0x5eb)+'ipt\x20a'+_0x199041(0x4b9)),'\x20\x20\x20\x20\x20'+_0x199041(0x370)+_0x199041(0x328)+'—\x20two'+_0x199041(0x244)+_0x199041(0x284)+'\x20UWMK'+'\x20both'+_0x199041(0x602)+'h\x20Web'+_0x199041(0x3b8)+'bly.i'+'nstan'+'tiate'+_0x199041(0x4e5))+(_0x199041(0x60c)+'d\x20the'+'\x20game'+_0x199041(0x56b)+'\x20once'+'\x20and\x20'+'watch'+_0x199041(0x393)+'\x20pane'+_0x199041(0x53e)+_0x199041(0x36f));}}}}return _0x58e02a[_0x199041(0x350)+'h']>0x23f8+-0x2246+0x3e*-0x7;}function _0x2fd237(){var _0x44cff5=_0x275951;if(_0x21be6c['MxqjP'](_0x44cff5(0x2dc),_0x44cff5(0x55d))){if(_0x3396c0[_0x44cff5(0x3de)]===_0x44cff5(0x58c)){_0x3b27dd()['set']({'host':_0x3d60b7[_0x44cff5(0x5c5)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x30e771['kind']==='repor'+'t')_0x47dd5c()[_0x44cff5(0x49f)](_0x6a8aff['repor'+'t']);}else{var _0x15baf3=-0x1376+0xc07+0x76f;for(var _0x11dd88=0x1*-0x1e3f+-0x171c+0x355b;_0x11dd88<_0x58e02a[_0x44cff5(0x350)+'h'];_0x11dd88++){if(_0x58e02a[_0x11dd88][_0x44cff5(0x1ef)]&&_0x21be6c['QhkxH'](_0x58e02a[_0x11dd88]['hook']['table'+'Index'],undefined))_0x15baf3++;}return _0x15baf3;}}function _0x53f5fd(){var _0x2d5096=_0x275951,_0x387f21=0x2b*-0x23+-0x1*0x91e+-0x1*-0xeff;for(var _0x5e4de6=0x1f44+0xa13*0x3+-0x247*0x1b;_0x5e4de6<_0x58e02a[_0x2d5096(0x350)+'h'];_0x5e4de6++){if(_0x58e02a[_0x5e4de6]['hook']&&_0x58e02a[_0x5e4de6][_0x2d5096(0x1ef)]['appli'+'ed'])_0x387f21++;}return _0x387f21;}var _0x4c4454=null,_0x3fe6f8=[],_0x3fdc92={},_0x1d7cb1=null;function _0x4a6974(_0x59a87c){var _0x340d1d=_0x275951;try{if(_0x340d1d(0x585)!=='EouWl'){if(_0x21be6c[_0x340d1d(0x3ac)](!_0x35dc26,!_0x59a87c))return null;var _0x4365ae=new _0x35dc26(_0x59a87c)[_0x340d1d(0x494)+_0x340d1d(0x4ab)+'me']();return _0x4365ae===undefined?null:_0x4365ae;}else _0x3a812e=_0x7e7dd8,_0x268733=_0x21be6c[_0x340d1d(0x4d4)](_0x5d7af8['now'](),_0x3086d1);}catch(_0x512ed9){return null;}}function _0x3a2369(_0x26e2c5,_0x41736f,_0x4d1a95){var _0xc0ac31=_0x275951;if(_0x21be6c['dhkAE'](_0x21be6c[_0xc0ac31(0x64d)],_0x21be6c['towhk'])){var _0x5ba99a=_0x1dcdb0();if(!_0x5ba99a)return null;if(_0x21be6c['zXukE'](_0x41736f,0x15ef+-0x72*0x4e+-0x1d*-0x71)||_0x21be6c[_0xc0ac31(0x2cd)](_0x41736f+_0x4d1a95*(-0x24e2+-0x1d39+-0x421f*-0x1),_0x5ba99a['byteL'+'ength']))return null;var _0x158175=[];for(var _0x1f3ac2=0x2127+-0x1a35+0xe*-0x7f;_0x1f3ac2<_0x4d1a95;_0x1f3ac2++)_0x158175['push'](_0x5ba99a['getFl'+_0xc0ac31(0x4a1)](_0x21be6c[_0xc0ac31(0x643)](_0x21be6c['ImfQJ'](_0x26e2c5,_0x41736f),_0x21be6c[_0xc0ac31(0x45e)](_0x1f3ac2,0x6*-0x71+0xc0b*0x2+-0x156c)),!![]));return _0x5470a2['ok']+=_0x4d1a95,_0x158175;}else return _0x5b39f5['type']===_0x3d3bfc;}function _0xbc01f9(){var _0x40708f=_0x275951,_0x52ea96={'FaMYY':function(_0x3ceee9,_0x44ec03){var _0x1b5f5f=_0x111b;return _0x21be6c[_0x1b5f5f(0x59a)](_0x3ceee9,_0x44ec03);},'AOeQf':function(_0x2b93d5,_0x35eec7,_0x471e31){return _0x2b93d5(_0x35eec7,_0x471e31);},'rNJPj':'f32','LgHvO':_0x21be6c[_0x40708f(0x2b2)]};if(_0x21be6c[_0x40708f(0x22c)]===_0x21be6c['BSwbe']){var _0x1518d6={'enemies':[],'camera':null,'playerList':null,'wasmTypes':null},_0x313856=Object[_0x40708f(0x3d1)](_0x1ce22d);for(var _0x5bbef3=0x1ea2+0x927+-0x27c9;_0x21be6c[_0x40708f(0x492)](_0x5bbef3,_0x313856[_0x40708f(0x350)+'h'])&&_0x5bbef3<-0xb*0x3b+0xf97*-0x1+0x1238;_0x5bbef3++){var _0x21f4b8=_0x1ce22d[_0x313856[_0x5bbef3]],_0x568e2e=_0x553681[_0x40708f(0x4c8)+_0x40708f(0x521)]||[],_0xf6837e={'ptr':_0x21be6c['OGjlM']('0x',_0x21f4b8[_0x40708f(0x29b)][_0x40708f(0x60f)+_0x40708f(0x385)](-0x3d*0x49+0x5ad*-0x3+0x227c)),'hits':_0x21f4b8[_0x40708f(0x604)],'pos':null};for(var _0x4d41db=-0x1ab1+0x16cf+0x8e*0x7;_0x4d41db<_0x568e2e[_0x40708f(0x350)+'h'];_0x4d41db++){if(_0x568e2e[_0x4d41db][-0x5*0x5f9+-0x1491+0x326f]!=='v3')continue;_0xf6837e['pos']=_0x3a2369(_0x21f4b8['ptr'],_0x568e2e[_0x4d41db][0x1be8+-0x2fa+0x18ee*-0x1],-0x7*0xd9+-0x1*-0x15dd+0x5*-0x32f),_0xf6837e[_0x40708f(0x59b)]='0x'+_0x568e2e[_0x4d41db][-0x1*0xcdd+-0x4*-0x473+-0x4ef][_0x40708f(0x60f)+_0x40708f(0x385)](0x1*0x1399+-0x1dfd*-0x1+-0x3186);break;}_0xf6837e['scala'+'rs']=_0x568e2e[_0x40708f(0x226)+'r'](function(_0xcaad3b){var _0x5450fa=_0x40708f;return _0x52ea96[_0x5450fa(0x4a2)](_0xcaad3b[0x1*-0x18fd+0x9b3+0xf4b],'f32');})[_0x40708f(0x3cc)](function(_0x42ab88){var _0x5332a8=_0x40708f;return{'o':_0x42ab88[0x2208+-0x157f+0xc89*-0x1],'v':_0x52ea96['AOeQf'](_0x2b5f25,_0x21f4b8[_0x5332a8(0x29b)]+_0x42ab88[-0x397*-0x1+-0x845+0x4ae],_0x52ea96['rNJPj'])};})[_0x40708f(0x226)+'r'](function(_0x429f9a){return _0x429f9a['v']!==undefined&&isFinite(_0x429f9a['v']);})[_0x40708f(0x3f1)](-0xecc+-0x227c+-0x4*-0xc52,0x524+-0x3c*-0x7c+0x32*-0xaf),_0x1518d6[_0x40708f(0x519)+'es'][_0x40708f(0x545)](_0xf6837e);}_0x1518d6[_0x40708f(0x48d)+_0x40708f(0x59c)]=_0x313856['lengt'+'h'];var _0x3fe61e=_0x4e8d6c['GG_Ga'+_0x40708f(0x36b)+_0x40708f(0x421)];if(_0x3fe61e&&_0x3fe61e[_0x40708f(0x29b)]){if(_0x21be6c['YfoIg']('DzdKI','DzdKI'))_0x25666c['hasMo'+'dule']=![],_0x486e95[_0x40708f(0x619)+'8']=![],_0x3e7224[_0x40708f(0x327)+_0x40708f(0x5b7)]=-0x543+0x627*-0x1+0xb6a;else{var _0xcad25d=_0x21be6c[_0x40708f(0x2aa)](_0x2b5f25,_0x21be6c['fSPYK'](_0x3fe61e['ptr'],0x3*0xb75+0xdc5+-0x3010),_0x21be6c['OzFZR']),_0x197934=_0x2b5f25(_0x21be6c[_0x40708f(0x436)](_0x3fe61e[_0x40708f(0x29b)],0xaa4+0x1*0x1177+0x1bbf*-0x1),'u32');_0x1518d6[_0x40708f(0x29f)+'a']=_0xcad25d?_0x21be6c['awdbc']('0x',_0x21be6c[_0x40708f(0x235)](_0xcad25d,-0xc2*0x18+0x1055*0x1+0x1db)['toStr'+_0x40708f(0x385)](0x1*0x413+-0x127b+0xe78)):null,_0x1518d6[_0x40708f(0x2b6)+_0x40708f(0x4c1)]=_0x197934?_0x21be6c[_0x40708f(0x543)]('0x',(_0x197934>>>-0x12*-0x175+0x1176*0x2+-0x6*0xa31)['toStr'+'ing'](0x25cb+-0x1cfb+-0x8c0)):null,_0x1518d6[_0x40708f(0x286)+'anage'+'r']={'camRaw':_0xcad25d,'listRaw':_0x197934,'nearCam':[0x72f*0x2+0x8*0x99+-0x1316,-0x1e0e+0x1*-0xf6+0x1f18,0x14f7+-0x2*0x1042+0xba5*0x1,-0x8e4*0x1+-0xaa*-0x11+0x2*-0x125][_0x40708f(0x3cc)](function(_0x20fd67){var _0x5467e2=_0x40708f;return _0x2b5f25(_0x3fe61e['ptr']+_0x20fd67,_0x52ea96[_0x5467e2(0x1c4)]);}),'nearList':[-0x1bfd*0x1+0x1364+0x3*0x2e3,0x1*0x18e5+0x1751+-0x3022,0x36d+0x1*0x23d+-0x1f*0x2e,0x127*-0x1f+-0x15*0xb9+0x3302][_0x40708f(0x3cc)](function(_0x127d09){var _0x1268ea=_0x40708f;return _0x2b5f25(_0x21be6c[_0x1268ea(0x584)](_0x3fe61e['ptr'],_0x127d09),_0x21be6c['OzFZR']);})};}}try{var _0x2cc14a=('2|0|1'+_0x40708f(0x5b6))['split']('|'),_0x5053d2=0x2*-0x566+0x4*-0x7de+0x2a44;while(!![]){switch(_0x2cc14a[_0x5053d2++]){case'0':var _0x3f158b=_0x2bd7f3&&_0x2bd7f3['inter'+'nalWa'+_0x40708f(0x1b0)+'es']||[];continue;case'1':var _0x22b690={};continue;case'2':var _0x2bd7f3=window[_0x40708f(0x5d4)+_0x40708f(0x207)+_0x40708f(0x427)]&&window[_0x40708f(0x5d4)+'WebMo'+_0x40708f(0x427)]['Runti'+'me'];continue;case'3':for(var _0x895e5b=-0x1*-0x1d21+-0x1*-0x1c01+-0x1c91*0x2;_0x895e5b<_0x3f158b[_0x40708f(0x350)+'h']&&_0x21be6c[_0x40708f(0x1eb)](_0x895e5b,-0xb*0x24+-0x13ea+0x128b*0x2);_0x895e5b++){var _0x3683ed=_0x21be6c[_0x40708f(0x3f2)](_0x21be6c[_0x40708f(0x37b)](_0x3f158b[_0x895e5b]['param'+'s'][_0x40708f(0x453)](','),_0x21be6c[_0x40708f(0x428)]),_0x3f158b[_0x895e5b]['retur'+_0x40708f(0x3c7)]||_0x21be6c[_0x40708f(0x303)]);_0x22b690[_0x3683ed]=(_0x22b690[_0x3683ed]||0x25*0xb9+0x8b3+-0x2370)+(-0xf7b+-0x152b+0xb*0x355);}continue;case'4':_0x1518d6[_0x40708f(0x5ef)+_0x40708f(0x2fb)]=_0x22b690;continue;}break;}}catch(_0x25676f){}return _0x1518d6;}else{var _0x43eac4=_0xc2ccb4[_0x40708f(0x5d4)+'WebMo'+_0x40708f(0x427)]&&_0x1084ff['Unity'+_0x40708f(0x207)+_0x40708f(0x427)][_0x40708f(0x538)+'me'];if(_0x43eac4&&typeof _0x43eac4[_0x40708f(0x366)+_0x40708f(0x56c)+'e']===_0x40708f(0x656)+'ion'){var _0x441985=_0x43eac4[_0x40708f(0x366)+'veGam'+'e']();if(_0x441985)return _0x2b6dbd[_0x40708f(0x3b0)+'e']=_0x40708f(0x538)+'me.re'+_0x40708f(0x379)+_0x40708f(0x46f)+')',_0x441985;}if(_0x43eac4&&_0x43eac4['_game'])return _0x2caded[_0x40708f(0x3b0)+'e']=_0x21be6c[_0x40708f(0x2e4)],_0x43eac4;}}function _0x3066e2(){var _0x53ebb1=_0x275951,_0x5ead5b={};_0x5470a2['ok']=0x665*-0x5+0x2*0xc82+0x6f5,_0x5470a2['faile'+'d']=-0xf*0x269+-0x2*-0x2b4+0x1ebf*0x1,_0x5470a2[_0x53ebb1(0x28a)+'rror']=null;var _0x5f15b1=Object['keys'](_0x553681);for(var _0x3d5de4=0x16e4+-0x2*-0x471+0x48a*-0x7;_0x21be6c[_0x53ebb1(0x589)](_0x3d5de4,_0x5f15b1[_0x53ebb1(0x350)+'h']);_0x3d5de4++){var _0x51cd8f=_0x5f15b1[_0x3d5de4],_0x2e6a8e=_0x4e8d6c[_0x51cd8f];if(!_0x2e6a8e||!_0x2e6a8e[_0x53ebb1(0x29b)])continue;var _0x414de6=_0x553681[_0x51cd8f]||[],_0x2227ad=[];for(var _0x4f6304=0x1d*0xbf+0x18e6+0x169*-0x21;_0x4f6304<_0x414de6['lengt'+'h'];_0x4f6304++){var _0x38a8db=_0x414de6[_0x4f6304][-0x2120+-0xcc2+0x2de2],_0x38d77b=_0x414de6[_0x4f6304][-0x1ef0+0x19*0x151+-0x38*0x9];if(_0x38d77b[_0x53ebb1(0x51a)+'Of'](_0x21be6c[_0x53ebb1(0x38d)])===0x1676+-0x3bd*0x1+0x12b9*-0x1){if(_0x21be6c[_0x53ebb1(0x3c2)]('IsVSQ',_0x21be6c['FdpMA']))return _0x16df2a[_0x53ebb1(0x3b0)+'e']=_0x53ebb1(0x538)+'me.re'+_0x53ebb1(0x379)+_0x53ebb1(0x46f)+')',_0x12a95b;else{var _0x18d6ae=_0x21be6c[_0x53ebb1(0x338)](_0x6ad263,_0x2e6a8e[_0x53ebb1(0x29b)],_0x38a8db,_0x38d77b);if(!_0x18d6ae)continue;_0x18d6ae['o']=_0x38a8db,_0x18d6ae['k']=_0x38d77b,_0x2227ad['push'](_0x18d6ae);}}else{var _0xd32bc1=_0x2b5f25(_0x2e6a8e['ptr']+_0x38a8db,_0x38d77b);if(_0xd32bc1===undefined)continue;_0x2227ad[_0x53ebb1(0x545)]({'o':_0x38a8db,'k':_0x38d77b,'v':_0xd32bc1});}}if(_0x2227ad['lengt'+'h']){var _0xd8f87c=_0xf3070(_0x2227ad);_0x5ead5b[_0x51cd8f]=_0xd8f87c['rows'],_0x3fdc92[_0x51cd8f]={'key':_0xd8f87c[_0x53ebb1(0x614)],'sane':_0xd8f87c[_0x53ebb1(0x517)],'checked':_0xd8f87c['check'+'ed'],'keyConsistent':_0xd8f87c['keyCo'+'nsist'+'ent'],'keySource':_0xd8f87c[_0x53ebb1(0x352)+'urce']};}}return _0x5ead5b;}function _0xf3070(_0x4ed447){var _0x23b785=_0x275951,_0x3eab33={'WnwoT':function(_0x1dce62,_0x563e4f){return _0x21be6c['dhkAE'](_0x1dce62,_0x563e4f);},'FqUzI':_0x21be6c[_0x23b785(0x362)],'tcTqn':_0x23b785(0x5df)+'n._ru'+_0x23b785(0x59f)+'._gam'+'e'};if(_0x21be6c['QuXJE']!==_0x23b785(0x335)){var _0x421aa9=_0x5163e8[_0x23b785(0x4fa)+'ime'];if(_0x3eab33[_0x23b785(0x26e)](typeof _0x421aa9['resol'+_0x23b785(0x56c)+'e'],_0x23b785(0x656)+'ion')){var _0x523847=_0x421aa9[_0x23b785(0x366)+_0x23b785(0x56c)+'e']();if(_0x523847)return _0x4a0b71['sourc'+'e']=_0x3eab33[_0x23b785(0x50e)],_0x523847;}if(_0x421aa9[_0x23b785(0x2fc)])return _0x38d988[_0x23b785(0x3b0)+'e']=_0x3eab33['tcTqn'],_0x421aa9['_game'];}else{var _0x28dbd8=0x1*-0x2527+-0x53*0x56+0x4109,_0x52886b=0x90a*-0x3+-0x1f61+-0x257*-0x19,_0x2ba535=null;for(var _0x58925c=0x1b15+-0x318+-0x10b*0x17;_0x21be6c[_0x23b785(0x589)](_0x58925c,_0x4ed447[_0x23b785(0x350)+'h']);_0x58925c++){if(_0x23b785(0x57f)!==_0x21be6c['fvBqR'])_0x23db95++,_0x323a81[_0x23b785(0x517)]=!![];else{var _0x204542=_0x4ed447[_0x58925c];if(_0x21be6c['Evamh'](_0x204542['k'][_0x23b785(0x51a)+'Of'](_0x23b785(0x278)),0x5c0+-0x3*-0x4cd+-0x1427))continue;_0x204542['v']=_0x11cf2f(_0x204542['k'],_0x204542[_0x23b785(0x458)+'n'],_0x204542['keyAt'+_0x23b785(0x646)+'t0']),_0x204542[_0x23b785(0x3f3)+'ed']=_0x204542[_0x23b785(0x216)+_0x23b785(0x646)+'t0'],_0x204542[_0x23b785(0x309)]=_0x21be6c['ESFmL'](_0x21be6c[_0x23b785(0x570)]('hid='+_0x204542[_0x23b785(0x458)+'n']+(_0x23b785(0x220)+'='),_0x204542[_0x23b785(0x4ef)])+(_0x204542[_0x23b785(0x4d3)]?_0x21be6c['eyKHJ']:'')+_0x21be6c[_0x23b785(0x2ee)],_0x204542['keyAt'+_0x23b785(0x646)+'t0'])+_0x21be6c[_0x23b785(0x522)]+_0x204542[_0x23b785(0x1ab)];if(_0x2ba535===null)_0x2ba535=_0x204542[_0x23b785(0x216)+'Offse'+'t0'];_0x52886b++;if(_0x5c1416(_0x204542)){if('ApZjn'===_0x23b785(0x4e8))_0x28dbd8++,_0x204542[_0x23b785(0x517)]=!![];else return _0xe8465a[_0x23b785(0x56a)+'d']++,_0x2f50e3['lastE'+_0x23b785(0x363)]=_0xefb012['lastE'+'rror']||_0x21be6c[_0x23b785(0x24d)],_0x38c8f9;}else _0x204542['sane']=![];delete _0x204542[_0x23b785(0x3d2)];}}return{'rows':_0x4ed447,'key':_0x2ba535,'sane':_0x28dbd8,'checked':_0x52886b,'keyConsistent':_0x18cd6e(_0x4ed447),'keySource':'offse'+'t\x200\x20('+'int-w'+'idth)'};}}function _0x18cd6e(_0x50f006){var _0x32e236=_0x275951;if(_0x32e236(0x42b)!==_0x32e236(0x42b))try{_0x2e4225();}catch(_0x18202e){}else{var _0x12d11d={};for(var _0x2a577a=-0x5*-0x577+-0x1b1c+-0x37;_0x2a577a<_0x50f006['lengt'+'h'];_0x2a577a++){var _0x2d777c=_0x50f006[_0x2a577a];if(_0x2d777c['k']['index'+'Of'](_0x32e236(0x278))!==-0xd2*0x29+-0x16e*0x1b+0x605*0xc)continue;if(_0x12d11d[_0x2d777c['k']]===undefined)_0x12d11d[_0x2d777c['k']]=_0x2d777c[_0x32e236(0x3f3)+'ed'];else{if(_0x12d11d[_0x2d777c['k']]!==_0x2d777c['keyUs'+'ed'])return![];}}return!![];}}function _0x5c1416(_0x2531ea){var _0x25d512=_0x275951,_0x4350e2={'pudzv':function(_0x425c76,_0x37040a){var _0x3030e3=_0x111b;return _0x21be6c[_0x3030e3(0x570)](_0x425c76,_0x37040a);},'dYkwJ':_0x25d512(0x3e3)+_0x25d512(0x366)+'ved\x20'};if(_0x21be6c[_0x25d512(0x4cf)]!=='HKclx'){var _0x1da390=_0x2531ea['v'];if(_0x21be6c[_0x25d512(0x1ff)](typeof _0x1da390,_0x21be6c['Qcqsa'])||!isFinite(_0x1da390))return![];if(_0x2531ea['k']===_0x21be6c[_0x25d512(0x547)])return _0x1da390===-0x29+-0x20c6+0x20ef*0x1||_0x21be6c['ixqPn'](_0x1da390,0x715+-0x92*0x28+-0xfbc*-0x1);var _0x2997df=_0x2531ea[_0x25d512(0x4ef)];if(typeof _0x2997df!==_0x25d512(0x22a)+'r'||!_0x21be6c['OFlDM'](isFinite,_0x2997df))return!![];if(_0x2531ea['act']===0x1*0x166f+0x6a+-0x16d8)return _0x21be6c[_0x25d512(0x555)](Math['abs'](_0x1da390-_0x2997df),Math['max'](0xe2*-0xd+-0x1*0x1fd+0xd78,Math[_0x25d512(0x3e7)](_0x2997df)*(-0x1f3*0xc+0x3e9*0x5+0x1*0x3d7+0.6)));return Math[_0x25d512(0x3e7)](_0x1da390)<0x115fc607+0xa3830a2+0x25f9*0xd7cf;}else _0x3af92b['warni'+'ngs'][_0x25d512(0x545)](_0x4350e2[_0x25d512(0x418)](_0x4350e2['dYkwJ']+_0x3f9ad6['hooks'+_0x25d512(0x582)+'ved']+'\x20of\x20'+_0x441beb[_0x25d512(0x478)+'Total']+('\x20hook'+'(s)\x20t'+'o\x20a\x20t'+'able\x20'+_0x25d512(0x51a)+_0x25d512(0x36c)+'appli'+_0x25d512(0x423)+'ne.\x20T'+'he\x20si'+_0x25d512(0x274)+_0x25d512(0x28c)),_0x25d512(0x1c1)+_0x25d512(0x1e9)+_0x25d512(0x1f3)+_0x25d512(0x40c)+_0x25d512(0x4e4)+'id\x20do'+'es\x20no'+_0x25d512(0x1fc)+'ch\x20th'+'is\x20bu'+'ild.'));}function _0x2d63b2(){var _0x400e86=_0x275951,_0x1fd365={'qsVHc':function(_0x54563b,_0x4d7c94){return _0x54563b+_0x4d7c94;}},_0x587c11={};try{var _0x27d66a=window[_0x400e86(0x5d4)+_0x400e86(0x207)+'dkit']&&window[_0x400e86(0x5d4)+_0x400e86(0x207)+'dkit']['Runti'+'me'];_0x587c11[_0x400e86(0x4b3)]=_0x27d66a&&_0x27d66a[_0x400e86(0x561)+'uraTa'+'g']||null,_0x587c11['tagMa'+_0x400e86(0x38f)]=!!(_0x21be6c[_0x400e86(0x30d)](_0x27d66a,_0x56ed44)&&_0x21be6c['Hloov'](_0x27d66a[_0x400e86(0x561)+_0x400e86(0x653)+'g'],_0x56ed44)),_0x587c11[_0x400e86(0x361)+'meGam'+'e']=_0x27d66a&&_0x27d66a[_0x400e86(0x2fc)]?typeof _0x27d66a['_game']:_0x21be6c['MPMIy'],_0x587c11[_0x400e86(0x5df)+'nRunt'+'imeIs'+_0x400e86(0x61b)+'ted']=!!(_0x13ee58&&_0x13ee58[_0x400e86(0x4fa)+_0x400e86(0x52a)]&&_0x13ee58[_0x400e86(0x4fa)+'ime']===_0x27d66a),_0x587c11[_0x400e86(0x5df)+_0x400e86(0x1d9)+_0x400e86(0x1b9)+'me']=_0x13ee58&&_0x13ee58[_0x400e86(0x4fa)+'ime']&&_0x13ee58['_runt'+_0x400e86(0x52a)][_0x400e86(0x2fc)]?typeof _0x13ee58['_runt'+'ime'][_0x400e86(0x2fc)]:_0x21be6c[_0x400e86(0x632)];}catch(_0x30deb7){_0x21be6c[_0x400e86(0x635)]!==_0x21be6c[_0x400e86(0x635)]?_0x4b9bda['warni'+_0x400e86(0x304)][_0x400e86(0x545)](_0x1fd365[_0x400e86(0x1e2)]('rebui'+_0x400e86(0x535)+_0x400e86(0x259)+_0x400e86(0x2fd)+'captu'+_0x400e86(0x206)+_0x400e86(0x22d)+_0x400e86(0x616),_0x13d5d7[_0x400e86(0x370)+'ncesR'+_0x400e86(0x5e1)+'ed'][_0x400e86(0x453)](',\x20'))):_0x587c11[_0x400e86(0x1f1)]=String(_0x30deb7&&_0x30deb7['messa'+'ge']||_0x30deb7);}return _0x587c11;}function _0x83b9fd(){var _0x442481=_0x275951,_0x383b02=[_0x442481(0x2ce)+'Insta'+_0x442481(0x3db),'unity'+'Game',_0x21be6c['akeia'],'unity'+_0x442481(0x2d0)+_0x442481(0x4cc)+_0x442481(0x61e)],_0x2d436d={};for(var _0xf86ffb=-0x3f1*-0x8+0x1a3*-0xe+-0x89e;_0x21be6c['twYuX'](_0xf86ffb,_0x383b02[_0x442481(0x350)+'h']);_0xf86ffb++){var _0x556e11=_0x383b02[_0xf86ffb],_0x1dcd8c=typeof window[_0x556e11];_0x2d436d[_0x556e11]=_0x1dcd8c===_0x21be6c[_0x442481(0x5bc)]?_0x442481(0x2d2)+'ined':_0x1dcd8c;}var _0x547412=_0x3633a4();_0x2d436d['gameS'+_0x442481(0x48c)]=_0x5470a2[_0x442481(0x3b0)+'e'];try{_0x2d436d[_0x442481(0x1d0)+_0x442481(0x419)]=!!(_0x547412&&_0x547412[_0x442481(0x1c9)+'e']),_0x2d436d['heapU'+'8']=!!(_0x547412&&_0x547412['Modul'+'e']&&_0x547412[_0x442481(0x1c9)+'e'][_0x442481(0x399)+'8']),_0x2d436d['heapB'+_0x442481(0x5b7)]=_0x2d436d[_0x442481(0x619)+'8']?_0x547412[_0x442481(0x1c9)+'e'][_0x442481(0x399)+'8']['lengt'+'h']:0x1e9d+-0x1*0xfcc+0x1*-0xed1;}catch(_0x57f3d1){_0x2d436d[_0x442481(0x1d0)+_0x442481(0x419)]=![],_0x2d436d[_0x442481(0x619)+'8']=![],_0x2d436d['heapB'+_0x442481(0x5b7)]=-0x1458+0x10b7+0x3a1;}return _0x2d436d['value'+_0x442481(0x2a3)+'er']=typeof _0x35dc26,_0x2d436d;}function _0x569ae2(_0xfa4213){var _0x335fb6=_0x275951,_0x5c78d0={'LAeMl':function(_0x49b435,_0x375936){return _0x21be6c['GICZZ'](_0x49b435,_0x375936);},'iJNDS':_0x21be6c['xDHTi'],'rOIxS':_0x335fb6(0x38e)+'\x20heap'+_0x335fb6(0x276)+'0x'};if(_0x21be6c[_0x335fb6(0x5a1)](_0x21be6c[_0x335fb6(0x493)],_0x21be6c[_0x335fb6(0x48e)])){var _0x3a9b6c={};for(var _0x3a3bd1 in _0xfa4213){var _0x37a40f=_0xfa4213[_0x3a3bd1];for(var _0x5102b0=-0x1*-0x1bcd+-0x2*-0xf5a+-0x3a81;_0x21be6c['SnOgz'](_0x5102b0,_0x37a40f[_0x335fb6(0x350)+'h']);_0x5102b0++){_0x21be6c['jMWwq']('ApNog',_0x21be6c['kyKka'])?_0x53952d[_0x866af4+'+0x'+_0x34f7f9[_0x5844e7]['o'][_0x335fb6(0x60f)+_0x335fb6(0x385)](0x13*0x1cb+0x11f+-0x2320)]=_0x374218[_0x279bde]['v']:_0x3a9b6c[_0x21be6c[_0x335fb6(0x4f1)](_0x3a3bd1+_0x335fb6(0x516),_0x37a40f[_0x5102b0]['o'][_0x335fb6(0x60f)+_0x335fb6(0x385)](-0x1a65*0x1+-0x2*-0x146+-0x1*-0x17e9))]=_0x37a40f[_0x5102b0]['v'];}}return _0x3a9b6c;}else return _0x6954c4['faile'+'d']++,_0x538c7e[_0x335fb6(0x28a)+_0x335fb6(0x363)]=_0x36fde2['lastE'+_0x335fb6(0x363)]||_0x5c78d0['LAeMl'](_0x5c78d0[_0x335fb6(0x2d3)]+(_0x5acb26+_0x4974e0)['toStr'+_0x335fb6(0x385)](-0x7a+0x25c8+-0x253e)+_0x5c78d0['rOIxS'],_0x4dd88b[_0x335fb6(0x30f)+'ength'][_0x335fb6(0x60f)+'ing'](0x153*0x11+0x28f+-0xc2*0x21)),null;}function _0x511082(_0x1fc069,_0x4da4a6){var _0x2a6566=_0x275951;if(_0x21be6c['dhkAE'](_0x1fc069,'speed')){if(_0x4da4a6&&_0x21be6c['MxqjP'](typeof _0x4da4a6['on'],_0x21be6c['GnCTF']))_0x413885['on']=_0x4da4a6['on'];_0x4da4a6&&_0x21be6c[_0x2a6566(0x203)](typeof _0x4da4a6[_0x2a6566(0x23c)+'r'],'numbe'+'r')&&(_0x413885[_0x2a6566(0x23c)+'r']=Math[_0x2a6566(0x310)](-0x21fb+-0x1b59+-0x1*-0x3d59,Math[_0x2a6566(0x2c5)](-0xb84+0xfde+0x3*-0x173,_0x4da4a6[_0x2a6566(0x23c)+'r'])));if(!_0x413885['on'])_0x4a54a1={};return;}if(_0x21be6c[_0x2a6566(0x5a1)](_0x1fc069,_0x2a6566(0x63f)+_0x2a6566(0x599)))return;var _0x595f1c=_0x3066e2(),_0xbd3384=_0x21be6c['PevzG'](_0x569ae2,_0x595f1c);if(!_0x4c4454){_0x4c4454=_0xbd3384,_0x3fe6f8=[],_0x18df9f('repor'+'t',{'report':_0x1aff5f()});return;}_0x3fe6f8=[];for(var _0x2b68dd in _0xbd3384){var _0x44d57d=_0x4c4454[_0x2b68dd],_0x58d9e1=_0xbd3384[_0x2b68dd];if(_0x44d57d!==_0x58d9e1)_0x3fe6f8[_0x2a6566(0x545)](_0x21be6c[_0x2a6566(0x5d2)](_0x2b68dd+':\x20'+_0x44d57d,'\x20->\x20')+_0x58d9e1);}_0x4c4454=_0xbd3384,_0x18df9f(_0x2a6566(0x648)+'t',{'report':_0x1aff5f()});}window[_0x275951(0x247)+'entLi'+_0x275951(0x5f6)+'r'](_0x275951(0x524)+'wn',function(_0x55cb80){var _0x1b27d6=_0x275951;if(_0x1b27d6(0x403)===_0x21be6c[_0x1b27d6(0x29d)])_0x55cb80&&_0x55cb80[_0x1b27d6(0x204)]==='F9'&&(_0x55cb80[_0x1b27d6(0x2e1)+_0x1b27d6(0x46c)+_0x1b27d6(0x254)](),_0x21be6c[_0x1b27d6(0x568)](_0x511082,_0x1b27d6(0x63f)+'hot'));else{var _0x1cc4d=_0x2045bf[_0x1b27d6(0x1aa)](this,arguments);try{if(_0x1cc4d&&typeof _0x1cc4d[_0x1b27d6(0x596)]==='funct'+'ion')_0x1cc4d['then'](_0x4f727c,function(){});else _0x2591e7(_0x1cc4d);}catch(_0x42a029){}return _0x1cc4d;}},!![]);function _0x1aff5f(){var _0x547ebb=_0x275951,_0x56059a={'ZVhRc':'rgba('+_0x547ebb(0x358)+_0x547ebb(0x4bc)+_0x547ebb(0x291)+')','yJURR':function(_0x153c19,_0x3073d8){return _0x21be6c['gOrez'](_0x153c19,_0x3073d8);},'MAztp':_0x21be6c[_0x547ebb(0x2a0)],'gqwqH':function(_0x3a89e3,_0x5eb6ce){var _0x3dcb7a=_0x547ebb;return _0x21be6c[_0x3dcb7a(0x5b0)](_0x3a89e3,_0x5eb6ce);},'WwkCw':function(_0x36043d,_0x34558f){return _0x36043d*_0x34558f;},'VlJlN':function(_0x1654ad,_0x45ba8b){return _0x21be6c['YFWAc'](_0x1654ad,_0x45ba8b);},'DQVtm':function(_0x801862){return _0x801862();}};if(_0x21be6c['aRbsu'](_0x547ebb(0x30a),'MfCCs')){var _0x38b70f=window[_0x547ebb(0x5d4)+'WebMo'+'dkit']&&window[_0x547ebb(0x5d4)+_0x547ebb(0x207)+_0x547ebb(0x427)]['Runti'+'me']||null,_0x51e43f=_0x38b70f&&_0x38b70f[_0x547ebb(0x541)+'pCont'+_0x547ebb(0x52c)],_0x504bca=_0x51e43f&&_0x51e43f['scrip'+_0x547ebb(0x574)],_0x1ce966={},_0x59cabe=[];for(var _0x48687f in _0x4e8d6c){_0x1ce966[_0x48687f]=_0x21be6c['XfIiN']('0x',_0x4e8d6c[_0x48687f]['ptr'][_0x547ebb(0x60f)+_0x547ebb(0x385)](-0x1*-0x9a9+-0xe9a+0x501));if(_0x4e8d6c[_0x48687f]['repla'+_0x547ebb(0x383)])_0x59cabe['push'](_0x48687f);}var _0x2649bb={};for(var _0x36163 in _0x4e8d6c)_0x2649bb[_0x36163]=_0x4a6974(_0x4e8d6c[_0x36163]['ptr']);var _0x18d45b={},_0x3ef1f3=null;try{_0x18d45b=_0x3066e2();}catch(_0x65e58a){if(_0x547ebb(0x455)!==_0x547ebb(0x5c7))_0x3ef1f3=_0x21be6c[_0x547ebb(0x597)](String,_0x65e58a&&_0x65e58a['messa'+'ge']||_0x65e58a);else{_0x55f21c[_0x547ebb(0x378)+_0x547ebb(0x485)+'t']='v'+(_0x36d860['versi'+'on']||'?');var _0x130a2c=_0x4bf1ce,_0x300fb3=_0x3d45c1['versi'+'on']||'';_0x567dd7['style'][_0x547ebb(0x2d7)]=_0x300fb3===_0x130a2c?_0x40a7e6:_0x547ebb(0x3a9)+'74',_0x3c5644[_0x547ebb(0x3dd)]['borde'+_0x547ebb(0x3f0)+'r']=_0x300fb3===_0x130a2c?_0x56059a['ZVhRc']:'#ff6e'+'74';}}var _0x17a9b1={'version':_0x2340e2,'when':new Date()['toISO'+'Strin'+'g'](),'elapsedMs':_0x21be6c['DreFt'](Date[_0x547ebb(0x3c5)](),_0xa4994f),'frame':location[_0x547ebb(0x504)][_0x547ebb(0x3f1)](-0xfb6*0x1+0x3f5*0x5+0x95*-0x7,0x24e6+-0x22c3+0x7*-0x3d),'host':_0x396ef7,'frameRole':_0x3497d5,'uwmk':!!_0x38b70f,'il2CppContext':!!_0x51e43f,'typeCount':_0x504bca?Object[_0x547ebb(0x3d1)](_0x504bca)['lengt'+'h']:null,'arm':_0x29cb12,'assemblies':_0x3311f,'hooksTotal':_0x58e02a[_0x547ebb(0x350)+'h'],'hooksApplied':_0x53f5fd(),'hooksResolved':_0x2fd237(),'hooksRegisteredAtArm':_0x29cb12[_0x547ebb(0x478)+_0x547ebb(0x29c)+_0x547ebb(0x631)]||-0x1*0xc2b+-0x17ab+-0x42*-0x8b,'hookErrors':_0xc9aed6['slice'](0x445*-0x7+-0xd38+0x1*0x2b1b,0x4d8+0x1*0x737+-0xc07),'instances':_0x1ce966,'classNames':_0x2649bb,'instancesReplaced':_0x59cabe,'hookFireProof':_0x1d7cb1,'survey':_0x18d45b,'actkKeys':_0x3fdc92,'surveyRows':Object[_0x547ebb(0x3d1)](_0x18d45b)['reduc'+'e'](function(_0x37595e,_0x274ddb){return _0x37595e+_0x18d45b[_0x274ddb]['lengt'+'h'];},0x1662+0x9fa+-0x205c),'reads':{'ok':_0x5470a2['ok'],'failed':_0x5470a2['faile'+'d'],'lastError':_0x5470a2['lastE'+'rror'],'source':_0x5470a2['sourc'+'e']},'identity':_0x2d63b2(),'globals':_0x83b9fd(),'wasmMemory':{'captured':!!_0x1f92b8,'atMs':_0x208727,'bytes':(function(){var _0x222f0c=_0x547ebb;try{return _0x1f92b8&&_0x1f92b8[_0x222f0c(0x482)+'r']?_0x1f92b8[_0x222f0c(0x482)+'r'][_0x222f0c(0x30f)+'ength']:0xe*-0x1b7+-0x1bec+-0x121*-0x2e;}catch(_0x33fd3a){if(_0x21be6c[_0x222f0c(0x508)](_0x222f0c(0x47a),_0x21be6c['NtCKN']))_0x56059a[_0x222f0c(0x466)](_0x3ef38d,_0x56059a['MAztp']);else return 0xfe7+0x7*-0x335+0x68c;}}()),'exportKeys':_0x11b3e4},'diff':_0x3fe6f8['slice'](-0x22fe+0x2c6*-0xb+0x4180,0x71b+-0x1934+0x1*0x1241),'speed':{'on':_0x413885['on'],'factor':_0x413885[_0x547ebb(0x23c)+'r'],'writes':_0x35c5c0},'esp':_0xbc01f9(),'uwmkLog':_0x8c480f[_0x547ebb(0x3f1)](0x270c+0x1a2+-0x28ae,0x18fb+-0x156a*0x1+-0x37d),'warnings':[]};if(_0x3ef1f3)_0x17a9b1[_0x547ebb(0x2f3)+'ngs'][_0x547ebb(0x545)]('surve'+_0x547ebb(0x1b8)+_0x547ebb(0x25e)+_0x3ef1f3);if(_0x29cb12['error'])_0x17a9b1[_0x547ebb(0x2f3)+_0x547ebb(0x304)]['push'](_0x21be6c['SvIiB']+_0x29cb12['error']);_0x17a9b1['surve'+_0x547ebb(0x308)]===0xe91+0x1*0x9c1+0x1852*-0x1&&_0x21be6c[_0x547ebb(0x292)](Object['keys'](_0x17a9b1['insta'+_0x547ebb(0x1d2)])['lengt'+'h'],-0x91c+0x6a*-0x43+-0x2*-0x126d)&&_0x17a9b1['warni'+'ngs']['push'](_0x21be6c[_0x547ebb(0x241)](_0x21be6c[_0x547ebb(0x483)](_0x547ebb(0x21a)+_0x547ebb(0x208),Object[_0x547ebb(0x3d1)](_0x17a9b1['insta'+_0x547ebb(0x1d2)])[_0x547ebb(0x350)+'h'])+(_0x547ebb(0x2ac)+'ct(s)'+_0x547ebb(0x36c)+_0x547ebb(0x3d6)+'0\x20fie'+_0x547ebb(0x2f8)),_0x5470a2[_0x547ebb(0x28a)+_0x547ebb(0x363)]?_0x547ebb(0x507)+'n:\x20'+_0x5470a2['lastE'+_0x547ebb(0x363)]:_0x21be6c['olwLZ']));_0x17a9b1[_0x547ebb(0x5ad)+_0x547ebb(0x30e)]&&_0x21be6c[_0x547ebb(0x234)](_0x17a9b1['ident'+'ity']['tagMa'+_0x547ebb(0x38f)],![])&&_0x17a9b1[_0x547ebb(0x2f3)+_0x547ebb(0x304)][_0x547ebb(0x545)](_0x21be6c['rmIPn'](_0x21be6c['YFWAc'](_0x21be6c['hJxyQ']+(_0x547ebb(0x2a5)+_0x547ebb(0x354)+_0x547ebb(0x2d9)+_0x547ebb(0x405)+_0x547ebb(0x1c7)+_0x547ebb(0x313)+_0x547ebb(0x2b5)+'o\x20we\x20'+_0x547ebb(0x4f7)+'sking'+_0x547ebb(0x407)+'wrong'+_0x547ebb(0x2ac)+'ct\x20fo'+'r\x20'),_0x547ebb(0x1fd)+_0x547ebb(0x380)+_0x547ebb(0x2d5)+'the\x20o'+'ne\x20ho'+_0x547ebb(0x20b)+_0x547ebb(0x47d)+_0x547ebb(0x49e)+_0x547ebb(0x5fe)+'.\x20Dis'+_0x547ebb(0x1e3)+_0x547ebb(0x406)+'\x20othe'+'r\x20'),'Sakur'+_0x547ebb(0x45b)+_0x547ebb(0x630)+_0x547ebb(0x31f)+_0x547ebb(0x20e)+_0x547ebb(0x36d)+_0x547ebb(0x1d4)+_0x547ebb(0x1b5)+'ard-r'+_0x547ebb(0x215)+'.'));_0x17a9b1[_0x547ebb(0x5ad)+_0x547ebb(0x30e)]&&_0x17a9b1['ident'+_0x547ebb(0x30e)][_0x547ebb(0x5df)+_0x547ebb(0x1d9)+_0x547ebb(0x2c3)+_0x547ebb(0x61b)+_0x547ebb(0x431)]===![]&&_0x17a9b1['warni'+_0x547ebb(0x304)][_0x547ebb(0x545)]('plugi'+_0x547ebb(0x200)+'ntime'+_0x547ebb(0x3c3)+'ot\x20wi'+_0x547ebb(0x452)+'Unity'+'WebMo'+_0x547ebb(0x5af)+'Runti'+_0x547ebb(0x3f8)+_0x547ebb(0x5ac)+'lugin'+'\x20was\x20'+_0x547ebb(0x36e)+'\x20'+(_0x547ebb(0x48b)+'st\x20a\x20'+'diffe'+'rent\x20'+'Runti'+_0x547ebb(0x224)+'stanc'+_0x547ebb(0x3af)+'n\x20the'+_0x547ebb(0x44a)+'al\x20no'+'w\x20exp'+_0x547ebb(0x1c3)));if(_0x17a9b1['globa'+'ls']&&!_0x17a9b1['globa'+'ls'][_0x547ebb(0x619)+'8']){if('bYcyN'!==_0x21be6c[_0x547ebb(0x3be)]){var _0x2865cf='';_0x17a9b1[_0x547ebb(0x465)+_0x547ebb(0x25b)+_0x547ebb(0x5db)]&&(_0x2865cf=_0x21be6c['fAeic'](_0x21be6c['zfgWk']+_0x17a9b1[_0x547ebb(0x465)+_0x547ebb(0x25b)+_0x547ebb(0x5db)]['atMs']+_0x21be6c['YWxRf']+_0x17a9b1['hookF'+_0x547ebb(0x25b)+'oof']['origi'+'nalFu'+'nc']+('\x20and\x20'+'game\x20'+_0x547ebb(0x366)+_0x547ebb(0x1a6)),_0x17a9b1['hookF'+_0x547ebb(0x25b)+_0x547ebb(0x5db)]['resol'+'veGam'+_0x547ebb(0x355)+'re'])+_0x21be6c['fGktl']+(_0x17a9b1['hookF'+'irePr'+_0x547ebb(0x5db)]['gameS'+_0x547ebb(0x48c)+'AtFir'+'e']||_0x547ebb(0x4f2))+_0x21be6c['ZbWdb']),_0x17a9b1[_0x547ebb(0x2f3)+_0x547ebb(0x304)][_0x547ebb(0x545)](_0x21be6c['xEYIE'](_0x21be6c['XfIiN'](_0x21be6c[_0x547ebb(0x411)](_0x21be6c[_0x547ebb(0x2bd)](_0x21be6c[_0x547ebb(0x464)],_0x17a9b1[_0x547ebb(0x344)+'ls'][_0x547ebb(0x2fe)+_0x547ebb(0x48c)]||_0x547ebb(0x4f2)),_0x547ebb(0x5ea)),_0x21be6c[_0x547ebb(0x53b)]),_0x2865cf));}else{var _0x59fa1c=_0x21be6c[_0x547ebb(0x2cf)][_0x547ebb(0x19f)]('|'),_0x327a55=0xc5b*0x1+-0x2037+-0x52*-0x3e;while(!![]){switch(_0x59fa1c[_0x327a55++]){case'0':var _0x1bb388=_0x1c0ea9['fake'];continue;case'1':return _0x759fa8[_0x547ebb(0x3e7)](_0x5a80f8)<-0x8c3621*-0x97+0x1*-0x5e0d4ab7+0x46f42740;case'2':if(_0x1cff80[_0x547ebb(0x4d3)]===0x782+-0x38d+0x2c*-0x17)return _0x943ede[_0x547ebb(0x3e7)](_0x21be6c['DreFt'](_0x5a80f8,_0x1bb388))<=_0x51d8e8['max'](-0x1f*-0xb5+-0x1887+0x29d,_0x21be6c['kJPys'](_0x20acc7[_0x547ebb(0x3e7)](_0x1bb388),0xcfd*0x3+-0x1*-0x652+0x2d49*-0x1+0.6));continue;case'3':var _0x5a80f8=_0x801029['v'];continue;case'4':if(typeof _0x1bb388!==_0x547ebb(0x22a)+'r'||!_0x43e03c(_0x1bb388))return!![];continue;case'5':if(_0x21be6c[_0x547ebb(0x64c)](_0x286820['k'],_0x21be6c[_0x547ebb(0x547)]))return _0x5a80f8===-0x3*0x871+-0x3*-0x88f+-0x5a||_0x5a80f8===0x1543+0x1442+-0x2984;continue;case'6':if(_0x21be6c[_0x547ebb(0x5c0)](typeof _0x5a80f8,_0x21be6c['Qcqsa'])||!_0x492183(_0x5a80f8))return![];continue;}break;}}}(_0x17a9b1['globa'+'ls']&&!_0x17a9b1['globa'+'ls']['value'+_0x547ebb(0x2a3)+'er']||_0x17a9b1['globa'+'ls'][_0x547ebb(0x1d7)+'Wrapp'+'er']==='undef'+'ined')&&_0x17a9b1['warni'+'ngs'][_0x547ebb(0x545)](_0x547ebb(0x1bb)+_0x547ebb(0x2d6)+'tyWeb'+_0x547ebb(0x410)+'t.Val'+_0x547ebb(0x32e)+_0x547ebb(0x551)+'is\x20mi'+_0x547ebb(0x523)+_0x547ebb(0x1d3)+'pture'+'\x20is\x20r'+_0x547ebb(0x232)+'g\x20bli'+'nd.');if(_0x17a9b1[_0x547ebb(0x478)+'Total']>-0x32*0x8b+0x1fca+-0x4a4&&_0x21be6c[_0x547ebb(0x490)](_0x17a9b1[_0x547ebb(0x478)+_0x547ebb(0x618)+'ed'],0x761*0x1+0xcd3+0x2*-0xa1a)&&_0x504bca){if('RbRGf'!==_0x21be6c[_0x547ebb(0x657)]){var _0x30de07=_0x413bc0[_0x4ec344],_0x22c566=typeof _0x30de07['v']==='numbe'+'r'?_0x56059a['gqwqH'](_0x200c63[_0x547ebb(0x201)](_0x56059a[_0x547ebb(0x414)](_0x30de07['v'],0x148f+-0x477+-0xc30)),-0x1a*-0xf9+-0x1df9*0x1+0x897):_0x30de07['v'];_0x5cac6f[_0x547ebb(0x545)](_0x56059a[_0x547ebb(0x2a8)]('\x20\x20'+('0x'+_0x30de07['o'][_0x547ebb(0x60f)+'ing'](0x4fe+-0x5b3*0x4+-0x8ef*-0x2))[_0x547ebb(0x62b)+'d'](-0x43f*0x1+0x12ea+-0xea3)+'\x20'+_0x30de07['k']['padEn'+'d'](-0x28d+0x1*0xb02+0x6*-0x167)+'\x20'+_0x56059a[_0x547ebb(0x466)](_0x567d6f,_0x22c566)[_0x547ebb(0x62b)+'d'](-0x7dd+0x202+0x5eb)+'\x20',_0x30de07[_0x547ebb(0x309)]||''));}else{if(_0x21be6c['rzYtE'](_0x17a9b1[_0x547ebb(0x478)+_0x547ebb(0x582)+_0x547ebb(0x19d)],0x1144*-0x2+0x142e+0xe5a)){if(_0x21be6c['mTsEy']===_0x547ebb(0x45f)){if(_0x31b3a1['paren'+'t']&&_0x21be6c['UqAYg'](_0x55f6b1[_0x547ebb(0x591)+'t'],_0x18cb03))_0x2ada85[_0x547ebb(0x591)+'t'][_0x547ebb(0x4a0)+'essag'+'e'](_0x4ba458,'*');if(_0x1be3ee['top']&&_0x21be6c['AVtGC'](_0x192a5b[_0x547ebb(0x28f)],_0x3f6898))_0x3603a7[_0x547ebb(0x28f)]['postM'+_0x547ebb(0x5fa)+'e'](_0x5ad8f1,'*');}else _0x17a9b1[_0x547ebb(0x2f3)+_0x547ebb(0x304)]['push'](_0x21be6c[_0x547ebb(0x275)](_0x21be6c[_0x547ebb(0x3f2)](_0x21be6c[_0x547ebb(0x558)](_0x21be6c[_0x547ebb(0x4fb)](_0x21be6c[_0x547ebb(0x260)]('0\x20of\x20',_0x17a9b1['hooks'+'Total'])+('\x20hook'+'s\x20wer'+'e\x20eve'+_0x547ebb(0x1dd)+'N\x20by\x20'+_0x547ebb(0x5f5)+'\x20The\x20'+_0x547ebb(0x1aa)+_0x547ebb(0x319)+'\x20'),_0x21be6c[_0x547ebb(0x4da)])+(_0x547ebb(0x54c)+_0x547ebb(0x249)+_0x547ebb(0x279)+_0x547ebb(0x3ba)+_0x547ebb(0x518)+_0x547ebb(0x60b)+_0x547ebb(0x3a3)+_0x547ebb(0x592)+_0x547ebb(0x25c)+_0x547ebb(0x1c0)+_0x547ebb(0x624)+_0x547ebb(0x389)+_0x547ebb(0x56b)+'.\x20'),'Regis'+'tered'+'\x20'),_0x17a9b1[_0x547ebb(0x478)+_0x547ebb(0x29c)+_0x547ebb(0x631)+'AtArm']),_0x547ebb(0x3a7)+'(s)\x20d'+'uring'+_0x547ebb(0x501)+'ng\x20at'+'\x20docu'+_0x547ebb(0x500)+_0x547ebb(0x20d)+'.'));}else _0x17a9b1[_0x547ebb(0x2f3)+'ngs'][_0x547ebb(0x545)](_0x21be6c[_0x547ebb(0x21c)](_0x21be6c[_0x547ebb(0x1f2)](_0x547ebb(0x3e3)+'resol'+_0x547ebb(0x20c)+_0x17a9b1[_0x547ebb(0x478)+_0x547ebb(0x582)+_0x547ebb(0x19d)],_0x547ebb(0x46e)),_0x17a9b1['hooks'+_0x547ebb(0x3b1)])+_0x21be6c[_0x547ebb(0x46b)]+_0x21be6c['RAlkc']);}}if(_0x17a9b1[_0x547ebb(0x478)+_0x547ebb(0x618)+'ed']>-0x2230+-0x442+-0x10a*-0x25&&!_0x17a9b1[_0x547ebb(0x370)+'nces'][_0x547ebb(0x3dc)+_0x547ebb(0x5ae)+_0x547ebb(0x3c4)]){if(_0x21be6c[_0x547ebb(0x5cc)]===_0x21be6c[_0x547ebb(0x5cc)])_0x17a9b1[_0x547ebb(0x2f3)+_0x547ebb(0x304)]['push'](_0x21be6c[_0x547ebb(0x5b9)]+_0x21be6c['mQfEZ']);else{_0x561c7d[_0x135356]={'ptr':_0x58c4aa,'firstSeen':_0x51a95e[_0x547ebb(0x3c5)](),'hits':0x0,'replaced':!!_0x48f884};try{var _0x6b93de=_0x380679[_0x547ebb(0x226)+'r'](function(_0x344aef){var _0x3da9e2=_0x547ebb;return _0x344aef[_0x3da9e2(0x2ed)]===_0x305642;})[-0x212a+-0xb82+0x2cac];_0x260478={'type':_0x18a2b9,'atMs':_0x1a0501['now']()-_0x4805fa,'originalFunc':!!(_0x6b93de&&_0x6b93de['hook']&&typeof _0x6b93de[_0x547ebb(0x1ef)]['origi'+'nalFu'+'nc']==='funct'+'ion'),'resolveGameAtFire':!!_0x56059a['DQVtm'](_0x1843c8),'gameSourceAtFire':_0x3384d4[_0x547ebb(0x3b0)+'e']};}catch(_0x371abc){}}}return _0x17a9b1[_0x547ebb(0x370)+'ncesR'+_0x547ebb(0x5e1)+'ed'][_0x547ebb(0x350)+'h']&&_0x17a9b1['warni'+_0x547ebb(0x304)][_0x547ebb(0x545)](_0x547ebb(0x525)+_0x547ebb(0x535)+_0x547ebb(0x259)+_0x547ebb(0x2fd)+_0x547ebb(0x21a)+_0x547ebb(0x206)+_0x547ebb(0x22d)+'n?):\x20'+_0x17a9b1[_0x547ebb(0x370)+_0x547ebb(0x4dc)+'eplac'+'ed'][_0x547ebb(0x453)](',\x20')),_0x17a9b1;}else{var _0x138c01=_0x52c98c[_0x547ebb(0x366)+_0x547ebb(0x56c)+'e']();if(_0x138c01)return _0x33d38a['sourc'+'e']=_0x547ebb(0x5df)+_0x547ebb(0x200)+'ntime'+_0x547ebb(0x540)+'lveGa'+_0x547ebb(0x65a),_0x138c01;}}function _0x462945(_0x49ed9a){var _0x4eeaa2=_0x275951;if(_0x21be6c['BDHPF'](_0x4eeaa2(0x3ae),_0x21be6c[_0x4eeaa2(0x49a)]))console[_0x4eeaa2(0x39f)](_0x4eeaa2(0x290)+_0x4eeaa2(0x575)+_0x4eeaa2(0x590)+'lWarz'+'\x20repo'+'rt',_0x4eeaa2(0x2d7)+':'+_0x525b8f+(_0x4eeaa2(0x58e)+_0x4eeaa2(0x581)+_0x4eeaa2(0x56e)+'0'),_0x49ed9a),console['log'](_0x21be6c[_0x4eeaa2(0x26a)](_0x2aff69+'\x0a'+JSON[_0x4eeaa2(0x24e)+_0x4eeaa2(0x64e)](_0x49ed9a,null,-0x240c+-0x1557+0x4*0xe59)+'\x0a',_0x324a38)),_0x18df9f(_0x21be6c[_0x4eeaa2(0x62d)],{'report':_0x49ed9a});else{if(_0x372de9&&typeof _0x4070c4['on']==='boole'+'an')_0x59b3fc['on']=_0x11b064['on'];_0x29a16d&&typeof _0x58711d['facto'+'r']===_0x21be6c['Qcqsa']&&(_0x57a40f[_0x4eeaa2(0x23c)+'r']=_0x17bf5d[_0x4eeaa2(0x310)](-0x5*-0x607+-0xa1*0x1+-0x1d7d,_0x47cccb[_0x4eeaa2(0x2c5)](0x1*-0x21aa+0x23d6+-0x22b,_0x19e6a8[_0x4eeaa2(0x23c)+'r'])));if(!_0x713637['on'])_0x2bb1da={};return;}}function _0x1f8b9f(){var _0x591e2f=_0x275951;if(_0x21be6c[_0x591e2f(0x5a1)](_0x591e2f(0x528),_0x21be6c['CokNi']))try{return _0x1aff5f();}catch(_0x1ab2d2){return{'version':_0x2340e2,'when':new Date()[_0x591e2f(0x5fb)+_0x591e2f(0x44b)+'g'](),'elapsedMs':Date[_0x591e2f(0x3c5)]()-_0xa4994f,'host':_0x396ef7,'uwmk':!!(window[_0x591e2f(0x5d4)+_0x591e2f(0x207)+'dkit']&&window[_0x591e2f(0x5d4)+_0x591e2f(0x207)+_0x591e2f(0x427)]['Runti'+'me']),'il2CppContext':![],'arm':_0x29cb12,'hooksTotal':_0x58e02a['lengt'+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':String(_0x1ab2d2&&_0x1ab2d2[_0x591e2f(0x5d3)+'ge']||_0x1ab2d2)};}else return _0x21be6c[_0x591e2f(0x4c0)](_0x1c9eb2[_0x591e2f(0x2ed)],_0xca682e);}function _0x47b5aa(){var _0x41bf98=_0x275951,_0x5d3de0={'OwNFV':function(_0x3db6d6){return _0x3db6d6();},'qJIgM':function(_0x3fa585,_0x24dff3){return _0x3fa585(_0x24dff3);},'CnbEf':function(_0x4a56ec,_0x4a9ca4){return _0x4a56ec<_0x4a9ca4;}},_0x774db3=0x235b+0x5e4*0x2+-0x2f23*0x1;_0x21be6c[_0x41bf98(0x484)](_0x462945,_0x21be6c[_0x41bf98(0x46a)](_0x1f8b9f)),function _0x3bff6c(){var _0x32bc19=_0x41bf98;if(!_0x58e02a['lengt'+'h'])try{_0x5d3de0['OwNFV'](_0x4cef25);}catch(_0x2fae1c){}_0x774db3++,_0x5d3de0[_0x32bc19(0x36a)](_0x462945,_0x1f8b9f());if(!_0x58e02a[_0x32bc19(0x350)+'h']&&_0x774db3<-0x1*0x7bf+-0x1*0x1cb2+0x1*0x259d)setTimeout(_0x3bff6c,0xde2+0x4a*0x30+-0x13f2);else{if(!Object['keys'](_0x4e8d6c)['lengt'+'h']&&_0x5d3de0[_0x32bc19(0x202)](_0x774db3,-0xd*0x1a7+0x47*-0x64+0x3263))setTimeout(_0x3bff6c,0x1*0x2d7+-0x2*0x1174+-0xd4b*-0x3);else setTimeout(_0x3bff6c,0xefc+0x2330+0x16be*-0x2);}}();}if(document[_0x275951(0x38b)])_0x47b5aa();else document[_0x275951(0x247)+_0x275951(0x312)+'stene'+'r'](_0x275951(0x408)+_0x275951(0x5aa)+_0x275951(0x211)+'d',_0x47b5aa,{'once':!![]});})()));
