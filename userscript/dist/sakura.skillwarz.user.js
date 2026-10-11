// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.10.0
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

function _0x4565(_0x1de910,_0x551c55){_0x1de910=_0x1de910-(-0x2592+0x77b*-0x1+0x2e2f);var _0x48da4b=_0x13b1();var _0x50ace2=_0x48da4b[_0x1de910];if(_0x4565['mrTNcE']===undefined){var _0x283fb0=function(_0x3861a2){var _0x49e2a3='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x3a906b='',_0x4a6c7d='';for(var _0x209786=-0x1507+-0x23b1*-0x1+-0x755*0x2,_0x352268,_0x4cae5b,_0x1b4d00=0x1a2c+0x2*-0x85d+-0x4b9*0x2;_0x4cae5b=_0x3861a2['charAt'](_0x1b4d00++);~_0x4cae5b&&(_0x352268=_0x209786%(-0x219*-0x9+0xdd2+-0x20af)?_0x352268*(-0x471*0x1+0x1184+0x1*-0xcd3)+_0x4cae5b:_0x4cae5b,_0x209786++%(-0x248d+-0x1d35+0x41c6*0x1))?_0x3a906b+=String['fromCharCode'](-0x14ef+-0x2*0x6b0+0x234e&_0x352268>>(-(-0x1f3c+-0x82*0x1+0x3f8*0x8)*_0x209786&0xb85+-0x1de7+0x1268)):-0x110d+0x1*-0xf1c+-0x2029*-0x1){_0x4cae5b=_0x49e2a3['indexOf'](_0x4cae5b);}for(var _0x81158c=-0x2*-0x595+0x1319+-0x1*0x1e43,_0x4e8582=_0x3a906b['length'];_0x81158c<_0x4e8582;_0x81158c++){_0x4a6c7d+='%'+('00'+_0x3a906b['charCodeAt'](_0x81158c)['toString'](-0x397*-0x1+-0x1*0x363+-0x24))['slice'](-(-0x287*0xb+0x2071+-0x2*0x251));}return decodeURIComponent(_0x4a6c7d);};_0x4565['bjYfeo']=_0x283fb0,_0x4565['Imzizj']={},_0x4565['mrTNcE']=!![];}var _0x1ea741=_0x48da4b[-0x28d*0xd+-0x9db+0x2b04],_0x4d2e6b=_0x1de910+_0x1ea741,_0x3a0f21=_0x4565['Imzizj'][_0x4d2e6b];return!_0x3a0f21?(_0x50ace2=_0x4565['bjYfeo'](_0x50ace2),_0x4565['Imzizj'][_0x4d2e6b]=_0x50ace2):_0x50ace2=_0x3a0f21,_0x50ace2;}(function(_0x55ce5d,_0x55e868){var _0xd64908=_0x4565,_0x4fb054=_0x55ce5d();while(!![]){try{var _0x9a6595=-parseInt(_0xd64908(0x4cf))/(-0x4d1*-0x2+0x14e8+-0x1e89)+parseInt(_0xd64908(0x57a))/(-0x137b+-0x26dd+0x3a5a)+parseInt(_0xd64908(0x8fb))/(0x1b47+-0xc0b*0x1+0x1*-0xf39)+-parseInt(_0xd64908(0x27d))/(0x13*0xfe+0x2228+-0x72*0x77)*(-parseInt(_0xd64908(0x7d1))/(0x1020+0x61a+-0xf*0x17b))+-parseInt(_0xd64908(0x451))/(0xcb*0xd+-0x3d*0x73+0x272*0x7)*(parseInt(_0xd64908(0xaa4))/(0x1fa6+0x4c2+-0x2461))+-parseInt(_0xd64908(0xafe))/(-0x1f02+-0x1*-0x4b5+-0x3c3*-0x7)+parseInt(_0xd64908(0x73d))/(-0xc88*0x2+0x1829+-0x18*-0xa);if(_0x9a6595===_0x55e868)break;else _0x4fb054['push'](_0x4fb054['shift']());}catch(_0x2f582f){_0x4fb054['push'](_0x4fb054['shift']());}}}(_0x13b1,-0x3*-0x597cd+0xdd0e4+-0x13cf1f),((()=>{'use strict';var _0xbd7aa9=_0x4565,_0x5d3ad4={'rIQNa':'funct'+_0xbd7aa9(0xb25),'SvPuJ':_0xbd7aa9(0x680)+'me.cr'+_0xbd7aa9(0xb1a)+_0xbd7aa9(0x383)+'\x20unav'+_0xbd7aa9(0x4a1)+'le','jBERO':function(_0xec93b3,_0x23d71a){return _0xec93b3===_0x23d71a;},'VvFiJ':_0xbd7aa9(0x4a5)+'r','RbdZJ':function(_0x285057,_0x590863){return _0x285057!==_0x590863;},'CTuKu':function(_0x563c33,_0x2a250d){return _0x563c33===_0x2a250d;},'YZeim':'cmd','qLkim':function(_0x2fe3f1,_0x9c387e){return _0x2fe3f1!==_0x9c387e;},'URHSp':_0xbd7aa9(0x6ad),'gVjVS':'ifram'+'e','kzdoE':_0xbd7aa9(0x610),'lhEwO':function(_0x410e2f){return _0x410e2f();},'dXnps':_0xbd7aa9(0xd1b)+'|3|1|'+'6|0|2'+'|5','HPRJE':_0xbd7aa9(0x6f5)+'check'+'ed','PyxfY':function(_0x17546d,_0x5c9fd0,_0x4e7f72){return _0x17546d(_0x5c9fd0,_0x4e7f72);},'MuWYb':function(_0x3062e0,_0x5ce5ee){return _0x3062e0/_0x5ce5ee;},'MAJMP':function(_0x23a7ad,_0x2eb345){return _0x23a7ad-_0x2eb345;},'dCgzX':'bJGef','TLOYV':function(_0x4a6aab,_0x31a140){return _0x4a6aab===_0x31a140;},'OIiIX':_0xbd7aa9(0x9f6)+'t','CAHiM':_0xbd7aa9(0xc0a)+_0xbd7aa9(0x5be)+'bindi'+'ng','BBXHN':function(_0x5e50b7){return _0x5e50b7();},'UqWrZ':'ESP\x20b'+_0xbd7aa9(0x721),'CTqex':_0xbd7aa9(0x50f)+_0xbd7aa9(0x2cb)+'t','IyWci':_0xbd7aa9(0xa97),'dsYjj':_0xbd7aa9(0x7f2)+_0xbd7aa9(0x972)+'v2','tZsuU':function(_0x5cfae7,_0x4ab020){return _0x5cfae7===_0x4ab020;},'JUUzn':_0xbd7aa9(0x86c),'iPrFr':'uUbou','RlrjJ':_0xbd7aa9(0x7f2)+'a-sw-'+_0xbd7aa9(0x801)+'b','zqjrp':_0xbd7aa9(0x166)+_0xbd7aa9(0xbda)+':rgba'+_0xbd7aa9(0x459)+_0xbd7aa9(0x9cc)+'.9);b'+'order'+_0xbd7aa9(0x34a)+_0xbd7aa9(0x4b2)+_0xbd7aa9(0xbf7)+'(255,'+'143,1'+'77,.5'+');col'+_0xbd7aa9(0x31c),'fOaes':_0xbd7aa9(0x680)+_0xbd7aa9(0xaad)+'solve'+'Game('+')','gfzTQ':'dOzMx','NiILQ':_0xbd7aa9(0x62b)+_0xbd7aa9(0xa42)+_0xbd7aa9(0xa10)+'ll:in'+'itial'+'}','JMtBy':_0xbd7aa9(0xabd),'vcqxt':'open','JtcFL':_0xbd7aa9(0x745)+'1d','CmayB':'rgba('+_0xbd7aa9(0x615)+_0xbd7aa9(0xb0d)+'9)','Mndpp':_0xbd7aa9(0xbe0),'KrIqp':function(_0x3f7d51,_0x1a5949){return _0x3f7d51(_0x1a5949);},'yGzMS':'Speed'+'\x20ON','WUgCW':function(_0x238b53,_0x29511d){return _0x238b53+_0x29511d;},'jaulP':function(_0x139e31,_0x2377f9){return _0x139e31(_0x2377f9);},'ZJzMB':_0xbd7aa9(0x8ce)+'74','yXkoI':function(_0x28859d,_0x149d01){return _0x28859d+_0x149d01;},'ACBmP':'\x20obje'+_0xbd7aa9(0x2d9)+'\x20','HVlin':function(_0x482fe0,_0x14f62c){return _0x482fe0+_0x14f62c;},'OgwsY':'hooks'+_0xbd7aa9(0xa77)+'d\x20·\x20','iuJln':'#ffd4'+'8a','iYshH':'metad'+'ata\x20r'+'eady\x20'+'·\x20','LtLOn':'jUHjw','jOIJA':function(_0x1ff08b,_0x145cc6){return _0x1ff08b+_0x145cc6;},'Xahbg':_0xbd7aa9(0xac7)+'\x20·\x20','ZDQIe':'armin'+_0xbd7aa9(0xb7e),'UTUyK':'qswVG','yDEJN':_0xbd7aa9(0x209)+_0xbd7aa9(0x879),'ZtwyV':_0xbd7aa9(0x825)+'1b','BcpRr':_0xbd7aa9(0x642),'gxiAg':function(_0x17f7b0,_0x5ebdc8){return _0x17f7b0+_0x5ebdc8;},'oeQBy':function(_0x22501d,_0x5a77b3){return _0x22501d(_0x5a77b3);},'CHQiO':_0xbd7aa9(0x824),'wROqq':_0xbd7aa9(0x3cf)+'kura]'+'\x20Skil'+_0xbd7aa9(0xbe8)+'\x20repo'+'rt','RcqmE':';font'+'-weig'+'ht:70'+'0','VTWpO':_0xbd7aa9(0x83a)+_0xbd7aa9(0x95a)+_0xbd7aa9(0xc4f)+'never'+_0xbd7aa9(0xc77)+_0xbd7aa9(0x515)+'singl'+'e\x20rep'+'ort.\x0a'+'\x0a','FlTCz':'0|2|7'+_0xbd7aa9(0xb18)+_0xbd7aa9(0x86a)+'|3','SUJGZ':function(_0x2dec3f,_0x58951c){return _0x2dec3f!==_0x58951c;},'MbrGE':function(_0x43ee03,_0x3299e5){return _0x43ee03+_0x3299e5;},'pycXq':_0xbd7aa9(0x79b)+_0xbd7aa9(0x573)+'ixed;'+_0xbd7aa9(0x229)+_0xbd7aa9(0x8c1)+'top:1'+_0xbd7aa9(0x1c8)+_0xbd7aa9(0xbb5)+_0xbd7aa9(0xc40)+'74830'+'00;ma'+'x-wid'+'th:mi'+_0xbd7aa9(0x776)+_0xbd7aa9(0x1c5)+_0xbd7aa9(0x392)+_0xbd7aa9(0x9e6)+_0xbd7aa9(0x3c2)+'78vh;','tKlEw':'backg'+'round'+_0xbd7aa9(0xada)+'c1d;c'+_0xbd7aa9(0xcd8)+_0xbd7aa9(0x380)+'f5;bo'+_0xbd7aa9(0x5b8)+_0xbd7aa9(0x8cd)+'olid\x20'+'rgba('+_0xbd7aa9(0xccf)+'43,17'+_0xbd7aa9(0x970)+_0xbd7aa9(0x71a)+_0xbd7aa9(0xd97)+'dius:'+'14px;','KmHYq':function(_0x1633d8,_0x10e0f0){return _0x1633d8+_0x10e0f0;},'TeNpy':function(_0x59185b,_0x298db3){return _0x59185b+_0x298db3;},'MQGal':function(_0x38467e,_0x5567ab){return _0x38467e+_0x5567ab;},'GtBrQ':function(_0x2eb637,_0x119252){return _0x2eb637+_0x119252;},'PnfGu':_0xbd7aa9(0x1b4)+'style'+_0xbd7aa9(0x9bc)+_0xbd7aa9(0x88b)+'9px\x201'+_0xbd7aa9(0x561)+_0xbd7aa9(0xb9f)+'-bott'+_0xbd7aa9(0x701)+_0xbd7aa9(0x75a)+'id\x20rg'+_0xbd7aa9(0xaac)+_0xbd7aa9(0x855)+',177,'+_0xbd7aa9(0xc4c)+_0xbd7aa9(0x1e9)+_0xbd7aa9(0x9ad)+_0xbd7aa9(0x9c6)+':8px;'+_0xbd7aa9(0x59c)+_0xbd7aa9(0xceb)+_0xbd7aa9(0xc8f)+_0xbd7aa9(0xa17)+_0xbd7aa9(0x306)+_0xbd7aa9(0x5cf)+'to;\x22>','amNXG':_0xbd7aa9(0x9d5)+_0xbd7aa9(0xb2c)+'color'+':','NUCta':_0xbd7aa9(0x687)+'on\x20id'+'=\x22sw2'+'-copy'+_0xbd7aa9(0x3db)+_0xbd7aa9(0xd82)+_0xbd7aa9(0x1e9)+'y:non'+_0xbd7aa9(0x6ec)+'gin-l'+_0xbd7aa9(0x4ed)+'uto;b'+'ackgr'+'ound:','VyHIz':'<div\x20'+'style'+'=\x22pad'+'ding:'+_0xbd7aa9(0x27e)+_0xbd7aa9(0x561)+_0xbd7aa9(0xb9f)+_0xbd7aa9(0xa9f)+_0xbd7aa9(0x701)+_0xbd7aa9(0x75a)+'id\x20rg'+_0xbd7aa9(0xaac)+_0xbd7aa9(0x855)+_0xbd7aa9(0x329)+_0xbd7aa9(0x69d)+'displ'+'ay:fl'+_0xbd7aa9(0x33c)+_0xbd7aa9(0x9dc)+_0xbd7aa9(0x7a3)+_0xbd7aa9(0x40f)+_0xbd7aa9(0x586)+'nter;'+_0xbd7aa9(0xc3c)+_0xbd7aa9(0x258)+'uto;f'+_0xbd7aa9(0xc9e)+_0xbd7aa9(0xa34)+'rap;\x22'+'>','jyVAS':_0xbd7aa9(0x195)+_0xbd7aa9(0xce0)+_0xbd7aa9(0xb0c)+'facto'+_0xbd7aa9(0x38e)+'pe=\x22r'+_0xbd7aa9(0xce4)+'\x20min='+_0xbd7aa9(0x45a)+_0xbd7aa9(0x8ae)+_0xbd7aa9(0x74c)+_0xbd7aa9(0x476)+_0xbd7aa9(0x250)+'lue=\x22'+'1\x22\x20st'+'yle=\x22'+'width'+_0xbd7aa9(0x43c)+_0xbd7aa9(0x3e0)+_0xbd7aa9(0x994)+_0xbd7aa9(0xcd8),'EUcrG':_0xbd7aa9(0xd09)+_0xbd7aa9(0x906)+'sw2-f'+_0xbd7aa9(0x704)+_0xbd7aa9(0x1a8)+'\x22\x20sty'+_0xbd7aa9(0x2b8)+_0xbd7aa9(0xcd8)+'#bda9'+'c9;mi'+_0xbd7aa9(0x54a)+'th:34'+_0xbd7aa9(0x6d6)+'1.0x<'+'/span'+'>','jdqrh':_0xbd7aa9(0x984)+_0xbd7aa9(0x968)+':62vh'+';\x22>No'+_0xbd7aa9(0x40e)+_0xbd7aa9(0x827)+'t.\x0a\x0aT'+_0xbd7aa9(0x596)+_0xbd7aa9(0x5a1)+_0xbd7aa9(0x1ac)+_0xbd7aa9(0x284)+'self\x20'+'when\x20'+'the\x20g'+_0xbd7aa9(0x95a)+_0xbd7aa9(0xc4f)+_0xbd7aa9(0x58a)+'\x20—\x20no'+_0xbd7aa9(0x1b8)+_0xbd7aa9(0x62f)+'eeded'+'.\x0a\x0aIf'+_0xbd7aa9(0x180)+_0xbd7aa9(0x44c)+_0xbd7aa9(0x79d)+_0xbd7aa9(0x73e)+_0xbd7aa9(0xd0b)+_0xbd7aa9(0xcda)+_0xbd7aa9(0xc61)+_0xbd7aa9(0x372)+_0xbd7aa9(0x693)+_0xbd7aa9(0x99d)+_0xbd7aa9(0x648)+_0xbd7aa9(0x665)+_0xbd7aa9(0x1de)+'gin\x20g'+'ame\x20f'+_0xbd7aa9(0xc4a)+_0xbd7aa9(0x595)+'>','wHsQx':'#sw2-'+_0xbd7aa9(0xc99),'grxpJ':'#sw2-'+'x','nOFti':_0xbd7aa9(0x662)+_0xbd7aa9(0x292)+'r','RPjSw':'#sw2-'+_0xbd7aa9(0x292)+_0xbd7aa9(0x713)+'l','OcvHC':_0xbd7aa9(0x662)+_0xbd7aa9(0xd47),'UlBSg':function(_0x33f632,_0x715083,_0xe01580){return _0x33f632(_0x715083,_0xe01580);},'fTdQl':function(_0x502dcb){return _0x502dcb();},'KiNoo':_0xbd7aa9(0x137),'isQec':function(_0x9dcaeb,_0x33ef10){return _0x9dcaeb+_0x33ef10;},'iYYOC':_0xbd7aa9(0xabe)+_0xbd7aa9(0xbd1)+'\x20','mSxkE':_0xbd7aa9(0x863),'YjZZf':function(_0x4479f6,_0x4ff1b5){return _0x4479f6+_0x4ff1b5;},'rSCbS':function(_0x477056,_0x213dbc){return _0x477056<_0x213dbc;},'zRuTm':function(_0x4067f5,_0x287900){return _0x4067f5+_0x287900;},'Oaqzt':_0xbd7aa9(0x19b),'TEoyI':function(_0x25df5b,_0x4f740d){return _0x25df5b===_0x4f740d;},'URRJL':function(_0x38efe2,_0xaa5ccf){return _0x38efe2*_0xaa5ccf;},'mQngu':function(_0x3df0e7,_0x166e88){return _0x3df0e7+_0x166e88;},'HixwF':function(_0x5b97ac,_0x280c6c){return _0x5b97ac(_0x280c6c);},'EzjPw':_0xbd7aa9(0x1f4)+'ngs','oYoQy':function(_0x2f8a62,_0x33fc3f){return _0x2f8a62<_0x33fc3f;},'FvaPE':_0xbd7aa9(0x313)+'ined','qqyUv':function(_0x4e5a20,_0x308f4f){return _0x4e5a20===_0x308f4f;},'oRoRL':_0xbd7aa9(0x32c)+'t','CTVqA':'JLfjZ','LHUYb':'color'+':','rSKir':function(_0x7b844d,_0x12cda3){return _0x7b844d!==_0x12cda3;},'DpsfS':'posit'+_0xbd7aa9(0x573)+_0xbd7aa9(0xd02)+_0xbd7aa9(0x229)+'0;top'+_0xbd7aa9(0x93f)+_0xbd7aa9(0x8f1)+_0xbd7aa9(0x491)+_0xbd7aa9(0x93a)+_0xbd7aa9(0x1d5)+_0xbd7aa9(0x819)+_0xbd7aa9(0xa79)+_0xbd7aa9(0x415)+'e;','YDJem':function(_0x4c9cc5){return _0x4c9cc5();},'tsThS':'Mouse'+'Look@'+_0xbd7aa9(0x41f),'GJjWt':function(_0x2d5903,_0x13831e){return _0x2d5903+_0x13831e;},'gEwZs':'Mouse'+_0xbd7aa9(0x3b4),'QOTWF':_0xbd7aa9(0x8c4),'cwLej':_0xbd7aa9(0x91f),'HrmWv':_0xbd7aa9(0xc95),'LmjkF':function(_0x1f6ac0,_0x50a3d){return _0x1f6ac0===_0x50a3d;},'Jixef':_0xbd7aa9(0x54c),'CjIQj':_0xbd7aa9(0xd53),'QhUpw':_0xbd7aa9(0x9e2),'fVNdZ':function(_0x42cc14,_0x5bf334){return _0x42cc14(_0x5bf334);},'QPKNT':'name','Tjhum':function(_0x466543,_0x29f593){return _0x466543===_0x29f593;},'mFSvG':_0xbd7aa9(0x5a0),'XnabZ':function(_0x25ff14,_0x337ddc){return _0x25ff14&_0x337ddc;},'AqnfR':function(_0x49aa3c,_0x4f20d7){return _0x49aa3c===_0x4f20d7;},'hjRUG':function(_0xaabc54,_0x879edc){return _0xaabc54===_0x879edc;},'pdwqY':function(_0x677ab0,_0x2a5ffe){return _0x677ab0===_0x2a5ffe;},'mWJFh':_0xbd7aa9(0xad6)+'ntiat'+_0xbd7aa9(0x681)+'aming','PkkAQ':_0xbd7aa9(0x7f2)+_0xbd7aa9(0x46b)+'llwar'+'z','JmzrI':function(_0x2e4cfc){return _0x2e4cfc();},'jPUnn':_0xbd7aa9(0x523),'Hfucg':_0xbd7aa9(0x72b),'GEgCI':function(_0x1bc0a3,_0x58b39d){return _0x1bc0a3|_0x58b39d;},'IYRJh':function(_0x53a655,_0x298923){return _0x53a655(_0x298923);},'tFXsQ':function(_0x57326,_0x595b96){return _0x57326!==_0x595b96;},'NlKUx':_0xbd7aa9(0xd9e)+_0xbd7aa9(0xd27)+_0xbd7aa9(0x2fe)+'.reso'+_0xbd7aa9(0xbcf)+'me()','twWPc':_0xbd7aa9(0xd9e)+_0xbd7aa9(0xd27)+'ntime'+_0xbd7aa9(0xda8)+'e','Uhxwr':_0xbd7aa9(0x6ae),'tOnOH':function(_0x2b5eeb,_0x35eb28){return _0x2b5eeb===_0x35eb28;},'HghOK':_0xbd7aa9(0x680)+'me._g'+'ame','AicYz':function(_0x18274e,_0x9e56c2){return _0x18274e===_0x9e56c2;},'XcQFM':_0xbd7aa9(0x7f9),'bRUql':_0xbd7aa9(0x80e),'rpMfK':'.Modu'+'le','ClIVP':function(_0x447b7b,_0x3e7e12){return _0x447b7b/_0x3e7e12;},'aZWvf':function(_0x4ebee7,_0x49d453){return _0x4ebee7+_0x49d453;},'vVhDD':function(_0x1155cd){return _0x1155cd();},'SPGqi':'eLXrX','MUKZp':function(_0x59e411,_0x41d6cd){return _0x59e411!==_0x41d6cd;},'DtcZZ':'stgUd','CpXao':function(_0x2ca907,_0x3a4baf){return _0x2ca907+_0x3a4baf;},'PvsOs':_0xbd7aa9(0x89f)+_0xbd7aa9(0x912)+_0xbd7aa9(0xbf9)+'0x','vzKWt':_0xbd7aa9(0xbc3),'oApqg':'ZQycB','OFhgD':function(_0x3f45c6,_0x554d83){return _0x3f45c6>_0x554d83;},'pthKr':_0xbd7aa9(0x3a8),'TcIwl':'i32','xnekH':_0xbd7aa9(0x441),'pomPU':function(_0x2b8a32,_0x59467e){return _0x2b8a32|_0x59467e;},'nhSBO':function(_0x58c945){return _0x58c945();},'RfBJd':_0xbd7aa9(0x40c)+_0xbd7aa9(0x997)+_0xbd7aa9(0xbbe)+_0xbd7aa9(0x56a)+_0xbd7aa9(0xa3a)+'e\x20not'+'\x20reac'+'hable'+'\x20via\x20'+'Runti'+'me.re'+'solve'+_0xbd7aa9(0x4c4)+')\x20or\x20'+_0xbd7aa9(0xb88)+_0xbd7aa9(0x342)+_0xbd7aa9(0x830)+'al','uFaXO':function(_0x2bb202,_0x1d9f54){return _0x2bb202<_0x1d9f54;},'JaXiE':function(_0x306ca9,_0x51b4cd){return _0x306ca9>_0x51b4cd;},'vcirj':function(_0x3eb9d4,_0x1a356d){return _0x3eb9d4+_0x1a356d;},'oPOUs':_0xbd7aa9(0x785),'JvMaW':_0xbd7aa9(0x8d7),'stVLJ':_0xbd7aa9(0xa7a),'UlHVO':_0xbd7aa9(0x3dc),'TaasG':function(_0x56fe96,_0x5f49ff){return _0x56fe96^_0x5f49ff;},'AEUfo':function(_0x3dfe1c,_0xca0460){return _0x3dfe1c!==_0xca0460;},'MVhru':'cmVyS','srrjF':function(_0x495853,_0x4924bb){return _0x495853&_0x4924bb;},'WNvZd':'ytFBZ','bPVPz':function(_0x519ab5,_0x4b7163){return _0x519ab5+_0x4b7163;},'nlUZo':function(_0x2aa44f,_0x57ac01){return _0x2aa44f+_0x57ac01;},'vOQhn':function(_0x50a299,_0xa63807){return _0x50a299===_0xa63807;},'JuKHR':function(_0x3e44e8,_0xfa30d5,_0x10e647){return _0x3e44e8(_0xfa30d5,_0x10e647);},'revry':function(_0x5ecc64,_0x3a2a4f){return _0x5ecc64===_0x3a2a4f;},'FOtCM':function(_0x502f41,_0x5e4b08){return _0x502f41===_0x5e4b08;},'Urdjr':function(_0xbdb1b4,_0xf992b6){return _0xbdb1b4||_0xf992b6;},'JxZWm':function(_0x10a63f,_0x48ca84){return _0x10a63f^_0x48ca84;},'eTvfs':function(_0x1046d7,_0x11bbe2){return _0x1046d7&_0x11bbe2;},'yRyBN':function(_0x2f24a1,_0x2bc8cd){return _0x2f24a1===_0x2bc8cd;},'dPBOD':function(_0xdd225b,_0x44aad9){return _0xdd225b===_0x44aad9;},'aFYwN':function(_0x5b98ec,_0x49cc42){return _0x5b98ec^_0x49cc42;},'djFHh':function(_0x59344e,_0x55188a){return _0x59344e-_0x55188a;},'lhDHJ':function(_0x4c14dd,_0x5e0035,_0x1d5a28){return _0x4c14dd(_0x5e0035,_0x1d5a28);},'mbgvU':function(_0x4a6664,_0x21188d){return _0x4a6664===_0x21188d;},'jGgSd':_0xbd7aa9(0x7a6),'FqzsK':function(_0x349e2c,_0x1e4506){return _0x349e2c!==_0x1e4506;},'lAIUc':function(_0x58d382,_0x27ed39){return _0x58d382-_0x27ed39;},'HfdMf':function(_0x186eba,_0xc5f516){return _0x186eba===_0xc5f516;},'zPSdT':_0xbd7aa9(0xd46),'rgGss':_0xbd7aa9(0x50d)+_0xbd7aa9(0x59a)+'f\x20','BlqYq':_0xbd7aa9(0xb1b)+_0xbd7aa9(0x632)+_0xbd7aa9(0xa80)+_0xbd7aa9(0xda3)+'ed','ECzmS':function(_0x510a34,_0x5deb9f){return _0x510a34===_0x5deb9f;},'faLxz':'gqPXp','ukTFc':function(_0x21b586,_0x28f6ba){return _0x21b586>=_0x28f6ba;},'ZqDRQ':function(_0x3b8012,_0x26a0be){return _0x3b8012<_0x26a0be;},'CBWsT':function(_0x5a32d4,_0x11a088){return _0x5a32d4===_0x11a088;},'LyyzL':_0xbd7aa9(0x505),'CAibJ':function(_0x3345d3,_0x4957fe,_0x52fe09,_0x8ccac9,_0x5ecb99){return _0x3345d3(_0x4957fe,_0x52fe09,_0x8ccac9,_0x5ecb99);},'GMJUz':'no\x20pl'+'ugin.'+'mallo'+'c','tqdIU':function(_0x4fd585,_0x444398){return _0x4fd585===_0x444398;},'XyxEF':function(_0x573b82,_0x548967){return _0x573b82>_0x548967;},'tvGFx':'ZUWvj','SAIfv':_0xbd7aa9(0x1ca),'LBaWw':function(_0x1fc5dc,_0x19b8b8){return _0x1fc5dc<_0x19b8b8;},'BvFqq':function(_0x16cc0,_0x3b7479){return _0x16cc0>_0x3b7479;},'CwQRy':function(_0x4b7e0a,_0x58328e){return _0x4b7e0a===_0x58328e;},'DdIyJ':'get','aZXCB':_0xbd7aa9(0x925),'UBKRo':function(_0x9ed182,_0x4fdf0c){return _0x9ed182===_0x4fdf0c;},'SKrvE':function(_0x554c7d,_0x383870){return _0x554c7d===_0x383870;},'yVkoA':'Mouse'+_0xbd7aa9(0xb4e),'wtLGA':function(_0x166931,_0x16d26f){return _0x166931<_0x16d26f;},'PLOwY':function(_0x3b70da,_0x4da96a){return _0x3b70da*_0x4da96a;},'cRnNc':'vMIoX','nKPvf':function(_0x2bcec1,_0x303691){return _0x2bcec1>=_0x303691;},'opyTr':function(_0x1edafe,_0x1dd833){return _0x1edafe!==_0x1dd833;},'NUAdf':_0xbd7aa9(0x47b),'xvjsE':_0xbd7aa9(0x920)+_0xbd7aa9(0x75e)+_0xbd7aa9(0x5a2),'QmFiU':_0xbd7aa9(0x89a),'wlvRf':function(_0x35860b,_0x35ae9c){return _0x35860b<_0x35ae9c;},'Tkuko':function(_0x3dd710,_0x2a42a8){return _0x3dd710!==_0x2a42a8;},'EnFzm':function(_0x599a31,_0x1972c6){return _0x599a31+_0x1972c6;},'gYKwx':function(_0x2a7690,_0x9565e8){return _0x2a7690===_0x9565e8;},'axpmq':function(_0x3b4f5f,_0x172087){return _0x3b4f5f===_0x172087;},'vxWHS':'EFkQR','hPdAE':function(_0x227005,_0x3398a8){return _0x227005!==_0x3398a8;},'DdXtZ':'mrsZo','Ktynh':function(_0x131d18,_0x39e83b){return _0x131d18<_0x39e83b;},'aLEss':function(_0x1c2c86,_0x5b7378,_0x3898bb){return _0x1c2c86(_0x5b7378,_0x3898bb);},'BJGnB':function(_0x1babd9,_0x40fac0){return _0x1babd9>>>_0x40fac0;},'sRzEU':function(_0x4c735c,_0x522de1){return _0x4c735c<_0x522de1;},'qpdyX':_0xbd7aa9(0xae9),'FpgEK':function(_0x75815b,_0x344280){return _0x75815b<_0x344280;},'eDVyQ':function(_0x1c3164,_0xf1fd6d,_0x3092b4){return _0x1c3164(_0xf1fd6d,_0x3092b4);},'Sadgd':function(_0x1f888e,_0x336116){return _0x1f888e===_0x336116;},'ZwJXJ':function(_0x3c5949,_0x43fa0b){return _0x3c5949<_0x43fa0b;},'mWGst':_0xbd7aa9(0x539),'gmHUi':function(_0xadbfc6,_0x51d8d6,_0x3f77f0,_0xaa0ee6){return _0xadbfc6(_0x51d8d6,_0x3f77f0,_0xaa0ee6);},'pZQqG':_0xbd7aa9(0x170)+_0xbd7aa9(0x914)+'pt','VXlWG':_0xbd7aa9(0x529)+_0xbd7aa9(0xd56)+'ler','lIHyH':function(_0x2fb6ba,_0x36563f){return _0x2fb6ba in _0x36563f;},'oUytG':function(_0x2bef7a,_0x3f0902){return _0x2bef7a===_0x3f0902;},'OUZAy':function(_0x50343c,_0x2f4710){return _0x50343c+_0x2f4710;},'cwdEB':'Playe'+_0xbd7aa9(0x127)+'e\x20pre'+'sent\x20'+_0xbd7aa9(0x6e6)+_0xbd7aa9(0xa99)+_0xbd7aa9(0xbca)+_0xbd7aa9(0x4c8)+_0xbd7aa9(0x2ee)+'s\x20ene'+_0xbd7aa9(0x21c)+_0xbd7aa9(0x18d)+'\x20chec'+'k\x20','VHZkK':_0xbd7aa9(0x317)+_0xbd7aa9(0x89e)+'\x20each'+_0xbd7aa9(0x92e)+_0xbd7aa9(0x3a3)+_0xbd7aa9(0x7e0)+_0xbd7aa9(0x69f),'LGZND':'pobfN','zRzBS':_0xbd7aa9(0x447),'JaWSf':function(_0x50247d,_0x4df1ba){return _0x50247d+_0x4df1ba;},'AdZyQ':function(_0x20b261,_0x2aa774){return _0x20b261===_0x2aa774;},'YYnBp':function(_0x319ed6,_0xf00a37){return _0x319ed6===_0xf00a37;},'hSrGj':function(_0x269c55,_0x50ea8){return _0x269c55===_0x50ea8;},'scsNF':function(_0x37d8c1,_0x22ec38){return _0x37d8c1<_0x22ec38;},'jmEPD':function(_0x29e158,_0x3e7a29,_0x178876,_0xc516f0){return _0x29e158(_0x3e7a29,_0x178876,_0xc516f0);},'HONZG':function(_0x25ae4a,_0x259376){return _0x25ae4a+_0x259376;},'aLGuR':_0xbd7aa9(0x335),'xjKDP':'\x20ACTI'+'VE','UmliW':_0xbd7aa9(0xb87),'HuypF':'JJdyu','XhYLx':_0xbd7aa9(0x81f),'ZizlR':function(_0xe47113,_0x2c6e7e){return _0xe47113===_0x2c6e7e;},'iXpHj':'6|5|2'+_0xbd7aa9(0x22a)+_0xbd7aa9(0x25c),'AQwLx':function(_0x4b323e,_0x39af4d){return _0x4b323e===_0x39af4d;},'cDvga':'obfB','ltNDj':function(_0x4a5857,_0x2ad0b0){return _0x4a5857===_0x2ad0b0;},'wHMHV':function(_0x5e854f,_0x10b480){return _0x5e854f<=_0x10b480;},'evQrg':function(_0x5d36f4,_0x4b4f7c){return _0x5d36f4(_0x4b4f7c);},'mrMgw':_0xbd7aa9(0x5e8),'BGxtr':'2|1|0'+_0xbd7aa9(0x35b)+'5','uxcpJ':function(_0x4d0e1f){return _0x4d0e1f();},'ZaXyG':function(_0x50332d,_0x3840a1){return _0x50332d&&_0x3840a1;},'sbkag':'unity'+'Insta'+'nce','WDDUG':function(_0x194403,_0x49ea0d){return _0x194403!==_0x49ea0d;},'UMNOm':_0xbd7aa9(0x668),'xZytO':function(_0x5b6610,_0x31e4ac){return _0x5b6610===_0x31e4ac;},'TfIkG':function(_0x197123,_0x3d1dca){return _0x197123===_0x3d1dca;},'IhzuI':'EyrBg','Bmfya':_0xbd7aa9(0xcea)+_0xbd7aa9(0x3b4)+'camer'+'a','GbaIa':function(_0x97e7e7,_0x3289b8,_0x399b6e,_0x5d9c20){return _0x97e7e7(_0x3289b8,_0x399b6e,_0x5d9c20);},'Fcmhm':'XjsWU','YSISx':function(_0x4fe567,_0x13c361){return _0x4fe567===_0x13c361;},'SaQYq':function(_0x250a22,_0x269e8d){return _0x250a22+_0x269e8d;},'XLplK':function(_0x5464b1,_0x2bad49,_0x302d3c){return _0x5464b1(_0x2bad49,_0x302d3c);},'fUXXi':_0xbd7aa9(0x4da)+'an','heuor':_0xbd7aa9(0xbdd)+_0xbd7aa9(0xce7),'jwPtM':function(_0x4a58b7,_0x213773){return _0x4a58b7+_0x213773;},'cQGob':function(_0x227ac7){return _0x227ac7();},'QqpQU':function(_0x1d3c19,_0x49c002){return _0x1d3c19!==_0x49c002;},'eqhOk':'ZLMCo','chCST':function(_0x2039dc,_0x577c89){return _0x2039dc(_0x577c89);},'MXpmJ':function(_0x2329d4,_0x5bceb8){return _0x2329d4(_0x5bceb8);},'HZErb':function(_0x162532,_0x4fb5d7){return _0x162532!==_0x4fb5d7;},'ExnYI':_0xbd7aa9(0x789),'GZgMQ':'#saku'+_0xbd7aa9(0xa42)+_0xbd7aa9(0xd60)+'all:i'+'nitia'+'l}','csgve':_0xbd7aa9(0x7f2)+_0xbd7aa9(0x972)+'hud','TMSkg':function(_0x5c0fe6,_0x4873be){return _0x5c0fe6+_0x4873be;},'Eqicr':_0xbd7aa9(0x79b)+_0xbd7aa9(0x573)+_0xbd7aa9(0xd02)+'left:'+'8px;b'+_0xbd7aa9(0x5de)+':8px;'+_0xbd7aa9(0xb93)+_0xbd7aa9(0x839)+'47483'+_0xbd7aa9(0x7c5)+_0xbd7aa9(0x1e9)+_0xbd7aa9(0x9ad)+_0xbd7aa9(0xcc1)+_0xbd7aa9(0xd8e)+'ectio'+'n:col'+_0xbd7aa9(0x981)+'ap:4p'+'x;','opOtU':'backg'+'round'+_0xbd7aa9(0xd12)+_0xbd7aa9(0x459)+'2,29,'+_0xbd7aa9(0xc66)+_0xbd7aa9(0x8c6)+'r:1px'+_0xbd7aa9(0xc1b)+_0xbd7aa9(0x1c4)+_0xbd7aa9(0x5fc)+_0xbd7aa9(0xb2f)+_0xbd7aa9(0x8fd)+_0xbd7aa9(0x9ec)+'order'+_0xbd7aa9(0xc03)+_0xbd7aa9(0x344)+_0xbd7aa9(0x1f9),'hwcMv':_0xbd7aa9(0x822)+'ng:6p'+_0xbd7aa9(0x652)+';font'+_0xbd7aa9(0x3aa)+_0xbd7aa9(0xcf0)+'\x20ui-m'+_0xbd7aa9(0x858)+'ace,C'+'onsol'+_0xbd7aa9(0x44b)+_0xbd7aa9(0x5ae)+_0xbd7aa9(0xd68)+'lor:#'+_0xbd7aa9(0x72a)+'5;','ioerU':function(_0x123e48,_0x5cd905){return _0x123e48+_0x5cd905;},'jdeDr':function(_0x74f4ac,_0xb99633){return _0x74f4ac+_0xb99633;},'nCkFO':function(_0x4f8071,_0x4d10d3){return _0x4f8071+_0x4d10d3;},'nWtUF':_0xbd7aa9(0x1b4)+'data-'+_0xbd7aa9(0xafa)+'r\x22\x20st'+_0xbd7aa9(0xb2c)+_0xbd7aa9(0x8e8)+'ay:fl'+'ex;ga'+_0xbd7aa9(0x198)+_0xbd7aa9(0x7a3)+_0xbd7aa9(0x40f)+_0xbd7aa9(0x586)+_0xbd7aa9(0x463)+_0xbd7aa9(0x592)+_0xbd7aa9(0xb53)+_0xbd7aa9(0x228)+'max-w'+_0xbd7aa9(0x2c9)+_0xbd7aa9(0x770)+_0xbd7aa9(0xc87),'JOnQz':_0xbd7aa9(0x3ef)+_0xbd7aa9(0xa2e)+'b>','xCPih':_0xbd7aa9(0xd11)+_0xbd7aa9(0xcbd)+'ef5;b'+_0xbd7aa9(0xb9f)+_0xbd7aa9(0xc03)+'us:6p'+'x;pad'+_0xbd7aa9(0x88b)+_0xbd7aa9(0x9e1)+_0xbd7aa9(0x935)+'rsor:'+'point'+'er;fo'+_0xbd7aa9(0xca2)+'herit'+_0xbd7aa9(0x637)+_0xbd7aa9(0x8c3)+_0xbd7aa9(0xb58)+'utton'+'>','xxSYC':'color'+_0xbd7aa9(0xcbd)+_0xbd7aa9(0x2f0)+_0xbd7aa9(0xb9f)+_0xbd7aa9(0xc03)+_0xbd7aa9(0xa6c)+_0xbd7aa9(0x6be)+_0xbd7aa9(0x88b)+_0xbd7aa9(0xa96)+_0xbd7aa9(0x935)+'rsor:'+_0xbd7aa9(0xd81)+'er;fo'+_0xbd7aa9(0xca2)+_0xbd7aa9(0x5e5)+_0xbd7aa9(0xa67)+_0xbd7aa9(0x6cf)+_0xbd7aa9(0x161)+_0xbd7aa9(0x4ab),'yTrGw':'color'+_0xbd7aa9(0xcbd)+_0xbd7aa9(0x2f0)+'order'+'-radi'+_0xbd7aa9(0xa6c)+_0xbd7aa9(0x6be)+_0xbd7aa9(0x88b)+'2px\x207'+'px;cu'+'rsor:'+_0xbd7aa9(0xd81)+_0xbd7aa9(0x715)+_0xbd7aa9(0xca2)+_0xbd7aa9(0x5e5)+';\x22>Sn'+_0xbd7aa9(0xaf5)+_0xbd7aa9(0x5bc)+'>','zygEt':'</div'+'>','HFxYG':_0xbd7aa9(0xcb2),'ETHjz':function(_0x9fb46a,_0x28c133){return _0x9fb46a(_0x28c133);},'XRDwT':_0xbd7aa9(0x9e8),'ZLgPb':_0xbd7aa9(0x3cf)+_0xbd7aa9(0x568)+_0xbd7aa9(0x8dd)+'rame\x20'+'HUD\x20d'+'isabl'+'ed','pnzbO':'dyQRk','XkRCE':_0xbd7aa9(0x1e2),'gksxH':'1|2|6'+'|3|0|'+'5|4','qEarD':function(_0xf4f642,_0x2e0e69){return _0xf4f642!==_0x2e0e69;},'mDIjk':_0xbd7aa9(0x9ab)+'ap','RgkNN':_0xbd7aa9(0xc20)+_0xbd7aa9(0x874)+_0xbd7aa9(0x286),'lmOAJ':_0xbd7aa9(0xa56),'flRRO':function(_0x3b0c1a,_0x40d9e4){return _0x3b0c1a===_0x40d9e4;},'qakZA':'fclRV','tkFMP':'ASqQG','JOUXW':_0xbd7aa9(0x63a)+'3|0|8'+_0xbd7aa9(0x1e0)+_0xbd7aa9(0x20b)+'|2','GoHbV':function(_0x2fbd1b,_0x2853a0){return _0x2fbd1b+_0x2853a0;},'OpNcI':'PLAYE'+'RS\x20','hOCzB':function(_0x5d966b,_0x4a3f48){return _0x5d966b+_0x4a3f48;},'PqtrJ':_0xbd7aa9(0x32b),'llunD':function(_0x35cb53,_0xa106ae){return _0x35cb53+_0xa106ae;},'bcxvw':function(_0x28934a,_0x1c39ff){return _0x28934a+_0x1c39ff;},'QRUVQ':_0xbd7aa9(0x2b5)+_0xbd7aa9(0xd7c)+'\x20yet\x20'+'(lobb'+_0xbd7aa9(0xaf9)+_0xbd7aa9(0x4f5),'wePTr':'#8d7a'+'99','ZDQUV':function(_0x4d853c,_0x39e660){return _0x4d853c+_0x39e660;},'Gbfee':function(_0x58a233,_0x2b848a){return _0x58a233+_0x2b848a;},'CsFjj':function(_0x1ff237,_0x2150de){return _0x1ff237+_0x2150de;},'GteIu':_0xbd7aa9(0x97a)+'s\x20','JUnvG':'no-me'+'m','BaUyr':function(_0x562dc8,_0xe2a741){return _0x562dc8+_0xe2a741;},'uSqKj':'sHsaF','vZjdc':function(_0xb51829,_0x1d495f){return _0xb51829===_0x1d495f;},'XpBDu':function(_0x33f4b7,_0x157540){return _0x33f4b7===_0x157540;},'sviJj':function(_0x32d522,_0x15c264){return _0x32d522===_0x15c264;},'reZOX':_0xbd7aa9(0x369)+'t','ZlPga':'VbzkQ','nUQZD':_0xbd7aa9(0xa4d),'kuAwO':function(_0x1a24db){return _0x1a24db();},'ciknX':function(_0x5a55b5,_0x4875c3){return _0x5a55b5<_0x4875c3;},'tyLBZ':function(_0x444059,_0x523404){return _0x444059+_0x523404;},'WavDK':function(_0x15001d,_0x2c265f){return _0x15001d<_0x2c265f;},'WuOHK':'f32','SasAK':function(_0x18eaf1,_0x4d46d7){return _0x18eaf1(_0x4d46d7);},'Bmfyv':_0xbd7aa9(0x380)+'f5','yIiMF':function(_0x4a5fe4,_0x29c5c8){return _0x4a5fe4(_0x29c5c8);},'ZTWpG':_0xbd7aa9(0xd21),'GMsmm':function(_0x179ab6){return _0x179ab6();},'eYnNK':_0xbd7aa9(0xa21),'yLINP':function(_0x599252,_0x5220d1){return _0x599252<_0x5220d1;},'zxXaH':function(_0x53477e,_0x3f9435){return _0x53477e+_0x3f9435;},'rbFBw':'BNzAY','pMjxj':'MRtei','RaTbU':_0xbd7aa9(0x70d),'YUmPw':'JqlOK','Ewmvt':function(_0xa5841e,_0x4e42a2){return _0xa5841e*_0x4e42a2;},'kytGf':function(_0x58eebd,_0x28d5a1){return _0x58eebd*_0x28d5a1;},'zedSW':function(_0x1e4abc,_0x5e6fd5){return _0x1e4abc*_0x5e6fd5;},'LnIEf':function(_0x3bfe1d,_0x35f71a){return _0x3bfe1d+_0x35f71a;},'PHjSr':function(_0x2a05c2,_0x152998){return _0x2a05c2-_0x152998;},'rNDXS':function(_0x2150cc,_0xc97e90){return _0x2150cc*_0xc97e90;},'WrTOe':function(_0x5958fc,_0x23f678){return _0x5958fc-_0x23f678;},'yDnBO':function(_0x500624,_0x4ba50f){return _0x500624*_0x4ba50f;},'LzVpJ':function(_0x55aa23,_0x17b1e8){return _0x55aa23-_0x17b1e8;},'epGSY':'27|32'+'|26|1'+'5|16|'+_0xbd7aa9(0x367)+'|5|7|'+'2|28|'+_0xbd7aa9(0x1af)+_0xbd7aa9(0xb11)+'|1|3|'+'0|25|'+_0xbd7aa9(0x9a9)+_0xbd7aa9(0x2a7)+'|24|2'+'2|9|1'+_0xbd7aa9(0x272)+_0xbd7aa9(0x6e5)+'|6|11'+'|20','zPcKg':function(_0x78519e,_0x5d31cc,_0x4c7676,_0x1e0c12){return _0x78519e(_0x5d31cc,_0x4c7676,_0x1e0c12);},'dQxok':function(_0x58e4a6,_0x3ab8ec){return _0x58e4a6!==_0x3ab8ec;},'TmSeD':function(_0x3b3ce7,_0x5b63ce){return _0x3b3ce7+_0x5b63ce;},'HspFN':'Compo'+'nent.'+'get_t'+_0xbd7aa9(0xd2a)+_0xbd7aa9(0x2ff)+_0xbd7aa9(0xd0f)+_0xbd7aa9(0xbad),'tDgTW':function(_0x531739,_0x4970d6,_0x3a332c){return _0x531739(_0x4970d6,_0x3a332c);},'kUrZL':function(_0x5a80a9,_0x5a034e){return _0x5a80a9+_0x5a034e;},'HzdFV':_0xbd7aa9(0x5a6)+_0xbd7aa9(0x688),'nnRXN':_0xbd7aa9(0x17d)+_0xbd7aa9(0x8ea)+'\x20buff'+'er','JGHJv':'camer'+_0xbd7aa9(0x6a9)+_0xbd7aa9(0x274),'XMreu':function(_0x2617c7,_0x24ba82){return _0x2617c7+_0x24ba82;},'DlaSx':function(_0x175694,_0x2cf9ad){return _0x175694+_0x2cf9ad;},'ClRCV':_0xbd7aa9(0x9b8)+_0xbd7aa9(0x908)+'nusab'+_0xbd7aa9(0x74b)+_0xbd7aa9(0x884),'fqnnY':_0xbd7aa9(0x442)+_0xbd7aa9(0x790)+'ly','EtGsw':function(_0x2ef4c0,_0x5f557e){return _0x2ef4c0<_0x5f557e;},'RLOUz':_0xbd7aa9(0xc74)+_0xbd7aa9(0x1a1)+_0xbd7aa9(0x604)+'stanc'+'e','qtazl':'get_f'+_0xbd7aa9(0xda6)+'fView','YUOBS':function(_0x97d23a,_0x3380c7){return _0x97d23a>_0x3380c7;},'CXIZj':function(_0x33f857,_0x255922){return _0x33f857(_0x255922);},'DqrNb':function(_0x18cefc,_0x3a087a){return _0x18cefc<_0x3a087a;},'oCDEA':function(_0x1bb8f8,_0x1e256c){return _0x1bb8f8<_0x1e256c;},'kMvhU':function(_0x3020eb,_0x20dfac){return _0x3020eb*_0x20dfac;},'iTcwX':'oyKMb','LBXDb':function(_0x1a3635,_0x3aac4d){return _0x1a3635+_0x3aac4d;},'WNXZe':function(_0x192b40,_0x59dc2a){return _0x192b40!==_0x59dc2a;},'mYtxT':_0xbd7aa9(0x162),'QpVwe':_0xbd7aa9(0x9a4),'fMKvU':function(_0x4f9ca2,_0x45b7fe,_0x17d0fb){return _0x4f9ca2(_0x45b7fe,_0x17d0fb);},'psRKC':function(_0x59dcbc,_0x5ccafe){return _0x59dcbc+_0x5ccafe;},'fMYnb':function(_0x1a31ad,_0x37ee9f){return _0x1a31ad-_0x37ee9f;},'tzaEV':function(_0x1470f9,_0x48abd0){return _0x1470f9/_0x48abd0;},'ZkBLD':function(_0x172f14,_0x1c36f8){return _0x172f14!==_0x1c36f8;},'gzwMU':function(_0x120385,_0x242309){return _0x120385!==_0x242309;},'BkIDE':function(_0x56a65,_0x56fb5b){return _0x56a65+_0x56fb5b;},'gTnuL':'sette'+_0xbd7aa9(0x9d4)+_0xbd7aa9(0x639),'pXqRO':_0xbd7aa9(0x437)+'r','dIVSN':function(_0x2b3d05,_0x563f40){return _0x2b3d05!==_0x563f40;},'vzUDu':'OZsrF','aWEAL':_0xbd7aa9(0x882),'WdBQF':function(_0x591a84){return _0x591a84();},'tjLNu':_0xbd7aa9(0x94b),'WbImV':_0xbd7aa9(0xac0)+_0xbd7aa9(0x6fc)+_0xbd7aa9(0x293)+'|4','igYDd':function(_0x2ad1e1,_0x5a66df){return _0x2ad1e1*_0x5a66df;},'rEIjg':function(_0x1c327e,_0x475554){return _0x1c327e-_0x475554;},'dkVAK':function(_0xd8d707){return _0xd8d707();},'ptqBa':function(_0x1905ad,_0x5ca54a){return _0x1905ad*_0x5ca54a;},'GfgnU':function(_0x16f575,_0x15f25e){return _0x16f575/_0x15f25e;},'ruXRR':function(_0x52719e,_0x43e1ad){return _0x52719e/_0x43e1ad;},'uNIVN':function(_0x1d8336,_0x326d71){return _0x1d8336!=_0x326d71;},'YhPyS':'sk-ca'+_0xbd7aa9(0x60a)+'ad','MennC':_0xbd7aa9(0x1e8)+'ong>','GrqKn':'false','MakLy':function(_0x1832f1,_0x3c4ccd){return _0x1832f1(_0x3c4ccd);},'RdQIs':'butto'+'n','SYHWM':_0xbd7aa9(0x96e)+_0xbd7aa9(0x187),'SQhXE':function(_0x49421b){return _0x49421b();},'TRmzN':_0xbd7aa9(0xa36),'xRCeg':'1|2|4'+_0xbd7aa9(0x81a),'nBEPf':function(_0x126d78,_0x7064d1){return _0x126d78-_0x7064d1;},'gXJIh':function(_0x5db5eb,_0x2388a7){return _0x5db5eb(_0x2388a7);},'RNDYz':'sk-va'+'l','WwBME':function(_0x352122,_0x4366cc,_0xae1373){return _0x352122(_0x4366cc,_0xae1373);},'BNVxv':_0xbd7aa9(0x3f3)+_0xbd7aa9(0x8ad),'XMvzx':function(_0x138500,_0x585c5f){return _0x138500+_0x585c5f;},'UHwMv':'HFQgB','KWPAW':_0xbd7aa9(0x2e9),'VqAoD':function(_0x536215,_0x520582){return _0x536215===_0x520582;},'GuZDu':function(_0x30010a,_0xab2a04){return _0x30010a+_0xab2a04;},'rXYcB':function(_0x2e80dc,_0x31d638){return _0x2e80dc+_0x31d638;},'nOcZd':_0xbd7aa9(0x124),'HTVmq':'\x20fiel'+'ds\x20·\x20','Xtgjl':function(_0xba2b14,_0x10e660){return _0xba2b14===_0x10e660;},'lbUQT':_0xbd7aa9(0xbac),'jeSjn':function(_0x394045){return _0x394045();},'YDBUr':'FUfWA','qEhGW':function(_0xb1e55f,_0x5d1db8,_0x14ece8){return _0xb1e55f(_0x5d1db8,_0x14ece8);},'KdgYe':'syTcv','kPSuD':_0xbd7aa9(0xb64),'HREdZ':'sk-md'+'esc','WRfMZ':function(_0x51c608,_0x8bce6c){return _0x51c608+_0x8bce6c;},'BvnCa':function(_0xa636da,_0x299bb5){return _0xa636da+_0x299bb5;},'YXuiy':function(_0xa2963a,_0x5960b5){return _0xa2963a+_0x5960b5;},'uIzfY':_0xbd7aa9(0x9a2)+'es','zEsYw':'Multi'+_0xbd7aa9(0xd1d)+_0xbd7aa9(0x33d)+_0xbd7aa9(0xc16)+_0xbd7aa9(0xcc4)+_0xbd7aa9(0xd91)+'ds\x20on'+'ly.\x20H'+'eight'+_0xbd7aa9(0x7c1)+_0xbd7aa9(0xcd9)+_0xbd7aa9(0x474)+'\x20are\x20'+'refus'+'ed.','lkGFp':_0xbd7aa9(0x3fe)+'ed','ieeKA':function(_0x4f08cc,_0x1817e9,_0x1cb488){return _0x4f08cc(_0x1817e9,_0x1cb488);},'nDMRd':function(_0x2cde0d,_0x4164c7,_0x3a85ce,_0x223cca){return _0x2cde0d(_0x4164c7,_0x3a85ce,_0x223cca);},'QrGxH':function(_0x9ad841,_0x21fbb2){return _0x9ad841+_0x21fbb2;},'XPlwn':function(_0x33388d,_0x482b8f){return _0x33388d(_0x482b8f);},'kAcNo':'World'+'-spac'+_0xbd7aa9(0xd6d)+_0xbd7aa9(0x97e)+_0xbd7aa9(0xa63)+_0xbd7aa9(0x8b3)+'.\x20Nee'+_0xbd7aa9(0x82c)+_0xbd7aa9(0xa40)+'sitio'+'ns.','FMPBf':_0xbd7aa9(0xca7),'eXnyZ':function(_0x4b79b3,_0x5f1656,_0x46ebfc){return _0x4b79b3(_0x5f1656,_0x46ebfc);},'QBlao':function(_0x122d1d,_0xa6d1ee){return _0x122d1d(_0xa6d1ee);},'QrnMD':function(_0x386805,_0x2dbb86){return _0x386805+_0x2dbb86;},'ghjPw':_0xbd7aa9(0xcb3)+'ese\x20t'+_0xbd7aa9(0x7ab)+'oats\x20'+_0xbd7aa9(0x259)+'ot\x20pi'+'tch\x20a'+_0xbd7aa9(0x29c)+'w.\x20Pr'+'ess\x20F'+'9,\x20tu'+'rn\x20ab'+_0xbd7aa9(0x552)+'0°,\x20p'+'ress\x20'+'F9.','Llwur':_0xbd7aa9(0x2df)+'tside'+_0xbd7aa9(0xa25)+_0xbd7aa9(0xbd6)+_0xbd7aa9(0xb0e)+_0xbd7aa9(0x843)+_0xbd7aa9(0x450)+_0xbd7aa9(0x16a)+'.','LFLdt':'Scree'+_0xbd7aa9(0xb43)+'ce\x20bo'+_0xbd7aa9(0x407)+'The\x20f'+'ield\x20'+_0xbd7aa9(0x2aa)+'ew\x20ca'+_0xbd7aa9(0xad3)+_0xbd7aa9(0x17a)+_0xbd7aa9(0x520)+_0xbd7aa9(0x75b)+'is\x20bu'+'ild,\x20'+_0xbd7aa9(0x24f)+_0xbd7aa9(0x7f6)+_0xbd7aa9(0xc35)+'\x20by\x20e'+'ye.','guqAr':'click','JdwaY':function(_0x63235b,_0x16dc0c,_0x36573b,_0x3f370a){return _0x63235b(_0x16dc0c,_0x36573b,_0x3f370a);},'ooWaF':function(_0x5d9f14,_0x29022b){return _0x5d9f14+_0x29022b;},'AHVRd':'view:'+'\x20','VVMpZ':function(_0x25097a,_0x396641){return _0x25097a+_0x396641;},'vrseX':_0xbd7aa9(0xc74)+'useLo'+'ok\x20ye'+'t','uWEyZ':'sette'+_0xbd7aa9(0x9d4)+'r','qnBaG':function(_0x430977,_0x43947a){return _0x430977+_0x43947a;},'qcSUU':_0xbd7aa9(0xa16)+'SetLo'+'okAng'+_0xbd7aa9(0x6df),'fHPLh':_0xbd7aa9(0xb4c)+'h\x20','gbDhh':function(_0x1d8a18,_0x5c367c){return _0x1d8a18+_0x5c367c;},'nZltm':function(_0x4d298e,_0x5e9e7e){return _0x4d298e+_0x5e9e7e;},'NxUYg':_0xbd7aa9(0x211),'IXOFK':function(_0x35b2fe,_0x45c8c3){return _0x35b2fe+_0x45c8c3;},'SeLFj':_0xbd7aa9(0x91a)+_0xbd7aa9(0x173)+_0xbd7aa9(0x5f0)+'ed\x20bu'+_0xbd7aa9(0x807)+'e\x20app'+_0xbd7aa9(0x78a)+'(','ssYfN':_0xbd7aa9(0xb38)+_0xbd7aa9(0x46c),'laTWM':_0xbd7aa9(0x466)+_0xbd7aa9(0x922)+'a\x20sta'+_0xbd7aa9(0xa33)+'ved\x20c'+_0xbd7aa9(0x445)+_0xbd7aa9(0x3f6),'SGYPX':'Hooks','pgVcx':'appli'+_0xbd7aa9(0xaed)+_0xbd7aa9(0x547)+_0xbd7aa9(0x206),'SxtYJ':_0xbd7aa9(0xca3),'rAECJ':_0xbd7aa9(0x1b0),'eFtqB':function(_0x26df2e,_0x34037a){return _0x26df2e+_0x34037a;},'MlRcB':'every'+'one\x20b'+_0xbd7aa9(0x5bd)+'u','BugfW':function(_0x4d738,_0x27c0c6){return _0x4d738+_0x27c0c6;},'zlFHq':function(_0x177c18,_0x475dbc){return _0x177c18<_0x475dbc;},'nmDsR':function(_0x3777ed,_0x3e38ee){return _0x3777ed(_0x3e38ee);},'Gwojp':_0xbd7aa9(0x8b3),'lgopj':'FPSco'+_0xbd7aa9(0xd56)+_0xbd7aa9(0xab9),'OeHHK':_0xbd7aa9(0x6c3),'UjTtE':function(_0x2716fb,_0x40edab){return _0x2716fb+_0x40edab;},'ezDgY':function(_0x5f5503,_0x5d0805){return _0x5f5503+_0x5d0805;},'hLniR':'Walk\x20'+'speed','iHoXR':_0xbd7aa9(0xd8d),'tDJef':_0xbd7aa9(0xbd2)+_0xbd7aa9(0xb33)+'ed','ynYMQ':_0xbd7aa9(0x170)+_0xbd7aa9(0x914)+_0xbd7aa9(0x41a)+'C0','dGPse':_0xbd7aa9(0xbe1)+'t','chYCu':_0xbd7aa9(0x80a)+_0xbd7aa9(0x68a)+_0xbd7aa9(0x66c)+_0xbd7aa9(0xced)+'rd','gEzzv':'tbFLF','RelDR':function(_0x4152cb,_0x2d0a67){return _0x4152cb!==_0x2d0a67;},'EvqeJ':function(_0x2ed7f,_0x1ee576){return _0x2ed7f===_0x1ee576;},'GSGga':function(_0x5c0076,_0xce36a3){return _0x5c0076+_0xce36a3;},'YrYru':function(_0x66790a,_0x42ff2b){return _0x66790a===_0x42ff2b;},'AgbDv':_0xbd7aa9(0x509),'QbGjn':'24px','yUFEj':_0xbd7aa9(0xd41),'sGlnr':'nrXtH','TWnhi':'grab','aFgRL':function(_0x3de313){return _0x3de313();},'YaeDX':_0xbd7aa9(0xb92)+_0xbd7aa9(0x3ae),'tWwsm':'mouse'+_0xbd7aa9(0x308),'nWSSl':'touch'+_0xbd7aa9(0x572),'qezDI':function(_0x21ab8b,_0x81928a){return _0x21ab8b!==_0x81928a;},'HjMZQ':_0xbd7aa9(0x233),'BzGqJ':_0xbd7aa9(0x758)+_0xbd7aa9(0x73c)+'llWar'+'z\x20(In'+'sert)','agevQ':_0xbd7aa9(0x758)+_0xbd7aa9(0x73c)+'llWar'+'z\x20-\x20w'+_0xbd7aa9(0x973)+_0xbd7aa9(0x58c)+'\x20the\x20'+'game\x20'+_0xbd7aa9(0x4f4)+_0xbd7aa9(0x356),'ZndEM':'VWjfU','IZUUN':function(_0x5a6eec,_0x5b7a57){return _0x5a6eec+_0x5b7a57;},'GjunD':_0xbd7aa9(0x219),'MhHdO':_0xbd7aa9(0x7f2)+'a-men'+_0xbd7aa9(0x9e3)+'t','PeojI':'mn-si'+'de','GwNda':_0xbd7aa9(0x14d)+'in','ChJMT':function(_0x3aa750,_0x5d7f31,_0x5a16b8){return _0x3aa750(_0x5d7f31,_0x5a16b8);},'FngWC':function(_0x509aa9,_0x54fbb5,_0x4908e1,_0x326029){return _0x509aa9(_0x54fbb5,_0x4908e1,_0x326029);},'Ouuqn':'mn-h','PWxUH':'Sakur'+'a\x20Ski'+'llWar'+'z','kmFUb':function(_0x37ab33,_0xf0790e,_0x495348,_0x388ff9){return _0x37ab33(_0xf0790e,_0x495348,_0x388ff9);},'oTKBA':_0xbd7aa9(0xab7)+'viewB'+_0xbd7aa9(0x71c)+'\x200\x2024'+_0xbd7aa9(0xd0a)+_0xbd7aa9(0x862)+'\x20d=\x22M'+_0xbd7aa9(0xbe4)+_0xbd7aa9(0x534)+_0xbd7aa9(0xaa6)+_0xbd7aa9(0xbf6)+'/></s'+_0xbd7aa9(0xb40),'KIeOe':function(_0x3814c8,_0x5a8007){return _0x3814c8+_0x5a8007;},'KPSiW':function(_0x34efcc,_0x2a6cb4){return _0x34efcc+_0x2a6cb4;},'scTPo':'<smal'+'l>','xOiif':'sakur'+'a-pet'+'al','mdHWz':'hNvfZ','GZnTH':_0xbd7aa9(0x3cf)+_0xbd7aa9(0x568)+_0xbd7aa9(0xa0b)+_0xbd7aa9(0x9fd)+_0xbd7aa9(0x4a1)+'le','psXbK':'sakur'+'a-esp','TDeLc':function(_0x33efc5,_0x42a489){return _0x33efc5+_0x42a489;},'gJXIt':function(_0x21cb76,_0x550e9e){return _0x21cb76+_0x550e9e;},'zjTXH':function(_0x521fd6,_0x28f8f8){return _0x521fd6+_0x28f8f8;},'BSVyl':'posit'+_0xbd7aa9(0x573)+'ixed;'+'right'+':12px'+';top:'+_0xbd7aa9(0x5e6)+'z-ind'+_0xbd7aa9(0x839)+'47483'+'646;p'+_0xbd7aa9(0x14a)+_0xbd7aa9(0xcd5)+'nts:n'+_0xbd7aa9(0x4b7),'euVAi':_0xbd7aa9(0x166)+_0xbd7aa9(0xbda)+_0xbd7aa9(0xd12)+_0xbd7aa9(0x459)+'2,29,'+_0xbd7aa9(0xd4a)+_0xbd7aa9(0x8c6)+_0xbd7aa9(0xd28)+_0xbd7aa9(0xc1b)+_0xbd7aa9(0x1c4)+_0xbd7aa9(0x5fc)+_0xbd7aa9(0xb2f)+'177,.'+_0xbd7aa9(0x80f)+_0xbd7aa9(0xc12)+'radiu'+_0xbd7aa9(0x64d)+'x;','bkdYL':_0xbd7aa9(0x822)+_0xbd7aa9(0xdb1)+_0xbd7aa9(0xc01)+_0xbd7aa9(0x1ae)+'x/1.3'+'\x20ui-m'+_0xbd7aa9(0x858)+'ace,C'+_0xbd7aa9(0x92f)+_0xbd7aa9(0x44b)+_0xbd7aa9(0x5ae)+_0xbd7aa9(0xd68)+'lor:#'+'bda9c'+'9;','kwxNf':_0xbd7aa9(0xcfd)+_0xbd7aa9(0x381)+_0xbd7aa9(0xa05)+_0xbd7aa9(0xd39)+_0xbd7aa9(0x3c0)+_0xbd7aa9(0xcfd)+'selec'+'t:non'+'e;','Jdhfk':_0xbd7aa9(0xbd9)+_0xbd7aa9(0xb35)+'=\x22sak'+_0xbd7aa9(0xc6e)+'sp-cv'+_0xbd7aa9(0x499)+'th=\x221'+_0xbd7aa9(0x791)+'eight'+'=\x22160'+_0xbd7aa9(0x3db)+_0xbd7aa9(0xd82)+_0xbd7aa9(0x1e9)+'y:blo'+_0xbd7aa9(0xaf3)+_0xbd7aa9(0x7ac)+'as>','Vrynx':_0xbd7aa9(0x1b4)+'id=\x22s'+_0xbd7aa9(0xa90)+'-esp-'+'lg\x22\x20s'+_0xbd7aa9(0x511)+_0xbd7aa9(0x901)+_0xbd7aa9(0xbc0)+_0xbd7aa9(0x5bf)+_0xbd7aa9(0xd58)+'</div'+'>','BspEc':function(_0x5e867f,_0x4251c3){return _0x5e867f!==_0x4251c3;},'yEDzL':'\x20acti'+'ve','aivGQ':_0xbd7aa9(0x2e0),'katVa':function(_0x3efd2a,_0x3926a4){return _0x3efd2a+_0x3926a4;},'WqUUf':'mn-pa'+_0xbd7aa9(0x4c5),'NbwvZ':_0xbd7aa9(0xa98)+'n','SCBLb':function(_0x274326,_0x59f71a){return _0x274326(_0x59f71a);},'ZDUMf':function(_0x4ae160,_0x488635){return _0x4ae160<_0x488635;},'AVZmt':function(_0x37e182,_0x3f7215){return _0x37e182(_0x3f7215);},'XtjLV':function(_0x45effa,_0x4f60dc){return _0x45effa===_0x4f60dc;},'tFySg':'speed','ZGMKu':function(_0x45d54a){return _0x45d54a();},'AYOql':function(_0x296c55,_0x85aeba){return _0x296c55!==_0x85aeba;},'KnQHD':function(_0x433ab4,_0x5c7d7f){return _0x433ab4+_0x5c7d7f;},'bERcM':function(_0x52df3c){return _0x52df3c();},'qDUGT':'VNKEw','WvlWS':_0xbd7aa9(0xbf5),'NAHTJ':_0xbd7aa9(0xa83),'xUSKc':function(_0x4d74ba,_0x3b830b){return _0x4d74ba<_0x3b830b;},'JQPSr':'vfRta','JbBJC':function(_0x5d9ede,_0x5184c5){return _0x5d9ede!==_0x5184c5;},'wdYrj':_0xbd7aa9(0x988),'yQwUd':function(_0x420de2,_0x94a854){return _0x420de2+_0x94a854;},'XOOcY':function(_0x45c402,_0x588cf7){return _0x45c402+_0x588cf7;},'TViav':function(_0x4eb681,_0x446bf1){return _0x4eb681+_0x446bf1;},'HkPLf':_0xbd7aa9(0x4fc)+_0xbd7aa9(0xa23)+'r\x20the'+_0xbd7aa9(0xa52)+'t\x20rep'+_0xbd7aa9(0x3d1),'UUeqK':function(_0x1cb334,_0x2c90dd){return _0x1cb334===_0x2c90dd;},'xpRYM':_0xbd7aa9(0xa16)+_0xbd7aa9(0xad6)+_0xbd7aa9(0x152)+'e()','jiAIE':function(_0x226b9b,_0x3e97ff){return _0x226b9b+_0x3e97ff;},'VldXx':'off\x20t'+_0xbd7aa9(0xa71)+'ve\x20ma'+_0xbd7aa9(0x7ce),'vKeuE':function(_0x22625c,_0x1950e2){return _0x22625c+_0x1950e2;},'PzDFy':'FPSco'+'ntrol'+'ler+0'+_0xbd7aa9(0xd30),'dZWTy':_0xbd7aa9(0x170)+'h','tNIoi':function(_0x289a3c,_0x6b1459,_0x3464f1){return _0x289a3c(_0x6b1459,_0x3464f1);},'TFeUy':_0xbd7aa9(0x588),'Uylkz':function(_0x57be6e){return _0x57be6e();},'rhrga':'NdvGl','JQNOG':function(_0x3ba1f7,_0x229d97){return _0x3ba1f7*_0x229d97;},'TMJzV':function(_0x2fabd2,_0x21c8b7){return _0x2fabd2+_0x21c8b7;},'UNvhN':function(_0x298808,_0x8cbc7d){return _0x298808+_0x8cbc7d;},'uaPNc':function(_0x318b4e,_0x2fa89c){return _0x318b4e+_0x2fa89c;},'HOnjN':_0xbd7aa9(0x705)+'le=','ycohr':function(_0x15332a,_0x5347cb){return _0x15332a===_0x5347cb;},'QhANI':function(_0x360679,_0x3c6e45){return _0x360679-_0x3c6e45;},'BmJIH':function(_0x463398,_0x529575){return _0x463398<_0x529575;},'IfniV':function(_0x38c4fb,_0xcdb518){return _0x38c4fb<_0xcdb518;},'qGoLy':_0xbd7aa9(0xc43),'MbUYg':function(_0x1ccda5,_0x48b043){return _0x1ccda5>_0x48b043;},'oUazB':function(_0x3aa3f6,_0x1e8af4){return _0x3aa3f6<_0x1e8af4;},'msmiB':function(_0x1b247d,_0x14be9a){return _0x1b247d!==_0x14be9a;},'YtlhN':_0xbd7aa9(0x913)+'OS>>','IVpgb':function(_0x22b369,_0x42d370){return _0x22b369(_0x42d370);},'YuPcB':'\x20|\x20','smAdB':'ErNkb','ALyjG':function(_0x34713a,_0x848a1e){return _0x34713a===_0x848a1e;},'YOKKa':_0xbd7aa9(0x429),'NiyTT':function(_0x5033b3,_0x2d62d4,_0x3cdbb5,_0x29c3e0){return _0x5033b3(_0x2d62d4,_0x3cdbb5,_0x29c3e0);},'iVxMh':_0xbd7aa9(0x554)+_0xbd7aa9(0x4d9),'DYRYY':_0xbd7aa9(0x7f2)+'a-sw-'+_0xbd7aa9(0x43b)+'s','bTmrQ':function(_0x240007,_0x2823cc){return _0x240007!==_0x2823cc;},'pQiyk':_0xbd7aa9(0x924),'FwfYC':function(_0x35681a,_0x21f48e){return _0x35681a<_0x21f48e;},'RuVro':function(_0x5901fc,_0x4544bb){return _0x5901fc!==_0x4544bb;},'wQfzr':'QMoBG','XuyWM':function(_0x6fc6ad,_0x239d7c,_0x23b5b8){return _0x6fc6ad(_0x239d7c,_0x23b5b8);},'eLlMf':function(_0x5398ed,_0xa83708){return _0x5398ed!==_0xa83708;},'vdSPt':'YAiZD','eqOSg':function(_0x4206c1,_0x28e463){return _0x4206c1+_0x28e463;},'zZHwn':function(_0x4197b4,_0x495062){return _0x4197b4+_0x495062;},'WrxXW':'#saku'+_0xbd7aa9(0x277)+'p-lg','UBZVr':'canva'+'s','zCVCw':function(_0x432c8c,_0x315653){return _0x432c8c/_0x315653;},'SawuV':function(_0x393162){return _0x393162();},'jZsca':function(_0x4698e0,_0x480421){return _0x4698e0<_0x480421;},'IXMLQ':function(_0x43f76a,_0x3de325){return _0x43f76a-_0x3de325;},'DOuCt':function(_0x923bcb,_0x50241a){return _0x923bcb-_0x50241a;},'uPNZR':function(_0x16d893,_0xfccec2){return _0x16d893/_0xfccec2;},'YzwCG':function(_0x4bef72,_0x1d3185){return _0x4bef72*_0x1d3185;},'KdToW':function(_0x58ed91,_0x1e083d){return _0x58ed91===_0x1e083d;},'IrdYp':_0xbd7aa9(0xcf2),'LEPJz':_0xbd7aa9(0x5da),'bgUGB':function(_0x3868d3,_0x2a275f){return _0x3868d3*_0x2a275f;},'eLBpy':function(_0x15aeb3,_0x6cb57f){return _0x15aeb3/_0x6cb57f;},'tcNxT':_0xbd7aa9(0xab3),'nZFdh':function(_0x49ed99,_0x5e20ef){return _0x49ed99+_0x5e20ef;},'DcmGN':function(_0x50a198,_0xbbef6f){return _0x50a198/_0xbbef6f;},'dvhPK':function(_0x34f994,_0x27adf0){return _0x34f994*_0x27adf0;},'SDkLg':function(_0x138b95,_0x535b53){return _0x138b95/_0x535b53;},'MQBsf':function(_0x55a5d7,_0x55922b){return _0x55a5d7*_0x55922b;},'lhgvd':function(_0x5894ab){return _0x5894ab();},'JxtVL':function(_0x284294,_0x1496b2){return _0x284294<_0x1496b2;},'xEYiq':function(_0x3f0d84,_0x59a067){return _0x3f0d84===_0x59a067;},'XYdIo':_0xbd7aa9(0xb81),'Vmopx':function(_0x55092a,_0x1cb53e){return _0x55092a>_0x1cb53e;},'OaYHp':_0xbd7aa9(0x8a0)+_0xbd7aa9(0x9e4)+_0xbd7aa9(0x987)+_0xbd7aa9(0x829),'EZAYk':function(_0x2ba6e7,_0x25f01c){return _0x2ba6e7+_0x25f01c;},'LAxjp':function(_0x53a76f,_0x3b7f22){return _0x53a76f-_0x3b7f22;},'eNcpO':function(_0x4f8932,_0x117878){return _0x4f8932(_0x117878);},'oUCAp':function(_0x3fec2a,_0x526481){return _0x3fec2a<=_0x526481;},'uhZCC':function(_0x9c29c3,_0x50248b){return _0x9c29c3-_0x50248b;},'KhnWa':function(_0x13059f,_0x532730){return _0x13059f===_0x532730;},'llxXX':function(_0x13bf36,_0x4b5794){return _0x13bf36<_0x4b5794;},'pjTds':function(_0xcc47d8,_0x4d53f1){return _0xcc47d8*_0x4d53f1;},'CuOvg':function(_0x479c87,_0x49e41f){return _0x479c87-_0x49e41f;},'eIZWO':function(_0x5888c0,_0x1c348c){return _0x5888c0*_0x1c348c;},'OzuDs':function(_0x38bf58,_0x52729e){return _0x38bf58-_0x52729e;},'imETL':function(_0x2021e4,_0x1566c7){return _0x2021e4!==_0x1566c7;},'byxpA':'tBlon','aPelX':function(_0x4dad56,_0x949802){return _0x4dad56-_0x949802;},'GPJZk':function(_0x401bf2,_0x2c9751){return _0x401bf2*_0x2c9751;},'YydSf':function(_0x4edca5,_0x25aebe){return _0x4edca5-_0x25aebe;},'YXqVr':_0xbd7aa9(0x14b)+'6a','WTeGB':'#7ee0'+'a8','NxGqa':_0xbd7aa9(0x781),'FGwUL':function(_0x40f72e,_0x1fc78f){return _0x40f72e+_0x1fc78f;},'ZmPCu':_0xbd7aa9(0xd3b),'fxUEq':function(_0x25c619){return _0x25c619();},'sSUqt':function(_0x2f8aeb,_0xc34bcb){return _0x2f8aeb(_0xc34bcb);},'niBMT':function(_0x5c626e,_0x443cbd){return _0x5c626e===_0x443cbd;},'yLEwN':function(_0x179294,_0x413e2c,_0x1e6bf2){return _0x179294(_0x413e2c,_0x1e6bf2);},'EMIZe':function(_0xb5c1ad,_0x630878){return _0xb5c1ad===_0x630878;},'uATNB':_0xbd7aa9(0x4b1),'twCol':_0xbd7aa9(0x455),'OkZMG':function(_0x4b933b,_0x1b69ed){return _0x4b933b>=_0x1b69ed;},'YfTHZ':function(_0x4c3ac9,_0x140a70){return _0x4c3ac9+_0x140a70;},'HZuSY':function(_0x5b9689,_0xdc172){return _0x5b9689+_0xdc172;},'IUmIc':'bLEfh','wVhdY':function(_0x5cd8b0){return _0x5cd8b0();},'swgyQ':function(_0x153840){return _0x153840();},'Kcdgg':function(_0x157870,_0xb2749c){return _0x157870+_0xb2749c;},'wjgkz':_0xbd7aa9(0x627)+_0xbd7aa9(0x226)+_0xbd7aa9(0x13d)+_0xbd7aa9(0x7de),'jWkXH':_0xbd7aa9(0x1b7),'Dyika':function(_0x3664b3,_0x2dd80c){return _0x3664b3+_0x2dd80c;},'AFXrF':_0xbd7aa9(0xc22)+_0xbd7aa9(0xd79),'mwISe':'No\x20re'+'ad\x20fa'+_0xbd7aa9(0x49b)+_0xbd7aa9(0xac5)+'very\x20'+_0xbd7aa9(0xc79)+_0xbd7aa9(0x3ac)+_0xbd7aa9(0x83c)+_0xbd7aa9(0x941)+'y\x20typ'+'e.','gIWhh':_0xbd7aa9(0x18e)+_0xbd7aa9(0x634)+_0xbd7aa9(0x8b7)+_0xbd7aa9(0xa1e)+_0xbd7aa9(0xd18)+'ER\x20wi'+_0xbd7aa9(0x487)+_0xbd7aa9(0x72f)+_0xbd7aa9(0x5a4)+_0xbd7aa9(0x360)+'\x20The\x20'+'Runti'+_0xbd7aa9(0x179)+_0xbd7aa9(0xa77)+_0xbd7aa9(0xd54)+'\x20','LXpYc':'repla'+'ced\x20b'+_0xbd7aa9(0x54d)+_0xbd7aa9(0xc69)+'ent\x20i'+_0xbd7aa9(0xbeb)+_0xbd7aa9(0xb20)+'o\x20we\x20'+_0xbd7aa9(0x4bd)+_0xbd7aa9(0xb6e)+'\x20the\x20'+_0xbd7aa9(0xc5e)+_0xbd7aa9(0xaec)+'ct\x20fo'+'r\x20','dMvFC':_0xbd7aa9(0xac6)+'ame\x20w'+'hile\x20'+'the\x20o'+_0xbd7aa9(0x475)+_0xbd7aa9(0x4ff)+_0xbd7aa9(0x774)+'s\x20orp'+_0xbd7aa9(0x4a9)+_0xbd7aa9(0x4cb)+_0xbd7aa9(0xc9f)+_0xbd7aa9(0xaee)+_0xbd7aa9(0x6f7)+'r\x20','tdvYS':_0xbd7aa9(0xd9e)+_0xbd7aa9(0xd27)+'ntime'+_0xbd7aa9(0x22c)+_0xbd7aa9(0x805)+'ndow.'+_0xbd7aa9(0x72f)+'WebMo'+'dkit.'+'Runti'+'me\x20-\x20'+_0xbd7aa9(0xc48)+_0xbd7aa9(0x383)+_0xbd7aa9(0xcc3)+_0xbd7aa9(0x4dd)+'\x20','LvduZ':function(_0x5016a9,_0x413899){return _0x5016a9+_0x413899;},'AqELO':_0xbd7aa9(0x495)+'game\x20'+_0xbd7aa9(0xbb3)+'ved=','hybAg':_0xbd7aa9(0x458)+_0xbd7aa9(0xa25)+_0xbd7aa9(0x2c8)+'ence\x20'+_0xbd7aa9(0x620)+_0xbd7aa9(0x260)+_0xbd7aa9(0xa84)+'d\x20is\x20'+_0xbd7aa9(0x504)+'eacha'+_0xbd7aa9(0x965)+'ow.','EKbGg':_0xbd7aa9(0x72f)+'\x20inst'+_0xbd7aa9(0x30c)+'not\x20r'+_0xbd7aa9(0x993)+'ed\x20ye'+'t\x20(so'+'urce:'+'\x20','DbQpr':function(_0x1574da,_0x3be288){return _0x1574da===_0x3be288;},'nmhJp':'windo'+_0xbd7aa9(0x6bc)+'tyWeb'+_0xbd7aa9(0x8e5)+'t.Val'+_0xbd7aa9(0x614)+_0xbd7aa9(0x1e6)+_0xbd7aa9(0x3e4)+_0xbd7aa9(0x123)+_0xbd7aa9(0x97f)+_0xbd7aa9(0x19a)+'\x20is\x20r'+_0xbd7aa9(0x97c)+_0xbd7aa9(0x802)+'nd.','VlRbE':function(_0x3ce512,_0x2e4c3e){return _0x3ce512===_0x2e4c3e;},'noNrt':'zhpgp','cVxDO':function(_0x2e657c,_0x338688){return _0x2e657c!==_0x338688;},'AUNxi':_0xbd7aa9(0x72e),'ykFtt':_0xbd7aa9(0x3c5)+'(s)\x20d'+'uring'+_0xbd7aa9(0xb07)+'ng\x20at'+'\x20docu'+_0xbd7aa9(0xc16)+_0xbd7aa9(0x64e)+'.','ZeCIn':function(_0x3daa66,_0x2d6a5d){return _0x3daa66+_0x2d6a5d;},'FFPFA':function(_0x2c7f60,_0x515946){return _0x2c7f60+_0x515946;},'euNDw':_0xbd7aa9(0x5b1),'EHuUW':_0xbd7aa9(0x36e)+_0xbd7aa9(0x4c2)+_0xbd7aa9(0x255)+_0xbd7aa9(0xbfb)+_0xbd7aa9(0x366)+_0xbd7aa9(0x5a5)+'\x20or\x20t'+_0xbd7aa9(0xcd3)+'ok\x20is'+_0xbd7aa9(0x5ed)+'he\x20wr'+'ong\x20o'+'verlo'+_0xbd7aa9(0x414),'kyXJw':function(_0x4dd93e,_0x4744d3){return _0x4dd93e+_0x4744d3;},'fcRJy':_0xbd7aa9(0x8eb)+'lt\x20si'+'nce\x20f'+'irst\x20'+'captu'+_0xbd7aa9(0x7b9)+_0xbd7aa9(0xa1d)+'n?):\x20','vOomZ':function(_0x2ac521,_0x4cc720){return _0x2ac521+_0x4cc720;},'kviIY':function(_0x481ddc,_0x323f4d){return _0x481ddc(_0x323f4d);},'Qlyao':function(_0x29d548,_0x5cce69){return _0x29d548!==_0x5cce69;},'rngZo':_0xbd7aa9(0x597)+'ugin.'+_0xbd7aa9(0x4d3),'jmhIM':function(_0x22f116,_0x48fc85){return _0x22f116+_0x48fc85;},'TFkFn':_0xbd7aa9(0xcbb),'eQCdC':'OTDKS','lqoDw':function(_0x143f85){return _0x143f85();},'wTWQF':function(_0xe42e03,_0x499214){return _0xe42e03===_0x499214;},'toLfq':function(_0x157e8e,_0x459f0c){return _0x157e8e+_0x459f0c;},'qydMK':function(_0x398eb2,_0x4255b0){return _0x398eb2+_0x4255b0;},'IUesX':'so\x20ho'+_0xbd7aa9(0x7d4)+'egist'+_0xbd7aa9(0x52c)+_0xbd7aa9(0xd07)+_0xbd7aa9(0x9c5)+'re\x20ig'+_0xbd7aa9(0x7c2)+_0xbd7aa9(0x53c)+'the\x20l'+_0xbd7aa9(0xb8b)+'f\x20the'+'\x20page'+'.\x20','CLUzi':'Regis'+_0xbd7aa9(0x206)+'\x20','YXOei':_0xbd7aa9(0x627)+_0xbd7aa9(0xbb3)+_0xbd7aa9(0x6d8),'sjroM':'porta'+'l','utyWG':_0xbd7aa9(0x564)+'er','pGzUT':_0xbd7aa9(0x864)+_0xbd7aa9(0xb12)+'SKILL'+'WARZ-'+'END=='+'=','PycJm':_0xbd7aa9(0xcc6)+'0','OXWAP':_0xbd7aa9(0x200)+'ge','eqPIn':function(_0xc10500,_0x376b60){return _0xc10500+_0x376b60;},'SThNN':function(_0x315ff2,_0x513520){return _0x315ff2+_0x513520;},'VIHKo':';font'+'-weig'+_0xbd7aa9(0xae1)+_0xbd7aa9(0x3f5)+_0xbd7aa9(0xd66)+'e:14p'+'x','bbxnK':'hello','HfNat':'sakur'+_0xbd7aa9(0x522),'wIqEi':_0xbd7aa9(0x549)+'\u0086\u008f\u0089\u0095\u0090'+'\u0094','jxzMy':_0xbd7aa9(0xcaa)+_0xbd7aa9(0x6ab)+'\u008e','YKJMR':'float','DFdvO':'\u0086\u0093\u0094\u008b\u0092'+_0xbd7aa9(0x397)+'\u0095','jaNPm':_0xbd7aa9(0xa5c)+_0xbd7aa9(0xcf8)+'\u008f','osxLj':_0xbd7aa9(0x20f)+_0xbd7aa9(0x30d)+'\u0095','cqvMW':_0xbd7aa9(0x8a4)+_0xbd7aa9(0x67d)+'\u0091','bkUAr':_0xbd7aa9(0xc39)+'\u0093\u0091\u0089\u0088\u008d'+'\u008a','mjwLL':_0xbd7aa9(0x780)+_0xbd7aa9(0x443)+'\u0093','eTeLv':'\u008d\u0093\u0095\u008a\u0088'+_0xbd7aa9(0x512)+'\u008a','PyoTe':_0xbd7aa9(0x9be)+_0xbd7aa9(0xbcb)+'\u0086','BqSBO':'\u0093\u008c\u0091\u0091\u0093'+'\u0090\u0091\u008e\u008f\u0089'+'\u008e','JeRuz':_0xbd7aa9(0x556)+_0xbd7aa9(0x25e)+'\u008d','aYSRe':_0xbd7aa9(0x20c)+_0xbd7aa9(0x490)+'\u008a','eZQfM':'\u0087\u008f\u008d\u008b\u0092'+_0xbd7aa9(0xd57)+'\u008c','Fifjk':_0xbd7aa9(0xcf5)+_0xbd7aa9(0x3f0)+'\u0089','EJbyG':_0xbd7aa9(0xc62)+'\u0094\u0090\u0094\u008c\u0094'+'\u0094','NpJTx':'bool','NLEiX':'\u0090\u0092\u008e\u008e\u0087'+'\u008f\u008c\u0086\u0091\u0089'+'\u0093','fBEyj':'\u008e\u008b\u008e\u0091\u008c'+_0xbd7aa9(0x782)+'\u008a','fAcBc':'\u0089\u0088\u0093\u008b\u008b'+'\u008c\u0087\u0095\u0093\u008b'+'\u0094','wAhtf':_0xbd7aa9(0x461)+'\u008b\u008c\u0087\u008d\u0095'+'\u008f','xGGrw':_0xbd7aa9(0x7b6)+_0xbd7aa9(0xd0d)+'\u008f','buiAf':_0xbd7aa9(0x949)+_0xbd7aa9(0x2a0)+'\u0094','kyshX':_0xbd7aa9(0xd23)+_0xbd7aa9(0xd78)+'\u0089','pfIqV':'\u008a\u0088\u0087\u0090\u008f'+_0xbd7aa9(0xda0)+'\u008b','ikUAC':_0xbd7aa9(0x630)+_0xbd7aa9(0xb46)+'\u0086','zmFQK':_0xbd7aa9(0x4a0)+_0xbd7aa9(0x29e)+'\u0091','oiNbA':'\u008c\u0089\u008b\u0092\u0093'+'\u0089\u008e\u0095\u0095\u0087'+'\u008a','DLWqi':_0xbd7aa9(0x6dc)+'\u0094\u0087\u008c\u0091\u008a'+'\u0094','AVhYZ':'\u0094\u0094\u008e\u0091\u0090'+_0xbd7aa9(0x30a)+'\u0095','BLqNF':'\u0087\u0094\u0091\u0095\u008f'+'\u008c\u0090\u0087\u008c\u0086'+'\u0087','QFAWx':_0xbd7aa9(0x426)+'\u0086\u008b\u008e\u008f\u0086'+'\u0087','VuEUN':_0xbd7aa9(0xa5b)+'\u008f\u008d\u0086\u0089\u008d'+'\u0094','ZoMUd':_0xbd7aa9(0xc15),'lPXNe':_0xbd7aa9(0xd5c)+'\u0092\u008b\u008a\u0087\u008e'+'\u008b','cSsaQ':'\u0086\u0092\u0092\u008a\u008e'+_0xbd7aa9(0x5c9)+'\u0087','mwoWX':_0xbd7aa9(0x5fe)+_0xbd7aa9(0x725)+'\u008c','fruRk':_0xbd7aa9(0xd17)+'e','NKvjq':_0xbd7aa9(0x22f)+_0xbd7aa9(0xa2a)+'\u0091','XcICI':_0xbd7aa9(0xad0)+'\u0094\u008a\u0092\u0087\u0092'+'\u0086','NLpNl':'\u0090\u0093\u0090\u008f\u0088'+_0xbd7aa9(0x423)+'\u008f','xRlhQ':_0xbd7aa9(0x285)+'\u008a\u0093\u0090\u0086\u008c'+'\u008b','wMfQu':'\u0095\u0088\u0090\u0092\u0090'+_0xbd7aa9(0x2bd)+'\u0095','PclqR':'\u008f\u0086\u0090\u0094\u0089'+_0xbd7aa9(0x35d)+'\u008a','Dwgft':'\u0087\u0091\u0091\u0090\u0091'+_0xbd7aa9(0x5fd)+'\u0086','xuawf':_0xbd7aa9(0x253)+_0xbd7aa9(0x126)+'\u008c','dnNEB':_0xbd7aa9(0x694)+_0xbd7aa9(0x17b)+'\u0088','GCWAa':'\u0095\u008a\u008c\u008f\u0094'+_0xbd7aa9(0x9ea)+'\u0093','lFYey':_0xbd7aa9(0x275)+_0xbd7aa9(0xa4b)+'\u0094','XIeaJ':'\u0093\u008b\u008c\u008e\u0089'+_0xbd7aa9(0x84a)+'\u0088','aBwCe':'\u0089\u008d\u008a\u008a\u0090'+_0xbd7aa9(0xb70)+'\u008a','SIwUs':_0xbd7aa9(0x724)+_0xbd7aa9(0x1a5)+'\u0093','vpJdM':_0xbd7aa9(0xc8e)+_0xbd7aa9(0x605)+'\u0089','DmLiQ':_0xbd7aa9(0xbc1)+'\u0091\u0089\u0093\u0089\u0089'+'\u008c','ofqOL':'int','sfvoz':_0xbd7aa9(0x271)+_0xbd7aa9(0x751)+'\u0092','cHjAI':'\u0087\u0087\u0089\u0092\u008d'+'\u008f\u008e\u008f\u0086\u0093'+'\u0092','OnQQz':_0xbd7aa9(0xb50)+_0xbd7aa9(0x1c6)+'\u008c','BhXMx':_0xbd7aa9(0x5c2)+_0xbd7aa9(0x5bb)+'\u008e','VXlFk':_0xbd7aa9(0x837)+_0xbd7aa9(0x9e9)+'\u0091','klALg':'\u008a\u008a\u008b\u008f\u0092'+'\u0088\u008c\u0087\u008e\u0087'+'\u008c','dpXug':_0xbd7aa9(0x6e7)+_0xbd7aa9(0x98d)+'\u008e','clxZH':_0xbd7aa9(0x46a),'CzkSv':_0xbd7aa9(0x39a)+_0xbd7aa9(0xaab)+'\u008e','xHvxG':_0xbd7aa9(0xb1f)+_0xbd7aa9(0x890)+'\u0086','bxpdf':_0xbd7aa9(0x4d1)+'\u0091\u008b\u0089\u0094\u0092'+'\u0095','ZtNCU':'\u0089\u008a\u0086\u0092\u0089'+_0xbd7aa9(0x4fa)+'\u0092','OBNHZ':_0xbd7aa9(0x792)+_0xbd7aa9(0x2ce)+'\u008e','DOvwN':_0xbd7aa9(0xc81)+'\u008a\u008c\u0095\u0093\u008d'+'\u0092','XxlJN':_0xbd7aa9(0xd3c)+_0xbd7aa9(0xca5)+'\u008e','BVhBc':_0xbd7aa9(0x551)+_0xbd7aa9(0x7bf)+'\u0092','LIzdC':'Weapo'+_0xbd7aa9(0x5c7)+'ger','KCRQP':_0xbd7aa9(0x618)+_0xbd7aa9(0x9eb)+_0xbd7aa9(0x7ce),'bCwnB':'GG_Ga'+_0xbd7aa9(0xc65)+_0xbd7aa9(0x81b),'ulPtH':_0xbd7aa9(0xc67)+'rkPla'+'yerAn'+_0xbd7aa9(0x33b)+_0xbd7aa9(0x75d),'geuZm':'Enemy'+_0xbd7aa9(0x146),'UGJKj':'Scivo'+_0xbd7aa9(0x6e2)+_0xbd7aa9(0x903)+_0xbd7aa9(0x6c4)+'rolle'+'r.dll','QAOJr':'__Gen'+_0xbd7aa9(0x48a)+'d','MzGhP':_0xbd7aa9(0x9de)+'h','liiQv':'0x24','HbAql':_0xbd7aa9(0x50f)+_0xbd7aa9(0x52a),'xogYs':'0x28','dEVGR':_0xbd7aa9(0x45e),'LkuHe':_0xbd7aa9(0xb92)+_0xbd7aa9(0xb4e),'bNJPj':'sync','xkrgw':'0x98','Yifco':'0xd0','SNPSx':_0xbd7aa9(0x1c0),'WIffa':_0xbd7aa9(0xd74)+'tHeal'+_0xbd7aa9(0xb85),'yKbLh':_0xbd7aa9(0x7bb),'fNeGC':_0xbd7aa9(0x4d6),'lwXaQ':'local'+'Flag','WgYvu':_0xbd7aa9(0x6a3),'mzxaK':_0xbd7aa9(0xc90)+'wn','qRAvK':function(_0xf9ce2,_0x40c156){return _0xf9ce2(_0x40c156);},'KtHrZ':_0xbd7aa9(0x7f2)+_0xbd7aa9(0x972)+_0xbd7aa9(0x775)+_0xbd7aa9(0x918),'JcXUS':function(_0x118645,_0x10247d){return _0x118645!==_0x10247d;},'SQTyt':'AYgxw','SkzFV':_0xbd7aa9(0x714),'pYNOC':_0xbd7aa9(0x663)+'ls','HNckg':_0xbd7aa9(0x2c0),'hYGmQ':_0xbd7aa9(0xade),'SenTV':function(_0x253aea,_0x35ad4c){return _0x253aea+_0x35ad4c;},'UGODs':function(_0xd524ac,_0x1201a6){return _0xd524ac+_0x1201a6;},'DJxzb':function(_0x4cce1d,_0x1e488f){return _0x4cce1d+_0x1e488f;},'XbjjN':function(_0x29168f,_0x10b907){return _0x29168f+_0x10b907;},'RHRGF':function(_0x138c63,_0x56bfd8){return _0x138c63+_0x56bfd8;},'UTSCv':function(_0x48a209,_0x5ac04e){return _0x48a209+_0x5ac04e;},'NTwWI':function(_0x1dd568,_0x3ddd62){return _0x1dd568+_0x3ddd62;},'QuMWl':function(_0x32a921,_0x5777ff){return _0x32a921+_0x5777ff;},'oaCBV':function(_0x5868e8,_0x332bd8){return _0x5868e8+_0x332bd8;},'kHgmR':function(_0x13ce12,_0xce8bed){return _0x13ce12+_0xce8bed;},'MZXAd':function(_0x2798ca,_0x32f6f1){return _0x2798ca+_0x32f6f1;},'LoGQV':function(_0x108697,_0x1cb228){return _0x108697+_0x1cb228;},'flbIl':function(_0x1c7a37,_0x5b5081){return _0x1c7a37+_0x5b5081;},'tLuFB':function(_0x1d8783,_0x124f5e){return _0x1d8783+_0x124f5e;},'NMBMZ':'backg'+_0xbd7aa9(0xbda)+':rgba'+'(24,1'+'7,21,'+_0xbd7aa9(0x47e)+_0xbd7aa9(0xd88)+_0xbd7aa9(0x5f5)+_0xbd7aa9(0xcee)+':blur'+'(22px'+_0xbd7aa9(0xd16)+'urate'+'(150%'+_0xbd7aa9(0x9f2)+'bkit-'+_0xbd7aa9(0xd88)+_0xbd7aa9(0x5f5)+_0xbd7aa9(0xcee)+_0xbd7aa9(0x1d3)+_0xbd7aa9(0x8ac)+_0xbd7aa9(0xd16)+_0xbd7aa9(0x66b)+_0xbd7aa9(0x167)+');','sJWuh':_0xbd7aa9(0x32e)+_0xbd7aa9(0x68c)+':0\x200\x20'+_0xbd7aa9(0x3d4)+_0xbd7aa9(0xbf7)+'(255,'+'255,2'+_0xbd7aa9(0x7fa)+'6),in'+'set\x200'+_0xbd7aa9(0x15a)+_0xbd7aa9(0x9d9)+'a(255'+_0xbd7aa9(0x757)+'255,.'+'05),0'+_0xbd7aa9(0x145)+_0xbd7aa9(0x5f2)+'\x20rgba'+_0xbd7aa9(0x1bf)+_0xbd7aa9(0x5df)+');','dGYET':_0xbd7aa9(0xaf2)+_0xbd7aa9(0xd8c)+_0xbd7aa9(0x1e9)+'y:fle'+'x;fle'+'x-dir'+_0xbd7aa9(0x432)+_0xbd7aa9(0x60e)+'umn;a'+'lign-'+'items'+_0xbd7aa9(0x5ad)+_0xbd7aa9(0x929)+'p:4px'+';widt'+'h:62p'+_0xbd7aa9(0xcc1)+_0xbd7aa9(0xc60)+'e;pad'+_0xbd7aa9(0x88b)+_0xbd7aa9(0x61d)+'0;','vyHAU':_0xbd7aa9(0x98b)+_0xbd7aa9(0xd75)+_0xbd7aa9(0x1e9)+'y:gri'+_0xbd7aa9(0xc1e)+_0xbd7aa9(0x434)+'ems:c'+_0xbd7aa9(0x631)+';widt'+'h:32p'+'x;hei'+_0xbd7aa9(0x214)+'2px;m'+'argin'+_0xbd7aa9(0xa9f)+_0xbd7aa9(0xa0c)+'x;}','IPSgf':_0xbd7aa9(0xb98)+_0xbd7aa9(0x7e2)+'lex:1'+_0xbd7aa9(0x769)+_0xbd7aa9(0x589)+_0xbd7aa9(0x3d2)+_0xbd7aa9(0x7c8)+_0xbd7aa9(0x8b5)+';flex'+_0xbd7aa9(0xc86)+_0xbd7aa9(0xb9c)+':colu'+'mn;}','JzrmS':'.mn-c'+'ols::'+_0xbd7aa9(0x480)+_0xbd7aa9(0xb5d)+_0xbd7aa9(0xcab)+_0xbd7aa9(0x706)+_0xbd7aa9(0x343)+_0xbd7aa9(0x47f)+_0xbd7aa9(0x54e)+_0xbd7aa9(0x8a0)+_0xbd7aa9(0xbea)+_0xbd7aa9(0xd72)+'5,.08'+');bor'+_0xbd7aa9(0x61c)+_0xbd7aa9(0xcd0)+':4px;'+'}','oRcCR':_0xbd7aa9(0x3b1)+_0xbd7aa9(0x67e)+_0xbd7aa9(0xb9f)+_0xbd7aa9(0xc03)+'us:12'+_0xbd7aa9(0x4e2)+_0xbd7aa9(0x8bb)+_0xbd7aa9(0xc8a)+'gba(2'+_0xbd7aa9(0xd72)+'5,255'+_0xbd7aa9(0x831)+_0xbd7aa9(0xcaf)+'-shad'+'ow:in'+'set\x200'+'\x200\x200\x20'+_0xbd7aa9(0xab4)+_0xbd7aa9(0xa9a)+'55,25'+_0xbd7aa9(0x304)+_0xbd7aa9(0x544)+';}','QrfjN':_0xbd7aa9(0x3b1)+_0xbd7aa9(0xc45)+'itle{'+_0xbd7aa9(0xc3c)+_0xbd7aa9(0x194)+'-widt'+_0xbd7aa9(0x68f),'ldjHC':_0xbd7aa9(0x3b1)+'ard-t'+_0xbd7aa9(0x12e)+'stron'+_0xbd7aa9(0x207)+'t-siz'+_0xbd7aa9(0x498)+_0xbd7aa9(0xc01)+_0xbd7aa9(0x7b8)+_0xbd7aa9(0x54b)+_0xbd7aa9(0xdaa)+_0xbd7aa9(0xaa2)+_0xbd7aa9(0xa9a)+_0xbd7aa9(0x5cb)+_0xbd7aa9(0xae7)+',.45)'+';}','YhUwg':'.sk-c'+_0xbd7aa9(0x84c)+'n\x20.sk'+_0xbd7aa9(0x689)+'-titl'+_0xbd7aa9(0x203)+_0xbd7aa9(0x6f1)+'olor:'+'#fff0'+_0xbd7aa9(0x13b),'uUBkV':_0xbd7aa9(0x907)+_0xbd7aa9(0xbf4)+_0xbd7aa9(0x7f1)+_0xbd7aa9(0x942)+'11px;'+'opaci'+'ty:.4'+_0xbd7aa9(0x454)+_0xbd7aa9(0x46f)+_0xbd7aa9(0x83e)+_0xbd7aa9(0x473)+'hite-'+'space'+_0xbd7aa9(0xb01)+_0xbd7aa9(0x228)+'}','kMbQY':_0xbd7aa9(0x3b1)+_0xbd7aa9(0x5a3)+_0xbd7aa9(0x7c8)+_0xbd7aa9(0x8b5)+_0xbd7aa9(0x7a3)+_0xbd7aa9(0x40f)+_0xbd7aa9(0x586)+_0xbd7aa9(0x463)+_0xbd7aa9(0x519)+_0xbd7aa9(0xa3e)+'dding'+_0xbd7aa9(0x225)+_0xbd7aa9(0x3f5)+_0xbd7aa9(0xd66)+_0xbd7aa9(0x947)+'5px;}','aoHiz':'.sk-l'+'abel{'+'flex:'+_0xbd7aa9(0x39f)+_0xbd7aa9(0x1b6)+_0xbd7aa9(0x8d5)+'6,238'+_0xbd7aa9(0x4ad)+'.75);'+'}','wCamw':_0xbd7aa9(0x164)+'witch'+_0xbd7aa9(0xda7)+'er{co'+_0xbd7aa9(0xa58)+':\x22\x22;p'+'ositi'+_0xbd7aa9(0x8c2)+_0xbd7aa9(0x85b)+'e;top'+_0xbd7aa9(0x898)+_0xbd7aa9(0x229)+_0xbd7aa9(0x1fc)+'idth:'+'8px;h'+'eight'+':8px;'+_0xbd7aa9(0x8c6)+_0xbd7aa9(0x21e)+_0xbd7aa9(0x93d)+_0xbd7aa9(0x87d),'LJyxn':_0xbd7aa9(0x166)+_0xbd7aa9(0xbda)+_0xbd7aa9(0xd12)+'(255,'+_0xbd7aa9(0xbea)+_0xbd7aa9(0x86d)+_0xbd7aa9(0x2bb)+_0xbd7aa9(0x396)+'ion:l'+'eft\x20.'+'2s,ba'+_0xbd7aa9(0x8bb)+_0xbd7aa9(0x49e)+_0xbd7aa9(0x42e),'UCQmc':_0xbd7aa9(0x164)+_0xbd7aa9(0xa5d)+_0xbd7aa9(0x3ff)+_0xbd7aa9(0x613)+_0xbd7aa9(0x1cd)+_0xbd7aa9(0x5b2)+_0xbd7aa9(0x3b8)+_0xbd7aa9(0x76d)+_0xbd7aa9(0x4c1)+'ba(25'+'5,107'+',157,'+_0xbd7aa9(0x208)+'}','tfMer':_0xbd7aa9(0x164)+'witch'+_0xbd7aa9(0x3ff)+_0xbd7aa9(0x613)+'ked=\x22'+_0xbd7aa9(0x5b2)+_0xbd7aa9(0x6c1)+_0xbd7aa9(0x13e)+_0xbd7aa9(0x408)+_0xbd7aa9(0x991)+_0xbd7aa9(0x47f)+_0xbd7aa9(0x54e)+'#ff6b'+'9d;}','JVgeW':'.sk-s'+_0xbd7aa9(0x25d)+_0xbd7aa9(0xd52)+'kit-a'+'ppear'+_0xbd7aa9(0x779)+_0xbd7aa9(0x4de)+_0xbd7aa9(0xc63)+_0xbd7aa9(0x1ce)+_0xbd7aa9(0x6ce)+';widt'+'h:96p'+_0xbd7aa9(0xc88)+_0xbd7aa9(0x215)+'px;ba'+_0xbd7aa9(0x8bb)+'und:t'+_0xbd7aa9(0x635)+_0xbd7aa9(0x51a)+';}','raQuF':_0xbd7aa9(0x166)+_0xbd7aa9(0xbda)+':line'+_0xbd7aa9(0xd6c)+'adien'+_0xbd7aa9(0x962)+'6b9d,'+'#ff6b'+'9d)\x200'+_0xbd7aa9(0x47a)+'var(-'+_0xbd7aa9(0x129)+'%)\x2010'+_0xbd7aa9(0x786)+_0xbd7aa9(0x904)+_0xbd7aa9(0xcfb)+_0xbd7aa9(0xaac)+_0xbd7aa9(0x304)+_0xbd7aa9(0x757)+_0xbd7aa9(0x244)+'}','tkGqI':'.sk-s'+'lider'+_0xbd7aa9(0xaca)+_0xbd7aa9(0x3c0)+_0xbd7aa9(0x919)+_0xbd7aa9(0x8b4)+_0xbd7aa9(0x737)+_0xbd7aa9(0x1eb)+_0xbd7aa9(0x804)+_0xbd7aa9(0x89c)+_0xbd7aa9(0x29b)+_0xbd7aa9(0xc85)+'th:6p'+'x;hei'+'ght:6'+_0xbd7aa9(0x7e5)+'rgin-'+_0xbd7aa9(0x70f)+_0xbd7aa9(0x561)+_0xbd7aa9(0xb9f)+_0xbd7aa9(0xc03)+_0xbd7aa9(0x7d7)+_0xbd7aa9(0x814)+_0xbd7aa9(0x76d)+'nd:#f'+_0xbd7aa9(0xbe3)+';}','UUSaX':_0xbd7aa9(0x940)+_0xbd7aa9(0x742)+'nt-si'+_0xbd7aa9(0x926)+'px;fo'+'nt-we'+_0xbd7aa9(0x3c2)+_0xbd7aa9(0x34b)+'in-wi'+'dth:3'+_0xbd7aa9(0xc3d)+_0xbd7aa9(0xd86)+_0xbd7aa9(0x57f)+_0xbd7aa9(0x8b3)+_0xbd7aa9(0x8fa)+_0xbd7aa9(0xd04)+'a(246'+',238,'+_0xbd7aa9(0x3a7)+_0xbd7aa9(0x35e),'kucfh':_0xbd7aa9(0x361)+_0xbd7aa9(0xc18)+'ont-s'+'ize:1'+_0xbd7aa9(0x90d)+_0xbd7aa9(0xcd8)+_0xbd7aa9(0x8a0)+_0xbd7aa9(0x8f8)+_0xbd7aa9(0x6f0)+_0xbd7aa9(0x532)+';padd'+_0xbd7aa9(0xd03)+'px\x200;'+_0xbd7aa9(0x157)+_0xbd7aa9(0x438)+'e:pre'+'-wrap'+';}','AKCzJ':_0xbd7aa9(0x217)+'tn{al'+_0xbd7aa9(0x6e1)+_0xbd7aa9(0x583)+'lex-s'+'tart;'+_0xbd7aa9(0x8c6)+_0xbd7aa9(0x533)+'order'+_0xbd7aa9(0xc03)+'us:8p'+_0xbd7aa9(0x6be)+_0xbd7aa9(0x88b)+_0xbd7aa9(0x27e)+_0xbd7aa9(0x939)+_0xbd7aa9(0x47f)+_0xbd7aa9(0x54e)+_0xbd7aa9(0xb13)+_0xbd7aa9(0x12a)+_0xbd7aa9(0x240)+_0xbd7aa9(0xa72),'ONCtw':'.sk-b'+_0xbd7aa9(0x134)+_0xbd7aa9(0xd3a)+_0xbd7aa9(0xcee)+_0xbd7aa9(0xabc)+_0xbd7aa9(0x82b)+_0xbd7aa9(0x8d1)+_0xbd7aa9(0x2ea),'OQrzI':'#saku'+'ra-pe'+'tal{p'+'ositi'+_0xbd7aa9(0x657)+_0xbd7aa9(0x192)+'op:12'+_0xbd7aa9(0x741)+'ght:1'+_0xbd7aa9(0x1c8)+_0xbd7aa9(0xbb5)+_0xbd7aa9(0xc40)+'74836'+'46;cu'+'rsor:'+'point'+_0xbd7aa9(0x8bf)+'dth:2'+'6px;h'+_0xbd7aa9(0x968)+':26px'+';opac'+'ity:.'+_0xbd7aa9(0x521),'EKHIb':function(_0xfabe70,_0x1441aa){return _0xfabe70+_0x1441aa;},'LBGDX':function(_0x391c44,_0x5bb961){return _0x391c44+_0x5bb961;},'viygt':'<svg\x20'+_0xbd7aa9(0xaf6)+_0xbd7aa9(0x71c)+'\x200\x2024'+'\x2024\x22>'+'<path'+_0xbd7aa9(0x999)+'12\x2021'+'c-1.5'+_0xbd7aa9(0x8e7)+_0xbd7aa9(0xd0c)+'-4-7.'+'5\x200-2'+_0xbd7aa9(0x5b9)+_0xbd7aa9(0xdb0)+'\x204-4.'+_0xbd7aa9(0x247)+_0xbd7aa9(0x553)+_0xbd7aa9(0x9da)+'-2.5\x20'+_0xbd7aa9(0xbd7)+'.5z\x22\x20','NChJI':_0xbd7aa9(0xab7)+'class'+'=\x22mn-'+'logo-'+_0xbd7aa9(0x700)+'viewB'+'ox=\x220'+'\x200\x2024'+'\x2024\x22>'+'<path'+'\x20d=\x22M'+_0xbd7aa9(0x950)+'c-1.5'+'-2.5-'+_0xbd7aa9(0xd0c)+_0xbd7aa9(0x985)+'5\x200-2'+'.5\x201.'+_0xbd7aa9(0xdb0)+_0xbd7aa9(0x37c)+'5s4\x202'+_0xbd7aa9(0x553)+'5c0\x203'+'-2.5\x20'+'5-4\x207'+_0xbd7aa9(0x2f1),'FtECz':_0xbd7aa9(0xa50)+_0xbd7aa9(0x66a)+'=\x2212\x22'+'\x20cy=\x22'+'10\x22\x20r'+_0xbd7aa9(0xbf3)+'\x22\x20fil'+'l=\x22#f'+'f6b9d'+_0xbd7aa9(0x6bf)+'svg>','TcbeV':'DOMCo'+'ntent'+_0xbd7aa9(0xa4e)+'d'};var _0xbd5c1b=location[_0xbd7aa9(0x52e)+'ame']||'',_0x4f2678=/(^|\.)www\.crazygames\.com$/[_0xbd7aa9(0x2f3)](_0xbd5c1b),_0x4334e9=/(^|\.)games\.crazygames\.com$/[_0xbd7aa9(0x2f3)](_0xbd5c1b),_0x19e451=/(^|\.)crazygames\.com$/[_0xbd7aa9(0x2f3)](_0xbd5c1b)&&!_0x4f2678&&!_0x4334e9,_0x59ac38=_0x4f2678?_0x5d3ad4[_0xbd7aa9(0x6f6)]:_0x4334e9?_0x5d3ad4[_0xbd7aa9(0x810)]:_0xbd7aa9(0x576)+'r';if(_0x5d3ad4[_0xbd7aa9(0x697)](!_0x4f2678,!_0x4334e9)&&!_0x19e451)return;var _0x1f5356='#ff8f'+'b1',_0x2d8e33=_0xbd7aa9(0x6ac)+_0xbd7aa9(0xba6)+_0xbd7aa9(0x49c),_0xd16236=_0xbd7aa9(0x864)+_0xbd7aa9(0xb12)+'SKILL'+'WARZ-'+'BEGIN'+_0xbd7aa9(0xc73),_0x28c139=_0x5d3ad4[_0xbd7aa9(0xcfe)],_0x582b6a=_0x5d3ad4['PycJm'];if(_0x4334e9){window[_0xbd7aa9(0xce1)+_0xbd7aa9(0x2d3)+_0xbd7aa9(0x733)+'r'](_0x5d3ad4[_0xbd7aa9(0xc56)],function(_0x3b0508){var _0x261187=_0xbd7aa9,_0x4aaa85={'zWBNy':function(_0x53eccf,_0x2e4352){return _0x53eccf!==_0x2e4352;},'UvSaL':_0x5d3ad4[_0x261187(0x60d)],'oVNIS':_0x5d3ad4[_0x261187(0xc07)],'QQWGC':_0x261187(0x7f2)+'a-ski'+_0x261187(0x958)+'z','LaHpA':function(_0x3e1a1f){return _0x3e1a1f();},'CxwPX':function(_0x1a28e0,_0x13ce75){return _0x1a28e0/_0x13ce75;},'yIJvb':function(_0x562f53,_0x2ba855){return _0x5d3ad4['jBERO'](_0x562f53,_0x2ba855);},'SeJLz':_0x5d3ad4['VvFiJ']},_0x5680e2=_0x3b0508['data'];if(!_0x5680e2||_0x5d3ad4['RbdZJ'](_0x5680e2['__sak'+_0x261187(0x210)],_0x2d8e33))return;try{if(_0x5d3ad4[_0x261187(0xb39)]('YQkNS',_0x261187(0x535))){var _0x26b106=_0xf33a7f['Unity'+'WebMo'+'dkit']&&_0x584736[_0x261187(0x72f)+_0x261187(0x5a4)+_0x261187(0x90b)][_0x261187(0x680)+'me'];if(!_0x26b106||_0x4aaa85['zWBNy'](typeof _0x26b106['creat'+'ePlug'+'in'],_0x4aaa85[_0x261187(0x89b)])){_0x3362d9[_0x261187(0x54c)]=_0x4aaa85['oVNIS'];return;}_0x1eaec5[_0x261187(0x892)+_0x261187(0x731)]=!![],_0x46cd42=_0x26b106['creat'+_0x261187(0xcad)+'in']({'name':_0x4aaa85[_0x261187(0x18c)],'version':_0x11cb6e,'referencedAssemblies':_0x3ea91e[_0x261187(0xd2d)]()}),_0x4a35d8['ok']=!![];try{var _0x54fc23=_0x45953f[_0x261187(0x72f)+_0x261187(0x5a4)+_0x261187(0x90b)][_0x261187(0x680)+'me'];_0x54fc23[_0x261187(0x6ac)+'uraTa'+'g']=_0x6d7262+':'+_0x583f1e[_0x261187(0x9e0)+'m']()['toStr'+'ing'](-0x254d+-0xd*0x22d+-0x2*-0x20dd)['slice'](-0x1259+0x497*0x4+-0x1,-0x4a4+-0x1*0x19a9+-0xa1d*-0x3),_0x4682c7=_0x54fc23['__sak'+_0x261187(0x64f)+'g'];}catch(_0x1c2a02){}_0x5cf3a8(),_0x4aaa85['LaHpA'](_0x195b6c),_0x1500c6[_0x261187(0x91c)+_0x261187(0xa45)+'tered']=_0x551041[_0x261187(0x711)+'h'],_0x3fa65d(),_0x2558df['memor'+_0x261187(0xb3f)]=!![];}else{if(window[_0x261187(0x2cb)+'t']&&window['paren'+'t']!==window)window['paren'+'t']['postM'+'essag'+'e'](_0x5680e2,'*');if(window[_0x261187(0xac3)]&&window[_0x261187(0xac3)]!==window)window['top']['postM'+'essag'+'e'](_0x5680e2,'*');}}catch(_0x3dd47d){}if(_0x5680e2&&_0x5680e2[_0x261187(0x399)]===_0x5d3ad4['YZeim'])try{if(_0x5d3ad4[_0x261187(0x6bd)](_0x5d3ad4['URHSp'],_0x5d3ad4[_0x261187(0x55e)])){var _0x1f6573=_0x1d55fe[_0x261187(0x37d)+'Selec'+_0x261187(0x9a1)+'l'](_0x261187(0x7d6)+'e');for(var _0x265815=-0x20f6*0x1+0x227f*-0x1+0x7*0x9a3;_0x265815<_0x1f6573[_0x261187(0x711)+'h'];_0x265815++){try{if(_0x1f6573[_0x265815][_0x261187(0x7fe)+'ntWin'+'dow'])_0x1f6573[_0x265815][_0x261187(0x7fe)+_0x261187(0x51d)+'dow'][_0x261187(0x765)+_0x261187(0xac4)+'e'](_0x2f9260,'*');}catch(_0x5eb481){}}}else{var _0x57dcc8=document['query'+_0x261187(0x636)+_0x261187(0x9a1)+'l'](_0x5d3ad4['gVjVS']);for(var _0x45e377=0xce3+0x10e8+-0x1dcb;_0x45e377<_0x57dcc8['lengt'+'h'];_0x45e377++){if(_0x5d3ad4['kzdoE']==='RPPiI')try{if(_0x57dcc8[_0x45e377][_0x261187(0x7fe)+'ntWin'+_0x261187(0xd85)])_0x57dcc8[_0x45e377][_0x261187(0x7fe)+_0x261187(0x51d)+'dow']['postM'+'essag'+'e'](_0x5680e2,'*');}catch(_0xdac958){}else{if(_0x11ad7==='v3'){var _0x4885fa=_0x2a8a0a[_0xfcebf2][_0x261187(0xcbe)]||[_0x52d633[_0x44b156]['v'],0x1d24+0x15b8+-0x32dc,-0x1*0x1042+0x24fa+-0x14b8];return _0x4885fa[_0x261187(0x562)](function(_0x134cb7){var _0x3f9b87=_0x261187;return _0x4aaa85[_0x3f9b87(0xb6c)](_0x4cc489['round'](_0x134cb7*(0x67*0x1d+0x15d*0xa+-0x18e9*0x1)),-0x1f7*0x1+-0x2037*0x1+0x2292);})['join']('\x20\x20');}var _0x262f4c=_0x97e5a6[_0x30c5bf]['v'];return _0x4aaa85['yIJvb'](typeof _0x262f4c,_0x4aaa85['SeJLz'])?_0x4aaa85[_0x261187(0xb6c)](_0x32d008['round'](_0x262f4c*(0x1*-0x10c9+0x8*0x4c7+-0x1187)),-0x224*-0xa+0x927+-0x1aa7):_0x3ddea0(_0x262f4c);}}}}catch(_0x2560ca){}}),console[_0xbd7aa9(0xade)]('%c[sa'+'kura]'+'\x20SW-W'+_0xbd7aa9(0x6cb)+_0xbd7aa9(0x9bf)+'IVE\x20('+_0xbd7aa9(0x9d0)+_0xbd7aa9(0x5f9)+_0xbd7aa9(0xb2e),_0x5d3ad4['LHUYb']+_0x1f5356);return;}if(_0x4f2678){console[_0xbd7aa9(0xade)]('%c[sa'+_0xbd7aa9(0x568)+_0xbd7aa9(0xd2f)+'AL\x20AC'+_0xbd7aa9(0x478),_0x5d3ad4['eqPIn']('color'+':',_0x1f5356)+(';font'+_0xbd7aa9(0xa89)+'ht:70'+'0'),{'host':_0xbd5c1b});var _0xb51608={'set':function(){},'command':function(){}};function _0x147c8f(_0x4cadc0,_0x4a3d4b){var _0x109e14=_0xbd7aa9,_0x4fe8dc={'ktcFx':function(_0x30a8ba){return _0x5d3ad4['lhEwO'](_0x30a8ba);},'LongX':_0x5d3ad4['dXnps'],'yFilE':_0x5d3ad4[_0x109e14(0xc34)],'zkouT':_0x109e14(0x93e)+'n'};if(_0x5d3ad4['jBERO']('yllXu','yllXu')){var _0x2c9d6b={'__sakura':_0x2d8e33,'kind':_0x5d3ad4['YZeim'],'cmd':_0x4cadc0,'arg':_0x4a3d4b};try{var _0xb25f94=document[_0x109e14(0x37d)+_0x109e14(0x636)+_0x109e14(0x9a1)+'l'](_0x109e14(0x7d6)+'e');for(var _0x2c1943=0x1*0x1ca6+0x241e+-0x40c4;_0x2c1943<_0xb25f94['lengt'+'h'];_0x2c1943++){try{if('OyyXe'===_0x109e14(0xb69)){var _0x537ae9=_0x4fe8dc[_0x109e14(0xbc2)][_0x109e14(0x823)]('|'),_0x343a30=0xa*0x1d1+0x2*-0xac0+0x356;while(!![]){switch(_0x537ae9[_0x343a30++]){case'0':_0x4a5ff2[_0x109e14(0xaf4)]=_0x35bd42;continue;case'1':_0x4a5ff2[_0x109e14(0x6d0)+'ck']=function(){_0x62d2f0(!_0x4fe8dc['ktcFx'](_0x17f200)),_0x35bd42();};continue;case'2':_0x590178[_0x109e14(0xb41)][_0x109e14(0x97d)](_0x35bd42);continue;case'3':var _0x35bd42=function(){var _0x49d58e=_0x109e14;_0x4a5ff2[_0x49d58e(0x99c)+_0x49d58e(0xae6)+'te'](_0x5bc2a6['Mtjgp'],_0x5bc2a6[_0x49d58e(0x517)](_0x317bf7)?'true':'false');};continue;case'4':_0x4a5ff2[_0x109e14(0x6c7)]=_0x109e14(0x93e)+'n';continue;case'5':return _0x4a5ff2;case'6':_0x4fe8dc['ktcFx'](_0x35bd42);continue;case'7':var _0x5bc2a6={'Mtjgp':_0x4fe8dc['yFilE'],'zNgkX':function(_0x4d0a5e){return _0x4d0a5e();}};continue;case'8':var _0x4a5ff2=_0x1caf70(_0x4fe8dc['zkouT'],_0x109e14(0x96e)+'itch');continue;}break;}}else{if(_0xb25f94[_0x2c1943]['conte'+_0x109e14(0x51d)+'dow'])_0xb25f94[_0x2c1943][_0x109e14(0x7fe)+_0x109e14(0x51d)+'dow']['postM'+'essag'+'e'](_0x2c9d6b,'*');}}catch(_0x4b9e3c){}}}catch(_0x95a0a8){}try{var _0x251029=new BroadcastChannel('sakur'+'a-sw');_0x251029['postM'+'essag'+'e'](_0x2c9d6b),setTimeout(function(){var _0x4c6498=_0x109e14;try{_0x251029[_0x4c6498(0xd43)]();}catch(_0x2b707c){}},0x12c1*-0x1+0x16f2+0x1*-0x337);}catch(_0x71e41d){}}else _0x2fe640();}var _0x31e962='sakur'+_0xbd7aa9(0x972)+'panel'+_0xbd7aa9(0xd40)+'en';function _0x271f27(){var _0x36300d=_0xbd7aa9;if(_0x5d3ad4[_0x36300d(0x6bd)](_0x5d3ad4['dCgzX'],_0x36300d(0xcc7)))try{if('pToYE'!==_0x36300d(0x527)){var _0x2a0cf4=_0x260d65[_0x36300d(0x788)];if(_0x2a0cf4&&_0x5d3ad4[_0x36300d(0xb39)](_0x2a0cf4[_0x36300d(0x6ac)+_0x36300d(0x210)],_0x5e1c63)&&_0x2a0cf4['kind']===_0x36300d(0x2ad))_0x5d3ad4['PyxfY'](_0x7661fa,_0x2a0cf4[_0x36300d(0x2ad)],_0x2a0cf4['arg']);}else return _0x5d3ad4['TLOYV'](localStorage['getIt'+'em'](_0x31e962),'1');}catch(_0xa793b6){return![];}else _0x5af23f[_0x36300d(0xc8c)+_0x36300d(0xca0)]=_0x36300d(0x8a0)+'255,1'+_0x36300d(0x9f5)+'6,.95'+')',_0x189d39[_0x36300d(0xc71)]=_0x36300d(0x41c)+_0x36300d(0x664)+'nospa'+_0x36300d(0x9ae)+'nsola'+_0x36300d(0xd4f)+'ospac'+'e',_0x111229['fillT'+_0x36300d(0x3be)](_0x878fd0['round'](_0x4872b8['d']||0xe72+0x1d1f+-0x2b91)+'m',_0x4b24db-_0x5d3ad4['MuWYb'](_0x492637,0x2490+0x909*-0x1+0x5*-0x581),_0x5d3ad4[_0x36300d(0x4b4)](_0x2c8a32-_0x8888a8/(0x1dfe+0x1551+0x334d*-0x1),-0x130f+0x2*-0x194+0x472*0x5));}function _0x1eae97(_0x164062){var _0x43008d=_0xbd7aa9,_0x591c54={'oxirv':function(_0x34802e){return _0x34802e();},'ewWGr':_0x5d3ad4[_0x43008d(0xb8a)],'GXBxM':_0x43008d(0x9ab)+'ap','MqkAu':function(_0x474e81,_0x16c4fe){return _0x474e81!==_0x16c4fe;},'XIJHy':_0x5d3ad4['CTqex']};if('DIYqV'===_0x5d3ad4['IyWci']){try{if('YusFY'===_0x43008d(0x645))_0x164062?localStorage[_0x43008d(0x87a)+'em'](_0x31e962,'1'):localStorage['remov'+_0x43008d(0xb47)](_0x31e962);else try{var _0x9cb72d=_0x321ced&&_0x50f0ac[_0x43008d(0x358)];if(!_0x9cb72d)return;if(_0xdef489[_0x43008d(0x7d3)]&&!_0x591c54['oxirv'](_0x32b509))_0xf57cdc['boxes']=![];var _0x4f683c=!_0x56efdf['on']?_0x43008d(0x2dd)+'ff':_0x2bf862['boxes']?_0x591c54[_0x43008d(0x5b4)]:_0x591c54['GXBxM'];if(_0x591c54['MqkAu'](_0x4f683c,_0x9cb72d[_0x43008d(0x754)+'onten'+'t']))_0x9cb72d['textC'+_0x43008d(0xda5)+'t']=_0x4f683c;_0x9cb72d[_0x43008d(0x219)]['backg'+_0x43008d(0xbda)]=_0x369d3f['on']?_0x4238a2:_0x591c54['XIJHy'],_0x9cb72d['style'][_0x43008d(0xd11)]=_0x3f9b27['on']?'#2a0f'+'1b':_0x43008d(0x380)+'f5';}catch(_0xf9ecbd){}}catch(_0x2e49a4){}try{var _0x1eec21=document[_0x43008d(0xd96)+'ement'+_0x43008d(0xcb6)](_0x5d3ad4['dsYjj']);if(_0x1eec21)_0x1eec21[_0x43008d(0xb48)+'e']();}catch(_0x12e6db){}try{if(_0x5d3ad4[_0x43008d(0x5c4)](_0x5d3ad4['JUUzn'],_0x43008d(0x325))){if(_0x5d3ad4[_0x43008d(0xac2)](_0x228f81,_0x3d8ec5)||_0xdd8855===null)return _0x5eb831;if(typeof _0x2e2433['val']===_0x43008d(0x880)+_0x43008d(0xb25))try{return _0x5deea7['val']();}catch(_0x32d2da){}if(_0x5d3ad4[_0x43008d(0xb39)](typeof _0x11d7f1,_0x5d3ad4['OIiIX']))return _0x23baeb;return _0x48a9d5;}else{var _0x3d10cf=document[_0x43008d(0xd96)+'ement'+_0x43008d(0xcb6)]('sakur'+_0x43008d(0x972)+_0x43008d(0x801)+'b');if(_0x164062&&!_0x3d10cf&&document['body']){if(_0x5d3ad4[_0x43008d(0x6bd)](_0x5d3ad4[_0x43008d(0x34f)],_0x43008d(0x1a0))){if(typeof _0xc107e8!==_0x43008d(0x313)+_0x43008d(0x341)&&_0xe74d27)return _0x1e6421['sourc'+'e']=_0x5d3ad4[_0x43008d(0x16e)],_0x325222;}else{var _0x1e5e2e=document['creat'+'eElem'+_0x43008d(0x3b7)]('div');_0x1e5e2e['id']=_0x5d3ad4[_0x43008d(0x602)],_0x1e5e2e['style'][_0x43008d(0x622)+'xt']='posit'+'ion:f'+_0x43008d(0xd02)+_0x43008d(0x229)+_0x43008d(0x8c1)+_0x43008d(0x95c)+_0x43008d(0x1c8)+_0x43008d(0xbb5)+_0x43008d(0xc40)+_0x43008d(0x9ed)+'99;cu'+'rsor:'+'point'+_0x43008d(0x1d8)+_0x43008d(0x3ad)+_0x43008d(0x4b6)+_0x43008d(0x4de)+_0x5d3ad4[_0x43008d(0xd5e)]+_0x1f5356+';'+('borde'+_0x43008d(0x21e)+_0x43008d(0xb78)+_0x43008d(0x6d5)+_0x43008d(0x822)+'ng:4p'+'x\x2012p'+'x;fon'+_0x43008d(0x629)+'x/1.4'+'\x20ui-m'+'onosp'+_0x43008d(0x156)+_0x43008d(0x92f)+_0x43008d(0x44b)+_0x43008d(0x5ae)+_0x43008d(0x8bc)),_0x1e5e2e['textC'+'onten'+'t']=_0x43008d(0x7f2)+'a',_0x1e5e2e['oncli'+'ck']=function(){_0x1eae97(![]),_0x5d3ad4['BBXHN'](_0xc9e2c8);},document['body']['appen'+_0x43008d(0x493)+'d'](_0x1e5e2e);}}else!_0x164062&&_0x3d10cf&&_0x3d10cf[_0x43008d(0xb48)+'e']();}}catch(_0x21fdea){}}else return{'o':'0x'+_0x14b000[0x5*0x255+0x2ef*-0xd+0x1a7a][_0x43008d(0x89d)+'ing'](0xc54+0xcbb+0x9*-0x2c7),'v':_0x26e939(_0x361e8c+_0xd91176[0x1*-0x223f+0x8cb+0x1974],_0x87fe1f[-0x189c+-0x1261+0x2afe])};}function _0x5a16aa(){var _0x55244b=_0xbd7aa9;if(_0x5d3ad4[_0x55244b(0x393)]===_0x5d3ad4[_0x55244b(0x393)]){if(_0x271f27())return null;var _0x2e70b7=document[_0x55244b(0xd96)+'ement'+'ById'](_0x55244b(0x7f2)+'a-sw-'+'v2');if(_0x2e70b7)return _0x2e70b7;if(!document[_0x55244b(0x717)]||!document[_0x55244b(0x717)][_0x55244b(0x1d9)+'dChil'+'d'])return null;try{if(!document[_0x55244b(0xd96)+'ement'+'ById'](_0x55244b(0x7f2)+_0x55244b(0x972)+'v2-cs'+'s')){var _0x166266=document[_0x55244b(0x357)+_0x55244b(0xd90)+_0x55244b(0x3b7)](_0x55244b(0x219));_0x166266['id']='sakur'+_0x55244b(0x972)+_0x55244b(0x43b)+'s',_0x166266['textC'+'onten'+'t']=_0x5d3ad4[_0x55244b(0x795)],(document['head']||document[_0x55244b(0xb27)+_0x55244b(0x2a8)+'ement'])[_0x55244b(0x1d9)+'dChil'+'d'](_0x166266);}return _0x2e70b7=document[_0x55244b(0x357)+_0x55244b(0xd90)+'ent']('div'),_0x2e70b7['id']=_0x5d3ad4[_0x55244b(0x755)],document[_0x55244b(0x717)][_0x55244b(0x1d9)+'dChil'+'d'](_0x2e70b7),_0x2e70b7;}catch(_0x162ff9){return null;}}else return _0xea75['sourc'+'e']=_0x5d3ad4['fOaes'],_0x14c032;}function _0xc9e2c8(){var _0x220971=_0xbd7aa9,_0x103b1c=_0x5a16aa();if(!_0x103b1c)return _0xb51608;if(_0x103b1c[_0x220971(0x60c)+'et'][_0x220971(0x956)])return _0x103b1c[_0x220971(0x956)];try{return _0x206d18(_0x103b1c);}catch(_0x1f7216){return _0x103b1c['datas'+'et'][_0x220971(0x956)]='1',_0x103b1c[_0x220971(0x956)]=_0xb51608,console['warn'](_0x220971(0x3cf)+_0x220971(0x568)+_0x220971(0x16f)+_0x220971(0x870)+_0x220971(0xaf1),_0x220971(0xd11)+':'+_0x1f5356,_0x1f7216),_0xb51608;}}function _0x206d18(_0x289406){var _0x3a554c=_0xbd7aa9,_0x22a2b2={'AsTcH':_0x3a554c(0x9ce),'sGMnz':function(_0x5827b4,_0x41680a){return _0x5827b4(_0x41680a);},'DeOab':function(_0x441298,_0x497060){return _0x441298+_0x497060;},'SrsGr':function(_0x5562d3,_0x455aa7){return _0x5562d3>>>_0x455aa7;},'hwsvH':_0x3a554c(0xabd),'fmRzn':function(_0xa6efff,_0x4fb290){var _0x1dd597=_0x3a554c;return _0x5d3ad4[_0x1dd597(0x7d8)](_0xa6efff,_0x4fb290);},'WcPaM':function(_0x2a01bb,_0x3ccd5a){return _0x2a01bb+_0x3ccd5a;},'katDc':'#ffb3'+'c7','uGuwe':_0x5d3ad4['VTWpO'],'inBTA':_0x3a554c(0x61e)+'insta'+_0x3a554c(0x844)+_0x3a554c(0x651)+'\x20copi'+_0x3a554c(0x9b4)+_0x3a554c(0xd51)+_0x3a554c(0x5ac)+_0x3a554c(0xa8d)+_0x3a554c(0x15c)+_0x3a554c(0x301)+_0x3a554c(0x26d)+'nstan'+_0x3a554c(0xb62)+'.\x0a\x0a','sbYaU':function(_0x36befe,_0x3642e3){return _0x36befe+_0x3642e3;},'fnfzj':_0x5d3ad4['iuJln'],'CfAzH':_0x5d3ad4[_0x3a554c(0x2d4)],'BTlVW':function(_0x590cce,_0x373a90){return _0x590cce>_0x373a90;},'LiKEh':function(_0x1502f8,_0x1ec7b3){var _0x2f1d2b=_0x3a554c;return _0x5d3ad4[_0x2f1d2b(0xcc2)](_0x1502f8,_0x1ec7b3);},'FuTFH':_0x5d3ad4[_0x3a554c(0x60d)],'pfwsx':function(_0x46778d,_0x513cd8,_0x30510a,_0x442174){return _0x46778d(_0x513cd8,_0x30510a,_0x442174);},'DHDuV':function(_0x4b3c0d,_0x368fe8){var _0x205f06=_0x3a554c;return _0x5d3ad4[_0x205f06(0x4b4)](_0x4b3c0d,_0x368fe8);},'anjiK':_0x3a554c(0x695)+_0x3a554c(0xc7e)+'2|0','pHIDt':_0x3a554c(0x93e)+'n','pNFip':function(_0x12a59a,_0x5c2ee3){return _0x5d3ad4['MbrGE'](_0x12a59a,_0x5c2ee3);}};_0x289406[_0x3a554c(0x219)][_0x3a554c(0x622)+'xt']=_0x5d3ad4[_0x3a554c(0x2a9)](_0x5d3ad4['pycXq']+_0x5d3ad4['tKlEw'],_0x3a554c(0x6a0)+_0x3a554c(0x57c)+'1.5\x20u'+_0x3a554c(0x82a)+_0x3a554c(0x842)+_0x3a554c(0x2fb)+_0x3a554c(0xb90)+',mono'+_0x3a554c(0x746)+_0x3a554c(0x889)+'shado'+'w:0\x202'+'0px\x205'+_0x3a554c(0xba9)+'20px\x20'+_0x3a554c(0x95f))+('displ'+_0x3a554c(0x27b)+_0x3a554c(0x382)+_0x3a554c(0xc5f)+'recti'+'on:co'+'lumn;'+_0x3a554c(0xd95)+_0x3a554c(0x5b6)+_0x3a554c(0x38f)+';'),_0x289406[_0x3a554c(0xaaf)+_0x3a554c(0x723)]=_0x5d3ad4[_0x3a554c(0x72c)](_0x5d3ad4[_0x3a554c(0x49d)](_0x5d3ad4['TeNpy'](_0x5d3ad4['MQGal'](_0x5d3ad4[_0x3a554c(0x2a9)](_0x5d3ad4[_0x3a554c(0xd89)](_0x5d3ad4[_0x3a554c(0x2a9)](_0x5d3ad4[_0x3a554c(0xd89)](_0x5d3ad4['GtBrQ'](_0x5d3ad4['MbrGE'](_0x5d3ad4[_0x3a554c(0xc84)]+_0x5d3ad4[_0x3a554c(0x8ab)],_0x1f5356),_0x3a554c(0x3ef)+_0x3a554c(0x36b)+_0x3a554c(0x2ec)+'lwarz'+'</b>')+(_0x3a554c(0xd09)+'\x20id=\x22'+_0x3a554c(0xc58)+'uild\x22'+_0x3a554c(0x1e1)+_0x3a554c(0x45d)+_0x3a554c(0x240)+_0x3a554c(0x9c2)+'6;fon'+'t-siz'+_0x3a554c(0xbb9)+'x;pad'+_0x3a554c(0x88b)+'1px\x206'+_0x3a554c(0x6ed)+'rder:'+'1px\x20s'+'olid\x20'+'rgba('+'255,1'+'43,17'+'7,.35'+');bor'+'der-r'+'adius'+':999p'+_0x3a554c(0x25a)+'?</sp'+_0x3a554c(0x294))+(_0x3a554c(0xd09)+_0x3a554c(0x906)+'sw2-s'+_0x3a554c(0xd6a)+_0x3a554c(0x3db)+_0x3a554c(0x2b8)+'olor:'+_0x3a554c(0x909)+'c9\x22>w'+_0x3a554c(0x973)+_0x3a554c(0x58c)+_0x3a554c(0x3e1)+'\x20fram'+_0x3a554c(0x24c)+_0x3a554c(0xb2d)),_0x5d3ad4[_0x3a554c(0x4b8)])+_0x1f5356,';bord'+_0x3a554c(0x1f1)+_0x3a554c(0xd11)+_0x3a554c(0xa11)+_0x3a554c(0x2a3)+'order'+_0x3a554c(0xc03)+_0x3a554c(0x943)+'x;pad'+_0x3a554c(0x88b)+'4px\x201'+'0px;f'+_0x3a554c(0xca6)+'eight'+_0x3a554c(0xa03)+_0x3a554c(0xd6f)+'r:poi'+'nter;'+'\x22>Cop'+_0x3a554c(0x151)+_0x3a554c(0xb17)+'tton>')+(_0x3a554c(0x687)+_0x3a554c(0x7e8)+_0x3a554c(0x7a4)+'-togg'+_0x3a554c(0x48b)+_0x3a554c(0x511)+_0x3a554c(0xd15)+'groun'+_0x3a554c(0x8a8)+_0x3a554c(0x56d)+_0x3a554c(0x9f0)+'order'+':1px\x20'+'solid'+'\x20rgba'+_0x3a554c(0xb91)+_0x3a554c(0x6d1)+_0x3a554c(0xca4)+_0x3a554c(0x9fb)+_0x3a554c(0x83b)+_0x3a554c(0xb02)+';bord'+'er-ra'+'dius:'+'7px;p'+'addin'+_0x3a554c(0x28c)+'\x208px;'+'curso'+'r:poi'+_0x3a554c(0x463)+_0x3a554c(0x45b)+_0x3a554c(0x2bc)+'tton>')+(_0x3a554c(0x687)+'on\x20id'+_0x3a554c(0x7a4)+'-x\x22\x20s'+_0x3a554c(0x511)+'\x22back'+_0x3a554c(0xb9b)+_0x3a554c(0x8a8)+'nspar'+'ent;b'+_0x3a554c(0xb9f)+_0x3a554c(0x34a)+'solid'+_0x3a554c(0xbf7)+'(255,'+_0x3a554c(0x6d1)+_0x3a554c(0xca4)+_0x3a554c(0x9fb)+_0x3a554c(0x83b)+_0x3a554c(0xb02)+';bord'+'er-ra'+_0x3a554c(0x891)+_0x3a554c(0xd1c)+'addin'+'g:4px'+_0x3a554c(0x2ca)+_0x3a554c(0xd6f)+_0x3a554c(0x23a)+_0x3a554c(0x463)+_0x3a554c(0x2a1)+_0x3a554c(0x93e)+'n>'),_0x3a554c(0x7e4)+'>'),'<div\x20'+_0x3a554c(0x3b2)+_0x3a554c(0x3bc)+_0x3a554c(0xd6e)+_0x3a554c(0x511)+'\x22disp'+_0x3a554c(0x2e7)+_0x3a554c(0x465)+'>')+_0x5d3ad4['VyHIz']+(_0x3a554c(0x687)+'on\x20id'+_0x3a554c(0x7a4)+'-spee'+'d\x22\x20st'+'yle=\x22'+'backg'+_0x3a554c(0xbda)+_0x3a554c(0x4ef)+'spare'+_0x3a554c(0xb9e)+_0x3a554c(0x5b8)+'1px\x20s'+_0x3a554c(0x820)+_0x3a554c(0x8a0)+_0x3a554c(0xccf)+'43,17'+'7,.4)'+';colo'+_0x3a554c(0xc3b)+_0x3a554c(0x185)+'borde'+_0x3a554c(0x21e)+_0x3a554c(0x3f1)+_0x3a554c(0xa3e)+_0x3a554c(0x48d)+_0x3a554c(0x225)+_0x3a554c(0x99a)+'curso'+_0x3a554c(0x23a)+_0x3a554c(0x463)+'\x22>Spe'+'ed\x20of'+_0x3a554c(0xd5b)+'tton>')+_0x5d3ad4[_0x3a554c(0x5fb)]+_0x1f5356+';\x22>',_0x5d3ad4[_0x3a554c(0x8d8)])+('<butt'+_0x3a554c(0x7e8)+'=\x22sw2'+'-snap'+'\x22\x20sty'+_0x3a554c(0x9b0)+_0x3a554c(0x47f)+'ound:'+_0x3a554c(0x50f)+'paren'+_0x3a554c(0x846)+'der:1'+_0x3a554c(0x518)+_0x3a554c(0xacc)+_0x3a554c(0xa9a)+_0x3a554c(0xaeb)+_0x3a554c(0x542)+',.4);'+_0x3a554c(0xd11)+_0x3a554c(0xcbd)+'ef5;b'+_0x3a554c(0xb9f)+'-radi'+_0x3a554c(0x943)+_0x3a554c(0x6be)+'ding:'+'4px\x209'+'px;cu'+_0x3a554c(0xbfd)+_0x3a554c(0xd81)+'er;\x22>'+_0x3a554c(0x413)+_0x3a554c(0xc0e)+_0x3a554c(0xa95)+_0x3a554c(0x93e)+'n>')+('<span'+'\x20id=\x22'+_0x3a554c(0x349)+_0x3a554c(0x794)+'style'+_0x3a554c(0x516)+'or:#8'+_0x3a554c(0xb71)+'\x22>F9\x20'+'twice'+'\x20whil'+_0x3a554c(0x873)+_0x3a554c(0xc21)+_0x3a554c(0x55f)+_0x3a554c(0x5a9)+_0x3a554c(0x603)+'umpin'+'g\x20mar'+_0x3a554c(0x197)+'ich\x20f'+'ield\x20'+_0x3a554c(0xbcd)+_0x3a554c(0x720)+_0x3a554c(0x86b)+'>'),_0x3a554c(0x7e4)+'>'),'<pre\x20'+_0x3a554c(0x3b2)+_0x3a554c(0xbb0)+'t\x22\x20st'+_0x3a554c(0xb2c)+_0x3a554c(0x9d7)+_0x3a554c(0x242)+_0x3a554c(0xd55)+_0x3a554c(0x25f)+_0x3a554c(0x424)+'x;ove'+'rflow'+_0x3a554c(0x3a2)+';flex'+_0x3a554c(0x1d1)+'auto;'+_0x3a554c(0x157)+'-spac'+'e:pre'+_0x3a554c(0x314)+_0x3a554c(0x2e8)+_0x3a554c(0x895)+'k:bre'+_0x3a554c(0xbd5)+'rd;fo'+'nt:in'+_0x3a554c(0x5e5)+';')+_0x5d3ad4[_0x3a554c(0x6ca)],_0x3a554c(0x7e4)+'>');var _0x1958dd=_0x289406[_0x3a554c(0x37d)+'Selec'+'tor']('#sw2-'+_0x3a554c(0x4c3)+'s'),_0x15472c=_0x289406[_0x3a554c(0x37d)+'Selec'+_0x3a554c(0xb79)](_0x3a554c(0x662)+_0x3a554c(0x62e)),_0x260f32=_0x289406[_0x3a554c(0x37d)+'Selec'+_0x3a554c(0xb79)](_0x5d3ad4[_0x3a554c(0x2cf)]),_0x78d959=_0x289406[_0x3a554c(0x37d)+'Selec'+'tor'](_0x3a554c(0x662)+_0x3a554c(0x4a7)),_0x551c97=_0x289406['query'+_0x3a554c(0x636)+_0x3a554c(0xb79)](_0x5d3ad4[_0x3a554c(0x867)]),_0x44edc4=_0x289406['query'+_0x3a554c(0x636)+'tor'](_0x3a554c(0x662)+_0x3a554c(0xc47)+'e'),_0x1856b4=_0x289406['query'+_0x3a554c(0x636)+_0x3a554c(0xb79)](_0x3a554c(0x662)+_0x3a554c(0x717)),_0x2652ee=_0x289406[_0x3a554c(0x37d)+_0x3a554c(0x636)+'tor']('#sw2-'+'snap'),_0x5ce1c9=_0x289406[_0x3a554c(0x37d)+_0x3a554c(0x636)+_0x3a554c(0xb79)](_0x3a554c(0x662)+_0x3a554c(0xcc4)),_0x4cb75a=_0x289406[_0x3a554c(0x37d)+_0x3a554c(0x636)+'tor'](_0x5d3ad4[_0x3a554c(0x649)]),_0x56e2b6=_0x289406['query'+'Selec'+'tor'](_0x5d3ad4[_0x3a554c(0xb7b)]),_0x2d4b1b=_0x289406[_0x3a554c(0x37d)+'Selec'+_0x3a554c(0xb79)](_0x5d3ad4['OcvHC']),_0x2e10b9=null,_0x45ffc6=![];function _0x3504a2(){var _0x459cf5=_0x3a554c;if(_0x1856b4)_0x1856b4['style']['displ'+'ay']=_0x45ffc6?'':_0x5d3ad4[_0x459cf5(0x452)];if(_0x44edc4)_0x44edc4['textC'+'onten'+'t']=_0x45ffc6?_0x459cf5(0xd43):_0x5d3ad4[_0x459cf5(0x221)];_0x289406['style'][_0x459cf5(0x589)]=_0x45ffc6?'min(5'+_0x459cf5(0x874)+_0x459cf5(0x286):'auto',_0x289406[_0x459cf5(0x219)]['backg'+'round']=_0x45ffc6?_0x5d3ad4[_0x459cf5(0x684)]:_0x5d3ad4['CmayB'];}if(_0x44edc4)_0x44edc4[_0x3a554c(0x6d0)+'ck']=function(){_0x45ffc6=!_0x45ffc6,_0x3504a2();};_0x5d3ad4[_0x3a554c(0x7b4)](_0x3504a2);if(_0x551c97)_0x551c97['oncli'+'ck']=function(){var _0x3e5278=_0x3a554c;_0x22a2b2[_0x3e5278(0x659)]!==_0x3e5278(0x9ce)?_0x131903():_0x22a2b2[_0x3e5278(0x656)](_0x1eae97,!![]);};if(_0x2652ee)_0x2652ee['oncli'+'ck']=function(){var _0x277d72=_0x3a554c;_0x147c8f(_0x277d72(0xbdd)+_0x277d72(0xce7));};var _0xafcd39=![];function _0xec4262(){var _0x49ddf2=_0x3a554c;if(_0x5d3ad4[_0x49ddf2(0x35c)]===_0x49ddf2(0xbe0))_0x147c8f('speed',{'on':_0xafcd39,'factor':_0x5d3ad4[_0x49ddf2(0xd3f)](parseFloat,_0x4cb75a[_0x49ddf2(0x821)])||0x42b+0x26ff+-0x2b29});else{var _0x181fea=_0xe71ee7(_0x22a2b2[_0x49ddf2(0x70e)](_0x5651df,_0x281ec8(_0x499e79[_0x7b69c5][0x29e+-0x5*0x3c5+0x103b],0xe49+-0x2*0x85d+0x281)),_0x49ddf2(0x441));if(_0x181fea)_0x2a6384[_0x49ddf2(0xc94)][_0x4aa1ad[_0x296f0c][0x7ad+-0x1*0x1373+-0x2d*-0x43]]=_0x22a2b2[_0x49ddf2(0x70e)]('0x',_0x22a2b2[_0x49ddf2(0xc7c)](_0x181fea,-0x8ea*0x4+0x1817*0x1+0x1*0xb91)[_0x49ddf2(0x89d)+'ing'](0x2603+-0xeac*-0x2+-0x7*0x99d));}}if(_0x5ce1c9)_0x5ce1c9['oncli'+'ck']=function(){var _0x37c5e5=_0x3a554c;_0xafcd39=!_0xafcd39,_0x5ce1c9[_0x37c5e5(0x754)+'onten'+'t']=_0xafcd39?_0x5d3ad4['yGzMS']:_0x37c5e5(0x209)+_0x37c5e5(0x879),_0x5ce1c9[_0x37c5e5(0x219)]['backg'+_0x37c5e5(0xbda)]=_0xafcd39?_0x1f5356:_0x5d3ad4['CTqex'],_0x5ce1c9['style']['color']=_0xafcd39?_0x37c5e5(0x825)+'1b':'#f7ee'+'f5',_0xec4262();};if(_0x4cb75a)_0x4cb75a[_0x3a554c(0x52b)+'ut']=function(){var _0x170f00=_0x3a554c;if(_0x56e2b6)_0x56e2b6[_0x170f00(0x754)+_0x170f00(0xda5)+'t']=_0x5d3ad4[_0x170f00(0x928)]((_0x5d3ad4['jaulP'](parseFloat,_0x4cb75a[_0x170f00(0x821)])||0xd6c*-0x1+0x1*0x1d99+-0x102c)[_0x170f00(0xa57)+'ed'](-0xef*-0x28+0x13d9+0x18*-0x262),'x');_0xec4262();};if(_0x78d959)_0x78d959[_0x3a554c(0x6d0)+'ck']=function(){var _0x189a8b=_0x3a554c,_0x3afa94={'OdRnE':_0x22a2b2[_0x189a8b(0xd7e)],'AuvFt':_0x189a8b(0x2e5),'qphQd':_0x189a8b(0x4a7),'cyTWE':function(_0x4f5f66){return _0x4f5f66();}},_0x7af6f8=_0x22a2b2['fmRzn'](_0x22a2b2[_0x189a8b(0x2d0)](_0x22a2b2[_0x189a8b(0x70e)](_0x22a2b2['WcPaM'](_0xd16236,'\x0a'),_0x2e10b9?JSON['strin'+_0x189a8b(0x79c)](_0x2e10b9,null,-0xa1*0xe+0x34*0x50+-0x7f*0xf):''),'\x0a'),_0x28c139),_0x1c91ef=function(){var _0x38e49e=_0x189a8b;if(_0x78d959)_0x78d959[_0x38e49e(0x754)+_0x38e49e(0xda5)+'t']='Copie'+'d';};if(navigator['clipb'+'oard']&&navigator['clipb'+_0x189a8b(0x1d4)][_0x189a8b(0xadf)+'Text'])navigator[_0x189a8b(0xca9)+'oard']['write'+_0x189a8b(0x76f)](_0x7af6f8)[_0x189a8b(0xa12)](_0x1c91ef,function(){var _0x1afda6=_0x189a8b;if(_0x1afda6(0xba2)==='Mfmri'){var _0x1421da=_0x52eb70[_0x1afda6(0x72f)+_0x1afda6(0x5a4)+_0x1afda6(0x90b)]&&_0x328266['Unity'+_0x1afda6(0x5a4)+'dkit'][_0x1afda6(0x680)+'me'];_0x4a01f5['tag']=_0x1421da&&_0x1421da['__sak'+'uraTa'+'g']||null,_0x2a2465['tagMa'+'tches']=!!(_0x1421da&&_0x7e6e7e&&_0x1421da['__sak'+_0x1afda6(0x64f)+'g']===_0xbff8d7),_0x4706aa['runti'+'meGam'+'e']=_0x1421da&&_0x1421da['_game']?typeof _0x1421da[_0x1afda6(0xa20)]:_0x1afda6(0xabd),_0x44c019['plugi'+_0x1afda6(0x196)+_0x1afda6(0xb08)+'Expor'+_0x1afda6(0x4fe)]=!!(_0xa51a89&&_0x3c7b89['_runt'+'ime']&&_0x254d4f['_runt'+'ime']===_0x1421da),_0x448c8d[_0x1afda6(0xd9e)+_0x1afda6(0x196)+'imeGa'+'me']=_0x2f2451&&_0x36d33e[_0x1afda6(0xc36)+_0x1afda6(0x363)]&&_0x2710d6[_0x1afda6(0xc36)+'ime'][_0x1afda6(0xa20)]?typeof _0x315daa[_0x1afda6(0xc36)+_0x1afda6(0x363)]['_game']:_0x3afa94['OdRnE'];}else _0x1c7ac4();});else _0x1c7ac4();function _0x1c7ac4(){var _0x5e078b=_0x189a8b;if('osUtp'!==_0x3afa94[_0x5e078b(0x9ee)]){var _0x52f6e=('6|0|3'+'|2|4|'+'1|5')[_0x5e078b(0x823)]('|'),_0x574cb7=-0x175*0x17+-0x52e+0x11b*0x23;while(!![]){switch(_0x52f6e[_0x574cb7++]){case'0':_0x1fd13e[_0x5e078b(0x821)]=_0x7af6f8;continue;case'1':try{document['execC'+'omman'+'d'](_0x3afa94[_0x5e078b(0x1b2)]),_0x3afa94[_0x5e078b(0x818)](_0x1c91ef);}catch(_0x465948){}continue;case'2':document['body'][_0x5e078b(0x1d9)+_0x5e078b(0x493)+'d'](_0x1fd13e);continue;case'3':if(!document[_0x5e078b(0x717)])return;continue;case'4':_0x1fd13e[_0x5e078b(0x381)+'t']();continue;case'5':_0x1fd13e['remov'+'e']();continue;case'6':var _0x1fd13e=document['creat'+_0x5e078b(0xd90)+_0x5e078b(0x3b7)]('texta'+'rea');continue;}break;}}else return _0x1914aa[_0x5e078b(0x54c)+'s'][_0x5e078b(0x97d)]('no\x20pl'+'ugin.'+_0x5e078b(0x4d3)),_0x1d39a5;}};_0x5d3ad4[_0x3a554c(0x2fc)](setTimeout,function(){var _0x1ce0d3=_0x3a554c;if(_0x2e10b9)return;if(!_0x1958dd||!_0x260f32)return;_0x1958dd[_0x1ce0d3(0x754)+_0x1ce0d3(0xda5)+'t']=_0x1ce0d3(0xa08)+'port\x20'+_0x1ce0d3(0xd07)+_0x1ce0d3(0xcdf)+_0x1ce0d3(0x6eb)+_0x1ce0d3(0x601)+'t\x20inj'+'ected'+'?',_0x1958dd['style'][_0x1ce0d3(0xd11)]=_0x22a2b2['katDc'],_0x260f32[_0x1ce0d3(0x754)+_0x1ce0d3(0xda5)+'t']=_0x22a2b2[_0x1ce0d3(0x2d0)](_0x22a2b2[_0x1ce0d3(0x9fe)]+(_0x1ce0d3(0x710)+_0x1ce0d3(0x93c)+'\x20prov'+'es\x20th'+_0x1ce0d3(0x279)+_0x1ce0d3(0xab0)+_0x1ce0d3(0xd22)+_0x1ce0d3(0x55a)+_0x1ce0d3(0x946)+'\x20and\x20'+'runni'+_0x1ce0d3(0x4d8)+_0x1ce0d3(0xa25)+_0x1ce0d3(0xc5c)+_0x1ce0d3(0xbcc)),'so\x20th'+'e\x20rem'+'ainin'+'g\x20sus'+_0x1ce0d3(0x628)+_0x1ce0d3(0x99e)+'\x0a\x0a')+('\x20\x201.\x20'+_0x1ce0d3(0x4b0)+_0x1ce0d3(0x8cc)+'ey\x20is'+'\x20not\x20'+'injec'+_0x1ce0d3(0x50b)+_0x1ce0d3(0x86e)+_0x1ce0d3(0x8a5)+_0x1ce0d3(0xcf9)+_0x1ce0d3(0xd44)+'n\x20ifr'+_0x1ce0d3(0x6d9))+('\x20\x202.\x20'+_0x1ce0d3(0x5d0)+'age\x20h'+_0x1ce0d3(0xa8a)+_0x1ce0d3(0x158)+'n\x20rel'+_0x1ce0d3(0x719)+_0x1ce0d3(0x1c3)+'e\x20ins'+'talli'+_0x1ce0d3(0xa4f))+(_0x1ce0d3(0x409)+_0x1ce0d3(0x3e6)+'sakur'+_0x1ce0d3(0x594)+_0x1ce0d3(0x958)+_0x1ce0d3(0xd8a)+_0x1ce0d3(0x7ea)+_0x1ce0d3(0xcef)+_0x1ce0d3(0xa93)+_0x1ce0d3(0x646)+'g\x20scr'+'ipt\x20a'+_0x1ce0d3(0x9fc))+_0x22a2b2[_0x1ce0d3(0x4c0)]+(_0x1ce0d3(0xd2c)+'d\x20the'+'\x20game'+'\x20page'+_0x1ce0d3(0x6de)+_0x1ce0d3(0x495)+_0x1ce0d3(0x269)+'\x20this'+'\x20pane'+_0x1ce0d3(0x727)+_0x1ce0d3(0x84d));},-0x16a2*-0x11+0x831b*0x3+-0x21fb3*0x1);var _0x34fa1f={'set':function(_0x21950e){var _0xb5e4a4=_0x3a554c;_0x2e10b9=_0x21950e;if(_0x78d959)_0x78d959['style'][_0xb5e4a4(0x8e8)+'ay']='';if(_0x15472c){var _0x409272=('0|4|2'+'|1|3')['split']('|'),_0x44cff4=-0x2113*0x1+0x2ce+0x1*0x1e45;while(!![]){switch(_0x409272[_0x44cff4++]){case'0':_0x15472c[_0xb5e4a4(0x754)+_0xb5e4a4(0xda5)+'t']='v'+(_0x21950e[_0xb5e4a4(0xb3b)+'on']||'?');continue;case'1':_0x15472c[_0xb5e4a4(0x219)][_0xb5e4a4(0xd11)]=_0x5d3ad4[_0xb5e4a4(0x88a)](_0x553de4,_0x30a798)?_0x1f5356:_0x5d3ad4['ZJzMB'];continue;case'2':var _0x553de4=_0x21950e[_0xb5e4a4(0xb3b)+'on']||'';continue;case'3':_0x15472c['style'][_0xb5e4a4(0x8c6)+'rColo'+'r']=_0x5d3ad4['tZsuU'](_0x553de4,_0x30a798)?'rgba('+_0xb5e4a4(0xccf)+_0xb5e4a4(0x7a8)+'7,.35'+')':_0x5d3ad4[_0xb5e4a4(0x3d8)];continue;case'4':var _0x30a798=_0x582b6a;continue;}break;}}var _0x24132e=_0x21950e[_0xb5e4a4(0xad6)+_0xb5e4a4(0xc3a)]&&_0x21950e[_0xb5e4a4(0xad6)+'nces'][_0xb5e4a4(0x529)+'ntrol'+_0xb5e4a4(0x303)],_0x106901=Math[_0xb5e4a4(0xbda)](_0x5d3ad4[_0xb5e4a4(0x728)](_0x21950e['elaps'+'edMs']||0x251a+0x1606+-0x3b20,0x1d4+0x2065*-0x1+0x2279));if(_0x1958dd){var _0x1ba929,_0x352c43;if(_0x24132e&&_0x21950e['surve'+'y']&&_0x21950e[_0xb5e4a4(0x548)+'y'][_0xb5e4a4(0x529)+'ntrol'+'ler'])_0x1ba929=_0x5d3ad4['yXkoI'](_0x5d3ad4[_0xb5e4a4(0x928)]('LIVE\x20'+'·\x20'+Object[_0xb5e4a4(0x1b1)](_0x21950e[_0xb5e4a4(0xad6)+_0xb5e4a4(0xc3a)])[_0xb5e4a4(0x711)+'h']+_0x5d3ad4['ACBmP'],_0x106901),'s'),_0x352c43=_0xb5e4a4(0x472)+'a8';else{if(_0x21950e[_0xb5e4a4(0x91c)+_0xb5e4a4(0x394)+'ed']>-0x3*0xae5+0x169*0x13+0x5e4)_0x1ba929=_0x5d3ad4['HVlin'](_0x5d3ad4[_0xb5e4a4(0x4f8)],_0x106901)+'s',_0x352c43=_0x5d3ad4[_0xb5e4a4(0xbfc)];else _0x21950e[_0xb5e4a4(0x848)+_0xb5e4a4(0x2da)]?(_0x1ba929=_0x5d3ad4[_0xb5e4a4(0x7d8)](_0x5d3ad4[_0xb5e4a4(0x928)](_0x5d3ad4['iYshH'],_0x106901),'s'),_0x352c43='#ffd4'+'8a'):_0x5d3ad4['LtLOn']===_0x5d3ad4['LtLOn']?(_0x1ba929=_0x5d3ad4[_0xb5e4a4(0x49d)](_0x21950e[_0xb5e4a4(0x50e)]&&_0x21950e['arm']['ok']?_0x5d3ad4[_0xb5e4a4(0x718)]:_0x5d3ad4['ZDQIe'],_0x106901)+'s',_0x352c43=_0x5d3ad4[_0xb5e4a4(0xbfc)]):(_0x37a465=_0x22a2b2[_0xb5e4a4(0x7b5)]('metad'+_0xb5e4a4(0x6b6)+_0xb5e4a4(0xa6d)+'·\x20'+_0xed518c,'s'),_0x1efbdd=_0x22a2b2[_0xb5e4a4(0x63e)]);}_0x1958dd[_0xb5e4a4(0x754)+_0xb5e4a4(0xda5)+'t']=_0x1ba929,_0x1958dd['style']['color']=_0x352c43;}_0x2d4b1b&&(_0x2d4b1b[_0xb5e4a4(0x754)+_0xb5e4a4(0xda5)+'t']=_0x21950e['diff']&&_0x21950e[_0xb5e4a4(0x983)][_0xb5e4a4(0x711)+'h']?_0xb5e4a4(0x53e)+'vs\x20sn'+_0xb5e4a4(0x411)+'t:\x20'+_0x21950e[_0xb5e4a4(0x983)][_0xb5e4a4(0x8ca)](',\x20'):_0xb5e4a4(0x954)+'ice\x20w'+'hile\x20'+_0xb5e4a4(0x887)+_0xb5e4a4(0xa6a)+_0xb5e4a4(0xb15)+_0xb5e4a4(0x50b)+_0xb5e4a4(0xb55)+_0xb5e4a4(0x29a)+_0xb5e4a4(0xc7d)+_0xb5e4a4(0xb73)+_0xb5e4a4(0x4a4)+_0xb5e4a4(0xa2d)+'\x20whic'+'h.');if(_0x21950e['speed']&&_0x5ce1c9){if(_0x5d3ad4[_0xb5e4a4(0x6a1)]!==_0xb5e4a4(0xd5f)){var _0x16fd8c=_0x22a2b2[_0xb5e4a4(0xa0a)][_0xb5e4a4(0x823)]('|'),_0x12a625=-0xe2c+0xfee+-0x1c2;while(!![]){switch(_0x16fd8c[_0x12a625++]){case'0':if(_0x537647[_0xb5e4a4(0x711)+'h'])return!![];continue;case'1':if(!_0x53294b[_0xb5e4a4(0xd9e)+'ns']||!_0x53294b['plugi'+'ns'][_0xb5e4a4(0x711)+'h'])return![];continue;case'2':if(!_0x7566cf['Unity'+'WebMo'+'dkit']||!_0x4ec359['Unity'+_0xb5e4a4(0x5a4)+_0xb5e4a4(0x90b)]['Runti'+'me'])return![];continue;case'3':return _0x22a2b2['BTlVW'](_0x387ac2['lengt'+'h'],0x1*0x22c1+0x15fc+0x19f*-0x23);case'4':if(!_0x5bfb24||_0x22a2b2[_0xb5e4a4(0x64a)](typeof _0x4ea895[_0xb5e4a4(0x3eb)+_0xb5e4a4(0x391)],_0x22a2b2[_0xb5e4a4(0x362)]))return![];continue;case'5':_0x4e2c0d=_0x2f4b41[_0xb5e4a4(0x72f)+_0xb5e4a4(0x5a4)+_0xb5e4a4(0x90b)]['Value'+_0xb5e4a4(0x722)+'er'];continue;case'6':for(var _0x11c0b8=0x3*0xcba+0x14cb+-0x1f*0x1e7;_0x11c0b8<_0x4c97e2[_0xb5e4a4(0x711)+'h'];_0x11c0b8++){var _0xa5eab=_0x282f0a[_0x11c0b8];try{var _0x31de1d=_0x5d5097[_0xb5e4a4(0x3eb)+'refix']({'typeName':_0xa5eab[_0xb5e4a4(0x6c7)],'methodName':_0xb5e4a4(0xd17)+'e','params':['i32',_0xb5e4a4(0xcd4)],'returnType':_0x566dd7},_0x22a2b2['pfwsx'](_0x1c3087,_0xa5eab['type'],_0xa5eab['keep'],_0xa5eab['many']));_0x3150b4[_0xb5e4a4(0x97d)]({'type':_0xa5eab[_0xb5e4a4(0x6c7)],'hook':_0x31de1d,'keep':_0xa5eab[_0xb5e4a4(0x71e)]});}catch(_0x266d83){_0x2dfabc[_0xb5e4a4(0x97d)](_0xa5eab['type']+':\x20'+_0x397666(_0x266d83&&_0x266d83[_0xb5e4a4(0x200)+'ge']||_0x266d83)[_0xb5e4a4(0xd2d)](-0x3*0x4f+0x45e+-0x371*0x1,-0xb1e+0x38b*-0x4+0x19ea));}}continue;case'7':var _0x53294b=_0x40ecea[_0xb5e4a4(0x72f)+'WebMo'+_0xb5e4a4(0x90b)][_0xb5e4a4(0x680)+'me'];continue;case'8':_0x1dad9b=_0x42c3cb||_0x53294b['plugi'+'ns'][_0x22a2b2[_0xb5e4a4(0x8e3)](_0x53294b['plugi'+'ns']['lengt'+'h'],0x2465*-0x1+0x1*-0x1597+0x39fd)];continue;}break;}}else{_0xafcd39=!!_0x21950e['speed']['on'],_0x5ce1c9[_0xb5e4a4(0x754)+_0xb5e4a4(0xda5)+'t']=_0xafcd39?_0x5d3ad4[_0xb5e4a4(0x14f)]:_0x5d3ad4[_0xb5e4a4(0x70b)],_0x5ce1c9[_0xb5e4a4(0x219)]['backg'+'round']=_0xafcd39?_0x1f5356:'trans'+_0xb5e4a4(0x2cb)+'t',_0x5ce1c9['style']['color']=_0xafcd39?_0x5d3ad4[_0xb5e4a4(0x6c6)]:_0xb5e4a4(0x380)+'f5';if(_0x56e2b6&&_0x21950e['speed'][_0xb5e4a4(0x292)+'r']){if(_0xb5e4a4(0xc2c)===_0x5d3ad4['BcpRr']){var _0x573c85=_0x22a2b2[_0xb5e4a4(0x759)]['split']('|'),_0x1842b3=0xd*0x131+0x15d2+-0x1*0x254f;while(!![]){switch(_0x573c85[_0x1842b3++]){case'0':_0x2965ed['appen'+'dChil'+'d'](_0x5a98f6);continue;case'1':var _0x5a98f6=_0x46d2df(_0x22a2b2[_0xb5e4a4(0xc4e)],'mn-ta'+'b',_0x22a2b2[_0xb5e4a4(0x404)](_0xb5e4a4(0xc49)+'l>',_0x4f67fc['label'])+('</sma'+'ll>'));continue;case'2':_0x30a811[_0x4f67fc['id']]=_0x5a98f6;continue;case'3':var _0x4f67fc=_0x1089c8[_0x36e404];continue;case'4':(function(_0x289283){var _0x5ca116=_0xb5e4a4;_0x5a98f6[_0x5ca116(0x6d0)+'ck']=function(){_0x4da424(_0x289283);};}(_0x4f67fc['id']));continue;case'5':_0x5a98f6[_0xb5e4a4(0x6c7)]=_0xb5e4a4(0x93e)+'n';continue;case'6':_0x5a98f6[_0xb5e4a4(0x320)]=_0x4f67fc[_0xb5e4a4(0x1a8)];continue;}break;}}else _0x56e2b6[_0xb5e4a4(0x754)+_0xb5e4a4(0xda5)+'t']=_0x5d3ad4['gxiAg'](_0x5d3ad4['oeQBy'](Number,_0x21950e['speed'][_0xb5e4a4(0x292)+'r'])[_0xb5e4a4(0xa57)+'ed'](-0x86*-0x36+-0x1*-0x134e+0x63*-0x7b),'x');}}}if(_0x260f32)try{_0x260f32[_0xb5e4a4(0x754)+'onten'+'t']=_0x5d3ad4[_0xb5e4a4(0xd3f)](_0x1eed45,_0x21950e);}catch(_0x3094f8){_0x5d3ad4[_0xb5e4a4(0x6a8)]!=='sFdmd'?_0x260f32['textC'+'onten'+'t']=JSON['strin'+'gify'](_0x21950e,null,-0x24b*0x11+-0x1cf1+0x43ed*0x1):(_0x415576['hasMo'+'dule']=!!(_0x180aa4&&_0xaa0acd['Modul'+'e']),_0x1cea87['heapU'+'8']=!!(_0x51f089&&_0x42a87['Modul'+'e']&&_0x10ec51[_0xb5e4a4(0xbbb)+'e'][_0xb5e4a4(0x3ce)+'8']),_0x5b1c10[_0xb5e4a4(0x468)+_0xb5e4a4(0x7a5)]=_0x65f07f[_0xb5e4a4(0x7b3)+'8']?_0x43c6d9[_0xb5e4a4(0xbbb)+'e'][_0xb5e4a4(0x3ce)+'8'][_0xb5e4a4(0x711)+'h']:0x3*0x404+-0x1caf+0x10a3);}console['log'](_0x5d3ad4['wROqq'],'color'+':'+_0x1f5356+_0x5d3ad4['RcqmE'],_0x21950e),console['log'](_0xd16236+'\x0a'+JSON['strin'+'gify'](_0x21950e,null,0x1*0x138f+0x2406+-0x3794)+'\x0a'+_0x28c139);}};return _0x289406[_0x3a554c(0x60c)+'et'][_0x3a554c(0x956)]='1',_0x289406['api']=_0x34fa1f,_0x34fa1f;}function _0x1eed45(_0x2f8ea7){var _0x32be2b=_0xbd7aa9,_0x447501=[];_0x447501['push'](_0x5d3ad4['KmHYq'](_0x32be2b(0x8cb)+'\x20\x20\x20\x20'+(_0x2f8ea7[_0x32be2b(0x1b5)]||'?'),_0x5d3ad4['KiNoo'])+Math[_0x32be2b(0xbda)](_0x5d3ad4['MuWYb'](_0x2f8ea7['elaps'+_0x32be2b(0x4d4)]||0xf02+-0x49f+-0xa63,0x543*0x5+-0x40a+-0x125d))+'s)'),_0x447501[_0x32be2b(0x97d)](_0x5d3ad4[_0x32be2b(0x7d8)](_0x5d3ad4[_0x32be2b(0x7eb)](_0x5d3ad4['isQec'](_0x32be2b(0xcff)+_0x32be2b(0xadd)+(_0x2f8ea7[_0x32be2b(0x63d)]?_0x32be2b(0x863):'no')+_0x5d3ad4['iYYOC'],_0x2f8ea7[_0x32be2b(0x678)+_0x32be2b(0x838)+'ext']?_0x5d3ad4[_0x32be2b(0x9dd)]:'no'),'\x20\x20\x20ty'+'pes\x20'),_0x2f8ea7[_0x32be2b(0x787)+'ount']!=null?_0x2f8ea7[_0x32be2b(0x787)+'ount']:'?')),_0x447501[_0x32be2b(0x97d)](_0x5d3ad4[_0x32be2b(0x479)](_0x32be2b(0x91c)+_0x32be2b(0xadd)+_0x2f8ea7[_0x32be2b(0x91c)+'Appli'+'ed']+'/',_0x2f8ea7[_0x32be2b(0x91c)+'Total'])+('\x20appl'+_0x32be2b(0xa30))),_0x447501[_0x32be2b(0x97d)]('');var _0x23f953=_0x2f8ea7['insta'+_0x32be2b(0xc3a)]||{},_0x2dc246=Object[_0x32be2b(0x1b1)](_0x23f953);!_0x2dc246['lengt'+'h']&&(_0x447501[_0x32be2b(0x97d)](_0x32be2b(0x7e9)+_0x32be2b(0x676)+'jects'+'\x20capt'+_0x32be2b(0x587)+'yet.'),_0x447501['push'](''),_0x447501['push'](_0x32be2b(0x6b3)+_0x32be2b(0x6ba)+_0x32be2b(0x26e)+'on\x20th'+_0x32be2b(0x334)+_0x32be2b(0x7fd)+_0x32be2b(0xa55)+_0x32be2b(0xc6f)+_0x32be2b(0xad4)+_0x32be2b(0x87b)+_0x32be2b(0x669)+_0x32be2b(0x587)+'means'),_0x447501[_0x32be2b(0x97d)]('no\x20Up'+'date\x20'+_0x32be2b(0x5ee)+'et,\x20o'+'r\x20the'+_0x32be2b(0xacb)+_0x32be2b(0x4ac)+_0x32be2b(0xb63)+'not\x20m'+_0x32be2b(0xb7d)));for(var _0x104bb2=-0x6ca+-0x812*0x2+0x1*0x16ee;_0x5d3ad4['rSCbS'](_0x104bb2,_0x2dc246[_0x32be2b(0x711)+'h']);_0x104bb2++){var _0x528a45=_0x2dc246[_0x104bb2];_0x447501['push'](_0x5d3ad4[_0x32be2b(0x402)](_0x528a45+_0x32be2b(0x218),_0x23f953[_0x528a45]));}_0x447501[_0x32be2b(0x97d)]('');var _0x2cef1e=_0x2f8ea7[_0x32be2b(0x548)+'y']||{},_0x29abf3=Object[_0x32be2b(0x1b1)](_0x2cef1e);for(var _0x3c74c6=-0x60*0x57+-0xfde+-0x1*-0x307e;_0x3c74c6<_0x29abf3[_0x32be2b(0x711)+'h'];_0x3c74c6++){var _0x218b29=_0x29abf3[_0x3c74c6],_0x1460be=_0x2cef1e[_0x218b29];if(!_0x1460be||!_0x1460be[_0x32be2b(0x711)+'h'])continue;_0x447501['push'](_0x5d3ad4['zRuTm'](_0x5d3ad4['HVlin'](_0x5d3ad4['Oaqzt'],_0x218b29),'\x20')+new Array(Math[_0x32be2b(0x135)](0x114e+0x2*0x127b+0x1d*-0x1df,-0xb*0x110+-0xa70+0x103*0x16-_0x218b29['lengt'+'h']))[_0x32be2b(0x8ca)]('─')),_0x447501[_0x32be2b(0x97d)]('\x20\x20off'+_0x32be2b(0xbd4)+_0x32be2b(0x50a)+_0x32be2b(0x61e)+_0x32be2b(0x318)+_0x32be2b(0x4ba)+'\x20\x20\x20\x20\x20'+_0x32be2b(0x61e)+_0x32be2b(0xa81));for(var _0x420daf=-0x1763+0x26eb+0x11c*-0xe;_0x420daf<_0x1460be[_0x32be2b(0x711)+'h'];_0x420daf++){var _0x20d8c1=_0x1460be[_0x420daf],_0x3ed109=_0x5d3ad4['TEoyI'](typeof _0x20d8c1['v'],_0x32be2b(0x4a5)+'r')?Math[_0x32be2b(0xbda)](_0x5d3ad4['URRJL'](_0x20d8c1['v'],0xdba+-0x1*0xfef+0x5*0x139))/(-0x265*0x1+0x19*-0xdc+0x1bc9):_0x20d8c1['v'];_0x447501[_0x32be2b(0x97d)](_0x5d3ad4[_0x32be2b(0x3f9)]('\x20\x20'+('0x'+_0x20d8c1['o']['toStr'+'ing'](-0x133b+0x162d+0x29*-0x12))['padEn'+'d'](-0xd*-0x1a3+0x541*-0x3+-0x57c)+'\x20'+_0x20d8c1['k'][_0x32be2b(0xd94)+'d'](0x10b1*0x1+-0x1ec8+0xe22),'\x20')+_0x5d3ad4[_0x32be2b(0xcd6)](String,_0x3ed109)['padEn'+'d'](-0xb3*0x11+0x3c4+0x82f)+'\x20'+(_0x20d8c1['raw']||''));}_0x447501['push']('');}if(_0x2f8ea7['warni'+'ngs']&&_0x2f8ea7[_0x32be2b(0x1f4)+'ngs'][_0x32be2b(0x711)+'h']){if(_0x32be2b(0x734)!=='YRXOQ'){var _0x4a275c=_0x5d3ad4['fTdQl'](_0x3e9001);if(!_0x4a275c)return null;try{return new _0x562222(_0x4a275c[_0x32be2b(0x2d5)+'r'],_0x4a275c['byteO'+'ffset'],_0x4a275c['byteL'+_0x32be2b(0x51c)]);}catch(_0x206e17){return null;}}else{_0x447501[_0x32be2b(0x97d)](_0x5d3ad4[_0x32be2b(0x996)]);for(var _0xbcba3e=0xef5*-0x1+-0x539+0x142e;_0x5d3ad4['oYoQy'](_0xbcba3e,_0x2f8ea7[_0x32be2b(0x1f4)+_0x32be2b(0xa5a)][_0x32be2b(0x711)+'h']);_0xbcba3e++)_0x447501[_0x32be2b(0x97d)](_0x5d3ad4[_0x32be2b(0x49d)](_0x32be2b(0x7fb),_0x2f8ea7['warni'+_0x32be2b(0xa5a)][_0xbcba3e]));}}return _0x447501['join']('\x0a');}window[_0xbd7aa9(0xce1)+_0xbd7aa9(0x2d3)+_0xbd7aa9(0x733)+'r'](_0xbd7aa9(0x200)+'ge',function(_0x368920){var _0x452749=_0xbd7aa9,_0xd78365={'dzXaN':_0x5d3ad4[_0x452749(0xb57)]};if(_0x5d3ad4[_0x452749(0x28a)]('gbJQr','zlbnU')){var _0x526f04=_0x384c47[_0x579195],_0x2c7dd6=typeof _0x1dedd8[_0x526f04];_0x4f97b8[_0x526f04]=_0x2c7dd6===_0xd78365['dzXaN']?_0x452749(0x313)+_0x452749(0x341):_0x2c7dd6;}else{var _0x31dc87=_0x368920[_0x452749(0x788)];if(!_0x31dc87||_0x5d3ad4[_0x452749(0xcc2)](_0x31dc87['__sak'+_0x452749(0x210)],_0x2d8e33))return;try{if(_0x31dc87[_0x452749(0x399)]==='hello'){_0xc9e2c8()[_0x452749(0x216)]({'host':_0x31dc87[_0x452749(0x1b5)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x5d3ad4[_0x452749(0x28e)](_0x31dc87[_0x452749(0x399)],_0x5d3ad4['oRoRL']))_0x5d3ad4['fTdQl'](_0xc9e2c8)['set'](_0x31dc87['repor'+'t']);}catch(_0x45f7fb){if(_0x452749(0xa00)!==_0x5d3ad4['CTVqA'])return new _0x5135c1(_0x3afb74[_0x452749(0x2d5)+'r'],_0xb44c45[_0x452749(0x5ba)+'ffset'],_0x1e583e['byteL'+_0x452749(0x51c)]);else console['warn'](_0x452749(0x3cf)+_0x452749(0x568)+_0x452749(0x16f)+'l\x20upd'+_0x452749(0x14e)+'ailed',_0x5d3ad4[_0x452749(0xb3c)]+_0x1f5356,_0x45f7fb);}}});function _0x48c055(){var _0x5ddf7f=_0xbd7aa9;_0x5d3ad4[_0x5ddf7f(0xd3f)](_0x1eae97,!![]);}if(document['body'])_0x48c055();else document['addEv'+_0xbd7aa9(0x2d3)+'stene'+'r'](_0xbd7aa9(0xbd0)+'ntent'+'Loade'+'d',_0x48c055,{'once':!![]});return;}window[_0xbd7aa9(0x798)+_0xbd7aa9(0x42a)+_0xbd7aa9(0x8d4)]=window[_0xbd7aa9(0x798)+'URA_S'+_0xbd7aa9(0x8d4)]||{'at':Date[_0xbd7aa9(0x324)]()};function _0x432782(_0xe4d372,_0x42c000){var _0x52bcd6=_0xbd7aa9,_0x230ee9={'__sakura':_0x2d8e33,'kind':_0xe4d372};if(_0x42c000){for(var _0x1eebeb in _0x42c000)_0x230ee9[_0x1eebeb]=_0x42c000[_0x1eebeb];}try{if(window['paren'+'t']&&_0x5d3ad4[_0x52bcd6(0xbd3)](window['paren'+'t'],window))window[_0x52bcd6(0x2cb)+'t']['postM'+_0x52bcd6(0xac4)+'e'](_0x230ee9,'*');}catch(_0x450cbd){}try{if(window['top']&&window[_0x52bcd6(0xac3)]!==window)window['top'][_0x52bcd6(0x765)+_0x52bcd6(0xac4)+'e'](_0x230ee9,'*');}catch(_0x31240b){}}console['log'](_0xbd7aa9(0x3cf)+_0xbd7aa9(0x568)+_0xbd7aa9(0xa73)+'LAYER'+_0xbd7aa9(0xd7b)+'VE\x20v'+_0x582b6a,_0x5d3ad4[_0xbd7aa9(0x673)](_0xbd7aa9(0xd11)+':'+_0x1f5356,_0x5d3ad4['VIHKo']),{'host':_0xbd5c1b,'href':location['href'],'version':_0x582b6a}),_0x432782(_0x5d3ad4['bbxnK'],{'host':_0xbd5c1b,'role':_0x59ac38});var _0x473e76=window[_0xbd7aa9(0x798)+'URA_S'+_0xbd7aa9(0x8d4)]&&window[_0xbd7aa9(0x798)+'URA_S'+'W__']['at']||Date[_0xbd7aa9(0x324)]();window['addEv'+'entLi'+_0xbd7aa9(0x733)+'r'](_0xbd7aa9(0x200)+'ge',function(_0x4bc5f9){var _0x426c7c=_0xbd7aa9,_0xc71d79={'uNnHe':_0x426c7c(0x667)+'s','cMnpX':_0x5d3ad4[_0x426c7c(0x740)]};if('HIXMx'!=='sUjWt')try{var _0x3ec910=_0x4bc5f9&&_0x4bc5f9[_0x426c7c(0x788)];if(!_0x3ec910||_0x5d3ad4[_0x426c7c(0x6bd)](_0x3ec910[_0x426c7c(0x6ac)+'ura'],_0x2d8e33)||_0x3ec910[_0x426c7c(0x399)]!==_0x426c7c(0x2ad))return;_0x5d3ad4[_0x426c7c(0x577)](_0x1fde69,_0x3ec910['cmd'],_0x3ec910[_0x426c7c(0xb0f)]);}catch(_0x33f144){}else{if(!_0x2d0895['body']||!_0x2bbae4[_0x426c7c(0x717)][_0x426c7c(0x1d9)+_0x426c7c(0x493)+'d'])return null;var _0x442b9a=_0x5c49dc[_0x426c7c(0x357)+'eElem'+_0x426c7c(0x3b7)](_0xc71d79[_0x426c7c(0xd93)]);return _0x442b9a['id']=_0x426c7c(0x7f2)+_0x426c7c(0xd9a)+'es',_0x442b9a['style'][_0x426c7c(0x622)+'xt']=_0xc71d79['cMnpX'],_0x268d43[_0x426c7c(0x717)]['appen'+_0x426c7c(0x493)+'d'](_0x442b9a),_0x3a19aa={'cv':_0x442b9a},_0x1baff0;}});try{var _0x150977=new BroadcastChannel(_0x5d3ad4['HfNat']);_0x150977[_0xbd7aa9(0x748)+'sage']=function(_0x2e097d){var _0x33fb13=_0xbd7aa9;if(_0x5d3ad4['QOTWF']!==_0x5d3ad4['cwLej']){var _0x1cbe18=_0x2e097d['data'];if(_0x1cbe18&&_0x1cbe18[_0x33fb13(0x6ac)+_0x33fb13(0x210)]===_0x2d8e33&&_0x1cbe18['kind']===_0x33fb13(0x2ad))_0x1fde69(_0x1cbe18['cmd'],_0x1cbe18[_0x33fb13(0xb0f)]);}else{var _0x207934={},_0x38b47c=_0x5d3ad4['YDJem'](_0x4de30b);if(!_0x38b47c)return _0x207934;_0x207934[_0x5d3ad4['tsThS']]=_0x38b47c[_0x33fb13(0xb92)+_0x33fb13(0xb4e)];for(var _0x310b42 in _0x38b47c[_0x33fb13(0xa82)+'s'])_0x207934[_0x5d3ad4[_0x33fb13(0x752)](_0x5d3ad4[_0x33fb13(0xb68)],_0x310b42)]=_0x38b47c['float'+'s'][_0x310b42];if(_0x38b47c[_0x33fb13(0x32a)+'a'])_0x207934['Mouse'+_0x33fb13(0x3b4)+'camer'+'a']=_0x38b47c['camer'+'a'];return _0x207934;}};}catch(_0x27d77f){}var _0x557843=[];(function _0x233648(){var _0x2557b5=_0xbd7aa9,_0xa769fe={'tjbKR':_0x5d3ad4['HrmWv'],'GMraJ':function(_0x281197,_0x2886c5){var _0x5b94c5=_0x4565;return _0x5d3ad4[_0x5b94c5(0x896)](_0x281197,_0x2886c5);},'cflNd':'Unity'+'WebMo'+_0x2557b5(0x90b)},_0x4e25e3=[_0x2557b5(0xade),'warn',_0x5d3ad4[_0x2557b5(0x4e1)],_0x5d3ad4['CjIQj'],'debug'];for(var _0x37154b=0x150c*0x1+0x164e+-0x2b5a;_0x5d3ad4['oYoQy'](_0x37154b,_0x4e25e3[_0x2557b5(0x711)+'h']);_0x37154b++){if(_0x2557b5(0xccb)!=='ReaGZ')return _0x5545da['getIt'+'em'](_0x2fec4b)==='1';else(function(_0x2f0349){var _0x23c889=_0x2557b5,_0x466dee=console[_0x2f0349];if(typeof _0x466dee!==_0x23c889(0x880)+_0x23c889(0xb25))return;console[_0x2f0349]=function(){var _0xa51184=_0x23c889;try{var _0x5caa59='';for(var _0xac6cbc=0x139a+-0x1*0xbc5+-0x7d5*0x1;_0xac6cbc<arguments[_0xa51184(0x711)+'h'];_0xac6cbc++){if(_0xa51184(0xc95)===_0xa769fe[_0xa51184(0x5b7)]){var _0x210e47=arguments[_0xac6cbc];if(_0xa769fe['GMraJ'](typeof _0x210e47,'strin'+'g'))_0x5caa59+=_0x210e47;else{if(_0x210e47&&_0x210e47[_0xa51184(0x200)+'ge'])_0x5caa59+=_0x210e47[_0xa51184(0x200)+'ge'];}}else _0x3c7dc9=_0x429ad1['fwd'][0xd85*-0x1+0x97b*-0x4+0x3371],_0x2dfd2a=_0x59ff9c[_0xa51184(0x4e9)][0x10ed+0x1*0x2212+0x7a*-0x6b],_0x324e9a=_0x1b41f5[_0xa51184(0x4e9)][-0x19dc*0x1+-0x11ed+0x2bcb],_0x3216d3=_0x2447df['right'][0x1544+-0x1cc0+0x77c],_0x4468d9=_0x222223[_0xa51184(0x8b3)][0x2565+-0x2135+0x33*-0x15],_0x21fa57=_0x3e345b['right'][0x1a54+-0x225*-0xd+-0x3633],_0x460465=_0x418175['up'][0xbc9*0x1+-0x105b+-0x249*-0x2],_0x5cb5f4=_0x36e83e['up'][-0x9aa*0x2+-0x23d+0x1592*0x1],_0x58ae54=_0x113659['up'][-0x2113+-0x5*-0x64e+0x18f];}if(_0x5caa59[_0xa51184(0x8f1)+'Of'](_0xd16236)!==-(-0x11a3+0x3*-0x7ad+0x167*0x1d))return _0x466dee['apply'](console,arguments);if(_0x5caa59[_0xa51184(0x8f1)+'Of'](_0xa769fe[_0xa51184(0x992)])!==-(0xead*-0x1+0x23*0xbb+-0xae3)){var _0x5686ee=_0x5caa59[_0xa51184(0xd2d)](-0x283*-0x1+-0x1c21*-0x1+0x7a9*-0x4,-0x8d*0x30+0x1f*-0x47+-0x193*-0x17);if(_0x557843['index'+'Of'](_0x5686ee)===-(0x2238+0x46e+0x1*-0x26a5)&&_0x557843[_0xa51184(0x711)+'h']<0x1d00+0x1b88+-0x384c)_0x557843['push'](_0x5686ee);}}catch(_0xe80dc5){}return _0x466dee['apply'](console,arguments);};}(_0x4e25e3[_0x37154b]));}}());var _0x4dceb6={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x845905=null,_0x2d3c40=null,_0x21a0a6=-(-0x1fe1+0x1b2a+0x97*0x8),_0x2a7c20=null;function _0x2d4260(_0x4671fc){var _0x5c2ed0=_0xbd7aa9,_0x54c54f={'TKBYk':function(_0x274dc3,_0xb3a0d){var _0x319ebf=_0x4565;return _0x5d3ad4[_0x319ebf(0x2a9)](_0x274dc3,_0xb3a0d);},'ygYUK':function(_0x56dd6b){return _0x56dd6b();}};try{if(!_0x4671fc)return;var _0x3b0ef0=_0x4671fc[_0x5c2ed0(0xad6)+'nce']?_0x4671fc[_0x5c2ed0(0xad6)+_0x5c2ed0(0x13a)]['expor'+'ts']:_0x4671fc['expor'+'ts']||null;if(!_0x3b0ef0)return;if(!_0x2a7c20)try{if(_0x5d3ad4[_0x5c2ed0(0x410)](_0x5d3ad4[_0x5c2ed0(0xb66)],_0x5c2ed0(0xb30)))_0x2a7c20=Object['keys'](_0x3b0ef0)['slice'](-0x24f7*0x1+0x251*-0x9+0x39d0,0x24a3+-0x12d1*0x1+-0x1*0x11ba);else{if(_0x295977)_0x57d792['textC'+_0x5c2ed0(0xda5)+'t']=_0x54c54f['TKBYk']((_0x1cf1ad(_0x30541c['value'])||0x2221*-0x1+-0x1442+0x4*0xd99)[_0x5c2ed0(0xa57)+'ed'](0xb5*-0x1a+-0x222f+-0x8c3*-0x6),'x');_0x54c54f['ygYUK'](_0x390d97);}}catch(_0x178f5e){}var _0x4ea005=_0x3b0ef0[_0x5c2ed0(0xa04)+'y'];_0x4ea005&&_0x4ea005[_0x5c2ed0(0x2d5)+'r']&&_0x4ea005['buffe'+'r']['byteL'+_0x5c2ed0(0x51c)]>-0x1*0x13bb+-0x5b*-0x1b+0xa22*0x1&&(_0x2d3c40=_0x4ea005,_0x21a0a6=Date['now']()-_0x473e76);}catch(_0xe210cd){}}function _0xbfe01e(){var _0x4296ff=_0xbd7aa9,_0x55bfa8={'zcuLq':function(_0x120dc8,_0x1a67f4){var _0x256e7e=_0x4565;return _0x5d3ad4[_0x256e7e(0x58b)](_0x120dc8,_0x1a67f4);},'MYKqU':function(_0x518f16,_0x155881,_0x9327a9,_0x447cf7){return _0x518f16(_0x155881,_0x9327a9,_0x447cf7);}};if(_0x4296ff(0x6e4)!==_0x4296ff(0x70c))try{if(_0x5d3ad4[_0x4296ff(0x1a7)](typeof WebAssembly,_0x4296ff(0x313)+_0x4296ff(0x341)))return;var _0x4cf578=[_0x4296ff(0xad6)+'ntiat'+'e',_0x5d3ad4[_0x4296ff(0x3d9)]];for(var _0x59cd55=0x3*-0x17b+0x24c6+-0x1*0x2055;_0x59cd55<_0x4cf578['lengt'+'h'];_0x59cd55++){if(_0x5d3ad4[_0x4296ff(0xbd3)](_0x4296ff(0x388),_0x4296ff(0x388))){var _0x40ed73=_0x2e378c==='v2'?-0x1*0x2e7+0x1724+0x143b*-0x1:_0x55bfa8[_0x4296ff(0x3ab)](_0x2d8db0,'v3')?-0x1521+0xe07+0x71d:0x1*0x128f+-0x178e+0x503*0x1,_0x214f03=_0x55bfa8['MYKqU'](_0x3498ef,_0x3c2cc7['ptr'],_0x129244,_0x40ed73);_0x214f03&&(_0x34c465[_0x4296ff(0xcbe)]=_0x214f03,_0x414816['v']=_0x214f03[-0x5*0x61+-0x1*-0xf8f+-0xdaa]);}else(function(_0x5a2f1a){var _0x12784c=_0x4296ff,_0x544868={'roQJE':'funct'+'ion','RWwQo':function(_0x25bf56,_0x4cfd8f){var _0x3eb404=_0x4565;return _0x5d3ad4[_0x3eb404(0x182)](_0x25bf56,_0x4cfd8f);}},_0x21839b=WebAssembly[_0x5a2f1a];if(typeof _0x21839b!==_0x12784c(0x880)+_0x12784c(0xb25)||_0x21839b['__sak'+'uraMe'+'moryT'+'ap'])return;var _0x12c334=function(){var _0x3eaef0=_0x12784c;if(_0x3eaef0(0x936)!==_0x3eaef0(0x936))_0x2e6593['setB']=_0xab4d29[0x26f7*-0x1+0x1627+0x10d2][_0x3eaef0(0xa3c)](),_0x2fc4a8['pairH'+_0x3eaef0(0x8af)]++;else{var _0x8eda8a=_0x21839b['apply'](this,arguments);try{if(_0x8eda8a&&typeof _0x8eda8a[_0x3eaef0(0xa12)]===_0x544868['roQJE'])_0x8eda8a[_0x3eaef0(0xa12)](_0x2d4260,function(){});else _0x544868[_0x3eaef0(0x2ed)](_0x2d4260,_0x8eda8a);}catch(_0x3112ec){}return _0x8eda8a;}};_0x12c334[_0x12784c(0x6ac)+_0x12784c(0x513)+'moryT'+'ap']=!![];try{if(_0x5d3ad4[_0x12784c(0xbd3)](_0x12784c(0x84f),'FjBwb')){var _0x3bc42a=_0x1ad439[0x26e0+-0x6b*0x28+0x1*-0x1627]['val']();if(_0x3bc42a)_0x524dda=_0x3bc42a;}else Object[_0x12784c(0xa8e)+'eProp'+'erty'](_0x12c334,_0x5d3ad4[_0x12784c(0x311)],{'value':_0x21839b[_0x12784c(0xa59)],'configurable':!![]});}catch(_0x3568f6){}WebAssembly[_0x5a2f1a]=_0x12c334;}(_0x4cf578[_0x59cd55]));}}catch(_0x33e469){}else{var _0x419567=_0x35e03b[_0x1608cf],_0x38aa5e=_0x1bcf35(_0x1c6d9d,_0xa8a630,_0x419567['size']);if(!_0x38aa5e)return null;var _0x1fa309=new _0x597bf6(_0x38aa5e[_0x4296ff(0x2d5)+'r'],_0x38aa5e[_0x4296ff(0x5ba)+_0x4296ff(0x1e4)],_0x38aa5e[_0x4296ff(0xc4b)+_0x4296ff(0x51c)]),_0x14ed7b=_0x1fa309[_0x4296ff(0x934)+'t32'](_0x419567[_0x4296ff(0x66f)],!![]),_0x3c2f78=_0x1fa309['getIn'+'t32'](_0x419567['hidde'+'n'],!![]),_0x224630=_0x1fa309[_0x4296ff(0x94c)+_0x4296ff(0x672)](_0x419567[_0x4296ff(0xbec)+'d'])&-0x1499+0x1*0x2162+-0xcc8,_0x485648=_0x5d3ad4[_0x4296ff(0x8d3)](_0xdf4356,_0x4296ff(0x3dc))?_0x1fa309[_0x4296ff(0x7f7)+'oat32'](_0x419567[_0x4296ff(0x95b)],!![]):_0x5727ac===_0x5d3ad4[_0x4296ff(0xce8)]?_0x1fa309['getIn'+'t32'](_0x419567['fake'],!![]):_0x1fa309[_0x4296ff(0x94c)+_0x4296ff(0x672)](_0x419567[_0x4296ff(0x95b)]),_0x11bf34=_0x5d3ad4['XnabZ'](_0x1fa309['getUi'+_0x4296ff(0x672)](_0x419567[_0x4296ff(0x186)+'e']),-0x2*-0x275+-0x5ef*0x4+0x12d3);return{'keyAtOffset0':_0x14ed7b,'hidden':_0x3c2f78,'inited':_0x224630,'fake':_0x485648,'act':_0x11bf34,'hex':_0x4f11e8(_0x38aa5e),'alt':_0x5d3ad4['AqnfR'](_0x5f07a8,_0x5d3ad4['mFSvG'])?_0x3c2f78^(_0x485648|0x1e63*0x1+0x19e4+-0x3847*0x1):null};}}var _0x30daa5=null,_0xaa707f=null,_0xbc0808={},_0x13c98e={'MouseLook':[{'name':_0x5d3ad4['wIqEi'],'ret':_0xbd7aa9(0x882),'params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':_0x5d3ad4['jxzMy'],'ret':'void','params':[_0x5d3ad4[_0xbd7aa9(0x4f0)]],'wasmParams':[_0x5d3ad4['TcIwl'],'f32']},{'name':_0xbd7aa9(0x78c)+'\u0090\u0091\u0089\u0086\u0091'+'\u0092','ret':'void','params':[_0x5d3ad4[_0xbd7aa9(0x4f0)]],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)],_0x5d3ad4[_0xbd7aa9(0x826)]]},{'name':_0x5d3ad4['DFdvO'],'ret':_0x5d3ad4[_0xbd7aa9(0x708)],'params':[_0xbd7aa9(0xa82)],'wasmParams':[_0xbd7aa9(0xcd4),'f32']},{'name':'\u0089\u0088\u0091\u0090\u008a'+_0xbd7aa9(0x288)+'\u0091','ret':_0x5d3ad4[_0xbd7aa9(0x708)],'params':[],'wasmParams':['i32']},{'name':_0xbd7aa9(0x160)+_0xbd7aa9(0x1b3)+'\u0094','ret':_0x5d3ad4[_0xbd7aa9(0x708)],'params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':_0x5d3ad4[_0xbd7aa9(0x6c2)],'ret':_0xbd7aa9(0x882),'params':[],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)]]},{'name':'LateU'+_0xbd7aa9(0x9e7),'ret':_0x5d3ad4[_0xbd7aa9(0x708)],'params':[],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)]]},{'name':_0x5d3ad4['osxLj'],'ret':_0x5d3ad4[_0xbd7aa9(0x708)],'params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':_0xbd7aa9(0x7bd)+_0xbd7aa9(0x33f)+'\u0095','ret':_0xbd7aa9(0xa82),'params':[],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)]],'wasmRet':_0xbd7aa9(0xafc)},{'name':_0xbd7aa9(0x565)+'\u0092\u0088\u0090\u008c\u0088'+'\u0090','ret':'void','params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':_0xbd7aa9(0x412)+'\u0091\u0087\u008e\u008a\u008d'+'\u0088','ret':_0x5d3ad4[_0xbd7aa9(0x708)],'params':['float'],'wasmParams':[_0xbd7aa9(0xcd4),_0xbd7aa9(0xafc)]},{'name':'\u0093\u0089\u0095\u0092\u0090'+_0xbd7aa9(0x6fa)+'\u008d','ret':_0xbd7aa9(0xa82),'params':[],'wasmParams':['i32'],'wasmRet':_0x5d3ad4[_0xbd7aa9(0x826)]},{'name':_0xbd7aa9(0x6c8)+_0xbd7aa9(0x2d6)+'\u0092','ret':'void','params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':_0x5d3ad4[_0xbd7aa9(0x48c)],'ret':_0x5d3ad4[_0xbd7aa9(0x708)],'params':[],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)]]},{'name':_0x5d3ad4['bkUAr'],'ret':_0x5d3ad4[_0xbd7aa9(0x708)],'params':[],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)]]},{'name':_0x5d3ad4['mjwLL'],'ret':'void','params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':_0x5d3ad4['eTeLv'],'ret':_0xbd7aa9(0x882),'params':[_0x5d3ad4[_0xbd7aa9(0x4f0)],_0x5d3ad4['YKJMR']],'wasmParams':[_0xbd7aa9(0xcd4),_0x5d3ad4[_0xbd7aa9(0x826)],_0x5d3ad4['WuOHK']]},{'name':_0x5d3ad4[_0xbd7aa9(0x979)],'ret':_0xbd7aa9(0xa82),'params':[],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)]],'wasmRet':_0xbd7aa9(0xafc)},{'name':'\u008b\u0092\u0089\u0090\u008d'+_0xbd7aa9(0xb1e)+'\u0088','ret':_0x5d3ad4[_0xbd7aa9(0x708)],'params':[],'wasmParams':[_0x5d3ad4['TcIwl']]},{'name':_0xbd7aa9(0xc15),'ret':_0x5d3ad4[_0xbd7aa9(0x708)],'params':[],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)]]},{'name':_0x5d3ad4[_0xbd7aa9(0x153)],'ret':_0xbd7aa9(0x882),'params':['float'],'wasmParams':[_0xbd7aa9(0xcd4),'f32']},{'name':'\u008c\u0093\u0091\u008a\u0089'+'\u0087\u0092\u0088\u0088\u008c'+'\u0088','ret':_0x5d3ad4['YKJMR'],'params':[],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)]],'wasmRet':'f32'},{'name':'\u0094\u008d\u0091\u0091\u0090'+'\u008b\u0094\u0093\u0086\u008c'+'\u008a','ret':'void','params':[_0xbd7aa9(0xa82),'float'],'wasmParams':[_0xbd7aa9(0xcd4),'f32',_0x5d3ad4[_0xbd7aa9(0x826)]]},{'name':_0x5d3ad4[_0xbd7aa9(0x5d9)],'ret':_0x5d3ad4['aWEAL'],'params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':_0x5d3ad4['aYSRe'],'ret':_0x5d3ad4[_0xbd7aa9(0x708)],'params':[],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)]]},{'name':_0xbd7aa9(0x5d6)+'\u0090\u0095\u008d\u0090\u0088'+'\u008b','ret':_0xbd7aa9(0x882),'params':[_0xbd7aa9(0xa82)],'wasmParams':[_0xbd7aa9(0xcd4),_0x5d3ad4['WuOHK']]},{'name':_0xbd7aa9(0x5d4)+_0xbd7aa9(0x38c)+'\u0093','ret':'float','params':[],'wasmParams':[_0xbd7aa9(0xcd4)],'wasmRet':'f32'},{'name':'\u008e\u0093\u008f\u008d\u0088'+_0xbd7aa9(0x66e)+'\u008a','ret':'float','params':[],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)]],'wasmRet':'f32'},{'name':_0xbd7aa9(0x485)+'\u0089\u008a\u0093\u0090\u0095'+'\u0088','ret':_0x5d3ad4['aWEAL'],'params':[_0xbd7aa9(0xa82)],'wasmParams':[_0x5d3ad4['TcIwl'],_0x5d3ad4[_0xbd7aa9(0x826)]]},{'name':_0x5d3ad4[_0xbd7aa9(0xac8)],'ret':_0xbd7aa9(0x882),'params':[],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)]]},{'name':'\u008c\u0091\u0093\u0095\u0087'+'\u008c\u008a\u0086\u0090\u0087'+'\u0093','ret':'void','params':['float'],'wasmParams':['i32',_0xbd7aa9(0xafc)]},{'name':_0x5d3ad4[_0xbd7aa9(0x371)],'ret':_0x5d3ad4[_0xbd7aa9(0x708)],'params':[],'wasmParams':[_0x5d3ad4['TcIwl']]},{'name':'\u0092\u008c\u0088\u0087\u0088'+_0xbd7aa9(0xd84)+'\u0090','ret':_0xbd7aa9(0x882),'params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':'\u008a\u0086\u008a\u008b\u0086'+'\u008f\u0091\u008e\u008d\u0086'+'\u008d','ret':_0xbd7aa9(0x882),'params':['float'],'wasmParams':[_0xbd7aa9(0xcd4),_0x5d3ad4['WuOHK']]}],'FPScontroller':[{'name':'\u0092\u0091\u008e\u0095\u0092'+'\u0090\u008b\u008d\u008d\u0093'+'\u008e','ret':'float','params':[],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)]],'wasmRet':_0x5d3ad4[_0xbd7aa9(0x826)]},{'name':_0xbd7aa9(0xcec)+_0xbd7aa9(0x9f4)+'\u0092','ret':_0x5d3ad4[_0xbd7aa9(0x708)],'params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':_0x5d3ad4[_0xbd7aa9(0x995)],'ret':_0x5d3ad4[_0xbd7aa9(0x4c7)],'params':[],'wasmParams':[_0xbd7aa9(0xcd4)],'wasmRet':_0x5d3ad4[_0xbd7aa9(0x59b)]},{'name':'\u0090\u0087\u0089\u0088\u008e'+_0xbd7aa9(0x212)+'\u008b','ret':'void','params':[_0xbd7aa9(0xc91)],'wasmParams':[_0x5d3ad4['TcIwl'],_0xbd7aa9(0xcd4)]},{'name':'\u0095\u0092\u0088\u0087\u0092'+_0xbd7aa9(0x3e9)+'\u0092','ret':_0xbd7aa9(0x882),'params':[],'wasmParams':['i32']},{'name':'\u0092\u0088\u008b\u0095\u0089'+_0xbd7aa9(0xcd1)+'\u008a','ret':_0xbd7aa9(0x882),'params':[],'wasmParams':['i32']},{'name':'\u008a\u008c\u0086\u0095\u0087'+_0xbd7aa9(0x490)+'\u008a','ret':_0xbd7aa9(0x882),'params':[],'wasmParams':['i32']},{'name':'\u0088\u0093\u0088\u0095\u008b'+_0xbd7aa9(0x163)+'\u0087','ret':'bool','params':[],'wasmParams':[_0xbd7aa9(0xcd4)],'wasmRet':'i32'},{'name':_0xbd7aa9(0x7cb)+_0xbd7aa9(0xc46)+'\u0087','ret':_0xbd7aa9(0x882),'params':[],'wasmParams':['i32']},{'name':_0x5d3ad4['NLEiX'],'ret':_0x5d3ad4[_0xbd7aa9(0x4c7)],'params':[],'wasmParams':['i32'],'wasmRet':_0xbd7aa9(0xcd4)},{'name':_0x5d3ad4['fBEyj'],'ret':_0x5d3ad4[_0xbd7aa9(0x4c7)],'params':[],'wasmParams':[_0xbd7aa9(0xcd4)],'wasmRet':_0xbd7aa9(0xcd4)},{'name':_0x5d3ad4[_0xbd7aa9(0xb74)],'ret':_0xbd7aa9(0x882),'params':[],'wasmParams':['i32']},{'name':'\u0095\u0087\u0089\u008c\u008e'+_0xbd7aa9(0xbed)+'\u0095','ret':_0xbd7aa9(0x882),'params':[],'wasmParams':['i32']},{'name':_0xbd7aa9(0xa9b)+'\u0095\u0089\u008b\u008d\u008a'+'\u008b','ret':_0x5d3ad4['NpJTx'],'params':[_0xbd7aa9(0xc91),_0x5d3ad4['NpJTx']],'wasmParams':[_0xbd7aa9(0xcd4),_0xbd7aa9(0xcd4),_0xbd7aa9(0xcd4)],'wasmRet':_0xbd7aa9(0xcd4)},{'name':'\u0088\u0089\u008f\u0091\u0094'+'\u0092\u008b\u008c\u0088\u0089'+'\u0090','ret':'void','params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':_0xbd7aa9(0x5dc)+'\u0086\u0090\u0086\u0091\u008a'+'\u0092','ret':_0xbd7aa9(0xc91),'params':[],'wasmParams':[_0xbd7aa9(0xcd4)],'wasmRet':_0x5d3ad4[_0xbd7aa9(0x59b)]},{'name':_0x5d3ad4[_0xbd7aa9(0x9ca)],'ret':_0xbd7aa9(0x882),'params':[_0xbd7aa9(0xc91)],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)],_0xbd7aa9(0xcd4)]},{'name':_0xbd7aa9(0x489)+_0xbd7aa9(0x749)+'\u008e','ret':'void','params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':_0xbd7aa9(0xd45)+'\u0086\u008c\u008a\u008b\u0086'+'\u0089','ret':_0x5d3ad4[_0xbd7aa9(0x4c7)],'params':[],'wasmParams':['i32'],'wasmRet':_0x5d3ad4['TcIwl']},{'name':_0x5d3ad4[_0xbd7aa9(0xa7c)],'ret':_0xbd7aa9(0x882),'params':[],'wasmParams':[_0x5d3ad4['TcIwl']]},{'name':_0x5d3ad4[_0xbd7aa9(0xd59)],'ret':_0xbd7aa9(0x882),'params':[],'wasmParams':[_0x5d3ad4['TcIwl']]},{'name':_0x5d3ad4['kyshX'],'ret':_0xbd7aa9(0x882),'params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':_0x5d3ad4[_0xbd7aa9(0x26c)],'ret':_0xbd7aa9(0x882),'params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':_0xbd7aa9(0xa5f)+_0xbd7aa9(0xadc)+'\u0094','ret':'void','params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':_0xbd7aa9(0x57d)+'\u008b\u0091\u008d\u0086\u0093'+'\u0090','ret':_0x5d3ad4['aWEAL'],'params':[_0xbd7aa9(0xc91)],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)],_0x5d3ad4['TcIwl']]},{'name':_0x5d3ad4[_0xbd7aa9(0x4e5)],'ret':_0xbd7aa9(0x882),'params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':'\u008d\u0095\u0087\u0093\u0092'+_0xbd7aa9(0x99b)+'\u008b','ret':_0x5d3ad4[_0xbd7aa9(0x708)],'params':[],'wasmParams':['i32']},{'name':_0xbd7aa9(0x7e1)+_0xbd7aa9(0x963)+'\u008c','ret':_0xbd7aa9(0x882),'params':[],'wasmParams':['i32']},{'name':_0x5d3ad4[_0xbd7aa9(0xb4d)],'ret':'void','params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':_0x5d3ad4[_0xbd7aa9(0x59d)],'ret':_0x5d3ad4[_0xbd7aa9(0x708)],'params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':'\u0087\u008b\u0088\u0090\u008e'+'\u008b\u0089\u0089\u0088\u0093'+'\u0092','ret':_0xbd7aa9(0x882),'params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':'\u0088\u008b\u008f\u008a\u008e'+_0xbd7aa9(0x793)+'\u0091','ret':_0xbd7aa9(0x882),'params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':_0x5d3ad4['DLWqi'],'ret':'void','params':[_0xbd7aa9(0xc91)],'wasmParams':[_0xbd7aa9(0xcd4),_0x5d3ad4[_0xbd7aa9(0x59b)]]},{'name':'\u0094\u0087\u008b\u008d\u0089'+'\u0095\u008a\u0091\u0095\u0092'+'\u0090','ret':_0xbd7aa9(0x882),'params':[],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)]]},{'name':_0x5d3ad4[_0xbd7aa9(0x92c)],'ret':_0x5d3ad4['aWEAL'],'params':[],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)]]},{'name':_0xbd7aa9(0x67a)+'\u0093\u0089\u0090\u008c\u008c'+'\u008a','ret':_0x5d3ad4['aWEAL'],'params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':_0x5d3ad4['BLqNF'],'ret':_0xbd7aa9(0x882),'params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':_0xbd7aa9(0x326)+'\u008b\u008e\u008e\u0091\u0086'+'\u0087','ret':_0xbd7aa9(0x882),'params':[],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)]]},{'name':_0x5d3ad4[_0xbd7aa9(0xa91)],'ret':_0xbd7aa9(0x882),'params':[],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)]]},{'name':'\u0094\u008d\u0087\u0094\u008d'+'\u008a\u0092\u008b\u008d\u0091'+'\u0094','ret':_0x5d3ad4[_0xbd7aa9(0x708)],'params':[_0xbd7aa9(0xc91)],'wasmParams':['i32',_0xbd7aa9(0xcd4)]},{'name':_0xbd7aa9(0x77e)+'\u0088\u0091\u0095\u0092\u0092'+'\u008f','ret':'bool','params':[],'wasmParams':['i32'],'wasmRet':_0xbd7aa9(0xcd4)},{'name':_0xbd7aa9(0x955)+_0xbd7aa9(0x7c0)+'\u0086','ret':_0xbd7aa9(0xc91),'params':[],'wasmParams':[_0xbd7aa9(0xcd4)],'wasmRet':_0x5d3ad4[_0xbd7aa9(0x59b)]},{'name':'\u0089\u0095\u0092\u0090\u0086'+'\u0093\u0086\u0087\u008c\u008a'+'\u008d','ret':_0xbd7aa9(0xc91),'params':[],'wasmParams':['i32'],'wasmRet':_0x5d3ad4[_0xbd7aa9(0x59b)]},{'name':_0x5d3ad4['VuEUN'],'ret':'void','params':[],'wasmParams':['i32']},{'name':_0x5d3ad4[_0xbd7aa9(0x21b)],'ret':'void','params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':_0x5d3ad4['lPXNe'],'ret':_0xbd7aa9(0x882),'params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':'\u0087\u0095\u008f\u008d\u008e'+_0xbd7aa9(0xa3f)+'\u0091','ret':_0xbd7aa9(0x882),'params':[],'wasmParams':['i32']},{'name':'\u0089\u0086\u0090\u0088\u008c'+'\u0088\u008e\u0088\u008b\u0090'+'\u008b','ret':_0x5d3ad4[_0xbd7aa9(0x708)],'params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':_0xbd7aa9(0x6f3)+_0xbd7aa9(0xae5)+'\u008f','ret':_0xbd7aa9(0x882),'params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':_0xbd7aa9(0xa62)+'\u0093\u0095\u0095\u0093\u008a'+'\u0094','ret':_0xbd7aa9(0x882),'params':[_0xbd7aa9(0xa82)],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)],'f32']},{'name':'\u008c\u008d\u0095\u0089\u008a'+'\u0089\u008e\u0086\u0095\u008c'+'\u0092','ret':_0xbd7aa9(0xc91),'params':[],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)]],'wasmRet':_0xbd7aa9(0xcd4)},{'name':_0x5d3ad4[_0xbd7aa9(0x525)],'ret':_0xbd7aa9(0x882),'params':[],'wasmParams':[_0x5d3ad4['TcIwl']]},{'name':'\u0087\u0093\u0093\u0087\u0087'+'\u008e\u0089\u0093\u0095\u0094'+'\u0094','ret':_0xbd7aa9(0x882),'params':[],'wasmParams':['i32']},{'name':'\u0090\u0090\u008f\u008d\u008a'+'\u0094\u0093\u0088\u0088\u0093'+'\u0092','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x5d3ad4['mwoWX'],'ret':_0xbd7aa9(0xc91),'params':[],'wasmParams':[_0xbd7aa9(0xcd4)],'wasmRet':_0x5d3ad4[_0xbd7aa9(0x59b)]},{'name':'\u0094\u008c\u008f\u008e\u008b'+_0xbd7aa9(0x56b)+'\u0087','ret':'bool','params':[_0xbd7aa9(0xc91),_0xbd7aa9(0xc91)],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)],'i32','i32'],'wasmRet':'i32'},{'name':_0x5d3ad4[_0xbd7aa9(0x267)],'ret':_0xbd7aa9(0x882),'params':[],'wasmParams':[_0x5d3ad4['TcIwl']]},{'name':'\u0094\u008e\u0091\u008d\u0095'+_0xbd7aa9(0x877)+'\u008e','ret':_0x5d3ad4['aWEAL'],'params':[],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)]]},{'name':_0x5d3ad4['NKvjq'],'ret':_0xbd7aa9(0x882),'params':[],'wasmParams':[_0x5d3ad4['TcIwl']]},{'name':_0x5d3ad4[_0xbd7aa9(0xba5)],'ret':_0x5d3ad4['aWEAL'],'params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':_0x5d3ad4[_0xbd7aa9(0x427)],'ret':_0xbd7aa9(0x882),'params':[_0xbd7aa9(0xa82)],'wasmParams':['i32','f32']},{'name':_0x5d3ad4['xRlhQ'],'ret':'void','params':[],'wasmParams':['i32']},{'name':_0xbd7aa9(0x735)+_0xbd7aa9(0xb5b)+'\u008d','ret':_0x5d3ad4[_0xbd7aa9(0x4c7)],'params':[_0xbd7aa9(0xc91),'bool'],'wasmParams':[_0x5d3ad4['TcIwl'],'i32','i32'],'wasmRet':'i32'},{'name':'\u008d\u0094\u0092\u0093\u0092'+'\u0086\u008c\u008a\u0087\u0089'+'\u0095','ret':'void','params':[_0x5d3ad4[_0xbd7aa9(0x4f0)],'bool'],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)],_0x5d3ad4['WuOHK'],_0xbd7aa9(0xcd4)]},{'name':'\u0094\u0090\u0095\u0092\u008e'+_0xbd7aa9(0xbd8)+'\u008f','ret':'void','params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':_0xbd7aa9(0xa92)+_0xbd7aa9(0x8ee)+'\u008c','ret':'void','params':[],'wasmParams':[_0x5d3ad4['TcIwl']]},{'name':_0x5d3ad4['wMfQu'],'ret':_0x5d3ad4[_0xbd7aa9(0x708)],'params':[],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)]]}],'TDM_GameManager':[{'name':'\u008e\u0091\u0092\u0087\u0089'+_0xbd7aa9(0x930)+'\u0090','ret':_0x5d3ad4[_0xbd7aa9(0x708)],'params':[],'wasmParams':[_0x5d3ad4['TcIwl']]},{'name':_0x5d3ad4['PclqR'],'ret':_0x5d3ad4[_0xbd7aa9(0x708)],'params':[],'wasmParams':['i32']},{'name':_0xbd7aa9(0x243)+'\u008c\u008b\u008f\u008d\u0088'+'\u0089','ret':_0xbd7aa9(0xc91),'params':['int'],'wasmParams':['i32',_0xbd7aa9(0xcd4)],'wasmRet':_0xbd7aa9(0xcd4)},{'name':_0x5d3ad4[_0xbd7aa9(0x1b9)],'ret':'void','params':[],'wasmParams':['i32']},{'name':_0xbd7aa9(0x8e9)+_0xbd7aa9(0xc09)+'\u008c','ret':_0xbd7aa9(0x882),'params':[_0x5d3ad4[_0xbd7aa9(0x4c7)]],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)],'i32']},{'name':_0xbd7aa9(0x5dd)+'\u0090\u008d\u0094\u0087\u0091'+'\u0094','ret':_0x5d3ad4[_0xbd7aa9(0x708)],'params':[],'wasmParams':['i32']},{'name':_0x5d3ad4['xuawf'],'ret':_0x5d3ad4['aWEAL'],'params':[],'wasmParams':[_0x5d3ad4['TcIwl']]},{'name':'\u008d\u008f\u0086\u0092\u008c'+_0xbd7aa9(0xcac)+'\u0087','ret':_0x5d3ad4[_0xbd7aa9(0x708)],'params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':'.ctor','ret':_0x5d3ad4['aWEAL'],'params':[],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)]]},{'name':_0x5d3ad4['dnNEB'],'ret':_0xbd7aa9(0x882),'params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':_0x5d3ad4[_0xbd7aa9(0x61b)],'ret':'void','params':[],'wasmParams':['i32']},{'name':_0x5d3ad4['lFYey'],'ret':_0xbd7aa9(0x882),'params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':_0xbd7aa9(0x249)+_0xbd7aa9(0x421)+'\u008c','ret':_0x5d3ad4['aWEAL'],'params':[],'wasmParams':[_0x5d3ad4['TcIwl']]},{'name':_0x5d3ad4[_0xbd7aa9(0x945)],'ret':_0xbd7aa9(0x882),'params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':'OnDes'+_0xbd7aa9(0x2c7),'ret':'void','params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':_0x5d3ad4[_0xbd7aa9(0xb26)],'ret':'void','params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':_0xbd7aa9(0xa39)+'\u008c\u008e\u0095\u0088\u008e'+'\u0091','ret':_0x5d3ad4['aWEAL'],'params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':'\u0091\u0095\u0087\u0088\u0091'+_0xbd7aa9(0x338)+'\u008a','ret':'void','params':[],'wasmParams':['i32']},{'name':_0xbd7aa9(0x650)+'rcial'+'Break'+'Compl'+_0xbd7aa9(0xb42),'ret':_0x5d3ad4[_0xbd7aa9(0x708)],'params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':_0x5d3ad4[_0xbd7aa9(0x73b)],'ret':_0x5d3ad4['aWEAL'],'params':['bool'],'wasmParams':[_0xbd7aa9(0xcd4),_0x5d3ad4[_0xbd7aa9(0x59b)]]},{'name':_0xbd7aa9(0x764)+_0xbd7aa9(0x850)+'\u0086','ret':_0x5d3ad4['aWEAL'],'params':['int',_0xbd7aa9(0x24a),_0xbd7aa9(0x24a)],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)],_0x5d3ad4[_0xbd7aa9(0x59b)],'i32',_0xbd7aa9(0xcd4)]},{'name':_0x5d3ad4[_0xbd7aa9(0xbe6)],'ret':_0x5d3ad4['aWEAL'],'params':[],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)]]},{'name':_0x5d3ad4[_0xbd7aa9(0x7a9)],'ret':_0xbd7aa9(0x882),'params':[_0xbd7aa9(0x24a),_0xbd7aa9(0x24a),_0x5d3ad4['ofqOL']],'wasmParams':['i32',_0x5d3ad4['TcIwl'],_0xbd7aa9(0xcd4),_0x5d3ad4[_0xbd7aa9(0x59b)]]},{'name':_0x5d3ad4[_0xbd7aa9(0x3c6)],'ret':_0xbd7aa9(0xc91),'params':[],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)]],'wasmRet':_0x5d3ad4[_0xbd7aa9(0x59b)]},{'name':_0x5d3ad4[_0xbd7aa9(0x267)],'ret':_0xbd7aa9(0x882),'params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':'\u008f\u0088\u008f\u0089\u0089'+_0xbd7aa9(0xda9)+'\u0087','ret':'void','params':[],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)]]},{'name':_0xbd7aa9(0xa06)+'\u0095\u008c\u0087\u0086\u0087'+'\u008b','ret':_0x5d3ad4[_0xbd7aa9(0x708)],'params':[],'wasmParams':['i32']},{'name':_0x5d3ad4['cHjAI'],'ret':_0xbd7aa9(0x882),'params':[],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)]]},{'name':_0xbd7aa9(0x8a3)+'\u008e\u0090\u0087\u0087\u0092'+'\u008e','ret':_0xbd7aa9(0x882),'params':[],'wasmParams':['i32']},{'name':_0x5d3ad4[_0xbd7aa9(0x7e6)],'ret':_0x5d3ad4[_0xbd7aa9(0x708)],'params':[],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)]]},{'name':_0x5d3ad4['BhXMx'],'ret':_0xbd7aa9(0x882),'params':[_0xbd7aa9(0xc91)],'wasmParams':[_0xbd7aa9(0xcd4),_0xbd7aa9(0xcd4)]},{'name':'\u0086\u008f\u0095\u0086\u0087'+_0xbd7aa9(0xbfe)+'\u0094','ret':_0xbd7aa9(0x882),'params':[],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)]]},{'name':'\u008e\u0094\u008b\u0090\u008e'+_0xbd7aa9(0xd19)+'\u008c','ret':_0x5d3ad4[_0xbd7aa9(0x708)],'params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':_0x5d3ad4['VXlFk'],'ret':_0xbd7aa9(0x882),'params':[],'wasmParams':['i32']},{'name':_0xbd7aa9(0x937)+_0xbd7aa9(0xcf7)+_0xbd7aa9(0x8df)+_0xbd7aa9(0x484),'ret':_0xbd7aa9(0x882),'params':[_0x5d3ad4['NpJTx']],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)],_0x5d3ad4[_0xbd7aa9(0x59b)]]},{'name':_0xbd7aa9(0xa0e)+_0xbd7aa9(0xc7b)+'\u0095','ret':'bool','params':[],'wasmParams':[_0xbd7aa9(0xcd4)],'wasmRet':_0xbd7aa9(0xcd4)},{'name':_0xbd7aa9(0x7d0)+_0xbd7aa9(0xc02)+'\u008f','ret':_0x5d3ad4['aWEAL'],'params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':'\u008c\u0086\u0095\u0091\u008a'+_0xbd7aa9(0x6f4)+'\u008a','ret':_0xbd7aa9(0xc91),'params':[_0xbd7aa9(0x24a)],'wasmParams':[_0xbd7aa9(0xcd4),'i32'],'wasmRet':_0x5d3ad4[_0xbd7aa9(0x59b)]},{'name':_0xbd7aa9(0x4ea)+'\u0090\u0088\u008f\u0089\u008a'+'\u008e','ret':_0x5d3ad4['aWEAL'],'params':[_0xbd7aa9(0xc91)],'wasmParams':[_0xbd7aa9(0xcd4),_0x5d3ad4[_0xbd7aa9(0x59b)]]},{'name':'\u0095\u008e\u008f\u008b\u008d'+'\u008f\u0095\u0089\u008e\u008b'+'\u0094','ret':_0x5d3ad4['aWEAL'],'params':[],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)]]},{'name':_0xbd7aa9(0x305)+_0xbd7aa9(0xc17)+'\u008e','ret':'void','params':[],'wasmParams':[_0x5d3ad4['TcIwl']]},{'name':_0x5d3ad4[_0xbd7aa9(0x23d)],'ret':_0x5d3ad4['aWEAL'],'params':['int','int',_0x5d3ad4[_0xbd7aa9(0x5d5)]],'wasmParams':[_0x5d3ad4['TcIwl'],_0xbd7aa9(0xcd4),_0x5d3ad4['TcIwl'],_0x5d3ad4[_0xbd7aa9(0x59b)]]},{'name':_0x5d3ad4['dpXug'],'ret':_0x5d3ad4[_0xbd7aa9(0x708)],'params':[],'wasmParams':[_0x5d3ad4['TcIwl']]},{'name':_0x5d3ad4[_0xbd7aa9(0x323)],'ret':_0xbd7aa9(0x882),'params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':'\u0086\u0088\u0095\u0092\u0094'+_0xbd7aa9(0xa02)+'\u0088','ret':_0xbd7aa9(0x882),'params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':_0x5d3ad4[_0xbd7aa9(0x395)],'ret':_0xbd7aa9(0x882),'params':[],'wasmParams':[_0x5d3ad4['TcIwl']]},{'name':_0xbd7aa9(0xd67)+_0xbd7aa9(0x93b)+'\u0094','ret':_0xbd7aa9(0x882),'params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':_0x5d3ad4[_0xbd7aa9(0x31b)],'ret':_0x5d3ad4[_0xbd7aa9(0x708)],'params':[_0x5d3ad4[_0xbd7aa9(0x4c7)]],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)],_0x5d3ad4['TcIwl']]},{'name':_0x5d3ad4[_0xbd7aa9(0x310)],'ret':_0x5d3ad4['aWEAL'],'params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':_0x5d3ad4[_0xbd7aa9(0x15f)],'ret':'void','params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':_0x5d3ad4[_0xbd7aa9(0x12f)],'ret':_0x5d3ad4[_0xbd7aa9(0x708)],'params':[],'wasmParams':[_0x5d3ad4['TcIwl']]},{'name':_0x5d3ad4[_0xbd7aa9(0xd83)],'ret':_0x5d3ad4[_0xbd7aa9(0x708)],'params':['int',_0xbd7aa9(0x24a)],'wasmParams':[_0x5d3ad4['TcIwl'],'i32',_0x5d3ad4['TcIwl']]},{'name':_0xbd7aa9(0x23e)+'\u0092\u0091\u0094\u008d\u0093'+'\u0086','ret':'void','params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':_0x5d3ad4['XxlJN'],'ret':_0x5d3ad4['aWEAL'],'params':[],'wasmParams':[_0xbd7aa9(0xcd4)]},{'name':_0x5d3ad4[_0xbd7aa9(0x483)],'ret':_0xbd7aa9(0x882),'params':['bool'],'wasmParams':['i32','i32']},{'name':_0xbd7aa9(0x5a8)+_0xbd7aa9(0xdaf)+'\u008a','ret':_0xbd7aa9(0x882),'params':[],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)]]},{'name':'\u0086\u008e\u0087\u0089\u008a'+'\u008e\u008e\u0094\u008f\u0095'+'\u0095','ret':'void','params':[],'wasmParams':[_0x5d3ad4['TcIwl']]},{'name':'\u008e\u0094\u0093\u0094\u008d'+'\u008c\u008b\u008c\u0086\u008f'+'\u0089','ret':_0x5d3ad4['aWEAL'],'params':[],'wasmParams':[_0x5d3ad4[_0xbd7aa9(0x59b)]]}]},_0x276c52=[],_0x2cb4de=[],_0x4986e0={},_0x5a926a=-0x1cfb*0x1+-0x751+0x244c,_0x2e4b87=![],_0x442d69=[],_0x36801f=[{'type':_0xbd7aa9(0x529)+_0xbd7aa9(0xd56)+_0xbd7aa9(0x303),'keep':!![]},{'type':_0xbd7aa9(0x170)+_0xbd7aa9(0x914)+'pt','keep':!![]},{'type':_0x5d3ad4['LIzdC'],'keep':![]},{'type':_0x5d3ad4['KCRQP'],'keep':!![]},{'type':_0x5d3ad4[_0xbd7aa9(0x359)],'keep':!![]},{'type':_0xbd7aa9(0x5ca)+_0xbd7aa9(0x65f)+_0xbd7aa9(0xd00)+'nc','keep':!![],'many':!![]},{'type':_0x5d3ad4[_0xbd7aa9(0xabf)],'keep':!![],'many':!![]},{'type':_0xbd7aa9(0x911)+_0xbd7aa9(0x172)+'ler','keep':!![],'many':!![]},{'type':_0x5d3ad4['geuZm'],'keep':!![],'many':!![]}],_0x253380=[_0xbd7aa9(0x301)+'bly-C'+_0xbd7aa9(0x287)+_0xbd7aa9(0x4f2),_0xbd7aa9(0x301)+_0xbd7aa9(0x19f)+_0xbd7aa9(0x287)+'-firs'+_0xbd7aa9(0x1e7)+_0xbd7aa9(0x4f2),_0xbd7aa9(0x327)+_0xbd7aa9(0x878)+'ge.De'+_0xbd7aa9(0x4df)+'ll',_0xbd7aa9(0x797)+_0xbd7aa9(0x4f1),_0x5d3ad4[_0xbd7aa9(0x506)],_0x5d3ad4[_0xbd7aa9(0x865)]];(function _0x1021b8(){var _0x307bf4=_0xbd7aa9;try{var _0x280398=window[_0x307bf4(0x72f)+_0x307bf4(0x5a4)+_0x307bf4(0x90b)]&&window[_0x307bf4(0x72f)+_0x307bf4(0x5a4)+'dkit'][_0x307bf4(0x680)+'me'];if(!_0x280398||typeof _0x280398['creat'+'ePlug'+'in']!==_0x5d3ad4[_0x307bf4(0x60d)]){_0x4dceb6[_0x307bf4(0x54c)]=_0x5d3ad4['SvPuJ'];return;}_0x4dceb6[_0x307bf4(0x892)+'pted']=!![],_0xaa707f=_0x280398[_0x307bf4(0x357)+_0x307bf4(0xcad)+'in']({'name':_0x5d3ad4['PkkAQ'],'version':_0x582b6a,'referencedAssemblies':_0x253380[_0x307bf4(0xd2d)]()}),_0x4dceb6['ok']=!![];try{var _0x217786=window['Unity'+'WebMo'+'dkit'][_0x307bf4(0x680)+'me'];_0x217786[_0x307bf4(0x6ac)+_0x307bf4(0x64f)+'g']=_0x582b6a+':'+Math['rando'+'m']()[_0x307bf4(0x89d)+_0x307bf4(0x30e)](0x1*-0x137+0x2*0xe75+0x583*-0x5)[_0x307bf4(0xd2d)](0xdee*0x2+-0x1a1*-0x16+-0x3fb0,-0x3*-0xca3+-0x10*0x1b1+-0xacf),_0x845905=_0x217786['__sak'+_0x307bf4(0x64f)+'g'];}catch(_0x1efc39){}_0x5d3ad4[_0x307bf4(0xa87)](_0x3e2042),_0x2de0ca(),_0x4dceb6[_0x307bf4(0x91c)+_0x307bf4(0xa45)+_0x307bf4(0x206)]=_0x276c52['lengt'+'h'],_0xbfe01e(),_0x4dceb6[_0x307bf4(0xa04)+_0x307bf4(0xb3f)]=!![];}catch(_0x5e9515){if(_0x5d3ad4[_0x307bf4(0xab8)]!==_0x307bf4(0x282))_0x4dceb6[_0x307bf4(0x54c)]=_0x5d3ad4['jaulP'](String,_0x5e9515&&_0x5e9515[_0x307bf4(0x200)+'ge']||_0x5e9515);else{var _0xf7bd36=_0x2850f5[_0x307bf4(0x5ca)+'nNetw'+_0x307bf4(0xd00)+'nc']||{};if(!_0x50628f['keys'](_0xf7bd36)[_0x307bf4(0x711)+'h'])return![];return!!_0xad70b6();}}}());var _0x4c343e=new Float32Array(0x16fc*0x1+-0x1*0x2634+0xf39),_0xca2e6c=new Int32Array(_0x4c343e[_0xbd7aa9(0x2d5)+'r']);function _0x570047(_0x238a41){return _0x4c343e[-0x1*0xe5e+0x1be7+-0xd89]=_0x238a41,_0xca2e6c[0x1dcb+0x25af+-0x437a];}function _0xf052f(_0x1aca80){var _0x5b0bcc=_0xbd7aa9;if(_0x5d3ad4['Hfucg']===_0x5b0bcc(0x883)){if(_0x367e12[_0x313cde]['hook']&&_0xb6c36[_0xd20929][_0x5b0bcc(0x5f7)]['table'+_0x5b0bcc(0x851)]!==_0x2c8f2b)_0x3c77cb++;}else return _0xca2e6c[0x160c*0x1+0x373*0x2+-0x1cf2]=_0x5d3ad4[_0x5b0bcc(0xb24)](_0x1aca80,0xace+0xdd7*-0x1+0x309),_0x4c343e[0x58*-0x59+-0x11b*-0x15+0x761];}var _0x1e7b2a={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x570c7c(){var _0x2a714a=_0xbd7aa9,_0x3ce2e9={'xCqHr':function(_0x1a3406,_0x476695){return _0x1a3406/_0x476695;},'IbkEi':function(_0x4aa14e){return _0x4aa14e();},'mlEfO':function(_0x50dce7,_0x557b5b){var _0xed0ed7=_0x4565;return _0x5d3ad4[_0xed0ed7(0x32d)](_0x50dce7,_0x557b5b);}};if(_0x5d3ad4[_0x2a714a(0xc9b)]('UdRnl',_0x2a714a(0xbce)))return _0x3ce2e9['xCqHr'](_0xb731a3[_0x2a714a(0xbda)](_0xb95e9f*(0x1a4b+0x1601*-0x1+0x3e6*-0x1)),0x1e62+-0x1d*-0x29+-0x1*0x22a3);else{try{if(_0xaa707f&&_0xaa707f['_runt'+'ime']){var _0x3679c9=_0xaa707f['_runt'+_0x2a714a(0x363)];if(typeof _0x3679c9[_0x2a714a(0xbb3)+'veGam'+'e']===_0x2a714a(0x880)+'ion'){var _0x164ea7=_0x3679c9['resol'+_0x2a714a(0x833)+'e']();if(_0x164ea7)return _0x1e7b2a['sourc'+'e']=_0x5d3ad4['NlKUx'],_0x164ea7;}if(_0x3679c9['_game']){if('jnqWr'!==_0x2a714a(0x1ba))_0x10a13f=[];else return _0x1e7b2a[_0x2a714a(0x8b0)+'e']=_0x5d3ad4[_0x2a714a(0x125)],_0x3679c9['_game'];}}}catch(_0xde9a4){}try{if(_0x5d3ad4['Uhxwr']==='yFPUG'){var _0x29558f=window['Unity'+_0x2a714a(0x5a4)+_0x2a714a(0x90b)]&&window[_0x2a714a(0x72f)+'WebMo'+_0x2a714a(0x90b)]['Runti'+'me'];if(_0x29558f&&_0x5d3ad4[_0x2a714a(0xb4f)](typeof _0x29558f['resol'+_0x2a714a(0x833)+'e'],'funct'+'ion')){var _0x3b6d65=_0x29558f[_0x2a714a(0xbb3)+'veGam'+'e']();if(_0x3b6d65)return _0x1e7b2a[_0x2a714a(0x8b0)+'e']=_0x2a714a(0x680)+_0x2a714a(0xaad)+'solve'+_0x2a714a(0x4c4)+')',_0x3b6d65;}if(_0x29558f&&_0x29558f['_game'])return _0x1e7b2a[_0x2a714a(0x8b0)+'e']=_0x5d3ad4[_0x2a714a(0x641)],_0x29558f;}else{if(!_0x173ac4)return;_0x197598=![],_0x27993b[_0x2a714a(0x219)]['curso'+'r']=_0x2a714a(0x8e0),_0x3ce2e9[_0x2a714a(0x63b)](_0x53e641);}}catch(_0x5a73bb){}try{if(_0x5d3ad4[_0x2a714a(0x6a4)](_0x2a714a(0x376),_0x2a714a(0x376))){var _0x4dd6f3=window[_0x2a714a(0x6f2)+_0x2a714a(0xb65)+'nce']||window['unity'+_0x2a714a(0xa19)]||window[_0x2a714a(0x538)];if(_0x4dd6f3){if(_0x5d3ad4[_0x2a714a(0x88a)]('kMGpm','kMGpm'))return _0x1e7b2a['sourc'+'e']='windo'+'w\x20glo'+'bal',_0x4dd6f3;else{var _0x1c1d5c=new _0x337c6c(_0x1c97da);for(var _0x3c905f=-0x716*-0x1+-0xc5*0x7+-0x5*0x57;_0x3c905f<_0x4625aa;_0x3c905f++)_0x1c1d5c[_0x3c905f]=_0x463fb9[_0x2a714a(0x94c)+_0x2a714a(0x672)](_0x5d3ad4['MbrGE'](_0x300fcc,_0x4ed9e9)+_0x3c905f);return _0x32dd5['ok']++,_0x1c1d5c;}}}else _0x244204[_0x2a714a(0x54c)]=_0x505bca(_0x8b2d84&&_0xf0055b[_0x2a714a(0x200)+'ge']||_0x263468);}catch(_0x2c7eb6){}try{if(_0x2a714a(0xa8b)===_0x5d3ad4[_0x2a714a(0x251)])_0x19fcf7[_0x2a714a(0x54c)]=_0x3ce2e9[_0x2a714a(0x370)](_0x5b270b,_0x4f5b96&&_0x4dfde1[_0x2a714a(0x200)+'ge']||_0x15bdc1);else{if(typeof game!==_0x5d3ad4[_0x2a714a(0xb57)]&&game)return _0x1e7b2a[_0x2a714a(0x8b0)+'e']=_0x2a714a(0xc0a)+'game\x20'+_0x2a714a(0xa78)+'ng',game;}}catch(_0x2a0775){}try{if('naOJF'!==_0x5d3ad4[_0x2a714a(0x2d2)]){var _0x448f6b=new _0x209786(_0x2a714a(0x7f2)+_0x2a714a(0x522));_0x448f6b[_0x2a714a(0x765)+'essag'+'e'](_0x352268),_0x4cae5b(function(){try{_0x448f6b['close']();}catch(_0xe95306){}},0x1c+-0x26fc+0x27da);}else{var _0x116d3c=Object[_0x2a714a(0x1b1)](window);for(var _0x3c5230=-0x2*0x567+-0x1532+-0x80*-0x40;_0x5d3ad4['rSCbS'](_0x3c5230,_0x116d3c[_0x2a714a(0x711)+'h'])&&_0x3c5230<0xd*0x110+-0x1829+-0x13*-0xab;_0x3c5230++){var _0x1055a4=window[_0x116d3c[_0x3c5230]];if(_0x1055a4&&typeof _0x1055a4===_0x2a714a(0x9f6)+'t'&&_0x1055a4[_0x2a714a(0xbbb)+'e']&&_0x1055a4[_0x2a714a(0xbbb)+'e']['HEAPU'+'8']&&_0x1055a4['Modul'+'e'][_0x2a714a(0x3ce)+'8']['buffe'+'r'])return _0x1e7b2a[_0x2a714a(0x8b0)+'e']=_0x5d3ad4[_0x2a714a(0x7eb)]('windo'+'w.'+_0x116d3c[_0x3c5230],_0x5d3ad4['rpMfK']),_0x1055a4;}}}catch(_0x4dd88f){}return _0x1e7b2a[_0x2a714a(0x8b0)+'e']=null,null;}}function _0x4c2ce9(){var _0x374d5c=_0xbd7aa9,_0x308301={'WKtat':_0x374d5c(0x86a)+_0x374d5c(0xc11)+_0x374d5c(0x175)+'2|7|5'+'|9','EjqHe':function(_0x26318d,_0x5ebb2d){return _0x26318d+_0x5ebb2d;},'skdTE':function(_0x14309e,_0x2390fd){var _0x251032=_0x374d5c;return _0x5d3ad4[_0x251032(0xc78)](_0x14309e,_0x2390fd);},'VGHlX':function(_0x223ef0,_0x3f750b){return _0x5d3ad4['ClIVP'](_0x223ef0,_0x3f750b);},'BibPS':function(_0x432b9a,_0x4df8b1){return _0x432b9a-_0x4df8b1;},'HEdIj':function(_0x18288b,_0x5e9915){return _0x5d3ad4['aZWvf'](_0x18288b,_0x5e9915);},'dqvYz':function(_0x415e8c,_0x2aecd6){return _0x415e8c-_0x2aecd6;}};try{if(_0x2d3c40&&_0x2d3c40[_0x374d5c(0x2d5)+'r']&&_0x2d3c40[_0x374d5c(0x2d5)+'r'][_0x374d5c(0xc4b)+_0x374d5c(0x51c)])return _0x1e7b2a[_0x374d5c(0x8b0)+'e']=_0x1e7b2a[_0x374d5c(0x8b0)+'e']||'insta'+'ntiat'+'e().e'+'xport'+'s.mem'+'ory',new Uint8Array(_0x2d3c40[_0x374d5c(0x2d5)+'r']);}catch(_0x9d555e){}try{if(_0x374d5c(0xc0b)!==_0x374d5c(0xc0b)){var _0x4f3ec4=_0x308301['WKtat'][_0x374d5c(0x823)]('|'),_0x57d249=0x20f6+0x2025+-0x411b;while(!![]){switch(_0x4f3ec4[_0x57d249++]){case'0':var _0x4e0782=_0x286936,_0x1b2903=_0xf470e7;continue;case'1':_0x1a6ef0[_0x374d5c(0xc8c)+'tyle']=_0x207863?_0x374d5c(0x14b)+'6a':'#ff6e'+'74';continue;case'2':_0x21a766[_0x374d5c(0x400)+_0x374d5c(0x3d3)]();continue;case'3':_0x4bd4f9>_0x3ba85a-(0x1*-0xf7b+-0x26fe+0x367f)?(_0x4e0782=_0x308301['EjqHe'](_0x53202d,_0x308301['skdTE'](_0x308301['VGHlX'](_0x495f07,_0x4bd4f9),_0x308301['BibPS'](_0x301775,0x25a+-0x1b84+0x1930))),_0x1b2903=_0x308301['EjqHe'](_0x2c8862,_0x806fa/_0x4bd4f9*(_0x12332a-(-0x792+-0x8*0xe+-0x4*-0x202)))):(_0x4e0782=_0x308301[_0x374d5c(0x6d2)](_0x44ee8c,_0x495f07),_0x1b2903=_0x4fb86b+_0x806fa);continue;case'4':var _0x495f07=_0x308301['dqvYz'](_0x2b694b['x'],_0x28e938['feet'][-0x1c27+-0x168b+0x32b2])*_0x519651,_0x806fa=(_0x2b694b['z']-_0x39bdd8[_0x374d5c(0xa28)][-0x2087+-0x153f+0x35c8])*_0x5394aa;continue;case'5':_0xfc6d0c['fill']();continue;case'6':var _0x4bd4f9=_0x164f64[_0x374d5c(0xcdd)](_0x308301['HEdIj'](_0x495f07*_0x495f07,_0x806fa*_0x806fa));continue;case'7':_0x175bfe[_0x374d5c(0xc5d)](_0x4e0782,_0x1b2903,_0x207863?0x1*0x347+-0x24bd+-0xa8*-0x33:0x1c13+-0x19*0x173+0x82b+0.20000000000000018,0x73*-0x13+-0xfd*0x6+-0x17*-0xa1,_0x5805e0['PI']*(0x2376+0x15f+-0x24d3));continue;case'8':var _0x2b694b=_0x56f1bb['list'][_0x33a3a0];continue;case'9':_0x2b0fdf++;continue;case'10':var _0x207863=_0x4d9650!==null&&_0x2b694b[_0x374d5c(0x9f9)]===_0x238e92;continue;}break;}}else{var _0x4daa16=_0x570c7c();if(_0x4daa16&&_0x4daa16['Modul'+'e']&&_0x4daa16[_0x374d5c(0xbbb)+'e']['HEAPU'+'8']&&_0x4daa16[_0x374d5c(0xbbb)+'e'][_0x374d5c(0x3ce)+'8'][_0x374d5c(0x2d5)+'r'])return _0x4daa16[_0x374d5c(0xbbb)+'e']['HEAPU'+'8'];}}catch(_0xd22c5a){}return null;}function _0x2c613b(){var _0x10f8ca=_0xbd7aa9,_0x5d8775=_0x5d3ad4[_0x10f8ca(0x53d)](_0x4c2ce9);if(!_0x5d8775)return null;try{return new DataView(_0x5d8775['buffe'+'r'],_0x5d8775['byteO'+_0x10f8ca(0x1e4)],_0x5d8775['byteL'+_0x10f8ca(0x51c)]);}catch(_0x4dd9cf){return null;}}function _0x3448cb(_0x17abdd,_0x433f20){var _0x18421e=_0xbd7aa9;if(_0x18421e(0x1f5)===_0x5d3ad4[_0x18421e(0x9d3)]){var _0x4c4f48=_0x5d3ad4['vVhDD'](_0x2c613b);if(!_0x4c4f48)return _0x1e7b2a[_0x18421e(0xc05)+'d']++,_0x1e7b2a[_0x18421e(0x257)+'rror']=_0x1e7b2a[_0x18421e(0x257)+_0x18421e(0x234)]||'no\x20HE'+_0x18421e(0x997)+_0x18421e(0xbbe)+_0x18421e(0x56a)+_0x18421e(0xa3a)+_0x18421e(0xb32)+'\x20reac'+_0x18421e(0xb8e)+_0x18421e(0xc08)+_0x18421e(0x680)+'me.re'+_0x18421e(0xb75)+_0x18421e(0x4c4)+_0x18421e(0xbdf)+'any\x20w'+'indow'+'\x20glob'+'al',undefined;if(_0x17abdd<0xa*-0x3a2+0x1623+0xe31||_0x5d3ad4['HVlin'](_0x17abdd,0x58c+-0x4a6+-0xe2)>_0x4c4f48['byteL'+'ength']){if(_0x5d3ad4[_0x18421e(0x1a9)](_0x18421e(0xc00),_0x5d3ad4[_0x18421e(0xc72)]))try{if(_0x374479[_0x58860f][_0x18421e(0x7fe)+_0x18421e(0x51d)+'dow'])_0x526960[_0x3dbf0c][_0x18421e(0x7fe)+'ntWin'+_0x18421e(0xd85)][_0x18421e(0x765)+'essag'+'e'](_0xb3103e,'*');}catch(_0x5b58f6){}else return _0x1e7b2a[_0x18421e(0xc05)+'d']++,_0x1e7b2a[_0x18421e(0x257)+_0x18421e(0x234)]=_0x1e7b2a['lastE'+'rror']||_0x5d3ad4[_0x18421e(0x2fd)]('addre'+_0x18421e(0xc7f)+_0x17abdd[_0x18421e(0x89d)+'ing'](-0xd*0x226+0x11*-0x1df+0x3bcd),_0x5d3ad4['PvsOs'])+_0x4c4f48['byteL'+'ength'][_0x18421e(0x89d)+'ing'](-0x1*-0x4db+0xb*0x28c+-0x20cf*0x1),undefined;}try{_0x1e7b2a['ok']++;switch(_0x433f20){case'u8':return _0x4c4f48[_0x18421e(0x94c)+_0x18421e(0x672)](_0x17abdd);case'i8':return _0x4c4f48[_0x18421e(0x934)+'t8'](_0x17abdd);case'i16':return _0x4c4f48[_0x18421e(0x934)+'t16'](_0x17abdd,!![]);case _0x18421e(0x3a8):return _0x4c4f48['getUi'+_0x18421e(0x980)](_0x17abdd,!![]);case'i32':return _0x4c4f48[_0x18421e(0x934)+'t32'](_0x17abdd,!![]);case'u32':return _0x4c4f48[_0x18421e(0x94c)+'nt32'](_0x17abdd,!![]);case _0x18421e(0xafc):return _0x4c4f48['getFl'+_0x18421e(0x2f4)](_0x17abdd,!![]);case _0x18421e(0x416):return _0x4c4f48[_0x18421e(0x7f7)+_0x18421e(0x46d)](_0x17abdd,!![]);case'v2':case'v3':case'v4':return _0x4c4f48['getFl'+_0x18421e(0x2f4)](_0x17abdd,!![]);default:return _0x4c4f48['getIn'+'t32'](_0x17abdd,!![]);}}catch(_0x2ab314){return _0x5d3ad4[_0x18421e(0x8e6)]===_0x18421e(0xbc3)?(_0x1e7b2a['faile'+'d']++,_0x1e7b2a[_0x18421e(0x257)+'rror']=_0x1e7b2a['lastE'+_0x18421e(0x234)]||_0x5d3ad4['oeQBy'](String,_0x2ab314&&_0x2ab314['messa'+'ge']||_0x2ab314)['slice'](-0xe67+0x1cd*-0x14+0x326b,0x1772+0x1e8*-0x1+0x3e*-0x57),undefined):{'ok':![],'error':_0x2c8f5e(_0x4eeeec&&_0x3489e5[_0x18421e(0x200)+'ge']||_0x148f8e)['slice'](0x1*0x167+0x2333*-0x1+-0xb44*-0x3,0x4c7*-0x4+-0x7f9+0x3*0x92f)};}}else try{var _0x955d4e=_0x3fd547();if(_0x955d4e[_0x18421e(0x98e)])return!![];var _0x59bee6=_0x5d3ad4[_0x18421e(0x4d5)](_0x130ddb);return!!(_0x59bee6&&_0x4abd7b[_0x18421e(0x85a)+_0x18421e(0xce5)]);}catch(_0x5bddeb){return![];}}function _0x2aff72(_0x1103b1,_0x564179,_0x118ba0){var _0x359102=_0xbd7aa9;if(_0x5d3ad4[_0x359102(0x77c)]==='ZQycB'){var _0x22fc9b=_0x5d3ad4[_0x359102(0xa87)](_0x2c613b);if(!_0x22fc9b||_0x1103b1<-0x2*0xc3a+-0x130*0x18+0x34f4||_0x5d3ad4['OFhgD'](_0x1103b1+(0x15*0xad+-0xc75*0x3+-0x1*-0x1732),_0x22fc9b[_0x359102(0xc4b)+'ength']))return![];try{switch(_0x564179){case'u8':case'i8':_0x22fc9b[_0x359102(0x508)+'nt8'](_0x1103b1,_0x118ba0&-0x10c+0x13*0xb2+-0xb2b);break;case'i16':case _0x5d3ad4[_0x359102(0x886)]:_0x22fc9b[_0x359102(0x6b7)+_0x359102(0x4e3)](_0x1103b1,_0x118ba0|-0x18e3+-0x184f+0x3132,!![]);break;case _0x5d3ad4[_0x359102(0x59b)]:case _0x5d3ad4[_0x359102(0x893)]:_0x22fc9b[_0x359102(0x6b7)+'t32'](_0x1103b1,_0x5d3ad4[_0x359102(0xb7a)](_0x118ba0,-0x2507+0x17a0+0xd67),!![]);break;case _0x359102(0xafc):_0x22fc9b[_0x359102(0x915)+'oat32'](_0x1103b1,_0x118ba0,!![]);break;default:_0x22fc9b[_0x359102(0x6b7)+_0x359102(0xbbd)](_0x1103b1,_0x5d3ad4['GEgCI'](_0x118ba0,0x236c+-0x11a8+-0x11c4),!![]);}return!![];}catch(_0x5ef2d9){return![];}}else _0x2b66d2=_0x4229af(_0xd171b&&_0x66ce30['messa'+'ge']||_0xe3ee7a);}var _0x1601e7={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':_0x5d3ad4['TcIwl']},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':_0xbd7aa9(0xcd4)},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0x32084b(_0x1397a8){var _0x267ddc=_0xbd7aa9,_0x2b3dc0='';for(var _0x1a72bc=-0x1dae*-0x1+0x186e+-0x361c;_0x1a72bc<_0x1397a8[_0x267ddc(0x711)+'h'];_0x1a72bc++){var _0x3a5805=_0x1397a8[_0x1a72bc][_0x267ddc(0x89d)+'ing'](0x1ecf+-0x29*-0x4f+-0x2b66);_0x2b3dc0+=(_0x3a5805['lengt'+'h']<-0x11*-0xad+-0x26fb+0x1b80?'0':'')+_0x3a5805;}return _0x2b3dc0;}function _0xf92f79(_0x7d82ed,_0x2cfc85,_0x2dfd29){var _0x13838=_0xbd7aa9,_0x2c7909={'qasLa':function(_0x4bf853,_0x1f2ae6){return _0x4bf853+_0x1f2ae6;},'Mmtud':function(_0x4aba44,_0x22ff28){return _0x4aba44+_0x22ff28;}},_0x4d64f9=_0x5d3ad4[_0x13838(0x60f)](_0x2c613b);if(!_0x4d64f9)return _0x1e7b2a['faile'+'d']++,_0x1e7b2a['lastE'+_0x13838(0x234)]=_0x1e7b2a['lastE'+'rror']||_0x5d3ad4[_0x13838(0x377)],null;if(_0x5d3ad4[_0x13838(0x43e)](_0x2cfc85,-0x761+0x1*0xaa2+-0x11*0x31)||_0x5d3ad4['JaXiE'](_0x5d3ad4[_0x13838(0xbc9)](_0x2cfc85,_0x2dfd29),_0x4d64f9[_0x13838(0xc4b)+_0x13838(0x51c)]))return _0x1e7b2a[_0x13838(0xc05)+'d']++,_0x1e7b2a['lastE'+_0x13838(0x234)]=_0x1e7b2a[_0x13838(0x257)+'rror']||_0x5d3ad4['mQngu'](_0x13838(0x7a0)+_0x13838(0xc7f)+(_0x7d82ed+_0x2cfc85)['toStr'+_0x13838(0x30e)](0x115*0x3+-0x1a9e+0x359*0x7)+(_0x13838(0x89f)+_0x13838(0x912)+_0x13838(0xbf9)+'0x'),_0x4d64f9[_0x13838(0xc4b)+'ength']['toStr'+'ing'](-0x1*0x1967+0x200f+-0x2*0x34c)),null;try{if(_0x13838(0x7ef)===_0x5d3ad4['oPOUs'])_0x1f8652[_0x2c7909[_0x13838(0x355)](_0x2c7909[_0x13838(0x201)](_0x51bd87,'+0x'),_0x61eec8[_0x5af494]['o']['toStr'+'ing'](-0x1b7a*-0x1+0x8c*-0x40+0x796*0x1))]=_0x127a67[_0x2fd8b9]['v'];else{var _0x35d406=new Uint8Array(_0x2dfd29);for(var _0x5a0c69=-0x11ba*0x1+0x7*0x19c+-0x2*-0x33b;_0x5a0c69<_0x2dfd29;_0x5a0c69++)_0x35d406[_0x5a0c69]=_0x4d64f9['getUi'+'nt8'](_0x7d82ed+_0x2cfc85+_0x5a0c69);return _0x1e7b2a['ok']++,_0x35d406;}}catch(_0x4f525e){return _0x1e7b2a[_0x13838(0xc05)+'d']++,_0x1e7b2a['lastE'+'rror']=_0x1e7b2a['lastE'+'rror']||String(_0x4f525e&&_0x4f525e[_0x13838(0x200)+'ge']||_0x4f525e)[_0x13838(0xd2d)](0x29*-0x66+0x23ef+-0x1d*0xad,0x869+-0x39*0x18+-0x299),null;}}function _0x46f0ed(_0x58b534,_0x25513e,_0xed5703){var _0x26f70a=_0xbd7aa9,_0x5df64a={'FweoU':function(_0x52e4f0,_0x21c650){return _0x52e4f0(_0x21c650);},'mhhCP':function(_0x122d24){return _0x122d24();},'MfoDT':_0x5d3ad4[_0x26f70a(0x53a)],'hIkAg':_0x5d3ad4[_0x26f70a(0x602)],'RWwfc':function(_0x2dfb5e,_0x992940){return _0x5d3ad4['aZWvf'](_0x2dfb5e,_0x992940);},'BEeSZ':_0x26f70a(0x79b)+'ion:f'+'ixed;'+'left:'+'12px;'+'top:1'+_0x26f70a(0x1c8)+'-inde'+_0x26f70a(0xc40)+'74829'+_0x26f70a(0x2e6)+_0x26f70a(0xbfd)+_0x26f70a(0xd81)+_0x26f70a(0x1d8)+'er-se'+_0x26f70a(0x4b6)+'none;','tHqQL':'borde'+_0x26f70a(0x21e)+_0x26f70a(0xb78)+_0x26f70a(0x6d5)+'paddi'+_0x26f70a(0xdb1)+'x\x2012p'+_0x26f70a(0xc01)+_0x26f70a(0x629)+_0x26f70a(0x600)+_0x26f70a(0x57e)+_0x26f70a(0x858)+_0x26f70a(0x156)+_0x26f70a(0x92f)+_0x26f70a(0x44b)+'nospa'+'ce;'};if(_0x26f70a(0xa7a)===_0x5d3ad4['stVLJ']){var _0x3b6a17=_0x1601e7[_0xed5703],_0x556af8=_0xf92f79(_0x58b534,_0x25513e,_0x3b6a17[_0x26f70a(0x159)]);if(!_0x556af8)return null;var _0x3f52e5=new DataView(_0x556af8['buffe'+'r'],_0x556af8[_0x26f70a(0x5ba)+_0x26f70a(0x1e4)],_0x556af8['byteL'+_0x26f70a(0x51c)]),_0x504128=_0x3f52e5[_0x26f70a(0x934)+_0x26f70a(0xbbd)](_0x3b6a17[_0x26f70a(0x66f)],!![]),_0x23f677=_0x3f52e5[_0x26f70a(0x934)+'t32'](_0x3b6a17['hidde'+'n'],!![]),_0x3e1b4b=_0x3f52e5[_0x26f70a(0x94c)+_0x26f70a(0x672)](_0x3b6a17['inite'+'d'])&-0x25bf+-0x12*0x1ad+-0x2*-0x21f5,_0x46aa06=_0xed5703===_0x5d3ad4[_0x26f70a(0x3a5)]?_0x3f52e5['getFl'+_0x26f70a(0x2f4)](_0x3b6a17[_0x26f70a(0x95b)],!![]):_0xed5703==='obfI'?_0x3f52e5['getIn'+'t32'](_0x3b6a17[_0x26f70a(0x95b)],!![]):_0x3f52e5['getUi'+'nt8'](_0x3b6a17[_0x26f70a(0x95b)]),_0xd8ba09=_0x5d3ad4[_0x26f70a(0xb7c)](_0x3f52e5['getUi'+_0x26f70a(0x672)](_0x3b6a17['activ'+'e']),-0xc4c*0x1+-0x403+0x1050);return{'keyAtOffset0':_0x504128,'hidden':_0x23f677,'inited':_0x3e1b4b,'fake':_0x46aa06,'act':_0xd8ba09,'hex':_0x32084b(_0x556af8),'alt':_0xed5703===_0x26f70a(0x5a0)?_0x5d3ad4['TaasG'](_0x23f677,_0x5d3ad4[_0x26f70a(0xb24)](_0x46aa06,0x251f+-0x176b+-0x6da*0x2)):null};}else{var _0x26e91b=_0x4b23ab['creat'+'eElem'+_0x26f70a(0x3b7)](_0x5df64a[_0x26f70a(0xd64)]);_0x26e91b['id']=_0x5df64a[_0x26f70a(0x12b)],_0x26e91b[_0x26f70a(0x219)]['cssTe'+'xt']=_0x5df64a[_0x26f70a(0x777)](_0x5df64a[_0x26f70a(0x526)]+(_0x26f70a(0x166)+'round'+_0x26f70a(0xd12)+_0x26f70a(0x459)+_0x26f70a(0x9cc)+_0x26f70a(0x13f)+_0x26f70a(0xb9f)+_0x26f70a(0x34a)+_0x26f70a(0x4b2)+_0x26f70a(0xbf7)+_0x26f70a(0xb91)+_0x26f70a(0x6d1)+_0x26f70a(0x336)+_0x26f70a(0x9fb)+'or:'),_0x28b607)+';'+_0x5df64a['tHqQL'],_0x26e91b['textC'+_0x26f70a(0xda5)+'t']='sakur'+'a',_0x26e91b[_0x26f70a(0x6d0)+'ck']=function(){var _0x378c8c=_0x26f70a;_0x5df64a[_0x378c8c(0x927)](_0x1530f9,![]),_0x5df64a[_0x378c8c(0x559)](_0x1c2d9c);},_0x2ba6e0[_0x26f70a(0x717)]['appen'+_0x26f70a(0x493)+'d'](_0x26e91b);}}function _0x34eeab(_0xe32a9f,_0x39a7b2,_0x6dede){var _0xeca4fc=_0xbd7aa9,_0x438e5d={'ggdRZ':function(_0xba214,_0x3fab93,_0x526e18){return _0xba214(_0x3fab93,_0x526e18);}};if(_0x5d3ad4['AEUfo'](_0x5d3ad4[_0xeca4fc(0x8c5)],_0xeca4fc(0xa1f))){_0x4f1138[_0xeca4fc(0x5ea)]={};for(var _0x4f186c=-0xa60+0x871+-0x5*-0x63;_0x4f186c<_0x14a032[_0xeca4fc(0x711)+'h'];_0x4f186c++){var _0x3cbbc9=_0x30c840(_0x3f379b+_0x438e5d[_0xeca4fc(0xd08)](_0x322f54,_0x559dfa[_0x4f186c][0x24ee+-0x97*0xd+-0x21*0xe3],0x1518+0x15f0+0x1*-0x2af8),_0xeca4fc(0xcd4));if(_0x3cbbc9!==_0x119bb2)_0x167a8e[_0xeca4fc(0x5ea)][_0x1aae53[_0x4f186c][-0x1*0x13cf+0x1*0x6cd+-0x1*-0xd03]]=_0x3cbbc9;}}else{if(_0xe32a9f===_0x5d3ad4[_0xeca4fc(0x3a5)])return _0x5d3ad4[_0xeca4fc(0x7ec)](_0xf052f,_0x39a7b2^_0x6dede);if(_0xe32a9f===_0xeca4fc(0x5a0))return _0x5d3ad4[_0xeca4fc(0xb23)](_0x39a7b2,_0x6dede)|0x42d+0x1fb*0x8+-0x1405;return _0x5d3ad4[_0xeca4fc(0x90c)](_0x39a7b2^_0x6dede,-0x8c*0x13+0x1066*-0x2+0x1*0x2c2f)!==-0x1*0xc37+0xff5+0x1df*-0x2?-0x1*-0x260f+-0xfef+-0x161f*0x1:-0x12e9+-0x25e1+-0x3*-0x12ee;}}function _0x4392a9(_0x1d9c89,_0x124dd7,_0x5b903d){var _0x522f77=_0xbd7aa9;if(_0x5d3ad4[_0x522f77(0x803)]!==_0x5d3ad4['WNvZd'])return null;else{var _0x1609ce=_0x1601e7[_0x5b903d];if(!_0x1609ce)return null;var _0x6c855d=_0x5d3ad4['UlBSg'](_0x3448cb,_0x5d3ad4['mQngu'](_0x1d9c89+_0x124dd7,_0x1609ce['key']),'u8'),_0x5dcdfb=_0x3448cb(_0x5d3ad4['bPVPz'](_0x1d9c89+_0x124dd7,_0x1609ce[_0x522f77(0xcba)+'n']),'i32'),_0x191e62=_0x3448cb(_0x5d3ad4[_0x522f77(0x2a9)](_0x1d9c89+_0x124dd7,_0x1609ce[_0x522f77(0xbec)+'d']),'u8'),_0x17a592=_0x3448cb(_0x5d3ad4['nlUZo'](_0x5d3ad4['MbrGE'](_0x1d9c89,_0x124dd7),_0x1609ce[_0x522f77(0x95b)]),_0x5b903d===_0x5d3ad4[_0x522f77(0x3a5)]?'f32':_0x5d3ad4[_0x522f77(0x7df)](_0x5b903d,_0x522f77(0x5a0))?_0x5d3ad4[_0x522f77(0x59b)]:'u8'),_0x35390d=_0x5d3ad4[_0x522f77(0x7db)](_0x3448cb,_0x1d9c89+_0x124dd7+_0x1609ce['activ'+'e'],'u8');if(_0x5d3ad4['LmjkF'](_0x6c855d,undefined)||_0x5dcdfb===undefined||_0x5d3ad4[_0x522f77(0x245)](_0x17a592,undefined)||_0x5d3ad4[_0x522f77(0x2a5)](_0x35390d,undefined))return null;_0x6c855d&=0xa5+-0x1*0x1bc8+0x2*0xe11,_0x5dcdfb|=-0x3a1*-0x7+0x3*0x69+-0x1aa2,_0x191e62=_0x5d3ad4[_0x522f77(0x86f)](_0x191e62,0x1*-0x94d+0xe2a+-0x4dd)&0x1187+-0x1b0b+0x1*0x985,_0x35390d&=0x1*-0x13c7+-0x1*-0x53b+0xe8d;var _0x5a3615;if(_0x5b903d===_0x5d3ad4['UlHVO'])_0x5a3615=_0xf052f(_0x5d3ad4[_0x522f77(0x83d)](_0x5dcdfb,_0x6c855d));else{if(_0x5b903d===_0x5d3ad4['mFSvG'])_0x5a3615=_0x5dcdfb^_0x6c855d|0x1*-0x22ee+-0x2181*0x1+0x446f;else _0x5a3615=_0x5d3ad4['eTvfs'](_0x5dcdfb^_0x6c855d,-0x2421+-0x612+-0x39*-0xc2)!==-0x3*0x2a4+0x1057+-0x86b?-0x19*-0x35+-0x1153+0x11*0xb7:-0x1*-0x92b+0x20f*0x1+-0x59d*0x2;}return{'real':_0x5a3615,'fake':_0x17a592,'act':_0x35390d,'init':_0x191e62,'key':_0x6c855d,'hidden':_0x5dcdfb};}}function _0x27e3bf(_0x4831f7,_0x3a6c5f,_0x19222b,_0x553574){var _0x57db29=_0xbd7aa9,_0x2bdac5=('6|5|3'+'|2|4|'+_0x57db29(0xa0f))[_0x57db29(0x823)]('|'),_0x3a6cf7=0x68e*0x2+-0x336+-0x2*0x4f3;while(!![]){switch(_0x2bdac5[_0x3a6cf7++]){case'0':var _0x10ebcd;continue;case'1':if(_0x19222b===_0x5d3ad4[_0x57db29(0x3a5)])_0x10ebcd=_0x570047(_0x553574);else{if(_0x5d3ad4[_0x57db29(0x82d)](_0x19222b,_0x5d3ad4[_0x57db29(0xce8)]))_0x10ebcd=_0x553574|0x171f+-0xf07+-0x818;else _0x10ebcd=(_0x553574?0x16cb*-0x1+0x18db+-0x1*0x20f:0x22db+0x2284+-0x455f)&0xf62*0x1+0xced+0xb8*-0x26;}continue;case'2':var _0x3297f6=new DataView(_0x15b133['buffe'+'r'],_0x15b133[_0x57db29(0x5ba)+_0x57db29(0x1e4)],_0x15b133['byteL'+_0x57db29(0x51c)]);continue;case'3':if(!_0x15b133)return![];continue;case'4':var _0x5313ea=_0x5d3ad4['dPBOD'](_0x12251a['keyTy'+'pe'],'u8')?_0x3297f6[_0x57db29(0x94c)+'nt8'](_0x12251a[_0x57db29(0x66f)]):_0x3297f6[_0x57db29(0x934)+_0x57db29(0xbbd)](_0x12251a[_0x57db29(0x66f)],!![]);continue;case'5':var _0x15b133=_0xf92f79(_0x4831f7,_0x3a6c5f,_0x12251a[_0x57db29(0x159)]);continue;case'6':var _0x12251a=_0x1601e7[_0x19222b];continue;case'7':return _0x2aff72(_0x5d3ad4[_0x57db29(0x7eb)](_0x4831f7,_0x3a6c5f)+_0x12251a[_0x57db29(0xcba)+'n'],'i32',_0x5d3ad4[_0x57db29(0x3f2)](_0x10ebcd,_0x5313ea))&&_0x2aff72(_0x4831f7+_0x3a6c5f+_0x12251a['fake'],_0x5d3ad4[_0x57db29(0x58b)](_0x19222b,_0x57db29(0x3dc))?_0x57db29(0xafc):_0x19222b===_0x5d3ad4[_0x57db29(0xce8)]?_0x5d3ad4[_0x57db29(0x59b)]:'u8',_0x19222b==='obfF'?_0x553574:_0x19222b===_0x5d3ad4[_0x57db29(0xce8)]?_0x553574|0x740+0x255a+0x2*-0x164d:_0x553574?0x1*-0x126d+0x216d+-0xeff:0x1018*-0x2+-0x1c79*-0x1+0x1*0x3b7)&&_0x2aff72(_0x5d3ad4[_0x57db29(0x7d8)](_0x4831f7+_0x3a6c5f,_0x12251a[_0x57db29(0x186)+'e']),'u8',-0x1*-0x5c6+0x109a+-0x2cc*0x8);}break;}}var _0x169dc6={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0x31877f=-0x1958+-0x6c6+-0x2*-0x100f+0.03,_0x442873=0x9f2+-0x3*-0x2cc+-0x1254,_0x285fae={},_0x583259=0x59a+0x15d*-0x5+-0x1*-0x137,_0x2468a5=[],_0x5f2199=[];function _0x118728(_0x466c73){var _0x36f3b4=_0xbd7aa9,_0x3aba03={'DSNbH':_0x36f3b4(0xd17)+'e','LQHzf':_0x36f3b4(0xcd4),'YSaDB':function(_0x3447dd,_0xa64056){return _0x3447dd+_0xa64056;}};if(_0x5d3ad4['mbgvU'](_0x5d3ad4[_0x36f3b4(0x321)],'jYNAv')){var _0x53584c=_0x17a0ac['FPSco'+'ntrol'+_0x36f3b4(0x303)]||[],_0x5ee682=[];_0x5f2199=[],_0x2468a5=[];for(var _0x5b5f6b=-0x63f+-0x1*-0x45e+0x1e1*0x1;_0x5d3ad4['oYoQy'](_0x5b5f6b,_0x53584c['lengt'+'h']);_0x5b5f6b++){var _0x361462=_0x53584c[_0x5b5f6b][0xb81*-0x1+0x265+0x91c];if(_0x53584c[_0x5b5f6b][-0x5*0x4dd+-0xf0f+0x2761]!==_0x36f3b4(0x3dc))continue;var _0x4bd0b4=_0x46f0ed(_0x466c73,_0x361462,_0x5d3ad4[_0x36f3b4(0x3a5)]);if(!_0x4bd0b4||_0x4bd0b4['inite'+'d']!==0x268c*0x1+0xdfa*-0x2+-0x1*0xa97)continue;var _0x2a228c=_0x34eeab(_0x5d3ad4[_0x36f3b4(0x3a5)],_0x4bd0b4[_0x36f3b4(0xcba)+'n'],_0x4bd0b4[_0x36f3b4(0x3e8)+_0x36f3b4(0x9ff)+'t0']);if(_0x5d3ad4[_0x36f3b4(0x62d)](typeof _0x2a228c,'numbe'+'r')||!isFinite(_0x2a228c))continue;var _0x113079=_0x5d3ad4[_0x36f3b4(0x928)](_0x466c73+':',_0x361462),_0x846cd0=_0x285fae[_0x113079];if(!_0x846cd0||_0x2a228c!==_0x846cd0['lastW'+_0x36f3b4(0x6fb)+'n'])_0x846cd0=_0x285fae[_0x113079]={'base':_0x2a228c,'lastWritten':null};var _0x251e37=_0x846cd0[_0x36f3b4(0x20a)],_0x3e39eb=Math[_0x36f3b4(0x347)](_0x251e37);if(_0x3e39eb<0x442+-0x10d5+0xc93+0.0001||_0x3e39eb>-0x250fa+0x6*0x63ca+0x180de){_0x5f2199[_0x36f3b4(0x97d)]({'o':_0x361462,'v':_0x2a228c,'why':'impla'+_0x36f3b4(0xd7d)+'e'});continue;}_0x5ee682[_0x36f3b4(0x97d)]({'o':_0x361462,'v':_0x2a228c,'a':_0x3e39eb,'base':_0x251e37,'key':_0x113079,'st':_0x846cd0});}var _0x1680dc=[];for(var _0x590710=-0x2540+0xaa5+0x1a9b;_0x590710<_0x5ee682[_0x36f3b4(0x711)+'h'];_0x590710++){if(_0x5d3ad4['tOnOH'](_0x36f3b4(0x537),'LDQTJ')){var _0x538f24=_0x5ee682[_0x590710]['a'],_0x4e260f=null;for(var _0x2e5bf4=0x1*0x24cb+-0x1706*0x1+-0xdc5;_0x5d3ad4['oYoQy'](_0x2e5bf4,_0x1680dc['lengt'+'h']);_0x2e5bf4++){var _0x10c45c=_0x1680dc[_0x2e5bf4][_0x36f3b4(0xbbf)]/_0x538f24;if(_0x10c45c>_0x5d3ad4[_0x36f3b4(0xcbc)](0x72c+-0x13b1+-0xe5*-0xe,_0x31877f)&&_0x10c45c<-0x32*0x13+0x2155*0x1+-0x1d9e+_0x31877f){if(_0x5d3ad4[_0x36f3b4(0xaa0)](_0x36f3b4(0xd46),_0x5d3ad4[_0x36f3b4(0x9a8)])){_0x4e260f=_0x1680dc[_0x2e5bf4];break;}else{if(_0x2cec82[_0x36f3b4(0x616)])_0x29a9fa(!![]);}}}!_0x4e260f&&(_0x4e260f={'mean':_0x538f24,'members':[]},_0x1680dc['push'](_0x4e260f));_0x4e260f[_0x36f3b4(0x503)+'rs']['push'](_0x5ee682[_0x590710]),_0x4e260f['mean']=-0x1c8b*0x1+0x9f5*0x1+0x27*0x7a;for(var _0x164aad=-0x25*-0x22+0xef*0x1+-0x5d9;_0x5d3ad4[_0x36f3b4(0x9c9)](_0x164aad,_0x4e260f['membe'+'rs']['lengt'+'h']);_0x164aad++)_0x4e260f['mean']+=_0x4e260f[_0x36f3b4(0x503)+'rs'][_0x164aad]['a'];_0x4e260f['mean']/=_0x4e260f[_0x36f3b4(0x503)+'rs'][_0x36f3b4(0x711)+'h'];}else return _0x2b9cc0['lo']===null||_0x181c2a['hi']===null?-0x400+-0x1080+0x1480:_0x5d3ad4[_0x36f3b4(0x917)](_0x2818c1['hi'],_0x3dac31['lo']);}var _0x9a7b76=[];for(var _0x238f9b=0x491*0x3+0x85c*-0x2+0x305;_0x238f9b<_0x1680dc['lengt'+'h'];_0x238f9b++){if(_0x1680dc[_0x238f9b][_0x36f3b4(0x503)+'rs']['lengt'+'h']>=_0x442873)_0x9a7b76['push'](_0x1680dc[_0x238f9b]);}if(!_0x9a7b76['lengt'+'h']){_0x5f2199[_0x36f3b4(0x97d)]({'o':-(-0x212f*-0x1+0x19b0+-0x37*0x112),'v':0x0,'why':_0x5d3ad4['rgGss']+_0x442873+_0x5d3ad4[_0x36f3b4(0xbb6)]});return;}var _0x256170=_0x9a7b76[0x15*0x18f+-0x1910+0xd*-0x97]['mean'];for(var _0x315238=0x3b*0x3e+0xe85+-0x1ccf;_0x315238<_0x9a7b76[_0x36f3b4(0x711)+'h'];_0x315238++)if(_0x9a7b76[_0x315238][_0x36f3b4(0xbbf)]<_0x256170)_0x256170=_0x9a7b76[_0x315238]['mean'];var _0xefb89c=_0x5d3ad4[_0x36f3b4(0xc78)](_0x256170,-0x265c+0x3*-0xd6+0x28de+0.5);for(var _0x3ad79e=-0x1fe3+-0x209*-0xc+-0x5b*-0x15;_0x5d3ad4[_0x36f3b4(0x43e)](_0x3ad79e,_0x1680dc['lengt'+'h']);_0x3ad79e++){if(_0x5d3ad4[_0x36f3b4(0x6f8)](_0x5d3ad4['faLxz'],_0x36f3b4(0x80b)))_0x500f66=_0x2f0e30['x']/(-0x107*-0xb+0xb88+0x11*-0x11d),_0x542f80=_0x48762b['y']/(-0xa1b+-0xb6b*-0x1+-0x8*-0x53);else{if(_0x5d3ad4['ukTFc'](_0x1680dc[_0x3ad79e][_0x36f3b4(0x503)+'rs']['lengt'+'h'],_0x442873))continue;for(var _0x39f1c7=0x18cd+-0x2195+0x8c8;_0x39f1c7<_0x1680dc[_0x3ad79e]['membe'+'rs']['lengt'+'h'];_0x39f1c7++){_0x5f2199[_0x36f3b4(0x97d)]({'o':_0x1680dc[_0x3ad79e]['membe'+'rs'][_0x39f1c7]['o'],'v':_0x1680dc[_0x3ad79e]['membe'+'rs'][_0x39f1c7]['v'],'why':_0x36f3b4(0xc13)+'eton'});}}}for(var _0x23aae1=0x15da*-0x1+-0xb71+-0x9*-0x3b3;_0x23aae1<_0x9a7b76[_0x36f3b4(0x711)+'h'];_0x23aae1++){var _0x202a4a=_0x9a7b76[_0x23aae1]['membe'+'rs'];for(var _0x405596=0x1257*0x1+-0xf55*-0x1+-0x21ac;_0x5d3ad4['ZqDRQ'](_0x405596,_0x202a4a['lengt'+'h']);_0x405596++){var _0x42799a=_0x202a4a[_0x405596];if(_0x5d3ad4[_0x36f3b4(0x469)](_0x42799a['a'],_0xefb89c)){if(_0x5d3ad4['CBWsT']('QAXkf',_0x5d3ad4['LyyzL'])){_0x253209(![]),_0x5d3ad4[_0x36f3b4(0x67b)](_0x1d6481,_0x57e92d,-0xd71+0x1*0x5a5+0x8f8);return;}else{_0x5f2199[_0x36f3b4(0x97d)]({'o':_0x42799a['o'],'v':_0x42799a['v'],'why':'below'+_0x36f3b4(0x836)+'r\x20'+_0xefb89c['toFix'+'ed'](0x125*0x1b+-0x2489+-0x5a4*-0x1)});continue;}}var _0x3cbcf6=_0x5d3ad4[_0x36f3b4(0xc78)](_0x42799a[_0x36f3b4(0x20a)],_0x169dc6['facto'+'r']);_0x5d3ad4[_0x36f3b4(0x65b)](_0x27e3bf,_0x466c73,_0x42799a['o'],_0x36f3b4(0x3dc),_0x3cbcf6)&&(_0x42799a['st'][_0x36f3b4(0x40a)+_0x36f3b4(0x6fb)+'n']=Math['froun'+'d'](_0x3cbcf6),_0x583259++,_0x2468a5['push']('0x'+_0x42799a['o'][_0x36f3b4(0x89d)+_0x36f3b4(0x30e)](0x1616+-0x888*-0x2+0x2716*-0x1)));}}}else{var _0x42aa20=_0x25937b[_0x19014a];try{var _0x4963a4=_0x331411[_0x36f3b4(0x3eb)+'refix']({'typeName':_0x42aa20['type'],'methodName':_0x3aba03[_0x36f3b4(0x496)],'params':[_0x3aba03['LQHzf'],_0x36f3b4(0xcd4)],'returnType':_0x32e083},_0x142a4a(_0x42aa20[_0x36f3b4(0x6c7)],_0x42aa20['keep'],_0x42aa20[_0x36f3b4(0x9c0)]));_0x466505['push']({'type':_0x42aa20['type'],'hook':_0x4963a4,'keep':_0x42aa20[_0x36f3b4(0x71e)]});}catch(_0x127115){_0x3cd3fc[_0x36f3b4(0x97d)](_0x3aba03[_0x36f3b4(0x3ed)](_0x42aa20['type'],':\x20')+_0x34eb38(_0x127115&&_0x127115[_0x36f3b4(0x200)+'ge']||_0x127115)[_0x36f3b4(0xd2d)](0x40*-0x50+0xfdc+0x424*0x1,0x1a6b+-0x2217*-0x1+0x49*-0xd2));}}}var _0x17a0ac={'FPScontroller':[[0x1*0x1f3+-0xbbc+0x9d9,_0x5d3ad4[_0xbd7aa9(0x3a5)]],[0x91a+0xba*-0x5+0x110*-0x5,_0x5d3ad4[_0xbd7aa9(0x3a5)]],[-0x1cab+0x7b1+0xf7*0x16,'obfF'],[0xa5b+0x840+-0x1243,_0x5d3ad4['UlHVO']],[0x227a+-0x4d*0x3d+-0xfb1,_0xbd7aa9(0x3dc)],[-0x1*0x338+-0x1fc6+0x1*0x2386,'obfF'],[0x18a5+-0x1a10+-0x1*-0x20b,_0xbd7aa9(0x3dc)],[-0xdb3+0x63*0x15+-0x1*-0x64c,_0xbd7aa9(0x1d6)],[0xaf3*-0x2+-0x6b6*0x4+0x3182,_0xbd7aa9(0x3dc)],[0xf6e+-0x253d*0x1+-0x16ab*-0x1,'i32'],[-0x1895*0x1+0xe7d+0xd*0xd8,'v3'],[0x7ba+0x6bd+-0xd8b,'u8'],[0x11*0x178+0x1*-0x18e9+-0x2d*-0x5,'obfF'],[0xd80+0xae2+-0x175a,'i32'],[-0x15fb*-0x1+-0x1c4c+-0x179*-0x5,'u8'],[0x1*0x201d+-0x1635+-0x8d8*0x1,_0xbd7aa9(0xcd4)],[-0x1*-0xb0d+-0x153c+0xb43,'u8'],[0x3*0x74a+0x23ef+-0x38b8,'u8'],[-0xd*-0x19+0x1bd7+-0x38*0x80,_0x5d3ad4['UlHVO']],[-0x19ea+-0xb85*-0x3+-0x771*0x1,_0x5d3ad4[_0xbd7aa9(0x3a5)]],[0x18a1+-0x5c7+-0x118e,_0xbd7aa9(0xafc)],[-0x3*-0x6d9+0xf3*0xd+-0x12*0x1c1,_0x5d3ad4[_0xbd7aa9(0x826)]],[0x1*-0x2449+-0x76d*-0x5+0x7c,'v3'],[-0x3*-0x8ef+-0x1f*-0xcd+-0x430*0xc,'v3'],[0x21d7*0x1+0x16b5+-0x3720,_0x5d3ad4[_0xbd7aa9(0x826)]],[-0x651*-0x1+0x5*-0x1d6+-0x44d*-0x1,_0x5d3ad4[_0xbd7aa9(0x826)]],[-0xe21*-0x1+0x19f6*0x1+-0x268f,'u8'],[-0xbaa*0x2+0x14b1*-0x1+-0x2d91*-0x1,'f32'],[0x3*0x3a9+-0x1345*-0x1+-0x1ca8,'v3'],[-0x209b+-0x123*0x13+0x37d8,'u8'],[-0xb39+0x191b+-0x2*0x617,_0x5d3ad4[_0xbd7aa9(0x826)]],[-0x2474+0x97*0x7+0xf9*0x23,_0xbd7aa9(0xafc)],[0x25*-0xdf+0x15db+0xc1c,'u8'],[0x102*-0x19+0xa04*-0x2+0x2ef7,'u8'],[-0x1e27+-0x7*-0x48a+0x21,'obfF'],[0x7cc*-0x1+0x2056+-0x16b2,_0xbd7aa9(0xafc)],[0x1098+0x959*0x3+-0x2ac7,'u8'],[-0x1d99+0xbde*0x1+-0x15*-0xef,_0xbd7aa9(0x3dc)],[0x85d+0x1*-0xf16+-0x59*-0x19,'v3'],[0xcc*-0x5+0x2634+-0x2030,'obfB'],[0x1059+-0x235*0xd+-0x54*-0x2c,_0x5d3ad4['WuOHK']],[0xe4*0x3+-0x3ad*-0x4+-0xf44,_0xbd7aa9(0xafc)],[0x16*-0x89+-0x1619+-0x242b*-0x1,_0x5d3ad4[_0xbd7aa9(0x826)]],[-0x98b*0x3+0x1b78+0x379*0x1,'f32'],[0x20d8+0x1281+0x1*-0x3105,_0xbd7aa9(0xafc)],[-0x2669+-0x1*0x14dd+0x42*0xef,_0x5d3ad4[_0xbd7aa9(0x826)]],[-0x1*0x152b+0x1c32+0xef*-0x5,'u8'],[-0x1*0x1654+0x1f65+-0x6b4,'u8'],[0xb1b+0x2548+-0xbb*0x3f,'u8'],[0xdb4+-0xfff+0x4ab*0x1,_0xbd7aa9(0xafc)],[-0x23d9*0x1+0x402+0x223b,'u8'],[0x1619*-0x1+-0x7*0x1bf+0x2d3*0xd,'u8'],[0x2264+-0x3*-0x823+-0x3865,_0xbd7aa9(0xafc)],[-0x779+0x811+0x1d4,'f32'],[-0x2a1*-0x9+0x1b4a+-0x3083,_0x5d3ad4[_0xbd7aa9(0x826)]],[-0x14fe+0xbec+0x5*0x24e,_0xbd7aa9(0xafc)],[-0x5*-0x1cd+-0x18c2+-0x3*-0x613,_0x5d3ad4[_0xbd7aa9(0x826)]],[-0x85+0x1*-0x12df+0x15e0,'f32'],[0x4f8+-0x73d+0x4c5,_0x5d3ad4[_0xbd7aa9(0x826)]],[0xbe5+-0xb29*0x1+-0x13*-0x18,'v3'],[-0x2b7*-0x1+-0x3*0x793+0x1696,'u8'],[0x6b7+0x1a1e*0x1+-0x1e3d,'v3'],[-0x107*-0x25+0x1a11+0x8*-0x7ae,'f32'],[-0x238a+-0x1*0x370+0x29a6,'v3'],[0x85*0x3e+0xd70+-0x2aee,_0xbd7aa9(0xafc)],[0x165c+0xc6*-0x14+0x38*-0x13,'f32'],[0x175+-0xcec+0xe37,_0x5d3ad4[_0xbd7aa9(0x826)]],[0xba1*-0x1+-0x1*-0xe42+0x23,'u8'],[0xa3f+-0x4c5+-0x2b5,'u8'],[0x1760+0x101f+-0x24b7,'f32'],[0x45d*0x4+0xef*0x29+-0x1*0x34df,_0x5d3ad4[_0xbd7aa9(0x826)]],[-0x1*0x14a7+0x13ce+0x3bd,'v3'],[-0x1c43*-0x1+0x39*-0x72+0xf,'v3'],[0x102a+-0x1d5c+0x102e,_0x5d3ad4[_0xbd7aa9(0x826)]],[-0x1a4a+0x3*-0x676+0x14*0x26f,_0xbd7aa9(0xafc)],[-0x7*-0x3c5+-0x7c+-0x16e3,'f32'],[-0x16a+0xd46+-0x2*0x46a,'f32'],[-0x6f6+-0x2075+-0x2a77*-0x1,'v3'],[-0x26db+-0x1c9a+0x468d,'u8'],[-0x7a0+-0xa4a*-0x2+-0x9d8,'v3'],[-0x190a+-0x83*0x31+-0x1*-0x3545,_0x5d3ad4[_0xbd7aa9(0x59b)]],[0x2575+0x1849*0x1+-0x3a92,_0xbd7aa9(0xafc)],[0x593*0x1+0x7*-0x143+0x32*0x21,_0x5d3ad4[_0xbd7aa9(0x826)]],[0x4e*-0x1d+0x1*0x2024+-0x141a,'f32'],[0x16e2*0x1+-0x6b*-0x14+-0xf*0x1de,_0x5d3ad4[_0xbd7aa9(0x826)]],[-0x136*0x7+-0x2*-0x32f+0x55c,'u8'],[-0x11b*-0x3+-0x6b8*0x4+0x34*0x84,'u8'],[-0xe2c+0x92d*-0x3+-0x2cff*-0x1,'u8'],[0x832+0x2174+-0x2659,'u8'],[-0x14f*-0xa+0x114e+-0x1b16,'u8'],[-0x156f+0x17*0x101+0x1a8,'f32'],[-0x1fd6+0x3c3*0x9+0x5*0x43,_0x5d3ad4[_0xbd7aa9(0x826)]],[-0x1b63+0x1*-0x465+0x2320,_0x5d3ad4[_0xbd7aa9(0x826)]],[-0x2*0x425+0x3e1*-0x2+0x1368,_0x5d3ad4['WuOHK']],[0x245d+-0x2459+0x35c,_0x5d3ad4[_0xbd7aa9(0x826)]],[-0x1a9c+-0x17*-0x29+0x1a51,'u8'],[0x18a7+-0x3b+-0x1504,_0x5d3ad4[_0xbd7aa9(0x826)]],[-0x15c2+-0x2178+-0x1d53*-0x2,'f32'],[0x8cb+-0x24a1+-0x2*-0xfa3,'u8'],[-0x1ae3+0x6b1*0x2+-0x5*-0x365,'v3'],[-0x15+0x303+-0x5*-0x1e,'v3'],[0x3*-0x5b2+0x2696+-0x11f0,'v3'],[0x4*-0x72f+-0x499+-0x547*-0x7,_0x5d3ad4['WuOHK']],[-0x1*0xa8b+-0x14*0x73+0x1727,_0x5d3ad4[_0xbd7aa9(0x826)]],[0x1*0x2ef+0x1256*-0x2+-0x557*-0x7,_0x5d3ad4['WuOHK']],[0x5*-0x681+0x2273+-0x1a*-0x11,'v3'],[0xd7*-0x27+-0x18d0+0x3d45,_0x5d3ad4['TcIwl']],[0x729*-0x1+-0x7ad+-0x5f*-0x32,'u8'],[-0x1*-0x24c1+-0x3b*0x1f+-0x19e0,_0xbd7aa9(0xcd4)],[-0x713*-0x3+0x1*0xdee+-0x1f67,_0x5d3ad4['WuOHK']],[0x1bcd+-0x6*-0x3fd+-0x2ff7,_0x5d3ad4[_0xbd7aa9(0x826)]],[0x15b9*-0x1+-0xd*-0x2ff+-0xd72,_0xbd7aa9(0xafc)],[-0xe36+-0x11*-0x15f+-0x54d,_0xbd7aa9(0xafc)],[0x163+0x12c7+-0x105a,'v3'],[-0x1*0xf5f+-0x1*0x123a+0x2575*0x1,_0xbd7aa9(0xcd4)],[0x23ce+0x2*0xa25+-0x45a*0xc,'u8'],[-0x646+0x178*-0xc+0x1bc7,'u8'],[-0xd15*0x2+0x1fa5+-0x199,'u8'],[-0xeed+-0xe*0x6d+0x18c7*0x1,_0xbd7aa9(0xafc)],[-0x8*0x3dc+-0x33d*0x7+-0x539*-0xb,_0x5d3ad4[_0xbd7aa9(0x59b)]]],'HealthScript':[[-0x3*-0xa89+0x7*0x157+-0x28a4,'u8'],[0x84c+-0x21d*-0x4+-0x419*0x4,_0x5d3ad4[_0xbd7aa9(0x59b)]],[-0x1261+-0xcb9+-0xfcd*-0x2,'f32'],[-0x425*-0x5+-0xdab+0x12*-0x5d,'f32'],[0x1*0xcd5+-0x24c9+0x187c,'f32'],[0x1f54+0xb3*0x13+-0x2c11,_0xbd7aa9(0xafc)],[0x1014+-0x1458+0x4d4,'f32'],[-0x105e*0x2+-0x1b9d*0x1+0x3ced,_0xbd7aa9(0xafc)],[-0x654+-0x1*-0x1eeb+-0x17f7,_0x5d3ad4[_0xbd7aa9(0x59b)]],[-0x2ed*-0x1+-0x1*0x113d+0xef4,'i32'],[0x80f+0x65f+0x52*-0x2b,'u8'],[0x11e3*-0x1+0x10c5+0x1*0x1c7,'u8'],[-0x14df+-0x1cd0+0x3259,'u8'],[0x2b6*0x7+0x1*0xa99+-0x1ce8,'u8'],[0x6*0x329+-0x1a62+-0x416*-0x2,_0xbd7aa9(0x5a0)],[-0x1606+0xa98+0xc42*0x1,_0x5d3ad4['mFSvG']],[-0x4*0x911+0x5*0x36e+0x1406,_0x5d3ad4['mFSvG']],[-0x4*-0x73d+0x1*-0x24ec+0x4*0x23d,'obfI'],[0xe46+0xc5e+-0x1994,_0xbd7aa9(0x5a0)],[-0x1*0x1688+-0x1*-0xf3f+0x86d,_0x5d3ad4[_0xbd7aa9(0x486)]],[0x11d4+-0x9cf+-0x1*0x6d5,_0xbd7aa9(0x3dc)],[-0xe*0x2b1+-0xbde+0x32d4,_0xbd7aa9(0xafc)],[0x3cc+-0x1132+0x12*0xd1,_0x5d3ad4[_0xbd7aa9(0x826)]],[-0x1770+0x215a+-0x89a,_0x5d3ad4['WuOHK']],[0x37f*0x2+-0x133c+0x6c9*0x2,_0x5d3ad4['WuOHK']],[-0x95a+0x1233+-0x77d,_0xbd7aa9(0xafc)],[0x1c0e+-0x2*0x745+-0x54*0x25,'v3'],[-0xa80+-0x87*0xf+0x1*0x13d9,_0xbd7aa9(0xafc)],[0x225*-0x2+0x2034+-0x1a72,_0x5d3ad4['WuOHK']],[-0x1beb+0x220c*0x1+-0x4a1,'u8'],[-0x349+-0x233*-0x10+-0x199*0x13,'u8'],[0xcb5*0x2+-0x771+-0x1069,'i32']],'PlayerConfig':[],'WeaponManager':[[0x1082*-0x1+-0x1*0x12f7+0x2391,'i32'],[-0x17c2+-0xbd1+-0xbe5*-0x3,_0x5d3ad4['TcIwl']],[-0x1b07+-0x20eb*-0x1+-0x5c4,'u8'],[-0xab2+-0x2149+-0x2d*-0xfb,'i32'],[0x1721+-0x3b7*-0x7+-0x30be,'obfF'],[0x54e+-0x1*-0x1a37+-0x7*0x46f,'f32'],[-0x39a*-0x2+-0xed4+0x824,_0xbd7aa9(0xcd4)],[0x2f6+-0x13d*0x1e+0x457*0x8,'u8'],[-0x26ca+0x22a5+0x4ae,'u8'],[0x21df+-0xb4e+-0x1605,_0xbd7aa9(0xcd4)],[-0x167e*-0x1+0x20dd+-0x36cb,_0xbd7aa9(0xafc)],[-0x4*-0x2b0+-0xf*0x5e+0x55*-0xe,_0xbd7aa9(0xafc)],[0xe23+-0xc65*0x2+-0xdf*-0xd,_0x5d3ad4['TcIwl']],[-0x1*0x18b3+-0x152b+0x2e9a,'u8'],[0x1*0x18bf+0x191f+-0x3102,_0xbd7aa9(0x5a0)],[-0x17*0x10f+-0x7f0+0x2139,_0xbd7aa9(0x5a0)],[0xa*0x2+-0x888+0x978,_0x5d3ad4[_0xbd7aa9(0x826)]],[0x182d*0x1+0xca3+-0x23c8,_0xbd7aa9(0xafc)],[-0x14c*0x4+-0x226b+0xd8d*0x3,_0xbd7aa9(0xafc)],[-0xf6b+-0x7bf*0x1+-0x1e*-0xcf,_0x5d3ad4[_0xbd7aa9(0x826)]],[-0x2*0x845+-0x1*0xe71+0x201b,_0x5d3ad4[_0xbd7aa9(0x826)]],[0x129d*-0x1+-0xc5*-0x1f+-0x20b*0x2,'u8'],[-0x1*0x8e4+0x742*-0x1+0x1152,_0x5d3ad4[_0xbd7aa9(0xce8)]],[0x1c3e+-0x161b*0x1+-0x4e3,_0xbd7aa9(0x5a0)],[-0x1c4b+-0x2*0x1311+0x43c1,_0x5d3ad4[_0xbd7aa9(0xce8)]],[-0x1044+-0x1*0x19+0x11c5,_0x5d3ad4[_0xbd7aa9(0x486)]],[0x367+-0x11a6+-0xfb3*-0x1,'obfB'],[0x35b*-0x8+-0xd9d+0x29f5,_0xbd7aa9(0x1d6)],[0x1735+-0x180+-0x1429,'obfB'],[0x11b0+0x2*0x26f+-0x14ea,'obfB'],[-0x1dca*0x1+-0x1eee+0x3e68,_0xbd7aa9(0x5a0)],[-0x1ec5+0x82a+0x1867,_0xbd7aa9(0xcd4)],[0x1*-0x1781+-0x4e7+0x1e38,'u8'],[0x2273*0x1+0x696+-0x2735,_0x5d3ad4['TcIwl']],[0x62d+0x1*0x1127+0x157c*-0x1,_0xbd7aa9(0xcd4)],[0xc0*0x11+0x456+0x78b*-0x2,_0xbd7aa9(0xcd4)],[0x676*0x1+-0x8bc+0x1*0x45a,'u8'],[-0x29+0xe5*0x5+0x11a*-0x2,'u8'],[0xaf2*-0x2+-0xf05+-0x14d*-0x1e,'u8'],[0x1*-0x1223+0xb43+0x8fe,'u8'],[0x1*0x1391+-0xc2e+-0x544,'u8'],[0x2*0xdc2+0x1234+-0x8*0x56d,_0x5d3ad4[_0xbd7aa9(0x59b)]],[-0x2599+0x1*-0x1475+0x3c66,'u8']],'GG_GameManager':[[0xc3d+-0x6be*-0x2+-0x1995,'u8'],[-0x1039+-0x230e*0x1+0x1*0x3373,_0x5d3ad4[_0xbd7aa9(0x826)]],[-0x79*0x1b+-0xf93+0x1c9a,'u8'],[0x198b+0xbf8*-0x1+-0x6a7*0x2,'u8'],[-0x600+0x48*0xc+-0x7c*-0x6,'f32'],[0x21*0xe3+-0x1e5*0xe+-0x271,'f32'],[0x886+-0x10f4+0x8be,_0xbd7aa9(0xcd4)],[0x4d*-0x58+-0x1*-0x1f60+-0x494,_0x5d3ad4[_0xbd7aa9(0x59b)]],[0x1*0xb63+-0x213b+0x1630,'u8'],[0x1*-0x202d+0x2166+-0xc5,'u8'],[-0x1*0x79c+-0x14af+-0xc7*-0x25,_0xbd7aa9(0xafc)],[-0x1*0x104b+0x2313+0x4*-0x493,_0x5d3ad4['WuOHK']],[-0x2*0x8f4+0x2565*0x1+-0x12ed,_0xbd7aa9(0xcd4)],[-0x26dd*0x1+0x2*0xeb9+-0x9ff*-0x1,'u8'],[-0x867*-0x2+0x1eaa+0xbb1*-0x4,'i32'],[-0x1*-0x425+-0xc1d+-0x45a*-0x2,'i32'],[0x6b3+0xa4*0x25+-0x1da7,_0xbd7aa9(0xcd4)],[-0xa6*-0x4+-0x1426+-0x93b*-0x2,_0x5d3ad4[_0xbd7aa9(0xce8)]],[0x1723+0x254e+0x3b75*-0x1,_0xbd7aa9(0x5a0)],[-0xfbe+-0x1fbd+0x121*0x2b,_0xbd7aa9(0x5a0)],[0xa*0x36d+0x551+-0x2667,'u8'],[0x26bd+0x25c+-0x27e9,_0xbd7aa9(0xcd4)],[-0xd*-0x223+-0x3*0xbd+0x7*-0x374,'u8'],[-0x94*-0xd+0x1c63+-0xb7d*0x3,'f32'],[0x1*0x22d3+0x13d4+-0x3527,'u8'],[-0xb93+0x75f+0x16f*0x4,'u8'],[-0x250a+-0x2306+0x49b4,'u8'],[-0x1*-0xa37+-0x26ea+0x199*0x13,_0xbd7aa9(0xcd4)],[0x11bb+-0x5*-0x4b7+-0x27a2,'f32'],[-0x68a*-0x4+0x22e4+-0x3b5c,'u8'],[-0x2*-0xa9d+-0x124*0x1+-0x1*0x1265,'u8'],[-0x30*-0x7+-0x4b1*0x5+0x17dd,'i32'],[0x115a*-0x1+0x11c7+0x43*0x5,_0x5d3ad4[_0xbd7aa9(0x59b)]],[-0x1*-0x62e+0x11*-0x1d0+-0x266*-0xb,_0x5d3ad4['WuOHK']],[-0x278+-0x1+0x43d,_0x5d3ad4['TcIwl']],[0x53a+-0x23e+0x134*-0x1,_0x5d3ad4[_0xbd7aa9(0x826)]],[0x6*0x346+-0x26ca+-0xa79*-0x2,_0xbd7aa9(0xcd4)],[0x10d*-0x1+-0x11*-0x1b1+-0x19e4,_0x5d3ad4['TcIwl']]],'TDM_GameManager':[[0x26c0+0xfe5+-0x368d,'u8'],[0x9e2+0x11*0xc1+-0x1693,'u8'],[0x5*0x74a+0x167*0x10+-0x3ac1,'u8'],[0x2*-0x282+0x16d+0x3bb,_0x5d3ad4['WuOHK']],[0x281*-0x8+0x7b*-0x3e+0x322a,'u8'],[0x1c14+0x8*0x20c+0x2c18*-0x1,'f32'],[-0x1b94+-0x23e0+-0xbe*-0x56,'f32'],[-0x1*-0x6ef+-0x20e*-0xd+-0x1*0x2141,'i32'],[-0xd58+-0x1a4c+0x280c,_0xbd7aa9(0xcd4)],[-0x13d8+0xe69+0x5db,'u8'],[-0x4*-0x2ab+-0xd85*0x2+0x3*0x599,'u8'],[0x179*-0xf+-0x14f1+-0x8*-0x56f,_0x5d3ad4['WuOHK']],[0x38*-0x7b+0x2*-0xada+0x1*0x3110,_0x5d3ad4[_0xbd7aa9(0x826)]],[-0x1d19+-0x3*0x4d6+0x3*0xeb1,'i32'],[0x8b7+-0x7*0x1f7+-0x596*-0x1,'u8'],[-0x37d*-0x5+-0x198c+-0x8ab*-0x1,'obfI'],[-0x17a4+-0x20f*-0x3+0x6d*0x2b,_0x5d3ad4[_0xbd7aa9(0xce8)]],[-0x1fa5+-0x7fd*-0x1+0x1894,_0xbd7aa9(0x5a0)],[0x5db+-0x1de+-0x2fd,_0xbd7aa9(0x5a0)],[0x5*0x19+0x1*0x26cb+0x2634*-0x1,'u8'],[-0x1f99+0x11e3+-0x2*-0x789,'u8'],[-0x2680+0x2e6*-0x3+0x3092,_0xbd7aa9(0xcd4)],[-0x5*0xcf+0x2*-0x178+-0x3*-0x2cd,'u8'],[-0x1*-0x100a+-0xec*-0x22+-0x67*0x72,'u8'],[0xa34+0x1*-0x368+-0x544,'f32'],[0xa13*-0x2+-0xe2*-0x25+-0x18*0x75,_0x5d3ad4[_0xbd7aa9(0x59b)]],[0x1cf8+0x9*-0x421+0x9c1,_0x5d3ad4['TcIwl']],[-0x892+0xa11*0x1+0x15,'f32'],[-0x11*-0x116+0x257a+-0x3658,'i32'],[-0x17af*0x1+0xc97*-0x1+0x25e2,_0xbd7aa9(0xcd4)],[-0x1aa5+0x184b+0x1fd*0x2,_0x5d3ad4['WuOHK']],[0x1*-0x52a+0x767*0x1+-0x99,'f32'],[0x4f6*-0x3+0x11ad*0x1+0x61*-0x3,_0x5d3ad4[_0xbd7aa9(0x59b)]],[-0x1*0xc0+0x4b*0x34+0xc*-0x111,'u8'],[0x42e*-0x2+0x1*0x84f+0xdf*0x2,'u8'],[-0x1481+-0x6af+0x1ce8,_0xbd7aa9(0xafc)]],'PhotonNetworkSync':[[-0xce5*-0x1+0x1f90+-0x1*0x2c41,'v3'],[0x15be+0x830+-0x1dae,_0xbd7aa9(0xcd4)],[-0x1e7+-0x494+0x6bf*0x1,'u8'],[-0x1ca4+-0x17bd+0x34a6,'u8'],[0x20fb*-0x1+-0x1*0x713+0x2856,'v3'],[-0x3b*0x81+-0x3*-0x13e+0x1a55,'u8'],[0x10d*-0x11+0x1f49*-0x1+0x317e,_0x5d3ad4[_0xbd7aa9(0x59b)]],[0x1*0x4ae+-0xdd9*0x1+0x987,_0x5d3ad4['TcIwl']],[-0xba7+0x9eb+0x21c,_0xbd7aa9(0xafc)],[0x107f+-0x3*0x5be+-0x29*-0x7,_0xbd7aa9(0xafc)],[0x72a*0x1+0x1e6f+-0x2531*0x1,_0x5d3ad4['WuOHK']],[0x1*0xc23+0x1*0x1a7b+-0x2632,'v3'],[0xb*0x1c8+0x1*-0x17e1+-0x1*-0x4c1,_0x5d3ad4[_0xbd7aa9(0x826)]],[0x2709+0x32f*0xb+-0x4992,_0x5d3ad4['WuOHK']],[0x1d11+0x21f+-0x1eb0,_0x5d3ad4['TcIwl']],[0xe78+0xcb*0x29+0x205*-0x17,'f32']],'MouseLook':[[0x47*-0x15+-0x99c+-0x169*-0xb,'f32'],[0x63*0xd+0xb75*-0x3+0x1d7*0x10,'f32'],[0x1*-0x1c0d+0x1e3+0x1a46,_0x5d3ad4['WuOHK']],[0x3*-0xac5+-0x1249+0x32b8,'f32'],[-0x5d8*-0x6+-0x47*0xb+-0x1fdf,_0xbd7aa9(0xafc)],[-0x1e7+0x265a+0x39*-0xa3,_0x5d3ad4['WuOHK']],[-0xfab+-0x1f*0x59+0x1aa2,_0x5d3ad4[_0xbd7aa9(0x826)]],[0x61e+0x1b90+0x217a*-0x1,'u8'],[0x2266+-0x1448+-0xde6,'f32'],[-0x3f*0x21+0x95a+-0xff,'f32'],[0x234b+-0x219c+-0x16f,'i32'],[0x1*0x1e57+-0x1eb6+-0x1*-0xa3,'u8'],[-0x7*0x21a+-0x6d0*0x1+0x15ce*0x1,'v2']],'NetworkPlayerAnimations':[[-0x29*0x6+0x22df+-0x2141,'v3'],[0x21b9+-0x1ea*0xe+0x3*-0x213,'v3'],[0x158e+-0x22a2+0xdd4,'u8'],[-0x561+-0x14e*-0x16+-0x168f,_0x5d3ad4[_0xbd7aa9(0x59b)]],[0x122*-0x11+-0x6fb*-0x1+-0xd0f*-0x1,_0xbd7aa9(0xcd4)],[0x40b*-0x3+0x86b*0x1+0x482,_0xbd7aa9(0xafc)],[0x1*-0x15e9+-0x2f*-0x1f+0x1108,_0x5d3ad4[_0xbd7aa9(0x826)]],[-0x425+-0x850+0xd51,_0x5d3ad4[_0xbd7aa9(0x826)]],[0x219b+0x129a+-0x3355*0x1,_0x5d3ad4['WuOHK']],[-0x1048+0x243e+0x2*-0x987,_0x5d3ad4[_0xbd7aa9(0x826)]],[0x2223+0x30b*-0x9+-0x5d4,_0x5d3ad4[_0xbd7aa9(0x826)]],[0x27a+0xcc+-0x256,_0xbd7aa9(0xafc)],[-0x7b3+0x217*-0x4+0x1103,'f32'],[0x1632+-0x1*0x23e3+0xea9,'f32'],[0x2e*0x67+-0x15*0x6d+-0x895,'f32'],[-0x12b6*-0x1+-0x21d1*-0x1+-0x1*0x3387,_0x5d3ad4[_0xbd7aa9(0x826)]],[-0x9cb*0x1+0x6d1+0x3fe,_0x5d3ad4['WuOHK']],[0x2321+0x100e+0x25*-0x15b,_0xbd7aa9(0xcd4)],[-0x225c+-0xb64+0x4ae*0xa,'u8'],[0x1852+0x23cf+-0x3b11,_0xbd7aa9(0xcd4)],[-0x21f7+-0xa67*-0x3+0x3d6,_0x5d3ad4[_0xbd7aa9(0x59b)]],[-0x127c+0x1*-0x1f0d+0x32a1,'u8'],[0x3*-0x991+-0x169a+0x3469,_0x5d3ad4['WuOHK']],[-0x35*0x2e+0x2c3+-0x3*-0x2a1,'f32'],[-0xcd2+-0x21e0+0x2fd6,_0x5d3ad4['WuOHK']],[0x97*0x2f+-0x5*-0x458+-0x3049,_0x5d3ad4['WuOHK']],[0xd49+0xbd1+0x3fd*-0x6,'u8'],[0x35*0x56+0x21d2+-0x64d*0x8,'u8'],[0xe64+0x418*0x6+-0x25b8,'v3'],[-0x17*-0x17f+0x2523+-0x4644,'v3'],[-0x163b+-0x277*-0x7+0x68e,'u8']],'NPC_Cotroller':[[-0x5e4+0x3b3*0x4+0x14*-0x71,'v3'],[-0x106+-0x104*0x7+-0xe*-0x97,_0xbd7aa9(0xafc)],[0x1b3+-0x42*0x49+0x1143,_0x5d3ad4[_0xbd7aa9(0x826)]],[-0x1bdb+0x2*0x56+0x1b85*0x1,'u8'],[-0x44*-0x3b+-0xce9+-0x4*0x9b,'u8'],[-0x1387*0x2+-0x9*0x9+-0x7*-0x5ad,'v3'],[0x2b*-0xda+0x1394+-0x2*-0x8d3,'u8'],[0xb35+0x68*-0x13+-0x2dd,_0x5d3ad4['WuOHK']],[0x2677+0x254b+-0x4b1e,_0x5d3ad4[_0xbd7aa9(0x826)]],[-0x106*-0x1c+-0x109d*0x2+0x54a,_0xbd7aa9(0xafc)],[-0x1b2b+0x1260+0x1*0x987,_0xbd7aa9(0xafc)],[0xee*-0x1f+-0x18c8+0x3662,'u8'],[0xc47+-0x1*-0x55d+0xb*-0x188,_0xbd7aa9(0xafc)],[-0x18fd+-0x1*0x47f+0x1e54*0x1,_0x5d3ad4['WuOHK']],[0x2647+-0x13f+-0x1*0x242c,_0xbd7aa9(0xafc)],[-0x1ebc+0x237*-0x7+0x2f1d,'f32'],[-0xbf9+0x7*0x520+0x1*-0x1703,'u8'],[-0x90c*-0x3+0x7*0x321+0x1*-0x301f,_0x5d3ad4[_0xbd7aa9(0x826)]],[-0x229a+-0x3*-0xcb3+0x5*-0x83,'v3'],[-0x295*0x1+-0x246a+0x27fb,'f32'],[0x166e+-0x52f*0x4+0xb2*-0x1,'i32'],[0xc44+-0x1*0x163d+0x1d*0x61,_0x5d3ad4[_0xbd7aa9(0x826)]],[0x3d9*-0xa+-0x8e9*-0x1+0x1e99,_0x5d3ad4[_0xbd7aa9(0x826)]],[0x22*-0x25+-0x17*-0x75+-0x48d,_0xbd7aa9(0xafc)],[0x23f7+-0x1938+-0x9ab,'v3'],[-0x992+0x19c3*-0x1+0x2475,'f32'],[0x17da+-0xdce+-0xbe*0xc,'f32'],[0x1*-0x1ebb+0x3e9+-0x1c06*-0x1,'v3'],[0x1ee1+-0x1b42+-0x25b,'u8'],[-0x1*0x1f67+0x159b*0x1+0xb14,_0xbd7aa9(0xafc)],[0xc19+-0x16aa+-0x1*-0xbe1,'v3'],[-0x3*-0x6f+0xd*0x164+-0x1201,_0xbd7aa9(0xcd4)],[-0xb5*-0x34+0xe92+-0x31ea,_0xbd7aa9(0xcd4)],[-0x1049*-0x1+0x221+-0x10fa,_0xbd7aa9(0xafc)],[-0x1b19+-0x125*-0x1+0x1b68,'u8'],[0xfef+-0x165f+0x7e8,'v4'],[-0x283*0x3+0x2078+-0x1*0x1767,_0x5d3ad4['WuOHK']],[-0x1419+-0x33*0x11+0x1908,'f32'],[-0x1dfe+0x4bd*-0x1+-0xa3*-0x39,_0xbd7aa9(0xafc)],[0x219b*0x1+0x2*0x1037+-0x1a7*0x27,'u8'],[0x1*-0x1e71+-0x165e+0x366f,_0xbd7aa9(0xcd4)]],'TargetHealth':[[0xe5*0x1a+-0x25d1+0x1*0xe9f,_0xbd7aa9(0xcd4)],[0x129d*-0x1+-0x17d*0x1+0x1*0x142e,'i32'],[0xe95+-0x293+-0xbce,'u8'],[-0x2*0x419+-0x10ae+0x4*0x649,'i32'],[-0x1c8b+-0x21fa+0x3ecd,_0xbd7aa9(0xcd4)],[-0x1902+0x1ade+0x190*-0x1,'i32'],[0x24d8+0xb1a+0x3aa*-0xd,_0x5d3ad4[_0xbd7aa9(0x59b)]],[0xb37*0x3+0x114c+-0x326d,'f32'],[-0xe3*-0x24+-0xd64+0x4*-0x47f,_0xbd7aa9(0xafc)],[-0x2710+-0x7*-0x38d+0xec5,'u8'],[0x1f59+-0x2230+0x36b,_0xbd7aa9(0xafc)],[-0x742*-0x3+0x1aa8*0x1+0x2fca*-0x1,'u8'],[0x1534+-0x41*-0x1f+-0x1c6b,_0x5d3ad4[_0xbd7aa9(0x59b)]],[0x731*-0x1+-0x217*-0x7+0x1b1*-0x4,_0x5d3ad4['TcIwl']],[-0x1b17+0x306+-0x1*-0x18d1,_0xbd7aa9(0xafc)],[-0x9*0x116+0x26c1+0x3*-0x965,'u8']],'SectatorCamera':[[0x263+0x1829+-0x1c*0xf2,_0x5d3ad4[_0xbd7aa9(0x826)]],[-0x11e5+0x2*-0x3c2+0x1981,_0x5d3ad4['WuOHK']],[0xc*0x251+0x1e3a+-0x39ea,_0xbd7aa9(0xafc)],[0x22bd+0xbc9*-0x1+-0x16d4,'v3'],[0x6*0x22f+-0xb52+-0x19c,'v3'],[0x75*-0x45+-0x1ab9+0x3a8a,_0xbd7aa9(0xcd4)],[0x7c9*-0x4+0x1ef+0x1d81,_0x5d3ad4['TcIwl']],[-0x1a01+0x55d*-0x3+0x3b*0xb8,_0xbd7aa9(0xafc)],[0x11*-0x10f+-0x1068*-0x2+-0xe7d,_0x5d3ad4['TcIwl']],[0xb0*0x14+-0x1719+-0x33b*-0x3,_0x5d3ad4['WuOHK']],[0x1*0x1c51+0xa92+0x1*-0x2687,'u8'],[-0x1cd9+0x1c43+-0xf6*-0x1,'v3'],[-0x731+-0x1f69+0x456*0x9,'v4'],[-0x1a34+0x2ad*-0x8+0x3018,'u8'],[0x1d4a+0x236+-0x1f00,'i32']],'UISettings':[[-0x33a*-0x6+-0x186+0x1*-0x11b6,_0x5d3ad4['TcIwl']],[-0x242d+0x1*-0x926+0xf29*0x3,_0xbd7aa9(0xafc)],[0x50*-0x67+0xb9*0x11+0x1*0x152b,'u8'],[-0x14c0*-0x1+0xa8a+-0x1e02,_0x5d3ad4['TcIwl']],[-0x21d*-0x5+0x794+-0x267*0x7,'i32'],[0x1*0x2447+0x23ec+-0x46db,_0xbd7aa9(0xcd4)],[0x1f8c+0x30a+-0x213a,'u8'],[0x453*-0x3+0x1ec6+0x107*-0x10,'u8'],[-0x140f+-0x2*-0x10d+0x1353,'u8'],[-0x4f4*0x2+0xa49*-0x2+-0x107*-0x1f,'u8'],[-0x257*0xc+0x258a+0xcf*-0xa,'u8'],[0x214b+-0x1c60+0x12e*-0x3,'u8'],[-0x411+-0xe3d+0x13b0,'u8'],[-0x10e6+0x1b4c+-0x1*0x8aa,'f32'],[-0xf12+-0x9aa*-0x1+0x72c,_0xbd7aa9(0xafc)],[0xcdf+-0x17b*0xe+0x9f3,'u8'],[0x37*-0x17+-0xa25*-0x2+-0xb*0x12b,_0xbd7aa9(0xafc)],[-0x7e*0x3d+0xd18+0x138e,_0x5d3ad4[_0xbd7aa9(0x59b)]],[-0x3*-0x56b+-0x3*-0x26+-0x2bf*0x5,'u8'],[0x1b2*0x2+0x239d*-0x1+0x23d5,'u8'],[-0x1e61*0x1+-0x959+0xb3*0x3e,'v2'],[0xc8e+0x1d2+-0x4*0x2ae,'v2'],[-0x8a5+0x17c2+0x3cf*-0x3,'u8'],[0x10*-0x246+-0xc2f*0x1+0x3447*0x1,'u8'],[-0x7a*-0x40+-0x4*-0x272+-0x247c,_0x5d3ad4['WuOHK']],[-0x3f6+-0x14cb*0x1+0x1c91,'v3'],[0x1d*0x93+0x1*0x15f4+-0x22bb,_0x5d3ad4['WuOHK']],[-0x15d+-0x18cf+-0xd0*-0x25,'f32'],[-0x1331*-0x1+-0x4f*-0x6f+-0x175*0x22,'f32'],[-0x1488+0x9d0+0xea8,'u8'],[0x1f*-0xf7+-0x1*0x387+0x2561*0x1,'u8'],[0x260f+0x1feb+-0x1b*0x272,_0x5d3ad4[_0xbd7aa9(0x59b)]],[0x3fb*-0x3+-0x1*0x20f1+0x30e2,_0xbd7aa9(0xcd4)],[-0x19d3*-0x1+0x16*-0x1b7+0xfeb,'i32'],[-0x2230+-0x9*0x241+-0x371*-0x11,_0x5d3ad4[_0xbd7aa9(0x59b)]],[0x10fa+0xe73*-0x1+0x1*0x185,'i32'],[0x1*0x250c+-0x133d*0x1+0x3*-0x495,_0x5d3ad4['TcIwl']],[0x25*0x47+0x1311+0x1*-0x1940,'i32'],[-0x260e+-0x3*-0x217+0x23e1,_0xbd7aa9(0xcd4)],[-0x21e1+-0x1a3a*0x1+0x4037,_0x5d3ad4['TcIwl']],[-0x1*-0x3df+0x1bf9+-0x1bb8,'i32'],[-0x8e6+0x629+0xc9*0x9,'u8'],[0xd09+0x2*0x12c8+0x15*-0x234,'u8'],[-0xfdf+0x25bc+-0x1187,'u8'],[-0x151b+0x90d+0x1065,'u8'],[-0x20bb*0x1+0x31c*-0xa+-0x445f*-0x1,'f32']]},_0x379d7f={},_0x5992f4={};function _0xd4b2af(_0x5e15c3,_0x409d75,_0x424175){var _0x2d9f53={'SlnsY':function(_0x2fbae4,_0x34aa2e){return _0x2fbae4+_0x34aa2e;},'Fwjlu':function(_0x5b39c0,_0x383058){return _0x5b39c0+_0x383058;}};return function(_0x288f29){var _0x2e5c9c=_0x4565,_0x590a83={'nqzHr':_0x5d3ad4[_0x2e5c9c(0x921)],'lYSxn':function(_0x1d6063,_0x1a08ad){var _0x21e20b=_0x2e5c9c;return _0x5d3ad4[_0x21e20b(0x7df)](_0x1d6063,_0x1a08ad);}};try{var _0x36b944=_0x288f29&&_0x288f29[_0x2e5c9c(0xa3c)]?_0x288f29[_0x2e5c9c(0xa3c)]():0x201c+-0x46*-0x70+-0x16*0x2da;if(!_0x36b944)return;var _0xd7590c=_0x5992f4[_0x5e15c3]||(_0x5992f4[_0x5e15c3]={}),_0x1d5d96=_0xd7590c[_0x36b944];if(!_0x1d5d96)_0x1d5d96=_0xd7590c[_0x36b944]={'ptr':_0x36b944,'firstSeen':Date['now'](),'hits':0x0};_0x1d5d96['hits']++;if(_0x424175){if(!_0x379d7f[_0x36b944])_0x379d7f[_0x36b944]={'ptr':_0x36b944,'kind':_0x5e15c3,'firstSeen':Date[_0x2e5c9c(0x324)](),'hits':0x0};_0x379d7f[_0x36b944][_0x2e5c9c(0xc0d)]++;}else{var _0x22ad6e=_0xbc0808[_0x5e15c3];if(!_0x22ad6e||_0x22ad6e[_0x2e5c9c(0x41f)]!==_0x36b944){if(_0x2e5c9c(0x7bc)!==_0x2e5c9c(0x2ab)){_0xbc0808[_0x5e15c3]={'ptr':_0x36b944,'firstSeen':Date[_0x2e5c9c(0x324)](),'hits':0x0,'replaced':!!_0x22ad6e};try{var _0x303dfd=_0x276c52['filte'+'r'](function(_0x35c4f3){var _0x580927=_0x2e5c9c;return _0x35c4f3[_0x580927(0x6c7)]===_0x5e15c3;})[0x265*0x10+-0x179f+-0xeb1];_0x3aaf69={'type':_0x5e15c3,'atMs':_0x5d3ad4['lAIUc'](Date[_0x2e5c9c(0x324)](),_0x473e76),'originalFunc':!!(_0x303dfd&&_0x303dfd[_0x2e5c9c(0x5f7)]&&typeof _0x303dfd[_0x2e5c9c(0x5f7)][_0x2e5c9c(0xd44)+_0x2e5c9c(0x64b)+'nc']===_0x2e5c9c(0x880)+_0x2e5c9c(0xb25)),'resolveGameAtFire':!!_0x5d3ad4['BBXHN'](_0x570c7c),'gameSourceAtFire':_0x1e7b2a[_0x2e5c9c(0x8b0)+'e']};}catch(_0x9dc028){}}else{if(_0x3af99a[_0x2e5c9c(0x54c)+'s'][_0x2e5c9c(0x711)+'h']<0x21ef+-0xc4a+-0x159f)_0x4f02b4['error'+'s']['push'](_0x2d9f53[_0x2e5c9c(0xbe2)](_0x2d9f53[_0x2e5c9c(0x6af)](_0x1a2b43+'.'+_0x19a7bc,':\x20'),_0x8146ef(_0x548cc3&&_0x16d064[_0x2e5c9c(0x200)+'ge']||_0xdcfa98)['slice'](-0x4c4+-0x201a+-0x3*-0xc4a,-0x1c26+-0xda*0x9+0x242a)));return _0x79964;}}}if(_0x5e15c3==='FPSco'+'ntrol'+_0x2e5c9c(0x303)&&_0x169dc6['on']){if(_0x2e5c9c(0x743)!==_0x2e5c9c(0x4ca))try{_0x5d3ad4['KrIqp'](_0x118728,_0x36b944);}catch(_0x355027){}else return _0x12f7a0['error'+'s'][_0x2e5c9c(0x97d)](_0x590a83[_0x2e5c9c(0x365)]),-0x1d*0x1d+-0x2545+0x166*0x1d;}if(!_0x409d75){if(_0x5d3ad4['RbdZJ'](_0x2e5c9c(0xa53),_0x2e5c9c(0xa53)))_0x1e55b1[_0x2e5c9c(0x219)][_0x2e5c9c(0x7f0)+'ty']=_0x27d1b9[_0x2e5c9c(0x616)]?'1':'.5';else{var _0x303dfd=_0x276c52['filte'+'r'](function(_0x2c81ac){var _0xa423cf=_0x2e5c9c;return _0x590a83[_0xa423cf(0xb7f)](_0x2c81ac['type'],_0x5e15c3);})[0x94*-0x20+0xdea+0x24b*0x2];if(_0x303dfd&&_0x303dfd[_0x2e5c9c(0x5f7)]){if(_0x2e5c9c(0x799)==='TvNCm')try{_0x303dfd['hook']['enabl'+'ed']=![];}catch(_0x4cb7ef){}else try{var _0x2405fb=_0x86be53;if(_0x2405fb&&_0x2405fb['el'])_0x2405fb['el'][_0x2e5c9c(0x219)][_0x2e5c9c(0x8e8)+'ay']=_0x3b8082?'':'none';var _0x21ad4a=_0x5dc28b;if(_0x21ad4a&&_0x21ad4a['cv'])_0x21ad4a['cv'][_0x2e5c9c(0x219)]['displ'+'ay']=_0x2fb231?'':_0x2e5c9c(0xabd);}catch(_0x4fe11c){}}}}}catch(_0x1926af){}};}function _0x3e2042(){var _0x4995ea=_0xbd7aa9;if(_0x276c52[_0x4995ea(0x711)+'h'])return!![];if(!window[_0x4995ea(0x72f)+_0x4995ea(0x5a4)+'dkit']||!window[_0x4995ea(0x72f)+'WebMo'+_0x4995ea(0x90b)]['Runti'+'me'])return![];var _0x19b04c=window[_0x4995ea(0x72f)+'WebMo'+_0x4995ea(0x90b)]['Runti'+'me'];if(!_0x19b04c['plugi'+'ns']||!_0x19b04c['plugi'+'ns'][_0x4995ea(0x711)+'h'])return![];_0x30daa5=window[_0x4995ea(0x72f)+'WebMo'+'dkit'][_0x4995ea(0x744)+'Wrapp'+'er'],_0xaa707f=_0xaa707f||_0x19b04c[_0x4995ea(0xd9e)+'ns'][_0x19b04c[_0x4995ea(0xd9e)+'ns'][_0x4995ea(0x711)+'h']-(-0xebe+-0x1907*-0x1+-0xa48)];if(!_0xaa707f||typeof _0xaa707f[_0x4995ea(0x3eb)+_0x4995ea(0x391)]!=='funct'+_0x4995ea(0xb25))return![];for(var _0x5d5b8a=-0x1445+0x2*0xd87+0x1*-0x6c9;_0x5d5b8a<_0x36801f['lengt'+'h'];_0x5d5b8a++){if(_0x5d3ad4[_0x4995ea(0x44e)](_0x4995ea(0x703),'xnbet')){var _0x2b3a53=_0x36801f[_0x5d5b8a];try{var _0x605617=_0xaa707f[_0x4995ea(0x3eb)+_0x4995ea(0x391)]({'typeName':_0x2b3a53['type'],'methodName':_0x4995ea(0xd17)+'e','params':[_0x4995ea(0xcd4),_0x4995ea(0xcd4)],'returnType':undefined},_0xd4b2af(_0x2b3a53['type'],_0x2b3a53['keep'],_0x2b3a53[_0x4995ea(0x9c0)]));_0x276c52['push']({'type':_0x2b3a53[_0x4995ea(0x6c7)],'hook':_0x605617,'keep':_0x2b3a53[_0x4995ea(0x71e)]});}catch(_0x2c2b9a){_0x2cb4de['push'](_0x2b3a53[_0x4995ea(0x6c7)]+':\x20'+String(_0x2c2b9a&&_0x2c2b9a[_0x4995ea(0x200)+'ge']||_0x2c2b9a)[_0x4995ea(0xd2d)](-0x2697+-0x2*-0x533+-0x407*-0x7,0x13d*0x1b+0x248c*0x1+-0x455b));}}else return _0x5d3ad4[_0x4995ea(0xb3a)](_0x1f8206['round'](_0x43a1cc*(0x22bf+-0xba2+-0x16b9)),-0x783*-0x5+0x9a4+-0x1*0x2ecf);}return _0x5d3ad4[_0x4995ea(0x762)](_0x276c52[_0x4995ea(0x711)+'h'],-0x82*-0x13+-0xc*-0x47+-0xcfa);}function _0x5e2565(_0x59402f,_0x599c0b){var _0x330511=_0xbd7aa9,_0x292bf2={'SvwmL':_0x330511(0xcea)+_0x330511(0xb4e),'iGasV':_0x5d3ad4[_0x330511(0xd38)]};if(_0x5d3ad4['rSKir'](_0x330511(0x227),_0x330511(0x7d9)))return function(){var _0x349e46=_0x330511;try{var _0x2c38eb=_0x4986e0[_0x599c0b]||(_0x4986e0[_0x599c0b]={'last':null,'hits':0x0,'setLast':null,'setHits':0x0,'setB':null,'pairHits':0x0,'lo':null,'hi':null,'jump':0x0}),_0x128f58=arguments;if(_0x59402f===_0x349e46(0xc19)){if(_0x5d3ad4[_0x349e46(0x6f8)](_0x349e46(0x470),_0x5d3ad4[_0x349e46(0x8ed)]))return _0x209225();else{var _0x2fbe5b=_0x128f58[0xdf3+0xf50+-0x1d43];if(_0x2fbe5b&&typeof _0x2fbe5b[_0x349e46(0xa3c)]===_0x349e46(0x880)+_0x349e46(0xb25)){var _0x40c9bd=_0x2fbe5b[_0x349e46(0xa3c)]();if(typeof _0x40c9bd===_0x349e46(0x4a5)+'r'&&_0x5d3ad4['HixwF'](isFinite,_0x40c9bd)){if(_0x5d3ad4['SAIfv']!==_0x349e46(0x1ca))return _0x528031[_0x349e46(0x60c)+'et']['api']='1',_0x2c22d7['api']=_0x334800,_0x5b187d[_0x349e46(0xb06)](_0x349e46(0x3cf)+_0x349e46(0x568)+'\x20pane'+'l\x20dis'+'abled','color'+':'+_0x5f793c,_0x1933c7),_0x16ad0f;else{if(_0x5d3ad4[_0x349e46(0x58b)](_0x2c38eb['lo'],null)||_0x5d3ad4['LBaWw'](_0x40c9bd,_0x2c38eb['lo']))_0x2c38eb['lo']=_0x40c9bd;if(_0x2c38eb['hi']===null||_0x40c9bd>_0x2c38eb['hi'])_0x2c38eb['hi']=_0x40c9bd;if(_0x2c38eb['last']!==null){var _0x218192=Math['abs'](_0x5d3ad4[_0x349e46(0x4b4)](_0x40c9bd,_0x2c38eb['last']));if(_0x5d3ad4[_0x349e46(0xb8f)](_0x218192,_0x2c38eb['jump']))_0x2c38eb['jump']=_0x218192;}_0x2c38eb[_0x349e46(0xae3)]=_0x40c9bd;}}_0x2c38eb[_0x349e46(0xc0d)]++;if(_0x128f58[-0x1f6*-0xf+0x29*-0x1b+-0x1916]&&typeof _0x128f58[-0x103+-0x2fa*-0x5+-0xdde]['val']===_0x349e46(0x880)+_0x349e46(0xb25)){var _0x367430=_0x128f58[0x235a+0x17b*0x13+-0x3f7a][_0x349e46(0xa3c)]();if(_0x367430)_0x5a926a=_0x367430;}}}}else{_0x128f58[0x1*-0x1126+-0x90e*0x4+0x355f]&&_0x5d3ad4[_0x349e46(0x2c2)](typeof _0x128f58[-0x1*-0x2097+0x1*-0x1885+-0x811*0x1][_0x349e46(0xa3c)],_0x5d3ad4['rIQNa'])&&(_0x2c38eb['setLa'+'st']=_0x128f58[-0x8fb+0xb86+-0x28a][_0x349e46(0xa3c)](),_0x2c38eb['setHi'+'ts']++);_0x128f58[-0x9*0x30d+-0x1*0x23ca+-0x3f41*-0x1]&&typeof _0x128f58[0x12*-0x130+-0x22fc+-0x22b*-0x1a]['val']==='funct'+'ion'&&(_0x2c38eb['setB']=_0x128f58[0x1f81+-0x835+0xba5*-0x2]['val'](),_0x2c38eb[_0x349e46(0xb61)+'its']++);if(_0x128f58[0x2*-0x8+0x10*0xd1+-0xd00]&&typeof _0x128f58[0x1*-0x1c2e+0x2552+-0x1a*0x5a]['val']===_0x5d3ad4['rIQNa']){var _0x405c4c=_0x128f58[0x1759+-0x1675+0x2*-0x72][_0x349e46(0xa3c)]();if(_0x405c4c)_0x5a926a=_0x405c4c;}}}catch(_0xebf650){}};else _0x3adc85['hookP'+_0x330511(0xa65)+'x']({'typeName':_0x292bf2[_0x330511(0x4f7)],'methodName':_0x5626fa[_0x330511(0xa59)],'params':_0x22c23e[_0x330511(0x977)+_0x330511(0x322)],'returnType':_0x1cd8ba['wasmR'+'et']},_0x1ca674(_0x292bf2[_0x330511(0x35f)],_0x11110e['name']));}function _0x2de0ca(){var _0x46104c=_0xbd7aa9,_0x207828={'pKBXq':function(_0x24af2e,_0x1094cf,_0xab4dba){return _0x24af2e(_0x1094cf,_0xab4dba);}};if(_0x2e4b87)return!![];if(!_0xaa707f||_0x5d3ad4['MUKZp'](typeof _0xaa707f['hookP'+'ostfi'+'x'],_0x5d3ad4[_0x46104c(0x60d)]))return![];var _0x5e7a58=_0x13c98e[_0x46104c(0xcea)+_0x46104c(0xb4e)]||[];for(var _0x362726=-0x1ec8+-0x17ea+-0x1b59*-0x2;_0x362726<_0x5e7a58[_0x46104c(0x711)+'h'];_0x362726++){var _0x421d43=_0x5e7a58[_0x362726];try{if(_0x46104c(0x8ff)!==_0x46104c(0x8ff)){var _0x1e4a1c=_0x207828['pKBXq'](_0x809b08,_0x1b4df0+_0x314835(_0x3fb331[_0x787f6][-0xd2b+0x20ab+0x4e*-0x40],0x11*-0x6+-0x1*-0xdc1+-0x29*0x53),'i32');if(_0x1e4a1c!==_0x37618f)_0x4d4b4b[_0x46104c(0x5ea)][_0x324ccc[_0x189b23][-0xefb+-0x5c*0xb+0x12f0]]=_0x1e4a1c;}else{if(_0x421d43[_0x46104c(0xd1e)]==='float'){if(_0x46104c(0x5e0)!==_0x5d3ad4[_0x46104c(0xba8)])_0xaa707f[_0x46104c(0x3eb)+_0x46104c(0xa65)+'x']({'typeName':'Mouse'+_0x46104c(0xb4e),'methodName':_0x421d43['name'],'params':_0x421d43[_0x46104c(0x977)+_0x46104c(0x322)],'returnType':_0x421d43[_0x46104c(0x155)+'et']},_0x5e2565('get',_0x421d43[_0x46104c(0xa59)]));else try{_0x18b1e0=_0x59dcab[_0x46104c(0x1b1)](_0x12f0a5)['slice'](0x1e6*0x1+0x4e7+-0x6cd,0x7*-0x281+-0x1098*0x1+0x2237);}catch(_0x4e7c31){}}else _0x5d3ad4[_0x46104c(0xb16)](_0x421d43[_0x46104c(0xd1e)],'void')&&_0x5d3ad4['yRyBN'](_0x421d43['param'+'s']['lengt'+'h'],-0x35*-0x34+-0x1653*0x1+0x25*0x50)&&_0x5d3ad4[_0x46104c(0x653)](_0x421d43[_0x46104c(0x2b1)+'s'][-0x11*0x14b+0x2*-0x6e1+-0x51b*-0x7],'float')&&_0xaa707f[_0x46104c(0x3eb)+_0x46104c(0x391)]({'typeName':_0x5d3ad4[_0x46104c(0x33a)],'methodName':_0x421d43['name'],'params':_0x421d43[_0x46104c(0x977)+_0x46104c(0x322)],'returnType':undefined},_0x5e2565('set',_0x421d43[_0x46104c(0xa59)]));}}catch(_0x33d505){_0x442d69['push'](String(_0x33d505&&_0x33d505[_0x46104c(0x200)+'ge']||_0x33d505)['slice'](0xa1c+-0x3a6+0x2*-0x33b,0x2*-0x2a6+0x83b*-0x2+0x472*0x5));}}return _0x2e4b87=!![],!![];}function _0x2fe81d(){var _0x777eb6=_0xbd7aa9,_0x314a2f=0x13dd+-0x972+-0xa6b,_0x4ad20b=0x25a9*0x1+0x2*-0xbe5+-0xddf,_0x1bdfca=-0x347*-0x1+0xb*-0x302+0x1dcf,_0x240ac2=0x217d+-0x4d7+-0x1ca6,_0xf5f08b=0x164a+0x22fb+-0x1b*0x21f;try{var _0x5e0df3=window[_0x777eb6(0x72f)+_0x777eb6(0x5a4)+'dkit']&&window[_0x777eb6(0x72f)+'WebMo'+_0x777eb6(0x90b)]['Runti'+'me'],_0x5e0881=_0xaa707f||_0x5e0df3&&_0x5e0df3[_0x777eb6(0xd9e)+'ns']&&_0x5e0df3['plugi'+'ns'][_0x5d3ad4[_0x777eb6(0x917)](_0x5e0df3['plugi'+'ns'][_0x777eb6(0x711)+'h'],-0x77+-0x71*-0x45+-0x1dfd)];if(_0x5e0881&&_0x5e0881['hooks'])for(var _0x24a1e1=0x44*-0x87+-0x1af+0x258b;_0x24a1e1<_0x5e0881['hooks'][_0x777eb6(0x711)+'h'];_0x24a1e1++){var _0x590231=_0x5e0881[_0x777eb6(0x91c)][_0x24a1e1];if(!_0x590231||_0x590231['typeN'+_0x777eb6(0xc28)]!=='Mouse'+'Look')continue;_0x314a2f++;if(_0x5d3ad4['qLkim'](_0x590231[_0x777eb6(0x8c7)+_0x777eb6(0x851)],undefined))_0x4ad20b++;if(_0x590231['appli'+'ed'])_0x1bdfca++;}}catch(_0x5569c2){}for(var _0x14db54 in _0x4986e0){var _0x5a37a6=_0x4986e0[_0x14db54];_0x240ac2+=_0x5a37a6[_0x777eb6(0xc0d)]||0xedc+0x1710+-0x25ec,_0xf5f08b+=(_0x5a37a6[_0x777eb6(0x190)+'ts']||-0x1b2f+-0x2*-0x437+0x12c1)+(_0x5a37a6[_0x777eb6(0xb61)+'its']||-0x508+-0x2eb*-0x1+-0x21d*-0x1);}return{'registered':_0x2e4b87,'total':_0x314a2f,'resolved':_0x4ad20b,'applied':_0x1bdfca,'getterHits':_0x240ac2,'setterHits':_0xf5f08b,'distinct':Object[_0x777eb6(0x1b1)](_0x4986e0)['lengt'+'h'],'errorCount':_0x442d69['lengt'+'h'],'errors':_0x442d69[_0x777eb6(0xd2d)](-0x25a8+-0x56*0x11+0x1ab*0x1a,-0xab0+-0x6*-0x67+0x84a*0x1)};}function _0x40c025(){var _0x5263be=_0xbd7aa9,_0x3e31d9={'OiRaO':function(_0x2569ad,_0x427d01){return _0x2569ad*_0x427d01;},'GgJBT':function(_0x55cacc,_0x4af4f0){return _0x55cacc-_0x4af4f0;},'mxWdl':function(_0x4c94a5,_0x7e53c5){return _0x4c94a5-_0x7e53c5;},'huXqd':function(_0x503aa7,_0x4e8540){var _0x14beab=_0x4565;return _0x5d3ad4[_0x14beab(0x7d8)](_0x503aa7,_0x4e8540);},'SdGrl':function(_0x274907,_0x36b2f9){var _0x1aa39c=_0x4565;return _0x5d3ad4[_0x1aa39c(0x72c)](_0x274907,_0x36b2f9);},'ZMOfr':function(_0x7a3b13,_0x3262f9){return _0x7a3b13*_0x3262f9;},'KbuoI':function(_0x2b75ba,_0x17b138){return _0x2b75ba/_0x17b138;},'DqmAh':function(_0x2eba30,_0x54ea5f){return _0x5d3ad4['MuWYb'](_0x2eba30,_0x54ea5f);},'JbCjW':function(_0x43c9ce,_0x2b292e){return _0x43c9ce/_0x2b292e;},'gjETg':function(_0x279faa,_0x192275){return _0x279faa/_0x192275;},'SnLoh':function(_0x2ddce3,_0x2fcc60){return _0x2ddce3/_0x2fcc60;},'jGFXT':function(_0x285eda,_0x134dbf){return _0x5d3ad4['wtLGA'](_0x285eda,_0x134dbf);},'YPrUP':function(_0x5cab6e,_0x349bb0){var _0x51a89c=_0x4565;return _0x5d3ad4[_0x51a89c(0x7c6)](_0x5cab6e,_0x349bb0);}},_0x22b380=null,_0x228f01=0x1b14+-0x1071+-0xaa3;for(var _0x13e6e9 in _0x4986e0){if('vMIoX'!==_0x5d3ad4['cRnNc']){var _0x1344bb=_0x2695f9(),_0x368fce=null,_0x2badb6=_0x5660c0,_0x488ab9=_0x4e1cad[_0x5263be(0xa0d)];if(_0x1344bb['basis']){_0x368fce=_0x1344bb[_0x5263be(0x98e)];if(_0x1344bb[_0x5263be(0x1bc)])_0x2badb6=_0x1344bb[_0x5263be(0x1bc)];if(_0x1344bb[_0x5263be(0xa0d)]!==null)_0x488ab9=_0x1344bb[_0x5263be(0xa0d)];}var _0x136fb6,_0x5adb60,_0x34a338,_0x197d11,_0x32c175,_0x302cfe,_0x2bd542,_0x2b16ca,_0x3e9d1e;if(_0x368fce)_0x136fb6=_0x368fce['fwd'][-0x8b*-0x3b+-0xa9*-0x1f+-0x118*0x30],_0x5adb60=_0x368fce['fwd'][-0x1c*0xfb+-0x26b2+0x1*0x4227],_0x34a338=_0x368fce['fwd'][0x10*0x70+0x1*0xc5b+-0x1359],_0x197d11=_0x368fce['right'][0xe96+-0x14b0+0x61a],_0x32c175=_0x368fce['right'][-0x149b+0xb12*0x3+-0xc9a*0x1],_0x302cfe=_0x368fce['right'][-0x1326+-0x12d*-0x5+0xd47],_0x2bd542=_0x368fce['up'][-0x111a+-0x2*-0xeb1+-0x83*0x18],_0x2b16ca=_0x368fce['up'][0x1*-0x38c+-0x30a*-0x5+0x1*-0xba5],_0x3e9d1e=_0x368fce['up'][-0x137*0x9+-0x2*-0xa65+-0x9d9*0x1];else{var _0x75ad18=_0x4548a6();if(!_0x75ad18)return null;var _0x368cce=_0x75ad18[_0x5263be(0xc6b)]*_0x37db06['PI']/(-0x3*0x50e+-0x21b3+0x3191),_0x22e3f1=_0x75ad18['yaw']*_0x1d4dde['PI']/(-0x1*-0x1a5f+-0xc4f+0x5*-0x2ac),_0x577e58=_0x48897d['cos'](_0x368cce);_0x136fb6=_0x3e31d9[_0x5263be(0x37a)](_0x525650['sin'](_0x22e3f1),_0x577e58),_0x5adb60=-_0x2ea45b['sin'](_0x368cce),_0x34a338=_0x27c6a6[_0x5263be(0xcae)](_0x22e3f1)*_0x577e58,_0x197d11=_0x34a338,_0x32c175=0x1142+-0x84b+-0x8f7,_0x302cfe=-_0x136fb6,_0x2bd542=_0x5adb60*_0x302cfe-_0x34a338*_0x32c175,_0x2b16ca=_0x3e31d9[_0x5263be(0x875)](_0x34a338*_0x197d11,_0x136fb6*_0x302cfe),_0x3e9d1e=_0x3e31d9[_0x5263be(0x875)](_0x136fb6*_0x32c175,_0x3e31d9['OiRaO'](_0x5adb60,_0x197d11));}var _0x2e5370=_0x5399ba[0x28f*0x9+0x1d*0x3f+0xb*-0x2be]-_0x2badb6[0x135b+-0x2e8*-0x7+-0x27b3*0x1],_0x285d09=_0x3e31d9[_0x5263be(0x875)](_0x161c62[0x1cdb+0x2558+0x1*-0x4232],_0x2badb6[0x207f+-0x16a3+-0x9db]),_0x49de1f=_0x3e31d9['mxWdl'](_0x2dc6ef[0x21*-0x6b+0x2d0+0xafd],_0x2badb6[-0x2d9*-0x1+0x152*-0x18+0x1cd9]),_0xba4f79=_0x3e31d9[_0x5263be(0x7b7)](_0x3e31d9['SdGrl'](_0x3e31d9['OiRaO'](_0x2e5370,_0x136fb6),_0x3e31d9[_0x5263be(0x37a)](_0x285d09,_0x5adb60)),_0x49de1f*_0x34a338);if(_0xba4f79<=-0xa22+-0x41d*0x1+0xe3f+0.05)return null;var _0x5849dd=_0x2e5370*_0x197d11+_0x3e31d9[_0x5263be(0x37a)](_0x285d09,_0x32c175)+_0x3e31d9[_0x5263be(0x760)](_0x49de1f,_0x302cfe),_0x446d60=_0x2e5370*_0x2bd542+_0x3e31d9[_0x5263be(0x37a)](_0x285d09,_0x2b16ca)+_0x49de1f*_0x3e9d1e,_0x4a9cc6=_0x2597e2/_0x510f26,_0x24bcef=_0x488ab9*_0x488cc8['PI']/(-0x1*-0x13d5+-0x25c3+0xf*0x13e),_0x48b768=_0x425138['tan'](_0x3e31d9[_0x5263be(0x5d1)](_0x24bcef,-0xd*-0x2ce+0x1*-0x223+-0x7*0x4e7)),_0x30cd2f=_0x3e31d9[_0x5263be(0x5ef)](_0x3e31d9[_0x5263be(0x608)](_0x5849dd,_0xba4f79),_0x48b768*_0x4a9cc6),_0x207c4b=_0x3e31d9[_0x5263be(0x707)](_0x3e31d9[_0x5263be(0xcdc)](_0x446d60,_0xba4f79),_0x48b768);if(_0x30cd2f<-(-0x3*-0x437+0x722*0x3+-0x220a+0.6000000000000001)||_0x30cd2f>0x399+-0x1013+0xc7b+0.6000000000000001||_0x3e31d9[_0x5263be(0x623)](_0x207c4b,-(0xa1a+-0x1da7+0x138e+0.6000000000000001))||_0x207c4b>0x1f98+-0x40e+-0x1b89+0.6000000000000001)return null;return{'x':(_0x30cd2f*(-0x844+-0xbd+-0x5*-0x1cd+0.5)+(-0x38c*0x1+0x2514+-0x2188+0.5))*_0x1d7889,'y':_0x3e31d9['YPrUP'](0x1*-0x319+-0x23c8+0x26e1+0.5-_0x207c4b*(0x544+0x2389*-0x1+0x7*0x453+0.5),_0x9244c8),'z':_0xba4f79};}else{var _0x209d4e=_0x4986e0[_0x13e6e9];_0x209d4e['pairH'+'its']&&_0x209d4e[_0x5263be(0xb61)+_0x5263be(0x8af)]>_0x228f01&&_0x5d3ad4['ECzmS'](typeof _0x209d4e[_0x5263be(0x9ac)+'st'],_0x5d3ad4['VvFiJ'])&&_0x5d3ad4[_0x5263be(0x1e3)](typeof _0x209d4e[_0x5263be(0x418)],_0x5d3ad4['VvFiJ'])&&isFinite(_0x209d4e[_0x5263be(0x9ac)+'st'])&&isFinite(_0x209d4e[_0x5263be(0x418)])&&(_0x22b380={'rawA':_0x209d4e['setLa'+'st'],'rawB':_0x209d4e['setB'],'hits':_0x209d4e['pairH'+_0x5263be(0x8af)],'name':_0x13e6e9},_0x228f01=_0x209d4e[_0x5263be(0xb61)+'its']);}}if(!_0x22b380)return null;var _0x12cf2d=_0x5d3ad4[_0x5263be(0x7ba)](_0x22b380[_0x5263be(0x9c8)],-(0x1*0xb24+0x26c1+0x481*-0xb))&&_0x22b380[_0x5263be(0x9c8)]<=0x1*0x266+-0x6*0x43f+0x176e,_0x4cefee=_0x22b380['rawB']>=-(0x1a29+0x2*-0x7a2+-0xa8b)&&_0x22b380[_0x5263be(0x5d2)]<=0xed*0x1+0x1*-0x1c1+0x12e;return _0x5d3ad4[_0x5263be(0x67c)](_0x12cf2d,_0x4cefee)?(_0x22b380[_0x5263be(0xc6b)]=_0x12cf2d?_0x22b380[_0x5263be(0x9c8)]:_0x22b380[_0x5263be(0x5d2)],_0x22b380[_0x5263be(0x4a2)]=_0x12cf2d?_0x22b380[_0x5263be(0x5d2)]:_0x22b380[_0x5263be(0x9c8)],_0x22b380['order']=_0x12cf2d?_0x5d3ad4['NUAdf']:_0x5263be(0x2a2)):(_0x22b380[_0x5263be(0xc6b)]=null,_0x22b380[_0x5263be(0x4a2)]=null,_0x22b380[_0x5263be(0xb9f)]=_0x5263be(0x9d6)+'olved'+'\x20('+(_0x12cf2d?'both\x20'+'bound'+'ed':_0x5d3ad4[_0x5263be(0x881)])+')'),_0x22b380;}function _0x3f1c18(){var _0x3f795e=_0xbd7aa9;if(_0x5d3ad4['QmFiU']!=='lymYW')return _0xbf7f22['facto'+'r'];else{var _0x5172ea=0x35*0xb3+0x14b3*-0x1+-0x105c;for(var _0x12adfd=0x5*0x1cf+-0x1*0x125a+0x94f;_0x5d3ad4[_0x3f795e(0x389)](_0x12adfd,_0x276c52[_0x3f795e(0x711)+'h']);_0x12adfd++){if(_0x276c52[_0x12adfd]['hook']&&_0x276c52[_0x12adfd]['hook'][_0x3f795e(0x8c7)+_0x3f795e(0x851)]!==undefined)_0x5172ea++;}return _0x5172ea;}}function _0x127cb4(){var _0x2523f2=_0xbd7aa9,_0x1cc44d=0x6*-0x409+0x2*0xaf7+0x2*0x124;for(var _0x1d3db3=-0x1*0x1dcc+0x1fe8+-0x10e*0x2;_0x1d3db3<_0x276c52['lengt'+'h'];_0x1d3db3++){if(_0x276c52[_0x1d3db3][_0x2523f2(0x5f7)]&&_0x276c52[_0x1d3db3][_0x2523f2(0x5f7)]['appli'+'ed'])_0x1cc44d++;}return _0x1cc44d;}var _0x3e929f=null,_0x5dfc73=[],_0x1ea65c={},_0x3aaf69=null;function _0x29c3b3(_0x46b326){var _0x27ea4e=_0xbd7aa9;try{if(_0x5d3ad4[_0x27ea4e(0x86f)](!_0x30daa5,!_0x46b326))return null;var _0x4d32f9=new _0x30daa5(_0x46b326)['getCl'+'assNa'+'me']();return _0x4d32f9===undefined?null:_0x4d32f9;}catch(_0x5e0c29){return null;}}function _0x318e53(_0x169227,_0x1d8300,_0xceee76){var _0x34d99e=_0xbd7aa9;if(_0x5d3ad4[_0x34d99e(0x9b6)]('IUCoj',_0x34d99e(0x63c))){var _0x16949d=('3|1|6'+'|4|5|'+_0x34d99e(0x36c))[_0x34d99e(0x823)]('|'),_0x41e58a=0x241a*0x1+0x22a8+-0x46c2;while(!![]){switch(_0x16949d[_0x41e58a++]){case'0':return _0x3a8ebf;case'1':if(!_0x4e4943)return null;continue;case'2':_0x1e7b2a['ok']+=_0xceee76;continue;case'3':var _0x4e4943=_0x2c613b();continue;case'4':var _0x3a8ebf=[];continue;case'5':for(var _0x4c2036=-0xd*0x26a+0x5*-0x699+0x405f;_0x4c2036<_0xceee76;_0x4c2036++)_0x3a8ebf['push'](_0x4e4943['getFl'+_0x34d99e(0x2f4)](_0x5d3ad4['EnFzm'](_0x169227+_0x1d8300,_0x4c2036*(-0x1178+0x1e22+-0xca6*0x1)),!![]));continue;case'6':if(_0x1d8300<0x1dd3+0x1*0x15ce+-0x33a1||_0x1d8300+_0x5d3ad4['URRJL'](_0xceee76,0xb5a*0x2+0xebb+-0x5d*0x67)>_0x4e4943[_0x34d99e(0xc4b)+'ength'])return null;continue;}break;}}else _0x500e8f=_0xe99a02[_0x34d99e(0x1b1)](_0x5060e9)['slice'](-0x59d*0x1+0x4*0x8f3+-0x1e2f,-0x1b2*-0x4+0x1760+-0x1e10);}var _0x107f7c={'PhotonNetworkSync':[[_0x5d3ad4['iHoXR'],_0xbd7aa9(0xd5a)+_0xbd7aa9(0x800)],['0x20',_0x5d3ad4[_0xbd7aa9(0xa07)]],[_0x5d3ad4[_0xbd7aa9(0xce9)],_0x5d3ad4[_0xbd7aa9(0x557)]],[_0x5d3ad4[_0xbd7aa9(0x581)],_0x5d3ad4[_0xbd7aa9(0x661)]],[_0xbd7aa9(0x952),_0x5d3ad4[_0xbd7aa9(0x9c1)]]],'NetworkPlayerAnimations':[[_0xbd7aa9(0xd8d),'capsu'+'le'],[_0xbd7aa9(0x3d6),_0x5d3ad4['bNJPj']]],'NPC_Cotroller':[[_0x5d3ad4[_0xbd7aa9(0x4f3)],'capsu'+'le'],[_0xbd7aa9(0xc30),_0xbd7aa9(0xd74)+_0xbd7aa9(0x82e)+'th'],[_0x5d3ad4[_0xbd7aa9(0xd42)],_0x5d3ad4[_0xbd7aa9(0xa07)]],[_0x5d3ad4[_0xbd7aa9(0xb77)],_0x5d3ad4['WIffa']],[_0xbd7aa9(0x8c8),_0x5d3ad4['HbAql']]],'EnemyBot':[[_0x5d3ad4['yKbLh'],'trans'+_0xbd7aa9(0x52a)]]},_0x197705={'PhotonNetworkSync':[[_0x5d3ad4[_0xbd7aa9(0x36d)],'team'],['0x7c',_0x5d3ad4[_0xbd7aa9(0xcd7)]],[_0x5d3ad4[_0xbd7aa9(0x68d)],'id']]};function _0x195b0f(_0x3b3e99,_0x25d68d){var _0x52abf9=_0xbd7aa9,_0x54dbeb={'bqJka':_0x5d3ad4['RfBJd'],'Soajt':function(_0x5e27ec,_0x38bc5a){var _0x3d657e=_0x4565;return _0x5d3ad4[_0x3d657e(0x4a3)](_0x5e27ec,_0x38bc5a);},'LfPjN':_0x52abf9(0x36a),'goyhd':_0x52abf9(0xafc),'nkuHa':'i32','iQLtQ':function(_0x1c6bd6,_0xdc07e4){return _0x1c6bd6+_0xdc07e4;},'ZaSrp':function(_0x28c712,_0x7c2c58,_0x3c9e59){return _0x5d3ad4['JuKHR'](_0x28c712,_0x7c2c58,_0x3c9e59);}};if(_0x5d3ad4['axpmq'](_0x52abf9(0x951),_0x5d3ad4[_0x52abf9(0xc06)]))return _0x502edc[_0x52abf9(0xc05)+'d']++,_0x148669[_0x52abf9(0x257)+'rror']=_0x5dac41['lastE'+_0x52abf9(0x234)]||_0x54dbeb['bqJka'],null;else{var _0x5d2642=_0x17a0ac[_0x3b3e99]||[],_0x16a59e={'kind':_0x3b3e99,'ptr':'0x'+_0x25d68d[_0x52abf9(0x89d)+_0x52abf9(0x30e)](-0x1*0x132+0x24e7+-0x23a5),'pos':null,'posAt':null,'allVecs':[],'scalars':[],'refs':{}};for(var _0x4ef597=-0x9b1+-0x1*0x2a6+0xc57;_0x4ef597<_0x5d2642[_0x52abf9(0x711)+'h'];_0x4ef597++){if(_0x5d3ad4[_0x52abf9(0x67c)](_0x5d2642[_0x4ef597][0x31f*0xa+0x8f0+-0x2825],'v3'))continue;var _0xd9fc82=_0x318e53(_0x25d68d,_0x5d2642[_0x4ef597][-0x77*-0x25+-0x1743+0x61*0x10],-0x1*-0x1a1f+-0x1*0x55+-0x19c7*0x1);if(!_0xd9fc82)continue;_0x16a59e['allVe'+'cs']['push']({'o':'0x'+_0x5d2642[_0x4ef597][-0x1de2+0x1d2f+0xb3][_0x52abf9(0x89d)+_0x52abf9(0x30e)](0x1*-0x115a+-0x1ce1*-0x1+0x1*-0xb77),'v':_0xd9fc82});}var _0x52a212=0x23d8+-0x349+-0x1*0x208f,_0xc8d645=_0x3b3e99+'@'+_0x25d68d,_0x3d8d58=_0x4c192b(_0x16a59e[_0x52abf9(0x88e)+'cs'],_0x14e367(),_0x3bd7ad[_0xc8d645]);_0x3bd7ad[_0xc8d645]=_0x3d8d58[_0x52abf9(0x7cd)]?{'o':_0x3d8d58[_0x52abf9(0x7cd)]}:null,_0x16a59e[_0x52abf9(0x1bc)]=_0x3d8d58['pos'],_0x16a59e['posAt']=_0x3d8d58[_0x52abf9(0x7cd)],_0x16a59e[_0x52abf9(0xa66)]=_0x3d8d58[_0x52abf9(0xa66)],_0x16a59e[_0x52abf9(0x957)+_0x52abf9(0x7da)]=_0x3d8d58[_0x52abf9(0x957)+_0x52abf9(0x7da)],_0x16a59e[_0x52abf9(0x5b5)+'er']=_0x3d8d58[_0x52abf9(0x5b5)+'er'],_0x16a59e[_0x52abf9(0x812)]=_0x3d8d58['reach'],void _0x52a212;var _0x1f2e73=_0x107f7c[_0x3b3e99],_0x35abf6=_0x197705[_0x3b3e99];if(_0x35abf6){_0x16a59e['tag']={};for(var _0x127aca=0x1f84+0x103*0x19+-0x1*0x38cf;_0x5d3ad4[_0x52abf9(0x9c9)](_0x127aca,_0x35abf6['lengt'+'h']);_0x127aca++){if(_0x5d3ad4['hPdAE'](_0x5d3ad4[_0x52abf9(0x1fe)],_0x52abf9(0x772))){var _0x52dbd2=_0x5d3ad4[_0x52abf9(0x2fc)](_0x3448cb,_0x25d68d+parseInt(_0x35abf6[_0x127aca][-0x1bbd+0x1*0x1b25+-0x98*-0x1],0x19fc+0x244c+-0x3e38),_0x5d3ad4[_0x52abf9(0x59b)]);if(_0x5d3ad4['qLkim'](_0x52dbd2,undefined))_0x16a59e[_0x52abf9(0x5ea)][_0x35abf6[_0x127aca][0x15c+-0x20e2+0x1*0x1f87]]=_0x52dbd2;}else{var _0x481d0d=_0x4a63e5[_0x52abf9(0xcdd)](_0x5d3ad4[_0x52abf9(0x6b5)](_0x33e826[_0x47521d]['v'][-0x8*0x154+-0x303+-0x1*-0xda3]*_0x2a370d[_0x44cd4b]['v'][0x2c6*0xb+-0x3*0xa9f+0x15b*0x1],_0x5d3ad4['PLOwY'](_0x1ff881[_0x1fac18]['v'][-0x16*0x45+0x793+0x1*-0x1a3],_0x5f5d91[_0x1fc6d0]['v'][0x9ea+-0xe42+0x45a])));if(_0x5d3ad4['BvFqq'](_0x481d0d,_0x5929b4))_0x353e6d=_0x481d0d;}}}if(_0x1f2e73)for(var _0x4fb636=-0x2*0x59d+-0x234a*0x1+-0x1a*-0x1ca;_0x5d3ad4['Ktynh'](_0x4fb636,_0x1f2e73[_0x52abf9(0x711)+'h']);_0x4fb636++){var _0x6dfd06=_0x5d3ad4[_0x52abf9(0x47c)](_0x3448cb,_0x25d68d+_0x5d3ad4[_0x52abf9(0x67b)](parseInt,_0x1f2e73[_0x4fb636][0xdb2+-0xde*0x1b+0x9b8],0x2*-0x301+0xbcb*-0x3+-0x83*-0x51),_0x52abf9(0x441));if(_0x6dfd06)_0x16a59e[_0x52abf9(0xc94)][_0x1f2e73[_0x4fb636][0x7*-0x2ae+0x1a15+-0x752]]='0x'+_0x5d3ad4[_0x52abf9(0xad2)](_0x6dfd06,-0x220f*-0x1+0xbf8*0x3+-0x1*0x45f7)[_0x52abf9(0x89d)+'ing'](0x2675+-0x1a4c+-0xc19);}return _0x16a59e[_0x52abf9(0x133)+'rs']=_0x5d2642[_0x52abf9(0x45f)+'r'](function(_0xb15ec2){var _0x493c69=_0x52abf9;if(_0x54dbeb['Soajt'](_0x54dbeb['LfPjN'],_0x493c69(0x36a)))return _0xb15ec2[-0x1*0xdaa+-0x46e+-0x29*-0x71]===_0x54dbeb[_0x493c69(0xab1)]||_0xb15ec2[-0x17c8+-0x17*-0x25+0x1b*0xc2]===_0x54dbeb[_0x493c69(0x835)];else _0x315faf(_0x41f10f);})[_0x52abf9(0x562)](function(_0x1fbb0d){var _0x28cfc5=_0x52abf9;return{'o':_0x54dbeb[_0x28cfc5(0xc7a)]('0x',_0x1fbb0d[-0x1ed4*-0x1+-0x1406+-0xace][_0x28cfc5(0x89d)+'ing'](-0x1513+0x25+-0xa7f*-0x2)),'v':_0x54dbeb['ZaSrp'](_0x3448cb,_0x25d68d+_0x1fbb0d[-0x82*0x49+-0x1b7*-0xb+0x4f*0x3b],_0x1fbb0d[0x1abe+0xaf*-0x37+0x8b*0x14])};})['filte'+'r'](function(_0x479adc){return _0x479adc['v']!==undefined&&isFinite(_0x479adc['v']);})[_0x52abf9(0xd2d)](0x1b*-0xa5+-0x138b*0x1+0x24f2,0x124*-0x16+0xb*0x2f+0x171f),_0x16a59e;}}function _0x342294(){var _0xc87fdc=_0xbd7aa9;if(_0x5d3ad4[_0xc87fdc(0x872)]==='FGGtP'){var _0x51d741=_0x2eed76[_0x2809d1];for(var _0x1a041b=-0x827*-0x3+-0xad7+-0xa6*0x15;_0x5d3ad4[_0xc87fdc(0x5c3)](_0x1a041b,_0x51d741['lengt'+'h']);_0x1a041b++){_0x34e263[_0x5579dd+_0xc87fdc(0x178)+_0x51d741[_0x1a041b]['o']['toStr'+'ing'](-0x19dc+0x24a*-0x7+0x29f2)]=_0x51d741[_0x1a041b]['v'];}}else{var _0x5bc9cc={'players':[],'bots':[],'enemies':[],'controllers':[],'camera':null,'cameraFrom':null,'playerList':null,'managers':{},'wasmTypes':null},_0x538440=_0xbc0808[_0xc87fdc(0x529)+_0xc87fdc(0xd56)+'ler']&&_0xbc0808[_0xc87fdc(0x529)+_0xc87fdc(0xd56)+'ler']['ptr']||0x513*0x3+-0x4d*0x4f+0x88a,_0x499a9f=_0x5992f4[_0xc87fdc(0x5ca)+'nNetw'+_0xc87fdc(0xd00)+'nc']||{},_0x4b706e=Object[_0xc87fdc(0x1b1)](_0x499a9f);for(var _0x1b0357=-0x49*-0x30+0x7*-0x2cf+-0x1*-0x5f9;_0x1b0357<_0x4b706e['lengt'+'h']&&_0x5d3ad4[_0xc87fdc(0xb00)](_0x1b0357,0x2282+0xd99+0x2d3*-0x11);_0x1b0357++){if(_0x5d3ad4['qqyUv'](_0xc87fdc(0x1f6),_0xc87fdc(0x27c)))return _0x10a9bf[_0xc87fdc(0x8b0)+'e']=_0x2cf6bf[_0xc87fdc(0x8b0)+'e']||_0xc87fdc(0xad6)+'ntiat'+_0xc87fdc(0x598)+'xport'+'s.mem'+_0xc87fdc(0x567),new _0x332b2a(_0x2fe9f5[_0xc87fdc(0x2d5)+'r']);else{var _0x306f4a=_0x499a9f[_0x4b706e[_0x1b0357]],_0xe78ce=_0x5d3ad4[_0xc87fdc(0x5cc)](_0x195b0f,'Photo'+_0xc87fdc(0x65f)+'orkSy'+'nc',_0x306f4a[_0xc87fdc(0x41f)]);_0xe78ce['hits']=_0x306f4a['hits'],_0xe78ce['first'+_0xc87fdc(0x686)+'s']=_0x306f4a['first'+_0xc87fdc(0x3fc)]-_0x473e76,_0xe78ce[_0xc87fdc(0x317)+'al']=!!_0x538440&&_0x5d3ad4[_0xc87fdc(0x4fd)](_0xe78ce[_0xc87fdc(0xc94)][_0xc87fdc(0x45e)],_0x5d3ad4[_0xc87fdc(0xd89)]('0x',_0x538440[_0xc87fdc(0x89d)+'ing'](-0x7cc+0x41*0x8d+-0x1*0x1bf1)));if(_0xe78ce[_0xc87fdc(0xc94)][_0xc87fdc(0x9de)+'h']){var _0x41ff8f=parseInt(_0xe78ce[_0xc87fdc(0xc94)]['healt'+'h'],-0x113e+0x2*0x5c1+-0x6a*-0xe);_0xe78ce[_0xc87fdc(0x9de)+'h']=_0x462032(_0x41ff8f,_0xc87fdc(0x170)+_0xc87fdc(0x914)+'pt','obfI');}_0x5bc9cc['playe'+'rs'][_0xc87fdc(0x97d)](_0xe78ce);}}_0x5bc9cc[_0xc87fdc(0x576)+'rCoun'+'t']=_0x4b706e[_0xc87fdc(0x711)+'h'];var _0x223e1e=_0x5992f4[_0xc87fdc(0x911)+'otrol'+'ler']||{},_0x437774=Object['keys'](_0x223e1e);for(var _0x32aaa9=0x1eb*-0x7+-0x16f8+0x2465;_0x5d3ad4['ZwJXJ'](_0x32aaa9,_0x437774[_0xc87fdc(0x711)+'h'])&&_0x5d3ad4['ZwJXJ'](_0x32aaa9,-0x2b*-0xb0+-0x2402+-0x36*-0x1f);_0x32aaa9++){if(_0x5d3ad4['mWGst']==='vbIpb'){var _0x4d01c0=_0x5d3ad4[_0xc87fdc(0x577)](_0x195b0f,_0xc87fdc(0x911)+_0xc87fdc(0x172)+_0xc87fdc(0x303),_0x223e1e[_0x437774[_0x32aaa9]][_0xc87fdc(0x41f)]);_0x4d01c0[_0xc87fdc(0xc0d)]=_0x223e1e[_0x437774[_0x32aaa9]]['hits'],_0x4d01c0[_0xc87fdc(0x8a7)+'SeenM'+'s']=_0x5d3ad4['MAJMP'](_0x223e1e[_0x437774[_0x32aaa9]]['first'+_0xc87fdc(0x3fc)],_0x473e76);if(_0x4d01c0[_0xc87fdc(0xc94)][_0xc87fdc(0x9de)+'h'])_0x4d01c0[_0xc87fdc(0x9de)+'h']=_0x5d3ad4['gmHUi'](_0x462032,_0x5d3ad4[_0xc87fdc(0x7db)](parseInt,_0x4d01c0[_0xc87fdc(0xc94)][_0xc87fdc(0x9de)+'h'],0x20b1+0x1d9e+0x1*-0x3e3f),_0x5d3ad4['pZQqG'],_0xc87fdc(0x5a0));_0x5bc9cc[_0xc87fdc(0x205)][_0xc87fdc(0x97d)](_0x4d01c0);}else _0x485fa4();}_0x5bc9cc['botCo'+'unt']=_0x437774[_0xc87fdc(0x711)+'h'];var _0x5b0593=_0x5992f4[_0xc87fdc(0x529)+_0xc87fdc(0xd56)+'ler']||{},_0x21daa0=Object[_0xc87fdc(0x1b1)](_0x5b0593);for(var _0x58d618=-0x26d3*-0x1+0x2309*-0x1+-0x3ca;_0x58d618<_0x21daa0['lengt'+'h']&&_0x58d618<-0x1b88+0xcbe+0x7f*0x1e;_0x58d618++){var _0x50b4c4=_0x195b0f(_0x5d3ad4[_0xc87fdc(0x5b0)],_0x5b0593[_0x21daa0[_0x58d618]][_0xc87fdc(0x41f)]);_0x50b4c4[_0xc87fdc(0xc0d)]=_0x5b0593[_0x21daa0[_0x58d618]][_0xc87fdc(0xc0d)],_0x50b4c4[_0xc87fdc(0x317)+'al']=_0x5d3ad4['LmjkF'](_0x5b0593[_0x21daa0[_0x58d618]]['ptr'],_0x538440),_0x5bc9cc['contr'+_0xc87fdc(0x2d1)+'s'][_0xc87fdc(0x97d)](_0x50b4c4);}_0x5bc9cc[_0xc87fdc(0xb44)+_0xc87fdc(0x2d1)+_0xc87fdc(0x42c)]=_0x21daa0['lengt'+'h'];var _0x83b74c=_0x5bc9cc[_0xc87fdc(0x576)+'rs'][_0xc87fdc(0x7d2)+'t'](_0x5bc9cc[_0xc87fdc(0x205)]);for(var _0x40c669=-0x21*-0x2f+-0x1fe6+-0x15*-0x13b;_0x40c669<_0x83b74c['lengt'+'h'];_0x40c669++){if('bJZmV'===_0xc87fdc(0xa32))return null;else{if(_0x83b74c[_0x40c669][_0xc87fdc(0x317)+'al'])continue;_0x5bc9cc['enemi'+'es'][_0xc87fdc(0x97d)](_0x83b74c[_0x40c669]);}}_0x5bc9cc[_0xc87fdc(0xb80)+_0xc87fdc(0x42c)]=_0x5bc9cc['enemi'+'es']['lengt'+'h'];var _0x6a98d7={'TDM_GameManager':0x2c,'GG_GameManager':0x14},_0x5ddf0={'TDM_GameManager':0x50,'GG_GameManager':0x5c};for(var _0x533540 in _0xbc0808){var _0x38b24d=_0xbc0808[_0x533540];if(!_0x38b24d||!_0x38b24d[_0xc87fdc(0x41f)])continue;if(!_0x5d3ad4['lIHyH'](_0x533540,_0x6a98d7))continue;_0x5bc9cc['manag'+_0xc87fdc(0x905)][_0x533540]='0x'+_0x38b24d['ptr']['toStr'+_0xc87fdc(0x30e)](-0x210e*-0x1+0xb06*-0x1+0x94*-0x26);var _0x50a395=_0x5d3ad4['PyxfY'](_0x3448cb,_0x38b24d[_0xc87fdc(0x41f)]+_0x6a98d7[_0x533540],_0x5d3ad4[_0xc87fdc(0x893)]),_0x5c0296=_0x3448cb(_0x38b24d['ptr']+_0x5ddf0[_0x533540],'u32');_0x50a395&&_0x5d3ad4[_0xc87fdc(0x960)](_0x5bc9cc[_0xc87fdc(0x32a)+'a'],null)&&(_0x5d3ad4[_0xc87fdc(0xac2)]('myial',_0xc87fdc(0xc0f))?_0x4fe92b['textC'+_0xc87fdc(0xda5)+'t']=_0xca2e7c['strin'+_0xc87fdc(0x79c)](_0x520638,null,0x17be+-0x1831*-0x1+-0x2fee):(_0x5bc9cc[_0xc87fdc(0x32a)+'a']='0x'+(_0x50a395>>>-0x4*0x14+0x1*-0x107e+-0x2*-0x867)[_0xc87fdc(0x89d)+_0xc87fdc(0x30e)](-0x548*0x2+0x239f+-0x3*0x855),_0x5bc9cc['camer'+'aFrom']=_0x533540));if(_0x5c0296&&_0x5bc9cc['playe'+'rList']===null)_0x5bc9cc['playe'+_0xc87fdc(0xb9a)]=_0x5d3ad4[_0xc87fdc(0xb14)]('0x',(_0x5c0296>>>0xa8e+-0x5*0x4a2+-0x10d*-0xc)['toStr'+_0xc87fdc(0x30e)](0x43c*-0x8+-0x117f+0x15*0x273));}if(!_0x5bc9cc[_0xc87fdc(0x576)+_0xc87fdc(0x9d2)+'t']&&!_0x5bc9cc[_0xc87fdc(0x15b)+_0xc87fdc(0x854)]&&!_0x5bc9cc['camer'+'a'])_0x5bc9cc[_0xc87fdc(0xc2d)]=_0xc87fdc(0x20e)+_0xc87fdc(0x481)+_0xc87fdc(0x4bb)+_0xc87fdc(0x6d7)+_0xc87fdc(0xbb4)+_0xc87fdc(0x911)+_0xc87fdc(0x172)+'ler\x20a'+'nd\x20no'+'\x20game'+'\x20mana'+_0xc87fdc(0x1e5)+'That\x20'+_0xc87fdc(0xbcd)+'at\x20'+(_0xc87fdc(0xacf)+_0xc87fdc(0x1bb)+'looks'+_0xc87fdc(0x333)+'\x20-\x20ru'+_0xc87fdc(0x453)+_0xc87fdc(0xbff)+_0xc87fdc(0xbc8)+_0xc87fdc(0x853)+_0xc87fdc(0xa51)+_0xc87fdc(0x2e1)+_0xc87fdc(0x931)+_0xc87fdc(0x9c4)+_0xc87fdc(0xa0b)+'.');else!_0x5bc9cc[_0xc87fdc(0xb80)+_0xc87fdc(0x42c)]&&(_0x5bc9cc[_0xc87fdc(0xc2d)]=_0x5d3ad4[_0xc87fdc(0xb5c)]+_0x5d3ad4[_0xc87fdc(0xd1f)]);try{var _0x451454=window['Unity'+_0xc87fdc(0x5a4)+_0xc87fdc(0x90b)]&&window['Unity'+'WebMo'+_0xc87fdc(0x90b)]['Runti'+'me'],_0x374023=_0x451454&&_0x451454[_0xc87fdc(0x675)+_0xc87fdc(0x188)+'smTyp'+'es']||[],_0x3c8670={};for(var _0x547920=-0x164*-0xd+-0x25*-0x53+-0x1*0x1e13;_0x547920<_0x374023[_0xc87fdc(0x711)+'h']&&_0x547920<0x1484+0x3*-0x3d1+0x1*0x68f;_0x547920++){var _0x140cb6=_0x374023[_0x547920]['param'+'s'][_0xc87fdc(0x8ca)](',')+'\x20->\x20'+(_0x374023[_0x547920][_0xc87fdc(0xb6b)+_0xc87fdc(0x900)]||_0xc87fdc(0x882));_0x3c8670[_0x140cb6]=(_0x3c8670[_0x140cb6]||-0x1*-0x10da+-0x2110+0x33e*0x5)+(-0x5ae+-0xdde+0x2cb*0x7);}_0x5bc9cc[_0xc87fdc(0xac9)+_0xc87fdc(0xa1a)]=_0x3c8670;}catch(_0x2c4f80){}return _0x5bc9cc;}}function _0x462032(_0x451e96,_0x133031,_0x5c6618){var _0x5f3da0=_0xbd7aa9,_0x1f3778={'WUpDs':function(_0xb8285d,_0x3d296e){return _0xb8285d+_0x3d296e;},'RGPiL':function(_0x4734d5,_0x30f5dd){return _0x4734d5<_0x30f5dd;},'GsIMs':function(_0x179245,_0x2c2f0b,_0x345ba0,_0x6040b3){return _0x5d3ad4['gmHUi'](_0x179245,_0x2c2f0b,_0x345ba0,_0x6040b3);},'HmRlU':_0x5d3ad4[_0x5f3da0(0x53a)]};try{if(_0x5d3ad4[_0x5f3da0(0x6e0)]===_0x5d3ad4[_0x5f3da0(0x6e0)]){var _0x2d0e14=_0x17a0ac[_0x133031]||[];for(var _0x2f3abb=0x7*0x1cd+-0x17*-0x8b+-0x1918;_0x5d3ad4['LBaWw'](_0x2f3abb,_0x2d0e14[_0x5f3da0(0x711)+'h']);_0x2f3abb++){if(_0x2d0e14[_0x2f3abb][-0x1325+-0x1d69+0x308f]!==_0x5c6618)continue;var _0x613e41=_0x2d0e14[_0x2f3abb][0x187*-0xe+0x5a*-0x67+-0x26*-0x184];if(_0x5c6618[_0x5f3da0(0x8f1)+'Of'](_0x5d3ad4[_0x5f3da0(0xcb5)])===-0x2a*0x23+0x135a+0x43*-0x34){if(_0x5f3da0(0x266)===_0x5f3da0(0x266)){var _0x2f6381=(_0x5f3da0(0x289)+'|5|1|'+_0x5f3da0(0xc38))[_0x5f3da0(0x823)]('|'),_0x11e5f4=0x1*0x2192+-0xf*-0x86+0x14b6*-0x2;while(!![]){switch(_0x2f6381[_0x11e5f4++]){case'0':if(!_0x2d9076['rows'][_0x5f3da0(0x711)+'h'])return null;continue;case'1':var _0x2d9076=_0x9fcd12([_0x99c8d9]);continue;case'2':_0x99c8d9['o']=_0x613e41;continue;case'3':return _0x2d9076[_0x5f3da0(0xd37)][-0x8e*-0x1+-0x15*0x1+-0x79*0x1];case'4':var _0x99c8d9=_0x46f0ed(_0x451e96,_0x613e41,_0x5c6618);continue;case'5':_0x99c8d9['k']=_0x5c6618;continue;case'6':if(!_0x99c8d9)return null;continue;}break;}}else{var _0x543d3f=_0x1f3778[_0x5f3da0(0xa48)](_0x5d622f,_0x1f3778['HmRlU'],_0x5f3da0(0xc59)+'te',_0x1f3778[_0x5f3da0(0x3e5)](_0x5f3da0(0xbf0)+'ed:\x20',_0x50eeed['slice'](-0x1370+-0x34b+0x16bb,0x334*-0x7+0x15b+0x1515)[_0x5f3da0(0x562)](function(_0x9da427){var _0x2837a9=_0x5f3da0;return _0x1f3778['WUpDs']('0x'+(_0x1f3778[_0x2837a9(0x808)](_0x9da427['o'],0x1*-0xd61+-0x1d+0xd7e)?'?':_0x9da427['o'][_0x2837a9(0x89d)+_0x2837a9(0x30e)](0x2545+-0x2208+-0x32d))+'\x20(',_0x9da427[_0x2837a9(0x24d)])+')';})[_0x5f3da0(0x8ca)]('\x20\x20')));_0x9a1871[_0x5f3da0(0x717)][_0x5f3da0(0x1d9)+'dChil'+'d'](_0x543d3f);}}var _0x4b5d68=_0x3448cb(_0x451e96+_0x613e41,_0x5c6618);if(_0x4b5d68===undefined)return null;return{'o':_0x5d3ad4['vcirj']('0x',_0x613e41[_0x5f3da0(0x89d)+'ing'](-0x23*-0xdd+-0x97*-0x19+-0xe*0x335)),'v':_0x4b5d68};}}else return null;}catch(_0x572c64){}return null;}function _0x8b4e5e(){var _0x9154fa=_0xbd7aa9,_0x167e9b={'BIWnx':function(_0x1116e6,_0x4929b4){return _0x1116e6>_0x4929b4;},'evPZf':function(_0x156f15,_0xb638f5){return _0x156f15<_0xb638f5;},'ZJiVC':function(_0x1ffb35,_0x29bc37){return _0x1ffb35-_0x29bc37;},'FpQyG':function(_0x10ff76,_0x427aea){return _0x10ff76(_0x427aea);}};if('bUygP'===_0x9154fa(0x76a)){var _0x15350a=_0xe8d04['c'][_0x21f2c6]['v'],_0x2b1934=_0x219e31[_0x9154fa(0xcdd)](_0x15350a[0x5*-0x2e7+-0x200d+0x2e90]*_0x15350a[0x3*-0x423+-0x4*0x23d+0x155d*0x1]+_0x15350a[0x91b+0xd93+-0x16ac]*_0x15350a[-0x146*-0x1+0x3f1*-0x2+0x69e]);(_0x167e9b['BIWnx'](_0x2b1934,_0x13572e)||_0x2b1934===_0x459bea&&_0x167e9b['evPZf'](_0x15350a[-0x565+0x477*0x8+0x1e52*-0x1],_0x8c272b['v'][-0x35*0x47+0x1e18+-0xf64]))&&(_0x3769a4=_0x2b1934,_0x2645ca=_0x27b7f7['c'][_0x4391fe]);}else{var _0xb2b181={};_0x1e7b2a['ok']=0x96c+-0x1d18+-0x9d6*-0x2,_0x1e7b2a[_0x9154fa(0xc05)+'d']=0x1da3*-0x1+0x215c+-0x3b9*0x1,_0x1e7b2a[_0x9154fa(0x257)+_0x9154fa(0x234)]=null;var _0x2d7ec1=Object['keys'](_0x17a0ac);for(var _0x4cd61e=-0x6*-0x1e8+-0x2*-0x765+-0x1a3a;_0x4cd61e<_0x2d7ec1['lengt'+'h'];_0x4cd61e++){var _0x3a003e=_0x2d7ec1[_0x4cd61e],_0x49f619=_0xbc0808[_0x3a003e];if(!_0x49f619||!_0x49f619['ptr'])continue;var _0x62d38f=_0x17a0ac[_0x3a003e]||[],_0x4a7252=[];for(var _0x940542=-0x15a2+-0x215e+-0x40*-0xdc;_0x940542<_0x62d38f['lengt'+'h'];_0x940542++){var _0x10fc6f=_0x62d38f[_0x940542][-0x207f+0x9*0xb1+0x26*0xb1],_0x2c0226=_0x62d38f[_0x940542][-0x212b+0x1*0x441+0x2a1*0xb];if(_0x5d3ad4[_0x9154fa(0x245)](_0x2c0226['index'+'Of']('obf'),0x7*-0x4a2+0x43+0x202b)){var _0x2fefda=_0x46f0ed(_0x49f619[_0x9154fa(0x41f)],_0x10fc6f,_0x2c0226);if(!_0x2fefda)continue;_0x2fefda['o']=_0x10fc6f,_0x2fefda['k']=_0x2c0226,_0x4a7252['push'](_0x2fefda);}else{var _0x311f01=_0x3448cb(_0x5d3ad4['JaWSf'](_0x49f619['ptr'],_0x10fc6f),_0x2c0226);if(_0x5d3ad4['AdZyQ'](_0x311f01,undefined))continue;var _0x43c90b={'o':_0x10fc6f,'k':_0x2c0226,'v':_0x311f01};if(_0x2c0226==='v2'||_0x5d3ad4[_0x9154fa(0x28e)](_0x2c0226,'v3')||_0x5d3ad4['YYnBp'](_0x2c0226,'v4')){var _0x2c8469=_0x5d3ad4[_0x9154fa(0xaa0)](_0x2c0226,'v2')?-0xf47+-0x203c*0x1+0x2f85:_0x5d3ad4[_0x9154fa(0xbe5)](_0x2c0226,'v3')?-0x3d7*0x5+0x4*0x75a+-0xa32:-0x2*-0xc8e+-0x32f*-0x8+-0x3290,_0x40716c=_0x318e53(_0x49f619[_0x9154fa(0x41f)],_0x10fc6f,_0x2c8469);_0x40716c&&(_0x43c90b[_0x9154fa(0xcbe)]=_0x40716c,_0x43c90b['v']=_0x40716c[-0x5*-0x1c5+-0x4*0x2e2+-0x1*-0x2af]);}_0x4a7252['push'](_0x43c90b);}}if(_0x4a7252[_0x9154fa(0x711)+'h']){if(_0x5d3ad4['RbdZJ']('hOqYM','dyzJx')){var _0x5f241a=_0x9fcd12(_0x4a7252);_0xb2b181[_0x3a003e]=_0x5f241a[_0x9154fa(0xd37)],_0x1ea65c[_0x3a003e]={'key':_0x5f241a[_0x9154fa(0x66f)],'sane':_0x5f241a['sane'],'checked':_0x5f241a['check'+'ed'],'keyConsistent':_0x5f241a[_0x9154fa(0x84e)+_0x9154fa(0x682)+_0x9154fa(0x3b7)],'keySource':_0x5f241a[_0x9154fa(0x83f)+'urce']};}else return{'version':_0x3e7322,'when':new _0x10232c()[_0x9154fa(0x3ec)+_0x9154fa(0x47d)+'g'](),'elapsedMs':_0x167e9b[_0x9154fa(0x18a)](_0x37c602[_0x9154fa(0x324)](),_0x5cd19a),'host':_0x5722ae,'uwmk':!!(_0x2c4333[_0x9154fa(0x72f)+'WebMo'+_0x9154fa(0x90b)]&&_0x3e5365[_0x9154fa(0x72f)+'WebMo'+'dkit']['Runti'+'me']),'il2CppContext':![],'arm':_0xb1eff7,'hooksTotal':_0x2046d6['lengt'+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x167e9b[_0x9154fa(0x73f)](_0x1c16ca,_0x5f078c&&_0x58ff08['messa'+'ge']||_0x4f9988)};}}return _0xb2b181;}}function _0x9fcd12(_0x288084){var _0x48cfb3=_0xbd7aa9,_0x190bb3=-0x1d1e+0x3*-0xb4d+0x3f05,_0x5c8a8e=-0xb*-0x18d+-0x1b35+-0x3*-0x362,_0x1a5355=null;for(var _0x518f8e=0x1*0x224e+0x596*0x6+-0x43d2;_0x5d3ad4[_0x48cfb3(0xb72)](_0x518f8e,_0x288084['lengt'+'h']);_0x518f8e++){var _0x37b4f5=_0x288084[_0x518f8e];if(_0x37b4f5['k'][_0x48cfb3(0x8f1)+'Of']('obf')!==-0x3*-0xaf5+-0x2264+0x185)continue;_0x37b4f5['v']=_0x5d3ad4[_0x48cfb3(0xbdc)](_0x34eeab,_0x37b4f5['k'],_0x37b4f5[_0x48cfb3(0xcba)+'n'],_0x37b4f5[_0x48cfb3(0x3e8)+_0x48cfb3(0x9ff)+'t0']),_0x37b4f5['keyUs'+'ed']=_0x37b4f5[_0x48cfb3(0x3e8)+_0x48cfb3(0x9ff)+'t0'],_0x37b4f5['raw']=_0x5d3ad4[_0x48cfb3(0x7eb)](_0x5d3ad4[_0x48cfb3(0x63f)](_0x5d3ad4['MQGal'](_0x5d3ad4[_0x48cfb3(0xce3)],_0x37b4f5['hidde'+'n'])+('\x20fake'+'=')+_0x37b4f5['fake'],_0x37b4f5['act']?_0x5d3ad4[_0x48cfb3(0x546)]:''),_0x5d3ad4[_0x48cfb3(0x571)])+_0x37b4f5[_0x48cfb3(0x3e8)+'Offse'+'t0']+_0x48cfb3(0x387)+_0x37b4f5[_0x48cfb3(0x617)];if(_0x1a5355===null)_0x1a5355=_0x37b4f5[_0x48cfb3(0x3e8)+'Offse'+'t0'];_0x5c8a8e++;if(_0x367f5f(_0x37b4f5)){if(_0x48cfb3(0x8e2)!=='urWuX')_0x190bb3++,_0x37b4f5[_0x48cfb3(0x23c)]=!![];else{var _0x937e63=_0x2ce494();if(_0x937e63&&_0x937e63['el'])_0x937e63['el'][_0x48cfb3(0x219)][_0x48cfb3(0x8e8)+'ay']=_0x56f56f['on']?'':'none';var _0x766e3c=_0x685ab;if(_0x766e3c&&_0x766e3c['cv'])_0x766e3c['cv'][_0x48cfb3(0x219)][_0x48cfb3(0x8e8)+'ay']=_0x463df1['on']&&_0x17871a[_0x48cfb3(0x7d3)]?'':_0x48cfb3(0xabd);}}else _0x37b4f5['sane']=![];delete _0x37b4f5[_0x48cfb3(0x590)];}return{'rows':_0x288084,'key':_0x1a5355,'sane':_0x190bb3,'checked':_0x5c8a8e,'keyConsistent':_0x5f15b4(_0x288084),'keySource':_0x48cfb3(0xc79)+'t\x200\x20('+_0x48cfb3(0x768)+'idth)'};}function _0x5f15b4(_0x2cb6dd){var _0x2711bc=_0xbd7aa9,_0x2bd61b={};for(var _0x5b767f=0x177f*0x1+0x32*-0xc2+-0x1*-0xe65;_0x5b767f<_0x2cb6dd[_0x2711bc(0x711)+'h'];_0x5b767f++){if(_0x5d3ad4[_0x2711bc(0xc2a)]===_0x5d3ad4['XhYLx']){if(_0x5a5cf1&&!_0x2467a0()){_0x166ae3();return;}_0x5dd3e9(!![],_0x1bead5);}else{var _0x15611b=_0x2cb6dd[_0x5b767f];if(_0x15611b['k'][_0x2711bc(0x8f1)+'Of'](_0x2711bc(0x447))!==-0x5c4+0xc69+-0x1*0x6a5)continue;if(_0x5d3ad4[_0x2711bc(0x2e2)](_0x2bd61b[_0x15611b['k']],undefined))_0x2bd61b[_0x15611b['k']]=_0x15611b[_0x2711bc(0x4ce)+'ed'];else{if(_0x2bd61b[_0x15611b['k']]!==_0x15611b[_0x2711bc(0x4ce)+'ed'])return![];}}}return!![];}function _0x367f5f(_0x2939a4){var _0x27b2ba=_0xbd7aa9,_0x31fb8d=_0x5d3ad4[_0x27b2ba(0x6b0)][_0x27b2ba(0x823)]('|'),_0x317960=0x4*0x6a0+-0x1f30+0x4b0;while(!![]){switch(_0x31fb8d[_0x317960++]){case'0':if(typeof _0x5239bf!==_0x27b2ba(0x4a5)+'r'||!isFinite(_0x5239bf))return!![];continue;case'1':var _0x5239bf=_0x2939a4[_0x27b2ba(0x95b)];continue;case'2':if(_0x5d3ad4['AQwLx'](_0x2939a4['k'],_0x5d3ad4[_0x27b2ba(0x486)]))return _0x5d3ad4['CwQRy'](_0x5565c9,0x24a9+-0xb*-0x289+-0x408c)||_0x5565c9===-0x155b+-0x1a09+0x2f65;continue;case'3':if(_0x5d3ad4['ltNDj'](_0x2939a4[_0x27b2ba(0x300)],-0x1*-0x923+0x2*-0xb65+0xda8))return _0x5d3ad4[_0x27b2ba(0xcb8)](Math[_0x27b2ba(0x347)](_0x5d3ad4[_0x27b2ba(0x4b4)](_0x5565c9,_0x5239bf)),Math[_0x27b2ba(0x135)](-0x848+0x258e+-0x1d45,Math['abs'](_0x5239bf)*(0x64*0x2c+-0xaa9+-0x687*0x1+0.6)));continue;case'4':return Math[_0x27b2ba(0x347)](_0x5565c9)<0x3b21ccb+-0x43b92*0x8+0x23ddc8d*0x19;case'5':if(typeof _0x5565c9!=='numbe'+'r'||!_0x5d3ad4['evQrg'](isFinite,_0x5565c9))return![];continue;case'6':var _0x5565c9=_0x2939a4['v'];continue;}break;}}function _0x5a3b3d(){var _0x26681c=_0xbd7aa9;if(_0x5d3ad4[_0x26681c(0xaa8)]===_0x5d3ad4[_0x26681c(0xaa8)]){var _0x3dae6a={};try{var _0x161916=_0x5d3ad4['BGxtr'][_0x26681c(0x823)]('|'),_0xe7be7c=0x1*0x1f8a+0x422+0x23ac*-0x1;while(!![]){switch(_0x161916[_0xe7be7c++]){case'0':_0x3dae6a[_0x26681c(0x4aa)+_0x26681c(0xb52)]=!!(_0x36db94&&_0x845905&&_0x36db94[_0x26681c(0x6ac)+_0x26681c(0x64f)+'g']===_0x845905);continue;case'1':_0x3dae6a['tag']=_0x36db94&&_0x36db94[_0x26681c(0x6ac)+'uraTa'+'g']||null;continue;case'2':var _0x36db94=window[_0x26681c(0x72f)+_0x26681c(0x5a4)+_0x26681c(0x90b)]&&window[_0x26681c(0x72f)+'WebMo'+_0x26681c(0x90b)][_0x26681c(0x680)+'me'];continue;case'3':_0x3dae6a[_0x26681c(0xd9e)+_0x26681c(0x196)+'imeIs'+_0x26681c(0x176)+_0x26681c(0x4fe)]=!!(_0xaa707f&&_0xaa707f[_0x26681c(0xc36)+_0x26681c(0x363)]&&_0xaa707f['_runt'+'ime']===_0x36db94);continue;case'4':_0x3dae6a[_0x26681c(0x3b6)+_0x26681c(0x5e1)+'e']=_0x36db94&&_0x36db94[_0x26681c(0xa20)]?typeof _0x36db94[_0x26681c(0xa20)]:_0x26681c(0xabd);continue;case'5':_0x3dae6a[_0x26681c(0xd9e)+_0x26681c(0x196)+'imeGa'+'me']=_0xaa707f&&_0xaa707f[_0x26681c(0xc36)+'ime']&&_0xaa707f[_0x26681c(0xc36)+_0x26681c(0x363)][_0x26681c(0xa20)]?typeof _0xaa707f[_0x26681c(0xc36)+_0x26681c(0x363)]['_game']:_0x26681c(0xabd);continue;}break;}}catch(_0x34e856){_0x3dae6a[_0x26681c(0x54c)]=_0x5d3ad4[_0x26681c(0x182)](String,_0x34e856&&_0x34e856['messa'+'ge']||_0x34e856);}return _0x3dae6a;}else{_0x21a8c0['preve'+_0x26681c(0x53b)+_0x26681c(0x501)](),_0x49e071(!_0x554b8e['on'],_0x154d50['facto'+'r']);return;}}function _0x4b35c9(){var _0x2ffeb4=_0xbd7aa9,_0x437569={'dOzCI':'sakur'+_0x2ffeb4(0x972)+_0x2ffeb4(0x801)+'b','jXJWA':_0x5d3ad4['JvMaW'],'aAjkp':function(_0x6a2a40,_0x2572c4){return _0x6a2a40+_0x2572c4;},'lDKIQ':'posit'+_0x2ffeb4(0x573)+_0x2ffeb4(0xd02)+_0x2ffeb4(0x229)+'12px;'+'top:1'+'2px;z'+'-inde'+'x:214'+_0x2ffeb4(0x9ed)+_0x2ffeb4(0x2e6)+'rsor:'+'point'+_0x2ffeb4(0x1d8)+_0x2ffeb4(0x3ad)+'lect:'+'none;','lPjYC':function(_0x3f19d8,_0x54768f){return _0x5d3ad4['ZaXyG'](_0x3f19d8,_0x54768f);}},_0x5a52c8=[_0x5d3ad4[_0x2ffeb4(0x61f)],'unity'+_0x2ffeb4(0xa19),_0x2ffeb4(0x538),'unity'+'Insta'+_0x2ffeb4(0x471)+_0x2ffeb4(0x1c7)],_0x315142={};for(var _0x3af873=0x2584+0x1f0e+-0x86*0x83;_0x3af873<_0x5a52c8[_0x2ffeb4(0x711)+'h'];_0x3af873++){if(_0x5d3ad4[_0x2ffeb4(0xbbc)](_0x5d3ad4[_0x2ffeb4(0x17c)],_0x2ffeb4(0x668))){var _0x3c5796=_0x2885e5['getEl'+_0x2ffeb4(0xbfa)+_0x2ffeb4(0xcb6)](_0x437569['dOzCI']);if(_0x124518&&!_0x3c5796&&_0x176512[_0x2ffeb4(0x717)]){var _0x46637e=_0x586bb4[_0x2ffeb4(0x357)+'eElem'+_0x2ffeb4(0x3b7)](_0x437569[_0x2ffeb4(0x456)]);_0x46637e['id']=_0x2ffeb4(0x7f2)+'a-sw-'+_0x2ffeb4(0x801)+'b',_0x46637e[_0x2ffeb4(0x219)][_0x2ffeb4(0x622)+'xt']=_0x437569[_0x2ffeb4(0x9c3)](_0x437569[_0x2ffeb4(0x9c3)](_0x437569[_0x2ffeb4(0x8f5)],_0x2ffeb4(0x166)+_0x2ffeb4(0xbda)+_0x2ffeb4(0xd12)+_0x2ffeb4(0x459)+'2,29,'+'.9);b'+'order'+_0x2ffeb4(0x34a)+'solid'+'\x20rgba'+_0x2ffeb4(0xb91)+'143,1'+_0x2ffeb4(0x336)+');col'+_0x2ffeb4(0x31c))+_0x11f22a,';')+('borde'+_0x2ffeb4(0x21e)+'ius:9'+_0x2ffeb4(0x6d5)+'paddi'+_0x2ffeb4(0xdb1)+_0x2ffeb4(0x424)+'x;fon'+'t:11p'+_0x2ffeb4(0x600)+'\x20ui-m'+_0x2ffeb4(0x858)+'ace,C'+_0x2ffeb4(0x92f)+'as,mo'+_0x2ffeb4(0x5ae)+'ce;'),_0x46637e[_0x2ffeb4(0x754)+'onten'+'t']='sakur'+'a',_0x46637e[_0x2ffeb4(0x6d0)+'ck']=function(){_0x16e372(![]),_0x3a9904();},_0xb35748[_0x2ffeb4(0x717)]['appen'+'dChil'+'d'](_0x46637e);}else _0x437569[_0x2ffeb4(0xd71)](!_0x51e433,_0x3c5796)&&_0x3c5796['remov'+'e']();}else{var _0x1df862=_0x5a52c8[_0x3af873],_0x2d775a=typeof window[_0x1df862];_0x315142[_0x1df862]=_0x5d3ad4[_0x2ffeb4(0x796)](_0x2d775a,_0x2ffeb4(0x313)+'ined')?_0x5d3ad4['FvaPE']:_0x2d775a;}}var _0x164362=_0x570c7c();_0x315142['gameS'+'ource']=_0x1e7b2a[_0x2ffeb4(0x8b0)+'e'];try{if(_0x5d3ad4[_0x2ffeb4(0xcf1)]('DnYCx',_0x5d3ad4['IhzuI'])){var _0xaf01db=_0x5d3ad4[_0x2ffeb4(0x9df)](_0x226785);return _0xaf01db&&_0xaf01db['feet']?_0xaf01db['feet'][0x4*-0x3cb+-0x1*0x15f+0x108c]:null;}else _0x315142[_0x2ffeb4(0x5e2)+_0x2ffeb4(0x1cc)]=!!(_0x164362&&_0x164362[_0x2ffeb4(0xbbb)+'e']),_0x315142[_0x2ffeb4(0x7b3)+'8']=!!(_0x164362&&_0x164362[_0x2ffeb4(0xbbb)+'e']&&_0x164362['Modul'+'e'][_0x2ffeb4(0x3ce)+'8']),_0x315142[_0x2ffeb4(0x468)+'ytes']=_0x315142[_0x2ffeb4(0x7b3)+'8']?_0x164362[_0x2ffeb4(0xbbb)+'e']['HEAPU'+'8']['lengt'+'h']:0x1*0x631+-0x1d90+0x175f*0x1;}catch(_0x5017da){_0x315142[_0x2ffeb4(0x5e2)+_0x2ffeb4(0x1cc)]=![],_0x315142['heapU'+'8']=![],_0x315142[_0x2ffeb4(0x468)+'ytes']=-0x2473+0x2057+0x20e*0x2;}return _0x315142[_0x2ffeb4(0x821)+'Wrapp'+'er']=typeof _0x30daa5,_0x315142;}function _0x308d69(){var _0x33c1b0=_0xbd7aa9,_0x5cdb94={},_0x368ff9=_0x5d3ad4[_0x33c1b0(0x53d)](_0x1f5010);if(!_0x368ff9)return _0x5cdb94;_0x5cdb94[_0x5d3ad4['tsThS']]=_0x368ff9[_0x33c1b0(0xb92)+_0x33c1b0(0xb4e)];for(var _0x534089 in _0x368ff9['float'+'s'])_0x5cdb94[_0x5d3ad4[_0x33c1b0(0xb68)]+_0x534089]=_0x368ff9['float'+'s'][_0x534089];if(_0x368ff9['camer'+'a'])_0x5cdb94[_0x5d3ad4['Bmfya']]=_0x368ff9['camer'+'a'];return _0x5cdb94;}function _0x19e40c(_0x956354){var _0x3f57a6=_0xbd7aa9;if(_0x5d3ad4[_0x3f57a6(0xd76)]==='kZJky')try{return _0x4c2b1e();}catch(_0x370ab3){return{'version':_0x3ba012,'when':new _0x3ce951()[_0x3f57a6(0x3ec)+_0x3f57a6(0x47d)+'g'](),'elapsedMs':_0x51879c['now']()-_0x1402bb,'host':_0x16f3b5,'uwmk':!!(_0x560a58[_0x3f57a6(0x72f)+'WebMo'+_0x3f57a6(0x90b)]&&_0x90ffd9['Unity'+'WebMo'+_0x3f57a6(0x90b)][_0x3f57a6(0x680)+'me']),'il2CppContext':![],'arm':_0x41a72b,'hooksTotal':_0x3600e8[_0x3f57a6(0x711)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x46c196(_0x370ab3&&_0x370ab3[_0x3f57a6(0x200)+'ge']||_0x370ab3)};}else{var _0x21ffef={};for(var _0x426c46 in _0x956354){var _0x34fc14=_0x956354[_0x426c46];for(var _0x452ece=-0xd1b+-0x67b+0x1396;_0x452ece<_0x34fc14[_0x3f57a6(0x711)+'h'];_0x452ece++){if(_0x5d3ad4[_0x3f57a6(0xd14)](_0x3f57a6(0x4dc),'oqPBf')){var _0x5e0705=_0x36c5aa(_0x21b8da['refs'][_0x3f57a6(0x9de)+'h'],-0x2460+-0x6b2*0x5+0x45ea);_0x1b3061[_0x3f57a6(0x9de)+'h']=_0x5d3ad4['GbaIa'](_0x25c7b0,_0x5e0705,_0x5d3ad4['pZQqG'],'obfI');}else _0x21ffef[_0x5d3ad4[_0x3f57a6(0x8db)](_0x5d3ad4['HVlin'](_0x426c46,_0x3f57a6(0x178)),_0x34fc14[_0x452ece]['o'][_0x3f57a6(0x89d)+_0x3f57a6(0x30e)](0x1*-0x1fc4+0x8*-0x39d+0x17*0x2a4))]=_0x34fc14[_0x452ece]['v'];}}return _0x21ffef;}}function _0x1fde69(_0x2ea63c,_0x4eb301){var _0x4e7e06=_0xbd7aa9;if(_0x2ea63c===_0x4e7e06(0xcc4)){_0x5d3ad4[_0x4e7e06(0x88f)](_0x56a74f,_0x4eb301&&typeof _0x4eb301['on']===_0x5d3ad4['fUXXi']?_0x4eb301['on']:_0x169dc6['on'],_0x4eb301&&typeof _0x4eb301[_0x4e7e06(0x292)+'r']===_0x5d3ad4['VvFiJ']?_0x4eb301[_0x4e7e06(0x292)+'r']:_0x169dc6['facto'+'r']);return;}if(_0x2ea63c!==_0x5d3ad4[_0x4e7e06(0xd10)])return;var _0x34896a=_0x5d3ad4[_0x4e7e06(0x60f)](_0x8b4e5e),_0x422a5f=_0x5d3ad4[_0x4e7e06(0xd3f)](_0x19e40c,_0x34896a),_0x246527=_0x5d3ad4['uxcpJ'](_0x308d69);for(var _0x462405 in _0x246527)_0x422a5f[_0x462405]=_0x246527[_0x462405];if(!_0x3e929f){_0x3e929f=_0x422a5f,_0x5dfc73=[],_0x432782(_0x5d3ad4[_0x4e7e06(0x730)],{'report':_0x5d3ad4['nhSBO'](_0x493f7d)});return;}_0x5dfc73=[];for(var _0x28d909 in _0x422a5f){var _0x4da616=_0x3e929f[_0x28d909],_0x3c9557=_0x422a5f[_0x28d909];if(_0x4da616!==_0x3c9557)_0x5dfc73[_0x4e7e06(0x97d)](_0x5d3ad4[_0x4e7e06(0x582)](_0x28d909+':\x20',_0x4da616)+'\x20->\x20'+_0x3c9557);}_0x3e929f=_0x422a5f,_0x432782(_0x5d3ad4[_0x4e7e06(0x730)],{'report':_0x5d3ad4['cQGob'](_0x493f7d)});}var _0x347d8d=null;function _0x1c16d0(){var _0x1247b6=_0xbd7aa9,_0x20c1bc={'vIGOb':function(_0x310200,_0x430bb7){return _0x5d3ad4['chCST'](_0x310200,_0x430bb7);},'vDgTV':function(_0x46db43,_0x205c69,_0x29c15c){return _0x46db43(_0x205c69,_0x29c15c);},'PjeCn':_0x5d3ad4[_0x1247b6(0x452)],'eKZPq':function(_0x3be46a,_0x3face1){return _0x5d3ad4['MXpmJ'](_0x3be46a,_0x3face1);}};if(_0x347d8d)return _0x347d8d;try{if(!document[_0x1247b6(0x717)]||!document['body'][_0x1247b6(0x1d9)+'dChil'+'d'])return null;if(!document['getEl'+'ement'+'ById']('sakur'+_0x1247b6(0x972)+_0x1247b6(0x4eb)+'ss')){if(_0x5d3ad4[_0x1247b6(0xb8d)](_0x1247b6(0x789),_0x5d3ad4['ExnYI']))_0x507f2d=_0x3eb358,_0x595c22=_0x1509af[_0x1247b6(0xc0d)];else{var _0x479a3e=document[_0x1247b6(0x357)+'eElem'+_0x1247b6(0x3b7)](_0x1247b6(0x219));_0x479a3e['id']='sakur'+'a-sw-'+'hud-c'+'ss',_0x479a3e[_0x1247b6(0x754)+'onten'+'t']=_0x5d3ad4[_0x1247b6(0x72d)],(document['head']||document['docum'+_0x1247b6(0x2a8)+'ement'])['appen'+_0x1247b6(0x493)+'d'](_0x479a3e);}}var _0x91dd0e=document[_0x1247b6(0x357)+_0x1247b6(0xd90)+_0x1247b6(0x3b7)](_0x1247b6(0x8d7));_0x91dd0e['id']=_0x5d3ad4['csgve'],_0x91dd0e[_0x1247b6(0x219)]['cssTe'+'xt']=_0x5d3ad4[_0x1247b6(0xb51)](_0x5d3ad4['Eqicr'],_0x5d3ad4['opOtU'])+_0x5d3ad4[_0x1247b6(0xbaa)]+('box-s'+'hadow'+_0x1247b6(0x265)+'px\x2030'+'px\x20-1'+'2px\x20#'+'000;u'+_0x1247b6(0x50c)+'elect'+':none'+';-web'+_0x1247b6(0xbe7)+_0x1247b6(0x50c)+_0x1247b6(0x2b9)+':none'+';');var _0x3217d3=_0x1247b6(0x1b4)+'data-'+_0x1247b6(0x467)+'2\x22\x20st'+_0x1247b6(0xb2c)+'color'+_0x1247b6(0x8f7)+'a99;m'+'ax-wi'+_0x1247b6(0x431)+_0x1247b6(0x128)+_0x1247b6(0xa76)+'iv>';_0x91dd0e[_0x1247b6(0xaaf)+_0x1247b6(0x723)]=_0x5d3ad4[_0x1247b6(0xccd)](_0x5d3ad4[_0x1247b6(0x479)](_0x5d3ad4['ioerU'](_0x5d3ad4[_0x1247b6(0x582)](_0x5d3ad4[_0x1247b6(0xc14)](_0x5d3ad4[_0x1247b6(0x278)](_0x5d3ad4['nCkFO'](_0x5d3ad4[_0x1247b6(0x58d)],'<b\x20st'+'yle=\x22'+_0x1247b6(0xd11)+':')+_0x1f5356,_0x5d3ad4[_0x1247b6(0x9aa)])+('<butt'+_0x1247b6(0x90a)+'ta-a='+_0x1247b6(0x280)+'style'+'=\x22bac'+'kgrou'+_0x1247b6(0x1dd)+_0x1247b6(0x5fa)+_0x1247b6(0x77d)+'borde'+_0x1247b6(0xd28)+'\x20soli'+_0x1247b6(0x1c4)+_0x1247b6(0x5fc)+',143,'+_0x1247b6(0x8fd)+_0x1247b6(0x202))+_0x5d3ad4['xCPih'],'<inpu'+_0x1247b6(0x9f7)+_0x1247b6(0x624)+_0x1247b6(0x1cb)+_0x1247b6(0x319)+_0x1247b6(0x683)+_0x1247b6(0x1c9)+_0x1247b6(0x619)+'max=\x22'+'5\x22\x20st'+_0x1247b6(0xa7b)+'.5\x22\x20v'+'alue='+_0x1247b6(0xa61)+_0x1247b6(0x511)+'\x22widt'+_0x1247b6(0x543)+_0x1247b6(0x3e0)+'ent-c'+_0x1247b6(0xcd8))+_0x1f5356+_0x1247b6(0xc87),'<span'+_0x1247b6(0x7f4)+_0x1247b6(0xd4c)+'v\x22\x20st'+_0x1247b6(0xb2c)+_0x1247b6(0xd11)+_0x1247b6(0x2f9)+'9c9;m'+'in-wi'+_0x1247b6(0xd6b)+_0x1247b6(0x4d0)+_0x1247b6(0xb94)+'</spa'+'n>')+('<butt'+_0x1247b6(0x90a)+'ta-a='+'\x22esp\x22'+'\x20styl'+'e=\x22ba'+'ckgro'+'und:t'+_0x1247b6(0x635)+_0x1247b6(0x51a)+_0x1247b6(0x71a)+'er:1p'+'x\x20sol'+'id\x20rg'+_0x1247b6(0xaac)+_0x1247b6(0x855)+',177,'+'.45);'),_0x5d3ad4[_0x1247b6(0xa13)])+(_0x1247b6(0x687)+'on\x20da'+_0x1247b6(0x8ec)+'\x22snap'+'\x22\x20sty'+'le=\x22b'+_0x1247b6(0x47f)+_0x1247b6(0x54e)+_0x1247b6(0x50f)+'paren'+_0x1247b6(0x846)+_0x1247b6(0x3c9)+'px\x20so'+'lid\x20r'+'gba(2'+_0x1247b6(0xaeb)+_0x1247b6(0x542)+',.45)'+';')+_0x5d3ad4['yTrGw'],_0x1247b6(0x687)+_0x1247b6(0x90a)+'ta-a='+_0x1247b6(0x65a)+'\x22\x20sty'+'le=\x22m'+'argin'+'-left'+_0x1247b6(0x3a2)+';back'+_0x1247b6(0xb9b)+'d:tra'+'nspar'+_0x1247b6(0x9f0)+_0x1247b6(0xb9f)+':1px\x20'+_0x1247b6(0x4b2)+_0x1247b6(0xbf7)+'(255,'+'143,1'+_0x1247b6(0xca4)+_0x1247b6(0x1ec)),_0x1247b6(0xd11)+_0x1247b6(0xcbd)+'ef5;b'+_0x1247b6(0xb9f)+_0x1247b6(0xc03)+'us:6p'+_0x1247b6(0x6be)+'ding:'+_0x1247b6(0x24b)+'px;cu'+_0x1247b6(0xbfd)+_0x1247b6(0xd81)+'er;fo'+'nt:in'+_0x1247b6(0x5e5)+';\x22>-<'+_0x1247b6(0x161)+'on>')+_0x5d3ad4[_0x1247b6(0x3c8)]+(_0x1247b6(0x1b4)+_0x1247b6(0x91e)+'a=\x22st'+'\x22\x20sty'+_0x1247b6(0x2b8)+_0x1247b6(0xcd8)+_0x1247b6(0x139)+_0x1247b6(0x2f2)+'x-wid'+_0x1247b6(0xb19)+_0x1247b6(0x4d0)+_0x1247b6(0x738)+'v>')+('<div\x20'+_0x1247b6(0x91e)+'a=\x22st'+_0x1247b6(0x7be)+_0x1247b6(0xb2c)+_0x1247b6(0xd11)+_0x1247b6(0x8f7)+'a99;m'+_0x1247b6(0xd61)+_0x1247b6(0x431)+'90px;'+'\x22></d'+_0x1247b6(0xbde)),_0x91dd0e['inner'+_0x1247b6(0x723)]=_0x3217d3;var _0x2baa32=function(_0x4a0b73){var _0x331f4a=_0x1247b6;return _0x91dd0e[_0x331f4a(0x37d)+'Selec'+_0x331f4a(0xb79)](_0x5d3ad4[_0x331f4a(0xd89)](_0x5d3ad4[_0x331f4a(0x8db)](_0x331f4a(0x7a2)+_0x331f4a(0xb0b),_0x4a0b73),'\x22]'));},_0x38fbc1=_0x2baa32('st'),_0x51aeda=_0x2baa32(_0x5d3ad4[_0x1247b6(0x3bb)]),_0x1580d6=_0x2baa32('sp'),_0x2dd5a5=_0x2baa32('fx'),_0xa0377c=_0x5d3ad4[_0x1247b6(0x5a7)](_0x2baa32,'fv'),_0x58505a=_0x2baa32('bar');if(_0x1580d6)_0x1580d6['oncli'+'ck']=function(){var _0x1164ed=_0x1247b6;if(_0x5d3ad4[_0x1164ed(0xb1c)](_0x5d3ad4['eqhOk'],_0x1164ed(0xd9f))){var _0x3b6c66=_0x3bdf60[-0x1e3*-0x3+0x2*-0x337+0xc5][_0x1164ed(0xa3c)]();if(_0x3b6c66)_0x25fbcd=_0x3b6c66;}else _0x56a74f(!_0x169dc6['on'],_0x169dc6[_0x1164ed(0x292)+'r']);};if(_0x2dd5a5)_0x2dd5a5[_0x1247b6(0x52b)+'ut']=function(){var _0x39ccb9=_0x1247b6;_0x5d3ad4['QqpQU']('LTROF','LTROF')?_0x316847[_0x39ccb9(0x97d)](_0x20c1bc[_0x39ccb9(0xc1f)](_0x1841c6,_0x2c38f6&&_0x31a8a8[_0x39ccb9(0x200)+'ge']||_0x11292d)[_0x39ccb9(0xd2d)](0x1f18+-0x21f2+-0x2*-0x16d,-0x1a13+0x758*-0x4+-0x5*-0xb2f)):_0x5d3ad4[_0x39ccb9(0x5cc)](_0x56a74f,_0x169dc6['on'],_0x5d3ad4[_0x39ccb9(0x34c)](parseFloat,_0x2dd5a5['value'])||-0x1*0x1389+0x2351+0x7*-0x241);};if(_0x2baa32(_0x5d3ad4['XRDwT']))_0x2baa32(_0x1247b6(0x9e8))[_0x1247b6(0x6d0)+'ck']=function(){var _0x53f225=_0x1247b6;_0x1fde69('snaps'+_0x53f225(0xce7));};var _0x4cfb52=_0x2baa32('esp');if(_0x4cfb52)_0x4cfb52['oncli'+'ck']=function(){var _0x591832=_0x1247b6;if(!_0x5310b2['on'])_0x189bbb(!![],![]);else{if(_0x5310b2[_0x591832(0x7d3)])_0x189bbb(![],![]);else{if(_0x5ae8d7())_0x20c1bc[_0x591832(0x79a)](_0x189bbb,!![],!![]);else _0x189bbb(![],![]);}}};if(_0x2baa32(_0x1247b6(0x1f3)))_0x2baa32(_0x1247b6(0x1f3))['oncli'+'ck']=function(){var _0x3053c2=_0x1247b6;if(!_0x58505a)return;var _0xaddda1=_0x58505a[_0x3053c2(0x219)][_0x3053c2(0x8e8)+'ay']===_0x20c1bc['PjeCn'];_0x58505a[_0x3053c2(0x219)]['displ'+'ay']=_0xaddda1?'':_0x3053c2(0xabd),_0x20c1bc[_0x3053c2(0xb6f)](_0x2baa32,'fold')[_0x3053c2(0x754)+'onten'+'t']=_0xaddda1?'-':'+';};return document[_0x1247b6(0x717)]['appen'+'dChil'+'d'](_0x91dd0e),_0x347d8d={'el':_0x91dd0e,'st':_0x38fbc1,'st2':_0x51aeda,'sp':_0x1580d6,'fx':_0x2dd5a5,'fv':_0xa0377c,'esp':_0x4cfb52},_0x347d8d;}catch(_0x5536ec){return console['warn'](_0x5d3ad4['ZLgPb'],_0x1247b6(0xd11)+':'+_0x1f5356,_0x5536ec),null;}}function _0x5ae8d7(){var _0x2e5e9b=_0xbd7aa9,_0x24be77={'ayTVX':function(_0x33c61c,_0x2bea75){return _0x33c61c(_0x2bea75);}};if('dyQRk'!==_0x5d3ad4['pnzbO'])return _0x2282fb[_0x2e5e9b(0xc05)+'d']++,_0x3886d7[_0x2e5e9b(0x257)+_0x2e5e9b(0x234)]=_0x33acb6[_0x2e5e9b(0x257)+'rror']||_0x24be77[_0x2e5e9b(0x8e4)](_0x1c358f,_0x24c7e2&&_0x805e8d[_0x2e5e9b(0x200)+'ge']||_0x56157d)[_0x2e5e9b(0xd2d)](0x1*0x7f0+0x127a+-0x1a6a,0x4fd*0x5+-0x4c*0xd+0x1*-0x149d),null;else try{if(_0x5d3ad4[_0x2e5e9b(0x6a4)](_0x2e5e9b(0x96c),_0x5d3ad4['XkRCE'])){var _0x4be907=arguments[_0xc4cbd8];if(typeof _0x4be907==='strin'+'g')_0x206bf0+=_0x4be907;else{if(_0x4be907&&_0x4be907[_0x2e5e9b(0x200)+'ge'])_0x416182+=_0x4be907[_0x2e5e9b(0x200)+'ge'];}}else{var _0x3a8392=_0x5d3ad4['YDJem'](_0x8bd8f9);if(_0x3a8392[_0x2e5e9b(0x98e)])return!![];var _0x22b1c4=_0x5d3ad4['JmzrI'](_0x455117);return!!(_0x22b1c4&&_0x1c2e73[_0x2e5e9b(0x85a)+'ified']);}}catch(_0x381ea6){return![];}}function _0x89aede(){var _0x4bc505=_0xbd7aa9,_0x5f190a={'HplXZ':function(_0x9ae227,_0x209e88){return _0x9ae227||_0x209e88;}};if('wpoPb'!==_0x4bc505(0x15d))try{var _0xe2821f=_0x5d3ad4[_0x4bc505(0xc29)]['split']('|'),_0x4b64de=-0x858+0xad1+-0x279;while(!![]){switch(_0xe2821f[_0x4b64de++]){case'0':if(_0x5d3ad4['qEarD'](_0x322d16,_0x3405ed[_0x4bc505(0x754)+'onten'+'t']))_0x3405ed['textC'+'onten'+'t']=_0x322d16;continue;case'1':var _0x3405ed=_0x347d8d&&_0x347d8d[_0x4bc505(0x358)];continue;case'2':if(!_0x3405ed)return;continue;case'3':var _0x322d16=!_0x5310b2['on']?_0x4bc505(0x2dd)+'ff':_0x5310b2[_0x4bc505(0x7d3)]?_0x4bc505(0xc70)+_0x4bc505(0x721):_0x5d3ad4[_0x4bc505(0x94e)];continue;case'4':_0x3405ed[_0x4bc505(0x219)]['color']=_0x5310b2['on']?_0x4bc505(0x825)+'1b':_0x4bc505(0x380)+'f5';continue;case'5':_0x3405ed[_0x4bc505(0x219)][_0x4bc505(0x166)+_0x4bc505(0xbda)]=_0x5310b2['on']?_0x1f5356:_0x4bc505(0x50f)+_0x4bc505(0x2cb)+'t';continue;case'6':if(_0x5310b2[_0x4bc505(0x7d3)]&&!_0x5ae8d7())_0x5310b2[_0x4bc505(0x7d3)]=![];continue;}break;}}catch(_0x20c161){}else try{if(_0x5f190a[_0x4bc505(0xd20)](!_0x393287,!_0x4b7fe3))return null;var _0x1cfedf=new _0x4a57f5(_0x43b57d)['getCl'+_0x4bc505(0x55d)+'me']();return _0x1cfedf===_0x557178?null:_0x1cfedf;}catch(_0x2a22fc){return null;}}function _0x189bbb(_0x21ce06,_0x448c14){var _0x2f2a23=_0xbd7aa9,_0x166117={'OGMoY':'none','XQOlo':'close','ypiPb':_0x5d3ad4[_0x2f2a23(0x638)]};if(_0x5d3ad4['lmOAJ']!=='FSuNS'){if(_0x1788f7)_0x2d1c3e[_0x2f2a23(0x219)][_0x2f2a23(0x8e8)+'ay']=_0x35b685?'':_0x166117['OGMoY'];if(_0x50ce03)_0x488def['textC'+'onten'+'t']=_0x2d6e4c?_0x166117[_0x2f2a23(0x5c8)]:'open';_0x4297ee['style'][_0x2f2a23(0x589)]=_0x3bbf8f?_0x166117[_0x2f2a23(0x7ee)]:_0x2f2a23(0x509),_0x5859ea[_0x2f2a23(0x219)][_0x2f2a23(0x166)+_0x2f2a23(0xbda)]=_0x362d96?'#150c'+'1d':'rgba('+_0x2f2a23(0x615)+',29,.'+'9)';}else{_0x5310b2['on']=!!_0x21ce06,_0x5310b2['boxes']=!!_0x448c14,_0x89aede();try{var _0x42e6e7=_0xacc5();if(_0x42e6e7&&_0x42e6e7['el'])_0x42e6e7['el']['style'][_0x2f2a23(0x8e8)+'ay']=_0x5310b2['on']?'':'none';var _0x29231a=_0x35e9eb;if(_0x29231a&&_0x29231a['cv'])_0x29231a['cv'][_0x2f2a23(0x219)][_0x2f2a23(0x8e8)+'ay']=_0x5310b2['on']&&_0x5310b2[_0x2f2a23(0x7d3)]?'':_0x5d3ad4[_0x2f2a23(0x452)];}catch(_0x582693){}}}var _0x203449=0x7*-0x15e+-0xf92+0xc93*0x2;function _0x56a74f(_0x3005ce,_0x79b71d){var _0x14bc71=_0xbd7aa9,_0x1d7196=(_0x14bc71(0x38b)+_0x14bc71(0x270)+'0|2')['split']('|'),_0x1785b8=-0x1b29*0x1+0x26c0+0x17*-0x81;while(!![]){switch(_0x1d7196[_0x1785b8++]){case'0':var _0x5d6de3=_0x5d3ad4['uxcpJ'](_0x1c16d0);continue;case'1':_0x169dc6['on']=!!_0x3005ce;continue;case'2':if(_0x5d6de3){_0x5d6de3['sp']&&(_0x5d6de3['sp']['textC'+'onten'+'t']=_0x169dc6['on']?'Speed'+'\x20ON':_0x5d3ad4['yDEJN'],_0x5d6de3['sp']['style']['backg'+_0x14bc71(0xbda)]=_0x169dc6['on']?_0x1f5356:'trans'+'paren'+'t',_0x5d6de3['sp']['style'][_0x14bc71(0xd11)]=_0x169dc6['on']?_0x5d3ad4['ZtwyV']:'#f7ee'+'f5');if(_0x5d6de3['fx'])_0x5d6de3['fx'][_0x14bc71(0x821)]=String(_0x169dc6[_0x14bc71(0x292)+'r']);if(_0x5d6de3['fv'])_0x5d6de3['fv'][_0x14bc71(0x754)+_0x14bc71(0xda5)+'t']=_0x169dc6['facto'+'r'][_0x14bc71(0xa57)+'ed'](-0x7bb*0x1+0x26e6*0x1+-0x2*0xf95)+'x';}continue;case'3':var _0x8c06da=_0x169dc6['on'];continue;case'4':_0x169dc6['on']&&!_0x8c06da&&(_0x5d3ad4[_0x14bc71(0x7ae)](_0x79b71d,undefined)||_0x79b71d===null||_0x5d3ad4['YSISx'](Number(_0x79b71d),-0xf18+0x11e+0x1*0xdfb))&&(_0x79b71d=_0x203449);continue;case'5':_0x169dc6['facto'+'r']=Math['min'](_0x169dc6[_0x14bc71(0x135)],Math[_0x14bc71(0x135)](_0x169dc6['min'],Number(_0x79b71d)||-0x1754+0x1*0x160d+0x29*0x8));continue;case'6':if(!_0x169dc6['on'])_0x285fae={};continue;}break;}}function _0x2c55a0(_0x418c4c){var _0x2ec368=_0xbd7aa9;if(_0x5d3ad4[_0x2ec368(0x165)]===_0x5d3ad4['tkFMP'])_0x43ddb7[_0x2ec368(0xac3)]=(_0x30722e['inner'+_0x2ec368(0x5c6)+'t']||-0x2239+-0x1c3c+-0x10f*-0x3b)-(_0x50c780['offse'+'tHeig'+'ht']||0xf16*0x1+-0x82d*-0x1+-0x15b3)-(0x2*0xb2d+0x9*-0xe1+-0xe59);else{var _0x50d9e9=_0x1c16d0();if(!_0x50d9e9||!_0x50d9e9['st'])return;try{var _0x159fb3=_0x5d3ad4[_0x2ec368(0xdae)][_0x2ec368(0x823)]('|'),_0x149f7d=-0x11*-0x1ad+-0x5ac+-0x16d1;while(!![]){switch(_0x159fb3[_0x149f7d++]){case'0':var _0x544447=_0x418c4c&&_0x418c4c[_0x2ec368(0x358)]||null;continue;case'1':var _0x3b2888=_0x50d9e9['st2'];continue;case'2':_0x3b2888&&(_0x3b2888[_0x2ec368(0x754)+_0x2ec368(0xda5)+'t']=_0x4f5a9a>-0x1*0xec+0x4cc+-0x3e0*0x1?_0x5d3ad4[_0x2ec368(0x928)](_0x5d3ad4['GoHbV'](_0x5d3ad4[_0x2ec368(0xa49)],_0x4f5a9a),_0x399ccc?_0x5d3ad4[_0x2ec368(0x692)]('\x20+\x20'+_0x399ccc,_0x5d3ad4[_0x2ec368(0x555)]):'')+(_0x544447&&_0x544447['camer'+'a']?_0x5d3ad4[_0x2ec368(0xd65)]('\x20\x20cam'+'\x20',_0x544447[_0x2ec368(0x32a)+'aFrom']):_0x2ec368(0xb0a)+'\x20-'):_0x5d3ad4[_0x2ec368(0x354)](_0x5d3ad4[_0x2ec368(0x8ba)],_0x544447&&_0x544447['camer'+'a']?_0x544447[_0x2ec368(0x32a)+'aFrom']:'-'),_0x3b2888['style']['color']=_0x5d3ad4[_0x2ec368(0x2f5)](_0x4f5a9a,0x4f*-0x13+0x160c+-0x102f*0x1)?'#7ee0'+'a8':_0x5d3ad4[_0x2ec368(0xcb9)]);continue;case'3':var _0x1c5bb5=Object[_0x2ec368(0x1b1)](_0x418c4c&&_0x418c4c['insta'+'nces']||{})[_0x2ec368(0x711)+'h'];continue;case'4':if(!_0x2c891c()&&!_0x8071f9){if(_0x50d9e9['el'])_0x50d9e9['el'][_0x2ec368(0x219)][_0x2ec368(0x8e8)+'ay']=_0x5d3ad4['JMtBy'];return;}continue;case'5':var _0x4f838e=_0x5d3ad4[_0x2ec368(0x860)](_0x5d3ad4[_0x2ec368(0x582)](_0x5d3ad4['gxiAg'](_0x5d3ad4[_0x2ec368(0xb21)](_0x5d3ad4[_0x2ec368(0x2b4)]('v'+(_0x418c4c&&_0x418c4c['versi'+'on']||_0x582b6a)+(_0x2ec368(0xa68)+'ks\x20'),_0x418c4c&&_0x418c4c['hooks'+'Appli'+'ed']||0x18d9*0x1+0x23e5+-0x3cbe)+'/'+(_0x418c4c&&_0x418c4c[_0x2ec368(0x91c)+_0x2ec368(0x4b5)]||0x443*0x1+-0x24bb*-0x1+-0x28fe)+_0x5d3ad4['GteIu'],_0x1c5bb5),_0x2ec368(0x8d6)+'\x20'),_0x3251c1)+('\x20\x20wri'+_0x2ec368(0x8cf)),_0x583259);continue;case'6':_0x50d9e9['st']['textC'+'onten'+'t']=_0x4f838e;continue;case'7':var _0x3251c1=_0x2d3c40?(_0x2d3c40[_0x2ec368(0x2d5)+'r']['byteL'+'ength']/(0x189766*0x1+-0x25ac9*0xb+0x114f3d))['toFix'+'ed'](-0xe33+-0x1ed3+0x2d06)+'MB':_0x5d3ad4[_0x2ec368(0xb37)];continue;case'8':var _0x4f5a9a=_0x544447?_0x544447[_0x2ec368(0xb80)+'Count']||-0x1*0x207f+-0x2029+-0x1*-0x40a8:-0x5d*0x4+0xc75+0x139*-0x9;continue;case'9':var _0x399ccc=_0x544447?_0x544447[_0x2ec368(0x15b)+'unt']||0x2180+-0x422*0x3+-0x151a:0x301*0x1+-0x1d75+0x1a74;continue;case'10':if(_0x50d9e9['el'])_0x50d9e9['el']['style']['displ'+'ay']='';continue;}break;}}catch(_0x4c8d8e){}}}window['addEv'+'entLi'+'stene'+'r'](_0x5d3ad4[_0xbd7aa9(0x2a6)],function(_0x37cf80){var _0x2a956e=_0xbd7aa9,_0x210f82={'xhXkw':function(_0x1dc449,_0x5c5525){return _0x1dc449/_0x5c5525;}};if(!_0x37cf80)return;try{if('FaCBi'!==_0x2a956e(0x2f7))return _0x210f82['xhXkw'](_0x1e830a[_0x2a956e(0xbda)](_0x4425b9*(-0x2*0x611+0x7aa+0x4*0x137)),-0x3*-0xcb9+0x3*-0xc11+-0xca*0x2);else{if(_0x37cf80['code']==='F9'){if(_0x2a956e(0x736)!==_0x5d3ad4['uSqKj'])try{if(_0x18d413[_0x737a31]['conte'+'ntWin'+_0x2a956e(0xd85)])_0x23a948[_0x42e43a][_0x2a956e(0x7fe)+'ntWin'+_0x2a956e(0xd85)][_0x2a956e(0x765)+'essag'+'e'](_0x1280ef,'*');}catch(_0xaec4a6){}else{_0x37cf80['preve'+'ntDef'+_0x2a956e(0x501)](),_0x1fde69(_0x5d3ad4['heuor']);return;}}if(_0x37cf80['code']==='F7'){_0x37cf80['preve'+'ntDef'+_0x2a956e(0x501)](),_0x5d3ad4[_0x2a956e(0x577)](_0x56a74f,!_0x169dc6['on'],_0x169dc6[_0x2a956e(0x292)+'r']);return;}if(_0x5d3ad4['vZjdc'](_0x37cf80[_0x2a956e(0xab2)],'F8')){if(_0x2a956e(0xc6c)==='rkHga'){var _0xdaf745=_0x48114e[_0x2a956e(0x3eb)+_0x2a956e(0x391)]({'typeName':_0x2d9c68['type'],'methodName':_0x2a956e(0xd17)+'e','params':[_0x5d3ad4[_0x2a956e(0x59b)],_0x2a956e(0xcd4)],'returnType':_0x132091},_0x5d3ad4['GbaIa'](_0x519593,_0xd500f7[_0x2a956e(0x6c7)],_0x1af5a7[_0x2a956e(0x71e)],_0x3e498c['many']));_0x3a8298['push']({'type':_0x5a53f2['type'],'hook':_0xdaf745,'keep':_0x545227['keep']});}else{_0x37cf80['preve'+_0x2a956e(0x53b)+'ault'](),_0x56a74f(_0x169dc6['on'],_0x5d3ad4[_0x2a956e(0xb51)](_0x169dc6['facto'+'r'],0x206+-0x18b9*0x1+-0x1*-0x16b3+0.5));return;}}if(_0x5d3ad4['XpBDu'](_0x37cf80[_0x2a956e(0xab2)],'F6')){if(_0x5d3ad4['YSISx'](_0x2a956e(0x7a1),'AfQbi')){_0x37cf80[_0x2a956e(0xbaf)+_0x2a956e(0x53b)+_0x2a956e(0x501)](),_0x56a74f(_0x169dc6['on'],_0x169dc6['facto'+'r']-(0x779*0x5+0x1*-0x9a2+-0x1bbb+0.5));return;}else return _0x5d3ad4[_0x2a956e(0x2ae)]('0x'+(_0x114358['o']<0x1*-0x1a+-0x1*0x3f5+-0x1*-0x40f?'?':_0x236496['o'][_0x2a956e(0x89d)+_0x2a956e(0x30e)](0x75d+0x3ac+-0xaf9))+'\x20('+_0x5bb3a2[_0x2a956e(0x24d)],')');}if(_0x5d3ad4['sviJj'](_0x37cf80['code'],_0x5d3ad4['reZOX'])){if(_0x5d3ad4[_0x2a956e(0x12d)]!==_0x5d3ad4['nUQZD']){_0x37cf80['preve'+_0x2a956e(0x53b)+_0x2a956e(0x501)](),_0x4b532c(!_0xfe887c[_0x2a956e(0x616)]);return;}else try{_0x3b2bab[_0x2a956e(0x5f7)]['enabl'+'ed']=![];}catch(_0x516398){}}if(_0x37cf80[_0x2a956e(0xab2)]===_0x2a956e(0xad7)+_0x2a956e(0x3f4)+'ht'){_0x37cf80['preve'+_0x2a956e(0x53b)+_0x2a956e(0x501)](),_0x31f87f['fov']=Math[_0x2a956e(0x67f)](-0x1fb4*-0x1+0x5d*0x28+-0x2db0,_0x5d3ad4[_0x2a956e(0x2ae)](_0x31f87f[_0x2a956e(0xa0d)],0x17*0xe6+0xa0b+-0x10f*0x1d)),_0x1596ac();return;}if(_0x37cf80['code']==='Brack'+_0x2a956e(0x660)+'t'){_0x37cf80[_0x2a956e(0xbaf)+_0x2a956e(0x53b)+_0x2a956e(0x501)](),_0x31f87f[_0x2a956e(0xa0d)]=Math['max'](0x220+0x482*0x2+-0xb06*0x1,_0x31f87f['fov']-(0xa6a+-0x2*0xe91+0x12ba)),_0x5d3ad4['kuAwO'](_0x1596ac);return;}}}catch(_0xc62971){}},!![]);var _0x5310b2={'on':!![],'span':0x50,'boxes':![]};function _0x1f5010(){var _0x2d7b0f=_0xbd7aa9,_0x349134={'iuedV':function(_0x28975a,_0xe92e58){return _0x28975a===_0xe92e58;},'qmCsu':_0x5d3ad4[_0x2d7b0f(0x69c)]},_0x4e5b9f=_0x5992f4[_0x2d7b0f(0x5ca)+'nNetw'+'orkSy'+'nc']||{},_0x1bb838=Object[_0x2d7b0f(0x1b1)](_0x4e5b9f);for(var _0x30cbc2=-0x228b+0x1a4c+-0x1*-0x83f;_0x5d3ad4['ciknX'](_0x30cbc2,_0x1bb838[_0x2d7b0f(0x711)+'h']);_0x30cbc2++){var _0x2c2680=_0x4e5b9f[_0x1bb838[_0x30cbc2]][_0x2d7b0f(0x41f)],_0x1b02de=_0x3448cb(_0x2c2680+(-0x7ee+-0x217f*-0x1+-0x1961),_0x2d7b0f(0x441));if(!_0x1b02de)continue;var _0xec958=_0x17a0ac[_0x2d7b0f(0xcea)+'Look']||[],_0x35d567={'mouseLook':_0x5d3ad4[_0x2d7b0f(0x237)]('0x',_0x5d3ad4[_0x2d7b0f(0xad2)](_0x1b02de,0x80*0x1f+-0x1c8a+0x1*0xd0a)[_0x2d7b0f(0x89d)+_0x2d7b0f(0x30e)](0x1177+0x110f+-0x2276)),'floats':{},'camera':null,'vec2':null};for(var _0xffd678=-0x1ec0+-0x7bc+0x267c;_0x5d3ad4['WavDK'](_0xffd678,_0xec958[_0x2d7b0f(0x711)+'h']);_0xffd678++){if(_0x5d3ad4[_0x2d7b0f(0x1a9)](_0x2d7b0f(0x8dc),_0x2d7b0f(0x8dc)))try{var _0x3d8895=_0x1663b2[_0x2d7b0f(0x143)+'em'](_0x149742);if(!_0x3d8895)return;var _0xecfbd9=_0x4d39bb[_0x2d7b0f(0x51b)](_0x3d8895);if(_0xecfbd9&&_0x349134[_0x2d7b0f(0xc80)](typeof _0xecfbd9['x'],_0x2d7b0f(0x4a5)+'r')&&_0x349134['iuedV'](typeof _0xecfbd9['y'],_0x349134['qmCsu']))_0x25e299[_0x2d7b0f(0x1bc)]=_0xecfbd9;}catch(_0x12b27a){}else{if(_0x5d3ad4[_0x2d7b0f(0xb8d)](_0xec958[_0xffd678][-0x3a4+0x2c8*0xb+-0x1af3],_0x2d7b0f(0xafc)))continue;_0x35d567[_0x2d7b0f(0xa82)+'s']['0x'+_0xec958[_0xffd678][0x176f+-0x4*0x611+0xd5]['toStr'+_0x2d7b0f(0x30e)](-0x1007+0x1ff5+0x2*-0x7ef)]=_0x3448cb(_0x1b02de+_0xec958[_0xffd678][-0x6*0x2bc+0x1*-0x1def+0x2e57],_0x5d3ad4[_0x2d7b0f(0x826)]);}}var _0x235405=_0x5d3ad4[_0x2d7b0f(0x47c)](_0x3448cb,_0x1b02de+(-0x1c7a+0x17b+0x1b2b),_0x2d7b0f(0x441));if(_0x235405)_0x35d567[_0x2d7b0f(0x32a)+'a']='0x'+(_0x235405>>>0xcd*0x29+-0x2068+0x1*-0x6d)[_0x2d7b0f(0x89d)+_0x2d7b0f(0x30e)](0x1*-0x20d+0x1*-0x1e4d+0x206a);var _0x1fde13=_0x5d3ad4[_0x2d7b0f(0x3a0)](_0x318e53,_0x1b02de,-0x2*0xc5b+-0x19cf+0x32cd,0x1270+0x9a9*-0x2+-0x4*-0x39);if(_0x1fde13)_0x35d567[_0x2d7b0f(0x2c5)]=_0x1fde13;return _0x35d567;}return null;}var _0x49b9c8=_0xbd7aa9(0x7f2)+_0xbd7aa9(0x972)+'fov',_0x31f87f={'pitch':null,'yaw':null,'fov':0x5a,'known':![]};try{var _0x1af53c=localStorage[_0xbd7aa9(0x143)+'em'](_0x49b9c8);if(_0x1af53c)_0x31f87f[_0xbd7aa9(0xa0d)]=Math[_0xbd7aa9(0x67f)](0x1a*-0x12b+-0x3*0x829+0x1e9*0x1d,Math[_0xbd7aa9(0x135)](-0xa39*0x1+-0x90+0xae7*0x1,_0x5d3ad4[_0xbd7aa9(0x574)](parseFloat,_0x1af53c)||0x1*-0xaf1+-0x3f5*-0x1+0x1*0x756));}catch(_0x41919b){}function _0x1596ac(){var _0x56fcb3=_0xbd7aa9;try{localStorage['setIt'+'em'](_0x49b9c8,String(_0x31f87f[_0x56fcb3(0xa0d)]));}catch(_0x1e651c){}}var _0x1b3d74=_0x5d3ad4[_0xbd7aa9(0xcde)],_0x5ef2a2=![];try{if(_0x5d3ad4['JcXUS'](localStorage['getIt'+'em'](_0x1b3d74),null)){if('AYgxw'===_0x5d3ad4['SQTyt'])localStorage['remov'+_0xbd7aa9(0xb47)](_0x1b3d74),_0x5ef2a2=!![];else{if(_0x5d3ad4['uFaXO'](_0xe08b50['error'+'s'][_0xbd7aa9(0x711)+'h'],0x95*-0x3+0x23a1+-0x2*0x10ee))_0x440eda['error'+'s'][_0xbd7aa9(0x97d)]('mallo'+_0xbd7aa9(0x42f)+_0x5d3ad4[_0xbd7aa9(0xc4d)](_0x242635,_0x4b41e6&&_0x205685[_0xbd7aa9(0x200)+'ge']||_0x8dec64)[_0xbd7aa9(0xd2d)](0x10*0x6b+0x1*0x2d+0xfb*-0x7,0x19*0x151+-0x1f23*0x1+0x5b*-0x4));return-0x1bf8+-0x26*0x28+0x21e8;}}}catch(_0x3d7288){}var _0x1bd085=0x760+0x765+-0xe9d,_0x5f7fe7=0x1c7f*-0x1+-0x11cb*0x1+-0x2e66*-0x1,_0x1bd085=0x2*0xa96+-0xaca+0x77*-0x16,_0x5f7fe7=-0x43*-0x8b+0x2298+-0x179f*0x3,_0x569c9b=-0x2233+0x13*-0x35+-0x2*-0x1327,_0x5f33d2={'tried':0x0,'ok':![],'why':'','source':null,'camPtr':0x0,'tfPtr':0x0,'scratch':0x0,'fov':null,'quat':null,'pos':null,'basis':null,'errors':[],'applied':0x0};function _0x5f39b1(_0x119493){var _0x31de7e=_0xbd7aa9;if(_0x119493===undefined||_0x119493===null)return undefined;if(typeof _0x119493[_0x31de7e(0xa3c)]==='funct'+'ion'){if(_0x5d3ad4['ZTWpG']!==_0x5d3ad4['ZTWpG']){_0x58b570['sp']&&(_0x2b5533['sp']['textC'+_0x31de7e(0xda5)+'t']=_0x126e91['on']?_0x31de7e(0x209)+_0x31de7e(0xb99):'Speed'+_0x31de7e(0x879),_0x479e33['sp']['style'][_0x31de7e(0x166)+_0x31de7e(0xbda)]=_0x5d97ed['on']?_0x5102d3:_0x5d3ad4['CTqex'],_0x1eba69['sp'][_0x31de7e(0x219)]['color']=_0x39e13c['on']?_0x5d3ad4['ZtwyV']:_0x5d3ad4[_0x31de7e(0xa4a)]);if(_0x2cecb6['fx'])_0x3cb3ff['fx']['value']=_0x5d3ad4['yIiMF'](_0x212e14,_0x3452a4['facto'+'r']);if(_0x23c50a['fv'])_0x146d11['fv'][_0x31de7e(0x754)+'onten'+'t']=_0x5d3ad4['HVlin'](_0x2d2c8b['facto'+'r'][_0x31de7e(0xa57)+'ed'](-0x1c9d+0x127*0x1b+-0x27f),'x');}else try{return _0x119493[_0x31de7e(0xa3c)]();}catch(_0x43ae0f){}}if(_0x5d3ad4['YSISx'](typeof _0x119493,'objec'+'t'))return undefined;return _0x119493;}function _0x241b1a(_0x373e90,_0x3f6dce,_0x3ad0e7){var _0x13c123=_0xbd7aa9;if(_0x13c123(0x4af)!==_0x5d3ad4['eYnNK'])try{var _0x20c915=window[_0x13c123(0x72f)+_0x13c123(0x5a4)+_0x13c123(0x90b)]&&window[_0x13c123(0x72f)+_0x13c123(0x5a4)+_0x13c123(0x90b)]['Runti'+'me'],_0x1cc476=_0xaa707f||_0x20c915&&_0x20c915[_0x13c123(0xd9e)+'ns']&&_0x20c915[_0x13c123(0xd9e)+'ns'][_0x5d3ad4['lAIUc'](_0x20c915[_0x13c123(0xd9e)+'ns']['lengt'+'h'],-0x5f*0x9+0x2458+-0xb00*0x3)];if(!_0x1cc476||_0x5d3ad4[_0x13c123(0x62d)](typeof _0x1cc476['call'],_0x5d3ad4[_0x13c123(0x60d)]))return _0x5f33d2['error'+'s']['push'](_0x13c123(0x597)+'ugin.'+_0x13c123(0x4d3)),undefined;return _0x5f39b1(_0x1cc476['call'](_0x373e90,_0x3f6dce,_0x3ad0e7||[]));}catch(_0x1a04ca){if(_0x5d3ad4['yLINP'](_0x5f33d2['error'+'s']['lengt'+'h'],0x6a3*0x1+-0xf7a+-0x8dd*-0x1))_0x5f33d2['error'+'s'][_0x13c123(0x97d)](_0x5d3ad4[_0x13c123(0xc83)](_0x5d3ad4[_0x13c123(0xd65)](_0x5d3ad4['llunD'](_0x373e90,'.')+_0x3f6dce,':\x20'),String(_0x1a04ca&&_0x1a04ca[_0x13c123(0x200)+'ge']||_0x1a04ca)['slice'](0x63b+-0x9*0x31d+0x15ca,0x245f*-0x1+-0x251*-0x3+0x1dc6)));return undefined;}else{var _0x514761=_0x574196();if(_0x514761['basis'])return!![];var _0x473a82=_0x5d3ad4[_0x13c123(0x34d)](_0x26abb5);return!!(_0x473a82&&_0x9b0b35['ident'+_0x13c123(0xce5)]);}}function _0x377466(){var _0x109e78=_0xbd7aa9;if(_0x5f33d2['scrat'+'ch'])return _0x5f33d2['scrat'+'ch'];try{if(_0x109e78(0x8f0)!==_0x5d3ad4['rbFBw'])return![];else{var _0x1efc21=window[_0x109e78(0x72f)+_0x109e78(0x5a4)+_0x109e78(0x90b)]&&window[_0x109e78(0x72f)+_0x109e78(0x5a4)+'dkit'][_0x109e78(0x680)+'me'],_0x208510=_0xaa707f||_0x1efc21&&_0x1efc21[_0x109e78(0xd9e)+'ns']&&_0x1efc21['plugi'+'ns'][_0x1efc21['plugi'+'ns'][_0x109e78(0x711)+'h']-(-0x9*-0x25e+-0x26bd+0x1170)];if(!_0x208510||_0x5d3ad4[_0x109e78(0xbd3)](typeof _0x208510['mallo'+'c'],_0x109e78(0x880)+'ion'))return _0x5f33d2[_0x109e78(0x54c)+'s'][_0x109e78(0x97d)](_0x5d3ad4[_0x109e78(0x921)]),0x1d5d+-0x424*0x5+-0x8a9;var _0x313ac0=_0x5d3ad4[_0x109e78(0xcd6)](_0x5f39b1,_0x208510[_0x109e78(0x58f)+'c'](-0x108a+-0xd*0x28b+0x31b9*0x1));if(typeof _0x313ac0!==_0x109e78(0x4a5)+'r'||!(_0x313ac0>0x226a+-0x208e+-0x1dc))return _0x5d3ad4[_0x109e78(0xb34)]!==_0x5d3ad4[_0x109e78(0xab5)]?(_0x5f33d2[_0x109e78(0x54c)+'s']['push'](_0x109e78(0x58f)+'c\x20ret'+_0x109e78(0x3da)+'\x20'+_0x313ac0),0x210+0xd3*0x29+-0x89*0x43):_0x1399e4[_0x109e78(0x37d)+_0x109e78(0x636)+'tor'](_0x109e78(0x7a2)+_0x109e78(0xb0b)+_0x1ed1d9+'\x22]');_0x5f33d2['scrat'+'ch']=_0x313ac0;}}catch(_0x3aec83){if(_0x5d3ad4['ciknX'](_0x5f33d2['error'+'s'][_0x109e78(0x711)+'h'],-0xb*0x5f+-0x1c*-0x10d+-0x1*0x1951))_0x5f33d2[_0x109e78(0x54c)+'s']['push']('mallo'+'c:\x20'+String(_0x3aec83&&_0x3aec83[_0x109e78(0x200)+'ge']||_0x3aec83)[_0x109e78(0xd2d)](-0x1e2c+0x1374+0xab8,0x2542+-0x4aa*0x7+-0xda*0x5));return-0x1*-0x467+-0x1*0x2cc+-0x19b*0x1;}return _0x5f33d2[_0x109e78(0x85f)+'ch'];}function _0x34d5c1(_0x1475be){var _0x582995=_0xbd7aa9;if(_0x5d3ad4[_0x582995(0x4ae)]==='JqlOK'){var _0x26d49d=_0x1475be[0x139*0x1+0x1031+-0x1*0x116a],_0x24a318=_0x1475be[-0xc35*-0x1+-0x190e+-0x1d6*-0x7],_0x19eb3a=_0x1475be[0x7f*0x2e+0x2*-0x195+-0x3ee*0x5],_0x5639aa=_0x1475be[-0x1*0x13ab+-0xe21*0x2+0x2ff0],_0x35adbb=_0x5d3ad4['Ewmvt'](_0x26d49d,_0x26d49d),_0x48cc6e=_0x5d3ad4[_0x582995(0x7c6)](_0x24a318,_0x24a318),_0x43e505=_0x19eb3a*_0x19eb3a,_0x2e6c8b=_0x26d49d*_0x24a318,_0x51e552=_0x5d3ad4['kytGf'](_0x26d49d,_0x19eb3a),_0x11d568=_0x24a318*_0x19eb3a,_0x21bf2f=_0x5d3ad4[_0x582995(0x8de)](_0x5639aa,_0x26d49d),_0x58874f=_0x5d3ad4['zedSW'](_0x5639aa,_0x24a318),_0x55cf41=_0x5639aa*_0x19eb3a;return{'right':[0x23b5+0x19*0xce+0x595*-0xa-_0x5d3ad4[_0x582995(0x7c6)](0x260b*-0x1+-0x1696+0x3ca3,_0x48cc6e+_0x43e505),(-0x1*0x1b6e+0x10e3+0xa8d)*_0x5d3ad4[_0x582995(0x2b3)](_0x2e6c8b,_0x55cf41),_0x5d3ad4[_0x582995(0x7c6)](-0x1296+-0x3*0x9a3+-0x2f81*-0x1,_0x5d3ad4[_0x582995(0x5ab)](_0x51e552,_0x58874f))],'up':[_0x5d3ad4[_0x582995(0x690)](0x1*-0x82b+0x2f*0x23+0x1c0,_0x5d3ad4[_0x582995(0x2a4)](_0x2e6c8b,_0x55cf41)),_0x5d3ad4[_0x582995(0xcbc)](-0x259b+-0x19e2+0x3f7e,(-0x3*-0x292+0x1*0x60d+-0x1*0xdc1)*(_0x35adbb+_0x43e505)),(-0x128b+0xdda+0x1*0x4b3)*(_0x11d568+_0x21bf2f)],'fwd':[_0x5d3ad4[_0x582995(0xb49)](-0x1e03+-0x187c+-0x1*-0x3681,_0x51e552+_0x58874f),(-0x2149+0x477+0xc*0x267)*(_0x11d568-_0x21bf2f),_0x5d3ad4[_0x582995(0x144)](-0x577+0xd*0x26b+-0x187*0x11,(-0x15*-0x145+-0x193b+-0x16c)*(_0x35adbb+_0x48cc6e))]};}else return _0x4a2a61&&_0x5646c2[_0x582995(0x2d5)+'r']?_0xf00720['buffe'+'r']['byteL'+_0x582995(0x51c)]:0x1110+0x83*-0x47+-0x1345*-0x1;}function _0x3a0caa(){var _0x94d014=_0xbd7aa9,_0x4607ae=_0x5d3ad4[_0x94d014(0xc8d)][_0x94d014(0x823)]('|'),_0x4a6a27=-0x1728+-0x7ca+-0x2*-0xf79;while(!![]){switch(_0x4607ae[_0x4a6a27++]){case'0':var _0x36aeb4=0x1*-0x11e2+-0x1be2+0x2dc4;continue;case'1':_0x5d3ad4['zPcKg'](_0x241b1a,_0x94d014(0xa3d)+'form','get_r'+_0x94d014(0xafd)+'on',[_0x444b67,_0x538811]);continue;case'2':if(_0x5d3ad4['dQxok'](typeof _0x538811,_0x5d3ad4[_0x94d014(0x69c)])||!(_0x538811>0x1*0xa39+0x7*0x1d0+-0x45*0x55))return _0x5f33d2['ok']=![],_0x5f33d2[_0x94d014(0x1ee)]=-0x42b+-0x5*0x59b+0x2032,_0x5f33d2[_0x94d014(0x24d)]=_0x5d3ad4[_0x94d014(0x8b1)](_0x5d3ad4[_0x94d014(0x1f0)],_0x538811),_0x5f33d2;continue;case'3':var _0x2dc3ae=[_0x5d3ad4[_0x94d014(0xc93)](_0x3448cb,_0x444b67,'f32'),_0x5d3ad4['UlBSg'](_0x3448cb,_0x5d3ad4[_0x94d014(0xd05)](_0x444b67,-0x1*0xb74+0x1d7*-0xc+-0x10c6*-0x2),_0x5d3ad4[_0x94d014(0x826)]),_0x5d3ad4[_0x94d014(0x67b)](_0x3448cb,_0x444b67+(0xfaf*0x1+0x16f0+-0x2697),'f32'),_0x5d3ad4[_0x94d014(0x67b)](_0x3448cb,_0x444b67+(0x171d+0x22e+-0x193f),'f32')];continue;case'4':_0x36aeb4=Math['sqrt'](_0x36aeb4);continue;case'5':_0x5f33d2['camPt'+'r']=_0x217c3c;continue;case'6':_0x5f33d2[_0x94d014(0x8b0)+'e']=null;continue;case'7':var _0x538811=_0x241b1a(_0x5d3ad4[_0x94d014(0xa8c)],'get_t'+_0x94d014(0xd2a)+_0x94d014(0x122),[_0x217c3c]);continue;case'8':if(!_0x444b67)return _0x5f33d2['ok']=![],_0x5f33d2['why']=_0x5d3ad4['nnRXN'],_0x5f33d2;continue;case'9':if(_0x47275c)return _0x5f33d2[_0x94d014(0x4a8)]=_0x2dc3ae,_0x5f33d2[_0x94d014(0x98e)]=_0x34d5c1(_0x2dc3ae),_0x5f33d2['ok']=!![],_0x5f33d2[_0x94d014(0x24d)]='',_0x5f33d2[_0x94d014(0x8b0)+'e']=_0x94d014(0x32a)+_0x94d014(0xdac)+'nsfor'+'m',_0x5f33d2;continue;case'10':if(_0x5d3ad4[_0x94d014(0x39b)](_0x5f33d2[_0x94d014(0xa0d)],null))return _0x5f33d2['ok']=!![],_0x5f33d2[_0x94d014(0x8b0)+'e']=_0x5d3ad4[_0x94d014(0x7af)],_0x5f33d2[_0x94d014(0x24d)]=_0x5d3ad4[_0x94d014(0x150)](_0x5d3ad4['DlaSx'](_0x5d3ad4['ClRCV'],Math[_0x94d014(0xbda)](_0x36aeb4*(-0x1*-0x797+-0x1ce3+0xc9a*0x2))/(-0x266c+-0x15e*-0x15+0xf9*0xe)),_0x5d3ad4['fqnnY']),_0x5f33d2;continue;case'11':_0x5f33d2['why']=_0x94d014(0x9b8)+'ion\x20u'+_0x94d014(0xcf6)+_0x94d014(0x74b)+'q|='+Math[_0x94d014(0xbda)](_0x36aeb4*(-0x7de*-0x3+-0xa*-0x65+-0x17a4))/(-0x1809+-0x1d*-0x12d+-0x628)+(_0x94d014(0x348)+'\x20no\x20f'+'ov');continue;case'12':if(typeof _0x115008==='numbe'+'r'&&isFinite(_0x115008)&&_0x115008>0x1*0x1abf+-0x5d9*0x3+-0x933&&_0x5d3ad4[_0x94d014(0x78f)](_0x115008,-0x7cf+0x8*-0x294+0x1d22))_0x5f33d2['fov']=_0x115008;continue;case'13':_0x5d3ad4['zPcKg'](_0x241b1a,'Trans'+_0x94d014(0x52a),_0x94d014(0x961)+_0x94d014(0x560)+'on',[_0x444b67,_0x538811]);continue;case'14':var _0x47275c=isFinite(_0x36aeb4)&&Math['abs'](_0x36aeb4-(0x8*-0x281+0x1e7a+-0xa71))<0x13f0*0x1+-0xe05*-0x1+0x21f5*-0x1+0.02;continue;case'15':if(!_0x46fe19)return _0x5f33d2['ok']=![],_0x5f33d2[_0x94d014(0x24d)]=_0x5d3ad4[_0x94d014(0xa69)],_0x5f33d2;continue;case'16':if(_0x5a926a!==_0x46fe19)_0x5a926a=_0x46fe19;continue;case'17':var _0x115008=_0x5d3ad4[_0x94d014(0xbdc)](_0x241b1a,_0x94d014(0x174)+'a',_0x5d3ad4[_0x94d014(0xce2)],[_0x217c3c]);continue;case'18':_0x5f33d2['quat']=null;continue;case'19':if(_0x5d3ad4[_0x94d014(0x6bd)](typeof _0x217c3c,_0x5d3ad4['VvFiJ'])||!_0x5d3ad4[_0x94d014(0x448)](_0x217c3c,-0xc83*-0x2+0x1532+-0x2e38))return _0x5f33d2['ok']=![],_0x5f33d2['why']='Mouse'+'Look+'+'0x2c\x20'+_0x94d014(0xc61)+_0x94d014(0x3fd)+_0x94d014(0x9f6)+'t\x20ref'+_0x94d014(0xcfa)+'e',_0x5f33d2;continue;case'20':return _0x5f33d2;case'21':_0x5f33d2['ok']=![];continue;case'22':_0x5f33d2[_0x94d014(0x69b)+'ed']++;continue;case'23':_0x5f33d2['basis']=null;continue;case'24':_0x5f33d2[_0x94d014(0x1bc)]=typeof _0x38e63e===_0x94d014(0x4a5)+'r'&&_0x5d3ad4['vOQhn'](typeof _0x2548ba,'numbe'+'r')&&typeof _0x2666bb===_0x94d014(0x4a5)+'r'&&_0x5d3ad4['CXIZj'](isFinite,_0x38e63e)&&_0x5d3ad4['SasAK'](isFinite,_0x2548ba)&&isFinite(_0x2666bb)&&Math['abs'](_0x38e63e)<0x19*-0x102b+-0x26887+0x5835a&&_0x5d3ad4[_0x94d014(0x81e)](Math[_0x94d014(0x347)](_0x2548ba),0x25111+-0x399b*0x8+0x10267)&&Math['abs'](_0x2666bb)<0x2f321+0x17*0x1dee+0x41ce3*-0x1?[_0x38e63e,_0x2548ba,_0x2666bb]:null;continue;case'25':for(var _0x4f82d1=0x2541+-0xfb0+-0x1591;_0x5d3ad4[_0x94d014(0x316)](_0x4f82d1,-0x218d+-0x1fd2+0x4163);_0x4f82d1++)_0x36aeb4+=_0x5d3ad4['kMvhU'](_0x2dc3ae[_0x4f82d1],_0x2dc3ae[_0x4f82d1]);continue;case'26':var _0x46fe19=_0xb11111&&_0xb11111[_0x94d014(0xb92)+_0x94d014(0xb4e)]?parseInt(_0xb11111[_0x94d014(0xb92)+_0x94d014(0xb4e)],-0x1c1c+0x1*-0x262b+0x4257):_0x5a926a;continue;case'27':_0x5f33d2[_0x94d014(0x390)]++;continue;case'28':_0x5f33d2[_0x94d014(0x1ee)]=_0x538811;continue;case'29':var _0x217c3c=_0x5d3ad4['XLplK'](_0x3448cb,_0x46fe19+_0x569c9b,_0x5d3ad4['TcIwl']);continue;case'30':var _0x444b67=_0x5d3ad4[_0x94d014(0x60f)](_0x377466);continue;case'31':var _0x38e63e=_0x3448cb(_0x444b67,'f32'),_0x2548ba=_0x5d3ad4[_0x94d014(0x577)](_0x3448cb,_0x444b67+(-0x25c+-0x792+0x13*0x86),_0x5d3ad4[_0x94d014(0x826)]),_0x2666bb=_0x3448cb(_0x444b67+(0x158d+-0xe15+-0x770),_0x94d014(0xafc));continue;case'32':var _0xb11111=_0x5d3ad4['BBXHN'](_0x1f5010);continue;}break;}}function _0x8bd8f9(){var _0x13d758=_0xbd7aa9;if(_0x5f33d2[_0x13d758(0x390)])return _0x5f33d2;return _0x3a0caa();}var _0x1c2e73={'pitch':null,'yaw':null,'identified':![],'why':'no\x20Mo'+'useLo'+_0xbd7aa9(0x177)+'t','source':null,'yawGetter':null,'pitchGetter':null,'getters':[]};function _0x3b23f9(_0x6d7354){var _0x244056=_0xbd7aa9,_0x5abf54={'qiKBy':function(_0x793e70,_0x153a61){return _0x793e70+_0x153a61;},'gQXGR':_0x244056(0x91c)+_0x244056(0xa77)+_0x244056(0xa01),'RvIQA':_0x5d3ad4['iuJln']};if('FVGnJ'!==_0x5d3ad4['iTcwX']){var _0x10ef1c=null,_0x8fcae8=-0x115f*-0x1+-0x5e*-0x6+-0x1393;for(var _0x32b353 in _0x4986e0){var _0x2758a2=_0x4986e0[_0x32b353];if(!_0x2758a2[_0x244056(0xc0d)]||_0x2758a2[_0x244056(0xae3)]===null)continue;var _0x3abb84=_0x5d3ad4[_0x244056(0x2fc)](_0x3448cb,_0x5d3ad4['LBXDb'](_0x5a926a,_0x6d7354),_0x5d3ad4['WuOHK']);if(typeof _0x3abb84!==_0x5d3ad4[_0x244056(0x69c)])continue;Math[_0x244056(0x347)](_0x2758a2[_0x244056(0xae3)]-_0x3abb84)<-0x14e5*0x1+-0x3b9*0x5+0x2782+0.001&&_0x2758a2[_0x244056(0xc0d)]>_0x8fcae8&&(_0x10ef1c=_0x32b353,_0x8fcae8=_0x2758a2[_0x244056(0xc0d)]);}return _0x10ef1c;}else _0xf7fe35=_0x5abf54['qiKBy'](_0x5abf54[_0x244056(0x78b)]+_0x242589,'s'),_0x35e1e8=_0x5abf54[_0x244056(0xd29)];}function _0x495fd8(_0x36bdc1){var _0x4443de=_0xbd7aa9;if(_0x5d3ad4['WNXZe'](_0x5d3ad4[_0x4443de(0xb4b)],'QuABh')){var _0x4631f6=_0x1b43f1();return _0x4631f6?{'a':_0x4631f6['rawA'],'b':_0x4631f6['rawB'],'hits':_0x4631f6[_0x4443de(0xc0d)],'order':_0x4631f6['order']}:null;}else{var _0x3fb1f2=[],_0x34b34c=_0x17a0ac['Mouse'+_0x4443de(0xb4e)]||[];for(var _0x52295e in _0x4986e0){var _0x4056d3=_0x4986e0[_0x52295e];if(!_0x4056d3['hits'])continue;var _0x1f5e74=null;for(var _0x477c54=0x1*0xd65+0x129d+0x2*-0x1001;_0x477c54<_0x34b34c['lengt'+'h'];_0x477c54++){if(_0x5d3ad4[_0x4443de(0xca8)]===_0x5d3ad4['QpVwe']){if(_0x34b34c[_0x477c54][-0x30*0x6+0x1e89+-0x1d68*0x1]!==_0x4443de(0xafc))continue;var _0x5bf0c1=_0x5d3ad4[_0x4443de(0x44f)](_0x3448cb,_0x5d3ad4[_0x4443de(0x2ac)](_0x36bdc1,_0x34b34c[_0x477c54][0x24a7+0x4*-0x5ff+-0xcab]),_0x4443de(0xafc));if(typeof _0x5bf0c1==='numbe'+'r'&&Math[_0x4443de(0x347)](_0x5d3ad4[_0x4443de(0x861)](_0x5bf0c1,_0x4056d3[_0x4443de(0xae3)]))<-0x1670+-0x10fc*0x1+0x276c+0.001){_0x1f5e74=_0x5d3ad4[_0x4443de(0x647)]('0x',_0x34b34c[_0x477c54][-0xaab+0x1a84+-0xfd9]['toStr'+_0x4443de(0x30e)](0x108d+0x71f*-0x3+0x4e0*0x1));break;}}else{var _0x47b08c=_0x38a1d3('FPSco'+_0x4443de(0xd56)+'ler',_0x5b1a73[_0x1ee1dd[_0x18fe8f]]['ptr']);_0x47b08c['hits']=_0x9e33c0[_0x40b7b0[_0x29d952]][_0x4443de(0xc0d)],_0x47b08c[_0x4443de(0x317)+'al']=_0x4e29a3[_0x27b9fa[_0x61253d]][_0x4443de(0x41f)]===_0x62aa95,_0x213ba1['contr'+'oller'+'s']['push'](_0x47b08c);}}_0x3fb1f2[_0x4443de(0x97d)]({'name':_0x52295e,'value':_0x4056d3[_0x4443de(0xae3)],'matches':_0x1f5e74,'hits':_0x4056d3[_0x4443de(0xc0d)],'lo':_0x4056d3['lo'],'hi':_0x4056d3['hi'],'travel':_0x5d3ad4[_0x4443de(0xaa0)](_0x4056d3['lo'],null)?0x1d1e*-0x1+-0x6dc+0x23fa:_0x5d3ad4['tzaEV'](Math['round']((_0x4056d3['hi']-_0x4056d3['lo'])*(0x291*0x3+0x7*0x33a+-0x1de5)),-0xe3*-0x19+-0x11d1*0x1+-0x3f6),'jump':Math['round'](_0x4056d3['jump']*(-0x3*-0xb2+0x15*-0x21+0x103*0x1))/(0x10a6+0x4f7+0x1539*-0x1),'set':_0x4056d3['setHi'+'ts']?_0x4056d3['setLa'+'st']:null});}return _0x3fb1f2;}}function _0x455117(){var _0x16985e=_0xbd7aa9,_0x55d584={'QTDTc':function(_0x3810d1,_0x27b4e0){return _0x3810d1===_0x27b4e0;},'hkLvZ':function(_0x3d6483,_0x13c027){return _0x3d6483||_0x13c027;},'xEajk':function(_0x160d4c,_0x361f23,_0x1ec9b0){return _0x5d3ad4['fMKvU'](_0x160d4c,_0x361f23,_0x1ec9b0);},'QCEVK':function(_0x40e50b,_0x12269f){return _0x40e50b+_0x12269f;},'DekwL':'i32','ecuQl':function(_0x4c57dd,_0x42fe36,_0xe9862d){return _0x4c57dd(_0x42fe36,_0xe9862d);},'wKmPI':function(_0x32fad7,_0x25a27b){var _0x25b478=_0x4565;return _0x5d3ad4[_0x25b478(0x3f2)](_0x32fad7,_0x25a27b);},'ynTzD':_0x5d3ad4['mFSvG'],'bddfc':function(_0x50d4d0,_0x54467f){return _0x50d4d0!==_0x54467f;},'lbUdP':function(_0x3b6e7b,_0x27d8ab){return _0x3b6e7b&_0x27d8ab;},'ikxEz':function(_0x58ba4e,_0x183261){var _0x57eaaf=_0x4565;return _0x5d3ad4[_0x57eaaf(0x49d)](_0x58ba4e,_0x183261);},'ReOHM':_0x16985e(0x3dc),'pRtDU':_0x5d3ad4[_0x16985e(0x826)]},_0x408ccc=_0x1f5010();if(!_0x408ccc||!_0x408ccc[_0x16985e(0xb92)+_0x16985e(0xb4e)])return _0x1c2e73[_0x16985e(0x85a)+'ified']=![],_0x1c2e73[_0x16985e(0x24d)]=_0x16985e(0xc74)+'useLo'+_0x16985e(0x177)+'t',null;var _0x1d35ea=parseInt(_0x408ccc[_0x16985e(0xb92)+_0x16985e(0xb4e)],0x1*0x219d+-0x56e+-0x1c1f);if(_0x5d3ad4[_0x16985e(0x6f9)](_0x5a926a,_0x1d35ea))_0x5a926a=_0x1d35ea;_0x1c2e73[_0x16985e(0x437)+'rs']=_0x495fd8(_0x1d35ea);var _0x2f95a3=_0x40c025(),_0x484f08=-0x218d*0x1+0x1321*-0x2+0x11f4*0x4,_0x579a21=-0x20f0+-0xd22+0x2*0x1736;function _0x298b4f(_0x1611b2){return _0x55d584['QTDTc'](_0x1611b2['lo'],null)||_0x1611b2['hi']===null?-0x1b1+0x1*-0x67b+-0x2*-0x416:_0x1611b2['hi']-_0x1611b2['lo'];}var _0x3dba37=null;for(var _0x50b91b in _0x4986e0){var _0x378b92=_0x4986e0[_0x50b91b];if(!_0x378b92['hits']||_0x378b92[_0x16985e(0xae3)]===null)continue;if(_0x298b4f(_0x378b92)<_0x484f08)continue;if(_0x5d3ad4['OFhgD'](_0x378b92['jump'],_0x579a21))continue;var _0x592374=_0x5d3ad4['UlBSg'](_0x3448cb,_0x5a926a+_0x1bd085,_0x5d3ad4[_0x16985e(0x826)]);if(_0x5d3ad4[_0x16985e(0x9a6)](typeof _0x592374,_0x16985e(0x4a5)+'r')||Math['abs'](_0x378b92['last']-_0x592374)>=-0xeb+0x766*-0x2+-0x53d*-0x3+0.001)continue;if(!_0x3dba37||_0x5d3ad4['XyxEF'](_0x378b92['hits'],_0x4986e0[_0x3dba37][_0x16985e(0xc0d)]))_0x3dba37=_0x50b91b;}var _0x561a97=null;for(var _0x39abfa in _0x4986e0){if(_0x39abfa===_0x3dba37)continue;var _0x189c5e=_0x4986e0[_0x39abfa];if(!_0x189c5e[_0x16985e(0xc0d)]||_0x189c5e['last']===null)continue;if(_0x298b4f(_0x189c5e)<_0x484f08)continue;if(_0x189c5e[_0x16985e(0x902)]>_0x579a21)continue;if(_0x5d3ad4['ukTFc'](_0x189c5e['last'],-(0x53e*-0x4+0x1*0x24e3+-0xf91))&&_0x189c5e[_0x16985e(0xae3)]<=0x1*-0x1844+-0x844*0x4+0x45*0xd6){_0x561a97=_0x39abfa;break;}}_0x1c2e73[_0x16985e(0x204)+_0x16985e(0x96f)]=_0x3dba37,_0x1c2e73[_0x16985e(0xc6b)+'Gette'+'r']=_0x561a97;var _0x452d5c,_0x217afd;if(_0x2f95a3&&_0x5d3ad4[_0x16985e(0xd01)](_0x2f95a3['pitch'],null))_0x217afd=_0x2f95a3[_0x16985e(0xc6b)],_0x452d5c=_0x2f95a3[_0x16985e(0x4a2)],_0x1c2e73[_0x16985e(0x8b0)+'e']=_0x5d3ad4[_0x16985e(0xc25)](_0x5d3ad4[_0x16985e(0x9cd)]+_0x2f95a3['order'],')');else _0x3dba37?(_0x452d5c=_0x4986e0[_0x3dba37]['last'],_0x1c2e73['sourc'+'e']=_0x5d3ad4[_0x16985e(0xc32)],_0x217afd=_0x561a97?_0x4986e0[_0x561a97][_0x16985e(0xae3)]:_0x3448cb(_0x1d35ea+_0x5f7fe7,_0x16985e(0xafc))):(_0x452d5c=_0x5d3ad4[_0x16985e(0x2fc)](_0x3448cb,_0x1d35ea+_0x1bd085,_0x16985e(0xafc)),_0x217afd=_0x5d3ad4[_0x16985e(0x7db)](_0x3448cb,_0x1d35ea+_0x5f7fe7,_0x16985e(0xafc)),_0x1c2e73['sourc'+'e']=_0x16985e(0x514)+_0x16985e(0x1df)+_0x16985e(0xc89)+'ss)');_0x1c2e73[_0x16985e(0xc37)+'w']=_0x452d5c,_0x1c2e73[_0x16985e(0x428)+'tch']=_0x217afd;if(typeof _0x452d5c!==_0x16985e(0x4a5)+'r'||!isFinite(_0x452d5c)||_0x5d3ad4[_0x16985e(0xd34)](typeof _0x217afd,_0x16985e(0x4a5)+'r')||!isFinite(_0x217afd)){if(_0x16985e(0xcc0)!==_0x16985e(0xd4d))return _0x1c2e73[_0x16985e(0x85a)+_0x16985e(0xce5)]=![],_0x1c2e73[_0x16985e(0x24d)]=_0x16985e(0x806)+_0x16985e(0xa82)+'s\x20unr'+_0x16985e(0x168)+'le',null;else{var _0x1f57ce=(_0x16985e(0x263)+_0x16985e(0x7c7)+_0x16985e(0x307)+_0x16985e(0x96d)+'|12|0'+'|2|13'+_0x16985e(0x56e))[_0x16985e(0x823)]('|'),_0x1d1c8e=-0x1c16+-0xfba+0x2bd0;while(!![]){switch(_0x1f57ce[_0x1d1c8e++]){case'0':_0x5d7a78=_0x55d584[_0x16985e(0x420)](_0x5d7a78,0x884*0x4+0x136b*-0x1+0xea5*-0x1)&-0x1*-0xf86+-0xdb3+-0x1d2;continue;case'1':var _0x342678=_0x55d584['xEajk'](_0x253099,_0x55d584['QCEVK'](_0x13ef91,_0xf1cd8c)+_0x4b4046[_0x16985e(0xcba)+'n'],_0x55d584[_0x16985e(0xc8b)]);continue;case'2':_0x397f8f&=-0x9fe+0xe3e+-0x43f;continue;case'3':var _0x5d7a78=_0x55d584[_0x16985e(0x593)](_0xac8589,_0x55d584[_0x16985e(0x1be)](_0x373fd5+_0x5069d9,_0x4b4046[_0x16985e(0xbec)+'d']),'u8');continue;case'4':if(_0x3a0946===_0x16985e(0x3dc))_0x4b73c=_0x25b0e3(_0x55d584[_0x16985e(0xd35)](_0x342678,_0x159200));else{if(_0x43621e===_0x55d584[_0x16985e(0xaf0)])_0x4b73c=_0x342678^_0x159200|-0x208a+-0x1*0xf71+-0x1*-0x2ffb;else _0x4b73c=_0x55d584['bddfc'](_0x55d584[_0x16985e(0x3f7)](_0x342678^_0x159200,0xe4d+0x1b88+0x1*-0x28d6),0x4*-0x82+-0xada+0xce2*0x1)?0x239d+-0x74c+-0x1c50:0x1*0x2287+-0x79d+-0x1aea;}continue;case'5':var _0x397f8f=_0x38788d(_0x298a40+_0x1c46ec+_0x4b4046['activ'+'e'],'u8');continue;case'6':return{'real':_0x4b73c,'fake':_0x21c799,'act':_0x397f8f,'init':_0x5d7a78,'key':_0x159200,'hidden':_0x342678};case'7':var _0x159200=_0x4c2004(_0x14ce8b+_0x50af16+_0x4b4046[_0x16985e(0x66f)],'u8');continue;case'8':if(_0x159200===_0x35305d||_0x342678===_0x55df75||_0x21c799===_0x59707b||_0x397f8f===_0x54c6ee)return null;continue;case'9':var _0x21c799=_0x5b7412(_0x55d584[_0x16985e(0x6a7)](_0x11d821,_0x2f94f7)+_0x4b4046[_0x16985e(0x95b)],_0x55d584['QTDTc'](_0x16614e,_0x55d584['ReOHM'])?_0x55d584['pRtDU']:_0x55d584['QTDTc'](_0x1e6c4d,_0x16985e(0x5a0))?_0x16985e(0xcd4):'u8');continue;case'10':_0x159200&=-0x27f+0x129a+-0x1*0xf1c;continue;case'11':var _0x4b4046=_0x179617[_0x4205cd];continue;case'12':_0x342678|=-0xc51+0xc5+-0x2*-0x5c6;continue;case'13':var _0x4b73c;continue;case'14':if(!_0x4b4046)return null;continue;}break;}}}if(_0x217afd<-(0x2104+0x242+-0x22ec)||_0x217afd>-0x9*0x31d+-0x2393+0x3ff2)return _0x5d3ad4[_0x16985e(0xb1c)](_0x16985e(0x130),_0x5d3ad4['vzUDu'])?(_0x1c2e73['ident'+_0x16985e(0xce5)]=![],_0x1c2e73[_0x16985e(0x24d)]=_0x5d3ad4[_0x16985e(0x3f9)](_0x16985e(0xc6b)+'\x20'+Math[_0x16985e(0xbda)](_0x217afd),_0x16985e(0x702)+_0x16985e(0x2eb)+'nge'),null):(_0x5626b9['faile'+'d']++,_0x4dea08['lastE'+_0x16985e(0x234)]=_0x67cddc['lastE'+_0x16985e(0x234)]||'no\x20HE'+'APU8\x20'+_0x16985e(0xbbe)+_0x16985e(0x56a)+'stanc'+'e\x20not'+'\x20reac'+_0x16985e(0xb8e)+_0x16985e(0xc08)+_0x16985e(0x680)+'me.re'+_0x16985e(0xb75)+_0x16985e(0x4c4)+_0x16985e(0xbdf)+_0x16985e(0xb88)+_0x16985e(0x342)+'\x20glob'+'al',_0x364f3b);return _0x1c2e73[_0x16985e(0x24d)]='',_0x1c2e73[_0x16985e(0x85a)+_0x16985e(0xce5)]=!![],_0x1c2e73[_0x16985e(0xc6b)]=_0x217afd,_0x1c2e73['yaw']=_0x452d5c,_0x1c2e73;}function _0x3ea8d1(_0x22b7a6,_0x5e46a1,_0x14638e,_0x52699b){var _0x23a5bf=_0xbd7aa9,_0x423e84=_0x5d3ad4['WdBQF'](_0x8bd8f9),_0x196fea=null,_0xd2dcf=_0x22b7a6,_0x1cb19c=_0x31f87f[_0x23a5bf(0xa0d)];if(_0x423e84[_0x23a5bf(0x98e)]){if(_0x5d3ad4[_0x23a5bf(0x38a)]===_0x23a5bf(0x199)){var _0x26bd73=_0x5293f4[_0x22404d][_0x23a5bf(0x2b1)+'s'][_0x23a5bf(0x8ca)](',')+'\x20->\x20'+(_0x4164f1[_0x380b2e][_0x23a5bf(0xb6b)+'nType']||_0x5d3ad4[_0x23a5bf(0x708)]);_0x1feba3[_0x26bd73]=_0x5d3ad4[_0x23a5bf(0x3fb)](_0x264b12[_0x26bd73]||-0x828+-0x1*-0x7fb+-0x9*-0x5,-0x6b1*0x3+0x2336*0x1+0x791*-0x2);}else{_0x196fea=_0x423e84[_0x23a5bf(0x98e)];if(_0x423e84[_0x23a5bf(0x1bc)])_0xd2dcf=_0x423e84[_0x23a5bf(0x1bc)];if(_0x5d3ad4[_0x23a5bf(0xb8d)](_0x423e84[_0x23a5bf(0xa0d)],null))_0x1cb19c=_0x423e84[_0x23a5bf(0xa0d)];}}var _0x4795a4,_0x4e01ed,_0x55ac84,_0x41ddfd,_0x1a0bf3,_0x220562,_0x295548,_0x319d1d,_0x307b4f;if(_0x196fea){var _0x43ba94=_0x5d3ad4['WbImV'][_0x23a5bf(0x823)]('|'),_0x4506e5=-0x3*0x73+-0xa3d*0x1+-0x5cb*-0x2;while(!![]){switch(_0x43ba94[_0x4506e5++]){case'0':_0x319d1d=_0x196fea['up'][0x16af+-0x4af+0x11*-0x10f];continue;case'1':_0x55ac84=_0x196fea['fwd'][-0x1bad+0x5b*0x6d+-0x588*0x2];continue;case'2':_0x4795a4=_0x196fea['fwd'][0xb*0x291+-0x24a6+0x86b];continue;case'3':_0x41ddfd=_0x196fea[_0x23a5bf(0x8b3)][0x2*0x78b+-0x11e1+-0x5*-0x8f];continue;case'4':_0x307b4f=_0x196fea['up'][-0xc2b+0x141d+0x1*-0x7f0];continue;case'5':_0x1a0bf3=_0x196fea[_0x23a5bf(0x8b3)][-0x130d*0x2+-0x75c+0x2d77];continue;case'6':_0x220562=_0x196fea['right'][-0x796+0x18e6+-0x114e];continue;case'7':_0x295548=_0x196fea['up'][0xc*-0x9+-0x22ac+0x1*0x2318];continue;case'8':_0x4e01ed=_0x196fea[_0x23a5bf(0x4e9)][-0x6e2+0x2eb+-0x1*-0x3f8];continue;}break;}}else{var _0x4e061d=(_0x23a5bf(0x1dc)+'6|5|1'+_0x23a5bf(0xd69)+_0x23a5bf(0x81d)+_0x23a5bf(0x5e3)+_0x23a5bf(0x540))[_0x23a5bf(0x823)]('|'),_0x637827=0x359*0x1+-0x1e00+0x1aa7;while(!![]){switch(_0x4e061d[_0x637827++]){case'0':_0x307b4f=_0x5d3ad4[_0x23a5bf(0x861)](_0x4795a4*_0x1a0bf3,_0x5d3ad4[_0x23a5bf(0xcc8)](_0x4e01ed,_0x41ddfd));continue;case'1':_0x55ac84=_0x5d3ad4['Ewmvt'](Math[_0x23a5bf(0xcae)](_0x179a1f),_0x534780);continue;case'2':if(!_0x4a4ed4)return null;continue;case'3':_0x4e01ed=-Math[_0x23a5bf(0xbae)](_0x16e15d);continue;case'4':_0x295548=_0x5d3ad4[_0x23a5bf(0x85e)](_0x4e01ed*_0x220562,_0x55ac84*_0x1a0bf3);continue;case'5':var _0x534780=Math[_0x23a5bf(0xcae)](_0x16e15d);continue;case'6':var _0x16e15d=_0x4a4ed4[_0x23a5bf(0xc6b)]*Math['PI']/(-0x2*-0x28d+0x2269+-0x26cf),_0x179a1f=_0x4a4ed4['yaw']*Math['PI']/(-0x1*-0x2533+-0x1a9*0x10+-0x9ef);continue;case'7':_0x319d1d=_0x55ac84*_0x41ddfd-_0x4795a4*_0x220562;continue;case'8':_0x41ddfd=_0x55ac84;continue;case'9':_0x1a0bf3=-0x26f1+-0xbb2*-0x3+-0x149*-0x3;continue;case'10':var _0x4a4ed4=_0x5d3ad4[_0x23a5bf(0x290)](_0x455117);continue;case'11':_0x220562=-_0x4795a4;continue;case'12':_0x4795a4=Math['sin'](_0x179a1f)*_0x534780;continue;}break;}}var _0xe821bc=_0x5e46a1[0x9d3*-0x1+0x231b+-0x2*0xca4]-_0xd2dcf[0x1ceb+-0x1693*0x1+0x38*-0x1d],_0x215e34=_0x5e46a1[-0x2d*-0x7f+0x44+-0x33a*0x7]-_0xd2dcf[-0x1d3*-0x8+-0x482*-0x1+0x1*-0x1319],_0x5cc63b=_0x5e46a1[-0x107e*-0x1+-0x1*-0xd6f+-0x1deb]-_0xd2dcf[0xb3b+-0x2092+0x1559],_0x40931c=_0xe821bc*_0x4795a4+_0x215e34*_0x4e01ed+_0x5cc63b*_0x55ac84;if(_0x40931c<=-0x2382+-0x1f3*0xb+0x38f3+0.05)return null;var _0x230dce=_0x5d3ad4[_0x23a5bf(0x71f)](_0xe821bc,_0x41ddfd)+_0x5d3ad4[_0x23a5bf(0x690)](_0x215e34,_0x1a0bf3)+_0x5d3ad4['ptqBa'](_0x5cc63b,_0x220562),_0x299be4=_0x5d3ad4[_0x23a5bf(0x928)](_0x5d3ad4['GJjWt'](_0x5d3ad4[_0x23a5bf(0x690)](_0xe821bc,_0x295548),_0x215e34*_0x319d1d),_0x5cc63b*_0x307b4f),_0x232363=_0x5d3ad4['GfgnU'](_0x14638e,_0x52699b),_0x40f2b1=_0x1cb19c*Math['PI']/(0x174+0xd*-0x197+-0x1*-0x13eb),_0x465735=Math[_0x23a5bf(0xa47)](_0x40f2b1/(0x79*0x4f+-0xda7+-0x17ae)),_0x298e64=_0x230dce/_0x40931c/_0x5d3ad4['zedSW'](_0x465735,_0x232363),_0x57be9e=_0x5d3ad4['ruXRR'](_0x5d3ad4['ClIVP'](_0x299be4,_0x40931c),_0x465735);if(_0x298e64<-(-0x6f2+-0x8e5+0xfd8+0.6000000000000001)||_0x5d3ad4[_0x23a5bf(0x762)](_0x298e64,0x7*-0x494+0x1ad0+0x53d*0x1+0.6000000000000001)||_0x57be9e<-(0x1ef0+-0x244b+0x55c+0.6000000000000001)||_0x5d3ad4['JaXiE'](_0x57be9e,0x12a*0x7+0xd*-0x1a0+0xcfb+0.6000000000000001))return null;return{'x':(_0x298e64*(0x20a4+-0x42e+-0x2*0xe3b+0.5)+(0xedd+0x1d48+0x1*-0x2c25+0.5))*_0x14638e,'y':(0x1489+-0x3*-0x53b+0x243a*-0x1+0.5-_0x57be9e*(-0x434+-0x6aa*0x1+0x1a*0x6b+0.5))*_0x52699b,'z':_0x40931c};}var _0xfe887c={'open':![],'cat':_0xbd7aa9(0x3fa)+'t','built':![],'root':null,'cols':null,'head':null,'sub':null,'syncs':[],'pos':null},_0x1a1906=_0xbd7aa9(0x7f2)+'a-sw-'+'menu-'+_0xbd7aa9(0x1bc),_0x8071f9=null,_0x370830=[{'id':_0xbd7aa9(0x3fa)+'t','label':_0x5d3ad4[_0xbd7aa9(0x65e)]},{'id':_0x5d3ad4['pYNOC'],'label':'VIS'},{'id':_0xbd7aa9(0x821)+'s','label':_0x5d3ad4[_0xbd7aa9(0xb83)]},{'id':_0x5d3ad4['hYGmQ'],'label':_0xbd7aa9(0x2fa)}],_0xac61de=_0x5d3ad4[_0xbd7aa9(0x425)](_0x5d3ad4[_0xbd7aa9(0x699)](_0x5d3ad4['DJxzb'](_0x5d3ad4['XbjjN'](_0x5d3ad4['bcxvw'](_0x5d3ad4['RHRGF'](_0x5d3ad4[_0xbd7aa9(0x51f)](_0x5d3ad4['XbjjN'](_0x5d3ad4[_0xbd7aa9(0x778)](_0x5d3ad4['XMvzx'](_0x5d3ad4['QuMWl'](_0x5d3ad4[_0xbd7aa9(0x500)](_0x5d3ad4['kyXJw'](_0x5d3ad4[_0xbd7aa9(0x4e0)](_0x5d3ad4['kHgmR'](_0x5d3ad4[_0xbd7aa9(0x868)](_0x5d3ad4['nCkFO'](_0x5d3ad4[_0xbd7aa9(0xbef)](_0x5d3ad4['uaPNc'](_0x5d3ad4['flbIl'](_0x5d3ad4[_0xbd7aa9(0x74f)](_0x5d3ad4[_0xbd7aa9(0x398)](_0x5d3ad4[_0xbd7aa9(0x699)](_0x5d3ad4[_0xbd7aa9(0x87c)]('#saku'+'ra-me'+_0xbd7aa9(0x9db)+_0xbd7aa9(0xa2c)+_0xbd7aa9(0x2b7)+_0xbd7aa9(0x94d)+('#saku'+'ra-me'+_0xbd7aa9(0x9db)+'ot.mn'+'-pane'+_0xbd7aa9(0x3b5)+'ition'+_0xbd7aa9(0x1d2)+'d;rig'+'ht:24'+'px;bo'+'ttom:'+'24px;'+'width'+':min('+_0xbd7aa9(0xaba)+_0xbd7aa9(0xa41)+'(100v'+_0xbd7aa9(0x457)+_0xbd7aa9(0xdab)+';max-'+_0xbd7aa9(0xc1d)+'t:min'+'(500p'+_0xbd7aa9(0x25b)+_0xbd7aa9(0xc31)+'vh\x20-\x20'+'48px)'+');')+('displ'+_0xbd7aa9(0x27b)+'ex;ga'+_0xbd7aa9(0x92a)+_0xbd7aa9(0x6be)+_0xbd7aa9(0x88b)+_0xbd7aa9(0x99a)+'borde'+_0xbd7aa9(0x21e)+'ius:2'+'2px;p'+_0xbd7aa9(0x14a)+_0xbd7aa9(0xcd5)+'nts:a'+_0xbd7aa9(0xa94)+_0xbd7aa9(0xbb5)+_0xbd7aa9(0xc40)+'74836'+'47;')+_0x5d3ad4[_0xbd7aa9(0x460)]+_0x5d3ad4['sJWuh']+(_0xbd7aa9(0x7f0)+_0xbd7aa9(0x17f)+'trans'+_0xbd7aa9(0x584)+_0xbd7aa9(0x50f)+_0xbd7aa9(0x49f)+_0xbd7aa9(0xa7e)+_0xbd7aa9(0x6ef)+'nter-'+'event'+_0xbd7aa9(0x415)+'e;tra'+'nsiti'+_0xbd7aa9(0x68b)+_0xbd7aa9(0xd9c)+_0xbd7aa9(0x81c)+_0xbd7aa9(0xa64)+_0xbd7aa9(0xa27)+'sform'+_0xbd7aa9(0x4ee)+'\x20cubi'+_0xbd7aa9(0x296)+_0xbd7aa9(0xb05)+'22,1,'+_0xbd7aa9(0x502)+');')+('color'+':#f6e'+_0xbd7aa9(0x8e1)+_0xbd7aa9(0x8b2)+'ize:1'+_0xbd7aa9(0x6ea)+_0xbd7aa9(0x276)+'amily'+_0xbd7aa9(0x975)+_0xbd7aa9(0xc23)+'Segoe'+_0xbd7aa9(0x3ee)+_0xbd7aa9(0x8be)+_0xbd7aa9(0x6d4)+'sans-'+'serif'+';}'),_0xbd7aa9(0x62b)+'ra-me'+'nu-ro'+_0xbd7aa9(0x998)+_0xbd7aa9(0xba3)+'l.sho'+_0xbd7aa9(0xaea)+_0xbd7aa9(0xd9c)+_0xbd7aa9(0xb3d)+_0xbd7aa9(0x79f)+_0xbd7aa9(0x31d)+_0xbd7aa9(0x1a3)+_0xbd7aa9(0x675)+_0xbd7aa9(0x27f)+'ts:au'+'to;}')+_0x5d3ad4['dGYET']+(_0xbd7aa9(0x8c6)+_0xbd7aa9(0x21e)+_0xbd7aa9(0x4d7)+'6px;b'+'ackgr'+'ound:'+_0xbd7aa9(0x8a0)+_0xbd7aa9(0xbea)+_0xbd7aa9(0xd72)+_0xbd7aa9(0x558)+_0xbd7aa9(0x7f5)+_0xbd7aa9(0x85c)+_0xbd7aa9(0x756)+_0xbd7aa9(0x828)+'0\x200\x200'+'\x201px\x20'+_0xbd7aa9(0x8a0)+_0xbd7aa9(0xbea)+_0xbd7aa9(0xd72)+_0xbd7aa9(0x6ff)+');}'),_0x5d3ad4[_0xbd7aa9(0x78e)])+('.mn-l'+'ogo-s'+_0xbd7aa9(0xbb8)+_0xbd7aa9(0x431)+'5px;h'+'eight'+_0xbd7aa9(0xb5f)+_0xbd7aa9(0x9f1)+'flow:'+'visib'+'le;fi'+'lter:'+'drop-'+_0xbd7aa9(0xcdb)+_0xbd7aa9(0x223)+_0xbd7aa9(0x1ad)+'rgba('+'255,1'+_0xbd7aa9(0x149)+_0xbd7aa9(0x39d)+');}')+(_0xbd7aa9(0x181)+_0xbd7aa9(0xaa9)+_0xbd7aa9(0x7c8)+_0xbd7aa9(0x8b5)+_0xbd7aa9(0x7a3)+'n-ite'+'ms:ce'+_0xbd7aa9(0x463)+_0xbd7aa9(0xad5)+'fy-co'+_0xbd7aa9(0xa58)+_0xbd7aa9(0x5ad)+_0xbd7aa9(0x8bf)+_0xbd7aa9(0x497)+_0xbd7aa9(0x5c0)+'eight'+_0xbd7aa9(0x8f6)+_0xbd7aa9(0x71a)+_0xbd7aa9(0x1f1)+'borde'+_0xbd7aa9(0x21e)+_0xbd7aa9(0x4d7)+_0xbd7aa9(0x39c))+('backg'+_0xbd7aa9(0xbda)+_0xbd7aa9(0x4ef)+'spare'+'nt;co'+_0xbd7aa9(0xaa2)+_0xbd7aa9(0xa9a)+'46,23'+'8,242'+_0xbd7aa9(0x7dd)+_0xbd7aa9(0xd6f)+'r:poi'+_0xbd7aa9(0x463)+'font-'+_0xbd7aa9(0x942)+_0xbd7aa9(0x99a)+_0xbd7aa9(0x7f1)+_0xbd7aa9(0x71d)+'t:700'+';font'+_0xbd7aa9(0x9b9)+'ly:in'+_0xbd7aa9(0x5e5)+';}')+(_0xbd7aa9(0x181)+'ab:ho'+_0xbd7aa9(0x82f)+_0xbd7aa9(0xcd8)+'rgba('+'246,2'+'38,24'+_0xbd7aa9(0x77f)+';}'),'.mn-t'+'ab.ac'+'tive{'+'color'+':#ff6'+'b9d;b'+_0xbd7aa9(0x47f)+_0xbd7aa9(0x54e)+'rgba('+_0xbd7aa9(0xccf)+_0xbd7aa9(0x149)+_0xbd7aa9(0x847)+';}')+_0x5d3ad4['IPSgf']+('.mn-t'+'op{di'+_0xbd7aa9(0x7c8)+_0xbd7aa9(0x8b5)+_0xbd7aa9(0x7a3)+'n-ite'+_0xbd7aa9(0x586)+'nter;'+_0xbd7aa9(0x3ea)+'2px;p'+_0xbd7aa9(0xd55)+_0xbd7aa9(0x422)+'\x206px\x20'+'12px;'+'user-'+_0xbd7aa9(0x381)+_0xbd7aa9(0xa05)+_0xbd7aa9(0x6fe))+(_0xbd7aa9(0x181)+'itles'+'{flex'+_0xbd7aa9(0xb03)+_0xbd7aa9(0x54a)+'th:0;'+'}')+(_0xbd7aa9(0x98c)+_0xbd7aa9(0xb3e)+_0xbd7aa9(0x5d8)+_0xbd7aa9(0x60b)+_0xbd7aa9(0xa31)+'-weig'+_0xbd7aa9(0x91b)+_0xbd7aa9(0x2b0))+(_0xbd7aa9(0xaf2)+_0xbd7aa9(0x246)+_0xbd7aa9(0xbab)+'ze:11'+_0xbd7aa9(0x49a)+_0xbd7aa9(0xd9c)+_0xbd7aa9(0xa75)),_0xbd7aa9(0x52f)+_0xbd7aa9(0xd49)+_0xbd7aa9(0x8e8)+_0xbd7aa9(0x2e4)+'id;pl'+'ace-i'+'tems:'+'cente'+_0xbd7aa9(0x95d)+_0xbd7aa9(0x2d8)+_0xbd7aa9(0x345)+'ight:'+_0xbd7aa9(0x643)+_0xbd7aa9(0x8c6)+_0xbd7aa9(0x533)+_0xbd7aa9(0xb9f)+_0xbd7aa9(0xc03)+_0xbd7aa9(0x9c7)+_0xbd7aa9(0xa46)+_0xbd7aa9(0x76d)+'nd:tr'+_0xbd7aa9(0x5fa)+'rent;')+(_0xbd7aa9(0xd11)+':inhe'+_0xbd7aa9(0xc6d)+_0xbd7aa9(0x494)+'y:.45'+_0xbd7aa9(0x2ef)+_0xbd7aa9(0x76e)+_0xbd7aa9(0x675)+';}'),_0xbd7aa9(0x52f)+_0xbd7aa9(0xc44)+_0xbd7aa9(0x337)+'{opac'+_0xbd7aa9(0x899)+_0xbd7aa9(0x1ed)+_0xbd7aa9(0xb9b)+_0xbd7aa9(0xd63)+_0xbd7aa9(0x5fc)+_0xbd7aa9(0x757)+_0xbd7aa9(0x142)+'05);}'),_0xbd7aa9(0x52f)+'lose\x20'+_0xbd7aa9(0xbb7)+'idth:'+'14px;'+_0xbd7aa9(0xc1d)+_0xbd7aa9(0xcb4)+'x;fil'+_0xbd7aa9(0x417)+'e;str'+_0xbd7aa9(0x378)+_0xbd7aa9(0x6b4)+'tColo'+_0xbd7aa9(0xcce)+_0xbd7aa9(0x9fa)+'idth:'+_0xbd7aa9(0xd33)+_0xbd7aa9(0x19d)+'ineca'+_0xbd7aa9(0x654)+'nd;}'),_0xbd7aa9(0x52f)+_0xbd7aa9(0xa2f)+_0xbd7aa9(0x6fd)+';min-'+_0xbd7aa9(0xc1d)+_0xbd7aa9(0x767)+_0xbd7aa9(0xd70)+'ow-y:'+_0xbd7aa9(0x90e)+_0xbd7aa9(0x8e8)+'ay:gr'+_0xbd7aa9(0x54f)+_0xbd7aa9(0x41b)+'mplat'+'e-col'+_0xbd7aa9(0x283)+_0xbd7aa9(0x933)+_0xbd7aa9(0x36f)+_0xbd7aa9(0xc98)+_0xbd7aa9(0xb36)+_0xbd7aa9(0x6e8)+_0xbd7aa9(0x4f6)+'1fr))'+';')+(_0xbd7aa9(0x59c)+'-item'+_0xbd7aa9(0x62c)+_0xbd7aa9(0x74a)+'ign-c'+_0xbd7aa9(0xda5)+'t:sta'+_0xbd7aa9(0x766)+_0xbd7aa9(0x92a)+'x;pad'+'ding:'+'0\x204px'+_0xbd7aa9(0x570)+'0;}'),'.mn-c'+_0xbd7aa9(0x7c9)+_0xbd7aa9(0x480)+'it-sc'+'rollb'+_0xbd7aa9(0x7ad)+_0xbd7aa9(0x811)+_0xbd7aa9(0x406)),_0x5d3ad4['JzrmS'])+_0x5d3ad4['oRcCR'],'.sk-c'+_0xbd7aa9(0x84c)+_0xbd7aa9(0x2f8)+_0xbd7aa9(0x76d)+'nd:rg'+_0xbd7aa9(0xaac)+'5,255'+_0xbd7aa9(0x757)+'.04);'+'box-s'+'hadow'+':inse'+_0xbd7aa9(0x70a)+_0xbd7aa9(0x8d2)+_0xbd7aa9(0x48f)+'a(255'+_0xbd7aa9(0x8a1)+'157,.'+_0xbd7aa9(0x621))+(_0xbd7aa9(0x3b1)+_0xbd7aa9(0x580)+'ead{d'+'ispla'+'y:fle'+_0xbd7aa9(0x6da)+_0xbd7aa9(0x35a)+_0xbd7aa9(0x3d0)+_0xbd7aa9(0x631)+_0xbd7aa9(0x3b0)+_0xbd7aa9(0x45c)+_0xbd7aa9(0xd55)+_0xbd7aa9(0x3a4)+_0xbd7aa9(0x424)+_0xbd7aa9(0x9a5))+_0x5d3ad4[_0xbd7aa9(0x9cb)]+_0x5d3ad4[_0xbd7aa9(0x7cc)],_0x5d3ad4['YhUwg'])+(_0xbd7aa9(0x907)+_0xbd7aa9(0xa18)+_0xbd7aa9(0x822)+_0xbd7aa9(0x4c9)+_0xbd7aa9(0x61d)+_0xbd7aa9(0x99a)+'}'),_0x5d3ad4[_0xbd7aa9(0x6dd)])+_0x5d3ad4['kMbQY'],_0x5d3ad4['aoHiz']),'.sk-h'+_0xbd7aa9(0x90f)+'ispla'+'y:blo'+'ck;fo'+'nt-si'+'ze:10'+_0xbd7aa9(0x49a)+'acity'+_0xbd7aa9(0xa75))+(_0xbd7aa9(0x164)+_0xbd7aa9(0xa5d)+'{posi'+'tion:'+_0xbd7aa9(0x679)+_0xbd7aa9(0x971)+_0xbd7aa9(0x2c9)+'26px;'+_0xbd7aa9(0xc1d)+_0xbd7aa9(0xcb4)+'x;bor'+'der:0'+_0xbd7aa9(0x71a)+_0xbd7aa9(0xd97)+_0xbd7aa9(0x891)+'99px;'+_0xbd7aa9(0x166)+_0xbd7aa9(0xbda)+':rgba'+'(255,'+_0xbd7aa9(0xbea)+'55,.0'+'7);cu'+'rsor:'+_0xbd7aa9(0xd81)+'er;fl'+_0xbd7aa9(0x5e9)+_0xbd7aa9(0x171)),_0x5d3ad4[_0xbd7aa9(0x5c5)])+_0x5d3ad4[_0xbd7aa9(0x2dc)],_0x5d3ad4[_0xbd7aa9(0xcf3)])+_0x5d3ad4[_0xbd7aa9(0x74d)]+('.sk-r'+'ange{'+_0xbd7aa9(0x8e8)+'ay:fl'+_0xbd7aa9(0x1a2)+'ign-i'+_0xbd7aa9(0x69e)+'cente'+'r;gap'+':8px;'+'}')+_0x5d3ad4['JVgeW']+(_0xbd7aa9(0x164)+_0xbd7aa9(0x25d)+'::-we'+_0xbd7aa9(0x3c0)+_0xbd7aa9(0x919)+'r-run'+'nable'+_0xbd7aa9(0x248)+_0xbd7aa9(0xd73)+'ght:2'+'px;bo'+_0xbd7aa9(0xc12)+'radiu'+'s:2px'+';'),_0x5d3ad4['raQuF']),_0x5d3ad4[_0xbd7aa9(0x73a)])+_0x5d3ad4[_0xbd7aa9(0xdad)],_0x5d3ad4['kucfh'])+('.sk-n'+'ote.e'+_0xbd7aa9(0xda1)+'lor:#'+_0xbd7aa9(0x6a5)+'3;}'),_0x5d3ad4[_0xbd7aa9(0x869)]),_0xbd7aa9(0x7f1)+'size:'+_0xbd7aa9(0x2ba)+_0xbd7aa9(0xc01)+_0xbd7aa9(0x7b8)+'ght:7'+_0xbd7aa9(0x13c)+_0xbd7aa9(0xbfd)+_0xbd7aa9(0xd81)+_0xbd7aa9(0x715)+_0xbd7aa9(0x763)+_0xbd7aa9(0x97b)+'inher'+'it;}')+_0x5d3ad4[_0xbd7aa9(0x19e)],_0xbd7aa9(0xaa1)+'re{fo'+_0xbd7aa9(0x644)+_0xbd7aa9(0x4e4)+_0xbd7aa9(0xd9b)+_0xbd7aa9(0x9d8)+_0xbd7aa9(0x2c1)+'Conso'+_0xbd7aa9(0x885)+'onosp'+_0xbd7aa9(0x969)+_0xbd7aa9(0x79e)+'space'+':pre-'+'wrap;'+'word-'+'break'+_0xbd7aa9(0x148)+_0xbd7aa9(0x5db)+_0xbd7aa9(0x8f3)+_0xbd7aa9(0xa14)+_0xbd7aa9(0x353)+'ity:.'+_0xbd7aa9(0x7aa)+_0xbd7aa9(0xb59)+'ght:2'+'80px;'+_0xbd7aa9(0xd95)+'low:a'+_0xbd7aa9(0xc51)),_0x5d3ad4[_0xbd7aa9(0xce6)]),_0xbd7aa9(0x50f)+_0xbd7aa9(0x1a4)+':opac'+'ity\x20.'+_0xbd7aa9(0xa9c)+_0xbd7aa9(0x675)+'-even'+'ts:au'+_0xbd7aa9(0x726)+_0xbd7aa9(0xb6d)+'drop-'+_0xbd7aa9(0xcdb)+'w(0\x200'+_0xbd7aa9(0x1ad)+'rgba('+'255,1'+'07,15'+_0xbd7aa9(0xa60)+_0xbd7aa9(0x2ea)),_0x52e5fd=_0x5d3ad4['EKHIb'](_0x5d3ad4['LBGDX'](_0x5d3ad4['viygt'],_0xbd7aa9(0x6b9)+_0xbd7aa9(0x92b)+_0xbd7aa9(0x978)+_0xbd7aa9(0x3f8)+_0xbd7aa9(0xb13)+_0xbd7aa9(0xc57)+_0xbd7aa9(0x852)+_0xbd7aa9(0x88c)+_0xbd7aa9(0xd8b)+_0xbd7aa9(0xa6f)+_0xbd7aa9(0x41d)+'necap'+_0xbd7aa9(0x817)+'nd\x22\x20s'+_0xbd7aa9(0x852)+_0xbd7aa9(0xb09)+'join='+_0xbd7aa9(0xb29)+_0xbd7aa9(0xba1)),_0xbd7aa9(0xa50)+_0xbd7aa9(0x66a)+_0xbd7aa9(0x9a7)+_0xbd7aa9(0x18f)+_0xbd7aa9(0x154)+'=\x221.5'+'\x22\x20fil'+'l=\x22#f'+_0xbd7aa9(0xbe3)+_0xbd7aa9(0x6bf)+_0xbd7aa9(0x948)),_0x5522c5=_0x5d3ad4['jiAIE'](_0x5d3ad4['CpXao'](_0x5d3ad4[_0xbd7aa9(0xd8f)],'fill='+_0xbd7aa9(0x92b)+_0xbd7aa9(0x978)+_0xbd7aa9(0x3f8)+_0xbd7aa9(0xb13)+'9d\x22\x20s'+'troke'+_0xbd7aa9(0x88c)+'h=\x221.'+_0xbd7aa9(0x449)+_0xbd7aa9(0xa43)+'linec'+_0xbd7aa9(0x910)+'ound\x22'+_0xbd7aa9(0xa6f)+_0xbd7aa9(0x41d)+'nejoi'+_0xbd7aa9(0x39e)+_0xbd7aa9(0x732)+'>'),_0x5d3ad4['FtECz']);function _0x6e7c4e(_0x2ae79b,_0x391950,_0x59eb8d){var _0x1b7b92=_0xbd7aa9,_0x272ee4=document[_0x1b7b92(0x357)+_0x1b7b92(0xd90)+_0x1b7b92(0x3b7)](_0x2ae79b);if(_0x391950)_0x272ee4['class'+_0x1b7b92(0x6b2)]=_0x391950;if(_0x5d3ad4[_0x1b7b92(0x3d5)](_0x59eb8d,null))_0x272ee4[_0x1b7b92(0xaaf)+'HTML']=_0x59eb8d;return _0x272ee4;}function _0xdc8a5f(_0x1b9fca,_0x5d11cd){var _0x5004a3=_0xbd7aa9,_0x1131f9=_0x6e7c4e(_0x5004a3(0x8d7),_0x5d3ad4[_0x5004a3(0x364)]('sk-ca'+'rd',_0x5d11cd?_0x5004a3(0x2e3):'')),_0x518f41=_0x5d3ad4[_0x5004a3(0x88f)](_0x6e7c4e,_0x5004a3(0x8d7),_0x5d3ad4[_0x5004a3(0x579)]),_0x39714d=_0x6e7c4e(_0x5004a3(0x8d7),_0x5004a3(0x2c3)+'rd-ti'+'tle',_0x5d3ad4['KmHYq']('<stro'+_0x5004a3(0x8b8),_0x1b9fca)+_0x5d3ad4['MennC']);_0x518f41['appen'+_0x5004a3(0x493)+'d'](_0x39714d);var _0x43425a=_0x6e7c4e(_0x5d3ad4[_0x5004a3(0x53a)],_0x5004a3(0x252)+'ody');return _0x1131f9[_0x5004a3(0x1d9)+_0x5004a3(0x493)+'d'](_0x518f41),_0x1131f9['appen'+'dChil'+'d'](_0x43425a),_0x1131f9[_0x5004a3(0x717)]=_0x43425a,_0x1131f9['head']=_0x39714d,_0x1131f9;}function _0x447f43(_0x43c30d,_0x469edd){var _0x127eda=_0xbd7aa9,_0x406a24=_0x5d3ad4['UlBSg'](_0x6e7c4e,_0x5d3ad4[_0x127eda(0x729)],_0x5d3ad4['SYHWM']);_0x406a24[_0x127eda(0x6c7)]=_0x127eda(0x93e)+'n';var _0xd36b2d=function(){var _0x2bbd2e=_0x127eda;_0x406a24[_0x2bbd2e(0x99c)+_0x2bbd2e(0xae6)+'te'](_0x5d3ad4[_0x2bbd2e(0xc34)],_0x43c30d()?_0x2bbd2e(0x33e):_0x5d3ad4[_0x2bbd2e(0xb4a)]);};return _0x406a24['oncli'+'ck']=function(){var _0x5a3c94=_0x127eda;_0x5d3ad4['MakLy'](_0x469edd,!_0x5d3ad4[_0x5a3c94(0x9df)](_0x43c30d)),_0xd36b2d();},_0x5d3ad4[_0x127eda(0x8fc)](_0xd36b2d),_0x406a24[_0x127eda(0xaf4)]=_0xd36b2d,_0xfe887c['syncs'][_0x127eda(0x97d)](_0xd36b2d),_0x406a24;}function _0x299bf1(_0x387533,_0x3aa301,_0x2dc4ad,_0x478de3,_0x34713c){var _0x1f486d=_0xbd7aa9,_0x9e76ac={'TAIIb':function(_0x22fc58,_0x4541e0){return _0x22fc58===_0x4541e0;},'VJcYT':_0x1f486d(0x880)+'ion','dElFY':function(_0x53d756,_0x381bfc){return _0x53d756!==_0x381bfc;},'eRcrf':_0x1f486d(0xacd),'yvNbI':function(_0x33d0f8,_0x3a7be0){return _0x33d0f8(_0x3a7be0);}},_0x39cf1b=_0x6e7c4e('div','sk-ra'+'nge'),_0x27d068=document[_0x1f486d(0x357)+_0x1f486d(0xd90)+_0x1f486d(0x3b7)](_0x1f486d(0x87e));_0x27d068[_0x1f486d(0x6c7)]=_0x1f486d(0x683),_0x27d068['class'+_0x1f486d(0x6b2)]=_0x1f486d(0x747)+_0x1f486d(0x62a),_0x27d068[_0x1f486d(0x67f)]=String(_0x387533),_0x27d068[_0x1f486d(0x135)]=String(_0x3aa301),_0x27d068['step']=_0x5d3ad4[_0x1f486d(0xc64)](String,_0x2dc4ad);var _0x245081=_0x5d3ad4[_0x1f486d(0x7db)](_0x6e7c4e,_0x1f486d(0xc6a),_0x5d3ad4[_0x1f486d(0x5f4)]),_0x1da87f=function(){var _0x39d020=_0x1f486d;if(_0x5d3ad4[_0x39d020(0x6bd)](_0x39d020(0xa36),_0x5d3ad4['TRmzN'])){var _0x5e4738=_0x2bf1fe[_0x39d020(0xbee)](this,arguments);try{if(_0x5e4738&&_0x9e76ac[_0x39d020(0x1ab)](typeof _0x5e4738[_0x39d020(0xa12)],_0x9e76ac['VJcYT']))_0x5e4738[_0x39d020(0xa12)](_0x4b9ba1,function(){});else _0x52f761(_0x5e4738);}catch(_0x446a5b){}return _0x5e4738;}else{var _0x51a335=_0x5d3ad4['xRCeg'][_0x39d020(0x823)]('|'),_0x362256=0x1eff+-0x23bd+-0x4be*-0x1;while(!![]){switch(_0x51a335[_0x362256++]){case'0':var _0x4fee37=_0x5d3ad4['nBEPf'](_0xa2ea49,_0x387533)/_0x5d3ad4[_0x39d020(0x861)](_0x3aa301,_0x387533)*(0x23aa+0x1082+-0x1*0x33c8);continue;case'1':var _0xa2ea49=_0x5d3ad4['fTdQl'](_0x478de3);continue;case'2':_0x27d068[_0x39d020(0x821)]=String(_0xa2ea49);continue;case'3':_0x27d068['style']['setPr'+'opert'+'y'](_0x39d020(0xccc),_0x4fee37+'%');continue;case'4':_0x245081['textC'+_0x39d020(0xda5)+'t']=(_0x5d3ad4[_0x39d020(0x5c3)](_0x2dc4ad,-0x1*-0xb1e+-0x2102+0x15e5)?_0xa2ea49[_0x39d020(0xa57)+'ed'](-0x2ea*-0x9+0x1f37+-0x3970):_0x5d3ad4[_0x39d020(0x6e9)](String,Math['round'](_0xa2ea49)))+(_0x27d068[_0x39d020(0x60c)+'et'][_0x39d020(0x95e)]||'');continue;}break;}}};return _0x27d068[_0x1f486d(0x52b)+'ut']=function(){var _0x1f2cef=_0x1f486d;if(_0x9e76ac['dElFY'](_0x1f2cef(0xacd),_0x9e76ac[_0x1f2cef(0x976)])){_0x20b58d[_0x1f2cef(0xbaf)+'ntDef'+_0x1f2cef(0x501)](),_0xac4ee0['fov']=_0x18e123['max'](0x779+-0x1*-0x269b+-0xf52*0x3,_0x6b8fb8[_0x1f2cef(0xa0d)]-(-0x6d*0x7+-0x1d13+0x1*0x2010)),_0x499af1();return;}else _0x34713c(_0x9e76ac[_0x1f2cef(0xbc4)](parseFloat,_0x27d068[_0x1f2cef(0x821)])||_0x387533),_0x1da87f();},_0x39cf1b['appen'+_0x1f486d(0x493)+'d'](_0x27d068),_0x39cf1b[_0x1f486d(0x1d9)+'dChil'+'d'](_0x245081),_0x39cf1b[_0x1f486d(0xaf4)]=_0x1da87f,_0x39cf1b[_0x1f486d(0x87e)]=_0x27d068,_0x1da87f(),_0xfe887c[_0x1f486d(0xb41)]['push'](_0x1da87f),_0x39cf1b;}function _0x1a0323(_0x6d964d,_0x58fc46){var _0x37c96b=_0xbd7aa9,_0x4c7bbf=_0x5d3ad4['WwBME'](_0x6e7c4e,'div','sk-ct'+'l'),_0x33743e=_0x6e7c4e(_0x37c96b(0x8d7),_0x5d3ad4[_0x37c96b(0xa26)],_0x6d964d+(_0x58fc46?_0x5d3ad4[_0x37c96b(0x739)](_0x37c96b(0xd09)+_0x37c96b(0x40b)+'s=\x27sk'+'-hint'+'\x27>'+_0x58fc46,_0x37c96b(0xaf8)+'n>'):''));return _0x4c7bbf[_0x37c96b(0x1d9)+_0x37c96b(0x493)+'d'](_0x33743e),_0x4c7bbf;}function _0x3b99bf(_0x5d43dd,_0x3c6864,_0x431fca,_0x226832){var _0x429513=_0xbd7aa9;if(_0x5d3ad4[_0x429513(0xd50)]!==_0x429513(0x894)){var _0x2817f2=_0x5d43dd&&_0x5d43dd[_0x429513(0x548)+'y']&&_0x5d43dd['surve'+'y'][_0x3c6864];if(!_0x2817f2)return'-';for(var _0x4d37eb=-0x2a9*-0xb+-0x23ce*-0x1+-0x4111;_0x5d3ad4['sRzEU'](_0x4d37eb,_0x2817f2[_0x429513(0x711)+'h']);_0x4d37eb++){if(_0x2817f2[_0x4d37eb]['o']===_0x431fca){if(_0x5d3ad4['WDDUG'](_0x5d3ad4[_0x429513(0x403)],_0x5d3ad4['KWPAW'])){var _0x50153e=_0x366f3b['_runt'+_0x429513(0x363)];if(typeof _0x50153e[_0x429513(0xbb3)+_0x429513(0x833)+'e']==='funct'+_0x429513(0xb25)){var _0x656fb5=_0x50153e['resol'+_0x429513(0x833)+'e']();if(_0x656fb5)return _0x15572b['sourc'+'e']=_0x429513(0xd9e)+_0x429513(0xd27)+_0x429513(0x2fe)+'.reso'+_0x429513(0xbcf)+_0x429513(0xba4),_0x656fb5;}if(_0x50153e['_game'])return _0x4be67c['sourc'+'e']='plugi'+'n._ru'+_0x429513(0x2fe)+'._gam'+'e',_0x50153e['_game'];}else{if(_0x5d3ad4['VqAoD'](_0x226832,'v3')){var _0x422f60=_0x2817f2[_0x4d37eb][_0x429513(0xcbe)]||[_0x2817f2[_0x4d37eb]['v'],-0x1a*-0x45+-0x345*-0xa+-0x16b*0x1c,-0x228f+0xc*-0x33f+0x4983];return _0x422f60['map'](function(_0x1799e1){var _0x5beaf=_0x429513;return Math[_0x5beaf(0xbda)](_0x1799e1*(-0x1f67+0x25d0+-0x605))/(-0x1d*-0x73+0xb77+0xa*-0x269);})[_0x429513(0x8ca)]('\x20\x20');}var _0x37aac6=_0x2817f2[_0x4d37eb]['v'];return typeof _0x37aac6===_0x429513(0x4a5)+'r'?Math['round'](_0x37aac6*(-0x11a9+0x17*0x7c+0x1*0xa6d))/(0x1e25*0x1+-0x1eaa+0x46d):String(_0x37aac6);}}}return'-';}else _0x5d3ad4[_0x429513(0xc4d)](_0x6b162a,_0x331e0e);}function _0x57b043(_0x469190){var _0xb6cff2=_0xbd7aa9,_0x3928f7={'wjQNd':_0xb6cff2(0x281),'tIqjj':_0x5d3ad4[_0xb6cff2(0x982)],'WXsMf':function(_0x3cc6d3,_0x2696a5,_0x307039){return _0x5d3ad4['qEhGW'](_0x3cc6d3,_0x2696a5,_0x307039);},'cAaft':function(_0x275039,_0x18f0c5){return _0x275039(_0x18f0c5);},'WxLBi':'snaps'+'hot','ZuBYu':function(_0x5e9f7c,_0x1f8447,_0x348803){return _0x5e9f7c(_0x1f8447,_0x348803);},'ksxPj':function(_0x39673e){return _0x39673e();},'uSMZo':function(_0x453b24,_0x50cb3a){return _0x453b24/_0x50cb3a;},'zelGw':function(_0x2b2bfb,_0x52e65b){return _0x2b2bfb*_0x52e65b;},'rcqTS':_0x5d3ad4[_0xb6cff2(0xc41)],'DlqKn':_0xb6cff2(0x815)+'d','bDvqr':function(_0x323cfd,_0x2c8e3a){return _0x323cfd+_0x2c8e3a;}};if(_0x5d3ad4[_0xb6cff2(0x2c2)]('jyutz',_0x5d3ad4['kPSuD']))try{var _0x32f58e=_0x465c72();return{'ok':_0x32f58e['ok'],'source':_0x32f58e[_0xb6cff2(0x8b0)+'e'],'why':_0x32f58e[_0xb6cff2(0x24d)],'tried':_0x32f58e[_0xb6cff2(0x390)],'camPtr':'0x'+_0x32f58e['camPt'+'r'][_0xb6cff2(0x89d)+_0xb6cff2(0x30e)](0x1398+-0x267e+0x12f6*0x1),'tfPtr':'0x'+_0x32f58e['tfPtr'][_0xb6cff2(0x89d)+'ing'](-0x1357*-0x1+-0x517*-0x1+-0x185e),'fov':_0x32f58e[_0xb6cff2(0xa0d)],'quat':_0x32f58e['quat'],'pos':_0x32f58e['pos'],'basis':_0x32f58e[_0xb6cff2(0x98e)],'errors':_0x32f58e[_0xb6cff2(0x54c)+'s']['slice'](0x1*-0x1896+0x2*-0x151+0x1b38,0x265*-0x5+0x18d*-0x13+-0x2f6*-0xe)};}catch(_0xc154d6){return{'ok':![],'error':_0x5d17dd(_0xc154d6&&_0xc154d6['messa'+'ge']||_0xc154d6)[_0xb6cff2(0xd2d)](-0x137b+-0x1664+-0x29df*-0x1,-0x223e*-0x1+-0x2013+0x3*-0x91)};}else{var _0x3c7786=_0x8071f9,_0x1762ff=[],_0x6ad9d0;if(_0x469190===_0xb6cff2(0x3fa)+'t'){var _0x2dab5a=_0x5d3ad4[_0xb6cff2(0x5cc)](_0xdc8a5f,_0xb6cff2(0x209)+'\x20hack',_0x169dc6['on']),_0xc9347b=_0x6e7c4e(_0x5d3ad4['JvMaW'],_0x5d3ad4['HREdZ'],_0x169dc6['on']?_0x5d3ad4['tyLBZ'](_0x5d3ad4[_0xb6cff2(0x1fb)](_0x5d3ad4[_0xb6cff2(0xc83)](_0x5d3ad4[_0xb6cff2(0x932)](_0x5d3ad4[_0xb6cff2(0xb76)]('x'+_0x169dc6[_0xb6cff2(0x292)+'r']['toFix'+'ed'](0x13f8+0xc5*-0x2e+-0x525*-0x3),'\x20on\x20'),_0x2468a5[_0xb6cff2(0x711)+'h']),'\x20fiel'+'ds\x20·\x20'),_0x583259),_0x5d3ad4['uIzfY']):_0x5d3ad4[_0xb6cff2(0x56f)]),_0x39ba39=_0x1a0323(_0x5d3ad4['lkGFp']);_0x39ba39['appen'+_0xb6cff2(0x493)+'d'](_0x5d3ad4[_0xb6cff2(0x368)](_0x447f43,function(){return _0x169dc6['on'];},function(_0x5a4c00){var _0x288955=_0xb6cff2;_0x5d3ad4[_0x288955(0x7db)](_0x56a74f,_0x5a4c00,_0x169dc6['facto'+'r']),_0xc9347b[_0x288955(0x754)+'onten'+'t']=_0x5a4c00?_0x5d3ad4['GuZDu'](_0x5d3ad4[_0x288955(0x6ee)]('x'+_0x169dc6['facto'+'r'][_0x288955(0xa57)+'ed'](0x1d6b+0x45f*-0x3+0x3*-0x56f)+_0x5d3ad4[_0x288955(0x21a)]+_0x2468a5[_0x288955(0x711)+'h'],_0x5d3ad4['HTVmq']),_0x583259)+('\x20writ'+'es'):_0x288955(0x99f)+'plies'+_0x288955(0x33d)+'ment-'+_0x288955(0xcc4)+_0x288955(0xd91)+_0x288955(0x82c)+_0x288955(0x64c)+'eight'+',\x20ste'+_0x288955(0xcd9)+_0x288955(0x474)+_0x288955(0x255)+'refus'+_0x288955(0x43a);})),_0x2dab5a[_0xb6cff2(0x717)][_0xb6cff2(0x1d9)+'dChil'+'d'](_0xc9347b),_0x2dab5a['body'][_0xb6cff2(0x1d9)+'dChil'+'d'](_0x39ba39);var _0x3533c5=_0x299bf1(0x1*-0x2299+-0x23a+0x24d4,0x88b+0x1ea4+0x1395*-0x2,-0x2f*-0x1b+0x1126+0x1*-0x161b+0.5,function(){var _0x1b749d=_0xb6cff2;if(_0x3928f7['wjQNd']!==_0x3928f7[_0x1b749d(0x57b)])return _0x169dc6[_0x1b749d(0x292)+'r'];else _0x2bcd7f['note']=_0x1b749d(0x20e)+_0x1b749d(0x481)+_0x1b749d(0x4bb)+_0x1b749d(0x6d7)+_0x1b749d(0xbb4)+_0x1b749d(0x911)+_0x1b749d(0x172)+_0x1b749d(0xd26)+'nd\x20no'+_0x1b749d(0x3e1)+'\x20mana'+'ger.\x20'+'That\x20'+_0x1b749d(0xbcd)+'at\x20'+(_0x1b749d(0xacf)+_0x1b749d(0x1bb)+'looks'+'\x20like'+_0x1b749d(0xc54)+'n\x20the'+_0x1b749d(0xbff)+_0x1b749d(0xbc8)+_0x1b749d(0x853)+_0x1b749d(0xa51)+_0x1b749d(0x2e1)+_0x1b749d(0x931)+_0x1b749d(0x9c4)+_0x1b749d(0xa0b)+'.');},function(_0x5a92f0){var _0x39f434=_0xb6cff2;_0x3928f7[_0x39f434(0x15e)](_0x56a74f,_0x169dc6['on'],_0x5a92f0);});_0x3533c5[_0xb6cff2(0x87e)]['datas'+'et'][_0xb6cff2(0x95e)]='x';var _0x1d951f=_0x1a0323('Multi'+'plier','F8\x20/\x20'+'F6\x20al'+'so\x20st'+_0xb6cff2(0x685)+'is');_0x1d951f[_0xb6cff2(0x1d9)+_0xb6cff2(0x493)+'d'](_0x3533c5),_0x2dab5a[_0xb6cff2(0x717)]['appen'+_0xb6cff2(0x493)+'d'](_0x1d951f);if(_0x5f2199['lengt'+'h']){var _0x12699f=_0x5d3ad4[_0xb6cff2(0x8b6)](_0x6e7c4e,_0xb6cff2(0x8d7),_0xb6cff2(0xc59)+'te',_0x5d3ad4[_0xb6cff2(0x239)]('Refus'+_0xb6cff2(0x373),_0x5f2199[_0xb6cff2(0xd2d)](0x2108+0xb8f+0x3*-0xedd,0x6*0x1e7+0x7d9+-0x133f)['map'](function(_0x3387e7){var _0x3c28fe=_0xb6cff2;return'0x'+(_0x3387e7['o']<-0x1cd*-0x14+-0x1200+-0x902*0x2?'?':_0x3387e7['o'][_0x3c28fe(0x89d)+_0x3c28fe(0x30e)](0xfff+-0x1d3c+0xd4d))+'\x20('+_0x3387e7[_0x3c28fe(0x24d)]+')';})['join']('\x20\x20')));_0x2dab5a[_0xb6cff2(0x717)]['appen'+_0xb6cff2(0x493)+'d'](_0x12699f);}_0x1762ff[_0xb6cff2(0x97d)](_0x2dab5a);var _0x1f5092=_0x5d3ad4['XPlwn'](_0xdc8a5f,'Bindi'+_0xb6cff2(0xa5a)),_0x277fc9=_0x5d3ad4['nDMRd'](_0x6e7c4e,_0xb6cff2(0x93e)+'n','sk-bt'+'n',_0xb6cff2(0x413)+_0xb6cff2(0xb8c)+'ow\x20(F'+'9)');_0x277fc9['type']=_0xb6cff2(0x93e)+'n',_0x277fc9['oncli'+'ck']=function(){var _0x51702e=_0xb6cff2;_0x3928f7[_0x51702e(0x6cd)](_0x1fde69,_0x3928f7['WxLBi']);},_0x1f5092['body'][_0xb6cff2(0x1d9)+_0xb6cff2(0x493)+'d'](_0x6e7c4e(_0x5d3ad4[_0xb6cff2(0x53a)],'sk-md'+_0xb6cff2(0xa86),_0xb6cff2(0x3b9)+_0xb6cff2(0x3bd)+'ot\x20\x20\x20'+'\x20F7\x20\x20'+_0xb6cff2(0xcc4)+'\x20on/o'+_0xb6cff2(0xbf8)+_0xb6cff2(0x6e3)+'\x20\x20fac'+'tor\x20+'+_0xb6cff2(0x3c1)+_0xb6cff2(0x37f)+'\x20\x20fie'+_0xb6cff2(0x1c2)+_0xb6cff2(0x3d7)+'\x0aInse'+'rt\x20\x20t'+_0xb6cff2(0x3a9)+_0xb6cff2(0x871))),_0x1f5092[_0xb6cff2(0x717)][_0xb6cff2(0x1d9)+_0xb6cff2(0x493)+'d'](_0x277fc9),_0x1762ff[_0xb6cff2(0x97d)](_0x1f5092);}if(_0x469190===_0xb6cff2(0x663)+'ls'){var _0x4fff79=_0xdc8a5f(_0xb6cff2(0x273),_0x5310b2['on']),_0x5c8fbf=_0x1a0323(_0xb6cff2(0x3fe)+'ed');_0x5c8fbf[_0xb6cff2(0x1d9)+_0xb6cff2(0x493)+'d'](_0x447f43(function(){var _0x32f8d4=_0xb6cff2;if('ATzqM'!=='ATzqM')_0x585971['textC'+'onten'+'t']=_0x4ea9ff(_0x1335dd[_0x32f8d4(0xcc4)][_0x32f8d4(0x292)+'r'])[_0x32f8d4(0xa57)+'ed'](-0x14d6+-0xf25+0xe*0x292)+'x';else return _0x5310b2['on'];},function(_0x206e2a){var _0xfd8711=_0xb6cff2;_0x189bbb(_0x206e2a,_0x5310b2[_0xfd8711(0x7d3)]);})),_0x4fff79[_0xb6cff2(0x717)][_0xb6cff2(0x1d9)+_0xb6cff2(0x493)+'d'](_0x5d3ad4[_0xb6cff2(0x8b6)](_0x6e7c4e,_0x5d3ad4[_0xb6cff2(0x53a)],_0xb6cff2(0x6b1)+'esc',_0x5d3ad4['kAcNo'])),_0x4fff79['body'][_0xb6cff2(0x1d9)+_0xb6cff2(0x493)+'d'](_0x5c8fbf);var _0x1087d7=_0x299bf1(0x1b47+0x2*0x531+0x2581*-0x1,-0x4*-0x673+-0x12aa+-0x682,-0xf8*-0x26+0x26*-0x55+0x8*-0x305,function(){return _0x5310b2['span'];},function(_0x21ef19){_0x5310b2['span']=_0x21ef19;});_0x1087d7[_0xb6cff2(0x87e)]['datas'+'et'][_0xb6cff2(0x95e)]='m';var _0x4aa6f3=_0x1a0323(_0x5d3ad4[_0xb6cff2(0xad8)],_0xb6cff2(0x783)+_0xb6cff2(0x19c)+_0xb6cff2(0xd4e)+'oss\x20t'+'he\x20ra'+_0xb6cff2(0xa4c));_0x4aa6f3['appen'+'dChil'+'d'](_0x1087d7),_0x4fff79['body'][_0xb6cff2(0x1d9)+'dChil'+'d'](_0x4aa6f3),_0x1762ff[_0xb6cff2(0x97d)](_0x4fff79);var _0x10e458=_0x5d3ad4[_0xb6cff2(0x3a1)](_0xdc8a5f,_0xb6cff2(0x482),_0x5310b2[_0xb6cff2(0x7d3)]),_0x5197c5=_0x5d3ad4[_0xb6cff2(0x857)](_0x1a0323,_0xb6cff2(0x3fe)+'ed');_0x5197c5['appen'+_0xb6cff2(0x493)+'d'](_0x5d3ad4['qEhGW'](_0x447f43,function(){var _0x5b2e10=_0xb6cff2;return _0x5d3ad4[_0x5b2e10(0x462)](_0x5d3ad4[_0x5b2e10(0x1d7)],_0x5b2e10(0x84b))?(_0x36661b[_0x5b2e10(0x8b0)+'e']=_0x5b2e10(0x680)+'me._g'+'ame',_0x2d74af):_0x5310b2[_0x5b2e10(0x7d3)];},function(_0x4899f3){var _0x5c2c6c=_0xb6cff2;if(_0x4899f3&&!_0x5ae8d7()){_0x89aede();return;}_0x3928f7[_0x5c2c6c(0xb45)](_0x189bbb,!![],_0x4899f3);}));var _0x2bd57d=_0x3c7786&&_0x3c7786[_0xb6cff2(0xb1d)+'s'];_0x10e458['body']['appen'+_0xb6cff2(0x493)+'d'](_0x6e7c4e(_0xb6cff2(0x8d7),_0xb6cff2(0x6b1)+'esc',_0x2bd57d&&!_0x2bd57d[_0xb6cff2(0x85a)+'ified']?_0x5d3ad4[_0xb6cff2(0x6a6)](_0xb6cff2(0x238)+'rawin'+_0xb6cff2(0x51e)+(_0x2bd57d['why']||_0xb6cff2(0x806)+'angle'+_0xb6cff2(0x2de)+_0xb6cff2(0x4f9)+'fied'),_0x5d3ad4[_0xb6cff2(0x9e5)]):_0x2bd57d&&!_0x2bd57d['fovSa'+'ne']?_0xb6cff2(0x8f2)+_0xb6cff2(0x7ff)+_0xb6cff2(0xc33)+'s\x20'+Math[_0xb6cff2(0xbda)](_0x2bd57d['fov'])+_0x5d3ad4['Llwur']:_0x5d3ad4[_0xb6cff2(0xcfc)])),_0x10e458[_0xb6cff2(0x717)][_0xb6cff2(0x1d9)+_0xb6cff2(0x493)+'d'](_0x5197c5);var _0x10eb48=_0x299bf1(-0x263+-0x4*0x3ad+0x5*0x377,-0x1596+-0xb8b+-0x6d*-0x4f,-0x76d*-0x2+-0x87b+-0xb5*0x9,function(){var _0x1ad773=_0xb6cff2;return _0x31f87f[_0x1ad773(0xa0d)];},function(_0x5a8991){_0x31f87f['fov']=_0x5a8991,_0x5d3ad4['jeSjn'](_0x1596ac);});_0x10eb48['input']['datas'+'et'][_0xb6cff2(0x95e)]='°';var _0x29742d=_0x1a0323(_0xb6cff2(0x8f2)+'\x20of\x20v'+'iew',_0xb6cff2(0x658)+_0xb6cff2(0x888)+_0xb6cff2(0xc75)+'ep\x20th'+'is');_0x29742d['appen'+_0xb6cff2(0x493)+'d'](_0x10eb48);var _0x53c339=_0x1a0323(_0xb6cff2(0x625)+_0xb6cff2(0x3d7),'fov\x20b'+'ack\x20t'+_0xb6cff2(0x77b)+_0xb6cff2(0x2cc)+_0xb6cff2(0xc50)+'lear'),_0x2d4dd4=_0x6e7c4e('butto'+'n','sk-bt'+'n','Reset');_0x2d4dd4[_0xb6cff2(0xce1)+'entLi'+_0xb6cff2(0x733)+'r'](_0x5d3ad4[_0xb6cff2(0x232)],function(){var _0x24c4a9=_0xb6cff2;_0x31f87f['fov']=-0x1a43+-0x5c1+0x204f,_0x3928f7['ksxPj'](_0x1596ac),_0x353ddd(_0xfe887c[_0x24c4a9(0x4bf)]);}),_0x53c339['appen'+_0xb6cff2(0x493)+'d'](_0x2d4dd4),_0x10e458[_0xb6cff2(0x717)]['appen'+_0xb6cff2(0x493)+'d'](_0x29742d),_0x10e458[_0xb6cff2(0x717)][_0xb6cff2(0x1d9)+_0xb6cff2(0x493)+'d'](_0x53c339);var _0x4383f3=_0x3c7786&&_0x3c7786[_0xb6cff2(0x974)];_0x10e458[_0xb6cff2(0x717)][_0xb6cff2(0x1d9)+_0xb6cff2(0x493)+'d'](_0x5d3ad4[_0xb6cff2(0x959)](_0x6e7c4e,'div',_0xb6cff2(0xc59)+'te',_0x5d3ad4[_0xb6cff2(0xa35)](_0x5d3ad4['AHVRd']+(_0x4383f3?_0x4383f3['mouse'+'Look']?_0x5d3ad4['VVMpZ'](_0xb6cff2(0xcea)+'Look\x20'+_0x4383f3[_0xb6cff2(0xb92)+_0xb6cff2(0xb4e)],_0x4383f3[_0xb6cff2(0x32a)+'a']?'\x20\x20cam'+_0xb6cff2(0x674)+_0x4383f3['camer'+'a']:''):_0x5d3ad4[_0xb6cff2(0x753)]:_0x5d3ad4['vrseX']),_0x2bd57d?'\x0a'+(_0x2bd57d[_0xb6cff2(0x8b0)+'e']&&_0x5d3ad4[_0xb6cff2(0x7ae)](_0x2bd57d[_0xb6cff2(0x8b0)+'e'][_0xb6cff2(0x8f1)+'Of'](_0x5d3ad4[_0xb6cff2(0x633)]),-0x1*0xb55+0x150a+-0x9b5)?_0x5d3ad4['qnBaG'](_0x5d3ad4[_0xb6cff2(0x5af)]+_0x2bd57d[_0xb6cff2(0x8b0)+'e']['slice'](-0x1*0x17c9+0x4*-0x6b+0x20*0xcc)+(_0xb6cff2(0xae0)+'\x20\x20')+Math[_0xb6cff2(0xbda)](_0x2bd57d['rawYa'+'w']),_0x5d3ad4['fHPLh'])+Math[_0xb6cff2(0xbda)](_0x2bd57d[_0xb6cff2(0x428)+_0xb6cff2(0x3c3)]):_0x2bd57d[_0xb6cff2(0x8b0)+'e']==='gette'+'r'?_0x5d3ad4[_0xb6cff2(0xa2b)](_0x5d3ad4['nZltm']('read\x20'+_0xb6cff2(0xa16)+_0xb6cff2(0xcea)+_0xb6cff2(0x350)+_0xb6cff2(0x437)+_0xb6cff2(0x5ff)+'w\x20\x20\x20',_0x2bd57d[_0xb6cff2(0x59e)]),_0x5d3ad4[_0xb6cff2(0xc92)])+Math['round'](_0x2bd57d['rawYa'+'w'])+_0x5d3ad4['fHPLh']+_0x2bd57d[_0xb6cff2(0xc6b)+'At']+_0xb6cff2(0x211)+Math['round'](_0x2bd57d['rawPi'+'tch']):'GUESS'+_0xb6cff2(0x2db)+'rom\x20s'+'truct'+_0xb6cff2(0x2cc)+_0xb6cff2(0x6c5)+_0xb6cff2(0x1fd)+'and\x20+'+_0xb6cff2(0x832)+'the\x20a'+'ngle\x20'+_0xb6cff2(0x91c)+_0xb6cff2(0x7d5)+_0xb6cff2(0x6a2)+'fired'+'\x20yet'):'')+(_0x2bd57d&&_0x2bd57d[_0xb6cff2(0x923)+_0xb6cff2(0xaa3)]&&_0x5d3ad4[_0xb6cff2(0x88a)](_0x2bd57d[_0xb6cff2(0x923)+'ooks'][_0xb6cff2(0x69b)+'ed'],-0x8e+0xcfa*0x3+-0x2660)&&_0x2bd57d[_0xb6cff2(0x923)+'ooks']['total']>-0xe2+-0x355*-0x1+-0x273?_0x5d3ad4[_0xb6cff2(0x1ef)](_0x5d3ad4[_0xb6cff2(0x299)]+_0x2bd57d['viewH'+_0xb6cff2(0xaa3)][_0xb6cff2(0xbb3)+_0xb6cff2(0xa6e)],'/')+_0x2bd57d[_0xb6cff2(0x923)+_0xb6cff2(0xaa3)][_0xb6cff2(0x138)]+(_0xb6cff2(0x1f7)+'lved)'):_0x2bd57d&&_0x2bd57d['viewH'+_0xb6cff2(0xaa3)]&&_0x2bd57d['viewH'+'ooks'][_0xb6cff2(0x138)]===-0x2be*0x8+-0x112*0x21+0x3942?_0x5d3ad4[_0xb6cff2(0x7eb)](_0xb6cff2(0xd24)+_0xb6cff2(0x3c5)+'s\x20wer'+_0xb6cff2(0x3e3)+_0xb6cff2(0x26a)+_0xb6cff2(0x80d)+_0xb6cff2(0x22b)+_0x2bd57d[_0xb6cff2(0x923)+_0xb6cff2(0xaa3)]['error'+_0xb6cff2(0x42c)],_0x5d3ad4['ssYfN']):'')+(_0x5ef2a2?_0x5d3ad4[_0xb6cff2(0x4cc)]:''))),_0x1762ff[_0xb6cff2(0x97d)](_0x10e458);}if(_0x469190==='value'+'s'){var _0x5ce241=[[_0xb6cff2(0x55c),'VERSI'+'ON',_0x3c7786?_0x3c7786[_0xb6cff2(0xb3b)+'on']:'-'],[_0x5d3ad4['SGYPX'],_0x5d3ad4['pgVcx'],_0x3c7786?_0x5d3ad4[_0xb6cff2(0x7e7)](_0x3c7786[_0xb6cff2(0x91c)+'Appli'+'ed'],_0x5d3ad4[_0xb6cff2(0x8d9)])+_0x3c7786['hooks'+_0xb6cff2(0xa45)+_0xb6cff2(0x206)+_0xb6cff2(0x16d)]:'-'],[_0x5d3ad4['rAECJ'],_0xb6cff2(0xa16)+_0xb6cff2(0xad6)+_0xb6cff2(0x152)+_0xb6cff2(0x7fc),_0x3c7786&&_0x3c7786['wasmM'+'emory']&&_0x3c7786[_0xb6cff2(0xd92)+_0xb6cff2(0xd7f)][_0xb6cff2(0xaa7)+_0xb6cff2(0x236)]?_0x5d3ad4['jdeDr'](_0x5d3ad4[_0xb6cff2(0x91d)](Math['round'](_0x3c7786[_0xb6cff2(0xd92)+'emory'][_0xb6cff2(0x94f)]/(0x1*0x44899+0x16fc58*0x1+0x5*-0x240fd)),_0xb6cff2(0x2b6)+'\x20'),_0x3c7786['wasmM'+_0xb6cff2(0xd7f)][_0xb6cff2(0xaa5)])+'ms':'-'],['Playe'+'rs',_0xb6cff2(0x5ca)+'nNetw'+'orkSy'+'nc',_0x3c7786&&_0x3c7786[_0xb6cff2(0x358)]?String(_0x3c7786['esp'][_0xb6cff2(0x576)+_0xb6cff2(0x9d2)+'t']):'-'],['Enemi'+'es',_0x5d3ad4['MlRcB'],_0x3c7786&&_0x3c7786['esp']?_0x5d3ad4[_0xb6cff2(0xc4d)](String,_0x3c7786[_0xb6cff2(0x358)][_0xb6cff2(0xb80)+_0xb6cff2(0x42c)]):'-'],['Camer'+'a',_0xb6cff2(0xa88)+_0xb6cff2(0xa71)+_0xb6cff2(0xc97)+'nager',_0x3c7786&&_0x3c7786['esp']&&_0x3c7786[_0xb6cff2(0x358)][_0xb6cff2(0x32a)+'a']?_0x5d3ad4['TeNpy'](_0x5d3ad4[_0xb6cff2(0x677)](_0x5d3ad4['QrGxH'](_0x3c7786[_0xb6cff2(0x358)]['camer'+'a'],'\x20('),_0x3c7786[_0xb6cff2(0x358)][_0xb6cff2(0x32a)+_0xb6cff2(0x841)]),')'):'-']];for(_0x6ad9d0=0x57*-0x1+-0x2cc+0x323;_0x5d3ad4['zlFHq'](_0x6ad9d0,_0x5ce241[_0xb6cff2(0x711)+'h']);_0x6ad9d0++){var _0x4a6fff=_0x5d3ad4[_0xb6cff2(0xba7)](_0x1a0323,_0x5ce241[_0x6ad9d0][-0x19*0x71+-0x7*0x4cd+0x2ca4]),_0x1a2356=_0x5d3ad4[_0xb6cff2(0x368)](_0x6e7c4e,'span',_0xb6cff2(0x8a2)+'l');_0x1a2356['style'][_0xb6cff2(0x3cd)+'dth']='0',_0x1a2356[_0xb6cff2(0x219)]['flex']='1',_0x1a2356[_0xb6cff2(0x219)]['textA'+'lign']=_0x5d3ad4[_0xb6cff2(0xace)],_0x1a2356[_0xb6cff2(0x754)+_0xb6cff2(0xda5)+'t']=String(_0x5ce241[_0x6ad9d0][0x79e+-0x574+-0x228]),_0x1a2356['datas'+'et']['k']=_0x5ce241[_0x6ad9d0][-0xb1e+0x58+0x1f*0x59],_0x4a6fff[_0xb6cff2(0x1d9)+_0xb6cff2(0x493)+'d'](_0x1a2356);var _0x37b996=_0x1762ff[_0xb6cff2(0x711)+'h']?_0x1762ff[_0x1762ff['lengt'+'h']-(-0x37f*0x1+-0x910+0x430*0x3)]:null;!_0x37b996&&(_0x37b996=_0x5d3ad4['eDVyQ'](_0xdc8a5f,'Sessi'+'on',![]),_0x1762ff[_0xb6cff2(0x97d)](_0x37b996)),_0x37b996[_0xb6cff2(0x717)][_0xb6cff2(0x1d9)+_0xb6cff2(0x493)+'d'](_0x4a6fff),_0x37b996['body']['lastC'+'hild']['sp']=_0x1a2356;}var _0x33aff6=_0xdc8a5f('Playe'+'r',![]),_0x25b6a6=[['Posit'+_0xb6cff2(0xb25),_0x3c7786&&_0x3c7786['local']&&_0x3c7786[_0xb6cff2(0x966)][_0xb6cff2(0x7cd)]?_0x5d3ad4[_0xb6cff2(0x2ac)](_0x5d3ad4[_0xb6cff2(0xbe9)],_0x3c7786[_0xb6cff2(0x966)][_0xb6cff2(0x7cd)]):_0x5d3ad4[_0xb6cff2(0x5b0)],_0x3c7786&&_0x3c7786['local']&&_0x3c7786[_0xb6cff2(0x966)]['feet']?_0x3c7786['local'][_0xb6cff2(0xa28)]['map'](function(_0x255ee4){var _0x5c38f1=_0xb6cff2;return _0x3928f7[_0x5c38f1(0xbc7)](Math['round'](_0x3928f7[_0x5c38f1(0xaae)](_0x255ee4,0x55c+-0x1686+0x118e)),-0x2084+0xf5e*-0x1+0x4a*0xa7);})[_0xb6cff2(0x8ca)]('\x20\x20'):'-'],[_0x5d3ad4[_0xb6cff2(0xac1)],_0x5d3ad4[_0xb6cff2(0x8c0)](_0x5d3ad4[_0xb6cff2(0xc2f)]('+',_0xb6b964),'m'),_0x3c7786&&_0x3c7786['local']&&_0x3c7786[_0xb6cff2(0x966)][_0xb6cff2(0xb97)]?_0x3c7786[_0xb6cff2(0x966)][_0xb6cff2(0xb97)]['map'](function(_0x39c8cb){return Math['round'](_0x39c8cb*(-0x13*0xb9+-0x1344+0x2163))/(-0x10*-0x1d3+0x2637+-0xd67*0x5);})['join']('\x20\x20'):'-'],[_0x5d3ad4[_0xb6cff2(0xa85)],_0x5d3ad4[_0xb6cff2(0x7f3)],_0x3b99bf(_0x3c7786,_0xb6cff2(0x529)+_0xb6cff2(0xd56)+'ler',0xc1*-0x10+-0xf58+0x1b78)],[_0x5d3ad4['tDJef'],'0x40',_0x3b99bf(_0x3c7786,_0x5d3ad4['VXlWG'],-0x121c*0x1+-0xfca*-0x1+0xe*0x2f)],['Jump\x20'+_0xb6cff2(0xc1d)+'t','0x11C',_0x3b99bf(_0x3c7786,_0xb6cff2(0x529)+'ntrol'+'ler',-0x25ca+0xaab*0x2+0x8c8*0x2)],[_0xb6cff2(0x170)+'h',_0x5d3ad4[_0xb6cff2(0xb56)],_0x3b99bf(_0x3c7786,_0x5d3ad4[_0xb6cff2(0x235)],-0xa93+-0x815*-0x1+0x2*0x19f)]];for(_0x6ad9d0=-0x2353+0x2152+0x201;_0x5d3ad4['sRzEU'](_0x6ad9d0,_0x25b6a6[_0xb6cff2(0x711)+'h']);_0x6ad9d0++){var _0x3ab591=_0x5d3ad4[_0xb6cff2(0xcd6)](_0x1a0323,_0x25b6a6[_0x6ad9d0][0x199*-0x3+-0x1*-0xf55+-0x47*0x26]),_0x9eeaff=_0x6e7c4e('span',_0xb6cff2(0x8a2)+'l');_0x9eeaff[_0xb6cff2(0x219)]['minWi'+_0xb6cff2(0x16c)]='0',_0x9eeaff[_0xb6cff2(0x219)]['flex']='1',_0x9eeaff['style'][_0xb6cff2(0x17e)+_0xb6cff2(0xaff)]=_0xb6cff2(0x8b3),_0x9eeaff['textC'+_0xb6cff2(0xda5)+'t']=String(_0x25b6a6[_0x6ad9d0][0x1e0f+-0x7*-0x20b+0x32b*-0xe]),_0x9eeaff['datas'+'et']['k']=_0x25b6a6[_0x6ad9d0][0x7*-0x362+0xc*-0x9f+0x3*0xa61],_0x3ab591[_0xb6cff2(0x1d9)+'dChil'+'d'](_0x9eeaff),_0x33aff6[_0xb6cff2(0x717)][_0xb6cff2(0x1d9)+_0xb6cff2(0x493)+'d'](_0x3ab591),_0x33aff6[_0xb6cff2(0x717)][_0xb6cff2(0xa24)+_0xb6cff2(0x7cf)]['sp']=_0x9eeaff;}_0x1762ff[_0xb6cff2(0x97d)](_0x33aff6);}if(_0x469190==='log'){var _0x1a9baf=_0xdc8a5f(_0xb6cff2(0x5e7)+'ostic'+'s',![]),_0x50f9cf=_0x3c7786&&_0x3c7786['warni'+_0xb6cff2(0xa5a)]&&_0x3c7786['warni'+_0xb6cff2(0xa5a)][_0xb6cff2(0x711)+'h']?_0x3c7786[_0xb6cff2(0x1f4)+_0xb6cff2(0xa5a)]['join']('\x0a'):'no\x20wa'+_0xb6cff2(0x261)+'s';_0x1a9baf[_0xb6cff2(0x717)][_0xb6cff2(0x1d9)+'dChil'+'d'](_0x6e7c4e('div','sk-pr'+'e',_0x50f9cf)),_0x1762ff[_0xb6cff2(0x97d)](_0x1a9baf);var _0x24eb98=_0xdc8a5f(_0x5d3ad4[_0xb6cff2(0x40d)],![]),_0x213f2a=_0x6e7c4e(_0xb6cff2(0x93e)+'n','sk-bt'+'n',_0x5d3ad4[_0xb6cff2(0x3de)]);_0x213f2a['type']='butto'+'n',_0x213f2a[_0xb6cff2(0x6d0)+'ck']=function(){var _0xcd8379=_0xb6cff2,_0x382f7c={'ofkzr':_0x3928f7[_0xcd8379(0x262)],'egpYP':_0x3928f7[_0xcd8379(0x9b5)]};try{var _0x490734=_0x3928f7['bDvqr'](_0xd16236+'\x0a'+JSON[_0xcd8379(0xd32)+'gify'](_0x3c7786,null,0x19de+-0x2a*-0x62+-0x9*0x4a9),'\x0a')+_0x28c139;if(navigator[_0xcd8379(0xca9)+'oard']&&navigator[_0xcd8379(0xca9)+_0xcd8379(0x1d4)]['write'+_0xcd8379(0x76f)])navigator[_0xcd8379(0xca9)+_0xcd8379(0x1d4)][_0xcd8379(0xadf)+'Text'](_0x490734)['then'](function(){var _0x474431=_0xcd8379;_0x382f7c['ofkzr']!=='cexse'?_0x213f2a['textC'+'onten'+'t']=_0x382f7c[_0x474431(0x773)]:_0x3d87e6();});else _0x213f2a[_0xcd8379(0x754)+_0xcd8379(0xda5)+'t']='Clipb'+'oard\x20'+_0xcd8379(0x816)+_0xcd8379(0x43f)+'open\x20'+'the\x20p'+_0xcd8379(0x5a1)+'inste'+'ad';}catch(_0x156a10){_0x213f2a[_0xcd8379(0x754)+'onten'+'t']='Copy\x20'+'faile'+'d';}},_0x24eb98[_0xb6cff2(0x717)][_0xb6cff2(0x1d9)+_0xb6cff2(0x493)+'d'](_0x6e7c4e(_0xb6cff2(0x8d7),_0xb6cff2(0x6b1)+'esc',_0xb6cff2(0x5ec)+'\x20the\x20'+_0xb6cff2(0x20d)+_0xb6cff2(0x4bc)+_0xb6cff2(0xc3f)+_0xb6cff2(0x56c)+_0xb6cff2(0xd80)+_0xb6cff2(0x585)+'ks\x20wr'+_0xb6cff2(0x938))),_0x24eb98['body'][_0xb6cff2(0x1d9)+_0xb6cff2(0x493)+'d'](_0x213f2a),_0x1762ff[_0xb6cff2(0x97d)](_0x24eb98);}return _0x1762ff;}}function _0x419135(){var _0xd8f6a6=_0xbd7aa9;if(_0x5d3ad4[_0xd8f6a6(0x23b)]!==_0xd8f6a6(0xa9d))_0x1d843b=_0x55a345,_0x420d49=_0x203837[_0x53d71c];else{if(_0xfe887c['open'])_0x5d3ad4[_0xd8f6a6(0x5a7)](_0x4b532c,!![]);}}function _0x363f34(){var _0x4aa2e8=_0xbd7aa9,_0x969185={'eWiJs':_0x4aa2e8(0x8ef)+_0x4aa2e8(0x66d)+_0x4aa2e8(0x34e)};try{if(_0x5d3ad4[_0x4aa2e8(0xd98)](_0x4aa2e8(0x845),_0x4aa2e8(0x6b8))){var _0x2a7b31=localStorage['getIt'+'em'](_0x1a1906);if(!_0x2a7b31)return;var _0x11c2d2=JSON[_0x4aa2e8(0x51b)](_0x2a7b31);if(_0x11c2d2&&typeof _0x11c2d2['x']===_0x4aa2e8(0x4a5)+'r'&&_0x5d3ad4['EvqeJ'](typeof _0x11c2d2['y'],_0x4aa2e8(0x4a5)+'r'))_0xfe887c[_0x4aa2e8(0x1bc)]=_0x11c2d2;}else return _0x1b58a8['sourc'+'e']=_0x969185[_0x4aa2e8(0x3e7)],_0x4ffb82;}catch(_0x1d3445){}}function _0xdb1837(){var _0x576f11=_0xbd7aa9;try{localStorage[_0x576f11(0x87a)+'em'](_0x1a1906,JSON['strin'+_0x576f11(0x79c)](_0xfe887c['pos']));}catch(_0x377a27){}}function _0x26ae01(){var _0x5099ab=_0xbd7aa9;if(_0x5d3ad4[_0x5099ab(0x8fe)](_0x5099ab(0x80c),'FGJHM')){var _0x217e1e=_0x5d3ad4[_0x5099ab(0x53d)](_0x2501b8);if(!_0x217e1e)return null;if(_0x5d3ad4[_0x5099ab(0x866)](_0x22f474,-0x23*-0xd4+-0x6f2+-0x160a)||_0x461fa5+_0x815dad*(-0x78b+0x255a+-0x1dcb)>_0x217e1e['byteL'+_0x5099ab(0x51c)])return null;var _0x10212f=[];for(var _0x2cecf8=0xce1+-0x25f*0x5+0x106*-0x1;_0x2cecf8<_0x48aed8;_0x2cecf8++)_0x10212f[_0x5099ab(0x97d)](_0x217e1e[_0x5099ab(0x7f7)+'oat32'](_0x5d3ad4['GSGga'](_0x325faf,_0x268da1)+_0x2cecf8*(-0x2008*-0x1+-0x9fc+-0x1608),!![]));return _0x3af2d7['ok']+=_0x247ac1,_0x10212f;}else{var _0x48bd6c=_0xfe887c[_0x5099ab(0x55b)];if(!_0x48bd6c||!_0x48bd6c[_0x5099ab(0x219)])return;_0xfe887c[_0x5099ab(0x1bc)]?(_0x48bd6c[_0x5099ab(0x219)][_0x5099ab(0x4d2)]=_0xfe887c['pos']['x']+'px',_0x48bd6c[_0x5099ab(0x219)]['top']=_0xfe887c[_0x5099ab(0x1bc)]['y']+'px',_0x48bd6c[_0x5099ab(0x219)][_0x5099ab(0x8b3)]='auto',_0x48bd6c['style']['botto'+'m']=_0x5d3ad4[_0x5099ab(0xd0e)]):(_0x48bd6c[_0x5099ab(0x219)]['left']='auto',_0x48bd6c[_0x5099ab(0x219)]['top']=_0x5d3ad4['AgbDv'],_0x48bd6c[_0x5099ab(0x219)][_0x5099ab(0x8b3)]=_0x5d3ad4[_0x5099ab(0xc04)],_0x48bd6c['style']['botto'+'m']=_0x5099ab(0x575));}}function _0x302616(_0x178b20,_0xd7d77a){var _0x109774=_0xbd7aa9,_0x259be6={'ALjfP':function(_0x5e3b7d,_0x3f611e){return _0x5e3b7d(_0x3f611e);},'WaSWR':function(_0x1c4939,_0x2a29e3){return _0x1c4939===_0x2a29e3;},'HoXak':_0x5d3ad4[_0x109774(0x32f)],'ICFFu':_0x109774(0x436),'hqJqK':function(_0x4a95e5,_0x23982f){return _0x4a95e5+_0x23982f;},'vIgjS':_0x5d3ad4[_0x109774(0xd0e)],'rkIUE':function(_0x86f0fe,_0x142df6){return _0x86f0fe-_0x142df6;},'ABegh':_0x5d3ad4[_0x109774(0xbc6)],'BUKgE':function(_0x34ee92){var _0x47b149=_0x109774;return _0x5d3ad4[_0x47b149(0x386)](_0x34ee92);}};try{var _0x25eb45=![],_0x535c8c=0x1*-0xf76+0x1*-0x1513+0x2489,_0x2c687f=0x1*0xf8f+-0x7f4*0x4+0x1041;_0xd7d77a[_0x109774(0x219)][_0x109774(0xd6f)+'r']=_0x109774(0x8e0),_0xd7d77a[_0x109774(0x219)][_0x109774(0xa6b)+'Actio'+'n']=_0x5d3ad4[_0x109774(0x452)];var _0xd3360f=function(_0x346aab){var _0x4832c1=_0x109774;_0x25eb45=!![],_0xd7d77a['style'][_0x4832c1(0xd6f)+'r']='grabb'+_0x4832c1(0x30e);var _0x385e89={'left':parseFloat(_0x178b20['style']['left'])||0x50e+0x1*0x60d+-0x1*0xb1b,'top':parseFloat(_0x178b20['style']['top'])||0x1*-0x106+0x2187+-0x2081};(!_0x178b20[_0x4832c1(0x219)]['left']||_0x178b20['style'][_0x4832c1(0x4d2)]===_0x5d3ad4[_0x4832c1(0xd0e)])&&(_0x385e89[_0x4832c1(0x4d2)]=(window['inner'+_0x4832c1(0x9b3)]||0x1a2*0x17+-0x351*-0x5+0x1*-0x3623)-(_0x178b20['offse'+_0x4832c1(0x612)+'h']||-0x1976*-0x1+-0x1335+-0x1*0x3d5)-(-0xee6+-0x305+-0x1203*-0x1));(!_0x178b20[_0x4832c1(0x219)][_0x4832c1(0xac3)]||_0x178b20['style']['top']==='auto')&&(_0x385e89[_0x4832c1(0xac3)]=_0x5d3ad4['PHjSr']((window[_0x4832c1(0xaaf)+_0x4832c1(0x5c6)+'t']||0x1*0x4ee+-0x263b+0x214d)-(_0x178b20['offse'+_0x4832c1(0xda2)+'ht']||0x603+0x2*0xfc7+-0x2401),-0xd5d+0x8ba+0x4bb));_0x535c8c=_0x5d3ad4['fMYnb'](_0x346aab[_0x4832c1(0x712)+'tX']||-0x2*-0xb9c+0x99d+-0x691*0x5,_0x385e89[_0x4832c1(0x4d2)]),_0x2c687f=(_0x346aab['clien'+'tY']||-0xfed+0x11fa+0x1*-0x20d)-_0x385e89['top'];try{_0x5d3ad4[_0x4832c1(0x784)]!==_0x4832c1(0xd41)?_0x1b3e2b[_0x4832c1(0x6d0)+'ck']=function(){_0x1bdf25(_0x4cf8ec);}:_0x346aab[_0x4832c1(0xbaf)+_0x4832c1(0x53b)+'ault']();}catch(_0x5e923c){}},_0x22f870=function(_0x48da6e){var _0x3b5dc4=_0x109774;if(_0x259be6['WaSWR'](_0x259be6[_0x3b5dc4(0x2be)],_0x259be6[_0x3b5dc4(0xda4)])){var _0x1e3031=_0x259be6[_0x3b5dc4(0xc82)](_0x3d323b,_0x4cdd59);_0x39ed74[_0x447d00]=_0x1e3031['rows'],_0x445eb0[_0x59d543]={'key':_0x1e3031[_0x3b5dc4(0x66f)],'sane':_0x1e3031[_0x3b5dc4(0x23c)],'checked':_0x1e3031['check'+'ed'],'keyConsistent':_0x1e3031['keyCo'+'nsist'+_0x3b5dc4(0x3b7)],'keySource':_0x1e3031[_0x3b5dc4(0x83f)+'urce']};}else{var _0x3c31fc=('7|9|8'+_0x3b5dc4(0x184)+_0x3b5dc4(0x5e4)+_0x3b5dc4(0x2f6))[_0x3b5dc4(0x823)]('|'),_0x2d1b2f=0xb2d*0x3+0x25bd+-0x4744;while(!![]){switch(_0x3c31fc[_0x2d1b2f++]){case'0':_0x178b20['style']['left']=_0x259be6[_0x3b5dc4(0x29f)](_0x4937be,'px');continue;case'1':_0xb545ba=Math[_0x3b5dc4(0x135)](-0x75f+0x19f2+-0x128b,Math[_0x3b5dc4(0x67f)]((window['inner'+'Heigh'+'t']||0x1bf0+0x1fdc+0xac*-0x59)-_0xa27cd4-(-0x3*-0xafd+0x1ae3+-0x3bd2),_0xb545ba));continue;case'2':_0xfe887c[_0x3b5dc4(0x1bc)]={'x':_0x4937be,'y':_0xb545ba};continue;case'3':_0x178b20['style'][_0x3b5dc4(0x352)+'m']=_0x3b5dc4(0x509);continue;case'4':_0x178b20[_0x3b5dc4(0x219)][_0x3b5dc4(0x8b3)]=_0x259be6[_0x3b5dc4(0xb9d)];continue;case'5':_0x4937be=Math['max'](-0x1*-0x3d1+0x2b6+-0x67f,Math['min'](_0x259be6[_0x3b5dc4(0x14c)]((window[_0x3b5dc4(0xaaf)+_0x3b5dc4(0x9b3)]||0x1183+-0x1a52+0x8cf)-_0x3c03b3,0x20*-0xf7+-0x127d*0x1+0x3165),_0x4937be));continue;case'6':_0x178b20[_0x3b5dc4(0x219)][_0x3b5dc4(0xac3)]=_0xb545ba+'px';continue;case'7':if(!_0x25eb45)return;continue;case'8':var _0x4937be=(_0x48da6e[_0x3b5dc4(0x712)+'tX']||0xa8+-0x311*-0x1+-0x3b9)-_0x535c8c,_0xb545ba=(_0x48da6e[_0x3b5dc4(0x712)+'tY']||0x16*-0x6b+0x7ff+0x1*0x133)-_0x2c687f;continue;case'9':var _0x3c03b3=_0x178b20[_0x3b5dc4(0xc79)+_0x3b5dc4(0x612)+'h']||0x14e*0xc+0x2630+0x1*-0x336c,_0xa27cd4=_0x178b20['offse'+_0x3b5dc4(0xda2)+'ht']||0x898+-0xdb2+0x6aa;continue;}break;}}},_0x41f91c=function(){var _0x46fa0e=_0x109774;if(!_0x25eb45)return;_0x25eb45=![],_0xd7d77a[_0x46fa0e(0x219)]['curso'+'r']=_0x259be6[_0x46fa0e(0xd7a)],_0x259be6[_0x46fa0e(0x65c)](_0xdb1837);};_0xd7d77a[_0x109774(0xce1)+_0x109774(0x2d3)+_0x109774(0x733)+'r'](_0x5d3ad4[_0x109774(0x77a)],_0xd3360f),window['addEv'+_0x109774(0x2d3)+'stene'+'r'](_0x5d3ad4[_0x109774(0xc96)],_0x22f870),window[_0x109774(0xce1)+_0x109774(0x2d3)+_0x109774(0x733)+'r']('mouse'+'up',_0x41f91c),_0xd7d77a['addEv'+_0x109774(0x2d3)+_0x109774(0x733)+'r']('touch'+_0x109774(0x64e),_0xd3360f,{'passive':![]}),window['addEv'+_0x109774(0x2d3)+_0x109774(0x733)+'r'](_0x109774(0xa6b)+_0x109774(0x308),_0x22f870,{'passive':![]}),window[_0x109774(0xce1)+'entLi'+_0x109774(0x733)+'r'](_0x5d3ad4[_0x109774(0x9a0)],_0x41f91c);}catch(_0x2d5ab5){}}function _0x2cb910(){var _0xcea028=_0xbd7aa9,_0x2a58e2={'lViKl':function(_0x1b948c,_0x5ae253){return _0x1b948c<_0x5ae253;},'uRkqR':_0x5d3ad4['ZndEM'],'tkrtP':function(_0xcc8a94,_0x248d77){return _0xcc8a94===_0x248d77;},'FsxtJ':_0xcea028(0xafc),'yCkaU':function(_0x169deb,_0x599cbe){var _0x4937fb=_0xcea028;return _0x5d3ad4[_0x4937fb(0x44d)](_0x169deb,_0x599cbe);}};if(_0xfe887c[_0xcea028(0x4dd)])return _0xfe887c['root'];try{if(!document['body']||!document[_0xcea028(0x717)][_0xcea028(0x1d9)+_0xcea028(0x493)+'d'])return null;if(!document[_0xcea028(0xd96)+'ement'+_0xcea028(0xcb6)](_0xcea028(0x7f2)+_0xcea028(0x8c9)+_0xcea028(0xa44))){var _0x33c03b=document['creat'+'eElem'+_0xcea028(0x3b7)](_0x5d3ad4[_0xcea028(0xd62)]);_0x33c03b['id']=_0xcea028(0x7f2)+_0xcea028(0x8c9)+_0xcea028(0xa44),_0x33c03b['textC'+'onten'+'t']=_0xac61de,(document['head']||document['docum'+_0xcea028(0x2a8)+'ement'])['appen'+_0xcea028(0x493)+'d'](_0x33c03b);}var _0x469151=_0x6e7c4e(_0x5d3ad4['JvMaW'],_0xcea028(0x222)+'nel');_0x469151['id']=_0x5d3ad4['MhHdO'];var _0x51ed9d=_0x5d3ad4[_0xcea028(0x44f)](_0x6e7c4e,_0xcea028(0x8d7),_0x5d3ad4[_0xcea028(0x3a6)]),_0x1e2cba=_0x5d3ad4[_0xcea028(0xbdc)](_0x6e7c4e,'div',_0xcea028(0x3c4)+'go',_0x5522c5);_0x51ed9d[_0xcea028(0x1d9)+_0xcea028(0x493)+'d'](_0x1e2cba);var _0x542940=_0x6e7c4e(_0x5d3ad4[_0xcea028(0x53a)],_0x5d3ad4[_0xcea028(0x8da)]),_0x49a888=_0x5d3ad4[_0xcea028(0x312)](_0x6e7c4e,'div',_0xcea028(0xd3e)+'p'),_0x56c1cc=_0x5d3ad4[_0xcea028(0x1aa)](_0x6e7c4e,'div',_0xcea028(0xc9d)+'tles'),_0x599cdf=_0x5d3ad4[_0xcea028(0x524)](_0x6e7c4e,_0x5d3ad4[_0xcea028(0x53a)],_0x5d3ad4['Ouuqn'],_0x5d3ad4[_0xcea028(0x716)]),_0x57d6d6=_0x5d3ad4[_0xcea028(0x1f8)](_0x6e7c4e,_0x5d3ad4[_0xcea028(0x53a)],_0xcea028(0x2c6)+'b',_0xcea028(0x64e)+_0xcea028(0x351));_0x56c1cc[_0xcea028(0x1d9)+_0xcea028(0x493)+'d'](_0x599cdf),_0x56c1cc['appen'+'dChil'+'d'](_0x57d6d6);var _0x5daad6=_0x6e7c4e(_0x5d3ad4[_0xcea028(0x53a)],'mn-cl'+_0xcea028(0xd3d),_0x5d3ad4['oTKBA']);_0x5daad6[_0xcea028(0x6d0)+'ck']=function(){_0x4b532c(![]);},_0x49a888['appen'+_0xcea028(0x493)+'d'](_0x56c1cc),_0x49a888['appen'+'dChil'+'d'](_0x5daad6);var _0x53855c=_0x6e7c4e(_0x5d3ad4[_0xcea028(0x53a)],_0xcea028(0x169)+'ls');_0x542940[_0xcea028(0x1d9)+_0xcea028(0x493)+'d'](_0x49a888),_0x542940[_0xcea028(0x1d9)+_0xcea028(0x493)+'d'](_0x53855c),_0x469151['appen'+_0xcea028(0x493)+'d'](_0x51ed9d),_0x469151[_0xcea028(0x1d9)+_0xcea028(0x493)+'d'](_0x542940),document[_0xcea028(0x717)][_0xcea028(0x1d9)+_0xcea028(0x493)+'d'](_0x469151),_0xfe887c[_0xcea028(0x55b)]=_0x469151,_0xfe887c['cols']=_0x53855c,_0xfe887c['head']=_0x599cdf,_0xfe887c['sub']=_0x57d6d6,_0x363f34(),_0x26ae01(),_0x302616(_0x469151,_0x49a888);var _0x1c128d={};for(var _0x4fcb89=-0x606*-0x4+-0x7be*0x1+0x142*-0xd;_0x5d3ad4[_0xcea028(0x866)](_0x4fcb89,_0x370830['lengt'+'h']);_0x4fcb89++){var _0x43a4a4=_0x370830[_0x4fcb89],_0x64e03f=_0x6e7c4e('butto'+'n','mn-ta'+'b',_0x5d3ad4['KIeOe'](_0x5d3ad4[_0xcea028(0x374)](_0x5d3ad4[_0xcea028(0xb31)],_0x43a4a4[_0xcea028(0x1a8)]),_0xcea028(0x4db)+'ll>'));_0x64e03f[_0xcea028(0x6c7)]='butto'+'n',_0x64e03f[_0xcea028(0x320)]=_0x43a4a4[_0xcea028(0x1a8)],function(_0x487af9){_0x64e03f['oncli'+'ck']=function(){var _0x6c3ff5=_0x4565,_0x48acef={'IvkOR':function(_0x44e17d,_0x1c362f){var _0x5cb5e6=_0x4565;return _0x2a58e2[_0x5cb5e6(0x606)](_0x44e17d,_0x1c362f);},'IRnqI':_0x6c3ff5(0x882)};if(_0x6c3ff5(0xc52)===_0x2a58e2['uRkqR'])_0x353ddd(_0x487af9);else{var _0x27a484=_0xa7778a[_0x6c3ff5(0x72f)+_0x6c3ff5(0x5a4)+'dkit']&&_0x4ea173[_0x6c3ff5(0x72f)+'WebMo'+'dkit']['Runti'+'me'],_0x3d30e2=_0x27a484&&_0x27a484[_0x6c3ff5(0x675)+_0x6c3ff5(0x188)+_0x6c3ff5(0x433)+'es']||[],_0x58797e={};for(var _0x3f59f1=0xc69+0x165e*0x1+-0x1*0x22c7;_0x3f59f1<_0x3d30e2['lengt'+'h']&&_0x48acef['IvkOR'](_0x3f59f1,-0x1f84*-0x1+0x2041+0x1d*-0x1a9);_0x3f59f1++){var _0x4bf62d=_0x3d30e2[_0x3f59f1]['param'+'s']['join'](',')+'\x20->\x20'+(_0x3d30e2[_0x3f59f1]['retur'+_0x6c3ff5(0x900)]||_0x48acef[_0x6c3ff5(0xd31)]);_0x58797e[_0x4bf62d]=(_0x58797e[_0x4bf62d]||-0xf11+0x17a3+-0x892)+(0x161*-0x17+0xd9c+-0xf4*-0x13);}_0x35b32d[_0x6c3ff5(0xac9)+_0x6c3ff5(0xa1a)]=_0x58797e;}};}(_0x43a4a4['id']),_0x1c128d[_0x43a4a4['id']]=_0x64e03f,_0x51ed9d[_0xcea028(0x1d9)+_0xcea028(0x493)+'d'](_0x64e03f);}_0xfe887c[_0xcea028(0x93e)+'ns']=_0x1c128d;var _0x5216e4=_0x6e7c4e(_0x5d3ad4[_0xcea028(0x53a)],null,_0x52e5fd);return _0x5216e4['id']=_0x5d3ad4[_0xcea028(0x531)],_0x5216e4[_0xcea028(0x320)]=_0x5d3ad4[_0xcea028(0x71b)],_0x5216e4[_0xcea028(0x6bb)+_0xcea028(0x22e)+'er']=function(){var _0x5eb448=_0xcea028,_0x29a343={'OxZZI':'Runti'+_0x5eb448(0xaad)+_0x5eb448(0xb75)+_0x5eb448(0x4c4)+')'};if('kiGpX'==='uPLDp'){var _0x1275d0=_0x59ad0b['resol'+'veGam'+'e']();if(_0x1275d0)return _0x43d4a1['sourc'+'e']=_0x29a343[_0x5eb448(0x1db)],_0x1275d0;}else _0x5216e4[_0x5eb448(0x219)][_0x5eb448(0x7f0)+'ty']='1';},_0x5216e4[_0xcea028(0x6bb)+'selea'+'ve']=function(){var _0xd0a177=_0xcea028;_0x2a58e2[_0xd0a177(0x611)](_0xd0a177(0x230),_0xd0a177(0xd1a))?_0x2cd8fb=_0x171824(_0x48a26b):_0x5216e4[_0xd0a177(0x219)]['opaci'+'ty']=_0xfe887c[_0xd0a177(0x616)]?'1':'.5';},_0x5216e4[_0xcea028(0x6d0)+'ck']=function(_0x1251a6){var _0xa63062=_0xcea028;if(_0x1251a6&&_0x1251a6['stopP'+'ropag'+'ation'])_0x1251a6[_0xa63062(0xc76)+_0xa63062(0x140)+'ation']();_0x5d3ad4[_0xa63062(0x34c)](_0x4b532c,!_0xfe887c[_0xa63062(0x616)]);},document[_0xcea028(0x717)][_0xcea028(0x1d9)+'dChil'+'d'](_0x5216e4),_0xfe887c[_0xcea028(0x224)]=_0x5216e4,_0x5d3ad4[_0xcea028(0x44f)](setInterval,function(){var _0x2b0cb3=_0xcea028,_0xa796ca={'lzvbU':function(_0x471a30,_0x471308){return _0x471a30===_0x471308;}};if(_0x5d3ad4[_0x2b0cb3(0xb6a)]('IztcT',_0x5d3ad4['HjMZQ']))try{if(_0x5d3ad4[_0x2b0cb3(0x1a7)](_0x2b0cb3(0xb95),_0x2b0cb3(0xb95))){if(!_0xfe887c[_0x2b0cb3(0x224)])return;var _0x198af6=_0x2c891c();_0xfe887c[_0x2b0cb3(0x224)][_0x2b0cb3(0x219)][_0x2b0cb3(0x7f0)+'ty']=_0xfe887c['open']?'1':_0x198af6?'.8':'.28',_0xfe887c['petal'][_0x2b0cb3(0x320)]=_0x198af6?_0x5d3ad4[_0x2b0cb3(0x71b)]:_0x5d3ad4[_0x2b0cb3(0x530)];}else _0x28226e=_0x3a21cb(_0x953a17+_0x3ac123,_0x2a58e2['FsxtJ']),_0x44a430=_0x481c36(_0x2a58e2['yCkaU'](_0x39a913,_0x1b8a96),'f32'),_0x147f85[_0x2b0cb3(0x8b0)+'e']='field'+'\x200x28'+_0x2b0cb3(0xc89)+_0x2b0cb3(0xcca);}catch(_0x1ad2bf){}else{var _0x78adac=_0x4bb44c['slice'](-0x1352*-0x2+0x2261+-0x9*0x81d,0x6bb+-0x1461+0xed2);if(_0xa796ca['lzvbU'](_0x5e6752['index'+'Of'](_0x78adac),-(-0x1*-0x250f+-0xb7a+-0x1994))&&_0x46bae9[_0x2b0cb3(0x711)+'h']<-0x4*-0x282+0x242*0x5+-0x1*0x1516)_0x3ee215[_0x2b0cb3(0x97d)](_0x78adac);}},0x193b*-0x1+0x13e+0x1*0x1ab9),_0xfe887c['built']=!![],_0x353ddd(_0xfe887c['cat']),_0x469151;}catch(_0x4374ee){if(_0x5d3ad4['AEUfo'](_0x5d3ad4[_0xcea028(0xbb1)],_0xcea028(0xbdb))){var _0x380cc4=_0x377d94['resol'+'veGam'+'e']();if(_0x380cc4)return _0x1b65bf[_0xcea028(0x8b0)+'e']=_0xcea028(0xd9e)+_0xcea028(0xd27)+'ntime'+_0xcea028(0x813)+'lveGa'+'me()',_0x380cc4;}else return console[_0xcea028(0xb06)](_0x5d3ad4[_0xcea028(0x2c4)],_0xcea028(0xd11)+':'+_0x1f5356,_0x4374ee),null;}}function _0x353ddd(_0x3f4deb){var _0x103c18=_0xbd7aa9,_0x45c675={'AwTBx':function(_0x20ccb2,_0x34b9f3){return _0x5d3ad4['BspEc'](_0x20ccb2,_0x34b9f3);}};if(_0x103c18(0x964)!=='JHkLt'){_0xfe887c[_0x103c18(0x4bf)]=_0x3f4deb,_0xfe887c[_0x103c18(0xb41)]=[];if(!_0xfe887c[_0x103c18(0x599)])return;var _0x7939e=null;for(var _0x1479f9=-0x2d0+-0x742+0xa12;_0x1479f9<_0x370830[_0x103c18(0x711)+'h'];_0x1479f9++)if(_0x370830[_0x1479f9]['id']===_0x3f4deb)_0x7939e=_0x370830[_0x1479f9];_0xfe887c['head']['textC'+'onten'+'t']=_0x103c18(0x758)+_0x103c18(0x73c)+_0x103c18(0x5f8)+_0x103c18(0x193)+(_0x7939e&&_0x7939e[_0x103c18(0x1a8)]||'?');for(var _0x24a3f9 in _0xfe887c['butto'+'ns']){if(_0xfe887c['butto'+'ns'][_0x24a3f9]['class'+_0x103c18(0xcc5)])_0xfe887c['butto'+'ns'][_0x24a3f9]['class'+_0x103c18(0x6b2)]='mn-ta'+'b'+(_0x24a3f9===_0x3f4deb?_0x5d3ad4[_0x103c18(0x92d)]:'');}var _0x1741a8=[];try{if('RfLqg'!==_0x5d3ad4[_0x103c18(0x9cf)]){if(!_0x5e1b3d[_0x103c18(0x717)]||!_0x319f66[_0x103c18(0x717)][_0x103c18(0x1d9)+_0x103c18(0x493)+'d'])return null;var _0x4f5606=_0x144e82['creat'+_0x103c18(0xd90)+'ent']('div');_0x4f5606['id']=_0x5d3ad4['psXbK'],_0x4f5606[_0x103c18(0x219)][_0x103c18(0x622)+'xt']=_0x5d3ad4['TDeLc'](_0x5d3ad4['gJXIt'](_0x5d3ad4[_0x103c18(0x5f6)](_0x5d3ad4[_0x103c18(0xd9d)],_0x5d3ad4[_0x103c18(0xc9c)]),_0x5d3ad4['bkdYL']),_0x5d3ad4['kwxNf']),_0x4f5606[_0x103c18(0xaaf)+_0x103c18(0x723)]=_0x5d3ad4['Jdhfk']+_0x5d3ad4[_0x103c18(0x87f)];var _0x200572={'cv':{'getContext':function(){return null;}},'el':_0x4f5606};_0x42f7df['body']['appen'+_0x103c18(0x493)+'d'](_0x4f5606),_0x17b78e={'el':_0x4f5606,'cv':_0x4f5606[_0x103c18(0x37d)+_0x103c18(0x636)+_0x103c18(0xb79)](_0x103c18(0x62b)+_0x103c18(0x277)+_0x103c18(0x147)),'lg':_0x4f5606['query'+_0x103c18(0x636)+_0x103c18(0xb79)](_0x103c18(0x62b)+_0x103c18(0x277)+_0x103c18(0xd36))};if(!_0x5aedf3['cv']||!_0x2834d8['cv']['getCo'+_0x103c18(0xbd1)])_0x566d52=_0x200572;return _0x2898a1;}else _0x1741a8=_0x57b043(_0x3f4deb);}catch(_0x4eddb3){_0x1741a8=[];}while(_0xfe887c['cols']['first'+'Child'])_0xfe887c['cols'][_0x103c18(0xb48)+_0x103c18(0x698)+'d'](_0xfe887c['cols'][_0x103c18(0x8a7)+_0x103c18(0x591)]);for(var _0x3d175f=-0x2604+-0x1*0x11ea+0x37ee*0x1;_0x3d175f<_0x1741a8['lengt'+'h'];_0x3d175f++)_0xfe887c[_0x103c18(0x599)]['appen'+_0x103c18(0x493)+'d'](_0x1741a8[_0x3d175f]);}else _0x45c675['AwTBx'](_0x4b8664['getIt'+'em'](_0x5a72dc),null)&&(_0x547333['remov'+_0x103c18(0xb47)](_0x35ea28),_0x396a25=!![]);}function _0x4b532c(_0x545796){var _0x594f79=_0xbd7aa9;_0xfe887c[_0x594f79(0x616)]=!!_0x545796;var _0x4c6933=_0x2cb910();if(!_0x4c6933)return;_0x4c6933[_0x594f79(0xae4)+_0x594f79(0x6b2)]=_0x5d3ad4[_0x594f79(0x6c0)](_0x5d3ad4[_0x594f79(0x3cc)],_0xfe887c[_0x594f79(0x616)]?_0x5d3ad4[_0x594f79(0x7a7)]:'');if(_0xfe887c[_0x594f79(0x224)])_0xfe887c[_0x594f79(0x224)][_0x594f79(0x219)]['opaci'+'ty']=_0xfe887c[_0x594f79(0x616)]?'1':'.5';if(_0xfe887c['open']){_0x5d3ad4[_0x594f79(0xab6)](_0x353ddd,_0xfe887c[_0x594f79(0x4bf)]);try{var _0x943198=window['inner'+_0x594f79(0x5c6)+'t']||0x12e9*0x2+-0x1*-0xa21+-0xff*0x2d;if(_0x5d3ad4['ZDUMf'](_0x943198,-0x16e+0x1172+0x2*-0x6cc))_0x5d3ad4[_0x594f79(0x52d)](_0x576758,![]);}catch(_0x128a10){}}}function _0x222db0(){var _0x51a989=_0xbd7aa9,_0x160bad={'RDQPG':'3|0|2'+_0x51a989(0x440),'zUceh':_0x51a989(0x62b)+'ra-sw'+_0x51a989(0xa10)+_0x51a989(0xb10)+'itial'+'}','snvlZ':function(_0x338e79,_0x380c7a){var _0x1a9263=_0x51a989;return _0x5d3ad4[_0x1a9263(0x8de)](_0x338e79,_0x380c7a);},'iLelW':function(_0x4f050c,_0x3a77e3){return _0x5d3ad4['MuWYb'](_0x4f050c,_0x3a77e3);}};if(_0x5d3ad4[_0x51a989(0x9b6)](_0x5d3ad4[_0x51a989(0x569)],_0x51a989(0x761))){if(!_0x2a3815[_0x2f3d0a])_0x3d3531[_0x2d056c]={'ptr':_0x33a7f,'kind':_0xc3a3d5,'firstSeen':_0x3b1d62['now'](),'hits':0x0};_0x51cd94[_0x492ccd][_0x51a989(0xc0d)]++;}else{if(!_0xfe887c[_0x51a989(0x616)]||!_0xfe887c[_0x51a989(0x4dd)])return;try{if(_0x5d3ad4['TLOYV'](_0x5d3ad4[_0x51a989(0x2af)],_0x5d3ad4[_0x51a989(0xdb2)])){if(_0x5d3ad4[_0x51a989(0xae8)](_0x495db9,_0x5d3ad4[_0x51a989(0x191)])){_0x2aeeb6(_0x5af393&&_0x5d3ad4[_0x51a989(0x6f8)](typeof _0x3b3a8b['on'],_0x5d3ad4['fUXXi'])?_0xf8e404['on']:_0x4ea4f2['on'],_0x18641a&&typeof _0x648b92[_0x51a989(0x292)+'r']===_0x51a989(0x4a5)+'r'?_0x1ffae6[_0x51a989(0x292)+'r']:_0x479b04[_0x51a989(0x292)+'r']);return;}if(_0x122dad!==_0x5d3ad4[_0x51a989(0xd10)])return;var _0x470688=_0x33fc48(),_0x261b1d=_0xb176b(_0x470688),_0xd2c54=_0x5d3ad4[_0x51a989(0x536)](_0x19b059);for(var _0x11f5e0 in _0xd2c54)_0x261b1d[_0x11f5e0]=_0xd2c54[_0x11f5e0];if(!_0x4cd17e){_0x505006=_0x261b1d,_0x3777ac=[],_0x4520cf(_0x5d3ad4[_0x51a989(0x730)],{'report':_0x2e4c60()});return;}_0x4f9b87=[];for(var _0x30aed8 in _0x261b1d){var _0x14dd7a=_0x5e9ec0[_0x30aed8],_0x3765ca=_0x261b1d[_0x30aed8];if(_0x5d3ad4[_0x51a989(0x671)](_0x14dd7a,_0x3765ca))_0x50e258['push'](_0x5d3ad4[_0x51a989(0x31e)](_0x5d3ad4[_0x51a989(0x2b3)](_0x30aed8+':\x20',_0x14dd7a),_0x51a989(0x967))+_0x3765ca);}_0x58d6b2=_0x261b1d,_0x5e10e0(_0x5d3ad4['oRoRL'],{'report':_0x5d3ad4['bERcM'](_0xb1aa9b)});}else{for(var _0x3fd727=0x5d*-0x2b+0x621*0x2+0x35d;_0x5d3ad4[_0x51a989(0x1bd)](_0x3fd727,_0xfe887c['syncs']['lengt'+'h']);_0x3fd727++){if(_0x5d3ad4[_0x51a989(0x4be)]!=='vfRta'){var _0x324d61=_0x160bad[_0x51a989(0x331)]['split']('|'),_0x1d815f=-0x61b*-0x6+-0x9b2+-0x35e*0x8;while(!![]){switch(_0x324d61[_0x1d815f++]){case'0':_0x16699d=_0x55e938[_0x51a989(0x357)+_0x51a989(0xd90)+'ent']('div');continue;case'1':return _0x4f82b;case'2':_0x4cfdfb['id']=_0x51a989(0x7f2)+'a-sw-'+'v2';continue;case'3':if(!_0x44ba70['getEl'+_0x51a989(0xbfa)+'ById'](_0x51a989(0x7f2)+_0x51a989(0x972)+_0x51a989(0x43b)+'s')){var _0x4af378=_0x41fedb['creat'+_0x51a989(0xd90)+_0x51a989(0x3b7)]('style');_0x4af378['id']=_0x51a989(0x7f2)+_0x51a989(0x972)+_0x51a989(0x43b)+'s',_0x4af378[_0x51a989(0x754)+_0x51a989(0xda5)+'t']=_0x160bad['zUceh'],(_0x4ab6d4[_0x51a989(0x6db)]||_0x117ce7['docum'+'entEl'+_0x51a989(0xbfa)])[_0x51a989(0x1d9)+'dChil'+'d'](_0x4af378);}continue;case'4':_0x2d9fda['body']['appen'+_0x51a989(0x493)+'d'](_0xabe9c9);continue;}break;}}else try{_0x5d3ad4['JbBJC'](_0x51a989(0x6d3),_0x5d3ad4['wdYrj'])?_0xfe887c[_0x51a989(0xb41)][_0x3fd727]():_0x124e84['preve'+'ntDef'+_0x51a989(0x501)]();}catch(_0x5507e7){}}var _0x4ab0a2=_0x8071f9;_0xfe887c[_0x51a989(0x1c1)][_0x51a989(0x754)+'onten'+'t']=_0x4ab0a2?_0x5d3ad4[_0x51a989(0x375)](_0x5d3ad4[_0x51a989(0x8d0)](_0x5d3ad4[_0x51a989(0x3fb)](_0x5d3ad4[_0x51a989(0xd05)](_0x5d3ad4[_0x51a989(0x2ae)](_0x5d3ad4[_0x51a989(0x510)]('v',_0x4ab0a2['versi'+'on']),_0x51a989(0x28d)+_0x51a989(0x91c)+'\x20')+_0x4ab0a2[_0x51a989(0x91c)+_0x51a989(0x394)+'ed']+'/',_0x4ab0a2[_0x51a989(0x91c)+_0x51a989(0x4b5)]),'\x20\x20·\x20\x20'+_0x51a989(0x576)+_0x51a989(0x42d))+(_0x4ab0a2[_0x51a989(0x358)]&&_0x4ab0a2[_0x51a989(0x358)][_0x51a989(0x576)+_0x51a989(0x9d2)+'t']||0x10e0+-0x5*0x5ea+0xcb2),_0x51a989(0x28d)+'heap\x20'),_0x4ab0a2[_0x51a989(0xd92)+_0x51a989(0xd7f)]&&_0x4ab0a2['wasmM'+_0x51a989(0xd7f)]['captu'+_0x51a989(0x236)]?_0x5d3ad4[_0x51a989(0x3f9)](Math['round'](_0x4ab0a2[_0x51a989(0xd92)+_0x51a989(0xd7f)][_0x51a989(0x94f)]/(-0x70ef6*-0x2+-0x11f061+0x13d275)),'MB'):'-'):_0x5d3ad4['HkPLf'];var _0x244f8c=_0xfe887c[_0x51a989(0x599)]['query'+_0x51a989(0x636)+'torAl'+'l']?_0xfe887c[_0x51a989(0x599)][_0x51a989(0x37d)+'Selec'+_0x51a989(0x9a1)+'l'](_0x51a989(0x7a2)+'-k]'):[];for(var _0x213748=0x442*0x3+-0xbeb*0x2+0x18*0x76;_0x213748<_0x244f8c[_0x51a989(0x711)+'h'];_0x213748++){var _0x5a4418=_0x244f8c[_0x213748][_0x51a989(0x60c)+'et']['k'],_0x3f0307='';if(_0x5a4418===_0x51a989(0x22d)+'ON')_0x3f0307=_0x4ab0a2?_0x4ab0a2[_0x51a989(0xb3b)+'on']:'-';else{if(_0x5d3ad4[_0x51a989(0x58b)](_0x5a4418,_0x51a989(0x69b)+_0x51a989(0xaed)+_0x51a989(0x547)+_0x51a989(0x206)))_0x3f0307=_0x4ab0a2?_0x5d3ad4['Gbfee'](_0x4ab0a2['hooks'+_0x51a989(0x394)+'ed']+'\x20/\x20',_0x4ab0a2[_0x51a989(0x91c)+_0x51a989(0xa45)+_0x51a989(0x206)+_0x51a989(0x16d)]):'-';else{if(_0x5d3ad4[_0x51a989(0xd87)](_0x5a4418,_0x5d3ad4['xpRYM']))_0x3f0307=_0x4ab0a2&&_0x4ab0a2[_0x51a989(0xd92)+'emory']&&_0x4ab0a2[_0x51a989(0xd92)+'emory'][_0x51a989(0xaa7)+'red']?_0x5d3ad4['eFtqB'](_0x5d3ad4['BaUyr'](_0x5d3ad4[_0x51a989(0x16b)](Math[_0x51a989(0xbda)](_0x5d3ad4['tzaEV'](_0x4ab0a2[_0x51a989(0xd92)+_0x51a989(0xd7f)]['bytes'],0x6*-0x24b6f+0xb*0xa563+0x16a959)),_0x51a989(0x2b6)+'\x20'),_0x4ab0a2['wasmM'+'emory'][_0x51a989(0xaa5)]),'ms'):'-';else{if(_0x5a4418==='Photo'+_0x51a989(0x65f)+_0x51a989(0xd00)+'nc')_0x3f0307=_0x4ab0a2&&_0x4ab0a2[_0x51a989(0x358)]?String(_0x4ab0a2[_0x51a989(0x358)][_0x51a989(0x576)+_0x51a989(0x9d2)+'t']):'-';else{if(_0x5d3ad4['xZytO'](_0x5a4418,_0x5d3ad4[_0x51a989(0x24e)]))_0x3f0307=_0x4ab0a2&&_0x4ab0a2['esp']?String(_0x4ab0a2[_0x51a989(0x358)][_0x51a989(0xb80)+'Count']):'-';else{if(_0x5a4418===_0x5d3ad4[_0x51a989(0xd2b)])_0x3f0307=_0x4ab0a2&&_0x4ab0a2[_0x51a989(0x358)]&&_0x4ab0a2['esp'][_0x51a989(0x32a)+'a']?_0x5d3ad4[_0x51a989(0x44d)](_0x5d3ad4['vKeuE'](_0x4ab0a2['esp'][_0x51a989(0x32a)+'a']+'\x20(',_0x4ab0a2[_0x51a989(0x358)]['camer'+'aFrom']),')'):'-';else{if(_0x5a4418===_0x5d3ad4[_0x51a989(0x541)])_0x3f0307=_0x4ab0a2&&_0x4ab0a2[_0x51a989(0x966)]&&_0x4ab0a2['local'][_0x51a989(0xa28)]?_0x4ab0a2[_0x51a989(0x966)]['feet'][_0x51a989(0x562)](function(_0x1789e3){var _0x46eb1c=_0x51a989;return Math['round'](_0x160bad[_0x46eb1c(0x8f9)](_0x1789e3,-0xeb+0x26c3*0x1+-0x2574))/(0x94*0x29+-0x17b3+0x1*0x63);})['join']('\x20\x20'):'-';else{if(_0x5a4418===_0x51a989(0x23f)+'8')_0x3f0307=_0x4ab0a2&&_0x4ab0a2['local']&&_0x4ab0a2[_0x51a989(0x966)][_0x51a989(0xb97)]?_0x4ab0a2['local'][_0x51a989(0xb97)]['map'](function(_0x167398){var _0x5e82b3=_0x51a989;return _0x160bad[_0x5e82b3(0xaf7)](Math[_0x5e82b3(0xbda)](_0x167398*(0x1fe2+-0x958*-0x1+0x146b*-0x2)),0x1*-0x206a+-0x1920+0x39ee);})['join']('\x20\x20'):'-';else{var _0x65318a=_0x5a4418[_0x51a989(0x823)]('+');_0x3f0307=_0x5d3ad4[_0x51a989(0x3a0)](_0x3b99bf,_0x4ab0a2,_0x65318a[0x23de+0x12e3+0x83*-0x6b][_0x51a989(0x8f1)+'Of'](_0x5d3ad4[_0x51a989(0x31f)])===-0xe*-0x2ae+0x1a5c+0x1ff0*-0x2?_0x51a989(0x170)+_0x51a989(0x914)+'pt':_0x51a989(0x529)+'ntrol'+_0x51a989(0x303),_0x5d3ad4['tNIoi'](parseInt,_0x65318a[0x2b3+-0x25*-0x2b+0x8e9*-0x1],0x296*-0x5+0xdf8+0x7d*-0x2));}}}}}}}}if(_0x3f0307!==_0x244f8c[_0x213748][_0x51a989(0x754)+_0x51a989(0xda5)+'t'])_0x244f8c[_0x213748]['textC'+_0x51a989(0xda5)+'t']=_0x3f0307;}}}catch(_0x291fa9){}}}function _0x14e367(){var _0x2b3c6e=_0xbd7aa9,_0x26c892={'Vuiru':function(_0x132e3b){var _0x147958=_0x4565;return _0x5d3ad4[_0x147958(0x536)](_0x132e3b);}};try{if(_0x5d3ad4[_0x2b3c6e(0xb8d)](_0x2b3c6e(0x916),_0x5d3ad4[_0x2b3c6e(0x241)])){var _0x17d099=_0x19e213();return _0x17d099&&_0x17d099['feet']?_0x17d099['feet'][-0x1e6d*0x1+-0x1f18*0x1+-0x32*-0x13b]:null;}else _0x48442d=_0x26c892[_0x2b3c6e(0x7c3)](_0x355dfa);}catch(_0x4384aa){return null;}}var _0x3bc29e=-0xfef*0x2+-0x20ae+0x408e*0x1+0.5,_0x30462c=0x1*-0x1c99+0x1f49+-0x2aa+0.25,_0x3bd7ad={},_0x47a344=null,_0xb6b964=-0x2*-0xffd+0x18c7+-0x1c6*0x20+0.8;function _0x4c192b(_0xa20dfd,_0x104af4,_0x24550f){var _0x355618=_0xbd7aa9;if(_0x5d3ad4[_0x355618(0x254)]!==_0x355618(0x8b9)){var _0x2fcbb0=_0x1ff73a[_0x355618(0x143)+'em'](_0x5dfcaf);if(!_0x2fcbb0)return;var _0x263fcb=_0x1e0ce6[_0x355618(0x51b)](_0x2fcbb0);if(_0x263fcb&&typeof _0x263fcb['x']===_0x355618(0x4a5)+'r'&&_0x5d3ad4[_0x355618(0x2e2)](typeof _0x263fcb['y'],_0x355618(0x4a5)+'r'))_0x10a867[_0x355618(0x1bc)]=_0x263fcb;}else try{var _0x426b03=[],_0x400790,_0xa463cb,_0x4f4eec=_0x5d3ad4[_0x355618(0x419)](_0x104af4,null)&&_0x104af4!==undefined&&isFinite(_0x104af4),_0x1ac1f9=0x535+0x2*-0x7bb+0xa41;for(_0x400790=-0x4*-0x279+-0x26ba+0x1cd6;_0x400790<_0xa20dfd['lengt'+'h'];_0x400790++){var _0x5ce6c6=_0xa20dfd[_0x400790]['v'];if(!_0x5ce6c6)continue;var _0x574f00=Math[_0x355618(0xcdd)](_0x5d3ad4['JQNOG'](_0x5ce6c6[-0x9d*0x17+-0x2a*-0x1a+0x9d7],_0x5ce6c6[0xb8d+-0x2304+0x1777])+_0x5ce6c6[0x94*-0x36+0xbd+0x1e7d]*_0x5ce6c6[-0xa*0x121+-0x2425+0x2f71]);if(_0x5d3ad4['YUOBS'](_0x574f00,_0x1ac1f9))_0x1ac1f9=_0x574f00;}var _0x26e7ab=_0x1ac1f9*(0xfcc+-0x368+-0x2*0x632+0.25),_0x112aa1=0xd4b*0x2+-0x26ce+0xc38;typeof console!==_0x5d3ad4[_0x355618(0xb57)]&&console['log']&&!globalThis[_0x355618(0xa3b)+_0x355618(0xcc9)]&&(globalThis[_0x355618(0xa3b)+'ogged']=0x13*-0x65+-0x3*0x3e3+-0x9*-0x221,console[_0x355618(0xade)](_0x5d3ad4['YXuiy'](_0x5d3ad4['TMJzV'](_0x5d3ad4['UNvhN'](_0x5d3ad4[_0x355618(0x7d8)](_0x5d3ad4[_0x355618(0xb67)](_0x355618(0xa8f)+'n=',_0xa20dfd['lengt'+'h']),_0x355618(0x346)+'h=')+_0x1ac1f9['toFix'+'ed'](0xd17*0x1+0x1*0x19e4+-0x1*0x26f9),_0x355618(0x836)+'r=')+_0x26e7ab['toFix'+'ed'](-0x2558+-0x981+0x2edb),_0x355618(0x7b1)+'n='),_0x4f4eec)+_0x5d3ad4['HOnjN']+JSON['strin'+_0x355618(0x79c)](_0xa20dfd[_0x355618(0xd2d)](0x1*-0xf3a+0x20*0x131+-0x16e6,-0x638+0x1869+-0x122f))));for(_0x400790=-0x1a25+0x188a+0x19b*0x1;_0x400790<_0xa20dfd[_0x355618(0x711)+'h'];_0x400790++){if(_0x355618(0xc5b)!==_0x355618(0xc5b)){var _0x5779fd=_0x5d3ad4['Uylkz'](_0x12bf7c);if(_0x5779fd&&_0x5779fd[_0x355618(0xbbb)+'e']&&_0x5779fd['Modul'+'e']['HEAPU'+'8']&&_0x5779fd[_0x355618(0xbbb)+'e']['HEAPU'+'8'][_0x355618(0x2d5)+'r'])return _0x5779fd[_0x355618(0xbbb)+'e']['HEAPU'+'8'];}else{var _0x5d954f=_0xa20dfd[_0x400790]['v'];if(!_0x5d954f)continue;if(_0x5d954f[0xb7f+-0xcf5+0x176*0x1]===-0x12d1*0x1+0x220e+-0x2f*0x53&&_0x5d3ad4['ycohr'](_0x5d954f[-0x1790+0xc*-0xbc+-0x399*-0x9],0x606+-0x1*0x17bd+-0x38b*-0x5)&&_0x5d954f[-0x1e5c+0x1a15+0x449]===0x424+0x70*-0x4d+-0x3d*-0x7c)continue;var _0x3ceb2e=Math['sqrt'](_0x5d954f[-0x1*-0x74b+-0x1b24+-0x1*-0x13d9]*_0x5d954f[0x395*0x2+0xf4a+-0x1*0x1674]+_0x5d954f[-0xe7f*0x1+-0x1323+-0x1*-0x21a4]*_0x5d954f[-0x22cf+-0x2324+0x45f5]);if(_0x3ceb2e<_0x26e7ab){_0x112aa1++;continue;}_0x426b03[_0x355618(0x97d)](_0xa20dfd[_0x400790]);}}if(!_0x426b03['lengt'+'h'])return{'pos':null,'posAt':null,'candidates':0x0,'cluster':0x0,'groups':0x0,'discarded':_0x112aa1,'ambiguous':![],'reach':0x0,'held':![]};var _0x24bdc4=[];for(_0x400790=-0x5b*0x7+0x10ef+-0x2*0x739;_0x400790<_0x426b03[_0x355618(0x711)+'h'];_0x400790++){var _0x28df41=_0x426b03[_0x400790]['v'],_0x32b0fb=-(0xdb+0x1af5+-0x945*0x3);for(_0xa463cb=0x3d2*-0x7+0x1*-0x2fc+-0x5f2*-0x5;_0xa463cb<_0x24bdc4['lengt'+'h'];_0xa463cb++){var _0x3d9525=_0x24bdc4[_0xa463cb]['c'][-0xe99+0xd50+-0x1*-0x149]['v'],_0x53f252=_0x28df41[-0x1*-0x457+-0xe5*-0x1a+-0x1b99]-_0x3d9525[-0x62*0x3e+0xdc7*0x2+-0x1e9*0x2],_0x48b4f8=_0x5d3ad4['QhANI'](_0x28df41[-0x1f5b+-0x19bc*-0x1+0x28*0x24],_0x3d9525[-0x957*0x2+-0x202a*-0x1+-0x11*0xcb]),_0xba5ba0=_0x28df41[-0x1f*-0x5d+-0x26b*0x9+0xa82]-_0x3d9525[-0xaa1+0x2099+-0x15f6];if(_0x5d3ad4['HONZG'](_0x53f252*_0x53f252,_0x48b4f8*_0x48b4f8)+_0xba5ba0*_0xba5ba0<=_0x30462c){if('axvtQ'===_0x355618(0xc53))return{'w':0x0,'h':0x0};else{_0x32b0fb=_0xa463cb;break;}}}if(_0x5d3ad4['XtjLV'](_0x32b0fb,-(-0x1bd4+-0x92*-0x25+0x6bb)))_0x24bdc4['push']({'c':[_0x426b03[_0x400790]]});else _0x24bdc4[_0x32b0fb]['c']['push'](_0x426b03[_0x400790]);}var _0x199e85=_0x24bdc4[0xc58+0xec8+-0x1b20],_0x3fb0cb=-Infinity;for(_0xa463cb=0x561+-0x1f*0x12a+0x1eb5;_0xa463cb<_0x24bdc4[_0x355618(0x711)+'h'];_0xa463cb++){var _0x579d69=_0x24bdc4[_0xa463cb]['c'],_0x39dbde=_0x579d69[_0x355618(0x711)+'h']*(0xa2+-0x1*-0x7b5+0x5*-0xe3);if(_0x4f4eec){var _0x1bda72=Infinity;for(var _0x183e47=0x21ca+0xa8f+-0x2c59;_0x5d3ad4['BmJIH'](_0x183e47,_0x579d69[_0x355618(0x711)+'h']);_0x183e47++){var _0x18d84d=Math['abs'](_0x579d69[_0x183e47]['v'][-0x57*0x63+-0x41*0x80+0x4226]-_0x104af4);if(_0x18d84d<_0x1bda72)_0x1bda72=_0x18d84d;}_0x39dbde-=_0x1bda72;}else{var _0x1d7c3e=-0x1*-0x2661+0x67a+-0x2cdb*0x1;for(var _0x5ef0a0=0xf9a+0x1e0e+0x2*-0x16d4;_0x5d3ad4['IfniV'](_0x5ef0a0,_0x579d69[_0x355618(0x711)+'h']);_0x5ef0a0++){if(_0x5d3ad4[_0x355618(0xadb)]===_0x5d3ad4[_0x355618(0xadb)]){var _0x542bff=Math['sqrt'](_0x579d69[_0x5ef0a0]['v'][0x2*0x657+0x2528+0x1*-0x31d6]*_0x579d69[_0x5ef0a0]['v'][0xa*-0x373+-0x1930+0x3bae]+_0x579d69[_0x5ef0a0]['v'][0xee5+0x6d*0x33+-0x249a]*_0x579d69[_0x5ef0a0]['v'][-0x1361*-0x1+-0x16f4+0x395*0x1]);if(_0x5d3ad4['MbUYg'](_0x542bff,_0x1d7c3e))_0x1d7c3e=_0x542bff;}else{_0x438b9f[_0x355618(0xbaf)+_0x355618(0x53b)+'ault'](),_0x1aee04[_0x355618(0xa0d)]=_0x294cc0['min'](0x8fe+0x2c1+-0xb33,_0x36fcb1[_0x355618(0xa0d)]+(0xcd+0x1f6+-0x2f*0xf)),_0x3740c4();return;}}_0x39dbde+=_0x1d7c3e;}_0x39dbde>_0x3fb0cb&&(_0x3fb0cb=_0x39dbde,_0x199e85=_0x24bdc4[_0xa463cb]);}var _0x5eb84f=_0x199e85['c'][-0xce0+-0x2016+0x2cf6],_0x412640=-(-0xe98*-0x2+0x251d+-0x424c);for(_0xa463cb=-0xd15+0x1044+-0x32f;_0xa463cb<_0x199e85['c'][_0x355618(0x711)+'h'];_0xa463cb++){var _0x1bb1b8=_0x199e85['c'][_0xa463cb]['v'],_0xd4d27b=Math[_0x355618(0xcdd)](_0x1bb1b8[0x11b2+0x241c*0x1+-0x35ce]*_0x1bb1b8[0x2*-0x409+0x2*0x837+-0x85c]+_0x5d3ad4[_0x355618(0x27a)](_0x1bb1b8[0x5e*-0x43+0xf15+0x1*0x987],_0x1bb1b8[-0x1193+0x1c9d+-0x161*0x8]));(_0xd4d27b>_0x412640||_0x5d3ad4[_0x355618(0xc10)](_0xd4d27b,_0x412640)&&_0x1bb1b8[-0x7f*0x35+0x103d*-0x1+0x2a89]<_0x5eb84f['v'][-0xdcd+0x143+0xc8b])&&(_0x412640=_0xd4d27b,_0x5eb84f=_0x199e85['c'][_0xa463cb]);}var _0x4027d3=![];if(_0x24550f&&_0x24550f['o'])for(_0xa463cb=0x113f+-0x121+-0x101e;_0x5d3ad4['oUazB'](_0xa463cb,_0x199e85['c'][_0x355618(0x711)+'h']);_0xa463cb++){if(_0x5d3ad4['msmiB'](_0x199e85['c'][_0xa463cb]['o'],_0x24550f['o']))continue;_0x5eb84f=_0x199e85['c'][_0xa463cb],_0x412640=Math['sqrt'](_0x5d3ad4[_0x355618(0x932)](_0x5d3ad4['ptqBa'](_0x5eb84f['v'][0x5*0x322+0x6e3*0x1+0x17*-0xfb],_0x5eb84f['v'][0x6*0x86+-0x7a3+0x47f]),_0x5eb84f['v'][-0x1c1*0x5+0x22e9+-0x1a22]*_0x5eb84f['v'][0xc7a*-0x1+-0x1*-0x1b9f+0x5*-0x307])),_0x4027d3=!![];break;}return{'pos':_0x5eb84f['v'],'posAt':_0x5eb84f['o'],'candidates':_0x426b03[_0x355618(0x711)+'h'],'cluster':_0x199e85['c']['lengt'+'h'],'groups':_0x24bdc4['lengt'+'h'],'held':_0x4027d3,'discarded':_0x112aa1,'ambiguous':_0x24bdc4['lengt'+'h']>-0x1edc+-0x12f1+-0x1e*-0x1a9,'reach':_0x412640};}catch(_0xc788e2){return console[_0x355618(0xade)](_0x5d3ad4['YtlhN'],_0xc788e2[_0x355618(0x200)+'ge'],_0x5d3ad4[_0x355618(0x446)](String,_0xc788e2['stack']||'')[_0x355618(0x823)]('\x0a')[_0x355618(0xd2d)](-0x2252+-0x577*0x1+0x69*0x61,-0x11a6+0x1ebf+0x1*-0xd15)[_0x355618(0x8ca)](_0x5d3ad4['YuPcB'])),{'pos':null,'posAt':null,'candidates':0x0,'cluster':0x0,'groups':0x0,'held':![],'discarded':0x0,'ambiguous':![],'reach':0x0};}}function _0x19e213(){var _0x171a67=_0xbd7aa9,_0x30dc68={'JVlBE':_0x5d3ad4['smAdB'],'wqyyb':function(_0x46aa50,_0x355f1e){return _0x46aa50===_0x355f1e;},'enNRQ':function(_0x464581,_0x3f9907){var _0x3a8eb4=_0x4565;return _0x5d3ad4[_0x3a8eb4(0x297)](_0x464581,_0x3f9907);}},_0x47a60b=_0xbc0808[_0x171a67(0x529)+_0x171a67(0xd56)+_0x171a67(0x303)];if(!_0x47a60b||!_0x47a60b['ptr'])return null;var _0x1dda00=_0x17a0ac['FPSco'+_0x171a67(0xd56)+'ler']||[],_0x31c34d=[];for(var _0x81b5eb=-0x1*-0x14b0+-0x266+-0x1*0x124a;_0x81b5eb<_0x1dda00['lengt'+'h'];_0x81b5eb++){if(_0x5d3ad4[_0x171a67(0xc2e)](_0x5d3ad4['YOKKa'],_0x5d3ad4[_0x171a67(0xc9a)]))return null;else{if(_0x1dda00[_0x81b5eb][-0x10c1*-0x1+-0x2*0x8b8+0x16*0x8]!=='v3')continue;var _0xacf745=_0x5d3ad4[_0x171a67(0xba0)](_0x318e53,_0x47a60b[_0x171a67(0x41f)],_0x1dda00[_0x81b5eb][-0x1*0xdd3+-0x1f6*-0xe+-0xda1*0x1],0xea*0x8+0x6ca+-0xe17);if(_0xacf745)_0x31c34d['push']({'o':_0x5d3ad4['JaWSf']('0x',_0x1dda00[_0x81b5eb][-0x21d6+0x1b89+-0x64d*-0x1]['toStr'+_0x171a67(0x30e)](0xc7*-0x14+-0x5e1+-0x1*-0x157d)),'v':_0xacf745});}}var _0x1ee6ac=_0x5d3ad4['JdwaY'](_0x4c192b,_0x31c34d,null,_0x47a344);if(!_0x1ee6ac[_0x171a67(0x1bc)])return null;_0x47a344=_0x1ee6ac[_0x171a67(0x7cd)]?{'o':_0x1ee6ac[_0x171a67(0x7cd)]}:null;var _0x54ee8b=_0x1ee6ac['pos'];return{'ptr':_0x47a60b[_0x171a67(0x41f)],'feet':_0x54ee8b,'posAt':_0x1ee6ac[_0x171a67(0x7cd)],'candidates':_0x1ee6ac['candi'+'dates'],'cluster':_0x1ee6ac['clust'+'er'],'copies':_0x31c34d[_0x171a67(0x45f)+'r'](function(_0x55cc7f){var _0x3eb81c=_0x171a67;if(_0x30dc68['JVlBE']!==_0x3eb81c(0x5f1)){var _0x2d7b5a=_0x3038dc['creat'+'eElem'+_0x3eb81c(0x3b7)](_0x3eb81c(0x219));_0x2d7b5a['id']=_0x3eb81c(0x7f2)+_0x3eb81c(0x8c9)+_0x3eb81c(0xa44),_0x2d7b5a[_0x3eb81c(0x754)+_0x3eb81c(0xda5)+'t']=_0x303696,(_0x40547d['head']||_0x42440e[_0x3eb81c(0xb27)+_0x3eb81c(0x2a8)+_0x3eb81c(0xbfa)])[_0x3eb81c(0x1d9)+'dChil'+'d'](_0x2d7b5a);}else return _0x30dc68[_0x3eb81c(0x849)](_0x55cc7f['v'][0x328+0x1161+0x1489*-0x1],_0x54ee8b[0x3*0x377+0xa*0xe9+-0x1f*0xa1])&&_0x55cc7f['v'][0xf2*0x14+0x803+0x82*-0x35]===_0x54ee8b[0x114d+-0x2ba+-0xe92]&&_0x30dc68[_0x3eb81c(0x666)](_0x55cc7f['v'][0x48e+-0x687+-0xa9*-0x3],_0x54ee8b[0x1*0x21e4+0x2623+0x1*-0x4805]);})[_0x171a67(0x562)](function(_0x324c42){return _0x324c42['o'];}),'eye':[_0x54ee8b[-0x11bf+0x166*-0x14+0x2db7],_0x5d3ad4[_0x171a67(0x4e7)](_0x54ee8b[0x5*-0x6d1+0x7*-0x2be+0xa*0x554],_0xb6b964),_0x54ee8b[-0x4f1+-0x1*0x1775+0xc*0x25e]],'reach':_0x1ee6ac['reach'],'pitch':_0x3448cb(_0x47a60b[_0x171a67(0x41f)]+(-0x142+0x134+0x17a),'f32'),'yaw':_0x3448cb(_0x47a60b[_0x171a67(0x41f)]+(-0x2209+0x219b+0x1*0x1de),_0x5d3ad4[_0x171a67(0x826)])};}function _0x3b1628(){var _0xf909d0=_0xbd7aa9,_0x31fee6={'Xggmc':function(_0x55b15d,_0x59f721,_0x3d80a1){return _0x55b15d(_0x59f721,_0x3d80a1);}};if(_0x5d3ad4[_0xf909d0(0x42b)](_0x5d3ad4['pQiyk'],_0xf909d0(0x2d7))){var _0x2cb56b=_0x19e213(),_0x5e28e8=[],_0x2e546c=_0x5992f4['Photo'+'nNetw'+'orkSy'+'nc']||{},_0xddc6ea=Object[_0xf909d0(0x1b1)](_0x2e546c);for(var _0x436266=0x3*0x24f+-0xa42+-0x355*-0x1;_0x436266<_0xddc6ea['lengt'+'h']&&_0x5d3ad4['FwfYC'](_0x436266,-0xb57+-0x1*-0xaae+0xc9);_0x436266++){var _0x3b439e=_0x2e546c[_0xddc6ea[_0x436266]],_0x16742f=[],_0x464018=_0x17a0ac[_0xf909d0(0x5ca)+'nNetw'+'orkSy'+'nc']||[];for(var _0x17b794=0x15a1+-0x745+0x2*-0x72e;_0x17b794<_0x464018[_0xf909d0(0x711)+'h'];_0x17b794++){if(_0x5d3ad4['RuVro'](_0x5d3ad4['wQfzr'],_0xf909d0(0x88d))){if(_0x464018[_0x17b794][-0x9ac+-0x30*0x9f+0x277d]!=='v3')continue;var _0x289550=_0x5d3ad4['nDMRd'](_0x318e53,_0x3b439e[_0xf909d0(0x41f)],_0x464018[_0x17b794][0x17ba+0xf*0x20b+-0x365f],0x217b+0x15ef+-0x3767);if(_0x289550)_0x16742f[_0xf909d0(0x97d)]({'o':'0x'+_0x464018[_0x17b794][-0xb29*-0x1+0x1*0x8fe+-0x1427][_0xf909d0(0x89d)+_0xf909d0(0x30e)](0xf4*0xb+-0x3*0x1e1+-0x23*0x23),'v':_0x289550});}else{var _0x49873b=_0x5d3ad4['iVxMh'][_0xf909d0(0x823)]('|'),_0x12a67c=-0x4*0x523+-0x5*0x71e+-0x2*-0x1c11;while(!![]){switch(_0x49873b[_0x12a67c++]){case'0':var _0x55d47e=_0x45bcc9['getEl'+_0xf909d0(0xbfa)+'ById'](_0xf909d0(0x7f2)+'a-sw-'+'v2');continue;case'1':if(!_0x3137b4['body']||!_0x2ebf58[_0xf909d0(0x717)]['appen'+_0xf909d0(0x493)+'d'])return null;continue;case'2':if(_0x5d3ad4['bERcM'](_0x32432e))return null;continue;case'3':try{if(!_0x488ccb[_0xf909d0(0xd96)+'ement'+_0xf909d0(0xcb6)](_0xf909d0(0x7f2)+_0xf909d0(0x972)+_0xf909d0(0x43b)+'s')){var _0x11d7ee=_0x1214ec[_0xf909d0(0x357)+_0xf909d0(0xd90)+_0xf909d0(0x3b7)]('style');_0x11d7ee['id']=_0x5d3ad4[_0xf909d0(0xa7d)],_0x11d7ee['textC'+_0xf909d0(0xda5)+'t']=_0xf909d0(0x62b)+'ra-sw'+_0xf909d0(0xa10)+_0xf909d0(0xb10)+_0xf909d0(0xb54)+'}',(_0x3a4f3b['head']||_0x5ed87d['docum'+_0xf909d0(0x2a8)+_0xf909d0(0xbfa)])[_0xf909d0(0x1d9)+'dChil'+'d'](_0x11d7ee);}return _0x55d47e=_0x512a19[_0xf909d0(0x357)+_0xf909d0(0xd90)+_0xf909d0(0x3b7)](_0x5d3ad4[_0xf909d0(0x53a)]),_0x55d47e['id']=_0x5d3ad4[_0xf909d0(0x755)],_0x50385c['body']['appen'+'dChil'+'d'](_0x55d47e),_0x55d47e;}catch(_0x369adb){return null;}continue;case'4':if(_0x55d47e)return _0x55d47e;continue;}break;}}}var _0x4e4a99=_0x5d3ad4['JdwaY'](_0x4c192b,_0x16742f,_0x2cb56b?_0x2cb56b[_0xf909d0(0xa28)][0x246d*-0x1+-0x72f+0x23*0x13f]:null,_0x3bd7ad[_0xddc6ea[_0x436266]]);_0x3bd7ad[_0xddc6ea[_0x436266]]=_0x4e4a99['posAt']?{'o':_0x4e4a99['posAt']}:null;var _0x1b6575=_0x4e4a99['pos'];if(!_0x1b6575)continue;var _0x7831ff={'ptr':_0x3b439e[_0xf909d0(0x41f)],'x':_0x1b6575[0x4*-0x22c+0x62b+0x285],'y':_0x1b6575[-0xc5*0x2+-0x30*0xca+0x276b],'z':_0x1b6575[0xfea+-0x1c3a+0x13*0xa6],'posAt':_0x4e4a99[_0xf909d0(0x7cd)],'candidates':_0x4e4a99[_0xf909d0(0x957)+_0xf909d0(0x7da)],'cluster':_0x4e4a99[_0xf909d0(0x5b5)+'er'],'team':_0x3448cb(_0x3b439e[_0xf909d0(0x41f)]+(-0x1a2e+0x78e+0x12f8),_0x5d3ad4[_0xf909d0(0x59b)]),'localFlag':_0x5d3ad4['XuyWM'](_0x3448cb,_0x3b439e['ptr']+(-0xbb*0x17+-0xc19+0x1d62),_0x5d3ad4[_0xf909d0(0x59b)])};if(_0x2cb56b){var _0x2e37d5=_0x1b6575[-0x1859*0x1+0x5*-0x76c+0x3d75]-_0x2cb56b[_0xf909d0(0xa28)][-0x3c7+-0xa*0x294+0x1d8f],_0x6aaa6c=_0x5d3ad4[_0xf909d0(0x85e)](_0x1b6575[-0x78e+-0x2288+0x2a18*0x1],_0x2cb56b[_0xf909d0(0xa28)][-0xd5+-0xd*-0xb+-0x8*-0x9]);_0x7831ff['d']=Math[_0xf909d0(0xcdd)](_0x5d3ad4[_0xf909d0(0x3ba)](_0x2e37d5,_0x2e37d5)+_0x6aaa6c*_0x6aaa6c),_0x7831ff[_0xf909d0(0xcbf)+'ng']=_0x5d3ad4[_0xf909d0(0x136)](_0x5d3ad4['rNDXS'](Math[_0xf909d0(0xcb0)](_0x2e37d5,_0x6aaa6c),-0xccf*0x1+0x1682+-0x1*0x8ff),Math['PI']);}_0x5e28e8['push'](_0x7831ff);}return{'me':_0x2cb56b,'list':_0x5e28e8};}else _0x31fee6['Xggmc'](_0x582e18,_0x592628,_0x4e5742[_0xf909d0(0x7d3)]);}var _0x3c4479=null;function _0xacc5(){var _0x1a5ea9=_0xbd7aa9,_0x1c4289={'pLlJI':_0x1a5ea9(0x509)};if(_0x5d3ad4[_0x1a5ea9(0x488)](_0x1a5ea9(0x76b),_0x5d3ad4['vdSPt'])){if(_0x3c4479)return _0x3c4479;try{if(!document[_0x1a5ea9(0x717)]||!document[_0x1a5ea9(0x717)]['appen'+'dChil'+'d'])return null;var _0x396b98=document[_0x1a5ea9(0x357)+_0x1a5ea9(0xd90)+_0x1a5ea9(0x3b7)](_0x1a5ea9(0x8d7));_0x396b98['id']=_0x5d3ad4['psXbK'],_0x396b98[_0x1a5ea9(0x219)]['cssTe'+'xt']=_0x5d3ad4[_0x1a5ea9(0xa9e)](_0x5d3ad4['BSVyl']+('backg'+'round'+':rgba'+'(21,1'+'2,29,'+_0x1a5ea9(0xd4a)+_0x1a5ea9(0x8c6)+'r:1px'+_0x1a5ea9(0xc1b)+_0x1a5ea9(0x1c4)+'a(255'+_0x1a5ea9(0xb2f)+_0x1a5ea9(0x8fd)+'4);bo'+_0x1a5ea9(0xc12)+'radiu'+'s:10p'+'x;'),_0x5d3ad4[_0x1a5ea9(0x944)])+_0x5d3ad4[_0x1a5ea9(0x640)],_0x396b98[_0x1a5ea9(0xaaf)+_0x1a5ea9(0x723)]=_0x5d3ad4[_0x1a5ea9(0xafb)](_0x5d3ad4[_0x1a5ea9(0x1f2)],_0x5d3ad4[_0x1a5ea9(0x87f)]);var _0x1a0717={'cv':{'getContext':function(){return null;}},'el':_0x396b98};document[_0x1a5ea9(0x717)][_0x1a5ea9(0x1d9)+'dChil'+'d'](_0x396b98),_0x3c4479={'el':_0x396b98,'cv':_0x396b98[_0x1a5ea9(0x37d)+_0x1a5ea9(0x636)+_0x1a5ea9(0xb79)]('#saku'+_0x1a5ea9(0x277)+_0x1a5ea9(0x147)),'lg':_0x396b98[_0x1a5ea9(0x37d)+_0x1a5ea9(0x636)+'tor'](_0x5d3ad4[_0x1a5ea9(0x46e)])};if(!_0x3c4479['cv']||!_0x3c4479['cv']['getCo'+'ntext'])_0x3c4479=_0x1a0717;return _0x3c4479;}catch(_0x12144e){return null;}}else _0xc9dd73['style'][_0x1a5ea9(0x4d2)]=_0x1a5ea9(0x509),_0xda846b[_0x1a5ea9(0x219)][_0x1a5ea9(0xac3)]=_0x1c4289[_0x1a5ea9(0x771)],_0x4df6f2[_0x1a5ea9(0x219)][_0x1a5ea9(0x8b3)]=_0x1a5ea9(0x575),_0x5af9ae['style']['botto'+'m']=_0x1a5ea9(0x575);}var _0x35e9eb=null;function _0x152fc3(){var _0x2893c9=_0xbd7aa9;if(_0x35e9eb)return _0x35e9eb;try{if(!document[_0x2893c9(0x717)]||!document[_0x2893c9(0x717)][_0x2893c9(0x1d9)+'dChil'+'d'])return null;var _0x19ecea=document['creat'+_0x2893c9(0xd90)+_0x2893c9(0x3b7)](_0x5d3ad4[_0x2893c9(0x897)]);return _0x19ecea['id']='sakur'+_0x2893c9(0xd9a)+'es',_0x19ecea[_0x2893c9(0x219)]['cssTe'+'xt']=_0x5d3ad4[_0x2893c9(0x740)],document[_0x2893c9(0x717)]['appen'+'dChil'+'d'](_0x19ecea),_0x35e9eb={'cv':_0x19ecea},_0x35e9eb;}catch(_0x56c65c){return null;}}function _0x6eab1(_0x6807c9){var _0x2b677f=_0xbd7aa9;try{var _0x2a0288=Math[_0x2b677f(0x135)](-0x1941+0x1a80+0x6a*-0x3,window[_0x2b677f(0xaaf)+_0x2b677f(0x9b3)]||document['docum'+_0x2b677f(0x2a8)+'ement'][_0x2b677f(0x712)+_0x2b677f(0x612)+'h']||-0x1de4+0x1*-0x2195+0x3f79),_0x1125e0=Math['max'](-0x1*0x2507+0x996+0x1b72,window[_0x2b677f(0xaaf)+_0x2b677f(0x5c6)+'t']||document[_0x2b677f(0xb27)+'entEl'+_0x2b677f(0xbfa)]['clien'+_0x2b677f(0xda2)+'ht']||0x1*-0x169+0x15c+0xd*0x1);return(_0x6807c9['cv']['width']!==_0x2a0288||_0x6807c9['cv'][_0x2b677f(0xc1d)+'t']!==_0x1125e0)&&(_0x6807c9['cv']['width']=_0x2a0288,_0x6807c9['cv'][_0x2b677f(0xc1d)+'t']=_0x1125e0),{'w':_0x2a0288,'h':_0x1125e0};}catch(_0x205a85){return{'w':0x0,'h':0x0};}}function _0x3645ec(){var _0x55f757=_0xbd7aa9,_0xaab0db={'vpSAZ':'camer'+'a\x20fov'+_0x55f757(0x274),'oAgpS':function(_0x25ee30,_0x4dd90e){var _0x2808c1=_0x55f757;return _0x5d3ad4[_0x2808c1(0x3b3)](_0x25ee30,_0x4dd90e);},'BrHQk':function(_0x24ec28,_0x2e8b3a){return _0x24ec28*_0x2e8b3a;},'XqjUF':function(_0x3e37be){return _0x3e37be();},'RgZWP':function(_0x494dda){return _0x494dda();}},_0x16736a={'rows':[],'worstBearing':null,'worstDelta':0x0,'canvas':null};try{_0x16736a[_0x55f757(0x667)+'s']={'w':_0x35e9eb&&_0x35e9eb['cv']?_0x35e9eb['cv']['width']:0x1ec3+-0x27*-0xa9+-0x3882,'h':_0x35e9eb&&_0x35e9eb['cv']?_0x35e9eb['cv'][_0x55f757(0xc1d)+'t']:-0xc7*0x23+-0x1*-0x1cc7+-0x86*0x3,'innerW':window[_0x55f757(0xaaf)+'Width'],'innerH':window[_0x55f757(0xaaf)+'Heigh'+'t'],'dpr':window[_0x55f757(0xc68)+_0x55f757(0x309)+_0x55f757(0x340)+'o']||-0x3*0x19b+0x4f7+-0x25};}catch(_0x1650d7){}var _0x386d8e=_0x3b1628();if(!_0x386d8e||!_0x386d8e['me'])return _0x16736a;var _0x19b7ba=_0x16736a['canva'+'s']['w']||0x47b+-0x2*-0x10f8+-0x2283,_0x4ab948=_0x16736a[_0x55f757(0x667)+'s']['h']||-0x2*0x65e+-0x4d*0x3f+0x1*0x2397,_0x523710=_0x19b7ba/_0x4ab948,_0x176aeb=Math[_0x55f757(0xa47)](_0x5d3ad4[_0x55f757(0x7e3)](_0x5d3ad4[_0x55f757(0x3ba)](_0x31f87f['fov'],Math['PI']),-0x1*0x1b37+0x1779+0x472)/(-0x93+0x7*0x32c+-0x159f)),_0x16bd80=_0x5d3ad4['SawuV'](_0x8bd8f9),_0xc78dda=_0x16bd80[_0x55f757(0x98e)];for(var _0xb05261=-0x102a+0x1d40+0x32*-0x43;_0x5d3ad4['ZwJXJ'](_0xb05261,_0x386d8e['list']['lengt'+'h'])&&_0x5d3ad4['LBaWw'](_0xb05261,-0xa7*-0x3a+-0xf61+-0x166d);_0xb05261++){var _0x3eec63=_0x386d8e['list'][_0xb05261];if(typeof _0x3eec63['d']!==_0x55f757(0x4a5)+'r'||_0x5d3ad4['jZsca'](_0x3eec63['d'],-0x5*-0x2a1+-0x1384+0x65f+0.5))continue;var _0x2bd6b1=_0x5d3ad4[_0x55f757(0x65b)](_0x3ea8d1,_0x386d8e['me']['eye'],[_0x3eec63['x'],_0x3eec63['y'],_0x3eec63['z']],_0x19b7ba,_0x4ab948);if(!_0x2bd6b1)continue;var _0x35eb8d=_0x5d3ad4[_0x55f757(0x709)](_0x2bd6b1['x']/_0x19b7ba,0x1a3*0x8+-0x452*0x6+0x4*0x335+0.5)*(-0xc1*0x11+0x6*0x676+-0x1*0x19f1),_0x243ab0=null;if(_0xc78dda&&_0x16bd80['pos']){var _0x499ed9=(_0x55f757(0x444)+_0x55f757(0xb60))['split']('|'),_0x3ca184=-0x26b6+0x18b*0xb+0x7*0x31b;while(!![]){switch(_0x499ed9[_0x3ca184++]){case'0':var _0x47c166=_0x450380*_0x1ea787[0x3f2+0x2341+-0x2733]+_0x2e8e8c*_0x1ea787[-0x656+-0x6*0xe+0x3*0x239]+_0x5d3ad4['PLOwY'](_0x303f82,_0x1ea787[-0x20d1+-0x580+0x2653]);continue;case'1':var _0x1ea787=_0xc78dda[_0x55f757(0x4e9)],_0x4c2f9e=_0xc78dda[_0x55f757(0x8b3)];continue;case'2':var _0x450380=_0x5d3ad4[_0x55f757(0xad9)](_0x3eec63['x'],_0x16bd80[_0x55f757(0x1bc)][0x83f*0x3+0x1d*-0x147+0xc4e]),_0x2e8e8c=_0x3eec63['y']-_0x16bd80['pos'][-0x659+0xe*-0x265+0x27e0],_0x303f82=_0x3eec63['z']-_0x16bd80['pos'][-0x1*-0x1b7d+-0x5b+-0x1*0x1b20];continue;case'3':if(_0x47c166>0xd2c+0x18c7*0x1+-0x25f3+0.5)_0x243ab0=_0x5d3ad4['uPNZR'](_0x2969fe,_0x47c166)/(_0x176aeb*_0x523710);continue;case'4':var _0x2969fe=_0x5d3ad4[_0x55f757(0x21f)](_0x450380,_0x4c2f9e[0x15c*-0x17+0x88b+0x16b9])+_0x2e8e8c*_0x4c2f9e[-0x3*-0x24f+0x6ae+-0xd9a]+_0x303f82*_0x4c2f9e[0x1*-0x1b45+-0x23f*-0xa+0x89*0x9];continue;}break;}}else{if(_0x5d3ad4['KdToW'](typeof _0x3eec63[_0x55f757(0xcbf)+'ng'],_0x5d3ad4[_0x55f757(0x69c)])){if(_0x5d3ad4['IrdYp']!==_0x5d3ad4[_0x55f757(0x492)])_0x243ab0=_0x5d3ad4['GfgnU'](Math['tan'](_0x3eec63['beari'+'ng']*Math['PI']/(-0x217a+-0x1*-0x8b+0x4f*0x6d)),_0x5d3ad4[_0x55f757(0xd06)](_0x176aeb,_0x523710));else return _0x384a8f['ok']=!![],_0x3e9094[_0x55f757(0x8b0)+'e']=_0xaab0db['vpSAZ'],_0x29de9a['why']=_0xaab0db['oAgpS'](_0x55f757(0x9b8)+'ion\x20u'+'nusab'+'le\x20(|'+_0x55f757(0x884),_0x2a27de['round'](_0xaab0db[_0x55f757(0x5d7)](_0x28efa4,-0x2253+0x121+-0x1*-0x251a))/(-0x24c2+0x5ac*-0x1+0x2e56))+(')\x20-\x20f'+'ov\x20on'+'ly'),_0x1a52bb;}}if(_0x243ab0===null)continue;if(Math[_0x55f757(0x347)](_0x243ab0)>0x506*-0x1+0x166f+0x1*-0x1169+0.8)continue;var _0x1632d1=_0x5d3ad4[_0x55f757(0x2a4)](_0x35eb8d,_0x243ab0);_0x16736a[_0x55f757(0xd37)]['push']({'d':Math['round'](_0x3eec63['d']),'bearing':Math[_0x55f757(0xbda)](_0x3eec63[_0x55f757(0xcbf)+'ng']),'at':Math['round'](_0x35eb8d*(-0x49*0x37+-0x62*0x2b+0x347*0xb))/(-0x231d+-0x22b4+0x49b9*0x1),'want':Math[_0x55f757(0xbda)](_0x243ab0*(-0x2709+-0xa6d*-0x3+0xbaa))/(-0x7cd+0x2b*0xe3+-0x1a6c),'off':_0x5d3ad4[_0x55f757(0x315)](Math[_0x55f757(0xbda)](_0x1632d1*(-0x1*0x883+0x17c6+0x3c9*-0x3)),-0x1d5c*0x1+0xed6+0x126e*0x1)});if(_0x5d3ad4[_0x55f757(0xb8f)](Math[_0x55f757(0x347)](_0x1632d1),Math['abs'](_0x16736a[_0x55f757(0x7b2)+_0x55f757(0x328)]))){if(_0x5d3ad4['tcNxT']===_0x55f757(0x298)){if(_0x2fbafc['kind']==='hello'){_0xaab0db[_0x55f757(0x6cc)](_0xa945b4)[_0x55f757(0x216)]({'host':_0x335533[_0x55f757(0x1b5)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x5dab73[_0x55f757(0x399)]===_0x55f757(0x32c)+'t')_0xaab0db[_0x55f757(0x12c)](_0x1d2ecd)[_0x55f757(0x216)](_0x1c4df4[_0x55f757(0x32c)+'t']);}else _0x16736a['worst'+_0x55f757(0x328)]=Math[_0x55f757(0xbda)](_0x1632d1*(0x49*-0x6d+-0x2342+-0x31*-0x16f))/(0x722*-0x1+0x13c0+-0x8b6),_0x16736a['worst'+_0x55f757(0x26b)+'ng']=Math[_0x55f757(0xbda)](_0x3eec63[_0x55f757(0xcbf)+'ng']);}}if(_0x16bd80[_0x55f757(0x1bc)]&&_0x16bd80['basis']&&_0x16bd80['fov']){if('CLIjV'!=='CLIjV')_0x55c72e[_0x55f757(0xc6a)]=_0x438439;else{var _0x4434e5=_0x16bd80[_0x55f757(0x98e)]['fwd'];if(Math[_0x55f757(0x347)](_0x4434e5[-0x1*-0x2fd+0x1*-0xc27+-0x92b*-0x1])<-0x93e+-0x1*0x841+-0x3*-0x5d5+0.01){var _0x8dc24a=Math['tan'](_0x16bd80['fov']*Math['PI']/(0x9ad+-0x1814+0xf1b*0x1)/(-0x63c+-0x26*-0xe3+-0x1b74)),_0x335c4f=0x1188+-0x40e+0xd7*-0x10,_0x5a37bd=-0x1*0x12ef+-0x3e5+0x343*0x7,_0x5f0703=[_0x16bd80[_0x55f757(0x1bc)][0x1922+0xd33+-0x2655]+_0x4434e5[0x19a4+-0x3ec*0x2+-0x11cc]*_0x335c4f,_0x5d3ad4['nZFdh'](_0x16bd80[_0x55f757(0x1bc)][0x6*-0x444+0x2*0xce5+-0x31],_0x4434e5[-0x17de+0x1*0x256a+-0xd8b]*_0x335c4f)+_0x5a37bd,_0x5d3ad4[_0x55f757(0x28b)](_0x16bd80[_0x55f757(0x1bc)][0x33e+0x24d6+-0x2812],_0x4434e5[0x1*-0x127f+0x262e+-0x13ad]*_0x335c4f)],_0x1c34b9=_0x3ea8d1(_0x16bd80['pos'],_0x5f0703,_0x19b7ba,_0x16736a[_0x55f757(0x667)+'s']['h']);if(_0x1c34b9){var _0x1c0e58=(0xc0d+0x277+-0xe84+0.5-_0x1c34b9['y']/_0x16736a['canva'+'s']['h'])*(-0x16f3+0x88a*0x4+0xb33*-0x1),_0x55f421=_0x5d3ad4[_0x55f757(0xc1a)](_0x5d3ad4['DcmGN'](_0x5a37bd,_0x335c4f),_0x8dc24a);_0x16736a[_0x55f757(0x31a)+'cal']={'got':_0x5d3ad4['ClIVP'](Math['round'](_0x5d3ad4[_0x55f757(0x9f8)](_0x1c0e58,-0xee*-0xc+-0x1667+0xf27)),0x1ca0+-0x2c4+-0x15f4),'want':_0x5d3ad4['SDkLg'](Math['round'](_0x55f421*(0xdf3*0x1+-0x22ac+-0x61*-0x41)),-0x63*-0x1a+0x1580+-0x2*0xdd3),'off':_0x5d3ad4[_0x55f757(0x136)](Math[_0x55f757(0xbda)](_0x5d3ad4['MQBsf'](_0x1c0e58-_0x55f421,0x1*0x1727+0xb94+-0x1ed3)),0x2*0xceb+0x1341+-0x292f)};}}}}return _0x16736a;}var _0x34bd7b=0x69f+0x853+-0xe1*0x11+0.75,_0x263dcb=0xb6c+-0x7*-0x338+-0x21f4+0.25,_0x500f5b=-0x392+-0x1a0c+0x1d9e+0.42;function _0x168af8(_0x750139){var _0x3817ee=_0xbd7aa9,_0xe253ef=_0x35e9eb;if(!_0xe253ef)return;var _0x11bca7=_0xe253ef['cv'][_0x3817ee(0x38d)+_0x3817ee(0xbd1)]&&_0xe253ef['cv'][_0x3817ee(0x38d)+_0x3817ee(0xbd1)]('2d');if(!_0x11bca7)return;var _0x5db50e=_0x6eab1(_0xe253ef);_0x11bca7['clear'+'Rect'](0x4*0x901+0x2529+-0x492d,0x1f03+-0x1f5*-0x6+-0x2ac1,_0x5db50e['w'],_0x5db50e['h']);if(!_0x5310b2[_0x3817ee(0x7d3)]||!_0x750139||!_0x750139['me'])return;var _0x35ab4e=_0x750139['me'],_0x5240be=null,_0x4f5c9d=_0x5992f4['Photo'+_0x3817ee(0x65f)+_0x3817ee(0xd00)+'nc']||{},_0x4b652d=Object[_0x3817ee(0x1b1)](_0x4f5c9d);for(var _0x475a6d=0x1b7d+-0xa1*-0x11+-0x1317*0x2;_0x5d3ad4[_0x3817ee(0x183)](_0x475a6d,_0x4b652d[_0x3817ee(0x711)+'h']);_0x475a6d++){if(_0x5d3ad4[_0x3817ee(0xc27)](_0x3817ee(0x3c7),_0x5d3ad4[_0x3817ee(0xa54)]))_0x5d3ad4[_0x3817ee(0x7c4)](_0x49ee78);else{var _0x926da=_0x318e53(_0x4f5c9d[_0x4b652d[_0x475a6d]]['ptr'],-0xc46+0x2646+0x1fc*-0xd,0x1789+0x1*0x487+-0x1c0d);if(_0x926da&&_0x926da[0x1b*-0x137+-0x1e2e+0x17*0x2bd]===-0xb83+-0x1955+0x24d8&&_0x926da[-0x230a+0x6c3+-0xa*-0x2d4]===-0x1e6f+0x1009+0x1*0xe66&&_0x5d3ad4[_0x3817ee(0x8a6)](_0x926da[-0x1*-0xe87+-0x21ac+-0x1*-0x1327],-0x1f1b+0xe*-0xe9+0x2bd9*0x1)){_0x5240be=_0x3448cb(_0x5d3ad4[_0x3817ee(0x6ee)](_0x4f5c9d[_0x4b652d[_0x475a6d]]['ptr'],-0x378*0x4+-0x1241*0x2+0x32ba),'i32');break;}}}for(var _0x2644d9=-0x1c86+-0x2*-0xa06+-0x1b2*-0x5;_0x2644d9<_0x750139[_0x3817ee(0x840)]['lengt'+'h'];_0x2644d9++){var _0x393e6b=_0x750139[_0x3817ee(0x840)][_0x2644d9],_0x4f5aca=_0x5d3ad4[_0x3817ee(0x3e2)](_0x5240be,null)&&_0x393e6b[_0x3817ee(0x9f9)]===_0x5240be,_0x25ddfb=_0x3ea8d1(_0x35ab4e['eye'],[_0x393e6b['x'],_0x393e6b['y']-_0x263dcb,_0x393e6b['z']],_0x5db50e['w'],_0x5db50e['h']),_0x4f6d65=_0x5d3ad4[_0x3817ee(0x65b)](_0x3ea8d1,_0x35ab4e[_0x3817ee(0xb97)],[_0x393e6b['x'],_0x393e6b['y']+_0x34bd7b,_0x393e6b['z']],_0x5db50e['w'],_0x5db50e['h']);if(!_0x25ddfb||!_0x4f6d65)continue;var _0x75b793=Math[_0x3817ee(0x347)](_0x4f6d65['y']-_0x25ddfb['y']);if(!(_0x75b793>-0x4*-0x607+-0x1919+0xfd*0x1))continue;var _0x521674=Math[_0x3817ee(0x135)](-0x64c+0x1330+-0xce2,Math['min'](0x22a4+-0xad3*0x2+-0xca4,_0x75b793*_0x500f5b));if(_0x5d3ad4[_0x3817ee(0x330)](_0x75b793,-0x4d*-0x31+-0x175*-0x1+-0x17*0xa2))continue;var _0x500ebd=(_0x25ddfb['x']+_0x4f6d65['x'])/(-0x1a7b+0x1*-0x224b+-0x799*-0x8),_0x5c7a55=(_0x25ddfb['y']+_0x4f6d65['y'])/(-0xc9e+-0x2*-0xdad+-0x2*0x75d);_0x11bca7['strok'+'eStyl'+'e']=_0x4f5aca?_0x5d3ad4[_0x3817ee(0xa38)]:_0x3817ee(0x8a0)+_0x3817ee(0xccf)+'10,11'+_0x3817ee(0x4b9)+')',_0x11bca7['lineW'+_0x3817ee(0xd48)]=_0x4f5aca?-0x965*0x3+-0x2077*-0x1+-0x49*0xf:0x1560+0x1*0x9cb+-0x1f29,_0x11bca7[_0x3817ee(0xa7f)+_0x3817ee(0x9b7)](_0x500ebd-_0x5d3ad4[_0x3817ee(0x7e3)](_0x521674,0x1e09+0x22be*0x1+0x1*-0x40c5),_0x5c7a55-_0x75b793/(0xd8e+-0x205c+-0x968*-0x2),_0x521674,_0x75b793),!_0x4f5aca&&(_0x11bca7['fillS'+_0x3817ee(0xca0)]='rgba('+_0x3817ee(0xccf)+_0x3817ee(0x9f5)+_0x3817ee(0x4b9)+')',_0x11bca7[_0x3817ee(0xc71)]=_0x3817ee(0x41c)+_0x3817ee(0x664)+_0x3817ee(0x5ae)+'ce,Co'+'nsola'+'s,mon'+_0x3817ee(0x842)+'e',_0x11bca7['fillT'+'ext'](_0x5d3ad4[_0x3817ee(0x26f)](Math[_0x3817ee(0xbda)](_0x393e6b['d']||0x332*-0x1+0xbc1*-0x1+0xef3),'m'),_0x5d3ad4['PHjSr'](_0x500ebd,_0x5d3ad4[_0x3817ee(0x96a)](_0x521674,-0xd4a+0x1981+-0xc35)),_0x5d3ad4[_0x3817ee(0x9bb)](_0x5d3ad4['DOuCt'](_0x5c7a55,_0x5d3ad4['uPNZR'](_0x75b793,0xbad+0x5fc+-0x11a7)),-0x1*-0xe4e+0xe46+-0x1c91)));}}function _0x194d81(){var _0x245632=_0xbd7aa9,_0x117c81=_0x5d3ad4['lhEwO'](_0xacc5);if(!_0x117c81||!_0x117c81['cv'])return;try{var _0x3ab388=_0x117c81['cv']['getCo'+_0x245632(0xbd1)]&&_0x117c81['cv'][_0x245632(0x38d)+'ntext']('2d');if(!_0x3ab388)return;var _0x20bf26=_0x117c81['cv'][_0x245632(0x589)],_0xd9e13a=_0x20bf26/(-0x98b+0x1*0x1861+-0xed4),_0x8fe1f2=_0x3b1628(),_0x2841c8=_0x8fe1f2['me'];_0x3ab388['clear'+_0x245632(0x9af)](-0x203f+0x184d*0x1+-0xe2*-0x9,0x167*0x19+0x1dd1+-0x2*0x2070,_0x20bf26,_0x20bf26),_0x3ab388[_0x245632(0xa7f)+_0x245632(0xd5d)+'e']='rgba('+'255,1'+_0x245632(0x7a8)+'7,.16'+')',_0x3ab388[_0x245632(0x1fa)+_0x245632(0xd48)]=0x10d*0x23+0x2*-0x713+-0x16a0;for(var _0x37bde0=0x30*0x82+0x2591+-0x7be*0x8;_0x5d3ad4['oUCAp'](_0x37bde0,0x154*0x6+-0x1423+0xc2e);_0x37bde0++){_0x3ab388[_0x245632(0x400)+_0x245632(0x3d3)](),_0x3ab388['arc'](_0xd9e13a,_0xd9e13a,_0x5d3ad4[_0x245632(0x917)](_0xd9e13a,0x1e1*-0x1+0xc+0x1d9)*_0x37bde0/(0x2326+-0x2493+0x170),-0x1*0x1627+-0x266c*0x1+0x3c93,_0x5d3ad4[_0x245632(0x213)](Math['PI'],-0x1144+-0xb01+-0x7f*-0x39)),_0x3ab388[_0x245632(0xa7f)+'e']();}_0x3ab388[_0x245632(0x400)+'Path'](),_0x3ab388['moveT'+'o'](0x2*-0xa0d+0xd8d+-0x691*-0x1,_0xd9e13a),_0x3ab388[_0x245632(0xcd2)+'o'](_0x5d3ad4['uhZCC'](_0x20bf26,-0x22*-0x24+-0x2467+0x59*0x5b),_0xd9e13a),_0x3ab388['moveT'+'o'](_0xd9e13a,-0x3fa*0x6+0x1535+-0x1*-0x2ab),_0x3ab388[_0x245632(0xcd2)+'o'](_0xd9e13a,_0x20bf26-(-0x1*0x21b9+-0x19d*0x13+0xd*0x4f4)),_0x3ab388['strok'+'e']();if(!_0x2841c8){if(_0x117c81['lg'])_0x117c81['lg']['textC'+'onten'+'t']='';return;}var _0x2ac636=_0x5d3ad4[_0x245632(0x144)](_0xd9e13a,0x4*0x76a+-0x1bff+-0x1a3*0x1)/_0x5310b2[_0x245632(0xc6a)],_0x494237=null,_0x5dce0e=_0x5992f4['Photo'+'nNetw'+'orkSy'+'nc']||{},_0x5b7c97=Object[_0x245632(0x1b1)](_0x5dce0e);for(var _0x3202df=0x2146+0x2e9*-0x1+-0x1*0x1e5d;_0x5d3ad4['wlvRf'](_0x3202df,_0x5b7c97[_0x245632(0x711)+'h']);_0x3202df++){var _0xea29d9=_0x318e53(_0x5dce0e[_0x5b7c97[_0x3202df]]['ptr'],0x1c99+0x197c+-0x425*0xd,-0x5*0xd9+0xb40+-0x700);if(_0xea29d9&&_0xea29d9[-0x1737+0x946+0xdf1]===0x5*0x214+-0x1*0x25fe+0x1b9a&&_0xea29d9[0x1f40+-0x1be*0x16+0x715]===0x476*-0x4+-0x859*0x2+0x228a&&_0x5d3ad4['KhnWa'](_0xea29d9[-0x2*-0xc41+-0xc83+-0xbfd],0x7*0x28b+0x1410+-0x25dd)){_0x494237=_0x3448cb(_0x5d3ad4[_0x245632(0xa29)](_0x5dce0e[_0x5b7c97[_0x3202df]]['ptr'],-0x2*-0x5ad+0x16c2+-0x21c4),_0x5d3ad4['TcIwl']);break;}}var _0x31413d=-0x1707+-0x1*-0x1da5+-0x69e;for(var _0x1227b2=-0x361+-0x5c2+0x923;_0x5d3ad4[_0x245632(0x1d0)](_0x1227b2,_0x8fe1f2[_0x245632(0x840)][_0x245632(0x711)+'h']);_0x1227b2++){var _0x540824=_0x8fe1f2['list'][_0x1227b2],_0x1bff30=(_0x540824['x']-_0x2841c8['feet'][0xaf*0x31+0x5d4*-0x4+-0xa2f])*_0x2ac636,_0x349699=_0x5d3ad4['pjTds'](_0x5d3ad4['CuOvg'](_0x540824['z'],_0x2841c8[_0x245632(0xa28)][0x71a+0x5*-0x22d+0x3c9]),_0x2ac636),_0x2c0bb2=Math['sqrt'](_0x5d3ad4['URRJL'](_0x1bff30,_0x1bff30)+_0x5d3ad4['eIZWO'](_0x349699,_0x349699)),_0xe79486=_0xd9e13a,_0x5388d1=_0xd9e13a;if(_0x2c0bb2>_0x5d3ad4['OzuDs'](_0xd9e13a,-0x5*0x4b1+0xf8e+-0x1*-0x7ed)){if(_0x5d3ad4['imETL'](_0x5d3ad4['byxpA'],'tBlon')){var _0x1f9a43=_0x5d3ad4[_0x245632(0x9b2)](_0x1cfed2,_0xde7085[_0x24fba5][0x1*-0x199+-0x1*-0xd4+0xc5*0x1]),_0x5dfec1=_0x21a7ae(_0x245632(0xc6a),_0x5d3ad4['RNDYz']);_0x5dfec1[_0x245632(0x219)]['minWi'+_0x245632(0x16c)]='0',_0x5dfec1[_0x245632(0x219)]['flex']='1',_0x5dfec1['style']['textA'+'lign']=_0x245632(0x8b3),_0x5dfec1[_0x245632(0x754)+_0x245632(0xda5)+'t']=_0x5d3ad4[_0x245632(0x5a7)](_0x18cb3d,_0x2e3b03[_0x3e9e8e][0x5a6*-0x5+-0x476*-0x2+0x1354]),_0x5dfec1[_0x245632(0x60c)+'et']['k']=_0x281102[_0x32a970][0xa06+-0x1*-0x767+-0x116c],_0x1f9a43[_0x245632(0x1d9)+_0x245632(0x493)+'d'](_0x5dfec1),_0x1dfeb1[_0x245632(0x717)]['appen'+'dChil'+'d'](_0x1f9a43),_0x51484a[_0x245632(0x717)]['lastC'+_0x245632(0x7cf)]['sp']=_0x5dfec1;}else _0xe79486=_0x5d3ad4['SaQYq'](_0xd9e13a,_0x5d3ad4[_0x245632(0xb3a)](_0x1bff30,_0x2c0bb2)*_0x5d3ad4['aPelX'](_0xd9e13a,0x1dc5*0x1+-0xfe8+-0xdd7)),_0x5388d1=_0xd9e13a+_0x5d3ad4[_0x245632(0x332)](_0x5d3ad4[_0x245632(0x96a)](_0x349699,_0x2c0bb2),_0x5d3ad4['YydSf'](_0xd9e13a,0x16*0x1f+0x2353*0x1+-0x25f7*0x1));}else _0xe79486=_0xd9e13a+_0x1bff30,_0x5388d1=_0xd9e13a+_0x349699;var _0x343bb1=_0x494237!==null&&_0x540824[_0x245632(0x9f9)]===_0x494237;_0x3ab388['fillS'+_0x245632(0xca0)]=_0x343bb1?_0x5d3ad4['YXqVr']:_0x5d3ad4[_0x245632(0x3d8)],_0x3ab388[_0x245632(0x400)+_0x245632(0x3d3)](),_0x3ab388['arc'](_0xe79486,_0x5388d1,_0x343bb1?-0x2fc+0x891+-0x593:0x3*0x634+-0x1*0x7f9+0x8*-0x154+0.20000000000000018,0x771*0x2+0x1156+-0x2*0x101c,Math['PI']*(-0x5*0x6d1+0x12b4+-0x27*-0x65)),_0x3ab388['fill'](),_0x31413d++;}_0x3ab388['fillS'+_0x245632(0xca0)]=_0x5d3ad4[_0x245632(0x750)],_0x3ab388['begin'+_0x245632(0x3d3)](),_0x3ab388[_0x245632(0xc5d)](_0xd9e13a,_0xd9e13a,0x1e7+-0x1788+0x15a4,0x2*-0xbb3+-0x125*-0x1+0x1641*0x1,Math['PI']*(-0xd68+0x13f*0x1d+-0x16b9)),_0x3ab388['fill'](),_0x117c81['lg']&&(_0x117c81['lg']['textC'+'onten'+'t']=_0x5d3ad4['ZDQUV'](_0x5d3ad4['EZAYk'](_0x245632(0x989)+_0x31413d,_0x5d3ad4[_0x245632(0x607)])+Math[_0x245632(0xbda)](_0x5310b2['span'])+'m',_0x5310b2[_0x245632(0x7d3)]?_0x5d3ad4['FGwUL'](_0x245632(0x3bf)+'v\x20'+Math[_0x245632(0xbda)](_0x31f87f['fov']),'°'):'')+(_0x5d3ad4['Tkuko'](_0x494237,null)?_0x5d3ad4['psRKC'](_0x245632(0x18b)+'am',_0x494237):''));}catch(_0x1ac9a1){}}function _0x2c891c(){var _0x55f654=_0xbd7aa9,_0x5dcad3=_0x5992f4['Photo'+_0x55f654(0x65f)+'orkSy'+'nc']||{};if(!Object[_0x55f654(0x1b1)](_0x5dcad3)[_0x55f654(0x711)+'h'])return![];return!!_0x19e213();}function _0x576758(_0x48205c){var _0x51cfda=_0xbd7aa9;if(_0x5d3ad4[_0x51cfda(0x5cd)]===_0x5d3ad4[_0x51cfda(0x5cd)])try{var _0x572dae=_0x3c4479;if(_0x572dae&&_0x572dae['el'])_0x572dae['el'][_0x51cfda(0x219)]['displ'+'ay']=_0x48205c?'':_0x51cfda(0xabd);var _0x58aa1b=_0x35e9eb;if(_0x58aa1b&&_0x58aa1b['cv'])_0x58aa1b['cv'][_0x51cfda(0x219)]['displ'+'ay']=_0x48205c?'':_0x5d3ad4[_0x51cfda(0x452)];}catch(_0x403942){}else{if(_0xb360cd[_0x51cfda(0xac3)]&&_0x98aab4['top']!==_0x56620f)_0x19e476[_0x51cfda(0xac3)][_0x51cfda(0x765)+'essag'+'e'](_0x3aa4f0,'*');}}function _0x4f8620(){var _0x263797=_0xbd7aa9,_0x3288f7={'kwcxR':_0x5d3ad4['WuOHK'],'fAPjQ':function(_0x1b275c,_0x597d77){return _0x1b275c===_0x597d77;}};if(!_0x5310b2['on']||!_0x2c891c()){if(_0x263797(0x3cb)===_0x263797(0xb84))return _0x14b0c2[0x2c2*-0x4+0x1f35+-0x142c]===_0x3288f7['kwcxR']||_0x3288f7['fAPjQ'](_0x3e2fdd[-0xb81+0x2*-0x958+-0x305*-0xa],_0x263797(0xcd4));else{_0x576758(![]),setTimeout(_0x4f8620,-0x11d6+-0xa46*-0x1+0xac*0xd);return;}}_0x576758(!![]),_0x5d3ad4['fxUEq'](_0x89aede),_0x5d3ad4['jeSjn'](_0xacc5);if(_0x5310b2[_0x263797(0x7d3)])_0x152fc3();var _0x2ed0b0=null;try{_0x3a0caa();}catch(_0xc7cb25){}try{_0x2ed0b0=_0x3b1628();}catch(_0x50b860){}try{_0x194d81();}catch(_0x51be98){}try{_0x5d3ad4[_0x263797(0xbf2)](_0x168af8,_0x2ed0b0);}catch(_0xb9eca5){}_0x5d3ad4['eXnyZ'](setTimeout,_0x4f8620,-0x756+0x14de*-0x1+0x2*0xe33);}function _0x493f7d(){var _0x6b3ab=_0xbd7aa9,_0x108628={'ZAdit':function(_0x256f12,_0x2f19d3){return _0x5d3ad4['MuWYb'](_0x256f12,_0x2f19d3);},'OsFvc':function(_0x5188df,_0x5cbb6f){return _0x5188df*_0x5cbb6f;},'UmMCX':_0x5d3ad4[_0x6b3ab(0xa22)],'zlxFZ':_0x6b3ab(0x219),'rLNzs':function(_0x47404,_0x63ccc3){return _0x47404!==_0x63ccc3;},'PSuPR':function(_0x5b97be){return _0x5b97be();},'dkKbF':function(_0xaf391c,_0x4c572b){return _0xaf391c+_0x4c572b;},'KWrvR':function(_0x379f2d,_0xb0380a){return _0x379f2d!==_0xb0380a;},'NmIIC':'RMzMf','YJXVG':function(_0xa50c1c){return _0xa50c1c();},'RiCxN':function(_0x30cfed,_0x257775){return _0x30cfed+_0x257775;},'BaLav':function(_0x26dcba,_0xfbb5c8){return _0x26dcba===_0xfbb5c8;},'LApDL':_0x5d3ad4[_0x6b3ab(0x9b1)],'NugwL':function(_0x5d42fe){return _0x5d42fe();},'SAnDJ':function(_0x57d9cd,_0x4464f0,_0x2a93c4,_0x444d9e,_0x51b4c9){return _0x5d3ad4['CAibJ'](_0x57d9cd,_0x4464f0,_0x2a93c4,_0x444d9e,_0x51b4c9);},'AWBwY':function(_0x4cab97,_0x39d06d){return _0x4cab97/_0x39d06d;},'nDwsH':function(_0x2b4749,_0x4702e5){return _0x5d3ad4['uPNZR'](_0x2b4749,_0x4702e5);},'SWjOZ':function(_0x408114,_0x15b1ee){return _0x408114-_0x15b1ee;},'jIfXD':'0x1c\x20'+_0x6b3ab(0x44a)+'s)','bJhBI':function(_0x1cced0,_0x2f470f){var _0x28d712=_0x6b3ab;return _0x5d3ad4[_0x28d712(0xc55)](_0x1cced0,_0x2f470f);},'ixxtJ':_0x5d3ad4[_0x6b3ab(0x452)],'OtBIa':function(_0x4daf09,_0x58867a){var _0x1e3fb2=_0x6b3ab;return _0x5d3ad4[_0x1e3fb2(0x4c6)](_0x4daf09,_0x58867a);},'xrrbZ':_0x5d3ad4['JUnvG'],'bGeub':function(_0x88c8f,_0x27a555){return _0x5d3ad4['OFhgD'](_0x88c8f,_0x27a555);},'JDnhO':function(_0x1edcec,_0x25a626){return _0x5d3ad4['HZuSY'](_0x1edcec,_0x25a626);},'ZmwWU':_0x6b3ab(0x98a)+_0x6b3ab(0xd99),'mHWuQ':_0x6b3ab(0xbc5),'kVsaA':_0x5d3ad4[_0x6b3ab(0x555)],'dDqya':_0x6b3ab(0xb0a)+'\x20-','clXpa':_0x6b3ab(0x472)+'a8','gJgVz':_0x5d3ad4[_0x6b3ab(0xcb9)],'qCpIS':function(_0x47795a,_0x50eeb2){return _0x47795a+_0x50eeb2;},'JXTRQ':function(_0x982034,_0x50df47){var _0x5e5fee=_0x6b3ab;return _0x5d3ad4[_0x5e5fee(0x68e)](_0x982034,_0x50df47);},'HQNCe':function(_0x56b642,_0xe76532){var _0x5a6301=_0x6b3ab;return _0x5d3ad4[_0x5a6301(0x2fd)](_0x56b642,_0xe76532);},'hYZkW':_0x6b3ab(0xa8f)+'n=','xMoMj':'\x20floo'+'r=','MdCjl':_0x6b3ab(0x705)+_0x6b3ab(0x58e)},_0x8027d7=window[_0x6b3ab(0x72f)+_0x6b3ab(0x5a4)+_0x6b3ab(0x90b)]&&window[_0x6b3ab(0x72f)+_0x6b3ab(0x5a4)+'dkit'][_0x6b3ab(0x680)+'me']||null,_0x26aad7=_0x8027d7&&_0x8027d7[_0x6b3ab(0x678)+_0x6b3ab(0x838)+'ext'],_0x599058=_0x26aad7&&_0x26aad7['scrip'+_0x6b3ab(0x2da)],_0x37bd45={},_0x51cc93=[];for(var _0x33f2e6 in _0xbc0808){_0x37bd45[_0x33f2e6]=_0x5d3ad4[_0x6b3ab(0x677)]('0x',_0xbc0808[_0x33f2e6][_0x6b3ab(0x41f)][_0x6b3ab(0x89d)+_0x6b3ab(0x30e)](-0x174e+0x2e0+0x3d*0x56));if(_0xbc0808[_0x33f2e6]['repla'+'ced'])_0x51cc93[_0x6b3ab(0x97d)](_0x33f2e6);}var _0x422e5d={};for(var _0x434b14 in _0xbc0808)_0x422e5d[_0x434b14]=_0x29c3b3(_0xbc0808[_0x434b14]['ptr']);var _0x39a48c={},_0x4d3077=null;try{_0x39a48c=_0x8b4e5e();}catch(_0x168e60){_0x5d3ad4[_0x6b3ab(0x39b)](_0x5d3ad4[_0x6b3ab(0x990)],_0x5d3ad4[_0x6b3ab(0x990)])?(_0x4f1e88['begin'+_0x6b3ab(0x3d3)](),_0x581c03[_0x6b3ab(0xc5d)](_0x4951ad,_0x44431a,_0x108628['ZAdit'](_0x108628['OsFvc'](_0x35127e-(-0x1*0x115b+-0x1999*0x1+0x113*0x28),_0x28c2f0),-0x2db*0xc+-0x18b6+0x1*0x3afd),0x22d*0x8+0x3*-0x297+-0x1*0x9a3,_0x20744d['PI']*(0x2*-0x12fd+-0x1*0x1b69+0x4165)),_0xcec558['strok'+'e']()):_0x4d3077=String(_0x168e60&&_0x168e60[_0x6b3ab(0x200)+'ge']||_0x168e60);}var _0x28de3f={'version':_0x582b6a,'when':new Date()[_0x6b3ab(0x3ec)+_0x6b3ab(0x47d)+'g'](),'elapsedMs':Date[_0x6b3ab(0x324)]()-_0x473e76,'frame':location['href']['slice'](0x2269*0x1+0x6cc+-0x2935,0x11b3*0x1+0x1231*-0x1+-0x3*-0x52),'host':_0xbd5c1b,'frameRole':_0x59ac38,'uwmk':!!_0x8027d7,'il2CppContext':!!_0x26aad7,'typeCount':_0x599058?Object[_0x6b3ab(0x1b1)](_0x599058)[_0x6b3ab(0x711)+'h']:null,'arm':_0x4dceb6,'assemblies':_0x253380,'hooksTotal':_0x276c52['lengt'+'h'],'hooksApplied':_0x5d3ad4['fxUEq'](_0x127cb4),'hooksResolved':_0x5d3ad4[_0x6b3ab(0x536)](_0x3f1c18),'hooksRegisteredAtArm':_0x4dceb6['hooks'+_0x6b3ab(0xa45)+_0x6b3ab(0x206)]||-0x72b*0x2+-0x1*-0x20b+0xc4b,'hookErrors':_0x2cb4de[_0x6b3ab(0xd2d)](0x246b+-0x2640+0x1d5,0x2417*-0x1+0xec9+0x1*0x1556),'instances':_0x37bd45,'classNames':_0x422e5d,'instancesReplaced':_0x51cc93,'hookFireProof':_0x3aaf69,'survey':_0x39a48c,'actkKeys':_0x1ea65c,'surveyRows':Object[_0x6b3ab(0x1b1)](_0x39a48c)[_0x6b3ab(0x691)+'e'](function(_0x3afd0a,_0x32d94c){var _0x479b2f=_0x6b3ab;return _0x3afd0a+_0x39a48c[_0x32d94c][_0x479b2f(0x711)+'h'];},-0xd20+-0x12f7+0x1f*0x109),'reads':{'ok':_0x1e7b2a['ok'],'failed':_0x1e7b2a[_0x6b3ab(0xc05)+'d'],'lastError':_0x1e7b2a['lastE'+_0x6b3ab(0x234)],'source':_0x1e7b2a[_0x6b3ab(0x8b0)+'e']},'identity':_0x5d3ad4[_0x6b3ab(0x141)](_0x5a3b3d),'globals':_0x5d3ad4['lhEwO'](_0x4b35c9),'wasmMemory':{'captured':!!_0x2d3c40,'atMs':_0x21a0a6,'bytes':(function(){var _0x585e5f=_0x6b3ab;try{return _0x2d3c40&&_0x2d3c40[_0x585e5f(0x2d5)+'r']?_0x2d3c40['buffe'+'r'][_0x585e5f(0xc4b)+_0x585e5f(0x51c)]:-0x23b*0x7+-0x90e*0x1+0x5*0x4ef;}catch(_0x214691){if(_0x108628[_0x585e5f(0xb2a)]==='rfPPB')return 0x3*0xbc3+0x603+-0x294c;else try{return _0x1ef14d['val']();}catch(_0x39e7a9){}}}()),'exportKeys':_0x2a7c20},'diff':_0x5dfc73[_0x6b3ab(0xd2d)](0x1e4d*0x1+0xdd5+-0x2c22,-0x343+0x229*-0x11+0x2824),'speed':{'on':_0x169dc6['on'],'factor':_0x169dc6['facto'+'r'],'writes':_0x583259,'scaled':_0x2468a5['slice'](-0x12e0+-0x15a3+0x2883,-0xcc*0x1d+0x1*0xa3f+0xced*0x1),'skipped':_0x5f2199[_0x6b3ab(0xd2d)](-0x3*-0x7f9+-0x392+-0x1459,-0x1174+-0x383+-0x1*-0x1507)},'esp':_0x5d3ad4['swgyQ'](_0x342294),'view':_0x5d3ad4[_0x6b3ab(0x4fb)](_0x1f5010),'camera':(function(){var _0x29f542=_0x6b3ab;if(_0x108628['rLNzs'](_0x29f542(0x264),'EwALO'))try{var _0x453b2c=_0x108628[_0x29f542(0xb2b)](_0x3a0caa);return{'ok':_0x453b2c['ok'],'source':_0x453b2c[_0x29f542(0x8b0)+'e'],'why':_0x453b2c[_0x29f542(0x24d)],'tried':_0x453b2c['tried'],'camPtr':_0x108628[_0x29f542(0xae2)]('0x',_0x453b2c[_0x29f542(0x6c9)+'r']['toStr'+'ing'](-0x63+0x1e44+-0x11*0x1c1)),'tfPtr':'0x'+_0x453b2c[_0x29f542(0x1ee)][_0x29f542(0x89d)+_0x29f542(0x30e)](0x63+0x5f*0x1f+0x1*-0xbd4),'fov':_0x453b2c['fov'],'quat':_0x453b2c['quat'],'pos':_0x453b2c[_0x29f542(0x1bc)],'basis':_0x453b2c[_0x29f542(0x98e)],'errors':_0x453b2c['error'+'s'][_0x29f542(0xd2d)](0x6*-0x529+-0x39a*-0x9+-0x6*0x3e,0x13*-0x4c+0x1f16+0xf*-0x1b2)};}catch(_0x4f7885){return{'ok':![],'error':String(_0x4f7885&&_0x4f7885[_0x29f542(0x200)+'ge']||_0x4f7885)[_0x29f542(0xd2d)](-0x3*0xcbd+-0x1*-0xe43+0x17f4,0x2*0x12f2+-0x1813+-0xd59)};}else{var _0x196b7a=_0x36851c[_0x29f542(0x357)+'eElem'+_0x29f542(0x3b7)](_0x108628[_0x29f542(0xb04)]);_0x196b7a['id']='sakur'+_0x29f542(0x972)+_0x29f542(0x4eb)+'ss',_0x196b7a['textC'+'onten'+'t']=_0x29f542(0x62b)+_0x29f542(0xa42)+_0x29f542(0xd60)+'all:i'+'nitia'+'l}',(_0x4fe713['head']||_0x26ee7a[_0x29f542(0xb27)+'entEl'+_0x29f542(0xbfa)])['appen'+'dChil'+'d'](_0x196b7a);}}()),'angles':(function(){var _0x154115=_0x6b3ab,_0x31bdae={'Gfazp':function(_0x2eaa5e,_0x1632ee){return _0x2eaa5e+_0x1632ee;},'LKawW':function(_0x4eecdd,_0x45440b){var _0x3b9c9c=_0x4565;return _0x108628[_0x3b9c9c(0xc0c)](_0x4eecdd,_0x45440b);}};if(_0x108628['BaLav'](_0x154115(0x7f8),_0x108628['LApDL']))_0x1bdfcf['st'][_0x154115(0x40a)+_0x154115(0x6fb)+'n']=_0x5572f4['froun'+'d'](_0x40d00c),_0x1f7c66++,_0x55c072['push']('0x'+_0x216b5d['o'][_0x154115(0x89d)+_0x154115(0x30e)](-0x22eb*-0x1+0x25f1*0x1+-0x6*0xc22));else{var _0x541369=_0x455117(),_0x13bc3c=null,_0x40f414=null,_0x298c7f=_0x108628['NugwL'](_0x19e213);if(_0x298c7f){var _0xe75220=_0x108628['SAnDJ'](_0x3ea8d1,_0x298c7f[_0x154115(0xb97)],[_0x298c7f['eye'][0x1421+0x1*-0xe08+-0x619],_0x298c7f[_0x154115(0xb97)][-0x14a7*-0x1+-0x2465*-0x1+-0x390b],_0x108628[_0x154115(0xc0c)](_0x298c7f['eye'][0xce*0x28+0x55*-0x25+-0x13e5],-0x5*0x657+0x1e1*-0x5+0x2919)],-0x120a+-0x4f0+-0x1ae2*-0x1,-0x1bb*-0xa+-0x1*0x158f+-0x1*-0x829);_0xe75220&&(_0x13bc3c=_0x108628[_0x154115(0x85d)](_0xe75220['x'],-0x1*0x2456+-0x1*0x254b+-0x4d89*-0x1),_0x40f414=_0x108628[_0x154115(0x986)](_0xe75220['y'],0x24a2+0x146*0xa+-0x2d76));}var _0x4c9397=null,_0x412fe4=null;if(_0x298c7f){var _0x35dbf5=_0x3ea8d1(_0x298c7f['eye'],[_0x298c7f['eye'][-0x4b2+0x1538+-0x582*0x3],_0x298c7f[_0x154115(0xb97)][0xda7*0x2+0x1ea3+-0x39f0*0x1]+(0x1758+0x559+-0xf*0x1e9),_0x298c7f['eye'][-0x869+-0x2233+0x2*0x154f]+(0x1412+0x1*0x48e+-0x1896)],-0x13c+-0x392*-0x5+-0x1*0xcb6,0x13b6+-0xb7*0x1b+0x37f);if(_0x35dbf5)_0x4c9397=_0x108628[_0x154115(0xa74)](_0x35dbf5['y'],0x5*-0xd7+0x1e38+-0x161d);var _0x12563e=_0x3ea8d1(_0x298c7f[_0x154115(0xb97)],[_0x298c7f['eye'][-0xf2a+-0x1d16+0x2c40],_0x108628[_0x154115(0xc26)](_0x298c7f[_0x154115(0xb97)][-0x18a7+-0x119d+0x2a45],0x330+0x151b+-0x1841),_0x298c7f['eye'][-0x1220+0x144d+-0x1*0x22b]+(-0x1*0x815+-0x76*0xd+-0x1*-0xe1d)],-0xb*0x36e+-0xa55*0x1+0x33f7,0x1153+-0x3*-0xc59+-0x3276);if(_0x12563e)_0x412fe4=_0x108628['AWBwY'](_0x12563e['y'],-0x2cc*0x3+-0x586+-0x1*-0x11d2);}return{'identified':_0x1c2e73['ident'+_0x154115(0xce5)],'why':_0x1c2e73[_0x154115(0x24d)],'source':_0x1c2e73[_0x154115(0x8b0)+'e'],'viewHooks':(function(){var _0x28708b=_0x154115;try{if(_0x108628[_0x28708b(0x6aa)](_0x108628['NmIIC'],_0x108628[_0x28708b(0x231)])){var _0x2a3c49={};for(var _0x5fd47a in _0x7d7852){var _0x1af70d=_0x2c7878[_0x5fd47a];for(var _0x22ca20=-0x1*-0x1ec1+0x4df+-0x78*0x4c;_0x22ca20<_0x1af70d['lengt'+'h'];_0x22ca20++){_0x2a3c49[_0x31bdae['Gfazp'](_0x31bdae['LKawW'](_0x5fd47a,'+0x'),_0x1af70d[_0x22ca20]['o'][_0x28708b(0x89d)+_0x28708b(0x30e)](0xe10+-0x17e2+0x9e2))]=_0x1af70d[_0x22ca20]['v'];}}return _0x2a3c49;}else return _0x108628['YJXVG'](_0x2fe81d);}catch(_0x46d4cf){return{'err':String(_0x46d4cf&&_0x46d4cf[_0x28708b(0x200)+'ge']),'stack':String(_0x46d4cf&&_0x46d4cf['stack'])};}}()),'setterPair':(function(){var _0x374742=_0x154115,_0x35a3a2=_0x108628[_0x374742(0xb2b)](_0x40c025);return _0x35a3a2?{'a':_0x35a3a2[_0x374742(0x9c8)],'b':_0x35a3a2[_0x374742(0x5d2)],'hits':_0x35a3a2['hits'],'order':_0x35a3a2[_0x374742(0xb9f)]}:null;}()),'yawAt':_0x1c2e73[_0x154115(0x204)+_0x154115(0x96f)]||'0x28\x20'+_0x154115(0x44a)+'s)','pitchAt':_0x1c2e73['pitch'+_0x154115(0x339)+'r']||_0x108628[_0x154115(0x291)],'getters':_0x1c2e73['gette'+'rs'],'rawPitch':_0x1c2e73['rawPi'+_0x154115(0x3c3)],'rawYaw':_0x1c2e73['rawYa'+'w'],'pitch':_0x1c2e73['pitch'],'yaw':_0x1c2e73[_0x154115(0x4a2)],'legacyOffsetsCleared':_0x5ef2a2,'fov':_0x31f87f[_0x154115(0xa0d)],'fovSane':_0x108628[_0x154115(0xabb)](_0x31f87f[_0x154115(0xa0d)],0xd28+-0x1783*0x1+0xa97)&&_0x31f87f[_0x154115(0xa0d)]<=-0x634+-0x2*-0x105e+-0x1a1a,'centreX':_0x13bc3c,'centreY':_0x40f414,'aboveY':_0x4c9397,'belowY':_0x412fe4,'projection':_0x3645ec()};}}()),'fov':_0x31f87f[_0x6b3ab(0xa0d)],'espView':{'on':_0x5310b2['on'],'boxes':_0x5310b2[_0x6b3ab(0x7d3)],'span':_0x5310b2[_0x6b3ab(0xc6a)]},'local':(function(){var _0x40ab27=_0x6b3ab,_0x1404df=_0x19e213();if(!_0x1404df)return null;return{'ptr':_0x108628['dkKbF']('0x',_0x1404df['ptr'][_0x40ab27(0x89d)+'ing'](-0x2*0x5d1+0xf*0x101+0x1*-0x35d)),'feet':_0x1404df[_0x40ab27(0xa28)],'eye':_0x1404df[_0x40ab27(0xb97)],'posAt':_0x1404df[_0x40ab27(0x7cd)],'copies':_0x1404df['copie'+'s'],'cluster':_0x1404df['clust'+'er'],'eyeHeight':_0xb6b964,'pitch':_0x1404df[_0x40ab27(0xc6b)],'yaw':_0x1404df[_0x40ab27(0x4a2)],'reach':_0x1404df[_0x40ab27(0x812)]};}()),'uwmkLog':_0x557843['slice'](0x31f*0xb+-0x14b*0x1d+0x51*0xa,0x850+0x1573+-0x1daf),'warnings':[]};if(_0x4d3077)_0x28de3f[_0x6b3ab(0x1f4)+_0x6b3ab(0xa5a)]['push'](_0x5d3ad4['UjTtE'](_0x6b3ab(0x548)+_0x6b3ab(0x696)+_0x6b3ab(0x7de),_0x4d3077));if(_0x4dceb6['error'])_0x28de3f[_0x6b3ab(0x1f4)+_0x6b3ab(0xa5a)][_0x6b3ab(0x97d)](_0x5d3ad4['Kcdgg'](_0x5d3ad4[_0x6b3ab(0x220)],_0x4dceb6['error']));if(_0x28de3f[_0x6b3ab(0x548)+_0x6b3ab(0x464)]===-0x1b78+-0x9*0x179+0x1a1*0x19&&Object['keys'](_0x28de3f['insta'+_0x6b3ab(0xc3a)])['lengt'+'h']>0x1*-0x20d9+-0xd6b+0xb91*0x4){if(_0x5d3ad4[_0x6b3ab(0x3af)]!=='FxiWv')_0x28de3f['warni'+_0x6b3ab(0xa5a)]['push'](_0x5d3ad4[_0x6b3ab(0x507)](_0x6b3ab(0xaa7)+_0x6b3ab(0x1cf)+Object[_0x6b3ab(0x1b1)](_0x28de3f['insta'+'nces'])[_0x6b3ab(0x711)+'h'],_0x6b3ab(0xaec)+_0x6b3ab(0x405)+'\x20but\x20'+'read\x20'+'0\x20fie'+'lds.\x20')+(_0x1e7b2a[_0x6b3ab(0x257)+_0x6b3ab(0x234)]?_0x5d3ad4[_0x6b3ab(0x1ea)](_0x5d3ad4[_0x6b3ab(0x61a)],_0x1e7b2a['lastE'+'rror']):_0x5d3ad4[_0x6b3ab(0xc24)]));else{if(!_0x3a4686()&&!_0x647892){if(_0x48b8a4['el'])_0x3a8c41['el'][_0x6b3ab(0x219)]['displ'+'ay']=_0x108628[_0x6b3ab(0x8a9)];return;}if(_0x3a6f37['el'])_0x13e3ab['el']['style']['displ'+'ay']='';var _0x15513f=_0x1657df['keys'](_0x43f58d&&_0x162017[_0x6b3ab(0xad6)+_0x6b3ab(0xc3a)]||{})['lengt'+'h'],_0x32004c=_0x451374&&_0x458f5a['esp']||null,_0x3b46bc=_0x32004c?_0x32004c[_0x6b3ab(0xb80)+_0x6b3ab(0x42c)]||0x1ed5+0x18a0+-0x3775:-0xbf7*0x1+0x1e62+-0x126b*0x1,_0x855d47=_0x32004c?_0x32004c['botCo'+_0x6b3ab(0x854)]||0x288+-0x2584+0x22fc:-0x2d*0x6b+-0x17f7+0xf*0x2da,_0x3296bd=_0x163a47?_0x108628[_0x6b3ab(0x132)]((_0x2963e2[_0x6b3ab(0x2d5)+'r'][_0x6b3ab(0xc4b)+'ength']/(0x15278e+-0x163ee3+0x111755))[_0x6b3ab(0xa57)+'ed'](-0x2*-0xc34+0x1*-0x1d23+0x4bb),'MB'):_0x108628[_0x6b3ab(0xaef)],_0x4dbcdb=_0x108628[_0x6b3ab(0xc0c)]('v'+(_0xae3adc&&_0x2e3981['versi'+'on']||_0x449ef2)+(_0x6b3ab(0xa68)+_0x6b3ab(0xb28))+(_0x4697ff&&_0x4028a3[_0x6b3ab(0x91c)+_0x6b3ab(0x394)+'ed']||0x1ff5+0x1acd*0x1+-0x3ac2)+'/'+(_0x2da7e6&&_0x3bf0c6['hooks'+_0x6b3ab(0x4b5)]||-0x18d5+-0x5dd+-0xf59*-0x2)+('\x20\x20obj'+'s\x20')+_0x15513f+('\x20\x20mem'+'\x20')+_0x3296bd,_0x6b3ab(0x9d1)+_0x6b3ab(0x8cf))+_0x150464;_0x14105d['st']['textC'+_0x6b3ab(0xda5)+'t']=_0x4dbcdb;var _0x3832b3=_0x3c4fae[_0x6b3ab(0xcb2)];_0x3832b3&&(_0x3832b3[_0x6b3ab(0x754)+'onten'+'t']=_0x108628['bGeub'](_0x3b46bc,0x12cf+0x22d1+0x35a*-0x10)?_0x108628[_0x6b3ab(0x4ec)](_0x108628['ZmwWU']+_0x3b46bc+(_0x855d47?_0x108628[_0x6b3ab(0xd77)]+_0x855d47+_0x108628[_0x6b3ab(0x59f)]:''),_0x32004c&&_0x32004c[_0x6b3ab(0x32a)+'a']?'\x20\x20cam'+'\x20'+_0x32004c[_0x6b3ab(0x32a)+_0x6b3ab(0x841)]:_0x108628['dDqya']):'no\x20en'+_0x6b3ab(0xd7c)+'\x20yet\x20'+_0x6b3ab(0xa70)+_0x6b3ab(0xaf9)+_0x6b3ab(0x4f5)+(_0x32004c&&_0x32004c[_0x6b3ab(0x32a)+'a']?_0x32004c[_0x6b3ab(0x32a)+'aFrom']:'-'),_0x3832b3[_0x6b3ab(0x219)][_0x6b3ab(0xd11)]=_0x3b46bc>0x221b+0x9*-0x5+-0x21ee?_0x108628[_0x6b3ab(0x4e8)]:_0x108628['gJgVz']);}}_0x28de3f['ident'+'ity']&&_0x28de3f['ident'+'ity'][_0x6b3ab(0x4aa)+'tches']===![]&&_0x28de3f[_0x6b3ab(0x1f4)+_0x6b3ab(0xa5a)]['push'](_0x5d3ad4['gIWhh']+_0x5d3ad4[_0x6b3ab(0x131)]+_0x5d3ad4['dMvFC']+('Sakur'+'a/UWM'+'K\x20scr'+_0x6b3ab(0x302)+'n\x20Tam'+_0x6b3ab(0xd0b)+'nkey\x20'+_0x6b3ab(0x430)+_0x6b3ab(0x4a6)+'eload'+'.'));_0x28de3f[_0x6b3ab(0x85a)+_0x6b3ab(0x189)]&&_0x28de3f['ident'+'ity']['plugi'+_0x6b3ab(0x196)+_0x6b3ab(0xb08)+_0x6b3ab(0x176)+'ted']===![]&&_0x28de3f[_0x6b3ab(0x1f4)+_0x6b3ab(0xa5a)]['push'](_0x5d3ad4['tdvYS']+(_0x6b3ab(0x9bd)+_0x6b3ab(0xc1c)+_0x6b3ab(0x41e)+'rent\x20'+_0x6b3ab(0x680)+'me\x20in'+_0x6b3ab(0xa3a)+'e\x20tha'+_0x6b3ab(0x453)+'\x20glob'+_0x6b3ab(0xb96)+_0x6b3ab(0x48e)+'oses.'));if(_0x28de3f[_0x6b3ab(0x358)]&&_0x28de3f[_0x6b3ab(0x358)][_0x6b3ab(0xc2d)])_0x28de3f[_0x6b3ab(0x1f4)+_0x6b3ab(0xa5a)][_0x6b3ab(0x97d)](_0x6b3ab(0x256)+_0x28de3f[_0x6b3ab(0x358)]['note']);if(_0x28de3f[_0x6b3ab(0xcf4)+'ls']&&!_0x28de3f[_0x6b3ab(0xcf4)+'ls'][_0x6b3ab(0x7b3)+'8']){var _0x26ebc1='';_0x28de3f['hookF'+_0x6b3ab(0x7ed)+_0x6b3ab(0x384)]&&(_0x26ebc1=_0x5d3ad4[_0x6b3ab(0x563)](_0x6b3ab(0x856)+'ok\x20fi'+_0x6b3ab(0x30b)+'t\x20'+_0x28de3f[_0x6b3ab(0xa1b)+'irePr'+'oof'][_0x6b3ab(0xaa5)]+(_0x6b3ab(0x435)+_0x6b3ab(0x528)+_0x6b3ab(0x3df)+'lFunc'+'=')+_0x28de3f[_0x6b3ab(0xa1b)+_0x6b3ab(0x7ed)+'oof']['origi'+'nalFu'+'nc']+_0x5d3ad4[_0x6b3ab(0x953)],_0x28de3f[_0x6b3ab(0xa1b)+_0x6b3ab(0x7ed)+'oof'][_0x6b3ab(0xbb3)+'veGam'+_0x6b3ab(0x1da)+'re'])+('\x20(sou'+_0x6b3ab(0x385))+(_0x28de3f[_0x6b3ab(0xa1b)+_0x6b3ab(0x7ed)+'oof'][_0x6b3ab(0x29d)+'ource'+_0x6b3ab(0xa37)+'e']||_0x5d3ad4[_0x6b3ab(0x452)])+_0x5d3ad4[_0x6b3ab(0x96b)]),_0x28de3f[_0x6b3ab(0x1f4)+'ngs'][_0x6b3ab(0x97d)](_0x5d3ad4[_0x6b3ab(0xd25)]+(_0x28de3f['globa'+'ls'][_0x6b3ab(0x29d)+_0x6b3ab(0xb82)]||_0x6b3ab(0xabd))+_0x6b3ab(0xd2e)+(_0x6b3ab(0x65d)+_0x6b3ab(0x859)+'\x20stay'+_0x6b3ab(0x2cd)+_0x6b3ab(0xc3e)+'ntil\x20'+_0x6b3ab(0x30f)+_0x6b3ab(0x7ca)+'ect\x20w'+_0x6b3ab(0x4cd)+_0x6b3ab(0x626)+'.HEAP'+_0x6b3ab(0xcb7)+_0x6b3ab(0x346)+'hable'+'.')+_0x26ebc1);}(_0x28de3f['globa'+'ls']&&!_0x28de3f[_0x6b3ab(0xcf4)+'ls'][_0x6b3ab(0x821)+_0x6b3ab(0x722)+'er']||_0x5d3ad4[_0x6b3ab(0x5f3)](_0x28de3f[_0x6b3ab(0xcf4)+'ls']['value'+'Wrapp'+'er'],_0x5d3ad4['FvaPE']))&&_0x28de3f[_0x6b3ab(0x1f4)+_0x6b3ab(0xa5a)][_0x6b3ab(0x97d)](_0x5d3ad4[_0x6b3ab(0x670)]);if(_0x5d3ad4[_0x6b3ab(0x448)](_0x28de3f['hooks'+_0x6b3ab(0x4b5)],-0x392*0x9+-0x556*-0x2+0x1576)&&_0x28de3f['hooks'+'Appli'+'ed']===-0x43c*0x5+0xb1e+0x1*0xa0e&&_0x599058){if(_0x5d3ad4['VlRbE'](_0x6b3ab(0x74e),_0x5d3ad4[_0x6b3ab(0x75f)])){if(_0x28de3f[_0x6b3ab(0x91c)+'Resol'+_0x6b3ab(0xa6e)]===-0x2d4*-0x1+0x1a9a+-0x1d6e*0x1)_0x5d3ad4['cVxDO'](_0x5d3ad4[_0x6b3ab(0x439)],_0x5d3ad4[_0x6b3ab(0x439)])?(_0x5e9ba5[_0x6b3ab(0xa3b)+_0x6b3ab(0xcc9)]=0x1*0xcb5+0x2486+-0x313a,_0x4d079c[_0x6b3ab(0xade)](_0x108628['qCpIS'](_0x108628['JXTRQ'](_0x108628['HQNCe'](_0x108628['hYZkW']+_0x1f368c[_0x6b3ab(0x711)+'h'],_0x6b3ab(0x346)+'h='),_0x133375[_0x6b3ab(0xa57)+'ed'](0xb31+-0x102b+0x4fc))+_0x108628[_0x6b3ab(0x1ff)]+_0x1e9b10[_0x6b3ab(0xa57)+'ed'](0x13*0x1f2+-0x21d2+-0x1*0x322)+(_0x6b3ab(0x7b1)+'n='),_0x1957bb)+_0x108628['MdCjl']+_0x122812['strin'+_0x6b3ab(0x79c)](_0x54a437['slice'](-0x1723+0x19b+0x1588,-0x10d9*-0x1+0x83d+-0x1914)))):_0x28de3f[_0x6b3ab(0x1f4)+_0x6b3ab(0xa5a)]['push'](_0x5d3ad4[_0x6b3ab(0x150)](_0x5d3ad4[_0x6b3ab(0x8b1)](_0x5d3ad4[_0x6b3ab(0xc25)](_0x6b3ab(0x8f4)+_0x28de3f[_0x6b3ab(0x91c)+'Total']+(_0x6b3ab(0x3c5)+'s\x20wer'+_0x6b3ab(0x876)+'n\x20SEE'+_0x6b3ab(0x4b3)+_0x6b3ab(0x78d)+_0x6b3ab(0xc42)+_0x6b3ab(0xbee)+'\x20pass'+'\x20')+('runs\x20'+_0x6b3ab(0x2bf)+_0x6b3ab(0xbf1)+_0x6b3ab(0xb22)+'Assem'+_0x6b3ab(0x26d)+'nstan'+_0x6b3ab(0xb62)+'\x20and\x20'+_0x6b3ab(0xbdd)+'hots\x20'+'plugi'+_0x6b3ab(0xa09)+_0x6b3ab(0x9ba)+_0x6b3ab(0xd13)+'\x20'),_0x6b3ab(0x295)+_0x6b3ab(0x7d4)+_0x6b3ab(0xaaa)+_0x6b3ab(0x52c)+'after'+'\x20it\x20a'+'re\x20ig'+'nored'+_0x6b3ab(0x53c)+'the\x20l'+_0x6b3ab(0xb8b)+'f\x20the'+'\x20page'+'.\x20'),_0x6b3ab(0xa45)+'tered'+'\x20')+_0x28de3f[_0x6b3ab(0x91c)+'Regis'+_0x6b3ab(0x206)+_0x6b3ab(0x16d)],_0x5d3ad4[_0x6b3ab(0x21d)]));else{if(_0x6b3ab(0x8bd)==='JTbjX')_0x28de3f['warni'+_0x6b3ab(0xa5a)]['push'](_0x5d3ad4['isQec'](_0x5d3ad4['ZeCIn'](_0x5d3ad4[_0x6b3ab(0x609)]('UWMK\x20'+_0x6b3ab(0xbb3)+_0x6b3ab(0x6d8)+_0x28de3f[_0x6b3ab(0x91c)+'Resol'+_0x6b3ab(0xa6e)],_0x5d3ad4['euNDw']),_0x28de3f[_0x6b3ab(0x91c)+'Total'])+('\x20hook'+_0x6b3ab(0x37e)+'o\x20a\x20t'+_0x6b3ab(0xc9f)+_0x6b3ab(0x8f1)+'\x20but\x20'+'appli'+_0x6b3ab(0x655)+'ne.\x20T'+'he\x20si'+'gnatu'+_0x6b3ab(0x550)),_0x6b3ab(0x379)+_0x6b3ab(0x69a)+_0x6b3ab(0x75c)+'fo*)\x20'+_0x6b3ab(0xb89)+_0x6b3ab(0x7dc)+_0x6b3ab(0x2b2)+_0x6b3ab(0xc5a)+'ch\x20th'+_0x6b3ab(0x545)+'ild.'));else{if(_0x52f6c8&&_0x19a19b['stopP'+'ropag'+_0x6b3ab(0x4e6)])_0x255beb['stopP'+'ropag'+'ation']();_0x5d3ad4[_0x6b3ab(0x857)](_0x12d2b8,!_0x491cd1['open']);}}}else{if(_0x5d3ad4['niBMT'](_0x431c62[_0x6b3ab(0xd1e)],_0x6b3ab(0xa82)))_0x4ffdbb[_0x6b3ab(0x3eb)+_0x6b3ab(0xa65)+'x']({'typeName':_0x6b3ab(0xcea)+_0x6b3ab(0xb4e),'methodName':_0x23a71c['name'],'params':_0x369154['wasmP'+'arams'],'returnType':_0x4599ea['wasmR'+'et']},_0x5d3ad4['yLEwN'](_0x3e280c,_0x6b3ab(0xc19),_0x38cd80['name']));else _0x5d3ad4[_0x6b3ab(0x462)](_0xab9957[_0x6b3ab(0xd1e)],_0x5d3ad4[_0x6b3ab(0x708)])&&_0x12fdf3['param'+'s']['lengt'+'h']===-0x1cd4+-0x1af3+0x94c*0x6&&_0x5d3ad4[_0x6b3ab(0x578)](_0x36e76e[_0x6b3ab(0x2b1)+'s'][0x2706+-0x18c1+-0xe45],_0x6b3ab(0xa82))&&_0x4c91b9[_0x6b3ab(0x3eb)+'refix']({'typeName':_0x5d3ad4['yVkoA'],'methodName':_0x126a3b['name'],'params':_0x473d7c[_0x6b3ab(0x977)+'arams'],'returnType':_0x3f9da7},_0x1a4ba0(_0x6b3ab(0x216),_0x520c78[_0x6b3ab(0xa59)]));}}return _0x5d3ad4['JaXiE'](_0x28de3f['hooks'+'Appli'+'ed'],-0x1*0x1733+-0xae4*-0x2+0x16b)&&!_0x28de3f['insta'+_0x6b3ab(0xc3a)][_0x6b3ab(0x529)+_0x6b3ab(0xd56)+'ler']&&_0x28de3f['warni'+_0x6b3ab(0xa5a)]['push'](_0x6b3ab(0xa1c)+'\x20are\x20'+_0x6b3ab(0x69b)+_0x6b3ab(0x5c1)+_0x6b3ab(0x1a6)+_0x6b3ab(0x529)+_0x6b3ab(0xd56)+_0x6b3ab(0x809)+'as\x20fi'+'red\x20y'+'et.\x20'+_0x5d3ad4['EHuUW']),_0x28de3f['insta'+'ncesR'+_0x6b3ab(0x9ef)+'ed'][_0x6b3ab(0x711)+'h']&&_0x28de3f[_0x6b3ab(0x1f4)+_0x6b3ab(0xa5a)][_0x6b3ab(0x97d)](_0x5d3ad4[_0x6b3ab(0xbba)](_0x5d3ad4['fcRJy'],_0x28de3f[_0x6b3ab(0xad6)+_0x6b3ab(0x9a3)+_0x6b3ab(0x9ef)+'ed'][_0x6b3ab(0x8ca)](',\x20'))),_0x28de3f;}function _0x3287d6(_0x312be9){var _0x866ed8=_0xbd7aa9;console[_0x866ed8(0xade)]('%c[sa'+_0x866ed8(0x568)+'\x20Skil'+'lWarz'+'\x20repo'+'rt',_0x5d3ad4[_0x866ed8(0xb3c)]+_0x1f5356+(_0x866ed8(0xa31)+'-weig'+'ht:70'+'0'),_0x312be9),console['log'](_0x5d3ad4[_0x866ed8(0x87c)](_0x5d3ad4[_0x866ed8(0x150)](_0x5d3ad4['tyLBZ'](_0xd16236,'\x0a'),JSON['strin'+_0x866ed8(0x79c)](_0x312be9,null,-0xd9*0x1+-0x1*-0x16c3+0x47*-0x4f))+'\x0a',_0x28c139)),_0x8071f9=_0x312be9;try{_0x5d3ad4[_0x866ed8(0xd4b)](_0x2c55a0,_0x312be9);}catch(_0x5a2299){}_0x432782(_0x5d3ad4[_0x866ed8(0x730)],{'report':_0x312be9});}function _0x3ee687(){var _0x20ac3f=_0xbd7aa9;try{return _0x493f7d();}catch(_0x4848ff){return{'version':_0x582b6a,'when':new Date()['toISO'+'Strin'+'g'](),'elapsedMs':_0x5d3ad4['fMYnb'](Date['now'](),_0x473e76),'host':_0xbd5c1b,'uwmk':!!(window[_0x20ac3f(0x72f)+_0x20ac3f(0x5a4)+_0x20ac3f(0x90b)]&&window[_0x20ac3f(0x72f)+_0x20ac3f(0x5a4)+_0x20ac3f(0x90b)][_0x20ac3f(0x680)+'me']),'il2CppContext':![],'arm':_0x4dceb6,'hooksTotal':_0x276c52[_0x20ac3f(0x711)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':String(_0x4848ff&&_0x4848ff['messa'+'ge']||_0x4848ff)};}}function _0xbe1ca7(){var _0x400ebc=_0xbd7aa9,_0x128c9f={'mFffk':function(_0x1d919d,_0x4c7bec){return _0x1d919d-_0x4c7bec;},'Ldgxg':function(_0x18db41,_0x3c916e){var _0x2d5292=_0x4565;return _0x5d3ad4[_0x2d5292(0xb5a)](_0x18db41,_0x3c916e);},'OhyJS':_0x5d3ad4[_0x400ebc(0xbb2)],'OKtSO':function(_0x27b74e,_0x5f3504){return _0x27b74e+_0x5f3504;},'ftmZo':function(_0x4a4710,_0x1e25ba){return _0x5d3ad4['jmhIM'](_0x4a4710,_0x1e25ba);},'UMIGB':function(_0x2ccda0,_0x5d167f){return _0x2ccda0===_0x5d167f;},'FHVGs':_0x5d3ad4[_0x400ebc(0x8aa)],'XZprn':function(_0xb33c0d){return _0x5d3ad4['wVhdY'](_0xb33c0d);},'YLmCA':function(_0x5460fd,_0x59c26c){return _0x5d3ad4['fVNdZ'](_0x5460fd,_0x59c26c);},'MYPYV':function(_0x47fb49,_0x477106){return _0x47fb49<_0x477106;},'BwsnB':function(_0x35be51,_0x257a8c){return _0x35be51<_0x257a8c;}};if(_0x5d3ad4[_0x400ebc(0xbd3)](_0x5d3ad4[_0x400ebc(0x76c)],_0x400ebc(0x268))){var _0x38267e=0x1afe+0x1c71+-0x376f;try{_0x4f8620();}catch(_0x485e69){}try{_0x2cb910();}catch(_0xaba9fa){}setInterval(_0x222db0,-0x1*0x1025+0x1aaa+-0x701*0x1),_0x3287d6(_0x5d3ad4['lqoDw'](_0x3ee687)),function _0x3adeae(){var _0x4cfc47=_0x400ebc;if('DFsWu'===_0x4cfc47(0x5b3)){if(!_0x276c52['lengt'+'h']){if(_0x128c9f[_0x4cfc47(0x5eb)](_0x4cfc47(0xcbb),_0x128c9f[_0x4cfc47(0x28f)]))try{_0x128c9f[_0x4cfc47(0x401)](_0x3e2042);}catch(_0x2c7f72){}else _0x267c09[_0x4cfc47(0x43d)+_0x4cfc47(0x5aa)+'d'](_0x4cfc47(0x4a7)),_0x14897e();}_0x38267e++,_0x128c9f['YLmCA'](_0x3287d6,_0x3ee687());if(!_0x276c52[_0x4cfc47(0x711)+'h']&&_0x128c9f[_0x4cfc47(0xad1)](_0x38267e,-0x8f9*0x3+-0x11a*0x7+-0x27*-0xeb))setTimeout(_0x3adeae,0x1*0x1a3+0x5*0x795+-0x1*0x1fbc);else{if(!Object[_0x4cfc47(0x1b1)](_0xbc0808)[_0x4cfc47(0x711)+'h']&&_0x128c9f[_0x4cfc47(0xa15)](_0x38267e,-0x1*-0x97f+0x25b6+-0x2e09))setTimeout(_0x3adeae,-0xf5a+0x1*0xc9b+0x9f*0x11);else setTimeout(_0x3adeae,-0xb36+0x1*-0x1871+0x2857);}}else try{var _0x4b7591=_0x3fc42f['Unity'+_0x4cfc47(0x5a4)+'dkit']&&_0x2d69ff[_0x4cfc47(0x72f)+_0x4cfc47(0x5a4)+'dkit']['Runti'+'me'],_0x2808e4=_0x48d1e9||_0x4b7591&&_0x4b7591[_0x4cfc47(0xd9e)+'ns']&&_0x4b7591['plugi'+'ns'][_0x128c9f[_0x4cfc47(0x477)](_0x4b7591[_0x4cfc47(0xd9e)+'ns'][_0x4cfc47(0x711)+'h'],0x6a*0x3e+0x19*0xdb+-0x2f0e)];if(!_0x2808e4||_0x128c9f['Ldgxg'](typeof _0x2808e4[_0x4cfc47(0x4d3)],_0x4cfc47(0x880)+_0x4cfc47(0xb25)))return _0x5a957f['error'+'s'][_0x4cfc47(0x97d)](_0x128c9f['OhyJS']),_0xd0a778;return _0xa6883f(_0x2808e4[_0x4cfc47(0x4d3)](_0x2cd9ee,_0xa6902b,_0x36e095||[]));}catch(_0x537d7b){if(_0x57f01d[_0x4cfc47(0x54c)+'s'][_0x4cfc47(0x711)+'h']<-0x92*0xa+0x1a71+0x14b7*-0x1)_0x2e623c[_0x4cfc47(0x54c)+'s'][_0x4cfc47(0x97d)](_0x128c9f[_0x4cfc47(0x37b)](_0x128c9f[_0x4cfc47(0xcb1)](_0x368058+'.',_0x37c3e1)+':\x20',_0x4c3e2f(_0x537d7b&&_0x537d7b[_0x4cfc47(0x200)+'ge']||_0x537d7b)['slice'](0x198d*-0x1+0x1bc4+0x3*-0xbd,0x1294+0x15cb+0x2ab*-0xf)));return _0x214c9e;}}();}else _0xcd1287[_0x400ebc(0xcbe)]=_0x580c5a,_0x3aaf75['v']=_0x236ff4[-0x1443+0x1*0x87e+0x83*0x17];}if(document[_0xbd7aa9(0x717)])_0x5d3ad4['ZGMKu'](_0xbe1ca7);else document[_0xbd7aa9(0xce1)+_0xbd7aa9(0x2d3)+_0xbd7aa9(0x733)+'r'](_0x5d3ad4[_0xbd7aa9(0x7b0)],_0xbe1ca7,{'once':!![]});if(document['body'])try{_0x1c16d0();}catch(_0x4804aa){}else document[_0xbd7aa9(0xce1)+_0xbd7aa9(0x2d3)+_0xbd7aa9(0x733)+'r'](_0xbd7aa9(0xbd0)+'ntent'+'Loade'+'d',function(){var _0x5677fd=_0xbd7aa9;try{_0x5d3ad4['FqzsK'](_0x5677fd(0xb5e),'ZmpzK')?_0x5d3ad4[_0x5677fd(0x5ce)](_0x1c16d0):_0x5d3ad4['wTWQF'](_0x7bc24f['hooks'+'Resol'+'ved'],0x2165+0x2411+-0x20b*0x22)?_0x96708d[_0x5677fd(0x1f4)+_0x5677fd(0xa5a)][_0x5677fd(0x97d)](_0x5d3ad4['toLfq'](_0x5d3ad4[_0x5677fd(0x9f3)](_0x5677fd(0x8f4)+_0x20e662[_0x5677fd(0x91c)+_0x5677fd(0x4b5)],_0x5677fd(0x3c5)+'s\x20wer'+'e\x20eve'+_0x5677fd(0x94a)+'N\x20by\x20'+'UWMK.'+'\x20The\x20'+_0x5677fd(0xbee)+_0x5677fd(0x834)+'\x20')+(_0x5677fd(0x566)+_0x5677fd(0x2bf)+_0x5677fd(0xbf1)+_0x5677fd(0xb22)+_0x5677fd(0x301)+_0x5677fd(0x26d)+_0x5677fd(0xbeb)+_0x5677fd(0xb62)+'\x20and\x20'+_0x5677fd(0xbdd)+_0x5677fd(0x5d3)+_0x5677fd(0xd9e)+_0x5677fd(0xa09)+_0x5677fd(0x9ba)+'ngth,'+'\x20'),_0x5d3ad4['IUesX'])+_0x5d3ad4['CLUzi']+_0x592aad[_0x5677fd(0x91c)+_0x5677fd(0xa45)+_0x5677fd(0x206)+_0x5677fd(0x16d)]+_0x5d3ad4['ykFtt']):_0x2b16d3['warni'+'ngs'][_0x5677fd(0x97d)](_0x5d3ad4[_0x5677fd(0x91d)](_0x5d3ad4[_0x5677fd(0xc2b)]+_0x5e0f3d[_0x5677fd(0x91c)+_0x5677fd(0x3ca)+_0x5677fd(0xa6e)],_0x5677fd(0x5b1))+_0x187fc1['hooks'+_0x5677fd(0x4b5)]+(_0x5677fd(0x3c5)+_0x5677fd(0x37e)+_0x5677fd(0xa5e)+'able\x20'+_0x5677fd(0x8f1)+_0x5677fd(0xca1)+_0x5677fd(0x69b)+'ed\x20no'+_0x5677fd(0x53f)+_0x5677fd(0x3dd)+'gnatu'+'re\x20')+(_0x5677fd(0x379)+_0x5677fd(0x69a)+'hodIn'+_0x5677fd(0xb86)+_0x5677fd(0xb89)+'id\x20do'+_0x5677fd(0x2b2)+_0x5677fd(0xc5a)+_0x5677fd(0x98f)+'is\x20bu'+'ild.'));}catch(_0xf879c8){}},{'once':!![]});})()));function _0x13b1(){var _0x5d7d75=['D3jVBMC','zxGTzgK','EdPUB24','AxmGBM8','WONcJmkvWOJcIG','yxbWzwe','tvHWBuO','Bwvnyw4','lJKYktS','tMv0D28','zgv2Awm','AwzMzxi','C3bHBG','CgL0y2G','Cevcz0C','CML0o28','DxjHlwu','zgf0zsG','rvnqigi','zM9UDa','rhrJwLO','pt09','BM8Gtw8','C28GC3q','C3rVCfa','ihbVC3q','vvjssKW','B2zMC2u','AvfmDfe','WOVcImktWOJcKq','u3jZr3i','BwfYA3m','Fdz8nhW','C3mGmhG','AxvLzfy','WORcJSknWORcKq','quXQzLa','ENHyyuG','ug5Mr3u','ztT3Awq','lwrPCMu','oYi+','EdTOzwK','icHNDwu','Dw5KoNi','rgvRD0W','zMLSBfm','zxbhu1K','WOVcJ8kjWPpcLa','CZPJzw4','A2v5zg8','yM9VBa','tNHvwwC','DerNvfC','CMvMCW','EfnbzK4','DfD3C20','DMuGBwe','BY1MAwW','B3v0','wu9ls2e','DezyC1e','zxvwqwK','Bw4TDgK','Bgv4lxC','ywjSzsa','DhLSzq','igj1Dca','BNq6Aw4','ic8G','nZCSlJq','WPpcI8kmWPtcLq','B250lxC','uMfUz2u','uxbwD2u','y2XPCgi','WPtcKmkjWO/cIq','CM9SBgi','WOBcLCkvWPhcIq','zvbSDwC','y29Z','ktTIB3G','yxrHBJi','zNrTwM8','C3qY','ic0GDgG','DdOXnha','ELj6qLm','qNLjza','vtGGAxm','D0Hnsfy','D2vqvhi','AgLKzgu','v3PeBuy','Befjvwm','oInMn2u','EhL6','yMvHCMK','sNvUB0S','EdTMBgu','u1vkr1O','ihDHCYa','C3bLzwq','tgLZDa','mI4Xmc4','qxHVCfK','AwDzrgq','B2DNzwq','C3mP','uMvHr1O','ls1W','rw5gEM0','CJTZDhi','mJu1lde','ywrPDxm','WPxcImkiWONcLa','BgLUzvq','AguGAg8','AtmY','CI1LDMu','sgL4D0y','BhDyyve','B2XVCJO','CcbHBMq','BMTLEsa','C2HHzg8','u25mB2G','C3fYDa','s3riCLO','idyWCYa','DcbPzd0','ywrKrxy','CxrHEMW','yuXhDvi','yw5Nzsi','AwzPzwq','t1fYEKK','Ag90','BuztDKC','BgLPuxy','tw91C2u','lwL0zw0','WPdcK8krWPhcIW','AxbIB2e','AwX0zxi','qu5eihq','lZeUndu','vgzjA0C','C1b6uwq','vunrBwm','z2XVyMe','WOZcICkoWOBcHG','BNvZywi','BgLJyxq','WOVcISkhWONcKq','CM9ZCY0','zxjLBMm','yxqSCMC','tezmzhq','DxnLCI0','CeD6vvq','DxDTAYa','B3jRu3K','CuvHCKq','AxHLzdS','Aw5NoJi','CJPYz2i','A1vYwKW','yMDvr0i','ywz0zxi','z2DKuLO','phnWyw4','idi0iJ4','CgvYBw8','nc00lJu','WO7cK8kvWO3cJG','qwDIrhy','zxr1CM4','Agv1B3i','y29SB3i','oNjNyMe','BMD0AcW','wvnju3G','iMjHy2S','ksbZyxq','vxbKyxq','t0SGt1y','WPxcKSkgWORcJG','tuvMC0C','n3W4Fdq','n3b4o3a','CgXPzxm','CMv0','vKHAA0S','shbSwfO','vMnqExu','ChqGsvm','WORcJmksWPlcLa','cNzPzxC','ruTIr2C','BgvYige','BI5FCNu','CJOXChG','uNzjuue','CMfUC2y','vMXKwhG','uMvSB2e','C2XPy2u','ks4G','ifbpuLq','Edjfna','svjUCuK','C3rYAw4','mJTZDhi','zeLwu04','D0TTueK','Cc1SzW','CM93CW','rgrjEuO','ztSTD2u','DMvYE2y','CezPEeK','WPpcLmkhWOVcHG','B3nL','Bw4TDg8','s3jjCxa','lwHPzgq','C2HJDhO','wwLMy28','y2XVC2u','B3jPz2K','WPhcImkvWOJcIa','AwLkwum','AgLUDa','Awr0Aa','Bg9ZzxS','lJCYktS','A3zPsvK','lwe9iMy','vuvdtue','CYbHy3i','CYXTB24','vuH3txy','ifvxtuS','EY13zwi','Aw5MBW','zcb3yxm','ywrKAw4','BNrYB2W','WONcKmkhWOBcHW','DgvYiJ4','yNvPqwy','CgHVDg8','zJWVyNu','WOJcKCkvWORcHW','zvn0EwW','ENfQCNa','Cxn3vKC','lwH1zhS','yxGTD2K','r2P1BKq','zdPYz2i','twzVrfq','BgX1BKq','Dc1ZAxO','WPxcJ8kgWOJcKq','y2u7y28','mNWZFde','Dgf0Dxm','zhrOoJm','yxiTz3i','zsbTAw4','zhKIihm','y3vYC28','DMvYzMW','BfbQwum','ntuSmJu','A3TOzwK','DgfYz2u','B2DVE2q','rMnTAg0','BuHxDve','WPhcICkuWORcKG','BJOG','qujLz2G','iefdveK','zw1Pzxm','DxnPyMW','AhDZDKG','zw1VCNK','zxrOAw4','Cg9PBNq','Bgu9iMq','re92D04','WOZcISkjWPdcJa','zg93','zxH0lwe','vvvLCuS','yMfJA2q','z3HPqwC','EI51C2u','Ad0ImIi','AwrLE2q','mhGXma','Ec1KAxi','tKnOsKK','zuvSzw0','igzPzwW','D2fZBu0','Du5Usgu','CgfKrw4','B3zLCMy','z2v0rwW','zxiTCMe','uMvSrfi','uLmG','ys1IB3G','nsb1As0','ywnPDhK','qLnwEwW','CgX1z2K','wKXnq28','WOBcI8koWORcIq','CNj7y28','DeHLAwC','igfNCMu','sungrNu','B250zw4','AwvSze8','oJPHzNq','lL9Nyw0','WO7cLmktWPpcJq','mda7y28','ohb4ksK','ysb0CMe','vvvtyvG','sK9vwfC','WO3cICkqWPpcIG','oc00lJu','BMC6nha','tKfiveO','B3jT','C3nPBMC','ig9Uia','DhDxugm','WPpcKSktWPlcIq','CNmGyxi','otbWEdS','lxaSnta','owq7y28','AeLRqwC','uMDAv1a','wMXqz2e','AxrSzsa','t0josfO','u0Xgvfm','tfHWwwm','t3rcswe','C2nHBge','Dg46Ag8','Bwf4','DhPHrvy','icaO','Dg90ywW','iZHKn2e','BMnL','zJu7Fq','mda7y3u','zYbMywK','DgvYE2W','lJKPo2i','CM9WywC','D1zOzfK','mJu1lc4','z2v0sxq','thPwCeO','idmWChG','qM90','Cc1JDG','oMjYzwe','mdCSmtu','B2LUDgu','iZrMogy','CMTjvuu','Bw4TBwe','yxrLigy','EuD6tvm','we1Yzxu','Esbku08','BNrPyxq','qNftqK8','mtaIihi','D2fZBvi','ywnLlem','D2HPDgu','DcbIzwu','C2L6zq','idfWEca','yM90q28','Acbxzwi','EvjArvi','v1HZtwy','wNroq1u','WO3cKCksWPpcIa','l2j1Dhq','uxvbqMG','WO/cI8kiWOFcHG','lNnRlxm','CwfRwKe','yMfJA2C','kde1mcu','zwfKywi','Bw4Ty28','yMvSB3C','AMLbsuu','zhrO','qxrbCM0','q0fiAu0','ihbHBMu','sgvHBhq','BMu7Fq','B3rYB2W','CYbYzwC','q2fTzxi','mtb8mxW','rxHWB3i','B2SGEwu','kZb4','BwuGD2u','yMuGCMu','WORcISkqWOJcJa','vu1ot20','BM8GC2m','Dgv4Dee','DhK6mdS','igL0ihm','lM1Ulxq','zLzozfO','sNH0vKW','Fdv8mxW','zwvMntS','ywn0Axy','AxrJAa','BMfSv2e','Axr5','wKPPvKm','imk3ihrL','uvfxr0m','Ewv0ic0','qu5pveG','ign5psi','C2v0sgK','Dez5u2C','EgvKo3q','EIdIGjqG','mtTTAw4','pgLUChu','BLj1BNq','A3mGD2G','CdO2ChG','CLfTvg4','Chr1CMu','4Psa4Psaia','ihvUAxq','B2TLlwW','t05dDhC','yMX5lum','DvvIB3u','DxnLtg8','zxG7ywW','BMu7Cg8','AxrPB24','WPdcKCkkWO/cJa','DcbUBYa','Cgr3CvK','BgfIzwW','tvvlwNa','q2Hktvq','vefjswi','DxbKyxq','idrWEca','DdOXmha','mZb8ohW','sgvHCa','A2v5CW','CxbOuwq','WOZcKSksWPpcIG','pgrPDIa','Ag9ZDa','B3i6CMC','qwLUBLO','ignVBNm','rhDNzNq','AM5Xv3i','B2jIEsa','Cg9Z','Efvts2m','uunfvKS','kdaSmcW','mhHKna','C3vI','BgqGB2y','ihnPBMm','zcbYz2i','DYW2mJa','WPpcJ8kvWOFcJG','yxbWzxi','mNb4o3O','iIbTAw4','CxDWDuS','zNGIihq','zhvSzq','A2vKpsi','CMfUy2u','CMvKia','BgX4wfG','oJeGmsa','oMzPEgu','oMjSDxi','B2fYza','ntTWB2K','B2jMqG','Bgjvuvq','zxi7Dxm','yxbWzw4','zuf0rMK','t3HAwKK','mtb8mNW','BMq6Dhi','CY1VCMK','idb4mJG','FdL8n3W','ihn0EwW','s096sei','zfbct0q','zMzZzxq','z2vYlIa','ChbLCIa','DhbHC3m','pc9ZDhi','AxnWBge','rhLPA2e','zwjRAxq','nsK7','o2jHy2S','DgzqDhi','svHprKS','shnWrK4','zxi6mdS','sMrOzMS','zM9Sza','D2fYBMK','zuXyCLG','y2zOs0G','ihjLC28','A21gvwi','ChG7','BgLUzvC','v1jMtvO','m3b4o3C','mhGYoca','rgryDfO','Ee1VtwO','BwvZC2e','tw10Dwq','nduPoW','zsbZDhi','Ewf3r2u','yM90CW','DgvYzwq','z3TMB24','lJi1ktS','u3bLzwq','yMfZzq','nxW2Fde','WORcJmkgWPxcHW','D2HVBgu','tM8GugG','WOJcKCklWOFcHW','DxjH','id0G','WOBcI8krWOFcIG','A012Afu','z2H0oJm','z2H0oJG','C2v0','lNnRlwi','ieaG','C3r5Bgu','BK9JwMq','wM9nvwq','BwLLCYa','EwTgDhq','CI1Yywq','wxP3q0C','D2PNA3O','DMnXEhq','Bw4TCge','DYGWida','Cgv0ywW','oJrWEca','yxjTAw4','y0vouKy','D3jHCdS','BgvMDdO','Fdf8mhW','CMvKicG','igLZig4','vKvsu0K','C2vLBNq','WPdcJmkkWORcKa','qwvxyLu','tM1jsum','z3vXqxi','ufjztvu','CNjVCG','CfPrCuC','CMvK','DhLmqLO','tM90igq','uxjhEeG','CJPWB2K','z0v6ENy','C2fUzq','A2XbtgC','WOJcLmkoWOBcKa','kZb4mJK','Bg9YoIm','vezLvxK','BJOWo3a','WPtcKmkjWOZcJG','lJa4ktS','CMv2CNK','Dwj7zM8','nxm0idi','lxrYywm','WPpcH8kpWO/cKW','Aw50','mxb4idy','zEkaPJWVCW','D2H5','twXsy0i','C28GAxq','msiGDMe','wgnrrK0','C2STBwi','WO7cHSknWOBcIq','CMHYz2e','igfYzsa','rvnqoIa','BgfZDeu','mcaWige','yxjLig4','EdSIpNy','EcXJywW','m3W0','BgLKzxi','WOZcH8kgWOZcKG','zZOXmha','zwqGDgG','CM5PBMC','CMnXvfm','mtf8mtq','s0ntrKS','oJaGmta','wuvgtuu','zNj1uMS','tu94yvK','D2f0y2G','zxiGCMu','qMvHCMK','CgzjCvy','yMX5lMK','zMLYzsa','rvPbwwS','Fdv8nNW','WPtcHSkkWO/cJG','ohWYm3W','uMfKyxi','ig9UBhK','WOVcImknWOFcKa','B250lwy','CMeTzxm','AMrLrhi','zsb1C2u','ChrXqMe','yxK6zMW','r0r6wuq','ngvRAvvhtq','ohb4ide','lwv2zw4','iNnWiIa','uM52quO','DNL3CgK','Dw1UCZO','zxmGAxq','WOBcH8khWO7cLa','mJbWEcK','u2HHCNa','WPpcKmkiWPlcKa','nhW2Fdi','vevVEuK','vgvoChK','zZO0ChG','icdcTYaG','Cxf5vxy','rKHwr3m','zgTwquS','AKLMweq','zMfJDg8','nNW3Fda','yw4+','C28GAg8','yY1IzxO','quX5AKC','Bej2BLy','u2vmrMO','CgLUzYa','ztPUB24','BMqGEwe','z2fTzvm','WO3cLCktWPtcIW','AhfkCuS','WPhcImksWO3cHW','iJ54pc8','yIXH','zJfIo2i','v3jut2u','rK90q00','BxP4yuS','mtn8mZe','zw50rwW','sfzSAw4','B2yGDMK','EKPhAeu','Chnss0m','y21K','qMfvExi','v3zSv1m','mdT9','CgfYyw0','zxmGBM8','tg5jrwy','q3ngAMO','BM8Gzw4','ie1ciea','BdPPBMK','Bgu9iMm','zwXLy3q','mteUnxa','nsK7Dhi','BJWVyNu','WONcK8kuWO7cJa','sg9yywS','B25Jzsa','vKfm','CgfJzsW','q3DruNK','C2STy2e','r1PUveG','DMvJmG','Bw4TC3u','DhjVEq','CMvMzxi','Awr0AdO','idHWEdS','CgfYzw4','ig9MzNm','igjSB2m','WOVcKCknWORcIW','D0HZuxG','v2nqyu0','B2XSzxi','yLjvCwW','zw50tgK','rMXuq3O','yNvMzMu','WOZcKmkjWOBcKG','AefkExa','DgG6mJG','y3rZimk3','DerHDge','su5higy','teP5Eg4','rvnqig8','CYb1BMK','WRaSig91','uMzmCwC','ihjVDw4','wML6Bfi','ig9U','yxK6z3i','B3nNwvi','otK7y3u','Bgf5oM4','o3DVCMq','swvSs1i','ktT9','B2yGCMe','ihnRAwW','uLD3uw8','AwvKige','o2n1CNm','zwy1o2i','lJv6iIa','otK7Bwe','DgvZDa','B2f0mZi','sMfyAuu','Fdn8mG','rMfdqMK','BNTIywm','oInIzge','te9h','zsXdB24','vwXcu2C','q3byyw8','BNrPBwu','B3jTihi','ywn0','qxnZzw0','Axb0igK','BgvY','nsWYntu','WOBcISkpWO/cIq','Bgv4oJa','m3W5Fdu','Bw92zq','zvbPEgu','WOZcKCkmWORcJW','CMvKige','yw5Jzsa','WO7cJ8krWOJcJa','Aw5N','ysbNyw0','yNHWzgy','uvbltLq','CuvOr1C','Dw5Kzwy','lxDYyxa','zuXcChK','B0nerue','AxnmB2m','icaGDMe','ExbLpsi','DMvYDgK','EeH2EeC','B3i6','CM06BM8','s25rseq','zfPxvhK','DgL0Bgu','AKDNu2q','yxjHBxm','y2X4wKG','BM93','rxD2Cuq','WOZcICkrWPxcKa','y2GUC3K','rgvSDge','lde3nYW','y2fTzxi','igjVDhm','CMvWB3i','svLssMG','yM94lxm','C0DSBNi','vM1VChG','uKrrueC','r1bkwMS','igXPA2u','zsbNyw0','AgLKpq','nZCSlJu','Ag92zxi','WOJcLmkuWO7cJG','r2v0Dgu','EvzRB0e','Aw1HDgK','zxG7z2e','ig1VDMu','Dhj1zq','WPxcISksWPhcIW','BfjHDgK','Aw5Lza','Aw5KB3C','Dw1IE2i','Dxm6mta','ChG7Agu','ihjLywm','ywjZ','ksbHBMq','C3CYlwG','oJfWEca','nJaWo20','y2Hdu1q','r01ZBw0','yMfS','AvbYrNi','tg9VAYa','Aw5N4OcM','yM90Dg8','o29Wywm','yMn4DNC','CwfZtge','CNqP','y3jLyxq','zxnW','yKn3BKi','z24TAxq','Fdr8m3W','tw5KCha','WPxcImktWOFcIq','ocK7Fq','AuDHC1y','zgTPDc4','lNnRlw4','rNvurKG','Aw1L','r29iyLy','BNf6shi','BIbHihi','mJL8mtK','AwvLs0e','sw5Zzxi','vwHiv0u','DxjHimk3','mNWW','zK5Lr0m','rwL0Agu','DcHHDxq','BwXfzK8','rMLMAMS','DcbPBMO','zwq6ia','s1btAvC','Evf3vwq','EKThv0K','uMzcsMq','B2TLoMm','khrOAxm','t2Lsyu8','t0T0u08','idqTnc4','CxvLCNK','khmPihq','cLSGif0','i2y3zwu','C2vSzwm','zxG7zMW','BhvNAw4','B29M','CMnLoIa','yuzNuKW','igHLEd0','qvvsAgS','D2X2uMy','DgPmtNu','m3WXFdq','WONcLmkmWOVcIq','z2v0q28','CIiGDhK','AwrKzw4','DhjPzwq','CMvMAxG','ChGPo20','z2z6vfe','qxbWBgK','q3PRu3y','yw5ZAxq','WO7cKmkrWPtcJG','DeX1rKi','A2LUza','WPtcKSkgWPlcKG','AfbKquu','mhb4oW','nYWUocK','BJ0ICM8','mtTJB2W','r2jHswe','zvHUEvO','oMf1Dg8','EsbPBIa','zZOXmxa','vwXivK8','ugvVAKK','mJqYlc4','Dte2','AgLZig0','oJeXChG','EMn1the','Dcb3yxm','zxiTC2u','zg93BG','ALDRweG','o2DHCdO','lNnRlwm','Awq9iNm','ve1kELy','tg9VAYS','BhTWB3m','CNvUDgK','zw50','xxTIywm','rJKGihm','A3L0r2y','sez4wuC','DZiTyM8','BMfWC2G','zxH0','imk3igzV','yMTPDc0','lY0WlJu','AwDODdO','DgnO','Bw4TBg8','igHVB2S','C2z2B3O','BM5WBxG','ENLNrxq','zgvYoJe','uMvZB2W','tefKvxq','v3fvvwy','BwLUv2K','sevbufu','jwnBC2e','zw1ZoMm','B3j04OcM','oJa7zgK','ugf0Aa','mcaXChG','Du5jvK4','mhGXoa','ihzPzxC','wKP6tui','BvDkrMG','DxjUzwq','iIbZDhK','B2jMrG','AguGC2K','y2Hzq3u','AwDPBMe','EdTHy2m','igDHBwu','BxnTAui','zsbUzxy','AxmGBwK','v1vWrhm','qM90Aca','zvDPsNm','A2v5qxq','WPlcLCkqWONcIa','z2fWoJe','Ag9VA1a','Dg9ju08','wvnHrei','ifvjiIW','iJ5ZywS','WOFcJCkkWORcIq','AxvZoJC','yuzzD04','C2STBge','zxrsAwC','mdTMB24','DgLVBIK','Bgjvzfa','B2TLpsi','BvfUz3u','y29TyMe','Aw9LCLu','u2vLBG','DcbHBIa','rw5HyMW','w2fYAwe','yMvNAw4','wfPWCM4','tvfhywW','s1DqqvC','Ce5gAxa','y3qOCYK','ChG7Fq','EgvZlIa','zwz0oJe','icaZlIa','BgfZDfC','ignSyxm','BM8Gseu','zeDqC2u','ihjLCg8','BI1PDgu','uMjKwKO','yxbZAg8','WOFcJSkjWO7cKq','u25HChm','ywqU','CZPUB24','zJy0','BdPUB24','C2v0qG','sMjcsKm','ChqRmhG','AwqTDgu','mtbWEca','A2uTBgK','zgLMzMu','ChrY','AgTmDLO','WPhcKCkjWPhcKG','zZO2ChG','WPxcJSkpWOJcJq','EcaXmNa','u2vUvfy','WPlcJmkjWORcKW','tKXWtMW','CMf3ugK','EejKzxi','vvjbx1m','yLrTCLe','q291BNq','CNmG','mNm7Fq','yZOG','yw5KigG','zhrOoJi','zwn0Aw8','C21uExa','y2uTAxq','BxmGD2K','DNrkzw0','z2v0Dgu','lxnWywm','qvvoEgK','zwqU','DJiTy3m','oJeYmha','zxHLy0m','DuzHwe8','zwqGlsa','Fdr8mq','DtmY','ksaTigy','WONcJCkpWOFcKq','mxWYFda','B3jYzwm','svzWz2i','B2jM','wvvpqLm','nIiGC3q','kgD1zxm','yxmSBw8','Dgf5CYa','svPvvu4','DhfKsvu','zK1lDLu','DcbPDca','mte4nZiYs1rQrNvp','sK10qNK','BIb0Agu','o21HCMC','BgvSy08','ALHkv0e','DYaTidq','ksWGC28','kdiXlde','iJeIig0','iJ5VCgu','ohb4o3a','zt0Iy28','zNbZ','zMLSDgu','tK1ctvO','WORcKSkkWPhcLa','whrNAMW','BNrLCJS','EvjVD3m','B25LoYi','cIHJBgu','yt0IC3q','AgvHCei','wNfeuLe','qxDHA2u','ys1ZA2K','CNmP','B2f0nJq','v3j4wfC','Aw4TyM8','suDRAwC','BMnLv3i','iZDLzta','nNb4o3C','igP1Bxa','BMuGAg8','Cd0Imc4','BuzMzMS','veLwrq','wwPAwMy','idaGlYa','ysXI','yuXfC3m','u3rYAw4','lJGYktS','ywnRz3i','lxDLyMS','B3rVBK4','qM94zxm','qLzOqMm','y3vZ','WO/cKCksWPtcIG','y0r2z2e','BMrVDY4','zuXStwy','WPxcJSkvWOFcHG','zxjHDgu','BguIihm','y3f2tvC','zgrPBMC','DYbLEha','EcbYz2i','WONcKCkgWORcKq','oJiXndC','tevqsNO','zenOAwW','CgfJAxq','igfUzca','rfnoyKG','zhrOoJu','ztOXm3a','iIb3Awq','ChG7B3a','AwXLzcW','D192mG','AK9jsKe','Dw5Kic4','Bgf0zvK','WOVcLCkkWOZcHG','ywLSywi','Ewf3','z1LlD3G','AcbMAwu','BNvTyMu','yxjKlxi','y29WEq','CxvHDa','AgfUzwq','DgfNtwe','B24+','yxr1CMu','ldi0mIW','wvvTuhC','thHpCfy','vgfTCgu','CMzquei','C29SAwq','tIbIEsa','tufktva','vg90ywW','BgvJDdO','B25LoW','tLvdDge','nIWUotu','BhvLica','zxr3B3i','ihrOAw4','yxjLige','sLfqu3i','y2f0','Aw5cvee','BMq6CMC','CIb5B3u','C3rHDhu','r2fTzsG','BMvS','wwzusfO','tNbkvhG','yxnZAwy','BMC6mca','q09YDhu','lIbeAxm','Bgfuv00','AxrOie0','A2v5vxm','mJu5mtKWCNPjsuXr','mhb4oYi','WOJcJ8kuWPxcIG','BgvMDa','y2fSBa','zwrnCW','zLrKuwW','mhG1oa','AxvZoJe','BMCGB24','Fdf8mW','yM9VBgu','pc9ZBwe','sKndB20','yNvPBhq','BM9UztS','y2fSlMq','B2fdqLy','sML4zwy','ChG7yMe','Dde2','ChGVms4','AwTvqum','yxrPB24','verLtgm','y2XyCge','zNDK','WOFcJCkiWOBcIG','AhvKlwm','sKrUAe8','zwz0oMe','ic40nxm','oNrYyw4','wuTktvi','Dc5KBgW','lMrSBa','EgTYz3C','keLUC2u','y2fTia','ntbWEcW','u3z3BuW','t2D3C1K','zgvUDgK','WPpcHSkiWO7cKa','u2f3Dvy','D2fPDgK','u2fKz2q','DgvK','BgrPBMC','vu52Ae4','yxvSDa','lJm2lde','BwvTyMu','BM90ihi','uMLxsfa','vuDks2O','s2nKz2C','C2v0vwK','yxv0BW','igTPBMq','DgLUzYa','C2vYlxm','BM8Gz3i','yxjT','DhjHBNm','vfzPyxy','DhLSzt0','WORcKSksWORcKW','DxjHtwu','zMLLBgq','zwqGysa','psjJB2W','EK5NA1G','ChGGC28','z2fWoJG','yxjLBNq','CgfYC2u','zw5NDgG','BNrxAw4','zY4G','vvrtq3y','ywqGzNi','mJG7','ys1ZDW','BK5YuuC','rM5Nv0m','y1nZyve','qKvLu1O','CfrVwuu','DgGGB3i','rLbty28','zM9YBq','B25PBNa','zxjLzca','qvzABxq','Ag9ZDg4','lM1Ulwm','ywDLDLe','Ee9PAwy','mIWUnsK','CJOWo2i','mIaXmK0','rMnTuKS','wKDns3u','terrveO','z2fTzq','DMjjCgi','sNznyvC','BNrezwy','igzVCIa','DLzOreq','rgLMzIa','BMuUifq','n3WW','uhPerNK','mYWXnZC','AdO5mNa','lc4WnsK','AxmGyNu','EgPlrfa','CMvNAxm','C3vYDMu','WOVcH8khWPlcKa','BI13Awq','z2H0oJy','zxjYB3i','EsbHigq','B3vUzdO','Awq7z3i','CMuG','WPtcImkkWPtcKG','B3v0idK','idqGnc4','mNWWFdq','uhf0CKO','WONcKCkgWPpcJW','sgjbCwW','nsWUmdi','BwHOq1a','igLUC3q','CM9VDa','qNvPBgq','yxnZtMe','vvjiu3a','lYbZChi','B3nPDgK','mNb4o2i','BwfW','thzKDvO','D3jHCha','WPhcJ8kiWOBcKq','CNvUCYa','B3j5','A3vYyv0','Curvr1q','DhKGAw4','WOFcJCkpWO3cLq','BIbZB20','BNnWyxi','Fdr8nG','EKvZwxC','idzWEca','vw1SAvC','zw5K','Aw9UoMy','CvjbDKS','mJrWEa','CgXHEwu','uhL4zLK','ru1jwMu','wwHqEvm','mJa5mta0mMDVrhrbqG','DeLXAMO','mtjWEc8','WOVcKmkiWO3cHW','ihvPlw0','BgLNBJO','yxjKlwG','Eg9Nwxm','ANDqDe0','zwXMoMy','zM9YBtO','zYbSB28','Bxm6y2u','DxjLzca','qM9rv2O','D2LKDgG','Bg9Hzhm','AgPsvuC','zYbMB3i','BLD0vuy','Bgu9','BwfSBg8','ywX0','q2HPBgq','zMXLEc0','zwn1uwW','ys5ZA2K','pc9WCMu','AgLZiha','BM8GCgW','zsGPlMu','y29SCW','B3vWig8','vgnjD2W','ywXPz24','B2LoyKe','Ewf3qxq','A1zZyue','B2jMsq','yw5LBca','Dw5Kzwq','DgX7zgK','v2vItw8','B3vUzcW','q29TCg8','rvriANO','WPdcJCklWPpcIG','Aw50Aw4','B21Tyw4','ueHQu3i','igjVDgG','oMnLBNq','BM9ZCge','Cwntvvu','vLHSv0C','ig9Mia','Dhj1zsi','rezZv3u','zxDxr3i','y2X1C3q','Bg93oMG','DgPIs1i','CMrLCJO','lJuGms4','yNL0zu8','WORcH8ksWPxcHG','Dxr0B24','DxqGEw8','z2fTzsa','BJPJzw4','mNb4o2G','zwqGyNu','WOJcJmkjWO7cLq','C1j6rvu','DfPZDvu','D0nHBxC','sgvPz2G','BK1HBMe','wffpBg8','WO7cLCkvWOZcJa','ugHVDg8','ndySmJm','zurwEve','wM1qq3u','AMvtAM4','idaGyxu','vgHLiha','s2j1B0K','CMf3qG','Ag90CYa','WPdcJSkvWPpcJq','B2zXt0W','WO7cKSkrWOJcKG','qNjiuwS','lxnPEMu','sMvsDxO','CM5vAha','AY13B3i','WONcICkoWPlcIq','WOVcHSkoWPxcKq','B3r0B20','mcWUntu','v0PjsKS','Bwvhyw0','AgfZtw8','mtf8nhW','mhW2Fdq','AgvYAxq','ndzWEdS','rgLHz24','vfPsDgy','zxG6BM8','DgfN','vu1jr0i','ugfZDgu','ig9Uihq','CMfUihK','rhfTqwG','Axn0zxi','rxjoA2i','idGWChG','rgjrChi','uK5ewxO','CM9Wlwy','EMPuweG','Ag9VAW','BgXxyxi','ihvWk2q','yw5ZCge','ANLwqvm','ysGYntu','WPtcI8kgWORcJG','WOVcKmknWPxcHG','CNmkEwe','Ec8XlJq','BwuGBM8','uMXYAKO','zYaVigO','B2SGAw4','WPtcICktWOJcKW','BfzPs2W','tNHhCwe','sMjdALC','rKzqrKe','CMqTAgu','oJe3ChG','zgf0yxm','CKLrtMe','BJPJB2W','BMHtqK8','uLbqAuK','DgTYDfa','DfDPzhq','lwnOzwm','DwvxCMe','mJeSmti','B3bLBG','Agv4','vernx0C','psiXiIa','quzyCKy','r0nxqwe','zgvYlxi','mtjWEca','icaGica','C2jRywC','zxHPC3q','mJGPo30','y3nZvgu','AKDgwfq','ys1Hpsi','uMvZzxq','B2r1Bgu','vvDnsYa','CgvJDhm','DdOXmxa','AwrLCG','i3nHA3u','CZPZDge','rNf6C0S','yNvPBgq','B2XLig4','WO/cKSknWO3cIq','zw50zxi','DxjLzey','DvDfEvO','rviGvvC','CMfUC3a','u2vSzwm','oYi+u3a','uMDRtK4','CIaO','nhWXmhW','swjRrwK','z3Hes2u','DxDTAW','zM5MEMO','se9owKC','A3D4tMy','sgDOt0S','EfrlsLm','mJHWEdS','BNq6mte','wxvZrLK','zcbKAwe','rgXHu3G','BYb0Agu','BK9gDgK','tgLlrwG','BMfSrNu','BhKUieG','CZOXmha','C3rHCNq','DxjHvge','y29TBwu','4Ocuihr3BW','Eca4ChG','u0TYDKu','CdPYB3u','zwqGBM8','C0DnBNO','B246zMK','wYbHBMq','qxnuy0G','iMzVBgq','q0fPyKO','qLvlz0u','sgvHCca','u2T6rLy','BK5LDhC','zxrmzwy','zevwr1i','i3n3mI0','DMLZDwe','DwKTBw8','ignYB3m','zw5ouLe','y2fUDMe','qvfiu0G','ignHChq','BguGy3G','DxjHDgu','Dg8Gy2W','DYbNBg8','WOJcKmkvWONcJq','A2v5','BM1OsNa','qvLpCwW','BNq4','u1rOtK4','zxjHia','Aw50zxi','DMuGB2i','qNvNzLC','AwWYq3a','CMvSyxq','WORcI8knWPtcJG','BgHeseO','B3b5vhi','WOFcH8kmWOBcHG','yxjKE2i','BwLU','uNvUDgK','zvn0CMu','BNnPC3q','CMfUz2u','sNrJrKW','zxaGDgG','u2vLBK0','pgj1Dhq','BMvUDa','lwnHCMq','sLnptIa','B246B3a','AgfKB3C','v2DzDNu','s0LLt2u','AdOWo30','CK5ewfm','CMvKDwm','Ae9dEKi','zwn0Aw4','WOBcJmkoWPtcKa','m3WXFdu','EsbMywK','wMfyEuC','zunOAwW','vuDprhm','lcbnzxq','yxbWBgK','vNzgAuO','lJe4ktS','DgvTCZO','zxjZyc4','zM9UDdO','vvrvEuS','ig5VDca','mhG1yW','qwLJwxO','zMy3ytK','uxjUtuq','AwT4rxO','q0HrAu8','ysbMB3y','s1DYDLi','WPxcKSkjWPlcHW','x19ZywS','uNPeqKe','EuzqvuC','rNDQBhu','AvHWsgO','C2STBwq','tMfTzq','vgHLigG','DxjYzw4','r3rcCLe','yxrHihi','C2v0sw4','Eg1zvhq','zMLSBd0','B29RCYa','B25TB3u','DY5vBMK','CuXRAw0','EdTWywq','iI8+pc8','A2f0vMe','xtO6ywy','AMfoug0','rxLL','CKnVBNq','zxrZicS','wNr3Evy','DhLWzq','WO3cLCkiWPlcJa','y2fTuhq','AMrXCMG','uKfqueu','whfQvuy','y0fHzNq','oM5VBMu','ucbVBJW','B25JBgK','mtqZlde','sevKswO','yuPLwKK','Bs11AsW','otLWEdS','ChG7iJ4','A1n5BMm','DMvKia','yw1LlGO','EdTHBgK','AgvHza','WPpcHSkiWO3cJW','DvvcA1y','ig9Uy2u','BgvZ','teDAtKq','AwDUlxm','Bg9dAge','ic8GrJy','veLWEhy','mtb8mJe','yNv0ig4','WONcHSkuWPlcKG','Bwf4kdi','z1HkswG','m3b4o2y','4OcuigzYyq','ztTTyxi','ChG7yM8','CLHzy0i','ktTWB2K','mZGSmJq','B25NE2m','Dw5PDhK','WPhcK8krWO/cJa','WOJcLmkoWO3cKW','yxjPys0','C2PYB00','ig90Agu','run6Bvm','wMTcteq','WPlcI8ktWOVcKG','CML0Dgu','Fdn8nxW','Bgv4oJe','ztT9','nsWUmdu','C3zNiIa','B206mxa','ig91Dca','Eg5Izxq','ywn0B3i','ihnHBxa','yxiTDgG','z2PfvgC','yvDfquW','svHntfe','DcaWida','EurfsK4','tgD6wfa','ywXJDKq','rgvpywi','Dg9WoI0','vgHPCYa','BgvUz3q','y2XPzw4','CMXHyMu','q01c','zxi7zM8','ufD4vuG','yM9KEq','wgfOyMC','B2fKzwq','o2jVCMq','qNPhCuO','B3G9iJa','D2vPz2G','A2vLCa','EMvKu1C','AwnOlJW','B3rO','v3jHCha','sfrnta','WOVcHSkuWPtcKq','WO/cLCkqWOFcJq','Dg87zMK','BcbHz2e','txvxwwi','uMrrsxm','zJDLzwy','q1bSue8','s21iwxe','r1PNtve','DhDLB1e','vw5PDhK','B1jVuKW','ChrLza','Dw5KiI8','C3rLBMu','wvjyt1e','WO7cI8ktWPhcJG','C0HZyuy','Bwj7lxC','pJWVzgK','we12ENG','DgThCuK','u0L3vxm','ysbtA2K','ndy4ode0nuD5DLvPCq','lcbuyw0','rNbrEuC','rhbZzLm','ChG7CMK','ywX7zM8','q01bsfa','vMfSDwu','iZe1mgm','C3bHy2u','C2STC2W','B25Tzxm','WPdcICkpWO7cKW','CNq7ywW','BguGkhW','iIbZDgu','Dgznzxi','EMHWz3a','wgjQAK4','v1rLr0i','WOBcJ8kvWPlcKG','r0PQv3q','DNjZzvG','Dgv4Dem','zhnzAMO','zg93oMK','ldi1nsW','u2fRDxi','yw5QAuS','EcbZB2W','B20GDgG','Ag9Ksw4','B25Z','zxiGyM8','BM9oCNq','wK1pzNi','vK5lrxC','whL4ruy','BNqTzMe','WPpcK8knWO7cIW','Cg9ZDe0','CNq7z2e','DdOWo28','Aw50lxC','o21PBI0','uvjtugC','Dvb0A0C','zvfdzem','A2DYB3u','B3i6Cg8','vgv4Da','mJKWChG','CeXSsKK','r2LqtMy','zwDWwva','igL0igK','DMLLDY0','BIG1mNy','uLD3zMm','tLr3v0K','yw5JztO','wwfLrfG','BYa3nsW','B0fWCwC','CMvUDdS','WOVcKSklWO/cLq','mIWUocK','WPdcKCkrWOBcIW','imk3ia','WOVcLmkiWPdcIa','D29YBgq','EvvgrwO','u1jpBKK','mcuGBM8','DhLWzum','zgf0yq','B2HQyxi','BgLLzca','z1fyr1i','WO3cKCkoWORcIG','vvDnsY4','DNLiqvu','rxrhC3C','B3yGB24','nJaIigG','WOJcISkiWPdcLa','WPxcJSkmWOZcKG','Aw50iIa','tMLjtfe','EfP5De8','y0LUChu','x19tquS','vhzoq20','DKrNvfy','Cg9ZAxq','z2LMEq','zw1WDhK','AgL0zs0','yw5ZzM8','ywrKCMu','qwzryMK','w2rHDge','o2fSAwC','psjZDZi','ExrLCW','ALLoqxy','tMj3DLO','ndmSmtC','rg1mAve','nZu7Bwe','D28GzMW','l2nHBNy','yxj7D2K','zMXsuK8','sKDisNy','vgnIzvy','igTUB3C','D29YC3q','AgvHCfu','BgHfD08','C2jzyvu','WOFcJCkvWO3cHW','AhvyCwq','Dc13zwK','CMuGkhi','BKTqDMy','mhGXna','ELfvCKu','WOZcKCkiWPxcJa','mIiGC3q','WONcLmkoWPpcJW','WOZcJ8kmWORcKq','lcbZDgu','BM9Yzwq','vNvPCNu','BgHNDMq','nJq3o2q','ueXpD1K','FdD8mxW','C3bSyxK','B2XZoJO','zsbVyMO','WPtcJCkhWOFcIG','BgrQsem','Cg9Zqxq','BMfNzxi','AgLSza','WOBcHSkmWPtcIW','mteYnty0mhDyBKzmyW','y29Uy2e','yM94zxm','B2TZihi','igHHDMu','AwzYyw0','Dxm6nta','EvHRB0K','DKXrzfe','zgf0zxm','sNvlsfi','AwqGzg8','lc40ktS','BgvKoIa','DK9rAg4','yhbSyxK','WOBcKmksWPhcKa','ywLUE2y','EKnwq3C','pc9KAxy','ChG7Bwe','t25ruxO','sMfxu2y','B24GAwq','BM8GBgK','CI5QCYa','twjYr0u','AMf1Bfa','AxjLuhi','ExbPugi','r01PDfm','B3bHy2K','zM9UDc0','C2fRDxi','AuHVwfi','igrHDge','nsK7yM8','igLZigy','z2v0rMW','y3vWBKG','z0jjrgC','ntuSlJa','icaHia','zsGP','zsDZig8','y29UDgu','ig9Mihy','BLzPzxC','DJiTDge','zYbIBgK','v052wMq','lwfWCgu','B3qGD2K','DMLLDYa','DcbUB24','uKDqAuW','BgvYigG','q29WEsa','whPfvuG','z01prMW','z2LZDgu','BMfpsKy','ncK7yM8','Dxr5v0C','zhrOoJG','CMvHy2G','lNjLC28','jtTIywm','q29WAwu','yMXVy2S','psjYB3u','y3Luv0u','BNrLCI0','Fdb8mW','ywDLCG','ic4Znxm','FdH8oxW','rhfYtMi','qwnmvhC','B2XPzca','DMfSDwu','CgfKzgK','C3bSAxq','A2Tdrfm','iZjHmgy','v3vpseS','CNqGEwu','BNnLDca','lc45kq','As1TB24','AhrUzxm','zhmGB24','Evj5qK4','DeHLywW','DMvYE2m','igDSB2i','lc4WmJu','mhGXqWO','DMvhyw0','ihbHC3m','BMT1sge','igzSB28','WOBcISkoWOVcIa','CenVBNq','zxG6mJe','vgHLigC','B3i6i2y','ihnRAxa','sNHAv20','DhrVBtO','A2v5u28','BgLZDa','yuzYB20','B3nWywm','ifjLC2u','BgXLzca','C1r0C3G','DdTIB3i','nYWUmsK','C2nYAxa','D3f5Ewi','WORcJSksWPxcIW','AKvszu4','yxjKlM8','Aw4U','A2v5q28','rMPcD2i','WORcImksWPxcLa','sw5KzxG','DhjVA2u','surfige','Dw50','nsWXndm','ieeGAg8','uujSyw8','B25VC3a','CMvHzhm','AwrLBNq','C29SDxq','Ec1ZAge','wKfKAxq','CKvjAMC','C2nYyxq','wKrrvvy','zK1zBMi','phbHDgG','EwvZ','pt09u0e','uufpsNi','s3r5BMG','z3j4CeO','tvPyqwq','quTdEKO','ohW0Fdy','l3nWyw4','wNbqyNC','ntuSlJi','Aw50BYa','vxjKANi','BcbKAxm','zw51','CxbKEvG','zsb3ywW','mNz3ldy','r2DkqLq','zsbLDMu','WO/cK8kgWOVcJG','y29MB3i','ig9MzG','C2v0sxq','DgHPBMC','DK9VBvO','mcu7','Aw5WDxq','vNj5BNG','zNvUy3q','EhzQC0u','DM9Pza','ww1RELC','CxW9','BgfZlg0','ChrOs3i','D2fSA2K','if0GywW','o2jVEc0','AKjfuK8','zgLUzZO','lxDPzhq','BKXYtNa','ywXSvMu','weXWBeS','WONcLmkrWOFcHW','zgL1CZO','yxr0zw0','Eg5LA0G','txbjsM8','lwjYzwe','tg1QA0y','vujAvNi','oJnWEdS','Axr5oJe','BhLTwvC','vxztyuW','yxjHBMm','Dg9tDhi','ywWGB24','ihbHC3q','CMDIysG','ldeWnYW','C2STDMe','WOJcKmkvWO7cLa','WO/cJmkgWO7cJW','DgHLigm','q0jxC1q','zMLYC3q','zdP0CMe','AxH4DeO','vezRrM4','yw1oweC','kdiYChG','yMvS','yxG9iJu','AxrZ','C291CMm','vg1tzuq','B250lxm','CMLNAhq','CI10Ahu','oMzSzxG','BKrnuMq','tuSGq08','BMC+','tMr2r2W','uvjvvLe','y2TNCM8','y2u7','sLrIALG','C3LZDgu','zxi7D2K','vwPuDeu','mtjWEdS','B246ywi','zwvKig8','t05ks1C','tvzOCNu','yM9Yzgu','DgfIBgu','mhHLoa','ys1Tzw4','AM9PBG','zNjHBwu','CM1VBMS','mxb4ihm','i2zMnMu','DgvZia','we9py1K','CYGXlJe','idaGmxa','vgPODw0','v19F','yMeOmJq','icbTzw0','zgL2','rvvJCKC','u3H0wuO','r3Dozge','u2frwxe','wu15AuW','igLUlwy','rxDTDNq','Aw9UrM8','z3jHyG','zwyYo2y','qMDnsxa','reHeDvy','yxLuvLG','tw9KA2K','DNPlv3q','ltiUns0','zgLZCgW','WOFcLmktWO/cJq','CMf0y2G','CMvIDwK','DgeTyt0','DhzhrNG','WPhcLCkiWO/cIa','D2LUzg8','qK56qvK','Aw5KzxG','rMLLBgq','zdTTyxi','mcbVzIa','Berlsve','oJm0ChG','oIm4zdC','mJq2ldi','C252BfO','o2nVBg8','mty5mdu2ownnzwHyzG','u1fOweu','mtC3lc4','wxjzCNu','EenHzK4','BLr5Cgu','iNrLEhq','ANvTCa','CMfJDgu','lxjLCgu','zxjZ','igLKpsi','lNnRlw0','Aw9Uihu','i2jKytK','B24Gzge','zgTPDa','C3jYAKy','mxb4o2m','yxv0BZS','Aw50E2q','yxa9iNi','tLbdx0m','igHLyxa','ueLds1a','AfnJCMK','C2v0rMW','zuL0zfu','zgPgsgG','B2zM','C2XPzgu','cMHVB2S','Ahq6nJu','Ag9VA3m','zuz0Cui','zgf0ys0','uwTLtKO','BMvPDgG','r01kvxO','yxjLzca','DMLLD0G','sKzWCw8','uwHPwM8','EMu6mte','rNDLB1u','v1vNq1C','zxi7z2e','CdOXmha','iM5VBMu','qvzOwvO','EuveEKW','igvUDhi','B25ZB2W','WOBcLmkuWO7cJq','zcWGBM8','qNzUq2e','CMvWzwe','z2v0sw4','ChG7y3u','u0zgENa','t25bCha','B25NlG','nNb4o2i','ndGZnJq','WPdcH8kgWOJcJG','CgfUzwW','AxvZoJu','yNv0Dg8','oJa7EI0','lNnRlxy','CgvKigi','C2L6ztO','Dxm6n3a','yMTKwuW','weLLyuO','ywXSzwq','ztOXms4','C3zNpG','WOJcH8ktWOZcLa','BIbtruu','AfDRrwC','z2v0vwK','DgLHBh0','BurjAMS','yNL0zxm','mtiGmJe','D0HRqNK','mhGZma','qxffte8','rJKGDhC','WO7cI8kvWPlcJG','yxbP','y2fUzgK','BgX3yxi','sMr3yvK','yw1Ligy','zMfRzq','Dg9WoJe','CJT3Awq','Dw5PDa','iZaWmdS','B1v5DeC','z2v0x3a','DcGJzMy','WOVcKCkrWONcKq','C2TyzgO','yMXLig4','Bg9JywW','ic0+ia','zwLNAhq','ywnLo3C','DvbowLi','AhLIqwC','u2DVAvy','FdH8mta','C2STC3C','DhrLCG','nYWUnsK','AxzLo3C','ys1ZDY0','ywL0Aw4','DMLLDW','oIjjBNq','zvjJCMy','D2fZBva','iIbZDhi','uhLVvgu','icbVyMO','BwLSEtO','Dw5UAw4','ChvZAa','Aw1HCcW','ic0Gy2e','BNqXnG','Dw1Uo2C','wurcvxi','zgLMzG','Bwf4lwG','ltqTnY4','qvDcD1K','mYWXmdy','t1nKvvG','zxnWia','ueXbwuu','lM1UlwW','lM1UlwG','WPpcI8kuWPtcLa','yMfZAxm','y2GGDgG','svvTswm','nxb4o2i','y2zStMq','zxnVBhy','zw50lwm','ruPIEuC','rxPQuhC','qvbvoca','B3qUBw4','igq9iK0','mtbWEdS','WPlcLmkhWO3cJa','C2v0qxq','zYbPBNq','igfYztO','txvSDgK','BLDtu2W','Dg9YqwW','ihDYAxq','BMnLC1i','sKzOALG','EdT9','z3P3tvu','psiXmIi','ELbtzfq','nhWXnhW','sK9UuxO','rvnqig0','C2v0tge','EtPMBgu','y2uSq28','uMvJDa','Bgu9iMi','DhDdB2W','zu5JCe8','v2LKDgG','zxmGB2y','rgXXs24','vgT1A28','zvjLy3q','CM90yxq','lwzHBwK','A3mUBgu','tef4ANa','psjWywq','ywDHAw4','WOFcJmkgWONcKa','uIbbq1q','BwfUEq','tgT1sgu','n2e2ntG','yufQA3a','Dcb0Agu','igL0ige','EdTNyxa','Dxm6oha','CMf3qq','CLndyLm','D0fODgy','uxjMAK4','mIWYosW','z1rUDuW','r21zy3C','ywL2r1e','CMvSyxK','icb3CMK','CKnVDw4','u1bhCwK','CIbWywK','pgiGC3q','Dw5Yzxm','BwfYz2K','Bw9UB3m','mcbYz2i','nwmWidm','BNuTCM8','CdO4ChG','Bvn4A0u','AgvHBhq','DxHJCeO','CMfUzg8','mNb4idG','AMfmz0i','Ds1YB28','nZKSmtq','z2HQuhC','yxGTAgu','CgrHDgu','C25HCa','WO7cJ8kmWOJcHG','WONcJmknWOVcJW','yw1Ltwe','nduPo2i','nZq4mJK','qxv2rNq','zxbSywm','zw50o2i','o292zxi','ktSTD2u','CxLKtuS','WPlcKCkiWOZcKa','mtaSmte','B2jQzwm','DcbKyxq','zhzOueS','DgvHBq','B2TLlxC','ktTJB2W','CMuk','ihvUyxy','DuD1D2u','t2zMC2u','sKXMALO','zcdcTYa','WOBcICkgWOVcIW','oJCWmdS','BwvTB3i','DdPUB24','WOBcKmkgWOZcKa','txPhAfa','BM8GCMu','BI5OB28','q2zbEKG','ig1LBNu','B206nNa','zM92','WO/cJmkgWOFcJG','mhWXFdC','lxyYE2e','oImYyta','DgHLBG','EhHtwum','z2LUoJa','qNDZBKi','zNjVBsa','DgvYo2y','yM9KExS','r2fTzq','ExbLCW','Ag9VA0y','sg9VA3m','zxnWyxC','ufKGve8','y21wEvm','x2DHBwu','qw5PrNm','DufutKi','BMCGzM8','BgfZDem','ihrOzsa','qK5wEhy','lhrYyw4','zMvLDa','BLPSDg0','WPhcKSkpWPdcJG','z2jeAgG','B3r7ywW','BgqGAxm','DxjHpc8','B2XZE2y','AwvK','o2zVBNq','AuvHAge','BguGC2e','CMfWoNC','B29xyuy','ve1msuS','qxrgAxi','t2fzsha','WO7cLCkoWOFcHG','C3rHBMm','x19WCeW','DMfS','vhjHBNm','ChG7Cge','WONcH8kpWPlcLq','BhKGCg8','lgnHBgm','CMeTC3C','CM9Rzs0','Ds1JC3m','uMvNAxm','EdTIywm','DgfU','r3njtxm','t3boy0K','qM1MExy','WO7cJmkqWORcJa','zgfY','uwrzrwG','tg9Hzgu','BMCUcG','pgnPCMm','igXPDMu','igzPCNm','v1nKDgO','wfLKsw8','D24Gvxa','rLn1tLm','Dg9gAxG','BNrLBNq','BMfTzq','BMDZ','WO7cK8ktWOVcIG','WOBcH8ktWOJcJW','D2L0y2G','BYbHihq','WOFcICkjWPdcHW','nYWUnYK','iJiIihm','WO3cLmkvWOVcIG','ihrVCc0','igvHC2u','B3n0zMK','AgvSza','oYi+rvm','icbOB28','uKXpvxO','BMCGlYa','Dg91y2G','Dxm6nNa','zwfKEsa','DMvK','ihn0CM8','kgXVyMi','AguGBgK','zMzMoW','ifnxlva','BKr3C0G','oI40o30','iJ48l2q','igfYBwu','yMLUzgK','zxzLBNq','AMrIEvK','zxa9iJa','EeDhCNC','rfLswvK','kde4ChG','C3rYB2S','Bg9HDhm','CMf3','zMXVyxq','swrjt2S','zw4Gyw4','AeXUAvi','zxnJ','sM16CKK','B2zMihq','lxDLAwC','yxmGBM8','zeTNwfa','shPKrLy','ihbHDgm','zgvMAw4','ufa+pIa','ywT1CMe','uuzbv3G','WO3cJmkgWPtcJq','AguGB2W','DxrVo3O','rJKPpc8','mNb4idC','reLzCvy','ihnOB3C','B25Lige','z2jHkdi','WOBcLCklWOBcKq','mNm7Cg8','Dgjgtey','zxfpu2C','lwjVDhq','sgzKtwy','lNnRlxa','Bg9YoNi','B29RCW','mZi5swznAfDo','yxrnCW','mtGGnIa','y2fWDhu','Bxjnz3C','ywj7zgK','zwDPC3q','WOZcHSkpWPhcJW','yMeOmJu','BwuUCMu','EMvSr3C','Aw5Uzxi','CNnJCMK','z295Agq','y29Kzq','zejcvhi','mxb4ihi','uMfuyLu','u0nctgi','phn2zYa','ALbvBM4','BgvYkW','nJiWChG','yKPOqKK','oMjYAwC','BM9Uzq','icaGy28','DwXqDeG','mNW4Fde','t2viseS','veXpwvy','Dg9W','zxnZywC','ihnVigu','DgHLigC','yxjTzwq','zvPrzK0','D2fZBvq','oJOTD2u','ihnPz24','BgLKihi','EgPmEMC','r3DVANa','DgHLigW','WPxcKmktWPpcIG','tvLqwvy','qKPhBKi','BM5VDca','ktSGBM8','ANvZDgK','Aw5ZDge','qNjHy2S','rK1qqMy','re91q3q','oImXnta','CuDVthK','WO/cI8koWO3cJW','icaGia','Bg9N','D3jPDgu','cNLHDYa','Ahq6nZa','zgTlyKy','BgfZDa','y2XHC3m','WPxcLmklWPpcIG','DhjPyNu','ocWYndi','whrQtfy','twP3uuK','D257B3a','ntuSmtq','ig9IAMu','zwqGlYa','zxzLCNK','EhjYyLO','Ew5uEKq','ywjSzwq','lM1Ulxm','y2SIpJW','C3LUyW','yxa8l2i','DMLLD0i','AuXLBfC','pc9ZCge','Et8Pica','yt0IyMe','ELPiD24','zJmY','B3rHDgK','mZy3mJmWngToyMn5sq','BgLNBG','rNbNruS','oNbYzs0','n2vLzJu','oJe7BwK','EMX4rLO','AwvYkc4','D2fYBG','igfYBwK','Aw1Lsxm','lwXPBMu','icbJyw0','lwe9iG','iNn3mI0','ldi5lc4','yMfUzc4','yxjN','BgW6Aw4','mtD8mti','s1vsqs0','i2zMnMi','t1vAqxK','C3bYAw4','vujluM8','tJWVyNu','Fdf8nxW','DgG6mJK','zwf0zva','ie9IC2m','uxfWuvu','yw5NBgu','WPpcICkoWOBcKW','WOFcICkpWORcLq','y2uSihm','r2jMzwu','zYbxzwi','vgfHC0C','r0vNq0K','Aw9U','yuj3q2u','zg9JDw0','A3mG','iNjVDw4','vw1nq1G','ufn1ufi','EwXLpsi','CgfUpG','B3DUkq','lde0mYW','sNHVzKC','C2nuug8','zsbUB3q','DcbZCgu','Ce1QEgO','yxmGAwq','BcXTAw4','sLvUDKC','igvYCM8','q1r1s3u','q2XjvLa','DMvYC2K','teHvwwi','oJe7Dhi','E2zVBNq','EvrHCa','DMC+','C3LUy3m','zxrL','BI1ZCge','y29UDhi','wNvcwxu','WORcICkoWO3cJq','zuL0zw0','CMvTB3y','EurUqK8','r3jXs24','BvL0Efq','cNbPDgm','EM1guuS','tg9VAW','De9Ut0G','WO7cKSkqWOJcKq','ve1tA2C','DgnOzxm','D3jHCdO','AxrPywW','lYbQDw0','Ew5ztve','rNzHueu','zMy8l2i','Ec1OzwK','uwX5yw8','WOVcKCksWO7cHW','y3DKrui','AxqTC2m','thbXB2W','oJi1ChG','Fdr8mW','CgfPCKG','DgLHDgu','igrPzca','u2vWBum','sw5ZDge','uwHvChC','DwfqtMm','z0v3wNm','AhLdrvC','Cwv6reK','CMv0Dxi','q3H3ufG','BhrLCJO','C2TPBMC','zuTAuhe','WOZcJ8kgWPxcLa','zdDHotK','C2nZtKy','ihDOAwm','zKfJqMm','C29SDMu','wvH1AxK','u05qu3G','AxvZoJK','Dg9Y','Cg9Tufu','uLbQu3C','wg5HyLO','yxrJAc4','zYdcTYa','BfLtEg4','zw5LBxK','rLjNzMu','B3vYy2u','se5JA2C','CgPer1y','DgGY','zM8Qksa','igSWpq','yw55ihC','lt4GDM8','vxfxCLO','AwzLig8','Ag90ig4','sfPfCMi','AgfIBgu','qNzgCxe','C29Syxm','kdi1nsW','Bw91C2u','EI1PBMq','pJiUmhG','t2veyNq','ywWGBM8','zxLL','lM1Ulw0','ie9o','CKXPC3q','z3jVDw4','y3rPB24','DKLNALm','BNq7yM8','B3jKzxi','tML5vfq','zciVpG','vLrgrgG','lxbHBMu','BwuOkq','wgnjq0K','DxjHx3m','BM1eC1i','yvPyq0i','mhb4ic0','AhDJtxy','BNqTC2K','ELDeA0m','zwqG','C2LU','ChjLDMu','DZiTB3u','Bwriv3O','CM5NwM8','CMvZB2W','lcbUBYa','lwLUzgu','qMXXwxe','C3zNE3C','DMD7D2K','ztOXmxa','A3LysNC','tw9KDwW','v0revuC','DdmY','lsbvBMK','BwvHBG','lwfSAwC','WOJcKCkvWPpcHW','tg9Uz1G','A0HRAxK','ExzoyKK','icSG','vfDUAgK','DvnnwM8','BIbjtLm','DMnPCMO','CMuGy2W','WO3cLCkpWONcKq','BcWk','AxmGD2G','vwrsBMW','BhzLr2e','re9nq28','BNrLEhq','u3bYAw4','CLnlAxi','C2v0ica','ywSTD28','C2fUzsa','ns00idC','WPpcImktWOJcLq','pgnHBNy','CM91BMq','Ae52zLO','AM1fueq','C25HChm','Axy+','ksbVCIa','rwzlEM0','uMvWB3i','u2XUC1K','zJzIowq','nIa2Bde','AfnYr2O','DNbkze0','A2L0lxu','BfDHCNO','BgDVCgO','mJu1ldi','BNn0yw4','Aw5PDgu','WOVcICksWONcIW','yxbWBhK','tg9huvy','uMvMDxm','zhvYAw4','C1nvCxq','psiXlJi','zgvZy3S','sxj0v1u','nIaXoci','ihjNyMe','zMykrJG','igvUzca','zw1LBNq','BM90igK','AxvkBg4','CNnVCJO','WOVcH8kpWO3cJW','ihjLy28','C3rNvwq','EdTMB24','WOBcISkvWPtcJG','lxjHzgK','uwjhAM4','zMfPBgu','DNHxsfm','u3zqDuO','ihzPysa','WOJcLmknWO3cJa','yMfYzsa','v2jNv1q','uMLdEe4','AgL0CW','Ag90icG','tLLXyvC','yxHWBxe','Fdb8m3W','CMrLCI0','C2LUz2W','yLbwuhO','lMn0B3i','BwvUDc0','WO7cJCkjWOVcKW','B3rLE2y','z2v0','rgnTr04','ihnVBgK','C3qGysa','AgvPz2G','zdTWBge','DKLht2i','BwLUkdu','A2LUzYa','uMvHC28','zxiIlci','BxDju2u','qMTjreu','u1DQt1O','EevzAxe','yw1L','z2TZEeG','shv5Cey','wvHpzwK','sencvNy','BM90zq','zff4B2S','zxPez1K','mhHIna','yYGXmda','CfHXuK8','Awv3igK','sfbssKu','Axr0zwq','x3j1BNq','CMf3wwe','mhWZ','WPdcKCkvWOZcJG','BMnLCW','CJOJzJC','zMXLEdO','nhb4o3q','A2vKihu','zYb3Agu','EdOYmtq','s2rNwwu','ifrOzsa','r1LHteO','Bg9ZztO','yxjKlxq','WOZcImkkWONcKG','Dg9Nz2W','DgHLiha','phnTywW','CMfTzs4','yNL0zuW','lJmPo2q','u2fZquS','CeHjrhq','CMfTzsa','zxrZigm','DxrVo30','vLDQzLu','vej2Ehq','ic0GCNu','t2TAtuC','t1Hxqva','owqIihm','C3CYlwi','C2STBM8','DcbTyxq','zLr6u3C','Cg9YDge','yxjJ'];_0x13b1=function(){return _0x5d7d75;};return _0x13b1();}
