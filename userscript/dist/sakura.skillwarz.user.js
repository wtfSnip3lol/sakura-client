// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.4.0
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

(function(_0x4c2df0,_0x21638a){var _0xc12a46=_0x40b5,_0x1361f7=_0x4c2df0();while(!![]){try{var _0xb8e17d=parseInt(_0xc12a46(0x50c))/(-0xde7+0x1176+-0x38e)*(parseInt(_0xc12a46(0x31f))/(-0x255*-0x7+-0x58a*-0x3+-0x20ef))+-parseInt(_0xc12a46(0x587))/(-0x17*0x54+0x552*-0x3+0x3*0x7d7)*(-parseInt(_0xc12a46(0x552))/(0x13a*0x17+-0x2*0x39e+-0xa7b*0x2))+-parseInt(_0xc12a46(0x5fe))/(0x8b3*-0x4+0x1*-0x2e7+0x25b8)*(parseInt(_0xc12a46(0x398))/(-0x224*-0xf+-0x1260+-0x9*0x186))+-parseInt(_0xc12a46(0x51c))/(-0x135d+-0x254c+0x38b0)*(parseInt(_0xc12a46(0x56d))/(-0x2*0x790+0x1cd*0x13+-0x130f))+-parseInt(_0xc12a46(0x52c))/(-0x1423+0x2016+0x32*-0x3d)*(parseInt(_0xc12a46(0x175))/(0xfdc*-0x2+-0x16b+0x212d))+-parseInt(_0xc12a46(0x5a9))/(0x1*0x215+0x8*-0xf2+-0x65*-0xe)+parseInt(_0xc12a46(0x493))/(-0x4a3+0x668+-0x1b9);if(_0xb8e17d===_0x21638a)break;else _0x1361f7['push'](_0x1361f7['shift']());}catch(_0x3aae28){_0x1361f7['push'](_0x1361f7['shift']());}}}(_0x1f6d,-0x12d3d5+0x1934db+0x6b2f9),((()=>{'use strict';var _0x44d48d=_0x40b5,_0xdc8fb7={'AGDbp':function(_0x41654b,_0x1d2eb9){return _0x41654b!==_0x1d2eb9;},'AnlXc':function(_0x5b8851,_0x45771e){return _0x5b8851!==_0x45771e;},'cgxsT':function(_0x420a84,_0x359904){return _0x420a84===_0x359904;},'TRzPM':_0x44d48d(0x43a)+'e','xZbeN':function(_0x43df36){return _0x43df36();},'pBDkQ':_0x44d48d(0x500),'IHxKX':'rZOxy','pmlCK':_0x44d48d(0x544)+'a-sw','xlQKM':function(_0x519127,_0x247bf1,_0x29d91f){return _0x519127(_0x247bf1,_0x29d91f);},'mZmfN':function(_0x2c3791,_0x254045){return _0x2c3791===_0x254045;},'nxtUn':function(_0x22751d,_0x92e640){return _0x22751d(_0x92e640);},'fOQfV':function(_0x5a550f,_0xd7a724){return _0x5a550f===_0xd7a724;},'AAEKD':_0x44d48d(0x544)+_0x44d48d(0x1d7)+_0x44d48d(0x2d4)+'b','giAjZ':function(_0x22eb47,_0x20bfc6){return _0x22eb47+_0x20bfc6;},'qSNLZ':function(_0x8c5cad,_0x555499){return _0x8c5cad+_0x555499;},'PhdnT':_0x44d48d(0x3a4)+'ion:f'+'ixed;'+_0x44d48d(0x1a2)+_0x44d48d(0x48a)+_0x44d48d(0x534)+'2px;z'+'-inde'+'x:214'+_0x44d48d(0x1c7)+_0x44d48d(0x4db)+'rsor:'+_0x44d48d(0x18a)+'er;us'+'er-se'+_0x44d48d(0x355)+'none;','dfqpN':function(_0x5b9215,_0x347a2d){return _0x5b9215&&_0x347a2d;},'DIDPf':function(_0x1dff59,_0x5f09d8){return _0x1dff59!==_0x5f09d8;},'VvUQn':_0x44d48d(0x4a7),'JRKUt':function(_0x301b4d){return _0x301b4d();},'VvrZJ':_0x44d48d(0x544)+_0x44d48d(0x1d7)+'v2','yyLXK':_0x44d48d(0x544)+_0x44d48d(0x1d7)+_0x44d48d(0x159)+'s','vkcws':function(_0x17df72,_0x4ad22f){return _0x17df72===_0x4ad22f;},'TrKnX':_0x44d48d(0x4e2),'wfcgn':_0x44d48d(0x220)+'ra-sw'+'-v2{a'+'ll:in'+_0x44d48d(0x309)+'}','lpRpT':_0x44d48d(0x176),'sGawc':_0x44d48d(0x165),'CCbQz':_0x44d48d(0x214)+'2vw,6'+_0x44d48d(0x235),'SLEnD':'#150c'+'1d','vXRoB':'snaps'+_0x44d48d(0x597),'KxWJU':_0x44d48d(0x4f5)+_0x44d48d(0x374),'DNBIf':'Speed'+_0x44d48d(0x66f),'nHeWy':_0x44d48d(0x387)+'paren'+'t','cAzSB':_0x44d48d(0x458)+'f5','FhzeS':function(_0x4665f3,_0x46c8b6){return _0x4665f3+_0x46c8b6;},'fHteK':function(_0x39a0b8,_0x2d8328){return _0x39a0b8+_0x2d8328;},'LmqJF':_0x44d48d(0x262)+_0x44d48d(0x409),'NNZKy':_0x44d48d(0x287)+'c7','WzWtx':function(_0x1d3abf,_0x1dafee){return _0x1d3abf+_0x1dafee;},'SPIKh':function(_0x3bb248,_0x527b95){return _0x3bb248+_0x527b95;},'LdKWY':_0x44d48d(0x3e9)+'panel'+_0x44d48d(0x2a5)+_0x44d48d(0x50d)+'e\x20use'+_0x44d48d(0x60b)+'pt\x20IS'+_0x44d48d(0x59c)+'alled'+_0x44d48d(0x1e0)+_0x44d48d(0x41a)+'ng\x20on'+'\x20the\x20'+_0x44d48d(0x390)+_0x44d48d(0x664),'KsTeN':'so\x20th'+_0x44d48d(0x31d)+_0x44d48d(0x60a)+_0x44d48d(0x60e)+_0x44d48d(0x548)+_0x44d48d(0x15f)+'\x0a\x0a','AlfEH':'\x20\x201.\x20'+_0x44d48d(0x14f)+'rmonk'+_0x44d48d(0x3ac)+_0x44d48d(0x294)+_0x44d48d(0x125)+'ting\x20'+_0x44d48d(0x531)+'the\x20c'+'ross-'+'origi'+_0x44d48d(0x256)+_0x44d48d(0x265),'ecLif':'\x20\x203.\x20'+_0x44d48d(0x240)+_0x44d48d(0x544)+'a.ski'+_0x44d48d(0x5ef)+_0x44d48d(0x402)+_0x44d48d(0x578)+_0x44d48d(0x2de)+_0x44d48d(0x416)+_0x44d48d(0x684)+'g\x20scr'+_0x44d48d(0x697)+'re\x0a','XOotX':_0x44d48d(0x2d6)+_0x44d48d(0x3c7)+'lled\x20'+_0x44d48d(0x602)+_0x44d48d(0x5b4)+_0x44d48d(0x1a4)+_0x44d48d(0x4dc)+_0x44d48d(0x60d)+_0x44d48d(0x2b6)+_0x44d48d(0x378)+_0x44d48d(0x461)+_0x44d48d(0x136)+'nstan'+_0x44d48d(0x5d2)+_0x44d48d(0x53c),'dkGnO':function(_0x48c252,_0x5c6b56){return _0x48c252||_0x5c6b56;},'EFBUn':_0x44d48d(0x3e8)+_0x44d48d(0x3ee)+'refer'+_0x44d48d(0x57a)+'exist'+_0x44d48d(0x3db)+_0x44d48d(0x34d)+'d\x20is\x20'+_0x44d48d(0x4c3)+'eacha'+_0x44d48d(0x3f3)+'ow.','zHmEr':'Unity'+_0x44d48d(0x59c)+_0x44d48d(0x65f)+'not\x20r'+_0x44d48d(0x5ca)+_0x44d48d(0x5c3)+_0x44d48d(0x209)+'urce:'+'\x20','VlNRX':function(_0x428b7e,_0x2f7a49){return _0x428b7e===_0x2f7a49;},'rbTkA':_0x44d48d(0x4d3),'tjEox':function(_0x5d1cbf,_0x1933fe){return _0x5d1cbf===_0x1933fe;},'Anhvi':function(_0x2927a8,_0x43e4e2){return _0x2927a8+_0x43e4e2;},'HmjaT':'\x20obje'+'cts\x20·'+'\x20','DgVuT':'armed'+'\x20·\x20','yLVVl':_0x44d48d(0x401)+'1b','rHXIz':function(_0x5269c6,_0x1d1e5a){return _0x5269c6+_0x1d1e5a;},'CMBbK':_0x44d48d(0x188)+_0x44d48d(0x3d6)+'\x20Skil'+_0x44d48d(0x4c2)+'\x20repo'+'rt','GvZnQ':_0x44d48d(0x41f)+':','LYpYI':_0x44d48d(0x3a4)+_0x44d48d(0x3c5)+_0x44d48d(0x344)+_0x44d48d(0x1a2)+'12px;'+'top:1'+_0x44d48d(0x1bf)+_0x44d48d(0x5db)+_0x44d48d(0x2ea)+'74830'+'00;ma'+'x-wid'+_0x44d48d(0x46e)+_0x44d48d(0x226)+'w,620'+'px);m'+_0x44d48d(0x1cb)+_0x44d48d(0x5fc)+_0x44d48d(0x1af),'XrlvO':_0x44d48d(0x32b)+_0x44d48d(0x3bc)+'1.5\x20u'+_0x44d48d(0x2fb)+_0x44d48d(0x3e6)+_0x44d48d(0x5c1)+'solas'+_0x44d48d(0x539)+_0x44d48d(0x1be)+_0x44d48d(0x30f)+'shado'+'w:0\x202'+_0x44d48d(0x1b8)+_0x44d48d(0x4ec)+_0x44d48d(0x4d9)+_0x44d48d(0x272),'BSnAx':function(_0x504044,_0x408501){return _0x504044+_0x408501;},'piYhB':function(_0x1c67dd,_0x25c290){return _0x1c67dd+_0x25c290;},'AlmCE':function(_0x5680d6,_0x34c580){return _0x5680d6+_0x34c580;},'ozrzJ':function(_0x33e6a5,_0x51e584){return _0x33e6a5+_0x51e584;},'ghLOD':function(_0xb48b8,_0x1ff370){return _0xb48b8+_0x1ff370;},'xJJcK':function(_0x16d6b7,_0x16c044){return _0x16d6b7+_0x16c044;},'XrGfM':_0x44d48d(0x5a7)+_0x44d48d(0x449)+'sw2-b'+_0x44d48d(0x4ab)+_0x44d48d(0x46b)+'e=\x22co'+_0x44d48d(0x20e)+_0x44d48d(0x577)+'6;fon'+'t-siz'+'e:11p'+_0x44d48d(0x525)+_0x44d48d(0x5bf)+'1px\x206'+'px;bo'+'rder:'+'1px\x20s'+_0x44d48d(0x33a)+_0x44d48d(0x46a)+_0x44d48d(0x62f)+_0x44d48d(0x5b9)+'7,.35'+_0x44d48d(0x451)+'der-r'+_0x44d48d(0x21e)+_0x44d48d(0x4a5)+_0x44d48d(0x365)+'?</sp'+'an>','BlXeb':_0x44d48d(0x66d)+_0x44d48d(0x26c)+_0x44d48d(0x16b)+_0x44d48d(0x532)+_0x44d48d(0x520)+_0x44d48d(0x58c)+_0x44d48d(0x48c)+_0x44d48d(0x65d)+_0x44d48d(0x4fe)+_0x44d48d(0x160)+'eft:a'+'uto;b'+_0x44d48d(0x681)+'ound:','NBjiz':'<butt'+_0x44d48d(0x26c)+'=\x22sw2'+_0x44d48d(0x625)+'le\x22\x20s'+_0x44d48d(0x3fb)+_0x44d48d(0x38f)+'groun'+_0x44d48d(0x146)+'nspar'+'ent;b'+'order'+':1px\x20'+'solid'+_0x44d48d(0x323)+_0x44d48d(0x151)+_0x44d48d(0x13e)+'77,.4'+_0x44d48d(0x504)+_0x44d48d(0x497)+_0x44d48d(0x48b)+_0x44d48d(0x680)+_0x44d48d(0x239)+_0x44d48d(0x45e)+'7px;p'+_0x44d48d(0x21d)+'g:4px'+'\x208px;'+'curso'+_0x44d48d(0x488)+'nter;'+'\x22>ope'+_0x44d48d(0x1a8)+_0x44d48d(0x20c),'ppSZc':'<butt'+'on\x20id'+'=\x22sw2'+_0x44d48d(0x433)+_0x44d48d(0x3fb)+'\x22back'+_0x44d48d(0x419)+_0x44d48d(0x146)+'nspar'+_0x44d48d(0x529)+_0x44d48d(0x189)+':1px\x20'+'solid'+_0x44d48d(0x323)+'(255,'+'143,1'+_0x44d48d(0x1aa)+_0x44d48d(0x504)+_0x44d48d(0x497)+_0x44d48d(0x48b)+_0x44d48d(0x680)+_0x44d48d(0x239)+_0x44d48d(0x45e)+_0x44d48d(0x3eb)+'addin'+'g:4px'+_0x44d48d(0x34c)+_0x44d48d(0x3d3)+_0x44d48d(0x488)+_0x44d48d(0x57d)+_0x44d48d(0x194)+'butto'+'n>','xQWVL':'</div'+'>','CufKs':'<butt'+'on\x20id'+_0x44d48d(0x16b)+'-spee'+_0x44d48d(0x5af)+_0x44d48d(0x68b)+_0x44d48d(0x3b0)+_0x44d48d(0x5a8)+':tran'+_0x44d48d(0x259)+'nt;bo'+_0x44d48d(0x67e)+_0x44d48d(0x27c)+_0x44d48d(0x33a)+_0x44d48d(0x46a)+_0x44d48d(0x62f)+_0x44d48d(0x5b9)+'7,.4)'+';colo'+'r:#f7'+_0x44d48d(0x362)+_0x44d48d(0x12d)+'r-rad'+_0x44d48d(0x553)+_0x44d48d(0x30b)+_0x44d48d(0x1eb)+_0x44d48d(0x270)+_0x44d48d(0x498)+'curso'+_0x44d48d(0x488)+_0x44d48d(0x57d)+_0x44d48d(0x1da)+_0x44d48d(0x1e2)+'f</bu'+_0x44d48d(0x20c),'cQazX':'<span'+'\x20id=\x22'+_0x44d48d(0x12a)+_0x44d48d(0x1d2)+_0x44d48d(0x210)+'\x22\x20sty'+_0x44d48d(0x3c0)+_0x44d48d(0x5c4)+'#bda9'+'c9;mi'+_0x44d48d(0x2ae)+_0x44d48d(0x205)+_0x44d48d(0x538)+'1.0x<'+'/span'+'>','vRyeU':_0x44d48d(0x66d)+'on\x20id'+_0x44d48d(0x16b)+'-snap'+'\x22\x20sty'+'le=\x22b'+_0x44d48d(0x681)+'ound:'+_0x44d48d(0x387)+'paren'+'t;bor'+_0x44d48d(0x12b)+'px\x20so'+'lid\x20r'+_0x44d48d(0x49f)+'55,14'+'3,177'+_0x44d48d(0x306)+'color'+_0x44d48d(0x2ad)+'ef5;b'+'order'+_0x44d48d(0x266)+'us:7p'+_0x44d48d(0x525)+_0x44d48d(0x5bf)+_0x44d48d(0x16d)+_0x44d48d(0x5e6)+_0x44d48d(0x22a)+'point'+_0x44d48d(0x389)+'Snaps'+'hot\x20('+'F9)</'+_0x44d48d(0x43e)+'n>','ocXhk':'#sw2-'+'x','pMgqg':_0x44d48d(0x1e7)+'toggl'+'e','VKRld':_0x44d48d(0x1e7)+'body','nvhEA':_0x44d48d(0x1e7)+_0x44d48d(0x33d),'dhASE':_0x44d48d(0x1e7)+'facto'+_0x44d48d(0x36e)+'l','iXkCc':function(_0x37df45,_0x350d3f,_0x32abe0){return _0x37df45(_0x350d3f,_0x32abe0);},'PFDFn':function(_0x3ebd11,_0x1ad102){return _0x3ebd11+_0x1ad102;},'XMGCQ':function(_0x484faf,_0x6a9e8f){return _0x484faf+_0x6a9e8f;},'rJkYE':function(_0x432853,_0x223589){return _0x432853+_0x223589;},'CkVSL':_0x44d48d(0x540)+_0x44d48d(0x17d),'jyUKx':'\x20\x20\x20co'+_0x44d48d(0x1c6)+'\x20','szUuE':function(_0x3b1b8b,_0x5b5bd4){return _0x3b1b8b!=_0x5b5bd4;},'atKfB':'hooks'+'\x20\x20\x20\x20','dOWAP':'afVLk','pkaYN':_0x44d48d(0x14e)+_0x44d48d(0x437)+'fire\x20'+_0x44d48d(0x59a)+_0x44d48d(0x293)+_0x44d48d(0x336)+_0x44d48d(0x4a0)+_0x44d48d(0x203)+_0x44d48d(0x3a0)+_0x44d48d(0x646)+'\x20capt'+'ured\x20'+'means','veiUS':function(_0x53c6f9,_0x1adec5){return _0x53c6f9+_0x1adec5;},'CbEBj':_0x44d48d(0x59d),'ymHOz':function(_0x1014c4,_0x43b626){return _0x1014c4<_0x43b626;},'lJuSX':_0x44d48d(0x230),'KULFi':function(_0x378cdc,_0x1ac4bb){return _0x378cdc+_0x1ac4bb;},'KTEHa':'──\x20','jAcNc':function(_0x48da3c,_0x5c4e7d){return _0x48da3c<_0x5c4e7d;},'FdzNs':function(_0x1208d8,_0x18e6fe){return _0x1208d8+_0x18e6fe;},'qkvPw':function(_0x12b413,_0x371663){return _0x12b413+_0x371663;},'WVCFv':function(_0x5c8fc9,_0x4c49ae){return _0x5c8fc9+_0x4c49ae;},'XwHDm':'plugi'+'n._ru'+_0x44d48d(0x12e)+'.reso'+_0x44d48d(0x473)+'me()','bjPQE':_0x44d48d(0x244),'frHQL':_0x44d48d(0x29f),'wnCtv':_0x44d48d(0x511)+'t','rMevD':'%c[sa'+_0x44d48d(0x3d6)+_0x44d48d(0x62d)+'l\x20upd'+'ate\x20f'+_0x44d48d(0x56e),'LRazR':function(_0x29bdb1,_0x56b8eb){return _0x29bdb1+_0x56b8eb;},'QFMeJ':function(_0x2253b0,_0x4b366f){return _0x2253b0+_0x4b366f;},'zbXNP':function(_0x3cd2a5,_0x11a1b8){return _0x3cd2a5-_0x11a1b8;},'ndbyh':function(_0x53d170,_0x545401){return _0x53d170!==_0x545401;},'HALBK':_0x44d48d(0x580),'VepmQ':'BYFdi','WfDKP':function(_0x5525b1){return _0x5525b1();},'lALxp':function(_0x4726c3,_0xbc6d60){return _0x4726c3!==_0xbc6d60;},'graPA':function(_0x4bdb34,_0x1c8217){return _0x4bdb34<_0x1c8217;},'CTSRp':function(_0x20e681,_0x46f6fd){return _0x20e681===_0x46f6fd;},'NkISB':function(_0x27dcd6,_0x8cad33){return _0x27dcd6<_0x8cad33;},'mgRCW':'\x20A\x20ho'+'ok\x20fi'+_0x44d48d(0x282)+'t\x20','TnBGY':'funct'+'ion','YFted':_0x44d48d(0x161),'KmVMg':_0x44d48d(0x4e1),'pCRRM':_0x44d48d(0x596),'aFSQS':_0x44d48d(0x544)+_0x44d48d(0x1d7)+'hud-c'+'ss','YscdS':'#saku'+'ra-sw'+'-hud{'+_0x44d48d(0x191)+'nitia'+'l}','LAPIU':'WjtGj','Qlnmz':_0x44d48d(0x23b),'pCruj':_0x44d48d(0x5b3),'eklxl':_0x44d48d(0x3c7)+_0x44d48d(0x48d)+'e','prKMi':function(_0x4ba042,_0x2b1755){return _0x4ba042<_0x2b1755;},'KGpQh':function(_0x52c0f0,_0x330e55){return _0x52c0f0!==_0x330e55;},'aeGis':function(_0x51695f,_0x36938c){return _0x51695f!==_0x36938c;},'kBhHx':function(_0x22e4e6,_0x1bd1d6){return _0x22e4e6===_0x1bd1d6;},'MCTzb':_0x44d48d(0x248),'AgKZs':_0x44d48d(0x25d)+'game\x20'+_0x44d48d(0x5da)+'ng','rcRCC':function(_0xc9e088,_0x1c51ee){return _0xc9e088<_0x1c51ee;},'EhuAq':function(_0x41dea0,_0x3b4a58){return _0x41dea0+_0x3b4a58;},'WBafM':_0x44d48d(0x1b2)+'w.','YADCG':function(_0x11cedd,_0x8980e8){return _0x11cedd!==_0x8980e8;},'OnVOP':'insta'+_0x44d48d(0x48d)+_0x44d48d(0x1ee)+_0x44d48d(0x487)+'s.mem'+'ory','vQpmk':_0x44d48d(0x139),'kWyoW':_0x44d48d(0x5c8),'ZQsbZ':_0x44d48d(0x4a2),'auvAt':_0x44d48d(0x215),'RFQYI':_0x44d48d(0x1f2)+'g','YyTsb':function(_0x46717a){return _0x46717a();},'SUzdM':_0x44d48d(0x1ad),'cnngd':'u16','hjwiY':function(_0x1d9bc4,_0x12c999){return _0x1d9bc4|_0x12c999;},'RNSYK':_0x44d48d(0x184),'CfgHM':function(_0x14ba46){return _0x14ba46();},'GhutD':function(_0x3a31ce,_0x1b64e7){return _0x3a31ce>_0x1b64e7;},'kgKgb':'addre'+_0x44d48d(0x63a),'RNRTj':function(_0xf48819,_0x9f6d88){return _0xf48819+_0x9f6d88;},'baLCD':function(_0x135786,_0x4d33c0){return _0x135786(_0x4d33c0);},'cgrWH':function(_0x1a23cf,_0x3f1982,_0x50568c,_0x269d20){return _0x1a23cf(_0x3f1982,_0x50568c,_0x269d20);},'baWMi':function(_0x19d2c8,_0x147ca2){return _0x19d2c8&_0x147ca2;},'UJiAZ':'obfF','iRcsd':_0x44d48d(0x224),'IUIdI':function(_0x580c1b,_0x260369){return _0x580c1b!==_0x260369;},'SoGRH':function(_0x423e20,_0x50b531){return _0x423e20===_0x50b531;},'PQgni':function(_0x31acaf,_0x5c36f9){return _0x31acaf===_0x5c36f9;},'naaXi':function(_0x340d14,_0x7c53e5){return _0x340d14|_0x7c53e5;},'pVYvU':function(_0x76970a,_0xda63b){return _0x76970a+_0xda63b;},'XpwSo':function(_0x3035a9,_0x5e3fa3,_0x26d6b2){return _0x3035a9(_0x5e3fa3,_0x26d6b2);},'ATJhk':function(_0x46c3fb,_0x23cc4c){return _0x46c3fb===_0x23cc4c;},'OtcTP':function(_0x4bfb80,_0x5cb342){return _0x4bfb80^_0x5cb342;},'ktLrM':function(_0x244afd,_0x3653ba){return _0x244afd|_0x3653ba;},'NhBUl':function(_0x143916,_0x3b88b0){return _0x143916&_0x3b88b0;},'fsTMP':function(_0x358d7e,_0x1aeea8){return _0x358d7e^_0x1aeea8;},'NuUgh':function(_0x33d94d,_0x5b3824){return _0x33d94d===_0x5b3824;},'yPQct':function(_0x116784,_0x276600){return _0x116784+_0x276600;},'IUArK':function(_0x5a92a5,_0x255e20,_0x2232e1,_0x566f5d){return _0x5a92a5(_0x255e20,_0x2232e1,_0x566f5d);},'PCGwd':function(_0x48118d,_0x585ba5){return _0x48118d!==_0x585ba5;},'LSaHf':function(_0x473fb9,_0x251aa3){return _0x473fb9>_0x251aa3;},'KsFNc':function(_0x5a7dff,_0xc53c4d){return _0x5a7dff>_0xc53c4d;},'tMkoU':function(_0x2ba280,_0x1ef3cc){return _0x2ba280<_0x1ef3cc;},'rPaAF':function(_0x18007e,_0x9a0a0b){return _0x18007e+_0x9a0a0b;},'ywWae':_0x44d48d(0x624)+'uredF'+'loats'+'\x20agre'+'ed','tipEf':function(_0x5ed1a0,_0x53dcb7){return _0x5ed1a0*_0x53dcb7;},'RRxNk':function(_0x1b0081,_0x5bc7e5){return _0x1b0081<_0x5bc7e5;},'mpnOo':function(_0x4c422b,_0x34d627){return _0x4c422b<_0x34d627;},'JXLMv':function(_0x19b287,_0xfa8a5a){return _0x19b287<_0xfa8a5a;},'PdSOi':'below'+_0x44d48d(0x3ef)+'r\x20','NluxR':function(_0x2be991,_0x36b327,_0x1738e2,_0x5628d2,_0x999c7c){return _0x2be991(_0x36b327,_0x1738e2,_0x5628d2,_0x999c7c);},'tqCXQ':'Bydfn','ZxCcV':_0x44d48d(0x53b),'amhtC':function(_0xf561a0,_0xfe4ea2){return _0xf561a0===_0xfe4ea2;},'meBmy':_0x44d48d(0x65a),'Pibnq':function(_0xe21100,_0x4e477f){return _0xe21100===_0x4e477f;},'pGztd':function(_0x4260be){return _0x4260be();},'vhZUO':'FPSco'+'ntrol'+_0x44d48d(0x33b),'hVVcl':'SXzVw','WpPwY':_0x44d48d(0x574),'ZOBIa':'rRyOC','dCNgM':_0x44d48d(0x4f8)+'e','DETbm':function(_0x3023a8,_0x3bf9f2){return _0x3023a8<_0x3bf9f2;},'nwKor':function(_0x2f1a66,_0x3a8863){return _0x2f1a66*_0x3a8863;},'tTNkG':function(_0x3687fd,_0x4bc0eb){return _0x3687fd+_0x4bc0eb;},'RrmwD':function(_0x40a96e,_0x24e6fc){return _0x40a96e+_0x24e6fc;},'LmMxQ':function(_0x1dc64d,_0x2e4f83){return _0x1dc64d===_0x2e4f83;},'WbCVw':function(_0x32f601,_0x24418e){return _0x32f601===_0x24418e;},'eqWfI':'TUClS','kqJtx':function(_0x22a4e4,_0x4b5b0c){return _0x22a4e4!==_0x4b5b0c;},'PWsaH':function(_0x1b001e,_0x58fd2f){return _0x1b001e===_0x58fd2f;},'uyIFr':function(_0x4e8860,_0x311adc){return _0x4e8860<_0x311adc;},'wVBGs':function(_0x3924ca,_0x38e4e5){return _0x3924ca<_0x38e4e5;},'fYejK':function(_0x262885,_0x2d716a,_0x2013dc){return _0x262885(_0x2d716a,_0x2013dc);},'WEsLt':function(_0x154f7a,_0x28d915){return _0x154f7a>>>_0x28d915;},'nkmRs':function(_0x4e2fe1,_0x3fb304){return _0x4e2fe1+_0x3fb304;},'ApBtw':function(_0x514d31,_0x5765f1){return _0x514d31+_0x5765f1;},'FOtva':_0x44d48d(0x246)+_0x44d48d(0x1a0)+_0x44d48d(0x549)+_0x44d48d(0x1f5)+'Manag'+'er\x20Up'+'date('+')\x20nev'+_0x44d48d(0x23f)+'red\x20-'+_0x44d48d(0x64f)+'nemie'+_0x44d48d(0x150)+_0x44d48d(0x28b),'POhBN':'GG_Ga'+'meMan'+_0x44d48d(0x172)+'\x20whic'+_0x44d48d(0x19d)+'what\x20'+'a\x20lob'+_0x44d48d(0x5ce)+_0x44d48d(0x44b)+_0x44d48d(0x405)+_0x44d48d(0x190)+_0x44d48d(0x605)+'con\x20I'+_0x44d48d(0x233)+_0x44d48d(0x360)+_0x44d48d(0x15b)+_0x44d48d(0x1bb),'OLYeM':_0x44d48d(0x422),'QBLFD':function(_0x2e69d1,_0x39dfc0){return _0x2e69d1+_0x39dfc0;},'UdFnU':function(_0x3731cb,_0x5c6308){return _0x3731cb===_0x5c6308;},'drvns':function(_0x5b7713,_0x50802a){return _0x5b7713===_0x50802a;},'NxYFM':function(_0x53e502,_0x178b23){return _0x53e502+_0x178b23;},'aBmLZ':function(_0x59b386,_0x526215){return _0x59b386&_0x526215;},'QEIrF':function(_0xa70500,_0xf9728d){return _0xa70500||_0xf9728d;},'sRpAn':function(_0x19a6d1,_0x4807e2){return _0x19a6d1^_0x4807e2;},'boXOo':_0x44d48d(0x195),'XSHpa':function(_0xfc115d,_0x6a04b0){return _0xfc115d<_0x6a04b0;},'Zbjqs':function(_0x462040,_0x33c587){return _0x462040!==_0x33c587;},'exHXp':function(_0x1d60ae,_0x31604b){return _0x1d60ae===_0x31604b;},'QJGQD':function(_0x2d3515,_0x43531f){return _0x2d3515===_0x43531f;},'JdHjK':'ZRsEp','VgaDh':_0x44d48d(0x347),'xIewy':function(_0x33563e,_0x13eed6,_0x247c37,_0x5d0170){return _0x33563e(_0x13eed6,_0x247c37,_0x5d0170);},'XAOnU':function(_0x22c109,_0x1e9af7){return _0x22c109+_0x1e9af7;},'cBYyD':_0x44d48d(0x63f),'ggOaM':'\x20k0=','RJCkQ':_0x44d48d(0x528),'CBGFq':function(_0x9e0b66,_0x537409){return _0x9e0b66===_0x537409;},'oQyEs':function(_0x1120c2,_0x1df08c){return _0x1120c2===_0x1df08c;},'Pwhzl':function(_0x308d78,_0xb291fc){return _0x308d78!==_0xb291fc;},'fOUhR':_0x44d48d(0x3bd)+'r','CXjXp':function(_0x3bffbe,_0x18b56d){return _0x3bffbe!==_0x18b56d;},'hYeAU':_0x44d48d(0x2bd),'VhjwI':_0x44d48d(0x39b),'eueZp':function(_0x312c2c,_0x132083){return _0x312c2c&&_0x132083;},'rgoOO':function(_0x589cf5,_0x4bf872){return _0x589cf5+_0x4bf872;},'tXQTi':_0x44d48d(0x3cc),'BGEEl':_0x44d48d(0x36f)+_0x44d48d(0x1fd)+_0x44d48d(0x2d7),'uAdJr':function(_0x54ca39,_0x1e12eb){return _0x54ca39<_0x1e12eb;},'QWpSo':function(_0xcc8d04,_0x166265){return _0xcc8d04(_0x166265);},'KgqEA':function(_0x5d2d64,_0x3915b4){return _0x5d2d64!==_0x3915b4;},'pcswk':'speed','Kxoqi':function(_0x1c670a,_0x1009d3){return _0x1c670a(_0x1009d3);},'XGvYR':_0x44d48d(0x188)+'kura]'+'\x20pane'+'l\x20dis'+_0x44d48d(0x42f),'fGVEj':'ANSIV','GXsiS':'sakur'+'a-sw-'+_0x44d48d(0x4b3),'hVxYI':'posit'+'ion:f'+'ixed;'+_0x44d48d(0x1a2)+_0x44d48d(0x1a9)+_0x44d48d(0x515)+_0x44d48d(0x533)+'z-ind'+_0x44d48d(0x249)+'47483'+_0x44d48d(0x5a1)+_0x44d48d(0x48c)+_0x44d48d(0x576)+_0x44d48d(0x61e)+_0x44d48d(0x4b5)+_0x44d48d(0x600)+'n:col'+'umn;g'+'ap:4p'+'x;','vFqAb':_0x44d48d(0x32c)+'hadow'+':0\x2010'+'px\x2030'+'px\x20-1'+_0x44d48d(0x505)+_0x44d48d(0x229)+_0x44d48d(0x310)+'elect'+':none'+_0x44d48d(0x480)+_0x44d48d(0x651)+_0x44d48d(0x310)+'elect'+':none'+';','kSYDS':function(_0x1e417c,_0x269591){return _0x1e417c+_0x269591;},'lAoIC':function(_0x5a5a30,_0x3e3f75){return _0x5a5a30+_0x3e3f75;},'bXobG':_0x44d48d(0x3f9)+_0x44d48d(0x68b)+'color'+':','uPGXX':'<butt'+'on\x20da'+_0x44d48d(0x3b2)+'\x22sp\x22\x20'+'style'+_0x44d48d(0x2b7)+'kgrou'+_0x44d48d(0x341)+_0x44d48d(0x61d)+_0x44d48d(0x38c)+'borde'+'r:1px'+'\x20soli'+_0x44d48d(0x3b4)+_0x44d48d(0x2bb)+_0x44d48d(0x524)+'177,.'+_0x44d48d(0x119),'nnLsd':_0x44d48d(0x41f)+':#f7e'+'ef5;b'+_0x44d48d(0x189)+_0x44d48d(0x266)+_0x44d48d(0x675)+_0x44d48d(0x525)+'ding:'+'2px\x208'+_0x44d48d(0x5e6)+'rsor:'+'point'+'er;fo'+_0x44d48d(0x291)+'herit'+';\x22>Sp'+'eed\x20o'+_0x44d48d(0x5f4)+_0x44d48d(0x16a)+'>','PNwrq':_0x44d48d(0x66d)+_0x44d48d(0x383)+'ta-a='+'\x22snap'+_0x44d48d(0x520)+_0x44d48d(0x2f9)+_0x44d48d(0x681)+'ound:'+'trans'+_0x44d48d(0x14c)+_0x44d48d(0x2d3)+_0x44d48d(0x12b)+'px\x20so'+_0x44d48d(0x1ef)+_0x44d48d(0x49f)+'55,14'+_0x44d48d(0x252)+_0x44d48d(0x1c8)+';','hibKB':function(_0x5da783,_0x5dd959){return _0x5da783(_0x5dd959);},'bZVxN':function(_0x218083,_0x346fbf){return _0x218083(_0x346fbf);},'oPMUV':_0x44d48d(0x3d8),'qExaj':'snap','nGrFI':'fold','YzFNA':'%c[sa'+_0x44d48d(0x3d6)+_0x44d48d(0x26f)+'rame\x20'+_0x44d48d(0x653)+_0x44d48d(0x2f7)+'ed','IZwZg':function(_0x1b2fb9,_0x8bca2c){return _0x1b2fb9+_0x8bca2c;},'ahVdS':function(_0x3b78a4,_0x29911d){return _0x3b78a4!==_0x29911d;},'aIaWO':'UePna','ieykp':_0x44d48d(0x16f),'TyXLY':function(_0x37a86d,_0x20c315){return _0x37a86d(_0x20c315);},'ZvMgv':function(_0x3fb73f,_0x3aef79){return _0x3fb73f+_0x3aef79;},'lwDZb':_0x44d48d(0x2e6)+_0x44d48d(0x35b)+_0x44d48d(0x357)+_0x44d48d(0x32f),'ZTGxU':'SreBi','wpFhH':function(_0x162c0d,_0x36b3e7){return _0x162c0d+_0x36b3e7;},'TbdcQ':_0x44d48d(0x63d)+'\x20','pWmnM':_0x44d48d(0x20d)+'8a','ezeTw':function(_0xd07cd,_0x2675fb){return _0xd07cd===_0x2675fb;},'MRYNj':'MFDVi','AlumB':_0x44d48d(0x329),'gAJXC':function(_0x3e9a27,_0x51db32,_0x86eb8e){return _0x3e9a27(_0x51db32,_0x86eb8e);},'JWGtr':_0x44d48d(0x66c),'CgPrc':function(_0x5cbd69,_0x2c43be){return _0x5cbd69===_0x2c43be;},'lSGvL':function(_0x1b0546,_0x486354){return _0x1b0546-_0x486354;},'pouHv':function(_0x4831a4,_0x149966){return _0x4831a4===_0x149966;},'oAdcQ':function(_0x3858a6,_0x38f324){return _0x3858a6+_0x38f324;},'FrnJC':function(_0x4a0a46,_0x39841e){return _0x4a0a46-_0x39841e;},'PtaHE':function(_0xbdc264){return _0xbdc264();},'KyLdU':'surve'+_0x44d48d(0x1f1)+_0x44d48d(0x5d7),'YnQRQ':function(_0x9b04ee,_0x510d13){return _0x9b04ee+_0x510d13;},'wCRGp':_0x44d48d(0x486)+'armin'+_0x44d48d(0x5e1)+'led:\x20','yUlqY':function(_0x20308b,_0x1c59c7){return _0x20308b>_0x1c59c7;},'nrrKN':_0x44d48d(0x463)+_0x44d48d(0x33e),'dIPjW':_0x44d48d(0x2a7)+_0x44d48d(0x2db)+'iled,'+_0x44d48d(0x5dc)+_0x44d48d(0x29a)+'offse'+'t\x20was'+_0x44d48d(0x25e)+'ped\x20b'+_0x44d48d(0x288)+'e.','GGLQq':_0x44d48d(0x56a)+_0x44d48d(0x1e9)+_0x44d48d(0x447)+'ipt\x20i'+_0x44d48d(0x39d)+_0x44d48d(0x1fc)+_0x44d48d(0x2e0)+_0x44d48d(0x245)+_0x44d48d(0x243)+_0x44d48d(0x1c2)+'.','iFhfJ':function(_0x3071f8,_0x130fef){return _0x3071f8+_0x130fef;},'ZxygF':function(_0x1f8b23,_0x3e461f){return _0x1f8b23+_0x3e461f;},'FiXLE':_0x44d48d(0x443)+_0x44d48d(0x636)+'igina'+'lFunc'+'=','uxdeV':_0x44d48d(0x1e0)+_0x44d48d(0x363)+_0x44d48d(0x4b8)+'ved=','Ygqol':'none','yoeCP':').\x20','SNFBD':function(_0x237956,_0x36614f){return _0x237956===_0x36614f;},'lzwqC':'undef'+_0x44d48d(0x557),'LNHlJ':'windo'+_0x44d48d(0x200)+_0x44d48d(0x5d5)+_0x44d48d(0x280)+'t.Val'+'ueWra'+'pper\x20'+_0x44d48d(0x60c)+'ssing'+'\x20-\x20ca'+_0x44d48d(0x286)+_0x44d48d(0x482)+_0x44d48d(0x442)+'g\x20bli'+_0x44d48d(0x169),'fvhfl':function(_0x5b594a,_0x3c2c4c){return _0x5b594a===_0x3c2c4c;},'jgcUt':function(_0x20ed04,_0x32e671){return _0x20ed04!==_0x32e671;},'edYMT':function(_0x26a9ee,_0x48c92c){return _0x26a9ee+_0x48c92c;},'lDdUQ':_0x44d48d(0x2e1)+_0x44d48d(0x1c0)+_0x44d48d(0x258)+_0x44d48d(0x643)+_0x44d48d(0x461)+_0x44d48d(0x136)+_0x44d48d(0x2c0)+_0x44d48d(0x5d2)+_0x44d48d(0x1e0)+'snaps'+'hots\x20'+'plugi'+'n.hoo'+_0x44d48d(0x627)+_0x44d48d(0x13c)+'\x20','pGeIY':_0x44d48d(0x217)+_0x44d48d(0x62a)+'egist'+'ered\x20'+_0x44d48d(0x4b0)+_0x44d48d(0x494)+_0x44d48d(0x5e5)+'nored'+_0x44d48d(0x180)+_0x44d48d(0x691)+_0x44d48d(0x3e3)+_0x44d48d(0x27e)+_0x44d48d(0x61c)+'.\x20','anten':'\x20hook'+_0x44d48d(0x4f9)+_0x44d48d(0x456)+_0x44d48d(0x4f7)+'ng\x20at'+_0x44d48d(0x439)+'ment-'+_0x44d48d(0x342)+'.','pDvTf':function(_0x6a5535,_0x431a3e){return _0x6a5535+_0x431a3e;},'TintV':_0x44d48d(0x17e)+_0x44d48d(0x3f8)+_0x44d48d(0x425)+_0x44d48d(0x3d1)+_0x44d48d(0x46f)+_0x44d48d(0x42b)+_0x44d48d(0x3c6)+_0x44d48d(0x3a8)+'ch\x20th'+_0x44d48d(0x375)+_0x44d48d(0x518),'bUTgI':'Hooks'+_0x44d48d(0x250)+_0x44d48d(0x268)+_0x44d48d(0x41d)+_0x44d48d(0x395)+_0x44d48d(0x1db)+_0x44d48d(0x17f)+'ler\x20h'+_0x44d48d(0x55f)+_0x44d48d(0x231)+_0x44d48d(0x4ad),'GWQfH':_0x44d48d(0x3b1)+_0x44d48d(0x65e)+_0x44d48d(0x250)+_0x44d48d(0x667)+'n\x20a\x20r'+_0x44d48d(0x332)+'\x20or\x20t'+_0x44d48d(0x24f)+_0x44d48d(0x2b4)+'\x20on\x20t'+_0x44d48d(0x17c)+_0x44d48d(0x5ff)+'verlo'+_0x44d48d(0x1f8),'WExiQ':function(_0x34b1b4,_0x2b3159){return _0x34b1b4+_0x2b3159;},'Akprg':';font'+_0x44d48d(0x4f3)+'ht:70'+'0','ODoSv':function(_0x1f94d1,_0x4d4670){return _0x1f94d1+_0x4d4670;},'VcZjQ':function(_0xaac6b2,_0x44ca2b){return _0xaac6b2===_0x44ca2b;},'nnuAn':_0x44d48d(0x305),'cJjcO':'CssYR','SjKKj':'boole'+'an','hGLXW':_0x44d48d(0x67c),'pODXS':function(_0x1ec81a){return _0x1ec81a();},'jvDHf':function(_0x3a9d5b,_0x3fae2b){return _0x3a9d5b===_0x3fae2b;},'EyqQB':_0x44d48d(0x390)+'l','QHuvX':'wrapp'+'er','ejlSV':_0x44d48d(0x3de)+'r','uHuIO':function(_0x37ef9b,_0x801820){return _0x37ef9b&&_0x801820;},'VVEci':_0x44d48d(0x662)+_0x44d48d(0x4d1)+'w_v2','NwtPP':_0x44d48d(0x129)+_0x44d48d(0x50e)+'SKILL'+'WARZ-'+_0x44d48d(0x1ec)+'=','jpXPF':'%c[sa'+'kura]'+'\x20SW-W'+'RAPPE'+'R\x20ACT'+_0x44d48d(0x563)+'relay'+_0x44d48d(0x380)+'own)','eSwXv':function(_0x5933b7,_0x44a8a0){return _0x5933b7+_0x44a8a0;},'aBywG':_0x44d48d(0x188)+'kura]'+'\x20PORT'+'AL\x20AC'+_0x44d48d(0x4a3),'PIKFi':'messa'+'ge','wMueB':_0x44d48d(0x2e2)+'ntent'+_0x44d48d(0x202)+'d','mephE':function(_0x3bac2f,_0x366bfd){return _0x3bac2f+_0x366bfd;},'MqLud':function(_0x4a1280,_0x14fdc0){return _0x4a1280+_0x14fdc0;},'cOTId':function(_0x4b44d2,_0xc8915){return _0x4b44d2+_0xc8915;},'KhZph':'Pbfob','EXcLC':_0x44d48d(0x47d)+_0x44d48d(0x485),'nsxGo':'Scivo'+'loCha'+'racte'+'rCont'+'rolle'+_0x44d48d(0x1ea)};var _0x40c4d2=location['hostn'+_0x44d48d(0x4cc)]||'',_0x512fc5=/(^|\.)www\.crazygames\.com$/['test'](_0x40c4d2),_0x10a9f2=/(^|\.)games\.crazygames\.com$/['test'](_0x40c4d2),_0x2a35ce=/(^|\.)crazygames\.com$/[_0x44d48d(0x3c9)](_0x40c4d2)&&!_0x512fc5&&!_0x10a9f2,_0x202974=_0x512fc5?_0xdc8fb7['EyqQB']:_0x10a9f2?_0xdc8fb7[_0x44d48d(0x23a)]:_0xdc8fb7['ejlSV'];if(_0xdc8fb7['uHuIO'](!_0x512fc5,!_0x10a9f2)&&!_0x2a35ce)return;var _0x32ae10='#ff8f'+'b1',_0xd34dbc=_0xdc8fb7['VVEci'],_0x536e67=_0x44d48d(0x129)+_0x44d48d(0x50e)+'SKILL'+_0x44d48d(0x278)+'BEGIN'+'===',_0x27e21a=_0xdc8fb7[_0x44d48d(0x218)],_0x346a98=_0x44d48d(0x435);if(_0x10a9f2){window[_0x44d48d(0x3c2)+_0x44d48d(0x434)+_0x44d48d(0x2d5)+'r'](_0x44d48d(0x279)+'ge',function(_0x25ccad){var _0x229d3a=_0x44d48d,_0x388676=_0x25ccad['data'];if(!_0x388676||_0xdc8fb7['AGDbp'](_0x388676[_0x229d3a(0x662)+'ura'],_0xd34dbc))return;try{if(window[_0x229d3a(0x14c)+'t']&&window['paren'+'t']!==window)window[_0x229d3a(0x14c)+'t']['postM'+_0x229d3a(0x460)+'e'](_0x388676,'*');if(window['top']&&_0xdc8fb7['AnlXc'](window[_0x229d3a(0x19f)],window))window[_0x229d3a(0x19f)][_0x229d3a(0x2a2)+_0x229d3a(0x460)+'e'](_0x388676,'*');}catch(_0xbb1e1d){}if(_0x388676&&_0xdc8fb7['cgxsT'](_0x388676[_0x229d3a(0x33c)],_0x229d3a(0x500)))try{var _0x25d552=document['query'+_0x229d3a(0x346)+'torAl'+'l'](_0xdc8fb7['TRzPM']);for(var _0x252aef=-0x191*-0x1+0x116*-0x8+0x71f;_0x252aef<_0x25d552['lengt'+'h'];_0x252aef++){try{if(_0x25d552[_0x252aef]['conte'+_0x229d3a(0x372)+'dow'])_0x25d552[_0x252aef]['conte'+_0x229d3a(0x372)+_0x229d3a(0x453)][_0x229d3a(0x2a2)+_0x229d3a(0x460)+'e'](_0x388676,'*');}catch(_0xe250e5){}}}catch(_0x58f7d4){}}),console[_0x44d48d(0x161)](_0xdc8fb7['jpXPF'],_0xdc8fb7['eSwXv'](_0xdc8fb7['GvZnQ'],_0x32ae10));return;}if(_0x512fc5){console[_0x44d48d(0x161)](_0xdc8fb7[_0x44d48d(0x22e)],'color'+':'+_0x32ae10+(';font'+'-weig'+_0x44d48d(0x5bb)+'0'),{'host':_0x40c4d2});var _0x1d535c={'set':function(){},'command':function(){}};function _0x1e6665(_0x2de090,_0x3ba50a){var _0x3ae666=_0x44d48d,_0x47e1b8={'__sakura':_0xd34dbc,'kind':_0xdc8fb7[_0x3ae666(0x4e5)],'cmd':_0x2de090,'arg':_0x3ba50a};try{if(_0x3ae666(0x167)!==_0x3ae666(0x167))try{_0xdc8fb7['xZbeN'](_0x5823f9);}catch(_0x16f464){}else{var _0x46b6d3=document[_0x3ae666(0x27b)+_0x3ae666(0x346)+_0x3ae666(0x590)+'l'](_0xdc8fb7[_0x3ae666(0x321)]);for(var _0x378c3d=0x8a0+0x419+-0xcb9;_0x378c3d<_0x46b6d3[_0x3ae666(0x62e)+'h'];_0x378c3d++){try{if(_0xdc8fb7['cgxsT'](_0xdc8fb7[_0x3ae666(0x28f)],'EYkia'))_0xad97be?_0x4493b9[_0x3ae666(0x52a)+'em'](_0x54271e,'1'):_0x33f890[_0x3ae666(0x2ab)+_0x3ae666(0x474)](_0x31c9a7);else{if(_0x46b6d3[_0x378c3d]['conte'+'ntWin'+_0x3ae666(0x453)])_0x46b6d3[_0x378c3d]['conte'+_0x3ae666(0x372)+'dow'][_0x3ae666(0x2a2)+'essag'+'e'](_0x47e1b8,'*');}}catch(_0x1b940c){}}}}catch(_0x7a407b){}try{var _0x343b03=new BroadcastChannel(_0xdc8fb7['pmlCK']);_0x343b03['postM'+_0x3ae666(0x460)+'e'](_0x47e1b8),_0xdc8fb7['xlQKM'](setTimeout,function(){var _0x14c2bd=_0x3ae666;try{_0x343b03[_0x14c2bd(0x2a6)]();}catch(_0x5d25d1){}},0x2083+-0x1*0x25b7+0x62e);}catch(_0x1275a6){}}var _0x4cc3f9=_0x44d48d(0x544)+'a-sw-'+'panel'+_0x44d48d(0x607)+'en';function _0x4af422(){var _0x109164=_0x44d48d;try{return _0xdc8fb7[_0x109164(0x234)](localStorage[_0x109164(0x599)+'em'](_0x4cc3f9),'1');}catch(_0xdf781a){return![];}}function _0x112c86(_0x307ffa){var _0x424276=_0x44d48d;try{_0x307ffa?localStorage[_0x424276(0x52a)+'em'](_0x4cc3f9,'1'):localStorage[_0x424276(0x2ab)+_0x424276(0x474)](_0x4cc3f9);}catch(_0x579586){}try{var _0x12707e=document[_0x424276(0x1b7)+_0x424276(0x313)+_0x424276(0x192)](_0x424276(0x544)+'a-sw-'+'v2');if(_0x12707e)_0x12707e[_0x424276(0x2ab)+'e']();}catch(_0x2ab3ab){}try{if(_0xdc8fb7[_0x424276(0x51b)]('kEQwa',_0x424276(0x3fe))){var _0x21e044=document[_0x424276(0x1b7)+_0x424276(0x313)+_0x424276(0x192)](_0x424276(0x544)+_0x424276(0x1d7)+_0x424276(0x2d4)+'b');if(_0x307ffa&&!_0x21e044&&document['body']){var _0x48ce24=document[_0x424276(0x128)+_0x424276(0x2c7)+'ent']('div');_0x48ce24['id']=_0xdc8fb7['AAEKD'],_0x48ce24['style']['cssTe'+'xt']=_0xdc8fb7[_0x424276(0x285)](_0xdc8fb7[_0x424276(0x216)](_0xdc8fb7['PhdnT'],_0x424276(0x3b0)+_0x424276(0x5a8)+_0x424276(0x499)+_0x424276(0x404)+'2,29,'+'.9);b'+'order'+_0x424276(0x3ec)+'solid'+'\x20rgba'+'(255,'+'143,1'+_0x424276(0x5d0)+_0x424276(0x504)+_0x424276(0x408))+_0x32ae10+';',_0x424276(0x12d)+_0x424276(0x228)+'ius:9'+'99px;'+'paddi'+_0x424276(0x222)+'x\x2012p'+_0x424276(0x424)+'t:11p'+_0x424276(0x509)+_0x424276(0x62c)+_0x424276(0x5de)+'ace,C'+'onsol'+'as,mo'+'nospa'+_0x424276(0x236)),_0x48ce24[_0x424276(0x298)+'onten'+'t']=_0x424276(0x544)+'a',_0x48ce24['oncli'+'ck']=function(){_0xdc8fb7['nxtUn'](_0x112c86,![]),_0x286ab9();},document['body']['appen'+_0x424276(0x606)+'d'](_0x48ce24);}else _0xdc8fb7['dfqpN'](!_0x307ffa,_0x21e044)&&(_0xdc8fb7['DIDPf'](_0x424276(0x4a7),_0xdc8fb7[_0x424276(0x11e)])?(_0x1fc951++,_0x4febcc[_0x424276(0x469)]=!![]):_0x21e044[_0x424276(0x2ab)+'e']());}else _0x1f2c5f();}catch(_0x473a00){}}function _0xdf897c(){var _0x8e33a4=_0x44d48d,_0x546c10={'ClVEm':'funct'+'ion','AFlly':_0x8e33a4(0x51a)+'me._g'+_0x8e33a4(0x4cc)};if('HfLSl'==='UVXQr'){var _0x391a2c=_0x37dcef[_0x8e33a4(0x452)+'WebMo'+_0x8e33a4(0x18b)]&&_0x2688c7['Unity'+'WebMo'+'dkit']['Runti'+'me'];if(_0x391a2c&&typeof _0x391a2c['resol'+_0x8e33a4(0x4ce)+'e']===_0x546c10['ClVEm']){var _0x460ce6=_0x391a2c[_0x8e33a4(0x4b8)+_0x8e33a4(0x4ce)+'e']();if(_0x460ce6)return _0x2f5b25['sourc'+'e']=_0x8e33a4(0x51a)+_0x8e33a4(0x4a1)+_0x8e33a4(0x2c3)+'Game('+')',_0x460ce6;}if(_0x391a2c&&_0x391a2c[_0x8e33a4(0x63c)])return _0x1e486e[_0x8e33a4(0x39f)+'e']=_0x546c10['AFlly'],_0x391a2c;}else{if(_0xdc8fb7[_0x8e33a4(0x295)](_0x4af422))return null;var _0x2d3301=document[_0x8e33a4(0x1b7)+_0x8e33a4(0x313)+_0x8e33a4(0x192)](_0xdc8fb7[_0x8e33a4(0x403)]);if(_0x2d3301)return _0x2d3301;if(!document['body']||!document[_0x8e33a4(0x2b9)][_0x8e33a4(0x49d)+_0x8e33a4(0x606)+'d'])return null;try{if(!document[_0x8e33a4(0x1b7)+_0x8e33a4(0x313)+_0x8e33a4(0x192)](_0xdc8fb7[_0x8e33a4(0x5e2)])){if(_0xdc8fb7[_0x8e33a4(0x315)](_0x8e33a4(0x213),_0x8e33a4(0x632)))try{if(_0x1b96a7[_0x5f36db]['conte'+_0x8e33a4(0x372)+_0x8e33a4(0x453)])_0x5c3475[_0x49f574]['conte'+_0x8e33a4(0x372)+_0x8e33a4(0x453)]['postM'+'essag'+'e'](_0x328668,'*');}catch(_0xdc4782){}else{var _0x9253e5=document['creat'+_0x8e33a4(0x2c7)+_0x8e33a4(0x2b8)](_0xdc8fb7[_0x8e33a4(0x4de)]);_0x9253e5['id']=_0x8e33a4(0x544)+'a-sw-'+_0x8e33a4(0x159)+'s',_0x9253e5[_0x8e33a4(0x298)+_0x8e33a4(0x4ea)+'t']=_0xdc8fb7[_0x8e33a4(0x5e4)],(document[_0x8e33a4(0x264)]||document['docum'+_0x8e33a4(0x29e)+'ement'])[_0x8e33a4(0x49d)+'dChil'+'d'](_0x9253e5);}}return _0x2d3301=document[_0x8e33a4(0x128)+_0x8e33a4(0x2c7)+'ent'](_0xdc8fb7[_0x8e33a4(0x263)]),_0x2d3301['id']=_0xdc8fb7[_0x8e33a4(0x403)],document[_0x8e33a4(0x2b9)]['appen'+_0x8e33a4(0x606)+'d'](_0x2d3301),_0x2d3301;}catch(_0x5105ce){return null;}}}function _0x286ab9(){var _0x3cf51e=_0x44d48d,_0x3c8cca=_0xdf897c();if(!_0x3c8cca)return _0x1d535c;if(_0x3c8cca['datas'+'et'][_0x3cf51e(0x36a)])return _0x3c8cca[_0x3cf51e(0x36a)];try{if(_0x3cf51e(0x44d)===_0x3cf51e(0x44d))return _0x391973(_0x3c8cca);else{var _0x3f6c4b=_0x52f223[_0x3cf51e(0x594)+_0x3cf51e(0x1f6)+_0x3cf51e(0x45d)]||_0x2eb6ae['unity'+_0x3cf51e(0x301)]||_0x1a1f1e[_0x3cf51e(0x117)];if(_0x3f6c4b)return _0x2506ee[_0x3cf51e(0x39f)+'e']=_0x3cf51e(0x1b2)+'w\x20glo'+'bal',_0x3f6c4b;}}catch(_0xc12c98){return _0x3c8cca[_0x3cf51e(0x1b0)+'et'][_0x3cf51e(0x36a)]='1',_0x3c8cca[_0x3cf51e(0x36a)]=_0x1d535c,console['warn'](_0x3cf51e(0x188)+_0x3cf51e(0x3d6)+_0x3cf51e(0x62d)+'l\x20dis'+_0x3cf51e(0x42f),_0xdc8fb7['giAjZ'](_0x3cf51e(0x41f)+':',_0x32ae10),_0xc12c98),_0x1d535c;}}function _0x391973(_0x410da7){var _0x378773=_0x44d48d,_0x2d75aa={'jZepA':_0x378773(0x616),'JKdsW':function(_0x30301a){return _0x30301a();},'LgoNX':function(_0x5e2dfe,_0x4a3cbe,_0x317d7c){return _0x5e2dfe(_0x4a3cbe,_0x317d7c);}};_0x410da7[_0x378773(0x4e2)][_0x378773(0x227)+'xt']=_0xdc8fb7[_0x378773(0x281)](_0xdc8fb7[_0x378773(0x608)],_0x378773(0x3b0)+_0x378773(0x5a8)+_0x378773(0x5f0)+_0x378773(0x516)+'olor:'+_0x378773(0x458)+_0x378773(0x586)+_0x378773(0x67e)+'1px\x20s'+_0x378773(0x33a)+_0x378773(0x46a)+_0x378773(0x62f)+_0x378773(0x5b9)+_0x378773(0x1ca)+_0x378773(0x680)+_0x378773(0x239)+_0x378773(0x45e)+'14px;')+_0xdc8fb7[_0x378773(0x438)]+(_0x378773(0x157)+'ay:fl'+_0x378773(0x649)+'ex-di'+_0x378773(0x2ec)+_0x378773(0x4d6)+_0x378773(0x1c4)+_0x378773(0x496)+_0x378773(0x3dd)+'idden'+';'),_0x410da7[_0x378773(0x45b)+_0x378773(0x57e)]=_0xdc8fb7['BSnAx'](_0xdc8fb7[_0x378773(0x4c1)](_0xdc8fb7[_0x378773(0x2e5)](_0xdc8fb7[_0x378773(0x58a)](_0xdc8fb7[_0x378773(0x58a)](_0xdc8fb7['ghLOD'](_0xdc8fb7[_0x378773(0x508)](_0xdc8fb7['piYhB'](_0xdc8fb7[_0x378773(0x149)](_0x378773(0x260)+'style'+'=\x22pad'+'ding:'+'9px\x201'+_0x378773(0x196)+'order'+'-bott'+_0x378773(0x1d3)+_0x378773(0x4bc)+'id\x20rg'+'ba(25'+'5,143'+_0x378773(0x4ed)+'.3);d'+_0x378773(0x48c)+_0x378773(0x576)+'x;gap'+_0x378773(0x533)+_0x378773(0x352)+'-item'+_0x378773(0x40f)+_0x378773(0x275)+'lex:0'+_0x378773(0x1d0)+_0x378773(0x4cd)+('<b\x20st'+_0x378773(0x68b)+_0x378773(0x41f)+':')+_0x32ae10+(_0x378773(0x199)+_0x378773(0x3a9)+_0x378773(0x64d)+_0x378773(0x620)+_0x378773(0x3c1)),_0xdc8fb7[_0x378773(0x584)])+(_0x378773(0x5a7)+_0x378773(0x449)+_0x378773(0x475)+_0x378773(0x648)+_0x378773(0x520)+_0x378773(0x3c0)+'olor:'+_0x378773(0x5be)+'c9\x22>w'+_0x378773(0x579)+'g\x20for'+_0x378773(0x37d)+'\x20fram'+'e…</s'+_0x378773(0x221))+_0xdc8fb7['BlXeb']+_0x32ae10,';bord'+_0x378773(0x2bf)+_0x378773(0x41f)+':#2a0'+'f1b;b'+_0x378773(0x189)+_0x378773(0x266)+_0x378773(0x5eb)+'x;pad'+'ding:'+_0x378773(0x24a)+'0px;f'+_0x378773(0x506)+_0x378773(0x417)+_0x378773(0x5a0)+_0x378773(0x3d3)+_0x378773(0x488)+'nter;'+_0x378773(0x638)+'y\x20JSO'+_0x378773(0x3a1)+_0x378773(0x20c))+_0xdc8fb7['NBjiz'],_0xdc8fb7[_0x378773(0x302)])+_0xdc8fb7[_0x378773(0x304)]+('<div\x20'+'id=\x22s'+'w2-bo'+'dy\x22\x20s'+'tyle='+_0x378773(0x414)+'lay:n'+_0x378773(0x40d)+'>')+('<div\x20'+_0x378773(0x4e2)+'=\x22pad'+_0x378773(0x5bf)+_0x378773(0x407)+_0x378773(0x196)+'order'+_0x378773(0x353)+_0x378773(0x1d3)+_0x378773(0x4bc)+_0x378773(0x3b9)+_0x378773(0x2fe)+'5,143'+',177,'+_0x378773(0x207)+'displ'+'ay:fl'+_0x378773(0x695)+'p:8px'+';alig'+'n-ite'+'ms:ce'+_0x378773(0x57d)+_0x378773(0x319)+_0x378773(0x3ad)+'uto;f'+_0x378773(0x5ec)+_0x378773(0x1d8)+_0x378773(0x677)+'>')+_0xdc8fb7['CufKs']+(_0x378773(0x2ac)+_0x378773(0x4bd)+_0x378773(0x5f5)+_0x378773(0x271)+_0x378773(0x4f1)+'pe=\x22r'+'ange\x22'+'\x20min='+_0x378773(0x1bd)+_0x378773(0x428)+'\x22\x20ste'+_0x378773(0x3cb)+_0x378773(0x15d)+'lue=\x22'+_0x378773(0x3d9)+'yle=\x22'+'width'+_0x378773(0x582)+'x;acc'+'ent-c'+_0x378773(0x5c4))+_0x32ae10,';\x22>'),_0xdc8fb7['cQazX']),_0xdc8fb7[_0x378773(0x527)]),_0x378773(0x5a7)+_0x378773(0x449)+_0x378773(0x20f)+_0x378773(0x14a)+_0x378773(0x4e2)+_0x378773(0x514)+_0x378773(0x44a)+_0x378773(0x537)+_0x378773(0x2d0)+_0x378773(0x31a)+_0x378773(0x247)+'e\x20wal'+_0x378773(0x4d5)+'/\x20spr'+_0x378773(0x512)+_0x378773(0x2c1)+_0x378773(0x2e4)+'g\x20mar'+'ks\x20wh'+_0x378773(0x4af)+'ield\x20'+'is\x20wh'+'ich.<'+_0x378773(0x21a)+'>'),_0xdc8fb7['xQWVL']),'<pre\x20'+_0x378773(0x4ae)+'w2-ou'+_0x378773(0x11d)+_0x378773(0x68b)+_0x378773(0x53e)+_0x378773(0x4e8)+'addin'+_0x378773(0x639)+_0x378773(0x556)+'x;ove'+'rflow'+':auto'+_0x378773(0x641)+_0x378773(0x568)+'auto;'+'white'+'-spac'+'e:pre'+_0x378773(0x26a)+';word'+'-brea'+_0x378773(0x5ba)+_0x378773(0x1b4)+_0x378773(0x5ad)+'nt:in'+_0x378773(0x25c)+';')+('max-h'+_0x378773(0x417)+_0x378773(0x5ee)+_0x378773(0x545)+'\x20repo'+_0x378773(0x358)+_0x378773(0x2a9)+'his\x20p'+'anel\x20'+'updat'+_0x378773(0x299)+_0x378773(0x337)+'when\x20'+'the\x20g'+_0x378773(0x2d2)+'rame\x20'+_0x378773(0x28c)+'\x20—\x20no'+'\x20cons'+_0x378773(0x20a)+_0x378773(0x58f)+'.\x0a\x0aIf'+_0x378773(0x3d2)+_0x378773(0x432)+'empty'+_0x378773(0x4a8)+_0x378773(0x1fc)+_0x378773(0x2e0)+'is\x20no'+'t\x20inj'+'ectin'+_0x378773(0x57c)+_0x378773(0x26b)+'\x20cros'+_0x378773(0x55a)+_0x378773(0x637)+_0x378773(0x2d2)+'rame.'+'</pre'+'>')+('</div'+'>');var _0x3a5e04=_0x410da7['query'+'Selec'+_0x378773(0x466)]('#sw2-'+_0x378773(0x41c)+'s'),_0x1c75f5=_0x410da7[_0x378773(0x27b)+_0x378773(0x346)+_0x378773(0x466)](_0x378773(0x1e7)+'build'),_0x5e571b=_0x410da7[_0x378773(0x27b)+_0x378773(0x346)+'tor']('#sw2-'+_0x378773(0x30d)),_0x200d98=_0x410da7[_0x378773(0x27b)+_0x378773(0x346)+_0x378773(0x466)](_0x378773(0x1e7)+_0x378773(0x22f)),_0x520809=_0x410da7['query'+_0x378773(0x346)+'tor'](_0xdc8fb7['ocXhk']),_0x1e1ad4=_0x410da7['query'+'Selec'+_0x378773(0x466)](_0xdc8fb7[_0x378773(0x465)]),_0x4788f3=_0x410da7[_0x378773(0x27b)+'Selec'+_0x378773(0x466)](_0xdc8fb7['VKRld']),_0x1558ee=_0x410da7[_0x378773(0x27b)+'Selec'+_0x378773(0x466)](_0xdc8fb7[_0x378773(0x274)]),_0x1e3198=_0x410da7[_0x378773(0x27b)+'Selec'+_0x378773(0x466)]('#sw2-'+_0x378773(0x616)),_0x1c9dbf=_0x410da7[_0x378773(0x27b)+'Selec'+'tor'](_0x378773(0x1e7)+'facto'+'r'),_0x4d2759=_0x410da7[_0x378773(0x27b)+'Selec'+'tor'](_0xdc8fb7[_0x378773(0x2b2)]),_0x51a3d8=_0x410da7['query'+_0x378773(0x346)+_0x378773(0x466)]('#sw2-'+'hint'),_0x14e82b=null,_0xbf9f39=![];function _0x38c4d7(){var _0x241729=_0x378773;if(_0x4788f3)_0x4788f3['style'][_0x241729(0x157)+'ay']=_0xbf9f39?'':_0x241729(0x3be);if(_0x1e1ad4)_0x1e1ad4[_0x241729(0x298)+_0x241729(0x4ea)+'t']=_0xbf9f39?_0x241729(0x2a6):_0xdc8fb7[_0x241729(0x39e)];_0x410da7['style']['width']=_0xbf9f39?_0xdc8fb7[_0x241729(0x30a)]:'auto',_0x410da7['style'][_0x241729(0x3b0)+_0x241729(0x5a8)]=_0xbf9f39?_0xdc8fb7['SLEnD']:_0x241729(0x46a)+'21,12'+_0x241729(0x659)+'9)';}if(_0x1e1ad4)_0x1e1ad4['oncli'+'ck']=function(){_0xbf9f39=!_0xbf9f39,_0x38c4d7();};_0x38c4d7();if(_0x520809)_0x520809[_0x378773(0x2c4)+'ck']=function(){var _0x50f55d=_0x378773;_0xdc8fb7[_0x50f55d(0x1d1)](_0x112c86,!![]);};if(_0x1558ee)_0x1558ee['oncli'+'ck']=function(){var _0x4231a7=_0x378773;_0xdc8fb7['nxtUn'](_0x1e6665,_0xdc8fb7[_0x4231a7(0x15e)]);};var _0x1001f7=![];function _0x595784(){var _0x3d8513=_0x378773;_0x1e6665(_0x2d75aa[_0x3d8513(0x1e1)],{'on':_0x1001f7,'factor':parseFloat(_0x1c9dbf[_0x3d8513(0x368)])||-0x2659+0x3*-0x342+0x4d0*0xa});}if(_0x1e3198)_0x1e3198['oncli'+'ck']=function(){var _0xe15697=_0x378773;_0x1001f7=!_0x1001f7,_0x1e3198[_0xe15697(0x298)+_0xe15697(0x4ea)+'t']=_0x1001f7?_0xdc8fb7[_0xe15697(0x56b)]:_0xdc8fb7['DNBIf'],_0x1e3198[_0xe15697(0x4e2)]['backg'+'round']=_0x1001f7?_0x32ae10:_0xdc8fb7[_0xe15697(0x3a3)],_0x1e3198[_0xe15697(0x4e2)][_0xe15697(0x41f)]=_0x1001f7?_0xe15697(0x401)+'1b':_0xdc8fb7[_0xe15697(0x2c5)],_0xdc8fb7[_0xe15697(0x295)](_0x595784);};if(_0x1c9dbf)_0x1c9dbf[_0x378773(0x328)+'ut']=function(){var _0x2e37ab=_0x378773;if(_0x4d2759)_0x4d2759['textC'+_0x2e37ab(0x4ea)+'t']=(parseFloat(_0x1c9dbf[_0x2e37ab(0x368)])||0x25c2+0x1ee8+0x3f*-0x117)[_0x2e37ab(0x604)+'ed'](-0x3a*-0x2b+0x1b9e+-0x255b)+'x';_0x595784();};if(_0x200d98)_0x200d98[_0x378773(0x2c4)+'ck']=function(){var _0x4dabe4=_0x378773,_0x20a665={'nboJd':'Copie'+'d'},_0x34cee8=_0xdc8fb7['qSNLZ'](_0xdc8fb7['FhzeS'](_0xdc8fb7[_0x4dabe4(0x281)](_0x536e67+'\x0a',_0x14e82b?JSON[_0x4dabe4(0x1f2)+'gify'](_0x14e82b,null,0x5*-0x746+0x1351+0x110e):''),'\x0a'),_0x27e21a),_0x49a8b7=function(){var _0xab3b9b=_0x4dabe4;if(_0x200d98)_0x200d98[_0xab3b9b(0x298)+'onten'+'t']=_0x20a665[_0xab3b9b(0x430)];};if(navigator['clipb'+'oard']&&navigator['clipb'+'oard']['write'+'Text'])navigator[_0x4dabe4(0x35d)+_0x4dabe4(0x2af)]['write'+'Text'](_0x34cee8)['then'](_0x49a8b7,function(){_0x44787b();});else _0x44787b();function _0x44787b(){var _0x3a38f1=_0x4dabe4,_0x501b43=document[_0x3a38f1(0x128)+'eElem'+_0x3a38f1(0x2b8)](_0x3a38f1(0x208)+'rea');_0x501b43[_0x3a38f1(0x368)]=_0x34cee8;if(!document[_0x3a38f1(0x2b9)])return;document[_0x3a38f1(0x2b9)][_0x3a38f1(0x49d)+_0x3a38f1(0x606)+'d'](_0x501b43),_0x501b43[_0x3a38f1(0x523)+'t']();try{document[_0x3a38f1(0x693)+_0x3a38f1(0x631)+'d'](_0x3a38f1(0x22f)),_0x2d75aa[_0x3a38f1(0x3fa)](_0x49a8b7);}catch(_0x4fcfcd){}_0x501b43[_0x3a38f1(0x2ab)+'e']();}};_0xdc8fb7['iXkCc'](setTimeout,function(){var _0x49d2d0=_0x378773,_0x5e4fc9=_0xdc8fb7[_0x49d2d0(0x565)][_0x49d2d0(0x41b)]('|'),_0x4fd3e0=0x24cd+-0x3bf*-0x3+0x2b*-0x11e;while(!![]){switch(_0x5e4fc9[_0x4fd3e0++]){case'0':_0x3a5e04[_0x49d2d0(0x4e2)][_0x49d2d0(0x41f)]=_0xdc8fb7[_0x49d2d0(0x4aa)];continue;case'1':if(_0x14e82b)return;continue;case'2':_0x5e571b[_0x49d2d0(0x298)+'onten'+'t']=_0xdc8fb7[_0x49d2d0(0x149)](_0xdc8fb7[_0x49d2d0(0x149)](_0xdc8fb7['WzWtx'](_0xdc8fb7['giAjZ'](_0xdc8fb7[_0x49d2d0(0x143)]('The\x20g'+'ame\x20f'+'rame\x20'+_0x49d2d0(0x54f)+'\x20post'+_0x49d2d0(0x612)+_0x49d2d0(0x415)+_0x49d2d0(0x547)+_0x49d2d0(0x283)+'\x0a',_0xdc8fb7[_0x49d2d0(0x55d)]),_0xdc8fb7['KsTeN'])+_0xdc8fb7[_0x49d2d0(0x133)],_0x49d2d0(0x47a)+_0x49d2d0(0x5f6)+_0x49d2d0(0x212)+_0x49d2d0(0x127)+'t\x20bee'+'n\x20rel'+_0x49d2d0(0x1df)+_0x49d2d0(0x65c)+'e\x20ins'+'talli'+_0x49d2d0(0x53a))+_0xdc8fb7[_0x49d2d0(0x277)],_0xdc8fb7[_0x49d2d0(0x186)]),'Reloa'+_0x49d2d0(0x3f4)+'\x20game'+_0x49d2d0(0x61c)+'\x20once'+_0x49d2d0(0x1e0)+'watch'+_0x49d2d0(0x569)+_0x49d2d0(0x62d)+'l\x20aga'+_0x49d2d0(0x3b5));continue;case'3':if(_0xdc8fb7[_0x49d2d0(0x519)](!_0x3a5e04,!_0x5e571b))return;continue;case'4':_0x3a5e04[_0x49d2d0(0x298)+'onten'+'t']=_0x49d2d0(0x3e4)+_0x49d2d0(0x2dc)+_0x49d2d0(0x4b0)+'\x2060s\x20'+_0x49d2d0(0x5d1)+_0x49d2d0(0x492)+_0x49d2d0(0x290)+_0x49d2d0(0x1a3)+'?';continue;}break;}},-0x6def+0x7*-0x1ffd+0x1*0x2383a);var _0x42867a={'set':function(_0x14f881){var _0x53beb2=_0x378773,_0x162f7a={'FndrJ':function(_0xeaceb1,_0x2f617a){return _0xdc8fb7['SPIKh'](_0xeaceb1,_0x2f617a);},'CXEDl':function(_0x1fd9af,_0x1914a1){return _0x1fd9af+_0x1914a1;},'XZFVC':'\x20A\x20ho'+_0x53beb2(0x572)+'red\x20a'+'t\x20','qRQYK':_0xdc8fb7[_0x53beb2(0x5c7)],'dNOkR':_0xdc8fb7[_0x53beb2(0x371)]};_0x14e82b=_0x14f881;if(_0x200d98)_0x200d98['style'][_0x53beb2(0x157)+'ay']='';if(_0x1c75f5){if(_0xdc8fb7['VlNRX'](_0x53beb2(0x4d3),_0xdc8fb7['rbTkA'])){_0x1c75f5[_0x53beb2(0x298)+_0x53beb2(0x4ea)+'t']='v'+(_0x14f881[_0x53beb2(0x45c)+'on']||'?');var _0x3b5073=_0x346a98,_0x6d8add=_0x14f881[_0x53beb2(0x45c)+'on']||'';_0x1c75f5[_0x53beb2(0x4e2)][_0x53beb2(0x41f)]=_0x6d8add===_0x3b5073?_0x32ae10:'#ff6e'+'74',_0x1c75f5[_0x53beb2(0x4e2)]['borde'+_0x53beb2(0x23d)+'r']=_0xdc8fb7['tjEox'](_0x6d8add,_0x3b5073)?_0x53beb2(0x46a)+_0x53beb2(0x62f)+'43,17'+'7,.35'+')':_0x53beb2(0x5aa)+'74';}else try{var _0xa5c605=_0x2040f8&&_0x1112d8[_0x53beb2(0x431)];if(!_0xa5c605||_0xa5c605['__sak'+'ura']!==_0x493645||_0xa5c605['kind']!=='cmd')return;_0x2d75aa[_0x53beb2(0x562)](_0x42d5ee,_0xa5c605[_0x53beb2(0x500)],_0xa5c605['arg']);}catch(_0x2fe623){}}var _0x285e7b=_0x14f881['insta'+'nces']&&_0x14f881[_0x53beb2(0x3c7)+_0x53beb2(0x44e)][_0x53beb2(0x1db)+'ntrol'+'ler'],_0x45886b=Math['round']((_0x14f881[_0x53beb2(0x19b)+_0x53beb2(0x267)]||0x14a+0x10b2*-0x1+0x1*0xf68)/(-0x8c7+-0xab*0xa+-0x1*-0x135d));if(_0x3a5e04){var _0x11de40,_0x198c1e;if(_0x285e7b&&_0x14f881['surve'+'y']&&_0x14f881[_0x53beb2(0x43c)+'y']['FPSco'+_0x53beb2(0x17f)+_0x53beb2(0x33b)])_0x11de40=_0xdc8fb7[_0x53beb2(0x410)](_0x53beb2(0x613)+'·\x20',Object['keys'](_0x14f881['insta'+_0x53beb2(0x44e)])[_0x53beb2(0x62e)+'h'])+_0xdc8fb7['HmjaT']+_0x45886b+'s',_0x198c1e=_0x53beb2(0x3f1)+'a8';else{if(_0x14f881[_0x53beb2(0x5a4)+_0x53beb2(0x555)+'ed']>-0x72b*0x3+-0x8bd*0x1+0x1e3e)_0x11de40=_0xdc8fb7['WzWtx'](_0xdc8fb7['Anhvi']('hooks'+_0x53beb2(0x1fa)+_0x53beb2(0x367),_0x45886b),'s'),_0x198c1e='#ffd4'+'8a';else _0x14f881['scrip'+'tData']?(_0x11de40='metad'+'ata\x20r'+'eady\x20'+'·\x20'+_0x45886b+'s',_0x198c1e=_0x53beb2(0x20d)+'8a'):(_0x11de40=(_0x14f881['arm']&&_0x14f881[_0x53beb2(0x629)]['ok']?_0xdc8fb7[_0x53beb2(0x692)]:_0x53beb2(0x173)+'g\x20·\x20')+_0x45886b+'s',_0x198c1e='#ffd4'+'8a');}_0x3a5e04[_0x53beb2(0x298)+_0x53beb2(0x4ea)+'t']=_0x11de40,_0x3a5e04['style'][_0x53beb2(0x41f)]=_0x198c1e;}_0x51a3d8&&(_0x51a3d8['textC'+_0x53beb2(0x4ea)+'t']=_0x14f881['diff']&&_0x14f881[_0x53beb2(0x483)][_0x53beb2(0x62e)+'h']?_0x53beb2(0x2e6)+'vs\x20sn'+'apsho'+_0x53beb2(0x32f)+_0x14f881['diff']['join'](',\x20'):_0x53beb2(0x19c)+_0x53beb2(0x5b8)+'hile\x20'+'walki'+_0x53beb2(0x338)+_0x53beb2(0x2c6)+'ting\x20'+_0x53beb2(0x5e3)+'ping\x20'+_0x53beb2(0x181)+'\x20whic'+'h\x20fie'+_0x53beb2(0x4f2)+_0x53beb2(0x382)+'h.');_0x14f881[_0x53beb2(0x616)]&&_0x1e3198&&(_0x1001f7=!!_0x14f881['speed']['on'],_0x1e3198['textC'+_0x53beb2(0x4ea)+'t']=_0x1001f7?_0x53beb2(0x4f5)+_0x53beb2(0x374):'Speed'+_0x53beb2(0x66f),_0x1e3198[_0x53beb2(0x4e2)][_0x53beb2(0x3b0)+_0x53beb2(0x5a8)]=_0x1001f7?_0x32ae10:_0x53beb2(0x387)+'paren'+'t',_0x1e3198[_0x53beb2(0x4e2)]['color']=_0x1001f7?_0xdc8fb7['yLVVl']:_0x53beb2(0x458)+'f5',_0x4d2759&&_0x14f881[_0x53beb2(0x616)][_0x53beb2(0x271)+'r']&&(_0x4d2759['textC'+'onten'+'t']=_0xdc8fb7[_0x53beb2(0x46d)](Number(_0x14f881['speed'][_0x53beb2(0x271)+'r'])[_0x53beb2(0x604)+'ed'](0x25cd+-0x1909+-0xcc3),'x')));if(_0x5e571b)try{if(_0x53beb2(0x440)!==_0x53beb2(0x16c))_0x5e571b[_0x53beb2(0x298)+_0x53beb2(0x4ea)+'t']=_0x1c4d68(_0x14f881);else{var _0x47891b='';_0x4303d3['hookF'+_0x53beb2(0x448)+_0x53beb2(0x5bc)]&&(_0x47891b=_0x162f7a[_0x53beb2(0x49e)](_0x162f7a[_0x53beb2(0x49e)](_0x162f7a[_0x53beb2(0x4e4)](_0x162f7a[_0x53beb2(0x1e3)]+_0x2d2790[_0x53beb2(0x673)+_0x53beb2(0x448)+'oof'][_0x53beb2(0x3e2)],'ms\x20wi'+'th\x20or'+'igina'+'lFunc'+'=')+_0x25542f[_0x53beb2(0x673)+_0x53beb2(0x448)+'oof']['origi'+'nalFu'+'nc']+(_0x53beb2(0x1e0)+'game\x20'+'resol'+_0x53beb2(0x327))+_0x604649[_0x53beb2(0x673)+'irePr'+'oof'][_0x53beb2(0x4b8)+_0x53beb2(0x4ce)+_0x53beb2(0x669)+'re'],'\x20(sou'+'rce:\x20')+(_0x2ccf1e[_0x53beb2(0x673)+_0x53beb2(0x448)+_0x53beb2(0x5bc)][_0x53beb2(0x47f)+_0x53beb2(0x2a4)+'AtFir'+'e']||'none'),_0x162f7a[_0x53beb2(0x4e3)])),_0x13aee7['warni'+'ngs'][_0x53beb2(0x5cf)](_0x162f7a[_0x53beb2(0x55b)]+(_0x357a5c['globa'+'ls']['gameS'+'ource']||'none')+_0x53beb2(0x3b3)+(_0x53beb2(0x1c3)+_0x53beb2(0x66a)+_0x53beb2(0x5b5)+'\x20bloc'+'ked\x20u'+_0x53beb2(0x559)+'a\x20gam'+'e\x20obj'+'ect\x20w'+'ith\x20M'+'odule'+'.HEAP'+_0x53beb2(0x1f4)+_0x53beb2(0x2f8)+_0x53beb2(0x601)+'.')+_0x47891b);}}catch(_0x51758a){_0x5e571b['textC'+_0x53beb2(0x4ea)+'t']=JSON[_0x53beb2(0x1f2)+'gify'](_0x14f881,null,0x162+0x155d+0x16be*-0x1);}console['log'](_0xdc8fb7[_0x53beb2(0x4b7)],_0xdc8fb7[_0x53beb2(0x410)](_0xdc8fb7[_0x53beb2(0x255)]+_0x32ae10,';font'+_0x53beb2(0x4f3)+_0x53beb2(0x5bb)+'0'),_0x14f881),console['log'](_0xdc8fb7[_0x53beb2(0x27a)](_0xdc8fb7[_0x53beb2(0x46d)](_0xdc8fb7[_0x53beb2(0x149)](_0x536e67,'\x0a'),JSON[_0x53beb2(0x1f2)+'gify'](_0x14f881,null,-0xb*-0x1df+-0x3*-0x5bf+-0x25d1)),'\x0a')+_0x27e21a);}};return _0x410da7[_0x378773(0x1b0)+'et']['api']='1',_0x410da7['api']=_0x42867a,_0x42867a;}function _0x1c4d68(_0x39e137){var _0x3f8728=_0x44d48d,_0x57024e=[];_0x57024e[_0x3f8728(0x5cf)](_0xdc8fb7[_0x3f8728(0x349)](_0xdc8fb7['qSNLZ'](_0xdc8fb7[_0x3f8728(0x573)],_0x39e137[_0x3f8728(0x517)]||'?'),_0x3f8728(0x3e7))+Math['round']((_0x39e137['elaps'+_0x3f8728(0x267)]||-0x2067+-0x1985*0x1+0x39ec)/(-0xf02+0x1*-0x19a1+0x2c8b))+'s)'),_0x57024e[_0x3f8728(0x5cf)]('uwmk\x20'+_0x3f8728(0x17d)+(_0x39e137['uwmk']?_0x3f8728(0x177):'no')+_0xdc8fb7['jyUKx']+(_0x39e137[_0x3f8728(0x28d)+_0x3f8728(0x2da)+'ext']?'yes':'no')+('\x20\x20\x20ty'+'pes\x20')+(_0xdc8fb7[_0x3f8728(0x339)](_0x39e137[_0x3f8728(0x3c4)+_0x3f8728(0x42c)],null)?_0x39e137['typeC'+_0x3f8728(0x42c)]:'?')),_0x57024e['push'](_0xdc8fb7['SPIKh'](_0xdc8fb7[_0x3f8728(0x216)](_0xdc8fb7['atKfB'],_0x39e137[_0x3f8728(0x5a4)+_0x3f8728(0x555)+'ed'])+'/'+_0x39e137['hooks'+_0x3f8728(0x457)],_0x3f8728(0x633)+'ied')),_0x57024e['push']('');var _0x4c8ce9=_0x39e137[_0x3f8728(0x3c7)+_0x3f8728(0x44e)]||{},_0x338fa8=Object[_0x3f8728(0x53f)](_0x4c8ce9);if(!_0x338fa8[_0x3f8728(0x62e)+'h']){if('LrWvU'===_0xdc8fb7[_0x3f8728(0x11a)]){var _0x44b19c=_0x482251['apply'](this,arguments);try{if(_0x44b19c&&_0xdc8fb7['fOQfV'](typeof _0x44b19c[_0x3f8728(0x64b)],'funct'+'ion'))_0x44b19c[_0x3f8728(0x64b)](_0x5c51c6,function(){});else _0x1577b0(_0x44b19c);}catch(_0x100c8a){}return _0x44b19c;}else _0x57024e[_0x3f8728(0x5cf)]('no\x20li'+_0x3f8728(0x5e9)+'jects'+_0x3f8728(0x118)+'ured\x20'+'yet.'),_0x57024e['push'](''),_0x57024e['push'](_0xdc8fb7['pkaYN']),_0x57024e['push'](_0x3f8728(0x56c)+'date\x20'+_0x3f8728(0x242)+'et,\x20o'+_0x3f8728(0x3b6)+_0x3f8728(0x253)+'ature'+_0x3f8728(0x38b)+'not\x20m'+'atch.');}for(var _0x532e1d=-0x2081+-0x7*-0x8f+0x1c98;_0x532e1d<_0x338fa8[_0x3f8728(0x62e)+'h'];_0x532e1d++){if(_0xdc8fb7[_0x3f8728(0x315)](_0x3f8728(0x284),_0x3f8728(0x284))){var _0x32e7e0=_0x338fa8[_0x532e1d];_0x57024e[_0x3f8728(0x5cf)](_0xdc8fb7['veiUS'](_0x32e7e0,_0xdc8fb7['CbEBj'])+_0x4c8ce9[_0x32e7e0]);}else _0x125a3b[_0x3f8728(0x450)+'ngs']['push'](_0xdc8fb7['PFDFn'](_0xdc8fb7[_0x3f8728(0x32d)]('captu'+_0x3f8728(0x33e),_0x1c70d1[_0x3f8728(0x53f)](_0xeba9db[_0x3f8728(0x3c7)+_0x3f8728(0x44e)])[_0x3f8728(0x62e)+'h'])+('\x20obje'+'ct(s)'+_0x3f8728(0x42e)+'read\x20'+_0x3f8728(0x3df)+'lds.\x20'),_0x1b08d0[_0x3f8728(0x1dc)+'rror']?_0x3f8728(0x35f)+_0x3f8728(0x13d)+_0x4acd66[_0x3f8728(0x1dc)+'rror']:_0x3f8728(0x2a7)+_0x3f8728(0x2db)+'iled,'+_0x3f8728(0x5dc)+'very\x20'+_0x3f8728(0x28e)+'t\x20was'+_0x3f8728(0x25e)+_0x3f8728(0x13f)+'y\x20typ'+'e.'));}_0x57024e['push']('');var _0xdc1f19=_0x39e137[_0x3f8728(0x43c)+'y']||{},_0x488d97=Object['keys'](_0xdc1f19);for(var _0x3e2c77=0x1c0c+-0x3fa*-0x7+-0x37e2;_0xdc8fb7['ymHOz'](_0x3e2c77,_0x488d97['lengt'+'h']);_0x3e2c77++){if('sKPKy'===_0xdc8fb7[_0x3f8728(0x49a)])_0x55ab98(_0x275ac1['on'],_0xdc8fb7[_0x3f8728(0x1d1)](_0x4208d1,_0x210155['value'])||0x1*0x1e71+-0xb*0x79+-0x193d);else{var _0x35a31f=_0x488d97[_0x3e2c77],_0xcb659=_0xdc1f19[_0x35a31f];if(!_0xcb659||!_0xcb659[_0x3f8728(0x62e)+'h'])continue;_0x57024e[_0x3f8728(0x5cf)](_0xdc8fb7['KULFi'](_0xdc8fb7[_0x3f8728(0x48f)](_0xdc8fb7[_0x3f8728(0x50f)],_0x35a31f)+'\x20',new Array(Math['max'](0x6a*-0x5c+-0xe9*0xb+0x2*0x180e,-0x11aa+0x1*-0x1417+0x25e3-_0x35a31f[_0x3f8728(0x62e)+'h']))[_0x3f8728(0x174)]('─'))),_0x57024e['push']('\x20\x20off'+'set\x20\x20'+_0x3f8728(0x1b6)+_0x3f8728(0x2d6)+_0x3f8728(0x147)+'lue\x20\x20'+_0x3f8728(0x2d6)+_0x3f8728(0x2d6)+'raw');for(var _0x2833bd=0x165c+-0x4*-0x9a+-0x18c4;_0xdc8fb7['jAcNc'](_0x2833bd,_0xcb659[_0x3f8728(0x62e)+'h']);_0x2833bd++){var _0x7b6a66=_0xcb659[_0x2833bd],_0x31eb0d=typeof _0x7b6a66['v']==='numbe'+'r'?Math[_0x3f8728(0x5a8)](_0x7b6a66['v']*(-0x2489+-0x159f+0x3e10))/(-0x1*0x967+0x10ea+-0x39b):_0x7b6a66['v'];_0x57024e['push'](_0xdc8fb7['FdzNs'](_0xdc8fb7['qkvPw']('\x20\x20'+('0x'+_0x7b6a66['o']['toStr'+_0x3f8728(0x198)](-0x1054+0x3ea+-0xc7a*-0x1))[_0x3f8728(0x619)+'d'](-0xc42+0x12ab+-0x661)+'\x20'+_0x7b6a66['k'][_0x3f8728(0x619)+'d'](0x1fc+0x4d*-0x34+0xa7*0x15)+'\x20',String(_0x31eb0d)['padEn'+'d'](-0x5*-0x1ed+-0x3*0x569+0x6aa))+'\x20',_0x7b6a66['raw']||''));}_0x57024e[_0x3f8728(0x5cf)]('');}}if(_0x39e137[_0x3f8728(0x450)+_0x3f8728(0x3e1)]&&_0x39e137['warni'+_0x3f8728(0x3e1)][_0x3f8728(0x62e)+'h']){_0x57024e['push'](_0x3f8728(0x450)+'ngs');for(var _0xcea045=-0x202f+0x6f*0x35+0x934;_0xcea045<_0x39e137[_0x3f8728(0x450)+'ngs'][_0x3f8728(0x62e)+'h'];_0xcea045++)_0x57024e[_0x3f8728(0x5cf)](_0xdc8fb7['WVCFv'](_0x3f8728(0x66b),_0x39e137[_0x3f8728(0x450)+'ngs'][_0xcea045]));}return _0x57024e[_0x3f8728(0x174)]('\x0a');}window['addEv'+_0x44d48d(0x434)+'stene'+'r'](_0xdc8fb7[_0x44d48d(0x4da)],function(_0x18c42a){var _0x152868=_0x44d48d,_0x1ac44b=_0x18c42a['data'];if(!_0x1ac44b||_0x1ac44b[_0x152868(0x662)+'ura']!==_0xd34dbc)return;try{if(_0xdc8fb7[_0x152868(0x130)]===_0x152868(0x244)){if(_0x1ac44b[_0x152868(0x33c)]===_0x152868(0x31c)){if(_0xdc8fb7['tjEox'](_0x152868(0x29f),_0xdc8fb7[_0x152868(0x324)])){_0x286ab9()[_0x152868(0x153)]({'host':_0x1ac44b[_0x152868(0x517)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}else{var _0x58a4db=_0x3208a9['resol'+'veGam'+'e']();if(_0x58a4db)return _0x33ff62['sourc'+'e']=_0xdc8fb7['XwHDm'],_0x58a4db;}}if(_0x1ac44b[_0x152868(0x33c)]===_0xdc8fb7['wnCtv'])_0x286ab9()['set'](_0x1ac44b[_0x152868(0x511)+'t']);}else return _0x5749de+_0x308140[_0x28e8e9][_0x152868(0x62e)+'h'];}catch(_0x2be2e7){console['warn'](_0xdc8fb7[_0x152868(0x47c)],_0xdc8fb7['LRazR'](_0x152868(0x41f)+':',_0x32ae10),_0x2be2e7);}});function _0x4738e1(){var _0x5823db=_0x44d48d,_0x4a0785={'BkinT':function(_0x13cc49,_0x5d8a07){var _0x353ac5=_0x40b5;return _0xdc8fb7[_0x353ac5(0x3ea)](_0x13cc49,_0x5d8a07);},'odVhT':_0x5823db(0x3b1)+'r\x20you'+'\x20are\x20'+_0x5823db(0x667)+_0x5823db(0x366)+_0x5823db(0x332)+_0x5823db(0x564)+_0x5823db(0x24f)+'ok\x20is'+_0x5823db(0x168)+_0x5823db(0x17c)+_0x5823db(0x5ff)+'verlo'+_0x5823db(0x1f8),'UUavD':function(_0x1b304,_0x408c29){var _0x441867=_0x5823db;return _0xdc8fb7[_0x441867(0x340)](_0x1b304,_0x408c29);}};if(_0xdc8fb7['ndbyh'](_0x5823db(0x1b9),_0x5823db(0x1b9)))_0x43480d['warni'+_0x5823db(0x3e1)][_0x5823db(0x5cf)](_0x4a0785['BkinT'](_0x5823db(0x154)+_0x5823db(0x250)+'appli'+_0x5823db(0x41d)+'t\x20no\x20'+_0x5823db(0x1db)+'ntrol'+_0x5823db(0x2fd)+_0x5823db(0x55f)+_0x5823db(0x231)+_0x5823db(0x4ad),_0x4a0785['odVhT']));else{if(_0x4af422()){if(_0xdc8fb7['HALBK']===_0xdc8fb7['VepmQ'])return{'version':_0x598689,'when':new _0x3a837c()['toISO'+_0x5823db(0x4f0)+'g'](),'elapsedMs':_0x4a0785['UUavD'](_0x4fb8bf[_0x5823db(0x670)](),_0x27520d),'host':_0x16ec30,'uwmk':!!(_0x473716[_0x5823db(0x452)+_0x5823db(0x621)+'dkit']&&_0x33c07b[_0x5823db(0x452)+_0x5823db(0x621)+'dkit']['Runti'+'me']),'il2CppContext':![],'arm':_0x4442d4,'hooksTotal':_0x4677eb[_0x5823db(0x62e)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x30db63(_0xae5916&&_0x1f2ffa[_0x5823db(0x279)+'ge']||_0x13a1a7)};else{_0x112c86(!![]);return;}}_0xdc8fb7[_0x5823db(0x429)](_0x286ab9);}}if(document['body'])_0x4738e1();else document[_0x44d48d(0x3c2)+'entLi'+_0x44d48d(0x2d5)+'r'](_0xdc8fb7['wMueB'],_0x4738e1,{'once':!![]});return;}window[_0x44d48d(0x1bc)+'URA_S'+_0x44d48d(0x251)]=window[_0x44d48d(0x1bc)+_0x44d48d(0x2b0)+_0x44d48d(0x251)]||{'at':Date['now']()};function _0x18ed3e(_0x366c43,_0x576e2a){var _0x49a4b0=_0x44d48d,_0x525050={'__sakura':_0xd34dbc,'kind':_0x366c43};if(_0x576e2a){for(var _0x589799 in _0x576e2a)_0x525050[_0x589799]=_0x576e2a[_0x589799];}try{if(window[_0x49a4b0(0x14c)+'t']&&_0xdc8fb7[_0x49a4b0(0x31e)](window['paren'+'t'],window))window[_0x49a4b0(0x14c)+'t'][_0x49a4b0(0x2a2)+'essag'+'e'](_0x525050,'*');}catch(_0x315110){}try{if(window[_0x49a4b0(0x19f)]&&_0xdc8fb7[_0x49a4b0(0x554)](window['top'],window))window['top'][_0x49a4b0(0x2a2)+_0x49a4b0(0x460)+'e'](_0x525050,'*');}catch(_0x3f4581){}}console['log'](_0xdc8fb7['mephE']('%c[sa'+'kura]'+_0x44d48d(0x318)+'LAYER'+_0x44d48d(0x1c9)+_0x44d48d(0x614),_0x346a98),_0xdc8fb7['MqLud'](_0xdc8fb7['cOTId']('color'+':',_0x32ae10),_0x44d48d(0x481)+'-weig'+'ht:70'+_0x44d48d(0x123)+'t-siz'+'e:14p'+'x'),{'host':_0x40c4d2,'href':location[_0x44d48d(0x1de)],'version':_0x346a98}),_0x18ed3e(_0x44d48d(0x31c),{'host':_0x40c4d2,'role':_0x202974});var _0x4f0af9=window[_0x44d48d(0x1bc)+'URA_S'+_0x44d48d(0x251)]&&window[_0x44d48d(0x1bc)+'URA_S'+_0x44d48d(0x251)]['at']||Date[_0x44d48d(0x670)]();window[_0x44d48d(0x3c2)+'entLi'+_0x44d48d(0x2d5)+'r'](_0xdc8fb7[_0x44d48d(0x4da)],function(_0x4e4ee5){var _0x5502d0=_0x44d48d;if('otFWr'!=='KftbV')try{if(_0x5502d0(0x5e8)===_0x5502d0(0x5e8)){var _0x140289=_0x4e4ee5&&_0x4e4ee5[_0x5502d0(0x431)];if(!_0x140289||_0xdc8fb7['AnlXc'](_0x140289['__sak'+_0x5502d0(0x27d)],_0xd34dbc)||_0x140289[_0x5502d0(0x33c)]!==_0x5502d0(0x500))return;_0xdc8fb7['xlQKM'](_0x40434a,_0x140289[_0x5502d0(0x500)],_0x140289[_0x5502d0(0x54c)]);}else{var _0xec41de=_0x11c3a3();if(_0xec41de&&_0xec41de['Modul'+'e']&&_0xec41de[_0x5502d0(0x468)+'e'][_0x5502d0(0x11c)+'8']&&_0xec41de[_0x5502d0(0x468)+'e']['HEAPU'+'8'][_0x5502d0(0x38d)+'r'])return _0xec41de[_0x5502d0(0x468)+'e'][_0x5502d0(0x11c)+'8'];}}catch(_0x30f741){}else _0x4c2330=_0x3d41e9[_0x5502d0(0x53f)](_0x1dd997)[_0x5502d0(0x40a)](0x6df*0x5+-0x4*-0x359+0x1*-0x2fbf,0x255e+-0x3e*-0x6f+-0x4028);});try{if(_0x44d48d(0x411)!==_0xdc8fb7[_0x44d48d(0x5ed)]){var _0x43f27c=-0x6e3+0x3*-0xb99+0x29ae;for(var _0x66027b=0xe75*-0x2+0x65*-0xf+-0x25*-0xf1;_0xdc8fb7[_0x44d48d(0x3b8)](_0x66027b,_0x5d9d9['lengt'+'h']);_0x66027b++){if(_0x562ff9[_0x66027b]['hook']&&_0x33efa1[_0x66027b][_0x44d48d(0x5ac)][_0x44d48d(0x268)+'ed'])_0x43f27c++;}return _0x43f27c;}else{var _0x4cb9f9=new BroadcastChannel(_0x44d48d(0x544)+_0x44d48d(0x5ea));_0x4cb9f9[_0x44d48d(0x491)+_0x44d48d(0x43f)]=function(_0x5cea57){var _0x2462a2=_0x44d48d,_0x30478d=_0x5cea57['data'];if(_0x30478d&&_0xdc8fb7[_0x2462a2(0x686)](_0x30478d[_0x2462a2(0x662)+'ura'],_0xd34dbc)&&_0x30478d['kind']===_0x2462a2(0x500))_0xdc8fb7[_0x2462a2(0x1ae)](_0x40434a,_0x30478d['cmd'],_0x30478d[_0x2462a2(0x54c)]);};}}catch(_0x5e8672){}var _0x57ba35=[];(function _0x4a87d0(){var _0x6f55b6=_0x44d48d,_0x30dcd8=[_0xdc8fb7['YFted'],_0x6f55b6(0x4ff),_0xdc8fb7['KmVMg'],_0xdc8fb7['pCRRM'],_0x6f55b6(0x238)];for(var _0x5225eb=-0x13*-0x1c1+0x6*0x368+0x1*-0x35c3;_0x5225eb<_0x30dcd8[_0x6f55b6(0x62e)+'h'];_0x5225eb++){if('TMwco'===_0x6f55b6(0x29d)){var _0x36f9c9='';for(var _0x49b28a=0x1cb*-0x6+-0x61*0x5+0xca7;_0x49b28a<_0x250e62[_0x6f55b6(0x62e)+'h'];_0x49b28a++){var _0x3b9e32=_0x183ed0[_0x49b28a][_0x6f55b6(0x1e8)+'ing'](-0x1*0x545+0x9ef+0x49a*-0x1);_0x36f9c9+=(_0xdc8fb7['NkISB'](_0x3b9e32[_0x6f55b6(0x62e)+'h'],-0x16b7*-0x1+0x1c14+0x1*-0x32c9)?'0':'')+_0x3b9e32;}return _0x36f9c9;}else(function(_0x5813fe){var _0x324714=_0x6f55b6,_0x2fe2e8={'GhkOy':function(_0x3a3463,_0x3a7365){return _0x3a3463+_0x3a7365;},'ENBDQ':function(_0x34a008,_0x5a5d64){return _0x34a008+_0x5a5d64;},'wJNPX':_0xdc8fb7[_0x324714(0x3ab)],'HHvqG':function(_0x371d53,_0x2a30df){return _0x371d53<_0x2a30df;},'EwBnK':_0x324714(0x300),'kRmgx':function(_0x56ca5b,_0x1fae8){return _0x56ca5b!==_0x1fae8;},'xEzlW':function(_0x6de48c,_0x526e47){return _0x6de48c!==_0x526e47;}},_0x178796=console[_0x5813fe];if(typeof _0x178796!==_0xdc8fb7['TnBGY'])return;console[_0x5813fe]=function(){var _0x27e401=_0x324714,_0x552eeb={'UZRWr':function(_0x2d762b,_0x129ae4){var _0x50ac70=_0x40b5;return _0x2fe2e8[_0x50ac70(0x3ba)](_0x2d762b,_0x129ae4);},'LfNYS':function(_0x317d40,_0x2e7f8a){var _0x2ee52b=_0x40b5;return _0x2fe2e8[_0x2ee52b(0x5b2)](_0x317d40,_0x2e7f8a);},'ZzxBw':_0x2fe2e8['wJNPX'],'yMUYI':_0x27e401(0x443)+_0x27e401(0x636)+_0x27e401(0x2e3)+_0x27e401(0x1d6)+'='};try{var _0x572f5e='';for(var _0x56c494=-0x4*0x46c+-0x3e*0x4d+0x2456;_0x2fe2e8[_0x27e401(0x5f3)](_0x56c494,arguments[_0x27e401(0x62e)+'h']);_0x56c494++){if(_0x2fe2e8[_0x27e401(0x441)]!==_0x27e401(0x300)){var _0x17ff82=_0x1cddd6['slice'](0x1*-0x24cb+0x1925+0xba6,0x1e4c+0x1*-0xc93+-0x108d);if(_0x4f2ce5[_0x27e401(0x35a)+'Of'](_0x17ff82)===-(0x2*0x631+0x261f+-0x3280)&&_0x57a384[_0x27e401(0x62e)+'h']<-0x9f9+0x821+0x7*0x4c)_0x5aa9e3['push'](_0x17ff82);}else{var _0xd4bf11=arguments[_0x56c494];if(typeof _0xd4bf11==='strin'+'g')_0x572f5e+=_0xd4bf11;else{if(_0xd4bf11&&_0xd4bf11[_0x27e401(0x279)+'ge'])_0x572f5e+=_0xd4bf11[_0x27e401(0x279)+'ge'];}}}if(_0x2fe2e8[_0x27e401(0x418)](_0x572f5e['index'+'Of'](_0x536e67),-(-0x6*0x2b+-0x2456+-0x2559*-0x1)))return _0x178796[_0x27e401(0x63b)](console,arguments);if(_0x2fe2e8[_0x27e401(0x5a2)](_0x572f5e[_0x27e401(0x35a)+'Of']('Unity'+'WebMo'+_0x27e401(0x18b)),-(0x23e*-0x2+0x19*-0x146+-0x223*-0x11))){if(_0x27e401(0x5c9)!==_0x27e401(0x5c9))_0x27c1bc=_0x552eeb[_0x27e401(0x179)](_0x552eeb['LfNYS'](_0x552eeb['UZRWr'](_0x552eeb['LfNYS'](_0x552eeb['ZzxBw'],_0x5c90f7['hookF'+_0x27e401(0x448)+_0x27e401(0x5bc)]['atMs'])+_0x552eeb['yMUYI']+_0x1ae466['hookF'+'irePr'+_0x27e401(0x5bc)][_0x27e401(0x68d)+_0x27e401(0x2c8)+'nc']+(_0x27e401(0x1e0)+'game\x20'+'resol'+'ved='),_0x4b0a21[_0x27e401(0x673)+_0x27e401(0x448)+_0x27e401(0x5bc)]['resol'+'veGam'+_0x27e401(0x669)+'re']),_0x27e401(0x4f6)+'rce:\x20')+(_0x54b551[_0x27e401(0x673)+_0x27e401(0x448)+_0x27e401(0x5bc)][_0x27e401(0x47f)+_0x27e401(0x2a4)+_0x27e401(0x640)+'e']||_0x27e401(0x3be)),_0x27e401(0x3e8)+'\x20the\x20'+_0x27e401(0x2f3)+'ence\x20'+'exist'+'ed\x20th'+_0x27e401(0x34d)+'d\x20is\x20'+'not\x20r'+_0x27e401(0x421)+_0x27e401(0x3f3)+'ow.');else{var _0x43b964=_0x572f5e['slice'](-0x230c+-0x6af+-0x9*-0x4a3,-0xaff+0x10ce+-0x4a3);if(_0x57ba35[_0x27e401(0x35a)+'Of'](_0x43b964)===-(0x1e92+0x13de+-0x326f)&&_0x57ba35[_0x27e401(0x62e)+'h']<0x21d*-0x9+0x3*0x172+0xeeb)_0x57ba35[_0x27e401(0x5cf)](_0x43b964);}}}catch(_0x4e839c){}return _0x178796[_0x27e401(0x63b)](console,arguments);};}(_0x30dcd8[_0x5225eb]));}}());var _0x2c5c4d={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x5d02c3=null,_0x1653d9=null,_0x6aacbe=-(-0x11c*0xd+0x1c5d+-0xdf0*0x1),_0x2c3c36=null;function _0x574962(_0x230d2b){var _0x3b2b44=_0x44d48d;try{if(_0x3b2b44(0x64a)!==_0xdc8fb7[_0x3b2b44(0x560)]){if(!_0x230d2b)return;var _0x2b85e1=_0x230d2b[_0x3b2b44(0x3c7)+'nce']?_0x230d2b['insta'+_0x3b2b44(0x45d)]['expor'+'ts']:_0x230d2b['expor'+'ts']||null;if(!_0x2b85e1)return;if(!_0x2c3c36){if(_0xdc8fb7['AnlXc'](_0xdc8fb7[_0x3b2b44(0x4e7)],'ookZZ'))return _0x37f265['sourc'+'e']=_0x3b2b44(0x25d)+_0x3b2b44(0x363)+_0x3b2b44(0x5da)+'ng',_0x35f293;else try{_0x2c3c36=Object[_0x3b2b44(0x53f)](_0x2b85e1)['slice'](0x1*0x1bb+0x2400+-0x25bb,0xd4*0x1b+0x715+-0x1d59);}catch(_0x3ad955){}}var _0x3896bc=_0x2b85e1['memor'+'y'];_0x3896bc&&_0x3896bc['buffe'+'r']&&_0x3896bc['buffe'+'r'][_0x3b2b44(0x34b)+_0x3b2b44(0x34a)]>-0x19*-0x76+-0x1*0x67+-0x49*0x27&&('rEIRI'==='rEIRI'?(_0x1653d9=_0x3896bc,_0x6aacbe=Date['now']()-_0x4f0af9):_0x581b6a(!![]));}else{var _0x35f688=_0x2220ed[_0x3b2b44(0x128)+_0x3b2b44(0x2c7)+_0x3b2b44(0x2b8)]('style');_0x35f688['id']=_0xdc8fb7[_0x3b2b44(0x2dd)],_0x35f688['textC'+_0x3b2b44(0x4ea)+'t']=_0xdc8fb7[_0x3b2b44(0x314)],(_0x48b415[_0x3b2b44(0x264)]||_0x2ace36[_0x3b2b44(0x34f)+_0x3b2b44(0x29e)+'ement'])['appen'+'dChil'+'d'](_0x35f688);}}catch(_0x5ce369){}}function _0x44ec1c(){var _0x31e99c=_0x44d48d,_0x2c14c1={'WDXOG':_0xdc8fb7['TnBGY'],'qHdNW':'OUMgg','sslvA':_0xdc8fb7['pCruj'],'AwbAp':'name'};try{if(typeof WebAssembly===_0x31e99c(0x1a7)+'ined')return;var _0x2c7e87=[_0xdc8fb7['eklxl'],'insta'+_0x31e99c(0x48d)+'eStre'+_0x31e99c(0x155)];for(var _0x349653=-0x2*0x313+-0x53*0x25+0x1225;_0xdc8fb7[_0x31e99c(0x4a6)](_0x349653,_0x2c7e87[_0x31e99c(0x62e)+'h']);_0x349653++){(function(_0xc4ce2){var _0x213418=_0x31e99c;if(_0x2c14c1['qHdNW']!==_0x2c14c1['qHdNW']){var _0x4c304c=_0x48dc11==='v2'?0x1*0x1ae3+0x1f48+0x1*-0x3a29:_0x3334af==='v3'?0x4*-0x619+-0x313*0x7+0x4*0xb7b:0xf*0x171+0x182*0xe+-0x195*0x1b,_0x44d332=_0x432be2(_0x52570d[_0x213418(0x3d7)],_0x1e16da,_0x4c304c);_0x44d332&&(_0x314cc3[_0x213418(0x225)]=_0x44d332,_0x268c7f['v']=_0x44d332[0x1*0x62d+-0x5*0x182+0x15d]);}else{var _0x5263d4=WebAssembly[_0xc4ce2];if(typeof _0x5263d4!==_0x213418(0x15c)+'ion'||_0x5263d4[_0x213418(0x662)+'uraMe'+'moryT'+'ap'])return;var _0x3c4301=function(){var _0x1936c9=_0x213418,_0x78cc77=_0x5263d4['apply'](this,arguments);try{if(_0x78cc77&&typeof _0x78cc77[_0x1936c9(0x64b)]===_0x2c14c1['WDXOG'])_0x78cc77[_0x1936c9(0x64b)](_0x574962,function(){});else _0x574962(_0x78cc77);}catch(_0x205d5f){}return _0x78cc77;};_0x3c4301[_0x213418(0x662)+_0x213418(0x2a0)+_0x213418(0x674)+'ap']=!![];try{if(_0x2c14c1[_0x213418(0x61a)]==='nzZWW')Object['defin'+_0x213418(0x3d4)+'erty'](_0x3c4301,_0x2c14c1['AwbAp'],{'value':_0x5263d4[_0x213418(0x12f)],'configurable':!![]});else return _0x2183a6['sourc'+'e']=_0x213418(0x4e9)+'n._ru'+'ntime'+'.reso'+'lveGa'+'me()',_0x29f9f0;}catch(_0x4a3794){}WebAssembly[_0xc4ce2]=_0x3c4301;}}(_0x2c7e87[_0x349653]));}}catch(_0x219233){}}var _0xfd7756=null,_0xa64258=null,_0x329eaa={},_0x5e85b2=[],_0x41d898=[],_0x4b4390=[{'type':'FPSco'+_0x44d48d(0x17f)+'ler','keep':!![]},{'type':'Healt'+_0x44d48d(0x3fc)+'pt','keep':!![]},{'type':'Weapo'+_0x44d48d(0x132)+'ger','keep':![]},{'type':'GG_Ga'+'meMan'+'ager','keep':!![]},{'type':_0x44d48d(0x246)+_0x44d48d(0x39a),'keep':!![],'many':!![]}],_0x101ba0=['Assem'+_0x44d48d(0x687)+_0x44d48d(0x373)+'.dll',_0x44d48d(0x461)+_0x44d48d(0x687)+'Sharp'+_0x44d48d(0x635)+_0x44d48d(0x478)+'.dll','ch.sy'+_0x44d48d(0x4fc)+_0x44d48d(0x67a)+_0x44d48d(0x18d)+'ll',_0xdc8fb7[_0x44d48d(0x2eb)],_0xdc8fb7[_0x44d48d(0x53d)],'__Gen'+_0x44d48d(0x273)+'d'];(function _0x5131a8(){var _0x1e704b=_0x44d48d;try{var _0x36436f=window['Unity'+'WebMo'+_0x1e704b(0x18b)]&&window[_0x1e704b(0x452)+_0x1e704b(0x621)+'dkit'][_0x1e704b(0x51a)+'me'];if(!_0x36436f||_0xdc8fb7['KGpQh'](typeof _0x36436f['creat'+_0x1e704b(0x142)+'in'],'funct'+'ion')){_0x2c5c4d[_0x1e704b(0x4e1)]='Runti'+_0x1e704b(0x359)+_0x1e704b(0x57f)+_0x1e704b(0x25b)+'\x20unav'+_0x1e704b(0x5d4)+'le';return;}_0x2c5c4d[_0x1e704b(0x495)+'pted']=!![],_0xa64258=_0x36436f[_0x1e704b(0x128)+_0x1e704b(0x142)+'in']({'name':'sakur'+'a-ski'+_0x1e704b(0x5ef)+'z','version':_0x346a98,'referencedAssemblies':_0x101ba0[_0x1e704b(0x40a)]()}),_0x2c5c4d['ok']=!![];try{var _0x3a5cb9=window[_0x1e704b(0x452)+_0x1e704b(0x621)+'dkit'][_0x1e704b(0x51a)+'me'];_0x3a5cb9[_0x1e704b(0x662)+'uraTa'+'g']=_0xdc8fb7[_0x1e704b(0x1ff)](_0xdc8fb7[_0x1e704b(0x58a)](_0x346a98,':'),Math['rando'+'m']()['toStr'+'ing'](-0x31*0x9+-0x24db+-0x588*-0x7)['slice'](-0xb28+-0xe81+0x19ab,-0x2*0xede+0x12f7+0xacf*0x1)),_0x5d02c3=_0x3a5cb9['__sak'+'uraTa'+'g'];}catch(_0x573023){}_0x292abb(),_0x2c5c4d['hooks'+'Regis'+_0x1e704b(0x3ca)]=_0x5e85b2[_0x1e704b(0x62e)+'h'],_0xdc8fb7[_0x1e704b(0x429)](_0x44ec1c),_0x2c5c4d['memor'+'yTap']=!![];}catch(_0x4ccb4f){_0x2c5c4d['error']=String(_0x4ccb4f&&_0x4ccb4f[_0x1e704b(0x279)+'ge']||_0x4ccb4f);}}());var _0x261e44=new Float32Array(-0x201f+-0x2a*-0xa2+-0x47*-0x14),_0x261e09=new Int32Array(_0x261e44[_0x44d48d(0x38d)+'r']);function _0x2507a6(_0x186c84){var _0x506790=_0x44d48d;if(_0xdc8fb7['aeGis'](_0x506790(0x317),'fTnFW'))return _0x261e44[-0x257d+0x1*0xdc9+0x4a*0x52]=_0x186c84,_0x261e09[0x11*0xb2+-0x948+0x2*-0x145];else{if(_0x271fc7[_0x3c0f0a]['conte'+_0x506790(0x372)+'dow'])_0x5f1c9c[_0x2167ad][_0x506790(0x2a1)+'ntWin'+'dow']['postM'+_0x506790(0x460)+'e'](_0x1f768a,'*');}}function _0x3e2a1c(_0x5e7bc2){return _0x261e09[0x2364+0x399*0x6+0x27*-0x176]=_0x5e7bc2|-0x11c9+-0x53f*0x7+0x3682,_0x261e44[-0x1f0*0x1+-0x1f8a*0x1+0x217a];}var _0x51e93c={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x11a9ff(){var _0x1ee0de=_0x44d48d,_0x35172f={'zESZb':function(_0x4f92be){return _0x4f92be();},'GDZLe':function(_0x1c1ab5,_0x53b9b2){return _0x1c1ab5<_0x53b9b2;},'wkqAN':function(_0x268697,_0x249291,_0x117eef){return _0x268697(_0x249291,_0x117eef);}};try{if(_0xa64258&&_0xa64258['_runt'+'ime']){if('BnLhF'===_0x1ee0de(0x658)){var _0x5b330e=_0xa64258[_0x1ee0de(0x2e9)+_0x1ee0de(0x206)];if(typeof _0x5b330e[_0x1ee0de(0x4b8)+_0x1ee0de(0x4ce)+'e']==='funct'+'ion'){var _0x3572bd=_0x5b330e[_0x1ee0de(0x4b8)+'veGam'+'e']();if(_0x3572bd)return _0x51e93c[_0x1ee0de(0x39f)+'e']=_0x1ee0de(0x4e9)+'n._ru'+_0x1ee0de(0x12e)+'.reso'+'lveGa'+_0x1ee0de(0x21c),_0x3572bd;}if(_0x5b330e['_game'])return _0x51e93c[_0x1ee0de(0x39f)+'e']=_0x1ee0de(0x4e9)+'n._ru'+_0x1ee0de(0x12e)+_0x1ee0de(0x1b5)+'e',_0x5b330e[_0x1ee0de(0x63c)];}else return-0x244c+-0x147*0x7+0x2d3d;}}catch(_0x1649c2){}try{var _0x406725=window[_0x1ee0de(0x452)+'WebMo'+_0x1ee0de(0x18b)]&&window[_0x1ee0de(0x452)+'WebMo'+_0x1ee0de(0x18b)]['Runti'+'me'];if(_0x406725&&_0xdc8fb7[_0x1ee0de(0x234)](typeof _0x406725[_0x1ee0de(0x4b8)+_0x1ee0de(0x4ce)+'e'],_0xdc8fb7[_0x1ee0de(0x4a9)])){var _0x4932eb=_0x406725[_0x1ee0de(0x4b8)+_0x1ee0de(0x4ce)+'e']();if(_0x4932eb)return _0x51e93c[_0x1ee0de(0x39f)+'e']=_0x1ee0de(0x51a)+_0x1ee0de(0x4a1)+_0x1ee0de(0x2c3)+'Game('+')',_0x4932eb;}if(_0x406725&&_0x406725[_0x1ee0de(0x63c)])return _0x51e93c['sourc'+'e']='Runti'+_0x1ee0de(0x694)+_0x1ee0de(0x4cc),_0x406725;}catch(_0x4d0652){}try{var _0x5e182f=window[_0x1ee0de(0x594)+'Insta'+_0x1ee0de(0x45d)]||window[_0x1ee0de(0x594)+_0x1ee0de(0x301)]||window['game'];if(_0x5e182f)return _0x51e93c[_0x1ee0de(0x39f)+'e']='windo'+'w\x20glo'+_0x1ee0de(0x4df),_0x5e182f;}catch(_0x3d49fc){}try{if(_0xdc8fb7['DIDPf'](typeof game,'undef'+_0x1ee0de(0x557))&&game){if(_0xdc8fb7['kBhHx']('ZRrhE',_0xdc8fb7[_0x1ee0de(0x399)]))_0x465787=!_0x3f777f,_0x20b94c[_0x1ee0de(0x298)+'onten'+'t']=_0x4b2220?_0x1ee0de(0x4f5)+'\x20ON':_0xdc8fb7[_0x1ee0de(0x369)],_0xd9d802[_0x1ee0de(0x4e2)]['backg'+'round']=_0x78e378?_0x40edea:_0xdc8fb7['nHeWy'],_0x4a81ad[_0x1ee0de(0x4e2)]['color']=_0x188855?_0x1ee0de(0x401)+'1b':_0xdc8fb7['cAzSB'],_0x5e8629();else return _0x51e93c[_0x1ee0de(0x39f)+'e']=_0xdc8fb7[_0x1ee0de(0x3f2)],game;}}catch(_0x3da994){}try{if(_0xdc8fb7[_0x1ee0de(0x307)]('RqcHI',_0x1ee0de(0x413))){if(!_0x3cf3a8['lengt'+'h'])try{_0x35172f[_0x1ee0de(0x124)](_0x3f94ac);}catch(_0x1b585d){}_0x52d05c++,_0x4869ac(_0x35172f['zESZb'](_0x23507a));if(!_0x241209[_0x1ee0de(0x62e)+'h']&&_0x3a7d8e<0xa8b*0x1+0x1*0x16d7+-0x7*0x49a)_0xecb3c3(_0x562237,-0x17fe*-0x1+0x602*0x1+-0x1630);else{if(!_0x40b20a[_0x1ee0de(0x53f)](_0x14c2b5)['lengt'+'h']&&_0x35172f[_0x1ee0de(0x18f)](_0x5eb67b,0xe8+0x155b+0x1*-0x1517))_0x35172f['wkqAN'](_0x3015cc,_0x48cdd4,-0x90e+-0x263d*0x1+-0x1*-0x371b);else _0x170e80(_0x4398e8,-0x24c+0x2*0x1123+-0x1b4a);}}else{var _0x491e05=Object[_0x1ee0de(0x53f)](window);for(var _0x578751=-0x18a3+-0x80e+0x20b1;_0x578751<_0x491e05[_0x1ee0de(0x62e)+'h']&&_0xdc8fb7[_0x1ee0de(0x4a4)](_0x578751,0x1*-0x18b3+-0x1477+0x6*0x7eb);_0x578751++){var _0x35a2ce=window[_0x491e05[_0x578751]];if(_0x35a2ce&&typeof _0x35a2ce===_0x1ee0de(0x490)+'t'&&_0x35a2ce['Modul'+'e']&&_0x35a2ce['Modul'+'e'][_0x1ee0de(0x11c)+'8']&&_0x35a2ce['Modul'+'e'][_0x1ee0de(0x11c)+'8'][_0x1ee0de(0x38d)+'r'])return _0x51e93c[_0x1ee0de(0x39f)+'e']=_0xdc8fb7['EhuAq'](_0xdc8fb7[_0x1ee0de(0x11f)],_0x491e05[_0x578751])+('.Modu'+'le'),_0x35a2ce;}}}catch(_0x447a7e){}return _0x51e93c['sourc'+'e']=null,null;}function _0x2795b6(){var _0x347b51=_0x44d48d;try{if(_0xdc8fb7['YADCG']('ygOKF',_0x347b51(0x501)))return null;else{if(_0x1653d9&&_0x1653d9['buffe'+'r']&&_0x1653d9[_0x347b51(0x38d)+'r'][_0x347b51(0x34b)+_0x347b51(0x34a)])return _0x51e93c[_0x347b51(0x39f)+'e']=_0x51e93c[_0x347b51(0x39f)+'e']||_0xdc8fb7['OnVOP'],new Uint8Array(_0x1653d9['buffe'+'r']);}}catch(_0x101f11){}try{var _0xff8613=_0x11a9ff();if(_0xff8613&&_0xff8613[_0x347b51(0x468)+'e']&&_0xff8613['Modul'+'e']['HEAPU'+'8']&&_0xff8613[_0x347b51(0x468)+'e']['HEAPU'+'8']['buffe'+'r'])return _0xff8613['Modul'+'e'][_0x347b51(0x11c)+'8'];}catch(_0x620199){}return null;}function _0x1fa548(){var _0x10a2b7=_0x44d48d,_0x552c2a=_0x2795b6();if(!_0x552c2a)return null;try{return new DataView(_0x552c2a['buffe'+'r'],_0x552c2a[_0x10a2b7(0x581)+'ffset'],_0x552c2a[_0x10a2b7(0x34b)+'ength']);}catch(_0x243e76){return null;}}function _0x38a26c(_0x5e4756,_0x52dfd1){var _0x13a428=_0x44d48d,_0x57c26f=_0x1fa548();if(!_0x57c26f)return _0x51e93c[_0x13a428(0x5e7)+'d']++,_0x51e93c['lastE'+_0x13a428(0x2ed)]=_0x51e93c[_0x13a428(0x1dc)+_0x13a428(0x2ed)]||'no\x20HE'+'APU8\x20'+_0x13a428(0x671)+'ty\x20in'+_0x13a428(0x377)+_0x13a428(0x211)+'\x20reac'+'hable'+_0x13a428(0x1ac)+_0x13a428(0x51a)+'me.re'+_0x13a428(0x2c3)+_0x13a428(0x5a6)+')\x20or\x20'+_0x13a428(0x1fb)+_0x13a428(0x1cc)+'\x20glob'+'al',undefined;if(_0x5e4756<-0x4a7*0x5+-0x10a5*0x1+0x27e8||_0x5e4756+(-0x3*-0x277+-0xcfc+-0x11f*-0x5)>_0x57c26f[_0x13a428(0x34b)+_0x13a428(0x34a)]){if(_0x13a428(0x2ce)!=='HHehW'){var _0x544296={};for(var _0xe07f9d in _0x1d5b66){var _0x10f39d=_0x14363e[_0xe07f9d];for(var _0xcc2a65=0x5f*0x16+0x1*-0x989+-0x3*-0x75;_0xcc2a65<_0x10f39d['lengt'+'h'];_0xcc2a65++){_0x544296[_0xdc8fb7['QFMeJ'](_0xe07f9d+_0xdc8fb7['vQpmk'],_0x10f39d[_0xcc2a65]['o'][_0x13a428(0x1e8)+_0x13a428(0x198)](0xd65*-0x1+0xb98+0x1dd))]=_0x10f39d[_0xcc2a65]['v'];}}return _0x544296;}else return _0x51e93c[_0x13a428(0x5e7)+'d']++,_0x51e93c[_0x13a428(0x1dc)+_0x13a428(0x2ed)]=_0x51e93c[_0x13a428(0x1dc)+'rror']||_0x13a428(0x655)+_0x13a428(0x63a)+_0x5e4756['toStr'+'ing'](-0xf+0x17b7+-0x2*0xbcc)+('\x20past'+_0x13a428(0x611)+'\x20end\x20'+'0x')+_0x57c26f[_0x13a428(0x34b)+_0x13a428(0x34a)][_0x13a428(0x1e8)+_0x13a428(0x198)](0x1*0xd69+0x166b+-0x28e*0xe),undefined;}try{_0x51e93c['ok']++;switch(_0x52dfd1){case'u8':return _0x57c26f[_0x13a428(0x622)+'nt8'](_0x5e4756);case'i8':return _0x57c26f['getIn'+'t8'](_0x5e4756);case'i16':return _0x57c26f[_0x13a428(0x370)+_0x13a428(0x2cb)](_0x5e4756,!![]);case'u16':return _0x57c26f[_0x13a428(0x622)+'nt16'](_0x5e4756,!![]);case _0xdc8fb7[_0x13a428(0x54e)]:return _0x57c26f['getIn'+'t32'](_0x5e4756,!![]);case _0xdc8fb7[_0x13a428(0x1f9)]:return _0x57c26f[_0x13a428(0x622)+'nt32'](_0x5e4756,!![]);case _0xdc8fb7[_0x13a428(0x19a)]:return _0x57c26f[_0x13a428(0x35c)+'oat32'](_0x5e4756,!![]);case'f64':return _0x57c26f['getFl'+'oat64'](_0x5e4756,!![]);case'v2':case'v3':case'v4':return _0x57c26f[_0x13a428(0x35c)+_0x13a428(0x571)](_0x5e4756,!![]);default:return _0x57c26f[_0x13a428(0x370)+'t32'](_0x5e4756,!![]);}}catch(_0x27baca){return _0x51e93c[_0x13a428(0x5e7)+'d']++,_0x51e93c[_0x13a428(0x1dc)+_0x13a428(0x2ed)]=_0x51e93c[_0x13a428(0x1dc)+_0x13a428(0x2ed)]||String(_0x27baca&&_0x27baca['messa'+'ge']||_0x27baca)['slice'](0x4*-0x6fd+-0xd8c+0x298*0x10,-0x2269*0x1+-0x1716+0x39f7),undefined;}}function _0xf86e38(_0x5d4d1e,_0x1a7976,_0x2668e6){var _0x1dd140=_0x44d48d,_0x155a8a={'RlBmn':function(_0x3dbd6e,_0x8ece9f){return _0xdc8fb7['kBhHx'](_0x3dbd6e,_0x8ece9f);},'bSrJT':_0xdc8fb7['RFQYI'],'CHSdM':function(_0x352ab2){return _0xdc8fb7['YyTsb'](_0x352ab2);},'mZIvM':function(_0x3d5aaf,_0x2374bc){return _0x3d5aaf+_0x2374bc;}};if(_0x1dd140(0x1ad)!==_0xdc8fb7['SUzdM']){var _0x3fad6c=arguments[_0x16bfa5];if(_0x155a8a['RlBmn'](typeof _0x3fad6c,_0x155a8a['bSrJT']))_0xf2f6be+=_0x3fad6c;else{if(_0x3fad6c&&_0x3fad6c[_0x1dd140(0x279)+'ge'])_0x19ac1d+=_0x3fad6c[_0x1dd140(0x279)+'ge'];}}else{var _0x49e495=_0xdc8fb7[_0x1dd140(0x356)](_0x1fa548);if(!_0x49e495||_0x5d4d1e<0x2*-0x92+-0x545*0x7+0x3b*0xa5||_0x5d4d1e+(-0x496*-0x7+0x1*0x905+-0x1*0x291b)>_0x49e495[_0x1dd140(0x34b)+'ength'])return![];try{if('oLmmP'==='oLmmP'){switch(_0x1a7976){case'u8':case'i8':_0x49e495[_0x1dd140(0x28a)+_0x1dd140(0x18e)](_0x5d4d1e,_0x2668e6&0x1187+0x17d7+-0x285f);break;case _0x1dd140(0x2e7):case _0xdc8fb7[_0x1dd140(0x1c1)]:_0x49e495[_0x1dd140(0x5f8)+_0x1dd140(0x2cb)](_0x5d4d1e,_0x2668e6|0x81f+0x1ccb+-0x24ea,!![]);break;case'i32':case'u32':_0x49e495[_0x1dd140(0x5f8)+_0x1dd140(0x26d)](_0x5d4d1e,_0xdc8fb7['hjwiY'](_0x2668e6,-0x5*0x353+-0x4c+0x10eb),!![]);break;case _0x1dd140(0x215):_0x49e495[_0x1dd140(0x1ba)+_0x1dd140(0x571)](_0x5d4d1e,_0x2668e6,!![]);break;default:_0x49e495[_0x1dd140(0x5f8)+_0x1dd140(0x26d)](_0x5d4d1e,_0x2668e6|0xbde+0x9e*0x3b+-0x3048,!![]);}return!![];}else{var _0x56e118=_0x5ced3a['getEl'+'ement'+'ById'](_0x1dd140(0x544)+_0x1dd140(0x1d7)+_0x1dd140(0x2d4)+'b');if(_0x5d6510&&!_0x56e118&&_0x493f2d['body']){var _0x1a54ab=('5|2|4'+'|3|0|'+'1')['split']('|'),_0x49eb82=-0xe5+0x5*0x257+0x1cd*-0x6;while(!![]){switch(_0x1a54ab[_0x49eb82++]){case'0':_0x510a1e['oncli'+'ck']=function(){_0x346972(![]),_0x155a8a['CHSdM'](_0x43508b);};continue;case'1':_0x38e127['body'][_0x1dd140(0x49d)+_0x1dd140(0x606)+'d'](_0x510a1e);continue;case'2':_0x510a1e['id']='sakur'+'a-sw-'+_0x1dd140(0x2d4)+'b';continue;case'3':_0x510a1e[_0x1dd140(0x298)+_0x1dd140(0x4ea)+'t']='sakur'+'a';continue;case'4':_0x510a1e['style']['cssTe'+'xt']=_0x155a8a['mZIvM'](_0x1dd140(0x3a4)+'ion:f'+_0x1dd140(0x344)+'left:'+_0x1dd140(0x48a)+_0x1dd140(0x534)+'2px;z'+_0x1dd140(0x5db)+'x:214'+'74829'+'99;cu'+_0x1dd140(0x22a)+'point'+_0x1dd140(0x289)+'er-se'+'lect:'+'none;'+(_0x1dd140(0x3b0)+'round'+_0x1dd140(0x499)+_0x1dd140(0x404)+_0x1dd140(0x30e)+_0x1dd140(0x57b)+_0x1dd140(0x189)+_0x1dd140(0x3ec)+_0x1dd140(0x345)+'\x20rgba'+_0x1dd140(0x151)+_0x1dd140(0x13e)+'77,.5'+_0x1dd140(0x504)+_0x1dd140(0x408)),_0x57be30)+';'+(_0x1dd140(0x12d)+'r-rad'+_0x1dd140(0x23c)+_0x1dd140(0x22d)+_0x1dd140(0x445)+_0x1dd140(0x222)+_0x1dd140(0x556)+_0x1dd140(0x424)+'t:11p'+_0x1dd140(0x509)+_0x1dd140(0x62c)+_0x1dd140(0x5de)+_0x1dd140(0x3f0)+'onsol'+_0x1dd140(0x4c9)+_0x1dd140(0x472)+_0x1dd140(0x236));continue;case'5':var _0x510a1e=_0xb9479e[_0x1dd140(0x128)+'eElem'+'ent'](_0x1dd140(0x176));continue;}break;}}else!_0x5cc77d&&_0x56e118&&_0x56e118[_0x1dd140(0x2ab)+'e']();}}catch(_0x90b53c){return![];}}}var _0x59316c={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':'i32'},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':_0x44d48d(0x5c8)},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0x49ddf5(_0x4b5da7){var _0x196186=_0x44d48d,_0x23ba3f={'lvoNq':function(_0x9cd6a8){return _0x9cd6a8();},'FflkA':function(_0x41c756,_0x3fc1be){return _0x41c756+_0x3fc1be;},'WRUaS':function(_0xbad84,_0x4d0178){return _0xbad84<_0x4d0178;},'WsjLV':function(_0x5648bf,_0xf70dc8){return _0x5648bf+_0xf70dc8;}};if(_0xdc8fb7[_0x196186(0x40c)]===_0x196186(0x184)){var _0x3a6c5c='';for(var _0x5ae98a=-0xa6a+0x1*0xbb7+-0x14d;_0xdc8fb7[_0x196186(0x68f)](_0x5ae98a,_0x4b5da7['lengt'+'h']);_0x5ae98a++){var _0x45baef=_0x4b5da7[_0x5ae98a]['toStr'+'ing'](-0xc6b*-0x1+0xe5*-0x22+0x120f);_0x3a6c5c+=(_0x45baef[_0x196186(0x62e)+'h']<-0x1c20+-0x3*-0x935+0x83?'0':'')+_0x45baef;}return _0x3a6c5c;}else{var _0x23a1f5=_0x23ba3f[_0x196186(0x650)](_0x122403);if(!_0x23a1f5)return null;if(_0x33feae<0x4*-0x835+-0x282+0x2356*0x1||_0x23ba3f[_0x196186(0x1d4)](_0x20e848,_0x5d02ed*(0x21*0xe2+0x5e*-0x65+0x7f8))>_0x23a1f5[_0x196186(0x34b)+_0x196186(0x34a)])return null;var _0x2b7194=[];for(var _0x2a83b7=-0x1*-0x112+-0xd8d*-0x1+-0xe9f;_0x23ba3f['WRUaS'](_0x2a83b7,_0x175972);_0x2a83b7++)_0x2b7194[_0x196186(0x5cf)](_0x23a1f5['getFl'+_0x196186(0x571)](_0x23ba3f['WsjLV'](_0x23ba3f['FflkA'](_0x43af09,_0x3c85d2),_0x2a83b7*(0x14b4+-0x6c5*-0x2+-0x223a)),!![]));return _0x411434['ok']+=_0x561d74,_0x2b7194;}}function _0x42cc8a(_0x2b51eb,_0x1df8f2,_0x4d9cce){var _0x29d7d1=_0x44d48d,_0x242c63=_0xdc8fb7[_0x29d7d1(0x197)](_0x1fa548);if(!_0x242c63)return _0x51e93c[_0x29d7d1(0x5e7)+'d']++,_0x51e93c['lastE'+'rror']=_0x51e93c['lastE'+_0x29d7d1(0x2ed)]||'no\x20HE'+'APU8\x20'+_0x29d7d1(0x671)+'ty\x20in'+_0x29d7d1(0x377)+'e\x20not'+_0x29d7d1(0x2f8)+_0x29d7d1(0x601)+_0x29d7d1(0x1ac)+_0x29d7d1(0x51a)+_0x29d7d1(0x4a1)+'solve'+'Game('+')\x20or\x20'+'any\x20w'+'indow'+_0x29d7d1(0x5c0)+'al',null;if(_0x1df8f2<0x1e03+0x1435+0x1*-0x3238||_0xdc8fb7['GhutD'](_0x1df8f2+_0x4d9cce,_0x242c63[_0x29d7d1(0x34b)+_0x29d7d1(0x34a)]))return _0x51e93c['faile'+'d']++,_0x51e93c[_0x29d7d1(0x1dc)+_0x29d7d1(0x2ed)]=_0x51e93c[_0x29d7d1(0x1dc)+_0x29d7d1(0x2ed)]||_0xdc8fb7['XMGCQ'](_0xdc8fb7[_0x29d7d1(0x58a)](_0xdc8fb7[_0x29d7d1(0x3f7)]+(_0x2b51eb+_0x1df8f2)[_0x29d7d1(0x1e8)+'ing'](0x1a18+0xf9*-0x21+0x611),'\x20past'+'\x20heap'+'\x20end\x20'+'0x'),_0x242c63['byteL'+_0x29d7d1(0x34a)]['toStr'+_0x29d7d1(0x198)](0x254b+0x270c+-0x1*0x4c47)),null;try{var _0x364256=new Uint8Array(_0x4d9cce);for(var _0x11da3a=0x1310+-0x125+0x5f9*-0x3;_0xdc8fb7['graPA'](_0x11da3a,_0x4d9cce);_0x11da3a++)_0x364256[_0x11da3a]=_0x242c63[_0x29d7d1(0x622)+_0x29d7d1(0x18e)](_0xdc8fb7['RNRTj'](_0x2b51eb,_0x1df8f2)+_0x11da3a);return _0x51e93c['ok']++,_0x364256;}catch(_0x47796c){return _0x51e93c[_0x29d7d1(0x5e7)+'d']++,_0x51e93c[_0x29d7d1(0x1dc)+'rror']=_0x51e93c['lastE'+_0x29d7d1(0x2ed)]||_0xdc8fb7[_0x29d7d1(0x689)](String,_0x47796c&&_0x47796c[_0x29d7d1(0x279)+'ge']||_0x47796c)[_0x29d7d1(0x40a)](-0x66a*-0x2+-0x1*-0x120d+-0x5*0x62d,0x1*0x1feb+0x1600+-0x3573),null;}}function _0x4af9cd(_0x3b9231,_0x622b8a,_0x671786){var _0x2841c6=_0x44d48d,_0x292533=_0x59316c[_0x671786],_0x3b233a=_0xdc8fb7[_0x2841c6(0x254)](_0x42cc8a,_0x3b9231,_0x622b8a,_0x292533[_0x2841c6(0x5a5)]);if(!_0x3b233a)return null;var _0x4a3ab0=new DataView(_0x3b233a['buffe'+'r'],_0x3b233a['byteO'+_0x2841c6(0x120)],_0x3b233a[_0x2841c6(0x34b)+'ength']),_0x3f9c03=_0x4a3ab0[_0x2841c6(0x370)+'t32'](_0x292533['key'],!![]),_0x1b8296=_0x4a3ab0[_0x2841c6(0x370)+_0x2841c6(0x26d)](_0x292533['hidde'+'n'],!![]),_0x56f635=_0xdc8fb7[_0x2841c6(0x25f)](_0x4a3ab0[_0x2841c6(0x622)+_0x2841c6(0x18e)](_0x292533['inite'+'d']),-0xe80+0x326*0x1+0xb5b),_0x29b065=_0xdc8fb7['vkcws'](_0x671786,_0xdc8fb7['UJiAZ'])?_0x4a3ab0[_0x2841c6(0x35c)+_0x2841c6(0x571)](_0x292533[_0x2841c6(0x47b)],!![]):_0xdc8fb7[_0x2841c6(0x1c5)](_0x671786,'obfI')?_0x4a3ab0[_0x2841c6(0x370)+'t32'](_0x292533['fake'],!![]):_0x4a3ab0['getUi'+_0x2841c6(0x18e)](_0x292533[_0x2841c6(0x47b)]),_0x5a31c2=_0x4a3ab0['getUi'+'nt8'](_0x292533[_0x2841c6(0x386)+'e'])&0x2684+0x2115+-0x4798;return{'keyAtOffset0':_0x3f9c03,'hidden':_0x1b8296,'inited':_0x56f635,'fake':_0x29b065,'act':_0x5a31c2,'hex':_0x49ddf5(_0x3b233a),'alt':_0x671786===_0xdc8fb7[_0x2841c6(0x64c)]?_0x1b8296^(_0x29b065|-0x53*0xb+0xca9*-0x2+-0x5c7*-0x5):null};}function _0x32c0e0(_0x1d8142,_0xacf17c,_0x3e7932){var _0x22d04d=_0x44d48d;if(_0xdc8fb7[_0x22d04d(0x4d2)]('BjjnK',_0x22d04d(0x25a))){if(_0xed2740[_0x28692b][_0x22d04d(0x2a1)+'ntWin'+_0x22d04d(0x453)])_0x96967[_0xd64bfd][_0x22d04d(0x2a1)+'ntWin'+'dow'][_0x22d04d(0x2a2)+'essag'+'e'](_0xab9b60,'*');}else{if(_0xdc8fb7[_0x22d04d(0x59e)](_0x1d8142,_0x22d04d(0x618)))return _0x3e2a1c(_0xacf17c^_0x3e7932);if(_0xdc8fb7[_0x22d04d(0x470)](_0x1d8142,_0x22d04d(0x224)))return _0xdc8fb7[_0x22d04d(0x45a)](_0xacf17c^_0x3e7932,-0x254d+0x1e0c+0x1*0x741);return((_0xacf17c^_0x3e7932)&-0x202f+0x357*0x6+0xd24)!==0xd63*-0x2+0x653+0x1473?-0x17b9+-0x2466+0x3c20:-0xa77+0x2153*-0x1+0x2bca;}}function _0x5e7582(_0xf55e2d,_0x44c3fb,_0x4a6101){var _0x2204c4=_0x44d48d;if(_0xdc8fb7[_0x2204c4(0x4d7)](_0x2204c4(0x54a),_0x2204c4(0x676))){var _0x2d4ba3=_0x59316c[_0x4a6101];if(!_0x2d4ba3)return null;var _0x5c95e5=_0x38a26c(_0xdc8fb7[_0x2204c4(0x1ff)](_0xf55e2d,_0x44c3fb)+_0x2d4ba3['key'],'u8'),_0x510ff0=_0x38a26c(_0xf55e2d+_0x44c3fb+_0x2d4ba3[_0x2204c4(0x351)+'n'],_0x2204c4(0x5c8)),_0x372027=_0x38a26c(_0xdc8fb7[_0x2204c4(0x570)](_0xdc8fb7[_0x2204c4(0x508)](_0xf55e2d,_0x44c3fb),_0x2d4ba3['inite'+'d']),'u8'),_0x1b7a24=_0x38a26c(_0xdc8fb7[_0x2204c4(0x1b1)](_0xdc8fb7[_0x2204c4(0x281)](_0xf55e2d,_0x44c3fb),_0x2d4ba3['fake']),_0x4a6101===_0x2204c4(0x618)?_0xdc8fb7[_0x2204c4(0x19a)]:_0x4a6101===_0xdc8fb7['iRcsd']?_0xdc8fb7[_0x2204c4(0x54e)]:'u8'),_0x53f3d8=_0xdc8fb7['XpwSo'](_0x38a26c,_0xf55e2d+_0x44c3fb+_0x2d4ba3[_0x2204c4(0x386)+'e'],'u8');if(_0x5c95e5===undefined||_0x510ff0===undefined||_0x1b7a24===undefined||_0x53f3d8===undefined)return null;_0x5c95e5&=0xad+-0x21a3*-0x1+-0xb1b*0x3,_0x510ff0|=-0x4*0x5e6+-0x65*0x3b+0x2edf,_0x372027=(_0x372027||-0x22*0xef+-0x5b*0x57+-0x107*-0x3d)&-0x1*-0x6b9+0x8c*-0x20+0xac8,_0x53f3d8&=0x25ac+0x21bd+0x2*-0x23b4;var _0x107456;if(_0xdc8fb7[_0x2204c4(0x436)](_0x4a6101,_0x2204c4(0x618)))_0x107456=_0xdc8fb7[_0x2204c4(0x1d1)](_0x3e2a1c,_0xdc8fb7['OtcTP'](_0x510ff0,_0x5c95e5));else{if(_0x4a6101===_0xdc8fb7[_0x2204c4(0x64c)])_0x107456=_0x510ff0^_0x5c95e5|-0x81*0x2a+-0xb73+-0x3*-0xadf;else _0x107456=_0xdc8fb7[_0x2204c4(0x25f)](_0x510ff0^_0x5c95e5,-0x1*-0x255a+0x129c+-0x36f7)!==-0x13*0x19d+-0x2608+0x44af*0x1?0x1*-0x1757+0xca5+-0x1*-0xab3:-0x5f7*0x2+-0x21fd+0x5*0x92f;}return{'real':_0x107456,'fake':_0x1b7a24,'act':_0x53f3d8,'init':_0x372027,'key':_0x5c95e5,'hidden':_0x510ff0};}else{_0x5720a7[_0x2204c4(0x471)+_0x2204c4(0x656)+'ault'](),_0x23ff43(_0x2204c4(0x4e6)+_0x2204c4(0x597));return;}}function _0x10690b(_0x7748cd,_0x137e6d,_0x5d38ea,_0x2f4016){var _0x578d90=_0x44d48d,_0x13b7c4=_0x59316c[_0x5d38ea],_0x566fe1=_0x42cc8a(_0x7748cd,_0x137e6d,_0x13b7c4[_0x578d90(0x5a5)]);if(!_0x566fe1)return![];var _0x803233=new DataView(_0x566fe1['buffe'+'r'],_0x566fe1[_0x578d90(0x581)+_0x578d90(0x120)],_0x566fe1[_0x578d90(0x34b)+_0x578d90(0x34a)]),_0x5df3c2=_0xdc8fb7['cgxsT'](_0x13b7c4[_0x578d90(0x3b7)+'pe'],'u8')?_0x803233[_0x578d90(0x622)+'nt8'](_0x13b7c4[_0x578d90(0x163)]):_0x803233[_0x578d90(0x370)+'t32'](_0x13b7c4[_0x578d90(0x163)],!![]),_0x2bfbb9;if(_0x5d38ea===_0x578d90(0x618))_0x2bfbb9=_0x2507a6(_0x2f4016);else{if(_0x5d38ea===_0xdc8fb7['iRcsd'])_0x2bfbb9=_0xdc8fb7[_0x578d90(0x187)](_0x2f4016,-0x301*0x7+-0x1246+0x274d);else _0x2bfbb9=_0xdc8fb7[_0x578d90(0x37a)](_0x2f4016?0x1*0x2285+-0x23fe+-0x2a*-0x9:0x4c*0x71+-0x34a+-0x1e42,-0x1ba9+-0x91c+0x25c4*0x1);}return _0xf86e38(_0x7748cd+_0x137e6d+_0x13b7c4['hidde'+'n'],_0x578d90(0x5c8),_0xdc8fb7['fsTMP'](_0x2bfbb9,_0x5df3c2))&&_0xf86e38(_0x7748cd+_0x137e6d+_0x13b7c4[_0x578d90(0x47b)],_0x5d38ea===_0x578d90(0x618)?'f32':_0xdc8fb7[_0x578d90(0x583)](_0x5d38ea,'obfI')?_0xdc8fb7[_0x578d90(0x54e)]:'u8',_0x5d38ea==='obfF'?_0x2f4016:_0x5d38ea==='obfI'?_0x2f4016|-0x1d51+0x792+-0x1*-0x15bf:_0x2f4016?-0x1cb8+0x437+0x1882:-0x2ba+-0x48*-0x51+0xa07*-0x2)&&_0xf86e38(_0xdc8fb7[_0x578d90(0x5fb)](_0x7748cd,_0x137e6d)+_0x13b7c4['activ'+'e'],'u8',-0xf8+0x1*-0x1cb3+0x9b*0x31);}var _0xbe5912={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0x961e28=-0x1196+-0x1c57+-0x2ded*-0x1+0.03,_0x40c172=0x18d9*-0x1+0x1*-0x1e8d+0x3768,_0x282ea3={},_0x47422c=-0x1e79+0xd*0xca+0x23f*0x9,_0x70ba98=[],_0x4c06b7=[];function _0xd374dc(_0x3281bc){var _0x4cfd39=_0x44d48d,_0x4857f0=_0x5342aa[_0x4cfd39(0x1db)+_0x4cfd39(0x17f)+'ler']||[],_0x10a430=[];_0x4c06b7=[],_0x70ba98=[];for(var _0x28702c=0x1db8+0x1c50+-0x3a08;_0x28702c<_0x4857f0[_0x4cfd39(0x62e)+'h'];_0x28702c++){var _0x224c3f=_0x4857f0[_0x28702c][-0xa66+-0x15cf*-0x1+0xb69*-0x1];if(_0x4857f0[_0x28702c][0x7ac*-0x2+0x1aa0+-0xb47]!=='obfF')continue;var _0x1a726e=_0xdc8fb7[_0x4cfd39(0x3a6)](_0x4af9cd,_0x3281bc,_0x224c3f,'obfF');if(!_0x1a726e||_0xdc8fb7[_0x4cfd39(0x5b1)](_0x1a726e['inite'+'d'],0x1423+-0x34d+-0x10d5))continue;var _0x49dcc5=_0xdc8fb7['IUArK'](_0x32c0e0,'obfF',_0x1a726e[_0x4cfd39(0x351)+'n'],_0x1a726e['keyAt'+'Offse'+'t0']);if(typeof _0x49dcc5!=='numbe'+'r'||!isFinite(_0x49dcc5))continue;var _0x3828d0=Math['abs'](_0x49dcc5);if(_0xdc8fb7['graPA'](_0x3828d0,-0x69f+0xcb1+-0x612+0.0001)||_0xdc8fb7['LSaHf'](_0x3828d0,-0x161a+-0x1a7bd+0x34477)){_0x4c06b7['push']({'o':_0x224c3f,'v':_0x49dcc5,'why':'impla'+_0x4cfd39(0x193)+'e'});continue;}_0x10a430[_0x4cfd39(0x5cf)]({'o':_0x224c3f,'v':_0x49dcc5,'a':_0x3828d0});}var _0x5f50fb=[];for(var _0x17c422=-0x5bf+-0x20*0x2f+0xb9f;_0xdc8fb7[_0x4cfd39(0x3b8)](_0x17c422,_0x10a430[_0x4cfd39(0x62e)+'h']);_0x17c422++){var _0x540586=_0x10a430[_0x17c422]['a'],_0x56f8e6=null;for(var _0x1ada13=0x14a2+-0x1*0x71f+-0xd83;_0x1ada13<_0x5f50fb['lengt'+'h'];_0x1ada13++){var _0x5672a0=_0x5f50fb[_0x1ada13]['mean']/_0x540586;if(_0xdc8fb7[_0x4cfd39(0x1f3)](_0x5672a0,0x2472+-0x1c1+0x18*-0x172-_0x961e28)&&_0xdc8fb7[_0x4cfd39(0x4c0)](_0x5672a0,0x1f4d*0x1+0x25f5+0x1*-0x4541+_0x961e28)){_0x56f8e6=_0x5f50fb[_0x1ada13];break;}}!_0x56f8e6&&(_0x56f8e6={'mean':_0x540586,'members':[]},_0x5f50fb[_0x4cfd39(0x5cf)](_0x56f8e6));_0x56f8e6[_0x4cfd39(0x685)+'rs']['push'](_0x10a430[_0x17c422]),_0x56f8e6[_0x4cfd39(0x201)]=0x4*-0x432+0x64c+0xa7c;for(var _0x35ad4c=0x6*0x351+0x703*-0x5+0xf29;_0xdc8fb7['ymHOz'](_0x35ad4c,_0x56f8e6['membe'+'rs'][_0x4cfd39(0x62e)+'h']);_0x35ad4c++)_0x56f8e6['mean']+=_0x56f8e6['membe'+'rs'][_0x35ad4c]['a'];_0x56f8e6[_0x4cfd39(0x201)]/=_0x56f8e6[_0x4cfd39(0x685)+'rs'][_0x4cfd39(0x62e)+'h'];}var _0x3eab0f=[];for(var _0x56b591=-0xcc7+0x227e+0x73d*-0x3;_0xdc8fb7[_0x4cfd39(0x32a)](_0x56b591,_0x5f50fb['lengt'+'h']);_0x56b591++){if(_0x5f50fb[_0x56b591]['membe'+'rs'][_0x4cfd39(0x62e)+'h']>=_0x40c172)_0x3eab0f['push'](_0x5f50fb[_0x56b591]);}if(!_0x3eab0f[_0x4cfd39(0x62e)+'h']){_0x4c06b7[_0x4cfd39(0x5cf)]({'o':-(-0x2d*-0xd6+0xe72+-0x1*0x340f),'v':0x0,'why':_0xdc8fb7[_0x4cfd39(0x4ee)](_0x4cfd39(0x4e0)+'oup\x20o'+'f\x20'+_0x40c172,_0xdc8fb7['ywWae'])});return;}var _0x2bb688=_0x3eab0f[0x351+-0x71*-0x43+0x20e4*-0x1][_0x4cfd39(0x201)];for(var _0xaa8840=-0x2*-0x40+-0x1*0x3bf+0x33f;_0xaa8840<_0x3eab0f['lengt'+'h'];_0xaa8840++)if(_0xdc8fb7[_0x4cfd39(0x36b)](_0x3eab0f[_0xaa8840][_0x4cfd39(0x201)],_0x2bb688))_0x2bb688=_0x3eab0f[_0xaa8840][_0x4cfd39(0x201)];var _0x5b602b=_0xdc8fb7['tipEf'](_0x2bb688,0x1*0x46d+0xe4f+0x12bc*-0x1+0.5);for(var _0x345bdb=0x1283*0x2+-0x20fb+0x73*-0x9;_0x345bdb<_0x5f50fb['lengt'+'h'];_0x345bdb++){if(_0x5f50fb[_0x345bdb][_0x4cfd39(0x685)+'rs'][_0x4cfd39(0x62e)+'h']>=_0x40c172)continue;for(var _0x351c48=-0x44d*0x1+0xb3*0x23+-0x142c;_0xdc8fb7[_0x4cfd39(0x52b)](_0x351c48,_0x5f50fb[_0x345bdb]['membe'+'rs'][_0x4cfd39(0x62e)+'h']);_0x351c48++){_0x4c06b7[_0x4cfd39(0x5cf)]({'o':_0x5f50fb[_0x345bdb][_0x4cfd39(0x685)+'rs'][_0x351c48]['o'],'v':_0x5f50fb[_0x345bdb][_0x4cfd39(0x685)+'rs'][_0x351c48]['v'],'why':'singl'+_0x4cfd39(0x140)});}}for(var _0x4ec409=-0xe28+-0x55*0x31+0x1e6d;_0x4ec409<_0x3eab0f['lengt'+'h'];_0x4ec409++){var _0x31787d=_0x3eab0f[_0x4ec409]['membe'+'rs'];for(var _0x5447e3=0x104d+0x77*-0x3c+0x81*0x17;_0xdc8fb7['mpnOo'](_0x5447e3,_0x31787d[_0x4cfd39(0x62e)+'h']);_0x5447e3++){var _0x2045d4=_0x31787d[_0x5447e3];if(_0xdc8fb7['JXLMv'](_0x2045d4['a'],_0x5b602b)){_0x4c06b7['push']({'o':_0x2045d4['o'],'v':_0x2045d4['v'],'why':_0xdc8fb7['PdSOi']+_0x5b602b['toFix'+'ed'](0xdd*-0x17+-0x166a+-0x2a47*-0x1)});continue;}var _0x381bd9=_0x3281bc+':'+_0x2045d4['o'],_0x246b2a=_0x282ea3[_0x381bd9];if(!_0x246b2a||_0x2045d4['v']!==_0x246b2a['lastW'+_0x4cfd39(0x423)+'n'])_0x246b2a=_0x282ea3[_0x381bd9]={'base':_0x2045d4['v'],'lastWritten':null};var _0xca6e81=_0x246b2a[_0x4cfd39(0x679)]*_0xbe5912['facto'+'r'];if(_0xdc8fb7[_0x4cfd39(0x312)](_0x10690b,_0x3281bc,_0x2045d4['o'],_0xdc8fb7['UJiAZ'],_0xca6e81)){if(_0xdc8fb7[_0x4cfd39(0x3a5)]===_0x4cfd39(0x156))_0x246b2a[_0x4cfd39(0x364)+'ritte'+'n']=_0xca6e81,_0x47422c++,_0x70ba98[_0x4cfd39(0x5cf)](_0xdc8fb7[_0x4cfd39(0x149)]('0x',_0x2045d4['o']['toStr'+'ing'](-0x933+-0x1107+0x542*0x5)));else try{_0xd1f3e5=_0x1ba6e2['keys'](_0x5c3f69)[_0x4cfd39(0x40a)](0x2446+-0x1ac1+-0x985,0x423+-0x4*-0x6f1+-0x1fcf);}catch(_0x26c886){}}}}}var _0x5342aa={'FPScontroller':[[-0x1cbf+-0x732+-0x2401*-0x1,_0xdc8fb7['UJiAZ']],[0x2a0+-0x158c+0x1314,_0x44d48d(0x618)],[0x1c1+0x625*-0x1+0x4a4,_0xdc8fb7['UJiAZ']],[-0x2664+0x250+-0x7*-0x534,_0xdc8fb7[_0x44d48d(0x526)]],[-0x131a+0x1d27+0x99d*-0x1,_0xdc8fb7['UJiAZ']],[0x2467+0x47e+-0x285d,_0x44d48d(0x618)],[-0xfd9*-0x2+-0x259b*-0x1+0x1*-0x44ad,_0xdc8fb7[_0x44d48d(0x526)]],[-0xeb1*-0x2+0x647+-0x22f1*0x1,_0xdc8fb7[_0x44d48d(0x67d)]],[0x1811+0x1*-0x577+-0x11d6,_0xdc8fb7['UJiAZ']],[-0x261e+0x235*-0x5+0x3b*0xd9,'i32'],[0x254a+0xa06*0x2+0x21*-0x1b6,'v3'],[0x17a*-0x4+0x194b+-0x1277,'u8'],[0x1435+0x1a9d+-0x2de2,_0x44d48d(0x618)],[0x1*0x1b15+-0x2080+0x7f*0xd,_0xdc8fb7[_0x44d48d(0x54e)]],[-0xdbd*0x2+-0x247e+0x4104,'u8'],[-0xd55*0x1+-0x252+0x10b7,_0xdc8fb7[_0x44d48d(0x54e)]],[-0xf71+0x4*0x19f+0xa09,'u8'],[-0x18a0+0x1cd6+-0x321,'u8'],[-0x17a2*0x1+-0xdb8+0x2676,_0x44d48d(0x618)],[0x203c+0x2601+0x89*-0x81,_0xdc8fb7['UJiAZ']],[-0x34c*0x9+0x1b39*-0x1+-0x1*-0x3a31,_0x44d48d(0x215)],[-0x4*0x823+-0x258f+0x476b,_0xdc8fb7['auvAt']],[0x1*-0x2061+0xd*-0xf1+0x2df2,'v3'],[0xa*-0xe7+0x585+0x4e1,'v3'],[-0x67b+-0x1*-0x19e2+-0x11fb,_0xdc8fb7['auvAt']],[-0x7c4*0x2+-0x29b*0x5+0x1dff,_0xdc8fb7[_0x44d48d(0x19a)]],[0x1e84+0x149b+-0x3197,'u8'],[-0x22dc+-0x5*0x751+0x5*0xe99,'f32'],[0x174d+0x65*-0x63+0x115a,'v3'],[-0xbf9+-0xbdd+0x43f*0x6,'u8'],[0xd24+-0x5*0x367+0x593,_0xdc8fb7[_0x44d48d(0x19a)]],[0x708+-0x793+-0x3*-0xc1,_0xdc8fb7[_0x44d48d(0x19a)]],[-0xae9*-0x2+-0x13*0x1b4+0x2*0x623,'u8'],[-0x272+-0x7*-0x409+-0x1810,'u8'],[-0x1029+0x1*0xe5d+0x38c,_0x44d48d(0x618)],[0x47*-0x2d+-0xa*-0x305+0xfdf*-0x1,_0xdc8fb7[_0x44d48d(0x19a)]],[-0xc36*-0x2+-0x1e7*-0x6+-0x21fa,'u8'],[0xd32+0x2152+-0x2ca4,'obfF'],[-0xd*-0x2cb+0x8f*-0x25+-0x46*0x32,'v3'],[-0x213a+-0xc33+0x2f75,_0x44d48d(0x2bd)],[0x232+0x6a2+-0x1*0x6bc,_0x44d48d(0x215)],[0x11*0x153+0x27*-0x9+-0x1308,'f32'],[-0x20*-0x24+-0xa8*0x1f+0x60c*0x3,_0xdc8fb7[_0x44d48d(0x19a)]],[0x1488*-0x1+-0x1*0x10c7+0x279f,_0x44d48d(0x215)],[0x2d*0x95+-0x14c6*0x1+-0x7*0x71,_0xdc8fb7[_0x44d48d(0x19a)]],[-0x2692+-0x984+-0x1*-0x326e,_0x44d48d(0x215)],[-0x4f3+0x9f*-0xb+0xe24,'u8'],[0x7c3*-0x5+-0x17f*-0xd+0x15b9,'u8'],[0x10de+-0x13*0x35+-0xa91,'u8'],[0x5*0x48e+0xfa*-0xa+-0xaa2,_0xdc8fb7['auvAt']],[0xae7+-0x22de+0x1a5b,'u8'],[0x21a3+0x98a+0x12*-0x244,'u8'],[-0x1*0x60d+0x29*-0x3+0x8f0,_0x44d48d(0x215)],[-0x4*0x15a+0x36*-0x64+0x1cec,_0x44d48d(0x215)],[-0x25b4+-0x2063+0x4887,_0x44d48d(0x215)],[-0x2*-0x570+0x1a45+-0x53*0x6b,_0x44d48d(0x215)],[-0x1*0x2359+0x12d*0x9+0x1b3c,_0xdc8fb7[_0x44d48d(0x19a)]],[-0x448+0x2265*0x1+-0x1ba1,_0xdc8fb7[_0x44d48d(0x19a)]],[0x847+0x2093+-0x265a,'f32'],[0x25*-0x7+0x9*0x3b4+-0x1dcd,'v3'],[-0xfab*0x1+0x1ea2+-0x7*0x1c5,'u8'],[0x1d6c+-0x1*0x2276+0x7a2,'v3'],[-0x101+0x1f79+-0x1bd4,_0x44d48d(0x215)],[-0x322*0xb+-0x1*0x261a+0x4b3c,'v3'],[0x2207+-0x143*-0xa+-0x2bed*0x1,'f32'],[0xca8+0x1f8d+-0x2979,'f32'],[-0x1669+-0x1*0x1364+0x8e9*0x5,_0x44d48d(0x215)],[0x15bc*0x1+0x23d*0xd+-0x3011,'u8'],[-0x8c6*0x3+0x6*0x219+-0x41*-0x41,'u8'],[-0x20f*0x4+-0x307+0xe0b,_0xdc8fb7[_0x44d48d(0x19a)]],[-0x115*-0x21+0x128a+-0x5*0xa47,'f32'],[0x47+-0x6a4*-0x1+-0x407,'v3'],[-0x24ee+-0x216+-0x37f*-0xc,'v3'],[0x213b*-0x1+-0xce6*-0x2+0xa6b,_0x44d48d(0x215)],[0xc9*0x27+-0x90c+-0x1293,_0x44d48d(0x215)],[-0xb*-0x329+-0xd42*-0x2+-0x3a43,'f32'],[-0xd91*0x1+-0xcb1+0x146*0x17,_0x44d48d(0x215)],[-0x1401*0x1+-0x59c*0x5+-0x7f*-0x67,'v3'],[-0xe*-0x5b+0x1999+-0x1b7b,'u8'],[0x1*-0x1521+-0x4a*-0x86+-0xe7f,'v3'],[0x1*-0x2085+0xd05+0x16a8,'i32'],[0x1ce7+-0x1a34+0xb*0xb,_0xdc8fb7['auvAt']],[0x2710+-0x1f1*0xd+-0x1*0xaa3,'f32'],[-0x31*0x5e+-0x2466+0x3998*0x1,'f32'],[0x23d9+0x1b68+-0x3c05,'f32'],[-0x57*-0x44+-0x61+-0x137b,'u8'],[0xbeb+-0x2*-0xaf2+-0x1e8e,'u8'],[0x268c+0xf6d+-0x1*0x32ad,'u8'],[0xc13*0x3+0x1e42+-0x1*0x3f2e,'u8'],[0x2*-0xbc1+0x2*0x1297+0x2*-0x52f,'u8'],[0x1b25*0x1+-0x2*0x79c+-0x89d,_0xdc8fb7[_0x44d48d(0x19a)]],[-0x1fb*0x13+-0x1418+0x1*0x3d0d,_0xdc8fb7[_0x44d48d(0x19a)]],[0x149d+-0x1cac+0x1*0xb67,_0x44d48d(0x215)],[0x1*-0x10c9+-0x5*0x407+0x1424*0x2,_0x44d48d(0x215)],[-0x10b1*-0x1+0x103e+-0x1d8f,_0xdc8fb7[_0x44d48d(0x19a)]],[0x7e8+0x22b7*-0x1+0x1e33,'u8'],[0x210e+-0x2*-0x1fb+-0x6*0x59a,_0xdc8fb7[_0x44d48d(0x19a)]],[-0x32b*0x1+0xe*-0x29f+0x2b49,'f32'],[-0x2680+-0x1*0x279+-0x2c69*-0x1,'u8'],[0x471+-0x7*0x2cf+0x12b0*0x1,'v3'],[-0x1dfb+0x59*-0x25+0x2e5c,'v3'],[-0xef0+0x1*-0x1a5+-0x1425*-0x1,'v3'],[-0x23de+-0x1*-0x1107+0x1673,'f32'],[0x1c2+-0x75b*-0x4+-0x1b8e,_0xdc8fb7['auvAt']],[0x2157+-0x47e+-0x1b*0xef,'f32'],[-0x1199*0x2+-0x8fc+0x2fd6,'v3'],[-0x16d7+-0x7b9+0x2db*0xc,_0xdc8fb7[_0x44d48d(0x54e)]],[-0x1*-0x1509+-0x143d+0x2c*0x11,'u8'],[0x15d*-0xc+0x1*0x1efa+0xae2*-0x1,_0x44d48d(0x5c8)],[0x2*-0x807+0x117e+0x250,'f32'],[-0x1374+-0x1c*0xc5+0x2cc4,'f32'],[0x7*0x4b7+0x97b*0x3+-0x39aa,_0x44d48d(0x215)],[-0xa25*-0x1+0xfe4+-0x163d,'f32'],[0x4*0x19f+0x192d+-0x1bd9,'v3'],[-0xb8d+-0x1fa7+0x2f10,_0xdc8fb7['kWyoW']],[-0x2527+-0x663*-0x3+-0xaef*-0x2,'u8'],[0x5*-0x5c8+0x1*0x23c4+-0x2fb,'u8'],[-0x1*-0x427+0x1df8+-0x1e3d,'u8'],[-0xd34+0xd11+0x1*0x407,_0xdc8fb7[_0x44d48d(0x19a)]],[0x2*0xf33+0xf46+-0x29c4,_0x44d48d(0x5c8)]],'HealthScript':[[0x4a*-0x6f+0x5*0x341+0x1029,'u8'],[0x17b8+0x10ed+-0x2849,_0x44d48d(0x5c8)],[-0x2188+-0x3a3*0x1+0x25ab,_0x44d48d(0x215)],[-0x1*-0x25f7+-0xe35+-0x19*0xee,'f32'],[0x1*0xf13+0x78*0x14+-0x27*0x9d,_0x44d48d(0x215)],[-0x169*0x1+0xe*-0x2c5+0x28bb,_0xdc8fb7['auvAt']],[0x50e*-0x6+-0xfc3*-0x1+0xf21,'f32'],[-0x115f*-0x2+-0x67*-0x1+-0x2291*0x1,'f32'],[-0xc41+-0x2585+0x3266,_0x44d48d(0x5c8)],[-0x5d2+0x3*-0x265+0xda5,_0x44d48d(0x5c8)],[-0x2607+0x13*0x1d5+-0x1f0*-0x2,'u8'],[0x1*-0xf29+0x1903+-0x931,'u8'],[0x10a6+0x1b1b+0xe5d*-0x3,'u8'],[-0x1*0x1ae9+-0x1f*-0xd9+0x1*0x14d,'u8'],[0x1*-0x9c2+0x18a5+-0x2f*0x4d,'obfI'],[-0xd53+-0x6b7+0x14de,_0x44d48d(0x224)],[-0x221f+-0x1*-0x8cb+0x1a3c,_0x44d48d(0x224)],[-0x1a83+-0x16f*-0xd+0x7*0x144,'obfI'],[-0xc9+0x17cb*-0x1+-0x3*-0x88c,_0x44d48d(0x224)],[-0x1*-0x2457+0x1352*0x2+-0x49d7,'obfB'],[-0x1*-0x13bd+-0x2*0xb47+0x401,_0xdc8fb7[_0x44d48d(0x526)]],[-0x6*0x1d3+0x50*-0x12+-0x11da*-0x1,'f32'],[0x2111*-0x1+-0xa34+0x2c91,'f32'],[-0xc1e+0x177e+-0xa10,_0x44d48d(0x215)],[-0x35*0x1+0x1dc2+-0x1c39*0x1,_0xdc8fb7[_0x44d48d(0x19a)]],[0xc07*0x1+0x2*-0x23d+-0x631,_0xdc8fb7[_0x44d48d(0x19a)]],[-0x248b+-0x7ee+0x2dd9*0x1,'v3'],[-0x14a5+0x1*-0x1c42+-0x3257*-0x1,_0xdc8fb7['auvAt']],[0x2333+0x11*-0xb5+-0x15b6,_0x44d48d(0x215)],[0x1e*-0xdc+0x12ef*0x2+-0xa96*0x1,'u8'],[0x22*-0x81+-0x23c0+0x366e,'u8'],[-0x2501+-0x2524+0x1*0x4bb5,_0xdc8fb7[_0x44d48d(0x54e)]]],'PlayerConfig':[],'WeaponManager':[[0x375+-0x16e1*0x1+0x1384,_0xdc8fb7[_0x44d48d(0x54e)]],[0x78*0xc+-0x36c*-0x1+-0x10*0x8f,'i32'],[0x1656*-0x1+-0x1*-0x25+0x1651,'u8'],[-0x4e*0x3a+-0x977*-0x3+-0x9*0x12d,_0x44d48d(0x5c8)],[-0xb2*0xb+-0x1*0x2462+0x2c6c,_0x44d48d(0x618)],[-0x1996+-0x1938+0x334a,_0xdc8fb7['auvAt']],[0x4*-0x531+-0x269b+0x1*0x3be3,_0x44d48d(0x5c8)],[-0xbdd*0x1+-0x937*-0x2+-0x67*0xf,'u8'],[-0x2*-0x443+0xf*0x1f2+-0x252b,'u8'],[-0x242e+-0x61*0x40+0x3cfa,_0x44d48d(0x5c8)],[0x1218+0x148c+-0x1*0x2614,_0x44d48d(0x215)],[0xb23+-0xf18+0x48d,_0x44d48d(0x215)],[0x1b5+0x2*0x2aa+-0x65d,_0xdc8fb7['kWyoW']],[0xdb7+0xdc*0x1+0x1*-0xdd7,'u8'],[0xc*-0x303+0x2*-0x7cc+0x3498,_0x44d48d(0x224)],[0x2c+0x15e6*0x1+-0x1522,'obfI'],[-0x1*-0x15df+0x270+-0x174b,_0x44d48d(0x215)],[0x1019+0xce2+-0x1bf3,_0xdc8fb7['auvAt']],[-0xa19+-0x55e+0x3*0x581,_0xdc8fb7[_0x44d48d(0x19a)]],[0x925+-0x5d4+-0x239,_0xdc8fb7[_0x44d48d(0x19a)]],[0x23c0+0xbd*-0x7+-0x1*0x1d75,_0x44d48d(0x215)],[-0x3*-0xff+0x2578+-0x1*0x274d,'u8'],[0xa06*0x1+-0xbc5+-0x9*-0x53,_0xdc8fb7[_0x44d48d(0x64c)]],[0x99a+0x1dbf*0x1+0x1*-0x2619,_0xdc8fb7['iRcsd']],[0x2355+-0x1145+-0x10bc,_0xdc8fb7[_0x44d48d(0x64c)]],[0x1c80+0x552+-0x206a,_0x44d48d(0x2bd)],[-0x223e+-0x9*-0x8a+0x1ed8,_0xdc8fb7[_0x44d48d(0x67d)]],[-0x22ba+0xa52+-0xcf4*-0x2,_0xdc8fb7[_0x44d48d(0x67d)]],[-0xeb*-0x26+0x7*0x315+-0x1*0x36e9,'obfB'],[-0x653*-0x1+0x3*-0x74b+0x1132,_0xdc8fb7['hYeAU']],[0x4d*0x7f+-0x342+0x2141*-0x1,_0x44d48d(0x224)],[-0xaad*0x2+0x455*-0x2+0x1fd*0x10,_0xdc8fb7['kWyoW']],[0x3*-0x8d1+-0x1f0a+0x143*0x2f,'u8'],[0x2*-0x971+0x7*-0x3c7+0x2f27,_0xdc8fb7[_0x44d48d(0x54e)]],[0x1949*-0x1+0x21cc+0x6ab*-0x1,'i32'],[0x1060+-0x6*-0x1d6+0x659*-0x4,_0x44d48d(0x5c8)],[0xe6f+0x386+0x1*-0xfe1,'u8'],[0x469*-0x5+-0xade+0x2307,'u8'],[-0xe4a+0x251f+-0x14b8,'u8'],[-0x22fb+-0x80b*0x3+0x3d3a,'u8'],[0x46*0x89+0x18b*-0x10+-0xaa7,'u8'],[-0xf7f*-0x1+0x1*-0xc5a+-0xd5,_0xdc8fb7[_0x44d48d(0x54e)]],[0x503+0x5bb+0x56*-0x19,'u8']],'GG_GameManager':[[0x87*-0x25+-0x928+0x5c3*0x5,'u8'],[-0x2a6+0x23ad+-0x20db,'f32'],[0x1*0x168a+0x22c7+0xb69*-0x5,'u8'],[0xb08+0x2f3+-0xdb6,'u8'],[-0x3*-0xccf+0x217*0x6+0x4b*-0xad,_0xdc8fb7[_0x44d48d(0x19a)]],[0x1aa7*0x1+0x15e9+0x3044*-0x1,_0x44d48d(0x215)],[0x10d9+-0x866+-0x823,_0x44d48d(0x5c8)],[0x2bd*0x4+0x5a6*-0x4+0x5fc*0x2,_0xdc8fb7[_0x44d48d(0x54e)]],[0x1*-0x33b+0x1*-0x1d3f+0x20d2*0x1,'u8'],[0x49*-0x6d+-0xb59+-0x16*-0x1f3,'u8'],[0x1306+0x13*-0x16c+0x876,_0xdc8fb7['auvAt']],[-0xec7+0xff6+-0xb3,'f32'],[-0xe9b+-0x1a3*0xe+0x2615,_0x44d48d(0x5c8)],[-0xa3*0xd+0xf14+-0x639,'u8'],[-0x1*-0x11a+0x22ce+-0x2334,_0x44d48d(0x5c8)],[-0x2230+0x1e0*-0x2+-0xb4*-0x37,_0xdc8fb7[_0x44d48d(0x54e)]],[-0xd49+-0x224e*-0x1+0x1445*-0x1,_0xdc8fb7['kWyoW']],[-0x7ce+0x161b*-0x1+0x1ed1,'obfI'],[-0x229d+0x22b6+0xe3,_0x44d48d(0x224)],[-0x1f2b+0x25f3+-0x5b8,_0x44d48d(0x224)],[0x1*-0x29b+-0xc1*0x1a+0x1761,'u8'],[-0x218c*0x1+-0x3ce+0x268a,_0x44d48d(0x5c8)],[0x65*0x11+0x1*0x5ff+-0xb50,'u8'],[-0x1840+0x723+-0x3*-0x62f,_0x44d48d(0x215)],[0xf97*-0x1+0xd49+-0x3ce*-0x1,'u8'],[0xb98*0x2+0x821*0x2+-0x2e*0xd3,'u8'],[0xb+0x17f0+-0x1657,'u8'],[-0x6a3+0x1ac+0x235*0x3,_0x44d48d(0x5c8)],[0x1f8e+-0x8cc+-0x1516,'f32'],[0x1649+-0x47*-0x5d+-0x2e64,'u8'],[-0x4ef*-0x7+0x86c+-0x2944,'u8'],[0x1*0xc19+-0x4+-0xa5d,_0x44d48d(0x5c8)],[0x1ee7+-0x191+0x2*-0xdcd,_0xdc8fb7[_0x44d48d(0x54e)]],[-0x31*0x70+0x1664+0xcc,'f32'],[0xd1d+0x6bd+-0x1216,_0xdc8fb7['kWyoW']],[-0x14cf+0x24d+0x144a*0x1,_0x44d48d(0x215)],[0x98b*-0x3+0x21cc+-0x35f,_0x44d48d(0x5c8)],[-0xd98+-0x1516+0x247e,_0x44d48d(0x5c8)]],'EnemyBot':[[-0x1589+-0x1008+0x25b1,_0x44d48d(0x215)],[-0x6*0x127+-0x80c*-0x2+-0x90a,'v3'],[-0xbe5+-0x331*-0x8+-0xd73,'u8'],[0x95*-0x3b+-0x13df*-0x1+0xeac,_0xdc8fb7['auvAt']],[-0x16ab+-0x18d*-0x1+0x1556,_0xdc8fb7['auvAt']],[-0x9b1*-0x1+0x2093*0x1+-0xa*0x434,'u8'],[-0x521+0xdd5+-0x438*0x2,_0xdc8fb7[_0x44d48d(0x19a)]],[-0x44a*0x8+-0xee6+0x317e,_0xdc8fb7['auvAt']],[0x647+-0x2269+-0x97a*-0x3,'u8'],[0x1*0x1d9+-0x475+-0x95*-0x5,'u8']]},_0x4fe5b1={};function _0x30dd74(_0xfaedd9,_0x93f402,_0x26b916){var _0x4037bc=_0x44d48d,_0x28d338={'Bvpcx':_0x4037bc(0x4f5)+_0x4037bc(0x374),'Sbajn':'Speed'+_0x4037bc(0x66f),'ZEIBN':'trans'+_0x4037bc(0x14c)+'t'};return function(_0x336e77){var _0x215fb0=_0x4037bc,_0x5652c3={'ExDek':function(_0x4fd213,_0x5a6ec0){return _0x4fd213===_0x5a6ec0;}};if(_0xdc8fb7['ZxCcV']!==_0x215fb0(0x257))try{var _0x5ade26=_0x336e77&&_0x336e77['val']?_0x336e77[_0x215fb0(0x2fc)]():0x1a9*0xe+0x2*0x101e+-0x62a*0x9;if(!_0x5ade26)return;if(_0x26b916){if(!_0x4fe5b1[_0x5ade26])_0x4fe5b1[_0x5ade26]={'ptr':_0x5ade26,'firstSeen':Date[_0x215fb0(0x670)](),'hits':0x0};_0x4fe5b1[_0x5ade26]['hits']++;}else{var _0x51f5de=_0x329eaa[_0xfaedd9];if(!_0x51f5de||_0x51f5de[_0x215fb0(0x3d7)]!==_0x5ade26){if(_0xdc8fb7[_0x215fb0(0x2d8)](_0xdc8fb7[_0x215fb0(0x5a3)],_0x215fb0(0x65a))){_0x329eaa[_0xfaedd9]={'ptr':_0x5ade26,'firstSeen':Date['now'](),'hits':0x0,'replaced':!!_0x51f5de};try{var _0x53f8a9=_0x5e85b2[_0x215fb0(0x5d8)+'r'](function(_0x3c6256){return _0x3c6256['type']===_0xfaedd9;})[-0xe*-0x8a+0xc*0x48+0x6*-0x1d2];_0x2ac11a={'type':_0xfaedd9,'atMs':Date[_0x215fb0(0x670)]()-_0x4f0af9,'originalFunc':!!(_0x53f8a9&&_0x53f8a9[_0x215fb0(0x5ac)]&&_0xdc8fb7[_0x215fb0(0x454)](typeof _0x53f8a9[_0x215fb0(0x5ac)][_0x215fb0(0x68d)+'nalFu'+'nc'],_0x215fb0(0x15c)+_0x215fb0(0x2a3))),'resolveGameAtFire':!!_0xdc8fb7[_0x215fb0(0x1cf)](_0x11a9ff),'gameSourceAtFire':_0x51e93c[_0x215fb0(0x39f)+'e']};}catch(_0x5badaa){}}else{if(_0x193273[_0x46a937]['membe'+'rs']['lengt'+'h']>=_0x2adea9)_0x5524e9[_0x215fb0(0x5cf)](_0x23b6bf[_0x5bb25f]);}}}if(_0xfaedd9===_0xdc8fb7[_0x215fb0(0x2cf)]&&_0xbe5912['on'])try{_0xd374dc(_0x5ade26);}catch(_0x2a7233){}if(!_0x93f402){var _0x53f8a9=_0x5e85b2[_0x215fb0(0x5d8)+'r'](function(_0x2b8e12){return _0x5652c3['ExDek'](_0x2b8e12['type'],_0xfaedd9);})[-0x3ea+-0x12*-0x71+-0x408];if(_0x53f8a9&&_0x53f8a9[_0x215fb0(0x5ac)])try{_0x53f8a9[_0x215fb0(0x5ac)]['enabl'+'ed']=![];}catch(_0x55036c){}}}catch(_0x147f4c){}else _0x199808=!!_0x5174ca[_0x215fb0(0x616)]['on'],_0x37f87e['textC'+_0x215fb0(0x4ea)+'t']=_0x41e3c0?_0x28d338[_0x215fb0(0x657)]:_0x28d338[_0x215fb0(0x330)],_0x422dae[_0x215fb0(0x4e2)][_0x215fb0(0x3b0)+_0x215fb0(0x5a8)]=_0x5e8752?_0x140f80:_0x28d338[_0x215fb0(0x3bf)],_0xeb355b[_0x215fb0(0x4e2)][_0x215fb0(0x41f)]=_0x414c95?'#2a0f'+'1b':_0x215fb0(0x458)+'f5',_0x76257&&_0x30a613['speed'][_0x215fb0(0x271)+'r']&&(_0x3f49fb[_0x215fb0(0x298)+_0x215fb0(0x4ea)+'t']=_0x18f1f9(_0xa2ceba['speed'][_0x215fb0(0x271)+'r'])[_0x215fb0(0x604)+'ed'](0xbaa*-0x1+0x7fc+0x3af)+'x');};}function _0x292abb(){var _0x2694e4=_0x44d48d;if(_0x5e85b2[_0x2694e4(0x62e)+'h'])return!![];if(!window[_0x2694e4(0x452)+'WebMo'+'dkit']||!window[_0x2694e4(0x452)+_0x2694e4(0x621)+'dkit']['Runti'+'me'])return![];var _0x2b0b70=window['Unity'+_0x2694e4(0x621)+_0x2694e4(0x18b)]['Runti'+'me'];if(!_0x2b0b70[_0x2694e4(0x4e9)+'ns']||!_0x2b0b70['plugi'+'ns']['lengt'+'h'])return![];_0xfd7756=window[_0x2694e4(0x452)+'WebMo'+_0x2694e4(0x18b)]['Value'+_0x2694e4(0x29c)+'er'],_0xa64258=_0xa64258||_0x2b0b70[_0x2694e4(0x4e9)+'ns'][_0x2b0b70[_0x2694e4(0x4e9)+'ns'][_0x2694e4(0x62e)+'h']-(-0x661*-0x5+0x38e+-0x2372*0x1)];if(!_0xa64258||typeof _0xa64258[_0x2694e4(0x61f)+_0x2694e4(0x354)]!==_0x2694e4(0x15c)+'ion')return![];for(var _0x476370=0x3*-0x208+0x26e3+-0x20cb;_0x476370<_0x4b4390[_0x2694e4(0x62e)+'h'];_0x476370++){if(_0xdc8fb7[_0x2694e4(0x5ab)]===_0xdc8fb7['hVVcl']){var _0x19f6ee=_0x4b4390[_0x476370];try{if(_0xdc8fb7[_0x2694e4(0x2f0)]===_0xdc8fb7[_0x2694e4(0x241)])return null;else{var _0x3a0fbb=_0xa64258[_0x2694e4(0x61f)+_0x2694e4(0x354)]({'typeName':_0x19f6ee[_0x2694e4(0x5cd)],'methodName':_0xdc8fb7['dCNgM'],'params':['i32','i32'],'returnType':undefined},_0x30dd74(_0x19f6ee['type'],_0x19f6ee[_0x2694e4(0x3f6)],_0x19f6ee[_0x2694e4(0x185)]));_0x5e85b2[_0x2694e4(0x5cf)]({'type':_0x19f6ee['type'],'hook':_0x3a0fbb,'keep':_0x19f6ee[_0x2694e4(0x3f6)]});}}catch(_0x1f2229){_0x41d898['push'](_0x19f6ee['type']+':\x20'+String(_0x1f2229&&_0x1f2229[_0x2694e4(0x279)+'ge']||_0x1f2229)['slice'](-0x1*-0x1699+0x1b84+-0x321d,-0x2683+0x2427+0x2fc));}}else _0x3ad6e5['warni'+'ngs']['push'](_0x2694e4(0x1b2)+'w.Uni'+_0x2694e4(0x5d5)+'Modki'+'t.Val'+'ueWra'+_0x2694e4(0x444)+_0x2694e4(0x60c)+'ssing'+_0x2694e4(0x170)+_0x2694e4(0x286)+'\x20is\x20r'+_0x2694e4(0x442)+'g\x20bli'+_0x2694e4(0x169));}return _0x5e85b2[_0x2694e4(0x62e)+'h']>-0x193*-0x10+0x17e+0x2*-0xd57;}function _0x42f935(){var _0x2a00c7=_0x44d48d,_0x304484=-0x2*-0xcdd+0x1*-0x1043+-0x977*0x1;for(var _0x1b57d5=-0x241c+-0xc*0x1b5+0x3898;_0x1b57d5<_0x5e85b2[_0x2a00c7(0x62e)+'h'];_0x1b57d5++){if(_0x5e85b2[_0x1b57d5]['hook']&&_0xdc8fb7[_0x2a00c7(0x2ca)](_0x5e85b2[_0x1b57d5]['hook'][_0x2a00c7(0x595)+'Index'],undefined))_0x304484++;}return _0x304484;}function _0x2cb82f(){var _0x1ee4b3=-0x4*0x8c2+0x1559+0xdaf;for(var _0x3a5830=0x1*-0x1a29+0x453*0x1+0x15d6;_0x3a5830<_0x5e85b2['lengt'+'h'];_0x3a5830++){if(_0x5e85b2[_0x3a5830]['hook']&&_0x5e85b2[_0x3a5830]['hook']['appli'+'ed'])_0x1ee4b3++;}return _0x1ee4b3;}var _0x462b12=null,_0x279057=[],_0x31e210={},_0x2ac11a=null;function _0xe89f4e(_0x1dcfe1){try{if(!_0xfd7756||!_0x1dcfe1)return null;var _0x49fefc=new _0xfd7756(_0x1dcfe1)['getCl'+'assNa'+'me']();return _0x49fefc===undefined?null:_0x49fefc;}catch(_0x375ab2){return null;}}function _0x36643b(_0x5d919f,_0x22284b,_0x4b78e6){var _0x441dc2=_0x44d48d,_0x49a184=_0x1fa548();if(!_0x49a184)return null;if(_0xdc8fb7['DETbm'](_0x22284b,0x1ee4+-0xb29+-0x13bb*0x1)||_0x22284b+_0xdc8fb7[_0x441dc2(0x29b)](_0x4b78e6,0x20e6+0x1*-0x69d+-0x1a45)>_0x49a184[_0x441dc2(0x34b)+'ength'])return null;var _0x3995be=[];for(var _0x330bc7=0x1137+0x5*0x272+-0x1d71;_0x330bc7<_0x4b78e6;_0x330bc7++)_0x3995be[_0x441dc2(0x5cf)](_0x49a184['getFl'+_0x441dc2(0x571)](_0xdc8fb7[_0x441dc2(0x37f)](_0xdc8fb7['RrmwD'](_0x5d919f,_0x22284b),_0xdc8fb7['nwKor'](_0x330bc7,-0x227a+-0x3*-0x664+0x1*0xf52)),!![]));return _0x51e93c['ok']+=_0x4b78e6,_0x3995be;}function _0x167f57(){var _0x18f639=_0x44d48d,_0x22475b={'sCkgu':function(_0xd20973,_0x5ce315){var _0x4ce81f=_0x40b5;return _0xdc8fb7[_0x4ce81f(0x379)](_0xd20973,_0x5ce315);},'IWsZr':_0x18f639(0x215),'WVqzG':'2|1|4'+_0x18f639(0x34e),'cyuIj':_0xdc8fb7[_0x18f639(0x551)],'bmOEF':_0x18f639(0x4bf),'vfWke':function(_0x14f278,_0x16d1f4){return _0xdc8fb7['kqJtx'](_0x14f278,_0x16d1f4);}};if(_0xdc8fb7['PWsaH'](_0x18f639(0x54b),_0x18f639(0x54b))){var _0x5c8d29={'enemies':[],'camera':null,'playerList':null,'wasmTypes':null},_0x5c5a8a=Object[_0x18f639(0x53f)](_0x4fe5b1);for(var _0x31224d=0x207c+0x2674+-0x46f0;_0xdc8fb7[_0x18f639(0x420)](_0x31224d,_0x5c5a8a[_0x18f639(0x62e)+'h'])&&_0xdc8fb7[_0x18f639(0x668)](_0x31224d,0x4d2+-0x190c+0x1452);_0x31224d++){var _0x22c6d4=_0x4fe5b1[_0x5c5a8a[_0x31224d]],_0x132da3=_0x5342aa[_0x18f639(0x246)+_0x18f639(0x39a)]||[],_0x12ab1b={'ptr':'0x'+_0x22c6d4['ptr']['toStr'+_0x18f639(0x198)](-0x1b*0xdc+0x1f8a+0x6*-0x161),'hits':_0x22c6d4['hits'],'pos':null};for(var _0x2fd789=0x122c+0x1c95+-0x2ec1;_0x2fd789<_0x132da3[_0x18f639(0x62e)+'h'];_0x2fd789++){if(_0x132da3[_0x2fd789][-0x1e6d+-0x1dc5+0x3c33]!=='v3')continue;_0x12ab1b['pos']=_0x36643b(_0x22c6d4[_0x18f639(0x3d7)],_0x132da3[_0x2fd789][0x139a+0x2412+0x7*-0x7f4],0x1297*0x1+0x2*-0x952+0x10),_0x12ab1b[_0x18f639(0x308)]='0x'+_0x132da3[_0x2fd789][-0x10f*0x12+0x1*0x425+0x1*0xee9][_0x18f639(0x1e8)+_0x18f639(0x198)](-0x23f1*0x1+0x1*-0xc04+0x3005);break;}_0x12ab1b[_0x18f639(0x42a)+'rs']=_0x132da3[_0x18f639(0x5d8)+'r'](function(_0x49635e){var _0x3e566a=_0x18f639;return _0x22475b[_0x3e566a(0x381)](_0x49635e[0x1629+-0x156b*-0x1+0x73*-0x61],_0x22475b[_0x3e566a(0x137)]);})['map'](function(_0x16355b){var _0x146ffc=_0x18f639;return{'o':_0x16355b[-0x30b*0x6+0x13ee+-0x1ac],'v':_0x38a26c(_0x22c6d4[_0x146ffc(0x3d7)]+_0x16355b[0x552+-0x7eb+0x299],_0x22475b['IWsZr'])};})['filte'+'r'](function(_0x5a43c9){var _0x5062e0=_0x18f639,_0x2eb36b={'QPaVk':_0x22475b['WVqzG'],'ABIhy':function(_0x2be2d1,_0xe7bfe8){return _0x2be2d1<_0xe7bfe8;},'kzbsP':function(_0x570f81,_0x1dfdb7){return _0x570f81+_0x1dfdb7;},'utrhs':_0x5062e0(0x43d),'VNjNs':'void'};if(_0x22475b[_0x5062e0(0x615)]!==_0x22475b['bmOEF'])return _0x22475b[_0x5062e0(0x2f2)](_0x5a43c9['v'],undefined)&&isFinite(_0x5a43c9['v']);else{var _0x286d0c=_0x2eb36b[_0x5062e0(0x162)]['split']('|'),_0x39aab5=0xe*0xed+0xa1*-0x25+0xa4f;while(!![]){switch(_0x286d0c[_0x39aab5++]){case'0':_0xa0a2ea['wasmT'+'ypes']=_0x58c62f;continue;case'1':var _0x49ff7a=_0x5a9889&&_0x5a9889[_0x5062e0(0x593)+'nalWa'+'smTyp'+'es']||[];continue;case'2':var _0x5a9889=_0x5c7794[_0x5062e0(0x452)+'WebMo'+_0x5062e0(0x18b)]&&_0x434699['Unity'+'WebMo'+_0x5062e0(0x18b)][_0x5062e0(0x51a)+'me'];continue;case'3':for(var _0x51c2bb=0x19c8+-0x605*0x2+0x2*-0x6df;_0x2eb36b[_0x5062e0(0x4bb)](_0x51c2bb,_0x49ff7a[_0x5062e0(0x62e)+'h'])&&_0x2eb36b[_0x5062e0(0x4bb)](_0x51c2bb,0x1c47+0x114a*0x2+-0x2f3b);_0x51c2bb++){var _0x12417f=_0x2eb36b[_0x5062e0(0x39c)](_0x49ff7a[_0x51c2bb][_0x5062e0(0x2e8)+'s'][_0x5062e0(0x174)](','),_0x2eb36b[_0x5062e0(0x51f)])+(_0x49ff7a[_0x51c2bb][_0x5062e0(0x678)+_0x5062e0(0x32e)]||_0x2eb36b[_0x5062e0(0x122)]);_0x58c62f[_0x12417f]=(_0x58c62f[_0x12417f]||0x1dc0+-0x1*-0x1477+-0x3237)+(0x9ef*0x1+-0x11*0x11+-0x8cd);}continue;case'4':var _0x58c62f={};continue;}break;}}})[_0x18f639(0x40a)](0xd83+-0xbc*-0x18+0x1*-0x1f23,-0x1b+-0xd41+-0x6b1*-0x2),_0x5c8d29['enemi'+'es'][_0x18f639(0x5cf)](_0x12ab1b);}_0x5c8d29[_0x18f639(0x476)+_0x18f639(0x535)]=_0x5c5a8a['lengt'+'h'];var _0x46b2dd=_0x329eaa['GG_Ga'+_0x18f639(0x2f6)+_0x18f639(0x5f7)];if(_0x46b2dd&&_0x46b2dd['ptr']){var _0xb27725=_0xdc8fb7['fYejK'](_0x38a26c,_0x46b2dd['ptr']+(-0x2*0x11ed+-0x3*0x83+0x2577),_0xdc8fb7[_0x18f639(0x1f9)]),_0x205f9d=_0x38a26c(_0x46b2dd[_0x18f639(0x3d7)]+(-0x7*0x525+-0x4a5+-0xdac*-0x3),_0xdc8fb7[_0x18f639(0x1f9)]);_0x5c8d29['camer'+'a']=_0xb27725?'0x'+_0xdc8fb7[_0x18f639(0x3cf)](_0xb27725,0x2496+0x242+-0x26d8)['toStr'+_0x18f639(0x198)](0xe3c+-0x1*-0x562+-0x138e*0x1):null,_0x5c8d29['playe'+_0x18f639(0x1d9)]=_0x205f9d?_0xdc8fb7[_0x18f639(0x626)]('0x',(_0x205f9d>>>0x2*-0x1005+-0x1258*-0x2+0x22*-0x23)[_0x18f639(0x1e8)+_0x18f639(0x198)](0x59d+-0x1eb8+-0x192b*-0x1)):null;}else _0x5c8d29['note']=_0xdc8fb7[_0x18f639(0x68e)](_0xdc8fb7[_0x18f639(0x2aa)],_0xdc8fb7[_0x18f639(0x38e)]);try{var _0x3e60bb=window[_0x18f639(0x452)+_0x18f639(0x621)+'dkit']&&window[_0x18f639(0x452)+_0x18f639(0x621)+_0x18f639(0x18b)]['Runti'+'me'],_0x4752c1=_0x3e60bb&&_0x3e60bb[_0x18f639(0x593)+'nalWa'+'smTyp'+'es']||[],_0x5a9b81={};for(var _0x2c7bce=-0x2*0x31d+0x121+0x519;_0xdc8fb7['NkISB'](_0x2c7bce,_0x4752c1['lengt'+'h'])&&_0x2c7bce<0xdf*-0x1+-0xc5*-0x32+-0x15fb;_0x2c7bce++){if(_0xdc8fb7[_0x18f639(0x585)](_0x18f639(0x5d9),_0xdc8fb7[_0x18f639(0x67b)])){var _0x4f14a2=_0xdc8fb7['QBLFD'](_0x4752c1[_0x2c7bce]['param'+'s'][_0x18f639(0x174)](','),_0x18f639(0x43d))+(_0x4752c1[_0x2c7bce]['retur'+_0x18f639(0x32e)]||'void');_0x5a9b81[_0x4f14a2]=(_0x5a9b81[_0x4f14a2]||0x194a+-0x3*-0xac9+-0x39a5)+(0x1c04+0x123e*-0x2+0x879*0x1);}else _0x1a46fb['push']({'o':_0x4a361a[_0x233b13]['membe'+'rs'][_0x51ffae]['o'],'v':_0x298709[_0xcf45dd][_0x18f639(0x685)+'rs'][_0x3e37c1]['v'],'why':_0x18f639(0x415)+_0x18f639(0x140)});}_0x5c8d29[_0x18f639(0x503)+_0x18f639(0x261)]=_0x5a9b81;}catch(_0x20c8d4){}return _0x5c8d29;}else{var _0xd6e55={};try{var _0x443257=_0xb41e04[_0x18f639(0x452)+_0x18f639(0x621)+_0x18f639(0x18b)]&&_0x26dc2c['Unity'+_0x18f639(0x621)+_0x18f639(0x18b)][_0x18f639(0x51a)+'me'];_0xd6e55[_0x18f639(0x297)]=_0x443257&&_0x443257['__sak'+_0x18f639(0x3e0)+'g']||null,_0xd6e55[_0x18f639(0x4d0)+_0x18f639(0x4dd)]=!!(_0xdc8fb7[_0x18f639(0x561)](_0x443257,_0x3c7b6d)&&_0x443257['__sak'+'uraTa'+'g']===_0x237b15),_0xd6e55[_0x18f639(0x696)+_0x18f639(0x2cd)+'e']=_0x443257&&_0x443257[_0x18f639(0x63c)]?typeof _0x443257[_0x18f639(0x63c)]:_0x18f639(0x3be),_0xd6e55[_0x18f639(0x4e9)+'nRunt'+_0x18f639(0x61b)+_0x18f639(0x5c5)+_0x18f639(0x623)]=!!(_0x38f17e&&_0x50e8b9[_0x18f639(0x2e9)+'ime']&&_0xdc8fb7['LmMxQ'](_0x20c6ff[_0x18f639(0x2e9)+_0x18f639(0x206)],_0x443257)),_0xd6e55[_0x18f639(0x4e9)+_0x18f639(0x23e)+_0x18f639(0x38a)+'me']=_0x1fbceb&&_0x160eb9[_0x18f639(0x2e9)+'ime']&&_0xf8f4ea['_runt'+'ime'][_0x18f639(0x63c)]?typeof _0x6d5a78[_0x18f639(0x2e9)+_0x18f639(0x206)]['_game']:_0x18f639(0x3be);}catch(_0x515955){_0xd6e55['error']=_0x42b012(_0x515955&&_0x515955['messa'+'ge']||_0x515955);}return _0xd6e55;}}function _0x296ff9(){var _0x263524=_0x44d48d,_0x3e0ce3={'OtCGi':'.Modu'+'le','TtksA':function(_0x171136,_0x3850f6){return _0x171136<=_0x3850f6;},'mmRYH':function(_0x5eba66,_0x1e1182){var _0x5c05f0=_0x40b5;return _0xdc8fb7[_0x5c05f0(0x3a2)](_0x5eba66,_0x1e1182);}};if(_0x263524(0x145)===_0xdc8fb7['boXOo'])return _0x3ce5d5['sourc'+'e']=_0x7e034c[_0x263524(0x39f)+'e']||_0x263524(0x3c7)+_0x263524(0x48d)+'e().e'+_0x263524(0x487)+_0x263524(0x2a8)+'ory',new _0x5dc0f7(_0x2abb92['buffe'+'r']);else{var _0x5dd4af={};_0x51e93c['ok']=0x1*0x1622+-0x4f+0x97*-0x25,_0x51e93c['faile'+'d']=0x2a1*-0x4+0x863+0x221,_0x51e93c['lastE'+_0x263524(0x2ed)]=null;var _0x57ccaf=Object['keys'](_0x5342aa);for(var _0x62ab06=-0x23b7*-0x1+-0x904*0x4+-0x59*-0x1;_0x62ab06<_0x57ccaf['lengt'+'h'];_0x62ab06++){var _0x25f431=_0x57ccaf[_0x62ab06],_0x576898=_0x329eaa[_0x25f431];if(!_0x576898||!_0x576898[_0x263524(0x3d7)])continue;var _0x239e8c=_0x5342aa[_0x25f431]||[],_0x42482f=[];for(var _0x2dbe2b=-0x1d5e+0x62*0x16+0x14f2;_0xdc8fb7['XSHpa'](_0x2dbe2b,_0x239e8c[_0x263524(0x62e)+'h']);_0x2dbe2b++){if(_0x263524(0x4be)==='oeQmZ'){var _0x5bf8d8=_0x239e8c[_0x2dbe2b][0xf9*0x17+0x2b*0xc5+-0x3776],_0x1c4c8b=_0x239e8c[_0x2dbe2b][-0x44*0x5b+0x3*0x43+0x7cc*0x3];if(_0x1c4c8b['index'+'Of']('obf')===-0x2c*-0xd2+0xccf+-0x3c3*0xd){if(_0xdc8fb7[_0x263524(0x40b)]('yyAjX','DbhwQ')){var _0x341aa0=_0x4af9cd(_0x576898[_0x263524(0x3d7)],_0x5bf8d8,_0x1c4c8b);if(!_0x341aa0)continue;_0x341aa0['o']=_0x5bf8d8,_0x341aa0['k']=_0x1c4c8b,_0x42482f[_0x263524(0x5cf)](_0x341aa0);}else return _0x53b8d9[_0x263524(0x39f)+'e']=_0x263524(0x1b2)+'w.'+_0x1414f3[_0x479407]+_0x3e0ce3['OtCGi'],_0x16f0ab;}else{var _0x181011=_0x38a26c(_0x576898[_0x263524(0x3d7)]+_0x5bf8d8,_0x1c4c8b);if(_0x181011===undefined)continue;var _0x27ec67={'o':_0x5bf8d8,'k':_0x1c4c8b,'v':_0x181011};if(_0xdc8fb7['exHXp'](_0x1c4c8b,'v2')||_0xdc8fb7[_0x263524(0x630)](_0x1c4c8b,'v3')||_0x1c4c8b==='v4'){var _0x2b7fe7=_0xdc8fb7['WbCVw'](_0x1c4c8b,'v2')?0x96f+0x1561+-0x1ece:_0x1c4c8b==='v3'?-0x2080+0x1*-0x1ec5+-0x12c*-0x36:0x2*-0xa42+0x88f+0x1*0xbf9,_0xf26a6c=_0xdc8fb7[_0x263524(0x254)](_0x36643b,_0x576898['ptr'],_0x5bf8d8,_0x2b7fe7);if(_0xf26a6c){if(_0x263524(0x4cb)!=='VjDqM')return _0x3e0ce3[_0x263524(0x5b0)](_0xe5728d[_0x263524(0x51e)](_0x3a0bb1-_0x44ad8d),_0x444ad4[_0x263524(0x462)](0x86f+-0x10d3+0x865,_0x3e0ce3[_0x263524(0x325)](_0x106e4b['abs'](_0x236c23),-0x1*-0x3ce+-0x19*0x112+0x16f4*0x1+0.6)));else _0x27ec67[_0x263524(0x225)]=_0xf26a6c,_0x27ec67['v']=_0xf26a6c[0xef9*-0x1+0xe18*0x1+0x5*0x2d];}}_0x42482f['push'](_0x27ec67);}}else{var _0x1ac73e=(_0x263524(0x5fa)+_0x263524(0x5f1)+_0x263524(0x348)+_0x263524(0x567)+_0x263524(0x510)+_0x263524(0x141)+_0x263524(0x134))[_0x263524(0x41b)]('|'),_0x30b7b0=0x2*-0x1373+0x14c6+0x1d0*0xa;while(!![]){switch(_0x1ac73e[_0x30b7b0++]){case'0':if(_0xdc8fb7['UdFnU'](_0x518f19,_0x956dd5)||_0x2d016d===_0x2ebf7d||_0xdc8fb7['PQgni'](_0x8b4700,_0x26323f)||_0xdc8fb7['drvns'](_0x468c87,_0x4209da))return null;continue;case'1':var _0x468c87=_0x57f0dd(_0x3d174a+_0x7ea627+_0x4955fc[_0x263524(0x386)+'e'],'u8');continue;case'2':var _0x8b4700=_0x54a996(_0xdc8fb7['rPaAF'](_0xdc8fb7['qSNLZ'](_0x421acd,_0x5581f4),_0x4955fc['fake']),_0x2ad013===_0x263524(0x618)?_0xdc8fb7['auvAt']:_0x389c78==='obfI'?_0xdc8fb7['kWyoW']:'u8');continue;case'3':return{'real':_0x50523a,'fake':_0x8b4700,'act':_0x468c87,'init':_0x29d6a4,'key':_0x518f19,'hidden':_0x2d016d};case'4':_0x518f19&=-0x389+-0x608+0xa90;continue;case'5':_0x468c87&=0x31*0x26+0x1e89+-0x25ce;continue;case'6':if(!_0x4955fc)return null;continue;case'7':var _0x29d6a4=_0x4eea4c(_0xdc8fb7[_0x263524(0x37b)](_0xdc8fb7[_0x263524(0x4b6)](_0x4a0e37,_0x4f0e14),_0x4955fc['inite'+'d']),'u8');continue;case'8':var _0x2d016d=_0xb9cdab(_0xdc8fb7['NxYFM'](_0x43e6d0+_0x2919c1,_0x4955fc[_0x263524(0x351)+'n']),_0x263524(0x5c8));continue;case'9':_0x2d016d|=-0x21a8+-0x2331+0x44d9*0x1;continue;case'10':var _0x4955fc=_0xabc659[_0x126365];continue;case'11':var _0x50523a;continue;case'12':var _0x518f19=_0x3690b0(_0x7db23f+_0x57ad35+_0x4955fc[_0x263524(0x163)],'u8');continue;case'13':_0x29d6a4=_0xdc8fb7[_0x263524(0x131)](_0xdc8fb7['QEIrF'](_0x29d6a4,0xb6*0x23+0x5*-0x7be+-0xec*-0xf),0x119c+-0x155b+0x1e*0x20);continue;case'14':if(_0xf73c4b===_0x263524(0x618))_0x50523a=_0x3775bf(_0xdc8fb7[_0x263524(0x67f)](_0x2d016d,_0x518f19));else{if(_0xc3bce===_0xdc8fb7['iRcsd'])_0x50523a=_0xdc8fb7['ktLrM'](_0x2d016d^_0x518f19,0x867*-0x3+0x1d40+-0xf*0x45);else _0x50523a=_0xdc8fb7[_0x263524(0x25f)](_0x2d016d^_0x518f19,-0x104+-0x22a7*-0x1+-0x1052*0x2)!==-0x142b+-0x9bb+0x1de6?0x1f2b+-0x2581+-0x21d*-0x3:0x221c+0x56*0x1d+-0x2bda;}continue;}break;}}}if(_0x42482f['lengt'+'h']){var _0x2f45a7=_0x21c612(_0x42482f);_0x5dd4af[_0x25f431]=_0x2f45a7[_0x263524(0x592)],_0x31e210[_0x25f431]={'key':_0x2f45a7[_0x263524(0x163)],'sane':_0x2f45a7['sane'],'checked':_0x2f45a7['check'+'ed'],'keyConsistent':_0x2f45a7[_0x263524(0x392)+'nsist'+_0x263524(0x2b8)],'keySource':_0x2f45a7['keySo'+_0x263524(0x166)]};}}return _0x5dd4af;}}function _0x21c612(_0x23fde5){var _0x372357=_0x44d48d,_0x345fbe=0x1*-0xe21+-0x2f*0x8b+0x1d*0x15e,_0x4ec9f6=0x1ab8+-0xab7+-0x11*0xf1,_0x35d9d1=null;for(var _0x543427=-0x3*-0x8e1+-0x14ed+-0x5b6;_0x543427<_0x23fde5['lengt'+'h'];_0x543427++){if(_0x372357(0x66e)===_0xdc8fb7['JdHjK']){var _0xdf70c6=_0x23fde5[_0x543427];if(_0xdf70c6['k']['index'+'Of'](_0xdc8fb7[_0x372357(0x50b)])!==0xfb2+-0x18ee+0x93c)continue;_0xdf70c6['v']=_0xdc8fb7[_0x372357(0x513)](_0x32c0e0,_0xdf70c6['k'],_0xdf70c6[_0x372357(0x351)+'n'],_0xdf70c6[_0x372357(0x642)+'Offse'+'t0']),_0xdf70c6[_0x372357(0x17a)+'ed']=_0xdf70c6['keyAt'+_0x372357(0x21b)+'t0'],_0xdf70c6['raw']=_0xdc8fb7['rHXIz'](_0xdc8fb7[_0x372357(0x285)](_0xdc8fb7['XAOnU'](_0xdc8fb7['cBYyD']+_0xdf70c6['hidde'+'n']+(_0x372357(0x5b7)+'=')+_0xdf70c6[_0x372357(0x47b)],_0xdf70c6[_0x372357(0x541)]?'\x20ACTI'+'VE':''),_0xdc8fb7[_0x372357(0x178)]),_0xdf70c6['keyAt'+_0x372357(0x21b)+'t0'])+_0xdc8fb7[_0x372357(0x24b)]+_0xdf70c6['hex'];if(_0xdc8fb7[_0x372357(0x2ba)](_0x35d9d1,null))_0x35d9d1=_0xdf70c6[_0x372357(0x642)+_0x372357(0x21b)+'t0'];_0x4ec9f6++,_0x5b8e1b(_0xdf70c6)?(_0x345fbe++,_0xdf70c6[_0x372357(0x469)]=!![]):_0xdf70c6['sane']=![],delete _0xdf70c6[_0x372357(0x3ce)];}else _0x4912cb[_0x372357(0x2ab)+'e']();}return{'rows':_0x23fde5,'key':_0x35d9d1,'sane':_0x345fbe,'checked':_0x4ec9f6,'keyConsistent':_0xdc8fb7['nxtUn'](_0x21e5d2,_0x23fde5),'keySource':_0x372357(0x28e)+'t\x200\x20('+'int-w'+'idth)'};}function _0x21e5d2(_0x46ed49){var _0x1d6688=_0x44d48d,_0x59cd87={};for(var _0x4e420e=0x9*0x216+-0x1e73+0xbad;_0x4e420e<_0x46ed49[_0x1d6688(0x62e)+'h'];_0x4e420e++){var _0x445b37=_0x46ed49[_0x4e420e];if(_0x445b37['k'][_0x1d6688(0x35a)+'Of']('obf')!==0x1be2+0xd41+0x2923*-0x1)continue;if(_0xdc8fb7[_0x1d6688(0x5cb)](_0x59cd87[_0x445b37['k']],undefined))_0x59cd87[_0x445b37['k']]=_0x445b37[_0x1d6688(0x17a)+'ed'];else{if(_0xdc8fb7[_0x1d6688(0x60f)](_0x59cd87[_0x445b37['k']],_0x445b37[_0x1d6688(0x17a)+'ed']))return![];}}return!![];}function _0x5b8e1b(_0x1a9ed2){var _0x522bef=_0x44d48d,_0x403425=('5|0|3'+_0x522bef(0x3f5)+_0x522bef(0x37c))['split']('|'),_0x255fa5=-0x1fc*0x5+0xb7b+0x3*-0x85;while(!![]){switch(_0x403425[_0x255fa5++]){case'0':if(typeof _0x5062dc!==_0xdc8fb7[_0x522bef(0x1d5)]||!isFinite(_0x5062dc))return![];continue;case'1':var _0x37032f=_0x1a9ed2[_0x522bef(0x47b)];continue;case'2':if(_0xdc8fb7['CXjXp'](typeof _0x37032f,_0xdc8fb7[_0x522bef(0x1d5)])||!isFinite(_0x37032f))return!![];continue;case'3':if(_0x1a9ed2['k']===_0xdc8fb7['hYeAU'])return _0x5062dc===-0xdd2+0x132f*-0x2+0x3430||_0x5062dc===-0x20cd+0xf3b+0xb*0x199;continue;case'4':return _0xdc8fb7['ymHOz'](Math['abs'](_0x5062dc),0x42631461+0x5ab292fc+-0x617add5d);case'5':var _0x5062dc=_0x1a9ed2['v'];continue;case'6':if(_0x1a9ed2[_0x522bef(0x541)]===0x56b*0x2+-0x6*-0x64d+0x1*-0x30a3)return Math['abs'](_0x5062dc-_0x37032f)<=Math[_0x522bef(0x462)](0x1*-0x17e5+-0x10cb+-0x28b1*-0x1,Math[_0x522bef(0x51e)](_0x37032f)*(-0x25b8+0x1c28+-0x11*-0x90+0.6));continue;}break;}}function _0x1ee1ed(){var _0x589de3=_0x44d48d,_0x7c8f2a={};try{if(_0xdc8fb7[_0x589de3(0x343)]!==_0x589de3(0x464)){var _0x3e2ef9=window[_0x589de3(0x452)+_0x589de3(0x621)+_0x589de3(0x18b)]&&window[_0x589de3(0x452)+_0x589de3(0x621)+_0x589de3(0x18b)][_0x589de3(0x51a)+'me'];_0x7c8f2a[_0x589de3(0x297)]=_0x3e2ef9&&_0x3e2ef9['__sak'+'uraTa'+'g']||null,_0x7c8f2a['tagMa'+'tches']=!!(_0xdc8fb7[_0x589de3(0x558)](_0x3e2ef9,_0x5d02c3)&&_0x3e2ef9['__sak'+_0x589de3(0x3e0)+'g']===_0x5d02c3),_0x7c8f2a['runti'+'meGam'+'e']=_0x3e2ef9&&_0x3e2ef9[_0x589de3(0x63c)]?typeof _0x3e2ef9[_0x589de3(0x63c)]:'none',_0x7c8f2a['plugi'+'nRunt'+_0x589de3(0x61b)+_0x589de3(0x5c5)+'ted']=!!(_0xa64258&&_0xa64258[_0x589de3(0x2e9)+_0x589de3(0x206)]&&_0xa64258['_runt'+_0x589de3(0x206)]===_0x3e2ef9),_0x7c8f2a[_0x589de3(0x4e9)+'nRunt'+'imeGa'+'me']=_0xa64258&&_0xa64258['_runt'+'ime']&&_0xa64258['_runt'+'ime'][_0x589de3(0x63c)]?typeof _0xa64258[_0x589de3(0x2e9)+_0x589de3(0x206)]['_game']:_0x589de3(0x3be);}else try{_0x4524c8[_0x589de3(0x2a6)]();}catch(_0x1e21d2){}}catch(_0x4261f9){_0x7c8f2a[_0x589de3(0x4e1)]=String(_0x4261f9&&_0x4261f9[_0x589de3(0x279)+'ge']||_0x4261f9);}return _0x7c8f2a;}function _0x514d45(){var _0x16094d=_0x44d48d,_0x4f478e={'kBfQl':function(_0x3dfec8,_0x4b5c7e){var _0x2d8ea0=_0x40b5;return _0xdc8fb7[_0x2d8ea0(0x406)](_0x3dfec8,_0x4b5c7e);}};if(_0xdc8fb7[_0x16094d(0x126)](_0xdc8fb7[_0x16094d(0x18c)],'DyhKP')){_0x40ef8f[_0x420500]=_0x4f478e[_0x16094d(0x4c4)]('0x',_0xda95b2[_0x1c7d25][_0x16094d(0x3d7)]['toStr'+_0x16094d(0x198)](0x2190+0x1f14+-0x1025*0x4));if(_0x2c3396[_0x1f9dd2][_0x16094d(0x121)+'ced'])_0xd12fcf['push'](_0x4474a0);}else{var _0x41237b=_0xdc8fb7['BGEEl']['split']('|'),_0xac3bad=-0x16d7+-0xdcf+0x24a6;while(!![]){switch(_0x41237b[_0xac3bad++]){case'0':var _0x20c2f=[_0x16094d(0x594)+_0x16094d(0x1f6)+_0x16094d(0x45d),_0x16094d(0x594)+_0x16094d(0x301),'game','unity'+'Insta'+_0x16094d(0x5c6)+_0x16094d(0x3c8)];continue;case'1':_0x3375c0[_0x16094d(0x47f)+'ource']=_0x51e93c[_0x16094d(0x39f)+'e'];continue;case'2':return _0x3375c0;case'3':_0x3375c0['value'+_0x16094d(0x29c)+'er']=typeof _0xfd7756;continue;case'4':var _0x5709cf=_0x11a9ff();continue;case'5':try{_0x3375c0[_0x16094d(0x1dd)+_0x16094d(0x591)]=!!(_0x5709cf&&_0x5709cf[_0x16094d(0x468)+'e']),_0x3375c0['heapU'+'8']=!!(_0x5709cf&&_0x5709cf[_0x16094d(0x468)+'e']&&_0x5709cf[_0x16094d(0x468)+'e']['HEAPU'+'8']),_0x3375c0[_0x16094d(0x3af)+'ytes']=_0x3375c0['heapU'+'8']?_0x5709cf[_0x16094d(0x468)+'e'][_0x16094d(0x11c)+'8'][_0x16094d(0x62e)+'h']:0x7*0x431+0x8af+-0x1f*0x13a;}catch(_0x4f6673){_0x3375c0[_0x16094d(0x1dd)+_0x16094d(0x591)]=![],_0x3375c0['heapU'+'8']=![],_0x3375c0[_0x16094d(0x3af)+_0x16094d(0x628)]=0x17c5*-0x1+-0x5ae*0x5+0x342b;}continue;case'6':var _0x3375c0={};continue;case'7':for(var _0x14e7e3=-0x23cc+-0x1bbf+-0x3f8b*-0x1;_0xdc8fb7['uAdJr'](_0x14e7e3,_0x20c2f[_0x16094d(0x62e)+'h']);_0x14e7e3++){var _0x35890d=_0x20c2f[_0x14e7e3],_0x421bdb=typeof window[_0x35890d];_0x3375c0[_0x35890d]=_0x421bdb==='undef'+'ined'?'undef'+'ined':_0x421bdb;}continue;}break;}}}function _0x12d48a(_0x30cd17){var _0x50440d=_0x44d48d,_0x1fab8d={};for(var _0x38409b in _0x30cd17){var _0x26e3bc=_0x30cd17[_0x38409b];for(var _0x45de1b=0xca4+0xf70+-0x1c14;_0x45de1b<_0x26e3bc['lengt'+'h'];_0x45de1b++){_0x1fab8d[_0xdc8fb7[_0x50440d(0x285)](_0x38409b+_0x50440d(0x139),_0x26e3bc[_0x45de1b]['o'][_0x50440d(0x1e8)+'ing'](0x1d5*0x1+0x469*-0x1+-0x1a*-0x1a))]=_0x26e3bc[_0x45de1b]['v'];}}return _0x1fab8d;}function _0x40434a(_0x1767fe,_0x477405){var _0x310f10=_0x44d48d,_0x55ee2c=(_0x310f10(0x219)+_0x310f10(0x546)+'2|1|8'+'|4')['split']('|'),_0x40e34e=-0x192*-0x17+-0x698+-0x1d86;while(!![]){switch(_0x55ee2c[_0x40e34e++]){case'0':var _0x1736a0=_0xdc8fb7[_0x310f10(0x400)](_0x12d48a,_0x1edc38);continue;case'1':for(var _0x7d20dd in _0x1736a0){var _0x251f3c=_0x462b12[_0x7d20dd],_0x14c9c9=_0x1736a0[_0x7d20dd];if(_0xdc8fb7[_0x310f10(0x502)](_0x251f3c,_0x14c9c9))_0x279057['push'](_0x7d20dd+':\x20'+_0x251f3c+_0x310f10(0x43d)+_0x14c9c9);}continue;case'2':_0x279057=[];continue;case'3':if(_0xdc8fb7[_0x310f10(0x5b1)](_0x1767fe,_0x310f10(0x4e6)+_0x310f10(0x597)))return;continue;case'4':_0x18ed3e(_0xdc8fb7['wnCtv'],{'report':_0x478a2f()});continue;case'5':if(!_0x462b12){_0x462b12=_0x1736a0,_0x279057=[],_0x18ed3e('repor'+'t',{'report':_0x478a2f()});return;}continue;case'6':if(_0xdc8fb7['QJGQD'](_0x1767fe,_0xdc8fb7[_0x310f10(0x59b)])){_0x5933ef(_0x477405&&typeof _0x477405['on']===_0x310f10(0x54d)+'an'?_0x477405['on']:_0xbe5912['on'],_0x477405&&_0xdc8fb7['exHXp'](typeof _0x477405[_0x310f10(0x271)+'r'],_0x310f10(0x3bd)+'r')?_0x477405[_0x310f10(0x271)+'r']:_0xbe5912[_0x310f10(0x271)+'r']);return;}continue;case'7':var _0x1edc38=_0x296ff9();continue;case'8':_0x462b12=_0x1736a0;continue;}break;}}var _0x3787f8=null;function _0x5109be(){var _0xe5ef22=_0x44d48d,_0xd67095={'OJnPP':function(_0x9a6178,_0x5bd38e){return _0x9a6178+_0x5bd38e;},'rkqiJ':function(_0x5517ae,_0x16d0f3){return _0x5517ae===_0x16d0f3;},'saKpk':'strin'+'g','tGynI':function(_0x2eb673,_0x4a8001){return _0x2eb673!==_0x4a8001;},'UiLqr':function(_0x1a15cf,_0x946e66){var _0x4f3dab=_0x40b5;return _0xdc8fb7[_0x4f3dab(0x400)](_0x1a15cf,_0x946e66);}};if(_0x3787f8)return _0x3787f8;try{if(_0xdc8fb7[_0xe5ef22(0x4d8)]===_0xe5ef22(0x2bc)){if(!document[_0xe5ef22(0x2b9)]||!document['body'][_0xe5ef22(0x49d)+_0xe5ef22(0x606)+'d'])return null;if(!document[_0xe5ef22(0x1b7)+_0xe5ef22(0x313)+_0xe5ef22(0x192)](_0xdc8fb7['aFSQS'])){var _0x3be28e=document[_0xe5ef22(0x128)+'eElem'+_0xe5ef22(0x2b8)](_0xe5ef22(0x4e2));_0x3be28e['id']='sakur'+'a-sw-'+'hud-c'+'ss',_0x3be28e[_0xe5ef22(0x298)+'onten'+'t']='#saku'+'ra-sw'+'-hud{'+'all:i'+'nitia'+'l}',(document['head']||document[_0xe5ef22(0x34f)+_0xe5ef22(0x29e)+_0xe5ef22(0x313)])['appen'+_0xe5ef22(0x606)+'d'](_0x3be28e);}var _0x428281=document['creat'+_0xe5ef22(0x2c7)+_0xe5ef22(0x2b8)]('div');_0x428281['id']=_0xdc8fb7[_0xe5ef22(0x4d4)],_0x428281['style']['cssTe'+'xt']=_0xdc8fb7[_0xe5ef22(0x3ea)](_0xdc8fb7['hVxYI']+(_0xe5ef22(0x3b0)+_0xe5ef22(0x5a8)+':rgba'+_0xe5ef22(0x404)+'2,29,'+'.92);'+'borde'+_0xe5ef22(0x17b)+'\x20soli'+'d\x20rgb'+_0xe5ef22(0x2bb)+_0xe5ef22(0x524)+_0xe5ef22(0x44f)+'45);b'+_0xe5ef22(0x189)+'-radi'+_0xe5ef22(0x4c8)+_0xe5ef22(0x30c)),_0xe5ef22(0x445)+_0xe5ef22(0x48e)+_0xe5ef22(0x4b2)+_0xe5ef22(0x481)+_0xe5ef22(0x647)+_0xe5ef22(0x183)+_0xe5ef22(0x62c)+_0xe5ef22(0x5de)+'ace,C'+'onsol'+'as,mo'+'nospa'+'ce;co'+_0xe5ef22(0x20e)+'f7eef'+'5;')+_0xdc8fb7['vFqAb'];var _0x1d8dea=_0xdc8fb7['XAOnU'](_0xdc8fb7[_0xe5ef22(0x5fb)](_0xdc8fb7['kSYDS'](_0xdc8fb7['lAoIC'](_0xdc8fb7['xJJcK'](_0xe5ef22(0x260)+_0xe5ef22(0x158)+_0xe5ef22(0x4cf)+'r\x22\x20st'+_0xe5ef22(0x68b)+'displ'+_0xe5ef22(0x5c2)+_0xe5ef22(0x695)+_0xe5ef22(0x4fb)+_0xe5ef22(0x21f)+_0xe5ef22(0x56f)+'ms:ce'+'nter;'+'flex-'+_0xe5ef22(0x316)+_0xe5ef22(0x589)+_0xe5ef22(0x45f)+'idth:'+_0xe5ef22(0x3d0)+_0xe5ef22(0x645)+_0xdc8fb7['bXobG']+_0x32ae10,_0xe5ef22(0x199)+'ura</'+'b>'),_0xdc8fb7[_0xe5ef22(0x3da)])+_0xdc8fb7[_0xe5ef22(0x232)]+('<inpu'+_0xe5ef22(0x4c6)+_0xe5ef22(0x652)+'fx\x22\x20t'+_0xe5ef22(0x522)+_0xe5ef22(0x182)+_0xe5ef22(0x26e)+'=\x221\x22\x20'+_0xe5ef22(0x459)+_0xe5ef22(0x3ae)+_0xe5ef22(0x14d)+_0xe5ef22(0x223)+_0xe5ef22(0x63e)+'\x222\x22\x20s'+_0xe5ef22(0x3fb)+'\x22widt'+_0xe5ef22(0x384)+_0xe5ef22(0x3c3)+_0xe5ef22(0x385)+_0xe5ef22(0x5c4)),_0x32ae10)+_0xe5ef22(0x645)+(_0xe5ef22(0x5a7)+'\x20data'+'-a=\x22f'+_0xe5ef22(0x40e)+'yle=\x22'+'color'+_0xe5ef22(0x543)+'9c9;m'+'in-wi'+'dth:3'+_0xe5ef22(0x4ef)+'>2.0x'+_0xe5ef22(0x2c9)+'n>'),_0xdc8fb7[_0xe5ef22(0x5bd)])+('color'+_0xe5ef22(0x2ad)+_0xe5ef22(0x426)+_0xe5ef22(0x189)+_0xe5ef22(0x266)+'us:6p'+_0xe5ef22(0x525)+'ding:'+'2px\x207'+_0xe5ef22(0x5e6)+_0xe5ef22(0x22a)+'point'+'er;fo'+_0xe5ef22(0x291)+_0xe5ef22(0x25c)+';\x22>Sn'+_0xe5ef22(0x2df)+'utton'+'>')+(_0xe5ef22(0x66d)+_0xe5ef22(0x383)+_0xe5ef22(0x3b2)+_0xe5ef22(0x171)+_0xe5ef22(0x520)+_0xe5ef22(0x4eb)+_0xe5ef22(0x376)+_0xe5ef22(0x542)+_0xe5ef22(0x391)+';back'+'groun'+'d:tra'+'nspar'+_0xe5ef22(0x529)+_0xe5ef22(0x189)+':1px\x20'+'solid'+_0xe5ef22(0x323)+_0xe5ef22(0x151)+'143,1'+_0xe5ef22(0x1aa)+'5);')+('color'+_0xe5ef22(0x2ad)+'ef5;b'+_0xe5ef22(0x189)+'-radi'+_0xe5ef22(0x675)+'x;pad'+'ding:'+_0xe5ef22(0x1e5)+_0xe5ef22(0x5e6)+'rsor:'+_0xe5ef22(0x18a)+_0xe5ef22(0x1fe)+'nt:in'+_0xe5ef22(0x25c)+';\x22>-<'+_0xe5ef22(0x3fd)+_0xe5ef22(0x36c)),'</div'+'>')+('<div\x20'+_0xe5ef22(0x158)+_0xe5ef22(0x4c7)+'\x22\x20sty'+'le=\x22c'+'olor:'+_0xe5ef22(0x3aa)+_0xe5ef22(0x331)+_0xe5ef22(0x1a5)+_0xe5ef22(0x64e)+_0xe5ef22(0x4ef)+'></di'+'v>');_0x428281[_0xe5ef22(0x45b)+'HTML']=_0x1d8dea;var _0x32c572=function(_0x2a15a7){var _0x302e72=_0xe5ef22;return _0x428281[_0x302e72(0x27b)+_0x302e72(0x346)+_0x302e72(0x466)](_0xd67095['OJnPP'](_0x302e72(0x446)+_0x302e72(0x33f)+_0x2a15a7,'\x22]'));},_0x1833f0=_0x32c572('st'),_0x480c2e=_0xdc8fb7[_0xe5ef22(0x661)](_0x32c572,'sp'),_0x519846=_0xdc8fb7['bZVxN'](_0x32c572,'fx'),_0xdf4b6d=_0xdc8fb7['QWpSo'](_0x32c572,'fv'),_0x226642=_0x32c572(_0xdc8fb7[_0xe5ef22(0x13b)]);if(_0x480c2e)_0x480c2e['oncli'+'ck']=function(){var _0x56e004=_0xe5ef22;if(_0x56e004(0x507)!==_0x56e004(0x507)){var _0x1848ce='';for(var _0x58d8bf=0x1112+0x815+-0x1927;_0x58d8bf<arguments[_0x56e004(0x62e)+'h'];_0x58d8bf++){var _0x492917=arguments[_0x58d8bf];if(_0xd67095[_0x56e004(0x334)](typeof _0x492917,_0xd67095[_0x56e004(0x396)]))_0x1848ce+=_0x492917;else{if(_0x492917&&_0x492917['messa'+'ge'])_0x1848ce+=_0x492917['messa'+'ge'];}}if(_0x1848ce[_0x56e004(0x35a)+'Of'](_0xa20709)!==-(-0x5fc*0x1+0x6c4*0x2+-0x1*0x78b))return _0x1171d3[_0x56e004(0x63b)](_0x2b855c,arguments);if(_0xd67095['tGynI'](_0x1848ce[_0x56e004(0x35a)+'Of'](_0x56e004(0x452)+_0x56e004(0x621)+'dkit'),-(-0x1fc+0xf74+0xd77*-0x1))){var _0x447eee=_0x1848ce[_0x56e004(0x40a)](0x18de+-0x11ff+0x6df*-0x1,0x37a+-0x250d+0x251*0xf);if(_0x4c3a5c[_0x56e004(0x35a)+'Of'](_0x447eee)===-(0x97*0x42+0x1edc+-0x1*0x45c9)&&_0x4236d4['lengt'+'h']<-0x13aa+-0x6c9*-0x2+0x24*0x2d)_0xec12d[_0x56e004(0x5cf)](_0x447eee);}}else _0x5933ef(!_0xbe5912['on'],_0xbe5912[_0x56e004(0x271)+'r']);};if(_0x519846)_0x519846['oninp'+'ut']=function(){var _0x4dc42b=_0xe5ef22;_0xdc8fb7[_0x4dc42b(0x12c)](_0x5933ef,_0xbe5912['on'],_0xdc8fb7[_0x4dc42b(0x689)](parseFloat,_0x519846[_0x4dc42b(0x368)])||-0x1eca+-0x1d93+0x3c5e*0x1);};if(_0x32c572('snap'))_0xdc8fb7['hibKB'](_0x32c572,_0xdc8fb7['qExaj'])['oncli'+'ck']=function(){var _0x5c0048=_0xe5ef22;_0xd67095[_0x5c0048(0x5cc)](_0x40434a,_0x5c0048(0x4e6)+_0x5c0048(0x597));};if(_0x32c572(_0xdc8fb7['nGrFI']))_0xdc8fb7[_0xe5ef22(0x603)](_0x32c572,'fold')['oncli'+'ck']=function(){var _0x55878f=_0xe5ef22;if(!_0x226642)return;var _0x59c4b8=_0x226642['style']['displ'+'ay']===_0x55878f(0x3be);_0x226642[_0x55878f(0x4e2)]['displ'+'ay']=_0x59c4b8?'':_0x55878f(0x3be),_0xdc8fb7[_0x55878f(0x27f)](_0x32c572,_0x55878f(0x660))['textC'+_0x55878f(0x4ea)+'t']=_0x59c4b8?'-':'+';};return document['body'][_0xe5ef22(0x49d)+'dChil'+'d'](_0x428281),_0x3787f8={'el':_0x428281,'st':_0x1833f0,'sp':_0x480c2e,'fx':_0x519846,'fv':_0xdf4b6d},_0x3787f8;}else{var _0x5052d3=_0xdc8fb7[_0xe5ef22(0x356)](_0x4267e2);if(!_0x5052d3)return _0x5810c2;if(_0x5052d3[_0xe5ef22(0x1b0)+'et']['api'])return _0x5052d3['api'];try{return _0x2d80dc(_0x5052d3);}catch(_0x524bcc){return _0x5052d3[_0xe5ef22(0x1b0)+'et']['api']='1',_0x5052d3['api']=_0x12d71b,_0x15f2fa[_0xe5ef22(0x4ff)](_0xdc8fb7[_0xe5ef22(0x1e6)],_0xe5ef22(0x41f)+':'+_0x6bf63e,_0x524bcc),_0x58a94d;}}}catch(_0x246b4b){return console['warn'](_0xdc8fb7['YzFNA'],_0xdc8fb7['IZwZg'](_0xe5ef22(0x41f)+':',_0x32ae10),_0x246b4b),null;}}var _0x19612b=0x1a6*-0x1+-0x2*-0x547+-0x8e6;function _0x5933ef(_0x140636,_0x889c7b){var _0x3d1b71=_0x44d48d;if(_0xdc8fb7[_0x3d1b71(0x269)](_0x3d1b71(0x682),_0xdc8fb7['aIaWO']))_0xb48b50['error']=_0x48f822(_0x1622d6&&_0xe547e9['messa'+'ge']||_0xf1cad0);else{var _0x1ec5ed=_0xbe5912['on'];_0xbe5912['on']=!!_0x140636;if(_0xbe5912['on']&&!_0x1ec5ed&&(_0x889c7b===undefined||_0x889c7b===null||Number(_0x889c7b)===-0x1c8b+-0x167a+-0x2*-0x1983)){if(_0xdc8fb7[_0x3d1b71(0x436)](_0x3d1b71(0x16f),_0xdc8fb7['ieykp']))_0x889c7b=_0x19612b;else{var _0x5707f8=_0x2c5598(_0x2e3e22);_0xb79ee4[_0x85d5cb]=_0x5707f8['rows'],_0x47bb79[_0x1575bc]={'key':_0x5707f8[_0x3d1b71(0x163)],'sane':_0x5707f8[_0x3d1b71(0x469)],'checked':_0x5707f8[_0x3d1b71(0x688)+'ed'],'keyConsistent':_0x5707f8[_0x3d1b71(0x392)+_0x3d1b71(0x24d)+'ent'],'keySource':_0x5707f8['keySo'+'urce']};}}_0xbe5912[_0x3d1b71(0x271)+'r']=Math['min'](_0xbe5912[_0x3d1b71(0x462)],Math[_0x3d1b71(0x462)](_0xbe5912['min'],_0xdc8fb7['TyXLY'](Number,_0x889c7b)||-0x92*-0x43+-0x1*-0x1383+0x1*-0x39b8));if(!_0xbe5912['on'])_0x282ea3={};var _0x52d87a=_0x5109be();if(_0x52d87a){_0x52d87a['sp']&&(_0x52d87a['sp'][_0x3d1b71(0x298)+'onten'+'t']=_0xbe5912['on']?'Speed'+'\x20ON':_0x3d1b71(0x4f5)+'\x20off',_0x52d87a['sp'][_0x3d1b71(0x4e2)]['backg'+_0x3d1b71(0x5a8)]=_0xbe5912['on']?_0x32ae10:'trans'+_0x3d1b71(0x14c)+'t',_0x52d87a['sp'][_0x3d1b71(0x4e2)][_0x3d1b71(0x41f)]=_0xbe5912['on']?_0xdc8fb7['yLVVl']:_0xdc8fb7['cAzSB']);if(_0x52d87a['fx'])_0x52d87a['fx'][_0x3d1b71(0x368)]=_0xdc8fb7[_0x3d1b71(0x2ff)](String,_0xbe5912[_0x3d1b71(0x271)+'r']);if(_0x52d87a['fv'])_0x52d87a['fv']['textC'+_0x3d1b71(0x4ea)+'t']=_0xdc8fb7[_0x3d1b71(0x43b)](_0xbe5912['facto'+'r'][_0x3d1b71(0x604)+'ed'](-0x1bff+-0x6a2+-0xb*-0x326),'x');}}}function _0x1f7e3b(_0x3e30a4){var _0x4209d6=_0x44d48d,_0x1765c7={'ZywgG':_0xdc8fb7['lwDZb']},_0x47a52=_0x5109be();if(!_0x47a52||!_0x47a52['st'])return;try{if(_0xdc8fb7['kqJtx'](_0xdc8fb7[_0x4209d6(0x16e)],_0xdc8fb7[_0x4209d6(0x16e)]))_0x5d05da['textC'+'onten'+'t']=_0x51f2da[_0x4209d6(0x483)]&&_0x2cf23a[_0x4209d6(0x483)]['lengt'+'h']?_0x1765c7[_0x4209d6(0x530)]+_0xb0e8a6[_0x4209d6(0x483)][_0x4209d6(0x174)](',\x20'):_0x4209d6(0x19c)+_0x4209d6(0x5b8)+_0x4209d6(0x412)+_0x4209d6(0x14b)+'ng\x20/\x20'+_0x4209d6(0x2c6)+'ting\x20'+'/\x20jum'+_0x4209d6(0x144)+'marks'+'\x20whic'+'h\x20fie'+'ld\x20is'+_0x4209d6(0x382)+'h.';else{var _0xf4b51=Object[_0x4209d6(0x53f)](_0x3e30a4&&_0x3e30a4[_0x4209d6(0x3c7)+_0x4209d6(0x44e)]||{})['lengt'+'h'],_0x2d8c07=_0x1653d9?_0xdc8fb7[_0x4209d6(0x285)]((_0x1653d9[_0x4209d6(0x38d)+'r'][_0x4209d6(0x34b)+_0x4209d6(0x34a)]/(0x14669*0x5+0xb5e13+-0xdf1*0x20))[_0x4209d6(0x604)+'ed'](-0xf6*0xb+-0x1d*-0x4a+0x230),'MB'):_0x4209d6(0x303)+'m',_0xa89451=_0xdc8fb7[_0x4209d6(0x135)](_0xdc8fb7[_0x4209d6(0x626)](_0xdc8fb7['WzWtx'](_0xdc8fb7['wpFhH'](_0xdc8fb7[_0x4209d6(0x2f1)]('v'+(_0x3e30a4&&_0x3e30a4['versi'+'on']||_0x346a98),_0x4209d6(0x5d6)+'ks\x20'),_0x3e30a4&&_0x3e30a4[_0x4209d6(0x5a4)+'Appli'+'ed']||0x2084+-0x1686+0x4ff*-0x2),'/'),_0x3e30a4&&_0x3e30a4['hooks'+_0x4209d6(0x457)]||-0x1b1c+0xd7+0x1a45),_0x4209d6(0x204)+'s\x20')+_0xf4b51+_0xdc8fb7[_0x4209d6(0x276)]+_0x2d8c07+('\x20\x20wri'+_0x4209d6(0x550))+_0x47422c;_0x47a52['st'][_0x4209d6(0x298)+_0x4209d6(0x4ea)+'t']=_0xa89451,_0x47a52['st']['style'][_0x4209d6(0x41f)]=_0x3e30a4&&_0x3e30a4[_0x4209d6(0x5a4)+_0x4209d6(0x555)+'ed']>-0x224a+0x1*0x2051+-0x1f9*-0x1?_0x4209d6(0x3f1)+'a8':_0xdc8fb7['pWmnM'];}}catch(_0x59fc43){}}window[_0x44d48d(0x3c2)+_0x44d48d(0x434)+_0x44d48d(0x2d5)+'r'](_0x44d48d(0x326)+'wn',function(_0x2ce90e){var _0xc2c8da=_0x44d48d,_0x4ebf35={'gnNRY':function(_0x1540a6,_0x41e638){return _0x1540a6!==_0x41e638;}};if(!_0x2ce90e)return;try{if('yHLZz'==='yHLZz'){if(_0x2ce90e['code']==='F9'){if(_0xdc8fb7[_0xc2c8da(0x1a1)](_0xdc8fb7[_0xc2c8da(0x237)],_0xdc8fb7['AlumB'])){if(_0x1e5ff4[_0xc2c8da(0x14c)+'t']&&_0x4ebf35[_0xc2c8da(0x44c)](_0x24ce89[_0xc2c8da(0x14c)+'t'],_0x491ad6))_0x4d9fce[_0xc2c8da(0x14c)+'t']['postM'+'essag'+'e'](_0x2cee17,'*');}else{_0x2ce90e['preve'+_0xc2c8da(0x656)+'ault'](),_0x40434a(_0xc2c8da(0x4e6)+_0xc2c8da(0x597));return;}}if(_0xdc8fb7[_0xc2c8da(0x2f4)](_0x2ce90e['code'],'F7')){_0x2ce90e[_0xc2c8da(0x471)+_0xc2c8da(0x656)+_0xc2c8da(0x322)](),_0xdc8fb7[_0xc2c8da(0x4b9)](_0x5933ef,!_0xbe5912['on'],_0xbe5912[_0xc2c8da(0x271)+'r']);return;}if(_0x2ce90e[_0xc2c8da(0x4fd)]==='F8'){if(_0xdc8fb7['JWGtr']!==_0xc2c8da(0x66c))_0x152664[_0xc2c8da(0x450)+_0xc2c8da(0x3e1)][_0xc2c8da(0x5cf)](_0xc2c8da(0x4e9)+_0xc2c8da(0x55e)+_0xc2c8da(0x12e)+'\x20is\x20n'+_0xc2c8da(0x46c)+'ndow.'+_0xc2c8da(0x452)+_0xc2c8da(0x621)+_0xc2c8da(0x31b)+_0xc2c8da(0x51a)+_0xc2c8da(0x51d)+_0xc2c8da(0x1f7)+'lugin'+_0xc2c8da(0x566)+'built'+'\x20'+(_0xc2c8da(0x5dd)+_0xc2c8da(0x15a)+'diffe'+_0xc2c8da(0x4f4)+_0xc2c8da(0x51a)+_0xc2c8da(0x36d)+_0xc2c8da(0x377)+'e\x20tha'+_0xc2c8da(0x588)+'\x20glob'+_0xc2c8da(0x1e4)+'w\x20exp'+_0xc2c8da(0x3ff)));else{_0x2ce90e[_0xc2c8da(0x471)+_0xc2c8da(0x656)+'ault'](),_0x5933ef(_0xbe5912['on'],_0xbe5912[_0xc2c8da(0x271)+'r']+(-0x178+-0x102d*0x1+0x11a5+0.5));return;}}if(_0xdc8fb7['CgPrc'](_0x2ce90e[_0xc2c8da(0x4fd)],'F6')){_0x2ce90e[_0xc2c8da(0x471)+_0xc2c8da(0x656)+_0xc2c8da(0x322)](),_0x5933ef(_0xbe5912['on'],_0xdc8fb7[_0xc2c8da(0x52d)](_0xbe5912[_0xc2c8da(0x271)+'r'],-0x3cc+-0x1444+-0x10*-0x181+0.5));return;}}else _0x26ba14[_0xc2c8da(0x4e1)]=_0x4f1572(_0x2dff95&&_0xaac347[_0xc2c8da(0x279)+'ge']||_0x5e7431);}catch(_0x12d09b){}},!![]);function _0x478a2f(){var _0x5546cb=_0x44d48d,_0x3e7f1b={'FhJVu':function(_0x375088,_0x11b209){return _0x375088+_0x11b209;}},_0x3d761f=window['Unity'+_0x5546cb(0x621)+_0x5546cb(0x18b)]&&window[_0x5546cb(0x452)+'WebMo'+'dkit']['Runti'+'me']||null,_0x2c9152=_0x3d761f&&_0x3d761f[_0x5546cb(0x28d)+_0x5546cb(0x2da)+'ext'],_0x56eac8=_0x2c9152&&_0x2c9152['scrip'+_0x5546cb(0x68a)],_0x482032={},_0x36ab2d=[];for(var _0x3a33a2 in _0x329eaa){_0x482032[_0x3a33a2]=_0xdc8fb7[_0x5546cb(0x52f)]('0x',_0x329eaa[_0x3a33a2]['ptr']['toStr'+_0x5546cb(0x198)](-0x2b2+0x6d4+0x412*-0x1));if(_0x329eaa[_0x3a33a2][_0x5546cb(0x121)+_0x5546cb(0x4ca)])_0x36ab2d[_0x5546cb(0x5cf)](_0x3a33a2);}var _0x466266={};for(var _0x354b75 in _0x329eaa)_0x466266[_0x354b75]=_0xe89f4e(_0x329eaa[_0x354b75][_0x5546cb(0x3d7)]);var _0x28d57f={},_0x1dd05d=null;try{_0x28d57f=_0x296ff9();}catch(_0x1c0350){_0x1dd05d=String(_0x1c0350&&_0x1c0350[_0x5546cb(0x279)+'ge']||_0x1c0350);}var _0x352a19={'version':_0x346a98,'when':new Date()['toISO'+_0x5546cb(0x4f0)+'g'](),'elapsedMs':_0xdc8fb7['FrnJC'](Date[_0x5546cb(0x670)](),_0x4f0af9),'frame':location['href'][_0x5546cb(0x40a)](0x2499+0x449*-0x9+0x1f8,0x67d+0x797+0x2*-0x6ce),'host':_0x40c4d2,'frameRole':_0x202974,'uwmk':!!_0x3d761f,'il2CppContext':!!_0x2c9152,'typeCount':_0x56eac8?Object[_0x5546cb(0x53f)](_0x56eac8)['lengt'+'h']:null,'arm':_0x2c5c4d,'assemblies':_0x101ba0,'hooksTotal':_0x5e85b2[_0x5546cb(0x62e)+'h'],'hooksApplied':_0xdc8fb7['PtaHE'](_0x2cb82f),'hooksResolved':_0xdc8fb7[_0x5546cb(0x3ed)](_0x42f935),'hooksRegisteredAtArm':_0x2c5c4d[_0x5546cb(0x5a4)+'Regis'+_0x5546cb(0x3ca)]||-0x9ef+-0xb7a*-0x3+0x187f*-0x1,'hookErrors':_0x41d898[_0x5546cb(0x40a)](0x62f*0x5+-0x1*-0x18a3+-0x378e,-0x196f+0xe2*-0x25+-0x3a21*-0x1),'instances':_0x482032,'classNames':_0x466266,'instancesReplaced':_0x36ab2d,'hookFireProof':_0x2ac11a,'survey':_0x28d57f,'actkKeys':_0x31e210,'surveyRows':Object[_0x5546cb(0x53f)](_0x28d57f)['reduc'+'e'](function(_0x1b30b2,_0x3baeb3){var _0x4fbad2=_0x5546cb;return _0x3e7f1b['FhJVu'](_0x1b30b2,_0x28d57f[_0x3baeb3][_0x4fbad2(0x62e)+'h']);},0x64f+0x23f0+0x2d1*-0xf),'reads':{'ok':_0x51e93c['ok'],'failed':_0x51e93c[_0x5546cb(0x5e7)+'d'],'lastError':_0x51e93c[_0x5546cb(0x1dc)+_0x5546cb(0x2ed)],'source':_0x51e93c['sourc'+'e']},'identity':_0x1ee1ed(),'globals':_0x514d45(),'wasmMemory':{'captured':!!_0x1653d9,'atMs':_0x6aacbe,'bytes':(function(){var _0x2202a9=_0x5546cb;try{return _0x1653d9&&_0x1653d9['buffe'+'r']?_0x1653d9[_0x2202a9(0x38d)+'r'][_0x2202a9(0x34b)+_0x2202a9(0x34a)]:0x253e+0x1*-0xc5f+-0x18df;}catch(_0x16166e){return 0x1115+-0xf0a+-0x20b*0x1;}}()),'exportKeys':_0x2c3c36},'diff':_0x279057['slice'](-0x13b+-0x4f*0x6b+0x2240,-0x4c*0x18+0x37d+0x3cb),'speed':{'on':_0xbe5912['on'],'factor':_0xbe5912[_0x5546cb(0x271)+'r'],'writes':_0x47422c,'scaled':_0x70ba98['slice'](-0x5*-0x13d+0x1fb6*-0x1+-0x2f*-0x8b,0xec*-0x12+-0x1f0*0x2+0x1488),'skipped':_0x4c06b7['slice'](-0x1018+0x4e*0xf+-0x19*-0x76,-0x23*-0xb9+0x11*0x216+-0x3cb1*0x1)},'esp':_0x167f57(),'uwmkLog':_0x57ba35[_0x5546cb(0x40a)](0x15d+-0x355+0x3*0xa8,-0x1c40+-0x5a*-0x68+-0x83c),'warnings':[]};if(_0x1dd05d)_0x352a19['warni'+_0x5546cb(0x3e1)]['push'](_0xdc8fb7['qkvPw'](_0xdc8fb7[_0x5546cb(0x58d)],_0x1dd05d));if(_0x2c5c4d[_0x5546cb(0x4e1)])_0x352a19[_0x5546cb(0x450)+_0x5546cb(0x3e1)]['push'](_0xdc8fb7[_0x5546cb(0x24e)](_0xdc8fb7[_0x5546cb(0x49c)],_0x2c5c4d[_0x5546cb(0x4e1)]));_0xdc8fb7['kBhHx'](_0x352a19[_0x5546cb(0x43c)+_0x5546cb(0x634)],-0x3*-0xc85+0xd*-0x7f+0xb5*-0x2c)&&_0xdc8fb7['yUlqY'](Object[_0x5546cb(0x53f)](_0x352a19['insta'+_0x5546cb(0x44e)])[_0x5546cb(0x62e)+'h'],0xb66+0x253+-0xdb9*0x1)&&_0x352a19['warni'+'ngs'][_0x5546cb(0x5cf)](_0xdc8fb7['nrrKN']+Object[_0x5546cb(0x53f)](_0x352a19['insta'+_0x5546cb(0x44e)])[_0x5546cb(0x62e)+'h']+('\x20obje'+'ct(s)'+'\x20but\x20'+'read\x20'+_0x5546cb(0x3df)+_0x5546cb(0x37e))+(_0x51e93c[_0x5546cb(0x1dc)+_0x5546cb(0x2ed)]?_0xdc8fb7[_0x5546cb(0x49b)](_0x5546cb(0x35f)+_0x5546cb(0x13d),_0x51e93c['lastE'+_0x5546cb(0x2ed)]):_0xdc8fb7[_0x5546cb(0x350)]));_0x352a19['ident'+'ity']&&_0x352a19['ident'+_0x5546cb(0x3e5)]['tagMa'+_0x5546cb(0x4dd)]===![]&&_0x352a19['warni'+_0x5546cb(0x3e1)][_0x5546cb(0x5cf)](_0xdc8fb7[_0x5546cb(0x281)]('ANOTH'+_0x5546cb(0x2b1)+_0x5546cb(0x654)+_0x5546cb(0x41e)+'OK\x20OV'+'ER\x20wi'+'ndow.'+_0x5546cb(0x452)+_0x5546cb(0x621)+'dkit.'+'\x20The\x20'+_0x5546cb(0x51a)+_0x5546cb(0x2d1)+_0x5546cb(0x1fa)+_0x5546cb(0x20b)+'\x20'+(_0x5546cb(0x121)+'ced\x20b'+_0x5546cb(0x2b3)+_0x5546cb(0x1cd)+'ent\x20i'+'nstan'+_0x5546cb(0x663)+_0x5546cb(0x58e)+'are\x20a'+_0x5546cb(0x59f)+_0x5546cb(0x3ee)+_0x5546cb(0x47e)+'\x20obje'+'ct\x20fo'+'r\x20')+('the\x20g'+'ame\x20w'+'hile\x20'+'the\x20o'+_0x5546cb(0x521)+'lding'+'\x20it\x20i'+_0x5546cb(0x3bb)+_0x5546cb(0x1ce)+'.\x20Dis'+'able\x20'+_0x5546cb(0x138)+'\x20othe'+'r\x20'),_0xdc8fb7['GGLQq']));_0x352a19['ident'+_0x5546cb(0x3e5)]&&_0xdc8fb7[_0x5546cb(0x484)](_0x352a19[_0x5546cb(0x666)+_0x5546cb(0x3e5)][_0x5546cb(0x4e9)+'nRunt'+'imeIs'+_0x5546cb(0x5c5)+'ted'],![])&&_0x352a19['warni'+_0x5546cb(0x3e1)][_0x5546cb(0x5cf)]('plugi'+'n._ru'+'ntime'+_0x5546cb(0x1ed)+'ot\x20wi'+'ndow.'+'Unity'+'WebMo'+_0x5546cb(0x31b)+'Runti'+'me\x20-\x20'+'the\x20p'+_0x5546cb(0x25b)+_0x5546cb(0x566)+_0x5546cb(0x644)+'\x20'+(_0x5546cb(0x5dd)+'st\x20a\x20'+_0x5546cb(0x50a)+'rent\x20'+_0x5546cb(0x51a)+_0x5546cb(0x36d)+_0x5546cb(0x377)+'e\x20tha'+'n\x20the'+_0x5546cb(0x5c0)+_0x5546cb(0x1e4)+_0x5546cb(0x148)+'oses.'));if(_0x352a19['esp']&&_0x352a19[_0x5546cb(0x1b3)][_0x5546cb(0x11b)])_0x352a19[_0x5546cb(0x450)+'ngs'][_0x5546cb(0x5cf)]('ESP:\x20'+_0x352a19[_0x5546cb(0x1b3)][_0x5546cb(0x11b)]);if(_0x352a19[_0x5546cb(0x2b5)+'ls']&&!_0x352a19[_0x5546cb(0x2b5)+'ls']['heapU'+'8']){var _0x3b0c00='';_0x352a19[_0x5546cb(0x673)+_0x5546cb(0x448)+_0x5546cb(0x5bc)]&&(_0x3b0c00=_0xdc8fb7['iFhfJ'](_0xdc8fb7[_0x5546cb(0x42d)](_0xdc8fb7[_0x5546cb(0x4ee)](_0x5546cb(0x5e0)+_0x5546cb(0x572)+'red\x20a'+'t\x20',_0x352a19[_0x5546cb(0x673)+_0x5546cb(0x448)+'oof']['atMs'])+_0xdc8fb7[_0x5546cb(0x393)]+_0x352a19['hookF'+_0x5546cb(0x448)+_0x5546cb(0x5bc)][_0x5546cb(0x68d)+_0x5546cb(0x2c8)+'nc'],_0xdc8fb7[_0x5546cb(0x2d9)]),_0x352a19['hookF'+'irePr'+_0x5546cb(0x5bc)]['resol'+_0x5546cb(0x4ce)+'eAtFi'+'re'])+('\x20(sou'+_0x5546cb(0x2ef))+(_0x352a19['hookF'+'irePr'+_0x5546cb(0x5bc)]['gameS'+_0x5546cb(0x2a4)+_0x5546cb(0x640)+'e']||_0xdc8fb7['Ygqol'])+_0xdc8fb7['EFBUn']),_0x352a19['warni'+_0x5546cb(0x3e1)][_0x5546cb(0x5cf)](_0xdc8fb7[_0x5546cb(0x32d)](_0xdc8fb7[_0x5546cb(0x626)]('Unity'+_0x5546cb(0x59c)+'ance\x20'+_0x5546cb(0x4c3)+_0x5546cb(0x5ca)+_0x5546cb(0x5c3)+'t\x20(so'+_0x5546cb(0x1ab)+'\x20'+(_0x352a19['globa'+'ls'][_0x5546cb(0x47f)+'ource']||_0x5546cb(0x3be)),_0xdc8fb7['yoeCP']),'Heap\x20'+_0x5546cb(0x66a)+'\x20stay'+_0x5546cb(0x467)+_0x5546cb(0x397)+_0x5546cb(0x559)+'a\x20gam'+_0x5546cb(0x19e)+'ect\x20w'+_0x5546cb(0x2be)+_0x5546cb(0x22c)+_0x5546cb(0x65b)+'U8\x20is'+'\x20reac'+_0x5546cb(0x601)+'.')+_0x3b0c00);}(_0x352a19['globa'+'ls']&&!_0x352a19[_0x5546cb(0x2b5)+'ls']['value'+_0x5546cb(0x29c)+'er']||_0xdc8fb7['SNFBD'](_0x352a19[_0x5546cb(0x2b5)+'ls'][_0x5546cb(0x368)+'Wrapp'+'er'],_0xdc8fb7[_0x5546cb(0x35e)]))&&_0x352a19[_0x5546cb(0x450)+'ngs']['push'](_0xdc8fb7[_0x5546cb(0x335)]);if(_0x352a19[_0x5546cb(0x5a4)+_0x5546cb(0x457)]>-0x10d2+0x4*0x3+0x2*0x863&&_0xdc8fb7['fvhfl'](_0x352a19[_0x5546cb(0x5a4)+_0x5546cb(0x555)+'ed'],0x2*-0x334+-0x2*-0x110d+-0x1bb2)&&_0x56eac8){if('dmyeE'===_0x5546cb(0x1a6)){if(_0x352a19[_0x5546cb(0x5a4)+'Resol'+_0x5546cb(0x320)]===0x163a+-0xdf6+-0x844){if(_0xdc8fb7[_0x5546cb(0x4fa)](_0x5546cb(0x292),'feZji'))_0x352a19['warni'+_0x5546cb(0x3e1)]['push'](_0xdc8fb7['edYMT'](_0xdc8fb7[_0x5546cb(0x2f1)](_0xdc8fb7[_0x5546cb(0x1b1)](_0x5546cb(0x68c),_0x352a19[_0x5546cb(0x5a4)+_0x5546cb(0x457)])+('\x20hook'+_0x5546cb(0x4ac)+'e\x20eve'+_0x5546cb(0x5f2)+'N\x20by\x20'+_0x5546cb(0x164)+'\x20The\x20'+'apply'+_0x5546cb(0x2fa)+'\x20')+_0xdc8fb7['lDdUQ'],_0xdc8fb7[_0x5546cb(0x5fd)])+('Regis'+'tered'+'\x20')+_0x352a19[_0x5546cb(0x5a4)+'Regis'+_0x5546cb(0x3ca)+_0x5546cb(0x536)],_0xdc8fb7[_0x5546cb(0x4b1)]));else try{return _0xdc8fb7[_0x5546cb(0x24c)](_0x352bdc[_0x5546cb(0x599)+'em'](_0x30e524),'1');}catch(_0x1b49e9){return![];}}else _0x352a19[_0x5546cb(0x450)+_0x5546cb(0x3e1)]['push'](_0xdc8fb7[_0x5546cb(0x333)](_0xdc8fb7['fHteK'](_0xdc8fb7['fHteK'](_0x5546cb(0x486)+_0x5546cb(0x4b8)+'ved\x20',_0x352a19['hooks'+_0x5546cb(0x617)+_0x5546cb(0x320)])+_0x5546cb(0x610),_0x352a19['hooks'+_0x5546cb(0x457)])+(_0x5546cb(0x1f0)+'(s)\x20t'+_0x5546cb(0x22b)+_0x5546cb(0x3a7)+_0x5546cb(0x35a)+'\x20but\x20'+_0x5546cb(0x268)+'ed\x20no'+_0x5546cb(0x609)+'he\x20si'+'gnatu'+'re\x20'),_0xdc8fb7[_0x5546cb(0x2cc)]));}else _0x4240ab[_0x5546cb(0x469)]=![];}return _0x352a19[_0x5546cb(0x5a4)+'Appli'+'ed']>-0xfe*-0x27+0x85d*0x3+-0x3fc9&&!_0x352a19['insta'+'nces']['FPSco'+_0x5546cb(0x17f)+'ler']&&_0x352a19[_0x5546cb(0x450)+_0x5546cb(0x3e1)]['push'](_0xdc8fb7[_0x5546cb(0x455)]+_0xdc8fb7[_0x5546cb(0x52e)]),_0x352a19[_0x5546cb(0x3c7)+'ncesR'+_0x5546cb(0x13a)+'ed'][_0x5546cb(0x62e)+'h']&&_0x352a19['warni'+_0x5546cb(0x3e1)][_0x5546cb(0x5cf)](_0xdc8fb7[_0x5546cb(0x1b1)](_0x5546cb(0x388)+_0x5546cb(0x55c)+'nce\x20f'+_0x5546cb(0x3d5)+_0x5546cb(0x463)+_0x5546cb(0x394)+'espaw'+'n?):\x20',_0x352a19[_0x5546cb(0x3c7)+'ncesR'+'eplac'+'ed']['join'](',\x20'))),_0x352a19;}function _0x49f1f4(_0xa26f78){var _0x79e492=_0x44d48d,_0x163994={'kIxmg':function(_0x303de1,_0x1ba653){var _0x3f329d=_0x40b5;return _0xdc8fb7[_0x3f329d(0x598)](_0x303de1,_0x1ba653);},'EopmL':function(_0x21d3cb,_0x4f46fb){return _0x21d3cb(_0x4f46fb);}};console['log'](_0xdc8fb7[_0x79e492(0x4b7)],_0x79e492(0x41f)+':'+_0x32ae10+_0xdc8fb7[_0x79e492(0x5b6)],_0xa26f78),console['log'](_0xdc8fb7['ODoSv'](_0x536e67,'\x0a')+JSON['strin'+'gify'](_0xa26f78,null,-0x85d*-0x1+0x6b*-0x14+0x0)+'\x0a'+_0x27e21a);try{_0xdc8fb7[_0x79e492(0x5f9)](_0x79e492(0x3cd),'TTetj')?_0x1f7e3b(_0xa26f78):_0x2722f0[_0x79e492(0x5cf)](_0x163994[_0x79e492(0x2f5)](_0x163994[_0x79e492(0x2f5)](_0x473fe4[_0x79e492(0x5cd)],':\x20'),_0x163994[_0x79e492(0x58b)](_0x4950e8,_0x33ace7&&_0x54e80f['messa'+'ge']||_0x3be3c5)[_0x79e492(0x40a)](-0x1*-0x17dd+0x1*-0x48+0x1795*-0x1,-0x24e3*-0x1+-0x8d3+-0x1b70)));}catch(_0x547812){}_0x18ed3e(_0xdc8fb7['wnCtv'],{'report':_0xa26f78});}function _0x15ae73(){var _0x4edad1=_0x44d48d;try{return _0xdc8fb7[_0x4edad1(0x5df)]('OKLcU',_0xdc8fb7['nnuAn'])?_0x52b287[_0x4edad1(0x599)+'em'](_0x1f952d)==='1':_0x478a2f();}catch(_0x15990e){return{'version':_0x346a98,'when':new Date()[_0x4edad1(0x690)+'Strin'+'g'](),'elapsedMs':_0xdc8fb7['lSGvL'](Date['now'](),_0x4f0af9),'host':_0x40c4d2,'uwmk':!!(window[_0x4edad1(0x452)+_0x4edad1(0x621)+_0x4edad1(0x18b)]&&window[_0x4edad1(0x452)+_0x4edad1(0x621)+_0x4edad1(0x18b)][_0x4edad1(0x51a)+'me']),'il2CppContext':![],'arm':_0x2c5c4d,'hooksTotal':_0x5e85b2[_0x4edad1(0x62e)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':String(_0x15990e&&_0x15990e['messa'+'ge']||_0x15990e)};}}function _0x5b8bb8(){var _0x187d8a=_0x44d48d,_0x132bcc={'pInoF':_0xdc8fb7['cJjcO'],'WCaCJ':function(_0x3f0d40){return _0x3f0d40();},'XMytB':function(_0x3093cb,_0x9c633c){return _0x3093cb(_0x9c633c);},'YuvDl':function(_0xd9187c,_0x1dec05){var _0x13efc2=_0x40b5;return _0xdc8fb7[_0x13efc2(0x683)](_0xd9187c,_0x1dec05);},'FVagR':function(_0x2a030e,_0x233e10){var _0x7f76c6=_0x40b5;return _0xdc8fb7[_0x7f76c6(0x668)](_0x2a030e,_0x233e10);},'PDfuV':function(_0x43ef89,_0x553931,_0x3fa7b4){return _0x43ef89(_0x553931,_0x3fa7b4);},'IiLUh':_0x187d8a(0x511)+'t','VLvFP':function(_0x2b1883,_0x1151d1){return _0x2b1883!==_0x1151d1;},'lyyot':_0xdc8fb7[_0x187d8a(0x62b)],'DxrUC':function(_0x215759,_0xef3353){return _0x215759===_0xef3353;},'Lvexq':'numbe'+'r'};if(_0xdc8fb7[_0x187d8a(0x489)]===_0xdc8fb7[_0x187d8a(0x489)]){var _0x44e7ce=0x126b+0x26d6+0x1*-0x3941;_0x49f1f4(_0xdc8fb7[_0x187d8a(0x361)](_0x15ae73)),function _0x442675(){var _0x3e57e1=_0x187d8a;if(!_0x5e85b2['lengt'+'h'])try{if(_0x3e57e1(0x296)!==_0x132bcc[_0x3e57e1(0x479)])_0x132bcc[_0x3e57e1(0x427)](_0x292abb);else return _0x17f84b[_0x3e57e1(0x5cd)]===_0x18dc06;}catch(_0x41dd18){}_0x44e7ce++,_0x132bcc[_0x3e57e1(0x3dc)](_0x49f1f4,_0x15ae73());if(!_0x5e85b2['lengt'+'h']&&_0x132bcc[_0x3e57e1(0x311)](_0x44e7ce,-0x1b61+-0x2423*0x1+0x40b0))setTimeout(_0x442675,-0x2697+0x1af3+-0x14*-0xf9);else{if(!Object[_0x3e57e1(0x53f)](_0x329eaa)[_0x3e57e1(0x62e)+'h']&&_0x132bcc[_0x3e57e1(0x5d3)](_0x44e7ce,0x2*-0x1b9+0x1950+-0x3*0x6e6))_0x132bcc[_0x3e57e1(0x2c2)](setTimeout,_0x442675,0x1c36+-0x49f*0x1+-0xfc7);else _0x132bcc[_0x3e57e1(0x2c2)](setTimeout,_0x442675,0x1*0xb01+-0x10d7+0xa86);}}();}else{var _0x5a1b67=('6|0|7'+_0x187d8a(0x698)+'5|3|1'+'|2')[_0x187d8a(0x41b)]('|'),_0x206c1b=0x107d+0x22a8+-0x3325;while(!![]){switch(_0x5a1b67[_0x206c1b++]){case'0':if(_0x56c55b!==_0x187d8a(0x4e6)+'hot')return;continue;case'1':_0x30d6f2=_0x425c8b;continue;case'2':_0x1e997c(_0x132bcc[_0x187d8a(0x477)],{'report':_0x19d8ee()});continue;case'3':for(var _0x51417e in _0x425c8b){var _0x23ff3b=_0x200257[_0x51417e],_0xd6945e=_0x425c8b[_0x51417e];if(_0x132bcc[_0x187d8a(0x4c5)](_0x23ff3b,_0xd6945e))_0x549e1a['push'](_0x51417e+':\x20'+_0x23ff3b+'\x20->\x20'+_0xd6945e);}continue;case'4':var _0x425c8b=_0xdb67b(_0x19ef27);continue;case'5':_0x329b91=[];continue;case'6':if(_0x5a20f3===_0x187d8a(0x616)){_0xff7c6(_0x5d0f9b&&typeof _0x4ec641['on']===_0x132bcc[_0x187d8a(0x2ee)]?_0x58d6e0['on']:_0x22a2ca['on'],_0x521ffd&&_0x132bcc[_0x187d8a(0x672)](typeof _0x499e6c[_0x187d8a(0x271)+'r'],_0x132bcc[_0x187d8a(0x4b4)])?_0xb04fbe['facto'+'r']:_0x215913[_0x187d8a(0x271)+'r']);return;}continue;case'7':var _0x19ef27=_0x1aa951();continue;case'8':if(!_0x2e1a76){_0x20ca42=_0x425c8b,_0x2faba1=[],_0x5edb18(_0x187d8a(0x511)+'t',{'report':_0x28be2c()});return;}continue;}break;}}}if(document[_0x44d48d(0x2b9)])_0x5b8bb8();else document[_0x44d48d(0x3c2)+'entLi'+_0x44d48d(0x2d5)+'r'](_0x44d48d(0x2e2)+_0x44d48d(0x5ae)+'Loade'+'d',_0x5b8bb8,{'once':!![]});if(document['body'])try{_0x5109be();}catch(_0x512302){}else document['addEv'+_0x44d48d(0x434)+'stene'+'r'](_0x44d48d(0x2e2)+_0x44d48d(0x5ae)+_0x44d48d(0x202)+'d',function(){var _0x61dd8f=_0x44d48d;if(_0xdc8fb7['jvDHf']('Olokz',_0x61dd8f(0x665)))try{_0xdc8fb7[_0x61dd8f(0x1cf)](_0x5109be);}catch(_0x5a1d60){}else{_0xbe392e['log'](_0x61dd8f(0x188)+_0x61dd8f(0x3d6)+_0x61dd8f(0x575)+'lWarz'+_0x61dd8f(0x152)+'rt',_0xdc8fb7['WVCFv'](_0xdc8fb7[_0x61dd8f(0x255)],_0x76211c)+_0xdc8fb7[_0x61dd8f(0x5b6)],_0x1dde95),_0xbf56c6['log'](_0xdc8fb7['IZwZg'](_0x41554c,'\x0a')+_0x21e4e8['strin'+_0x61dd8f(0x4ba)](_0x1a43b0,null,0x4c7+-0x32*-0xc1+0xc*-0x38a)+'\x0a'+_0x26f952);try{_0x598b5c(_0x161508);}catch(_0x588a74){}_0x49df33(_0x61dd8f(0x511)+'t',{'report':_0x1ab736});}},{'once':!![]});})()));function _0x40b5(_0x23ebdd,_0x5cd616){_0x23ebdd=_0x23ebdd-(0xe9+-0x3d2*0xa+0x2662*0x1);var _0x2ad1a0=_0x1f6d();var _0x17e715=_0x2ad1a0[_0x23ebdd];if(_0x40b5['kCmYDP']===undefined){var _0x264992=function(_0xd64bfd){var _0xab9b60='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x523cfb='',_0x99525d='';for(var _0x1cdbad=-0xff*-0x21+-0xf7c+-0x1*0x1163,_0x59f98f,_0x28a662,_0x470d5d=-0x2510+-0x853*0x4+-0x9e*-0x72;_0x28a662=_0xd64bfd['charAt'](_0x470d5d++);~_0x28a662&&(_0x59f98f=_0x1cdbad%(-0x1d9*-0x15+0x2318+-0x49e1)?_0x59f98f*(0x1*0x7b1+0x1545+-0x1cb6)+_0x28a662:_0x28a662,_0x1cdbad++%(-0x82f+0x1*-0x1cf1+0x2524))?_0x523cfb+=String['fromCharCode'](-0x1*-0x1cae+-0x409*-0x4+-0x2bd3*0x1&_0x59f98f>>(-(-0x6f4+0x2041*-0x1+0x1*0x2737)*_0x1cdbad&0x1069+-0x2058+0xff5)):0xd54*0x1+-0x704+-0x650){_0x28a662=_0xab9b60['indexOf'](_0x28a662);}for(var _0xa6fa2f=-0x209*0xa+-0x1dc0+0x321a,_0x2dc92d=_0x523cfb['length'];_0xa6fa2f<_0x2dc92d;_0xa6fa2f++){_0x99525d+='%'+('00'+_0x523cfb['charCodeAt'](_0xa6fa2f)['toString'](-0x13c+0xb60+-0xa14))['slice'](-(0x6fb*-0x5+-0x1*0x989+0x2c72));}return decodeURIComponent(_0x99525d);};_0x40b5['ldDGBJ']=_0x264992,_0x40b5['qFQnSt']={},_0x40b5['kCmYDP']=!![];}var _0xed2740=_0x2ad1a0[0x2*0xb33+-0xd*0x145+-0x5e5],_0x28692b=_0x23ebdd+_0xed2740,_0x96967=_0x40b5['qFQnSt'][_0x28692b];return!_0x96967?(_0x17e715=_0x40b5['ldDGBJ'](_0x17e715),_0x40b5['qFQnSt'][_0x28692b]=_0x17e715):_0x17e715=_0x96967,_0x17e715;}function _0x1f6d(){var _0x373f93=['nJCXmMHrtgvnEG','ywLSzwq','BI1PDgu','CfzzDLu','B2f0mZi','B2SGzMK','q2Twu0W','EgjpsuC','ifnRAwW','EtPMBgu','n2e2ntG','CI5QCYa','ywL0Aw4','zw5Jzsa','lJKPo2i','zYbPBNq','BNrLCJS','sfrnta','zwf0zva','zgvyENe','yNL0zu8','oJeYmha','tNvvz2G','whjhzK0','wufeq0C','zJu7yM8','mtj6su11Axq','BIb0Agu','D3jHCdS','B3PYEKO','rw9WBuW','Bgu9iMq','s3Lmzfu','BYb3zsa','zwvKzwq','Dg9YqwW','zhvSzq','CM93CW','Aw50zxi','Dw5PDhK','DgfIBgu','Aw5MBW','Ag90','v0v4Ave','z2v0sxq','B24GDgG','CgnZD2S','igLUC3q','ieaG','u29huKG','C2TPBMC','oJCWmdS','nJq3o2q','Eev6BfC','BwvcBxK','Ag9VA3m','C2L6zq','r2fTzsG','phnWyw4','CM91BMq','mteYotyYntjiELj3wNC','i2zMnMu','Afzwy2W','Ag9VAW','CMq7zM8','BNrLBNq','zciGC3q','vhrRC0e','uenhD2q','ru5crfe','BNPAv1C','ignVCgK','ihn0yxK','qwTWCMC','igzHA2u','AwnLihC','ndmSmtC','AZPICMu','Ahq6nZa','B29M','ue53CNe','i2jKytK','zgLUzZO','igDSB2i','zsXdB24','yxK6zMW','zwqGEwu','B2XVCJO','rxHWB3i','BMnLv3i','ruzcvw4','AtmY','DM9Pu0C','zxnVBhy','B1f5rxm','vwLmCxi','DhLWzq','yNKGBg8','ChvZAa','nZCSlJu','4OcuigzYyq','DgLHDgu','rLzHz1i','ywLSywi','DhLxzwi','icbOB28','BgvKoIa','zMLSDgu','A3neB3G','yMLUzgK','lwLUzgu','ihnVigu','ywDHAw4','B25VC3a','zNzOzMW','ieeGAg8','zYbMywK','ExLmweS','lYbQDw0','D2zJz24','CMuGAwC','ChG7y3u','zMfPBgu','wwf0C0O','DMuGB2i','ys1ZDW','Dxm6n3a','Bgv4lxC','s2HACgG','oJyYDMG','BgX3yxi','oImXnta','mtj8ohW','BIbtruu','seH2CuC','zMy8l2i','iNn3mI0','vgHLiha','ywDLCG','C2v0sw4','vMnAALe','mtb8nNW','Evbry3q','AwDODdO','CeDLsvK','mtbqtKv4EhG','B25Nig8','zwn0Aw8','AgfIBgu','4Ocuihr3BW','yLPwEe4','Dg9gAxG','AguGCMu','zenOAwW','lwHPzgq','tfLWwuK','BMuUifq','ywLUAw4','CNnJCMK','AxmGBwK','igjVDgG','zYbZDxm','uhDOEMW','ig9Mia','igHLyxa','zwqGysa','teLwrsa','vKuGDG','y3L1swO','C3bLzwq','uMvZB2W','B2jMrG','CgfKrw4','C3nSDKe','Aw1Lsxm','ihbHz2u','yw5ZCge','EdTMBgu','Ag9VA1a','BhDHCNO','v2vItw8','z2v0vwK','DgvK','ie9IC2m','lxrVz2C','BMTTuNm','A3mUBgu','ExrLCW','yxjT','B2TZihi','u2Pls2O','ihvPlw0','ihbHBMu','BgvUz3q','mJu1lde','uuPhuuq','B21Tyw4','wNL5CuG','igfWCgW','EvjVD3m','lwzPCNm','DgGGB3i','z2LUigC','iJ5dB3a','zZOXmha','C3mGmhG','yxbWBhK','x2DHBwu','icbTzw0','ywX1zt0','AgLKpq','qxrgAxi','o2zSzxG','A2v5qxq','zYbxzwi','yNvPBhq','oYi+','DgHPBMC','oJeXChG','Dgf0Dxm','zxG7zMW','qLfTz2G','DgHLBG','AvjJC2q','ihnRAwW','DgG6mJK','ig5Vigu','BhzVtNe','A2L0lxu','ys1Hpsi','sfveigq','tuSGq08','ywrKCMu','BNrezwy','qNzWy3G','qM5mAey','ldi5lc4','vgToseO','lKHfqva','ihnPBMm','EtPUB24','CIb5B3u','yw5Jzsa','zM9Sza','AgLIs0i','x19ZywS','y2uSihm','BcWk','t2XVA3O','AwrLBNq','BM90igK','D1zcr3m','zuf0rMK','CMvHzhm','icaHia','qK9Msgq','pgj1Dhq','wLjZrxa','ig9MzG','BM93','lsbvBMK','rhHYvum','Ag9VA0y','Bw9YEvq','Dxm6nNa','AfDgC3G','CMfWoYi','CMv0Dxi','yMfZzq','z2uUrgu','t0Xzzu0','uLb2teW','AfLLqvu','CMrLCJO','C1jWqw4','o2jVCMq','ywnRz3i','vwvqBMe','sLHmtxy','zcbKAwe','BwvTyMu','q1rtuNa','yMX5lum','y2HLy2S','yMfmq0q','DerHDge','EwXLpsi','mcbVzIa','B3jPz2K','qxbcDhC','AKfJtMm','Dg9ju08','DgHLigW','rgDwDvq','zxHLy0m','BwuUx2C','zxG7z2e','CNvUDgK','Axb0ige','Fdr8ohW','z2fTzq','ignHChq','nduPoW','ze9xqva','BM90zq','sevbufu','DciGC3q','vNzvuw4','v0jHzK0','zMzZzxq','CMvWBge','vK5QtNm','mdTMB24','EKvtwMi','Aw5Qzwm','q1HQwha','yxmGBM8','y3jLyxq','pt09u0e','C3CYlwy','zgvYoJe','whb3u28','yM9Yzgu','BNrPBwu','BMfTzq','yMPquuu','yujTtfO','BK1HBMe','qwXMruG','mtr8mW','v1zdrNy','yMX5lMK','svDZwNi','zxzLCNK','kZb4','zxbSywm','B1bnvvy','BMD0AcW','BJOG','mtqZlde','CgvKigi','zxrVBG','nxWXmxW','zvbSDwC','u1bjs2G','CgLUzYa','sxjtr3K','zdP0CMe','icaGDMe','DYbLEha','v3PxDhG','Aw50iIa','D2fSA2K','CgfYzw4','zxa9iJa','vgHLigG','vgfTCgu','CYbHBMq','kdi1nsW','ihjLCg8','C2v0','sg9VA3m','yw1PBMC','qNLKzM4','zgLZCgW','zgf0ys0','DJiTy3m','C3qGysa','DMuGBwe','zNvUy3q','msiGDMe','DLHsB0i','igfYztO','z2LUlwW','Bg9N','uvbHvMS','A2v5','vvDnsY4','B3bLBG','DxjJzq','C0D6wgC','ig9Uihq','BMqU','Dxr0B24','psjZDZi','wMjkqu8','nhb4idK','wLrhEfu','shzHsxu','ic0Gy2e','iMzVBgq','ywDLCIW','yxjTAw4','AM9PBG','mtbltu5vrNC','zgL2','EwvZ','z2Dpyu0','vvPsv3i','A2v5vxm','CJOXChG','AguGD3i','icaGia','khrOAxm','BNrYB2W','igzVCIa','BwfYA3m','CMfUz2u','lZeUndu','D0fuCLe','BwfUEq','we9VDfG','A3rmCK0','jwnBC2e','B3jKzxi','Cg9PBNq','zgTPDa','DfHrvgK','y2fSlMq','BNq4','r0rAtgu','uNvUihq','ywXSoMK','qNLjza','DxnPyMW','iJ54pc8','wvDkrK8','mNb4o2i','q2zNse0','Aw5N','iJ5ZywS','yxv2qxq','zwXHChm','rJKGDhC','AcbPCYa','zsbVyMO','Dg9W','qM90ige','zxPLvhC','BgvMDdO','zwn0zwq','zxmGB2y','Ec13Awq','zg15zuu','Dw5Kzwy','BJWVyNu','ohb4o2i','nZCSlJq','DxjJztO','ihzPysa','wfPICuC','EgXrs00','nZH2AdS','zgf0yxm','z2Hmt0q','D2LUzg8','zxnW','ywSTD28','lL9Nyw0','igTPBMq','z2v0rwW','mhb4idu','qM1cENu','C2v0rMW','DgnOlG','x19tquS','iJeIig0','C3bHy2u','mNb4o3O','B25Jzsa','y25Uz2q','zwXVywq','sgvHCca','BhvTBJS','vMXouLG','BNrLEhq','nZq4mJK','lc40nsK','iefdveK','nYWUnsK','yxGTAgu','Aw5KB3C','AwzMzxi','AgfUzwq','CeD6Dgq','idaGyxu','BNH0vw4','ywn0B3i','B206mxa','rMzSA0e','zK9vAfi','Bez1BMm','ys1ZDY0','CMfWoNC','CKXPC3q','iJ5tCgu','rLbty28','BgfZDeu','AgfZtw8','AhjLzG','B2fKzwq','igfUzca','ALPLCee','zwqGB2y','wfPgvKm','ywWGBM8','mxb4idy','weD2wvi','i3n3mI0','Dg9tDhi','ys9vv00','CI5KBgW','zgrPBMC','ru5ept0','igLZig4','zsGPlMu','BgLKihi','igHVB2S','EsbMywK','C3rYAw4','s3ngtMm','vtGGAxm','x0DHBwu','sw5ZDge','DgHLiha','ywqU','wLfZyLO','igfYBwu','yw55ihC','CgvYBw8','Fdr8mxW','zxi7zM8','tfjHELi','DY5vBMK','BwvHBG','tg9Hzgu','zgf0zsG','icbVyMO','DgG6mZq','Aw1L','lJe4ktS','Dgv4Dge','DcaOC28','B2XLig4','zcb3yxm','DhrVBJ4','i2zMzdq','Bg9YoIm','C3CYlwG','BgfIzwW','zsbUB3q','ywDLigG','CNnIrvG','BwLUkdu','zJmY','CvnotfO','C28GAg8','tND0ufa','nNWZFdC','l3nWyw4','t2zMC2u','BwuOkq','ywrKAw4','ywrPDxm','o2fSAwC','i3nHA3u','CgfUpG','BMC6nha','lJuIihy','B2jMsq','EhL6','BIG1mNy','y3nZvgu','CI1Yywq','mdaWo3u','CNnVCJO','BYbHihq','B2r1Bgu','otLWEdS','yuj5D0C','y29WEq','v1jPtNm','CMvKihK','BM5mC2q','tLnjreu','BvPTzK4','mJbWEcK','y2u7','tvjztMO','zgvIDwC','zxiTCMe','uuH1DLG','B29RwLO','AxvZoJK','CKnVBg8','BLj1BNq','zxiGzMK','qM90Aca','wK9cswe','CMfUihK','yxjKlxi','B2Tzz2S','yw5KigG','rw5LBxK','ihDOAwW','swPHsg8','zxG6mJe','nhb4ide','uKPdA1e','Cg91shy','BNnPC3q','ww5ruLe','AguGAg8','igfYzsa','v19F','mYWXnZC','ihnPz24','y2DYv0G','r3zABLe','BIbPzNi','BfnKC0O','zhvYAw4','C3bHCMu','qMPQBKS','BhvNAw4','AgvYAxq','yMfYzsa','ihnRAxa','yMfxtwK','pgrPDIa','ExbLCW','mxWZFdq','BhbsCfq','AgvHza','yw1LlGO','lxjHzgK','zwrnCW','yxbWBgK','ywHwzfm','lxDYyxa','BYb0Agu','B24GAwq','DdmY','iIbTAw4','igLUlwy','oJrWEca','zMfJDg8','iZaWmdS','zxjHDgu','BNzOrue','DgvYo2y','vgjKy1e','zwnmAwy','v0fswI0','BwvZC2e','rMH6zvm','CxvLCNK','mxb4ihm','DxjH','zIb0Agu','s3HVCwK','tw9KA2K','zKH0zuS','CMvKige','B3j0lGO','sfjmywq','z2LbALO','Chr1CMu','i2zMyJm','Esb0Exa','zxi7Dxm','C2v0vwK','ig5Via','Bg9Hzhm','AwWYq3a','B2zMC2u','suH4s1G','DcbPBMO','BNq6Aw4','y0TTruK','zsbNyw0','ig5VDca','sLjlvxq','BMPcyuq','DgfN','Dgv4Dem','zxmGAxq','DMvYEsa','BNDlB3i','v3jHCha','DgffChu','zw50rwW','Ehz1BxK','DxjHtwu','y29UDgu','Cg9ZDe0','Aw9U','B3vYy2u','ihbYB3y','y2XVC2u','tM8GCMu','CY5Tzw0','Dc4kcLq','rK90DMe','CMvTB3y','pgLUChu','oInMn2u','BI13Awq','B2fYza','vvjbx1m','rviGvvC','zgHbu0u','EsbHigq','B2SGAxm','z2XVyMe','ihbHDgm','psjIywm','zw50','yM9KEq','q0jhrNe','ysGYntu','qu5tsvy','B2jMqG','AxrOie0','zxi6mdS','BNn0yw4','zYaVigO','uerMDvy','C29SDMu','B25JBgK','y0f6u0i','C3bYAw4','zuvSzw0','BMfSrNu','pc9ZCge','qw5Swgm','Dde2','vgLUDfy','Bwvhyw0','seHLAfC','DMHAvu8','iJ5gosa','BwuGD2u','yw1Ligy','DdTIB3i','DJiTDge','C3rLBMu','icaGica','nxWZFdi','yw1ODem','DxHKzvy','CenVBNq','ywqGzMe','Cg9YDca','yuztuvm','qu5eihq','yxa8l2i','BMTLEsa','CNvUCYa','re9nq28','AwDPBMe','Dw1WAw4','qwXTq0u','rgLMzIa','Ate2','CgfYyw0','x3j1BNq','EdOYmtq','rvHJtem','CMvJDgK','CNjVCG','BhL5B3q','CMnLoIa','v3bqD1K','BefVsum','DMzxA2u','CMvMzxi','ufDZyuG','A0L4BwC','Bwvnyw4','AxnHyMW','ihjLywm','Bgu9iMi','ihbHC3m','As1TB24','DMfS','BgvYigG','yMeOmJu','vhLytfK','z2Hsvfi','r2fTzq','ChbtwMm','BM8TBwu','EffxvKW','qKXvrMC','lc40ktS','BMrIEwG','Cg9Zqxq','AxrPywW','q0nIuxO','ChG7Cge','ChG7','B3v0','mIWYosW','o2jVEc0','C2vYlxm','wxv2rgW','tMX1Efi','zw1LBNq','wxnJzfm','DMTJD3m','D3jHCdO','AMTiyu4','ifnxlva','zMXLEdO','DhDPy2u','zgTPDc4','AgvSBg8','zsbYzw0','reLeugy','mK9czwPsAa','DMvK','vfj6ue0','yxvSDa','ihjNyMe','zNjiuuW','Bw1swuG','A2v5zg8','DMvKpq','B25PBNa','Evvzvuq','Ew1it3O','zM9UDdO','yM94lxm','we1hq1e','BLr5Cgu','DdOG','u2jHAM4','otK7Bwe','B3vUzcW','Cer2vgy','CMTXAuO','te5iBeO','zsDZig8','C2vSzIa','BMCGlYa','C3PvDuu','B2XPzca','BgvY','A2LUza','C25HCa','CMvKia','lwe9iG','EMjytLa','BMq6Dhi','C3rHCNq','vMHQD0K','AxHLzdS','C29SAwq','u2vSzwm','B2jM','n3WYFde','CKPRwuu','zw5NDgG','yNL0zuW','idHWEdS','zw4Gyw4','Fdn8ma','zg9JDw0','zeLqALC','AgLKzgu','ywXPz24','lwjVDhq','CMvMAxG','BgvJDdO','wxLuC2i','yxbZAg8','CNqGEwu','BwuUy3i','Aw5KzxG','DNmGC24','z2v0rMW','y2XPCgi','BhP3Cum','uMvHC28','igeGBgK','Ce9ewfm','zwvMntS','z2fTzsa','BgfZDfC','EdSIpNy','BIbHihi','zcdcTYa','DMfSDwu','re5cswy','yxbP','tMTju0i','B24+','BwuGAw4','CMXHyMu','mhW2FdC','z2v0sw4','EKHTrxi','BNrxAw4','u2HHCNa','ie9o','AxmGyNu','yxjNAw4','C3rHBMm','Acbxzwi','v2jdvNC','tMHcvwW','CwT2uhC','nNW0','igDHBwu','BgrZlIa','DfroA0C','ihvWk2q','C0nRz3u','ihDOAwm','B24Gzge','AdO5mNa','zw50lwm','ywn0Axy','DhjHBNm','CMvIDwK','zxi7iJ4','Aw1Lr2e','igrPzca','CMvUDdS','yNvMzMu','ue9OqK4','iMjHy2S','Cg9YDge','oMf1Dg8','A2v5q28','rMLyteu','CMuGkhi','DcbUBYa','C2flCgS','A2vKihu','mtKWotCYmKPqrKHzqW','tunuEMi','qM90','renqq1O','A3PIC1a','BIbuyw0','C0DHD2m','C291CMm','ktSGBM8','tJWVyNu','DgLWrwy','BKHLv3K','Cg9ZAxq','Dhfdwfe','svvbCKS','ywjSzsa','DcbTyxq','DxjHimk3','iZHKn2e','BwDsq1C','zxKGAxm','mcaWige','nsiGC3q','AgvHCei','yMfJA2C','rwL0Agu','DgeTyt0','ks4G','zcbYz2i','Aw4U','CIb0Agu','A2v5vhK','z3jHuee','AwqGCMC','r2HRt3K','CYbVCNa','mtjWEc8','BNvTyMu','BM9Uzq','wKvjqK4','Bgu9iMm','pc9IpG','ywrKrxy','EdTHy2m','DhLWzum','Aw9UoMy','zxmGBM8','Aw5ZDge','yxbWzxi','DgvZDa','DgvYzwq','Cd0Imc4','rhLOs1a','vfrLDgO','ywX0','v0vZthq','mJKWChG','zM8Qksa','igL0ihm','y3vYC28','zvbYB3a','AxjZDca','A3vYyv0','ChrY','yMfY','msiGC3q','DvbhwfG','zwqGDgG','we15Dei','Bg93oMG','CgXHEwu','mcbMAwu','DxjHvge','BMDZ','yxrnCW','AwzLig8','BM8GCMu','Axr5','B3nWywm','icaO','ksWGC28','vgHPCYa','uuznzuO','n3b4o3a','oJfWEca','EfPIzu4','ihrOzsa','igzSB28','ywnLlem','iZDLzta','qwDlwNm','yMXLig4','zcb0Agu','Fdf8mNW','A2vLCa','A2Dlz2i','lcbnzxq','pgiGC3q','sKTKC1C','DhLSzt0','AfnJCMK','l2j1Dhq','A0vrD2e','B3nLCY4','uvDWu28','iZjHmgy','EI51C2u','vNzYwKO','kdiXlde','AwTLlIa','CMDVt08','ohb4ide','B3i6','Fdb8mG','C2XPy2u','wMjQCxm','uK5twuS','B25LoYi','DIiGC3q','CZPJzw4','qw5ODMK','ugjMB2i','AgLSzsa','uNfJseK','iMrPC3a','C2LUz2W','AguGB2W','zwLNAhq','A1jTz3G','z3jVDw4','CNvUBMK','C3bSAxq','C3rHDhu','zwqGyNu','ufKGve8','y29SB3i','DxLjrNi','zwfJAge','BMXKzKG','CML0Dgu','EdTMB24','Ag9Ksw4','zwy1o2i','v0nHq0O','yxG9iJu','v2zes1a','C2nHBge','AwqGzg8','B3vUDa','wNH5z0y','igj1Dca','ywjSzwq','BMjVsMq','zgf0yq','Dgf5CYa','lxGIihm','zw50tgK','mI40lJa','qvrkAgS','B29RCYa','whjSDK8','igrVy3u','AwzYyw0','wNznz3y','C3vYDMu','ic0+ia','yNv0Dg8','C2fNzq','ug10sM0','rxDcBKS','Dw5UAw4','BxmGD2K','ChbLCIa','CgfKzgK','w2rHDge','sYbZy3i','AxjLuhi','igLKpsi','B3i6iZG','B2TZigW','z25ouLK','vxzvzuO','BMnLCW','mtC3lc4','D2fYBMK','ktTIB3i','vw5PDhK','zg93','ugLIBNe','yLvuz0K','DxjPBMC','vg90ywW','i2y3zwu','Bwf4psi','BMfHwgK','Aw5Uzxi','DMvYC2K','BMnL','zgL1CZO','Bwf4lxC','zxnZywC','qxnZzw0','Bwf4','y2fWDhu','B3zgAKe','Ce1NCwC','Dg9Y','igjSB2m','tw9KDwW','C2fUzq','CMDIysG','ihn0EwW','B3qGD2K','CKHysxO','DgG6BwK','lt4GDM8','uffNBMK','ChjLDMu','BM9ZCge','BhzLr2e','zuL0zw0','C3CYlxm','zw5LBxK','swLmvwG','DhbHC3m','CeLUB0y','icaYlIa','zMfRzq','CK1LDKq','y0LUChu','D3jVBMC','z2fTzvm','oY13zwi','o2zVBNq','igLZihi','zgLMzG','zhj2BNm','Dc5KBgW','vvDnsYa','EhbVCNq','CJPWB2K','AeDmwfC','mtjWEdS','n2vLzJu','AxnWBge','BNrPyxq','BMC6nNa','qLnUqxG','B2jQzwm','B25Tzxm','BwuGBM8','ndC0nda0nJriC1bQrK0','igL0ige','yxr0zw0','B3zLCMy','B3i6i2y','mtbWEdS','oNjNyMe','BeP1u1G','D3bgAeG','D0nsr3a','yxbWzw4','rM5KCKO','z2jHkdi','D24Gvxa','BwuUCMu','DtmY','veLwrq','CMnsq0m','oJK5oxa','ChjltwK','uvf0sKi','lcbuyw0','vg5cr1K','tK5As3K','DwLSzci','CYb3zxi','zxqUia','Awq9iNm','AwnOigy','ywz0zxi','yw50zw4','Eca4ChG','AhvK','thzLEhe','Ec1KAxi','tNHzrK0','q01cyKS','CMvZB2W','z0fkwem','z2LMEq','qujjAhK','EcbZB2W','DcbPzd0','B2vrBvO','r0Lur1y','De1RB1u','CgLzAei','BfDHCNO','BM90ihi','A0jMuwW','vKX2rLa','DcbKyxq','yt0IC3q','Dxm6mta','yxmSBw8','y2vK','vMPeCu0','yw1L','Dg87iJ4','DMvhyw0','yt0IyMe','DgfNtwe','DxjHx3m','svvjzeK','uKvorhq','r1HZAvm','A2LUzYa','B246y28','ywvhAxm','zKDwrwO','mJbWEca','ueLlrMK','otK7y3u','ifvxtuS','DgnOzxm','vhjlBLG','yMfS','BM8Gz3i','zxjYB3i','C3r5Bgu','CvjrwuS','q1HfrgW','CejeA1e','C25HChm','uwXUBxO','BJOWo3a','CgX1z2K','B250zw4','Bgu9iM0','mhb4ic0','lde3nYW','CLbHquy','mhb4oYi','u3rYAw4','CIiGDhK','BgqGAxm','lxDLAwC','CMvUDca','u3bLzwq','icHZB3u','igfYBwK','vxbKyxq','khmPigq','AMDJvxq','CdO2ChG','y29MB3i','y29Kzq','ztTTyxi','D2fYBG','y21K','EwDps0y','s2DXrue','D2fZBvq','ktTJB2W','mNb4icm','B250lxC','ELzLyNC','EePky0S','Ec8XlJq','zgLMzMu','vMDHrgG','mty2ntqZnhbeuNfvDq','zxmGDgG','s1vsqs0','s1rfsge','oxWXm3W','CMvWB3i','Aw50Aw4','EeLLD3K','psjJB2W','B3r0B20','yZfKo2m','Ag9ZDa','AwXKlG','zgThBK8','uNvUDgK','zK9rzLy','mtiZmdzzqLjmEwC','BwuGlsa','ywjZ','DxrYAhm','iIbZDhK','BMuGAg8','ExbLpsi','C2vSzwm','lde0mYW','EdTWywq','vuPPqvO','DLj5zvu','igHLEd0','zw50o2i','C2v0sxq','uLj4tMS','mtq3mtC3otLhALfKsfa','BfnhDKW','r1DrzKG','B0fKy1e','wNL3z0C','Aw50BYa','lwnVChK','oJHWEdS','Dg9WoJe','q291BNq','qxrbCM0','zdDHotK','ChG7iJ4','lg1VBM8','BMCUcG','Eg1iDfa','lGOk','BNn4r28','BwfYz2K','A2v5CW','zNjHBwu','ywn0','lwXLzNq','oInIzge','C2fRDxi','oYi+tM8','Fdb8nxW','zsbYzxa','CgvJDhm','BMqGr0C','Ee1cA28','rKnwywO','yxjN','yM9VBgu','A1D5B1C','BMv2zxi','DgvZia','zxfxzKK','mtiWnJbLy0vOC0i','AxvZoJC','BefmEha','qxbWBgK','EcaXmNa','Aw5Lza','zxvLwNa','BNrPBca','CY1VCMK','ze5pA1i','BhqGC2K','tgrlv1K','BI5FCNu','yxmGzMK','tefqsvu','zgzXCe4','tgDVtLG','svzficG','ig9Yihq','tg1XsKy','ihDHCYa','Fdb8nhW','oJeGmsa','ihrOAxm','u2fRDxi','s3HxsLu','BM8Gvxa'];_0x1f6d=function(){return _0x373f93;};return _0x1f6d();}
