// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.9.3
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

function _0x4730(_0x2780b1,_0x377888){_0x2780b1=_0x2780b1-(0x31*0x3b+0x22e8+0x1*-0x2d2e);var _0x4a64d1=_0x53be();var _0x237123=_0x4a64d1[_0x2780b1];if(_0x4730['phFaZy']===undefined){var _0x2b4da8=function(_0x35deca){var _0x7430d='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x34c229='',_0x3bdaa1='';for(var _0x5a0fd8=-0x14a3+0x1*0xea3+0x8*0xc0,_0x44c183,_0x6b1a4b,_0x79e94=-0x21d*-0xd+-0x593*-0x1+-0x1e*0x11a;_0x6b1a4b=_0x35deca['charAt'](_0x79e94++);~_0x6b1a4b&&(_0x44c183=_0x5a0fd8%(0x13eb*-0x1+-0x268c+0x3a7b)?_0x44c183*(0x1*0x451+-0x1ffa+0x1*0x1be9)+_0x6b1a4b:_0x6b1a4b,_0x5a0fd8++%(-0x15b8+0x2*0x373+0xed6))?_0x34c229+=String['fromCharCode'](-0x269b+-0x4*-0x19b+0x212e&_0x44c183>>(-(0x1*0x19d8+0x3*0x7fd+-0x487*0xb)*_0x5a0fd8&-0x1915+0x1*0x213a+-0x81f)):0x2e6*-0x1+0x26ee*0x1+-0x2408){_0x6b1a4b=_0x7430d['indexOf'](_0x6b1a4b);}for(var _0x2cf795=0x25d*-0xf+0x1f1*0x11+-0x272*-0x1,_0x550916=_0x34c229['length'];_0x2cf795<_0x550916;_0x2cf795++){_0x3bdaa1+='%'+('00'+_0x34c229['charCodeAt'](_0x2cf795)['toString'](0x15dc*-0x1+-0x1a3*-0x6+0xc1a))['slice'](-(-0x1807+-0x7f*0x29+0x2c60));}return decodeURIComponent(_0x3bdaa1);};_0x4730['xKxJAg']=_0x2b4da8,_0x4730['OUtNDm']={},_0x4730['phFaZy']=!![];}var _0x28cac3=_0x4a64d1[0x166a+-0x15d8+-0x92*0x1],_0x160999=_0x2780b1+_0x28cac3,_0x2e7358=_0x4730['OUtNDm'][_0x160999];return!_0x2e7358?(_0x237123=_0x4730['xKxJAg'](_0x237123),_0x4730['OUtNDm'][_0x160999]=_0x237123):_0x237123=_0x2e7358,_0x237123;}(function(_0x4e9591,_0x129212){var _0x154a68=_0x4730,_0x3a203d=_0x4e9591();while(!![]){try{var _0x4eb201=parseInt(_0x154a68(0x3b0))/(0x15*0xd5+0x1*-0x1c7d+-0xb05*-0x1)+-parseInt(_0x154a68(0x79e))/(0x302*-0x5+-0x2ed*0x3+-0x141*-0x13)*(parseInt(_0x154a68(0x8e1))/(-0xd6*0x1e+0xf2+-0x1825*-0x1))+-parseInt(_0x154a68(0x8d6))/(0x1914+0x26b3+-0x3fc3)+parseInt(_0x154a68(0x1c3))/(0x1a62+-0x89*-0x24+-0x2da1)*(-parseInt(_0x154a68(0x5e0))/(-0x2*0x1152+-0x79e*0x2+0x31e6))+parseInt(_0x154a68(0xb4e))/(-0x1430+-0x4c9+0x1900)*(-parseInt(_0x154a68(0x8c0))/(-0x1c48+0x97b+0x12d5))+-parseInt(_0x154a68(0x69e))/(0x106a*0x1+-0x1c3a+0xbd9)*(-parseInt(_0x154a68(0x852))/(-0x25ae+-0x42+0x25fa))+-parseInt(_0x154a68(0xa43))/(0x7*-0x32b+0x12b0+-0x4*-0xe2)*(-parseInt(_0x154a68(0xa14))/(0xa3+0x42d+-0x3d*0x14));if(_0x4eb201===_0x129212)break;else _0x3a203d['push'](_0x3a203d['shift']());}catch(_0x22f417){_0x3a203d['push'](_0x3a203d['shift']());}}}(_0x53be,0x8d13+-0x5b*-0x13+0x185f1),((()=>{'use strict';var _0x27dfe2=_0x4730,_0x3d6075={'LZjcF':function(_0x1a1437,_0x13781d){return _0x1a1437!==_0x13781d;},'kENOm':'cmd','KarBC':_0x27dfe2(0x64d),'cUKGz':_0x27dfe2(0x62d)+'|2|7|'+_0x27dfe2(0x686)+_0x27dfe2(0x344),'RaRuh':function(_0x3e821c,_0x57e076){return _0x3e821c+_0x57e076;},'LaFce':_0x27dfe2(0x4d1),'DsTLa':function(_0x3ed9b3,_0x44fa19){return _0x3ed9b3-_0x44fa19;},'pQEsr':_0x27dfe2(0x320)+'e','LsedL':function(_0x5a56a9,_0x4ca8fc,_0x4e9e21){return _0x5a56a9(_0x4ca8fc,_0x4e9e21);},'urGsi':function(_0x155a63,_0x542fb4){return _0x155a63===_0x542fb4;},'dfsVd':_0x27dfe2(0xac6),'RAyrs':'sakur'+_0x27dfe2(0x73b)+'v2','kGRQP':function(_0x1613b4,_0x154ab7){return _0x1613b4+_0x154ab7;},'eHgCX':'backg'+'round'+_0x27dfe2(0x662)+_0x27dfe2(0x28f)+_0x27dfe2(0x487)+'.9);b'+_0x27dfe2(0x724)+':1px\x20'+_0x27dfe2(0xa71)+_0x27dfe2(0x532)+_0x27dfe2(0x5e1)+_0x27dfe2(0x753)+'77,.5'+');col'+_0x27dfe2(0x4db),'vPYSc':'sakur'+'a','eiCRx':_0x27dfe2(0x3b3),'WftXA':_0x27dfe2(0x1f9),'NgocH':function(_0x4953e2,_0x4572d8){return _0x4953e2*_0x4572d8;},'pAiVc':function(_0x10713a,_0x331a03){return _0x10713a*_0x331a03;},'XcMRc':function(_0x30bc0b,_0x876e6d){return _0x30bc0b+_0x876e6d;},'HsrRT':function(_0x53b319,_0x399fbf){return _0x53b319+_0x399fbf;},'sbJtw':_0x27dfe2(0x78e)+'6a','bDyXB':function(_0x6b3d2b){return _0x6b3d2b();},'wAsUu':_0x27dfe2(0x397)+'kura]'+_0x27dfe2(0x1f4)+_0x27dfe2(0x89a)+_0x27dfe2(0x341),'hRovB':_0x27dfe2(0x835)+':','UkGeC':'NrNhf','IhXgM':_0x27dfe2(0x604),'LPlXB':'qcHzT','PvBsT':function(_0x1a2f0d,_0x156dea){return _0x1a2f0d(_0x156dea);},'sGhiW':_0x27dfe2(0x48f),'OsHck':function(_0x59a1af){return _0x59a1af();},'HMSdB':function(_0x443b6c,_0x5671ca,_0x3ec29f){return _0x443b6c(_0x5671ca,_0x3ec29f);},'AusmR':function(_0x264837,_0x125ea5){return _0x264837/_0x125ea5;},'dLRuZ':_0x27dfe2(0xab7)+'|1|0','JbNVL':_0x27dfe2(0x85f)+'74','ODXga':function(_0x1942ca,_0xa299ad){return _0x1942ca+_0xa299ad;},'bCUby':function(_0x4772d3,_0x434e07){return _0x4772d3/_0x434e07;},'yDkNm':function(_0x4d85c0,_0x4f92d3){return _0x4d85c0+_0x4f92d3;},'xCvnn':'\x20obje'+'cts\x20·'+'\x20','ehhDj':function(_0x1d8f1b,_0x5081de){return _0x1d8f1b+_0x5081de;},'QcojX':function(_0x3f911c,_0x2141cd){return _0x3f911c+_0x2141cd;},'YSUmS':_0x27dfe2(0x66b)+'8a','UbbjO':function(_0x14bf85,_0x33cf59){return _0x14bf85+_0x33cf59;},'fpoAn':_0x27dfe2(0x371)+_0x27dfe2(0x6f5)+'t','pyUhX':_0x27dfe2(0x93a),'isPHg':_0x27dfe2(0x397)+_0x27dfe2(0x3d5)+_0x27dfe2(0xa2c)+'lWarz'+_0x27dfe2(0x571)+'rt','QlbQr':function(_0x57ae9d,_0x335ab3){return _0x57ae9d<_0x335ab3;},'rwJAH':_0x27dfe2(0x584),'wCRvz':'no\x20Up'+_0x27dfe2(0x719)+'ran\x20y'+'et,\x20o'+'r\x20the'+_0x27dfe2(0x5ff)+'ature'+_0x27dfe2(0xa01)+'not\x20m'+_0x27dfe2(0x666),'NuRMI':function(_0x3c78f1,_0x9c89dd,_0x1af1f1){return _0x3c78f1(_0x9c89dd,_0x1af1f1);},'CeIUY':function(_0x9bec,_0x5857e8){return _0x9bec===_0x5857e8;},'polVC':_0x27dfe2(0x57f),'fWItM':_0x27dfe2(0xa1d)+_0x27dfe2(0x443),'mutIi':'The\x20g'+_0x27dfe2(0x111)+_0x27dfe2(0x670)+_0x27dfe2(0x4a3)+'\x20post'+_0x27dfe2(0xaf1)+_0x27dfe2(0x8cf)+'e\x20rep'+_0x27dfe2(0x206)+'\x0a','spELr':'This\x20'+_0x27dfe2(0x4b1)+'\x20prov'+'es\x20th'+_0x27dfe2(0x126)+'rscri'+_0x27dfe2(0x137)+'\x20inst'+_0x27dfe2(0x96e)+_0x27dfe2(0x403)+_0x27dfe2(0x492)+_0x27dfe2(0xa48)+_0x27dfe2(0x11b)+'porta'+'l,\x0a','amDsr':'so\x20th'+_0x27dfe2(0x422)+_0x27dfe2(0x894)+'g\x20sus'+'pects'+_0x27dfe2(0xa6c)+'\x0a\x0a','nhUvX':'Reloa'+'d\x20the'+_0x27dfe2(0xb0c)+_0x27dfe2(0x9e2)+_0x27dfe2(0x30a)+_0x27dfe2(0x403)+_0x27dfe2(0x641)+_0x27dfe2(0x6eb)+_0x27dfe2(0x1f4)+_0x27dfe2(0x750)+'in.','ZtRmS':function(_0x2634c3,_0x5e9871){return _0x2634c3/_0x5e9871;},'Cxbtn':_0x27dfe2(0x41b)+_0x27dfe2(0x12e)+'1.5\x20u'+_0x27dfe2(0x573)+'ospac'+_0x27dfe2(0xadc)+_0x27dfe2(0x318)+',mono'+'space'+';box-'+'shado'+_0x27dfe2(0x389)+_0x27dfe2(0x6b0)+'0px\x20-'+_0x27dfe2(0x8d4)+_0x27dfe2(0x7c1),'QiRXc':function(_0x399788,_0x3d18d3){return _0x399788+_0x3d18d3;},'GELSq':function(_0x57fe04,_0x17b551){return _0x57fe04+_0x17b551;},'YwTTj':function(_0x3aa564,_0x2bbde7){return _0x3aa564+_0x2bbde7;},'XLZkM':function(_0x351ddb,_0x42e6c7){return _0x351ddb+_0x42e6c7;},'hvhaS':'<span'+_0x27dfe2(0x235)+'sw2-b'+_0x27dfe2(0x721)+'\x20styl'+_0x27dfe2(0x5fb)+_0x27dfe2(0x8e5)+_0x27dfe2(0x799)+'6;fon'+_0x27dfe2(0x2b8)+_0x27dfe2(0x8f5)+'x;pad'+'ding:'+_0x27dfe2(0xa07)+'px;bo'+_0x27dfe2(0x222)+'1px\x20s'+_0x27dfe2(0x589)+_0x27dfe2(0x47c)+'255,1'+_0x27dfe2(0x2b7)+_0x27dfe2(0x81b)+_0x27dfe2(0x4a1)+_0x27dfe2(0x143)+'adius'+':999p'+_0x27dfe2(0x6d6)+'?</sp'+'an>','VRpQL':_0x27dfe2(0xa6b)+_0x27dfe2(0x235)+'sw2-s'+_0x27dfe2(0xb22)+'\x22\x20sty'+_0x27dfe2(0x69c)+_0x27dfe2(0x63e)+_0x27dfe2(0x5cc)+_0x27dfe2(0x10a)+_0x27dfe2(0x9a1)+'g\x20for'+'\x20game'+_0x27dfe2(0x9b9)+_0x27dfe2(0x47e)+_0x27dfe2(0x53a),'piGym':_0x27dfe2(0x697)+'>','UptzV':'<div\x20'+'style'+'=\x22pad'+_0x27dfe2(0xad0)+_0x27dfe2(0x471)+_0x27dfe2(0xadf)+'order'+_0x27dfe2(0x4fb)+_0x27dfe2(0x883)+'x\x20sol'+'id\x20rg'+_0x27dfe2(0x9db)+'5,143'+_0x27dfe2(0x9c8)+'.18);'+_0x27dfe2(0x8d1)+'ay:fl'+_0x27dfe2(0x8d0)+_0x27dfe2(0x186)+';alig'+'n-ite'+_0x27dfe2(0x3de)+_0x27dfe2(0xaa4)+_0x27dfe2(0x6b1)+_0x27dfe2(0xa30)+_0x27dfe2(0x5fe)+_0x27dfe2(0x3a7)+'rap:w'+_0x27dfe2(0x9ca)+'>','muXQD':_0x27dfe2(0xa5c)+_0x27dfe2(0x6f7)+'=\x22sw2'+_0x27dfe2(0x36b)+'d\x22\x20st'+_0x27dfe2(0x4dc)+'backg'+_0x27dfe2(0x637)+_0x27dfe2(0x182)+_0x27dfe2(0x5d7)+_0x27dfe2(0x22f)+_0x27dfe2(0x222)+_0x27dfe2(0x7db)+_0x27dfe2(0x589)+'rgba('+_0x27dfe2(0x181)+'43,17'+'7,.4)'+';colo'+'r:#f7'+_0x27dfe2(0x208)+_0x27dfe2(0xac8)+'r-rad'+_0x27dfe2(0x5a4)+_0x27dfe2(0x3a9)+'dding'+':4px\x20'+'10px;'+_0x27dfe2(0x521)+_0x27dfe2(0x65e)+_0x27dfe2(0xaa4)+_0x27dfe2(0xb24)+_0x27dfe2(0x2e3)+_0x27dfe2(0x26f)+'tton>','cMlMh':'<span'+_0x27dfe2(0x235)+'sw2-f'+'actor'+'label'+'\x22\x20sty'+_0x27dfe2(0x69c)+_0x27dfe2(0x63e)+_0x27dfe2(0x5cc)+_0x27dfe2(0x396)+_0x27dfe2(0x657)+'th:34'+'px;\x22>'+_0x27dfe2(0xa8a)+'/span'+'>','nSnXy':'#sw2-'+_0x27dfe2(0x18c),'LHtAb':'#sw2-'+_0x27dfe2(0xaa6),'KBvBH':_0x27dfe2(0x32e)+'body','qyfZO':'#sw2-'+_0x27dfe2(0x7c7),'wJDma':'#sw2-'+'speed','hYcxj':_0x27dfe2(0x32e)+_0x27dfe2(0x24b)+'r','ClxJy':'#sw2-'+'hint','VXplb':function(_0x48d9ad,_0x2a10a5){return _0x48d9ad!=_0x2a10a5;},'KZqPt':_0x27dfe2(0x2cb)+_0x27dfe2(0x8fa),'pgIdt':_0x27dfe2(0x75a),'QLgbM':function(_0x4a3955,_0xdc9d69){return _0x4a3955+_0xdc9d69;},'taSSJ':function(_0x4c735d,_0x1ebad3){return _0x4c735d+_0x1ebad3;},'VJeQL':function(_0x2fc9ca,_0x5e68fd){return _0x2fc9ca+_0x5e68fd;},'mAWPw':_0x27dfe2(0xa8b)+_0x27dfe2(0x659)+'\x20','mYmVq':_0x27dfe2(0x79d),'HpDAu':_0x27dfe2(0x6a7)+_0x27dfe2(0xad2),'vUQxZ':function(_0x1a2892,_0x1a80ad){return _0x1a2892!==_0x1a80ad;},'WJWSx':'no\x20li'+'ve\x20ob'+_0x27dfe2(0x700)+_0x27dfe2(0xb35)+_0x27dfe2(0x370)+_0x27dfe2(0x6af),'RIoJN':'The\x20h'+_0x27dfe2(0x5f7)+_0x27dfe2(0x244)+_0x27dfe2(0x71e)+'e\x20gam'+'e\x27s\x20o'+'wn\x20Up'+'date('+_0x27dfe2(0x1a2)+'thing'+_0x27dfe2(0xb35)+'ured\x20'+_0x27dfe2(0x12a),'RIcNB':'cTUpD','mEkNe':function(_0x3fe20e,_0x17641e){return _0x3fe20e+_0x17641e;},'kTaqS':function(_0x50ee67,_0x5a2758){return _0x50ee67+_0x5a2758;},'rWTeL':_0x27dfe2(0x5b8),'cTWAU':function(_0xaf2b4a,_0xd66997){return _0xaf2b4a===_0xd66997;},'Euuhh':function(_0x3528fb,_0x44a984){return _0x3528fb+_0x44a984;},'xAjOk':'\x20\x20!\x20','OosNK':'%c[sa'+_0x27dfe2(0x3d5)+_0x27dfe2(0x1f4)+_0x27dfe2(0x138)+_0x27dfe2(0x5dc)+_0x27dfe2(0x36e),'hCdkd':function(_0xeb1a36,_0x2afa7c){return _0xeb1a36+_0x2afa7c;},'uunkg':function(_0x36137a,_0x2fa511){return _0x36137a+_0x2fa511;},'GGGVl':'PLAYE'+_0x27dfe2(0x941),'PxGls':_0x27dfe2(0x107)+'a8','WFKGu':'boole'+'an','qmzNf':'zulaW','oVrjm':function(_0x224452,_0x3e6970,_0xf2c5bd){return _0x224452(_0x3e6970,_0xf2c5bd);},'dHUMO':function(_0x242714,_0xc9af0b){return _0x242714===_0xc9af0b;},'bENlm':_0x27dfe2(0x117)+'g','OqTJf':_0x27dfe2(0x729),'pWqTd':_0x27dfe2(0x4b4),'GJzHn':function(_0x2df20c,_0x1fe531){return _0x2df20c+_0x1fe531;},'svqHl':function(_0x4495d5,_0x3a72fe){return _0x4495d5^_0x3a72fe;},'aDiCA':function(_0x4c65bf,_0x4cb8d9,_0x9606e7,_0x31ca62){return _0x4c65bf(_0x4cb8d9,_0x9606e7,_0x31ca62);},'SSTfS':_0x27dfe2(0x7d9)+_0x27dfe2(0x39a)+_0x27dfe2(0x5b2)+_0x27dfe2(0x39e)+'nitia'+'l}','cTAuX':_0x27dfe2(0x756)+_0x27dfe2(0x676)+'e','oniuG':_0x27dfe2(0x756)+'ntiat'+'eStre'+'aming','lRnbr':function(_0x524e25,_0x2105a1){return _0x524e25!==_0x2105a1;},'cDMSo':_0x27dfe2(0xa9f),'HpAAh':function(_0x3ccd20,_0x38115d,_0x425d48){return _0x3ccd20(_0x38115d,_0x425d48);},'pkpJT':'Runti'+'me.cr'+_0x27dfe2(0x4e3)+'lugin'+'\x20unav'+_0x27dfe2(0x32b)+'le','arArl':function(_0x1afc34,_0x19a317){return _0x1afc34|_0x19a317;},'DbRNk':function(_0x33fe82,_0x5a0d97){return _0x33fe82<_0x5a0d97;},'FzvOM':function(_0x2d1c3d,_0x145136){return _0x2d1c3d!==_0x145136;},'yRQVr':function(_0x38c949,_0x1a9d43){return _0x38c949+_0x1a9d43;},'qoCqW':_0x27dfe2(0xaa6),'qFGSz':_0x27dfe2(0x8d9)+_0x27dfe2(0xa8e),'pKGbk':function(_0x46a2b3,_0x577714){return _0x46a2b3!==_0x577714;},'Vggpv':_0x27dfe2(0x35f),'qLlzs':'plugi'+_0x27dfe2(0x90e)+'ntime'+_0x27dfe2(0x7f4)+_0x27dfe2(0x8d8)+_0x27dfe2(0x36c),'QzkQw':'lJzaV','YaoKs':'JEFII','OWOwn':_0x27dfe2(0x587),'WpyCY':'Runti'+_0x27dfe2(0x2a1)+'ame','FxDoi':_0x27dfe2(0xa6f)+_0x27dfe2(0x43e)+'bal','VeIar':'OKXkN','eSyZs':function(_0x51a734,_0x5193a7){return _0x51a734*_0x5193a7;},'uEmbU':function(_0x54955e,_0x228e60){return _0x54955e/_0x228e60;},'wgzdo':_0x27dfe2(0x756)+'ntiat'+_0x27dfe2(0x6e6)+'xport'+_0x27dfe2(0x23c)+'ory','LlsXH':function(_0x217c9a,_0x2a09d3){return _0x217c9a(_0x2a09d3);},'dcHed':function(_0x4a6857){return _0x4a6857();},'TlcqY':_0x27dfe2(0x1f0),'tLABx':'0|2|3'+'|4|1','pkPoK':function(_0x12db0a,_0x21eb98){return _0x12db0a+_0x21eb98;},'INxaK':_0x27dfe2(0xaeb)+'t','ViDRu':function(_0x1e18fb,_0x42f60c){return _0x1e18fb+_0x42f60c;},'PLfSm':function(_0x118bd3){return _0x118bd3();},'UMWxW':_0x27dfe2(0x1bc),'SwIdC':'no\x20HE'+_0x27dfe2(0x78d)+'-\x20Uni'+_0x27dfe2(0x576)+_0x27dfe2(0x3be)+_0x27dfe2(0x30c)+_0x27dfe2(0x975)+_0x27dfe2(0xb23)+'\x20via\x20'+'Runti'+_0x27dfe2(0x248)+_0x27dfe2(0x582)+_0x27dfe2(0x473)+_0x27dfe2(0x561)+'any\x20w'+_0x27dfe2(0x6bd)+_0x27dfe2(0x8b8)+'al','PwugO':function(_0x5c2148,_0x5cd828){return _0x5c2148+_0x5cd828;},'Hgtzd':_0x27dfe2(0x949),'LXsfE':function(_0x34d629,_0x15cc12){return _0x34d629+_0x15cc12;},'GZzVO':'i16','YHHOO':'u32','AcCxU':function(_0x46847e,_0x54646b){return _0x46847e>_0x54646b;},'JrHev':function(_0x20ba16,_0x58095f){return _0x20ba16&_0x58095f;},'iQBkJ':'u16','ReJwB':function(_0x536a81,_0x282d86){return _0x536a81<_0x282d86;},'nhmTu':'again'+'st\x20a\x20'+'diffe'+'rent\x20'+'Runti'+_0x27dfe2(0x1b4)+'stanc'+_0x27dfe2(0x15d)+'n\x20the'+_0x27dfe2(0x8b8)+'al\x20no'+'w\x20exp'+_0x27dfe2(0x4fc),'ahofS':_0x27dfe2(0x5c9),'ylgnD':function(_0x3d2e30,_0x4efcc7){return _0x3d2e30+_0x4efcc7;},'yRBnH':function(_0x2470df,_0x174834){return _0x2470df+_0x174834;},'oCUBM':function(_0x4dc5f1,_0x31891e){return _0x4dc5f1+_0x31891e;},'pOTKR':function(_0x2e286e,_0x55ae62){return _0x2e286e===_0x55ae62;},'rRRRY':_0x27dfe2(0x46d),'uryLD':function(_0x38f517,_0x36b5bd){return _0x38f517<_0x36b5bd;},'HprAf':function(_0x1dc4ab,_0x373f2d){return _0x1dc4ab+_0x373f2d;},'RXXYD':_0x27dfe2(0x89d)+_0x27dfe2(0x74f)+'7|9|1'+_0x27dfe2(0x527),'hZqID':function(_0x4e702c,_0x4f4b5e){return _0x4e702c===_0x4f4b5e;},'OCNgg':function(_0x536846,_0xfeaab2){return _0x536846&_0xfeaab2;},'aaolA':_0x27dfe2(0x699),'snnbM':function(_0x19c2a7,_0x5a8c20){return _0x19c2a7(_0x5a8c20);},'nbquD':function(_0x166d9c,_0x418306){return _0x166d9c^_0x418306;},'bxZCw':'obfI','HjxKP':function(_0xe5d717,_0x128399){return _0xe5d717&_0x128399;},'xCtex':function(_0xf9dd9,_0x538d94){return _0xf9dd9^_0x538d94;},'BHluW':function(_0xb594a0,_0x17c74f){return _0xb594a0+_0x17c74f;},'brurC':function(_0x252af6,_0x3863b1){return _0x252af6+_0x3863b1;},'QDyeL':function(_0x3bd80f,_0x5c5f91){return _0x3bd80f+_0x5c5f91;},'oNWfv':function(_0x5d03cf,_0x6f0b4f){return _0x5d03cf+_0x6f0b4f;},'zFYDs':function(_0x3d3139,_0x22f680){return _0x3d3139===_0x22f680;},'ShovP':function(_0x341aea,_0x3ba68f){return _0x341aea===_0x3ba68f;},'GsYTF':function(_0x9d4ed5,_0xa48346,_0x2712bf){return _0x9d4ed5(_0xa48346,_0x2712bf);},'QndBy':function(_0x5ab73f,_0x22b269){return _0x5ab73f===_0x22b269;},'HiaTw':function(_0x1052a5,_0x409464){return _0x1052a5(_0x409464);},'KRzDS':function(_0x227dea,_0x2abaa8){return _0x227dea===_0x2abaa8;},'ldlcH':'\x20hook'+'s\x20wer'+_0x27dfe2(0x1cb)+'n\x20SEE'+'N\x20by\x20'+'UWMK.'+'\x20The\x20'+_0x27dfe2(0x829)+_0x27dfe2(0x8b2)+'\x20','NJmvo':function(_0x3cf7b7,_0x4c3515){return _0x3cf7b7===_0x4c3515;},'LlhGI':_0x27dfe2(0xad8),'yEFRd':function(_0x1990b7,_0x52c224){return _0x1990b7!==_0x52c224;},'KlVNU':'GsUhy','YyfPT':function(_0x16b9b7,_0x26af89){return _0x16b9b7>_0x26af89;},'vYEvR':'iRaQm','zKSha':_0x27dfe2(0x8d7),'sMznc':function(_0x53d74f,_0x121bf8){return _0x53d74f<_0x121bf8;},'cRerj':function(_0x489cf9,_0x148e08){return _0x489cf9<_0x148e08;},'rKnyS':function(_0x2e4b55,_0x48fa4d){return _0x2e4b55<_0x48fa4d;},'WwdBW':function(_0xc80fdf,_0x114bbd,_0x11c662,_0x6140e3,_0x16a4d2){return _0xc80fdf(_0x114bbd,_0x11c662,_0x6140e3,_0x16a4d2);},'iLKfU':function(_0x743842,_0x32ad0b){return _0x743842+_0x32ad0b;},'eZdEp':function(_0x547176,_0x109c13,_0x3c2fdb){return _0x547176(_0x109c13,_0x3c2fdb);},'VIFuB':_0x27dfe2(0x198)+'n','ZwBiT':function(_0x41bbd7,_0x1bbf6c){return _0x41bbd7!==_0x1bbf6c;},'jgklB':function(_0x51990e,_0x479698){return _0x51990e!==_0x479698;},'tSWpS':_0x27dfe2(0x81c),'McLxn':'JKfrP','PlyAp':'funct'+_0x27dfe2(0x653),'JQaka':function(_0x4fda9d,_0x56280e){return _0x4fda9d===_0x56280e;},'MXtbS':function(_0x5642e5,_0x5aaebf){return _0x5642e5===_0x5aaebf;},'yQsww':'aria-'+'check'+'ed','wOKyy':function(_0x2a6bf7,_0x1998d8){return _0x2a6bf7+_0x1998d8;},'PUxgT':function(_0x37bfa4,_0x166620){return _0x37bfa4!==_0x166620;},'cdFbz':function(_0x5b3d34,_0x388329){return _0x5b3d34+_0x388329;},'dsXiR':_0x27dfe2(0x9d6),'wHOoC':function(_0x2cc4ef,_0x114ecb){return _0x2cc4ef+_0x114ecb;},'HxZgQ':function(_0x2265e9,_0x334ec6){return _0x2265e9||_0x334ec6;},'fdjBP':'pLnSY','zKtrB':_0x27dfe2(0x33e),'ogCgF':_0x27dfe2(0x95b),'PpJrN':function(_0x120610){return _0x120610();},'LwIKo':function(_0x339718,_0x180639){return _0x339718+_0x180639;},'SBhKQ':function(_0x573de1,_0x3565c5){return _0x573de1+_0x3565c5;},'AqwKX':function(_0x36a402,_0xca478a){return _0x36a402!==_0xca478a;},'lwyPq':function(_0x59abec,_0x16cca4){return _0x59abec(_0x16cca4);},'UkuJs':function(_0x3f87db,_0x32859d){return _0x3f87db===_0x32859d;},'bbuti':_0x27dfe2(0x246),'twYEO':_0x27dfe2(0x179),'BVGhh':function(_0x494f4d,_0x137ee5,_0x1c33fe,_0x25914c){return _0x494f4d(_0x137ee5,_0x1c33fe,_0x25914c);},'vVbzX':function(_0x307fcb,_0x53f025){return _0x307fcb<_0x53f025;},'iuagc':_0x27dfe2(0x1c6),'SbNLI':_0x27dfe2(0x90f)+'|1|8|'+_0x27dfe2(0xaa0)+_0x27dfe2(0x24a),'cVXUh':_0x27dfe2(0x6f3)+_0x27dfe2(0xb5c),'TUZKU':'sk-mb'+_0x27dfe2(0x348),'CMTie':function(_0x479703,_0x2ada81){return _0x479703!==_0x2ada81;},'ksVPd':function(_0x2dc19b,_0x2786a4){return _0x2dc19b+_0x2786a4;},'MpOuv':_0x27dfe2(0x58f),'UKrnk':function(_0x20124d,_0x33bbe9){return _0x20124d-_0x33bbe9;},'SEVJc':function(_0x10d91c,_0x3e5099,_0x3a49eb,_0x2347cb){return _0x10d91c(_0x3e5099,_0x3a49eb,_0x2347cb);},'ZZivd':_0x27dfe2(0x3db)+'hScri'+'pt','tDJIN':function(_0x4e4e3b,_0x4eaec5){return _0x4e4e3b<_0x4eaec5;},'iVIwH':function(_0x1054a4,_0x337d5c,_0xc05105){return _0x1054a4(_0x337d5c,_0xc05105);},'orUcC':'FPSco'+'ntrol'+_0x27dfe2(0xb28),'TsCBD':function(_0x564d08,_0xf2710d){return _0x564d08 in _0xf2710d;},'MZbsC':function(_0x251895,_0x3f31ce,_0x4ef53b){return _0x251895(_0x3f31ce,_0x4ef53b);},'HrQjW':function(_0x6de690,_0x2d5c5a){return _0x6de690+_0x2d5c5a;},'HEmkR':function(_0x510db6,_0xe5a5){return _0x510db6===_0xe5a5;},'pvdqS':function(_0x3e5f6d,_0x610fed){return _0x3e5f6d>>>_0x610fed;},'jXteP':function(_0xc66ac4,_0x417ef0){return _0xc66ac4+_0x417ef0;},'WXEeQ':_0x27dfe2(0xb49)+_0x27dfe2(0x40d)+'etwor'+'kSync'+_0x27dfe2(0x14a)+_0x27dfe2(0x36f)+_0x27dfe2(0xa4b)+'ler\x20a'+_0x27dfe2(0x9ec)+_0x27dfe2(0xb0c)+_0x27dfe2(0x673)+_0x27dfe2(0x4ee)+_0x27dfe2(0xb3c)+_0x27dfe2(0x1a7)+_0x27dfe2(0x936),'betax':function(_0x24ef14,_0x300d29){return _0x24ef14+_0x300d29;},'FZduU':_0x27dfe2(0x6f9)+'al\x20on'+_0x27dfe2(0x6da)+_0x27dfe2(0x9eb)+'y\x20in\x20'+_0x27dfe2(0x689)+'ers`.','Yqhep':function(_0x32c28f,_0x29ae42){return _0x32c28f+_0x29ae42;},'HkmOc':'QpuIX','QxJQe':function(_0x3dffa5,_0x565aa7){return _0x3dffa5!==_0x565aa7;},'WuBZt':function(_0x99c918,_0x371752){return _0x99c918+_0x371752;},'NchqJ':function(_0x1c261c,_0x4e0dd3){return _0x1c261c!==_0x4e0dd3;},'dAzXa':'fYlhN','uHHOa':function(_0x4b2f08,_0x33daa3){return _0x4b2f08<_0x33daa3;},'aPhkO':function(_0x2f1996,_0x2c7b3c){return _0x2f1996===_0x2c7b3c;},'LFfGO':'obf','Vtvej':function(_0x220c8d,_0x57fd62){return _0x220c8d===_0x57fd62;},'uqYeJ':function(_0x512e63,_0x25f675){return _0x512e63!==_0x25f675;},'EWxHx':function(_0x19daab,_0x2dddf2){return _0x19daab+_0x2dddf2;},'UtVVV':'hid=','KRKMn':_0x27dfe2(0x62f)+'VE','gaRks':function(_0x1505f7,_0x432183){return _0x1505f7(_0x432183);},'zqvCb':_0x27dfe2(0x3c1),'IRAKe':function(_0x150168,_0x41d4f1){return _0x150168(_0x41d4f1);},'XqLFB':_0x27dfe2(0x340),'cImWG':function(_0x405b04,_0x4b0448){return _0x405b04===_0x4b0448;},'UgxrU':function(_0x379550,_0x218c6f){return _0x379550!==_0x218c6f;},'sRzjy':_0x27dfe2(0x567),'OCmPK':function(_0x1ca64a,_0x4de36b){return _0x1ca64a!==_0x4de36b;},'doIeL':function(_0x4bdae3,_0x1b04cd){return _0x4bdae3(_0x1b04cd);},'bfnWo':function(_0x15feed,_0x6e2633){return _0x15feed*_0x6e2633;},'NXPUy':_0x27dfe2(0x816)+_0x27dfe2(0x962)+'nce','xRbzf':_0x27dfe2(0x816)+_0x27dfe2(0x4e7),'YPSib':_0x27dfe2(0x121),'MPKFD':'unity'+_0x27dfe2(0x962)+'nceWr'+_0x27dfe2(0x269),'IuHMH':function(_0x553152,_0x165645){return _0x553152===_0x165645;},'MXKMA':_0x27dfe2(0x10e)+'·\x20','WysMm':'EOepr','LySFX':function(_0xe20d90,_0x11a9f4){return _0xe20d90+_0x11a9f4;},'DlFWZ':'paddi'+_0x27dfe2(0x9ac)+_0x27dfe2(0x994)+_0x27dfe2(0x11f)+'x/1.3'+'\x20ui-m'+'onosp'+'ace,C'+_0x27dfe2(0xa2f)+'as,mo'+_0x27dfe2(0x671)+'ce;co'+_0x27dfe2(0x8e5)+_0x27dfe2(0x29f)+'9;','CzIQF':_0x27dfe2(0x1ca)+'as\x20id'+_0x27dfe2(0x7c0)+_0x27dfe2(0xa06)+'sp-cv'+'\x22\x20wid'+'th=\x221'+_0x27dfe2(0xaa8)+_0x27dfe2(0x726)+'=\x22160'+_0x27dfe2(0x434)+_0x27dfe2(0xb00)+_0x27dfe2(0x768)+_0x27dfe2(0xa09)+_0x27dfe2(0x6e7)+_0x27dfe2(0x76c)+_0x27dfe2(0x7b1),'vnjoM':function(_0x3eb266,_0x1e973e){return _0x3eb266+_0x1e973e;},'OQWXc':function(_0x18292c,_0x54344c){return _0x18292c===_0x54344c;},'UBOhk':_0x27dfe2(0x50d),'naEiy':_0x27dfe2(0x951),'zttwx':_0x27dfe2(0xb4b)+'r','Ixavu':function(_0x25f71a,_0x207565){return _0x25f71a!==_0x207565;},'UgMAo':function(_0x5581a2){return _0x5581a2();},'beAKc':function(_0x5d29e0,_0x3bbc45){return _0x5d29e0(_0x3bbc45);},'fbAxM':_0x27dfe2(0x4cb),'GHohi':function(_0xd7e595){return _0xd7e595();},'GIrVp':function(_0x50dec1,_0xe6ba03,_0x1247e2){return _0x50dec1(_0xe6ba03,_0x1247e2);},'jhFEG':'sQdne','GefSZ':_0x27dfe2(0x90c)+_0x27dfe2(0x66d),'SHvMT':_0x27dfe2(0x742),'qsAxB':'onvxF','SVNPM':'sakur'+_0x27dfe2(0x73b)+'hud-c'+'ss','CqLZr':_0x27dfe2(0x23b)+_0x27dfe2(0x73b)+_0x27dfe2(0x45e),'MZVgV':_0x27dfe2(0x21e)+_0x27dfe2(0x637)+':rgba'+'(21,1'+'2,29,'+'.92);'+_0x27dfe2(0xac8)+'r:1px'+_0x27dfe2(0x701)+_0x27dfe2(0x10f)+'a(255'+',143,'+_0x27dfe2(0x8a0)+'45);b'+'order'+'-radi'+'us:10'+'px;','WWeGN':_0x27dfe2(0x76e)+_0x27dfe2(0x1f8)+_0x27dfe2(0x82b)+_0x27dfe2(0x9f7)+_0x27dfe2(0x2f9)+_0x27dfe2(0x410)+_0x27dfe2(0x794)+'ser-s'+_0x27dfe2(0x124)+':none'+_0x27dfe2(0x5b9)+_0x27dfe2(0x428)+'ser-s'+_0x27dfe2(0x124)+_0x27dfe2(0x5ef)+';','vCToc':function(_0x45cfaf,_0x422e37){return _0x45cfaf+_0x422e37;},'TxtfZ':function(_0x101469,_0x207c83){return _0x101469+_0x207c83;},'SFspK':function(_0x1b2e5d,_0x59d3e7){return _0x1b2e5d+_0x59d3e7;},'FFQvG':function(_0x21b2d2,_0x5e75c2){return _0x21b2d2+_0x5e75c2;},'cMwdP':function(_0x2e6584,_0x1a22a1){return _0x2e6584+_0x1a22a1;},'JrgVE':'<b\x20st'+_0x27dfe2(0x4dc)+_0x27dfe2(0x835)+':','eVrQv':_0x27dfe2(0xa5c)+'on\x20da'+'ta-a='+_0x27dfe2(0x308)+'style'+_0x27dfe2(0xabb)+_0x27dfe2(0xa99)+'nd:tr'+_0x27dfe2(0x424)+_0x27dfe2(0x293)+_0x27dfe2(0xac8)+_0x27dfe2(0x8e3)+_0x27dfe2(0x701)+'d\x20rgb'+'a(255'+',143,'+_0x27dfe2(0x8a0)+_0x27dfe2(0x2da),'KaJkk':'color'+':#f7e'+'ef5;b'+_0x27dfe2(0x724)+_0x27dfe2(0x8a2)+_0x27dfe2(0x636)+_0x27dfe2(0x4a4)+_0x27dfe2(0xad0)+_0x27dfe2(0xb2d)+_0x27dfe2(0x125)+_0x27dfe2(0x45b)+_0x27dfe2(0x864)+_0x27dfe2(0x7a3)+_0x27dfe2(0x838)+_0x27dfe2(0x429)+_0x27dfe2(0x635)+'eed\x20o'+_0x27dfe2(0x9f6)+_0x27dfe2(0x77c)+'>','hVanI':_0x27dfe2(0xa5c)+_0x27dfe2(0x22d)+'ta-a='+_0x27dfe2(0x645)+_0x27dfe2(0x19d)+'e=\x22ba'+_0x27dfe2(0x875)+_0x27dfe2(0x2c1)+_0x27dfe2(0x5cf)+_0x27dfe2(0x8fd)+';bord'+'er:1p'+_0x27dfe2(0x601)+_0x27dfe2(0x412)+_0x27dfe2(0x9db)+_0x27dfe2(0x9a3)+',177,'+'.45);','kdfAm':_0x27dfe2(0x835)+_0x27dfe2(0x85a)+'ef5;b'+_0x27dfe2(0x724)+_0x27dfe2(0x8a2)+'us:6p'+'x;pad'+_0x27dfe2(0xad0)+_0x27dfe2(0x38e)+'px;cu'+'rsor:'+'point'+_0x27dfe2(0x7a3)+_0x27dfe2(0x838)+'herit'+_0x27dfe2(0x140)+_0x27dfe2(0x841)+'/butt'+_0x27dfe2(0x27d),'PDsOt':'color'+_0x27dfe2(0x85a)+'ef5;b'+'order'+_0x27dfe2(0x8a2)+'us:6p'+'x;pad'+_0x27dfe2(0xad0)+_0x27dfe2(0x38e)+_0x27dfe2(0x125)+_0x27dfe2(0x45b)+'point'+'er;fo'+'nt:in'+_0x27dfe2(0x429)+_0x27dfe2(0x89e)+'ap</b'+_0x27dfe2(0x77c)+'>','PcXqU':'<butt'+_0x27dfe2(0x22d)+'ta-a='+_0x27dfe2(0x1bf)+'\x22\x20sty'+_0x27dfe2(0x817)+_0x27dfe2(0x51d)+_0x27dfe2(0x43a)+_0x27dfe2(0x84f)+_0x27dfe2(0xaf0)+_0x27dfe2(0x2d9)+'d:tra'+_0x27dfe2(0x733)+'ent;b'+_0x27dfe2(0x724)+_0x27dfe2(0x623)+_0x27dfe2(0xa71)+_0x27dfe2(0x532)+'(255,'+_0x27dfe2(0x753)+_0x27dfe2(0x577)+'5);','qBxaN':_0x27dfe2(0x1ee),'mAzKS':function(_0x3ba188,_0x106694){return _0x3ba188(_0x106694);},'jXIkW':function(_0x2a5d08,_0x1e8d6f){return _0x2a5d08(_0x1e8d6f);},'DViJE':function(_0x3350fc,_0x3e3559){return _0x3350fc(_0x3e3559);},'VgInc':_0x27dfe2(0x832),'dPMiM':'%c[sa'+'kura]'+_0x27dfe2(0x1bb)+'rame\x20'+'HUD\x20d'+_0x27dfe2(0x9fd)+'ed','OuxFW':_0x27dfe2(0x247)+'1b','ryTjw':'JatkZ','XewWN':_0x27dfe2(0x5f2),'uLuEq':'XGxiH','zRvqo':function(_0x38cded,_0x1cd13c){return _0x38cded!==_0x1cd13c;},'tRQDC':'no-me'+'m','SPDnX':function(_0x2271c2,_0x105ca0){return _0x2271c2+_0x105ca0;},'xoJjC':function(_0x291cb9,_0x4067f3){return _0x291cb9+_0x4067f3;},'ogxwT':function(_0x13d48b,_0x51661e){return _0x13d48b+_0x51661e;},'bWsxW':function(_0x34044f,_0x38a8b9){return _0x34044f!==_0x38a8b9;},'WuHrC':_0x27dfe2(0x3e2),'ysXZH':function(_0x39a617,_0x181bd7){return _0x39a617===_0x181bd7;},'mBkHI':'Inser'+'t','ZQRiS':function(_0x384f0a,_0x388a02){return _0x384f0a!==_0x388a02;},'jqBif':_0x27dfe2(0xa10),'Jiwwh':'Brack'+'etRig'+'ht','iosbP':function(_0x5d0b02,_0x101610){return _0x5d0b02+_0x101610;},'fOFbp':'fiehe','SVSiA':function(_0x6cf53d,_0x46cb5d){return _0x6cf53d<_0x46cb5d;},'upvjt':_0x27dfe2(0x11c)+_0x27dfe2(0x1e9)+'orkSy'+'nc','xjEEw':function(_0x3509ec,_0x582116){return _0x3509ec===_0x582116;},'IHmlX':function(_0x19f205,_0x403825,_0x5415f8){return _0x19f205(_0x403825,_0x5415f8);},'pNVLF':_0x27dfe2(0xae4),'vUfzW':_0x27dfe2(0x70d),'NhXdh':function(_0xa523a1,_0x1b74a1){return _0xa523a1+_0x1b74a1;},'KboCh':function(_0x44a3f8,_0xf807c8){return _0x44a3f8!==_0xf807c8;},'miNzs':function(_0x408d40){return _0x408d40();},'cSYUy':function(_0x148f7d,_0x4adb21,_0x19de22){return _0x148f7d(_0x4adb21,_0x19de22);},'GIvsO':function(_0x2c7c29,_0x58b416){return _0x2c7c29+_0x58b416;},'mPFfD':function(_0x57f11c,_0x198fc5){return _0x57f11c!==_0x198fc5;},'MzASE':function(_0xb0bdaf,_0x4bd06e){return _0xb0bdaf+_0x4bd06e;},'RsFwZ':function(_0x49b056,_0x111d06){return _0x49b056*_0x111d06;},'kxqOH':function(_0x33ae4d,_0x582793){return _0x33ae4d/_0x582793;},'XkSQp':function(_0x2b3f45,_0x2466d9){return _0x2b3f45+_0x2466d9;},'IxiiI':function(_0x3c4e50,_0x539f0f){return _0x3c4e50*_0x539f0f;},'dTfmu':function(_0x499e2d,_0x1abdce){return _0x499e2d<=_0x1abdce;},'VxYIG':function(_0x2304ee,_0x4b918d){return _0x2304ee+_0x4b918d;},'uYIsH':function(_0x387588,_0x516521){return _0x387588*_0x516521;},'BWvWr':function(_0xa78f05,_0x10517a){return _0xa78f05*_0x10517a;},'VepID':function(_0x116ca7,_0x11804d){return _0x116ca7*_0x11804d;},'ruaVX':function(_0xba3660,_0x11b272){return _0xba3660*_0x11b272;},'SGtRT':function(_0x1e7021,_0x86edee){return _0x1e7021/_0x86edee;},'zBQFV':function(_0x349cb9,_0x62e237){return _0x349cb9<_0x62e237;},'sSgnG':function(_0x20b32,_0x5eee7e){return _0x20b32*_0x5eee7e;},'DOLDx':function(_0x5c7a7e,_0x1e0662){return _0x5c7a7e*_0x1e0662;},'uCakI':function(_0x255761,_0x222922){return _0x255761*_0x222922;},'HgtvC':function(_0x257a02,_0x389826,_0x12f80b){return _0x257a02(_0x389826,_0x12f80b);},'iuZGD':function(_0x420c69,_0x3d98aa,_0x45777b){return _0x420c69(_0x3d98aa,_0x45777b);},'wUTCL':'sk-ca'+_0x27dfe2(0x392)+'tle','bclIp':_0x27dfe2(0xaee),'DRErk':_0x27dfe2(0x481),'JDZqf':'true','WHlom':_0x27dfe2(0x2cd),'IntHf':_0x27dfe2(0x8ed),'nuLzr':function(_0xa1ca2){return _0xa1ca2();},'ZVRaD':function(_0x15d0e7,_0x54b3ac,_0xf91da3){return _0x15d0e7(_0x54b3ac,_0xf91da3);},'YwFYy':'2|0|3'+'|4|1','PvrNG':function(_0x415b7e){return _0x415b7e();},'GtGZO':function(_0x1ed611,_0xc1328b){return _0x1ed611===_0xc1328b;},'DxxHL':_0x27dfe2(0xb45),'cpten':function(_0x1be998,_0x200d29,_0x5ec699){return _0x1be998(_0x200d29,_0x5ec699);},'ysXUk':function(_0x158182,_0x3f5d89){return _0x158182(_0x3f5d89);},'XslHx':_0x27dfe2(0x54b)+'l','YIwmK':_0x27dfe2(0x9fa)+'l','CBCdT':'sk-la'+'bel','OmASe':function(_0x3d2c36,_0xf137af){return _0x3d2c36+_0xf137af;},'URWrc':_0x27dfe2(0x3d4)+'n>','Apdgh':'\x20·\x20','YBMEd':function(_0x3155ce,_0x387351){return _0x3155ce+_0x387351;},'napJV':_0x27dfe2(0x998)+'am','qsGNO':'MAWXQ','dtWOV':function(_0x451ff2,_0x206081){return _0x451ff2/_0x206081;},'ckYOh':function(_0x7443a,_0x4f4510){return _0x7443a(_0x4f4510);},'WSVvD':'3|7|2'+_0x27dfe2(0xa8f)+_0x27dfe2(0x478)+'|8|5','PlJoT':function(_0x25bc9f,_0x2a5033,_0x576643){return _0x25bc9f(_0x2a5033,_0x576643);},'LiYfB':'right','EtOmS':function(_0x744025,_0x370ff6){return _0x744025===_0x370ff6;},'qOSPS':'BjUYI','XDQDO':_0x27dfe2(0xa66),'BCWkx':function(_0x5992bb,_0x483c87){return _0x5992bb/_0x483c87;},'vvqOP':function(_0x1483a8,_0x18e6cb){return _0x1483a8*_0x18e6cb;},'Lyhsg':'EAAMx','RRuBI':_0x27dfe2(0x61e)+'es','dPWlM':_0x27dfe2(0x250)+_0x27dfe2(0xac5)+'3|6','UxtXh':_0x27dfe2(0x7a5),'owSqU':function(_0x1d40b7,_0x1f4f97){return _0x1d40b7-_0x1f4f97;},'OkhaT':function(_0xb20b3a,_0x451731){return _0xb20b3a!==_0x451731;},'QdHab':_0x27dfe2(0x64f),'xvOsK':_0x27dfe2(0x305),'eKFmK':_0x27dfe2(0x1fa)+_0x27dfe2(0x785),'GBTuM':_0x27dfe2(0x394)+_0x27dfe2(0x92d),'QlYiv':function(_0x56aeb9,_0x1ffaf4){return _0x56aeb9+_0x1ffaf4;},'uBUAJ':function(_0x20d248,_0xec9961){return _0x20d248+_0xec9961;},'vlKzA':'\x20on\x20','pxaBL':_0x27dfe2(0x504)+_0x27dfe2(0x7a8)+_0x27dfe2(0x24d)+'ment-'+'speed'+'\x20fiel'+_0x27dfe2(0xb57)+'ly.\x20H'+_0x27dfe2(0x726)+_0x27dfe2(0x8c4)+_0x27dfe2(0x9fb)+_0x27dfe2(0x6ae)+'\x20are\x20'+'refus'+_0x27dfe2(0x8a1),'YyzYm':function(_0x4c2d83,_0x2d9a67){return _0x4c2d83(_0x2d9a67);},'zbZTY':function(_0x39dcc5,_0xe70c69,_0x1ffdb6,_0x745611,_0x3e7f43,_0x38333d){return _0x39dcc5(_0xe70c69,_0x1ffdb6,_0x745611,_0x3e7f43,_0x38333d);},'pgzwc':_0x27dfe2(0x504)+_0x27dfe2(0x278),'GUAAe':_0x27dfe2(0xa26)+'te','FJKqI':function(_0xbbfaf3,_0x5744e5){return _0xbbfaf3+_0x5744e5;},'AkWyi':_0x27dfe2(0xae1)+_0x27dfe2(0x1d9),'bhjKD':function(_0x1ad55b,_0x305e51,_0x4ecef4,_0x1d235d){return _0x1ad55b(_0x305e51,_0x4ecef4,_0x1d235d);},'GlOOR':function(_0x271b0f,_0x5867ea){return _0x271b0f===_0x5867ea;},'LBHYh':_0x27dfe2(0x4ef)+_0x27dfe2(0x91d)+_0x27dfe2(0x524)+'imap,'+_0x27dfe2(0x6f6)+_0x27dfe2(0x153)+_0x27dfe2(0x663)+_0x27dfe2(0xb57)+'ly\x20po'+_0x27dfe2(0x4f3)+'ns.','GwYTE':function(_0x1916b4,_0x49ed7a,_0x5a82bb){return _0x1916b4(_0x49ed7a,_0x5a82bb);},'HzENZ':'Range','Zgljh':'world'+'\x20unit'+_0x27dfe2(0x5cd)+_0x27dfe2(0x260)+_0x27dfe2(0x1e6)+'dar','rgFQe':'Boxes','mflUz':function(_0x459497,_0x151e12,_0x3ae3c7){return _0x459497(_0x151e12,_0x3ae3c7);},'gxvhL':function(_0xf0e2b2,_0x2f9f6b,_0x38f680,_0x261db5,_0x2ace58,_0xd09c59){return _0xf0e2b2(_0x2f9f6b,_0x38f680,_0x261db5,_0x2ace58,_0xd09c59);},'AhxmV':_0x27dfe2(0xac3)+_0x27dfe2(0x784)+_0x27dfe2(0x912),'MPrJn':_0x27dfe2(0x732)+'\x20','mNpWm':function(_0x3b8d02,_0x264f3a){return _0x3b8d02+_0x264f3a;},'EeHrm':function(_0x576022,_0x110304){return _0x576022+_0x110304;},'uOLyV':_0x27dfe2(0x213)+'Look\x20','TSgaD':'no\x20Mo'+_0x27dfe2(0x6a3)+_0x27dfe2(0x761)+'t','FbJBy':'value'+'s','KuMXK':_0x27dfe2(0x37a),'TSlTG':'VERSI'+'ON','gRjmE':'Hooks','PweRV':_0x27dfe2(0x8fb)+'ed\x20/\x20'+_0x27dfe2(0x21c)+'tered','ChCgn':function(_0x4a4df3,_0x492cec){return _0x4a4df3+_0x492cec;},'BIONX':_0x27dfe2(0xa13),'XdltD':'Heap','uIwZI':'\x20MB\x20@'+'\x20','ZyCCJ':'Playe'+'rs','lWixu':_0x27dfe2(0x23e)+'es','iCTDJ':'Playe'+'r','hpbkz':'FPSco'+_0x27dfe2(0x437)+'ler+0'+_0x27dfe2(0x2fd),'QdFDT':_0x27dfe2(0x890),'tMBAM':_0x27dfe2(0xb54)+'8','TPpZz':_0x27dfe2(0x92e)+_0x27dfe2(0x48f),'WQEJr':'0x10','ILIHR':function(_0x14cd41,_0x31dca4,_0x2bf296,_0x5182a2){return _0x14cd41(_0x31dca4,_0x2bf296,_0x5182a2);},'oqPVE':_0x27dfe2(0x3db)+'hScri'+'pt+0x'+'C0','vdEVd':_0x27dfe2(0x579)+'|3|1|'+'5|8|7'+'|6|0','LazBu':function(_0x460d52,_0x55511b,_0x42a930){return _0x460d52(_0x55511b,_0x42a930);},'MZBzQ':_0x27dfe2(0x368),'gyGDb':function(_0x403a2c,_0x1265a8,_0x39e1c7){return _0x403a2c(_0x1265a8,_0x39e1c7);},'yqchu':_0x27dfe2(0x6c0)+_0x27dfe2(0x757)+'s','MQIwp':'no\x20wa'+'rning'+'s','CDJpZ':function(_0x40e744,_0x2a3b7b,_0x3244ff,_0x31df13){return _0x40e744(_0x2a3b7b,_0x3244ff,_0x31df13);},'rWShV':_0x27dfe2(0x2dd)+'t','RkpCi':'sk-bt'+'n','HlIkp':_0x27dfe2(0xabe)+_0x27dfe2(0x3a2)+_0x27dfe2(0xb27)+_0x27dfe2(0x426)+'rd','baFid':'QfEIO','CjgeW':function(_0x45aeb6,_0x1f4884){return _0x45aeb6===_0x1f4884;},'CRCZd':function(_0xaf83d5,_0x3b3932){return _0xaf83d5-_0x3b3932;},'AscPd':function(_0x3f90a2,_0x426855){return _0x3f90a2!==_0x426855;},'MkacH':_0x27dfe2(0x376),'ADfdY':function(_0x25bf59){return _0x25bf59();},'uFcIP':_0x27dfe2(0x96d)+_0x27dfe2(0x2ce),'dahFm':'grab','HcTBk':_0x27dfe2(0x3f5)+'down','qWRpW':'mouse'+'up','HjPhN':_0x27dfe2(0x284)+'start','ShxCT':'6|2|2'+'1|31|'+_0x27dfe2(0x26e)+_0x27dfe2(0x910)+_0x27dfe2(0x95f)+'5|10|'+'13|36'+_0x27dfe2(0x302)+_0x27dfe2(0x811)+'0|43|'+'27|3|'+_0x27dfe2(0x4cf)+_0x27dfe2(0x981)+'|15|1'+_0x27dfe2(0x904)+_0x27dfe2(0x31d)+_0x27dfe2(0x205)+_0x27dfe2(0x267)+_0x27dfe2(0x5a3)+'|1|33'+_0x27dfe2(0x791)+_0x27dfe2(0x2a7)+_0x27dfe2(0x29b)+'45|4|'+_0x27dfe2(0xa3f)+'28','dDeaH':function(_0x96f381,_0x33840d,_0x2d0183,_0x3b793c){return _0x96f381(_0x33840d,_0x2d0183,_0x3b793c);},'rlkAd':function(_0x5dc5ff,_0x6217db,_0x2ddd4a){return _0x5dc5ff(_0x6217db,_0x2ddd4a);},'lZFzf':_0x27dfe2(0x65d),'HeObY':'start'+_0x27dfe2(0x9f2),'SPONF':function(_0x1acd50,_0x575335,_0x1eb897){return _0x1acd50(_0x575335,_0x1eb897);},'Ikind':_0x27dfe2(0x232)+'de','boPLm':_0x27dfe2(0x69d)+_0x27dfe2(0x9c9),'MvCbW':'mn-pa'+'nel','erjKx':function(_0x447d09,_0x117e91,_0x2842b3){return _0x447d09(_0x117e91,_0x2842b3);},'XTBRZ':_0x27dfe2(0x96b)+'|1|5|'+_0x27dfe2(0x7fd),'LbUqK':_0x27dfe2(0x8fe)+'tles','wqpLv':function(_0x524549,_0x47a0c7,_0x4d0e99){return _0x524549(_0x47a0c7,_0x4d0e99);},'LhXOv':_0x27dfe2(0x97c),'jDgbY':_0x27dfe2(0x397)+_0x27dfe2(0x3d5)+'\x20menu'+'\x20unav'+_0x27dfe2(0x32b)+'le','BWgdJ':function(_0xa816bc,_0x238cb9){return _0xa816bc<_0x238cb9;},'PxCDP':function(_0x13ace1,_0x379954){return _0x13ace1+_0x379954;},'SClBQ':function(_0x4a1902,_0xcf7280){return _0x4a1902(_0xcf7280);},'tBrBR':'sakur'+_0x27dfe2(0x1de),'dcJML':'<div\x20'+'id=\x22s'+_0x27dfe2(0xb38)+_0x27dfe2(0x5e3)+_0x27dfe2(0x5c8)+_0x27dfe2(0x4ec)+_0x27dfe2(0x597)+_0x27dfe2(0x646)+_0x27dfe2(0x298)+_0x27dfe2(0x303)+_0x27dfe2(0x697)+'>','RtaMn':function(_0x489050,_0x1d1686){return _0x489050!==_0x1d1686;},'oRiry':_0x27dfe2(0x658),'EKISE':_0x27dfe2(0x1b1),'kfQHZ':_0x27dfe2(0x2dc),'jcoXN':function(_0x576025,_0x58473d){return _0x576025(_0x58473d);},'TrNFQ':function(_0x4c5bd0,_0x5ada24){return _0x4c5bd0+_0x5ada24;},'UeiCp':function(_0x1b1ade,_0x1cf30a){return _0x1b1ade*_0x1cf30a;},'rJSKa':_0x27dfe2(0x1b0),'lOFbi':_0x27dfe2(0x7a4),'SVBez':function(_0x521e93,_0x2d1499){return _0x521e93+_0x2d1499;},'RXrgj':function(_0x108a48,_0x1cdc62){return _0x108a48+_0x1cdc62;},'PKNNV':function(_0x105ae1,_0x31578b){return _0x105ae1+_0x31578b;},'Cswhf':function(_0x2479e6,_0x1acb20){return _0x2479e6+_0x1acb20;},'poFaU':function(_0xaa9101,_0x4f3b58){return _0xaa9101+_0x4f3b58;},'pvvIk':function(_0x432338,_0xa3c543){return _0x432338+_0xa3c543;},'YSXCd':_0x27dfe2(0x55c)+_0x27dfe2(0x886)+'rs\x20','gQaDK':function(_0x396082,_0x27f453){return _0x396082/_0x27f453;},'Wztbb':_0x27dfe2(0xb03)+_0x27dfe2(0x4b6),'OSbJx':_0x27dfe2(0xaf8),'vXvfq':function(_0x54353f,_0xc6525){return _0x54353f===_0xc6525;},'DFVGN':function(_0x454b5,_0x1c1e98){return _0x454b5+_0x1c1e98;},'lMUSu':function(_0x2d357f,_0x4b2150){return _0x2d357f===_0x4b2150;},'ugyQj':'from\x20'+_0x27dfe2(0x756)+'ntiat'+_0x27dfe2(0x40c),'LouXZ':function(_0x435d3d,_0x37130c){return _0x435d3d===_0x37130c;},'pTDAu':function(_0x36834b,_0x1693b0){return _0x36834b===_0x1693b0;},'zHZKd':function(_0x5b98d2,_0x4b34aa){return _0x5b98d2+_0x4b34aa;},'EHRGl':function(_0x2f5b99,_0x2565bf){return _0x2f5b99+_0x2565bf;},'suKQU':_0x27dfe2(0x372)+_0x27dfe2(0x847)+'3','AwOHS':function(_0x259b17,_0x1def0e){return _0x259b17+_0x1def0e;},'NUiXv':function(_0x4d6894){return _0x4d6894();},'cpAFX':function(_0x34437b,_0x532806){return _0x34437b<_0x532806;},'cwxcr':function(_0x2f355f,_0x593e28){return _0x2f355f===_0x593e28;},'MgfBm':function(_0x413203,_0x2635e9){return _0x413203-_0x2635e9;},'NOQda':_0x27dfe2(0x52e)+'|9|3|'+_0x27dfe2(0x3ce)+_0x27dfe2(0x744),'uKAia':function(_0x29bc61,_0x42bc37){return _0x29bc61+_0x42bc37;},'bbiZu':_0x27dfe2(0xaba)+_0x27dfe2(0xab1)+_0x27dfe2(0x3cb)+'right'+_0x27dfe2(0xa78)+_0x27dfe2(0x7cd)+_0x27dfe2(0x5bd)+_0x27dfe2(0x142)+'ex:21'+'47483'+_0x27dfe2(0xa79)+'ointe'+'r-eve'+'nts:n'+_0x27dfe2(0x237),'TLudx':'canva'+'s','gjbwA':_0x27dfe2(0xaba)+_0x27dfe2(0xab1)+'ixed;'+_0x27dfe2(0x809)+'0;top'+':0;z-'+'index'+':2147'+'48364'+'5;poi'+_0x27dfe2(0x9c0)+'event'+_0x27dfe2(0xb55)+'e;','ACqEI':_0x27dfe2(0x23b)+_0x27dfe2(0x6c2)+'es','OppLy':function(_0x4ceb60,_0x4eea3e){return _0x4ceb60!==_0x4eea3e;},'MGhGb':function(_0x35f886,_0x23ed99){return _0x35f886!==_0x23ed99;},'RQefa':function(_0xbb0494,_0x54852e){return _0xbb0494===_0x54852e;},'iLzQf':_0x27dfe2(0x93d),'HEfmi':_0x27dfe2(0x3f9),'jdvLt':function(_0xe9ede,_0x11c636){return _0xe9ede-_0x11c636;},'OOpbt':function(_0x57dfac,_0x102dc6){return _0x57dfac+_0x102dc6;},'ZWHSh':function(_0x8add3b,_0x3c9cf0){return _0x8add3b/_0x3c9cf0;},'LWbVn':'rgba('+_0x27dfe2(0x5af)+_0x27dfe2(0x613)+_0x27dfe2(0x4bf),'WQQnL':function(_0x2f5bb8,_0x5df45c){return _0x2f5bb8/_0x5df45c;},'kjRlT':function(_0x54b203,_0x41ebdf){return _0x54b203+_0x41ebdf;},'OLwtO':function(_0x1b3da2,_0x55737b){return _0x1b3da2(_0x55737b);},'jHWxl':function(_0x326e54){return _0x326e54();},'Ybnfh':function(_0x2217f8,_0x1cbc90){return _0x2217f8*_0x1cbc90;},'thyVv':function(_0x44166a,_0x3e8665,_0x5e1530,_0x131d13){return _0x44166a(_0x3e8665,_0x5e1530,_0x131d13);},'FIlXu':'AkwnF','aKQpt':function(_0x37d344,_0x41510c){return _0x37d344*_0x41510c;},'huayU':function(_0x3b23b2,_0x97a153){return _0x3b23b2/_0x97a153;},'dDtwo':function(_0x11e581,_0x153429){return _0x11e581===_0x153429;},'imlep':function(_0x5fa278,_0xe8392){return _0x5fa278+_0xe8392;},'NqkLz':function(_0x5c9480,_0x312112){return _0x5c9480+_0x312112;},'mpwUb':_0x27dfe2(0x820)+'v\x20','uiyeL':function(_0x45442a,_0x2e9991){return _0x45442a!==_0x2e9991;},'aXCiI':function(_0x36e3b1,_0x47d299){return _0x36e3b1+_0x47d299;},'TtFMh':'KPNrZ','EYWsp':function(_0x4a0864,_0x4f6230){return _0x4a0864(_0x4f6230);},'cyDSI':function(_0x482ba2,_0x468cb9,_0x41dc4f){return _0x482ba2(_0x468cb9,_0x41dc4f);},'wgRel':function(_0x3f8260,_0x2639d7){return _0x3f8260(_0x2639d7);},'YzPRM':function(_0x5a1e64){return _0x5a1e64();},'NOgBn':_0x27dfe2(0x6a1),'VrOpc':_0x27dfe2(0x538)+'ed:\x20','gNUAt':function(_0x5a7de4,_0x271c26){return _0x5a7de4(_0x271c26);},'dOHDR':function(_0x5310a1,_0x47a6c9){return _0x5310a1-_0x47a6c9;},'Ueufi':function(_0x835ade){return _0x835ade();},'DZgXo':_0x27dfe2(0x8cd)+_0x27dfe2(0xb01)+'y\x20a\x20d'+_0x27dfe2(0x640)+_0x27dfe2(0xa3a)+'nstan'+_0x27dfe2(0x275)+'o\x20we\x20'+_0x27dfe2(0x82a)+_0x27dfe2(0xaa9)+_0x27dfe2(0x11b)+_0x27dfe2(0x6b3)+_0x27dfe2(0x5a9)+_0x27dfe2(0x8b1)+'r\x20','RpKHM':'the\x20g'+_0x27dfe2(0x4bb)+_0x27dfe2(0x7de)+'the\x20o'+_0x27dfe2(0x638)+_0x27dfe2(0xaaf)+'\x20it\x20i'+'s\x20orp'+'haned'+_0x27dfe2(0x209)+_0x27dfe2(0xa04)+'every'+_0x27dfe2(0xa56)+'r\x20','YgEPI':_0x27dfe2(0x319)+'a/UWM'+'K\x20scr'+_0x27dfe2(0x780)+'n\x20Tam'+_0x27dfe2(0x928)+'nkey\x20'+_0x27dfe2(0x452)+_0x27dfe2(0x1ef)+'eload'+'.','AQuQR':function(_0x5d9792,_0x2b420d){return _0x5d9792!==_0x2b420d;},'kWZJJ':function(_0x39c76d,_0x39616a){return _0x39c76d+_0x39616a;},'WIoVa':function(_0x4c4816,_0x2a420a){return _0x4c4816+_0x2a420a;},'kyZFs':_0x27dfe2(0x68a)+_0x27dfe2(0x7a6)+_0x27dfe2(0x167)+'t\x20','tAadt':_0x27dfe2(0x199)+'rce:\x20','JoNpD':function(_0x210688,_0x380579){return _0x210688+_0x380579;},'NaWGi':_0x27dfe2(0x5e6)+_0x27dfe2(0xb3e)+'ance\x20'+'not\x20r'+_0x27dfe2(0x4f0)+_0x27dfe2(0x385)+'t\x20(so'+_0x27dfe2(0x297)+'\x20','rOCTr':_0x27dfe2(0x5ea)+_0x27dfe2(0x52b)+_0x27dfe2(0x3ee)+'g\x20Web'+_0x27dfe2(0xaf7)+_0x27dfe2(0x4e2)+_0x27dfe2(0x23f)+_0x27dfe2(0x707)+_0x27dfe2(0x403)+'snaps'+_0x27dfe2(0x131)+_0x27dfe2(0xa5f)+'n.hoo'+'ks.le'+_0x27dfe2(0xa8d)+'\x20','XcrUB':'so\x20ho'+_0x27dfe2(0x12c)+'egist'+_0x27dfe2(0xa58)+'after'+'\x20it\x20a'+_0x27dfe2(0x106)+'nored'+_0x27dfe2(0xb1a)+'the\x20l'+_0x27dfe2(0x3ef)+_0x27dfe2(0x6cb)+_0x27dfe2(0x9e2)+'.\x20','GbqSg':_0x27dfe2(0x2ab)+_0x27dfe2(0xb1d)+'uring'+_0x27dfe2(0x280)+_0x27dfe2(0x7b0)+'\x20docu'+_0x27dfe2(0x54c)+_0x27dfe2(0x155)+'.','yfiHz':'UWMK\x20'+'resol'+_0x27dfe2(0x4f5),'GfvLV':_0x27dfe2(0x681)+_0x27dfe2(0x777)+'\x20are\x20'+_0x27dfe2(0x560)+_0x27dfe2(0x44a)+_0x27dfe2(0x4c9)+_0x27dfe2(0x7f1)+'he\x20ho'+_0x27dfe2(0x9f5)+'\x20on\x20t'+'he\x20wr'+'ong\x20o'+_0x27dfe2(0x952)+_0x27dfe2(0xa4c),'MyZRS':function(_0x588bea,_0x934019){return _0x588bea===_0x934019;},'qGOcZ':function(_0xa42090,_0xe1521f){return _0xa42090-_0xe1521f;},'gGhwj':function(_0x21e374){return _0x21e374();},'jrPBv':'porta'+'l','RFDtD':_0x27dfe2(0x886)+'r','rKeJB':_0x27dfe2(0x932)+_0x27dfe2(0x178)+_0x27dfe2(0x99f)+'WARZ-'+'BEGIN'+'===','JDJce':'===SA'+_0x27dfe2(0x178)+_0x27dfe2(0x99f)+_0x27dfe2(0xb36)+_0x27dfe2(0x7c9)+'=','sDyZC':'%c[sa'+'kura]'+_0x27dfe2(0x552)+'RAPPE'+'R\x20ACT'+_0x27dfe2(0x75c)+_0x27dfe2(0x454)+'\x20up+d'+'own)','BawNJ':'%c[sa'+'kura]'+'\x20PORT'+_0x27dfe2(0x18f)+_0x27dfe2(0x6f8),'pSIIt':function(_0x4f550b,_0x49c24f){return _0x4f550b+_0x49c24f;},'fwREr':_0x27dfe2(0x23b)+_0x27dfe2(0x73b)+'panel'+_0x27dfe2(0x2d7)+'en','NxyJR':_0x27dfe2(0x965)+'ge','uwORM':function(_0x40f162){return _0x40f162();},'McUBO':_0x27dfe2(0x397)+'kura]'+_0x27dfe2(0x310)+_0x27dfe2(0x3c9)+'\x20ACTI'+'VE\x20v','klGpE':function(_0xa39a9a,_0x3b20eb){return _0xa39a9a+_0x3b20eb;},'lAWlG':'NPC_C'+_0x27dfe2(0xa4b)+_0x27dfe2(0xb28),'pxPbi':_0x27dfe2(0x9cc)+'Bot','Dzcfq':_0x27dfe2(0x6f4)+_0x27dfe2(0x71d)+_0x27dfe2(0x2a0)+_0x27dfe2(0x157)+'ll','AiwkI':'obfB','pslum':_0x27dfe2(0x3f5)+_0x27dfe2(0x1a3),'YWDAr':_0x27dfe2(0x37d),'nEmNn':_0x27dfe2(0x523)+'h','RkbGp':'targe'+_0x27dfe2(0xa96)+'th2','JpihR':'0xe8','Ggjol':_0x27dfe2(0x371)+'form','vFfSr':'0x58','lcPMx':_0x27dfe2(0x50b),'qmrlo':_0x27dfe2(0xb33)+_0x27dfe2(0x5f8),'GxNeQ':'sakur'+_0x27dfe2(0x73b)+_0x27dfe2(0x620),'ZRbgl':'comba'+'t','iuEdb':_0x27dfe2(0x1d0),'YVwIi':_0x27dfe2(0x245),'qbqSR':_0x27dfe2(0x536),'NMclx':function(_0x21c868,_0x5c1f84){return _0x21c868+_0x5c1f84;},'iXCeA':function(_0x775aae,_0x5d19ce){return _0x775aae+_0x5d19ce;},'sJcHN':function(_0xd691c0,_0x5823d4){return _0xd691c0+_0x5823d4;},'spxZV':function(_0x317954,_0x21bf18){return _0x317954+_0x21bf18;},'XcQev':function(_0x5855f8,_0xb5fa60){return _0x5855f8+_0xb5fa60;},'qSqWb':function(_0x175da0,_0x1bb991){return _0x175da0+_0x1bb991;},'dFWHM':function(_0x23ed13,_0x5b106a){return _0x23ed13+_0x5b106a;},'LSpqo':function(_0xda5a1a,_0x4f3972){return _0xda5a1a+_0x4f3972;},'lbhNv':function(_0x1a4274,_0xaa0805){return _0x1a4274+_0xaa0805;},'FNlLo':function(_0x4cdb22,_0x3d2a0b){return _0x4cdb22+_0x3d2a0b;},'STCQo':'#saku'+'ra-me'+'nu-ro'+'ot.mn'+_0x27dfe2(0x4d6)+'l{pos'+_0x27dfe2(0xa1f)+':fixe'+'d;rig'+_0x27dfe2(0x4d9)+'px;bo'+_0x27dfe2(0x655)+'24px;'+'width'+_0x27dfe2(0xa83)+_0x27dfe2(0x30b)+_0x27dfe2(0xae3)+_0x27dfe2(0x202)+'w\x20-\x204'+_0x27dfe2(0xb3d)+_0x27dfe2(0x559)+'heigh'+_0x27dfe2(0x821)+_0x27dfe2(0x4f1)+'x,cal'+_0x27dfe2(0xb25)+_0x27dfe2(0x69f)+'48px)'+');','RBQbO':_0x27dfe2(0x76e)+_0x27dfe2(0x1f8)+':0\x200\x20'+'0\x201px'+_0x27dfe2(0x532)+_0x27dfe2(0x5e1)+_0x27dfe2(0x2f5)+_0x27dfe2(0x515)+_0x27dfe2(0x730)+_0x27dfe2(0x12b)+_0x27dfe2(0x34f)+'0\x20rgb'+'a(255'+_0x27dfe2(0x234)+_0x27dfe2(0xa76)+_0x27dfe2(0x514)+'\x2030px'+_0x27dfe2(0x4fe)+_0x27dfe2(0x532)+'(0,0,'+'0,.55'+');','isVME':_0x27dfe2(0x835)+_0x27dfe2(0x144)+_0x27dfe2(0x345)+'ont-s'+'ize:1'+'3px;f'+_0x27dfe2(0x2ca)+_0x27dfe2(0x7d1)+':\x22Int'+_0x27dfe2(0xb02)+'Segoe'+_0x27dfe2(0x1d4)+_0x27dfe2(0x9fc)+_0x27dfe2(0x14b)+_0x27dfe2(0x4ed)+_0x27dfe2(0x229)+';}','qmRpK':_0x27dfe2(0x374)+_0x27dfe2(0x902)+'ispla'+_0x27dfe2(0x5d5)+'x;fle'+'x-dir'+_0x27dfe2(0x540)+_0x27dfe2(0x4f8)+'umn;a'+_0x27dfe2(0x911)+_0x27dfe2(0x6e1)+':cent'+_0x27dfe2(0x277)+'p:4px'+_0x27dfe2(0xad6)+_0x27dfe2(0x3eb)+'x;fle'+_0x27dfe2(0x80d)+_0x27dfe2(0x840)+_0x27dfe2(0xad0)+_0x27dfe2(0xa0f)+'0;','rHarj':'borde'+_0x27dfe2(0x13b)+'ius:1'+'6px;b'+_0x27dfe2(0x23d)+'ound:'+_0x27dfe2(0x47c)+_0x27dfe2(0x2f5)+'55,25'+_0x27dfe2(0x301)+_0x27dfe2(0x537)+_0x27dfe2(0x896)+_0x27dfe2(0x1c2)+_0x27dfe2(0x846)+_0x27dfe2(0x4b9)+_0x27dfe2(0x34f)+'rgba('+_0x27dfe2(0x2f5)+'55,25'+_0x27dfe2(0x75b)+_0x27dfe2(0x42e),'lmvXe':_0x27dfe2(0x66a)+_0x27dfe2(0x496)+'ispla'+'y:gri'+_0x27dfe2(0xa85)+'ce-it'+'ems:c'+_0x27dfe2(0x824)+';widt'+_0x27dfe2(0x83c)+_0x27dfe2(0x806)+_0x27dfe2(0x28c)+'2px;m'+'argin'+_0x27dfe2(0x4fb)+_0x27dfe2(0x276)+'x;}','pJdve':'.mn-l'+_0x27dfe2(0x18e)+_0x27dfe2(0xb15)+_0x27dfe2(0x8e6)+'5px;h'+_0x27dfe2(0x726)+':25px'+_0x27dfe2(0xac7)+_0x27dfe2(0x6ef)+'visib'+_0x27dfe2(0x39d)+_0x27dfe2(0x381)+'drop-'+_0x27dfe2(0x611)+_0x27dfe2(0x24e)+_0x27dfe2(0x5fd)+_0x27dfe2(0x47c)+'255,1'+_0x27dfe2(0xabc)+_0x27dfe2(0xab4)+_0x27dfe2(0x42e),'yJSoY':_0x27dfe2(0x991)+'ab{di'+_0x27dfe2(0x598)+_0x27dfe2(0x105)+_0x27dfe2(0x783)+_0x27dfe2(0x40b)+_0x27dfe2(0x3de)+_0x27dfe2(0xaa4)+'justi'+'fy-co'+_0x27dfe2(0x72c)+_0x27dfe2(0xb37)+_0x27dfe2(0x1da)+'dth:5'+_0x27dfe2(0x867)+'eight'+':34px'+';bord'+_0x27dfe2(0x160)+_0x27dfe2(0xac8)+'r-rad'+'ius:1'+'0px;','tSvqA':'backg'+'round'+_0x27dfe2(0x182)+_0x27dfe2(0x5d7)+'nt;co'+_0x27dfe2(0x505)+'gba(2'+_0x27dfe2(0x887)+_0x27dfe2(0x774)+_0x27dfe2(0x6fc)+'curso'+'r:poi'+_0x27dfe2(0xaa4)+_0x27dfe2(0xa88)+'size:'+_0x27dfe2(0x812)+_0x27dfe2(0xa88)+_0x27dfe2(0x61d)+_0x27dfe2(0x139)+_0x27dfe2(0x17b)+'-fami'+'ly:in'+'herit'+';}','KGDht':_0x27dfe2(0x991)+'ab:ho'+'ver{c'+_0x27dfe2(0x63e)+'rgba('+_0x27dfe2(0x5fa)+'38,24'+_0x27dfe2(0x2e8)+';}','SjKov':_0x27dfe2(0x991)+_0x27dfe2(0x9a0)+'{flex'+':1;mi'+'n-wid'+_0x27dfe2(0x295)+'}','dVyhE':_0x27dfe2(0x1ad)+'{font'+_0x27dfe2(0x118)+_0x27dfe2(0x969)+';font'+_0x27dfe2(0x4e1)+'ht:65'+_0x27dfe2(0x16a),'zKyTo':_0x27dfe2(0x75e)+'lose:'+'hover'+'{opac'+'ity:1'+';back'+'groun'+_0x27dfe2(0x7dc)+'a(255'+',255,'+'255,.'+'05);}','ucFTR':_0x27dfe2(0x75e)+_0x27dfe2(0x618)+'lex:1'+_0x27dfe2(0x891)+_0x27dfe2(0xa84)+'t:0;o'+'verfl'+'ow-y:'+_0x27dfe2(0x404)+'displ'+'ay:gr'+_0x27dfe2(0x569)+'id-te'+_0x27dfe2(0x2d1)+_0x27dfe2(0x457)+_0x27dfe2(0x8b5)+_0x27dfe2(0x32a)+_0x27dfe2(0x722)+'o-fil'+_0x27dfe2(0x281)+_0x27dfe2(0x19e)+'50px,'+_0x27dfe2(0x7e5)+';','dLYRy':_0x27dfe2(0x321)+_0x27dfe2(0x210)+_0x27dfe2(0x98a)+_0x27dfe2(0x7fc)+_0x27dfe2(0x314)+_0x27dfe2(0xa40)+_0x27dfe2(0x8a5)+'rt;ga'+'p:10p'+_0x27dfe2(0x4a4)+_0x27dfe2(0xad0)+'0\x204px'+_0x27dfe2(0x158)+_0x27dfe2(0x16a),'ZNieS':_0x27dfe2(0x75e)+_0x27dfe2(0x3ec)+'-webk'+'it-sc'+'rollb'+_0x27dfe2(0xb60)+_0x27dfe2(0x557)+_0x27dfe2(0x631),'WEmnC':_0x27dfe2(0x378)+_0x27dfe2(0x409)+_0x27dfe2(0xa9d)+_0x27dfe2(0xa99)+_0x27dfe2(0x148)+_0x27dfe2(0x9db)+_0x27dfe2(0xa49)+_0x27dfe2(0x234)+'.04);'+'box-s'+_0x27dfe2(0x1f8)+_0x27dfe2(0x2b5)+'t\x200\x200'+'\x200\x201p'+_0x27dfe2(0x3ba)+'a(255'+',107,'+_0x27dfe2(0x99c)+'28);}','GUwDF':'.sk-c'+'ard-t'+_0x27dfe2(0x373)+'flex:'+_0x27dfe2(0xa44)+_0x27dfe2(0xb2a)+'h:0;}','MyRfD':_0x27dfe2(0x378)+_0x27dfe2(0x409)+_0x27dfe2(0x152)+'-card'+'-titl'+_0x27dfe2(0x398)+_0x27dfe2(0xae0)+_0x27dfe2(0x63e)+_0x27dfe2(0x2c6)+_0x27dfe2(0x3bf),'pcXhe':'.sk-m'+_0x27dfe2(0xa50)+'paddi'+'ng:0\x20'+_0x27dfe2(0xa0f)+_0x27dfe2(0x812)+'}','yTVmI':_0x27dfe2(0x731)+_0x27dfe2(0x78b)+_0x27dfe2(0x710)+_0x27dfe2(0x34c)+_0x27dfe2(0x9d8)+'true\x22'+']{bac'+_0x27dfe2(0xa99)+'nd:rg'+_0x27dfe2(0x9db)+_0x27dfe2(0x892)+',157,'+_0x27dfe2(0xaab)+'}','cCKYC':'.sk-s'+_0x27dfe2(0x78b)+_0x27dfe2(0x710)+_0x27dfe2(0x34c)+_0x27dfe2(0x9d8)+_0x27dfe2(0x680)+']::af'+_0x27dfe2(0x9b8)+_0x27dfe2(0x889)+'5px;b'+'ackgr'+_0x27dfe2(0x11e)+'#ff6b'+_0x27dfe2(0x384),'ZzPXf':'.sk-s'+_0x27dfe2(0x988)+'{-web'+'kit-a'+'ppear'+_0x27dfe2(0x84d)+_0x27dfe2(0x13c)+_0x27dfe2(0x53d)+_0x27dfe2(0x24f)+_0x27dfe2(0x5ef)+';widt'+_0x27dfe2(0x22e)+_0x27dfe2(0x806)+'ght:8'+_0x27dfe2(0x304)+_0x27dfe2(0x875)+'und:t'+'ransp'+_0x27dfe2(0x8fd)+';}','hvuDc':'backg'+_0x27dfe2(0x637)+_0x27dfe2(0x3fc)+'ar-gr'+'adien'+'t(#ff'+'6b9d,'+_0x27dfe2(0x94f)+'9d)\x200'+_0x27dfe2(0x7d0)+_0x27dfe2(0x547)+_0x27dfe2(0x977)+'%)\x2010'+_0x27dfe2(0x85b)+_0x27dfe2(0x60e)+'at,rg'+_0x27dfe2(0x9db)+_0x27dfe2(0xa49)+',255,'+'.08);'+'}','QwnQx':'.sk-s'+_0x27dfe2(0x988)+'::-we'+'bkit-'+'slide'+_0x27dfe2(0xaf2)+'mb{-w'+'ebkit'+_0x27dfe2(0x8b9)+'aranc'+_0x27dfe2(0xa24)+_0x27dfe2(0x945)+_0x27dfe2(0x3b8)+_0x27dfe2(0x806)+_0x27dfe2(0x270)+_0x27dfe2(0x614)+_0x27dfe2(0x900)+_0x27dfe2(0x1ec)+_0x27dfe2(0xadf)+_0x27dfe2(0x724)+_0x27dfe2(0x8a2)+_0x27dfe2(0x6fd)+'%;bac'+_0x27dfe2(0xa99)+_0x27dfe2(0xaad)+'f6b9d'+';}','ZOEvu':_0x27dfe2(0x315)+'ote.e'+_0x27dfe2(0x264)+'lor:#'+'ff7a9'+_0x27dfe2(0x596),'njDAF':'fill='+'\x22none'+'\x22\x20str'+'oke=\x22'+_0x27dfe2(0x94f)+_0x27dfe2(0x1a5)+'troke'+_0x27dfe2(0xb2a)+_0x27dfe2(0x74d)+_0x27dfe2(0x83f)+'ke-li'+_0x27dfe2(0x98b)+'=\x22rou'+_0x27dfe2(0x57e)+'troke'+'-line'+_0x27dfe2(0x76f)+'\x22roun'+'d\x22/>','zKLxb':'<circ'+_0x27dfe2(0x1c4)+'=\x2212\x22'+_0x27dfe2(0x38d)+_0x27dfe2(0x8ff)+'=\x221.5'+_0x27dfe2(0xb0e)+'l=\x22#f'+_0x27dfe2(0x2bb)+_0x27dfe2(0x1cc)+_0x27dfe2(0x22c),'ACXoV':_0x27dfe2(0x31f)+_0x27dfe2(0x738)+'=\x22mn-'+_0x27dfe2(0x885)+_0x27dfe2(0x95e)+_0x27dfe2(0x212)+'ox=\x220'+_0x27dfe2(0x5f9)+_0x27dfe2(0x211)+_0x27dfe2(0xa80)+_0x27dfe2(0x54d)+'12\x2021'+_0x27dfe2(0x983)+_0x27dfe2(0x41a)+_0x27dfe2(0x71f)+_0x27dfe2(0x498)+'5\x200-2'+_0x27dfe2(0xa64)+'8-4.5'+_0x27dfe2(0x98d)+_0x27dfe2(0x9d5)+_0x27dfe2(0x765)+'5c0\x203'+'-2.5\x20'+_0x27dfe2(0x442)+'.5z\x22\x20','YVKRX':'DOMCo'+_0x27dfe2(0x72c)+_0x27dfe2(0x745)+'d'};var _0xa0a43a=location[_0x27dfe2(0x525)+'ame']||'',_0x2539bf=/(^|\.)www\.crazygames\.com$/[_0x27dfe2(0x5ad)](_0xa0a43a),_0x2d38e9=/(^|\.)games\.crazygames\.com$/[_0x27dfe2(0x5ad)](_0xa0a43a),_0x278028=/(^|\.)crazygames\.com$/['test'](_0xa0a43a)&&!_0x2539bf&&!_0x2d38e9,_0x77f3a8=_0x2539bf?_0x3d6075['jrPBv']:_0x2d38e9?_0x27dfe2(0x4bc)+'er':_0x3d6075[_0x27dfe2(0x85e)];if(!_0x2539bf&&!_0x2d38e9&&!_0x278028)return;var _0x55abd0='#ff8f'+'b1',_0x1130a2='__sak'+_0x27dfe2(0x91c)+_0x27dfe2(0x92f),_0x280f56=_0x3d6075[_0x27dfe2(0x718)],_0x306ed3=_0x3d6075[_0x27dfe2(0xb5a)],_0x503e97=_0x27dfe2(0x3d7);if(_0x2d38e9){window['addEv'+'entLi'+_0x27dfe2(0x22a)+'r'](_0x27dfe2(0x965)+'ge',function(_0x54de2e){var _0x3135dd=_0x27dfe2,_0xa0768a=_0x54de2e['data'];if(!_0xa0768a||_0xa0768a[_0x3135dd(0x28b)+_0x3135dd(0x3e8)]!==_0x1130a2)return;try{if(window[_0x3135dd(0x6f5)+'t']&&_0x3d6075[_0x3135dd(0x8b3)](window['paren'+'t'],window))window['paren'+'t'][_0x3135dd(0x725)+_0x3135dd(0x97a)+'e'](_0xa0768a,'*');if(window[_0x3135dd(0xa86)]&&window['top']!==window)window[_0x3135dd(0xa86)][_0x3135dd(0x725)+_0x3135dd(0x97a)+'e'](_0xa0768a,'*');}catch(_0x26f7d3){}if(_0xa0768a&&_0xa0768a[_0x3135dd(0x349)]===_0x3d6075['kENOm'])try{var _0x49f778=document['query'+'Selec'+_0x3135dd(0x833)+'l'](_0x3135dd(0x320)+'e');for(var _0x1ad042=-0x1d20+-0x1*-0xb65+0x11bb;_0x1ad042<_0x49f778['lengt'+'h'];_0x1ad042++){try{if(_0x49f778[_0x1ad042][_0x3135dd(0x207)+'ntWin'+_0x3135dd(0x27e)])_0x49f778[_0x1ad042][_0x3135dd(0x207)+'ntWin'+'dow'][_0x3135dd(0x725)+_0x3135dd(0x97a)+'e'](_0xa0768a,'*');}catch(_0x1b413f){}}}catch(_0xb10f7b){}}),console[_0x27dfe2(0x536)](_0x3d6075[_0x27dfe2(0xabd)],'color'+':'+_0x55abd0);return;}if(_0x2539bf){console[_0x27dfe2(0x536)](_0x3d6075['BawNJ'],_0x3d6075['pSIIt'](_0x27dfe2(0x835)+':',_0x55abd0)+(';font'+'-weig'+'ht:70'+'0'),{'host':_0xa0a43a});var _0xe0d970={'set':function(){},'command':function(){}};function _0x57dd89(_0x4b1bb9,_0x255d74){var _0x10984a=_0x27dfe2,_0x455036={'dyxAQ':_0x3d6075['cUKGz'],'rdHwc':function(_0x26f1da,_0x479449){return _0x3d6075['RaRuh'](_0x26f1da,_0x479449);},'pOvxc':_0x3d6075[_0x10984a(0x6cc)],'pOuvF':function(_0x5884f5,_0x523ae7){return _0x3d6075['DsTLa'](_0x5884f5,_0x523ae7);}};if(_0x3d6075['LZjcF'](_0x10984a(0x526),'nitLX')){var _0x171da7=_0x455036['dyxAQ'][_0x10984a(0x4b5)]('|'),_0x9968dc=0x12ff+0xe31+0x1098*-0x2;while(!![]){switch(_0x171da7[_0x9968dc++]){case'0':_0x23719e[_0x10984a(0x113)]['left']=_0x455036[_0x10984a(0x407)](_0x22a920,'px');continue;case'1':if(!_0x4d12a0)return;continue;case'2':_0x22a920=_0x23c186[_0x10984a(0x2fe)](0x1b6e+-0x3cd+-0x35f*0x7,_0x46c488[_0x10984a(0x9b0)]((_0x36194a['inner'+_0x10984a(0x7e8)]||0x1*-0x461+-0x2*-0x106f+-0x1c7d)-_0x1d2b71-(0x937*-0x2+-0x15bd+0x2833),_0x22a920));continue;case'3':_0x3492ba[_0x10984a(0x113)][_0x10984a(0xa86)]=_0xf62916+'px';continue;case'4':_0x3e492d[_0x10984a(0x113)][_0x10984a(0x2ee)+'m']=_0x455036['pOvxc'];continue;case'5':var _0x22a920=(_0x579c0d['clien'+'tX']||-0x2a5*-0x7+0xca*0x12+0x5*-0x68b)-_0x46d93b,_0xf62916=(_0x3df85a['clien'+'tY']||-0xd9*0x7+0x1e7b+-0x1*0x188c)-_0x2fe1e6;continue;case'6':_0x51489d['style']['right']=_0x10984a(0x4d1);continue;case'7':_0xf62916=_0x5901ab[_0x10984a(0x2fe)](0x16f9+0x1*0x22f7+-0x39e8*0x1,_0x3e8d9d['min'](_0x455036['pOuvF'](_0x10f2d3[_0x10984a(0x261)+'Heigh'+'t']||-0x153f+-0x2*0xf1+-0x1f*-0xbf,_0x9814ff)-(0xa86*0x3+0x77*-0x3b+0xd*-0x51),_0xf62916));continue;case'8':var _0x1d2b71=_0x1a90fd['offse'+'tWidt'+'h']||-0x67*-0x3+-0x1e2+0x319,_0x9814ff=_0x3bb41d['offse'+_0x10984a(0x461)+'ht']||0x2*0x964+0xd16+-0x1e4e;continue;case'9':_0x1d6fe6['pos']={'x':_0x22a920,'y':_0xf62916};continue;}break;}}else{var _0x57c4c4={'__sakura':_0x1130a2,'kind':_0x10984a(0xa87),'cmd':_0x4b1bb9,'arg':_0x255d74};try{var _0x28ee05=document[_0x10984a(0xace)+_0x10984a(0x727)+_0x10984a(0x833)+'l'](_0x3d6075['pQEsr']);for(var _0x47729c=0xd24+0x1b*-0x152+0x1682;_0x47729c<_0x28ee05[_0x10984a(0x827)+'h'];_0x47729c++){if(_0x10984a(0xb0d)==='UUPNn')try{if(_0x10984a(0x924)===_0x10984a(0x924)){if(_0x28ee05[_0x47729c][_0x10984a(0x207)+'ntWin'+_0x10984a(0x27e)])_0x28ee05[_0x47729c]['conte'+'ntWin'+_0x10984a(0x27e)][_0x10984a(0x725)+'essag'+'e'](_0x57c4c4,'*');}else return _0x28a6d0+_0x56933f[_0x12d249][_0x10984a(0x827)+'h'];}catch(_0x3f9654){}else{if(_0x14d4b9[_0x361cdf][_0x10984a(0x6e8)+'rs']['lengt'+'h']>=_0xbc780c)_0x1c9acd[_0x10984a(0x82d)](_0x17424a[_0x783da3]);}}}catch(_0x44186b){}try{var _0xfdc868=new BroadcastChannel('sakur'+_0x10984a(0x74a));_0xfdc868[_0x10984a(0x725)+_0x10984a(0x97a)+'e'](_0x57c4c4),_0x3d6075[_0x10984a(0x8ca)](setTimeout,function(){var _0x591917=_0x10984a;try{if(_0x3d6075['KarBC']!=='ljhSa'){_0x41577f()[_0x591917(0x764)]({'host':_0x397066['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}else _0xfdc868[_0x591917(0x558)]();}catch(_0x2eecb5){}},0x2*-0x52f+0x207f+-0x1527);}catch(_0x20805d){}}}var _0x3488ac=_0x3d6075[_0x27dfe2(0x1df)];function _0xc04e2b(){var _0x3647d9=_0x27dfe2;try{return localStorage[_0x3647d9(0x95a)+'em'](_0x3488ac)==='1';}catch(_0x17265a){if(_0x3647d9(0x826)==='GcXZR'){if(!_0x58e27c)return;_0x3b4773=![],_0xcea196['style'][_0x3647d9(0x521)+'r']=_0x3647d9(0x6e5),_0x140211();}else return![];}}function _0xd05a04(_0x3c05e6){var _0x3ad5c8=_0x27dfe2,_0x2f1cb6={'lWzKv':function(_0xd1cac7,_0x312adb){return _0xd1cac7!==_0x312adb;},'sjJkh':function(_0x4566e4,_0x2f9572){return _0x4566e4+_0x2f9572;}};try{_0x3c05e6?localStorage[_0x3ad5c8(0x172)+'em'](_0x3488ac,'1'):localStorage[_0x3ad5c8(0x55b)+'eItem'](_0x3488ac);}catch(_0x184469){}try{if(_0x3d6075['urGsi']('ZLyDy',_0x3d6075[_0x3ad5c8(0x465)])){var _0x1cf9b0=document[_0x3ad5c8(0x600)+_0x3ad5c8(0x204)+_0x3ad5c8(0x427)](_0x3d6075[_0x3ad5c8(0x2a8)]);if(_0x1cf9b0)_0x1cf9b0[_0x3ad5c8(0x55b)+'e']();}else{var _0xb2880a=_0x289398[_0x4630d2],_0x1e8dac=_0x502b42[_0x37d5e5];if(_0x2f1cb6['lWzKv'](_0xb2880a,_0x1e8dac))_0x54acb3['push'](_0x2f1cb6[_0x3ad5c8(0x1a8)](_0x434f+':\x20'+_0xb2880a+_0x3ad5c8(0x979),_0x1e8dac));}}catch(_0x3d2280){}try{var _0x54d27d=document['getEl'+'ement'+_0x3ad5c8(0x427)]('sakur'+'a-sw-'+'v2-ta'+'b');if(_0x3c05e6&&!_0x54d27d&&document['body']){var _0x2bb2ba=document['creat'+_0x3ad5c8(0x32f)+_0x3ad5c8(0x796)]('div');_0x2bb2ba['id']='sakur'+_0x3ad5c8(0x73b)+_0x3ad5c8(0x3c5)+'b',_0x2bb2ba[_0x3ad5c8(0x113)][_0x3ad5c8(0x930)+'xt']=_0x3d6075['kGRQP'](_0x3ad5c8(0xaba)+'ion:f'+_0x3ad5c8(0x3cb)+_0x3ad5c8(0x809)+_0x3ad5c8(0x19a)+'top:1'+_0x3ad5c8(0x955)+_0x3ad5c8(0x29c)+'x:214'+_0x3ad5c8(0x1c7)+'99;cu'+'rsor:'+_0x3ad5c8(0x864)+'er;us'+_0x3ad5c8(0x5e7)+'lect:'+'none;'+_0x3d6075[_0x3ad5c8(0x6b4)]+_0x55abd0,';')+(_0x3ad5c8(0xac8)+'r-rad'+_0x3ad5c8(0xaa1)+'99px;'+_0x3ad5c8(0x520)+'ng:4p'+_0x3ad5c8(0x325)+'x;fon'+'t:11p'+_0x3ad5c8(0x43b)+'\x20ui-m'+_0x3ad5c8(0x959)+_0x3ad5c8(0x2ea)+'onsol'+'as,mo'+_0x3ad5c8(0x671)+'ce;'),_0x2bb2ba[_0x3ad5c8(0xa37)+_0x3ad5c8(0xa40)+'t']=_0x3d6075[_0x3ad5c8(0x581)],_0x2bb2ba['oncli'+'ck']=function(){_0xd05a04(![]),_0x3da89f();},document['body']['appen'+'dChil'+'d'](_0x2bb2ba);}else!_0x3c05e6&&_0x54d27d&&_0x54d27d[_0x3ad5c8(0x55b)+'e']();}catch(_0x6c8711){}}function _0x173572(){var _0x28ce25=_0x27dfe2;if(_0xc04e2b())return null;var _0x17f85d=document['getEl'+_0x28ce25(0x204)+_0x28ce25(0x427)](_0x28ce25(0x23b)+'a-sw-'+'v2');if(_0x17f85d)return _0x17f85d;if(!document[_0x28ce25(0x802)]||!document['body']['appen'+'dChil'+'d'])return null;try{if(!document[_0x28ce25(0x600)+'ement'+_0x28ce25(0x427)]('sakur'+_0x28ce25(0x73b)+_0x28ce25(0x416)+'s')){if(_0x3d6075['eiCRx']===_0x28ce25(0x3b3)){var _0x2b01e1=document[_0x28ce25(0x863)+_0x28ce25(0x32f)+_0x28ce25(0x796)]('style');_0x2b01e1['id']=_0x28ce25(0x23b)+_0x28ce25(0x73b)+_0x28ce25(0x416)+'s',_0x2b01e1['textC'+_0x28ce25(0xa40)+'t']='#saku'+'ra-sw'+'-v2{a'+'ll:in'+_0x28ce25(0x2aa)+'}',(document['head']||document[_0x28ce25(0x691)+_0x28ce25(0xac9)+_0x28ce25(0x204)])[_0x28ce25(0x696)+_0x28ce25(0x752)+'d'](_0x2b01e1);}else{var _0x57d269=_0x2db8de[_0x28ce25(0x460)+_0x28ce25(0x31c)+'e']();if(_0x57d269)return _0x19ca3c[_0x28ce25(0x948)+'e']='Runti'+_0x28ce25(0x248)+'solve'+_0x28ce25(0x473)+')',_0x57d269;}}return _0x17f85d=document[_0x28ce25(0x863)+'eElem'+_0x28ce25(0x796)](_0x3d6075[_0x28ce25(0x859)]),_0x17f85d['id']='sakur'+_0x28ce25(0x73b)+'v2',document[_0x28ce25(0x802)][_0x28ce25(0x696)+'dChil'+'d'](_0x17f85d),_0x17f85d;}catch(_0x1b7ba0){return null;}}function _0x3da89f(){var _0x331297=_0x27dfe2;if(_0x331297(0x972)!=='SVaSj'){var _0x12da96=_0x3d6075[_0x331297(0x3ed)](_0x173572);if(!_0x12da96)return _0xe0d970;if(_0x12da96[_0x331297(0x31e)+'et']['api'])return _0x12da96['api'];try{return _0xc65cf7(_0x12da96);}catch(_0x5b61fe){return _0x12da96[_0x331297(0x31e)+'et']['api']='1',_0x12da96['api']=_0xe0d970,console[_0x331297(0x1d3)](_0x3d6075[_0x331297(0x5d0)],_0x3d6075['XcMRc'](_0x3d6075[_0x331297(0x541)],_0x55abd0),_0x5b61fe),_0xe0d970;}}else{var _0x410f7e=_0x440a80[_0x331297(0x77a)][_0x331886],_0x55661f=(_0x410f7e['x']-_0x58d3f2[_0x331297(0x9a6)][-0x2187*-0x1+-0x1c09*-0x1+-0xf64*0x4])*_0x4b306d,_0x13b147=_0x3d6075['NgocH'](_0x410f7e['z']-_0x59cef4[_0x331297(0x9a6)][0x7*-0x18f+-0x874*0x3+-0x25*-0xfb],_0xbb7c72),_0x28b21f=_0x4f40fa['sqrt'](_0x55661f*_0x55661f+_0x3d6075['pAiVc'](_0x13b147,_0x13b147)),_0x36d8e3=_0x3ab517,_0x25c958=_0x20a549;_0x28b21f>_0x3b9339-(-0x1*-0xfd7+0x59*-0x67+-0x2*-0x9ff)?(_0x36d8e3=_0x5cfa2e+_0x55661f/_0x28b21f*(_0x461d6d-(-0x12f5+-0x1fff+0x2d*0x122)),_0x25c958=_0x3d6075['XcMRc'](_0x18cdae,_0x13b147/_0x28b21f*(_0x32af23-(0x60f+0x2580+0x2e7*-0xf)))):(_0x36d8e3=_0x52b47f+_0x55661f,_0x25c958=_0x3d6075[_0x331297(0xafd)](_0x36723c,_0x13b147));var _0x1d275e=_0x3d6075[_0x331297(0x8b3)](_0xdac634,null)&&_0x3d6075['urGsi'](_0x410f7e[_0x331297(0xafb)],_0x432dd1);_0x52e4c8['fillS'+_0x331297(0x592)]=_0x1d275e?_0x3d6075[_0x331297(0x656)]:_0x331297(0x85f)+'74',_0x200673[_0x331297(0x578)+_0x331297(0x7f5)](),_0x429d5d[_0x331297(0x74c)](_0x36d8e3,_0x25c958,_0x1d275e?0x2*0x313+0x9d*0x23+-0xbf*0x25:-0x1c33*-0x1+0xd5e+-0x298e+0.20000000000000018,0x1*0x154d+-0xf69+-0x3a*0x1a,_0x3d6075['NgocH'](_0x3a1511['PI'],-0x2*-0x83+-0x1d56+0x1c52)),_0x321d86[_0x331297(0x96a)](),_0x18717b++;}}function _0xc65cf7(_0x14caa0){var _0x592186=_0x27dfe2,_0x5f078d={'PIwla':function(_0x189a0b,_0x40ea9a){var _0x4bf31f=_0x4730;return _0x3d6075[_0x4bf31f(0x8eb)](_0x189a0b,_0x40ea9a);},'poqtn':_0x3d6075['rwJAH'],'LCinJ':_0x3d6075['LaFce'],'MtWIL':function(_0x352ae6,_0x250f48){return _0x3d6075['yDkNm'](_0x352ae6,_0x250f48);},'lJQlZ':'The\x20h'+_0x592186(0x5f7)+_0x592186(0x244)+'on\x20th'+_0x592186(0xb5b)+_0x592186(0x9b6)+_0x592186(0x4ac)+_0x592186(0x7ca)+_0x592186(0x1a2)+_0x592186(0x82e)+_0x592186(0xb35)+_0x592186(0x370)+'means','YTMph':_0x3d6075['wCRvz'],'IibJD':function(_0x3a8936,_0x3caf9e){return _0x3a8936!==_0x3caf9e;},'plBrK':function(_0x1951ac,_0x5d207a,_0x571456){var _0x33ef91=_0x592186;return _0x3d6075[_0x33ef91(0x338)](_0x1951ac,_0x5d207a,_0x571456);},'vcxBO':_0x592186(0x4a2)+_0x592186(0x323)+'block'+'ed\x20-\x20'+_0x592186(0x6bf)+'the\x20p'+_0x592186(0x564)+_0x592186(0x9df)+'ad','iNzch':'trans'+_0x592186(0x6f5)+'t','aShdE':function(_0x36af17){var _0x307fac=_0x592186;return _0x3d6075[_0x307fac(0x7b2)](_0x36af17);},'mjGnq':function(_0x8d150c,_0x1d9cad){var _0x24603e=_0x592186;return _0x3d6075[_0x24603e(0x57d)](_0x8d150c,_0x1d9cad);},'CCUXr':_0x592186(0x127),'WYpGk':_0x3d6075['polVC'],'gBmQA':_0x592186(0x6aa),'EVghe':_0x3d6075[_0x592186(0xa5b)],'mrJDr':function(_0x51a142,_0x3e2d82){return _0x51a142+_0x3e2d82;},'oUaRu':function(_0x3b2557,_0x6a6c04){return _0x3b2557+_0x6a6c04;},'COHVe':_0x3d6075[_0x592186(0x4ab)],'MAahJ':_0x3d6075[_0x592186(0x6b2)],'ctlEp':_0x3d6075[_0x592186(0x661)],'fizCg':_0x592186(0x328)+_0x592186(0xa02)+_0x592186(0x41e)+_0x592186(0x8ee)+'\x20not\x20'+_0x592186(0x59c)+'ting\x20'+_0x592186(0x188)+_0x592186(0x795)+_0x592186(0xb0f)+_0x592186(0x993)+'n\x20ifr'+'ame.\x0a','lrYjb':_0x592186(0xa82)+_0x592186(0x8c1)+_0x592186(0x798)+'as\x20no'+'t\x20bee'+_0x592186(0x88e)+'oaded'+'\x20sinc'+_0x592186(0x7b7)+_0x592186(0x4d8)+_0x592186(0x38a),'rAMmT':_0x3d6075[_0x592186(0xaa2)],'PyixK':function(_0x93e52,_0x2c6ea9){return _0x93e52===_0x2c6ea9;},'UPOQV':function(_0x300ceb,_0x2b7558){var _0x506189=_0x592186;return _0x3d6075[_0x506189(0x2df)](_0x300ceb,_0x2b7558);},'zuiKw':function(_0x205530,_0x883893){return _0x205530*_0x883893;}};_0x14caa0[_0x592186(0x113)]['cssTe'+'xt']=_0x3d6075[_0x592186(0xaa5)](_0x3d6075['ehhDj']('posit'+_0x592186(0xab1)+'ixed;'+'left:'+_0x592186(0x19a)+'top:1'+'2px;z'+_0x592186(0x29c)+'x:214'+_0x592186(0x3bb)+'00;ma'+'x-wid'+_0x592186(0xa5d)+'n(52v'+'w,620'+_0x592186(0x5c2)+'ax-he'+_0x592186(0xa7b)+'78vh;'+(_0x592186(0x21e)+'round'+_0x592186(0x8f8)+_0x592186(0x8da)+'olor:'+'#f7ee'+_0x592186(0x9bc)+_0x592186(0x222)+_0x592186(0x7db)+'olid\x20'+'rgba('+_0x592186(0x181)+_0x592186(0x2b7)+_0x592186(0x996)+';bord'+'er-ra'+'dius:'+'14px;'),_0x3d6075[_0x592186(0x70b)]),_0x592186(0x8d1)+'ay:fl'+_0x592186(0x2be)+'ex-di'+_0x592186(0xa70)+'on:co'+_0x592186(0x386)+'overf'+'low:h'+_0x592186(0x63c)+';'),_0x14caa0[_0x592186(0x261)+_0x592186(0x8c2)]=_0x3d6075['ODXga'](_0x3d6075[_0x592186(0x544)](_0x3d6075[_0x592186(0x20a)](_0x3d6075[_0x592186(0x884)](_0x3d6075[_0x592186(0x624)](_0x3d6075[_0x592186(0x230)]('<div\x20'+'style'+_0x592186(0x2b2)+'ding:'+'9px\x201'+'2px;b'+_0x592186(0x724)+_0x592186(0x4fb)+'om:1p'+_0x592186(0x601)+_0x592186(0x412)+_0x592186(0x9db)+_0x592186(0x9a3)+',177,'+'.3);d'+_0x592186(0x768)+'y:fle'+_0x592186(0x285)+':8px;'+_0x592186(0x321)+_0x592186(0x210)+_0x592186(0x2c5)+_0x592186(0x3a5)+_0x592186(0x2e5)+_0x592186(0x593)+'to;\x22>'+(_0x592186(0x30e)+_0x592186(0x4dc)+'color'+':')+_0x55abd0,'\x22>sak'+'ura\x20·'+'\x20skil'+_0x592186(0xa0b)+_0x592186(0x10d))+_0x3d6075[_0x592186(0x251)]+_0x3d6075[_0x592186(0x317)]+('<butt'+_0x592186(0x6f7)+_0x592186(0x357)+'-copy'+'\x22\x20sty'+'le=\x22d'+_0x592186(0x768)+_0x592186(0x7e7)+_0x592186(0x56c)+_0x592186(0x602)+_0x592186(0x21f)+_0x592186(0x2b3)+'ackgr'+_0x592186(0x11e)),_0x55abd0),_0x592186(0xa31)+_0x592186(0x160)+'color'+':#2a0'+_0x592186(0x440)+_0x592186(0x724)+_0x592186(0x8a2)+_0x592186(0x999)+_0x592186(0x4a4)+_0x592186(0xad0)+_0x592186(0x35e)+_0x592186(0x858)+_0x592186(0x5a8)+'eight'+':700;'+_0x592186(0x521)+_0x592186(0x65e)+'nter;'+_0x592186(0x171)+'y\x20JSO'+'N</bu'+'tton>')+('<butt'+_0x592186(0x6f7)+_0x592186(0x357)+'-togg'+_0x592186(0x4ba)+_0x592186(0x4ec)+_0x592186(0x224)+_0x592186(0x2d9)+_0x592186(0xa16)+'nspar'+'ent;b'+_0x592186(0x724)+':1px\x20'+_0x592186(0xa71)+'\x20rgba'+'(255,'+_0x592186(0x753)+_0x592186(0x577)+');col'+_0x592186(0x808)+'7eef5'+_0x592186(0xa31)+'er-ra'+'dius:'+_0x592186(0x441)+_0x592186(0x470)+'g:4px'+'\x208px;'+_0x592186(0x521)+_0x592186(0x65e)+'nter;'+_0x592186(0x804)+'n</bu'+_0x592186(0xa21))+(_0x592186(0xa5c)+_0x592186(0x6f7)+'=\x22sw2'+'-x\x22\x20s'+_0x592186(0x4ec)+_0x592186(0x224)+_0x592186(0x2d9)+_0x592186(0xa16)+_0x592186(0x733)+'ent;b'+_0x592186(0x724)+_0x592186(0x623)+_0x592186(0xa71)+_0x592186(0x532)+'(255,'+_0x592186(0x753)+'77,.4'+_0x592186(0xb16)+_0x592186(0x808)+'7eef5'+_0x592186(0xa31)+_0x592186(0x822)+_0x592186(0x8c9)+_0x592186(0x441)+_0x592186(0x470)+_0x592186(0xa92)+'\x208px;'+'curso'+_0x592186(0x65e)+_0x592186(0xaa4)+_0x592186(0x2a6)+'butto'+'n>')+_0x3d6075[_0x592186(0xa77)]+('<div\x20'+'id=\x22s'+_0x592186(0x55e)+_0x592186(0x984)+'tyle='+'\x22disp'+_0x592186(0x823)+'one;\x22'+'>')+_0x3d6075[_0x592186(0x563)]+_0x3d6075['muXQD']+(_0x592186(0xa36)+'t\x20id='+'\x22sw2-'+_0x592186(0x24b)+'r\x22\x20ty'+'pe=\x22r'+'ange\x22'+'\x20min='+_0x592186(0x6a5)+_0x592186(0x406)+_0x592186(0x6ee)+'p=\x220.'+'1\x22\x20va'+_0x592186(0x782)+'1\x22\x20st'+_0x592186(0x4dc)+_0x592186(0x408)+':120p'+_0x592186(0x35b)+'ent-c'+'olor:'),_0x55abd0)+_0x592186(0x80a)+_0x3d6075[_0x592186(0x433)]+(_0x592186(0xa5c)+_0x592186(0x6f7)+'=\x22sw2'+'-snap'+'\x22\x20sty'+'le=\x22b'+'ackgr'+_0x592186(0x11e)+_0x592186(0x371)+_0x592186(0x6f5)+'t;bor'+'der:1'+'px\x20so'+'lid\x20r'+_0x592186(0xb32)+_0x592186(0x5ab)+_0x592186(0x2d5)+_0x592186(0x6fc)+'color'+':#f7e'+_0x592186(0x219)+'order'+'-radi'+_0x592186(0x999)+_0x592186(0x4a4)+_0x592186(0xad0)+_0x592186(0x32c)+'px;cu'+_0x592186(0x45b)+_0x592186(0x864)+_0x592186(0x43c)+'Snaps'+_0x592186(0x4d2)+_0x592186(0x322)+_0x592186(0x198)+'n>')+('<span'+'\x20id=\x22'+_0x592186(0x54f)+'int\x22\x20'+_0x592186(0x113)+_0x592186(0x679)+'or:#8'+'d7a99'+_0x592186(0x13e)+_0x592186(0x63d)+'\x20whil'+_0x592186(0x591)+_0x592186(0x262)+'/\x20spr'+_0x592186(0x3fe)+_0x592186(0x539)+_0x592186(0xa4f)+_0x592186(0x517)+'ks\x20wh'+'ich\x20f'+'ield\x20'+_0x592186(0x1a7)+_0x592186(0x1eb)+'/span'+'>'),_0x3d6075[_0x592186(0xa77)])+(_0x592186(0x7f0)+'id=\x22s'+_0x592186(0x6dd)+'t\x22\x20st'+_0x592186(0x4dc)+_0x592186(0x468)+_0x592186(0x3a1)+_0x592186(0x470)+'g:10p'+_0x592186(0x325)+'x;ove'+_0x592186(0x828)+_0x592186(0x84f)+_0x592186(0x2e6)+_0x592186(0x7be)+_0x592186(0x404)+'white'+_0x592186(0x91d)+_0x592186(0xabf)+'-wrap'+_0x592186(0x14f)+_0x592186(0x4b7)+'k:bre'+'ak-wo'+_0x592186(0x7c5)+'nt:in'+_0x592186(0x429)+';'),'max-h'+_0x592186(0x726)+_0x592186(0x3dc)+';\x22>No'+_0x592186(0x571)+_0x592186(0x5bf)+_0x592186(0x5aa)+_0x592186(0x6c8)+_0x592186(0x564)+'updat'+'es\x20it'+_0x592186(0x674)+'when\x20'+'the\x20g'+_0x592186(0x111)+_0x592186(0x670)+_0x592186(0x990)+_0x592186(0x9c3)+_0x592186(0x362)+_0x592186(0xaf9)+_0x592186(0x99e)+_0x592186(0x950)+'\x20it\x20s'+_0x592186(0x80f)+_0x592186(0xa1a)+',\x20Tam'+'permo'+_0x592186(0x8e9)+_0x592186(0x486)+'t\x20inj'+_0x592186(0x31a)+_0x592186(0x19c)+'o\x20the'+_0x592186(0x17d)+_0x592186(0x56f)+_0x592186(0x937)+'ame\x20f'+'rame.'+_0x592186(0x901)+'>')+(_0x592186(0x697)+'>');var _0x5c1077=_0x14caa0[_0x592186(0xace)+_0x592186(0x727)+_0x592186(0x400)]('#sw2-'+'statu'+'s'),_0x5bec60=_0x14caa0['query'+_0x592186(0x727)+'tor'](_0x3d6075[_0x592186(0x52d)]),_0x207c82=_0x14caa0['query'+'Selec'+_0x592186(0x400)](_0x592186(0x32e)+_0x592186(0x528)),_0x369e74=_0x14caa0['query'+_0x592186(0x727)+_0x592186(0x400)](_0x3d6075[_0x592186(0x15a)]),_0x2fbd7a=_0x14caa0['query'+'Selec'+'tor']('#sw2-'+'x'),_0x294804=_0x14caa0[_0x592186(0xace)+_0x592186(0x727)+'tor'](_0x592186(0x32e)+'toggl'+'e'),_0x4b7482=_0x14caa0[_0x592186(0xace)+_0x592186(0x727)+'tor'](_0x3d6075[_0x592186(0x818)]),_0x479d3c=_0x14caa0[_0x592186(0xace)+'Selec'+_0x592186(0x400)](_0x3d6075['qyfZO']),_0x360a2d=_0x14caa0[_0x592186(0xace)+_0x592186(0x727)+_0x592186(0x400)](_0x3d6075[_0x592186(0x93f)]),_0x5a279a=_0x14caa0['query'+_0x592186(0x727)+_0x592186(0x400)](_0x3d6075[_0x592186(0x356)]),_0x30e3b5=_0x14caa0['query'+'Selec'+'tor']('#sw2-'+_0x592186(0x24b)+_0x592186(0x274)+'l'),_0x2de8ad=_0x14caa0['query'+_0x592186(0x727)+_0x592186(0x400)](_0x3d6075[_0x592186(0x968)]),_0x3daf06=null,_0x257e50=![];function _0x1bbfab(){var _0x253027=_0x592186;if(_0x253027(0x5e4)===_0x253027(0x59d)){var _0x4c84fc=0x1402+-0x1e37+-0x1*-0xa35;for(var _0x5a16a9=-0x102f+-0xe1d+0x1e4c;_0x5f078d['PIwla'](_0x5a16a9,_0x2e21d0['lengt'+'h']);_0x5a16a9++){if(_0x16418f[_0x5a16a9]['hook']&&_0x281dd7[_0x5a16a9][_0x253027(0x546)][_0x253027(0x8fb)+'ed'])_0x4c84fc++;}return _0x4c84fc;}else{if(_0x4b7482)_0x4b7482['style'][_0x253027(0x8d1)+'ay']=_0x257e50?'':_0x5f078d[_0x253027(0x33f)];if(_0x294804)_0x294804[_0x253027(0xa37)+'onten'+'t']=_0x257e50?_0x253027(0x558):'open';_0x14caa0['style'][_0x253027(0x408)]=_0x257e50?_0x253027(0x609)+_0x253027(0xb0a)+_0x253027(0x916):_0x5f078d[_0x253027(0xa7f)],_0x14caa0['style'][_0x253027(0x21e)+'round']=_0x257e50?'#150c'+'1d':_0x253027(0x47c)+'21,12'+',29,.'+'9)';}}if(_0x294804)_0x294804['oncli'+'ck']=function(){var _0x2eaf54=_0x592186;_0x3d6075[_0x2eaf54(0x7ad)]!==_0x3d6075[_0x2eaf54(0x7ad)]?(_0x5057fe[_0x2eaf54(0x113)]['left']=_0x54c4f1[_0x2eaf54(0xb2e)]['x']+'px',_0xe5453a['style'][_0x2eaf54(0xa86)]=_0x5f078d[_0x2eaf54(0x9e9)](_0x464e25[_0x2eaf54(0xb2e)]['y'],'px'),_0x5d5a3f['style']['right']=_0x5f078d['LCinJ'],_0x8307af[_0x2eaf54(0x113)]['botto'+'m']=_0x2eaf54(0x4d1)):(_0x257e50=!_0x257e50,_0x1bbfab());};_0x3d6075[_0x592186(0x3ed)](_0x1bbfab);if(_0x2fbd7a)_0x2fbd7a['oncli'+'ck']=function(){var _0x167113=_0x592186;_0x3d6075[_0x167113(0x5d8)]!==_0x167113(0x604)?(_0x4d8319['push']('no\x20li'+_0x167113(0x633)+'jects'+_0x167113(0xb35)+'ured\x20'+'yet.'),_0x501de6['push'](''),_0x4090e3['push'](_0x5f078d['lJQlZ']),_0x235f33['push'](_0x5f078d[_0x167113(0x3a6)])):_0xd05a04(!![]);};if(_0x479d3c)_0x479d3c[_0x592186(0x14d)+'ck']=function(){var _0xba4fa4=_0x592186;if(_0x3d6075['LZjcF'](_0x3d6075['LPlXB'],'qcHzT'))return _0x1467be[_0xba4fa4(0x68f)+'d']++,_0x357cc6[_0xba4fa4(0x9cf)+'rror']=_0x5c2f0e['lastE'+_0xba4fa4(0x87d)]||_0x40106f(_0x487315&&_0x58f9db[_0xba4fa4(0x965)+'ge']||_0x259aeb)[_0xba4fa4(0x485)](0x1db9+-0x51c+-0x1*0x189d,0x1*-0x2173+0x107d+0x116e),null;else _0x3d6075[_0xba4fa4(0x3e1)](_0x57dd89,'snaps'+_0xba4fa4(0x66d));};var _0xd17378=![];function _0x2d022f(){var _0x1370ce=_0x592186;if('UaqKf'!=='RSnUi')_0x3d6075['LsedL'](_0x57dd89,_0x3d6075['sGhiW'],{'on':_0xd17378,'factor':parseFloat(_0x5a279a['value'])||-0x1f24*0x1+0xe44+0x10e1});else try{var _0x5632c7=_0x540aeb&&_0x552ba6[_0x1370ce(0x120)];if(!_0x5632c7||_0x5f078d['IibJD'](_0x5632c7[_0x1370ce(0x28b)+_0x1370ce(0x3e8)],_0x5efeb0)||_0x5632c7[_0x1370ce(0x349)]!==_0x1370ce(0xa87))return;_0x5f078d['plBrK'](_0x106e75,_0x5632c7[_0x1370ce(0xa87)],_0x5632c7['arg']);}catch(_0x19d578){}}if(_0x360a2d)_0x360a2d[_0x592186(0x14d)+'ck']=function(){var _0x5d5eed=_0x592186,_0x896382={'CJGoB':_0x5f078d[_0x5d5eed(0x7ba)]};if(_0x5d5eed(0x506)==='lhqCb')_0xd17378=!_0xd17378,_0x360a2d['textC'+_0x5d5eed(0xa40)+'t']=_0xd17378?'Speed'+_0x5d5eed(0xb59):'Speed'+_0x5d5eed(0x9cb),_0x360a2d['style'][_0x5d5eed(0x21e)+_0x5d5eed(0x637)]=_0xd17378?_0x55abd0:_0x5f078d['iNzch'],_0x360a2d['style']['color']=_0xd17378?_0x5d5eed(0x247)+'1b':_0x5d5eed(0x612)+'f5',_0x5f078d[_0x5d5eed(0xa28)](_0x2d022f);else{var _0xdc818c=_0xbcade8+'\x0a'+_0x165093[_0x5d5eed(0x117)+_0x5d5eed(0x1c0)](_0x1ad891,null,-0x1196+-0x3*0x32c+0x1*0x1b1b)+'\x0a'+_0x4ae0a3;if(_0x462d69[_0x5d5eed(0x57a)+_0x5d5eed(0x241)]&&_0x6b3372[_0x5d5eed(0x57a)+_0x5d5eed(0x241)][_0x5d5eed(0x215)+'Text'])_0x24d530[_0x5d5eed(0x57a)+_0x5d5eed(0x241)][_0x5d5eed(0x215)+'Text'](_0xdc818c)[_0x5d5eed(0xb3a)](function(){_0x328c38['textC'+'onten'+'t']='Copie'+'d';});else _0x583557[_0x5d5eed(0xa37)+_0x5d5eed(0xa40)+'t']=_0x896382[_0x5d5eed(0x286)];}};if(_0x5a279a)_0x5a279a[_0x592186(0x957)+'ut']=function(){var _0x505519=_0x592186;if(_0x30e3b5)_0x30e3b5['textC'+_0x505519(0xa40)+'t']=(_0x3d6075[_0x505519(0x3e1)](parseFloat,_0x5a279a[_0x505519(0x683)])||-0x1*-0xbe5+-0x24*-0x61+-0x1988)[_0x505519(0x3a3)+'ed'](-0x2359+-0x2*-0x241+0x1ed8)+'x';_0x2d022f();};if(_0x369e74)_0x369e74[_0x592186(0x14d)+'ck']=function(){var _0x55852d=_0x592186,_0x5bc2ce={'bdkKY':function(_0x35de9c){var _0x3c7bee=_0x4730;return _0x3d6075[_0x3c7bee(0x7b2)](_0x35de9c);},'durXw':function(_0x3a4d89,_0x2e7104,_0x1889f0){var _0x221d79=_0x4730;return _0x3d6075[_0x221d79(0x980)](_0x3a4d89,_0x2e7104,_0x1889f0);},'LHewL':function(_0x5ea40b,_0x1bc61c){return _0x5ea40b!==_0x1bc61c;},'aGqKk':function(_0x400d4f,_0x1b574e){return _0x400d4f+_0x1b574e;}},_0x1d116b=_0x3d6075['HsrRT'](_0x280f56+'\x0a'+(_0x3daf06?JSON['strin'+'gify'](_0x3daf06,null,0x6f6+0x89*0x15+0x919*-0x2):'')+'\x0a',_0x306ed3),_0x51674f=function(){var _0x36ee84=_0x4730;if(_0x369e74)_0x369e74[_0x36ee84(0xa37)+_0x36ee84(0xa40)+'t']='Copie'+'d';};if(navigator['clipb'+_0x55852d(0x241)]&&navigator[_0x55852d(0x57a)+'oard']['write'+'Text'])navigator['clipb'+'oard'][_0x55852d(0x215)+_0x55852d(0x9af)](_0x1d116b)[_0x55852d(0xb3a)](_0x51674f,function(){var _0x55b652=_0x55852d,_0x649e39={'TYZSI':'aria-'+_0x55b652(0x13a)+'ed','WQEJv':function(_0x535773){return _0x535773();}};_0x5f078d[_0x55b652(0x4d5)](_0x5f078d['CCUXr'],_0x55b652(0x127))?_0x2a40a9():_0x1e845f['setAt'+'tribu'+'te'](_0x649e39[_0x55b652(0x694)],_0x649e39[_0x55b652(0x5a1)](_0x5da13b)?_0x55b652(0xadd):_0x55b652(0x2cd));});else _0x2a40a9();function _0x2a40a9(){var _0x2f8f71=_0x55852d,_0x19218b={'gupWq':_0x5f078d['poqtn']};if(_0x5f078d['WYpGk']!==_0x2f8f71(0x4be)){var _0x57b77e=document[_0x2f8f71(0x863)+'eElem'+_0x2f8f71(0x796)](_0x2f8f71(0x21a)+_0x2f8f71(0xacd));_0x57b77e['value']=_0x1d116b;if(!document['body'])return;document['body']['appen'+'dChil'+'d'](_0x57b77e),_0x57b77e['selec'+'t']();try{if(_0x5f078d['gBmQA']!==_0x2f8f71(0x6aa)){var _0x4f892f=_0x1d9138;if(_0x4f892f&&_0x4f892f['el'])_0x4f892f['el'][_0x2f8f71(0x113)][_0x2f8f71(0x8d1)+'ay']=_0x50fe8b?'':_0x19218b[_0x2f8f71(0x698)];var _0x14ba5b=_0x38d074;if(_0x14ba5b&&_0x14ba5b['cv'])_0x14ba5b['cv'][_0x2f8f71(0x113)][_0x2f8f71(0x8d1)+'ay']=_0x20b181?'':_0x19218b['gupWq'];}else document['execC'+_0x2f8f71(0x24c)+'d'](_0x2f8f71(0xaa6)),_0x5f078d['aShdE'](_0x51674f);}catch(_0x25519e){}_0x57b77e[_0x2f8f71(0x55b)+'e']();}else{var _0x323676=_0x5bc2ce['bdkKY'](_0x13caab);if(!_0x323676||!_0x323676['mouse'+_0x2f8f71(0x1a3)])return null;var _0x14ac36=_0xd6376e(_0x323676['mouse'+'Look'],0x550+-0x22db*-0x1+-0x281b),_0xb82935=_0x5bc2ce['durXw'](_0x4a2110,_0x14ac36+(0x161*-0x3+-0x20c3*0x1+-0x1*-0x24fe),_0x2f8f71(0x729)),_0x74f3cd=_0x381ca6(_0x14ac36+(-0x2135+-0x1a*-0x134+-0x209*-0x1),_0x2f8f71(0x729));if(typeof _0xb82935!=='numbe'+'r'||_0x5bc2ce[_0x2f8f71(0x46b)](typeof _0x74f3cd,_0x2f8f71(0xb4b)+'r'))return null;return{'pitch':_0x5bc2ce[_0x2f8f71(0x141)](_0xb82935,_0x148c3e[_0x2f8f71(0x3e0)+'Off']),'yaw':_0x74f3cd+_0x4e8be8['yawOf'+'f']};}}};setTimeout(function(){var _0x26ad84=_0x592186,_0x461c1c=_0x5f078d['EVghe']['split']('|'),_0x3091d2=0x5*0x28f+0x1*0xd1c+-0x19e7;while(!![]){switch(_0x461c1c[_0x3091d2++]){case'0':_0x5c1077['textC'+'onten'+'t']='no\x20re'+_0x26ad84(0x1b9)+'after'+_0x26ad84(0x869)+'—\x20fra'+_0x26ad84(0x263)+_0x26ad84(0x5c1)+_0x26ad84(0x145)+'?';continue;case'1':if(_0x3daf06)return;continue;case'2':if(!_0x5c1077||!_0x207c82)return;continue;case'3':_0x5c1077['style'][_0x26ad84(0x835)]='#ffb3'+'c7';continue;case'4':_0x207c82['textC'+_0x26ad84(0xa40)+'t']=_0x5f078d[_0x26ad84(0x483)](_0x5f078d[_0x26ad84(0x483)](_0x5f078d[_0x26ad84(0x942)](_0x5f078d[_0x26ad84(0x9e9)](_0x5f078d[_0x26ad84(0x8f9)]+_0x5f078d[_0x26ad84(0x7ec)],_0x5f078d[_0x26ad84(0x1cd)]),_0x5f078d[_0x26ad84(0x5a6)]),_0x5f078d['lrYjb'])+('\x20\x203.\x20'+'Both\x20'+_0x26ad84(0x23b)+_0x26ad84(0x8d3)+'llwar'+'z.use'+'r.js\x20'+'AND\x20t'+'he\x20ol'+'d\x20dia'+_0x26ad84(0x605)+_0x26ad84(0x296)+'re\x0a'),'\x20\x20\x20\x20\x20'+'insta'+_0x26ad84(0x4c3)+_0x26ad84(0x862)+'\x20copi'+_0x26ad84(0x98f)+_0x26ad84(0x8c3)+_0x26ad84(0x497)+_0x26ad84(0x570)+_0x26ad84(0x882)+_0x26ad84(0xaf7)+'bly.i'+_0x26ad84(0x23f)+'tiate'+'.\x0a\x0a')+_0x5f078d['rAMmT'];continue;}break;}},-0xc87f*-0x1+-0xa973+0xcb54);var _0x3cdbb8={'set':function(_0x24062e){var _0x377dd7=_0x592186,_0x32e85b={'Nwghp':'repor'+'t','MxeUZ':function(_0xaa6b1a){return _0xaa6b1a();},'aUyxW':function(_0xfe59bb,_0xa8a074,_0x5c133a){return _0x3d6075['LsedL'](_0xfe59bb,_0xa8a074,_0x5c133a);},'YlWCm':'sk-ct'+'l','DzsuI':_0x377dd7(0x958)+'bel','GvEkA':function(_0x44209f,_0x13ee7e){return _0x3d6075['RaRuh'](_0x44209f,_0x13ee7e);},'BfSuK':_0x377dd7(0x3d4)+'n>','QRYOC':function(_0x23e79e,_0x505092){return _0x3d6075['AusmR'](_0x23e79e,_0x505092);}};if(_0x377dd7(0x190)!==_0x377dd7(0x161)){_0x3daf06=_0x24062e;if(_0x369e74)_0x369e74[_0x377dd7(0x113)]['displ'+'ay']='';if(_0x5bec60){if('mpWUv'!=='mpWUv'){_0x107006=_0x468a31,_0xaa2a44=[],_0x155571(_0x32e85b['Nwghp'],{'report':_0x32e85b['MxeUZ'](_0x1c534d)});return;}else{var _0x16c421=_0x3d6075[_0x377dd7(0x3a0)]['split']('|'),_0x46110e=-0x19*0x137+-0x3*-0x91c+0x30b;while(!![]){switch(_0x16c421[_0x46110e++]){case'0':_0x5bec60[_0x377dd7(0x113)][_0x377dd7(0xac8)+'rColo'+'r']=_0x2d9df5===_0x353e94?_0x377dd7(0x47c)+'255,1'+'43,17'+'7,.35'+')':_0x3d6075[_0x377dd7(0x1e3)];continue;case'1':_0x5bec60[_0x377dd7(0x113)]['color']=_0x2d9df5===_0x353e94?_0x55abd0:'#ff6e'+'74';continue;case'2':var _0x2d9df5=_0x24062e[_0x377dd7(0x7ac)+'on']||'';continue;case'3':_0x5bec60[_0x377dd7(0xa37)+_0x377dd7(0xa40)+'t']=_0x3d6075[_0x377dd7(0xb42)]('v',_0x24062e['versi'+'on']||'?');continue;case'4':var _0x353e94=_0x503e97;continue;}break;}}}var _0x5eef29=_0x24062e[_0x377dd7(0x756)+_0x377dd7(0x268)]&&_0x24062e['insta'+_0x377dd7(0x268)]['FPSco'+_0x377dd7(0x437)+'ler'],_0x4f1788=Math['round'](_0x3d6075['bCUby'](_0x24062e[_0x377dd7(0x625)+_0x377dd7(0x873)]||0x20*0x40+0x1*-0x24e1+-0x1ce1*-0x1,-0x14fc+0x1e10+-0x52c));if(_0x5c1077){var _0x52b6f1,_0x524c3a;if(_0x5eef29&&_0x24062e[_0x377dd7(0x706)+'y']&&_0x24062e[_0x377dd7(0x706)+'y'][_0x377dd7(0x502)+_0x377dd7(0x437)+'ler']){if(_0x3d6075['urGsi'](_0x377dd7(0x923),_0x377dd7(0x923)))_0x52b6f1=_0x3d6075[_0x377dd7(0x230)](_0x3d6075[_0x377dd7(0x425)](_0x377dd7(0x10e)+'·\x20'+Object[_0x377dd7(0x4ea)](_0x24062e['insta'+_0x377dd7(0x268)])['lengt'+'h'],_0x3d6075['xCvnn']),_0x4f1788)+'s',_0x524c3a=_0x377dd7(0x107)+'a8';else return 0x1*-0x1ab1+0x1*0x2564+0x3*-0x391;}else{if(_0x24062e['hooks'+_0x377dd7(0x40e)+'ed']>0x1746+-0x2548+0xe02)_0x52b6f1=_0x3d6075[_0x377dd7(0x9e1)](_0x3d6075['QcojX'](_0x377dd7(0x6d0)+_0x377dd7(0x9b2)+'d\x20·\x20',_0x4f1788),'s'),_0x524c3a=_0x377dd7(0x66b)+'8a';else _0x24062e['scrip'+_0x377dd7(0x574)]?(_0x52b6f1=_0x377dd7(0x8f1)+_0x377dd7(0x42a)+_0x377dd7(0x6a9)+'·\x20'+_0x4f1788+'s',_0x524c3a=_0x3d6075[_0x377dd7(0x17e)]):(_0x52b6f1=(_0x24062e[_0x377dd7(0x622)]&&_0x24062e['arm']['ok']?_0x377dd7(0x438)+_0x377dd7(0xb2c):'armin'+'g\x20·\x20')+_0x4f1788+'s',_0x524c3a='#ffd4'+'8a');}_0x5c1077['textC'+_0x377dd7(0xa40)+'t']=_0x52b6f1,_0x5c1077['style'][_0x377dd7(0x835)]=_0x524c3a;}_0x2de8ad&&(_0x2de8ad['textC'+_0x377dd7(0xa40)+'t']=_0x24062e[_0x377dd7(0x3c2)]&&_0x24062e['diff']['lengt'+'h']?_0x3d6075[_0x377dd7(0xaa5)](_0x377dd7(0x16f)+_0x377dd7(0x1b2)+'apsho'+_0x377dd7(0x787),_0x24062e[_0x377dd7(0x3c2)]['join'](',\x20')):_0x377dd7(0x866)+'ice\x20w'+'hile\x20'+'walki'+_0x377dd7(0x88d)+'sprin'+'ting\x20'+_0x377dd7(0x94d)+_0x377dd7(0x7d8)+'marks'+_0x377dd7(0x3e7)+_0x377dd7(0x66f)+_0x377dd7(0x7aa)+'\x20whic'+'h.');_0x24062e[_0x377dd7(0x48f)]&&_0x360a2d&&(_0xd17378=!!_0x24062e['speed']['on'],_0x360a2d['textC'+_0x377dd7(0xa40)+'t']=_0xd17378?_0x377dd7(0x1fa)+_0x377dd7(0xb59):_0x377dd7(0x1fa)+'\x20off',_0x360a2d['style'][_0x377dd7(0x21e)+'round']=_0xd17378?_0x55abd0:_0x3d6075[_0x377dd7(0x2ec)],_0x360a2d['style']['color']=_0xd17378?_0x377dd7(0x247)+'1b':'#f7ee'+'f5',_0x30e3b5&&_0x24062e[_0x377dd7(0x48f)][_0x377dd7(0x24b)+'r']&&(_0x30e3b5[_0x377dd7(0xa37)+'onten'+'t']=Number(_0x24062e[_0x377dd7(0x48f)]['facto'+'r'])[_0x377dd7(0x3a3)+'ed'](0x263f+-0x1*0x30a+-0x2334)+'x'));if(_0x207c82)try{_0x207c82['textC'+'onten'+'t']=_0x3d6075['PvBsT'](_0x4b63de,_0x24062e);}catch(_0x3cae44){if(_0x377dd7(0x93a)===_0x3d6075[_0x377dd7(0x253)])_0x207c82['textC'+_0x377dd7(0xa40)+'t']=JSON[_0x377dd7(0x117)+_0x377dd7(0x1c0)](_0x24062e,null,-0xfb6+0x1cf*0x4+-0xd*-0xa7);else{var _0x3a6064=_0x32e85b['aUyxW'](_0x4b1ae9,'div',_0x32e85b[_0x377dd7(0x814)]),_0x5590f4=_0x33e652('div',_0x32e85b[_0x377dd7(0x908)],_0x1e4513+(_0x2ab88e?_0x32e85b[_0x377dd7(0x781)](_0x377dd7(0xa6b)+'\x20clas'+_0x377dd7(0x4a9)+'-hint'+'\x27>'+_0x1a3fc8,_0x32e85b[_0x377dd7(0x672)]):''));return _0x3a6064['appen'+'dChil'+'d'](_0x5590f4),_0x3a6064;}}console[_0x377dd7(0x536)](_0x3d6075[_0x377dd7(0x223)],'color'+':'+_0x55abd0+(';font'+'-weig'+_0x377dd7(0x963)+'0'),_0x24062e),console['log'](_0x280f56+'\x0a'+JSON[_0x377dd7(0x117)+_0x377dd7(0x1c0)](_0x24062e,null,-0x35a+0x1ba3+0x6*-0x40c)+'\x0a'+_0x306ed3);}else{if(_0x5f078d[_0x377dd7(0x9a4)](_0x430132,'v3')){var _0x49458a=_0xe54790[_0x171cf6]['xyz']||[_0x4239a1[_0x2038b8]['v'],0x1eab+-0x1*-0x1f49+-0x7a*0x82,-0x4*-0x535+-0x326+-0x11ae];return _0x49458a[_0x377dd7(0x456)](function(_0x349fa9){var _0x84ea80=_0x377dd7;return _0x32e85b[_0x84ea80(0x8fc)](_0x3857b1['round'](_0x349fa9*(0x1*0x20f3+0x127a+-0x3309)),0x1d1f+0x225c+-0x1*0x3f17);})[_0x377dd7(0xa69)]('\x20\x20');}var _0x3784cf=_0x303a90[_0x1f3563]['v'];return typeof _0x3784cf==='numbe'+'r'?_0x5f078d[_0x377dd7(0x4a8)](_0xe21b0d[_0x377dd7(0x637)](_0x5f078d['zuiKw'](_0x3784cf,0x23e9+0x22d*-0x3+0x43f*-0x6)),0x2e*0x7+-0x20*0x125+-0x1c9*-0x16):_0xf3238e(_0x3784cf);}}};return _0x14caa0['datas'+'et'][_0x592186(0x99d)]='1',_0x14caa0[_0x592186(0x99d)]=_0x3cdbb8,_0x3cdbb8;}function _0x4b63de(_0x3fdcbe){var _0xaba76c=_0x27dfe2,_0x7ed465=[];_0x7ed465['push'](_0x3d6075['yDkNm'](_0x3d6075[_0xaba76c(0x1d7)]+(_0x3fdcbe['host']||'?')+_0x3d6075['pgIdt'],Math['round']((_0x3fdcbe['elaps'+'edMs']||-0x24e+-0xa*-0x3df+-0x2468)/(-0x4*0x613+-0x1*-0xb82+0x10b2*0x1)))+'s)'),_0x7ed465[_0xaba76c(0x82d)](_0x3d6075[_0xaba76c(0x490)](_0x3d6075['taSSJ'](_0x3d6075['GELSq'](_0x3d6075['VJeQL'](_0xaba76c(0x8bc)+'\x20\x20\x20\x20'+(_0x3fdcbe[_0xaba76c(0x6ba)]?'yes':'no'),_0x3d6075[_0xaba76c(0x47f)]),_0x3fdcbe[_0xaba76c(0x9ee)+'pCont'+_0xaba76c(0x9c7)]?_0x3d6075[_0xaba76c(0x191)]:'no'),_0xaba76c(0x8ce)+_0xaba76c(0x1ac)),_0x3d6075[_0xaba76c(0x7b8)](_0x3fdcbe['typeC'+'ount'],null)?_0x3fdcbe['typeC'+_0xaba76c(0x3cf)]:'?')),_0x7ed465['push']('hooks'+_0xaba76c(0x8fa)+_0x3fdcbe[_0xaba76c(0x6d0)+'Appli'+'ed']+'/'+_0x3fdcbe[_0xaba76c(0x6d0)+_0xaba76c(0xaf4)]+_0x3d6075['HpDAu']),_0x7ed465['push']('');var _0x473e46=_0x3fdcbe['insta'+_0xaba76c(0x268)]||{},_0x1713dd=Object[_0xaba76c(0x4ea)](_0x473e46);if(!_0x1713dd[_0xaba76c(0x827)+'h']){if(_0x3d6075[_0xaba76c(0x38f)]('aJixx','UkNii'))_0x7ed465[_0xaba76c(0x82d)](_0x3d6075[_0xaba76c(0x65f)]),_0x7ed465['push'](''),_0x7ed465[_0xaba76c(0x82d)](_0x3d6075[_0xaba76c(0x7e0)]),_0x7ed465['push']('no\x20Up'+_0xaba76c(0x719)+_0xaba76c(0xb47)+_0xaba76c(0x358)+_0xaba76c(0x149)+'\x20sign'+_0xaba76c(0x760)+'\x20did\x20'+'not\x20m'+_0xaba76c(0x666));else{var _0x3209cd=_0x5919a1[_0xaba76c(0x863)+'eElem'+_0xaba76c(0x796)](_0xd712aa);if(_0x4f33d3)_0x3209cd['class'+_0xaba76c(0xaef)]=_0x312a67;if(_0x3d6075['VXplb'](_0x10c33d,null))_0x3209cd[_0xaba76c(0x261)+_0xaba76c(0x8c2)]=_0x1847ad;return _0x3209cd;}}for(var _0x1d0280=0x2320+0x2303*-0x1+-0x1d;_0x3d6075[_0xaba76c(0x8eb)](_0x1d0280,_0x1713dd['lengt'+'h']);_0x1d0280++){if(_0x3d6075['RIcNB']===_0xaba76c(0x8f7)){var _0x323e4b={};try{var _0x163f53=_0x289a3e[_0xaba76c(0x5e6)+'WebMo'+_0xaba76c(0x354)]&&_0x5a03ae[_0xaba76c(0x5e6)+'WebMo'+_0xaba76c(0x354)][_0xaba76c(0x508)+'me'];_0x323e4b[_0xaba76c(0x165)]=_0x163f53&&_0x163f53['__sak'+'uraTa'+'g']||null,_0x323e4b[_0xaba76c(0x134)+_0xaba76c(0x271)]=!!(_0x163f53&&_0x2c6fb9&&_0x163f53[_0xaba76c(0x28b)+'uraTa'+'g']===_0x6a4560),_0x323e4b[_0xaba76c(0xafe)+'meGam'+'e']=_0x163f53&&_0x163f53[_0xaba76c(0x9e5)]?typeof _0x163f53['_game']:'none',_0x323e4b[_0xaba76c(0xa5f)+_0xaba76c(0x651)+'imeIs'+_0xaba76c(0x462)+_0xaba76c(0x336)]=!!(_0x1ad007&&_0x4ed483[_0xaba76c(0x1e4)+_0xaba76c(0x9e6)]&&_0x7ce925[_0xaba76c(0x1e4)+_0xaba76c(0x9e6)]===_0x163f53),_0x323e4b[_0xaba76c(0xa5f)+'nRunt'+_0xaba76c(0x2a5)+'me']=_0x1eff50&&_0xf7957d[_0xaba76c(0x1e4)+'ime']&&_0xbd2920['_runt'+'ime'][_0xaba76c(0x9e5)]?typeof _0x4b5624[_0xaba76c(0x1e4)+_0xaba76c(0x9e6)][_0xaba76c(0x9e5)]:_0x3d6075[_0xaba76c(0x6bb)];}catch(_0x3f68b2){_0x323e4b['error']=_0x3d6075[_0xaba76c(0x3e1)](_0x4b4a82,_0x3f68b2&&_0x3f68b2[_0xaba76c(0x965)+'ge']||_0x3f68b2);}return _0x323e4b;}else{var _0x53aad1=_0x1713dd[_0x1d0280];_0x7ed465[_0xaba76c(0x82d)](_0x3d6075['YwTTj'](_0x3d6075[_0xaba76c(0x3fd)](_0x53aad1,'\x20@\x20'),_0x473e46[_0x53aad1]));}}_0x7ed465['push']('');var _0x172b3f=_0x3fdcbe[_0xaba76c(0x706)+'y']||{},_0x66f58=Object[_0xaba76c(0x4ea)](_0x172b3f);for(var _0x572543=0x14*-0x17f+-0xd61+0x2b4d*0x1;_0x572543<_0x66f58[_0xaba76c(0x827)+'h'];_0x572543++){var _0x5e9783=_0x66f58[_0x572543],_0x2fd0fc=_0x172b3f[_0x5e9783];if(!_0x2fd0fc||!_0x2fd0fc[_0xaba76c(0x827)+'h'])continue;_0x7ed465[_0xaba76c(0x82d)](_0x3d6075[_0xaba76c(0x58a)](_0x3d6075[_0xaba76c(0x77d)](_0x3d6075[_0xaba76c(0x677)],_0x5e9783)+'\x20',new Array(Math[_0xaba76c(0x2fe)](0x1f08+0x24da+-0x43e1,_0x3d6075['DsTLa'](0x2*-0x1002+-0x3*0xbac+0x432a,_0x5e9783[_0xaba76c(0x827)+'h'])))[_0xaba76c(0xa69)]('─'))),_0x7ed465[_0xaba76c(0x82d)](_0xaba76c(0x3ea)+'set\x20\x20'+_0xaba76c(0x568)+_0xaba76c(0x6cf)+'\x20\x20\x20va'+_0xaba76c(0x778)+_0xaba76c(0x6cf)+'\x20\x20\x20\x20\x20'+_0xaba76c(0x38c));for(var _0x204d8e=-0x18b2*-0x1+-0x27d*-0x1+0x1b2f*-0x1;_0x204d8e<_0x2fd0fc['lengt'+'h'];_0x204d8e++){if(_0xaba76c(0x4b0)===_0xaba76c(0x4b0)){var _0x29191b=_0x2fd0fc[_0x204d8e],_0x4efd0c=_0x3d6075['cTWAU'](typeof _0x29191b['v'],_0xaba76c(0xb4b)+'r')?Math['round'](_0x29191b['v']*(-0x3c2+-0xdf4+0x159e))/(-0xac0+-0x15f9+0x1*0x24a1):_0x29191b['v'];_0x7ed465['push'](_0x3d6075[_0xaba76c(0x52c)](_0x3d6075[_0xaba76c(0x8bd)]('\x20\x20',_0x3d6075[_0xaba76c(0x3fd)]('0x',_0x29191b['o'][_0xaba76c(0x5c6)+_0xaba76c(0x2ce)](-0x91+0xc58+-0xbb7))['padEn'+'d'](-0x2229+0x1ea4+0x38d))+'\x20'+_0x29191b['k']['padEn'+'d'](0xa1d*0x2+0xd6*0x7+0x1*-0x1a09)+'\x20',String(_0x4efd0c)[_0xaba76c(0x865)+'d'](0x1edb+-0xad7*-0x1+0x49*-0x92))+'\x20'+(_0x29191b[_0xaba76c(0x38c)]||''));}else try{return _0xfbdde7&&_0x3572ca[_0xaba76c(0x5eb)+'r']?_0x4c6a54['buffe'+'r']['byteL'+'ength']:0x745*-0x1+0x1*-0x8bd+-0x6*-0x2ab;}catch(_0x133a92){return-0x1af5*0x1+0x6cb+0x142a;}}_0x7ed465[_0xaba76c(0x82d)]('');}if(_0x3fdcbe[_0xaba76c(0x162)+'ngs']&&_0x3fdcbe[_0xaba76c(0x162)+'ngs']['lengt'+'h']){if(_0xaba76c(0x1ba)!=='UXEWC'){_0x7ed465[_0xaba76c(0x82d)](_0xaba76c(0x162)+_0xaba76c(0x1d9));for(var _0x549353=-0x1*-0xd25+-0x2*-0x987+-0x2033;_0x549353<_0x3fdcbe[_0xaba76c(0x162)+_0xaba76c(0x1d9)][_0xaba76c(0x827)+'h'];_0x549353++)_0x7ed465['push'](_0x3d6075[_0xaba76c(0x590)]+_0x3fdcbe['warni'+'ngs'][_0x549353]);}else _0x304e2c[_0xaba76c(0x55b)+'e']();}return _0x7ed465[_0xaba76c(0xa69)]('\x0a');}window['addEv'+'entLi'+'stene'+'r'](_0x3d6075[_0x27dfe2(0x444)],function(_0x50e00f){var _0x301b50=_0x27dfe2,_0x2f3d8e=_0x50e00f[_0x301b50(0x120)];if(!_0x2f3d8e||_0x2f3d8e['__sak'+'ura']!==_0x1130a2)return;try{if(_0x2f3d8e['kind']===_0x301b50(0x35c)){_0x3d6075['bDyXB'](_0x3da89f)[_0x301b50(0x764)]({'host':_0x2f3d8e[_0x301b50(0x776)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x2f3d8e[_0x301b50(0x349)]===_0x301b50(0xaeb)+'t')_0x3d6075['OsHck'](_0x3da89f)[_0x301b50(0x764)](_0x2f3d8e[_0x301b50(0xaeb)+'t']);}catch(_0x282124){console[_0x301b50(0x1d3)](_0x3d6075['OosNK'],_0x3d6075['hCdkd'](_0x3d6075[_0x301b50(0x541)],_0x55abd0),_0x282124);}});function _0x415150(){_0xd05a04(!![]);}if(document[_0x27dfe2(0x802)])_0x3d6075['uwORM'](_0x415150);else document[_0x27dfe2(0x2d2)+_0x27dfe2(0x2c9)+_0x27dfe2(0x22a)+'r']('DOMCo'+_0x27dfe2(0x72c)+'Loade'+'d',_0x415150,{'once':!![]});return;}window['__SAK'+_0x27dfe2(0x5ae)+'W__']=window['__SAK'+_0x27dfe2(0x5ae)+'W__']||{'at':Date[_0x27dfe2(0xab9)]()};function _0x73d618(_0x370eb3,_0x14cd3c){var _0x230c6b=_0x27dfe2,_0x371181={'pnSXD':function(_0x4e3dc0,_0x444971,_0x525f8b){return _0x3d6075['NuRMI'](_0x4e3dc0,_0x444971,_0x525f8b);},'XGnbS':_0x3d6075['WFKGu']},_0x142c10={'__sakura':_0x1130a2,'kind':_0x370eb3};if(_0x14cd3c){for(var _0x5045f7 in _0x14cd3c)_0x142c10[_0x5045f7]=_0x14cd3c[_0x5045f7];}try{if(_0x230c6b(0x474)!==_0x3d6075[_0x230c6b(0x72b)])_0x5eed76[_0x230c6b(0xa37)+_0x230c6b(0xa40)+'t']=_0xcc9439>-0x194+-0x1*-0xa13+-0x3*0x2d5?_0x3d6075[_0x230c6b(0x129)](_0x3d6075[_0x230c6b(0x26b)]+_0xc834ed+(_0xceeab5?'\x20+\x20'+_0x388caf+'\x20bots':''),_0x51bad7&&_0x415339[_0x230c6b(0x20e)+'a']?'\x20\x20cam'+'\x20'+_0x76fe80['camer'+'aFrom']:'\x20\x20cam'+'\x20-'):_0x3d6075['RaRuh']('no\x20en'+'emies'+_0x230c6b(0x667)+_0x230c6b(0x110)+_0x230c6b(0x2f1)+_0x230c6b(0x7c3),_0x450a76&&_0x42b0b3[_0x230c6b(0x20e)+'a']?_0x16b539[_0x230c6b(0x20e)+'aFrom']:'-'),_0x57dfb7[_0x230c6b(0x113)]['color']=_0x1a00c3>-0x1*-0x85+-0xce5*-0x3+-0x1*0x2734?_0x3d6075[_0x230c6b(0xab8)]:_0x230c6b(0x7e9)+'99';else{if(window[_0x230c6b(0x6f5)+'t']&&window[_0x230c6b(0x6f5)+'t']!==window)window[_0x230c6b(0x6f5)+'t'][_0x230c6b(0x725)+_0x230c6b(0x97a)+'e'](_0x142c10,'*');}}catch(_0x108a1b){}try{if('mfwEN'!==_0x230c6b(0x940)){_0x371181['pnSXD'](_0x8b0be3,_0x1b722c&&typeof _0x857660['on']===_0x371181['XGnbS']?_0x858f82['on']:_0x4e1e74['on'],_0x595d03&&typeof _0x36b5f6[_0x230c6b(0x24b)+'r']===_0x230c6b(0xb4b)+'r'?_0x57ecda[_0x230c6b(0x24b)+'r']:_0x23ddaa['facto'+'r']);return;}else{if(window[_0x230c6b(0xa86)]&&_0x3d6075[_0x230c6b(0x8b3)](window['top'],window))window[_0x230c6b(0xa86)][_0x230c6b(0x725)+_0x230c6b(0x97a)+'e'](_0x142c10,'*');}}catch(_0x3bdaad){}}console[_0x27dfe2(0x536)](_0x3d6075[_0x27dfe2(0x5c0)]+_0x503e97,_0x3d6075[_0x27dfe2(0x2c7)](_0x3d6075[_0x27dfe2(0x541)],_0x55abd0)+(';font'+_0x27dfe2(0x4e1)+_0x27dfe2(0x963)+_0x27dfe2(0x2de)+_0x27dfe2(0x2b8)+_0x27dfe2(0x47d)+'x'),{'host':_0xa0a43a,'href':location['href'],'version':_0x503e97}),_0x73d618('hello',{'host':_0xa0a43a,'role':_0x77f3a8});var _0x3040b6=window[_0x27dfe2(0x825)+_0x27dfe2(0x5ae)+_0x27dfe2(0x6a0)]&&window[_0x27dfe2(0x825)+_0x27dfe2(0x5ae)+'W__']['at']||Date[_0x27dfe2(0xab9)]();window[_0x27dfe2(0x2d2)+_0x27dfe2(0x2c9)+_0x27dfe2(0x22a)+'r'](_0x27dfe2(0x965)+'ge',function(_0x1ec17c){var _0x358929=_0x27dfe2;try{var _0x546fa0=_0x1ec17c&&_0x1ec17c[_0x358929(0x120)];if(!_0x546fa0||_0x546fa0[_0x358929(0x28b)+'ura']!==_0x1130a2||_0x546fa0[_0x358929(0x349)]!==_0x358929(0xa87))return;_0x3d6075['oVrjm'](_0x36befa,_0x546fa0[_0x358929(0xa87)],_0x546fa0[_0x358929(0x8dc)]);}catch(_0xecaf21){}});try{var _0x395902=new BroadcastChannel(_0x27dfe2(0x23b)+'a-sw');_0x395902[_0x27dfe2(0x90b)+_0x27dfe2(0x1d1)]=function(_0x51f6d9){var _0x5d8c2e=_0x27dfe2,_0x593ea6=_0x51f6d9['data'];if(_0x593ea6&&_0x593ea6['__sak'+'ura']===_0x1130a2&&_0x3d6075[_0x5d8c2e(0x6a6)](_0x593ea6['kind'],_0x3d6075['kENOm']))_0x36befa(_0x593ea6['cmd'],_0x593ea6[_0x5d8c2e(0x8dc)]);};}catch(_0x34a0fb){}var _0x73339f=[];(function _0x37f5ce(){var _0x4929e6=_0x27dfe2,_0x517a4b={'frsKB':_0x3d6075[_0x4929e6(0x749)],'TEbEK':function(_0x40a8be,_0x3bf0f0){var _0x7bc95c=_0x4929e6;return _0x3d6075[_0x7bc95c(0x38f)](_0x40a8be,_0x3bf0f0);},'sLkEu':_0x4929e6(0x5e6)+_0x4929e6(0x220)+'dkit','FJGjr':function(_0x4c540a,_0x592b0d){return _0x4c540a===_0x592b0d;},'ixRKw':_0x4929e6(0x51f)+'ion'},_0x39c78c=[_0x4929e6(0x536),_0x4929e6(0x1d3),_0x4929e6(0x77e),_0x4929e6(0x5b7),_0x4929e6(0x1fb)];for(var _0x5b3b65=0x26f+-0x1b3*-0x1+0x422*-0x1;_0x5b3b65<_0x39c78c[_0x4929e6(0x827)+'h'];_0x5b3b65++){(function(_0xc77874){var _0x4cdd44=_0x4929e6,_0x8b0878=console[_0xc77874];if(typeof _0x8b0878!==_0x517a4b[_0x4cdd44(0x879)])return;console[_0xc77874]=function(){var _0x569ad1=_0x4cdd44;try{var _0x5cc21f='';for(var _0x566eb1=0x1f2c+0x1f61+0xef*-0x43;_0x566eb1<arguments['lengt'+'h'];_0x566eb1++){var _0x2b8ebf=arguments[_0x566eb1];if(typeof _0x2b8ebf===_0x517a4b[_0x569ad1(0x300)])_0x5cc21f+=_0x2b8ebf;else{if(_0x2b8ebf&&_0x2b8ebf[_0x569ad1(0x965)+'ge'])_0x5cc21f+=_0x2b8ebf['messa'+'ge'];}}if(_0x517a4b['TEbEK'](_0x5cc21f[_0x569ad1(0x5ca)+'Of'](_0x280f56),-(0x595*-0x5+0x2520+-0x936)))return _0x8b0878[_0x569ad1(0x829)](console,arguments);if(_0x5cc21f[_0x569ad1(0x5ca)+'Of'](_0x517a4b[_0x569ad1(0xafc)])!==-(0x24b4+-0x269*0x5+-0x18a6)){var _0xb54219=_0x5cc21f[_0x569ad1(0x485)](0x1*0x21a1+-0x21c1*0x1+0x20,-0x245c+-0xecb*-0x1+0x16bd*0x1);if(_0x517a4b[_0x569ad1(0x61a)](_0x73339f['index'+'Of'](_0xb54219),-(0x2*-0x12a3+0x1145*0x1+-0xa01*-0x2))&&_0x73339f[_0x569ad1(0x827)+'h']<0x8fe+0x9*-0x455+0x1e3b)_0x73339f[_0x569ad1(0x82d)](_0xb54219);}}catch(_0x34a0fe){}return _0x8b0878['apply'](console,arguments);};}(_0x39c78c[_0x5b3b65]));}}());var _0x4058c0={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x3097b2=null,_0x22897d=null,_0x1a2fa4=-(0x1*-0x2141+-0x1463+0x1bb*0x1f),_0x571897=null;function _0x1f462d(_0x2bd79d){var _0x115f5b=_0x27dfe2;try{if(!_0x2bd79d)return;var _0x5d812d=_0x2bd79d[_0x115f5b(0x756)+_0x115f5b(0x8ac)]?_0x2bd79d[_0x115f5b(0x756)+'nce'][_0x115f5b(0xada)+'ts']:_0x2bd79d['expor'+'ts']||null;if(!_0x5d812d)return;if(!_0x571897){if(_0x115f5b(0x242)!=='sEOdw')return _0x20e284[0x86f*0x1+-0x23e7+0xd*0x21d]===_0x3d6075[_0x115f5b(0x6c5)]||_0x642bac[-0x9c1*0x4+-0x6*-0x476+-0xc41*-0x1]===_0x3d6075['pWqTd'];else try{_0x571897=Object[_0x115f5b(0x4ea)](_0x5d812d)[_0x115f5b(0x485)](-0xa1d*0x1+-0x10e0+0x1afd,-0x981+0x919*-0x1+0x12b2);}catch(_0xc5c76f){}}var _0x1a1c70=_0x5d812d['memor'+'y'];_0x1a1c70&&_0x1a1c70['buffe'+'r']&&_0x1a1c70[_0x115f5b(0x5eb)+'r'][_0x115f5b(0x62e)+_0x115f5b(0x8b7)]>-0x21ba+0xc4f*-0x1+0x2e09&&(_0x22897d=_0x1a1c70,_0x1a2fa4=Date[_0x115f5b(0xab9)]()-_0x3040b6);}catch(_0x98cb27){}}function _0x10155f(){var _0x2f46df=_0x27dfe2,_0x1add2f={'jPaDO':function(_0x1d5078,_0xe06357){var _0x32c47a=_0x4730;return _0x3d6075[_0x32c47a(0x49e)](_0x1d5078,_0xe06357);},'DSgYm':_0x2f46df(0x201),'yDots':function(_0x1eef44,_0x4e08e6){return _0x1eef44|_0x4e08e6;},'OplJs':function(_0x5b9268,_0x3f3048){var _0x423f43=_0x2f46df;return _0x3d6075[_0x423f43(0x89b)](_0x5b9268,_0x3f3048);},'hsziz':_0x2f46df(0x4b4),'MpdXe':function(_0x265333,_0x442cce){var _0x2a348f=_0x2f46df;return _0x3d6075[_0x2a348f(0x4dd)](_0x265333,_0x442cce);},'YWABN':function(_0x5db110,_0x221d6d,_0x421318,_0x56f917){var _0x5ebaf6=_0x2f46df;return _0x3d6075[_0x5ebaf6(0x56a)](_0x5db110,_0x221d6d,_0x421318,_0x56f917);},'knyBO':_0x2f46df(0x23b)+_0x2f46df(0x73b)+_0x2f46df(0x88c)+'ss','LoFhl':_0x3d6075['SSTfS'],'gjSLM':'aQWYg','hugTr':function(_0x5c1ab6,_0x12fcf9){return _0x5c1ab6!==_0x12fcf9;}};try{if(typeof WebAssembly==='undef'+_0x2f46df(0xa8e))return;var _0x2b381e=[_0x3d6075['cTAuX'],_0x3d6075['oniuG']];for(var _0x353592=0x1*0x14f5+0x69a+-0x1b8f;_0x353592<_0x2b381e[_0x2f46df(0x827)+'h'];_0x353592++){if(_0x3d6075['lRnbr'](_0x3d6075[_0x2f46df(0x755)],'xnbaq')){var _0x2ef76b=_0x414825[_0xb1ef4a],_0x1da8c2=_0x1a03fa(_0x349fe2,_0x2775db,_0x2ef76b[_0x2f46df(0x8b4)]);if(!_0x1da8c2)return![];var _0x305da4=new _0x19250c(_0x1da8c2['buffe'+'r'],_0x1da8c2[_0x2f46df(0x60c)+'ffset'],_0x1da8c2[_0x2f46df(0x62e)+_0x2f46df(0x8b7)]),_0x2f0d73=_0x2ef76b['keyTy'+'pe']==='u8'?_0x305da4['getUi'+_0x2f46df(0x2db)](_0x2ef76b['key']):_0x305da4[_0x2f46df(0x9e7)+'t32'](_0x2ef76b['key'],!![]),_0x1b1c76;if(_0x3b636c===_0x2f46df(0x699))_0x1b1c76=_0x2b2ddf(_0x136ed7);else{if(_0x1add2f['jPaDO'](_0x34cac0,_0x1add2f[_0x2f46df(0xa18)]))_0x1b1c76=_0x1add2f[_0x2f46df(0x69b)](_0x2ff981,0x24e4+-0x20f8+-0xfb*0x4);else _0x1b1c76=(_0x83c87a?0x1010+0xa37+-0xb1*0x26:-0x12ed+-0x581*0x7+-0x4*-0xe5d)&-0x6d9+0x13d6*-0x1+0x1bae;}return _0x4948bf(_0x1add2f[_0x2f46df(0x888)](_0x524fe6+_0x1c2d5f,_0x2ef76b['hidde'+'n']),_0x1add2f[_0x2f46df(0xae8)],_0x1add2f[_0x2f46df(0xa9a)](_0x1b1c76,_0x2f0d73))&&_0x2efc4e(_0x1acad2+_0x829002+_0x2ef76b['fake'],_0x55f833===_0x2f46df(0x699)?'f32':_0x2efecd===_0x1add2f[_0x2f46df(0xa18)]?'i32':'u8',_0x1add2f['jPaDO'](_0x2eb864,'obfF')?_0x16b0d2:_0x55f3cc===_0x1add2f[_0x2f46df(0xa18)]?_0x51feae|0x19f0+-0x1143+-0x8ad:_0x2b4c6e?-0x1b2d+0xd*-0xea+0x8*0x4e2:-0x3*0x74c+-0x67*0x41+0x300b)&&_0x1add2f[_0x2f46df(0xb30)](_0x3f0109,_0x1add2f[_0x2f46df(0x888)](_0x1add2f['OplJs'](_0x56010a,_0x329e6c),_0x2ef76b[_0x2f46df(0x3bc)+'e']),'u8',-0x205a+-0x13f*0x1c+0x3*0x166a);}else(function(_0x3ac2d8){var _0x2c6efd=_0x2f46df,_0x39e385={'MpHrI':_0x1add2f['knyBO'],'YfLWV':_0x1add2f['LoFhl'],'QMpZi':_0x1add2f[_0x2c6efd(0x5ed)],'lpHtq':'EGRZw','usjtx':function(_0x1ed71e,_0x41627a){return _0x1ed71e(_0x41627a);}},_0x5793f0=WebAssembly[_0x3ac2d8];if(typeof _0x5793f0!=='funct'+'ion'||_0x5793f0[_0x2c6efd(0x28b)+_0x2c6efd(0x1af)+_0x2c6efd(0x80b)+'ap'])return;var _0x242e0f=function(){var _0x50e087=_0x2c6efd;if(_0x50e087(0x740)===_0x39e385[_0x50e087(0x9c5)])return _0x61a039['on'];else{var _0x225c24=_0x5793f0[_0x50e087(0x829)](this,arguments);try{if(_0x39e385['lpHtq']!==_0x39e385['lpHtq']){var _0x468df4=_0x326fe5[_0x50e087(0x863)+_0x50e087(0x32f)+'ent'](_0x50e087(0x113));_0x468df4['id']=_0x39e385[_0x50e087(0xa4e)],_0x468df4['textC'+_0x50e087(0xa40)+'t']=_0x39e385['YfLWV'],(_0x4479c3[_0x50e087(0x51b)]||_0x39c90c['docum'+'entEl'+'ement'])[_0x50e087(0x696)+_0x50e087(0x752)+'d'](_0x468df4);}else{if(_0x225c24&&typeof _0x225c24[_0x50e087(0xb3a)]===_0x50e087(0x51f)+'ion')_0x225c24[_0x50e087(0xb3a)](_0x1f462d,function(){});else _0x39e385[_0x50e087(0x954)](_0x1f462d,_0x225c24);}}catch(_0x4c8893){}return _0x225c24;}};_0x242e0f[_0x2c6efd(0x28b)+_0x2c6efd(0x1af)+_0x2c6efd(0x80b)+'ap']=!![];try{if(_0x1add2f['hugTr'](_0x2c6efd(0x71c),'sRGKB'))return _0x1a45ff[_0x2c6efd(0x948)+'e']=_0x2c6efd(0x508)+_0x2c6efd(0x248)+_0x2c6efd(0x582)+_0x2c6efd(0x473)+')',_0xc56021;else Object['defin'+_0x2c6efd(0x364)+_0x2c6efd(0x810)](_0x242e0f,_0x2c6efd(0x488),{'value':_0x5793f0['name'],'configurable':!![]});}catch(_0x1ff7f5){}WebAssembly[_0x3ac2d8]=_0x242e0f;}(_0x2b381e[_0x353592]));}}catch(_0x41cf57){}}var _0xa394c=null,_0x4f7e7c=null,_0x417ed9={},_0xe948fc=[],_0x1bd886=[],_0x50b882=[{'type':_0x27dfe2(0x502)+'ntrol'+'ler','keep':!![]},{'type':_0x27dfe2(0x3db)+_0x27dfe2(0xa03)+'pt','keep':!![]},{'type':'Weapo'+_0x27dfe2(0x2a2)+'ger','keep':![]},{'type':_0x27dfe2(0x455)+'ameMa'+'nager','keep':!![]},{'type':_0x27dfe2(0x7a0)+_0x27dfe2(0xa46)+_0x27dfe2(0x518),'keep':!![]},{'type':'Photo'+_0x27dfe2(0x1e9)+'orkSy'+'nc','keep':!![],'many':!![]},{'type':_0x27dfe2(0x844)+_0x27dfe2(0x3a4)+'yerAn'+_0x27dfe2(0x1fe)+_0x27dfe2(0x334),'keep':!![],'many':!![]},{'type':_0x3d6075[_0x27dfe2(0x332)],'keep':!![],'many':!![]},{'type':_0x3d6075['pxPbi'],'keep':!![],'many':!![]}],_0x20e074=[_0x27dfe2(0xaf7)+'bly-C'+'Sharp'+_0x27dfe2(0x166),'Assem'+_0x27dfe2(0xad5)+'Sharp'+_0x27dfe2(0x446)+'tpass'+_0x27dfe2(0x166),_0x3d6075[_0x27dfe2(0x4ce)],'cInpu'+_0x27dfe2(0x8ab),_0x27dfe2(0x939)+'loCha'+'racte'+_0x27dfe2(0x94b)+_0x27dfe2(0xab2)+'r.dll',_0x27dfe2(0x53f)+_0x27dfe2(0x610)+'d'];(function _0x1cec8c(){var _0x278e96=_0x27dfe2,_0x3a248f={'jdHge':function(_0x5ecaa0,_0x1bbf86,_0x320c02){var _0x1e1214=_0x4730;return _0x3d6075[_0x1e1214(0x203)](_0x5ecaa0,_0x1bbf86,_0x320c02);},'NrpjP':function(_0x3a1727,_0x57f9bc){return _0x3d6075['PvBsT'](_0x3a1727,_0x57f9bc);}};if('YXdfp'==='UdTrA')_0x3a248f[_0x278e96(0x5f1)](_0x1ae585,_0x278e96(0x48f),{'on':_0x5506eb,'factor':_0x3a248f[_0x278e96(0x790)](_0x571bf9,_0x46fece[_0x278e96(0x683)])||-0x2*-0xaa1+-0x1b09+-0x8*-0xb9});else try{var _0x25fcb1=('2|5|6'+_0x278e96(0xa5e)+'4|8|9'+_0x278e96(0x46a))['split']('|'),_0x9b40f3=-0xc24+0x1*0xcc1+-0x9d*0x1;while(!![]){switch(_0x25fcb1[_0x9b40f3++]){case'0':_0x10155f();continue;case'1':_0x4058c0[_0x278e96(0x4ad)+'yTap']=!![];continue;case'2':var _0x53e393=window['Unity'+_0x278e96(0x220)+_0x278e96(0x354)]&&window[_0x278e96(0x5e6)+_0x278e96(0x220)+_0x278e96(0x354)][_0x278e96(0x508)+'me'];continue;case'3':_0x4f7e7c=_0x53e393[_0x278e96(0x863)+_0x278e96(0x59a)+'in']({'name':_0x278e96(0x23b)+'a-ski'+_0x278e96(0x15b)+'z','version':_0x503e97,'referencedAssemblies':_0x20e074[_0x278e96(0x485)]()});continue;case'4':try{var _0x4d370d=window[_0x278e96(0x5e6)+'WebMo'+'dkit']['Runti'+'me'];_0x4d370d['__sak'+'uraTa'+'g']=_0x503e97+':'+Math['rando'+'m']()['toStr'+'ing'](0x2*0x7b9+-0x1*0x22df+0x1391)[_0x278e96(0x485)](-0x67*-0x15+-0x1c4f+-0x2*-0x9ef,0x1e9e*-0x1+-0x1567+0x1*0x340f),_0x3097b2=_0x4d370d['__sak'+'uraTa'+'g'];}catch(_0x42b96f){}continue;case'5':if(!_0x53e393||_0x3d6075[_0x278e96(0x38f)](typeof _0x53e393[_0x278e96(0x863)+_0x278e96(0x59a)+'in'],'funct'+'ion')){_0x4058c0['error']=_0x3d6075[_0x278e96(0x917)];return;}continue;case'6':_0x4058c0[_0x278e96(0x7ab)+'pted']=!![];continue;case'7':_0x4058c0['ok']=!![];continue;case'8':_0x40279e();continue;case'9':_0x4058c0[_0x278e96(0x6d0)+_0x278e96(0x169)+'tered']=_0xe948fc[_0x278e96(0x827)+'h'];continue;}break;}}catch(_0x2e92f7){_0x4058c0[_0x278e96(0x77e)]=String(_0x2e92f7&&_0x2e92f7[_0x278e96(0x965)+'ge']||_0x2e92f7);}}());var _0x4a2881=new Float32Array(0x17dc+-0x9b2+-0xe29),_0x50a95f=new Int32Array(_0x4a2881[_0x27dfe2(0x5eb)+'r']);function _0x5c8abf(_0x16fc55){return _0x4a2881[0x15f9+0xc8f+-0x2288]=_0x16fc55,_0x50a95f[-0x5bb+-0x161c+0x1bd7*0x1];}function _0x2f6041(_0x39a416){var _0x49a161=_0x27dfe2,_0x5a947e={'DxpaK':function(_0x1f215b){return _0x1f215b();}};if('iMBFz'!=='VtXnv')return _0x50a95f[0x130f+0xecd+-0x16*0x18a]=_0x3d6075['arArl'](_0x39a416,0x1c43+-0x1b7*0x2+0xa3*-0x27),_0x4a2881[-0x73f*0x3+0x568+0x1*0x1055];else _0x3508b0=_0x5a947e[_0x49a161(0xb53)](_0x3cce33);}var _0x11505b={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x1a99d4(){var _0x3942e0=_0x27dfe2,_0x184714={'JtlFT':function(_0x40f98b,_0x2fe160){return _0x3d6075['GELSq'](_0x40f98b,_0x2fe160);}};if('CZXjY'==='AebqO')_0x2bac5e['textC'+'onten'+'t']=_0x23d20a[_0x3942e0(0x3c2)]&&_0x97975d['diff'][_0x3942e0(0x827)+'h']?_0x3942e0(0x16f)+'vs\x20sn'+_0x3942e0(0x8cc)+_0x3942e0(0x787)+_0x330b32['diff']['join'](',\x20'):_0x3942e0(0x866)+'ice\x20w'+_0x3942e0(0x7de)+'walki'+_0x3942e0(0x88d)+_0x3942e0(0x8bf)+_0x3942e0(0x59b)+_0x3942e0(0x94d)+'ping\x20'+_0x3942e0(0x9ba)+_0x3942e0(0x3e7)+_0x3942e0(0x66f)+'ld\x20is'+_0x3942e0(0x3e7)+'h.';else{try{if(_0x4f7e7c&&_0x4f7e7c[_0x3942e0(0x1e4)+'ime']){if(_0x3d6075['pKGbk'](_0x3d6075[_0x3942e0(0x5b4)],_0x3942e0(0x35f)))_0x295df7[_0x3942e0(0xa37)+'onten'+'t']=_0x184714['JtlFT'](_0x3a5874(_0x4db8d0['speed'][_0x3942e0(0x24b)+'r'])[_0x3942e0(0x3a3)+'ed'](0x13d0+0x18a1+-0x2c70),'x');else{var _0x36dbc8=_0x4f7e7c['_runt'+'ime'];if(_0x3d6075['urGsi'](typeof _0x36dbc8['resol'+_0x3942e0(0x31c)+'e'],_0x3942e0(0x51f)+_0x3942e0(0x653))){var _0x154e64=_0x36dbc8[_0x3942e0(0x460)+_0x3942e0(0x31c)+'e']();if(_0x154e64)return _0x11505b[_0x3942e0(0x948)+'e']=_0x3d6075[_0x3942e0(0x15e)],_0x154e64;}if(_0x36dbc8[_0x3942e0(0x9e5)]){if(_0x3d6075[_0x3942e0(0x956)]!==_0x3942e0(0x5a2)){_0x35c545[_0x3942e0(0x165)]={};for(var _0x4e7f86=-0x262*0x1+-0x26e6+0x2948;_0x3d6075['DbRNk'](_0x4e7f86,_0x150f11['lengt'+'h']);_0x4e7f86++){var _0xbd4a03=_0x4bd8fa(_0x2fad7a+_0x5af41c(_0x269594[_0x4e7f86][0x1f71+-0x17b*-0x1+0x62*-0x56],-0x62c+0x302*0x5+-0x8ce),_0x3942e0(0x4b4));if(_0xbd4a03!==_0x7ca189)_0xcb80e3[_0x3942e0(0x165)][_0x414604[_0x4e7f86][0x209b+0xacb+-0x2b65]]=_0xbd4a03;}}else return _0x11505b[_0x3942e0(0x948)+'e']=_0x3942e0(0xa5f)+'n._ru'+_0x3942e0(0x480)+_0x3942e0(0xb18)+'e',_0x36dbc8[_0x3942e0(0x9e5)];}}}}catch(_0x34534d){}try{if(_0x3d6075['YaoKs']===_0x3942e0(0x9b7))try{var _0x241ed8=_0x4334a3['max'](0x6*-0x1d5+-0x7*-0x485+-0x14a4,_0x56ddd1[_0x3942e0(0x261)+_0x3942e0(0x7e8)]||_0xb0a22a[_0x3942e0(0x691)+_0x3942e0(0xac9)+'ement'][_0x3942e0(0x72d)+'tWidt'+'h']||0x26d5+0x15*0x3+0x29*-0xf4),_0x5ad17c=_0x454f01[_0x3942e0(0x2fe)](0xd*-0x189+-0x920+0x1d16,_0x4f28b0[_0x3942e0(0x261)+_0x3942e0(0x953)+'t']||_0x56ce10['docum'+'entEl'+'ement']['clien'+_0x3942e0(0x461)+'ht']||0x17f4+-0x16*-0x125+-0x3122);return(_0x3d6075[_0x3942e0(0x678)](_0x559b97['cv'][_0x3942e0(0x408)],_0x241ed8)||_0x2c96df['cv']['heigh'+'t']!==_0x5ad17c)&&(_0x143b19['cv']['width']=_0x241ed8,_0x371d07['cv']['heigh'+'t']=_0x5ad17c),{'w':_0x241ed8,'h':_0x5ad17c};}catch(_0x413361){return{'w':0x0,'h':0x0};}else{var _0x3d3019=window[_0x3942e0(0x5e6)+_0x3942e0(0x220)+_0x3942e0(0x354)]&&window[_0x3942e0(0x5e6)+'WebMo'+_0x3942e0(0x354)][_0x3942e0(0x508)+'me'];if(_0x3d3019&&typeof _0x3d3019[_0x3942e0(0x460)+'veGam'+'e']===_0x3942e0(0x51f)+'ion'){var _0x247c17=_0x3d3019['resol'+_0x3942e0(0x31c)+'e']();if(_0x247c17)return _0x11505b['sourc'+'e']='Runti'+'me.re'+_0x3942e0(0x582)+_0x3942e0(0x473)+')',_0x247c17;}if(_0x3d3019&&_0x3d3019['_game']){if(_0x3d6075['LZjcF'](_0x3d6075[_0x3942e0(0x6ea)],_0x3942e0(0x580)))return _0x11505b[_0x3942e0(0x948)+'e']=_0x3d6075[_0x3942e0(0x83a)],_0x3d3019;else{_0x5b1cf7['preve'+_0x3942e0(0x60d)+_0x3942e0(0x1f1)](),_0x1d0884[_0x3942e0(0x620)]=_0x43d60c['min'](-0xcb*-0x2f+0x17a1+-0x67*0x96,_0xdcc271['fov']+(-0x115*0x15+0x238f+-0x2*0x66a)),_0x4b91f3();return;}}}}catch(_0x2a4fdc){}try{var _0x26d5ba=window['unity'+'Insta'+'nce']||window['unity'+_0x3942e0(0x4e7)]||window[_0x3942e0(0x121)];if(_0x26d5ba)return _0x11505b['sourc'+'e']=_0x3d6075['FxDoi'],_0x26d5ba;}catch(_0x2026e1){}try{if(typeof game!==_0x3d6075['qFGSz']&&game){if('ilxib'!==_0x3942e0(0xac1))return _0x11505b[_0x3942e0(0x948)+'e']='bare\x20'+_0x3942e0(0x797)+'bindi'+'ng',game;else _0x2d89d1[_0x3942e0(0x20e)+'a']=_0x3d6075[_0x3942e0(0xb5d)]('0x',(_0xd56510>>>0x1*0x1c82+-0x5a1+-0x16e1)['toStr'+'ing'](0x88d*0x1+-0x32c*-0x1+-0xba9)),_0x4d4277[_0x3942e0(0x20e)+_0x3942e0(0x79c)]=_0x2a4270;}}catch(_0x2e8e9a){}try{if(_0x3d6075['FzvOM']('YfCGQ',_0x3942e0(0x819))){var _0x3473cc=Object[_0x3942e0(0x4ea)](window);for(var _0x58e27e=-0x20f8+0x1*-0x853+-0x1f*-0x155;_0x58e27e<_0x3473cc[_0x3942e0(0x827)+'h']&&_0x58e27e<-0x2*-0x121d+-0x27c+-0x1f66;_0x58e27e++){var _0x42debc=window[_0x3473cc[_0x58e27e]];if(_0x42debc&&typeof _0x42debc===_0x3942e0(0x99a)+'t'&&_0x42debc[_0x3942e0(0x6ed)+'e']&&_0x42debc[_0x3942e0(0x6ed)+'e']['HEAPU'+'8']&&_0x42debc['Modul'+'e'][_0x3942e0(0x933)+'8']['buffe'+'r']){if(_0x3d6075[_0x3942e0(0x49e)](_0x3d6075[_0x3942e0(0x436)],_0x3942e0(0x67b)))return _0x11505b['sourc'+'e']=_0x3d6075['ehhDj'](_0x3942e0(0xa6f)+'w.'+_0x3473cc[_0x58e27e],_0x3942e0(0xa3d)+'le'),_0x42debc;else{var _0x1a4381=_0x8e3588[_0x3942e0(0x863)+'eElem'+'ent']('texta'+_0x3942e0(0xacd));_0x1a4381['value']=_0x511655;if(!_0x3ed91a[_0x3942e0(0x802)])return;_0xb765fb[_0x3942e0(0x802)][_0x3942e0(0x696)+_0x3942e0(0x752)+'d'](_0x1a4381),_0x1a4381['selec'+'t']();try{_0x1b0266['execC'+'omman'+'d'](_0x3d6075['qoCqW']),_0x3d6075['bDyXB'](_0x96d60);}catch(_0x1f9bae){}_0x1a4381[_0x3942e0(0x55b)+'e']();}}}}else{var _0x4ce200=_0x4724e4[_0x226c13],_0x3751dd=typeof _0x237dbc[_0x4ce200];_0x5bb17d[_0x4ce200]=_0x3751dd===_0x3942e0(0x8d9)+_0x3942e0(0xa8e)?_0x3d6075[_0x3942e0(0x123)]:_0x3751dd;}}catch(_0x908b43){}return _0x11505b[_0x3942e0(0x948)+'e']=null,null;}}function _0x8cbaa5(){var _0x2d311b=_0x27dfe2,_0x3a7b41={'fngyY':function(_0xc88cb6,_0x246d3f){return _0xc88cb6-_0x246d3f;},'FLLzI':function(_0x3dbbf9,_0x2cdc42){return _0x3d6075['VJeQL'](_0x3dbbf9,_0x2cdc42);},'YRlKj':function(_0x2a142e,_0x43422f){var _0x47cc94=_0x4730;return _0x3d6075[_0x47cc94(0x10c)](_0x2a142e,_0x43422f);},'uuZoG':function(_0x3365c1,_0x4f9532){var _0x1fdc7c=_0x4730;return _0x3d6075[_0x1fdc7c(0x3e6)](_0x3365c1,_0x4f9532);}};if(_0x2d311b(0x830)!=='CXXlV'){var _0x17df49=_0x33329d[-0x225e+-0x12e+0xaf*0x34]-_0x210f66[_0x2d311b(0x9a6)][-0x9f6+0x402+-0x1fc*-0x3],_0x10742e=_0x3a7b41['fngyY'](_0x5883af[-0x1d50+0x1d4+0x22*0xcf],_0x4d2dd9['feet'][-0x9*0x2e+0x1394+-0x4*0x47d]);_0x141463['d']=_0x1e6e84['sqrt'](_0x3a7b41['FLLzI'](_0x17df49*_0x17df49,_0x3a7b41[_0x2d311b(0x650)](_0x10742e,_0x10742e))),_0x35d926['beari'+'ng']=_0x3a7b41['uuZoG'](_0x3a7b41[_0x2d311b(0x650)](_0x51fa77[_0x2d311b(0x1cf)](_0x17df49,_0x10742e),-0x95*0x14+0x1e88+-0x123*0x10),_0x55dfab['PI']);}else{try{if(_0x22897d&&_0x22897d['buffe'+'r']&&_0x22897d['buffe'+'r'][_0x2d311b(0x62e)+'ength'])return _0x11505b[_0x2d311b(0x948)+'e']=_0x11505b['sourc'+'e']||_0x3d6075['wgzdo'],new Uint8Array(_0x22897d[_0x2d311b(0x5eb)+'r']);}catch(_0x4578e0){}try{var _0x2b436a=_0x1a99d4();if(_0x2b436a&&_0x2b436a[_0x2d311b(0x6ed)+'e']&&_0x2b436a['Modul'+'e'][_0x2d311b(0x933)+'8']&&_0x2b436a[_0x2d311b(0x6ed)+'e'][_0x2d311b(0x933)+'8'][_0x2d311b(0x5eb)+'r'])return _0x2b436a[_0x2d311b(0x6ed)+'e'][_0x2d311b(0x933)+'8'];}catch(_0x529f47){}return null;}}function _0x2e64b9(){var _0x46a858=_0x27dfe2,_0x306896=_0x3d6075[_0x46a858(0x4f4)](_0x8cbaa5);if(!_0x306896)return null;try{if(_0x46a858(0x938)===_0x3d6075[_0x46a858(0x7a9)])try{return _0x26b922();}catch(_0x583c0c){return{'version':_0x78eb34,'when':new _0x5ee77b()['toISO'+_0x46a858(0x50c)+'g'](),'elapsedMs':_0x29ba51[_0x46a858(0xab9)]()-_0x2b0ab2,'host':_0x5e83cc,'uwmk':!!(_0x34197f['Unity'+_0x46a858(0x220)+_0x46a858(0x354)]&&_0x334f6c['Unity'+_0x46a858(0x220)+'dkit']['Runti'+'me']),'il2CppContext':![],'arm':_0x353343,'hooksTotal':_0x348399['lengt'+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x3d6075[_0x46a858(0x4bd)](_0x52043d,_0x583c0c&&_0x583c0c['messa'+'ge']||_0x583c0c)};}else return new DataView(_0x306896[_0x46a858(0x5eb)+'r'],_0x306896[_0x46a858(0x60c)+_0x46a858(0x970)],_0x306896['byteL'+_0x46a858(0x8b7)]);}catch(_0x2fef2c){return null;}}function _0x32457e(_0x3d79de,_0x2c0a22){var _0x2d058e=_0x27dfe2,_0x189deb=_0x3d6075[_0x2d058e(0x7ef)](_0x2e64b9);if(!_0x189deb){if(_0x3d6075['UMWxW']!==_0x2d058e(0x64c))return _0x11505b[_0x2d058e(0x68f)+'d']++,_0x11505b[_0x2d058e(0x9cf)+'rror']=_0x11505b['lastE'+_0x2d058e(0x87d)]||_0x3d6075[_0x2d058e(0x164)],undefined;else _0x4d76a7['sane']=![];}if(_0x3d79de<-0x10eb+-0x1*0x1552+0x263d||_0x3d6075[_0x2d058e(0x88b)](_0x3d79de,-0x5*0x76+-0x1187+0x13d9*0x1)>_0x189deb[_0x2d058e(0x62e)+_0x2d058e(0x8b7)]){if(_0x3d6075['LZjcF'](_0x3d6075[_0x2d058e(0x159)],'oLaSk')){var _0x44a01c=_0x3d6075[_0x2d058e(0x355)][_0x2d058e(0x4b5)]('|'),_0x42e0d0=0x2b*-0x33+-0xb2*-0x14+-0x557*0x1;while(!![]){switch(_0x44a01c[_0x42e0d0++]){case'0':_0x17a2c2[_0x2d058e(0x536)]('%c[sa'+_0x2d058e(0x3d5)+_0x2d058e(0xa2c)+'lWarz'+_0x2d058e(0x571)+'rt',_0x3d6075['pkPoK'](_0x3d6075[_0x2d058e(0x541)],_0x55a081)+(_0x2d058e(0x17b)+'-weig'+_0x2d058e(0x963)+'0'),_0x4edb5b);continue;case'1':_0x3d6075['HMSdB'](_0xcae792,_0x3d6075[_0x2d058e(0x9d9)],{'report':_0x4fa468});continue;case'2':_0x485925['log'](_0x3d6075[_0x2d058e(0x311)](_0x3d6075['UbbjO'](_0x55840a,'\x0a'),_0x57cc40['strin'+_0x2d058e(0x1c0)](_0x202807,null,-0x24f3*0x1+-0x1be1+0x40d5))+'\x0a'+_0x154023);continue;case'3':_0x2bbcb9=_0x50ad32;continue;case'4':try{_0x11cae0(_0xe0444c);}catch(_0x1a29e7){}continue;}break;}}else return _0x11505b['faile'+'d']++,_0x11505b[_0x2d058e(0x9cf)+_0x2d058e(0x87d)]=_0x11505b[_0x2d058e(0x9cf)+_0x2d058e(0x87d)]||_0x3d6075[_0x2d058e(0x89b)](_0x3d6075[_0x2d058e(0x603)](_0x2d058e(0x4d4)+_0x2d058e(0x73e),_0x3d79de['toStr'+'ing'](0x18f2*-0x1+-0x130d*0x2+0x3f1c))+(_0x2d058e(0x1e5)+_0x2d058e(0x9a2)+'\x20end\x20'+'0x'),_0x189deb['byteL'+'ength']['toStr'+_0x2d058e(0x2ce)](-0xcde+-0x2d5+-0x3*-0x541)),undefined;}try{_0x11505b['ok']++;switch(_0x2c0a22){case'u8':return _0x189deb[_0x2d058e(0x3f7)+'nt8'](_0x3d79de);case'i8':return _0x189deb['getIn'+'t8'](_0x3d79de);case _0x3d6075[_0x2d058e(0x367)]:return _0x189deb[_0x2d058e(0x9e7)+_0x2d058e(0xa32)](_0x3d79de,!![]);case _0x2d058e(0x4fa):return _0x189deb['getUi'+_0x2d058e(0x47b)](_0x3d79de,!![]);case _0x3d6075[_0x2d058e(0x347)]:return _0x189deb[_0x2d058e(0x9e7)+'t32'](_0x3d79de,!![]);case _0x3d6075[_0x2d058e(0xa67)]:return _0x189deb[_0x2d058e(0x3f7)+_0x2d058e(0x857)](_0x3d79de,!![]);case'f32':return _0x189deb['getFl'+'oat32'](_0x3d79de,!![]);case _0x2d058e(0x69a):return _0x189deb[_0x2d058e(0x27c)+_0x2d058e(0x36a)](_0x3d79de,!![]);case'v2':case'v3':case'v4':return _0x189deb[_0x2d058e(0x27c)+_0x2d058e(0x50f)](_0x3d79de,!![]);default:return _0x189deb['getIn'+'t32'](_0x3d79de,!![]);}}catch(_0xc08f5){return _0x11505b[_0x2d058e(0x68f)+'d']++,_0x11505b[_0x2d058e(0x9cf)+_0x2d058e(0x87d)]=_0x11505b['lastE'+'rror']||String(_0xc08f5&&_0xc08f5[_0x2d058e(0x965)+'ge']||_0xc08f5)['slice'](0x3*0xb41+-0x14*0x17f+0x1*-0x3d7,0x5*-0x148+-0x1*-0x23cd+-0x1ced),undefined;}}function _0x29ee3c(_0x4ff3d4,_0x2863a1,_0x821cb9){var _0x5d6ae6=_0x27dfe2,_0x4d1f6e=_0x2e64b9();if(!_0x4d1f6e||_0x4ff3d4<0x158e+0x176e*0x1+-0x2cfc||_0x3d6075['AcCxU'](_0x4ff3d4+(0x164f+-0x1*0xfe3+-0x668),_0x4d1f6e[_0x5d6ae6(0x62e)+_0x5d6ae6(0x8b7)]))return![];try{switch(_0x2863a1){case'u8':case'i8':_0x4d1f6e['setUi'+'nt8'](_0x4ff3d4,_0x3d6075['JrHev'](_0x821cb9,0x2001+-0x1*-0xe3e+-0x2d40));break;case _0x3d6075[_0x5d6ae6(0x367)]:case _0x3d6075['iQBkJ']:_0x4d1f6e[_0x5d6ae6(0x7f9)+_0x5d6ae6(0xa32)](_0x4ff3d4,_0x3d6075['arArl'](_0x821cb9,0x2*-0x1019+-0xbf*0x29+0x3ec9),!![]);break;case'i32':case _0x3d6075[_0x5d6ae6(0xa67)]:_0x4d1f6e['setIn'+'t32'](_0x4ff3d4,_0x821cb9|0x8d*0x3+0xa75*-0x1+-0x8ce*-0x1,!![]);break;case _0x3d6075['OqTJf']:_0x4d1f6e[_0x5d6ae6(0x1ab)+'oat32'](_0x4ff3d4,_0x821cb9,!![]);break;default:_0x4d1f6e['setIn'+'t32'](_0x4ff3d4,_0x821cb9|0xd8*0x28+-0x785+-0x4f*0x55,!![]);}return!![];}catch(_0xc25933){if('iEkoT'!=='leOOJ')return![];else{if(!_0x5c966[_0x15a243])_0x2957b1[_0x15468a]={'ptr':_0x166a9a,'kind':_0x366bd3,'firstSeen':_0x1649b8['now'](),'hits':0x0};_0x584e67[_0x3122b9][_0x5d6ae6(0x7cc)]++;}}}var _0x3f4463={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':_0x3d6075['pWqTd']},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':_0x3d6075[_0x27dfe2(0x347)]},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0x2630c0(_0x362cdf){var _0x16c0de=_0x27dfe2,_0x20a48d='';for(var _0x153357=0x64*-0x4f+-0x2689+-0x143*-0x37;_0x3d6075[_0x16c0de(0x39b)](_0x153357,_0x362cdf[_0x16c0de(0x827)+'h']);_0x153357++){var _0x409c11=_0x362cdf[_0x153357][_0x16c0de(0x5c6)+'ing'](-0x5*0x3c4+-0x6d7+0x7*0x3ad);_0x20a48d+=_0x3d6075['HsrRT'](_0x409c11['lengt'+'h']<-0x595*-0x2+0xfcd+-0x1af5?'0':'',_0x409c11);}return _0x20a48d;}function _0x1e9dde(_0x15ecf5,_0x3bc8b5,_0x481c7b){var _0x329cb8=_0x27dfe2,_0x2725fb={'IPORQ':'plugi'+'n._ru'+_0x329cb8(0x480)+_0x329cb8(0xa17)+'ot\x20wi'+_0x329cb8(0x135)+_0x329cb8(0x5e6)+_0x329cb8(0x220)+_0x329cb8(0x447)+_0x329cb8(0x508)+_0x329cb8(0x728)+_0x329cb8(0xb34)+_0x329cb8(0x458)+_0x329cb8(0x70e)+'built'+'\x20','mnOlX':_0x3d6075[_0x329cb8(0x8f4)]};if(_0x329cb8(0x5c9)!==_0x3d6075['ahofS'])_0x5c3531[_0x329cb8(0x162)+_0x329cb8(0x1d9)][_0x329cb8(0x82d)](_0x2725fb['IPORQ']+_0x2725fb['mnOlX']);else{var _0x14cf62=_0x3d6075[_0x329cb8(0x4f4)](_0x2e64b9);if(!_0x14cf62)return _0x11505b['faile'+'d']++,_0x11505b['lastE'+'rror']=_0x11505b[_0x329cb8(0x9cf)+'rror']||_0x329cb8(0x5ba)+_0x329cb8(0x78d)+_0x329cb8(0x252)+_0x329cb8(0x576)+_0x329cb8(0x3be)+_0x329cb8(0x30c)+'\x20reac'+_0x329cb8(0xb23)+_0x329cb8(0x43f)+'Runti'+_0x329cb8(0x248)+_0x329cb8(0x582)+'Game('+_0x329cb8(0x561)+'any\x20w'+'indow'+'\x20glob'+'al',null;if(_0x3bc8b5<-0x1867+0x99c+0xecb||_0x3d6075['ylgnD'](_0x3bc8b5,_0x481c7b)>_0x14cf62['byteL'+'ength'])return _0x11505b[_0x329cb8(0x68f)+'d']++,_0x11505b['lastE'+_0x329cb8(0x87d)]=_0x11505b[_0x329cb8(0x9cf)+_0x329cb8(0x87d)]||_0x3d6075[_0x329cb8(0xa72)](_0x3d6075['oCUBM']('addre'+'ss\x200x',(_0x15ecf5+_0x3bc8b5)['toStr'+'ing'](0x3cc+-0x4d*-0x34+-0xa*0x1f0))+('\x20past'+_0x329cb8(0x9a2)+'\x20end\x20'+'0x'),_0x14cf62[_0x329cb8(0x62e)+'ength']['toStr'+_0x329cb8(0x2ce)](-0x209c+0x162d+0xa7f*0x1)),null;try{if(_0x3d6075[_0x329cb8(0x40f)](_0x329cb8(0x46d),_0x3d6075['rRRRY'])){var _0x2da9fe=new Uint8Array(_0x481c7b);for(var _0x3ae664=-0x618+0xb0c+-0x4f4*0x1;_0x3d6075[_0x329cb8(0x1ed)](_0x3ae664,_0x481c7b);_0x3ae664++)_0x2da9fe[_0x3ae664]=_0x14cf62[_0x329cb8(0x3f7)+'nt8'](_0x3d6075['HprAf'](_0x15ecf5+_0x3bc8b5,_0x3ae664));return _0x11505b['ok']++,_0x2da9fe;}else _0x551759['boxes']=!![];}catch(_0x317ab4){return _0x11505b['faile'+'d']++,_0x11505b[_0x329cb8(0x9cf)+'rror']=_0x11505b['lastE'+'rror']||_0x3d6075['PvBsT'](String,_0x317ab4&&_0x317ab4['messa'+'ge']||_0x317ab4)['slice'](-0x2364+-0x42*0x43+0x34aa,-0x7*0x2d4+-0x1c20+-0x28c*-0x13),null;}}}function _0x16ce39(_0x1f8754,_0x2c7249,_0x1ea84b){var _0x30876a=_0x27dfe2,_0x2a5c70=_0x3d6075[_0x30876a(0x8e0)][_0x30876a(0x4b5)]('|'),_0x222eb1=-0x2*0xcaa+0x2*0x1303+0x1*-0xcb2;while(!![]){switch(_0x2a5c70[_0x222eb1++]){case'0':if(!_0x470d22)return null;continue;case'1':var _0x302a73=_0x1ea84b===_0x30876a(0x699)?_0x3696cd[_0x30876a(0x27c)+'oat32'](_0x32b9d6[_0x30876a(0x86d)],!![]):_0x3d6075[_0x30876a(0x79f)](_0x1ea84b,'obfI')?_0x3696cd['getIn'+_0x30876a(0x49f)](_0x32b9d6['fake'],!![]):_0x3696cd[_0x30876a(0x3f7)+_0x30876a(0x2db)](_0x32b9d6['fake']);continue;case'2':var _0x5a80f5=_0x3696cd[_0x30876a(0x9e7)+_0x30876a(0x49f)](_0x32b9d6[_0x30876a(0xb14)],!![]);continue;case'3':return{'keyAtOffset0':_0x5a80f5,'hidden':_0x116272,'inited':_0x3eb782,'fake':_0x302a73,'act':_0x4392c8,'hex':_0x2630c0(_0x470d22),'alt':_0x1ea84b===_0x30876a(0x201)?_0x3d6075[_0x30876a(0x4dd)](_0x116272,_0x302a73|0x21+-0x1ebc+-0x1*-0x1e9b):null};case'4':var _0x3696cd=new DataView(_0x470d22[_0x30876a(0x5eb)+'r'],_0x470d22[_0x30876a(0x60c)+_0x30876a(0x970)],_0x470d22['byteL'+'ength']);continue;case'5':var _0x470d22=_0x1e9dde(_0x1f8754,_0x2c7249,_0x32b9d6[_0x30876a(0x8b4)]);continue;case'6':var _0x4392c8=_0x3d6075[_0x30876a(0x50e)](_0x3696cd[_0x30876a(0x3f7)+_0x30876a(0x2db)](_0x32b9d6['activ'+'e']),0x117f*-0x2+0x3f*-0x2+0x1*0x237d);continue;case'7':var _0x116272=_0x3696cd[_0x30876a(0x9e7)+_0x30876a(0x49f)](_0x32b9d6[_0x30876a(0xa41)+'n'],!![]);continue;case'8':var _0x32b9d6=_0x3f4463[_0x1ea84b];continue;case'9':var _0x3eb782=_0x3d6075['JrHev'](_0x3696cd[_0x30876a(0x3f7)+'nt8'](_0x32b9d6['inite'+'d']),-0xfca+-0x10*-0x1b1+0x1*-0xb45);continue;}break;}}function _0x3e5ab2(_0x4845a6,_0x22389c,_0x26ffb8){var _0x264153=_0x27dfe2;if(_0x4845a6===_0x3d6075[_0x264153(0x6ad)])return _0x3d6075[_0x264153(0x626)](_0x2f6041,_0x3d6075['nbquD'](_0x22389c,_0x26ffb8));if(_0x4845a6===_0x3d6075[_0x264153(0x21b)])return _0x3d6075['nbquD'](_0x22389c,_0x26ffb8)|0x751+-0x3ce*-0x1+-0xb1f;return _0x3d6075[_0x264153(0x3d1)](_0x3d6075['xCtex'](_0x22389c,_0x26ffb8),0x44e+0x871*-0x1+0x522)!==-0x399*-0x1+-0x4d*0x45+0x1128?0x1209+-0x158a*0x1+0x382:0x5*0x3a9+0x25f6+-0x3843*0x1;}function _0x21794b(_0x17e5da,_0x4022b9,_0x2191b9){var _0x4238d2=_0x27dfe2,_0x6471a2=_0x3f4463[_0x2191b9];if(!_0x6471a2)return null;var _0x90b677=_0x32457e(_0x3d6075[_0x4238d2(0x5db)](_0x17e5da,_0x4022b9)+_0x6471a2['key'],'u8'),_0x36967f=_0x32457e(_0x3d6075[_0x4238d2(0x884)](_0x3d6075['brurC'](_0x17e5da,_0x4022b9),_0x6471a2['hidde'+'n']),_0x3d6075[_0x4238d2(0x347)]),_0x1a117d=_0x32457e(_0x3d6075[_0x4238d2(0x173)](_0x17e5da+_0x4022b9,_0x6471a2[_0x4238d2(0x27f)+'d']),'u8'),_0x5bedc9=_0x32457e(_0x3d6075[_0x4238d2(0x8f6)](_0x17e5da+_0x4022b9,_0x6471a2['fake']),_0x3d6075['zFYDs'](_0x2191b9,_0x3d6075[_0x4238d2(0x6ad)])?_0x3d6075['OqTJf']:_0x3d6075['ShovP'](_0x2191b9,_0x3d6075['bxZCw'])?_0x3d6075[_0x4238d2(0x347)]:'u8'),_0x50f3ef=_0x3d6075['GsYTF'](_0x32457e,_0x17e5da+_0x4022b9+_0x6471a2[_0x4238d2(0x3bc)+'e'],'u8');if(_0x90b677===undefined||_0x36967f===undefined||_0x3d6075[_0x4238d2(0x89f)](_0x5bedc9,undefined)||_0x50f3ef===undefined)return null;_0x90b677&=-0x4db+0x5+0x5d5,_0x36967f|=-0xe94+0x1*-0x17ff+0x2693,_0x1a117d=_0x3d6075[_0x4238d2(0x976)](_0x1a117d||-0x1755+-0x3a5*-0x4+0x8c1,-0x1*0x471+0x11a5*-0x1+0x1617),_0x50f3ef&=-0x1b15+-0xb*0x2e1+-0xa9*-0x59;var _0x58b0f9;if(_0x3d6075['QndBy'](_0x2191b9,_0x3d6075['aaolA']))_0x58b0f9=_0x3d6075[_0x4238d2(0x2ff)](_0x2f6041,_0x36967f^_0x90b677);else{if(_0x3d6075[_0x4238d2(0x8c7)](_0x2191b9,'obfI'))_0x58b0f9=_0x36967f^_0x90b677|0xe3b+0x2*0x11ea+0xe9*-0x37;else _0x58b0f9=_0x3d6075[_0x4238d2(0x50e)](_0x36967f^_0x90b677,-0x18ee*-0x1+0x17+0x3*-0x802)!==0x1*-0x21eb+-0x21b1+0x10e7*0x4?-0x1d05+0x220+0x1ae6:-0x2037+0x159c+0xa9b;}return{'real':_0x58b0f9,'fake':_0x5bedc9,'act':_0x50f3ef,'init':_0x1a117d,'key':_0x90b677,'hidden':_0x36967f};}function _0x34d554(_0x22fe5b,_0x388e4f,_0x5aad41,_0x2f9979){var _0x5d495f=_0x27dfe2,_0x584f49={'reSle':function(_0x3ec281,_0x109d11){return _0x3ec281*_0x109d11;},'khUYg':function(_0x47ce6f,_0x5d7cb8){return _0x47ce6f+_0x5d7cb8;}};if('XTnZV'==='ayEQT'){var _0x82834f=_0x120bd9();if(!_0x82834f)return null;if(_0x2f1630<-0x77e*0x5+-0xc99*0x2+0x3ea8||_0x11a741+_0x584f49[_0x5d495f(0x6dc)](_0x3a31e8,0x9*0xc6+0x56*-0x6e+0x1e02)>_0x82834f['byteL'+_0x5d495f(0x8b7)])return null;var _0x1cfd00=[];for(var _0x5e5505=0x2*0x3b3+-0x13*-0xb5+-0x14d5;_0x5e5505<_0x459ce7;_0x5e5505++)_0x1cfd00[_0x5d495f(0x82d)](_0x82834f['getFl'+'oat32'](_0x584f49['khUYg'](_0x13ebd2+_0xaeeab2,_0x5e5505*(-0x149*0x9+0x1*-0x10d+0x15*0x9a)),!![]));return _0x355cfd['ok']+=_0x5bb22f,_0x1cfd00;}else{var _0x4da6a3=_0x3f4463[_0x5aad41],_0x2d95b2=_0x1e9dde(_0x22fe5b,_0x388e4f,_0x4da6a3[_0x5d495f(0x8b4)]);if(!_0x2d95b2)return![];var _0x359a57=new DataView(_0x2d95b2[_0x5d495f(0x5eb)+'r'],_0x2d95b2['byteO'+'ffset'],_0x2d95b2['byteL'+_0x5d495f(0x8b7)]),_0x1bfeb7=_0x4da6a3[_0x5d495f(0x9d1)+'pe']==='u8'?_0x359a57[_0x5d495f(0x3f7)+'nt8'](_0x4da6a3[_0x5d495f(0xb14)]):_0x359a57[_0x5d495f(0x9e7)+_0x5d495f(0x49f)](_0x4da6a3[_0x5d495f(0xb14)],!![]),_0x45e3fc;if(_0x5aad41===_0x5d495f(0x699))_0x45e3fc=_0x5c8abf(_0x2f9979);else{if(_0x5aad41===_0x3d6075[_0x5d495f(0x21b)])_0x45e3fc=_0x2f9979|-0x11fb*0x1+-0x841+0x1a3c;else _0x45e3fc=_0x3d6075[_0x5d495f(0x976)](_0x2f9979?0x1*0x1b65+0x848+0x2f9*-0xc:-0x12bf*-0x2+-0x1f*-0xc3+-0x3d1b,0x1967*-0x1+0x1*-0x1999+-0x1b*-0x1ed);}return _0x3d6075['aDiCA'](_0x29ee3c,_0x22fe5b+_0x388e4f+_0x4da6a3['hidde'+'n'],_0x3d6075[_0x5d495f(0x347)],_0x45e3fc^_0x1bfeb7)&&_0x3d6075[_0x5d495f(0x56a)](_0x29ee3c,_0x3d6075[_0x5d495f(0x8f6)](_0x22fe5b,_0x388e4f)+_0x4da6a3[_0x5d495f(0x86d)],_0x3d6075[_0x5d495f(0x7c6)](_0x5aad41,_0x3d6075['aaolA'])?'f32':_0x5aad41===_0x5d495f(0x201)?'i32':'u8',_0x5aad41===_0x3d6075[_0x5d495f(0x6ad)]?_0x2f9979:_0x5aad41===_0x5d495f(0x201)?_0x2f9979|0x127e+-0x2432+-0x8da*-0x2:_0x2f9979?-0x1*-0xb96+0x10f4+-0x1c89:0xd48+0x3*0x497+0x569*-0x5)&&_0x3d6075[_0x5d495f(0x56a)](_0x29ee3c,_0x22fe5b+_0x388e4f+_0x4da6a3['activ'+'e'],'u8',-0x972+0x1fd6+-0xb32*0x2);}}var _0x2ad7e0={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0x53981a=0x2346+0x1664+0xb*-0x53e+0.03,_0x2d54ca=-0x297+-0xa*-0x11c+0xf*-0x91,_0x45c3b6={},_0x176635=0x11*-0x11b+-0x1196+0x2461,_0x4bedd4=[],_0x465cdc=[];function _0x10c7ed(_0x570940){var _0xf02748=_0x27dfe2,_0x484e34={'YeATs':function(_0xe388d9,_0xdbaeb6){return _0xe388d9+_0xdbaeb6;},'Ydxoq':function(_0x1fbc00,_0x54599f){return _0x1fbc00+_0x54599f;},'VXgpz':_0x3d6075[_0xf02748(0x6d3)],'RNHtC':_0xf02748(0x5ea)+_0xf02748(0x52b)+_0xf02748(0x3ee)+_0xf02748(0x464)+'Assem'+_0xf02748(0x4e2)+'nstan'+_0xf02748(0x707)+_0xf02748(0x403)+'snaps'+_0xf02748(0x131)+_0xf02748(0xa5f)+_0xf02748(0x4f9)+_0xf02748(0x7d7)+'ngth,'+'\x20','mnBYI':function(_0x21a718,_0x2d6afd){return _0x21a718+_0x2d6afd;}};if(_0x3d6075['NJmvo'](_0x3d6075['LlhGI'],_0xf02748(0x704)))_0x2c88d8[_0xf02748(0x162)+'ngs'][_0xf02748(0x82d)](_0x484e34['YeATs'](_0x484e34[_0xf02748(0x9d7)](_0x484e34[_0xf02748(0x3e4)](_0x484e34['Ydxoq']('0\x20of\x20'+_0x5933a1['hooks'+'Total'],_0x484e34['VXgpz'])+_0x484e34['RNHtC'],_0xf02748(0x413)+_0xf02748(0x12c)+'egist'+'ered\x20'+_0xf02748(0xae7)+_0xf02748(0x76d)+'re\x20ig'+'nored'+'\x20for\x20'+_0xf02748(0x2e9)+_0xf02748(0x3ef)+'f\x20the'+'\x20page'+'.\x20'),'Regis'+'tered'+'\x20')+_0x551dfd[_0xf02748(0x6d0)+'Regis'+_0xf02748(0x257)+_0xf02748(0x5d4)],'\x20hook'+_0xf02748(0xb1d)+'uring'+_0xf02748(0x280)+'ng\x20at'+_0xf02748(0x53b)+_0xf02748(0x54c)+'start'+'.'));else{var _0x3720b7=_0x276905[_0xf02748(0x502)+_0xf02748(0x437)+_0xf02748(0xb28)]||[],_0x28cfc1=[];_0x465cdc=[],_0x4bedd4=[];for(var _0x34cbe0=-0xf82+-0x1708+0x268a;_0x34cbe0<_0x3720b7[_0xf02748(0x827)+'h'];_0x34cbe0++){if(_0x3d6075[_0xf02748(0x554)](_0xf02748(0x16d),_0x3d6075[_0xf02748(0xa2d)])){var _0x1b39c8=_0x3720b7[_0x34cbe0][-0x137a+0x17*0x10d+-0x1*0x4b1];if(_0x3720b7[_0x34cbe0][0x9a6+0x13c8+-0x1d6d]!=='obfF')continue;var _0x516cdf=_0x16ce39(_0x570940,_0x1b39c8,_0xf02748(0x699));if(!_0x516cdf||_0x516cdf['inite'+'d']!==0x1d14+-0x177a*-0x1+0xb*-0x4c7)continue;var _0x209d78=_0x3e5ab2(_0x3d6075['aaolA'],_0x516cdf['hidde'+'n'],_0x516cdf[_0xf02748(0x57b)+_0xf02748(0x876)+'t0']);if(typeof _0x209d78!==_0xf02748(0xb4b)+'r'||!isFinite(_0x209d78))continue;var _0x4b38f4=_0x570940+':'+_0x1b39c8,_0x26350c=_0x45c3b6[_0x4b38f4];if(!_0x26350c||_0x209d78!==_0x26350c[_0xf02748(0x5f0)+_0xf02748(0x49b)+'n'])_0x26350c=_0x45c3b6[_0x4b38f4]={'base':_0x209d78,'lastWritten':null};var _0x36afda=_0x26350c[_0xf02748(0x714)],_0x511bb4=Math[_0xf02748(0x2c2)](_0x36afda);if(_0x3d6075[_0xf02748(0x1ed)](_0x511bb4,0xc14+-0x3a1+-0x873+0.0001)||_0x511bb4>-0x888a*0x5+-0x1*0x1ba94+-0x12f2e*-0x5){_0x465cdc[_0xf02748(0x82d)]({'o':_0x1b39c8,'v':_0x209d78,'why':'impla'+_0xf02748(0x76a)+'e'});continue;}_0x28cfc1['push']({'o':_0x1b39c8,'v':_0x209d78,'a':_0x511bb4,'base':_0x36afda,'key':_0x4b38f4,'st':_0x26350c});}else _0x5d2e4c[_0xf02748(0x162)+'ngs']['push'](_0x484e34[_0xf02748(0x6d4)](_0xf02748(0xa9e)+_0xf02748(0xb1c)+_0xf02748(0x8fb)+_0xf02748(0x51c)+_0xf02748(0x7ae)+_0xf02748(0x502)+_0xf02748(0x437)+_0xf02748(0x713)+'as\x20fi'+_0xf02748(0x71a)+_0xf02748(0x307),'Eithe'+_0xf02748(0x777)+_0xf02748(0xb1c)+'not\x20i'+'n\x20a\x20r'+'ound,'+_0xf02748(0x7f1)+'he\x20ho'+_0xf02748(0x9f5)+'\x20on\x20t'+_0xf02748(0x7fa)+'ong\x20o'+_0xf02748(0x952)+'ad.'));}var _0x3e3aee=[];for(var _0x219b8b=-0xea8*0x1+0x2587+-0x16df*0x1;_0x3d6075['uryLD'](_0x219b8b,_0x28cfc1[_0xf02748(0x827)+'h']);_0x219b8b++){var _0x19da44=_0x28cfc1[_0x219b8b]['a'],_0x1dce4a=null;for(var _0x361bd8=0x1f52+-0x28f+-0x1cc3;_0x361bd8<_0x3e3aee[_0xf02748(0x827)+'h'];_0x361bd8++){var _0x428aba=_0x3e3aee[_0x361bd8]['mean']/_0x19da44;if(_0x3d6075[_0xf02748(0x503)](_0x428aba,-0x2347+-0x206*-0x1+0x2142-_0x53981a)&&_0x3d6075[_0xf02748(0x8eb)](_0x428aba,-0x4d*-0x31+0x65+-0x3*0x50b+_0x53981a)){_0x1dce4a=_0x3e3aee[_0x361bd8];break;}}!_0x1dce4a&&(_0x3d6075['LZjcF'](_0x3d6075[_0xf02748(0x5f5)],_0x3d6075[_0xf02748(0x746)])?(_0x1dce4a={'mean':_0x19da44,'members':[]},_0x3e3aee[_0xf02748(0x82d)](_0x1dce4a)):(_0xc2d75a(!_0x417a93()),_0x54ef1e()));_0x1dce4a[_0xf02748(0x6e8)+'rs'][_0xf02748(0x82d)](_0x28cfc1[_0x219b8b]),_0x1dce4a['mean']=-0x208d+0x17ce+0x1*0x8bf;for(var _0x234918=-0x243e+0x1*0x1bf9+0x845;_0x3d6075[_0xf02748(0x73c)](_0x234918,_0x1dce4a[_0xf02748(0x6e8)+'rs'][_0xf02748(0x827)+'h']);_0x234918++)_0x1dce4a[_0xf02748(0xb09)]+=_0x1dce4a['membe'+'rs'][_0x234918]['a'];_0x1dce4a['mean']/=_0x1dce4a[_0xf02748(0x6e8)+'rs'][_0xf02748(0x827)+'h'];}var _0x468263=[];for(var _0x595c09=0x1*-0x1565+0x1*0x269b+-0x1136;_0x3d6075[_0xf02748(0xa89)](_0x595c09,_0x3e3aee[_0xf02748(0x827)+'h']);_0x595c09++){if(_0x3e3aee[_0x595c09]['membe'+'rs']['lengt'+'h']>=_0x2d54ca)_0x468263[_0xf02748(0x82d)](_0x3e3aee[_0x595c09]);}if(!_0x468263[_0xf02748(0x827)+'h']){_0x465cdc['push']({'o':-(0x2f*0x93+0x1279+0x9*-0x50d),'v':0x0,'why':_0xf02748(0x51e)+'oup\x20o'+'f\x20'+_0x2d54ca+(_0xf02748(0x1a9)+_0xf02748(0x36d)+'loats'+_0xf02748(0x7dd)+'ed')});return;}var _0x25d858=_0x468263[0x1e07*-0x1+-0xd16+0x2b1d]['mean'];for(var _0x4598ef=0x26*-0x8d+0x1d37+-0x65*0x15;_0x4598ef<_0x468263[_0xf02748(0x827)+'h'];_0x4598ef++)if(_0x468263[_0x4598ef][_0xf02748(0xb09)]<_0x25d858)_0x25d858=_0x468263[_0x4598ef][_0xf02748(0xb09)];var _0x1a9b8f=_0x3d6075[_0xf02748(0x49d)](_0x25d858,0x1*0x2017+-0x195a+-0x6bd+0.5);for(var _0x4aca8a=0x1fff+0x1866+-0x3865*0x1;_0x4aca8a<_0x3e3aee[_0xf02748(0x827)+'h'];_0x4aca8a++){if(_0x3e3aee[_0x4aca8a][_0xf02748(0x6e8)+'rs']['lengt'+'h']>=_0x2d54ca)continue;for(var _0x24a185=0x1b*-0xc+-0x7*0x1be+0xd76;_0x24a185<_0x3e3aee[_0x4aca8a][_0xf02748(0x6e8)+'rs']['lengt'+'h'];_0x24a185++){_0x465cdc[_0xf02748(0x82d)]({'o':_0x3e3aee[_0x4aca8a]['membe'+'rs'][_0x24a185]['o'],'v':_0x3e3aee[_0x4aca8a]['membe'+'rs'][_0x24a185]['v'],'why':_0xf02748(0x8cf)+'eton'});}}for(var _0xf8a56e=-0x1c52*-0x1+0xda*0x6+-0x10b7*0x2;_0x3d6075[_0xf02748(0x40a)](_0xf8a56e,_0x468263[_0xf02748(0x827)+'h']);_0xf8a56e++){var _0x1ed103=_0x468263[_0xf8a56e][_0xf02748(0x6e8)+'rs'];for(var _0x58d23b=0x1*0x1875+-0x1*0xfc5+-0x1*0x8b0;_0x3d6075[_0xf02748(0x5b3)](_0x58d23b,_0x1ed103['lengt'+'h']);_0x58d23b++){if('qYdMS'!==_0xf02748(0x2d6)){if(_0x4235da)_0x238aac[_0xf02748(0xa37)+_0xf02748(0xa40)+'t']='Copie'+'d';}else{var _0x4aeef6=_0x1ed103[_0x58d23b];if(_0x3d6075[_0xf02748(0x40a)](_0x4aeef6['a'],_0x1a9b8f)){_0x465cdc['push']({'o':_0x4aeef6['o'],'v':_0x4aeef6['v'],'why':'below'+'\x20floo'+'r\x20'+_0x1a9b8f[_0xf02748(0x3a3)+'ed'](-0x1*0xb8d+0x7*0x4b5+-0x1564)});continue;}var _0x2e0e72=_0x3d6075[_0xf02748(0x1b5)](_0x4aeef6[_0xf02748(0x714)],_0x2ad7e0['facto'+'r']);_0x3d6075[_0xf02748(0x914)](_0x34d554,_0x570940,_0x4aeef6['o'],_0xf02748(0x699),_0x2e0e72)&&(_0x4aeef6['st']['lastW'+'ritte'+'n']=Math[_0xf02748(0x445)+'d'](_0x2e0e72),_0x176635++,_0x4bedd4['push'](_0x3d6075['iLKfU']('0x',_0x4aeef6['o']['toStr'+_0xf02748(0x2ce)](0x19*-0xf8+0x15a1+0x2a7))));}}}}}var _0x276905={'FPScontroller':[[-0x82+0x149b+0x1409*-0x1,'obfF'],[0x41*0x35+-0xe3*0x2c+0x19b7,'obfF'],[0x103a+0x32f+-0x2d*0x6d,_0x27dfe2(0x699)],[-0xad2*-0x3+-0x11*0x4f+-0x1adf*0x1,_0x3d6075[_0x27dfe2(0x6ad)]],[0x1ce2*0x1+0x50d+-0x217f,'obfF'],[0x3aa*0x9+-0xcdc+-0x2*0x9cb,_0x27dfe2(0x699)],[-0x2b*-0xd+-0x1*0x5cf+0x440,_0x27dfe2(0x699)],[0x8ce+0x2560+-0x2e*0xfd,_0x27dfe2(0x513)],[0x5ba*-0x2+-0xec*-0x1e+0x7b8*-0x2,_0x3d6075[_0x27dfe2(0x6ad)]],[-0x4a*0x6b+-0x1e0c+0x3dd6*0x1,_0x27dfe2(0x4b4)],[-0xa55+0xe7a*-0x1+0x19af,'v3'],[0x2249*-0x1+0xf56+0x13df*0x1,'u8'],[-0x23b*0x2+0x1*-0x26e9+0x2c4f,_0x27dfe2(0x699)],[-0x1657+-0x54f*0x6+0x3739,_0x27dfe2(0x4b4)],[0x2*0x5ae+0x9e6+-0x1436,'u8'],[0x645+0x1a*-0x49+0x235,_0x27dfe2(0x4b4)],[-0x1*-0x569+-0xb1e*-0x2+-0x1a91,'u8'],[0x43b*0x3+-0xa18+-0xc2*0x2,'u8'],[0x32b+0x4*0x955+-0x2763,_0x3d6075['aaolA']],[-0x1*0x2317+-0x22c7+0x16*0x33b,_0x3d6075['aaolA']],[-0x24*0x33+-0x1ff3+0x1*0x286b,'f32'],[0x11*-0x41+0x1*0x154f+-0x6*0x29d,'f32'],[-0xaeb+0xb5*-0x34+0x3103*0x1,'v3'],[0x10bf+-0xcb5+-0x2aa,'v3'],[0xb*-0x8b+0x258f+-0x16*0x15f,_0x27dfe2(0x729)],[0x8bf+-0x1763+0x1014,'f32'],[0x1683+-0x20a6+0xbab,'u8'],[-0x23a2+0x1995+0xb99,'f32'],[-0x1c25+0x1*0x5ce+0x1*0x17ef,'v3'],[0x53d*-0x1+0x1*-0x277+0x958,'u8'],[0x1*-0x349+-0x1f*0xb+-0x329*-0x2,_0x3d6075[_0x27dfe2(0x6c5)]],[0x20*-0x10a+-0xf7*0x13+-0x354d*-0x1,_0x3d6075['OqTJf']],[0x2f9+-0x3*-0x151+-0x53*0x10,'u8'],[-0x2*-0x5c6+0x45*-0x31+-0x6*-0x91,'u8'],[-0x3*0xa27+0x2509*0x1+-0x4d4,_0x27dfe2(0x699)],[-0x1*0x843+0xc5b*0x3+-0xcb*0x22,'f32'],[-0x6b*-0x7+-0x255a+0x2449,'u8'],[0x21d1+0x219b+-0x418c,_0x27dfe2(0x699)],[0xb5*-0x24+0x1ecd+-0x361*0x1,'v3'],[0xc91+0x1ed9*0x1+0x2*-0x14b1,_0x3d6075[_0x27dfe2(0x5fc)]],[-0xe27*0x2+0x241f+0x5b9*-0x1,_0x27dfe2(0x729)],[-0x1d63*-0x1+-0x80f+-0x18*0xcd,_0x27dfe2(0x729)],[-0x5ed+-0x4*0x53+0x985,_0x27dfe2(0x729)],[0x1273+-0x102b*-0x1+-0x204e,'f32'],[-0x121*-0xb+0x96c+-0x681*0x3,'f32'],[0xc*-0x2f6+0x2f6*-0xb+0x4672,_0x27dfe2(0x729)],[0x1f2f+0x385*0x7+-0x3576,'u8'],[-0x7e2*0x3+0x16*0x59+0x3*0x61f,'u8'],[0x1*-0x15eb+0x1cf7+0x2*-0x257,'u8'],[-0x2177+0x1bee+-0x87*-0xf,_0x3d6075[_0x27dfe2(0x6c5)]],[0x1*-0x10b+-0x2c7+0x636,'u8'],[-0x3ee*0x1+-0x359*-0xb+-0x1e80,'u8'],[-0x5d*-0x1a+0xd6f+-0x1479,_0x3d6075['OqTJf']],[0x1*0x3ab+0x1762+0x1e5*-0xd,'f32'],[0x141+-0x33a+0x1*0x469,_0x27dfe2(0x729)],[-0x623+0x1205+-0x96e,_0x27dfe2(0x729)],[0xa17*0x2+-0xb*-0x1f1+0x89*-0x49,_0x3d6075[_0x27dfe2(0x6c5)]],[0x3df*-0x3+0x90f+0x50a,_0x27dfe2(0x729)],[-0x1572+0x204d+0x45*-0x1f,_0x3d6075['OqTJf']],[0x9*-0x3fe+0x1e97+0x1*0x7db,'v3'],[-0x1*-0x2291+-0xc1f+0x1*-0x13de,'u8'],[-0x21d7+-0x1628+-0x11b*-0x35,'v3'],[-0x1*-0x57b+0x175*-0xa+0xbbb,'f32'],[0x106c+0xb1*-0xc+-0x574,'v3'],[-0x1f12*0x1+0x1498+0xd32,'f32'],[0x20a0+-0x425+-0x19bf,_0x27dfe2(0x729)],[-0x2048+-0x1424+0x372c,'f32'],[-0x2173+0x1*0x11ab+0x4a3*0x4,'u8'],[0xbd2+0x1011+-0x2*0xc8f,'u8'],[-0x1*-0x283+0x37b+0x19b*-0x2,'f32'],[-0x1*0xfdf+-0x20*0x33+0x191b,_0x27dfe2(0x729)],[0x776*-0x4+-0x34*0x64+0x5*0xa9c,'v3'],[0x1796+-0x7a*0x25+-0x304,'v3'],[-0x1a9*-0x7+0x15*-0x11b+0xe94,'f32'],[0x1055+-0x1ee4+0x118f,_0x3d6075[_0x27dfe2(0x6c5)]],[0x3*0x701+0x1555+-0x2754,_0x27dfe2(0x729)],[0x14*-0xc9+-0x14fd+-0x1*-0x27b9,_0x27dfe2(0x729)],[0x1*-0x1f1b+0xcdd+-0xa*-0x221,'v3'],[0x669*0x2+-0x259*-0x1+-0xc13,'u8'],[0x1add+-0x1aea+-0x329*-0x1,'v3'],[0x21f+0x1360+-0x1257,'i32'],[-0x5*0x3d7+0x1fa3+0x4*-0x251,_0x27dfe2(0x729)],[-0x716+0x267e+-0x1c38,'f32'],[-0x7*0x4c9+0x1627+0xe8c,'f32'],[0x75b*0x2+-0x60*-0x4d+-0x142d*0x2,_0x27dfe2(0x729)],[0x1*-0xa34+0x7e*0x14+0x6*0x9a,'u8'],[0x81+0x219f+-0x1edf,'u8'],[0x1*0xa62+0x1*-0xb5+0x47*-0x17,'u8'],[-0x1*-0xb19+-0x1133+0x967,'u8'],[0x1a8f*0x1+-0x1*-0x1b14+-0x5*0xa11,'u8'],[-0x1783+-0x4f*-0x5a+0x1*-0xf3,_0x3d6075[_0x27dfe2(0x6c5)]],[0x144d*-0x1+-0x1*0xd79+0x1*0x251a,'f32'],[0x17*-0x1b1+-0x1941+0x4380,'f32'],[0x2*0x5fe+-0x216b+0x18cb*0x1,_0x27dfe2(0x729)],[-0x5*-0x3a3+0x7*-0x529+-0x1f0*-0xb,_0x27dfe2(0x729)],[0x1*-0x180a+-0xcdb*-0x2+0x1b8,'u8'],[0x106*-0x24+-0x11*0x16d+0x407d,_0x3d6075[_0x27dfe2(0x6c5)]],[0x2513+0x15*-0xe9+-0xe8a,_0x3d6075[_0x27dfe2(0x6c5)]],[-0xa64+0x1e8b*0x1+-0x10b7,'u8'],[0xbb1+0x2242+-0x2a7b,'v3'],[-0x18c1*-0x1+-0x141b*-0x1+0x38*-0xbd,'v3'],[0xcef+-0x2118*0x1+0x1*0x17b9,'v3'],[0x13b6+-0x8b*-0x2f+-0x299f,_0x3d6075[_0x27dfe2(0x6c5)]],[-0x26e1+0xb7f*-0x2+-0x9*-0x747,_0x27dfe2(0x729)],[-0x23ef+-0x2249+0x49dc,_0x3d6075[_0x27dfe2(0x6c5)]],[0x1b35+0x1593+-0x2d20,'v3'],[0x1*0x1277+0x2688+-0x354b,_0x3d6075[_0x27dfe2(0x347)]],[0xa38+-0x1*0x1d71+0x16f1,'u8'],[-0x1bd+-0x32*0x83+-0x1f0f*-0x1,'i32'],[-0x233*0x1+-0x13*0x155+0xfa1*0x2,_0x3d6075['OqTJf']],[-0x14da+-0x12cf+0x1*0x2b6d,'f32'],[-0x43a*-0x7+-0x10c3+-0x90b,'f32'],[-0x406*-0x1+0x89*0x5+-0x2e7,_0x27dfe2(0x729)],[0xe0a+0xb97*-0x1+0x15d,'v3'],[0x249e+-0x2*0xdab+0x56c*-0x1,_0x27dfe2(0x4b4)],[0x19f5+-0xe4e+-0x7c7,'u8'],[-0x1*0x1733+-0x3*0x8ec+0x35d8*0x1,'u8'],[-0x8d+-0x1*-0x26f3+-0x2284*0x1,'u8'],[-0x97*-0xa+-0x4ca+0x2c8,'f32'],[0x2431*-0x1+-0x1998+0x41b1,_0x3d6075[_0x27dfe2(0x347)]]],'HealthScript':[[0x1*-0x1f51+0x17c8+0x7e1,'u8'],[0x1b40+-0x151*-0x5+0x1*-0x2179,_0x3d6075['pWqTd']],[-0x113c+-0x288+0x1444,_0x27dfe2(0x729)],[-0x1*0x113b+-0x21d6+-0x8b*-0x5f,_0x27dfe2(0x729)],[0x1*-0x15f5+0x8*0x173+0xae5*0x1,_0x27dfe2(0x729)],[0x51b*-0x1+-0xa4*-0x24+-0x1169,_0x27dfe2(0x729)],[0x2*-0xb0b+0xa0a*0x1+0xc9c,_0x27dfe2(0x729)],[-0xd*-0x257+0x15d6+0x33ad*-0x1,_0x27dfe2(0x729)],[0x11*0x21d+0x7a*-0x2a+-0x12d*0xd,'i32'],[0x1c93+-0x1*-0x1597+-0x1082*0x3,_0x27dfe2(0x4b4)],[0x457+0x1845*0x1+-0x1bf4,'u8'],[0x18f2+0x1*-0x1543+-0x6*0x81,'u8'],[0x1554+0xc5*0x2+-0x1634,'u8'],[-0x38c+0x3*0x71+-0x94*-0x5,'u8'],[-0x605+0x6ef+-0x2a,_0x3d6075[_0x27dfe2(0x21b)]],[-0x4fa*0x6+0x1409+0xaa7,'obfI'],[0x73f*-0x2+0x181d*0x1+-0x8b7*0x1,'obfI'],[-0x1312+-0x1*-0x923+0xaeb,_0x3d6075[_0x27dfe2(0x21b)]],[-0x11a3+0x1cab+-0x9f8,_0x27dfe2(0x201)],[0x41*0x3b+0x12a4+-0x207b,'obfB'],[-0xe76+0x2e0*0x2+0x9e6,'obfF'],[-0x1db8+-0x26e2+0x45e2,_0x3d6075[_0x27dfe2(0x6c5)]],[0x1*0x56f+0xf22+-0x1345,_0x3d6075[_0x27dfe2(0x6c5)]],[0x1a9*-0x2+0x26d4+-0x2232,_0x27dfe2(0x729)],[0x21a1+0xa09+0x1*-0x2a56,_0x27dfe2(0x729)],[0x4f*-0x7d+0x2*0xe5c+0xb37,'f32'],[0x1ca0+-0x13c5+0x1*-0x77b,'v3'],[0x6b*0x2b+-0x2312+0x1289,'f32'],[-0x11d*0x10+0xed8+0x470,'f32'],[-0x257+0x17e7+0x2*-0xa08,'u8'],[-0x2614+0x15d0+0x11d0,'u8'],[0x1*-0x84e+0x1734+0x2*-0x6ab,_0x3d6075[_0x27dfe2(0x347)]]],'PlayerConfig':[],'WeaponManager':[[0x246f*0x1+-0x26b1+0x56*0x7,'i32'],[-0xa67+0x1ecd+0x144a*-0x1,_0x3d6075[_0x27dfe2(0x347)]],[0x147e+0x154*-0x17+0xa2e,'u8'],[0x82+-0xc7*0x2e+0x97*0x3c,'i32'],[0x1d44+-0xb*-0x2bd+-0x3aff,'obfF'],[-0x672+0x3*0x4ac+0x716*-0x1,'f32'],[0x1caa*-0x1+0x6a8*0x2+0x3*0x54a,_0x27dfe2(0x4b4)],[-0x1*0x19ed+-0x1*-0x20e1+-0x66c,'u8'],[-0x1b3b+0xa65+0x1*0x115f,'u8'],[-0x1*-0x1fbb+0x1*0x6d1+0x20*-0x130,_0x3d6075[_0x27dfe2(0x347)]],[0xef+-0x2*-0xb60+-0x171f,'f32'],[-0xa3b+0x1ad4+-0x1001,_0x3d6075['OqTJf']],[-0x814+0x1f5c+0x2*-0xb4e,_0x3d6075['pWqTd']],[-0x1a5f+0x197c+0x19f,'u8'],[0x1*-0x1fe7+-0x208+0x22cb,_0x27dfe2(0x201)],[0x1323+-0x1*0x1838+0x605,_0x3d6075['bxZCw']],[-0x1763+0x6f*-0x18+-0x85*-0x43,'f32'],[0x31d*0xb+0x1a4a+-0x3b81*0x1,_0x27dfe2(0x729)],[0x1*-0x283+-0xb7e+0xf0d,_0x27dfe2(0x729)],[0x5be+0x12d*0x7+-0xce1,_0x3d6075['OqTJf']],[0x1d82+0x2534*-0x1+-0x1*-0x8d2,_0x27dfe2(0x729)],[0x10b4*-0x2+-0x110*-0x3+0x1f60,'u8'],[-0xd9*-0x1d+0x2265+-0x421*0xe,_0x3d6075[_0x27dfe2(0x21b)]],[0x2e8+-0x22af+0x2107,_0x3d6075[_0x27dfe2(0x21b)]],[0xf35+0x1379+-0x3*0xb1e,_0x27dfe2(0x201)],[-0x768+0x907*0x4+-0x6d3*0x4,'obfB'],[-0x1*0x14d3+0x869+-0x1*-0xdde,_0x3d6075['AiwkI']],[-0xc22+-0xa32+0x17d4,_0x3d6075['AiwkI']],[-0xfc8+-0x62d+0x1781,_0x27dfe2(0x513)],[-0x1*-0x20eb+-0x1eb8+-0x1*0x8f,'obfB'],[-0xf43*0x1+-0x1f18+0x300b,_0x27dfe2(0x201)],[0x1066*0x1+0x8b*0x11+-0x17d5,_0x27dfe2(0x4b4)],[-0x11fd+-0x51*0x49+0x2ae6,'u8'],[-0x18a*-0x5+-0x3*0x37e+0x1*0x49c,_0x27dfe2(0x4b4)],[-0x267d*0x1+0x98*0x13+-0x25*-0xc9,'i32'],[-0x2699+-0x59c+-0x1*-0x2e35,_0x27dfe2(0x4b4)],[-0x542+-0x6a5*-0x2+-0x5f4,'u8'],[-0x2*-0x841+0x14d9+-0x1*0x233f,'u8'],[0x3*0xfb+0x1*-0x7b5+0x3*0x24b,'u8'],[0x14*0x18e+0x236*0x5+-0x2808,'u8'],[0x165f+-0x1*-0x53d+-0x19*0x105,'u8'],[-0x1f*0x3d+-0x51a+0xecd,_0x3d6075[_0x27dfe2(0x347)]],[-0xcfb+-0x1*0xf53+-0xf53*-0x2,'u8']],'GG_GameManager':[[-0x133*0x2+-0x81*0x1+0x30b,'u8'],[0x121a*-0x1+-0xd*0x57+-0x1*-0x16b1,_0x27dfe2(0x729)],[-0x1fcb+0x8e*0x13+0x1585,'u8'],[0x128a+-0x1*0x2494+0x124f,'u8'],[-0x11a9*-0x1+-0x1*-0x313+0xe*-0x176,_0x3d6075[_0x27dfe2(0x6c5)]],[-0xa5f+0x3*0x6d9+-0x9e0,_0x3d6075['OqTJf']],[-0xf38*-0x1+0x1d4d+-0x1*0x2c35,_0x3d6075[_0x27dfe2(0x347)]],[0x2*-0xe0d+0x1*-0x7c9+-0x7f*-0x49,_0x27dfe2(0x4b4)],[-0xe*-0xf1+0x219b+-0x2e71,'u8'],[0x1516+0x240f+-0x38b1,'u8'],[-0xf3*-0x4+-0x54a*0x6+-0x4bc*-0x6,_0x3d6075[_0x27dfe2(0x6c5)]],[-0x43*-0x11+0x638*0x6+-0x2947,_0x27dfe2(0x729)],[-0x7ea+0x1311*-0x2+0x2e9c,_0x3d6075['pWqTd']],[-0x56*0x1f+0xcad*0x3+0x3*-0x903,'u8'],[-0x12fd+-0x925*-0x1+0xc*0xe1,_0x3d6075['pWqTd']],[0x1552+0xb*0x13+-0x1567*0x1,_0x3d6075[_0x27dfe2(0x347)]],[-0x1*0xe6f+0x1*-0x24d9+-0x6*-0x8ac,_0x27dfe2(0x4b4)],[0x1bfe*-0x1+-0x1c37+0x391d,_0x27dfe2(0x201)],[0x279*-0x1+-0x2*-0x4af+-0x5e9,_0x3d6075[_0x27dfe2(0x21b)]],[-0xa4+-0x21d*-0x7+0x45d*-0x3,_0x3d6075['bxZCw']],[0x14*-0x25+0x2*0x616+-0x81c,'u8'],[-0xfb*0x18+0x12e4+0x1*0x5d4,_0x27dfe2(0x4b4)],[-0x261e+0x1*0x1a42+0xd40,'u8'],[0xf43+0x1a+-0x73*0x1f,_0x3d6075[_0x27dfe2(0x6c5)]],[0x257e+-0xc2c+0x2*-0xbe9,'u8'],[0xa0*-0x23+-0x26a*0x7+-0x5c2*-0x7,'u8'],[-0x19*-0x6f+-0x11*0x1f+-0x1c9*0x4,'u8'],[0x6ca*0x3+-0x2f*0x89+0x671,'i32'],[0x13cb*-0x1+-0x1fe8+0xd*0x41b,'f32'],[0x2b*-0x65+-0xd3*0x13+0x2250,'u8'],[-0x43*0x4f+-0x80a+0x1e68,'u8'],[-0x2005+-0x1a99*-0x1+0x724,_0x3d6075['pWqTd']],[0x17b9*-0x1+-0xe1b+0x2790,'i32'],[0x1*-0x12fd+0x6b+0x1452,'f32'],[-0x49d*-0x1+0x1ede+0x9*-0x3bf,_0x3d6075['pWqTd']],[-0x1772+0xf*0x6f+-0x12b9*-0x1,_0x3d6075['OqTJf']],[0xf65+-0x1df0+-0x59*-0x2f,'i32'],[0x651*-0x2+0x14c4*0x1+0x652*-0x1,'i32']],'TDM_GameManager':[[-0x13d3+0x16f4+-0x15*0x25,'u8'],[0x1149+-0x185b+-0x732*-0x1,'u8'],[-0x1*-0x538+0xc00+-0x271*0x7,'u8'],[0x7*0x49+0x1f13+0x1*-0x20ee,_0x3d6075[_0x27dfe2(0x6c5)]],[-0x1f1*-0x5+-0x1e2e+0x49*0x49,'u8'],[0x224b*0x1+-0x20+-0xb45*0x3,'f32'],[0xc34+0x43*-0x25+0x1*-0x225,_0x3d6075[_0x27dfe2(0x6c5)]],[-0x157e+0xb88+0xa5a,'i32'],[-0x2b*-0xb+-0x9*0xad+0x4a4,'i32'],[-0x5c1*-0x2+0xd57+-0xa9*0x25,'u8'],[0x1*-0xce5+-0xfb5*-0x1+-0x263,'u8'],[0x1*0x1069+0x86f+0x2c*-0x8e,_0x3d6075[_0x27dfe2(0x6c5)]],[-0xe1f+-0xd1b+0x1bae,_0x3d6075['OqTJf']],[-0x1fa*-0x5+-0x580+-0x1f5*0x2,_0x3d6075[_0x27dfe2(0x347)]],[0xf98+0x11*-0x1cd+-0xf91*-0x1,'u8'],[-0x2124+-0xc6f*-0x1+0x1545,_0x3d6075[_0x27dfe2(0x21b)]],[0xa92+0xa*0x35+-0xbcc,_0x3d6075['bxZCw']],[0x191*-0xf+-0x1*-0x25cf+-0x4*0x359,_0x27dfe2(0x201)],[0x174b*-0x1+-0x36b*0xb+-0x1ef2*-0x2,_0x27dfe2(0x201)],[-0x1*0x6ad+-0x1*-0x26ee+-0x1f2d,'u8'],[-0x196a+0x1ab1+0x15,'u8'],[-0x1*0x55f+0x8a0*0x2+-0xa81,'i32'],[0x23*0x5b+0x1*0x1837+0x119e*-0x2,'u8'],[-0x112f+0x1*0x20e3+-0xe30,'u8'],[0x5e+-0x159d+-0x77*-0x31,_0x3d6075[_0x27dfe2(0x6c5)]],[-0x587*-0x7+0x1997+0x92*-0x6e,_0x27dfe2(0x4b4)],[-0x2586+-0x219f+0x48b5,_0x3d6075['pWqTd']],[-0x4*0x321+0xad3*0x3+0x1261*-0x1,'f32'],[-0x11f1+0x16a8+-0x31f,_0x27dfe2(0x4b4)],[0x13cb+-0xd*-0x4c+-0xd1*0x1b,_0x27dfe2(0x4b4)],[-0x5a2*0x3+0x10d4+0x7*0x3e,'f32'],[-0x1387+-0x4d0+0x1*0x19fb,'f32'],[0x52f*-0x7+-0x497+0x551*0x8,_0x3d6075[_0x27dfe2(0x347)]],[-0x18ae+-0x7e8*0x2+0x2a2e,'u8'],[-0x3*-0x81e+-0x23*-0x103+-0x3a12,'u8'],[-0x3*-0xb75+-0x1*-0x1127+-0x31ce,_0x27dfe2(0x729)]],'PhotonNetworkSync':[[-0x250f+0x133*0xd+0x15ac,'v3'],[0x5dc+0x405+-0x1*0x9a1,'i32'],[0xccf*-0x1+-0x16e8+0x23fb,'u8'],[0x1393+-0x797+-0xbb7,'u8'],[-0x1263*-0x2+0xc1c+-0x309a,'v3'],[-0xddf+-0x495+0x12c8,'u8'],[0x19b9+0x2*-0x277+-0x1473,'i32'],[-0x155*-0x19+0x27*-0x94+-0xa65,_0x3d6075['pWqTd']],[-0x2*-0xff0+-0xabe+-0x14c2,'f32'],[-0xab3+-0x586+-0x1*-0x109d,'f32'],[0x829+0x18c2+0x11f*-0x1d,_0x27dfe2(0x729)],[-0x9e*0x26+-0x13c2+0x2ba2,'v3'],[-0x1063*0x1+0x1*0x937+0x6*0x146,'f32'],[-0x19b6+0x2*0x613+0xe0c,_0x27dfe2(0x729)],[-0x2*0x21e+0x2025+-0x1*0x1b69,_0x3d6075[_0x27dfe2(0x347)]],[0x156d+0x116d+0x2*-0x1329,_0x27dfe2(0x729)]],'MouseLook':[[-0xa71+-0x2f9*-0x3+0x52*0x5,'f32'],[0x14*0x14+0x769*-0x1+0xd*0x75,_0x3d6075[_0x27dfe2(0x6c5)]],[-0x1de1+-0x2*0x662+0x2ac1,_0x3d6075[_0x27dfe2(0x6c5)]],[0xa1+-0xca0+0xc1f,_0x27dfe2(0x729)],[-0xc81*0x1+-0x1753+-0x11fc*-0x2,_0x27dfe2(0x729)],[0x10*-0x19d+0x165+0x1893,_0x3d6075[_0x27dfe2(0x6c5)]],[0x70*0x38+0x1895+-0x30e5,'f32'],[0xef+0x1cd8+-0x1d93,'u8'],[0x1954+0x4*-0x4a9+-0x678,_0x27dfe2(0x729)],[0x5*0x575+0x23b8+-0x3ec5,_0x3d6075[_0x27dfe2(0x6c5)]],[0x11c9+-0x81a+-0x325*0x3,_0x3d6075[_0x27dfe2(0x347)]],[0x80e+-0x7a2+0xa*-0x4,'u8'],[0x84f+0x1*-0x1ee3+0x16dc,'v2']],'NetworkPlayerAnimations':[[0x11*-0xfe+-0x1744+0x28ca,'v3'],[-0x1*0x146b+-0x1d12+0x3231,'v3'],[-0x2*0x7a+-0x218+-0xa2*-0x6,'u8'],[0x2fa+-0x1047+0xe11*0x1,'i32'],[0x162d+0x25f7+-0x3b5c,_0x3d6075['pWqTd']],[-0x20cb+-0x2138+0x1645*0x3,_0x3d6075[_0x27dfe2(0x6c5)]],[0x84e+0x6d*-0x25+0x843,_0x3d6075[_0x27dfe2(0x6c5)]],[0x5*-0x773+-0x1*-0x268f+-0x4*0x1d,_0x27dfe2(0x729)],[-0x19c2+-0x1ca2+0x49b*0xc,_0x3d6075[_0x27dfe2(0x6c5)]],[0x441+0x1590+-0x18e9,_0x3d6075[_0x27dfe2(0x6c5)]],[-0x1599+0x4*0x6d3+-0x4c7,_0x3d6075['OqTJf']],[0xbe+0xd6d+-0xd3b,_0x3d6075[_0x27dfe2(0x6c5)]],[0x35*-0x5a+0x346*-0x4+-0x5e*-0x59,_0x3d6075['OqTJf']],[0x3d7+-0x21b+-0xc4*0x1,_0x27dfe2(0x729)],[-0x162c+-0x10c*-0x10+-0x8*-0xcd,_0x3d6075[_0x27dfe2(0x6c5)]],[-0x13cd+-0x31*-0x42+0x82b,_0x27dfe2(0x729)],[-0x1*0x1993+0x6ab+0x13ec,_0x3d6075[_0x27dfe2(0x6c5)]],[-0x6a2*0x3+0x6f+0x6d5*0x3,_0x27dfe2(0x4b4)],[-0x6*0x1e5+0xa4f+0x21b,'u8'],[-0xee6+-0x52e+0x1ec*0xb,'i32'],[-0x190a+-0x10ce+0x2aec,'i32'],[0xb93*0x1+0x178+-0xbf3,'u8'],[-0x22df+0x1d04+0x6f7,_0x3d6075[_0x27dfe2(0x6c5)]],[0x9f*-0x31+0x4*0x941+0xb*-0x7f,'f32'],[0xbdd+0x3*0x153+-0x21*0x72,'f32'],[-0x6bf*-0x1+0xd8*-0x1+-0x2d*0x1b,_0x27dfe2(0x729)],[-0x18*0x10d+-0x2*-0xc56+0x1b8,'u8'],[-0x9*-0x157+0x1*0x13d5+-0x1eac,'u8'],[-0x23b*0xd+0x25c5+-0x78a,'v3'],[-0x1*-0x2587+0x4c5+-0x14*0x20d,'v3'],[-0x1099+0xeb+-0x5e*-0x2f,'u8']],'NPC_Cotroller':[[0x3*0x76c+-0x281+-0x13af,'v3'],[-0x1c*0x8+-0x135+-0x1*-0x235,'f32'],[-0x7b7*-0x2+0x7b*-0x42+-0x106c*-0x1,_0x3d6075['OqTJf']],[0xe12+-0x88+-0xd34,'u8'],[0x17*0xcc+-0x18e6+-0x1*-0x6e9,'u8'],[0xe5d*0x2+-0xd49*-0x1+-0x29a7,'v3'],[0x1b6d+0x35*-0x31+0xb*-0x184,'u8'],[0x52f+-0xc5c+0x7cd,_0x27dfe2(0x729)],[0x20aa+-0x1*0x1ce1+-0x73*0x7,'f32'],[-0x1988+0x1c58+-0x86*0x4,_0x27dfe2(0x729)],[-0x1ec3+-0xa2b*-0x3+-0x2*-0x7f,_0x3d6075['OqTJf']],[0x38a+0x1f7e+-0x2240,'u8'],[0xf*0x101+-0x1e66+0x1023,_0x3d6075[_0x27dfe2(0x6c5)]],[0x22cf+-0x21d*0xa+-0xcd5,_0x3d6075['OqTJf']],[-0x1*0x14e+-0x22b9+0x24e3,_0x27dfe2(0x729)],[-0x1776+-0x1bfa+0x3450,_0x3d6075['OqTJf']],[-0x26*0x9a+0x15*0x1bb+-0xc97,'u8'],[-0x1f9e+-0x23ac+-0x4436*-0x1,_0x3d6075[_0x27dfe2(0x6c5)]],[-0x1*0x2267+0x1253*0x2+0x1*-0x14f,'v3'],[0x23*0x9a+-0x1971+0x55f,'f32'],[0x16*0x4f+0x10a6+-0x1670,_0x3d6075['pWqTd']],[0x1d3+-0x10d*0x7+0x68c*0x1,_0x27dfe2(0x729)],[0x1181*-0x1+0xcf5+0xcc*0x7,_0x3d6075[_0x27dfe2(0x6c5)]],[-0x1c9f*0x1+0x1a74+0x337,_0x3d6075[_0x27dfe2(0x6c5)]],[-0x533+-0x41e+0x1*0xa65,'v3'],[0x11be+-0x9dc+-0x2*0x361,'f32'],[0x2442+0x706+0x7c*-0x57,_0x3d6075['OqTJf']],[0x162*-0x3+0x609+-0xaf,'v3'],[0x1214+-0x101f+-0xb1*0x1,'u8'],[0x90a+-0x1*-0x1b9d+-0x235f,'f32'],[0x1bc*0x14+-0x73*0x4+0x2f*-0xac,'v3'],[0xbe9+0x919*0x3+-0x25d4*0x1,_0x3d6075['pWqTd']],[-0x2065+-0xcc+0x229d*0x1,'i32'],[-0x133*0xb+0x1554+-0x6b3,_0x3d6075['OqTJf']],[0x69f*-0x1+0xae1+-0x1*0x2ce,'u8'],[-0x1c51+0x233+0xdcb*0x2,'v4'],[0x2570*0x1+-0x23b8+0x4*-0xc,_0x3d6075[_0x27dfe2(0x6c5)]],[-0x1*0x857+0x16fd+-0x56*0x27,_0x27dfe2(0x729)],[-0xd*0x237+-0xb18+0x2973,_0x27dfe2(0x729)],[0x3*0x7e1+0x109a+-0x26a5,'u8'],[-0x42e*0x1+0x141c+0x2*-0x727,_0x27dfe2(0x4b4)]],'TargetHealth':[[-0x1304+-0x264a+0x395e,_0x27dfe2(0x4b4)],[-0x1a4*0x10+0x11d+0x50b*0x5,_0x27dfe2(0x4b4)],[0x17b1+0x534+0x5*-0x5bd,'u8'],[0x103*0xd+0x1012*0x2+-0x2d07,_0x3d6075[_0x27dfe2(0x347)]],[-0x138f+-0x112e+-0x15f*-0x1b,_0x27dfe2(0x4b4)],[0x166b+-0xe6d*0x1+0x18a*-0x5,_0x27dfe2(0x4b4)],[-0x21cc+-0x16fb+0x3917,'i32'],[-0x1410+-0x2*0xb0b+0x56*0x7f,_0x27dfe2(0x729)],[-0x127*-0x4+0x27+0x437*-0x1,_0x27dfe2(0x729)],[-0x1efd*-0x1+0xcf5+-0x2b62,'u8'],[-0xb*0x5d+0x179f+-0x986*0x2,_0x3d6075['OqTJf']],[-0x198e+-0x81*-0x3a+0x1*-0x308,'u8'],[0x1*-0x275+-0x1423+0x1740,_0x3d6075[_0x27dfe2(0x347)]],[-0xb*-0x367+-0x14ed+-0xfd4,_0x3d6075[_0x27dfe2(0x347)]],[0x1*-0xd05+-0x1*-0x446+0x97f,_0x3d6075['OqTJf']],[-0x1504+-0x1*0xfc4+0x2594,'u8']],'SectatorCamera':[[0x37*-0x3c+0x1*-0x1ffd+0x2cf5,_0x3d6075['OqTJf']],[-0x13cd+-0x1d20+0x10b*0x2f,_0x3d6075['OqTJf']],[-0x268a*0x1+-0x1d3*-0x10+-0x1*-0x976,_0x27dfe2(0x729)],[0xc9d*-0x3+-0x133*0x1+0x272a,'v3'],[0x4d5*0x1+0x1d50+-0x21f9,'v3'],[-0x25c8+0x1*0x206a+0x1e2*0x3,_0x27dfe2(0x4b4)],[0x1a7c+0xeff+0x1*-0x292f,_0x3d6075[_0x27dfe2(0x347)]],[0x7*0x52+-0x3dd*0x5+0x1163*0x1,_0x3d6075['OqTJf']],[-0x1eb+-0x1b67+0x2e*0xa5,_0x3d6075['pWqTd']],[-0x715+0x103b+0x62*-0x17,_0x27dfe2(0x729)],[0x59*-0x3a+-0x259b+0x17*0x287,'u8'],[-0x1*-0xae7+0x7*-0x551+0x1ab0,'v3'],[-0xab5*-0x2+-0x1*0x279+0xb*-0x1af,'v4'],[-0x1f3a+-0x1*-0x51a+0x1a9c,'u8'],[-0xfec+-0x12ab+0x2317,'i32']],'UISettings':[[-0xb4a+0x16d9+-0xb6f,_0x27dfe2(0x4b4)],[-0x2332+0xbd5*0x3+-0x25*0x1,_0x3d6075['OqTJf']],[-0x932+-0x14cf*0x1+0x1f45,'u8'],[-0x1d00+-0x7bd+0x2605,'i32'],[-0x2680+-0x8ae*0x1+0x3082,_0x3d6075[_0x27dfe2(0x347)]],[0x1a83*-0x1+0x2*0xb7d+-0x1*-0x4e1,_0x27dfe2(0x4b4)],[-0x56e+-0x23f6+0x2ac0,'u8'],[0x2f8+-0x92*-0x3b+-0x2341,'u8'],[0x9*0x86+0x35*-0x3b+0x8df,'u8'],[-0x1db5+0x2*-0x17b+-0x2*-0x1105,'u8'],[0x192e+-0xd1e*0x2+0x26e,'u8'],[-0xef*-0x3+-0x368*-0x8+-0x14*0x16f,'u8'],[0x1553*0x1+-0xb19+-0x8d8,'u8'],[-0x142a+-0xb3*0x11+-0x3*-0xb43,_0x27dfe2(0x729)],[-0x1157*0x1+0x76e+0xbad,_0x3d6075[_0x27dfe2(0x6c5)]],[-0x1*-0xcf5+0x1331+-0x1e0e,'u8'],[-0x28e*-0x8+0x1dde+0x17e7*-0x2,_0x3d6075[_0x27dfe2(0x6c5)]],[-0x32b*-0x4+-0x1aef+0x10e3,_0x3d6075[_0x27dfe2(0x347)]],[-0x1*-0x260b+0x2*0x9cb+-0x36a9,'u8'],[0x1050+0x1ac5+0x2779*-0x1,'u8'],[-0x53*-0x22+-0x14b9+0xd53,'v2'],[0x1026+0x1d42+0x14e*-0x20,'v2'],[0x133a+0x5*-0x441+0x9*0xa3,'u8'],[0xd73+-0x47*-0xb+0x8*-0x199,'u8'],[0x74*-0x19+0x49*-0x87+0x359f,'f32'],[0xdfc*0x1+0x314*-0x7+0x8*0x16c,'v3'],[-0x89b+-0x23e0+0x1*0x305b,_0x3d6075[_0x27dfe2(0x6c5)]],[-0x12c4*0x2+-0x5dd*-0x5+0x409*0x3,_0x3d6075[_0x27dfe2(0x6c5)]],[0x86*0x2e+0x1e8d+-0x32b9,_0x27dfe2(0x729)],[-0xb4a+-0x1bcb+0x3*0xe57,'u8'],[0x6d*0x47+0x16f1*-0x1+-0x359,'u8'],[-0x20a1+0x578*-0x5+-0x1*-0x3fed,_0x27dfe2(0x4b4)],[0x6*0x2bc+-0x1362+-0x26*-0x2f,'i32'],[-0x1*0xe1b+0x1*-0x43b+0x165a*0x1,_0x3d6075['pWqTd']],[-0xde8+0x7*-0xe5+-0x1833*-0x1,'i32'],[-0xb2c+-0x12de+0x2216,'i32'],[-0x19fa+0x7ab+-0x45*-0x53,'i32'],[-0x6f*0x2b+0x3*-0xcaf+0x2*0x1e63,_0x3d6075[_0x27dfe2(0x347)]],[-0x64*-0x3+0x2644+-0x2358,_0x3d6075[_0x27dfe2(0x347)]],[0x1277+-0x7f9*-0x1+-0x1654,'i32'],[0x546+0x7*0x4d1+-0x22dd,'i32'],[-0x1*-0x557+0x1480+-0x1583,'u8'],[0x2*-0x1337+-0x2*-0x1+0x3e3*0xb,'u8'],[-0x112c+-0x3*0x6d9+0x2a0d,'u8'],[0x93c+0x14cc+-0x19b1,'u8'],[-0x4*-0x8a2+0x48d*-0x5+-0x73b,'f32']]},_0x61b93a={},_0x3ae231={};function _0x3c8739(_0xab5335,_0x9f7735,_0xd259af){var _0x160c85=_0x27dfe2,_0x467db2={'ufbFq':_0x3d6075[_0x160c85(0x65c)],'iMkVW':function(_0xdac5c4){return _0xdac5c4();},'FUEou':function(_0x5200a3,_0x58d3f5){var _0x2efe7b=_0x160c85;return _0x3d6075[_0x2efe7b(0x8c7)](_0x5200a3,_0x58d3f5);},'Ftyxh':function(_0x266e66,_0x416bf0){var _0x15b067=_0x160c85;return _0x3d6075[_0x15b067(0x8bb)](_0x266e66,_0x416bf0);}};if(_0x160c85(0x7bd)!==_0x160c85(0x7bd)){var _0x5c6a88=_0x3d6075[_0x160c85(0x420)](_0x2ea6a5,_0x160c85(0x198)+'n',_0x160c85(0x2f4)+_0x160c85(0x715));_0x5c6a88[_0x160c85(0x64e)]=_0x3d6075[_0x160c85(0x2f3)];var _0x21860e=function(){var _0x3286d2=_0x160c85;_0x5c6a88['setAt'+_0x3286d2(0x78c)+'te'](_0x467db2['ufbFq'],_0x19ba1c()?_0x3286d2(0xadd):_0x3286d2(0x2cd));};return _0x5c6a88['oncli'+'ck']=function(){var _0x846729=_0x160c85;_0x2479b1(!_0x524e40()),_0x467db2[_0x846729(0x6ca)](_0x21860e);},_0x21860e(),_0x5c6a88[_0x160c85(0xa94)]=_0x21860e,_0x58729a['syncs'][_0x160c85(0x82d)](_0x21860e),_0x5c6a88;}else return function(_0x5e6e41){var _0x1a8efb=_0x160c85;try{var _0x18de77=_0x5e6e41&&_0x5e6e41[_0x1a8efb(0x11a)]?_0x5e6e41[_0x1a8efb(0x11a)]():-0x1*0x24ac+0x377*-0x7+0x3ced;if(!_0x18de77)return;var _0x3a11e2=_0x3ae231[_0xab5335]||(_0x3ae231[_0xab5335]={}),_0x3d0ef3=_0x3a11e2[_0x18de77];if(!_0x3d0ef3)_0x3d0ef3=_0x3a11e2[_0x18de77]={'ptr':_0x18de77,'firstSeen':Date['now'](),'hits':0x0};_0x3d0ef3[_0x1a8efb(0x7cc)]++;if(_0xd259af){if(!_0x61b93a[_0x18de77])_0x61b93a[_0x18de77]={'ptr':_0x18de77,'kind':_0xab5335,'firstSeen':Date[_0x1a8efb(0xab9)](),'hits':0x0};_0x61b93a[_0x18de77]['hits']++;}else{if(_0x3d6075[_0x1a8efb(0x1c9)]('lUnDT',_0x1a8efb(0x216))){var _0x38204b=_0x417ed9[_0xab5335];if(!_0x38204b||_0x3d6075[_0x1a8efb(0x621)](_0x38204b[_0x1a8efb(0x7ff)],_0x18de77)){_0x417ed9[_0xab5335]={'ptr':_0x18de77,'firstSeen':Date['now'](),'hits':0x0,'replaced':!!_0x38204b};try{if(_0x3d6075[_0x1a8efb(0x500)]!==_0x3d6075['McLxn']){var _0x5c4705=_0xe948fc[_0x1a8efb(0x63b)+'r'](function(_0x759f89){var _0x49dc53=_0x1a8efb;return _0x467db2[_0x49dc53(0x6fa)](_0x759f89[_0x49dc53(0x64e)],_0xab5335);})[0x1dd1+-0x1c03*-0x1+-0xe75*0x4];_0x1ae294={'type':_0xab5335,'atMs':Date['now']()-_0x3040b6,'originalFunc':!!(_0x5c4705&&_0x5c4705['hook']&&_0x3d6075[_0x1a8efb(0x64b)](typeof _0x5c4705['hook'][_0x1a8efb(0x993)+'nalFu'+'nc'],_0x3d6075[_0x1a8efb(0x2c8)])),'resolveGameAtFire':!!_0x1a99d4(),'gameSourceAtFire':_0x11505b['sourc'+'e']};}else return _0x39e86a['faile'+'d']++,_0x1e8072[_0x1a8efb(0x9cf)+_0x1a8efb(0x87d)]=_0x22ac91[_0x1a8efb(0x9cf)+'rror']||'no\x20HE'+'APU8\x20'+'-\x20Uni'+'ty\x20in'+'stanc'+_0x1a8efb(0x30c)+_0x1a8efb(0x975)+_0x1a8efb(0xb23)+_0x1a8efb(0x43f)+'Runti'+_0x1a8efb(0x248)+'solve'+'Game('+_0x1a8efb(0x561)+_0x1a8efb(0x842)+_0x1a8efb(0x6bd)+_0x1a8efb(0x8b8)+'al',_0x263f29;}catch(_0x2102ad){}}}else{var _0x4ff34e=_0x37d4a8['max'](-0x220b+-0x1665+-0x1*-0x3871,_0x40e17a[_0x1a8efb(0x261)+'Width']||_0x3120d9[_0x1a8efb(0x691)+_0x1a8efb(0xac9)+_0x1a8efb(0x204)]['clien'+'tWidt'+'h']||0x2eb+-0x10b7*-0x2+-0x2459*0x1),_0x209439=_0x5eb388[_0x1a8efb(0x2fe)](0x939*0x1+0x21eb+-0x2b23,_0x1d7b57[_0x1a8efb(0x261)+_0x1a8efb(0x953)+'t']||_0x151736[_0x1a8efb(0x691)+'entEl'+_0x1a8efb(0x204)]['clien'+_0x1a8efb(0x461)+'ht']||0xcbf*0x1+-0x2315*0x1+-0xb2b*-0x2);return(_0x33dd24['cv']['width']!==_0x4ff34e||_0x44fac6['cv']['heigh'+'t']!==_0x209439)&&(_0x588691['cv'][_0x1a8efb(0x408)]=_0x4ff34e,_0x343888['cv']['heigh'+'t']=_0x209439),{'w':_0x4ff34e,'h':_0x209439};}}if(_0xab5335===_0x1a8efb(0x502)+_0x1a8efb(0x437)+'ler'&&_0x2ad7e0['on'])try{_0x3d6075['JQaka']('XsBvE',_0x1a8efb(0x77b))?_0x10c7ed(_0x18de77):_0x2744d5[_0x1a8efb(0x172)+'em'](_0x21c0d0,_0x23df88(_0xeb1859['fov']));}catch(_0x4bb533){}if(!_0x9f7735){if(_0x3d6075['MXtbS']('hHXRr','hHXRr')){var _0x5c4705=_0xe948fc[_0x1a8efb(0x63b)+'r'](function(_0x5f057f){return _0x5f057f['type']===_0xab5335;})[-0x2702+0xa2f+-0x2f*-0x9d];if(_0x5c4705&&_0x5c4705['hook'])try{_0x5c4705['hook']['enabl'+'ed']=![];}catch(_0x3eb9b1){}}else _0x5d52b6=_0x36a190+_0x4a141d,_0x187b6f=_0x467db2[_0x1a8efb(0x6c1)](_0x4e1e48,_0x7a0829);}}catch(_0x45b2aa){}};}function _0x40279e(){var _0x34479e=_0x27dfe2;if(_0xe948fc[_0x34479e(0x827)+'h'])return!![];if(!window['Unity'+_0x34479e(0x220)+_0x34479e(0x354)]||!window['Unity'+_0x34479e(0x220)+'dkit'][_0x34479e(0x508)+'me'])return![];var _0x44dfff=window[_0x34479e(0x5e6)+'WebMo'+'dkit'][_0x34479e(0x508)+'me'];if(!_0x44dfff[_0x34479e(0xa5f)+'ns']||!_0x44dfff['plugi'+'ns'][_0x34479e(0x827)+'h'])return![];_0xa394c=window[_0x34479e(0x5e6)+'WebMo'+_0x34479e(0x354)][_0x34479e(0x690)+_0x34479e(0x68e)+'er'],_0x4f7e7c=_0x4f7e7c||_0x44dfff[_0x34479e(0xa5f)+'ns'][_0x44dfff[_0x34479e(0xa5f)+'ns'][_0x34479e(0x827)+'h']-(0x2f5*0xc+0xd2e+-0x30a9)];if(!_0x4f7e7c||typeof _0x4f7e7c[_0x34479e(0x38b)+'refix']!=='funct'+_0x34479e(0x653))return![];for(var _0x307be8=-0x533+-0x213b+0x266e;_0x3d6075['rKnyS'](_0x307be8,_0x50b882[_0x34479e(0x827)+'h']);_0x307be8++){if(_0x3d6075[_0x34479e(0x89f)]('RVGwi',_0x34479e(0x905))){var _0x3ff693=_0x50b882[_0x307be8];try{var _0x18a267=_0x4f7e7c[_0x34479e(0x38b)+_0x34479e(0x25c)]({'typeName':_0x3ff693[_0x34479e(0x64e)],'methodName':_0x34479e(0x84e)+'e','params':[_0x34479e(0x4b4),'i32'],'returnType':undefined},_0x3c8739(_0x3ff693[_0x34479e(0x64e)],_0x3ff693[_0x34479e(0xb21)],_0x3ff693['many']));_0xe948fc[_0x34479e(0x82d)]({'type':_0x3ff693['type'],'hook':_0x18a267,'keep':_0x3ff693[_0x34479e(0xb21)]});}catch(_0x5b499c){_0x1bd886[_0x34479e(0x82d)](_0x3d6075[_0x34479e(0x1a0)](_0x3ff693[_0x34479e(0x64e)]+':\x20',String(_0x5b499c&&_0x5b499c[_0x34479e(0x965)+'ge']||_0x5b499c)['slice'](0x4cc+-0x307*-0x3+-0xde1,-0x1888+0x314*-0xa+0x37f0)));}}else{var _0x7173f2=('2|1|8'+'|7|6|'+'3|4|0'+'|5')['split']('|'),_0x4182d7=-0x39*0xa6+0x635*0x2+0x623*0x4;while(!![]){switch(_0x7173f2[_0x4182d7++]){case'0':for(var _0x210fb8=-0x315+-0x1ccc+0x1*0x1fe1;_0x210fb8<_0x4776d4[_0x34479e(0x827)+'h'];_0x210fb8++){var _0x532994=_0xb0cbc9[_0x210fb8];try{var _0x495ab=_0x22b92d[_0x34479e(0x38b)+_0x34479e(0x25c)]({'typeName':_0x532994[_0x34479e(0x64e)],'methodName':_0x34479e(0x84e)+'e','params':['i32',_0x3d6075[_0x34479e(0x347)]],'returnType':_0x223dac},_0x2cc4b7(_0x532994['type'],_0x532994[_0x34479e(0xb21)],_0x532994[_0x34479e(0x51a)]));_0x3988c4[_0x34479e(0x82d)]({'type':_0x532994[_0x34479e(0x64e)],'hook':_0x495ab,'keep':_0x532994['keep']});}catch(_0x281a1c){_0x347b8f[_0x34479e(0x82d)](_0x3d6075[_0x34479e(0x81a)](_0x532994[_0x34479e(0x64e)]+':\x20',_0x1a73bc(_0x281a1c&&_0x281a1c[_0x34479e(0x965)+'ge']||_0x281a1c)['slice'](0x214d+-0x177*0x1+-0x1fd6,-0x1041+0x1*0x12b7+-0xeb*0x2)));}}continue;case'1':if(!_0x5d4197['Unity'+_0x34479e(0x220)+_0x34479e(0x354)]||!_0x2be049[_0x34479e(0x5e6)+'WebMo'+_0x34479e(0x354)]['Runti'+'me'])return![];continue;case'2':if(_0x2a55d4[_0x34479e(0x827)+'h'])return!![];continue;case'3':_0x5450be=_0x237e9e||_0x1d2918['plugi'+'ns'][_0x1d2918[_0x34479e(0xa5f)+'ns'][_0x34479e(0x827)+'h']-(-0x283*0xe+0x7dc+0x1b4f)];continue;case'4':if(!_0x59a42b||_0x3d6075['PUxgT'](typeof _0x39cdb4['hookP'+_0x34479e(0x25c)],_0x3d6075[_0x34479e(0x2c8)]))return![];continue;case'5':return _0x1ad2f5['lengt'+'h']>-0x1*0x26d3+-0x1ae9+0x41bc;case'6':_0x5286f2=_0x5a8fa3[_0x34479e(0x5e6)+'WebMo'+_0x34479e(0x354)]['Value'+'Wrapp'+'er'];continue;case'7':if(!_0x1d2918['plugi'+'ns']||!_0x1d2918[_0x34479e(0xa5f)+'ns']['lengt'+'h'])return![];continue;case'8':var _0x1d2918=_0x125f55['Unity'+_0x34479e(0x220)+_0x34479e(0x354)][_0x34479e(0x508)+'me'];continue;}break;}}}return _0x3d6075['AcCxU'](_0xe948fc['lengt'+'h'],-0x11*0x152+0x2*0x51+0x15d0*0x1);}function _0x3623fd(){var _0x27b5d3=_0x27dfe2,_0x57f37d=-0x1*0x203f+-0x2*0x89+0x2151;for(var _0x456844=0x18e9+-0xfb*-0x6+-0x1ecb*0x1;_0x456844<_0xe948fc['lengt'+'h'];_0x456844++){if('KjVyn'===_0x3d6075['dsXiR']){var _0x3331e7=_0x164525[_0x27b5d3(0x11c)+_0x27b5d3(0x1e9)+_0x27b5d3(0x170)+'nc']||{};if(!_0x51f81e['keys'](_0x3331e7)[_0x27b5d3(0x827)+'h'])return![];return!!_0x1ea456();}else{if(_0xe948fc[_0x456844][_0x27b5d3(0x546)]&&_0xe948fc[_0x456844][_0x27b5d3(0x546)][_0x27b5d3(0x9d3)+_0x27b5d3(0x9fe)]!==undefined)_0x57f37d++;}}return _0x57f37d;}function _0x4fb0e1(){var _0x5d744c=_0x27dfe2,_0x45b70f=0x255*0x3+-0x19*0xa4+-0x905*-0x1;for(var _0xad96ea=0x1263+-0x25e2+0x137f;_0xad96ea<_0xe948fc[_0x5d744c(0x827)+'h'];_0xad96ea++){if(_0xe948fc[_0xad96ea]['hook']&&_0xe948fc[_0xad96ea]['hook'][_0x5d744c(0x8fb)+'ed'])_0x45b70f++;}return _0x45b70f;}var _0x4182c9=null,_0x210a18=[],_0x1103ca={},_0x1ae294=null;function _0xb1a3b9(_0x5bbaa0){var _0x5c9996=_0x27dfe2;try{if(_0x3d6075['HxZgQ'](!_0xa394c,!_0x5bbaa0))return null;var _0x1fa713=new _0xa394c(_0x5bbaa0)[_0x5c9996(0x44b)+_0x5c9996(0x630)+'me']();return _0x1fa713===undefined?null:_0x1fa713;}catch(_0xda874f){return _0x3d6075['fdjBP']!==_0x5c9996(0x921)?null:{'o':_0x3d6075['ViDRu']('0x',_0x4f3705[0x7e3+-0x20a1+0x1*0x18be][_0x5c9996(0x5c6)+'ing'](0x63*0x29+-0x2*0x12ec+0x160d)),'v':_0x226fec(_0x3d6075['wHOoC'](_0x57b8a6,_0x16eacc[-0x22f7+-0x1*0x2231+0x4528]),_0x2a337f[-0x11a5+-0x222a+-0x2*-0x19e8])};}}function _0x2100b3(_0x32db70,_0x2d27f3,_0x539b11){var _0x33c9b1=_0x27dfe2;if(_0x33c9b1(0x25d)!==_0x3d6075[_0x33c9b1(0x2af)]){var _0x161e10=_0x3d6075['PpJrN'](_0x2e64b9);if(!_0x161e10)return null;if(_0x3d6075[_0x33c9b1(0x1ed)](_0x2d27f3,0x76*0x52+0x1c5b+0x4227*-0x1)||_0x2d27f3+_0x3d6075['pAiVc'](_0x539b11,-0x2*-0x10dc+0x23c6+-0x457a)>_0x161e10[_0x33c9b1(0x62e)+_0x33c9b1(0x8b7)])return null;var _0x15cb78=[];for(var _0x1743d8=-0x274*0x4+0x225+-0x7ab*-0x1;_0x1743d8<_0x539b11;_0x1743d8++)_0x15cb78[_0x33c9b1(0x82d)](_0x161e10[_0x33c9b1(0x27c)+_0x33c9b1(0x50f)](_0x3d6075['GJzHn'](_0x3d6075['LwIKo'](_0x32db70,_0x2d27f3),_0x1743d8*(-0x1f7b+-0x241a+0x4399)),!![]));return _0x11505b['ok']+=_0x539b11,_0x15cb78;}else try{if(!_0x1ab0fd[_0x33c9b1(0x258)])return;var _0x4bb0ae=_0x26f8a7();_0x4bb7df['petal'][_0x33c9b1(0x113)]['opaci'+'ty']=_0x181047['open']?'1':_0x4bb0ae?'.8':_0x3d6075[_0x33c9b1(0x553)],_0x4ff742[_0x33c9b1(0x258)]['title']=_0x4bb0ae?_0x33c9b1(0x319)+_0x33c9b1(0x5e2)+'llWar'+_0x33c9b1(0x906)+'sert)':_0x33c9b1(0x319)+'a\x20Ski'+'llWar'+_0x33c9b1(0x3aa)+'aitin'+_0x33c9b1(0x6e3)+_0x33c9b1(0x11b)+_0x33c9b1(0x797)+'(Inse'+_0x33c9b1(0x46f);}catch(_0x168478){}}var _0x33abfa={'PhotonNetworkSync':[[_0x27dfe2(0xa7a),_0x27dfe2(0xb50)+'nView'],['0x20','healt'+'h'],['0x24',_0x27dfe2(0x371)+'form'],[_0x27dfe2(0x10b),'fps'],[_0x27dfe2(0x644),_0x3d6075[_0x27dfe2(0x249)]]],'NetworkPlayerAnimations':[['0x10','capsu'+'le'],[_0x27dfe2(0x7b5),'sync']],'NPC_Cotroller':[[_0x3d6075[_0x27dfe2(0x294)],'capsu'+'le'],[_0x27dfe2(0x12d),_0x27dfe2(0x84a)+'tHeal'+'th'],['0xd0',_0x3d6075['nEmNn']],[_0x27dfe2(0x34e),_0x3d6075['RkbGp']],[_0x3d6075['JpihR'],_0x3d6075[_0x27dfe2(0x4c0)]]],'EnemyBot':[['0x14','trans'+'form']]},_0x27836a={'PhotonNetworkSync':[[_0x3d6075[_0x27dfe2(0x453)],_0x27dfe2(0xafb)],[_0x3d6075['lcPMx'],_0x3d6075['qmrlo']],[_0x27dfe2(0x196),'id']]};function _0x2ae5ac(_0x3167ca,_0x243a1c){var _0x4f28f2=_0x27dfe2,_0x369bae={'OOKGk':_0x4f28f2(0x33e),'dUoVt':_0x4f28f2(0x319)+_0x4f28f2(0x5e2)+'llWar'+'z\x20(In'+_0x4f28f2(0x14c),'Ixfch':'Sakur'+_0x4f28f2(0x5e2)+_0x4f28f2(0xb29)+_0x4f28f2(0x3aa)+_0x4f28f2(0x9a1)+_0x4f28f2(0x6e3)+_0x4f28f2(0x11b)+_0x4f28f2(0x797)+_0x4f28f2(0x9e0)+'rt)','weFhJ':function(_0x301048,_0x9485a5){return _0x301048(_0x9485a5);},'EFWmk':function(_0x2348af,_0x261225){return _0x2348af+_0x261225;},'aUBoF':function(_0x4ed7fe,_0x746b57){return _0x3d6075['UkuJs'](_0x4ed7fe,_0x746b57);}};if(_0x3d6075['bbuti']===_0x3d6075['twYEO'])_0x48de19[_0x4f28f2(0x7b4)][_0x1bbd94]();else{var _0x5cb269=_0x276905[_0x3167ca]||[],_0x57919f={'kind':_0x3167ca,'ptr':_0x3d6075['PwugO']('0x',_0x243a1c['toStr'+_0x4f28f2(0x2ce)](-0x785+0x1cd1+-0x153c)),'pos':null,'posAt':null,'allVecs':[],'scalars':[],'refs':{}};for(var _0x5bf406=0xe01+-0x7f1+-0x8*0xc2;_0x3d6075[_0x4f28f2(0x40a)](_0x5bf406,_0x5cb269['lengt'+'h']);_0x5bf406++){if(_0x3d6075['vUQxZ'](_0x5cb269[_0x5bf406][-0x251*0x7+-0x61*-0xb+0xc0d],'v3'))continue;var _0x11258b=_0x3d6075[_0x4f28f2(0x2c3)](_0x2100b3,_0x243a1c,_0x5cb269[_0x5bf406][0x17*0x191+0x548*0x1+-0x294f],-0x408+-0x1c15*-0x1+-0x180a);if(!_0x11258b)continue;_0x57919f['allVe'+'cs']['push']({'o':'0x'+_0x5cb269[_0x5bf406][-0xdc9*0x1+-0x1ec2+0x2c8b]['toStr'+'ing'](0x14ff+0x1*0x1744+-0x5*0x8d7),'v':_0x11258b});}var _0x37cc88=-0xf6b+-0x8e*-0xe+0x3*0x28d;for(var _0x57a18a=0x2286+-0x5*-0x5d7+-0x3fb9;_0x3d6075['vVbzX'](_0x57a18a,_0x57919f[_0x4f28f2(0x94e)+'cs']['lengt'+'h']);_0x57a18a++){var _0x570d6a=_0x57919f['allVe'+'cs'][_0x57a18a]['v'],_0x1b19bf=_0x570d6a[-0x1*-0xbf5+-0x883*0x1+-0x372]*_0x570d6a[-0x129c+-0x12c5+0x2561]+_0x570d6a[-0x1af2+-0x125d+0x2d51]*_0x570d6a[-0x4e3+0x9*-0xd1+0x2*0x61f];if(_0x1b19bf>_0x37cc88){if(_0x3d6075[_0x4f28f2(0x678)]('irEMT',_0x4f28f2(0x606))){if(!_0x483a6b['petal'])return;var _0x3cc4b8=_0x416caf();_0x11c463['petal'][_0x4f28f2(0x113)][_0x4f28f2(0x9dc)+'ty']=_0x257b89['open']?'1':_0x3cc4b8?'.8':_0x369bae[_0x4f28f2(0x175)],_0x11c574[_0x4f28f2(0x258)][_0x4f28f2(0x9ef)]=_0x3cc4b8?_0x369bae['dUoVt']:_0x369bae[_0x4f28f2(0x41f)];}else _0x37cc88=_0x1b19bf,_0x57919f[_0x4f28f2(0xb2e)]=_0x570d6a,_0x57919f[_0x4f28f2(0x944)]=_0x57919f[_0x4f28f2(0x94e)+'cs'][_0x57a18a]['o'];}}_0x57919f[_0x4f28f2(0x961)]=Math['sqrt'](_0x37cc88);var _0x16b8f7=_0x33abfa[_0x3167ca],_0x187eb4=_0x27836a[_0x3167ca];if(_0x187eb4){if(_0x3d6075[_0x4f28f2(0x7c6)](_0x3d6075['iuagc'],_0x4f28f2(0x1c6))){_0x57919f['tag']={};for(var _0x259b4e=0x3*0x3a5+0x1ae2+0x1cd*-0x15;_0x3d6075[_0x4f28f2(0x8eb)](_0x259b4e,_0x187eb4[_0x4f28f2(0x827)+'h']);_0x259b4e++){var _0x15749a=_0x32457e(_0x3d6075[_0x4f28f2(0x624)](_0x243a1c,parseInt(_0x187eb4[_0x259b4e][0xa2*0x8+-0x175*-0x3+0x3*-0x325],0x25e3+-0x5*-0x659+-0x4590)),_0x4f28f2(0x4b4));if(_0x15749a!==undefined)_0x57919f[_0x4f28f2(0x165)][_0x187eb4[_0x259b4e][-0xea4+0x2b0+0xbf5*0x1]]=_0x15749a;}}else{var _0xae3de2=_0x56cfc5();if(!_0xae3de2)return _0x424273;if(_0xae3de2['datas'+'et']['api'])return _0xae3de2[_0x4f28f2(0x99d)];try{return _0x369bae[_0x4f28f2(0x6e9)](_0x5b2383,_0xae3de2);}catch(_0x35b3b7){return _0xae3de2[_0x4f28f2(0x31e)+'et']['api']='1',_0xae3de2[_0x4f28f2(0x99d)]=_0x3a5dd2,_0x128ca6['warn']('%c[sa'+'kura]'+'\x20pane'+'l\x20dis'+_0x4f28f2(0x341),_0x369bae['EFWmk']('color'+':',_0x422e15),_0x35b3b7),_0x3d6300;}}}if(_0x16b8f7)for(var _0x20cec7=0x128e+0x395+-0x1623;_0x3d6075[_0x4f28f2(0x8eb)](_0x20cec7,_0x16b8f7[_0x4f28f2(0x827)+'h']);_0x20cec7++){if(_0x4f28f2(0x509)!=='OQWsx')return _0x3fb299[_0x4f28f2(0x68f)+'d']++,_0x3bf11e[_0x4f28f2(0x9cf)+_0x4f28f2(0x87d)]=_0x5eef02['lastE'+_0x4f28f2(0x87d)]||_0x1d59d4(_0x1ee560&&_0x3fbe1b['messa'+'ge']||_0x13b6cf)['slice'](-0x18d9+0xc55*-0x2+0x3183,-0x1*-0x25fd+0x421+0x2*-0x14d3),_0x3b6217;else{var _0x3305ad=_0x32457e(_0x243a1c+_0x3d6075[_0x4f28f2(0x8ca)](parseInt,_0x16b8f7[_0x20cec7][0x2a6*0x8+-0x7f9*0x2+-0x53e],-0x92f+-0x1868+0x21a7),_0x3d6075['YHHOO']);if(_0x3305ad)_0x57919f['refs'][_0x16b8f7[_0x20cec7][-0x1*-0x923+-0x74+0x457*-0x2]]='0x'+(_0x3305ad>>>-0x2f*-0x17+-0x30a*-0xa+-0x229d)['toStr'+'ing'](-0x1*0x75d+-0x1b72+0x22df);}}return _0x57919f[_0x4f28f2(0x929)+'rs']=_0x5cb269[_0x4f28f2(0x63b)+'r'](function(_0x191013){var _0x43b369=_0x4f28f2;return _0x369bae['aUBoF'](_0x191013[-0x4a7*0x7+0x741*-0x4+0x3d96],_0x43b369(0x729))||_0x191013[-0x7f4+-0x142*0x13+0x1fdb]===_0x43b369(0x4b4);})[_0x4f28f2(0x456)](function(_0x1e24d1){var _0x2becf2=_0x4f28f2;return{'o':'0x'+_0x1e24d1[0x2*-0xfb9+0x7dd+0x1795]['toStr'+_0x2becf2(0x2ce)](0x527+-0x1*0x55a+0x43),'v':_0x32457e(_0x3d6075['SBhKQ'](_0x243a1c,_0x1e24d1[0xaed*0x1+-0x2*0xb29+0xb65]),_0x1e24d1[-0x11de*0x2+0x58+-0x2b9*-0xd])};})['filte'+'r'](function(_0x37c31f){var _0x47a2c0=_0x4f28f2;return _0x3d6075[_0x47a2c0(0x96f)](_0x37c31f['v'],undefined)&&_0x3d6075[_0x47a2c0(0x893)](isFinite,_0x37c31f['v']);})['slice'](0x1ad8+-0x2*0x262+0x3*-0x75c,-0x255*0x1+-0x1*0x566+0x7c7),_0x57919f;}}function _0xa1af15(){var _0x50b447=_0x27dfe2,_0x4b166e={'yclPg':function(_0x161dcd){return _0x161dcd();},'DMNly':_0x3d6075[_0x50b447(0xa59)],'xlnfe':function(_0x18d626,_0x393276,_0x401eb8){return _0x18d626(_0x393276,_0x401eb8);},'TqtwE':_0x3d6075['WftXA'],'FeXjE':function(_0x3c3cad,_0xa5c4aa){return _0x3c3cad+_0xa5c4aa;},'IWjQM':_0x3d6075['cVXUh'],'WOYTw':_0x3d6075[_0x50b447(0x629)]};if(_0x3d6075[_0x50b447(0x44d)](_0x50b447(0x682),'VDlRu')){var _0x21acce={'players':[],'bots':[],'enemies':[],'controllers':[],'camera':null,'cameraFrom':null,'playerList':null,'managers':{},'wasmTypes':null},_0x481d73=_0x417ed9[_0x50b447(0x502)+_0x50b447(0x437)+'ler']&&_0x417ed9[_0x50b447(0x502)+_0x50b447(0x437)+'ler'][_0x50b447(0x7ff)]||0x2120+-0x121*-0x7+0x185*-0x1b,_0x714d7=_0x3ae231[_0x50b447(0x11c)+_0x50b447(0x1e9)+'orkSy'+'nc']||{},_0x4a131a=Object['keys'](_0x714d7);for(var _0x4f5b96=-0x1*-0x129a+-0x1f*0x113+0xeb3;_0x4f5b96<_0x4a131a['lengt'+'h']&&_0x3d6075[_0x50b447(0x5b3)](_0x4f5b96,-0xa8d+0x404+0x1*0x6a1);_0x4f5b96++){var _0xc662e3=_0x714d7[_0x4a131a[_0x4f5b96]],_0x137c46=_0x2ae5ac(_0x50b447(0x11c)+'nNetw'+_0x50b447(0x170)+'nc',_0xc662e3[_0x50b447(0x7ff)]);_0x137c46['hits']=_0xc662e3['hits'],_0x137c46['first'+_0x50b447(0x1a6)+'s']=_0x3d6075['DsTLa'](_0xc662e3[_0x50b447(0x7ee)+_0x50b447(0x5f3)],_0x3040b6),_0x137c46[_0x50b447(0x6f9)+'al']=!!_0x481d73&&_0x137c46[_0x50b447(0x3f8)][_0x50b447(0x2fc)]===_0x3d6075[_0x50b447(0x4b3)]('0x',_0x481d73[_0x50b447(0x5c6)+'ing'](0x2c3*-0x2+0x4ec+0xaa));if(_0x137c46[_0x50b447(0x3f8)][_0x50b447(0x523)+'h']){if(_0x3d6075[_0x50b447(0x6d1)]!==_0x50b447(0x58f))_0x56adf7['on']=_0x2e99dc,_0x4b166e[_0x50b447(0x4e8)](_0x424073);else{var _0x58a7f2=parseInt(_0x137c46['refs']['healt'+'h'],0xc6b+0x558+-0x11b3*0x1);_0x137c46[_0x50b447(0x523)+'h']=_0x31c96b(_0x58a7f2,_0x50b447(0x3db)+_0x50b447(0xa03)+'pt',_0x50b447(0x201));}}_0x21acce[_0x50b447(0x886)+'rs'][_0x50b447(0x82d)](_0x137c46);}_0x21acce[_0x50b447(0x886)+'rCoun'+'t']=_0x4a131a['lengt'+'h'];var _0x3ea02b=_0x3ae231[_0x50b447(0x36f)+_0x50b447(0xa4b)+_0x50b447(0xb28)]||{},_0x25fded=Object[_0x50b447(0x4ea)](_0x3ea02b);for(var _0x5bb2b5=-0xdb3+-0x175a+0x250d;_0x3d6075['rKnyS'](_0x5bb2b5,_0x25fded[_0x50b447(0x827)+'h'])&&_0x3d6075[_0x50b447(0x73c)](_0x5bb2b5,-0x151*0x6+-0xe*0x1c4+0x20b6);_0x5bb2b5++){var _0x52f359=_0x2ae5ac(_0x50b447(0x36f)+_0x50b447(0xa4b)+_0x50b447(0xb28),_0x3ea02b[_0x25fded[_0x5bb2b5]][_0x50b447(0x7ff)]);_0x52f359['hits']=_0x3ea02b[_0x25fded[_0x5bb2b5]][_0x50b447(0x7cc)],_0x52f359[_0x50b447(0x7ee)+_0x50b447(0x1a6)+'s']=_0x3d6075[_0x50b447(0x813)](_0x3ea02b[_0x25fded[_0x5bb2b5]][_0x50b447(0x7ee)+_0x50b447(0x5f3)],_0x3040b6);if(_0x52f359[_0x50b447(0x3f8)]['healt'+'h'])_0x52f359[_0x50b447(0x523)+'h']=_0x3d6075['SEVJc'](_0x31c96b,parseInt(_0x52f359['refs'][_0x50b447(0x523)+'h'],0xbcb*0x1+0x1*0x210a+-0x2cc5),_0x3d6075['ZZivd'],_0x50b447(0x201));_0x21acce[_0x50b447(0x33a)]['push'](_0x52f359);}_0x21acce['botCo'+'unt']=_0x25fded['lengt'+'h'];var _0x445fef=_0x3ae231['FPSco'+_0x50b447(0x437)+'ler']||{},_0x4e3f9c=Object['keys'](_0x445fef);for(var _0x35af69=-0x204c+-0x251*0xd+0xd*0x4cd;_0x3d6075[_0x50b447(0x421)](_0x35af69,_0x4e3f9c[_0x50b447(0x827)+'h'])&&_0x35af69<0x11c+-0xbf3+-0xaef*-0x1;_0x35af69++){var _0x6f2d67=_0x3d6075['iVIwH'](_0x2ae5ac,_0x3d6075[_0x50b447(0x664)],_0x445fef[_0x4e3f9c[_0x35af69]]['ptr']);_0x6f2d67[_0x50b447(0x7cc)]=_0x445fef[_0x4e3f9c[_0x35af69]][_0x50b447(0x7cc)],_0x6f2d67['isLoc'+'al']=_0x445fef[_0x4e3f9c[_0x35af69]][_0x50b447(0x7ff)]===_0x481d73,_0x21acce[_0x50b447(0xb61)+_0x50b447(0x19b)+'s'][_0x50b447(0x82d)](_0x6f2d67);}_0x21acce[_0x50b447(0xb61)+'oller'+_0x50b447(0x786)]=_0x4e3f9c[_0x50b447(0x827)+'h'];var _0x23b33e=_0x21acce[_0x50b447(0x886)+'rs'][_0x50b447(0x240)+'t'](_0x21acce['bots']);for(var _0x31e877=0x870+-0x2*0xdb3+0x12f6;_0x31e877<_0x23b33e[_0x50b447(0x827)+'h'];_0x31e877++){if(_0x23b33e[_0x31e877]['isLoc'+'al'])continue;_0x21acce['enemi'+'es'][_0x50b447(0x82d)](_0x23b33e[_0x31e877]);}_0x21acce[_0x50b447(0x299)+_0x50b447(0x786)]=_0x21acce[_0x50b447(0xa74)+'es']['lengt'+'h'];var _0x134a47={'TDM_GameManager':0x2c,'GG_GameManager':0x14},_0x274821={'TDM_GameManager':0x50,'GG_GameManager':0x5c};for(var _0x3719dd in _0x417ed9){var _0x4f650f=_0x417ed9[_0x3719dd];if(!_0x4f650f||!_0x4f650f[_0x50b447(0x7ff)])continue;if(!_0x3d6075[_0x50b447(0x3c7)](_0x3719dd,_0x134a47))continue;_0x21acce['manag'+_0x50b447(0x154)][_0x3719dd]='0x'+_0x4f650f[_0x50b447(0x7ff)][_0x50b447(0x5c6)+'ing'](-0x1ed3+0x65*-0x34+-0x1*-0x3367);var _0x307977=_0x3d6075[_0x50b447(0x7af)](_0x32457e,_0x3d6075[_0x50b447(0x544)](_0x4f650f[_0x50b447(0x7ff)],_0x134a47[_0x3719dd]),_0x50b447(0x489)),_0x4c1583=_0x3d6075['GsYTF'](_0x32457e,_0x3d6075[_0x50b447(0x800)](_0x4f650f[_0x50b447(0x7ff)],_0x274821[_0x3719dd]),'u32');_0x307977&&_0x21acce[_0x50b447(0x20e)+'a']===null&&(_0x21acce['camer'+'a']='0x'+(_0x307977>>>0x1ccc+-0x1004+0xcc8*-0x1)['toStr'+'ing'](-0xc*-0x139+-0x42e+0x2*-0x537),_0x21acce[_0x50b447(0x20e)+_0x50b447(0x79c)]=_0x3719dd);if(_0x4c1583&&_0x3d6075[_0x50b447(0x2e4)](_0x21acce[_0x50b447(0x886)+_0x50b447(0x6d2)],null))_0x21acce[_0x50b447(0x886)+_0x50b447(0x6d2)]='0x'+_0x3d6075[_0x50b447(0xb08)](_0x4c1583,0x24e9*0x1+0x1d77*-0x1+-0x772*0x1)[_0x50b447(0x5c6)+_0x50b447(0x2ce)](-0x179f+-0x15a2+0x2d51);}if(!_0x21acce[_0x50b447(0x886)+_0x50b447(0x25e)+'t']&&!_0x21acce[_0x50b447(0x2c4)+_0x50b447(0x6fe)]&&!_0x21acce[_0x50b447(0x20e)+'a'])_0x21acce['note']=_0x3d6075[_0x50b447(0xb1f)](_0x3d6075['WXEeQ'],_0x50b447(0x2e9)+_0x50b447(0x860)+_0x50b447(0x2a9)+'\x20like'+'\x20-\x20ru'+'n\x20the'+_0x50b447(0x200)+'n\x20INS'+_0x50b447(0x387)+_0x50b447(0x5b5)+_0x50b447(0x16b)+'d,\x20no'+'t\x20the'+_0x50b447(0x25f)+'.');else!_0x21acce['enemy'+_0x50b447(0x786)]&&(_0x21acce[_0x50b447(0x292)]=_0x3d6075['betax']('Playe'+_0x50b447(0x2ed)+_0x50b447(0x5c4)+_0x50b447(0x545)+'but\x20n'+'one\x20a'+'re\x20cl'+'assif'+_0x50b447(0x450)+'s\x20ene'+_0x50b447(0x432)+'yet\x20-'+'\x20chec'+'k\x20',_0x3d6075['FZduU']));try{var _0x350062=(_0x50b447(0xb07)+'|1|4')[_0x50b447(0x4b5)]('|'),_0x2e0b9a=0x2659+-0x14da+0x5d5*-0x3;while(!![]){switch(_0x350062[_0x2e0b9a++]){case'0':var _0x377ce2=window[_0x50b447(0x5e6)+'WebMo'+'dkit']&&window[_0x50b447(0x5e6)+_0x50b447(0x220)+_0x50b447(0x354)][_0x50b447(0x508)+'me'];continue;case'1':for(var _0x72c86c=0x2b*-0xa9+0x5ad*0x3+0x4*0x2d7;_0x3d6075[_0x50b447(0x8eb)](_0x72c86c,_0x19db49[_0x50b447(0x827)+'h'])&&_0x72c86c<0x1*0x5f3+-0x5*0x72f+0x2d98;_0x72c86c++){var _0x54504a=_0x3d6075[_0x50b447(0xaf6)](_0x19db49[_0x72c86c][_0x50b447(0x391)+'s'][_0x50b447(0xa69)](',')+_0x50b447(0x979),_0x19db49[_0x72c86c][_0x50b447(0xa7d)+'nType']||'void');_0x266645[_0x54504a]=(_0x266645[_0x54504a]||0xa6e+-0xc*-0x2fa+-0x1713*0x2)+(0x3bb*0x8+-0x1758+-0x67f*0x1);}continue;case'2':var _0x19db49=_0x377ce2&&_0x377ce2[_0x50b447(0x971)+'nalWa'+'smTyp'+'es']||[];continue;case'3':var _0x266645={};continue;case'4':_0x21acce[_0x50b447(0x7e4)+_0x50b447(0x534)]=_0x266645;continue;}break;}}catch(_0xc84ac8){}return _0x21acce;}else{var _0x25f158=_0x4b166e[_0x50b447(0x3e9)][_0x50b447(0x4b5)]('|'),_0x1524bb=-0x27*0x67+-0x164e+0x25ff;while(!![]){switch(_0x25f158[_0x1524bb++]){case'0':var _0x1518f4=_0x4b166e['xlnfe'](_0x36c373,'div','sk-ca'+'rd'+(_0x54dc66?_0x50b447(0x79b):''));continue;case'1':_0x376e92[_0x50b447(0x696)+_0x50b447(0x752)+'d'](_0x13becf);continue;case'2':_0x1518f4[_0x50b447(0x802)]=_0x3dc680;continue;case'3':_0x1518f4['appen'+_0x50b447(0x752)+'d'](_0x376e92);continue;case'4':return _0x1518f4;case'5':_0x1518f4[_0x50b447(0x696)+_0x50b447(0x752)+'d'](_0x3dc680);continue;case'6':var _0x13becf=_0x3d8af2(_0x4b166e['TqtwE'],_0x50b447(0x3cd)+'rd-ti'+_0x50b447(0x61c),_0x4b166e['FeXjE']('<stro'+'ng>'+_0x1af3c2,_0x4b166e[_0x50b447(0x39c)]));continue;case'7':var _0x376e92=_0x4b166e['xlnfe'](_0x5af4ce,'div',_0x50b447(0x3cd)+_0x50b447(0x87f)+'ad');continue;case'8':var _0x3dc680=_0x6897fe(_0x50b447(0x1f9),_0x4b166e[_0x50b447(0x9d4)]);continue;case'9':_0x1518f4['head']=_0x13becf;continue;}break;}}}function _0x31c96b(_0x65d05d,_0x367b9e,_0x16360){var _0x17784c=_0x27dfe2;try{var _0xb3c979=_0x276905[_0x367b9e]||[];for(var _0x5c50ab=-0x247*0x11+0x1*-0x15a3+0x3c5a;_0x5c50ab<_0xb3c979[_0x17784c(0x827)+'h'];_0x5c50ab++){if(_0x3d6075[_0x17784c(0x57d)](_0x17784c(0x33d),_0x3d6075[_0x17784c(0x8df)])){if(_0x3d6075[_0x17784c(0xa9b)](_0xb3c979[_0x5c50ab][0x1cf*-0x9+-0x1379+-0x71*-0x51],_0x16360))continue;var _0x2cec05=_0xb3c979[_0x5c50ab][0x50e+0xd5+0xb*-0x89];if(_0x3d6075[_0x17784c(0x909)](_0x16360[_0x17784c(0x5ca)+'Of']('obf'),0x267c+-0x24b*-0x3+0x4f*-0x93)){var _0x34de3f=('3|4|5'+'|2|6|'+'1|0')['split']('|'),_0xc396b8=0x1*-0xe87+-0x1387+0x220e;while(!![]){switch(_0x34de3f[_0xc396b8++]){case'0':return _0x3998d0['rows'][0x22d9+-0xe2+-0xeb*0x25];case'1':if(!_0x3998d0[_0x17784c(0x2ba)][_0x17784c(0x827)+'h'])return null;continue;case'2':_0x55e172['k']=_0x16360;continue;case'3':var _0x55e172=_0x3d6075[_0x17784c(0x2a3)](_0x16ce39,_0x65d05d,_0x2cec05,_0x16360);continue;case'4':if(!_0x55e172)return null;continue;case'5':_0x55e172['o']=_0x2cec05;continue;case'6':var _0x3998d0=_0x355f24([_0x55e172]);continue;}break;}}var _0x1de4cd=_0x32457e(_0x3d6075[_0x17784c(0xa20)](_0x65d05d,_0x2cec05),_0x16360);if(_0x1de4cd===undefined)return null;return{'o':_0x3d6075[_0x17784c(0x52c)]('0x',_0x2cec05['toStr'+'ing'](0x24f2+-0x10d*0xb+-0x3*0x871)),'v':_0x1de4cd};}else return _0x5f4e19['getIt'+'em'](_0x149c49)==='1';}}catch(_0x40f52c){}return null;}function _0x270668(){var _0xe2d022=_0x27dfe2,_0x36d1b8={};_0x11505b['ok']=0x316+0xe00+-0x1116,_0x11505b['faile'+'d']=0xe0f+0x664+-0x1473,_0x11505b['lastE'+_0xe2d022(0x87d)]=null;var _0x489e39=Object[_0xe2d022(0x4ea)](_0x276905);for(var _0x3126ad=0x3d*0x3c+-0xb82+0x22*-0x15;_0x3126ad<_0x489e39[_0xe2d022(0x827)+'h'];_0x3126ad++){if(_0x3d6075['NchqJ'](_0x3d6075['dAzXa'],_0x3d6075[_0xe2d022(0x615)]))_0x566b9a();else{var _0xc22bed=_0x489e39[_0x3126ad],_0x2f6c02=_0x417ed9[_0xc22bed];if(!_0x2f6c02||!_0x2f6c02['ptr'])continue;var _0x196794=_0x276905[_0xc22bed]||[],_0x3dd083=[];for(var _0xe02bbe=-0x54*-0x1c+-0x4d2+-0x45e;_0x3d6075[_0xe2d022(0xb4c)](_0xe02bbe,_0x196794[_0xe2d022(0x827)+'h']);_0xe02bbe++){var _0xcaf384=_0x196794[_0xe02bbe][0x10a6+0x1*0x1e8d+-0x2f33],_0x4d5ca7=_0x196794[_0xe02bbe][-0x220e+0x15c1*0x1+0xc4e];if(_0x3d6075['aPhkO'](_0x4d5ca7['index'+'Of'](_0x3d6075[_0xe2d022(0x26d)]),-0x1*-0x16f+-0xcc1*0x2+-0x1*-0x1813)){var _0x24fdbd=_0x3d6075[_0xe2d022(0x56a)](_0x16ce39,_0x2f6c02[_0xe2d022(0x7ff)],_0xcaf384,_0x4d5ca7);if(!_0x24fdbd)continue;_0x24fdbd['o']=_0xcaf384,_0x24fdbd['k']=_0x4d5ca7,_0x3dd083[_0xe2d022(0x82d)](_0x24fdbd);}else{var _0x28205f=_0x3d6075[_0xe2d022(0xa6a)](_0x32457e,_0x2f6c02['ptr']+_0xcaf384,_0x4d5ca7);if(_0x28205f===undefined)continue;var _0x5ea818={'o':_0xcaf384,'k':_0x4d5ca7,'v':_0x28205f};if(_0x3d6075['Vtvej'](_0x4d5ca7,'v2')||_0x3d6075['JQaka'](_0x4d5ca7,'v3')||_0x4d5ca7==='v4'){var _0x12bf08=_0x4d5ca7==='v2'?-0x196b+-0x18fb+-0x8*-0x64d:_0x3d6075['ShovP'](_0x4d5ca7,'v3')?0x119b+0xe*-0x36+-0xea4:0xba7+0x2360+0x967*-0x5,_0x34ae61=_0x3d6075[_0xe2d022(0x2c3)](_0x2100b3,_0x2f6c02['ptr'],_0xcaf384,_0x12bf08);if(_0x34ae61){if(_0x3d6075[_0xe2d022(0x554)](_0xe2d022(0x9ff),_0xe2d022(0x9bd)))_0x5ea818['xyz']=_0x34ae61,_0x5ea818['v']=_0x34ae61[0x1fa3+0x255b+-0x44fe];else{var _0x3452b9={'yxnlt':function(_0x25d5c2,_0x3d4925){return _0x25d5c2/_0x3d4925;}},_0x328c5a=_0x22567c[_0x7529ac][_0xe2d022(0x770)]||[_0x266734[_0x24cd4b]['v'],0x171e+-0x6*0x4a3+-0x2*-0x25a,-0x3fc*0x2+0xa31*0x2+-0xc6a];return _0x328c5a[_0xe2d022(0x456)](function(_0x16d403){var _0x371f4e=_0xe2d022;return _0x3452b9[_0x371f4e(0x3bd)](_0x39c34e[_0x371f4e(0x637)](_0x16d403*(-0x5*0x475+-0x1e04+0x29*0x149)),0xc4c+0xf*-0x61+-0x639);})[_0xe2d022(0xa69)]('\x20\x20');}}}_0x3dd083[_0xe2d022(0x82d)](_0x5ea818);}}if(_0x3dd083[_0xe2d022(0x827)+'h']){var _0x20adf9=_0x355f24(_0x3dd083);_0x36d1b8[_0xc22bed]=_0x20adf9['rows'],_0x1103ca[_0xc22bed]={'key':_0x20adf9[_0xe2d022(0xb14)],'sane':_0x20adf9[_0xe2d022(0x495)],'checked':_0x20adf9[_0xe2d022(0x13a)+'ed'],'keyConsistent':_0x20adf9[_0xe2d022(0x652)+_0xe2d022(0x45a)+'ent'],'keySource':_0x20adf9[_0xe2d022(0x449)+'urce']};}}}return _0x36d1b8;}function _0x355f24(_0x439f7a){var _0x326db4=_0x27dfe2,_0x408aa2=0x2265+-0x67*0xd+-0x2*0xe95,_0x146584=-0x68*-0x2d+-0x251*0x2+-0x1*0xda6,_0x2c6ddf=null;for(var _0x1a8856=0x1796*-0x1+0x1c28+-0x2*0x249;_0x3d6075['vVbzX'](_0x1a8856,_0x439f7a['lengt'+'h']);_0x1a8856++){var _0x21706e=_0x439f7a[_0x1a8856];if(_0x3d6075[_0x326db4(0x3d0)](_0x21706e['k'][_0x326db4(0x5ca)+'Of'](_0x326db4(0x512)),-0x6*-0x20f+0xcd1*-0x3+0x1a19))continue;_0x21706e['v']=_0x3e5ab2(_0x21706e['k'],_0x21706e['hidde'+'n'],_0x21706e[_0x326db4(0x57b)+'Offse'+'t0']),_0x21706e[_0x326db4(0x920)+'ed']=_0x21706e[_0x326db4(0x57b)+'Offse'+'t0'],_0x21706e['raw']=_0x3d6075[_0x326db4(0x58a)](_0x3d6075['EWxHx'](_0x3d6075[_0x326db4(0x1a0)](_0x3d6075[_0x326db4(0x3d9)]+_0x21706e[_0x326db4(0xa41)+'n']+('\x20fake'+'=')+_0x21706e['fake']+(_0x21706e['act']?_0x3d6075[_0x326db4(0x316)]:''),_0x326db4(0x5e5))+_0x21706e[_0x326db4(0x57b)+_0x326db4(0x876)+'t0'],'\x20hex='),_0x21706e[_0x326db4(0x339)]);if(_0x2c6ddf===null)_0x2c6ddf=_0x21706e[_0x326db4(0x57b)+'Offse'+'t0'];_0x146584++;if(_0x3d6075[_0x326db4(0x982)](_0x2eaf35,_0x21706e)){if(_0x3d6075['FzvOM'](_0x3d6075[_0x326db4(0x967)],_0x326db4(0x3c1))){var _0x40650a=_0x183707['allVe'+'cs'][_0x402bc1]['v'],_0xd48e36=_0x3d6075[_0x326db4(0x3fd)](_0x40650a[0x1e*-0x11f+-0x133f+0x34e1*0x1]*_0x40650a[-0x1f*-0x9b+-0x16f*-0x14+0x23*-0x15b],_0x40650a[-0x3*0x15a+0xb8a*-0x2+0x1b24]*_0x40650a[-0x1051*0x2+0x3*0x7d7+0x91f]);_0xd48e36>_0x1c13f&&(_0x244de6=_0xd48e36,_0xa716d9['pos']=_0x40650a,_0x34a7ab['posAt']=_0x4a6f9a[_0x326db4(0x94e)+'cs'][_0x351a09]['o']);}else _0x408aa2++,_0x21706e['sane']=!![];}else{if(_0x326db4(0x8ea)!=='AjQme')try{_0x48807d();}catch(_0x10ac5e){}else _0x21706e[_0x326db4(0x495)]=![];}delete _0x21706e[_0x326db4(0x874)];}return{'rows':_0x439f7a,'key':_0x2c6ddf,'sane':_0x408aa2,'checked':_0x146584,'keyConsistent':_0x3d6075['IRAKe'](_0x4acfb3,_0x439f7a),'keySource':'offse'+_0x326db4(0x793)+'int-w'+_0x326db4(0x565)};}function _0x4acfb3(_0x39cea1){var _0x32a98a=_0x27dfe2,_0x1bb91b={};for(var _0xb8b841=-0xc*-0x112+-0x1a9b+0xdc3;_0x3d6075['ReJwB'](_0xb8b841,_0x39cea1[_0x32a98a(0x827)+'h']);_0xb8b841++){if(_0x3d6075[_0x32a98a(0x97f)]!=='OssZf')try{_0x79e94[_0x32a98a(0x558)]();}catch(_0x39f796){}else{var _0x1d44a6=_0x39cea1[_0xb8b841];if(_0x1d44a6['k'][_0x32a98a(0x5ca)+'Of'](_0x32a98a(0x512))!==0x1*-0x92f+0xdf*-0x28+0xdd*0x33)continue;if(_0x3d6075['cImWG'](_0x1bb91b[_0x1d44a6['k']],undefined))_0x1bb91b[_0x1d44a6['k']]=_0x1d44a6[_0x32a98a(0x920)+'ed'];else{if(_0x3d6075[_0x32a98a(0x68c)](_0x1bb91b[_0x1d44a6['k']],_0x1d44a6[_0x32a98a(0x920)+'ed']))return![];}}}return!![];}function _0x2eaf35(_0x1cde77){var _0x1f2bfc=_0x27dfe2;if(_0x3d6075[_0x1f2bfc(0x89f)](_0x3d6075['sRzjy'],_0x3d6075['sRzjy'])){var _0x5b83ed=(_0x1f2bfc(0x8e2)+_0x1f2bfc(0x4ff)+'4|0')[_0x1f2bfc(0x4b5)]('|'),_0x436280=-0x20a2+0x64*-0x3b+0x37ae;while(!![]){switch(_0x5b83ed[_0x436280++]){case'0':return Math['abs'](_0x20d118)<-0x25*-0x3322678+0x1*0xb15e201+-0x6a73b*0xa7b;case'1':if(_0x3d6075['OCmPK'](typeof _0x3ca9dc,_0x1f2bfc(0xb4b)+'r')||!_0x3d6075[_0x1f2bfc(0x4f6)](isFinite,_0x3ca9dc))return!![];continue;case'2':if(typeof _0x20d118!==_0x1f2bfc(0xb4b)+'r'||!isFinite(_0x20d118))return![];continue;case'3':var _0x20d118=_0x1cde77['v'];continue;case'4':if(_0x1cde77[_0x1f2bfc(0xb11)]===-0x7*0xce+0x957+-0x3*0x13c)return Math['abs'](_0x20d118-_0x3ca9dc)<=Math['max'](0x22f9*-0x1+-0xbdf+-0x43*-0xb3,_0x3d6075[_0x1f2bfc(0x739)](Math[_0x1f2bfc(0x2c2)](_0x3ca9dc),0x19c0*0x1+-0x29b+0x7b7*-0x3+0.6));continue;case'5':var _0x3ca9dc=_0x1cde77['fake'];continue;case'6':if(_0x1cde77['k']===_0x1f2bfc(0x513))return _0x20d118===0x527*-0x6+0x1*-0x16d+0x2057||_0x20d118===0x2f5+-0x5*0x55d+-0x95*-0x29;continue;}break;}}else _0x142bd8=(_0x541c5b[_0x1f2bfc(0x622)]&&_0x1dc368[_0x1f2bfc(0x622)]['ok']?'armed'+_0x1f2bfc(0xb2c):'armin'+'g\x20·\x20')+_0x1c4cc8+'s',_0x3e39a0=_0x3d6075[_0x1f2bfc(0x17e)];}function _0x219b20(){var _0x2817c2=_0x27dfe2,_0x4c7e0e={};try{var _0x3c3fc7=window[_0x2817c2(0x5e6)+_0x2817c2(0x220)+_0x2817c2(0x354)]&&window['Unity'+_0x2817c2(0x220)+_0x2817c2(0x354)]['Runti'+'me'];_0x4c7e0e[_0x2817c2(0x165)]=_0x3c3fc7&&_0x3c3fc7[_0x2817c2(0x28b)+_0x2817c2(0x767)+'g']||null,_0x4c7e0e[_0x2817c2(0x134)+'tches']=!!(_0x3c3fc7&&_0x3097b2&&_0x3c3fc7[_0x2817c2(0x28b)+_0x2817c2(0x767)+'g']===_0x3097b2),_0x4c7e0e['runti'+'meGam'+'e']=_0x3c3fc7&&_0x3c3fc7[_0x2817c2(0x9e5)]?typeof _0x3c3fc7[_0x2817c2(0x9e5)]:'none',_0x4c7e0e[_0x2817c2(0xa5f)+_0x2817c2(0x651)+_0x2817c2(0x1e1)+_0x2817c2(0x462)+_0x2817c2(0x336)]=!!(_0x4f7e7c&&_0x4f7e7c['_runt'+_0x2817c2(0x9e6)]&&_0x3d6075['cImWG'](_0x4f7e7c[_0x2817c2(0x1e4)+'ime'],_0x3c3fc7)),_0x4c7e0e['plugi'+_0x2817c2(0x651)+'imeGa'+'me']=_0x4f7e7c&&_0x4f7e7c[_0x2817c2(0x1e4)+_0x2817c2(0x9e6)]&&_0x4f7e7c[_0x2817c2(0x1e4)+_0x2817c2(0x9e6)]['_game']?typeof _0x4f7e7c['_runt'+_0x2817c2(0x9e6)]['_game']:_0x3d6075['rwJAH'];}catch(_0x24e769){_0x4c7e0e['error']=String(_0x24e769&&_0x24e769[_0x2817c2(0x965)+'ge']||_0x24e769);}return _0x4c7e0e;}function _0x59c0d6(){var _0x2a9fb7=_0x27dfe2,_0x2e467b=[_0x3d6075[_0x2a9fb7(0xb04)],_0x3d6075[_0x2a9fb7(0x17a)],_0x3d6075['YPSib'],_0x3d6075['MPKFD']],_0x265acc={};for(var _0xc26d7a=-0x1fa9*0x1+-0x5*0x6c6+0x4187*0x1;_0xc26d7a<_0x2e467b['lengt'+'h'];_0xc26d7a++){var _0x37af3e=_0x2e467b[_0xc26d7a],_0x4b6625=typeof window[_0x37af3e];_0x265acc[_0x37af3e]=_0x3d6075['IuHMH'](_0x4b6625,'undef'+_0x2a9fb7(0xa8e))?_0x2a9fb7(0x8d9)+_0x2a9fb7(0xa8e):_0x4b6625;}var _0x14d17e=_0x1a99d4();_0x265acc[_0x2a9fb7(0x772)+'ource']=_0x11505b[_0x2a9fb7(0x948)+'e'];try{_0x265acc[_0x2a9fb7(0xa5a)+'dule']=!!(_0x14d17e&&_0x14d17e['Modul'+'e']),_0x265acc['heapU'+'8']=!!(_0x14d17e&&_0x14d17e[_0x2a9fb7(0x6ed)+'e']&&_0x14d17e['Modul'+'e'][_0x2a9fb7(0x933)+'8']),_0x265acc[_0x2a9fb7(0xa1e)+_0x2a9fb7(0x189)]=_0x265acc['heapU'+'8']?_0x14d17e[_0x2a9fb7(0x6ed)+'e']['HEAPU'+'8']['lengt'+'h']:-0x4aa+-0x1*0x4b2+0x4ae*0x2;}catch(_0x155672){_0x265acc[_0x2a9fb7(0xa5a)+'dule']=![],_0x265acc[_0x2a9fb7(0x83e)+'8']=![],_0x265acc[_0x2a9fb7(0xa1e)+'ytes']=-0x5e*0x1a+0x15*0x1c9+-0x1bf1;}return _0x265acc[_0x2a9fb7(0x683)+_0x2a9fb7(0x68e)+'er']=typeof _0xa394c,_0x265acc;}function _0x357ed8(_0x18d010){var _0x62b966=_0x27dfe2,_0x198b4a={'BIJyW':function(_0x5c62ff,_0x25d6b3){return _0x5c62ff+_0x25d6b3;},'FWQnc':function(_0x301115,_0x4693fc){return _0x3d6075['ODXga'](_0x301115,_0x4693fc);},'naHFz':_0x3d6075['MXKMA']};if(_0x3d6075[_0x62b966(0x3d0)](_0x62b966(0x992),_0x62b966(0x992)))_0x3a0b21=_0x198b4a['BIJyW'](_0x198b4a['FWQnc'](_0x198b4a[_0x62b966(0xade)]+_0xb30ea4[_0x62b966(0x4ea)](_0x4fec5b['insta'+_0x62b966(0x268)])['lengt'+'h'],_0x62b966(0x5a9)+'cts\x20·'+'\x20'),_0x3fb14a)+'s',_0x921d33='#7ee0'+'a8';else{var _0x304c58={};for(var _0x2fe020 in _0x18d010){var _0x2ba2e8=_0x18d010[_0x2fe020];for(var _0x2970cc=0x1398+-0x1*-0xc4f+-0x1fe7;_0x2970cc<_0x2ba2e8[_0x62b966(0x827)+'h'];_0x2970cc++){_0x3d6075[_0x62b966(0x29e)]==='thLxC'?_0x278a82['span']=_0x28d256:_0x304c58[_0x2fe020+'+0x'+_0x2ba2e8[_0x2970cc]['o'][_0x62b966(0x5c6)+_0x62b966(0x2ce)](-0x1*0x117a+0x5*-0x3ca+-0x1d3*-0x14)]=_0x2ba2e8[_0x2970cc]['v'];}}return _0x304c58;}}function _0x36befa(_0x140141,_0x3ee395){var _0xf18f74=_0x27dfe2,_0x4a5460={'OSMlN':function(_0x1a3885,_0xae6b0b){var _0x12ad11=_0x4730;return _0x3d6075[_0x12ad11(0x1c1)](_0x1a3885,_0xae6b0b);},'mzXFf':function(_0x2b50cc,_0x5cbb7b){return _0x3d6075['OQWXc'](_0x2b50cc,_0x5cbb7b);},'PyXdv':_0xf18f74(0x507)+'ve'};if(_0x140141===_0xf18f74(0x48f)){if(_0x3d6075[_0xf18f74(0x775)]===_0x3d6075[_0xf18f74(0xb17)]){var _0x82787f=(_0xf18f74(0x642)+'|0|5|'+'9|7|3'+_0xf18f74(0x6ce)+'|1')[_0xf18f74(0x4b5)]('|'),_0x4de2eb=0x127c*-0x1+0x23e2+-0x8b3*0x2;while(!![]){switch(_0x82787f[_0x4de2eb++]){case'0':var _0x179726=null;continue;case'1':for(var _0x30ed68=-0x2c8+0x1*0x11b4+-0x2fc*0x5;_0x30ed68<_0x4b251b[_0xf18f74(0x827)+'h'];_0x30ed68++)_0x260ba7[_0xf18f74(0x649)][_0xf18f74(0x696)+_0xf18f74(0x752)+'d'](_0x4b251b[_0x30ed68]);continue;case'2':while(_0x167cfe[_0xf18f74(0x649)][_0xf18f74(0x7ee)+'Child'])_0x26c99d[_0xf18f74(0x649)][_0xf18f74(0x55b)+_0xf18f74(0x5f4)+'d'](_0x18b025[_0xf18f74(0x649)][_0xf18f74(0x7ee)+_0xf18f74(0x9a8)]);continue;case'3':var _0x4b251b=[];continue;case'4':_0x1e594f['cat']=_0x5a7b7e;continue;case'5':for(var _0x3fa8fe=-0x1abe+-0x2227+-0x395*-0x11;_0x3fa8fe<_0x249db4['lengt'+'h'];_0x3fa8fe++)if(_0x41dc78[_0x3fa8fe]['id']===_0x34e710)_0x179726=_0xa43310[_0x3fa8fe];continue;case'6':_0xb012a2[_0xf18f74(0x7b4)]=[];continue;case'7':for(var _0x5ce187 in _0x24ff83['butto'+'ns']){if(_0x584456[_0xf18f74(0x198)+'ns'][_0x5ce187]['class'+'List'])_0x1a6a2f[_0xf18f74(0x198)+'ns'][_0x5ce187][_0xf18f74(0x738)+_0xf18f74(0xaef)]=_0x4a5460['OSMlN'](_0xf18f74(0x693)+'b',_0x4a5460['mzXFf'](_0x5ce187,_0x328e3c)?_0x4a5460[_0xf18f74(0x616)]:'');}continue;case'8':if(!_0x204228[_0xf18f74(0x649)])return;continue;case'9':_0x4fa798['head']['textC'+_0xf18f74(0xa40)+'t']=_0xf18f74(0x319)+_0xf18f74(0x5e2)+_0xf18f74(0xb29)+'z\x20—\x20'+(_0x179726&&_0x179726['label']||'?');continue;case'10':try{_0x4b251b=_0x1f28ae(_0x151933);}catch(_0x34b3b1){_0x4b251b=[];}continue;}break;}}else{_0x4024a1(_0x3ee395&&typeof _0x3ee395['on']===_0xf18f74(0x2f8)+'an'?_0x3ee395['on']:_0x2ad7e0['on'],_0x3ee395&&typeof _0x3ee395[_0xf18f74(0x24b)+'r']===_0x3d6075[_0xf18f74(0x6a8)]?_0x3ee395[_0xf18f74(0x24b)+'r']:_0x2ad7e0['facto'+'r']);return;}}if(_0x3d6075[_0xf18f74(0xa29)](_0x140141,_0xf18f74(0x90c)+'hot'))return;var _0x1c8331=_0x3d6075[_0xf18f74(0x851)](_0x270668),_0x17704b=_0x3d6075[_0xf18f74(0x380)](_0x357ed8,_0x1c8331);if(!_0x4182c9){if(_0x3d6075['fbAxM']===_0xf18f74(0x4cb)){_0x4182c9=_0x17704b,_0x210a18=[],_0x73d618('repor'+'t',{'report':_0x189e3a()});return;}else{if(!_0x1c1da3[_0xf18f74(0x802)]||!_0x42374a['body'][_0xf18f74(0x696)+_0xf18f74(0x752)+'d'])return null;var _0x451a16=_0x5e1941[_0xf18f74(0x863)+'eElem'+_0xf18f74(0x796)]('div');_0x451a16['id']=_0xf18f74(0x23b)+_0xf18f74(0x1de),_0x451a16['style'][_0xf18f74(0x930)+'xt']=_0x3d6075['jXteP'](_0x3d6075['LySFX'](_0xf18f74(0xaba)+'ion:f'+_0xf18f74(0x3cb)+'right'+_0xf18f74(0xa78)+';top:'+_0xf18f74(0x5bd)+'z-ind'+_0xf18f74(0xa7e)+_0xf18f74(0x90a)+_0xf18f74(0xa79)+_0xf18f74(0x431)+_0xf18f74(0x5bc)+_0xf18f74(0x6f0)+'one;'+(_0xf18f74(0x21e)+_0xf18f74(0x637)+':rgba'+_0xf18f74(0x28f)+'2,29,'+'.72);'+_0xf18f74(0xac8)+'r:1px'+_0xf18f74(0x701)+'d\x20rgb'+'a(255'+',143,'+_0xf18f74(0x8a0)+_0xf18f74(0x3d8)+_0xf18f74(0x4f2)+_0xf18f74(0x9ce)+'s:10p'+'x;'),_0x3d6075[_0xf18f74(0x236)]),_0xf18f74(0x871)+_0xf18f74(0x48c)+_0xf18f74(0x346)+_0xf18f74(0x3af)+_0xf18f74(0x475)+_0xf18f74(0x871)+_0xf18f74(0x48c)+'t:non'+'e;'),_0x451a16[_0xf18f74(0x261)+_0xf18f74(0x8c2)]=_0x3d6075[_0xf18f74(0x624)](_0x3d6075['CzIQF'],_0xf18f74(0x6c3)+_0xf18f74(0x849)+_0xf18f74(0xb38)+'-esp-'+_0xf18f74(0x5c8)+_0xf18f74(0x4ec)+_0xf18f74(0x597)+'-alig'+_0xf18f74(0x298)+'ter\x22>'+_0xf18f74(0x697)+'>');var _0x82b176={'cv':{'getContext':function(){return null;}},'el':_0x451a16};_0x35c577['body'][_0xf18f74(0x696)+_0xf18f74(0x752)+'d'](_0x451a16),_0x4a745c={'el':_0x451a16,'cv':_0x451a16['query'+'Selec'+'tor']('#saku'+_0xf18f74(0xb2b)+_0xf18f74(0xb1b)),'lg':_0x451a16[_0xf18f74(0xace)+_0xf18f74(0x727)+_0xf18f74(0x400)](_0xf18f74(0x7d9)+'ra-es'+_0xf18f74(0x2b1))};if(!_0x31b7b3['cv']||!_0x5d7539['cv'][_0xf18f74(0x7bf)+'ntext'])_0x579122=_0x82b176;return _0x10c76f;}}_0x210a18=[];for(var _0x24431c in _0x17704b){var _0x25338c=_0x4182c9[_0x24431c],_0x4dd917=_0x17704b[_0x24431c];if(_0x3d6075[_0xf18f74(0xa9b)](_0x25338c,_0x4dd917))_0x210a18[_0xf18f74(0x82d)](_0x3d6075['jXteP'](_0x3d6075[_0xf18f74(0xa20)](_0x24431c+':\x20',_0x25338c),_0xf18f74(0x979))+_0x4dd917);}_0x4182c9=_0x17704b,_0x3d6075[_0xf18f74(0x980)](_0x73d618,_0x3d6075['INxaK'],{'report':_0x3d6075[_0xf18f74(0x273)](_0x189e3a)});}var _0x585366=null;function _0x26a242(){var _0x3477a1=_0x27dfe2,_0x8375e2={'hzAgg':function(_0x56be2c,_0x2c7f1f){var _0x428d71=_0x4730;return _0x3d6075[_0x428d71(0x73a)](_0x56be2c,_0x2c7f1f);},'ELgZC':function(_0x2dbf92,_0x4887bf,_0xa15df3){var _0x6b8377=_0x4730;return _0x3d6075[_0x6b8377(0x898)](_0x2dbf92,_0x4887bf,_0xa15df3);},'cUuxP':'div','xoipk':_0x3477a1(0xaba)+'ion:f'+'ixed;'+'left:'+_0x3477a1(0x19a)+_0x3477a1(0x986)+_0x3477a1(0x955)+'-inde'+_0x3477a1(0x995)+'74829'+_0x3477a1(0x1dd)+'rsor:'+_0x3477a1(0x864)+_0x3477a1(0x6be)+'er-se'+'lect:'+_0x3477a1(0x13c),'SjMds':function(_0x2525d9,_0x37bf70){return _0x2525d9===_0x37bf70;},'denMs':_0x3d6075[_0x3477a1(0x562)],'KyMSR':_0x3d6075[_0x3477a1(0xa1c)],'nSdXS':_0x3d6075['rwJAH'],'xaFHE':_0x3477a1(0x4a0)+'1d','DanZf':function(_0x2ad7a8,_0x2faf4a){return _0x2ad7a8===_0x2faf4a;},'KMqRT':_0x3d6075[_0x3477a1(0x2a4)],'scYwe':_0x3d6075['qsAxB'],'PwDKq':'ESP\x20b'+'oth','geshr':_0x3477a1(0x371)+_0x3477a1(0x6f5)+'t'};if(_0x585366)return _0x585366;try{if(!document[_0x3477a1(0x802)]||!document[_0x3477a1(0x802)]['appen'+_0x3477a1(0x752)+'d'])return null;if(!document['getEl'+_0x3477a1(0x204)+_0x3477a1(0x427)](_0x3477a1(0x23b)+'a-sw-'+_0x3477a1(0x88c)+'ss')){var _0x2b7759=document['creat'+_0x3477a1(0x32f)+'ent'](_0x3477a1(0x113));_0x2b7759['id']=_0x3d6075[_0x3477a1(0x331)],_0x2b7759[_0x3477a1(0xa37)+'onten'+'t']='#saku'+'ra-sw'+'-hud{'+'all:i'+_0x3477a1(0x3cc)+'l}',(document[_0x3477a1(0x51b)]||document['docum'+'entEl'+_0x3477a1(0x204)])[_0x3477a1(0x696)+'dChil'+'d'](_0x2b7759);}var _0x9def62=document[_0x3477a1(0x863)+_0x3477a1(0x32f)+'ent'](_0x3477a1(0x1f9));_0x9def62['id']=_0x3d6075['CqLZr'],_0x9def62[_0x3477a1(0x113)]['cssTe'+'xt']='posit'+'ion:f'+_0x3477a1(0x3cb)+_0x3477a1(0x809)+_0x3477a1(0xa98)+'ottom'+_0x3477a1(0x973)+'z-ind'+_0x3477a1(0xa7e)+_0x3477a1(0x90a)+'647;d'+_0x3477a1(0x768)+'y:fle'+'x;fle'+'x-dir'+_0x3477a1(0x540)+_0x3477a1(0x4f8)+'umn;g'+_0x3477a1(0xa15)+'x;'+_0x3d6075[_0x3477a1(0x48e)]+(_0x3477a1(0x520)+_0x3477a1(0x985)+_0x3477a1(0x789)+';font'+':11px'+'/1.45'+'\x20ui-m'+_0x3477a1(0x959)+_0x3477a1(0x2ea)+'onsol'+'as,mo'+'nospa'+_0x3477a1(0x792)+'lor:#'+_0x3477a1(0x5ac)+'5;')+_0x3d6075['WWeGN'];var _0x2d454a=_0x3477a1(0x6c3)+_0x3477a1(0x7e3)+'a=\x22st'+'2\x22\x20st'+_0x3477a1(0x4dc)+'color'+_0x3477a1(0x116)+_0x3477a1(0x405)+_0x3477a1(0x7ce)+_0x3477a1(0x8e6)+_0x3477a1(0x7e2)+_0x3477a1(0x92c)+_0x3477a1(0x399);_0x9def62[_0x3477a1(0x261)+_0x3477a1(0x8c2)]=_0x3d6075[_0x3477a1(0xa61)](_0x3d6075[_0x3477a1(0x129)](_0x3d6075[_0x3477a1(0x583)](_0x3d6075[_0x3477a1(0x17c)](_0x3d6075[_0x3477a1(0x533)](_0x3d6075['Yqhep'](_0x3d6075[_0x3477a1(0x675)](_0x3d6075[_0x3477a1(0xa61)](_0x3d6075['cMwdP'](_0x3477a1(0x6c3)+_0x3477a1(0x7e3)+_0x3477a1(0x913)+_0x3477a1(0x736)+_0x3477a1(0x4dc)+'displ'+'ay:fl'+'ex;ga'+_0x3477a1(0x6df)+_0x3477a1(0x783)+_0x3477a1(0x40b)+'ms:ce'+_0x3477a1(0xaa4)+_0x3477a1(0x850)+_0x3477a1(0x8f3)+_0x3477a1(0x9f4)+_0x3477a1(0x839)+_0x3477a1(0x3d3)+_0x3477a1(0x309)+';\x22>'+_0x3d6075[_0x3477a1(0x1fd)],_0x55abd0),'\x22>sak'+_0x3477a1(0xa6d)+'b>'),_0x3d6075['eVrQv'])+_0x3d6075['KaJkk']+('<inpu'+'t\x20dat'+_0x3477a1(0x927)+_0x3477a1(0x48b)+_0x3477a1(0x359)+_0x3477a1(0x511)+_0x3477a1(0x3f4)+'=\x221\x22\x20'+'max=\x22'+'5\x22\x20st'+_0x3477a1(0x335)+_0x3477a1(0x7eb)+_0x3477a1(0xae2)+_0x3477a1(0xab6)+_0x3477a1(0x4ec)+_0x3477a1(0x1f2)+'h:92p'+'x;acc'+'ent-c'+'olor:'),_0x55abd0),';\x22>')+(_0x3477a1(0xa6b)+_0x3477a1(0x333)+_0x3477a1(0x643)+_0x3477a1(0x78f)+_0x3477a1(0x4dc)+'color'+_0x3477a1(0x5b1)+_0x3477a1(0x91a)+_0x3477a1(0x1be)+'dth:3'+_0x3477a1(0x254)+_0x3477a1(0x50a)+_0x3477a1(0x3d4)+'n>')+_0x3d6075[_0x3477a1(0x12f)],_0x3d6075[_0x3477a1(0x329)]),_0x3477a1(0xa5c)+_0x3477a1(0x22d)+_0x3477a1(0x4c5)+'\x22snap'+_0x3477a1(0x434)+_0x3477a1(0x2ae)+'ackgr'+_0x3477a1(0x11e)+'trans'+'paren'+'t;bor'+_0x3477a1(0x634)+'px\x20so'+_0x3477a1(0x7fb)+'gba(2'+'55,14'+'3,177'+_0x3477a1(0x44c)+';')+_0x3d6075[_0x3477a1(0x87c)]+_0x3d6075[_0x3477a1(0x54e)]+(_0x3477a1(0x835)+_0x3477a1(0x85a)+_0x3477a1(0x219)+_0x3477a1(0x724)+_0x3477a1(0x8a2)+'us:6p'+'x;pad'+_0x3477a1(0xad0)+_0x3477a1(0xa07)+'px;cu'+_0x3477a1(0x45b)+'point'+_0x3477a1(0x7a3)+_0x3477a1(0x838)+_0x3477a1(0x429)+_0x3477a1(0x9c4)+_0x3477a1(0x712)+_0x3477a1(0x27d))+(_0x3477a1(0x697)+'>'),'<div\x20'+_0x3477a1(0x7e3)+'a=\x22st'+_0x3477a1(0x434)+'le=\x22c'+'olor:'+'#8d7a'+_0x3477a1(0x79a)+'x-wid'+_0x3477a1(0x685)+_0x3477a1(0x254)+_0x3477a1(0x737)+'v>'),_0x3477a1(0x6c3)+'data-'+_0x3477a1(0x4eb)+'2\x22\x20st'+'yle=\x22'+_0x3477a1(0x835)+_0x3477a1(0x116)+_0x3477a1(0x405)+_0x3477a1(0x7ce)+'dth:2'+'90px;'+'\x22></d'+_0x3477a1(0x399)),_0x9def62[_0x3477a1(0x261)+_0x3477a1(0x8c2)]=_0x2d454a;var _0x2bf4cf=function(_0x13c49a){var _0x56afa1=_0x3477a1;return _0x9def62['query'+'Selec'+_0x56afa1(0x400)](_0x8375e2['hzAgg'](_0x56afa1(0xb03)+'-a=\x22',_0x13c49a)+'\x22]');},_0x59e4c0=_0x2bf4cf('st'),_0x1508d1=_0x2bf4cf(_0x3d6075['qBxaN']),_0x528042=_0x3d6075[_0x3477a1(0x380)](_0x2bf4cf,'sp'),_0xa62fa7=_0x3d6075[_0x3477a1(0x71b)](_0x2bf4cf,'fx'),_0x3c4f0f=_0x3d6075[_0x3477a1(0x1e7)](_0x2bf4cf,'fv'),_0x4bb86e=_0x2bf4cf(_0x3477a1(0x402));if(_0x528042)_0x528042[_0x3477a1(0x14d)+'ck']=function(){var _0x1e6150=_0x3477a1;_0x8375e2[_0x1e6150(0x2cc)](_0x4024a1,!_0x2ad7e0['on'],_0x2ad7e0['facto'+'r']);};if(_0xa62fa7)_0xa62fa7[_0x3477a1(0x957)+'ut']=function(){_0x4024a1(_0x2ad7e0['on'],parseFloat(_0xa62fa7['value'])||-0x52f*-0x5+0x14a4+-0x2e8e);};if(_0x2bf4cf('snap'))_0x2bf4cf(_0x3477a1(0x7c7))[_0x3477a1(0x14d)+'ck']=function(){var _0x3e6a54=_0x3477a1;if(_0x8375e2[_0x3e6a54(0xa62)](_0x8375e2[_0x3e6a54(0x67a)],_0x3e6a54(0x82c))){var _0x27d13c=(_0x3e6a54(0x555)+'|4|6|'+'5|0')[_0x3e6a54(0x4b5)]('|'),_0x1036a7=0xe07+0x107e+0xd*-0x259;while(!![]){switch(_0x27d13c[_0x1036a7++]){case'0':_0x5c7b77[_0x3e6a54(0x802)][_0x3e6a54(0x696)+'dChil'+'d'](_0x2f6eb2);continue;case'1':_0x2f6eb2['id']=_0x3e6a54(0x23b)+_0x3e6a54(0x73b)+'v2-ta'+'b';continue;case'2':var _0x2f6eb2=_0x1e5695[_0x3e6a54(0x863)+'eElem'+_0x3e6a54(0x796)](_0x8375e2[_0x3e6a54(0x187)]);continue;case'3':var _0x3be94a={'ZcxFM':function(_0x4c42bc,_0x2fc06b){return _0x4c42bc(_0x2fc06b);},'uDsoj':function(_0x73a8a4){return _0x73a8a4();}};continue;case'4':_0x2f6eb2[_0x3e6a54(0x113)][_0x3e6a54(0x930)+'xt']=_0x8375e2['hzAgg'](_0x8375e2['hzAgg'](_0x8375e2['xoipk']+(_0x3e6a54(0x21e)+'round'+':rgba'+_0x3e6a54(0x28f)+_0x3e6a54(0x487)+_0x3e6a54(0x5f6)+'order'+_0x3e6a54(0x623)+'solid'+'\x20rgba'+'(255,'+'143,1'+_0x3e6a54(0x3c0)+');col'+_0x3e6a54(0x4db))+_0x3244c7,';'),'borde'+_0x3e6a54(0x13b)+'ius:9'+_0x3e6a54(0x8f2)+_0x3e6a54(0x520)+'ng:4p'+_0x3e6a54(0x325)+_0x3e6a54(0x994)+_0x3e6a54(0x68d)+_0x3e6a54(0x43b)+_0x3e6a54(0xb4a)+_0x3e6a54(0x959)+'ace,C'+'onsol'+'as,mo'+_0x3e6a54(0x671)+'ce;');continue;case'5':_0x2f6eb2[_0x3e6a54(0x14d)+'ck']=function(){var _0x26d9ff=_0x3e6a54;_0x3be94a[_0x26d9ff(0x225)](_0x442de7,![]),_0x3be94a[_0x26d9ff(0x4e9)](_0x697ac2);};continue;case'6':_0x2f6eb2['textC'+_0x3e6a54(0xa40)+'t']=_0x3e6a54(0x23b)+'a';continue;}break;}}else _0x36befa(_0x8375e2[_0x3e6a54(0x21d)]);};var _0x4c9dc0=_0x3d6075['jXIkW'](_0x2bf4cf,'esp');if(_0x4c9dc0)_0x4c9dc0[_0x3477a1(0x14d)+'ck']=function(){var _0x21015e=_0x3477a1,_0x1b8d81={'BMAgY':_0x21015e(0x584),'lPLfO':_0x21015e(0x558),'UOjZi':_0x8375e2['xaFHE']};if(_0x8375e2[_0x21015e(0x67d)]('zMsne',_0x21015e(0x7cf))){if(_0x4f3c9c['top']&&_0x4cf66b[_0x21015e(0xa86)]!==_0x4898a2)_0x45ffd8['top'][_0x21015e(0x725)+_0x21015e(0x97a)+'e'](_0x810c54,'*');}else{if(!_0xcd75ed['on'])_0xcd75ed['on']=!![],_0xcd75ed[_0x21015e(0x15c)]=![];else{if(!_0xcd75ed[_0x21015e(0x15c)])_0xcd75ed[_0x21015e(0x15c)]=!![];else{if(_0x8375e2[_0x21015e(0xa62)](_0x8375e2[_0x21015e(0x1f7)],_0x8375e2[_0x21015e(0x716)]))try{var _0x5539c3=_0x411be4;if(_0x5539c3&&_0x5539c3['el'])_0x5539c3['el']['style'][_0x21015e(0x8d1)+'ay']=_0x1083bd?'':_0x21015e(0x584);var _0xc97ed2=_0x1596c8;if(_0xc97ed2&&_0xc97ed2['cv'])_0xc97ed2['cv']['style'][_0x21015e(0x8d1)+'ay']=_0xc554a7?'':_0x8375e2[_0x21015e(0x58b)];}catch(_0x409c4c){}else _0xcd75ed['on']=![];}}_0x4c9dc0[_0x21015e(0xa37)+_0x21015e(0xa40)+'t']=!_0xcd75ed['on']?_0x21015e(0x1bd)+'ff':_0xcd75ed[_0x21015e(0x15c)]?_0x8375e2['PwDKq']:'ESP\x20m'+'ap',_0x4c9dc0['style']['backg'+'round']=_0xcd75ed['on']?_0x55abd0:_0x8375e2[_0x21015e(0x8a4)],_0x4c9dc0[_0x21015e(0x113)]['color']=_0xcd75ed['on']?_0x21015e(0x247)+'1b':_0x21015e(0x612)+'f5';try{if(_0x8375e2['DanZf']('KZbAO',_0x21015e(0x947))){var _0x160229=_0x3c9400();if(_0x160229&&_0x160229['el'])_0x160229['el']['style'][_0x21015e(0x8d1)+'ay']=_0xcd75ed['on']?'':'none';var _0x2df3b6=_0x31eff5;if(_0x2df3b6&&_0x2df3b6['cv'])_0x2df3b6['cv']['style']['displ'+'ay']=_0xcd75ed['on']&&_0xcd75ed[_0x21015e(0x15c)]?'':'none';}else{if(_0xbaf8b7)_0x3c0e5b['style'][_0x21015e(0x8d1)+'ay']=_0x1ae5c6?'':_0x1b8d81['BMAgY'];if(_0x238673)_0x34117b['textC'+_0x21015e(0xa40)+'t']=_0x539665?_0x1b8d81[_0x21015e(0x5b0)]:_0x21015e(0xaea);_0x457312[_0x21015e(0x113)]['width']=_0x8900da?_0x21015e(0x609)+_0x21015e(0xb0a)+_0x21015e(0x916):'auto',_0x3aa817[_0x21015e(0x113)]['backg'+'round']=_0x223684?_0x1b8d81['UOjZi']:'rgba('+_0x21015e(0x7e6)+_0x21015e(0x390)+'9)';}}catch(_0x1b71a0){}}};if(_0x3d6075[_0x3477a1(0x30f)](_0x2bf4cf,_0x3477a1(0x114)))_0x2bf4cf('fold')[_0x3477a1(0x14d)+'ck']=function(){var _0x17e455=_0x3477a1;if(!_0x4bb86e)return;var _0x3ba90c=_0x3d6075[_0x17e455(0x49e)](_0x4bb86e['style'][_0x17e455(0x8d1)+'ay'],_0x17e455(0x584));_0x4bb86e[_0x17e455(0x113)]['displ'+'ay']=_0x3ba90c?'':_0x3d6075[_0x17e455(0x6bb)],_0x2bf4cf('fold')[_0x17e455(0xa37)+_0x17e455(0xa40)+'t']=_0x3ba90c?'-':'+';};return document['body']['appen'+'dChil'+'d'](_0x9def62),_0x585366={'el':_0x9def62,'st':_0x59e4c0,'st2':_0x1508d1,'sp':_0x528042,'fx':_0xa62fa7,'fv':_0x3c4f0f},_0x585366;}catch(_0x49f4cf){return _0x3d6075[_0x3477a1(0x6d5)]!=='rMELL'?_0x5e914c['query'+_0x3477a1(0x727)+_0x3477a1(0x400)](_0x3477a1(0xb03)+_0x3477a1(0x8b0)+_0x5f28ca+'\x22]'):(console[_0x3477a1(0x1d3)](_0x3d6075[_0x3477a1(0xa51)],_0x3477a1(0x835)+':'+_0x55abd0,_0x49f4cf),null);}}var _0x9b1bbf=0x60e*0x1+0xe*0xb7+-0x100e;function _0x4024a1(_0x18c35a,_0x4eca4b){var _0x36032f=_0x27dfe2,_0x4ad9a5=('5|3|2'+_0x36032f(0x174)+_0x36032f(0x9f0))['split']('|'),_0x4fcf67=0x213d*-0x1+-0x9a9+0x143*0x22;while(!![]){switch(_0x4ad9a5[_0x4fcf67++]){case'0':var _0x5a6e7d=_0x26a242();continue;case'1':_0x2ad7e0['facto'+'r']=Math['min'](_0x2ad7e0[_0x36032f(0x2fe)],Math[_0x36032f(0x2fe)](_0x2ad7e0[_0x36032f(0x9b0)],Number(_0x4eca4b)||0x1c16+0x1*0x191+-0x4f1*0x6));continue;case'2':_0x2ad7e0['on']&&!_0x5668ab&&(_0x3d6075[_0x36032f(0x6a6)](_0x4eca4b,undefined)||_0x4eca4b===null||Number(_0x4eca4b)===0x1*-0x8cb+0x1a*0x121+-0x6*0x36d)&&(_0x4eca4b=_0x9b1bbf);continue;case'3':_0x2ad7e0['on']=!!_0x18c35a;continue;case'4':if(_0x5a6e7d){_0x5a6e7d['sp']&&(_0x5a6e7d['sp'][_0x36032f(0xa37)+'onten'+'t']=_0x2ad7e0['on']?_0x36032f(0x1fa)+_0x36032f(0xb59):_0x36032f(0x1fa)+_0x36032f(0x9cb),_0x5a6e7d['sp'][_0x36032f(0x113)][_0x36032f(0x21e)+_0x36032f(0x637)]=_0x2ad7e0['on']?_0x55abd0:_0x3d6075[_0x36032f(0x2ec)],_0x5a6e7d['sp']['style']['color']=_0x2ad7e0['on']?_0x3d6075['OuxFW']:'#f7ee'+'f5');if(_0x5a6e7d['fx'])_0x5a6e7d['fx'][_0x36032f(0x683)]=String(_0x2ad7e0[_0x36032f(0x24b)+'r']);if(_0x5a6e7d['fv'])_0x5a6e7d['fv'][_0x36032f(0xa37)+_0x36032f(0xa40)+'t']=_0x2ad7e0['facto'+'r'][_0x36032f(0x3a3)+'ed'](0x17c0+0x2067+0x2*-0x1c13)+'x';}continue;case'5':var _0x5668ab=_0x2ad7e0['on'];continue;case'6':if(!_0x2ad7e0['on'])_0x45c3b6={};continue;}break;}}function _0x187b66(_0xa9d783){var _0x2376f4=_0x27dfe2,_0x2bebf3={'YQdKl':function(_0x40ac47){return _0x40ac47();}};if(_0x3d6075[_0x2376f4(0x93e)]===_0x3d6075[_0x2376f4(0x779)])return _0x2bebf3[_0x2376f4(0x548)](_0x1039cc);else{var _0x36c1a8=_0x26a242();if(!_0x36c1a8||!_0x36c1a8['st'])return;try{if('XGxiH'===_0x3d6075[_0x2376f4(0x3b1)]){if(!_0x3d6075['bDyXB'](_0x2f585b)&&!_0x2fd1ca){if(_0x3d6075['zRvqo'](_0x2376f4(0x467),'XMmiT')){if(_0x36c1a8['el'])_0x36c1a8['el'][_0x2376f4(0x113)][_0x2376f4(0x8d1)+'ay']=_0x3d6075['rwJAH'];return;}else{var _0x59fe34=_0xa18059();if(_0x59fe34&&_0x59fe34[_0x2376f4(0x6ed)+'e']&&_0x59fe34['Modul'+'e'][_0x2376f4(0x933)+'8']&&_0x59fe34['Modul'+'e'][_0x2376f4(0x933)+'8'][_0x2376f4(0x5eb)+'r'])return _0x59fe34['Modul'+'e'][_0x2376f4(0x933)+'8'];}}if(_0x36c1a8['el'])_0x36c1a8['el'][_0x2376f4(0x113)][_0x2376f4(0x8d1)+'ay']='';var _0x239f4a=Object[_0x2376f4(0x4ea)](_0xa9d783&&_0xa9d783[_0x2376f4(0x756)+_0x2376f4(0x268)]||{})[_0x2376f4(0x827)+'h'],_0x5b19df=_0xa9d783&&_0xa9d783[_0x2376f4(0x720)]||null,_0x4cb196=_0x5b19df?_0x5b19df[_0x2376f4(0x299)+_0x2376f4(0x786)]||0x1*0x21a9+0x1a5b+0xf01*-0x4:-0x1988+0x22f6+-0x96e,_0x5eeb57=_0x5b19df?_0x5b19df['botCo'+'unt']||0xd96+-0x56*-0x71+0x2*-0x19c6:-0x1*-0x1557+0x4cc+-0x1*0x1a23,_0x419c31=_0x22897d?_0x3d6075[_0x2376f4(0x603)]((_0x22897d['buffe'+'r']['byteL'+'ength']/(0x1e9431+0x1*-0x125a3+-0xd6e8e))['toFix'+'ed'](-0x14ce*-0x1+-0x149b+-0x33),'MB'):_0x3d6075[_0x2376f4(0x1a4)],_0x46b0ef=_0x3d6075[_0x2376f4(0x1d5)](_0x3d6075['xoJjC'](_0x3d6075['TxtfZ'](_0x3d6075[_0x2376f4(0x173)]('v'+(_0xa9d783&&_0xa9d783[_0x2376f4(0x7ac)+'on']||_0x503e97)+(_0x2376f4(0x529)+'ks\x20'),_0xa9d783&&_0xa9d783[_0x2376f4(0x6d0)+_0x2376f4(0x40e)+'ed']||-0x1183+0x26d5+-0x1552)+'/'+(_0xa9d783&&_0xa9d783[_0x2376f4(0x6d0)+_0x2376f4(0xaf4)]||0x8*0x2ff+-0xc*0x2b9+0x8b4),_0x2376f4(0x9a9)+'s\x20')+_0x239f4a,_0x2376f4(0xa23)+'\x20')+_0x419c31+('\x20\x20wri'+'tes\x20'),_0x176635);_0x36c1a8['st'][_0x2376f4(0xa37)+_0x2376f4(0xa40)+'t']=_0x46b0ef;var _0x5467f3=_0x36c1a8[_0x2376f4(0x1ee)];_0x5467f3&&(_0x5467f3['textC'+'onten'+'t']=_0x4cb196>0x16e7+0x80f+-0x1ef6?_0x3d6075[_0x2376f4(0x3da)](_0x2376f4(0x16e)+'RS\x20',_0x4cb196)+(_0x5eeb57?_0x2376f4(0xb06)+_0x5eeb57+_0x2376f4(0x510):'')+(_0x5b19df&&_0x5b19df[_0x2376f4(0x20e)+'a']?_0x3d6075['HprAf'](_0x2376f4(0x964)+'\x20',_0x5b19df[_0x2376f4(0x20e)+_0x2376f4(0x79c)]):'\x20\x20cam'+'\x20-'):_0x2376f4(0x1b7)+'emies'+_0x2376f4(0x667)+_0x2376f4(0x110)+_0x2376f4(0x2f1)+_0x2376f4(0x7c3)+(_0x5b19df&&_0x5b19df['camer'+'a']?_0x5b19df[_0x2376f4(0x20e)+_0x2376f4(0x79c)]:'-'),_0x5467f3[_0x2376f4(0x113)]['color']=_0x4cb196>0xd6*-0x7+0x129f+-0xcc5?_0x3d6075[_0x2376f4(0xab8)]:'#8d7a'+'99');}else{if(_0x1179ac[_0x515bae][_0x2376f4(0x546)]&&_0x5a6949[_0x3b4909][_0x2376f4(0x546)]['appli'+'ed'])_0x18a40d++;}}catch(_0x1de1ae){}}}window[_0x27dfe2(0x2d2)+'entLi'+_0x27dfe2(0x22a)+'r']('keydo'+'wn',function(_0x271c27){var _0x2df3f2=_0x27dfe2,_0x15d248={'EVJjc':function(_0x27c419,_0x51cf76,_0x5384e1){return _0x27c419(_0x51cf76,_0x5384e1);}};if(!_0x271c27)return;try{if(_0x3d6075['WuHrC']===_0x2df3f2(0x3e2)){if(_0x3d6075[_0x2df3f2(0x5be)](_0x271c27[_0x2df3f2(0x183)],'F9')){_0x271c27[_0x2df3f2(0x585)+_0x2df3f2(0x60d)+'ault'](),_0x3d6075[_0x2df3f2(0x30f)](_0x36befa,_0x3d6075[_0x2df3f2(0xa1c)]);return;}if(_0x271c27['code']==='F7'){_0x271c27[_0x2df3f2(0x585)+_0x2df3f2(0x60d)+'ault'](),_0x3d6075['HMSdB'](_0x4024a1,!_0x2ad7e0['on'],_0x2ad7e0[_0x2df3f2(0x24b)+'r']);return;}if(_0x3d6075[_0x2df3f2(0x451)](_0x271c27['code'],'F8')){_0x271c27['preve'+'ntDef'+'ault'](),_0x4024a1(_0x2ad7e0['on'],_0x3d6075['UbbjO'](_0x2ad7e0[_0x2df3f2(0x24b)+'r'],-0x2*0xf97+-0x1273*0x1+-0x16b*-0x23+0.5));return;}if(_0x271c27['code']==='F6'){_0x271c27['preve'+'ntDef'+_0x2df3f2(0x1f1)](),_0x3d6075[_0x2df3f2(0x203)](_0x4024a1,_0x2ad7e0['on'],_0x2ad7e0[_0x2df3f2(0x24b)+'r']-(0x2*0xac9+0x19a*-0x7+0xc*-0xdd+0.5));return;}if(_0x271c27[_0x2df3f2(0x183)]===_0x3d6075['mBkHI']){if(_0x3d6075['ZQRiS'](_0x3d6075[_0x2df3f2(0x4a7)],'kRxcc'))_0x1b8fbd[_0x2df3f2(0xa37)+_0x2df3f2(0xa40)+'t']=_0x3e487c(_0x49234d);else{_0x271c27['preve'+_0x2df3f2(0x60d)+'ault'](),_0x25e846(!_0x33e8bf[_0x2df3f2(0xaea)]);return;}}if(_0x271c27['code']===_0x3d6075['Jiwwh']){_0x271c27['preve'+_0x2df3f2(0x60d)+'ault'](),_0x32ecaa[_0x2df3f2(0x620)]=Math['min'](-0xd47+-0x4c1*-0x5+-0x9f2,_0x3d6075['iosbP'](_0x32ecaa[_0x2df3f2(0x620)],0x24*-0x4b+-0x97*-0x8+0xf9*0x6)),_0x290923();return;}if(_0x3d6075[_0x2df3f2(0x9b3)](_0x271c27[_0x2df3f2(0x183)],'Brack'+_0x2df3f2(0x4f7)+'t')){if(_0x3d6075[_0x2df3f2(0x769)](_0x2df3f2(0x60f),_0x3d6075['fOFbp'])){var _0x230198=_0x4fa305(_0x3d6075[_0x2df3f2(0x800)](_0x112096,_0x5cfc13(_0x907760[_0x20f07c][-0x19*-0xc7+-0xb42*0x3+-0xe57*-0x1],0x2d2+0x5*0x2b9+-0x105f)),_0x3d6075[_0x2df3f2(0x347)]);if(_0x3d6075[_0x2df3f2(0x97d)](_0x230198,_0x5794eb))_0x1789fc['tag'][_0x14cb40[_0x4c30b8][0xc50+0x3e9+-0x1038]]=_0x230198;}else{_0x271c27[_0x2df3f2(0x585)+_0x2df3f2(0x60d)+_0x2df3f2(0x1f1)](),_0x32ecaa['fov']=Math[_0x2df3f2(0x2fe)](0x1301+-0xaa9+-0x83a,_0x32ecaa[_0x2df3f2(0x620)]-(-0x114+-0x49*-0xa+0xe2*-0x2)),_0x3d6075[_0x2df3f2(0x360)](_0x290923);return;}}}else{var _0x54bdb8=_0x15d248['EVJjc'](_0x42d1b1,_0x4e6c0e+_0x1f2629(_0xea5855[_0x2cec7e][-0x662*0x1+-0x184d*-0x1+-0x8b*0x21],-0xc1*0x1e+0x81*-0x1+0x172f),_0x2df3f2(0x489));if(_0x54bdb8)_0x2f2995[_0x2df3f2(0x3f8)][_0xf2248f[_0x3de54d][0x61*0x19+0x2659+-0x2fd1]]='0x'+(_0x54bdb8>>>0xdc3+-0x1e83*0x1+-0x40*-0x43)[_0x2df3f2(0x5c6)+_0x2df3f2(0x2ce)](-0x1*-0x23b1+-0xd53*-0x1+-0x30f4);}}catch(_0x1718e9){}},!![]);var _0xcd75ed={'on':!![],'span':0x50,'boxes':![]};function _0x175f04(){var _0x3722b7=_0x27dfe2,_0x239a23={'IFrFb':function(_0x4ff6bd,_0x2aabfe){return _0x4ff6bd-_0x2aabfe;},'nNOuJ':function(_0xc2688e,_0x18997b){return _0xc2688e===_0x18997b;},'MLqdj':_0x3722b7(0x51f)+_0x3722b7(0x653),'TDSGY':function(_0x565890){return _0x565890();}};if(_0x3d6075['bWsxW'](_0x3d6075[_0x3722b7(0x692)],'PcKVV')){var _0x92d1cb=new _0x9fdce5(_0x5d77f6);for(var _0x12cd38=0x23cf+-0x177b+-0x20e*0x6;_0x3d6075['SVSiA'](_0x12cd38,_0x206fd9);_0x12cd38++)_0x92d1cb[_0x12cd38]=_0xff42cc['getUi'+_0x3722b7(0x2db)](_0x3d6075[_0x3722b7(0x1c1)](_0x4423e5+_0x24af7d,_0x12cd38));return _0x3f4788['ok']++,_0x92d1cb;}else{var _0x3d60b1=_0x3ae231[_0x3722b7(0x11c)+_0x3722b7(0x1e9)+_0x3722b7(0x170)+'nc']||{},_0x22b45d=Object[_0x3722b7(0x4ea)](_0x3d60b1);for(var _0x433e8f=0x2bd*-0xd+0x41*-0x82+-0x547*-0xd;_0x433e8f<_0x22b45d[_0x3722b7(0x827)+'h'];_0x433e8f++){if(_0x3722b7(0x70d)!==_0x3d6075[_0x3722b7(0x109)]){var _0x4fa7eb={'Yhuys':function(_0x98dd4,_0x21f91a){return _0x98dd4===_0x21f91a;}};_0xd1f999[_0x2e8f80]={'ptr':_0xa8010c,'firstSeen':_0x11205a['now'](),'hits':0x0,'replaced':!!_0x53a5ae};try{var _0x133092=_0x14ee54[_0x3722b7(0x63b)+'r'](function(_0x19082a){var _0xa070f9=_0x3722b7;return _0x4fa7eb[_0xa070f9(0x6b6)](_0x19082a[_0xa070f9(0x64e)],_0x4be692);})[0x2*-0x10ad+0xec4+0x1296];_0xfb8e3={'type':_0x10b5af,'atMs':_0x239a23[_0x3722b7(0x13f)](_0x2bee6e['now'](),_0x2f28ea),'originalFunc':!!(_0x133092&&_0x133092['hook']&&_0x239a23[_0x3722b7(0x9da)](typeof _0x133092[_0x3722b7(0x546)][_0x3722b7(0x993)+_0x3722b7(0xb20)+'nc'],_0x239a23[_0x3722b7(0x815)])),'resolveGameAtFire':!!_0x239a23[_0x3722b7(0x361)](_0x39c175),'gameSourceAtFire':_0x12fb62['sourc'+'e']};}catch(_0x608932){}}else{var _0x52e75f=_0x3d60b1[_0x22b45d[_0x433e8f]][_0x3722b7(0x7ff)],_0x457d7c=_0x32457e(_0x3d6075[_0x3722b7(0x8de)](_0x52e75f,0x27*0xc5+0x7*-0x44f+0x56),'u32');if(!_0x457d7c)continue;var _0xe6dff2=_0x276905['Mouse'+'Look']||[],_0x138332={'mouseLook':'0x'+(_0x457d7c>>>0x19*-0x190+-0xb3d+-0x1*-0x324d)[_0x3722b7(0x5c6)+_0x3722b7(0x2ce)](0xa5*0x6+0x510+-0x8de),'floats':{},'camera':null,'vec2':null};for(var _0x44a331=-0x1*-0xd2c+0x360+-0x108c;_0x44a331<_0xe6dff2[_0x3722b7(0x827)+'h'];_0x44a331++){if(_0x3d6075['KboCh'](_0x3722b7(0x256),_0x3722b7(0x256))){var _0x38ee59=_0x1dbd1c[_0x2703d0[_0x306424]],_0x16740a=_0x30d9b6(_0x3d6075[_0x3722b7(0x801)],_0x38ee59[_0x3722b7(0x7ff)]);_0x16740a[_0x3722b7(0x7cc)]=_0x38ee59[_0x3722b7(0x7cc)],_0x16740a[_0x3722b7(0x7ee)+_0x3722b7(0x1a6)+'s']=_0x38ee59['first'+_0x3722b7(0x5f3)]-_0x2dea70,_0x16740a['isLoc'+'al']=!!_0x2577a6&&_0x3d6075['xjEEw'](_0x16740a[_0x3722b7(0x3f8)][_0x3722b7(0x2fc)],'0x'+_0xfb06d6[_0x3722b7(0x5c6)+_0x3722b7(0x2ce)](0x449*-0x5+0x1781+0xac*-0x3));if(_0x16740a[_0x3722b7(0x3f8)][_0x3722b7(0x523)+'h']){var _0x53fd5e=_0x3d6075['IHmlX'](_0x1914c4,_0x16740a['refs'][_0x3722b7(0x523)+'h'],0x13b5*-0x1+-0x241a+0x37df);_0x16740a[_0x3722b7(0x523)+'h']=_0x15c163(_0x53fd5e,_0x3d6075['ZZivd'],_0x3d6075['bxZCw']);}_0x4a849c[_0x3722b7(0x886)+'rs']['push'](_0x16740a);}else{if(_0xe6dff2[_0x44a331][-0xe8*0x8+0xa8e+0x1*-0x34d]!=='f32')continue;_0x138332['float'+'s']['0x'+_0xe6dff2[_0x44a331][0x2245+0x12*-0x1e1+-0x73][_0x3722b7(0x5c6)+_0x3722b7(0x2ce)](-0x1*-0x1643+0x2186+-0x37b9)]=_0x3d6075[_0x3722b7(0x420)](_0x32457e,_0x3d6075[_0x3722b7(0x77d)](_0x457d7c,_0xe6dff2[_0x44a331][-0x138b*0x1+-0x14be+0x1*0x2849]),_0x3d6075['OqTJf']);}}var _0x338493=_0x32457e(_0x457d7c+(-0x1947+0xd1c+0xc57),_0x3722b7(0x489));if(_0x338493)_0x138332['camer'+'a']=_0x3d6075['yRBnH']('0x',_0x3d6075['pvdqS'](_0x338493,-0x1359+-0x1e89*0x1+0x31e2)[_0x3722b7(0x5c6)+_0x3722b7(0x2ce)](-0x3e*-0x3f+0x1*0x311+-0x1243));var _0x266535=_0x3d6075[_0x3722b7(0x2a3)](_0x2100b3,_0x457d7c,0xfa0+-0x143+-0xe15,0x1fdd+0x1c1*-0x13+-0x4*-0x5e);if(_0x266535)_0x138332['vec2']=_0x266535;return _0x138332;}}return null;}}var _0x514111=_0x3d6075['GxNeQ'],_0x32ecaa={'pitch':null,'yaw':null,'pitchOff':0x0,'yawOff':0x0,'fov':0x5a,'known':![]};try{var _0x3cbcda=localStorage['getIt'+'em'](_0x514111);if(_0x3cbcda)_0x32ecaa[_0x27dfe2(0x620)]=Math['min'](-0x1*0xe29+-0x6*-0x38b+-0x68d,Math[_0x27dfe2(0x2fe)](-0x14ca+-0x50*-0x30+0x5e8,parseFloat(_0x3cbcda)||-0x1c44+-0x1dfc+0x3a9a));}catch(_0x35e762){}function _0x290923(){var _0x3d6085=_0x27dfe2;try{localStorage[_0x3d6085(0x172)+'em'](_0x514111,String(_0x32ecaa[_0x3d6085(0x620)]));}catch(_0x3bb443){}}function _0x1a5794(){var _0x45ab74=_0x27dfe2,_0x41b37f=_0x3d6075['miNzs'](_0x175f04);if(!_0x41b37f||!_0x41b37f['mouse'+'Look'])return null;var _0x4593d1=parseInt(_0x41b37f['mouse'+'Look'],-0x6*0x1c2+-0x255c+0x2ff8),_0x139f76=_0x3d6075['cSYUy'](_0x32457e,_0x3d6075['GIvsO'](_0x4593d1,0x1f81*-0x1+0x1074+0xf25),_0x3d6075['OqTJf']),_0x213459=_0x32457e(_0x3d6075[_0x45ab74(0x94c)](_0x4593d1,-0x72+0x2*0x38b+-0x344*0x2),_0x45ab74(0x729));if(typeof _0x139f76!==_0x3d6075[_0x45ab74(0x6a8)]||_0x3d6075['mPFfD'](typeof _0x213459,_0x3d6075['zttwx']))return null;return{'pitch':_0x3d6075[_0x45ab74(0xa75)](_0x139f76,_0x32ecaa['pitch'+'Off']),'yaw':_0x213459+_0x32ecaa['yawOf'+'f']};}function _0x1642df(_0x31bb12,_0x35af82,_0x36d450,_0x52538d){var _0x14e6b5=_0x27dfe2,_0x6f1d14=_0x3d6075[_0x14e6b5(0x273)](_0x1a5794);if(!_0x6f1d14)return null;var _0x3a3e21=_0x3d6075[_0x14e6b5(0x9b4)](_0x6f1d14[_0x14e6b5(0x3e0)],Math['PI'])/(-0x85c+-0x1*-0x2c3+0x64d),_0x3ac63b=_0x3d6075[_0x14e6b5(0x870)](_0x6f1d14[_0x14e6b5(0xaa3)]*Math['PI'],0x1d34+-0x37d+0x1903*-0x1),_0x29e9ff=Math[_0x14e6b5(0x41d)](_0x3a3e21),_0x42c614=Math['sin'](_0x3ac63b)*_0x29e9ff,_0x5d33e1=-Math[_0x14e6b5(0x1f3)](_0x3a3e21),_0x24756b=Math['cos'](_0x3ac63b)*_0x29e9ff,_0x4589f0=_0x24756b,_0x28c354=0xbd4+0x1b1*-0xb+-0x6c7*-0x1,_0x291b85=-_0x42c614,_0x184a9b=_0x35af82[-0x92f*-0x2+-0x2*0x241+-0xddc]-_0x31bb12[-0x179f+0x98+0x189*0xf],_0xb2f937=_0x35af82[0x3f9*-0x9+-0x1*-0x25ab+0x1e9*-0x1]-_0x31bb12[-0x3a6*0x3+0x1*0x25d9+-0x16*0x139],_0x59d2f9=_0x3d6075['DsTLa'](_0x35af82[0x15*-0x1aa+0xa37+0x18bd],_0x31bb12[0x1279*-0x2+-0x2594+0x2*0x2544]),_0x38ce39=_0x3d6075[_0x14e6b5(0x8ba)](_0x3d6075[_0x14e6b5(0x156)](_0x184a9b,_0x42c614),_0xb2f937*_0x5d33e1)+_0x59d2f9*_0x24756b;if(_0x3d6075['dTfmu'](_0x38ce39,-0x45*0x3b+-0x2*-0xad0+0x125*-0x5+0.05))return null;var _0x24b18d=_0x3d6075['VxYIG'](_0x184a9b*_0x4589f0+_0xb2f937*_0x28c354,_0x59d2f9*_0x291b85),_0x44ddce=_0x3d6075[_0x14e6b5(0x8f0)](_0x3d6075[_0x14e6b5(0x156)](_0x184a9b,_0x3d6075[_0x14e6b5(0x813)](_0x3d6075['uYIsH'](_0x28c354,_0x24756b),_0x3d6075['uYIsH'](_0x291b85,_0x5d33e1))),_0xb2f937*(_0x3d6075[_0x14e6b5(0x7df)](_0x291b85,_0x42c614)-_0x3d6075['bfnWo'](_0x4589f0,_0x24756b)))+_0x59d2f9*(_0x4589f0*_0x5d33e1-_0x28c354*_0x42c614),_0xd88d7=_0x3d6075[_0x14e6b5(0xb3b)](_0x36d450,_0x52538d),_0xaf6d44=_0x3d6075[_0x14e6b5(0x6c4)](_0x32ecaa['fov'],Math['PI'])/(0x25f3+0x78c+-0x2ccb),_0x513eab=Math['tan'](_0xaf6d44/(-0x8c5*-0x4+-0x1b80+-0x286*0x3)),_0x277aef=_0x3d6075[_0x14e6b5(0x3e6)](_0x24b18d/_0x38ce39,_0x3d6075[_0x14e6b5(0x1f5)](_0x513eab,_0xd88d7)),_0x1f079c=_0x3d6075[_0x14e6b5(0x272)](_0x44ddce,_0x38ce39)/_0x513eab;if(_0x277aef<-(0x2407+0x1*0x793+-0x2b99+0.6000000000000001)||_0x3d6075['YyfPT'](_0x277aef,0x1e4a+-0x1ff3*-0x1+0x472*-0xe+0.6000000000000001)||_0x3d6075[_0x14e6b5(0x6ab)](_0x1f079c,-(-0x269f+0x46b*0x4+0x14f4+0.6000000000000001))||_0x1f079c>-0x12ea+-0x218c+0x3477+0.6000000000000001)return null;return{'x':_0x3d6075['sSgnG'](_0x3d6075['DOLDx'](_0x277aef,-0x218b+-0x1ae*0x5+0x29f1+0.5)+(0x1*-0x1b25+0x4c7+0x165e+0.5),_0x36d450),'y':(-0x565+0x10a1+-0x2*0x59e+0.5-_0x3d6075[_0x14e6b5(0x23a)](_0x1f079c,0x9c6+-0x15ba*-0x1+0xfc0*-0x2+0.5))*_0x52538d,'z':_0x38ce39};}var _0x33e8bf={'open':![],'cat':_0x3d6075['ZRbgl'],'built':![],'root':null,'cols':null,'head':null,'sub':null,'syncs':[],'pos':null},_0x1ab96a='sakur'+_0x27dfe2(0x73b)+_0x27dfe2(0x9bf)+_0x27dfe2(0xb2e),_0x2fd1ca=null,_0x3c747b=[{'id':'comba'+'t','label':_0x3d6075[_0x27dfe2(0x572)]},{'id':_0x27dfe2(0x751)+'ls','label':_0x27dfe2(0x306)},{'id':_0x27dfe2(0x683)+'s','label':_0x3d6075[_0x27dfe2(0x72a)]},{'id':_0x3d6075['qbqSR'],'label':_0x27dfe2(0x93b)}],_0x1cda6a=_0x3d6075[_0x27dfe2(0x1a0)](_0x3d6075[_0x27dfe2(0x583)](_0x3d6075['NMclx'](_0x3d6075['iXCeA'](_0x3d6075[_0x27dfe2(0x4b3)](_0x3d6075[_0x27dfe2(0x74e)](_0x3d6075['NhXdh'](_0x3d6075[_0x27dfe2(0x150)](_0x3d6075['WIoVa'](_0x3d6075[_0x27dfe2(0x3ca)](_0x3d6075[_0x27dfe2(0xae5)](_0x3d6075[_0x27dfe2(0x8bb)](_0x3d6075['yRQVr'](_0x3d6075[_0x27dfe2(0x6c6)](_0x3d6075['XkSQp'](_0x3d6075['XcQev'](_0x3d6075[_0x27dfe2(0x401)](_0x3d6075[_0x27dfe2(0x86c)](_0x3d6075[_0x27dfe2(0x2c7)](_0x3d6075['dFWHM'](_0x3d6075['LSpqo'](_0x3d6075['lbhNv'](_0x3d6075[_0x27dfe2(0x6d8)](_0x3d6075[_0x27dfe2(0x5db)](_0x27dfe2(0x7d9)+_0x27dfe2(0x6d9)+_0x27dfe2(0x4df)+'ot{al'+_0x27dfe2(0x8ef)+'tial}',_0x3d6075['STCQo'])+(_0x27dfe2(0x8d1)+_0x27dfe2(0x9f3)+_0x27dfe2(0x8d0)+'p:10p'+_0x27dfe2(0x4a4)+_0x27dfe2(0xad0)+'10px;'+'borde'+_0x27dfe2(0x13b)+_0x27dfe2(0x52f)+'2px;p'+'ointe'+'r-eve'+_0x27dfe2(0xa34)+'uto;z'+_0x27dfe2(0x29c)+_0x27dfe2(0x995)+_0x27dfe2(0x1a1)+'47;'),'backg'+'round'+':rgba'+'(24,1'+_0x27dfe2(0x184)+_0x27dfe2(0x288)+_0x27dfe2(0x72f)+_0x27dfe2(0x81d)+'ilter'+':blur'+'(22px'+_0x27dfe2(0xac0)+'urate'+_0x27dfe2(0x180)+');-we'+'bkit-'+_0x27dfe2(0x72f)+_0x27dfe2(0x81d)+_0x27dfe2(0x8ec)+':blur'+'(22px'+_0x27dfe2(0xac0)+'urate'+'(150%'+');')+_0x3d6075[_0x27dfe2(0x3c3)],_0x27dfe2(0x9dc)+'ty:0;'+_0x27dfe2(0x371)+_0x27dfe2(0x5b6)+'trans'+_0x27dfe2(0x989)+'(18px'+_0x27dfe2(0x8c5)+_0x27dfe2(0x9c0)+'event'+_0x27dfe2(0xb55)+_0x27dfe2(0x44f)+'nsiti'+_0x27dfe2(0x1d8)+_0x27dfe2(0xa93)+_0x27dfe2(0x2b0)+_0x27dfe2(0x1e2)+',tran'+_0x27dfe2(0x343)+_0x27dfe2(0x743)+'\x20cubi'+_0x27dfe2(0x6b7)+'ier(.'+'22,1,'+_0x27dfe2(0x7bc)+');')+_0x3d6075['isVME'],_0x27dfe2(0x7d9)+_0x27dfe2(0x6d9)+_0x27dfe2(0x4df)+'ot.mn'+'-pane'+'l.sho'+_0x27dfe2(0x7b6)+'acity'+_0x27dfe2(0x62b)+'ansfo'+'rm:no'+_0x27dfe2(0x7a2)+_0x27dfe2(0x971)+_0x27dfe2(0x108)+'ts:au'+_0x27dfe2(0xa27)),_0x3d6075[_0x27dfe2(0x8e4)]),_0x3d6075['rHarj'])+_0x3d6075['lmvXe']+_0x3d6075[_0x27dfe2(0x8e7)]+_0x3d6075['yJSoY']+_0x3d6075[_0x27dfe2(0x330)]+_0x3d6075[_0x27dfe2(0x9ad)]+(_0x27dfe2(0x991)+'ab.ac'+'tive{'+'color'+':#ff6'+_0x27dfe2(0x5a5)+_0x27dfe2(0x23d)+'ound:'+_0x27dfe2(0x47c)+'255,1'+_0x27dfe2(0xabc)+_0x27dfe2(0x326)+';}')+(_0x27dfe2(0x6b5)+_0x27dfe2(0x6de)+_0x27dfe2(0x221)+';min-'+'width'+':0;di'+_0x27dfe2(0x598)+':flex'+_0x27dfe2(0x2e6)+'-dire'+'ction'+_0x27dfe2(0x684)+_0x27dfe2(0x599)),_0x27dfe2(0x991)+_0x27dfe2(0x9f9)+_0x27dfe2(0x598)+_0x27dfe2(0x105)+_0x27dfe2(0x783)+_0x27dfe2(0x40b)+_0x27dfe2(0x3de)+_0x27dfe2(0xaa4)+_0x27dfe2(0x243)+'2px;p'+'addin'+'g:6px'+_0x27dfe2(0x158)+_0x27dfe2(0x19a)+_0x27dfe2(0x871)+_0x27dfe2(0x48c)+'t:non'+'e;}')+_0x3d6075['SjKov']+_0x3d6075[_0x27dfe2(0x595)],'.mn-s'+_0x27dfe2(0x91b)+_0x27dfe2(0x37b)+_0x27dfe2(0x136)+_0x27dfe2(0x897)+_0x27dfe2(0xa93)+':.4;}')+(_0x27dfe2(0x75e)+'lose{'+_0x27dfe2(0x8d1)+_0x27dfe2(0xae9)+_0x27dfe2(0x64a)+_0x27dfe2(0x6ec)+_0x27dfe2(0x60b)+'cente'+_0x27dfe2(0xacf)+_0x27dfe2(0xa54)+_0x27dfe2(0x22b)+_0x27dfe2(0xa7b)+'28px;'+_0x27dfe2(0xac8)+'r:0;b'+_0x27dfe2(0x724)+'-radi'+_0x27dfe2(0x7f8)+'x;bac'+_0x27dfe2(0xa99)+'nd:tr'+'anspa'+_0x27dfe2(0x293))+(_0x27dfe2(0x835)+_0x27dfe2(0x834)+_0x27dfe2(0x414)+_0x27dfe2(0x3d2)+'y:.45'+';curs'+_0x27dfe2(0x551)+_0x27dfe2(0x971)+';}')+_0x3d6075[_0x27dfe2(0x493)]+(_0x27dfe2(0x75e)+_0x27dfe2(0x54a)+_0x27dfe2(0x2fb)+'idth:'+_0x27dfe2(0x5d3)+_0x27dfe2(0xa84)+'t:14p'+_0x27dfe2(0x37c)+_0x27dfe2(0x3dd)+_0x27dfe2(0x8a6)+'oke:c'+'urren'+_0x27dfe2(0x1ce)+'r;str'+'oke-w'+'idth:'+'2;str'+_0x27dfe2(0x4e5)+_0x27dfe2(0x660)+_0x27dfe2(0x925)+_0x27dfe2(0xab0)),_0x3d6075[_0x27dfe2(0x1e8)])+_0x3d6075['dLYRy']+_0x3d6075[_0x27dfe2(0x4d3)],_0x27dfe2(0x75e)+_0x27dfe2(0x3ec)+_0x27dfe2(0xa97)+_0x27dfe2(0x9ea)+'rollb'+_0x27dfe2(0x5e8)+_0x27dfe2(0x9bb)+'ackgr'+_0x27dfe2(0x11e)+_0x27dfe2(0x47c)+_0x27dfe2(0x2f5)+'55,25'+_0x27dfe2(0xa68)+_0x27dfe2(0x4a1)+_0x27dfe2(0x143)+_0x27dfe2(0x519)+_0x27dfe2(0x324)+'}')+(_0x27dfe2(0x378)+'ard{b'+'order'+_0x27dfe2(0x8a2)+_0x27dfe2(0x708)+_0x27dfe2(0x304)+'ckgro'+_0x27dfe2(0x18a)+_0x27dfe2(0xb32)+_0x27dfe2(0x703)+_0x27dfe2(0xa49)+',.025'+');box'+_0x27dfe2(0x687)+'ow:in'+'set\x200'+'\x200\x200\x20'+_0x27dfe2(0x5cb)+'gba(2'+'55,25'+'5,255'+_0x27dfe2(0x20d)+';}'),_0x3d6075[_0x27dfe2(0x395)]),_0x27dfe2(0x378)+'ard-h'+_0x27dfe2(0x62a)+_0x27dfe2(0x768)+_0x27dfe2(0x5d5)+_0x27dfe2(0xb26)+_0x27dfe2(0x9de)+_0x27dfe2(0x608)+_0x27dfe2(0x824)+';gap:'+_0x27dfe2(0x723)+_0x27dfe2(0x470)+_0x27dfe2(0x62c)+'x\x2012p'+'x;}'),_0x3d6075['GUwDF']),_0x27dfe2(0x378)+_0x27dfe2(0x1db)+_0x27dfe2(0x7f3)+'stron'+'g{fon'+_0x27dfe2(0x2b8)+_0x27dfe2(0x3fb)+_0x27dfe2(0x994)+'t-wei'+_0x27dfe2(0x270)+_0x27dfe2(0x9a5)+_0x27dfe2(0x505)+_0x27dfe2(0xb32)+'46,23'+'8,242'+_0x27dfe2(0x44c)+';}'),_0x3d6075[_0x27dfe2(0x3ad)]),_0x3d6075[_0x27dfe2(0x1c8)]),'.sk-m'+_0x27dfe2(0xa7c)+'font-'+'size:'+'11px;'+_0x27dfe2(0x9dc)+'ty:.4'+_0x27dfe2(0xa39)+_0x27dfe2(0x197)+_0x27dfe2(0x655)+_0x27dfe2(0x853)+_0x27dfe2(0x379)+_0x27dfe2(0x70f)+_0x27dfe2(0x93c)+'wrap;'+'}')+('.sk-c'+_0x27dfe2(0x3b5)+'splay'+_0x27dfe2(0x105)+_0x27dfe2(0x783)+_0x27dfe2(0x40b)+'ms:ce'+_0x27dfe2(0xaa4)+_0x27dfe2(0x531)+_0x27dfe2(0x3a9)+_0x27dfe2(0xa53)+':4px\x20'+'0;fon'+_0x27dfe2(0x2b8)+_0x27dfe2(0x1ae)+'5px;}')+(_0x27dfe2(0x8a8)+_0x27dfe2(0x351)+'flex:'+_0x27dfe2(0x654)+_0x27dfe2(0x7d5)+'ba(24'+_0x27dfe2(0x3ac)+',242,'+'.75);'+'}')+(_0x27dfe2(0x49c)+'int{d'+_0x27dfe2(0x768)+_0x27dfe2(0xa09)+'ck;fo'+'nt-si'+_0x27dfe2(0x4d7)+_0x27dfe2(0x897)+_0x27dfe2(0xa93)+_0x27dfe2(0x55a)),'.sk-s'+'witch'+_0x27dfe2(0x3b6)+_0x27dfe2(0x9c1)+_0x27dfe2(0x73d)+_0x27dfe2(0x763)+'idth:'+_0x27dfe2(0x8c8)+_0x27dfe2(0xa84)+_0x27dfe2(0x7e1)+_0x27dfe2(0xaca)+_0x27dfe2(0x8e8)+_0x27dfe2(0xa31)+'er-ra'+_0x27dfe2(0x8c9)+_0x27dfe2(0x8f2)+_0x27dfe2(0x21e)+_0x27dfe2(0x637)+_0x27dfe2(0x662)+_0x27dfe2(0x5e1)+'255,2'+_0x27dfe2(0x515)+_0x27dfe2(0x8ad)+'rsor:'+_0x27dfe2(0x864)+'er;fl'+'ex:no'+'ne;}'),_0x27dfe2(0x731)+_0x27dfe2(0x78b)+_0x27dfe2(0x97e)+'er{co'+_0x27dfe2(0x72c)+':\x22\x22;p'+_0x27dfe2(0x41c)+_0x27dfe2(0x289)+'solut'+_0x27dfe2(0x259)+':3px;'+_0x27dfe2(0x809)+_0x27dfe2(0x1ff)+_0x27dfe2(0x3d3)+_0x27dfe2(0x86f)+_0x27dfe2(0x726)+_0x27dfe2(0x973)+_0x27dfe2(0xac8)+_0x27dfe2(0x13b)+_0x27dfe2(0x151)+'0%;')+(_0x27dfe2(0x21e)+_0x27dfe2(0x637)+':rgba'+_0x27dfe2(0x5e1)+_0x27dfe2(0x2f5)+'55,.2'+_0x27dfe2(0xb3f)+_0x27dfe2(0x7d6)+_0x27dfe2(0xaae)+'eft\x20.'+_0x27dfe2(0x5bb)+'ckgro'+_0x27dfe2(0xaff)+_0x27dfe2(0x9dd))+_0x3d6075['yTVmI']+_0x3d6075[_0x27dfe2(0x6f1)]+('.sk-r'+'ange{'+_0x27dfe2(0x8d1)+_0x27dfe2(0x9f3)+_0x27dfe2(0x18b)+_0x27dfe2(0x34d)+_0x27dfe2(0x60b)+_0x27dfe2(0x59f)+_0x27dfe2(0x688)+_0x27dfe2(0x973)+'}')+_0x3d6075[_0x27dfe2(0x415)],_0x27dfe2(0x731)+_0x27dfe2(0x988)+_0x27dfe2(0x848)+_0x27dfe2(0x475)+'slide'+'r-run'+_0x27dfe2(0x550)+_0x27dfe2(0x66e)+_0x27dfe2(0x59e)+_0x27dfe2(0xacc)+'px;bo'+_0x27dfe2(0x4f2)+'radiu'+_0x27dfe2(0x7d2)+';'),_0x3d6075['hvuDc'])+_0x3d6075['QwnQx'],_0x27dfe2(0x6c9)+_0x27dfe2(0x66c)+_0x27dfe2(0x37b)+_0x27dfe2(0x136)+_0x27dfe2(0x5d9)+_0x27dfe2(0x72e)+_0x27dfe2(0xa7b)+'600;m'+'in-wi'+'dth:3'+_0x27dfe2(0x711)+_0x27dfe2(0xb13)+'lign:'+_0x27dfe2(0x153)+';colo'+_0x27dfe2(0x501)+_0x27dfe2(0xa3c)+_0x27dfe2(0xb12)+'242,.'+'8);}')+('.sk-n'+_0x27dfe2(0x997)+'ont-s'+'ize:1'+'1px;c'+'olor:'+'rgba('+_0x27dfe2(0x5fa)+'38,24'+'2,.5)'+_0x27dfe2(0x393)+_0x27dfe2(0x194)+'px\x200;'+'white'+_0x27dfe2(0x91d)+_0x27dfe2(0xabf)+_0x27dfe2(0xb58)+';}')+_0x3d6075[_0x27dfe2(0x3c4)],_0x27dfe2(0x5da)+_0x27dfe2(0x1ea)+'ign-s'+_0x27dfe2(0x214)+_0x27dfe2(0x350)+'tart;'+'borde'+_0x27dfe2(0xa47)+'order'+_0x27dfe2(0x8a2)+_0x27dfe2(0x7f8)+_0x27dfe2(0x4a4)+_0x27dfe2(0xad0)+_0x27dfe2(0x471)+_0x27dfe2(0xa45)+_0x27dfe2(0x23d)+'ound:'+_0x27dfe2(0x94f)+'9d;co'+_0x27dfe2(0x8e5)+_0x27dfe2(0x2ef))+(_0x27dfe2(0xa88)+_0x27dfe2(0x84b)+_0x27dfe2(0x80e)+_0x27dfe2(0x994)+_0x27dfe2(0x265)+'ght:7'+_0x27dfe2(0x6ac)+_0x27dfe2(0x45b)+'point'+_0x27dfe2(0x7a3)+_0x27dfe2(0x855)+_0x27dfe2(0x70c)+'inher'+_0x27dfe2(0x4c2))+(_0x27dfe2(0x5da)+'tn:ho'+_0x27dfe2(0x1dc)+_0x27dfe2(0x8ec)+_0x27dfe2(0x26c)+_0x27dfe2(0x327)+'s(1.1'+');}'),'.sk-p'+_0x27dfe2(0xb41)+'nt:11'+_0x27dfe2(0x11d)+'5\x20ui-'+'monos'+_0x27dfe2(0x63a)+'Conso'+_0x27dfe2(0x762)+_0x27dfe2(0x959)+_0x27dfe2(0x4a6)+_0x27dfe2(0x379)+_0x27dfe2(0x70f)+_0x27dfe2(0x93c)+'wrap;'+_0x27dfe2(0x8c6)+'break'+_0x27dfe2(0x56b)+_0x27dfe2(0x6e4)+'d;mar'+_0x27dfe2(0x67c)+_0x27dfe2(0x747)+_0x27dfe2(0x88a)+_0x27dfe2(0x29a)+_0x27dfe2(0xb43)+'ght:2'+'80px;'+_0x27dfe2(0x2b4)+'low:a'+_0x27dfe2(0x3f2))+(_0x27dfe2(0x7d9)+'ra-pe'+_0x27dfe2(0x1fc)+'ositi'+_0x27dfe2(0xa4d)+'xed;t'+_0x27dfe2(0x423)+'px;ri'+_0x27dfe2(0x70a)+_0x27dfe2(0x955)+'-inde'+_0x27dfe2(0x995)+'74836'+_0x27dfe2(0x67e)+_0x27dfe2(0x45b)+'point'+_0x27dfe2(0x1da)+_0x27dfe2(0x8e6)+_0x27dfe2(0x47a)+_0x27dfe2(0x726)+':26px'+';opac'+_0x27dfe2(0x88a)+'28;')+('trans'+_0x27dfe2(0xa1f)+':opac'+_0x27dfe2(0x218)+_0x27dfe2(0x878)+_0x27dfe2(0x971)+'-even'+'ts:au'+'to;fi'+'lter:'+_0x27dfe2(0x735)+_0x27dfe2(0x611)+_0x27dfe2(0x24e)+'\x204px\x20'+_0x27dfe2(0x47c)+_0x27dfe2(0x181)+'07,15'+'7,.7)'+');}'),_0x43d10e=_0x27dfe2(0x31f)+_0x27dfe2(0x212)+'ox=\x220'+'\x200\x2024'+_0x27dfe2(0x211)+'<path'+_0x27dfe2(0x54d)+'12\x2021'+'c-1.5'+_0x27dfe2(0x41a)+_0x27dfe2(0x71f)+_0x27dfe2(0x498)+_0x27dfe2(0x9c2)+'.5\x201.'+_0x27dfe2(0x448)+'\x204-4.'+_0x27dfe2(0x9d5)+'\x204\x204.'+_0x27dfe2(0x7da)+'-2.5\x20'+_0x27dfe2(0x442)+'.5z\x22\x20'+_0x3d6075[_0x27dfe2(0xa65)]+_0x3d6075[_0x27dfe2(0x20b)],_0x325595=_0x3d6075[_0x27dfe2(0x2fa)](_0x3d6075['ACXoV']+('fill='+_0x27dfe2(0x7ed)+'\x22\x20str'+'oke=\x22'+'#ff6b'+'9d\x22\x20s'+_0x27dfe2(0x95d)+'-widt'+'h=\x221.'+'6\x22\x20st'+_0x27dfe2(0xad4)+_0x27dfe2(0x312)+_0x27dfe2(0x459)+_0x27dfe2(0x754)+'\x20stro'+'ke-li'+'nejoi'+'n=\x22ro'+_0x27dfe2(0x2d3)+'>'),_0x27dfe2(0x435)+'le\x20cx'+'=\x2212\x22'+_0x27dfe2(0x38d)+'10\x22\x20r'+_0x27dfe2(0x773)+'\x22\x20fil'+_0x27dfe2(0x94a)+_0x27dfe2(0x2bb)+_0x27dfe2(0x1cc)+_0x27dfe2(0x22c));function _0x138f08(_0x36997d,_0x8c4063,_0x3bf647){var _0xbe91a3=_0x27dfe2,_0x20493b=document[_0xbe91a3(0x863)+_0xbe91a3(0x32f)+'ent'](_0x36997d);if(_0x8c4063)_0x20493b['class'+_0xbe91a3(0xaef)]=_0x8c4063;if(_0x3d6075['VXplb'](_0x3bf647,null))_0x20493b['inner'+_0xbe91a3(0x8c2)]=_0x3bf647;return _0x20493b;}function _0x37fcfd(_0x418253,_0x24ce2f){var _0x526284=_0x27dfe2,_0xe2aa41=('0|7|9'+_0x526284(0x42d)+_0x526284(0x2bf)+_0x526284(0xa91))[_0x526284(0x4b5)]('|'),_0x458b31=-0x1efe+0x347*0x5+0xe9b;while(!![]){switch(_0xe2aa41[_0x458b31++]){case'0':var _0x33ebc2=_0x138f08(_0x526284(0x1f9),'sk-ca'+'rd'+(_0x24ce2f?_0x526284(0x79b):''));continue;case'1':return _0x33ebc2;case'2':_0x3bf06d[_0x526284(0x696)+'dChil'+'d'](_0x23ce5a);continue;case'3':var _0x17ef56=_0x3d6075[_0x526284(0xaed)](_0x138f08,_0x526284(0x1f9),_0x3d6075[_0x526284(0x629)]);continue;case'4':_0x33ebc2['head']=_0x23ce5a;continue;case'5':_0x33ebc2['body']=_0x17ef56;continue;case'6':_0x33ebc2[_0x526284(0x696)+_0x526284(0x752)+'d'](_0x17ef56);continue;case'7':var _0x3bf06d=_0x3d6075[_0x526284(0xb10)](_0x138f08,'div',_0x526284(0x3cd)+_0x526284(0x87f)+'ad');continue;case'8':_0x33ebc2[_0x526284(0x696)+'dChil'+'d'](_0x3bf06d);continue;case'9':var _0x23ce5a=_0x3d6075[_0x526284(0x2a3)](_0x138f08,_0x526284(0x1f9),_0x3d6075[_0x526284(0x6e2)],_0x3d6075[_0x526284(0x479)](_0x526284(0x28a)+'ng>'+_0x418253,_0x526284(0x6f3)+_0x526284(0xb5c)));continue;}break;}}function _0x4f0942(_0xf03487,_0x5a6b48){var _0x3d74f5=_0x27dfe2;if(_0x3d74f5(0x98e)!==_0x3d74f5(0x9b5)){var _0x33e27c=_0x3d6075[_0x3d74f5(0x9ab)](_0x138f08,'butto'+'n',_0x3d74f5(0x2f4)+_0x3d74f5(0x715));_0x33e27c[_0x3d74f5(0x64e)]=_0x3d74f5(0x198)+'n';var _0x5d2cf2=function(){var _0x41b8be=_0x3d74f5,_0x513a8b={'ZsPkL':_0x41b8be(0xa3d)+'le'};if(_0x3d6075['bclIp']!==_0x3d6075[_0x41b8be(0x4ae)])_0x33e27c['setAt'+_0x41b8be(0x78c)+'te'](_0x41b8be(0x6fb)+_0x41b8be(0x13a)+'ed',_0xf03487()?_0x3d6075[_0x41b8be(0xa35)]:_0x3d6075['WHlom']);else return _0xafda0['sourc'+'e']='windo'+'w.'+_0xf624c8[_0x3bf40a]+_0x513a8b['ZsPkL'],_0x403a1f;};return _0x33e27c[_0x3d74f5(0x14d)+'ck']=function(){var _0x41c9cb=_0x3d74f5;if(_0x3d6075[_0x41c9cb(0x44d)](_0x3d6075['IntHf'],_0x41c9cb(0x8ed)))return null;else _0x3d6075[_0x41c9cb(0x5ee)](_0x5a6b48,!_0xf03487()),_0x3d6075['nuLzr'](_0x5d2cf2);},_0x5d2cf2(),_0x33e27c[_0x3d74f5(0xa94)]=_0x5d2cf2,_0x33e8bf['syncs']['push'](_0x5d2cf2),_0x33e27c;}else try{_0x195054[_0x3d74f5(0x172)+'em'](_0x1c9075,_0x114001(_0x4cbea8[_0x3d74f5(0x620)]));}catch(_0x539f4f){}}function _0x22b193(_0x1f6eca,_0x5b5068,_0x252f20,_0x1c6357,_0x2d06b5){var _0x524830=_0x27dfe2,_0x58fe13={'qWcFd':_0x3d6075['YwFYy'],'UHfFu':function(_0x149979,_0x55e58b){var _0x398e7c=_0x4730;return _0x3d6075[_0x398e7c(0x71b)](_0x149979,_0x55e58b);},'uWpfW':function(_0x5c6c09,_0x5b7238){return _0x5c6c09(_0x5b7238);},'GLsHB':function(_0x3a221c){var _0x15c4ef=_0x4730;return _0x3d6075[_0x15c4ef(0x81e)](_0x3a221c);}};if(_0x3d6075['GtGZO']('FfogQ',_0x3d6075['DxxHL'])){var _0x570051=('1|9|5'+_0x524830(0x2c0)+_0x524830(0x2d4)+_0x524830(0x607)+'3|8|0'+_0x524830(0x881)+_0x524830(0x287)+_0x524830(0x2ad))[_0x524830(0x4b5)]('|'),_0x44528a=0x7*-0x53+0xa88*0x2+-0x11b*0x11;while(!![]){switch(_0x570051[_0x44528a++]){case'0':_0x366c09['appen'+_0x524830(0x752)+'d'](_0x15942f);continue;case'1':var _0x366c09=_0x3d6075['cpten'](_0x138f08,'div',_0x524830(0x4e4)+_0x524830(0x238));continue;case'2':_0x366c09[_0x524830(0x696)+_0x524830(0x752)+'d'](_0x2ef791);continue;case'3':_0x15942f['class'+'Name']='sk-sl'+'ider';continue;case'4':_0x33e8bf[_0x524830(0x7b4)][_0x524830(0x82d)](_0xd23cce);continue;case'5':_0x15942f[_0x524830(0x64e)]=_0x524830(0x511);continue;case'6':_0x15942f[_0x524830(0x766)]=String(_0x252f20);continue;case'7':_0x366c09['sync']=_0xd23cce;continue;case'8':_0x15942f[_0x524830(0x957)+'ut']=function(){var _0x2f2754=_0x524830;_0x2d06b5(_0x58fe13[_0x2f2754(0x931)](parseFloat,_0x15942f['value'])||_0x1f6eca),_0x58fe13[_0x2f2754(0x63f)](_0xd23cce);};continue;case'9':var _0x15942f=document[_0x524830(0x863)+_0x524830(0x32f)+_0x524830(0x796)]('input');continue;case'10':_0x15942f[_0x524830(0x2fe)]=_0x3d6075['ysXUk'](String,_0x5b5068);continue;case'11':_0x15942f['min']=String(_0x1f6eca);continue;case'12':_0x366c09[_0x524830(0x1d2)]=_0x15942f;continue;case'13':var _0xd23cce=function(){var _0x56dab4=_0x524830,_0xb47fb5=_0x58fe13[_0x56dab4(0x8aa)][_0x56dab4(0x4b5)]('|'),_0xd60fb2=-0x63d+-0xe97*-0x2+-0x347*0x7;while(!![]){switch(_0xb47fb5[_0xd60fb2++]){case'0':_0x15942f[_0x56dab4(0x683)]=String(_0x443969);continue;case'1':_0x15942f['style']['setPr'+_0x56dab4(0x6bc)+'y'](_0x56dab4(0x705),_0x3a8c30+'%');continue;case'2':var _0x443969=_0x1c6357();continue;case'3':_0x2ef791[_0x56dab4(0xa37)+_0x56dab4(0xa40)+'t']=(_0x252f20<-0x23bc*-0x1+0x1374+-0x372f?_0x443969['toFix'+'ed'](0x470+0x9ca*-0x2+0xf25):_0x58fe13[_0x56dab4(0x854)](String,Math['round'](_0x443969)))+(_0x15942f[_0x56dab4(0x31e)+'et']['unit']||'');continue;case'4':var _0x3a8c30=(_0x443969-_0x1f6eca)/(_0x5b5068-_0x1f6eca)*(0x239*-0xd+-0x2103+0x1bb*0x24);continue;}break;}};continue;case'14':var _0x2ef791=_0x3d6075[_0x524830(0x9ab)](_0x138f08,_0x524830(0x368),_0x3d6075[_0x524830(0xad9)]);continue;case'15':return _0x366c09;case'16':_0xd23cce();continue;}break;}}else{if(_0x2780b1[_0x377888][_0x524830(0x207)+_0x524830(0x282)+_0x524830(0x27e)])_0x4a64d1[_0x237123][_0x524830(0x207)+_0x524830(0x282)+_0x524830(0x27e)][_0x524830(0x725)+'essag'+'e'](_0x2b4da8,'*');}}function _0x10b119(_0xb73fbe,_0x42d438){var _0x2bff93=_0x27dfe2,_0x42040c=_0x138f08(_0x3d6075['WftXA'],_0x3d6075['YIwmK']),_0x4eb4ca=_0x138f08('div',_0x3d6075['CBCdT'],_0x3d6075['ODXga'](_0xb73fbe,_0x42d438?_0x3d6075['OmASe'](_0x2bff93(0xa6b)+_0x2bff93(0xb05)+_0x2bff93(0x4a9)+'-hint'+'\x27>',_0x42d438)+_0x3d6075[_0x2bff93(0x4fd)]:''));return _0x42040c['appen'+_0x2bff93(0x752)+'d'](_0x4eb4ca),_0x42040c;}function _0x121a06(_0x455be2,_0x15e510,_0x1d8bc9,_0x446d28){var _0x28a474=_0x27dfe2,_0x5b13f2={'Uqkqz':function(_0x56bcc6,_0x2de4f8){return _0x3d6075['HprAf'](_0x56bcc6,_0x2de4f8);},'eSyJP':_0x3d6075[_0x28a474(0x668)],'gZRNf':function(_0x18c142,_0x276f24){var _0x527ec7=_0x28a474;return _0x3d6075[_0x527ec7(0x872)](_0x18c142,_0x276f24);},'xqNal':_0x3d6075['napJV']},_0x1d8797=_0x455be2&&_0x455be2[_0x28a474(0x706)+'y']&&_0x455be2['surve'+'y'][_0x15e510];if(!_0x1d8797)return'-';for(var _0x53fa74=0x16fc+0x2b7+-0x19b3;_0x53fa74<_0x1d8797['lengt'+'h'];_0x53fa74++){if(_0x3d6075[_0x28a474(0x6cd)]!==_0x3d6075[_0x28a474(0x6cd)])_0x49bf77['lg'][_0x28a474(0xa37)+'onten'+'t']=_0x5b13f2['Uqkqz'](_0x5b13f2[_0x28a474(0xb31)](_0x5b13f2[_0x28a474(0xb31)](_0x28a474(0x383),_0x54b0c5)+_0x5b13f2[_0x28a474(0x880)],_0x231b28[_0x28a474(0x637)](_0xbf1755['span'])),'m')+(_0x36486c['boxes']?_0x5b13f2[_0x28a474(0xb31)](_0x28a474(0x820)+'v\x20',_0x37c71f[_0x28a474(0x637)](_0x49b88e['fov']))+'°':'')+(_0x3be473!==null?_0x5b13f2['gZRNf'](_0x5b13f2[_0x28a474(0x25b)],_0x141d98):'');else{if(_0x1d8797[_0x53fa74]['o']===_0x1d8bc9){if(_0x446d28==='v3'){var _0x565f95=_0x1d8797[_0x53fa74]['xyz']||[_0x1d8797[_0x53fa74]['v'],-0x1a7e+0x270f+-0x1*0xc91,0xb9*0x12+0x215d+-0x9*0x527];return _0x565f95[_0x28a474(0x456)](function(_0x21a8ca){var _0x2c8383=_0x28a474;return Math[_0x2c8383(0x637)](_0x21a8ca*(0xe05+-0x1*0x1637+0x1*0x896))/(-0x29b+-0xf59+0x24b*0x8);})[_0x28a474(0xa69)]('\x20\x20');}var _0x3b9a78=_0x1d8797[_0x53fa74]['v'];return typeof _0x3b9a78===_0x28a474(0xb4b)+'r'?_0x3d6075[_0x28a474(0x9b1)](Math['round'](_0x3b9a78*(-0x53d*0x1+-0x1f6d+0x2892)),0x2657+-0x803*-0x1+-0x2a72):_0x3d6075[_0x28a474(0x695)](String,_0x3b9a78);}}}return'-';}function _0x57cf6c(_0x2c2fc6){var _0x486484=_0x27dfe2,_0x27c7dd={'SsayS':_0x3d6075[_0x486484(0x7d3)],'rPaCV':function(_0x489668,_0x1b06de){return _0x489668+_0x1b06de;},'gfOVu':function(_0x3d1ec1,_0x4245f5){return _0x3d6075['BHluW'](_0x3d1ec1,_0x4245f5);},'MxdPM':'\x20on\x20','qdYCQ':_0x486484(0x1b8)+_0x486484(0x55f),'OMuBO':_0x3d6075[_0x486484(0x759)],'JAWaI':_0x486484(0x504)+'plies'+'\x20move'+'ment-'+'speed'+'\x20fiel'+_0x486484(0xb57)+'ly.\x20H'+_0x486484(0x726)+_0x486484(0x8c4)+_0x486484(0x9fb)+_0x486484(0x6ae)+'\x20are\x20'+_0x486484(0x915)+'ed.','bAfuA':_0x3d6075[_0x486484(0xa2b)],'hIBZa':_0x3d6075[_0x486484(0x163)],'vOhCr':function(_0x4f2010,_0x39e689){return _0x3d6075['oCUBM'](_0x4f2010,_0x39e689);},'KTOQy':function(_0x8ea58a,_0x4ec0b4){return _0x3d6075['QlbQr'](_0x8ea58a,_0x4ec0b4);},'uIivY':function(_0x1d92bb,_0x17fc95){return _0x1d92bb(_0x17fc95);},'tUPqC':function(_0x5b9730,_0x1d9929){return _0x5b9730===_0x1d9929;},'IOYKQ':function(_0xdff50f,_0x51f166){var _0x4cb47e=_0x486484;return _0x3d6075[_0x4cb47e(0xacb)](_0xdff50f,_0x51f166);},'RSuda':_0x486484(0x23b)+'a-sw-'+'v2-cs'+'s','dvBMF':_0x486484(0x466)+'d','EkWHX':_0x486484(0x4d1),'xsMAf':function(_0x446616,_0x3d55b9){return _0x446616+_0x3d55b9;},'orrUZ':function(_0x4686d5,_0x4ea498){var _0x38b9d0=_0x486484;return _0x3d6075[_0x38b9d0(0x544)](_0x4686d5,_0x4ea498);},'mNcWc':function(_0x145632,_0x2143c9){var _0x183787=_0x486484;return _0x3d6075[_0x183787(0x6ff)](_0x145632,_0x2143c9);},'fiHKV':_0x3d6075['QdHab'],'BsRGk':'Clipb'+'oard\x20'+'block'+_0x486484(0xa12)+_0x486484(0x6bf)+_0x486484(0xb34)+_0x486484(0x564)+_0x486484(0x9df)+'ad','NEjgb':_0x3d6075[_0x486484(0x4de)],'pLaOZ':_0x486484(0xabe)+'faile'+'d'},_0x1b2f46=_0x2fd1ca,_0x39c2b3=[],_0x301f12;if(_0x2c2fc6===_0x486484(0x4c7)+'t'){var _0x30c66b=_0x3d6075[_0x486484(0x898)](_0x37fcfd,_0x3d6075[_0x486484(0x535)],_0x2ad7e0['on']),_0x4748df=_0x138f08(_0x486484(0x1f9),_0x3d6075[_0x486484(0x53c)],_0x2ad7e0['on']?_0x3d6075[_0x486484(0x230)](_0x3d6075[_0x486484(0xb4f)](_0x3d6075[_0x486484(0xb51)](_0x3d6075[_0x486484(0x583)]('x',_0x2ad7e0[_0x486484(0x24b)+'r'][_0x486484(0x3a3)+'ed'](0x11bc+-0x1609*-0x1+-0x7f4*0x5)),_0x3d6075[_0x486484(0x748)])+_0x4bedd4['lengt'+'h'],'\x20fiel'+'ds\x20·\x20')+_0x176635,_0x3d6075[_0x486484(0x759)]):_0x3d6075['pxaBL']),_0x308d21=_0x3d6075[_0x486484(0x8be)](_0x10b119,'Enabl'+'ed');_0x308d21['appen'+_0x486484(0x752)+'d'](_0x3d6075[_0x486484(0x9ab)](_0x4f0942,function(){return _0x2ad7e0['on'];},function(_0x43f48b){var _0x289da0=_0x486484;if('MhTHU'===_0x27c7dd[_0x289da0(0xaf5)]){_0xf4a9b3(![]),_0x25a31e(_0x37efdf,-0x1*-0x1459+-0x1c7c+0x94f);return;}else _0x4024a1(_0x43f48b,_0x2ad7e0['facto'+'r']),_0x4748df[_0x289da0(0xa37)+_0x289da0(0xa40)+'t']=_0x43f48b?_0x27c7dd[_0x289da0(0xa81)](_0x27c7dd[_0x289da0(0x2f7)](_0x27c7dd[_0x289da0(0xa81)]('x'+_0x2ad7e0[_0x289da0(0x24b)+'r'][_0x289da0(0x3a3)+'ed'](-0x23f4+-0x2c2+-0xb*-0x385),_0x27c7dd['MxdPM'])+_0x4bedd4[_0x289da0(0x827)+'h'],_0x27c7dd[_0x289da0(0x491)])+_0x176635,_0x27c7dd['OMuBO']):_0x27c7dd[_0x289da0(0x7f7)];})),_0x30c66b['body']['appen'+'dChil'+'d'](_0x4748df),_0x30c66b[_0x486484(0x802)][_0x486484(0x696)+_0x486484(0x752)+'d'](_0x308d21);var _0x16d86b=_0x3d6075['zbZTY'](_0x22b193,-0x2e2*0xd+0x9*0x167+-0x25*-0xac,-0x145d+-0x1b72+-0x1*-0x2fd4,0x1ac3+0x90+-0x1*0x1b53+0.5,function(){var _0x310c4d=_0x486484,_0x1371d5={'ZHzLt':_0x27c7dd['bAfuA']};if(_0x27c7dd['hIBZa']!==_0x27c7dd[_0x310c4d(0x4aa)]){if(_0x5bc56d)return _0x173a65;try{var _0x5319cb=_0x1371d5[_0x310c4d(0x469)][_0x310c4d(0x4b5)]('|'),_0x5dea0c=0x981*-0x1+0x1b22*-0x1+-0x71*-0x53;while(!![]){switch(_0x5319cb[_0x5dea0c++]){case'0':_0x28162c[_0x310c4d(0x802)]['appen'+_0x310c4d(0x752)+'d'](_0x483b83);continue;case'1':var _0x483b83=_0x47d08a['creat'+'eElem'+'ent']('canva'+'s');continue;case'2':_0x483b83[_0x310c4d(0x113)]['cssTe'+'xt']=_0x310c4d(0xaba)+'ion:f'+_0x310c4d(0x3cb)+_0x310c4d(0x809)+'0;top'+_0x310c4d(0x9a7)+_0x310c4d(0x5ca)+':2147'+'48364'+'5;poi'+'nter-'+_0x310c4d(0x943)+'s:non'+'e;';continue;case'3':_0x2b1cb7={'cv':_0x483b83};continue;case'4':if(!_0x504e35[_0x310c4d(0x802)]||!_0x5d4c5d[_0x310c4d(0x802)]['appen'+'dChil'+'d'])return null;continue;case'5':_0x483b83['id']=_0x310c4d(0x23b)+'a-box'+'es';continue;case'6':return _0x278a26;}break;}}catch(_0x52f6b5){return null;}}else return _0x2ad7e0[_0x310c4d(0x24b)+'r'];},function(_0x33cf80){_0x4024a1(_0x2ad7e0['on'],_0x33cf80);});_0x16d86b['input'][_0x486484(0x31e)+'et'][_0x486484(0x9aa)]='x';var _0x46c05b=_0x10b119(_0x3d6075[_0x486484(0x80c)],'F8\x20/\x20'+_0x486484(0x3d6)+_0x486484(0x388)+'ep\x20th'+'is');_0x46c05b['appen'+_0x486484(0x752)+'d'](_0x16d86b),_0x30c66b[_0x486484(0x802)]['appen'+_0x486484(0x752)+'d'](_0x46c05b);if(_0x465cdc['lengt'+'h']){var _0x3929ce=_0x3d6075[_0x486484(0x2c3)](_0x138f08,_0x486484(0x1f9),_0x3d6075[_0x486484(0x366)],_0x3d6075[_0x486484(0x239)]('Refus'+_0x486484(0x903),_0x465cdc[_0x486484(0x485)](-0x128+0x92d*-0x3+-0x1*-0x1caf,-0x1d*0x97+0x1dd1*-0x1+-0x10*-0x2ef)['map'](function(_0x4610c1){var _0xfdbfd0=_0x486484;return _0x27c7dd['vOhCr']('0x'+(_0x27c7dd[_0xfdbfd0(0x7f2)](_0x4610c1['o'],0x1500+0x6cd*0x3+0x2967*-0x1)?'?':_0x4610c1['o'][_0xfdbfd0(0x5c6)+'ing'](-0x16e5+0x92+0x1663)),'\x20(')+_0x4610c1['why']+')';})['join']('\x20\x20')));_0x30c66b['body']['appen'+_0x486484(0x752)+'d'](_0x3929ce);}_0x39c2b3[_0x486484(0x82d)](_0x30c66b);var _0x1e405c=_0x37fcfd(_0x3d6075['AkWyi']),_0x36a59d=_0x3d6075[_0x486484(0x2c3)](_0x138f08,_0x486484(0x198)+'n','sk-bt'+'n','Snaps'+'hot\x20n'+'ow\x20(F'+'9)');_0x36a59d['type']=_0x3d6075[_0x486484(0x2f3)],_0x36a59d[_0x486484(0x14d)+'ck']=function(){var _0x4048a1=_0x486484;_0x36befa('snaps'+_0x4048a1(0x66d));},_0x1e405c['body'][_0x486484(0x696)+_0x486484(0x752)+'d'](_0x3d6075['bhjKD'](_0x138f08,_0x3d6075['WftXA'],_0x486484(0x394)+'esc','F9\x20\x20s'+'napsh'+'ot\x20\x20\x20'+'\x20F7\x20\x20'+'speed'+_0x486484(0x352)+_0x486484(0x42f)+'\x20/\x20F6'+_0x486484(0x4c8)+'tor\x20+'+_0x486484(0x9be)+_0x486484(0x960)+_0x486484(0x856)+_0x486484(0xa4a)+_0x486484(0x516)+'\x0aInse'+'rt\x20\x20t'+'his\x20m'+'enu')),_0x1e405c['body'][_0x486484(0x696)+_0x486484(0x752)+'d'](_0x36a59d),_0x39c2b3[_0x486484(0x82d)](_0x1e405c);}if(_0x3d6075[_0x486484(0x7cb)](_0x2c2fc6,_0x486484(0x751)+'ls')){var _0x5095d8=_0x37fcfd('Radar',_0xcd75ed['on']),_0x5d02e9=_0x10b119(_0x486484(0x627)+'ed');_0x5d02e9[_0x486484(0x696)+'dChil'+'d'](_0x4f0942(function(){return _0xcd75ed['on'];},function(_0x4fdaf9){_0xcd75ed['on']=_0x4fdaf9,_0x6ecb62();})),_0x5095d8['body'][_0x486484(0x696)+'dChil'+'d'](_0x138f08('div',_0x3d6075[_0x486484(0x53c)],_0x3d6075['LBHYh'])),_0x5095d8[_0x486484(0x802)]['appen'+_0x486484(0x752)+'d'](_0x5d02e9);var _0x40c250=_0x22b193(0x4*-0x365+-0x1*-0x1949+-0xb8d*0x1,0x44f*-0x5+0x1790+0x77*-0x3,0x19d+0xa14*0x1+-0x13*0x9d,function(){return _0xcd75ed['span'];},function(_0x2afd15){var _0x383d1b=_0x486484;_0xcd75ed[_0x383d1b(0x368)]=_0x2afd15;});_0x40c250[_0x486484(0x1d2)]['datas'+'et']['unit']='m';var _0x4fe153=_0x3d6075['GwYTE'](_0x10b119,_0x3d6075['HzENZ'],_0x3d6075['Zgljh']);_0x4fe153[_0x486484(0x696)+_0x486484(0x752)+'d'](_0x40c250),_0x5095d8[_0x486484(0x802)][_0x486484(0x696)+_0x486484(0x752)+'d'](_0x4fe153),_0x39c2b3[_0x486484(0x82d)](_0x5095d8);var _0x50dc2f=_0x3d6075[_0x486484(0x338)](_0x37fcfd,_0x3d6075[_0x486484(0x58d)],_0xcd75ed['boxes']),_0x291262=_0x10b119(_0x486484(0x627)+'ed');_0x291262[_0x486484(0x696)+_0x486484(0x752)+'d'](_0x3d6075[_0x486484(0x8cb)](_0x4f0942,function(){var _0x36cd32=_0x486484,_0x261d04={'GrljZ':_0x3d6075[_0x36cd32(0x56e)],'vqBfZ':function(_0x25a890,_0x37e44c,_0x4bb64a){var _0xd03894=_0x36cd32;return _0x3d6075[_0xd03894(0x8d2)](_0x25a890,_0x37e44c,_0x4bb64a);},'ewUpP':_0x3d6075[_0x36cd32(0x5d6)]};if(_0x3d6075[_0x36cd32(0x3f6)](_0x3d6075[_0x36cd32(0x8a7)],_0x3d6075[_0x36cd32(0x8a7)]))return _0xcd75ed[_0x36cd32(0x15c)];else{var _0x42efa8=_0x261d04[_0x36cd32(0x4c4)][_0x36cd32(0x4b5)]('|'),_0x58671c=-0x1*-0x2335+-0xd*0x1bb+-0xcb6;while(!![]){switch(_0x42efa8[_0x58671c++]){case'0':_0x4e6bef[_0x36cd32(0x696)+'dChil'+'d'](_0x2678f9);continue;case'1':_0x2678f9[_0x36cd32(0x31e)+'et']['k']=_0x1044cd[_0x198213][0x1d6+-0x224*0x4+0x6bb*0x1];continue;case'2':_0x2678f9['style']['minWi'+_0x36cd32(0xab5)]='0';continue;case'3':var _0x4e6bef=_0x137ee9(_0x10afc1[_0x5d2762][-0x6*0x67b+0x109b+0x1647]);continue;case'4':_0x2678f9['style'][_0x36cd32(0x619)]='1';continue;case'5':_0x1d6110[_0x36cd32(0x802)]['lastC'+_0x36cd32(0x32d)]['sp']=_0x2678f9;continue;case'6':_0x2678f9[_0x36cd32(0xa37)+_0x36cd32(0xa40)+'t']=_0x22c412(_0x4570c0[_0x415ca4][0x1*-0x8bc+-0x105c*0x1+0x191a]);continue;case'7':var _0x2678f9=_0x261d04['vqBfZ'](_0xd3ed42,'span','sk-va'+'l');continue;case'8':_0x11cd00['body'][_0x36cd32(0x696)+_0x36cd32(0x752)+'d'](_0x4e6bef);continue;case'9':_0x2678f9[_0x36cd32(0x113)][_0x36cd32(0x542)+_0x36cd32(0x96c)]=_0x261d04['ewUpP'];continue;}break;}}},function(_0x21ba43){var _0x2fc648=_0x486484;if(_0x3d6075['KRzDS'](_0x2fc648(0x2b9),_0x3d6075['XDQDO']))return _0x17a5c3['warn'](_0x2fc648(0x397)+_0x2fc648(0x3d5)+'\x20menu'+_0x2fc648(0x112)+_0x2fc648(0x32b)+'le',_0x27c7dd[_0x2fc648(0x639)]('color'+':',_0x3f092b),_0x24f39d),null;else _0xcd75ed['boxes']=_0x21ba43,_0xcd75ed['on']=!![],_0x6ecb62();})),_0x50dc2f[_0x486484(0x802)]['appen'+_0x486484(0x752)+'d'](_0x138f08('div',_0x486484(0x394)+'esc',_0x486484(0x87b)+'n-spa'+'ce\x20bo'+_0x486484(0xafa)+_0x486484(0xa8c)+'ield\x20'+'of\x20vi'+_0x486484(0x566)+'nnot\x20'+'be\x20re'+'ad\x20fr'+'om\x20th'+_0x486484(0x2bd)+'ild,\x20'+'so\x20it'+'\x20is\x20f'+_0x486484(0xad1)+'\x20by\x20e'+_0x486484(0x193))),_0x50dc2f['body'][_0x486484(0x696)+_0x486484(0x752)+'d'](_0x291262);var _0x53b69d=_0x3d6075['gxvhL'](_0x22b193,-0x8e4*0x3+-0x2576+0x405e,0x171f+-0xa5+0xafc*-0x2,-0xba2+-0x1*0x6f7+0x129b,function(){var _0x57adb6=_0x486484;if(_0x27c7dd['tUPqC'](_0x57adb6(0x594),'CXWbP'))return _0x32ecaa[_0x57adb6(0x620)];else{var _0xbb39e2=_0x2c3217['v'];if(typeof _0xbb39e2!=='numbe'+'r'||!_0x27c7dd['uIivY'](_0xfeffbc,_0xbb39e2))return![];if(_0x5d28bc['k']===_0x57adb6(0x513))return _0xbb39e2===-0x14c5+0xb9+0x140c||_0xbb39e2===-0x1994+0x1*-0x2072+0x5*0xb9b;var _0x378120=_0x2fab7['fake'];if(typeof _0x378120!==_0x57adb6(0xb4b)+'r'||!_0x3e831c(_0x378120))return!![];if(_0x27c7dd['tUPqC'](_0x4523f8['act'],0x15*0x141+0x1604+-0x3058))return _0x146593['abs'](_0x27c7dd[_0x57adb6(0xb2f)](_0xbb39e2,_0x378120))<=_0x59dae0['max'](0x23a5+0x125*-0x4+-0x1f10,_0x4797aa[_0x57adb6(0x2c2)](_0x378120)*(0x20e3+-0x34*-0x13+0x17*-0x199+0.6));return _0x191d6b['abs'](_0xbb39e2)<0x649fdc4a+0x7ebdb3*0x67+-0x5c03654f;}},function(_0x47847d){var _0x2b3bf7=_0x486484;_0x32ecaa[_0x2b3bf7(0x620)]=_0x47847d,_0x290923();});_0x53b69d[_0x486484(0x1d2)][_0x486484(0x31e)+'et'][_0x486484(0x9aa)]='°';var _0x18ac51=_0x10b119(_0x3d6075['AhxmV'],'[\x20and'+_0x486484(0xaf3)+_0x486484(0x388)+_0x486484(0xa0e)+'is');_0x18ac51[_0x486484(0x696)+_0x486484(0x752)+'d'](_0x53b69d),_0x50dc2f[_0x486484(0x802)][_0x486484(0x696)+_0x486484(0x752)+'d'](_0x18ac51);var _0x44cdc7=_0x1b2f46&&_0x1b2f46[_0x486484(0x86e)];_0x50dc2f[_0x486484(0x802)][_0x486484(0x696)+_0x486484(0x752)+'d'](_0x3d6075[_0x486484(0x56a)](_0x138f08,_0x486484(0x1f9),'sk-no'+'te',_0x3d6075['MPrJn']+(_0x44cdc7?_0x44cdc7[_0x486484(0x3f5)+'Look']?_0x3d6075[_0x486484(0x2fa)](_0x3d6075[_0x486484(0x411)](_0x3d6075[_0x486484(0x3ab)],_0x44cdc7[_0x486484(0x3f5)+_0x486484(0x1a3)]),_0x44cdc7[_0x486484(0x20e)+'a']?'\x20\x20cam'+_0x486484(0x741)+_0x44cdc7[_0x486484(0x20e)+'a']:''):_0x3d6075[_0x486484(0x290)]:'no\x20Mo'+'useLo'+_0x486484(0x761)+'t')+(_0x32ecaa['pitch'+_0x486484(0x255)]||_0x32ecaa[_0x486484(0x4c1)+'f']?_0x3d6075['ksVPd'](_0x3d6075['WuBZt'](_0x486484(0x43d)+'h\x20',Math[_0x486484(0x637)](_0x32ecaa[_0x486484(0x3e0)+_0x486484(0x255)])),'\x20\x20yaw'+'\x20')+Math[_0x486484(0x637)](_0x32ecaa['yawOf'+'f']):''))),_0x39c2b3[_0x486484(0x82d)](_0x50dc2f);}if(_0x2c2fc6===_0x3d6075[_0x486484(0x1c5)]){if(_0x486484(0x987)!==_0x3d6075[_0x486484(0xb56)]){var _0x468c11=[[_0x486484(0x648),_0x3d6075[_0x486484(0xa33)],_0x1b2f46?_0x1b2f46[_0x486484(0x7ac)+'on']:'-'],[_0x3d6075['gRjmE'],_0x3d6075['PweRV'],_0x1b2f46?_0x3d6075[_0x486484(0x5ce)](_0x1b2f46[_0x486484(0x6d0)+_0x486484(0x40e)+'ed'],_0x3d6075['BIONX'])+_0x1b2f46[_0x486484(0x6d0)+'Regis'+'tered'+_0x486484(0x5d4)]:'-'],[_0x3d6075[_0x486484(0x57c)],_0x486484(0x1e0)+'insta'+_0x486484(0x676)+_0x486484(0x40c),_0x1b2f46&&_0x1b2f46['wasmM'+_0x486484(0x65b)]&&_0x1b2f46[_0x486484(0x13d)+_0x486484(0x65b)][_0x486484(0x283)+_0x486484(0x417)]?_0x3d6075[_0x486484(0x624)](Math['round'](_0x1b2f46['wasmM'+_0x486484(0x65b)]['bytes']/(-0xf*-0x5f4f+-0x1*-0x11f9cb+-0x2*0x3c7b6))+_0x3d6075[_0x486484(0xa63)]+_0x1b2f46[_0x486484(0x13d)+_0x486484(0x65b)][_0x486484(0x3ff)],'ms'):'-'],[_0x3d6075['ZyCCJ'],_0x3d6075[_0x486484(0x801)],_0x1b2f46&&_0x1b2f46[_0x486484(0x720)]?String(_0x1b2f46[_0x486484(0x720)]['playe'+_0x486484(0x25e)+'t']):'-'],[_0x3d6075['lWixu'],'every'+'one\x20b'+_0x486484(0x3ae)+'u',_0x1b2f46&&_0x1b2f46[_0x486484(0x720)]?String(_0x1b2f46[_0x486484(0x720)]['enemy'+_0x486484(0x786)]):'-'],[_0x486484(0xa57)+'a','off\x20t'+'he\x20li'+_0x486484(0x3e5)+'nager',_0x1b2f46&&_0x1b2f46[_0x486484(0x720)]&&_0x1b2f46['esp']['camer'+'a']?_0x1b2f46['esp']['camer'+'a']+'\x20('+_0x1b2f46[_0x486484(0x720)]['camer'+_0x486484(0x79c)]+')':'-']];for(_0x301f12=0x13b5+0xf02+-0x22b7;_0x301f12<_0x468c11[_0x486484(0x827)+'h'];_0x301f12++){var _0xd921a1=_0x10b119(_0x468c11[_0x301f12][0xf22+0x10a*-0x22+0x1432]),_0x12031c=_0x3d6075[_0x486484(0x338)](_0x138f08,'span',_0x3d6075['XslHx']);_0x12031c[_0x486484(0x113)]['minWi'+_0x486484(0xab5)]='0',_0x12031c[_0x486484(0x113)][_0x486484(0x619)]='1',_0x12031c[_0x486484(0x113)][_0x486484(0x542)+'lign']=_0x3d6075['LiYfB'],_0x12031c['textC'+_0x486484(0xa40)+'t']=String(_0x468c11[_0x301f12][0x108c*0x1+0x20c6+-0x2*0x18a8]),_0x12031c[_0x486484(0x31e)+'et']['k']=_0x468c11[_0x301f12][0x1d6+-0x32*-0x67+-0x15f3],_0xd921a1[_0x486484(0x696)+_0x486484(0x752)+'d'](_0x12031c);var _0x215c13=_0x39c2b3['lengt'+'h']?_0x39c2b3[_0x39c2b3['lengt'+'h']-(-0x1710+0x1786*-0x1+0x1*0x2e97)]:null;!_0x215c13&&(_0x215c13=_0x37fcfd('Sessi'+'on',![]),_0x39c2b3['push'](_0x215c13)),_0x215c13['body'][_0x486484(0x696)+_0x486484(0x752)+'d'](_0xd921a1),_0x215c13[_0x486484(0x802)][_0x486484(0x7c8)+_0x486484(0x32d)]['sp']=_0x12031c;}var _0x5d8c81=_0x37fcfd(_0x3d6075[_0x486484(0x3b7)],![]),_0x3208e4=[[_0x486484(0xa00)+_0x486484(0x653),_0x3d6075[_0x486484(0x9d2)],_0x1b2f46&&_0x1b2f46['local']&&_0x1b2f46[_0x486484(0xb33)][_0x486484(0x9a6)]?_0x1b2f46[_0x486484(0xb33)][_0x486484(0x9a6)]['map'](function(_0x2fc0d5){var _0x52c287=_0x486484;return _0x3d6075[_0x52c287(0x870)](Math[_0x52c287(0x637)](_0x2fc0d5*(-0xc87*-0x1+0xe2+-0x65*0x21)),-0x78b*0x2+-0x7bf*-0x3+-0x7c3);})['join']('\x20\x20'):'-'],[_0x3d6075[_0x486484(0x342)],_0x3d6075[_0x486484(0x28e)],_0x1b2f46&&_0x1b2f46[_0x486484(0xb33)]&&_0x1b2f46['local']['eye']?_0x1b2f46[_0x486484(0xb33)]['eye']['map'](function(_0x27976d){var _0x57b277=_0x486484;return _0x3d6075['BCWkx'](Math[_0x57b277(0x637)](_0x3d6075['vvqOP'](_0x27976d,0x5*0x1cf+-0x462+0x445*-0x1)),-0x25fa+0x1*-0x1d7f+-0x3*-0x169f);})[_0x486484(0xa69)]('\x20\x20'):'-'],[_0x3d6075[_0x486484(0x9e8)],_0x3d6075[_0x486484(0x2f2)],_0x121a06(_0x1b2f46,'FPSco'+'ntrol'+_0x486484(0xb28),-0x1*-0x224e+-0x10ec+-0x1152)],[_0x486484(0x176)+_0x486484(0x35a)+'ed',_0x486484(0x919),_0x121a06(_0x1b2f46,_0x3d6075[_0x486484(0x664)],-0x2*0x1019+-0x2*-0x18d+0x3*0x9c8)],[_0x486484(0x65a)+_0x486484(0xa84)+'t',_0x486484(0x3df),_0x3d6075['ILIHR'](_0x121a06,_0x1b2f46,_0x486484(0x502)+_0x486484(0x437)+_0x486484(0xb28),-0xe*0x11+-0x20a7+0x22b1)],['Healt'+'h',_0x3d6075[_0x486484(0x73f)],_0x121a06(_0x1b2f46,_0x486484(0x3db)+_0x486484(0xa03)+'pt',-0x119*0x3+-0x368+0x773)]];for(_0x301f12=-0x52*-0x14+0x12*-0x4f+0x2*-0x6d;_0x301f12<_0x3208e4[_0x486484(0x827)+'h'];_0x301f12++){if(_0x486484(0x484)!==_0x486484(0x484))_0x31c4b9=!_0x2305c6,_0x163d87();else{var _0x1b754b=_0x3d6075[_0x486484(0xa25)]['split']('|'),_0x39bf07=0xe*-0x23e+-0x13*0x13+-0x3*-0xaef;while(!![]){switch(_0x1b754b[_0x39bf07++]){case'0':_0x5d8c81[_0x486484(0x802)]['lastC'+'hild']['sp']=_0x144f1c;continue;case'1':_0x144f1c['style'][_0x486484(0x542)+_0x486484(0x96c)]='right';continue;case'2':var _0x6bc409=_0x3d6075[_0x486484(0x695)](_0x10b119,_0x3208e4[_0x301f12][0x123*0x1+-0x5d1*0x1+0x257*0x2]);continue;case'3':_0x144f1c['style'][_0x486484(0x619)]='1';continue;case'4':_0x144f1c[_0x486484(0x113)][_0x486484(0xac2)+_0x486484(0xab5)]='0';continue;case'5':_0x144f1c['textC'+_0x486484(0xa40)+'t']=String(_0x3208e4[_0x301f12][-0x32b*-0x1+-0xf47*-0x1+-0x1270]);continue;case'6':_0x5d8c81[_0x486484(0x802)]['appen'+_0x486484(0x752)+'d'](_0x6bc409);continue;case'7':_0x6bc409['appen'+'dChil'+'d'](_0x144f1c);continue;case'8':_0x144f1c['datas'+'et']['k']=_0x3208e4[_0x301f12][0x1360+-0x1de*0xd+0x4e7];continue;case'9':var _0x144f1c=_0x3d6075['LazBu'](_0x138f08,_0x3d6075['MZBzQ'],'sk-va'+'l');continue;}break;}}}_0x39c2b3[_0x486484(0x82d)](_0x5d8c81);}else return _0x2a51ad[_0x486484(0x948)+'e']=_0x486484(0xa6f)+_0x486484(0x43e)+_0x486484(0x87a),_0x43ffec;}if(_0x2c2fc6==='log'){var _0x509172=_0x3d6075[_0x486484(0x130)](_0x37fcfd,_0x3d6075[_0x486484(0x632)],![]),_0x405b8f=_0x1b2f46&&_0x1b2f46[_0x486484(0x162)+_0x486484(0x1d9)]&&_0x1b2f46['warni'+_0x486484(0x1d9)]['lengt'+'h']?_0x1b2f46['warni'+'ngs'][_0x486484(0xa69)]('\x0a'):_0x3d6075['MQIwp'];_0x509172[_0x486484(0x802)][_0x486484(0x696)+'dChil'+'d'](_0x3d6075['CDJpZ'](_0x138f08,_0x486484(0x1f9),_0x486484(0x2b6)+'e',_0x405b8f)),_0x39c2b3[_0x486484(0x82d)](_0x509172);var _0x4bc327=_0x37fcfd(_0x3d6075[_0x486484(0x4c6)],![]),_0x72fbac=_0x3d6075['SEVJc'](_0x138f08,_0x486484(0x198)+'n',_0x3d6075['RkpCi'],_0x3d6075[_0x486484(0x86b)]);_0x72fbac['type']=_0x3d6075['VIFuB'],_0x72fbac[_0x486484(0x14d)+'ck']=function(){var _0x43f75b=_0x486484,_0x41ef9d={'IdQxm':'KATJX','kOuyk':_0x27c7dd['dvBMF'],'ixExb':_0x27c7dd['EkWHX'],'UXrNO':_0x43f75b(0x42c)};try{if(_0x43f75b(0x3b2)===_0x43f75b(0x3b2)){var _0x39f4c3=_0x27c7dd['vOhCr'](_0x27c7dd['xsMAf'](_0x27c7dd[_0x43f75b(0x185)](_0x280f56+'\x0a',JSON[_0x43f75b(0x117)+_0x43f75b(0x1c0)](_0x1b2f46,null,-0x1e22+-0xdee+0x1d*0x185)),'\x0a'),_0x306ed3);if(navigator[_0x43f75b(0x57a)+'oard']&&navigator[_0x43f75b(0x57a)+_0x43f75b(0x241)]['write'+_0x43f75b(0x9af)])_0x27c7dd[_0x43f75b(0x31b)](_0x43f75b(0x86a),_0x27c7dd[_0x43f75b(0x3f3)])?navigator['clipb'+_0x43f75b(0x241)][_0x43f75b(0x215)+'Text'](_0x39f4c3)[_0x43f75b(0xb3a)](function(){var _0x114dbb=_0x43f75b;if(_0x41ef9d['IdQxm']!=='iurgg')_0x72fbac['textC'+'onten'+'t']=_0x41ef9d[_0x114dbb(0x48d)];else{var _0x293ce6=arguments[_0x4e3b68];if(typeof _0x293ce6===_0x114dbb(0x117)+'g')_0x55adfb+=_0x293ce6;else{if(_0x293ce6&&_0x293ce6['messa'+'ge'])_0x1e2924+=_0x293ce6[_0x114dbb(0x965)+'ge'];}}}):_0x8e9f3f[_0x43f75b(0x172)+'em'](_0x5105de,_0x54be66['strin'+_0x43f75b(0x1c0)](_0xc780e4['pos']));else _0x72fbac['textC'+_0x43f75b(0xa40)+'t']=_0x27c7dd['BsRGk'];}else{if(!_0x433df1['getEl'+_0x43f75b(0x204)+_0x43f75b(0x427)](_0x27c7dd['RSuda'])){var _0x14e6d5=_0x280a5f[_0x43f75b(0x863)+'eElem'+_0x43f75b(0x796)](_0x43f75b(0x113));_0x14e6d5['id']=_0x27c7dd[_0x43f75b(0x549)],_0x14e6d5[_0x43f75b(0xa37)+_0x43f75b(0xa40)+'t']=_0x43f75b(0x7d9)+_0x43f75b(0x39a)+'-v2{a'+_0x43f75b(0x6a4)+'itial'+'}',(_0x42c869[_0x43f75b(0x51b)]||_0x623431[_0x43f75b(0x691)+_0x43f75b(0xac9)+_0x43f75b(0x204)])[_0x43f75b(0x696)+_0x43f75b(0x752)+'d'](_0x14e6d5);}return _0x3605bb=_0x515a6a['creat'+'eElem'+_0x43f75b(0x796)](_0x43f75b(0x1f9)),_0x41e362['id']=_0x43f75b(0x23b)+'a-sw-'+'v2',_0x20d540['body'][_0x43f75b(0x696)+_0x43f75b(0x752)+'d'](_0x4f5d0c),_0x13c17c;}}catch(_0x24f420){_0x27c7dd[_0x43f75b(0x647)](_0x27c7dd[_0x43f75b(0xa22)],_0x27c7dd['NEjgb'])?_0x72fbac['textC'+_0x43f75b(0xa40)+'t']=_0x27c7dd[_0x43f75b(0x45d)]:(_0x4c4fd4[_0x43f75b(0x113)]['left']=_0x43f75b(0x4d1),_0x266b3d[_0x43f75b(0x113)]['top']=_0x41ef9d['ixExb'],_0x66f4c2['style']['right']=_0x41ef9d['UXrNO'],_0x3daf1a['style'][_0x43f75b(0x2ee)+'m']=_0x43f75b(0x42c));}},_0x4bc327[_0x486484(0x802)]['appen'+_0x486484(0x752)+'d'](_0x3d6075[_0x486484(0x2c3)](_0x138f08,_0x3d6075['WftXA'],_0x3d6075[_0x486484(0x53c)],_0x486484(0x52a)+_0x486484(0x11b)+_0x486484(0x20f)+'\x20thin'+_0x486484(0xb19)+_0x486484(0x5a0)+'ethin'+_0x486484(0x6db)+'ks\x20wr'+_0x486484(0x3b4))),_0x4bc327[_0x486484(0x802)][_0x486484(0x696)+_0x486484(0x752)+'d'](_0x72fbac),_0x39c2b3['push'](_0x4bc327);}return _0x39c2b3;}function _0x6ecb62(){if(_0x33e8bf['open'])_0x25e846(!![]);}function _0x318940(){var _0x4f6aab=_0x27dfe2,_0x182848={'WkWui':function(_0x514d17,_0x5424ed){return _0x514d17(_0x5424ed);},'Suqun':function(_0x33b0dc,_0x4f1f92){return _0x3d6075['ckYOh'](_0x33b0dc,_0x4f1f92);}};if(_0x3d6075[_0x4f6aab(0x64b)](_0x3d6075[_0x4f6aab(0x4cd)],_0x4f6aab(0x34a)))try{var _0x277b19=localStorage[_0x4f6aab(0x95a)+'em'](_0x1ab96a);if(!_0x277b19)return;var _0x71429f=JSON[_0x4f6aab(0x430)](_0x277b19);if(_0x71429f&&typeof _0x71429f['x']==='numbe'+'r'&&_0x3d6075[_0x4f6aab(0x3a8)](typeof _0x71429f['y'],'numbe'+'r'))_0x33e8bf[_0x4f6aab(0xb2e)]=_0x71429f;}catch(_0x132f0b){}else _0x182848['WkWui'](_0x489000,_0x182848['Suqun'](_0x25d8ab,_0x2c14c9['value'])||_0xd6b3be),_0x6de903();}function _0x923a1b(){var _0x5732fa=_0x27dfe2,_0x1e16e7={'GqRAo':_0x5732fa(0x508)+_0x5732fa(0x7bb)+'eateP'+_0x5732fa(0x458)+'\x20unav'+'ailab'+'le'};try{if('lcdft'!==_0x5732fa(0x20c))localStorage['setIt'+'em'](_0x1ab96a,JSON['strin'+_0x5732fa(0x1c0)](_0x33e8bf[_0x5732fa(0xb2e)]));else{_0x1319f7['error']=_0x1e16e7['GqRAo'];return;}}catch(_0x11bcca){}}function _0x4489c5(){var _0x2804cc=_0x27dfe2,_0x25d4f7=_0x33e8bf['root'];if(!_0x25d4f7||!_0x25d4f7['style'])return;_0x33e8bf['pos']?'AuOuY'!=='AuOuY'?_0x55e498(_0x3d6075['GefSZ']):(_0x25d4f7[_0x2804cc(0x113)][_0x2804cc(0x922)]=_0x33e8bf[_0x2804cc(0xb2e)]['x']+'px',_0x25d4f7[_0x2804cc(0x113)][_0x2804cc(0xa86)]=_0x33e8bf[_0x2804cc(0xb2e)]['y']+'px',_0x25d4f7['style']['right']=_0x3d6075[_0x2804cc(0x6cc)],_0x25d4f7[_0x2804cc(0x113)]['botto'+'m']=_0x3d6075['LaFce']):(_0x25d4f7['style'][_0x2804cc(0x922)]=_0x3d6075['LaFce'],_0x25d4f7['style'][_0x2804cc(0xa86)]=_0x2804cc(0x4d1),_0x25d4f7[_0x2804cc(0x113)]['right']=_0x2804cc(0x42c),_0x25d4f7['style']['botto'+'m']=_0x2804cc(0x42c));}function _0x173ea3(_0x39e873,_0x2550ba){var _0xc13c71=_0x27dfe2,_0x5cc5a3={'hIpyq':_0x3d6075[_0xc13c71(0x7a7)],'tkFgC':function(_0x5684dd,_0x4af7e3){return _0x5684dd(_0x4af7e3);},'xqywB':function(_0x7d8bfd,_0x1fd9c2){return _0x7d8bfd===_0x1fd9c2;},'goFUN':_0xc13c71(0x4d1)};try{var _0xe0dae=![],_0x1706d7=-0x63b+-0x216*-0xb+-0x10b7,_0x1c55a3=-0x35*0x76+0x1696+-0x4*-0x76;_0x2550ba['style']['curso'+'r']=_0x3d6075[_0xc13c71(0x7ea)],_0x2550ba[_0xc13c71(0x113)]['touch'+_0xc13c71(0xa90)+'n']=_0xc13c71(0x584);var _0x1cabf2=function(_0x336b1a){var _0x262a78=_0xc13c71;_0xe0dae=!![],_0x2550ba['style'][_0x262a78(0x521)+'r']=_0x5cc5a3['hIpyq'];var _0xf57cf1={'left':parseFloat(_0x39e873[_0x262a78(0x113)]['left'])||0xad1+0x1*-0x1ca9+0x11d8,'top':_0x5cc5a3['tkFgC'](parseFloat,_0x39e873[_0x262a78(0x113)][_0x262a78(0xa86)])||0xa91*-0x1+0x1610+0x9*-0x147};(!_0x39e873[_0x262a78(0x113)]['left']||_0x5cc5a3[_0x262a78(0x16c)](_0x39e873['style'][_0x262a78(0x922)],'auto'))&&(_0xf57cf1[_0x262a78(0x922)]=(window['inner'+_0x262a78(0x7e8)]||0x1f77+0x7e7+-0x275e)-(_0x39e873[_0x262a78(0x33b)+_0x262a78(0xae6)+'h']||-0x817+0x2420+-0x199d)-(-0x1*0x84f+-0x1ae3+0x11a5*0x2));(!_0x39e873[_0x262a78(0x113)][_0x262a78(0xa86)]||_0x39e873[_0x262a78(0x113)]['top']===_0x5cc5a3['goFUN'])&&(_0xf57cf1[_0x262a78(0xa86)]=(window[_0x262a78(0x261)+'Heigh'+'t']||-0x16d0+0x1bd8+-0x508)-(_0x39e873[_0x262a78(0x33b)+_0x262a78(0x461)+'ht']||0x23b*0x1+-0x23e6+0x1d*0x137)-(0x201d+0x1b12+-0x3b17));_0x1706d7=(_0x336b1a['clien'+'tX']||0x24fb+-0x21da+-0x3*0x10b)-_0xf57cf1[_0x262a78(0x922)],_0x1c55a3=(_0x336b1a[_0x262a78(0x72d)+'tY']||0x754+-0x19ae*0x1+-0x36*-0x57)-_0xf57cf1[_0x262a78(0xa86)];try{_0x336b1a[_0x262a78(0x585)+'ntDef'+'ault']();}catch(_0x2eba75){}},_0x28ca07=function(_0x5d8bcf){var _0x280b37=_0xc13c71,_0x330f06=('6|2|5'+'|7|0|'+_0x280b37(0x60a)+'|8|1')[_0x280b37(0x4b5)]('|'),_0x5c64cb=-0xcd1+0x1*0x232f+-0x165e;while(!![]){switch(_0x330f06[_0x5c64cb++]){case'0':_0x2dbff9=Math[_0x280b37(0x2fe)](-0xb61*0x3+-0x23b9+0x5d3*0xc,Math[_0x280b37(0x9b0)](_0x3d6075['owSqU'](window[_0x280b37(0x261)+_0x280b37(0x953)+'t']||-0x6bc+-0x15*-0xee+-0xcca*0x1,_0xb49070)-(-0x229d+0x59*-0x4b+-0x2*-0x1e5c),_0x2dbff9));continue;case'1':_0x33e8bf['pos']={'x':_0x54bac2,'y':_0x2dbff9};continue;case'2':var _0x58b430=_0x39e873['offse'+_0x280b37(0xae6)+'h']||0x1e2f+-0x17d5+-0x3ee,_0xb49070=_0x39e873[_0x280b37(0x33b)+'tHeig'+'ht']||0x1f83+0x1116+0x1*-0x2f09;continue;case'3':_0x39e873[_0x280b37(0x113)]['top']=_0x3d6075[_0x280b37(0x5ce)](_0x2dbff9,'px');continue;case'4':_0x39e873[_0x280b37(0x113)]['right']=_0x3d6075[_0x280b37(0x6cc)];continue;case'5':var _0x54bac2=(_0x5d8bcf[_0x280b37(0x72d)+'tX']||0x1d*0xf+-0x1c3c*-0x1+-0x4f*0x61)-_0x1706d7,_0x2dbff9=(_0x5d8bcf[_0x280b37(0x72d)+'tY']||-0xf92*-0x1+-0x1507+0x575)-_0x1c55a3;continue;case'6':if(!_0xe0dae)return;continue;case'7':_0x54bac2=Math[_0x280b37(0x2fe)](0x9dd+0x263f*-0x1+0x1c6a,Math['min'](_0x3d6075[_0x280b37(0x4b2)]((window[_0x280b37(0x261)+_0x280b37(0x7e8)]||0xefa+-0x11d9+0x2df)-_0x58b430,-0x174b+0xa*-0x17f+0x2649),_0x54bac2));continue;case'8':_0x39e873['style']['botto'+'m']=_0x3d6075[_0x280b37(0x6cc)];continue;case'9':_0x39e873[_0x280b37(0x113)][_0x280b37(0x922)]=_0x54bac2+'px';continue;}break;}},_0x313caa=function(){var _0x3c3f36=_0xc13c71;if(_0x3d6075['AscPd'](_0x3d6075[_0x3c3f36(0x5e9)],_0x3d6075['MkacH']))return new _0x46241e(_0x24a20f[_0x3c3f36(0x5eb)+'r'],_0x5a7b1b[_0x3c3f36(0x60c)+'ffset'],_0x5e7647[_0x3c3f36(0x62e)+'ength']);else{if(!_0xe0dae)return;_0xe0dae=![],_0x2550ba[_0x3c3f36(0x113)][_0x3c3f36(0x521)+'r']='grab',_0x3d6075['ADfdY'](_0x923a1b);}};_0x2550ba[_0xc13c71(0x2d2)+'entLi'+'stene'+'r'](_0x3d6075['HcTBk'],_0x1cabf2),window[_0xc13c71(0x2d2)+_0xc13c71(0x2c9)+_0xc13c71(0x22a)+'r'](_0xc13c71(0x3f5)+_0xc13c71(0x6b8),_0x28ca07),window[_0xc13c71(0x2d2)+'entLi'+'stene'+'r'](_0x3d6075[_0xc13c71(0x4b8)],_0x313caa),_0x2550ba[_0xc13c71(0x2d2)+'entLi'+_0xc13c71(0x22a)+'r'](_0x3d6075[_0xc13c71(0x37e)],_0x1cabf2,{'passive':![]}),window[_0xc13c71(0x2d2)+'entLi'+'stene'+'r'](_0xc13c71(0x284)+_0xc13c71(0x6b8),_0x28ca07,{'passive':![]}),window['addEv'+_0xc13c71(0x2c9)+_0xc13c71(0x22a)+'r']('touch'+'end',_0x313caa);}catch(_0xe3c039){}}function _0x3dc92b(){var _0x42d166=_0x27dfe2,_0x9056f4={'LWVjj':function(_0x59a61e,_0x2727fe){return _0x59a61e(_0x2727fe);},'Ffiok':_0x3d6075['zKtrB']};if(_0x33e8bf['built'])return _0x33e8bf['root'];try{var _0x2a2990=_0x3d6075[_0x42d166(0x5d1)]['split']('|'),_0x6870b6=0x3*0x117+-0x1*-0x11d1+-0x1516;while(!![]){switch(_0x2a2990[_0x6870b6++]){case'0':_0x4cb31e['appen'+'dChil'+'d'](_0x3af686);continue;case'1':var _0x22228d=_0x3d6075[_0x42d166(0x5dd)](_0x138f08,_0x42d166(0x1f9),null,_0x43d10e);continue;case'2':if(!document[_0x42d166(0x600)+'ement'+_0x42d166(0x427)]('sakur'+_0x42d166(0x87e)+_0x42d166(0x55d))){var _0x2a051f=document['creat'+'eElem'+'ent']('style');_0x2a051f['id']=_0x42d166(0x23b)+_0x42d166(0x87e)+_0x42d166(0x55d),_0x2a051f[_0x42d166(0xa37)+'onten'+'t']=_0x1cda6a,(document['head']||document[_0x42d166(0x691)+'entEl'+_0x42d166(0x204)])[_0x42d166(0x696)+_0x42d166(0x752)+'d'](_0x2a051f);}continue;case'3':_0x89abf1[_0x42d166(0x696)+_0x42d166(0x752)+'d'](_0x1dbb90);continue;case'4':setInterval(function(){var _0x22f4ba=_0x42d166;try{if(!_0x33e8bf[_0x22f4ba(0x258)])return;var _0x16e55a=_0x2f585b();_0x33e8bf[_0x22f4ba(0x258)][_0x22f4ba(0x113)][_0x22f4ba(0x9dc)+'ty']=_0x33e8bf[_0x22f4ba(0xaea)]?'1':_0x16e55a?'.8':_0x9056f4['Ffiok'],_0x33e8bf[_0x22f4ba(0x258)][_0x22f4ba(0x9ef)]=_0x16e55a?'Sakur'+'a\x20Ski'+_0x22f4ba(0xb29)+_0x22f4ba(0x906)+'sert)':_0x22f4ba(0x319)+'a\x20Ski'+'llWar'+_0x22f4ba(0x3aa)+_0x22f4ba(0x9a1)+_0x22f4ba(0x6e3)+_0x22f4ba(0x11b)+_0x22f4ba(0x797)+_0x22f4ba(0x9e0)+_0x22f4ba(0x46f);}catch(_0x5b4a0d){}},-0x1f58+0x1*-0x1acf+0x8f*0x6d);continue;case'5':_0x89abf1['appen'+'dChil'+'d'](_0x2f6487);continue;case'6':if(!document[_0x42d166(0x802)]||!document['body'][_0x42d166(0x696)+'dChil'+'d'])return null;continue;case'7':_0x22228d[_0x42d166(0x926)+_0x42d166(0x35d)+'er']=function(){var _0x3cfa80=_0x42d166;_0x22228d[_0x3cfa80(0x113)]['opaci'+'ty']='1';};continue;case'8':_0x33e8bf[_0x42d166(0x899)]=!![];continue;case'9':var _0x1dbb90=_0x3d6075['rlkAd'](_0x138f08,_0x42d166(0x1f9),_0x42d166(0x1f6)+'p');continue;case'10':var _0x5c359d=_0x138f08(_0x3d6075['WftXA'],_0x3d6075[_0x42d166(0x18d)],'Sakur'+'a\x20Ski'+_0x42d166(0xb29)+'z');continue;case'11':_0x22228d['onmou'+'selea'+'ve']=function(){var _0x22b920=_0x42d166;_0x22228d['style']['opaci'+'ty']=_0x33e8bf[_0x22b920(0xaea)]?'1':'.5';};continue;case'12':_0x33e8bf[_0x42d166(0x649)]=_0x2f6487;continue;case'13':var _0x3af686=_0x3d6075[_0x42d166(0xa2a)](_0x138f08,'div',_0x42d166(0x8dd)+'b',_0x3d6075['HeObY']);continue;case'14':document[_0x42d166(0x802)][_0x42d166(0x696)+_0x42d166(0x752)+'d'](_0x22228d);continue;case'15':_0x33e8bf['root']=_0x8f036;continue;case'16':var _0x43f6a4=_0x3d6075[_0x42d166(0x279)](_0x138f08,_0x42d166(0x1f9),_0x3d6075['Ikind']);continue;case'17':_0x22228d['oncli'+'ck']=function(_0x181d36){var _0x2b5084=_0x42d166;if(_0x181d36&&_0x181d36[_0x2b5084(0x217)+_0x2b5084(0x1d6)+'ation'])_0x181d36[_0x2b5084(0x217)+_0x2b5084(0x1d6)+_0x2b5084(0x33c)]();_0x25e846(!_0x33e8bf['open']);};continue;case'18':_0x22228d[_0x42d166(0x9ef)]='Sakur'+_0x42d166(0x5e2)+_0x42d166(0xb29)+'z\x20(In'+_0x42d166(0x14c);continue;case'19':var _0x26137c=_0x3d6075['BVGhh'](_0x138f08,_0x42d166(0x1f9),_0x3d6075[_0x42d166(0x291)],_0x42d166(0x31f)+_0x42d166(0x212)+_0x42d166(0x49a)+_0x42d166(0x5f9)+'\x2024\x22>'+'<path'+'\x20d=\x22M'+_0x42d166(0x7c4)+'2\x2012M'+'18\x206\x20'+'6\x2018\x22'+'/></s'+'vg>');continue;case'20':_0x33e8bf[_0x42d166(0x51b)]=_0x5c359d;continue;case'21':var _0x8f036=_0x138f08(_0x3d6075[_0x42d166(0x859)],_0x3d6075[_0x42d166(0x2eb)]);continue;case'22':_0x33e8bf['butto'+'ns']=_0x455d5f;continue;case'23':var _0x89abf1=_0x3d6075['erjKx'](_0x138f08,_0x42d166(0x1f9),'mn-ma'+'in');continue;case'24':_0x3d6075['ckYOh'](_0x529363,_0x33e8bf[_0x42d166(0x3e3)]);continue;case'25':for(var _0x3c13f5=0xc07+-0x70e+-0x4f9;_0x3c13f5<_0x3c747b[_0x42d166(0x827)+'h'];_0x3c13f5++){var _0x417469=_0x3d6075[_0x42d166(0x2e0)]['split']('|'),_0x5cf927=0x159a+0x5d8+0x3*-0x926;while(!![]){switch(_0x417469[_0x5cf927++]){case'0':var _0x4d63c2=_0x138f08(_0x3d6075[_0x42d166(0x2f3)],_0x42d166(0x693)+'b',_0x3d6075[_0x42d166(0x89b)](_0x42d166(0x6a2)+'l>',_0x3223f2['label'])+('</sma'+_0x42d166(0x227)));continue;case'1':_0x4d63c2[_0x42d166(0x9ef)]=_0x3223f2[_0x42d166(0x95c)];continue;case'2':var _0x3223f2=_0x3c747b[_0x3c13f5];continue;case'3':_0x455d5f[_0x3223f2['id']]=_0x4d63c2;continue;case'4':_0x4d63c2['type']=_0x3d6075['VIFuB'];continue;case'5':(function(_0x5276e6){_0x4d63c2['oncli'+'ck']=function(){_0x9056f4['LWVjj'](_0x529363,_0x5276e6);};}(_0x3223f2['id']));continue;case'6':_0x43f6a4['appen'+_0x42d166(0x752)+'d'](_0x4d63c2);continue;}break;}}continue;case'26':_0x26137c[_0x42d166(0x14d)+'ck']=function(){_0x25e846(![]);};continue;case'27':var _0x2f6487=_0x138f08(_0x3d6075[_0x42d166(0x859)],'mn-co'+'ls');continue;case'28':return _0x8f036;case'29':var _0xe3138d=_0x3d6075[_0x42d166(0xa2a)](_0x138f08,_0x42d166(0x1f9),'mn-lo'+'go',_0x325595);continue;case'30':document['body'][_0x42d166(0x696)+_0x42d166(0x752)+'d'](_0x8f036);continue;case'31':_0x8f036['id']=_0x42d166(0x23b)+_0x42d166(0x87e)+_0x42d166(0x463)+'t';continue;case'32':_0x43f6a4['appen'+'dChil'+'d'](_0xe3138d);continue;case'33':_0x22228d['id']=_0x42d166(0x23b)+_0x42d166(0x37f)+'al';continue;case'34':_0x8f036['appen'+_0x42d166(0x752)+'d'](_0x43f6a4);continue;case'35':var _0x4cb31e=_0x138f08(_0x42d166(0x1f9),_0x3d6075['LbUqK']);continue;case'36':_0x4cb31e[_0x42d166(0x696)+_0x42d166(0x752)+'d'](_0x5c359d);continue;case'37':_0x4489c5();continue;case'38':_0x318940();continue;case'39':_0x8f036[_0x42d166(0x696)+_0x42d166(0x752)+'d'](_0x89abf1);continue;case'40':_0x1dbb90[_0x42d166(0x696)+_0x42d166(0x752)+'d'](_0x4cb31e);continue;case'41':_0x33e8bf['sub']=_0x3af686;continue;case'42':var _0x455d5f={};continue;case'43':_0x1dbb90['appen'+'dChil'+'d'](_0x26137c);continue;case'44':_0x3d6075[_0x42d166(0x868)](_0x173ea3,_0x8f036,_0x1dbb90);continue;case'45':_0x33e8bf[_0x42d166(0x258)]=_0x22228d;continue;}break;}}catch(_0x449123){if(_0x3d6075['LhXOv']!=='aIepV')_0x965ac8['clipb'+'oard'][_0x42d166(0x215)+_0x42d166(0x9af)](_0x522d47)['then'](_0x15f839,function(){_0x396057();});else return console[_0x42d166(0x1d3)](_0x3d6075['jDgbY'],_0x3d6075[_0x42d166(0x544)](_0x3d6075['hRovB'],_0x55abd0),_0x449123),null;}}function _0x529363(_0x19d0e9){var _0x22bab1=_0x27dfe2;_0x33e8bf[_0x22bab1(0x3e3)]=_0x19d0e9,_0x33e8bf[_0x22bab1(0x7b4)]=[];if(!_0x33e8bf[_0x22bab1(0x649)])return;var _0x3808be=null;for(var _0x5c128b=-0x17*0x1aa+-0x8b*-0x16+-0x4*-0x695;_0x3d6075['BWgdJ'](_0x5c128b,_0x3c747b['lengt'+'h']);_0x5c128b++)if(_0x3c747b[_0x5c128b]['id']===_0x19d0e9)_0x3808be=_0x3c747b[_0x5c128b];_0x33e8bf[_0x22bab1(0x51b)]['textC'+_0x22bab1(0xa40)+'t']='Sakur'+'a\x20Ski'+_0x22bab1(0xb29)+_0x22bab1(0x2e7)+(_0x3808be&&_0x3808be[_0x22bab1(0x95c)]||'?');for(var _0x47fc24 in _0x33e8bf[_0x22bab1(0x198)+'ns']){if(_0x33e8bf[_0x22bab1(0x198)+'ns'][_0x47fc24][_0x22bab1(0x738)+_0x22bab1(0x5a7)])_0x33e8bf[_0x22bab1(0x198)+'ns'][_0x47fc24]['class'+_0x22bab1(0xaef)]=_0x3d6075[_0x22bab1(0x3c6)]('mn-ta'+'b',_0x3d6075['hZqID'](_0x47fc24,_0x19d0e9)?'\x20acti'+'ve':'');}var _0x10b027=[];try{if(_0x22bab1(0x82f)!==_0x22bab1(0x92b))_0x10b027=_0x3d6075[_0x22bab1(0x2d0)](_0x57cf6c,_0x19d0e9);else{if(_0x401225&&_0x30ca41[_0x22bab1(0x5eb)+'r']&&_0x3a0dcc['buffe'+'r'][_0x22bab1(0x62e)+_0x22bab1(0x8b7)])return _0x19b9a0['sourc'+'e']=_0x57bc73['sourc'+'e']||_0x22bab1(0x756)+_0x22bab1(0x676)+_0x22bab1(0x6e6)+_0x22bab1(0x4d0)+_0x22bab1(0x23c)+'ory',new _0x33e542(_0x55ae44[_0x22bab1(0x5eb)+'r']);}}catch(_0x231cde){_0x10b027=[];}while(_0x33e8bf[_0x22bab1(0x649)][_0x22bab1(0x7ee)+_0x22bab1(0x9a8)])_0x33e8bf[_0x22bab1(0x649)]['remov'+'eChil'+'d'](_0x33e8bf[_0x22bab1(0x649)]['first'+'Child']);for(var _0x62e52e=-0x6d4+0x9a1*-0x1+0x1075;_0x62e52e<_0x10b027['lengt'+'h'];_0x62e52e++)_0x33e8bf[_0x22bab1(0x649)]['appen'+_0x22bab1(0x752)+'d'](_0x10b027[_0x62e52e]);}function _0x25e846(_0x561fd9){var _0x3c3a67=_0x27dfe2,_0x4cef6d={'sFfcF':'insta'+'ntiat'+'e().e'+_0x3c3a67(0x4d0)+'s.mem'+'ory','pRCXz':function(_0x3a7308){return _0x3a7308();}};if(_0x3d6075[_0x3c3a67(0x42b)](_0x3c3a67(0x5df),_0x3c3a67(0x5ec))){_0x33e8bf['open']=!!_0x561fd9;var _0x552bdb=_0x3dc92b();if(!_0x552bdb)return;_0x552bdb[_0x3c3a67(0x738)+'Name']='mn-pa'+_0x3c3a67(0x147)+(_0x33e8bf['open']?_0x3c3a67(0x4cc)+'n':'');if(_0x33e8bf[_0x3c3a67(0x258)])_0x33e8bf[_0x3c3a67(0x258)][_0x3c3a67(0x113)]['opaci'+'ty']=_0x33e8bf[_0x3c3a67(0xaea)]?'1':'.5';if(_0x33e8bf['open']){if(_0x3d6075[_0x3c3a67(0x5be)](_0x3d6075[_0x3c3a67(0x26a)],_0x3c3a67(0x658))){_0x529363(_0x33e8bf[_0x3c3a67(0x3e3)]);try{if(_0x3d6075[_0x3c3a67(0xa73)]!==_0x3d6075['kfQHZ']){var _0x31dfd0=window[_0x3c3a67(0x261)+_0x3c3a67(0x953)+'t']||0x8*0x269+-0x1084+-0x17*-0x4;if(_0x3d6075[_0x3c3a67(0x1ed)](_0x31dfd0,-0x1*0x26dd+0x10a2*-0x2+-0x4a8d*-0x1))_0x3d6075['jcoXN'](_0x16db32,![]);}else return _0x265c74['sourc'+'e']=_0x3b3f9a[_0x3c3a67(0x948)+'e']||_0x4cef6d['sFfcF'],new _0x2ad089(_0x20eea1[_0x3c3a67(0x5eb)+'r']);}catch(_0x17e2aa){}}else{if(_0x27c948)return _0x5256c7;try{var _0x6856a8=(_0x3c3a67(0x382)+_0x3c3a67(0x85d)+_0x3c3a67(0x9ae)+_0x3c3a67(0x482))[_0x3c3a67(0x4b5)]('|'),_0x55ae46=-0x20a3*0x1+0x8d3+0xc*0x1fc;while(!![]){switch(_0x6856a8[_0x55ae46++]){case'0':_0x47ea57['body'][_0x3c3a67(0x696)+_0x3c3a67(0x752)+'d'](_0x5a0f55);continue;case'1':var _0x366a9e={'cv':{'getContext':function(){return null;}},'el':_0x5a0f55};continue;case'2':_0x4da695={'el':_0x5a0f55,'cv':_0x5a0f55[_0x3c3a67(0xace)+'Selec'+'tor']('#saku'+'ra-es'+_0x3c3a67(0xb1b)),'lg':_0x5a0f55['query'+'Selec'+_0x3c3a67(0x400)](_0x3c3a67(0x7d9)+'ra-es'+_0x3c3a67(0x2b1))};continue;case'3':if(!_0x5875a9['cv']||!_0x286081['cv']['getCo'+_0x3c3a67(0x659)])_0x426ebf=_0x366a9e;continue;case'4':var _0x5a0f55=_0x986bac[_0x3c3a67(0x863)+_0x3c3a67(0x32f)+'ent'](_0x3d6075['WftXA']);continue;case'5':return _0x5ed35a;case'6':_0x5a0f55['id']=_0x3d6075[_0x3c3a67(0x665)];continue;case'7':if(!_0x1c2ef2['body']||!_0x12e0ee['body'][_0x3c3a67(0x696)+'dChil'+'d'])return null;continue;case'8':_0x5a0f55[_0x3c3a67(0x261)+'HTML']=_0x3c3a67(0x1ca)+'as\x20id'+'=\x22sak'+_0x3c3a67(0xa06)+'sp-cv'+'\x22\x20wid'+_0x3c3a67(0x45c)+_0x3c3a67(0xaa8)+'eight'+_0x3c3a67(0x29d)+_0x3c3a67(0x434)+'le=\x22d'+'ispla'+'y:blo'+'ck\x22><'+_0x3c3a67(0x76c)+_0x3c3a67(0x7b1)+_0x3d6075[_0x3c3a67(0x8a9)];continue;case'9':_0x5a0f55[_0x3c3a67(0x113)]['cssTe'+'xt']=_0x3d6075['UbbjO'](_0x3d6075[_0x3c3a67(0x2ac)](_0x3c3a67(0xaba)+_0x3c3a67(0xab1)+_0x3c3a67(0x3cb)+_0x3c3a67(0x153)+_0x3c3a67(0xa78)+';top:'+'46px;'+_0x3c3a67(0x142)+'ex:21'+'47483'+_0x3c3a67(0xa79)+'ointe'+'r-eve'+_0x3c3a67(0x6f0)+_0x3c3a67(0x237),_0x3c3a67(0x21e)+_0x3c3a67(0x637)+_0x3c3a67(0x662)+_0x3c3a67(0x28f)+'2,29,'+'.72);'+_0x3c3a67(0xac8)+'r:1px'+_0x3c3a67(0x701)+_0x3c3a67(0x10f)+'a(255'+_0x3c3a67(0x966)+_0x3c3a67(0x8a0)+_0x3c3a67(0x3d8)+'rder-'+_0x3c3a67(0x9ce)+'s:10p'+'x;')+_0x3d6075['DlFWZ'],_0x3c3a67(0x871)+_0x3c3a67(0x48c)+_0x3c3a67(0x346)+_0x3c3a67(0x3af)+_0x3c3a67(0x475)+_0x3c3a67(0x871)+'selec'+_0x3c3a67(0x346)+'e;');continue;}break;}}catch(_0x390563){return null;}}}}else _0x241490[_0x3c3a67(0x620)]=_0x226c58,_0x4cef6d[_0x3c3a67(0x499)](_0x54cc20);}function _0x2acd60(){var _0x63fd64=_0x27dfe2,_0x1e184c={'aCxmH':function(_0x2d8015,_0x4bf00e){return _0x2d8015!==_0x4bf00e;},'gRKhz':function(_0x45cd4b,_0x2bd4da){var _0x5e7963=_0x4730;return _0x3d6075[_0x5e7963(0x575)](_0x45cd4b,_0x2bd4da);}};if('WMRjo'===_0x3d6075['rJSKa']){if(_0x4bf3df['paren'+'t']&&_0x1e184c[_0x63fd64(0x74b)](_0x1f98df['paren'+'t'],_0x176083))_0xa3f76[_0x63fd64(0x6f5)+'t']['postM'+_0x63fd64(0x97a)+'e'](_0x512f22,'*');if(_0x5f0902[_0x63fd64(0xa86)]&&_0x1e184c[_0x63fd64(0x74b)](_0xca1678['top'],_0x1540c3))_0x34f4b2[_0x63fd64(0xa86)][_0x63fd64(0x725)+_0x63fd64(0x97a)+'e'](_0x8a8ede,'*');}else{if(!_0x33e8bf[_0x63fd64(0xaea)]||!_0x33e8bf[_0x63fd64(0x899)])return;try{if('dWxAX'===_0x3d6075[_0x63fd64(0x48a)]){for(var _0x5c1049=0x618+-0x7cb+0x1b3;_0x5c1049<_0x33e8bf['syncs'][_0x63fd64(0x827)+'h'];_0x5c1049++){try{_0x33e8bf[_0x63fd64(0x7b4)][_0x5c1049]();}catch(_0x3144e4){}}var _0x220ad0=_0x2fd1ca;_0x33e8bf[_0x63fd64(0x9c6)][_0x63fd64(0xa37)+_0x63fd64(0xa40)+'t']=_0x220ad0?_0x3d6075['SVBez'](_0x3d6075[_0x63fd64(0x7a1)](_0x3d6075['brurC'](_0x3d6075[_0x63fd64(0x675)](_0x3d6075[_0x63fd64(0x3f0)](_0x3d6075[_0x63fd64(0x46e)](_0x3d6075[_0x63fd64(0xa52)](_0x3d6075['pvvIk']('v',_0x220ad0['versi'+'on']),_0x63fd64(0x55c)+'hooks'+'\x20'),_0x220ad0['hooks'+'Appli'+'ed']),'/'),_0x220ad0['hooks'+_0x63fd64(0xaf4)])+_0x3d6075['YSXCd'],_0x220ad0[_0x63fd64(0x720)]&&_0x220ad0[_0x63fd64(0x720)]['playe'+_0x63fd64(0x25e)+'t']||-0x3*0x1b1+-0x7d4+-0x16f*-0x9),_0x63fd64(0x55c)+_0x63fd64(0xa60)),_0x220ad0[_0x63fd64(0x13d)+_0x63fd64(0x65b)]&&_0x220ad0[_0x63fd64(0x13d)+_0x63fd64(0x65b)]['captu'+_0x63fd64(0x417)]?_0x3d6075['cMwdP'](Math['round'](_0x3d6075['gQaDK'](_0x220ad0['wasmM'+_0x63fd64(0x65b)][_0x63fd64(0x133)],-0x1d640+-0x22eba*0xd+0x1c6fd*0x1a)),'MB'):'-'):'waiti'+_0x63fd64(0x83d)+_0x63fd64(0x149)+_0x63fd64(0x918)+_0x63fd64(0x146)+'ort…';var _0x15e9bf=_0x33e8bf[_0x63fd64(0x649)]['query'+_0x63fd64(0x727)+_0x63fd64(0x833)+'l']?_0x33e8bf['cols'][_0x63fd64(0xace)+'Selec'+_0x63fd64(0x833)+'l'](_0x3d6075['Wztbb']):[];for(var _0x4cca76=-0x98f*0x1+-0x2669+-0x266*-0x14;_0x3d6075[_0x63fd64(0x421)](_0x4cca76,_0x15e9bf['lengt'+'h']);_0x4cca76++){if('ftvIy'!==_0x3d6075['OSbJx']){var _0x170af2=_0x15e9bf[_0x4cca76]['datas'+'et']['k'],_0x125c4f='';if(_0x3d6075['vXvfq'](_0x170af2,_0x63fd64(0x67f)+'ON'))_0x125c4f=_0x220ad0?_0x220ad0[_0x63fd64(0x7ac)+'on']:'-';else{if(_0x170af2===_0x63fd64(0x8fb)+_0x63fd64(0x6c7)+'regis'+'tered')_0x125c4f=_0x220ad0?_0x3d6075[_0x63fd64(0x363)](_0x220ad0['hooks'+_0x63fd64(0x40e)+'ed'],'\x20/\x20')+_0x220ad0[_0x63fd64(0x6d0)+'Regis'+_0x63fd64(0x257)+_0x63fd64(0x5d4)]:'-';else{if(_0x3d6075[_0x63fd64(0x98c)](_0x170af2,_0x3d6075['ugyQj']))_0x125c4f=_0x220ad0&&_0x220ad0['wasmM'+'emory']&&_0x220ad0[_0x63fd64(0x13d)+_0x63fd64(0x65b)]['captu'+'red']?Math[_0x63fd64(0x637)](_0x3d6075[_0x63fd64(0x8ae)](_0x220ad0[_0x63fd64(0x13d)+_0x63fd64(0x65b)]['bytes'],0x882e*0x39+0x1*-0x1e0276+0x1*0xfb038))+(_0x63fd64(0x472)+'\x20')+_0x220ad0[_0x63fd64(0x13d)+'emory'][_0x63fd64(0x3ff)]+'ms':'-';else{if(_0x3d6075[_0x63fd64(0x53e)](_0x170af2,'Photo'+_0x63fd64(0x1e9)+_0x63fd64(0x170)+'nc'))_0x125c4f=_0x220ad0&&_0x220ad0[_0x63fd64(0x720)]?String(_0x220ad0[_0x63fd64(0x720)]['playe'+'rCoun'+'t']):'-';else{if(_0x3d6075[_0x63fd64(0x64b)](_0x170af2,_0x63fd64(0x2e2)+'one\x20b'+_0x63fd64(0x3ae)+'u'))_0x125c4f=_0x220ad0&&_0x220ad0['esp']?String(_0x220ad0['esp'][_0x63fd64(0x299)+_0x63fd64(0x786)]):'-';else{if(_0x3d6075[_0x63fd64(0xb44)](_0x170af2,_0x63fd64(0x530)+_0x63fd64(0x3f1)+'ve\x20ma'+'nager'))_0x125c4f=_0x220ad0&&_0x220ad0[_0x63fd64(0x720)]&&_0x220ad0[_0x63fd64(0x720)][_0x63fd64(0x20e)+'a']?_0x3d6075[_0x63fd64(0x935)](_0x3d6075[_0x63fd64(0x3fa)](_0x220ad0['esp'][_0x63fd64(0x20e)+'a'],'\x20('),_0x220ad0['esp']['camer'+_0x63fd64(0x79c)])+')':'-';else{if(_0x170af2===_0x63fd64(0x502)+'ntrol'+_0x63fd64(0x39f)+_0x63fd64(0x2fd))_0x125c4f=_0x220ad0&&_0x220ad0['local']&&_0x220ad0[_0x63fd64(0xb33)]['feet']?_0x220ad0[_0x63fd64(0xb33)][_0x63fd64(0x9a6)][_0x63fd64(0x456)](function(_0x2f48a7){var _0x4eb17e=_0x63fd64;return Math['round'](_0x1e184c[_0x4eb17e(0x25a)](_0x2f48a7,0x1ed3*-0x1+-0x1b22+-0x47d*-0xd))/(-0x1b*-0x79+-0x1030+0x3d1);})['join']('\x20\x20'):'-';else{if(_0x170af2==='+0x29'+'8')_0x125c4f=_0x220ad0&&_0x220ad0[_0x63fd64(0xb33)]&&_0x220ad0['local'][_0x63fd64(0xa3b)]?_0x220ad0[_0x63fd64(0xb33)][_0x63fd64(0xa3b)][_0x63fd64(0x456)](function(_0x177f70){return Math['round'](_0x177f70*(0xce*0x2b+0x8*-0x4c3+-0x8e*-0x7))/(-0x2576+0x6d+0x256d);})['join']('\x20\x20'):'-';else{var _0x3752df=_0x170af2[_0x63fd64(0x4b5)]('+');_0x125c4f=_0x3d6075['ILIHR'](_0x121a06,_0x220ad0,_0x3752df[0x2*0x28d+0xa99+0x1*-0xfb3]['index'+'Of']('Healt'+'h')===0x3b*0x9b+0x4*-0x7f6+-0x14b*0x3?'Healt'+'hScri'+'pt':_0x3d6075[_0x63fd64(0x664)],parseInt(_0x3752df[-0x18b5+-0x581*0x1+0x1e37],-0x40*-0x84+0x13bc+-0x34ac));}}}}}}}}if(_0x125c4f!==_0x15e9bf[_0x4cca76]['textC'+_0x63fd64(0xa40)+'t'])_0x15e9bf[_0x4cca76]['textC'+'onten'+'t']=_0x125c4f;}else{var _0x465f42=_0x219c11['getIt'+'em'](_0x5bd631);if(_0x465f42)_0x5c3ecd['fov']=_0x1b04a5['min'](-0x1984+-0x2*-0xac9+0x47e,_0x556452[_0x63fd64(0x2fe)](-0x4a8+-0x1a11+0x5*0x62b,_0x3d6075['mAzKS'](_0x262a00,_0x465f42)||0x8d0+-0x7*0x362+0xf38));}}}else{var _0x15645c=_0x329e00[_0x63fd64(0x5e6)+_0x63fd64(0x220)+'dkit'][_0x63fd64(0x508)+'me'];_0x15645c[_0x63fd64(0x28b)+'uraTa'+'g']=_0x3d6075[_0x63fd64(0x88f)](_0x349c08+':',_0x4aeca9[_0x63fd64(0xb40)+'m']()['toStr'+'ing'](0x2*0x108e+-0x67*-0x8+-0x2430)['slice'](-0x2604+0xa9d*0x1+0x1*0x1b69,0xdb7+0x1fe8+0x7*-0x683)),_0x1c1469=_0x15645c[_0x63fd64(0x28b)+'uraTa'+'g'];}}catch(_0x1c6375){}}}function _0x12d4c0(){var _0x506891=_0x27dfe2,_0x43d95e=_0x3d6075[_0x506891(0x5de)][_0x506891(0x4b5)]('|'),_0x842d26=-0x993+0x222b+-0x1898;while(!![]){switch(_0x43d95e[_0x842d26++]){case'0':if(!_0x3d9f75)return null;continue;case'1':var _0x24b75a=_0x2100b3(_0x5a05a0[_0x506891(0x7ff)],0x23ae+-0x25aa+0x494,-0x1*-0x270d+-0x1*0x2275+-0x495*0x1);continue;case'2':var _0x5a05a0=_0x417ed9[_0x506891(0x502)+_0x506891(0x437)+_0x506891(0xb28)];continue;case'3':return{'ptr':_0x5a05a0['ptr'],'feet':_0x3d9f75,'eye':_0x24b75a,'reach':Math[_0x506891(0x377)](_0x3d9f75[0x25c9+0x1*-0x1c7b+-0x94e]*_0x3d9f75[0x1a97*0x1+0x2*0xeda+0x1*-0x384b]+_0x3d9f75[-0x107*-0x10+0x7d9+-0xb*0x235]*_0x3d9f75[-0x17a1+0x4a7+0x3c*0x51]),'pitch':_0x32457e(_0x3d6075['AwOHS'](_0x5a05a0[_0x506891(0x7ff)],0x1cfb+-0xa*-0xd5+-0x23e1),_0x506891(0x729)),'yaw':_0x32457e(_0x3d6075[_0x506891(0xafd)](_0x5a05a0['ptr'],-0xc41+0x1*0x29+-0xd88*-0x1),_0x3d6075['OqTJf'])};case'4':var _0x3d9f75=_0x3d6075['aDiCA'](_0x2100b3,_0x5a05a0[_0x506891(0x7ff)],-0x1cb3*-0x1+-0x1e09+0x43a*0x1,-0x3*0x26b+-0x1*0x25de+0x2d22);continue;case'5':if(!_0x5a05a0||!_0x5a05a0['ptr'])return null;continue;}break;}}function _0x135879(){var _0x2f242e=_0x27dfe2,_0x3258f0=_0x3d6075[_0x2f242e(0x477)](_0x12d4c0),_0x16d307=[],_0x30a51c=_0x3ae231[_0x2f242e(0x11c)+'nNetw'+_0x2f242e(0x170)+'nc']||{},_0x2406a4=Object['keys'](_0x30a51c);for(var _0x26a6d1=-0x44*-0x29+-0x354+-0x790;_0x3d6075[_0x2f242e(0x934)](_0x26a6d1,_0x2406a4[_0x2f242e(0x827)+'h'])&&_0x26a6d1<-0x175a+-0xb3f+-0x1*-0x22b9;_0x26a6d1++){var _0x2348a0=_0x30a51c[_0x2406a4[_0x26a6d1]],_0x4f31aa=_0x2100b3(_0x2348a0[_0x2f242e(0x7ff)],-0x637+-0x3f5*0x3+0x124a,-0x736*-0x4+0x14fe+-0x5*0x9f7);if(!_0x4f31aa||_0x3d6075[_0x2f242e(0x98c)](_0x4f31aa[-0x1*-0xe57+0x1b9e+-0x29f5],0x2*0x10bd+0x36b*-0x5+-0x1063)&&_0x4f31aa[0xb5*0xd+-0x60c+0xc*-0x43]===-0x1188+-0x493*-0x7+-0x1*0xe7d&&_0x3d6075['cwxcr'](_0x4f31aa[-0x2375+0x6bb*0x3+0xf46],0xf*-0xdf+0x108a+-0x379))continue;var _0x495555={'ptr':_0x2348a0[_0x2f242e(0x7ff)],'x':_0x4f31aa[-0x2452*0x1+-0x9ff+-0xa7*-0x47],'y':_0x4f31aa[-0x1*-0x1b31+-0x68*0x21+0x24*-0x62],'z':_0x4f31aa[0x552*0x5+-0x76e*0x3+-0x44e],'team':_0x3d6075['HMSdB'](_0x32457e,_0x2348a0['ptr']+(-0x255*-0xa+-0x1813*-0x1+-0x2f0d),'i32'),'localFlag':_0x3d6075[_0x2f242e(0xaed)](_0x32457e,_0x3d6075[_0x2f242e(0xaec)](_0x2348a0[_0x2f242e(0x7ff)],-0x2d3*-0x7+-0x1*0x1b46+0x7fd),_0x3d6075['pWqTd'])};if(_0x3258f0){var _0x302b7c=_0x3d6075[_0x2f242e(0x58c)](_0x4f31aa[-0x169f+0xf9c*0x1+-0x1*-0x703],_0x3258f0[_0x2f242e(0x9a6)][0xf44+-0x21e0+0x129c]),_0x540460=_0x4f31aa[0x2*0x83+0x642+-0x746]-_0x3258f0[_0x2f242e(0x9a6)][-0xec2+0x2003+0x5*-0x373];_0x495555['d']=Math['sqrt'](_0x3d6075['uCakI'](_0x302b7c,_0x302b7c)+_0x540460*_0x540460),_0x495555[_0x2f242e(0x9cd)+'ng']=_0x3d6075['NgocH'](Math[_0x2f242e(0x1cf)](_0x302b7c,_0x540460),0x218f+0x216f+-0x424a*0x1)/Math['PI'];}_0x16d307[_0x2f242e(0x82d)](_0x495555);}return{'me':_0x3258f0,'list':_0x16d307};}var _0x4b4701=null;function _0x3c9400(){var _0x2b86d3=_0x27dfe2;if(_0x4b4701)return _0x4b4701;try{var _0x3c370a=_0x3d6075['NOQda'][_0x2b86d3(0x4b5)]('|'),_0x283a8c=0x1d*0x6+-0x19*0x12f+0x1ce9;while(!![]){switch(_0x3c370a[_0x283a8c++]){case'0':var _0x52ad90=document['creat'+'eElem'+'ent']('div');continue;case'1':_0x4b4701={'el':_0x52ad90,'cv':_0x52ad90[_0x2b86d3(0xace)+_0x2b86d3(0x727)+_0x2b86d3(0x400)](_0x2b86d3(0x7d9)+'ra-es'+'p-cv'),'lg':_0x52ad90[_0x2b86d3(0xace)+_0x2b86d3(0x727)+'tor']('#saku'+'ra-es'+_0x2b86d3(0x2b1))};continue;case'2':_0x52ad90['id']=_0x2b86d3(0x23b)+_0x2b86d3(0x1de);continue;case'3':_0x52ad90[_0x2b86d3(0x261)+'HTML']=_0x2b86d3(0x1ca)+_0x2b86d3(0x4da)+'=\x22sak'+'ura-e'+_0x2b86d3(0x19f)+_0x2b86d3(0x5c5)+'th=\x221'+'60\x22\x20h'+'eight'+'=\x22160'+'\x22\x20sty'+'le=\x22d'+_0x2b86d3(0x768)+_0x2b86d3(0xa09)+'ck\x22><'+_0x2b86d3(0x76c)+_0x2b86d3(0x7b1)+(_0x2b86d3(0x6c3)+'id=\x22s'+'akura'+'-esp-'+'lg\x22\x20s'+_0x2b86d3(0x4ec)+'\x22text'+_0x2b86d3(0x646)+_0x2b86d3(0x298)+'ter\x22>'+_0x2b86d3(0x697)+'>');continue;case'4':var _0x338745={'cv':{'getContext':function(){return null;}},'el':_0x52ad90};continue;case'5':return _0x4b4701;case'6':if(!_0x4b4701['cv']||!_0x4b4701['cv']['getCo'+_0x2b86d3(0x659)])_0x4b4701=_0x338745;continue;case'7':if(!document[_0x2b86d3(0x802)]||!document[_0x2b86d3(0x802)]['appen'+_0x2b86d3(0x752)+'d'])return null;continue;case'8':document['body'][_0x2b86d3(0x696)+'dChil'+'d'](_0x52ad90);continue;case'9':_0x52ad90['style'][_0x2b86d3(0x930)+'xt']=_0x3d6075[_0x2b86d3(0x7b3)](_0x3d6075['vnjoM'](_0x3d6075['bbiZu'],_0x2b86d3(0x21e)+'round'+_0x2b86d3(0x662)+'(21,1'+'2,29,'+_0x2b86d3(0xa95)+_0x2b86d3(0xac8)+_0x2b86d3(0x8e3)+'\x20soli'+_0x2b86d3(0x10f)+_0x2b86d3(0x556)+_0x2b86d3(0x966)+'177,.'+'4);bo'+'rder-'+'radiu'+'s:10p'+'x;'),_0x3d6075[_0x2b86d3(0x236)])+(_0x2b86d3(0x871)+'selec'+_0x2b86d3(0x346)+'e;-we'+'bkit-'+_0x2b86d3(0x871)+'selec'+'t:non'+'e;');continue;}break;}}catch(_0x291c13){return null;}}var _0x31eff5=null;function _0x58a2bf(){var _0x3eda49=_0x27dfe2;if(_0x31eff5)return _0x31eff5;try{var _0x1919f5=('4|1|5'+'|2|6|'+_0x3eda49(0x90d))[_0x3eda49(0x4b5)]('|'),_0x5212bf=0x733+-0x1021+0x8ee;while(!![]){switch(_0x1919f5[_0x5212bf++]){case'0':return _0x31eff5;case'1':var _0x6c988=document[_0x3eda49(0x863)+'eElem'+_0x3eda49(0x796)](_0x3d6075['TLudx']);continue;case'2':_0x6c988[_0x3eda49(0x113)]['cssTe'+'xt']=_0x3d6075[_0x3eda49(0xa3e)];continue;case'3':_0x31eff5={'cv':_0x6c988};continue;case'4':if(!document[_0x3eda49(0x802)]||!document['body'][_0x3eda49(0x696)+_0x3eda49(0x752)+'d'])return null;continue;case'5':_0x6c988['id']=_0x3d6075['ACqEI'];continue;case'6':document[_0x3eda49(0x802)][_0x3eda49(0x696)+_0x3eda49(0x752)+'d'](_0x6c988);continue;}break;}}catch(_0x2246d5){return null;}}function _0x416c31(_0x150fe0){var _0x14606b=_0x27dfe2;try{var _0x58976e=Math[_0x14606b(0x2fe)](0x1f*-0xfd+-0x12a7+0x314b,window['inner'+_0x14606b(0x7e8)]||document[_0x14606b(0x691)+_0x14606b(0xac9)+_0x14606b(0x204)][_0x14606b(0x72d)+'tWidt'+'h']||0x5*-0x2e9+-0x1007+-0xce*-0x26),_0xfbabc1=Math['max'](-0x18b3+-0xf97+0x284b,window['inner'+_0x14606b(0x953)+'t']||document[_0x14606b(0x691)+_0x14606b(0xac9)+_0x14606b(0x204)][_0x14606b(0x72d)+_0x14606b(0x461)+'ht']||-0xd75+0xa3f+0x336);return(_0x3d6075[_0x14606b(0xad3)](_0x150fe0['cv'][_0x14606b(0x408)],_0x58976e)||_0x3d6075[_0x14606b(0xac4)](_0x150fe0['cv'][_0x14606b(0xa84)+'t'],_0xfbabc1))&&(_0x150fe0['cv'][_0x14606b(0x408)]=_0x58976e,_0x150fe0['cv']['heigh'+'t']=_0xfbabc1),{'w':_0x58976e,'h':_0xfbabc1};}catch(_0x3529bb){return{'w':0x0,'h':0x0};}}function _0x280e54(_0xf3bdbe){var _0xbf7e93=_0x27dfe2,_0x1b522c={'lYsue':function(_0x51cb57,_0x29a54c){var _0x9a082=_0x4730;return _0x3d6075[_0x9a082(0xa1b)](_0x51cb57,_0x29a54c);}},_0x3346e3=_0x31eff5;if(!_0x3346e3)return;var _0x5dca0e=_0x3346e3['cv']['getCo'+_0xbf7e93(0x659)]&&_0x3346e3['cv'][_0xbf7e93(0x7bf)+_0xbf7e93(0x659)]('2d');if(!_0x5dca0e)return;var _0x18ebfe=_0x416c31(_0x3346e3);_0x5dca0e['clear'+_0xbf7e93(0x27b)](-0xb98+-0x2*0x50c+0x15b0,0x1474+-0xa33+-0xa41,_0x18ebfe['w'],_0x18ebfe['h']);if(!_0xcd75ed['boxes']||!_0xf3bdbe||!_0xf3bdbe['me'])return;var _0x1c80b6=_0xf3bdbe['me'],_0x5ddf1e=null,_0x892bd1=_0x3ae231[_0xbf7e93(0x11c)+_0xbf7e93(0x1e9)+_0xbf7e93(0x170)+'nc']||{},_0x224fa5=Object[_0xbf7e93(0x4ea)](_0x892bd1);for(var _0x1acfd8=0x1219*-0x2+-0x4af*0x8+0x49aa;_0x1acfd8<_0x224fa5['lengt'+'h'];_0x1acfd8++){var _0x3d5979=_0x2100b3(_0x892bd1[_0x224fa5[_0x1acfd8]]['ptr'],0x20d3+0x1*0x1115+-0x31b4,-0x16d8+-0x20*0x25+-0x3ed*-0x7);if(_0x3d5979&&_0x3d5979[-0xa0a+0x57*0x1b+0xdd]===0xf83*0x1+-0x1c7*-0xf+-0x2*0x1516&&_0x3d5979[-0x44c*-0x6+-0xa20+-0xfa7]===-0x28b+0x1*0x1136+-0xeab&&_0x3d5979[-0x27f+0x12b2*0x2+-0x22e3]===0x1f46+-0xdab+-0x1*0x119b){if(_0x3d6075['iLzQf']!==_0x3d6075[_0xbf7e93(0x4af)]){_0x5ddf1e=_0x3d6075['wqpLv'](_0x32457e,_0x892bd1[_0x224fa5[_0x1acfd8]][_0xbf7e93(0x7ff)]+(-0x1*0x1a4a+0x1b3*0x1+0x18ef),_0xbf7e93(0x4b4));break;}else{var _0x296601=_0x1b522c[_0xbf7e93(0x97b)](_0x6d605,'v2')?-0x2042+-0x19b5*-0x1+-0x1*-0x68f:_0x158426==='v3'?0x11*-0x107+0xf*0x235+-0xfa1:0x7e5*0x1+-0x2b+0x292*-0x3,_0xe8c8da=_0xe2c456(_0x4c91f5[_0xbf7e93(0x7ff)],_0x282cfe,_0x296601);_0xe8c8da&&(_0x1b58bd['xyz']=_0xe8c8da,_0x3f543f['v']=_0xe8c8da[-0x905*-0x3+-0x1b*0xe9+-0x3*0xd4]);}}}for(var _0x2bbf24=-0x1ea4+-0x6b*-0x13+0x791*0x3;_0x2bbf24<_0xf3bdbe[_0xbf7e93(0x77a)][_0xbf7e93(0x827)+'h'];_0x2bbf24++){var _0x8e2f65=_0xf3bdbe[_0xbf7e93(0x77a)][_0x2bbf24],_0x144288=_0x5ddf1e!==null&&_0x8e2f65[_0xbf7e93(0xafb)]===_0x5ddf1e,_0x1e695c=_0x1642df(_0x1c80b6[_0xbf7e93(0xa3b)],[_0x8e2f65['x'],_0x8e2f65['y']-(-0x4*0x233+-0x4*0x16f+0xe89),_0x8e2f65['z']],_0x18ebfe['w'],_0x18ebfe['h']),_0x38e907=_0x1642df(_0x1c80b6[_0xbf7e93(0xa3b)],[_0x8e2f65['x'],_0x8e2f65['y']+(0x19cb*0x1+0x72a*0x3+-0x2f49+0.8),_0x8e2f65['z']],_0x18ebfe['w'],_0x18ebfe['h']);if(!_0x1e695c||!_0x38e907)continue;var _0xe30528=Math[_0xbf7e93(0x9b0)](_0x1e695c['x'],_0x38e907['x']),_0x2e1ebb=Math['max'](_0x1e695c['x'],_0x38e907['x']),_0xfaa035=Math[_0xbf7e93(0x9b0)](_0x1e695c['y'],_0x38e907['y']),_0x5821b3=Math['max'](_0x1e695c['y'],_0x38e907['y']),_0x10ffab=Math[_0xbf7e93(0x2fe)](-0x5*0x2e9+0x1*0xb5f+0x331,Math[_0xbf7e93(0x9b0)](-0x22b5*-0x1+0x21b0+-0x4429,_0x3d6075[_0xbf7e93(0x195)](_0x2e1ebb,_0xe30528))),_0x1c03c2=Math[_0xbf7e93(0x2fe)](0x4*-0x882+0xe16+0x13f8,Math['min'](0x39*-0x2d+-0x3*-0x219+-0x223*-0x2,_0x5821b3-_0xfaa035)),_0x7d3535=_0x3d6075['OOpbt'](_0xe30528,_0x2e1ebb)/(0x1ed*0x8+-0x5*-0x9d+-0x1277),_0x55c40a=_0x3d6075[_0xbf7e93(0x9d0)](_0x3d6075[_0xbf7e93(0xa72)](_0xfaa035,_0x5821b3),0xa28+0x21be+0xd4*-0x35);_0x5dca0e[_0xbf7e93(0xa6e)+_0xbf7e93(0xaa7)+'e']=_0x144288?_0x3d6075[_0xbf7e93(0x907)]:_0xbf7e93(0x47c)+_0xbf7e93(0x181)+'10,11'+'6,.95'+')',_0x5dca0e[_0xbf7e93(0x83b)+'idth']=_0x144288?0x1051+-0x232*-0x1+0x2*-0x941:-0x989+-0x1*-0xaf1+0xb3*-0x2,_0x5dca0e['strok'+'eRect'](_0x3d6075[_0xbf7e93(0x17f)](_0x7d3535,_0x10ffab/(-0xd*-0x20f+-0x21f*0x8+-0x1f5*0x5)),_0x55c40a-_0x3d6075['WQQnL'](_0x1c03c2,-0x4be*-0x1+0x4b*-0x5f+-0x51*-0x49),_0x10ffab,_0x1c03c2),!_0x144288&&(_0x5dca0e[_0xbf7e93(0x837)+'tyle']='rgba('+_0xbf7e93(0x181)+_0xbf7e93(0x4a5)+'6,.95'+')',_0x5dca0e[_0xbf7e93(0x89c)]=_0xbf7e93(0x1b3)+'ui-mo'+'nospa'+'ce,Co'+_0xbf7e93(0x233)+'s,mon'+_0xbf7e93(0xb39)+'e',_0x5dca0e[_0xbf7e93(0xa9c)+_0xbf7e93(0x9c7)](_0x3d6075['kjRlT'](Math['round'](_0x8e2f65['d']||0x1da9+0xdd0+-0x2b79),'m'),_0x7d3535-_0x3d6075[_0xbf7e93(0x2df)](_0x10ffab,-0xd0c+-0x21b0+0x2ebe),_0x3d6075[_0xbf7e93(0x58c)](_0x55c40a,_0x1c03c2/(0x13*0x141+0x68f+-0x1e60))-(-0x256c+-0xe12*0x1+0x3381)));}}function _0x4389fc(){var _0x49cdc7=_0x27dfe2,_0x5cea88={'Kwyhx':function(_0x37dccd){return _0x37dccd();},'etNjQ':'none'},_0x369912=_0x3d6075[_0x49cdc7(0x7b2)](_0x3c9400);if(!_0x369912||!_0x369912['cv'])return;try{var _0x454e53=_0x369912['cv']['getCo'+'ntext']&&_0x369912['cv']['getCo'+'ntext']('2d');if(!_0x454e53)return;var _0x5e9b1c=_0x369912['cv'][_0x49cdc7(0x408)],_0x2e95e5=_0x3d6075['SGtRT'](_0x5e9b1c,-0x24b*0x9+0x288+0x121d*0x1),_0xd5c82d=_0x3d6075[_0x49cdc7(0x2f6)](_0x135879),_0x2d1c06=_0xd5c82d['me'];_0x454e53[_0x49cdc7(0x30d)+'Rect'](-0x1*0xe2+-0x1025+0x1107,-0x1*-0x1477+0xdb*-0x5+-0x1030,_0x5e9b1c,_0x5e9b1c),_0x454e53['strok'+'eStyl'+'e']='rgba('+_0x49cdc7(0x181)+'43,17'+'7,.16'+')',_0x454e53[_0x49cdc7(0x83b)+_0x49cdc7(0x709)]=-0x1c1a+-0x769*0x2+-0x4c5*-0x9;for(var _0x45621d=0x2567+-0x222a+-0x33c;_0x45621d<=0x14bc*0x1+0xa14+0x629*-0x5;_0x45621d++){_0x454e53['begin'+_0x49cdc7(0x7f5)](),_0x454e53['arc'](_0x2e95e5,_0x2e95e5,_0x3d6075[_0x49cdc7(0xb46)](_0x2e95e5-(-0xbef+-0x11c1+-0xeda*-0x2),_0x45621d)/(0x2379+0x710+0x1*-0x2a86),0x9d*0x34+0x12d7+0x3*-0x10e9,_0x3d6075[_0x49cdc7(0x1b5)](Math['PI'],0x23f4+-0x343+0x20af*-0x1)),_0x454e53[_0x49cdc7(0xa6e)+'e']();}_0x454e53[_0x49cdc7(0x578)+'Path'](),_0x454e53['moveT'+'o'](-0x1d9c+-0x1bbf+0x395f,_0x2e95e5),_0x454e53[_0x49cdc7(0x7c2)+'o'](_0x5e9b1c-(0x4d*-0x6f+-0x463*-0x5+0xb78),_0x2e95e5),_0x454e53[_0x49cdc7(0x61f)+'o'](_0x2e95e5,-0x4cc+-0xd0a+0xa*0x1c9),_0x454e53[_0x49cdc7(0x7c2)+'o'](_0x2e95e5,_0x3d6075['DsTLa'](_0x5e9b1c,0xb4b+0x26f2+-0x2b*0x12b)),_0x454e53[_0x49cdc7(0xa6e)+'e']();if(!_0x2d1c06){if(_0x369912['lg'])_0x369912['lg'][_0x49cdc7(0xa37)+_0x49cdc7(0xa40)+'t']='';return;}var _0x41222d=(_0x2e95e5-(-0x170f*0x1+-0x1*-0xcc9+0x4*0x293))/_0xcd75ed['span'],_0x4b1311=null,_0x209961=_0x3ae231['Photo'+'nNetw'+_0x49cdc7(0x170)+'nc']||{},_0xe5fc0e=Object[_0x49cdc7(0x4ea)](_0x209961);for(var _0x54c357=-0x17*-0x122+-0x1*-0x1f15+-0x3923;_0x54c357<_0xe5fc0e['lengt'+'h'];_0x54c357++){var _0x154f37=_0x3d6075['thyVv'](_0x2100b3,_0x209961[_0xe5fc0e[_0x54c357]][_0x49cdc7(0x7ff)],0x1c1a+-0x10af+-0x3bd*0x3,-0x15*-0x53+-0x2*0xe33+0x18b*0xe);if(_0x154f37&&_0x154f37[-0x1b9*-0x9+-0x65*-0x62+-0x362b]===-0x1d2a*-0x1+-0x1abe+-0x26c&&_0x154f37[0x1fb3+-0x12bb+-0xcf7]===-0x1cf6+0x11d*0x4+0x1882&&_0x3d6075['KRzDS'](_0x154f37[-0x5*-0x3aa+-0x13e5+0x195],-0x12c1+0x36a+0xbb*0x15)){_0x4b1311=_0x32457e(_0x209961[_0xe5fc0e[_0x54c357]]['ptr']+(0xd0a+-0xad7+-0x1db),_0x49cdc7(0x4b4));break;}}var _0x5642d6=0x49*0x75+-0xd*-0x28d+-0x4286;for(var _0x1e1430=0x78d+0xbd+-0x84a;_0x1e1430<_0xd5c82d[_0x49cdc7(0x77a)]['lengt'+'h'];_0x1e1430++){if(_0x49cdc7(0x6e0)===_0x3d6075['FIlXu']){var _0x353b1d=_0xd5c82d[_0x49cdc7(0x77a)][_0x1e1430],_0x258000=_0x3d6075[_0x49cdc7(0x9b4)](_0x353b1d['x']-_0x2d1c06[_0x49cdc7(0x9a6)][0x2378+-0x1*0x113d+-0x123b],_0x41222d),_0x2f02aa=_0x3d6075['Ybnfh'](_0x353b1d['z']-_0x2d1c06['feet'][0x20a1+0x1*0xd1d+-0x1*0x2dbc],_0x41222d),_0x25c543=Math[_0x49cdc7(0x377)](_0x3d6075[_0x49cdc7(0x479)](_0x3d6075[_0x49cdc7(0xa55)](_0x258000,_0x258000),_0x2f02aa*_0x2f02aa)),_0x14c84b=_0x2e95e5,_0xb9d779=_0x2e95e5;_0x25c543>_0x2e95e5-(-0x199e+-0x87+0x1a2b)?(_0x14c84b=_0x2e95e5+_0x3d6075['bfnWo'](_0x258000/_0x25c543,_0x2e95e5-(0x15a7+0x1*-0x23a4+-0xd3*-0x11)),_0xb9d779=_0x2e95e5+_0x3d6075[_0x49cdc7(0x9e4)](_0x2f02aa,_0x25c543)*(_0x2e95e5-(0x555+0xe4*-0x1f+0x164d))):(_0x14c84b=_0x2e95e5+_0x258000,_0xb9d779=_0x2e95e5+_0x2f02aa);var _0x14a1ca=_0x3d6075['pKGbk'](_0x4b1311,null)&&_0x3d6075[_0x49cdc7(0x92a)](_0x353b1d['team'],_0x4b1311);_0x454e53[_0x49cdc7(0x837)+_0x49cdc7(0x592)]=_0x14a1ca?'#4f8f'+'6a':_0x3d6075[_0x49cdc7(0x1e3)],_0x454e53['begin'+_0x49cdc7(0x7f5)](),_0x454e53[_0x49cdc7(0x74c)](_0x14c84b,_0xb9d779,_0x14a1ca?0x1*0x159f+0x6*-0x1c5+-0xaff:-0x1d7e+0xde9+0x1f3*0x8+0.20000000000000018,-0x13ef+0x1cb7+-0x464*0x2,Math['PI']*(0x2351+0x82*0x1a+0x3083*-0x1)),_0x454e53[_0x49cdc7(0x96a)](),_0x5642d6++;}else return{'version':_0x3ddb78,'when':new _0x2392f4()['toISO'+_0x49cdc7(0x50c)+'g'](),'elapsedMs':_0x224782[_0x49cdc7(0xab9)]()-_0x253aec,'host':_0x429c67,'uwmk':!!(_0x23b1b2['Unity'+'WebMo'+'dkit']&&_0x25d5bd['Unity'+_0x49cdc7(0x220)+_0x49cdc7(0x354)][_0x49cdc7(0x508)+'me']),'il2CppContext':![],'arm':_0x1cac00,'hooksTotal':_0x222043[_0x49cdc7(0x827)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x3d6075['OLwtO'](_0x239f4f,_0x57f9bf&&_0x30563e[_0x49cdc7(0x965)+'ge']||_0x3bac2f)};}_0x454e53[_0x49cdc7(0x837)+_0x49cdc7(0x592)]=_0x49cdc7(0x107)+'a8',_0x454e53[_0x49cdc7(0x578)+_0x49cdc7(0x7f5)](),_0x454e53['arc'](_0x2e95e5,_0x2e95e5,-0xbe0*0x2+-0x1*-0xadc+-0x44d*-0x3,0xb6c+-0x6b2*0x4+0x2*0x7ae,Math['PI']*(0x35f*-0x1+0x116b+-0xe0a)),_0x454e53[_0x49cdc7(0x96a)]();if(_0x369912['lg']){if('HXtEt'!=='IpOlY')_0x369912['lg']['textC'+'onten'+'t']=_0x3d6075[_0x49cdc7(0x586)](_0x3d6075['NqkLz'](_0x49cdc7(0x383)+_0x5642d6+'\x20·\x20',Math[_0x49cdc7(0x637)](_0xcd75ed['span'])),'m')+(_0xcd75ed[_0x49cdc7(0x15c)]?_0x3d6075['ogxwT'](_0x3d6075['mpwUb']+Math[_0x49cdc7(0x637)](_0x32ecaa[_0x49cdc7(0x620)]),'°'):'')+(_0x3d6075[_0x49cdc7(0x2e1)](_0x4b1311,null)?_0x3d6075['aXCiI'](_0x49cdc7(0x998)+'am',_0x4b1311):'');else{var _0x494d54=_0x5cea88['Kwyhx'](_0x4ec7e7);if(_0x494d54&&_0x494d54['el'])_0x494d54['el'][_0x49cdc7(0x113)]['displ'+'ay']=_0x2127d6['on']?'':_0x5cea88[_0x49cdc7(0x617)];var _0x574902=_0x4943f6;if(_0x574902&&_0x574902['cv'])_0x574902['cv'][_0x49cdc7(0x113)]['displ'+'ay']=_0x2fc1fb['on']&&_0x2bf246['boxes']?'':_0x5cea88[_0x49cdc7(0x617)];}}}catch(_0x236673){}}function _0x2f585b(){var _0xc01b68=_0x27dfe2,_0x261a65=_0x3ae231[_0xc01b68(0x11c)+'nNetw'+_0xc01b68(0x170)+'nc']||{};if(!Object[_0xc01b68(0x4ea)](_0x261a65)[_0xc01b68(0x827)+'h'])return![];return!!_0x12d4c0();}function _0x16db32(_0x1bbd9f){var _0x452584=_0x27dfe2;try{var _0x477fb7=_0x4b4701;if(_0x477fb7&&_0x477fb7['el'])_0x477fb7['el'][_0x452584(0x113)]['displ'+'ay']=_0x1bbd9f?'':_0x3d6075[_0x452584(0x6bb)];var _0x5394a7=_0x31eff5;if(_0x5394a7&&_0x5394a7['cv'])_0x5394a7['cv'][_0x452584(0x113)][_0x452584(0x8d1)+'ay']=_0x1bbd9f?'':_0x452584(0x584);}catch(_0x1de3ca){}}function _0x3799d8(){var _0x46cdd2=_0x27dfe2;if(_0x3d6075['TtFMh']==='KXesp')try{if(_0x3ae3d1[_0x344512][_0x46cdd2(0x207)+_0x46cdd2(0x282)+'dow'])_0x54eda8[_0x37cb12]['conte'+_0x46cdd2(0x282)+_0x46cdd2(0x27e)]['postM'+_0x46cdd2(0x97a)+'e'](_0x4f1e65,'*');}catch(_0x775648){}else{if(!_0xcd75ed['on']||!_0x2f585b()){if(_0x3d6075['lRnbr']('jeYSu',_0x46cdd2(0x5c3))){_0x3d6075['EYWsp'](_0x16db32,![]),_0x3d6075['cyDSI'](setTimeout,_0x3799d8,0xc0b+0x17f*-0x1+-0x960);return;}else return _0x4e234c[_0x46cdd2(0x64e)]===_0x3babbb;}_0x3d6075[_0x46cdd2(0x226)](_0x16db32,!![]),_0x3c9400();if(_0xcd75ed[_0x46cdd2(0x15c)])_0x3d6075[_0x46cdd2(0x273)](_0x58a2bf);var _0x11e94f=null;try{_0x11e94f=_0x3d6075[_0x46cdd2(0x75d)](_0x135879);}catch(_0x45a902){}try{_0x3d6075[_0x46cdd2(0x46c)]===_0x46cdd2(0x99b)?(_0x2d8c84['hasMo'+'dule']=![],_0x1d26de[_0x46cdd2(0x83e)+'8']=![],_0x3cd883[_0x46cdd2(0xa1e)+_0x46cdd2(0x189)]=0x1ad4+-0x243d*0x1+-0x21*-0x49):_0x4389fc();}catch(_0x5b929e){}try{_0x3d6075[_0x46cdd2(0x4f6)](_0x280e54,_0x11e94f);}catch(_0xb2017){}setTimeout(_0x3799d8,0x1f3e+-0x3*0x92c+-0x388);}}function _0x189e3a(){var _0x4819e0=_0x27dfe2,_0x5d06f1={'humcC':function(_0x3227a3,_0x107b40){return _0x3227a3+_0x107b40;}},_0x324fa9=window['Unity'+'WebMo'+_0x4819e0(0x354)]&&window[_0x4819e0(0x5e6)+_0x4819e0(0x220)+'dkit'][_0x4819e0(0x508)+'me']||null,_0x38885a=_0x324fa9&&_0x324fa9['il2Cp'+_0x4819e0(0x45f)+_0x4819e0(0x9c7)],_0xf6a3be=_0x38885a&&_0x38885a['scrip'+'tData'],_0x159d7c={},_0x510e4b=[];for(var _0x477e0f in _0x417ed9){_0x159d7c[_0x477e0f]=_0x3d6075[_0x4819e0(0xb5d)]('0x',_0x417ed9[_0x477e0f]['ptr']['toStr'+_0x4819e0(0x2ce)](0xb9c+0x106a+0x1bf6*-0x1));if(_0x417ed9[_0x477e0f]['repla'+_0x4819e0(0x2bc)])_0x510e4b[_0x4819e0(0x82d)](_0x477e0f);}var _0x274757={};for(var _0x4b31d6 in _0x417ed9)_0x274757[_0x4b31d6]=_0x3d6075[_0x4819e0(0xa38)](_0xb1a3b9,_0x417ed9[_0x4b31d6]['ptr']);var _0x16eed8={},_0x33b963=null;try{_0x16eed8=_0x3d6075[_0x4819e0(0x81e)](_0x270668);}catch(_0x2cd236){_0x33b963=_0x3d6075[_0x4819e0(0x5c7)](String,_0x2cd236&&_0x2cd236[_0x4819e0(0x965)+'ge']||_0x2cd236);}var _0x21728b={'version':_0x503e97,'when':new Date()['toISO'+_0x4819e0(0x50c)+'g'](),'elapsedMs':_0x3d6075[_0x4819e0(0x68b)](Date[_0x4819e0(0xab9)](),_0x3040b6),'frame':location[_0x4819e0(0x75f)][_0x4819e0(0x485)](-0x5*-0xd7+0xf17*-0x2+0x19fb,-0x1*0x20d2+-0x12b7+0x3401),'host':_0xa0a43a,'frameRole':_0x77f3a8,'uwmk':!!_0x324fa9,'il2CppContext':!!_0x38885a,'typeCount':_0xf6a3be?Object[_0x4819e0(0x4ea)](_0xf6a3be)['lengt'+'h']:null,'arm':_0x4058c0,'assemblies':_0x20e074,'hooksTotal':_0xe948fc[_0x4819e0(0x827)+'h'],'hooksApplied':_0x3d6075['Ueufi'](_0x4fb0e1),'hooksResolved':_0x3623fd(),'hooksRegisteredAtArm':_0x4058c0[_0x4819e0(0x6d0)+'Regis'+_0x4819e0(0x257)]||-0x1b21+-0x715+0x2236,'hookErrors':_0x1bd886['slice'](-0x22*0xf5+0x22*0xca+0x56*0x11,-0x981+-0x4*-0x1ab+-0x1*-0x2dd),'instances':_0x159d7c,'classNames':_0x274757,'instancesReplaced':_0x510e4b,'hookFireProof':_0x1ae294,'survey':_0x16eed8,'actkKeys':_0x1103ca,'surveyRows':Object['keys'](_0x16eed8)['reduc'+'e'](function(_0x211044,_0x14859c){return _0x211044+_0x16eed8[_0x14859c]['lengt'+'h'];},-0x1a5c+0x1*-0x1f61+0x133f*0x3),'reads':{'ok':_0x11505b['ok'],'failed':_0x11505b[_0x4819e0(0x68f)+'d'],'lastError':_0x11505b[_0x4819e0(0x9cf)+_0x4819e0(0x87d)],'source':_0x11505b[_0x4819e0(0x948)+'e']},'identity':_0x3d6075[_0x4819e0(0x360)](_0x219b20),'globals':_0x59c0d6(),'wasmMemory':{'captured':!!_0x22897d,'atMs':_0x1a2fa4,'bytes':(function(){var _0x46cd6e=_0x4819e0;if(_0x3d6075[_0x46cd6e(0x769)]('FuFAW','Vxaaa'))_0x422b35['close']();else try{return _0x22897d&&_0x22897d['buffe'+'r']?_0x22897d[_0x46cd6e(0x5eb)+'r'][_0x46cd6e(0x62e)+_0x46cd6e(0x8b7)]:-0x2513+-0x1c4b+0x415e*0x1;}catch(_0x2fca63){return 0x1315+-0x1fa9+0xe*0xe6;}}()),'exportKeys':_0x571897},'diff':_0x210a18[_0x4819e0(0x485)](0x1e3e+-0x161e+-0x820,-0x1eb5+0x3*-0x26f+0x262a),'speed':{'on':_0x2ad7e0['on'],'factor':_0x2ad7e0[_0x4819e0(0x24b)+'r'],'writes':_0x176635,'scaled':_0x4bedd4[_0x4819e0(0x485)](0x20c0+0x1b4a+0x1d*-0x212,0x186e+0x1*0x57f+-0x1ddd),'skipped':_0x465cdc[_0x4819e0(0x485)](0x2292+0x329*-0x3+-0x1917,0x1f81+-0x1ce+0x34b*-0x9)},'esp':_0xa1af15(),'view':_0x175f04(),'fov':_0x32ecaa['fov'],'espView':{'on':_0xcd75ed['on'],'boxes':_0xcd75ed['boxes'],'span':_0xcd75ed['span']},'local':(function(){var _0x5a90fb=_0x4819e0,_0x4f0e2d=_0x12d4c0();if(!_0x4f0e2d)return null;return{'ptr':'0x'+_0x4f0e2d[_0x5a90fb(0x7ff)]['toStr'+'ing'](-0x112b*-0x1+0x939+-0x2*0xd2a),'feet':_0x4f0e2d['feet'],'eye':_0x4f0e2d[_0x5a90fb(0xa3b)],'pitch':_0x4f0e2d['pitch'],'yaw':_0x4f0e2d[_0x5a90fb(0xaa3)],'reach':_0x4f0e2d[_0x5a90fb(0x961)]};}()),'uwmkLog':_0x73339f[_0x4819e0(0x485)](0x1*-0x11ae+0x3*0x7b9+-0x57d,-0x615+-0x2f2+0x91b),'warnings':[]};if(_0x33b963)_0x21728b[_0x4819e0(0x162)+_0x4819e0(0x1d9)][_0x4819e0(0x82d)](_0x4819e0(0x706)+_0x4819e0(0x4ca)+_0x4819e0(0x895)+_0x33b963);if(_0x4058c0['error'])_0x21728b[_0x4819e0(0x162)+'ngs'][_0x4819e0(0x82d)](_0x3d6075[_0x4819e0(0xaf6)](_0x4819e0(0x628)+_0x4819e0(0x1aa)+'g\x20fai'+_0x4819e0(0x895),_0x4058c0[_0x4819e0(0x77e)]));_0x21728b['surve'+'yRows']===0x1f7*-0x2+0x23de+0x248*-0xe&&Object[_0x4819e0(0x4ea)](_0x21728b[_0x4819e0(0x756)+_0x4819e0(0x268)])['lengt'+'h']>-0x26de+-0x9*0xd5+0x2e5b&&_0x21728b[_0x4819e0(0x162)+'ngs'][_0x4819e0(0x82d)](_0x3d6075['uKAia'](_0x4819e0(0x283)+_0x4819e0(0x3c8)+Object['keys'](_0x21728b['insta'+_0x4819e0(0x268)])['lengt'+'h'],_0x4819e0(0x5a9)+_0x4819e0(0x861)+_0x4819e0(0x4e6)+_0x4819e0(0x843)+_0x4819e0(0x7f6)+'lds.\x20')+(_0x11505b[_0x4819e0(0x9cf)+'rror']?_0x4819e0(0x192)+_0x4819e0(0x2f0)+_0x11505b[_0x4819e0(0x9cf)+_0x4819e0(0x87d)]:'No\x20re'+_0x4819e0(0xb1e)+'iled,'+_0x4819e0(0x132)+_0x4819e0(0x8d5)+_0x4819e0(0x33b)+'t\x20was'+_0x4819e0(0x77f)+'ped\x20b'+'y\x20typ'+'e.'));_0x21728b['ident'+'ity']&&_0x21728b['ident'+_0x4819e0(0x168)]['tagMa'+'tches']===![]&&_0x21728b['warni'+_0x4819e0(0x1d9)]['push'](_0x4819e0(0x978)+_0x4819e0(0x8a3)+_0x4819e0(0x717)+'PY\x20TO'+_0x4819e0(0x418)+_0x4819e0(0xaac)+_0x4819e0(0x135)+_0x4819e0(0x5e6)+_0x4819e0(0x220)+_0x4819e0(0x447)+_0x4819e0(0x58e)+'Runti'+'me\x20we'+_0x4819e0(0x9b2)+_0x4819e0(0x231)+'\x20'+_0x3d6075[_0x4819e0(0x115)]+_0x3d6075[_0x4819e0(0x836)]+_0x3d6075[_0x4819e0(0x313)]);_0x21728b[_0x4819e0(0xb4d)+_0x4819e0(0x168)]&&_0x3d6075[_0x4819e0(0x5be)](_0x21728b['ident'+_0x4819e0(0x168)]['plugi'+_0x4819e0(0x651)+'imeIs'+'Expor'+'ted'],![])&&(_0x3d6075[_0x4819e0(0xb5e)]('DvNak',_0x4819e0(0x34b))?(_0x209e70['st'][_0x4819e0(0x5f0)+'ritte'+'n']=_0x1bb64f[_0x4819e0(0x445)+'d'](_0xeb2715),_0x25af07++,_0xbbaf6c[_0x4819e0(0x82d)]('0x'+_0x5b8787['o']['toStr'+'ing'](-0x1f5d+-0x4b7*-0x3+0x452*0x4))):_0x21728b[_0x4819e0(0x162)+'ngs'][_0x4819e0(0x82d)](_0x3d6075['kWZJJ'](_0x4819e0(0xa5f)+'n._ru'+_0x4819e0(0x480)+'\x20is\x20n'+'ot\x20wi'+_0x4819e0(0x135)+_0x4819e0(0x5e6)+_0x4819e0(0x220)+'dkit.'+'Runti'+_0x4819e0(0x728)+_0x4819e0(0xb34)+'lugin'+_0x4819e0(0x70e)+_0x4819e0(0x899)+'\x20',_0x3d6075[_0x4819e0(0x8f4)])));if(_0x21728b[_0x4819e0(0x720)]&&_0x21728b[_0x4819e0(0x720)]['note'])_0x21728b[_0x4819e0(0x162)+_0x4819e0(0x1d9)][_0x4819e0(0x82d)](_0x4819e0(0xa08)+_0x21728b[_0x4819e0(0x720)][_0x4819e0(0x292)]);if(_0x21728b[_0x4819e0(0xa0c)+'ls']&&!_0x21728b[_0x4819e0(0xa0c)+'ls'][_0x4819e0(0x83e)+'8']){var _0x118cac='';_0x21728b['hookF'+_0x4819e0(0x8b6)+'oof']&&(_0x118cac=_0x3d6075['ehhDj'](_0x3d6075['WIoVa'](_0x3d6075[_0x4819e0(0x88b)](_0x3d6075[_0x4819e0(0x588)]+_0x21728b[_0x4819e0(0x365)+_0x4819e0(0x8b6)+_0x4819e0(0x807)]['atMs']+(_0x4819e0(0x9f1)+_0x4819e0(0xa0a)+_0x4819e0(0x7fe)+_0x4819e0(0xa2e)+'=')+_0x21728b[_0x4819e0(0x365)+_0x4819e0(0x8b6)+_0x4819e0(0x807)][_0x4819e0(0x993)+_0x4819e0(0xb20)+'nc'],_0x4819e0(0x403)+_0x4819e0(0x797)+_0x4819e0(0x460)+_0x4819e0(0xa42))+_0x21728b['hookF'+_0x4819e0(0x8b6)+_0x4819e0(0x807)]['resol'+_0x4819e0(0x31c)+'eAtFi'+'re'],_0x3d6075[_0x4819e0(0x122)])+(_0x21728b['hookF'+'irePr'+'oof'][_0x4819e0(0x772)+_0x4819e0(0xa0d)+_0x4819e0(0x6f2)+'e']||_0x4819e0(0x584)),_0x4819e0(0x4e0)+'\x20the\x20'+_0x4819e0(0x946)+_0x4819e0(0x543)+'exist'+'ed\x20th'+'en\x20an'+_0x4819e0(0x2d8)+_0x4819e0(0xa05)+_0x4819e0(0x7d4)+_0x4819e0(0x266)+_0x4819e0(0xb0b))),_0x21728b['warni'+'ngs'][_0x4819e0(0x82d)](_0x3d6075[_0x4819e0(0x6b9)](_0x3d6075['NaWGi'],_0x21728b[_0x4819e0(0xa0c)+'ls'][_0x4819e0(0x772)+_0x4819e0(0xa0d)]||'none')+_0x4819e0(0x669)+(_0x4819e0(0x8db)+_0x4819e0(0xb5f)+_0x4819e0(0x805)+_0x4819e0(0x877)+_0x4819e0(0x91f)+_0x4819e0(0x439)+_0x4819e0(0x9e3)+_0x4819e0(0x14e)+_0x4819e0(0x56d)+'ith\x20M'+'odule'+'.HEAP'+'U8\x20is'+'\x20reac'+_0x4819e0(0xb23)+'.')+_0x118cac);}(_0x21728b[_0x4819e0(0xa0c)+'ls']&&!_0x21728b[_0x4819e0(0xa0c)+'ls']['value'+_0x4819e0(0x68e)+'er']||_0x21728b['globa'+'ls']['value'+_0x4819e0(0x68e)+'er']===_0x4819e0(0x8d9)+'ined')&&_0x21728b[_0x4819e0(0x162)+_0x4819e0(0x1d9)]['push'](_0x4819e0(0xa6f)+_0x4819e0(0x78a)+_0x4819e0(0x702)+'Modki'+'t.Val'+'ueWra'+_0x4819e0(0x119)+_0x4819e0(0x85c)+'ssing'+_0x4819e0(0x771)+'pture'+'\x20is\x20r'+'unnin'+'g\x20bli'+_0x4819e0(0x375));if(_0x21728b[_0x4819e0(0x6d0)+_0x4819e0(0xaf4)]>-0x1273+-0x238e+0x3601&&_0x3d6075[_0x4819e0(0x8c7)](_0x21728b['hooks'+_0x4819e0(0x40e)+'ed'],0x1a82+0x2090+0x3b12*-0x1)&&_0xf6a3be){if('Jnmqe'!=='MxwzS')_0x21728b[_0x4819e0(0x6d0)+_0x4819e0(0x84c)+_0x4819e0(0xb52)]===0x950+-0x36d+-0x5e3?_0x21728b['warni'+_0x4819e0(0x1d9)][_0x4819e0(0x82d)](_0x3d6075[_0x4819e0(0x52c)]('0\x20of\x20'+_0x21728b[_0x4819e0(0x6d0)+_0x4819e0(0xaf4)]+('\x20hook'+'s\x20wer'+_0x4819e0(0x1cb)+'n\x20SEE'+_0x4819e0(0x177)+_0x4819e0(0xadb)+_0x4819e0(0x58e)+'apply'+'\x20pass'+'\x20')+_0x3d6075['rOCTr']+_0x3d6075['XcrUB'],_0x4819e0(0x169)+_0x4819e0(0x257)+'\x20')+_0x21728b[_0x4819e0(0x6d0)+'Regis'+'tered'+'AtArm']+_0x3d6075[_0x4819e0(0x3b9)]):_0x21728b[_0x4819e0(0x162)+_0x4819e0(0x1d9)][_0x4819e0(0x82d)](_0x3d6075[_0x4819e0(0x788)](_0x3d6075['yfiHz']+_0x21728b['hooks'+'Resol'+_0x4819e0(0xb52)]+'\x20of\x20',_0x21728b[_0x4819e0(0x6d0)+_0x4819e0(0xaf4)])+(_0x4819e0(0x2ab)+_0x4819e0(0xa19)+_0x4819e0(0x128)+_0x4819e0(0xa04)+_0x4819e0(0x5ca)+_0x4819e0(0x4e6)+_0x4819e0(0x8fb)+_0x4819e0(0x28d)+_0x4819e0(0x5d2)+_0x4819e0(0xab3)+_0x4819e0(0x76b)+_0x4819e0(0x9ed))+(_0x4819e0(0x81f)+_0x4819e0(0x9f8)+_0x4819e0(0x494)+'fo*)\x20'+'->\x20vo'+_0x4819e0(0x61b)+_0x4819e0(0x369)+'t\x20mat'+_0x4819e0(0x734)+'is\x20bu'+_0x4819e0(0x27a)));else{var _0x121d1f=_0x3d6075['ILIHR'](_0x3569c2,'div',_0x4819e0(0xa26)+'te',_0x3d6075[_0x4819e0(0x583)](_0x3d6075[_0x4819e0(0x419)],_0x131637[_0x4819e0(0x485)](0x5*-0xe2+0x1dcc+-0x1962,0x1bf*0x11+0x1584+-0x332f)[_0x4819e0(0x456)](function(_0x17d9b4){var _0x297aea=_0x4819e0;return _0x5d06f1['humcC'](_0x5d06f1[_0x297aea(0xb48)]('0x'+(_0x17d9b4['o']<-0xa1c+-0x1*0x2173+0x2b8f?'?':_0x17d9b4['o']['toStr'+_0x297aea(0x2ce)](-0x11+-0xd86*0x2+-0x305*-0x9))+'\x20(',_0x17d9b4[_0x297aea(0xa11)]),')');})[_0x4819e0(0xa69)]('\x20\x20')));_0x3aac92[_0x4819e0(0x802)][_0x4819e0(0x696)+_0x4819e0(0x752)+'d'](_0x121d1f);}}return _0x3d6075[_0x4819e0(0x8af)](_0x21728b[_0x4819e0(0x6d0)+'Appli'+'ed'],-0x1ed8+0x68b+0x184d)&&!_0x21728b[_0x4819e0(0x756)+_0x4819e0(0x268)][_0x4819e0(0x502)+'ntrol'+_0x4819e0(0xb28)]&&_0x21728b['warni'+'ngs']['push']('Hooks'+_0x4819e0(0xb1c)+_0x4819e0(0x8fb)+_0x4819e0(0x51c)+_0x4819e0(0x7ae)+'FPSco'+'ntrol'+'ler\x20h'+'as\x20fi'+_0x4819e0(0x71a)+_0x4819e0(0x307)+_0x3d6075[_0x4819e0(0x845)]),_0x21728b[_0x4819e0(0x756)+'ncesR'+_0x4819e0(0x7b9)+'ed']['lengt'+'h']&&_0x21728b['warni'+'ngs'][_0x4819e0(0x82d)](_0x3d6075[_0x4819e0(0x7b3)]('rebui'+_0x4819e0(0x522)+'nce\x20f'+_0x4819e0(0x758)+'captu'+'re\x20(r'+'espaw'+_0x4819e0(0x337),_0x21728b[_0x4819e0(0x756)+'ncesR'+'eplac'+'ed'][_0x4819e0(0xa69)](',\x20'))),_0x21728b;}function _0x5b1da1(_0x330c3b){var _0x5ad09c=_0x27dfe2,_0x355641={'fdbrv':function(_0x12f691,_0x513ebf){return _0x12f691(_0x513ebf);}};if(_0x3d6075[_0x5ad09c(0x2cf)](_0x5ad09c(0x91e),_0x5ad09c(0x91e))){var _0x191a66=(_0x5ad09c(0x1b6)+'|3|2')['split']('|'),_0x5d0386=-0x9a4*0x1+-0xf08+-0xc56*-0x2;while(!![]){switch(_0x191a66[_0x5d0386++]){case'0':_0x2fd1ca=_0x330c3b;continue;case'1':console['log'](_0x5ad09c(0x397)+'kura]'+'\x20Skil'+_0x5ad09c(0xaaa)+'\x20repo'+'rt',_0x3d6075['vnjoM'](_0x3d6075[_0x5ad09c(0x541)],_0x55abd0)+(';font'+_0x5ad09c(0x4e1)+'ht:70'+'0'),_0x330c3b);continue;case'2':_0x3d6075['mflUz'](_0x73d618,_0x3d6075[_0x5ad09c(0x9d9)],{'report':_0x330c3b});continue;case'3':try{_0x3d6075[_0x5ad09c(0x1e7)](_0x187b66,_0x330c3b);}catch(_0x7111d0){}continue;case'4':console['log'](_0x3d6075[_0x5ad09c(0x6b9)](_0x280f56+'\x0a'+JSON['strin'+'gify'](_0x330c3b,null,0x3ef*0x4+-0x1359+0x39e),'\x0a')+_0x306ed3);continue;}break;}}else _0x355641['fdbrv'](_0x3f5d0f,_0x185387);}function _0x1d946b(){var _0x5db1f4=_0x27dfe2;try{if('wunWj'!=='ssCMI')return _0x189e3a();else{_0x3e6928(_0x49703b[_0x5db1f4(0x3e3)]);try{var _0x21750f=_0x5802bf['inner'+'Heigh'+'t']||0x1*0x1b11+0x2*-0xa4f+-0x353;if(_0x21750f<0x1*0x1bd2+-0x1e40+0x4da)_0x391f7e(![]);}catch(_0x2ef14a){}}}catch(_0x7ceb65){return{'version':_0x503e97,'when':new Date()[_0x5db1f4(0x831)+'Strin'+'g'](),'elapsedMs':_0x3d6075[_0x5db1f4(0x58c)](Date[_0x5db1f4(0xab9)](),_0x3040b6),'host':_0xa0a43a,'uwmk':!!(window['Unity'+_0x5db1f4(0x220)+_0x5db1f4(0x354)]&&window[_0x5db1f4(0x5e6)+_0x5db1f4(0x220)+_0x5db1f4(0x354)]['Runti'+'me']),'il2CppContext':![],'arm':_0x4058c0,'hooksTotal':_0xe948fc[_0x5db1f4(0x827)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':String(_0x7ceb65&&_0x7ceb65[_0x5db1f4(0x965)+'ge']||_0x7ceb65)};}}function _0x1fefbe(){var _0x245d55=_0x27dfe2,_0x2a9eda={'wtPBF':function(_0x57e1eb,_0x569354){var _0x30a534=_0x4730;return _0x3d6075[_0x30a534(0x974)](_0x57e1eb,_0x569354);},'YSWlx':function(_0x15fb61,_0xec7b75){return _0x3d6075['dOHDR'](_0x15fb61,_0xec7b75);},'XrmfG':function(_0x28a2db,_0x24d007){var _0xe0abc3=_0x4730;return _0x3d6075[_0xe0abc3(0x893)](_0x28a2db,_0x24d007);},'kVUUG':function(_0x4a7f03){return _0x4a7f03();},'izByT':function(_0x2d5a58,_0x480008,_0x4c3132){return _0x2d5a58(_0x480008,_0x4c3132);},'fZxiV':function(_0x43a00f,_0x511673,_0x4bd314){return _0x43a00f(_0x511673,_0x4bd314);}};if(_0x245d55(0x228)!==_0x245d55(0xad7)){var _0x27213c=-0x2516*-0x1+-0x1446+0x10*-0x10d;try{_0x3d6075[_0x245d55(0x476)](_0x3799d8);}catch(_0x52a374){}try{'VfBGS'!=='LwfFx'?_0x3dc92b():_0x180a56['top']=_0x2a9eda['wtPBF'](_0x2a9eda['YSWlx'](_0x3f9751[_0x245d55(0x261)+_0x245d55(0x953)+'t']||-0xcfd*-0x1+-0xcaf+-0x4e,_0x2ed58e[_0x245d55(0x33b)+_0x245d55(0x461)+'ht']||-0xa01+0x1fa+-0x5*-0x1eb),0x63*0x5+-0x44*-0x7c+-0x22c7);}catch(_0x57b6b1){}setInterval(_0x2acd60,-0x1*-0x1c8d+-0x7*0x106+0x4b*-0x3d),_0x5b1da1(_0x3d6075[_0x245d55(0x44e)](_0x1d946b)),function _0x1a7576(){var _0x15fd49=_0x245d55;if(!_0xe948fc[_0x15fd49(0x827)+'h'])try{_0x40279e();}catch(_0x13ce75){}_0x27213c++,_0x2a9eda[_0x15fd49(0x353)](_0x5b1da1,_0x2a9eda['kVUUG'](_0x1d946b));if(!_0xe948fc['lengt'+'h']&&_0x27213c<-0x20b0+-0x1e16+0x3ff2)setTimeout(_0x1a7576,-0x133d*-0x1+-0x575*-0x1+-0x10e2);else{if(!Object['keys'](_0x417ed9)[_0x15fd49(0x827)+'h']&&_0x27213c<0xf43*-0x2+-0xbbf+0x2b71)_0x2a9eda[_0x15fd49(0x15f)](setTimeout,_0x1a7576,0x1dbc+-0x41*0x34+-0x8b8);else _0x2a9eda[_0x15fd49(0x803)](setTimeout,_0x1a7576,-0x168a+0x185+0x19b5);}}();}else _0x54df26['cv'][_0x245d55(0x408)]=_0x2ef1ed,_0x1dfdb9['cv'][_0x245d55(0xa84)+'t']=_0x1db688;}if(document[_0x27dfe2(0x802)])_0x3d6075['OsHck'](_0x1fefbe);else document[_0x27dfe2(0x2d2)+_0x27dfe2(0x2c9)+'stene'+'r']('DOMCo'+'ntent'+_0x27dfe2(0x745)+'d',_0x1fefbe,{'once':!![]});if(document[_0x27dfe2(0x802)])try{_0x26a242();}catch(_0x4bbbec){}else document['addEv'+'entLi'+_0x27dfe2(0x22a)+'r'](_0x3d6075[_0x27dfe2(0x6d7)],function(){var _0x569017=_0x27dfe2;try{_0x3d6075[_0x569017(0x75d)](_0x26a242);}catch(_0x5093f2){}},{'once':!![]});})()));function _0x53be(){var _0xbefe02=['mda7y28','zMvLDa','oJa7EI0','q2HPBgq','icbVyMO','Dw5PDa','wLzsyuq','BMC6nha','s0DeAhq','mxWWFdi','vgv4Da','BwLU','zhrxt1y','igfYBwu','yvbOA08','uNngD1O','B3v0vMG','zsDZig8','EKHtvMW','DgvYE2W','igzYyw0','BwfYA3m','Dw1IE2i','zJu7yM8','wKDMzhm','lY0WlJu','BwvUDs0','BNrLCI0','DgLVBJO','nsaWlti','iokaLcbUBW','oYi+ltW','uu1WwMK','C3vI','zxH0','lde3nYW','B3nL','CMfWoYi','ig9MzG','rw5LBxK','yMvHCMK','CMfKAxu','BgfZDeu','wLDiu2G','A2v5vhK','AhbIA3O','DgfIBgu','v09zvhC','nxm0idi','sMTbvhO','wwvbvhm','A2vKpsi','su54yuS','BK5pDuO','yMeOmJu','B3bHy2K','mNm7Fq','z24TAxq','Aw5ZDgu','keLUC2u','zwHOrgO','ihbHz2u','ysbNyw0','AhvHEvu','x2DHBwu','Aw1L','z2v0sw4','vfbWwNO','txrxsuW','AxqTC2m','igvUDhi','BMqGBM8','CMuG','AwWYq3a','DgL0Bgu','mhW0','BxmGD2K','Aw5N4OcM','yxK6zMW','D3jHCdS','B2SGAxm','zMy8l2i','ChGGmZa','lcbnzxq','B3b7zgK','C2STy3q','CcbHBMq','C3LZDgu','AxnHyMW','sw5KzxG','rvDOBgO','ug9ZAxq','igrPzca','vgfTCgu','AfnJCMK','ywjSzsa','BM90ihi','DxjHlwu','mxb4idy','rvnqoIa','EtPIBg8','DgGGB3i','BhDHCNO','z2XVyMe','B3vYy2u','zxaGDgG','mtjWEca','A1j4y2m','D2H5','zwqGlsa','ic8G','nJe5mKjoD1zZCa','yxa6nha','zdP0CMe','igLZig4','rfnNww0','khmPihq','zw1WDhK','uLfLzMe','r2vMu1O','mxWYFda','AgvHCei','AxrPB24','v3vcwNq','DhrVBJ4','tKvQz2i','icbTzw0','ztPUB24','DMrfvMq','C2STBM8','Dg87Fq','yvnOzeu','sxHHDNu','q0rkCfO','zfbxBe0','ifnRAwW','s2XwtLu','Bez1BMm','B25ZB2W','mcaWige','o2jVCMq','Dde2','vfnSveC','BNrZoMe','sKrACwy','pgLUChu','Dgv4Dem','rvLxC3a','o21HCMC','zw50igK','zxLL','ysGYndy','lK1Vzhu','z2PID0e','ohWYnhW','B250zw4','AgLKzgu','DMvKpq','nZuZnw1sANvTva','mtTTAw4','nNb4o2i','Bwvnyw4','CJOWo2i','BMCGB24','nsWYntu','BgqGB2y','B3rYB2W','ywqU','B246zMK','txbiCKK','Dw1WAw4','yM9KExS','zfbnAu0','Cg9gyvu','zgrPBMC','DgG6mJG','yuTrChq','ig90Agu','q2fTzxi','zxjLzca','u2joteK','AgfZtw8','zLDjDe0','pgj1Dhq','DgG6BwK','Fdn8n3W','CgX1z2K','AgvHCca','AenKA2q','u2Pnzhm','DuL3wKK','lJuGms4','BMPequy','uwj6t0m','wuHit08','nsWUmdG','AM9PBG','r3nzvey','phnWyw4','igfYztO','DxjHpc8','C3rYB2S','D2LUzg8','CMvJDgK','C29SAwq','EvjcBKG','ruTju0u','zw5LBwK','txPbu0u','mJu1lc4','CgLhEw0','oJeYChG','nJq2o3a','mhGXma','AwDODdO','zgvZy3S','CMv0Dxi','zxG6mJe','tenPBKO','phbHDgG','CLbHq1y','icaYlIa','oM1PBIG','AgvPz2G','zdTWBge','Dg9W','y21K','zM9UDc0','C016BMm','ms4WEdW','icaGy28','vgHLigy','BMD0AcW','Aw5Lza','Fdr8oxW','qwn0Aw8','Fdr8mq','zZO0ChG','ywnPDhK','C3LUyW','lJCYktS','DeHLywW','lxDLyMS','ohb4o2i','A2DYB3u','txbKwgu','uxHkuwu','zMLSBfq','BNTIywm','sg9VA3m','Eg5Iyxe','m3W1Fdi','AxvZoJK','BMHvDLG','Ewf3','BNrLCJS','vwjIAK8','y29WEq','zvn0EwW','nJaIigG','C2TPBMC','BfDHCNO','lJi1ktS','rviGD2K','BMq6i2y','Aw9UoMW','BgrPBMC','BMq7Fq','Aw9UoMy','CM9SBgu','AguGC2K','nYWUocK','zhrO','iJiIihm','m3W0Fdi','uhHhBhm','BM93','Cg9ZAxq','psjIywm','mdCSmtu','C0r5wKm','q29WEsa','ztPWCMu','ksbZyxq','weLNDLq','BwLUv2K','rMLLBgq','tuDOr2i','Fdj8mhW','wKX5rhK','o292zxi','yM9Yzgu','zw50rwW','EdTIB3i','B3DtCvu','z2H0oJi','CMvH','CxvLCNK','CJT3Awq','zgLUzZO','Axr0zwq','AwvK','t3bWthK','CM9Rzs0','yMX5lum','o3DPzhq','CNbSsKi','AMfhDey','whnSshG','zxHWB3i','vvDnsY4','zsXdB24','Dhj1zq','BMfirNO','mNb4o2i','B25NE2m','qMLUzgK','ywX1zt0','lgnHBgm','ugnlvLy','yvHdAuK','DfDPzhq','ywz0zxi','Ahn6AxO','yxK6z3i','B3bLBG','CMvWB3i','Aw9ZyLa','sgD0DKm','zejKuMm','tMfTzq','o2jHy2S','zwqGysa','CI10Ahu','if0GywW','vg90ywW','u3nHEvm','wxfOzxa','qxnZzw0','BvLYDxu','B2XLig4','EgvZlIa','DgvHBq','C0XRrxu','shnYuLq','CNvUDgK','Dw5Kic4','Bgu9iMq','y2vKigi','zxiIlci','w2rHDge','tLHqvxK','ignSyxm','icSG','mhWYFdm','ChzKCvm','BwvHBG','mNz3ldy','B3CU','igDHBwu','vvvqtM4','iIbMAwW','CM9ZCY0','AxvAr0q','ywn0','ldiZocW','zxH0lwe','A2v5','DMD7D2K','ktTJB2W','BMffAxK','lL9Nyw0','zYb3Agu','igzVCIa','Cc1JDG','igfYzsa','khmPigq','ywqGzMe','ALH0zva','BMfSrNu','A2vLCa','Dgf0Dxm','AgfIBgu','iJ5tCgu','yYGXmda','EdTHBgK','Dg8Gy2W','BgvY','BgXxyxi','lxDPzhq','CMeTzxm','imk3ia','mNb4idG','Cg9Z','su9zs1e','wvDbqK4','vxfRCxO','z2jHkdi','Bg9JywW','DgHLiha','ignHChq','v0fswI0','oMnLBNq','ywT1CMe','B3nWywm','DgHLBG','qxvZBvi','vgHHDca','ohb4ksK','igLUC3q','nsK7Dhi','CMfUzg8','CMv7zM8','t0ryz2e','Ec1OzwK','Cfreqxu','rMzVz1e','wwjUzMG','CMfUihK','AhvTy0m','tM8GugG','ihvPlw0','BNvTyMu','DuHit2e','AwrLBNq','mZK5n3fcsfryvq','uwXzAxy','CgHVDg8','DujvquO','DMvK','rhHWyuS','kZb4mJK','CZPUB24','s3vnweS','zhmGB24','lxDYyxa','ie9o','sKrky2u','zsbNyw0','B25NpG','EvjrvNi','qvf1uvi','CMvHzhm','yxj7D2K','y29UDhi','oMzSzxG','CMuGAwC','iZDLzta','lwv2zw4','DLvMELC','yZKIpNC','mhGYoa','zvn5wNm','pc9IpG','teLwrsa','zcbYz2i','kgXVyMi','yw1Ligy','ihvUyxy','C3r5Bgu','zM9Sza','rfPNwg8','oIm4zdC','C3rYAw4','lxnPEMu','ChbLCIa','DMfS','ihrOzsa','ugHVDg8','ChGVms4','B3vUzdO','DdOXmha','zgf0yq','z2fTzq','DefHzhq','Cuzhu3O','zwXLy3q','ChG7y3u','zsb1C2u','v2DKzwi','BYbHihq','DxvUA2C','BwvHBNm','C2v0ida','B2TZihi','mhHIna','mtjWEc8','AfzHBKK','z3Lhrgi','Ag90CYa','ihnVigu','yNL0zxm','DgfNtwe','BMrVDY4','EMu6mte','ChqGsvm','Bcb1Cgq','DdO3mda','y2HLy2S','CI1Yywq','BM9UztS','D2fZBu0','iJ5gosa','suzYrMi','oYi+rvm','yuDXs2S','EI1PBMq','zgvYlxi','oInMnMu','zwn0zwq','DcbYzxa','BMvS','BMq6CMC','CIb0Agu','lcbUBYa','Bs11AsW','C2vYDcK','B25JBgK','zsbVyMO','o3DVCMq','C0PJse4','AxvZoJu','BIaUC2S','CMLNAhq','zxjZ','C3rHCNq','sxHPAuK','y2fSlMq','idzWEca','sgD0EMq','teH0qwi','BgX3yxi','yM94zxm','zsb0Age','CuXSENm','AxPcEvq','zxi6mdS','wLPTCxO','D2fYBMK','vxH0wgG','u3Djzem','DgfN','lMrSBa','CMvKige','Axr5','uMvNAxm','mdT9','ihjVDw4','Ehf5D0i','D0D6yuG','ueXbwuu','rgLMzIa','B3jRu3K','iJ5dB3a','C2v0sxq','uur5zuW','Fdf8nNW','t09lr2S','u3bYAw4','tIbIEsa','s1vsqs0','BvjJuMu','EfjIEMy','o2zVBNq','vhH0zLO','ignYB3m','wvnvBvm','rhnutge','kde1mcu','mJu1lde','oNrYyw4','y29Kzq','nYWYmsW','B3jYvvO','CdO4ChG','y1v1Efa','Aw50BYa','ExrLCW','Dw5KoNi','zxG7ywW','yNvPBgq','BfPgEMy','B2DVlxm','quWGqum','y3nIyM4','BvLTvNe','uMvHC28','EwuU','Aw5NoJi','AMr2thq','mhG1yW','Aw4TyM8','yNv0Dg8','icHZB3u','mtjWEdS','B2XSzxi','zYbPBNq','ihn0EwW','Bwf4kdi','C3aTy3y','y2rgyNO','nZq4mZy','ktSGBM8','tg9VAW','Dfjrrem','owqIihm','u2vLBK0','AxmGD2G','C2PkA2G','ie9IC2m','yxjTAw4','C2v0rMW','CgvZia','lM1UlwG','ztOXms4','DxjHtwu','y05Ju3C','zMHjCvi','DNmGC24','mtbWEca','BwuGAw4','CefPvMm','mxW0Fda','BM8Gzw4','igzPzwW','Cg9YDca','vufxA2y','igLUlwy','veT2v2u','rvnqig8','Aw4TD2K','iMzVBgq','z2LMEq','DM5QB00','zg93oMK','nu9dvwLrsG','BguGy3G','rMjkqNK','zfDesLO','nZq4mJK','CgnyAgu','wNDcAvq','pgnHBNy','zsbLDMu','iI8+pc8','y3rSrxa','DenVBg8','yxrHBJi','q01c','C2fNzq','Aw5WDxq','D2fYBG','ifvjiIW','u1beBLG','CM9WywC','s1PXuhq','B246B3a','BMDZ','zxi7D2K','yxjKlxq','DMvYE2y','otK7y3u','ys1LC3a','zNDsrxi','zNjVBsa','Aw1Lsxm','igvHC2u','sMjovKW','x3j1BNq','ihbHC3q','AguGCMe','Buf6s1m','Dwngvfi','BK5LDhC','Dg57ywW','AwnOlJW','Dg9WoI0','Dxj5teq','C3qY','yxjKlxi','C1foDNu','yxvSDa','iNDPzhq','C2LU','ihbHBMu','CNvHvLG','Bw4TDg8','s01XuLq','AgfKB3C','zgL2','u3bLzwq','zgvIDwC','DgfSE3a','sNjNvKu','Aw1HDgK','m3b4o3C','ihjLy28','B2jMsq','kdeWmhy','shbbqwG','zw1LBNq','Fdm3Fdq','B3j0lGO','y29UDgu','zwvMntS','lIbeAxm','r0vmu3e','EKTmEgi','BuXIuwy','lc4WnsK','y2fTzxi','D2HVBgu','lwL0zw0','idi0iJ4','DMLLD0i','tw91C2u','zwXMoMy','D3jPDgu','sM5uue4','C3rVCfa','Axr5ic4','zwy1o2i','Dgv4Dge','yNHAq3C','CMvNAxm','s3Lnu1i','yMfJA2C','zwz0oMe','v2vItw8','Bgv4oJe','CMrLCJO','AxnqsgC','iMjHy2S','wMn4rK0','D2DszwW','BgW+','rePOswS','C2vYAwy','C3rLBMu','ChG7Agu','C3zNpG','B24Gzge','AdO5nNa','BNq7yM8','EurRtM0','zcb3yxm','Bw4TC2K','BNnVBge','ldi1nsW','igLKpsi','rgXgv1O','B25LoW','BMDL','rKPlCuK','DunHA0K','C2fRDxi','CY5Tzw0','ywnRz3i','rw5LBwK','BNn0yw4','y29Uy2e','B2fYza','C0vpzhC','z2fWoJe','zMLYzsa','vKfm','whnqtLm','iZjHmgy','BwuUCMu','ChnSDw0','FdL8na','zMfJDg8','B21Tyw4','ig1VDMu','DYGWida','CMfUy2u','nhWXFdu','AhzOyvm','lsbvBMK','ChLvAfG','mhb4oYi','t2zM','C2PnAhO','DgvYzwq','Cgv0ywW','ztT0B3a','z1jlAhO','EhfoywW','CMvMAxG','DevRuu8','CKnVDw4','ig1LBNu','B3nZihq','Aw5Uzxi','A2LUzYa','BwuGBM8','CNj7y28','Dc13zwK','yMXLig4','nhW0mNW','BMnLCW','yxbWzxi','B1jPCNK','r0DhvMW','oMjYAwC','tezMr08','mtz8mJK','zJWVyNu','z2H0oJy','DgnOzxm','u0D0uLq','r0HVAgK','CMXHyMu','y2uSihm','B206nNa','zxi7z2e','CgXPzxi','u1bptKy','AwXKlG','uMvJDa','z2v0rMW','B24+','zg93','Aw5PDgu','igfYBwK','BcXTAw4','BNrxAw4','y2fWDhu','Dg91y2G','EdTNyxa','q0PhB0i','mtj8mty','lJGYktS','B246ywi','phn0CM8','x19ZywS','z2H0oJm','zwqGBM8','De1cqu0','kdiXlde','vfnNyuq','yM9qtg0','BM90zq','CMvUDdS','wvDeqxi','DgG6mdS','Axb0ige','DxjJztO','BJPJzw4','zw5LBxK','nZu7Bwe','n3WXnhW','lwLUzgu','psiXnJa','v3LZtw0','yMrHowm','z2uUrgu','BwuUx2C','BK1HBMe','u0vwsMm','u0H2tvq','Aw1Lr2e','iJ54pc8','FdeXFde','uKf5CNm','Bg9VA3m','AxrPywW','igHVB2S','thLtrLG','Fdr8mtu','Bgu9iMi','B2Ddz0y','ic4Znxm','Cc1SzW','psjWywq','DxrVo2i','B3zLCMy','oMLUC2u','C2STChi','ndmSmtC','Dc1ZAxO','shHiCMi','CM93CW','zJzIowq','y2vK','AxmGyNu','zxG7zMW','ohW2Fdu','Fdn8mte','Dw5KoNq','ywjZ','qLzhAgG','yM90q28','CZPJzw4','i2zMzJa','A2XhCeu','ugX5qxa','zw50tgK','B250lwy','zNjHBwu','ruXNwKm','zMfSC2u','Aw5N','txLAuLm','u0nSqLe','BxbSyxq','ywrKrxy','Dw5KiI8','FdeWFdy','mYWXnZC','CvLKtvm','lwHPzgq','zcbPCYa','z3jVDw4','nduPoW','BNq4','EfL0BNm','uMvWB3i','mdTMB24','wNrsBvm','wfrcuLO','DwL5zuW','zxzLCNK','zwqGB2y','sevTA1i','Bgv4oJa','o2zSzxG','EIdIGjqG','mIWUocK','DgHLigW','ywnLlem','txzdyLC','zNbVqw4','CNmGyxi','yM90Dg8','zMzMoW','BJOG','Et8Pica','v1ffsNi','vKLgDui','C2STC3C','mJu1ldi','AKHxEgW','z2zpvNu','yM9VBgu','ChGGlte','Bu5Wv20','C3zNE3C','zNbZ','Edjfna','Bwf4','sgLHvhC','zNjZs0i','nsWUmdi','Fdb8mtK','DgvYiJ4','ChG7yMe','v0fAEwi','vKLt','zxqUia','iNnWiIa','mJKWChG','ig9Uy2u','nJiWChG','zsbUB3q','y2XLyxi','pgiGC3q','rfzPsKu','ifnxlva','vMLeuNu','BgLUzwm','wwDfueK','AwDUlwm','lNnRlw4','s1jltw4','vLjWuuW','C29Syxm','u2fRDxi','zwn0Aw4','Bu5Jv2m','DMvhyw0','ndf8mZG','zgf0yxm','phn2zYa','AwzYyw0','ywXPz24','rJKPpc8','B2fYzca','oJrWEdS','EcaXmNa','nYWUmsK','AhrUzxm','icaXlIa','A2rMqw0','CMvWzwe','ywLSywi','nhb4idK','AgLSza','i3n3mI0','zuvSzw0','Dfn2Cue','u1zoue0','BefxBeC','igrHDge','B25Z','zxa9iJa','DgvK','BJ8PoIa','tNvstuK','Agv4','yM90CW','B2zMC2u','yxrPB24','uxb1svG','lJi4','Cg9XDg4','t3nZwMy','ywjSzwq','uwrgrfq','C2zVCM0','Fdr8oq','zwyYo2y','DdPUB24','CfDXvgq','B2r5','A2LUza','uwzfsu8','rhzoywS','lwnOzwm','AwDUlwK','mhHKna','idfWEca','Bgv4lxm','ywjLBhS','ig9Ul28','whjTzKC','zgTPDa','DeXbqNG','AfLJEgO','psjZDZi','zxqSig8','ExbLpsi','DcbZCgu','EdTHy2m','AgvSBg8','C2vLBNq','nhb4ide','q0jcBMO','uhbkCK4','vertr1K','ignVBNm','rezwr04','zvbYB3a','Ag9VA0y','r1vbqwu','r1P6vK8','C3bHBG','zxmGBM8','B2f0nJq','lxnWzwu','BwuOkq','DxjLzey','ywLSzwq','tLbdx0m','DxjLzca','DhjHBNm','mNW1Fdq','AxrSzxS','lM1Ulxm','BMqU','z0LyDNm','C3fYDa','lNnRlwm','AgL0zs0','y0Toz1i','BNqTC2K','EdTMAwW','mhG5oa','sgPqAe4','ys1Wzxq','yMvbs2m','BhrLCJO','n3W0Fdy','zxnWia','owq7Fq','zwqGEwu','BhvTBJS','surfige','C28GC3q','DZOWidi','BMCUcG','Ag9VA1a','CMf3','ign5psi','mNb4idC','DLvrEfO','ldi5lc4','CgfYyw0','CMqTDgK','o3bHzgq','C2STBwq','v0vTBKm','yZK7BwK','jwnBC2e','zsbZDhi','Axy+','CMeTC3C','uMvkD0i','svDQuu0','Bgu7zMK','ywXSoMK','BgvYkZa','zeXsDvO','BJOWo3a','sLnptIa','Dg9gAxG','CMTqBge','DgvYo2y','wvrnCgG','Bgv4lxC','q2PNzvC','ChG7Cge','EIaTihC','Du9mEvy','nIWYmZG','txLszKq','DxqGEw8','ztSTD2u','mZuXotjeqKnJtKy','DuX1rxe','shnPzNG','D3vJrge','B25NlG','DgX7zgK','E3bVC2K','AunureO','DgG6nNa','r2jXu2C','EcbYz2i','nZq4mZa','ywn0Axy','ExHUBhq','C3rHBMm','zJu7Fq','nZCSlJu','wMfJqw0','zgLMzG','uKjryK8','wK9fDNu','DJiTDge','uhHdrfa','vhndqKq','CMvKia','tefzrvi','C3b4wLy','AxHLzdS','BML0Awe','C2STy2e','nhW4Fde','B3vUDa','DxfzzuO','sgP4s1a','CgfJAxq','Awr0AdO','pc9ZCge','A3vYyv0','rJyGywW','mI45lJm','ncK7yM8','vxrwvLy','B2D4D1q','sgvHBhq','oJyYDMG','BdPUB24','Bxm6y2u','mhGXmum','CgL0y2G','uhzcC1q','DLDIvgW','y2f0','wwr4B3e','DMuGBwe','DuvTyLu','ihDOAwm','DxjH','re1oBhK','icbVzMy','AdO2mNa','B2XZoJO','yKr5wei','zhvYAw4','AwzLig8','ueTotLy','AguGBgK','DxrVo30','zMLis1y','iIbTAw4','Bw91C2u','rxrpBvm','z2v0vwK','CMvMCW','EhbHEw4','ruHsr2W','ztOXm3a','oMXPBMu','BuvRtMu','Aw50Aw4','yxrnCW','Dg9Y','CvnXv2i','yMfY','igfUzca','yxv0BZS','ytK5o20','yxG9iJu','CMriD2m','D2LKDgG','yxjKlM8','y1jLCMO','BI1PDgu','zsGP','B3rVBK4','qxbWBgK','Ce9us1i','mNb4icm','rwviCM0','AwqGCMC','C28GAg8','CML0o28','wNPqwgy','DJiTy3m','CMvK','t0SGt1y','vNjpCgm','ltiUns0','zM9UDdO','B3nPDgK','y29Z','CM1VBMS','sxHMy2G','zvPKrxa','Derksu4','zsbYzw0','B3a6mti','yw5ZCge','uMfsDwG','AxbIB2e','qNLjza','A2L0lxu','AgvYAxq','yxrHihi','uNrHtw4','mJrWEa','Fdj8m3W','ktT9','zMykrJG','CgfYC2u','B2LUDgu','BwLLCYa','y01StwG','iIbZDhK','pgnPCMm','vMvjyxi','BNrYB2W','yxjTzwq','BNrPBca','lwXLzNq','Ec8XlJq','zxi7iJ4','cNbPDgm','DYbNBg8','ihzPysa','zJfIo2i','n3b4o3a','ns00idC','Fdn8na','tNH5sLi','zNjVDw4','lwzPCNm','zgTPDc4','oc00lJu','A2v5u28','BIbHihi','z2v0q2W','lc40nsK','q01uAwu','z0DOD2O','ztT0CMe','AwvKige','vwT1sNm','yw5KigG','DKzMu3i','CMvSyxK','vernx0C','BwfW','zs1JB2W','BhvNAw4','yxa9iNi','BNnPC3q','CNnVCJO','DgG9iJe','CeXHt1O','AhvK','CenVBNq','CMvZB2W','DeHLAwC','rxHWB3i','Ds1YB28','zYbxzwi','zgzZvMq','q29WAwu','zgDyvNm','BwfYz2K','wKH6thq','Fdb8mq','teHLD0W','tK9NqM4','ALrJAKK','q3n3Agy','CNqP','ywrKAw4','ohb4ide','ie1ciea','r2fTzsG','ENvSyvC','yMTPDc0','BwLoENm','tLvPwhy','nNWXFda','EwXNBKq','nNb4o2G','BNqXnG','CMDIysG','ztOXnha','zEkaPJWVCW','BufxuhC','BNrPBwu','u1bJDuq','Fdn8nq','Bxjkrhi','CNn3Be8','C2XPy2u','AxmGBM8','mIWYosW','BMfTzq','DtmY','Be9gyMK','zNGIihq','C2vSzwm','A091EwS','tvPwz1y','C3bLzwq','uuXNyK0','Cwrzq1e','CNvUBMK','EKT5vg8','Ag9Ksw4','C2fUzq','B2DVE2q','igjVDgG','ltqTnY4','CfjdwhO','B3G9iJa','CML0Dgu','lNnRlwG','tMDVy0G','DxjhC2K','DdmY','iZe1mgm','ktTIB3i','q2XPCgi','BMv2zxi','EdTWywq','mtaSmte','ywnLo3C','ANfcAwy','vvbpuvy','CZ0NC2S','AeLcwMe','Bxv0swK','D24Gvxa','BwvTB3i','rfjfCMS','sevMBwK','Bwncwvm','CgfUzwW','q1jdwMq','A3nwugq','AtmY','C3bSAxq','lwTD','lwjYzwe','CvDsCfC','mcaWida','BguIihm','yw1LihC','D3jHCha','tgXZweG','tNbHzfa','lc45kq','r2DQB2W','Ewf3t2y','Axq7Fq','BgXLzca','r3jSALO','DgeTyt0','CLDtAfy','y29TyMe','icbMywm','B3vUzcW','EsbMywK','CfPOvwi','ihnOB3C','yMfgAwq','rhPJzNe','nxWZnhW','EhbVCNq','yxv0BW','Ag90icG','wK5Pzvm','ywrKCMu','BwPhBNe','lxbHBMu','EMu6mta','DgfSBgK','Ahq6mJq','yxmGAwq','B3i6','EwXLpsi','C3zXsgW','EhzpC0S','BNuTCM8','ksWGC28','lxDLAwC','yMX5lMK','zwf0zva','C2STCMe','B2TLlwW','igj1Dca','r2fTzq','EwnSugC','DurZB2O','A2v5CW','yt0IC3q','DhLSzt0','C2fUCY0','z2vYlIa','v29YBgq','zxnVBhy','kduWmha','CMrLCI0','C2L0Aw8','zgnizwq','DMvKia','zg9jzuW','zxrmzwy','BJPJB2W','BI5OB28','Dte2','lwjVDhq','B3nLCY4','vvjxCMm','idGWChG','Fdv8mxW','DfnxCfm','CJPYz2i','rLbty28','wxLMufq','txvSDgK','Bg9YoNi','BgHXq2i','igfJDgK','uNvUDgK','t1fxC3G','pJiUmhG','mhG3yW','u3rYAw4','sKr6r2u','t0noz2C','B2f0mZi','igjVDhm','CMfUz2u','B2jM','B2jMqG','mduPlda','ntuSlJa','ihzPzxC','zYbTyxi','ywDLCG','ywrPDxm','BwfUEq','AgvHza','zwqGyNu','yxjNAw4','BM8Gz3i','zNvUy3q','CgfKzgK','y3vYC28','BhqGC2K','AgvHBhq','zsbTAw4','Ag9ZDg4','BML0tfG','Fdz8mW','B3v0','icbOB28','ugfZDgu','B25Jzsa','rxv1AgG','BLnUwhK','n3WWFdi','AxvZoJi','B2zMihq','z2fWoJG','ihjNyMe','u0zZCeS','ExbLCW','zuTgBuS','Bg9N','nsK7yM8','uMvMDxm','zYaVigO','CgfUpG','igrVy3u','r0juDu0','yxbWzwe','tg91wfO','x19hzw4','zwn0Aw8','AfjVDKi','Dgv4Dee','zw5Jzsa','uwLswgm','C2vUDca','Ag9VAW','DMfYkc0','wvfKs2W','uLn1zge','Bg9Zzsa','C2STDMe','BwvUDc0','igq9iK0','ugnyCvu','C3CYlwG','BMfIBgu','B3i6Cg8','ifnxlvC','EKT0CKi','EuvguMq','m3WYFde','ysGYntu','zhrOoJG','y2XVC2u','o21HEc0','oI40o30','CMvTB3y','icdcTYaG','Ds1JC3m','DZiTyM8','zhmGWRCG','BM90igK','ksbVCIa','AMHgruC','vxb0ELy','yw5LBca','Awr0AcK','zxCGy2e','ugzezvm','igTPBMq','Awq7z3i','yurPq0e','oMjYzwe','ztTTyxi','zwn0ihC','v1nwDKq','CY1VCMK','ihbHDgm','ihjLCg8','Axvfzgi','As1TB24','DerHDge','vwvPq3a','DhKGAw4','nZCSlJq','yMvNAw4','mNW5Fdq','y2XPCgi','A2v5qxq','wgrSDeq','q2vjvvK','BMqIihm','sMTWrve','uMLzqLK','DLbzu2m','C29SDMu','DKnuB2m','BM9Uzq','ChjLDMu','Aw1Szxa','CwDbs0K','A3LArNm','B2XPzca','A1rHCvm','BLnKwfm','twDMqM0','CMDguwu','ifrOzsa','vNzJAhi','EefQt2S','zsb3ywW','DhLSzq','idaGyxu','q1HxyLa','zfz5Aeu','mZT9','iNrLEhq','C3bSyxK','Bw47Fq','zvbSDwC','DgLUzYa','Aw5Qzwm','wuXqyxy','A3TOzwK','y2vUDgu','BIbZB20','v1ffsNy','BeP6yvy','mJv8mJi','AxvZoJC','yJLKo2i','zML6q2C','tgLZDa','B250lxC','ig9IAMu','Dc4kcLq','ntuSmtq','zJDLzwy','DgvZDa','vvjbx1m','nZKSmtq','BfbmzK8','oInIzge','lwH1zhS','CKTUEvm','vMDNChy','igXPDMu','zM9YBtO','Aw5MBW','4Psa4Psaia','oY13zwi','BM8Gseu','mNmSyMe','CI1LDMu','ndzWEdS','ExnywKG','CNqGEwu','twnvqK8','DcbPBMO','ChGPo20','zer6quq','zsbWCMu','iIb3Awq','Dg9tDhi','z05vqxq','BgCIihm','vNPNu1O','Aw5KzxG','mxb4ihi','i2jKytK','CYbHy3i','q2Hdz24','CMfUC3a','D0fZvxu','u2H4q1q','BMuUifq','mtrWEdS','qxrbCM0','EtPMBgu','tgLzzKi','C3bHCMu','swHyz00','ChG7zM8','lNnRlwi','qKHSDvC','yxrLigy','zerLyuG','C3vluvu','qwPjqK8','mtG5mdC4tujnuKP3','kdi1nsW','ysbtA2K','lwvZCc0','B2LoDuS','igSWpq','vw5PDhK','zxiTC2u','yxiTDgG','twTHy0G','CNvUCYa','yNvMzMu','D3bky2y','z2Ptte0','ALHjA1C','oM5VBMu','BgfZDfC','AMriz2u','BfrdEhK','u2vLBG','zunOAwW','DLLfDLi','lJKPo2i','B29RCYa','rMXHzW','idaGmJq','mJq2ldi','zt0Iy28','qwL3A0K','idrWEca','DxrVo2y','ihnPz24','z2v0rwW','EcbZB2W','z2LUlwW','tfHZzKu','vNfvqxa','zYbZy3i','Axjftvq','Fde0Fde','zw1ZoMm','BwLUkdu','oxWZFdq','DgvTCZO','yNL0zu8','BNrezwy','lxjLCgu','DMvou2q','zxjHDgu','C2HHzg8','i2y3zwu','mYWXmdy','ChG7Bwe','zef6wge','uhLyzhy','zxroALe','B2XZE2y','zMXLEa','rKPhANi','AwqGzg8','DgXL','D2vPz2G','ihDYAxq','Bw92zvq','zM92','AMDRBei','yxjT','oJfWEca','weXAA00','zwXHChm','C25UyK0','rw5HyMW','vvDnsYa','vfvAs1u','zwfKE2q','oJe7Dhi','zZOXmxa','mxW4Fdu','yNL0zuW','iefdveK','yxnZtMe','ChG7Fq','ExfJAhu','DMuGB2i','zgvYoJe','oYi+u3a','Dxm6nNa','CM91BMq','BMuGAg8','DK9Oq3i','CgfJzsW','zMLSDgu','AwrKzw4','DhDPy2u','B2XVCJO','r0XZsei','AwzMzxi','D2f0y2G','nhW2FdG','lwe9iMy','mhGZma','iMvZCci','lwfSAwC','DfvqCum','qNvPBgq','y29SCW','Awq7CgW','tKPTDM8','rKfvz0O','BgPOu2e','DhLWzq','uKfoCKG','wvjSs2O','BLj1BNq','A2v5q28','Aw9U','mtTJB2W','DhrVBtO','C2jkDhC','BI13Awq','twv1sMG','BNrLEhq','sNvTCca','zw1VCNK','EvfZD3C','Bw4TAa','CJPWB2K','v0Pxu3G','Aw5Ly2e','yw1eC3i','oNjNyMe','lIbozwu','B3jvy0m','DejYqLi','yxrJAc4','ihLLDca','qxbKz2G','ks4G','lM1UlwW','i2zMzdq','ywX7zM8','Ag90','lxrYywm','AcbMAwu','CMfTzsa','BM9ZCge','qMztDuS','ig1HBMe','C2vSzIa','rKzrDKC','BNrPyxq','CLDuzuW','rNP2t00','psjJB2W','zgvUtxm','t0TyA04','z2LUoJa','rgfUwMy','ndy7y3u','vKvsu0K','Dhj1zsi','rwL0Agu','C1HAwwC','DMfSDwu','oMnVBhu','DgG6mJK','mhWZFdy','lxnOywq','CJTNyxa','yhbSyxK','ieeGAg8','ze9irfi','vwD4CLu','DdOXmxa','v3jHCha','zMfPBgu','vMfSDwu','zg9JDw0','Ce5wtey','Bw4TDge','vfLAu0K','y2Tzt2G','yxbWzw4','pc9KAxy','z3vWv3e','B2jMrG','zJy0','EurVDhm','Bgu9iMm','Bw4Ty2W','mte1odG3nLbvvLbIza','DMGGlsa','v19F','sNLmtKG','phnTywW','DxnLtg8','BgW6Aw4','iJeIig0','zeHvtu8','igfWCgW','ENr0D3G','zwfKEsa','r3nQDK8','EKjrrLy','mda7y3u','ywfVBee','igP1Bxa','Ewv0lG','mhb4idu','zMXLEdO','C3bfthi','D3jVBMC','zuHNq1G','lM1Ulw0','wwH1Exm','yY1IzxO','Bw92zq','sM9oCeq','DxDTAW','CNDkquG','B3bLCNq','Aw5KB3C','zxi7Dxm','B3bLBIa','rgLHz24','rNr5EgG','ys1IB3G','pgrPDIa','vMvWsuq','t3fusMy','t09WyNq','zwqGlYa','AgLZiha','lNnRlxy','Au1RvLC','zIb0Agu','tgfgy2u','CxnhtK8','FdeWFdi','icaGica','Ag9VA3m','txbpDxy','CKXPC3q','BgrSy0G','Bw5cwuK','vMDjBMm','EdSIpNy','wvzluLG','rK5Stg8','CMeTBwu','igvHy2G','zYbSB28','CMvtBgu','DZiTB3u','ywLUE2y','CdO2ChG','qwT3BKy','AxrLBxm','D1vuq0W','zYbMB3i','AY13B3i','z3jHyG','zsGPlMu','y2SIpJW','BwvTyMu','D2vgAeO','t1DpD24','ihrOAxm','ywnLlwK','tw9KDwW','iIbZDgu','zMXVDZO','BNrZoM4','y0nlwum','qxrgAxi','pc9ZDhi','y2GUC3K','CgfYzw4','ihrVCc0','B24GAwq','veLwrq','AxnmB2m','rLvfB3u','yxjPys0','lc40ktS','Dxm6nta','Dw50','t2TOyvq','AMvJDhm','ihnVBgK','DhLxzwi','ntuSmJu','uM1hB3C','ls1W','C3vYDMu','DgLHDgu','Dxm6mti','Awr0Aa','z2H0oJe','q3HIDg4','BwLSEtO','Dxv5q2u','ihDHCYa','C3bHy2u','w2fYAwe','nhb4o3q','l2j1Dhq','BgvYigG','yMfZzq','AxrJAa','C2nzD2u','tuSGq08','CKTLsKi','zgf0zsa','CMvKihK','svjbs2u','C1jhs0i','y29MB3i','B24GDgG','nc00lJu','zxnW','DwLSzci','DcHHDxq','ohb4o3a','B3jKzxi','Cg9ZDe0','zwLNAhq','u2vSzwm','BwuGlsa','zJmY','wvz3swK','Cw16tMy','BNrLBNq','y2XPzw4','BNqTD2u','yMfJA2q','nIKSAw4','lNnRlxm','DMLLDZO','BNnWyxi','y2GGDgG','zhjVCc0','CIiGC3q','pJWVzgK','y2XHC3m','yMzUv28','thDjs28','ys1ZDY0','rgjstMS','CMvSyxq','C3mGmhG','B3fqvKu','De9bz1e','zxjHia','qMDXteG','ic40nxm','Fdz8nq','tg9Hzgu','EKTtAge','o29Wywm','DMXlEKe','yKvoBg0','ys1ZDW','yun4BuG','yxjJ','Ad0ImIi','y013zfa','Fdr8mNW','BcbHz2e','DMLZDwe','zenOAwW','mtqZlde','B3vUzci','y0rnu28','Aw5ZDge','B3n0Awm','AxjZDca','uLj1qKK','icaO','nsWUmdu','svzficG','wxPquK0','lM1Ulwm','AhjLzG','yxr1CMu','B2SGEwu','BgfZlg0','AxzLo3C','C2v0','idqGnc4','C3rLCa','DxjHvge','AxnWBge','vNr2zwO','DxnPyMW','z25HDhu','l2nHBNy','igL0ige','yM94lxm','AM9PBJ0','EhL6','ic0Gy2e','z2fTzvm','psiXlJi','ocWYndi','vujpAgS','Ag9ZDa','CIb5B3u','BhvLica','wgv3v04','BgLZDa','whncDKu','Dxr0B24','Dgftu0O','zxjYB3i','ihnRAxa','Axb0igK','r3zfA0e','BhvLpsi','o2fSAwC','ig9Mihy','igHHy2S','q291BNq','DdOG','yMv0yxG','Eca4ChG','DY5vBMK','D2L0y2G','DhjPyNu','qvbvoca','iZrMogy','DIiGC3q','tNjWALa','Fde4FdC','y2u7y28','DcaWicG','mdaWo3u','DgHLigm','zw50','z2fTzsa','ywDLigG','n2e2ntG','otK7Bwe','ig9U','yuzYB20','EwvZ','odm0v1vnrwrz','AfPXsuq','r0DFr2e','uLHYz2O','BMu7Cg8','zxi7zM8','zfD4qvG','sLvArgC','B2SGzMK','DuzJsva','CgXPzxm','vgXJCvK','BgqGAxm','yxr0zw0','DMvYC2K','vwThzum','DcbUBYa','tvPIC0m','BMCGyxq','yxm+','t3niy2S','DuTbAwe','C3LUy3m','mhGXoa','D257B3a','zsbPBNm','vLHWBgi','zxbSywm','DMn4qK8','BwuUy3i','lJm2lde','su1LyMy','oJeGmsa','z2v0q28','psjZywS','iZaWmdS','BgLUzvq','y2fTia','nIa2Bde','CMq7zM8','uw5KqNK','C25HCa','BgfZDem','ru5ept0','zgf0zsG','r2Xpt1i','AgL0CW','o3rVCdO','yxGTD2K','v3fVsNC','idaGlYa','yw1PBhK','CZOYChG','thLOC2C','zwfJAge','B3i6CMC','yw5ZAxq','A3mUBgu','CgLUzYa','i3nHA3u','nwmWidm','mxb4ihm','zdPYz2i','igfNCMu','AgLSzsa','qLD2v3i','uKLVsK4','DdOXnha','otbWEdS','zgf0ys0','D2fZBvq','mwzYksK','mJeSmti','EtPUB24','v2LKDgG','iZHKn2e','zgfOrM0','lJuIihy','tufHAeO','iM5VBMu','zMLYC3q','ueXMu20','phbYzsa','ig9Yihq','s1rpuxK','AxrSzsa','lNjLC28','ugf0Aa','mcbMAwu','sKfxyuK','Dxm6oha','C2v0sw4','AguGD3i','BgLKihi','CNq7ywW','m3W2','AwDPBMe','ChrY','shjrALC','Dxb2ANq','yM9KEq','zLP4Avy','iJ5VCgu','ihn0yxK','EdTOzwK','B29M','B3i6i2y','BgvMDdO','oYi+','Bw9YEvq','CgD6D2m','EdPUB24','mteUnxa','Dgf5CYa','zxj0Eq','Fdi2Fdq','mtbWEdS','vuTYBMS','wwXxq20','tuXXzgO','Dw5PDhK','Bgu9iM0','s0j2qKG','CK9rEe8','CgTqB0S','nYWUmZu','t0HQyu0','CM9Wlwy','uhzYtKC','khrOAxm','imk3igzV','DdPTAw4','zxiTCMe','Bgf5oM4','zw50zxi','x19tquS','rKTuvwu','BgvUz3q','CMzSB3C','yxbWBhK','yxjLige','oJaGmta','swnAqwG','ChvZAa','DgHPBMC','v3LhEw4','q1HyBfy','Dg9ju08','CK1fteW','Dg9YqwW','oMLUAgu','y29SB3i','uNblse0','zMLSBfm','BNq6Aw4','Bwf4lxC','v3b5q1K','BgLUzvC','AdOZmNa','BMCGzM8','AgvHCfu','ihn0CM8','ztTWywq','ucbVBJW','yw55ihC','CMvHzca','tMv0D28','r2z2tfy','BNnLDca','Fdf8mhW','oJOTD2u','Awq9iNm','DgfYz2u','C2L6ztO','uMvZB2W','yw5JztO','vxbKyxq','oMf1Dg8','zMXLEc0','vwDnqw8','mJbtDMX5ug8','nNb4o3C','vuHMrNu','BNqTzMe','icbMAwu','BNqZmG','mhb4o2y','v2z0wee','oInMn2u','mcuGBM8','AxmGBwK','FdL8ohW','uKzeDeq','i2zMnMu','B2jIEsa','y3qOCYK','4Ocuihr3BW','y3jLyxq','Cg9PBNq','CgfKrw4','rJKGDhC','mNb4o2G','D3fWthy','idyWCYa','wgLSvNK','sgXjA3a','tK1JBhG','zMfRzq','DMLLDW','ohb4o2G','A3HXt0G','DxnLCI0','wujnrwq','zwrnCW','ywX0','y2TNCM8','t2zMC2u','igjSB2m','mNm7Cg8','AxHss3C','yMfS','u2nYzwu','uerZt3q','CNjVCG','ys1Tzw4','CMqTAgu','zvn5sLa','Fdj8n3W','Acbxzwi','B206mxa','wxDuvgO','Bg9NBY0','CgXHEwu','ndySmJm','t3bSsNm','zwz0oJe','Axr5oI4','uhD1z08','AhvKlwm','BMCGlYa','BIbYzwW','vhjorLe','rxLL','o21PBI0','nsWXmdC','BhD5uhe','ywLUAw4','BgvKoIa','Ec1ZAge','ChG7B3a','r0LYvNa','yNvPBhq','BcbKAxm','r0P6sg4','zM9UDa','ohW1Fda','oYi+u24','EKzzrhm','mtC3lc4','zwqU','lxjHzgK','rviGvvC','z2vZAhi','DdPZDge','ztTZDhi','Cu9tufm','lNnRlwW','zgnktuW','CvDJrMq','Dc5KBgW','BMnL','nYK7y3u','yKnvyNK','qwndEfu','lwe9iG','y3qGzM8','ihbHC3m','tfPQy0y','C2L6zq','Dw1UCZO','AxjLuhi','zw5NDgG','igDSB2i','lwfWCgu','wgTtuxa','D09lExK','DxDTAYa','vKPLuuW','wxL6ww0','C3bYAw4','mJy2nfj3tffYrG','vgHLiha','sfrnta','ifvxtuS','lcbZDgu','ktTWB2K','D29Yzc0','s1j6rfm','mJzWEdS','zgL1CZO','thnLzeW','BwzSvxO','yxbZAg8','CMvWBge','icaGDhK','C2LUz2W','zxG7z2e','zgLZCgW','ugXkB1q','ys5ZA2K','mJbWEca','DMvYEsa','odmYmty4wwT5qwPd','DuX4vM0','BhzLr2e','Dw5Kzwy','yZfKo2m','sgvHCca','yxjN','Bw4TC3u','tMHyzgG','sgTTt2m','uLHywuq','nty3yxP0ywTf','m3WYFdy','CJOXChG','Cw1sCeS','Bg9YoIm','zhrOoJi','CePKDMu','zgvYoJa','BMTLEsa','qwPrBwu','uwXIuxi','AwX0zxi','vhbxy0G','zxKGAxm','BdPPBMK','A0Dsuva','Bwv0ywq','otLWEdS','D3jHCdO','BMHTvhu','ztOXmxa','B05xzNy','wM5brva','oImXnta','q09ivMu','icaGia','yxbWBgK','uvjzt0m','yxjLBNq','Bw4TDgK','mtaIihi','CMDPBI0','pc9WCMu','AwrLE2q','zwq6ia','mNWYmhW','uLzhD2K','EIaOsw4','tfDIvM4','rhPZDuK','sLfHA2e','ndC0odm','B25Tzxm','C25HChm','m3WW','BI5FCNu','mhW3Fdy','FdmYFdi','BgLNBI0','Awv3','yt0IyMe','v3DKqLC','CMvMDxm','mJbWEcK','CgTWsLq','igzPCNm','mhG0ma','owm5o20','Dwj7zM8','DxjHx3m','lxnWywm','q2nisMy','A2vKihu','A2v5vxm','EfnPq2O','BgvMDa','De16DwS','CKnOzue','CdPYB3u','B25TB3u','ys1Hpsi','CgvYBw8','C2nHBge','zer0D28','AMDJvKK','iJ48l2q','zxnJ','v2fSAYa','D192mG','y3nZvgu','DvDWzLC','pt09u0e','sevbufu','y3bbrLG','EKHAs2q','yxqG','z2LUigC','z0XVEKy','u2nPDM8','BvLHBxa','te9h','oNbYzs0','yxHTCvO','CNLuANC','D0PeBwe','Bwz3ru4','uLmG','B1vHuNu','zxzLBNq','Cg9Zqxq','ztT3Awq','CMvMzxi','s1PIqu8','C291CMm','B0XHu2S','Bd0Ii2y','CKnVBNq','B0nvqK0','lYbQDw0','ywXSvMu','i2zMnMi','lGOkswy','t2vsCMS','DMvYBg8','sgvPz2G','DxnQDhG','mNb4o3O','uxPRuxC','B25PBNa','C2STBge','B25VC3a','z2v0sxq','DgHpsha','BgfIzwW','DhjVA2u','C3zNiIa','m3W5Fdm','cLSGif0','CMvHy2G','sw5ZDge','Ahq6nZa','icbJyw0','BwvZC2e','lde0mYW','ENf2q2i','q2X4sNK','oJe3ChG','zMLSBa','mNWWFdq','BgLNBG','z3jHyMi','ywXSzwq','qxf3s1G','zMzZzxq','Aw50zxi','BvHWsMW','oJHWEdS','CuDpy1O','ihjLywm','sNjizxy','lxaSnta','qu5pveG','ic0+ia','zxnZywC','BfLZDwu','yuLLCfy','yLDZEfC','oJPHzNq','whfmrKi','se1tzei','mZL8mZa','z2fsA3m','yY0XlJu','zhKIihm','BMC6nNa','Dg9WoJe','sLnhD1q','BgLKzxi','Bgf0zvK','CZPZDge','BMvJyxa','Be1vu3u','idqTnc4','q3DeCuK','zxmGB2y','Bg9Hzhm','lM1Ulxq','z1jbsNm','B3jPz2K','EdTMB24','EdOYmtq','nYWUnsK','B3rLE2y','imk3ihrL','Dxm6n3a','B2jQzwm','Buzlr1O','mtu3lc4','yxbP','zwvKzwq','u0TjteW','AxrSzxm','ywL0Aw4','igHLyxa','nsWXndm','uhLPEeS'];_0x53be=function(){return _0xbefe02;};return _0x53be();}
