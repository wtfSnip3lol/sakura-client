// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.9.14
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

function _0x49fc(_0x60f6a4,_0x31ae4d){_0x60f6a4=_0x60f6a4-(-0x116e+0x1933*0x1+-0x1*0x6bb);var _0x2c5da6=_0x24cc();var _0x446539=_0x2c5da6[_0x60f6a4];if(_0x49fc['tPVdpZ']===undefined){var _0x457bf3=function(_0x23e798){var _0x7a84f6='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x51411e='',_0x39eea3='';for(var _0x4b7c7d=-0x597*-0x3+-0x19*-0x23+-0x1430,_0x4250b6,_0x2dc8b7,_0x486fc2=0x1d*0x1+0x14*0x1e2+-0x25c5;_0x2dc8b7=_0x23e798['charAt'](_0x486fc2++);~_0x2dc8b7&&(_0x4250b6=_0x4b7c7d%(-0x6e*0x4f+0x6ed+0x1b09)?_0x4250b6*(-0x187*-0x11+-0x1c6*-0x7+-0x2621)+_0x2dc8b7:_0x2dc8b7,_0x4b7c7d++%(-0x200f+0x259b+-0x588))?_0x51411e+=String['fromCharCode'](-0x1a6*0x5+0x2488+0x19b*-0x11&_0x4250b6>>(-(-0x22d3+0x201b+0x2ba)*_0x4b7c7d&0x39e*0x4+-0x1*0x1ee5+0x1073*0x1)):-0x147f+0x215*-0x4+0x1cd3){_0x2dc8b7=_0x7a84f6['indexOf'](_0x2dc8b7);}for(var _0x1e9092=-0x1*-0x1d23+-0x221b+0xd4*0x6,_0x3df204=_0x51411e['length'];_0x1e9092<_0x3df204;_0x1e9092++){_0x39eea3+='%'+('00'+_0x51411e['charCodeAt'](_0x1e9092)['toString'](-0x1819+-0x2566*-0x1+-0x1*0xd3d))['slice'](-(0x1*0x20d4+-0xe68+-0x126a));}return decodeURIComponent(_0x39eea3);};_0x49fc['TtFLBP']=_0x457bf3,_0x49fc['pPtUdI']={},_0x49fc['tPVdpZ']=!![];}var _0x2b61d8=_0x2c5da6[-0x10ef+-0x25f7+0x36e6],_0x1f07f0=_0x60f6a4+_0x2b61d8,_0x5c1be2=_0x49fc['pPtUdI'][_0x1f07f0];return!_0x5c1be2?(_0x446539=_0x49fc['TtFLBP'](_0x446539),_0x49fc['pPtUdI'][_0x1f07f0]=_0x446539):_0x446539=_0x5c1be2,_0x446539;}(function(_0x20486c,_0x4a0ba0){var _0x15e278=_0x49fc,_0x9c2116=_0x20486c();while(!![]){try{var _0x28bab3=-parseInt(_0x15e278(0xa5f))/(0x2635+-0x83d*0x1+0x1df7*-0x1)+-parseInt(_0x15e278(0x2de))/(0xbb8+0x5*0x18b+-0x136d)+parseInt(_0x15e278(0xa40))/(0x908+-0x3d7+-0x52e)*(-parseInt(_0x15e278(0x4ef))/(-0x31*-0x3e+-0x1*0x6cd+0x50d*-0x1))+parseInt(_0x15e278(0x139))/(0xa31+0x1e77+-0x28a3)*(-parseInt(_0x15e278(0x796))/(-0x2*-0x3e8+0xe87+-0x1651))+-parseInt(_0x15e278(0x76d))/(0xe92+-0x24d6+0x1*0x164b)+-parseInt(_0x15e278(0x9af))/(-0x7*0x14+-0x2*-0x1319+-0x5a*0x6b)*(-parseInt(_0x15e278(0x558))/(-0x1546+0x7b9+0xd96))+parseInt(_0x15e278(0x6ea))/(0x117a*-0x1+0x4*0x259+0x820);if(_0x28bab3===_0x4a0ba0)break;else _0x9c2116['push'](_0x9c2116['shift']());}catch(_0x1f408e){_0x9c2116['push'](_0x9c2116['shift']());}}}(_0x24cc,0x79835+-0xbc974+0x12867e),((()=>{'use strict';var _0x1e5d49=_0x49fc,_0xf663c={'iaHjv':'HviVF','sBSxC':function(_0x1aea99,_0x6e1d2a){return _0x1aea99!==_0x6e1d2a;},'psema':function(_0x4bc644,_0x7aa9bf){return _0x4bc644===_0x7aa9bf;},'gLURn':_0x1e5d49(0x8af),'WyYmt':_0x1e5d49(0x398),'EiVnf':function(_0x46a033,_0x4be317){return _0x46a033!==_0x4be317;},'UXhfD':_0x1e5d49(0x95f),'geiQq':function(_0x329e0d,_0x588e50){return _0x329e0d(_0x588e50);},'cxzig':'sjBMA','KHMPs':function(_0x17cb67,_0x4b2e8a){return _0x17cb67-_0x4b2e8a;},'FPndJ':_0x1e5d49(0xc57),'mEuae':_0x1e5d49(0x6ca)+'a-sw-'+'v2','Skwuf':_0x1e5d49(0x6ca)+_0x1e5d49(0x2f6)+'v2-ta'+'b','aGzQp':_0x1e5d49(0x31b),'RkAam':function(_0x232c17,_0x29c434){return _0x232c17+_0x29c434;},'UxiiN':'posit'+_0x1e5d49(0x248)+'ixed;'+_0x1e5d49(0x905)+'12px;'+'top:1'+'2px;z'+_0x1e5d49(0x5dd)+'x:214'+'74829'+'99;cu'+'rsor:'+'point'+'er;us'+_0x1e5d49(0x8b1)+_0x1e5d49(0x4a5)+_0x1e5d49(0x46b),'qfizd':_0x1e5d49(0x6ca)+'a','YrpvR':function(_0xc1ab02,_0x110652){return _0xc1ab02!==_0x110652;},'IWOpa':_0x1e5d49(0x426),'jocLf':_0x1e5d49(0x6ca)+_0x1e5d49(0x2f6)+_0x1e5d49(0xc95)+'s','UInQl':function(_0x564157,_0x554f3f){return _0x564157!==_0x554f3f;},'VDEeW':function(_0x1093c4){return _0x1093c4();},'QhVzU':'%c[sa'+'kura]'+_0x1e5d49(0xc1a)+_0x1e5d49(0x1d0)+'abled','Cetts':_0x1e5d49(0x883),'yoMCI':_0x1e5d49(0x246),'CxZnZ':_0x1e5d49(0x16e),'KdvqN':function(_0x54908e,_0x10920e){return _0x54908e(_0x10920e);},'rkRsr':'snaps'+_0x1e5d49(0x7d4),'ZTWzu':function(_0xcc6535,_0x4e9ad6,_0x16c5f2){return _0xcc6535(_0x4e9ad6,_0x16c5f2);},'fdFly':_0x1e5d49(0x5ef)+'port\x20'+_0x1e5d49(0x1e2)+'\x2060s\x20'+_0x1e5d49(0x388)+'me\x20no'+_0x1e5d49(0xc62)+_0x1e5d49(0x7e1)+'?','ANrAj':_0x1e5d49(0x4df)+'c7','GqCBe':function(_0x4d86b9,_0x149dc1){return _0x4d86b9+_0x149dc1;},'DEFVa':function(_0x2265d1,_0x31e0fb){return _0x2265d1+_0x31e0fb;},'WAQIK':function(_0x4e371b,_0x1136b7){return _0x4e371b+_0x1136b7;},'dwukS':'\x20\x201.\x20'+_0x1e5d49(0x537)+_0x1e5d49(0x7d6)+'ey\x20is'+_0x1e5d49(0xa10)+_0x1e5d49(0xa06)+_0x1e5d49(0xc45)+_0x1e5d49(0x8cb)+'the\x20c'+_0x1e5d49(0xc70)+_0x1e5d49(0xc0c)+_0x1e5d49(0x770)+_0x1e5d49(0xbc9),'SMDQe':'\x20\x202.\x20'+'The\x20p'+'age\x20h'+_0x1e5d49(0x800)+_0x1e5d49(0xba3)+'n\x20rel'+'oaded'+_0x1e5d49(0x7fb)+_0x1e5d49(0x9c0)+'talli'+_0x1e5d49(0x29e),'weXjO':'0|2|3'+_0x1e5d49(0x4bb),'uVFtV':_0x1e5d49(0xb8e)+'1b','ZaXEs':_0x1e5d49(0x6f5)+_0x1e5d49(0x6b3)+'t','xVEYz':function(_0x2e0158,_0x4a0de2){return _0x2e0158===_0x4a0de2;},'YpXtu':_0x1e5d49(0x74b),'xSxZn':_0x1e5d49(0x644),'dboNA':_0x1e5d49(0x73b),'QQWmY':'2|0|3'+'|4|1','xfDaJ':function(_0x32aa2c,_0x293ef1){return _0x32aa2c(_0x293ef1);},'IVZPR':_0x1e5d49(0x28c)+_0x1e5d49(0x485)+_0x1e5d49(0x4be)+'0','zTaGF':function(_0x358cbf,_0x2ac619){return _0x358cbf+_0x2ac619;},'pJNaL':_0x1e5d49(0x862)+'ion:f'+_0x1e5d49(0xa5b)+'left:'+_0x1e5d49(0xbcd)+_0x1e5d49(0xb42)+'2px;z'+'-inde'+'x:214'+_0x1e5d49(0xbbb)+'00;ma'+'x-wid'+_0x1e5d49(0x7f6)+'n(52v'+'w,620'+_0x1e5d49(0x48c)+_0x1e5d49(0xa26)+_0x1e5d49(0xc7a)+_0x1e5d49(0x61f),'NWPfA':_0x1e5d49(0x52f)+_0x1e5d49(0x6f0)+_0x1e5d49(0x462)+_0x1e5d49(0x4dd)+_0x1e5d49(0x318)+_0x1e5d49(0xa4a)+'solas'+_0x1e5d49(0x72d)+_0x1e5d49(0xb11)+_0x1e5d49(0x994)+_0x1e5d49(0x3d8)+'w:0\x202'+'0px\x205'+'0px\x20-'+_0x1e5d49(0xb51)+'#000;','tVsBf':function(_0x2274f4,_0x99565){return _0x2274f4+_0x99565;},'twefs':function(_0x1eba0e,_0x24a54e){return _0x1eba0e+_0x24a54e;},'PyTrr':_0x1e5d49(0xb07)+_0x1e5d49(0x3a4)+_0x1e5d49(0x406)+'lwarz'+'</b>','mQeGZ':_0x1e5d49(0xa65)+'er:0;'+_0x1e5d49(0x492)+':#2a0'+'f1b;b'+'order'+'-radi'+'us:7p'+'x;pad'+'ding:'+'4px\x201'+'0px;f'+'ont-w'+_0x1e5d49(0x5de)+_0x1e5d49(0x351)+'curso'+'r:poi'+'nter;'+'\x22>Cop'+'y\x20JSO'+'N</bu'+_0x1e5d49(0x463),'iZBSc':_0x1e5d49(0x9c4)+_0x1e5d49(0x926)+'=\x22sw2'+_0x1e5d49(0xb0d)+'le\x22\x20s'+_0x1e5d49(0x3f8)+'\x22back'+_0x1e5d49(0x476)+_0x1e5d49(0x75c)+_0x1e5d49(0x57c)+_0x1e5d49(0x9d8)+_0x1e5d49(0x3eb)+_0x1e5d49(0x932)+'solid'+_0x1e5d49(0x448)+_0x1e5d49(0x7e3)+_0x1e5d49(0x53b)+_0x1e5d49(0xb7a)+_0x1e5d49(0xb6f)+'or:#f'+'7eef5'+_0x1e5d49(0xa65)+_0x1e5d49(0x6ad)+_0x1e5d49(0xaa4)+_0x1e5d49(0x5c1)+'addin'+_0x1e5d49(0x791)+_0x1e5d49(0x597)+'curso'+'r:poi'+_0x1e5d49(0x258)+_0x1e5d49(0x707)+_0x1e5d49(0xab8)+'tton>','prjyO':_0x1e5d49(0x3f1)+_0x1e5d49(0x426)+_0x1e5d49(0x909)+_0x1e5d49(0x9d2)+_0x1e5d49(0xbf9)+'2px;b'+_0x1e5d49(0x3eb)+'-bott'+'om:1p'+_0x1e5d49(0x1d8)+_0x1e5d49(0x803)+'ba(25'+_0x1e5d49(0xb26)+_0x1e5d49(0xac9)+_0x1e5d49(0x3d0)+_0x1e5d49(0xa20)+'ay:fl'+_0x1e5d49(0xb40)+_0x1e5d49(0x460)+';alig'+_0x1e5d49(0x3bc)+_0x1e5d49(0xa0b)+_0x1e5d49(0x258)+_0x1e5d49(0xbfb)+_0x1e5d49(0x2f1)+'uto;f'+'lex-w'+'rap:w'+'rap;\x22'+'>','ipXmt':'<butt'+'on\x20id'+_0x1e5d49(0x480)+'-spee'+_0x1e5d49(0xc04)+'yle=\x22'+'backg'+_0x1e5d49(0x1d4)+_0x1e5d49(0x7f8)+'spare'+_0x1e5d49(0x593)+'rder:'+_0x1e5d49(0x413)+_0x1e5d49(0xb33)+'rgba('+'255,1'+_0x1e5d49(0x1dc)+_0x1e5d49(0x18f)+_0x1e5d49(0xbc2)+_0x1e5d49(0x326)+_0x1e5d49(0xc4e)+_0x1e5d49(0x444)+_0x1e5d49(0x88e)+'ius:7'+'px;pa'+_0x1e5d49(0x91b)+_0x1e5d49(0xa88)+'10px;'+_0x1e5d49(0x195)+_0x1e5d49(0x132)+'nter;'+_0x1e5d49(0x645)+_0x1e5d49(0xa6e)+'f</bu'+_0x1e5d49(0x463),'LMqYV':_0x1e5d49(0xba5)+_0x1e5d49(0x598)+_0x1e5d49(0xa01)+'facto'+'r\x22\x20ty'+_0x1e5d49(0xae9)+_0x1e5d49(0x5b9)+_0x1e5d49(0x6e5)+_0x1e5d49(0xc87)+'ax=\x225'+_0x1e5d49(0x6e2)+_0x1e5d49(0xb2b)+_0x1e5d49(0xadc)+_0x1e5d49(0x7ef)+_0x1e5d49(0xb6e)+_0x1e5d49(0x673)+_0x1e5d49(0x99b)+_0x1e5d49(0x5db)+'x;acc'+_0x1e5d49(0x812)+_0x1e5d49(0xa93),'ITWtk':_0x1e5d49(0xa25),'oViug':'<span'+_0x1e5d49(0x2a4)+_0x1e5d49(0x972)+'actor'+_0x1e5d49(0xbb7)+'\x22\x20sty'+'le=\x22c'+_0x1e5d49(0xa93)+_0x1e5d49(0x5b3)+'c9;mi'+'n-wid'+'th:34'+_0x1e5d49(0x173)+'1.0x<'+_0x1e5d49(0x51c)+'>','vyyWo':'<pre\x20'+'id=\x22s'+_0x1e5d49(0xb4d)+_0x1e5d49(0x728)+_0x1e5d49(0x673)+'margi'+_0x1e5d49(0xb0f)+_0x1e5d49(0x884)+_0x1e5d49(0x716)+_0x1e5d49(0x968)+_0x1e5d49(0x99a)+_0x1e5d49(0x22b)+_0x1e5d49(0x2e4)+';flex'+_0x1e5d49(0x4d2)+'auto;'+_0x1e5d49(0x79f)+_0x1e5d49(0x4c1)+_0x1e5d49(0x8d8)+_0x1e5d49(0x5f1)+_0x1e5d49(0xaf5)+'-brea'+'k:bre'+_0x1e5d49(0x86f)+_0x1e5d49(0x96b)+'nt:in'+'herit'+';','oQFtP':'#sw2-'+'statu'+'s','wGIbl':'#sw2-'+'toggl'+'e','hIBpJ':_0x1e5d49(0x270)+_0x1e5d49(0x2ed),'Xnjfr':'#sw2-'+'hint','VLnwq':function(_0x5f162d,_0x1dc9cf,_0x4d2138){return _0x5f162d(_0x1dc9cf,_0x4d2138);},'tvsXJ':'\x20out\x20'+'of\x20ra'+_0x1e5d49(0xa6d),'bcQvu':_0x1e5d49(0x364)+_0x1e5d49(0x552),'hkryw':_0x1e5d49(0x1ff),'kOKQE':function(_0x3f9418,_0x13eda6){return _0x3f9418+_0x13eda6;},'gQzTV':'uwmk\x20'+_0x1e5d49(0x552),'yhRfX':function(_0x46cd1d,_0x244de3){return _0x46cd1d<_0x244de3;},'BHDZL':'HnESP','pcaxR':function(_0x256825,_0x193ffb){return _0x256825+_0x193ffb;},'LNEKg':_0x1e5d49(0xae3)+_0x1e5d49(0x3b6)+_0x1e5d49(0x394)+'\x20\x20\x20\x20\x20'+_0x1e5d49(0xaea)+'lue\x20\x20'+_0x1e5d49(0x61e)+'\x20\x20\x20\x20\x20'+_0x1e5d49(0x33d),'OGGdq':_0x1e5d49(0x6ee),'zcdcm':function(_0x58b64c,_0x1cf2dc){return _0x58b64c/_0x1cf2dc;},'TeyaI':function(_0x9d2206,_0x43fe29){return _0x9d2206+_0x43fe29;},'hxPaI':function(_0x216c05,_0x446544){return _0x216c05+_0x446544;},'JmnsS':function(_0x7ecac6,_0xa6950c){return _0x7ecac6+_0xa6950c;},'oLftr':'warni'+_0x1e5d49(0x847),'DUSFS':_0x1e5d49(0x64a),'OfahE':function(_0x4c59ea,_0x3c745d){return _0x4c59ea!==_0x3c745d;},'jceIr':function(_0x535a9a){return _0x535a9a();},'VJUgt':'repor'+'t','Trljc':'rjxur','ehvbG':_0x1e5d49(0x60b)+'kura]'+_0x1e5d49(0xc1a)+_0x1e5d49(0x29b)+'ate\x20f'+'ailed','LJAVF':function(_0x38ede4,_0x1a2010){return _0x38ede4===_0x1a2010;},'hfkqR':'hello','kktzN':function(_0x16a01b){return _0x16a01b();},'uxLMB':_0x1e5d49(0xabd),'REcUv':_0x1e5d49(0x8e1)+_0x1e5d49(0x29d)+'ntime'+_0x1e5d49(0x180)+'lveGa'+'me()','gqmTd':function(_0x1e743d,_0x32d677){return _0x1e743d(_0x32d677);},'YAiWx':function(_0x384291){return _0x384291();},'pldNI':_0x1e5d49(0xbaa),'jDGcs':'atIzV','ylswi':_0x1e5d49(0x434),'YhLIT':_0x1e5d49(0x350),'IRfBU':function(_0x1e5de9,_0x1c81c8){return _0x1e5de9!==_0x1c81c8;},'cAVrI':_0x1e5d49(0x492)+':','VgVhI':_0x1e5d49(0x6df)+'WebMo'+'dkit','ztdzN':function(_0x9bbe7d,_0x14c1ab){return _0x9bbe7d<_0x14c1ab;},'kohGT':_0x1e5d49(0x8a7),'SqHJS':'log','Rywno':_0x1e5d49(0x320),'YDQdq':_0x1e5d49(0x802),'LkzVa':function(_0x405297,_0x1fe5e1){return _0x405297<_0x1fe5e1;},'gcRBN':function(_0x4e3580,_0x114691){return _0x4e3580+_0x114691;},'nJOkq':function(_0x3d040f,_0xfac56e){return _0x3d040f*_0xfac56e;},'WTQWN':function(_0x4d57be,_0x22384a){return _0x4d57be>_0x22384a;},'GHDhu':_0x1e5d49(0x9ee),'ZVzxD':function(_0x53d6f3,_0x3ec733){return _0x53d6f3>_0x3ec733;},'IkvXZ':_0x1e5d49(0x3fd),'bbFIf':function(_0x4f9201,_0x22936d){return _0x4f9201!==_0x22936d;},'lFIsY':'undef'+'ined','lvWHc':'insta'+_0x1e5d49(0xa07)+_0x1e5d49(0x3b8)+'aming','zrzVi':_0x1e5d49(0xafd),'xsppV':_0x1e5d49(0x964)+_0x1e5d49(0x75e),'lJZcE':function(_0x38106a,_0x19927c){return _0x38106a+_0x19927c;},'FLtEg':function(_0x1065e2,_0x58bb8a){return _0x1065e2+_0x58bb8a;},'RLJXN':function(_0xe2b09a){return _0xe2b09a();},'KXphL':function(_0x4a8a69,_0x4fd842){return _0x4a8a69===_0x4fd842;},'opXNF':function(_0x3a3ca6,_0x23ac60){return _0x3a3ca6+_0x23ac60;},'GBVyb':function(_0x51d7a9,_0x5a532e,_0x1a3855,_0x505bdb){return _0x51d7a9(_0x5a532e,_0x1a3855,_0x505bdb);},'oXJta':_0x1e5d49(0x6ca)+_0x1e5d49(0x425)+'es','CHKES':_0x1e5d49(0xb7b),'IrKWD':'plugi'+_0x1e5d49(0x29d)+'ntime'+_0x1e5d49(0x472)+'e','yTjjL':_0x1e5d49(0x3be)+_0x1e5d49(0x2a0)+_0x1e5d49(0x187)+_0x1e5d49(0x277)+')','otAxH':function(_0x3dccfa,_0x3259a9){return _0x3dccfa!==_0x3259a9;},'gFMGY':_0x1e5d49(0x582),'PTXCJ':_0x1e5d49(0x776),'vujya':_0x1e5d49(0x3be)+_0x1e5d49(0xc30)+_0x1e5d49(0x2d6),'YlYAS':'windo'+_0x1e5d49(0x7bd)+'bal','axFdJ':'bare\x20'+'game\x20'+_0x1e5d49(0x3d6)+'ng','DTDds':function(_0x3b04a8,_0x19ae76){return _0x3b04a8===_0x19ae76;},'BYCAN':_0x1e5d49(0x785),'vEQjb':function(_0x4baa18,_0x378284){return _0x4baa18===_0x378284;},'UkjyL':function(_0x313420,_0x5f23b9){return _0x313420+_0x5f23b9;},'BYzFs':function(_0xf47c40,_0x3e3b42){return _0xf47c40+_0x3e3b42;},'OvjVd':'windo'+'w.','IXDab':'RJOAx','leCSa':'dxORF','lNPSl':_0x1e5d49(0x734),'LCeIo':_0x1e5d49(0xbb2),'VuPGF':function(_0x134a9f,_0x396f20){return _0x134a9f+_0x396f20;},'lVEsk':function(_0x25244d,_0x23ffc5){return _0x25244d===_0x23ffc5;},'aBSDa':'uUHTL','mtkWO':function(_0x224b15,_0x17c92d){return _0x224b15+_0x17c92d;},'bRnkU':_0x1e5d49(0x67e)+_0x1e5d49(0x73f),'fSQqH':_0x1e5d49(0xa35),'zcNgs':'u32','vrsMX':'f64','bLHnm':function(_0x5292a8,_0x237f20){return _0x5292a8(_0x237f20);},'LjYSx':function(_0x38bdd3,_0x39a087){return _0x38bdd3>_0x39a087;},'zNsKa':'u16','xWPcW':function(_0x59ba28,_0x1137be){return _0x59ba28|_0x1137be;},'dTXjC':function(_0xc0fc74,_0x129685){return _0xc0fc74|_0x129685;},'Xysqy':_0x1e5d49(0x9a9),'esGkM':'no\x20HE'+'APU8\x20'+'-\x20Uni'+_0x1e5d49(0x9fb)+'stanc'+'e\x20not'+'\x20reac'+_0x1e5d49(0x75f)+_0x1e5d49(0x5d5)+_0x1e5d49(0x3be)+_0x1e5d49(0x2a0)+'solve'+'Game('+')\x20or\x20'+_0x1e5d49(0x2bd)+_0x1e5d49(0x722)+_0x1e5d49(0x4a2)+'al','jILCk':function(_0x4284d3,_0x23b460){return _0x4284d3+_0x23b460;},'AWjlx':function(_0x5d93c9,_0x3ee01e){return _0x5d93c9+_0x3ee01e;},'TWbcE':_0x1e5d49(0x59b)+_0x1e5d49(0x3d5)+'\x20end\x20'+'0x','mnFQk':function(_0x44e797,_0xda0110){return _0x44e797<_0xda0110;},'JgiuZ':function(_0x5861af,_0xe1a477){return _0x5861af+_0xe1a477;},'hBRTL':function(_0x56efe6,_0x4442c8){return _0x56efe6!==_0x4442c8;},'UVTav':_0x1e5d49(0x273),'mJtJu':function(_0x2f2e06,_0x2c65c4){return _0x2f2e06===_0x2c65c4;},'gSLQM':_0x1e5d49(0x306),'DeGpx':function(_0x1673ad,_0x2f67e2){return _0x1673ad&_0x2f67e2;},'HVier':function(_0x43d73d,_0x3979de){return _0x43d73d(_0x3979de);},'OHRgo':'obfI','RIdkt':function(_0x1ac3b1,_0x5541cb){return _0x1ac3b1===_0x5541cb;},'AIiYn':function(_0x25e1b7,_0x479966){return _0x25e1b7|_0x479966;},'kUcDJ':function(_0x282e57,_0x3ceb56){return _0x282e57^_0x3ceb56;},'rljbr':function(_0x34a442,_0x508fca,_0xa19525,_0xb2b696){return _0x34a442(_0x508fca,_0xa19525,_0xb2b696);},'WNtlT':function(_0x44978b,_0xaf4f8){return _0x44978b+_0xaf4f8;},'blslz':_0x1e5d49(0xc44),'gKHAH':function(_0x191b74,_0x334bd4,_0x50eb53){return _0x191b74(_0x334bd4,_0x50eb53);},'wkXlY':function(_0x4cc9d8,_0x51bb48){return _0x4cc9d8+_0x51bb48;},'FAqxh':function(_0x489956,_0x4132a9,_0x2d8737){return _0x489956(_0x4132a9,_0x2d8737);},'hzgYq':function(_0x1fc429,_0x1808a9){return _0x1fc429===_0x1808a9;},'ijybK':function(_0xea11fc,_0x386595){return _0xea11fc+_0x386595;},'bzLRd':function(_0x22bd62,_0x979773,_0x2408e8,_0x45d001){return _0x22bd62(_0x979773,_0x2408e8,_0x45d001);},'AhbSI':function(_0x371b57,_0x2506be){return _0x371b57===_0x2506be;},'RQBKY':function(_0x7330af,_0x28e680,_0x5125ff,_0x5017db){return _0x7330af(_0x28e680,_0x5125ff,_0x5017db);},'pZUFD':function(_0x34b289,_0x294fb5){return _0x34b289===_0x294fb5;},'imoDz':function(_0x1e18ea,_0x57480b,_0x439e17,_0x24ecca){return _0x1e18ea(_0x57480b,_0x439e17,_0x24ecca);},'fIWUV':_0x1e5d49(0x333)+'r','LXfvg':'bRPyE','Dletp':function(_0x292650,_0x32fa6e){return _0x292650<_0x32fa6e;},'hzaDI':function(_0xb05d2d,_0xd73ce0){return _0xb05d2d+_0xd73ce0;},'jCInr':function(_0x4a4d9d,_0x59bc2c,_0x44ea3b,_0x3d7e8a,_0x40aefe){return _0x4a4d9d(_0x59bc2c,_0x44ea3b,_0x3d7e8a,_0x40aefe);},'AklzB':function(_0x3944c0,_0x5083d3){return _0x3944c0===_0x5083d3;},'aJWKV':_0x1e5d49(0x135),'fLOap':'ojJGM','ECoaC':function(_0xe8e70b,_0x43a352){return _0xe8e70b<_0x43a352;},'mWEwp':function(_0x2d656f,_0x512283){return _0x2d656f!==_0x512283;},'EVYsD':_0x1e5d49(0xa89),'USRvj':'float','KzOxy':_0x1e5d49(0x2ac)+_0x1e5d49(0x76a),'IoeDC':function(_0x796140,_0x33f228,_0x3180d4){return _0x796140(_0x33f228,_0x3180d4);},'tYnvM':'get','dXiBI':'void','OoTgD':function(_0x1013b0,_0x43d8e8){return _0x1013b0(_0x43d8e8);},'TarPz':function(_0x4d9a0f,_0xcc855){return _0x4d9a0f+_0xcc855;},'omfVy':'+0x','zXfTL':function(_0x599567,_0x284c26){return _0x599567>>>_0x284c26;},'OigZn':function(_0x277cdf,_0x56d4c9){return _0x277cdf(_0x56d4c9);},'yFjSv':function(_0x41b131,_0x48188a){return _0x41b131<=_0x48188a;},'nheAy':function(_0x37a555,_0x485d90){return _0x37a555>=_0x485d90;},'DXWfa':function(_0x642a21,_0x56c73b){return _0x642a21<=_0x56c73b;},'BSBNn':function(_0xdfa358,_0x6ba126){return _0xdfa358!==_0x6ba126;},'UBjtF':function(_0x3fe584,_0x2eb09f){return _0x3fe584+_0x2eb09f;},'fRAzH':'both\x20'+_0x1e5d49(0x1f2)+'ed','GMDIV':'windo'+'w.Uni'+_0x1e5d49(0x1ee)+'Modki'+_0x1e5d49(0x782)+'ueWra'+_0x1e5d49(0xbb3)+_0x1e5d49(0x1a7)+_0x1e5d49(0x57e)+_0x1e5d49(0x3de)+_0x1e5d49(0x199)+'\x20is\x20r'+'unnin'+'g\x20bli'+_0x1e5d49(0x918),'xlOob':_0x1e5d49(0x633),'LcdAz':_0x1e5d49(0x46a)+_0x1e5d49(0x4c6)+_0x1e5d49(0x4c9)+_0x1e5d49(0x2cc)+_0x1e5d49(0xbd0)+'}','nHfDy':_0x1e5d49(0x440),'oAJmg':function(_0x51ac8d,_0x1df021){return _0x51ac8d>_0x1df021;},'qSJqa':_0x1e5d49(0xc67),'cBCdk':'f32','FbdQR':function(_0x246e2e,_0x2cb8e5){return _0x246e2e===_0x2cb8e5;},'erhqO':_0x1e5d49(0x2c8),'PhpHC':function(_0x58bf9a,_0x32580c,_0x1f701d){return _0x58bf9a(_0x32580c,_0x1f701d);},'koxsv':_0x1e5d49(0xb59)+_0x1e5d49(0xa07)+_0x1e5d49(0x906)+_0x1e5d49(0x419)+'s.mem'+'ory','SEGEf':'mn-pa'+'nel','LfvvH':'\x20show'+'n','fqnGH':function(_0x39efb3,_0x71573){return _0x39efb3===_0x71573;},'LIRsR':'kdWkV','zrXau':_0x1e5d49(0x7f5),'SdWPA':_0x1e5d49(0x8d5)+'|5|2|'+_0x1e5d49(0x367),'DRtNI':function(_0x37cd16,_0x32f6e7){return _0x37cd16===_0x32f6e7;},'AobwO':function(_0x31beb0,_0x2b80e3,_0x53bd0c){return _0x31beb0(_0x2b80e3,_0x53bd0c);},'vrSwI':'NPC_C'+_0x1e5d49(0x9f6)+_0x1e5d49(0xb78),'onIMM':'FPSco'+_0x1e5d49(0x2e2)+_0x1e5d49(0xb78),'luhsJ':function(_0x4e5adc,_0x408c6d){return _0x4e5adc+_0x408c6d;},'mgpUl':function(_0x5b31f9,_0x597f15){return _0x5b31f9+_0x597f15;},'FZsXR':function(_0x5c330a,_0x4f622a){return _0x5c330a+_0x4f622a;},'PsgNW':'the\x20l'+_0x1e5d49(0xb4f)+_0x1e5d49(0xac6)+_0x1e5d49(0x7c7)+_0x1e5d49(0x9bf)+_0x1e5d49(0x7e5)+_0x1e5d49(0x62a)+'n\x20INS'+_0x1e5d49(0xbff)+_0x1e5d49(0x217)+'\x20roun'+'d,\x20no'+_0x1e5d49(0x8c5)+'\x20menu'+'.','EToOd':'isLoc'+'al\x20on'+_0x1e5d49(0x30f)+_0x1e5d49(0x1c4)+_0x1e5d49(0xbe6)+'`play'+_0x1e5d49(0xadb),'IDsku':function(_0x34d2a4,_0x5f36bf){return _0x34d2a4<_0x5f36bf;},'xUjPU':function(_0x393ed2,_0x4be9af){return _0x393ed2+_0x4be9af;},'aKeHF':'KYxqs','BcdEd':function(_0x5ceaae,_0x503965){return _0x5ceaae+_0x503965;},'USDgo':function(_0xe2ffe2,_0x2f7d55){return _0xe2ffe2+_0x2f7d55;},'rvURk':function(_0x18c09d,_0x488af7){return _0x18c09d+_0x488af7;},'jKmbz':_0x1e5d49(0x933)+'\x20','OubAe':function(_0x5cef6b,_0x5b578d){return _0x5cef6b+_0x5b578d;},'OQMMd':_0x1e5d49(0xbb9)+_0x1e5d49(0xa37)+_0x1e5d49(0xb64)+_0x1e5d49(0xb88)+'y?)\x20\x20'+_0x1e5d49(0xc88),'DceRr':'#7ee0'+'a8','JDCOA':_0x1e5d49(0x511)+'99','ANsLQ':_0x1e5d49(0xc94),'Gwcgd':function(_0x7b27b6,_0x320731,_0x2848e1){return _0x7b27b6(_0x320731,_0x2848e1);},'ehOQh':function(_0x3f4084,_0x33e527){return _0x3f4084+_0x33e527;},'vfQqT':function(_0x1764c2,_0x2130de){return _0x1764c2===_0x2130de;},'VUJJe':function(_0x251d25,_0x546afb){return _0x251d25===_0x546afb;},'SNapU':function(_0x6c6e93,_0x1a5916){return _0x6c6e93===_0x1a5916;},'nhliq':function(_0x23872e,_0x4ece40){return _0x23872e===_0x4ece40;},'nbJZr':function(_0x64456b,_0x396840){return _0x64456b>_0x396840;},'GHYJl':'\x20+\x20','CtEmE':_0x1e5d49(0x816)+'\x20','YboJE':function(_0x5d6326,_0x336606){return _0x5d6326+_0x336606;},'faHmh':_0x1e5d49(0x2bc),'IHXgy':function(_0x5c2b57,_0x5ac766){return _0x5c2b57+_0x5ac766;},'MXAiL':_0x1e5d49(0xae4),'pQwPA':_0x1e5d49(0x33f),'nyavn':'obf','WLLmy':'obfB','sAEty':function(_0x418751,_0x2ec631){return _0x418751===_0x2ec631;},'RbdOs':function(_0x137dbe,_0x44dad1){return _0x137dbe===_0x44dad1;},'OSBhg':function(_0x1df8b1,_0x34ad76){return _0x1df8b1<_0x34ad76;},'rTdTU':function(_0x43bf54,_0x3c0902){return _0x43bf54&&_0x3c0902;},'HVtxx':function(_0x4b05a1,_0x5cc9fa){return _0x4b05a1+_0x5cc9fa;},'tBbRu':_0x1e5d49(0x5f7),'dZofM':function(_0x156954,_0x16a591){return _0x156954===_0x16a591;},'nMuEd':function(_0x27548f,_0x48deaa){return _0x27548f===_0x48deaa;},'VlKCM':'Mouse'+_0x1e5d49(0x623)+_0x1e5d49(0x53a)+'a','PnUeg':function(_0x3de04b,_0x64c6b2){return _0x3de04b===_0x64c6b2;},'hwAjY':_0x1e5d49(0x57a),'AqxJn':_0x1e5d49(0xc90),'DjVvw':function(_0x5307d4,_0x5f5606){return _0x5307d4!==_0x5f5606;},'otSNE':_0x1e5d49(0x3c7),'jAgrO':'WUxSm','FoMlL':_0x1e5d49(0x4af)+'74','zOIFX':_0x1e5d49(0x2da)+_0x1e5d49(0x5f5)+_0x1e5d49(0x1dc)+_0x1e5d49(0x4b2)+')','EBFHk':'NsFpg','xpFwv':'jffhd','fLnTC':function(_0x3e3f61,_0xc691c1){return _0x3e3f61===_0xc691c1;},'lxASK':function(_0xd8c7cb,_0x218eea){return _0xd8c7cb!==_0x218eea;},'Ivwkh':function(_0xffc78,_0x235f40){return _0xffc78!==_0x235f40;},'VJcBN':function(_0x160b26,_0x7717d){return _0x160b26+_0x7717d;},'JFPJS':_0x1e5d49(0x7f0),'slfhp':'canva'+'s','djwXV':'posit'+_0x1e5d49(0x248)+_0x1e5d49(0xa5b)+_0x1e5d49(0x905)+_0x1e5d49(0xa99)+':0;z-'+_0x1e5d49(0x4e4)+_0x1e5d49(0x400)+_0x1e5d49(0x775)+'5;poi'+_0x1e5d49(0xc59)+_0x1e5d49(0x9d7)+_0x1e5d49(0x5fc)+'e;','adPyF':'\x20·\x20te'+'am','prdjl':'QJUvr','syUvV':_0x1e5d49(0x5f6),'owbDV':function(_0x18f6fe,_0x1d296e,_0x3b50bd){return _0x18f6fe(_0x1d296e,_0x3b50bd);},'DURsk':_0x1e5d49(0x6ca)+_0x1e5d49(0x2f6)+_0x1e5d49(0xc48)+'ss','mYDYS':function(_0xc44822,_0x2de8f4){return _0xc44822+_0x2de8f4;},'JNYyS':function(_0x18a4ed,_0x189307){return _0x18a4ed+_0x189307;},'CPSWW':_0x1e5d49(0x40f)+_0x1e5d49(0x1d4)+_0x1e5d49(0xaeb)+_0x1e5d49(0x9b9)+'2,29,'+'.92);'+'borde'+_0x1e5d49(0xa79)+_0x1e5d49(0x4a4)+_0x1e5d49(0xc96)+'a(255'+_0x1e5d49(0x397)+'177,.'+_0x1e5d49(0x92f)+_0x1e5d49(0x3eb)+_0x1e5d49(0x614)+_0x1e5d49(0x206)+'px;','NtARH':'paddi'+'ng:6p'+'x\x208px'+';font'+_0x1e5d49(0x7a5)+_0x1e5d49(0x373)+'\x20ui-m'+'onosp'+'ace,C'+_0x1e5d49(0x39d)+'as,mo'+_0x1e5d49(0x65a)+_0x1e5d49(0xc41)+_0x1e5d49(0x8d4)+_0x1e5d49(0x6f6)+'5;','yiKJG':_0x1e5d49(0x451)+'hadow'+_0x1e5d49(0x86a)+_0x1e5d49(0x161)+'px\x20-1'+'2px\x20#'+_0x1e5d49(0x5aa)+'ser-s'+_0x1e5d49(0xa84)+':none'+_0x1e5d49(0x622)+'kit-u'+'ser-s'+_0x1e5d49(0xa84)+':none'+';','WAscL':function(_0x158654,_0x5d1f25){return _0x158654+_0x5d1f25;},'QQeau':function(_0x225d5a,_0x544bef){return _0x225d5a+_0x544bef;},'bzVDT':function(_0x2e02a8,_0x325e82){return _0x2e02a8+_0x325e82;},'LPYgj':'<butt'+_0x1e5d49(0x995)+_0x1e5d49(0x194)+_0x1e5d49(0x689)+_0x1e5d49(0x426)+_0x1e5d49(0xb81)+_0x1e5d49(0x26e)+'nd:tr'+_0x1e5d49(0x37c)+'rent;'+'borde'+_0x1e5d49(0xa79)+'\x20soli'+_0x1e5d49(0xc96)+_0x1e5d49(0x268)+_0x1e5d49(0x397)+'177,.'+_0x1e5d49(0x137),'rYnZS':'color'+_0x1e5d49(0x47b)+_0x1e5d49(0xc86)+_0x1e5d49(0x3eb)+_0x1e5d49(0x614)+'us:6p'+_0x1e5d49(0x309)+_0x1e5d49(0x9d2)+_0x1e5d49(0x9fe)+_0x1e5d49(0xc83)+_0x1e5d49(0x22f)+_0x1e5d49(0x296)+_0x1e5d49(0xad7)+_0x1e5d49(0x866)+_0x1e5d49(0x332)+_0x1e5d49(0xa7b)+'eed\x20o'+_0x1e5d49(0x7b5)+_0x1e5d49(0x6a9)+'>','beJRX':_0x1e5d49(0xba5)+_0x1e5d49(0x6c3)+'a-a=\x22'+_0x1e5d49(0x576)+_0x1e5d49(0x1ca)+_0x1e5d49(0x790)+_0x1e5d49(0x26d)+'=\x221\x22\x20'+'max=\x22'+'5\x22\x20st'+_0x1e5d49(0x1ec)+'.5\x22\x20v'+_0x1e5d49(0x41a)+'\x222\x22\x20s'+_0x1e5d49(0x3f8)+'\x22widt'+_0x1e5d49(0x282)+_0x1e5d49(0x3cf)+'ent-c'+_0x1e5d49(0xa93),'fRFKD':_0x1e5d49(0x492)+':#f7e'+_0x1e5d49(0xc86)+'order'+_0x1e5d49(0x614)+_0x1e5d49(0x820)+_0x1e5d49(0x309)+_0x1e5d49(0x9d2)+_0x1e5d49(0x12a)+'px;cu'+'rsor:'+'point'+_0x1e5d49(0xad7)+'nt:in'+_0x1e5d49(0x332)+';\x22>ES'+_0x1e5d49(0x4aa)+'/butt'+_0x1e5d49(0x6e4),'vApDa':_0x1e5d49(0x9c4)+'on\x20da'+_0x1e5d49(0x194)+'\x22snap'+'\x22\x20sty'+'le=\x22b'+'ackgr'+'ound:'+'trans'+_0x1e5d49(0x6b3)+'t;bor'+'der:1'+_0x1e5d49(0x68b)+'lid\x20r'+'gba(2'+_0x1e5d49(0x337)+_0x1e5d49(0x404)+_0x1e5d49(0x518)+';','bShAp':_0x1e5d49(0x9c4)+_0x1e5d49(0x995)+_0x1e5d49(0x194)+_0x1e5d49(0x1f5)+_0x1e5d49(0x8ed)+_0x1e5d49(0x6b4)+_0x1e5d49(0x58e)+'-left'+_0x1e5d49(0x2e4)+';back'+_0x1e5d49(0x476)+'d:tra'+_0x1e5d49(0x57c)+_0x1e5d49(0x9d8)+_0x1e5d49(0x3eb)+':1px\x20'+_0x1e5d49(0x6bf)+_0x1e5d49(0x448)+_0x1e5d49(0x7e3)+_0x1e5d49(0x53b)+_0x1e5d49(0xb7a)+'5);','ubTtK':_0x1e5d49(0x492)+_0x1e5d49(0x47b)+_0x1e5d49(0xc86)+'order'+_0x1e5d49(0x614)+'us:6p'+_0x1e5d49(0x309)+'ding:'+'1px\x206'+_0x1e5d49(0xc83)+_0x1e5d49(0x22f)+'point'+_0x1e5d49(0xad7)+'nt:in'+_0x1e5d49(0x332)+_0x1e5d49(0xb9d)+_0x1e5d49(0x5d0)+_0x1e5d49(0x6e4),'PBOIK':'<div\x20'+'data-'+_0x1e5d49(0xc31)+'\x22\x20sty'+_0x1e5d49(0x4fc)+_0x1e5d49(0xa93)+_0x1e5d49(0x511)+'99;ma'+_0x1e5d49(0x65e)+_0x1e5d49(0x2cb)+'0px;\x22'+_0x1e5d49(0x6f2)+'v>','oNoZk':function(_0x1e57da,_0x29e9f3){return _0x1e57da(_0x29e9f3);},'ZLcqN':function(_0x2bc8f0,_0x3714e1){return _0x2bc8f0(_0x3714e1);},'uJvnb':function(_0x1dd7f1,_0x8d8bd3){return _0x1dd7f1(_0x8d8bd3);},'JrXFJ':function(_0x1702a4,_0x27fb18){return _0x1702a4(_0x27fb18);},'hYWgY':function(_0x38cad6,_0x15c99c){return _0x38cad6(_0x15c99c);},'tNfJi':'fold','eYhHu':function(_0x3bf715,_0x44b37d){return _0x3bf715!==_0x44b37d;},'GwtHF':_0x1e5d49(0x818),'tsVqw':function(_0x30b54e){return _0x30b54e();},'QHhUo':_0x1e5d49(0x17b)+_0x1e5d49(0x42c)+_0x1e5d49(0xb3d),'Zhgyh':_0x1e5d49(0x732)+'ff','lxSPE':_0x1e5d49(0x48e)+'ap','LGONT':'rEjjs','ncPFa':'JmSiR','jOkpV':_0x1e5d49(0x70a),'UrsWV':_0x1e5d49(0x193),'vcbIx':function(_0x84e1b3,_0x445359){return _0x84e1b3===_0x445359;},'whapU':'bJIVr','pDhNI':function(_0xb116de,_0x1f1ffa){return _0xb116de+_0x1f1ffa;},'VSVhH':_0x1e5d49(0x915)+'n=','bhEiV':_0x1e5d49(0x459)+'h=','zagLn':'\x20floo'+'r=','YgzWB':'unity'+_0x1e5d49(0x98e),'CCPPA':'unity'+'Insta'+_0x1e5d49(0xb1b)+_0x1e5d49(0x8f4),'pJvwb':function(_0x4818d3,_0x372a9f){return _0x4818d3===_0x372a9f;},'MqzMC':'QqAVK','mpvcK':_0x1e5d49(0x6b2)+'m','KTFWc':function(_0x5ab062,_0x24c010){return _0x5ab062+_0x24c010;},'dgOKF':_0x1e5d49(0x9ad)+_0x1e5d49(0x5fe),'TZUsQ':'AeMZr','cPObv':'mCIhP','SUwzJ':_0x1e5d49(0x181)+_0x1e5d49(0x66b),'ifEWP':_0x1e5d49(0x8ac),'mpCWl':function(_0x10e7f1,_0x5743bd,_0x3603d5){return _0x10e7f1(_0x5743bd,_0x3603d5);},'wAhPr':function(_0x1a906d,_0x3f6577,_0x35f36f){return _0x1a906d(_0x3f6577,_0x35f36f);},'HBudA':function(_0x557f9e,_0x100285){return _0x557f9e+_0x100285;},'bMURI':function(_0x29aa3a,_0x223592){return _0x29aa3a===_0x223592;},'oPJcr':_0x1e5d49(0x7da),'fcuHU':'Inser'+'t','EaIvm':'Brack'+_0x1e5d49(0x5e5)+'t','DpPoP':function(_0x4f4f5c,_0x5684fc){return _0x4f4f5c-_0x5684fc;},'GVoEh':function(_0x12dd77,_0x169214){return _0x12dd77+_0x169214;},'eeQko':function(_0x5ca06c,_0x414515){return _0x5ca06c>>>_0x414515;},'IQzdW':function(_0x202cf2,_0x44731b){return _0x202cf2===_0x44731b;},'eYoOB':function(_0x49c42e,_0x3b7949){return _0x49c42e!==_0x3b7949;},'lzQcM':function(_0xfb4933,_0x5ec97d){return _0xfb4933+_0x5ec97d;},'IVGDE':function(_0x77ef1,_0x45a108){return _0x77ef1+_0x45a108;},'TldVy':function(_0x364a0b,_0x939c){return _0x364a0b*_0x939c;},'GPWEs':function(_0x4c8571,_0x482bf6){return _0x4c8571-_0x482bf6;},'hIiBh':function(_0x7e7034,_0x42631e){return _0x7e7034+_0x42631e;},'QlVtq':function(_0x48af41,_0x32df85){return _0x48af41*_0x32df85;},'nsNzL':function(_0x485413,_0x12449d){return _0x485413*_0x12449d;},'eYNjr':function(_0x1912fe,_0x211ac1){return _0x1912fe*_0x211ac1;},'wDPTg':function(_0x36ca5c,_0x2756ce){return _0x36ca5c*_0x2756ce;},'DyQSL':function(_0x4f75a7,_0x484914){return _0x4f75a7*_0x484914;},'iFRMy':function(_0x44acde,_0xb954f1){return _0x44acde*_0xb954f1;},'ETaYB':function(_0x5bdfeb,_0x1acac0){return _0x5bdfeb-_0x1acac0;},'cVIYW':function(_0x41f003,_0x51ef1e){return _0x41f003/_0x51ef1e;},'HHDrA':function(_0x88faf1,_0x360582){return _0x88faf1!=_0x360582;},'ObmAS':_0x1e5d49(0xa41),'FRTXq':'ZNRNj','TwULA':'sk-ca'+_0x1e5d49(0xa1f)+'ad','haYZK':'sk-ca'+'rd','pQgHl':'\x20on','rzZIF':_0x1e5d49(0xc84),'yxPkB':'sk-sl'+_0x1e5d49(0x7c9),'dEJxM':_0x1e5d49(0x790),'PwEQl':function(_0x3b2e8f,_0x48410f){return _0x3b2e8f(_0x48410f);},'gTkDa':function(_0x295772,_0x2443c2,_0x31363b){return _0x295772(_0x2443c2,_0x31363b);},'AgIpI':function(_0x310c12,_0x37c6f9,_0x188fa1){return _0x310c12(_0x37c6f9,_0x188fa1);},'JqfJL':function(_0x15c5a5,_0x3a11d6,_0x25619e,_0x2319d2){return _0x15c5a5(_0x3a11d6,_0x25619e,_0x2319d2);},'LQZtQ':'vTAvt','HEJBh':function(_0x4abd1f,_0x3ae82a,_0x137191){return _0x4abd1f(_0x3ae82a,_0x137191);},'Lmuap':function(_0x41289f,_0x1bacf0){return _0x41289f+_0x1bacf0;},'mUdvf':function(_0x1ff886,_0x27238d){return _0x1ff886+_0x27238d;},'SylZh':function(_0x185ee4){return _0x185ee4();},'LvUJQ':function(_0x288665,_0x1187d0,_0x397005){return _0x288665(_0x1187d0,_0x397005);},'KcNot':function(_0x3d19a8){return _0x3d19a8();},'BvVEP':_0x1e5d49(0x11b),'AZNTr':function(_0x444ec8,_0x45239f,_0xed041b){return _0x444ec8(_0x45239f,_0xed041b);},'ebIaE':_0x1e5d49(0x41e)+'an','eHOlj':function(_0x34b072){return _0x34b072();},'uWdkw':function(_0x5f134d,_0x317bba){return _0x5f134d*_0x317bba;},'PsBPC':_0x1e5d49(0x6c8)+_0x1e5d49(0xb89),'WPfNT':'oLhLB','Chami':'wIKYg','VpxDs':_0x1e5d49(0xbcf),'agohu':'Speed'+'\x20hack','QDxNu':function(_0x13288d,_0x46e0f9,_0x368f46,_0x386642){return _0x13288d(_0x46e0f9,_0x368f46,_0x386642);},'slQSk':function(_0x4f9f2c,_0x2f67df){return _0x4f9f2c+_0x2f67df;},'fvMjJ':_0x1e5d49(0x88d)+_0x1e5d49(0x1cd),'RSmbw':function(_0x3ed9ee,_0x24340c,_0x43ed35,_0x3f6508){return _0x3ed9ee(_0x24340c,_0x43ed35,_0x3f6508);},'HjgJH':_0x1e5d49(0x1e4)+'n','daxfg':_0x1e5d49(0x87a)+'hot\x20n'+_0x1e5d49(0x6e0)+'9)','IqkCn':'butto'+'n','HdFrW':_0x1e5d49(0xc4b)+_0x1e5d49(0xc78)+'ot\x20\x20\x20'+'\x20F7\x20\x20'+_0x1e5d49(0x11b)+_0x1e5d49(0x3b1)+'ff\x0aF8'+'\x20/\x20F6'+_0x1e5d49(0xb56)+_0x1e5d49(0xc18)+'/-0.5'+_0x1e5d49(0xbc0)+'\x20\x20fie'+_0x1e5d49(0xb2c)+'\x20view'+_0x1e5d49(0x7b1)+'rt\x20\x20t'+'his\x20m'+'enu','oIWsq':function(_0x4dff73,_0x106b45,_0x1b3772){return _0x4dff73(_0x106b45,_0x1b3772);},'rJyqH':function(_0x41c190,_0x125018,_0x4e500b,_0x2f0b24){return _0x41c190(_0x125018,_0x4e500b,_0x2f0b24);},'JOBRi':'World'+_0x1e5d49(0x4c1)+'e\x20min'+_0x1e5d49(0x4c5)+'\x20top-'+_0x1e5d49(0xb12)+'.\x20Nee'+_0x1e5d49(0x471)+'ly\x20po'+_0x1e5d49(0x609)+_0x1e5d49(0x416),'qacPj':function(_0x145b4c,_0x38ebf9,_0x26514d){return _0x145b4c(_0x38ebf9,_0x26514d);},'iSRLC':_0x1e5d49(0x261)+_0x1e5d49(0x62c)+'s\x20acr'+_0x1e5d49(0x3ba)+_0x1e5d49(0xb27)+_0x1e5d49(0x1c6),'WNayI':'Boxes','ikTPZ':_0x1e5d49(0x96e)+_0x1e5d49(0x22c)+'g.\x20','aMSoY':_0x1e5d49(0x3d1)+_0x1e5d49(0x225)+'s\x20uni'+'denti'+_0x1e5d49(0x52b),'MFBDQ':_0x1e5d49(0xbfc)+'n-spa'+'ce\x20bo'+_0x1e5d49(0x83f)+_0x1e5d49(0xc37)+_0x1e5d49(0x760)+_0x1e5d49(0x3ed)+_0x1e5d49(0xa53)+'nnot\x20'+'be\x20re'+'ad\x20fr'+_0x1e5d49(0x2f0)+'is\x20bu'+_0x1e5d49(0x546)+'so\x20it'+'\x20is\x20f'+_0x1e5d49(0x2c5)+_0x1e5d49(0x2a9)+_0x1e5d49(0xc01),'obIaE':'[\x20and'+'\x20]\x20al'+_0x1e5d49(0x58f)+_0x1e5d49(0x842)+'is','lMQbl':function(_0x5b226f,_0x124341,_0x8902d0){return _0x5b226f(_0x124341,_0x8902d0);},'Jgcnk':'fov\x20b'+_0x1e5d49(0xbd4)+'o\x2075,'+'\x20offs'+'ets\x20c'+_0x1e5d49(0x95e),'xMQNc':'Reset','RfGZY':_0x1e5d49(0x816)+'era\x20','zpAYJ':_0x1e5d49(0x4b6)+_0x1e5d49(0x63a)+_0x1e5d49(0x879)+'t','JNGqX':function(_0x1da572,_0x5d0de7){return _0x1da572+_0x5d0de7;},'ASaoO':function(_0x1d6eb1,_0x3f2295){return _0x1d6eb1+_0x3f2295;},'HceJI':_0x1e5d49(0x262)+'h\x20','yeVsJ':function(_0x2b93b6,_0x491669){return _0x2b93b6===_0x491669;},'xrgxn':'gette'+'r','cwtZQ':function(_0x257091,_0x542493){return _0x257091+_0x542493;},'YDIdV':'\x20=\x20','LMIDA':_0x1e5d49(0x183)+_0x1e5d49(0xb14)+_0x1e5d49(0x946)+_0x1e5d49(0x5c7)+_0x1e5d49(0x751)+'ets\x20+'+_0x1e5d49(0x719)+_0x1e5d49(0x8ca)+_0x1e5d49(0x692)+_0x1e5d49(0x8cf)+'ngle\x20'+_0x1e5d49(0x7f2)+_0x1e5d49(0xc14)+_0x1e5d49(0xa10)+_0x1e5d49(0x1cf)+_0x1e5d49(0xb21),'iqFBU':function(_0x4f1cb7,_0x264767){return _0x4f1cb7+_0x264767;},'sfHtl':function(_0x599703,_0x5a0975){return _0x599703+_0x5a0975;},'osiYm':_0x1e5d49(0x60a),'UdIKf':_0x1e5d49(0x6ed)+'ON','sCbKe':_0x1e5d49(0x9cd),'ARbLU':function(_0x50e0e6,_0x334e5e){return _0x50e0e6+_0x334e5e;},'BqZTY':function(_0x29f372,_0x125bba){return _0x29f372+_0x125bba;},'zNiHE':_0x1e5d49(0x708)+'a','GGSjX':_0x1e5d49(0x3e8)+'he\x20li'+'ve\x20ma'+_0x1e5d49(0xba0),'QwKwQ':_0x1e5d49(0x2ce),'LApGr':_0x1e5d49(0x733),'cIFrS':_0x1e5d49(0xc24)+_0x1e5d49(0x8eb)+_0x1e5d49(0xc8a)+'3|7|1'+_0x1e5d49(0x1a9),'kWUTs':function(_0x7eaddf,_0x25e6e5){return _0x7eaddf(_0x25e6e5);},'Ethwt':'sk-va'+'l','dCpIb':'right','xnMWl':'Playe'+'r','QhnPA':_0x1e5d49(0x25e)+'ion','ZvPOO':'Eye','xxTYc':_0x1e5d49(0xc2a),'wqXLu':'Sprin'+'t\x20spe'+'ed','vKXOe':function(_0x24df0f,_0x51d2f1,_0x189ebf,_0x4a210e){return _0x24df0f(_0x51d2f1,_0x189ebf,_0x4a210e);},'NHmIr':'Healt'+'h','gmLXC':_0x1e5d49(0x3ca)+_0x1e5d49(0x9dd)+_0x1e5d49(0x87e)+'C0','BDHfN':'Healt'+_0x1e5d49(0x9dd)+'pt','rSTHD':_0x1e5d49(0x3ff),'DKiQU':_0x1e5d49(0x765)+'ostic'+'s','LhXdD':function(_0x365d15,_0x133ad4,_0x18118f,_0x311087){return _0x365d15(_0x133ad4,_0x18118f,_0x311087);},'LQkGB':_0x1e5d49(0x3a1)+_0x1e5d49(0x469)+_0x1e5d49(0x97e)+'ipboa'+'rd','vrfpq':_0x1e5d49(0x3c4)+_0x1e5d49(0x3e1),'kTnZG':_0x1e5d49(0x437),'DTVky':function(_0x468198,_0x422fc6){return _0x468198===_0x422fc6;},'Hirud':_0x1e5d49(0xc50),'XfsUj':function(_0x3ebc3d,_0x40383f){return _0x3ebc3d+_0x40383f;},'UOeSo':_0x1e5d49(0xbab),'XSQVo':'24px','qsSMl':_0x1e5d49(0x207),'nLQJO':function(_0xd6cabb,_0x221c74){return _0xd6cabb-_0x221c74;},'OPwBD':function(_0x1c7935,_0x2dc24d){return _0x1c7935===_0x2dc24d;},'DnugD':function(_0x49cde6,_0x470cbf){return _0x49cde6-_0x470cbf;},'XgmRO':_0x1e5d49(0xbf7),'bvcIa':function(_0x5bf3e8,_0xf523ab){return _0x5bf3e8-_0xf523ab;},'YFIkU':'RBAxV','ehXRr':_0x1e5d49(0x8fe),'xUoIt':_0x1e5d49(0x8c9),'GFsBz':'mouse'+_0x1e5d49(0x2b8),'lkOYf':'touch'+_0x1e5d49(0x5c8),'gaXVB':_0x1e5d49(0xc27)+_0x1e5d49(0x20a),'TzycL':_0x1e5d49(0x10d),'ZWAtv':function(_0x38b005,_0x21367d){return _0x38b005+_0x21367d;},'XBQor':'repla'+'ced\x20b'+_0x1e5d49(0x7c1)+_0x1e5d49(0x3b0)+_0x1e5d49(0x40a)+'nstan'+_0x1e5d49(0xac2)+'o\x20we\x20'+_0x1e5d49(0xc8d)+'sking'+_0x1e5d49(0x585)+'wrong'+_0x1e5d49(0x84a)+_0x1e5d49(0x223)+'r\x20','pzYVz':_0x1e5d49(0x2f2)+'a/UWM'+_0x1e5d49(0x982)+'ipt\x20i'+'n\x20Tam'+_0x1e5d49(0x6f3)+_0x1e5d49(0xa85)+_0x1e5d49(0x514)+'ard-r'+'eload'+'.','uxbuI':_0x1e5d49(0x6ca)+_0x1e5d49(0x3d2)+'u-css','thAcI':'mn-lo'+'go','IpeOF':_0x1e5d49(0x781)+'p','BttTV':function(_0x2be94b,_0xe1ec46,_0x2da1f0,_0x19f3bb){return _0x2be94b(_0xe1ec46,_0x2da1f0,_0x19f3bb);},'LXzEW':'start'+_0x1e5d49(0x522),'yzsaK':function(_0x58cb6e,_0x21803d,_0x5f0ad9){return _0x58cb6e(_0x21803d,_0x5f0ad9);},'dXUtp':function(_0x4d4f9c){return _0x4d4f9c();},'Rthcg':function(_0x452b2a){return _0x452b2a();},'EPgVk':'mn-ta'+'b','MrfVj':_0x1e5d49(0x6ca)+'a-pet'+'al','SfBBW':'Sakur'+'a\x20Ski'+'llWar'+_0x1e5d49(0x2c0)+_0x1e5d49(0xc58),'isGnI':'ikiXy','LdGLf':'Hooks'+_0x1e5d49(0x24e)+_0x1e5d49(0x532)+_0x1e5d49(0x4dc)+_0x1e5d49(0x57d)+_0x1e5d49(0x366)+_0x1e5d49(0x2e2)+'ler\x20h'+'as\x20fi'+_0x1e5d49(0x836)+_0x1e5d49(0x7fd),'ielYy':function(_0x351e36,_0x1fd1f4){return _0x351e36+_0x1fd1f4;},'yHhga':_0x1e5d49(0x2f2)+_0x1e5d49(0x15b)+_0x1e5d49(0x9d0)+'z\x20—\x20','GeHJh':_0x1e5d49(0x55c),'qtuhK':_0x1e5d49(0x78c),'VRsRv':function(_0x112702,_0x2e5245){return _0x112702<_0x2e5245;},'hzSlh':function(_0x340278,_0x122610){return _0x340278+_0x122610;},'CwUTI':function(_0x3b24fd,_0x32ef6f){return _0x3b24fd+_0x32ef6f;},'LMwNy':'LIVE\x20'+'·\x20','HZXUI':function(_0x57997b,_0x1e530c){return _0x57997b(_0x1e530c);},'IRmvT':_0x1e5d49(0x2ac)+_0x1e5d49(0x136)+_0x1e5d49(0x4a6),'eUAxt':_0x1e5d49(0x2ac)+'Look+','XiRxg':function(_0x3ea866,_0x5f4044){return _0x3ea866*_0x5f4044;},'EzWBC':function(_0x34106f,_0x24c955){return _0x34106f!==_0x24c955;},'LGYwj':'lmDHz','Cpwjl':function(_0x5d5467,_0x58a9b7){return _0x5d5467+_0x58a9b7;},'RPoyz':function(_0x4bfdd6,_0x36283a){return _0x4bfdd6+_0x36283a;},'QATEu':function(_0x685b82,_0x113337){return _0x685b82+_0x113337;},'YJUJn':function(_0x5215d2,_0x53ab0a){return _0x5215d2+_0x53ab0a;},'IegKV':'\x20\x20·\x20\x20'+'hooks'+'\x20','HsESQ':_0x1e5d49(0xc2d)+'heap\x20','ROFGd':'appli'+_0x1e5d49(0xbf1)+_0x1e5d49(0xa55)+'tered','wQwGX':_0x1e5d49(0x9aa),'uulJo':function(_0x5d6b08,_0x22e92b){return _0x5d6b08+_0x22e92b;},'xJpuc':_0x1e5d49(0x9db)+_0x1e5d49(0x3ce)+_0x1e5d49(0x1b3)+'nc','DYnup':function(_0x4c0cc1,_0x5cd608){return _0x4c0cc1+_0x5cd608;},'hBZWL':_0x1e5d49(0x366)+'ntrol'+'ler+0'+'x2E4','hBzbO':_0x1e5d49(0x18b)+'8','xowGm':function(_0x399d7a,_0x1a3632){return _0x399d7a===_0x1a3632;},'MtdZn':function(_0x34b765,_0x4cc2c3){return _0x34b765!==_0x4cc2c3;},'zFqkQ':function(_0x3b0263,_0x264903){return _0x3b0263===_0x264903;},'aIGwd':_0x1e5d49(0x762),'jNXsd':_0x1e5d49(0x188)+'ui-mo'+_0x1e5d49(0x65a)+'ce,Co'+_0x1e5d49(0x3f3)+_0x1e5d49(0x9ec)+_0x1e5d49(0x318)+'e','zPEab':function(_0x3103ec,_0x57a067){return _0x3103ec/_0x57a067;},'Hohkl':function(_0x256014,_0x4c656d){return _0x256014-_0x4c656d;},'LIiuR':function(_0x33cb2f,_0x510fff){return _0x33cb2f/_0x510fff;},'qsgQB':function(_0x21fc53,_0x2e77b0){return _0x21fc53<_0x2e77b0;},'PQqgc':'VZsDF','AlmXf':_0x1e5d49(0x757),'ibflC':function(_0x412c58,_0x526865){return _0x412c58*_0x526865;},'haifZ':function(_0x2a7dfa,_0x17b756){return _0x2a7dfa+_0x17b756;},'BDnEL':'wLgsU','dqQbF':_0x1e5d49(0x68c),'nbfSR':function(_0x4c5163,_0x5d22bb){return _0x4c5163!==_0x5d22bb;},'omtfg':'tbFqJ','LaIEM':function(_0x1c0926,_0x20f6fa){return _0x1c0926<_0x20f6fa;},'UFMcJ':function(_0x47b084,_0x4b448a){return _0x47b084+_0x4b448a;},'fYqzO':function(_0x3f9cc1,_0x4a19ae){return _0x3f9cc1*_0x4a19ae;},'nKHgL':function(_0x3be1e3,_0xf63261){return _0x3be1e3*_0xf63261;},'MQsCM':function(_0x23a1a5,_0x58a99b){return _0x23a1a5!==_0x58a99b;},'GtvaS':_0x1e5d49(0x254),'KaJsT':function(_0x2b41be,_0xaa66cb){return _0x2b41be<_0xaa66cb;},'GFFFR':'cqaCC','CYXRo':'EMAwI','YATJc':_0x1e5d49(0x521),'qLAzu':function(_0x4ec0bf,_0x338cea){return _0x4ec0bf+_0x338cea;},'YsoiZ':_0x1e5d49(0x7cd),'TQgmB':function(_0x46c9a5,_0x5a9507){return _0x46c9a5!==_0x5a9507;},'IgDjx':function(_0x10798f,_0x2e78a2){return _0x10798f*_0x2e78a2;},'JMWVq':function(_0x88d2f6,_0x49d93b){return _0x88d2f6+_0x49d93b;},'PAchZ':'posit'+'ion:f'+'ixed;'+_0x1e5d49(0xb12)+_0x1e5d49(0x659)+';top:'+_0x1e5d49(0xc7e)+'z-ind'+'ex:21'+'47483'+_0x1e5d49(0x832)+_0x1e5d49(0xb9e)+_0x1e5d49(0x324)+'nts:n'+_0x1e5d49(0x7d7),'uTQQd':_0x1e5d49(0x40f)+_0x1e5d49(0x1d4)+':rgba'+_0x1e5d49(0x9b9)+'2,29,'+'.72);'+'borde'+_0x1e5d49(0xa79)+'\x20soli'+'d\x20rgb'+_0x1e5d49(0x268)+_0x1e5d49(0x397)+'177,.'+_0x1e5d49(0x23d)+_0x1e5d49(0x43f)+'radiu'+_0x1e5d49(0x527)+'x;','DGzHY':'paddi'+'ng:4p'+_0x1e5d49(0x266)+_0x1e5d49(0x2f5)+_0x1e5d49(0xc11)+_0x1e5d49(0x12d)+_0x1e5d49(0x13c)+_0x1e5d49(0x4ff)+_0x1e5d49(0x39d)+_0x1e5d49(0x557)+'nospa'+'ce;co'+'lor:#'+_0x1e5d49(0x3a9)+'9;','AWhuc':_0x1e5d49(0xa87)+'selec'+_0x1e5d49(0x25b)+_0x1e5d49(0xa00)+_0x1e5d49(0x67d)+_0x1e5d49(0xa87)+'selec'+_0x1e5d49(0x25b)+'e;','tSAzL':function(_0x36720d,_0x122314){return _0x36720d+_0x122314;},'MpaHv':'<canv'+'as\x20id'+'=\x22sak'+_0x1e5d49(0x544)+'sp-cv'+'\x22\x20wid'+_0x1e5d49(0x9ab)+_0x1e5d49(0xbd9)+_0x1e5d49(0x5de)+_0x1e5d49(0xb6a)+_0x1e5d49(0x8ed)+_0x1e5d49(0x18d)+_0x1e5d49(0x5ea)+'y:blo'+'ck\x22><'+_0x1e5d49(0x882)+_0x1e5d49(0x455),'mpZqb':function(_0x234218,_0x384e80){return _0x234218!==_0x384e80;},'NPoib':'HAwAC','xZtRF':_0x1e5d49(0x43c),'Kqgmb':function(_0x474c23,_0x16b442){return _0x474c23/_0x16b442;},'nmeLF':function(_0x437e44,_0x1a63ef,_0x3cb1ac,_0x191341,_0x386ecc){return _0x437e44(_0x1a63ef,_0x3cb1ac,_0x191341,_0x386ecc);},'Vvgni':function(_0x9b98cc,_0x5af095){return _0x9b98cc/_0x5af095;},'prqey':function(_0x5f3bd1,_0x33ccfb){return _0x5f3bd1/_0x33ccfb;},'cSuYT':function(_0x3979ad,_0xa41564,_0x196670,_0x4bc235){return _0x3979ad(_0xa41564,_0x196670,_0x4bc235);},'Ehswk':function(_0x23f8ea,_0x57e9fc){return _0x23f8ea<_0x57e9fc;},'oDSGZ':function(_0x56a9f4,_0x4a6ae8){return _0x56a9f4===_0x4a6ae8;},'TlJew':function(_0x4910cc,_0x348d86){return _0x4910cc||_0x348d86;},'lVDXn':function(_0x4dc73e,_0xe1dc8c){return _0x4dc73e*_0xe1dc8c;},'hiWoC':function(_0x3647ec,_0x4da9db){return _0x3647ec+_0x4da9db;},'nLydk':'rgba('+'255,1'+'10,11'+_0x1e5d49(0x7bc)+')','YXnZB':function(_0x494131,_0x18f881){return _0x494131-_0x18f881;},'gQpBK':function(_0x5a7ae9,_0x22448f){return _0x5a7ae9/_0x22448f;},'vPWYT':function(_0x12125b,_0x1164cf){return _0x12125b-_0x1164cf;},'qhzCR':function(_0x1b3908,_0x11bfaa){return _0x1b3908-_0x11bfaa;},'Niptq':'objec'+'t','zLwXG':function(_0x2bf28b,_0x2ca1e4){return _0x2bf28b*_0x2ca1e4;},'KTZeh':function(_0x4f217e,_0x4a2fa4){return _0x4f217e-_0x4a2fa4;},'RcxYP':function(_0x7e0426,_0x24dbf5){return _0x7e0426!==_0x24dbf5;},'Cudbw':_0x1e5d49(0x7a3),'rCyfH':function(_0x1aea3a,_0x120236){return _0x1aea3a<_0x120236;},'TlXbu':function(_0x1c3efd,_0x48eb49){return _0x1c3efd-_0x48eb49;},'tYhHs':function(_0xd94ca6,_0x2e22f4){return _0xd94ca6/_0x2e22f4;},'OfsSQ':function(_0x382029,_0x56f6cc){return _0x382029!==_0x56f6cc;},'xMnRo':function(_0x3cd4bf,_0x5f3442){return _0x3cd4bf+_0x5f3442;},'YrPsS':'esp\x20','qiNJu':_0x1e5d49(0xc81),'tTFtL':_0x1e5d49(0x13a)+'v\x20','pQqVA':_0x1e5d49(0xb37),'AvLUo':function(_0x16a9c3){return _0x16a9c3();},'mKFdi':function(_0x279366,_0x100a79){return _0x279366(_0x100a79);},'urKvm':function(_0x40b639,_0x44a286){return _0x40b639+_0x44a286;},'YiTRI':function(_0x21500d,_0x333416){return _0x21500d!==_0x333416;},'aWnXK':'KBlEf','kMiPv':function(_0x233227,_0x37fece){return _0x233227/_0x37fece;},'EHnFU':function(_0x53d8ac,_0x98528b,_0x479f42,_0xb43691,_0x423830){return _0x53d8ac(_0x98528b,_0x479f42,_0xb43691,_0x423830);},'iAHut':function(_0x27bda6,_0x4261ef){return _0x27bda6/_0x4261ef;},'rxNTk':'0x1c\x20'+'(gues'+'s)','kmWnT':function(_0x55c3dc){return _0x55c3dc();},'yJeYv':'metad'+_0x1e5d49(0x967)+_0x1e5d49(0x58a)+'·\x20','FLJSr':'#ffd4'+'8a','EiPnl':function(_0x1d9811){return _0x1d9811();},'taDXv':function(_0xcae2a8,_0x1c9f85){return _0xcae2a8<_0x1c9f85;},'BFzOn':function(_0x517406,_0x19fd86){return _0x517406===_0x19fd86;},'oDaZx':_0x1e5d49(0x86b),'sHSdR':function(_0x2443e6){return _0x2443e6();},'OtADm':function(_0x32fefe){return _0x32fefe();},'pAkTF':function(_0x2f01de,_0x2291fa){return _0x2f01de===_0x2291fa;},'zbjUr':'DIRoF','eMDHo':_0x1e5d49(0x547),'QAYiD':function(_0x274c31,_0x1b659e){return _0x274c31+_0x1b659e;},'vMjQn':_0x1e5d49(0x84a)+'ct(s)'+_0x1e5d49(0x3cd)+_0x1e5d49(0x28e)+_0x1e5d49(0x39a)+'lds.\x20','RwvgB':_0x1e5d49(0x1b4)+_0x1e5d49(0x914)+'MK\x20CO'+'PY\x20TO'+_0x1e5d49(0x718)+_0x1e5d49(0x505)+'ndow.'+'Unity'+_0x1e5d49(0x28a)+'dkit.'+_0x1e5d49(0x559)+_0x1e5d49(0x3be)+_0x1e5d49(0x752)+_0x1e5d49(0x4d6)+_0x1e5d49(0x165)+'\x20','OuXVC':_0x1e5d49(0xa29)+_0x1e5d49(0x169)+_0x1e5d49(0xb8b)+'the\x20o'+'ne\x20ho'+'lding'+_0x1e5d49(0x46d)+'s\x20orp'+_0x1e5d49(0x5a4)+'.\x20Dis'+_0x1e5d49(0x680)+'every'+_0x1e5d49(0x2ae)+'r\x20','zCaLz':function(_0x313c66,_0x220831){return _0x313c66===_0x220831;},'pDHxX':_0x1e5d49(0x20d)+_0x1e5d49(0x11a)+_0x1e5d49(0xa1a)+_0x1e5d49(0x9d9)+_0x1e5d49(0x3be)+'me\x20in'+_0x1e5d49(0x28d)+_0x1e5d49(0xc05)+_0x1e5d49(0x7e5)+'\x20glob'+_0x1e5d49(0x49c)+_0x1e5d49(0x4fe)+_0x1e5d49(0xb52),'NoVFi':function(_0x2585e6,_0x51ce45){return _0x2585e6+_0x51ce45;},'jNGar':function(_0x5598e3,_0x262e42){return _0x5598e3+_0x262e42;},'AXsWl':_0x1e5d49(0x231)+_0x1e5d49(0x975),'gxWJi':function(_0x452184,_0x5a05dc){return _0x452184+_0x5a05dc;},'VPPde':'Unity'+_0x1e5d49(0x827)+'ance\x20'+'not\x20r'+_0x1e5d49(0x2fc)+_0x1e5d49(0x81e)+'t\x20(so'+'urce:'+'\x20','HGbDK':_0x1e5d49(0x631)+_0x1e5d49(0x987)+_0x1e5d49(0x908)+_0x1e5d49(0x620)+_0x1e5d49(0x871)+_0x1e5d49(0x1f0)+_0x1e5d49(0x27a)+_0x1e5d49(0xc0f)+_0x1e5d49(0x47d)+_0x1e5d49(0xb97)+'odule'+'.HEAP'+_0x1e5d49(0x3a7)+'\x20reac'+_0x1e5d49(0x75f)+'.','xJTji':_0x1e5d49(0x7d3),'DShec':function(_0x96c3e2,_0x5dbd8d){return _0x96c3e2===_0x5dbd8d;},'EFjIk':_0x1e5d49(0xc5f),'cDdEw':function(_0x77688a,_0x53f167){return _0x77688a+_0x53f167;},'fEmrZ':'0\x20of\x20','LHByn':'\x20hook'+_0x1e5d49(0x172)+'e\x20eve'+_0x1e5d49(0x1db)+_0x1e5d49(0x517)+'UWMK.'+'\x20The\x20'+'apply'+_0x1e5d49(0x184)+'\x20','VqLBS':function(_0xdabd50,_0x20a5f4){return _0xdabd50+_0x20a5f4;},'awjGl':function(_0x13f76e,_0x3e2018){return _0x13f76e+_0x3e2018;},'PEhYH':_0x1e5d49(0x823)+_0x1e5d49(0x369)+'ved\x20','Qglyo':_0x1e5d49(0x35d),'YvwSv':'\x20hook'+'(s)\x20t'+_0x1e5d49(0x578)+'able\x20'+_0x1e5d49(0x4e4)+_0x1e5d49(0x3cd)+_0x1e5d49(0x532)+'ed\x20no'+'ne.\x20T'+_0x1e5d49(0x766)+_0x1e5d49(0xc72)+_0x1e5d49(0x625),'rdHLN':function(_0x4c7bfb,_0x23569b){return _0x4c7bfb+_0x23569b;},'DwTbz':_0x1e5d49(0x50f),'Rptce':function(_0x50132c,_0x12396b){return _0x50132c+_0x12396b;},'BLvQg':function(_0x579e8b,_0x1d66fc){return _0x579e8b(_0x1d66fc);},'TCAir':_0x1e5d49(0xad5),'zFVFC':function(_0x48f6eb,_0x148906){return _0x48f6eb+_0x148906;},'rEnwT':function(_0x2033d6,_0x33fc39){return _0x2033d6+_0x33fc39;},'HBNiz':function(_0xa9f093,_0x5cf115){return _0xa9f093===_0x5cf115;},'CpBCF':function(_0x29fbb7){return _0x29fbb7();},'rwjmo':_0x1e5d49(0xaa2)+'l','DfqLb':_0x1e5d49(0x1bd)+'b1','MzNXI':'__sak'+'ura_s'+'w_v2','qCaIk':'2.9.1'+'4','kzaEk':'%c[sa'+'kura]'+'\x20SW-W'+'RAPPE'+_0x1e5d49(0x813)+_0x1e5d49(0x7c2)+_0x1e5d49(0x35e)+'\x20up+d'+_0x1e5d49(0x978),'UEovx':function(_0x5c20dd,_0x233541){return _0x5c20dd+_0x233541;},'nrtYL':'%c[sa'+_0x1e5d49(0x484)+_0x1e5d49(0x6e3)+_0x1e5d49(0xbb6)+'TIVE','zONpK':function(_0x349faf){return _0x349faf();},'YPrBY':_0x1e5d49(0x28c)+'-weig'+'ht:70'+'0;fon'+'t-siz'+'e:14p'+'x','GrjVT':function(_0xa49387,_0x37ab9b,_0x11cae4){return _0xa49387(_0x37ab9b,_0x11cae4);},'RTdUd':_0x1e5d49(0x6ca)+_0x1e5d49(0x63d),'rtMqD':'\u008b\u0087\u0087\u0092\u0090'+'\u0086\u008f\u0089\u0095\u0090'+'\u0094','JZsHe':_0x1e5d49(0x407)+_0x1e5d49(0x4d4)+'\u008e','pJiGb':_0x1e5d49(0xc10)+'pdate','ZJFWG':_0x1e5d49(0x9cf)+'\u008c\u0090\u0089\u0086\u0092'+'\u0092','KVMMC':_0x1e5d49(0x80b)+'\u0087\u0087\u008c\u0086\u0086'+'\u0091','Ftvcc':_0x1e5d49(0x2aa)+_0x1e5d49(0x6da)+'\u008a','LOLiJ':_0x1e5d49(0x1a5),'jftFk':'\u0093\u008c\u0091\u0091\u0093'+'\u0090\u0091\u008e\u008f\u0089'+'\u008e','FSRKJ':_0x1e5d49(0xaa0)+'\u0088\u0090\u0095\u0089\u008d'+'\u008a','NXBbD':'\u008f\u0091\u0092\u0094\u008a'+_0x1e5d49(0x82e)+'\u0088','dRfxL':_0x1e5d49(0xc1c)+'\u0087\u008d\u008a\u008a\u0089'+'\u0089','BAYDc':_0x1e5d49(0x158),'fIGxD':_0x1e5d49(0x6c1)+'\u0095\u0088\u0088\u0089\u0094'+'\u008a','iQDVu':_0x1e5d49(0x571)+_0x1e5d49(0x80a)+'\u008a','Meuju':'\u0088\u0093\u0088\u0095\u008b'+_0x1e5d49(0x69e)+'\u0087','pAjse':'\u0090\u0092\u008e\u008e\u0087'+'\u008f\u008c\u0086\u0091\u0089'+'\u0093','AQTdi':_0x1e5d49(0x9fd)+'\u008b\u0094\u0088\u0090\u0088'+'\u008a','sgfVs':_0x1e5d49(0x9eb)+_0x1e5d49(0x9b7)+'\u0095','LmzeI':'\u0095\u008e\u0095\u0087\u0086'+_0x1e5d49(0xa92)+'\u008e','lQGTx':_0x1e5d49(0x4bc)+'\u0086\u008c\u008a\u008b\u0086'+'\u0089','YvwTY':_0x1e5d49(0x894)+_0x1e5d49(0x2ea)+'\u008f','PQfym':_0x1e5d49(0x33b)+'\u0091\u0089\u0094\u008a\u0092'+'\u0089','fsXWj':_0x1e5d49(0x1df)+'\u008b\u0091\u008d\u0086\u0093'+'\u0090','dfxnJ':'\u008d\u0095\u0087\u0093\u0092'+'\u0092\u0094\u0087\u008d\u008c'+'\u008b','Uuuhd':_0x1e5d49(0x2db)+'\u008b\u0091\u0091\u0089\u0091'+'\u008c','esEJm':'\u008b\u0095\u008a\u008c\u0086'+_0x1e5d49(0xb69)+'\u0091','QEljp':_0x1e5d49(0x163)+_0x1e5d49(0x3bd)+'\u008a','lVznK':_0x1e5d49(0xbd7)+'\u0094\u0087\u008c\u0091\u008a'+'\u0094','sXfxj':'\u0094\u0087\u008b\u008d\u0089'+_0x1e5d49(0x39b)+'\u0090','edZPP':_0x1e5d49(0x290)+'\u008c\u0091\u008c\u008a\u008f'+'\u0095','SlcoX':'\u0092\u008c\u0089\u008a\u0093'+_0x1e5d49(0xb30)+'\u0087','repbV':'\u008e\u008b\u0095\u0092\u008e'+_0x1e5d49(0x87f)+'\u0086','RQLhE':_0x1e5d49(0x7d8)+'\u0093\u0086\u0087\u008c\u008a'+'\u008d','aUoTJ':'\u008e\u0093\u0093\u008b\u008a'+_0x1e5d49(0x670)+'\u0094','DYPhd':_0x1e5d49(0x8fc)+'\u0092\u008b\u008a\u0087\u008e'+'\u008b','jIRqn':_0x1e5d49(0x91f)+_0x1e5d49(0x5b2)+'\u0091','kmVBe':'\u0089\u0086\u0090\u0088\u008c'+'\u0088\u008e\u0088\u008b\u0090'+'\u008b','KgXdT':_0x1e5d49(0xa4d)+'\u0095\u0094\u008b\u0093\u008a'+'\u008f','Qwxps':'\u0086\u0092\u0092\u008a\u008e'+_0x1e5d49(0x375)+'\u0087','QfUkR':'\u0090\u0090\u008f\u008d\u008a'+'\u0094\u0093\u0088\u0088\u0093'+'\u0092','nMgvP':_0x1e5d49(0xc2e)+'e','GFAzO':_0x1e5d49(0x97f)+_0x1e5d49(0x1e1)+'\u0086','bNTkQ':'\u0090\u0093\u0090\u008f\u0088'+'\u0095\u008e\u008f\u0088\u008d'+'\u008f','SEymr':'\u0086\u0087\u0087\u008e\u0094'+_0x1e5d49(0x140)+'\u008b','FRCuU':_0x1e5d49(0x723)+_0x1e5d49(0x646)+'\u008a','hWGxP':_0x1e5d49(0x5c0)+_0x1e5d49(0xa52)+'\u0086','vhUnc':_0x1e5d49(0x1af)+_0x1e5d49(0x4f2)+'\u008c','DYLVN':_0x1e5d49(0xc73)+_0x1e5d49(0x8ef)+'\u0088','EnYOo':_0x1e5d49(0x876)+'\u0089\u008c\u008d\u008b\u008f'+'\u0093','Cpldp':_0x1e5d49(0x4f3)+_0x1e5d49(0x616)+'\u008c','XZfQO':_0x1e5d49(0x643)+'\u008a\u008e\u0092\u0095\u008b'+'\u0088','lKGGi':'\u008e\u0095\u008e\u0087\u0086'+_0x1e5d49(0x70d)+'\u0091','ZogNv':'comme'+'rcial'+'Break'+'Compl'+_0x1e5d49(0x602),'uUCPO':'int','Mnxti':'\u0088\u0091\u0095\u0093\u0087'+'\u0091\u0089\u0093\u0089\u0089'+'\u008c','uNvkf':_0x1e5d49(0x999)+'\u008e\u0094\u0093\u0093\u008d'+'\u0087','NLPUU':'\u0086\u008f\u0095\u0086\u0087'+_0x1e5d49(0x8f1)+'\u0094','rjdcU':'\u008e\u0094\u008b\u0090\u008e'+'\u0095\u0092\u0086\u008a\u008e'+'\u008c','cHzKx':_0x1e5d49(0x8e5)+_0x1e5d49(0x669)+'\u0095','kRSKJ':_0x1e5d49(0x295)+_0x1e5d49(0x7f9)+'\u008a','gNjti':_0x1e5d49(0x51a)+_0x1e5d49(0x603)+'\u0094','pktYc':_0x1e5d49(0x395),'tFiRD':_0x1e5d49(0x1c9)+'\u008c\u0086\u008f\u0091\u008f'+'\u008e','PBxUo':_0x1e5d49(0xc06)+_0x1e5d49(0x4a1)+'\u008e','iLAFI':_0x1e5d49(0x316)+_0x1e5d49(0x88f)+'\u0086','bMdri':'\u0094\u0088\u008a\u0094\u0092'+_0x1e5d49(0x17c)+'\u0092','RjcpU':_0x1e5d49(0xc6b)+_0x1e5d49(0x45c)+'\u008a','HEyqB':'\u008e\u0094\u0093\u0094\u008d'+_0x1e5d49(0x512)+'\u0089','CUzYX':'Weapo'+_0x1e5d49(0x9f9)+_0x1e5d49(0x508),'nAVgj':_0x1e5d49(0x3cb)+'meMan'+_0x1e5d49(0x23f),'RVEdf':_0x1e5d49(0x7d9)+_0x1e5d49(0x8a0)+'yerAn'+_0x1e5d49(0xbe3)+_0x1e5d49(0x250),'tRdYK':'Enemy'+_0x1e5d49(0x2ec),'RIWMP':_0x1e5d49(0x640)+'cofor'+_0x1e5d49(0xa3f)+'cal.d'+'ll','cnYhO':_0x1e5d49(0xb8d)+'t.dll','fJOwd':_0x1e5d49(0xa0c),'KIWvo':_0x1e5d49(0x663)+'h','TxWyv':_0x1e5d49(0x9a2),'czJNA':_0x1e5d49(0x96c),'XDqlb':_0x1e5d49(0x73e)+'Look','XyErY':_0x1e5d49(0x6b5),'TsBAa':_0x1e5d49(0x288),'rTuLI':_0x1e5d49(0xa15)+'tHeal'+_0x1e5d49(0x365),'huMsZ':_0x1e5d49(0x8a4),'yiGbv':_0x1e5d49(0x6f5)+'form','ufweg':'0x58','MhwhO':_0x1e5d49(0x477),'wmEMA':_0x1e5d49(0x774)+'Flag','lUSzw':_0x1e5d49(0xc22),'Kehhz':_0x1e5d49(0x6b1)+'t','ggQRB':_0x1e5d49(0x6ca)+'a-sw-'+_0x1e5d49(0x368)+_0x1e5d49(0xc29),'btpSJ':'VIS','xIJvO':function(_0x5c08f1,_0x470955){return _0x5c08f1+_0x470955;},'Dajfj':function(_0x34413c,_0x3c4c05){return _0x34413c+_0x3c4c05;},'kqtPZ':function(_0x495873,_0x5545d3){return _0x495873+_0x5545d3;},'tOkZn':function(_0x217cec,_0x4ee602){return _0x217cec+_0x4ee602;},'zMTko':function(_0x254bf1,_0x5badeb){return _0x254bf1+_0x5badeb;},'GHEdp':function(_0x282ffd,_0x3fa962){return _0x282ffd+_0x3fa962;},'wTpiz':function(_0x4cc5d4,_0x2d7068){return _0x4cc5d4+_0x2d7068;},'OVOCg':function(_0xa641a1,_0x143801){return _0xa641a1+_0x143801;},'nKXmn':function(_0x166192,_0x2f60aa){return _0x166192+_0x2f60aa;},'KqxxA':function(_0x4fc2ff,_0x1f926e){return _0x4fc2ff+_0x1f926e;},'ttBXY':_0x1e5d49(0x46a)+_0x1e5d49(0x7ce)+'nu-ro'+'ot{al'+'l:ini'+_0x1e5d49(0x5c9),'mOlct':_0x1e5d49(0x46a)+'ra-me'+_0x1e5d49(0x83c)+'ot.mn'+'-pane'+_0x1e5d49(0x931)+'ition'+':fixe'+_0x1e5d49(0xafa)+'ht:24'+_0x1e5d49(0xa4b)+_0x1e5d49(0x422)+'24px;'+_0x1e5d49(0x99b)+':min('+'620px'+_0x1e5d49(0x917)+'(100v'+'w\x20-\x204'+_0x1e5d49(0x852)+_0x1e5d49(0x8e2)+'heigh'+_0x1e5d49(0xa77)+'(500p'+'x,cal'+'c(100'+'vh\x20-\x20'+_0x1e5d49(0x3bf)+');','rNQKD':_0x1e5d49(0xa20)+_0x1e5d49(0x314)+_0x1e5d49(0xb40)+'p:10p'+'x;pad'+'ding:'+_0x1e5d49(0x6aa)+'borde'+_0x1e5d49(0x88e)+'ius:2'+_0x1e5d49(0x429)+'ointe'+_0x1e5d49(0x324)+'nts:a'+_0x1e5d49(0xae2)+'-inde'+'x:214'+_0x1e5d49(0xb95)+'47;','bsswB':'backg'+_0x1e5d49(0x1d4)+_0x1e5d49(0xaeb)+'(24,1'+_0x1e5d49(0x96d)+'.82);'+_0x1e5d49(0x9f7)+_0x1e5d49(0x958)+_0x1e5d49(0xadf)+':blur'+'(22px'+')\x20sat'+_0x1e5d49(0x390)+_0x1e5d49(0x1ae)+');-we'+_0x1e5d49(0x67d)+_0x1e5d49(0x9f7)+'rop-f'+_0x1e5d49(0xadf)+_0x1e5d49(0xbef)+'(22px'+')\x20sat'+'urate'+'(150%'+');','yHwxs':_0x1e5d49(0x451)+'hadow'+_0x1e5d49(0x9bd)+_0x1e5d49(0x997)+_0x1e5d49(0x448)+'(255,'+'255,2'+_0x1e5d49(0x3d9)+_0x1e5d49(0xac4)+'set\x200'+'\x201px\x20'+'0\x20rgb'+_0x1e5d49(0x268)+',255,'+'255,.'+'05),0'+_0x1e5d49(0x4d1)+_0x1e5d49(0xac0)+_0x1e5d49(0x448)+'(0,0,'+_0x1e5d49(0x4e1)+');','wUcvz':_0x1e5d49(0x2c3)+_0x1e5d49(0x408)+_0x1e5d49(0x5ea)+'y:fle'+'x;fle'+_0x1e5d49(0x2e1)+_0x1e5d49(0xb08)+'n:col'+'umn;a'+'lign-'+_0x1e5d49(0x7c0)+_0x1e5d49(0x9e3)+_0x1e5d49(0xac5)+_0x1e5d49(0xa2a)+_0x1e5d49(0xb2f)+_0x1e5d49(0x255)+'x;fle'+'x:non'+_0x1e5d49(0x902)+_0x1e5d49(0x9d2)+'12px\x20'+'0;','Clkcb':_0x1e5d49(0x444)+'r-rad'+_0x1e5d49(0x4f5)+'6px;b'+'ackgr'+_0x1e5d49(0x81c)+'rgba('+'255,2'+_0x1e5d49(0x8e9)+_0x1e5d49(0xaac)+_0x1e5d49(0xc65)+_0x1e5d49(0x44d)+'dow:i'+_0x1e5d49(0x113)+_0x1e5d49(0x152)+_0x1e5d49(0x4c4)+_0x1e5d49(0x2da)+_0x1e5d49(0x666)+_0x1e5d49(0x8e9)+'5,.05'+_0x1e5d49(0x22d),'uMRPl':_0x1e5d49(0xb50)+_0x1e5d49(0x9f3)+'ispla'+_0x1e5d49(0xaa3)+_0x1e5d49(0xc92)+'ce-it'+'ems:c'+_0x1e5d49(0xa16)+_0x1e5d49(0xb2f)+'h:32p'+'x;hei'+_0x1e5d49(0xab9)+_0x1e5d49(0xb05)+_0x1e5d49(0x58e)+_0x1e5d49(0x880)+'om:6p'+'x;}','SOpsW':_0x1e5d49(0xb48)+'ab:ho'+'ver{c'+_0x1e5d49(0xa93)+_0x1e5d49(0x2da)+'246,2'+'38,24'+'2,.8)'+';}','gaeVK':'.mn-t'+'ab.ac'+_0x1e5d49(0x68e)+_0x1e5d49(0x492)+':#ff6'+_0x1e5d49(0x8b9)+_0x1e5d49(0xc7b)+_0x1e5d49(0x81c)+_0x1e5d49(0x2da)+'255,1'+_0x1e5d49(0xa4e)+_0x1e5d49(0x354)+';}','yjlCP':_0x1e5d49(0x77f)+_0x1e5d49(0x37f)+'displ'+_0x1e5d49(0xaec)+_0x1e5d49(0x548)+_0x1e5d49(0x7b6)+_0x1e5d49(0x5b0)+_0x1e5d49(0x632)+_0x1e5d49(0x54e)+'th:28'+_0x1e5d49(0x69d)+_0x1e5d49(0xc7a)+_0x1e5d49(0x496)+_0x1e5d49(0x444)+_0x1e5d49(0x607)+'order'+_0x1e5d49(0x614)+'us:8p'+'x;bac'+_0x1e5d49(0x26e)+_0x1e5d49(0x771)+'anspa'+_0x1e5d49(0x5e0),'GRtXG':_0x1e5d49(0x492)+_0x1e5d49(0xa3d)+'rit;o'+'pacit'+_0x1e5d49(0x8b0)+_0x1e5d49(0x45e)+_0x1e5d49(0x4e2)+_0x1e5d49(0x4a7)+';}','ywNyN':'.mn-c'+'lose:'+_0x1e5d49(0x7a6)+_0x1e5d49(0x7cb)+'ity:1'+_0x1e5d49(0x377)+_0x1e5d49(0x476)+'d:rgb'+_0x1e5d49(0x268)+',255,'+_0x1e5d49(0x612)+_0x1e5d49(0xa02),'HgIEC':_0x1e5d49(0x77f)+_0x1e5d49(0x9b1)+_0x1e5d49(0x1fd)+_0x1e5d49(0x72f)+_0x1e5d49(0x341)+'heigh'+'t:14p'+_0x1e5d49(0x824)+'l:non'+_0x1e5d49(0xb7e)+_0x1e5d49(0x13b)+'urren'+_0x1e5d49(0x4fd)+_0x1e5d49(0xbf2)+_0x1e5d49(0x542)+'idth:'+'2;str'+_0x1e5d49(0x923)+_0x1e5d49(0xbde)+_0x1e5d49(0xc64)+_0x1e5d49(0x87d),'pXxyp':_0x1e5d49(0x1a3)+'-item'+_0x1e5d49(0x4ad)+'rt;al'+'ign-c'+_0x1e5d49(0x2bb)+_0x1e5d49(0x615)+_0x1e5d49(0x3c6)+_0x1e5d49(0x2d1)+_0x1e5d49(0x309)+_0x1e5d49(0x9d2)+_0x1e5d49(0x895)+'\x206px\x20'+_0x1e5d49(0x563),'dRGgV':_0x1e5d49(0x77f)+_0x1e5d49(0x498)+_0x1e5d49(0x33c)+_0x1e5d49(0x664)+'rollb'+'ar-th'+_0x1e5d49(0xa70)+'ackgr'+_0x1e5d49(0x81c)+'rgba('+_0x1e5d49(0x666)+'55,25'+_0x1e5d49(0x77d)+_0x1e5d49(0xc99)+_0x1e5d49(0xa3b)+'adius'+_0x1e5d49(0x9f0)+'}','jVlCZ':'.sk-c'+'ard-h'+_0x1e5d49(0x2b4)+_0x1e5d49(0x5ea)+_0x1e5d49(0x1a4)+'x;ali'+_0x1e5d49(0x91d)+'ems:c'+'enter'+_0x1e5d49(0x411)+_0x1e5d49(0x53f)+_0x1e5d49(0x884)+'g:11p'+_0x1e5d49(0x968)+_0x1e5d49(0x420),'JeVXv':'.sk-c'+'ard-t'+_0x1e5d49(0x29c)+'flex:'+'1;min'+_0x1e5d49(0x39e)+'h:0;}','yEGhh':_0x1e5d49(0x72a)+'ard-t'+'itle\x20'+_0x1e5d49(0x144)+'g{fon'+_0x1e5d49(0x61c)+'e:13p'+_0x1e5d49(0x266)+_0x1e5d49(0x2c9)+_0x1e5d49(0x84c)+_0x1e5d49(0x311)+'lor:r'+_0x1e5d49(0x811)+_0x1e5d49(0x49f)+'8,242'+_0x1e5d49(0x518)+';}','ZhOku':_0x1e5d49(0x72a)+_0x1e5d49(0x9cc)+_0x1e5d49(0x930)+_0x1e5d49(0x9b8)+_0x1e5d49(0x97b)+'e\x20str'+_0x1e5d49(0xb10)+'olor:'+_0x1e5d49(0xa96)+'f5;}','IITNs':'.sk-m'+'body{'+_0x1e5d49(0x4de)+_0x1e5d49(0x386)+_0x1e5d49(0x287)+_0x1e5d49(0x6aa)+'}','kwONa':_0x1e5d49(0x40f)+_0x1e5d49(0x1d4)+_0x1e5d49(0xaeb)+_0x1e5d49(0x7e3)+'255,2'+'55,.2'+_0x1e5d49(0xc02)+'ansit'+_0x1e5d49(0xad3)+'eft\x20.'+'2s,ba'+_0x1e5d49(0xa6b)+'und\x20.'+_0x1e5d49(0x677),'aZlpj':'.sk-s'+'witch'+'[aria'+_0x1e5d49(0x64b)+_0x1e5d49(0x8a1)+_0x1e5d49(0x1cb)+_0x1e5d49(0x89d)+_0x1e5d49(0x26e)+_0x1e5d49(0x90c)+_0x1e5d49(0xa05)+'5,107'+',157,'+_0x1e5d49(0xad6)+'}','hVfhQ':_0x1e5d49(0x70e)+_0x1e5d49(0x32a)+'[aria'+'-chec'+'ked=\x22'+_0x1e5d49(0x1cb)+_0x1e5d49(0x9d3)+'ter{l'+'eft:1'+'5px;b'+_0x1e5d49(0xc7b)+_0x1e5d49(0x81c)+'#ff6b'+'9d;}','FgYDw':'.sk-s'+_0x1e5d49(0xc6e)+_0x1e5d49(0x826)+_0x1e5d49(0x67d)+_0x1e5d49(0x252)+'r-run'+'nable'+'-trac'+'k{hei'+_0x1e5d49(0x325)+'px;bo'+'rder-'+'radiu'+'s:2px'+';','UAQRw':'backg'+_0x1e5d49(0x1d4)+_0x1e5d49(0x750)+_0x1e5d49(0x904)+'adien'+_0x1e5d49(0x8dd)+_0x1e5d49(0x38e)+_0x1e5d49(0xc51)+_0x1e5d49(0x778)+_0x1e5d49(0x9b3)+'var(-'+_0x1e5d49(0x228)+_0x1e5d49(0x89a)+_0x1e5d49(0xb47)+'-repe'+_0x1e5d49(0x253)+'ba(25'+'5,255'+_0x1e5d49(0xae8)+_0x1e5d49(0x118)+'}','qSXaf':_0x1e5d49(0x70e)+'lider'+_0x1e5d49(0x826)+_0x1e5d49(0x67d)+_0x1e5d49(0x252)+'r-thu'+_0x1e5d49(0x3dd)+_0x1e5d49(0x1b7)+_0x1e5d49(0x690)+_0x1e5d49(0xb28)+_0x1e5d49(0xa72)+_0x1e5d49(0x6e9)+_0x1e5d49(0x3db)+'x;hei'+'ght:6'+_0x1e5d49(0x748)+'rgin-'+'top:-'+_0x1e5d49(0xc12)+'order'+_0x1e5d49(0x614)+'us:50'+'%;bac'+_0x1e5d49(0x26e)+'nd:#f'+_0x1e5d49(0xa12)+';}','CVCvk':'.sk-b'+'tn:ho'+_0x1e5d49(0x83a)+_0x1e5d49(0xadf)+_0x1e5d49(0x533)+'htnes'+_0x1e5d49(0xb98)+_0x1e5d49(0x22d),'dXUDd':_0x1e5d49(0x46a)+_0x1e5d49(0x979)+'tal{p'+'ositi'+_0x1e5d49(0xbe1)+'xed;t'+'op:12'+_0x1e5d49(0xb8a)+_0x1e5d49(0x8ad)+_0x1e5d49(0x44a)+_0x1e5d49(0x5dd)+_0x1e5d49(0xc42)+'74836'+'46;cu'+_0x1e5d49(0x22f)+'point'+'er;wi'+_0x1e5d49(0x6d4)+_0x1e5d49(0x897)+'eight'+_0x1e5d49(0x52d)+_0x1e5d49(0xb6b)+_0x1e5d49(0x352)+'28;','dXPzl':_0x1e5d49(0x534)+_0x1e5d49(0x4a0)+'=\x2212\x22'+_0x1e5d49(0x6a3)+'10\x22\x20r'+'=\x221.5'+'\x22\x20fil'+_0x1e5d49(0x200)+'f6b9d'+'\x22/></'+_0x1e5d49(0x939),'lFftk':function(_0x5288b2,_0x587f50){return _0x5288b2+_0x587f50;},'tusjt':_0x1e5d49(0x534)+_0x1e5d49(0x4a0)+_0x1e5d49(0x30a)+_0x1e5d49(0x6a3)+'10\x22\x20r'+_0x1e5d49(0x327)+_0x1e5d49(0x848)+'l=\x22#f'+_0x1e5d49(0xa12)+'\x22/></'+_0x1e5d49(0x939),'ZWqkd':_0x1e5d49(0xa8f)+_0x1e5d49(0x452)+_0x1e5d49(0x608)+'d'};var _0x2ccfd4=location['hostn'+'ame']||'',_0x30b6af=/(^|\.)www\.crazygames\.com$/[_0x1e5d49(0x919)](_0x2ccfd4),_0x17da44=/(^|\.)games\.crazygames\.com$/[_0x1e5d49(0x919)](_0x2ccfd4),_0xed95a8=/(^|\.)crazygames\.com$/[_0x1e5d49(0x919)](_0x2ccfd4)&&!_0x30b6af&&!_0x17da44,_0x28f3f3=_0x30b6af?_0xf663c[_0x1e5d49(0x8d1)]:_0x17da44?'wrapp'+'er':'playe'+'r';if(!_0x30b6af&&!_0x17da44&&!_0xed95a8)return;var _0x3349a7=_0xf663c[_0x1e5d49(0xc25)],_0x2227dc=_0xf663c['MzNXI'],_0x522140=_0x1e5d49(0x4bf)+_0x1e5d49(0xc76)+_0x1e5d49(0x5e6)+_0x1e5d49(0x523)+'BEGIN'+_0x1e5d49(0x2c6),_0x3f51b2='===SA'+_0x1e5d49(0xc76)+'SKILL'+'WARZ-'+_0x1e5d49(0x647)+'=',_0x1556cc=_0xf663c['qCaIk'];if(_0x17da44){window[_0x1e5d49(0xc9a)+_0x1e5d49(0x4cf)+_0x1e5d49(0x825)+'r'](_0x1e5d49(0x10c)+'ge',function(_0x26b717){var _0x32e939=_0x1e5d49;if(_0x32e939(0x27b)!==_0xf663c[_0x32e939(0x26b)]){var _0x16c737=_0x26b717['data'];if(!_0x16c737||_0x16c737['__sak'+'ura']!==_0x2227dc)return;try{if(window['paren'+'t']&&window['paren'+'t']!==window)window['paren'+'t'][_0x32e939(0x701)+_0x32e939(0x81a)+'e'](_0x16c737,'*');if(window[_0x32e939(0xb4c)]&&_0xf663c[_0x32e939(0x7f4)](window['top'],window))window[_0x32e939(0xb4c)][_0x32e939(0x701)+'essag'+'e'](_0x16c737,'*');}catch(_0x428247){}if(_0x16c737&&_0xf663c[_0x32e939(0x2fe)](_0x16c737['kind'],_0x32e939(0xa2e))){if(_0xf663c['gLURn']===_0xf663c[_0x32e939(0xa22)])return _0x4a4b9a[_0x32e939(0x3f6)+_0x32e939(0x801)]=![],_0x1d77b6[_0x32e939(0x7fe)]='view\x20'+_0x32e939(0x6e6)+_0x32e939(0x6a1)+'eadab'+'le',null;else try{var _0x3699a7=document[_0x32e939(0x431)+'Selec'+_0x32e939(0x69f)+'l']('ifram'+'e');for(var _0x3f3e58=-0x7*-0x29d+-0x1*-0x68e+-0x18d9*0x1;_0x3f3e58<_0x3699a7['lengt'+'h'];_0x3f3e58++){if(_0xf663c['EiVnf'](_0xf663c[_0x32e939(0x747)],_0x32e939(0x401)))try{if(_0x3699a7[_0x3f3e58][_0x32e939(0xbcc)+'ntWin'+'dow'])_0x3699a7[_0x3f3e58][_0x32e939(0xbcc)+'ntWin'+_0x32e939(0x26a)][_0x32e939(0x701)+_0x32e939(0x81a)+'e'](_0x16c737,'*');}catch(_0x4b7dd4){}else return _0x5abf8e['sourc'+'e']='Runti'+_0x32e939(0xc30)+'ame',_0x5a98f7;}}catch(_0x197e59){}}}else{var _0x24cf6a=_0x33fa40[_0x424034]['param'+'s'][_0x32e939(0xb6d)](',')+_0x32e939(0x7f0)+(_0x5e6dec[_0x11c5a0]['retur'+_0x32e939(0x8b5)]||_0x32e939(0xa6f));_0x1a0565[_0x24cf6a]=(_0x9cb129[_0x24cf6a]||0x8e*0xc+0x23*-0x5c+0x5ec)+(0xc37*-0x1+-0xc0b*-0x1+0x2d);}}),console['log'](_0xf663c[_0x1e5d49(0x21d)],_0xf663c['UEovx'](_0xf663c[_0x1e5d49(0xa8b)],_0x3349a7));return;}if(_0x30b6af){console[_0x1e5d49(0x361)](_0xf663c[_0x1e5d49(0xb5a)],_0xf663c['GqCBe'](_0xf663c[_0x1e5d49(0x73c)](_0xf663c['cAVrI'],_0x3349a7),_0x1e5d49(0x28c)+_0x1e5d49(0x485)+_0x1e5d49(0x4be)+'0'),{'host':_0x2ccfd4});var _0x43ede0={'set':function(){},'command':function(){}};function _0x13d8b1(_0x78627a,_0x38a0d3){var _0x151469=_0x1e5d49,_0x3abe68={'WnGNj':function(_0x1a73ea,_0x188d16){return _0x1a73ea===_0x188d16;}};if(_0x151469(0x32f)===_0x151469(0x32f)){var _0x42426f={'__sakura':_0x2227dc,'kind':_0x151469(0xa2e),'cmd':_0x78627a,'arg':_0x38a0d3};try{var _0x519d37=document['query'+_0x151469(0x808)+_0x151469(0x69f)+'l']('ifram'+'e');for(var _0x44eafd=-0x160d*0x1+0x6*-0x359+0x2a23;_0x44eafd<_0x519d37['lengt'+'h'];_0x44eafd++){if(_0xf663c[_0x151469(0x9d1)]===_0xf663c['cxzig'])try{if(_0x519d37[_0x44eafd]['conte'+_0x151469(0x17e)+'dow'])_0x519d37[_0x44eafd][_0x151469(0xbcc)+'ntWin'+'dow'][_0x151469(0x701)+'essag'+'e'](_0x42426f,'*');}catch(_0x4891fd){}else _0xf663c['geiQq'](_0x4ed84d,_0x4ff44c);}}catch(_0x20f8be){}try{var _0x371a81=new BroadcastChannel('sakur'+_0x151469(0x63d));_0x371a81['postM'+_0x151469(0x81a)+'e'](_0x42426f),setTimeout(function(){try{_0x371a81['close']();}catch(_0x11dc4e){}},0x2604+0x1*-0x1e63+-0x6a7*0x1);}catch(_0x2b9f9b){}}else{var _0xfd382a=_0x329204[-0xd21*0x1+0x1b77+-0xe56];if(_0xfd382a&&typeof _0xfd382a[_0x151469(0x50a)]===_0x151469(0x964)+_0x151469(0x75e)){_0x3a09f8[_0x151469(0xc68)]=_0xfd382a['val'](),_0x1accb6['hits']++;if(_0x4887cd[0xa6*-0x1a+-0x1*-0x150a+0x42d*-0x1]&&_0x3abe68[_0x151469(0x44c)](typeof _0x1f5c80[0x19b3+-0x1*-0x89+-0x1a3b][_0x151469(0x50a)],_0x151469(0x964)+_0x151469(0x75e))){var _0x4b1a26=_0x586ec5[0x2361+-0x821*0x4+-0x2dc][_0x151469(0x50a)]();if(_0x4b1a26)_0x42de78=_0x4b1a26;}}}}var _0xb04050=_0x1e5d49(0x6ca)+_0x1e5d49(0x2f6)+_0x1e5d49(0x11e)+'-hidd'+'en';function _0x13e71d(){var _0x1b981b=_0x1e5d49;try{return localStorage['getIt'+'em'](_0xb04050)==='1';}catch(_0x41003a){if('EOPtC'===_0x1b981b(0x331))return![];else _0x375629?_0xd2351e[_0x1b981b(0x5a9)+'em'](_0x8a3c14,'1'):_0x57f1fc['remov'+_0x1b981b(0x35c)](_0x4d4388);}}function _0x40625e(_0x389977){var _0x13b76b=_0x1e5d49,_0x4796c2={'OrGcV':function(_0x15e367,_0x3001b7,_0x17fa7f){return _0x15e367(_0x3001b7,_0x17fa7f);},'pwjIm':function(_0xa0eaca,_0x250f90){return _0xf663c['KHMPs'](_0xa0eaca,_0x250f90);},'eYRdM':function(_0x14e5ec,_0x565754,_0x151726){return _0x14e5ec(_0x565754,_0x151726);},'ZIVIe':function(_0x414f9e,_0x3e426e){return _0x414f9e(_0x3e426e);},'KGHcJ':'Sessi'+'on'};if(_0x13b76b(0xc57)===_0xf663c[_0x13b76b(0x8ab)]){try{_0x389977?localStorage[_0x13b76b(0x5a9)+'em'](_0xb04050,'1'):localStorage['remov'+_0x13b76b(0x35c)](_0xb04050);}catch(_0x4187d3){}try{var _0x1445e8=document['getEl'+'ement'+'ById'](_0xf663c['mEuae']);if(_0x1445e8)_0x1445e8['remov'+'e']();}catch(_0x5e40d7){}try{if(_0x13b76b(0x8e6)!=='xUvkQ'){var _0x273458=_0x23f006();if(!_0x273458)return null;try{return new _0x372cd0(_0x273458['buffe'+'r'],_0x273458['byteO'+'ffset'],_0x273458[_0x13b76b(0x51b)+_0x13b76b(0x56b)]);}catch(_0x3e2869){return null;}}else{var _0x1ae4c8=document[_0x13b76b(0x5a2)+_0x13b76b(0x71d)+'ById'](_0xf663c[_0x13b76b(0x5fb)]);if(_0x389977&&!_0x1ae4c8&&document['body']){var _0x48ea18=document['creat'+'eElem'+'ent'](_0xf663c[_0x13b76b(0x507)]);_0x48ea18['id']=_0xf663c[_0x13b76b(0x5fb)],_0x48ea18[_0x13b76b(0x426)][_0x13b76b(0x9ce)+'xt']=_0xf663c['RkAam'](_0xf663c[_0x13b76b(0x88a)],'backg'+'round'+_0x13b76b(0xaeb)+'(21,1'+'2,29,'+'.9);b'+'order'+':1px\x20'+_0x13b76b(0x6bf)+_0x13b76b(0x448)+_0x13b76b(0x7e3)+'143,1'+'77,.5'+_0x13b76b(0xb6f)+'or:')+_0x3349a7+';'+('borde'+'r-rad'+_0x13b76b(0x92e)+'99px;'+'paddi'+'ng:4p'+_0x13b76b(0x968)+'x;fon'+'t:11p'+'x/1.4'+_0x13b76b(0x12d)+'onosp'+'ace,C'+_0x13b76b(0x39d)+_0x13b76b(0x557)+_0x13b76b(0x65a)+'ce;'),_0x48ea18[_0x13b76b(0x93f)+'onten'+'t']=_0xf663c[_0x13b76b(0x303)],_0x48ea18[_0x13b76b(0xa60)+'ck']=function(){_0x40625e(![]),_0x1004dc();},document['body'][_0x13b76b(0x129)+_0x13b76b(0x3e9)+'d'](_0x48ea18);}else{if(!_0x389977&&_0x1ae4c8){if(_0xf663c[_0x13b76b(0x700)]('JGqmg',_0x13b76b(0x4e0))){_0x3c23be['preve'+_0x13b76b(0x678)+'ault'](),_0x4796c2['OrGcV'](_0x2be796,_0x2d08e0['on'],_0x4796c2[_0x13b76b(0xb24)](_0x3253ff[_0x13b76b(0x280)+'r'],-0x1*0xf41+-0xfa9+0x1eea+0.5));return;}else _0x1ae4c8['remov'+'e']();}}}}catch(_0x5f55e5){}}else{var _0x275ea5=_0x4a3514(_0x1092cc[_0x3458f4][-0xdcc*-0x2+0x1fdb*-0x1+0x443]),_0x5e66e6=_0x4796c2[_0x13b76b(0x73d)](_0x27066d,_0x13b76b(0x8be),'sk-va'+'l');_0x5e66e6['style'][_0x13b76b(0x423)+_0x13b76b(0x399)]='0',_0x5e66e6[_0x13b76b(0x426)][_0x13b76b(0x208)]='1',_0x5e66e6[_0x13b76b(0x426)]['textA'+'lign']=_0x13b76b(0xb12),_0x5e66e6[_0x13b76b(0x93f)+_0x13b76b(0x2bb)+'t']=_0x4796c2[_0x13b76b(0xbc7)](_0x4f9d4f,_0x28f91d[_0xce11a1][-0x1*-0x1c62+0x1*0xd51+0xd*-0x335]),_0x5e66e6['datas'+'et']['k']=_0x12ecb0[_0x32ed6c][0x110b+0x5*-0x15b+-0xa43],_0x275ea5[_0x13b76b(0x129)+_0x13b76b(0x3e9)+'d'](_0x5e66e6);var _0x8b823e=_0x1d7038[_0x13b76b(0x68d)+'h']?_0x128697[_0x17b294[_0x13b76b(0x68d)+'h']-(-0x8a8+0x1e26+0x157d*-0x1)]:null;!_0x8b823e&&(_0x8b823e=_0x1d496c(_0x4796c2[_0x13b76b(0x80c)],![]),_0x1e2ce8[_0x13b76b(0x773)](_0x8b823e)),_0x8b823e[_0x13b76b(0x71e)][_0x13b76b(0x129)+_0x13b76b(0x3e9)+'d'](_0x275ea5),_0x8b823e['body']['lastC'+'hild']['sp']=_0x5e66e6;}}function _0x390f30(){var _0xf89715=_0x1e5d49,_0x1043a7={'yRmTM':'none','SrxEj':function(_0x5bbdb2,_0x2e631f){return _0x5bbdb2===_0x2e631f;}};if(_0x13e71d())return null;var _0x305478=document['getEl'+'ement'+'ById'](_0xf663c[_0xf89715(0xa0d)]);if(_0x305478)return _0x305478;if(!document['body']||!document['body']['appen'+_0xf89715(0x3e9)+'d'])return null;try{if(!document['getEl'+'ement'+_0xf89715(0x520)](_0xf89715(0x6ca)+_0xf89715(0x2f6)+_0xf89715(0xc95)+'s')){var _0x2c192f=document['creat'+'eElem'+_0xf89715(0x857)](_0xf663c[_0xf89715(0xa86)]);_0x2c192f['id']=_0xf663c['jocLf'],_0x2c192f['textC'+'onten'+'t']=_0xf89715(0x46a)+_0xf89715(0x4c6)+'-v2{a'+'ll:in'+_0xf89715(0xbd0)+'}',(document[_0xf89715(0x6d9)]||document['docum'+_0xf89715(0x8d6)+_0xf89715(0x71d)])['appen'+'dChil'+'d'](_0x2c192f);}return _0x305478=document[_0xf89715(0xa0e)+'eElem'+_0xf89715(0x857)](_0xf89715(0x31b)),_0x305478['id']=_0xf89715(0x6ca)+'a-sw-'+'v2',document['body'][_0xf89715(0x129)+'dChil'+'d'](_0x305478),_0x305478;}catch(_0x34948c){if(_0xf663c[_0xf89715(0x2e5)](_0xf89715(0x921),_0xf89715(0x921))){var _0x7bc2c6=_0x3bddd1[_0xf89715(0x6df)+_0xf89715(0x28a)+'dkit']&&_0x5da0eb[_0xf89715(0x6df)+_0xf89715(0x28a)+'dkit'][_0xf89715(0x3be)+'me'];_0x5c5c9e['tag']=_0x7bc2c6&&_0x7bc2c6[_0xf89715(0x216)+'uraTa'+'g']||null,_0x5d6b46['tagMa'+_0xf89715(0xb80)]=!!(_0x7bc2c6&&_0x285041&&_0x7bc2c6[_0xf89715(0x216)+_0xf89715(0x8a2)+'g']===_0x5f5842),_0x51e04c['runti'+_0xf89715(0x245)+'e']=_0x7bc2c6&&_0x7bc2c6[_0xf89715(0x899)]?typeof _0x7bc2c6['_game']:_0x1043a7['yRmTM'],_0x118a9b[_0xf89715(0x8e1)+_0xf89715(0xc6a)+_0xf89715(0x4a9)+_0xf89715(0x7df)+_0xf89715(0x238)]=!!(_0x45c72b&&_0x178aaf[_0xf89715(0x291)+'ime']&&_0x1043a7[_0xf89715(0x821)](_0x3107e6[_0xf89715(0x291)+'ime'],_0x7bc2c6)),_0xda108b[_0xf89715(0x8e1)+'nRunt'+_0xf89715(0x5ff)+'me']=_0x26cc64&&_0x517d27['_runt'+_0xf89715(0xb44)]&&_0x88375[_0xf89715(0x291)+'ime'][_0xf89715(0x899)]?typeof _0x92b584[_0xf89715(0x291)+_0xf89715(0xb44)]['_game']:_0x1043a7[_0xf89715(0x712)];}else return null;}}function _0x1004dc(){var _0x2a1eed=_0x1e5d49,_0x4f5863=_0xf663c[_0x2a1eed(0x6c5)](_0x390f30);if(!_0x4f5863)return _0x43ede0;if(_0x4f5863[_0x2a1eed(0x6fa)+'et'][_0x2a1eed(0x676)])return _0x4f5863['api'];try{return _0x1e59b5(_0x4f5863);}catch(_0x7b71b6){return _0x4f5863[_0x2a1eed(0x6fa)+'et']['api']='1',_0x4f5863[_0x2a1eed(0x676)]=_0x43ede0,console['warn'](_0xf663c['QhVzU'],_0xf663c[_0x2a1eed(0x526)](_0x2a1eed(0x492)+':',_0x3349a7),_0x7b71b6),_0x43ede0;}}function _0x1e59b5(_0x5f2f6e){var _0x2545d8=_0x1e5d49,_0x297aae={'oGBHX':_0x2545d8(0x7ec),'MJVDa':function(_0x107c37,_0x4892b7){return _0x107c37===_0x4892b7;},'qCYBM':_0xf663c[_0x2545d8(0xbc8)],'eIrXU':_0xf663c[_0x2545d8(0x72e)],'frYnu':_0x2545d8(0x164)+'f5','SFfie':_0xf663c[_0x2545d8(0x3ac)],'JWhZo':function(_0x471568,_0x4bd2f3){return _0x471568===_0x4bd2f3;},'nVUyh':'funct'+'ion','RissJ':'Runti'+'me.re'+'solve'+'Game('+')','WPCes':'Runti'+'me._g'+_0x2545d8(0x2d6),'bwUWl':function(_0x4a1bd3,_0x5bce6f){var _0x36980d=_0x2545d8;return _0xf663c[_0x36980d(0x896)](_0x4a1bd3,_0x5bce6f);},'QJSUy':_0xf663c[_0x2545d8(0x587)],'htzfA':_0x2545d8(0x5f9),'SBKXk':'Copie'+'d','RqKgN':function(_0x162e98){return _0x162e98();},'SCZcU':_0xf663c['xSxZn'],'pjNXR':_0xf663c[_0x2545d8(0x170)],'xsICW':function(_0x4bc321,_0x3f4dff,_0x3a147e){return _0xf663c['ZTWzu'](_0x4bc321,_0x3f4dff,_0x3a147e);},'XeTbK':_0x2545d8(0x973)+'t','MsCcT':_0xf663c[_0x2545d8(0x15a)],'XCUlf':function(_0x56590c,_0x47d1dc){return _0x56590c+_0x47d1dc;},'MhFvz':'TWHWy','duSnz':function(_0x104715,_0x19edf1){return _0x104715+_0x19edf1;},'ErjTh':function(_0x46a58a,_0x22f789){return _0x46a58a>_0x22f789;},'lFwbS':function(_0x44105b,_0x496f03){return _0x44105b+_0x496f03;},'hqLot':_0x2545d8(0x6ef)+'ata\x20r'+'eady\x20'+'·\x20','gfCsR':function(_0x4f97a2,_0x1595af){return _0xf663c['GqCBe'](_0x4f97a2,_0x1595af);},'WaFUY':_0x2545d8(0x7e6)+'g\x20·\x20','ymvhM':_0x2545d8(0x9e0),'TQHIf':function(_0x314e53,_0x23d723){return _0x314e53!==_0x23d723;},'rIABn':function(_0x168e1a,_0x13bbc6){var _0x5678dd=_0x2545d8;return _0xf663c[_0x5678dd(0xabf)](_0x168e1a,_0x13bbc6);},'fDOtY':_0xf663c[_0x2545d8(0x683)],'KuVRG':function(_0x19e656,_0x269d43){var _0x4da2f4=_0x2545d8;return _0xf663c[_0x4da2f4(0xab3)](_0x19e656,_0x269d43);}};_0x5f2f6e[_0x2545d8(0x426)][_0x2545d8(0x9ce)+'xt']=_0xf663c[_0x2545d8(0x8c6)](_0xf663c['pJNaL'],_0x2545d8(0x40f)+_0x2545d8(0x1d4)+_0x2545d8(0x599)+'c1d;c'+_0x2545d8(0xa93)+'#f7ee'+_0x2545d8(0xa13)+_0x2545d8(0xac1)+'1px\x20s'+_0x2545d8(0xb33)+_0x2545d8(0x2da)+_0x2545d8(0x5f5)+'43,17'+_0x2545d8(0x19d)+_0x2545d8(0xa65)+_0x2545d8(0x6ad)+'dius:'+_0x2545d8(0x341))+_0xf663c[_0x2545d8(0x50d)]+(_0x2545d8(0xa20)+'ay:fl'+'ex;fl'+_0x2545d8(0x1bf)+_0x2545d8(0x95b)+'on:co'+'lumn;'+'overf'+'low:h'+_0x2545d8(0x269)+';'),_0x5f2f6e[_0x2545d8(0x605)+_0x2545d8(0x353)]=_0xf663c[_0x2545d8(0x6cd)](_0xf663c[_0x2545d8(0x44e)](_0xf663c['WAQIK'](_0xf663c['RkAam'](_0xf663c['WAQIK'](_0xf663c[_0x2545d8(0x526)](_0xf663c[_0x2545d8(0x6cd)](_0xf663c[_0x2545d8(0xab3)](_0xf663c[_0x2545d8(0x9ac)](_0x2545d8(0x3f1)+'style'+_0x2545d8(0x909)+_0x2545d8(0x9d2)+_0x2545d8(0x551)+'2px;b'+_0x2545d8(0x3eb)+_0x2545d8(0x880)+'om:1p'+'x\x20sol'+'id\x20rg'+_0x2545d8(0xa05)+_0x2545d8(0xb26)+_0x2545d8(0xac9)+'.3);d'+_0x2545d8(0x5ea)+'y:fle'+'x;gap'+_0x2545d8(0x553)+'align'+'-item'+_0x2545d8(0x516)+'ter;f'+_0x2545d8(0x4c7)+_0x2545d8(0x777)+'to;\x22>'+(_0x2545d8(0xa33)+_0x2545d8(0x673)+_0x2545d8(0x492)+':')+_0x3349a7,_0xf663c['PyTrr']),'<span'+_0x2545d8(0x2a4)+_0x2545d8(0x43b)+_0x2545d8(0x83b)+_0x2545d8(0xa1d)+'e=\x22co'+'lor:#'+_0x2545d8(0x9b6)+'6;fon'+_0x2545d8(0x61c)+'e:11p'+_0x2545d8(0x309)+'ding:'+'1px\x206'+'px;bo'+_0x2545d8(0xac1)+_0x2545d8(0x413)+'olid\x20'+_0x2545d8(0x2da)+_0x2545d8(0x5f5)+_0x2545d8(0x1dc)+'7,.35'+');bor'+'der-r'+_0x2545d8(0x224)+_0x2545d8(0xb15)+_0x2545d8(0x6e7)+_0x2545d8(0x2b3)+_0x2545d8(0x186)),_0x2545d8(0x30e)+_0x2545d8(0x2a4)+_0x2545d8(0x654)+'tatus'+'\x22\x20sty'+_0x2545d8(0x4fc)+_0x2545d8(0xa93)+_0x2545d8(0x5b3)+_0x2545d8(0x85c)+'aitin'+'g\x20for'+'\x20game'+'\x20fram'+_0x2545d8(0x4b4)+_0x2545d8(0x2eb)),_0x2545d8(0x9c4)+_0x2545d8(0x926)+'=\x22sw2'+'-copy'+_0x2545d8(0x8ed)+_0x2545d8(0x18d)+'ispla'+_0x2545d8(0x31a)+'e;mar'+_0x2545d8(0x37d)+'eft:a'+'uto;b'+'ackgr'+_0x2545d8(0x81c))+_0x3349a7+_0xf663c['mQeGZ']+_0xf663c[_0x2545d8(0x64c)]+('<butt'+_0x2545d8(0x926)+_0x2545d8(0x480)+_0x2545d8(0x9be)+_0x2545d8(0x3f8)+_0x2545d8(0x9d5)+_0x2545d8(0x476)+_0x2545d8(0x75c)+_0x2545d8(0x57c)+_0x2545d8(0x9d8)+'order'+_0x2545d8(0x932)+'solid'+_0x2545d8(0x448)+_0x2545d8(0x7e3)+_0x2545d8(0x53b)+'77,.4'+_0x2545d8(0xb6f)+_0x2545d8(0x594)+_0x2545d8(0x3f5)+';bord'+_0x2545d8(0x6ad)+_0x2545d8(0xaa4)+_0x2545d8(0x5c1)+_0x2545d8(0x884)+_0x2545d8(0x791)+_0x2545d8(0x597)+_0x2545d8(0x195)+'r:poi'+_0x2545d8(0x258)+_0x2545d8(0x586)+'butto'+'n>')+(_0x2545d8(0xb84)+'>'),_0x2545d8(0x3f1)+_0x2545d8(0x2df)+_0x2545d8(0x9c5)+'dy\x22\x20s'+'tyle='+'\x22disp'+_0x2545d8(0x668)+'one;\x22'+'>')+_0xf663c[_0x2545d8(0x2f9)]+_0xf663c[_0x2545d8(0x840)]+_0xf663c['LMqYV']+_0x3349a7+_0xf663c['ITWtk'],_0xf663c['oViug'])+(_0x2545d8(0x9c4)+_0x2545d8(0x926)+'=\x22sw2'+_0x2545d8(0xb5b)+_0x2545d8(0x8ed)+_0x2545d8(0x62e)+_0x2545d8(0xc7b)+'ound:'+_0x2545d8(0x6f5)+_0x2545d8(0x6b3)+_0x2545d8(0x417)+'der:1'+'px\x20so'+_0x2545d8(0x642)+_0x2545d8(0x811)+_0x2545d8(0x337)+_0x2545d8(0x404)+_0x2545d8(0x45f)+_0x2545d8(0x492)+':#f7e'+'ef5;b'+_0x2545d8(0x3eb)+_0x2545d8(0x614)+_0x2545d8(0xc36)+_0x2545d8(0x309)+'ding:'+'4px\x209'+_0x2545d8(0xc83)+_0x2545d8(0x22f)+_0x2545d8(0x296)+_0x2545d8(0x814)+'Snaps'+'hot\x20('+'F9)</'+'butto'+'n>'),'<span'+_0x2545d8(0x2a4)+'sw2-h'+_0x2545d8(0xc71)+_0x2545d8(0x426)+_0x2545d8(0x241)+'or:#8'+'d7a99'+_0x2545d8(0x1ac)+'twice'+_0x2545d8(0xc26)+'e\x20wal'+_0x2545d8(0xc54)+_0x2545d8(0x31c)+'intin'+_0x2545d8(0x230)+_0x2545d8(0x421)+'g\x20mar'+'ks\x20wh'+'ich\x20f'+'ield\x20'+'is\x20wh'+_0x2545d8(0xa31)+'/span'+'>')+(_0x2545d8(0xb84)+'>'),_0xf663c[_0x2545d8(0x148)])+(_0x2545d8(0x888)+'eight'+_0x2545d8(0x8db)+_0x2545d8(0x374)+_0x2545d8(0xa2b)+_0x2545d8(0x2e7)+'t.\x0a\x0aT'+_0x2545d8(0x302)+'anel\x20'+'updat'+_0x2545d8(0x3d4)+'self\x20'+'when\x20'+'the\x20g'+_0x2545d8(0x457)+'rame\x20'+_0x2545d8(0xb60)+_0x2545d8(0x41d)+_0x2545d8(0xa43)+'ole\x20n'+_0x2545d8(0x317)+'.\x0a\x0aIf'+_0x2545d8(0x1d6)+'tays\x20'+_0x2545d8(0x878)+',\x20Tam'+'permo'+'nkey\x20'+_0x2545d8(0x7e2)+'t\x20inj'+'ectin'+_0x2545d8(0x65c)+_0x2545d8(0xbe2)+'\x20cros'+'s-ori'+_0x2545d8(0xb85)+_0x2545d8(0x457)+_0x2545d8(0x867)+_0x2545d8(0x220)+'>'),'</div'+'>');var _0x2cbffc=_0x5f2f6e[_0x2545d8(0x431)+_0x2545d8(0x808)+_0x2545d8(0xba6)](_0xf663c[_0x2545d8(0x80e)]),_0x33052a=_0x5f2f6e[_0x2545d8(0x431)+'Selec'+'tor'](_0x2545d8(0x270)+_0x2545d8(0xbf8)),_0x4c468d=_0x5f2f6e['query'+'Selec'+'tor']('#sw2-'+_0x2545d8(0x5a6)),_0x4be415=_0x5f2f6e['query'+_0x2545d8(0x808)+_0x2545d8(0xba6)](_0x2545d8(0x270)+'copy'),_0x4caefc=_0x5f2f6e[_0x2545d8(0x431)+_0x2545d8(0x808)+'tor']('#sw2-'+'x'),_0xcf3901=_0x5f2f6e['query'+'Selec'+_0x2545d8(0xba6)](_0xf663c['wGIbl']),_0xda35d7=_0x5f2f6e['query'+_0x2545d8(0x808)+'tor']('#sw2-'+'body'),_0x5bca3e=_0x5f2f6e['query'+_0x2545d8(0x808)+'tor'](_0xf663c[_0x2545d8(0xbee)]),_0x38dd0b=_0x5f2f6e['query'+_0x2545d8(0x808)+_0x2545d8(0xba6)](_0x2545d8(0x270)+'speed'),_0x58b83d=_0x5f2f6e['query'+_0x2545d8(0x808)+_0x2545d8(0xba6)]('#sw2-'+_0x2545d8(0x280)+'r'),_0x1627a0=_0x5f2f6e[_0x2545d8(0x431)+'Selec'+_0x2545d8(0xba6)]('#sw2-'+_0x2545d8(0x280)+_0x2545d8(0xc4d)+'l'),_0x514ec2=_0x5f2f6e[_0x2545d8(0x431)+'Selec'+_0x2545d8(0xba6)](_0xf663c[_0x2545d8(0x2a7)]),_0x359635=null,_0x2fd925=![];function _0x33a4b6(){var _0x533759=_0x2545d8;if(_0xda35d7)_0xda35d7['style']['displ'+'ay']=_0x2fd925?'':_0xf663c[_0x533759(0x6ce)];if(_0xcf3901)_0xcf3901[_0x533759(0x93f)+_0x533759(0x2bb)+'t']=_0x2fd925?_0xf663c[_0x533759(0x111)]:_0xf663c['CxZnZ'];_0x5f2f6e[_0x533759(0x426)][_0x533759(0x99b)]=_0x2fd925?'min(5'+_0x533759(0xc16)+_0x533759(0xb17):_0x533759(0xbab),_0x5f2f6e['style'][_0x533759(0x40f)+'round']=_0x2fd925?_0x533759(0xa9d)+'1d':'rgba('+_0x533759(0x2e9)+_0x533759(0x134)+'9)';}if(_0xcf3901)_0xcf3901[_0x2545d8(0xa60)+'ck']=function(){var _0x259037=_0x2545d8;_0x297aae['oGBHX']==='GGuiP'?(_0x5c7a82=_0x73b1fd[_0x259037(0x860)],_0x3c5e8e=_0x3414c0[_0x259037(0x481)],_0x927026[_0x259037(0x178)+'e']=_0x259037(0xaf4)+_0x259037(0x3c1)+_0x259037(0xaee)+_0x14121d['order']+')'):(_0x2fd925=!_0x2fd925,_0x33a4b6());};_0x33a4b6();if(_0x4caefc)_0x4caefc['oncli'+'ck']=function(){var _0x21e250=_0x2545d8;if(_0x21e250(0xc13)==='gmVIP'){var _0x2d63c1=arguments[_0x43a44f];if(_0x297aae[_0x21e250(0x7fa)](typeof _0x2d63c1,_0x21e250(0xc6d)+'g'))_0x1e5297+=_0x2d63c1;else{if(_0x2d63c1&&_0x2d63c1['messa'+'ge'])_0x231f2e+=_0x2d63c1['messa'+'ge'];}}else _0x40625e(!![]);};if(_0x5bca3e)_0x5bca3e['oncli'+'ck']=function(){var _0x4ad69c=_0x2545d8;_0xf663c[_0x4ad69c(0x745)](_0x13d8b1,_0xf663c[_0x4ad69c(0x2a8)]);};var _0x52e38b=![];function _0x4f0e3a(){var _0x4cac48=_0x2545d8;_0xf663c[_0x4cac48(0xb54)](_0x13d8b1,_0x4cac48(0x11b),{'on':_0x52e38b,'factor':parseFloat(_0x58b83d[_0x4cac48(0xaf8)])||0x1*-0xedb+0x127*-0x1d+0x11*0x2d7});}if(_0x38dd0b)_0x38dd0b[_0x2545d8(0xa60)+'ck']=function(){var _0xf308b5=_0x2545d8,_0xa9bb77=_0x297aae['qCYBM']['split']('|'),_0x4649fe=0x1*0x739+-0x5*0x379+0xec*0xb;while(!![]){switch(_0xa9bb77[_0x4649fe++]){case'0':_0x52e38b=!_0x52e38b;continue;case'1':_0x38dd0b[_0xf308b5(0x426)]['color']=_0x52e38b?_0x297aae['eIrXU']:_0x297aae[_0xf308b5(0x355)];continue;case'2':_0x38dd0b['textC'+_0xf308b5(0x2bb)+'t']=_0x52e38b?'Speed'+'\x20ON':'Speed'+'\x20off';continue;case'3':_0x38dd0b['style'][_0xf308b5(0x40f)+'round']=_0x52e38b?_0x3349a7:_0x297aae[_0xf308b5(0x877)];continue;case'4':_0x4f0e3a();continue;}break;}};if(_0x58b83d)_0x58b83d['oninp'+'ut']=function(){var _0x44f5ee=_0x2545d8;if(_0x297aae[_0x44f5ee(0x162)](_0x297aae['QJSUy'],_0x297aae['htzfA'])){var _0x356401=_0xd8c63[_0x44f5ee(0x6df)+'WebMo'+_0x44f5ee(0x980)]&&_0x1b8721[_0x44f5ee(0x6df)+_0x44f5ee(0x28a)+'dkit'][_0x44f5ee(0x3be)+'me'];if(_0x356401&&_0x297aae[_0x44f5ee(0x48d)](typeof _0x356401[_0x44f5ee(0x369)+'veGam'+'e'],_0x297aae['nVUyh'])){var _0xb12f16=_0x356401[_0x44f5ee(0x369)+_0x44f5ee(0xc8e)+'e']();if(_0xb12f16)return _0x9ce1cb[_0x44f5ee(0x178)+'e']=_0x297aae[_0x44f5ee(0xacf)],_0xb12f16;}if(_0x356401&&_0x356401['_game'])return _0x2bf5a4[_0x44f5ee(0x178)+'e']=_0x297aae[_0x44f5ee(0x4f4)],_0x356401;}else{if(_0x1627a0)_0x1627a0[_0x44f5ee(0x93f)+'onten'+'t']=(parseFloat(_0x58b83d['value'])||-0xb11*-0x1+0x2*0xb9+-0xc82)['toFix'+'ed'](0xfdf+-0x2f1+0xced*-0x1)+'x';_0x4f0e3a();}};if(_0x4be415)_0x4be415['oncli'+'ck']=function(){var _0x539181=_0x2545d8,_0x260dcb={'yHfFX':_0x297aae[_0x539181(0x4b9)],'pOSsB':function(_0x28f43b){var _0x14ce47=_0x539181;return _0x297aae[_0x14ce47(0xbeb)](_0x28f43b);}},_0x2a11f4=_0x522140+'\x0a'+(_0x359635?JSON[_0x539181(0xc6d)+'gify'](_0x359635,null,-0x1033+-0x27b*-0xc+-0xe*0xf8):'')+'\x0a'+_0x3f51b2,_0x3d06f8=function(){var _0x3a3b4f=_0x539181;if(_0x4be415)_0x4be415[_0x3a3b4f(0x93f)+'onten'+'t']=_0x260dcb[_0x3a3b4f(0x4f8)];};if(navigator[_0x539181(0x5bd)+'oard']&&navigator[_0x539181(0x5bd)+'oard']['write'+_0x539181(0x190)]){if(_0x297aae['SCZcU']===_0x297aae[_0x539181(0x952)])return _0x297aae[_0x539181(0x48d)](_0x40556b['v'][-0x4*0x950+-0x192*0x14+0x2a4*0x1a],_0x41a932[-0xe*0x18e+-0x24c0+0x3a84])&&_0x15c302['v'][-0x160b+-0x2d+0x1639*0x1]===_0x389c7b[-0xbc0+0xc3c+0x29*-0x3]&&_0x297aae['MJVDa'](_0x3f6ff3['v'][-0x1ab3+-0x104+0x1bb9],_0x5618bf[-0x1*-0x1091+0x359+-0x13e8]);else navigator[_0x539181(0x5bd)+'oard'][_0x539181(0x89c)+'Text'](_0x2a11f4)[_0x539181(0x39f)](_0x3d06f8,function(){_0x260dcb['pOSsB'](_0x541327);});}else _0x541327();function _0x541327(){var _0xe63a9b=_0x539181,_0x165171=(_0xe63a9b(0x2b7)+_0xe63a9b(0x691)+'1|5')['split']('|'),_0x36a778=0x72d+-0x1fb8+0x188b;while(!![]){switch(_0x165171[_0x36a778++]){case'0':if(!document[_0xe63a9b(0x71e)])return;continue;case'1':try{document[_0xe63a9b(0xc0e)+'omman'+'d']('copy'),_0x3d06f8();}catch(_0x5d24e3){}continue;case'2':_0x5bb613['selec'+'t']();continue;case'3':var _0x5bb613=document[_0xe63a9b(0xa0e)+_0xe63a9b(0x7c6)+_0xe63a9b(0x857)](_0xe63a9b(0x737)+'rea');continue;case'4':document['body'][_0xe63a9b(0x129)+_0xe63a9b(0x3e9)+'d'](_0x5bb613);continue;case'5':_0x5bb613['remov'+'e']();continue;case'6':_0x5bb613[_0xe63a9b(0xaf8)]=_0x2a11f4;continue;}break;}}};_0xf663c[_0x2545d8(0x63c)](setTimeout,function(){var _0x4d22ae=_0x2545d8;if(_0x359635)return;if(!_0x2cbffc||!_0x4c468d)return;_0x2cbffc[_0x4d22ae(0x93f)+_0x4d22ae(0x2bb)+'t']=_0xf663c[_0x4d22ae(0x7af)],_0x2cbffc[_0x4d22ae(0x426)][_0x4d22ae(0x492)]=_0xf663c[_0x4d22ae(0x4b7)],_0x4c468d['textC'+_0x4d22ae(0x2bb)+'t']=_0xf663c[_0x4d22ae(0x44e)](_0xf663c['DEFVa'](_0xf663c[_0x4d22ae(0xab3)](_0xf663c['DEFVa'](_0x4d22ae(0x19a)+'ame\x20f'+'rame\x20'+_0x4d22ae(0x8a6)+'\x20post'+'ed\x20a\x20'+_0x4d22ae(0xaed)+'e\x20rep'+'ort.\x0a'+'\x0a','This\x20'+_0x4d22ae(0x11e)+_0x4d22ae(0x7ac)+'es\x20th'+_0x4d22ae(0x35b)+'rscri'+'pt\x20IS'+'\x20inst'+'alled'+_0x4d22ae(0x741)+'runni'+'ng\x20on'+_0x4d22ae(0x585)+_0x4d22ae(0xaa2)+_0x4d22ae(0x236))+(_0x4d22ae(0xa17)+'e\x20rem'+'ainin'+_0x4d22ae(0x524)+'pects'+'\x20are:'+'\x0a\x0a'),_0xf663c['dwukS'])+_0xf663c['SMDQe']+(_0x4d22ae(0xb99)+_0x4d22ae(0x81b)+'sakur'+_0x4d22ae(0x25d)+'llwar'+'z.use'+_0x4d22ae(0x7b9)+'AND\x20t'+'he\x20ol'+_0x4d22ae(0x58d)+_0x4d22ae(0x2d2)+_0x4d22ae(0x569)+_0x4d22ae(0x1a8)),'\x20\x20\x20\x20\x20'+_0x4d22ae(0xb59)+_0x4d22ae(0xc7f)+'—\x20two'+'\x20copi'+'es\x20of'+_0x4d22ae(0xbca)+_0x4d22ae(0x77a)+_0x4d22ae(0x8a3)+'h\x20Web'+_0x4d22ae(0xac3)+_0x4d22ae(0x530)+_0x4d22ae(0x19c)+'tiate'+_0x4d22ae(0xba4)),_0x4d22ae(0x7bf)+_0x4d22ae(0x43e)+_0x4d22ae(0x2ad)+_0x4d22ae(0x9e5)+_0x4d22ae(0xab1)+'\x20and\x20'+_0x4d22ae(0x63e)+_0x4d22ae(0x51e)+_0x4d22ae(0xc1a)+'l\x20aga'+_0x4d22ae(0x47a));},0xd*0x1477+0x1aae2*-0x1+0x18b37);var _0x3572af={'set':function(_0x354a83){var _0x41857b=_0x2545d8,_0x5d4e0e={'xodGU':_0x41857b(0x38b)+_0x41857b(0xa51)+'-\x20Uni'+'ty\x20in'+'stanc'+_0x41857b(0x464)+'\x20reac'+_0x41857b(0x75f)+'\x20via\x20'+_0x41857b(0x3be)+_0x41857b(0x2a0)+'solve'+_0x41857b(0x277)+_0x41857b(0x336)+_0x41857b(0x2bd)+'indow'+_0x41857b(0x4a2)+'al','tnrpt':function(_0x398178,_0x21e428,_0x5b11ec){var _0x2b39c4=_0x41857b;return _0x297aae[_0x2b39c4(0x966)](_0x398178,_0x21e428,_0x5b11ec);},'XdFXd':_0x297aae['XeTbK']};_0x359635=_0x354a83;if(_0x4be415)_0x4be415[_0x41857b(0x426)]['displ'+'ay']='';if(_0x33052a){var _0x104486=_0x297aae['MsCcT'][_0x41857b(0x438)]('|'),_0x2ae058=0x20a5+0x1f*-0x4+0x2029*-0x1;while(!![]){switch(_0x104486[_0x2ae058++]){case'0':var _0x43250f=_0x1556cc;continue;case'1':_0x33052a['style']['borde'+'rColo'+'r']=_0x1ed10c===_0x43250f?_0x41857b(0x2da)+'255,1'+_0x41857b(0x1dc)+_0x41857b(0x4b2)+')':_0x41857b(0x4af)+'74';continue;case'2':_0x33052a[_0x41857b(0x93f)+'onten'+'t']=_0x297aae['XCUlf']('v',_0x354a83[_0x41857b(0xa1c)+'on']||'?');continue;case'3':var _0x1ed10c=_0x354a83['versi'+'on']||'';continue;case'4':_0x33052a['style'][_0x41857b(0x492)]=_0x1ed10c===_0x43250f?_0x3349a7:_0x41857b(0x4af)+'74';continue;}break;}}var _0x192fbe=_0x354a83[_0x41857b(0xb59)+_0x41857b(0xb01)]&&_0x354a83[_0x41857b(0xb59)+'nces'][_0x41857b(0x366)+_0x41857b(0x2e2)+'ler'],_0x53252d=Math[_0x41857b(0x1d4)]((_0x354a83[_0x41857b(0x1b1)+'edMs']||0x1d3c+0x2e*0xa4+-0x3ab4)/(-0x1*-0x21f3+-0x13*-0x1c9+0x3ff6*-0x1));if(_0x2cbffc){var _0x2db125,_0x206a91;if(_0x192fbe&&_0x354a83[_0x41857b(0x3a2)+'y']&&_0x354a83['surve'+'y']['FPSco'+'ntrol'+_0x41857b(0xb78)]){if(_0x297aae['MhFvz']!=='rsiuW')_0x2db125=_0x297aae[_0x41857b(0x2d7)](_0x41857b(0xb68)+'·\x20'+Object['keys'](_0x354a83['insta'+_0x41857b(0xb01)])[_0x41857b(0x68d)+'h'],_0x41857b(0x84a)+_0x41857b(0x925)+'\x20')+_0x53252d+'s',_0x206a91=_0x41857b(0xab0)+'a8';else return _0x15e939[_0x41857b(0x2fb)+'d']++,_0x42b393['lastE'+_0x41857b(0x237)]=_0x5aca1f[_0x41857b(0x4b0)+_0x41857b(0x237)]||_0x5d4e0e[_0x41857b(0x1a1)],null;}else{if(_0x297aae[_0x41857b(0xa9b)](_0x354a83[_0x41857b(0x7f2)+'Appli'+'ed'],-0x66b*-0x5+0x6a*0x58+-0x14b*0x35))_0x2db125=_0x297aae[_0x41857b(0x2a5)](_0x297aae['duSnz']('hooks'+_0x41857b(0x4d6)+'d\x20·\x20',_0x53252d),'s'),_0x206a91='#ffd4'+'8a';else _0x354a83['scrip'+_0x41857b(0x3f0)]?(_0x2db125=_0x297aae['hqLot']+_0x53252d+'s',_0x206a91=_0x41857b(0x7dc)+'8a'):(_0x2db125=_0x297aae['gfCsR'](_0x354a83[_0x41857b(0x9a5)]&&_0x354a83['arm']['ok']?'armed'+_0x41857b(0xc81):_0x297aae['WaFUY'],_0x53252d)+'s',_0x206a91=_0x41857b(0x7dc)+'8a');}_0x2cbffc[_0x41857b(0x93f)+_0x41857b(0x2bb)+'t']=_0x2db125,_0x2cbffc[_0x41857b(0x426)][_0x41857b(0x492)]=_0x206a91;}_0x514ec2&&(_0x297aae['JWhZo'](_0x297aae['ymvhM'],'nqPox')?(_0x5aae74['st']['lastW'+'ritte'+'n']=_0xc15a62['froun'+'d'](_0x34a707),_0x3e9d7f++,_0x472951['push']('0x'+_0x4d5f67['o']['toStr'+_0x41857b(0x907)](0x6e8*-0x1+0xb72+-0x2*0x23d))):_0x514ec2[_0x41857b(0x93f)+'onten'+'t']=_0x354a83[_0x41857b(0x8e4)]&&_0x354a83['diff'][_0x41857b(0x68d)+'h']?_0x297aae[_0x41857b(0x2a5)]('Diff\x20'+_0x41857b(0xc8b)+_0x41857b(0x665)+'t:\x20',_0x354a83[_0x41857b(0x8e4)][_0x41857b(0xb6d)](',\x20')):_0x41857b(0xc03)+'ice\x20w'+'hile\x20'+_0x41857b(0x8e8)+_0x41857b(0xab6)+_0x41857b(0x4a3)+_0x41857b(0xc45)+_0x41857b(0x3ab)+_0x41857b(0x7a9)+'marks'+'\x20whic'+_0x41857b(0xb25)+'ld\x20is'+'\x20whic'+'h.');if(_0x354a83[_0x41857b(0x11b)]&&_0x38dd0b){if(_0x297aae[_0x41857b(0xaf7)]('ldADg',_0x41857b(0x263)))_0x52e38b=!!_0x354a83['speed']['on'],_0x38dd0b['textC'+_0x41857b(0x2bb)+'t']=_0x52e38b?_0x41857b(0x5e3)+'\x20ON':'Speed'+'\x20off',_0x38dd0b['style'][_0x41857b(0x40f)+_0x41857b(0x1d4)]=_0x52e38b?_0x3349a7:'trans'+_0x41857b(0x6b3)+'t',_0x38dd0b[_0x41857b(0x426)][_0x41857b(0x492)]=_0x52e38b?_0x297aae[_0x41857b(0xc46)]:_0x297aae['frYnu'],_0x1627a0&&_0x354a83['speed'][_0x41857b(0x280)+'r']&&(_0x1627a0['textC'+'onten'+'t']=_0x297aae['rIABn'](Number,_0x354a83['speed'][_0x41857b(0x280)+'r'])['toFix'+'ed'](0x1*0x1f7+-0x27b*0xd+0x1e49)+'x');else{_0x34fa80=_0xb17e2d,_0x698e18=[],_0x5d4e0e['tnrpt'](_0x2038b3,_0x5d4e0e[_0x41857b(0x378)],{'report':_0x40e784()});return;}}if(_0x4c468d)try{_0x4c468d[_0x41857b(0x93f)+'onten'+'t']=_0x3f2ea0(_0x354a83);}catch(_0x52fceb){_0x4c468d[_0x41857b(0x93f)+'onten'+'t']=JSON[_0x41857b(0xc6d)+'gify'](_0x354a83,null,0x22ed+0x4a6*0x4+-0xab4*0x5);}console[_0x41857b(0x361)](_0x41857b(0x60b)+_0x41857b(0x484)+_0x41857b(0x531)+_0x41857b(0x5ed)+_0x41857b(0xa2b)+'rt',_0x41857b(0x492)+':'+_0x3349a7+_0x297aae[_0x41857b(0x648)],_0x354a83),console[_0x41857b(0x361)](_0x297aae[_0x41857b(0x667)](_0x297aae[_0x41857b(0x2a5)](_0x522140,'\x0a'),JSON[_0x41857b(0xc6d)+'gify'](_0x354a83,null,-0x1447+0x580+0xec8))+'\x0a'+_0x3f51b2);}};return _0x5f2f6e['datas'+'et']['api']='1',_0x5f2f6e['api']=_0x3572af,_0x3572af;}function _0x3f2ea0(_0x310d1f){var _0x161251=_0x1e5d49,_0x340115={'QvNRj':function(_0xe4e393,_0x2994d1){return _0xe4e393+_0x2994d1;},'qAOei':'\x20obje'+_0x161251(0x5bf)+_0x161251(0x3cd)+_0x161251(0x28e)+'0\x20fie'+_0x161251(0x1ad),'dprke':'Reaso'+'n:\x20','voLIr':function(_0x3b14e5,_0x51b37c){return _0xf663c['GqCBe'](_0x3b14e5,_0x51b37c);},'XvgpV':_0xf663c['tvsXJ']},_0x1cbfd6=[];_0x1cbfd6[_0x161251(0x773)](_0xf663c[_0x161251(0x526)](_0xf663c[_0x161251(0x6cd)](_0xf663c['WAQIK'](_0xf663c[_0x161251(0xa0f)],_0x310d1f['host']||'?'),_0xf663c[_0x161251(0x322)]),Math['round']((_0x310d1f['elaps'+_0x161251(0xb34)]||0xa11*-0x1+0x166c+0xc5b*-0x1)/(0xf50+-0x1e5+-0x983)))+'s)'),_0x1cbfd6['push'](_0xf663c['WAQIK'](_0xf663c['kOKQE'](_0xf663c['gQzTV'],_0x310d1f['uwmk']?'yes':'no')+(_0x161251(0x12b)+'ntext'+'\x20'),_0x310d1f['il2Cp'+'pCont'+_0x161251(0xbe9)]?_0x161251(0x34a):'no')+('\x20\x20\x20ty'+_0x161251(0x8a5))+(_0x310d1f[_0x161251(0x59c)+_0x161251(0xa3e)]!=null?_0x310d1f[_0x161251(0x59c)+'ount']:'?')),_0x1cbfd6[_0x161251(0x773)](_0x161251(0x7f2)+_0x161251(0x552)+_0x310d1f[_0x161251(0x7f2)+_0x161251(0x85e)+'ed']+'/'+_0x310d1f[_0x161251(0x7f2)+_0x161251(0x20f)]+('\x20appl'+'ied')),_0x1cbfd6[_0x161251(0x773)]('');var _0x2f0243=_0x310d1f['insta'+_0x161251(0xb01)]||{},_0x186768=Object[_0x161251(0x854)](_0x2f0243);!_0x186768['lengt'+'h']&&(_0x1cbfd6[_0x161251(0x773)](_0x161251(0x36e)+'ve\x20ob'+_0x161251(0x4ce)+'\x20capt'+_0x161251(0x257)+'yet.'),_0x1cbfd6[_0x161251(0x773)](''),_0x1cbfd6[_0x161251(0x773)](_0x161251(0xa1b)+_0x161251(0x357)+_0x161251(0x572)+_0x161251(0x77b)+_0x161251(0x6b7)+'e\x27s\x20o'+'wn\x20Up'+'date('+');\x20no'+_0x161251(0x795)+'\x20capt'+'ured\x20'+_0x161251(0x929)),_0x1cbfd6['push'](_0x161251(0xbe4)+_0x161251(0x6d8)+_0x161251(0x3fb)+_0x161251(0x525)+_0x161251(0x2d0)+'\x20sign'+'ature'+_0x161251(0x56a)+_0x161251(0xa04)+_0x161251(0x174)));for(var _0x580943=-0x22d8+0x2e*0x3e+0x17b4;_0xf663c['yhRfX'](_0x580943,_0x186768['lengt'+'h']);_0x580943++){if(_0xf663c['BHDZL']===_0x161251(0xb73)){var _0x19a1a3=_0x186768[_0x580943];_0x1cbfd6[_0x161251(0x773)](_0x19a1a3+_0x161251(0xb72)+_0x2f0243[_0x19a1a3]);}else _0x106144[_0x161251(0x78a)+_0x161251(0x847)][_0x161251(0x773)](_0x340115[_0x161251(0x83d)](_0x340115['QvNRj'](_0x161251(0x856)+'red\x20',_0x4e0eee['keys'](_0x4f0645['insta'+_0x161251(0xb01)])[_0x161251(0x68d)+'h'])+_0x340115[_0x161251(0x116)],_0x105ac6[_0x161251(0x4b0)+'rror']?_0x340115[_0x161251(0x83d)](_0x340115[_0x161251(0x1c3)],_0x2e9681[_0x161251(0x4b0)+_0x161251(0x237)]):_0x161251(0xb7c)+'ad\x20fa'+_0x161251(0xa94)+_0x161251(0x11c)+_0x161251(0xb1e)+'offse'+_0x161251(0x9da)+'\x20skip'+_0x161251(0x6a0)+_0x161251(0x385)+'e.'));}_0x1cbfd6[_0x161251(0x773)]('');var _0x383a0d=_0x310d1f['surve'+'y']||{},_0x10f953=Object['keys'](_0x383a0d);for(var _0x31a553=-0x10*0x21a+0x28b+0x1f15;_0x31a553<_0x10f953['lengt'+'h'];_0x31a553++){if(_0x161251(0x5ae)!==_0x161251(0x5ae))return _0x380ff9['ident'+_0x161251(0x801)]=![],_0xfe67ef[_0x161251(0x7fe)]=_0x340115[_0x161251(0x41f)](_0x161251(0x860)+'\x20'+_0x351d60['round'](_0x5eda79),_0x340115[_0x161251(0x941)]),null;else{var _0x23d1f8=_0x10f953[_0x31a553],_0x538b6f=_0x383a0d[_0x23d1f8];if(!_0x538b6f||!_0x538b6f[_0x161251(0x68d)+'h'])continue;_0x1cbfd6['push'](_0xf663c[_0x161251(0x123)](_0xf663c[_0x161251(0x8c6)](_0x161251(0x278)+_0x23d1f8,'\x20'),new Array(Math['max'](0x1*-0x23e9+-0x2b*0x32+0x2c50,-0xbcd*0x1+0x4fd+-0xfe*-0x7-_0x23d1f8[_0x161251(0x68d)+'h']))[_0x161251(0xb6d)]('─'))),_0x1cbfd6['push'](_0xf663c[_0x161251(0xba7)]);for(var _0x11baf9=0x1*0x1a7e+0xbe3*-0x1+-0xe9b;_0x11baf9<_0x538b6f[_0x161251(0x68d)+'h'];_0x11baf9++){if(_0xf663c[_0x161251(0x2fe)](_0xf663c['OGGdq'],'MrIkM')){if(_0x4668ff&&_0x6cd961[_0x161251(0x9a4)+_0x161251(0x495)+'ation'])_0x5e1fc2[_0x161251(0x9a4)+_0x161251(0x495)+_0x161251(0x449)]();_0xd6138a(!_0x50dd48['open']);}else{var _0x3a1d6d=_0x538b6f[_0x11baf9],_0x8818d=typeof _0x3a1d6d['v']===_0x161251(0x333)+'r'?_0xf663c['zcdcm'](Math['round'](_0x3a1d6d['v']*(-0x1063+-0x9c9*0x3+0x31a6)),0x1f7*0x2+0x8*-0x44c+0x225a):_0x3a1d6d['v'];_0x1cbfd6[_0x161251(0x773)](_0xf663c[_0x161251(0x965)](_0xf663c['tVsBf'](_0xf663c[_0x161251(0x8ff)](_0xf663c[_0x161251(0x156)]('\x20\x20'+('0x'+_0x3a1d6d['o'][_0x161251(0x10f)+'ing'](-0x185*0x1+0x166*0x16+0x1d2f*-0x1))[_0x161251(0x4c8)+'d'](0x1097*-0x1+0x1a74+-0x347*0x3)+'\x20',_0x3a1d6d['k'][_0x161251(0x4c8)+'d'](-0xe9b+0x494*-0x7+0x8b*0x56)),'\x20'),String(_0x8818d)[_0x161251(0x4c8)+'d'](-0x1*-0x6cd+0x48b+0x2*-0x5a4))+'\x20',_0x3a1d6d[_0x161251(0x33d)]||''));}}_0x1cbfd6['push']('');}}if(_0x310d1f['warni'+_0x161251(0x847)]&&_0x310d1f[_0x161251(0x78a)+_0x161251(0x847)]['lengt'+'h']){_0x1cbfd6[_0x161251(0x773)](_0xf663c[_0x161251(0x9b4)]);for(var _0x2449b0=-0x7*-0x56+-0x2101+-0x461*-0x7;_0x2449b0<_0x310d1f[_0x161251(0x78a)+'ngs'][_0x161251(0x68d)+'h'];_0x2449b0++)_0x1cbfd6[_0x161251(0x773)](_0xf663c['DUSFS']+_0x310d1f[_0x161251(0x78a)+_0x161251(0x847)][_0x2449b0]);}return _0x1cbfd6[_0x161251(0xb6d)]('\x0a');}window['addEv'+'entLi'+'stene'+'r'](_0x1e5d49(0x10c)+'ge',function(_0x4d0d98){var _0x1124b7=_0x1e5d49,_0x404566={'JUzbV':_0x1124b7(0xbf3)+'w\x20glo'+_0x1124b7(0x749)},_0x22540e=_0x4d0d98[_0x1124b7(0x3d3)];if(!_0x22540e||_0xf663c['OfahE'](_0x22540e[_0x1124b7(0x216)+_0x1124b7(0x962)],_0x2227dc))return;try{if(_0x22540e[_0x1124b7(0xb1a)]===_0x1124b7(0x99e)){_0xf663c[_0x1124b7(0xc38)](_0x1004dc)[_0x1124b7(0xc1d)]({'host':_0x22540e[_0x1124b7(0xc21)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0xf663c[_0x1124b7(0x896)](_0x22540e[_0x1124b7(0xb1a)],_0xf663c[_0x1124b7(0x120)]))_0x1004dc()['set'](_0x22540e['repor'+'t']);}catch(_0x5b520f){if(_0x1124b7(0x729)===_0xf663c[_0x1124b7(0xb4b)]){var _0x2a08f6=_0x53e6c5[_0x1124b7(0x92b)+'Insta'+_0x1124b7(0x13f)]||_0x9bccdf[_0x1124b7(0x92b)+'Game']||_0x4b0785[_0x1124b7(0x5f7)];if(_0x2a08f6)return _0x3cbd65['sourc'+'e']=_0x404566[_0x1124b7(0x6f9)],_0x2a08f6;}else console[_0x1124b7(0x7b3)](_0xf663c[_0x1124b7(0x8a9)],_0xf663c[_0x1124b7(0x44e)](_0x1124b7(0x492)+':',_0x3349a7),_0x5b520f);}});function _0x12d261(){var _0x3afd9c=_0x1e5d49;if(_0xf663c['uxLMB']!=='RLbzP')_0x40625e(!![]);else{var _0x459062=_0x59aca0[_0x3afd9c(0x3d3)];if(!_0x459062||_0x459062[_0x3afd9c(0x216)+'ura']!==_0x4f7b9d)return;try{if(_0xf663c[_0x3afd9c(0x837)](_0x459062['kind'],_0xf663c[_0x3afd9c(0x233)])){_0x438feb()[_0x3afd9c(0xc1d)]({'host':_0x459062['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x459062[_0x3afd9c(0xb1a)]===_0xf663c['VJUgt'])_0xf663c[_0x3afd9c(0x3e4)](_0x650aef)[_0x3afd9c(0xc1d)](_0x459062[_0x3afd9c(0x973)+'t']);}catch(_0x57697d){_0x3c439a['warn']('%c[sa'+_0x3afd9c(0x484)+_0x3afd9c(0xc1a)+'l\x20upd'+'ate\x20f'+_0x3afd9c(0x822),'color'+':'+_0x56e74f,_0x57697d);}}}if(document[_0x1e5d49(0x71e)])_0xf663c['zONpK'](_0x12d261);else document[_0x1e5d49(0xc9a)+'entLi'+_0x1e5d49(0x825)+'r']('DOMCo'+_0x1e5d49(0x452)+_0x1e5d49(0x608)+'d',_0x12d261,{'once':!![]});return;}window['__SAK'+'URA_S'+_0x1e5d49(0x515)]=window[_0x1e5d49(0xaba)+'URA_S'+'W__']||{'at':Date['now']()};function _0x1546a1(_0x12f841,_0x56ef88){var _0xee4b14=_0x1e5d49;if(_0xf663c['pldNI']!==_0xf663c[_0xee4b14(0x308)]){var _0xda8ccb={'__sakura':_0x2227dc,'kind':_0x12f841};if(_0x56ef88){for(var _0x1fa8ca in _0x56ef88)_0xda8ccb[_0x1fa8ca]=_0x56ef88[_0x1fa8ca];}try{if('xciSN'!==_0xee4b14(0x724)){if(window['paren'+'t']&&_0xf663c[_0xee4b14(0x2e5)](window[_0xee4b14(0x6b3)+'t'],window))window['paren'+'t'][_0xee4b14(0x701)+_0xee4b14(0x81a)+'e'](_0xda8ccb,'*');}else return _0x1cf853[_0xee4b14(0x178)+'e']=_0xf663c[_0xee4b14(0x87c)],_0x4356b4;}catch(_0x33bedd){}try{if(_0xee4b14(0x46e)!==_0xf663c[_0xee4b14(0x4fa)]){if(window[_0xee4b14(0xb4c)]&&window['top']!==window)window[_0xee4b14(0xb4c)][_0xee4b14(0x701)+'essag'+'e'](_0xda8ccb,'*');}else{var _0x15d52c=_0x5379be[_0xee4b14(0xb87)](_0xfe5c13[_0x3fb37c]['v'][-0x1297+0x207+0x212*0x8]*_0x493b92[_0x38b9f6]['v'][0x4f*-0x5d+0x1b8a+0x129]+_0x106b05[_0x28e679]['v'][-0x1859+0x25e7+-0xd8c]*_0x1d9347[_0x217388]['v'][-0x3*-0xa9b+-0xaea+0x14e5*-0x1]);if(_0x15d52c>_0xdb5fa4)_0x63348d=_0x15d52c;}}catch(_0x4039ec){}}else _0xf663c[_0xee4b14(0xabf)](_0x11edd4,_0xf663c['gqmTd'](_0x185b7b,_0x59f950[_0xee4b14(0xaf8)])||_0x1dc452),_0xf663c[_0xee4b14(0x45d)](_0x782ea1);}console['log'](_0x1e5d49(0x60b)+_0x1e5d49(0x484)+_0x1e5d49(0x788)+'LAYER'+_0x1e5d49(0x23e)+'VE\x20v'+_0x1556cc,_0xf663c[_0x1e5d49(0xa8b)]+_0x3349a7+_0xf663c[_0x1e5d49(0x8de)],{'host':_0x2ccfd4,'href':location['href'],'version':_0x1556cc}),_0xf663c[_0x1e5d49(0x8e3)](_0x1546a1,'hello',{'host':_0x2ccfd4,'role':_0x28f3f3});var _0x35db39=window['__SAK'+_0x1e5d49(0x1aa)+_0x1e5d49(0x515)]&&window[_0x1e5d49(0xaba)+_0x1e5d49(0x1aa)+'W__']['at']||Date['now']();window[_0x1e5d49(0xc9a)+_0x1e5d49(0x4cf)+_0x1e5d49(0x825)+'r']('messa'+'ge',function(_0x5ccb23){var _0x5c0a02=_0x1e5d49;if('ngcUc'===_0xf663c[_0x5c0a02(0x8bc)])try{var _0x40b454=_0x5ccb23&&_0x5ccb23['data'];if(!_0x40b454||_0xf663c['IRfBU'](_0x40b454[_0x5c0a02(0x216)+_0x5c0a02(0x962)],_0x2227dc)||_0x40b454[_0x5c0a02(0xb1a)]!==_0x5c0a02(0xa2e))return;_0x424a9b(_0x40b454['cmd'],_0x40b454['arg']);}catch(_0x1bee30){}else _0x11d3e5['style']['opaci'+'ty']='1';});try{var _0x16f216=new BroadcastChannel(_0xf663c[_0x1e5d49(0x247)]);_0x16f216['onmes'+_0x1e5d49(0x4f1)]=function(_0x188fa6){var _0x55f43a=_0x1e5d49,_0x1b2fad=_0x188fa6[_0x55f43a(0x3d3)];if(_0x1b2fad&&_0x1b2fad[_0x55f43a(0x216)+_0x55f43a(0x962)]===_0x2227dc&&_0xf663c['LJAVF'](_0x1b2fad['kind'],'cmd'))_0xf663c['ZTWzu'](_0x424a9b,_0x1b2fad[_0x55f43a(0xa2e)],_0x1b2fad[_0x55f43a(0x25a)]);};}catch(_0x563b7c){}var _0x1fb56a=[];(function _0x4fe279(){var _0x389400=_0x1e5d49,_0x357b2a={'FHUsz':_0xf663c[_0x389400(0xa8b)],'CCGOk':function(_0x37663e,_0x132c93){return _0x37663e!==_0x132c93;},'cZGHr':_0xf663c[_0x389400(0x9df)],'Yveee':function(_0x37d343,_0xe6640c){return _0xf663c['ztdzN'](_0x37d343,_0xe6640c);}};if(_0xf663c[_0x389400(0x5b5)]!==_0x389400(0x8a7))_0x56d300(_0x47f632,_0x1b1f58['boxes']);else{var _0xf2955c=[_0xf663c[_0x389400(0x154)],_0x389400(0x7b3),'error',_0xf663c[_0x389400(0x3f2)],_0xf663c['YDQdq']];for(var _0x4f99f8=0xe6d+-0x19ee+-0xb81*-0x1;_0xf663c['LkzVa'](_0x4f99f8,_0xf2955c[_0x389400(0x68d)+'h']);_0x4f99f8++){(function(_0x14caf8){var _0x95f95e=_0x389400,_0x429ce2=console[_0x14caf8];if(_0xf663c['UInQl'](typeof _0x429ce2,'funct'+_0x95f95e(0x75e)))return;console[_0x14caf8]=function(){var _0x2debe3=_0x95f95e,_0x10def4={'TbXKD':_0x2debe3(0x60b)+_0x2debe3(0x484)+'\x20menu'+_0x2debe3(0x761)+'ailab'+'le','dYdKR':_0x357b2a['FHUsz']};try{if('knBzw'!==_0x2debe3(0xb93)){var _0x1e4c49='';for(var _0x267974=-0x21c1*0x1+0x2*-0xda3+-0x1*-0x3d07;_0x267974<arguments[_0x2debe3(0x68d)+'h'];_0x267974++){var _0x425c7d=arguments[_0x267974];if(typeof _0x425c7d===_0x2debe3(0xc6d)+'g')_0x1e4c49+=_0x425c7d;else{if(_0x425c7d&&_0x425c7d['messa'+'ge'])_0x1e4c49+=_0x425c7d[_0x2debe3(0x10c)+'ge'];}}if(_0x1e4c49[_0x2debe3(0x4e4)+'Of'](_0x522140)!==-(-0x16a1*0x1+-0x1*0x14e1+-0xe81*-0x3))return _0x429ce2['apply'](console,arguments);if(_0x357b2a[_0x2debe3(0x78e)](_0x1e4c49[_0x2debe3(0x4e4)+'Of'](_0x357b2a['cZGHr']),-(0x87+0x5d9*-0x1+-0x1d*-0x2f))){var _0x2008fe=_0x1e4c49[_0x2debe3(0x301)](0x91*0x2f+0x2185+-0x3c24,0x1296*-0x1+0x8f6+0x566*0x2);if(_0x1fb56a[_0x2debe3(0x4e4)+'Of'](_0x2008fe)===-(0x10d5+0x10a3*0x1+-0x2177)&&_0x357b2a[_0x2debe3(0x54c)](_0x1fb56a[_0x2debe3(0x68d)+'h'],-0x628*-0x2+-0x21f3*0x1+0x15df*0x1))_0x1fb56a[_0x2debe3(0x773)](_0x2008fe);}}else return _0x518ff3[_0x2debe3(0x7b3)](_0x10def4[_0x2debe3(0x279)],_0x10def4[_0x2debe3(0x595)]+_0x4c7309,_0x5704f6),null;}catch(_0x10d691){}return _0x429ce2[_0x2debe3(0x9b0)](console,arguments);};}(_0xf2955c[_0x4f99f8]));}}}());var _0x493058={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x3ba720=null,_0x548523=null,_0x1addee=-(-0x182e+-0x368+-0x1b97*-0x1),_0x575c4a=null;function _0xa607fc(_0x31cd6c){var _0x50ed24=_0x1e5d49;if(_0xf663c[_0x50ed24(0x5dc)](_0xf663c[_0x50ed24(0xa50)],'kVEox')){var _0x54ca79=0x80f+-0x783+-0x5*0x1c;for(var _0x32186a=0x15*-0x91+-0x1*-0x2405+-0x1820;_0xf663c[_0x50ed24(0x9c9)](_0x32186a,_0x5853eb[_0x50ed24(0x68d)+'h']);_0x32186a++){var _0x294469=_0x3acbbb[_0x50ed24(0xb87)](_0xf663c['gcRBN'](_0x4f358a[_0x32186a]['v'][-0x2411+-0x1*0x3b1+0x27c2]*_0x1bbd3a[_0x32186a]['v'][-0xe2*0x17+-0x1bd6+0x3024],_0xf663c[_0x50ed24(0x3dc)](_0x92220[_0x32186a]['v'][-0x2046+-0x994+0x29dc],_0x3cd17e[_0x32186a]['v'][0x131*0x1a+-0x27*0xe2+0x376*0x1])));if(_0xf663c['WTQWN'](_0x294469,_0x54ca79))_0x54ca79=_0x294469;}_0x3178e9+=_0x54ca79;}else try{if(!_0x31cd6c)return;var _0x2ff3e5=_0x31cd6c['insta'+_0x50ed24(0x13f)]?_0x31cd6c['insta'+'nce']['expor'+'ts']:_0x31cd6c['expor'+'ts']||null;if(!_0x2ff3e5)return;if(!_0x575c4a)try{_0x575c4a=Object[_0x50ed24(0x854)](_0x2ff3e5)['slice'](0x31*-0x1d+-0x2065*0x1+0x25f2,0x6a*-0x4+0x106b+-0x1*0xeab);}catch(_0x583798){}var _0x58e623=_0x2ff3e5[_0x50ed24(0xb67)+'y'];_0x58e623&&_0x58e623[_0x50ed24(0x786)+'r']&&_0xf663c['ZVzxD'](_0x58e623[_0x50ed24(0x786)+'r'][_0x50ed24(0x51b)+_0x50ed24(0x56b)],0x2061+0x29c*-0x8+-0x5f*0x1f)&&(_0x548523=_0x58e623,_0x1addee=Date['now']()-_0x35db39);}catch(_0x386102){}}function _0x12d0ef(){var _0x3668a8=_0x1e5d49,_0x51a41c={'yVIVR':function(_0x33ce61,_0x54bafd){return _0x33ce61(_0x54bafd);},'vuXAg':function(_0x5e008c){return _0x5e008c();},'CTtMx':function(_0x4b15d1,_0x501309){var _0x211396=_0x49fc;return _0xf663c[_0x211396(0x143)](_0x4b15d1,_0x501309);},'JTvsW':'wzTMC'};try{if(typeof WebAssembly===_0xf663c[_0x3668a8(0x798)])return;var _0x32a5a8=[_0x3668a8(0xb59)+'ntiat'+'e',_0xf663c[_0x3668a8(0x75d)]];for(var _0x30b184=-0x1259+0x1e09+-0xb*0x110;_0x30b184<_0x32a5a8['lengt'+'h'];_0x30b184++){if(_0xf663c[_0x3668a8(0x46c)](_0xf663c[_0x3668a8(0x85b)],_0x3668a8(0xafd)))return _0x3e1b75[0x231a+0xf8b*-0x2+-0x403]===_0x3668a8(0xb66)||_0xec27e6[-0x33*0x6d+-0x1219*0x2+0x9a7*0x6]===_0xf663c['IkvXZ'];else(function(_0x5e9adc){var _0xd42112=_0x3668a8,_0x3a9b2f=WebAssembly[_0x5e9adc];if(_0x51a41c['CTtMx'](typeof _0x3a9b2f,_0xd42112(0x964)+'ion')||_0x3a9b2f[_0xd42112(0x216)+_0xd42112(0x19e)+_0xd42112(0x4ba)+'ap'])return;var _0x32e7b3=function(){var _0x61254a=_0xd42112,_0x17117d=_0x3a9b2f[_0x61254a(0x9b0)](this,arguments);try{if(_0x17117d&&typeof _0x17117d[_0x61254a(0x39f)]==='funct'+'ion')_0x17117d[_0x61254a(0x39f)](_0xa607fc,function(){});else _0x51a41c['yVIVR'](_0xa607fc,_0x17117d);}catch(_0x49ffa9){}return _0x17117d;};_0x32e7b3[_0xd42112(0x216)+_0xd42112(0x19e)+'moryT'+'ap']=!![];try{if(_0x51a41c[_0xd42112(0xc60)](_0x51a41c[_0xd42112(0xc7d)],_0x51a41c[_0xd42112(0xc7d)]))return _0x51a41c['vuXAg'](_0x27ede7);else Object['defin'+_0xd42112(0x6fd)+_0xd42112(0x6f8)](_0x32e7b3,_0xd42112(0x5cc),{'value':_0x3a9b2f[_0xd42112(0x5cc)],'configurable':!![]});}catch(_0x265e4b){}WebAssembly[_0x5e9adc]=_0x32e7b3;}(_0x32a5a8[_0x30b184]));}}catch(_0x11658a){}}var _0x31f719=null,_0x76a7d0=null,_0x201b55={},_0xc29ee4={'MouseLook':[{'name':_0xf663c[_0x1e5d49(0x340)],'ret':_0xf663c[_0x1e5d49(0x596)],'params':[],'wasmParams':['i32']},{'name':_0xf663c[_0x1e5d49(0x65f)],'ret':_0xf663c[_0x1e5d49(0x596)],'params':['float'],'wasmParams':['i32',_0xf663c['cBCdk']]},{'name':_0x1e5d49(0x6e1)+_0x1e5d49(0x885)+'\u0092','ret':_0xf663c['dXiBI'],'params':[_0xf663c['USRvj']],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)],'f32']},{'name':_0x1e5d49(0x2d9)+_0x1e5d49(0x439)+'\u0095','ret':_0xf663c[_0x1e5d49(0x596)],'params':['float'],'wasmParams':[_0x1e5d49(0x3fd),_0xf663c[_0x1e5d49(0x5f4)]]},{'name':_0x1e5d49(0x682)+'\u0093\u0090\u0088\u0092\u0090'+'\u0091','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x1e5d49(0x8f5)+'\u008c\u0092\u0092\u0093\u008a'+'\u0094','ret':_0xf663c[_0x1e5d49(0x596)],'params':[],'wasmParams':['i32']},{'name':_0x1e5d49(0x8fa)+_0x1e5d49(0x36d)+'\u008f','ret':'void','params':[],'wasmParams':['i32']},{'name':_0xf663c[_0x1e5d49(0x8ee)],'ret':'void','params':[],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)]]},{'name':'\u0088\u0091\u008b\u0087\u0087'+_0x1e5d49(0xc8c)+'\u0095','ret':_0xf663c[_0x1e5d49(0x596)],'params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':_0x1e5d49(0xbc6)+'\u0095\u008a\u0092\u0091\u008b'+'\u0095','ret':_0x1e5d49(0x6e6),'params':[],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)]],'wasmRet':_0xf663c[_0x1e5d49(0x5f4)]},{'name':'\u0091\u008f\u0088\u0086\u0091'+'\u0092\u0088\u0090\u008c\u0088'+'\u0090','ret':'void','params':[],'wasmParams':[_0xf663c['IkvXZ']]},{'name':_0x1e5d49(0x937)+'\u0091\u0087\u008e\u008a\u008d'+'\u0088','ret':_0x1e5d49(0xa6f),'params':[_0x1e5d49(0x6e6)],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)],_0xf663c[_0x1e5d49(0x5f4)]]},{'name':_0x1e5d49(0x628)+_0x1e5d49(0x959)+'\u008d','ret':'float','params':[],'wasmParams':[_0xf663c['IkvXZ']],'wasmRet':_0xf663c['cBCdk']},{'name':_0xf663c['ZJFWG'],'ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':['i32']},{'name':_0xf663c['KVMMC'],'ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':'\u0090\u0091\u0095\u008c\u008e'+'\u0093\u0091\u0089\u0088\u008d'+'\u008a','ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':'\u0090\u0091\u0091\u0086\u008b'+'\u0089\u008d\u008f\u0087\u0091'+'\u0093','ret':'void','params':[],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)]]},{'name':_0xf663c[_0x1e5d49(0xa1e)],'ret':_0x1e5d49(0xa6f),'params':[_0xf663c['USRvj'],_0x1e5d49(0x6e6)],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)],_0xf663c[_0x1e5d49(0x5f4)],_0x1e5d49(0xb66)]},{'name':'\u0087\u008c\u0086\u0089\u0090'+'\u008d\u0095\u008f\u0089\u0091'+'\u0086','ret':'float','params':[],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)]],'wasmRet':_0x1e5d49(0xb66)},{'name':'\u008b\u0092\u0089\u0090\u008d'+_0x1e5d49(0xb55)+'\u0088','ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':_0xf663c[_0x1e5d49(0x80d)],'ret':_0xf663c[_0x1e5d49(0x596)],'params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':_0xf663c['jftFk'],'ret':'void','params':[_0xf663c[_0x1e5d49(0x6de)]],'wasmParams':[_0x1e5d49(0x3fd),_0x1e5d49(0xb66)]},{'name':_0x1e5d49(0x706)+_0x1e5d49(0x740)+'\u0088','ret':_0xf663c[_0x1e5d49(0x6de)],'params':[],'wasmParams':[_0x1e5d49(0x3fd)],'wasmRet':_0xf663c['cBCdk']},{'name':_0x1e5d49(0x98f)+'\u008b\u0094\u0093\u0086\u008c'+'\u008a','ret':_0xf663c[_0x1e5d49(0x596)],'params':['float',_0x1e5d49(0x6e6)],'wasmParams':['i32',_0x1e5d49(0xb66),'f32']},{'name':_0x1e5d49(0xb16)+_0x1e5d49(0xc61)+'\u008d','ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':['i32']},{'name':'\u008a\u008c\u0086\u0095\u0087'+_0x1e5d49(0x80a)+'\u008a','ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)]]},{'name':_0x1e5d49(0x1b8)+'\u0090\u0095\u008d\u0090\u0088'+'\u008b','ret':_0x1e5d49(0xa6f),'params':[_0xf663c[_0x1e5d49(0x6de)]],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)],_0x1e5d49(0xb66)]},{'name':'\u0090\u008e\u0095\u0093\u008d'+_0x1e5d49(0x5b8)+'\u0093','ret':_0x1e5d49(0x6e6),'params':[],'wasmParams':[_0xf663c['IkvXZ']],'wasmRet':'f32'},{'name':_0xf663c['FSRKJ'],'ret':_0xf663c['USRvj'],'params':[],'wasmParams':[_0x1e5d49(0x3fd)],'wasmRet':_0xf663c[_0x1e5d49(0x5f4)]},{'name':_0xf663c['NXBbD'],'ret':'void','params':['float'],'wasmParams':['i32',_0xf663c[_0x1e5d49(0x5f4)]]},{'name':'\u0087\u008f\u008d\u008b\u0092'+_0x1e5d49(0xa9f)+'\u008c','ret':_0xf663c['dXiBI'],'params':[],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)]]},{'name':'\u008c\u0091\u0093\u0095\u0087'+_0x1e5d49(0x9ff)+'\u0093','ret':'void','params':['float'],'wasmParams':['i32','f32']},{'name':_0xf663c[_0x1e5d49(0x3a3)],'ret':_0xf663c[_0x1e5d49(0x596)],'params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':'\u0092\u008c\u0088\u0087\u0088'+_0x1e5d49(0x42b)+'\u0090','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x1e5d49(0x142)+'\u008f\u0091\u008e\u008d\u0086'+'\u008d','ret':_0x1e5d49(0xa6f),'params':[_0x1e5d49(0x6e6)],'wasmParams':[_0x1e5d49(0x3fd),_0xf663c['cBCdk']]}],'FPScontroller':[{'name':'\u0092\u0091\u008e\u0095\u0092'+'\u0090\u008b\u008d\u008d\u0093'+'\u008e','ret':_0x1e5d49(0x6e6),'params':[],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)]],'wasmRet':_0xf663c['cBCdk']},{'name':'\u0090\u0093\u0091\u0091\u008b'+'\u0092\u0091\u0088\u008c\u0090'+'\u0092','ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':_0x1e5d49(0x157)+_0x1e5d49(0x76e)+'\u0094','ret':_0xf663c['BAYDc'],'params':[],'wasmParams':[_0x1e5d49(0x3fd)],'wasmRet':'i32'},{'name':_0x1e5d49(0xbb0)+_0x1e5d49(0x2af)+'\u008b','ret':_0x1e5d49(0xa6f),'params':[_0xf663c['BAYDc']],'wasmParams':[_0xf663c['IkvXZ'],_0xf663c['IkvXZ']]},{'name':_0x1e5d49(0x41c)+'\u0092\u0095\u0090\u0089\u0088'+'\u0092','ret':'void','params':[],'wasmParams':['i32']},{'name':_0xf663c[_0x1e5d49(0x1da)],'ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':_0xf663c['iQDVu'],'ret':'void','params':[],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)]]},{'name':_0xf663c['Meuju'],'ret':'bool','params':[],'wasmParams':['i32'],'wasmRet':_0x1e5d49(0x3fd)},{'name':_0x1e5d49(0xaef)+'\u008c\u0088\u008a\u0089\u0092'+'\u0087','ret':_0xf663c[_0x1e5d49(0x596)],'params':[],'wasmParams':['i32']},{'name':_0xf663c['pAjse'],'ret':_0xf663c['BAYDc'],'params':[],'wasmParams':['i32'],'wasmRet':'i32'},{'name':_0xf663c['AQTdi'],'ret':_0x1e5d49(0x158),'params':[],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)]],'wasmRet':_0xf663c['IkvXZ']},{'name':'\u0089\u0088\u0093\u008b\u008b'+_0x1e5d49(0x859)+'\u0094','ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':[_0xf663c['IkvXZ']]},{'name':_0xf663c[_0x1e5d49(0x92a)],'ret':_0xf663c[_0x1e5d49(0x596)],'params':[],'wasmParams':['i32']},{'name':_0x1e5d49(0xa61)+'\u0095\u0089\u008b\u008d\u008a'+'\u008b','ret':_0x1e5d49(0x158),'params':[_0x1e5d49(0x158),_0x1e5d49(0x158)],'wasmParams':['i32',_0x1e5d49(0x3fd),_0x1e5d49(0x3fd)],'wasmRet':_0xf663c[_0x1e5d49(0xac7)]},{'name':_0x1e5d49(0x934)+_0x1e5d49(0x2a6)+'\u0090','ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':'\u0089\u0089\u008e\u0092\u0089'+_0x1e5d49(0x430)+'\u0092','ret':'bool','params':[],'wasmParams':[_0xf663c['IkvXZ']],'wasmRet':_0x1e5d49(0x3fd)},{'name':_0x1e5d49(0x3b3)+_0x1e5d49(0xabc)+'\u008f','ret':_0x1e5d49(0xa6f),'params':[_0xf663c[_0x1e5d49(0x54f)]],'wasmParams':['i32',_0xf663c[_0x1e5d49(0xac7)]]},{'name':_0xf663c[_0x1e5d49(0x758)],'ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':[_0xf663c['IkvXZ']]},{'name':_0xf663c[_0x1e5d49(0x297)],'ret':_0xf663c[_0x1e5d49(0x54f)],'params':[],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)]],'wasmRet':'i32'},{'name':_0xf663c['YvwTY'],'ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':[_0xf663c['IkvXZ']]},{'name':_0x1e5d49(0xb20)+'\u0091\u0088\u0092\u008d\u0087'+'\u0094','ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':_0xf663c['PQfym'],'ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':[_0xf663c['IkvXZ']]},{'name':'\u008a\u0088\u0087\u0090\u008f'+'\u0086\u008b\u008e\u008a\u0089'+'\u008b','ret':'void','params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':'\u0087\u0089\u0089\u0090\u0087'+_0x1e5d49(0x502)+'\u0094','ret':_0xf663c[_0x1e5d49(0x596)],'params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':_0xf663c[_0x1e5d49(0x845)],'ret':_0x1e5d49(0xa6f),'params':[_0x1e5d49(0x158)],'wasmParams':[_0x1e5d49(0x3fd),_0xf663c[_0x1e5d49(0xac7)]]},{'name':_0x1e5d49(0x55b)+'\u008a\u0089\u008e\u008d\u008d'+'\u0086','ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':['i32']},{'name':_0xf663c['dfxnJ'],'ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':[_0xf663c['IkvXZ']]},{'name':_0xf663c['Uuuhd'],'ret':_0xf663c[_0x1e5d49(0x596)],'params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':_0xf663c['esEJm'],'ret':_0xf663c[_0x1e5d49(0x596)],'params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':_0xf663c[_0x1e5d49(0xa74)],'ret':_0xf663c[_0x1e5d49(0x596)],'params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':_0x1e5d49(0x34b)+_0x1e5d49(0x393)+'\u0092','ret':'void','params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':'\u0088\u008b\u008f\u008a\u008e'+_0x1e5d49(0x251)+'\u0091','ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':['i32']},{'name':_0xf663c[_0x1e5d49(0x8f0)],'ret':_0xf663c['dXiBI'],'params':['bool'],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)],_0xf663c['IkvXZ']]},{'name':_0xf663c[_0x1e5d49(0x9a1)],'ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':_0xf663c[_0x1e5d49(0x536)],'ret':_0xf663c['dXiBI'],'params':[],'wasmParams':[_0xf663c['IkvXZ']]},{'name':_0x1e5d49(0x38c)+'\u0093\u0089\u0090\u008c\u008c'+'\u008a','ret':_0xf663c[_0x1e5d49(0x596)],'params':[],'wasmParams':['i32']},{'name':'\u0087\u0094\u0091\u0095\u008f'+_0x1e5d49(0x79d)+'\u0087','ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':['i32']},{'name':_0x1e5d49(0x276)+_0x1e5d49(0x321)+'\u0087','ret':'void','params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':_0xf663c[_0x1e5d49(0x600)],'ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':['i32']},{'name':'\u0094\u008d\u0087\u0094\u008d'+_0x1e5d49(0x589)+'\u0094','ret':'void','params':[_0xf663c[_0x1e5d49(0x54f)]],'wasmParams':[_0x1e5d49(0x3fd),_0x1e5d49(0x3fd)]},{'name':_0x1e5d49(0x37a)+'\u0088\u0091\u0095\u0092\u0092'+'\u008f','ret':_0x1e5d49(0x158),'params':[],'wasmParams':[_0x1e5d49(0x3fd)],'wasmRet':_0x1e5d49(0x3fd)},{'name':_0xf663c['repbV'],'ret':_0x1e5d49(0x158),'params':[],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)]],'wasmRet':_0x1e5d49(0x3fd)},{'name':_0xf663c[_0x1e5d49(0x151)],'ret':_0x1e5d49(0x158),'params':[],'wasmParams':['i32'],'wasmRet':_0xf663c['IkvXZ']},{'name':_0xf663c[_0x1e5d49(0xc93)],'ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)]]},{'name':_0x1e5d49(0x1a5),'ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':_0xf663c['DYPhd'],'ret':'void','params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':_0xf663c[_0x1e5d49(0xb03)],'ret':'void','params':[],'wasmParams':[_0xf663c['IkvXZ']]},{'name':_0xf663c[_0x1e5d49(0x6c2)],'ret':_0xf663c[_0x1e5d49(0x596)],'params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':_0xf663c['KgXdT'],'ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':['i32']},{'name':'\u008d\u0094\u0095\u008b\u008a'+_0x1e5d49(0x40c)+'\u0094','ret':_0xf663c[_0x1e5d49(0x596)],'params':[_0x1e5d49(0x6e6)],'wasmParams':[_0xf663c['IkvXZ'],_0x1e5d49(0xb66)]},{'name':_0x1e5d49(0x64d)+'\u0089\u008e\u0086\u0095\u008c'+'\u0092','ret':_0xf663c[_0x1e5d49(0x54f)],'params':[],'wasmParams':[_0x1e5d49(0x3fd)],'wasmRet':'i32'},{'name':_0xf663c['Qwxps'],'ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)]]},{'name':_0x1e5d49(0x3da)+'\u008e\u0089\u0093\u0095\u0094'+'\u0094','ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':['i32']},{'name':_0xf663c['QfUkR'],'ret':_0xf663c[_0x1e5d49(0x596)],'params':[],'wasmParams':['i32']},{'name':'\u008b\u0090\u008d\u0095\u0086'+_0x1e5d49(0xace)+'\u008c','ret':'bool','params':[],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)]],'wasmRet':'i32'},{'name':_0x1e5d49(0x16f)+'\u0087\u008d\u008f\u008d\u0095'+'\u0087','ret':_0xf663c['BAYDc'],'params':[_0x1e5d49(0x158),_0x1e5d49(0x158)],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)],_0xf663c['IkvXZ'],_0xf663c['IkvXZ']],'wasmRet':_0x1e5d49(0x3fd)},{'name':_0xf663c[_0x1e5d49(0x93d)],'ret':_0xf663c[_0x1e5d49(0x596)],'params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':'\u0094\u008e\u0091\u008d\u0095'+_0x1e5d49(0xa78)+'\u008e','ret':_0xf663c[_0x1e5d49(0x596)],'params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':_0x1e5d49(0x60f)+_0x1e5d49(0x2a1)+'\u0091','ret':_0xf663c[_0x1e5d49(0x596)],'params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':_0xf663c['GFAzO'],'ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':['i32']},{'name':_0xf663c[_0x1e5d49(0x21c)],'ret':_0xf663c[_0x1e5d49(0x596)],'params':['float'],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)],_0xf663c[_0x1e5d49(0x5f4)]]},{'name':_0xf663c['SEymr'],'ret':'void','params':[],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)]]},{'name':'\u008e\u008b\u0093\u0091\u008e'+'\u008b\u0091\u0092\u008e\u0087'+'\u008d','ret':_0xf663c[_0x1e5d49(0x54f)],'params':[_0xf663c['BAYDc'],_0x1e5d49(0x158)],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)],_0xf663c['IkvXZ'],_0x1e5d49(0x3fd)],'wasmRet':_0x1e5d49(0x3fd)},{'name':_0x1e5d49(0x58c)+'\u0086\u008c\u008a\u0087\u0089'+'\u0095','ret':'void','params':[_0xf663c[_0x1e5d49(0x6de)],_0xf663c[_0x1e5d49(0x54f)]],'wasmParams':['i32',_0xf663c[_0x1e5d49(0x5f4)],_0x1e5d49(0x3fd)]},{'name':_0x1e5d49(0x130)+_0x1e5d49(0x3df)+'\u008f','ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':'\u008d\u008c\u0086\u0094\u008d'+'\u0091\u0095\u0088\u008f\u0088'+'\u008c','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x1e5d49(0xb77)+'\u0089\u0093\u0094\u008e\u008c'+'\u0095','ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)]]}],'TDM_GameManager':[{'name':'\u008e\u0091\u0092\u0087\u0089'+_0x1e5d49(0x442)+'\u0090','ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':_0xf663c['FRCuU'],'ret':_0xf663c['dXiBI'],'params':[],'wasmParams':['i32']},{'name':_0x1e5d49(0x260)+'\u008c\u008b\u008f\u008d\u0088'+'\u0089','ret':_0xf663c[_0x1e5d49(0x54f)],'params':[_0x1e5d49(0x2ee)],'wasmParams':[_0x1e5d49(0x3fd),_0x1e5d49(0x3fd)],'wasmRet':_0xf663c[_0x1e5d49(0xac7)]},{'name':_0xf663c[_0x1e5d49(0xb4a)],'ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)]]},{'name':_0xf663c['vhUnc'],'ret':_0xf663c['dXiBI'],'params':['bool'],'wasmParams':['i32',_0xf663c[_0x1e5d49(0xac7)]]},{'name':'\u008b\u0086\u008e\u0095\u0091'+_0x1e5d49(0x229)+'\u0094','ret':_0xf663c['dXiBI'],'params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':'\u008e\u0086\u008d\u0086\u0089'+_0x1e5d49(0x562)+'\u008c','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x1e5d49(0x40e)+_0x1e5d49(0x779)+'\u0087','ret':_0xf663c[_0x1e5d49(0x596)],'params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':_0x1e5d49(0x1a5),'ret':_0xf663c[_0x1e5d49(0x596)],'params':[],'wasmParams':[_0xf663c['IkvXZ']]},{'name':_0xf663c[_0x1e5d49(0xa71)],'ret':'void','params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':_0xf663c['EnYOo'],'ret':'void','params':[],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)]]},{'name':_0x1e5d49(0x1c5)+_0x1e5d49(0x95c)+'\u0094','ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':['i32']},{'name':_0xf663c[_0x1e5d49(0xa6a)],'ret':_0xf663c[_0x1e5d49(0x596)],'params':[],'wasmParams':['i32']},{'name':_0xf663c['XZfQO'],'ret':'void','params':[],'wasmParams':['i32']},{'name':'OnDes'+'troy','ret':'void','params':[],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)]]},{'name':_0x1e5d49(0x3f4)+_0x1e5d49(0x783)+'\u008a','ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':_0xf663c['lKGGi'],'ret':_0xf663c['dXiBI'],'params':[],'wasmParams':[_0xf663c['IkvXZ']]},{'name':'\u0091\u0095\u0087\u0088\u0091'+'\u0088\u0094\u0094\u008e\u008e'+'\u008a','ret':'void','params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':_0xf663c[_0x1e5d49(0x6d5)],'ret':_0xf663c[_0x1e5d49(0x596)],'params':[],'wasmParams':['i32']},{'name':'\u008b\u0086\u0094\u0094\u0091'+_0x1e5d49(0x304)+'\u0093','ret':'void','params':[_0xf663c[_0x1e5d49(0x54f)]],'wasmParams':[_0x1e5d49(0x3fd),'i32']},{'name':_0x1e5d49(0x679)+_0x1e5d49(0x6f1)+'\u0086','ret':'void','params':[_0xf663c[_0x1e5d49(0x7c3)],_0x1e5d49(0x2ee),_0xf663c['uUCPO']],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)],_0x1e5d49(0x3fd),'i32',_0xf663c[_0x1e5d49(0xac7)]]},{'name':_0x1e5d49(0x6fb)+'\u0094\u0089\u0093\u0088\u0093'+'\u0089','ret':_0xf663c['dXiBI'],'params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':_0xf663c['Mnxti'],'ret':_0x1e5d49(0xa6f),'params':[_0x1e5d49(0x2ee),_0xf663c['uUCPO'],_0xf663c['uUCPO']],'wasmParams':[_0x1e5d49(0x3fd),_0x1e5d49(0x3fd),_0xf663c[_0x1e5d49(0xac7)],_0x1e5d49(0x3fd)]},{'name':'\u0094\u0086\u008a\u008f\u008e'+_0x1e5d49(0x71b)+'\u0092','ret':_0xf663c['BAYDc'],'params':[],'wasmParams':[_0xf663c['IkvXZ']],'wasmRet':_0xf663c[_0x1e5d49(0xac7)]},{'name':_0x1e5d49(0xc2e)+'e','ret':'void','params':[],'wasmParams':['i32']},{'name':_0xf663c[_0x1e5d49(0x1e6)],'ret':'void','params':[],'wasmParams':['i32']},{'name':_0x1e5d49(0xad2)+_0x1e5d49(0xc28)+'\u008b','ret':_0xf663c['dXiBI'],'params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':_0x1e5d49(0x935)+_0x1e5d49(0x21a)+'\u0092','ret':_0xf663c[_0x1e5d49(0x596)],'params':[],'wasmParams':['i32']},{'name':'\u0088\u0090\u0095\u008e\u0094'+_0x1e5d49(0x307)+'\u008e','ret':_0xf663c[_0x1e5d49(0x596)],'params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':_0x1e5d49(0xaae)+_0x1e5d49(0x3ec)+'\u008c','ret':_0xf663c['dXiBI'],'params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':_0x1e5d49(0x3bb)+_0x1e5d49(0xa8d)+'\u008e','ret':_0x1e5d49(0xa6f),'params':[_0x1e5d49(0x158)],'wasmParams':[_0x1e5d49(0x3fd),_0xf663c['IkvXZ']]},{'name':_0xf663c[_0x1e5d49(0x15c)],'ret':'void','params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':_0xf663c[_0x1e5d49(0x356)],'ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)]]},{'name':_0x1e5d49(0xa9a)+_0x1e5d49(0x93b)+'\u0091','ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)]]},{'name':_0x1e5d49(0x23c)+_0x1e5d49(0xb7f)+_0x1e5d49(0xb9c)+_0x1e5d49(0x433),'ret':_0xf663c[_0x1e5d49(0x596)],'params':[_0xf663c[_0x1e5d49(0x54f)]],'wasmParams':[_0x1e5d49(0x3fd),_0xf663c['IkvXZ']]},{'name':_0xf663c['cHzKx'],'ret':_0x1e5d49(0x158),'params':[],'wasmParams':[_0x1e5d49(0x3fd)],'wasmRet':_0x1e5d49(0x3fd)},{'name':_0x1e5d49(0x990)+_0x1e5d49(0x9ba)+'\u008f','ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':['i32']},{'name':_0xf663c['kRSKJ'],'ret':_0xf663c[_0x1e5d49(0x54f)],'params':[_0xf663c[_0x1e5d49(0x7c3)]],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)],_0xf663c[_0x1e5d49(0xac7)]],'wasmRet':_0x1e5d49(0x3fd)},{'name':'\u0087\u008d\u0088\u0086\u008a'+_0x1e5d49(0x7d2)+'\u008e','ret':_0xf663c['dXiBI'],'params':['bool'],'wasmParams':[_0xf663c['IkvXZ'],'i32']},{'name':_0xf663c[_0x1e5d49(0x903)],'ret':_0xf663c[_0x1e5d49(0x596)],'params':[],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)]]},{'name':_0x1e5d49(0x565)+'\u008e\u008d\u0089\u008b\u0093'+'\u008e','ret':'void','params':[],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)]]},{'name':'\u008a\u008a\u008b\u008f\u0092'+'\u0088\u008c\u0087\u008e\u0087'+'\u008c','ret':'void','params':['int',_0xf663c['uUCPO'],_0x1e5d49(0x2ee)],'wasmParams':[_0x1e5d49(0x3fd),_0xf663c['IkvXZ'],_0xf663c['IkvXZ'],_0x1e5d49(0x3fd)]},{'name':_0x1e5d49(0x938)+_0x1e5d49(0x78f)+'\u008e','ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':['i32']},{'name':_0xf663c[_0x1e5d49(0x8e0)],'ret':_0xf663c[_0x1e5d49(0x596)],'params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':'\u0086\u0088\u0095\u0092\u0094'+'\u0086\u0089\u0086\u008b\u008b'+'\u0088','ret':'void','params':[],'wasmParams':[_0xf663c['IkvXZ']]},{'name':_0xf663c[_0x1e5d49(0xa64)],'ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':[_0xf663c['IkvXZ']]},{'name':_0x1e5d49(0xbb4)+'\u0090\u0087\u0086\u0088\u008e'+'\u0094','ret':'void','params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':_0x1e5d49(0xc5b)+_0x1e5d49(0x334)+'\u0086','ret':_0x1e5d49(0xa6f),'params':['bool'],'wasmParams':[_0x1e5d49(0x3fd),_0x1e5d49(0x3fd)]},{'name':'\u0088\u008f\u0094\u0095\u008a'+_0x1e5d49(0x7cf)+'\u0095','ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':['i32']},{'name':_0x1e5d49(0x8d0)+_0x1e5d49(0x7c5)+'\u0092','ret':'void','params':[],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)]]},{'name':_0xf663c[_0x1e5d49(0x28b)],'ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':'\u008a\u008e\u008d\u008a\u0091'+'\u008a\u008c\u0095\u0093\u008d'+'\u0092','ret':_0x1e5d49(0xa6f),'params':['int',_0xf663c['uUCPO']],'wasmParams':['i32',_0xf663c['IkvXZ'],_0xf663c[_0x1e5d49(0xac7)]]},{'name':_0xf663c[_0x1e5d49(0x56d)],'ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':'\u0093\u0094\u0087\u008b\u0086'+'\u0093\u008b\u008c\u0094\u0095'+'\u008e','ret':_0xf663c[_0x1e5d49(0x596)],'params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':_0xf663c[_0x1e5d49(0x6bc)],'ret':_0xf663c['dXiBI'],'params':[_0xf663c['BAYDc']],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)],_0x1e5d49(0x3fd)]},{'name':_0xf663c[_0x1e5d49(0x344)],'ret':_0xf663c[_0x1e5d49(0x596)],'params':[],'wasmParams':[_0x1e5d49(0x3fd)]},{'name':_0x1e5d49(0x88b)+_0x1e5d49(0x19f)+'\u0095','ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':[_0xf663c[_0x1e5d49(0xac7)]]},{'name':_0xf663c[_0x1e5d49(0x67f)],'ret':_0x1e5d49(0xa6f),'params':[],'wasmParams':[_0x1e5d49(0x3fd)]}]},_0x3b5d62=[],_0x1b3e7e=[],_0x5b20f8={},_0x5f090c=-0x25d0+0x16*-0xea+0x151*0x2c,_0x5964ed=![],_0x3e2e9a=[],_0x213110=[{'type':'FPSco'+'ntrol'+_0x1e5d49(0xb78),'keep':!![]},{'type':_0x1e5d49(0x3ca)+_0x1e5d49(0x9dd)+'pt','keep':!![]},{'type':_0xf663c['CUzYX'],'keep':![]},{'type':_0x1e5d49(0x3c0)+'ameMa'+_0x1e5d49(0xba0),'keep':!![]},{'type':_0xf663c['nAVgj'],'keep':!![]},{'type':'Photo'+_0x1e5d49(0x3ce)+'orkSy'+'nc','keep':!![],'many':!![]},{'type':_0xf663c['RVEdf'],'keep':!![],'many':!![]},{'type':_0xf663c[_0x1e5d49(0x887)],'keep':!![],'many':!![]},{'type':_0xf663c[_0x1e5d49(0x672)],'keep':!![],'many':!![]}],_0x268bde=[_0x1e5d49(0xac3)+_0x1e5d49(0x688)+_0x1e5d49(0x74f)+'.dll','Assem'+'bly-C'+_0x1e5d49(0x74f)+_0x1e5d49(0x743)+_0x1e5d49(0x541)+'.dll',_0xf663c[_0x1e5d49(0x97d)],_0xf663c[_0x1e5d49(0x12f)],_0x1e5d49(0x954)+_0x1e5d49(0xbbc)+_0x1e5d49(0x285)+_0x1e5d49(0xc47)+_0x1e5d49(0x577)+_0x1e5d49(0x792),_0x1e5d49(0x7ad)+_0x1e5d49(0x7e4)+'d'];(function _0x41ac96(){var _0xe50815=_0x1e5d49;try{var _0x51ef44=window['Unity'+_0xe50815(0x28a)+_0xe50815(0x980)]&&window[_0xe50815(0x6df)+_0xe50815(0x28a)+'dkit']['Runti'+'me'];if(!_0x51ef44||_0xf663c['sBSxC'](typeof _0x51ef44['creat'+_0xe50815(0x696)+'in'],_0xf663c['xsppV'])){_0x493058[_0xe50815(0x42a)]='Runti'+_0xe50815(0x950)+'eateP'+'lugin'+'\x20unav'+'ailab'+'le';return;}_0x493058['attem'+_0xe50815(0x17a)]=!![],_0x76a7d0=_0x51ef44[_0xe50815(0xa0e)+'ePlug'+'in']({'name':_0xe50815(0x6ca)+_0xe50815(0xb35)+'llwar'+'z','version':_0x1556cc,'referencedAssemblies':_0x268bde['slice']()}),_0x493058['ok']=!![];try{var _0x3f08e8=window['Unity'+_0xe50815(0x28a)+_0xe50815(0x980)]['Runti'+'me'];_0x3f08e8[_0xe50815(0x216)+_0xe50815(0x8a2)+'g']=_0xf663c[_0xe50815(0x27e)](_0xf663c[_0xe50815(0xab7)](_0x1556cc,':'),Math[_0xe50815(0x7db)+'m']()['toStr'+'ing'](-0x1d23+0xd5e+0xfe9*0x1)[_0xe50815(0x301)](0x1*-0x13c3+0x307*0x1+-0x2*-0x85f,-0x2*0x6b9+-0xa9d+0x1819)),_0x3ba720=_0x3f08e8[_0xe50815(0x216)+_0xe50815(0x8a2)+'g'];}catch(_0x5564f8){}_0xf663c['kktzN'](_0x2cc231),_0x38a102(),_0x493058['hooks'+_0xe50815(0x125)+'tered']=_0x3b5d62[_0xe50815(0x68d)+'h'],_0x12d0ef(),_0x493058[_0xe50815(0xb67)+_0xe50815(0xbf4)]=!![];}catch(_0x3c9f70){_0x493058[_0xe50815(0x42a)]=String(_0x3c9f70&&_0x3c9f70[_0xe50815(0x10c)+'ge']||_0x3c9f70);}}());var _0x5b960d=new Float32Array(-0x2231+0x1*0xaab+-0x13*-0x13d),_0x58e81c=new Int32Array(_0x5b960d[_0x1e5d49(0x786)+'r']);function _0x5d4a65(_0x2d85e4){var _0x28b8e7=_0x1e5d49;if(_0xf663c['KXphL'](_0x28b8e7(0x3b5),'uTvYm'))return _0x5b960d[0x26c2+0x3*-0xa1d+-0x86b]=_0x2d85e4,_0x58e81c[-0x80d+0xf9+0x6*0x12e];else{if(_0x24741f['kind']===_0xf663c[_0x28b8e7(0x233)]){_0xf663c[_0x28b8e7(0x503)](_0x4b88d3)[_0x28b8e7(0xc1d)]({'host':_0x32cbfd['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x2e7f05['kind']===_0xf663c['VJUgt'])_0xf663c[_0x28b8e7(0x6c5)](_0x3ce008)['set'](_0x4ba1d1[_0x28b8e7(0x973)+'t']);}}function _0x3de9cb(_0x32cd56){return _0x58e81c[-0x2*0xa43+-0x16df+-0xa1*-0x45]=_0x32cd56|-0x51f+0xb94+-0x3*0x227,_0x5b960d[-0xb*0x14e+0x202e+-0x11d4];}var _0x1c7561={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x466416(){var _0x2cb150=_0x1e5d49,_0x3e51a4={'WQOdn':'canva'+'s','xqLSt':_0xf663c[_0x2cb150(0x49a)],'guKYs':function(_0x244a41,_0x2e2c1f){return _0x244a41===_0x2e2c1f;},'rIkhZ':_0x2cb150(0x36f)+'t','GCHRi':_0x2cb150(0x65d)+'le','HZzNj':_0xf663c[_0x2cb150(0x6ce)],'OlGIm':function(_0x49fdcf,_0x417583){return _0x49fdcf(_0x417583);}};try{if(_0x76a7d0&&_0x76a7d0['_runt'+'ime']){var _0x47762c=_0x76a7d0[_0x2cb150(0x291)+_0x2cb150(0xb44)];if(typeof _0x47762c[_0x2cb150(0x369)+'veGam'+'e']===_0x2cb150(0x964)+_0x2cb150(0x75e)){if(_0x2cb150(0xb7b)!==_0xf663c['CHKES'])return _0xf663c['opXNF'](_0xf663c['pcaxR']('0x',_0x21bab2['o']<0xfbe+-0xa7*0x29+0xb01?'?':_0x1e4d4c['o'][_0x2cb150(0x10f)+_0x2cb150(0x907)](0x2216*-0x1+-0x19c1+0x3be7)),'\x20(')+_0x122900['why']+')';else{var _0x804dfa=_0x47762c[_0x2cb150(0x369)+'veGam'+'e']();if(_0x804dfa)return _0x1c7561[_0x2cb150(0x178)+'e']=_0x2cb150(0x8e1)+'n._ru'+_0x2cb150(0xb38)+'.reso'+_0x2cb150(0x8cd)+'me()',_0x804dfa;}}if(_0x47762c[_0x2cb150(0x899)])return _0x1c7561['sourc'+'e']=_0xf663c[_0x2cb150(0x46f)],_0x47762c[_0x2cb150(0x899)];}}catch(_0x27b16b){}try{var _0x1e80c1=window['Unity'+_0x2cb150(0x28a)+_0x2cb150(0x980)]&&window[_0x2cb150(0x6df)+_0x2cb150(0x28a)+'dkit'][_0x2cb150(0x3be)+'me'];if(_0x1e80c1&&_0xf663c[_0x2cb150(0x896)](typeof _0x1e80c1['resol'+_0x2cb150(0xc8e)+'e'],_0x2cb150(0x964)+_0x2cb150(0x75e))){var _0xb098a0=_0x1e80c1[_0x2cb150(0x369)+_0x2cb150(0xc8e)+'e']();if(_0xb098a0)return _0x1c7561[_0x2cb150(0x178)+'e']=_0xf663c['yTjjL'],_0xb098a0;}if(_0x1e80c1&&_0x1e80c1['_game']){if(_0xf663c['otAxH'](_0xf663c[_0x2cb150(0x5da)],_0xf663c[_0x2cb150(0x436)]))return _0x1c7561['sourc'+'e']=_0xf663c[_0x2cb150(0x76f)],_0x1e80c1;else{var _0x1b9eb5=('4|0|1'+_0x2cb150(0x222)+'2|5')[_0x2cb150(0x438)]('|'),_0x35a2a7=0xc1b*0x3+0x190f*-0x1+0x106*-0xb;while(!![]){switch(_0x1b9eb5[_0x35a2a7++]){case'0':var _0x47f268=_0x3c1366[_0x2cb150(0xa0e)+_0x2cb150(0x7c6)+_0x2cb150(0x857)](_0x3e51a4[_0x2cb150(0x5d2)]);continue;case'1':_0x47f268['id']=_0x3e51a4['xqLSt'];continue;case'2':_0x27d1b4={'cv':_0x47f268};continue;case'3':_0x372886[_0x2cb150(0x71e)]['appen'+'dChil'+'d'](_0x47f268);continue;case'4':if(!_0x15c453['body']||!_0x2c728d['body'][_0x2cb150(0x129)+_0x2cb150(0x3e9)+'d'])return null;continue;case'5':return _0x1bede1;case'6':_0x47f268['style']['cssTe'+'xt']=_0x2cb150(0x862)+_0x2cb150(0x248)+_0x2cb150(0xa5b)+_0x2cb150(0x905)+_0x2cb150(0xa99)+_0x2cb150(0x56c)+_0x2cb150(0x4e4)+':2147'+'48364'+_0x2cb150(0xc49)+'nter-'+_0x2cb150(0x9d7)+_0x2cb150(0x5fc)+'e;';continue;}break;}}}}catch(_0xd6a438){}try{var _0x26172c=window[_0x2cb150(0x92b)+'Insta'+_0x2cb150(0x13f)]||window['unity'+'Game']||window[_0x2cb150(0x5f7)];if(_0x26172c)return _0x1c7561[_0x2cb150(0x178)+'e']=_0xf663c['YlYAS'],_0x26172c;}catch(_0x89b9d5){}try{if(_0xf663c['xVEYz']('ScyKI',_0x2cb150(0xc40))){if(typeof game!==_0xf663c['lFIsY']&&game)return _0x1c7561['sourc'+'e']=_0xf663c[_0x2cb150(0x6a5)],game;}else{var _0x523149=_0x3b9ccc[_0x2cb150(0x854)](_0xea2e47);for(var _0x5c5bbe=0x1*0x17f7+0x2093+-0x388a*0x1;_0x5c5bbe<_0x523149[_0x2cb150(0x68d)+'h']&&_0x5c5bbe<0x37*-0x1f+0x638+0x2c9;_0x5c5bbe++){var _0x263cf2=_0x4bb139[_0x523149[_0x5c5bbe]];if(_0x263cf2&&_0x3e51a4[_0x2cb150(0x671)](typeof _0x263cf2,_0x3e51a4[_0x2cb150(0x45b)])&&_0x263cf2[_0x2cb150(0x441)+'e']&&_0x263cf2['Modul'+'e'][_0x2cb150(0xa81)+'8']&&_0x263cf2['Modul'+'e'][_0x2cb150(0xa81)+'8'][_0x2cb150(0x786)+'r'])return _0x1af0d4[_0x2cb150(0x178)+'e']=_0x2cb150(0xbf3)+'w.'+_0x523149[_0x5c5bbe]+_0x3e51a4[_0x2cb150(0xa44)],_0x263cf2;}}}catch(_0x17424f){}try{if(_0xf663c[_0x2cb150(0xc53)]('IjKtn',_0xf663c['BYCAN'])){var _0x324bb2=Object['keys'](window);for(var _0x1ff8bb=-0xad1+0x1f40+0x146f*-0x1;_0x1ff8bb<_0x324bb2[_0x2cb150(0x68d)+'h']&&_0xf663c['LkzVa'](_0x1ff8bb,0x3a*-0x2f+0x1bb*0x4+-0x1*-0x612);_0x1ff8bb++){if(_0x2cb150(0x675)!==_0x2cb150(0xa0a)){var _0x4e400c=window[_0x324bb2[_0x1ff8bb]];if(_0x4e400c&&_0xf663c['vEQjb'](typeof _0x4e400c,_0x2cb150(0x36f)+'t')&&_0x4e400c[_0x2cb150(0x441)+'e']&&_0x4e400c['Modul'+'e'][_0x2cb150(0xa81)+'8']&&_0x4e400c[_0x2cb150(0x441)+'e']['HEAPU'+'8'][_0x2cb150(0x786)+'r'])return _0x1c7561[_0x2cb150(0x178)+'e']=_0xf663c['UkjyL'](_0xf663c['BYzFs'](_0xf663c['OvjVd'],_0x324bb2[_0x1ff8bb]),_0x2cb150(0x65d)+'le'),_0x4e400c;}else{var _0x3ad8d8=_0x3f8add['hookP'+'refix']({'typeName':_0x228728[_0x2cb150(0x1f3)],'methodName':_0x2cb150(0xc2e)+'e','params':[_0x2cb150(0x3fd),_0xf663c['IkvXZ']],'returnType':_0x105c9a},_0xf663c[_0x2cb150(0x9c6)](_0x400e11,_0x559268['type'],_0x2e75fa[_0x2cb150(0x8fd)],_0x4b1c1b['many']));_0x1e560e[_0x2cb150(0x773)]({'type':_0x5292ac[_0x2cb150(0x1f3)],'hook':_0x3ad8d8,'keep':_0xf00894['keep']});}}}else{if(!_0x1bd3e1)return;var _0x2d0312=_0x26f93a[_0x2cb150(0x426)]['displ'+'ay']===_0x3e51a4['HZzNj'];_0x2baff0[_0x2cb150(0x426)]['displ'+'ay']=_0x2d0312?'':'none',_0x3e51a4[_0x2cb150(0xa91)](_0x43e8b2,'fold')['textC'+_0x2cb150(0x2bb)+'t']=_0x2d0312?'-':'+';}}catch(_0x31abb3){}return _0x1c7561[_0x2cb150(0x178)+'e']=null,null;}function _0xc64a6c(){var _0x209df3=_0x1e5d49,_0xa965d={'YkDWU':'\x20|\x20'};if(_0xf663c['IXDab']===_0xf663c['leCSa'])return _0xef1c05['log'](_0x209df3(0x4ac)+_0x209df3(0x227),_0x429206['messa'+'ge'],_0x313f44(_0x14ca14['stack']||'')[_0x209df3(0x438)]('\x0a')[_0x209df3(0x301)](-0x1*0xfa3+0x1aca*-0x1+-0x2a6d*-0x1,-0x449*-0x2+-0xa02+-0x6*-0x3e)[_0x209df3(0xb6d)](_0xa965d[_0x209df3(0x3e6)])),{'pos':null,'posAt':null,'candidates':0x0,'cluster':0x0,'groups':0x0,'discarded':0x0,'ambiguous':![],'reach':0x0};else{try{if(_0x548523&&_0x548523['buffe'+'r']&&_0x548523['buffe'+'r']['byteL'+_0x209df3(0x56b)])return _0x1c7561['sourc'+'e']=_0x1c7561['sourc'+'e']||'insta'+_0x209df3(0xa07)+_0x209df3(0x906)+_0x209df3(0x419)+_0x209df3(0x11f)+'ory',new Uint8Array(_0x548523['buffe'+'r']);}catch(_0x56bccb){}try{var _0x4d9630=_0x466416();if(_0x4d9630&&_0x4d9630[_0x209df3(0x441)+'e']&&_0x4d9630['Modul'+'e']['HEAPU'+'8']&&_0x4d9630[_0x209df3(0x441)+'e']['HEAPU'+'8'][_0x209df3(0x786)+'r'])return _0x4d9630['Modul'+'e']['HEAPU'+'8'];}catch(_0x34b5bd){}return null;}}function _0x10b932(){var _0x1678fd=_0x1e5d49;if(_0xf663c['otAxH'](_0xf663c[_0x1678fd(0x63b)],_0xf663c[_0x1678fd(0x499)])){var _0x4b6617=_0xc64a6c();if(!_0x4b6617)return null;try{return new DataView(_0x4b6617['buffe'+'r'],_0x4b6617[_0x1678fd(0x506)+'ffset'],_0x4b6617['byteL'+_0x1678fd(0x56b)]);}catch(_0xc1bc24){return null;}}else{_0x5ec68d['preve'+_0x1678fd(0x678)+_0x1678fd(0x694)](),_0x32a790(!_0x58e634['on'],_0x8eea53['facto'+'r']);return;}}function _0x19598d(_0x380c9b,_0x353ee2){var _0x3dcbc9=_0x1e5d49,_0x46ba53={'IIwsh':function(_0x418274,_0x3971de){return _0x418274!=_0x3971de;}},_0x503852=_0x10b932();if(!_0x503852){if('RPBuL'!==_0x3dcbc9(0x446))return _0x1c7561[_0x3dcbc9(0x2fb)+'d']++,_0x1c7561[_0x3dcbc9(0x4b0)+_0x3dcbc9(0x237)]=_0x1c7561['lastE'+_0x3dcbc9(0x237)]||'no\x20HE'+'APU8\x20'+_0x3dcbc9(0x555)+_0x3dcbc9(0x9fb)+'stanc'+_0x3dcbc9(0x464)+'\x20reac'+'hable'+_0x3dcbc9(0x5d5)+'Runti'+_0x3dcbc9(0x2a0)+_0x3dcbc9(0x187)+_0x3dcbc9(0x277)+_0x3dcbc9(0x336)+_0x3dcbc9(0x2bd)+'indow'+_0x3dcbc9(0x4a2)+'al',undefined;else _0x1fc7f4[_0x3dcbc9(0x93f)+'onten'+'t']=_0x3dcbc9(0x3a1)+_0x3dcbc9(0x2fb)+'d';}if(_0x380c9b<-0x4*0x4ac+0x2296*0x1+-0xfe6||_0xf663c[_0x3dcbc9(0x284)](_0x380c9b,0x1*0x5ce+0x3a*-0x5e+-0x7c1*-0x2)>_0x503852['byteL'+_0x3dcbc9(0x56b)]){if(_0xf663c[_0x3dcbc9(0x456)]('uUHTL',_0xf663c[_0x3dcbc9(0x49d)]))return _0x1c7561[_0x3dcbc9(0x2fb)+'d']++,_0x1c7561[_0x3dcbc9(0x4b0)+_0x3dcbc9(0x237)]=_0x1c7561[_0x3dcbc9(0x4b0)+'rror']||_0xf663c[_0x3dcbc9(0x4c0)](_0xf663c['bRnkU'],_0x380c9b['toStr'+_0x3dcbc9(0x907)](-0x1cd*0x11+-0x13a*0x9+0x29b7))+(_0x3dcbc9(0x59b)+_0x3dcbc9(0x3d5)+_0x3dcbc9(0x141)+'0x')+_0x503852['byteL'+'ength']['toStr'+_0x3dcbc9(0x907)](0x3*-0x39b+-0xe5e+0x193f),undefined;else{var _0x5d3a35=_0x4806bb[_0x3dcbc9(0xa0e)+_0x3dcbc9(0x7c6)+_0x3dcbc9(0x857)](_0x1903fe);if(_0x5b60ad)_0x5d3a35['class'+'Name']=_0x4f7bf2;if(_0x46ba53[_0x3dcbc9(0xc77)](_0x1e6cd4,null))_0x5d3a35['inner'+_0x3dcbc9(0x353)]=_0x10de01;return _0x5d3a35;}}try{_0x1c7561['ok']++;switch(_0x353ee2){case'u8':return _0x503852[_0x3dcbc9(0x94a)+_0x3dcbc9(0xc4c)](_0x380c9b);case'i8':return _0x503852['getIn'+'t8'](_0x380c9b);case _0xf663c['fSQqH']:return _0x503852[_0x3dcbc9(0x362)+'t16'](_0x380c9b,!![]);case'u16':return _0x503852[_0x3dcbc9(0x94a)+'nt16'](_0x380c9b,!![]);case _0xf663c[_0x3dcbc9(0xac7)]:return _0x503852['getIn'+'t32'](_0x380c9b,!![]);case _0xf663c[_0x3dcbc9(0xa28)]:return _0x503852['getUi'+_0x3dcbc9(0x3ae)](_0x380c9b,!![]);case'f32':return _0x503852[_0x3dcbc9(0x9f2)+'oat32'](_0x380c9b,!![]);case _0xf663c[_0x3dcbc9(0xb49)]:return _0x503852['getFl'+_0x3dcbc9(0x969)](_0x380c9b,!![]);case'v2':case'v3':case'v4':return _0x503852[_0x3dcbc9(0x9f2)+_0x3dcbc9(0x409)](_0x380c9b,!![]);default:return _0x503852['getIn'+'t32'](_0x380c9b,!![]);}}catch(_0x179120){return _0x1c7561['faile'+'d']++,_0x1c7561[_0x3dcbc9(0x4b0)+'rror']=_0x1c7561[_0x3dcbc9(0x4b0)+'rror']||_0xf663c['bLHnm'](String,_0x179120&&_0x179120['messa'+'ge']||_0x179120)[_0x3dcbc9(0x301)](0x2e3+0x789*-0x2+0xc2f,0x1e91+0x534*-0x6+0x11f),undefined;}}function _0x2d5180(_0x1f0ad3,_0x5e0b34,_0x23f251){var _0x32bee2=_0x1e5d49,_0xae332=_0x10b932();if(!_0xae332||_0x1f0ad3<0x2482+0x95*-0x2d+0x1*-0xa51||_0xf663c[_0x32bee2(0x6ab)](_0xf663c[_0x32bee2(0x4c0)](_0x1f0ad3,-0x1*-0x1d8b+-0x12c6+-0xac1*0x1),_0xae332[_0x32bee2(0x51b)+'ength']))return![];try{switch(_0x5e0b34){case'u8':case'i8':_0xae332['setUi'+_0x32bee2(0xc4c)](_0x1f0ad3,_0x23f251&0x1b78+0x18ca*0x1+-0xb*0x4a9);break;case _0x32bee2(0xa35):case _0xf663c[_0x32bee2(0x7ff)]:_0xae332['setIn'+'t16'](_0x1f0ad3,_0xf663c['xWPcW'](_0x23f251,0x941+-0x2019+0x16d8),!![]);break;case _0x32bee2(0x3fd):case _0xf663c['zcNgs']:_0xae332[_0x32bee2(0x1f1)+_0x32bee2(0x2d3)](_0x1f0ad3,_0x23f251|-0x2132+-0x6*-0x4f+0x1*0x1f58,!![]);break;case _0x32bee2(0xb66):_0xae332[_0x32bee2(0x830)+'oat32'](_0x1f0ad3,_0x23f251,!![]);break;default:_0xae332[_0x32bee2(0x1f1)+_0x32bee2(0x2d3)](_0x1f0ad3,_0xf663c[_0x32bee2(0x66a)](_0x23f251,0x9a5*-0x2+0x2f*0x9e+-0x9b8),!![]);}return!![];}catch(_0x8bbbcd){return![];}}var _0x5b4a0f={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':_0x1e5d49(0x3fd)},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':'i32'},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0x25baec(_0x398e8d){var _0x28e663=_0x1e5d49,_0x387cec='';for(var _0xbbdf53=0x24f*-0x5+0xb5*0x1+0xad6;_0xf663c['yhRfX'](_0xbbdf53,_0x398e8d[_0x28e663(0x68d)+'h']);_0xbbdf53++){if('vSzAQ'!==_0x28e663(0x335))return _0x180240[_0x28e663(0x280)+'r'];else{var _0x56b95a=_0x398e8d[_0xbbdf53][_0x28e663(0x10f)+'ing'](0x1a2a+0x10a6*-0x2+0x732);_0x387cec+=(_0x56b95a[_0x28e663(0x68d)+'h']<-0x16*0x155+0x51d+0x1833?'0':'')+_0x56b95a;}}return _0x387cec;}function _0x129bd6(_0x48af8f,_0x420fbd,_0x42d82f){var _0x3106b4=_0x1e5d49;if(_0xf663c[_0x3106b4(0x143)](_0x3106b4(0x9a9),_0xf663c[_0x3106b4(0x731)]))return _0x4344ea[_0x3106b4(0x1f3)]===_0x397f81;else{var _0x2a8f65=_0x10b932();if(!_0x2a8f65)return _0x1c7561['faile'+'d']++,_0x1c7561[_0x3106b4(0x4b0)+_0x3106b4(0x237)]=_0x1c7561[_0x3106b4(0x4b0)+_0x3106b4(0x237)]||_0xf663c['esGkM'],null;if(_0x420fbd<0x5*0xa7+-0x1fbb+-0x1*-0x1c78||_0xf663c['jILCk'](_0x420fbd,_0x42d82f)>_0x2a8f65['byteL'+_0x3106b4(0x56b)])return _0x1c7561[_0x3106b4(0x2fb)+'d']++,_0x1c7561['lastE'+_0x3106b4(0x237)]=_0x1c7561['lastE'+'rror']||_0xf663c['AWjlx'](_0x3106b4(0x67e)+'ss\x200x',(_0x48af8f+_0x420fbd)['toStr'+_0x3106b4(0x907)](-0x156d+0x2a*0x4f+0x1*0x887))+_0xf663c['TWbcE']+_0x2a8f65[_0x3106b4(0x51b)+_0x3106b4(0x56b)][_0x3106b4(0x10f)+_0x3106b4(0x907)](-0x15d*0x15+-0x1*-0x7b5+0x1*0x14fc),null;try{var _0x52c3e1=new Uint8Array(_0x42d82f);for(var _0x463ac5=-0x1f*-0xb3+0x396+-0x1943;_0xf663c[_0x3106b4(0x265)](_0x463ac5,_0x42d82f);_0x463ac5++)_0x52c3e1[_0x463ac5]=_0x2a8f65[_0x3106b4(0x94a)+'nt8'](_0xf663c[_0x3106b4(0x7d0)](_0x48af8f+_0x420fbd,_0x463ac5));return _0x1c7561['ok']++,_0x52c3e1;}catch(_0x208de3){return _0x1c7561[_0x3106b4(0x2fb)+'d']++,_0x1c7561['lastE'+'rror']=_0x1c7561[_0x3106b4(0x4b0)+_0x3106b4(0x237)]||String(_0x208de3&&_0x208de3[_0x3106b4(0x10c)+'ge']||_0x208de3)[_0x3106b4(0x301)](-0x8*0x182+0x2166+-0x2*0xaab,0x1*0x7dc+-0x16c1+0xf5d),null;}}}function _0x45e108(_0x640f2a,_0x367756,_0x417984){var _0x5b347c=_0x1e5d49;if(_0xf663c[_0x5b347c(0x8ba)]('ZKjLT',_0xf663c[_0x5b347c(0xc3a)]))return _0x3e6957(_0x309dd5);else{var _0x14a9b3=_0x5b4a0f[_0x417984],_0x2b13e8=_0x129bd6(_0x640f2a,_0x367756,_0x14a9b3[_0x5b347c(0x6f7)]);if(!_0x2b13e8)return null;var _0x3a2b50=new DataView(_0x2b13e8['buffe'+'r'],_0x2b13e8['byteO'+_0x5b347c(0x961)],_0x2b13e8[_0x5b347c(0x51b)+_0x5b347c(0x56b)]),_0x2e0d7a=_0x3a2b50['getIn'+_0x5b347c(0x2d3)](_0x14a9b3[_0x5b347c(0x24c)],!![]),_0xfff68b=_0x3a2b50['getIn'+'t32'](_0x14a9b3['hidde'+'n'],!![]),_0x30fc70=_0x3a2b50[_0x5b347c(0x94a)+'nt8'](_0x14a9b3[_0x5b347c(0xa76)+'d'])&0x26ed+0x1*0x1c97+-0x3*0x1681,_0x35e161=_0xf663c[_0x5b347c(0x583)](_0x417984,_0xf663c['gSLQM'])?_0x3a2b50[_0x5b347c(0x9f2)+_0x5b347c(0x409)](_0x14a9b3[_0x5b347c(0x22e)],!![]):_0x417984===_0x5b347c(0xaaa)?_0x3a2b50['getIn'+_0x5b347c(0x2d3)](_0x14a9b3[_0x5b347c(0x22e)],!![]):_0x3a2b50[_0x5b347c(0x94a)+'nt8'](_0x14a9b3[_0x5b347c(0x22e)]),_0x2f8620=_0xf663c[_0x5b347c(0x483)](_0x3a2b50[_0x5b347c(0x94a)+_0x5b347c(0xc4c)](_0x14a9b3[_0x5b347c(0x4da)+'e']),-0x18f1+0x2*0x11f1+-0xaf0);return{'keyAtOffset0':_0x2e0d7a,'hidden':_0xfff68b,'inited':_0x30fc70,'fake':_0x35e161,'act':_0x2f8620,'hex':_0xf663c[_0x5b347c(0xba1)](_0x25baec,_0x2b13e8),'alt':_0x417984===_0xf663c[_0x5b347c(0x77e)]?_0xfff68b^(_0x35e161|0x23c1+0x275+-0x49*0x86):null};}}function _0x388489(_0x2d089a,_0x3202de,_0xf4cb96){var _0x12f088=_0x1e5d49;if(_0x12f088(0xc44)===_0xf663c[_0x12f088(0x942)]){if(_0x2d089a===_0x12f088(0x306))return _0x3de9cb(_0xf663c[_0x12f088(0x3fc)](_0x3202de,_0xf4cb96));if(_0x2d089a===_0x12f088(0xaaa))return _0xf663c[_0x12f088(0x8dc)](_0xf663c[_0x12f088(0x3fc)](_0x3202de,_0xf4cb96),0x7*0x47f+0xa63+-0x29dc);return((_0x3202de^_0xf4cb96)&0x175*-0x14+-0x179c*-0x1+0x687)!==0x1e5+-0x212d+0x1f48?-0x12b5+-0x1874+0x2b2a:-0x221e+-0x1be2+0x3e00;}else{var _0xe03a2f=_0x276f37[_0x4b8d03],_0xaed251=_0xf663c[_0x12f088(0x9c6)](_0x2d4aaf,_0x3d7667,_0x2f14f5,_0xe03a2f[_0x12f088(0x6f7)]);if(!_0xaed251)return![];var _0x143ee6=new _0x15e2ec(_0xaed251['buffe'+'r'],_0xaed251['byteO'+'ffset'],_0xaed251['byteL'+_0x12f088(0x56b)]),_0x3522d1=_0xe03a2f['keyTy'+'pe']==='u8'?_0x143ee6[_0x12f088(0x94a)+_0x12f088(0xc4c)](_0xe03a2f['key']):_0x143ee6[_0x12f088(0x362)+_0x12f088(0x2d3)](_0xe03a2f['key'],!![]),_0x384b54;if(_0x25c098==='obfF')_0x384b54=_0x4ff4ed(_0x1d2bc5);else{if(_0xf663c[_0x12f088(0x57b)](_0x2c203d,_0x12f088(0xaaa)))_0x384b54=_0xf663c['AIiYn'](_0x37c26e,0x1*-0x1ec1+0x2*-0x29d+0x23fb);else _0x384b54=(_0x4e05df?-0x711+0x116*-0x7+-0x4e4*-0x3:0x1ba3+-0x24e9+-0x2*-0x4a3)&-0xb*0x189+0x178+-0x16*-0xbf;}return _0x10a521(_0xf663c[_0x12f088(0x488)](_0x13d375,_0x3d8585)+_0xe03a2f['hidde'+'n'],'i32',_0xf663c[_0x12f088(0x3fc)](_0x384b54,_0x3522d1))&&_0xf663c[_0x12f088(0x23a)](_0x70c625,_0xf663c[_0x12f088(0x8c6)](_0x29b296,_0x1b7cb8)+_0xe03a2f[_0x12f088(0x22e)],_0xf663c[_0x12f088(0x896)](_0x21ced2,_0x12f088(0x306))?_0x12f088(0xb66):_0x2cf79f===_0x12f088(0xaaa)?_0xf663c['IkvXZ']:'u8',_0x38f8ae===_0x12f088(0x306)?_0x151da4:_0xf663c['LJAVF'](_0x39e08d,_0xf663c['OHRgo'])?_0xf663c['AIiYn'](_0x3a8e63,-0x11be+-0x5d0+0x178e):_0x7e8e21?0xfcd+0xfad+-0x1f79:-0x162d+-0x150b*-0x1+0x122)&&_0x55ec88(_0xf663c['WNtlT'](_0x3348fd,_0x48e265)+_0xe03a2f[_0x12f088(0x4da)+'e'],'u8',-0x8*0x9c+-0x1*-0x124c+-0xd6c);}}function _0x40c7f5(_0x39ee12,_0x50333b,_0x513330){var _0x14cdba=_0x1e5d49,_0xa94158=(_0x14cdba(0x60e)+'|7|5|'+'9|13|'+'8|1|1'+'4|0|2'+'|10|1'+'1|12')[_0x14cdba(0x438)]('|'),_0x51783b=-0x50f+-0x5e5+0x4*0x2bd;while(!![]){switch(_0xa94158[_0x51783b++]){case'0':_0x509556=(_0x509556||-0x5*0x7a6+-0x4a+0x2688)&-0x25ee+0x124d*0x2+-0x1*-0x155;continue;case'1':_0x232e6d&=0x2c*0xac+0xbe2+0x2873*-0x1;continue;case'2':_0x322af4&=0x2cb+0x1*-0x815+0x1*0x54b;continue;case'3':var _0x232e6d=_0xf663c[_0x14cdba(0x98a)](_0x19598d,_0xf663c['wkXlY'](_0x39ee12+_0x50333b,_0x12f367[_0x14cdba(0x24c)]),'u8');continue;case'4':if(!_0x12f367)return null;continue;case'5':var _0x509556=_0xf663c[_0x14cdba(0xa7c)](_0x19598d,_0x39ee12+_0x50333b+_0x12f367['inite'+'d'],'u8');continue;case'6':var _0x12f367=_0x5b4a0f[_0x513330];continue;case'7':var _0x1695db=_0xf663c['FAqxh'](_0x19598d,_0xf663c[_0x14cdba(0x156)](_0x39ee12+_0x50333b,_0x12f367['hidde'+'n']),'i32');continue;case'8':if(_0x232e6d===undefined||_0xf663c[_0x14cdba(0x697)](_0x1695db,undefined)||_0x3048a1===undefined||_0x322af4===undefined)return null;continue;case'9':var _0x3048a1=_0x19598d(_0xf663c[_0x14cdba(0xaa8)](_0x39ee12+_0x50333b,_0x12f367['fake']),_0x513330===_0x14cdba(0x306)?'f32':_0x513330===_0xf663c[_0x14cdba(0x77e)]?_0x14cdba(0x3fd):'u8');continue;case'10':var _0x1674ce;continue;case'11':if(_0x513330===_0x14cdba(0x306))_0x1674ce=_0x3de9cb(_0x1695db^_0x232e6d);else{if(_0x513330===_0x14cdba(0xaaa))_0x1674ce=_0x1695db^_0x232e6d|0x157*0x13+-0x257f+0xc0a;else _0x1674ce=((_0x1695db^_0x232e6d)&-0x394+-0xb3f*0x1+0x546*0x3)!==0xc18+-0x15c*-0x11+-0x3*0xbbc?0x2073+-0x68*-0x1c+-0x2bd2:0xc16+0xa1*-0xa+-0x5cc;}continue;case'12':return{'real':_0x1674ce,'fake':_0x3048a1,'act':_0x322af4,'init':_0x509556,'key':_0x232e6d,'hidden':_0x1695db};case'13':var _0x322af4=_0x19598d(_0xf663c['mtkWO'](_0xf663c['tVsBf'](_0x39ee12,_0x50333b),_0x12f367[_0x14cdba(0x4da)+'e']),'u8');continue;case'14':_0x1695db|=-0x6a2+0x1ba1+-0x14ff;continue;}break;}}function _0x217fa0(_0x5c5286,_0x3c30ab,_0x323229,_0x24ab81){var _0x14d267=_0x1e5d49;if('ItZrw'===_0x14d267(0x6ba)){var _0x4496a8=_0x5b4a0f[_0x323229],_0x404fc6=_0xf663c[_0x14d267(0xaa7)](_0x129bd6,_0x5c5286,_0x3c30ab,_0x4496a8['size']);if(!_0x404fc6)return![];var _0x17f1c6=new DataView(_0x404fc6['buffe'+'r'],_0x404fc6[_0x14d267(0x506)+'ffset'],_0x404fc6[_0x14d267(0x51b)+'ength']),_0x3df72c=_0x4496a8[_0x14d267(0xc91)+'pe']==='u8'?_0x17f1c6['getUi'+'nt8'](_0x4496a8[_0x14d267(0x24c)]):_0x17f1c6['getIn'+_0x14d267(0x2d3)](_0x4496a8[_0x14d267(0x24c)],!![]),_0x4b8dff;if(_0x323229===_0x14d267(0x306))_0x4b8dff=_0x5d4a65(_0x24ab81);else{if(_0xf663c[_0x14d267(0x84b)](_0x323229,_0xf663c[_0x14d267(0x77e)]))_0x4b8dff=_0xf663c[_0x14d267(0x66a)](_0x24ab81,-0x1ff5+0x1a10+-0x1f7*-0x3);else _0x4b8dff=(_0x24ab81?0x22a*0x3+-0x248e*0x1+0x1e11:0x4*0x903+-0xee3+-0x1529)&0x268b+0x1*0x8b4+-0x2e40;}return _0xf663c['RQBKY'](_0x2d5180,_0x5c5286+_0x3c30ab+_0x4496a8['hidde'+'n'],_0x14d267(0x3fd),_0xf663c[_0x14d267(0x3fc)](_0x4b8dff,_0x3df72c))&&_0xf663c['GBVyb'](_0x2d5180,_0x5c5286+_0x3c30ab+_0x4496a8['fake'],_0xf663c['pZUFD'](_0x323229,_0xf663c[_0x14d267(0xb3c)])?_0x14d267(0xb66):_0x323229==='obfI'?'i32':'u8',_0x323229===_0x14d267(0x306)?_0x24ab81:_0xf663c['psema'](_0x323229,'obfI')?_0x24ab81|-0x22ed*0x1+0x121a+0x10d3:_0x24ab81?-0x2020+0x5bb+-0x6d*-0x3e:-0x2709+0x933*0x2+0x14a3)&&_0xf663c[_0x14d267(0x14c)](_0x2d5180,_0xf663c[_0x14d267(0x965)](_0x5c5286,_0x3c30ab)+_0x4496a8[_0x14d267(0x4da)+'e'],'u8',0xb8+0x21da+-0x2292*0x1);}else{var _0x234e21=_0x23306a['getIt'+'em'](_0xaef840);if(!_0x234e21)return;var _0x5d310b=_0x153ced[_0x14d267(0x891)](_0x234e21);if(_0x5d310b&&typeof _0x5d310b['x']===_0x14d267(0x333)+'r'&&typeof _0x5d310b['y']==='numbe'+'r')_0xdeb973['pos']=_0x5d310b;}}var _0x24f786={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0xfc7502=0x1*0x216f+-0x24bd+-0x3*-0x11a+0.03,_0x3e566e=0x2*-0x917+-0x13d2+0x2602,_0x282826={},_0x550940=-0x111f+0x2595+-0x1476,_0x23b861=[],_0x1834f2=[];function _0x135979(_0x254d7c){var _0x5b5909=_0x1e5d49,_0x148b87=_0x46fb0b['FPSco'+'ntrol'+_0x5b5909(0xb78)]||[],_0x1b1e70=[];_0x1834f2=[],_0x23b861=[];for(var _0x675a1b=0xaba+-0x1057+0x59d;_0x675a1b<_0x148b87[_0x5b5909(0x68d)+'h'];_0x675a1b++){var _0xf91240=_0x148b87[_0x675a1b][0x5d1*-0x4+-0x3db+0x1b1f];if(_0x148b87[_0x675a1b][-0x27*0x7+0x6*0x322+-0x11ba*0x1]!=='obfF')continue;var _0x168cc3=_0x45e108(_0x254d7c,_0xf91240,'obfF');if(!_0x168cc3||_0xf663c[_0x5b5909(0x7b8)](_0x168cc3['inite'+'d'],-0x11fe+-0xfd*0x13+0x24c6))continue;var _0x5ad878=_0xf663c[_0x5b5909(0xa4f)](_0x388489,_0xf663c[_0x5b5909(0xb3c)],_0x168cc3[_0x5b5909(0x470)+'n'],_0x168cc3['keyAt'+_0x5b5909(0x242)+'t0']);if(typeof _0x5ad878!==_0xf663c['fIWUV']||!_0xf663c[_0x5b5909(0x984)](isFinite,_0x5ad878))continue;var _0xb54711=_0xf663c['hxPaI'](_0x254d7c,':')+_0xf91240,_0x18cf7f=_0x282826[_0xb54711];if(!_0x18cf7f||_0xf663c[_0x5b5909(0x143)](_0x5ad878,_0x18cf7f[_0x5b5909(0x901)+'ritte'+'n']))_0x18cf7f=_0x282826[_0xb54711]={'base':_0x5ad878,'lastWritten':null};var _0x39a857=_0x18cf7f['base'],_0x58c35d=Math['abs'](_0x39a857);if(_0x58c35d<-0xc5*0x15+0x1087+-0x1*0x5e+0.0001||_0x58c35d>-0x282fd+-0x1*0x11ba5+-0x1*-0x52542){_0x1834f2[_0x5b5909(0x773)]({'o':_0xf91240,'v':_0x5ad878,'why':_0x5b5909(0x864)+_0x5b5909(0x735)+'e'});continue;}_0x1b1e70[_0x5b5909(0x773)]({'o':_0xf91240,'v':_0x5ad878,'a':_0x58c35d,'base':_0x39a857,'key':_0xb54711,'st':_0x18cf7f});}var _0x1ea327=[];for(var _0x5c7238=-0x1*-0x950+-0x1*-0xc97+-0x15e7;_0x5c7238<_0x1b1e70['lengt'+'h'];_0x5c7238++){var _0x182b1f=_0x1b1e70[_0x5c7238]['a'],_0x124646=null;for(var _0xd14857=0x581*0x3+0x1*-0x18c1+0x83e;_0xd14857<_0x1ea327[_0x5b5909(0x68d)+'h'];_0xd14857++){var _0x270318=_0x1ea327[_0xd14857][_0x5b5909(0x5bb)]/_0x182b1f;if(_0x270318>-0x2402+0x2683+-0x4*0xa0-_0xfc7502&&_0x270318<_0xf663c[_0x5b5909(0x8ea)](0xa*0x3e6+-0x1*-0x6d3+-0x2dce,_0xfc7502)){_0x124646=_0x1ea327[_0xd14857];break;}}!_0x124646&&(_0x124646={'mean':_0x182b1f,'members':[]},_0x1ea327[_0x5b5909(0x773)](_0x124646));_0x124646[_0x5b5909(0x29f)+'rs'][_0x5b5909(0x773)](_0x1b1e70[_0x5c7238]),_0x124646[_0x5b5909(0x5bb)]=-0x1d8d+0x21c8+0x169*-0x3;for(var _0x2de9be=0x3*0x1cd+0x3*0xbcd+0x6*-0x6cd;_0x2de9be<_0x124646[_0x5b5909(0x29f)+'rs']['lengt'+'h'];_0x2de9be++)_0x124646[_0x5b5909(0x5bb)]+=_0x124646[_0x5b5909(0x29f)+'rs'][_0x2de9be]['a'];_0x124646['mean']/=_0x124646[_0x5b5909(0x29f)+'rs']['lengt'+'h'];}var _0x2b1cc2=[];for(var _0x182b62=0x168c+0x56*-0xb+0x1*-0x12da;_0x182b62<_0x1ea327[_0x5b5909(0x68d)+'h'];_0x182b62++){if(_0x1ea327[_0x182b62][_0x5b5909(0x29f)+'rs'][_0x5b5909(0x68d)+'h']>=_0x3e566e)_0x2b1cc2[_0x5b5909(0x773)](_0x1ea327[_0x182b62]);}if(!_0x2b1cc2[_0x5b5909(0x68d)+'h']){if(_0xf663c[_0x5b5909(0x7be)]!==_0x5b5909(0x48b))_0xfab402(_0x57fb93);else{_0x1834f2['push']({'o':-(0x1252+0x2*0xea3+-0x2f97),'v':0x0,'why':_0x5b5909(0x479)+_0x5b5909(0x24f)+'f\x20'+_0x3e566e+(_0x5b5909(0x389)+_0x5b5909(0xbfe)+_0x5b5909(0x618)+'\x20agre'+'ed')});return;}}var _0x2290db=_0x2b1cc2[0x7*0x322+0x202f+0x361d*-0x1]['mean'];for(var _0x418f14=0x4cb+0x5*0x2a9+-0x1218;_0x418f14<_0x2b1cc2[_0x5b5909(0x68d)+'h'];_0x418f14++)if(_0x2b1cc2[_0x418f14][_0x5b5909(0x5bb)]<_0x2290db)_0x2290db=_0x2b1cc2[_0x418f14][_0x5b5909(0x5bb)];var _0x589c0c=_0x2290db*(0x254d+0xeb6+-0x3403+0.5);for(var _0x3030cc=0x1*0x2147+-0x11c+-0x3d*0x87;_0xf663c['Dletp'](_0x3030cc,_0x1ea327['lengt'+'h']);_0x3030cc++){if('uUGdE'===_0x5b5909(0xc35))return _0x205a98['abs'](_0x53bad3-_0x3da36e)<=_0x3e74d0['max'](-0x1*0x220+0x29*-0x35+-0x3*-0x38a,_0x541c83[_0x5b5909(0x892)](_0x2b8fa3)*(-0x605+0x6d6+0xb*-0x13+0.6));else{if(_0x1ea327[_0x3030cc][_0x5b5909(0x29f)+'rs'][_0x5b5909(0x68d)+'h']>=_0x3e566e)continue;for(var _0x253650=0x7*0x1be+0xe30+0x16*-0x133;_0xf663c[_0x5b5909(0x59f)](_0x253650,_0x1ea327[_0x3030cc]['membe'+'rs'][_0x5b5909(0x68d)+'h']);_0x253650++){_0x1834f2['push']({'o':_0x1ea327[_0x3030cc][_0x5b5909(0x29f)+'rs'][_0x253650]['o'],'v':_0x1ea327[_0x3030cc][_0x5b5909(0x29f)+'rs'][_0x253650]['v'],'why':'singl'+_0x5b5909(0x7a4)});}}}for(var _0x49ad1f=0x82*-0x46+0x1*-0xc75+0x3001;_0xf663c[_0x5b5909(0x9c9)](_0x49ad1f,_0x2b1cc2['lengt'+'h']);_0x49ad1f++){var _0x4287d5=_0x2b1cc2[_0x49ad1f]['membe'+'rs'];for(var _0x4210d8=0x276+0x9*0x17f+0x3*-0x54f;_0x4210d8<_0x4287d5['lengt'+'h'];_0x4210d8++){var _0x2c595c=_0x4287d5[_0x4210d8];if(_0x2c595c['a']<_0x589c0c){_0x1834f2['push']({'o':_0x2c595c['o'],'v':_0x2c595c['v'],'why':_0xf663c['hzaDI']('below'+_0x5b5909(0x418)+'r\x20',_0x589c0c[_0x5b5909(0xc52)+'ed'](0x1c71+-0x1*-0x407+-0x2076))});continue;}var _0x50157f=_0x2c595c[_0x5b5909(0x24a)]*_0x24f786['facto'+'r'];_0xf663c[_0x5b5909(0xa97)](_0x217fa0,_0x254d7c,_0x2c595c['o'],_0xf663c[_0x5b5909(0xb3c)],_0x50157f)&&(_0x2c595c['st']['lastW'+_0x5b5909(0x5ba)+'n']=Math[_0x5b5909(0x1bb)+'d'](_0x50157f),_0x550940++,_0x23b861['push']('0x'+_0x2c595c['o'][_0x5b5909(0x10f)+_0x5b5909(0x907)](0xa7*0xe+-0x182c+0xf1a)));}}}var _0x46fb0b={'FPScontroller':[[-0x1f*0x19+0xae3+0x2*-0x3e6,_0xf663c[_0x1e5d49(0xb3c)]],[0x258e+0x141e+-0x1*0x3984,_0xf663c[_0x1e5d49(0xb3c)]],[-0xd*0x14c+0x1e9a*0x1+-0xd7e,_0xf663c['gSLQM']],[-0x1*0xc75+0x966*-0x2+0x1f99,_0xf663c['gSLQM']],[0x14c*-0x11+-0xfd*-0x13+0x3b5,_0xf663c['gSLQM']],[0x1f8b+-0xffe*-0x1+-0x2f01,_0x1e5d49(0x306)],[-0x57*0x2f+-0x4*-0x2a0+0x619,_0xf663c[_0x1e5d49(0xb3c)]],[0x1c3*0x9+0xb1*-0x1+-0xe72,'obfB'],[0x999+-0x20de+0x1809,_0xf663c['gSLQM']],[0x475*-0x7+0xc75+-0xc1*-0x1a,_0x1e5d49(0x3fd)],[0x8de+-0x1554+0xd56,'v3'],[0x2419*-0x1+0x1*-0x164a+-0x697*-0x9,'u8'],[0x1*0x1a88+-0x1495+-0x503,_0x1e5d49(0x306)],[0x1*-0x751+0x16a2*0x1+-0x4c3*0x3,_0xf663c['IkvXZ']],[-0xba1+0xd03+-0x56,'u8'],[0x1c82+0x7*0x12f+-0x3*0xbe9,_0x1e5d49(0x3fd)],[-0x5ed*0x1+-0x32*0xc1+0x2cb3,'u8'],[0x4f*-0xd+0xc27*-0x3+0x298d,'u8'],[-0x1053+0x152e+-0x3bf,_0x1e5d49(0x306)],[0x4*-0x5cf+-0x12ac+0x2b1c,_0xf663c[_0x1e5d49(0xb3c)]],[-0x7*-0xd5+0x71e*0x5+0x1*-0x281d,_0x1e5d49(0xb66)],[-0x17bb*0x1+-0x13e8+0x2cf3,_0x1e5d49(0xb66)],[0x1949+-0x1*-0x146+-0x193b,'v3'],[-0x7*0x3f9+-0x1*0x1caa+0x39d9,'v3'],[-0x11*0x112+-0x96b+-0x1d09*-0x1,'f32'],[-0x32b*0x2+0x5*-0x705+0x2adf,_0x1e5d49(0xb66)],[0x269b*-0x1+0x792+0x2091,'u8'],[-0x183*-0x3+0x2201+-0xa*0x3b3,_0x1e5d49(0xb66)],[0x71*-0x51+-0x433*0x5+0x3a58,'v3'],[0x1633+-0x120a+-0x2b*0xf,'u8'],[-0x110a+0x2*0x743+-0x9*-0x78,_0xf663c[_0x1e5d49(0x5f4)]],[0x163f+0x8db+0x2*-0xeb1,_0x1e5d49(0xb66)],[0x386*-0x5+-0x11c3+-0x251d*-0x1,'u8'],[0x1*0xf21+-0xe34+0xd0,'u8'],[0x1*-0xaab+-0x4da+0x1*0x1145,_0x1e5d49(0x306)],[-0x22ca+0x2b*-0x6f+0x3747,_0xf663c['cBCdk']],[0xb*-0x79+-0x115c+-0x85*-0x2f,'u8'],[-0x2*-0x1be+0xd1*-0x22+0x2*0xd13,'obfF'],[0xb04+-0xe05+0x4f9,'v3'],[-0x185c*0x1+-0x1c6+0x1c2a,_0x1e5d49(0xb57)],[0x1b75+0x1d93+-0xc*0x494,_0xf663c[_0x1e5d49(0x5f4)]],[0x2132+0x4*0x3e7+-0x2eb2,_0xf663c['cBCdk']],[0xe03+0xd23+-0x18da,_0xf663c[_0x1e5d49(0x5f4)]],[0x6*0x44b+0xd7+0x1849*-0x1,_0xf663c['cBCdk']],[-0xd75+-0xd81*0x2+0x2acb,_0x1e5d49(0xb66)],[0x7*0x371+0x2399+-0xa*0x5bc,'f32'],[0x7*0x28+0xfb*0x1f+0x1*-0x1d21,'u8'],[0xd2a*-0x1+0x19b2+-0xa2b,'u8'],[0x1f8a+0xc9b*0x1+-0xded*0x3,'u8'],[-0x1a82+-0x22e8+-0x73*-0x8e,_0xf663c[_0x1e5d49(0x5f4)]],[0x1974+0x491+-0x1ba1,'u8'],[-0x1f*0x20+0xcf*-0x2f+0x2c46,'u8'],[-0xdcf*0x1+-0x4bb+0x14f2,_0xf663c[_0x1e5d49(0x5f4)]],[0x1ca0+0x1d7d+-0x37b1,_0xf663c[_0x1e5d49(0x5f4)]],[0x33*-0x5d+0x1471+0x86*0x1,'f32'],[0x2*0xfee+0xf69+-0x2cd1,_0x1e5d49(0xb66)],[0x43*-0xf+0x27*0x4d+-0x556,_0xf663c['cBCdk']],[-0x6f8+0x1400+-0x1e*0x5a,'f32'],[0x260a+-0xb4*0x35+-0x22*-0xd,_0x1e5d49(0xb66)],[-0x1016+0x5*-0x9b+-0x1*-0x15a1,'v3'],[0x2*-0x4b1+-0xc87+0x187d,'u8'],[0x80*0x4+-0x88c+0x924,'v3'],[-0x90*-0x19+-0x8*0x9b+0x694*-0x1,_0xf663c['cBCdk']],[0x7d1+0x1*0xc07+0x4*-0x44b,'v3'],[0x1598+-0x256+-0x108a,'f32'],[-0x1a*-0x46+-0x234c+0x1eec,'f32'],[0xd+0xab3+0x800*-0x1,_0xf663c['cBCdk']],[0x5*0x611+0xd*-0x6+-0x1*0x1b43,'u8'],[-0x83*0x2+0x65*-0xe+0x951,'u8'],[-0x2f0+-0x67*0x5e+0x2b8a,_0x1e5d49(0xb66)],[0x1708*-0x1+0xe83+-0x3cb*-0x3,_0x1e5d49(0xb66)],[0x339+0xf4*0x17+-0x1641,'v3'],[0x20b2+0xde0+0x15d1*-0x2,'v3'],[0x109*0x19+-0x1*-0x17c3+-0x2ea8,_0xf663c[_0x1e5d49(0x5f4)]],[0x127d*0x1+-0x1*-0x253d+-0x1a5d*0x2,_0xf663c['cBCdk']],[-0x2563*-0x1+-0x25f*0x10+0x391,'f32'],[0xdee+0x11*0x23d+0x1051*-0x3,_0xf663c['cBCdk']],[0x124+-0x270b+0x1*0x28f3,'v3'],[-0x2*0x1231+0x1752+-0xb*-0x178,'u8'],[-0xaa6+0x1a86+-0xcc4,'v3'],[-0x117*0xb+-0x8f*-0x7+0xb3c,_0xf663c['IkvXZ']],[0x1fc0+-0x16*0x137+-0x9e*0x3,'f32'],[0x134f+0x1*0x4f6+-0x1515,_0xf663c[_0x1e5d49(0x5f4)]],[-0x7a2+-0x26f3+0x31c9,_0x1e5d49(0xb66)],[0xe8c+-0x8*-0x298+-0x2010,_0x1e5d49(0xb66)],[-0x5*-0x613+-0x2b*-0x64+-0x2beb,'u8'],[0x5*0x6bc+-0x1*-0x52f+-0x239a,'u8'],[-0x1*0x897+0x61e+0x5c5,'u8'],[0x16e0+0x18f0+0x109*-0x2b,'u8'],[-0x1*-0x849+0x1177*0x2+-0x27e9,'u8'],[0x11f6+-0x9e0+-0x4c6,'f32'],[0x1*-0xd2a+-0x1164+0x21e2,_0xf663c[_0x1e5d49(0x5f4)]],[-0x1da3+-0x8c5+-0x2*-0x14e0,_0xf663c[_0x1e5d49(0x5f4)]],[0x1209*-0x1+0xdc4*-0x1+0x2329,_0x1e5d49(0xb66)],[0x2021+0x14*-0x154+0xbb*-0x3,_0x1e5d49(0xb66)],[0x1a3c+-0x1ea+-0x5e*0x39,'u8'],[-0x5e*0x10+-0x1*0x100c+0x1954,'f32'],[0x1*0x20ef+-0x1079*-0x1+-0x2dfc,'f32'],[0x168a+-0xb7d*0x3+-0x1*-0xf5d,'u8'],[-0x3ae+0x10d9+-0x9b3,'v3'],[0x5c*0x52+-0x8e1+-0x1113*0x1,'v3'],[-0x8b*0x19+0x1*-0x1777+0x2*0x144d,'v3'],[-0x4e2*0x1+-0x1fb0+0x2*0x1417,_0x1e5d49(0xb66)],[-0x97*0x25+-0x1*-0x1539+0x43a,_0xf663c['cBCdk']],[-0x20b*0x2+0x748*0x2+-0xe*0x7d,_0xf663c['cBCdk']],[-0x115f+0x1fcf+0x45*-0x28,'v3'],[0x1ad7*0x1+-0x1d91+-0x337*-0x2,_0x1e5d49(0x3fd)],[-0x2*0xedd+0x1*-0xf3f+0x30b1,'u8'],[-0x1*0x251+-0x2198+0x27a5,_0x1e5d49(0x3fd)],[-0x9be*-0x1+-0x1*-0x16eb+-0x1ce9,_0x1e5d49(0xb66)],[-0xf1*-0x2+-0x5e8+0x7ca,_0xf663c[_0x1e5d49(0x5f4)]],[0x6ff*0x3+0x34*0xa1+-0x31e9,_0xf663c['cBCdk']],[0x1ac4+0x704+0x26*-0xca,_0x1e5d49(0xb66)],[0x1423+0xcc9+-0x1d1c,'v3'],[-0x1*0x718+0x425*-0x2+0x133e,_0x1e5d49(0x3fd)],[-0x1*-0x2ba+0x714+-0x5ee,'u8'],[-0x1c44+-0x5*-0x503+-0x716*-0x1,'u8'],[-0x2*-0xdc1+-0x14a*0x13+0xde,'u8'],[-0x2329*-0x1+-0x2275+0x330,_0x1e5d49(0xb66)],[-0x3ae*0x1+0x1*0x47a+0xc7*0x4,_0xf663c[_0x1e5d49(0xac7)]]],'HealthScript':[[0x95*-0x7+-0x25c5+0x2a30,'u8'],[0x1852+-0xb*0x7+0x7e3*-0x3,_0xf663c['IkvXZ']],[0x15af+0x1*0x1426+-0x2955*0x1,_0xf663c[_0x1e5d49(0x5f4)]],[0x11b*-0x5+0x4*0x7d+-0x1*-0x417,'f32'],[0x23a9+-0x1*-0xb3+-0x23d4,_0x1e5d49(0xb66)],[-0x53*0x37+0x52f*-0x4+0x271d,_0xf663c[_0x1e5d49(0x5f4)]],[0x3*-0xbdb+0x1*0x1df2+0x62f,_0x1e5d49(0xb66)],[-0x415+-0x16db+0x1b84,'f32'],[0x946+0x2*-0x347+-0x218,'i32'],[-0x1*-0x17b1+0x8*0x10c+-0x1f6d,'i32'],[0x11*0x34+0x116a+0x18e*-0xd,'u8'],[0x1db+-0x1939+-0x1807*-0x1,'u8'],[0x1*-0x181d+-0x2*-0xa06+0x4bb,'u8'],[-0x2*-0x6e6+-0x15a5+0x884,'u8'],[0x22f*0x10+-0x307*-0x8+-0x18*0x26f,_0xf663c['OHRgo']],[0x2f*-0x2d+-0xb1*-0x6+0x4f1,_0xf663c[_0x1e5d49(0x77e)]],[0x888+0x8b*0x11+-0x10db,_0xf663c[_0x1e5d49(0x77e)]],[-0x15b*-0x7+0x15e2+-0x1e63*0x1,_0xf663c[_0x1e5d49(0x77e)]],[-0x1*0x16f9+0x159d+0x4*0x9b,_0xf663c[_0x1e5d49(0x77e)]],[-0xa*0x24f+-0x3d1+0x1c0b,_0x1e5d49(0xb57)],[0xb0f+-0x1efc+0x73*0x2f,_0x1e5d49(0x306)],[-0x2676+-0xd5c+0x351a,_0xf663c[_0x1e5d49(0x5f4)]],[-0x11*-0x13d+0x1*0x17e3+-0x54*0x85,_0x1e5d49(0xb66)],[-0x2561+0x1240+-0x1471*-0x1,'f32'],[-0xbf+0x7eb*-0x3+-0x6*-0x44e,_0x1e5d49(0xb66)],[-0xc15*0x3+-0x1db*0x2+0x2951,_0x1e5d49(0xb66)],[-0x8b7+0x1bc7+-0x11b0,'v3'],[0x409*0x7+-0x744+-0x138b*0x1,_0xf663c[_0x1e5d49(0x5f4)]],[0x1d*0x65+0xaf*-0x16+0x511,_0xf663c[_0x1e5d49(0x5f4)]],[-0x142f+0x18c6+-0x317,'u8'],[0x2c0*-0x4+-0x1dea+0x43f*0xa,'u8'],[-0x24cd+0x92*-0x33+0x1f*0x22d,_0xf663c[_0x1e5d49(0xac7)]]],'PlayerConfig':[],'WeaponManager':[[-0xac1+0x1bd3+-0x10fa,_0x1e5d49(0x3fd)],[-0xf7f*0x1+0x117f+-0xb*0x2c,_0xf663c[_0x1e5d49(0xac7)]],[-0xf5e+0x2535+0x33*-0x6d,'u8'],[-0x161b+-0x2083+-0x1b61*-0x2,_0xf663c[_0x1e5d49(0xac7)]],[-0x184f+0x542+0x1371,_0xf663c[_0x1e5d49(0xb3c)]],[-0x735+0x1*0x1695+-0xee4,_0xf663c['cBCdk']],[-0xbd4+-0x1384*-0x1+-0x72c,_0xf663c[_0x1e5d49(0xac7)]],[0x1*-0x7a2+-0x1*-0x229b+-0x7*0x3c7,'u8'],[-0x1*-0x86+-0x7*-0x241+-0xfc4*0x1,'u8'],[0x1f5a+0x10cf+-0x2f9d,_0x1e5d49(0x3fd)],[-0x80b+0xffa+-0x75f,_0xf663c[_0x1e5d49(0x5f4)]],[0xb27+-0x1*0x1d1e+-0x128f*-0x1,_0x1e5d49(0xb66)],[-0xc18+0xedb+-0x217,_0xf663c['IkvXZ']],[-0x11f5+0x4*0x1ac+0xc01,'u8'],[-0xe88+0xee4+0x80,_0xf663c[_0x1e5d49(0x77e)]],[-0x142*0x1+0x1*0x11d7+0x2d*-0x59,_0xf663c['OHRgo']],[-0x89*0x11+0x1e1*-0xb+-0x1*-0x1ec8,_0xf663c['cBCdk']],[0x2*0xf79+0x5*-0x675+0x1*0x25f,_0xf663c[_0x1e5d49(0x5f4)]],[-0x3*-0x957+-0x55e+0x1*-0x159b,_0xf663c['cBCdk']],[-0x878*0x1+-0x1*0x805+0x1195,_0x1e5d49(0xb66)],[0x736+0xc32+-0x1248,'f32'],[-0x1*0x49d+0x356+-0x26f*-0x1,'u8'],[0xd0a+-0x5a6+0x638*-0x1,_0x1e5d49(0xaaa)],[0x52e+-0x11bf+0x9*0x189,_0xf663c['OHRgo']],[-0x6f2*-0x4+-0x6*-0x52f+-0x398e,_0x1e5d49(0xaaa)],[0x5*-0x5f+0x1eae+-0x1b6b,_0x1e5d49(0xb57)],[0x13a4*-0x1+0x138*-0xc+0x23b8,_0xf663c[_0x1e5d49(0x82b)]],[0x1*-0x165e+0x18d9+-0xfb,_0x1e5d49(0xb57)],[-0xbb9+-0x2b*-0x61+-0x306,_0xf663c['WLLmy']],[0x8ba+0xe3c+-0xaa9*0x2,_0xf663c[_0x1e5d49(0x82b)]],[0x10af*-0x1+0x1e26+-0x3*0x3ed,_0x1e5d49(0xaaa)],[-0x1d2a*0x1+0x3bd+0x45*0x65,_0x1e5d49(0x3fd)],[-0x1*0x12eb+-0xb7b+0x2036,'u8'],[-0x11e5*-0x1+0x1*-0xdf0+-0x221,_0x1e5d49(0x3fd)],[0x16f0+0x363*-0xa+0x221*0x6,_0x1e5d49(0x3fd)],[0x24a4+0x1*0x232f+-0x45d3,'i32'],[0xccd+0x1cf*0x3+-0x1026,'u8'],[0x3*-0x25f+0xac5+-0x18c,'u8'],[-0x5*0x31d+-0x4*-0x61e+0x6ca*-0x1,'u8'],[0x1729+-0xf06+-0x605,'u8'],[-0x1215+-0x19cd+0x2e01,'u8'],[0xbe6+-0x1*0x2173+0x17dd,_0xf663c['IkvXZ']],[-0x226e+-0x1268+0x372e,'u8']],'GG_GameManager':[[0xe5b*0x2+0x11d3*0x2+0x18*-0x2ad,'u8'],[-0x44e+0x1*-0x62a+0xaa4,_0x1e5d49(0xb66)],[0x1c89+0x1cd+-0x1e12,'u8'],[0x3b6+0x21e*0xa+-0x189d,'u8'],[-0x19e7+-0x15*-0x81+0xf9a,_0x1e5d49(0xb66)],[-0xd96+-0xf6d*0x1+0x1d4f,_0xf663c[_0x1e5d49(0x5f4)]],[0xb*0x6b+0x24b*0xf+-0x26ae,_0xf663c['IkvXZ']],[0x9*-0xc9+-0xa*-0x1bd+0x1*-0x9fd,_0xf663c[_0x1e5d49(0xac7)]],[0x1d1a+-0xaae+-0x1214,'u8'],[0x1fea+0x1a59+0x1345*-0x3,'u8'],[0x4*-0x2c6+0xc44+-0xb4,_0xf663c['cBCdk']],[0x337+0x126+0x3e1*-0x1,_0xf663c[_0x1e5d49(0x5f4)]],[0xbe9+-0x2685+-0x6cb*-0x4,_0x1e5d49(0x3fd)],[-0x17e8+0x3*0x805+-0x1*-0x6d,'u8'],[0x6*-0x21d+-0x867*0x1+-0xd*-0x1ad,'i32'],[0x223e+-0x3ad*0x3+-0x167b*0x1,_0x1e5d49(0x3fd)],[-0x1a89+0xc5f+0x1*0xeea,_0x1e5d49(0x3fd)],[-0x1dee*0x1+0xf9a+0xf3c,_0xf663c[_0x1e5d49(0x77e)]],[0xdd1+0x227+-0xefc,_0xf663c[_0x1e5d49(0x77e)]],[-0x7d5+0x5*-0x4d6+0x1*0x2113,_0xf663c[_0x1e5d49(0x77e)]],[0x54f+0x2113+0x2*-0x129b,'u8'],[0x5fc+0xf10+-0x13dc,'i32'],[0xd71+-0x1111+-0x6*-0xd6,'u8'],[-0x2*-0x224+-0x2008*0x1+0x1d30,_0x1e5d49(0xb66)],[-0x1*-0xb9b+0x21b*-0xb+0x2*0x687,'u8'],[0x8*0x4bc+0xf3e+0x3e*-0xd5,'u8'],[-0x269b+-0x4dd+0x2d1c,'u8'],[0x2477+-0x2329+0x5a,_0xf663c['IkvXZ']],[-0x8*-0x6f+-0x85f*0x3+0x1751,_0x1e5d49(0xb66)],[0x65e*-0x2+-0x1*0x1d27+0x73*0x61,'u8'],[-0x1*0x20b3+-0x1*-0x17b9+0x1*0xaab,'u8'],[0x1*0x156f+0x3*0x964+-0x2fe3,_0x1e5d49(0x3fd)],[-0x1bd1*0x1+0x1*0x255f+-0x7d2,'i32'],[-0x234a+-0x54f*-0x7+-0x1f*0x1,_0x1e5d49(0xb66)],[0x32e*-0x3+-0x85+0xbd3,_0xf663c[_0x1e5d49(0xac7)]],[-0xa3*0x2+-0xd*-0x147+0x1*-0xd8d,_0xf663c['cBCdk']],[-0x77d+0x948+0x1,_0x1e5d49(0x3fd)],[-0x150+0xe11+-0xaf1,'i32']],'TDM_GameManager':[[-0x968+0x3b1+0x1*0x5cf,'u8'],[-0x1a6a+0x3e8*-0x8+0x39ca,'u8'],[-0xe98+0x2*0x1020+-0x1187,'u8'],[-0x1e2e*-0x1+0x4e*-0x36+0x2f*-0x4a,'f32'],[0x2486+0xf41+0x3f*-0xd1,'u8'],[-0x1*0x14cb+0x13d5*-0x1+0x28fc,_0x1e5d49(0xb66)],[0x17ff+-0x2*0xffd+0x85b*0x1,'f32'],[0x7*0x23d+-0x10*0x1a+-0x2bb*0x5,_0xf663c[_0x1e5d49(0xac7)]],[0xf*0x21a+0x1ed8+-0x3df6,_0xf663c[_0x1e5d49(0xac7)]],[0x9*0x2be+-0xa*0x2a5+-0x118*-0x2,'u8'],[-0x83f+-0x144f+0x1cfb,'u8'],[0x38e*0x1+0x2568+0x6c1*-0x6,_0xf663c[_0x1e5d49(0x5f4)]],[-0x1ca6*0x1+0x6*0x55+0x1b1c,_0x1e5d49(0xb66)],[0x16*0xcd+-0x24a9+0x2d*0x6f,'i32'],[0xfe2+-0x7c*0x1+-0x76d*0x2,'u8'],[-0xd*-0x21a+-0x256f+-0x3*-0x38f,_0x1e5d49(0xaaa)],[-0x19fc*-0x1+0xbe9*-0x1+-0x1*0xd3b,'obfI'],[-0x23*0x1d+-0x827*0x2+-0xd9*-0x19,_0xf663c[_0x1e5d49(0x77e)]],[-0x21e+0x2177+-0x1e59,_0xf663c['OHRgo']],[-0xafd+-0x194+0xda5,'u8'],[-0x8a6+-0xa8f+0x1491,'u8'],[0xc68+0xe*0x239+-0x2a26,_0xf663c[_0x1e5d49(0xac7)]],[0x1*0x142a+0x2*0x7cf+0x5ba*-0x6,'u8'],[-0xfa0+-0x1f*-0x3b+0x355*0x3,'u8'],[-0xd29+0x14c4+-0x613,_0xf663c['cBCdk']],[0x1b49+0x6fe+-0x20bb,_0x1e5d49(0x3fd)],[0x13e1+0x19b*-0x9+0x5*-0xc6,_0x1e5d49(0x3fd)],[0x23a7+-0x2a1*-0x9+0x39bc*-0x1,_0x1e5d49(0xb66)],[0x1ddf+-0x20*-0x4e+-0x2607,_0x1e5d49(0x3fd)],[0x14c6+-0x64+-0x12c6,'i32'],[0x2*-0xf46+-0x25ea+0x4616,_0xf663c[_0x1e5d49(0x5f4)]],[-0x9*-0x1+-0x1b15+0x1cb0,_0x1e5d49(0xb66)],[-0xf6*-0xb+-0x227d+0x1993,_0x1e5d49(0x3fd)],[-0x1*0xa75+0x1*0xee6+-0x2c1*0x1,'u8'],[0x1853+-0x112a*0x2+0xbb2,'u8'],[-0x97e+-0x1e6*0x5+0x14b4,_0xf663c[_0x1e5d49(0x5f4)]]],'PhotonNetworkSync':[[0xfc*-0x26+-0x20f+0x27ab,'v3'],[-0xa*-0x20c+-0x1a8+-0x1290,'i32'],[0x11+-0x10f6*-0x1+-0x10c3,'u8'],[-0x54a+0x1*-0x1883+0x1e12,'u8'],[0x5*0x739+-0x1e30+-0x5a5,'v3'],[0x2*0xbd8+0x9f0+-0x214c,'u8'],[-0x1915+0x17f*-0xd+-0x4*-0xb38,_0xf663c['IkvXZ']],[0x1b28+-0x2288+0x84*0xf,_0x1e5d49(0x3fd)],[-0x12dc+0x1*0x1d89+-0xa4d,_0xf663c[_0x1e5d49(0x5f4)]],[0x2*0xc5b+0x102e+0x60*-0x6c,'f32'],[-0x553*0x4+-0x724+0x8*0x39b,_0xf663c[_0x1e5d49(0x5f4)]],[0x31*0x5c+-0xf*0x32+-0x32*0x49,'v3'],[-0xfa4+-0x1817+0x2833,_0xf663c[_0x1e5d49(0x5f4)]],[0x1*-0x11d3+0x8b*0x25+-0x1c8,_0xf663c['cBCdk']],[-0x1*-0x49+0x33+0x4,_0xf663c['IkvXZ']],[-0x1*0x2688+-0xad6+0x31e6,_0xf663c[_0x1e5d49(0x5f4)]]],'MouseLook':[[-0x1*-0x18d0+0x102*0xb+0x72a*-0x5,_0x1e5d49(0xb66)],[0xef*-0xb+0x1194*-0x1+0x1bf1,_0x1e5d49(0xb66)],[-0xe0+0x189a+-0x179e,'f32'],[0x614*0x6+0xec3*0x1+-0x331b,_0xf663c[_0x1e5d49(0x5f4)]],[-0x5*0x66c+0x76*0x2c+0x1*0xbf8,_0x1e5d49(0xb66)],[0x871*-0x3+0x9*-0x255+0x2e78,_0x1e5d49(0xb66)],[0x2*0xc2+0xa*0x13b+0x2*-0x6d1,'f32'],[-0xa0e+-0x17d*0x11+0x238f,'u8'],[-0xb1e*-0x3+-0x145+-0x1fdd,_0x1e5d49(0xb66)],[-0xf6b*0x2+0x3c7*0x1+0x1b4b,_0x1e5d49(0xb66)],[0x2*-0xc92+0x239+0x1*0x172b,'i32'],[0x97+0x1cf0+-0x1d43*0x1,'u8'],[0x1f3+-0x37d+-0x2*-0xe9,'v2']],'NetworkPlayerAnimations':[[0x191*0x1+-0x2141+-0x678*-0x5,'v3'],[0x2*0xcb2+-0x1afb+0x24b,'v3'],[-0x49+0x1787+0xb3f*-0x2,'u8'],[-0x3*-0xa52+-0x1259*-0x1+0x2b*-0x121,'i32'],[0x1014+0x1dc6*-0x1+0xe7a,'i32'],[-0x1*-0x1ef7+0x14ec+0x3317*-0x1,_0xf663c[_0x1e5d49(0x5f4)]],[0x8e6*-0x1+-0xecb+0x99*0x29,_0x1e5d49(0xb66)],[-0x2b5+0x2*0x49a+0x5a3*-0x1,_0xf663c['cBCdk']],[0x1*0x143f+-0x8f6*-0x1+-0x1c55,_0x1e5d49(0xb66)],[0x12b4+0x180+-0x4d3*0x4,_0x1e5d49(0xb66)],[-0x192d+-0x1*-0xccd+0xd4c,_0xf663c[_0x1e5d49(0x5f4)]],[0x69*0x13+-0x1731+0x1056,_0x1e5d49(0xb66)],[-0x5d8+0x1*0x10eb+0xa1f*-0x1,_0xf663c[_0x1e5d49(0x5f4)]],[0xd3b+0x1355+-0x2a2*0xc,_0xf663c[_0x1e5d49(0x5f4)]],[-0x3*0x515+-0xf17+-0x2*-0xfa9,_0x1e5d49(0xb66)],[-0xa*0x1bd+-0x1*0x251+0x14b3,'f32'],[0x353+-0x177e+0x152f,'f32'],[0x1c*0x12d+-0x44*-0x2d+-0x7a*0x5c,'i32'],[0x84d*-0x3+0x1cf*-0x3+0x7d8*0x4,'u8'],[0xcf7+0x1f3*-0x5+-0x114*0x2,_0xf663c[_0x1e5d49(0xac7)]],[-0x328+0x5*0x76f+0x20ef*-0x1,'i32'],[-0x1267+0x203f+-0x2*0x660,'u8'],[0x102*0x25+-0x297*0xc+-0x51a*0x1,'f32'],[-0x36d+0x1c92+-0x1805,'f32'],[-0x25c2+0x4*0x98c+0xb6,'f32'],[0x2050+-0x1016+-0x3*0x506,_0xf663c[_0x1e5d49(0x5f4)]],[0x19b*-0x7+-0x1*0x20e8+0x2d51,'u8'],[-0x9*0x2ab+-0x2*-0x635+0xcd1,'u8'],[-0x219d+0x1a14*0x1+0x8c5,'v3'],[-0xfc2+0x1*-0x5df+0x16e9,'v3'],[0x25a4+0xbec+-0x2ffc,'u8']],'NPC_Cotroller':[[-0x15df+-0x90b+-0x1*-0x1efe,'v3'],[0xb72+-0x1*0x1c1f+0x10cd,_0x1e5d49(0xb66)],[0x1072+-0x1154+0x106,_0xf663c[_0x1e5d49(0x5f4)]],[-0x95*0x3d+-0x5*-0x72f+-0x14,'u8'],[-0x25e+0xb*0x257+-0x2*0xb84,'u8'],[0x1832+0x1d5a+-0x3530,'v3'],[0x17fe+-0x1*0x1472+-0x5e*0x8,'u8'],[-0x70c+0x2*-0x1a9+0xc9*0xe,_0x1e5d49(0xb66)],[-0x1b8f+-0x1*-0x16a+0x1ac9,_0xf663c[_0x1e5d49(0x5f4)]],[-0x24ee+0x18ee*-0x1+0xa6e*0x6,_0xf663c['cBCdk']],[-0xa2f*0x2+0x18cd+-0x3b3,_0xf663c['cBCdk']],[0x2f*0x3+0xee6+-0xeab,'u8'],[0x2f1+-0x254+0x2f,'f32'],[-0x2374+0x2*-0xf0c+0x4264,_0x1e5d49(0xb66)],[-0x1697+0x765*-0x5+0x1424*0x3,_0x1e5d49(0xb66)],[0x1c07+0xd0c+0x2833*-0x1,_0x1e5d49(0xb66)],[0x2*0x1127+0x482*-0x1+-0x1ce8,'u8'],[0x34*-0x72+-0x19ed+0x3201,_0x1e5d49(0xb66)],[-0x17d1+-0x19ad+-0x2*-0x1937,'v3'],[-0xd57+0xf*-0x101+0x2*0xeb1,_0x1e5d49(0xb66)],[-0x2062+0x1*0xe27+-0x9*-0x223,'i32'],[-0x1be9+-0x2389+0x4076,'f32'],[0x14a*-0x3+-0x2135*-0x1+-0x1c4f,_0xf663c['cBCdk']],[-0x2b7*-0x1+-0x1*-0x167c+-0x1827,_0x1e5d49(0xb66)],[-0x11fb*-0x2+0xa24+0x2a6*-0x11,'v3'],[0x9e7+-0x26b9+0x1df2,_0x1e5d49(0xb66)],[-0x6be+-0x18a+0x24*0x43,_0xf663c[_0x1e5d49(0x5f4)]],[0x2b*0x68+0x22ed*-0x1+-0x119*-0x11,'v3'],[-0x1c33+0x6*-0x5d5+0x4075,'u8'],[-0x18a9+0x1*-0x1708+0x1*0x30f9,'f32'],[-0x1ba*0xa+0x1*0x31a+0x11b*0xe,'v3'],[-0xd*0x241+0x1586+0x927,'i32'],[-0x156a+0xb*0x152+0x850,'i32'],[0x2*0xfad+0x3b*-0x5f+0x805*-0x1,'f32'],[0xe0c+0x16e6+0x7*-0x512,'u8'],[-0x4*0x3e9+-0x74*-0x22+-0x4*-0x6d,'v4'],[0xf55*0x2+0xa3d+-0x275f,_0xf663c[_0x1e5d49(0x5f4)]],[0x11ef+-0x6f*-0x43+-0x8*0x5ae,_0xf663c['cBCdk']],[0x11f3*-0x1+-0x346+0x16c9,_0x1e5d49(0xb66)],[0x541+-0x2*0x2dd+0x211*0x1,'u8'],[0xef*0x24+0x1825+-0x3821,'i32']],'TargetHealth':[[0x51*-0x2+-0xa*0x17+0xc*0x22,'i32'],[-0x1673+-0x2*0x463+0x1f4d,'i32'],[0x3d*0x59+-0x21b9+0xcb8,'u8'],[0x2*0x4cf+0x5ad+-0xf07,_0xf663c['IkvXZ']],[0x1f1*0x12+0x8d*0x8+-0x2712,_0x1e5d49(0x3fd)],[-0x25c6+-0x17b3+-0x3dc5*-0x1,_0xf663c['IkvXZ']],[-0x550+0x577*0x3+-0xac5,_0x1e5d49(0x3fd)],[0x11*0x95+-0x23c*0x10+-0x1*-0x1a5f,'f32'],[0x1475+0x111+-0x219*0xa,_0xf663c['cBCdk']],[0x2*-0x8ab+-0xc0b+0x23*0xdb,'u8'],[0x1*-0x3df+-0x8*0x2b3+0x71*0x3b,_0x1e5d49(0xb66)],[-0x4*-0x12f+-0x3*-0x695+-0x1*0x17d7,'u8'],[-0x2428+-0x23ea+0x48ba,'i32'],[0x136+0x40*0x5a+-0xb85*0x2,_0xf663c[_0x1e5d49(0xac7)]],[-0x1c7f*0x1+0x9a9*0x2+0x3*0x34f,'f32'],[0x1*0x201+-0x1025+0xef0,'u8']],'SectatorCamera':[[0xced+-0xdc4+0x2f*0x5,_0xf663c[_0x1e5d49(0x5f4)]],[-0xdbf+0x37*-0x51+0x1f3e,_0xf663c[_0x1e5d49(0x5f4)]],[-0xf02+-0x6ef+-0x469*-0x5,_0x1e5d49(0xb66)],[0x35f*0xa+0xd55*0x1+-0x2eeb*0x1,'v3'],[0x271*-0x7+0x1891+-0x74e,'v3'],[0x1*0x215f+-0x10c6+-0x1051,_0xf663c['IkvXZ']],[-0x31*-0x7+-0x23d*-0x8+0x21b*-0x9,'i32'],[-0xaea+-0x1141+0x1c7b,_0xf663c['cBCdk']],[-0x8e4+0x4*0xdf+-0x1*-0x5bc,_0xf663c['IkvXZ']],[0x70f*0x4+-0x742+-0x1*0x14a2,'f32'],[-0x365+-0x266c+0x1*0x2a2d,'u8'],[0x5d7+-0x8a8+0x331,'v3'],[0x1*0x12e2+-0x3*-0x801+0x53*-0x83,'v4'],[-0x98*-0x4+-0x44*-0x26+0x76*-0x1a,'u8'],[-0x1*0x1a4b+0x909+-0x8e1*-0x2,_0xf663c['IkvXZ']]],'UISettings':[[0x2*-0x469+-0x138f*0x1+0x1*0x1c81,_0x1e5d49(0x3fd)],[-0x1499+-0xc1*-0x2+0x133f,_0x1e5d49(0xb66)],[-0x2349+0x1c*-0x5a+0x2e65,'u8'],[0x1*0x11ff+-0x1aee+0x20b*0x5,_0x1e5d49(0x3fd)],[-0x1d36*-0x1+0x2510+-0x40f2,'i32'],[0x23ef*-0x1+0xc3f+0x1908,_0x1e5d49(0x3fd)],[0x2298+0x86+0x21c2*-0x1,'u8'],[0x37*-0xd+-0x346*0x1+0x6*0x13d,'u8'],[-0xa*0x1+-0x1762+0x18ca,'u8'],[-0x1*0x1db+-0x1*0x264a+-0x14c2*-0x2,'u8'],[-0x1*0x1b22+0x1*0x1de1+0x1b*-0xd,'u8'],[-0x1e7a*-0x1+0x2*0x2e7+-0x22e7,'u8'],[-0x2276+0x4*0x5ec+0xc28,'u8'],[-0xf*-0x139+-0x49d*-0x6+0x1*-0x2c49,'f32'],[0x2*0x9a5+0x256b*0x1+-0x36f1,_0xf663c[_0x1e5d49(0x5f4)]],[-0x4f7+-0x1*-0x1a69+-0x1*0x135a,'u8'],[-0x2*0xf1c+0x5d4*-0x6+-0x1690*-0x3,_0x1e5d49(0xb66)],[-0x1*-0x17f6+0x155a+-0x2ab0,'i32'],[-0x6b+-0x2027+0x1*0x238a,'u8'],[0x493+-0x925+-0x82e*-0x1,'u8'],[-0x3*-0x313+0x1*-0x95f+-0x8a*-0x7,'v2'],[-0x69a+0x59*-0x61+0x51*0x8b,'v2'],[0xe*-0x175+0x1*-0x10ed+0x2903,'u8'],[0x1*0x158f+-0x1f73+0xd9c,'u8'],[-0x244*0x1+0xd7d*-0x1+-0x37*-0x5b,_0xf663c[_0x1e5d49(0x5f4)]],[0x1*-0x26ce+-0xb89*-0x1+0x1f15,'v3'],[0x3*-0x2b1+-0x2264+0x1*0x2e57,_0xf663c['cBCdk']],[0x1*-0x2063+-0x9*0x1f1+0x35c0,_0x1e5d49(0xb66)],[-0x1d73+-0x20ab*-0x1+0x2c*0x4,_0xf663c[_0x1e5d49(0x5f4)]],[-0x72e*-0x2+-0xd6e+0x302,'u8'],[-0x1607+-0x224*0x3+0x2064,'u8'],[0x1069+-0x1*-0x2306+0xbb*-0x41,_0xf663c[_0x1e5d49(0xac7)]],[-0x122f*0x1+-0x1ccb+-0x5*-0xa32,_0xf663c['IkvXZ']],[-0x1e30+0x8e*-0x9+0x2732,_0xf663c['IkvXZ']],[0x1a*-0x134+-0x49*0xb+0x2673,_0xf663c['IkvXZ']],[-0x4d*0xa+0x2ad+-0x1*-0x461,'i32'],[-0x6c4*0x5+-0x5e2*0x6+-0x2498*-0x2,_0xf663c['IkvXZ']],[0x1f*-0xe1+-0x946*-0x2+0xcc7,_0xf663c[_0x1e5d49(0xac7)]],[0x9e0+0x245b+-0x2a23,_0x1e5d49(0x3fd)],[0x2357+0x196f+0x1c55*-0x2,_0x1e5d49(0x3fd)],[0x11c9+-0x4d*-0x61+-0x2ad6,'i32'],[0x1544+0x18*-0x16a+-0x440*-0x4,'u8'],[0x2*0xf65+-0x1a63+-0x1*0x12,'u8'],[-0x5d3*-0x4+0x1255+-0x254b*0x1,'u8'],[-0x6*-0x2c2+0x147a+-0x20af,'u8'],[-0x1368+-0x100d+-0x85*-0x4d,'f32']]},_0x11efb4={},_0x49dde4={};function _0x241740(_0x178272,_0x5aac24,_0x51d42f){var _0x350f88=_0x1e5d49,_0x8706ff={'kLsRM':_0xf663c[_0x350f88(0x2a8)],'SkIPg':_0x350f88(0x47e),'QImWx':function(_0x48a46b,_0x3e162c){return _0xf663c['AklzB'](_0x48a46b,_0x3e162c);},'GFaPc':_0xf663c[_0x350f88(0x3ac)],'mPQIS':function(_0x50b2af,_0x107bc4){return _0x50b2af(_0x107bc4);},'rrKVX':_0xf663c['aJWKV'],'EaEmN':_0x350f88(0x886),'PUfQQ':function(_0x2de14f,_0x26d176){return _0x2de14f!==_0x26d176;},'rzXns':_0x350f88(0xabb),'HQsxM':_0xf663c[_0x350f88(0x42f)],'EVQSy':_0xf663c[_0x350f88(0x490)]};return'wVmJI'==='wVmJI'?function(_0x23cbcd){var _0x499110=_0x350f88,_0x2287cb={'mBLZT':_0x8706ff[_0x499110(0x3a0)],'mQjiY':function(_0x5ecf55,_0x3f2506){return _0x8706ff['mPQIS'](_0x5ecf55,_0x3f2506);},'hpUmO':function(_0x30655d){return _0x30655d();}};try{var _0x2fc4f3=_0x23cbcd&&_0x23cbcd[_0x499110(0x50a)]?_0x23cbcd['val']():-0x17d1+-0x206b+-0xe0f*-0x4;if(!_0x2fc4f3)return;var _0xa61013=_0x49dde4[_0x178272]||(_0x49dde4[_0x178272]={}),_0x28cad8=_0xa61013[_0x2fc4f3];if(!_0x28cad8)_0x28cad8=_0xa61013[_0x2fc4f3]={'ptr':_0x2fc4f3,'firstSeen':Date[_0x499110(0x7d1)](),'hits':0x0};_0x28cad8[_0x499110(0x487)]++;if(_0x51d42f){if(!_0x11efb4[_0x2fc4f3])_0x11efb4[_0x2fc4f3]={'ptr':_0x2fc4f3,'kind':_0x178272,'firstSeen':Date[_0x499110(0x7d1)](),'hits':0x0};_0x11efb4[_0x2fc4f3]['hits']++;}else{if(_0x8706ff[_0x499110(0x179)]!=='tKVOQ'){var _0x3dd76c=_0x201b55[_0x178272];if(!_0x3dd76c||_0x3dd76c['ptr']!==_0x2fc4f3){if('vpeME'===_0x8706ff['EaEmN']){_0x201b55[_0x178272]={'ptr':_0x2fc4f3,'firstSeen':Date[_0x499110(0x7d1)](),'hits':0x0,'replaced':!!_0x3dd76c};try{var _0x519bf4=_0x3b5d62[_0x499110(0x338)+'r'](function(_0x545366){var _0x511e0f=_0x499110;return _0x545366[_0x511e0f(0x1f3)]===_0x178272;})[-0x24c9*0x1+0x1edf+0x5ea];_0x42419d={'type':_0x178272,'atMs':Date[_0x499110(0x7d1)]()-_0x35db39,'originalFunc':!!(_0x519bf4&&_0x519bf4[_0x499110(0x145)]&&typeof _0x519bf4[_0x499110(0x145)][_0x499110(0xc0c)+'nalFu'+'nc']===_0x499110(0x964)+'ion'),'resolveGameAtFire':!!_0x466416(),'gameSourceAtFire':_0x1c7561['sourc'+'e']};}catch(_0x40b4bd){}}else _0x1d7664(_0x8706ff['kLsRM']);}}else{_0x2282f2['sp']&&(_0xb06833['sp'][_0x499110(0x93f)+_0x499110(0x2bb)+'t']=_0x206c03['on']?'Speed'+_0x499110(0xc69):'Speed'+_0x499110(0xc80),_0x3c222c['sp'][_0x499110(0x426)][_0x499110(0x40f)+_0x499110(0x1d4)]=_0x29e4a1['on']?_0x1b8e0b:_0x2287cb[_0x499110(0x33a)],_0x2d1821['sp'][_0x499110(0x426)][_0x499110(0x492)]=_0x5aa5f3['on']?_0x499110(0xb8e)+'1b':'#f7ee'+'f5');if(_0x4e9550['fx'])_0x48c44f['fx'][_0x499110(0xaf8)]=_0x2287cb[_0x499110(0x6db)](_0xe8a67e,_0xd100da[_0x499110(0x280)+'r']);if(_0x21f1d0['fv'])_0x2ab8c2['fv'][_0x499110(0x93f)+_0x499110(0x2bb)+'t']=_0x37a4a4[_0x499110(0x280)+'r'][_0x499110(0xc52)+'ed'](0x833+0xec+-0x6*0x185)+'x';}}if(_0x8706ff[_0x499110(0x2a3)](_0x178272,_0x499110(0x366)+'ntrol'+'ler')&&_0x24f786['on'])try{if(_0x8706ff[_0x499110(0xc4a)](_0x499110(0x66e),_0x499110(0x66e))){var _0x1a91db=_0xdf424a();return _0x1a91db?{'a':_0x1a91db['rawA'],'b':_0x1a91db['rawB'],'hits':_0x1a91db['hits'],'order':_0x1a91db[_0x499110(0x3eb)]}:null;}else _0x135979(_0x2fc4f3);}catch(_0x28e86a){}if(!_0x5aac24){if(_0x8706ff[_0x499110(0x86d)]!==_0x499110(0xabb)){_0x2287cb[_0x499110(0xa66)](_0xe38f24);return;}else{var _0x519bf4=_0x3b5d62['filte'+'r'](function(_0x596a26){var _0x31b14d=_0x499110;return _0x8706ff[_0x31b14d(0x1e5)]!==_0x31b14d(0x9a6)?_0x8706ff['QImWx'](_0x596a26[_0x31b14d(0x1f3)],_0x178272):_0x2da156['span'];})[-0x1f4+0x175b+0x1567*-0x1];if(_0x519bf4&&_0x519bf4['hook']){if(_0x8706ff['HQsxM']!==_0x8706ff['HQsxM'])_0x3cad8a[_0x499110(0x9f1)]=0x1*0x24df+-0x12e0+0x67*-0x2c,_0x21ea99(),_0x22c19a(_0x17d454[_0x499110(0x2ca)]);else try{_0x519bf4[_0x499110(0x145)]['enabl'+'ed']=![];}catch(_0x2e3781){}}}}}catch(_0x3e9d76){}}:(_0x1b040a[_0x350f88(0x178)+'e']=_0x8706ff['EVQSy'],_0x184877);}function _0x2cc231(){var _0x50aae5=_0x1e5d49,_0x29474d=(_0x50aae5(0xb31)+'|0|6|'+'1|3|4'+'|2')[_0x50aae5(0x438)]('|'),_0x5bb42b=0x14fa+0x2540*0x1+-0x3a3a;while(!![]){switch(_0x29474d[_0x5bb42b++]){case'0':if(!_0x265d4f[_0x50aae5(0x8e1)+'ns']||!_0x265d4f[_0x50aae5(0x8e1)+'ns']['lengt'+'h'])return![];continue;case'1':_0x76a7d0=_0x76a7d0||_0x265d4f[_0x50aae5(0x8e1)+'ns'][_0x265d4f[_0x50aae5(0x8e1)+'ns']['lengt'+'h']-(0x10*-0x4c+-0x1b18+0x1fd9*0x1)];continue;case'2':return _0x3b5d62['lengt'+'h']>-0x1499+-0xa1*0x29+0x2e62;case'3':if(!_0x76a7d0||typeof _0x76a7d0['hookP'+_0x50aae5(0x94e)]!=='funct'+_0x50aae5(0x75e))return![];continue;case'4':for(var _0xa6286f=0x6b*-0x48+0x1*-0x2275+0x5*0xce9;_0xa6286f<_0x213110[_0x50aae5(0x68d)+'h'];_0xa6286f++){var _0x712044=_0x213110[_0xa6286f];try{var _0xc95330=_0x76a7d0['hookP'+'refix']({'typeName':_0x712044[_0x50aae5(0x1f3)],'methodName':_0x50aae5(0xc2e)+'e','params':[_0x50aae5(0x3fd),_0xf663c['IkvXZ']],'returnType':undefined},_0x241740(_0x712044[_0x50aae5(0x1f3)],_0x712044['keep'],_0x712044['many']));_0x3b5d62[_0x50aae5(0x773)]({'type':_0x712044['type'],'hook':_0xc95330,'keep':_0x712044[_0x50aae5(0x8fd)]});}catch(_0x10f263){_0x1b3e7e[_0x50aae5(0x773)](_0x712044[_0x50aae5(0x1f3)]+':\x20'+String(_0x10f263&&_0x10f263[_0x50aae5(0x10c)+'ge']||_0x10f263)['slice'](0x2156+0x221f+-0x4375,0x1808+0x2541+-0x3ca9));}}continue;case'5':var _0x265d4f=window['Unity'+_0x50aae5(0x28a)+'dkit'][_0x50aae5(0x3be)+'me'];continue;case'6':_0x31f719=window[_0x50aae5(0x6df)+_0x50aae5(0x28a)+_0x50aae5(0x980)][_0x50aae5(0x6c6)+'Wrapp'+'er'];continue;case'7':if(_0x3b5d62['lengt'+'h'])return!![];continue;case'8':if(!window[_0x50aae5(0x6df)+'WebMo'+_0x50aae5(0x980)]||!window['Unity'+_0x50aae5(0x28a)+_0x50aae5(0x980)]['Runti'+'me'])return![];continue;}break;}}function _0x3d0069(_0x25481d,_0x3dc292){var _0x33345c=_0x1e5d49,_0x210c77={'wenkz':function(_0x11b8c6,_0x16f74e){return _0x11b8c6===_0x16f74e;},'IUAIm':'funct'+_0x33345c(0x75e),'haWhn':function(_0x336b25,_0x37b042){return _0x336b25===_0x37b042;}};return function(){var _0x9993e9=_0x33345c;try{var _0x374f98=_0x5b20f8[_0x3dc292]||(_0x5b20f8[_0x3dc292]={'last':null,'hits':0x0,'setLast':null,'setHits':0x0,'setB':null,'pairHits':0x0}),_0xf8042f=arguments;if(_0x25481d===_0x9993e9(0x629)){var _0x433fbd=_0xf8042f[0x1b*-0x37+0x4*-0x285+0xfe1];if(_0x433fbd&&typeof _0x433fbd['val']===_0x9993e9(0x964)+_0x9993e9(0x75e)){if('vPGkf'!==_0x9993e9(0xbd1)){if(_0x3cf2ea&&!_0x64fa07()){_0x3280f5();return;}_0x52d3d2(!![],_0x300a0c);}else{_0x374f98['last']=_0x433fbd[_0x9993e9(0x50a)](),_0x374f98['hits']++;if(_0xf8042f[-0x3*0x93d+0xc48+0x4c*0x34]&&_0x210c77['wenkz'](typeof _0xf8042f[0x1181+-0x1c92*0x1+0xb12]['val'],_0x210c77[_0x9993e9(0x604)])){var _0x56ed51=_0xf8042f[-0x243c*-0x1+0x1*0x253d+-0x4978]['val']();if(_0x56ed51)_0x5f090c=_0x56ed51;}}}}else{_0xf8042f[0x1*-0x1a7d+-0x26*0xc9+0x5a2*0xa]&&_0x210c77[_0x9993e9(0xba8)](typeof _0xf8042f[-0x519+0x1*0x1070+-0xb56][_0x9993e9(0x50a)],'funct'+'ion')&&(_0x374f98['setLa'+'st']=_0xf8042f[-0x17*-0x140+0x16fe+0x1*-0x33bd][_0x9993e9(0x50a)](),_0x374f98[_0x9993e9(0x30b)+'ts']++);_0xf8042f[-0x18fd+0x1*-0x61+0x1960]&&typeof _0xf8042f[-0x10bc+-0x517+0x51*0x45][_0x9993e9(0x50a)]==='funct'+'ion'&&(_0x374f98[_0x9993e9(0x2f8)]=_0xf8042f[0x3ba*-0x4+0xe96+0x54][_0x9993e9(0x50a)](),_0x374f98['pairH'+_0x9993e9(0x99c)]++);if(_0xf8042f[0x167c+0xe79+-0x24f5]&&_0x210c77[_0x9993e9(0x89b)](typeof _0xf8042f[-0x1*0x16af+0xb3e*0x2+-0x1*-0x33]['val'],'funct'+_0x9993e9(0x75e))){var _0x2aeabb=_0xf8042f[0x24b2+0x716+0x18*-0x1d3][_0x9993e9(0x50a)]();if(_0x2aeabb)_0x5f090c=_0x2aeabb;}}}catch(_0x422182){}};}function _0x38a102(){var _0x3b13fe=_0x1e5d49,_0x1283b8={'zknJM':'name'};if(_0x5964ed)return!![];if(!_0x76a7d0||typeof _0x76a7d0[_0x3b13fe(0x650)+_0x3b13fe(0x1de)+'x']!==_0xf663c['xsppV'])return![];var _0x721adc=_0xc29ee4[_0x3b13fe(0x2ac)+'Look']||[];for(var _0x15b2c3=0x335*0x6+0xa7d+-0x1dbb;_0xf663c['ECoaC'](_0x15b2c3,_0x721adc[_0x3b13fe(0x68d)+'h']);_0x15b2c3++){if(_0xf663c[_0x3b13fe(0x345)](_0xf663c['EVYsD'],'bIqMd'))_0xf9fdce['defin'+_0x3b13fe(0x6fd)+'erty'](_0x380cc0,_0x1283b8[_0x3b13fe(0x275)],{'value':_0x32bb70[_0x3b13fe(0x5cc)],'configurable':!![]});else{var _0x533483=_0x721adc[_0x15b2c3];try{if(_0x533483['ret']===_0xf663c[_0x3b13fe(0x6de)])_0x76a7d0[_0x3b13fe(0x650)+_0x3b13fe(0x1de)+'x']({'typeName':_0xf663c['KzOxy'],'methodName':_0x533483[_0x3b13fe(0x5cc)],'params':_0x533483[_0x3b13fe(0x403)+_0x3b13fe(0xa42)],'returnType':_0x533483[_0x3b13fe(0xc23)+'et']},_0xf663c[_0x3b13fe(0xa39)](_0x3d0069,_0xf663c[_0x3b13fe(0x717)],_0x533483['name']));else{if(_0x533483['ret']===_0xf663c['dXiBI']&&_0xf663c['LJAVF'](_0x533483[_0x3b13fe(0x235)+'s']['lengt'+'h'],0x1fa5+-0x192e*-0x1+-0x81e*0x7)&&_0xf663c[_0x3b13fe(0x896)](_0x533483[_0x3b13fe(0x235)+'s'][-0xafd+-0x2682+-0x317f*-0x1],'float')){if(_0x3b13fe(0xa83)!==_0x3b13fe(0xa83)){if(_0x384222[_0x3b13fe(0xb4c)]&&_0x11e0f2['top']!==_0x114cfc)_0x26ada4['top'][_0x3b13fe(0x701)+_0x3b13fe(0x81a)+'e'](_0x467a75,'*');}else _0x76a7d0['hookP'+_0x3b13fe(0x94e)]({'typeName':_0x3b13fe(0x2ac)+_0x3b13fe(0x76a),'methodName':_0x533483['name'],'params':_0x533483[_0x3b13fe(0x403)+_0x3b13fe(0xa42)],'returnType':undefined},_0x3d0069('set',_0x533483['name']));}}}catch(_0x1d7660){_0x3e2e9a[_0x3b13fe(0x773)](_0xf663c['OoTgD'](String,_0x1d7660&&_0x1d7660[_0x3b13fe(0x10c)+'ge']||_0x1d7660)['slice'](0x4*-0x2b4+0x3*0x5db+-0x6c1,-0x83*0xb+0x9*-0xe3+0x44*0x35));}}}return _0x5964ed=!![],!![];}function _0x4a074d(){var _0x1b6e72=_0x1e5d49,_0x2081bd={'JGVwv':function(_0x19fdcb){return _0x19fdcb();},'npNfY':_0x1b6e72(0x4ea)},_0x3b017c=0x1*-0x250d+-0xdce+0x32db*0x1,_0x3285e7=-0x266d+-0x98f+-0x2*-0x17fe,_0x5b86ed=-0x97*0x1f+0x2344+0x7*-0x26d,_0x373053=0x16bd+0x16*-0x2c+0x1*-0x12f5,_0x193654=-0xca*-0x2a+-0x223*0x12+0x552*0x1;try{if('atbXO'===_0x1b6e72(0xb36)){var _0x3004d2=window[_0x1b6e72(0x6df)+_0x1b6e72(0x28a)+'dkit']&&window[_0x1b6e72(0x6df)+_0x1b6e72(0x28a)+'dkit'][_0x1b6e72(0x3be)+'me'],_0x43236d=_0x76a7d0||_0x3004d2&&_0x3004d2[_0x1b6e72(0x8e1)+'ns']&&_0x3004d2['plugi'+'ns'][_0x3004d2['plugi'+'ns'][_0x1b6e72(0x68d)+'h']-(-0x5*-0x5d1+-0x5d8+-0x173c*0x1)];if(_0x43236d&&_0x43236d[_0x1b6e72(0x7f2)])for(var _0x191223=-0x19e2+0x435*-0x5+0x2eeb;_0x191223<_0x43236d[_0x1b6e72(0x7f2)]['lengt'+'h'];_0x191223++){if(_0x1b6e72(0x31f)!=='DBOSy'){var _0x18ebe4=_0x43236d[_0x1b6e72(0x7f2)][_0x191223];if(!_0x18ebe4||_0xf663c[_0x1b6e72(0x2e5)](_0x18ebe4['typeN'+'ame'],'Mouse'+_0x1b6e72(0x76a)))continue;_0x3b017c++;if(_0x18ebe4[_0x1b6e72(0x71c)+_0x1b6e72(0x606)]!==undefined)_0x3285e7++;if(_0x18ebe4['appli'+'ed'])_0x5b86ed++;}else{if(!_0x16a81a['petal'])return;var _0x4f62e6=_0x2081bd[_0x1b6e72(0x742)](_0x247c53);_0x12b960['petal'][_0x1b6e72(0x426)]['opaci'+'ty']=_0x4d8880[_0x1b6e72(0x16e)]?'1':_0x4f62e6?'.8':_0x2081bd[_0x1b6e72(0x2bf)],_0x2d5b5d[_0x1b6e72(0xb74)]['title']=_0x4f62e6?'Sakur'+'a\x20Ski'+'llWar'+_0x1b6e72(0x2c0)+_0x1b6e72(0xc58):'Sakur'+'a\x20Ski'+_0x1b6e72(0x9d0)+_0x1b6e72(0x7ab)+_0x1b6e72(0x82d)+_0x1b6e72(0x12e)+_0x1b6e72(0x585)+'game\x20'+_0x1b6e72(0xa49)+_0x1b6e72(0x22a);}}}else{var _0x4bc968=_0x3cc659[_0x26d24c];for(var _0x295671=-0x1c7+0x189b+0x1*-0x16d4;_0x295671<_0x4bc968[_0x1b6e72(0x68d)+'h'];_0x295671++){_0x2b88d7[_0xf663c['ijybK'](_0xf663c[_0x1b6e72(0x756)](_0x420ada,_0xf663c[_0x1b6e72(0x91c)]),_0x4bc968[_0x295671]['o']['toStr'+_0x1b6e72(0x907)](0x446+-0x49*-0x3e+0xc*-0x1d3))]=_0x4bc968[_0x295671]['v'];}}}catch(_0x5acaf2){}for(var _0x380c0e in _0x5b20f8){var _0x29aedc=_0x5b20f8[_0x380c0e];_0x373053+=_0x29aedc[_0x1b6e72(0x487)]||0x19*0xc7+0x3*0xb61+-0x2*0x1ac9,_0x193654+=_0xf663c[_0x1b6e72(0x756)](_0x29aedc[_0x1b6e72(0x30b)+'ts']||0x7*0x467+0x3*-0x3ff+-0x12d4,_0x29aedc[_0x1b6e72(0x5b7)+_0x1b6e72(0x99c)]||-0x1e1*0x13+0x6b1+0x4f*0x5e);}return{'registered':_0x5964ed,'total':_0x3b017c,'resolved':_0x3285e7,'applied':_0x5b86ed,'getterHits':_0x373053,'setterHits':_0x193654,'distinct':Object[_0x1b6e72(0x854)](_0x5b20f8)[_0x1b6e72(0x68d)+'h'],'errorCount':_0x3e2e9a['lengt'+'h'],'errors':_0x3e2e9a['slice'](0x171*-0x1a+-0x14b1+-0x1*-0x3a2b,-0x1263+-0x1921+0x2b88)};}function _0x25a804(){var _0x3cc9b1=_0x1e5d49,_0x3f2e92=null,_0x9f9ad8=-0x641*0x3+0x17ff+0x14*-0x43;for(var _0x4de972 in _0x5b20f8){var _0x505e01=_0x5b20f8[_0x4de972];_0x505e01[_0x3cc9b1(0x5b7)+_0x3cc9b1(0x99c)]&&_0xf663c[_0x3cc9b1(0x674)](_0x505e01[_0x3cc9b1(0x5b7)+_0x3cc9b1(0x99c)],_0x9f9ad8)&&typeof _0x505e01['setLa'+'st']===_0x3cc9b1(0x333)+'r'&&typeof _0x505e01[_0x3cc9b1(0x2f8)]===_0xf663c['fIWUV']&&_0xf663c['OigZn'](isFinite,_0x505e01[_0x3cc9b1(0x5c3)+'st'])&&isFinite(_0x505e01[_0x3cc9b1(0x2f8)])&&(_0x3f2e92={'rawA':_0x505e01['setLa'+'st'],'rawB':_0x505e01['setB'],'hits':_0x505e01[_0x3cc9b1(0x5b7)+_0x3cc9b1(0x99c)],'name':_0x4de972},_0x9f9ad8=_0x505e01['pairH'+_0x3cc9b1(0x99c)]);}if(!_0x3f2e92)return null;var _0x4c8de0=_0x3f2e92[_0x3cc9b1(0x244)]>=-(0x57*-0x71+0x26c1*-0x1+0x4d82)&&_0xf663c[_0x3cc9b1(0x5d1)](_0x3f2e92['rawA'],0x2*-0xfaf+-0x4*0x601+0x4a5*0xc),_0x4a93ec=_0xf663c['nheAy'](_0x3f2e92[_0x3cc9b1(0x98c)],-(0x2383+-0x2*0xc55+-0xa7f*0x1))&&_0xf663c[_0x3cc9b1(0x981)](_0x3f2e92[_0x3cc9b1(0x98c)],0x1f82+-0xd*0x1bb+0x8a9*-0x1);if(_0xf663c[_0x3cc9b1(0x2d8)](_0x4c8de0,_0x4a93ec)){if('jTkwj'!==_0x3cc9b1(0xc89)){var _0x3973bf=_0x4c3c78(_0x22f803+_0x4f24ab(_0x395a1a[_0x5e3edc][-0x2*-0xc82+-0xc2d+-0x1*0xcd7],0x497*0x5+-0x13*-0x29+-0x19ee*0x1),_0xf663c[_0x3cc9b1(0xa28)]);if(_0x3973bf)_0x2f29a2[_0x3cc9b1(0x69c)][_0x4df7bf[_0x4b7588][0x15c1*0x1+0xca7*-0x3+0x1035]]='0x'+_0xf663c[_0x3cc9b1(0x4c3)](_0x3973bf,0x6*0x79+0x1e51+-0x45*0x7b)[_0x3cc9b1(0x10f)+_0x3cc9b1(0x907)](-0x2112+-0x53*-0x76+-0x520);}else _0x3f2e92[_0x3cc9b1(0x860)]=_0x4c8de0?_0x3f2e92['rawA']:_0x3f2e92[_0x3cc9b1(0x98c)],_0x3f2e92[_0x3cc9b1(0x481)]=_0x4c8de0?_0x3f2e92[_0x3cc9b1(0x98c)]:_0x3f2e92['rawA'],_0x3f2e92[_0x3cc9b1(0x3eb)]=_0x4c8de0?'a,b':_0x3cc9b1(0xb18);}else _0x3f2e92[_0x3cc9b1(0x860)]=null,_0x3f2e92['yaw']=null,_0x3f2e92[_0x3cc9b1(0x3eb)]=_0xf663c[_0x3cc9b1(0x9b5)](_0x3cc9b1(0x384)+_0x3cc9b1(0x360)+'\x20(',_0x4c8de0?_0xf663c['fRAzH']:'neith'+_0x3cc9b1(0xa34)+_0x3cc9b1(0x347))+')';return _0x3f2e92;}function _0x4aa251(){var _0x12c195=_0x1e5d49,_0x54bb53=0x2224+-0x85d*0x1+-0x19c7*0x1;for(var _0x364615=-0x1*-0x254f+-0x287*0xc+-0x6fb*0x1;_0xf663c['yhRfX'](_0x364615,_0x3b5d62[_0x12c195(0x68d)+'h']);_0x364615++){if(_0x3b5d62[_0x364615]['hook']&&_0x3b5d62[_0x364615][_0x12c195(0x145)][_0x12c195(0x71c)+_0x12c195(0x606)]!==undefined)_0x54bb53++;}return _0x54bb53;}function _0x4ba1dd(){var _0x205a97=_0x1e5d49,_0x25bdf2=-0x639*-0x6+0x1*0x1327+-0x387d;for(var _0x200a8b=-0x1776+0x1*-0x173d+0x2eb3;_0xf663c[_0x205a97(0xb90)](_0x200a8b,_0x3b5d62['lengt'+'h']);_0x200a8b++){if(_0x3b5d62[_0x200a8b]['hook']&&_0x3b5d62[_0x200a8b][_0x205a97(0x145)][_0x205a97(0x532)+'ed'])_0x25bdf2++;}return _0x25bdf2;}var _0x4f0985=null,_0x586558=[],_0x528307={},_0x42419d=null;function _0x3ec035(_0x56b3f0){var _0x5573c2=_0x1e5d49;try{if(_0x5573c2(0x2e0)===_0x5573c2(0x3c2))_0x2d7178[_0x5573c2(0x426)]['left']=_0x5573c2(0xbab),_0x15b13a['style'][_0x5573c2(0xb4c)]=_0x5573c2(0xbab),_0x4b3e49[_0x5573c2(0x426)][_0x5573c2(0xb12)]='24px',_0x26f67c[_0x5573c2(0x426)][_0x5573c2(0x34d)+'m']=_0x5573c2(0x44f);else{if(!_0x31f719||!_0x56b3f0)return null;var _0x3faf88=new _0x31f719(_0x56b3f0)[_0x5573c2(0xc4f)+_0x5573c2(0x5b4)+'me']();return _0x3faf88===undefined?null:_0x3faf88;}}catch(_0x5d23b3){if('WeGWt'===_0xf663c[_0x5573c2(0x17d)])return null;else _0x81fda2[_0x5573c2(0x78a)+_0x5573c2(0x847)]['push'](_0xf663c[_0x5573c2(0x226)]);}}function _0x42e9d0(_0x30f305,_0x5b52e4,_0x175a4a){var _0x586c70=_0x1e5d49;if(_0xf663c['nHfDy']!==_0x586c70(0x440)){var _0x1995e3=_0x3c3434['creat'+_0x586c70(0x7c6)+_0x586c70(0x857)](_0xf663c[_0x586c70(0xa86)]);_0x1995e3['id']=_0x586c70(0x6ca)+_0x586c70(0x2f6)+_0x586c70(0xc95)+'s',_0x1995e3[_0x586c70(0x93f)+'onten'+'t']=_0xf663c[_0x586c70(0xbc5)],(_0x49edd8[_0x586c70(0x6d9)]||_0x503f90['docum'+'entEl'+_0x586c70(0x71d)])['appen'+'dChil'+'d'](_0x1995e3);}else{var _0x2e000a=_0x10b932();if(!_0x2e000a)return null;if(_0x5b52e4<-0x9fc*-0x2+-0x1223+-0x1d5||_0xf663c['oAJmg'](_0x5b52e4+_0x175a4a*(0x2343+-0xd*0x21e+0x1*-0x7b9),_0x2e000a[_0x586c70(0x51b)+_0x586c70(0x56b)]))return null;var _0x4befa1=[];for(var _0x8bca15=0x33b+0x2087+-0x17*0x18e;_0xf663c[_0x586c70(0xada)](_0x8bca15,_0x175a4a);_0x8bca15++)_0x4befa1[_0x586c70(0x773)](_0x2e000a['getFl'+'oat32'](_0xf663c['TarPz'](_0x30f305+_0x5b52e4,_0x8bca15*(0x115a*-0x1+0x2500+-0x13a2)),!![]));return _0x1c7561['ok']+=_0x175a4a,_0x4befa1;}}var _0x3bbbab={'PhotonNetworkSync':[['0x10','photo'+_0x1e5d49(0x720)],[_0xf663c['fJOwd'],_0xf663c['KIWvo']],[_0xf663c['TxWyv'],_0x1e5d49(0x6f5)+_0x1e5d49(0x209)],[_0xf663c['czJNA'],_0x1e5d49(0x2b2)],['0x30',_0xf663c['XDqlb']]],'NetworkPlayerAnimations':[[_0x1e5d49(0xc2a),_0x1e5d49(0x271)+'le'],[_0x1e5d49(0x89f),_0xf663c[_0x1e5d49(0x90d)]]],'NPC_Cotroller':[[_0xf663c[_0x1e5d49(0xbbd)],_0x1e5d49(0x271)+'le'],[_0x1e5d49(0xaa5),_0x1e5d49(0xa15)+_0x1e5d49(0xc2f)+'th'],[_0x1e5d49(0xbd3),_0xf663c[_0x1e5d49(0x396)]],[_0x1e5d49(0xacd),_0xf663c['rTuLI']],[_0xf663c[_0x1e5d49(0x370)],_0xf663c[_0x1e5d49(0xb92)]]],'EnemyBot':[[_0x1e5d49(0x93c),_0xf663c[_0x1e5d49(0xb92)]]]},_0x1bd684={'PhotonNetworkSync':[[_0xf663c['ufweg'],_0xf663c[_0x1e5d49(0xad9)]],[_0x1e5d49(0x59e),_0xf663c['wmEMA']],[_0xf663c[_0x1e5d49(0x6f4)],'id']]};function _0x3e7a50(_0xd8901c,_0x33d5d5){var _0x22b239=_0x1e5d49,_0xef363a={'WQbIw':function(_0x356e0e,_0xadaba8){return _0xf663c['nJOkq'](_0x356e0e,_0xadaba8);},'HnTeQ':'--p','NMtZr':function(_0x210098,_0x258183){return _0x210098(_0x258183);},'muurV':_0xf663c[_0x22b239(0x507)],'LOCFB':function(_0x253833,_0x56c19d){return _0x253833(_0x56c19d);},'CfIRR':_0xf663c[_0x22b239(0x1be)],'XxDhm':'yUTOs','GVzwM':function(_0xa8bc48,_0xd52d74){return _0xa8bc48===_0xd52d74;},'adpTw':_0xf663c[_0x22b239(0x5f4)]},_0xab867c=_0x46fb0b[_0xd8901c]||[],_0x4beb4b={'kind':_0xd8901c,'ptr':_0xf663c[_0x22b239(0x9ac)]('0x',_0x33d5d5[_0x22b239(0x10f)+_0x22b239(0x907)](-0xa02+0x7b2*0x4+-0xf1*0x16)),'pos':null,'posAt':null,'allVecs':[],'scalars':[],'refs':{}};for(var _0x1116e1=-0x23f4+0xe5e+-0x399*-0x6;_0x1116e1<_0xab867c[_0x22b239(0x68d)+'h'];_0x1116e1++){if(_0xab867c[_0x1116e1][-0x1939+-0x1*-0x1c3f+-0x305]!=='v3')continue;var _0x516dce=_0x42e9d0(_0x33d5d5,_0xab867c[_0x1116e1][-0xb61+-0x1a2e*-0x1+-0xecd],0x1*0x88d+-0x1b90+0x1306);if(!_0x516dce)continue;_0x4beb4b['allVe'+'cs'][_0x22b239(0x773)]({'o':'0x'+_0xab867c[_0x1116e1][-0x2225+-0x511*-0x7+-0x2*0xa9][_0x22b239(0x10f)+_0x22b239(0x907)](0x867+-0x5d6+-0x281),'v':_0x516dce});}var _0x9b53dd=-0x6a7+-0x1*0x122d+0x18d4,_0x5e8486=_0xf663c[_0x22b239(0xa7c)](_0x3b1440,_0x4beb4b['allVe'+'cs'],_0x290e81());_0x4beb4b[_0x22b239(0xc29)]=_0x5e8486['pos'],_0x4beb4b[_0x22b239(0xafb)]=_0x5e8486[_0x22b239(0xafb)],_0x4beb4b['candi'+_0x22b239(0x84f)]=_0x5e8486[_0x22b239(0x2ef)+'dates'],_0x4beb4b[_0x22b239(0x72b)+'er']=_0x5e8486['clust'+'er'],_0x4beb4b['reach']=_0x5e8486[_0x22b239(0x9bb)],void _0x9b53dd;var _0x47f745=_0x3bbbab[_0xd8901c],_0x23a3c2=_0x1bd684[_0xd8901c];if(_0x23a3c2){_0x4beb4b[_0x22b239(0x36b)]={};for(var _0xff65cf=0x7*0x26a+0x264a*0x1+-0x3730;_0xff65cf<_0x23a3c2['lengt'+'h'];_0xff65cf++){var _0x4ef7bd=_0x19598d(_0x33d5d5+parseInt(_0x23a3c2[_0xff65cf][-0x75d*0x4+-0x1a23+0x3797],-0x1*-0x1352+-0x13ad+0x1*0x6b),_0x22b239(0x3fd));if(_0x4ef7bd!==undefined)_0x4beb4b[_0x22b239(0x36b)][_0x23a3c2[_0xff65cf][0x411*-0x9+0x17*-0xd+0x25c5]]=_0x4ef7bd;}}if(_0x47f745){if(_0xf663c[_0x22b239(0x5df)](_0xf663c[_0x22b239(0x970)],'xtQwc'))for(var _0x16d5fc=-0x238f*-0x1+-0x597*-0x3+-0x3454;_0xf663c[_0x22b239(0x844)](_0x16d5fc,_0x47f745[_0x22b239(0x68d)+'h']);_0x16d5fc++){var _0x2e5934=_0xf663c[_0x22b239(0x581)](_0x19598d,_0x33d5d5+_0xf663c['PhpHC'](parseInt,_0x47f745[_0x16d5fc][-0x10a2+0x520+-0x3*-0x3d6],0x2e3*-0xd+-0x1661+0x3bf8),_0x22b239(0x34e));if(_0x2e5934)_0x4beb4b['refs'][_0x47f745[_0x16d5fc][-0x269f*0x1+-0x251c+-0x4a*-0x106]]=_0xf663c[_0x22b239(0x6cd)]('0x',(_0x2e5934>>>0x6b*0x26+-0x683*-0x5+0x3071*-0x1)[_0x22b239(0x10f)+'ing'](0x1e4f+-0xa4d*0x1+-0x8a*0x25));}else _0xf663c['bbFIf'](_0x4fbc3f['getIt'+'em'](_0x25a971),null)&&(_0x3809c0['remov'+'eItem'](_0x3657f0),_0x2ceab2=!![]);}return _0x4beb4b['scala'+'rs']=_0xab867c['filte'+'r'](function(_0x5e0b8e){var _0x38f885=_0x22b239,_0x5dd65a={'jPfIT':'3|4|0'+'|1|2','yQHWG':function(_0x5c27e1,_0x362225){return _0xef363a['WQbIw'](_0x5c27e1,_0x362225);},'RLxxp':function(_0x22a189,_0x576a62){return _0x22a189-_0x576a62;},'nikal':_0xef363a['HnTeQ'],'bjoIB':function(_0x550453){return _0x550453();},'IJoYR':function(_0x37a667,_0x4b17b8){var _0x2b2ec2=_0x49fc;return _0xef363a[_0x2b2ec2(0xa38)](_0x37a667,_0x4b17b8);},'BwfvU':_0xef363a['muurV'],'vGCkx':_0x38f885(0x6fe)+'nge','fewgq':'range','BGiQT':function(_0x2b2fc5,_0x113556){var _0x3e15bb=_0x38f885;return _0xef363a[_0x3e15bb(0x16a)](_0x2b2fc5,_0x113556);},'SOdKh':_0x38f885(0x8be)};if(_0xef363a[_0x38f885(0xa14)]!==_0xef363a['XxDhm'])return _0xef363a['GVzwM'](_0x5e0b8e[0xa6d*-0x2+0x56*-0x6b+0x38cd],_0xef363a[_0x38f885(0x6eb)])||_0xef363a['GVzwM'](_0x5e0b8e[-0xb3c+0x3d6*-0x8+0x29ed],'i32');else{var _0x1f42eb=_0x5a998a(_0x5dd65a[_0x38f885(0x15d)],_0x5dd65a[_0x38f885(0x239)]),_0x13d1d4=_0x333eda['creat'+_0x38f885(0x7c6)+_0x38f885(0x857)](_0x38f885(0x212));_0x13d1d4['type']=_0x5dd65a['fewgq'],_0x13d1d4[_0x38f885(0x8c8)+'Name']='sk-sl'+'ider',_0x13d1d4['min']=_0x263952(_0x264abb),_0x13d1d4['max']=_0x5dd65a[_0x38f885(0x37b)](_0x5c0051,_0x567edc),_0x13d1d4[_0x38f885(0xb46)]=_0x31a8c8(_0x3f3d1c);var _0x44e6e8=_0xdecbfa(_0x5dd65a[_0x38f885(0x780)],'sk-va'+'l'),_0x591108=function(){var _0x1ae053=_0x38f885,_0x37d2d5=_0x5dd65a[_0x1ae053(0x703)]['split']('|'),_0x50dee5=-0x8d7+0x20bb+-0x17e4;while(!![]){switch(_0x37d2d5[_0x50dee5++]){case'0':_0x44e6e8['textC'+_0x1ae053(0x2bb)+'t']=(_0x523956<0x254b*0x1+-0x994*0x3+0xdb*-0xa?_0x267df8[_0x1ae053(0xc52)+'ed'](-0xec0+-0x2*0x443+0x1747):_0x391ffb(_0x1faabc[_0x1ae053(0x1d4)](_0x267df8)))+(_0x13d1d4[_0x1ae053(0x6fa)+'et']['unit']||'');continue;case'1':var _0x984340=_0x5dd65a[_0x1ae053(0x9ed)](_0x5dd65a[_0x1ae053(0x3ee)](_0x267df8,_0xf9c691)/(_0x39e378-_0x2db44a),-0x8*-0xbb+-0x14fd+0xf89);continue;case'2':_0x13d1d4[_0x1ae053(0x426)]['setPr'+'opert'+'y'](_0x5dd65a[_0x1ae053(0x160)],_0x984340+'%');continue;case'3':var _0x267df8=_0x5dd65a['bjoIB'](_0x2ca3b1);continue;case'4':_0x13d1d4['value']=_0x31f1d7(_0x267df8);continue;}break;}};return _0x13d1d4[_0x38f885(0xa19)+'ut']=function(){_0x5dd65a['IJoYR'](_0x27816a,_0x315329(_0x13d1d4['value'])||_0x36fb2f),_0x591108();},_0x1f42eb['appen'+'dChil'+'d'](_0x13d1d4),_0x1f42eb['appen'+_0x38f885(0x3e9)+'d'](_0x44e6e8),_0x1f42eb['sync']=_0x591108,_0x1f42eb['input']=_0x13d1d4,_0x591108(),_0x4beca8['syncs'][_0x38f885(0x773)](_0x591108),_0x1f42eb;}})[_0x22b239(0x3c9)](function(_0xd6d391){var _0x14da3b=_0x22b239;return{'o':'0x'+_0xd6d391[0x1d8d*-0x1+0x1d7d+-0x10*-0x1]['toStr'+_0x14da3b(0x907)](-0x36*0x8b+0x2053+-0x2f1*0x1),'v':_0x19598d(_0x33d5d5+_0xd6d391[0x35d+-0x3*-0xd3+-0x5d6*0x1],_0xd6d391[0x7*-0x30d+-0xd5*0x3+0x17db])};})['filte'+'r'](function(_0x33229a){var _0x4cc740=_0x22b239;return _0x33229a['v']!==undefined&&_0xf663c[_0x4cc740(0xa73)](isFinite,_0x33229a['v']);})['slice'](-0x200c+-0x19a9*0x1+0x39b5,0x451+0x13*0x12d+-0x1a9c),_0x4beb4b;}function _0x4bb1af(){var _0x108c38=_0x1e5d49,_0x5cbf97={'BSugu':function(_0x5b666c,_0x40c16a){return _0xf663c['zTaGF'](_0x5b666c,_0x40c16a);},'XEAXG':_0xf663c[_0x108c38(0x6d6)],'rZshU':_0xf663c[_0x108c38(0x3a5)],'OFWZX':function(_0x55a406,_0x1e5c76){return _0x55a406(_0x1e5c76);}};if(_0xf663c['fqnGH'](_0xf663c['LIRsR'],_0xf663c[_0x108c38(0xbae)])){if(_0x10f0f6&&_0xd00f47['buffe'+'r']&&_0x3effc8[_0x108c38(0x786)+'r'][_0x108c38(0x51b)+_0x108c38(0x56b)])return _0xbd2b97[_0x108c38(0x178)+'e']=_0x5effa2[_0x108c38(0x178)+'e']||_0xf663c['koxsv'],new _0x3c5c2b(_0x5b0f05['buffe'+'r']);}else{var _0x212081={'players':[],'bots':[],'enemies':[],'controllers':[],'camera':null,'cameraFrom':null,'playerList':null,'managers':{},'wasmTypes':null},_0x4f298e=_0x201b55[_0x108c38(0x366)+_0x108c38(0x2e2)+_0x108c38(0xb78)]&&_0x201b55[_0x108c38(0x366)+'ntrol'+'ler']['ptr']||-0x247e+0x1ea5+-0x1*-0x5d9,_0x139b3e=_0x49dde4['Photo'+_0x108c38(0x3ce)+_0x108c38(0x1b3)+'nc']||{},_0x310437=Object[_0x108c38(0x854)](_0x139b3e);for(var _0x28485d=0x23df+0x264d+-0x4a2c;_0x28485d<_0x310437[_0x108c38(0x68d)+'h']&&_0xf663c[_0x108c38(0x9c9)](_0x28485d,0x652+-0x11*0x105+0xb1b);_0x28485d++){var _0x453a2c=_0xf663c[_0x108c38(0x15e)][_0x108c38(0x438)]('|'),_0x119923=-0x1b*0x106+-0x836+0x23d8;while(!![]){switch(_0x453a2c[_0x119923++]){case'0':var _0x36e600=_0x3e7a50(_0x108c38(0x9db)+_0x108c38(0x3ce)+'orkSy'+'nc',_0x226898[_0x108c38(0x4a6)]);continue;case'1':var _0x226898=_0x139b3e[_0x310437[_0x28485d]];continue;case'2':_0x36e600[_0x108c38(0x70c)+'al']=!!_0x4f298e&&_0xf663c[_0x108c38(0x402)](_0x36e600[_0x108c38(0x69c)]['fps'],'0x'+_0x4f298e[_0x108c38(0x10f)+_0x108c38(0x907)](0xce1+-0xe*-0x29+-0xf0f*0x1));continue;case'3':_0x212081['playe'+'rs'][_0x108c38(0x773)](_0x36e600);continue;case'4':if(_0x36e600[_0x108c38(0x69c)][_0x108c38(0x663)+'h']){var _0x4d7f3c=_0xf663c['AobwO'](parseInt,_0x36e600['refs']['healt'+'h'],0x1*-0x1d93+0x13cf+0x1*0x9d4);_0x36e600['healt'+'h']=_0x608ff8(_0x4d7f3c,'Healt'+_0x108c38(0x9dd)+'pt',_0x108c38(0xaaa));}continue;case'5':_0x36e600[_0x108c38(0x29a)+_0x108c38(0xa45)+'s']=_0x226898['first'+_0x108c38(0x5f2)]-_0x35db39;continue;case'6':_0x36e600['hits']=_0x226898['hits'];continue;}break;}}_0x212081['playe'+'rCoun'+'t']=_0x310437[_0x108c38(0x68d)+'h'];var _0x1b2845=_0x49dde4[_0x108c38(0xb0e)+'otrol'+_0x108c38(0xb78)]||{},_0x27a580=Object[_0x108c38(0x854)](_0x1b2845);for(var _0x477ca9=0xc60+-0x1261+0x601;_0x477ca9<_0x27a580[_0x108c38(0x68d)+'h']&&_0x477ca9<0x1633+-0x253a+0x31*0x4f;_0x477ca9++){var _0x4707a7=_0x3e7a50(_0xf663c[_0x108c38(0x887)],_0x1b2845[_0x27a580[_0x477ca9]][_0x108c38(0x4a6)]);_0x4707a7[_0x108c38(0x487)]=_0x1b2845[_0x27a580[_0x477ca9]][_0x108c38(0x487)],_0x4707a7[_0x108c38(0x29a)+_0x108c38(0xa45)+'s']=_0x1b2845[_0x27a580[_0x477ca9]][_0x108c38(0x29a)+'Seen']-_0x35db39;if(_0x4707a7[_0x108c38(0x69c)][_0x108c38(0x663)+'h'])_0x4707a7[_0x108c38(0x663)+'h']=_0xf663c[_0x108c38(0x14c)](_0x608ff8,parseInt(_0x4707a7[_0x108c38(0x69c)][_0x108c38(0x663)+'h'],0x7*0x556+-0x2506+-0x44),'Healt'+_0x108c38(0x9dd)+'pt',_0xf663c['OHRgo']);_0x212081[_0x108c38(0xafc)]['push'](_0x4707a7);}_0x212081[_0x108c38(0xa6c)+_0x108c38(0x2a2)]=_0x27a580['lengt'+'h'];var _0xecaa17=_0x49dde4['FPSco'+_0x108c38(0x2e2)+_0x108c38(0xb78)]||{},_0x4f39fc=Object[_0x108c38(0x854)](_0xecaa17);for(var _0x2cdcb5=0x201b+0x1272*-0x1+-0x10d*0xd;_0x2cdcb5<_0x4f39fc[_0x108c38(0x68d)+'h']&&_0x2cdcb5<-0x513+0x23e+0x2ed;_0x2cdcb5++){var _0x2f07ac=_0x3e7a50(_0xf663c['onIMM'],_0xecaa17[_0x4f39fc[_0x2cdcb5]]['ptr']);_0x2f07ac[_0x108c38(0x487)]=_0xecaa17[_0x4f39fc[_0x2cdcb5]]['hits'],_0x2f07ac[_0x108c38(0x70c)+'al']=_0xf663c[_0x108c38(0x84b)](_0xecaa17[_0x4f39fc[_0x2cdcb5]][_0x108c38(0x4a6)],_0x4f298e),_0x212081[_0x108c38(0xc3f)+_0x108c38(0x381)+'s']['push'](_0x2f07ac);}_0x212081[_0x108c38(0xc3f)+_0x108c38(0x381)+'Count']=_0x4f39fc[_0x108c38(0x68d)+'h'];var _0x5da522=_0x212081[_0x108c38(0x43a)+'rs'][_0x108c38(0x7c8)+'t'](_0x212081['bots']);for(var _0x2f36c2=-0x1*0xa6a+-0x1017+0x1a81;_0x2f36c2<_0x5da522['lengt'+'h'];_0x2f36c2++){if(_0x5da522[_0x2f36c2][_0x108c38(0x70c)+'al'])continue;_0x212081[_0x108c38(0x5fd)+'es'][_0x108c38(0x773)](_0x5da522[_0x2f36c2]);}_0x212081[_0x108c38(0xa80)+_0x108c38(0x115)]=_0x212081[_0x108c38(0x5fd)+'es']['lengt'+'h'];var _0x368905={'TDM_GameManager':0x2c,'GG_GameManager':0x14},_0x49f728={'TDM_GameManager':0x50,'GG_GameManager':0x5c};for(var _0x2e4bed in _0x201b55){var _0x3bedcb=_0x201b55[_0x2e4bed];if(!_0x3bedcb||!_0x3bedcb[_0x108c38(0x4a6)])continue;if(!(_0x2e4bed in _0x368905))continue;_0x212081['manag'+_0x108c38(0xb2e)][_0x2e4bed]='0x'+_0x3bedcb['ptr'][_0x108c38(0x10f)+_0x108c38(0x907)](-0x1302+0x3d*0x41+0x1*0x395);var _0xf8f6af=_0x19598d(_0xf663c['luhsJ'](_0x3bedcb['ptr'],_0x368905[_0x2e4bed]),'u32'),_0xf573ac=_0x19598d(_0x3bedcb[_0x108c38(0x4a6)]+_0x49f728[_0x2e4bed],'u32');_0xf8f6af&&_0xf663c[_0x108c38(0x896)](_0x212081[_0x108c38(0x53a)+'a'],null)&&(_0x212081['camer'+'a']='0x'+_0xf663c['zXfTL'](_0xf8f6af,0x25*-0x8d+-0x2*-0x113d+0x1*-0xe19)[_0x108c38(0x10f)+_0x108c38(0x907)](0x910+-0x12df*-0x1+-0x1*0x1bdf),_0x212081['camer'+'aFrom']=_0x2e4bed);if(_0xf573ac&&_0x212081[_0x108c38(0x43a)+_0x108c38(0x1b5)]===null)_0x212081['playe'+'rList']=_0xf663c['mgpUl']('0x',(_0xf573ac>>>-0x2022+0x43f*0x2+0x17a4)[_0x108c38(0x10f)+_0x108c38(0x907)](0x930+-0xeaa+0x1*0x58a));}if(!_0x212081[_0x108c38(0x43a)+_0x108c38(0x66c)+'t']&&!_0x212081['botCo'+_0x108c38(0x2a2)]&&!_0x212081['camer'+'a'])_0x212081[_0x108c38(0xb7d)]=_0xf663c['FZsXR']('No\x20Ph'+'otonN'+'etwor'+_0x108c38(0xad1)+_0x108c38(0x73a)+'NPC_C'+_0x108c38(0x9f6)+_0x108c38(0xc43)+'nd\x20no'+_0x108c38(0x2ad)+_0x108c38(0xbc1)+'ger.\x20'+_0x108c38(0x78d)+'is\x20wh'+_0x108c38(0x974),_0xf663c['PsgNW']);else!_0x212081['enemy'+'Count']&&(_0x212081[_0x108c38(0xb7d)]=_0x108c38(0x5be)+_0x108c38(0x371)+'e\x20pre'+_0x108c38(0x16c)+'but\x20n'+'one\x20a'+_0x108c38(0x40b)+_0x108c38(0x2dd)+_0x108c38(0x31e)+_0x108c38(0x985)+'mies\x20'+_0x108c38(0x428)+_0x108c38(0xb79)+'k\x20'+_0xf663c[_0x108c38(0xa48)]);try{var _0x123733=window[_0x108c38(0x6df)+_0x108c38(0x28a)+_0x108c38(0x980)]&&window[_0x108c38(0x6df)+'WebMo'+_0x108c38(0x980)]['Runti'+'me'],_0xe4ddbe=_0x123733&&_0x123733[_0x108c38(0x4a7)+_0x108c38(0x730)+'smTyp'+'es']||[],_0xef0a90={};for(var _0x3d85a5=-0x5*-0x523+0x1380+-0x2d2f*0x1;_0xf663c[_0x108c38(0x59f)](_0x3d85a5,_0xe4ddbe['lengt'+'h'])&&_0xf663c[_0x108c38(0x74c)](_0x3d85a5,0x161+-0x24f8+0x3337);_0x3d85a5++){if(_0x108c38(0x655)!==_0x108c38(0x655)){var _0x2dfc68=('2|0|1'+'|3|4|'+'5')[_0x108c38(0x438)]('|'),_0x24e436=0x1d*-0x139+-0x1d7e*-0x1+0x1fd*0x3;while(!![]){switch(_0x2dfc68[_0x24e436++]){case'0':var _0x3f0319=_0x520620();continue;case'1':if(!_0x3f0319)return;continue;case'2':_0x23adaa[_0x108c38(0x16e)]=!!_0x5cb866;continue;case'3':_0x3f0319[_0x108c38(0x8c8)+'Name']=_0x5cbf97[_0x108c38(0x519)](_0x5cbf97['XEAXG'],_0x4518bc[_0x108c38(0x16e)]?_0x5cbf97[_0x108c38(0x5ad)]:'');continue;case'4':if(_0xe4da2a[_0x108c38(0xb74)])_0x138ce7[_0x108c38(0xb74)][_0x108c38(0x426)][_0x108c38(0xadd)+'ty']=_0x17393c['open']?'1':'.5';continue;case'5':if(_0xce3e2[_0x108c38(0x16e)]){_0x3d127a(_0x8db98b['cat']);try{var _0x4f4a00=_0x10797d['inner'+'Heigh'+'t']||-0x179b*0x1+-0x16d*0x2+0x1d95;if(_0x4f4a00<0xcff+0x1931+-0x147*0x1c)_0x5cbf97[_0x108c38(0xc2b)](_0x18015e,![]);}catch(_0x158876){}}continue;}break;}}else{var _0x4e2b45=_0xf663c[_0x108c38(0x6b8)](_0xf663c[_0x108c38(0x10a)](_0xe4ddbe[_0x3d85a5]['param'+'s'][_0x108c38(0xb6d)](','),'\x20->\x20'),_0xe4ddbe[_0x3d85a5]['retur'+'nType']||_0x108c38(0xa6f));_0xef0a90[_0x4e2b45]=(_0xef0a90[_0x4e2b45]||-0x2cd+0x182*-0xd+0xb9*0x1f)+(-0x351*-0x3+-0x169c+0x655*0x2);}}_0x212081['wasmT'+_0x108c38(0x240)]=_0xef0a90;}catch(_0x80af5a){}return _0x212081;}}function _0x608ff8(_0x3a8cc3,_0x13a57f,_0x309238){var _0x2972ba=_0x1e5d49,_0x28d0b4={'FpLWE':'cmd','zKjgB':function(_0x5a185c,_0x3477b1,_0xf1de20){return _0x5a185c(_0x3477b1,_0xf1de20);}};try{var _0x46c65d=_0x46fb0b[_0x13a57f]||[];for(var _0x5172ce=-0x6b1*-0x1+-0x4da+0x3*-0x9d;_0x5172ce<_0x46c65d[_0x2972ba(0x68d)+'h'];_0x5172ce++){if(_0x2972ba(0x380)!==_0xf663c['aKeHF']){if(_0x46c65d[_0x5172ce][-0x267+-0x1*0x489+-0x6f1*-0x1]!==_0x309238)continue;var _0x18eef0=_0x46c65d[_0x5172ce][0x14ed+-0x482*-0x1+-0x1*0x196f];if(_0xf663c[_0x2972ba(0x150)](_0x309238['index'+'Of'](_0x2972ba(0x684)),-0x2211+0xd*0x1dd+0x9d8)){var _0x2f0d59=_0x45e108(_0x3a8cc3,_0x18eef0,_0x309238);if(!_0x2f0d59)return null;_0x2f0d59['o']=_0x18eef0,_0x2f0d59['k']=_0x309238;var _0x59d253=_0x3a94c7([_0x2f0d59]);if(!_0x59d253['rows']['lengt'+'h'])return null;return _0x59d253[_0x2972ba(0x4e7)][0x1003+-0x32c+0xcd7*-0x1];}var _0x514162=_0x19598d(_0xf663c[_0x2972ba(0xbb5)](_0x3a8cc3,_0x18eef0),_0x309238);if(_0x514162===undefined)return null;return{'o':'0x'+_0x18eef0[_0x2972ba(0x10f)+_0x2972ba(0x907)](0x1ce+-0xc2b*-0x1+-0xde9),'v':_0x514162};}else try{var _0x432537=_0x3584b9&&_0x271cd6[_0x2972ba(0x3d3)];if(!_0x432537||_0x432537['__sak'+'ura']!==_0x3ae4f3||_0x432537[_0x2972ba(0xb1a)]!==_0x28d0b4[_0x2972ba(0x343)])return;_0x28d0b4[_0x2972ba(0x310)](_0x4a674f,_0x432537[_0x2972ba(0xa2e)],_0x432537['arg']);}catch(_0x5922ae){}}}catch(_0x878c9e){}return null;}function _0x15aaec(){var _0x1c9db3=_0x1e5d49,_0x1c1133={};_0x1c7561['ok']=-0x5ff+0xd*0x2ec+-0x1ffd,_0x1c7561[_0x1c9db3(0x2fb)+'d']=0x1c2b+0x25ec+-0x7*0x971,_0x1c7561[_0x1c9db3(0x4b0)+_0x1c9db3(0x237)]=null;var _0x39d424=Object['keys'](_0x46fb0b);for(var _0x5768b4=0x1*-0xf2c+-0x4c3+0x13ef;_0xf663c[_0x1c9db3(0xb90)](_0x5768b4,_0x39d424[_0x1c9db3(0x68d)+'h']);_0x5768b4++){var _0x498fda=_0x39d424[_0x5768b4],_0x5ac239=_0x201b55[_0x498fda];if(!_0x5ac239||!_0x5ac239['ptr'])continue;var _0x1326a0=_0x46fb0b[_0x498fda]||[],_0x48f5ae=[];for(var _0x24340e=-0xd*-0x1bd+-0x108a+-0x60f;_0x24340e<_0x1326a0['lengt'+'h'];_0x24340e++){var _0x251859=_0x1326a0[_0x24340e][-0x2b*0x7f+0x225a+-0xd05],_0x3fc29b=_0x1326a0[_0x24340e][0x1*0x22cc+0x1fa*0x2+-0x6d*0x5b];if(_0x3fc29b['index'+'Of'](_0x1c9db3(0x684))===0x1abe+-0x1*-0x1741+-0x1*0x31ff){var _0x4ec139=_0x45e108(_0x5ac239[_0x1c9db3(0x4a6)],_0x251859,_0x3fc29b);if(!_0x4ec139)continue;_0x4ec139['o']=_0x251859,_0x4ec139['k']=_0x3fc29b,_0x48f5ae['push'](_0x4ec139);}else{if(_0xf663c['lVEsk'](_0xf663c[_0x1c9db3(0x1fe)],_0x1c9db3(0xc94))){var _0x59c3f2=_0xf663c[_0x1c9db3(0x8f7)](_0x19598d,_0xf663c['ehOQh'](_0x5ac239['ptr'],_0x251859),_0x3fc29b);if(_0x59c3f2===undefined)continue;var _0x64d6b6={'o':_0x251859,'k':_0x3fc29b,'v':_0x59c3f2};if(_0xf663c[_0x1c9db3(0x243)](_0x3fc29b,'v2')||_0xf663c[_0x1c9db3(0x3e5)](_0x3fc29b,'v3')||_0xf663c[_0x1c9db3(0x3c8)](_0x3fc29b,'v4')){var _0x28a5d3=_0xf663c[_0x1c9db3(0x837)](_0x3fc29b,'v2')?0x1*-0x1b84+-0x18f9+0x347f:_0xf663c[_0x1c9db3(0x6d7)](_0x3fc29b,'v3')?0x1c3d*0x1+-0x133f+-0xb*0xd1:-0x2311+0x1*0x1e2f+0x4e6,_0x562a87=_0x42e9d0(_0x5ac239['ptr'],_0x251859,_0x28a5d3);if(_0x562a87){if(_0x1c9db3(0xb06)===_0x1c9db3(0xb06))_0x64d6b6[_0x1c9db3(0x588)]=_0x562a87,_0x64d6b6['v']=_0x562a87[0x7*0x52f+0x19a2+-0x3deb];else{var _0x15bc71=new _0x4250b6(_0x1c9db3(0x6ca)+'a-sw');_0x15bc71['postM'+'essag'+'e'](_0x2dc8b7),_0x486fc2(function(){try{_0x15bc71['close']();}catch(_0x561e75){}},-0x4a*-0x25+0x7f1+0xb*-0x19b);}}}_0x48f5ae[_0x1c9db3(0x773)](_0x64d6b6);}else{if(!_0x2451b2()&&!_0x5a0d1e){if(_0x250e92['el'])_0x1d7021['el']['style'][_0x1c9db3(0xa20)+'ay']='none';return;}if(_0x3b8d51['el'])_0x49e2f2['el'][_0x1c9db3(0x426)][_0x1c9db3(0xa20)+'ay']='';var _0x21acaf=_0x5858cd['keys'](_0x50d4e2&&_0x54bee2[_0x1c9db3(0xb59)+'nces']||{})[_0x1c9db3(0x68d)+'h'],_0x30846f=_0x1e5856&&_0x242287['esp']||null,_0x19251b=_0x30846f?_0x30846f['enemy'+'Count']||-0x1*0x21e0+-0x202*0x11+0x4402*0x1:0x1*0x157+-0x148d*-0x1+-0x15e4,_0x1c1aae=_0x30846f?_0x30846f['botCo'+_0x1c9db3(0x2a2)]||-0x1d1+0x24ea+-0x2319:-0x1d7*0x8+-0x1893+0xd19*0x3,_0x2b5b18=_0x3eb1f0?_0xf663c[_0x1c9db3(0x8b6)](_0x53cfee['buffe'+'r'][_0x1c9db3(0x51b)+'ength'],-0x1a4d0f+-0x1*-0xb0cc2+-0x10213*-0x1f)['toFix'+'ed'](-0xd*0x199+0x1*-0x301+0x17c6)+'MB':_0x1c9db3(0x6b2)+'m',_0x165157=_0xf663c['USDgo'](_0xf663c[_0x1c9db3(0x474)](_0xf663c['xUjPU'](_0xf663c['WAQIK'](_0xf663c['rvURk'](_0xf663c[_0x1c9db3(0x8ff)]('v'+(_0x481dfc&&_0x41c0a1[_0x1c9db3(0xa1c)+'on']||_0x2283ff),'\x20\x20hoo'+'ks\x20')+(_0x530b6e&&_0xa72763['hooks'+_0x1c9db3(0x85e)+'ed']||-0x1*-0x1502+0xbf0*-0x3+0xece),'/'),_0x242da2&&_0x257ed7['hooks'+_0x1c9db3(0x20f)]||-0x1a07+-0xad+-0x1ab4*-0x1),_0x1c9db3(0x1b6)+'s\x20')+_0x21acaf+_0xf663c['jKmbz'],_0x2b5b18),_0x1c9db3(0x9ad)+'tes\x20')+_0x4cd513;_0x4836aa['st']['textC'+_0x1c9db3(0x2bb)+'t']=_0x165157;var _0x4ba6ca=_0x559ce3[_0x1c9db3(0x7e9)];_0x4ba6ca&&(_0x4ba6ca[_0x1c9db3(0x93f)+_0x1c9db3(0x2bb)+'t']=_0x19251b>-0x2*-0x727+-0x18ce+0xa80?'PLAYE'+_0x1c9db3(0x66b)+_0x19251b+(_0x1c1aae?_0xf663c['OubAe'](_0xf663c['BcdEd']('\x20+\x20',_0x1c1aae),_0x1c9db3(0x8ac)):'')+(_0x30846f&&_0x30846f[_0x1c9db3(0x53a)+'a']?_0x1c9db3(0x816)+'\x20'+_0x30846f['camer'+'aFrom']:_0x1c9db3(0x816)+'\x20-'):_0xf663c['OQMMd']+(_0x30846f&&_0x30846f[_0x1c9db3(0x53a)+'a']?_0x30846f[_0x1c9db3(0x53a)+'aFrom']:'-'),_0x4ba6ca['style']['color']=_0x19251b>0x2348*-0x1+-0x9bb+0x1f5*0x17?_0xf663c[_0x1c9db3(0x947)]:_0xf663c['JDCOA']);}}}if(_0x48f5ae[_0x1c9db3(0x68d)+'h']){var _0x2c285f=_0x3a94c7(_0x48f5ae);_0x1c1133[_0x498fda]=_0x2c285f[_0x1c9db3(0x4e7)],_0x528307[_0x498fda]={'key':_0x2c285f['key'],'sane':_0x2c285f['sane'],'checked':_0x2c285f['check'+'ed'],'keyConsistent':_0x2c285f[_0x1c9db3(0x936)+'nsist'+_0x1c9db3(0x857)],'keySource':_0x2c285f['keySo'+_0x1c9db3(0x6ae)]};}}return _0x1c1133;}function _0x3a94c7(_0x2b018a){var _0x7c9fa5=_0x1e5d49,_0x4e6d93=-0xe04+-0x155d*-0x1+-0xb*0xab,_0x11b1de=-0x23a6+0x65b*-0x1+0x2a01,_0x16d725=null;for(var _0x5d7caf=0x24df*0x1+0x1b9f+-0x41*0xfe;_0x5d7caf<_0x2b018a[_0x7c9fa5(0x68d)+'h'];_0x5d7caf++){if(_0x7c9fa5(0x2bc)===_0xf663c['faHmh']){var _0x16f1d0=_0x2b018a[_0x5d7caf];if(_0xf663c[_0x7c9fa5(0x7ba)](_0x16f1d0['k']['index'+'Of']('obf'),-0x1*0x1ea1+0x20ba+-0x219))continue;_0x16f1d0['v']=_0xf663c['GBVyb'](_0x388489,_0x16f1d0['k'],_0x16f1d0[_0x7c9fa5(0x470)+'n'],_0x16f1d0['keyAt'+_0x7c9fa5(0x242)+'t0']),_0x16f1d0[_0x7c9fa5(0x727)+'ed']=_0x16f1d0[_0x7c9fa5(0x346)+'Offse'+'t0'],_0x16f1d0['raw']=_0xf663c[_0x7c9fa5(0x6cd)](_0xf663c[_0x7c9fa5(0xa9e)](_0xf663c['MXAiL']+_0x16f1d0[_0x7c9fa5(0x470)+'n'],_0x7c9fa5(0x910)+'=')+_0x16f1d0[_0x7c9fa5(0x22e)]+(_0x16f1d0[_0x7c9fa5(0x6d3)]?'\x20ACTI'+'VE':'')+_0xf663c[_0x7c9fa5(0xae7)],_0x16f1d0['keyAt'+_0x7c9fa5(0x242)+'t0'])+_0x7c9fa5(0xba2)+_0x16f1d0[_0x7c9fa5(0x465)];if(_0x16d725===null)_0x16d725=_0x16f1d0[_0x7c9fa5(0x346)+_0x7c9fa5(0x242)+'t0'];_0x11b1de++,_0xf663c['xfDaJ'](_0x218749,_0x16f1d0)?(_0x4e6d93++,_0x16f1d0['sane']=!![]):_0x16f1d0['sane']=![],delete _0x16f1d0[_0x7c9fa5(0x838)];}else _0x526e37['textC'+'onten'+'t']=_0xf663c['nbJZr'](_0x410f8d,0x17*-0x11+-0x11*0x15b+-0x55*-0x4a)?_0x7c9fa5(0x181)+_0x7c9fa5(0x66b)+_0x4b40ed+(_0x57b7cf?_0xf663c['GHYJl']+_0x59cd3f+_0x7c9fa5(0x8ac):'')+(_0x213122&&_0xe0035d['camer'+'a']?_0xf663c[_0x7c9fa5(0x10a)](_0xf663c[_0x7c9fa5(0x8c2)],_0x3ed40d[_0x7c9fa5(0x53a)+_0x7c9fa5(0x912)]):_0x7c9fa5(0x816)+'\x20-'):_0xf663c[_0x7c9fa5(0x4fb)]('no\x20en'+'emies'+_0x7c9fa5(0xb64)+_0x7c9fa5(0xb88)+_0x7c9fa5(0x57f)+_0x7c9fa5(0xc88),_0x28b059&&_0x5e92a8['camer'+'a']?_0x42b61a[_0x7c9fa5(0x53a)+_0x7c9fa5(0x912)]:'-'),_0x4b1b1f[_0x7c9fa5(0x426)][_0x7c9fa5(0x492)]=_0xf663c[_0x7c9fa5(0x6ab)](_0x2dffe0,-0x4b7+0x181c+-0x1365)?_0xf663c[_0x7c9fa5(0x947)]:'#8d7a'+'99';}return{'rows':_0x2b018a,'key':_0x16d725,'sane':_0x4e6d93,'checked':_0x11b1de,'keyConsistent':_0x4a8806(_0x2b018a),'keySource':_0x7c9fa5(0xa23)+_0x7c9fa5(0x4f6)+_0x7c9fa5(0x34f)+'idth)'};}function _0x4a8806(_0x2dc222){var _0x1142fd=_0x1e5d49,_0x549cb4={};for(var _0x2a87e1=0xd8+0x48e*0x5+-0x179e;_0x2a87e1<_0x2dc222[_0x1142fd(0x68d)+'h'];_0x2a87e1++){var _0x54a62e=_0x2dc222[_0x2a87e1];if(_0x54a62e['k']['index'+'Of'](_0xf663c[_0x1142fd(0xc39)])!==-0x1afd+-0xa31+0x252e)continue;if(_0x549cb4[_0x54a62e['k']]===undefined)_0x549cb4[_0x54a62e['k']]=_0x54a62e['keyUs'+'ed'];else{if(_0x549cb4[_0x54a62e['k']]!==_0x54a62e['keyUs'+'ed'])return![];}}return!![];}function _0x218749(_0x2ab797){var _0x3d2e32=_0x1e5d49,_0x2659b9=_0x2ab797['v'];if(typeof _0x2659b9!==_0xf663c[_0x3d2e32(0x7dd)]||!isFinite(_0x2659b9))return![];if(_0x2ab797['k']===_0xf663c['WLLmy'])return _0xf663c['sAEty'](_0x2659b9,0x71a+0x1*0xdd3+-0x14ed)||_0xf663c[_0x3d2e32(0x5df)](_0x2659b9,0x1b34+0x1*-0x1135+-0x9fe);var _0x3aac71=_0x2ab797[_0x3d2e32(0x22e)];if(typeof _0x3aac71!=='numbe'+'r'||!isFinite(_0x3aac71))return!![];if(_0xf663c[_0x3d2e32(0xc75)](_0x2ab797[_0x3d2e32(0x6d3)],-0x2eb+-0x1*-0x17ea+0x14fe*-0x1))return Math[_0x3d2e32(0x892)](_0xf663c[_0x3d2e32(0x51d)](_0x2659b9,_0x3aac71))<=Math[_0x3d2e32(0x86e)](-0x4*-0x5cb+0x53+-0x177e,_0xf663c[_0x3d2e32(0x3dc)](Math['abs'](_0x3aac71),-0xad8+0x1*-0xd7f+-0x43*-0x5d+0.6));return _0xf663c['OSBhg'](Math[_0x3d2e32(0x892)](_0x2659b9),0x2a915bb7+0x7227c2bf+0x2e3667*-0x21a);}function _0x27c41b(){var _0x4a954f=_0x1e5d49,_0x5d62e3={};try{var _0x4d4671=window[_0x4a954f(0x6df)+_0x4a954f(0x28a)+_0x4a954f(0x980)]&&window[_0x4a954f(0x6df)+_0x4a954f(0x28a)+_0x4a954f(0x980)][_0x4a954f(0x3be)+'me'];_0x5d62e3['tag']=_0x4d4671&&_0x4d4671[_0x4a954f(0x216)+_0x4a954f(0x8a2)+'g']||null,_0x5d62e3[_0x4a954f(0x267)+'tches']=!!(_0xf663c[_0x4a954f(0x2b1)](_0x4d4671,_0x3ba720)&&_0x4d4671['__sak'+_0x4a954f(0x8a2)+'g']===_0x3ba720),_0x5d62e3['runti'+'meGam'+'e']=_0x4d4671&&_0x4d4671[_0x4a954f(0x899)]?typeof _0x4d4671[_0x4a954f(0x899)]:'none',_0x5d62e3['plugi'+_0x4a954f(0xc6a)+_0x4a954f(0x4a9)+'Expor'+'ted']=!!(_0x76a7d0&&_0x76a7d0[_0x4a954f(0x291)+'ime']&&_0x76a7d0['_runt'+_0x4a954f(0xb44)]===_0x4d4671),_0x5d62e3[_0x4a954f(0x8e1)+_0x4a954f(0xc6a)+'imeGa'+'me']=_0x76a7d0&&_0x76a7d0['_runt'+'ime']&&_0x76a7d0[_0x4a954f(0x291)+_0x4a954f(0xb44)]['_game']?typeof _0x76a7d0[_0x4a954f(0x291)+'ime'][_0x4a954f(0x899)]:_0x4a954f(0x883);}catch(_0x31635b){_0x5d62e3['error']=String(_0x31635b&&_0x31635b[_0x4a954f(0x10c)+'ge']||_0x31635b);}return _0x5d62e3;}function _0x34b0ed(){var _0x3b1d3e=_0x1e5d49,_0x1d30d6={'TSUgJ':function(_0x4c3cd3,_0x150246){return _0xf663c['HVtxx'](_0x4c3cd3,_0x150246);},'DhmCW':_0x3b1d3e(0x3fd)},_0x37635d=[_0x3b1d3e(0x92b)+_0x3b1d3e(0xc5e)+_0x3b1d3e(0x13f),_0x3b1d3e(0x92b)+_0x3b1d3e(0x98e),_0xf663c[_0x3b1d3e(0x568)],'unity'+'Insta'+_0x3b1d3e(0xb1b)+'apper'],_0x3cb4d4={};for(var _0x73874c=0x3*-0xad1+-0x84d+-0x10*-0x28c;_0xf663c['ztdzN'](_0x73874c,_0x37635d[_0x3b1d3e(0x68d)+'h']);_0x73874c++){if(_0xf663c['dZofM']('MFRqc','KBiHv')){_0x470398[_0x3b1d3e(0x36b)]={};for(var _0x4db901=0xec*0x27+0xc71+-0x3065*0x1;_0x4db901<_0x1162c1[_0x3b1d3e(0x68d)+'h'];_0x4db901++){var _0x40964b=_0x33aeb1(_0x1d30d6[_0x3b1d3e(0x1d7)](_0x251c2c,_0x5646ab(_0x48f27c[_0x4db901][0x1296+0x1*0xa19+0x419*-0x7],-0xb71*-0x1+-0x136*-0x19+-0x1*0x29a7)),_0x1d30d6['DhmCW']);if(_0x40964b!==_0x399cd8)_0xf5e03b[_0x3b1d3e(0x36b)][_0x1533c7[_0x4db901][0x525+-0x469+-0xbb]]=_0x40964b;}}else{var _0x255a47=_0x37635d[_0x73874c],_0x4908ae=typeof window[_0x255a47];_0x3cb4d4[_0x255a47]=_0xf663c[_0x3b1d3e(0x9e1)](_0x4908ae,_0x3b1d3e(0x63f)+'ined')?'undef'+_0x3b1d3e(0x147):_0x4908ae;}}var _0x2a214c=_0xf663c[_0x3b1d3e(0x503)](_0x466416);_0x3cb4d4[_0x3b1d3e(0x8b4)+_0x3b1d3e(0x461)]=_0x1c7561[_0x3b1d3e(0x178)+'e'];try{_0x3cb4d4[_0x3b1d3e(0x940)+_0x3b1d3e(0x94c)]=!!(_0x2a214c&&_0x2a214c['Modul'+'e']),_0x3cb4d4[_0x3b1d3e(0xacb)+'8']=!!(_0x2a214c&&_0x2a214c['Modul'+'e']&&_0x2a214c['Modul'+'e'][_0x3b1d3e(0xa81)+'8']),_0x3cb4d4[_0x3b1d3e(0xaa9)+'ytes']=_0x3cb4d4[_0x3b1d3e(0xacb)+'8']?_0x2a214c['Modul'+'e']['HEAPU'+'8']['lengt'+'h']:-0x873+0x1884+-0x9*0x1c9;}catch(_0x58d4a6){_0x3cb4d4['hasMo'+_0x3b1d3e(0x94c)]=![],_0x3cb4d4[_0x3b1d3e(0xacb)+'8']=![],_0x3cb4d4[_0x3b1d3e(0xaa9)+_0x3b1d3e(0x60c)]=-0x1e0e+0x1*-0x59d+0x17*0x18d;}return _0x3cb4d4[_0x3b1d3e(0xaf8)+'Wrapp'+'er']=typeof _0x31f719,_0x3cb4d4;}function _0x430390(){var _0x2f046e=_0x1e5d49,_0x16859b={},_0x4c73d7=_0xf663c[_0x2f046e(0x45d)](_0xf24c93);if(!_0x4c73d7)return _0x16859b;_0x16859b['Mouse'+_0x2f046e(0x136)+'ptr']=_0x4c73d7['mouse'+'Look'];for(var _0x201443 in _0x4c73d7['float'+'s'])_0x16859b[_0xf663c[_0x2f046e(0x8ff)](_0x2f046e(0x2ac)+'Look+',_0x201443)]=_0x4c73d7['float'+'s'][_0x201443];if(_0x4c73d7[_0x2f046e(0x53a)+'a'])_0x16859b[_0xf663c[_0x2f046e(0x865)]]=_0x4c73d7['camer'+'a'];return _0x16859b;}function _0x28247a(_0x4670e6){var _0x3c1344=_0x1e5d49,_0x1b4c68={'aYMIv':_0x3c1344(0x8c9),'CUOwk':function(_0x1498c2){var _0x27ec06=_0x3c1344;return _0xf663c[_0x27ec06(0x6c5)](_0x1498c2);}};if(_0xf663c[_0x3c1344(0x545)]!==_0xf663c[_0x3c1344(0x9c8)]){var _0x5421cd={};for(var _0x4ddd89 in _0x4670e6){if(_0xf663c['DjVvw'](_0x3c1344(0x3c7),_0xf663c['otSNE']))_0x34fc89[_0xf663c[_0x3c1344(0x284)](_0xd4c7bb+_0x3c1344(0xb1c),_0x5a5d3a[_0x26a067]['o'][_0x3c1344(0x10f)+'ing'](-0x1*0x20a6+-0x9*0x21d+0x33bb))]=_0x5700d0[_0x4b8909]['v'];else{var _0x1d7640=_0x4670e6[_0x4ddd89];for(var _0x2c06e0=0x1ac8+-0x9ea*0x2+0x164*-0x5;_0xf663c[_0x3c1344(0x265)](_0x2c06e0,_0x1d7640[_0x3c1344(0x68d)+'h']);_0x2c06e0++){if(_0x3c1344(0x61d)===_0xf663c[_0x3c1344(0x7a8)])_0x5421cd[_0x4ddd89+_0xf663c['omfVy']+_0x1d7640[_0x2c06e0]['o'][_0x3c1344(0x10f)+'ing'](-0x1c0+0xced+-0xb1d)]=_0x1d7640[_0x2c06e0]['v'];else{if(_0xf663c[_0x3c1344(0x695)](_0x322e70,'v3')){var _0x441f0a=_0x26a2d1[_0x49aede][_0x3c1344(0x588)]||[_0x3f1bd6[_0x2677f7]['v'],0x670*0x2+-0x6b9*-0x2+-0x1a52,0xcff+0xb02+0x1801*-0x1];return _0x441f0a[_0x3c1344(0x3c9)](function(_0x34123f){return _0x5e0cf3['round'](_0x34123f*(0x772+-0x31*0xb3+0x1b35))/(-0x1232+-0x67*-0x19+0x887);})['join']('\x20\x20');}var _0x295216=_0x59e4fe[_0x2139e4]['v'];return typeof _0x295216===_0xf663c[_0x3c1344(0x7dd)]?_0x13af8a[_0x3c1344(0x1d4)](_0x295216*(0x3*0xaf3+0x1845+-0x3536))/(-0x1*-0x17d0+0x32f*0x9+0x1*-0x308f):_0x368999(_0x295216);}}}}return _0x5421cd;}else{if(!_0x3e1cf0)return;_0x3b25a6=![],_0xe7fb6d[_0x3c1344(0x426)]['curso'+'r']=_0x1b4c68['aYMIv'],_0x1b4c68['CUOwk'](_0x3e1f76);}}function _0x424a9b(_0x3ee7a3,_0xb690f9){var _0x1853ed=_0x1e5d49,_0x4d952f={'AJmgR':function(_0x7f1520,_0x50bcaf){return _0x7f1520*_0x50bcaf;},'jYHxD':function(_0x1ee760,_0x44a15e){return _0x1ee760+_0x44a15e;},'bPoPC':function(_0x3c5e75,_0x1d5271){return _0x3c5e75+_0x1d5271;},'nlUnc':function(_0x138298,_0x5a2d7d){return _0x138298(_0x5a2d7d);}};if(_0xf663c[_0x1853ed(0x68a)]!==_0xf663c['xpFwv']){if(_0xf663c['fLnTC'](_0x3ee7a3,'speed')){if(_0x1853ed(0x18c)===_0x1853ed(0x18c)){_0xf663c['ZTWzu'](_0x2e055d,_0xb690f9&&typeof _0xb690f9['on']==='boole'+'an'?_0xb690f9['on']:_0x24f786['on'],_0xb690f9&&typeof _0xb690f9['facto'+'r']===_0x1853ed(0x333)+'r'?_0xb690f9[_0x1853ed(0x280)+'r']:_0x24f786['facto'+'r']);return;}else{var _0x534700=_0x2f6054();if(!_0x534700)return null;if(_0x31867b<-0x2267+0x8d2+0x887*0x3||_0x5e6033+_0x4d952f[_0x1853ed(0x1b0)](_0x3debcc,-0x1*-0x21e9+0x1*0xff3+-0x31d8)>_0x534700[_0x1853ed(0x51b)+_0x1853ed(0x56b)])return null;var _0x19b70e=[];for(var _0x188640=-0x5d*0x49+-0x119a*0x2+0x45*0xe5;_0x188640<_0x397e09;_0x188640++)_0x19b70e['push'](_0x534700['getFl'+'oat32'](_0x4d952f[_0x1853ed(0xc15)](_0x4d952f[_0x1853ed(0x550)](_0x52d345,_0x19d3a3),_0x4d952f[_0x1853ed(0x1b0)](_0x188640,-0x1*-0x382+0xda*0x14+-0x1486)),!![]));return _0x4320b9['ok']+=_0x4c6984,_0x19b70e;}}if(_0xf663c['lxASK'](_0x3ee7a3,_0x1853ed(0x6bd)+_0x1853ed(0x7d4)))return;var _0x91df0c=_0x15aaec(),_0x360a7c=_0xf663c[_0x1853ed(0x4b1)](_0x28247a,_0x91df0c),_0x2d1ee9=_0x430390();for(var _0x1d0bba in _0x2d1ee9)_0x360a7c[_0x1d0bba]=_0x2d1ee9[_0x1d0bba];if(!_0x4f0985){_0x4f0985=_0x360a7c,_0x586558=[],_0x1546a1(_0x1853ed(0x973)+'t',{'report':_0x4014eb()});return;}_0x586558=[];for(var _0x4e5b09 in _0x360a7c){if(_0xf663c['AhbSI'](_0x1853ed(0x769),_0x1853ed(0xbe5))){_0x2bed70['textC'+_0x1853ed(0x2bb)+'t']='v'+(_0xb8be[_0x1853ed(0xa1c)+'on']||'?');var _0x1ea4a7=_0x2563d4,_0x492c46=_0x5b04fb['versi'+'on']||'';_0x5488e6[_0x1853ed(0x426)][_0x1853ed(0x492)]=_0xf663c[_0x1853ed(0x402)](_0x492c46,_0x1ea4a7)?_0x456605:_0xf663c[_0x1853ed(0x3cc)],_0x4f6834[_0x1853ed(0x426)][_0x1853ed(0x444)+'rColo'+'r']=_0x492c46===_0x1ea4a7?_0xf663c['zOIFX']:'#ff6e'+'74';}else{var _0x28c076=_0x4f0985[_0x4e5b09],_0x40e846=_0x360a7c[_0x4e5b09];if(_0xf663c[_0x1853ed(0xa5d)](_0x28c076,_0x40e846))_0x586558[_0x1853ed(0x773)](_0xf663c['VJcBN'](_0x4e5b09+':\x20'+_0x28c076,_0xf663c[_0x1853ed(0x70f)])+_0x40e846);}}_0x4f0985=_0x360a7c,_0xf663c['AobwO'](_0x1546a1,_0x1853ed(0x973)+'t',{'report':_0xf663c[_0x1853ed(0x503)](_0x4014eb)});}else _0x4d952f[_0x1853ed(0xbd5)](_0x5929d6,![]),_0x1c267a();}var _0x1662ad=null;function _0x6de11b(){var _0x50827a=_0x1e5d49,_0x40e5aa={'VlyQj':function(_0xe7e72f,_0x4bdcae){return _0xe7e72f+_0x4bdcae;},'BZgrI':_0xf663c['adPyF'],'PCgUb':function(_0x39821c,_0x26c87b){return _0x39821c!==_0x26c87b;},'MkMSE':_0xf663c[_0x50827a(0x656)],'HUPSc':function(_0x37ed36,_0x373b21){return _0xf663c['KdvqN'](_0x37ed36,_0x373b21);},'lIJYj':_0xf663c['syUvV'],'SwVEI':'snaps'+'hot','MlhHS':function(_0x4ebd86,_0x3aac38,_0x1eccd4){return _0x4ebd86(_0x3aac38,_0x1eccd4);},'kWwUA':function(_0x3a4200,_0x595447,_0x552aaf){var _0x5f06c5=_0x50827a;return _0xf663c[_0x5f06c5(0x119)](_0x3a4200,_0x595447,_0x552aaf);}};if(_0x1662ad)return _0x1662ad;try{if(!document[_0x50827a(0x71e)]||!document['body'][_0x50827a(0x129)+_0x50827a(0x3e9)+'d'])return null;if(!document['getEl'+'ement'+_0x50827a(0x520)](_0xf663c[_0x50827a(0xb70)])){if(_0x50827a(0xa98)!==_0x50827a(0xa98)){if(_0x2db5f0)return _0x18e187;try{if(!_0x390464[_0x50827a(0x71e)]||!_0xa802ce[_0x50827a(0x71e)][_0x50827a(0x129)+'dChil'+'d'])return null;var _0xb99c94=_0x1eabe7[_0x50827a(0xa0e)+'eElem'+'ent'](_0xf663c['slfhp']);return _0xb99c94['id']=_0x50827a(0x6ca)+_0x50827a(0x425)+'es',_0xb99c94[_0x50827a(0x426)][_0x50827a(0x9ce)+'xt']=_0xf663c['djwXV'],_0x459fcb[_0x50827a(0x71e)][_0x50827a(0x129)+'dChil'+'d'](_0xb99c94),_0x447ba6={'cv':_0xb99c94},_0x17f3c4;}catch(_0xe7e695){return null;}}else{var _0x4a1dd7=document['creat'+_0x50827a(0x7c6)+_0x50827a(0x857)](_0xf663c['IWOpa']);_0x4a1dd7['id']=_0xf663c[_0x50827a(0xb70)],_0x4a1dd7[_0x50827a(0x93f)+'onten'+'t']=_0x50827a(0x46a)+'ra-sw'+'-hud{'+_0x50827a(0x6cb)+_0x50827a(0x2e8)+'l}',(document[_0x50827a(0x6d9)]||document[_0x50827a(0x27f)+_0x50827a(0x8d6)+_0x50827a(0x71d)])[_0x50827a(0x129)+'dChil'+'d'](_0x4a1dd7);}}var _0x282c6f=document[_0x50827a(0xa0e)+_0x50827a(0x7c6)+_0x50827a(0x857)]('div');_0x282c6f['id']='sakur'+_0x50827a(0x2f6)+'hud',_0x282c6f[_0x50827a(0x426)]['cssTe'+'xt']=_0xf663c['mYDYS'](_0xf663c['JNYyS']('posit'+_0x50827a(0x248)+'ixed;'+'left:'+_0x50827a(0x392)+_0x50827a(0x963)+_0x50827a(0x553)+_0x50827a(0x70b)+_0x50827a(0xa46)+_0x50827a(0x85a)+'647;d'+'ispla'+'y:fle'+_0x50827a(0x50b)+'x-dir'+_0x50827a(0xb08)+'n:col'+'umn;g'+'ap:4p'+'x;',_0xf663c['CPSWW'])+_0xf663c[_0x50827a(0x94d)],_0xf663c[_0x50827a(0x621)]);var _0x9e0767='<div\x20'+'data-'+_0x50827a(0xc31)+_0x50827a(0x989)+_0x50827a(0x673)+'color'+_0x50827a(0xbd8)+_0x50827a(0x127)+'ax-wi'+'dth:2'+'90px;'+'\x22></d'+_0x50827a(0x177);_0x282c6f['inner'+'HTML']=_0xf663c['WAscL'](_0xf663c['QQeau'](_0xf663c['kOKQE'](_0xf663c['bzVDT'](_0xf663c[_0x50827a(0x10a)](_0xf663c['VuPGF']('<div\x20'+'data-'+_0x50827a(0x24d)+'r\x22\x20st'+'yle=\x22'+'displ'+'ay:fl'+'ex;ga'+_0x50827a(0x4d9)+_0x50827a(0x793)+'n-ite'+_0x50827a(0xa0b)+_0x50827a(0x258)+_0x50827a(0x851)+_0x50827a(0xa7e)+'wrap;'+'max-w'+_0x50827a(0x72f)+_0x50827a(0x6d1)+_0x50827a(0xa25)+(_0x50827a(0xa33)+_0x50827a(0x673)+'color'+':')+_0x3349a7+('\x22>sak'+_0x50827a(0xaf1)+'b>'),_0xf663c[_0x50827a(0x9c2)])+_0xf663c[_0x50827a(0x358)]+_0xf663c[_0x50827a(0x1f9)]+_0x3349a7,';\x22>'),_0x50827a(0x30e)+'\x20data'+_0x50827a(0x630)+_0x50827a(0xc66)+'yle=\x22'+_0x50827a(0x492)+_0x50827a(0x2c7)+'9c9;m'+'in-wi'+_0x50827a(0x2c1)+_0x50827a(0x8b2)+_0x50827a(0x693)+'</spa'+'n>')+(_0x50827a(0x9c4)+_0x50827a(0x995)+_0x50827a(0x194)+_0x50827a(0x543)+_0x50827a(0xa1d)+'e=\x22ba'+_0x50827a(0xa6b)+_0x50827a(0xb1d)+'ransp'+_0x50827a(0x11d)+';bord'+'er:1p'+_0x50827a(0x1d8)+_0x50827a(0x803)+_0x50827a(0xa05)+_0x50827a(0xb26)+',177,'+_0x50827a(0x4d0)),_0xf663c[_0x50827a(0x415)])+_0xf663c[_0x50827a(0x1c7)]+('color'+_0x50827a(0x47b)+_0x50827a(0xc86)+_0x50827a(0x3eb)+'-radi'+'us:6p'+'x;pad'+_0x50827a(0x9d2)+_0x50827a(0x12a)+_0x50827a(0xc83)+_0x50827a(0x22f)+'point'+_0x50827a(0xad7)+'nt:in'+_0x50827a(0x332)+';\x22>Sn'+_0x50827a(0x153)+'utton'+'>')+_0xf663c['bShAp']+_0xf663c[_0x50827a(0xb04)]+(_0x50827a(0xb84)+'>'),_0xf663c[_0x50827a(0x8d2)]),_0x50827a(0x3f1)+_0x50827a(0x687)+'a=\x22st'+_0x50827a(0x989)+'yle=\x22'+'color'+_0x50827a(0xbd8)+_0x50827a(0x127)+'ax-wi'+_0x50827a(0x6d4)+_0x50827a(0x810)+_0x50827a(0x513)+'iv>'),_0x282c6f[_0x50827a(0x605)+_0x50827a(0x353)]=_0x9e0767;var _0x36314e=function(_0x3b21b3){var _0x7ea764=_0x50827a;return _0x282c6f[_0x7ea764(0x431)+'Selec'+'tor'](_0x40e5aa['VlyQj']('[data'+'-a=\x22'+_0x3b21b3,'\x22]'));},_0x2ab98f=_0xf663c['oNoZk'](_0x36314e,'st'),_0xf2c46d=_0xf663c['ZLcqN'](_0x36314e,'st2'),_0x4b847f=_0x36314e('sp'),_0x2c82c6=_0xf663c[_0x50827a(0x2c4)](_0x36314e,'fx'),_0x1402a8=_0x36314e('fv'),_0x4bc179=_0x36314e('bar');if(_0x4b847f)_0x4b847f[_0x50827a(0xa60)+'ck']=function(){var _0x490d4c=_0x50827a,_0xd710e6={'HfftY':function(_0x2ade40,_0x5d867e){var _0x47fe88=_0x49fc;return _0x40e5aa[_0x47fe88(0x95d)](_0x2ade40,_0x5d867e);},'CHUUo':_0x490d4c(0xc81),'zPKSn':function(_0x82df5d,_0x604dd){return _0x82df5d+_0x604dd;},'AKfHj':function(_0x581b2b,_0x25ce2a){return _0x581b2b!==_0x25ce2a;},'qAQhQ':_0x40e5aa[_0x490d4c(0x210)]};_0x40e5aa[_0x490d4c(0x6c9)](_0x40e5aa[_0x490d4c(0xb0b)],_0x40e5aa[_0x490d4c(0xb0b)])?_0x2ad4fb['lg']['textC'+'onten'+'t']=_0xd710e6[_0x490d4c(0x126)](_0xd710e6['HfftY'](_0x490d4c(0xc3c),_0x59778b)+_0xd710e6['CHUUo']+_0x4f36cc['round'](_0x4b5d19['span'])+'m'+(_0x1b002a[_0x490d4c(0x5d8)]?_0xd710e6['zPKSn'](_0x490d4c(0x13a)+'v\x20',_0x424f64[_0x490d4c(0x1d4)](_0xa0a998['fov']))+'°':''),_0xd710e6['AKfHj'](_0x8387c5,null)?_0xd710e6[_0x490d4c(0x281)]+_0xa590a9:''):_0x2e055d(!_0x24f786['on'],_0x24f786[_0x490d4c(0x280)+'r']);};if(_0x2c82c6)_0x2c82c6[_0x50827a(0xa19)+'ut']=function(){var _0x1dd2ad=_0x50827a,_0x507948={'gQGEg':function(_0x487d33,_0x4f9913){var _0x1ef084=_0x49fc;return _0x40e5aa[_0x1ef084(0xb5f)](_0x487d33,_0x4f9913);}};'OMXNm'!==_0x40e5aa[_0x1dd2ad(0x14e)]?_0x2e055d(_0x24f786['on'],parseFloat(_0x2c82c6[_0x1dd2ad(0xaf8)])||0x7fb+-0x31*-0x4c+0x3c1*-0x6):_0x4ab1c8(_0x5e497f['on'],_0x507948[_0x1dd2ad(0x9ef)](_0x5165f5,_0x3d1d04[_0x1dd2ad(0xaf8)])||0x123*-0x1+-0x457+0x57b);};if(_0xf663c[_0x50827a(0x405)](_0x36314e,'snap'))_0xf663c['KdvqN'](_0x36314e,_0x50827a(0x2ed))[_0x50827a(0xa60)+'ck']=function(){var _0x420fe8=_0x50827a;_0x424a9b(_0x40e5aa[_0x420fe8(0x146)]);};var _0x16b4a9=_0x36314e(_0x50827a(0x44b));if(_0x16b4a9)_0x16b4a9[_0x50827a(0xa60)+'ck']=function(){var _0x2dc90d=_0x50827a;if(!_0x393b6f['on'])_0x40e5aa[_0x2dc90d(0x76c)](_0x2d111d,!![],![]);else{if(_0x393b6f['boxes'])_0x2d111d(![],![]);else{if(_0x5c8f9b())_0x2d111d(!![],!![]);else _0x40e5aa['kWwUA'](_0x2d111d,![],![]);}}};if(_0xf663c['JrXFJ'](_0x36314e,_0x50827a(0x881)))_0xf663c['hYWgY'](_0x36314e,_0xf663c['tNfJi'])['oncli'+'ck']=function(){var _0x4cb4e3=_0x50827a;if(!_0x4bc179)return;var _0x86948e=_0xf663c['fqnGH'](_0x4bc179[_0x4cb4e3(0x426)][_0x4cb4e3(0xa20)+'ay'],_0xf663c['Cetts']);_0x4bc179[_0x4cb4e3(0x426)][_0x4cb4e3(0xa20)+'ay']=_0x86948e?'':_0x4cb4e3(0x883),_0x36314e(_0x4cb4e3(0x881))[_0x4cb4e3(0x93f)+_0x4cb4e3(0x2bb)+'t']=_0x86948e?'-':'+';};return document[_0x50827a(0x71e)][_0x50827a(0x129)+_0x50827a(0x3e9)+'d'](_0x282c6f),_0x1662ad={'el':_0x282c6f,'st':_0x2ab98f,'st2':_0xf2c46d,'sp':_0x4b847f,'fx':_0x2c82c6,'fv':_0x1402a8,'esp':_0x16b4a9},_0x1662ad;}catch(_0x182b02){return console['warn']('%c[sa'+_0x50827a(0x484)+'\x20in-f'+_0x50827a(0x75a)+'HUD\x20d'+_0x50827a(0xbdc)+'ed',_0x50827a(0x492)+':'+_0x3349a7,_0x182b02),null;}}function _0x5c8f9b(){var _0x17b8d5=_0x1e5d49;try{if(_0xf663c['eYhHu'](_0x17b8d5(0x870),_0xf663c['GwtHF'])){var _0x554891=_0xf663c['tsVqw'](_0x283cea);return!!(_0x554891&&_0x518f83[_0x17b8d5(0x3f6)+_0x17b8d5(0x801)]);}else{_0xd36b68(_0x2d59b2[_0x17b8d5(0x2ca)]);try{var _0x3033fc=_0x58bd96[_0x17b8d5(0x605)+'Heigh'+'t']||0x1525+0x6*0x23+0x173*-0xd;if(_0x3033fc<0x810+-0x2685+0x20e1)_0x2b116d(![]);}catch(_0x2d1e07){}}}catch(_0x219948){return![];}}function _0x573769(){var _0x1cfe95=_0x1e5d49;try{var _0x399a8a=_0xf663c['QHhUo'][_0x1cfe95(0x438)]('|'),_0x2383c6=0x951+-0x330+-0x621;while(!![]){switch(_0x399a8a[_0x2383c6++]){case'0':if(!_0x1066d8)return;continue;case'1':if(_0x393b6f['boxes']&&!_0x5c8f9b())_0x393b6f[_0x1cfe95(0x5d8)]=![];continue;case'2':var _0x1066d8=_0x1662ad&&_0x1662ad['esp'];continue;case'3':_0x1066d8['style'][_0x1cfe95(0x40f)+_0x1cfe95(0x1d4)]=_0x393b6f['on']?_0x3349a7:_0xf663c[_0x1cfe95(0x3ac)];continue;case'4':if(_0xf663c[_0x1cfe95(0x977)](_0x5216f2,_0x1066d8[_0x1cfe95(0x93f)+_0x1cfe95(0x2bb)+'t']))_0x1066d8[_0x1cfe95(0x93f)+_0x1cfe95(0x2bb)+'t']=_0x5216f2;continue;case'5':_0x1066d8[_0x1cfe95(0x426)][_0x1cfe95(0x492)]=_0x393b6f['on']?_0xf663c['uVFtV']:_0x1cfe95(0x164)+'f5';continue;case'6':var _0x5216f2=!_0x393b6f['on']?_0xf663c[_0x1cfe95(0x702)]:_0x393b6f[_0x1cfe95(0x5d8)]?_0x1cfe95(0x863)+_0x1cfe95(0x7e0):_0xf663c[_0x1cfe95(0x6b9)];continue;}break;}}catch(_0x15066e){}}function _0x2d111d(_0x290898,_0x232e06){var _0x5b5946=_0x1e5d49,_0x5df6d0={'Seoex':function(_0xad149e,_0x4a106d,_0x35f8b9,_0x4a9164,_0x83a9ed){return _0xad149e(_0x4a106d,_0x35f8b9,_0x4a9164,_0x83a9ed);},'wlchA':function(_0x3ec7da,_0x55fc64){return _0x3ec7da+_0x55fc64;},'ThlkR':function(_0x59d609,_0x455a14){return _0x59d609-_0x455a14;}};if(_0xf663c[_0x5b5946(0xbaf)]===_0x5b5946(0x828)){_0x393b6f['on']=!!_0x290898,_0x393b6f['boxes']=!!_0x232e06,_0x573769();try{var _0xf0e53=_0x407f6a();if(_0xf0e53&&_0xf0e53['el'])_0xf0e53['el']['style'][_0x5b5946(0xa20)+'ay']=_0x393b6f['on']?'':_0x5b5946(0x883);var _0x4628ef=_0x18f7d4;if(_0x4628ef&&_0x4628ef['cv'])_0x4628ef['cv']['style']['displ'+'ay']=_0x393b6f['on']&&_0x393b6f[_0x5b5946(0x5d8)]?'':_0xf663c[_0x5b5946(0x6ce)];}catch(_0x551334){}}else{var _0x2fd41c=_0x5df6d0[_0x5b5946(0x82c)](_0x339f03,_0x1b06d6['eye'],[_0x521966[_0x5b5946(0x560)][-0x1d9*0x13+-0xe*0x77+0x299d],_0x3f1884[_0x5b5946(0x560)][0x29c*0x8+-0x859*0x1+-0x643*0x2]+(-0x3d0+-0x675+-0x1d*-0x5b),_0x5df6d0['wlchA'](_0x39a297['eye'][0x1a3b+-0x2122*0x1+-0x1*-0x6e9],-0x2c7*0x9+-0x54*-0x2+0x4f*0x4f)],-0x2c*0x2e+0x19a8+-0xdd8,0x1f*0x1b+0x9df+0xc*-0xc5);if(_0x2fd41c)_0x174dd3=_0x2fd41c['y']/(-0x1*-0x22f7+0x74f*-0x3+-0x922);var _0xedc8c4=_0x20e6ea(_0xfecde3[_0x5b5946(0x560)],[_0x12f4c6[_0x5b5946(0x560)][-0xf17+-0x1d84*0x1+-0x13*-0x259],_0x5df6d0[_0x5b5946(0x6dd)](_0x223ec[_0x5b5946(0x560)][0x1bde+0x23d7+-0x3fb4],-0x353+-0x4*-0x48d+-0xed7),_0x5df6d0[_0x5b5946(0x4e8)](_0x50b6e8['eye'][-0x2225*0x1+0x1ac5+0x3f*0x1e],0x1*0x9db+0x1*-0x7cd+-0x204)],0x46*0x5d+0x2290*0x1+-0x12b2*0x3,0x1431+-0x11*-0x1c1+-0x2e1a);if(_0xedc8c4)_0x221b35=_0xedc8c4['y']/(-0x4a0+-0x1d*0x92+0x1912);}}var _0x5c42e6=0x1380+0xa2d+-0x1dab;function _0x2e055d(_0x173f79,_0x28eca7){var _0x28dfa4=_0x1e5d49;if(_0xf663c[_0x28dfa4(0x432)]!==_0xf663c[_0x28dfa4(0xb3f)]){var _0x21fb03=_0x24f786['on'];_0x24f786['on']=!!_0x173f79;_0x24f786['on']&&!_0x21fb03&&(_0x28eca7===undefined||_0x28eca7===null||_0xf663c[_0x28dfa4(0x837)](Number(_0x28eca7),-0x12e7+0x1322+0x3a*-0x1))&&('Cfqsj'!==_0xf663c['UrsWV']?_0x269a51[_0x28dfa4(0x145)]['enabl'+'ed']=![]:_0x28eca7=_0x5c42e6);_0x24f786['facto'+'r']=Math[_0x28dfa4(0x898)](_0x24f786['max'],Math[_0x28dfa4(0x86e)](_0x24f786[_0x28dfa4(0x898)],Number(_0x28eca7)||-0xd9c+-0x7ea+-0x21*-0xa7));if(!_0x24f786['on'])_0x282826={};var _0x9e640=_0x6de11b();if(_0x9e640){if(_0x9e640['sp']){if(_0xf663c[_0x28dfa4(0xaff)](_0xf663c[_0x28dfa4(0x5a8)],_0x28dfa4(0x5d6)))_0x9e640['sp'][_0x28dfa4(0x93f)+_0x28dfa4(0x2bb)+'t']=_0x24f786['on']?_0x28dfa4(0x5e3)+_0x28dfa4(0xc69):'Speed'+_0x28dfa4(0xc80),_0x9e640['sp'][_0x28dfa4(0x426)][_0x28dfa4(0x40f)+'round']=_0x24f786['on']?_0x3349a7:_0x28dfa4(0x6f5)+_0x28dfa4(0x6b3)+'t',_0x9e640['sp'][_0x28dfa4(0x426)][_0x28dfa4(0x492)]=_0x24f786['on']?'#2a0f'+'1b':'#f7ee'+'f5';else return _0x1e313d[_0x28dfa4(0x9f1)];}if(_0x9e640['fx'])_0x9e640['fx']['value']=String(_0x24f786[_0x28dfa4(0x280)+'r']);if(_0x9e640['fv'])_0x9e640['fv']['textC'+_0x28dfa4(0x2bb)+'t']=_0xf663c['BYzFs'](_0x24f786['facto'+'r']['toFix'+'ed'](0x1*0x1bbf+-0x1554*0x1+-0x1*0x66a),'x');}}else return null;}function _0x58bb06(_0xe65b47){var _0x118dff=_0x1e5d49;if('vrJIi'!=='vrJIi')_0x4d3e11[_0x118dff(0x900)+_0x118dff(0xbd2)]=0x1c3*-0x1+0x1253*0x2+-0x22e2,_0xcae459[_0x118dff(0x361)](_0xf663c[_0x118dff(0x284)](_0xf663c[_0x118dff(0xb6c)](_0xf663c[_0x118dff(0xa4c)](_0xf663c['UBjtF'](_0xf663c['VSVhH'],_0x4a6b90['lengt'+'h']),_0xf663c[_0x118dff(0x1fa)]),_0x44de43[_0x118dff(0xc52)+'ed'](0x3c*0x95+0x1*0x1cf9+-0x3fe3))+_0xf663c['zagLn']+_0x5ac515['toFix'+'ed'](-0x2*0x100b+0x4*-0x320+0x2c98),_0x118dff(0x424)+'n=')+_0x5bf6c9+('\x20samp'+'le=')+_0x2fdc51['strin'+'gify'](_0x55126b['slice'](0x13fd*0x1+-0x1*-0x21a1+-0x359e,-0x221*0x1+-0x4*-0xfd+0x5*-0x5d)));else{var _0x5d9989=_0x6de11b();if(!_0x5d9989||!_0x5d9989['st'])return;try{if(_0xf663c['pJvwb'](_0xf663c[_0x118dff(0x8b3)],'QqAVK')){if(!_0x411cf8()&&!_0x1cac27){if(_0x5d9989['el'])_0x5d9989['el'][_0x118dff(0x426)]['displ'+'ay']=_0xf663c[_0x118dff(0x6ce)];return;}if(_0x5d9989['el'])_0x5d9989['el'][_0x118dff(0x426)][_0x118dff(0xa20)+'ay']='';var _0x1ff273=Object[_0x118dff(0x854)](_0xe65b47&&_0xe65b47['insta'+_0x118dff(0xb01)]||{})[_0x118dff(0x68d)+'h'],_0x3758d4=_0xe65b47&&_0xe65b47[_0x118dff(0x44b)]||null,_0x1824b5=_0x3758d4?_0x3758d4[_0x118dff(0xa80)+_0x118dff(0x115)]||0xeb8+-0x19c0+0xb08:0x3d7*-0x1+0xb8f+-0x98*0xd,_0x4b7899=_0x3758d4?_0x3758d4['botCo'+_0x118dff(0x2a2)]||0x13a2+-0x6a0+-0x681*0x2:0x1dd4+-0x173a*-0x1+-0x350e,_0x16ccd4=_0x548523?(_0x548523['buffe'+'r']['byteL'+'ength']/(-0x1*0xc713d+0x10459d+-0x3e5*-0x320))[_0x118dff(0xc52)+'ed'](0x1ae9+0x162e+-0x3117)+'MB':_0xf663c[_0x118dff(0x319)],_0x476938=_0xf663c[_0x118dff(0x10a)](_0xf663c[_0x118dff(0x5a3)](_0xf663c[_0x118dff(0x348)]('v'+(_0xe65b47&&_0xe65b47['versi'+'on']||_0x1556cc)+(_0x118dff(0x736)+_0x118dff(0x804))+(_0xe65b47&&_0xe65b47['hooks'+_0x118dff(0x85e)+'ed']||-0x1*-0xc52+0x21e2+-0x2e34)+'/',_0xe65b47&&_0xe65b47[_0x118dff(0x7f2)+_0x118dff(0x20f)]||-0xa5*-0x1a+0x5e*-0x60+0x127e)+(_0x118dff(0x1b6)+'s\x20')+_0x1ff273+(_0x118dff(0x933)+'\x20'),_0x16ccd4),_0xf663c['dgOKF'])+_0x550940;_0x5d9989['st'][_0x118dff(0x93f)+_0x118dff(0x2bb)+'t']=_0x476938;var _0x446e3f=_0x5d9989['st2'];if(_0x446e3f){if(_0xf663c[_0x118dff(0x5d7)]!==_0xf663c[_0x118dff(0x3fa)])_0x446e3f[_0x118dff(0x93f)+_0x118dff(0x2bb)+'t']=_0x1824b5>-0x623*0x6+0x86d*-0x3+-0x1*-0x3e19?_0xf663c[_0x118dff(0x843)]+_0x1824b5+(_0x4b7899?_0xf663c[_0x118dff(0x25f)]('\x20+\x20',_0x4b7899)+_0xf663c['ifEWP']:'')+(_0x3758d4&&_0x3758d4['camer'+'a']?_0xf663c[_0x118dff(0x2fa)](_0xf663c['CtEmE'],_0x3758d4['camer'+'aFrom']):_0x118dff(0x816)+'\x20-'):_0xf663c['OQMMd']+(_0x3758d4&&_0x3758d4['camer'+'a']?_0x3758d4[_0x118dff(0x53a)+_0x118dff(0x912)]:'-'),_0x446e3f['style']['color']=_0x1824b5>-0x1f*0x116+-0x147b*0x1+-0x1*-0x3625?_0xf663c[_0x118dff(0x947)]:_0xf663c[_0x118dff(0x574)];else{var _0x590759=[_0x118dff(0x92b)+_0x118dff(0xc5e)+_0x118dff(0x13f),_0xf663c['YgzWB'],_0x118dff(0x5f7),_0xf663c['CCPPA']],_0x4e79c8={};for(var _0x547086=0xca9*-0x1+-0x2032+-0x1*-0x2cdb;_0x547086<_0x590759['lengt'+'h'];_0x547086++){var _0x5b4b87=_0x590759[_0x547086],_0x581ba5=typeof _0x5164dc[_0x5b4b87];_0x4e79c8[_0x5b4b87]=_0x581ba5==='undef'+_0x118dff(0x147)?_0xf663c['lFIsY']:_0x581ba5;}var _0x1484d6=_0xf663c[_0x118dff(0x3e4)](_0x18c4af);_0x4e79c8['gameS'+_0x118dff(0x461)]=_0x4f4ca3['sourc'+'e'];try{_0x4e79c8[_0x118dff(0x940)+_0x118dff(0x94c)]=!!(_0x1484d6&&_0x1484d6[_0x118dff(0x441)+'e']),_0x4e79c8[_0x118dff(0xacb)+'8']=!!(_0x1484d6&&_0x1484d6[_0x118dff(0x441)+'e']&&_0x1484d6[_0x118dff(0x441)+'e'][_0x118dff(0xa81)+'8']),_0x4e79c8[_0x118dff(0xaa9)+'ytes']=_0x4e79c8[_0x118dff(0xacb)+'8']?_0x1484d6[_0x118dff(0x441)+'e'][_0x118dff(0xa81)+'8'][_0x118dff(0x68d)+'h']:0x1*-0x12a3+0x9cb+0x8d8;}catch(_0x4a2663){_0x4e79c8[_0x118dff(0x940)+_0x118dff(0x94c)]=![],_0x4e79c8[_0x118dff(0xacb)+'8']=![],_0x4e79c8[_0x118dff(0xaa9)+_0x118dff(0x60c)]=-0x1f24+0x4dc*-0x6+-0x44*-0xe3;}return _0x4e79c8['value'+_0x118dff(0xbed)+'er']=typeof _0x12c2d9,_0x4e79c8;}}}else{var _0x2b9d4e=_0x5ab168[0x1661+0x5c9*0x1+-0x1c29][_0x118dff(0x50a)]();if(_0x2b9d4e)_0x55f968=_0x2b9d4e;}}catch(_0x446d50){}}}window[_0x1e5d49(0xc9a)+'entLi'+_0x1e5d49(0x825)+'r'](_0x1e5d49(0x468)+'wn',function(_0x26afe0){var _0x337e32=_0x1e5d49,_0x52b8eb={'XOXkb':_0xf663c[_0x337e32(0x3a8)],'oiiTX':_0x337e32(0x651)+'2vw,6'+_0x337e32(0xb17),'qdhYV':'rgba('+'21,12'+_0x337e32(0x134)+'9)'};if(_0x337e32(0x61b)!==_0x337e32(0x61b))_0x3672ee['preve'+'ntDef'+_0x337e32(0x694)]();else{if(!_0x26afe0)return;try{if(_0x26afe0['code']==='F9'){_0x26afe0[_0x337e32(0x944)+'ntDef'+'ault'](),_0x424a9b(_0xf663c['rkRsr']);return;}if(_0x26afe0[_0x337e32(0x849)]==='F7'){_0x26afe0['preve'+_0x337e32(0x678)+_0x337e32(0x694)](),_0xf663c['mpCWl'](_0x2e055d,!_0x24f786['on'],_0x24f786[_0x337e32(0x280)+'r']);return;}if(_0x26afe0[_0x337e32(0x849)]==='F8'){_0x26afe0[_0x337e32(0x944)+_0x337e32(0x678)+'ault'](),_0xf663c[_0x337e32(0x5e4)](_0x2e055d,_0x24f786['on'],_0xf663c[_0x337e32(0x580)](_0x24f786['facto'+'r'],0x22a8*0x1+-0x1639+0xc6f*-0x1+0.5));return;}if(_0xf663c['bMURI'](_0x26afe0[_0x337e32(0x849)],'F6')){if(_0xf663c[_0x337e32(0x7b8)]('UhEPf',_0xf663c[_0x337e32(0x159)])){if(_0x4031e3)_0x42c5be[_0x337e32(0x426)][_0x337e32(0xa20)+'ay']=_0x449235?'':_0x337e32(0x883);if(_0x1b676b)_0x15e189[_0x337e32(0x93f)+_0x337e32(0x2bb)+'t']=_0xd9765?_0x337e32(0x246):_0x52b8eb['XOXkb'];_0x21536f[_0x337e32(0x426)]['width']=_0x12b29b?_0x52b8eb[_0x337e32(0x567)]:_0x337e32(0xbab),_0x106023[_0x337e32(0x426)]['backg'+_0x337e32(0x1d4)]=_0x50321e?_0x337e32(0xa9d)+'1d':_0x52b8eb[_0x337e32(0xa8a)];}else{_0x26afe0[_0x337e32(0x944)+_0x337e32(0x678)+'ault'](),_0x2e055d(_0x24f786['on'],_0xf663c[_0x337e32(0x51d)](_0x24f786['facto'+'r'],-0x1*0x22cd+0xca4+0x1629+0.5));return;}}if(_0xf663c['fqnGH'](_0x26afe0['code'],_0xf663c[_0x337e32(0x627)])){_0x26afe0[_0x337e32(0x944)+'ntDef'+_0x337e32(0x694)](),_0xf663c[_0x337e32(0xabf)](_0x3174a8,!_0xfded1e['open']);return;}if(_0x26afe0[_0x337e32(0x849)]===_0x337e32(0xc79)+'etRig'+'ht'){_0x26afe0[_0x337e32(0x944)+'ntDef'+'ault'](),_0x2a53c9['fov']=Math['min'](-0x103e+0x1951*0x1+-0x887,_0xf663c['WAQIK'](_0x2a53c9['fov'],0x1*-0x729+0x7*0x320+-0x3*0x4e7)),_0x43fb3e();return;}if(_0xf663c['FbdQR'](_0x26afe0[_0x337e32(0x849)],_0xf663c['EaIvm'])){_0x26afe0['preve'+_0x337e32(0x678)+_0x337e32(0x694)](),_0x2a53c9[_0x337e32(0x9f1)]=Math[_0x337e32(0x86e)](-0x2014+-0x1*-0x21b5+0x81*-0x3,_0xf663c[_0x337e32(0x189)](_0x2a53c9[_0x337e32(0x9f1)],-0x208f*-0x1+-0x20d3+0x46)),_0x43fb3e();return;}}catch(_0x73243){}}},!![]);var _0x393b6f={'on':!![],'span':0x50,'boxes':![]};function _0xf24c93(){var _0x2dfedb=_0x1e5d49,_0x3b680d={'RcUUR':function(_0x42d27b,_0x10988f){return _0x42d27b||_0x10988f;},'GUeGC':function(_0x2e80d3,_0x168450){return _0x2e80d3===_0x168450;}},_0x4141b4=_0x49dde4[_0x2dfedb(0x9db)+'nNetw'+'orkSy'+'nc']||{},_0x52654e=Object[_0x2dfedb(0x854)](_0x4141b4);for(var _0x5bf845=-0x52d*0x1+-0x55*-0x34+-0x1*0xc17;_0xf663c['ztdzN'](_0x5bf845,_0x52654e[_0x2dfedb(0x68d)+'h']);_0x5bf845++){var _0x54a78d=_0x4141b4[_0x52654e[_0x5bf845]][_0x2dfedb(0x4a6)],_0x22c99e=_0x19598d(_0x54a78d+(0x446*-0x2+-0x14de+0x1d9a),_0x2dfedb(0x34e));if(!_0x22c99e)continue;var _0x4e2629=_0x46fb0b['Mouse'+_0x2dfedb(0x76a)]||[],_0x190278={'mouseLook':'0x'+(_0x22c99e>>>0x243c+0x2518+-0x4954)[_0x2dfedb(0x10f)+'ing'](0x6f4*0x5+0x4*0x673+0x40*-0xf2),'floats':{},'camera':null,'vec2':null};for(var _0x598167=-0x1d5e+0xc99+0x10c5;_0x598167<_0x4e2629[_0x2dfedb(0x68d)+'h'];_0x598167++){if('OPgLi'!=='OPgLi')try{if(_0x3b680d['RcUUR'](!_0x31e525,!_0x45232b))return null;var _0x3d84aa=new _0x5b9706(_0x47aee1)[_0x2dfedb(0xc4f)+_0x2dfedb(0x5b4)+'me']();return _0x3b680d['GUeGC'](_0x3d84aa,_0x4e6852)?null:_0x3d84aa;}catch(_0x1a7cfc){return null;}else{if(_0x4e2629[_0x598167][-0x27*0x1+0x4*-0x7a+0x210]!==_0x2dfedb(0xb66))continue;_0x190278[_0x2dfedb(0x6e6)+'s'][_0xf663c['WAQIK']('0x',_0x4e2629[_0x598167][0xb5*0x7+0x1c2+-0x6b5]['toStr'+'ing'](-0x1f78+0xf*-0x287+-0x265*-0x1d))]=_0x19598d(_0xf663c['GVoEh'](_0x22c99e,_0x4e2629[_0x598167][-0x7bb*0x1+-0x15d7+0x1d92]),_0x2dfedb(0xb66));}}var _0x25b568=_0xf663c[_0x2dfedb(0xa39)](_0x19598d,_0x22c99e+(-0x8c3*-0x4+-0x18a1+-0xa3f),'u32');if(_0x25b568)_0x190278[_0x2dfedb(0x53a)+'a']='0x'+_0xf663c[_0x2dfedb(0x4e5)](_0x25b568,0x1*-0x180f+-0x18*-0x19f+-0xed9)['toStr'+_0x2dfedb(0x907)](-0x8c1+-0x447+0xd18);var _0x2f484a=_0x42e9d0(_0x22c99e,-0x1be9+-0x756+0x2387,-0x19fb+0xd0a*0x1+-0x3*-0x451);if(_0x2f484a)_0x190278[_0x2dfedb(0xb32)]=_0x2f484a;return _0x190278;}return null;}var _0x5744a3='sakur'+'a-sw-'+_0x1e5d49(0x9f1),_0x2a53c9={'pitch':null,'yaw':null,'fov':0x5a,'known':![]};try{var _0x42f97a=localStorage[_0x1e5d49(0x264)+'em'](_0x5744a3);if(_0x42f97a)_0x2a53c9[_0x1e5d49(0x9f1)]=Math[_0x1e5d49(0x898)](0x2068+0x8ce+-0x28aa,Math['max'](0x1a03*-0x1+-0x25c1+-0x3fe2*-0x1,parseFloat(_0x42f97a)||0xa8d*-0x2+0x24*-0x58+-0x21d4*-0x1));}catch(_0xb510a5){}function _0x43fb3e(){try{localStorage['setIt'+'em'](_0x5744a3,String(_0x2a53c9['fov']));}catch(_0x2d96d7){}}var _0x5db29c='sakur'+_0x1e5d49(0x2f6)+_0x1e5d49(0xb5e)+_0x1e5d49(0x494),_0x5bfa88=![];try{localStorage[_0x1e5d49(0x264)+'em'](_0x5db29c)!==null&&(localStorage['remov'+_0x1e5d49(0x35c)](_0x5db29c),_0x5bfa88=!![]);}catch(_0x87f56a){}var _0x1af736=0x16*-0xd5+-0x168a+0x2900,_0x3873a1=0x3d+0x1*-0x1a5f+-0x2*-0xd1f,_0x1af736=0x1aaa+0xcd6+-0x13ac*0x2,_0x3873a1=-0x2*-0x13+0x9*-0x2e3+0x19f1,_0x518f83={'pitch':null,'yaw':null,'identified':![],'why':_0x1e5d49(0x4b6)+_0x1e5d49(0x63a)+_0x1e5d49(0x879)+'t','source':null,'yawGetter':null,'pitchGetter':null,'getters':[]};function _0x915444(_0x4e56a5){var _0xd46a9d=_0x1e5d49,_0xd17be7=null,_0x29512d=-0x2*-0x111d+0x5*0x5ff+-0x1567*0x3;for(var _0x3ff067 in _0x5b20f8){var _0x375cc6=_0x5b20f8[_0x3ff067];if(!_0x375cc6['hits']||_0xf663c[_0xd46a9d(0xc53)](_0x375cc6['last'],null))continue;var _0x188145=_0x19598d(_0x5f090c+_0x4e56a5,_0xd46a9d(0xb66));if(typeof _0x188145!==_0xd46a9d(0x333)+'r')continue;_0xf663c[_0xd46a9d(0xada)](Math[_0xd46a9d(0x892)](_0x375cc6['last']-_0x188145),-0xc*-0x21a+0xf15+-0x284d+0.001)&&_0x375cc6['hits']>_0x29512d&&(_0xd17be7=_0x3ff067,_0x29512d=_0x375cc6[_0xd46a9d(0x487)]);}return _0xd17be7;}function _0x1e68d4(_0x422138){var _0x4451f9=_0x1e5d49,_0x35b919=[],_0x2cc347=_0x46fb0b[_0x4451f9(0x2ac)+'Look']||[];for(var _0x75bf46 in _0x5b20f8){var _0x1675a9=_0x5b20f8[_0x75bf46];if(!_0x1675a9['hits'])continue;var _0x13f5ff=null;for(var _0x5b4c48=0x7*-0x33a+-0xbb4+0x224a;_0x5b4c48<_0x2cc347[_0x4451f9(0x68d)+'h'];_0x5b4c48++){if(_0x2cc347[_0x5b4c48][0xf48+-0x9*-0x103+-0x1*0x1862]!=='f32')continue;var _0x4ce1d7=_0x19598d(_0xf663c['WAscL'](_0x422138,_0x2cc347[_0x5b4c48][-0x1bb4+0x1f8f*0x1+0x7*-0x8d]),_0xf663c[_0x4451f9(0x5f4)]);if(_0xf663c['vcbIx'](typeof _0x4ce1d7,_0x4451f9(0x333)+'r')&&_0xf663c[_0x4451f9(0x265)](Math[_0x4451f9(0x892)](_0x4ce1d7-_0x1675a9['last']),-0x165f+-0x1241*0x1+0x28a0+0.001)){_0x13f5ff='0x'+_0x2cc347[_0x5b4c48][0xf*-0x8b+0x2*-0x50e+-0x1*-0x1241][_0x4451f9(0x10f)+_0x4451f9(0x907)](0x151b+-0x59*-0x44+-0x2caf);break;}}_0x35b919[_0x4451f9(0x773)]({'name':_0x75bf46,'value':_0x1675a9['last'],'matches':_0x13f5ff,'hits':_0x1675a9[_0x4451f9(0x487)],'set':_0x1675a9[_0x4451f9(0x30b)+'ts']?_0x1675a9[_0x4451f9(0x5c3)+'st']:null});}return _0x35b919;}function _0x283cea(){var _0x25ce71=_0x1e5d49;if('jwsto'!==_0x25ce71(0x435)){var _0x2bf4c2=_0xf24c93();if(!_0x2bf4c2||!_0x2bf4c2['mouse'+_0x25ce71(0x76a)])return _0x518f83[_0x25ce71(0x3f6)+'ified']=![],_0x518f83[_0x25ce71(0x7fe)]=_0x25ce71(0x4b6)+_0x25ce71(0x63a)+_0x25ce71(0x879)+'t',null;var _0x3a02b7=parseInt(_0x2bf4c2[_0x25ce71(0x73e)+'Look'],0xe69+0x6e3+-0x25c*0x9);if(_0x5f090c!==_0x3a02b7)_0x5f090c=_0x3a02b7;_0x518f83['gette'+'rs']=_0x1e68d4(_0x3a02b7);var _0xc935d7=_0x25a804(),_0x3df2fd=_0x915444(_0x1af736),_0xa78156=null;for(var _0x2343d8 in _0x5b20f8){if(_0xf663c['fqnGH'](_0x2343d8,_0x3df2fd))continue;var _0x4835d7=_0x5b20f8[_0x2343d8];if(!_0x4835d7[_0x25ce71(0x487)]||_0xf663c['IQzdW'](_0x4835d7[_0x25ce71(0xc68)],null))continue;if(_0x4835d7[_0x25ce71(0xc68)]>=-(-0x670+-0x2*-0xc2a+-0x118a)&&_0xf663c[_0x25ce71(0x981)](_0x4835d7['last'],0x3*-0x10c+0x81f+0x4f*-0xf)){_0xa78156=_0x2343d8;break;}}_0x518f83[_0x25ce71(0x5e8)+'tter']=_0x3df2fd,_0x518f83[_0x25ce71(0x860)+'Gette'+'r']=_0xa78156;var _0x524507,_0x1f6134;if(_0xc935d7&&_0xf663c[_0x25ce71(0xaa1)](_0xc935d7[_0x25ce71(0x860)],null))_0x1f6134=_0xc935d7[_0x25ce71(0x860)],_0x524507=_0xc935d7['yaw'],_0x518f83[_0x25ce71(0x178)+'e']=_0xf663c[_0x25ce71(0x123)](_0x25ce71(0xaf4)+'r\x20pai'+'r\x20('+_0xc935d7['order'],')');else _0x3df2fd?(_0x524507=_0x5b20f8[_0x3df2fd][_0x25ce71(0xc68)],_0x518f83[_0x25ce71(0x178)+'e']=_0x25ce71(0x5cb)+'r',_0x1f6134=_0xa78156?_0x5b20f8[_0xa78156]['last']:_0xf663c['AobwO'](_0x19598d,_0xf663c['lzQcM'](_0x3a02b7,_0x3873a1),_0xf663c[_0x25ce71(0x5f4)])):(_0x524507=_0x19598d(_0xf663c[_0x25ce71(0x299)](_0x3a02b7,_0x1af736),_0x25ce71(0xb66)),_0x1f6134=_0xf663c['wAhPr'](_0x19598d,_0xf663c[_0x25ce71(0x853)](_0x3a02b7,_0x3873a1),_0xf663c['cBCdk']),_0x518f83[_0x25ce71(0x178)+'e']='field'+_0x25ce71(0x202)+_0x25ce71(0x79e)+_0x25ce71(0x3e3));_0x518f83[_0x25ce71(0xade)+'w']=_0x524507,_0x518f83['rawPi'+_0x25ce71(0x500)]=_0x1f6134;if(_0xf663c[_0x25ce71(0x945)](typeof _0x524507,_0xf663c[_0x25ce71(0x7dd)])||!isFinite(_0x524507)||typeof _0x1f6134!==_0xf663c[_0x25ce71(0x7dd)]||!_0xf663c[_0x25ce71(0x4b1)](isFinite,_0x1f6134)){if(_0xf663c[_0x25ce71(0x896)](_0x25ce71(0x21e),'tYNHk')){if(_0x4cca7b['el'])_0x1cbb48['el']['style']['displ'+'ay']=_0xf663c['Cetts'];return;}else return _0x518f83[_0x25ce71(0x3f6)+_0x25ce71(0x801)]=![],_0x518f83[_0x25ce71(0x7fe)]=_0x25ce71(0x3d1)+_0x25ce71(0x6e6)+_0x25ce71(0x6a1)+'eadab'+'le',null;}if(_0xf663c['Dletp'](_0x1f6134,-(0x903+0x20fd+-0x2*0x14d3))||_0x1f6134>0x13*-0xdf+0x2*0xc82+-0x81d)return _0x518f83[_0x25ce71(0x3f6)+_0x25ce71(0x801)]=![],_0x518f83[_0x25ce71(0x7fe)]=_0xf663c['YboJE']('pitch'+'\x20'+Math['round'](_0x1f6134),_0xf663c[_0x25ce71(0x1ab)]),null;return _0x518f83['why']='',_0x518f83['ident'+_0x25ce71(0x801)]=!![],_0x518f83[_0x25ce71(0x860)]=_0x1f6134,_0x518f83[_0x25ce71(0x481)]=_0x524507,_0x518f83;}else{var _0x3dbd04=_0x25c627();return _0x3dbd04&&_0x3dbd04[_0x25ce71(0x5e1)]?_0x3dbd04['feet'][0x18bc+0xdad+-0x1334*0x2]:null;}}function _0x2f8cc6(_0x40753f,_0x5bc46f,_0x3193a4,_0x79e53e){var _0x5a7213=_0x1e5d49,_0x4e11aa=_0xf663c[_0x5a7213(0xc38)](_0x283cea);if(!_0x4e11aa)return null;var _0x14d7fe=_0xf663c[_0x5a7213(0x8b6)](_0xf663c[_0x5a7213(0x9e2)](_0x4e11aa[_0x5a7213(0x860)],Math['PI']),-0x10cb*0x2+-0x1*-0x1813+-0x20b*-0x5),_0x210709=_0x4e11aa['yaw']*Math['PI']/(0x255c+-0x1f82+0x2*-0x293),_0x5de7ef=Math['cos'](_0x14d7fe),_0x500eae=Math[_0x5a7213(0x4e3)](_0x210709)*_0x5de7ef,_0x37f885=-Math['sin'](_0x14d7fe),_0x2b41ae=Math[_0x5a7213(0x14d)](_0x210709)*_0x5de7ef,_0x3782bd=_0x2b41ae,_0x27caaf=0x195d*-0x1+0xdff*0x2+0x2a1*-0x1,_0x1b7b5e=-_0x500eae,_0xc284a9=_0x5bc46f[-0x21*-0x64+-0x23a*0x2+0x168*-0x6]-_0x40753f[0x1ec6+-0xbfb*0x1+-0x12cb],_0x4ce8dc=_0x5bc46f[-0x137*-0x12+0x151b+-0x2af8]-_0x40753f[-0x1c78+0x67*-0x3d+0x3504],_0x307728=_0xf663c[_0x5a7213(0x890)](_0x5bc46f[0x1f68+0x8f9*-0x4+0x47e],_0x40753f[-0x29c+-0x583+0x821]),_0x58e4dc=_0xc284a9*_0x500eae+_0x4ce8dc*_0x37f885+_0x307728*_0x2b41ae;if(_0xf663c[_0x5a7213(0x5d1)](_0x58e4dc,-0xf71*-0x2+-0x1*-0x2b3+-0x2195+0.05))return null;var _0x31f1d2=_0xf663c[_0x5a7213(0x28f)](_0xf663c['RkAam'](_0xc284a9*_0x3782bd,_0xf663c['QlVtq'](_0x4ce8dc,_0x27caaf)),_0xf663c[_0x5a7213(0x2e6)](_0x307728,_0x1b7b5e)),_0x49af1e=_0xf663c['eYNjr'](_0xc284a9,_0x37f885*_0x1b7b5e-_0xf663c[_0x5a7213(0x8ec)](_0x2b41ae,_0x27caaf))+_0xf663c['wDPTg'](_0x4ce8dc,_0xf663c[_0x5a7213(0x539)](_0x2b41ae,_0x3782bd)-_0xf663c[_0x5a7213(0x637)](_0x500eae,_0x1b7b5e))+_0xf663c['wDPTg'](_0x307728,_0xf663c[_0x5a7213(0xac8)](_0x500eae*_0x27caaf,_0x37f885*_0x3782bd)),_0x5a1b0e=_0x3193a4/_0x79e53e,_0x46a641=_0x2a53c9['fov']*Math['PI']/(-0x2*-0x59e+0x5f*-0x2f+-0x1*-0x6e9),_0x2c1ce3=Math['tan'](_0x46a641/(0x196e+0x36*-0x8d+0x452)),_0x166f4d=_0xf663c[_0x5a7213(0x155)](_0x31f1d2,_0x58e4dc)/(_0x2c1ce3*_0x5a1b0e),_0x4fc86=_0xf663c['cVIYW'](_0x49af1e/_0x58e4dc,_0x2c1ce3);if(_0x166f4d<-(0x2255+0x1*0x10ca+0x5ae*-0x9+0.6000000000000001)||_0xf663c[_0x5a7213(0x6ab)](_0x166f4d,0x9e8*-0x3+0x2e*-0x1d+0x22ef+0.6000000000000001)||_0x4fc86<-(-0x3*-0x167+-0x47*-0x7a+-0x260a+0.6000000000000001)||_0xf663c['WTQWN'](_0x4fc86,0x6fe+0x245*0x2+-0xb87+0.6000000000000001))return null;return{'x':(_0xf663c[_0x5a7213(0x2ba)](_0x166f4d,-0x3*-0x5c5+0x1615+-0x2764+0.5)+(0x11f8+-0x12c0+0x28*0x5+0.5))*_0x3193a4,'y':_0xf663c['wDPTg'](-0x176d+0x23ad+-0x20*0x62+0.5-_0x4fc86*(0x1*-0x22f+-0x1faa+0x21d9+0.5),_0x79e53e),'z':_0x58e4dc};}var _0xfded1e={'open':![],'cat':_0xf663c['Kehhz'],'built':![],'root':null,'cols':null,'head':null,'sub':null,'syncs':[],'pos':null},_0x509130=_0xf663c[_0x1e5d49(0xacc)],_0x1cac27=null,_0x11d7bc=[{'id':'comba'+'t','label':_0x1e5d49(0xc6c)},{'id':'visua'+'ls','label':_0xf663c[_0x1e5d49(0x711)]},{'id':'value'+'s','label':_0x1e5d49(0x3a6)},{'id':_0xf663c['SqHJS'],'label':_0x1e5d49(0x478)}],_0x19c4a1=_0xf663c[_0x1e5d49(0x3ef)](_0xf663c[_0x1e5d49(0x5ab)](_0xf663c[_0x1e5d49(0xb2a)](_0xf663c[_0x1e5d49(0x61a)](_0xf663c[_0x1e5d49(0x488)](_0xf663c[_0x1e5d49(0x6b8)](_0xf663c[_0x1e5d49(0xb53)](_0xf663c[_0x1e5d49(0x379)](_0xf663c[_0x1e5d49(0xb2a)](_0xf663c['tOkZn'](_0xf663c['zMTko'](_0xf663c['GHEdp'](_0xf663c[_0x1e5d49(0x488)](_0xf663c[_0x1e5d49(0x4c0)](_0xf663c['zTaGF'](_0xf663c[_0x1e5d49(0x913)](_0xf663c['qLAzu'](_0xf663c[_0x1e5d49(0x491)](_0xf663c['ZWAtv'](_0xf663c[_0x1e5d49(0xab7)](_0xf663c['VuPGF'](_0xf663c[_0x1e5d49(0x44e)](_0xf663c['OVOCg'](_0xf663c[_0x1e5d49(0x348)](_0xf663c['nKXmn'](_0xf663c['cDdEw'](_0xf663c[_0x1e5d49(0x166)](_0xf663c[_0x1e5d49(0x305)],_0xf663c['mOlct'])+_0xf663c[_0x1e5d49(0x466)],_0xf663c[_0x1e5d49(0x613)]),_0xf663c[_0x1e5d49(0x5a0)]),_0x1e5d49(0xadd)+'ty:0;'+'trans'+_0x1e5d49(0x19b)+'trans'+_0x1e5d49(0x8b8)+'(18px'+');poi'+_0x1e5d49(0xc59)+'event'+_0x1e5d49(0x5fc)+_0x1e5d49(0x9c7)+_0x1e5d49(0x833)+_0x1e5d49(0x564)+'acity'+_0x1e5d49(0x738)+'\x20ease'+_0x1e5d49(0x2d5)+_0x1e5d49(0x249)+_0x1e5d49(0x81d)+'\x20cubi'+'c-bez'+_0x1e5d49(0xc0b)+_0x1e5d49(0x5ca)+_0x1e5d49(0x27d)+');')+(_0x1e5d49(0x492)+':#f6e'+'ef2;f'+'ont-s'+'ize:1'+'3px;f'+_0x1e5d49(0x726)+_0x1e5d49(0x36c)+':\x22Int'+_0x1e5d49(0x610)+'Segoe'+_0x1e5d49(0x391)+_0x1e5d49(0x41b)+_0x1e5d49(0x9bc)+'sans-'+_0x1e5d49(0xc85)+';}'),'#saku'+'ra-me'+'nu-ro'+_0x1e5d49(0x504)+'-pane'+_0x1e5d49(0x232)+_0x1e5d49(0x529)+'acity'+_0x1e5d49(0x6b0)+_0x1e5d49(0xb94)+'rm:no'+_0x1e5d49(0x5e9)+'inter'+_0x1e5d49(0x98d)+_0x1e5d49(0x88c)+_0x1e5d49(0xbea)),_0xf663c[_0x1e5d49(0x2f3)])+_0xf663c[_0x1e5d49(0x5c5)]+_0xf663c['uMRPl']+(_0x1e5d49(0xb50)+_0x1e5d49(0x5bc)+_0x1e5d49(0xae1)+_0x1e5d49(0x6d4)+'5px;h'+_0x1e5d49(0x5de)+_0x1e5d49(0x62d)+_0x1e5d49(0x9fc)+_0x1e5d49(0xc98)+_0x1e5d49(0x10b)+_0x1e5d49(0x20b)+_0x1e5d49(0xb86)+'drop-'+_0x1e5d49(0x3d8)+_0x1e5d49(0xbdd)+_0x1e5d49(0x2b6)+_0x1e5d49(0x2da)+'255,1'+'07,15'+_0x1e5d49(0x21f)+_0x1e5d49(0x22d))+(_0x1e5d49(0xb48)+'ab{di'+_0x1e5d49(0x76b)+':flex'+_0x1e5d49(0x793)+_0x1e5d49(0x3bc)+_0x1e5d49(0xa0b)+_0x1e5d49(0x258)+'justi'+_0x1e5d49(0x601)+_0x1e5d49(0x452)+':cent'+'er;wi'+'dth:5'+'2px;h'+'eight'+':34px'+';bord'+_0x1e5d49(0x33e)+'borde'+'r-rad'+'ius:1'+'0px;'),_0x1e5d49(0x40f)+'round'+_0x1e5d49(0x7f8)+_0x1e5d49(0x739)+'nt;co'+'lor:r'+'gba(2'+'46,23'+_0x1e5d49(0x744)+',.4);'+_0x1e5d49(0x195)+'r:poi'+_0x1e5d49(0x258)+_0x1e5d49(0x6d2)+'size:'+_0x1e5d49(0x6aa)+'font-'+'weigh'+_0x1e5d49(0x8df)+';font'+_0x1e5d49(0x52e)+'ly:in'+'herit'+';}'),_0xf663c[_0x1e5d49(0x196)])+_0xf663c['gaeVK']+(_0x1e5d49(0x201)+_0x1e5d49(0xad8)+'lex:1'+';min-'+'width'+':0;di'+'splay'+':flex'+_0x1e5d49(0x66d)+_0x1e5d49(0xc2c)+_0x1e5d49(0x6b6)+':colu'+_0x1e5d49(0x8c7))+(_0x1e5d49(0xb48)+_0x1e5d49(0x259)+_0x1e5d49(0x76b)+_0x1e5d49(0x16d)+_0x1e5d49(0x793)+_0x1e5d49(0x3bc)+'ms:ce'+_0x1e5d49(0x258)+_0x1e5d49(0x641)+_0x1e5d49(0x429)+_0x1e5d49(0x884)+_0x1e5d49(0x799)+_0x1e5d49(0x272)+'12px;'+_0x1e5d49(0xa87)+_0x1e5d49(0x992)+'t:non'+'e;}'),'.mn-t'+'itles'+_0x1e5d49(0x13e)+_0x1e5d49(0x815)+_0x1e5d49(0xc97)+_0x1e5d49(0x14b)+'}'),_0x1e5d49(0x6c7)+_0x1e5d49(0x928)+_0x1e5d49(0x71a)+':17px'+_0x1e5d49(0x28c)+'-weig'+_0x1e5d49(0xb41)+_0x1e5d49(0x563))+('.mn-s'+_0x1e5d49(0x993)+'nt-si'+_0x1e5d49(0x51f)+_0x1e5d49(0x77c)+'acity'+_0x1e5d49(0x74d))+_0xf663c[_0x1e5d49(0x1fc)]+_0xf663c['GRtXG'],_0xf663c[_0x1e5d49(0xa2c)])+_0xf663c['HgIEC'],'.mn-c'+'ols{f'+_0x1e5d49(0x1a6)+_0x1e5d49(0x850)+'heigh'+_0x1e5d49(0xc5c)+_0x1e5d49(0x927)+'ow-y:'+_0x1e5d49(0x3d7)+_0x1e5d49(0xa20)+_0x1e5d49(0xaec)+'id;gr'+'id-te'+'mplat'+'e-col'+_0x1e5d49(0x8f2)+'repea'+_0x1e5d49(0x214)+_0x1e5d49(0xab5)+'l,min'+'max(2'+_0x1e5d49(0xc3d)+_0x1e5d49(0x7f3)+';')+_0xf663c[_0x1e5d49(0x784)],'.mn-c'+_0x1e5d49(0x498)+_0x1e5d49(0x33c)+_0x1e5d49(0x664)+_0x1e5d49(0x873)+_0x1e5d49(0x30d)+_0x1e5d49(0x71f)+_0x1e5d49(0x1f4)),_0xf663c[_0x1e5d49(0x3b4)]),_0x1e5d49(0x72a)+_0x1e5d49(0x983)+_0x1e5d49(0x3eb)+_0x1e5d49(0x614)+'us:12'+_0x1e5d49(0x410)+_0x1e5d49(0xa6b)+_0x1e5d49(0x2d4)+'gba(2'+_0x1e5d49(0x8e9)+_0x1e5d49(0x91a)+',.025'+_0x1e5d49(0x18a)+_0x1e5d49(0x8f8)+'ow:in'+'set\x200'+'\x200\x200\x20'+_0x1e5d49(0x1e8)+_0x1e5d49(0x811)+_0x1e5d49(0x8e9)+_0x1e5d49(0x91a)+_0x1e5d49(0xbc4)+';}')+('.sk-c'+'ard.o'+'n{bac'+'kgrou'+_0x1e5d49(0x90c)+_0x1e5d49(0xa05)+_0x1e5d49(0x91a)+_0x1e5d49(0xae8)+_0x1e5d49(0xab2)+'box-s'+_0x1e5d49(0x9fa)+_0x1e5d49(0xb96)+_0x1e5d49(0x256)+'\x200\x201p'+'x\x20rgb'+'a(255'+',107,'+'157,.'+_0x1e5d49(0x458)),_0xf663c['jVlCZ'])+_0xf663c['JeVXv'],_0xf663c[_0x1e5d49(0x82a)])+_0xf663c[_0x1e5d49(0x383)]+_0xf663c['IITNs']+('.sk-m'+_0x1e5d49(0xb39)+'font-'+_0x1e5d49(0x7a2)+_0x1e5d49(0x1ef)+_0x1e5d49(0xadd)+_0x1e5d49(0x47f)+';marg'+'in-bo'+_0x1e5d49(0x422)+'6px;w'+_0x1e5d49(0x5c2)+_0x1e5d49(0xb11)+':pre-'+'wrap;'+'}')+(_0x1e5d49(0x72a)+_0x1e5d49(0xc17)+'splay'+':flex'+_0x1e5d49(0x793)+'n-ite'+_0x1e5d49(0xa0b)+'nter;'+_0x1e5d49(0xb71)+_0x1e5d49(0x714)+_0x1e5d49(0x91b)+_0x1e5d49(0xa88)+_0x1e5d49(0x3f9)+_0x1e5d49(0x61c)+_0x1e5d49(0x78b)+_0x1e5d49(0x1cc)),_0x1e5d49(0x149)+_0x1e5d49(0xb3e)+_0x1e5d49(0xbfb)+'1;col'+_0x1e5d49(0x660)+'ba(24'+_0x1e5d49(0xbdf)+',242,'+_0x1e5d49(0xa3c)+'}'),'.sk-h'+_0x1e5d49(0x85f)+_0x1e5d49(0x5ea)+'y:blo'+'ck;fo'+'nt-si'+_0x1e5d49(0x211)+_0x1e5d49(0x77c)+'acity'+':.4;}')+('.sk-s'+_0x1e5d49(0x32a)+_0x1e5d49(0xa27)+_0x1e5d49(0xb09)+_0x1e5d49(0xaaf)+'ive;w'+'idth:'+'26px;'+_0x1e5d49(0xaad)+'t:14p'+_0x1e5d49(0x75b)+'der:0'+_0x1e5d49(0xa65)+'er-ra'+_0x1e5d49(0xaa4)+_0x1e5d49(0x535)+'backg'+'round'+_0x1e5d49(0xaeb)+'(255,'+'255,2'+'55,.0'+'7);cu'+_0x1e5d49(0x22f)+_0x1e5d49(0x296)+'er;fl'+'ex:no'+'ne;}'),'.sk-s'+'witch'+_0x1e5d49(0x300)+_0x1e5d49(0x829)+_0x1e5d49(0x452)+':\x22\x22;p'+'ositi'+_0x1e5d49(0x79c)+_0x1e5d49(0xb2d)+'e;top'+_0x1e5d49(0x9ea)+'left:'+'3px;w'+_0x1e5d49(0x72f)+_0x1e5d49(0x7ae)+_0x1e5d49(0x5de)+':8px;'+'borde'+'r-rad'+'ius:5'+'0%;')+_0xf663c['kwONa'],_0xf663c[_0x1e5d49(0x133)]),_0xf663c[_0x1e5d49(0x5eb)]),_0x1e5d49(0xc8f)+_0x1e5d49(0xc1f)+'displ'+_0x1e5d49(0x314)+_0x1e5d49(0x80f)+_0x1e5d49(0x90b)+'tems:'+_0x1e5d49(0x632)+'r;gap'+':8px;'+'}')+('.sk-s'+_0x1e5d49(0xc6e)+_0x1e5d49(0x943)+_0x1e5d49(0x7a7)+_0x1e5d49(0x52c)+_0x1e5d49(0x7b2)+_0x1e5d49(0x46b)+_0x1e5d49(0x1f8)+_0x1e5d49(0x797)+_0x1e5d49(0x6cf)+_0x1e5d49(0xb2f)+_0x1e5d49(0x95a)+_0x1e5d49(0x7e7)+'ght:8'+_0x1e5d49(0x410)+_0x1e5d49(0xa6b)+_0x1e5d49(0xb1d)+_0x1e5d49(0xb22)+'arent'+';}'),_0xf663c[_0x1e5d49(0xb45)])+_0xf663c[_0x1e5d49(0x62b)]+_0xf663c[_0x1e5d49(0x93a)],_0x1e5d49(0x475)+'al{fo'+'nt-si'+_0x1e5d49(0x51f)+_0x1e5d49(0x807)+_0x1e5d49(0x554)+'ight:'+_0x1e5d49(0xabe)+_0x1e5d49(0x69b)+_0x1e5d49(0x2c1)+_0x1e5d49(0xc6f)+'ext-a'+_0x1e5d49(0xbbe)+_0x1e5d49(0xb12)+_0x1e5d49(0xbc2)+_0x1e5d49(0x4cd)+_0x1e5d49(0x7e8)+',238,'+'242,.'+'8);}')+(_0x1e5d49(0x686)+'ote{f'+_0x1e5d49(0x74e)+_0x1e5d49(0x53c)+'1px;c'+_0x1e5d49(0xa93)+_0x1e5d49(0x2da)+'246,2'+_0x1e5d49(0x48f)+'2,.5)'+_0x1e5d49(0x91e)+'ing:2'+'px\x200;'+_0x1e5d49(0x79f)+_0x1e5d49(0x4c1)+_0x1e5d49(0x8d8)+'-wrap'+';}')+(_0x1e5d49(0x686)+_0x1e5d49(0x121)+_0x1e5d49(0x493)+_0x1e5d49(0x8d4)+_0x1e5d49(0x30c)+_0x1e5d49(0xbb1))+(_0x1e5d49(0x89e)+'tn{al'+'ign-s'+_0x1e5d49(0x2ff)+_0x1e5d49(0x32d)+_0x1e5d49(0x8d9)+'borde'+_0x1e5d49(0x607)+_0x1e5d49(0x3eb)+'-radi'+'us:8p'+_0x1e5d49(0x309)+_0x1e5d49(0x9d2)+_0x1e5d49(0xbf9)+_0x1e5d49(0x889)+_0x1e5d49(0xc7b)+_0x1e5d49(0x81c)+'#ff6b'+'9d;co'+'lor:#'+'fff;')+('font-'+_0x1e5d49(0x7a2)+_0x1e5d49(0x1c0)+'x;fon'+_0x1e5d49(0x2c9)+'ght:7'+_0x1e5d49(0x510)+'rsor:'+_0x1e5d49(0x296)+_0x1e5d49(0xad7)+_0x1e5d49(0x313)+'mily:'+'inher'+'it;}'),_0xf663c[_0x1e5d49(0x6d0)]),_0x1e5d49(0x4ed)+_0x1e5d49(0x86c)+_0x1e5d49(0x611)+_0x1e5d49(0xa95)+'5\x20ui-'+_0x1e5d49(0x538)+'pace,'+_0x1e5d49(0x99d)+_0x1e5d49(0x8d3)+_0x1e5d49(0x13c)+_0x1e5d49(0xb02)+_0x1e5d49(0x5c2)+_0x1e5d49(0xb11)+':pre-'+_0x1e5d49(0x893)+_0x1e5d49(0x6ec)+'break'+_0x1e5d49(0x5e7)+'k-wor'+_0x1e5d49(0x7c4)+_0x1e5d49(0x685)+_0x1e5d49(0xb6b)+'ity:.'+_0x1e5d49(0x635)+_0x1e5d49(0x482)+_0x1e5d49(0x325)+'80px;'+'overf'+_0x1e5d49(0x874)+'uto;}')+_0xf663c[_0x1e5d49(0xad0)]+(_0x1e5d49(0x6f5)+'ition'+':opac'+'ity\x20.'+_0x1e5d49(0x789)+'inter'+_0x1e5d49(0x98d)+_0x1e5d49(0x88c)+_0x1e5d49(0x4b8)+_0x1e5d49(0xb86)+'drop-'+_0x1e5d49(0x3d8)+_0x1e5d49(0xbdd)+_0x1e5d49(0x2b6)+'rgba('+_0x1e5d49(0x5f5)+_0x1e5d49(0xa4e)+_0x1e5d49(0xbda)+_0x1e5d49(0x22d)),_0x1243f6=_0x1e5d49(0x657)+_0x1e5d49(0xae0)+'ox=\x220'+_0x1e5d49(0x916)+_0x1e5d49(0x56e)+_0x1e5d49(0x67a)+'\x20d=\x22M'+_0x1e5d49(0x7ea)+_0x1e5d49(0xa30)+'-2.5-'+'4-4.5'+_0x1e5d49(0x82f)+_0x1e5d49(0xbdb)+_0x1e5d49(0x3e0)+_0x1e5d49(0x1f7)+'\x204-4.'+_0x1e5d49(0x32e)+'\x204\x204.'+_0x1e5d49(0x986)+_0x1e5d49(0x12c)+'5-4\x207'+'.5z\x22\x20'+('fill='+_0x1e5d49(0x110)+_0x1e5d49(0x6fc)+_0x1e5d49(0x450)+'#ff6b'+_0x1e5d49(0x8f9)+_0x1e5d49(0x38a)+_0x1e5d49(0x39e)+'h=\x222\x22'+_0x1e5d49(0x138)+_0x1e5d49(0x4cc)+'necap'+_0x1e5d49(0x6c0)+'nd\x22\x20s'+_0x1e5d49(0x38a)+_0x1e5d49(0xa03)+_0x1e5d49(0x198)+'\x22roun'+_0x1e5d49(0x592))+_0xf663c[_0x1e5d49(0xb65)],_0x60ffce=_0xf663c['lFftk'](_0xf663c['RPoyz']('<svg\x20'+'class'+_0x1e5d49(0xa7d)+'logo-'+_0x1e5d49(0x7a0)+_0x1e5d49(0xae0)+'ox=\x220'+_0x1e5d49(0x916)+'\x2024\x22>'+_0x1e5d49(0x67a)+_0x1e5d49(0x5d9)+_0x1e5d49(0x7ea)+'c-1.5'+'-2.5-'+_0x1e5d49(0xc55)+'-4-7.'+_0x1e5d49(0xbdb)+_0x1e5d49(0x3e0)+_0x1e5d49(0x1f7)+_0x1e5d49(0xad4)+_0x1e5d49(0x32e)+_0x1e5d49(0x7b7)+_0x1e5d49(0x986)+'-2.5\x20'+_0x1e5d49(0xbd6)+_0x1e5d49(0x489),_0x1e5d49(0xb62)+'\x22none'+'\x22\x20str'+_0x1e5d49(0x450)+'#ff6b'+'9d\x22\x20s'+'troke'+_0x1e5d49(0x39e)+_0x1e5d49(0x1a0)+_0x1e5d49(0xaca)+_0x1e5d49(0x3c5)+'linec'+'ap=\x22r'+_0x1e5d49(0x528)+'\x20stro'+'ke-li'+'nejoi'+_0x1e5d49(0x1e0)+'und\x22/'+'>'),_0xf663c[_0x1e5d49(0x13d)]);function _0x12ebe8(_0x50e4db,_0x3c57f3,_0x21e69c){var _0x436417=_0x1e5d49,_0x3ffc5d=document['creat'+_0x436417(0x7c6)+'ent'](_0x50e4db);if(_0x3c57f3)_0x3ffc5d['class'+_0x436417(0x7bb)]=_0x3c57f3;if(_0xf663c[_0x436417(0x772)](_0x21e69c,null))_0x3ffc5d['inner'+_0x436417(0x353)]=_0x21e69c;return _0x3ffc5d;}function _0x18f7c7(_0x16969c,_0x44be3a){var _0x442e9a=_0x1e5d49;if(_0xf663c['ObmAS']!==_0xf663c[_0x442e9a(0x45a)]){var _0x1ecaa6=(_0x442e9a(0x4ec)+_0x442e9a(0x7b4)+_0x442e9a(0xb0c)+_0x442e9a(0x2e3))[_0x442e9a(0x438)]('|'),_0x25f528=-0x1aac+0x1*-0x19ae+0x2*0x1a2d;while(!![]){switch(_0x1ecaa6[_0x25f528++]){case'0':var _0xba0f9c=_0xf663c[_0x442e9a(0x23a)](_0x12ebe8,'div',_0x442e9a(0xbec)+_0x442e9a(0x6a2)+'tle','<stro'+_0x442e9a(0x92c)+_0x16969c+(_0x442e9a(0x9ca)+'ong>'));continue;case'1':var _0x1f12cb=_0x12ebe8(_0xf663c[_0x442e9a(0x507)],_0xf663c[_0x442e9a(0x54a)]);continue;case'2':var _0x12156e=_0x12ebe8(_0xf663c['aGzQp'],_0x442e9a(0x68f)+_0x442e9a(0x8e7));continue;case'3':return _0x3d9d0b;case'4':_0x3d9d0b[_0x442e9a(0x129)+_0x442e9a(0x3e9)+'d'](_0x1f12cb);continue;case'5':_0x3d9d0b['head']=_0xba0f9c;continue;case'6':var _0x3d9d0b=_0x12ebe8(_0xf663c[_0x442e9a(0x507)],_0xf663c['haYZK']+(_0x44be3a?_0xf663c[_0x442e9a(0xa47)]:''));continue;case'7':_0x3d9d0b[_0x442e9a(0x71e)]=_0x12156e;continue;case'8':_0x1f12cb[_0x442e9a(0x129)+'dChil'+'d'](_0xba0f9c);continue;case'9':_0x3d9d0b[_0x442e9a(0x129)+'dChil'+'d'](_0x12156e);continue;}break;}}else{_0x5e9c48['preve'+_0x442e9a(0x678)+'ault'](),_0x5e4090(_0x442e9a(0x6bd)+'hot');return;}}function _0x208c12(_0x1bc1c3,_0x546b4c){var _0x12261a=_0x1e5d49,_0x520602={'LNfRO':function(_0x12b928,_0x31e9ec){return _0x12b928===_0x31e9ec;},'ntcII':_0xf663c[_0x12261a(0x6ce)]},_0x5ec4e3=_0x12ebe8(_0x12261a(0x9f5)+'n','sk-sw'+_0x12261a(0x754));_0x5ec4e3['type']=_0x12261a(0x9f5)+'n';var _0x27ee34=function(){var _0x117d2b=_0x12261a;if('mnMdf'!==_0x117d2b(0x869))return-0x4*0x649+0xc*0x61+0x1498;else _0x5ec4e3[_0x117d2b(0x4ab)+'tribu'+'te'](_0x117d2b(0x294)+_0x117d2b(0x14f)+'ed',_0x1bc1c3()?_0x117d2b(0x213):'false');};return _0x5ec4e3['oncli'+'ck']=function(){var _0x2f2b62=_0x12261a;if('TsYta'!==_0xf663c['rzZIF'])_0x546b4c(!_0xf663c[_0x2f2b62(0x3e4)](_0x1bc1c3)),_0x27ee34();else{var _0x34b165={};try{var _0x566076=(_0x2f2b62(0x40d)+_0x2f2b62(0x339)+'1')['split']('|'),_0x3e37eb=-0x1edf+-0x13*-0x32+-0x1*-0x1b29;while(!![]){switch(_0x566076[_0x3e37eb++]){case'0':_0x34b165[_0x2f2b62(0x36b)]=_0x1045d8&&_0x1045d8[_0x2f2b62(0x216)+_0x2f2b62(0x8a2)+'g']||null;continue;case'1':_0x34b165[_0x2f2b62(0x8e1)+'nRunt'+'imeGa'+'me']=_0x8107f6&&_0x554daa['_runt'+_0x2f2b62(0xb44)]&&_0xfed805['_runt'+'ime']['_game']?typeof _0x280330[_0x2f2b62(0x291)+'ime'][_0x2f2b62(0x899)]:_0x2f2b62(0x883);continue;case'2':_0x34b165['tagMa'+'tches']=!!(_0x1045d8&&_0x1af3ec&&_0x520602[_0x2f2b62(0xc0d)](_0x1045d8[_0x2f2b62(0x216)+_0x2f2b62(0x8a2)+'g'],_0x35abc0));continue;case'3':_0x34b165['runti'+'meGam'+'e']=_0x1045d8&&_0x1045d8[_0x2f2b62(0x899)]?typeof _0x1045d8[_0x2f2b62(0x899)]:_0x520602['ntcII'];continue;case'4':_0x34b165['plugi'+_0x2f2b62(0xc6a)+'imeIs'+_0x2f2b62(0x7df)+'ted']=!!(_0x2d851b&&_0x16d0fa[_0x2f2b62(0x291)+_0x2f2b62(0xb44)]&&_0x4c8b59[_0x2f2b62(0x291)+'ime']===_0x1045d8);continue;case'5':var _0x1045d8=_0x19eedb[_0x2f2b62(0x6df)+_0x2f2b62(0x28a)+_0x2f2b62(0x980)]&&_0x241ac7[_0x2f2b62(0x6df)+_0x2f2b62(0x28a)+_0x2f2b62(0x980)][_0x2f2b62(0x3be)+'me'];continue;}break;}}catch(_0x547534){_0x34b165[_0x2f2b62(0x42a)]=_0x280eee(_0x547534&&_0x547534[_0x2f2b62(0x10c)+'ge']||_0x547534);}return _0x34b165;}},_0xf663c['YAiWx'](_0x27ee34),_0x5ec4e3[_0x12261a(0x6b5)]=_0x27ee34,_0xfded1e['syncs']['push'](_0x27ee34),_0x5ec4e3;}function _0x433c10(_0xf658c8,_0x46a687,_0x2ec58c,_0x4ba3b2,_0x41a74a){var _0x50e43c=_0x1e5d49,_0x2862da=('16|13'+'|0|9|'+'3|8|1'+_0x50e43c(0x713)+_0x50e43c(0x3b7)+'4|14|'+_0x50e43c(0x443)+_0x50e43c(0x124)+'5|1')['split']('|'),_0x1ed7dc=-0x758+0x1*-0x1bcf+0x2327;while(!![]){switch(_0x2862da[_0x1ed7dc++]){case'0':var _0x1d7fd4=document[_0x50e43c(0xa0e)+'eElem'+'ent'](_0x50e43c(0x212));continue;case'1':return _0x1154bc;case'2':var _0x3aa840=_0x12ebe8('span','sk-va'+'l');continue;case'3':_0x1d7fd4['class'+_0x50e43c(0x7bb)]=_0xf663c['yxPkB'];continue;case'4':_0x1d7fd4[_0x50e43c(0xa19)+'ut']=function(){var _0x384065=_0x50e43c;_0x41a74a(parseFloat(_0x1d7fd4[_0x384065(0xaf8)])||_0xf658c8),_0x291867();};continue;case'5':_0xfded1e['syncs'][_0x50e43c(0x773)](_0x291867);continue;case'6':_0x1154bc[_0x50e43c(0x212)]=_0x1d7fd4;continue;case'7':_0x1154bc['sync']=_0x291867;continue;case'8':_0x1d7fd4[_0x50e43c(0x898)]=_0xf663c[_0x50e43c(0x171)](String,_0xf658c8);continue;case'9':_0x1d7fd4[_0x50e43c(0x1f3)]=_0xf663c['dEJxM'];continue;case'10':_0x1154bc['appen'+_0x50e43c(0x3e9)+'d'](_0x3aa840);continue;case'11':_0x1d7fd4['max']=_0xf663c['PwEQl'](String,_0x46a687);continue;case'12':_0x1d7fd4[_0x50e43c(0xb46)]=String(_0x2ec58c);continue;case'13':var _0x1154bc=_0xf663c[_0x50e43c(0x112)](_0x12ebe8,_0x50e43c(0x31b),'sk-ra'+'nge');continue;case'14':_0x1154bc['appen'+_0x50e43c(0x3e9)+'d'](_0x1d7fd4);continue;case'15':_0x291867();continue;case'16':var _0x2d3498={'aFrNt':function(_0x42722d,_0x2d1566){return _0x42722d/_0x2d1566;},'AwkSl':function(_0x5c1fac,_0x5aba4d){var _0xba3208=_0x50e43c;return _0xf663c[_0xba3208(0xac8)](_0x5c1fac,_0x5aba4d);},'dQPaP':function(_0x169ccb,_0x135800){return _0xf663c['uJvnb'](_0x169ccb,_0x135800);},'dhQZV':function(_0x3b2374){return _0x3b2374();},'pFmgQ':function(_0xbac9ef,_0x1b0c51){return _0xbac9ef+_0x1b0c51;},'UxwKo':function(_0x1f7402,_0x3f9aad){return _0x1f7402+_0x3f9aad;}};continue;case'17':var _0x291867=function(){var _0xf565fe=_0x50e43c,_0x281d8e=(_0xf565fe(0x10e)+'|0|4')[_0xf565fe(0x438)]('|'),_0xd6c396=-0x7cf*0x1+0x3f*0xf+0x41e*0x1;while(!![]){switch(_0x281d8e[_0xd6c396++]){case'0':var _0x296dfc=_0x2d3498['aFrNt'](_0x2d3498['AwkSl'](_0x46f498,_0xf658c8),_0x2d3498['AwkSl'](_0x46a687,_0xf658c8))*(0x68e*-0x5+-0xf29+0x3053*0x1);continue;case'1':_0x1d7fd4[_0xf565fe(0xaf8)]=_0x2d3498[_0xf565fe(0x573)](String,_0x46f498);continue;case'2':var _0x46f498=_0x2d3498[_0xf565fe(0x7d5)](_0x4ba3b2);continue;case'3':_0x3aa840[_0xf565fe(0x93f)+'onten'+'t']=_0x2d3498[_0xf565fe(0xc34)](_0x2ec58c<0x17cc+-0x1c1*0x6+-0xd45?_0x46f498['toFix'+'ed'](0xcf3+0x2584+-0x3276):String(Math[_0xf565fe(0x1d4)](_0x46f498)),_0x1d7fd4['datas'+'et']['unit']||'');continue;case'4':_0x1d7fd4[_0xf565fe(0x426)]['setPr'+'opert'+'y']('--p',_0x2d3498[_0xf565fe(0x6be)](_0x296dfc,'%'));continue;}break;}};continue;}break;}}function _0x3e2bec(_0xcf6cde,_0x17ebb6){var _0x1a0b2b=_0x1e5d49,_0x1f5239=_0xf663c['AgIpI'](_0x12ebe8,_0x1a0b2b(0x31b),_0x1a0b2b(0x445)+'l'),_0x140b0c=_0xf663c[_0x1a0b2b(0x342)](_0x12ebe8,_0x1a0b2b(0x31b),'sk-la'+'bel',_0xcf6cde+(_0x17ebb6?'<span'+'\x20clas'+'s=\x27sk'+'-hint'+'\x27>'+_0x17ebb6+('</spa'+'n>'):''));return _0x1f5239['appen'+_0x1a0b2b(0x3e9)+'d'](_0x140b0c),_0x1f5239;}function _0x47fde0(_0x4eec71,_0x3ead29,_0x217df7,_0x2e20ab){var _0x4ba2cc=_0x1e5d49,_0x12678b={'JEjBP':function(_0x36cb1f,_0x54dc73){return _0x36cb1f*_0x54dc73;}};if(_0x4ba2cc(0xa54)!=='OSuKX'){var _0x54864b=_0x3da598[_0x4ba2cc(0x369)+_0x4ba2cc(0xc8e)+'e']();if(_0x54864b)return _0x1c97e0['sourc'+'e']=_0x4ba2cc(0x3be)+_0x4ba2cc(0x2a0)+'solve'+'Game('+')',_0x54864b;}else{var _0xb395f6=_0x4eec71&&_0x4eec71[_0x4ba2cc(0x3a2)+'y']&&_0x4eec71[_0x4ba2cc(0x3a2)+'y'][_0x3ead29];if(!_0xb395f6)return'-';for(var _0x2b1629=0x1*-0x1e6d+-0x33c*-0x3+0x14b9;_0xf663c[_0x4ba2cc(0xada)](_0x2b1629,_0xb395f6['lengt'+'h']);_0x2b1629++){if(_0xb395f6[_0x2b1629]['o']===_0x217df7){if(_0xf663c['LQZtQ']!==_0xf663c[_0x4ba2cc(0x4b5)])return _0x787fcf[_0x4ba2cc(0x1d4)](_0x12678b['JEjBP'](_0x402943,-0x1dad+-0x81*0x7+-0x19*-0x158))/(-0x3b*0x16+-0x1*0x1d84+0x22fa);else{if(_0xf663c['fqnGH'](_0x2e20ab,'v3')){var _0x4e2982=_0xb395f6[_0x2b1629][_0x4ba2cc(0x588)]||[_0xb395f6[_0x2b1629]['v'],-0x766*-0x3+-0x3*0x4cd+0x11d*-0x7,-0x59*0x1f+-0x1*0xe3+-0x2*-0x5d5];return _0x4e2982['map'](function(_0x546d1c){var _0x55f0e4=_0x4ba2cc;return Math['round'](_0xf663c[_0x55f0e4(0x2ba)](_0x546d1c,-0x42b+-0xc*0x26a+0x2187))/(0xcc2+0x20a2+0x5a*-0x80);})[_0x4ba2cc(0xb6d)]('\x20\x20');}var _0x5ea8fa=_0xb395f6[_0x2b1629]['v'];return _0xf663c['hzgYq'](typeof _0x5ea8fa,'numbe'+'r')?_0xf663c['zcdcm'](Math['round'](_0x5ea8fa*(-0x2057+-0xd*-0x251+0x622)),-0x94f*0x1+0x731*-0x1+0x1468):String(_0x5ea8fa);}}}return'-';}}function _0x5b5a91(_0xf137d4){var _0x5a491f=_0x1e5d49,_0x34e80f={'ooQmb':function(_0x4bedb4,_0x3b4b43){var _0x384dd7=_0x49fc;return _0xf663c[_0x384dd7(0x872)](_0x4bedb4,_0x3b4b43);},'DxvHG':function(_0x1e13da,_0x19394f){return _0x1e13da+_0x19394f;},'eLwGw':_0xf663c['PsBPC'],'AjlFS':function(_0xf4ba4b,_0x519979){var _0x5a306d=_0x49fc;return _0xf663c[_0x5a306d(0x951)](_0xf4ba4b,_0x519979);},'Bxdvm':function(_0x5bb5f1,_0x45f985,_0x329f7f){return _0x5bb5f1(_0x45f985,_0x329f7f);},'cnFpB':function(_0x573a4d,_0x3a629a){var _0x25453b=_0x49fc;return _0xf663c[_0x25453b(0xabf)](_0x573a4d,_0x3a629a);},'KIaCn':_0xf663c[_0x5a491f(0x561)],'iiBaF':_0xf663c[_0x5a491f(0x38d)],'muWhD':function(_0x57b39f){return _0x57b39f();},'KdRVa':_0xf663c[_0x5a491f(0x234)],'gdkag':'Copie'+'d'},_0x1a1a65=_0x1cac27,_0x4055c1=[],_0x487f7f;if(_0xf663c['RbdOs'](_0xf137d4,_0x5a491f(0x6b1)+'t')){var _0x3c1974=_0xf663c['gKHAH'](_0x18f7c7,_0xf663c[_0x5a491f(0x14a)],_0x24f786['on']),_0x364bbb=_0xf663c['QDxNu'](_0x12ebe8,_0xf663c[_0x5a491f(0x507)],_0x5a491f(0x3c4)+'esc',_0x24f786['on']?_0xf663c['slQSk']('x'+_0x24f786['facto'+'r']['toFix'+'ed'](0x1394+0x160b+-0x299e)+_0x5a491f(0x8fb)+_0x23b861['lengt'+'h']+('\x20fiel'+_0x5a491f(0xb89)),_0x550940)+('\x20writ'+'es'):_0x5a491f(0x88d)+_0x5a491f(0xa57)+_0x5a491f(0x50e)+'ment-'+_0x5a491f(0x11b)+_0x5a491f(0x6c8)+'ds\x20on'+_0x5a491f(0xb5d)+_0x5a491f(0x5de)+',\x20ste'+'p\x20and'+'\x20jump'+'\x20are\x20'+_0x5a491f(0x7a1)+_0x5a491f(0x509)),_0xdb295c=_0xf663c[_0x5a491f(0x65b)](_0x3e2bec,_0x5a491f(0x3b9)+'ed');_0xdb295c[_0x5a491f(0x129)+_0x5a491f(0x3e9)+'d'](_0x208c12(function(){return _0x24f786['on'];},function(_0x13b7b7){var _0xac688=_0x5a491f;_0x2e055d(_0x13b7b7,_0x24f786['facto'+'r']),_0x364bbb['textC'+'onten'+'t']=_0x13b7b7?_0x34e80f['ooQmb'](_0x34e80f['DxvHG']('x'+_0x24f786['facto'+'r'][_0xac688(0xc52)+'ed'](-0x10d*-0x1+-0x6*0x332+0x2*0x910),'\x20on\x20')+_0x23b861[_0xac688(0x68d)+'h']+_0x34e80f['eLwGw']+_0x550940,_0xac688(0x175)+'es'):'Multi'+_0xac688(0xa57)+_0xac688(0x50e)+'ment-'+'speed'+'\x20fiel'+'ds\x20on'+'ly.\x20H'+_0xac688(0x5de)+_0xac688(0x976)+_0xac688(0x763)+_0xac688(0x85d)+_0xac688(0x24e)+_0xac688(0x7a1)+'ed.';})),_0x3c1974['body'][_0x5a491f(0x129)+_0x5a491f(0x3e9)+'d'](_0x364bbb),_0x3c1974['body']['appen'+'dChil'+'d'](_0xdb295c);var _0x19e879=_0x433c10(0xfdf*0x1+0x1733+-0x2711,-0x11*0x67+0x2073+0x1*-0x1997,-0xcc5+-0x1f06+0xe99*0x3+0.5,function(){return _0x24f786['facto'+'r'];},function(_0x5b516d){_0xf663c['HEJBh'](_0x2e055d,_0x24f786['on'],_0x5b516d);});_0x19e879[_0x5a491f(0x212)]['datas'+'et'][_0x5a491f(0xb13)]='x';var _0x4c15dc=_0x3e2bec(_0xf663c['fvMjJ'],_0x5a491f(0xc20)+_0x5a491f(0x8c3)+_0x5a491f(0x58f)+_0x5a491f(0x842)+'is');_0x4c15dc[_0x5a491f(0x129)+'dChil'+'d'](_0x19e879),_0x3c1974[_0x5a491f(0x71e)]['appen'+_0x5a491f(0x3e9)+'d'](_0x4c15dc);if(_0x1834f2['lengt'+'h']){if(_0xf663c[_0x5a491f(0x243)](_0x5a491f(0x274),_0x5a491f(0x274))){var _0x44e0b0=_0x12ebe8('div',_0x5a491f(0x9cb)+'te',_0xf663c[_0x5a491f(0x8cc)]('Refus'+_0x5a491f(0x8b7),_0x1834f2['slice'](-0x14ec+0x1*0x4fd+0xfef,0x33*0x85+0x2*-0x99d+-0x741)[_0x5a491f(0x3c9)](function(_0x333023){var _0x276cec=_0x5a491f;return _0xf663c[_0x276cec(0x69a)](_0xf663c['mUdvf']('0x',_0x333023['o']<-0x1642+0x18b4+-0x2*0x139?'?':_0x333023['o']['toStr'+'ing'](-0x71*0xd+0x1*-0x19c9+0x1f96)),'\x20(')+_0x333023[_0x276cec(0x7fe)]+')';})['join']('\x20\x20')));_0x3c1974['body'][_0x5a491f(0x129)+_0x5a491f(0x3e9)+'d'](_0x44e0b0);}else{var _0x174248=(_0x5a491f(0x2cd)+_0x5a491f(0x1d1)+'1|5|4'+_0x5a491f(0x36a)+'10')['split']('|'),_0x14c116=0x255+-0x3d*0x7f+0x82*0x37;while(!![]){switch(_0x174248[_0x14c116++]){case'0':var _0x5e2da9=_0x8704dc(_0x4cd114);continue;case'1':for(var _0x299c3f in _0x2d6652)_0x5e2da9[_0x299c3f]=_0x2d6652[_0x299c3f];continue;case'2':var _0x4cd114=_0xf663c['SylZh'](_0x4f7076);continue;case'3':for(var _0x5219ea in _0x5e2da9){var _0x2d4cf3=_0x32ee33[_0x5219ea],_0x3ad7fd=_0x5e2da9[_0x5219ea];if(_0x2d4cf3!==_0x3ad7fd)_0x37e078['push'](_0x5219ea+':\x20'+_0x2d4cf3+_0x5a491f(0x7f0)+_0x3ad7fd);}continue;case'4':_0x32575=[];continue;case'5':if(!_0xc07b93){_0x4c8616=_0x5e2da9,_0x3bf54a=[],_0xf663c['LvUJQ'](_0x5b28f7,'repor'+'t',{'report':_0xf663c[_0x5a491f(0x84d)](_0x53643e)});return;}continue;case'6':var _0x2d6652=_0x279dce();continue;case'7':if(_0x4ca74a!=='snaps'+'hot')return;continue;case'8':_0x5a65c6=_0x5e2da9;continue;case'9':if(_0x5637de===_0xf663c['BvVEP']){_0xf663c['AZNTr'](_0x43cfdd,_0x397487&&_0xf663c[_0x5a491f(0x387)](typeof _0x39180a['on'],_0xf663c['ebIaE'])?_0x29808d['on']:_0x30cd84['on'],_0x203a77&&typeof _0x3cb798[_0x5a491f(0x280)+'r']===_0x5a491f(0x333)+'r'?_0x32dfa4[_0x5a491f(0x280)+'r']:_0x447d3f['facto'+'r']);return;}continue;case'10':_0x44cc29(_0xf663c[_0x5a491f(0x120)],{'report':_0x21412()});continue;}break;}}}_0x4055c1['push'](_0x3c1974);var _0x27399d=_0x18f7c7(_0x5a491f(0x8f3)+_0x5a491f(0x847)),_0x3805c4=_0xf663c[_0x5a491f(0x454)](_0x12ebe8,_0x5a491f(0x9f5)+'n',_0xf663c[_0x5a491f(0x7f1)],_0xf663c['daxfg']);_0x3805c4['type']=_0xf663c['IqkCn'],_0x3805c4[_0x5a491f(0xa60)+'ck']=function(){var _0x2c0abf=_0x5a491f,_0x4abdce={'XxAfL':function(_0x11785f,_0x36b0cf){return _0x34e80f['AjlFS'](_0x11785f,_0x36b0cf);},'xGKSw':function(_0x4b210a,_0x2742c4,_0x331226){var _0x51f5ec=_0x49fc;return _0x34e80f[_0x51f5ec(0xbcb)](_0x4b210a,_0x2742c4,_0x331226);}};if(_0x2c0abf(0x204)===_0x2c0abf(0x204))_0x34e80f['cnFpB'](_0x424a9b,_0x2c0abf(0x6bd)+'hot');else{var _0x28c172=_0x1af370[_0x2c0abf(0x3d3)];if(_0x28c172&&_0x4abdce[_0x2c0abf(0x9ae)](_0x28c172['__sak'+'ura'],_0x26704b)&&_0x28c172['kind']==='cmd')_0x4abdce['xGKSw'](_0x43d0d4,_0x28c172[_0x2c0abf(0xa2e)],_0x28c172['arg']);}},_0x27399d[_0x5a491f(0x71e)][_0x5a491f(0x129)+_0x5a491f(0x3e9)+'d'](_0xf663c[_0x5a491f(0xa4f)](_0x12ebe8,_0x5a491f(0x31b),_0x5a491f(0x3c4)+_0x5a491f(0x3e1),_0xf663c['HdFrW'])),_0x27399d[_0x5a491f(0x71e)]['appen'+_0x5a491f(0x3e9)+'d'](_0x3805c4),_0x4055c1[_0x5a491f(0x773)](_0x27399d);}if(_0xf137d4===_0x5a491f(0xa24)+'ls'){var _0x248218=_0xf663c['oIWsq'](_0x18f7c7,'Radar',_0x393b6f['on']),_0x21169e=_0x3e2bec(_0x5a491f(0x3b9)+'ed');_0x21169e[_0x5a491f(0x129)+'dChil'+'d'](_0x208c12(function(){return _0x393b6f['on'];},function(_0x3738df){var _0x1c240e=_0x5a491f;_0x34e80f[_0x1c240e(0x23b)](_0x34e80f['KIaCn'],'oLhLB')?_0x2d111d(_0x3738df,_0x393b6f['boxes']):_0x2c0e0a(!_0x509f4d['on'],_0x1fb12d[_0x1c240e(0x280)+'r']);})),_0x248218[_0x5a491f(0x71e)]['appen'+'dChil'+'d'](_0xf663c[_0x5a491f(0xc63)](_0x12ebe8,_0xf663c[_0x5a491f(0x507)],_0x5a491f(0x3c4)+'esc',_0xf663c[_0x5a491f(0x922)])),_0x248218['body']['appen'+_0x5a491f(0x3e9)+'d'](_0x21169e);var _0x4e6a2d=_0x433c10(0x113b+0xc6b+0x97*-0x32,-0xa34*-0x2+-0x4d4*0x2+-0xa20,-0x24a8+-0x4*-0x2a2+0xd15*0x2,function(){return _0x393b6f['span'];},function(_0x1f7bb0){_0x393b6f['span']=_0x1f7bb0;});_0x4e6a2d[_0x5a491f(0x212)][_0x5a491f(0x6fa)+'et']['unit']='m';var _0xc3c55d=_0xf663c[_0x5a491f(0x203)](_0x3e2bec,_0x5a491f(0x4f7),_0xf663c[_0x5a491f(0xb23)]);_0xc3c55d[_0x5a491f(0x129)+'dChil'+'d'](_0x4e6a2d),_0x248218[_0x5a491f(0x71e)][_0x5a491f(0x129)+_0x5a491f(0x3e9)+'d'](_0xc3c55d),_0x4055c1[_0x5a491f(0x773)](_0x248218);var _0x316d28=_0x18f7c7(_0xf663c[_0x5a491f(0x725)],_0x393b6f['boxes']),_0x57b9bd=_0x3e2bec('Enabl'+'ed');_0x57b9bd[_0x5a491f(0x129)+_0x5a491f(0x3e9)+'d'](_0x208c12(function(){return _0x393b6f['boxes'];},function(_0xa9f31a){var _0x49361f=_0x5a491f;if(_0xa9f31a&&!_0xf663c[_0x49361f(0x45d)](_0x5c8f9b)){_0xf663c[_0x49361f(0x5a7)](_0x573769);return;}_0x2d111d(!![],_0xa9f31a);}));var _0x5bd311=_0x1a1a65&&_0x1a1a65[_0x5a491f(0x225)+'s'];_0x316d28['body']['appen'+_0x5a491f(0x3e9)+'d'](_0xf663c['RSmbw'](_0x12ebe8,_0x5a491f(0x31b),_0x5a491f(0x3c4)+_0x5a491f(0x3e1),_0x5bd311&&!_0x5bd311[_0x5a491f(0x3f6)+_0x5a491f(0x801)]?_0xf663c['ikTPZ']+(_0x5bd311[_0x5a491f(0x7fe)]||_0xf663c['aMSoY'])+(_0x5a491f(0x96f)+'ese\x20t'+'wo\x20fl'+_0x5a491f(0x497)+_0x5a491f(0x661)+'ot\x20pi'+_0x5a491f(0xc82)+_0x5a491f(0x96a)+_0x5a491f(0x4d7)+'ess\x20F'+'9,\x20tu'+'rn\x20ab'+_0x5a491f(0x846)+'0°,\x20p'+'ress\x20'+_0x5a491f(0x3aa)):_0x5bd311&&!_0x5bd311[_0x5a491f(0x709)+'ne']?'Field'+'\x20of\x20v'+'iew\x20i'+'s\x20'+Math['round'](_0x5bd311[_0x5a491f(0x9f1)])+('°,\x20ou'+'tside'+_0x5a491f(0x585)+_0x5a491f(0x1b2)+_0x5a491f(0x349)+'\x20Rese'+_0x5a491f(0x5fa)+'below'+'.'):_0xf663c['MFBDQ'])),_0x316d28['body'][_0x5a491f(0x129)+_0x5a491f(0x3e9)+'d'](_0x57b9bd);var _0x475f23=_0x433c10(-0x7*-0x586+0x5d5*-0x1+0x1*-0x2099,0x645+-0xe05+0x842,0x742+0xe1f+-0x155f,function(){return _0x2a53c9['fov'];},function(_0x53415a){var _0xf829d0=_0x5a491f;_0x34e80f['AjlFS'](_0x34e80f['iiBaF'],_0xf829d0(0xb19))?(_0x2a53c9[_0xf829d0(0x9f1)]=_0x53415a,_0x34e80f['muWhD'](_0x43fb3e)):(_0x189dac['remov'+_0xf829d0(0x35c)](_0x549433),_0x419b1e=!![]);});_0x475f23[_0x5a491f(0x212)][_0x5a491f(0x6fa)+'et']['unit']='°';var _0x3745d6=_0x3e2bec(_0x5a491f(0x7ca)+'\x20of\x20v'+_0x5a491f(0x20c),_0xf663c['obIaE']);_0x3745d6[_0x5a491f(0x129)+_0x5a491f(0x3e9)+'d'](_0x475f23);var _0x11ff14=_0xf663c['lMQbl'](_0x3e2bec,_0x5a491f(0x94f)+_0x5a491f(0x427),_0xf663c['Jgcnk']),_0x796939=_0xf663c[_0x5a491f(0x342)](_0x12ebe8,_0x5a491f(0x9f5)+'n',_0x5a491f(0x1e4)+'n',_0xf663c[_0x5a491f(0x4d5)]);_0x796939['addEv'+_0x5a491f(0x4cf)+'stene'+'r']('click',function(){var _0x10c24a=_0x5a491f;if(_0x10c24a(0x806)===_0x34e80f['KdRVa'])return _0x2810ac&&_0x3dd4b5['buffe'+'r']?_0x1f4204[_0x10c24a(0x786)+'r']['byteL'+_0x10c24a(0x56b)]:-0x3d*-0x29+-0xfd*0x21+0x16d8;else _0x2a53c9[_0x10c24a(0x9f1)]=0x2340+-0x1572+-0xd83*0x1,_0x43fb3e(),_0x4b565e(_0xfded1e[_0x10c24a(0x2ca)]);}),_0x11ff14[_0x5a491f(0x129)+_0x5a491f(0x3e9)+'d'](_0x796939),_0x316d28[_0x5a491f(0x71e)][_0x5a491f(0x129)+'dChil'+'d'](_0x3745d6),_0x316d28['body'][_0x5a491f(0x129)+_0x5a491f(0x3e9)+'d'](_0x11ff14);var _0xcfe253=_0x1a1a65&&_0x1a1a65['view'];_0x316d28[_0x5a491f(0x71e)][_0x5a491f(0x129)+'dChil'+'d'](_0x12ebe8(_0x5a491f(0x31b),_0x5a491f(0x9cb)+'te',_0xf663c[_0x5a491f(0x8ea)](_0x5a491f(0xafe)+'\x20',_0xcfe253?_0xcfe253[_0x5a491f(0x73e)+'Look']?_0x5a491f(0x2ac)+_0x5a491f(0xa8c)+_0xcfe253['mouse'+_0x5a491f(0x76a)]+(_0xcfe253[_0x5a491f(0x53a)+'a']?_0xf663c[_0x5a491f(0xbad)](_0xf663c['RfGZY'],_0xcfe253[_0x5a491f(0x53a)+'a']):''):_0xf663c[_0x5a491f(0x53d)]:_0x5a491f(0x4b6)+'useLo'+_0x5a491f(0x879)+'t')+(_0x5bd311?_0xf663c['JNGqX']('\x0a',_0x5bd311[_0x5a491f(0x178)+'e']&&_0xf663c[_0x5a491f(0x3e5)](_0x5bd311['sourc'+'e']['index'+'Of']('sette'+'r\x20pai'+'r'),0xb04+-0x77*-0x49+-0x2cf3)?_0xf663c['ASaoO'](_0xf663c['hxPaI']('from\x20'+_0x5a491f(0xab4)+_0x5a491f(0x83e)+_0x5a491f(0x768),_0x5bd311[_0x5a491f(0x178)+'e']['slice'](0x1*0x207b+0x1*0x270b+-0x477b)),_0x5a491f(0x1d3)+'\x20\x20')+Math[_0x5a491f(0x1d4)](_0x5bd311['rawYa'+'w'])+_0xf663c[_0x5a491f(0xc74)]+Math['round'](_0x5bd311['rawPi'+_0x5a491f(0x500)]):_0xf663c['yeVsJ'](_0x5bd311[_0x5a491f(0x178)+'e'],_0xf663c['xrgxn'])?_0xf663c[_0x5a491f(0x5a1)](_0xf663c['mtkWO'](_0xf663c[_0x5a491f(0x5a5)]('read\x20'+'from\x20'+_0x5a491f(0x2ac)+'Look\x20'+_0x5a491f(0x5cb)+_0x5a491f(0x315)+'w\x20\x20\x20'+_0x5bd311['yawAt'],_0xf663c['YDIdV']),Math['round'](_0x5bd311[_0x5a491f(0xade)+'w']))+_0xf663c[_0x5a491f(0xc74)],_0x5bd311[_0x5a491f(0x860)+'At'])+_0x5a491f(0xb3b)+Math[_0x5a491f(0x1d4)](_0x5bd311['rawPi'+_0x5a491f(0x500)]):_0xf663c[_0x5a491f(0x9a7)]):'')+(_0x5bd311&&_0x5bd311[_0x5a491f(0x90a)+_0x5a491f(0x1eb)]&&_0x5bd311[_0x5a491f(0x90a)+'ooks'][_0x5a491f(0x532)+'ed']===-0x7*-0x1e7+-0x11bf+0x46e&&_0xf663c['LjYSx'](_0x5bd311['viewH'+_0x5a491f(0x1eb)]['total'],-0x26d7+-0xa93+0x2e*0x113)?_0xf663c['iqFBU'](_0xf663c[_0x5a491f(0x25f)](_0x5a491f(0x6bb)+_0x5a491f(0x817)+'ister'+_0x5a491f(0x4dc)+'t\x20non'+_0x5a491f(0x97a)+_0x5a491f(0xb0a)+'('+_0x5bd311['viewH'+_0x5a491f(0x1eb)][_0x5a491f(0x369)+_0x5a491f(0x15f)],'/')+_0x5bd311[_0x5a491f(0x90a)+_0x5a491f(0x1eb)]['total'],_0x5a491f(0x4ae)+_0x5a491f(0x3ea)):_0x5bd311&&_0x5bd311[_0x5a491f(0x90a)+'ooks']&&_0x5bd311['viewH'+'ooks']['total']===-0x43*0x32+0x269f+0x3*-0x883?_0xf663c['sfHtl'](_0x5a491f(0xc56)+_0x5a491f(0x841)+'s\x20wer'+_0x5a491f(0x8bb)+_0x5a491f(0x658)+_0x5a491f(0x759)+'red\x20('+_0x5bd311[_0x5a491f(0x90a)+_0x5a491f(0x1eb)][_0x5a491f(0x42a)+'Count'],_0x5a491f(0x805)+_0x5a491f(0x949)):'')+(_0x5bfa88?_0x5a491f(0x4b3)+_0x5a491f(0x7aa)+_0x5a491f(0xb9f)+'le\x20sa'+_0x5a491f(0x4d8)+'orrec'+'tion)':''))),_0x4055c1[_0x5a491f(0x773)](_0x316d28);}if(_0xf137d4===_0x5a491f(0xaf8)+'s'){var _0x37ece3=[[_0xf663c[_0x5a491f(0x584)],_0xf663c[_0x5a491f(0xc09)],_0x1a1a65?_0x1a1a65[_0x5a491f(0xa1c)+'on']:'-'],[_0xf663c[_0x5a491f(0x1ce)],_0x5a491f(0x532)+_0x5a491f(0xbf1)+_0x5a491f(0xa55)+_0x5a491f(0x53e),_0x1a1a65?_0xf663c[_0x5a491f(0x92d)](_0x1a1a65[_0x5a491f(0x7f2)+'Appli'+'ed']+'\x20/\x20',_0x1a1a65[_0x5a491f(0x7f2)+'Regis'+_0x5a491f(0x53e)+_0x5a491f(0xa63)]):'-'],[_0x5a491f(0x855),_0x5a491f(0xc00)+_0x5a491f(0xb59)+_0x5a491f(0xa07)+'e()',_0x1a1a65&&_0x1a1a65[_0x5a491f(0x579)+_0x5a491f(0x359)]&&_0x1a1a65[_0x5a491f(0x579)+'emory']['captu'+_0x5a491f(0x996)]?_0xf663c[_0x5a491f(0x1dd)](Math[_0x5a491f(0x1d4)](_0xf663c['zcdcm'](_0x1a1a65['wasmM'+_0x5a491f(0x359)][_0x5a491f(0x710)],-0x118d34+-0x13b97*-0xd+-0xbd*-0x17bd))+('\x20MB\x20@'+'\x20')+_0x1a1a65[_0x5a491f(0x579)+_0x5a491f(0x359)][_0x5a491f(0xaab)],'ms'):'-'],[_0x5a491f(0x5be)+'rs',_0x5a491f(0x9db)+_0x5a491f(0x3ce)+'orkSy'+'nc',_0x1a1a65&&_0x1a1a65[_0x5a491f(0x44b)]?_0xf663c['KdvqN'](String,_0x1a1a65['esp']['playe'+_0x5a491f(0x66c)+'t']):'-'],['Enemi'+'es','every'+_0x5a491f(0x414)+_0x5a491f(0x8d7)+'u',_0x1a1a65&&_0x1a1a65[_0x5a491f(0x44b)]?String(_0x1a1a65['esp']['enemy'+'Count']):'-'],[_0xf663c[_0x5a491f(0x2dc)],_0xf663c[_0x5a491f(0x624)],_0x1a1a65&&_0x1a1a65[_0x5a491f(0x44b)]&&_0x1a1a65[_0x5a491f(0x44b)]['camer'+'a']?_0x1a1a65[_0x5a491f(0x44b)]['camer'+'a']+'\x20('+_0x1a1a65[_0x5a491f(0x44b)][_0x5a491f(0x53a)+_0x5a491f(0x912)]+')':'-']];for(_0x487f7f=0xbf4+0x2*0x10bf+-0x2d72;_0x487f7f<_0x37ece3['lengt'+'h'];_0x487f7f++){if(_0xf663c['QwKwQ']===_0xf663c['LApGr']){var _0x24efe4=_0x13385f(_0x22e72e[_0x5a491f(0x560)],[_0x5abb12[_0x5a491f(0x560)][-0x25e1+-0x44*-0x43+0x1415],_0x155460[_0x5a491f(0x560)][-0x918+0x1747+-0xe2e],_0x17bb42[_0x5a491f(0x560)][-0x3*0x991+0x5ab+0x170a]+(-0x22e0+-0xcb3+0x2f94)],0x2045+-0x1b0c+0x151*-0x1,0x22ff*-0x1+-0x1c45+-0xb32*-0x6);_0x24efe4&&(_0x54dab7=_0xf663c['zcdcm'](_0x24efe4['x'],-0x1d85*0x1+-0x73*0x6+0x241f),_0x238fb6=_0x24efe4['y']/(-0x1e9*-0x7+0xe2e+-0x17a5));}else{var _0x512fa2=_0xf663c[_0x5a491f(0x619)][_0x5a491f(0x438)]('|'),_0x2acd83=-0x5d9*-0x6+-0x18da+-0xa3c;while(!![]){switch(_0x512fa2[_0x2acd83++]){case'0':var _0x2895f9=_0xf663c['kWUTs'](_0x3e2bec,_0x37ece3[_0x487f7f][0x218f*-0x1+-0x2680+0x480f]);continue;case'1':_0x4bdb15[_0x5a491f(0x93f)+_0x5a491f(0x2bb)+'t']=String(_0x37ece3[_0x487f7f][0x41*0x1f+-0x105a*-0x1+-0x1837]);continue;case'2':_0x21b7c1['body'][_0x5a491f(0x129)+'dChil'+'d'](_0x2895f9);continue;case'3':_0x2895f9[_0x5a491f(0x129)+_0x5a491f(0x3e9)+'d'](_0x4bdb15);continue;case'4':_0x21b7c1[_0x5a491f(0x71e)]['lastC'+'hild']['sp']=_0x4bdb15;continue;case'5':_0x4bdb15[_0x5a491f(0x426)][_0x5a491f(0x423)+_0x5a491f(0x399)]='0';continue;case'6':_0x4bdb15[_0x5a491f(0x6fa)+'et']['k']=_0x37ece3[_0x487f7f][-0xb19*-0x2+-0x1660*-0x1+-0x2c91];continue;case'7':var _0x21b7c1=_0x4055c1[_0x5a491f(0x68d)+'h']?_0x4055c1[_0x4055c1[_0x5a491f(0x68d)+'h']-(0x2*-0x1109+-0x12e+0x2341)]:null;continue;case'8':var _0x4bdb15=_0xf663c[_0x5a491f(0xa3a)](_0x12ebe8,_0x5a491f(0x8be),_0xf663c['Ethwt']);continue;case'9':_0x4bdb15['style'][_0x5a491f(0x501)+_0x5a491f(0x4a8)]=_0xf663c['dCpIb'];continue;case'10':!_0x21b7c1&&(_0x21b7c1=_0xf663c['AZNTr'](_0x18f7c7,_0x5a491f(0x8f6)+'on',![]),_0x4055c1[_0x5a491f(0x773)](_0x21b7c1));continue;case'11':_0x4bdb15['style']['flex']='1';continue;}break;}}}var _0x5c40eb=_0x18f7c7(_0xf663c['xnMWl'],![]),_0x5ecba4=[[_0xf663c[_0x5a491f(0x924)],_0x1a1a65&&_0x1a1a65['local']&&_0x1a1a65[_0x5a491f(0x774)][_0x5a491f(0xafb)]?'FPSco'+'ntrol'+_0x5a491f(0x25c)+_0x1a1a65['local'][_0x5a491f(0xafb)]:'FPSco'+'ntrol'+'ler',_0x1a1a65&&_0x1a1a65['local']&&_0x1a1a65[_0x5a491f(0x774)]['feet']?_0x1a1a65[_0x5a491f(0x774)][_0x5a491f(0x5e1)][_0x5a491f(0x3c9)](function(_0x87fdc5){var _0x4dac1a=_0x5a491f;return Math[_0x4dac1a(0x1d4)](_0x87fdc5*(-0x7*-0x555+-0xa12+-0x1add))/(-0x1*-0x20b9+-0x1cb6+0x39f*-0x1);})['join']('\x20\x20'):'-'],[_0xf663c[_0x5a491f(0xb91)],_0xf663c['FZsXR']('+'+_0x5a4546,'m'),_0x1a1a65&&_0x1a1a65['local']&&_0x1a1a65[_0x5a491f(0x774)][_0x5a491f(0x560)]?_0x1a1a65['local']['eye'][_0x5a491f(0x3c9)](function(_0x3c5fd7){return Math['round'](_0xf663c['uWdkw'](_0x3c5fd7,0x6e*-0x2+-0x26c5+-0x3*-0xd57))/(-0x52+-0xfa0+-0x82b*-0x2);})[_0x5a491f(0xb6d)]('\x20\x20'):'-'],[_0x5a491f(0x6a8)+_0x5a491f(0x11b),_0xf663c[_0x5a491f(0xbf5)],_0xf663c['bzLRd'](_0x47fde0,_0x1a1a65,_0x5a491f(0x366)+'ntrol'+_0x5a491f(0xb78),-0x22f3+0xf65+-0x9*-0x22e)],[_0xf663c['wqXLu'],'0x40',_0x47fde0(_0x1a1a65,_0x5a491f(0x366)+_0x5a491f(0x2e2)+'ler',-0x58d*-0x1+0x1*-0x12e7+0x6cd*0x2)],['Jump\x20'+_0x5a491f(0xaad)+'t',_0x5a491f(0x114),_0xf663c[_0x5a491f(0x1b9)](_0x47fde0,_0x1a1a65,_0xf663c[_0x5a491f(0x746)],0x1a6a+0x249e+-0xc*0x529)],[_0xf663c[_0x5a491f(0x185)],_0xf663c[_0x5a491f(0x90f)],_0x47fde0(_0x1a1a65,_0xf663c[_0x5a491f(0x7b0)],-0x951+-0x1d99+0x27aa)]];for(_0x487f7f=-0x3*0x455+-0xaf6*-0x3+0x3*-0x6a1;_0x487f7f<_0x5ecba4[_0x5a491f(0x68d)+'h'];_0x487f7f++){var _0xc2ad5b=_0x3e2bec(_0x5ecba4[_0x487f7f][0x8*-0xa3+0x241*-0x4+0xe1c]),_0x33fc78=_0x12ebe8(_0x5a491f(0x8be),_0xf663c['Ethwt']);_0x33fc78[_0x5a491f(0x426)][_0x5a491f(0x423)+_0x5a491f(0x399)]='0',_0x33fc78[_0x5a491f(0x426)]['flex']='1',_0x33fc78['style']['textA'+'lign']=_0x5a491f(0xb12),_0x33fc78[_0x5a491f(0x93f)+_0x5a491f(0x2bb)+'t']=String(_0x5ecba4[_0x487f7f][0x4b5+-0x2c9+-0x46*0x7]),_0x33fc78[_0x5a491f(0x6fa)+'et']['k']=_0x5ecba4[_0x487f7f][0x1*-0x1c81+-0x611*-0x1+0x47d*0x5],_0xc2ad5b['appen'+_0x5a491f(0x3e9)+'d'](_0x33fc78),_0x5c40eb['body'][_0x5a491f(0x129)+_0x5a491f(0x3e9)+'d'](_0xc2ad5b),_0x5c40eb['body']['lastC'+'hild']['sp']=_0x33fc78;}_0x4055c1[_0x5a491f(0x773)](_0x5c40eb);}if(_0xf137d4===_0xf663c[_0x5a491f(0x154)]){if(_0xf663c[_0x5a491f(0xc5a)]==='mpgap')_0x453e4e[_0x5a491f(0x5c3)+'st']=_0x4e6c8d[0xae3*-0x2+0x132*-0xf+-0x217*-0x13][_0x5a491f(0x50a)](),_0x13bdad[_0x5a491f(0x30b)+'ts']++;else{var _0x59d076=_0x18f7c7(_0xf663c[_0x5a491f(0x911)],![]),_0xabae48=_0x1a1a65&&_0x1a1a65['warni'+_0x5a491f(0x847)]&&_0x1a1a65[_0x5a491f(0x78a)+_0x5a491f(0x847)]['lengt'+'h']?_0x1a1a65['warni'+_0x5a491f(0x847)]['join']('\x0a'):_0x5a491f(0x767)+_0x5a491f(0x329)+'s';_0x59d076['body']['appen'+'dChil'+'d'](_0x12ebe8(_0xf663c[_0x5a491f(0x507)],'sk-pr'+'e',_0xabae48)),_0x4055c1['push'](_0x59d076);var _0x1ab195=_0xf663c[_0x5a491f(0x6c4)](_0x18f7c7,'Repor'+'t',![]),_0x76ffa7=_0xf663c[_0x5a491f(0x9e9)](_0x12ebe8,'butto'+'n',_0x5a491f(0x1e4)+'n',_0xf663c['LQkGB']);_0x76ffa7[_0x5a491f(0x1f3)]=_0xf663c[_0x5a491f(0xbc3)],_0x76ffa7[_0x5a491f(0xa60)+'ck']=function(){var _0x19eca5=_0x5a491f;try{var _0x3984db=_0x34e80f[_0x19eca5(0xbb8)](_0x522140+'\x0a'+JSON['strin'+_0x19eca5(0x99f)](_0x1a1a65,null,0x18a5+-0xaa1*0x2+-0x1b1*0x2),'\x0a')+_0x3f51b2;if(navigator[_0x19eca5(0x5bd)+_0x19eca5(0x43d)]&&navigator['clipb'+'oard'][_0x19eca5(0x89c)+'Text'])navigator[_0x19eca5(0x5bd)+'oard']['write'+_0x19eca5(0x190)](_0x3984db)[_0x19eca5(0x39f)](function(){var _0x43dc92=_0x19eca5;_0x76ffa7[_0x43dc92(0x93f)+_0x43dc92(0x2bb)+'t']=_0x34e80f['gdkag'];});else _0x76ffa7['textC'+'onten'+'t']=_0x19eca5(0xb9b)+_0x19eca5(0x2b9)+'block'+_0x19eca5(0x556)+'open\x20'+_0x19eca5(0x50c)+'anel\x20'+_0x19eca5(0x58b)+'ad';}catch(_0x46d5c6){_0x76ffa7[_0x19eca5(0x93f)+'onten'+'t']='Copy\x20'+_0x19eca5(0x2fb)+'d';}},_0x1ab195['body'][_0x5a491f(0x129)+'dChil'+'d'](_0x12ebe8('div',_0xf663c['vrfpq'],'Paste'+_0x5a491f(0x585)+_0x5a491f(0x55f)+_0x5a491f(0x1ea)+'g\x20whe'+'n\x20som'+_0x5a491f(0xa32)+'g\x20loo'+'ks\x20wr'+_0x5a491f(0xa2d))),_0x1ab195['body']['appen'+'dChil'+'d'](_0x76ffa7),_0x4055c1['push'](_0x1ab195);}}return _0x4055c1;}function _0x28b6a2(){var _0x3096ef=_0x1e5d49;if(_0xf663c[_0x3096ef(0x46c)]('OvGPD',_0xf663c[_0x3096ef(0x956)])){if(_0xfded1e['open'])_0x3174a8(!![]);}else{var _0x53a9d0=_0x2c96d7(_0x3096ef(0x366)+_0x3096ef(0x2e2)+_0x3096ef(0xb78),_0xa6ca10[_0x5941eb[_0x374637]][_0x3096ef(0x4a6)]);_0x53a9d0['hits']=_0x1015ac[_0x5a163f[_0x2f957b]][_0x3096ef(0x487)],_0x53a9d0[_0x3096ef(0x70c)+'al']=_0x5540a9[_0x1cfc1e[_0x104e72]][_0x3096ef(0x4a6)]===_0x58db7b,_0xbaa184[_0x3096ef(0xc3f)+'oller'+'s']['push'](_0x53a9d0);}}function _0x259c82(){var _0x2d8a79=_0x1e5d49;try{var _0x196502=localStorage[_0x2d8a79(0x264)+'em'](_0x509130);if(!_0x196502)return;var _0x21194e=JSON[_0x2d8a79(0x891)](_0x196502);if(_0x21194e&&_0xf663c['DTVky'](typeof _0x21194e['x'],_0x2d8a79(0x333)+'r')&&typeof _0x21194e['y']===_0xf663c[_0x2d8a79(0x7dd)])_0xfded1e[_0x2d8a79(0xc29)]=_0x21194e;}catch(_0x213970){}}function _0x2ba327(){var _0x3c0e2d=_0x1e5d49;try{localStorage[_0x3c0e2d(0x5a9)+'em'](_0x509130,JSON[_0x3c0e2d(0xc6d)+_0x3c0e2d(0x99f)](_0xfded1e[_0x3c0e2d(0xc29)]));}catch(_0xb34184){}}function _0x1bf62e(){var _0x4ba798=_0x1e5d49,_0x5a3444=_0xfded1e['root'];if(!_0x5a3444||!_0x5a3444['style'])return;if(_0xfded1e[_0x4ba798(0xc29)]){if(_0xf663c[_0x4ba798(0x97c)]===_0x4ba798(0xb00))return _0xee6e55[_0x4ba798(0x2fb)+'d']++,_0x1581b3['lastE'+'rror']=_0x1e2f2c[_0x4ba798(0x4b0)+'rror']||_0xe22eca(_0x15f323&&_0x725c87[_0x4ba798(0x10c)+'ge']||_0x592586)[_0x4ba798(0x301)](-0x2*0x131b+-0x57*0x52+0x210a*0x2,0xc*-0x2cb+-0x19*-0x7f+0x19*0xdd),null;else _0x5a3444[_0x4ba798(0x426)][_0x4ba798(0x861)]=_0xf663c[_0x4ba798(0xb76)](_0xfded1e[_0x4ba798(0xc29)]['x'],'px'),_0x5a3444[_0x4ba798(0x426)][_0x4ba798(0xb4c)]=_0xfded1e[_0x4ba798(0xc29)]['y']+'px',_0x5a3444[_0x4ba798(0x426)]['right']=_0x4ba798(0xbab),_0x5a3444[_0x4ba798(0x426)][_0x4ba798(0x34d)+'m']=_0x4ba798(0xbab);}else _0x5a3444[_0x4ba798(0x426)][_0x4ba798(0x861)]=_0xf663c[_0x4ba798(0x42d)],_0x5a3444[_0x4ba798(0x426)][_0x4ba798(0xb4c)]=_0xf663c['UOeSo'],_0x5a3444[_0x4ba798(0x426)]['right']='24px',_0x5a3444['style'][_0x4ba798(0x34d)+'m']=_0xf663c[_0x4ba798(0x2f4)];}function _0xaa2d28(_0x377b9c,_0x47a804){var _0x3c5756=_0x1e5d49,_0x568f36={'LhdkI':function(_0x30072d){return _0x30072d();}};try{if(_0xf663c['YFIkU']===_0xf663c[_0x3c5756(0x5f0)])_0xf663c[_0x3c5756(0x6c5)](_0x3851fe);else{var _0x55e698=![],_0xebb71d=-0x18b7+-0x1*0xd54+0x1*0x260b,_0x1d7231=0x1*-0x112d+-0x1*0xe7d+0x1faa;_0x47a804[_0x3c5756(0x426)]['curso'+'r']=_0xf663c['xUoIt'],_0x47a804['style']['touch'+'Actio'+'n']='none';var _0xc9bc2e=function(_0x473670){var _0x4c020c=_0x3c5756;_0x55e698=!![],_0x47a804[_0x4c020c(0x426)][_0x4c020c(0x195)+'r']='grabb'+_0x4c020c(0x907);var _0x226e38={'left':_0xf663c['ZLcqN'](parseFloat,_0x377b9c[_0x4c020c(0x426)][_0x4c020c(0x861)])||-0x11c1+-0x9da+-0x25*-0xbf,'top':parseFloat(_0x377b9c[_0x4c020c(0x426)]['top'])||-0x1979+0x1*0x11d9+0x7a0};if(!_0x377b9c[_0x4c020c(0x426)][_0x4c020c(0x861)]||_0x377b9c['style'][_0x4c020c(0x861)]===_0xf663c[_0x4c020c(0x42d)]){if('rXYyE'!==_0xf663c[_0x4c020c(0x2cf)]){_0x1d4d43[_0x59fc1a]='0x'+_0x475c45[_0x13b805]['ptr'][_0x4c020c(0x10f)+_0x4c020c(0x907)](-0x4b3+-0x8ab*0x3+-0xb3*-0x2c);if(_0x18d131[_0x5937ce]['repla'+'ced'])_0x5b3b70['push'](_0xf8765e);}else _0x226e38[_0x4c020c(0x861)]=_0xf663c[_0x4c020c(0x3fe)](window[_0x4c020c(0x605)+_0x4c020c(0x9a0)]||-0x1d*-0x13d+-0xb*-0x16a+0xa4b*-0x5,_0x377b9c[_0x4c020c(0xa23)+_0x4c020c(0x62f)+'h']||0x6*0x473+0x9fe+-0x2244*0x1)-(0x3a*-0x53+-0x7a9+0x1a8f);}(!_0x377b9c['style'][_0x4c020c(0xb4c)]||_0xf663c['OPwBD'](_0x377b9c[_0x4c020c(0x426)]['top'],_0x4c020c(0xbab)))&&(_0x226e38[_0x4c020c(0xb4c)]=(window['inner'+_0x4c020c(0x649)+'t']||-0xd3*-0x2b+-0x2024+-0xd*0x41)-(_0x377b9c['offse'+_0x4c020c(0xb75)+'ht']||-0x1eb1+0x214c*-0x1+0x418d)-(0xc*0xa9+-0x1f67*-0x1+-0x273b));_0xebb71d=(_0x473670[_0x4c020c(0x192)+'tX']||-0x15d*0x13+0x100*-0x25+-0x3ee7*-0x1)-_0x226e38[_0x4c020c(0x861)],_0x1d7231=_0xf663c['DnugD'](_0x473670['clien'+'tY']||-0x19f7+-0xb92*0x1+-0xc83*-0x3,_0x226e38['top']);try{_0x4c020c(0xbf7)===_0xf663c[_0x4c020c(0x5b1)]?_0x473670[_0x4c020c(0x944)+_0x4c020c(0x678)+'ault']():_0x40d130[_0x4c020c(0x78a)+'ngs'][_0x4c020c(0x773)](_0x4c020c(0x5c6)+'lt\x20si'+'nce\x20f'+_0x4c020c(0x87b)+_0x4c020c(0x856)+'re\x20(r'+_0x4c020c(0x960)+'n?):\x20'+_0x36da5f['insta'+_0x4c020c(0x4ee)+'eplac'+'ed'][_0x4c020c(0xb6d)](',\x20'));}catch(_0x5595a7){}},_0x174cfc=function(_0x189002){var _0x3341b9=_0x3c5756;if(!_0x55e698)return;var _0x40647b=_0x377b9c['offse'+_0x3341b9(0x62f)+'h']||0x1a5*-0x17+-0xf74+-0x37b3*-0x1,_0x2679ed=_0x377b9c[_0x3341b9(0xa23)+_0x3341b9(0xb75)+'ht']||0x1*0x1c17+0x19*-0x1+-0x1a6e,_0x592055=(_0x189002['clien'+'tX']||0x2465+0x26f0+-0x4b55)-_0xebb71d,_0x35025c=(_0x189002[_0x3341b9(0x192)+'tY']||0x3*-0xbaa+0x1*0xf5e+-0x274*-0x8)-_0x1d7231;_0x592055=Math['max'](0x2275*0x1+-0x1cb*-0x1+0x1*-0x2438,Math[_0x3341b9(0x898)](_0xf663c['KHMPs'](window[_0x3341b9(0x605)+'Width']||-0x2432*-0x1+-0x19*-0x180+-0x49b2,_0x40647b)-(-0x1639*-0x1+0x1b51+-0x1*0x3182),_0x592055)),_0x35025c=Math[_0x3341b9(0x86e)](-0x1*0xb26+-0x67c+0x286*0x7,Math['min'](_0xf663c['bvcIa'](_0xf663c[_0x3341b9(0xac8)](window[_0x3341b9(0x605)+_0x3341b9(0x649)+'t']||-0x1cca+-0x19*0x11a+0x3854,_0x2679ed),0x25df+0x1391+-0x3968),_0x35025c)),_0x377b9c[_0x3341b9(0x426)]['left']=_0x592055+'px',_0x377b9c['style'][_0x3341b9(0xb4c)]=_0x35025c+'px',_0x377b9c['style'][_0x3341b9(0xb12)]=_0x3341b9(0xbab),_0x377b9c[_0x3341b9(0x426)][_0x3341b9(0x34d)+'m']=_0x3341b9(0xbab),_0xfded1e['pos']={'x':_0x592055,'y':_0x35025c};},_0x381744=function(){var _0x51e896=_0x3c5756;if(!_0x55e698)return;_0x55e698=![],_0x47a804['style'][_0x51e896(0x195)+'r']=_0x51e896(0x8c9),_0x568f36[_0x51e896(0x467)](_0x2ba327);};_0x47a804[_0x3c5756(0xc9a)+_0x3c5756(0x4cf)+'stene'+'r'](_0xf663c['GFsBz'],_0xc9bc2e),window[_0x3c5756(0xc9a)+_0x3c5756(0x4cf)+_0x3c5756(0x825)+'r'](_0x3c5756(0x73e)+_0x3c5756(0x20a),_0x174cfc),window['addEv'+_0x3c5756(0x4cf)+'stene'+'r'](_0x3c5756(0x73e)+'up',_0x381744),_0x47a804['addEv'+_0x3c5756(0x4cf)+_0x3c5756(0x825)+'r'](_0xf663c[_0x3c5756(0x182)],_0xc9bc2e,{'passive':![]}),window['addEv'+_0x3c5756(0x4cf)+_0x3c5756(0x825)+'r'](_0xf663c[_0x3c5756(0xb4e)],_0x174cfc,{'passive':![]}),window['addEv'+_0x3c5756(0x4cf)+_0x3c5756(0x825)+'r'](_0x3c5756(0xc27)+'end',_0x381744);}}catch(_0x26872a){}}function _0x8949da(){var _0x537cb7=_0x1e5d49,_0x209d31={'hOXjp':function(_0x6c0d5c,_0x58e71d){return _0x6c0d5c(_0x58e71d);},'dErHb':'gQzxt','GvGOA':_0x537cb7(0x2f2)+_0x537cb7(0x15b)+_0x537cb7(0x9d0)+_0x537cb7(0x2c0)+'sert)','kUukH':_0x537cb7(0x2f2)+_0x537cb7(0x15b)+_0x537cb7(0x9d0)+_0x537cb7(0x7ab)+_0x537cb7(0x82d)+_0x537cb7(0x12e)+_0x537cb7(0x585)+_0x537cb7(0x5ec)+_0x537cb7(0xa49)+'rt)'};if(_0xfded1e['built'])return _0xfded1e['root'];try{if(!document['body']||!document[_0x537cb7(0x71e)][_0x537cb7(0x129)+_0x537cb7(0x3e9)+'d'])return null;if(!document[_0x537cb7(0x5a2)+_0x537cb7(0x71d)+_0x537cb7(0x520)]('sakur'+_0x537cb7(0x3d2)+_0x537cb7(0x221))){var _0x1e4cea=document[_0x537cb7(0xa0e)+'eElem'+'ent'](_0xf663c['IWOpa']);_0x1e4cea['id']=_0xf663c['uxbuI'],_0x1e4cea['textC'+_0x537cb7(0x2bb)+'t']=_0x19c4a1,(document[_0x537cb7(0x6d9)]||document[_0x537cb7(0x27f)+_0x537cb7(0x8d6)+_0x537cb7(0x71d)])[_0x537cb7(0x129)+_0x537cb7(0x3e9)+'d'](_0x1e4cea);}var _0xf99dac=_0xf663c['ZTWzu'](_0x12ebe8,_0xf663c[_0x537cb7(0x507)],_0x537cb7(0x8a8)+_0x537cb7(0x634));_0xf99dac['id']=_0x537cb7(0x6ca)+_0x537cb7(0x3d2)+_0x537cb7(0x128)+'t';var _0xf207d5=_0x12ebe8(_0x537cb7(0x31b),_0x537cb7(0xb63)+'de'),_0x56b8ea=_0xf663c['vKXOe'](_0x12ebe8,'div',_0xf663c[_0x537cb7(0x219)],_0x60ffce);_0xf207d5[_0x537cb7(0x129)+_0x537cb7(0x3e9)+'d'](_0x56b8ea);var _0x45d339=_0x12ebe8(_0xf663c[_0x537cb7(0x507)],'mn-ma'+'in'),_0x5f0ff8=_0x12ebe8(_0x537cb7(0x31b),_0xf663c[_0x537cb7(0x991)]),_0x292386=_0x12ebe8(_0xf663c[_0x537cb7(0x507)],_0x537cb7(0x1a2)+'tles'),_0x31cf24=_0xf663c[_0x537cb7(0x4c2)](_0x12ebe8,'div','mn-h',_0x537cb7(0x2f2)+'a\x20Ski'+'llWar'+'z'),_0x11ce18=_0xf663c[_0x537cb7(0x9e9)](_0x12ebe8,_0x537cb7(0x31b),_0x537cb7(0xa62)+'b',_0xf663c['LXzEW']);_0x292386[_0x537cb7(0x129)+'dChil'+'d'](_0x31cf24),_0x292386['appen'+_0x537cb7(0x3e9)+'d'](_0x11ce18);var _0x1fc0c=_0xf663c[_0x537cb7(0x14c)](_0x12ebe8,_0xf663c['aGzQp'],_0x537cb7(0x59a)+_0x537cb7(0x31d),_0x537cb7(0x657)+_0x537cb7(0xae0)+_0x537cb7(0x1ed)+_0x537cb7(0x916)+_0x537cb7(0x56e)+_0x537cb7(0x67a)+'\x20d=\x22M'+_0x537cb7(0x7eb)+'2\x2012M'+'18\x206\x20'+'6\x2018\x22'+'/></s'+_0x537cb7(0x9dc));_0x1fc0c[_0x537cb7(0xa60)+'ck']=function(){var _0x5e8675=_0x537cb7;if(_0xf663c[_0x5e8675(0x345)](_0xf663c[_0x5e8675(0x74a)],'DKcPV')){var _0x2ffbe1=_0x53c515();if(_0x2ffbe1&&_0x2ffbe1[_0x5e8675(0x441)+'e']&&_0x2ffbe1['Modul'+'e'][_0x5e8675(0xa81)+'8']&&_0x2ffbe1[_0x5e8675(0x441)+'e'][_0x5e8675(0xa81)+'8']['buffe'+'r'])return _0x2ffbe1['Modul'+'e'][_0x5e8675(0xa81)+'8'];}else _0xf663c['PwEQl'](_0x3174a8,![]);},_0x5f0ff8[_0x537cb7(0x129)+_0x537cb7(0x3e9)+'d'](_0x292386),_0x5f0ff8['appen'+'dChil'+'d'](_0x1fc0c);var _0xd45718=_0xf663c['yzsaK'](_0x12ebe8,_0x537cb7(0x31b),_0x537cb7(0x197)+'ls');_0x45d339[_0x537cb7(0x129)+'dChil'+'d'](_0x5f0ff8),_0x45d339[_0x537cb7(0x129)+_0x537cb7(0x3e9)+'d'](_0xd45718),_0xf99dac['appen'+'dChil'+'d'](_0xf207d5),_0xf99dac[_0x537cb7(0x129)+'dChil'+'d'](_0x45d339),document['body'][_0x537cb7(0x129)+'dChil'+'d'](_0xf99dac),_0xfded1e['root']=_0xf99dac,_0xfded1e[_0x537cb7(0x292)]=_0xd45718,_0xfded1e['head']=_0x31cf24,_0xfded1e[_0x537cb7(0x6e8)]=_0x11ce18,_0xf663c[_0x537cb7(0x26f)](_0x259c82),_0xf663c['Rthcg'](_0x1bf62e),_0xf663c[_0x537cb7(0x323)](_0xaa2d28,_0xf99dac,_0x5f0ff8);var _0x45b86f={};for(var _0x185c26=-0x1fea+0x1*0x1e46+0xe*0x1e;_0x185c26<_0x11d7bc[_0x537cb7(0x68d)+'h'];_0x185c26++){var _0xa07704=_0x11d7bc[_0x185c26],_0x2b2240=_0xf663c['BttTV'](_0x12ebe8,_0x537cb7(0x9f5)+'n',_0xf663c[_0x537cb7(0x5d3)],'<smal'+'l>'+_0xa07704[_0x537cb7(0xbb7)]+(_0x537cb7(0x639)+'ll>'));_0x2b2240[_0x537cb7(0x1f3)]=_0x537cb7(0x9f5)+'n',_0x2b2240['title']=_0xa07704[_0x537cb7(0xbb7)],function(_0x21c6c6){var _0x393ee1=_0x537cb7;_0x2b2240[_0x393ee1(0xa60)+'ck']=function(){_0x209d31['hOXjp'](_0x4b565e,_0x21c6c6);};}(_0xa07704['id']),_0x45b86f[_0xa07704['id']]=_0x2b2240,_0xf207d5['appen'+'dChil'+'d'](_0x2b2240);}_0xfded1e['butto'+'ns']=_0x45b86f;var _0x5c633e=_0xf663c['QDxNu'](_0x12ebe8,'div',null,_0x1243f6);return _0x5c633e['id']=_0xf663c['MrfVj'],_0x5c633e[_0x537cb7(0x1c8)]=_0xf663c[_0x537cb7(0x5b6)],_0x5c633e[_0x537cb7(0x9f4)+'seent'+'er']=function(){var _0x4a7787=_0x537cb7;_0x5c633e[_0x4a7787(0x426)][_0x4a7787(0xadd)+'ty']='1';},_0x5c633e[_0x537cb7(0x9f4)+'selea'+'ve']=function(){var _0x2ff8b8=_0x537cb7;_0x5c633e[_0x2ff8b8(0x426)]['opaci'+'ty']=_0xfded1e['open']?'1':'.5';},_0x5c633e['oncli'+'ck']=function(_0x2018ed){var _0x527f64=_0x537cb7;if(_0x2018ed&&_0x2018ed[_0x527f64(0x9a4)+_0x527f64(0x495)+'ation'])_0x2018ed[_0x527f64(0x9a4)+'ropag'+_0x527f64(0x449)]();_0x3174a8(!_0xfded1e['open']);},document[_0x537cb7(0x71e)][_0x537cb7(0x129)+_0x537cb7(0x3e9)+'d'](_0x5c633e),_0xfded1e['petal']=_0x5c633e,setInterval(function(){var _0x110ee9=_0x537cb7;if('gQzxt'===_0x209d31[_0x110ee9(0x5ac)])try{if(!_0xfded1e['petal'])return;var _0x172849=_0x411cf8();_0xfded1e[_0x110ee9(0xb74)][_0x110ee9(0x426)]['opaci'+'ty']=_0xfded1e['open']?'1':_0x172849?'.8':_0x110ee9(0x4ea),_0xfded1e[_0x110ee9(0xb74)][_0x110ee9(0x1c8)]=_0x172849?_0x209d31[_0x110ee9(0xa08)]:_0x209d31['kUukH'];}catch(_0x30fe3b){}else _0x3bee8f['textC'+'onten'+'t']=_0x52b6bd[_0x110ee9(0xc6d)+_0x110ee9(0x99f)](_0x5ba5ec,null,0xca5+0x1b88+-0x282c);},0x60c+-0x11a6*-0x1+0xa7b*-0x2),_0xfded1e[_0x537cb7(0x8c0)]=!![],_0xf663c[_0x537cb7(0x1f6)](_0x4b565e,_0xfded1e[_0x537cb7(0x2ca)]),_0xf99dac;}catch(_0x1f784a){if(_0xf663c['isGnI']!=='ikiXy')_0x3f0b31[_0x537cb7(0x78a)+'ngs']['push'](_0xf663c[_0x537cb7(0x328)]('ANOTH'+_0x537cb7(0x914)+_0x537cb7(0xbfa)+_0x537cb7(0xbf6)+'OK\x20OV'+_0x537cb7(0x505)+'ndow.'+'Unity'+'WebMo'+_0x537cb7(0xc7c)+_0x537cb7(0x559)+'Runti'+_0x537cb7(0x752)+_0x537cb7(0x4d6)+_0x537cb7(0x165)+'\x20'+_0xf663c[_0x537cb7(0x4eb)]+('the\x20g'+_0x537cb7(0x169)+'hile\x20'+'the\x20o'+_0x537cb7(0x9e8)+_0x537cb7(0x64f)+_0x537cb7(0x46d)+_0x537cb7(0x3b2)+'haned'+_0x537cb7(0xa7a)+_0x537cb7(0x680)+_0x537cb7(0xb61)+'\x20othe'+'r\x20'),_0xf663c[_0x537cb7(0x55a)]));else return console[_0x537cb7(0x7b3)]('%c[sa'+'kura]'+_0x537cb7(0x2be)+_0x537cb7(0x761)+'ailab'+'le',_0xf663c[_0x537cb7(0xa8b)]+_0x3349a7,_0x1f784a),null;}}function _0x4b565e(_0x2dff6c){var _0x2688bb=_0x1e5d49;_0xfded1e['cat']=_0x2dff6c,_0xfded1e[_0x2688bb(0xc5d)]=[];if(!_0xfded1e['cols'])return;var _0x2ea49b=null;for(var _0xedd026=-0x1f4*-0x1+-0x1*-0x23cf+0x565*-0x7;_0xedd026<_0x11d7bc['lengt'+'h'];_0xedd026++)if(_0xf663c['mJtJu'](_0x11d7bc[_0xedd026]['id'],_0x2dff6c))_0x2ea49b=_0x11d7bc[_0xedd026];_0xfded1e['head'][_0x2688bb(0x93f)+'onten'+'t']=_0xf663c['ielYy'](_0xf663c[_0x2688bb(0x39c)],_0x2ea49b&&_0x2ea49b[_0x2688bb(0xbb7)]||'?');for(var _0x27df06 in _0xfded1e[_0x2688bb(0x9f5)+'ns']){if(_0xfded1e[_0x2688bb(0x9f5)+'ns'][_0x27df06]['class'+_0x2688bb(0x819)])_0xfded1e['butto'+'ns'][_0x27df06][_0x2688bb(0x8c8)+_0x2688bb(0x7bb)]=_0xf663c[_0x2688bb(0x8ff)](_0x2688bb(0x4d3)+'b',_0x27df06===_0x2dff6c?_0x2688bb(0x1e7)+'ve':'');}var _0x1fdca0=[];try{_0xf663c['GeHJh']===_0x2688bb(0x55c)?_0x1fdca0=_0xf663c['HVier'](_0x5b5a91,_0x2dff6c):_0x4cf2f5['warni'+_0x2688bb(0x847)][_0x2688bb(0x773)](_0xf663c[_0x2688bb(0xb9a)]+(_0x2688bb(0xaf9)+_0x2688bb(0x26c)+_0x2688bb(0x24e)+'not\x20i'+'n\x20a\x20r'+_0x2688bb(0x98b)+'\x20or\x20t'+'he\x20ho'+_0x2688bb(0xb43)+'\x20on\x20t'+'he\x20wr'+_0x2688bb(0x447)+_0x2688bb(0x283)+_0x2688bb(0x67c)));}catch(_0x582a89){_0x2688bb(0x78c)===_0xf663c[_0x2688bb(0x9f8)]?_0x1fdca0=[]:(_0x2c0a80[_0x2688bb(0x940)+_0x2688bb(0x94c)]=!!(_0xab61da&&_0x263061['Modul'+'e']),_0x2eebfb[_0x2688bb(0xacb)+'8']=!!(_0x51707b&&_0xef5f16[_0x2688bb(0x441)+'e']&&_0x59547b['Modul'+'e'][_0x2688bb(0xa81)+'8']),_0x265539['heapB'+_0x2688bb(0x60c)]=_0x4635d8[_0x2688bb(0xacb)+'8']?_0x65b15e['Modul'+'e'][_0x2688bb(0xa81)+'8'][_0x2688bb(0x68d)+'h']:-0x1d3*0x1+0x2*0x400+0x1f*-0x33);}while(_0xfded1e['cols'][_0x2688bb(0x29a)+'Child'])_0xfded1e[_0x2688bb(0x292)][_0x2688bb(0x60d)+_0x2688bb(0xa2f)+'d'](_0xfded1e[_0x2688bb(0x292)]['first'+_0x2688bb(0x9d4)]);for(var _0x1dada4=0x16a9+-0x36*-0x40+-0x2429;_0xf663c['VRsRv'](_0x1dada4,_0x1fdca0[_0x2688bb(0x68d)+'h']);_0x1dada4++)_0xfded1e[_0x2688bb(0x292)][_0x2688bb(0x129)+_0x2688bb(0x3e9)+'d'](_0x1fdca0[_0x1dada4]);}function _0x3174a8(_0x13aab9){var _0x4feed1=_0x1e5d49;_0xfded1e[_0x4feed1(0x16e)]=!!_0x13aab9;var _0xca23e3=_0x8949da();if(!_0xca23e3)return;_0xca23e3['class'+'Name']=_0x4feed1(0x8a8)+_0x4feed1(0x634)+(_0xfded1e['open']?_0xf663c[_0x4feed1(0x3a5)]:'');if(_0xfded1e[_0x4feed1(0xb74)])_0xfded1e['petal'][_0x4feed1(0x426)][_0x4feed1(0xadd)+'ty']=_0xfded1e[_0x4feed1(0x16e)]?'1':'.5';if(_0xfded1e[_0x4feed1(0x16e)]){if(_0x4feed1(0x122)===_0x4feed1(0x681))_0x44320e=_0xf663c[_0x4feed1(0xc1b)](_0xf663c[_0x4feed1(0x73c)](_0xf663c[_0x4feed1(0x376)],_0x14e1d2[_0x4feed1(0x854)](_0x44bc2e[_0x4feed1(0xb59)+_0x4feed1(0xb01)])[_0x4feed1(0x68d)+'h'])+('\x20obje'+'cts\x20·'+'\x20')+_0x96c4bd,'s'),_0x3b9822=_0x4feed1(0xab0)+'a8';else{_0xf663c['gqmTd'](_0x4b565e,_0xfded1e[_0x4feed1(0x2ca)]);try{var _0xd23d7b=window[_0x4feed1(0x605)+'Heigh'+'t']||0x1*-0x229e+-0x29*0x52+0x32e0;if(_0xd23d7b<-0x25a2+0xa*-0xe3+0x1876*0x2)_0xf663c['HZXUI'](_0x2981ba,![]);}catch(_0x15acf1){}}}}function _0x363b06(){var _0xa84211=_0x1e5d49;if(_0xf663c[_0xa84211(0x6dc)]('lmDHz',_0xf663c['LGYwj'])){var _0x1b7b8b={},_0x101a4b=_0x225287();if(!_0x101a4b)return _0x1b7b8b;_0x1b7b8b[_0xf663c[_0xa84211(0x55e)]]=_0x101a4b[_0xa84211(0x73e)+_0xa84211(0x76a)];for(var _0x58395c in _0x101a4b[_0xa84211(0x6e6)+'s'])_0x1b7b8b[_0xf663c[_0xa84211(0x2b5)]+_0x58395c]=_0x101a4b['float'+'s'][_0x58395c];if(_0x101a4b[_0xa84211(0x53a)+'a'])_0x1b7b8b[_0xf663c[_0xa84211(0x865)]]=_0x101a4b[_0xa84211(0x53a)+'a'];return _0x1b7b8b;}else{if(!_0xfded1e[_0xa84211(0x16e)]||!_0xfded1e['built'])return;try{for(var _0x12c597=0x244d*0x1+0x36*-0x6a+-0xdf1*0x1;_0x12c597<_0xfded1e['syncs']['lengt'+'h'];_0x12c597++){if(_0xa84211(0x20e)==='wdCOE')_0x48e462(!_0x4688ad()),_0x1b4a1c();else try{_0xfded1e['syncs'][_0x12c597]();}catch(_0xddbfe9){}}var _0x59cd82=_0x1cac27;_0xfded1e[_0xa84211(0x6e8)][_0xa84211(0x93f)+'onten'+'t']=_0x59cd82?_0xf663c['Cpwjl'](_0xf663c[_0xa84211(0x379)](_0xf663c[_0xa84211(0x1e9)](_0xf663c[_0xa84211(0xaa8)](_0xf663c[_0xa84211(0x540)]('v',_0x59cd82[_0xa84211(0xa1c)+'on'])+_0xf663c[_0xa84211(0xa8e)],_0x59cd82['hooks'+_0xa84211(0x85e)+'ed'])+'/',_0x59cd82[_0xa84211(0x7f2)+'Total'])+(_0xa84211(0xc2d)+'playe'+'rs\x20')+(_0x59cd82['esp']&&_0x59cd82[_0xa84211(0x44b)]['playe'+'rCoun'+'t']||0x15*0x123+0x25b7+-0x3d96*0x1),_0xf663c[_0xa84211(0x312)]),_0x59cd82[_0xa84211(0x579)+_0xa84211(0x359)]&&_0x59cd82[_0xa84211(0x579)+_0xa84211(0x359)][_0xa84211(0x856)+_0xa84211(0x996)]?Math['round'](_0x59cd82['wasmM'+_0xa84211(0x359)]['bytes']/(0xdfa1+0x3b7*0x331+0x17*0x2468))+'MB':'-'):_0xa84211(0x1d5)+_0xa84211(0x2fd)+'r\x20the'+_0xa84211(0x47c)+_0xa84211(0x5ce)+'ort…';var _0x52b6d4=_0xfded1e[_0xa84211(0x292)]['query'+'Selec'+_0xa84211(0x69f)+'l']?_0xfded1e['cols'][_0xa84211(0x431)+_0xa84211(0x808)+_0xa84211(0x69f)+'l'](_0xa84211(0x575)+_0xa84211(0x66f)):[];for(var _0x2c2032=0x696+-0x174f+0x10b9;_0x2c2032<_0x52b6d4['lengt'+'h'];_0x2c2032++){var _0x3879e8=_0x52b6d4[_0x2c2032][_0xa84211(0x6fa)+'et']['k'],_0x463bc6='';if(_0x3879e8===_0xf663c[_0xa84211(0xc09)])_0x463bc6=_0x59cd82?_0x59cd82['versi'+'on']:'-';else{if(_0x3879e8===_0xf663c['ROFGd'])_0x463bc6=_0x59cd82?_0x59cd82[_0xa84211(0x7f2)+'Appli'+'ed']+_0xf663c[_0xa84211(0x67b)]+_0x59cd82['hooks'+_0xa84211(0x125)+'tered'+_0xa84211(0xa63)]:'-';else{if(_0x3879e8==='from\x20'+_0xa84211(0xb59)+_0xa84211(0xa07)+_0xa84211(0x8c1))_0x463bc6=_0x59cd82&&_0x59cd82['wasmM'+'emory']&&_0x59cd82[_0xa84211(0x579)+'emory'][_0xa84211(0x856)+_0xa84211(0x996)]?_0xf663c['uulJo'](Math[_0xa84211(0x1d4)](_0x59cd82[_0xa84211(0x579)+'emory'][_0xa84211(0x710)]/(0x1c966+0x4d8d*0x3f+-0x41a3*0x13))+(_0xa84211(0xb3a)+'\x20')+_0x59cd82['wasmM'+'emory'][_0xa84211(0xaab)],'ms'):'-';else{if(_0x3879e8===_0xf663c['xJpuc'])_0x463bc6=_0x59cd82&&_0x59cd82[_0xa84211(0x44b)]?_0xf663c['xfDaJ'](String,_0x59cd82[_0xa84211(0x44b)][_0xa84211(0x43a)+'rCoun'+'t']):'-';else{if(_0xf663c['SNapU'](_0x3879e8,'every'+'one\x20b'+_0xa84211(0x8d7)+'u'))_0x463bc6=_0x59cd82&&_0x59cd82[_0xa84211(0x44b)]?String(_0x59cd82[_0xa84211(0x44b)][_0xa84211(0xa80)+_0xa84211(0x115)]):'-';else{if(_0xf663c['LJAVF'](_0x3879e8,_0xf663c['GGSjX']))_0x463bc6=_0x59cd82&&_0x59cd82[_0xa84211(0x44b)]&&_0x59cd82[_0xa84211(0x44b)][_0xa84211(0x53a)+'a']?_0xf663c[_0xa84211(0x920)](_0xf663c['QQeau'](_0x59cd82['esp']['camer'+'a']+'\x20(',_0x59cd82['esp'][_0xa84211(0x53a)+'aFrom']),')'):'-';else{if(_0x3879e8===_0xf663c[_0xa84211(0x953)])_0x463bc6=_0x59cd82&&_0x59cd82['local']&&_0x59cd82[_0xa84211(0x774)][_0xa84211(0x5e1)]?_0x59cd82[_0xa84211(0x774)]['feet'][_0xa84211(0x3c9)](function(_0x41ca2){var _0x31e945=_0xa84211;return _0xf663c[_0x31e945(0x8b6)](Math['round'](_0xf663c['XiRxg'](_0x41ca2,0x36*-0xb7+-0x36b+0x2a69)),0x9*-0x249+0x1d2+-0x1323*-0x1);})['join']('\x20\x20'):'-';else{if(_0x3879e8===_0xf663c[_0xa84211(0x7cc)])_0x463bc6=_0x59cd82&&_0x59cd82[_0xa84211(0x774)]&&_0x59cd82[_0xa84211(0x774)][_0xa84211(0x560)]?_0x59cd82[_0xa84211(0x774)][_0xa84211(0x560)][_0xa84211(0x3c9)](function(_0x169dbe){return Math['round'](_0x169dbe*(0x9d6+0x15dc+0x1*-0x1f4e))/(-0x8f*0x1+0x214b+-0x2058);})['join']('\x20\x20'):'-';else{var _0x5f4380=_0x3879e8[_0xa84211(0x438)]('+');_0x463bc6=_0xf663c['imoDz'](_0x47fde0,_0x59cd82,_0xf663c['xowGm'](_0x5f4380[0x7*0x239+-0x1*0x3c7+-0xbc8]['index'+'Of'](_0xf663c[_0xa84211(0x185)]),-0x1a51+-0x576+0x1fc7)?'Healt'+'hScri'+'pt':_0xf663c['onIMM'],parseInt(_0x5f4380[0x1*-0x4fd+0xb*-0x163+-0x1*-0x143f],-0x2*0xdb7+0x25e4+0x16*-0x79));}}}}}}}}if(_0xf663c[_0xa84211(0x3ad)](_0x463bc6,_0x52b6d4[_0x2c2032][_0xa84211(0x93f)+_0xa84211(0x2bb)+'t']))_0x52b6d4[_0x2c2032][_0xa84211(0x93f)+'onten'+'t']=_0x463bc6;}}catch(_0x5f314d){}}}function _0x290e81(){var _0xc385a3=_0x1e5d49;try{var _0x350d0e=_0x9aa442();return _0x350d0e&&_0x350d0e[_0xc385a3(0x5e1)]?_0x350d0e['feet'][-0x6e4+0x34+0x6b1*0x1]:null;}catch(_0x14937a){if(_0xf663c[_0xc385a3(0xaa6)](_0xf663c['aIGwd'],'AKeFP'))try{_0x29859b['syncs'][_0x55f12c]();}catch(_0x2571b3){}else return null;}}var _0x3ca97b=0xa04+0x1073+0x209*-0xd+0.5,_0x320384=-0xca4*0x1+0xf3d+0x293*-0x1+0.25,_0x5a4546=0x3a5*-0x8+-0x180c+-0x3535*-0x1+0.8;function _0x3b1440(_0x2a252e,_0x36fe8a){var _0x55426c=_0x1e5d49,_0x47694e={'DVqGB':function(_0x5c77d2){return _0x5c77d2();},'QGijS':function(_0x1acd95,_0x544311){return _0x1acd95/_0x544311;},'NqcgR':function(_0x38e3fc,_0x45174c){var _0x2b78de=_0x49fc;return _0xf663c[_0x2b78de(0x539)](_0x38e3fc,_0x45174c);},'KIdsq':_0x55426c(0x8ae)+'e'};try{var _0x2969f5=[],_0x31ef2f,_0x3a3a6d,_0x26697d=_0x36fe8a!==null&&_0x36fe8a!==undefined&&_0xf663c['geiQq'](isFinite,_0x36fe8a),_0x4837c2=0x6db+0x1539*0x1+-0x1c14;for(_0x31ef2f=-0x17b3+-0x1e21+-0x4*-0xd75;_0xf663c['qsgQB'](_0x31ef2f,_0x2a252e[_0x55426c(0x68d)+'h']);_0x31ef2f++){if(_0xf663c[_0x55426c(0xc0a)]===_0xf663c['AlmXf'])try{_0x47694e[_0x55426c(0x721)](_0x4614a8);}catch(_0x430818){}else{var _0x47bff0=_0x2a252e[_0x31ef2f]['v'];if(!_0x47bff0)continue;var _0x1dbb9f=Math['sqrt'](_0xf663c['DYnup'](_0x47bff0[-0x1e48+-0x16c9+-0x1*-0x3511]*_0x47bff0[0x191b+0x3d2*0x3+-0x2491],_0xf663c[_0x55426c(0x3dc)](_0x47bff0[-0x55d*0x5+0x1dbe+0x3*-0xf9],_0x47bff0[-0x43f+-0x11c0*0x2+0x27c1])));if(_0xf663c['LjYSx'](_0x1dbb9f,_0x4837c2))_0x4837c2=_0x1dbb9f;}}var _0x2fafe8=_0xf663c['ibflC'](_0x4837c2,-0x7*0xc7+-0x1901+0xa26*0x3+0.25),_0x2f9f67=-0x15*0x4e+-0x215*-0x5+0x4f*-0xd;typeof console!=='undef'+_0x55426c(0x147)&&console[_0x55426c(0x361)]&&!globalThis[_0x55426c(0x900)+_0x55426c(0xbd2)]&&(globalThis['__ppL'+_0x55426c(0xbd2)]=0x7*0x425+-0x404+-0x18fe,console[_0x55426c(0x361)](_0xf663c['ielYy'](_0xf663c['GqCBe'](_0xf663c['uulJo'](_0xf663c[_0x55426c(0xae5)](_0x55426c(0x915)+'n='+_0x2a252e[_0x55426c(0x68d)+'h']+_0xf663c['bhEiV']+_0x4837c2[_0x55426c(0xc52)+'ed'](0x7*-0x11d+0x2191+-0x19c4),_0x55426c(0x418)+'r='),_0x2fafe8['toFix'+'ed'](0x2*-0x1238+-0x28*0x56+-0x9fa*-0x5)),'\x20know'+'n=')+_0x26697d+('\x20samp'+_0x55426c(0x591)),JSON['strin'+'gify'](_0x2a252e['slice'](-0x250d+0x5ae+0x1f5f,0x1adc+-0xa3b+-0x109f)))));for(_0x31ef2f=-0xaad+-0x18f0+0x239d;_0x31ef2f<_0x2a252e['lengt'+'h'];_0x31ef2f++){var _0x29bb0a=_0x2a252e[_0x31ef2f]['v'];if(!_0x29bb0a)continue;if(_0x29bb0a[-0x1*0x1475+0x7e2+0xc93]===-0x1*-0xb38+0x5bc+-0x364*0x5&&_0x29bb0a[-0x5*0x2b+-0x56c+0x191*0x4]===-0xa7*-0x3+0x148c+-0x1681&&_0x29bb0a[-0x103*-0x6+-0x31e+-0x179*0x2]===0x355*0x1+-0x1*-0xc5f+0x14*-0xc9)continue;var _0x209273=Math['sqrt'](_0xf663c[_0x55426c(0xc32)](_0x29bb0a[0x253e+0x192a+0x3e68*-0x1]*_0x29bb0a[0x13c2+0x89+-0x144b],_0x29bb0a[0xbf1+0x17c6+-0x23b5]*_0x29bb0a[-0xca*0x2c+-0xe0+0x239a]));if(_0x209273<_0x2fafe8){if(_0xf663c['nhliq'](_0xf663c['BDnEL'],_0xf663c['dqQbF']))_0x43d5bd['worst'+'Delta']=_0x47694e[_0x55426c(0x1bc)](_0x37062a[_0x55426c(0x1d4)](_0x47694e[_0x55426c(0x8bd)](_0x5ddd1e,-0x1*-0x11e7+-0x608+-0x7f7)),-0x1826+-0x17d+0x1d8b),_0x3949a6[_0x55426c(0x117)+_0x55426c(0x9e6)+'ng']=_0x661a1a['round'](_0x2e0824[_0x55426c(0x549)+'ng']);else{_0x2f9f67++;continue;}}_0x2969f5['push'](_0x2a252e[_0x31ef2f]);}if(!_0x2969f5[_0x55426c(0x68d)+'h']){if(_0xf663c['nbfSR'](_0x55426c(0xa11),_0xf663c['omtfg']))return{'pos':null,'posAt':null,'candidates':0x0,'cluster':0x0,'groups':0x0,'discarded':_0x2f9f67,'ambiguous':![],'reach':0x0};else _0x2a604c['fillS'+_0x55426c(0x176)]=_0x55426c(0x2da)+'255,1'+_0x55426c(0xa18)+_0x55426c(0x7bc)+')',_0x18a206[_0x55426c(0x7fc)]=_0xf663c['jNXsd'],_0x54c49d[_0x55426c(0xbba)+'ext'](_0x162a74[_0x55426c(0x1d4)](_0x706ebb['d']||0x1077*0x2+0x182e+0x55*-0xac)+'m',_0xf663c[_0x55426c(0x3fe)](_0x585e70,_0xf663c[_0x55426c(0xbf0)](_0x5b1ae4,0xdf9+-0x1a10+0xc19)),_0xf663c['Hohkl'](_0x583918,_0xf663c['LIiuR'](_0x21e719,-0x147+-0xb9*0x2b+0x205c))-(0xa*0x368+-0xf1+-0x108e*0x2));}var _0x282c26=[];for(_0x31ef2f=-0x4a1+0xe8a+0x1*-0x9e9;_0xf663c[_0x55426c(0x265)](_0x31ef2f,_0x2969f5[_0x55426c(0x68d)+'h']);_0x31ef2f++){var _0x2d680b=_0x2969f5[_0x31ef2f]['v'],_0x45e924=-(0xa67*-0x1+0xbb7+-0x1*0x14f);for(_0x3a3a6d=0x1*0x221+-0x1955+0x1*0x1734;_0xf663c['LaIEM'](_0x3a3a6d,_0x282c26[_0x55426c(0x68d)+'h']);_0x3a3a6d++){var _0x27033f=_0x282c26[_0x3a3a6d]['c'][0x8f4+-0x7d6+-0x11e]['v'],_0x4132fd=_0xf663c['DnugD'](_0x2d680b[-0x1f0d+-0x16df+0x44*0xcb],_0x27033f[-0x958+0x2249+-0x4fd*0x5]),_0xba9a4a=_0x2d680b[0x1c14+-0x322*0x8+-0x303]-_0x27033f[0x2f3+0x1ce6+-0x1fd8],_0x2ae667=_0xf663c['GPWEs'](_0x2d680b[0x26c5+-0x1022+0x16a1*-0x1],_0x27033f[0xb*-0x132+0x19b4+0x16*-0x92]);if(_0xf663c['UFMcJ'](_0x4132fd*_0x4132fd,_0xba9a4a*_0xba9a4a)+_0x2ae667*_0x2ae667<=_0x320384){_0x45e924=_0x3a3a6d;break;}}if(_0x45e924===-(-0x19a0+-0x160c+0x1*0x2fad))_0x282c26[_0x55426c(0x773)]({'c':[_0x2969f5[_0x31ef2f]]});else _0x282c26[_0x45e924]['c'][_0x55426c(0x773)](_0x2969f5[_0x31ef2f]);}var _0x13d5c1=_0x282c26[-0x100e*-0x1+0x26ef+-0x36fd],_0x9dd4e1=-Infinity;for(_0x3a3a6d=-0x1*0x5ad+-0x1bbe+0x216b;_0x3a3a6d<_0x282c26[_0x55426c(0x68d)+'h'];_0x3a3a6d++){var _0x58f80a=_0x282c26[_0x3a3a6d]['c'],_0x250989=_0xf663c['fYqzO'](_0x58f80a[_0x55426c(0x68d)+'h'],-0xde3+-0xb86+0x1d51);if(_0x26697d){var _0x3dff45=Infinity;for(var _0x557d71=0x5*0x239+0x52*-0x4b+0xce9;_0x557d71<_0x58f80a[_0x55426c(0x68d)+'h'];_0x557d71++){var _0x5725a7=Math[_0x55426c(0x892)](_0x58f80a[_0x557d71]['v'][0x1601+-0x15ac+0xc*-0x7]-_0x36fe8a);if(_0x5725a7<_0x3dff45)_0x3dff45=_0x5725a7;}_0x250989-=_0x3dff45;}else{var _0x32db37=-0x2052+0x1b*-0x50+0x4a*0x8d;for(var _0x28c902=-0x1*-0x1973+0x3d*-0x4f+-0x35*0x20;_0xf663c['VRsRv'](_0x28c902,_0x58f80a['lengt'+'h']);_0x28c902++){var _0x26a975=Math[_0x55426c(0xb87)](_0xf663c['nKHgL'](_0x58f80a[_0x28c902]['v'][-0x21db+-0x1b83+0x3d5e],_0x58f80a[_0x28c902]['v'][0x148d+0xb7+-0x4*0x551])+_0x58f80a[_0x28c902]['v'][-0x9d*-0x7+-0x1*-0x9b7+-0xe00]*_0x58f80a[_0x28c902]['v'][-0x1*-0x56a+-0x2553+0x1feb]);if(_0x26a975>_0x32db37)_0x32db37=_0x26a975;}_0x250989+=_0x32db37;}if(_0x250989>_0x9dd4e1){if(_0xf663c['MQsCM'](_0x55426c(0xb8f),_0xf663c['GtvaS']))_0x9dd4e1=_0x250989,_0x13d5c1=_0x282c26[_0x3a3a6d];else{var _0x12cf2a=_0xe87d74[_0x55426c(0x431)+'Selec'+'torAl'+'l'](_0x47694e['KIdsq']);for(var _0x7e79d9=-0x2678+0x3*-0x83+0x2801;_0x7e79d9<_0x12cf2a[_0x55426c(0x68d)+'h'];_0x7e79d9++){try{if(_0x12cf2a[_0x7e79d9][_0x55426c(0xbcc)+'ntWin'+'dow'])_0x12cf2a[_0x7e79d9][_0x55426c(0xbcc)+_0x55426c(0x17e)+_0x55426c(0x26a)][_0x55426c(0x701)+_0x55426c(0x81a)+'e'](_0x5d9604,'*');}catch(_0xacc431){}}}}}var _0x2828a4=_0x13d5c1['c'][0x133+0xa2e*-0x1+0x8fb],_0x3ee576=-(0x131e+0xa*-0x342+0x47d*0x3);for(_0x3a3a6d=0x69f+0xc6c+-0x27*0x7d;_0xf663c[_0x55426c(0x32b)](_0x3a3a6d,_0x13d5c1['c']['lengt'+'h']);_0x3a3a6d++){var _0x182eea=_0x13d5c1['c'][_0x3a3a6d]['v'],_0x52bdf0=Math[_0x55426c(0xb87)](_0xf663c[_0x55426c(0x2e6)](_0x182eea[0x8b+-0x171e+-0x1*-0x1693],_0x182eea[0xed*-0x5+0x27f*-0xa+0x1d97])+_0xf663c['TldVy'](_0x182eea[0x229d+-0xa*0x38a+0xc9*0x1],_0x182eea[0x23a9+0x7*-0x130+0x1*-0x1b57]));if(_0x52bdf0>_0x3ee576||_0x52bdf0===_0x3ee576&&_0x182eea[0xa43*0x3+-0x3*-0x5cf+-0x3035]<_0x2828a4['v'][0x2e*-0x59+-0x1e6e+0x949*0x5]){if(_0x55426c(0xc19)===_0xf663c['GFFFR']){if(_0x11d511)_0x1f4ecd['textC'+_0x55426c(0x2bb)+'t']=(_0x4c3da2(_0x25b879[_0x55426c(0xaf8)])||-0x48*0x6b+0x217*-0x5+0x288c)['toFix'+'ed'](-0x17f6+-0x1c*-0xcd+-0x4f*-0x5)+'x';_0xf252d1();}else _0x3ee576=_0x52bdf0,_0x2828a4=_0x13d5c1['c'][_0x3a3a6d];}}return{'pos':_0x2828a4['v'],'posAt':_0x2828a4['o'],'candidates':_0x2969f5['lengt'+'h'],'cluster':_0x13d5c1['c']['lengt'+'h'],'groups':_0x282c26[_0x55426c(0x68d)+'h'],'discarded':_0x2f9f67,'ambiguous':_0x282c26['lengt'+'h']>0x1faa+-0x29*0x2f+-0x1822*0x1,'reach':_0x3ee576};}catch(_0xbb38c6){if(_0xf663c['CYXRo']!==_0x55426c(0xa56))return console[_0x55426c(0x361)](_0x55426c(0x4ac)+_0x55426c(0x227),_0xbb38c6['messa'+'ge'],String(_0xbb38c6['stack']||'')['split']('\x0a')[_0x55426c(0x301)](-0x136e*0x2+0x22e9+-0x151*-0x3,0x2607+0x8a6+-0x2ea9)[_0x55426c(0xb6d)](_0xf663c['YATJc'])),{'pos':null,'posAt':null,'candidates':0x0,'cluster':0x0,'groups':0x0,'discarded':0x0,'ambiguous':![],'reach':0x0};else{if(_0x511202[_0x2f386f][_0x55426c(0x29f)+'rs'][_0x55426c(0x68d)+'h']>=_0x5bb287)_0x282e4f[_0x55426c(0x773)](_0x2d7ba[_0x2cfb73]);}}}function _0x9aa442(){var _0x582a56=_0x1e5d49,_0x4a4d54=_0x201b55[_0x582a56(0x366)+_0x582a56(0x2e2)+'ler'];if(!_0x4a4d54||!_0x4a4d54[_0x582a56(0x4a6)])return null;var _0x37fc7c=_0x46fb0b[_0x582a56(0x366)+'ntrol'+_0x582a56(0xb78)]||[],_0x170114=[];for(var _0x1e71e1=0x7*0x240+0x429*0x7+-0x3*0xef5;_0x1e71e1<_0x37fc7c['lengt'+'h'];_0x1e71e1++){if(_0xf663c['otAxH'](_0x37fc7c[_0x1e71e1][-0x1338+0x22ee+0xfb5*-0x1],'v3'))continue;var _0x1abae9=_0xf663c[_0x582a56(0x9c6)](_0x42e9d0,_0x4a4d54['ptr'],_0x37fc7c[_0x1e71e1][0x11ab+0x2064+0x37*-0xe9],-0x1*-0x155e+0x13*0x16e+-0x3085);if(_0x1abae9)_0x170114[_0x582a56(0x773)]({'o':'0x'+_0x37fc7c[_0x1e71e1][-0x217d+-0xb86*-0x3+-0x115]['toStr'+'ing'](-0x1c59*0x1+0xd6e+0xefb),'v':_0x1abae9});}var _0x258861=_0x3b1440(_0x170114,null);if(!_0x258861['pos'])return null;var _0x41dbcf=_0x258861[_0x582a56(0xc29)];return{'ptr':_0x4a4d54[_0x582a56(0x4a6)],'feet':_0x41dbcf,'posAt':_0x258861['posAt'],'candidates':_0x258861[_0x582a56(0x2ef)+'dates'],'cluster':_0x258861[_0x582a56(0x72b)+'er'],'copies':_0x170114[_0x582a56(0x338)+'r'](function(_0x106d56){return _0x106d56['v'][0xafa+-0x2*-0xb57+-0x21a8]===_0x41dbcf[0x22be+-0x165d*-0x1+-0x391b]&&_0x106d56['v'][0x2*0x12d7+0x318+-0x28c5]===_0x41dbcf[-0x7*0x46d+0x1eef*-0x1+0x3deb]&&_0x106d56['v'][-0x2641+0x1f*0x125+-0x8*-0x59]===_0x41dbcf[-0x14ea+0x1d3*0x1+0x1319];})['map'](function(_0x5d4d4d){return _0x5d4d4d['o'];}),'eye':[_0x41dbcf[-0x32e+0xdb6+-0xa88],_0x41dbcf[0x1495+0xe*0x178+-0x2924]+_0x5a4546,_0x41dbcf[0x14de+0xafb+-0x1fd7]],'reach':_0x258861['reach'],'pitch':_0x19598d(_0xf663c['opXNF'](_0x4a4d54[_0x582a56(0x4a6)],-0x1669+0x23f3*0x1+-0xc1e),'f32'),'yaw':_0xf663c[_0x582a56(0x323)](_0x19598d,_0xf663c['qLAzu'](_0x4a4d54[_0x582a56(0x4a6)],0x1489+-0x1*0x78f+-0xb8a),_0x582a56(0xb66))};}function _0x378bd6(){var _0x189ac2=_0x1e5d49,_0xf60bd5=_0x9aa442(),_0x586118=[],_0x4d4ce2=_0x49dde4['Photo'+_0x189ac2(0x3ce)+_0x189ac2(0x1b3)+'nc']||{},_0x9038da=Object['keys'](_0x4d4ce2);for(var _0x3f0970=0x125f*0x1+-0x128d+-0x2*-0x17;_0x3f0970<_0x9038da[_0x189ac2(0x68d)+'h']&&_0x3f0970<-0x1*-0x17b9+0xe82+-0x79f*0x5;_0x3f0970++){if(_0xf663c[_0x189ac2(0x363)]===_0x189ac2(0xa09))try{if(_0x24d246[_0x19d32e]['conte'+_0x189ac2(0x17e)+_0x189ac2(0x26a)])_0x41591f[_0x9faeed]['conte'+_0x189ac2(0x17e)+'dow'][_0x189ac2(0x701)+'essag'+'e'](_0x560965,'*');}catch(_0x3593b8){}else{var _0x359ae5=_0x4d4ce2[_0x9038da[_0x3f0970]],_0x20b9c8=[],_0x28f603=_0x46fb0b[_0x189ac2(0x9db)+'nNetw'+_0x189ac2(0x1b3)+'nc']||[];for(var _0x4c6ca3=0x22dc+-0x1*-0x26+-0x2*0x1181;_0x4c6ca3<_0x28f603['lengt'+'h'];_0x4c6ca3++){if(_0xf663c[_0x189ac2(0x5f3)](_0x28f603[_0x4c6ca3][0x203d+0x13*0xc3+-0x43f*0xb],'v3'))continue;var _0x1bbb30=_0xf663c[_0x189ac2(0x342)](_0x42e9d0,_0x359ae5['ptr'],_0x28f603[_0x4c6ca3][-0xdaa+-0xd2d+0x1ad7],0x2*0x128b+0x22b4+-0x4b*0xf5);if(_0x1bbb30)_0x20b9c8[_0x189ac2(0x773)]({'o':'0x'+_0x28f603[_0x4c6ca3][0x3*-0x362+0x1*-0x1a0c+-0x29*-0xe2][_0x189ac2(0x10f)+'ing'](0x1*-0x23da+-0x8*-0x47b+0x1*0x12),'v':_0x1bbb30});}var _0x31f1dd=_0x3b1440(_0x20b9c8,_0xf60bd5?_0xf60bd5[_0x189ac2(0x5e1)][-0x3d*-0x17+0xa*0x251+-0x1ca4]:null),_0x20b513=_0x31f1dd[_0x189ac2(0xc29)];if(!_0x20b513)continue;var _0x43d2cc={'ptr':_0x359ae5[_0x189ac2(0x4a6)],'x':_0x20b513[-0x7b1+-0x2107+-0x28b8*-0x1],'y':_0x20b513[-0x397+0x1891+-0x14f9],'z':_0x20b513[-0xffa+0xe25+0x1d7],'posAt':_0x31f1dd[_0x189ac2(0xafb)],'candidates':_0x31f1dd[_0x189ac2(0x2ef)+'dates'],'cluster':_0x31f1dd['clust'+'er'],'team':_0x19598d(_0x359ae5['ptr']+(0x1*0xac1+-0x6e3+-0x29*0x16),_0xf663c['IkvXZ']),'localFlag':_0x19598d(_0x359ae5[_0x189ac2(0x4a6)]+(-0x976+0x56f+-0x7*-0xa5),_0x189ac2(0x3fd))};if(_0xf60bd5){var _0x4f76f6=_0x20b513[0x264a+-0x202b+-0x61f]-_0xf60bd5[_0x189ac2(0x5e1)][-0xa06+-0x283+0x1*0xc89],_0x5bbc85=_0x20b513[0x14fa+0x25fd+0x22f*-0x1b]-_0xf60bd5['feet'][0x1*-0x119f+0x444+0xd5d];_0x43d2cc['d']=Math['sqrt'](_0xf663c[_0x189ac2(0x998)](_0x4f76f6,_0x4f76f6)+_0x5bbc85*_0x5bbc85),_0x43d2cc[_0x189ac2(0x549)+'ng']=_0xf663c['IgDjx'](Math['atan2'](_0x4f76f6,_0x5bbc85),-0x2*0x52f+-0x1317*0x2+0x3140)/Math['PI'];}_0x586118[_0x189ac2(0x773)](_0x43d2cc);}}return{'me':_0xf60bd5,'list':_0x586118};}var _0x336438=null;function _0x407f6a(){var _0x11e5e8=_0x1e5d49;if(_0x336438)return _0x336438;try{if(!document['body']||!document[_0x11e5e8(0x71e)][_0x11e5e8(0x129)+'dChil'+'d'])return null;var _0x2810bb=document['creat'+'eElem'+'ent'](_0x11e5e8(0x31b));_0x2810bb['id']=_0x11e5e8(0x6ca)+_0x11e5e8(0xa5e),_0x2810bb[_0x11e5e8(0x426)][_0x11e5e8(0x9ce)+'xt']=_0xf663c['JMWVq'](_0xf663c[_0x11e5e8(0xc33)],_0xf663c['uTQQd'])+_0xf663c[_0x11e5e8(0xb29)]+_0xf663c[_0x11e5e8(0xb83)],_0x2810bb['inner'+_0x11e5e8(0x353)]=_0xf663c[_0x11e5e8(0xc3b)](_0xf663c['MpaHv'],'<div\x20'+_0x11e5e8(0x2df)+'akura'+'-esp-'+_0x11e5e8(0x38f)+_0x11e5e8(0x3f8)+'\x22text'+'-alig'+'n:cen'+'ter\x22>'+'</div'+'>');var _0x444a92={'cv':{'getContext':function(){return null;}},'el':_0x2810bb};document['body']['appen'+'dChil'+'d'](_0x2810bb),_0x336438={'el':_0x2810bb,'cv':_0x2810bb[_0x11e5e8(0x431)+_0x11e5e8(0x808)+_0x11e5e8(0xba6)]('#saku'+'ra-es'+'p-cv'),'lg':_0x2810bb[_0x11e5e8(0x431)+'Selec'+_0x11e5e8(0xba6)](_0x11e5e8(0x46a)+_0x11e5e8(0x858)+_0x11e5e8(0x868))};if(!_0x336438['cv']||!_0x336438['cv']['getCo'+_0x11e5e8(0x93e)])_0x336438=_0x444a92;return _0x336438;}catch(_0x1c1026){return null;}}var _0x18f7d4=null;function _0x278ce1(){var _0x218a7a=_0x1e5d49;if(_0x18f7d4)return _0x18f7d4;try{if(!document[_0x218a7a(0x71e)]||!document[_0x218a7a(0x71e)][_0x218a7a(0x129)+'dChil'+'d'])return null;var _0x251e77=document['creat'+_0x218a7a(0x7c6)+_0x218a7a(0x857)]('canva'+'s');return _0x251e77['id']=_0x218a7a(0x6ca)+_0x218a7a(0x425)+'es',_0x251e77[_0x218a7a(0x426)][_0x218a7a(0x9ce)+'xt']='posit'+'ion:f'+'ixed;'+_0x218a7a(0x905)+_0x218a7a(0xa99)+':0;z-'+'index'+':2147'+_0x218a7a(0x775)+'5;poi'+'nter-'+'event'+_0x218a7a(0x5fc)+'e;',document[_0x218a7a(0x71e)][_0x218a7a(0x129)+_0x218a7a(0x3e9)+'d'](_0x251e77),_0x18f7d4={'cv':_0x251e77},_0x18f7d4;}catch(_0x24dc2c){return null;}}function _0x3705f0(_0x106292){var _0x46bcff=_0x1e5d49;try{var _0x35b53d=Math[_0x46bcff(0x86e)](-0x87b+-0x659+0xed5*0x1,window['inner'+'Width']||document['docum'+'entEl'+'ement'][_0x46bcff(0x192)+_0x46bcff(0x62f)+'h']||0x125*-0x13+0xc*0x6d+-0x10a3*-0x1),_0xc7e6bf=Math[_0x46bcff(0x86e)](-0x931+0x1b1f+-0x11ed,window['inner'+_0x46bcff(0x649)+'t']||document[_0x46bcff(0x27f)+'entEl'+'ement']['clien'+_0x46bcff(0xb75)+'ht']||0x9e9+0x3*-0xc31+0xd55*0x2);return(_0x106292['cv'][_0x46bcff(0x99b)]!==_0x35b53d||_0xf663c[_0x46bcff(0x81f)](_0x106292['cv'][_0x46bcff(0xaad)+'t'],_0xc7e6bf))&&(_0xf663c['NPoib']!==_0xf663c[_0x46bcff(0x27c)]?(_0x106292['cv'][_0x46bcff(0x99b)]=_0x35b53d,_0x106292['cv']['heigh'+'t']=_0xc7e6bf):_0x2ccec7[_0x46bcff(0x246)]()),{'w':_0x35b53d,'h':_0xc7e6bf};}catch(_0x3ffb4b){return{'w':0x0,'h':0x0};}}function _0x244e82(){var _0x172e68=_0x1e5d49,_0x52e94a={'rows':[],'worstBearing':null,'worstDelta':0x0,'canvas':null};try{_0x52e94a[_0x172e68(0xb8c)+'s']={'w':_0x18f7d4&&_0x18f7d4['cv']?_0x18f7d4['cv'][_0x172e68(0x99b)]:-0x61*-0x4b+0x2602+-0x426d,'h':_0x18f7d4&&_0x18f7d4['cv']?_0x18f7d4['cv'][_0x172e68(0xaad)+'t']:-0x1b10+-0x665+0xf*0x23b,'innerW':window['inner'+'Width'],'innerH':window['inner'+_0x172e68(0x649)+'t'],'dpr':window['devic'+_0x172e68(0x218)+'lRati'+'o']||0x19e1+-0x95a+-0x1086};}catch(_0x11c7a7){}var _0x5c7635=_0x378bd6();if(!_0x5c7635||!_0x5c7635['me'])return _0x52e94a;var _0x448950=_0x52e94a[_0x172e68(0xb8c)+'s']['w']||0x1c78+-0x74*-0x2c+0x80*-0x59,_0x4c1092=_0x52e94a[_0x172e68(0xb8c)+'s']['h']||0xad5+0x908+-0xff5,_0x430394=_0xf663c[_0x172e68(0xbf0)](_0x448950,_0x4c1092),_0x290c66=Math[_0x172e68(0x2ab)](_0xf663c[_0x172e68(0x809)](_0xf663c[_0x172e68(0x809)](_0xf663c['XiRxg'](_0x2a53c9['fov'],Math['PI']),0x13a8+-0x2*0x24b+-0xe5e),-0x21c*-0x11+-0xba6+0xc1a*-0x2));for(var _0x286820=0x2*-0xd05+0x159d+0x46d;_0x286820<_0x5c7635[_0x172e68(0x652)]['lengt'+'h']&&_0x286820<-0x448+0x1*-0x2002+0x1*0x2452;_0x286820++){var _0x2a35ba=_0x5c7635['list'][_0x286820];if(typeof _0x2a35ba['beari'+'ng']!=='numbe'+'r'||typeof _0x2a35ba['d']!==_0x172e68(0x333)+'r'||_0x2a35ba['d']<-0x1741*-0x1+-0x11d2*0x1+-0x56f+0.5)continue;var _0x5c165e=_0xf663c['nmeLF'](_0x2f8cc6,_0x5c7635['me'][_0x172e68(0x560)],[_0x2a35ba['x'],_0x2a35ba['y'],_0x2a35ba['z']],_0x448950,_0x4c1092);if(!_0x5c165e)continue;var _0x2fd650=_0xf663c[_0x172e68(0x189)](_0xf663c[_0x172e68(0x205)](_0x5c165e['x'],_0x448950),0x347*0x2+-0xd03*0x1+0x675+0.5),_0x2a01e6=Math['tan'](_0xf663c['zcdcm'](_0x2a35ba[_0x172e68(0x549)+'ng']*Math['PI'],-0xf*-0x1cd+0x1*-0x215d+-0x1*-0x70e))/(_0x290c66*_0x430394);if(Math['abs'](_0x2a01e6)>-0x79a+-0x53*0x2a+0x1538+0.8)continue;var _0x22c114=_0x2fd650-_0x2a01e6;_0x52e94a[_0x172e68(0x4e7)]['push']({'d':Math[_0x172e68(0x1d4)](_0x2a35ba['d']),'bearing':Math['round'](_0x2a35ba[_0x172e68(0x549)+'ng']),'at':Math['round'](_0xf663c['XiRxg'](_0x2fd650,0x37*-0x9b+0x1*0x1a6+0x238f))/(-0x265e+-0x1d78+0x47be),'want':_0xf663c['prqey'](Math[_0x172e68(0x1d4)](_0x2a01e6*(-0xac3*0x1+0x2540+0x29*-0x8d)),0x3ff*-0x7+0x9*0x11+-0x2d8*-0xb),'off':Math[_0x172e68(0x1d4)](_0x22c114*(-0x1d1+-0x2096+0x264f))/(-0xf2+-0xeb3+0x138d)}),_0xf663c[_0x172e68(0x6ab)](Math[_0x172e68(0x892)](_0x22c114),Math['abs'](_0x52e94a[_0x172e68(0x117)+_0x172e68(0xc07)]))&&(_0x52e94a[_0x172e68(0x117)+'Delta']=Math[_0x172e68(0x1d4)](_0xf663c[_0x172e68(0x4ca)](_0x22c114,-0x1fd9+0x65*-0xc+0x5*0x819))/(0xe9*-0x1a+-0x2*-0x92b+0x93c),_0x52e94a['worst'+_0x172e68(0x9e6)+'ng']=Math['round'](_0x2a35ba['beari'+'ng']));}return _0x52e94a;}var _0x3acfcf=0x1b65+-0x201+-0x1963+0.75,_0x2f518a=0x3e5*-0xa+0xd2d+0x19c5*0x1+0.25,_0x2d5316=-0x12f9+-0x736*0x5+0x3707+0.42;function _0x2d9ddc(_0x40b16b){var _0x154b34=_0x1e5d49,_0x5a2746=_0x18f7d4;if(!_0x5a2746)return;var _0x38efe0=_0x5a2746['cv'][_0x154b34(0x298)+'ntext']&&_0x5a2746['cv']['getCo'+_0x154b34(0x93e)]('2d');if(!_0x38efe0)return;var _0x4d3c7b=_0x3705f0(_0x5a2746);_0x38efe0['clear'+_0x154b34(0x167)](0xef6+0x10f+-0x1005,-0x8f9+-0x52*0x30+-0x17*-0x10f,_0x4d3c7b['w'],_0x4d3c7b['h']);if(!_0x393b6f[_0x154b34(0x5d8)]||!_0x40b16b||!_0x40b16b['me'])return;var _0x5daf6a=_0x40b16b['me'],_0x5cc53c=null,_0x24ef4c=_0x49dde4[_0x154b34(0x9db)+_0x154b34(0x3ce)+_0x154b34(0x1b3)+'nc']||{},_0x3fc69c=Object['keys'](_0x24ef4c);for(var _0x58fba7=-0x98*0x35+-0x1*-0x12e9+-0x283*-0x5;_0x58fba7<_0x3fc69c['lengt'+'h'];_0x58fba7++){var _0x558f86=_0xf663c[_0x154b34(0x2f7)](_0x42e9d0,_0x24ef4c[_0x3fc69c[_0x58fba7]][_0x154b34(0x4a6)],0x13e0+0x2b*0x8e+0x4d6*-0x9,-0x2156+0xed5+-0x942*-0x2);if(_0x558f86&&_0x558f86[-0x1*-0x1a2d+-0x1*0x1ac7+0x9a]===-0x2225+-0x21bd*0x1+0x43e2&&_0x558f86[0x272*-0x8+0x1*0xd92+0x5ff*0x1]===-0x351*0x1+-0x11*-0x20b+-0x1*0x1f6a&&_0x558f86[0x1cc4+0x23a3+0x7*-0x933]===-0x56f*0x2+0x13d5+-0x8f7){_0x5cc53c=_0x19598d(_0x24ef4c[_0x3fc69c[_0x58fba7]][_0x154b34(0x4a6)]+(0xe3b+0x7*0x60+-0x1083*0x1),_0xf663c[_0x154b34(0xac7)]);break;}}for(var _0x45032a=-0x1486+-0x1d62+0x31e8;_0xf663c['Ehswk'](_0x45032a,_0x40b16b['list']['lengt'+'h']);_0x45032a++){var _0x37b28d=_0x40b16b[_0x154b34(0x652)][_0x45032a],_0x11654f=_0x5cc53c!==null&&_0xf663c[_0x154b34(0x79b)](_0x37b28d['team'],_0x5cc53c),_0x5f0da6=_0x2f8cc6(_0x5daf6a[_0x154b34(0x560)],[_0x37b28d['x'],_0xf663c[_0x154b34(0x51d)](_0x37b28d['y'],_0x2f518a),_0x37b28d['z']],_0x4d3c7b['w'],_0x4d3c7b['h']),_0x3c5502=_0x2f8cc6(_0x5daf6a[_0x154b34(0x560)],[_0x37b28d['x'],_0x37b28d['y']+_0x3acfcf,_0x37b28d['z']],_0x4d3c7b['w'],_0x4d3c7b['h']);if(_0xf663c['TlJew'](!_0x5f0da6,!_0x3c5502))continue;var _0x205c68=Math[_0x154b34(0x892)](_0x3c5502['y']-_0x5f0da6['y']);if(!(_0x205c68>0x1a4f+0x1978+0x33c7*-0x1))continue;var _0x53509a=Math['max'](-0x2b*0x6a+0x6cf+0xb01*0x1,Math['min'](0x9ad+-0x19be+0x106b,_0xf663c['lVDXn'](_0x205c68,_0x2d5316)));if(_0x205c68>-0x2*0x1227+-0x9*0x14d+-0x108d*-0x3)continue;var _0x321ebb=_0xf663c['zcdcm'](_0x5f0da6['x']+_0x3c5502['x'],0x73*0xd+0x1dc5*-0x1+0x5fc*0x4),_0x30b7f3=_0xf663c[_0x154b34(0xa59)](_0x5f0da6['y'],_0x3c5502['y'])/(0x23d6*0x1+0xbf7+-0x2fcb);_0x38efe0[_0x154b34(0x5ee)+_0x154b34(0xa67)+'e']=_0x11654f?'rgba('+'79,14'+'3,106'+_0x154b34(0x3f7):_0xf663c['nLydk'],_0x38efe0[_0x154b34(0x84e)+_0x154b34(0x168)]=_0x11654f?-0x1368+-0x1e34+-0xd*-0x3d1:0x11f9+-0x86*0x5+0x1*-0xf59,_0x38efe0['strok'+_0x154b34(0x35f)](_0xf663c['YXnZB'](_0x321ebb,_0xf663c[_0x154b34(0xaf2)](_0x53509a,-0x1e0c+0xc3*0x2b+-0x2b3*0x1)),_0x30b7f3-_0xf663c[_0x154b34(0xb5c)](_0x205c68,0x61*-0x8+0x207+0x103),_0x53509a,_0x205c68),!_0x11654f&&(_0x38efe0['fillS'+_0x154b34(0x176)]=_0x154b34(0x2da)+'255,1'+_0x154b34(0xa18)+_0x154b34(0x7bc)+')',_0x38efe0[_0x154b34(0x7fc)]=_0xf663c[_0x154b34(0xb1f)],_0x38efe0[_0x154b34(0xbba)+_0x154b34(0xbe9)](Math[_0x154b34(0x1d4)](_0x37b28d['d']||0x560+-0x21b7*-0x1+0x1*-0x2717)+'m',_0xf663c['vPWYT'](_0x321ebb,_0x53509a/(0x1c8d+0x2a6+-0x1f31)),_0xf663c['qhzCR'](_0x30b7f3,_0x205c68/(0xf44+0x22ad+-0x1*0x31ef))-(0x1449*-0x1+0xf4a+0x502)));}}function _0x490b7f(){var _0x4135e3=_0x1e5d49,_0x26c71d={'wzBrs':function(_0x2f3045,_0xcd056b){return _0x2f3045===_0xcd056b;},'PZiPq':_0xf663c[_0x4135e3(0x794)],'FIvCe':function(_0x44d857,_0x1a7760){return _0x44d857+_0x1a7760;},'HaKvv':_0x4135e3(0x65d)+'le','joLzC':'funct'+_0x4135e3(0x75e),'tucYl':function(_0x2daec3){return _0x2daec3();}};if(_0x4135e3(0x753)==='cMpbP'){var _0x3032ce=_0x407f6a();if(!_0x3032ce||!_0x3032ce['cv'])return;try{var _0x59e22a=_0x3032ce['cv'][_0x4135e3(0x298)+_0x4135e3(0x93e)]&&_0x3032ce['cv'][_0x4135e3(0x298)+'ntext']('2d');if(!_0x59e22a)return;var _0x29e493=_0x3032ce['cv'][_0x4135e3(0x99b)],_0x2b88b=_0x29e493/(0x495+0x6b7+0x5a5*-0x2),_0x33d57e=_0x378bd6(),_0x361f10=_0x33d57e['me'];_0x59e22a[_0x4135e3(0x3e7)+_0x4135e3(0x167)](-0x1*0x2522+-0x13df*-0x1+0x1*0x1143,0x4*-0xf5+0x1364+0x53*-0x30,_0x29e493,_0x29e493),_0x59e22a['strok'+_0x4135e3(0xa67)+'e']=_0x4135e3(0x2da)+_0x4135e3(0x5f5)+_0x4135e3(0x1dc)+_0x4135e3(0x698)+')',_0x59e22a['lineW'+_0x4135e3(0x168)]=-0xd*0x1a1+0x8c0+0xc6e;for(var _0x1fe5cd=-0x1*-0xc92+-0x19ee*0x1+0xd5d;_0xf663c[_0x4135e3(0x981)](_0x1fe5cd,-0x53*0x3b+-0x550+0x1874*0x1);_0x1fe5cd++){_0x59e22a[_0x4135e3(0x9e4)+_0x4135e3(0x48a)](),_0x59e22a[_0x4135e3(0xba9)](_0x2b88b,_0x2b88b,_0xf663c['zLwXG'](_0x2b88b-(-0x1f*0x61+-0x759+0x131c),_0x1fe5cd)/(-0x310*0x6+-0xc2a*-0x3+0x135*-0xf),0xac6+-0x1d11*0x1+-0xdf*-0x15,Math['PI']*(-0x1d6c+0xd*0x19+-0x1*-0x1c29)),_0x59e22a['strok'+'e']();}_0x59e22a[_0x4135e3(0x9e4)+'Path'](),_0x59e22a[_0x4135e3(0xaf3)+'o'](-0x1*0x403+0x1524+0x1*-0x111d,_0x2b88b),_0x59e22a['lineT'+'o'](_0x29e493-(0xfc1+0x2338+-0x32f5),_0x2b88b),_0x59e22a[_0x4135e3(0xaf3)+'o'](_0x2b88b,-0x4*-0x608+0x2*0x1f3+-0x1c02),_0x59e22a['lineT'+'o'](_0x2b88b,_0xf663c[_0x4135e3(0x56f)](_0x29e493,-0x242c+-0x2175+0x45a5)),_0x59e22a[_0x4135e3(0x5ee)+'e']();if(!_0x361f10){if(_0x3032ce['lg'])_0x3032ce['lg'][_0x4135e3(0x93f)+_0x4135e3(0x2bb)+'t']='';return;}var _0x2eb0c3=_0xf663c[_0x4135e3(0x21b)](_0x2b88b,-0xccb+0x1143+-0x2*0x239)/_0x393b6f['span'],_0x353595=null,_0x250e00=_0x49dde4[_0x4135e3(0x9db)+'nNetw'+_0x4135e3(0x1b3)+'nc']||{},_0x349ef6=Object[_0x4135e3(0x854)](_0x250e00);for(var _0x2c29fe=-0x7c4+0x1080+-0x1*0x8bc;_0xf663c[_0x4135e3(0x1c1)](_0x2c29fe,_0x349ef6['lengt'+'h']);_0x2c29fe++){if(_0xf663c['RcxYP'](_0xf663c[_0x4135e3(0x4f9)],_0x4135e3(0x7a3)))_0x34a569[_0x4135e3(0x426)]['left']=_0x4f7ecd[_0x4135e3(0xc29)]['x']+'px',_0x57345b['style'][_0x4135e3(0xb4c)]=_0x11d437[_0x4135e3(0xc29)]['y']+'px',_0x3b04eb['style']['right']=_0x4135e3(0xbab),_0xa397a5[_0x4135e3(0x426)][_0x4135e3(0x34d)+'m']=_0x4135e3(0xbab);else{var _0x1f24b3=_0x42e9d0(_0x250e00[_0x349ef6[_0x2c29fe]][_0x4135e3(0x4a6)],0x1983+0x235e+0x13d*-0x31,0xf92+0x1e11*-0x1+0xe82);if(_0x1f24b3&&_0x1f24b3[-0x222e+0x1*-0x4aa+0x26d8]===0x1fb*0x2+-0x37c+-0x7a&&_0x1f24b3[-0x224b*0x1+0x175b*-0x1+0x39a7]===0x1*-0x2353+-0x195*-0x1+-0x269*-0xe&&_0x1f24b3[-0x1767+0x21d*0xd+0x34*-0x14]===-0x8*0xfb+0x1*0x1474+-0x327*0x4){_0x353595=_0x19598d(_0xf663c['Cpwjl'](_0x250e00[_0x349ef6[_0x2c29fe]][_0x4135e3(0x4a6)],0x1cc7+0x2653+-0x42c2),_0xf663c['IkvXZ']);break;}}}var _0x5fcbe6=-0x94e+-0x53*-0x65+-0x1771;for(var _0x40bfde=-0xbf5*-0x2+0x2*-0xeb7+-0x2c2*-0x2;_0xf663c[_0x4135e3(0x662)](_0x40bfde,_0x33d57e[_0x4135e3(0x652)]['lengt'+'h']);_0x40bfde++){var _0x39393c=_0x33d57e[_0x4135e3(0x652)][_0x40bfde],_0x29f492=_0xf663c['nJOkq'](_0x39393c['x']-_0x361f10['feet'][0x21e8+-0x14ec+-0xcfc],_0x2eb0c3),_0x408076=_0xf663c[_0x4135e3(0x834)](_0x39393c['z'],_0x361f10[_0x4135e3(0x5e1)][0x3d*-0x8e+0xaee+0x16ea])*_0x2eb0c3,_0x6b5ae4=Math[_0x4135e3(0xb87)](_0xf663c[_0x4135e3(0xaf0)](_0x29f492,_0x29f492)+_0x408076*_0x408076),_0x31370a=_0x2b88b,_0x1e85d3=_0x2b88b;_0x6b5ae4>_0x2b88b-(-0x8e1+0x531*0x1+0x3b6)?(_0x31370a=_0xf663c[_0x4135e3(0xc32)](_0x2b88b,_0x29f492/_0x6b5ae4*(_0x2b88b-(-0x2529+-0x175c+0x3c8b))),_0x1e85d3=_0x2b88b+_0xf663c['tYhHs'](_0x408076,_0x6b5ae4)*(_0x2b88b-(-0x194d+0xaeb+-0x1cd*-0x8))):(_0x31370a=_0x2b88b+_0x29f492,_0x1e85d3=_0xf663c['mYDYS'](_0x2b88b,_0x408076));var _0x29023e=_0x353595!==null&&_0x39393c[_0x4135e3(0x477)]===_0x353595;_0x59e22a[_0x4135e3(0x18e)+'tyle']=_0x29023e?_0x4135e3(0x1ba)+'6a':_0x4135e3(0x4af)+'74',_0x59e22a[_0x4135e3(0x9e4)+_0x4135e3(0x48a)](),_0x59e22a[_0x4135e3(0xba9)](_0x31370a,_0x1e85d3,_0x29023e?-0x21e5+-0xee0+0x30c7*0x1:0xc7*0x7+0x167*-0x13+0x1*0x1537+0.20000000000000018,-0x2604+-0xebb*0x2+0x2*0x21bd,Math['PI']*(-0x506+-0xc3*-0x27+-0x18ad*0x1)),_0x59e22a[_0x4135e3(0xc1e)](),_0x5fcbe6++;}_0x59e22a[_0x4135e3(0x18e)+_0x4135e3(0x176)]='#7ee0'+'a8',_0x59e22a[_0x4135e3(0x9e4)+_0x4135e3(0x48a)](),_0x59e22a['arc'](_0x2b88b,_0x2b88b,-0xc*0x72+0x29*0xe3+-0x1f00,0x67c+-0x2469*-0x1+-0x4f*0x8b,Math['PI']*(0x76f*0x1+0x171*0x9+-0x1*0x1466)),_0x59e22a['fill']();if(_0x3032ce['lg']){if(_0xf663c[_0x4135e3(0x9d6)](_0x4135e3(0x755),'TUQra'))_0x3032ce['lg']['textC'+'onten'+'t']=_0xf663c[_0x4135e3(0x4e6)](_0xf663c['HBudA'](_0xf663c[_0x4135e3(0xab7)](_0xf663c[_0x4135e3(0x191)],_0x5fcbe6)+_0xf663c[_0x4135e3(0x34c)],Math[_0x4135e3(0x1d4)](_0x393b6f[_0x4135e3(0x8be)]))+'m'+(_0x393b6f[_0x4135e3(0x5d8)]?_0xf663c['wkXlY'](_0xf663c['tTFtL']+Math[_0x4135e3(0x1d4)](_0x2a53c9[_0x4135e3(0x9f1)]),'°'):''),_0x353595!==null?_0x4135e3(0x37e)+'am'+_0x353595:'');else{var _0x267a86=_0x187103[_0x5a5ef2[_0x1a4e38]];if(_0x267a86&&_0x26c71d[_0x4135e3(0x6cc)](typeof _0x267a86,_0x26c71d[_0x4135e3(0x5d4)])&&_0x267a86[_0x4135e3(0x441)+'e']&&_0x267a86[_0x4135e3(0x441)+'e'][_0x4135e3(0xa81)+'8']&&_0x267a86[_0x4135e3(0x441)+'e']['HEAPU'+'8']['buffe'+'r'])return _0x4e5b3f[_0x4135e3(0x178)+'e']=_0x26c71d[_0x4135e3(0x293)]('windo'+'w.',_0x702953[_0x2efd2f])+_0x26c71d['HaKvv'],_0x267a86;}}}catch(_0x3baff1){}}else{_0x5294f4[_0x2adeff]={'ptr':_0x33c046,'firstSeen':_0x495174[_0x4135e3(0x7d1)](),'hits':0x0,'replaced':!!_0x53b00e};try{var _0x461b25=_0x29002f[_0x4135e3(0x338)+'r'](function(_0x507c3a){return _0x507c3a['type']===_0x1cff27;})[0x1d*0x32+0x602+-0xbac];_0x1c1f8e={'type':_0x3d151b,'atMs':_0x1a35a4[_0x4135e3(0x7d1)]()-_0x2918b7,'originalFunc':!!(_0x461b25&&_0x461b25[_0x4135e3(0x145)]&&_0x26c71d[_0x4135e3(0x6cc)](typeof _0x461b25[_0x4135e3(0x145)]['origi'+_0x4135e3(0x9a8)+'nc'],_0x26c71d['joLzC'])),'resolveGameAtFire':!!_0x26c71d['tucYl'](_0x1ce84),'gameSourceAtFire':_0x1f432b[_0x4135e3(0x178)+'e']};}catch(_0x228055){}}}function _0x411cf8(){var _0x5a7876=_0x1e5d49,_0x29f45c=_0x49dde4['Photo'+_0x5a7876(0x3ce)+'orkSy'+'nc']||{};if(!Object['keys'](_0x29f45c)[_0x5a7876(0x68d)+'h'])return![];return!!_0x9aa442();}function _0x2981ba(_0x520347){var _0x25bec9=_0x1e5d49;if(_0xf663c['pQqVA']==='OPwPg')try{var _0x326bea=_0x336438;if(_0x326bea&&_0x326bea['el'])_0x326bea['el']['style'][_0x25bec9(0xa20)+'ay']=_0x520347?'':'none';var _0x4ad0e9=_0x18f7d4;if(_0x4ad0e9&&_0x4ad0e9['cv'])_0x4ad0e9['cv'][_0x25bec9(0x426)][_0x25bec9(0xa20)+'ay']=_0x520347?'':_0x25bec9(0x883);}catch(_0x2355d4){}else _0xf663c[_0x25bec9(0x6c5)](_0x2f93d5);}function _0x583fa2(){var _0x279e37=_0x1e5d49,_0x4c59a2=(_0x279e37(0x72c)+'|9|1|'+'6|5|3'+_0x279e37(0x382))['split']('|'),_0x4d278e=-0x15*0x137+0x2*-0x427+0x1*0x21d1;while(!![]){switch(_0x4c59a2[_0x4d278e++]){case'0':_0xf663c['mpCWl'](setTimeout,_0x583fa2,-0x127e+-0x1422+0x26d2);continue;case'1':if(_0x393b6f[_0x279e37(0x5d8)])_0x278ce1();continue;case'2':_0xf663c[_0x279e37(0x503)](_0x573769);continue;case'3':try{_0x490b7f();}catch(_0x7ff63a){}continue;case'4':if(!_0x393b6f['on']||!_0xf663c[_0x279e37(0x971)](_0x411cf8)){_0xf663c[_0x279e37(0x215)](_0x2981ba,![]),setTimeout(_0x583fa2,-0x7e1*0x1+0x1b2a+-0x121d);return;}continue;case'5':try{_0xa63a52=_0x378bd6();}catch(_0x34137f){}continue;case'6':var _0xa63a52=null;continue;case'7':try{_0xf663c[_0x279e37(0x1d2)](_0x2d9ddc,_0xa63a52);}catch(_0x1436a7){}continue;case'8':_0xf663c['HZXUI'](_0x2981ba,!![]);continue;case'9':_0x407f6a();continue;}break;}}function _0x4014eb(){var _0x5e5eb3=_0x1e5d49,_0x23c8e5={'dvasz':function(_0x576652,_0x4dfc22){return _0xf663c['Ivwkh'](_0x576652,_0x4dfc22);},'dDVoN':_0x5e5eb3(0xae6),'WMPNO':function(_0x12eff9,_0x3db978){var _0x1f18c4=_0x5e5eb3;return _0xf663c[_0x1f18c4(0x1e9)](_0x12eff9,_0x3db978);},'RmZdU':function(_0x453cb6,_0x2301c5){return _0x453cb6+_0x2301c5;},'GbhOR':_0xf663c['yJeYv'],'UWnfp':_0xf663c['FLJSr'],'rTLvH':function(_0x26bdd4){var _0x259614=_0x5e5eb3;return _0xf663c[_0x259614(0x35a)](_0x26bdd4);},'QFTPl':function(_0x4e14bf,_0x1079da){return _0x4e14bf(_0x1079da);},'XkeqO':function(_0x3c8329,_0x5be590){return _0x3c8329<_0x5be590;},'EdZns':function(_0xe590c0,_0x31f412){return _0xe590c0+_0x31f412;},'kMhVx':function(_0x3fe37e,_0x19a13b){var _0x4889d2=_0x5e5eb3;return _0xf663c[_0x4889d2(0x617)](_0x3fe37e,_0x19a13b);},'cDKLX':_0x5e5eb3(0x3fd)};if(_0xf663c[_0x5e5eb3(0xa58)](_0x5e5eb3(0x86b),_0xf663c[_0x5e5eb3(0x289)])){var _0x353db2=window['Unity'+_0x5e5eb3(0x28a)+'dkit']&&window['Unity'+_0x5e5eb3(0x28a)+_0x5e5eb3(0x980)][_0x5e5eb3(0x3be)+'me']||null,_0x38eae6=_0x353db2&&_0x353db2['il2Cp'+_0x5e5eb3(0x131)+_0x5e5eb3(0xbe9)],_0x28beed=_0x38eae6&&_0x38eae6['scrip'+_0x5e5eb3(0x3f0)],_0x358990={},_0x1907da=[];for(var _0x3aa038 in _0x201b55){_0x358990[_0x3aa038]=_0xf663c[_0x5e5eb3(0x123)]('0x',_0x201b55[_0x3aa038][_0x5e5eb3(0x4a6)]['toStr'+_0x5e5eb3(0x907)](-0x2*0x925+-0x104d+-0x1*-0x22a7));if(_0x201b55[_0x3aa038]['repla'+'ced'])_0x1907da['push'](_0x3aa038);}var _0x201f2b={};for(var _0x8623c1 in _0x201b55)_0x201f2b[_0x8623c1]=_0xf663c['KdvqN'](_0x3ec035,_0x201b55[_0x8623c1]['ptr']);var _0x49477b={},_0x23a47e=null;try{_0x49477b=_0x15aaec();}catch(_0x3f3c4e){_0x23a47e=String(_0x3f3c4e&&_0x3f3c4e[_0x5e5eb3(0x10c)+'ge']||_0x3f3c4e);}var _0x2ded3={'version':_0x1556cc,'when':new Date()[_0x5e5eb3(0x8ce)+'Strin'+'g'](),'elapsedMs':_0xf663c[_0x5e5eb3(0x21b)](Date['now'](),_0x35db39),'frame':location['href'][_0x5e5eb3(0x301)](0x2af*0x4+0x3ce*-0x4+-0xe*-0x52,0x69*-0x32+-0x3*-0x141+0x5bd*0x3),'host':_0x2ccfd4,'frameRole':_0x28f3f3,'uwmk':!!_0x353db2,'il2CppContext':!!_0x38eae6,'typeCount':_0x28beed?Object['keys'](_0x28beed)['lengt'+'h']:null,'arm':_0x493058,'assemblies':_0x268bde,'hooksTotal':_0x3b5d62['lengt'+'h'],'hooksApplied':_0x4ba1dd(),'hooksResolved':_0x4aa251(),'hooksRegisteredAtArm':_0x493058[_0x5e5eb3(0x7f2)+_0x5e5eb3(0x125)+_0x5e5eb3(0x53e)]||0x257e*-0x1+0x2185*-0x1+0x4703,'hookErrors':_0x1b3e7e[_0x5e5eb3(0x301)](0x2*-0x2f7+-0x3c4*-0x1+0x1*0x22a,-0x1b79*0x1+-0xeb6+0x2a37),'instances':_0x358990,'classNames':_0x201f2b,'instancesReplaced':_0x1907da,'hookFireProof':_0x42419d,'survey':_0x49477b,'actkKeys':_0x528307,'surveyRows':Object['keys'](_0x49477b)[_0x5e5eb3(0x473)+'e'](function(_0x273f49,_0xd81d94){var _0x2fd79b=_0x5e5eb3;return _0xf663c[_0x2fd79b(0x3af)](_0x273f49,_0x49477b[_0xd81d94][_0x2fd79b(0x68d)+'h']);},0x25eb+-0x9a6+-0x1c45),'reads':{'ok':_0x1c7561['ok'],'failed':_0x1c7561['faile'+'d'],'lastError':_0x1c7561[_0x5e5eb3(0x4b0)+_0x5e5eb3(0x237)],'source':_0x1c7561[_0x5e5eb3(0x178)+'e']},'identity':_0xf663c['sHSdR'](_0x27c41b),'globals':_0x34b0ed(),'wasmMemory':{'captured':!!_0x548523,'atMs':_0x1addee,'bytes':(function(){var _0x1fd705=_0x5e5eb3;try{return _0x548523&&_0x548523['buffe'+'r']?_0x548523['buffe'+'r'][_0x1fd705(0x51b)+_0x1fd705(0x56b)]:-0x1*-0x1849+-0x1369+-0x4e0;}catch(_0x2bfa4e){if(_0x23c8e5[_0x1fd705(0x5af)](_0x23c8e5['dDVoN'],_0x1fd705(0xae6)))_0x5f0446=_0x4f5819,_0x5de522=_0x31dc24[_0x2991ec];else return-0x1*0xce9+-0x3*0x399+0x1*0x17b4;}}()),'exportKeys':_0x575c4a},'diff':_0x586558[_0x5e5eb3(0x301)](-0x23a+0x22e5+-0x1*0x20ab,0xbb0+-0x467+-0x721),'speed':{'on':_0x24f786['on'],'factor':_0x24f786['facto'+'r'],'writes':_0x550940,'scaled':_0x23b861[_0x5e5eb3(0x301)](-0x5*0x48a+-0x9ff*0x3+-0x34af*-0x1,-0x1*-0x7eb+0x2228+-0x2a03),'skipped':_0x1834f2['slice'](0xde7+-0x9*0x13b+-0x2d4,-0x1922+-0xfb*0x7+0x200f)},'esp':_0x4bb1af(),'view':_0xf663c[_0x5e5eb3(0x372)](_0xf24c93),'angles':(function(){var _0x1b87c4=_0x5e5eb3,_0x1c6fd6={'OOtsK':function(_0x54ad61,_0x238eba){return _0x54ad61!==_0x238eba;}},_0x6ecda5=_0xf663c[_0x1b87c4(0x3e4)](_0x283cea),_0x47e518=null,_0xf52322=null,_0x598d34=_0xf663c[_0x1b87c4(0x971)](_0x9aa442);if(_0x598d34){var _0x48eb54=_0x2f8cc6(_0x598d34[_0x1b87c4(0x560)],[_0x598d34[_0x1b87c4(0x560)][-0x12dd+0x1*0x1ca6+0x5*-0x1f5],_0x598d34[_0x1b87c4(0x560)][0x228a+0x3b3*0x7+0x11*-0x38e],_0x598d34[_0x1b87c4(0x560)][-0xf59+0x231c+0x13c1*-0x1]+(0x17d4+-0x1b*-0xf3+0x9e4*-0x5)],-0x25c*-0x5+-0x13*0x1ac+0x17e0,0x21d7+0x1594+-0x3383);_0x48eb54&&(_0xf663c['YiTRI']('NnWhU',_0xf663c['aWnXK'])?(_0x47e518=_0xf663c[_0x1b87c4(0xbac)](_0x48eb54['x'],-0xbbc+0x59*-0x1a+-0x1a*-0xf3),_0xf52322=_0xf663c[_0x1b87c4(0xbac)](_0x48eb54['y'],0x1847+0x243b*0x1+-0x389a)):(_0x19dbd8=_0x23c8e5[_0x1b87c4(0x7de)](_0x23c8e5['RmZdU'](_0x23c8e5['GbhOR'],_0x18b411),'s'),_0x5ba986=_0x23c8e5[_0x1b87c4(0xaf6)]));}var _0x5ec456=null,_0x51634a=null;if(_0x598d34){var _0x12cb18=_0xf663c[_0x1b87c4(0x1c2)](_0x2f8cc6,_0x598d34['eye'],[_0x598d34[_0x1b87c4(0x560)][-0x1369+-0x1*-0x1feb+-0xc82],_0x598d34[_0x1b87c4(0x560)][-0x3*0x16d+0x1b8+0x8*0x52]+(-0x66d+0x2*-0x844+0x16ff),_0xf663c[_0x1b87c4(0x9b5)](_0x598d34['eye'][0x1623+0x1a*0x99+0x25ab*-0x1],-0xacf+-0x9*-0x184+-0x37*0xd)],0xe6c+-0xd*-0x2e3+-0x31*0xfb,-0x1bcd+-0x1507+0x34bc);if(_0x12cb18)_0x5ec456=_0xf663c[_0x1b87c4(0x831)](_0x12cb18['y'],-0x2e6+-0x1ed2+-0x7*-0x560);var _0x490c04=_0x2f8cc6(_0x598d34[_0x1b87c4(0x560)],[_0x598d34[_0x1b87c4(0x560)][-0x20e*0x11+0x1e1c+-0x1*-0x4d2],_0xf663c[_0x1b87c4(0xac8)](_0x598d34['eye'][-0x234c+-0x2328+0x4675],0x2530+0x10cb+-0x35f1*0x1),_0x598d34[_0x1b87c4(0x560)][0x2e*-0x97+-0x1*0x17a8+0x32cc*0x1]+(0x25e9+-0x16c6+-0x1*0xf19)],-0xd*0x1d9+-0x104a+-0x3*-0xebd,0xa77*-0x1+-0x10*0x26+0x10bf);if(_0x490c04)_0x51634a=_0x490c04['y']/(0x1ea5+-0x31a+-0x17a3);}return{'identified':_0x518f83[_0x1b87c4(0x3f6)+'ified'],'why':_0x518f83[_0x1b87c4(0x7fe)],'source':_0x518f83['sourc'+'e'],'viewHooks':(function(){var _0x3e3420=_0x1b87c4;try{return _0x23c8e5['rTLvH'](_0x4a074d);}catch(_0x366f24){return{'err':_0x23c8e5[_0x3e3420(0x4db)](String,_0x366f24&&_0x366f24['messa'+'ge']),'stack':String(_0x366f24&&_0x366f24[_0x3e3420(0xbe7)])};}}()),'setterPair':(function(){var _0x1bdddc=_0x1b87c4;if(_0x1bdddc(0xa69)!==_0x1bdddc(0x5e2)){var _0x429d05=_0x25a804();return _0x429d05?{'a':_0x429d05[_0x1bdddc(0x244)],'b':_0x429d05[_0x1bdddc(0x98c)],'hits':_0x429d05[_0x1bdddc(0x487)],'order':_0x429d05[_0x1bdddc(0x3eb)]}:null;}else{var _0x363c4d=-0x23f7+0x29c+0x215b;for(var _0x1a75ff=-0x201f+-0x8*-0x3b4+-0x3*-0xd5;_0x1a75ff<_0x4cb9c7['lengt'+'h'];_0x1a75ff++){if(_0x439fb8[_0x1a75ff]['hook']&&_0x1c6fd6['OOtsK'](_0x5809f8[_0x1a75ff][_0x1bdddc(0x145)][_0x1bdddc(0x71c)+_0x1bdddc(0x606)],_0x2681ef))_0x363c4d++;}return _0x363c4d;}}()),'yawAt':_0x518f83['yawGe'+_0x1b87c4(0x5f8)]||_0x1b87c4(0x719)+_0x1b87c4(0x9c1)+'s)','pitchAt':_0x518f83[_0x1b87c4(0x860)+_0x1b87c4(0x6ff)+'r']||_0xf663c['rxNTk'],'getters':_0x518f83[_0x1b87c4(0x5cb)+'rs'],'rawPitch':_0x518f83['rawPi'+_0x1b87c4(0x500)],'rawYaw':_0x518f83['rawYa'+'w'],'pitch':_0x518f83[_0x1b87c4(0x860)],'yaw':_0x518f83[_0x1b87c4(0x481)],'legacyOffsetsCleared':_0x5bfa88,'fov':_0x2a53c9['fov'],'fovSane':_0x2a53c9['fov']>=-0xf65*-0x1+0x3*0x6cd+0x8e4*-0x4&&_0x2a53c9[_0x1b87c4(0x9f1)]<=0x1757+-0x105*-0x1d+-0x347a,'centreX':_0x47e518,'centreY':_0xf52322,'aboveY':_0x5ec456,'belowY':_0x51634a,'projection':_0x244e82()};}()),'fov':_0x2a53c9['fov'],'espView':{'on':_0x393b6f['on'],'boxes':_0x393b6f['boxes'],'span':_0x393b6f['span']},'local':(function(){var _0x373d75=_0x5e5eb3,_0x2d023b=_0xf663c['kmWnT'](_0x9aa442);if(!_0x2d023b)return null;return{'ptr':'0x'+_0x2d023b[_0x373d75(0x4a6)]['toStr'+_0x373d75(0x907)](0x391+0x200d+0xbda*-0x3),'feet':_0x2d023b['feet'],'eye':_0x2d023b['eye'],'posAt':_0x2d023b[_0x373d75(0xafb)],'copies':_0x2d023b['copie'+'s'],'cluster':_0x2d023b[_0x373d75(0x72b)+'er'],'eyeHeight':_0x5a4546,'pitch':_0x2d023b[_0x373d75(0x860)],'yaw':_0x2d023b['yaw'],'reach':_0x2d023b[_0x373d75(0x9bb)]};}()),'uwmkLog':_0x1fb56a[_0x5e5eb3(0x301)](0x2086+-0x1f*0xc1+-0x927,-0x240d+-0xb1b*0x3+0x4572),'warnings':[]};if(_0x23a47e)_0x2ded3['warni'+'ngs']['push'](_0x5e5eb3(0x3a2)+'y\x20fai'+_0x5e5eb3(0x4cb)+_0x23a47e);if(_0x493058['error'])_0x2ded3[_0x5e5eb3(0x78a)+_0x5e5eb3(0x847)][_0x5e5eb3(0x773)](_0x5e5eb3(0x823)+_0x5e5eb3(0x7e6)+'g\x20fai'+'led:\x20'+_0x493058['error']);if(_0xf663c['pAkTF'](_0x2ded3[_0x5e5eb3(0x3a2)+_0x5e5eb3(0xa82)],-0x117e+0x276+0xf08)&&Object['keys'](_0x2ded3['insta'+_0x5e5eb3(0xb01)])['lengt'+'h']>0x109*0x17+0x1*0x21a+-0x1*0x19e9){if(_0xf663c['zbjUr']===_0xf663c['eMDHo'])return _0x1b47f9[-0x1*0x1ad5+0x1264+0x1*0x871]=_0x3e9c65|-0x1e6b+-0x1a0a+0x95*0x61,_0x2a331a[-0x33b+0x1f76+-0xb*0x291];else _0x2ded3[_0x5e5eb3(0x78a)+_0x5e5eb3(0x847)][_0x5e5eb3(0x773)](_0xf663c[_0x5e5eb3(0x9c3)](_0x5e5eb3(0x856)+_0x5e5eb3(0x839)+Object[_0x5e5eb3(0x854)](_0x2ded3[_0x5e5eb3(0xb59)+_0x5e5eb3(0xb01)])['lengt'+'h'],_0xf663c['vMjQn'])+(_0x1c7561[_0x5e5eb3(0x4b0)+'rror']?_0x5e5eb3(0x7f7)+_0x5e5eb3(0x764)+_0x1c7561[_0x5e5eb3(0x4b0)+_0x5e5eb3(0x237)]:_0x5e5eb3(0xb7c)+_0x5e5eb3(0x948)+_0x5e5eb3(0xa94)+_0x5e5eb3(0x11c)+'very\x20'+_0x5e5eb3(0xa23)+_0x5e5eb3(0x9da)+'\x20skip'+'ped\x20b'+_0x5e5eb3(0x385)+'e.'));}_0x2ded3[_0x5e5eb3(0x3f6)+'ity']&&_0x2ded3['ident'+'ity'][_0x5e5eb3(0x267)+_0x5e5eb3(0xb80)]===![]&&_0x2ded3['warni'+_0x5e5eb3(0x847)][_0x5e5eb3(0x773)](_0xf663c[_0x5e5eb3(0x299)](_0xf663c['hiWoC'](_0xf663c[_0x5e5eb3(0xa9c)],_0xf663c['XBQor'])+_0xf663c[_0x5e5eb3(0x6a4)],_0xf663c['pzYVz']));_0x2ded3[_0x5e5eb3(0x3f6)+_0x5e5eb3(0x626)]&&_0xf663c['zCaLz'](_0x2ded3[_0x5e5eb3(0x3f6)+'ity'][_0x5e5eb3(0x8e1)+_0x5e5eb3(0xc6a)+_0x5e5eb3(0x4a9)+_0x5e5eb3(0x7df)+_0x5e5eb3(0x238)],![])&&_0x2ded3[_0x5e5eb3(0x78a)+_0x5e5eb3(0x847)]['push'](_0xf663c['pcaxR']('plugi'+_0x5e5eb3(0x29d)+_0x5e5eb3(0xb38)+_0x5e5eb3(0x875)+_0x5e5eb3(0x49e)+'ndow.'+_0x5e5eb3(0x6df)+'WebMo'+_0x5e5eb3(0xc7c)+_0x5e5eb3(0x3be)+_0x5e5eb3(0x705)+'the\x20p'+'lugin'+_0x5e5eb3(0xa68)+_0x5e5eb3(0x8c0)+'\x20',_0xf663c[_0x5e5eb3(0xbce)]));if(_0x2ded3[_0x5e5eb3(0x44b)]&&_0x2ded3[_0x5e5eb3(0x44b)][_0x5e5eb3(0xb7d)])_0x2ded3['warni'+_0x5e5eb3(0x847)][_0x5e5eb3(0x773)](_0xf663c['XfsUj']('ESP:\x20',_0x2ded3[_0x5e5eb3(0x44b)][_0x5e5eb3(0xb7d)]));if(_0x2ded3['globa'+'ls']&&!_0x2ded3['globa'+'ls']['heapU'+'8']){var _0x13d4fa='';_0x2ded3['hookF'+_0x5e5eb3(0x9a3)+'oof']&&(_0x13d4fa=_0xf663c[_0x5e5eb3(0x16b)](_0xf663c['hIiBh'](_0xf663c['jNGar'](_0x5e5eb3(0x330)+_0x5e5eb3(0x4e9)+'red\x20a'+'t\x20'+_0x2ded3[_0x5e5eb3(0x54d)+_0x5e5eb3(0x9a3)+'oof'][_0x5e5eb3(0xaab)],'ms\x20wi'+_0x5e5eb3(0x835)+_0x5e5eb3(0x8c4)+_0x5e5eb3(0x55d)+'=')+_0x2ded3['hookF'+'irePr'+'oof'][_0x5e5eb3(0xc0c)+_0x5e5eb3(0x9a8)+'nc'],_0x5e5eb3(0x741)+_0x5e5eb3(0x5ec)+'resol'+'ved=')+_0x2ded3[_0x5e5eb3(0x54d)+_0x5e5eb3(0x9a3)+'oof'][_0x5e5eb3(0x369)+'veGam'+'eAtFi'+'re'],_0xf663c[_0x5e5eb3(0x8aa)])+(_0x2ded3[_0x5e5eb3(0x54d)+_0x5e5eb3(0x9a3)+_0x5e5eb3(0x49b)][_0x5e5eb3(0x8b4)+'ource'+'AtFir'+'e']||_0x5e5eb3(0x883))+(_0x5e5eb3(0x638)+'\x20the\x20'+'refer'+_0x5e5eb3(0x54b)+_0x5e5eb3(0xbbf)+'ed\x20th'+_0x5e5eb3(0x787)+'d\x20is\x20'+_0x5e5eb3(0xbfd)+_0x5e5eb3(0x570)+_0x5e5eb3(0xa5a)+_0x5e5eb3(0xb82))),_0x2ded3[_0x5e5eb3(0x78a)+'ngs']['push'](_0xf663c['gxWJi'](_0xf663c['luhsJ'](_0xf663c[_0x5e5eb3(0x32c)]+(_0x2ded3[_0x5e5eb3(0x3e2)+'ls']['gameS'+'ource']||_0xf663c[_0x5e5eb3(0x6ce)]),_0x5e5eb3(0x79a)),_0xf663c['HGbDK'])+_0x13d4fa);}if(_0x2ded3[_0x5e5eb3(0x3e2)+'ls']&&!_0x2ded3[_0x5e5eb3(0x3e2)+'ls']['value'+_0x5e5eb3(0xbed)+'er']||_0x2ded3['globa'+'ls'][_0x5e5eb3(0xaf8)+_0x5e5eb3(0xbed)+'er']===_0xf663c['lFIsY']){if(_0xf663c[_0x5e5eb3(0x4bd)]!=='AIkpQ')_0x2ded3['warni'+_0x5e5eb3(0x847)]['push']('windo'+'w.Uni'+'tyWeb'+'Modki'+'t.Val'+_0x5e5eb3(0x94b)+_0x5e5eb3(0xbb3)+_0x5e5eb3(0x1a7)+'ssing'+'\x20-\x20ca'+_0x5e5eb3(0x199)+_0x5e5eb3(0xa5c)+'unnin'+_0x5e5eb3(0x9b2)+'nd.');else return new _0x328066(_0x11229f[_0x5e5eb3(0x786)+'r'],_0x223b0e['byteO'+_0x5e5eb3(0x961)],_0x35ac87['byteL'+_0x5e5eb3(0x56b)]);}if(_0xf663c[_0x5e5eb3(0x486)](_0x2ded3['hooks'+_0x5e5eb3(0x20f)],-0x1*0x1e09+0x1*0x17e5+0x624)&&_0xf663c[_0x5e5eb3(0x653)](_0x2ded3['hooks'+'Appli'+'ed'],0x1*-0xfe+0x15*-0x19b+0x6f1*0x5)&&_0x28beed){if(_0xf663c[_0x5e5eb3(0x2b0)]!==_0xf663c['EFjIk']){var _0x17026c='';for(var _0x5e63c6=0xed5+-0xc8f+-0x246;_0x23c8e5[_0x5e5eb3(0x5cd)](_0x5e63c6,_0x1580fc['lengt'+'h']);_0x5e63c6++){var _0x1dc114=_0x19e3a7[_0x5e63c6][_0x5e5eb3(0x10f)+_0x5e5eb3(0x907)](0xde4*-0x2+-0x1708+-0x128*-0x2c);_0x17026c+=_0x23c8e5['EdZns'](_0x23c8e5[_0x5e5eb3(0x704)](_0x1dc114[_0x5e5eb3(0x68d)+'h'],-0x1*0x550+-0x1d95*-0x1+-0x1843*0x1)?'0':'',_0x1dc114);}return _0x17026c;}else _0x2ded3[_0x5e5eb3(0x7f2)+_0x5e5eb3(0x9de)+_0x5e5eb3(0x15f)]===0x1*-0xfbd+-0x30d*0x3+0x18e4?_0x2ded3['warni'+'ngs']['push'](_0xf663c['AWjlx'](_0xf663c['cDdEw'](_0xf663c[_0x5e5eb3(0x16b)](_0xf663c[_0x5e5eb3(0x965)](_0xf663c[_0x5e5eb3(0x7d0)](_0xf663c[_0x5e5eb3(0x957)]+_0x2ded3[_0x5e5eb3(0x7f2)+'Total'],_0xf663c[_0x5e5eb3(0x90e)])+(_0x5e5eb3(0x59d)+_0x5e5eb3(0x42e)+'durin'+_0x5e5eb3(0x8da)+'Assem'+_0x5e5eb3(0x530)+_0x5e5eb3(0x19c)+'tiate'+_0x5e5eb3(0x741)+'snaps'+_0x5e5eb3(0x1e3)+'plugi'+_0x5e5eb3(0xa7f)+'ks.le'+_0x5e5eb3(0x2c2)+'\x20'),_0x5e5eb3(0x52a)+_0x5e5eb3(0x6a6)+_0x5e5eb3(0xa36)+'ered\x20'+'after'+'\x20it\x20a'+_0x5e5eb3(0x8bf)+'nored'+'\x20for\x20'+'the\x20l'+_0x5e5eb3(0xc08)+'f\x20the'+'\x20page'+'.\x20'),'Regis'+_0x5e5eb3(0x53e)+'\x20'),_0x2ded3['hooks'+'Regis'+_0x5e5eb3(0x53e)+_0x5e5eb3(0xa63)]),_0x5e5eb3(0x841)+'(s)\x20d'+_0x5e5eb3(0x7ee)+_0x5e5eb3(0xa90)+_0x5e5eb3(0x286)+_0x5e5eb3(0x1d9)+_0x5e5eb3(0xbe8)+'start'+'.')):_0x2ded3['warni'+'ngs'][_0x5e5eb3(0x773)](_0xf663c[_0x5e5eb3(0x64e)](_0xf663c[_0x5e5eb3(0x699)](_0xf663c[_0x5e5eb3(0x1fb)],_0x2ded3[_0x5e5eb3(0x7f2)+'Resol'+'ved'])+_0xf663c[_0x5e5eb3(0x9e7)],_0x2ded3['hooks'+'Total'])+_0xf663c['YvwSv']+(_0x5e5eb3(0xb58)+',\x20Met'+'hodIn'+'fo*)\x20'+'->\x20vo'+'id\x20do'+'es\x20no'+_0x5e5eb3(0x6ac)+'ch\x20th'+_0x5e5eb3(0x566)+_0x5e5eb3(0x24b)));}_0xf663c[_0x5e5eb3(0x486)](_0x2ded3[_0x5e5eb3(0x7f2)+'Appli'+'ed'],0x21f9+0x12a9+-0x2*0x1a51)&&!_0x2ded3[_0x5e5eb3(0xb59)+_0x5e5eb3(0xb01)]['FPSco'+_0x5e5eb3(0x2e2)+_0x5e5eb3(0xb78)]&&_0x2ded3[_0x5e5eb3(0x78a)+_0x5e5eb3(0x847)]['push'](_0xf663c[_0x5e5eb3(0x412)]('Hooks'+_0x5e5eb3(0x24e)+_0x5e5eb3(0x532)+'ed\x20bu'+'t\x20no\x20'+_0x5e5eb3(0x366)+'ntrol'+'ler\x20h'+_0x5e5eb3(0x6af)+_0x5e5eb3(0x836)+_0x5e5eb3(0x7fd),_0x5e5eb3(0xaf9)+'r\x20you'+_0x5e5eb3(0x24e)+'not\x20i'+'n\x20a\x20r'+'ound,'+'\x20or\x20t'+'he\x20ho'+_0x5e5eb3(0xb43)+'\x20on\x20t'+_0x5e5eb3(0x3c3)+'ong\x20o'+_0x5e5eb3(0x283)+'ad.'));if(_0x2ded3['insta'+'ncesR'+_0x5e5eb3(0xc3e)+'ed'][_0x5e5eb3(0x68d)+'h']){if(_0x5e5eb3(0xa21)!==_0xf663c[_0x5e5eb3(0x955)])_0x2ded3['warni'+_0x5e5eb3(0x847)][_0x5e5eb3(0x773)](_0xf663c[_0x5e5eb3(0xa75)]('rebui'+'lt\x20si'+_0x5e5eb3(0xbe0)+'irst\x20'+_0x5e5eb3(0x856)+'re\x20(r'+'espaw'+'n?):\x20',_0x2ded3['insta'+_0x5e5eb3(0x4ee)+'eplac'+'ed']['join'](',\x20')));else{var _0x9fe124=_0x1c267(_0x13e769+_0x594109(_0x5086dd[_0x393908][-0xf12*-0x1+0x1e2e*-0x1+0xf1c],0x7*0x386+-0x424+-0x1476),_0x23c8e5[_0x5e5eb3(0x636)]);if(_0x9fe124!==_0x5cb8a3)_0x10ab87['tag'][_0x560829[_0x29619d][0x270*-0xd+-0x638*0x1+-0x1*-0x25e9]]=_0x9fe124;}}return _0x2ded3;}else return null;}function _0x52465c(_0x20129d){var _0x1b76e1=_0x1e5d49;if('TDrfY'===_0xf663c[_0x1b76e1(0x988)]){_0x1fa86a[_0x1b76e1(0x944)+_0x1b76e1(0x678)+'ault'](),_0xf663c[_0x1b76e1(0x17f)](_0x3a9f05,!_0x400c42[_0x1b76e1(0x16e)]);return;}else{console[_0x1b76e1(0x361)](_0x1b76e1(0x60b)+_0x1b76e1(0x484)+'\x20Skil'+_0x1b76e1(0x5ed)+_0x1b76e1(0xa2b)+'rt',_0xf663c['zFVFC'](_0xf663c['jNGar'](_0x1b76e1(0x492)+':',_0x3349a7),_0xf663c['IVZPR']),_0x20129d),console[_0x1b76e1(0x361)](_0xf663c['ielYy'](_0xf663c['rEnwT'](_0x522140,'\x0a'),JSON[_0x1b76e1(0xc6d)+_0x1b76e1(0x99f)](_0x20129d,null,-0x2448+0x1062+0x5*0x3fb))+'\x0a'+_0x3f51b2),_0x1cac27=_0x20129d;try{_0x58bb06(_0x20129d);}catch(_0x3f619f){}_0x1546a1(_0xf663c['VJUgt'],{'report':_0x20129d});}}function _0x268dc8(){var _0x5c591e=_0x1e5d49;if(_0xf663c['HBNiz']('zcCvm',_0x5c591e(0x7ed))){var _0x5695ec=_0x3a1107[_0x5c591e(0x301)](0xf00+-0x1085+0x185*0x1,-0xd18+0x113*-0x1e+0x16*0x21d);if(_0x3b18f0['index'+'Of'](_0x5695ec)===-(0x253f*-0x1+0x201e*-0x1+0x1*0x455e)&&_0x49f004[_0x5c591e(0x68d)+'h']<-0xd20+-0x3*0x27f+0x14d9)_0x47ea4b[_0x5c591e(0x773)](_0x5695ec);}else try{return _0x4014eb();}catch(_0x2db55e){return{'version':_0x1556cc,'when':new Date()[_0x5c591e(0x8ce)+_0x5c591e(0x590)+'g'](),'elapsedMs':Date['now']()-_0x35db39,'host':_0x2ccfd4,'uwmk':!!(window['Unity'+_0x5c591e(0x28a)+_0x5c591e(0x980)]&&window['Unity'+_0x5c591e(0x28a)+_0x5c591e(0x980)]['Runti'+'me']),'il2CppContext':![],'arm':_0x493058,'hooksTotal':_0x3b5d62[_0x5c591e(0x68d)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0xf663c[_0x5c591e(0x405)](String,_0x2db55e&&_0x2db55e['messa'+'ge']||_0x2db55e)};}}function _0x1f3cb3(){var _0x531518={'bvrbE':function(_0x310fa5){return _0x310fa5();},'JVJXW':function(_0x248b3f,_0x2ce31d,_0x465346){return _0x248b3f(_0x2ce31d,_0x465346);},'FcJpX':function(_0x4ca0b8,_0x32341a){return _0x4ca0b8<_0x32341a;},'trhRw':function(_0x2829ec,_0x16b084,_0xfab6bf){return _0x2829ec(_0x16b084,_0xfab6bf);}},_0xcd8c19=0x14a8*0x1+0x19c*0x17+0xe6b*-0x4;try{_0x583fa2();}catch(_0x286df0){}try{_0x8949da();}catch(_0x3bc69b){}setInterval(_0x363b06,-0x7*-0x371+-0x1*-0x6c5+-0x38*0x7d),_0x52465c(_0x268dc8()),function _0x1ced4c(){var _0x55aef6=_0x49fc;if(!_0x3b5d62[_0x55aef6(0x68d)+'h']){if(_0x55aef6(0x453)!==_0x55aef6(0x5cf))try{_0x531518[_0x55aef6(0x715)](_0x2cc231);}catch(_0x21a54e){}else _0x6c8e40=_0x49b732(_0x46e7f5);}_0xcd8c19++,_0x52465c(_0x268dc8());if(!_0x3b5d62[_0x55aef6(0x68d)+'h']&&_0xcd8c19<-0x1*0x2bf+-0xcd7+-0x2*-0x861)_0x531518['JVJXW'](setTimeout,_0x1ced4c,0x183*-0x8+0x1e73+-0xa8b);else{if(!Object['keys'](_0x201b55)[_0x55aef6(0x68d)+'h']&&_0x531518['FcJpX'](_0xcd8c19,-0x1206*-0x1+0x1b25+-0x2bff))setTimeout(_0x1ced4c,-0x714+0x1d*-0x6d+0x1b3d);else _0x531518['trhRw'](setTimeout,_0x1ced4c,-0x6*-0x18f+0xc2*0x21+-0x1dac);}}();}if(document['body'])_0x1f3cb3();else document[_0x1e5d49(0xc9a)+'entLi'+_0x1e5d49(0x825)+'r']('DOMCo'+'ntent'+'Loade'+'d',_0x1f3cb3,{'once':!![]});if(document[_0x1e5d49(0x71e)]){if('SlZOG'==='SlZOG')try{_0x6de11b();}catch(_0x4f0713){}else try{return _0x4a001d&&_0x19aedb[_0x1e5d49(0x786)+'r']?_0x1448b1['buffe'+'r']['byteL'+_0x1e5d49(0x56b)]:0x1c40+0x13*-0x14b+0x17*-0x29;}catch(_0x2a0feb){return-0x59*0x39+-0xe*-0x1d5+-0x1*0x5d5;}}else document['addEv'+'entLi'+_0x1e5d49(0x825)+'r'](_0xf663c[_0x1e5d49(0x5c4)],function(){var _0xb6df36=_0x1e5d49;if(_0xf663c[_0xb6df36(0xa5d)](_0xb6df36(0x6a7),_0xb6df36(0x6a7)))_0x305b28[_0xb6df36(0x940)+'dule']=![],_0x280c1a[_0xb6df36(0xacb)+'8']=![],_0x42fdfd[_0xb6df36(0xaa9)+'ytes']=0x17d*0x1+-0x1dcb+-0x1c4e*-0x1;else try{_0xf663c[_0xb6df36(0x4f0)](_0x6de11b);}catch(_0xf0b808){}},{'once':!![]});})()));function _0x24cc(){var _0x5e5ce3=['rwL0Agu','zdTYAwC','Cg9Zqxq','yM90CW','zKriqw4','DMLLDZO','DMnIsxG','ufLSzwK','BMnLCW','ywnLo3C','AKLsCw4','DwjuDeS','mNb4o20','Bw9YBgW','iJ5ZywS','zwn0Aw8','DgLVBJO','BgLLzca','twTnu0u','nhW5FdC','lxrVz2C','tLbdx0m','BJOWo3a','B25NE2m','C3bHy2u','CMLNAhq','Dw5PDa','su5higy','oJK5oxa','WONcKCkgWPpcJW','mJbWEcK','yIXH','D0LlwwC','A2LUza','BMnLv3i','kZb4','Dw5KoNq','DMvYEsa','AK5yC2q','WOJcH8ktWOZcLa','ihLLDa','CMfUC3a','Avnstem','ChDQsw0','AcbMAwu','nsWXndm','AguGCMe','yxjHBMm','reD6sfK','EeLkDK8','Cd0Imc4','BgqGB2y','C29SDxq','zxjZ','o3DPzhq','WOBcI8koWO/cHG','n3W4Fdu','DMvJmG','B2XPzca','zwrnCW','ys1ZA2K','yxrIwe8','t1b3ugC','BNrPBwu','zgvZy3S','ie1ciea','id0G','z1nmuu0','m3W1','ywjLBhS','AK9RCfy','zxG7z2e','Ahq6nJu','Dg9WoJe','B2SGAxm','Aw1L','rMDzrhC','C3rLCa','mcuGBM8','lM1Ulxq','DNjZtvG','AfDhEfa','vhjSAMm','Dg9W','DZiTB3u','z2fyvKi','B2jIEsa','lM1UlwW','mJbWEca','B3nLCY4','A3f0ufO','wLrxENu','WPpcICkoWOBcKW','icbMywm','B2jMqG','khrOAxm','Aw5ZDge','BNj0wuW','lxnUyxa','z1fWqKS','BhKUieG','DMLLDY0','sfvqu2m','Bg9Hzhm','zxzLCNK','zMLSBd0','Bw4TC2K','ihLLDca','zfHqEMW','zJmY','BwvTB3i','teLwrsa','WO3cLCktWPtcIW','psiXnJa','o29Wywm','vvnez28','AM9PBG','msiGC3q','ktTJB2W','rfvsC2S','z2fWoJG','ieaG','sg5fu1a','Cgv0ywW','DeHLAwC','wgzZvwO','WPxcImkqWPlcKa','BgvY','ignOzwm','nZCSlJq','CM9JwwS','tM8GCMu','BM90zq','ztTZDhi','BgLJyxq','DgnOzxm','psjIywm','B3CU','qvDODwm','pc9KAxy','z2LUigC','BhrLCJO','C3fYDa','kgXVyMi','zhmGWRCG','ChG7CMK','AgLSzsa','y2fUDMe','y0LUChu','iZjHmgy','qNDjz04','runVyum','wNzqt08','EwLhyNy','v3DKDeW','yw5ZzM8','nZq4mZy','oMLUC2u','AxrOie0','CYGXlJe','icaZlIa','tgrhtgy','q2XPCgi','Aw9UrM8','oYi+ltW','B2LUDgu','ysbZDge','BMfNzxi','sfzPzxi','igHLEd0','DcbIzwu','lGOk','pgLUChu','Dg9Y','te5fs2C','AgfxAg4','yxjJ','yxvxCNG','yxv0BW','A01Puhy','r1zVrwG','ENjyyxu','teDptLq','WPdcH8kjWOJcJG','mZT9','CfDXwNC','ChbLCIa','WPxcJ8kgWOJcKq','qMnKrwq','quWGqum','BgfIzwW','rhH2seC','BM8Gzw4','zMLSBfq','nZq4mZa','Bg9dAge','vhncqwe','BgLNBJO','zxHPC3q','cLSGif0','ig1HBMe','o2nVBg8','sxfRq24','lc4WnsK','tgnKqxO','WOZcKCkiWPxcJa','wKLwswu','D2vyAK8','yw1LlGO','ifvxtuS','qNHKDM0','y29UDgu','mtjWEdS','CeriEfG','sKXUsha','AxrPywW','DLbhA2y','B2DNzwq','mhHKma','ywnRihq','BMXvBMm','ns00idC','WPpcHSkiWO3cJW','oIm4zdC','nJaIigG','nYWUnYK','nsaWlti','AxnHyMW','DYGWida','Aw5Ly2e','nIWYmZG','BMnLigy','B246zMK','BYb0Agu','Aw1HDgK','BM8Gvxa','sNrHq3a','EsbPBIa','C3rHy2S','BwvUDc0','zxH0','Dg87Fq','uNflz04','C2STy2e','v3jHCha','AeLcCeO','oMjSDxi','ELbfywi','zwqGlYa','CJTZDhi','D2LUzg8','EvrHCa','EhHuwwm','ufKGve8','BhDTrgS','yNvPBgq','ohb4ide','tuSGq08','zMXLEdO','u2nYzwu','BM90ihi','DxjLzey','surfige','zNjVBsa','EwuU','nsK7Dhi','rJKGDhC','zciGC3q','zsb0Age','WOJcISkiWPdcLa','rgvSDge','AwzLig8','vwrjs2y','uffXz2m','AwvYkc4','B3jPz2K','te5MuK8','zxHLy0m','zsbVyMO','tgf0zvu','Ec8XlJm','mNb4o2i','tfvXELO','igHHDMu','ALLiEeq','mNz3ldy','DgX7zgK','Dg9YicS','C1fKELa','ihbHBMu','AhPtBgG','WOZcICkoWOBcHG','C2v0','zMLSBa','yw5NzxS','rJGGlYa','Ag9ZDa','mhG1yW','D2fZBvi','mhW4Fdu','rgzXtgi','ihDOAwW','Dg91y2G','WPxcJmkhWOBcHW','Cg9Z','mhGXma','t0zxwLG','lwrPCMu','icdcTYaG','vxbKyxq','DeHLywW','BwuUx2C','yt0IC3q','AgfPzLO','uefJAfO','CezTz1e','ug9mCha','Dxm6n3a','vgHLigy','AMnLsxi','BNLHDM4','vvzuyxy','DfnbEKW','zxnWia','ntbWEcW','zxbSywm','y29UDhi','u2n5s0K','y2u7y28','EdOYmtq','BgvYige','uxnfz1G','DgLUzYa','zuLYwfu','CKnVBNq','AhvKlwm','ntTWB2K','ufvMuve','rJKGihm','BNq4','CMXHyMu','zwvMntS','z2v0q2W','we1YEe8','i2zMnMi','Dg9gAxG','rfrezhm','A2LUzYa','nc00lJu','cNzPzxC','Afj5D2y','C2vYDcK','BNrLCI0','CLnuseq','WOFcICkpWORcLq','DdOWo28','C3LUy3m','sw5ZDge','sg9ZChK','q1r0txG','WOZcH8kgWOZcKG','DcbPBMO','CKP5CuG','CdPYB3u','nsK7yM8','DIiGC3q','A3nptNe','BgfZDa','ie9o','BLj1BNq','WPdcJCklWPpcIG','q01c','C3rYAw4','BgLKzxi','nhb4o3q','CM9ZCY0','Aw50iIa','z25HDhu','WOBcJmkoWPtcKa','sgnLsKK','uMjKt3m','s1vsqs0','suL3C2G','BMfWC2G','qNjHy2S','AwDODdO','ywnRz3i','zgTPDc4','sLr2C1C','ndzWEdS','BgXLzca','ig9MzG','imk3ia','DgnOige','ChG7y3u','ue1JAfq','C2vYAwy','zwy1o2i','iJeIig0','y2fTia','ALrRD2O','Fdf8nNW','DNmGC24','WO7cJ8krWOJcJa','yxjLige','DMvhyw0','lNnRlxi','Bvruu2G','A2v5vhK','zdTWBge','yvvVveO','CuDHyMy','DJiTy3m','zcbYz2i','BI13Awq','zMXVDZO','ktTIB3i','ywrKrxy','A09luuu','DMLZAwi','BwvZC2e','reTJufy','mNWXFdm','Dg9tDhi','iM5VBMu','Ew9nq0K','z1rRrge','BNnLDca','mhGXmum','q291BNq','CufpzwK','D29YC3q','lJa4ktS','B3DIrfy','C3qGysa','C3bLzwq','ihnVigu','yxjLBNq','CgfUzwW','CY5Tzw0','vKPvz3q','B3rLlMu','ChDVrue','CgnHEfi','nNWXnxW','uMvNAxm','sgzMDfK','ytK5o20','Ds1YB28','yxbWzw4','mNb4idC','icaGy28','ltiUnsa','ihvPlw0','zYbMB3i','y25zAe8','WPtcKmkvWPlcJG','CenVBNq','CJPWB2K','yvPSCgO','ldi5lc4','D1rLywW','tg9VA0a','nduPoW','ihn0CM8','nxLhwu9WCq','imk3igzV','B2TLoMm','B25VC3a','DhvZANq','E2zSzxG','BMnL','WORcK8kqWOBcJa','igvUzca','WORcHSkkWOVcHG','yMjgswy','C3rYB24','Ag9VAW','u3DwruK','Aw5Lza','DNL5v28','lNnRlwW','ywDVAhu','DgG6mdS','uLfcs1K','y29Z','BeLkwwO','y2HLy2S','s1HWAeW','uLfmAeu','mcaWida','yxa8l2i','u3fisLm','y1zjwvC','sM1UC1m','WONcJmkvWOJcIG','yM9VBa','B1bky3i','uvfxBvK','ysbtA2K','tKXqvvu','qNDMDLu','u2rxuee','DMvK','BMLRywW','ChGGmZa','yNDvv2W','WOZcICklWPlcKW','i2y3zwu','zcb3yxm','s3f4Eee','uMvJDa','Awr0Aa','yw1LihC','te9drKi','tM9wrMK','C2vUDca','oMzSzxG','B3bLBG','WPtcJmkpWO7cIW','zgjVtKe','AfLxz1K','CYb3zxi','ChG7iJ4','yxrJAc4','ihDYAxq','DhLSzq','Axy+','C291CMm','CNjlvLG','ChrLza','mNWWFde','WONcLmkoWPpcJW','EgXpB2i','BNrxAw4','qKX2uwC','lNjLC28','ueXbwuu','BgTpwwy','r1vfu1m','ihbHC3m','tKHTsxi','yw4+','C29SDMu','mtbWEca','rhbqB1a','ktTIB3G','kZb4mJK','BeL6t04','Bgu9iMq','zMLSBfm','nYWUncK','vgv4Da','wxjqC1m','y2XPzw4','q2zXC2O','DgeTyt0','y3vYC28','u09WC1C','Bw4Ty28','AM9PBJ0','Chr1CMu','vgHLigC','zM9YBtO','BNn0yw4','nYWUnsK','DxjHtwu','WO7cJSkuWO/cLq','Ad0Ims4','Eg9Kr1u','Bw4TDgK','ywXPz24','EtPMBgu','lMn0B3i','Bgv4oJe','AxmGBwK','CMuk','mhWYFdq','vvjbx1m','DhzZweO','iJ5gosa','BgrZlIa','kde1mcu','WOFcLmktWO/cJq','quPTz1i','zwXHChm','C2fUzsa','B3jRu3K','qu5pveG','CKXPC3q','icbVyMO','zwjRAxq','WO7cKSkrWOJcKG','DKTyt2u','iZrMogy','zNjVDw4','uuDPALm','i2zMogy','CvnkCwe','zxGTzgK','mteUnxa','tgfjru0','ruHUrLu','zhbYA2u','igvUDhi','WOVcImknWOFcKa','zgfY','DKfWrge','DgL0Bgu','WPtcKSkgWPlcKG','ExbLpsi','Dhj1zsi','nxb4o30','CgXPzxi','C0nIs2u','zMLYzwq','BcbKAxm','Fdb8nNW','BuTgzgK','cNLHDYa','CM91BMq','D2fPDgK','igL0ihm','vfnvz0O','EcbZB2W','igrVy3u','zKLhEeq','BIbtruu','ndmSmtC','qNfAvfK','B3n0zMK','WOVcKmkiWO3cHW','BJ0ICM8','WPtcISksWOFcKG','ywz0zxi','Ag90CYa','C2STyNq','u2TjugC','Du52A2y','igfJDgK','mxb4ihi','uufurxu','ihrOAw4','B29RCW','zxa9iJa','B3G9iJa','DhLxzwi','mtfWEdS','BNrPBca','C2v0sw4','yM91BMq','DhLWzq','ChG7Fq','iMzVBgq','z2vPuxe','oc00lJu','yxbWzwe','yMvkuLG','yMHfAvy','uevOwuG','EwPSq1a','C3zNE3C','qu5Ztfe','icaO','Bd0Ii2y','lM1Ulw0','idb4mJG','CwfJugO','BKrHq0q','vNzNBMK','Dxm6mta','CLHzEuu','zMXLEa','zM9YBq','Bw92zq','Bgu7zMK','Awv3','ywDHAw4','Au9Pvwy','vg90ywW','qLPNCKK','EMu6mta','Aw5WDxq','Dhj1zq','DcHHDxq','wKXJCu4','x19ZywS','igXPDMu','zvbPEgu','DgHby0K','WO/cJSkpWOBcKW','CwH6q1i','yK5uA1e','A3PHrwS','B2z3C04','nYWUocK','pc9WCMu','Ds1JC3m','Fdz8m3W','y3qGzM8','ywrPDxm','yw5NBgu','r01esvy','t1m+pG','lxaSnta','WPdcJCkuWOFcKq','CNqP','CMzSB3C','CMf3Aw4','ktT9','zMfRzq','CNnVCJO','zYaVigO','icHZB3u','Bc5ZAg8','AgzRCvi','vNb4rhm','CgfYyw0','BcWk','CNjVCG','DgvK','DKDdA3G','CMXQyNi','qwPSrLm','t25bCha','ncK7yM8','iefdveK','ywDLCG','ExbLCW','psjJB2W','t2zMC2u','DMzrCvq','CMf3qq','Bwvhyw0','y2XVC2u','uLrKvwq','Aw9UoMy','C2zVCM0','yMfZzq','AwXKlG','A2v5','yt0IyMe','igfYzsa','B3vWig8','B25Z','WPxcJSkmWOZcKG','C2XPzgu','yxqSCMC','vvzSugW','AdO2mNa','DcaWida','DxjLzca','BNrLCJS','B3b7zgK','yxjN','DdPUB24','BgvYkW','ys5ZA2K','ug9ZAxq','z2nsqK4','WPtcKmkjWOZcJG','D29YBgq','cNbPDgm','AfvvAhm','z2v0sxq','Bw5guwS','EdTMB24','DgfNtwe','ysGYntu','AwrKzw4','zg93','AwfiANy','CIb5B3u','iIbTAw4','A2DYB3u','zfHvDha','i3n3mI0','y2fWC3u','idzWEca','wKTQtfq','EgnHDM8','EMTUsK0','WOZcICkrWPxcKa','r2fTzsG','4Psa4Psaia','vgjys0q','ysbNyw0','vvHbu2O','EfP0uKy','lJm2lde','BePAy0u','zg9JDw0','zMfJDg8','CufrAfe','AdO5mNa','DMvYBg8','vNvqr0y','CMfJDgu','BMCGyxq','mtjWEca','mhG5oa','B0rHwNG','v2vItw8','uej4vw8','o2zVBNq','C3rHBMm','CMvHzca','AeLPqMG','WPtcLmkoWPhcKa','x3j1BNq','y29SCW','rKL2q2u','yxjPys0','WOZcHSkvWPhcIG','Cg9PBNq','BffhvhG','z2v0q28','BwDWvwW','zMLYC3q','Bcb1Cgq','AxrSzxS','BI5FCNu','BMCUcG','BwvTyMu','BwuUCMu','WPhcKSkpWPdcJG','Dw50','uuLTv3G','igLKpsi','Bez3yLm','WPlcI8kmWOJcIq','wg5QzNi','CMTsC3i','igj5igu','WO3cK8kvWORcIa','DgfU','tw91C2u','igDHBwu','ig90Agu','WOBcI8krWOFcIG','ruzQswS','CLrKvfu','zNbZ','pZWVC3a','zwfKE2q','zvvbEhq','idrWEca','m3W2Fda','zg93BG','B2fYzca','zvLoANi','B250zw4','DfjYBwG','yw55ihC','ig1LBNu','BNbozLK','EIaOsw4','zhrOoJm','BMD0AcW','lM1Ulxm','B05VwMS','Axr0zwq','pt09','oInIzge','EhrrD2m','Dc13zwK','y2f0','DgG6mJK','BgW6Aw4','oxW3Fdi','zuPxqvK','CxnttwW','CIb0Agu','CdOXmha','zYbZy3i','DdmY','Dw5KoNi','lhrYyw4','yw1L','zhvtBNO','qLnctM4','WOBcK8kuWOVcKG','CMDIysG','WOBcKmksWPhcKa','EK5Pseu','yxnZAwy','mtq1ntu2nKvqrwrorW','Awq9iNm','wKfVuLy','Ec1KAxi','BNrYB2W','Fdv8mW','oMf1Dg8','vuLUuwW','BNnoEKW','CNqGEwu','BML0Awe','mJeSmti','WO7cK8kvWO3cJG','CgfUpG','qM90','C25HCa','Aw50','y2fUzgK','B20GDgG','mcaWige','u2fRDxi','D1vJDNO','wfnrvM8','DdOXmha','ys1ZDY0','y1n1wvq','C2v0qG','ChjQEu8','uvfLyxu','zMfPBgu','zxnVBhy','BMCGzM8','ChnLBwe','zwXMoMy','oJPHzNq','C2XPy2u','AgLZiha','CwzPEMq','WPdcKCkkWO/cJa','DhrcwfK','B2jMrG','WO7cKmkhWOFcKG','AKrhy3m','EdTWywq','psiXmIi','C2v0sgK','zMy3ytK','yxj7D2K','phnWyw4','igvHy2G','EKTQz0i','mda7y28','shnfu1e','BNqTzMe','yxK6zMW','CNmkEwe','WOJcLmkoWOBcKa','zwvKzwq','B3nWywm','Bxb2y0S','EtPUB24','zgL2','lYbZChi','B3nL','AwvKige','rgDvruK','Aw5MBW','WOVcJSkoWPhcHG','AgTYExC','Bxbdv2W','CI1LDMu','z2H0oJi','CJOJzJC','psiXlJi','wLDbDhy','CM5PBMC','D2L0y2G','s2fkC1q','vLbqzgu','Bgv4lxm','nxm0idi','s1zJDhG','ieeGAg8','ru9qDem','AgvYAxq','BNvTyMu','WONcLmkrWOFcHW','DLn6qve','ksbVCIa','ntuSmtq','zMLSDgu','Fdn8nhW','BujmwLq','WORcJmksWPlcLa','lxDLyMS','CMf3','zxi6mdS','igSWpq','CNrnCuq','mtrWEdS','sNfMsKW','rNbmv0u','uMPJCfu','BvDfD3a','A2v5qxq','Dw5Kzwq','s1rgv2m','yMfUzc4','EwvZ','WOFcI8kiWPdcJG','CwLosNu','yM90Dg8','DtmY','Aw50lxC','BMDJvwm','oJCWmdS','Axr5oI4','sfrnta','nYWUmsK','zNjzBNu','CMPKy1u','B29RCYa','CLLUwLm','zw1VCNK','rwLqBMW','zsb1C2u','zuL0zw0','ig9Mia','CMvSyxK','zvjLy3q','B2X2zwq','Bg9N','z2v0sw4','wxnVAvO','zNjHBwu','DgGY','rLbty28','nhWZ','BwvUDs0','CMvZB2W','Fdn8ohW','DgfN','yw1PBhK','WOVcISkhWONcKq','BM8GBgK','B2jQzwm','AhvnC1O','CNmGyxi','t3rbrg0','lZeUndu','oYi+tM8','WO7cLCkvWOZcJa','te13tNK','o2jHy2S','wgrgwgq','uLbVExO','WOVcKSklWO/cLq','qKDPuvq','yw5ZCge','z2LUlwW','imk3ihrL','Bg9ZzxS','CNjuBMC','B2XSzxi','FdD8ma','wMHpA3u','Dw5Yzxm','Esb0Exa','BMC6mca','yK1vuKK','4OcuigzYyq','ie9IC2m','DhjVA2u','BM8Gseu','WORcI8knWPtcJG','q2HHBwK','nMi5zcW','BgCIihm','DxjHDgu','ifvjiIW','ohb4o2i','WOVcICkjWOJcKW','igTPBMq','qxDHA2u','s0LxDM8','lde0mYW','DgnNBeO','zhrO','mcbMAwu','WPxcISkrWPxcKG','EuHOz2e','B25ZB2W','lxDPzhq','DgHLBG','r0zHugm','q29WEsa','C3vYDMu','zfjMEeW','DxjHimk3','tgz2DKG','vKfm','vtGGAxm','q3HABLO','yMrHowm','rJKU','lYbQDw0','wMfyrxm','txrKwM4','BNqZmG','DxjlDM0','AwzMzxi','ig9Ul28','CYbVCNa','WORcKSkkWPhcLa','zfjhz1y','Dvr2ww0','C2v0ica','mNWXn3W','zvn0CMu','rw5HyMW','B3nZihq','WOJcJmkjWO7cLq','BI1PDgu','WONcJSkvWPxcHW','uNvUDgK','ndHWEcK','vernx0C','CIbWywK','B256uMO','AguGD3i','C2STBwq','CM9Rzs0','CNq7z2e','twnhCwO','u05HCfu','BwfW','sgvHBhq','r0DFr2e','rM9nBeW','igj1Dca','BK5LDhC','EdTHy2m','lJe4ktS','DMLLDYa','ys1Tzw4','zgf0yq','zxmGAxq','igHLyxa','yMLUzgK','yxv0BZS','C2HHzg8','ntuSlJa','WOFcK8ktWOFcHW','DgG6nNa','BKPpA3e','Bwj7lxC','ic0Gy2e','WPpcImktWOJcLq','lJuGms4','zxnJ','z2XVyMe','C3mP','A2T0EK4','vLvksMu','wwTev1u','y2XLyxi','B2zMihq','zenOAwW','BhzLzcK','B3jKzxi','WPpcJ8kvWOFcJG','B2yGDMK','uKX4Eha','qvDQBhG','DerHDge','pgrPDIa','uNL3BM8','BNnVBge','WONcJCkkWORcKa','n2vLzJu','AwrLBNq','lc45kq','DhLSzt0','mdTMB24','y1bpyNy','CMfUihK','A1vJreO','AtmY','BKXrsK8','DhjADvm','oJiXndC','wNrzCha','rfj0tKK','D2fZBva','mYWXnZC','DuP2BMi','ihnRAwW','WPtcKmkjWO/cIq','AwrLE2q','B2f0mZi','zw50igK','CMuGy2W','WPpcLCkvWPpcIG','nxWWFdi','WO3cJ8kgWPlcJa','yMfJA2C','ChG7yMe','o2DHCdO','CMrite4','mxb4ihm','B25Ligi','zLjgs0q','BNmU','DdTIB3i','igzSB28','EhbVCNq','ywX1zt0','C3LZDgu','WPxcKSkiWOFcKG','iokaLcbUBW','yM9VBgu','DM9msxi','EdT9','Dw1WAw4','DhrVBtO','BwLUv2K','igTUB3C','ys1IB3G','C3r5Bgu','ihzPzxC','Ewv0ic0','mNb4o3a','zxjYB3i','WOZcISkjWPdcJa','Fdz8nhW','vu9Lu28','B25Jzsa','zKXpyxa','WOBcKmkgWPhcIG','CxvLCNK','BMnqrMe','y3vZ','ue1SuNy','tvPcEMe','ufryq0O','sg9qrLi','C3bSAxq','WO7cKmkrWPtcJG','CgXHEwu','C3CYlwi','DuXlzK4','B2fYza','zcb0Agu','CMrLCI0','wgTcwLK','tw9KDwW','WOBcLmkuWO7cJq','mtb8n3W','yM9Yzgu','C2STy3q','tfbNyvC','B25Nig8','ihjNyMe','yxrPB24','mNb4o3O','zxnW','v25htMO','Ec1ZAge','r3fdqMu','mJrWEa','B2TLpsi','yM94lxm','BNrLBNq','Axj6Bei','uLnTyNC','yxm+','BfzfC2S','yw1Ligy','mJGPo30','ihjLywm','rLjuwhe','CKLRAfO','WO3cICkqWPpcIG','wufPv3G','o2n1CNm','lc40ktS','CdO4ChG','B3vYy2u','ms41ihu','DhrVBJ4','zsbUB3q','Agv4','CK5rs0q','tgHKA0K','A2v5zg8','sLnptIa','i3nHA3u','BM9UztS','rwLwBMy','igL0igK','uwLczuy','sxjlv0q','AgLKzgu','zhmGB24','lL9Nyw0','CMvKDwm','BhvOC0O','lNnRlxy','z3jVDw4','DgvHBq','te9h','BM8Gz3i','Aw4U','oInMn2u','igzPCNm','zwn0ihC','ELzHrg0','DhK6lJq','psjZDZi','Ewf3','Ec1OzwK','rgvhChG','A3vYyv0','lxDLAwC','BMjkwNi','AgL0CW','qLL6rNm','lJv6iIa','ugf0Aa','yLjqEuu','ChGPo20','sLDOwM8','rvnqig0','mZGSmJq','EvrQAKW','D1rWAxO','y29SB3i','CNj7y28','B2zM','CM9WywC','mJHWEdS','B2f0CYa','B2XZoJO','tenLsw8','B1HkDge','B29M','ywWGBM8','yujtrge','B3qGD2K','ndySmJm','BguGy3G','WOVcKCknWORcIW','igDSB2i','C3bYAw4','ihnVBgK','BgvJDdO','ChrY','Aw50zxi','BgLNBG','Aw1Lsxm','ucbVBJW','C2v0qxq','ueLds1a','CZPZDge','ihjLC28','i2zMnMu','BgfZDeu','t2LNwM4','nYWUmZu','cIHJBgu','zEkaPJWVCW','tffADfe','BM8Gtw8','qu5YqwO','Dg87zMK','u0jlwgS','Bw9YEvq','Fdf8na','WPhcImkvWOJcIa','EePuAMK','Ahq6nZa','pt09u0e','BxrRv08','lxnWywm','qNr0vfy','ELHMveW','idfWEca','Aw1HCcW','CMeTC3C','Bgv4oJa','CgfKrw4','lxyYE2e','AwjMBem','BgvKoIa','A2uTBgK','CJPYz2i','AMvJDhm','zw50tgK','lJq1ktS','idmWChG','oJeGmsa','Bw4TDge','WPxcKSkjWPlcHW','Ee1rtMm','igfYBwu','DY4Guhi','DMvKigm','CdO2ChG','ywn0Axy','uuzuugW','zwqGyNu','As1TB24','CgfKzgK','i2zMyJm','sKDXBwC','mcWUntu','B3i6Cg8','C2LU','Aw5KzxG','zwvrA28','Ee1UuM8','CM93CW','D2XJAee','B2SGzMK','lJi4','wejrB3i','nNWXFda','lNnRlxa','BMnLC1i','mJCWmZy4ofv1Bg93vq','q3bcq0y','C2fNzq','WOJcLmknWO3cJa','WPpcH8kpWO/cKW','v1bdzxm','AxvZoJe','DcaWicG','uMfUz2u','EuHMrLG','q3vKyNC','EwXZD2K','wwjVsKu','Bgu9iMm','DenVBg8','DYbLEha','ywnLlem','DgnO','Dgv4Dee','WO/cI8koWO3cJW','uKXkwe4','B3qUBw4','rviGD2K','yNL0zu8','yuD6uxa','z2vY','zwqU','DMfS','EdTMBgu','DgHLiha','tLDqzKe','ig1VDMu','CLPsqwO','mda7y3u','iZHKn2e','WOZcI8kmWOBcJW','iJ48l2q','yw5KigG','v19F','CZPJzw4','tIbIEsa','lc40nsK','qLn1z3u','WPxcJSkpWOVcJq','yNL0zuW','l3nWyw4','s0Hnuhm','ihrOAxm','EMu6mte','qNLjza','ihWG','Aw5N4OcM','v0fswI0','zYbZDxm','zxqSig8','uMTbyw0','CZOXmha','B3vUzci','D257B3a','C28GAg8','zMLLza','ChbLyxi','oJi2ChG','lwzHBwK','zM9UDdO','yMX5lMK','ifnRAwW','yxbWBgK','oMjYAwC','pgnPCMm','otLWEdS','zwrAufa','vgfTCgu','Bw9UB3m','rhLru0W','y2fTzxi','mtqZlde','AxPLoJe','ENbbwuO','DgvYzwq','ohb4o3a','wuPvsM4','DhbHC3m','B2TLlxC','iMvZCci','DxjHlwu','AhDbALK','AwXKlca','z2Tmweq','Awq7CgW','yMvHCMK','vhDvtee','zw5Jzsa','wxzLzwu','Ag9VA0y','CJT3Awq','qKfzrgm','yLbVuem','oxb4ide','icaGia','oJHWEdS','BNqTD2u','lsbvBMK','zwqGlsa','yxmSBw8','nZiZmZG5nhf2yKzXzG','ifrOzsa','ChPzvNO','WO/cKSknWO3cIq','BMnWz1e','Bez1BMm','svjTDLq','D2HVBgu','zxLL','v1bMtLq','WPpcKSktWPlcIq','mdT9','B246B3a','WOBcISkpWO/cIq','AxmGyNu','B2LPvfG','DejIuNu','Axb0ige','igrPzca','zw5NDgG','oJa7EI0','AuXbrKK','idi0iJ4','s1rAzwG','zwfJAge','WORcJmkgWPxcHW','zMLYzsa','zffqyva','sKrdt0e','w2rHDge','zNGIihq','CM9SBgu','BYbHihq','D2fZBu0','CLP2AMW','uKLKA3q','BNnWyxi','DcbUBYa','C3nPBMC','Et8Pica','sej1zee','ugHWsem','wxbrCLu','BuP0sNu','B3nPww0','ihrOzsa','iJ54pc8','wxbyDhu','EhL6','WORcKSklWO3cKq','zwfKEsa','Aw5ZDgu','WO3cLmksWPpcKG','zcbKAwe','yxjNAw4','C28GC3q','u3rYAw4','Bgu9','zciVpG','BNq7yM8','B3i6i2y','zfLKs1i','zfHPqKK','idHWEdS','DcbPzd0','oImXnta','Bw4Ty2W','ihbHC3q','DhLWzum','CNvUCYa','mhG3yW','tgT6vMe','EuH3Ehm','y3D0wLe','z2v0rwW','vKPJqK4','AgfUzwq','BvLewvm','B3v0','zuHpBgO','D2HHCfu','C2v0sxq','mdaWo3u','DxvSsM8','zevYsgi','CLPZAfu','y0Lxrxu','zhzHC3O','DgvTCZO','wgDTuK8','WONcH8kpWPlcLq','i2jKytK','yxnZtMe','A29Or1q','u2zcqLC','CgfPCKG','WONcLmkmWOVcIq','yw5Nzsi','CML0Dgu','BwvHBG','B2DVlxm','y2XPCgi','ugXHEwu','y3qOCYK','WOFcKCkrWPdcKq','n3b4o3a','AgL0zs0','C2v0tge','wLDXA2q','q2XRy2i','CMvIDwK','Dhj1y3q','C3rHCNq','DgLHBh0','mJiSmsW','z2v0Dgu','BMfTzq','wgTLCu8','DcbYzxa','A2HAr2W','l2j1Dhq','EuzQu3y','v1fpzg4','rvbNvMS','ufPPuhe','ihzPysa','yKPjvNi','vfPvC1e','yM94zxm','igq9iK0','z0znr1K','oJeYmha','t2zHAeu','lwLUzgu','zwLNAhq','rMjKuvi','CMvUDdS','zMvLDa','qLLUyue','u3bLzwq','D0fOuhi','zxrmzwy','u0TjteW','oMjYzwe','Ewf3r2u','BMu7Cg8','AxnWBge','AfzMAfe','z2fTzsa','BfDHCNO','C3rYB2S','BM8GCMu','zwHyuNi','lxDYyxa','u2vLBG','vffNBui','y0jdzgS','mJu1lde','uMP1AhK','z2fTzq','DhrLCG','u1PuvuO','DcbPDca','u2T3Dwy','CZPUB24','zw5LBwK','DgvZia','Aw1Lr2e','u2XJB1G','zNKTy28','zxrL','WO/cLCkjWO7cIW','svvbsw0','Aw5Uzxi','sw5KzxG','CJOWo2i','tg9Hzgu','C2L0Aw8','qNvPBgq','jwnBC2e','ExrLCW','CMvTB3y','nNW0Fdm','WPdcJmkkWORcKa','zxiIlci','BNq6mte','mJu1lc4','yNnZD0i','lxjHzgK','DdPZDge','WPhcKCkjWPhcKG','Dgfewhy','Bg9HDhm','y0LgCLm','rgfQzMO','uhjPB0y','Dc1ZAxO','v1v4u20','icaGica','nZH2AdS','igjSB2m','EwLlsKC','oY13zwi','tg9VAYS','r0DtALG','CMuG','Axr5','zMn1sfu','WPpcICkvWPlcKa','z2v0','ihjLy28','vufruNC','ihvUAxq','oJi1ChG','Bgu9iMi','DfDPzhq','lwe9iMy','sgvHCca','y2vUDgu','v2vhv3q','BMvS','nZu7Bwe','y0rltfG','AuzstxK','ksWGC28','pc9ZBwe','DxnLtg8','Be5qu2W','vKXUD3e','ys1ZDW','D2f0y2G','Dw5Kzwy','y2GUC3K','z2fWoJe','BgLKihi','WPpcI8kmWO7cIq','yKjoDwO','iJ5tCgu','WPxcImktWOFcIq','ru5ept0','zKrpDfK','sgvPz2G','icaHia','lwnOzwm','AvPcu2m','WOZcJCkvWONcIG','vNfmqLm','BgrPBMC','Ag9VA1a','BwLUkdu','BgLZDa','rfnOzwm','C3CYlxm','CvnRshi','ChjKAMW','phn2zYa','zxiGCMu','oJeYChG','BM9ZCge','sNjyrKO','zYbPBNq','lK1Vzhu','Ec13Awq','sLPZsgu','B3i6CMC','yxjLig4','CKn5zKG','AgvHBhq','AxqTC2m','yxbZAg8','mJu1ldi','s3vwuKC','Bgf5oM4','WOVcImktWOJcKq','zfryAKm','uLmG','CKnVDw4','o2zSzxG','ruzmq0K','lwTD','WO/cJCkgWONcJq','z3vlwxm','DfjKwuS','EwXLpsi','v1rrv04','De5Vwhe','yxbP','mNm7Fq','BNrezwy','WPpcK8knWO7cIW','phbHDgG','D1f3r1G','ywqU','yMTPDc0','ywrKCMu','sev5Cui','ywjSzsa','uLfkD0C','WONcImkrWPdcIG','svzAufi','B2jM','z2LUoJa','lNnRlw4','zgf0ys0','yMX5lum','iNnWiIa','rujgsgS','ChGGC28','vvDnBgy','BgvUz3q','DgL2zxS','C2STBwi','lwfWCgu','Fdr8mNW','mhGXqWO','pJiUmhG','yxvSDa','ug5vzwC','zvbSDwC','AhPNwxe','nYWUmty','yxDQr2W','tg11yxa','Aw4TD2K','CMvMCW','ChG7Agu','WO/cI8kiWOFcHG','Dg9YqwW','CgvKigi','CYb1BNi','CMqTDgK','ign5psi','t3vyvKm','yxHgzeO','B2TZihi','BfjMEMm','v2fSAYa','Dxr0B24','mtbWEdS','tgPzu3G','DcbTyxq','zxiTCMe','DxjJzq','yxmGzMK','oJe7Dhi','y29TyMe','BM8TBwu','CgfYzw4','Bgu9iM0','C3LUyW','y3rPB24','zsbNyw0','EfvQufu','BhHtueu','sxrACNC','cMHVB2S','yK1KCMK','C25HChm','vxH3s28','C29SAwq','psjYB3u','WPlcImklWPxcIq','A21wqMu','DcbKyxq','qw9ID08','vKrfzvC','vMfSDwu','lM1UlwG','igzPzwW','uenNvwi','C2fRDxi','ywXSoMK','D3PcCNm','DfzZqMy','q2v0Dhm','oM5VBMu','q1zdDMS','mJKWChG','zM9UDc0','ywn0','zhrOoJi','wM9NtNy','u0vhrwy','BMHSAxe','zgf0zsa','AgvHza','WORcKSksWORcKW','BvfQAvK','rxPxqKm','vgHSA1i','vvnsDMO','vw5PDhK','B3CGkey','WO3cKCkoWORcIG','iIbZDgu','ifbpuLq','B24+','ig1PBJ0','zMXVyxq','EdSIpNy','C3vI','ztT3Awq','mZu1odaWndbjBev2Euq','ywrWvhC','D29Yzc0','vKvsu0K','ENPgBhy','Bwv0ywq','mtjWEc8','WORcImksWPxcLa','pJWVzgK','CgvYBw8','BfvtENC','DhjHBNm','zJDLzwy','C2L6zq','zxj0Eq','sLv6yLy','zgf0yxm','WOVcJ8kjWPpcLa','iIbZDhi','zvbYB3a','C2STCMe','r2v0Dgu','wxjWDLi','Cg9ZDe0','wMHNEwG','ALbMsvq','A01OvNG','BwuGlsa','WOZcK8krWORcIq','iJ5VCgu','q2fTzxi','zM92u2e','DgLkq1K','EI1PBMq','AxnmB2m','WOZcJSkvWOJcJG','lNnRlxm','sKzqsLm','yNL0zxm','yNrWu0O','EvjTve0','mxWXmNW','ChG7Cge','yNzYyKu','zZOXmha','DfLUDK0','t0SGt1y','mhGYoca','lxnPEMu','WOBcJ8kvWPlcKG','DgfIBgu','zw1LBNq','yM9KEq','zhrOoJG','BLzPzxC','rfzXr0i','Aw5KB3C','WO/cHSkqWPtcIq','DfHNuKq','v05HEuK','B250lwy','A2v5vxm','DciGC3q','DKfUug0','lNnRlwm','y2X1C3q','nhW4Fdi','lg1VBM8','DvzgDfy','Awr0AdO','BMfSv2e','whLZCxK','rvnqig8','ywDVvMG','qvjWsLO','DxnPyMW','icbOB28','Dgv4Dge','ic4Znxm','C3bHCMu','lcbUBYa','DxnNtgi','q3DvveK','zvLsze0','Bw91C2u','C3mGmhG','WOFcKSkiWOJcJa','igfUzca','sKDwD3y','lwzPCNm','ocWYndi','s2r2Cu4','B25jtu0','vvHOzKq','ChG7Bwe','yMfS','vhP5y0W','wfLyDNy','surZA3u','oI40o30','B250lxm','u2HHCNa','oMXPBMu','ig9MzNm','BwuGD2u','y01WyLa','AxrJAa','C0vOqNy','vgfYuhO','C2Pfufu','tg16zuK','z2LZDgu','CMfTzsa','EdTIB3i','zdP0CMe','Bhzxsgm','Aw9U','AgfIBgu','AwvSzca','ihvUyxy','qMfYuu0','CcbHBMq','BJOG','rgLHz24','AguGC2K','BM8GD2e','BgvZ','shzgExC','tg9VAW','C3bSyxK','twXOsfm','mZyYmtmXmev6zMLisa','WPtcKmkuWOZcLa','DNvQEwe','BIbPzNi','BMq6Dhi','seHeCKe','ChvZAa','Bg9JywW','ndGZnJq','EfHTsfC','idaGyxu','owqPida','WOBcLCkvWPhcIq','igjVDgG','B24GDgG','ChG7B3a','nsWUmdG','t0Hsz28','lM1Ulwm','u09Ks2G','Bw4TDg8','Dc5wywW','WOZcJ8kgWPxcLa','CfH4Exa','swPlDg4','yNvMzMu','zw4Gyw4','ifnxlva','mNm7Cg8','D2fYBMK','ztOXms4','y256uuO','vgHHDca','q0nht2S','WPpcI8kuWPtcLa','CMfUz2u','zZO0ChG','CI5KBgW','o2fSAwC','tMLWDhe','DgHPBMC','oti0nZKWmMvMq2j4rG','CMfUy2u','BezjC1K','zZO2ChG','ks4G','B0rtr1O','B246ywi','WOZcKmkhWOZcHG','icHNDwu','D2HPDgu','C3zNiIa','CMvMDxm','C2L6ztO','zvjdwfG','zxrVBG','oJeXChG','Ag92zxi','A2L0lwe','AKfNCK8','CgLUzYa','yxjLzca','EIaTihC','ihbYB3y','x19hzw4','ohb4o2G','zMrgBhK','qKrizK4','cKLUC2u','yw5JztO','D2fYBG','FdH8mNW','zMy8l2i','ywnLlwK','idqGnc4','svjMqLu','CI5QCYa','B3rbEeG','tMfTzq','nIWUotu','DYbNBg8','tfHMDMC','uMvSB2e','AxrLBxm','EsbHigq','svzficG','Dvvdue8','zdTTyxi','WPpcHSkiWO7cKa','zuvSzw0','igXPA2u','y29Uy2e','AwrLCG','rMLLBgq','E29Wywm','Aej6yK8','sxLmwwW','CMeTBwu','WPhcI8kjWPtcKG','sMDPDvO','BM93','WPdcImkpWONcIG','twziEve','Ag90','zgHrwLy','CM1VBMS','B25LoW','WONcLCksWPdcHG','tMv0D28','vwHfugy','CMfUzg8','i2zMzdq','zKLxvvy','v01qtK8','rxHWB3i','B3rO','zwn0zwq','AxmGBM8','kdi1nsW','zxjHDgu','BIb0Agu','yxjTAw4','EdTOzwK','ysGYndy','C3qY','mtiGmJe','nIa2Bde','sur4zxe','vNfYtuy','DxjPBMC','BhvLpsi','ic0+ia','sgPNsKG','Ag9VA3m','mwzYksK','C0jtEem','ALvKrLG','DgG6BwK','uMvHC28','oNrYyw4','WOJcLmkoWO3cKW','tuPwrge','ihnPBMm','zM9UDa','zxqUia','D2H5','EK5Zs2e','yxmGBM8','AwzPzwq','zgvIDwC','AwqGCMC','A3mG','igvYCM8','tezyDey','ChG7zM8','u2vSzwm','s3fNBwi','WONcKCkgWORcKq','WO/cJmkgWO7cJW','s0Diy0O','te9mAuO','B1fgDfa','zxG7ywW','otbWEdS','z2jHkdi','zw50lwm','uIbbq1q','zxi7iJ4','oJe7BwK','icbJyw0','CYbYzwC','ChbrwK0','tgLZDa','zxnZywC','qM90Aca','B3vUzdO','ic40nxm','zwqGEwu','BxbACwi','Dxm6nNa','u3j4rwO','ywLSzwq','vvDnsYa','EdTMAwW','C3rLBMu','oJOTD2u','igLUC3q','CKvQANm','zxj7y28','EuvhAgG','v0XmBxK','u2vVzxG','ywL0Aw4','WONcISktWPdcLq','ltqTnY4','C2v0rMW','AufiDxq','nJq2o3a','BNnPDgK','vgXyyNu','DgGGB3i','CMvKihK','tePbvKy','ywX0','CMvKia','DMvYE2y','DwLSzci','BNuTCM8','uxzouMO','B2TbBMC','EgvZlIa','AxbyBxq','igHVB2S','zxaGDgG','u1v3EKO','EwHszLG','zNnyv2O','B3v0idK','BMDZ','iIbMAwW','y29Kzq','ig9IAMu','qwHIu0K','z2H0oJy','s2noB3q','BgLUzvC','zgf0zxm','o21PBI0','zMXLEc0','ohb4ksK','svzhreu','A2v5CW','sgvHCa','y2fWDhu','zw50','CMeTzxm','WOZcH8kvWPpcIW','ndC0odm','ENj6vMK','yZKIpNC','igP1Bxa','qxbWBgK','Aw50E2q','CgL0y2G','BgvMDa','Cg9ZAxq','rvnqigi','Aw1WBge','vMXlq00','BNq6Aw4','CMfTzs4','Cc1SzW','Bw5nzgy','oJaGmta','weXRy28','CMv7zM8','CNPyBNm','Bwf4','ywSTD28','qxjUv24','A2vKihu','AhPHreK','CM9SBgi','Bg93oMe','igLZig4','WPxcISkmWO/cLa','u0zMAwu','zw1WDhK','B2SGEwu','u25HChm','AxjZDca','uKvJvxy','BMq7Fq','ChqRmhG','WOZcJ8kmWORcKq','lwjVDhq','zM9Sza','l2nHBNy','BM9Uzq','ywrKAw4','WPdcKCkjWOBcKq','DNbLtuu','DNjtD0K','Bwf4lwG','nNb4o2i','vxHPAu4','WOBcJSkhWONcIG','Dhm6yxu','txvSDgK','CI1Yywq','WPlcKCkuWO3cKW','r1bxrxm','CgfYC2u','ywjZ','D3jHCdS','WOFcJCkvWO3cHW','mca0ChG','EfzfwxO','nNb4o2G','BwLU','x2DHBwu','jsKGmta','D2vUA3O','D3jPDgu','xxTIywm','lNnRlwi','mhGXoa','CMTqBge','A2vKpsi','DxjHvge','ihbHDgm','mhHLoa','CgvZia','BMv2zxi','B2DMCLq','Bw4TCge','zwH2yKC','qvHZv2W','rLbUzeO','igjVDhm','z2H0oJe','AwzYyw0','twT3y3C','EtOUndu','zxiTC2u','mhb4oYi','txf6tum','z2fTzvm','BLr5Cgu','EMnKy20','zwq6ia','Bgf0zvK','yJLKo2i','AejsveW','zsbUzxy','wwHmsvq','tNfJz1i','C3bHBG','CMuGAwC','yNvPBhq','zsGP','q3rfBuu','rJyGywW','AwDPBMe','Dcb0Agu','ELrHr0y','Bw47Fq','y2XHC3m','z3jHyG','yw5KicS','Aw50BYa','B3bytKy','BhzLr2e','Dg9ju08','DgHLige','WONcISkgWPlcIq','CNDQBw8','uejpsuS','BgfZlg0','Bg9YoIm','mxWWFdy','zw50rwW','DxqGEw8','ztPWCMu','DgfYDdS','zYbxzwi','oJyYDMG','quLPww4','DcGJzMy','wvbYqLK','DdO3mda','CgT0wwm','CgX1z2K','o21HEc0','r3jQvLq','zgLMzG','WO/cJmkgWOFcJG','Efv2A1e','B2r5','D2fSA2K','ntuSmJu','revgvMe','FdeXFdK','D0rqvgC','iIbZDhK','CePPr2i','WORcISkqWOJcJa','Bfz6BKS','WOVcH8kpWO3cJW','Dw1UCZO','qMLUzgK','yxbWzxi','WO3cKCksWPpcIa','u2vZC2K','r3DJz2q','lxnOywq','owqIihm','WOBcH8ktWOJcJW','ig9Uia','WOJcKCkvWORcHW','A2vLCa','AhH0z0e','AhHqyuK','x19WCeW','BgfZDfC','ztTWywq','z05QDgK','yxiTz3i','BgvMDdO','zsGPlMu','Aw5N','ihn0yxK','psjWywq','DMLLD0G','AwDUlwK','BMq6CMC','whLfCLK','teHcEw4','z21mwem','igzHA2u','reTPuvu','yuzYB20','BvvKDMy','rviGvvC','ufa+pIa','idaGmJq','lgnHBgm','BMqU','DgvZDa','nsWYntu','zgrPBMC','B21MvNK','z24TAxq','o3bHzgq','WOFcLCkpWO3cJG','rfLUDxa','swLTyMO','sK9cuMK','B2TLlwW','uwHUuee','y3rZimk3','B24GAwq','DMvYzMW','E2zVBNq','BwvHBNm','C2DMvNm','Dw5PDhK','BMC+','qvjItfu','AxvZoJK','nduPo2i','BIaUC2S','BhTWB3m','oJfWEca','icbTzw0','WOJcICkpWPhcLa','WOFcH8kjWPlcJq','A2v5q28','WOFcJSkjWO7cKq','WONcHSkuWPlcKG','C3zNpG','Cvnyywy','WO7cJ8kmWOJcHG','mhGXna','BK1NDLa','BNrLEhq','Dgv4Dem','AgfZtw8','whzNCfy','yMXZBhO','EY13zwi','ChjLDMu','rgPwDNC','CM9Tihm','rgnLuNi','ywqGzMe','CNmP','z2v0vwK','DwvxCMe','zhvSzq','tNrbuKG','CMvMAxG','uMvZzxq','BwuUy3i','C0ffDhK','CgPowfi','AejAv0W','u2nPDM8','rhDuyNO','A1rUwKC','zKvTCLO','CM9Wlwy','WPlcI8ktWOVcKG','AdO5nNa','CMvJDgK','WO7cJmkqWORcJa','vMX5uwO','BgvHCG','C29csM4','zxnWyxC','zMzZzxq','DxjH','B3r0B20','zNvUy3q','vgv5yuK','Ehnjq1C','yxrHihi','EcaXmNa','B2f0nJq','BMqGEwe','CMq7zM8','mhGYoa','nYWYmsW','tM90igq','ic0GDgG','zxjOCu8','qxzmvw8','C3CYlwy','CMvWB3i','yxqG','CMnLoIa','lcbZDgu','zvLOshu','B3DUkq','CMeTCgu','zsbHCha','lxrPDgW','sgLYDwq','uKLxtva','Dg8Gy2W','WPxcKmktWPpcIG','zgTPDa','rfHxzMe','sYbZy3i','yxjKE2i','yKXiBM0','CYbLBMu','nwmWidm','CMvHzhm','venbAxi','mIiGC3q','z0TiquG','B3vUzcW','CMf3qG','lwv2zw4','r2fTzq','WPtcJCkrWPhcKa','WOBcHSkmWPtcIW','sxbLt0y','C2vSzwm','Dwj7zM8','o2jVEc0','B24Gzge','CMvK','mcaXChG','wgLsEgC','WO/cImkpWONcIq','EdTVDMu','D2LKDgG','AxrZ','q29UC28','AgvSBg8','z2LMEq','v2LKDgG','C1HMEgO','mhGYna','AxjLuhi','C3rVCfa','yxjT','wxbHEeC','te1jree','BMfSrNu','uhjXCw8','ic8G','DgG9iJe','DhDLzNm','icb3CMK','whHbzKW','mtzwB1jzww0','yxbWBhK','Bg9Zzsa','zYbIBgK','idaGlYa','B0XMDhi','vujQDey','n2e2ntG','WOVcICksWONcIW','lwnHCMq','kdiXlde','WOBcISkvWPtcJG','CMvHy2G','Bs11AsW','oJaGmca','lxGIihm','ic0GCNu','zsbPBNm','kgD1zxm','tfbzz2O','uufzAuq','pgj1Dhq','DZiTyM8','r0jwEwi','ztT0CMe','qxf4sM4','ENrKEK4','pc9ZDhi','C2STBM8','yxjKlM8','sg9VA3m','y3nZvgu','WO3cLCkiWPlcJa','BgXxyxi','y3H6AwC','zgLUzZO','xtO6ywy','q2HPBgq','iMjHy2S','t2zZu1e','zxzLBNq','zw50o2i','CMvUDca','Dcb3yxm','ugHVDg8','DMC+','AfnJCMK','uMvZB2W','vMDwAeK','CvP4rKS','BK11rwq','vgXKvNK','oMnLBNq','yMvNAw4','ihbHz2u','qMvHCMK','uwDSEw8','BMuGAg8','tgHyzeq','oJnWEdS','WPxcH8kjWOZcJG','CYXTB24','Evfiv0C','A1zfB3G','z1fhrwC','oJrWEdS','zM92','z2v0rMW','B2DVE2q','B25TB3u','yNv0Dg8','B3rYB2W','yMfJA2q','Cxr1AeS','BK1HBMe','AgfKB3C','DhKGAw4','o292zxi','WO7cI8koWPhcJa','mNb4idG','WOZcISkgWPdcHW','ztSTD2u','iNn3mI0','mduPo30','lwXPBMu','BM90ig0','yMeOmJu','Aw5Qzwm','BNrPyxq','r3zht0e','y0fPthy','q3DbDMu','Bxm6y2u','mhGYma','Buv1ywu','y3jLyxq','yMnrDNu','ig5VDca','s0LnwKW','zJzIowq','zJu7yM8','q2zjuLi','DgfYz2u','zw50zxi','C28GDgG','mtaSmte','B25PBNa','zgLMzMu','vgHLigG','DMvYC2K','ihn0EwW','rNr2y2m','CMqTAgu','zgLZCgW','qMTqtfG','v3LzBxq','B2zMC2u','DMLZDwe','oYi+','yxGTAgu','E3bVC2K','EMnoz3m','DgHLigC','CdO0ChG','ihjLCg8','ExDoEu4','B25NlG','y21K','zunOAwW','yY0XlJu','AwnOlJW','zxrOAw4','pgiGC3q','zxiGyM8','Ate2','zwDPC3q','zw1Pzxm','tK10wNi','sw9Lrem','thzvsLe','zgvYlxi','lJC1ktS','oMLUAgu','B3vUDa','z2uUrgu','m0fezKTIvW','y2XAD1a','yxjHBxm','ignVBNm','r0niuMK','u2vLBK0','zxG6mJe','CffNsgW','rvrVt2q','keLUC2u','zsXdB24','ChG7yM8','CerOtKK','WPhcK8krWO/cJa','mdCSmtu','Aw1VrhO','r0HeAhu','qvbvoca','WPtcI8kgWORcJG','zxCGy2e','t1n1s1G','CMvNAxm','tgTNyLG','CgXPzxm','qKz6t24','AgLxB0m','yMXLig4','AxHLzdS','igLZihi','sxz3A2G','ys1LC3a','nZyZodu3CNz4rMjx','B25JBgK','WOBcLCklWOBcKq','Bw4TC3u','qxrbCM0','DezPuKq','o2jVCMq','AhbvBu8','zvn0EwW','ihDHCYa','qM1JAhi','q3bSzha','y2TNCM8','yM90q28','BMDL','zwqGB2y','DM9Pza','Dw1IE2i','rfLmvK4','ztPUB24','t29uz0q','uuvSANa','uNb0y2u','Aw5PDgu','DdPTAw4','WO/cK8kgWOVcJG','CJOXChG','lIbeAxm','oYi+u3a','rKfXEgG','psjTBI0','D3jHCdO','BI5OB28','zw5LBxK','sevbufu','EvjVD3m','swrnqKG','zwXLy3q','BMTLEsa','svDpCge','DxnLCI0','oJrWEca','yKLXtwq','CwrOwvy','y0fwCKK','tg9VAYa','WORcH8ksWPxcHG','swvNs1y','re9nq28','igfYBwK','t2Xhsw0','WPdcICkpWO7cKW','B2XVCJO','AwXLzcW','ChGVms4','i2zMzJa','AKnjBNi','rxLIq2O','mdT0B3a','WOBcISkoWOVcIa','rxjQvgG','uND2z0i','iZe1mgm','suHyz3K','WONcKmkhWOBcHW','WO7cK8kpWO3cIa','zvLVt0i','Cg9YDge','EtPNCMK','zgL1CZO','mhHIna','EKzXA1e','yNPmuMq','AwP5yKS','AgvHCei','B2jMsq','yxrnCW','nsWUmdi','AgvPz2G','WO7cKSkqWOJcKq','CMvSyxq','iZDLzta','ig9Uy2u','lJa0ktS','v0frsuS','u2v0tg8','BY1MAwW','BMCGlYa','rKX0rwC','BJWVyNu','z2H0oJm','x19tquS','yLnlt0K','WOVcJmkhWO3cLq','CMrVtva','nJaWo20','EgzeyuO','idGWChG','CMrLCJO','y2uSihm','qxnZzw0','nIKSAw4','zxi7z2e','Bg9VA3m','swT2wfO','rvrHwui','lde3nYW','nIiGC3q','AgvHCfu','z2DruKi','mhHKna','WO/cLCkqWOFcJq','uMLZC0O','zfHvrgq','A1n5BMm','WOBcKmkgWOZcKa','Aw9UoMW','idqTnc4','Au1ywva','lJi1ktS','zxi7zM8','ywLUE2y','twH3Ae8','rgXLDha','zxjZyc4','msiGDMe','B3bHy2K','CMf3wwe','AwX0zxi','DMLLD0i','DMD7D2K','DxrVo3O','icbVzMy','AgLKpq','C2Xru2S','wNHhtMi','Cff3uee','ldi1nsW','Cgu9iNi','icaGDMe','oNjNyMe','yxK6z3i','C2LUz2W','CIaO','WPtcJCkhWOFcIG','DvDKA3C','DxjHpc8','teLPDvi','Bw92zvq','C2v0Dgu','o3DVCMq','vvDUzNa','vffiswy','DMfSDwu'];_0x24cc=function(){return _0x5e5ce3;};return _0x24cc();}
