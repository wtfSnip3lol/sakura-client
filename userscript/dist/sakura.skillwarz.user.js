// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.0.3
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

function _0x2a2a(_0x54b75c,_0x483b70){_0x54b75c=_0x54b75c-(-0x1*-0x1d6f+-0x1*0x1bbf+-0x122);var _0x249700=_0x4ff1();var _0x4c9f85=_0x249700[_0x54b75c];if(_0x2a2a['aGVguH']===undefined){var _0x282ac6=function(_0x532460){var _0x1b9aa8='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x260ef3='',_0x3b1508='';for(var _0x15f25a=0x10c9*0x1+0x1778+-0x2841,_0x3cc834,_0x155996,_0x49ecfb=-0xb1*0x16+-0xab5+-0x1*-0x19eb;_0x155996=_0x532460['charAt'](_0x49ecfb++);~_0x155996&&(_0x3cc834=_0x15f25a%(0xcbf+-0x3c+-0xc7f)?_0x3cc834*(-0x56d*-0x3+-0x2699*0x1+-0x6*-0x3c3)+_0x155996:_0x155996,_0x15f25a++%(0x10*-0x212+-0x6b*-0x47+0x377*0x1))?_0x260ef3+=String['fromCharCode'](-0x1352+-0x5*0x5dd+0x1*0x31a2&_0x3cc834>>(-(-0x1c2f+-0x3*0x735+0x31d0)*_0x15f25a&0x1896+-0x208b+0x7fb)):0x1*0x1922+-0x6*0x592+-0x1*-0x84a){_0x155996=_0x1b9aa8['indexOf'](_0x155996);}for(var _0x76f7f6=-0xa*0x359+0xd93+0x3fb*0x5,_0x13b186=_0x260ef3['length'];_0x76f7f6<_0x13b186;_0x76f7f6++){_0x3b1508+='%'+('00'+_0x260ef3['charCodeAt'](_0x76f7f6)['toString'](0x4d*0x3b+0x2282+-0x1*0x3431))['slice'](-(-0x28d*0x6+-0x1*-0x26f3+-0x1*0x17a3));}return decodeURIComponent(_0x3b1508);};_0x2a2a['OVqmdl']=_0x282ac6,_0x2a2a['SOXNls']={},_0x2a2a['aGVguH']=!![];}var _0x5e5661=_0x249700[-0xd58*0x1+-0xab6+0x180e],_0x3bf13e=_0x54b75c+_0x5e5661,_0x2e38fb=_0x2a2a['SOXNls'][_0x3bf13e];return!_0x2e38fb?(_0x4c9f85=_0x2a2a['OVqmdl'](_0x4c9f85),_0x2a2a['SOXNls'][_0x3bf13e]=_0x4c9f85):_0x4c9f85=_0x2e38fb,_0x4c9f85;}function _0x4ff1(){var _0x398702=['C0fuDMC','vvDnsY4','D3DZBgS','EuvQyw0','phbYzsa','oYi+tM8','Awq9iNm','Ag9ZDg4','BwuUCMu','Dgf0Dxm','DgLHDgu','rhzsrvi','uufoCwi','BNqZmG','BeTWAfG','yNbVz04','BhvLica','uKnzrgq','t0HmqNK','AgLKzgu','Aw5Lza','zJu7yM8','Ag90','ig9Uihq','C2fRDxi','iJ5ZywS','DxDTAYa','EfzUrLG','rwjgDwK','DMvYEsa','iJ54pc8','iJ5dB3a','vuHquKC','zJmY','AfnOBgu','AgLZiha','v19F','qNfQAvm','EwH5sKO','DerHDge','ig5VDca','CMvKia','AguGC2K','Dg87iJ4','ugLxBwO','vNf6DvK','BM8Gvxa','lcbuyw0','pgj1Dhq','qwvtrvi','yxK6zMW','Dvbls3C','vMXOtKu','txreuLq','i2zMyJm','tvnwCxG','ywjSzsa','4OcuigzYyq','BI1PDgu','zwf0zva','yxrJAc4','r0fLsuG','DdmY','D3fMAeu','C28GDgG','As1TB24','DtmY','Dw5Kzwy','ys5ZA2K','CxnoC2G','u0TjteW','pgrPDIa','C3rYAw4','CgXHEwu','i3nHA3u','BwfYA3m','Aw5MBW','tgLWt1G','z2jIvvu','DMfS','Efnos1O','zLj2ENG','icaGia','zw50','ksbVCIa','yxvSDa','igzVCIa','AxnWBge','DMvkweC','vejfDfe','D192mG','B3nWywm','DgHLigW','v2L2ANa','u2nPDM8','vgHLigC','vMfSDwu','zsbYzxa','CNjKrwO','zsb3ywW','khrOAxm','khmPigq','AxrPywW','BMv2zxi','vujAz2i','DJiTy3m','pt09u0e','zdP0CMe','Aw5PDgu','u3zfruO','m3WXnhW','Aw5N','ihnPBMm','y0LUChu','DgfIBgu','Dxm6n3a','Bcb1Cgq','AxmGD2G','D2HLBIa','mtjWEc8','DxjPBMC','mhb4idu','pc9KAxy','qMfPD1e','zMfRzq','A2nirKK','CM91BMq','Aw5KzxG','rNDstNq','DMvhyw0','CeXkuvq','Ag90CYa','zYbZDxm','Cg9YDge','y2Lxs2m','D1DKtw4','DgnmCwG','zsbLDMu','uNvUDgK','zwqGysa','AK5ysMK','wvjZtuG','AwqGCMC','C0jRueu','BNq4','i2y3zwu','DNPIBwO','AxmGBwK','sgfuEum','zYbMywK','tg9Hzgu','BNrezwy','rJKGDhC','CY1VCMK','BNn0yw4','ihnRAwW','t0zoCwm','B3jKzxi','ywLUAw4','DxbKyxq','Aw4U','CNnJCMK','i3n3mI0','Ag9ZDa','nZC5mduYnfDdBffkEa','B2zMC2u','mxW3Fdy','mhb4ktS','BNqXnG','Ewv0lG','ndm2rMzPzwzw','y1z0uwm','zvf1ufC','zMLYzsa','Bg9dAge','AKTjsK8','pt09','Dg9Y','CMvWzNu','EvjVD3m','D3jPDgu','BgfZDeu','CMvJDgK','ELDMD2u','FdL8nxW','BM9Yzwq','DNmGC24','idyWCYa','C2v0vwK','zxmGB2y','zxbSywm','ifnxlva','BMnLCW','tg1kugW','CxvLCNK','CgvZia','DgHPBMC','CNjVCG','igL0ihm','ChrY','z2fTzq','AtmY','uwXys0q','y21K','B3vUDa','Aw51rxe','wwTHtKu','u3rYAw4','ywXPz24','s21qy3u','BIbYzwW','EwXLpsi','CezzyKm','z2XVyMe','DhLSzt0','Bg93oMG','B0jnt0O','ExrLCW','yZKIpNC','A2LUzYa','s1vsqs0','sMHgs0q','x19tquS','ihjLCg8','B2jMsq','mI4WlJm','r0zuExu','ihrOAxm','CJPWB2K','C29Syxm','BgrZlIa','B3vYy2u','D3jHCha','zg9JDw0','DcbIzwu','mtj8ma','i2jKytK','CgvYBw8','l3nWyw4','DxjJztO','i2zMzdq','zgf0yxm','ignVBNm','zwqGEwu','zsbNyw0','DMvYBg8','CMvWBge','oInMn2u','AwXKlG','Dc5KBgW','iMjHy2S','zYbIBgK','n2vLzJu','CNqGEwu','yxbWBhK','A29NsKe','D0rArwy','y2GUC3K','qwv3wfa','CMvKihK','C2LUz2W','pc9IpG','BuHtBKS','zcdcTYa','z2fTzsa','z2v0sw4','igfYztO','nhb4idK','sKL1Cxy','Aw5PDa','z3jVDw4','C291CMm','AwXLzcW','DYbNBg8','zw1WDhK','yxbWBgK','zdDHotK','A3vYyv0','z2fTzvm','Fdb8m3W','iIbZDhK','ihbHBMu','qu5eihq','EtPMBgu','y29SB3i','BMCUcG','igjSB2m','AKrZqNi','r2fTzsG','vw5PDhK','AgvHCfu','Bwvnyw4','C3bSAxq','C2TuBe8','zcbKAwe','v3DIC3a','igfYBwK','ifnxlvC','Dw5PDhK','surrqw4','Dgv4Dge','C2v0rMW','BMuUifq','BM8GBgK','vg90ywW','yMX5lum','oMf1Dg8','sfrnta','DuDWBwS','zhzrC0q','CdO2ChG','Dde2','zwXHChm','y3nZvgu','DMvK','o2jVCMq','BYbHihq','wKrvwLO','BhqGC2K','zYbMB3i','B24GAwq','BfPeC3m','igLKpsi','CMvHzhm','DMfSDwu','CMf3','qMLYwNi','sw5ZDge','AgrLCvi','rLPdufi','vuvxBxi','CMvSyxK','ywrKAw4','BIbtruu','B206mxa','yxbWzw4','rvnVAhq','DxfQr3G','uMrUv0m','AgHxyKO','yNDuCum','AgvYAxq','psjWywq','Dg9W','lde3nYW','CMfhDfu','zgf0zsa','Dte2','z2v0vwK','yw1Ligy','BgvUz3q','yMLUzgK','ihn0yxK','C3r5Bgu','BIbPzNi','BMDzsfm','yxrLigy','CNvUCYa','BwuUy3i','yNL0zuW','suzOrMW','CYb3zxi','C25HChm','zMzZzxq','CeXxvvq','DxjH','DhKGAw4','B2XLig4','DgvYzwq','uwXXrKK','zuvSzw0','BLbXANm','y2fWDhu','CIb0Agu','C3vKELi','yw5Jzsa','ifnRAwW','BLfetem','BfDHCNO','C3bHy2u','vfD2Cxq','BM90ihi','AxHLzdS','vKDVtgu','mcaWige','BLbmwxa','DZiTB3u','nYWUnsK','B3vUzcW','q21Yv2u','AMvJDhm','zgL2','B2XPzca','re9nq28','zw50rwW','B2SGAxm','u2vSzwm','BMDZ','C2XPy2u','ChHVAMm','zwqGyNu','ihbHz2u','ig9Mia','AMTQs0G','icaGica','CgfYzw4','zYbTyxi','C3rHDhu','s0D3DeK','B3jPz2K','uMvNAxm','igj1Dca','BgXLzca','zgf0yq','BNvTyMu','zwn0zwq','rfLJBuu','Dw5UAw4','vvjbx1m','tIbIEsa','BwuGBM8','DwvxCMe','Ag90icG','ihDOAwW','zxqSig8','wNPYqxG','yxrHihi','CgvJDhm','nhWZFde','AwnLihC','CMrLCJO','Esb0Exa','A2v5CW','o2jVEc0','Acbxzwi','zNvswvu','tNjluM4','CenVBNq','Dg9WoJe','icbVzMy','iokaLcbUBW','igLUC3q','BNrYB2W','CwLHD1u','uMvZB2W','x19ZywS','Ate2','yuTQrhy','B21Tyw4','D2fYBG','mhb4ic0','C3bYAw4','BgqGAxm','AhjLzG','DcaOC28','B2jMrG','BhvNAw4','BIbHihi','zKDzEMu','DhLWzq','CKnVBNq','EwvZ','BgvKoIa','zxqUia','CMvWB3i','CNvUBMK','ywXSzwq','DgLUzYa','zwDmuLC','A2v5','ignYB3m','D2f0y2G','mZi3m3DQD2fPua','ueXszg0','BNnWyxi','B25Nig8','q2n4qKm','BwvHBNm','icaGDMe','AfLhA3G','qNz2z1C','zsb1C2u','mZGWntC1mJbYrufSqLy','ktTJB2W','t0vlu1q','zwz0oMe','zwrnCW','B250lxC','C2nYAxa','z2v0rwW','BMnL','z2LUigC','C2v0','C2vSzwm','q29WAwu','zNHgzKK','DNCSnJi','BNrLCJS','ihbYB3y','ysb3Aw4','zMXLEdO','DcbPBMO','Ag9VAW','ihzPysa','zwy1o2i','sNLptw0','sNHvrhe','rhvlqu0','DhDPy2u','AfryvMu','ms41ihu','ihnVigu','ywSTD28','y3vYC28','Ahq6nZa','zhP3u0y','lGOkswy','ignVCgK','mJCXmZa0mwzhtKXNsa','ig9IAMu','uNLtt1O','vvHHELC','oJyYDMG','zxHLy0m','y2ruquC','AM9SqKe','vvH6yvK','rKXeD2y','vw5XzLm','zvbSDwC','B2jMqG','r2fTzq','zxKGAxm','Afr6tK4','yw5LBca','ywrKrxy','Aw4Onti','C29SDMu','icaO','ohfvt2fRBW','AguGAg8','z2uUrgu','yMfS','yLv6Bum','Bg9Hzhm','z2v0q2W','zuHryvi','pc9WCMu','nJyZndC5venLB1zN','wejzCgS','icaXlIa','z2LUlwW','lxDLAwC','igDHBwu','zw50tgK','lYbQDw0','BcbHz2e','CMuG','zxmGDgG','B25Jzsa','C2fNzq','we9mBKK','ihbHC3q','uMvSB2e','uK9wr08','A2vLCa','yxPbyu0','rwv2CvC','ywnRz3i','igHLyxa','wwXWBKy','CMvIDwK','vhHevxG','sevbufu','DxrVo2i','D2PHBLq','zgTPDa','u2PvDge','yNv0Dg8','t0rlEee','Ag9VA3m','phnWyw4','vNjYuuy','sNbTzNm','igjVDgG','EsbMywK','CgXivNm','mtmZnZbsDK53uMm','zhvYAw4','A1rds0G','Bwf4','ENndyuC','igHVB2S','B3v0','sxvLzKe','q3fXChy','ve52tuq','zezprxm','o3DVCMq','rLz5qNu','jwnBC2e','zxjLzca','Fdb8mG','CgfUzwW','Cg9YDca','qNLjza','AguGD3i','qxbWBgK','DgHLBG','tePdv00','zwn0Aw4','Dcb3yxm','Dgv4Dem','zgLZCgW','y0rOC0y','Axb0ige','u0LvC3e','CNnVCJO','B3j0lGO','q0jyC1G','zcb0Agu','DhrVBJ4','wezTy2y','B246y28','BLztCKO','zw1LBNq','yw1LlGO','tw9KDwW','y29WEq','vgHLigG','CIb5B3u','lc40ktS','yxbP','t1jHEwC','Dw1WAw4','BMnLigy','lwnVChK','uMvHC28','ys1ZDY0','BgvYigG','ihvUyxy','wKfdt2K','B250zw4','sK1oCge','A3fAzuu','AwWYq3a','zNvUy3q','rMTeDge','u25HChm','D2fYBMK','AxmGyNu','igvUzca','AgLSzsa','rgLMzIa','mcbMAwu','tM8GCMu','D0zoBu0','qxnZzw0','sw5KzxG','yxv0BZS','oJCWmdS','zNjHBwu','DgHOzgq','z2jHkdi','ic0+ia','icaGy28','BwvZC2e','zLD0DxO','B2fKzwq','qvbvoca','t0LtBLK','BfLOCem','C2HHzg8','zgLUzZO','yw1L','B1DPv20','CM9ZCY0','DxjLzca','o2zSzxG','r2rsCui','v2vdD2q','uIbbq1q','ys1ZA2K','lwLUzgu','lcbnzxq','Fdn8ma','Chr1CMu','rwX1sgW','BMTLEsa','t3HIrLe','AgvHza','Dc5wywW','D3fyq0G','zxmGBM8','zsXdB24','u2HHCNa','DcbUBYa','zwLNAhq','CKzbEgu','DgHLigm','AwzLig8','ywn0Axy','y3qOCYK','Dg9tDhi','AxmGBM8','lxnUyxa','CMvMAxG','zxjYB3i','whfxB00','CI5QCYa','DxjHimk3','AM9PBG','Ehjnu0C','y2XVC2u','igfYzsa','DgfSBgK','Aw50BYa','nZCSlJq','z2LMEq','psjJB2W','icaZlIa','ywXhDum','A2LUza','ihbHC3m','BgW6Aw4','Aw5ZDge','BhDHCNO','idHWEdS','DMvKia','Bgv4oJa','CMeTC3C','lwL0zw0','yxmGBM8','ihjLywm','igDSB2i','wNfAqM8','Aw9U','DhLWzum','DgHLigC','iZDLzta','qwLZEMS','ifvxtuS','Bgu9iMi','yMfYzsa','ywL0Aw4','AwrKzw4','mLzIs0rjrq','y2fSlMq','o2zVBNq','EuXkA0q','Aw9UoMy','BM9Uzq','CI5KBgW','zxG7z2e','CgfKrw4','nsWXndm','lwjVDhq','ihDOAwm','r0nHwLy','CMvTB3y','sgvHCca','zhrOoM0','igfUzca','CLzhsgG','v2vItw8','DY5vBMK','icaYlIa','BM93','B3i6i2y','t1rPBMu','BgvMDdO','C2v0sw4','C3rLBMu','u0DpsLq','qMjNrfG','qw55Avq','B25JBgK','mxb4ihm','vgv4Da','lxyYE2e','qM90Aca','rMjrwuy','EtPUB24','EdTVDMu','zxnZywC','zw5NDgG','Cg9ZAxq','ihrOzsa','yxjT','wwToDNq','AKr5sKm','quWGqum','ChvZAa','BNb1EfG','BgToEu0','s1rZufC','zenOAwW','ks4G','ChqGsvm','zxjHDgu','BMnLC1i','ihbHDgm','y29MB3i','zxnWyxC','zxHArvq','BJOG','y2XPCgi','AgfIBgu','ELfuzuS','EdOYmtq','mte0mZKYodbJshDruvG','yxr0zw0','iefdveK','BgX3yxi','BMqU','EI51C2u','tLL6BKC','Bwf4lwG','y0fYuNC','tJWVyNu','B2fYza','y2GGDgG','zwfKEsa','EdTWywq','wfnzwNq','ywLSzwq','CMvH','t21Yy3a','mtfWD2DXDLG','A2vKihu','AwqGzg8','zMfPBgu','veLwrq','Cg9ZDe0','zgLMzG','shz3Cwi','ywLSywi','C3rHBMm','yNvMzMu','nhb4ide','zvH5vKW','khmPihq','ig9Yihq','t0v3Dvq','imk3ia','mJq2nK1Ur1HPwa','tuPureW','CgfUpG','yvLot2O','EuXdzNi','tvPnq2S','CMvKDwm','DvvMz3a','yNL0zu8','lxjHzgK','CgX1z2K','DxrVoYi','zJy0','D2LUzg8','BcWk','yxbWzxi','ChrLza','BgvY','yM9KEq','BI5OB28','y3jLyxq','Ag9VA1a','yxr1CMu','CMvZB2W','mNW0Fde','ChG7y3u','lJe4ktS','rJKPpc8','DMuGB2i','DgvZDa','rLbty28','yxbZAg8','Dg9ju08','lxDYyxa','AfnJCMK','zxiTCMe','DcbTyxq','Aw5Uzxi','u0D3z1i','zsbPBNm','yMX5lMK','ys1ZDW','ywz0zxi','z2v0rMW','tefzrvi','n3b4o3a','CMuGkhi','psjZDZi','swTpEuG','zfPiBKO','zYdcTYa','CMDIysG','ywqGzMe','v2vHCg8','Bg9N','mJbWEca','ywDLigG','CMvHBa','Dfr4u2e','ywrKCMu','AwvK','zxi7iJ4','CM1VBMS','zgL1CZO','DdOG'];_0x4ff1=function(){return _0x398702;};return _0x4ff1();}(function(_0x59dd78,_0xb54625){var _0x19ade8=_0x2a2a,_0x5b1755=_0x59dd78();while(!![]){try{var _0x40d391=-parseInt(_0x19ade8(0x237))/(-0x3ef*0x5+0x9*0x2a8+-0x43c)*(-parseInt(_0x19ade8(0x2fd))/(-0x5f6+-0x3*0x95d+-0x220f*-0x1))+-parseInt(_0x19ade8(0x1eb))/(-0xc*-0x5c+0x2310+0x1*-0x275d)*(parseInt(_0x19ade8(0xbd))/(0x23*0xc+0x13a*0x6+-0x1cc*0x5))+parseInt(_0x19ade8(0x25e))/(0x18d1*0x1+0x1*-0xd55+-0xb77)*(-parseInt(_0x19ade8(0x360))/(-0x1*-0xf95+0x152d+-0x24bc))+-parseInt(_0x19ade8(0xb7))/(0xdfb+-0xc9a+-0x15a*0x1)+parseInt(_0x19ade8(0x22e))/(-0xc4a*0x1+-0x264b*-0x1+-0x19f9*0x1)*(parseInt(_0x19ade8(0x219))/(0x1abf*-0x1+-0x1*0x99d+0x2465))+-parseInt(_0x19ade8(0x33d))/(-0x1d46+-0xaa9+0x27f9)+parseInt(_0x19ade8(0x34f))/(-0x3*0xc6a+0x1b67+0x37*0x2e)*(parseInt(_0x19ade8(0x1f5))/(-0xbb1+-0x1a25+0x25e2));if(_0x40d391===_0xb54625)break;else _0x5b1755['push'](_0x5b1755['shift']());}catch(_0x6a5efa){_0x5b1755['push'](_0x5b1755['shift']());}}}(_0x4ff1,0x119*0xd13+-0x1*-0x1424b5+-0x186635),((()=>{'use strict';var _0x5865e3=_0x2a2a,_0x3c97cf={'CBXsX':function(_0x44478e,_0x1cf335){return _0x44478e!==_0x1cf335;},'EbFui':function(_0x1180bf,_0x438580){return _0x1180bf===_0x438580;},'LJCWM':'IcMKG','EluHl':_0x5865e3(0xde),'zsCaG':_0x5865e3(0x3b9)+'a-sw-'+'v2','TNvMD':_0x5865e3(0x19a),'JyOMm':_0x5865e3(0x3b9)+_0x5865e3(0x291)+_0x5865e3(0x40a)+'s','KGwtI':function(_0x5f25b4,_0x493276){return _0x5f25b4(_0x493276);},'OHLBy':function(_0x2a5819,_0x550065){return _0x2a5819+_0x550065;},'OEwuT':_0x5865e3(0x12f)+':','vzbmj':_0x5865e3(0x17d)+_0x5865e3(0x3b7),'hZuES':function(_0x2ff28a,_0x241f5b){return _0x2ff28a/_0x241f5b;},'vfmNy':function(_0x38624d,_0x2c5a41){return _0x38624d+_0x2c5a41;},'bpogN':'LIVE\x20'+'·\x20','wFNmM':_0x5865e3(0x21a)+'cts\x20·'+'\x20','zamNr':_0x5865e3(0x2f6)+'a8','ZACOi':function(_0x4870d0,_0x1c4fb2){return _0x4870d0+_0x1c4fb2;},'FbQYF':'hooks'+'\x20arme'+_0x5865e3(0x11a),'zceAk':function(_0x285c5c,_0x6531fa){return _0x285c5c+_0x6531fa;},'OTine':function(_0x11f166,_0x44d3cc){return _0x11f166+_0x44d3cc;},'uPKKw':'metad'+_0x5865e3(0x1bd)+_0x5865e3(0x349)+'·\x20','CmrWe':'joBFh','dzwSF':'armed'+_0x5865e3(0x35f),'XHiVY':'armin'+_0x5865e3(0x392),'AnFcc':_0x5865e3(0x26b)+_0x5865e3(0x128)+_0x5865e3(0x18b)+_0x5865e3(0x18d)+'\x20repo'+'rt','GFTyu':function(_0x224a32,_0x424b54){return _0x224a32+_0x424b54;},'xfsoe':function(_0xad325d,_0x186124){return _0xad325d+_0x186124;},'ngYHS':_0x5865e3(0x3d7)+'c7','YkaNE':_0x5865e3(0x325)+_0x5865e3(0x301)+_0x5865e3(0x191)+_0x5865e3(0x315)+'12px;'+_0x5865e3(0x1c9)+'2px;z'+_0x5865e3(0x2be)+_0x5865e3(0x33c)+'74830'+'00;wi'+_0x5865e3(0x30c)+_0x5865e3(0x22b)+_0x5865e3(0x203)+_0x5865e3(0xba)+_0x5865e3(0x344)+'eight'+':78vh'+';','GCaZV':'font:'+_0x5865e3(0x418)+_0x5865e3(0x211)+_0x5865e3(0x3e2)+_0x5865e3(0x3fc)+_0x5865e3(0x2c9)+_0x5865e3(0xf8)+',mono'+_0x5865e3(0x18e)+_0x5865e3(0x1c4)+_0x5865e3(0x2b3)+'w:0\x202'+_0x5865e3(0x41a)+_0x5865e3(0x1d5)+_0x5865e3(0x397)+'#000;','zWfwe':function(_0x11ba94,_0x522789){return _0x11ba94+_0x522789;},'bUzmC':function(_0x31c9e4,_0x3c4648){return _0x31c9e4+_0x3c4648;},'SvEEJ':function(_0x11b4d4,_0x376c96){return _0x11b4d4+_0x376c96;},'Suzhh':'<b\x20st'+_0x5865e3(0xe6)+_0x5865e3(0x12f)+':','Jpmfs':_0x5865e3(0x3ba)+_0x5865e3(0x2d9)+_0x5865e3(0xae)+_0x5865e3(0x2e9)+_0x5865e3(0x118),'lkNyM':_0x5865e3(0x258)+_0x5865e3(0x155)+'sw2-s'+_0x5865e3(0x3aa)+'\x22\x20sty'+'le=\x22c'+'olor:'+_0x5865e3(0xff)+_0x5865e3(0xed)+_0x5865e3(0x2fb)+_0x5865e3(0x152)+_0x5865e3(0x23c)+'\x20fram'+'e…</s'+_0x5865e3(0x362),'SGwgR':_0x5865e3(0x14e)+'er:0;'+_0x5865e3(0x12f)+':#2a0'+'f1b;b'+_0x5865e3(0xb0)+_0x5865e3(0x369)+_0x5865e3(0x414)+_0x5865e3(0x34a)+_0x5865e3(0x2b4)+_0x5865e3(0x35a)+'0px;f'+_0x5865e3(0x1fa)+'eight'+_0x5865e3(0x2a7)+_0x5865e3(0x214)+_0x5865e3(0xf7)+_0x5865e3(0x204)+_0x5865e3(0x3c0)+'y\x20JSO'+_0x5865e3(0x346)+_0x5865e3(0x280),'HRyQc':'<butt'+_0x5865e3(0x153)+'=\x22sw2'+'-x\x22\x20s'+_0x5865e3(0xe9)+_0x5865e3(0x10d)+_0x5865e3(0x121)+_0x5865e3(0x40c)+_0x5865e3(0x1ed)+'ent;b'+_0x5865e3(0xb0)+':1px\x20'+'solid'+'\x20rgba'+'(255,'+'143,1'+_0x5865e3(0x2e0)+_0x5865e3(0x1f6)+_0x5865e3(0x313)+_0x5865e3(0x10f)+';bord'+_0x5865e3(0x383)+_0x5865e3(0x39f)+_0x5865e3(0x38d)+'addin'+'g:4px'+_0x5865e3(0x2ea)+_0x5865e3(0x214)+'r:poi'+'nter;'+_0x5865e3(0x3bf)+_0x5865e3(0x255)+'n>','jNXJi':_0x5865e3(0x41b)+'>','BvvgW':'<div\x20'+_0x5865e3(0x174)+_0x5865e3(0x169)+_0x5865e3(0x2b4)+'8px\x201'+'2px;b'+_0x5865e3(0xb0)+_0x5865e3(0x307)+_0x5865e3(0x161)+'x\x20sol'+_0x5865e3(0xa1)+'ba(25'+'5,143'+',177,'+_0x5865e3(0x37a)+'displ'+_0x5865e3(0x3d3)+_0x5865e3(0x304)+_0x5865e3(0x149)+';alig'+_0x5865e3(0x3db)+'ms:ce'+_0x5865e3(0x204)+_0x5865e3(0x207)+_0x5865e3(0x193)+_0x5865e3(0x36b)+'>','tfLvT':_0x5865e3(0x3d1)+'on\x20id'+'=\x22sw2'+_0x5865e3(0x2d4)+_0x5865e3(0x12b)+_0x5865e3(0x2f9)+'ackgr'+'ound:'+'trans'+_0x5865e3(0x1a8)+'t;bor'+'der:1'+'px\x20so'+'lid\x20r'+_0x5865e3(0x2aa)+'55,14'+'3,177'+_0x5865e3(0x28a)+_0x5865e3(0x12f)+_0x5865e3(0x10a)+_0x5865e3(0x20b)+_0x5865e3(0xb0)+_0x5865e3(0x369)+_0x5865e3(0x414)+'x;pad'+'ding:'+_0x5865e3(0x11e)+_0x5865e3(0x379)+_0x5865e3(0x27c)+'point'+_0x5865e3(0x39d)+_0x5865e3(0x29b)+_0x5865e3(0x1b9)+_0x5865e3(0x37b)+'butto'+'n>','xSVkC':_0x5865e3(0xb5)+_0x5865e3(0x1aa)+'s','iGEQi':'#sw2-'+_0x5865e3(0x264),'MSVqx':'#sw2-'+_0x5865e3(0x287),'ZDUZZ':'#sw2-'+'snap','gyIJt':function(_0x140d8e,_0x311285){return _0x140d8e+_0x311285;},'YRsMH':_0x5865e3(0x239)+'Tampe'+'rmonk'+'ey\x20is'+_0x5865e3(0x3c9)+'injec'+_0x5865e3(0x1e6)+_0x5865e3(0x2df)+_0x5865e3(0x2ce)+'ross-'+_0x5865e3(0x1ac)+_0x5865e3(0x175)+_0x5865e3(0x285),'SGOJT':_0x5865e3(0x246)+_0x5865e3(0x27f)+_0x5865e3(0x23c)+_0x5865e3(0x1a4)+'\x20once'+_0x5865e3(0x30d)+'watch'+'\x20this'+_0x5865e3(0x12c)+_0x5865e3(0x23f)+_0x5865e3(0xb3),'ESoht':function(_0x39e94d,_0x243971){return _0x39e94d+_0x243971;},'lTLha':function(_0x385689,_0x1b9591){return _0x385689+_0x1b9591;},'fxFcH':function(_0x4699ad,_0x18bfea){return _0x4699ad+_0x18bfea;},'dkFRv':'yes','sAokr':function(_0xf09d02,_0x3b3c1f){return _0xf09d02+_0x3b3c1f;},'ZoIod':'\x20appl'+_0x5865e3(0x39c),'VGoLe':_0x5865e3(0x365),'Cqqpv':function(_0x4da312,_0x37ed0c){return _0x4da312+_0x37ed0c;},'KTsPW':function(_0x1e4579,_0x1a212c){return _0x1e4579<_0x1a212c;},'oBMOJ':'Wwbsp','YkNvt':function(_0x4b4dba,_0x3db61b){return _0x4b4dba+_0x3db61b;},'ZdYDA':function(_0x136fcd,_0x4af2b7){return _0x136fcd+_0x4af2b7;},'VEhiq':'──\x20','TglBf':function(_0x5b50ec,_0x3a10b3){return _0x5b50ec-_0x3a10b3;},'MIcWb':function(_0x22a1f8,_0x3a7110){return _0x22a1f8*_0x3a7110;},'uUfgp':function(_0x255502,_0x53652a){return _0x255502(_0x53652a);},'eHQaR':'\x20\x20!\x20','LBtcl':_0x5865e3(0x2db),'QlXKD':'repor'+'t','GdRqB':function(_0x3b871f){return _0x3b871f();},'exZET':function(_0xe1c915,_0xdd45e8){return _0xe1c915+_0xdd45e8;},'BqjiS':'MejTb','HdaWj':function(_0x5d9397,_0x2238d7){return _0x5d9397!==_0x2238d7;},'sATvg':function(_0x3313dc,_0x5ec0cf,_0x17d6a4){return _0x3313dc(_0x5ec0cf,_0x17d6a4);},'PiaHD':'kyuJp','skTlO':_0x5865e3(0x3ed),'sudzR':'debug','VlhNE':_0x5865e3(0x3fe),'NYznG':function(_0x5a7807,_0x3af25c){return _0x5a7807+_0x3af25c;},'OFNqc':_0x5865e3(0xf4),'wwslk':function(_0xeb854,_0x567aec){return _0xeb854(_0x567aec);},'aYNOj':function(_0x9b5e12,_0x5b9f39){return _0x9b5e12|_0x5b9f39;},'KmPcu':function(_0x58cfb9,_0x1b9073,_0x475031,_0x3e800b){return _0x58cfb9(_0x1b9073,_0x475031,_0x3e800b);},'npuxX':_0x5865e3(0x1da),'XqWoM':'f32','cArRw':_0x5865e3(0xdc),'IFhFl':function(_0x1768be,_0x2ddac8){return _0x1768be+_0x2ddac8;},'tTxSa':function(_0x1dd58e,_0x15270d){return _0x1dd58e===_0x15270d;},'bwTqC':_0x5865e3(0xf3),'tIVdc':function(_0x25cf58,_0x2ec876){return _0x25cf58^_0x2ec876;},'Aiszk':function(_0x10b548,_0x487854){return _0x10b548&_0x487854;},'rMavg':function(_0x1dff05,_0x4c4c80){return _0x1dff05!==_0x4c4c80;},'IOBkO':_0x5865e3(0x268),'uOZzG':_0x5865e3(0x1ce),'hIcjB':_0x5865e3(0x3a4),'ORayg':_0x5865e3(0x115),'egLRW':'undef'+'ined','SjUta':function(_0x283265,_0x5906aa){return _0x283265!==_0x5906aa;},'LipOX':_0x5865e3(0x3e0),'nVSrJ':function(_0x3497a8){return _0x3497a8();},'zQTeK':function(_0x132b68,_0x2b66ec){return _0x132b68!==_0x2b66ec;},'VqzuY':'uRXFf','jDyJC':function(_0x32efcb){return _0x32efcb();},'eHkXn':_0x5865e3(0x36d)+_0x5865e3(0x124)+_0x5865e3(0x231),'RCYDd':function(_0x16183c){return _0x16183c();},'cdTAG':_0x5865e3(0xc5),'YlpnF':function(_0x5cffe2,_0x6588ae){return _0x5cffe2>_0x6588ae;},'UXazW':function(_0x1242f1,_0x452d1d){return _0x1242f1+_0x452d1d;},'PCFbR':_0x5865e3(0x36c),'JIuqv':_0x5865e3(0x25d),'dMmdd':function(_0x4e3203,_0x5dbb75){return _0x4e3203+_0x5dbb75;},'rWsbS':'i16','DuJat':_0x5865e3(0x16e),'gTVdw':'u32','rqSuS':function(_0x2b2276,_0x5912de){return _0x2b2276|_0x5912de;},'ZzrAx':_0x5865e3(0x24e)+_0x5865e3(0x151)+_0x5865e3(0x28e)+'irst\x20'+_0x5865e3(0x187)+_0x5865e3(0x38e)+_0x5865e3(0x336)+'n?):\x20','xSNKZ':_0x5865e3(0x3d2),'fWtuz':function(_0x3e3b70,_0x5cb249,_0x3d1ebf){return _0x3e3b70(_0x5cb249,_0x3d1ebf);},'ktOuT':function(_0x4e6bb6,_0x5d0466){return _0x4e6bb6===_0x5d0466;},'qsNsh':function(_0x54051b,_0x1da3de){return _0x54051b===_0x1da3de;},'IuefA':function(_0x30d134,_0x420d96){return _0x30d134||_0x420d96;},'RJpGN':function(_0x1795f4,_0xcf1a43){return _0x1795f4^_0xcf1a43;},'UBZgb':function(_0xb159d9,_0x25d14a){return _0xb159d9===_0x25d14a;},'PiWmj':function(_0x8f65dd,_0x15a83e){return _0x8f65dd|_0x15a83e;},'WeCwd':function(_0x2c74cf,_0x49d57e){return _0x2c74cf^_0x49d57e;},'JhFKD':function(_0x380fab,_0x4bb5fc){return _0x380fab&_0x4bb5fc;},'FwRNt':function(_0x2399ca,_0x339029){return _0x2399ca===_0x339029;},'ZqZBo':function(_0xbde59a,_0x49a22d){return _0xbde59a^_0x49a22d;},'DYcmE':function(_0x962077,_0x312720,_0x4d36a1,_0x4ef458){return _0x962077(_0x312720,_0x4d36a1,_0x4ef458);},'VqKrO':function(_0x363403,_0x1b3453,_0x63f4f1,_0x515ffe){return _0x363403(_0x1b3453,_0x63f4f1,_0x515ffe);},'FLDwf':_0x5865e3(0x194),'AqIBo':_0x5865e3(0x9d)+'me.cr'+_0x5865e3(0x3dc)+_0x5865e3(0x1db)+_0x5865e3(0x293)+'ailab'+'le','fRvzx':'Updat'+'e','ODKxA':function(_0x3de6e4,_0x592818){return _0x3de6e4!==_0x592818;},'ytkJk':'funct'+'ion','JMNpa':function(_0x50f573,_0x591df7){return _0x50f573<_0x591df7;},'mHSnK':function(_0x55c9a1,_0x1bb7d8){return _0x55c9a1===_0x1bb7d8;},'FZCPR':function(_0x1f621c,_0x33a01a){return _0x1f621c===_0x33a01a;},'olnFh':_0x5865e3(0xa7),'pxojc':_0x5865e3(0x1dd),'TxWFa':function(_0x605d2b,_0x239534){return _0x605d2b+_0x239534;},'pFYbC':function(_0x2c15f6,_0xffbbc0,_0x5ab479){return _0x2c15f6(_0xffbbc0,_0x5ab479);},'UEWmr':function(_0xf7eb88,_0x5980b2){return _0xf7eb88+_0x5980b2;},'RpVBt':function(_0x478de8,_0x4865d6){return _0x478de8===_0x4865d6;},'cDhsF':_0x5865e3(0x13d)+_0x5865e3(0x15a)+_0x5865e3(0x1fd),'nPqjs':function(_0x111c34){return _0x111c34();},'OEKST':_0x5865e3(0x220),'FkDta':function(_0x4e699f,_0x48de67){return _0x4e699f<_0x48de67;},'TWvqt':'+0x','MJTDL':function(_0x1c2669,_0x3c6684){return _0x1c2669+_0x3c6684;},'chYAA':'LTnVP','wWdMn':function(_0x519367,_0x59f40b){return _0x519367(_0x59f40b);},'rFDDG':'hello','lKphX':function(_0x4ebc7c){return _0x4ebc7c();},'PLRdm':function(_0x416676,_0x32daa2){return _0x416676!==_0x32daa2;},'fuRYU':_0x5865e3(0x1f2),'UnqfS':_0x5865e3(0x356),'Lxhcn':function(_0x5e27f4,_0x3e1ea7){return _0x5e27f4+_0x3e1ea7;},'fxFfI':'oAJAa','qFWwM':function(_0x35e889){return _0x35e889();},'RdnWC':'2.0.2','JxUDq':function(_0x421b55,_0x52aa81){return _0x421b55-_0x52aa81;},'ROVGO':'surve'+_0x5865e3(0x25c)+_0x5865e3(0x1e1),'amseT':'UWMK\x20'+'armin'+_0x5865e3(0xa8)+'led:\x20','BirZr':function(_0x5d3fe7,_0x4ac318){return _0x5d3fe7===_0x4ac318;},'CRPKQ':_0x5865e3(0x187)+_0x5865e3(0x3ca),'hTzNN':'\x20obje'+_0x5865e3(0x2d1)+_0x5865e3(0x1ae)+'read\x20'+_0x5865e3(0x2a1)+_0x5865e3(0xf9),'lZDss':_0x5865e3(0x290)+_0x5865e3(0x338),'ySnel':function(_0x2bbde2,_0x24b86a){return _0x2bbde2+_0x24b86a;},'inuEq':_0x5865e3(0x302),'fPOoZ':_0x5865e3(0x30b)+_0x5865e3(0x156)+_0x5865e3(0x173)+_0x5865e3(0x131)+_0x5865e3(0x350)+'ntil\x20'+_0x5865e3(0x9d)+'me.re'+_0x5865e3(0x22c)+_0x5865e3(0x133)+')\x20or\x20'+_0x5865e3(0x206)+'dow\x20g'+'lobal'+'\x20yiel'+'ds\x20on'+'e.','RUrCH':_0x5865e3(0x36d)+_0x5865e3(0x310)+'tyWeb'+'Modki'+_0x5865e3(0x2c6)+_0x5865e3(0x1b8)+'pper\x20'+_0x5865e3(0xa6)+'ssing'+'\x20-\x20ca'+_0x5865e3(0x2c1)+'\x20is\x20r'+_0x5865e3(0x1b4)+_0x5865e3(0x10e)+_0x5865e3(0x341),'UHPRG':function(_0x1ae06b,_0x3086d0){return _0x1ae06b===_0x3086d0;},'yYQDk':function(_0xc0e407,_0x332e4f){return _0xc0e407!==_0x332e4f;},'IDQAn':_0x5865e3(0x3ad),'MHCzs':function(_0x1e6f08,_0x83162e){return _0x1e6f08+_0x83162e;},'kogJA':function(_0x200cd1,_0x5f5533){return _0x200cd1+_0x5f5533;},'wqXCH':function(_0x1468c1,_0x3ff4ea){return _0x1468c1+_0x3ff4ea;},'ANtWh':'0\x20of\x20','RySOZ':_0x5865e3(0x1ad)+_0x5865e3(0x183)+'\x20','CcxBC':'\x20hook'+_0x5865e3(0x406)+_0x5865e3(0x419)+_0x5865e3(0x13b)+'ng\x20at'+'\x20docu'+'ment-'+'start'+'.','ElKrh':_0x5865e3(0x263)+_0x5865e3(0x35c)+_0x5865e3(0x14f)+_0x5865e3(0x3d9)+_0x5865e3(0x92)+'\x20but\x20'+'appli'+'ed\x20no'+_0x5865e3(0x141)+_0x5865e3(0x3cb)+'gnatu'+_0x5865e3(0x240),'oEgrx':'Eithe'+_0x5865e3(0x289)+'\x20are\x20'+'not\x20i'+_0x5865e3(0x1dc)+_0x5865e3(0x197)+_0x5865e3(0x35d)+_0x5865e3(0x22f)+_0x5865e3(0x19e)+_0x5865e3(0x3b8)+_0x5865e3(0x271)+_0x5865e3(0x1ee)+_0x5865e3(0x108)+'ad.','oCqkn':function(_0x5e5706){return _0x5e5706();},'wDZEf':_0x5865e3(0x238),'ciWKc':'wUpkR','tcLqh':'hShle','OxbFQ':function(_0x1ce87d){return _0x1ce87d();},'ZkaOE':_0x5865e3(0x98)+'l','pLWUT':_0x5865e3(0xfb)+'er','cXtLx':_0x5865e3(0x3ea)+'r','uGpmk':function(_0x17dcd6,_0x5a4d14){return _0x17dcd6&&_0x5a4d14;},'AzNvg':_0x5865e3(0x40b)+'KURA-'+_0x5865e3(0x3e7)+'WARZ-'+'END=='+'=','dvQsD':_0x5865e3(0x2e4),'alsDJ':'messa'+'ge','TxDUx':function(_0x14f685){return _0x14f685();},'XFmcf':'GG_Ga'+_0x5865e3(0x136)+'ager','ezrOS':'Assem'+_0x5865e3(0x144)+'Sharp'+'.dll','SIUsq':_0x5865e3(0x2a4)+_0x5865e3(0x144)+_0x5865e3(0x2ca)+'-firs'+'tpass'+'.dll','Cesae':_0x5865e3(0x114)+_0x5865e3(0x335)+_0x5865e3(0x230)+_0x5865e3(0x2fe)+'ll','VrrQF':'obfB'};var _0x3d29b4=location[_0x5865e3(0x3a8)+_0x5865e3(0x2b5)]||'',_0x20423e=/(^|\.)www\.crazygames\.com$/[_0x5865e3(0x37d)](_0x3d29b4),_0x165734=/(^|\.)games\.crazygames\.com$/[_0x5865e3(0x37d)](_0x3d29b4),_0x5f2ef7=/(^|\.)crazygames\.com$/[_0x5865e3(0x37d)](_0x3d29b4)&&!_0x20423e&&!_0x165734,_0x12c50f=_0x20423e?_0x3c97cf['ZkaOE']:_0x165734?_0x3c97cf[_0x5865e3(0x17f)]:_0x3c97cf['cXtLx'];if(_0x3c97cf[_0x5865e3(0x147)](!_0x20423e,!_0x165734)&&!_0x5f2ef7)return;var _0x508c90='#ff8f'+'b1',_0x20c83b=_0x5865e3(0x1d0)+'ura_s'+_0x5865e3(0x3fb),_0x471098=_0x5865e3(0x40b)+_0x5865e3(0xef)+'SKILL'+'WARZ-'+'BEGIN'+_0x5865e3(0xc3),_0x5968f3=_0x3c97cf['AzNvg'];if(_0x165734){if(_0x5865e3(0x2e4)!==_0x3c97cf[_0x5865e3(0x148)])return null;else{window[_0x5865e3(0x22a)+'entLi'+_0x5865e3(0x317)+'r']('messa'+'ge',function(_0x589196){var _0x51d406=_0x5865e3,_0x69c779=_0x589196['data'];if(!_0x69c779||_0x69c779[_0x51d406(0x1d0)+_0x51d406(0x180)]!==_0x20c83b)return;try{if(window[_0x51d406(0x1a8)+'t']&&window[_0x51d406(0x1a8)+'t']!==window)window[_0x51d406(0x1a8)+'t'][_0x51d406(0x354)+'essag'+'e'](_0x69c779,'*');if(window[_0x51d406(0x16a)]&&_0x3c97cf[_0x51d406(0x27e)](window['top'],window))window['top'][_0x51d406(0x354)+'essag'+'e'](_0x69c779,'*');}catch(_0x40ae5f){}}),console['log'](_0x5865e3(0x26b)+_0x5865e3(0x128)+_0x5865e3(0x13c)+'RAPPE'+_0x5865e3(0x2bc)+'IVE\x20('+_0x5865e3(0x15e)+'\x20only'+')',_0x3c97cf[_0x5865e3(0x314)](_0x3c97cf[_0x5865e3(0x35e)],_0x508c90));return;}}if(_0x20423e){console[_0x5865e3(0x396)]('%c[sa'+'kura]'+'\x20PORT'+_0x5865e3(0x32a)+_0x5865e3(0x353),'color'+':'+_0x508c90+(';font'+'-weig'+_0x5865e3(0x215)+'0'),{'host':_0x3d29b4});var _0x424bb1={'set':function(){},'command':function(){}};function _0x4c4c1e(_0x2225fb,_0x3963c0){var _0x1aa421=_0x5865e3,_0x458c25={'uqjGx':_0x1aa421(0x24a)};if(_0x3c97cf[_0x1aa421(0x3bd)]('fhMOk',_0x3c97cf[_0x1aa421(0x274)])){if(typeof _0x39cfe1!==_0x1aa421(0x3e4)+'ined'&&_0x620eee)return _0xdf85fd['sourc'+'e']=_0x1aa421(0x2fa)+'game\x20'+_0x1aa421(0x172)+'ng',_0x58877d;}else{var _0x5bca53={'__sakura':_0x20c83b,'kind':_0x3c97cf[_0x1aa421(0x2c2)],'cmd':_0x2225fb,'arg':_0x3963c0};try{var _0x479063=new BroadcastChannel(_0x1aa421(0x3b9)+_0x1aa421(0x389));_0x479063['postM'+_0x1aa421(0x323)+'e'](_0x5bca53),setTimeout(function(){var _0x11f20d=_0x1aa421;if(_0x458c25[_0x11f20d(0x164)]==='EevqW')try{_0x479063[_0x11f20d(0x2dc)]();}catch(_0x15ffa1){}else return new _0x374968(_0x2e3774['buffe'+'r'],_0x561232['byteO'+_0x11f20d(0x17e)],_0x3b6b0d[_0x11f20d(0x17a)+_0x11f20d(0x324)]);},0x2693+0x2*0x10fd+-0x4793);}catch(_0x2c774e){}}}function _0x4144a3(){var _0x2d109d=_0x5865e3,_0x9a44f0=document[_0x2d109d(0x1fc)+_0x2d109d(0x284)+'ById'](_0x3c97cf['zsCaG']);if(_0x9a44f0)return _0x9a44f0;if(!document['body']||!document[_0x2d109d(0x372)][_0x2d109d(0x162)+_0x2d109d(0x32f)+'d'])return null;try{var _0x1f8025=(_0x2d109d(0x1bf)+_0x2d109d(0x26d))['split']('|'),_0xceaab6=-0x15d*0x1+-0x20cf+0x222c;while(!![]){switch(_0x1f8025[_0xceaab6++]){case'0':document['body'][_0x2d109d(0x162)+_0x2d109d(0x32f)+'d'](_0x9a44f0);continue;case'1':_0x9a44f0['id']=_0x3c97cf[_0x2d109d(0x262)];continue;case'2':return _0x9a44f0;case'3':_0x9a44f0=document[_0x2d109d(0x374)+_0x2d109d(0x185)+'ent'](_0x3c97cf[_0x2d109d(0x267)]);continue;case'4':if(!document['getEl'+_0x2d109d(0x284)+_0x2d109d(0x270)](_0x2d109d(0x3b9)+'a-sw-'+_0x2d109d(0x40a)+'s')){var _0x55ec66=document[_0x2d109d(0x374)+'eElem'+'ent'](_0x2d109d(0x174));_0x55ec66['id']=_0x3c97cf[_0x2d109d(0x20c)],_0x55ec66[_0x2d109d(0x277)+_0x2d109d(0x295)+'t']=_0x2d109d(0x3eb)+_0x2d109d(0x2ed)+'-v2{a'+'ll:in'+'itial'+'}',(document[_0x2d109d(0x2c5)]||document[_0x2d109d(0xfc)+_0x2d109d(0x19d)+_0x2d109d(0x284)])[_0x2d109d(0x162)+'dChil'+'d'](_0x55ec66);}continue;}break;}}catch(_0x4fb0c6){return null;}}function _0x262425(){var _0x5ed264=_0x5865e3,_0x29357f=_0x4144a3();if(!_0x29357f)return _0x424bb1;if(_0x29357f['datas'+'et'][_0x5ed264(0x28b)])return _0x29357f[_0x5ed264(0x28b)];try{return _0x3c97cf[_0x5ed264(0x1ab)](_0x4efeec,_0x29357f);}catch(_0x84ce82){return _0x29357f[_0x5ed264(0x104)+'et'][_0x5ed264(0x28b)]='1',_0x29357f['api']=_0x424bb1,console[_0x5ed264(0x1d4)](_0x5ed264(0x26b)+_0x5ed264(0x128)+_0x5ed264(0x12c)+'l\x20dis'+'abled',_0x3c97cf[_0x5ed264(0x3b3)](_0x3c97cf['OEwuT'],_0x508c90),_0x84ce82),_0x424bb1;}}function _0x4efeec(_0x28ae06){var _0x2e1d4a=_0x5865e3,_0x11737b={'nXENq':'QJKvj','zUeXw':function(_0x1dbbed){return _0x1dbbed();},'BbgDX':_0x3c97cf[_0x2e1d4a(0x176)],'kqZeE':_0x2e1d4a(0x2e3)+_0x2e1d4a(0x31f)+_0x2e1d4a(0x3b9)+'a.ski'+_0x2e1d4a(0x340)+_0x2e1d4a(0x342)+_0x2e1d4a(0x2d8)+'AND\x20t'+'he\x20ol'+'d\x20dia'+'g\x20scr'+_0x2e1d4a(0x27a)+'re\x0a','wBCrf':function(_0x1ce444,_0x335a18){return _0x1ce444!==_0x335a18;}};_0x28ae06[_0x2e1d4a(0x174)][_0x2e1d4a(0x14c)+'xt']=_0x3c97cf[_0x2e1d4a(0x314)](_0x3c97cf[_0x2e1d4a(0xe1)]+('backg'+_0x2e1d4a(0x91)+':#150'+'c1d;c'+'olor:'+_0x2e1d4a(0xa4)+_0x2e1d4a(0x3b6)+_0x2e1d4a(0x1c1)+_0x2e1d4a(0x31c)+_0x2e1d4a(0x19b)+_0x2e1d4a(0x393)+'255,1'+'43,17'+_0x2e1d4a(0x196)+';bord'+_0x2e1d4a(0x383)+_0x2e1d4a(0x39f)+'14px;')+_0x3c97cf[_0x2e1d4a(0x309)],_0x2e1d4a(0x278)+_0x2e1d4a(0x3d3)+'ex;fl'+'ex-di'+_0x2e1d4a(0xc9)+_0x2e1d4a(0x282)+'lumn;'+'overf'+_0x2e1d4a(0xea)+_0x2e1d4a(0x2fc)+';'),_0x28ae06[_0x2e1d4a(0x385)+_0x2e1d4a(0x146)]=_0x3c97cf['zceAk'](_0x3c97cf[_0x2e1d4a(0xca)](_0x3c97cf['zceAk'](_0x3c97cf[_0x2e1d4a(0x232)](_0x3c97cf[_0x2e1d4a(0x40e)](_0x3c97cf['zceAk'](_0x3c97cf['OHLBy'](_0x3c97cf[_0x2e1d4a(0x314)](_0x2e1d4a(0x3e8)+'style'+'=\x22pad'+_0x2e1d4a(0x2b4)+'9px\x201'+'2px;b'+'order'+'-bott'+_0x2e1d4a(0x161)+'x\x20sol'+_0x2e1d4a(0xa1)+'ba(25'+_0x2e1d4a(0x306)+_0x2e1d4a(0x16b)+'.3);d'+'ispla'+_0x2e1d4a(0x12e)+'x;gap'+':8px;'+_0x2e1d4a(0xe3)+_0x2e1d4a(0x2ee)+'s:cen'+'ter;f'+_0x2e1d4a(0x2ec)+'\x200\x20au'+_0x2e1d4a(0x3cc)+_0x3c97cf['Suzhh']+_0x508c90,_0x3c97cf[_0x2e1d4a(0x25a)]),_0x3c97cf[_0x2e1d4a(0x32d)]),_0x2e1d4a(0x3d1)+'on\x20id'+_0x2e1d4a(0x38f)+_0x2e1d4a(0x28f)+'\x22\x20sty'+'le=\x22d'+_0x2e1d4a(0x3f8)+_0x2e1d4a(0x321)+'e;mar'+_0x2e1d4a(0x23a)+_0x2e1d4a(0x1f8)+_0x2e1d4a(0x251)+_0x2e1d4a(0x24b)+'ound:')+_0x508c90,_0x3c97cf[_0x2e1d4a(0x386)])+_0x3c97cf['HRyQc'],_0x3c97cf[_0x2e1d4a(0x9f)]),_0x3c97cf[_0x2e1d4a(0x1f3)]),_0x3c97cf['tfLvT']),_0x2e1d4a(0x258)+_0x2e1d4a(0x155)+'sw2-h'+'int\x22\x20'+'style'+_0x2e1d4a(0x2e2)+'or:#8'+_0x2e1d4a(0x127)+'\x22>F9\x20'+_0x2e1d4a(0x20f)+_0x2e1d4a(0x1ba)+_0x2e1d4a(0x404)+_0x2e1d4a(0xee)+'/\x20spr'+'intin'+'g\x20/\x20j'+_0x2e1d4a(0x28d)+_0x2e1d4a(0x1a9)+'ks\x20wh'+'ich\x20f'+'ield\x20'+_0x2e1d4a(0x416)+'ich.<'+_0x2e1d4a(0x101)+'>')+_0x3c97cf[_0x2e1d4a(0x9f)]+(_0x2e1d4a(0x3a5)+_0x2e1d4a(0x3a7)+_0x2e1d4a(0x195)+'t\x22\x20st'+_0x2e1d4a(0xe6)+'margi'+'n:0;p'+_0x2e1d4a(0x15f)+'g:10p'+'x\x2012p'+_0x2e1d4a(0x322)+'rflow'+_0x2e1d4a(0x145)+_0x2e1d4a(0x2b9)+':1\x201\x20'+_0x2e1d4a(0x2a6)+'white'+'-spac'+'e:pre'+_0x2e1d4a(0x381)+_0x2e1d4a(0x269)+'-brea'+'k:bre'+_0x2e1d4a(0x213)+'rd;fo'+'nt:in'+_0x2e1d4a(0x168)+';')+('max-h'+_0x2e1d4a(0x2cc)+_0x2e1d4a(0x21d)+_0x2e1d4a(0x3a6)+'\x20repo'+_0x2e1d4a(0x110)+'t.\x0a\x0aT'+_0x2e1d4a(0x3c4)+_0x2e1d4a(0x229)+_0x2e1d4a(0xb2)+'es\x20it'+'self\x20'+_0x2e1d4a(0x417)+_0x2e1d4a(0x2f5)+_0x2e1d4a(0x170)+'rame\x20'+_0x2e1d4a(0x233)+_0x2e1d4a(0x1cb)+_0x2e1d4a(0x105)+_0x2e1d4a(0x182)+'eeded'+_0x2e1d4a(0x217)+_0x2e1d4a(0xd9)+'tays\x20'+_0x2e1d4a(0x125)+_0x2e1d4a(0x3d0)+_0x2e1d4a(0x100)+_0x2e1d4a(0x2c3)+_0x2e1d4a(0x2d3)+'t\x20inj'+_0x2e1d4a(0x275)+'g\x20int'+'o\x20the'+_0x2e1d4a(0x1e9)+_0x2e1d4a(0xac)+_0x2e1d4a(0x1fe)+_0x2e1d4a(0x170)+'rame.'+_0x2e1d4a(0x236)+'>');var _0x3dc0ca=_0x28ae06[_0x2e1d4a(0xd5)+_0x2e1d4a(0x19f)+_0x2e1d4a(0xc4)](_0x3c97cf['xSVkC']),_0x2cf8b6=_0x28ae06['query'+_0x2e1d4a(0x19f)+_0x2e1d4a(0xc4)](_0x3c97cf['iGEQi']),_0x23d26a=_0x28ae06[_0x2e1d4a(0xd5)+'Selec'+_0x2e1d4a(0xc4)](_0x3c97cf[_0x2e1d4a(0x3d8)]),_0x1a4e5a=_0x28ae06[_0x2e1d4a(0xd5)+'Selec'+_0x2e1d4a(0xc4)]('#sw2-'+'x'),_0x41efa2=_0x28ae06['query'+'Selec'+'tor'](_0x3c97cf[_0x2e1d4a(0x150)]),_0x1a4b13=_0x28ae06['query'+_0x2e1d4a(0x19f)+_0x2e1d4a(0xc4)](_0x2e1d4a(0xb5)+'hint'),_0x1bd16c=null;if(_0x1a4e5a)_0x1a4e5a['oncli'+'ck']=function(){try{_0x28ae06['remov'+'e']();}catch(_0x51c918){}};if(_0x41efa2)_0x41efa2['oncli'+'ck']=function(){var _0x462969=_0x2e1d4a;_0x4c4c1e(_0x3c97cf[_0x462969(0xa5)]);};if(_0x23d26a)_0x23d26a[_0x2e1d4a(0x31b)+'ck']=function(){var _0x54555b=_0x2e1d4a,_0x28c2a8={'rFAxe':_0x54555b(0x201)+'d'},_0x12ce43=_0x3c97cf[_0x54555b(0x3b3)](_0x471098+'\x0a'+(_0x1bd16c?JSON[_0x54555b(0x3e9)+_0x54555b(0x2e1)](_0x1bd16c,null,0x2*0x386+-0x1ec9+0x7ea*0x3):''),'\x0a')+_0x5968f3,_0x5bdb4d=function(){var _0x1597a7=_0x54555b;if(_0x23d26a)_0x23d26a[_0x1597a7(0x277)+'onten'+'t']=_0x28c2a8[_0x1597a7(0x2cd)];};if(navigator['clipb'+_0x54555b(0x347)]&&navigator[_0x54555b(0x339)+_0x54555b(0x347)]['write'+'Text'])navigator[_0x54555b(0x339)+_0x54555b(0x347)][_0x54555b(0xc7)+_0x54555b(0x31d)](_0x12ce43)[_0x54555b(0x273)](_0x5bdb4d,function(){_0xc199ad();});else _0xc199ad();function _0xc199ad(){var _0x1d93a4=_0x54555b,_0x2b7d99=document[_0x1d93a4(0x374)+_0x1d93a4(0x185)+_0x1d93a4(0x3f4)](_0x1d93a4(0x13f)+_0x1d93a4(0x34d));_0x2b7d99[_0x1d93a4(0x157)]=_0x12ce43;if(!document['body'])return;document[_0x1d93a4(0x372)]['appen'+_0x1d93a4(0x32f)+'d'](_0x2b7d99),_0x2b7d99[_0x1d93a4(0x200)+'t']();try{if(_0x11737b['nXENq']===_0x1d93a4(0x221)){_0x202b03['error']='Runti'+_0x1d93a4(0x179)+_0x1d93a4(0x3dc)+_0x1d93a4(0x1db)+_0x1d93a4(0x293)+_0x1d93a4(0x357)+'le';return;}else document[_0x1d93a4(0x21e)+_0x1d93a4(0x1d3)+'d'](_0x1d93a4(0x287)),_0x11737b['zUeXw'](_0x5bdb4d);}catch(_0x49cf74){}_0x2b7d99[_0x1d93a4(0x30a)+'e']();}};setTimeout(function(){var _0x5416c3=_0x2e1d4a,_0x50c9ef={'NzsKD':function(_0x2643de,_0x3e247c){return _0x2643de<_0x3e247c;},'rzgCc':function(_0x1f02d2,_0x3c6bec){return _0x1f02d2<_0x3c6bec;}};if('NRwkw'!=='chWhB'){if(_0x1bd16c)return;if(!_0x3dc0ca||!_0x2cf8b6)return;_0x3dc0ca[_0x5416c3(0x277)+'onten'+'t']='no\x20re'+_0x5416c3(0x26f)+'after'+_0x5416c3(0xce)+_0x5416c3(0x3da)+'me\x20no'+_0x5416c3(0x208)+'ected'+'?',_0x3dc0ca['style'][_0x5416c3(0x12f)]=_0x11737b[_0x5416c3(0x319)],_0x2cf8b6['textC'+_0x5416c3(0x295)+'t']=_0x5416c3(0x400)+_0x5416c3(0x170)+'rame\x20'+'never'+'\x20post'+_0x5416c3(0x9e)+_0x5416c3(0x117)+_0x5416c3(0x402)+_0x5416c3(0x27d)+'\x0a'+('This\x20'+_0x5416c3(0x26e)+_0x5416c3(0x205)+_0x5416c3(0x241)+_0x5416c3(0x1f4)+_0x5416c3(0xb4)+'pt\x20IS'+_0x5416c3(0x1cc)+_0x5416c3(0x1e5)+_0x5416c3(0x30d)+'runni'+'ng\x20on'+_0x5416c3(0x326)+_0x5416c3(0x98)+_0x5416c3(0x36e))+(_0x5416c3(0x3e1)+'e\x20rem'+'ainin'+_0x5416c3(0x97)+_0x5416c3(0x1be)+_0x5416c3(0x11d)+'\x0a\x0a')+('\x20\x201.\x20'+'Tampe'+_0x5416c3(0x39e)+_0x5416c3(0x227)+'\x20not\x20'+'injec'+_0x5416c3(0x1e6)+_0x5416c3(0x2df)+_0x5416c3(0x2ce)+_0x5416c3(0x2b7)+_0x5416c3(0x1ac)+_0x5416c3(0x175)+_0x5416c3(0x285))+('\x20\x202.\x20'+'The\x20p'+_0x5416c3(0x398)+_0x5416c3(0x2ef)+_0x5416c3(0xfd)+_0x5416c3(0xe5)+'oaded'+_0x5416c3(0x411)+'e\x20ins'+_0x5416c3(0x2de)+_0x5416c3(0x130))+_0x11737b[_0x5416c3(0x297)]+(_0x5416c3(0x1a7)+'insta'+'lled\x20'+'—\x20two'+_0x5416c3(0x218)+_0x5416c3(0xd0)+'\x20UWMK'+_0x5416c3(0x25b)+_0x5416c3(0x334)+_0x5416c3(0x1c5)+_0x5416c3(0x2a4)+'bly.i'+_0x5416c3(0xad)+'tiate'+'.\x0a\x0a')+('Reloa'+_0x5416c3(0x27f)+'\x20game'+'\x20page'+'\x20once'+_0x5416c3(0x30d)+_0x5416c3(0x1ea)+_0x5416c3(0xf6)+'\x20pane'+_0x5416c3(0x23f)+'in.');}else{try{var _0x30d949='';for(var _0x1a33b3=-0x164d*-0x1+-0x15*0x58+-0xf15;_0x50c9ef['NzsKD'](_0x1a33b3,arguments[_0x5416c3(0x171)+'h']);_0x1a33b3++){var _0x1e1f61=arguments[_0x1a33b3];if(typeof _0x1e1f61===_0x5416c3(0x3e9)+'g')_0x30d949+=_0x1e1f61;else{if(_0x1e1f61&&_0x1e1f61[_0x5416c3(0x2ad)+'ge'])_0x30d949+=_0x1e1f61['messa'+'ge'];}}if(_0x30d949['index'+'Of']('Unity'+_0x5416c3(0x30f)+_0x5416c3(0x253))!==-(-0x1*0x709+-0x1df6+0x2500)&&_0x50c9ef['rzgCc'](_0x9f2dab['lengt'+'h'],0x34d+-0x1e1b+-0xd85*-0x2))_0x1df1de['push'](_0x30d949['slice'](0x4*-0x95f+0x1e8e+-0x6ee*-0x1,-0xea6+-0x25c9+0x1*0x359b));}catch(_0x5e3a7a){}return _0x58c621['apply'](_0x3da7d1,arguments);}},0x15d67+0x1465c+0x1d6d*-0xf);var _0x140768={'set':function(_0x34beca){var _0x263dcb=_0x2e1d4a;_0x1bd16c=_0x34beca;if(_0x23d26a)_0x23d26a['style'][_0x263dcb(0x278)+'ay']='';var _0x3e075c=_0x34beca[_0x263dcb(0x2e8)+_0x263dcb(0xd3)]&&_0x34beca[_0x263dcb(0x2e8)+'nces']['FPSco'+_0x263dcb(0x1cd)+_0x263dcb(0x371)],_0x4c7128=Math['round'](_0x3c97cf['hZuES'](_0x34beca[_0x263dcb(0x14b)+_0x263dcb(0x1f9)]||-0xc46+-0x13a1+-0x1*-0x1fe7,0x2c1*-0x9+0x166*-0x11+0x3477));if(_0x3dc0ca){var _0x19f0be,_0x21b879;if(_0x3e075c&&_0x34beca['surve'+'y']&&_0x34beca['surve'+'y'][_0x263dcb(0x37e)+_0x263dcb(0x1cd)+_0x263dcb(0x371)])_0x19f0be=_0x3c97cf['vfmNy'](_0x3c97cf[_0x263dcb(0x3b0)]+Object[_0x263dcb(0x1c3)](_0x34beca[_0x263dcb(0x2e8)+_0x263dcb(0xd3)])[_0x263dcb(0x171)+'h']+_0x3c97cf[_0x263dcb(0x2a3)]+_0x4c7128,'s'),_0x21b879=_0x3c97cf['zamNr'];else{if(_0x34beca['hooks'+_0x263dcb(0x272)+'ed']>0x31*-0x25+0x19a8*-0x1+0x20bd)_0x19f0be=_0x3c97cf['ZACOi'](_0x3c97cf[_0x263dcb(0x320)],_0x4c7128)+'s',_0x21b879=_0x263dcb(0x103)+'8a';else{if(_0x34beca['scrip'+_0x263dcb(0x3c8)])_0x19f0be=_0x3c97cf['zceAk'](_0x3c97cf[_0x263dcb(0x314)](_0x3c97cf[_0x263dcb(0x3d4)],_0x4c7128),'s'),_0x21b879=_0x263dcb(0x103)+'8a';else{if(_0x3c97cf[_0x263dcb(0x198)]!==_0x3c97cf[_0x263dcb(0x198)]){if(_0x558916[_0x20492f][_0x263dcb(0x209)]&&_0x11737b['wBCrf'](_0x498409[_0x5f4eae]['hook']['table'+'Index'],_0x2fead0))_0xa718a4++;}else _0x19f0be=(_0x34beca[_0x263dcb(0x327)]&&_0x34beca['arm']['ok']?_0x3c97cf[_0x263dcb(0x216)]:_0x3c97cf['XHiVY'])+_0x4c7128+'s',_0x21b879=_0x263dcb(0x103)+'8a';}}}_0x3dc0ca['textC'+'onten'+'t']=_0x19f0be,_0x3dc0ca[_0x263dcb(0x174)][_0x263dcb(0x12f)]=_0x21b879;}_0x1a4b13&&(_0x1a4b13[_0x263dcb(0x277)+_0x263dcb(0x295)+'t']=_0x34beca['diff']&&_0x34beca[_0x263dcb(0x355)][_0x263dcb(0x171)+'h']?_0x263dcb(0x2a0)+_0x263dcb(0xcd)+_0x263dcb(0x37f)+_0x263dcb(0x3a0)+_0x34beca[_0x263dcb(0x355)][_0x263dcb(0x2da)](',\x20'):_0x263dcb(0xab)+_0x263dcb(0x1c0)+_0x263dcb(0x29f)+'walki'+'ng\x20/\x20'+_0x263dcb(0x1d6)+_0x263dcb(0x1e6)+_0x263dcb(0x23e)+'ping\x20'+_0x263dcb(0x3ec)+_0x263dcb(0x308)+'h\x20fie'+_0x263dcb(0x1d7)+_0x263dcb(0x308)+'h.');if(_0x2cf8b6)try{_0x2cf8b6['textC'+_0x263dcb(0x295)+'t']=_0x3c97cf[_0x263dcb(0x1ab)](_0x2bcf9e,_0x34beca);}catch(_0x1e68f0){_0x2cf8b6[_0x263dcb(0x277)+'onten'+'t']=JSON[_0x263dcb(0x3e9)+'gify'](_0x34beca,null,-0x7e1*0x4+0x2*0xfa3+0x3f);}console[_0x263dcb(0x396)](_0x3c97cf['AnFcc'],_0x3c97cf['OEwuT']+_0x508c90+(_0x263dcb(0x2ff)+_0x263dcb(0x23b)+_0x263dcb(0x215)+'0'),_0x34beca),console[_0x263dcb(0x396)](_0x3c97cf['GFTyu'](_0x3c97cf[_0x263dcb(0x3b3)](_0x3c97cf['xfsoe'](_0x471098,'\x0a')+JSON[_0x263dcb(0x3e9)+_0x263dcb(0x2e1)](_0x34beca,null,-0xfc5+-0xce*0x14+0x2*0xfef),'\x0a'),_0x5968f3));}};return _0x28ae06['datas'+'et'][_0x2e1d4a(0x28b)]='1',_0x28ae06[_0x2e1d4a(0x28b)]=_0x140768,_0x140768;}function _0x2bcf9e(_0x45b908){var _0x28f821=_0x5865e3,_0x36b227={'eXyVL':function(_0x54332a,_0xbbed81){var _0x28ec6e=_0x2a2a;return _0x3c97cf[_0x28ec6e(0x40e)](_0x54332a,_0xbbed81);},'RvwaY':function(_0x2fc4ee,_0x217c8f){return _0x3c97cf['bUzmC'](_0x2fc4ee,_0x217c8f);},'jKIJO':function(_0x56659c,_0xcb5a05){return _0x3c97cf['gyIJt'](_0x56659c,_0xcb5a05);},'kcHFI':_0x28f821(0x400)+_0x28f821(0x170)+'rame\x20'+_0x28f821(0x408)+'\x20post'+_0x28f821(0x9e)+'singl'+_0x28f821(0x402)+'ort.\x0a'+'\x0a','QlqFI':_0x3c97cf[_0x28f821(0xa0)],'LSQvG':_0x28f821(0x311)+'The\x20p'+_0x28f821(0x398)+_0x28f821(0x2ef)+_0x28f821(0xfd)+_0x28f821(0xe5)+_0x28f821(0x2af)+_0x28f821(0x411)+_0x28f821(0x387)+_0x28f821(0x2de)+_0x28f821(0x130),'XOLnI':_0x28f821(0x2e3)+_0x28f821(0x31f)+'sakur'+_0x28f821(0x3e5)+'llwar'+'z.use'+_0x28f821(0x2d8)+_0x28f821(0x12d)+'he\x20ol'+_0x28f821(0x139)+'g\x20scr'+_0x28f821(0x27a)+'re\x0a','rVGHh':_0x28f821(0x1a7)+'insta'+_0x28f821(0x1af)+'—\x20two'+'\x20copi'+_0x28f821(0xd0)+_0x28f821(0x2f8)+'\x20both'+_0x28f821(0x334)+_0x28f821(0x1c5)+_0x28f821(0x2a4)+_0x28f821(0x388)+'nstan'+'tiate'+'.\x0a\x0a','FVyBu':_0x3c97cf[_0x28f821(0x318)]},_0x403270=[];_0x403270[_0x28f821(0x32b)](_0x3c97cf[_0x28f821(0x163)](_0x28f821(0x2a8)+_0x28f821(0x3f3)+(_0x45b908[_0x28f821(0xb6)]||'?'),_0x28f821(0x22d))+Math['round']((_0x45b908['elaps'+'edMs']||0xe2a+-0x26f9+0x18cf)/(0x1*-0x217d+0x6d0+0x1*0x1e95))+'s)'),_0x403270['push'](_0x3c97cf['lTLha'](_0x3c97cf['fxFcH'](_0x3c97cf['zceAk'](_0x28f821(0x3bb)+'\x20\x20\x20\x20',_0x45b908['uwmk']?_0x28f821(0x1e0):'no')+(_0x28f821(0x2ac)+'ntext'+'\x20'),_0x45b908[_0x28f821(0x298)+_0x28f821(0x1c8)+'ext']?_0x3c97cf['dkFRv']:'no')+('\x20\x20\x20ty'+_0x28f821(0xd6)),_0x45b908['typeC'+_0x28f821(0xdf)]!=null?_0x45b908[_0x28f821(0x2f4)+'ount']:'?')),_0x403270[_0x28f821(0x32b)](_0x3c97cf['sAokr']('hooks'+_0x28f821(0x3f3),_0x45b908['hooks'+'Appli'+'ed'])+'/'+_0x45b908['hooks'+_0x28f821(0x143)]+_0x3c97cf['ZoIod']),_0x403270[_0x28f821(0x32b)]('');var _0x3b84d2=_0x45b908[_0x28f821(0x2e8)+'nces']||{},_0x50750f=Object['keys'](_0x3b84d2);!_0x50750f['lengt'+'h']&&(_0x403270[_0x28f821(0x32b)](_0x28f821(0x142)+_0x28f821(0x37c)+_0x28f821(0x199)+'\x20capt'+'ured\x20'+_0x28f821(0xbc)),_0x403270['push'](''),_0x403270[_0x28f821(0x32b)](_0x28f821(0x288)+'ooks\x20'+_0x28f821(0xc0)+'on\x20th'+_0x28f821(0x107)+'e\x27s\x20o'+'wn\x20Up'+'date('+');\x20no'+_0x28f821(0xd7)+'\x20capt'+_0x28f821(0x2b8)+_0x28f821(0x1f0)),_0x403270['push'](_0x28f821(0x3cf)+_0x28f821(0x16d)+'ran\x20y'+_0x28f821(0x1bb)+_0x28f821(0x188)+'\x20sign'+_0x28f821(0x376)+'\x20did\x20'+'not\x20m'+_0x28f821(0x3dd)));for(var _0x4a34cd=0x1eb3+0x2273*-0x1+0x1*0x3c0;_0x4a34cd<_0x50750f[_0x28f821(0x171)+'h'];_0x4a34cd++){if(_0x3c97cf[_0x28f821(0x192)]!==_0x28f821(0x365)){if(_0x2c0d9a[_0x352f2f]['hook']&&_0xb8b252[_0x45c7a7][_0x28f821(0x209)]['appli'+'ed'])_0x150915++;}else{var _0x3f5ae2=_0x50750f[_0x4a34cd];_0x403270[_0x28f821(0x32b)](_0x3c97cf[_0x28f821(0x266)](_0x3f5ae2,'\x20@\x20')+_0x3b84d2[_0x3f5ae2]);}}_0x403270[_0x28f821(0x32b)]('');var _0x7e8acb=_0x45b908['surve'+'y']||{},_0x2e5abe=Object[_0x28f821(0x1c3)](_0x7e8acb);for(var _0x44f51c=-0x29b*-0x5+-0x1*-0x1e13+-0x72f*0x6;_0x3c97cf[_0x28f821(0x32e)](_0x44f51c,_0x2e5abe[_0x28f821(0x171)+'h']);_0x44f51c++){if(_0x3c97cf[_0x28f821(0xeb)]===_0x28f821(0x13a)){var _0x4323d6=_0x2e5abe[_0x44f51c],_0x123d42=_0x7e8acb[_0x4323d6];if(!_0x123d42||!_0x123d42[_0x28f821(0x171)+'h'])continue;_0x403270['push'](_0x3c97cf[_0x28f821(0x328)](_0x3c97cf['ZdYDA'](_0x3c97cf['VEhiq'],_0x4323d6)+'\x20',new Array(Math[_0x28f821(0x261)](-0x2056+-0x267*0x9+0x35f6,_0x3c97cf['TglBf'](0x571+0x2d*-0x29+0x1e6,_0x4323d6[_0x28f821(0x171)+'h'])))['join']('─'))),_0x403270[_0x28f821(0x32b)](_0x28f821(0x1ca)+'set\x20\x20'+'\x20kind'+_0x28f821(0x1a7)+_0x28f821(0x1f1)+_0x28f821(0x3b1)+'\x20\x20\x20\x20\x20'+_0x28f821(0x1a7)+'raw');for(var _0xf1579b=-0xcd9+-0x1*0xac9+-0x4ba*-0x5;_0xf1579b<_0x123d42['lengt'+'h'];_0xf1579b++){var _0x118254=_0x123d42[_0xf1579b],_0x575f6d=typeof _0x118254['v']===_0x28f821(0x1b1)+'r'?Math[_0x28f821(0x91)](_0x3c97cf['MIcWb'](_0x118254['v'],0x1*-0x384+0xad+0x6bf))/(0x11b*-0x15+-0x2f*-0x2b+0x6b*0x2e):_0x118254['v'];_0x403270['push'](_0x3c97cf['zWfwe'](_0x3c97cf[_0x28f821(0x328)]('\x20\x20'+('0x'+_0x118254['o']['toStr'+_0x28f821(0x410)](0x49*0x7d+-0x68f*-0x3+-0x1ba1*0x2))['padEn'+'d'](0xf17*0x1+-0x11ec+0x2dd),'\x20')+_0x118254['k'][_0x28f821(0x305)+'d'](-0x21*-0x11+0x6d1*-0x4+-0x5*-0x506)+'\x20',_0x3c97cf['uUfgp'](String,_0x575f6d)['padEn'+'d'](0x2672+0x9c3+-0x3025*0x1))+'\x20'+(_0x118254[_0x28f821(0x158)]||''));}_0x403270[_0x28f821(0x32b)]('');}else{var _0x496b4c=('4|2|1'+_0x28f821(0x2c0))[_0x28f821(0x137)]('|'),_0x111cf0=0x2072+0x13de+-0x3450;while(!![]){switch(_0x496b4c[_0x111cf0++]){case'0':_0x8b3c6f['textC'+_0x28f821(0x295)+'t']=_0x36b227['eXyVL'](_0x36b227[_0x28f821(0x35b)](_0x36b227['RvwaY'](_0x36b227[_0x28f821(0xc2)](_0x36b227[_0x28f821(0x90)]+('This\x20'+_0x28f821(0x26e)+_0x28f821(0x205)+'es\x20th'+_0x28f821(0x1f4)+_0x28f821(0xb4)+_0x28f821(0x331)+_0x28f821(0x1cc)+'alled'+'\x20and\x20'+_0x28f821(0x1e4)+'ng\x20on'+'\x20the\x20'+_0x28f821(0x98)+_0x28f821(0x36e))+(_0x28f821(0x3e1)+'e\x20rem'+_0x28f821(0xb1)+_0x28f821(0x97)+_0x28f821(0x1be)+_0x28f821(0x11d)+'\x0a\x0a'),_0x36b227[_0x28f821(0x184)]),_0x36b227['LSQvG']),_0x36b227[_0x28f821(0x244)])+_0x36b227[_0x28f821(0x30e)],_0x36b227[_0x28f821(0x26a)]);continue;case'1':_0x183c3d['textC'+'onten'+'t']='no\x20re'+_0x28f821(0x26f)+'after'+_0x28f821(0xce)+_0x28f821(0x3da)+_0x28f821(0x1b7)+'t\x20inj'+_0x28f821(0x1b2)+'?';continue;case'2':if(!_0x2ef901||!_0x33c5ba)return;continue;case'3':_0x4353ad['style'][_0x28f821(0x12f)]=_0x28f821(0x3d7)+'c7';continue;case'4':if(_0x4b6e3d)return;continue;}break;}}}if(_0x45b908['warni'+_0x28f821(0x1a0)]&&_0x45b908['warni'+_0x28f821(0x1a0)]['lengt'+'h']){_0x403270['push']('warni'+_0x28f821(0x1a0));for(var _0x46ce9a=-0x12b3+-0x3a1+0x1654;_0x46ce9a<_0x45b908['warni'+_0x28f821(0x1a0)][_0x28f821(0x171)+'h'];_0x46ce9a++)_0x403270[_0x28f821(0x32b)](_0x3c97cf[_0x28f821(0x235)]+_0x45b908[_0x28f821(0x29c)+_0x28f821(0x1a0)][_0x46ce9a]);}return _0x403270['join']('\x0a');}window[_0x5865e3(0x22a)+_0x5865e3(0x23d)+'stene'+'r'](_0x3c97cf['alsDJ'],function(_0xdce75f){var _0x15c041=_0x5865e3,_0x2ce58f={'dVlAJ':function(_0x42a195,_0x2de04c){var _0x2869c1=_0x2a2a;return _0x3c97cf[_0x2869c1(0x27e)](_0x42a195,_0x2de04c);}},_0x3e1e94=_0xdce75f['data'];if(!_0x3e1e94||_0x3e1e94[_0x15c041(0x1d0)+'ura']!==_0x20c83b)return;try{if(_0x3c97cf['CBXsX'](_0x3c97cf['LBtcl'],'xrMSG')){if(_0x5344ae['top']&&_0x2ce58f['dVlAJ'](_0x356886[_0x15c041(0x16a)],_0x35a516))_0x155637[_0x15c041(0x16a)]['postM'+_0x15c041(0x323)+'e'](_0x12741f,'*');}else{if(_0x3e1e94['kind']==='hello'){_0x262425()['set']({'host':_0x3e1e94[_0x15c041(0xb6)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x3c97cf['EbFui'](_0x3e1e94[_0x15c041(0x2e5)],_0x3c97cf[_0x15c041(0xdd)]))_0x3c97cf[_0x15c041(0x2ba)](_0x262425)[_0x15c041(0x1ff)](_0x3e1e94[_0x15c041(0x1e3)+'t']);}}catch(_0x51586f){console['warn'](_0x15c041(0x26b)+_0x15c041(0x128)+_0x15c041(0x12c)+'l\x20upd'+_0x15c041(0x177)+_0x15c041(0x34c),_0x3c97cf[_0x15c041(0x337)]('color'+':',_0x508c90),_0x51586f);}});if(document[_0x5865e3(0x372)])_0x3c97cf[_0x5865e3(0x24f)](_0x262425);else document[_0x5865e3(0x22a)+_0x5865e3(0x23d)+_0x5865e3(0x317)+'r'](_0x5865e3(0x19c)+'ntent'+_0x5865e3(0xa9)+'d',_0x262425,{'once':!![]});return;}window['__SAK'+_0x5865e3(0x1b5)+'W__']=window[_0x5865e3(0xf1)+'URA_S'+_0x5865e3(0x3c5)]||{'at':Date[_0x5865e3(0x312)]()};function _0x120249(_0x1ffbf6,_0xf8ff15){var _0x2843aa=_0x5865e3,_0x2cf4d2={'__sakura':_0x20c83b,'kind':_0x1ffbf6};if(_0xf8ff15){for(var _0x39dd22 in _0xf8ff15)_0x2cf4d2[_0x39dd22]=_0xf8ff15[_0x39dd22];}try{if(window[_0x2843aa(0x1a8)+'t']&&window[_0x2843aa(0x1a8)+'t']!==window)window['paren'+'t']['postM'+'essag'+'e'](_0x2cf4d2,'*');}catch(_0x594ab4){}try{if('MejTb'!==_0x3c97cf[_0x2843aa(0x3c6)])try{_0x122cfa['hook']['enabl'+'ed']=![];}catch(_0xbed875){}else{if(window[_0x2843aa(0x16a)]&&_0x3c97cf['HdaWj'](window[_0x2843aa(0x16a)],window))window['top'][_0x2843aa(0x354)+'essag'+'e'](_0x2cf4d2,'*');}}catch(_0x3c4e24){}}console[_0x5865e3(0x396)]('%c[sa'+_0x5865e3(0x128)+_0x5865e3(0xd2)+_0x5865e3(0x38c)+'\x20ACTI'+'VE',_0x3c97cf[_0x5865e3(0x361)]('color'+':'+_0x508c90,_0x5865e3(0x2ff)+_0x5865e3(0x23b)+_0x5865e3(0x215)+'0'),{'host':_0x3d29b4,'href':location[_0x5865e3(0x1d8)]}),_0x120249('hello',{'host':_0x3d29b4,'role':_0x12c50f});var _0x13811d=window[_0x5865e3(0xf1)+'URA_S'+'W__']&&window[_0x5865e3(0xf1)+_0x5865e3(0x1b5)+_0x5865e3(0x3c5)]['at']||Date['now']();try{var _0x42534f=new BroadcastChannel('sakur'+_0x5865e3(0x389));_0x42534f['onmes'+_0x5865e3(0x243)]=function(_0x5c2d87){var _0x1ebfc7=_0x5865e3,_0xa0521=_0x5c2d87[_0x1ebfc7(0x1b0)];if(_0xa0521&&_0xa0521[_0x1ebfc7(0x1d0)+'ura']===_0x20c83b&&_0x3c97cf[_0x1ebfc7(0x3bd)](_0xa0521['kind'],'cmd'))_0x3c97cf[_0x1ebfc7(0x3a1)](_0x2cc0ec,_0xa0521[_0x1ebfc7(0xde)],_0xa0521['arg']);};}catch(_0x3bb4b2){}var _0x170d7d=[];(function _0x5af7ca(){var _0x497e0b=_0x5865e3,_0x5d913f={'Omrcp':function(_0x238333,_0x1d70d2){return _0x238333<_0x1d70d2;},'cgXKn':_0x3c97cf['PiaHD'],'odUgD':_0x497e0b(0x3e9)+'g','OISnY':_0x497e0b(0x134)+'WebMo'+'dkit'},_0x19e2c0=[_0x497e0b(0x396),_0x497e0b(0x1d4),_0x497e0b(0x2d6),_0x3c97cf[_0x497e0b(0x138)],_0x3c97cf[_0x497e0b(0x189)]];for(var _0x149f46=-0x115*-0x1+-0x21e5+0x20d0;_0x149f46<_0x19e2c0[_0x497e0b(0x171)+'h'];_0x149f46++){if(_0x497e0b(0x3fe)===_0x3c97cf[_0x497e0b(0x3d5)])(function(_0x1701a8){var _0x31adb3=_0x497e0b,_0x3e2176=console[_0x1701a8];if(typeof _0x3e2176!==_0x31adb3(0x299)+_0x31adb3(0x2f3))return;console[_0x1701a8]=function(){var _0x1dae51=_0x31adb3,_0x5a5b7b={'bbPzF':function(_0x395042,_0x55e323){return _0x395042<_0x55e323;}};if(_0x1dae51(0x2b2)===_0x1dae51(0x95)){_0x3aa991()['set']({'host':_0x32e1b4['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}else{try{var _0x4b69eb='';for(var _0x650691=0x1870+0xcfa+-0x256a;_0x5d913f[_0x1dae51(0x34e)](_0x650691,arguments[_0x1dae51(0x171)+'h']);_0x650691++){if(_0x5d913f['cgXKn']==='kyuJp'){var _0x336c63=arguments[_0x650691];if(typeof _0x336c63===_0x5d913f['odUgD'])_0x4b69eb+=_0x336c63;else{if(_0x336c63&&_0x336c63[_0x1dae51(0x2ad)+'ge'])_0x4b69eb+=_0x336c63['messa'+'ge'];}}else{var _0xc2342=0x24fe+-0x9b7+0x1*-0x1b47;for(var _0x27c8b4=0x8*0x32b+0x1*-0x78e+0x16*-0xcf;_0x5a5b7b['bbPzF'](_0x27c8b4,_0x40f0ac[_0x1dae51(0x171)+'h']);_0x27c8b4++){if(_0x5bbcce[_0x27c8b4][_0x1dae51(0x209)]&&_0x455f26[_0x27c8b4][_0x1dae51(0x209)][_0x1dae51(0x126)+'ed'])_0xc2342++;}return _0xc2342;}}if(_0x4b69eb[_0x1dae51(0x92)+'Of'](_0x5d913f[_0x1dae51(0x2b1)])!==-(-0x1*-0x61+-0xf39+-0x4f3*-0x3)&&_0x170d7d[_0x1dae51(0x171)+'h']<-0x199f+0x171e+0x2bd)_0x170d7d['push'](_0x4b69eb['slice'](-0xebe+-0x86c+0x172a,0x15eb+-0xc5*-0x1+0xcc*-0x1b));}catch(_0x4b54d8){}return _0x3e2176[_0x1dae51(0x111)](console,arguments);}};}(_0x19e2c0[_0x149f46]));else{var _0x2636b3=_0x3dcf92[_0x497e0b(0x134)+_0x497e0b(0x30f)+'dkit']&&_0x3de428[_0x497e0b(0x134)+_0x497e0b(0x30f)+_0x497e0b(0x253)]['Runti'+'me'];if(_0x2636b3&&typeof _0x2636b3['resol'+'veGam'+'e']===_0x497e0b(0x299)+'ion'){var _0x488302=_0x2636b3[_0x497e0b(0x377)+'veGam'+'e']();if(_0x488302)return _0x263c8d[_0x497e0b(0x122)+'e']=_0x497e0b(0x9d)+'me.re'+_0x497e0b(0x22c)+'Game('+')',_0x488302;}}}}());var _0x3b5d7f={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x448d81=null,_0x2dd00e=null,_0x39b9af={},_0x2e6291=[],_0xf955d=[],_0x3d5ac5=[{'type':_0x5865e3(0x37e)+'ntrol'+_0x5865e3(0x371),'keep':!![]},{'type':'Healt'+_0x5865e3(0x382)+'pt','keep':!![]},{'type':_0x5865e3(0x395)+'nMana'+'ger','keep':![]},{'type':_0x3c97cf[_0x5865e3(0x281)],'keep':![]}],_0x5785b5=[_0x3c97cf['ezrOS'],_0x3c97cf[_0x5865e3(0x27b)],_0x3c97cf['Cesae'],_0x5865e3(0x412)+_0x5865e3(0x10c),_0x5865e3(0x3ff)+_0x5865e3(0xc1)+'racte'+_0x5865e3(0x1df)+'rolle'+_0x5865e3(0x303),'__Gen'+_0x5865e3(0x332)+'d'];(function _0x346d22(){var _0x5c71a8=_0x5865e3;try{if(_0x5c71a8(0x1a6)!=='jkjKH')_0x24074c=_0x3c97cf['NYznG'](_0x3c97cf['ESoht'](_0x3c97cf['bpogN'],_0xd41679[_0x5c71a8(0x1c3)](_0x265a5d[_0x5c71a8(0x2e8)+'nces'])[_0x5c71a8(0x171)+'h'])+_0x3c97cf[_0x5c71a8(0x2a3)]+_0x3fca19,'s'),_0x1bad10=_0x5c71a8(0x2f6)+'a8';else{var _0x58510c=window[_0x5c71a8(0x134)+'WebMo'+'dkit']&&window[_0x5c71a8(0x134)+_0x5c71a8(0x30f)+_0x5c71a8(0x253)]['Runti'+'me'];if(!_0x58510c||typeof _0x58510c[_0x5c71a8(0x374)+_0x5c71a8(0x224)+'in']!==_0x5c71a8(0x299)+_0x5c71a8(0x2f3)){_0x3b5d7f[_0x5c71a8(0x2d6)]=_0x5c71a8(0x9d)+'me.cr'+'eateP'+_0x5c71a8(0x1db)+_0x5c71a8(0x293)+'ailab'+'le';return;}_0x3b5d7f[_0x5c71a8(0x33e)+_0x5c71a8(0x370)]=!![],_0x2dd00e=_0x58510c['creat'+_0x5c71a8(0x224)+'in']({'name':_0x5c71a8(0x3b9)+_0x5c71a8(0x2bd)+_0x5c71a8(0x340)+'z','version':_0x3c97cf['OFNqc'],'referencedAssemblies':_0x5785b5[_0x5c71a8(0x1a1)]()}),_0x3b5d7f['ok']=!![],_0x105724(),_0x3b5d7f['hooks'+'Regis'+_0x5c71a8(0x183)]=_0x2e6291[_0x5c71a8(0x171)+'h'];}}catch(_0x5c03b3){_0x3b5d7f['error']=_0x3c97cf[_0x5c71a8(0x3a3)](String,_0x5c03b3&&_0x5c03b3[_0x5c71a8(0x2ad)+'ge']||_0x5c03b3);}}());var _0x4b42ad=new Float32Array(0x261+0x3d*0x6c+0x2*-0xe0e),_0xe3c913=new Int32Array(_0x4b42ad[_0x5865e3(0x359)+'r']);function _0x5892ca(_0x3ca849){return _0x4b42ad[0xe0+-0x207f+0x1f9f]=_0x3ca849,_0xe3c913[-0x2*-0xfe9+-0x233d+0x1*0x36b];}function _0x121df0(_0x507a3a){var _0x14cc21=_0x5865e3;return _0xe3c913[0x23f*-0x9+0x56*0x41+0x53*-0x5]=_0x3c97cf[_0x14cc21(0x363)](_0x507a3a,0x749+-0xbdb+0x3*0x186),_0x4b42ad[-0x1eea+0x1215*-0x2+0x6c*0x9f];}var _0x19ebb4={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x38cd7f(){var _0x4914b0=_0x5865e3,_0xf4404b={'jDsBr':_0x4914b0(0x174),'yLCfr':_0x3c97cf[_0x4914b0(0xaf)]};try{if(_0x3c97cf['rMavg'](_0x3c97cf['IOBkO'],_0x4914b0(0x268))){var _0xaf34e2=_0x281a4a[_0x4914b0(0x374)+_0x4914b0(0x185)+_0x4914b0(0x3f4)](_0xf4404b[_0x4914b0(0x132)]);_0xaf34e2['id']=_0x4914b0(0x3b9)+_0x4914b0(0x291)+'v2-cs'+'s',_0xaf34e2[_0x4914b0(0x277)+'onten'+'t']=_0x4914b0(0x3eb)+_0x4914b0(0x2ed)+_0x4914b0(0x31e)+_0x4914b0(0x2e7)+_0x4914b0(0x407)+'}',(_0x16a0be[_0x4914b0(0x2c5)]||_0x3ba568['docum'+_0x4914b0(0x19d)+_0x4914b0(0x284)])['appen'+'dChil'+'d'](_0xaf34e2);}else{var _0x178685=window[_0x4914b0(0x134)+'WebMo'+_0x4914b0(0x253)]&&window[_0x4914b0(0x134)+_0x4914b0(0x30f)+'dkit']['Runti'+'me'];if(_0x178685&&_0x3c97cf['EbFui'](typeof _0x178685[_0x4914b0(0x377)+'veGam'+'e'],'funct'+_0x4914b0(0x2f3))){if(_0x3c97cf['EbFui'](_0x4914b0(0x1ce),_0x3c97cf['uOZzG'])){var _0x1a98f8=_0x178685['resol'+_0x4914b0(0x94)+'e']();if(_0x1a98f8){if(_0x3c97cf['hIcjB']===_0x4914b0(0x249))_0x5570d1['textC'+_0x4914b0(0x295)+'t']=_0x2458fe['strin'+_0x4914b0(0x2e1)](_0x3d3119,null,-0x2*0x699+-0x1c8d*0x1+0x29c0);else return _0x19ebb4[_0x4914b0(0x122)+'e']=_0x4914b0(0x9d)+_0x4914b0(0x3a9)+'solve'+'Game('+')',_0x1a98f8;}}else try{_0x324c61[_0x4914b0(0x277)+'onten'+'t']=_0x30cef5(_0x29421f);}catch(_0x409115){_0x41d4e6['textC'+_0x4914b0(0x295)+'t']=_0x3c3ae5[_0x4914b0(0x3e9)+'gify'](_0xb53621,null,0xe95+-0xd3c+-0xac*0x2);}}}}catch(_0x3e5a47){}try{var _0x476933=window[_0x4914b0(0x13d)+'Insta'+_0x4914b0(0x1fd)]||window[_0x4914b0(0x13d)+_0x4914b0(0x226)]||window[_0x4914b0(0xdb)];if(_0x476933)return _0x19ebb4[_0x4914b0(0x122)+'e']='windo'+_0x4914b0(0x124)+_0x4914b0(0x231),_0x476933;}catch(_0x4247d0){}try{if(_0x3c97cf['EbFui'](_0x4914b0(0x115),_0x3c97cf[_0x4914b0(0x28c)])){if(typeof game!==_0x3c97cf[_0x4914b0(0x1e7)]&&game){if(_0x3c97cf[_0x4914b0(0x254)](_0x4914b0(0xa2),_0x3c97cf[_0x4914b0(0x3ee)]))return _0x19ebb4[_0x4914b0(0x122)+'e']=_0x4914b0(0x2fa)+_0x4914b0(0x11b)+_0x4914b0(0x172)+'ng',game;else{var _0x59cfc8=('6|8|1'+_0x4914b0(0x12a)+'2|7|4'+'|9|5')[_0x4914b0(0x137)]('|'),_0x15f0f1=-0xfab*0x1+-0x7f*0x13+0x1918;while(!![]){switch(_0x59cfc8[_0x15f0f1++]){case'0':if(!_0x5ec62c)return![];continue;case'1':var _0x5ec62c=_0x3c97cf['KmPcu'](_0x346b60,_0x416947,_0x847455,_0x1a521c);continue;case'2':var _0x32ad7e;continue;case'3':var _0xc2b24=_0x5ec62c['key'];continue;case'4':var _0x48c898=_0x3c97cf[_0x4914b0(0x3bd)](_0x109aa1,_0x3c97cf[_0x4914b0(0x32c)])?_0x3c97cf[_0x4914b0(0x2d7)]:_0x15778a===_0x4914b0(0xf3)?_0x3c97cf['cArRw']:'u8';continue;case'5':return _0x519482(_0x3c97cf[_0x4914b0(0x17b)](_0x1a2f6f,_0x271b44)+_0x15bf01['hidde'+'n'],_0x3c97cf['cArRw'],_0x32ad7e|0x9b7*-0x3+0x217b+-0x456)&&_0x3c97cf[_0x4914b0(0xe4)](_0x547890,_0x10ac9c+_0x4cc3b2+_0x15bf01['fake'],_0x48c898,_0x2fcd26)&&_0x3c97cf[_0x4914b0(0xe4)](_0x37c0c6,_0x31134c+_0xa698c4+_0x15bf01[_0x4914b0(0x2d0)+'e'],'u8',-0x10e8+-0x1d3a+0x2e22);case'6':var _0x15bf01=_0x3bfe08[_0x4e5a85];continue;case'7':if(_0x3c97cf[_0x4914b0(0x39a)](_0x312b19,_0x3c97cf['npuxX']))_0x32ad7e=_0xb344f6(_0x10a06f)^_0xc2b24;else{if(_0x3c97cf['tTxSa'](_0x32ca51,_0x3c97cf[_0x4914b0(0x167)]))_0x32ad7e=_0x3c97cf['tIVdc'](_0x3939c1|-0x8*0x1f9+0x2*0x369+0x2*0x47b,_0xc2b24);else _0x32ad7e=_0x3c97cf[_0x4914b0(0x2f7)](_0x34aad3?-0x6f*0x9+0x198e+0x11*-0x146:0x19b7+-0x5d6+-0x2d7*0x7,-0xabd*-0x1+0x174f*0x1+-0x210d)^_0xc2b24;}continue;case'8':if(!_0x15bf01)return![];continue;case'9':var _0x2fcd26=_0x243b88===_0x3c97cf['npuxX']?_0x5a0b72:_0x489698===_0x3c97cf['bwTqC']?_0x3c97cf[_0x4914b0(0x363)](_0xb4edda,0x1*0xa5e+-0xa93*-0x1+0x6fb*-0x3):_0x4e69a8?-0x119e+-0xc94+-0xa11*-0x3:-0x5ea*0x6+0x1be3+-0x1*-0x799;continue;}break;}}}}else return{'version':_0xf4404b[_0x4914b0(0x364)],'when':new _0x4dade3()[_0x4914b0(0x380)+_0x4914b0(0xe2)+'g'](),'elapsedMs':_0x28698e[_0x4914b0(0x312)]()-_0x1898d7,'host':_0x1edb89,'uwmk':!!(_0x2db462[_0x4914b0(0x134)+_0x4914b0(0x30f)+_0x4914b0(0x253)]&&_0x44bdcb['Unity'+_0x4914b0(0x30f)+'dkit']['Runti'+'me']),'il2CppContext':![],'arm':_0x36b471,'hooksTotal':_0x488f80[_0x4914b0(0x171)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x177cae(_0x183dea&&_0x49f3aa[_0x4914b0(0x2ad)+'ge']||_0x54b0e0)};}catch(_0x23f62f){}return _0x19ebb4['sourc'+'e']=null,null;}function _0x10e7b2(){var _0x4e1e8f=_0x5865e3;try{if(_0x3c97cf['zQTeK'](_0x3c97cf[_0x4e1e8f(0x3ce)],'uRXFf')){var _0x4cab64=_0x3c97cf[_0x4e1e8f(0x283)](_0x5337fb);if(_0x4cab64&&_0x4cab64['Modul'+'e']&&_0x4cab64[_0x4e1e8f(0x286)+'e'][_0x4e1e8f(0x250)+'8']&&_0x4cab64[_0x4e1e8f(0x286)+'e'][_0x4e1e8f(0x250)+'8']['buffe'+'r'])return _0x4cab64[_0x4e1e8f(0x286)+'e'][_0x4e1e8f(0x250)+'8'];}else{var _0x1bc883=_0x3c97cf[_0x4e1e8f(0x329)](_0x38cd7f);if(_0x1bc883&&_0x1bc883['Modul'+'e']&&_0x1bc883['Modul'+'e']['HEAPU'+'8']&&_0x1bc883[_0x4e1e8f(0x286)+'e']['HEAPU'+'8'][_0x4e1e8f(0x359)+'r'])return _0x1bc883[_0x4e1e8f(0x286)+'e'][_0x4e1e8f(0x250)+'8'];}}catch(_0x57a854){}return null;}function _0x2a473e(){var _0x16a75d=_0x5865e3,_0x354b18={'kTCKH':function(_0x41bf22,_0x2e4518){return _0x41bf22+_0x2e4518;},'AnyiT':_0x16a75d(0x187)+'red\x20','thhdd':_0x16a75d(0x2a2)+_0x16a75d(0x394)+'iled,'+_0x16a75d(0x212)+'very\x20'+'offse'+_0x16a75d(0x276)+'\x20skip'+'ped\x20b'+_0x16a75d(0x1c2)+'e.'};if(_0x16a75d(0x18c)===_0x16a75d(0x18c)){var _0x5bc492=_0x3c97cf[_0x16a75d(0x283)](_0x10e7b2);if(!_0x5bc492)return null;try{return new DataView(_0x5bc492['buffe'+'r'],_0x5bc492[_0x16a75d(0x368)+_0x16a75d(0x17e)],_0x5bc492['byteL'+_0x16a75d(0x324)]);}catch(_0x2a7789){return null;}}else _0x4c9c62[_0x16a75d(0x29c)+_0x16a75d(0x1a0)][_0x16a75d(0x32b)](_0x354b18[_0x16a75d(0x260)](_0x354b18['kTCKH'](_0x354b18[_0x16a75d(0x31a)],_0x148144['keys'](_0x313219['insta'+_0x16a75d(0xd3)])[_0x16a75d(0x171)+'h'])+(_0x16a75d(0x21a)+'ct(s)'+_0x16a75d(0x1ae)+'read\x20'+'0\x20fie'+_0x16a75d(0xf9)),_0x4764ad['lastE'+_0x16a75d(0xd8)]?_0x16a75d(0x290)+_0x16a75d(0x338)+_0x3e3c9c['lastE'+'rror']:_0x354b18[_0x16a75d(0x2a9)]));}function _0x40c8ff(_0x25eb56,_0x11290b){var _0x54a843=_0x5865e3,_0x1b6697=_0x3c97cf[_0x54a843(0x3b2)](_0x2a473e);if(!_0x1b6697)return _0x3c97cf[_0x54a843(0x3bd)](_0x3c97cf[_0x54a843(0x21f)],'repfu')?(_0x19ebb4['faile'+'d']++,_0x19ebb4[_0x54a843(0xc8)+'rror']=_0x19ebb4['lastE'+_0x54a843(0xd8)]||'no\x20HE'+_0x54a843(0x2b0)+'-\x20Uni'+_0x54a843(0x181)+_0x54a843(0x358)+'e\x20not'+_0x54a843(0x2f0)+_0x54a843(0x33a)+_0x54a843(0x20a)+_0x54a843(0x9d)+'me.re'+_0x54a843(0x22c)+_0x54a843(0x133)+_0x54a843(0x3f5)+'any\x20w'+'indow'+_0x54a843(0x2f1)+'al',undefined):(_0x252be9[_0x54a843(0x122)+'e']=_0x3c97cf['eHkXn'],_0x345ed1);if(_0x25eb56<-0x29*-0x41+-0xe07*-0x1+-0x110*0x17||_0x3c97cf[_0x54a843(0x24d)](_0x25eb56+(-0x4*-0x54d+-0xd48+0x58*-0x17),_0x1b6697[_0x54a843(0x17a)+_0x54a843(0x324)]))return _0x19ebb4[_0x54a843(0x352)+'d']++,_0x19ebb4['lastE'+_0x54a843(0xd8)]=_0x19ebb4[_0x54a843(0xc8)+_0x54a843(0xd8)]||_0x3c97cf[_0x54a843(0x21c)](_0x54a843(0x39b)+'ss\x200x',_0x25eb56['toStr'+'ing'](-0x286*-0x1+0x447*-0x3+-0x3b*-0x2d))+(_0x54a843(0x245)+_0x54a843(0x24c)+_0x54a843(0x29e)+'0x')+_0x1b6697[_0x54a843(0x17a)+_0x54a843(0x324)]['toStr'+_0x54a843(0x410)](-0x14*-0x4f+0x281+-0x89d),undefined;try{_0x19ebb4['ok']++;switch(_0x11290b){case'u8':return _0x1b6697['getUi'+_0x54a843(0xa3)](_0x25eb56);case'i8':return _0x1b6697[_0x54a843(0x11c)+'t8'](_0x25eb56);case _0x54a843(0x1d1):return _0x1b6697[_0x54a843(0x11c)+_0x54a843(0x14a)](_0x25eb56,!![]);case'u16':return _0x1b6697[_0x54a843(0x16f)+_0x54a843(0xbb)](_0x25eb56,!![]);case'i32':return _0x1b6697[_0x54a843(0x11c)+_0x54a843(0x3df)](_0x25eb56,!![]);case _0x54a843(0x3e3):return _0x1b6697[_0x54a843(0x16f)+_0x54a843(0x3ae)](_0x25eb56,!![]);case _0x54a843(0x3c2):return _0x1b6697[_0x54a843(0x38b)+'oat32'](_0x25eb56,!![]);case _0x3c97cf['PCFbR']:return _0x1b6697[_0x54a843(0x38b)+'oat64'](_0x25eb56,!![]);default:return _0x1b6697['getIn'+'t32'](_0x25eb56,!![]);}}catch(_0x555b6b){return _0x19ebb4[_0x54a843(0x352)+'d']++,_0x19ebb4['lastE'+_0x54a843(0xd8)]=_0x19ebb4[_0x54a843(0xc8)+'rror']||String(_0x555b6b&&_0x555b6b['messa'+'ge']||_0x555b6b)[_0x54a843(0x1a1)](0x1631+0x18e0+0x2f11*-0x1,-0x20*-0x81+0x1474+-0x2*0x120e),undefined;}}function _0x270711(_0x446c55,_0x4044af,_0x14711e){var _0x5d536a=_0x5865e3;if(_0x3c97cf[_0x5d536a(0x11f)]!==_0x5d536a(0x252)){var _0x428234=_0x3c97cf['nVSrJ'](_0x2a473e);if(!_0x428234||_0x3c97cf[_0x5d536a(0x32e)](_0x446c55,0x21fc+0xf*-0xe1+0x47*-0x4b)||_0x3c97cf[_0x5d536a(0x24d)](_0x3c97cf['dMmdd'](_0x446c55,-0x21b9+-0x5b9*-0x2+0x164b),_0x428234[_0x5d536a(0x17a)+_0x5d536a(0x324)]))return![];try{switch(_0x4044af){case'u8':case'i8':_0x428234[_0x5d536a(0xcf)+_0x5d536a(0xa3)](_0x446c55,_0x3c97cf[_0x5d536a(0x2f7)](_0x14711e,0x1*-0x150f+0x507+0x1107));break;case _0x3c97cf['rWsbS']:case _0x3c97cf['DuJat']:_0x428234['setIn'+'t16'](_0x446c55,_0x14711e|0x1*0x884+-0x21b7+0x1*0x1933,!![]);break;case _0x3c97cf[_0x5d536a(0x345)]:case _0x3c97cf['gTVdw']:_0x428234['setIn'+'t32'](_0x446c55,_0x3c97cf['rqSuS'](_0x14711e,0x1*0x1e6+-0xbc*0x24+0x188a),!![]);break;case _0x5d536a(0x3c2):_0x428234[_0x5d536a(0x140)+'oat32'](_0x446c55,_0x14711e,!![]);break;default:_0x428234[_0x5d536a(0x316)+'t32'](_0x446c55,_0x14711e|-0x91*-0x29+-0x2ba+0x9f*-0x21,!![]);}return!![];}catch(_0x3c9a18){return![];}}else _0x18bf5f['execC'+'omman'+'d'](_0x5d536a(0x287)),_0x4489c8();}var _0x22cfb3={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa}};function _0x1cb5a5(_0x53097c,_0x41fd06,_0x484173){var _0x518ae1=_0x5865e3;if(_0x3c97cf[_0x518ae1(0x3bd)](_0x3c97cf[_0x518ae1(0x3f1)],_0x518ae1(0x3d2))){var _0x581556=_0x22cfb3[_0x484173];if(!_0x581556)return null;var _0x514383=_0x40c8ff(_0x3c97cf[_0x518ae1(0x343)](_0x53097c,_0x41fd06)+_0x581556[_0x518ae1(0x1e8)],'u8'),_0x283770=_0x3c97cf['sATvg'](_0x40c8ff,_0x53097c+_0x41fd06+_0x581556[_0x518ae1(0x3b4)+'n'],_0x3c97cf['cArRw']),_0x3462dc=_0x3c97cf['fWtuz'](_0x40c8ff,_0x3c97cf[_0x518ae1(0xf5)](_0x53097c+_0x41fd06,_0x581556[_0x518ae1(0x40d)+'d']),'u8'),_0x743ce2=_0x40c8ff(_0x53097c+_0x41fd06+_0x581556[_0x518ae1(0x8f)],_0x484173===_0x3c97cf[_0x518ae1(0x32c)]?'f32':_0x3c97cf['ktOuT'](_0x484173,'obfI')?_0x3c97cf['cArRw']:'u8'),_0x3d3494=_0x40c8ff(_0x53097c+_0x41fd06+_0x581556[_0x518ae1(0x2d0)+'e'],'u8');if(_0x514383===undefined||_0x283770===undefined||_0x3c97cf[_0x518ae1(0x3e6)](_0x743ce2,undefined)||_0x3d3494===undefined)return null;_0x514383&=-0x1*0x2171+0xa0a+0x1866,_0x283770|=-0x2*0xd03+-0x33f*0xb+0x3dbb*0x1,_0x3462dc=_0x3c97cf[_0x518ae1(0x265)](_0x3462dc,-0xe37+0x4da+0x95d)&0x1*0x1dfe+0x13*0x1ad+-0x3dd4,_0x3d3494&=-0x1*-0x64+-0xbf*0x28+-0x1*-0x1d75;var _0x176fff;if(_0x484173==='obfF')_0x176fff=_0x121df0(_0x3c97cf['RJpGN'](_0x283770,_0x514383));else{if(_0x3c97cf['UBZgb'](_0x484173,'obfI'))_0x176fff=_0x3c97cf[_0x518ae1(0x3cd)](_0x3c97cf[_0x518ae1(0x2bb)](_0x283770,_0x514383),-0x131*-0x7+0x22c8+-0x2b1f);else _0x176fff=_0x3c97cf[_0x518ae1(0xf0)](_0x283770^_0x514383,0xdd0+0x26ad+-0x337e)!==-0x5b0+-0x3bd*0x7+0x1fdb?-0x91b+0x1*0x2390+0x1a74*-0x1:-0x15cb*-0x1+0x1db9+0x44b*-0xc;}return{'real':_0x176fff,'fake':_0x743ce2,'act':_0x3d3494,'init':_0x3462dc,'key':_0x514383,'hidden':_0x283770};}else _0x369a26[_0x518ae1(0x29c)+_0x518ae1(0x1a0)][_0x518ae1(0x32b)](_0x3c97cf['ZzrAx']+_0x3460db['insta'+_0x518ae1(0x333)+_0x518ae1(0xd1)+'ed'][_0x518ae1(0x2da)](',\x20'));}function _0x8fe80a(_0x17a7c7,_0x21eecf,_0x35729c,_0x48f1e1){var _0x4fdbb5=_0x5865e3,_0xb84616=_0x22cfb3[_0x35729c];if(!_0xb84616)return![];var _0x103f22=_0x3c97cf[_0x4fdbb5(0xe4)](_0x1cb5a5,_0x17a7c7,_0x21eecf,_0x35729c);if(!_0x103f22)return![];var _0x241cf7=_0x103f22['key'],_0x312039;if(_0x3c97cf[_0x4fdbb5(0x93)](_0x35729c,_0x4fdbb5(0x1da)))_0x312039=_0x3c97cf[_0x4fdbb5(0x367)](_0x5892ca,_0x48f1e1)^_0x241cf7;else{if(_0x3c97cf[_0x4fdbb5(0x93)](_0x35729c,_0x4fdbb5(0xf3)))_0x312039=_0x3c97cf[_0x4fdbb5(0x2f2)](_0x48f1e1|0x16*0x13+0x235d+-0x24ff,_0x241cf7);else _0x312039=(_0x48f1e1?0x771*-0x1+0xe60+-0x6ee:-0x493*-0x5+-0x23f9+-0xd1a*-0x1)&0x8a0+0x105*-0xb+0x396^_0x241cf7;}var _0x58dbc5=_0x35729c==='obfF'?_0x4fdbb5(0x3c2):_0x35729c===_0x3c97cf['bwTqC']?_0x3c97cf[_0x4fdbb5(0x345)]:'u8',_0x5c65cd=_0x35729c==='obfF'?_0x48f1e1:_0x35729c===_0x3c97cf['bwTqC']?_0x48f1e1|-0x1b06+-0x299*0x5+0x1*0x2803:_0x48f1e1?-0x241b+-0x9a9*-0x1+-0x1*-0x1a73:-0x528+-0x2*0x1381+0x2c2a;return _0x3c97cf[_0x4fdbb5(0x1b3)](_0x270711,_0x3c97cf[_0x4fdbb5(0x294)](_0x17a7c7,_0x21eecf)+_0xb84616['hidde'+'n'],_0x3c97cf['cArRw'],_0x312039|0xfb1+0x1c00+-0x2bb1)&&_0x3c97cf['VqKrO'](_0x270711,_0x17a7c7+_0x21eecf+_0xb84616['fake'],_0x58dbc5,_0x5c65cd)&&_0x270711(_0x17a7c7+_0x21eecf+_0xb84616[_0x4fdbb5(0x2d0)+'e'],'u8',0x5*0x137+0x1a04+-0x109*0x1f);}var _0x4e2889={'FPScontroller':[[-0x7*-0x5f+-0x1ee*0xe+0x187b,_0x5865e3(0x1da)],[-0x14b2+-0x6*0x4f+0x16b4,'obfF'],[-0x2df*-0x5+-0x67e+-0x79d,_0x5865e3(0x1da)],[0xb76+-0x211a+0xe*0x192,_0x3c97cf['npuxX']],[-0xa*0x363+0x193+0x20bb,_0x3c97cf[_0x5865e3(0x32c)]],[0x543+-0x920*0x4+-0x1fc5*-0x1,_0x5865e3(0x1da)],[-0x1*0x1f91+0x286*-0x2+0x253d,_0x5865e3(0x1da)],[0x1*-0x2669+-0x16fb+0x3e1c,_0x5865e3(0x225)],[0x1bdc*-0x1+0xca*0x2b+0x54e*-0x1,_0x5865e3(0x1da)],[0x1735+-0xa00+-0xc59,_0x5865e3(0xdc)],[-0x23e9*-0x1+-0x664+-0x1c99,'u8'],[-0x1*-0x236a+-0x114f+-0x36f*0x5,'obfF'],[-0x1b*-0xbf+0x21*-0x25+-0xe58,'i32'],[0x149f+0x5e*0x67+-0x3965,'u8'],[0x4b1*-0x3+-0x136*0x1+0x1059,_0x5865e3(0xdc)],[0xf1d+-0x2315*0x1+0x1c1*0xc,'u8'],[0x903+-0x1*-0x1147+-0x1935,'u8'],[0x10f4+0x114c+-0x7*0x4bc,_0x5865e3(0x1da)],[-0x3*0x68e+-0x37a+0x1858,'obfF'],[-0xd39+-0x5*-0x1e4+-0x1*-0x511,_0x5865e3(0x3c2)],[0x2406+-0x1c87*0x1+0x1*-0x62f,_0x3c97cf['XqWoM']],[-0xdd3+0x482+-0x1*-0xabd,'f32'],[0x22dd+-0x18ab+0x3b*-0x26,_0x3c97cf[_0x5865e3(0x2d7)]],[0x1651+0x15*0x7d+-0x1f0a,'u8'],[0xaf6+-0x82*-0x1c+-0x1*0x17a2,_0x5865e3(0x3c2)],[0xa7a+0x2*0xa49+-0x1d68,'u8'],[0x2689*-0x1+0xdb1+0x4*0x6a3,_0x5865e3(0x3c2)],[0x132b+-0x1*0x18fb+0x788,'f32'],[0x187*0x4+0x2690*0x1+0x2*-0x1578,'u8'],[0x1624+-0x2523+0x10bc,'u8'],[-0x7f5+-0x36b+0x1a4*0x8,'obfF'],[-0x5a1+-0x4*-0xca+-0x5*-0xdd,'f32'],[0x4*-0x7bf+0x2027+-0x3*-0x3b,'u8'],[0x10*0xe0+-0x1a14*0x1+0x4c*0x2f,'obfF'],[-0x3*0x29d+-0x2039+0x8*0x543,'obfB'],[0x1*-0x1cff+-0x1593+0x34aa,_0x3c97cf['XqWoM']],[0x117c+0x73b+-0x169b,'f32'],[0x687+0x79*0x43+-0x23e6,_0x3c97cf['XqWoM']],[-0xc15*0x3+-0x108a+-0x41*-0xd9,_0x5865e3(0x3c2)],[-0xd2f+0x2*0x3ee+0x7a7,'f32'],[0x1*-0x2291+0x74b+0x2*0xecf,_0x5865e3(0x3c2)],[0x16a6+0x1e28+0x496*-0xb,'u8'],[-0xe75+0x172+0x4*0x3d8,'u8'],[0xff3+-0x155d+0x7c8,'u8'],[0x23e1+-0x1c29+0x4c*-0x12,_0x3c97cf['XqWoM']],[-0x217+0x26c2+-0x2247,'u8'],[-0x1*-0x989+-0x1e90+0xbb6*0x2,'u8'],[-0x1f91+0x26d3+0x4da*-0x1,_0x5865e3(0x3c2)],[-0xaf1*-0x1+0x3b0*0x6+0x621*-0x5,_0x3c97cf[_0x5865e3(0x2d7)]],[0x1ece+0x3*0x27+0x1*-0x1cd3,'f32'],[0x26ff+-0x1*-0x1fdd+-0x58*0xc7,_0x3c97cf[_0x5865e3(0x2d7)]],[-0xbdb+-0x225b+0x192*0x1f,_0x5865e3(0x3c2)],[0x87d+0x1*-0x1c5f+0x165e,_0x5865e3(0x3c2)],[-0x1941+-0x1169+-0x6*-0x787,_0x5865e3(0x3c2)],[0x1791+-0x1*-0x8d1+-0x1dce,'u8'],[-0x61b*0x2+-0x1942+0x281c,_0x3c97cf['XqWoM']],[0xdce+-0x86a+-0x2ac,_0x5865e3(0x3c2)],[0x81b+-0x1e9c+0x193d,_0x5865e3(0x3c2)],[-0x1*-0x1a8d+0x1e3*-0xf+-0x1*-0x480,_0x3c97cf[_0x5865e3(0x2d7)]],[-0x6f3+0x25a7+-0x2*0xdf8,'u8'],[0x1fb4*-0x1+-0x5*-0x7ae+-0x14f*0x3,'u8'],[0x3c6+0xab*-0x3+0x103,_0x3c97cf['XqWoM']],[-0x59b+-0x1858+-0x20cf*-0x1,_0x3c97cf[_0x5865e3(0x2d7)]],[-0x190*-0x18+-0x1cd5+-0x5af,_0x5865e3(0x3c2)],[0xe2f+0x158a+-0x20b9,_0x5865e3(0x3c2)],[0x1d4a+-0x1*-0xaf9+-0x253f,_0x5865e3(0x3c2)],[-0x1*0x1e8b+0x1*-0x392+-0x25*-0x101,'f32'],[-0x2123+0x1fc2*-0x1+0x43fd,'u8'],[-0x2*0x889+0x3*0x3f5+0x85b,_0x5865e3(0xdc)],[0x1*-0xa17+-0x2*-0x2d4+0x79b,_0x3c97cf[_0x5865e3(0x2d7)]],[0xc14+-0x12*-0x125+-0x1d7e,'f32'],[0x2*-0x5d7+0x1faa+-0x3*0x598,'f32'],[-0x10d9+0x1702+-0x2ed,_0x3c97cf['XqWoM']],[-0x167f*0x1+-0x2342+0x3d01,'u8'],[0x680+-0x1a4d+0x1a*0xe3,'u8'],[0xd4*-0x1+0x10f9+0xb*-0x12b,'u8'],[-0x17*-0x2f+0x1*0x1d3d+-0x1e29,'u8'],[-0x2f*0xd+-0x264b+0x2bfc,'u8'],[-0xb2*-0x2b+-0x1687+0x40f*-0x1,'f32'],[-0x11ce+-0x1b8e*-0x1+0xc*-0x89,_0x3c97cf['XqWoM']],[0x135a*0x1+0x14ae+-0x8*0x496,_0x3c97cf[_0x5865e3(0x2d7)]],[0x4e1+-0x2e1*0x1+0xc*0x1d,_0x3c97cf[_0x5865e3(0x2d7)]],[-0xc1f*-0x3+-0xc0d+-0x14f0,'f32'],[0x109c*-0x1+-0x122c+0x262c,'u8'],[0x1*0x1dba+-0x1f43+0x73*0xb,_0x3c97cf[_0x5865e3(0x2d7)]],[-0x255a+-0x3*0x5b4+0x1de*0x1f,'f32'],[-0x1*0x2d8+-0x180e+0x1e56,'u8'],[-0x2*-0x65b+-0x2426+0x1*0x1b0c,_0x5865e3(0x3c2)],[-0xb5c+-0xf*-0x20b+-0xfa9,_0x3c97cf[_0x5865e3(0x2d7)]],[-0x1393+0x259b+-0xe64,_0x3c97cf['XqWoM']],[0xd72+0x95*0x29+-0x219b,_0x5865e3(0xdc)],[-0xa52+0x345*0x7+0x2f3*-0x3,'u8'],[-0x25c7+0x443+0x2540,_0x3c97cf[_0x5865e3(0x345)]],[-0x6d7+0x40*-0x4+0xb97,_0x3c97cf[_0x5865e3(0x2d7)]],[-0x8c8*-0x4+0x12a*-0xb+-0x128e,_0x3c97cf[_0x5865e3(0x2d7)]],[-0x1*-0x1d7d+0x1c0*0x14+-0x1*0x3cb5,_0x5865e3(0x3c2)],[-0x18c9+0x26a+-0x261*-0xb,_0x3c97cf[_0x5865e3(0x2d7)]],[-0x155b*0x1+0x13fa*0x1+0x53d,_0x3c97cf[_0x5865e3(0x345)]],[-0x1*0x229d+-0x13e*-0x4+0x2185,'u8'],[0x1*0xc7c+0x335*-0xb+0x1aac,'u8'],[-0x1c9d*0x1+-0xc69+0x2ce8,'u8'],[0xbf0+-0x7*0x1f6+-0x2*-0x2d7,_0x3c97cf['XqWoM']],[-0x2bd*-0xa+-0x1bdf+0x1*0x465,'i32']],'HealthScript':[[0x4ad+-0x246c+-0x66b*-0x5,'u8'],[0x1531+-0xb33+-0x9a2,'i32'],[0x406+0x24c9+-0x284f,_0x3c97cf[_0x5865e3(0x2d7)]],[0xccc+0x723*-0x3+0x921,'f32'],[0x188f+0x267b*0x1+-0xa6b*0x6,_0x3c97cf['XqWoM']],[-0xc1*0x29+0x1a*-0x125+0x3d37,_0x3c97cf['XqWoM']],[0x244c+-0x9*0x9e+-0x2*0xf17,_0x5865e3(0x3c2)],[0x10*-0x1dc+-0x1c6a+-0x1*-0x3abe,_0x3c97cf['XqWoM']],[-0x1743*-0x1+-0x1*-0x748+-0x9f9*0x3,_0x3c97cf[_0x5865e3(0x345)]],[0x33*0x35+-0x1*0x1b4c+0x3*0x5cb,_0x5865e3(0xdc)],[0x164b+0x1801*0x1+-0x2da4,'u8'],[-0x208a+-0x1a*0x172+-0x1*-0x46c7,'u8'],[0x1a43+-0x1*-0x619+-0x1fb2,'u8'],[0xf10+-0x13fd+0x598,'u8'],[0x239c+-0x1249+-0x1093,'obfI'],[0x11*-0x1ab+-0x1f*0x7c+0x2c33,_0x3c97cf[_0x5865e3(0x167)]],[-0xe*0x281+-0xd77+0x316d,'obfI'],[0x10b4*0x1+0xa*-0x33c+0x10a0,_0x5865e3(0xf3)],[-0x70a+-0x38b*0x1+-0xb*-0x10f,_0x3c97cf[_0x5865e3(0x167)]],[-0x207e+-0x8a*0xb+0x698*0x6,_0x5865e3(0x225)],[0xd82+-0xbba+-0x26*0x4,_0x3c97cf['npuxX']],[0x4*-0x19c+-0xdd3+0x44f*0x5,'f32'],[-0xfa4+0x1*0x15cb+-0x4db*0x1,_0x3c97cf[_0x5865e3(0x2d7)]],[0x1f6a+0x189+-0x1fa3,_0x5865e3(0x3c2)],[-0x21cd+0xeae+0x1473,_0x5865e3(0x3c2)],[-0x19a6+0x23a+0x18c8,_0x5865e3(0x3c2)],[0x26eb+0x176b+-0x3ce6,_0x5865e3(0x3c2)],[0x262d*-0x1+-0x74*0x1c+0x3455*0x1,'f32'],[-0xbcc+-0x1d39+0x2a85,'u8'],[-0x950+-0x67*-0x14+-0x12*-0x28,'u8'],[-0x3*0xbfb+0x14a4+0x10dd,'i32']],'PlayerConfig':[],'WeaponManager':[[-0x9*-0x115+-0x204a+-0x1f*-0xbb,_0x5865e3(0xdc)],[-0xd*-0x2f5+-0x973+-0x1ce2,_0x3c97cf[_0x5865e3(0x345)]],[-0xd*0x29+0xc70*-0x2+0x1*0x1b15,'u8'],[-0xc1d*0x1+-0x1*-0xde7+-0x1a6*0x1,_0x5865e3(0xdc)],[0x9f*0xb+-0x11*-0x1ab+-0x22cc,_0x5865e3(0x1da)],[0x398*-0x5+-0x78a+0x19fe,_0x3c97cf['XqWoM']],[0x1513+-0x71*0x3+-0x1*0x133c,_0x5865e3(0xdc)],[0x202e+0x6*0x20+0xd*-0x27e,'u8'],[-0xdbb+-0x1d12+-0xe72*-0x3,'u8'],[-0x13b*0x4+-0xb*0x311+0x2733,_0x3c97cf['cArRw']],[-0x3a*0x2e+0x509*0x5+-0xe31,_0x3c97cf[_0x5865e3(0x2d7)]],[-0x5*-0x105+0x1d8a*-0x1+0x1909,_0x3c97cf[_0x5865e3(0x2d7)]],[-0x74*-0x2+0x2*-0x11f+0x202,_0x3c97cf['cArRw']],[0x2a5*0x9+-0x1*-0x15eb+-0x2cfc,'u8'],[-0x1*0x1613+0x161b*-0x1+0x2d0a,_0x3c97cf['bwTqC']],[-0x50f*-0x7+0x1b6d+-0x3de6*0x1,'obfI'],[0x1b0b*-0x1+0x1*-0x25bf+0x41ce,_0x3c97cf[_0x5865e3(0x2d7)]],[-0x954+-0x81f+0x1*0x127b,_0x3c97cf[_0x5865e3(0x2d7)]],[0x268e+0x24e6+-0x4a68*0x1,_0x3c97cf['XqWoM']],[-0x2f5*0x1+-0x20*0x4e+0x1*0xdcd,_0x5865e3(0x3c2)],[0x1154*-0x2+-0x1f72+-0x219d*-0x2,_0x5865e3(0x3c2)],[0x32d*-0x1+-0x9e3*-0x1+-0x58e,'u8'],[-0xec9+0x3*-0xb5+0x1214,_0x5865e3(0xf3)],[0xa58+-0xe9b*-0x1+0x1*-0x17b3,'obfI'],[-0xc31*-0x3+-0x13f2+0x1*-0xf4d,_0x3c97cf[_0x5865e3(0x167)]],[0x2b5+-0x12*0x15+-0xf*-0x3,_0x5865e3(0x225)],[0x1653+-0x1*0xf5b+-0x584,_0x5865e3(0x225)],[-0x383*0x3+-0x25af+0x31b8,_0x3c97cf[_0x5865e3(0x259)]],[-0x87e+-0x26b8+0x30c2*0x1,_0x5865e3(0x225)],[-0x18ed+0x11de+0x1*0x8b3,'obfB'],[-0x270+-0x645+0xa65,'obfI'],[0x971*0x1+0x64e*0x5+-0x272b,_0x5865e3(0xdc)],[0xe5*-0x5+-0x109d*0x2+0x2783,'u8'],[0x647+0x1d17+-0x218a,_0x5865e3(0xdc)],[0x25e5+-0xebb*-0x2+-0x4183,_0x3c97cf[_0x5865e3(0x345)]],[0x39*0x17+-0x10c6+-0x5*-0x2bb,_0x3c97cf['cArRw']],[-0x2*0xdf0+-0x1*0xb8d+0x2981,'u8'],[-0x1cc9+0x1d32+0x1b3,'u8'],[0x21aa+-0xde*-0x2b+-0x44d7*0x1,'u8'],[-0x417*-0x2+-0x2242+0x1c32,'u8'],[-0x404+-0x131a+0x5b*0x47,'u8'],[0x30b+0xa67*-0x2+0x1413,'i32'],[-0x278+0x1*-0x784+0x2*0x62a,'u8']],'GG_GameManager':[[-0xe9e+0x3b*-0x95+-0x3119*-0x1,'u8'],[-0x1afc+0xe*0x4+0x1af0,_0x5865e3(0x3c2)],[-0x7*-0x32b+0x19b5+0x6a*-0x73,'u8'],[-0x1*-0x1ecd+0xb81*0x3+-0x410b,'u8'],[-0x387+0x1ff4+-0x1c25,_0x5865e3(0x3c2)],[0x1024+0xbd1+-0x1ba9,'f32'],[0x152a+-0xeae+-0x62c,'i32'],[0x305*-0x5+-0x1*0x2053+0x2fc*0x10,'i32'],[-0x1056+0x1baf+-0xb01,'u8'],[-0xa*0x146+-0x621*0x3+-0x1f93*-0x1,'u8'],[-0x4*0x1a3+0x1*0x789+-0x85,_0x3c97cf[_0x5865e3(0x2d7)]],[0x43*0x46+0x2249+-0x341f,_0x5865e3(0x3c2)],[0x2173*-0x1+-0x482+0x2685,'i32'],[0x1cfd+0x45a*-0x5+0x6a7*-0x1,'u8'],[0xea5+0x1*0x24df+-0x32d0,_0x5865e3(0xdc)],[-0xb1b+-0x77*-0x25+0x4*-0x157,_0x3c97cf[_0x5865e3(0x345)]],[-0x8e*-0x43+-0x510+0x1*-0x1f5a,'i32'],[0x1313+0x10*-0xe3+-0x3fb,_0x3c97cf['bwTqC']],[-0x1529+0x1351+0x2d4,_0x3c97cf['bwTqC']],[-0x20*0xd8+0x16c4+0x2a6*0x2,_0x5865e3(0xf3)],[-0x51f+0xd3*0x13+-0x6d*0x16,'u8'],[0x12b*0xc+0x1*0x79f+-0x1473,'i32'],[-0x5f2*0x5+-0x1*0xdef+0x2d0d,'u8'],[0x7fa+0xe*0x15+-0x7b0,_0x3c97cf[_0x5865e3(0x2d7)]],[-0xd7*0x15+0xf8b+0x398,'u8'],[-0x1*0x1b9a+-0x25*-0x2+0x1cd8,'u8'],[-0x14d9*-0x1+-0xdf5+-0x540,'u8'],[-0x1*0x1a39+0x19fe+-0x3*-0xa1,_0x5865e3(0xdc)],[0x19c7+-0x46*0x6b+0x527,'f32'],[-0xa1c+-0xa*-0x27b+-0xd02,'u8'],[0xe*0xf6+-0x6a*-0xd+0x5b7*-0x3,'u8'],[0x3*0x42d+-0x18*-0x2d+-0xf07,'i32'],[-0x1*-0x1e86+-0x69c+-0x2*0xb17,_0x5865e3(0xdc)],[0x1*-0x247f+0x1fc6+0x679,'f32'],[0x16c*0x4+0x1ebf+-0x22ab,_0x5865e3(0xdc)],[-0xe9b+-0x1*-0xc11+0x452,_0x5865e3(0x3c2)],[0x255b+0x1923+0x1e59*-0x2,_0x3c97cf['cArRw']],[0x3b1+-0x79f+-0x2*-0x2df,_0x3c97cf[_0x5865e3(0x345)]]]};function _0x461c24(_0x3dffc9,_0x5328f1){var _0x28af2b=_0x5865e3,_0x270aba={'yhyJJ':_0x3c97cf['AqIBo'],'TBEtQ':_0x28af2b(0x3b9)+'a-ski'+'llwar'+'z','DvRER':function(_0x4c4432,_0x439cd3){return _0x3c97cf['wwslk'](_0x4c4432,_0x439cd3);}};return function(_0x5eca3e){var _0x4810fb=_0x28af2b,_0xf690b7={'hhWbJ':function(_0x5dd025,_0x31fe18){return _0x5dd025===_0x31fe18;}};if(_0x3c97cf['FLDwf']===_0x3c97cf[_0x4810fb(0x222)])try{if(_0x4810fb(0x210)!==_0x4810fb(0x3bc)){var _0x25fbe3=_0x5eca3e&&_0x5eca3e['val']?_0x5eca3e[_0x4810fb(0x3f0)]():0xd3b+-0xb*-0x61+-0x83*0x22;if(!_0x25fbe3)return;var _0x2b2034=_0x39b9af[_0x3dffc9];if(!_0x2b2034||_0x2b2034[_0x4810fb(0xda)]!==_0x25fbe3)_0x39b9af[_0x3dffc9]={'ptr':_0x25fbe3,'firstSeen':Date['now'](),'hits':0x0,'replaced':!!_0x2b2034};_0x39b9af[_0x3dffc9]['hits']++;if(!_0x5328f1){var _0x5d0bcc=_0x2e6291['filte'+'r'](function(_0x5c9989){var _0x2fa55a=_0x4810fb;return _0xf690b7[_0x2fa55a(0x166)](_0x5c9989['type'],_0x3dffc9);})[0x23fa+-0x34*0x80+0x1*-0x9fa];if(_0x5d0bcc&&_0x5d0bcc[_0x4810fb(0x209)]){if('DHHhI'!=='raOgK')try{_0x5d0bcc['hook']['enabl'+'ed']=![];}catch(_0x42a09c){}else try{var _0x3c9e38=_0x296232[_0x4810fb(0x134)+_0x4810fb(0x30f)+_0x4810fb(0x253)]&&_0x544c9b[_0x4810fb(0x134)+_0x4810fb(0x30f)+_0x4810fb(0x253)][_0x4810fb(0x9d)+'me'];if(!_0x3c9e38||typeof _0x3c9e38['creat'+_0x4810fb(0x224)+'in']!==_0x4810fb(0x299)+_0x4810fb(0x2f3)){_0xd6ad5d[_0x4810fb(0x2d6)]=_0x270aba[_0x4810fb(0x3c7)];return;}_0x35f75c['attem'+_0x4810fb(0x370)]=!![],_0x4349c7=_0x3c9e38[_0x4810fb(0x374)+_0x4810fb(0x224)+'in']({'name':_0x270aba[_0x4810fb(0x3fa)],'version':_0x4810fb(0xf4),'referencedAssemblies':_0x374218['slice']()}),_0x172c29['ok']=!![],_0x10b988(),_0x565f42[_0x4810fb(0x257)+'Regis'+_0x4810fb(0x183)]=_0x3b6c4f[_0x4810fb(0x171)+'h'];}catch(_0x3030e2){_0x5b937c[_0x4810fb(0x2d6)]=_0x270aba[_0x4810fb(0x3ac)](_0x838486,_0x3030e2&&_0x3030e2['messa'+'ge']||_0x3030e2);}}}}else _0xa16910();}catch(_0xc48da2){}else return null;};}function _0x105724(){var _0x42a8d1=_0x5865e3,_0x5d4e4f=('6|5|8'+'|3|0|'+_0x42a8d1(0x378)+'|7')[_0x42a8d1(0x137)]('|'),_0x2fdc7f=0x1*0x146d+-0x5e*-0x14+-0x1*0x1bc5;while(!![]){switch(_0x5d4e4f[_0x2fdc7f++]){case'0':_0x448d81=window[_0x42a8d1(0x134)+_0x42a8d1(0x30f)+_0x42a8d1(0x253)][_0x42a8d1(0x401)+'Wrapp'+'er'];continue;case'1':for(var _0x4d26a1=0x5a3+0x1448+0x19eb*-0x1;_0x4d26a1<_0x3d5ac5[_0x42a8d1(0x171)+'h'];_0x4d26a1++){var _0x182d03=_0x3d5ac5[_0x4d26a1];try{var _0x192150=_0x2dd00e[_0x42a8d1(0x375)+_0x42a8d1(0x2d5)]({'typeName':_0x182d03['type'],'methodName':_0x3c97cf[_0x42a8d1(0x3f2)],'params':[_0x3c97cf['cArRw'],_0x42a8d1(0xdc)],'returnType':undefined},_0x3c97cf[_0x42a8d1(0x2ae)](_0x461c24,_0x182d03[_0x42a8d1(0x1de)],_0x182d03[_0x42a8d1(0x248)]));_0x2e6291[_0x42a8d1(0x32b)]({'type':_0x182d03[_0x42a8d1(0x1de)],'hook':_0x192150,'keep':_0x182d03['keep']});}catch(_0x249bdd){_0xf955d[_0x42a8d1(0x32b)](_0x182d03[_0x42a8d1(0x1de)]+':\x20'+String(_0x249bdd&&_0x249bdd[_0x42a8d1(0x2ad)+'ge']||_0x249bdd)[_0x42a8d1(0x1a1)](-0x260f*0x1+-0x7c5+0x2dd4,0x12ab+0x1405+0x15c*-0x1c));}}continue;case'2':_0x2dd00e=_0x2dd00e||_0x297eec['plugi'+'ns'][_0x297eec['plugi'+'ns']['lengt'+'h']-(-0x73d*-0x2+-0x1f*0xc9+0x9de)];continue;case'3':if(!_0x297eec['plugi'+'ns']||!_0x297eec[_0x42a8d1(0x36a)+'ns'][_0x42a8d1(0x171)+'h'])return![];continue;case'4':if(!_0x2dd00e||_0x3c97cf[_0x42a8d1(0x256)](typeof _0x2dd00e['hookP'+_0x42a8d1(0x2d5)],_0x3c97cf['ytkJk']))return![];continue;case'5':if(!window['Unity'+'WebMo'+_0x42a8d1(0x253)]||!window[_0x42a8d1(0x134)+_0x42a8d1(0x30f)+_0x42a8d1(0x253)][_0x42a8d1(0x9d)+'me'])return![];continue;case'6':if(_0x2e6291['lengt'+'h'])return!![];continue;case'7':return _0x2e6291[_0x42a8d1(0x171)+'h']>0x14ce+0x7d4+0x5ba*-0x5;case'8':var _0x297eec=window['Unity'+_0x42a8d1(0x30f)+'dkit'][_0x42a8d1(0x9d)+'me'];continue;}break;}}function _0x114d2a(){var _0x4b1fe7=_0x5865e3,_0x505814=0x243e+0x15a3+0x543*-0xb;for(var _0x2e277b=-0x2632+0x1cfe+0x13*0x7c;_0x2e277b<_0x2e6291[_0x4b1fe7(0x171)+'h'];_0x2e277b++){if(_0x2e6291[_0x2e277b][_0x4b1fe7(0x209)]&&_0x2e6291[_0x2e277b]['hook'][_0x4b1fe7(0x413)+_0x4b1fe7(0x2a5)]!==undefined)_0x505814++;}return _0x505814;}function _0x558694(){var _0x153278=_0x5865e3,_0x55555e=0x11d9+-0xe5*0x19+-0x11*-0x44;for(var _0x59e242=-0x26e0+-0x2476+0x4b56;_0x3c97cf[_0x153278(0x296)](_0x59e242,_0x2e6291[_0x153278(0x171)+'h']);_0x59e242++){if(_0x2e6291[_0x59e242][_0x153278(0x209)]&&_0x2e6291[_0x59e242]['hook'][_0x153278(0x126)+'ed'])_0x55555e++;}return _0x55555e;}var _0x39c221=null,_0x1a8347=[];function _0x5718a1(_0x2c61cd){var _0x47cb01=_0x5865e3;try{if(!_0x448d81||!_0x2c61cd)return null;var _0x55b3e7=new _0x448d81(_0x2c61cd)[_0x47cb01(0x234)+'assNa'+'me']();return _0x3c97cf[_0x47cb01(0x119)](_0x55b3e7,undefined)?null:_0x55b3e7;}catch(_0x1fb3fb){return null;}}function _0xaf807f(){var _0x2392ee=_0x5865e3,_0x548eab={'XOPhs':_0x3c97cf[_0x2392ee(0x2c2)]},_0x20963e={};_0x19ebb4['ok']=0x39*0x6f+-0xa3*0x12+-0xd41,_0x19ebb4[_0x2392ee(0x352)+'d']=-0x581+0x2182+-0x1c01,_0x19ebb4['lastE'+'rror']=null;var _0x2174b5=Object[_0x2392ee(0x1c3)](_0x4e2889);for(var _0xa2d2ba=-0x139*-0x12+0x20*-0x8c+-0x482;_0x3c97cf[_0x2392ee(0x296)](_0xa2d2ba,_0x2174b5['lengt'+'h']);_0xa2d2ba++){var _0x21a2fa=_0x2174b5[_0xa2d2ba],_0x206caa=_0x39b9af[_0x21a2fa];if(!_0x206caa||!_0x206caa[_0x2392ee(0xda)])continue;var _0x5daeec=_0x4e2889[_0x21a2fa]||[],_0x257208=[];for(var _0x585df1=0x1e20+-0xa02+0x5*-0x406;_0x585df1<_0x5daeec[_0x2392ee(0x171)+'h'];_0x585df1++){if(_0x3c97cf[_0x2392ee(0x15c)]('HaTyC',_0x3c97cf['olnFh'])){var _0x583340=_0x5daeec[_0x585df1][0x2365+-0x1314+-0x1051],_0x144db0=_0x5daeec[_0x585df1][-0x1*0x2343+0x1568+-0x4*-0x377];if(_0x144db0[_0x2392ee(0x92)+'Of']('obf')===-0x125*-0x22+0x555+-0x2c3f){if(_0x3c97cf[_0x2392ee(0x409)]('fGYze',_0x3c97cf[_0x2392ee(0x1a2)])){var _0x5e4f2b=_0x3c97cf[_0x2392ee(0xe4)](_0x1cb5a5,_0x206caa['ptr'],_0x583340,_0x144db0);if(!_0x5e4f2b)continue;_0x257208['push']({'o':_0x583340,'k':_0x144db0,'v':_0x5e4f2b[_0x2392ee(0x399)],'fake':_0x5e4f2b['fake'],'act':_0x5e4f2b['act'],'inited':_0x5e4f2b[_0x2392ee(0x120)],'raw':_0x3c97cf['TxWFa']('key='+_0x5e4f2b['key']+'\x20hid='+_0x5e4f2b[_0x2392ee(0x3b4)+'n']+('\x20fake'+'='),_0x5e4f2b['fake'])+(_0x5e4f2b['act']?_0x2392ee(0x33f)+'VE':'')});}else _0x589b0d=_0x3038e2(_0x27fbe9&&_0x50990a[_0x2392ee(0x2ad)+'ge']||_0x4dc254);}else{var _0x18ad06=_0x3c97cf[_0x2392ee(0xe7)](_0x40c8ff,_0x3c97cf[_0x2392ee(0x15d)](_0x206caa['ptr'],_0x583340),_0x144db0);if(_0x3c97cf['RpVBt'](_0x18ad06,undefined))continue;_0x257208['push']({'o':_0x583340,'k':_0x144db0,'v':_0x18ad06,'raw':''});}}else{var _0x4ad245=_0x543158[_0x2392ee(0x1b0)];if(_0x4ad245&&_0x4ad245['__sak'+_0x2392ee(0x180)]===_0x52d83f&&_0x4ad245[_0x2392ee(0x2e5)]===_0x548eab['XOPhs'])_0x2533b1(_0x4ad245[_0x2392ee(0xde)],_0x4ad245['arg']);}}if(_0x257208[_0x2392ee(0x171)+'h'])_0x20963e[_0x21a2fa]=_0x257208;}return _0x20963e;}function _0x40d02c(){var _0x11026d=_0x5865e3,_0x58cd01=[_0x3c97cf[_0x11026d(0x279)],_0x11026d(0x13d)+'Game',_0x11026d(0xdb),_0x11026d(0x13d)+_0x11026d(0x15a)+'nceWr'+_0x11026d(0x36f)],_0x2450ff={};for(var _0x57f6e6=-0x569+-0x1799+0x1d02;_0x57f6e6<_0x58cd01[_0x11026d(0x171)+'h'];_0x57f6e6++){var _0x1b7c93=_0x58cd01[_0x57f6e6],_0x5b9cfd=typeof window[_0x1b7c93];_0x2450ff[_0x1b7c93]=_0x3c97cf[_0x11026d(0x3bd)](_0x5b9cfd,_0x3c97cf['egLRW'])?_0x11026d(0x3e4)+_0x11026d(0x3b5):_0x5b9cfd;}var _0x1fe27f=_0x3c97cf[_0x11026d(0x186)](_0x38cd7f);_0x2450ff['gameS'+_0x11026d(0xfa)]=_0x19ebb4[_0x11026d(0x122)+'e'];try{_0x11026d(0x390)===_0x3c97cf[_0x11026d(0x1f7)]?_0x51b7b0=_0x317e59():(_0x2450ff['hasMo'+'dule']=!!(_0x1fe27f&&_0x1fe27f['Modul'+'e']),_0x2450ff['heapU'+'8']=!!(_0x1fe27f&&_0x1fe27f[_0x11026d(0x286)+'e']&&_0x1fe27f['Modul'+'e'][_0x11026d(0x250)+'8']),_0x2450ff['heapB'+_0x11026d(0xec)]=_0x2450ff['heapU'+'8']?_0x1fe27f['Modul'+'e']['HEAPU'+'8'][_0x11026d(0x171)+'h']:-0x4a*-0x2d+0x43f+-0x1141);}catch(_0xd97a6c){_0x2450ff['hasMo'+'dule']=![],_0x2450ff[_0x11026d(0x135)+'8']=![],_0x2450ff['heapB'+_0x11026d(0xec)]=0x543+-0xf4*-0x11+-0x1577;}return _0x2450ff['value'+'Wrapp'+'er']=typeof _0x448d81,_0x2450ff;}function _0x29a64e(_0x2a052b){var _0x1ff65b=_0x5865e3;if(_0x1ff65b(0x391)!=='OIQbQ'){var _0xffcc94={};for(var _0x40ecc9 in _0x2a052b){var _0x5bd134=_0x2a052b[_0x40ecc9];for(var _0x365844=-0x200*-0x8+0x1071+-0x2071;_0x3c97cf[_0x1ff65b(0x29a)](_0x365844,_0x5bd134['lengt'+'h']);_0x365844++){_0xffcc94[_0x40ecc9+_0x3c97cf[_0x1ff65b(0x18f)]+_0x5bd134[_0x365844]['o']['toStr'+_0x1ff65b(0x410)](0x2036+-0x95*0x39+0x1*0x107)]=_0x5bd134[_0x365844]['v'];}}return _0xffcc94;}else{var _0x2c0652=_0x7ba69b['unity'+_0x1ff65b(0x15a)+_0x1ff65b(0x1fd)]||_0x4d52bc[_0x1ff65b(0x13d)+_0x1ff65b(0x226)]||_0x3421e2[_0x1ff65b(0xdb)];if(_0x2c0652)return _0x242771[_0x1ff65b(0x122)+'e']=_0x1ff65b(0x36d)+_0x1ff65b(0x124)+_0x1ff65b(0x231),_0x2c0652;}}function _0x2cc0ec(_0x2b53f2){var _0x1d8b7f=_0x5865e3;if(_0x2b53f2!==_0x1d8b7f(0x17d)+'hot')return;var _0xdaa9ec=_0xaf807f(),_0x40e9ac=_0x3c97cf[_0x1d8b7f(0x3a3)](_0x29a64e,_0xdaa9ec);if(!_0x39c221){_0x39c221=_0x40e9ac,_0x1a8347=[],_0x3c97cf['pFYbC'](_0x120249,'repor'+'t',{'report':_0x59f05e()});return;}_0x1a8347=[];for(var _0x424996 in _0x40e9ac){var _0x577869=_0x39c221[_0x424996],_0x32ae3c=_0x40e9ac[_0x424996];if(_0x577869!==_0x32ae3c)_0x1a8347[_0x1d8b7f(0x32b)](_0x3c97cf[_0x1d8b7f(0xca)](_0x3c97cf['ESoht'](_0x3c97cf['IFhFl'](_0x3c97cf['MJTDL'](_0x424996,':\x20'),_0x577869),_0x1d8b7f(0x2ab)),_0x32ae3c));}_0x39c221=_0x40e9ac,_0x3c97cf[_0x1d8b7f(0x2ae)](_0x120249,_0x3c97cf[_0x1d8b7f(0xdd)],{'report':_0x59f05e()});}window['addEv'+_0x5865e3(0x23d)+'stene'+'r']('keydo'+'wn',function(_0x51f443){var _0x3fea80=_0x5865e3,_0xee065c={'hdeqR':function(_0x533355,_0x6b0dbe){return _0x3c97cf['zceAk'](_0x533355,_0x6b0dbe);}};if(_0x3c97cf['chYAA']==='VIdDk')return _0xe67102[_0x3fea80(0x352)+'d']++,_0x539f20[_0x3fea80(0xc8)+_0x3fea80(0xd8)]=_0x4b2197[_0x3fea80(0xc8)+_0x3fea80(0xd8)]||_0xee065c[_0x3fea80(0x15b)](_0x3fea80(0x39b)+'ss\x200x'+_0x19b247[_0x3fea80(0x2d2)+'ing'](0x68a*-0x5+0x1ceb+0x3d7),_0x3fea80(0x245)+_0x3fea80(0x24c)+_0x3fea80(0x29e)+'0x')+_0x33e860['byteL'+'ength'][_0x3fea80(0x2d2)+_0x3fea80(0x410)](0x203e+0x129a*0x1+0x34*-0xfa),_0x5dd7e4;else _0x51f443&&_0x51f443['code']==='F9'&&(_0x51f443['preve'+_0x3fea80(0xaa)+_0x3fea80(0x3f6)](),_0x3c97cf[_0x3fea80(0x9a)](_0x2cc0ec,_0x3c97cf[_0x3fea80(0xa5)]));},!![]);function _0x59f05e(){var _0x1702e5=_0x5865e3,_0xf9c778={'raGtU':function(_0x381182,_0x3b6f9f){return _0x381182!==_0x3b6f9f;},'DuKAM':function(_0x2a92f3,_0x228199){return _0x3c97cf['EbFui'](_0x2a92f3,_0x228199);},'eQuPW':_0x3c97cf['rFDDG'],'xIpEl':function(_0x5f22db){return _0x3c97cf['lKphX'](_0x5f22db);},'oOGYn':function(_0x525495,_0x161ad7){return _0x525495+_0x161ad7;}};if(_0x3c97cf[_0x1702e5(0x1ec)](_0x3c97cf[_0x1702e5(0x1c6)],_0x3c97cf[_0x1702e5(0x223)])){var _0x275533=window['Unity'+_0x1702e5(0x30f)+'dkit']&&window['Unity'+_0x1702e5(0x30f)+'dkit'][_0x1702e5(0x9d)+'me']||null,_0x258e8a=_0x275533&&_0x275533[_0x1702e5(0x298)+_0x1702e5(0x1c8)+'ext'],_0x468d94=_0x258e8a&&_0x258e8a[_0x1702e5(0x1fb)+'tData'],_0x23b21e={},_0x2227e0=[];for(var _0x4a8d49 in _0x39b9af){_0x23b21e[_0x4a8d49]=_0x3c97cf['Lxhcn']('0x',_0x39b9af[_0x4a8d49]['ptr'][_0x1702e5(0x2d2)+_0x1702e5(0x410)](0x1081+0x1*-0x71e+-0x953));if(_0x39b9af[_0x4a8d49][_0x1702e5(0x109)+'ced'])_0x2227e0[_0x1702e5(0x32b)](_0x4a8d49);}var _0x3b1d41={};for(var _0x2e3d54 in _0x39b9af)_0x3b1d41[_0x2e3d54]=_0x5718a1(_0x39b9af[_0x2e3d54]['ptr']);var _0x4bb37d={},_0x56f165=null;try{_0x3c97cf['UBZgb']('oAJAa',_0x3c97cf[_0x1702e5(0x202)])?_0x4bb37d=_0x3c97cf['qFWwM'](_0xaf807f):_0x442ffc['textC'+_0x1702e5(0x295)+'t']=_0xf5be13(_0x3a006e);}catch(_0x1a1f9d){_0x56f165=_0x3c97cf[_0x1702e5(0x3a3)](String,_0x1a1f9d&&_0x1a1f9d['messa'+'ge']||_0x1a1f9d);}var _0x309b1b={'version':_0x3c97cf[_0x1702e5(0x165)],'when':new Date()[_0x1702e5(0x380)+_0x1702e5(0xe2)+'g'](),'elapsedMs':_0x3c97cf[_0x1702e5(0x20d)](Date[_0x1702e5(0x312)](),_0x13811d),'frame':location[_0x1702e5(0x1d8)][_0x1702e5(0x1a1)](-0x1192+-0x23f0+0x3582,0x2e*-0x11+-0x12e+0x4b4),'host':_0x3d29b4,'frameRole':_0x12c50f,'uwmk':!!_0x275533,'il2CppContext':!!_0x258e8a,'typeCount':_0x468d94?Object[_0x1702e5(0x1c3)](_0x468d94)['lengt'+'h']:null,'arm':_0x3b5d7f,'assemblies':_0x5785b5,'hooksTotal':_0x2e6291[_0x1702e5(0x171)+'h'],'hooksApplied':_0x558694(),'hooksResolved':_0x3c97cf['nPqjs'](_0x114d2a),'hooksRegisteredAtArm':_0x3b5d7f[_0x1702e5(0x257)+'Regis'+'tered']||-0x7*-0x8b+0x1e*0x131+-0x278b,'hookErrors':_0xf955d[_0x1702e5(0x1a1)](0xe8d+-0x636+-0x857,0x1*0x4f6+-0xe12+0x924),'instances':_0x23b21e,'classNames':_0x3b1d41,'instancesReplaced':_0x2227e0,'survey':_0x4bb37d,'surveyRows':Object['keys'](_0x4bb37d)[_0x1702e5(0x366)+'e'](function(_0x2a3bad,_0x55019f){var _0x76ef32=_0x1702e5,_0x1b2161={'BaiwQ':_0x3c97cf[_0x76ef32(0x216)]};if('YSiYD'!==_0x76ef32(0x1d2))return _0x2a3bad+_0x4bb37d[_0x55019f][_0x76ef32(0x171)+'h'];else _0x289674=(_0x24c94a[_0x76ef32(0x327)]&&_0x263062[_0x76ef32(0x327)]['ok']?_0x1b2161[_0x76ef32(0x8e)]:'armin'+_0x76ef32(0x392))+_0x4aa943+'s',_0xd175ad=_0x76ef32(0x103)+'8a';},-0x161e+-0x22*0x10f+-0x2*-0x1d0e),'reads':{'ok':_0x19ebb4['ok'],'failed':_0x19ebb4[_0x1702e5(0x352)+'d'],'lastError':_0x19ebb4[_0x1702e5(0xc8)+_0x1702e5(0xd8)],'source':_0x19ebb4['sourc'+'e']},'globals':_0x40d02c(),'diff':_0x1a8347['slice'](0x12c5+-0xef5*-0x1+-0x2*0x10dd,0x1d1d*-0x1+-0x1453+0x4*0xc66),'uwmkLog':_0x170d7d[_0x1702e5(0x1a1)](0x24e7*-0x1+-0x17e2+0x3cc9,0x3*-0x3cd+-0x1*0xb99+0x1714),'warnings':[]};if(_0x56f165)_0x309b1b[_0x1702e5(0x29c)+_0x1702e5(0x1a0)]['push'](_0x3c97cf[_0x1702e5(0x247)]+_0x56f165);if(_0x3b5d7f[_0x1702e5(0x2d6)])_0x309b1b['warni'+_0x1702e5(0x1a0)][_0x1702e5(0x32b)](_0x3c97cf['amseT']+_0x3b5d7f[_0x1702e5(0x2d6)]);_0x3c97cf[_0x1702e5(0x159)](_0x309b1b['surve'+_0x1702e5(0xc6)],-0x22dd+-0x3a3+0x2680)&&Object[_0x1702e5(0x1c3)](_0x309b1b['insta'+'nces'])['lengt'+'h']>0x3e5*-0x6+-0x27f*0x3+-0x3*-0xa49&&_0x309b1b['warni'+'ngs']['push'](_0x3c97cf['UEWmr'](_0x3c97cf['OHLBy'](_0x3c97cf[_0x1702e5(0x163)](_0x3c97cf['CRPKQ'],Object['keys'](_0x309b1b['insta'+'nces'])[_0x1702e5(0x171)+'h']),_0x3c97cf[_0x1702e5(0x228)]),_0x19ebb4[_0x1702e5(0xc8)+_0x1702e5(0xd8)]?_0x3c97cf[_0x1702e5(0x154)]+_0x19ebb4[_0x1702e5(0xc8)+_0x1702e5(0xd8)]:'No\x20re'+_0x1702e5(0x394)+_0x1702e5(0x123)+_0x1702e5(0x212)+_0x1702e5(0x3be)+_0x1702e5(0xb8)+'t\x20was'+'\x20skip'+'ped\x20b'+_0x1702e5(0x1c2)+'e.'));_0x309b1b['globa'+'ls']&&!_0x309b1b[_0x1702e5(0xe8)+'ls'][_0x1702e5(0x135)+'8']&&_0x309b1b['warni'+'ngs'][_0x1702e5(0x32b)](_0x3c97cf['ySnel'](_0x1702e5(0x134)+_0x1702e5(0x1cc)+_0x1702e5(0x18a)+_0x1702e5(0x190)+'esolv'+_0x1702e5(0x106)+_0x1702e5(0x1d9)+_0x1702e5(0x102)+'\x20'+(_0x309b1b[_0x1702e5(0xe8)+'ls'][_0x1702e5(0x129)+_0x1702e5(0xfa)]||_0x3c97cf[_0x1702e5(0xe0)]),_0x1702e5(0x330))+_0x3c97cf['fPOoZ']);(_0x309b1b[_0x1702e5(0xe8)+'ls']&&!_0x309b1b['globa'+'ls'][_0x1702e5(0x157)+'Wrapp'+'er']||_0x309b1b['globa'+'ls'][_0x1702e5(0x157)+'Wrapp'+'er']===_0x3c97cf['egLRW'])&&_0x309b1b[_0x1702e5(0x29c)+_0x1702e5(0x1a0)][_0x1702e5(0x32b)](_0x3c97cf['RUrCH']);if(_0x3c97cf[_0x1702e5(0x24d)](_0x309b1b[_0x1702e5(0x257)+'Total'],-0x1*0x230+0x1*-0x1a51+0x1c81*0x1)&&_0x3c97cf[_0x1702e5(0x3c1)](_0x309b1b['hooks'+'Appli'+'ed'],0x5*0x274+-0x2*0x1cf+0x453*-0x2)&&_0x468d94){if(_0x3c97cf[_0x1702e5(0x15c)](_0x309b1b['hooks'+_0x1702e5(0x1cf)+'ved'],0x27*0xe7+0x231e+-0x1b7*0x29)){if(_0x3c97cf['yYQDk']('xfDnw',_0x3c97cf[_0x1702e5(0x13e)]))_0x309b1b[_0x1702e5(0x29c)+_0x1702e5(0x1a0)]['push'](_0x3c97cf['MHCzs'](_0x3c97cf[_0x1702e5(0x112)](_0x3c97cf[_0x1702e5(0x2c7)](_0x3c97cf['ANtWh'],_0x309b1b['hooks'+_0x1702e5(0x143)]),'\x20hook'+_0x1702e5(0x17c)+_0x1702e5(0x9c)+_0x1702e5(0x160)+_0x1702e5(0x1b6)+_0x1702e5(0x3a2)+'\x20The\x20'+_0x1702e5(0x111)+_0x1702e5(0x2e6)+'\x20')+(_0x1702e5(0x178)+_0x1702e5(0x242)+_0x1702e5(0x25f)+'g\x20Web'+_0x1702e5(0x2a4)+_0x1702e5(0x388)+_0x1702e5(0xad)+_0x1702e5(0x3ab)+'\x20and\x20'+_0x1702e5(0x17d)+_0x1702e5(0x96)+_0x1702e5(0x36a)+_0x1702e5(0x373)+'ks.le'+'ngth,'+'\x20')+('so\x20ho'+'oks\x20r'+'egist'+_0x1702e5(0x26c)+_0x1702e5(0x38a)+'\x20it\x20a'+'re\x20ig'+_0x1702e5(0xcc)+_0x1702e5(0x3f7)+_0x1702e5(0x3fd)+_0x1702e5(0x2cf)+'f\x20the'+'\x20page'+'.\x20')+_0x3c97cf[_0x1702e5(0x21b)],_0x309b1b[_0x1702e5(0x257)+_0x1702e5(0x1ad)+_0x1702e5(0x183)+'AtArm'])+_0x3c97cf[_0x1702e5(0x1ef)]);else return _0x172b74[0x2*0x38b+0x6*0x21a+-0x13b2]=_0x3c97cf['rqSuS'](_0xb26121,0x1f7*0x8+-0x1d84*0x1+-0x2*-0x6e6),_0x5c4dd6[-0x1*-0x16b1+0x700+-0xb*0x2b3];}else _0x309b1b[_0x1702e5(0x29c)+'ngs'][_0x1702e5(0x32b)]('UWMK\x20'+_0x1702e5(0x377)+_0x1702e5(0x2eb)+_0x309b1b['hooks'+'Resol'+_0x1702e5(0x14d)]+_0x1702e5(0x1a5)+_0x309b1b['hooks'+'Total']+_0x3c97cf['ElKrh']+(_0x1702e5(0x405)+_0x1702e5(0x2bf)+'hodIn'+'fo*)\x20'+'->\x20vo'+_0x1702e5(0x351)+_0x1702e5(0x2c8)+_0x1702e5(0x384)+_0x1702e5(0x348)+_0x1702e5(0x29d)+_0x1702e5(0x10b)));}return _0x309b1b[_0x1702e5(0x257)+_0x1702e5(0x272)+'ed']>0x32*0x89+0x227d+0x3d3f*-0x1&&!_0x309b1b[_0x1702e5(0x2e8)+_0x1702e5(0xd3)][_0x1702e5(0x37e)+'ntrol'+_0x1702e5(0x371)]&&_0x309b1b['warni'+_0x1702e5(0x1a0)]['push']('Hooks'+_0x1702e5(0x2dd)+'appli'+_0x1702e5(0x1a3)+_0x1702e5(0x2cb)+_0x1702e5(0x37e)+_0x1702e5(0x1cd)+_0x1702e5(0x292)+'as\x20fi'+_0x1702e5(0x116)+_0x1702e5(0x1e2)+_0x3c97cf['oEgrx']),_0x309b1b['insta'+'ncesR'+_0x1702e5(0xd1)+'ed'][_0x1702e5(0x171)+'h']&&_0x309b1b[_0x1702e5(0x29c)+_0x1702e5(0x1a0)][_0x1702e5(0x32b)](_0x3c97cf[_0x1702e5(0x1bc)]+_0x309b1b[_0x1702e5(0x2e8)+'ncesR'+_0x1702e5(0xd1)+'ed'][_0x1702e5(0x2da)](',\x20')),_0x309b1b;}else{var _0x30f567=_0x36d4ce[_0x1702e5(0x1b0)];if(!_0x30f567||_0xf9c778[_0x1702e5(0x16c)](_0x30f567['__sak'+'ura'],_0x5bf3ba))return;try{if(_0xf9c778[_0x1702e5(0x20e)](_0x30f567[_0x1702e5(0x2e5)],_0xf9c778[_0x1702e5(0xbf)])){_0xb0224d()[_0x1702e5(0x1ff)]({'host':_0x30f567[_0x1702e5(0xb6)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0xf9c778[_0x1702e5(0x20e)](_0x30f567['kind'],_0x1702e5(0x1e3)+'t'))_0xf9c778['xIpEl'](_0x39f015)[_0x1702e5(0x1ff)](_0x30f567[_0x1702e5(0x1e3)+'t']);}catch(_0x4ac7dc){_0x5c9aac[_0x1702e5(0x1d4)]('%c[sa'+_0x1702e5(0x128)+_0x1702e5(0x12c)+_0x1702e5(0x415)+'ate\x20f'+_0x1702e5(0x34c),_0xf9c778['oOGYn']('color'+':',_0x5eabb2),_0x4ac7dc);}}}function _0x10bbef(_0x1b5c61){var _0x244d54=_0x5865e3;console[_0x244d54(0x396)](_0x244d54(0x26b)+_0x244d54(0x128)+'\x20Skil'+_0x244d54(0x18d)+_0x244d54(0xf2)+'rt',_0x244d54(0x12f)+':'+_0x508c90+(_0x244d54(0x2ff)+_0x244d54(0x23b)+_0x244d54(0x215)+'0'),_0x1b5c61),console[_0x244d54(0x396)](_0x3c97cf['ZdYDA'](_0x3c97cf['gyIJt'](_0x471098+'\x0a',JSON[_0x244d54(0x3e9)+_0x244d54(0x2e1)](_0x1b5c61,null,-0x43*-0x6e+-0x136c+-0x8d*0x11)),'\x0a')+_0x5968f3),_0x120249('repor'+'t',{'report':_0x1b5c61});}function _0x14df44(){var _0x5d9815=_0x5865e3;try{return _0x3c97cf['oCqkn'](_0x59f05e);}catch(_0x217202){return{'version':_0x3c97cf['OFNqc'],'when':new Date()['toISO'+_0x5d9815(0xe2)+'g'](),'elapsedMs':Date['now']()-_0x13811d,'host':_0x3d29b4,'uwmk':!!(window['Unity'+_0x5d9815(0x30f)+_0x5d9815(0x253)]&&window[_0x5d9815(0x134)+_0x5d9815(0x30f)+_0x5d9815(0x253)]['Runti'+'me']),'il2CppContext':![],'arm':_0x3b5d7f,'hooksTotal':_0x2e6291['lengt'+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x3c97cf[_0x5d9815(0x3a3)](String,_0x217202&&_0x217202[_0x5d9815(0x2ad)+'ge']||_0x217202)};}}function _0xaa052c(){var _0x2b460a=_0x5865e3,_0x47f492={'oWiWm':function(_0x39f5f6,_0x541642){return _0x3c97cf['MHCzs'](_0x39f5f6,_0x541642);},'CIbJU':function(_0x3b7a80,_0x56b55f){return _0x3b7a80||_0x56b55f;},'TQIAL':_0x2b460a(0xf3),'veJXG':'i32','cUUuG':function(_0x14c07b,_0x570f22){return _0x14c07b(_0x570f22);},'NrKRn':function(_0x187c87,_0x24378e){return _0x187c87|_0x24378e;},'gbbUU':function(_0x49db48,_0x5b6468){return _0x49db48!==_0x5b6468;},'yLJkD':function(_0x3e5364,_0x3e57b2){return _0x3e5364+_0x3e57b2;},'cVtQc':function(_0x34cdb0,_0x204b8a){return _0x34cdb0+_0x204b8a;},'RuCrX':_0x3c97cf['TWvqt'],'avUWK':'RWfWm','rrdEj':function(_0x354c2b,_0x40f5d4){return _0x354c2b!==_0x40f5d4;},'fdolc':_0x3c97cf[_0x2b460a(0x113)],'DXgxx':_0x3c97cf[_0x2b460a(0x99)],'XSYZt':function(_0x38a5c7){return _0x38a5c7();},'ccfRL':function(_0x2665b,_0x3a8839){return _0x2665b<_0x3a8839;},'ihHEe':function(_0x5d5422,_0x2d68cc,_0x254ef7){return _0x5d5422(_0x2d68cc,_0x254ef7);}};if(_0x3c97cf[_0x2b460a(0x33b)](_0x2b460a(0x3c3),_0x3c97cf[_0x2b460a(0x9b)])){var _0x5b393e=('8|3|1'+_0x2b460a(0x40f)+'2|10|'+'4|11|'+_0x2b460a(0xb9)+_0x2b460a(0xcb)+_0x2b460a(0xfe))['split']('|'),_0x7f26ca=0x245c+0x17c1*-0x1+-0xc9b;while(!![]){switch(_0x5b393e[_0x7f26ca++]){case'0':return{'real':_0x55efdf,'fake':_0x2b0c18,'act':_0x5c118c,'init':_0x33b918,'key':_0xd7e955,'hidden':_0x538c48};case'1':_0xd7e955&=-0xf31+0xaa6+0x58a;continue;case'2':var _0x33b918=_0x3c3536(_0x47f492[_0x2b460a(0x2b6)](_0x47f492['oWiWm'](_0x4143db,_0x15f2a6),_0x510f11['inite'+'d']),'u8');continue;case'3':if(!_0x510f11)return null;continue;case'4':var _0x5c118c=_0x544535(_0x4c1163+_0x200ede+_0x510f11['activ'+'e'],'u8');continue;case'5':var _0x55efdf;continue;case'6':_0x33b918=_0x47f492['CIbJU'](_0x33b918,0x290*-0xa+0xc18+0xd88*0x1)&-0x8ba+-0x2*-0x28f+0x39d;continue;case'7':_0x538c48|=-0x5a6*-0x3+0x1e0c+0x4b3*-0xa;continue;case'8':var _0x510f11=_0x380c0f[_0x260fa5];continue;case'9':_0x5c118c&=-0xd39+0xd37+0x3*0x1;continue;case'10':var _0x2b0c18=_0x2e7600(_0x72b823+_0xa3652d+_0x510f11[_0x2b460a(0x8f)],_0x4d0ec1==='obfF'?_0x2b460a(0x3c2):_0x375fa7===_0x47f492['TQIAL']?_0x47f492[_0x2b460a(0x3f9)]:'u8');continue;case'11':if(_0xd7e955===_0x4eba75||_0x538c48===_0x9b14ab||_0x2b0c18===_0x31a73e||_0x5c118c===_0x3966ef)return null;continue;case'12':if(_0xad3adb===_0x2b460a(0x1da))_0x55efdf=_0x47f492['cUUuG'](_0xbb89cd,_0x538c48^_0xd7e955);else{if(_0x14860d==='obfI')_0x55efdf=_0x47f492[_0x2b460a(0x1c7)](_0x538c48^_0xd7e955,0x89*0x25+0xaed+0x8a*-0x39);else _0x55efdf=_0x47f492[_0x2b460a(0x3ef)]((_0x538c48^_0xd7e955)&-0x17*-0x12b+-0x227d+-0x1*-0x89f,-0xd28+0x1dfe+-0x10d6)?0x152d+-0xc1f*-0x3+-0x67*0x8f:-0x230a+0xeb4+0x112*0x13;}continue;case'13':var _0xd7e955=_0x3804e1(_0x47f492[_0x2b460a(0x300)](_0x55f9ee+_0x3c2282,_0x510f11['key']),'u8');continue;case'14':var _0x538c48=_0x2211cc(_0x47f492[_0x2b460a(0x300)](_0x47f492[_0x2b460a(0x300)](_0x5f123d,_0x809138),_0x510f11['hidde'+'n']),_0x47f492['veJXG']);continue;}break;}}else{var _0x3bcb16=0x62a+0x13*0x16e+-0x2154;_0x3c97cf[_0x2b460a(0x367)](_0x10bbef,_0x3c97cf[_0x2b460a(0x2c4)](_0x14df44)),function _0x56c578(){var _0x2412a1=_0x2b460a;if(_0x2412a1(0x3de)!==_0x47f492['avUWK']){if(!_0x2e6291[_0x2412a1(0x171)+'h']){if(_0x47f492[_0x2412a1(0x403)](_0x2412a1(0xd4),_0x47f492['fdolc']))try{if(_0x47f492['DXgxx']!==_0x2412a1(0x3d6))_0x47f492[_0x2412a1(0x34b)](_0x105724);else{var _0x37be7f=_0x149e15[_0x4a7e8a];for(var _0x49a7ad=-0x1962+0x184b+0x117;_0x49a7ad<_0x37be7f[_0x2412a1(0x171)+'h'];_0x49a7ad++){_0x5658c7[_0x47f492[_0x2412a1(0xbe)](_0x5caffc,_0x47f492['RuCrX'])+_0x37be7f[_0x49a7ad]['o']['toStr'+'ing'](-0x13f6+-0x13d5*0x1+0x27db)]=_0x37be7f[_0x49a7ad]['v'];}}}catch(_0x475013){}else return _0x2b832c[-0x1*-0x543+-0x1*0x679+0x136]=_0x9aa571,_0x15e414[0x127a+0x11d1*-0x1+0xd*-0xd];}_0x3bcb16++,_0x10bbef(_0x14df44());if(!_0x2e6291[_0x2412a1(0x171)+'h']&&_0x47f492['ccfRL'](_0x3bcb16,-0x1549+-0x1*0x2ea+0x1*0x195f))_0x47f492['ihHEe'](setTimeout,_0x56c578,-0x200b+-0x1168*0x2+-0x1*-0x4aab);else{if(!Object[_0x2412a1(0x1c3)](_0x39b9af)[_0x2412a1(0x171)+'h']&&_0x3bcb16<-0x112*0x2+-0x756+0x1d*0x5e)setTimeout(_0x56c578,-0xa*-0x32b+0x7*-0x538+0x1*0xcaa);else setTimeout(_0x56c578,0xf46+0x1ba8+-0x263e);}}else _0x56d138['close']();}();}}if(document['body'])_0x3c97cf[_0x5865e3(0x3af)](_0xaa052c);else document[_0x5865e3(0x22a)+'entLi'+'stene'+'r'](_0x5865e3(0x19c)+'ntent'+'Loade'+'d',_0xaa052c,{'once':!![]});})()));
