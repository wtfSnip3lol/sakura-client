// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.9.1
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

function _0x1a9a(_0x4372c3,_0x12f603){_0x4372c3=_0x4372c3-(-0x61e*-0x1+0xa7c+-0xf72);var _0x4d2a9f=_0x3c15();var _0x1a1a10=_0x4d2a9f[_0x4372c3];if(_0x1a9a['SYpFbr']===undefined){var _0x2e8231=function(_0x153427){var _0x50793b='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x3fc371='',_0x15c99f='';for(var _0x3894f4=-0x18e*0x4+0x3*-0xb67+0x286d,_0x210ae0,_0x3d22fc,_0x3c17c5=0x3ac+-0x3*0xbe9+0x11b*0x1d;_0x3d22fc=_0x153427['charAt'](_0x3c17c5++);~_0x3d22fc&&(_0x210ae0=_0x3894f4%(0x15b4+-0x10f+0x1*-0x14a1)?_0x210ae0*(-0x13a6+0x2f1+-0x5a7*-0x3)+_0x3d22fc:_0x3d22fc,_0x3894f4++%(-0x177c+0x5*-0x88+0x117*0x18))?_0x3fc371+=String['fromCharCode'](-0x23e3*0x1+0x14d6+0x100c&_0x210ae0>>(-(0x1*0x22ed+-0x21c4+-0x127)*_0x3894f4&0x293*0x9+-0xfb*0xa+-0x1*0xd57)):0x19df+0x17c9*0x1+0xe3*-0x38){_0x3d22fc=_0x50793b['indexOf'](_0x3d22fc);}for(var _0x6ed42b=-0xc0b*-0x3+0x26de+0x4aff*-0x1,_0x218f01=_0x3fc371['length'];_0x6ed42b<_0x218f01;_0x6ed42b++){_0x15c99f+='%'+('00'+_0x3fc371['charCodeAt'](_0x6ed42b)['toString'](-0x2259+-0x212d+0x4396))['slice'](-(-0x2172+-0x78c+0x20*0x148));}return decodeURIComponent(_0x15c99f);};_0x1a9a['trwTcG']=_0x2e8231,_0x1a9a['UlSZrP']={},_0x1a9a['SYpFbr']=!![];}var _0x1ec9ed=_0x4d2a9f[0x256d+-0x1190+-0x13dd],_0x291dd5=_0x4372c3+_0x1ec9ed,_0x31f348=_0x1a9a['UlSZrP'][_0x291dd5];return!_0x31f348?(_0x1a1a10=_0x1a9a['trwTcG'](_0x1a1a10),_0x1a9a['UlSZrP'][_0x291dd5]=_0x1a1a10):_0x1a1a10=_0x31f348,_0x1a1a10;}(function(_0x3e611e,_0x57591c){var _0xececb4=_0x1a9a,_0x31b6e2=_0x3e611e();while(!![]){try{var _0x3eb86c=parseInt(_0xececb4(0xa41))/(-0x33*-0xae+-0xc1*-0x29+-0x4192)*(parseInt(_0xececb4(0x773))/(0x10aa+-0x28*0x82+0x3a8))+-parseInt(_0xececb4(0x5e6))/(-0x154b+0x1ae6+-0x598)*(-parseInt(_0xececb4(0x3e0))/(-0x691*-0x4+-0x450+-0x15f0))+-parseInt(_0xececb4(0xb63))/(0x1b9c+-0x1aa5+-0xb*0x16)*(parseInt(_0xececb4(0x28f))/(-0x2475+-0x189e+0x3d19))+parseInt(_0xececb4(0x1bf))/(0x1*0x11f+-0xd47+0xc2f)+-parseInt(_0xececb4(0x702))/(0x23f5+-0x21ed+-0x80*0x4)+parseInt(_0xececb4(0x2bb))/(0x1352+-0x2*-0x1259+-0x119*0x33)*(parseInt(_0xececb4(0x60e))/(0xb0a*0x3+0x1778*-0x1+-0x99c))+parseInt(_0xececb4(0xa7a))/(-0x1a5d+0x1886+0x1e2*0x1)*(-parseInt(_0xececb4(0x8c2))/(0x2665*0x1+0x97d+0x17eb*-0x2));if(_0x3eb86c===_0x57591c)break;else _0x31b6e2['push'](_0x31b6e2['shift']());}catch(_0xf9eab2){_0x31b6e2['push'](_0x31b6e2['shift']());}}}(_0x3c15,-0x24216+0x1*-0x4084+0x95180),((()=>{'use strict';var _0x363400=_0x1a9a,_0x4f1f8a={'QTHLF':_0x363400(0x12d)+'|3|6|'+'2|5','JIzbL':function(_0x5e88f5,_0x3047b5){return _0x5e88f5!==_0x3047b5;},'fBHhA':_0x363400(0x16c),'HfHkp':'ifram'+'e','nPPaH':function(_0x396b6b,_0x4194e6){return _0x396b6b===_0x4194e6;},'wxGhr':'QeLug','EbALl':function(_0x429088,_0x234314){return _0x429088+_0x234314;},'ZFmHo':_0x363400(0x908)+'ss\x200x','CUlXu':function(_0x48891d,_0x54fa49){return _0x48891d+_0x54fa49;},'baiMW':'\x20past'+_0x363400(0x4c0)+_0x363400(0x63a)+'0x','PJiBj':_0x363400(0x1cb)+_0x363400(0x8c4),'UnduR':function(_0x4edabf,_0x5e0c9d){return _0x4edabf===_0x5e0c9d;},'ICXJe':function(_0x3f4245,_0x5df48c){return _0x3f4245(_0x5df48c);},'IbVkH':function(_0xdb9a88){return _0xdb9a88();},'SLprz':function(_0x3d8526,_0x1c36e9){return _0x3d8526+_0x1c36e9;},'Fdajf':'VzgnX','xhNXn':'sakur'+_0x363400(0xb69)+'v2-ta'+'b','IZykr':function(_0x57b587,_0x4736af){return _0x57b587&&_0x4736af;},'Lsjao':'div','kUFHN':function(_0x33eeee,_0x5695e){return _0x33eeee+_0x5695e;},'uPZfk':function(_0x5762e7,_0x4c5351){return _0x5762e7+_0x4c5351;},'RdaUb':'backg'+'round'+':rgba'+'(21,1'+_0x363400(0x706)+'.9);b'+_0x363400(0xb59)+_0x363400(0x1c7)+_0x363400(0x72a)+_0x363400(0x9f6)+_0x363400(0x5e9)+'143,1'+_0x363400(0x149)+_0x363400(0x146)+_0x363400(0x7e8),'vtMhd':'borde'+'r-rad'+_0x363400(0x9e2)+'99px;'+_0x363400(0xa2c)+_0x363400(0x3f5)+_0x363400(0x791)+_0x363400(0x595)+'t:11p'+_0x363400(0x2d5)+'\x20ui-m'+_0x363400(0x1e5)+_0x363400(0x41b)+_0x363400(0x6ee)+'as,mo'+_0x363400(0x2b9)+'ce;','dXPoQ':function(_0x184eda){return _0x184eda();},'djmIe':_0x363400(0x1cb)+_0x363400(0xb69)+'v2','WBIzo':_0x363400(0x1cb)+'a-sw-'+'v2-cs'+'s','muUgi':function(_0xbf88e8,_0xfc97ea){return _0xbf88e8!==_0xfc97ea;},'QHdvL':_0x363400(0x3dd),'AcGnC':'vZiwZ','UmzHD':_0x363400(0x390)+':','qYuXY':_0x363400(0x305),'dEjdB':'rgba('+_0x363400(0x256)+_0x363400(0x8e6)+'9)','GCwFt':function(_0x340f60,_0x1c2d38){return _0x340f60===_0x1c2d38;},'TwskB':'bwPNx','afvZB':'Speed'+'\x20ON','HgFTW':_0x363400(0x456)+_0x363400(0x2fa),'ctLQK':'#2a0f'+'1b','sPDgR':function(_0x4c3b0c,_0xbc11a7){return _0x4c3b0c===_0xbc11a7;},'eAJqI':function(_0xdd0241,_0x4ecbcb){return _0xdd0241!==_0x4ecbcb;},'qkWfO':_0x363400(0x835)+_0x363400(0x481)+'4|1','PPkOK':function(_0x337688,_0x30a6b8){return _0x337688+_0x30a6b8;},'SaVdM':'The\x20g'+_0x363400(0xa9c)+_0x363400(0x68f)+_0x363400(0x8ac)+_0x363400(0x73b)+'ed\x20a\x20'+'singl'+'e\x20rep'+_0x363400(0xb0f)+'\x0a','ePmDP':_0x363400(0x665)+_0x363400(0xa3b)+'\x20prov'+'es\x20th'+'e\x20use'+'rscri'+_0x363400(0x43a)+'\x20inst'+'alled'+_0x363400(0xb0a)+'runni'+'ng\x20on'+'\x20the\x20'+'porta'+_0x363400(0x6a2),'JeJHf':_0x363400(0x743)+'Both\x20'+_0x363400(0x1cb)+'a.ski'+'llwar'+_0x363400(0x12f)+'r.js\x20'+'AND\x20t'+'he\x20ol'+_0x363400(0x716)+_0x363400(0x59c)+_0x363400(0x956)+_0x363400(0x3ed),'msqPX':_0x363400(0x78a)+_0x363400(0x95a)+'lled\x20'+_0x363400(0x7af)+_0x363400(0x400)+_0x363400(0x5b8)+_0x363400(0x433)+'\x20both'+_0x363400(0x522)+'h\x20Web'+_0x363400(0x2c0)+_0x363400(0x75e)+'nstan'+_0x363400(0x99a)+'.\x0a\x0a','nKCFV':function(_0xf2ca95,_0xc07a98,_0x559d57){return _0xf2ca95(_0xc07a98,_0x559d57);},'UPgTO':_0x363400(0x859),'bUTWn':_0x363400(0x851)+_0x363400(0x18e),'MSjKh':function(_0x31295b,_0x53733a){return _0x31295b===_0x53733a;},'gIWkg':_0x363400(0xa13)+'74','brcdn':_0x363400(0x16a),'WsDkr':'CMKMS','GvSYu':_0x363400(0x3a7)+_0x363400(0x631),'zbTlM':'KkePa','OxrUy':_0x363400(0xb2b),'wyAue':'UjimJ','jeoEC':function(_0x3caf5a,_0x46dfbc){return _0x3caf5a+_0x46dfbc;},'CXhcp':function(_0x161596,_0x16a328){return _0x161596+_0x16a328;},'gyQeq':function(_0x410a69,_0x2819c3){return _0x410a69+_0x2819c3;},'gKgBa':function(_0x32928d,_0x2b9dc1){return _0x32928d+_0x2b9dc1;},'Ygnlz':function(_0x2a915b,_0x3ce75b){return _0x2a915b+_0x3ce75b;},'RaNEw':function(_0x2b723d,_0x4fa576){return _0x2b723d+_0x4fa576;},'DSfvv':function(_0x2d0548,_0xac04e1){return _0x2d0548+_0xac04e1;},'aCbjz':_0x363400(0xad4)+_0x363400(0x71c)+_0x363400(0x238)+'lwarz'+'</b>','vsIFb':'<div\x20'+'id=\x22s'+_0x363400(0x9b2)+_0x363400(0x2a5)+'tyle='+'\x22disp'+_0x363400(0x819)+'one;\x22'+'>','XSPIY':_0x363400(0x59b),'cHMvl':_0x363400(0xa7d)+_0x363400(0x58e)+_0x363400(0x8b1)+_0x363400(0x204)+_0x363400(0x4a4)+_0x363400(0xb3b)+_0x363400(0x30a)+_0x363400(0x2ec)+_0x363400(0x873)+_0x363400(0x3b0)+'n-wid'+_0x363400(0x620)+_0x363400(0x5eb)+'1.0x<'+'/span'+'>','KKFjy':'</div'+'>','KbDQd':'<pre\x20'+'id=\x22s'+_0x363400(0x9d4)+_0x363400(0x5d0)+'yle=\x22'+_0x363400(0x263)+'n:0;p'+'addin'+_0x363400(0x94b)+'x\x2012p'+_0x363400(0x2d1)+_0x363400(0x652)+':auto'+';flex'+_0x363400(0x499)+_0x363400(0x396)+'white'+'-spac'+'e:pre'+_0x363400(0xb4f)+';word'+_0x363400(0x540)+_0x363400(0x206)+'ak-wo'+'rd;fo'+'nt:in'+_0x363400(0x154)+';','zbtZv':'#sw2-'+_0x363400(0x8d7)+'s','agQvO':'#sw2-'+_0x363400(0x220),'cgzWI':'#sw2-'+_0x363400(0x4cb),'vTqsE':_0x363400(0x3d8)+'x','ZUSNe':_0x363400(0x3d8)+_0x363400(0x354)+'e','dXUle':_0x363400(0x3d8)+_0x363400(0x6b9),'htKSu':'#sw2-'+'hint','eNLsX':function(_0x157d97,_0x24d892){return _0x157d97===_0x24d892;},'mDeOQ':function(_0x48adf8,_0x4288b3){return _0x48adf8/_0x4288b3;},'uCXWG':function(_0xe97e5c,_0x53d3a2){return _0xe97e5c+_0x53d3a2;},'aDaby':'yes','UAQdj':'\x20\x20\x20ty'+_0x363400(0xaf8),'AJyhx':'hooks'+_0x363400(0x7df),'gVSPR':_0x363400(0xa30)+'ied','AoOIy':_0x363400(0x2b2)+'date\x20'+'ran\x20y'+'et,\x20o'+'r\x20the'+'\x20sign'+'ature'+'\x20did\x20'+_0x363400(0x192)+'atch.','SnPdx':function(_0x258eda,_0x37eb50){return _0x258eda!==_0x37eb50;},'JEidA':_0x363400(0x88c),'vcUdh':function(_0x307878,_0x53ac6f){return _0x307878<_0x53ac6f;},'iMjtE':function(_0x110637,_0x2c3bd1){return _0x110637+_0x2c3bd1;},'tKeFf':function(_0x570e7b,_0x13ea4a){return _0x570e7b-_0x13ea4a;},'sQMbq':_0x363400(0x484)+_0x363400(0x17a)+_0x363400(0x7a5)+_0x363400(0x78a)+_0x363400(0x9b9)+_0x363400(0x8e7)+_0x363400(0x78a)+_0x363400(0x78a)+'raw','xTPrR':function(_0x186921,_0x282ad5){return _0x186921<_0x282ad5;},'rCZZI':_0x363400(0x8e9),'uCYtL':function(_0x463175,_0x4065f0){return _0x463175*_0x4065f0;},'NAOUj':function(_0x5dc1b8,_0xa9fe1){return _0x5dc1b8(_0xa9fe1);},'kjlok':'\x20\x20!\x20','UEmBt':_0x363400(0x13a),'MflbI':_0x363400(0xa65)+'t','BmZOn':function(_0x258fb8){return _0x258fb8();},'vPzvX':function(_0x983b65,_0x4fea9d){return _0x983b65!==_0x4fea9d;},'IOUtg':'dfzHA','CjhiY':function(_0x154f5e,_0x2d90dd){return _0x154f5e!==_0x2d90dd;},'ReZOu':function(_0xf1600e,_0x222872){return _0xf1600e===_0x222872;},'hSEiT':_0x363400(0x703),'taJxO':function(_0x31ce97,_0x4c4ee6,_0x56bfaf){return _0x31ce97(_0x4c4ee6,_0x56bfaf);},'lQAHL':'ZzqDH','xGQfp':_0x363400(0x283)+_0x363400(0x398),'YcsmG':function(_0x4a2909,_0x40c572){return _0x4a2909===_0x40c572;},'bzlzB':function(_0x971567,_0x1fc37e){return _0x971567<_0x1fc37e;},'qpGCF':_0x363400(0x564),'DmRlf':'warn','AwtDR':_0x363400(0x5c2),'MLkxQ':function(_0xff479f,_0x49a41c,_0x158c8e,_0x58f630){return _0xff479f(_0x49a41c,_0x158c8e,_0x58f630);},'ZUsuq':function(_0x4c6a6c,_0x42e735){return _0x4c6a6c===_0x42e735;},'HcmWc':function(_0x390afb,_0x3036df){return _0x390afb|_0x3036df;},'iDbhn':function(_0x4fda0e,_0x1cafcf){return _0x4fda0e&_0x1cafcf;},'Vgerm':function(_0x593e4e,_0x8242a8){return _0x593e4e+_0x8242a8;},'ctZJz':function(_0x29468c,_0x54dfa4){return _0x29468c^_0x54dfa4;},'TgOxk':function(_0x2ed969,_0x48ccae,_0x4c147f,_0xdea24d){return _0x2ed969(_0x48ccae,_0x4c147f,_0xdea24d);},'OWGOT':function(_0x239e8a,_0x15ec80){return _0x239e8a+_0x15ec80;},'RXtyL':function(_0x38af9f,_0x453528){return _0x38af9f===_0x453528;},'GLVhD':_0x363400(0x452),'kgugx':function(_0x37ff84,_0x1b8677){return _0x37ff84+_0x1b8677;},'TNScW':function(_0x55b1d3,_0x2eb330){return _0x55b1d3+_0x2eb330;},'nBEFr':'FIJyD','LsugI':function(_0x31e897,_0x5d3d3d){return _0x31e897>_0x5d3d3d;},'XBdxQ':'undef'+'ined','QsWVn':'insta'+_0x363400(0x50b)+_0x363400(0x394)+_0x363400(0x403),'YsFJj':'TLqnG','pksrr':_0x363400(0xae0),'CocDr':function(_0x108d98){return _0x108d98();},'FvAJx':function(_0x1a9e95,_0xc60b52){return _0x1a9e95===_0xc60b52;},'UwtbL':_0x363400(0x4a5),'RRPLi':_0x363400(0x80e)+_0x363400(0x864)+_0x363400(0x642)+_0x363400(0x182)+_0x363400(0x8b9)+'e\x20not'+_0x363400(0x46b)+_0x363400(0x89e)+_0x363400(0x86b)+'Runti'+_0x363400(0x8d4)+_0x363400(0x438)+_0x363400(0x4c4)+')\x20or\x20'+_0x363400(0x287)+'indow'+_0x363400(0x3ce)+'al','sPEpL':'Runti'+_0x363400(0x8d4)+_0x363400(0x438)+'Game('+')','nrtKx':function(_0x5d8922,_0xedd52d){return _0x5d8922!==_0xedd52d;},'AapQM':'hello','QTbXe':'thSvk','YwoxJ':function(_0x1a5e08,_0x213ed9){return _0x1a5e08===_0x213ed9;},'zQrEV':function(_0x8966ca,_0x1a6beb){return _0x8966ca===_0x1a6beb;},'fUzjn':_0x363400(0x2bf),'GfCQz':_0x363400(0x4d3)+_0x363400(0x12e)+_0x363400(0x968),'McAZP':'bare\x20'+'game\x20'+_0x363400(0x414)+'ng','aoqYo':function(_0xc9e9a9,_0x589b05){return _0xc9e9a9<_0x589b05;},'lktlv':_0x363400(0xb56)+'t','MrYYU':_0x363400(0x4b7),'yCuPQ':function(_0x5245fb,_0x1b1616){return _0x5245fb+_0x1b1616;},'yDawo':function(_0x16e659,_0x10628b){return _0x16e659+_0x10628b;},'XCGlF':_0x363400(0x2b8),'ylsKz':_0x363400(0xb12),'WSszf':_0x363400(0x820),'JzIlU':function(_0xec054d,_0x1b14b0){return _0xec054d+_0x1b14b0;},'YYylb':function(_0x4526f5,_0x4088a1){return _0x4526f5&_0x4088a1;},'sIarN':'i32','VQdBz':_0x363400(0x584),'EQkGe':function(_0x5ca3c4,_0x2d063f){return _0x5ca3c4+_0x2d063f;},'dgptp':_0x363400(0x92d)+_0x363400(0x391)+'igina'+'lFunc'+'=','jAGJE':'\x20and\x20'+_0x363400(0x557)+'resol'+_0x363400(0x7c9),'VTtIV':'none','nuikn':_0x363400(0x347)+_0x363400(0x683)+_0x363400(0x1ac)+'ence\x20'+'exist'+_0x363400(0x811)+_0x363400(0x5a5)+_0x363400(0xa17)+_0x363400(0x304)+_0x363400(0x1ca)+'ble\x20n'+'ow.','iSIxb':function(_0x1be3c3,_0x33059b){return _0x1be3c3+_0x33059b;},'XbGXR':function(_0x589fef,_0x3bfbd0){return _0x589fef+_0x3bfbd0;},'loqxs':').\x20','KntKe':_0x363400(0x183)+_0x363400(0x17e)+_0x363400(0x32b)+'\x20bloc'+_0x363400(0x3f6)+_0x363400(0x42e)+'a\x20gam'+'e\x20obj'+_0x363400(0x641)+'ith\x20M'+'odule'+_0x363400(0x771)+_0x363400(0x9d2)+'\x20reac'+_0x363400(0x89e)+'.','CbVPg':function(_0x46766d,_0xc04e0){return _0x46766d<_0xc04e0;},'HqOET':function(_0x5b98bb,_0x10d085){return _0x5b98bb+_0x10d085;},'WfGJq':function(_0x397ce2,_0x4eba57){return _0x397ce2+_0x4eba57;},'jNXbq':_0x363400(0x893),'pdThm':_0x363400(0x7d8)+'s\x20wer'+_0x363400(0xa4f)+'n\x20SEE'+'N\x20by\x20'+'UWMK.'+_0x363400(0x962)+_0x363400(0x77b)+'\x20pass'+'\x20','PzVJS':function(_0x579dfc,_0x2e6053){return _0x579dfc+_0x2e6053;},'OMwOe':function(_0x1e5c70,_0x1987c2){return _0x1e5c70+_0x1987c2;},'gHUPf':_0x363400(0x199),'JoNHL':function(_0x4f33e7,_0x1f08d6){return _0x4f33e7<_0x1f08d6;},'QKnjR':_0x363400(0x218),'wlIAC':function(_0x45d484,_0x3492f3){return _0x45d484&_0x3492f3;},'gXnCa':'obfI','hvfem':function(_0x4b6b17,_0x131573){return _0x4b6b17===_0x131573;},'TCnZr':function(_0x978125,_0x426f50){return _0x978125|_0x426f50;},'qyIvh':function(_0x4ea399,_0x1a7ca4){return _0x4ea399!==_0x1a7ca4;},'gqzoT':'vNJCL','HWgDw':function(_0x40f33f,_0x53b3a0,_0xe9619){return _0x40f33f(_0x53b3a0,_0xe9619);},'cHNul':function(_0x52df6a,_0x26af8c){return _0x52df6a+_0x26af8c;},'rNRdz':function(_0x334cb6,_0x4327cc){return _0x334cb6+_0x4327cc;},'FVgwg':function(_0x25a49b,_0x2a3c12){return _0x25a49b+_0x2a3c12;},'vElFZ':function(_0x25b103,_0x56842f){return _0x25b103===_0x56842f;},'kwAnS':function(_0x4471ff,_0x178ead){return _0x4471ff+_0x178ead;},'kkytO':function(_0xdee075,_0x33a06b){return _0xdee075===_0x33a06b;},'fHQrE':function(_0x396bce,_0x201b5f){return _0x396bce^_0x201b5f;},'VQBpJ':function(_0x23eee0,_0x406614){return _0x23eee0!==_0x406614;},'GpUAN':function(_0x40e211,_0x50d736){return _0x40e211^_0x50d736;},'XsoIV':function(_0x4c8926,_0x113385,_0x42b6d9,_0x313e82){return _0x4c8926(_0x113385,_0x42b6d9,_0x313e82);},'xDFHz':function(_0x2f2c5e,_0x1bffee){return _0x2f2c5e(_0x1bffee);},'XsYaD':function(_0x2de04b,_0x10c9fe){return _0x2de04b|_0x10c9fe;},'GUaBV':function(_0x32fd09,_0x1a824e,_0xda43fd,_0x55d58f){return _0x32fd09(_0x1a824e,_0xda43fd,_0x55d58f);},'JtlTL':function(_0x261d5b,_0x4a74c3){return _0x261d5b+_0x4a74c3;},'rVwbo':function(_0x157184,_0x5d5aa7){return _0x157184+_0x5d5aa7;},'mDZdx':'kgpuV','wQClk':function(_0x1550b3,_0x1bb3a4){return _0x1550b3!==_0x1bb3a4;},'YGtnl':_0x363400(0x480)+'r','kGMLB':function(_0x19fb89,_0xd557b3){return _0x19fb89+_0xd557b3;},'BZdXK':function(_0x3c810e,_0x44894a){return _0x3c810e<_0x44894a;},'jgTXJ':function(_0x508f6b,_0x4ae097){return _0x508f6b-_0x4ae097;},'vQhPA':'YpgqA','BVdhf':'no\x20gr'+_0x363400(0x5b1)+'f\x20','VKvaD':function(_0xca573c,_0x828748){return _0xca573c>=_0x828748;},'Weyci':_0x363400(0x93d)+_0x363400(0x964),'Cukgw':function(_0x433579,_0x385740,_0x16559d,_0x50dd8d,_0x4e19eb){return _0x433579(_0x385740,_0x16559d,_0x50dd8d,_0x4e19eb);},'LqjKA':function(_0x342b23,_0x2ee343){return _0x342b23+_0x2ee343;},'dMtfr':'RpPsl','qgiFh':_0x363400(0x531)+'ntrol'+_0x363400(0x27d),'GBWic':function(_0x3a53b5,_0x3470a6){return _0x3a53b5!==_0x3470a6;},'kduab':_0x363400(0xb27),'GkojS':_0x363400(0x12c),'NEtpQ':_0x363400(0x5a2),'DvKis':function(_0x33f509,_0x39288e){return _0x33f509-_0x39288e;},'iCxnL':'Updat'+'e','YkQkC':function(_0xcec37d,_0x30be6b){return _0xcec37d+_0x30be6b;},'FTRtx':'dUgbl','VwFVw':function(_0x256c13,_0x5c0d4a){return _0x256c13/_0x5c0d4a;},'elWft':function(_0x5c7641,_0x361edd){return _0x5c7641===_0x361edd;},'BHTNM':'VpAnG','YNgSm':_0x363400(0x5cd)+_0x363400(0x4c7)+_0x363400(0x353),'kWosy':function(_0x5645bb,_0x24215f){return _0x5645bb+_0x24215f;},'cUyph':function(_0x17ce77,_0x5cc1c6){return _0x17ce77<_0x5cc1c6;},'pwfZv':function(_0x3d5eb0,_0x29bdb1){return _0x3d5eb0+_0x29bdb1;},'lvmCW':function(_0x3da750){return _0x3da750();},'evuTf':function(_0x3c5a72,_0x104bea){return _0x3c5a72===_0x104bea;},'ZlRbw':function(_0x1685ad,_0xd42561,_0x38de66){return _0x1685ad(_0xd42561,_0x38de66);},'jVOSC':function(_0x29ae73,_0x358e72){return _0x29ae73(_0x358e72);},'uZbAs':function(_0x7b04c9,_0x51ea05){return _0x7b04c9+_0x51ea05;},'PwNNn':_0x363400(0x265),'wzKOo':'JrfTA','GAZBk':function(_0x374321,_0x5a5d26){return _0x374321!==_0x5a5d26;},'gYXoC':function(_0x242a86,_0x38c7eb,_0x5e0d62){return _0x242a86(_0x38c7eb,_0x5e0d62);},'jytik':'windo'+_0x363400(0x711)+_0x363400(0x1a9),'ochuP':'#7ee0'+'a8','wDkxs':function(_0x2dc70b,_0x1f2b94){return _0x2dc70b<_0x1f2b94;},'ApyWj':function(_0xa400b8,_0x478893){return _0xa400b8+_0x478893;},'DvkTv':_0x363400(0xb55)+'hScri'+'pt','JfAKX':_0x363400(0x978)+_0x363400(0x6ea)+_0x363400(0x27d),'LjOUe':function(_0x4ff9cf,_0x3a9514){return _0x4ff9cf in _0x3a9514;},'BPiFL':function(_0x39c511,_0x128fc0,_0x3f1c77){return _0x39c511(_0x128fc0,_0x3f1c77);},'fDKLI':_0x363400(0x381),'FNLdn':_0x363400(0x169),'IIEdn':function(_0xf4783,_0x403bb9){return _0xf4783>>>_0x403bb9;},'BAqrD':function(_0x4ca839,_0x56b3a2){return _0x4ca839+_0x56b3a2;},'FTbRE':function(_0x3780c8,_0x33a00e){return _0x3780c8+_0x33a00e;},'UaXOx':function(_0x690485,_0x49c973){return _0x690485+_0x49c973;},'RIsnq':_0x363400(0x8d0)+_0x363400(0x8f0)+_0x363400(0x738)+_0x363400(0x219)+'but\x20n'+_0x363400(0x1c4)+'re\x20cl'+_0x363400(0xb76)+'ied\x20a'+'s\x20ene'+_0x363400(0x66f)+'yet\x20-'+_0x363400(0xadb)+'k\x20','wfsAj':'wQOxx','mfVNm':'LNhZD','bPEnk':function(_0x6baa,_0x5e209a){return _0x6baa+_0x5e209a;},'nECbg':'\x20->\x20','qmLgQ':_0x363400(0x7a9),'buiuG':function(_0x51c76b,_0x3f5b6d){return _0x51c76b+_0x3f5b6d;},'OfiVq':_0x363400(0x28c)+'lt\x20si'+'nce\x20f'+_0x363400(0x21e)+_0x363400(0x509)+_0x363400(0x74a)+_0x363400(0x872)+'n?):\x20','BhhzV':function(_0x23dfbf,_0x43d822){return _0x23dfbf===_0x43d822;},'fmIDW':_0x363400(0x511),'bytPX':'5|6|0'+_0x363400(0x7ce)+_0x363400(0x58f),'JiOLg':function(_0x20f1d5,_0x8b4836){return _0x20f1d5-_0x8b4836;},'VYyzE':function(_0x34266e){return _0x34266e();},'pzBEn':'<stro'+'ng>','jGqkV':_0x363400(0x853)+_0x363400(0x4e6),'GoSaT':'itCgY','GocXT':'DWAxN','vRLnB':function(_0x2ef1ff,_0x56c631,_0x381782){return _0x2ef1ff(_0x56c631,_0x381782);},'EwYDz':function(_0x43615a,_0x5eb5bb){return _0x43615a===_0x5eb5bb;},'HXaJj':function(_0x47af4b,_0x5e21c4){return _0x47af4b===_0x5e21c4;},'oUDWZ':function(_0x414c77,_0x36d42c,_0x1204af,_0x27e28e){return _0x414c77(_0x36d42c,_0x1204af,_0x27e28e);},'lIbWe':_0x363400(0xa73),'OHvgV':function(_0x327bd9,_0x1d7c0d){return _0x327bd9+_0x1d7c0d;},'iBZaw':_0x363400(0x958)+'VE','ACzuJ':function(_0x4319d8,_0x4b42cd){return _0x4319d8(_0x4b42cd);},'nQBGA':_0x363400(0x68e)+'t\x200\x20('+_0x363400(0x225)+'idth)','DBgFm':function(_0x55ec93,_0x501a13){return _0x55ec93!==_0x501a13;},'wXpxu':function(_0x451482,_0x4e5864){return _0x451482-_0x4e5864;},'cfBhN':_0x363400(0x25e)+'|1|6|'+_0x363400(0x338)+_0x363400(0x37d),'wuqvL':function(_0x135a1c,_0x578c3f){return _0x135a1c===_0x578c3f;},'KbnIi':'sk-ra'+_0x363400(0x9f5),'FPkXX':'range','iDzwf':_0x363400(0x56e)+_0x363400(0x13f),'aDdOj':function(_0x4e10fc,_0x3275d6){return _0x4e10fc(_0x3275d6);},'sqiGr':'sk-va'+'l','XruAi':function(_0x2561ab){return _0x2561ab();},'wkXYr':_0x363400(0x6b8)+_0x363400(0x7ff)+'0','vVIQG':_0x363400(0x231)+_0x363400(0x8dd)+_0x363400(0x2e0)+_0x363400(0x7b5)+_0x363400(0xa38),'QAzXk':_0x363400(0xa76)+'Game','TivOm':_0x363400(0x712),'tWZQn':function(_0x58b869){return _0x58b869();},'QIFtL':function(_0x59b883,_0x462ace){return _0x59b883!==_0x462ace;},'FdnJJ':_0x363400(0x5a8),'ZfBtY':function(_0x4a0d6f,_0x1d0b66){return _0x4a0d6f!==_0x1d0b66;},'nuIkB':_0x363400(0x18a),'uNDjQ':function(_0x5b67f4,_0x1238da){return _0x5b67f4===_0x1238da;},'LJLFN':_0x363400(0x5c8)+'an','CFnJw':'snaps'+_0x363400(0x2bd),'xSYBP':function(_0x4a567e,_0x577720){return _0x4a567e+_0x577720;},'GgNWY':function(_0xfdd7d,_0x498965){return _0xfdd7d+_0x498965;},'sWarh':function(_0x4f8816,_0x3ab902){return _0x4f8816+_0x3ab902;},'JNDls':function(_0x11656b,_0x54a8be){return _0x11656b===_0x54a8be;},'EWBpX':'[data'+_0x363400(0x7d5),'IxhXl':'SYGcc','TTPkS':_0x363400(0x4ac),'EglrZ':_0x363400(0x66b)+'ap','fXFod':_0x363400(0x252)+'f5','HAeqX':function(_0x537519){return _0x537519();},'lnBbm':function(_0x1f3e70,_0x585a64){return _0x1f3e70!==_0x585a64;},'hQBsV':_0x363400(0x44a),'OqhuI':_0x363400(0x824),'WEGEo':function(_0x53cad5,_0x59ce51){return _0x53cad5+_0x59ce51;},'AdYpc':function(_0x169f8c,_0x9daece){return _0x169f8c+_0x9daece;},'vOlaV':function(_0x3820e1,_0x59d4d9){return _0x3820e1<_0x59d4d9;},'EbJeR':_0x363400(0x9f9),'VKpGk':'ilOYM','uQUhK':_0x363400(0x656),'sHwhp':'#saku'+'ra-sw'+'-hud{'+_0x363400(0x5f5)+_0x363400(0x626)+'l}','PXkGO':_0x363400(0x1cb)+_0x363400(0xb69)+'hud','QWGPO':'backg'+_0x363400(0x541)+_0x363400(0xa5f)+_0x363400(0x2bc)+_0x363400(0x706)+_0x363400(0x35a)+_0x363400(0x4d1)+'r:1px'+_0x363400(0xa24)+'d\x20rgb'+'a(255'+_0x363400(0x3d3)+'177,.'+_0x363400(0x961)+_0x363400(0xb59)+_0x363400(0x7c1)+_0x363400(0x825)+'px;','tHlKK':'box-s'+'hadow'+':0\x2010'+'px\x2030'+'px\x20-1'+'2px\x20#'+'000;u'+_0x363400(0x4c8)+_0x363400(0x3f8)+_0x363400(0x7f6)+_0x363400(0x97b)+'kit-u'+'ser-s'+_0x363400(0x3f8)+_0x363400(0x7f6)+';','sBOTB':'<div\x20'+_0x363400(0x3fb)+_0x363400(0x281)+_0x363400(0xa0d)+'yle=\x22'+_0x363400(0x390)+_0x363400(0x639)+'a99;m'+_0x363400(0x806)+'dth:2'+_0x363400(0x664)+'\x22></d'+'iv>','EPmUl':function(_0x1010ac,_0x3e3cea){return _0x1010ac+_0x3e3cea;},'RLAZJ':function(_0xb73796,_0x2b423c){return _0xb73796+_0x2b423c;},'SnyrI':'<inpu'+_0x363400(0x179)+'a-a=\x22'+'fx\x22\x20t'+'ype=\x22'+_0x363400(0x31b)+'\x22\x20min'+_0x363400(0x245)+'max=\x22'+_0x363400(0x334)+'ep=\x220'+_0x363400(0xadf)+_0x363400(0xacd)+_0x363400(0x67b)+'tyle='+'\x22widt'+_0x363400(0xa1f)+_0x363400(0x565)+_0x363400(0x66d)+_0x363400(0x2ec),'KyvQg':'<span'+'\x20data'+'-a=\x22f'+'v\x22\x20st'+'yle=\x22'+_0x363400(0x390)+':#bda'+_0x363400(0x217)+_0x363400(0x1fc)+'dth:3'+_0x363400(0x2a1)+_0x363400(0x314)+'</spa'+'n>','SSSmB':_0x363400(0x927)+_0x363400(0x20b)+_0x363400(0xb15)+_0x363400(0x7d2)+_0x363400(0xb3b)+_0x363400(0x34c)+'argin'+'-left'+_0x363400(0xa95)+';back'+'groun'+'d:tra'+_0x363400(0xaf4)+_0x363400(0x3f1)+_0x363400(0xb59)+':1px\x20'+'solid'+_0x363400(0x9f6)+'(255,'+_0x363400(0x719)+'77,.4'+_0x363400(0x506),'SGuJn':_0x363400(0x390)+_0x363400(0x25b)+_0x363400(0x2d0)+'order'+_0x363400(0x7c1)+_0x363400(0x9ce)+'x;pad'+'ding:'+_0x363400(0x469)+_0x363400(0x4a8)+_0x363400(0x5f2)+'point'+'er;fo'+_0x363400(0x1e0)+_0x363400(0x154)+_0x363400(0x4bd)+'/butt'+_0x363400(0x22b),'KYWIa':_0x363400(0x3e1),'OpQny':_0x363400(0x231)+'kura]'+_0x363400(0x262)+_0x363400(0x68f)+'HUD\x20d'+_0x363400(0xb5e)+'ed','HBoJy':function(_0x494aa0,_0x51700d){return _0x494aa0+_0x51700d;},'noOGL':function(_0x133825,_0xb9d2fb){return _0x133825+_0xb9d2fb;},'vLtne':_0x363400(0xb55)+'h','VXoeI':_0x363400(0x99d)+'b','OzYFK':'wOEnL','hOTky':'VjDXT','KXDzz':function(_0x4bc5bd,_0x5d02c4){return _0x4bc5bd(_0x5d02c4);},'sCSXH':_0x363400(0xa9a),'hyRSG':_0x363400(0x4fc),'HEhMq':_0x363400(0x6fc)+'m','aYvhL':function(_0x1fc1ec,_0x467cf9){return _0x1fc1ec+_0x467cf9;},'cXgZV':function(_0x340f9d,_0x5e8bb2){return _0x340f9d+_0x5e8bb2;},'FJAGw':function(_0x2ddadb,_0x1046aa){return _0x2ddadb+_0x1046aa;},'CZfoy':_0x363400(0x56c)+_0x363400(0x586),'KACyf':function(_0x37978a,_0x58c54a){return _0x37978a>_0x58c54a;},'poabx':function(_0x8f524b,_0xb2d4e4){return _0x8f524b+_0xb2d4e4;},'NEbTy':'\x20\x20cam'+'\x20-','EffPA':_0x363400(0x261)+_0x363400(0x775)+_0x363400(0xb26)+_0x363400(0xaa2)+'y?)\x20\x20'+_0x363400(0x260),'QCibJ':function(_0x504006,_0x1e1209){return _0x504006===_0x1e1209;},'ovpjE':'NXtch','yWehI':function(_0x213336,_0x1a5a9e){return _0x213336===_0x1a5a9e;},'dARFM':'gIpyy','Bhysh':function(_0x7939b2,_0x534fa3){return _0x7939b2+_0x534fa3;},'vDCuU':function(_0x5809fc){return _0x5809fc();},'cHUzY':_0x363400(0x69c),'fRNjM':function(_0x4a00d4,_0x1c0a10){return _0x4a00d4+_0x1c0a10;},'gCNoZ':function(_0x9acb60,_0x18c7f3){return _0x9acb60>>>_0x18c7f3;},'vEVky':_0x363400(0x70e),'WqCYa':_0x363400(0x27c)+_0x363400(0x98e)+_0x363400(0x14c),'ucvuV':function(_0x2acc0f,_0x122972,_0x518af9){return _0x2acc0f(_0x122972,_0x518af9);},'uJEUG':function(_0x14805a,_0x195de0){return _0x14805a+_0x195de0;},'DDAgV':function(_0x3d0795,_0x2039f2){return _0x3d0795+_0x2039f2;},'koLYu':_0x363400(0xab6),'MFAGc':function(_0x3dc056,_0x7f18){return _0x3dc056*_0x7f18;},'pbDab':function(_0x3dd170,_0x57e88e){return _0x3dd170+_0x57e88e;},'fbiux':function(_0x8568b1,_0x4921c8){return _0x8568b1*_0x4921c8;},'mobdi':function(_0x53b5f8,_0x2e6a4a){return _0x53b5f8*_0x2e6a4a;},'aEgzL':function(_0x539fb2,_0x45d620){return _0x539fb2*_0x45d620;},'rjEGx':function(_0x4bad74,_0x430821){return _0x4bad74/_0x430821;},'GSwSW':function(_0x479312,_0x406738){return _0x479312<_0x406738;},'bBmdn':function(_0x5f0e3a,_0x269a74){return _0x5f0e3a<_0x269a74;},'QnwKM':function(_0x519fc8,_0x18cb85){return _0x519fc8+_0x18cb85;},'vlFYv':function(_0x3c974f,_0x50a4ac){return _0x3c974f*_0x50a4ac;},'GNSZA':_0x363400(0xa7e)+_0x363400(0xb6f)+_0x363400(0x164)+_0x363400(0x903),'RrlML':function(_0x599c52,_0x315fba,_0x3660f5){return _0x599c52(_0x315fba,_0x3660f5);},'KdoBg':function(_0x2155c2,_0xc76069){return _0x2155c2+_0xc76069;},'kfjhZ':_0x363400(0x9bb)+'rd','ZPzsl':function(_0x4d689d,_0x3f9527){return _0x4d689d+_0x3f9527;},'Ybdbj':_0x363400(0x487)+'ong>','EiGSL':_0x363400(0x5ac)+_0x363400(0x77e)+'ed','roKPq':'true','BGeYS':_0x363400(0x9c1),'xfUQx':'butto'+'n','JvAVp':'2|4|1'+_0x363400(0x8a9),'eLApN':function(_0x12f367,_0x474487){return _0x12f367<_0x474487;},'QLika':function(_0x43d12b,_0xeaeb9d){return _0x43d12b-_0xeaeb9d;},'WRMzm':_0x363400(0xa93),'NDvjA':'span','QJpcQ':function(_0x3be5f2,_0x1400ca){return _0x3be5f2!==_0x1400ca;},'XRzwa':'NRfgt','XdpYN':function(_0x168498,_0x3a28a,_0x337816){return _0x168498(_0x3a28a,_0x337816);},'GbYxZ':function(_0x33d5bd,_0x1ddd0e){return _0x33d5bd+_0x1ddd0e;},'eWptF':_0x363400(0xa7d)+'\x20clas'+'s=\x27sk'+_0x363400(0x570)+'\x27>','vuBHn':'</spa'+'n>','feLNS':function(_0x42837d,_0x5c69cb){return _0x42837d===_0x5c69cb;},'ABgvA':function(_0x5f3f5a,_0x375de8){return _0x5f3f5a===_0x375de8;},'mkLES':_0x363400(0x83a),'lsyji':function(_0x2b75e8,_0x1f4974){return _0x2b75e8!==_0x1f4974;},'OYQmh':_0x363400(0x49e),'ppnzm':function(_0x446212,_0x4a1a5d){return _0x446212===_0x4a1a5d;},'rAvhf':_0x363400(0xa4d),'vbkgY':_0x363400(0x4cb),'wNcap':function(_0xadc989,_0x5a6989){return _0xadc989!==_0x5a6989;},'ogmUl':_0x363400(0x7b3),'HehTa':function(_0x55754e,_0x1e6030,_0x12bbdd,_0x3a2c44){return _0x55754e(_0x1e6030,_0x12bbdd,_0x3a2c44);},'BnzCU':_0x363400(0x95f)+'esc','tQnZQ':_0x363400(0xa45)+_0x363400(0x232),'KvlQB':'sk-no'+'te','keyZy':function(_0x214c78,_0x592dd6){return _0x214c78(_0x592dd6);},'goeAt':_0x363400(0x90c),'BBdcW':_0x363400(0x210)+'ed','MTVzP':_0x363400(0xac2),'dLTiC':_0x363400(0x936)+_0x363400(0xae4)+_0x363400(0xadd)+_0x363400(0xb4d)+_0x363400(0x417)+_0x363400(0x58c),'DxurA':function(_0x28913f,_0x47df1a,_0x253a17){return _0x28913f(_0x47df1a,_0x253a17);},'nMwNG':_0x363400(0x6bf),'wAhdF':_0x363400(0x3b9)+'n-spa'+_0x363400(0x1c6)+_0x363400(0x4ce)+_0x363400(0x1b6)+'ield\x20'+'of\x20vi'+_0x363400(0x24b)+'nnot\x20'+_0x363400(0x9c0)+_0x363400(0xa86)+_0x363400(0x1b8)+'is\x20bu'+_0x363400(0x14f)+_0x363400(0x96c)+_0x363400(0x630)+'itted'+_0x363400(0x488)+_0x363400(0x850),'vMjuz':function(_0x113757,_0xfff009,_0x2d44bd,_0x3490f8){return _0x113757(_0xfff009,_0x2d44bd,_0x3490f8);},'uUDBU':'\x20\x20cam'+'era\x20','nXcMb':function(_0x541607,_0x40cc5e){return _0x541607+_0x40cc5e;},'gaMBe':function(_0x2601de,_0x595cc1){return _0x2601de+_0x595cc1;},'PPyFr':'\x20\x20yaw'+'\x20','QmVkv':_0x363400(0x520)+'s','PeYXF':'Build','ObZHq':_0x363400(0x733),'QbRcY':_0x363400(0x60a)+'ed\x20/\x20'+'regis'+'tered','vUMsP':_0x363400(0x636),'zxmTT':_0x363400(0x8d0)+'rs','qQIGw':_0x363400(0x2c3)+_0x363400(0xac7)+_0x363400(0x61e)+'nc','nufRl':'Enemi'+'es','tapaA':_0x363400(0x76d)+_0x363400(0x7bf)+_0x363400(0x3db)+'u','eUgIo':_0x363400(0x457)+'a','HqgEo':_0x363400(0x1fb)+_0x363400(0x799)+_0x363400(0x562)+_0x363400(0xa33),'DipRs':function(_0x1a98af,_0x5c1251){return _0x1a98af+_0x5c1251;},'FzgLh':'right','URDfo':_0x363400(0x294)+_0x363400(0x398),'jlXmk':_0x363400(0x9ee),'WIKsy':_0x363400(0x13e)+_0x363400(0xb32)+'ed','orbnE':function(_0x5e5116,_0x5ee0ea,_0x1c15f6,_0x34aab3){return _0x5e5116(_0x5ee0ea,_0x1c15f6,_0x34aab3);},'FCnwB':_0x363400(0x75b)+'heigh'+'t','VmNrq':'0x11C','Iosxw':_0x363400(0xb55)+'hScri'+_0x363400(0xaf1)+'C0','seTak':_0x363400(0x960),'zzcML':_0x363400(0x9b8)+_0x363400(0x497)+'s','lmBBf':'sk-pr'+'e','YRKwr':function(_0x2fb64c,_0x534523,_0x1a47f1){return _0x2fb64c(_0x534523,_0x1a47f1);},'uhDvr':_0x363400(0x786)+'n','ALlaM':function(_0xcae34b,_0x507c56,_0x1576d3,_0x315060){return _0xcae34b(_0x507c56,_0x1576d3,_0x315060);},'SgrYL':'Paste'+_0x363400(0x683)+'whole'+'\x20thin'+'g\x20whe'+'n\x20som'+_0x363400(0x1a2)+'g\x20loo'+'ks\x20wr'+'ong.','gKtPH':function(_0x413881,_0x33bbc2){return _0x413881(_0x33bbc2);},'qPySZ':function(_0x26eac0,_0x4abdbb,_0x4157d0){return _0x26eac0(_0x4abdbb,_0x4157d0);},'nMDhU':function(_0x258263,_0x4c7710){return _0x258263+_0x4c7710;},'ULCRv':_0x363400(0x4f9),'XCPki':_0x363400(0x41d),'nZZEG':_0x363400(0xa0e)+'a\x20Ski'+'llWar'+'z\x20-\x20w'+_0x363400(0x51b)+'g\x20for'+_0x363400(0x683)+_0x363400(0x557)+_0x363400(0xa42)+_0x363400(0x3a5),'WIJFI':'sakur'+_0x363400(0x235)+_0x363400(0x82f),'rIfNu':'EuRDO','ENmSZ':function(_0x4c29da,_0x53514d,_0x278db5){return _0x4c29da(_0x53514d,_0x278db5);},'CVEFh':function(_0x5543e8,_0x29f295,_0x1379b8,_0x219dcc){return _0x5543e8(_0x29f295,_0x1379b8,_0x219dcc);},'JHyEV':'mn-lo'+'go','GKdhZ':function(_0x35f110,_0xdeb7b8,_0x313e7e){return _0x35f110(_0xdeb7b8,_0x313e7e);},'bTDgU':'mn-ma'+'in','RsxoV':_0x363400(0xb08),'rwPsI':_0x363400(0xa82)+_0x363400(0x947),'oKNex':'<svg\x20'+_0x363400(0x82c)+_0x363400(0x402)+_0x363400(0x6d6)+'\x2024\x22>'+_0x363400(0x832)+_0x363400(0x7a0)+'6\x206l1'+'2\x2012M'+'18\x206\x20'+_0x363400(0x28b)+_0x363400(0x228)+_0x363400(0x8ef),'UIcgJ':function(_0x9ee2b2,_0x42ea22,_0x775aa9){return _0x9ee2b2(_0x42ea22,_0x775aa9);},'nfKkP':'mn-co'+'ls','haZvi':function(_0x35d763,_0x30664e,_0x5025b0,_0x2f242a){return _0x35d763(_0x30664e,_0x5025b0,_0x2f242a);},'VPSGK':function(_0x3e890e,_0x214ed0){return _0x3e890e+_0x214ed0;},'XIboB':_0x363400(0x1cb)+_0x363400(0x96a)+'al','PltcQ':_0x363400(0xa0e)+_0x363400(0x37c)+_0x363400(0xaf6)+_0x363400(0x47d)+'sert)','Lnglf':function(_0x45c7d9,_0x23b173,_0xcadb27){return _0x45c7d9(_0x23b173,_0xcadb27);},'JoAoF':function(_0x54eb2b,_0x814e40){return _0x54eb2b!==_0x814e40;},'rnuDt':_0x363400(0x5cc),'kglVL':_0x363400(0x231)+_0x363400(0x8dd)+'\x20menu'+_0x363400(0x3c1)+'ailab'+'le','TlgqZ':function(_0x537ad5,_0x2440df){return _0x537ad5+_0x2440df;},'KihIm':function(_0x6283f8,_0x2884b5){return _0x6283f8<_0x2884b5;},'IyFVF':'Sakur'+'a\x20Ski'+'llWar'+'z\x20—\x20','AazrA':function(_0x5a5944,_0x280107){return _0x5a5944+_0x280107;},'tjoaD':function(_0x2b146f,_0x6e6556){return _0x2b146f===_0x6e6556;},'GeYfl':function(_0x3b1d21,_0x23fc45){return _0x3b1d21(_0x23fc45);},'sqhcD':function(_0x2dcc85,_0x499a81){return _0x2dcc85<_0x499a81;},'bxXIk':_0x363400(0x6ef),'FCXMW':function(_0x260638){return _0x260638();},'aafVU':function(_0x9595e,_0x25c2fa){return _0x9595e(_0x25c2fa);},'BGvmp':'nMrTh','AQNlZ':_0x363400(0xb2d),'vZosq':_0x363400(0x7ee),'cJzPg':function(_0x3b4ced,_0x47499d){return _0x3b4ced+_0x47499d;},'MvRLY':'\x20\x20·\x20\x20'+'playe'+'rs\x20','dVkHB':'\x20\x20·\x20\x20'+_0x363400(0x6cf),'KgRyS':function(_0x11a225,_0x3bf32d){return _0x11a225<_0x3bf32d;},'fVHNr':function(_0x5075ca,_0x4c35ff){return _0x5075ca+_0x4c35ff;},'auqrB':function(_0x463b03,_0x375245){return _0x463b03===_0x375245;},'uMbyx':_0x363400(0xabf)+'insta'+'ntiat'+'e()','SDZqg':function(_0xe57e93,_0x4a79f9){return _0xe57e93+_0x4a79f9;},'oipls':function(_0x20a41a,_0x14c66d){return _0x20a41a/_0x14c66d;},'fMzYE':function(_0x581bc5,_0x5268a1){return _0x581bc5===_0x5268a1;},'CKeGg':function(_0x209ca9,_0x8c8792){return _0x209ca9===_0x8c8792;},'oRIkJ':_0x363400(0xade)+'8','DllCN':function(_0x21dc94,_0x33fe94,_0x111a50,_0xf9a281){return _0x21dc94(_0x33fe94,_0x111a50,_0xf9a281);},'VvwQK':function(_0x5c10f3,_0x23e433){return _0x5c10f3===_0x23e433;},'gVOmx':function(_0x45a464,_0x2a4e9e,_0x55e415,_0x47512b){return _0x45a464(_0x2a4e9e,_0x55e415,_0x47512b);},'pvWOP':function(_0x53f7e5,_0x27f71c){return _0x53f7e5+_0x27f71c;},'cKPpV':function(_0x35c107){return _0x35c107();},'ANThE':'WnNlf','yomCH':function(_0x231f89,_0x63b93d){return _0x231f89===_0x63b93d;},'pOFpI':function(_0x1e1687,_0x7da08d){return _0x1e1687===_0x7da08d;},'JRLjZ':function(_0x2b5294,_0x4ac417,_0x585e79){return _0x2b5294(_0x4ac417,_0x585e79);},'DEOCs':function(_0x3bf419,_0x42d37a){return _0x3bf419/_0x42d37a;},'hvEIQ':function(_0x1ff8b4,_0xa17f4a){return _0x1ff8b4===_0xa17f4a;},'CUAyk':'6|8|4'+_0x363400(0x7f4)+'2|5|1'+'|7|3','lftwq':_0x363400(0x63b)+_0x363400(0x555)+_0x363400(0x615)+_0x363400(0xb03)+'sp-cv'+'\x22\x20wid'+'th=\x221'+'60\x22\x20h'+_0x363400(0x98a)+'=\x22160'+_0x363400(0xb3b)+'le=\x22d'+_0x363400(0x230)+_0x363400(0x4ec)+_0x363400(0x286)+'/canv'+'as>','ToBrG':_0x363400(0x8ea)+'id=\x22s'+'akura'+'-esp-'+_0x363400(0x559)+'tyle='+_0x363400(0x9de)+'-alig'+_0x363400(0x479)+_0x363400(0x7ed)+'</div'+'>','tAwQV':_0x363400(0xa2d)+_0x363400(0x1c8)+'p-cv','IIBPr':_0x363400(0x1cb)+'a-esp','waBNy':function(_0x47773a,_0x59d5cb){return _0x47773a+_0x59d5cb;},'JaIjA':function(_0x5c0a82,_0x4e3059){return _0x5c0a82+_0x4e3059;},'tHtZM':function(_0x21015e,_0x3f20e2){return _0x21015e/_0x3f20e2;},'QHoIl':function(_0x25a90,_0x27ec07){return _0x25a90===_0x27ec07;},'OSMmk':function(_0x4f8956,_0x2ccc67){return _0x4f8956(_0x2ccc67);},'JCCnJ':function(_0xa8eb87,_0x56f56f){return _0xa8eb87!==_0x56f56f;},'oEiDs':_0x363400(0x444),'bBhCa':_0x363400(0x2dd)+'s','cVLBj':_0x363400(0x19c),'PgYYO':_0x363400(0x993),'IzFgA':'uBiYg','lyaiN':_0x363400(0xa97),'pfOxt':function(_0x445483,_0x178c10){return _0x445483(_0x178c10);},'wXHNb':function(_0x5dd81b,_0x38ec28,_0x5e9f36,_0x535109){return _0x5dd81b(_0x38ec28,_0x5e9f36,_0x535109);},'gMgNB':function(_0x2fb1b5,_0x3e07ee){return _0x2fb1b5+_0x3e07ee;},'viqzB':'hQDTd','caTdY':function(_0x18de5b,_0x3c63b8){return _0x18de5b||_0x3c63b8;},'yGWHH':function(_0x35e494,_0x2139d4){return _0x35e494/_0x2139d4;},'ClZEL':'rgba('+_0x363400(0x208)+_0x363400(0x843)+_0x363400(0x3be)+')','bnsii':_0x363400(0xb25)+'ui-mo'+_0x363400(0x2b9)+'ce,Co'+'nsola'+'s,mon'+_0x363400(0x589)+'e','dlPbt':function(_0x557bfc,_0x3a36f5){return _0x557bfc/_0x3a36f5;},'nQEjD':function(_0x5bfb45){return _0x5bfb45();},'uToME':function(_0x586056,_0x1071de){return _0x586056/_0x1071de;},'Lqsvg':function(_0x59191d,_0xfc90b6){return _0x59191d*_0xfc90b6;},'cwWjI':function(_0x38be1e,_0x269511){return _0x38be1e-_0x269511;},'AvRcX':function(_0x3bd9b7,_0x437feb){return _0x3bd9b7===_0x437feb;},'eTwCC':_0x363400(0x293),'usabN':function(_0x590a6a,_0x566762){return _0x590a6a-_0x566762;},'GiAyn':function(_0x39240d,_0x69d227){return _0x39240d!==_0x69d227;},'jgmkl':function(_0x3e549f,_0x31cbad){return _0x3e549f/_0x31cbad;},'wcdml':function(_0x3c4b01,_0x22c477){return _0x3c4b01-_0x22c477;},'kZqyQ':function(_0x644b95,_0x3b96ae){return _0x644b95+_0x3b96ae;},'XeYsg':function(_0x4253f4,_0x46f3cc){return _0x4253f4+_0x46f3cc;},'CoENE':function(_0x4ec954,_0x27f6c9){return _0x4ec954+_0x27f6c9;},'DWDXf':'esp\x20','qmDGQ':_0x363400(0x71f),'xRicm':function(_0x1b367a,_0x320902){return _0x1b367a+_0x320902;},'yWjCS':_0x363400(0x977)+_0x363400(0x882),'gIQwX':'#saku'+'ra-sw'+'-v2{a'+'ll:in'+'itial'+'}','xTXQH':_0x363400(0x9bd),'TBaVL':function(_0x3ecdb9,_0x14b705){return _0x3ecdb9===_0x14b705;},'XEzMv':function(_0xa8ba2a,_0x57d639){return _0xa8ba2a(_0x57d639);},'IyGrH':function(_0x525dda){return _0x525dda();},'WXHyl':function(_0x266cb3){return _0x266cb3();},'pmcbG':function(_0xf9ee94,_0x241713,_0x379c4e){return _0xf9ee94(_0x241713,_0x379c4e);},'KJzyx':_0x363400(0x95b),'Yfnte':function(_0x44b977,_0x272326){return _0x44b977!==_0x272326;},'wTkHA':function(_0x34b153,_0x400432){return _0x34b153+_0x400432;},'CGCqg':function(_0x2ed21e,_0xee3422){return _0x2ed21e!==_0xee3422;},'WsSsJ':function(_0x25afd1){return _0x25afd1();},'BCiNm':'surve'+'y\x20fai'+_0x363400(0xb34),'gaYMf':function(_0x10e9eb,_0x114949){return _0x10e9eb+_0x114949;},'cnLDq':function(_0xb3db08,_0x527607){return _0xb3db08===_0x527607;},'JFlpN':_0x363400(0xaa3),'eIMhn':function(_0x1447bd,_0x986b9b){return _0x1447bd+_0x986b9b;},'xURQP':_0x363400(0x7de)+_0x363400(0x546)+'\x20but\x20'+_0x363400(0x616)+_0x363400(0x7d6)+'lds.\x20','sdTzW':'Reaso'+'n:\x20','rOnNc':_0x363400(0x8bc)+_0x363400(0x583)+_0x363400(0x6be)+'\x20so\x20e'+'very\x20'+_0x363400(0x68e)+_0x363400(0xa06)+'\x20skip'+'ped\x20b'+_0x363400(0x4f2)+'e.','hRSos':function(_0x29cd35,_0x1dc5d5){return _0x29cd35===_0x1dc5d5;},'vTgif':function(_0x9e15ae,_0x3cd597){return _0x9e15ae+_0x3cd597;},'nTlAA':_0x363400(0x447)+'ER\x20UW'+_0x363400(0x359)+_0x363400(0x736)+'OK\x20OV'+_0x363400(0x662)+_0x363400(0x517)+'Unity'+'WebMo'+'dkit.'+_0x363400(0x962)+_0x363400(0x4d3)+_0x363400(0x25d)+'\x20arme'+_0x363400(0xb6d)+'\x20','LQucd':_0x363400(0x632)+_0x363400(0x7fb)+'y\x20a\x20d'+_0x363400(0x478)+'ent\x20i'+'nstan'+_0x363400(0x648)+'o\x20we\x20'+_0x363400(0x61f)+'sking'+_0x363400(0x683)+'wrong'+_0x363400(0x7de)+'ct\x20fo'+'r\x20','gxbYy':function(_0x526ef6,_0x541724){return _0x526ef6===_0x541724;},'butap':function(_0xfabf16,_0x22ec5b){return _0xfabf16+_0x22ec5b;},'ruAFC':function(_0x754365,_0x2bc379){return _0x754365+_0x2bc379;},'Eymoe':function(_0x3281c5,_0x16b02d){return _0x3281c5+_0x16b02d;},'CvkhO':'Unity'+_0x363400(0xa9b)+'ance\x20'+'not\x20r'+_0x363400(0xadc)+_0x363400(0x1ea)+_0x363400(0x534)+'urce:'+'\x20','qRlei':_0x363400(0x603)+_0x363400(0x62d)+_0x363400(0x90b)+'Modki'+'t.Val'+_0x363400(0x73c)+_0x363400(0xa5d)+'is\x20mi'+'ssing'+_0x363400(0x462)+'pture'+'\x20is\x20r'+_0x363400(0x40a)+_0x363400(0x6fa)+_0x363400(0xb04),'mKXAy':'ZfQdL','smyIX':'so\x20ho'+_0x363400(0x70c)+_0x363400(0xa05)+_0x363400(0xad6)+'after'+'\x20it\x20a'+_0x363400(0x76e)+_0x363400(0x999)+_0x363400(0x940)+_0x363400(0x3c8)+_0x363400(0x5ea)+'f\x20the'+_0x363400(0x9b4)+'.\x20','WohdW':_0x363400(0x7d8)+'(s)\x20d'+_0x363400(0x788)+_0x363400(0x89f)+_0x363400(0x140)+'\x20docu'+_0x363400(0x24e)+_0x363400(0x47a)+'.','jRPza':_0x363400(0x7a6),'CQuqR':_0x363400(0x7ea)+_0x363400(0x7c5)+_0x363400(0x15b),'LDISs':_0x363400(0x40b)+',\x20Met'+_0x363400(0xa96)+_0x363400(0xa8e)+'->\x20vo'+'id\x20do'+_0x363400(0x350)+'t\x20mat'+_0x363400(0x571)+_0x363400(0xaa5)+_0x363400(0xae1),'KaPHH':function(_0xc7a107,_0x1e3ab6){return _0xc7a107!==_0x1e3ab6;},'gitsN':_0x363400(0x2e7),'BJaTK':function(_0x3d5055,_0x4784e7){return _0x3d5055<_0x4784e7;},'GIpQz':function(_0x12257e,_0x423271){return _0x12257e+_0x423271;},'kBsGM':function(_0x5cabcc,_0x3f01ce){return _0x5cabcc+_0x3f01ce;},'IPqQJ':';font'+_0x363400(0xac6)+'ht:70'+'0','HgJDN':function(_0x29969b,_0x5504be){return _0x29969b===_0x5504be;},'nhCGt':function(_0x3ead2b,_0x221ef3){return _0x3ead2b<_0x221ef3;},'YzTZw':'lhAES','EfBFw':function(_0x4bc942){return _0x4bc942();},'YJNdF':'porta'+'l','DhktM':'wrapp'+'er','KbpJa':_0x363400(0x92f)+'ura_s'+'w_v2','XarEP':'2.9.1','tBcJg':_0x363400(0x160),'SIkHT':_0x363400(0x8a3)+'ge','HmLWz':function(_0x5ba9bf,_0x4648e8){return _0x5ba9bf+_0x4648e8;},'FQGOi':'%c[sa'+'kura]'+_0x363400(0x84a)+_0x363400(0x1d7)+'TIVE','QDpBW':'sakur'+_0x363400(0xb69)+'panel'+'-hidd'+'en','UyWht':function(_0x1e18dd,_0x47b1d8){return _0x1e18dd+_0x47b1d8;},'uOyTE':function(_0x5390a2,_0x10d101){return _0x5390a2+_0x10d101;},'WppKf':_0x363400(0x6a0)+'-weig'+_0x363400(0x668)+_0x363400(0x401)+_0x363400(0x321)+_0x363400(0x805)+'x','Rukbu':function(_0x502614,_0xe0c52,_0x6277b9){return _0x502614(_0xe0c52,_0x6277b9);},'CBcSc':_0x363400(0x2c0)+'bly-C'+_0x363400(0x313)+'-firs'+_0x363400(0x5a1)+_0x363400(0x3cf),'KgFYh':_0x363400(0x2ba)+_0x363400(0x349)+'racte'+_0x363400(0x680)+_0x363400(0x195)+'r.dll','IRutZ':'obfB','mxoDU':'0x10','dztoD':_0x363400(0x52c)+'h','uJofx':_0x363400(0x902),'cMgxU':_0x363400(0x76a)+_0x363400(0x5d7),'FsoSh':_0x363400(0x6db),'IVdIK':_0x363400(0x407),'xuoJr':_0x363400(0x637),'hdlCg':_0x363400(0xa2a)+_0x363400(0x5d9)+'th','UvEmI':_0x363400(0x9d7),'lkqor':_0x363400(0x473),'Cqjia':'0x58','giTOI':_0x363400(0x8f5),'pPCif':'keydo'+'wn','fbwdg':_0x363400(0x1cb)+'a-sw-'+_0x363400(0x4da),'lRMLa':_0x363400(0xa49)+'t','YrOkU':'VIS','kvzMb':'VAL','bpzSH':function(_0x18d0ab,_0x1cfe18){return _0x18d0ab+_0x1cfe18;},'MBuqg':function(_0x465472,_0x232cb1){return _0x465472+_0x232cb1;},'HgoYK':function(_0x1c9575,_0x39dad0){return _0x1c9575+_0x39dad0;},'MzWWR':function(_0x566f3d,_0x597afc){return _0x566f3d+_0x597afc;},'AMbWX':function(_0x1f9239,_0x4bb7f6){return _0x1f9239+_0x4bb7f6;},'KdQXW':function(_0x2ede07,_0x3f7e57){return _0x2ede07+_0x3f7e57;},'uFJEW':function(_0x48dc54,_0x1f21b6){return _0x48dc54+_0x1f21b6;},'rnIzi':function(_0x3133a7,_0x4e1500){return _0x3133a7+_0x4e1500;},'vvpiw':function(_0x5364f1,_0x9ec9d2){return _0x5364f1+_0x9ec9d2;},'QAKMX':function(_0xd3c726,_0x2e46f3){return _0xd3c726+_0x2e46f3;},'ujZnD':function(_0x593ef5,_0x3e25cf){return _0x593ef5+_0x3e25cf;},'UgaSa':function(_0x41ca70,_0xc73f64){return _0x41ca70+_0xc73f64;},'Fsqen':function(_0xe55cb,_0x1f9706){return _0xe55cb+_0x1f9706;},'tsOHw':_0x363400(0x3c4)+_0x363400(0x779)+'ex;ga'+_0x363400(0x865)+'x;pad'+_0x363400(0x5cf)+_0x363400(0x9f8)+_0x363400(0x4d1)+'r-rad'+_0x363400(0x60d)+_0x363400(0x9f4)+'ointe'+_0x363400(0x18b)+_0x363400(0x3f2)+_0x363400(0xaca)+_0x363400(0xa23)+'x:214'+'74836'+'47;','MFjoK':'box-s'+'hadow'+_0x363400(0x866)+'0\x201px'+_0x363400(0x9f6)+_0x363400(0x5e9)+'255,2'+'55,.0'+'6),in'+_0x363400(0xb5d)+_0x363400(0xa00)+_0x363400(0x918)+'a(255'+',255,'+_0x363400(0x5ba)+'05),0'+'\x2030px'+_0x363400(0x4b0)+'\x20rgba'+'(0,0,'+_0x363400(0x331)+');','GjMHq':'opaci'+'ty:0;'+'trans'+'form:'+'trans'+_0x363400(0x5ce)+_0x363400(0x221)+');poi'+_0x363400(0x9c7)+'event'+_0x363400(0x834)+_0x363400(0x5df)+'nsiti'+'on:op'+_0x363400(0xa48)+_0x363400(0x39a)+_0x363400(0x945)+',tran'+_0x363400(0x135)+_0x363400(0x312)+_0x363400(0xb6c)+'c-bez'+'ier(.'+_0x363400(0x56f)+_0x363400(0x5fd)+');','igfXS':'.mn-s'+_0x363400(0x1b3)+_0x363400(0x230)+'y:fle'+_0x363400(0x676)+_0x363400(0x5f1)+'ectio'+_0x363400(0x5ae)+'umn;a'+'lign-'+_0x363400(0x56a)+_0x363400(0x87c)+'er;ga'+_0x363400(0x156)+_0x363400(0xa7c)+_0x363400(0x67c)+_0x363400(0x676)+_0x363400(0x4a1)+_0x363400(0x5f3)+_0x363400(0x5cf)+'12px\x20'+'0;','Meqgp':_0x363400(0x172)+'ab:ho'+_0x363400(0x64a)+_0x363400(0x2ec)+_0x363400(0x79d)+_0x363400(0x1d9)+_0x363400(0x2eb)+_0x363400(0x8f7)+';}','cuFoZ':'.mn-s'+_0x363400(0x9c6)+_0x363400(0x3ee)+'ze:11'+'px;op'+_0x363400(0xa48)+_0x363400(0x4e8),'YumJZ':_0x363400(0x1cc)+_0x363400(0x4eb)+'displ'+'ay:gr'+_0x363400(0x4c2)+_0x363400(0xb41)+'tems:'+_0x363400(0x227)+'r;wid'+_0x363400(0x580)+'px;he'+_0x363400(0x82a)+_0x363400(0xa58)+_0x363400(0x4d1)+_0x363400(0x4e1)+'order'+'-radi'+_0x363400(0x512)+'x;bac'+'kgrou'+'nd:tr'+_0x363400(0x9e1)+_0x363400(0x72d),'ICpVx':_0x363400(0x390)+_0x363400(0x813)+_0x363400(0x2df)+'pacit'+_0x363400(0x910)+_0x363400(0x9f7)+_0x363400(0x800)+_0x363400(0x957)+';}','aaseo':_0x363400(0x1cc)+_0x363400(0x92e)+_0x363400(0x592)+_0x363400(0x6e8)+_0x363400(0x1b2)+_0x363400(0x869)+_0x363400(0xa47)+_0x363400(0x7c7)+'a(255'+_0x363400(0x148)+_0x363400(0x5ba)+_0x363400(0x8a5),'ZvMCz':_0x363400(0x1cc)+'lose\x20'+_0x363400(0x7b4)+'idth:'+'14px;'+_0x363400(0xab8)+'t:14p'+_0x363400(0x368)+'l:non'+'e;str'+'oke:c'+'urren'+'tColo'+_0x363400(0x324)+_0x363400(0x34e)+_0x363400(0x787)+_0x363400(0x2cd)+'oke-l'+_0x363400(0xac8)+_0x363400(0x48c)+_0x363400(0x3c9),'WBYZo':'.mn-c'+'ols{f'+_0x363400(0x32e)+_0x363400(0xa4c)+_0x363400(0xab8)+_0x363400(0x8e4)+_0x363400(0x43d)+_0x363400(0x66c)+_0x363400(0x396)+'displ'+_0x363400(0x67a)+_0x363400(0x1e4)+_0x363400(0x389)+'mplat'+'e-col'+_0x363400(0x65c)+_0x363400(0x131)+'t(aut'+_0x363400(0xb50)+'l,min'+'max(2'+_0x363400(0x50d)+'1fr))'+';','upCcE':_0x363400(0x847)+'-item'+_0x363400(0x397)+_0x363400(0xaa6)+'ign-c'+_0x363400(0xaac)+_0x363400(0x98d)+'rt;ga'+_0x363400(0x865)+_0x363400(0x7a7)+'ding:'+'0\x204px'+_0x363400(0xabe)+'0;}','BPDfH':'.mn-c'+'ols::'+_0x363400(0x9d6)+'it-sc'+'rollb'+'ar{wi'+'dth:8'+_0x363400(0xad9),'UswLY':_0x363400(0x1cc)+_0x363400(0xa10)+_0x363400(0x9d6)+_0x363400(0x991)+_0x363400(0x93e)+'ar-th'+'umb{b'+_0x363400(0xac5)+_0x363400(0x3de)+_0x363400(0x79d)+'255,2'+'55,25'+_0x363400(0x4fd)+_0x363400(0xa56)+_0x363400(0x72b)+'adius'+':4px;'+'}','XQaXq':'.sk-c'+'ard.o'+_0x363400(0x166)+'kgrou'+_0x363400(0x4fb)+'ba(25'+_0x363400(0x913)+_0x363400(0x148)+_0x363400(0xa77)+_0x363400(0xaae)+_0x363400(0xaf2)+_0x363400(0x22c)+'t\x200\x200'+_0x363400(0xb5b)+_0x363400(0x1fa)+'a(255'+',107,'+'157,.'+'28);}','Ocbbq':'.sk-c'+_0x363400(0x3bb)+'itle{'+_0x363400(0x8f6)+'1;min'+_0x363400(0x7e2)+'h:0;}','PkyMy':_0x363400(0x634)+_0x363400(0x4c9)+_0x363400(0xa2c)+_0x363400(0x50f)+_0x363400(0x8be)+_0x363400(0x9f8)+'}','Mhcwm':_0x363400(0x9e0)+_0x363400(0x7f3)+_0x363400(0x8d2)+':flex'+';alig'+_0x363400(0x271)+_0x363400(0x666)+'nter;'+'gap:8'+'px;pa'+_0x363400(0x4b3)+_0x363400(0x685)+'0;fon'+_0x363400(0x321)+'e:11.'+'5px;}','WlBYG':'.sk-s'+_0x363400(0x973)+'{posi'+'tion:'+'relat'+'ive;w'+_0x363400(0x787)+'26px;'+_0x363400(0xab8)+_0x363400(0x2f0)+'x;bor'+_0x363400(0x70b)+';bord'+'er-ra'+_0x363400(0x175)+'99px;'+_0x363400(0x79b)+_0x363400(0x541)+_0x363400(0xa5f)+'(255,'+_0x363400(0x38e)+_0x363400(0x89b)+'7);cu'+_0x363400(0x5f2)+_0x363400(0x8c1)+'er;fl'+_0x363400(0x561)+_0x363400(0x943),'HAgPX':'backg'+_0x363400(0x541)+_0x363400(0xa5f)+_0x363400(0x5e9)+_0x363400(0x38e)+'55,.2'+'5);tr'+_0x363400(0x3e4)+_0x363400(0x73a)+_0x363400(0x519)+_0x363400(0x2b0)+'ckgro'+'und\x20.'+'2s;}','AWsPC':_0x363400(0x442)+_0x363400(0x973)+_0x363400(0x521)+'-chec'+_0x363400(0x3b4)+'true\x22'+']::af'+'ter{l'+'eft:1'+_0x363400(0x3aa)+_0x363400(0xac5)+_0x363400(0x3de)+_0x363400(0xae9)+'9d;}','nqUJm':'.sk-r'+_0x363400(0x3e6)+_0x363400(0x3c4)+_0x363400(0x779)+_0x363400(0x404)+_0x363400(0xb57)+'tems:'+_0x363400(0x227)+'r;gap'+_0x363400(0x336)+'}','tkPZL':'backg'+_0x363400(0x541)+':line'+_0x363400(0x833)+_0x363400(0x846)+'t(#ff'+_0x363400(0x9e5)+'#ff6b'+_0x363400(0x5fc)+_0x363400(0x578)+_0x363400(0x36b)+_0x363400(0x80d)+'%)\x2010'+'0%\x20no'+'-repe'+'at,rg'+_0x363400(0x145)+_0x363400(0x913)+',255,'+_0x363400(0xace)+'}','zbPoL':_0x363400(0x3e2)+_0x363400(0x22a)+_0x363400(0x3ee)+_0x363400(0x139)+_0x363400(0xb53)+_0x363400(0x792)+_0x363400(0x82a)+_0x363400(0x75d)+_0x363400(0x1fc)+'dth:3'+_0x363400(0x550)+_0x363400(0x40f)+_0x363400(0x1d5)+_0x363400(0x89d)+';colo'+'r:rgb'+'a(246'+_0x363400(0xb00)+_0x363400(0x734)+'8);}','RZDjh':_0x363400(0x920)+_0x363400(0x45a)+_0x363400(0x25c)+_0x363400(0x9d3)+_0x363400(0x4cd)+_0x363400(0x2ec)+'rgba('+_0x363400(0x1d9)+'38,24'+_0x363400(0xb5a)+';padd'+_0x363400(0x2f7)+_0x363400(0x371)+_0x363400(0x2ca)+'-spac'+'e:pre'+_0x363400(0xb4f)+';}','cFOtE':_0x363400(0x9fb)+_0x363400(0x59d)+'11.5p'+_0x363400(0x595)+_0x363400(0x9e9)+'ght:7'+'00;cu'+_0x363400(0x5f2)+'point'+_0x363400(0x8ff)+_0x363400(0xa15)+'mily:'+_0x363400(0x59e)+_0x363400(0x984),'EPIwt':_0x363400(0xaec)+_0x363400(0x34f)+'ver{f'+'ilter'+_0x363400(0x29b)+_0x363400(0x1fe)+_0x363400(0x168)+_0x363400(0xb17),'vnVjJ':_0x363400(0x1b5)+_0x363400(0xa72)+_0x363400(0x845)+'px/1.'+'5\x20ui-'+'monos'+'pace,'+_0x363400(0x38b)+'las,m'+'onosp'+_0x363400(0x767)+'hite-'+_0x363400(0x96d)+':pre-'+'wrap;'+_0x363400(0x5ff)+_0x363400(0x277)+':brea'+'k-wor'+_0x363400(0x53f)+'gin:0'+_0x363400(0x874)+'ity:.'+'75;ma'+'x-hei'+_0x363400(0x365)+_0x363400(0x672)+'overf'+_0x363400(0x590)+_0x363400(0x922),'khjci':_0x363400(0xa2d)+_0x363400(0x758)+_0x363400(0x22d)+_0x363400(0xb5f)+'on:fi'+_0x363400(0x2f4)+'op:12'+_0x363400(0x337)+'ght:1'+'2px;z'+'-inde'+_0x363400(0x8a0)+'74836'+_0x363400(0x27f)+'rsor:'+_0x363400(0x8c1)+_0x363400(0xa2b)+_0x363400(0x7da)+'6px;h'+_0x363400(0x98a)+':26px'+';opac'+_0x363400(0x495)+'5;','CbSDg':_0x363400(0xaba)+_0x363400(0xb2a)+'\x22\x20str'+'oke=\x22'+_0x363400(0xae9)+_0x363400(0x3af)+_0x363400(0xab0)+'-widt'+_0x363400(0xa89)+'\x20stro'+_0x363400(0x273)+_0x363400(0x1c3)+_0x363400(0x71b)+_0x363400(0x15e)+'troke'+_0x363400(0x3cc)+'join='+'\x22roun'+_0x363400(0xa1b),'uVnUW':_0x363400(0x15a)+_0x363400(0x6b7)+'=\x2212\x22'+'\x20cy=\x22'+'10\x22\x20r'+_0x363400(0x87e)+'\x22\x20fil'+_0x363400(0x158)+_0x363400(0x981)+_0x363400(0xb1b)+'svg>','mxbkj':function(_0x48bfe5,_0x491891){return _0x48bfe5+_0x491891;},'tVrGU':_0x363400(0x2c6)+_0x363400(0xa6f)+'=\x22mn-'+_0x363400(0xaf3)+'svg\x22\x20'+_0x363400(0x82c)+_0x363400(0x402)+'\x200\x2024'+'\x2024\x22>'+_0x363400(0x832)+'\x20d=\x22M'+_0x363400(0x7f7)+_0x363400(0x493)+_0x363400(0x51e)+'4-4.5'+_0x363400(0x82b)+_0x363400(0x9ea)+_0x363400(0x8aa)+_0x363400(0x971)+_0x363400(0x1bb)+_0x363400(0x6af)+_0x363400(0xa04)+'5c0\x203'+'-2.5\x20'+'5-4\x207'+_0x363400(0x7dd),'NPqvd':_0x363400(0x15a)+'le\x20cx'+_0x363400(0x83e)+'\x20cy=\x22'+'10\x22\x20r'+_0x363400(0x416)+'\x22\x20fil'+'l=\x22#f'+_0x363400(0x981)+_0x363400(0xb1b)+_0x363400(0xaeb),'pevXy':function(_0x1d625f){return _0x1d625f();},'FvLvZ':_0x363400(0x42a)};var _0x5581ad=location[_0x363400(0x3b3)+_0x363400(0x968)]||'',_0x382845=/(^|\.)www\.crazygames\.com$/[_0x363400(0x4af)](_0x5581ad),_0x3fd3bd=/(^|\.)games\.crazygames\.com$/['test'](_0x5581ad),_0x4b8070=/(^|\.)crazygames\.com$/[_0x363400(0x4af)](_0x5581ad)&&!_0x382845&&!_0x3fd3bd,_0x514eb8=_0x382845?_0x4f1f8a['YJNdF']:_0x3fd3bd?_0x4f1f8a[_0x363400(0x302)]:_0x363400(0x6df)+'r';if(!_0x382845&&!_0x3fd3bd&&!_0x4b8070)return;var _0x58bb9b='#ff8f'+'b1',_0x17603b=_0x4f1f8a[_0x363400(0x65a)],_0x2b5402=_0x363400(0x4b5)+_0x363400(0x7dc)+'SKILL'+_0x363400(0x9cf)+'BEGIN'+_0x363400(0x7ec),_0x4e9631='===SA'+_0x363400(0x7dc)+'SKILL'+'WARZ-'+_0x363400(0x1e9)+'=',_0x44f6f9=_0x4f1f8a['XarEP'];if(_0x3fd3bd){if('Knxrh'!==_0x4f1f8a[_0x363400(0x5e3)]){window['addEv'+_0x363400(0x7e1)+_0x363400(0x3b8)+'r'](_0x4f1f8a[_0x363400(0x88b)],function(_0x2402d5){var _0x3aece7=_0x363400,_0x3e8950=_0x2402d5['data'];if(!_0x3e8950||_0x3e8950[_0x3aece7(0x92f)+_0x3aece7(0x70f)]!==_0x17603b)return;try{if(window[_0x3aece7(0x3c6)+'t']&&_0x4f1f8a['JIzbL'](window['paren'+'t'],window))window[_0x3aece7(0x3c6)+'t']['postM'+_0x3aece7(0x30f)+'e'](_0x3e8950,'*');if(window['top']&&window[_0x3aece7(0x5ad)]!==window)window[_0x3aece7(0x5ad)][_0x3aece7(0x748)+'essag'+'e'](_0x3e8950,'*');}catch(_0x16e847){}if(_0x3e8950&&_0x3e8950[_0x3aece7(0x4b2)]===_0x3aece7(0x703)){if('tIrem'!==_0x3aece7(0x916)){var _0x7e2997=_0x23c46f['getEl'+_0x3aece7(0x6a5)+'ById'](_0x3aece7(0x1cb)+_0x3aece7(0xb69)+'v2');if(_0x7e2997)_0x7e2997['remov'+'e']();}else try{if(_0x4f1f8a['fBHhA']!=='WTRDL')_0x56fd62();else{var _0x39bc8e=document[_0x3aece7(0x209)+'Selec'+_0x3aece7(0x97d)+'l'](_0x4f1f8a['HfHkp']);for(var _0x58aaa8=-0x9e8+0x1268+-0x880;_0x58aaa8<_0x39bc8e['lengt'+'h'];_0x58aaa8++){try{if(_0x4f1f8a[_0x3aece7(0x4e2)](_0x4f1f8a['wxGhr'],'QeLug')){if(_0x39bc8e[_0x58aaa8]['conte'+'ntWin'+_0x3aece7(0x51f)])_0x39bc8e[_0x58aaa8]['conte'+'ntWin'+'dow']['postM'+_0x3aece7(0x30f)+'e'](_0x3e8950,'*');}else{var _0x2bb558=_0x4f1f8a[_0x3aece7(0x527)][_0x3aece7(0xaed)]('|'),_0x1d4efe=-0x78f+-0x690+-0xf1*-0xf;while(!![]){switch(_0x2bb558[_0x1d4efe++]){case'0':var _0x4be17e=_0x5ae92e[_0x3aece7(0x47e)+'eElem'+_0x3aece7(0x141)]('canva'+'s');continue;case'1':if(!_0x523bd3[_0x3aece7(0x54b)]||!_0x4fe3c4[_0x3aece7(0x54b)][_0x3aece7(0x91c)+_0x3aece7(0x31c)+'d'])return null;continue;case'2':_0xbddaad={'cv':_0x4be17e};continue;case'3':_0x4be17e[_0x3aece7(0x41c)][_0x3aece7(0xacf)+'xt']='posit'+'ion:f'+_0x3aece7(0x64d)+_0x3aece7(0x9c2)+_0x3aece7(0x8d8)+':0;z-'+'index'+_0x3aece7(0x997)+_0x3aece7(0x29c)+_0x3aece7(0x52a)+_0x3aece7(0x9c7)+'event'+_0x3aece7(0x834)+'e;';continue;case'4':_0x4be17e['id']='sakur'+_0x3aece7(0x6d5)+'es';continue;case'5':return _0x22c022;case'6':_0xeaafd5['body']['appen'+_0x3aece7(0x31c)+'d'](_0x4be17e);continue;}break;}}}catch(_0x39aa20){}}}}catch(_0x487e61){}}}),console[_0x363400(0x564)]('%c[sa'+_0x363400(0x8dd)+_0x363400(0x989)+_0x363400(0x726)+_0x363400(0x2db)+_0x363400(0x8ae)+_0x363400(0x1df)+_0x363400(0x606)+'own)',_0x4f1f8a['HmLWz'](_0x363400(0x390)+':',_0x58bb9b));return;}else return _0x5a8ee5[_0x363400(0x236)+'d']++,_0x54e089['lastE'+'rror']=_0x1bd29d[_0x363400(0x1da)+_0x363400(0xaad)]||_0x4f1f8a[_0x363400(0x239)](_0x4f1f8a[_0x363400(0x239)](_0x4f1f8a[_0x363400(0xaa7)],_0x4f1f8a[_0x363400(0x919)](_0x45fc20,_0x2eb4bb)[_0x363400(0x71d)+_0x363400(0x3f0)](0xd01+-0x2*-0x8fa+-0x1ee5)),_0x4f1f8a['baiMW'])+_0x330052[_0x363400(0x8de)+'ength'][_0x363400(0x71d)+'ing'](-0x1*0x250a+-0x725*-0x5+-0x161*-0x1),null;}if(_0x382845){console[_0x363400(0x564)](_0x4f1f8a[_0x363400(0x4dc)],_0x363400(0x390)+':'+_0x58bb9b+(';font'+_0x363400(0xac6)+'ht:70'+'0'),{'host':_0x5581ad});var _0x5629e8={'set':function(){},'command':function(){}};function _0x150be0(_0x15a4e1,_0x450298){var _0x6a8357=_0x363400,_0x14313f={'iazLH':'warni'+'ngs','WbODe':function(_0x3d6ebc,_0x5178d6){return _0x3d6ebc<_0x5178d6;},'Epcdq':'\x20\x20!\x20'};if('YrwXU'===_0x6a8357(0x51a)){var _0x396c25={'__sakura':_0x17603b,'kind':_0x6a8357(0x703),'cmd':_0x15a4e1,'arg':_0x450298};try{var _0x1771b1=document[_0x6a8357(0x209)+_0x6a8357(0x674)+'torAl'+'l']('ifram'+'e');for(var _0x586337=0x255b+0x255d+-0x957*0x8;_0x586337<_0x1771b1[_0x6a8357(0x6c4)+'h'];_0x586337++){try{if(_0x1771b1[_0x586337][_0x6a8357(0x27e)+'ntWin'+'dow'])_0x1771b1[_0x586337][_0x6a8357(0x27e)+_0x6a8357(0x6c5)+'dow']['postM'+_0x6a8357(0x30f)+'e'](_0x396c25,'*');}catch(_0x5dc5c3){}}}catch(_0x1b5e6){}try{var _0x348d8c=new BroadcastChannel(_0x4f1f8a['PJiBj']);_0x348d8c['postM'+_0x6a8357(0x30f)+'e'](_0x396c25),setTimeout(function(){try{_0x348d8c['close']();}catch(_0x576291){}},-0x1*-0x707+-0x26*0x13+-0x33b);}catch(_0x4f2284){}}else{_0x2131a8[_0x6a8357(0xaf5)](_0x14313f[_0x6a8357(0x855)]);for(var _0x322a14=0x68+0x106a+-0x10d2;_0x14313f[_0x6a8357(0x1a8)](_0x322a14,_0x1c056c['warni'+_0x6a8357(0xb19)]['lengt'+'h']);_0x322a14++)_0x6f9988['push'](_0x14313f[_0x6a8357(0x650)]+_0x39ce1f[_0x6a8357(0x67e)+_0x6a8357(0xb19)][_0x322a14]);}}var _0x58ff0b=_0x4f1f8a[_0x363400(0x896)];function _0xbadeb3(){var _0xc0804e=_0x363400;try{return _0x4f1f8a['UnduR'](localStorage[_0xc0804e(0x8d9)+'em'](_0x58ff0b),'1');}catch(_0x58011b){return![];}}function _0x25f6ae(_0x17dd0e){var _0x467b93=_0x363400,_0x10e172={'tJMZj':function(_0x112317,_0xae0d87){var _0x53c900=_0x1a9a;return _0x4f1f8a[_0x53c900(0x877)](_0x112317,_0xae0d87);}};try{_0x17dd0e?localStorage[_0x467b93(0x560)+'em'](_0x58ff0b,'1'):localStorage[_0x467b93(0x9d9)+'eItem'](_0x58ff0b);}catch(_0x5b8b67){}try{var _0x81ea84=document[_0x467b93(0xa9f)+_0x467b93(0x6a5)+_0x467b93(0x203)](_0x467b93(0x1cb)+'a-sw-'+'v2');if(_0x81ea84)_0x81ea84[_0x467b93(0x9d9)+'e']();}catch(_0x28db00){}try{if(_0x4f1f8a['nPPaH'](_0x4f1f8a['Fdajf'],'ZDPpL'))return{'o':_0x10e172[_0x467b93(0x5be)]('0x',_0x4da3c0[-0x16*0x9b+-0x3*0x39a+0x1820][_0x467b93(0x71d)+_0x467b93(0x3f0)](-0x1c3*-0x5+-0x1eb8*0x1+-0x1*-0x15f9)),'v':_0x3ff6e7(_0x10e294+_0x598056[-0xb8f+-0x4*-0xfb+-0x5*-0x187],_0x1e78a3[-0xa3a*-0x3+0x112a+-0x2fd7*0x1])};else{var _0xea32db=document[_0x467b93(0xa9f)+_0x467b93(0x6a5)+_0x467b93(0x203)](_0x4f1f8a[_0x467b93(0x7ab)]);if(_0x4f1f8a[_0x467b93(0xab9)](_0x17dd0e,!_0xea32db)&&document[_0x467b93(0x54b)]){var _0x2db748=document[_0x467b93(0x47e)+'eElem'+'ent'](_0x4f1f8a['Lsjao']);_0x2db748['id']=_0x4f1f8a['xhNXn'],_0x2db748['style'][_0x467b93(0xacf)+'xt']=_0x4f1f8a[_0x467b93(0x5ed)](_0x4f1f8a[_0x467b93(0x239)](_0x4f1f8a['uPZfk'](_0x467b93(0x49a)+'ion:f'+_0x467b93(0x64d)+_0x467b93(0x9c2)+_0x467b93(0x36f)+'top:1'+_0x467b93(0xb1f)+_0x467b93(0xa23)+_0x467b93(0x8a0)+_0x467b93(0x78f)+'99;cu'+_0x467b93(0x5f2)+'point'+_0x467b93(0x1d1)+'er-se'+'lect:'+_0x467b93(0x33b),_0x4f1f8a['RdaUb'])+_0x58bb9b,';'),_0x4f1f8a['vtMhd']),_0x2db748[_0x467b93(0x26b)+_0x467b93(0xaac)+'t']='sakur'+'a',_0x2db748[_0x467b93(0xa32)+'ck']=function(){_0x4f1f8a['ICXJe'](_0x25f6ae,![]),_0x4f1f8a['IbVkH'](_0x59c863);},document['body'][_0x467b93(0x91c)+'dChil'+'d'](_0x2db748);}else!_0x17dd0e&&_0xea32db&&_0xea32db[_0x467b93(0x9d9)+'e']();}}catch(_0x118f54){}}function _0x1dddb7(){var _0x2651ad=_0x363400;if(_0x4f1f8a['dXPoQ'](_0xbadeb3))return null;var _0x5b48df=document[_0x2651ad(0xa9f)+_0x2651ad(0x6a5)+_0x2651ad(0x203)](_0x4f1f8a[_0x2651ad(0xb5c)]);if(_0x5b48df)return _0x5b48df;if(!document[_0x2651ad(0x54b)]||!document['body']['appen'+_0x2651ad(0x31c)+'d'])return null;try{if(!document[_0x2651ad(0xa9f)+'ement'+_0x2651ad(0x203)](_0x4f1f8a['WBIzo'])){var _0x4aa161=document['creat'+_0x2651ad(0x27a)+'ent'](_0x2651ad(0x41c));_0x4aa161['id']=_0x4f1f8a[_0x2651ad(0x924)],_0x4aa161[_0x2651ad(0x26b)+'onten'+'t']=_0x2651ad(0xa2d)+_0x2651ad(0x386)+'-v2{a'+_0x2651ad(0xb54)+'itial'+'}',(document[_0x2651ad(0x935)]||document[_0x2651ad(0x2c4)+'entEl'+'ement'])[_0x2651ad(0x91c)+_0x2651ad(0x31c)+'d'](_0x4aa161);}return _0x5b48df=document['creat'+_0x2651ad(0x27a)+_0x2651ad(0x141)]('div'),_0x5b48df['id']='sakur'+_0x2651ad(0xb69)+'v2',document['body'][_0x2651ad(0x91c)+_0x2651ad(0x31c)+'d'](_0x5b48df),_0x5b48df;}catch(_0x41e336){return _0x4f1f8a[_0x2651ad(0x190)](_0x4f1f8a[_0x2651ad(0x556)],_0x4f1f8a[_0x2651ad(0x1e7)])?null:_0x256804[_0x2651ad(0x541)](_0x223f3b*(-0x6cb*-0x4+-0x7b*0x3d+0x287))/(-0x71*0x4f+-0x1fe3+-0xd6e*-0x5);}}function _0x59c863(){var _0x4cc1de=_0x363400,_0x5886a5=_0x1dddb7();if(!_0x5886a5)return _0x5629e8;if(_0x5886a5['datas'+'et'][_0x4cc1de(0x4e5)])return _0x5886a5[_0x4cc1de(0x4e5)];try{return _0x5a9a48(_0x5886a5);}catch(_0x11b3fa){return _0x5886a5[_0x4cc1de(0xa68)+'et'][_0x4cc1de(0x4e5)]='1',_0x5886a5['api']=_0x5629e8,console[_0x4cc1de(0x4a2)](_0x4cc1de(0x231)+_0x4cc1de(0x8dd)+_0x4cc1de(0x2e0)+'l\x20dis'+_0x4cc1de(0xa38),_0x4f1f8a[_0x4cc1de(0x239)](_0x4f1f8a['UmzHD'],_0x58bb9b),_0x11b3fa),_0x5629e8;}}function _0x5a9a48(_0x273089){var _0x14a08e=_0x363400,_0x354f52={'XMjRD':function(_0x2b17bd,_0x2402ac,_0x410a3e){var _0x559e11=_0x1a9a;return _0x4f1f8a[_0x559e11(0x777)](_0x2b17bd,_0x2402ac,_0x410a3e);},'pQqDn':_0x4f1f8a['UPgTO'],'NllGE':_0x14a08e(0x542),'yttMu':_0x4f1f8a['Lsjao'],'xQmWW':function(_0x2942ac,_0x4f51e1){var _0x2c9b0f=_0x14a08e;return _0x4f1f8a[_0x2c9b0f(0x919)](_0x2942ac,_0x4f51e1);},'DKmpr':_0x4f1f8a[_0x14a08e(0x3e3)],'JvVKE':function(_0x246342,_0x25f8ed){return _0x4f1f8a['MSjKh'](_0x246342,_0x25f8ed);},'ALaqQ':_0x4f1f8a['gIWkg'],'qxbpW':function(_0x3e6de2,_0x1d5a1b){return _0x3e6de2+_0x1d5a1b;},'RzEQJ':function(_0x25ca0d,_0x1e28ef){return _0x25ca0d+_0x1e28ef;},'devSK':function(_0x2be2b2,_0x110d64){return _0x2be2b2>_0x110d64;},'Lkeqf':function(_0x3b2723,_0x5c004b){return _0x3b2723!==_0x5c004b;},'TBiIk':_0x4f1f8a[_0x14a08e(0x8b5)],'BQhGz':_0x4f1f8a['WsDkr'],'dEmoI':_0x14a08e(0x5a4)+'\x20·\x20','Zgdeq':_0x4f1f8a[_0x14a08e(0x9ad)],'qaKtz':'KSNRH','Nvcvc':_0x4f1f8a['zbTlM'],'WWWfG':'Speed'+_0x14a08e(0x21f),'sFtSU':_0x14a08e(0x252)+'f5','XnQdS':_0x4f1f8a[_0x14a08e(0x5fe)],'SPTWE':_0x4f1f8a[_0x14a08e(0x967)],'pmWXV':function(_0xa48383,_0x46395b){return _0xa48383(_0x46395b);},'RJemC':_0x14a08e(0x231)+_0x14a08e(0x8dd)+_0x14a08e(0x49c)+'lWarz'+'\x20repo'+'rt','Nsqso':function(_0x5a673b,_0x5a8331){var _0x3980c5=_0x14a08e;return _0x4f1f8a[_0x3980c5(0x418)](_0x5a673b,_0x5a8331);}};_0x273089[_0x14a08e(0x41c)][_0x14a08e(0xacf)+'xt']=_0x4f1f8a[_0x14a08e(0x239)]('posit'+_0x14a08e(0x998)+_0x14a08e(0x64d)+'left:'+'12px;'+_0x14a08e(0x71a)+'2px;z'+'-inde'+'x:214'+_0x14a08e(0x9dc)+'00;ma'+'x-wid'+'th:mi'+_0x14a08e(0x3ac)+'w,620'+'px);m'+'ax-he'+'ight:'+_0x14a08e(0xafe)+('backg'+'round'+_0x14a08e(0x29d)+_0x14a08e(0x533)+'olor:'+_0x14a08e(0x252)+_0x14a08e(0x58a)+_0x14a08e(0xa09)+_0x14a08e(0x4ee)+'olid\x20'+_0x14a08e(0x79d)+_0x14a08e(0x208)+_0x14a08e(0xa26)+_0x14a08e(0x430)+';bord'+'er-ra'+_0x14a08e(0x175)+_0x14a08e(0x24f))+(_0x14a08e(0x297)+'12px/'+_0x14a08e(0xab2)+_0x14a08e(0x826)+'ospac'+_0x14a08e(0x55f)+_0x14a08e(0x9ac)+_0x14a08e(0x3d4)+_0x14a08e(0x96d)+_0x14a08e(0x2b1)+_0x14a08e(0x6e3)+_0x14a08e(0x303)+'0px\x205'+_0x14a08e(0x53b)+_0x14a08e(0xa8a)+_0x14a08e(0x503)),'displ'+_0x14a08e(0x779)+'ex;fl'+_0x14a08e(0xb75)+_0x14a08e(0x5de)+_0x14a08e(0x50a)+_0x14a08e(0x20d)+_0x14a08e(0x3b5)+'low:h'+_0x14a08e(0x1dd)+';'),_0x273089[_0x14a08e(0x38a)+_0x14a08e(0x8f4)]=_0x4f1f8a[_0x14a08e(0x877)](_0x4f1f8a[_0x14a08e(0x239)](_0x4f1f8a[_0x14a08e(0x48d)](_0x4f1f8a['gyQeq'](_0x4f1f8a['gKgBa'](_0x4f1f8a[_0x14a08e(0x418)](_0x4f1f8a[_0x14a08e(0xb29)](_0x4f1f8a['RaNEw'](_0x4f1f8a['DSfvv'](_0x14a08e(0x8ea)+_0x14a08e(0x41c)+'=\x22pad'+'ding:'+_0x14a08e(0x749)+_0x14a08e(0xaa0)+_0x14a08e(0xb59)+'-bott'+_0x14a08e(0x2ea)+_0x14a08e(0x667)+_0x14a08e(0x6f1)+_0x14a08e(0x145)+'5,143'+_0x14a08e(0x581)+'.3);d'+_0x14a08e(0x230)+_0x14a08e(0x2e3)+'x;gap'+_0x14a08e(0x336)+'align'+'-item'+'s:cen'+_0x14a08e(0x20a)+_0x14a08e(0x582)+_0x14a08e(0x764)+_0x14a08e(0xb16)+(_0x14a08e(0xaf0)+_0x14a08e(0x923)+'color'+':')+_0x58bb9b,_0x4f1f8a[_0x14a08e(0x612)])+(_0x14a08e(0xa7d)+_0x14a08e(0x58e)+'sw2-b'+'uild\x22'+_0x14a08e(0x4be)+'e=\x22co'+_0x14a08e(0x86f)+'7a658'+'6;fon'+_0x14a08e(0x321)+_0x14a08e(0x9b7)+'x;pad'+_0x14a08e(0x5cf)+_0x14a08e(0x469)+_0x14a08e(0x298)+'rder:'+'1px\x20s'+_0x14a08e(0x7d1)+_0x14a08e(0x79d)+'255,1'+_0x14a08e(0xa26)+_0x14a08e(0x2e8)+_0x14a08e(0xa56)+'der-r'+_0x14a08e(0x6da)+_0x14a08e(0x2c7)+_0x14a08e(0x4ff)+_0x14a08e(0x5a3)+_0x14a08e(0x237)),_0x14a08e(0xa7d)+_0x14a08e(0x58e)+_0x14a08e(0x7bb)+'tatus'+'\x22\x20sty'+_0x14a08e(0x30a)+_0x14a08e(0x2ec)+_0x14a08e(0x873)+_0x14a08e(0x8c5)+_0x14a08e(0x51b)+_0x14a08e(0xa2f)+_0x14a08e(0x966)+_0x14a08e(0x1c5)+'e…</s'+'pan>')+(_0x14a08e(0x927)+_0x14a08e(0x898)+'=\x22sw2'+_0x14a08e(0x917)+_0x14a08e(0xb3b)+'le=\x22d'+_0x14a08e(0x230)+_0x14a08e(0x536)+_0x14a08e(0x3d2)+_0x14a08e(0x55c)+'eft:a'+'uto;b'+_0x14a08e(0xac5)+_0x14a08e(0x3de))+_0x58bb9b,_0x14a08e(0x532)+'er:0;'+_0x14a08e(0x390)+_0x14a08e(0x42f)+'f1b;b'+_0x14a08e(0xb59)+_0x14a08e(0x7c1)+_0x14a08e(0x415)+'x;pad'+'ding:'+'4px\x201'+_0x14a08e(0x310)+_0x14a08e(0x37b)+'eight'+':700;'+_0x14a08e(0x213)+_0x14a08e(0x654)+'nter;'+'\x22>Cop'+_0x14a08e(0x745)+_0x14a08e(0xac9)+_0x14a08e(0xa91))+('<butt'+'on\x20id'+_0x14a08e(0x84f)+_0x14a08e(0x912)+_0x14a08e(0x96f)+'tyle='+_0x14a08e(0x54a)+_0x14a08e(0xa47)+'d:tra'+_0x14a08e(0xaf4)+'ent;b'+'order'+_0x14a08e(0x1c7)+'solid'+_0x14a08e(0x9f6)+'(255,'+_0x14a08e(0x719)+'77,.4'+_0x14a08e(0x146)+'or:#f'+'7eef5'+_0x14a08e(0x532)+_0x14a08e(0x30d)+_0x14a08e(0x175)+_0x14a08e(0x6dc)+'addin'+'g:4px'+_0x14a08e(0x69e)+_0x14a08e(0x213)+_0x14a08e(0x654)+_0x14a08e(0x280)+'\x22>ope'+_0x14a08e(0x92b)+_0x14a08e(0xa91))+('<butt'+_0x14a08e(0x898)+'=\x22sw2'+_0x14a08e(0x1c9)+_0x14a08e(0x466)+'\x22back'+'groun'+_0x14a08e(0x87f)+'nspar'+'ent;b'+'order'+':1px\x20'+'solid'+'\x20rgba'+_0x14a08e(0x5e9)+_0x14a08e(0x719)+'77,.4'+');col'+_0x14a08e(0x732)+_0x14a08e(0xa9e)+_0x14a08e(0x532)+'er-ra'+_0x14a08e(0x175)+_0x14a08e(0x6dc)+_0x14a08e(0x72f)+'g:4px'+_0x14a08e(0x69e)+_0x14a08e(0x213)+_0x14a08e(0x654)+_0x14a08e(0x280)+_0x14a08e(0x62e)+_0x14a08e(0x214)+'n>'),'</div'+'>'),_0x4f1f8a['vsIFb'])+(_0x14a08e(0x8ea)+_0x14a08e(0x41c)+_0x14a08e(0x197)+'ding:'+_0x14a08e(0x2e6)+_0x14a08e(0xaa0)+_0x14a08e(0xb59)+'-bott'+_0x14a08e(0x2ea)+'x\x20sol'+'id\x20rg'+_0x14a08e(0x145)+_0x14a08e(0x500)+',177,'+'.18);'+_0x14a08e(0x3c4)+'ay:fl'+_0x14a08e(0x7e4)+_0x14a08e(0x7a2)+_0x14a08e(0x894)+_0x14a08e(0x271)+_0x14a08e(0x666)+'nter;'+_0x14a08e(0x8f6)+_0x14a08e(0xaaa)+_0x14a08e(0x42d)+_0x14a08e(0x770)+_0x14a08e(0x427)+_0x14a08e(0x647)+'>'),_0x14a08e(0x927)+_0x14a08e(0x898)+'=\x22sw2'+_0x14a08e(0x5aa)+_0x14a08e(0x7be)+_0x14a08e(0x923)+_0x14a08e(0x79b)+_0x14a08e(0x541)+_0x14a08e(0x61c)+_0x14a08e(0x5b4)+_0x14a08e(0x8bf)+_0x14a08e(0xa09)+_0x14a08e(0x4ee)+_0x14a08e(0x7d1)+_0x14a08e(0x79d)+'255,1'+'43,17'+_0x14a08e(0x5e1)+_0x14a08e(0x842)+_0x14a08e(0x7e7)+'eef5;'+_0x14a08e(0x4d1)+_0x14a08e(0x49f)+_0x14a08e(0x5b9)+_0x14a08e(0x84c)+'dding'+_0x14a08e(0x685)+'10px;'+'curso'+'r:poi'+'nter;'+'\x22>Spe'+'ed\x20of'+'f</bu'+_0x14a08e(0xa91)),'<inpu'+'t\x20id='+_0x14a08e(0x1f5)+'facto'+'r\x22\x20ty'+_0x14a08e(0x7bc)+_0x14a08e(0x54e)+_0x14a08e(0x57a)+_0x14a08e(0x6ac)+_0x14a08e(0x84e)+_0x14a08e(0x248)+'p=\x220.'+_0x14a08e(0x159)+'lue=\x22'+_0x14a08e(0x45e)+'yle=\x22'+_0x14a08e(0x35d)+_0x14a08e(0x180)+'x;acc'+_0x14a08e(0x66d)+_0x14a08e(0x2ec))+_0x58bb9b+_0x4f1f8a['XSPIY']+_0x4f1f8a[_0x14a08e(0x2aa)]+(_0x14a08e(0x927)+_0x14a08e(0x898)+_0x14a08e(0x84f)+_0x14a08e(0x698)+_0x14a08e(0xb3b)+_0x14a08e(0x247)+_0x14a08e(0xac5)+'ound:'+_0x14a08e(0x76a)+_0x14a08e(0x3c6)+_0x14a08e(0x83d)+_0x14a08e(0xa36)+'px\x20so'+_0x14a08e(0x173)+_0x14a08e(0x7e6)+'55,14'+_0x14a08e(0xb4a)+',.4);'+_0x14a08e(0x390)+':#f7e'+'ef5;b'+_0x14a08e(0xb59)+_0x14a08e(0x7c1)+'us:7p'+_0x14a08e(0x7a7)+'ding:'+_0x14a08e(0x4bb)+_0x14a08e(0x4a8)+'rsor:'+'point'+'er;\x22>'+'Snaps'+_0x14a08e(0x15d)+_0x14a08e(0xaff)+_0x14a08e(0x214)+'n>')+(_0x14a08e(0xa7d)+_0x14a08e(0x58e)+_0x14a08e(0x6aa)+_0x14a08e(0x9c3)+'style'+'=\x22col'+_0x14a08e(0x388)+'d7a99'+_0x14a08e(0x21a)+_0x14a08e(0x949)+_0x14a08e(0x518)+_0x14a08e(0x6e9)+'king\x20'+_0x14a08e(0x2d2)+_0x14a08e(0xa6c)+_0x14a08e(0x1ee)+'umpin'+_0x14a08e(0xb43)+_0x14a08e(0x363)+_0x14a08e(0x2fc)+_0x14a08e(0x5ab)+_0x14a08e(0x1f2)+_0x14a08e(0x373)+_0x14a08e(0x7ad)+'>'),_0x4f1f8a['KKFjy'])+_0x4f1f8a['KbDQd'],'max-h'+'eight'+_0x14a08e(0x673)+';\x22>No'+'\x20repo'+'rt\x20ye'+'t.\x0a\x0aT'+'his\x20p'+_0x14a08e(0x50c)+_0x14a08e(0x755)+_0x14a08e(0x165)+'self\x20'+_0x14a08e(0x5b6)+_0x14a08e(0x69f)+'ame\x20f'+_0x14a08e(0x68f)+_0x14a08e(0xb48)+_0x14a08e(0x9be)+_0x14a08e(0x729)+_0x14a08e(0x40c)+'eeded'+_0x14a08e(0x55a)+_0x14a08e(0x369)+'tays\x20'+'empty'+_0x14a08e(0xb24)+'permo'+_0x14a08e(0x137)+_0x14a08e(0x609)+'t\x20inj'+'ectin'+'g\x20int'+_0x14a08e(0x33a)+'\x20cros'+'s-ori'+_0x14a08e(0x5a7)+_0x14a08e(0xa9c)+_0x14a08e(0x96b)+_0x14a08e(0x322)+'>')+_0x4f1f8a[_0x14a08e(0x2ad)];var _0x7bc76e=_0x273089[_0x14a08e(0x209)+'Selec'+_0x14a08e(0x3a2)](_0x4f1f8a[_0x14a08e(0x530)]),_0x4cfeaf=_0x273089['query'+'Selec'+'tor'](_0x4f1f8a[_0x14a08e(0x309)]),_0x1ec513=_0x273089[_0x14a08e(0x209)+_0x14a08e(0x674)+'tor'](_0x14a08e(0x3d8)+'out'),_0x103e09=_0x273089[_0x14a08e(0x209)+_0x14a08e(0x674)+_0x14a08e(0x3a2)](_0x4f1f8a['cgzWI']),_0x2fbd2b=_0x273089['query'+_0x14a08e(0x674)+_0x14a08e(0x3a2)](_0x4f1f8a[_0x14a08e(0x375)]),_0x4cb57a=_0x273089['query'+_0x14a08e(0x674)+_0x14a08e(0x3a2)](_0x4f1f8a[_0x14a08e(0x94a)]),_0x445137=_0x273089[_0x14a08e(0x209)+'Selec'+'tor'](_0x14a08e(0x3d8)+_0x14a08e(0x54b)),_0x16abdb=_0x273089['query'+_0x14a08e(0x674)+_0x14a08e(0x3a2)](_0x4f1f8a['dXUle']),_0x2d76a6=_0x273089['query'+'Selec'+_0x14a08e(0x3a2)](_0x14a08e(0x3d8)+'speed'),_0x5bde2f=_0x273089['query'+_0x14a08e(0x674)+_0x14a08e(0x3a2)](_0x14a08e(0x3d8)+_0x14a08e(0x890)+'r'),_0x2f12be=_0x273089['query'+'Selec'+_0x14a08e(0x3a2)]('#sw2-'+'facto'+_0x14a08e(0x602)+'l'),_0xeb6fbc=_0x273089['query'+'Selec'+'tor'](_0x4f1f8a[_0x14a08e(0x747)]),_0x26c034=null,_0xdc0921=![];function _0x2e1060(){var _0x4a104c=_0x14a08e;if(_0x445137)_0x445137['style']['displ'+'ay']=_0xdc0921?'':'none';if(_0x4cb57a)_0x4cb57a[_0x4a104c(0x26b)+'onten'+'t']=_0xdc0921?_0x4a104c(0x70e):_0x4a104c(0xaf7);_0x273089['style'][_0x4a104c(0x35d)]=_0xdc0921?'min(5'+_0x4a104c(0x454)+_0x4a104c(0x374):_0x4f1f8a[_0x4a104c(0xb51)],_0x273089[_0x4a104c(0x41c)][_0x4a104c(0x79b)+_0x4a104c(0x541)]=_0xdc0921?_0x4a104c(0x1e3)+'1d':_0x4f1f8a[_0x4a104c(0xb09)];}if(_0x4cb57a)_0x4cb57a[_0x14a08e(0xa32)+'ck']=function(){_0xdc0921=!_0xdc0921,_0x2e1060();};_0x2e1060();if(_0x2fbd2b)_0x2fbd2b[_0x14a08e(0xa32)+'ck']=function(){_0x25f6ae(!![]);};if(_0x16abdb)_0x16abdb['oncli'+'ck']=function(){var _0x4908c7=_0x14a08e,_0x4483ff={'Izfnh':function(_0x197d5f,_0x318949){return _0x197d5f+_0x318949;},'JEsCZ':function(_0x26e857,_0x2679e9){return _0x26e857+_0x2679e9;},'MmSWV':_0x4908c7(0x509)+'red\x20','OetAk':'\x20obje'+_0x4908c7(0x546)+'\x20but\x20'+'read\x20'+_0x4908c7(0x7d6)+_0x4908c7(0x598),'jKyfP':_0x4908c7(0x65e)+'n:\x20'};_0x4f1f8a['GCwFt'](_0x4f1f8a[_0x4908c7(0x574)],_0x4f1f8a['TwskB'])?_0x150be0('snaps'+'hot'):_0xe74a00[_0x4908c7(0x67e)+'ngs'][_0x4908c7(0xaf5)](_0x4483ff['Izfnh'](_0x4483ff['JEsCZ'](_0x4483ff['Izfnh'](_0x4483ff['MmSWV'],_0x144080[_0x4908c7(0x33c)](_0x5bbf90[_0x4908c7(0x95a)+'nces'])['lengt'+'h']),_0x4483ff['OetAk']),_0x2b1c93['lastE'+_0x4908c7(0xaad)]?_0x4483ff['Izfnh'](_0x4483ff['jKyfP'],_0x20659b[_0x4908c7(0x1da)+_0x4908c7(0xaad)]):'No\x20re'+'ad\x20fa'+'iled,'+'\x20so\x20e'+'very\x20'+_0x4908c7(0x68e)+_0x4908c7(0xa06)+_0x4908c7(0xa99)+_0x4908c7(0x9a7)+_0x4908c7(0x4f2)+'e.'));};var _0x425630=![];function _0x4e9910(){_0x354f52['XMjRD'](_0x150be0,_0x354f52['pQqDn'],{'on':_0x425630,'factor':parseFloat(_0x5bde2f['value'])||-0x1808+-0x1bf5+-0x16*-0x25d});}if(_0x2d76a6)_0x2d76a6[_0x14a08e(0xa32)+'ck']=function(){var _0x16ea1a=_0x14a08e;_0x425630=!_0x425630,_0x2d76a6[_0x16ea1a(0x26b)+'onten'+'t']=_0x425630?_0x4f1f8a['afvZB']:_0x4f1f8a[_0x16ea1a(0x5d1)],_0x2d76a6[_0x16ea1a(0x41c)][_0x16ea1a(0x79b)+_0x16ea1a(0x541)]=_0x425630?_0x58bb9b:'trans'+'paren'+'t',_0x2d76a6['style']['color']=_0x425630?_0x4f1f8a[_0x16ea1a(0x508)]:'#f7ee'+'f5',_0x4e9910();};if(_0x5bde2f)_0x5bde2f[_0x14a08e(0x822)+'ut']=function(){if(_0x2f12be)_0x2f12be['textC'+'onten'+'t']=(parseFloat(_0x5bde2f['value'])||0x21*0x23+0x1237*0x2+-0x28f0)['toFix'+'ed'](-0x2485+0xd38+0x174e*0x1)+'x';_0x4e9910();};if(_0x103e09)_0x103e09[_0x14a08e(0xa32)+'ck']=function(){var _0x5add35=_0x14a08e,_0x5e6aaa={'AWvMB':function(_0x19176c,_0x1dda64){return _0x19176c===_0x1dda64;},'WPqOR':function(_0x40e931,_0x207bed){return _0x4f1f8a['sPDgR'](_0x40e931,_0x207bed);},'LdcOZ':function(_0x932da7){return _0x932da7();},'eDdsG':function(_0x4b899f,_0x121ac6){return _0x4b899f(_0x121ac6);},'gFTSI':function(_0x410e0d,_0xa52410){return _0x4f1f8a['eAJqI'](_0x410e0d,_0xa52410);},'NvKpQ':function(_0x3be6f9,_0x4003c8){var _0x1cff4f=_0x1a9a;return _0x4f1f8a[_0x1cff4f(0x5ed)](_0x3be6f9,_0x4003c8);},'uzitC':function(_0x35b056,_0x13c402,_0x37087d){return _0x35b056(_0x13c402,_0x37087d);},'tltiM':_0x5add35(0x7b2),'kMdwq':_0x4f1f8a[_0x5add35(0x6f2)],'GZiSF':_0x5add35(0x6cd)+_0x5add35(0x2f6)},_0x5d7edf=_0x4f1f8a['uPZfk'](_0x2b5402,'\x0a')+(_0x26c034?JSON[_0x5add35(0x8ed)+_0x5add35(0x9d8)](_0x26c034,null,-0xf14+-0xaed+0x1a02):'')+'\x0a'+_0x4e9631,_0x573c93=function(){var _0x1f4000=_0x5add35;if(_0x103e09)_0x103e09[_0x1f4000(0x26b)+_0x1f4000(0xaac)+'t']=_0x1f4000(0x346)+'d';};if(navigator[_0x5add35(0x794)+'oard']&&navigator[_0x5add35(0x794)+'oard'][_0x5add35(0x545)+_0x5add35(0xad3)])navigator['clipb'+_0x5add35(0x67d)][_0x5add35(0x545)+_0x5add35(0xad3)](_0x5d7edf)['then'](_0x573c93,function(){var _0x510263=_0x5add35;if(_0x354f52[_0x510263(0x5f4)]!==_0x354f52['NllGE']){var _0x1aa912=(_0x510263(0x66a)+'|5|7|'+'8|6|2'+'|0')['split']('|'),_0x4c6194=-0x4*-0x224+0x2*-0x129e+0x1cac;while(!![]){switch(_0x1aa912[_0x4c6194++]){case'0':_0x4d460a(_0x510263(0xa65)+'t',{'report':_0x17db08()});continue;case'1':if(_0x5e6aaa['AWvMB'](_0x3b292f,_0x510263(0x859))){_0x145f9e(_0x26e62b&&_0x5e6aaa['WPqOR'](typeof _0x42cc93['on'],'boole'+'an')?_0x4909da['on']:_0x4c39d8['on'],_0x1b8197&&typeof _0x3c5ab8['facto'+'r']===_0x510263(0x480)+'r'?_0x270a69[_0x510263(0x890)+'r']:_0x35658f[_0x510263(0x890)+'r']);return;}continue;case'2':_0x431d08=_0x2956aa;continue;case'3':var _0x224979=_0x5e6aaa['LdcOZ'](_0x2e41ce);continue;case'4':if(_0x9eb340!=='snaps'+_0x510263(0x2bd))return;continue;case'5':var _0x2956aa=_0x5e6aaa['eDdsG'](_0x69900d,_0x224979);continue;case'6':for(var _0x13e9d3 in _0x2956aa){var _0x596869=_0x3dbdc0[_0x13e9d3],_0x41afec=_0x2956aa[_0x13e9d3];if(_0x5e6aaa['gFTSI'](_0x596869,_0x41afec))_0x2b0865['push'](_0x5e6aaa[_0x510263(0x55e)](_0x13e9d3+':\x20',_0x596869)+_0x510263(0x157)+_0x41afec);}continue;case'7':if(!_0x21cc01){_0x4e43d6=_0x2956aa,_0x170c5c=[],_0x5e6aaa['uzitC'](_0xed4039,'repor'+'t',{'report':_0x5e6aaa[_0x510263(0x1f7)](_0x17fe75)});return;}continue;case'8':_0x1e22b5=[];continue;}break;}}else _0x322035();});else _0x4f1f8a[_0x5add35(0xb01)](_0x322035);function _0x322035(){var _0x4afd9c=_0x5add35,_0x30fb61={'nkgZY':function(_0x44bf0c,_0x30fb84,_0x2a7e3c){return _0x5e6aaa['uzitC'](_0x44bf0c,_0x30fb84,_0x2a7e3c);},'QXGCS':function(_0x1c1b89,_0x3cfe89){return _0x1c1b89+_0x3cfe89;}};if(_0x5e6aaa[_0x4afd9c(0x876)](_0x5e6aaa['tltiM'],_0x4afd9c(0x7b2))){var _0x420bbc=_0x5e6aaa[_0x4afd9c(0xb13)][_0x4afd9c(0xaed)]('|'),_0x4e9ed2=-0x1a7d*0x1+0xf0*0x1a+0x21d;while(!![]){switch(_0x420bbc[_0x4e9ed2++]){case'0':_0x3ee751[_0x4afd9c(0x544)+'t']();continue;case'1':_0x3ee751[_0x4afd9c(0x9d9)+'e']();continue;case'2':var _0x3ee751=document[_0x4afd9c(0x47e)+_0x4afd9c(0x27a)+_0x4afd9c(0x141)](_0x5e6aaa[_0x4afd9c(0x8cd)]);continue;case'3':document['body'][_0x4afd9c(0x91c)+_0x4afd9c(0x31c)+'d'](_0x3ee751);continue;case'4':try{document['execC'+'omman'+'d']('copy'),_0x573c93();}catch(_0x253c17){}continue;case'5':_0x3ee751[_0x4afd9c(0x520)]=_0x5d7edf;continue;case'6':if(!document[_0x4afd9c(0x54b)])return;continue;}break;}}else{var _0x5caac8=_0x30fb61[_0x4afd9c(0x990)](_0x425dd5,_0x30fb61[_0x4afd9c(0x9eb)](_0x233646,_0xa89304(_0x24e70e[_0x4e4c26][-0x75d+-0x2013+0x2770],0x2150+0x1f6f+-0x40af)),_0x4afd9c(0x671));if(_0x5caac8!==_0x4af2ab)_0x591518[_0x4afd9c(0x8d5)][_0x391386[_0x210c26][0xbd+-0x189b*0x1+0x17df]]=_0x5caac8;}}};_0x4f1f8a[_0x14a08e(0x777)](setTimeout,function(){var _0x5f4945=_0x14a08e;if(_0x26c034)return;if(!_0x7bc76e||!_0x1ec513)return;_0x7bc76e[_0x5f4945(0x26b)+_0x5f4945(0xaac)+'t']=_0x5f4945(0x7fc)+_0x5f4945(0x723)+'after'+_0x5f4945(0x296)+_0x5f4945(0x333)+_0x5f4945(0x573)+_0x5f4945(0x41f)+'ected'+'?',_0x7bc76e[_0x5f4945(0x41c)][_0x5f4945(0x390)]='#ffb3'+'c7',_0x1ec513['textC'+_0x5f4945(0xaac)+'t']=_0x4f1f8a[_0x5f4945(0x1c0)](_0x4f1f8a['PPkOK'](_0x4f1f8a[_0x5f4945(0x8c9)],_0x4f1f8a[_0x5f4945(0x992)])+(_0x5f4945(0x4d9)+'e\x20rem'+_0x5f4945(0x5af)+'g\x20sus'+_0x5f4945(0xb07)+_0x5f4945(0x2ac)+'\x0a\x0a')+(_0x5f4945(0x686)+_0x5f4945(0x341)+_0x5f4945(0x75f)+_0x5f4945(0x7a3)+'\x20not\x20'+'injec'+_0x5f4945(0xb77)+'into\x20'+'the\x20c'+_0x5f4945(0x130)+_0x5f4945(0x23d)+_0x5f4945(0x77d)+_0x5f4945(0x36e))+(_0x5f4945(0x47c)+_0x5f4945(0x453)+_0x5f4945(0x1a0)+'as\x20no'+'t\x20bee'+_0x5f4945(0x681)+_0x5f4945(0x8c6)+'\x20sinc'+_0x5f4945(0x6ba)+_0x5f4945(0x549)+_0x5f4945(0xb0d))+_0x4f1f8a[_0x5f4945(0x87d)]+_0x4f1f8a[_0x5f4945(0xa0b)],_0x5f4945(0x4f7)+'d\x20the'+_0x5f4945(0x966)+_0x5f4945(0x9b4)+_0x5f4945(0x1a5)+_0x5f4945(0xb0a)+_0x5f4945(0x854)+'\x20this'+_0x5f4945(0x2e0)+_0x5f4945(0x3ef)+'in.');},-0x9420+0x14ae8+0x3398);var _0x683899={'set':function(_0x1c9fc9){var _0x43f472=_0x14a08e,_0x28609e={'UagdA':function(_0x2f7123,_0x1de8ce){return _0x2f7123+_0x1de8ce;},'sRlWp':_0x43f472(0x23f)};_0x26c034=_0x1c9fc9;if(_0x103e09)_0x103e09['style']['displ'+'ay']='';if(_0x4cfeaf){var _0x4b97ed=(_0x43f472(0x4c1)+'|1|3')[_0x43f472(0xaed)]('|'),_0x2c140f=-0xe*-0xca+0x792+-0x129e;while(!![]){switch(_0x4b97ed[_0x2c140f++]){case'0':var _0x2b06e6=_0x1c9fc9[_0x43f472(0x40d)+'on']||'';continue;case'1':_0x4cfeaf['style'][_0x43f472(0x390)]=_0x2b06e6===_0x5a7c6c?_0x58bb9b:_0x43f472(0xa13)+'74';continue;case'2':var _0x5a7c6c=_0x44f6f9;continue;case'3':_0x4cfeaf[_0x43f472(0x41c)][_0x43f472(0x4d1)+'rColo'+'r']=_0x354f52[_0x43f472(0x5d3)](_0x2b06e6,_0x5a7c6c)?_0x43f472(0x79d)+'255,1'+_0x43f472(0xa26)+'7,.35'+')':_0x354f52['ALaqQ'];continue;case'4':_0x4cfeaf['textC'+_0x43f472(0xaac)+'t']=_0x354f52[_0x43f472(0xada)]('v',_0x1c9fc9[_0x43f472(0x40d)+'on']||'?');continue;}break;}}var _0x3fcf9c=_0x1c9fc9[_0x43f472(0x95a)+'nces']&&_0x1c9fc9['insta'+'nces'][_0x43f472(0x531)+_0x43f472(0x2fb)+_0x43f472(0x27d)],_0xcffc44=Math[_0x43f472(0x541)]((_0x1c9fc9['elaps'+_0x43f472(0x988)]||-0x254c+0xcff+0x184d)/(0x233f*-0x1+0x2031*0x1+0x6f6));if(_0x7bc76e){var _0x533293,_0x2b11a5;if(_0x3fcf9c&&_0x1c9fc9['surve'+'y']&&_0x1c9fc9[_0x43f472(0x18f)+'y'][_0x43f472(0x531)+_0x43f472(0x2fb)+_0x43f472(0x27d)])_0x533293=_0x354f52[_0x43f472(0xa39)](_0x43f472(0x3ba)+'·\x20',Object['keys'](_0x1c9fc9[_0x43f472(0x95a)+_0x43f472(0x47f)])['lengt'+'h'])+('\x20obje'+'cts\x20·'+'\x20')+_0xcffc44+'s',_0x2b11a5=_0x43f472(0x99b)+'a8';else{if(_0x354f52['devSK'](_0x1c9fc9['hooks'+_0x43f472(0x34d)+'ed'],-0x1326+-0x14c7+-0x27ed*-0x1))'gGuqx'==='gGuqx'?(_0x533293='hooks'+_0x43f472(0x2c5)+'d\x20·\x20'+_0xcffc44+'s',_0x2b11a5=_0x43f472(0x548)+'8a'):(_0x5be5d6['fov']=_0x6eb93e,_0x276fe9());else{if(_0x1c9fc9[_0x43f472(0x44f)+_0x43f472(0x5d2)]){if(_0x354f52[_0x43f472(0x79c)](_0x354f52['TBiIk'],_0x354f52['BQhGz']))_0x533293=_0x43f472(0x494)+_0x43f472(0xa59)+_0x43f472(0x32a)+'·\x20'+_0xcffc44+'s',_0x2b11a5=_0x43f472(0x548)+'8a';else{var _0x5ddd7f={'IwEYO':function(_0x36f12f,_0x406b9b){return _0x36f12f+_0x406b9b;},'KWEXy':function(_0x14a486,_0x287b78){return _0x14a486+_0x287b78;}},_0x2c31b5=_0x3368cf(_0x354f52['yttMu'],'sk-no'+'te',_0x354f52[_0x43f472(0x18d)](_0x354f52[_0x43f472(0x176)],_0x31a504['slice'](0x67*-0x5b+0xf1+0x23ac,0x2220+0x883*-0x1+-0x1*0x1999)[_0x43f472(0x796)](function(_0x5c31a0){var _0x2aa003=_0x43f472;return _0x5ddd7f[_0x2aa003(0x45b)](_0x5ddd7f[_0x2aa003(0x5c0)]('0x',_0x5c31a0['o']<0x3f*-0x2c+0x41b*0x1+0x1*0x6b9?'?':_0x5c31a0['o'][_0x2aa003(0x71d)+_0x2aa003(0x3f0)](0x2385+0xfa*0xf+0x65*-0x7f))+'\x20(',_0x5c31a0['why'])+')';})[_0x43f472(0x633)]('\x20\x20')));_0x442676['body'][_0x43f472(0x91c)+_0x43f472(0x31c)+'d'](_0x2c31b5);}}else _0x533293=(_0x1c9fc9['arm']&&_0x1c9fc9[_0x43f472(0x91b)]['ok']?_0x354f52[_0x43f472(0x387)]:_0x354f52[_0x43f472(0xb37)])+_0xcffc44+'s',_0x2b11a5=_0x43f472(0x548)+'8a';}}_0x7bc76e[_0x43f472(0x26b)+'onten'+'t']=_0x533293,_0x7bc76e[_0x43f472(0x41c)][_0x43f472(0x390)]=_0x2b11a5;}_0xeb6fbc&&(_0xeb6fbc['textC'+_0x43f472(0xaac)+'t']=_0x1c9fc9[_0x43f472(0x27b)]&&_0x1c9fc9[_0x43f472(0x27b)][_0x43f472(0x6c4)+'h']?_0x43f472(0xab5)+'vs\x20sn'+_0x43f472(0xaee)+_0x43f472(0xa50)+_0x1c9fc9[_0x43f472(0x27b)]['join'](',\x20'):'F9\x20tw'+'ice\x20w'+_0x43f472(0x431)+'walki'+'ng\x20/\x20'+'sprin'+'ting\x20'+_0x43f472(0x325)+_0x43f472(0x86c)+'marks'+_0x43f472(0x94c)+'h\x20fie'+_0x43f472(0x254)+'\x20whic'+'h.');if(_0x1c9fc9[_0x43f472(0x859)]&&_0x2d76a6){if(_0x354f52[_0x43f472(0x5d3)](_0x354f52['qaKtz'],_0x354f52['Nvcvc'])){var _0x793ff8=_0x71e3af[_0x2b79aa];for(var _0x35d9b4=-0x1*0x1fbb+0x45d*0x7+0x26*0x8;_0x35d9b4<_0x793ff8['lengt'+'h'];_0x35d9b4++){_0x52f349[_0x28609e[_0x43f472(0x1db)](_0x1106b6,_0x28609e['sRlWp'])+_0x793ff8[_0x35d9b4]['o'][_0x43f472(0x71d)+'ing'](-0x2*0xfd6+0x281+0x1d3b)]=_0x793ff8[_0x35d9b4]['v'];}}else _0x425630=!!_0x1c9fc9[_0x43f472(0x859)]['on'],_0x2d76a6['textC'+'onten'+'t']=_0x425630?_0x354f52['WWWfG']:_0x43f472(0x456)+'\x20off',_0x2d76a6[_0x43f472(0x41c)][_0x43f472(0x79b)+'round']=_0x425630?_0x58bb9b:_0x43f472(0x76a)+_0x43f472(0x3c6)+'t',_0x2d76a6[_0x43f472(0x41c)]['color']=_0x425630?'#2a0f'+'1b':_0x354f52[_0x43f472(0x97e)],_0x2f12be&&_0x1c9fc9[_0x43f472(0x859)][_0x43f472(0x890)+'r']&&(_0x354f52[_0x43f472(0x5d3)]('iKmcG',_0x354f52['XnQdS'])?_0x2f12be[_0x43f472(0x26b)+_0x43f472(0xaac)+'t']=Number(_0x1c9fc9[_0x43f472(0x859)][_0x43f472(0x890)+'r'])['toFix'+'ed'](0x23*-0x7f+-0x1fc9*-0x1+-0xe6b*0x1)+'x':_0x4ca2af['on']=![]);}if(_0x1ec513)try{if(_0x43f472(0x753)!==_0x354f52[_0x43f472(0x181)])_0x1ec513['textC'+_0x43f472(0xaac)+'t']=_0x354f52[_0x43f472(0x72c)](_0x1f1af1,_0x1c9fc9);else try{_0x997e60=_0xe3bbc6['keys'](_0x5dd93e)[_0x43f472(0x57b)](-0x257*-0x1+0x2392+-0x25e9*0x1,-0x9de+0x6c+0x98a);}catch(_0x33b23c){}}catch(_0x2ca432){_0x1ec513[_0x43f472(0x26b)+'onten'+'t']=JSON[_0x43f472(0x8ed)+_0x43f472(0x9d8)](_0x1c9fc9,null,-0x7*0x55b+-0x100f+0x358d);}console['log'](_0x354f52[_0x43f472(0x2a4)],_0x43f472(0x390)+':'+_0x58bb9b+(_0x43f472(0x6a0)+_0x43f472(0xac6)+'ht:70'+'0'),_0x1c9fc9),console[_0x43f472(0x564)](_0x354f52[_0x43f472(0x9ca)](_0x2b5402,'\x0a')+JSON[_0x43f472(0x8ed)+'gify'](_0x1c9fc9,null,-0x571+-0x399*-0x1+0x1d9)+'\x0a'+_0x4e9631);}};return _0x273089['datas'+'et'][_0x14a08e(0x4e5)]='1',_0x273089[_0x14a08e(0x4e5)]=_0x683899,_0x683899;}function _0x1f1af1(_0x1ef117){var _0x75c072=_0x363400,_0x4e0ae2={'nmqFY':function(_0x2dab31,_0x3557a1){return _0x2dab31*_0x3557a1;}};if(_0x4f1f8a[_0x75c072(0x3d9)](_0x75c072(0xb61),_0x75c072(0x74f))){var _0x4a6f04=_0x5dd35a[_0x4f823e][_0x75c072(0xa4a)]||[_0x4a1292[_0x12bb74]['v'],0x257e+-0x7fd+-0x1d81,0x195c+-0x15bf+0x25*-0x19];return _0x4a6f04[_0x75c072(0x796)](function(_0x3f642a){var _0xa6b7d=_0x75c072;return _0x165400[_0xa6b7d(0x541)](_0x4e0ae2['nmqFY'](_0x3f642a,-0x1*-0x7af+0x333+-0x9e*0x11))/(-0xa02+0x2*0xa11+-0x9bc);})[_0x75c072(0x633)]('\x20\x20');}else{var _0x4fe4b9=[];_0x4fe4b9[_0x75c072(0xaf5)](_0x4f1f8a[_0x75c072(0x2d7)](_0x4f1f8a[_0x75c072(0x239)]('frame'+'\x20\x20\x20\x20',_0x1ef117[_0x75c072(0x3a4)]||'?'),_0x75c072(0x689))+Math[_0x75c072(0x541)](_0x4f1f8a['mDeOQ'](_0x1ef117[_0x75c072(0x972)+'edMs']||-0x2292+-0x1*0xd15+0x2fa7,0x47d*-0x6+0x59a+0x44*0x5f))+'s)'),_0x4fe4b9['push'](_0x4f1f8a['uCXWG'](_0x75c072(0x5b7)+'\x20\x20\x20\x20'+(_0x1ef117['uwmk']?_0x4f1f8a[_0x75c072(0xb06)]:'no'),_0x75c072(0x38f)+'ntext'+'\x20')+(_0x1ef117[_0x75c072(0x5cb)+'pCont'+_0x75c072(0x80c)]?_0x4f1f8a[_0x75c072(0xb06)]:'no')+_0x4f1f8a[_0x75c072(0x7fd)]+(_0x1ef117[_0x75c072(0x841)+_0x75c072(0x377)]!=null?_0x1ef117[_0x75c072(0x841)+_0x75c072(0x377)]:'?')),_0x4fe4b9[_0x75c072(0xaf5)](_0x4f1f8a['AJyhx']+_0x1ef117[_0x75c072(0x4a9)+'Appli'+'ed']+'/'+_0x1ef117[_0x75c072(0x4a9)+_0x75c072(0x3c0)]+_0x4f1f8a[_0x75c072(0xa83)]),_0x4fe4b9['push']('');var _0x5df6df=_0x1ef117['insta'+_0x75c072(0x47f)]||{},_0x553d53=Object['keys'](_0x5df6df);!_0x553d53[_0x75c072(0x6c4)+'h']&&(_0x4fe4b9[_0x75c072(0xaf5)](_0x75c072(0x345)+_0x75c072(0x8b6)+_0x75c072(0x5ef)+_0x75c072(0x428)+_0x75c072(0x696)+_0x75c072(0x899)),_0x4fe4b9['push'](''),_0x4fe4b9['push']('The\x20h'+_0x75c072(0x4e4)+'fire\x20'+_0x75c072(0x4de)+'e\x20gam'+_0x75c072(0x88d)+_0x75c072(0x7cb)+_0x75c072(0x528)+');\x20no'+_0x75c072(0x276)+_0x75c072(0x428)+_0x75c072(0x696)+_0x75c072(0x4f5)),_0x4fe4b9[_0x75c072(0xaf5)](_0x4f1f8a[_0x75c072(0x60b)]));for(var _0x4b61ab=0x8a6+-0x1e7*-0x12+-0x2ae4;_0x4b61ab<_0x553d53['lengt'+'h'];_0x4b61ab++){if(_0x4f1f8a['SnPdx'](_0x4f1f8a['JEidA'],_0x75c072(0x803))){var _0x30e2ad=_0x553d53[_0x4b61ab];_0x4fe4b9[_0x75c072(0xaf5)](_0x4f1f8a['kUFHN'](_0x30e2ad,_0x75c072(0x8a2))+_0x5df6df[_0x30e2ad]);}else _0x520664['xyz']=_0x2db6b4,_0x44802d['v']=_0x1f24f7[-0x5ab*-0x2+-0x2*-0x541+-0x15d8];}_0x4fe4b9[_0x75c072(0xaf5)]('');var _0x270456=_0x1ef117['surve'+'y']||{},_0x2bac8e=Object[_0x75c072(0x33c)](_0x270456);for(var _0x46e294=-0x209b*-0x1+-0x1de*0x6+-0x1567;_0x4f1f8a[_0x75c072(0x70a)](_0x46e294,_0x2bac8e[_0x75c072(0x6c4)+'h']);_0x46e294++){var _0x1c01ab=_0x2bac8e[_0x46e294],_0x142e13=_0x270456[_0x1c01ab];if(!_0x142e13||!_0x142e13[_0x75c072(0x6c4)+'h'])continue;_0x4fe4b9['push'](_0x4f1f8a['iMjtE']('──\x20'+_0x1c01ab,'\x20')+new Array(Math[_0x75c072(0xa63)](-0x40+0xb*0x341+-0x11c5*0x2,_0x4f1f8a[_0x75c072(0x138)](0x1e74+0x13c+-0x482*0x7,_0x1c01ab['lengt'+'h'])))[_0x75c072(0x633)]('─')),_0x4fe4b9['push'](_0x4f1f8a[_0x75c072(0xad7)]);for(var _0x40b067=0x2fa+-0x1*-0xeb9+0x17*-0xc5;_0x4f1f8a['xTPrR'](_0x40b067,_0x142e13[_0x75c072(0x6c4)+'h']);_0x40b067++){if(_0x4f1f8a[_0x75c072(0x3c3)]===_0x75c072(0x142))_0x4f3277();else{var _0x3d2a62=_0x142e13[_0x40b067],_0x599848=typeof _0x3d2a62['v']==='numbe'+'r'?Math[_0x75c072(0x541)](_0x4f1f8a[_0x75c072(0x300)](_0x3d2a62['v'],-0x1108+0xf86+0xe7*0x6))/(-0x13c+-0x2b*0x7b+0x19cd):_0x3d2a62['v'];_0x4fe4b9[_0x75c072(0xaf5)](_0x4f1f8a[_0x75c072(0x5ed)](_0x4f1f8a[_0x75c072(0x7a4)]('\x20\x20'+('0x'+_0x3d2a62['o'][_0x75c072(0x71d)+'ing'](-0x157*-0x4+-0x4f7*0x1+0x55*-0x1))[_0x75c072(0x6c6)+'d'](0x9*0x2c7+-0x2165+-0x86e*-0x1)+'\x20',_0x3d2a62['k'][_0x75c072(0x6c6)+'d'](-0x20ce+-0x96+0x1b*0x13d))+'\x20'+_0x4f1f8a[_0x75c072(0x68d)](String,_0x599848)[_0x75c072(0x6c6)+'d'](0x702+-0x152f+0xe3d),'\x20')+(_0x3d2a62[_0x75c072(0x661)]||''));}}_0x4fe4b9[_0x75c072(0xaf5)]('');}if(_0x1ef117[_0x75c072(0x67e)+'ngs']&&_0x1ef117[_0x75c072(0x67e)+_0x75c072(0xb19)][_0x75c072(0x6c4)+'h']){_0x4fe4b9['push']('warni'+_0x75c072(0xb19));for(var _0x561120=-0x1795*-0x1+0x1c95+-0x342a;_0x561120<_0x1ef117[_0x75c072(0x67e)+_0x75c072(0xb19)][_0x75c072(0x6c4)+'h'];_0x561120++)_0x4fe4b9[_0x75c072(0xaf5)](_0x4f1f8a[_0x75c072(0x5ed)](_0x4f1f8a[_0x75c072(0x8a7)],_0x1ef117[_0x75c072(0x67e)+'ngs'][_0x561120]));}return _0x4fe4b9['join']('\x0a');}}window[_0x363400(0xacb)+_0x363400(0x7e1)+_0x363400(0x3b8)+'r'](_0x4f1f8a[_0x363400(0x88b)],function(_0xeac83c){var _0x425347=_0x363400,_0x479a5e=_0xeac83c['data'];if(!_0x479a5e||_0x479a5e['__sak'+_0x425347(0x70f)]!==_0x17603b)return;try{if(_0x4f1f8a[_0x425347(0x440)](_0x479a5e[_0x425347(0x4b2)],'hello')){if(_0x4f1f8a[_0x425347(0x933)]===_0x4f1f8a['UEmBt']){_0x59c863()[_0x425347(0x2c9)]({'host':_0x479a5e[_0x425347(0x3a4)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}else _0x905190['clipb'+'oard']['write'+'Text'](_0x48a2bd)[_0x425347(0x46f)](_0x44d667,function(){_0x178546();});}if(_0x479a5e[_0x425347(0x4b2)]===_0x4f1f8a[_0x425347(0x649)])_0x59c863()['set'](_0x479a5e[_0x425347(0xa65)+'t']);}catch(_0x4a11d3){console['warn'](_0x425347(0x231)+_0x425347(0x8dd)+_0x425347(0x2e0)+_0x425347(0x4d4)+_0x425347(0x740)+'ailed',_0x4f1f8a[_0x425347(0x919)]('color'+':',_0x58bb9b),_0x4a11d3);}});function _0x108c6e(){if(_0xbadeb3()){_0x25f6ae(!![]);return;}_0x4f1f8a['BmZOn'](_0x59c863);}if(document['body'])_0x108c6e();else document[_0x363400(0xacb)+_0x363400(0x7e1)+_0x363400(0x3b8)+'r'](_0x363400(0x295)+_0x363400(0x8e1)+'Loade'+'d',_0x108c6e,{'once':!![]});return;}window[_0x363400(0x3ae)+_0x363400(0x99e)+_0x363400(0x16e)]=window['__SAK'+'URA_S'+'W__']||{'at':Date['now']()};function _0x54f8eb(_0x71ae30,_0x51900d){var _0x3436eb=_0x363400,_0x1b44fa={'__sakura':_0x17603b,'kind':_0x71ae30};if(_0x51900d){for(var _0x52b8c0 in _0x51900d)_0x1b44fa[_0x52b8c0]=_0x51900d[_0x52b8c0];}try{if(window['paren'+'t']&&_0x4f1f8a[_0x3436eb(0x282)](window[_0x3436eb(0x3c6)+'t'],window))window[_0x3436eb(0x3c6)+'t']['postM'+_0x3436eb(0x30f)+'e'](_0x1b44fa,'*');}catch(_0x1878b9){}try{if(window['top']&&window['top']!==window)window['top']['postM'+'essag'+'e'](_0x1b44fa,'*');}catch(_0x4f80ea){}}console[_0x363400(0x564)](_0x4f1f8a['UyWht'](_0x363400(0x231)+'kura]'+_0x363400(0x9d1)+_0x363400(0x77c)+'\x20ACTI'+'VE\x20v',_0x44f6f9),_0x4f1f8a[_0x363400(0x129)](_0x363400(0x390)+':',_0x58bb9b)+_0x4f1f8a[_0x363400(0x6c8)],{'host':_0x5581ad,'href':location['href'],'version':_0x44f6f9}),_0x4f1f8a[_0x363400(0xa37)](_0x54f8eb,_0x4f1f8a['AapQM'],{'host':_0x5581ad,'role':_0x514eb8});var _0x3bf38d=window['__SAK'+_0x363400(0x99e)+'W__']&&window[_0x363400(0x3ae)+_0x363400(0x99e)+'W__']['at']||Date[_0x363400(0x5bc)]();window[_0x363400(0xacb)+'entLi'+_0x363400(0x3b8)+'r']('messa'+'ge',function(_0x476fad){var _0x42669e=_0x363400;if('dfzHA'===_0x4f1f8a['IOUtg'])try{var _0x3bd0ec=_0x476fad&&_0x476fad[_0x42669e(0x3d6)];if(!_0x3bd0ec||_0x4f1f8a['CjhiY'](_0x3bd0ec[_0x42669e(0x92f)+'ura'],_0x17603b)||_0x3bd0ec[_0x42669e(0x4b2)]!=='cmd')return;_0x2dddd8(_0x3bd0ec[_0x42669e(0x703)],_0x3bd0ec['arg']);}catch(_0x56c9d5){}else return _0x34dda8[_0x42669e(0x776)+'e']='Runti'+'me._g'+_0x42669e(0x968),_0x559220;});try{var _0x3d2984=new BroadcastChannel(_0x363400(0x1cb)+_0x363400(0x8c4));_0x3d2984['onmes'+_0x363400(0x307)]=function(_0x3f5d56){var _0x263226=_0x363400,_0x1ed81d=_0x3f5d56[_0x263226(0x3d6)];if(_0x1ed81d&&_0x1ed81d[_0x263226(0x92f)+'ura']===_0x17603b&&_0x4f1f8a[_0x263226(0x496)](_0x1ed81d[_0x263226(0x4b2)],_0x4f1f8a['hSEiT']))_0x4f1f8a['taJxO'](_0x2dddd8,_0x1ed81d[_0x263226(0x703)],_0x1ed81d[_0x263226(0x4ea)]);};}catch(_0x5d44b6){}var _0xd60d6f=[];(function _0x2fe2ae(){var _0x1b37f5=_0x363400,_0x56a967={'ZURTz':function(_0x27246a,_0x264fb4){return _0x4f1f8a['YcsmG'](_0x27246a,_0x264fb4);},'UidvA':function(_0xaab7f1,_0x403aa2){return _0x4f1f8a['SnPdx'](_0xaab7f1,_0x403aa2);},'gdlYD':function(_0x504aee,_0x4c8ef2){return _0x4f1f8a['bzlzB'](_0x504aee,_0x4c8ef2);}},_0x2fbc94=[_0x4f1f8a[_0x1b37f5(0x597)],_0x4f1f8a[_0x1b37f5(0x251)],_0x1b37f5(0xb1d),_0x1b37f5(0x8ca),_0x4f1f8a['AwtDR']];for(var _0x590a33=-0x147e+0x1b80+-0x702;_0x590a33<_0x2fbc94['lengt'+'h'];_0x590a33++){(function(_0x25e8d8){var _0x3fb4c0=_0x1b37f5;if(_0x4f1f8a[_0x3fb4c0(0x440)](_0x3fb4c0(0xafa),_0x4f1f8a[_0x3fb4c0(0x4a0)])){var _0x296048=console[_0x25e8d8];if(_0x4f1f8a[_0x3fb4c0(0x675)](typeof _0x296048,_0x4f1f8a[_0x3fb4c0(0x132)]))return;console[_0x25e8d8]=function(){var _0x25f359=_0x3fb4c0;if(_0x56a967['ZURTz'](_0x25f359(0x9dd),'WUpeL')){try{var _0x4a5891='';for(var _0x4ecf5d=-0x1*0x4a2+0x1b15*-0x1+-0x1*-0x1fb7;_0x4ecf5d<arguments[_0x25f359(0x6c4)+'h'];_0x4ecf5d++){var _0x2c25a6=arguments[_0x4ecf5d];if(typeof _0x2c25a6===_0x25f359(0x8ed)+'g')_0x4a5891+=_0x2c25a6;else{if(_0x2c25a6&&_0x2c25a6[_0x25f359(0x8a3)+'ge'])_0x4a5891+=_0x2c25a6[_0x25f359(0x8a3)+'ge'];}}if(_0x56a967[_0x25f359(0x150)](_0x4a5891[_0x25f359(0x79a)+'Of'](_0x2b5402),-(-0xe9*0x13+-0x8b0+-0x1*-0x19fc)))return _0x296048['apply'](console,arguments);if(_0x4a5891[_0x25f359(0x79a)+'Of'](_0x25f359(0x198)+'WebMo'+'dkit')!==-(0x17*0x106+0x26d4+0x203*-0x1f)){var _0xd0878e=_0x4a5891[_0x25f359(0x57b)](0x164d+0x2399+-0x39e6,-0x32e+0x2152+-0x1cf8);if(_0xd60d6f[_0x25f359(0x79a)+'Of'](_0xd0878e)===-(-0x1*-0x1537+0x1709+-0x2c3f)&&_0x56a967[_0x25f359(0x152)](_0xd60d6f['lengt'+'h'],-0x1372+-0xd18+0x20c6))_0xd60d6f['push'](_0xd0878e);}}catch(_0x29ece2){}return _0x296048[_0x25f359(0x77b)](console,arguments);}else return null;};}else _0x3eb880();}(_0x2fbc94[_0x590a33]));}}());var _0x3f4793={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x2f660b=null,_0x14b6a0=null,_0x137bd4=-(-0x8e5+-0x7b4+0x109a),_0x374ecb=null;function _0x1ee43d(_0x5efc78){var _0x47e4ac=_0x363400;if(_0x4f1f8a[_0x47e4ac(0x3e8)](_0x4f1f8a[_0x47e4ac(0x2a3)],'FIJyD'))try{var _0x422fe3=('1|3|2'+_0x47e4ac(0x451)+'5')['split']('|'),_0x48f80c=0x15ad+0x1f62+-0x11*0x31f;while(!![]){switch(_0x422fe3[_0x48f80c++]){case'0':var _0x59d532=_0x3bfbc4['memor'+'y'];continue;case'1':if(!_0x5efc78)return;continue;case'2':if(!_0x3bfbc4)return;continue;case'3':var _0x3bfbc4=_0x5efc78[_0x47e4ac(0x95a)+_0x47e4ac(0x3b2)]?_0x5efc78['insta'+'nce'][_0x47e4ac(0x6b6)+'ts']:_0x5efc78['expor'+'ts']||null;continue;case'4':if(!_0x374ecb)try{_0x374ecb=Object[_0x47e4ac(0x33c)](_0x3bfbc4)['slice'](0xb8a+-0xfa4+-0xaf*-0x6,-0x523+-0x6f2+0x40f*0x3);}catch(_0x4221ba){}continue;case'5':_0x59d532&&_0x59d532['buffe'+'r']&&_0x4f1f8a[_0x47e4ac(0xa5b)](_0x59d532['buffe'+'r']['byteL'+'ength'],-0x1def*0x1+-0xbfd+0x29ec)&&(_0x14b6a0=_0x59d532,_0x137bd4=Date[_0x47e4ac(0x5bc)]()-_0x3bf38d);continue;}break;}}catch(_0xfb84de){}else{var _0x32c501=_0x18e77c[_0xfed049],_0x1c5816=_0x4f1f8a['MLkxQ'](_0x474505,_0x3cf389,_0x8d83ff,_0x32c501['size']);if(!_0x1c5816)return![];var _0x154bd7=new _0x4c7d1a(_0x1c5816[_0x47e4ac(0x9a9)+'r'],_0x1c5816[_0x47e4ac(0x722)+'ffset'],_0x1c5816[_0x47e4ac(0x8de)+_0x47e4ac(0xafc)]),_0x298b7c=_0x4f1f8a['ZUsuq'](_0x32c501['keyTy'+'pe'],'u8')?_0x154bd7['getUi'+_0x47e4ac(0x476)](_0x32c501['key']):_0x154bd7['getIn'+_0x47e4ac(0x79f)](_0x32c501['key'],!![]),_0x46edef;if(_0x22a04c==='obfF')_0x46edef=_0x4f1f8a['ICXJe'](_0x1d9582,_0x43ab11);else{if(_0x3645d2===_0x47e4ac(0x128))_0x46edef=_0x4f1f8a[_0x47e4ac(0x4d5)](_0x145f74,-0x2622+0x1b10+0xb12);else _0x46edef=_0x4f1f8a[_0x47e4ac(0x4f3)](_0x405610?0xb47*0x3+0x1aa0+-0x3c74:-0x1e23+-0x22a1+0x14*0x33d,0x1e10+0x1*0x16cd+-0x33de);}return _0x23c448(_0x4f1f8a[_0x47e4ac(0x1c0)](_0x4f1f8a['Vgerm'](_0x2d5833,_0xfe4677),_0x32c501[_0x47e4ac(0x23e)+'n']),_0x47e4ac(0x671),_0x4f1f8a[_0x47e4ac(0x798)](_0x46edef,_0x298b7c))&&_0x4f1f8a[_0x47e4ac(0x618)](_0x44198a,_0x4f1f8a[_0x47e4ac(0x756)](_0x4f1f8a[_0x47e4ac(0x2d6)](_0x5c2807,_0xf94449),_0x32c501['fake']),_0x3c5e2d==='obfF'?'f32':_0x4f1f8a['sPDgR'](_0x303fc6,_0x47e4ac(0x128))?_0x47e4ac(0x671):'u8',_0x4f1f8a['RXtyL'](_0x15d5ca,_0x4f1f8a[_0x47e4ac(0x7a1)])?_0xd5f37a:_0x1e76d4===_0x47e4ac(0x128)?_0x21ad19|0x352*-0x6+-0x5da+0x19c6:_0x4786f4?0x2b*0xa7+0x1733+-0x333f:-0xf+-0x2592+0x27*0xf7)&&_0x4f1f8a['MLkxQ'](_0xfe7fa2,_0x4f1f8a[_0x47e4ac(0xb52)](_0x4f1f8a['TNScW'](_0x117207,_0x515b76),_0x32c501[_0x47e4ac(0x48a)+'e']),'u8',0x1*0x1e3d+-0x1cb2+0x18b*-0x1);}}function _0x394c76(){var _0x16cdce=_0x363400,_0x3425a0={'ftnCY':'dvUIA','VFxoM':_0x16cdce(0x1de)};try{if(typeof WebAssembly===_0x4f1f8a['XBdxQ'])return;var _0x14dec3=['insta'+_0x16cdce(0x50b)+'e',_0x4f1f8a[_0x16cdce(0x951)]];for(var _0x50f4da=0x1e49*0x1+-0x1e18+-0x31;_0x50f4da<_0x14dec3['lengt'+'h'];_0x50f4da++){if(_0x4f1f8a['ReZOu'](_0x16cdce(0x622),_0x4f1f8a['YsFJj']))(function(_0x4c4b80){var _0x34e431=_0x16cdce,_0x23fb43={'bwUuw':function(_0x17b429,_0x5e17da){return _0x17b429(_0x5e17da);}};if(_0x34e431(0x6a8)!==_0x3425a0[_0x34e431(0x90a)]){var _0x5ca409=WebAssembly[_0x4c4b80];if(typeof _0x5ca409!==_0x34e431(0x283)+_0x34e431(0x398)||_0x5ca409[_0x34e431(0x92f)+_0x34e431(0x9a6)+_0x34e431(0x32d)+'ap'])return;var _0x34559a=function(){var _0x4b7f1d=_0x34e431,_0x28e3fc=_0x5ca409[_0x4b7f1d(0x77b)](this,arguments);try{if(_0x28e3fc&&typeof _0x28e3fc[_0x4b7f1d(0x46f)]===_0x4b7f1d(0x283)+_0x4b7f1d(0x398))_0x28e3fc['then'](_0x1ee43d,function(){});else _0x1ee43d(_0x28e3fc);}catch(_0x346612){}return _0x28e3fc;};_0x34559a[_0x34e431(0x92f)+_0x34e431(0x9a6)+_0x34e431(0x32d)+'ap']=!![];try{if(_0x3425a0['VFxoM']!=='OltnO')Object['defin'+_0x34e431(0x2ab)+'erty'](_0x34559a,_0x34e431(0x8b8),{'value':_0x5ca409[_0x34e431(0x8b8)],'configurable':!![]});else{_0x23fb43['bwUuw'](_0x134987,![]),_0x42fc5f(_0x137f5a,0x382*-0x4+-0x2413+-0x3347*-0x1);return;}}catch(_0x28c097){}WebAssembly[_0x4c4b80]=_0x34559a;}else try{_0x52ebec[_0x34e431(0x560)+'em'](_0x3ab151,_0x592a36(_0x42ed2a[_0x34e431(0x4da)]));}catch(_0x2b02ea){}}(_0x14dec3[_0x50f4da]));else return _0x5c9fa3[_0x16cdce(0x4da)];}}catch(_0x34ff14){}}var _0x4c3d3e=null,_0x394d97=null,_0x45a1b6={},_0x54d5c9=[],_0x357f32=[],_0x557c40=[{'type':'FPSco'+_0x363400(0x2fb)+_0x363400(0x27d),'keep':!![]},{'type':_0x4f1f8a[_0x363400(0x9cb)],'keep':!![]},{'type':'Weapo'+'nMana'+_0x363400(0xb1c),'keep':![]},{'type':_0x363400(0x240)+_0x363400(0x133)+_0x363400(0xa33),'keep':!![]},{'type':'GG_Ga'+_0x363400(0x450)+_0x363400(0x752),'keep':!![]},{'type':_0x363400(0x2c3)+'nNetw'+'orkSy'+'nc','keep':!![],'many':!![]},{'type':_0x363400(0x344)+_0x363400(0x9b1)+_0x363400(0x65f)+_0x363400(0x529)+_0x363400(0x8b2),'keep':!![],'many':!![]},{'type':_0x4f1f8a['JfAKX'],'keep':!![],'many':!![]},{'type':_0x363400(0x5bf)+_0x363400(0x96e),'keep':!![],'many':!![]}],_0x5bd57a=[_0x363400(0x2c0)+'bly-C'+'Sharp'+_0x363400(0x3cf),_0x4f1f8a[_0x363400(0xb65)],'ch.sy'+_0x363400(0x1ef)+_0x363400(0x6d9)+'cal.d'+'ll',_0x363400(0x419)+'t.dll',_0x4f1f8a[_0x363400(0x3fe)],'__Gen'+_0x363400(0x7d4)+'d'];(function _0x4c894b(){var _0x5dfb67=_0x363400;try{var _0x584e17=window['Unity'+_0x5dfb67(0x28e)+_0x5dfb67(0x921)]&&window['Unity'+'WebMo'+_0x5dfb67(0x921)]['Runti'+'me'];if(!_0x584e17||typeof _0x584e17[_0x5dfb67(0x47e)+_0x5dfb67(0x1ad)+'in']!==_0x5dfb67(0x283)+'ion'){if('COjjY'!==_0x4f1f8a['pksrr']){_0x3f4793[_0x5dfb67(0xb1d)]='Runti'+_0x5dfb67(0x266)+'eateP'+_0x5dfb67(0x6d0)+'\x20unav'+_0x5dfb67(0x6e7)+'le';return;}else _0xbeb2af['remov'+'e']();}_0x3f4793[_0x5dfb67(0xafb)+_0x5dfb67(0x28d)]=!![],_0x394d97=_0x584e17['creat'+'ePlug'+'in']({'name':'sakur'+'a-ski'+'llwar'+'z','version':_0x44f6f9,'referencedAssemblies':_0x5bd57a[_0x5dfb67(0x57b)]()}),_0x3f4793['ok']=!![];try{var _0x30fe6e=window['Unity'+'WebMo'+_0x5dfb67(0x921)]['Runti'+'me'];_0x30fe6e['__sak'+_0x5dfb67(0x86a)+'g']=_0x4f1f8a[_0x5dfb67(0x5ed)](_0x44f6f9,':')+Math[_0x5dfb67(0x94f)+'m']()[_0x5dfb67(0x71d)+_0x5dfb67(0x3f0)](-0x5*-0x68d+0x41*-0x63+0x77a*-0x1)['slice'](-0x340*0x7+-0x6cd*0x2+-0x34*-0xb3,0x5*0x1a+0x1776+-0x17ee),_0x2f660b=_0x30fe6e['__sak'+_0x5dfb67(0x86a)+'g'];}catch(_0x4643f6){}_0x4f1f8a[_0x5dfb67(0x9b6)](_0x5a0219),_0x3f4793['hooks'+_0x5dfb67(0x81f)+'tered']=_0x54d5c9[_0x5dfb67(0x6c4)+'h'],_0x394c76(),_0x3f4793[_0x5dfb67(0x9da)+_0x5dfb67(0xaef)]=!![];}catch(_0x23b3e5){_0x4f1f8a['FvAJx'](_0x5dfb67(0x4a5),_0x4f1f8a[_0x5dfb67(0x7aa)])?_0x3f4793['error']=String(_0x23b3e5&&_0x23b3e5[_0x5dfb67(0x8a3)+'ge']||_0x23b3e5):_0x4f000c(!![]);}}());var _0x154472=new Float32Array(-0x177+0x6*-0x1+0x17e*0x1),_0x42e212=new Int32Array(_0x154472['buffe'+'r']);function _0x15504c(_0x1b24a8){return _0x154472[-0x4d*-0x11+0x1e36+0x1*-0x2353]=_0x1b24a8,_0x42e212[-0x203*-0x7+-0x10a*0x6+-0x7d9];}function _0x5a4afe(_0x4a39ea){return _0x42e212[0x2596+0x1a16+-0x3fac]=_0x4a39ea|0x4ed+-0x1*0x74c+0x25f,_0x154472[-0x264+-0xadb*0x3+-0x22f5*-0x1];}var _0x315f1a={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x59f2ea(){var _0x796c2a=_0x363400,_0x574e5b={'FPwjw':function(_0x45aaae,_0x410b05){return _0x4f1f8a['nrtKx'](_0x45aaae,_0x410b05);},'TkWcS':_0x4f1f8a[_0x796c2a(0x1b9)],'elMPc':_0x4f1f8a['MflbI'],'eurgN':_0x4f1f8a[_0x796c2a(0x463)]};try{if(_0x796c2a(0x6ce)===_0x4f1f8a['QTbXe']){if(_0x394d97&&_0x394d97['_runt'+_0x796c2a(0xa46)]){var _0x123a1d=_0x394d97['_runt'+'ime'];if(_0x4f1f8a[_0x796c2a(0x429)](typeof _0x123a1d['resol'+_0x796c2a(0x279)+'e'],_0x4f1f8a['xGQfp'])){var _0x23a190=_0x123a1d[_0x796c2a(0x7c5)+_0x796c2a(0x279)+'e']();if(_0x23a190)return _0x315f1a['sourc'+'e']=_0x796c2a(0x22e)+_0x796c2a(0x234)+'ntime'+'.reso'+'lveGa'+_0x796c2a(0x8c8),_0x23a190;}if(_0x123a1d[_0x796c2a(0x3ca)])return _0x315f1a[_0x796c2a(0x776)+'e']='plugi'+'n._ru'+_0x796c2a(0x4e0)+_0x796c2a(0x8c3)+'e',_0x123a1d[_0x796c2a(0x3ca)];}}else return![];}catch(_0x396172){}try{var _0x1f59c9=window[_0x796c2a(0x198)+'WebMo'+_0x796c2a(0x921)]&&window['Unity'+_0x796c2a(0x28e)+'dkit']['Runti'+'me'];if(_0x1f59c9&&typeof _0x1f59c9[_0x796c2a(0x7c5)+'veGam'+'e']===_0x4f1f8a[_0x796c2a(0x132)]){if(_0x796c2a(0x94d)!=='LanTU')return _0x3ab9c3['faile'+'d']++,_0x12eb35[_0x796c2a(0x1da)+_0x796c2a(0xaad)]=_0x1beda1[_0x796c2a(0x1da)+_0x796c2a(0xaad)]||_0x4f1f8a[_0x796c2a(0xb1e)],null;else{var _0x32ccf9=_0x1f59c9['resol'+'veGam'+'e']();if(_0x32ccf9){if(_0x4f1f8a['zQrEV'](_0x796c2a(0xb14),_0x4f1f8a[_0x796c2a(0x93f)])){var _0x96acf1=_0x5b5b0e[_0x796c2a(0x7c5)+'veGam'+'e']();if(_0x96acf1)return _0x4f1004[_0x796c2a(0x776)+'e']=_0x4f1f8a[_0x796c2a(0x91d)],_0x96acf1;}else return _0x315f1a['sourc'+'e']=_0x796c2a(0x4d3)+_0x796c2a(0x8d4)+'solve'+'Game('+')',_0x32ccf9;}}}if(_0x1f59c9&&_0x1f59c9[_0x796c2a(0x3ca)]){if('mTLfQ'===_0x796c2a(0xafd))return _0x315f1a[_0x796c2a(0x776)+'e']=_0x4f1f8a['GfCQz'],_0x1f59c9;else{var _0x42ba19=_0x33ba85['data'];if(!_0x42ba19||_0x574e5b[_0x796c2a(0x704)](_0x42ba19['__sak'+_0x796c2a(0x70f)],_0x19f6db))return;try{if(_0x42ba19[_0x796c2a(0x4b2)]===_0x574e5b[_0x796c2a(0xa3f)]){_0x57e090()['set']({'host':_0x42ba19[_0x796c2a(0x3a4)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x42ba19[_0x796c2a(0x4b2)]===_0x574e5b['elMPc'])_0x55da2f()[_0x796c2a(0x2c9)](_0x42ba19['repor'+'t']);}catch(_0x3f5cca){_0x30a1ed[_0x796c2a(0x4a2)](_0x796c2a(0x231)+'kura]'+_0x796c2a(0x2e0)+'l\x20upd'+'ate\x20f'+'ailed',_0x574e5b['eurgN']+_0x1511a5,_0x3f5cca);}}}}catch(_0x27821a){}try{var _0x293c85=window['unity'+'Insta'+_0x796c2a(0x3b2)]||window[_0x796c2a(0xa76)+_0x796c2a(0x18c)]||window[_0x796c2a(0x712)];if(_0x293c85)return _0x315f1a['sourc'+'e']=_0x796c2a(0x603)+_0x796c2a(0x711)+'bal',_0x293c85;}catch(_0x521215){}try{if(typeof game!==_0x4f1f8a[_0x796c2a(0x362)]&&game)return _0x315f1a[_0x796c2a(0x776)+'e']=_0x4f1f8a['McAZP'],game;}catch(_0x1bf674){}try{var _0x2c59b4=Object['keys'](window);for(var _0x3a6dd2=-0x236a*-0x1+0x6*0x4a3+-0xc*0x545;_0x4f1f8a[_0x796c2a(0x635)](_0x3a6dd2,_0x2c59b4['lengt'+'h'])&&_0x4f1f8a['aoqYo'](_0x3a6dd2,-0x7*0x4a9+0x1f8*0x10+0x377);_0x3a6dd2++){var _0x5c39ed=window[_0x2c59b4[_0x3a6dd2]];if(_0x5c39ed&&_0x4f1f8a[_0x796c2a(0x1a3)](typeof _0x5c39ed,_0x4f1f8a['lktlv'])&&_0x5c39ed['Modul'+'e']&&_0x5c39ed['Modul'+'e']['HEAPU'+'8']&&_0x5c39ed[_0x796c2a(0x2cc)+'e'][_0x796c2a(0xa4b)+'8'][_0x796c2a(0x9a9)+'r'])return _0x315f1a[_0x796c2a(0x776)+'e']='windo'+'w.'+_0x2c59b4[_0x3a6dd2]+(_0x796c2a(0x8bd)+'le'),_0x5c39ed;}}catch(_0x3eecaf){}return _0x315f1a[_0x796c2a(0x776)+'e']=null,null;}function _0x4f140d(){var _0x3b61ee=_0x363400;if('ffKHa'===_0x3b61ee(0x241))return _0x576cf1['type']===_0xfbedae;else{try{if(_0x14b6a0&&_0x14b6a0['buffe'+'r']&&_0x14b6a0[_0x3b61ee(0x9a9)+'r']['byteL'+_0x3b61ee(0xafc)])return _0x315f1a[_0x3b61ee(0x776)+'e']=_0x315f1a[_0x3b61ee(0x776)+'e']||_0x3b61ee(0x95a)+_0x3b61ee(0x50b)+'e().e'+_0x3b61ee(0x5c4)+'s.mem'+_0x3b61ee(0x838),new Uint8Array(_0x14b6a0['buffe'+'r']);}catch(_0x260af8){}try{var _0x16f20b=_0x59f2ea();if(_0x16f20b&&_0x16f20b[_0x3b61ee(0x2cc)+'e']&&_0x16f20b[_0x3b61ee(0x2cc)+'e'][_0x3b61ee(0xa4b)+'8']&&_0x16f20b[_0x3b61ee(0x2cc)+'e'][_0x3b61ee(0xa4b)+'8']['buffe'+'r'])return _0x16f20b[_0x3b61ee(0x2cc)+'e'][_0x3b61ee(0xa4b)+'8'];}catch(_0x3b58b4){}return null;}}function _0x30dc0d(){var _0x3782f0=_0x363400,_0x5a30f9=_0x4f140d();if(!_0x5a30f9)return null;try{return new DataView(_0x5a30f9['buffe'+'r'],_0x5a30f9[_0x3782f0(0x722)+_0x3782f0(0x43b)],_0x5a30f9['byteL'+_0x3782f0(0xafc)]);}catch(_0x1cceba){return null;}}function _0x4e292c(_0x46a80f,_0xe4171d){var _0x37f4bb=_0x363400,_0x13e449={'BGuCL':'[data'+'-a=\x22','gnrtz':_0x37f4bb(0x231)+'kura]'+_0x37f4bb(0x9ab)+_0x37f4bb(0x3c1)+_0x37f4bb(0x6e7)+'le'};if(_0x4f1f8a[_0x37f4bb(0xae6)]!==_0x4f1f8a['MrYYU'])return _0x43e746[_0x37f4bb(0x209)+_0x37f4bb(0x674)+'tor'](_0x13e449[_0x37f4bb(0xa14)]+_0x4eafcf+'\x22]');else{var _0x5387fd=_0x30dc0d();if(!_0x5387fd)return _0x315f1a['faile'+'d']++,_0x315f1a[_0x37f4bb(0x1da)+_0x37f4bb(0xaad)]=_0x315f1a[_0x37f4bb(0x1da)+_0x37f4bb(0xaad)]||_0x4f1f8a[_0x37f4bb(0xb1e)],undefined;if(_0x46a80f<-0x6b9+0x1b5*-0x1+0x1a*0x53||_0x4f1f8a[_0x37f4bb(0x76f)](_0x46a80f,-0x6*0x583+0x1cfb+-0x41b*-0x1)>_0x5387fd[_0x37f4bb(0x8de)+_0x37f4bb(0xafc)])return _0x315f1a[_0x37f4bb(0x236)+'d']++,_0x315f1a['lastE'+'rror']=_0x315f1a[_0x37f4bb(0x1da)+_0x37f4bb(0xaad)]||_0x4f1f8a['yDawo']('addre'+_0x37f4bb(0x2a9),_0x46a80f[_0x37f4bb(0x71d)+_0x37f4bb(0x3f0)](0x15*0x53+-0x1*-0x21f+-0x8de))+(_0x37f4bb(0x78b)+_0x37f4bb(0x4c0)+_0x37f4bb(0x63a)+'0x')+_0x5387fd[_0x37f4bb(0x8de)+'ength']['toStr'+'ing'](-0x7c1*-0x1+0xa*0x3d6+-0x1*0x2e0d),undefined;try{if(_0x4f1f8a[_0x37f4bb(0x8b0)]('ShTWw','JeCGr'))return _0x317b28[_0x37f4bb(0x4a2)](_0x13e449[_0x37f4bb(0x657)],_0x37f4bb(0x390)+':'+_0x2e989c,_0x414f2f),null;else{_0x315f1a['ok']++;switch(_0xe4171d){case'u8':return _0x5387fd[_0x37f4bb(0x7ef)+_0x37f4bb(0x476)](_0x46a80f);case'i8':return _0x5387fd['getIn'+'t8'](_0x46a80f);case _0x4f1f8a[_0x37f4bb(0x660)]:return _0x5387fd[_0x37f4bb(0x39b)+'t16'](_0x46a80f,!![]);case _0x37f4bb(0x445):return _0x5387fd[_0x37f4bb(0x7ef)+'nt16'](_0x46a80f,!![]);case _0x37f4bb(0x671):return _0x5387fd[_0x37f4bb(0x39b)+_0x37f4bb(0x79f)](_0x46a80f,!![]);case _0x37f4bb(0x381):return _0x5387fd['getUi'+_0x37f4bb(0x7cc)](_0x46a80f,!![]);case'f32':return _0x5387fd['getFl'+_0x37f4bb(0x6eb)](_0x46a80f,!![]);case _0x4f1f8a['ylsKz']:return _0x5387fd[_0x37f4bb(0x524)+'oat64'](_0x46a80f,!![]);case'v2':case'v3':case'v4':return _0x5387fd['getFl'+_0x37f4bb(0x6eb)](_0x46a80f,!![]);default:return _0x5387fd['getIn'+_0x37f4bb(0x79f)](_0x46a80f,!![]);}}}catch(_0xe9d685){return _0x315f1a[_0x37f4bb(0x236)+'d']++,_0x315f1a[_0x37f4bb(0x1da)+_0x37f4bb(0xaad)]=_0x315f1a[_0x37f4bb(0x1da)+_0x37f4bb(0xaad)]||_0x4f1f8a['NAOUj'](String,_0xe9d685&&_0xe9d685['messa'+'ge']||_0xe9d685)[_0x37f4bb(0x57b)](-0x6b9+-0x524+0x1*0xbdd,-0x9ef+-0x48*-0x1c+0x287*0x1),undefined;}}}function _0x287fc5(_0x45b2eb,_0x3c45ff,_0x346d7c){var _0x3de2f3=_0x363400;if(_0x4f1f8a['JIzbL'](_0x4f1f8a[_0x3de2f3(0x244)],_0x4f1f8a[_0x3de2f3(0x244)]))return _0x410f33[-0xc2d+-0x2328+-0x3*-0xfc7]=_0x1f0ccc|0x17c5+-0x1096+0x265*-0x3,_0x50d3eb[0x128e+-0x5*0x345+0x1*-0x235];else{var _0xf9c143=_0x4f1f8a['CocDr'](_0x30dc0d);if(!_0xf9c143||_0x45b2eb<-0x2567+0x8b0+-0x1*-0x1cb7||_0x4f1f8a['LsugI'](_0x4f1f8a[_0x3de2f3(0x193)](_0x45b2eb,0x227b+0x1263+-0x34da),_0xf9c143['byteL'+_0x3de2f3(0xafc)]))return![];try{switch(_0x3c45ff){case'u8':case'i8':_0xf9c143[_0x3de2f3(0x699)+_0x3de2f3(0x476)](_0x45b2eb,_0x4f1f8a[_0x3de2f3(0x69d)](_0x346d7c,-0x527*-0x1+0x1487*-0x1+-0x7f*-0x21));break;case _0x3de2f3(0x2b8):case'u16':_0xf9c143[_0x3de2f3(0x12b)+'t16'](_0x45b2eb,_0x4f1f8a[_0x3de2f3(0x4d5)](_0x346d7c,-0x17*-0x67+0x179c+0x20dd*-0x1),!![]);break;case _0x4f1f8a['sIarN']:case _0x3de2f3(0x381):_0xf9c143[_0x3de2f3(0x12b)+_0x3de2f3(0x79f)](_0x45b2eb,_0x4f1f8a['HcmWc'](_0x346d7c,-0x1*0x26b1+0xa39*-0x1+-0x104e*-0x3),!![]);break;case _0x4f1f8a[_0x3de2f3(0x78e)]:_0xf9c143['setFl'+'oat32'](_0x45b2eb,_0x346d7c,!![]);break;default:_0xf9c143[_0x3de2f3(0x12b)+_0x3de2f3(0x79f)](_0x45b2eb,_0x346d7c|-0xf6+0x18e6+-0x17f*0x10,!![]);}return!![];}catch(_0x5b2c31){return![];}}}var _0x816974={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':_0x4f1f8a[_0x363400(0x946)]},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':_0x4f1f8a[_0x363400(0x946)]},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0x203d25(_0x2de672){var _0x3250af=_0x363400,_0x2fac85='';for(var _0x4052f3=-0x17dc+0x31*-0x1+-0x2f*-0x83;_0x4052f3<_0x2de672['lengt'+'h'];_0x4052f3++){var _0x25b778=_0x2de672[_0x4052f3]['toStr'+_0x3250af(0x3f0)](-0xad7+-0x22e6+0x929*0x5);_0x2fac85+=_0x4f1f8a['SLprz'](_0x25b778[_0x3250af(0x6c4)+'h']<0x170b+0xdb7*0x1+0x7*-0x540?'0':'',_0x25b778);}return _0x2fac85;}function _0x2928e6(_0x17481f,_0x20a789,_0x5b2508){var _0x21ad8b=_0x363400,_0x274733=_0x4f1f8a['BmZOn'](_0x30dc0d);if(!_0x274733){if('cuxfh'==='cuxfh')return _0x315f1a[_0x21ad8b(0x236)+'d']++,_0x315f1a[_0x21ad8b(0x1da)+_0x21ad8b(0xaad)]=_0x315f1a[_0x21ad8b(0x1da)+_0x21ad8b(0xaad)]||_0x4f1f8a['RRPLi'],null;else{var _0x405e8b='';_0xa461b1['hookF'+_0x21ad8b(0x8ba)+_0x21ad8b(0x614)]&&(_0x405e8b=_0x4f1f8a[_0x21ad8b(0x34a)](_0x4f1f8a[_0x21ad8b(0x201)](_0x4f1f8a[_0x21ad8b(0xb29)](_0x4f1f8a['JzIlU'](_0x21ad8b(0x9fd)+_0x21ad8b(0x4a7)+_0x21ad8b(0x849)+'t\x20',_0x4e3b53['hookF'+'irePr'+_0x21ad8b(0x614)][_0x21ad8b(0x700)])+_0x4f1f8a[_0x21ad8b(0x468)],_0x34b079[_0x21ad8b(0x705)+_0x21ad8b(0x8ba)+_0x21ad8b(0x614)][_0x21ad8b(0x23d)+_0x21ad8b(0x93b)+'nc'])+_0x4f1f8a[_0x21ad8b(0x663)]+_0x31da44['hookF'+_0x21ad8b(0x8ba)+_0x21ad8b(0x614)][_0x21ad8b(0x7c5)+_0x21ad8b(0x279)+_0x21ad8b(0x351)+'re'],'\x20(sou'+_0x21ad8b(0x258)),_0x4067a6[_0x21ad8b(0x705)+'irePr'+_0x21ad8b(0x614)]['gameS'+_0x21ad8b(0xa16)+_0x21ad8b(0x464)+'e']||_0x4f1f8a[_0x21ad8b(0x6c9)])+_0x4f1f8a['nuikn']),_0x44532a['warni'+_0x21ad8b(0xb19)][_0x21ad8b(0xaf5)](_0x4f1f8a['iSIxb'](_0x4f1f8a[_0x21ad8b(0x482)](_0x21ad8b(0x198)+_0x21ad8b(0xa9b)+_0x21ad8b(0xa53)+_0x21ad8b(0x304)+'esolv'+'ed\x20ye'+'t\x20(so'+'urce:'+'\x20',_0x277492[_0x21ad8b(0x9c9)+'ls'][_0x21ad8b(0x84d)+_0x21ad8b(0xa16)]||_0x21ad8b(0x2d8)),_0x4f1f8a['loqxs'])+_0x4f1f8a['KntKe']+_0x405e8b);}}if(_0x20a789<0x161*0x4+0xdaf*0x2+-0x1*0x20e2||_0x20a789+_0x5b2508>_0x274733[_0x21ad8b(0x8de)+'ength'])return _0x315f1a['faile'+'d']++,_0x315f1a[_0x21ad8b(0x1da)+'rror']=_0x315f1a['lastE'+'rror']||_0x4f1f8a['PzVJS'](_0x4f1f8a[_0x21ad8b(0x9e4)](_0x21ad8b(0x908)+_0x21ad8b(0x2a9)+(_0x17481f+_0x20a789)[_0x21ad8b(0x71d)+'ing'](0x67*-0x47+0x5*-0x31+0x1d96),_0x4f1f8a['baiMW']),_0x274733[_0x21ad8b(0x8de)+_0x21ad8b(0xafc)][_0x21ad8b(0x71d)+_0x21ad8b(0x3f0)](0x9e0+-0x58*-0x10+-0xf50)),null;try{if(_0x4f1f8a[_0x21ad8b(0xb30)]==='BMutn')return'0x'+(_0x4f1f8a[_0x21ad8b(0x85e)](_0xdfba71['o'],-0xe17*0x1+-0x1e74+0x2c8b)?'?':_0x4ac15a['o']['toStr'+_0x21ad8b(0x3f0)](0x1534+-0x4*-0x377+-0x8c0*0x4))+'\x20('+_0x17a9b3[_0x21ad8b(0x831)]+')';else{var _0x15ac8f=new Uint8Array(_0x5b2508);for(var _0x9168b9=-0x91+-0x13fe+0x115*0x13;_0x4f1f8a[_0x21ad8b(0x6f4)](_0x9168b9,_0x5b2508);_0x9168b9++)_0x15ac8f[_0x9168b9]=_0x274733[_0x21ad8b(0x7ef)+'nt8'](_0x4f1f8a[_0x21ad8b(0x1c0)](_0x17481f+_0x20a789,_0x9168b9));return _0x315f1a['ok']++,_0x15ac8f;}}catch(_0x5c9abc){if('FeNLR'===_0x4f1f8a[_0x21ad8b(0x7d0)])_0x4f0920[_0x21ad8b(0x67e)+_0x21ad8b(0xb19)]['push'](_0x4f1f8a[_0x21ad8b(0x239)](_0x4f1f8a[_0x21ad8b(0x292)](_0x4f1f8a['WfGJq'](_0x4f1f8a['jNXbq'],_0x3f47b3[_0x21ad8b(0x4a9)+'Total'])+_0x4f1f8a['pdThm']+('runs\x20'+_0x21ad8b(0x14e)+'durin'+'g\x20Web'+'Assem'+'bly.i'+_0x21ad8b(0x19e)+_0x21ad8b(0x99a)+'\x20and\x20'+'snaps'+_0x21ad8b(0x319)+_0x21ad8b(0x22e)+_0x21ad8b(0x222)+'ks.le'+'ngth,'+'\x20')+(_0x21ad8b(0x926)+'oks\x20r'+_0x21ad8b(0xa05)+_0x21ad8b(0xad6)+_0x21ad8b(0x861)+_0x21ad8b(0x71e)+'re\x20ig'+_0x21ad8b(0x999)+_0x21ad8b(0x940)+_0x21ad8b(0x3c8)+'ife\x20o'+_0x21ad8b(0x4c6)+'\x20page'+'.\x20')+(_0x21ad8b(0x81f)+_0x21ad8b(0xa52)+'\x20'),_0x1995bf[_0x21ad8b(0x4a9)+_0x21ad8b(0x81f)+'tered'+_0x21ad8b(0x3a6)]),'\x20hook'+'(s)\x20d'+'uring'+_0x21ad8b(0x89f)+'ng\x20at'+_0x21ad8b(0x408)+_0x21ad8b(0x24e)+_0x21ad8b(0x47a)+'.'));else return _0x315f1a[_0x21ad8b(0x236)+'d']++,_0x315f1a[_0x21ad8b(0x1da)+'rror']=_0x315f1a[_0x21ad8b(0x1da)+'rror']||String(_0x5c9abc&&_0x5c9abc[_0x21ad8b(0x8a3)+'ge']||_0x5c9abc)[_0x21ad8b(0x57b)](-0x1*-0x1225+-0x243*0xd+0xb42,-0x21e9+0xf4d+-0x197*-0xc),null;}}function _0x178f0a(_0x4e04f8,_0x5ae7ab,_0x165ee1){var _0x485c76=_0x363400,_0xaa597a=_0x816974[_0x165ee1],_0x3ea8b7=_0x4f1f8a['MLkxQ'](_0x2928e6,_0x4e04f8,_0x5ae7ab,_0xaa597a[_0x485c76(0x89c)]);if(!_0x3ea8b7)return null;var _0x3e095c=new DataView(_0x3ea8b7[_0x485c76(0x9a9)+'r'],_0x3ea8b7['byteO'+_0x485c76(0x43b)],_0x3ea8b7[_0x485c76(0x8de)+_0x485c76(0xafc)]),_0x4de889=_0x3e095c['getIn'+_0x485c76(0x79f)](_0xaa597a[_0x485c76(0x4df)],!![]),_0x59f795=_0x3e095c[_0x485c76(0x39b)+_0x485c76(0x79f)](_0xaa597a['hidde'+'n'],!![]),_0x12570e=_0x4f1f8a[_0x485c76(0x4d8)](_0x3e095c['getUi'+_0x485c76(0x476)](_0xaa597a[_0x485c76(0x380)+'d']),-0x25*-0x10d+-0x959*0x4+-0x17c),_0x57096f=_0x165ee1===_0x4f1f8a[_0x485c76(0x7a1)]?_0x3e095c['getFl'+'oat32'](_0xaa597a[_0x485c76(0x715)],!![]):_0x4f1f8a['MSjKh'](_0x165ee1,_0x4f1f8a[_0x485c76(0x3a1)])?_0x3e095c[_0x485c76(0x39b)+_0x485c76(0x79f)](_0xaa597a[_0x485c76(0x715)],!![]):_0x3e095c[_0x485c76(0x7ef)+'nt8'](_0xaa597a['fake']),_0x2513c2=_0x4f1f8a[_0x485c76(0x4d8)](_0x3e095c[_0x485c76(0x7ef)+_0x485c76(0x476)](_0xaa597a[_0x485c76(0x48a)+'e']),-0x43*-0x7+-0x82f*0x1+-0x65b*-0x1);return{'keyAtOffset0':_0x4de889,'hidden':_0x59f795,'inited':_0x12570e,'fake':_0x57096f,'act':_0x2513c2,'hex':_0x203d25(_0x3ea8b7),'alt':_0x4f1f8a[_0x485c76(0x6f6)](_0x165ee1,_0x4f1f8a[_0x485c76(0x3a1)])?_0x59f795^_0x4f1f8a[_0x485c76(0x6bc)](_0x57096f,0x16c9+0x1*-0x1b0d+0x444):null};}function _0x13d86e(_0x5659cb,_0x47692f,_0xfb719a){var _0x2de626=_0x363400;if(_0x4f1f8a[_0x2de626(0x496)](_0x5659cb,_0x2de626(0x452)))return _0x5a4afe(_0x47692f^_0xfb719a);if(_0x5659cb===_0x4f1f8a[_0x2de626(0x3a1)])return _0x47692f^_0xfb719a|0xd9*-0x25+0x262b+0x43*-0x1a;return _0x4f1f8a[_0x2de626(0x59a)]((_0x47692f^_0xfb719a)&0x3d*-0x96+0x19*-0x17b+0x49c0,0x49*0x32+0x3*0x786+-0x24d4*0x1)?-0x116*0xe+-0x1ce6+0x7*0x64d:-0x1f*-0x51+-0x12af+0x8e0*0x1;}function _0x12d5f0(_0x33be23,_0x2a6b0d,_0x13398d){var _0xf3e8a0=_0x363400;if(_0x4f1f8a['eAJqI'](_0x4f1f8a['gqzoT'],_0xf3e8a0(0xa85))){var _0x5c7eaf=_0x816974[_0x13398d];if(!_0x5c7eaf)return null;var _0x16ccbc=_0x4e292c(_0x4f1f8a[_0xf3e8a0(0x193)](_0x4f1f8a[_0xf3e8a0(0x3c7)](_0x33be23,_0x2a6b0d),_0x5c7eaf[_0xf3e8a0(0x4df)]),'u8'),_0x33d26a=_0x4f1f8a[_0xf3e8a0(0x766)](_0x4e292c,_0x4f1f8a['EbALl'](_0x33be23,_0x2a6b0d)+_0x5c7eaf[_0xf3e8a0(0x23e)+'n'],_0x4f1f8a[_0xf3e8a0(0x946)]),_0x3070af=_0x4f1f8a['HWgDw'](_0x4e292c,_0x4f1f8a[_0xf3e8a0(0x2cf)](_0x4f1f8a['rNRdz'](_0x33be23,_0x2a6b0d),_0x5c7eaf['inite'+'d']),'u8'),_0x41176b=_0x4f1f8a[_0xf3e8a0(0x766)](_0x4e292c,_0x4f1f8a[_0xf3e8a0(0x695)](_0x33be23,_0x2a6b0d)+_0x5c7eaf['fake'],_0x4f1f8a[_0xf3e8a0(0x9b3)](_0x13398d,'obfF')?_0x4f1f8a[_0xf3e8a0(0x78e)]:_0x13398d===_0x4f1f8a['gXnCa']?_0x4f1f8a[_0xf3e8a0(0x946)]:'u8'),_0x52e64d=_0x4f1f8a[_0xf3e8a0(0x777)](_0x4e292c,_0x4f1f8a[_0xf3e8a0(0x9a2)](_0x33be23,_0x2a6b0d)+_0x5c7eaf[_0xf3e8a0(0x48a)+'e'],'u8');if(_0x4f1f8a[_0xf3e8a0(0x4e2)](_0x16ccbc,undefined)||_0x4f1f8a['hvfem'](_0x33d26a,undefined)||_0x41176b===undefined||_0x52e64d===undefined)return null;_0x16ccbc&=-0xb*0x61+-0x1a81+-0x2e1*-0xb,_0x33d26a|=-0x868*-0x1+0x3*-0xa6b+0x16d9*0x1,_0x3070af=_0x4f1f8a[_0xf3e8a0(0x69d)](_0x3070af||0xeee+-0xf29*0x1+0x3b,0x1b58+0x1ce2+-0x3839),_0x52e64d&=-0x1*-0x1e81+-0x7b6*0x3+0x52*-0x17;var _0xbf2631;if(_0x13398d==='obfF')_0xbf2631=_0x5a4afe(_0x4f1f8a[_0xf3e8a0(0x798)](_0x33d26a,_0x16ccbc));else{if(_0x4f1f8a[_0xf3e8a0(0xa6d)](_0x13398d,'obfI'))_0xbf2631=_0x4f1f8a[_0xf3e8a0(0x821)](_0x33d26a,_0x16ccbc)|0x5*-0x7a6+-0x76a*0x3+0x8a4*0x7;else _0xbf2631=_0x4f1f8a[_0xf3e8a0(0x80a)](_0x4f1f8a['GpUAN'](_0x33d26a,_0x16ccbc)&0x19f*0x5+-0xd7d+0x47*0x17,-0x19e3*0x1+0x914*0x1+0x1*0x10cf)?-0xa0c+0x10*-0x12+-0x1*-0xb2d:-0xd*0x29f+0x4d0+-0x1*-0x1d43;}return{'real':_0xbf2631,'fake':_0x41176b,'act':_0x52e64d,'init':_0x3070af,'key':_0x16ccbc,'hidden':_0x33d26a};}else _0x1922fb[_0xf3e8a0(0x560)+'em'](_0x1c78b8,_0x469ff7(_0x198cc7[_0xf3e8a0(0x4da)]));}function _0x6f99ff(_0x9bfbea,_0x3dbb5d,_0x54ca67,_0x2fc5f2){var _0x44fd78=_0x363400,_0x5e4d7a=_0x816974[_0x54ca67],_0x209f5e=_0x4f1f8a[_0x44fd78(0x995)](_0x2928e6,_0x9bfbea,_0x3dbb5d,_0x5e4d7a[_0x44fd78(0x89c)]);if(!_0x209f5e)return![];var _0xdff336=new DataView(_0x209f5e['buffe'+'r'],_0x209f5e[_0x44fd78(0x722)+'ffset'],_0x209f5e[_0x44fd78(0x8de)+_0x44fd78(0xafc)]),_0x566a2c=_0x5e4d7a[_0x44fd78(0x6c3)+'pe']==='u8'?_0xdff336[_0x44fd78(0x7ef)+'nt8'](_0x5e4d7a['key']):_0xdff336['getIn'+_0x44fd78(0x79f)](_0x5e4d7a[_0x44fd78(0x4df)],!![]),_0x710cb8;if(_0x4f1f8a[_0x44fd78(0x3d9)](_0x54ca67,_0x44fd78(0x452)))_0x710cb8=_0x4f1f8a[_0x44fd78(0x4ae)](_0x15504c,_0x2fc5f2);else{if(_0x54ca67===_0x44fd78(0x128))_0x710cb8=_0x2fc5f2|0x2076+0x24ad*0x1+0xb*-0x649;else _0x710cb8=_0x4f1f8a['YYylb'](_0x2fc5f2?-0x13f1+-0xf47+-0x1*-0x2339:-0x2306+0xbb+0x224b,-0x119f+-0x1f49+0x31e7);}return _0x287fc5(_0x4f1f8a[_0x44fd78(0x5ed)](_0x9bfbea,_0x3dbb5d)+_0x5e4d7a['hidde'+'n'],'i32',_0x4f1f8a['ctZJz'](_0x710cb8,_0x566a2c))&&_0x287fc5(_0x9bfbea+_0x3dbb5d+_0x5e4d7a[_0x44fd78(0x715)],_0x54ca67===_0x44fd78(0x452)?_0x4f1f8a['VQdBz']:_0x54ca67===_0x44fd78(0x128)?_0x4f1f8a[_0x44fd78(0x946)]:'u8',_0x54ca67===_0x44fd78(0x452)?_0x2fc5f2:_0x54ca67===_0x4f1f8a['gXnCa']?_0x4f1f8a[_0x44fd78(0x4b6)](_0x2fc5f2,0x7d3+-0xf8b+0x7b8):_0x2fc5f2?0xb49+0x20a5*0x1+-0xad*0x41:-0x4f*0x40+-0x2*0xd4b+0x526*0x9)&&_0x4f1f8a['GUaBV'](_0x287fc5,_0x4f1f8a[_0x44fd78(0x63f)](_0x4f1f8a['rVwbo'](_0x9bfbea,_0x3dbb5d),_0x5e4d7a['activ'+'e']),'u8',0x1ce0+0x1997*-0x1+-0x349);}var _0x16771b={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0x1ac221=0x1456*-0x1+-0xf10+0x2366*0x1+0.03,_0x3d3cc7=0x2d*-0xae+-0x10ec+0x2f84,_0x21404c={},_0x3f2467=-0x4fe+0x2*0xdb1+-0xb32*0x2,_0x3203cd=[],_0x4fc2a6=[];function _0x4be81a(_0x17cad6){var _0x58c9e1=_0x363400,_0x25a0e6={'pfBnW':'hello','PaJIE':function(_0xe07ea6,_0x375165){var _0x5b9df1=_0x1a9a;return _0x4f1f8a[_0x5b9df1(0x45f)](_0xe07ea6,_0x375165);},'efAhK':function(_0x4728f3,_0xecd0b0){return _0x4728f3+_0xecd0b0;},'OLdOK':function(_0x1a1557,_0x2ad51c){return _0x1a1557+_0x2ad51c;},'IbalI':'\x20A\x20ho'+_0x58c9e1(0x4a7)+_0x58c9e1(0x849)+'t\x20'};if('fBMTb'===_0x4f1f8a['mDZdx']){if(_0x291dd5[_0x31f348]['conte'+_0x58c9e1(0x6c5)+_0x58c9e1(0x51f)])_0x153427[_0x50793b]['conte'+'ntWin'+_0x58c9e1(0x51f)]['postM'+_0x58c9e1(0x30f)+'e'](_0x3fc371,'*');}else{var _0x5825c2=_0x582a61[_0x58c9e1(0x531)+'ntrol'+_0x58c9e1(0x27d)]||[],_0x25163f=[];_0x4fc2a6=[],_0x3203cd=[];for(var _0x39ce74=-0x2080+0x4a*-0x27+0x2bc6;_0x39ce74<_0x5825c2[_0x58c9e1(0x6c4)+'h'];_0x39ce74++){var _0x4736be=_0x5825c2[_0x39ce74][0xdfa+0xf43+0xf*-0x1f3];if(_0x5825c2[_0x39ce74][-0x25a2+-0x214d+0x46f0]!==_0x4f1f8a[_0x58c9e1(0x7a1)])continue;var _0x4ba4d9=_0x178f0a(_0x17cad6,_0x4736be,_0x58c9e1(0x452));if(!_0x4ba4d9||_0x4f1f8a[_0x58c9e1(0x17c)](_0x4ba4d9['inite'+'d'],-0xea1+0x2*0xfd+0x8*0x195))continue;var _0x4dba56=_0x13d86e(_0x4f1f8a['GLVhD'],_0x4ba4d9['hidde'+'n'],_0x4ba4d9[_0x58c9e1(0x269)+'Offse'+'t0']);if(typeof _0x4dba56!==_0x4f1f8a['YGtnl']||!isFinite(_0x4dba56))continue;var _0x32779c=_0x4f1f8a[_0x58c9e1(0x31a)](_0x17cad6,':')+_0x4736be,_0xf05081=_0x21404c[_0x32779c];if(!_0xf05081||_0x4dba56!==_0xf05081[_0x58c9e1(0x76c)+_0x58c9e1(0x82e)+'n'])_0xf05081=_0x21404c[_0x32779c]={'base':_0x4dba56,'lastWritten':null};var _0x4028bb=_0xf05081[_0x58c9e1(0x7f5)],_0x509f69=Math[_0x58c9e1(0xb42)](_0x4028bb);if(_0x509f69<0xc00+-0x206a*0x1+0x146a+0.0001||_0x509f69>0x5*0x667a+-0x1*0x1485e+0xce9c){_0x4fc2a6['push']({'o':_0x4736be,'v':_0x4dba56,'why':'impla'+_0x58c9e1(0x1f0)+'e'});continue;}_0x25163f['push']({'o':_0x4736be,'v':_0x4dba56,'a':_0x509f69,'base':_0x4028bb,'key':_0x32779c,'st':_0xf05081});}var _0x1ad57c=[];for(var _0x32cdfd=-0xf6b+-0xa75*0x3+0x2eca;_0x4f1f8a[_0x58c9e1(0x215)](_0x32cdfd,_0x25163f['lengt'+'h']);_0x32cdfd++){var _0x3b95e0=_0x25163f[_0x32cdfd]['a'],_0x49708c=null;for(var _0x2ac3b0=0x13*0x17e+0x265c*-0x1+0xa02;_0x4f1f8a['bzlzB'](_0x2ac3b0,_0x1ad57c[_0x58c9e1(0x6c4)+'h']);_0x2ac3b0++){var _0x33ef67=_0x4f1f8a['mDeOQ'](_0x1ad57c[_0x2ac3b0]['mean'],_0x3b95e0);if(_0x33ef67>_0x4f1f8a[_0x58c9e1(0x587)](-0x589+0x197b+-0x13f1,_0x1ac221)&&_0x33ef67<-0x14e7+-0x20*0x69+0x2208+_0x1ac221){if(_0x58c9e1(0x563)===_0x58c9e1(0x8eb)){var _0x371db5=_0x4bf2d9['resol'+_0x58c9e1(0x279)+'e']();if(_0x371db5)return _0x42ced2[_0x58c9e1(0x776)+'e']='plugi'+_0x58c9e1(0x234)+'ntime'+_0x58c9e1(0x6f5)+_0x58c9e1(0x790)+_0x58c9e1(0x8c8),_0x371db5;}else{_0x49708c=_0x1ad57c[_0x2ac3b0];break;}}}if(!_0x49708c){if(_0x58c9e1(0x9f3)===_0x58c9e1(0x74d)){if(_0x109eb4[_0x58c9e1(0x4b2)]===_0x25a0e6[_0x58c9e1(0x5fa)]){_0x1a998f()[_0x58c9e1(0x2c9)]({'host':_0x543e5a[_0x58c9e1(0x3a4)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x5648f2['kind']===_0x58c9e1(0xa65)+'t')_0x1e4d45()['set'](_0x6b9902[_0x58c9e1(0xa65)+'t']);}else _0x49708c={'mean':_0x3b95e0,'members':[]},_0x1ad57c[_0x58c9e1(0xaf5)](_0x49708c);}_0x49708c[_0x58c9e1(0x356)+'rs']['push'](_0x25163f[_0x32cdfd]),_0x49708c[_0x58c9e1(0x915)]=-0x1b11+-0x1ed9+0x1cf5*0x2;for(var _0x2953b8=-0x4cd*-0x1+0x3b3*-0x3+0x64c;_0x4f1f8a[_0x58c9e1(0x62b)](_0x2953b8,_0x49708c['membe'+'rs'][_0x58c9e1(0x6c4)+'h']);_0x2953b8++)_0x49708c['mean']+=_0x49708c['membe'+'rs'][_0x2953b8]['a'];_0x49708c['mean']/=_0x49708c[_0x58c9e1(0x356)+'rs'][_0x58c9e1(0x6c4)+'h'];}var _0x2fbe9d=[];for(var _0x1e0a0c=0x9d+-0x14d3+0x1436;_0x1e0a0c<_0x1ad57c['lengt'+'h'];_0x1e0a0c++){if(_0x1ad57c[_0x1e0a0c][_0x58c9e1(0x356)+'rs'][_0x58c9e1(0x6c4)+'h']>=_0x3d3cc7)_0x2fbe9d[_0x58c9e1(0xaf5)](_0x1ad57c[_0x1e0a0c]);}if(!_0x2fbe9d[_0x58c9e1(0x6c4)+'h']){if(_0x4f1f8a[_0x58c9e1(0xb2f)]===_0x58c9e1(0x6f7)){_0x4fc2a6['push']({'o':-(-0x1*0x1e95+-0x1a56+0x38ec),'v':0x0,'why':_0x4f1f8a['EQkGe'](_0x4f1f8a[_0x58c9e1(0x9c4)]+_0x3d3cc7,_0x58c9e1(0x710)+_0x58c9e1(0x1ab)+_0x58c9e1(0x33e)+_0x58c9e1(0x8f8)+'ed')});return;}else _0x4f651c=_0x25a0e6[_0x58c9e1(0x693)](_0x25a0e6[_0x58c9e1(0x693)](_0x25a0e6['efAhK'](_0x25a0e6['OLdOK'](_0x25a0e6[_0x58c9e1(0x693)](_0x25a0e6[_0x58c9e1(0x420)],_0x587c2f[_0x58c9e1(0x705)+_0x58c9e1(0x8ba)+_0x58c9e1(0x614)][_0x58c9e1(0x700)]),'ms\x20wi'+'th\x20or'+_0x58c9e1(0x694)+_0x58c9e1(0x5f6)+'=')+_0x4f76c6[_0x58c9e1(0x705)+'irePr'+_0x58c9e1(0x614)]['origi'+_0x58c9e1(0x93b)+'nc'],_0x58c9e1(0xb0a)+_0x58c9e1(0x557)+'resol'+_0x58c9e1(0x7c9))+_0xbd5eb3[_0x58c9e1(0x705)+_0x58c9e1(0x8ba)+'oof'][_0x58c9e1(0x7c5)+'veGam'+'eAtFi'+'re'],_0x58c9e1(0xa51)+_0x58c9e1(0x258)),_0x577bea[_0x58c9e1(0x705)+'irePr'+'oof']['gameS'+_0x58c9e1(0xa16)+_0x58c9e1(0x464)+'e']||'none')+(_0x58c9e1(0x347)+'\x20the\x20'+'refer'+_0x58c9e1(0x2a2)+'exist'+'ed\x20th'+_0x58c9e1(0x5a5)+_0x58c9e1(0xa17)+'not\x20r'+'eacha'+_0x58c9e1(0x2ed)+'ow.');}var _0x28e1e5=_0x2fbe9d[-0x1989+-0x883+0x220c][_0x58c9e1(0x915)];for(var _0x52cc68=-0x18*-0xf9+0xefd*-0x2+0x6a2;_0x52cc68<_0x2fbe9d['lengt'+'h'];_0x52cc68++)if(_0x2fbe9d[_0x52cc68]['mean']<_0x28e1e5)_0x28e1e5=_0x2fbe9d[_0x52cc68][_0x58c9e1(0x915)];var _0x4b2e2e=_0x28e1e5*(0xb*0x254+-0x1*-0xc70+0x1e7*-0x14+0.5);for(var _0x4cd0be=-0x15a*-0x13+0x18a2+0x14*-0x284;_0x4cd0be<_0x1ad57c['lengt'+'h'];_0x4cd0be++){if(_0x4f1f8a[_0x58c9e1(0x340)](_0x1ad57c[_0x4cd0be][_0x58c9e1(0x356)+'rs'][_0x58c9e1(0x6c4)+'h'],_0x3d3cc7))continue;for(var _0x4ae3ba=-0x4c*-0x57+-0x3*-0x4b7+-0x3*0xd53;_0x4ae3ba<_0x1ad57c[_0x4cd0be]['membe'+'rs'][_0x58c9e1(0x6c4)+'h'];_0x4ae3ba++){_0x4fc2a6['push']({'o':_0x1ad57c[_0x4cd0be][_0x58c9e1(0x356)+'rs'][_0x4ae3ba]['o'],'v':_0x1ad57c[_0x4cd0be]['membe'+'rs'][_0x4ae3ba]['v'],'why':_0x4f1f8a['Weyci']});}}for(var _0x3bf0c1=-0x4*-0x3ee+0x5*0x1bb+-0x185f;_0x3bf0c1<_0x2fbe9d[_0x58c9e1(0x6c4)+'h'];_0x3bf0c1++){var _0x28d363=_0x2fbe9d[_0x3bf0c1][_0x58c9e1(0x356)+'rs'];for(var _0x1982f4=0x1df9+0x2398+-0x4191;_0x1982f4<_0x28d363['lengt'+'h'];_0x1982f4++){var _0x486d44=_0x28d363[_0x1982f4];if(_0x486d44['a']<_0x4b2e2e){_0x4fc2a6[_0x58c9e1(0xaf5)]({'o':_0x486d44['o'],'v':_0x486d44['v'],'why':_0x4f1f8a['Vgerm'](_0x58c9e1(0x370)+_0x58c9e1(0xaa4)+'r\x20',_0x4b2e2e[_0x58c9e1(0x35b)+'ed'](0x35*0x61+-0xe53+0x17*-0x40))});continue;}var _0x59ee1f=_0x486d44[_0x58c9e1(0x7f5)]*_0x16771b['facto'+'r'];_0x4f1f8a[_0x58c9e1(0x83b)](_0x6f99ff,_0x17cad6,_0x486d44['o'],_0x4f1f8a[_0x58c9e1(0x7a1)],_0x59ee1f)&&(_0x486d44['st'][_0x58c9e1(0x76c)+_0x58c9e1(0x82e)+'n']=Math[_0x58c9e1(0xb38)+'d'](_0x59ee1f),_0x3f2467++,_0x3203cd[_0x58c9e1(0xaf5)](_0x4f1f8a[_0x58c9e1(0x193)]('0x',_0x486d44['o'][_0x58c9e1(0x71d)+_0x58c9e1(0x3f0)](0x7cb+-0x197b+0x11c0))));}}}}var _0x582a61={'FPScontroller':[[0x9cb*0x1+0x1*-0x1136+-0x77b*-0x1,_0x363400(0x452)],[0x11f5+-0x92b*-0x1+-0x1af8,_0x4f1f8a['GLVhD']],[0x751*0x1+0x837*-0x2+0x95d*0x1,_0x4f1f8a[_0x363400(0x7a1)]],[0x2269+0x182e+-0x3a3f,_0x4f1f8a[_0x363400(0x7a1)]],[0xbca+-0x2ea*-0x5+-0x19ec,_0x4f1f8a['GLVhD']],[-0x4*0xad+0x1*0x16e2+-0x13a6,_0x4f1f8a['GLVhD']],[0x1*0x68c+-0x130*-0x4+-0x2ab*0x4,_0x4f1f8a['GLVhD']],[-0x935*-0x4+0x1ff8+-0x4414*0x1,_0x363400(0x7b0)],[-0x1327*0x2+0x26ba+0x58*0x1,_0x4f1f8a[_0x363400(0x7a1)]],[-0xb*0xfc+0x9*-0x419+-0x1*-0x3091,_0x4f1f8a[_0x363400(0x946)]],[-0x1f*0x91+-0x2*0x254+0x1*0x1717,'v3'],[0x1202+0xba*0x10+-0xd2*0x23,'u8'],[0x46b+0x78d*-0x4+0x1ab9*0x1,'obfF'],[-0x119*0x6+0x1*-0x6d3+0xe71*0x1,_0x363400(0x671)],[0x26*0x2b+-0x2124+0x2*0xde7,'u8'],[0xe86*0x1+-0xc0c+-0x16a*0x1,'i32'],[0x1bbb+-0x2fe*-0xb+-0x3*0x13db,'u8'],[-0xa48+0x2d4*0x2+0x5b5,'u8'],[0x11*-0xcb+0xd3*0x1d+-0x2*0x4a8,_0x4f1f8a[_0x363400(0x7a1)]],[0x1*0x24bf+-0x1465*-0x1+-0x14*0x2cc,_0x363400(0x452)],[0xbb7*0x1+-0x1*0x1b3b+0x10d0,_0x4f1f8a[_0x363400(0x78e)]],[0x146c+-0x6cf*-0x1+-0x19eb,_0x363400(0x584)],[-0x1672+-0x1*0x1ced+0x1191*0x3,'v3'],[-0xb65+-0x2f2+0xfb7,'v3'],[-0x83*-0x2e+0x11b*-0x15+-0x119*-0x1,_0x4f1f8a[_0x363400(0x78e)]],[0x11*-0x156+-0x20cf*0x1+-0x823*-0x7,_0x363400(0x584)],[0x25b7+0x3*-0x58a+-0x1391,'u8'],[0x2372+0x123a+-0x3420,'f32'],[-0x24a2+0x6*-0x99+-0xdf0*-0x3,'v3'],[0x1197*-0x1+0x2669+0xa*-0x1eb,'u8'],[-0x179+-0x204b+0x2378,_0x4f1f8a['VQdBz']],[-0x2172+0x7c0*0x3+0xbea,_0x4f1f8a['VQdBz']],[0x13*-0x14f+-0x61*-0x25+0xc94,'u8'],[-0x1725+0x1e85+-0x5a3,'u8'],[0x44f+0x15b5+-0x1844,_0x4f1f8a['GLVhD']],[0x173e+-0x14e4+-0x82,_0x363400(0x584)],[0xddb+0xde6+-0x19e5,'u8'],[-0x392+0x5*0x452+-0x1028,_0x4f1f8a['GLVhD']],[0xfe5*-0x1+-0x1dac+-0x11b*-0x2b,'v3'],[-0x1833+0x1777+0x2c4,_0x4f1f8a[_0x363400(0x8ee)]],[0x8*-0x217+-0xb*-0x158+-0x1*-0x408,_0x4f1f8a['VQdBz']],[0x146d+-0x10bb*-0x1+-0x230c,_0x363400(0x584)],[0x1*-0x1582+-0x1000+0x27ce,'f32'],[-0x1d13+-0x24ba+0x441d*0x1,_0x363400(0x584)],[-0x6be*-0x4+-0x64d*-0x1+-0x1*0x1ef1,'f32'],[-0x256*-0x8+-0x1541*-0x1+0x36b*-0xb,_0x4f1f8a[_0x363400(0x78e)]],[0x1536+0xc8d+-0x1f67,'u8'],[0x1c9b+0x13d+-0x1b7b,'u8'],[-0x1c6f*-0x1+-0xb48+0x2f5*-0x5,'u8'],[0x3*0x409+-0x4d*0x6a+-0x1627*-0x1,_0x363400(0x584)],[0x17a6+-0x155*0x1d+0x115f,'u8'],[-0x1ffe+0x9d*-0x26+0x39b1,'u8'],[-0x1114+-0x24*-0x2d+0xd28,_0x4f1f8a[_0x363400(0x78e)]],[-0xbd+0x9*0x162+-0x949,_0x4f1f8a['VQdBz']],[-0x1efa+-0x76*0x1+0x4*0x878,'f32'],[-0x1e8a+0x277+0x209*0xf,_0x363400(0x584)],[0x1efd+-0x22+0x22f*-0xd,_0x4f1f8a['VQdBz']],[-0x1444*0x1+0x22f4+-0x2c*0x47,_0x4f1f8a[_0x363400(0x78e)]],[0x1c0f+0x1885+-0x281*0x14,'f32'],[0xad*0x12+0xf6*-0x17+0xc74,'v3'],[0x33c+-0x17*0x146+0x1ca2,'u8'],[-0x17*-0xf2+0x101*-0x7+-0xc1f*0x1,'v3'],[0x1d02*-0x1+0x1855*0x1+0x751,_0x363400(0x584)],[-0xf90+0xa4e+-0x91*-0xe,'v3'],[0x18*-0x17b+0xd6*0x20+0x17*0x80,_0x363400(0x584)],[0x1b9c*-0x1+0x1*0xb2d+0x132b,'f32'],[0x2f*0x31+0x1757+0x1d96*-0x1,_0x4f1f8a[_0x363400(0x78e)]],[-0x16d9*0x1+-0x2503+0x30*0x14e,'u8'],[-0x2ab+0x1e16+-0x18a6,'u8'],[0x4*0x5bf+-0xbf*0x15+-0x9*0x81,_0x4f1f8a['VQdBz']],[0xefe+0x23c*-0x11+0x1*0x19da,_0x4f1f8a[_0x363400(0x78e)]],[-0x8c4*0x3+-0x133*-0x5+0x3*0x7bb,'v3'],[0x528+0x2*-0x37f+0x4c6,'v3'],[0x3*-0x981+-0xb5*0x16+-0xa5*-0x49,_0x4f1f8a['VQdBz']],[-0x26b2+0x60b*0x3+-0x1791*-0x1,_0x4f1f8a[_0x363400(0x78e)]],[0x318+0x1*-0x59+0x45,_0x363400(0x584)],[-0x2*-0x135d+0x1bc8+-0x32*0x145,_0x363400(0x584)],[0x2*0x3b+-0x21a*0x8+0x1366,'v3'],[0x1b0e+-0xd0c*0x2+0x222,'u8'],[0x766*-0x1+-0xf1a*0x1+0x199c,'v3'],[-0x1f4b*0x1+-0x1e9c+0xd03*0x5,'i32'],[-0x42*-0x42+-0x714+0x1*-0x6c4,_0x363400(0x584)],[0x36b*-0x1+0xab2*-0x1+0x114d,'f32'],[0x4c0+0x2556+0x7e*-0x4f,_0x363400(0x584)],[-0x23f*-0x1+-0x17e0+0x18dd,_0x4f1f8a['VQdBz']],[-0x1a96+0x17d5+0x601,'u8'],[-0x11c*-0x1+-0x1*0x1a7d+-0x1ca2*-0x1,'u8'],[-0x166+-0x53d+-0x1*-0x9ef,'u8'],[-0x1201+-0xf0b*0x2+0x11e*0x2e,'u8'],[-0x1d1f+-0x4*0x455+-0x10f*-0x2f,'u8'],[-0xaff*-0x1+0x133*-0xb+-0xeb*-0x6,_0x4f1f8a['VQdBz']],[-0x1084+-0x27*0xb3+0x2f1d,_0x363400(0x584)],[0x25a4*-0x1+0x1*-0x1303+0x3bff,_0x363400(0x584)],[-0x2e9+0x1*0xc43+-0x5fe,_0x4f1f8a['VQdBz']],[-0x1c4b+0x11a4+0xe07,_0x363400(0x584)],[-0xa36+-0x17a4+-0x129f*-0x2,'u8'],[0x538*0x2+-0xb8a+-0x2*-0x241,_0x4f1f8a[_0x363400(0x78e)]],[0x24fe+0x1fb*-0x4+-0x1d5*0xe,_0x363400(0x584)],[-0x31*0x59+-0x1928+0x1*0x2da1,'u8'],[0x455+0x7ef+-0x8cc,'v3'],[0x1*-0xc89+0xeee+0x11f,'v3'],[0x18bd+-0x91e+-0xc0f,'v3'],[0x1fc*0x3+-0x4d3+-0x1*-0x27b,_0x363400(0x584)],[-0x859*-0x2+0x1*0x253a+-0x324c,_0x4f1f8a[_0x363400(0x78e)]],[-0x2357+0x9fe+-0x29*-0xb5,_0x363400(0x584)],[-0x1a86+0x135c+0xad2,'v3'],[-0x12db*0x2+-0xdbd*-0x1+0x221*0xd,'i32'],[-0xa33*0x3+-0x1114+-0xdf*-0x3b,'u8'],[0x3f5+-0xe*-0x2c7+-0x271b,_0x4f1f8a['sIarN']],[-0x136a+0x25*-0xca+0x345c,_0x363400(0x584)],[0x1586+0x1572+-0x139a*0x2,_0x4f1f8a[_0x363400(0x78e)]],[0xe50+0x10f*0xb+-0x162d,'f32'],[-0x2da*-0xb+-0x134e+0x2e*-0x2e,_0x363400(0x584)],[-0x1*-0x2367+0xfff+0x1*-0x2f96,'v3'],[-0x19a3*-0x1+0x1e46+-0x340d,_0x4f1f8a[_0x363400(0x946)]],[0x1*0xf29+0x128f+-0x1dd8,'u8'],[-0x22a9+0x2344+-0x2*-0x1a3,'u8'],[-0x1b2+-0x1ab5+0x1d*0x11d,'u8'],[0x2175*-0x1+-0x196*0xa+0x3535,_0x363400(0x584)],[0x231a+-0x2373*-0x1+-0x42a5,_0x4f1f8a[_0x363400(0x946)]]],'HealthScript':[[-0x236c+0x14*0xe5+0x11e0,'u8'],[0x5*0x6d7+-0x1941+-0x896,_0x363400(0x671)],[-0x1e1*-0x13+0x195f+-0x3c92,'f32'],[-0x1*-0xd17+0xfaf+0xe21*-0x2,_0x363400(0x584)],[-0x1af*-0x12+-0xc02+0x1*-0x11c4,'f32'],[0x1da1+0x9*0x34e+-0x3ad3,'f32'],[-0xb68+0x20b8+-0x1*0x14c0,_0x363400(0x584)],[-0x446*-0x7+-0x1a1+-0x1bb5,_0x4f1f8a['VQdBz']],[-0xbd3+-0x19c0*0x1+0x2633,_0x363400(0x671)],[0x142d*0x1+0x1d78+-0x1*0x3101,'i32'],[0xb*-0x1b5+0xe2*0x7+0xd41,'u8'],[-0x1*-0xa94+-0x15d4+0x1*0xbe9,'u8'],[0x19b0+0x5c9+-0x1ecf,'u8'],[0x16c8*0x1+0x12b9*-0x2+0xf55,'u8'],[-0x97b+0x10b6+0x4f*-0x15,_0x363400(0x128)],[0xe21+-0x1b41+-0x6fa*-0x2,_0x4f1f8a[_0x363400(0x3a1)]],[0x9b2*-0x2+0x1*-0x1273+0x26bf,_0x4f1f8a[_0x363400(0x3a1)]],[0x1495+0xec9+0x12*-0x1e9,'obfI'],[-0x1b77+0x177*0x19+-0x818,'obfI'],[-0xb99+0x5c4+0x6f9,'obfB'],[0x7*0x25e+0xbe4+-0x1b46,'obfF'],[0xdd7+-0x2567+0x18d8,_0x4f1f8a['VQdBz']],[-0xfc1+-0xa47+0x1b54,_0x4f1f8a['VQdBz']],[-0x2*0x455+-0x3*0xb29+0x19*0x1bd,'f32'],[-0xcb2+-0x18a8+0x26ae,_0x4f1f8a[_0x363400(0x78e)]],[-0x1721+0x2f*-0x13+0x1bfa*0x1,_0x4f1f8a[_0x363400(0x78e)]],[-0x2*0x71f+0xaa9*-0x1+0x1a47,'v3'],[0x115*0x12+-0xe6c+-0x1*0x39e,_0x4f1f8a['VQdBz']],[-0x1d*0xe9+0x14b4+0x263*0x3,_0x363400(0x584)],[-0xf5d*0x2+-0x103f*0x2+0x2*0x205c,'u8'],[-0x1*0xcbd+-0x112*0x19+0x1*0x290b,'u8'],[-0x2*-0xa3d+0x1b99+0x31*-0xf3,'i32']],'PlayerConfig':[],'WeaponManager':[[0x23ac+0x10dd*-0x2+-0x4f*0x6,'i32'],[0x11ea+-0x22bf*0x1+0x1*0x10f1,_0x4f1f8a['sIarN']],[-0x8f*0x2+-0x2*-0x122b+-0x463*0x8,'u8'],[0x1012+-0x18c7*0x1+-0x97*-0xf,_0x4f1f8a['sIarN']],[0x1411+0x983*-0x4+-0x125f*-0x1,'obfF'],[0x55*0x72+-0x1*-0x1b4b+-0x40a9,_0x4f1f8a[_0x363400(0x78e)]],[-0x1669+0x11*-0x242+-0x49*-0xd7,_0x4f1f8a[_0x363400(0x946)]],[0x33b*0x3+-0xb38+0x20f*0x1,'u8'],[0x1d51+-0x2258+0x590,'u8'],[0xdf7+-0x2484+-0x49*-0x51,_0x4f1f8a[_0x363400(0x946)]],[-0x1*0x8da+0x8e7*-0x4+0x2d06,'f32'],[0x16b7+0x5a7*-0x2+-0xad1,_0x4f1f8a['VQdBz']],[-0x1202+-0x14e*-0x19+-0xdf0,'i32'],[0x1bc+-0x1*0x1ab2+0xcd9*0x2,'u8'],[0xb6f*0x3+0xf54+-0x46f*0xb,_0x4f1f8a[_0x363400(0x3a1)]],[0x2*-0x687+0x7*0x3b5+-0xbf5,_0x363400(0x128)],[-0x19*-0xe3+0x151e+0x2a45*-0x1,_0x4f1f8a[_0x363400(0x78e)]],[-0x17e*-0xa+-0x2347+0xf*0x16d,_0x363400(0x584)],[0x2400+-0x255a+0x266*0x1,_0x4f1f8a['VQdBz']],[-0x463+0x11c6+-0xc4b,_0x4f1f8a['VQdBz']],[0x24f7+-0x122*0x17+0x3*-0x343,_0x363400(0x584)],[0xcdd+-0x112f+0x57a*0x1,'u8'],[0xa47+0x25*0x77+-0x1a4e,_0x4f1f8a[_0x363400(0x3a1)]],[-0x169d+-0x174c+0x1*0x2f29,_0x363400(0x128)],[-0x1094+-0xf9b+0x1*0x2183,_0x4f1f8a['gXnCa']],[-0x73a*0x5+-0x2154*0x1+0x46de,_0x363400(0x7b0)],[0xb*0x377+0x49*-0x31+-0x18*0xf2,_0x363400(0x7b0)],[0x661+0x1ee*-0x14+-0x89*-0x3f,_0x363400(0x7b0)],[0x1f0b+0x466*-0x2+-0x14b3,'obfB'],[0xbbd+-0xc67+0x3b*0xa,_0x4f1f8a['IRutZ']],[0xc1*-0xf+-0xbf*-0x12+-0x1*0x6f,_0x4f1f8a[_0x363400(0x3a1)]],[0x1dd2+0xb*0x28d+-0x31*0x125,_0x4f1f8a[_0x363400(0x946)]],[0xd48+0x219d*-0x1+0x1625,'u8'],[-0x1*0x8dd+0x2f*0x5+-0x116*-0x9,_0x4f1f8a[_0x363400(0x946)]],[-0x785+-0xa02*0x2+0x1d61,_0x363400(0x671)],[0x1a7d+0x7cb+-0x2048,_0x363400(0x671)],[-0x3*0x7f0+-0x186b+0x324f,'u8'],[0x2ef*0x1+0x667+-0x39d*0x2,'u8'],[-0x11d0+0x1f80*-0x1+0x336d,'u8'],[0x1e17+0x1*-0x1bcd+-0x2c,'u8'],[0x53*0x21+-0xc57+0x3c3,'u8'],[0xf*-0x224+0x3df+-0x1*-0x1e8d,_0x363400(0x671)],[-0xb0*0x2e+-0x1b2f+-0x1f*-0x1f9,'u8']],'GG_GameManager':[[0x26c1+0x1c91*0x1+-0x432e,'u8'],[0x2453+0xe79+-0x32a0,'f32'],[0x1*-0x1fb5+0x1*-0x63b+0x2634,'u8'],[0xbba+0x23eb+-0x2*0x17b0,'u8'],[-0x2398+0x258e+-0x1*0x1ae,'f32'],[0x4*0x3f8+0x18b9+-0x284d,'f32'],[-0x92a+0x1460+-0x2*0x573,_0x4f1f8a[_0x363400(0x946)]],[-0x13e4+0x1fd*0x2+0x103e,_0x4f1f8a[_0x363400(0x946)]],[-0x31e+-0x851+0x2d*0x43,'u8'],[0x1bcd+0x5b*-0x3e+-0x9*0x97,'u8'],[-0xdfd+-0x1*-0x149b+-0x626,_0x363400(0x584)],[0x620+-0x612+-0x1*-0x6e,_0x363400(0x584)],[0x22d2+-0x2158+-0xea,_0x363400(0x671)],[-0x119*0xe+0x74*-0x20+0x1e72,'u8'],[0x18b1+0x4b2+-0x1caf,_0x363400(0x671)],[0xa*-0x36e+0x6d7+0x1c31,_0x4f1f8a['sIarN']],[0x14e2+0x860*0x1+-0x1c82,'i32'],[0x3dd*-0x8+0x4d*-0x79+0x4435,_0x363400(0x128)],[-0xb6f+-0x8*-0x175+0xc3,_0x4f1f8a['gXnCa']],[0x22c1+0x1e25+0x3fd6*-0x1,_0x4f1f8a['gXnCa']],[-0x1*0xf04+0x1b0f+0x17*-0x79,'u8'],[0x6f7+-0x1*0x1ca5+0x16de*0x1,_0x363400(0x671)],[0xb73*-0x1+-0x44a+-0x1*-0x1121,'u8'],[-0x17ab+-0x969+0x2284*0x1,_0x4f1f8a[_0x363400(0x78e)]],[0x2319+0x118f+0x665*-0x8,'u8'],[-0x4*-0x688+0x1*-0x2429+-0x3db*-0x3,'u8'],[0x21f4+-0x1*-0x204f+-0x409f,'u8'],[-0x1006+-0x1a03*-0x1+0xed*-0x9,_0x4f1f8a['sIarN']],[0x182d+-0x6b4+0xfcd*-0x1,_0x4f1f8a[_0x363400(0x78e)]],[-0x1ecb+-0x17f6+-0x3871*-0x1,'u8'],[-0x66f*-0x4+-0x797*-0x3+-0x4*0xbb4,'u8'],[-0x1*-0xe3+-0x2047+-0x4*-0x847,_0x363400(0x671)],[0x4e6+-0x110e+0xfe*0xe,_0x4f1f8a[_0x363400(0x946)]],[-0x12*-0x27+0x2014+-0x1f2*0x11,_0x363400(0x584)],[-0x19*-0x101+0x251b+-0x3c70,_0x4f1f8a[_0x363400(0x946)]],[0x21a4+-0x1*0x37f+-0x1c5d,_0x363400(0x584)],[0x2b*-0xaf+-0x17b3*0x1+0x36e4,_0x4f1f8a[_0x363400(0x946)]],[0x7a3*0x2+-0xfb4+0xe*0x29,_0x4f1f8a['sIarN']]],'TDM_GameManager':[[-0x18b6*-0x1+-0x190d+0x6f,'u8'],[-0x222a+0x1d40+0x50a,'u8'],[0x1a94+-0x309*0x3+-0xde*0x14,'u8'],[0x2539+0x16f*0x5+-0x2c40,'f32'],[0x5*0x736+0x1*-0x171a+-0x434*0x3,'u8'],[0x2*-0xe5+0x18a9+-0x71*0x33,_0x4f1f8a['VQdBz']],[-0xed+-0x2687+0x27d4,_0x363400(0x584)],[0x1039+-0x11b3*-0x1+-0x2188,'i32'],[0x256f+-0xb9*-0x9+0x2*-0x15c4,_0x4f1f8a[_0x363400(0x946)]],[-0x74a+0x2*0x8c5+-0x9d4,'u8'],[-0xe7*0x1b+-0x1*0x1006+0x28d0,'u8'],[0x61*0xb+0x1a9e*0x1+-0x1e59,_0x4f1f8a['VQdBz']],[0xf25+0x113f+-0x1ff0,_0x4f1f8a[_0x363400(0x78e)]],[0xc7e+-0x1841+0xc3b,_0x363400(0x671)],[0x97d+0xa2f+0x11*-0x120,'u8'],[-0x25f1+0xeea+0xb*0x225,_0x363400(0x128)],[0x30c*-0x9+-0x260+-0x6a*-0x4a,_0x363400(0x128)],[0x1d87*-0x1+0x1c45*0x1+0x22e,_0x4f1f8a['gXnCa']],[-0x2697+-0x206d+0x4804,_0x4f1f8a[_0x363400(0x3a1)]],[0x1*0x190b+-0x679*0x1+0x117e*-0x1,'u8'],[-0x1cb9+0x1*-0x841+0x1*0x2656,'u8'],[-0x13*0x3d+-0x1*-0x410+-0x1d7*-0x1,_0x4f1f8a[_0x363400(0x946)]],[-0x21be+-0xb1c+-0x1*-0x2e46,'u8'],[0x3f1+0x938+-0xba5,'u8'],[0xf4d+0x1288+0x204d*-0x1,_0x363400(0x584)],[-0x2*-0x1175+0x2*-0xccd+-0x7c4,_0x363400(0x671)],[0x4*-0x418+0xf12+0x2de,'i32'],[0x1840+-0x5c4+0x2*-0x874,_0x363400(0x584)],[-0xb*-0x2b7+-0xc8d+-0x2*0x7dc,_0x363400(0x671)],[0xd*-0x2bf+0x170d+0xe42,_0x363400(0x671)],[-0x1*-0xddc+-0x1d17*-0x1+-0x47*0x95,_0x4f1f8a[_0x363400(0x78e)]],[-0x7*0x409+0x29*-0x53+0x2b2e,_0x363400(0x584)],[0x13bf+-0x8a*0x18+-0x527,_0x363400(0x671)],[0x1dc4+0xa4*0x12+-0x279c,'u8'],[-0x104d+-0xbd1+-0x24b*-0xd,'u8'],[-0xf54+0x56*-0x19+0x1972,_0x363400(0x584)]],'PhotonNetworkSync':[[0x1696*-0x1+-0x6*-0x248+-0x5*-0x1d2,'v3'],[-0x584*-0x4+0xf37+-0x1*0x2507,_0x363400(0x671)],[-0xec1*0x1+-0x23*-0x56+-0xa7*-0x5,'u8'],[0x3*0xc63+0x13b*0x17+-0x1*0x4131,'u8'],[-0x20cc*0x1+0x1fa3+0x29*0x9,'v3'],[-0x1*-0xcbb+-0x24a3*-0x1+-0x2*0x1885,'u8'],[0x1*-0xf9a+-0x2*-0x4de+0x636,_0x4f1f8a['sIarN']],[-0x91f+-0x2661+0x2fdc,'i32'],[-0x2570+0x122f+-0xf*-0x14f,_0x4f1f8a[_0x363400(0x78e)]],[-0x178d+-0x105*-0x1+0x1e9*0xc,'f32'],[-0x2060+-0x6c*0x35+0x1b92*0x2,'f32'],[-0x243c+0x2ea*-0x8+0x3bf8,'v3'],[0x1*0x22db+0x40e+-0x2671,_0x4f1f8a[_0x363400(0x78e)]],[0xe85+0x546+-0x134f*0x1,_0x4f1f8a[_0x363400(0x78e)]],[0x741+0x1279*0x1+-0x193a,_0x363400(0x671)],[-0x1cd7+0x11bd*-0x1+0x2f1c,_0x4f1f8a['VQdBz']]],'MouseLook':[[0x6a9+0x1da9+-0x243e,'f32'],[0xe3*0x4+0x1d4f+-0x20c3,'f32'],[-0xbef+0x583+0x688,_0x363400(0x584)],[0x26af+-0x1fc*-0xa+0x1*-0x3a67,'f32'],[0x1f71+0x26dd+-0x462a,'f32'],[0x53*-0x3b+-0x1c49*0x1+-0x17c9*-0x2,_0x363400(0x584)],[0x1bda+-0x1f43+0x1*0x399,'f32'],[-0x2*0x89d+0x1*0x23b7+0x97*-0x1f,'u8'],[-0x14a2+-0x1b*-0x3d+-0xe6b*-0x1,_0x363400(0x584)],[0xf24+-0x9*0x369+0xfc9,_0x4f1f8a[_0x363400(0x78e)]],[0x6*-0x621+0x15c0+0xf46,'i32'],[0x25b4+0x12ef+0x385f*-0x1,'u8'],[0x9fe+0xd7a+-0x1730,'v2']],'NetworkPlayerAnimations':[[0x28f+-0x1fa4+0x17*0x14b,'v3'],[0xb63+0x25*-0xbb+-0x4*-0x416,'v3'],[0x55c+-0x9d0*-0x1+0x2*-0x736,'u8'],[-0xca*-0x1+0x3c2*-0x2+0x89*0xe,_0x363400(0x671)],[0x2d2+0x191a+-0x1b24,_0x4f1f8a['sIarN']],[0x1206+-0x7cc+-0x8e*0x11,'f32'],[-0x1*0x231d+-0x17a8+0x3b95,'f32'],[0x1*0x517+-0x4c5+0x8a,'f32'],[-0x1eb6+0x81+0x1*0x1f15,'f32'],[-0x265d+0x1*-0x755+0x2e9a,'f32'],[-0x187*0x12+0x1adf+0x18b,_0x363400(0x584)],[-0xba7+0x74f*0x4+-0x10a5,'f32'],[0x78c+-0x228+-0x470,_0x4f1f8a[_0x363400(0x78e)]],[0xa7+-0xdab*0x1+0xdfc,_0x4f1f8a[_0x363400(0x78e)]],[-0x23dd*-0x1+0xfee*-0x2+-0x305,_0x363400(0x584)],[-0xdc4+0xb*0x266+-0x1*0xb9e,_0x4f1f8a[_0x363400(0x78e)]],[-0x9ae+-0x641+-0x10f3*-0x1,_0x363400(0x584)],[-0xc7+-0x6f*-0x48+-0x1d69*0x1,_0x363400(0x671)],[0x1dd7+-0x49*0x1d+-0x1486,'u8'],[-0x199*-0x7+0x185b+-0x227a*0x1,_0x4f1f8a[_0x363400(0x946)]],[0x1572+0x365*-0x5+-0x365,'i32'],[-0x1d23*-0x1+0x301*0xb+-0x3d16,'u8'],[-0x12d5*-0x1+-0x7*-0x4cd+0x1b6*-0x1e,_0x4f1f8a[_0x363400(0x78e)]],[0x2461*-0x1+0xb2d+-0x5*-0x544,_0x4f1f8a[_0x363400(0x78e)]],[0x853+0x731+-0xe60,'f32'],[-0x1*-0x66a+-0x9c6+-0x242*-0x2,'f32'],[-0x1e80+0x58*-0x33+0x3134,'u8'],[-0x270e+-0x6*-0x2b1+0x10*0x182,'u8'],[-0x3e*0x1f+-0x1cec+0x25aa,'v3'],[0x2f*0xb0+0xd*0x1ba+-0x357a,'v3'],[-0x1124*-0x1+-0x2539+0x15a9,'u8']],'NPC_Cotroller':[[0x238b+0x1cb8+-0x402f,'v3'],[0x1276+-0x995+-0x8c1,_0x4f1f8a['VQdBz']],[0x255e+-0x13a3+-0x1197,_0x363400(0x584)],[-0xaf4+-0x1725*0x1+0x226f,'u8'],[-0x2371+0x19f5+0x9d3,'u8'],[-0x1*-0x248a+0xe3*0x12+0x47*-0xbc,'v3'],[0xe1c+-0x14ab+0x72b,'u8'],[-0x810+0xebb+-0x60b*0x1,_0x363400(0x584)],[0x766+-0x24c6+0xf02*0x2,'f32'],[-0x424+-0x1a4e+0x1f2a*0x1,_0x4f1f8a[_0x363400(0x78e)]],[-0x9*-0x8+0x1486+-0x2de*0x7,'f32'],[0x5*-0x5ed+0x1*-0x879+-0xcf6*-0x3,'u8'],[-0x6ee+-0xd3b+-0x91*-0x25,_0x4f1f8a[_0x363400(0x78e)]],[0x160f+0x5*0x424+-0x29eb,'f32'],[0x93*0x2+0x1*-0x1cdb+0x1c91,_0x4f1f8a[_0x363400(0x78e)]],[0x17b5*0x1+0x1*-0xf0b+0x2*-0x3e5,'f32'],[-0xc3e+0x1de2+-0x10c0,'u8'],[-0x10cb+-0x16dc+0x2893,'f32'],[-0x1*0xe0+-0xf38+0x1108,'v3'],[0x1c*-0x11f+0x2ca+0x1d96,_0x4f1f8a[_0x363400(0x78e)]],[0x2113+-0x248a+0x1*0x477,_0x4f1f8a['sIarN']],[-0x2a*0xe3+0x1d6b+-0x8d7*-0x1,_0x363400(0x584)],[0x155*-0x11+0x258b*-0x1+0x7a7*0x8,_0x4f1f8a['VQdBz']],[-0x11b+0x226a+-0x2043,_0x4f1f8a[_0x363400(0x78e)]],[-0x23e6+-0x582*0x1+0x2a7c,'v3'],[-0x7*-0x23+0x2*-0x63f+-0xca9*-0x1,'f32'],[0x1*0x1537+0xa39+-0x2*0xf26,_0x4f1f8a[_0x363400(0x78e)]],[-0x1*0x182f+0x274+-0x135*-0x13,'v3'],[0x167*0x7+0x2*-0x81a+0x7a7,'u8'],[-0x1ceb+0x270+0x1bc3,_0x4f1f8a[_0x363400(0x78e)]],[0x1840+0x115a+0x284a*-0x1,'v3'],[-0x1*0xc2b+0x969+0x422,_0x4f1f8a[_0x363400(0x946)]],[0x24*0x10b+0x1b47+-0x3f67,_0x4f1f8a[_0x363400(0x946)]],[0x257*-0xf+-0x802+0x3*0xed9,'f32'],[-0x1c92*-0x1+-0x264b+0x1*0xb2d,'u8'],[-0x37*0x40+-0x57c*-0x6+-0x11b0,'v4'],[0x14cc+0xa*0x5f+-0x16fa,_0x4f1f8a['VQdBz']],[-0x1a02+0x142e+0x3b0*0x2,_0x4f1f8a['VQdBz']],[0x12d1*0x1+0x2642+-0x3783,_0x4f1f8a[_0x363400(0x78e)]],[0x1807*-0x1+-0x5*0x78b+0x3f56,'u8'],[0x22+-0x3e0+0x55e,_0x4f1f8a[_0x363400(0x946)]]],'TargetHealth':[[-0x8a2+-0x1979+0x222b*0x1,_0x363400(0x671)],[-0x981+-0x392*0x1+0x25*0x5b,_0x363400(0x671)],[-0x21ca+-0x1eba+-0x40b8*-0x1,'u8'],[0x1*-0x2033+-0x189*0x2+0x33b*0xb,_0x363400(0x671)],[0xb*-0x13a+-0xaa*-0x8+0x876,'i32'],[0x1*0x21c7+-0x18ec+-0x88f,_0x363400(0x671)],[0x211*0x2+-0xf01+0xb2f,_0x363400(0x671)],[0x1*0x1ad9+-0xe*0x1a5+-0x34f,_0x4f1f8a['VQdBz']],[0xaf*-0x24+-0x2*0x67f+0x2626,'f32'],[0x12+0x1107+-0x33*0x53,'u8'],[-0x64f+-0x206a+0x274d,_0x363400(0x584)],[0x14c4+-0x1fce+0x41*0x2e,'u8'],[0x1*0x175d+0x2392+0x3a47*-0x1,_0x4f1f8a[_0x363400(0x946)]],[-0x1fdb+0xcfb+0x138c,'i32'],[0x18e3+0x16*-0x130+-0x1fd*-0x1,_0x363400(0x584)],[0x1c9b+-0x4ae+-0x1721,'u8']],'SectatorCamera':[[0x6*-0x50a+0x2bb*0x1+0x1b95,_0x4f1f8a['VQdBz']],[-0x12*-0x16f+-0xd5a*0x1+0xe*-0xe2,_0x4f1f8a['VQdBz']],[-0x1108+0x2*0xa51+-0x37e*0x1,_0x4f1f8a[_0x363400(0x78e)]],[-0x10d1+-0x547+-0xb1c*-0x2,'v3'],[-0x17cc+-0x1f3d*-0x1+-0x1*0x745,'v3'],[-0x443*0x3+-0xc5*-0x1f+-0xaca,_0x4f1f8a['sIarN']],[0x6c3+0xcca*-0x2+0x7*0x2bb,'i32'],[-0xbd4+-0x26c*-0x1+0x9b8,_0x4f1f8a[_0x363400(0x78e)]],[0x9b3*0x1+-0x1f8a*-0x1+0x28e9*-0x1,_0x363400(0x671)],[-0xa50+-0x3*-0x73d+-0xb0f,_0x4f1f8a['VQdBz']],[-0x295*-0x7+0xd09+-0xc0*0x29,'u8'],[0x844+-0x77*-0x1d+0x155f*-0x1,'v3'],[0xb5a*0x2+-0x58*-0x45+-0x1*0x2e00,'v4'],[-0x1647+0x12b1+-0x2*-0x209,'u8'],[-0x133d+0x1ac3+-0x706,_0x4f1f8a['sIarN']]],'UISettings':[[0xc6d+0x2*-0x5fc+-0x55,_0x363400(0x671)],[-0x1f55+0x23ab+0x2*-0x217,_0x363400(0x584)],[-0xa21+-0x11c0*-0x1+-0x65b,'u8'],[0x2183+0x39*-0x9c+0x281,_0x4f1f8a['sIarN']],[-0x66b*0x5+0x197e+0x1*0x7ed,'i32'],[0x257b+0x19a8+-0x3*0x1499,_0x4f1f8a[_0x363400(0x946)]],[0x1642+0x3c5+-0x18ab,'u8'],[0x2*-0xdc+0x148*0x8+-0x72b*0x1,'u8'],[-0x1*-0x11fe+0xeb*-0x1f+0xbd5,'u8'],[0x2343*-0x1+-0xe4b+0x32ed,'u8'],[0x2072+-0x1854+-0x6be,'u8'],[0x137*-0xb+0x6a6*0x1+0x818,'u8'],[0x256c+0x320*0xb+-0x466a,'u8'],[-0x228*0x5+0x1*-0x14d3+-0x3*-0xb1d,'f32'],[0x262f+0x1*0x885+0x8*-0x59e,_0x363400(0x584)],[-0x18df*-0x1+-0x796+0x1*-0xf31,'u8'],[0xfbf*0x1+-0xd*-0x1a+0x3*-0x4db,_0x4f1f8a[_0x363400(0x78e)]],[-0x61f*0x1+0x1*-0x783+0x1042,_0x4f1f8a['sIarN']],[0x1f*-0xaa+-0x1c72+0x3400,'u8'],[-0x1e1*0x9+0x2*-0x11c5+0x380f,'u8'],[-0x1f*-0xbd+-0x2202+0x97*0x19,'v2'],[0x2506+-0x4*-0x5fe+-0x3956,'v2'],[0x89*-0x2b+-0x1*-0x1a56+0x5d,'u8'],[0x1125+-0xbfb*0x1+0x1*-0x172,'u8'],[-0x1e36+-0x1aad+0x3caf,_0x363400(0x584)],[-0x1efc+-0x3*-0x809+0xab1,'v3'],[0x18c1*-0x1+0x388+0x1919,'f32'],[-0x1*0x5+-0x1*0x1f2a+0x2313,_0x363400(0x584)],[0xf0f+-0x2362+0x183b,_0x4f1f8a['VQdBz']],[-0x42*-0x1d+-0x21ac+0x1e22*0x1,'u8'],[0x201a+-0x1*0x201b+-0x5*-0xca,'u8'],[0x7*0x38f+0x4cf*0x8+0x3*-0x13cf,_0x363400(0x671)],[-0x3a4*-0x9+0x1b80+-0x3844,_0x4f1f8a[_0x363400(0x946)]],[-0x478*-0x6+0x2c*-0x2+0xb3a*-0x2,_0x363400(0x671)],[0x19b1+0x26a5+-0x3c4e,_0x4f1f8a[_0x363400(0x946)]],[-0x4ae*-0x2+-0x1ed1*-0x1+0x3*-0xc0b,_0x363400(0x671)],[-0xffb*-0x1+0x67f+0x1*-0x126a,'i32'],[0x908+-0x1*-0x1bd7+-0x20cb,_0x4f1f8a[_0x363400(0x946)]],[-0x755*-0x1+-0x1*0x112+-0x22b,'i32'],[0x1*-0x257c+0x71*0x21+0x1b07,_0x4f1f8a[_0x363400(0x946)]],[0xc1e+-0x1218+0xa1a,'i32'],[-0x1e9+-0x2e*0x48+-0x132d*-0x1,'u8'],[-0x8*-0x40f+0x40*-0x22+-0x1*0x13a3,'u8'],[-0xf6b+-0x8*-0x1d1+0x539,'u8'],[0x3*0x6f3+0x1*0x25c1+-0x3643,'u8'],[0x9e7+0xad8+-0x1033,_0x4f1f8a[_0x363400(0x78e)]]]},_0x436391={},_0x4931ea={};function _0x242ae1(_0x1835e0,_0x463b5d,_0xbccf6a){var _0x59d0f1=_0x363400,_0x819f60={'zbmip':function(_0x3ea9ab,_0x11a28f){return _0x3ea9ab+_0x11a28f;},'RGZcu':_0x59d0f1(0x8b8),'MtDcR':function(_0x24a6aa,_0x2f0e5e){return _0x24a6aa===_0x2f0e5e;}};if(_0x4f1f8a[_0x59d0f1(0xa6d)](_0x4f1f8a['GkojS'],_0x4f1f8a['NEtpQ'])){_0x3c1fe3[_0x59d0f1(0xaf7)]=!!_0xc4e7c8;var _0x28fe0f=_0x5b9cf7();if(!_0x28fe0f)return;_0x28fe0f[_0x59d0f1(0xa6f)+_0x59d0f1(0x23c)]=_0x819f60['zbmip'](_0x59d0f1(0x7f8)+_0x59d0f1(0x97f),_0x456609[_0x59d0f1(0xaf7)]?_0x59d0f1(0x278)+'n':'');if(_0x1909f1[_0x59d0f1(0x37f)])_0x4a9c11[_0x59d0f1(0x37f)]['style'][_0x59d0f1(0x2be)+'ty']=_0x20c1f9['open']?'1':'.5';if(_0x5564c4[_0x59d0f1(0xaf7)]){_0x1922d4(_0x5a6360['cat']);try{var _0x23b303=_0x2d4e7e['inner'+'Heigh'+'t']||-0x538+0x737*0x3+-0x3*0x46f;if(_0x23b303<0x137*0x17+-0x146*-0x16+-0x3589)_0x396931(![]);}catch(_0x3b4802){}}}else return function(_0x55d4a7){var _0x5e8587=_0x59d0f1,_0x172da2={'BkgpD':function(_0x4cb4de,_0x222914){var _0x5e52be=_0x1a9a;return _0x4f1f8a[_0x5e52be(0xb44)](_0x4cb4de,_0x222914);}};try{if(_0x5e8587(0xb45)!=='lSwtf')_0x3f54b5[_0x5e8587(0x741)+_0x5e8587(0x2ab)+_0x5e8587(0x750)](_0x371ead,_0x819f60['RGZcu'],{'value':_0x21431a['name'],'configurable':!![]});else{var _0x10b393=_0x55d4a7&&_0x55d4a7[_0x5e8587(0x4f8)]?_0x55d4a7['val']():0x24ad+-0x20*-0x22+-0x1*0x28ed;if(!_0x10b393)return;var _0x155637=_0x4931ea[_0x1835e0]||(_0x4931ea[_0x1835e0]={}),_0x32d14d=_0x155637[_0x10b393];if(!_0x32d14d)_0x32d14d=_0x155637[_0x10b393]={'ptr':_0x10b393,'firstSeen':Date[_0x5e8587(0x5bc)](),'hits':0x0};_0x32d14d['hits']++;if(_0xbccf6a){if(!_0x436391[_0x10b393])_0x436391[_0x10b393]={'ptr':_0x10b393,'kind':_0x1835e0,'firstSeen':Date['now'](),'hits':0x0};_0x436391[_0x10b393]['hits']++;}else{if(_0x5e8587(0x57c)!==_0x4f1f8a[_0x5e8587(0x2f3)]){var _0x2ae4ae=_0x45a1b6[_0x1835e0];if(!_0x2ae4ae||_0x2ae4ae['ptr']!==_0x10b393){_0x45a1b6[_0x1835e0]={'ptr':_0x10b393,'firstSeen':Date[_0x5e8587(0x5bc)](),'hits':0x0,'replaced':!!_0x2ae4ae};try{var _0x25b939=_0x54d5c9['filte'+'r'](function(_0x38bc8b){return _0x819f60['MtDcR'](_0x38bc8b['type'],_0x1835e0);})[-0x143c+0x17c+-0x19*-0xc0];_0x127a34={'type':_0x1835e0,'atMs':Date[_0x5e8587(0x5bc)]()-_0x3bf38d,'originalFunc':!!(_0x25b939&&_0x25b939['hook']&&typeof _0x25b939[_0x5e8587(0x4f4)][_0x5e8587(0x23d)+_0x5e8587(0x93b)+'nc']===_0x4f1f8a[_0x5e8587(0x132)]),'resolveGameAtFire':!!_0x59f2ea(),'gameSourceAtFire':_0x315f1a[_0x5e8587(0x776)+'e']};}catch(_0x48face){}}}else _0x3fbc85['note']=_0x172da2[_0x5e8587(0x6dd)](_0x5e8587(0x8d0)+_0x5e8587(0x8f0)+'e\x20pre'+'sent\x20'+_0x5e8587(0x343)+_0x5e8587(0x1c4)+_0x5e8587(0x48f)+'assif'+_0x5e8587(0x361)+'s\x20ene'+_0x5e8587(0x66f)+'yet\x20-'+_0x5e8587(0xadb)+'k\x20','isLoc'+_0x5e8587(0x585)+'\x20each'+_0x5e8587(0x8fd)+'y\x20in\x20'+'`play'+'ers`.');}if(_0x1835e0===_0x4f1f8a[_0x5e8587(0x2f2)]&&_0x16771b['on'])try{_0x4be81a(_0x10b393);}catch(_0x371344){}if(!_0x463b5d){if(_0x4f1f8a['GBWic'](_0x5e8587(0x422),_0x4f1f8a[_0x5e8587(0x285)])){var _0x25b939=_0x54d5c9[_0x5e8587(0x1fd)+'r'](function(_0x238a55){return _0x238a55['type']===_0x1835e0;})[0xc7*-0x31+-0xeed*-0x2+-0x2bf*-0x3];if(_0x25b939&&_0x25b939[_0x5e8587(0x4f4)])try{_0x25b939[_0x5e8587(0x4f4)][_0x5e8587(0x774)+'ed']=![];}catch(_0x3eb695){}}else return null;}}}catch(_0x4766e6){}};}function _0x5a0219(){var _0x20efc4=_0x363400;if(_0x54d5c9[_0x20efc4(0x6c4)+'h'])return!![];if(!window['Unity'+_0x20efc4(0x28e)+_0x20efc4(0x921)]||!window[_0x20efc4(0x198)+_0x20efc4(0x28e)+'dkit']['Runti'+'me'])return![];var _0x506077=window['Unity'+'WebMo'+_0x20efc4(0x921)][_0x20efc4(0x4d3)+'me'];if(!_0x506077['plugi'+'ns']||!_0x506077[_0x20efc4(0x22e)+'ns'][_0x20efc4(0x6c4)+'h'])return![];_0x4c3d3e=window['Unity'+'WebMo'+'dkit']['Value'+_0x20efc4(0x887)+'er'],_0x394d97=_0x394d97||_0x506077[_0x20efc4(0x22e)+'ns'][_0x4f1f8a[_0x20efc4(0x83c)](_0x506077[_0x20efc4(0x22e)+'ns']['lengt'+'h'],0x1cd8+-0x1*-0x2eb+-0x5*0x65a)];if(!_0x394d97||typeof _0x394d97[_0x20efc4(0x1e2)+_0x20efc4(0x976)]!==_0x4f1f8a[_0x20efc4(0x132)])return![];for(var _0x57e38a=0x566+-0x689+-0x123*-0x1;_0x57e38a<_0x557c40[_0x20efc4(0x6c4)+'h'];_0x57e38a++){var _0x3afca7=_0x557c40[_0x57e38a];try{var _0xc16ad0=_0x394d97['hookP'+'refix']({'typeName':_0x3afca7[_0x20efc4(0x9cd)],'methodName':_0x4f1f8a[_0x20efc4(0x153)],'params':[_0x20efc4(0x671),_0x20efc4(0x671)],'returnType':undefined},_0x242ae1(_0x3afca7['type'],_0x3afca7[_0x20efc4(0x5a0)],_0x3afca7[_0x20efc4(0x2af)]));_0x54d5c9['push']({'type':_0x3afca7[_0x20efc4(0x9cd)],'hook':_0xc16ad0,'keep':_0x3afca7[_0x20efc4(0x5a0)]});}catch(_0x43d9c1){_0x357f32[_0x20efc4(0xaf5)](_0x4f1f8a['YkQkC'](_0x3afca7['type']+':\x20',String(_0x43d9c1&&_0x43d9c1[_0x20efc4(0x8a3)+'ge']||_0x43d9c1)['slice'](0x17*-0x18a+-0x70c+0x2a72,-0x1*0x748+0x18b0+-0xb3*0x18)));}}return _0x4f1f8a[_0x20efc4(0xa5b)](_0x54d5c9['lengt'+'h'],-0x1bb5+0xfb5*0x2+0x49*-0xd);}function _0x299bad(){var _0xc5ead7=_0x363400,_0x503711=-0x2a5*-0x1+0x59*0x1d+-0x12*0xb5;for(var _0x140050=-0x1673+-0x2cc*0xa+0x326b;_0x4f1f8a[_0xc5ead7(0x70a)](_0x140050,_0x54d5c9['lengt'+'h']);_0x140050++){if(_0x54d5c9[_0x140050][_0xc5ead7(0x4f4)]&&_0x54d5c9[_0x140050][_0xc5ead7(0x4f4)]['table'+_0xc5ead7(0x8fa)]!==undefined)_0x503711++;}return _0x503711;}function _0x21ec32(){var _0x4de049=_0x363400;if(_0x4f1f8a['FTRtx']!==_0x4de049(0x5c3)){var _0x463501=0x1*-0x629+-0x1507*0x1+-0x6*-0x488;for(var _0x486dff=0x1d82+-0xa57*-0x1+-0x27d9;_0x486dff<_0x54d5c9[_0x4de049(0x6c4)+'h'];_0x486dff++){if(_0x54d5c9[_0x486dff][_0x4de049(0x4f4)]&&_0x54d5c9[_0x486dff][_0x4de049(0x4f4)][_0x4de049(0x60a)+'ed'])_0x463501++;}return _0x463501;}else _0x54f2fa[_0x4de049(0x26b)+'onten'+'t']=_0x2658fd[_0x4de049(0x8ed)+_0x4de049(0x9d8)](_0x173fbc,null,-0x3b9+-0x1*-0x1858+-0x1*0x149e);}var _0x258b8a=null,_0x401047=[],_0x41564b={},_0x127a34=null;function _0x2be665(_0x37cc47){var _0xfe654d=_0x363400,_0x52496d={'sVBAE':function(_0x36b66d,_0x17e240){return _0x36b66d===_0x17e240;},'mcDbR':_0x4f1f8a[_0xfe654d(0x9ff)],'cjtXR':function(_0xb5ec40,_0xecd76a){var _0x59657d=_0xfe654d;return _0x4f1f8a[_0x59657d(0x928)](_0xb5ec40,_0xecd76a);},'FckLK':function(_0x4feaf5,_0x36fe5b){return _0x4feaf5+_0x36fe5b;},'oPSSN':function(_0x533e11,_0x19ca42){return _0x533e11+_0x19ca42;},'BFWJP':function(_0x1160e4,_0x3207a6){return _0x1160e4+_0x3207a6;},'pVmtO':function(_0x4261b8,_0x4b02be){return _0x4261b8+_0x4b02be;}};try{if('tfhgq'===_0xfe654d(0x655)){var _0x14d74e=_0x1ff586[_0x2ce8ee],_0x29bb29=_0x52496d[_0xfe654d(0x432)](typeof _0x14d74e['v'],_0x52496d['mcDbR'])?_0x52496d[_0xfe654d(0x3a0)](_0x49e5d1['round'](_0x14d74e['v']*(-0xf*0xcf+0x1*0x1a9d+-0xa94)),0x209f+-0x13*0xb8+-0x303*0x5):_0x14d74e['v'];_0x2e41e2['push'](_0x52496d['FckLK'](_0x52496d[_0xfe654d(0xa9d)](_0x52496d[_0xfe654d(0x7a8)]('\x20\x20'+_0x52496d['pVmtO']('0x',_0x14d74e['o'][_0xfe654d(0x71d)+'ing'](-0x26e9+0xaf*-0x1+0x27a8))['padEn'+'d'](-0x2671+-0x3d*-0x5f+0xfd6),'\x20')+_0x14d74e['k'][_0xfe654d(0x6c6)+'d'](0xb*0x5d+0x1*0xb89+-0xf7d),'\x20'),_0x2c84ba(_0x29bb29)[_0xfe654d(0x6c6)+'d'](0x2*0x9b9+0x1f4f+-0x32b1))+'\x20'+(_0x14d74e['raw']||''));}else{if(!_0x4c3d3e||!_0x37cc47)return null;var _0x49c640=new _0x4c3d3e(_0x37cc47)['getCl'+_0xfe654d(0x4d7)+'me']();return _0x4f1f8a[_0xfe654d(0xa79)](_0x49c640,undefined)?null:_0x49c640;}}catch(_0x204f5f){return null;}}function _0x47105b(_0x196714,_0x283186,_0x4dd55a){var _0x25e533=_0x363400;if(_0x4f1f8a['BHTNM']===_0x25e533(0x85f)){var _0x216738=_0x4f1f8a[_0x25e533(0x6d7)]['split']('|'),_0x4cea72=0x76d*0x2+-0x181a+0x940;while(!![]){switch(_0x216738[_0x4cea72++]){case'0':for(var _0x3123d6=-0x1e45+0x109f+0xda6;_0x4f1f8a[_0x25e533(0x635)](_0x3123d6,_0x4dd55a);_0x3123d6++)_0x1be90b['push'](_0x4327f4[_0x25e533(0x524)+'oat32'](_0x4f1f8a['kWosy'](_0x196714,_0x283186)+_0x3123d6*(0x2*0x8fe+0xc91+-0x1e89),!![]));continue;case'1':var _0x4327f4=_0x30dc0d();continue;case'2':var _0x1be90b=[];continue;case'3':return _0x1be90b;case'4':if(_0x4f1f8a[_0x25e533(0x6ec)](_0x283186,0xc4d*0x1+0x25dc+-0x1*0x3229)||_0x4f1f8a['pwfZv'](_0x283186,_0x4dd55a*(-0x620+-0x1*0xffb+0x161f*0x1))>_0x4327f4['byteL'+'ength'])return null;continue;case'5':_0x315f1a['ok']+=_0x4dd55a;continue;case'6':if(!_0x4327f4)return null;continue;}break;}}else return _0x33fbcc['round'](_0x37403f*(-0x17b*-0x13+-0x1998+-0x225))/(0x1*0x5a9+0x6da+-0x6b*0x1d);}var _0x5ac859={'PhotonNetworkSync':[[_0x4f1f8a[_0x363400(0x60c)],'photo'+_0x363400(0x804)],['0x20',_0x4f1f8a['dztoD']],[_0x4f1f8a[_0x363400(0x617)],_0x4f1f8a[_0x363400(0x643)]],[_0x4f1f8a['FsoSh'],_0x4f1f8a['IVdIK']],[_0x363400(0x51d),_0x363400(0x911)+'Look']],'NetworkPlayerAnimations':[[_0x4f1f8a[_0x363400(0x60c)],_0x363400(0x751)+'le'],[_0x4f1f8a['xuoJr'],'sync']],'NPC_Cotroller':[['0x98',_0x363400(0x751)+'le'],['0xb4',_0x4f1f8a[_0x363400(0x2ee)]],[_0x4f1f8a[_0x363400(0x3f7)],_0x363400(0x52c)+'h'],[_0x363400(0x89a),_0x363400(0xa2a)+_0x363400(0x5d9)+_0x363400(0x65d)],[_0x4f1f8a[_0x363400(0x8bb)],_0x363400(0x76a)+_0x363400(0x5d7)]],'EnemyBot':[[_0x363400(0x9e3),_0x363400(0x76a)+'form']]},_0x34d043={'PhotonNetworkSync':[[_0x4f1f8a['Cqjia'],'team'],[_0x4f1f8a[_0x363400(0x1bd)],'local'+_0x363400(0x435)],['0x5c','id']]};function _0x4d62f4(_0x28cd90,_0x986dae){var _0x21b4ca=_0x363400,_0x228898={'ODmhF':function(_0x1d43c3,_0x5d089f){var _0x552727=_0x1a9a;return _0x4f1f8a[_0x552727(0x2cf)](_0x1d43c3,_0x5d089f);},'HWmUC':function(_0x5db6ef,_0x24b3f9,_0x3d91ce){var _0x1c9b69=_0x1a9a;return _0x4f1f8a[_0x1c9b69(0x446)](_0x5db6ef,_0x24b3f9,_0x3d91ce);},'lxDdU':function(_0x4eace1,_0x4e439c){return _0x4f1f8a['iMjtE'](_0x4eace1,_0x4e439c);},'fZiYw':function(_0xd89832,_0x14de8f){return _0x4f1f8a['jVOSC'](_0xd89832,_0x14de8f);},'MUbeu':function(_0x3e9378,_0x4cf1d6){return _0x4f1f8a['muUgi'](_0x3e9378,_0x4cf1d6);}},_0x10e98e=_0x582a61[_0x28cd90]||[],_0x578e0a={'kind':_0x28cd90,'ptr':_0x4f1f8a[_0x21b4ca(0x860)]('0x',_0x986dae[_0x21b4ca(0x71d)+'ing'](-0x1736+0x98c+0xdba*0x1)),'pos':null,'posAt':null,'allVecs':[],'scalars':[],'refs':{}};for(var _0x2c5663=0x2384+0x832+-0x3*0xe92;_0x2c5663<_0x10e98e['lengt'+'h'];_0x2c5663++){if(_0x4f1f8a[_0x21b4ca(0x268)](_0x4f1f8a['PwNNn'],_0x4f1f8a[_0x21b4ca(0x54f)])){if(_0x10e98e[_0x2c5663][0x5ce+-0x2c3*0x2+-0x47]!=='v3')continue;var _0x12f183=_0x4f1f8a[_0x21b4ca(0x884)](_0x47105b,_0x986dae,_0x10e98e[_0x2c5663][0x2*0x96+0x21f9*-0x1+0x20cd],0xd9e+-0x687+-0x714);if(!_0x12f183)continue;_0x578e0a['allVe'+'cs']['push']({'o':'0x'+_0x10e98e[_0x2c5663][0x1*-0x82b+0x12ce+-0xaa3][_0x21b4ca(0x71d)+'ing'](-0x17*-0x7d+0x5*-0x6a2+-0x3*-0x755),'v':_0x12f183});}else{var _0x5bb977=_0x4aebf3[_0x21b4ca(0x77b)](this,arguments);try{if(_0x5bb977&&typeof _0x5bb977[_0x21b4ca(0x46f)]===_0x4f1f8a['xGQfp'])_0x5bb977[_0x21b4ca(0x46f)](_0x587818,function(){});else _0x4f1f8a[_0x21b4ca(0x925)](_0x13a089,_0x5bb977);}catch(_0x7de0b6){}return _0x5bb977;}}var _0x2a8b4f=0x23a4+-0x13a7+-0xffd;for(var _0x12d59b=0x4e4+-0x1fcb*-0x1+0x1*-0x24af;_0x4f1f8a['vcUdh'](_0x12d59b,_0x578e0a['allVe'+'cs']['lengt'+'h']);_0x12d59b++){var _0x3d5a7d=_0x578e0a['allVe'+'cs'][_0x12d59b]['v'],_0x4dbddd=_0x3d5a7d[-0x107b*-0x2+0x77+0xc7*-0x2b]*_0x3d5a7d[0x57d+-0x23*0xf8+0x1*0x1c6b]+_0x4f1f8a['uCYtL'](_0x3d5a7d[-0x281*0xb+-0x1abc+0x3649*0x1],_0x3d5a7d[0x1195+0x4a*-0x47+0x2f3]);_0x4dbddd>_0x2a8b4f&&(_0x2a8b4f=_0x4dbddd,_0x578e0a['pos']=_0x3d5a7d,_0x578e0a[_0x21b4ca(0x60f)]=_0x578e0a['allVe'+'cs'][_0x12d59b]['o']);}_0x578e0a['reach']=Math[_0x21b4ca(0xb58)](_0x2a8b4f);var _0x3800ac=_0x5ac859[_0x28cd90],_0x5f2406=_0x34d043[_0x28cd90];if(_0x5f2406){_0x578e0a['tag']={};for(var _0x48f302=0x1905+-0x1af+-0x1756;_0x48f302<_0x5f2406[_0x21b4ca(0x6c4)+'h'];_0x48f302++){if(_0x4f1f8a[_0x21b4ca(0x440)](_0x21b4ca(0xae3),'lgYgg'))_0x197c98[_0x21b4ca(0x4f4)]['enabl'+'ed']=![];else{var _0x2669ed=_0x4e292c(_0x4f1f8a[_0x21b4ca(0x239)](_0x986dae,parseInt(_0x5f2406[_0x48f302][0xd63+-0x6*0x42b+-0x19*-0x77],-0x1d58+0x11dd+0xb8b)),_0x4f1f8a[_0x21b4ca(0x946)]);if(_0x2669ed!==undefined)_0x578e0a[_0x21b4ca(0x8d5)][_0x5f2406[_0x48f302][0x5b*0x1b+0x7af*0x5+-0x3003*0x1]]=_0x2669ed;}}}if(_0x3800ac)for(var _0x1f4f70=-0x1*-0x1846+0x24cc+-0x1e89*0x2;_0x4f1f8a[_0x21b4ca(0x635)](_0x1f4f70,_0x3800ac[_0x21b4ca(0x6c4)+'h']);_0x1f4f70++){if(_0x4f1f8a[_0x21b4ca(0x85b)]('awYRK','LZOoE')){var _0x3725a5=_0x4f1f8a[_0x21b4ca(0x7c6)](_0x4e292c,_0x986dae+_0x4f1f8a['gYXoC'](parseInt,_0x3800ac[_0x1f4f70][0x1282+-0x7f9*0x2+-0x290],-0x1*-0x293+0x50d+-0x790),_0x21b4ca(0x381));if(_0x3725a5)_0x578e0a['refs'][_0x3800ac[_0x1f4f70][0x26a8+-0x1e2c+-0x87b]]='0x'+(_0x3725a5>>>0x2149+-0xd*0x10d+0x13a*-0x10)['toStr'+'ing'](-0x3a*-0x1d+0x24a3+-0x2b25);}else _0x351c78(![]),_0x4f1f8a[_0x21b4ca(0x6e0)](_0x22a327);}return _0x578e0a[_0x21b4ca(0x250)+'rs']=_0x10e98e[_0x21b4ca(0x1fd)+'r'](function(_0x443539){var _0x4adf0c=_0x21b4ca;return _0x443539[-0xf5f+-0xad*0x2+-0x2*-0x85d]==='f32'||_0x4f1f8a['evuTf'](_0x443539[-0xc19+-0x21f1+0x2e0b],_0x4f1f8a[_0x4adf0c(0x946)]);})[_0x21b4ca(0x796)](function(_0x49b328){var _0x109f66=_0x21b4ca;return{'o':_0x228898[_0x109f66(0xaab)]('0x',_0x49b328[-0xff4+0x24c5+-0x14d1][_0x109f66(0x71d)+_0x109f66(0x3f0)](0x9*0x1f1+0x1866+0x1*-0x29cf)),'v':_0x228898[_0x109f66(0x6bb)](_0x4e292c,_0x228898[_0x109f66(0x538)](_0x986dae,_0x49b328[0x473+-0x54e*-0x4+-0x19ab]),_0x49b328[-0x19f3+0x1*0xe9a+0xb5a])};})[_0x21b4ca(0x1fd)+'r'](function(_0x536a38){var _0x3e8afa=_0x21b4ca;if('iGuEz'!==_0x3e8afa(0x638))return _0x228898[_0x3e8afa(0x7ac)](_0x536a38['v'],undefined)&&isFinite(_0x536a38['v']);else{_0x228898[_0x3e8afa(0x607)](_0x5f27f8,!![]);return;}})[_0x21b4ca(0x57b)](-0x15b+0x1*-0x865+-0x68*-0x18,-0x1875+-0x14f*0x6+0x205b),_0x578e0a;}function _0x355c4f(){var _0x18c1f0=_0x363400,_0x5b2221={'xJmdI':'plugi'+_0x18c1f0(0x234)+_0x18c1f0(0x4e0)+_0x18c1f0(0x8c3)+'e','CSIgm':'none','OkkAH':'no-me'+'m','naITz':function(_0x473030,_0x32440d){return _0x473030+_0x32440d;},'qVOWi':function(_0x4f9688,_0x5719ea){var _0x4361a5=_0x18c1f0;return _0x4f1f8a[_0x4361a5(0x7f2)](_0x4f9688,_0x5719ea);},'pcfGX':function(_0x4bd4a1,_0x540238){return _0x4bd4a1+_0x540238;},'izQNa':'\x20\x20mem'+'\x20','EhwZV':function(_0x795dab,_0x4bc93c){return _0x795dab>_0x4bc93c;},'HwBBp':function(_0x20b383,_0x2adc6b){return _0x4f1f8a['HqOET'](_0x20b383,_0x2adc6b);},'eaEyX':_0x4f1f8a[_0x18c1f0(0x688)],'PUWrD':function(_0x568ec9,_0x446204){return _0x568ec9(_0x446204);}},_0x453c64={'players':[],'bots':[],'enemies':[],'controllers':[],'camera':null,'cameraFrom':null,'playerList':null,'managers':{},'wasmTypes':null},_0x545d44=_0x45a1b6['FPSco'+'ntrol'+_0x18c1f0(0x27d)]&&_0x45a1b6['FPSco'+_0x18c1f0(0x2fb)+'ler'][_0x18c1f0(0x808)]||0x27e*-0x2+-0x248*-0x8+-0x1*0xd44,_0x52a34a=_0x4931ea[_0x18c1f0(0x2c3)+'nNetw'+'orkSy'+'nc']||{},_0x1becc5=Object[_0x18c1f0(0x33c)](_0x52a34a);for(var _0x3c44b0=-0x1a0d+0x2e2*-0x4+0x2595;_0x3c44b0<_0x1becc5['lengt'+'h']&&_0x4f1f8a['wDkxs'](_0x3c44b0,-0x1*-0xfe4+-0xd03+-0x1*0x2c9);_0x3c44b0++){if(_0x4f1f8a[_0x18c1f0(0x8c0)]('yEYDW',_0x18c1f0(0xa2e))){var _0x546bcb=_0x52a34a[_0x1becc5[_0x3c44b0]],_0x32b5ce=_0x4d62f4(_0x18c1f0(0x2c3)+'nNetw'+_0x18c1f0(0x61e)+'nc',_0x546bcb['ptr']);_0x32b5ce[_0x18c1f0(0xad2)]=_0x546bcb['hits'],_0x32b5ce[_0x18c1f0(0xa6a)+'SeenM'+'s']=_0x546bcb[_0x18c1f0(0xa6a)+'Seen']-_0x3bf38d,_0x32b5ce[_0x18c1f0(0x8f1)+'al']=!!_0x545d44&&_0x32b5ce[_0x18c1f0(0x906)]['fps']===_0x4f1f8a['ApyWj']('0x',_0x545d44[_0x18c1f0(0x71d)+_0x18c1f0(0x3f0)](0x1892*-0x1+-0x1*-0x26ae+-0xe0c));if(_0x32b5ce['refs']['healt'+'h']){var _0x17b287=parseInt(_0x32b5ce[_0x18c1f0(0x906)][_0x18c1f0(0x52c)+'h'],0x2*0x221+-0xaae+0x67c);_0x32b5ce['healt'+'h']=_0x1a56f1(_0x17b287,_0x4f1f8a['DvkTv'],_0x4f1f8a[_0x18c1f0(0x3a1)]);}_0x453c64[_0x18c1f0(0x6df)+'rs'][_0x18c1f0(0xaf5)](_0x32b5ce);}else _0x9aa733=_0x4009ee();}_0x453c64[_0x18c1f0(0x6df)+_0x18c1f0(0x21b)+'t']=_0x1becc5[_0x18c1f0(0x6c4)+'h'];var _0x18a4c0=_0x4931ea[_0x18c1f0(0x978)+'otrol'+_0x18c1f0(0x27d)]||{},_0x3bb1cc=Object[_0x18c1f0(0x33c)](_0x18a4c0);for(var _0x35b62a=0x25be+0x10cd+0x368b*-0x1;_0x4f1f8a[_0x18c1f0(0x635)](_0x35b62a,_0x3bb1cc[_0x18c1f0(0x6c4)+'h'])&&_0x35b62a<0x241*-0x3+-0xc87+0x1362;_0x35b62a++){var _0xd9ec0c=_0x4d62f4(_0x4f1f8a['JfAKX'],_0x18a4c0[_0x3bb1cc[_0x35b62a]][_0x18c1f0(0x808)]);_0xd9ec0c[_0x18c1f0(0xad2)]=_0x18a4c0[_0x3bb1cc[_0x35b62a]]['hits'],_0xd9ec0c['first'+'SeenM'+'s']=_0x18a4c0[_0x3bb1cc[_0x35b62a]][_0x18c1f0(0xa6a)+_0x18c1f0(0x4d2)]-_0x3bf38d;if(_0xd9ec0c[_0x18c1f0(0x906)][_0x18c1f0(0x52c)+'h'])_0xd9ec0c[_0x18c1f0(0x52c)+'h']=_0x1a56f1(parseInt(_0xd9ec0c[_0x18c1f0(0x906)]['healt'+'h'],0x153e+0x1803+-0x2d31),_0x4f1f8a[_0x18c1f0(0x9cb)],_0x4f1f8a[_0x18c1f0(0x3a1)]);_0x453c64['bots']['push'](_0xd9ec0c);}_0x453c64['botCo'+_0x18c1f0(0x9a3)]=_0x3bb1cc['lengt'+'h'];var _0x2f07da=_0x4931ea['FPSco'+'ntrol'+_0x18c1f0(0x27d)]||{},_0x3799ef=Object[_0x18c1f0(0x33c)](_0x2f07da);for(var _0x54b747=-0xd9f*-0x1+-0x25ba*0x1+-0x181b*-0x1;_0x54b747<_0x3799ef[_0x18c1f0(0x6c4)+'h']&&_0x4f1f8a[_0x18c1f0(0x62b)](_0x54b747,-0x1a8c+-0x4*0x73c+-0xde5*-0x4);_0x54b747++){var _0x527a24=_0x4d62f4(_0x4f1f8a['qgiFh'],_0x2f07da[_0x3799ef[_0x54b747]]['ptr']);_0x527a24['hits']=_0x2f07da[_0x3799ef[_0x54b747]]['hits'],_0x527a24['isLoc'+'al']=_0x2f07da[_0x3799ef[_0x54b747]][_0x18c1f0(0x808)]===_0x545d44,_0x453c64[_0x18c1f0(0x35f)+_0x18c1f0(0x4aa)+'s'][_0x18c1f0(0xaf5)](_0x527a24);}_0x453c64['contr'+_0x18c1f0(0x4aa)+'Count']=_0x3799ef[_0x18c1f0(0x6c4)+'h'];var _0x3a965e=_0x453c64[_0x18c1f0(0x6df)+'rs'][_0x18c1f0(0x6a7)+'t'](_0x453c64['bots']);for(var _0x440987=-0x170f+0x1f88+-0x3*0x2d3;_0x440987<_0x3a965e[_0x18c1f0(0x6c4)+'h'];_0x440987++){if(_0x3a965e[_0x440987][_0x18c1f0(0x8f1)+'al'])continue;_0x453c64[_0x18c1f0(0x9fa)+'es'][_0x18c1f0(0xaf5)](_0x3a965e[_0x440987]);}_0x453c64['enemy'+'Count']=_0x453c64[_0x18c1f0(0x9fa)+'es'][_0x18c1f0(0x6c4)+'h'];var _0x299771={'TDM_GameManager':0x2c,'GG_GameManager':0x14},_0x528e4c={'TDM_GameManager':0x50,'GG_GameManager':0x5c};for(var _0x15a02a in _0x45a1b6){var _0x4ea008=_0x45a1b6[_0x15a02a];if(!_0x4ea008||!_0x4ea008['ptr'])continue;if(!_0x4f1f8a['LjOUe'](_0x15a02a,_0x299771))continue;_0x453c64[_0x18c1f0(0x2e2)+_0x18c1f0(0xad5)][_0x15a02a]='0x'+_0x4ea008['ptr']['toStr'+_0x18c1f0(0x3f0)](-0xe6f+0x1143+0x4*-0xb1);var _0x5461e6=_0x4f1f8a[_0x18c1f0(0x155)](_0x4e292c,_0x4ea008['ptr']+_0x299771[_0x15a02a],_0x18c1f0(0x381)),_0x325009=_0x4e292c(_0x4ea008['ptr']+_0x528e4c[_0x15a02a],_0x4f1f8a[_0x18c1f0(0x801)]);if(_0x5461e6&&_0x453c64[_0x18c1f0(0x412)+'a']===null){if('nQUSK'!==_0x4f1f8a['FNLdn'])_0x453c64[_0x18c1f0(0x412)+'a']='0x'+_0x4f1f8a['IIEdn'](_0x5461e6,-0x78f+-0x10*-0xa3+-0x1*0x2a1)[_0x18c1f0(0x71d)+_0x18c1f0(0x3f0)](-0x2609*0x1+-0x12a*0x1+0x2743),_0x453c64[_0x18c1f0(0x412)+'aFrom']=_0x15a02a;else return _0x5c199c[_0x18c1f0(0x776)+'e']=_0x5b2221['xJmdI'],_0x47f8c4['_game'];}if(_0x325009&&_0x453c64[_0x18c1f0(0x6df)+_0x18c1f0(0x2de)]===null)_0x453c64['playe'+'rList']=_0x4f1f8a['BAqrD']('0x',(_0x325009>>>0xab2+-0x1b31+-0x67*-0x29)[_0x18c1f0(0x71d)+'ing'](-0x1b*0x10b+-0x64b+-0x5e*-0x5e));}if(!_0x453c64[_0x18c1f0(0x6df)+'rCoun'+'t']&&!_0x453c64['botCo'+'unt']&&!_0x453c64[_0x18c1f0(0x412)+'a']){if('ZNtxo'===_0x18c1f0(0x53a))_0x453c64['note']=_0x4f1f8a['FTbRE'](_0x18c1f0(0x4c5)+_0x18c1f0(0x31e)+_0x18c1f0(0x5d6)+'kSync'+',\x20no\x20'+'NPC_C'+_0x18c1f0(0x6ea)+_0x18c1f0(0xb4e)+_0x18c1f0(0x57f)+'\x20game'+_0x18c1f0(0x909)+_0x18c1f0(0x30c)+_0x18c1f0(0xa5e)+'is\x20wh'+'at\x20',_0x18c1f0(0x3c8)+_0x18c1f0(0x339)+_0x18c1f0(0x934)+_0x18c1f0(0x2b7)+_0x18c1f0(0x857)+_0x18c1f0(0xab4)+_0x18c1f0(0x3fd)+_0x18c1f0(0xb0e)+'IDE\x20a'+_0x18c1f0(0x87a)+_0x18c1f0(0x95d)+'d,\x20no'+'t\x20the'+_0x18c1f0(0x9ab)+'.');else{if(!_0x4b37e9()&&!_0x5b7775){if(_0x44e943['el'])_0x1b21ab['el'][_0x18c1f0(0x41c)][_0x18c1f0(0x3c4)+'ay']=_0x5b2221[_0x18c1f0(0x306)];return;}if(_0x4af53a['el'])_0x4b907a['el'][_0x18c1f0(0x41c)][_0x18c1f0(0x3c4)+'ay']='';var _0xbc7327=_0x1f0e29[_0x18c1f0(0x33c)](_0x19cbc1&&_0x490226[_0x18c1f0(0x95a)+_0x18c1f0(0x47f)]||{})['lengt'+'h'],_0x131648=_0x27c53f&&_0x5264d7[_0x18c1f0(0x3e1)]||null,_0x2d4520=_0x131648?_0x131648['enemy'+_0x18c1f0(0x2ce)]||-0x6*0xc5+-0x1*-0x10c8+-0x15a*0x9:-0x8b2+0x5eb+0x2c7,_0x4b7701=_0x131648?_0x131648['botCo'+_0x18c1f0(0x9a3)]||0x1bc8+-0xe31+-0xd97:0x1*0x319+-0x1*0x72f+-0x2*-0x20b,_0x2c7d9e=_0x54203d?(_0x456d15['buffe'+'r']['byteL'+_0x18c1f0(0xafc)]/(-0x515ac+0x3*-0x714d5+0x2a542b))['toFix'+'ed'](-0x1*0x33b+-0x2135+0x2470)+'MB':_0x5b2221[_0x18c1f0(0x3ff)],_0xfafa51=_0x5b2221[_0x18c1f0(0x604)](_0x5b2221[_0x18c1f0(0x604)](_0x5b2221[_0x18c1f0(0x523)](_0x5b2221['qVOWi'](_0x5b2221[_0x18c1f0(0x963)](_0x5b2221[_0x18c1f0(0x604)]('v',_0x2544dd&&_0x57bb09[_0x18c1f0(0x40d)+'on']||_0x2ebcb1)+('\x20\x20hoo'+'ks\x20'),_0x1ec6ff&&_0x2519c1['hooks'+'Appli'+'ed']||-0xd5*0x4+-0x26*-0x71+-0xd72)+'/',_0x3d770c&&_0x3aa83c[_0x18c1f0(0x4a9)+_0x18c1f0(0x3c0)]||0x5*-0x459+0x3e5+0x8*0x23b)+(_0x18c1f0(0xb71)+'s\x20'),_0xbc7327),_0x5b2221['izQNa']),_0x2c7d9e)+(_0x18c1f0(0x56c)+_0x18c1f0(0x586))+_0x139e3b;_0x5c2849['st'][_0x18c1f0(0x26b)+_0x18c1f0(0xaac)+'t']=_0xfafa51;var _0x38d050=_0x57e0f4['st2'];_0x38d050&&(_0x38d050[_0x18c1f0(0x26b)+'onten'+'t']=_0x5b2221[_0x18c1f0(0x627)](_0x2d4520,0x2cc*-0x1+-0x55+0x321)?'PLAYE'+'RS\x20'+_0x2d4520+(_0x4b7701?_0x5b2221['HwBBp']('\x20+\x20',_0x4b7701)+'\x20bots':'')+(_0x131648&&_0x131648[_0x18c1f0(0x412)+'a']?_0x5b2221['pcfGX']('\x20\x20cam'+'\x20',_0x131648['camer'+_0x18c1f0(0x485)]):'\x20\x20cam'+'\x20-'):'no\x20en'+_0x18c1f0(0x775)+_0x18c1f0(0xb26)+_0x18c1f0(0xaa2)+_0x18c1f0(0x8c7)+_0x18c1f0(0x260)+(_0x131648&&_0x131648[_0x18c1f0(0x412)+'a']?_0x131648[_0x18c1f0(0x412)+_0x18c1f0(0x485)]:'-'),_0x38d050[_0x18c1f0(0x41c)]['color']=_0x2d4520>0xaae+-0x71*-0x17+-0x14d5?_0x5b2221[_0x18c1f0(0x5d4)]:'#8d7a'+'99');}}else!_0x453c64[_0x18c1f0(0xb23)+_0x18c1f0(0x2ce)]&&(_0x453c64[_0x18c1f0(0x211)]=_0x4f1f8a[_0x18c1f0(0x21c)](_0x4f1f8a['RIsnq'],'isLoc'+'al\x20on'+'\x20each'+_0x18c1f0(0x8fd)+_0x18c1f0(0x8df)+_0x18c1f0(0x49d)+_0x18c1f0(0x8db)));try{if(_0x4f1f8a[_0x18c1f0(0x504)]!==_0x18c1f0(0x929)){var _0x2adb22=_0x2e2999[_0x18c1f0(0xa76)+'Insta'+_0x18c1f0(0x3b2)]||_0x29f041['unity'+'Game']||_0xac120c[_0x18c1f0(0x712)];if(_0x2adb22)return _0x37cafa['sourc'+'e']=_0x4f1f8a['jytik'],_0x2adb22;}else{var _0x1e2362=window[_0x18c1f0(0x198)+_0x18c1f0(0x28e)+_0x18c1f0(0x921)]&&window[_0x18c1f0(0x198)+_0x18c1f0(0x28e)+'dkit'][_0x18c1f0(0x4d3)+'me'],_0x420907=_0x1e2362&&_0x1e2362[_0x18c1f0(0x957)+'nalWa'+_0x18c1f0(0x19f)+'es']||[],_0x3a5cd3={};for(var _0x58116d=0x1*-0x25fe+-0xf*-0xbb+0x9*0x301;_0x58116d<_0x420907[_0x18c1f0(0x6c4)+'h']&&_0x58116d<0x11c1+0xca9+-0xeca;_0x58116d++){if(_0x4f1f8a[_0x18c1f0(0x88a)]!==_0x18c1f0(0x8b7))_0x5b2221['PUWrD'](_0x4e9e7c,_0x2cd650);else{var _0x3a1173=_0x4f1f8a[_0x18c1f0(0x690)](_0x4f1f8a['TNScW'](_0x420907[_0x58116d]['param'+'s'][_0x18c1f0(0x633)](','),_0x4f1f8a['nECbg']),_0x420907[_0x58116d][_0x18c1f0(0x708)+_0x18c1f0(0xa3e)]||_0x4f1f8a[_0x18c1f0(0x4d6)]);_0x3a5cd3[_0x3a1173]=_0x4f1f8a['buiuG'](_0x3a5cd3[_0x3a1173]||-0x19b1*0x1+-0xef*-0x26+0x3*-0x343,0x17e*-0xb+0xc91+0x1*0x3da);}}_0x453c64[_0x18c1f0(0x4c3)+'ypes']=_0x3a5cd3;}}catch(_0x27957c){}return _0x453c64;}function _0x1a56f1(_0x177095,_0x1d27d6,_0xd32b13){var _0x71b03c=_0x363400,_0x168520={'kXALf':_0x4f1f8a[_0x71b03c(0x6d4)]};try{var _0xf0b658=_0x582a61[_0x1d27d6]||[];for(var _0x38b32c=0x695*0x5+0x1*0x14f0+0x11f3*-0x3;_0x38b32c<_0xf0b658[_0x71b03c(0x6c4)+'h'];_0x38b32c++){if(_0x4f1f8a[_0x71b03c(0x856)]('QSHvN',_0x4f1f8a['fmIDW'])){if(_0x4f1f8a['GBWic'](_0xf0b658[_0x38b32c][-0x22*-0x12+0x1f65+-0x21c8],_0xd32b13))continue;var _0x36882c=_0xf0b658[_0x38b32c][-0x887+-0x2320+0x2ba7];if(_0xd32b13['index'+'Of'](_0x71b03c(0xa73))===-0x1*0x83+-0x1736+0x17b9){var _0x45d5f2=_0x4f1f8a['bytPX'][_0x71b03c(0xaed)]('|'),_0x199d95=0x4*0x962+-0xa7*-0x2+-0x26d6;while(!![]){switch(_0x45d5f2[_0x199d95++]){case'0':_0x1d065e['o']=_0x36882c;continue;case'1':return _0x88e1a[_0x71b03c(0x816)][0x2*0x229+-0x4*0xa2+0x1ca*-0x1];case'2':if(!_0x88e1a[_0x71b03c(0x816)][_0x71b03c(0x6c4)+'h'])return null;continue;case'3':_0x1d065e['k']=_0xd32b13;continue;case'4':var _0x88e1a=_0x8a2b2([_0x1d065e]);continue;case'5':var _0x1d065e=_0x178f0a(_0x177095,_0x36882c,_0xd32b13);continue;case'6':if(!_0x1d065e)return null;continue;}break;}}var _0x2b9246=_0x4e292c(_0x177095+_0x36882c,_0xd32b13);if(_0x2b9246===undefined)return null;return{'o':'0x'+_0x36882c[_0x71b03c(0x71d)+_0x71b03c(0x3f0)](0x1dbf+0x6de+-0xc2f*0x3),'v':_0x2b9246};}else _0x4752a8[_0x71b03c(0x67e)+'ngs']['push'](_0x168520['kXALf']+_0x5dc4d7[_0x71b03c(0x95a)+'ncesR'+'eplac'+'ed'][_0x71b03c(0x633)](',\x20'));}}catch(_0x155d04){}return null;}function _0xa056fa(){var _0x1a2936=_0x363400,_0x15390d={'ERhfS':function(_0x1ddf2e,_0x1f3ef9){return _0x1ddf2e+_0x1f3ef9;},'vbUTR':_0x1a2936(0x9bb)+'rd','dqDxp':_0x1a2936(0x897),'adNds':function(_0x7673fd,_0x1dcc3c,_0x464b29){return _0x7673fd(_0x1dcc3c,_0x464b29);},'FqqFJ':_0x4f1f8a['Lsjao'],'sobUT':_0x4f1f8a['pzBEn'],'xPvtj':_0x4f1f8a[_0x1a2936(0x505)]};if(_0x1a2936(0x15f)===_0x4f1f8a['GoSaT']){var _0x5b21db={};_0x315f1a['ok']=0xd42+0x364*0x2+-0x140a,_0x315f1a[_0x1a2936(0x236)+'d']=0x14bb+0x8ad+-0x1d68*0x1,_0x315f1a[_0x1a2936(0x1da)+'rror']=null;var _0x28f9f1=Object['keys'](_0x582a61);for(var _0x2c6d65=-0x21a3+0x1*0x167+0x203c;_0x2c6d65<_0x28f9f1['lengt'+'h'];_0x2c6d65++){var _0x2d31de=_0x28f9f1[_0x2c6d65],_0x2e5792=_0x45a1b6[_0x2d31de];if(!_0x2e5792||!_0x2e5792[_0x1a2936(0x808)])continue;var _0xae2f5e=_0x582a61[_0x2d31de]||[],_0x52f58a=[];for(var _0x3a4016=-0x22b1+0x1*0x430+0x1e81;_0x3a4016<_0xae2f5e[_0x1a2936(0x6c4)+'h'];_0x3a4016++){if(_0x4f1f8a[_0x1a2936(0x4e2)](_0x1a2936(0x32c),_0x4f1f8a['GocXT'])){var _0x9529da=_0xae2f5e[_0x3a4016][0x1*0x254b+-0x2*0xf4e+-0x6af],_0x3ce3fb=_0xae2f5e[_0x3a4016][-0x153a+-0x22*0x23+0x19e1];if(_0x3ce3fb['index'+'Of'](_0x1a2936(0xa73))===-0xeb7+-0x258f+-0x1*-0x3446){var _0x978f8=_0x178f0a(_0x2e5792[_0x1a2936(0x808)],_0x9529da,_0x3ce3fb);if(!_0x978f8)continue;_0x978f8['o']=_0x9529da,_0x978f8['k']=_0x3ce3fb,_0x52f58a[_0x1a2936(0xaf5)](_0x978f8);}else{var _0x2c3772=_0x4f1f8a['vRLnB'](_0x4e292c,_0x2e5792['ptr']+_0x9529da,_0x3ce3fb);if(_0x4f1f8a['EwYDz'](_0x2c3772,undefined))continue;var _0x37eaa7={'o':_0x9529da,'k':_0x3ce3fb,'v':_0x2c3772};if(_0x3ce3fb==='v2'||_0x4f1f8a['FvAJx'](_0x3ce3fb,'v3')||_0x3ce3fb==='v4'){var _0x3e5d3f=_0x4f1f8a[_0x1a2936(0x5fb)](_0x3ce3fb,'v2')?0x17ca+-0x4*0x9b+-0x1*0x155c:_0x3ce3fb==='v3'?-0x3*0x683+-0x23c+0x15c8:-0x1fd3+-0x1*0x920+0x28f7,_0x5f10d4=_0x4f1f8a['oUDWZ'](_0x47105b,_0x2e5792[_0x1a2936(0x808)],_0x9529da,_0x3e5d3f);_0x5f10d4&&(_0x37eaa7['xyz']=_0x5f10d4,_0x37eaa7['v']=_0x5f10d4[-0x498+-0x5c3*0x2+0x2*0x80f]);}_0x52f58a[_0x1a2936(0xaf5)](_0x37eaa7);}}else{var _0x497d9b=_0x4c2a13('div',_0x15390d[_0x1a2936(0x6fe)](_0x15390d['vbUTR'],_0x51c0e4?_0x15390d[_0x1a2936(0x568)]:'')),_0x3a200b=_0x15390d['adNds'](_0x438726,_0x1a2936(0x93a),'sk-ca'+'rd-he'+'ad'),_0x29f5bf=_0x27cc08(_0x15390d['FqqFJ'],_0x1a2936(0x9bb)+'rd-ti'+'tle',_0x15390d[_0x1a2936(0x6fe)](_0x15390d[_0x1a2936(0x2d9)],_0x5d6012)+(_0x1a2936(0x487)+_0x1a2936(0x44d)));_0x3a200b['appen'+'dChil'+'d'](_0x29f5bf);var _0x1c46c8=_0x1f9aad(_0x15390d[_0x1a2936(0xb0c)],_0x15390d[_0x1a2936(0x2a7)]);return _0x497d9b[_0x1a2936(0x91c)+'dChil'+'d'](_0x3a200b),_0x497d9b['appen'+'dChil'+'d'](_0x1c46c8),_0x497d9b['body']=_0x1c46c8,_0x497d9b['head']=_0x29f5bf,_0x497d9b;}}if(_0x52f58a[_0x1a2936(0x6c4)+'h']){if('Iiytd'!=='Iiytd')_0x2882c8['hasMo'+_0x1a2936(0x4b8)]=![],_0x2fc37e['heapU'+'8']=![],_0x352c25['heapB'+_0x1a2936(0x147)]=-0x1433+-0x100a+-0x1*-0x243d;else{var _0x51e782=_0x8a2b2(_0x52f58a);_0x5b21db[_0x2d31de]=_0x51e782[_0x1a2936(0x816)],_0x41564b[_0x2d31de]={'key':_0x51e782['key'],'sane':_0x51e782['sane'],'checked':_0x51e782[_0x1a2936(0x77e)+'ed'],'keyConsistent':_0x51e782['keyCo'+_0x1a2936(0x81b)+_0x1a2936(0x141)],'keySource':_0x51e782[_0x1a2936(0x64f)+_0x1a2936(0x2f8)]};}}}return _0x5b21db;}else{_0x451daf['preve'+_0x1a2936(0x9df)+_0x1a2936(0x621)](),_0x503f1e[_0x1a2936(0x4da)]=_0x4799d2[_0x1a2936(0xa63)](0x1f42+-0x1*-0x134b+0x326f*-0x1,_0x4f1f8a['JiOLg'](_0x2bb2b0['fov'],-0xf*0x265+0x10e5+-0x261*-0x8)),_0x4f1f8a['VYyzE'](_0x3c6e46);return;}}function _0x8a2b2(_0x54acd1){var _0x4ac491=_0x363400,_0x3ee1ca=0x1b1*0xb+-0x1a4e+0x7b3,_0x48e87b=0x2477*-0x1+0x2249+0x22e,_0x41673d=null;for(var _0x25cab9=-0x5*-0x5d5+-0x1774+0x3*-0x1e7;_0x4f1f8a['cUyph'](_0x25cab9,_0x54acd1[_0x4ac491(0x6c4)+'h']);_0x25cab9++){var _0x4c5a5f=_0x54acd1[_0x25cab9];if(_0x4c5a5f['k'][_0x4ac491(0x79a)+'Of'](_0x4f1f8a[_0x4ac491(0x848)])!==0x13*-0x2f+0x3*0x3e5+0x832*-0x1)continue;_0x4c5a5f['v']=_0x13d86e(_0x4c5a5f['k'],_0x4c5a5f[_0x4ac491(0x23e)+'n'],_0x4c5a5f[_0x4ac491(0x269)+_0x4ac491(0x441)+'t0']),_0x4c5a5f[_0x4ac491(0xb6a)+'ed']=_0x4c5a5f['keyAt'+_0x4ac491(0x441)+'t0'],_0x4c5a5f[_0x4ac491(0x661)]=_0x4f1f8a[_0x4ac491(0x9a2)](_0x4f1f8a[_0x4ac491(0x718)](_0x4f1f8a[_0x4ac491(0x8af)](_0x4ac491(0x48e),_0x4c5a5f[_0x4ac491(0x23e)+'n'])+(_0x4ac491(0x35e)+'='),_0x4c5a5f[_0x4ac491(0x715)])+(_0x4c5a5f[_0x4ac491(0x525)]?_0x4f1f8a[_0x4ac491(0x670)]:'')+'\x20k0=',_0x4c5a5f['keyAt'+_0x4ac491(0x441)+'t0'])+'\x20hex='+_0x4c5a5f[_0x4ac491(0x46a)];if(_0x41673d===null)_0x41673d=_0x4c5a5f['keyAt'+_0x4ac491(0x441)+'t0'];_0x48e87b++,_0x291f17(_0x4c5a5f)?(_0x3ee1ca++,_0x4c5a5f[_0x4ac491(0x858)]=!![]):_0x4c5a5f[_0x4ac491(0x858)]=![],delete _0x4c5a5f[_0x4ac491(0x7b6)];}return{'rows':_0x54acd1,'key':_0x41673d,'sane':_0x3ee1ca,'checked':_0x48e87b,'keyConsistent':_0x4f1f8a[_0x4ac491(0x6d3)](_0x23fa2f,_0x54acd1),'keySource':_0x4f1f8a[_0x4ac491(0x360)]};}function _0x23fa2f(_0x4e8e9c){var _0x5b523f=_0x363400;if(_0x5b523f(0x94e)==='zcLba'){if(_0x4cb850[_0x2156a4][_0x5b523f(0x27e)+_0x5b523f(0x6c5)+'dow'])_0x45bece[_0x5272b1]['conte'+'ntWin'+'dow'][_0x5b523f(0x748)+_0x5b523f(0x30f)+'e'](_0x539645,'*');}else{var _0x2a6861={};for(var _0x7aa16f=0x1a0d+0x9a0+-0x1*0x23ad;_0x7aa16f<_0x4e8e9c[_0x5b523f(0x6c4)+'h'];_0x7aa16f++){if(_0x4f1f8a['DBgFm'](_0x5b523f(0x52b),_0x5b523f(0x52b))){if(!_0x21babe[_0x4af75e])_0x23c0e7[_0x47af45]={'ptr':_0x2f9681,'kind':_0x32ea5f,'firstSeen':_0x152954[_0x5b523f(0x5bc)](),'hits':0x0};_0x46085b[_0x123399][_0x5b523f(0xad2)]++;}else{var _0x5b19d7=_0x4e8e9c[_0x7aa16f];if(_0x5b19d7['k'][_0x5b523f(0x79a)+'Of'](_0x5b523f(0xa73))!==0x3*0x2cd+-0xb75+0x30e)continue;if(_0x4f1f8a['HXaJj'](_0x2a6861[_0x5b19d7['k']],undefined))_0x2a6861[_0x5b19d7['k']]=_0x5b19d7['keyUs'+'ed'];else{if(_0x2a6861[_0x5b19d7['k']]!==_0x5b19d7['keyUs'+'ed'])return![];}}}return!![];}}function _0x291f17(_0x5f10bc){var _0x47ffc7=_0x363400,_0x4a430a=_0x5f10bc['v'];if(typeof _0x4a430a!==_0x4f1f8a['YGtnl']||!isFinite(_0x4a430a))return![];if(_0x5f10bc['k']===_0x47ffc7(0x7b0))return _0x4f1f8a[_0x47ffc7(0x1a3)](_0x4a430a,-0x1*-0x142a+0x641+-0x1a6b*0x1)||_0x4f1f8a[_0x47ffc7(0x4bc)](_0x4a430a,-0x1941+0x1280+0x2*0x361);var _0x307304=_0x5f10bc['fake'];if(typeof _0x307304!==_0x4f1f8a[_0x47ffc7(0x9ff)]||!_0x4f1f8a[_0x47ffc7(0x68d)](isFinite,_0x307304))return!![];if(_0x5f10bc[_0x47ffc7(0x525)]===-0x1316*-0x2+-0x4*0x43f+-0x11*0x13f)return Math[_0x47ffc7(0xb42)](_0x4f1f8a[_0x47ffc7(0xb1a)](_0x4a430a,_0x307304))<=Math[_0x47ffc7(0xa63)](-0x229a+0xcce+0x15cd,Math['abs'](_0x307304)*(-0x1*-0xa0b+0x1741+-0x10a6*0x2+0.6));return _0x4f1f8a[_0x47ffc7(0x85e)](Math[_0x47ffc7(0xb42)](_0x4a430a),-0x1abff2ec+-0x1b10caa7+0x716b8793);}function _0x1fd4aa(){var _0x6a1cea=_0x363400,_0x1ce353={'AnzAT':function(_0x3023da,_0x3521f1){return _0x3023da(_0x3521f1);},'KyGAG':function(_0xb32439){return _0xb32439();}};if(_0x6a1cea(0x7c0)==='kKnSf'){var _0x1951a3={};try{var _0x1fc720=_0x4f1f8a['wkXYr'][_0x6a1cea(0xaed)]('|'),_0x5ac119=-0x2125+0x3*-0xbe1+0x44c8;while(!![]){switch(_0x1fc720[_0x5ac119++]){case'0':_0x1951a3['plugi'+_0x6a1cea(0x780)+'imeGa'+'me']=_0x394d97&&_0x394d97[_0x6a1cea(0x900)+_0x6a1cea(0xa46)]&&_0x394d97[_0x6a1cea(0x900)+'ime'][_0x6a1cea(0x3ca)]?typeof _0x394d97[_0x6a1cea(0x900)+'ime']['_game']:_0x6a1cea(0x2d8);continue;case'1':_0x1951a3['tagMa'+_0x6a1cea(0x288)]=!!(_0x4e853e&&_0x2f660b&&_0x4e853e['__sak'+_0x6a1cea(0x86a)+'g']===_0x2f660b);continue;case'2':_0x1951a3[_0x6a1cea(0x22e)+'nRunt'+_0x6a1cea(0x942)+_0x6a1cea(0x1cf)+'ted']=!!(_0x394d97&&_0x394d97[_0x6a1cea(0x900)+_0x6a1cea(0xa46)]&&_0x394d97[_0x6a1cea(0x900)+_0x6a1cea(0xa46)]===_0x4e853e);continue;case'3':var _0x4e853e=window['Unity'+'WebMo'+'dkit']&&window['Unity'+_0x6a1cea(0x28e)+_0x6a1cea(0x921)][_0x6a1cea(0x4d3)+'me'];continue;case'4':_0x1951a3['runti'+_0x6a1cea(0x5c9)+'e']=_0x4e853e&&_0x4e853e['_game']?typeof _0x4e853e[_0x6a1cea(0x3ca)]:_0x4f1f8a['VTtIV'];continue;case'5':_0x1951a3[_0x6a1cea(0x8d5)]=_0x4e853e&&_0x4e853e[_0x6a1cea(0x92f)+_0x6a1cea(0x86a)+'g']||null;continue;}break;}}catch(_0x108b92){if('rHxwy'!=='rHxwy'){var _0x78dcb6=_0x4f1f8a[_0x6a1cea(0x366)]['split']('|'),_0x5aebcc=-0x822*0x4+-0x1*-0xf5a+0x2*0x897;while(!![]){switch(_0x78dcb6[_0x5aebcc++]){case'0':var _0x3452f2=_0x2b08f0[_0x6a1cea(0x39b)+'t32'](_0x12faeb[_0x6a1cea(0x23e)+'n'],!![]);continue;case'1':var _0x2b08f0=new _0x5ecad3(_0x50d38d['buffe'+'r'],_0x50d38d[_0x6a1cea(0x722)+_0x6a1cea(0x43b)],_0x50d38d['byteL'+_0x6a1cea(0xafc)]);continue;case'2':var _0x50d38d=_0x1eb1e4(_0x2f40bf,_0x1a8cf9,_0x12faeb[_0x6a1cea(0x89c)]);continue;case'3':var _0x53d09e=_0x513cfc===_0x6a1cea(0x452)?_0x2b08f0['getFl'+_0x6a1cea(0x6eb)](_0x12faeb['fake'],!![]):_0x4f1f8a[_0x6a1cea(0x51c)](_0x5e0a73,_0x4f1f8a['gXnCa'])?_0x2b08f0['getIn'+_0x6a1cea(0x79f)](_0x12faeb[_0x6a1cea(0x715)],!![]):_0x2b08f0[_0x6a1cea(0x7ef)+_0x6a1cea(0x476)](_0x12faeb[_0x6a1cea(0x715)]);continue;case'4':var _0x12faeb=_0x185110[_0x338ba9];continue;case'5':var _0x595bb1=_0x2b08f0[_0x6a1cea(0x7ef)+'nt8'](_0x12faeb[_0x6a1cea(0x380)+'d'])&0x34c*0x6+0xce4*0x1+-0x20ab;continue;case'6':var _0x407933=_0x2b08f0[_0x6a1cea(0x39b)+_0x6a1cea(0x79f)](_0x12faeb[_0x6a1cea(0x4df)],!![]);continue;case'7':return{'keyAtOffset0':_0x407933,'hidden':_0x3452f2,'inited':_0x595bb1,'fake':_0x53d09e,'act':_0x24537a,'hex':_0x4f1f8a['ACzuJ'](_0x1f6fe7,_0x50d38d),'alt':_0x5ab691===_0x6a1cea(0x128)?_0x3452f2^(_0x53d09e|-0x238f+0xc26+0x1*0x1769):null};case'8':var _0x24537a=_0x2b08f0[_0x6a1cea(0x7ef)+'nt8'](_0x12faeb[_0x6a1cea(0x48a)+'e'])&0x1500*-0x1+-0x2667*0x1+0x3b68;continue;case'9':if(!_0x50d38d)return null;continue;}break;}}else _0x1951a3['error']=String(_0x108b92&&_0x108b92[_0x6a1cea(0x8a3)+'ge']||_0x108b92);}return _0x1951a3;}else{var _0x53e079={'PjcrA':function(_0x4c5daf,_0x2564ca){return _0x4c5daf+_0x2564ca;},'VLCOa':function(_0x93e6e7,_0xd90844){return _0x93e6e7<_0xd90844;},'tgfMK':function(_0x3ad024,_0x221831){return _0x4f1f8a['mDeOQ'](_0x3ad024,_0x221831);},'ddMrZ':function(_0x1aebad,_0x20217d){return _0x1aebad-_0x20217d;}},_0x3e8290=_0x48308f(_0x6a1cea(0x93a),_0x4f1f8a['KbnIi']),_0x2d3cda=_0x5a35b1['creat'+_0x6a1cea(0x27a)+_0x6a1cea(0x141)]('input');_0x2d3cda[_0x6a1cea(0x9cd)]=_0x4f1f8a['FPkXX'],_0x2d3cda['class'+_0x6a1cea(0x23c)]=_0x4f1f8a[_0x6a1cea(0x3f3)],_0x2d3cda[_0x6a1cea(0x5f8)]=_0x4f1f8a[_0x6a1cea(0x4cc)](_0x23c303,_0x241fdb),_0x2d3cda[_0x6a1cea(0xa63)]=_0x17dce5(_0xef04b9),_0x2d3cda['step']=_0x127668(_0x353b96);var _0x12037d=_0x551282(_0x6a1cea(0x4f6),_0x4f1f8a['sqiGr']),_0x49cbdf=function(){var _0x21292c=_0x6a1cea,_0x1aa64b=_0x2738bf();_0x2d3cda['value']=_0x395b67(_0x1aa64b),_0x12037d[_0x21292c(0x26b)+_0x21292c(0xaac)+'t']=_0x53e079['PjcrA'](_0x53e079[_0x21292c(0x7e0)](_0x483701,-0x1*-0x156b+0x17*-0xd9+-0x1eb)?_0x1aa64b['toFix'+'ed'](0x3*0x881+-0x2*-0x10eb+-0x12*0x34c):_0x34d44f(_0x537c33['round'](_0x1aa64b)),_0x2d3cda[_0x21292c(0xa68)+'et'][_0x21292c(0x645)]||'');var _0x1d5701=_0x53e079[_0x21292c(0x9fe)](_0x53e079['ddMrZ'](_0x1aa64b,_0x4ddc74),_0x8fe058-_0x58cc08)*(-0x4fd*-0x6+-0x1d83+0x7*-0x1);_0x2d3cda['style']['setPr'+'opert'+'y'](_0x21292c(0x644),_0x1d5701+'%');};return _0x2d3cda[_0x6a1cea(0x822)+'ut']=function(){var _0x472d88=_0x6a1cea;_0x1ce353[_0x472d88(0x5b2)](_0x5b27bc,_0x38f74e(_0x2d3cda[_0x472d88(0x520)])||_0x32d034),_0x1ce353[_0x472d88(0x9ef)](_0x49cbdf);},_0x3e8290['appen'+_0x6a1cea(0x31c)+'d'](_0x2d3cda),_0x3e8290[_0x6a1cea(0x91c)+_0x6a1cea(0x31c)+'d'](_0x12037d),_0x3e8290['sync']=_0x49cbdf,_0x3e8290[_0x6a1cea(0xa93)]=_0x2d3cda,_0x4f1f8a[_0x6a1cea(0xa08)](_0x49cbdf),_0x177ad5[_0x6a1cea(0x625)]['push'](_0x49cbdf),_0x3e8290;}}function _0x1de873(){var _0x3d945c=_0x363400,_0x408444=[_0x3d945c(0xa76)+'Insta'+_0x3d945c(0x3b2),_0x4f1f8a[_0x3d945c(0x56b)],_0x4f1f8a[_0x3d945c(0xb02)],'unity'+_0x3d945c(0x3d1)+_0x3d945c(0x17b)+_0x3d945c(0x1b4)],_0x45752d={};for(var _0x3aba43=0x21b4+0x1cb4+-0x1*0x3e68;_0x3aba43<_0x408444[_0x3d945c(0x6c4)+'h'];_0x3aba43++){var _0x10a0f5=_0x408444[_0x3aba43],_0x3d7db2=typeof window[_0x10a0f5];_0x45752d[_0x10a0f5]=_0x4f1f8a[_0x3d945c(0xa79)](_0x3d7db2,_0x3d945c(0x178)+_0x3d945c(0xb10))?_0x3d945c(0x178)+_0x3d945c(0xb10):_0x3d7db2;}var _0x463d7d=_0x4f1f8a[_0x3d945c(0xa7b)](_0x59f2ea);_0x45752d['gameS'+'ource']=_0x315f1a[_0x3d945c(0x776)+'e'];try{if(_0x4f1f8a['QIFtL'](_0x4f1f8a['FdnJJ'],_0x3d945c(0x8b4)))_0x45752d[_0x3d945c(0xac3)+'dule']=!!(_0x463d7d&&_0x463d7d[_0x3d945c(0x2cc)+'e']),_0x45752d['heapU'+'8']=!!(_0x463d7d&&_0x463d7d[_0x3d945c(0x2cc)+'e']&&_0x463d7d[_0x3d945c(0x2cc)+'e']['HEAPU'+'8']),_0x45752d['heapB'+_0x3d945c(0x147)]=_0x45752d[_0x3d945c(0xb6e)+'8']?_0x463d7d[_0x3d945c(0x2cc)+'e']['HEAPU'+'8'][_0x3d945c(0x6c4)+'h']:0x616*0x1+-0xd27+0x1b*0x43;else{var _0x2d45a5=_0x4f1f8a[_0x3d945c(0x6e0)](_0x50251f);if(!_0x2d45a5)return _0x3abbc3;if(_0x2d45a5['datas'+'et'][_0x3d945c(0x4e5)])return _0x2d45a5['api'];try{return _0x425a3a(_0x2d45a5);}catch(_0x5904bd){return _0x2d45a5[_0x3d945c(0xa68)+'et'][_0x3d945c(0x4e5)]='1',_0x2d45a5['api']=_0x29224e,_0x2acc35[_0x3d945c(0x4a2)](_0x4f1f8a['vVIQG'],_0x3d945c(0x390)+':'+_0x1a51e0,_0x5904bd),_0x314648;}}}catch(_0x42f9b2){_0x45752d[_0x3d945c(0xac3)+_0x3d945c(0x4b8)]=![],_0x45752d[_0x3d945c(0xb6e)+'8']=![],_0x45752d[_0x3d945c(0x185)+_0x3d945c(0x147)]=-0x87a*-0x2+0x3*-0x983+0xb95;}return _0x45752d[_0x3d945c(0x520)+'Wrapp'+'er']=typeof _0x4c3d3e,_0x45752d;}function _0x2dd0b8(_0x37e2d0){var _0x29504c=_0x363400,_0x3b2767={};for(var _0x4980e9 in _0x37e2d0){var _0x4ed6a8=_0x37e2d0[_0x4980e9];for(var _0xac95be=-0x425*0x2+-0x6d*-0xa+-0xc*-0x56;_0xac95be<_0x4ed6a8[_0x29504c(0x6c4)+'h'];_0xac95be++){_0x3b2767[_0x4f1f8a[_0x29504c(0x684)](_0x4980e9+_0x29504c(0x23f),_0x4ed6a8[_0xac95be]['o']['toStr'+_0x29504c(0x3f0)](-0x17e0+-0x2b*-0x2b+0x10b7))]=_0x4ed6a8[_0xac95be]['v'];}}return _0x3b2767;}function _0x2dddd8(_0x535ee5,_0x186d94){var _0x5d9e6a=_0x363400;if(_0x4f1f8a[_0x5d9e6a(0xa71)](_0x4f1f8a[_0x5d9e6a(0xad1)],_0x5d9e6a(0x18a)))_0xc9624c['on']=_0x122d0f,_0x3e137f();else{if(_0x535ee5==='speed'){_0x3fe7bc(_0x186d94&&_0x4f1f8a['uNDjQ'](typeof _0x186d94['on'],_0x4f1f8a[_0x5d9e6a(0x6e4)])?_0x186d94['on']:_0x16771b['on'],_0x186d94&&typeof _0x186d94[_0x5d9e6a(0x890)+'r']===_0x4f1f8a[_0x5d9e6a(0x9ff)]?_0x186d94[_0x5d9e6a(0x890)+'r']:_0x16771b['facto'+'r']);return;}if(_0x535ee5!==_0x4f1f8a[_0x5d9e6a(0x5c7)])return;var _0x3c4b6c=_0xa056fa(),_0xb2ce92=_0x4f1f8a[_0x5d9e6a(0x658)](_0x2dd0b8,_0x3c4b6c);if(!_0x258b8a){_0x258b8a=_0xb2ce92,_0x401047=[],_0x54f8eb(_0x4f1f8a[_0x5d9e6a(0x649)],{'report':_0x8f741f()});return;}_0x401047=[];for(var _0x3f8aec in _0xb2ce92){var _0x1198c1=_0x258b8a[_0x3f8aec],_0x39e9fe=_0xb2ce92[_0x3f8aec];if(_0x1198c1!==_0x39e9fe)_0x401047['push'](_0x4f1f8a[_0x5d9e6a(0x395)](_0x4f1f8a['GgNWY'](_0x4f1f8a[_0x5d9e6a(0x253)](_0x3f8aec,':\x20')+_0x1198c1,_0x4f1f8a['nECbg']),_0x39e9fe));}_0x258b8a=_0xb2ce92,_0x54f8eb(_0x4f1f8a['MflbI'],{'report':_0x8f741f()});}}var _0x3f0277=null;function _0xb3c690(){var _0x3cab40=_0x363400,_0x1176f1={'gjNLF':function(_0x512054){var _0x5372d8=_0x1a9a;return _0x4f1f8a[_0x5372d8(0x3ea)](_0x512054);},'wTbzr':function(_0x5730f6,_0x3ac1e0){return _0x4f1f8a['vPzvX'](_0x5730f6,_0x3ac1e0);},'vloye':_0x3cab40(0x270),'pBzjw':function(_0x54ab7c,_0x121ec9){return _0x4f1f8a['lnBbm'](_0x54ab7c,_0x121ec9);},'DLawq':function(_0x5f53b8,_0x370876){return _0x5f53b8+_0x370876;},'LcuQd':function(_0x2f3779,_0x2f6007){return _0x2f3779+_0x2f6007;},'LQoPm':'\x20->\x20','ydwlX':_0x4f1f8a['hQBsV'],'IPLsJ':_0x4f1f8a[_0x3cab40(0x754)],'qqpOR':function(_0x370171,_0x20e2bd){return _0x370171/_0x20e2bd;},'ZGRQl':function(_0x1baa2d,_0x5e655c){return _0x1baa2d*_0x5e655c;},'wTghB':function(_0x6fd05c,_0x31d305){return _0x6fd05c-_0x31d305;},'aQOsQ':function(_0x300544,_0x1e9a92){return _0x300544-_0x1e9a92;},'nfmyU':function(_0x15eda0,_0x38e8fa){return _0x4f1f8a['WEGEo'](_0x15eda0,_0x38e8fa);},'shbIi':function(_0x53e9ed,_0x37bdf0){return _0x53e9ed*_0x37bdf0;},'YBDHF':function(_0x3f6a5a,_0x280e2){return _0x3f6a5a<=_0x280e2;},'vZPhG':function(_0x177c5e,_0x1b8361){var _0x7dd45f=_0x3cab40;return _0x4f1f8a[_0x7dd45f(0x575)](_0x177c5e,_0x1b8361);},'oLwrP':function(_0x1bbe10,_0x4a80e4){return _0x4f1f8a['uCYtL'](_0x1bbe10,_0x4a80e4);},'SGFAg':function(_0x1b5545,_0x351e82){return _0x4f1f8a['uCYtL'](_0x1b5545,_0x351e82);},'FkASG':function(_0x4ab58c,_0xcea042){return _0x4ab58c/_0xcea042;},'vwDwl':function(_0x396f5c,_0xdfb319){return _0x396f5c>_0xdfb319;},'LpUAF':function(_0x14e974,_0x3ca13e){return _0x4f1f8a['vOlaV'](_0x14e974,_0x3ca13e);},'hilCF':function(_0xcab96c,_0x342726){return _0xcab96c*_0x342726;},'oBCig':function(_0x3a84dd,_0x39a519){return _0x3a84dd*_0x39a519;},'XCEsU':_0x4f1f8a['EbJeR']};if(_0x4f1f8a['GBWic'](_0x4f1f8a[_0x3cab40(0x2ae)],_0x3cab40(0x97c))){if(_0x3f0277)return _0x3f0277;try{if(!document['body']||!document[_0x3cab40(0x54b)][_0x3cab40(0x91c)+_0x3cab40(0x31c)+'d'])return null;if(!document[_0x3cab40(0xa9f)+'ement'+'ById']('sakur'+_0x3cab40(0xb69)+'hud-c'+'ss')){if(_0x4f1f8a['uQUhK']==='cDCVA'){var _0x1d606b=document['creat'+_0x3cab40(0x27a)+'ent']('style');_0x1d606b['id']='sakur'+'a-sw-'+'hud-c'+'ss',_0x1d606b[_0x3cab40(0x26b)+_0x3cab40(0xaac)+'t']=_0x4f1f8a[_0x3cab40(0x1d8)],(document[_0x3cab40(0x935)]||document['docum'+'entEl'+'ement'])[_0x3cab40(0x91c)+'dChil'+'d'](_0x1d606b);}else return _0x4f1f8a['JNDls'](_0xbd6351[_0x3cab40(0x9cd)],_0x494849);}var _0xee26d2=document[_0x3cab40(0x47e)+_0x3cab40(0x27a)+'ent']('div');_0xee26d2['id']=_0x4f1f8a[_0x3cab40(0x9af)],_0xee26d2[_0x3cab40(0x41c)]['cssTe'+'xt']=_0x4f1f8a[_0x3cab40(0xb40)](_0x3cab40(0x49a)+_0x3cab40(0x998)+'ixed;'+'left:'+_0x3cab40(0x1e6)+_0x3cab40(0x974)+':8px;'+_0x3cab40(0x757)+'ex:21'+_0x3cab40(0x8cf)+'647;d'+_0x3cab40(0x230)+_0x3cab40(0x2e3)+'x;fle'+_0x3cab40(0x5f1)+_0x3cab40(0x474)+'n:col'+_0x3cab40(0x572)+_0x3cab40(0x20e)+'x;'+_0x4f1f8a[_0x3cab40(0xab3)],_0x3cab40(0xa2c)+'ng:6p'+'x\x208px'+_0x3cab40(0x6a0)+':11px'+'/1.45'+'\x20ui-m'+_0x3cab40(0x1e5)+'ace,C'+_0x3cab40(0x6ee)+_0x3cab40(0xa6b)+_0x3cab40(0x2b9)+_0x3cab40(0x26e)+'lor:#'+'f7eef'+'5;')+_0x4f1f8a[_0x3cab40(0x1ae)];var _0x303c79=_0x4f1f8a[_0x3cab40(0x2ff)];_0xee26d2[_0x3cab40(0x38a)+_0x3cab40(0x8f4)]=_0x4f1f8a[_0x3cab40(0x48d)](_0x4f1f8a['WfGJq'](_0x4f1f8a['cHNul'](_0x4f1f8a[_0x3cab40(0x56d)](_0x4f1f8a['EPmUl'](_0x4f1f8a[_0x3cab40(0x87b)](_0x4f1f8a['yDawo'](_0x4f1f8a['RLAZJ'](_0x3cab40(0x8ea)+'data-'+_0x3cab40(0x1f3)+_0x3cab40(0xa5a)+'yle=\x22'+_0x3cab40(0x3c4)+_0x3cab40(0x779)+_0x3cab40(0x7e4)+'p:6px'+';alig'+_0x3cab40(0x271)+_0x3cab40(0x666)+'nter;'+_0x3cab40(0xac0)+_0x3cab40(0x746)+_0x3cab40(0x40e)+'max-w'+'idth:'+'290px'+_0x3cab40(0x59b)+('<b\x20st'+'yle=\x22'+'color'+':'),_0x58bb9b)+('\x22>sak'+_0x3cab40(0x67f)+'b>')+('<butt'+'on\x20da'+'ta-a='+_0x3cab40(0xa67)+'style'+'=\x22bac'+'kgrou'+_0x3cab40(0x7fe)+'anspa'+_0x3cab40(0x72d)+_0x3cab40(0x4d1)+_0x3cab40(0x619)+'\x20soli'+_0x3cab40(0xa18)+'a(255'+',143,'+'177,.'+'45);')+(_0x3cab40(0x390)+_0x3cab40(0x25b)+'ef5;b'+'order'+'-radi'+_0x3cab40(0x9ce)+'x;pad'+_0x3cab40(0x5cf)+'2px\x208'+_0x3cab40(0x4a8)+_0x3cab40(0x5f2)+'point'+'er;fo'+_0x3cab40(0x1e0)+'herit'+_0x3cab40(0x383)+_0x3cab40(0x6ad)+_0x3cab40(0x9fc)+'utton'+'>')+_0x4f1f8a[_0x3cab40(0x839)],_0x58bb9b)+';\x22>'+_0x4f1f8a[_0x3cab40(0x2e9)]+(_0x3cab40(0x927)+'on\x20da'+_0x3cab40(0xb15)+_0x3cab40(0x553)+_0x3cab40(0x4be)+'e=\x22ba'+_0x3cab40(0x413)+_0x3cab40(0x6cc)+'ransp'+_0x3cab40(0x26d)+';bord'+_0x3cab40(0x20f)+_0x3cab40(0x667)+_0x3cab40(0x6f1)+'ba(25'+'5,143'+_0x3cab40(0x581)+_0x3cab40(0x99c)),_0x3cab40(0x390)+_0x3cab40(0x25b)+_0x3cab40(0x2d0)+_0x3cab40(0xb59)+_0x3cab40(0x7c1)+_0x3cab40(0x9ce)+_0x3cab40(0x7a7)+'ding:'+_0x3cab40(0x16d)+_0x3cab40(0x4a8)+_0x3cab40(0x5f2)+_0x3cab40(0x8c1)+'er;fo'+'nt:in'+_0x3cab40(0x154)+_0x3cab40(0xa4e)+'P\x20on<'+_0x3cab40(0x8e8)+_0x3cab40(0x22b))+('<butt'+'on\x20da'+'ta-a='+_0x3cab40(0x728)+'\x22\x20sty'+_0x3cab40(0x247)+_0x3cab40(0xac5)+'ound:'+_0x3cab40(0x76a)+'paren'+'t;bor'+_0x3cab40(0xa36)+_0x3cab40(0xab7)+'lid\x20r'+'gba(2'+'55,14'+_0x3cab40(0xb4a)+',.45)'+';'),_0x3cab40(0x390)+':#f7e'+_0x3cab40(0x2d0)+_0x3cab40(0xb59)+'-radi'+_0x3cab40(0x9ce)+'x;pad'+'ding:'+_0x3cab40(0x16d)+_0x3cab40(0x4a8)+_0x3cab40(0x5f2)+_0x3cab40(0x8c1)+'er;fo'+_0x3cab40(0x1e0)+'herit'+_0x3cab40(0xb35)+'ap</b'+_0x3cab40(0x437)+'>'),_0x4f1f8a['SSSmB']),_0x4f1f8a['SGuJn']),_0x3cab40(0x836)+'>')+(_0x3cab40(0x8ea)+'data-'+_0x3cab40(0x281)+'\x22\x20sty'+'le=\x22c'+_0x3cab40(0x2ec)+'#8d7a'+_0x3cab40(0x1d0)+_0x3cab40(0x6d2)+_0x3cab40(0x651)+_0x3cab40(0x2a1)+'></di'+'v>'),_0x3cab40(0x8ea)+'data-'+'a=\x22st'+'2\x22\x20st'+'yle=\x22'+'color'+':#8d7'+_0x3cab40(0x629)+'ax-wi'+'dth:2'+'90px;'+_0x3cab40(0x84b)+_0x3cab40(0x7ca)),_0xee26d2[_0x3cab40(0x38a)+_0x3cab40(0x8f4)]=_0x303c79;var _0x2dc38a=function(_0x21b618){var _0x5f0a76=_0x3cab40;return _0xee26d2['query'+_0x5f0a76(0x674)+_0x5f0a76(0x3a2)](_0x4f1f8a[_0x5f0a76(0x395)](_0x4f1f8a[_0x5f0a76(0x7f0)],_0x21b618)+'\x22]');},_0x4b1faf=_0x2dc38a('st'),_0x69ca0b=_0x2dc38a(_0x3cab40(0x12a)),_0x14aa76=_0x2dc38a('sp'),_0x4b7a6c=_0x2dc38a('fx'),_0x32446c=_0x2dc38a('fv'),_0x402749=_0x2dc38a('bar');if(_0x14aa76)_0x14aa76['oncli'+'ck']=function(){var _0x3dac7b=_0x3cab40,_0x380eac={'MCdoH':_0x3dac7b(0x76a)+'paren'+'t','wJrbg':'#f7ee'+'f5','wiauv':function(_0x5c5c2d){var _0x5432eb=_0x3dac7b;return _0x1176f1[_0x5432eb(0xb72)](_0x5c5c2d);}};_0x1176f1['wTbzr'](_0x1176f1['vloye'],_0x1176f1[_0x3dac7b(0x44c)])?(_0x236df5=!_0x27184e,_0x1652f8['textC'+_0x3dac7b(0xaac)+'t']=_0x284d93?'Speed'+_0x3dac7b(0x21f):_0x3dac7b(0x456)+'\x20off',_0x43a665['style']['backg'+_0x3dac7b(0x541)]=_0x4855b9?_0x3eda7b:_0x380eac[_0x3dac7b(0x731)],_0x3fcbe7[_0x3dac7b(0x41c)][_0x3dac7b(0x390)]=_0xce5939?'#2a0f'+'1b':_0x380eac['wJrbg'],_0x380eac['wiauv'](_0x5725cd)):_0x3fe7bc(!_0x16771b['on'],_0x16771b['facto'+'r']);};if(_0x4b7a6c)_0x4b7a6c[_0x3cab40(0x822)+'ut']=function(){var _0x26a191=_0x3cab40,_0x26b265={'YCJfU':_0x26a191(0x283)+_0x26a191(0x398)};if('SYGcc'!==_0x4f1f8a[_0x26a191(0xa61)]){_0x123506[_0x496bb9]={'ptr':_0x203d7d,'firstSeen':_0x269374['now'](),'hits':0x0,'replaced':!!_0x168562};try{var _0x38f5c9=_0x2dc212['filte'+'r'](function(_0x5434fd){var _0x3d905a=_0x26a191;return _0x5434fd[_0x3d905a(0x9cd)]===_0x448aa5;})[0x742*-0x5+0x1039+0x1411*0x1];_0x5dc4d2={'type':_0x2d8339,'atMs':_0x2d44ed['now']()-_0x251bd6,'originalFunc':!!(_0x38f5c9&&_0x38f5c9[_0x26a191(0x4f4)]&&typeof _0x38f5c9[_0x26a191(0x4f4)]['origi'+_0x26a191(0x93b)+'nc']===_0x26b265[_0x26a191(0x8ad)]),'resolveGameAtFire':!!_0x36a955(),'gameSourceAtFire':_0x39903e['sourc'+'e']};}catch(_0x3cf7ed){}}else _0x4f1f8a[_0x26a191(0x155)](_0x3fe7bc,_0x16771b['on'],parseFloat(_0x4b7a6c[_0x26a191(0x520)])||0x2*0x524+0x6*-0x149+-0x291);};if(_0x2dc38a('snap'))_0x2dc38a(_0x3cab40(0x6b9))['oncli'+'ck']=function(){var _0x5943fd=_0x3cab40;if(_0x1176f1[_0x5943fd(0xa35)]!==_0x1176f1['IPLsJ'])_0x2dddd8(_0x5943fd(0x810)+_0x5943fd(0x2bd));else{var _0x34ae19=_0x5f536d[_0x28bbc2],_0x50ab25=_0x48c5eb[_0x38de13];if(_0x1176f1[_0x5943fd(0x20c)](_0x34ae19,_0x50ab25))_0x45caeb[_0x5943fd(0xaf5)](_0x1176f1['DLawq'](_0x1176f1['DLawq'](_0x1176f1[_0x5943fd(0x769)](_0x1176f1[_0x5943fd(0x769)](_0x29d654,':\x20'),_0x34ae19),_0x1176f1[_0x5943fd(0x57d)]),_0x50ab25));}};var _0x256fd2=_0x2dc38a(_0x4f1f8a[_0x3cab40(0x186)]);if(_0x256fd2)_0x256fd2['oncli'+'ck']=function(){var _0x9b5037=_0x3cab40;if(_0x4f1f8a['TTPkS']==='ViRDA')return null;else{if(!_0x28cfee['on'])_0x28cfee['on']=!![],_0x28cfee['boxes']=![];else{if(!_0x28cfee[_0x9b5037(0x795)])_0x28cfee[_0x9b5037(0x795)]=!![];else{if(_0x9b5037(0x952)!=='AaljQ')_0x28cfee['on']=![];else{var _0x334214=_0x1176f1[_0x9b5037(0xb72)](_0x423411);if(!_0x334214)return null;var _0x1e141d=_0x334214['pitch']*_0x13a293['PI']/(-0xb2*-0x6+-0x22*0x93+0x100e*0x1),_0x5e5630=_0x1176f1[_0x9b5037(0x492)](_0x334214['yaw']*_0x3bbc81['PI'],0x1609+0x16c2+0x2c17*-0x1),_0x5f4705=_0x4e6fd2[_0x9b5037(0x44b)](_0x1e141d),_0x47ee85=_0x1176f1[_0x9b5037(0x6e6)](_0x338ad6[_0x9b5037(0xa84)](_0x5e5630),_0x5f4705),_0x93155=-_0x10623f[_0x9b5037(0xa84)](_0x1e141d),_0x5d83eb=_0x5e05d9[_0x9b5037(0x44b)](_0x5e5630)*_0x5f4705,_0x104500=_0x5d83eb,_0x8a1027=-0x1515+0x9d*-0x13+0x20bc,_0x183aea=-_0x47ee85,_0x5872f1=_0x1176f1[_0x9b5037(0x7c8)](_0x1864ce[0x2*-0x65b+0x21f8*-0x1+0x2eae],_0x540cd7[0x768+0x117+-0x19*0x57]),_0x1b4858=_0x1176f1[_0x9b5037(0x7c8)](_0x581f0e[-0x2dc*0x1+-0x2168+0x3*0xc17],_0x25283f[0x2111*0x1+0xedf+0x6d9*-0x7]),_0x130a2d=_0x1176f1['aQOsQ'](_0x384efa[0x2*-0x30d+-0x2a1*-0x2+-0x6d*-0x2],_0x3c77f0[0x3f8+-0xd*-0x1e1+-0x1c63]),_0x3e7a27=_0x1176f1[_0x9b5037(0x8cb)](_0x5872f1*_0x47ee85+_0x1176f1[_0x9b5037(0x455)](_0x1b4858,_0x93155),_0x1176f1[_0x9b5037(0x6e6)](_0x130a2d,_0x5d83eb));if(_0x1176f1[_0x9b5037(0x471)](_0x3e7a27,0x1e0e+-0xdfd+-0x55b*0x3+0.05))return null;var _0x183b04=_0x1176f1['LcuQd'](_0x5872f1*_0x104500,_0x1b4858*_0x8a1027)+_0x130a2d*_0x183aea,_0x586806=_0x1176f1['vZPhG'](_0x5872f1*(_0x8a1027*_0x5d83eb-_0x1176f1[_0x9b5037(0x39d)](_0x183aea,_0x93155)),_0x1b4858*(_0x1176f1[_0x9b5037(0x6e6)](_0x183aea,_0x47ee85)-_0x104500*_0x5d83eb))+_0x130a2d*(_0x104500*_0x93155-_0x1176f1['SGFAg'](_0x8a1027,_0x47ee85)),_0xb50c9b=_0x1176f1[_0x9b5037(0x613)](_0x3dd282,_0x4f93e9),_0x3f40f4=_0x3ff41c['fov']*_0x4d2a2b['PI']/(-0xcb9+-0x13a3+0x2110),_0x1ef6ee=_0x57b383[_0x9b5037(0x424)](_0x3f40f4/(-0x4fa*0x7+-0x1*0x1c79+0x3f51)),_0x24a4c3=_0x183b04/_0x3e7a27/(_0x1ef6ee*_0xb50c9b),_0x2cc4ab=_0x1176f1[_0x9b5037(0x613)](_0x586806,_0x3e7a27)/_0x1ef6ee;if(_0x24a4c3<-(-0x2*0x203+0x2*-0xe08+-0x9b*-0x35+0.6000000000000001)||_0x1176f1['vwDwl'](_0x24a4c3,0xd6c+-0x184*0x7+-0x2cf+0.6000000000000001)||_0x1176f1['LpUAF'](_0x2cc4ab,-(0x5f*-0x2f+-0x26e0+0x3852+0.6000000000000001))||_0x2cc4ab>-0x5*-0xfd+-0xe*0x23e+-0x1*-0x1a74+0.6000000000000001)return null;return{'x':(_0x24a4c3*(-0x20cb*0x1+-0x4a*-0x19+-0x7*-0x3a7+0.5)+(-0x1b07+0x8db+0x122c+0.5))*_0x1adfd0,'y':_0x1176f1['hilCF'](0x171b+-0xfd9+-0x742+0.5-_0x1176f1[_0x9b5037(0x659)](_0x2cc4ab,-0xb2*0x32+0x1b90+-0x1*-0x734+0.5),_0x9c1790),'z':_0x3e7a27};}}}_0x256fd2[_0x9b5037(0x26b)+_0x9b5037(0xaac)+'t']=!_0x28cfee['on']?_0x9b5037(0x2e4)+'ff':_0x28cfee[_0x9b5037(0x795)]?_0x9b5037(0x411)+_0x9b5037(0xa66):_0x4f1f8a[_0x9b5037(0x932)],_0x256fd2[_0x9b5037(0x41c)]['backg'+_0x9b5037(0x541)]=_0x28cfee['on']?_0x58bb9b:_0x9b5037(0x76a)+_0x9b5037(0x3c6)+'t',_0x256fd2[_0x9b5037(0x41c)][_0x9b5037(0x390)]=_0x28cfee['on']?_0x9b5037(0x2cb)+'1b':_0x4f1f8a['fXFod'];try{var _0xdfc2e=_0x4f1f8a[_0x9b5037(0xa7b)](_0x2cad43);if(_0xdfc2e&&_0xdfc2e['el'])_0xdfc2e['el'][_0x9b5037(0x41c)]['displ'+'ay']=_0x28cfee['on']?'':_0x4f1f8a[_0x9b5037(0x6c9)];var _0x355b73=_0x38e415;if(_0x355b73&&_0x355b73['cv'])_0x355b73['cv'][_0x9b5037(0x41c)][_0x9b5037(0x3c4)+'ay']=_0x28cfee['on']&&_0x28cfee[_0x9b5037(0x795)]?'':'none';}catch(_0x2f5091){}}};if(_0x2dc38a('fold'))_0x2dc38a(_0x3cab40(0x9f9))[_0x3cab40(0xa32)+'ck']=function(){var _0x3edf=_0x3cab40;if(!_0x402749)return;var _0x4d166c=_0x402749[_0x3edf(0x41c)]['displ'+'ay']===_0x3edf(0x2d8);_0x402749[_0x3edf(0x41c)][_0x3edf(0x3c4)+'ay']=_0x4d166c?'':'none',_0x2dc38a(_0x1176f1['XCEsU'])[_0x3edf(0x26b)+_0x3edf(0xaac)+'t']=_0x4d166c?'-':'+';};return document['body']['appen'+_0x3cab40(0x31c)+'d'](_0xee26d2),_0x3f0277={'el':_0xee26d2,'st':_0x4b1faf,'st2':_0x69ca0b,'sp':_0x14aa76,'fx':_0x4b7a6c,'fv':_0x32446c},_0x3f0277;}catch(_0x3c5908){return console[_0x3cab40(0x4a2)](_0x4f1f8a[_0x3cab40(0x13b)],_0x4f1f8a['HBoJy'](_0x3cab40(0x390)+':',_0x58bb9b),_0x3c5908),null;}}else _0x9b8fad['st'][_0x3cab40(0x76c)+'ritte'+'n']=_0x518642[_0x3cab40(0xb38)+'d'](_0x43716e),_0x3640d2++,_0x2cad01[_0x3cab40(0xaf5)]('0x'+_0x42d306['o'][_0x3cab40(0x71d)+'ing'](0x134b+0xa97*-0x1+-0x8a4));}var _0x4a1d5f=-0x18a*-0x1+-0x191f+0x1797;function _0x3fe7bc(_0x430996,_0x88a8ac){var _0x17a3f0=_0x363400,_0x41750b={'zGQRM':_0x4f1f8a[_0x17a3f0(0x275)],'ZeNNl':_0x17a3f0(0x5a9)+'ve'};if(_0x4f1f8a[_0x17a3f0(0x355)]!==_0x4f1f8a['hOTky']){var _0x11efcb=_0x16771b['on'];_0x16771b['on']=!!_0x430996;if(_0x16771b['on']&&!_0x11efcb&&(_0x88a8ac===undefined||_0x88a8ac===null||_0x4f1f8a['KXDzz'](Number,_0x88a8ac)===0x2662+-0x24a3*0x1+-0x1*0x1be)){if(_0x17a3f0(0x90f)!==_0x4f1f8a[_0x17a3f0(0xa21)])_0x88a8ac=_0x4a1d5f;else{if(_0x5d1537['butto'+'ns'][_0x529c19][_0x17a3f0(0xa6f)+_0x17a3f0(0xa3c)])_0x37390f[_0x17a3f0(0x214)+'ns'][_0x403189]['class'+'Name']=_0x41750b[_0x17a3f0(0x576)]+(_0x41a0e5===_0x3ce538?_0x41750b[_0x17a3f0(0x1d2)]:'');}}_0x16771b['facto'+'r']=Math['min'](_0x16771b['max'],Math['max'](_0x16771b[_0x17a3f0(0x5f8)],Number(_0x88a8ac)||-0xf1+-0x5bc*-0x3+-0x1042));if(!_0x16771b['on'])_0x21404c={};var _0x59a2ce=_0xb3c690();if(_0x59a2ce){if(_0x59a2ce['sp']){if(_0x4f1f8a['CjhiY']('YCwTj',_0x4f1f8a['hyRSG'])){var _0x5d0f0d=_0x4fc7ed();if(!_0x5d0f0d)return null;return{'ptr':_0x4f1f8a[_0x17a3f0(0x970)]('0x',_0x5d0f0d[_0x17a3f0(0x808)][_0x17a3f0(0x71d)+'ing'](-0xd81*-0x1+0x59b*-0x4+-0x13*-0x79)),'feet':_0x5d0f0d['feet'],'eye':_0x5d0f0d['eye'],'pitch':_0x5d0f0d['pitch'],'yaw':_0x5d0f0d[_0x17a3f0(0x92a)],'reach':_0x5d0f0d[_0x17a3f0(0x608)]};}else _0x59a2ce['sp'][_0x17a3f0(0x26b)+'onten'+'t']=_0x16771b['on']?'Speed'+'\x20ON':'Speed'+_0x17a3f0(0x2fa),_0x59a2ce['sp']['style'][_0x17a3f0(0x79b)+_0x17a3f0(0x541)]=_0x16771b['on']?_0x58bb9b:_0x17a3f0(0x76a)+_0x17a3f0(0x3c6)+'t',_0x59a2ce['sp']['style']['color']=_0x16771b['on']?_0x17a3f0(0x2cb)+'1b':_0x17a3f0(0x252)+'f5';}if(_0x59a2ce['fx'])_0x59a2ce['fx'][_0x17a3f0(0x520)]=String(_0x16771b['facto'+'r']);if(_0x59a2ce['fv'])_0x59a2ce['fv'][_0x17a3f0(0x26b)+_0x17a3f0(0xaac)+'t']=_0x16771b[_0x17a3f0(0x890)+'r'][_0x17a3f0(0x35b)+'ed'](-0x1b54+0xa84+0x10d1)+'x';}}else{var _0x2de1b6=_0x6cb735['split']('+');_0x385165=_0x30b656(_0x33b1f2,_0x2de1b6[-0x21e7+0x6bb+0x1b2c]['index'+'Of'](_0x4f1f8a[_0x17a3f0(0x449)])===0x5*0x6e6+-0x2ea+-0xbc*0x2b?_0x4f1f8a[_0x17a3f0(0x9cb)]:_0x4f1f8a['qgiFh'],_0x5664f9(_0x2de1b6[-0x414+0x8e9+0x67*-0xc],0x61e+0x1ffe+-0xa*0x3ce));}}function _0x4711cd(_0x5cb0f0){var _0x6392c5=_0x363400,_0x419ba0=_0xb3c690();if(!_0x419ba0||!_0x419ba0['st'])return;try{if(!_0x4f1f8a['VYyzE'](_0x2f29b4)&&!_0xa9ea0f){if(_0x419ba0['el'])_0x419ba0['el']['style'][_0x6392c5(0x3c4)+'ay']=_0x6392c5(0x2d8);return;}if(_0x419ba0['el'])_0x419ba0['el'][_0x6392c5(0x41c)][_0x6392c5(0x3c4)+'ay']='';var _0xbce750=Object['keys'](_0x5cb0f0&&_0x5cb0f0[_0x6392c5(0x95a)+_0x6392c5(0x47f)]||{})['lengt'+'h'],_0x2aef4a=_0x5cb0f0&&_0x5cb0f0[_0x6392c5(0x3e1)]||null,_0x3f234e=_0x2aef4a?_0x2aef4a[_0x6392c5(0xb23)+_0x6392c5(0x2ce)]||0x259f+0x89d+0x2e3c*-0x1:-0x1ab7*0x1+-0xbf5+0x26ac,_0x12eb8b=_0x2aef4a?_0x2aef4a[_0x6392c5(0x9e6)+_0x6392c5(0x9a3)]||-0xb20*0x3+0xac9*-0x1+-0x2c29*-0x1:0x55*-0x2f+-0x5ad*0x5+-0x4*-0xaff,_0x942057=_0x14b6a0?(_0x14b6a0[_0x6392c5(0x9a9)+'r'][_0x6392c5(0x8de)+_0x6392c5(0xafc)]/(0xecb8e+0x4*-0x3fdd3+0x112bbe))['toFix'+'ed'](0x47b*-0x3+-0x1e41*-0x1+-0x4*0x434)+'MB':_0x4f1f8a['HEhMq'],_0x63c011=_0x4f1f8a[_0x6392c5(0x690)](_0x4f1f8a['aYvhL'](_0x4f1f8a[_0x6392c5(0x730)](_0x4f1f8a[_0x6392c5(0x409)](_0x4f1f8a['BAqrD'](_0x4f1f8a['EPmUl'](_0x4f1f8a[_0x6392c5(0x41a)]('v'+(_0x5cb0f0&&_0x5cb0f0['versi'+'on']||_0x44f6f9),_0x6392c5(0x950)+_0x6392c5(0x944)),_0x5cb0f0&&_0x5cb0f0[_0x6392c5(0x4a9)+_0x6392c5(0x34d)+'ed']||0x16c4+0x105a+-0x271e)+'/',_0x5cb0f0&&_0x5cb0f0[_0x6392c5(0x4a9)+_0x6392c5(0x3c0)]||0xd1+0x3*-0x5a5+-0x101e*-0x1)+('\x20\x20obj'+'s\x20'),_0xbce750),_0x6392c5(0x6ab)+'\x20')+_0x942057,_0x4f1f8a['CZfoy']),_0x3f2467);_0x419ba0['st'][_0x6392c5(0x26b)+'onten'+'t']=_0x63c011;var _0x5ccddc=_0x419ba0['st2'];_0x5ccddc&&(_0x5ccddc['textC'+'onten'+'t']=_0x4f1f8a[_0x6392c5(0x28a)](_0x3f234e,0x1*-0x467+0x7*-0xa+0x4ad)?_0x4f1f8a[_0x6392c5(0x267)]('PLAYE'+_0x6392c5(0x55d)+_0x3f234e,_0x12eb8b?_0x4f1f8a[_0x6392c5(0x2d6)]('\x20+\x20',_0x12eb8b)+'\x20bots':'')+(_0x2aef4a&&_0x2aef4a['camer'+'a']?_0x6392c5(0x867)+'\x20'+_0x2aef4a[_0x6392c5(0x412)+'aFrom']:_0x4f1f8a[_0x6392c5(0xb22)]):_0x4f1f8a['EffPA']+(_0x2aef4a&&_0x2aef4a[_0x6392c5(0x412)+'a']?_0x2aef4a['camer'+'aFrom']:'-'),_0x5ccddc['style']['color']=_0x3f234e>-0x4*0x496+0xbfb*0x3+0x1199*-0x1?_0x6392c5(0x99b)+'a8':_0x6392c5(0x143)+'99');}catch(_0x5edf5d){}}window[_0x363400(0xacb)+'entLi'+'stene'+'r'](_0x4f1f8a[_0x363400(0x3bd)],function(_0x547004){var _0x14fa70=_0x363400;if(_0x14fa70(0x61d)!==_0x14fa70(0x5bb)){if(!_0x547004)return;try{if(_0x4f1f8a['evuTf'](_0x547004[_0x14fa70(0x5c5)],'F9')){_0x547004['preve'+'ntDef'+_0x14fa70(0x621)](),_0x4f1f8a[_0x14fa70(0x4ae)](_0x2dddd8,'snaps'+'hot');return;}if(_0x4f1f8a[_0x14fa70(0x1f9)](_0x547004[_0x14fa70(0x5c5)],'F7')){_0x547004[_0x14fa70(0x3ad)+'ntDef'+'ault'](),_0x3fe7bc(!_0x16771b['on'],_0x16771b[_0x14fa70(0x890)+'r']);return;}if(_0x547004[_0x14fa70(0x5c5)]==='F8'){_0x547004['preve'+_0x14fa70(0x9df)+'ault'](),_0x4f1f8a[_0x14fa70(0x777)](_0x3fe7bc,_0x16771b['on'],_0x16771b[_0x14fa70(0x890)+'r']+(0x1*0x69d+-0x4*0x6f7+0x1*0x153f+0.5));return;}if(_0x547004[_0x14fa70(0x5c5)]==='F6'){if(_0x14fa70(0x552)===_0x4f1f8a[_0x14fa70(0x646)]){var _0xdb7e7f=_0x4bf143[_0x14fa70(0x3d6)];if(_0xdb7e7f&&_0xdb7e7f['__sak'+'ura']===_0x52adb4&&_0xdb7e7f['kind']===_0x14fa70(0x703))_0x3e8d28(_0xdb7e7f['cmd'],_0xdb7e7f[_0x14fa70(0x4ea)]);}else{_0x547004['preve'+_0x14fa70(0x9df)+_0x14fa70(0x621)](),_0x4f1f8a['ZlRbw'](_0x3fe7bc,_0x16771b['on'],_0x4f1f8a[_0x14fa70(0x83c)](_0x16771b[_0x14fa70(0x890)+'r'],0x156e+0x10c0+-0x262e+0.5));return;}}if(_0x4f1f8a[_0x14fa70(0x364)](_0x547004[_0x14fa70(0x5c5)],_0x14fa70(0x45c)+'t')){if(_0x14fa70(0x714)===_0x14fa70(0x714)){_0x547004['preve'+'ntDef'+_0x14fa70(0x621)](),_0x4f1f8a[_0x14fa70(0x6d3)](_0x148899,!_0x1b9370['open']);return;}else _0x13c58a++,_0x9a2f83['sane']=!![];}if(_0x4f1f8a[_0x14fa70(0x8c0)](_0x547004[_0x14fa70(0x5c5)],_0x14fa70(0x86d)+_0x14fa70(0x953)+'ht')){if(_0x4f1f8a['vElFZ'](_0x4f1f8a[_0x14fa70(0xae7)],'gIpyy')){_0x547004[_0x14fa70(0x3ad)+_0x14fa70(0x9df)+'ault'](),_0x148271['fov']=Math['min'](-0x15b7+0x23fa+-0xdb7,_0x4f1f8a[_0x14fa70(0x5b3)](_0x148271[_0x14fa70(0x4da)],0x6*0x38b+0x75c*-0x3+0xd4)),_0x4f1f8a[_0x14fa70(0x1ba)](_0x45d67a);return;}else _0x2dfc9d=_0xfec736;}if(_0x4f1f8a[_0x14fa70(0x3d9)](_0x547004['code'],'Brack'+_0x14fa70(0x384)+'t')){if(_0x4f1f8a['cHUzY']!==_0x4f1f8a[_0x14fa70(0x9d5)]){var _0x3366e3=_0x36f5f9[_0x3a9551];_0x2d84d0['push'](_0x3366e3+'\x20@\x20'+_0x2765e7[_0x3366e3]);}else{_0x547004[_0x14fa70(0x3ad)+'ntDef'+'ault'](),_0x148271[_0x14fa70(0x4da)]=Math['max'](-0x1*-0x1b13+-0x38e*0x6+-0x5a1,_0x148271['fov']-(-0x249d+-0x1d17+-0x41b6*-0x1)),_0x45d67a();return;}}}catch(_0x384c9d){}}else _0x263150[_0x14fa70(0x41c)][_0x14fa70(0x2be)+'ty']='1';},!![]);var _0x28cfee={'on':!![],'span':0x50,'boxes':![]};function _0x167834(){var _0x25e2df=_0x363400,_0x4d26e1=_0x4931ea[_0x25e2df(0x2c3)+'nNetw'+_0x25e2df(0x61e)+'nc']||{},_0x3d036d=Object[_0x25e2df(0x33c)](_0x4d26e1);for(var _0x371cca=-0x1295*-0x1+-0x268b+0x3fe*0x5;_0x371cca<_0x3d036d[_0x25e2df(0x6c4)+'h'];_0x371cca++){var _0x4c9dfa=_0x4d26e1[_0x3d036d[_0x371cca]][_0x25e2df(0x808)],_0x13d936=_0x4e292c(_0x4c9dfa+(0x23e8+-0x1eec+0x1*-0x4cc),'u32');if(!_0x13d936)continue;var _0x2ed747=_0x582a61['Mouse'+_0x25e2df(0x98c)]||[],_0x2f488c={'mouseLook':'0x'+(_0x13d936>>>0x1d7d+-0x15e7+0x796*-0x1)['toStr'+_0x25e2df(0x3f0)](0x1cbd+0x1*0xef2+-0x2b9f),'floats':{},'camera':null,'vec2':null};for(var _0x25c348=-0x1*0xd1f+0x23a3+-0x1684;_0x25c348<_0x2ed747['lengt'+'h'];_0x25c348++){if(_0x2ed747[_0x25c348][0x2*-0x1223+0x347*0x2+0x1db9]!==_0x4f1f8a[_0x25e2df(0x78e)])continue;_0x2f488c[_0x25e2df(0x713)+'s'][_0x4f1f8a['rNRdz']('0x',_0x2ed747[_0x25c348][-0x24*-0x31+0x1bf8+0x4*-0x8b7]['toStr'+_0x25e2df(0x3f0)](-0x25d9+0x128*0x10+0x1369))]=_0x4e292c(_0x13d936+_0x2ed747[_0x25c348][-0x3b9*-0x9+0x3*-0x14f+-0x1d94],_0x4f1f8a[_0x25e2df(0x78e)]);}var _0x3290f5=_0x4e292c(_0x4f1f8a[_0x25e2df(0x5db)](_0x13d936,0x1501+0x170*0xb+-0xb1*0x35),_0x25e2df(0x381));if(_0x3290f5)_0x2f488c['camer'+'a']='0x'+_0x4f1f8a['gCNoZ'](_0x3290f5,-0x9c*0x1+-0xcec+0xd88)[_0x25e2df(0x71d)+'ing'](-0x1*-0xfa3+-0x1339+0x3a6);var _0x24b9e9=_0x47105b(_0x13d936,-0x189a+0xaa*0x9+0x12e8,0x7a5+0x14c+-0x8ef*0x1);if(_0x24b9e9)_0x2f488c[_0x25e2df(0x6de)]=_0x24b9e9;return _0x2f488c;}return null;}var _0x10924a=_0x4f1f8a[_0x363400(0xb47)],_0x148271={'pitch':null,'yaw':null,'pitchOff':0x0,'yawOff':0x0,'fov':0x5a,'known':![]};try{var _0x9bf444=localStorage[_0x363400(0x8d9)+'em'](_0x10924a);if(_0x9bf444)_0x148271[_0x363400(0x4da)]=Math[_0x363400(0x5f8)](0x1*0xe95+-0x232d+0x1524,Math[_0x363400(0xa63)](0x758+-0x165c+0xf22,parseFloat(_0x9bf444)||0x10c*-0xd+-0x1756+-0x1f*-0x134));}catch(_0x2d61fa){}function _0x45d67a(){var _0x4ae29f=_0x363400;if('ZSMYp'==='GAygk'){if(_0x5a4eb1)_0x14a881['style'][_0x4ae29f(0x3c4)+'ay']=_0x4a2a49?'':_0x4ae29f(0x2d8);if(_0x2f9d57)_0x5dac5f['textC'+'onten'+'t']=_0x214bcd?_0x4f1f8a[_0x4ae29f(0x73f)]:_0x4ae29f(0xaf7);_0x4b124e['style']['width']=_0x45109f?'min(5'+'2vw,6'+_0x4ae29f(0x374):'auto',_0x3b604d[_0x4ae29f(0x41c)][_0x4ae29f(0x79b)+_0x4ae29f(0x541)]=_0x14697b?_0x4ae29f(0x1e3)+'1d':_0x4f1f8a[_0x4ae29f(0xb09)];}else try{localStorage['setIt'+'em'](_0x10924a,String(_0x148271['fov']));}catch(_0x10763a){}}function _0x536506(){var _0x3b8bbf=_0x363400,_0x50258e=_0x4f1f8a[_0x3b8bbf(0x194)][_0x3b8bbf(0xaed)]('|'),_0x3a88ca=0xb71+0x1842+-0x23b3;while(!![]){switch(_0x50258e[_0x3a88ca++]){case'0':var _0x4bb186=parseInt(_0x4da2fe[_0x3b8bbf(0x911)+_0x3b8bbf(0x98c)],-0x901*-0x3+0x1d4c+-0xbb*0x4d);continue;case'1':var _0x4da2fe=_0x167834();continue;case'2':var _0xe8c24e=_0x4f1f8a[_0x3b8bbf(0x6c7)](_0x4e292c,_0x4f1f8a[_0x3b8bbf(0x184)](_0x4bb186,0x13*0x31+-0x356+-0x35),_0x4f1f8a[_0x3b8bbf(0x78e)]);continue;case'3':if(typeof _0xe8c24e!=='numbe'+'r'||typeof _0x11e39f!==_0x4f1f8a['YGtnl'])return null;continue;case'4':if(!_0x4da2fe||!_0x4da2fe[_0x3b8bbf(0x911)+'Look'])return null;continue;case'5':var _0x11e39f=_0x4e292c(_0x4bb186+(-0x4*0x959+-0x1*-0x24bb+0xc5),_0x4f1f8a[_0x3b8bbf(0x78e)]);continue;case'6':return{'pitch':_0x4f1f8a[_0x3b8bbf(0x599)](_0xe8c24e,_0x148271['pitch'+_0x3b8bbf(0x717)]),'yaw':_0x11e39f+_0x148271[_0x3b8bbf(0x982)+'f']};}break;}}function _0x431ea7(_0x4abfe2,_0x9733fb,_0x9392ba,_0x287d7a){var _0x3ffb16=_0x363400;if(_0x4f1f8a['koLYu']===_0x4f1f8a[_0x3ffb16(0x3bf)]){var _0x22896e=_0x4f1f8a[_0x3ffb16(0xa08)](_0x536506);if(!_0x22896e)return null;var _0x13a1af=_0x22896e[_0x3ffb16(0x937)]*Math['PI']/(-0x15cf+0x2a6+0x3*0x69f),_0x3d211c=_0x22896e[_0x3ffb16(0x92a)]*Math['PI']/(0x17d9+0x1e73+-0x3598),_0x236cfb=Math[_0x3ffb16(0x44b)](_0x13a1af),_0x2a311b=_0x4f1f8a[_0x3ffb16(0x8f9)](Math['sin'](_0x3d211c),_0x236cfb),_0x5a4db8=-Math[_0x3ffb16(0xa84)](_0x13a1af),_0x38d529=Math[_0x3ffb16(0x44b)](_0x3d211c)*_0x236cfb,_0x1c0bff=_0x38d529,_0x13719a=-0x1499+0xc3e+0x85b,_0x51f154=-_0x2a311b,_0x22261d=_0x4f1f8a[_0x3ffb16(0x83c)](_0x9733fb[-0xa4+-0x197*-0x8+-0x60a*0x2],_0x4abfe2[-0x1e8c+0x3*0x247+0x17b7]),_0x4f3eaa=_0x9733fb[0x25ff+0x1df9*0x1+-0x43f7]-_0x4abfe2[0x16c3+-0x157*-0x11+-0x2d89],_0x45c926=_0x9733fb[-0x1*0xaed+-0x82+0xb71]-_0x4abfe2[-0xb2d+0x26e4+0x1bb5*-0x1],_0x2e6640=_0x4f1f8a[_0x3ffb16(0x983)](_0x22261d*_0x2a311b,_0x4f3eaa*_0x5a4db8)+_0x4f1f8a['MFAGc'](_0x45c926,_0x38d529);if(_0x2e6640<=-0x4*0x2ed+0x11ac+-0x5f8+0.05)return null;var _0x481c6b=_0x4f1f8a['rNRdz'](_0x4f1f8a[_0x3ffb16(0x300)](_0x22261d,_0x1c0bff),_0x4f3eaa*_0x13719a)+_0x4f1f8a['fbiux'](_0x45c926,_0x51f154),_0x172f5a=_0x4f1f8a['cHNul'](_0x4f1f8a['mobdi'](_0x22261d,_0x4f1f8a['mobdi'](_0x13719a,_0x38d529)-_0x4f1f8a[_0x3ffb16(0x8f9)](_0x51f154,_0x5a4db8))+_0x4f1f8a['aEgzL'](_0x4f3eaa,_0x4f1f8a[_0x3ffb16(0x587)](_0x51f154*_0x2a311b,_0x4f1f8a[_0x3ffb16(0x161)](_0x1c0bff,_0x38d529))),_0x4f1f8a[_0x3ffb16(0x161)](_0x45c926,_0x4f1f8a[_0x3ffb16(0x83c)](_0x1c0bff*_0x5a4db8,_0x13719a*_0x2a311b))),_0x30f98c=_0x4f1f8a['VwFVw'](_0x9392ba,_0x287d7a),_0x3300de=_0x148271[_0x3ffb16(0x4da)]*Math['PI']/(0x50*0x65+-0x6a2+0x376*-0x7),_0x29d369=Math['tan'](_0x4f1f8a[_0x3ffb16(0x4fe)](_0x3300de,0x7a*-0x3a+0x266e+0x2*-0x564)),_0x33654f=_0x481c6b/_0x2e6640/(_0x29d369*_0x30f98c),_0x5ddbf=_0x4f1f8a['VwFVw'](_0x172f5a,_0x2e6640)/_0x29d369;if(_0x4f1f8a[_0x3ffb16(0xb3a)](_0x33654f,-(-0xcb9*0x2+0x1d*-0x2+0x19ad+0.6000000000000001))||_0x33654f>-0x1e48+0x1498+-0x9b1*-0x1+0.6000000000000001||_0x4f1f8a[_0x3ffb16(0xb4b)](_0x5ddbf,-(0xe74+0x17a0+0xcb1*-0x3+0.6000000000000001))||_0x5ddbf>-0x3f8+0xdb1+-0x9b8+0.6000000000000001)return null;return{'x':_0x4f1f8a['QnwKM'](_0x4f1f8a[_0x3ffb16(0x9f0)](_0x33654f,-0x41e+-0x4*-0x61+-0x25*-0x12+0.5),0xd9*-0x4+-0x24*0x53+0xf10+0.5)*_0x9392ba,'y':_0x4f1f8a[_0x3ffb16(0x8f9)](-0x1*-0xdaf+-0x1*-0x85d+-0x4*0x583+0.5-_0x4f1f8a['aEgzL'](_0x5ddbf,-0x6*-0x12b+0x78f+0x153*-0xb+0.5),_0x287d7a),'z':_0x2e6640};}else{var _0x39265f=new _0x3d22fc(_0x4f1f8a[_0x3ffb16(0x807)]);_0x39265f['postM'+_0x3ffb16(0x30f)+'e'](_0x3c17c5),_0x4f1f8a['gYXoC'](_0x6ed42b,function(){var _0x23f20f=_0x3ffb16;try{_0x39265f[_0x23f20f(0x70e)]();}catch(_0x498b2f){}},0x2e4+-0x515*0x5+-0x177f*-0x1);}}var _0x1b9370={'open':![],'cat':'comba'+'t','built':![],'root':null,'cols':null,'head':null,'sub':null,'syncs':[]},_0xa9ea0f=null,_0x4f6c31=[{'id':_0x4f1f8a[_0x363400(0x459)],'label':'CMB'},{'id':_0x363400(0x1aa)+'ls','label':_0x4f1f8a[_0x363400(0x3d7)]},{'id':_0x363400(0x520)+'s','label':_0x4f1f8a['kvzMb']},{'id':_0x363400(0x564),'label':'LOG'}],_0x571c12=_0x4f1f8a['jeoEC'](_0x4f1f8a[_0x363400(0xb3d)](_0x4f1f8a[_0x363400(0x292)](_0x4f1f8a['uCXWG'](_0x4f1f8a['MBuqg'](_0x4f1f8a[_0x363400(0x264)](_0x4f1f8a['MzWWR'](_0x4f1f8a[_0x363400(0x8d1)](_0x4f1f8a[_0x363400(0x772)](_0x4f1f8a[_0x363400(0xb52)](_0x4f1f8a['KdQXW'](_0x4f1f8a[_0x363400(0x6a1)](_0x4f1f8a['rnIzi'](_0x4f1f8a[_0x363400(0x39c)](_0x4f1f8a['vvpiw'](_0x4f1f8a[_0x363400(0xb20)](_0x4f1f8a[_0x363400(0x292)](_0x4f1f8a['ujZnD'](_0x4f1f8a['EQkGe'](_0x4f1f8a[_0x363400(0x742)](_0x4f1f8a['UgaSa'](_0x4f1f8a[_0x363400(0x691)](_0x4f1f8a[_0x363400(0xb29)](_0x4f1f8a[_0x363400(0xa62)](_0x4f1f8a['pwfZv'](_0x4f1f8a['MBuqg'](_0x363400(0xa2d)+'ra-me'+_0x363400(0x498)+_0x363400(0x881)+_0x363400(0x24c)+'tial}'+('.mn-p'+_0x363400(0x43c)+_0x363400(0x49a)+'ion:f'+_0x363400(0x64d)+_0x363400(0x89d)+':24px'+_0x363400(0x1cd)+_0x363400(0xa6e)+_0x363400(0x17d)+'dth:m'+_0x363400(0x200)+'0px,c'+'alc(1'+_0x363400(0x68c)+_0x363400(0x2f9)+_0x363400(0x335)+'ax-he'+_0x363400(0x82a)+'min(5'+_0x363400(0xa19)+'calc('+_0x363400(0x196)+_0x363400(0x483)+_0x363400(0xa34)),_0x4f1f8a[_0x363400(0x1bc)]),'backg'+_0x363400(0x541)+':rgba'+'(24,1'+'7,21,'+_0x363400(0x64c)+_0x363400(0x785)+_0x363400(0x259)+'ilter'+':blur'+_0x363400(0x70d)+_0x363400(0xa54)+_0x363400(0x274)+_0x363400(0xb33)+_0x363400(0x460)+'bkit-'+'backd'+_0x363400(0x259)+_0x363400(0x4e7)+_0x363400(0x809)+'(22px'+_0x363400(0xa54)+'urate'+_0x363400(0xb33)+');')+_0x4f1f8a[_0x363400(0xa87)],_0x4f1f8a[_0x363400(0x980)]),_0x363400(0x390)+_0x363400(0x15c)+_0x363400(0x814)+'ont-s'+'ize:1'+'3px;f'+_0x363400(0x291)+_0x363400(0x891)+':\x22Int'+'er\x22,\x22'+_0x363400(0x554)+_0x363400(0x14b)+_0x363400(0x5ec)+'m-ui,'+_0x363400(0x8dc)+_0x363400(0x8cc)+';}')+(_0x363400(0x74c)+'anel.'+_0x363400(0x91e)+'{opac'+_0x363400(0x1b2)+_0x363400(0x789)+_0x363400(0x135)+':none'+';poin'+_0x363400(0x2dc)+'vents'+':auto'+';}'),_0x4f1f8a[_0x363400(0x47b)])+('borde'+_0x363400(0x49f)+_0x363400(0x52e)+_0x363400(0x95c)+'ackgr'+_0x363400(0x3de)+'rgba('+_0x363400(0x38e)+'55,25'+_0x363400(0x308)+'5);bo'+'x-sha'+_0x363400(0xb28)+'nset\x20'+_0x363400(0xabb)+_0x363400(0xa00)+_0x363400(0x79d)+_0x363400(0x38e)+'55,25'+'5,.05'+');}')+('.mn-l'+_0x363400(0x64e)+'ispla'+_0x363400(0x979)+_0x363400(0x782)+_0x363400(0x513)+'ems:c'+_0x363400(0x837)+_0x363400(0xa7c)+'h:32p'+_0x363400(0x44e)+_0x363400(0x376)+'2px;m'+_0x363400(0x9cc)+'-bott'+_0x363400(0x3fa)+_0x363400(0x348)),'.mn-l'+_0x363400(0x9f2)+'vg{wi'+'dth:2'+_0x363400(0x569)+_0x363400(0x98a)+_0x363400(0x6a9)+';over'+'flow:'+_0x363400(0x29f)+_0x363400(0x19a)+_0x363400(0x930)+'drop-'+_0x363400(0x6e3)+'w(0\x200'+_0x363400(0x5bd)+_0x363400(0x79d)+'255,1'+'07,15'+_0x363400(0x75c)+');}')+(_0x363400(0x172)+_0x363400(0x678)+'splay'+':flex'+_0x363400(0x894)+'n-ite'+_0x363400(0x666)+_0x363400(0x280)+'justi'+_0x363400(0x763)+'ntent'+':cent'+'er;wi'+_0x363400(0x6c1)+_0x363400(0x54d)+_0x363400(0x98a)+':34px'+';bord'+_0x363400(0x162)+'borde'+_0x363400(0x49f)+_0x363400(0x52e)+_0x363400(0x465)),'backg'+_0x363400(0x541)+_0x363400(0x61c)+'spare'+_0x363400(0x30e)+_0x363400(0x36a)+_0x363400(0x7e6)+'46,23'+'8,242'+',.4);'+_0x363400(0x213)+_0x363400(0x654)+_0x363400(0x280)+_0x363400(0x9fb)+'size:'+_0x363400(0x9f8)+_0x363400(0x9fb)+_0x363400(0x931)+_0x363400(0x63d)+_0x363400(0x6a0)+_0x363400(0xb3e)+'ly:in'+'herit'+';}')+_0x4f1f8a[_0x363400(0x38d)]+('.mn-t'+'ab.ac'+_0x363400(0x6d8)+_0x363400(0x390)+':#ff6'+_0x363400(0x470)+_0x363400(0xac5)+_0x363400(0x3de)+_0x363400(0x79d)+_0x363400(0x208)+'07,15'+'7,.1)'+';}')+('.mn-m'+_0x363400(0x679)+'lex:1'+_0x363400(0xa4c)+_0x363400(0x35d)+_0x363400(0x315)+_0x363400(0x8d2)+_0x363400(0x61a)+_0x363400(0x5dd)+'-dire'+_0x363400(0x735)+_0x363400(0x226)+'mn;}'),_0x363400(0x172)+_0x363400(0x16b)+'splay'+_0x363400(0x61a)+_0x363400(0x894)+'n-ite'+'ms:ce'+_0x363400(0x280)+_0x363400(0x26c)+'2px;p'+'addin'+'g:6px'+'\x206px\x20'+_0x363400(0x36f)+_0x363400(0x358)+'selec'+_0x363400(0x611)+'e;}')+('.mn-t'+_0x363400(0x45d)+_0x363400(0x95e)+_0x363400(0x4e3)+_0x363400(0x5e2)+'th:0;'+'}')+('.mn-h'+_0x363400(0xaaf)+'-size'+_0x363400(0x66e)+_0x363400(0x6a0)+'-weig'+_0x363400(0x90e)+'0;}')+_0x4f1f8a[_0x363400(0x19d)]+_0x4f1f8a['YumJZ'],_0x4f1f8a[_0x363400(0x815)])+_0x4f1f8a[_0x363400(0x682)]+_0x4f1f8a['ZvMCz'],_0x4f1f8a['WBYZo'])+_0x4f1f8a[_0x363400(0x3c2)],_0x4f1f8a[_0x363400(0x5c6)])+_0x4f1f8a[_0x363400(0x6fd)]+(_0x363400(0x9e0)+'ard{b'+'order'+_0x363400(0x7c1)+_0x363400(0x7c4)+_0x363400(0x783)+_0x363400(0x413)+'und:r'+'gba(2'+'55,25'+_0x363400(0x913)+',.025'+_0x363400(0x593)+_0x363400(0x1ce)+_0x363400(0x327)+'set\x200'+_0x363400(0x5f0)+'1px\x20r'+_0x363400(0x7e6)+_0x363400(0x385)+_0x363400(0x913)+',.05)'+';}'),_0x4f1f8a['XQaXq']),_0x363400(0x9e0)+_0x363400(0x301)+_0x363400(0x76b)+_0x363400(0x230)+_0x363400(0x2e3)+'x;ali'+'gn-it'+'ems:c'+_0x363400(0x837)+';gap:'+_0x363400(0x828)+_0x363400(0x72f)+_0x363400(0x81d)+_0x363400(0x791)+'x;}'),_0x4f1f8a[_0x363400(0x318)]),'.sk-c'+'ard-t'+_0x363400(0x9bf)+_0x363400(0x191)+_0x363400(0x1be)+'t-siz'+_0x363400(0xaa8)+_0x363400(0x595)+_0x363400(0x9e9)+_0x363400(0x863)+_0x363400(0x467)+_0x363400(0x36a)+'gba(2'+'46,23'+'8,242'+_0x363400(0x739)+';}'),_0x363400(0x9e0)+_0x363400(0x2b3)+_0x363400(0x1b7)+_0x363400(0x29a)+_0x363400(0x3a3)+_0x363400(0x1d4)+'ong{c'+_0x363400(0x2ec)+_0x363400(0x81e)+_0x363400(0x987)),_0x4f1f8a[_0x363400(0xa43)])+(_0x363400(0x634)+_0x363400(0xa0a)+_0x363400(0x9fb)+_0x363400(0x59d)+_0x363400(0x994)+'opaci'+'ty:.4'+_0x363400(0x941)+_0x363400(0x62f)+_0x363400(0x6f8)+'6px;w'+_0x363400(0x827)+_0x363400(0x96d)+':pre-'+_0x363400(0x40e)+'}'),_0x4f1f8a[_0x363400(0x3c5)]),'.sk-l'+_0x363400(0x6e5)+_0x363400(0x8f6)+_0x363400(0xa88)+'or:rg'+'ba(24'+'6,238'+',242,'+'.75);'+'}')+('.sk-h'+_0x363400(0x73d)+_0x363400(0x230)+_0x363400(0x4ec)+_0x363400(0x818)+_0x363400(0x3ee)+'ze:10'+_0x363400(0x653)+_0x363400(0xa48)+':.4;}')+_0x4f1f8a[_0x363400(0x6ff)],'.sk-s'+_0x363400(0x973)+_0x363400(0x4ba)+_0x363400(0x588)+_0x363400(0x8e1)+_0x363400(0x3ab)+_0x363400(0xb5f)+_0x363400(0x352)+_0x363400(0x64b)+_0x363400(0x57e)+':3px;'+_0x363400(0x9c2)+_0x363400(0x68a)+_0x363400(0x787)+_0x363400(0x797)+_0x363400(0x98a)+_0x363400(0x336)+_0x363400(0x4d1)+_0x363400(0x49f)+'ius:5'+'0%;')+_0x4f1f8a[_0x363400(0x489)]+('.sk-s'+_0x363400(0x973)+_0x363400(0x521)+'-chec'+_0x363400(0x3b4)+_0x363400(0x3cb)+_0x363400(0x996)+_0x363400(0x600)+_0x363400(0x4fb)+'ba(25'+_0x363400(0x19b)+',157,'+'.25);'+'}')+_0x4f1f8a[_0x363400(0x2b5)]+_0x4f1f8a['nqUJm'],_0x363400(0x442)+'lider'+'{-web'+_0x363400(0x8e5)+_0x363400(0x709)+_0x363400(0x6cb)+_0x363400(0x33b)+'appea'+_0x363400(0x52d)+_0x363400(0x7f6)+';widt'+_0x363400(0x3a8)+_0x363400(0x44e)+_0x363400(0x3cd)+_0x363400(0x783)+_0x363400(0x413)+'und:t'+'ransp'+'arent'+';}')+(_0x363400(0x442)+'lider'+_0x363400(0x9c5)+_0x363400(0x624)+_0x363400(0x81c)+'r-run'+_0x363400(0x7c2)+_0x363400(0x177)+_0x363400(0xb62)+_0x363400(0x365)+_0x363400(0x298)+_0x363400(0x21d)+_0x363400(0x596)+'s:2px'+';')+_0x4f1f8a[_0x363400(0x8e3)],'.sk-s'+_0x363400(0x2b6)+_0x363400(0x9c5)+_0x363400(0x624)+_0x363400(0x81c)+_0x363400(0xaf9)+'mb{-w'+_0x363400(0x49b)+_0x363400(0x760)+'aranc'+'e:non'+_0x363400(0x3b6)+'th:6p'+_0x363400(0x44e)+_0x363400(0x863)+'px;ma'+_0x363400(0x42b)+'top:-'+'2px;b'+'order'+_0x363400(0x7c1)+_0x363400(0x3e9)+_0x363400(0x3bc)+'kgrou'+_0x363400(0x272)+_0x363400(0x981)+';}'),_0x4f1f8a[_0x363400(0x7ae)]),_0x4f1f8a[_0x363400(0x6c2)])+('.sk-n'+_0x363400(0x765)+'rr{co'+_0x363400(0x86f)+'ff7a9'+_0x363400(0x136))+('.sk-b'+'tn{al'+'ign-s'+_0x363400(0xb2e)+_0x363400(0x6a4)+_0x363400(0x74e)+'borde'+_0x363400(0x4e1)+_0x363400(0xb59)+_0x363400(0x7c1)+'us:8p'+_0x363400(0x7a7)+'ding:'+'8px\x201'+_0x363400(0x95c)+'ackgr'+_0x363400(0x3de)+_0x363400(0xae9)+'9d;co'+_0x363400(0x86f)+_0x363400(0x812)),_0x4f1f8a[_0x363400(0x9a4)])+_0x4f1f8a['EPIwt']+_0x4f1f8a[_0x363400(0x439)],_0x4f1f8a['khjci'])+(_0x363400(0x76a)+'ition'+':opac'+'ity\x20.'+'2s;po'+'inter'+_0x363400(0x90d)+_0x363400(0x875)+_0x363400(0x367)+'lter:'+'drop-'+'shado'+'w(0\x200'+_0x363400(0x5bd)+'rgba('+'255,1'+_0x363400(0x8a6)+_0x363400(0x189)+_0x363400(0xb17)),_0x3a0af8=_0x363400(0x2c6)+'viewB'+_0x363400(0x402)+'\x200\x2024'+_0x363400(0x7eb)+'<path'+_0x363400(0x7a0)+_0x363400(0x7f7)+_0x363400(0x493)+_0x363400(0x51e)+_0x363400(0x939)+_0x363400(0x82b)+_0x363400(0x9ea)+'.5\x201.'+_0x363400(0x971)+'\x204-4.'+'5s4\x202'+_0x363400(0xa04)+_0x363400(0xa78)+_0x363400(0x610)+'5-4\x207'+'.5z\x22\x20'+_0x4f1f8a[_0x363400(0x4ed)]+_0x4f1f8a['uVnUW'],_0x2f7556=_0x4f1f8a['mxbkj'](_0x4f1f8a[_0x363400(0xb21)]+(_0x363400(0xaba)+_0x363400(0xb2a)+_0x363400(0xa07)+_0x363400(0x3ec)+_0x363400(0xae9)+'9d\x22\x20s'+'troke'+'-widt'+_0x363400(0x78d)+'6\x22\x20st'+_0x363400(0x507)+_0x363400(0x7f1)+_0x363400(0x342)+'ound\x22'+'\x20stro'+_0x363400(0x273)+_0x363400(0x2a8)+_0x363400(0xb46)+'und\x22/'+'>'),_0x4f1f8a['NPqvd']);function _0x44a28a(_0x5639c6,_0x1725dd,_0x754d9c){var _0x2d8687=_0x363400,_0x5bc74a=document[_0x2d8687(0x47e)+_0x2d8687(0x27a)+_0x2d8687(0x141)](_0x5639c6);if(_0x1725dd)_0x5bc74a['class'+'Name']=_0x1725dd;if(_0x754d9c!=null)_0x5bc74a[_0x2d8687(0x38a)+_0x2d8687(0x8f4)]=_0x754d9c;return _0x5bc74a;}function _0x41b23c(_0x336170,_0x2312cc){var _0x636391=_0x363400,_0x5a9397=_0x4f1f8a[_0x636391(0x36c)][_0x636391(0xaed)]('|'),_0x4baa66=-0x1a11+0x12b6+-0x10d*-0x7;while(!![]){switch(_0x5a9397[_0x4baa66++]){case'0':var _0x275f5c=_0x44a28a(_0x4f1f8a['Lsjao'],_0x636391(0x9bb)+'rd-he'+'ad');continue;case'1':_0x36591a[_0x636391(0x91c)+_0x636391(0x31c)+'d'](_0x2a4a03);continue;case'2':_0x36591a[_0x636391(0x91c)+_0x636391(0x31c)+'d'](_0x275f5c);continue;case'3':var _0x36591a=_0x4f1f8a['RrlML'](_0x44a28a,'div',_0x4f1f8a[_0x636391(0x382)](_0x4f1f8a[_0x636391(0x2f5)],_0x2312cc?_0x636391(0x897):''));continue;case'4':return _0x36591a;case'5':var _0x2a4a03=_0x4f1f8a['ucvuV'](_0x44a28a,'div',_0x636391(0x853)+_0x636391(0x4e6));continue;case'6':_0x36591a['head']=_0x3dd3e1;continue;case'7':var _0x3dd3e1=_0x44a28a(_0x4f1f8a[_0x636391(0x725)],_0x636391(0x9bb)+_0x636391(0x594)+_0x636391(0x6ca),_0x4f1f8a[_0x636391(0x2c2)](_0x4f1f8a['rVwbo'](_0x636391(0x23b)+_0x636391(0x7e9),_0x336170),_0x4f1f8a['Ybdbj']));continue;case'8':_0x36591a['body']=_0x2a4a03;continue;case'9':_0x275f5c[_0x636391(0x91c)+'dChil'+'d'](_0x3dd3e1);continue;}break;}}function _0x264a2e(_0x5f04ed,_0x4ed139){var _0x365745=_0x363400,_0x309a76=_0x44a28a(_0x4f1f8a[_0x365745(0x1e1)],'sk-sw'+'itch');_0x309a76['type']=_0x365745(0x214)+'n';var _0x534c23=function(){var _0x345f68=_0x365745;_0x309a76[_0x345f68(0x8a8)+'tribu'+'te'](_0x4f1f8a[_0x345f68(0x5dc)],_0x5f04ed()?_0x4f1f8a[_0x345f68(0xa57)]:_0x4f1f8a[_0x345f68(0x1ff)]);};return _0x309a76[_0x365745(0xa32)+'ck']=function(){var _0x22258a=_0x365745;_0x4f1f8a[_0x22258a(0x4cc)](_0x4ed139,!_0x5f04ed()),_0x534c23();},_0x534c23(),_0x309a76['sync']=_0x534c23,_0x1b9370['syncs'][_0x365745(0xaf5)](_0x534c23),_0x309a76;}function _0x1f0dc5(_0x5dddd5,_0x3359c6,_0x1dbbf9,_0x3d5084,_0x53bba8){var _0x2d6f00=_0x363400,_0xbe908d={'WdDAV':function(_0x46f8b2,_0xee9327){return _0x46f8b2(_0xee9327);},'VZamJ':function(_0x5a3edb,_0x560acd){return _0x5a3edb(_0x560acd);}},_0x542057=_0x4f1f8a['gYXoC'](_0x44a28a,_0x4f1f8a['Lsjao'],_0x2d6f00(0xb11)+_0x2d6f00(0x9f5)),_0x56baad=document['creat'+_0x2d6f00(0x27a)+_0x2d6f00(0x141)](_0x4f1f8a[_0x2d6f00(0x5b0)]);_0x56baad['type']=_0x2d6f00(0x31b),_0x56baad['class'+'Name']=_0x2d6f00(0x56e)+_0x2d6f00(0x13f),_0x56baad[_0x2d6f00(0x5f8)]=String(_0x5dddd5),_0x56baad[_0x2d6f00(0xa63)]=String(_0x3359c6),_0x56baad[_0x2d6f00(0x35c)]=_0x4f1f8a['ICXJe'](String,_0x1dbbf9);var _0x439ae3=_0x44a28a(_0x4f1f8a['NDvjA'],_0x4f1f8a['sqiGr']),_0x5ed5b3=function(){var _0x2ddb30=_0x2d6f00,_0x8821fb=_0x4f1f8a[_0x2ddb30(0x406)]['split']('|'),_0x48687d=0x1b1*0x13+-0x6b*-0x49+0x37b*-0x12;while(!![]){switch(_0x8821fb[_0x48687d++]){case'0':_0x56baad['style'][_0x2ddb30(0x7e5)+_0x2ddb30(0x88f)+'y']('--p',_0x481cb6+'%');continue;case'1':_0x439ae3['textC'+'onten'+'t']=(_0x4f1f8a['eLApN'](_0x1dbbf9,0x477+0x8*0x3d6+0x1193*-0x2)?_0x40e3e8[_0x2ddb30(0x35b)+'ed'](0x2f3+-0xb7*-0x17+-0x1363):String(Math[_0x2ddb30(0x541)](_0x40e3e8)))+(_0x56baad['datas'+'et'][_0x2ddb30(0x645)]||'');continue;case'2':var _0x40e3e8=_0x4f1f8a[_0x2ddb30(0x6e0)](_0x3d5084);continue;case'3':var _0x481cb6=_0x4f1f8a['mDeOQ'](_0x4f1f8a['QLika'](_0x40e3e8,_0x5dddd5),_0x4f1f8a[_0x2ddb30(0x138)](_0x3359c6,_0x5dddd5))*(0x1599+0x5b9*-0x1+-0x7be*0x2);continue;case'4':_0x56baad[_0x2ddb30(0x520)]=String(_0x40e3e8);continue;}break;}};return _0x56baad[_0x2d6f00(0x822)+'ut']=function(){var _0x4d63f9=_0x2d6f00;_0xbe908d[_0x4d63f9(0x4e9)](_0x53bba8,_0xbe908d['VZamJ'](parseFloat,_0x56baad[_0x4d63f9(0x520)])||_0x5dddd5),_0x5ed5b3();},_0x542057[_0x2d6f00(0x91c)+_0x2d6f00(0x31c)+'d'](_0x56baad),_0x542057[_0x2d6f00(0x91c)+'dChil'+'d'](_0x439ae3),_0x542057[_0x2d6f00(0x4b4)]=_0x5ed5b3,_0x542057['input']=_0x56baad,_0x5ed5b3(),_0x1b9370[_0x2d6f00(0x625)][_0x2d6f00(0xaf5)](_0x5ed5b3),_0x542057;}function _0x3681ef(_0x3eaedc,_0x41666b){var _0x346326=_0x363400,_0x11eed8={'EMtmE':function(_0x331769,_0x215a89){var _0x3098ff=_0x1a9a;return _0x4f1f8a[_0x3098ff(0x925)](_0x331769,_0x215a89);},'HsBJi':function(_0x440349,_0x3082a0,_0x41e635){return _0x440349(_0x3082a0,_0x41e635);},'aWERy':_0x346326(0x25a)+_0x346326(0x246)};if(_0x4f1f8a['QJpcQ'](_0x4f1f8a[_0x346326(0x58d)],_0x346326(0x6bd))){var _0x4d9013={'NCGdn':_0x346326(0x31f),'qzqFD':'false'},_0x15ac83=_0x11eed8['HsBJi'](_0x32d64e,_0x346326(0x214)+'n',_0x11eed8[_0x346326(0x8d6)]);_0x15ac83['type']='butto'+'n';var _0x3e68b0=function(){var _0x55f5ee=_0x346326;_0x15ac83[_0x55f5ee(0x8a8)+_0x55f5ee(0x38c)+'te']('aria-'+_0x55f5ee(0x77e)+'ed',_0x5bf33f()?_0x4d9013[_0x55f5ee(0x3f9)]:_0x4d9013[_0x55f5ee(0xb70)]);};return _0x15ac83['oncli'+'ck']=function(){var _0x2ed934=_0x346326;_0x11eed8[_0x2ed934(0x9bc)](_0x3b0070,!_0x424fc8()),_0x3e68b0();},_0x3e68b0(),_0x15ac83[_0x346326(0x4b4)]=_0x3e68b0,_0x13cfbe['syncs']['push'](_0x3e68b0),_0x15ac83;}else{var _0x2a401d=_0x4f1f8a['XdpYN'](_0x44a28a,_0x4f1f8a['Lsjao'],_0x346326(0xb60)+'l'),_0x46071d=_0x44a28a(_0x4f1f8a['Lsjao'],'sk-la'+'bel',_0x3eaedc+(_0x41666b?_0x4f1f8a[_0x346326(0x5e8)](_0x4f1f8a[_0x346326(0x955)]+_0x41666b,_0x4f1f8a[_0x346326(0x6f3)]):''));return _0x2a401d['appen'+'dChil'+'d'](_0x46071d),_0x2a401d;}}function _0x1cc650(_0x257a57,_0x41815d,_0x52f262,_0x48db13){var _0x481ce4=_0x363400,_0x325de0={'ibCTu':function(_0x32fe07,_0x390a72){var _0x3553e1=_0x1a9a;return _0x4f1f8a[_0x3553e1(0x161)](_0x32fe07,_0x390a72);}},_0x4d10d6=_0x257a57&&_0x257a57['surve'+'y']&&_0x257a57['surve'+'y'][_0x41815d];if(!_0x4d10d6)return'-';for(var _0x51832b=0x8*0xb+-0x177+-0x11f*-0x1;_0x4f1f8a[_0x481ce4(0xb74)](_0x51832b,_0x4d10d6['lengt'+'h']);_0x51832b++){if(_0x4f1f8a[_0x481ce4(0x52f)](_0x4d10d6[_0x51832b]['o'],_0x52f262)){if(_0x4f1f8a['kkytO'](_0x48db13,'v3')){var _0x5a0d01=_0x4d10d6[_0x51832b][_0x481ce4(0xa4a)]||[_0x4d10d6[_0x51832b]['v'],-0xabf*0x1+0xae3+0x6*-0x6,-0xa95+-0x1*-0x397+0x6fe];return _0x5a0d01[_0x481ce4(0x796)](function(_0x246b13){var _0x322abd=_0x481ce4;return Math[_0x322abd(0x541)](_0x325de0[_0x322abd(0x880)](_0x246b13,-0xd4*-0x28+0xb*0x25a+0xd*-0x482))/(0x52e+0x65*0x13+-0x11*0xb9);})['join']('\x20\x20');}var _0x1aa29e=_0x4d10d6[_0x51832b]['v'];return typeof _0x1aa29e===_0x4f1f8a[_0x481ce4(0x9ff)]?Math['round'](_0x4f1f8a[_0x481ce4(0x161)](_0x1aa29e,-0x779+-0x1f22*-0x1+-0x13c1))/(0x252+0x17c2+-0x4*0x58b):String(_0x1aa29e);}}return'-';}function _0xf11313(_0x1eca17){var _0x372e8e=_0x363400,_0x7e169e={'uVLUi':function(_0x2fea20,_0x535fc3,_0x355a1c){return _0x2fea20(_0x535fc3,_0x355a1c);},'BJOpB':function(_0x1bcbcd,_0x3715d9){return _0x4f1f8a['uZbAs'](_0x1bcbcd,_0x3715d9);},'YxxVW':function(_0x7b53fc,_0x406b8b){return _0x7b53fc+_0x406b8b;},'PlZef':_0x4f1f8a['mkLES'],'LeePd':function(_0x41d13a,_0x1013dd){return _0x41d13a<_0x1013dd;},'WiIep':function(_0x81be51,_0x40db67){return _0x81be51===_0x40db67;},'xSqAv':_0x4f1f8a[_0x372e8e(0x8fe)],'wxslz':'.Modu'+'le','gBzzF':function(_0x33ef2b,_0x4f5ebe){return _0x4f1f8a['lsyji'](_0x33ef2b,_0x4f5ebe);},'pXSYs':_0x4f1f8a[_0x372e8e(0xaa1)],'oAlJH':function(_0x50abfd,_0x894eb2){var _0x2dbc15=_0x372e8e;return _0x4f1f8a[_0x2dbc15(0x8ec)](_0x50abfd,_0x894eb2);},'HSKyW':_0x4f1f8a[_0x372e8e(0x63c)],'QvcUS':_0x4f1f8a[_0x372e8e(0x4ab)],'PpcjR':function(_0x58314a,_0xab4d44){var _0x56223f=_0x372e8e;return _0x4f1f8a[_0x56223f(0x2c1)](_0x58314a,_0xab4d44);},'uUxkI':_0x4f1f8a[_0x372e8e(0x870)],'BNQoi':function(_0x25ead9,_0x2bd9f1){return _0x25ead9/_0x2bd9f1;}},_0x3be7fd=_0xa9ea0f,_0xac8559=[],_0xc7c6d8;if(_0x4f1f8a['wuqvL'](_0x1eca17,'comba'+'t')){var _0x1d8864=_0x41b23c(_0x372e8e(0x456)+'\x20hack',_0x16771b['on']),_0x1ad0aa=_0x4f1f8a[_0x372e8e(0x4db)](_0x44a28a,_0x372e8e(0x93a),_0x4f1f8a['BnzCU'],_0x16771b['on']?_0x4f1f8a[_0x372e8e(0x871)](_0x4f1f8a[_0x372e8e(0x5db)]('x'+_0x16771b['facto'+'r']['toFix'+'ed'](0x155f+-0xeba+-0x6a4),'\x20on\x20')+_0x3203cd['lengt'+'h']+(_0x372e8e(0x399)+'ds\x20·\x20'),_0x3f2467)+(_0x372e8e(0x36d)+'es'):'Multi'+'plies'+'\x20move'+_0x372e8e(0x24e)+_0x372e8e(0x859)+_0x372e8e(0x399)+'ds\x20on'+'ly.\x20H'+_0x372e8e(0x98a)+',\x20ste'+_0x372e8e(0x329)+_0x372e8e(0x8e0)+'\x20are\x20'+_0x372e8e(0x39f)+_0x372e8e(0x216)),_0x5c9340=_0x4f1f8a['xDFHz'](_0x3681ef,_0x372e8e(0x210)+'ed');_0x5c9340[_0x372e8e(0x91c)+_0x372e8e(0x31c)+'d'](_0x4f1f8a[_0x372e8e(0x948)](_0x264a2e,function(){return _0x16771b['on'];},function(_0x467f56){var _0x54e1a8=_0x372e8e;_0x7e169e[_0x54e1a8(0x17f)](_0x3fe7bc,_0x467f56,_0x16771b[_0x54e1a8(0x890)+'r']),_0x1ad0aa['textC'+_0x54e1a8(0xaac)+'t']=_0x467f56?_0x7e169e['BJOpB'](_0x7e169e['YxxVW'](_0x7e169e[_0x54e1a8(0x6ae)](_0x7e169e[_0x54e1a8(0x6ae)]('x'+_0x16771b[_0x54e1a8(0x890)+'r'][_0x54e1a8(0x35b)+'ed'](0x5*-0x3fb+0x11b1+0x1b*0x15),_0x7e169e['PlZef']),_0x3203cd['lengt'+'h']),_0x54e1a8(0x399)+_0x54e1a8(0x4cf))+_0x3f2467,_0x54e1a8(0x36d)+'es'):_0x54e1a8(0xa45)+_0x54e1a8(0x959)+_0x54e1a8(0x311)+'ment-'+_0x54e1a8(0x859)+_0x54e1a8(0x399)+_0x54e1a8(0x720)+'ly.\x20H'+_0x54e1a8(0x98a)+',\x20ste'+'p\x20and'+_0x54e1a8(0x8e0)+'\x20are\x20'+'refus'+'ed.';})),_0x1d8864['body'][_0x372e8e(0x91c)+'dChil'+'d'](_0x1ad0aa),_0x1d8864[_0x372e8e(0x54b)]['appen'+'dChil'+'d'](_0x5c9340);var _0x228191=_0x1f0dc5(0x1883+-0x107e+-0x804,-0xc*0x207+0x6a+0xb*0x22d,0xb3*0x4+0x10cc+0x13*-0x108+0.5,function(){return _0x16771b['facto'+'r'];},function(_0x35e76d){var _0x13fe8e=_0x372e8e;if('sMpOo'!==_0x13fe8e(0x640))_0x4f1f8a[_0x13fe8e(0x948)](_0x3fe7bc,_0x16771b['on'],_0x35e76d);else try{_0x36d350[_0x13fe8e(0x625)][_0x58e6f1]();}catch(_0x15f647){}});_0x228191[_0x372e8e(0xa93)][_0x372e8e(0xa68)+'et'][_0x372e8e(0x645)]='x';var _0x15e1b5=_0x3681ef(_0x4f1f8a[_0x372e8e(0x86e)],'F8\x20/\x20'+_0x372e8e(0x6ed)+'so\x20st'+'ep\x20th'+'is');_0x15e1b5[_0x372e8e(0x91c)+'dChil'+'d'](_0x228191),_0x1d8864[_0x372e8e(0x54b)][_0x372e8e(0x91c)+_0x372e8e(0x31c)+'d'](_0x15e1b5);if(_0x4fc2a6['lengt'+'h']){var _0x5c6d37=_0x44a28a(_0x372e8e(0x93a),_0x4f1f8a[_0x372e8e(0x692)],_0x4f1f8a[_0x372e8e(0x3e3)]+_0x4fc2a6[_0x372e8e(0x57b)](0xdf*0x2+0x1*-0x2365+0x21a7*0x1,-0x124a+0x7*0x375+0x1*-0x5e5)[_0x372e8e(0x796)](function(_0x1cc756){var _0x26299c=_0x372e8e;return _0x7e169e['YxxVW']('0x'+(_0x7e169e[_0x26299c(0x829)](_0x1cc756['o'],0x14eb+-0x235d+-0x56*-0x2b)?'?':_0x1cc756['o']['toStr'+'ing'](-0x25*0x33+-0x211f+-0x3a*-0xb3))+'\x20(',_0x1cc756['why'])+')';})[_0x372e8e(0x633)]('\x20\x20'));_0x1d8864[_0x372e8e(0x54b)][_0x372e8e(0x91c)+'dChil'+'d'](_0x5c6d37);}_0xac8559[_0x372e8e(0xaf5)](_0x1d8864);var _0x3029af=_0x4f1f8a['keyZy'](_0x41b23c,_0x372e8e(0x8ce)+_0x372e8e(0xb19)),_0x149da6=_0x44a28a('butto'+'n','sk-bt'+'n',_0x372e8e(0x784)+_0x372e8e(0x551)+_0x372e8e(0xa98)+'9)');_0x149da6['type']=_0x372e8e(0x214)+'n',_0x149da6[_0x372e8e(0xa32)+'ck']=function(){var _0x3228bd=_0x372e8e;_0x4f1f8a['KXDzz'](_0x2dddd8,'snaps'+_0x3228bd(0x2bd));},_0x3029af[_0x372e8e(0x54b)][_0x372e8e(0x91c)+_0x372e8e(0x31c)+'d'](_0x44a28a(_0x4f1f8a['Lsjao'],_0x372e8e(0x95f)+'esc',_0x372e8e(0x26f)+_0x372e8e(0x1c1)+_0x372e8e(0x9b5)+_0x372e8e(0x2a6)+_0x372e8e(0x859)+'\x20on/o'+_0x372e8e(0x48b)+'\x20/\x20F6'+_0x372e8e(0x762)+_0x372e8e(0x80f)+'/-0.5'+'\x0a[\x20\x20]'+_0x372e8e(0x81a)+'ld\x20of'+'\x20view'+_0x372e8e(0x975)+_0x372e8e(0x69a)+_0x372e8e(0xaea)+_0x372e8e(0x567))),_0x3029af['body'][_0x372e8e(0x91c)+_0x372e8e(0x31c)+'d'](_0x149da6),_0xac8559['push'](_0x3029af);}if(_0x1eca17==='visua'+'ls'){var _0x498fc0=_0x4f1f8a[_0x372e8e(0x781)](_0x41b23c,_0x4f1f8a[_0x372e8e(0x852)],_0x28cfee['on']),_0x20c8c6=_0x3681ef(_0x4f1f8a[_0x372e8e(0x82d)]);_0x20c8c6['appen'+_0x372e8e(0x31c)+'d'](_0x264a2e(function(){var _0x73643e=_0x372e8e;if(_0x4f1f8a['qyIvh'](_0x73643e(0x4a3),_0x73643e(0x4a3))){var _0x2f2d86=_0x52770a['keys'](_0x293ce1);for(var _0x5c9bdc=-0x6*0x427+-0xeff+-0x27e9*-0x1;_0x5c9bdc<_0x2f2d86['lengt'+'h']&&_0x5c9bdc<-0x4f*-0x48+0x5ab*-0x4+0x2cc;_0x5c9bdc++){var _0x101031=_0x2d52bf[_0x2f2d86[_0x5c9bdc]];if(_0x101031&&_0x7e169e[_0x73643e(0x46d)](typeof _0x101031,_0x7e169e['xSqAv'])&&_0x101031['Modul'+'e']&&_0x101031[_0x73643e(0x2cc)+'e']['HEAPU'+'8']&&_0x101031['Modul'+'e']['HEAPU'+'8']['buffe'+'r'])return _0x39e422['sourc'+'e']='windo'+'w.'+_0x2f2d86[_0x5c9bdc]+_0x7e169e['wxslz'],_0x101031;}}else return _0x28cfee['on'];},function(_0x4cd8bf){_0x28cfee['on']=_0x4cd8bf,_0x5605a();})),_0x498fc0[_0x372e8e(0x54b)][_0x372e8e(0x91c)+_0x372e8e(0x31c)+'d'](_0x44a28a(_0x4f1f8a[_0x372e8e(0x725)],_0x4f1f8a['BnzCU'],_0x372e8e(0x904)+_0x372e8e(0x37e)+_0x372e8e(0x91f)+'imap,'+_0x372e8e(0x3d0)+'right'+'.\x20Nee'+'ds\x20on'+_0x372e8e(0x74b)+'sitio'+'ns.')),_0x498fc0['body']['appen'+'dChil'+'d'](_0x20c8c6);var _0x317c8a=_0x1f0dc5(0x11*0x1cf+-0x710+0x1*-0x1787,0x1139*-0x1+-0x8fa+0x1ad3,-0xe7c+0x33*-0x4a+0x1d44,function(){var _0x57eeb4=_0x372e8e;if(_0x7e169e['gBzzF'](_0x7e169e['pXSYs'],'YUYTp'))return _0x28cfee[_0x57eeb4(0x4f6)];else _0x184185['on']=!![],_0x3e0969[_0x57eeb4(0x795)]=![];},function(_0x118220){_0x28cfee['span']=_0x118220;});_0x317c8a['input'][_0x372e8e(0xa68)+'et']['unit']='m';var _0x5dcfd2=_0x3681ef(_0x4f1f8a['MTVzP'],_0x4f1f8a[_0x372e8e(0xa94)]);_0x5dcfd2['appen'+_0x372e8e(0x31c)+'d'](_0x317c8a),_0x498fc0[_0x372e8e(0x54b)][_0x372e8e(0x91c)+_0x372e8e(0x31c)+'d'](_0x5dcfd2),_0xac8559['push'](_0x498fc0);var _0x1df71a=_0x4f1f8a[_0x372e8e(0x171)](_0x41b23c,_0x4f1f8a[_0x372e8e(0x844)],_0x28cfee['boxes']),_0x498a88=_0x4f1f8a['ICXJe'](_0x3681ef,_0x4f1f8a['BBdcW']);_0x498a88[_0x372e8e(0x91c)+'dChil'+'d'](_0x264a2e(function(){var _0x5614d5=_0x372e8e;return _0x28cfee[_0x5614d5(0x795)];},function(_0x39ef5c){var _0x1fb02f=_0x372e8e;if(_0x7e169e['oAlJH'](_0x7e169e[_0x1fb02f(0x23a)],_0x7e169e['HSKyW']))_0x28cfee[_0x1fb02f(0x795)]=_0x39ef5c,_0x28cfee['on']=!![],_0x5605a();else try{return _0x5b181f['getIt'+'em'](_0x5207e3)==='1';}catch(_0x261868){return![];}})),_0x1df71a[_0x372e8e(0x54b)][_0x372e8e(0x91c)+_0x372e8e(0x31c)+'d'](_0x4f1f8a[_0x372e8e(0xa29)](_0x44a28a,_0x372e8e(0x93a),_0x372e8e(0x95f)+_0x372e8e(0x73e),_0x4f1f8a[_0x372e8e(0x883)])),_0x1df71a[_0x372e8e(0x54b)][_0x372e8e(0x91c)+_0x372e8e(0x31c)+'d'](_0x498a88);var _0x2d5f99=_0x1f0dc5(-0xaa9*0x1+0x26fd+-0x1f*0xe8,-0xc9*-0xc+0xb47*-0x1+0x25d,0x1a*-0x20+-0x2a6*0xa+0x1dbe,function(){var _0x2c1895=_0x372e8e;return _0x148271[_0x2c1895(0x4da)];},function(_0x297ab6){_0x148271['fov']=_0x297ab6,_0x45d67a();});_0x2d5f99[_0x372e8e(0xa93)][_0x372e8e(0xa68)+'et']['unit']='°';var _0x2593f7=_0x3681ef(_0x372e8e(0x9d0)+'\x20of\x20v'+_0x372e8e(0x986),_0x372e8e(0x724)+_0x372e8e(0xad0)+_0x372e8e(0xa27)+_0x372e8e(0x6b2)+'is');_0x2593f7[_0x372e8e(0x91c)+'dChil'+'d'](_0x2d5f99),_0x1df71a[_0x372e8e(0x54b)][_0x372e8e(0x91c)+'dChil'+'d'](_0x2593f7);var _0x38ba19=_0x3be7fd&&_0x3be7fd['view'];_0x1df71a['body'][_0x372e8e(0x91c)+'dChil'+'d'](_0x4f1f8a['vMjuz'](_0x44a28a,'div',_0x372e8e(0x687)+'te','view:'+'\x20'+(_0x38ba19?_0x38ba19['mouse'+'Look']?'Mouse'+'Look\x20'+_0x38ba19['mouse'+_0x372e8e(0x98c)]+(_0x38ba19[_0x372e8e(0x412)+'a']?_0x4f1f8a[_0x372e8e(0x579)]+_0x38ba19[_0x372e8e(0x412)+'a']:''):'no\x20Mo'+_0x372e8e(0x5d8)+_0x372e8e(0x737)+'t':'no\x20Mo'+_0x372e8e(0x5d8)+_0x372e8e(0x737)+'t')+(_0x148271['pitch'+_0x372e8e(0x717)]||_0x148271['yawOf'+'f']?_0x4f1f8a[_0x372e8e(0x8da)](_0x4f1f8a[_0x372e8e(0x425)](_0x372e8e(0x151)+'h\x20'+Math['round'](_0x148271['pitch'+'Off']),_0x4f1f8a[_0x372e8e(0x727)]),Math[_0x372e8e(0x541)](_0x148271[_0x372e8e(0x982)+'f'])):''))),_0xac8559[_0x372e8e(0xaf5)](_0x1df71a);}if(_0x4f1f8a[_0x372e8e(0x6f6)](_0x1eca17,_0x4f1f8a[_0x372e8e(0x830)])){var _0x499cc3=[[_0x4f1f8a['PeYXF'],_0x372e8e(0x475)+'ON',_0x3be7fd?_0x3be7fd[_0x372e8e(0x40d)+'on']:'-'],[_0x4f1f8a['ObZHq'],_0x4f1f8a['QbRcY'],_0x3be7fd?_0x3be7fd['hooks'+_0x372e8e(0x34d)+'ed']+_0x4f1f8a['vUMsP']+_0x3be7fd[_0x372e8e(0x4a9)+'Regis'+_0x372e8e(0xa52)+'AtArm']:'-'],['Heap',_0x372e8e(0xabf)+'insta'+_0x372e8e(0x50b)+_0x372e8e(0x83f),_0x3be7fd&&_0x3be7fd['wasmM'+'emory']&&_0x3be7fd[_0x372e8e(0x868)+'emory'][_0x372e8e(0x509)+'red']?Math['round'](_0x3be7fd['wasmM'+_0x372e8e(0x938)]['bytes']/(0xbbce6+-0x1cc24f*-0x1+-0x187f35))+('\x20MB\x20@'+'\x20')+_0x3be7fd[_0x372e8e(0x868)+_0x372e8e(0x938)][_0x372e8e(0x700)]+'ms':'-'],[_0x4f1f8a[_0x372e8e(0x97a)],_0x4f1f8a[_0x372e8e(0x77a)],_0x3be7fd&&_0x3be7fd[_0x372e8e(0x3e1)]?_0x4f1f8a['NAOUj'](String,_0x3be7fd[_0x372e8e(0x3e1)]['playe'+_0x372e8e(0x21b)+'t']):'-'],[_0x4f1f8a[_0x372e8e(0x68b)],_0x4f1f8a['tapaA'],_0x3be7fd&&_0x3be7fd['esp']?_0x4f1f8a['keyZy'](String,_0x3be7fd[_0x372e8e(0x3e1)][_0x372e8e(0xb23)+'Count']):'-'],[_0x4f1f8a['eUgIo'],_0x4f1f8a[_0x372e8e(0x26a)],_0x3be7fd&&_0x3be7fd[_0x372e8e(0x3e1)]&&_0x3be7fd['esp'][_0x372e8e(0x412)+'a']?_0x4f1f8a[_0x372e8e(0x7f2)](_0x4f1f8a['DipRs'](_0x3be7fd['esp']['camer'+'a'],'\x20(')+_0x3be7fd[_0x372e8e(0x3e1)]['camer'+'aFrom'],')'):'-']];for(_0xc7c6d8=-0x9f5*0x1+-0x13d1+-0x25*-0xce;_0xc7c6d8<_0x499cc3[_0x372e8e(0x6c4)+'h'];_0xc7c6d8++){if('AWjxV'===_0x372e8e(0x591)){var _0x32bfc=_0x4f1f8a[_0x372e8e(0x4ae)](_0x3681ef,_0x499cc3[_0xc7c6d8][0x130a+-0x1ea2+0xb98]),_0x46eb08=_0x44a28a(_0x372e8e(0x4f6),'sk-va'+'l');_0x46eb08[_0x372e8e(0x41c)][_0x372e8e(0x243)+_0x372e8e(0x7ba)]='0',_0x46eb08[_0x372e8e(0x41c)]['flex']='1',_0x46eb08['style'][_0x372e8e(0x332)+_0x372e8e(0x954)]=_0x4f1f8a[_0x372e8e(0x1a7)],_0x46eb08['textC'+_0x372e8e(0xaac)+'t']=String(_0x499cc3[_0xc7c6d8][-0x1ba8+-0xd50+0x28fa]),_0x46eb08[_0x372e8e(0xa68)+'et']['k']=_0x499cc3[_0xc7c6d8][0xe7+0x1*-0x199d+0x18b7],_0x32bfc['appen'+_0x372e8e(0x31c)+'d'](_0x46eb08);var _0x1b4730=_0xac8559['lengt'+'h']?_0xac8559[_0xac8559[_0x372e8e(0x6c4)+'h']-(-0x1ff2+0xf*0x1d6+-0x1*-0x469)]:null;if(!_0x1b4730){if('dfhtR'!=='IlbNi')_0x1b4730=_0x41b23c('Sessi'+'on',![]),_0xac8559['push'](_0x1b4730);else return _0x4f1f8a['ZUsuq'](_0x45b368['getIt'+'em'](_0x59a99b),'1');}_0x1b4730[_0x372e8e(0x54b)][_0x372e8e(0x91c)+_0x372e8e(0x31c)+'d'](_0x32bfc),_0x1b4730[_0x372e8e(0x54b)][_0x372e8e(0x3eb)+_0x372e8e(0x759)]['sp']=_0x46eb08;}else{var _0x5e865d=_0x19d988();if(!_0x5e865d)return null;try{return new _0x18b3b2(_0x5e865d['buffe'+'r'],_0x5e865d[_0x372e8e(0x722)+_0x372e8e(0x43b)],_0x5e865d[_0x372e8e(0x8de)+_0x372e8e(0xafc)]);}catch(_0x626408){return null;}}}var _0xee4833=_0x41b23c(_0x372e8e(0x8d0)+'r',![]),_0x5cdc60=[[_0x4f1f8a['URDfo'],_0x372e8e(0x531)+_0x372e8e(0x2fb)+_0x372e8e(0x7f9)+_0x372e8e(0x63e),_0x3be7fd&&_0x3be7fd[_0x372e8e(0x7cf)]&&_0x3be7fd['local']['feet']?_0x3be7fd['local'][_0x372e8e(0x99f)][_0x372e8e(0x796)](function(_0x38aa6d){var _0x2db43b=_0x372e8e;if(_0x7e169e['PpcjR'](_0x7e169e['uUxkI'],_0x2db43b(0xb4c)))return Math['round'](_0x38aa6d*(0x17e4+0x63*-0x21+-0xabd))/(0x1af+0x79a+-0x8e5);else{var _0x5dbc0f=('4|3|5'+_0x2db43b(0x9ed)+_0x2db43b(0xa44))['split']('|'),_0x526057=0x1d4+0xcf9*-0x3+0xd3*0x2d;while(!![]){switch(_0x5dbc0f[_0x526057++]){case'0':_0x4e7ceb[_0x2db43b(0x9d9)+'e']();continue;case'1':try{_0x51baf3['execC'+_0x2db43b(0x426)+'d'](_0x7e169e['QvcUS']),_0x3ab46f();}catch(_0x4b7068){}continue;case'2':_0x4e7ceb[_0x2db43b(0x544)+'t']();continue;case'3':_0x4e7ceb['value']=_0x30c4d9;continue;case'4':var _0x4e7ceb=_0x1708ce[_0x2db43b(0x47e)+'eElem'+_0x2db43b(0x141)]('texta'+'rea');continue;case'5':if(!_0xabd409[_0x2db43b(0x54b)])return;continue;case'6':_0x521c01['body']['appen'+_0x2db43b(0x31c)+'d'](_0x4e7ceb);continue;}break;}}})['join']('\x20\x20'):'-'],[_0x4f1f8a[_0x372e8e(0xa8b)],_0x372e8e(0xade)+'8',_0x3be7fd&&_0x3be7fd[_0x372e8e(0x7cf)]&&_0x3be7fd[_0x372e8e(0x7cf)][_0x372e8e(0xb6b)]?_0x3be7fd['local'][_0x372e8e(0xb6b)][_0x372e8e(0x796)](function(_0x2aa962){var _0x598a78=_0x372e8e;return _0x7e169e[_0x598a78(0x547)](Math[_0x598a78(0x541)](_0x2aa962*(0x15d0+-0x89b*-0x3+-0xfbf*0x3)),-0x313+-0x5f3+0x96a);})[_0x372e8e(0x633)]('\x20\x20'):'-'],['Walk\x20'+'speed',_0x372e8e(0x7d9),_0x1cc650(_0x3be7fd,'FPSco'+'ntrol'+'ler',-0xa21*0x1+0x9e1*0x3+-0x1372)],[_0x4f1f8a[_0x372e8e(0x9ae)],_0x372e8e(0x357),_0x4f1f8a[_0x372e8e(0x8d3)](_0x1cc650,_0x3be7fd,_0x4f1f8a[_0x372e8e(0x2f2)],0x1*-0x412+0x24d8+-0x1043*0x2)],[_0x4f1f8a[_0x372e8e(0x2e5)],_0x4f1f8a[_0x372e8e(0x1dc)],_0x1cc650(_0x3be7fd,_0x372e8e(0x531)+_0x372e8e(0x2fb)+_0x372e8e(0x27d),-0x6*-0x638+0x1*0xce+-0x2502)],['Healt'+'h',_0x4f1f8a[_0x372e8e(0x4d0)],_0x1cc650(_0x3be7fd,_0x372e8e(0xb55)+_0x372e8e(0x3da)+'pt',-0x1*-0x19bd+0x1*-0x2f5+-0x1d6*0xc)]];for(_0xc7c6d8=0x22c7+-0x12*0x102+-0x10a3;_0xc7c6d8<_0x5cdc60[_0x372e8e(0x6c4)+'h'];_0xc7c6d8++){if(_0x372e8e(0x960)===_0x4f1f8a['seTak']){var _0x2c2ff3=_0x3681ef(_0x5cdc60[_0xc7c6d8][-0x8e5*-0x2+0x6d8+-0x18a2]),_0x138feb=_0x4f1f8a[_0x372e8e(0x1eb)](_0x44a28a,_0x372e8e(0x4f6),_0x372e8e(0x701)+'l');_0x138feb[_0x372e8e(0x41c)][_0x372e8e(0x243)+'dth']='0',_0x138feb[_0x372e8e(0x41c)]['flex']='1',_0x138feb[_0x372e8e(0x41c)][_0x372e8e(0x332)+'lign']=_0x4f1f8a['FzgLh'],_0x138feb['textC'+'onten'+'t']=String(_0x5cdc60[_0xc7c6d8][0x25cd+0xaf7+-0x30c2]),_0x138feb['datas'+'et']['k']=_0x5cdc60[_0xc7c6d8][-0x1372+-0x1495*-0x1+0x122*-0x1],_0x2c2ff3[_0x372e8e(0x91c)+_0x372e8e(0x31c)+'d'](_0x138feb),_0xee4833[_0x372e8e(0x54b)][_0x372e8e(0x91c)+'dChil'+'d'](_0x2c2ff3),_0xee4833['body'][_0x372e8e(0x3eb)+_0x372e8e(0x759)]['sp']=_0x138feb;}else _0x76a623[_0x4f1f8a['kgugx'](_0x47e5de,_0x372e8e(0x23f))+_0x4e3616[_0x26a6eb]['o'][_0x372e8e(0x71d)+'ing'](-0x1*-0x3d7+0x125b+0x2*-0xb11)]=_0x25debb[_0x525136]['v'];}_0xac8559[_0x372e8e(0xaf5)](_0xee4833);}if(_0x1eca17===_0x372e8e(0x564)){var _0x317967=_0x4f1f8a[_0x372e8e(0x948)](_0x41b23c,_0x4f1f8a[_0x372e8e(0x761)],![]),_0x3e8c62=_0x3be7fd&&_0x3be7fd[_0x372e8e(0x67e)+_0x372e8e(0xb19)]&&_0x3be7fd['warni'+_0x372e8e(0xb19)]['lengt'+'h']?_0x3be7fd['warni'+_0x372e8e(0xb19)]['join']('\x0a'):_0x372e8e(0x55b)+_0x372e8e(0x2f1)+'s';_0x317967['body'][_0x372e8e(0x91c)+'dChil'+'d'](_0x44a28a(_0x4f1f8a[_0x372e8e(0x725)],_0x4f1f8a[_0x372e8e(0x316)],_0x3e8c62)),_0xac8559[_0x372e8e(0xaf5)](_0x317967);var _0x28310e=_0x4f1f8a[_0x372e8e(0xa80)](_0x41b23c,_0x372e8e(0x895)+'t',![]),_0x3a5400=_0x44a28a(_0x372e8e(0x214)+'n',_0x4f1f8a['uhDvr'],'Copy\x20'+'JSON\x20'+'to\x20cl'+_0x372e8e(0x3df)+'rd');_0x3a5400['type']=_0x4f1f8a[_0x372e8e(0x1e1)],_0x3a5400['oncli'+'ck']=function(){var _0x5861cb=_0x372e8e,_0x25068d={'SoXHz':function(_0x1d5d42,_0x5a4f02){return _0x4f1f8a['feLNS'](_0x1d5d42,_0x5a4f02);},'wTUfo':_0x4f1f8a['xGQfp'],'MfKld':_0x4f1f8a[_0x5861cb(0x965)]};try{var _0x26adac=_0x4f1f8a['LqjKA'](_0x2b5402+'\x0a'+JSON['strin'+_0x5861cb(0x9d8)](_0x3be7fd,null,-0x8f3+0x2*-0xcad+-0x224e*-0x1),'\x0a')+_0x4e9631;if(navigator[_0x5861cb(0x794)+_0x5861cb(0x67d)]&&navigator[_0x5861cb(0x794)+'oard'][_0x5861cb(0x545)+'Text'])navigator['clipb'+'oard'][_0x5861cb(0x545)+_0x5861cb(0xad3)](_0x26adac)['then'](function(){var _0x4664e2=_0x5861cb;_0x3a5400[_0x4664e2(0x26b)+_0x4664e2(0xaac)+'t']=_0x4664e2(0x346)+'d';});else _0x3a5400['textC'+'onten'+'t']='Clipb'+_0x5861cb(0xa1a)+_0x5861cb(0x9a0)+_0x5861cb(0x7fa)+_0x5861cb(0x9db)+_0x5861cb(0xa7f)+_0x5861cb(0x50c)+_0x5861cb(0x53e)+'ad';}catch(_0x104994){if(_0x4f1f8a['ABgvA']('zaSac','zaSac'))_0x3a5400['textC'+'onten'+'t']='Copy\x20'+_0x5861cb(0x236)+'d';else{var _0x4becbd=_0x1463fb['Unity'+_0x5861cb(0x28e)+_0x5861cb(0x921)]&&_0x1eb53[_0x5861cb(0x198)+_0x5861cb(0x28e)+'dkit'][_0x5861cb(0x4d3)+'me'];if(_0x4becbd&&_0x25068d[_0x5861cb(0xb2c)](typeof _0x4becbd['resol'+'veGam'+'e'],_0x25068d['wTUfo'])){var _0x55a5e2=_0x4becbd[_0x5861cb(0x7c5)+'veGam'+'e']();if(_0x55a5e2)return _0x15ca67[_0x5861cb(0x776)+'e']=_0x5861cb(0x4d3)+_0x5861cb(0x8d4)+_0x5861cb(0x438)+'Game('+')',_0x55a5e2;}if(_0x4becbd&&_0x4becbd[_0x5861cb(0x3ca)])return _0x4819f0[_0x5861cb(0x776)+'e']=_0x25068d[_0x5861cb(0xa20)],_0x4becbd;}}},_0x28310e[_0x372e8e(0x54b)]['appen'+_0x372e8e(0x31c)+'d'](_0x4f1f8a['ALlaM'](_0x44a28a,_0x372e8e(0x93a),_0x4f1f8a['BnzCU'],_0x4f1f8a[_0x372e8e(0xa74)])),_0x28310e['body'][_0x372e8e(0x91c)+'dChil'+'d'](_0x3a5400),_0xac8559[_0x372e8e(0xaf5)](_0x28310e);}return _0xac8559;}function _0x5605a(){var _0x4de60d=_0x363400;if(_0x1b9370[_0x4de60d(0xaf7)])_0x148899(!![]);}function _0x5b78bb(){var _0x1da243=_0x363400,_0x594153={'wMTMC':function(_0x29cf63,_0x23a561){return _0x4f1f8a['gKtPH'](_0x29cf63,_0x23a561);},'Armnw':function(_0x3cf62a,_0x490e26,_0x4524cf,_0x5a9035){return _0x4f1f8a['ALlaM'](_0x3cf62a,_0x490e26,_0x4524cf,_0x5a9035);},'tUWZH':function(_0x1a5dfe,_0x5ba649,_0x4ddbd2,_0x28619e){return _0x1a5dfe(_0x5ba649,_0x4ddbd2,_0x28619e);},'ifGKX':function(_0x53d104,_0x4e09bc){var _0x400b01=_0x1a9a;return _0x4f1f8a[_0x400b01(0xa31)](_0x53d104,_0x4e09bc);},'DFNJU':function(_0x53d9e6,_0x2ec101,_0x5e7fa2){return _0x4f1f8a['qPySZ'](_0x53d9e6,_0x2ec101,_0x5e7fa2);},'hHttl':function(_0x2a4504,_0x5c3772){var _0x51b791=_0x1a9a;return _0x4f1f8a[_0x51b791(0x223)](_0x2a4504,_0x5c3772);},'FKpcy':_0x4f1f8a['ULCRv'],'YRQmE':_0x4f1f8a['XCPki'],'rIevj':function(_0xd17c03){return _0xd17c03();},'sUrbH':_0x4f1f8a['nZZEG']};if(_0x4f1f8a[_0x1da243(0xa71)]('KSqfl','KSqfl'))_0x46e064[_0x1da243(0x26b)+'onten'+'t']=_0x1da243(0x346)+'d';else{if(_0x1b9370['built'])return _0x1b9370[_0x1da243(0x4b9)];try{if(!document['body']||!document['body'][_0x1da243(0x91c)+'dChil'+'d'])return null;if(!document['getEl'+_0x1da243(0x6a5)+_0x1da243(0x203)](_0x4f1f8a[_0x1da243(0x85c)])){if(_0x1da243(0x30b)!==_0x4f1f8a[_0x1da243(0x46e)])return _0x2168ac['facto'+'r'];else{var _0xa0c133=document['creat'+_0x1da243(0x27a)+_0x1da243(0x141)](_0x1da243(0x41c));_0xa0c133['id']=_0x1da243(0x1cb)+_0x1da243(0x235)+_0x1da243(0x82f),_0xa0c133['textC'+'onten'+'t']=_0x571c12,(document[_0x1da243(0x935)]||document[_0x1da243(0x2c4)+'entEl'+_0x1da243(0x6a5)])['appen'+'dChil'+'d'](_0xa0c133);}}var _0x2a46a5=_0x4f1f8a['ENmSZ'](_0x44a28a,_0x1da243(0x93a),'mn-pa'+'nel');_0x2a46a5['id']='sakur'+_0x1da243(0x235)+_0x1da243(0x393)+'t';var _0x3b8f6c=_0x44a28a(_0x4f1f8a[_0x1da243(0x725)],'mn-si'+'de'),_0x39f627=_0x4f1f8a[_0x1da243(0x39e)](_0x44a28a,'div',_0x4f1f8a[_0x1da243(0x501)],_0x2f7556);_0x3b8f6c[_0x1da243(0x91c)+'dChil'+'d'](_0x39f627);var _0x23e321=_0x4f1f8a[_0x1da243(0x405)](_0x44a28a,_0x4f1f8a['Lsjao'],_0x4f1f8a['bTDgU']),_0x5a54f5=_0x4f1f8a[_0x1da243(0x171)](_0x44a28a,_0x1da243(0x93a),_0x1da243(0x472)+'p'),_0x5d03f0=_0x44a28a(_0x1da243(0x93a),_0x1da243(0x889)+_0x1da243(0x144)),_0x53f41d=_0x44a28a(_0x1da243(0x93a),_0x4f1f8a['RsxoV'],_0x1da243(0xa0e)+_0x1da243(0x37c)+_0x1da243(0xaf6)+'z'),_0x178ef1=_0x44a28a(_0x4f1f8a['Lsjao'],'mn-su'+'b',_0x1da243(0x47a)+_0x1da243(0x1b1));_0x5d03f0[_0x1da243(0x91c)+'dChil'+'d'](_0x53f41d),_0x5d03f0['appen'+_0x1da243(0x31c)+'d'](_0x178ef1);var _0x3c4c76=_0x4f1f8a[_0x1da243(0x6e2)](_0x44a28a,_0x1da243(0x93a),_0x4f1f8a[_0x1da243(0x9c8)],_0x4f1f8a[_0x1da243(0x7d3)]);_0x3c4c76['oncli'+'ck']=function(){_0x148899(![]);},_0x5a54f5[_0x1da243(0x91c)+_0x1da243(0x31c)+'d'](_0x5d03f0),_0x5a54f5['appen'+'dChil'+'d'](_0x3c4c76);var _0xade0d9=_0x4f1f8a[_0x1da243(0x2b4)](_0x44a28a,_0x1da243(0x93a),_0x4f1f8a[_0x1da243(0x5a6)]);_0x23e321[_0x1da243(0x91c)+_0x1da243(0x31c)+'d'](_0x5a54f5),_0x23e321[_0x1da243(0x91c)+_0x1da243(0x31c)+'d'](_0xade0d9),_0x2a46a5[_0x1da243(0x91c)+'dChil'+'d'](_0x3b8f6c),_0x2a46a5[_0x1da243(0x91c)+_0x1da243(0x31c)+'d'](_0x23e321),document[_0x1da243(0x54b)]['appen'+'dChil'+'d'](_0x2a46a5),_0x1b9370['root']=_0x2a46a5,_0x1b9370[_0x1da243(0x62a)]=_0xade0d9,_0x1b9370['head']=_0x53f41d,_0x1b9370['sub']=_0x178ef1;var _0x5e6d82={};for(var _0xc80d48=0x1c86+0xe84+-0x2b0a;_0xc80d48<_0x4f6c31['lengt'+'h'];_0xc80d48++){var _0x556373=_0x4f6c31[_0xc80d48],_0x257015=_0x4f1f8a[_0x1da243(0xa81)](_0x44a28a,_0x1da243(0x214)+'n',_0x1da243(0x99d)+'b',_0x4f1f8a[_0x1da243(0x888)]('<smal'+'l>',_0x556373[_0x1da243(0x4a4)])+(_0x1da243(0x879)+_0x1da243(0x515)));_0x257015['type']='butto'+'n',_0x257015[_0x1da243(0x9ec)]=_0x556373['label'],function(_0x58d0b1){var _0x4e179=_0x1da243;_0x257015[_0x4e179(0xa32)+'ck']=function(){_0x1468b8(_0x58d0b1);};}(_0x556373['id']),_0x5e6d82[_0x556373['id']]=_0x257015,_0x3b8f6c[_0x1da243(0x91c)+'dChil'+'d'](_0x257015);}_0x1b9370[_0x1da243(0x214)+'ns']=_0x5e6d82;var _0x2e9e84=_0x4f1f8a[_0x1da243(0x39e)](_0x44a28a,_0x4f1f8a['Lsjao'],null,_0x3a0af8);return _0x2e9e84['id']=_0x4f1f8a[_0x1da243(0x25f)],_0x2e9e84[_0x1da243(0x9ec)]=_0x4f1f8a[_0x1da243(0xa8d)],_0x2e9e84['onmou'+_0x1da243(0x9ba)+'er']=function(){var _0xe855ee=_0x1da243;_0x2e9e84['style'][_0xe855ee(0x2be)+'ty']='1';},_0x2e9e84['onmou'+_0x1da243(0x6b5)+'ve']=function(){var _0x10bada=_0x1da243;_0x2e9e84[_0x10bada(0x41c)]['opaci'+'ty']=_0x1b9370['open']?'1':'.5';},_0x2e9e84['oncli'+'ck']=function(_0xe7aff2){var _0x3daff7=_0x1da243;if(_0xe7aff2&&_0xe7aff2['stopP'+_0x3daff7(0x13c)+'ation'])_0xe7aff2[_0x3daff7(0xb36)+_0x3daff7(0x13c)+_0x3daff7(0x823)]();_0x594153[_0x3daff7(0xa70)](_0x148899,!_0x1b9370['open']);},document['body']['appen'+_0x1da243(0x31c)+'d'](_0x2e9e84),_0x1b9370['petal']=_0x2e9e84,_0x4f1f8a[_0x1da243(0x697)](setInterval,function(){var _0x4d10f3=_0x1da243;if('ReJKv'!==_0x594153['FKpcy']){var _0x262569=_0x201abc['FPSco'+_0x4d10f3(0x2fb)+'ler'];if(!_0x262569||!_0x262569[_0x4d10f3(0x808)])return null;var _0xedd6b6=_0x594153['Armnw'](_0x48d5c,_0x262569[_0x4d10f3(0x808)],-0x589*0x3+0x6*0x419+-0x517*0x1,-0x1fa1+0x5*-0x107+0x5*0x75b),_0x3c8e64=_0x594153['tUWZH'](_0x14a335,_0x262569['ptr'],-0xf3*-0x4+0xa3d*0x2+-0xf*0x172,-0x62*-0x25+-0x16e2+0x8bb);if(!_0xedd6b6)return null;return{'ptr':_0x262569['ptr'],'feet':_0xedd6b6,'eye':_0x3c8e64,'reach':_0x4a422c['sqrt'](_0xedd6b6[0x317+-0x3b*0x23+0x4fa]*_0xedd6b6[-0x16d5+-0xd22+0x23f7]+_0xedd6b6[0x5c1+-0x484*-0x4+0x1*-0x17cf]*_0xedd6b6[0x1*0x17f5+-0x1*-0x1ee3+-0x36d6]),'pitch':_0x38cd25(_0x594153[_0x4d10f3(0x969)](_0x262569[_0x4d10f3(0x808)],-0x1770+0x1fa2+0x33*-0x22),_0x4d10f3(0x584)),'yaw':_0x594153[_0x4d10f3(0x793)](_0x58e868,_0x594153['hHttl'](_0x262569['ptr'],0x45+-0x1094+0x11bf),'f32')};}else try{if(_0x4d10f3(0xad8)===_0x594153[_0x4d10f3(0x9e8)]){if(_0x1a3213[_0x355966]['hook']&&_0x462176[_0x35b7f0][_0x4d10f3(0x4f4)][_0x4d10f3(0x60a)+'ed'])_0x1fd4d6++;}else{if(!_0x1b9370['petal'])return;var _0x4f7053=_0x594153[_0x4d10f3(0x8e2)](_0x2f29b4);_0x1b9370[_0x4d10f3(0x37f)]['style'][_0x4d10f3(0x2be)+'ty']=_0x1b9370['open']?'1':_0x4f7053?'.8':'.28',_0x1b9370[_0x4d10f3(0x37f)]['title']=_0x4f7053?_0x4d10f3(0xa0e)+_0x4d10f3(0x37c)+'llWar'+'z\x20(In'+_0x4d10f3(0x2da):_0x594153[_0x4d10f3(0x9b0)];}}catch(_0x15943e){}},0x718*-0x3+-0x29*0x24+0x8*0x3b9),_0x1b9370[_0x1da243(0x6b3)]=!![],_0x1468b8(_0x1b9370[_0x1da243(0x1d6)]),_0x2a46a5;}catch(_0x3bedfc){if(_0x4f1f8a[_0x1da243(0x43f)]('popJr',_0x4f1f8a[_0x1da243(0x5c1)]))return console[_0x1da243(0x4a2)](_0x4f1f8a['kglVL'],_0x4f1f8a['TlgqZ'](_0x4f1f8a['UmzHD'],_0x58bb9b),_0x3bedfc),null;else _0x37cb7a['warn'](_0x1da243(0x231)+'kura]'+'\x20pane'+'l\x20upd'+'ate\x20f'+_0x1da243(0x537),_0x4f1f8a[_0x1da243(0x463)]+_0x24ecc4,_0xede5cc);}}}function _0x1468b8(_0x499d61){var _0x4640d5=_0x363400;_0x1b9370[_0x4640d5(0x1d6)]=_0x499d61,_0x1b9370['syncs']=[];if(!_0x1b9370[_0x4640d5(0x62a)])return;var _0x589510=null;for(var _0x176896=0x4ec+-0x199+-0x353;_0x4f1f8a[_0x4640d5(0xabc)](_0x176896,_0x4f6c31[_0x4640d5(0x6c4)+'h']);_0x176896++)if(_0x4f6c31[_0x176896]['id']===_0x499d61)_0x589510=_0x4f6c31[_0x176896];_0x1b9370['head']['textC'+_0x4640d5(0xaac)+'t']=_0x4f1f8a[_0x4640d5(0x5f9)]+(_0x589510&&_0x589510['label']||'?');for(var _0x56c6f9 in _0x1b9370[_0x4640d5(0x214)+'ns']){if(_0x1b9370[_0x4640d5(0x214)+'ns'][_0x56c6f9][_0x4640d5(0xa6f)+_0x4640d5(0xa3c)])_0x1b9370['butto'+'ns'][_0x56c6f9][_0x4640d5(0xa6f)+_0x4640d5(0x23c)]=_0x4f1f8a['AazrA'](_0x4640d5(0x99d)+'b',_0x4f1f8a[_0x4640d5(0x6c0)](_0x56c6f9,_0x499d61)?_0x4640d5(0x5a9)+'ve':'');}var _0x37e9ff=[];try{_0x37e9ff=_0x4f1f8a[_0x4640d5(0x7bd)](_0xf11313,_0x499d61);}catch(_0x8dfeee){_0x37e9ff=[];}while(_0x1b9370[_0x4640d5(0x62a)][_0x4640d5(0xa6a)+_0x4640d5(0x605)])_0x1b9370[_0x4640d5(0x62a)]['remov'+'eChil'+'d'](_0x1b9370[_0x4640d5(0x62a)][_0x4640d5(0xa6a)+'Child']);for(var _0x4c69e4=0x78e*0x1+-0x203*-0x7+0x15a3*-0x1;_0x4f1f8a['sqhcD'](_0x4c69e4,_0x37e9ff['lengt'+'h']);_0x4c69e4++)_0x1b9370['cols'][_0x4640d5(0x91c)+'dChil'+'d'](_0x37e9ff[_0x4c69e4]);}function _0x148899(_0x1d9282){var _0x2b003f=_0x363400;if(_0x4f1f8a['QIFtL'](_0x2b003f(0x6ef),_0x4f1f8a[_0x2b003f(0xb49)])){var _0x2138dd=_0x1c32b3['hookP'+'refix']({'typeName':_0x575d41[_0x2b003f(0x9cd)],'methodName':_0x2b003f(0x516)+'e','params':['i32',_0x2b003f(0x671)],'returnType':_0x590212},_0x31ec5b(_0x16c768[_0x2b003f(0x9cd)],_0x509421[_0x2b003f(0x5a0)],_0x3c1016['many']));_0x18620e[_0x2b003f(0xaf5)]({'type':_0x4d549b['type'],'hook':_0x2138dd,'keep':_0xa347af[_0x2b003f(0x5a0)]});}else{var _0x44e549=(_0x2b003f(0x5b5)+'|4|1|'+'5')[_0x2b003f(0xaed)]('|'),_0x1bfebb=0x25b9+-0x8fa*-0x2+-0x3*0x128f;while(!![]){switch(_0x44e549[_0x1bfebb++]){case'0':if(!_0x40f189)return;continue;case'1':if(_0x1b9370[_0x2b003f(0x37f)])_0x1b9370['petal']['style']['opaci'+'ty']=_0x1b9370['open']?'1':'.5';continue;case'2':var _0x40f189=_0x4f1f8a['FCXMW'](_0x5b78bb);continue;case'3':_0x1b9370[_0x2b003f(0xaf7)]=!!_0x1d9282;continue;case'4':_0x40f189[_0x2b003f(0xa6f)+_0x2b003f(0x23c)]=_0x2b003f(0x7f8)+_0x2b003f(0x97f)+(_0x1b9370['open']?'\x20show'+'n':'');continue;case'5':if(_0x1b9370['open']){_0x4f1f8a[_0x2b003f(0x7d7)](_0x1468b8,_0x1b9370[_0x2b003f(0x1d6)]);try{var _0x40b658=window[_0x2b003f(0x38a)+_0x2b003f(0x4ef)+'t']||-0x1f9d*0x1+-0x3*-0xc51+-0x236;if(_0x40b658<-0x4f6*-0x2+-0xf57+-0x1*-0x7d7)_0x47049e(![]);}catch(_0x4fb7d6){}}continue;}break;}}}function _0x4f97f5(){var _0x90a993=_0x363400;if(!_0x1b9370['open']||!_0x1b9370[_0x90a993(0x6b3)])return;try{if(_0x90a993(0x323)!=='Pdxcq'){var _0x178abb=_0x193aee(_0x90a993(0x531)+_0x90a993(0x2fb)+'ler',_0xc0bb5a[_0x2b7fef[_0x8ea650]]['ptr']);_0x178abb[_0x90a993(0xad2)]=_0x309032[_0x1e5e5a[_0x1d934a]][_0x90a993(0xad2)],_0x178abb['isLoc'+'al']=_0x5845dd[_0x10c750[_0x3c9305]][_0x90a993(0x808)]===_0x5009b3,_0x8272bc['contr'+_0x90a993(0x4aa)+'s'][_0x90a993(0xaf5)](_0x178abb);}else{for(var _0x481212=-0x22be+-0x5*-0x139+0x1ca1;_0x481212<_0x1b9370[_0x90a993(0x625)]['lengt'+'h'];_0x481212++){if(_0x4f1f8a[_0x90a993(0x5ee)]===_0x4f1f8a[_0x90a993(0xac1)]){var _0x504cc1=arguments[_0x412fe8];if(typeof _0x504cc1==='strin'+'g')_0x2ee708+=_0x504cc1;else{if(_0x504cc1&&_0x504cc1[_0x90a993(0x8a3)+'ge'])_0x5cf388+=_0x504cc1[_0x90a993(0x8a3)+'ge'];}}else try{_0x90a993(0x7ee)!==_0x4f1f8a['vZosq']?(_0x164dbf['push'](_0x90a993(0x345)+_0x90a993(0x8b6)+'jects'+_0x90a993(0x428)+_0x90a993(0x696)+'yet.'),_0x536a11[_0x90a993(0xaf5)](''),_0x2b377f['push'](_0x90a993(0x8fc)+_0x90a993(0x4e4)+'fire\x20'+_0x90a993(0x4de)+_0x90a993(0x378)+'e\x27s\x20o'+_0x90a993(0x7cb)+_0x90a993(0x528)+_0x90a993(0x392)+'thing'+'\x20capt'+'ured\x20'+_0x90a993(0x4f5)),_0x549c50[_0x90a993(0xaf5)](_0x90a993(0x2b2)+_0x90a993(0x7b8)+_0x90a993(0x744)+_0x90a993(0x1f4)+'r\x20the'+_0x90a993(0x372)+'ature'+'\x20did\x20'+_0x90a993(0x192)+_0x90a993(0x42c))):_0x1b9370['syncs'][_0x481212]();}catch(_0x17512d){}}var _0x1b767b=_0xa9ea0f;_0x1b9370[_0x90a993(0x9e7)][_0x90a993(0x26b)+_0x90a993(0xaac)+'t']=_0x1b767b?_0x4f1f8a[_0x90a993(0x514)](_0x4f1f8a['kGMLB'](_0x4f1f8a[_0x90a993(0x5db)](_0x4f1f8a['DDAgV'](_0x4f1f8a[_0x90a993(0x5b3)](_0x4f1f8a[_0x90a993(0x7a4)]('v',_0x1b767b[_0x90a993(0x40d)+'on'])+(_0x90a993(0xa5c)+'hooks'+'\x20'),_0x1b767b[_0x90a993(0x4a9)+_0x90a993(0x34d)+'ed']),'/')+_0x1b767b[_0x90a993(0x4a9)+'Total'],_0x4f1f8a['MvRLY']),_0x1b767b['esp']&&_0x1b767b[_0x90a993(0x3e1)][_0x90a993(0x6df)+_0x90a993(0x21b)+'t']||0xd*0x1d1+0x23d3+-0x13d*0x30),_0x4f1f8a['dVkHB'])+(_0x1b767b['wasmM'+_0x90a993(0x938)]&&_0x1b767b[_0x90a993(0x868)+'emory']['captu'+'red']?Math[_0x90a993(0x541)](_0x1b767b['wasmM'+'emory'][_0x90a993(0x59f)]/(0x894d*-0x8+-0x544e4*-0x1+0xf0584))+'MB':'-'):_0x90a993(0x7b9)+'ng\x20fo'+_0x90a993(0x9a1)+_0x90a993(0x7cd)+_0x90a993(0x3b7)+'ort…';var _0x2102d4=_0x1b9370['cols'][_0x90a993(0x209)+'Selec'+'torAl'+'l']?_0x1b9370['cols']['query'+'Selec'+_0x90a993(0x97d)+'l'](_0x90a993(0x284)+_0x90a993(0xa90)):[];for(var _0x18653e=0x10a0+-0x4cd*0x7+-0xcf*-0x15;_0x4f1f8a[_0x90a993(0x458)](_0x18653e,_0x2102d4['lengt'+'h']);_0x18653e++){var _0x1d0dd8=_0x2102d4[_0x18653e]['datas'+'et']['k'],_0x5e72ad='';if(_0x4f1f8a[_0x90a993(0x1a3)](_0x1d0dd8,'VERSI'+'ON'))_0x5e72ad=_0x1b767b?_0x1b767b[_0x90a993(0x40d)+'on']:'-';else{if(_0x1d0dd8===_0x4f1f8a[_0x90a993(0x93c)])_0x5e72ad=_0x1b767b?_0x4f1f8a[_0x90a993(0xabd)](_0x1b767b[_0x90a993(0x4a9)+_0x90a993(0x34d)+'ed'],_0x4f1f8a['vUMsP'])+_0x1b767b[_0x90a993(0x4a9)+_0x90a993(0x81f)+_0x90a993(0xa52)+'AtArm']:'-';else{if(_0x4f1f8a[_0x90a993(0xa40)](_0x1d0dd8,_0x4f1f8a['uMbyx']))_0x5e72ad=_0x1b767b&&_0x1b767b['wasmM'+'emory']&&_0x1b767b['wasmM'+'emory'][_0x90a993(0x509)+_0x90a993(0x802)]?_0x4f1f8a['SDZqg'](Math['round'](_0x4f1f8a['oipls'](_0x1b767b['wasmM'+_0x90a993(0x938)][_0x90a993(0x59f)],0x15ce85+-0x6a652+0xd7cd)),'\x20MB\x20@'+'\x20')+_0x1b767b[_0x90a993(0x868)+_0x90a993(0x938)]['atMs']+'ms':'-';else{if(_0x1d0dd8==='Photo'+'nNetw'+_0x90a993(0x61e)+'nc')_0x5e72ad=_0x1b767b&&_0x1b767b[_0x90a993(0x3e1)]?String(_0x1b767b['esp']['playe'+_0x90a993(0x21b)+'t']):'-';else{if(_0x4f1f8a[_0x90a993(0x62c)](_0x1d0dd8,'every'+_0x90a993(0x7bf)+_0x90a993(0x3db)+'u'))_0x5e72ad=_0x1b767b&&_0x1b767b[_0x90a993(0x3e1)]?String(_0x1b767b['esp']['enemy'+_0x90a993(0x2ce)]):'-';else{if(_0x4f1f8a[_0x90a993(0x707)](_0x1d0dd8,_0x90a993(0x1fb)+'he\x20li'+_0x90a993(0x562)+_0x90a993(0xa33)))_0x5e72ad=_0x1b767b&&_0x1b767b['esp']&&_0x1b767b['esp'][_0x90a993(0x412)+'a']?_0x4f1f8a['noOGL'](_0x1b767b['esp'][_0x90a993(0x412)+'a'],'\x20(')+_0x1b767b['esp'][_0x90a993(0x412)+_0x90a993(0x485)]+')':'-';else{if(_0x4f1f8a[_0x90a993(0x85d)](_0x1d0dd8,_0x90a993(0x531)+_0x90a993(0x2fb)+_0x90a993(0x7f9)+_0x90a993(0x63e)))_0x5e72ad=_0x1b767b&&_0x1b767b[_0x90a993(0x7cf)]&&_0x1b767b[_0x90a993(0x7cf)][_0x90a993(0x99f)]?_0x1b767b[_0x90a993(0x7cf)][_0x90a993(0x99f)][_0x90a993(0x796)](function(_0x3fd639){var _0x131fb0=_0x90a993;return Math[_0x131fb0(0x541)](_0x3fd639*(0x9c+0x3f1*-0x1+0x3b9*0x1))/(0x26f*-0x2+0xefa+-0x8*0x137);})[_0x90a993(0x633)]('\x20\x20'):'-';else{if(_0x1d0dd8===_0x4f1f8a[_0x90a993(0x1f8)])_0x5e72ad=_0x1b767b&&_0x1b767b[_0x90a993(0x7cf)]&&_0x1b767b[_0x90a993(0x7cf)][_0x90a993(0xb6b)]?_0x1b767b['local'][_0x90a993(0xb6b)]['map'](function(_0x1cdbe2){var _0x13f0b8=_0x90a993;return Math['round'](_0x4f1f8a[_0x13f0b8(0x510)](_0x1cdbe2,0x12b8+-0x1f*-0x110+-0x3344))/(0x25*-0xc8+-0x19e3+-0x33f*-0x11);})['join']('\x20\x20'):'-';else{var _0x2b1af3=_0x1d0dd8[_0x90a993(0xaed)]('+');_0x5e72ad=_0x4f1f8a[_0x90a993(0x490)](_0x1cc650,_0x1b767b,_0x4f1f8a[_0x90a993(0x601)](_0x2b1af3[-0x41*0x6d+-0x556*0x7+0x4107]['index'+'Of'](_0x4f1f8a[_0x90a993(0x449)]),-0x10*0x234+0xd65+-0xf*-0x175)?_0x4f1f8a['DvkTv']:_0x4f1f8a['qgiFh'],parseInt(_0x2b1af3[-0x905*0x1+-0x73f+-0x77*-0x23],-0xa5c+0x13f+0x92d));}}}}}}}}if(_0x5e72ad!==_0x2102d4[_0x18653e]['textC'+'onten'+'t'])_0x2102d4[_0x18653e]['textC'+_0x90a993(0xaac)+'t']=_0x5e72ad;}}}catch(_0x188d6c){}}function _0x2bd268(){var _0x3110cc=_0x363400,_0x230f04=(_0x3110cc(0xb39)+_0x3110cc(0x451)+'5')['split']('|'),_0x2a391a=-0xb*-0x372+0x1*0x4ec+-0x15*0x20a;while(!![]){switch(_0x230f04[_0x2a391a++]){case'0':if(!_0x31b375)return null;continue;case'1':if(!_0x279c83||!_0x279c83[_0x3110cc(0x808)])return null;continue;case'2':var _0x31b375=_0x4f1f8a[_0x3110cc(0x39e)](_0x47105b,_0x279c83[_0x3110cc(0x808)],0xd29+0x5*0x5c1+-0x13*0x20e,-0xd66+-0x9*-0x2e7+-0xcb6);continue;case'3':var _0x279c83=_0x45a1b6[_0x3110cc(0x531)+_0x3110cc(0x2fb)+_0x3110cc(0x27d)];continue;case'4':var _0x4247ac=_0x4f1f8a[_0x3110cc(0x6e1)](_0x47105b,_0x279c83['ptr'],0x9d*-0x3+-0x2685+-0x4*-0xabd,0x659+-0x1*0x16f6+0x10a0);continue;case'5':return{'ptr':_0x279c83[_0x3110cc(0x808)],'feet':_0x31b375,'eye':_0x4247ac,'reach':Math['sqrt'](_0x4f1f8a['pvWOP'](_0x31b375[0x1bdc+0x771+-0x234d]*_0x31b375[-0x2*0x67+-0x1367+0x2e3*0x7],_0x31b375[-0x30e*-0x1+0x4b2+-0x2*0x3df]*_0x31b375[-0x1aaf+0xaa1+0x1010])),'pitch':_0x4e292c(_0x279c83['ptr']+(0x11de+-0x26da+0x1668),_0x3110cc(0x584)),'yaw':_0x4f1f8a[_0x3110cc(0x1eb)](_0x4e292c,_0x4f1f8a['yDawo'](_0x279c83[_0x3110cc(0x808)],-0x35*0x76+0x1*0x138b+0x653*0x1),_0x3110cc(0x584))};}break;}}function _0xba967d(){var _0x519c9e=_0x363400,_0x477812={'CEWWJ':_0x519c9e(0x72e)+_0x519c9e(0x98b),'XDmCK':function(_0x260240,_0x3f2e98,_0x17b40f){return _0x260240(_0x3f2e98,_0x17b40f);},'GVxYf':'repor'+'t','usBsU':'%c[sa'+_0x519c9e(0x8dd)+_0x519c9e(0x49c)+_0x519c9e(0x4bf)+'\x20repo'+'rt','QaAlv':function(_0xa41cce,_0x5e810d){return _0xa41cce+_0x5e810d;},'BlvWi':_0x519c9e(0x6a0)+_0x519c9e(0xac6)+'ht:70'+'0'},_0xd816b8=_0x4f1f8a[_0x519c9e(0x50e)](_0x2bd268),_0x143c1d=[],_0x14fbcb=_0x4931ea[_0x519c9e(0x2c3)+'nNetw'+_0x519c9e(0x61e)+'nc']||{},_0x3040c6=Object['keys'](_0x14fbcb);for(var _0x56cbc3=-0x1174+0x117d+-0x3*0x3;_0x4f1f8a[_0x519c9e(0xb4b)](_0x56cbc3,_0x3040c6[_0x519c9e(0x6c4)+'h'])&&_0x56cbc3<0x5*0x23b+-0xc14+0x10d;_0x56cbc3++){if(_0x4f1f8a[_0x519c9e(0x6d1)]!==_0x4f1f8a['ANThE']){var _0x36c940=_0x477812[_0x519c9e(0x886)][_0x519c9e(0xaed)]('|'),_0xbde45b=0x1c2b*0x1+0x1552+0x135*-0x29;while(!![]){switch(_0x36c940[_0xbde45b++]){case'0':try{_0x5b4e7e(_0x552b53);}catch(_0x273bed){}continue;case'1':_0x51d3ce['log'](_0x2d6125+'\x0a'+_0x4af6f1[_0x519c9e(0x8ed)+'gify'](_0x392b98,null,0xb97*-0x1+-0x9b1+0x1*0x1549)+'\x0a'+_0x2f529d);continue;case'2':_0x477812[_0x519c9e(0xa3a)](_0x40ed66,_0x477812[_0x519c9e(0x328)],{'report':_0x1c5397});continue;case'3':_0x9d468e['log'](_0x477812['usBsU'],_0x477812[_0x519c9e(0x4ca)](_0x519c9e(0x390)+':'+_0x4ed273,_0x477812[_0x519c9e(0x22f)]),_0x4724db);continue;case'4':_0x20e846=_0x3719e7;continue;}break;}}else{var _0x41c6f7=_0x14fbcb[_0x3040c6[_0x56cbc3]],_0x50eb59=_0x47105b(_0x41c6f7['ptr'],-0xa7*-0x35+0x467+-0x26c6,-0x4*0x83f+-0x1*0xe2f+0x2f2e);if(!_0x50eb59||_0x4f1f8a[_0x519c9e(0x77f)](_0x50eb59[-0x1c1*0x4+-0x1*0x160+0x864],0x3*0x7d5+0x326*-0x9+0x4d7)&&_0x50eb59[0x3*-0xaab+-0xd9+0x20db]===0x6ea+-0xbe4+0x4fa&&_0x4f1f8a[_0x519c9e(0x410)](_0x50eb59[0x27*0x65+0x3*-0x2c3+0x1*-0x718],0xa6*-0x17+-0xad*-0x17+0xa1*-0x1))continue;var _0x81085={'ptr':_0x41c6f7['ptr'],'x':_0x50eb59[0xd1*-0x2+-0x15d9+-0x1*-0x177b],'y':_0x50eb59[0x41b*-0x8+0x26eb+-0x612],'z':_0x50eb59[-0x1*0x907+0x2b*0x2+0x8b3],'team':_0x4f1f8a[_0x519c9e(0xa75)](_0x4e292c,_0x41c6f7['ptr']+(-0x13a5*0x1+-0xebf*0x1+-0xd*-0x2ac),_0x519c9e(0x671)),'localFlag':_0x4e292c(_0x41c6f7[_0x519c9e(0x808)]+(-0x1*-0xf93+-0x1*-0x1ba1+-0x2ab8),_0x4f1f8a['sIarN'])};if(_0xd816b8){var _0x1cdba2=_0x50eb59[-0x1dc6+0x33+0x43*0x71]-_0xd816b8[_0x519c9e(0x99f)][0x1*0x22e1+0x211f+-0x4400],_0xc338e1=_0x50eb59[0xc5*0x2e+-0x731+-0x1c33]-_0xd816b8[_0x519c9e(0x99f)][-0x1b18+0xbf*-0x26+-0x5b*-0x9c];_0x81085['d']=Math[_0x519c9e(0xb58)](_0x4f1f8a[_0x519c9e(0x161)](_0x1cdba2,_0x1cdba2)+_0xc338e1*_0xc338e1),_0x81085['beari'+'ng']=_0x4f1f8a[_0x519c9e(0xa11)](Math['atan2'](_0x1cdba2,_0xc338e1)*(-0xe8a+-0x26f0+-0x13*-0x2da),Math['PI']);}_0x143c1d[_0x519c9e(0xaf5)](_0x81085);}}return{'me':_0xd816b8,'list':_0x143c1d};}var _0x587b25=null;function _0x2cad43(){var _0x5879a3=_0x363400;if(_0x4f1f8a[_0x5879a3(0x249)](_0x5879a3(0xa25),'lbItH')){if(_0x587b25)return _0x587b25;try{var _0x1dd58d=_0x4f1f8a[_0x5879a3(0x24d)][_0x5879a3(0xaed)]('|'),_0x5f0e43=-0x1*0x885+0x4ea+-0x47*-0xd;while(!![]){switch(_0x1dd58d[_0x5f0e43++]){case'0':_0x5761fb['inner'+'HTML']=_0x4f1f8a[_0x5879a3(0x87b)](_0x4f1f8a[_0x5879a3(0x2fe)],_0x4f1f8a[_0x5879a3(0x4a6)]);continue;case'1':_0x587b25={'el':_0x5761fb,'cv':_0x5761fb[_0x5879a3(0x209)+_0x5879a3(0x674)+_0x5879a3(0x3a2)](_0x4f1f8a[_0x5879a3(0x5e0)]),'lg':_0x5761fb[_0x5879a3(0x209)+'Selec'+_0x5879a3(0x3a2)](_0x5879a3(0xa2d)+_0x5879a3(0x1c8)+_0x5879a3(0x7e3))};continue;case'2':var _0xe771c3={'cv':{'getContext':function(){return null;}},'el':_0x5761fb};continue;case'3':return _0x587b25;case'4':_0x5761fb['id']=_0x4f1f8a[_0x5879a3(0x320)];continue;case'5':document[_0x5879a3(0x54b)]['appen'+_0x5879a3(0x31c)+'d'](_0x5761fb);continue;case'6':if(!document[_0x5879a3(0x54b)]||!document[_0x5879a3(0x54b)]['appen'+_0x5879a3(0x31c)+'d'])return null;continue;case'7':if(!_0x587b25['cv']||!_0x587b25['cv']['getCo'+_0x5879a3(0xa0c)])_0x587b25=_0xe771c3;continue;case'8':var _0x5761fb=document[_0x5879a3(0x47e)+_0x5879a3(0x27a)+_0x5879a3(0x141)](_0x5879a3(0x93a));continue;case'9':_0x5761fb[_0x5879a3(0x41c)][_0x5879a3(0xacf)+'xt']=_0x4f1f8a[_0x5879a3(0x379)](_0x4f1f8a[_0x5879a3(0x502)]('posit'+'ion:f'+_0x5879a3(0x64d)+'right'+':12px'+';top:'+_0x5879a3(0x8a4)+_0x5879a3(0x757)+'ex:21'+_0x5879a3(0x8cf)+_0x5879a3(0xa60)+_0x5879a3(0x477)+_0x5879a3(0x18b)+'nts:n'+'one;','backg'+_0x5879a3(0x541)+_0x5879a3(0xa5f)+_0x5879a3(0x2bc)+_0x5879a3(0x706)+'.72);'+_0x5879a3(0x4d1)+_0x5879a3(0x619)+_0x5879a3(0xa24)+_0x5879a3(0xa18)+'a(255'+_0x5879a3(0x3d3)+_0x5879a3(0x33f)+'4);bo'+_0x5879a3(0x21d)+_0x5879a3(0x596)+_0x5879a3(0x8ab)+'x;'),_0x5879a3(0xa2c)+'ng:4p'+_0x5879a3(0x595)+'t:10p'+_0x5879a3(0x3b1)+_0x5879a3(0x212)+'onosp'+'ace,C'+_0x5879a3(0x6ee)+_0x5879a3(0xa6b)+'nospa'+'ce;co'+'lor:#'+_0x5879a3(0xa1c)+'9;')+(_0x5879a3(0x358)+_0x5879a3(0x544)+'t:non'+'e;-we'+'bkit-'+_0x5879a3(0x358)+_0x5879a3(0x544)+_0x5879a3(0x611)+'e;');continue;}break;}}catch(_0x1bdc18){return null;}}else{var _0x592637=_0x33e3fd();if(_0x592637&&_0x592637['el'])_0x592637['el'][_0x5879a3(0x41c)]['displ'+'ay']=_0xdea5ae['on']?'':_0x4f1f8a[_0x5879a3(0x6c9)];var _0x553641=_0x315a8f;if(_0x553641&&_0x553641['cv'])_0x553641['cv'][_0x5879a3(0x41c)]['displ'+'ay']=_0x32a03f['on']&&_0x1f26d0[_0x5879a3(0x795)]?'':_0x4f1f8a[_0x5879a3(0x6c9)];}}var _0x38e415=null;function _0x27c758(){var _0x41b38b=_0x363400,_0x11961f={'oJRso':function(_0x4b7d2,_0xb18b27){return _0x4b7d2+_0xb18b27;},'tkdoC':function(_0x1b9339,_0x3ac74a){return _0x4f1f8a['tHtZM'](_0x1b9339,_0x3ac74a);},'LWkPz':function(_0x212e2b,_0x26ce3a){return _0x212e2b/_0x26ce3a;},'SVXIk':function(_0x582804,_0x21a891){return _0x4f1f8a['QHoIl'](_0x582804,_0x21a891);},'fGjso':function(_0xa11134,_0x2a7e6a){return _0xa11134===_0x2a7e6a;},'ajxTG':function(_0x599650,_0x59867f){var _0x4bb365=_0x1a9a;return _0x4f1f8a[_0x4bb365(0x7b7)](_0x599650,_0x59867f);},'cPegY':function(_0x3a0d15){return _0x3a0d15();},'UPBPS':_0x41b38b(0x456)+_0x41b38b(0x21f),'hzgGe':_0x4f1f8a['HgFTW'],'swVfO':'trans'+'paren'+'t','WWmmA':_0x41b38b(0x2cb)+'1b','zxHNR':_0x41b38b(0x252)+'f5'};if(_0x38e415)return _0x38e415;try{if(_0x4f1f8a['JCCnJ'](_0x41b38b(0x61b),_0x4f1f8a[_0x41b38b(0x817)])){if(!document[_0x41b38b(0x54b)]||!document['body'][_0x41b38b(0x91c)+_0x41b38b(0x31c)+'d'])return null;var _0x4100da=document[_0x41b38b(0x47e)+_0x41b38b(0x27a)+'ent'](_0x4f1f8a[_0x41b38b(0xb3f)]);return _0x4100da['id']=_0x41b38b(0x1cb)+'a-box'+'es',_0x4100da['style'][_0x41b38b(0xacf)+'xt']=_0x41b38b(0x49a)+'ion:f'+'ixed;'+_0x41b38b(0x9c2)+'0;top'+_0x41b38b(0x69b)+_0x41b38b(0x79a)+':2147'+'48364'+_0x41b38b(0x52a)+_0x41b38b(0x9c7)+_0x41b38b(0x623)+_0x41b38b(0x834)+'e;',document['body'][_0x41b38b(0x91c)+_0x41b38b(0x31c)+'d'](_0x4100da),_0x38e415={'cv':_0x4100da},_0x38e415;}else _0x3828a3=_0x11961f[_0x41b38b(0xb64)](_0x174e87,_0x11961f['tkdoC'](_0x51374b,_0xb16f86)*(_0x24fe24-(-0x22b+-0x116*0x22+0x271d))),_0x5413a4=_0x11961f[_0x41b38b(0xb64)](_0x3015d4,_0x11961f[_0x41b38b(0xa03)](_0x39c62e,_0x4b7243)*(_0x3e5c6c-(0xca+-0x5*0x599+0x1b39)));}catch(_0x1357a2){if(_0x41b38b(0x862)===_0x4f1f8a[_0x41b38b(0x1af)]){var _0x20e9eb=_0x48bcee['on'];_0x253a7a['on']=!!_0x5a8334;_0x14d5e2['on']&&!_0x20e9eb&&(_0x11961f[_0x41b38b(0x8f2)](_0x4e532a,_0x149c62)||_0x11961f[_0x41b38b(0x2c8)](_0x1c1ad1,null)||_0x43fb01(_0x52c54e)===-0x6*-0x4b2+-0xfea+-0xc41)&&(_0xf0b3d4=_0x417a03);_0x171026[_0x41b38b(0x890)+'r']=_0x32d5cb['min'](_0x4c4cb7[_0x41b38b(0xa63)],_0x37b50c[_0x41b38b(0xa63)](_0x3806ae['min'],_0x11961f['ajxTG'](_0x515bb9,_0x2e397b)||0x1da8+-0xadf+-0x12c8));if(!_0xf1c253['on'])_0x28bbed={};var _0x24f294=_0x11961f['cPegY'](_0x37eb95);if(_0x24f294){_0x24f294['sp']&&(_0x24f294['sp'][_0x41b38b(0x26b)+_0x41b38b(0xaac)+'t']=_0x40ba19['on']?_0x11961f[_0x41b38b(0x5e5)]:_0x11961f['hzgGe'],_0x24f294['sp']['style'][_0x41b38b(0x79b)+'round']=_0x5ae8a6['on']?_0x2ce0e5:_0x11961f[_0x41b38b(0x53c)],_0x24f294['sp']['style'][_0x41b38b(0x390)]=_0x2cc5c6['on']?_0x11961f[_0x41b38b(0x170)]:_0x11961f['zxHNR']);if(_0x24f294['fx'])_0x24f294['fx'][_0x41b38b(0x520)]=_0x402614(_0x5b8a25[_0x41b38b(0x890)+'r']);if(_0x24f294['fv'])_0x24f294['fv'][_0x41b38b(0x26b)+_0x41b38b(0xaac)+'t']=_0x100c70['facto'+'r'][_0x41b38b(0x35b)+'ed'](0x2002+0x1ea7+0x3ea8*-0x1)+'x';}}else return null;}}function _0xe79494(_0x3d9881){var _0x17f19d=_0x363400,_0x5b869b={'FAExI':function(_0x5e61f7,_0x3ebf67){return _0x5e61f7===_0x3ebf67;},'cHqQJ':function(_0xe44837,_0x38dfa9,_0x5438f9,_0x2099bf){return _0xe44837(_0x38dfa9,_0x5438f9,_0x2099bf);},'gPfry':function(_0x272896,_0x379fa0){return _0x272896+_0x379fa0;},'ALxhw':'UWMK\x20'+_0x17f19d(0x7c5)+_0x17f19d(0x15b)};try{var _0x22d2d5=Math['max'](-0x22*-0x67+0x1*-0x124a+0x1*0x49d,window[_0x17f19d(0x38a)+_0x17f19d(0x3e5)]||document[_0x17f19d(0x2c4)+_0x17f19d(0x9aa)+_0x17f19d(0x6a5)]['clien'+'tWidt'+'h']||0x338*0xc+-0x56e*-0x3+-0x36ea),_0x31cbc9=Math[_0x17f19d(0xa63)](0x3*-0x625+0x101*-0xa+0x1c7a,window[_0x17f19d(0x38a)+'Heigh'+'t']||document[_0x17f19d(0x2c4)+_0x17f19d(0x9aa)+_0x17f19d(0x6a5)]['clien'+_0x17f19d(0x88e)+'ht']||-0x20e0+-0x185f*0x1+0x3*0x1315);if(_0x3d9881['cv']['width']!==_0x22d2d5||_0x3d9881['cv']['heigh'+'t']!==_0x31cbc9){if(_0x4f1f8a[_0x17f19d(0x675)](_0x4f1f8a[_0x17f19d(0x985)],_0x17f19d(0x993))){var _0x1dea66=_0x5b869b[_0x17f19d(0x75a)](_0x311c2a,'v2')?-0x14c+-0x1b48+0x1c96:_0x6b2b1==='v3'?-0x1c38+-0x1ddd+0x3a18:0x998+0x11fc+-0x6e4*0x4,_0x425bcc=_0x5b869b['cHqQJ'](_0x4a3ff9,_0x4f851c[_0x17f19d(0x808)],_0x776843,_0x1dea66);_0x425bcc&&(_0xc4aed2[_0x17f19d(0xa4a)]=_0x425bcc,_0x2d4d89['v']=_0x425bcc[0xf41+0x250+-0x1191]);}else _0x3d9881['cv']['width']=_0x22d2d5,_0x3d9881['cv']['heigh'+'t']=_0x31cbc9;}return{'w':_0x22d2d5,'h':_0x31cbc9};}catch(_0x297300){if(_0x4f1f8a['YwoxJ']('uBiYg',_0x4f1f8a[_0x17f19d(0xb67)]))return{'w':0x0,'h':0x0};else _0x10df49[_0x17f19d(0x67e)+'ngs'][_0x17f19d(0xaf5)](_0x5b869b[_0x17f19d(0x5d5)](_0x5b869b[_0x17f19d(0x8a1)]+_0x1ed08e[_0x17f19d(0x4a9)+'Resol'+_0x17f19d(0xa12)]+'\x20of\x20'+_0x24f338['hooks'+_0x17f19d(0x3c0)],_0x17f19d(0x7d8)+_0x17f19d(0x91a)+'o\x20a\x20t'+_0x17f19d(0x4ad)+_0x17f19d(0x79a)+_0x17f19d(0xa8f)+_0x17f19d(0x60a)+_0x17f19d(0xb31)+_0x17f19d(0xa92)+_0x17f19d(0x65b)+'gnatu'+_0x17f19d(0x4fa))+(_0x17f19d(0x40b)+',\x20Met'+'hodIn'+'fo*)\x20'+'->\x20vo'+'id\x20do'+_0x17f19d(0x350)+_0x17f19d(0x558)+'ch\x20th'+'is\x20bu'+_0x17f19d(0xae1)));}}function _0x3e8a86(_0x159cc8){var _0x9e8155=_0x363400;if(_0x4f1f8a[_0x9e8155(0x601)](_0x4f1f8a['lyaiN'],'GLEum'))return _0x548b5c&&_0x22157d[_0x9e8155(0x9a9)+'r']?_0x2f8c0c[_0x9e8155(0x9a9)+'r'][_0x9e8155(0x8de)+'ength']:0x12*-0x1dc+-0xa6d*0x1+0x2be5;else{var _0x3ef6e2=_0x38e415;if(!_0x3ef6e2)return;var _0x3822f4=_0x3ef6e2['cv'][_0x9e8155(0x2ef)+'ntext']&&_0x3ef6e2['cv'][_0x9e8155(0x2ef)+_0x9e8155(0xa0c)]('2d');if(!_0x3822f4)return;var _0x1664e9=_0x4f1f8a['pfOxt'](_0xe79494,_0x3ef6e2);_0x3822f4['clear'+_0x9e8155(0x5e4)](-0x1d76+0x3c2+0x19b4,-0x70c*-0x3+-0x137d+-0x1a7*0x1,_0x1664e9['w'],_0x1664e9['h']);if(!_0x28cfee['boxes']||!_0x159cc8||!_0x159cc8['me'])return;var _0xc00e7d=_0x159cc8['me'],_0x5bdca6=null,_0x5d5f1e=_0x4931ea[_0x9e8155(0x2c3)+_0x9e8155(0xac7)+'orkSy'+'nc']||{},_0x2e59b8=Object[_0x9e8155(0x33c)](_0x5d5f1e);for(var _0x5c8aeb=-0xf9*-0x1+0x18f3+-0x19ec;_0x4f1f8a[_0x9e8155(0x635)](_0x5c8aeb,_0x2e59b8['lengt'+'h']);_0x5c8aeb++){var _0x12abfc=_0x4f1f8a['wXHNb'](_0x47105b,_0x5d5f1e[_0x2e59b8[_0x5c8aeb]]['ptr'],0xf20+-0xfd3*0x1+0xe7,0x2051+0x1f75+-0x3*0x1541);if(_0x12abfc&&_0x12abfc[-0x182a+-0x16b*0xa+-0x332*-0xc]===-0x51d+-0x1*-0x1fc6+-0x1aa9&&_0x12abfc[-0x7e4+0xdfa+-0x9*0xad]===-0x1*-0x2318+-0x2f*0x33+-0x19bb&&_0x12abfc[0x1b7d+0xfa7*0x2+-0x95*0x65]===0xe0d+0x6dc*-0x2+0x11*-0x5){_0x5bdca6=_0x4f1f8a[_0x9e8155(0x155)](_0x4e292c,_0x4f1f8a[_0x9e8155(0x7b1)](_0x5d5f1e[_0x2e59b8[_0x5c8aeb]]['ptr'],0x1*0x11b6+0x82*-0x9+-0xccc),_0x4f1f8a[_0x9e8155(0x946)]);break;}}for(var _0x5207b4=-0x8d*-0x37+-0x122b+-0xc20;_0x5207b4<_0x159cc8[_0x9e8155(0x2a0)]['lengt'+'h'];_0x5207b4++){if(_0x9e8155(0xaa9)!==_0x4f1f8a['viqzB']){var _0x5a5506=_0x159cc8['list'][_0x5207b4],_0x3f24ee=_0x5bdca6!==null&&_0x5a5506[_0x9e8155(0xa55)]===_0x5bdca6,_0x2a1041=_0x431ea7(_0xc00e7d[_0x9e8155(0xb6b)],[_0x5a5506['x'],_0x5a5506['y']-(0x2f7+0x173+-0x469),_0x5a5506['z']],_0x1664e9['w'],_0x1664e9['h']),_0x5c5769=_0x431ea7(_0xc00e7d[_0x9e8155(0xb6b)],[_0x5a5506['x'],_0x5a5506['y']+(-0x1*0x286+-0x44d+-0x1*-0x6d3+0.8),_0x5a5506['z']],_0x1664e9['w'],_0x1664e9['h']);if(_0x4f1f8a[_0x9e8155(0x1e8)](!_0x2a1041,!_0x5c5769))continue;var _0x444bd1=Math[_0x9e8155(0x5f8)](_0x2a1041['x'],_0x5c5769['x']),_0xbf0ba4=Math[_0x9e8155(0xa63)](_0x2a1041['x'],_0x5c5769['x']),_0x4c6cbb=Math[_0x9e8155(0x5f8)](_0x2a1041['y'],_0x5c5769['y']),_0x53e95a=Math['max'](_0x2a1041['y'],_0x5c5769['y']),_0x2a01a0=Math['max'](-0xe2e+0x1*0x1ded+0x6a*-0x26,Math[_0x9e8155(0x5f8)](-0x7*-0x40c+0x27f+0x29*-0xbf,_0xbf0ba4-_0x444bd1)),_0x57dbfa=Math[_0x9e8155(0xa63)](0x215*0x7+0x567+0x9fa*-0x2,Math[_0x9e8155(0x5f8)](-0x1f*0x79+0x11aa+0x277*-0x1,_0x53e95a-_0x4c6cbb)),_0x9853a1=_0x4f1f8a[_0x9e8155(0x772)](_0x444bd1,_0xbf0ba4)/(0x6d*-0x11+0x2447+-0x1d08),_0x5615c2=_0x4f1f8a['yGWHH'](_0x4f1f8a[_0x9e8155(0x877)](_0x4c6cbb,_0x53e95a),0x24b4+0x1f3c+0x25*-0x1d6);_0x3822f4[_0x9e8155(0x461)+'eStyl'+'e']=_0x3f24ee?_0x9e8155(0x79d)+_0x9e8155(0xb18)+'3,106'+',.9)':_0x9e8155(0x79d)+'255,1'+'10,11'+'6,.95'+')',_0x3822f4['lineW'+_0x9e8155(0x92c)]=_0x3f24ee?-0x1*-0x1139+-0x3a8*-0x2+0x8*-0x311:0x176d+-0x61*0x15+-0x7bb*0x2,_0x3822f4[_0x9e8155(0x461)+_0x9e8155(0x7db)](_0x9853a1-_0x2a01a0/(0x189d+0x1f4e+-0x37e9),_0x5615c2-_0x4f1f8a[_0x9e8155(0x7c3)](_0x57dbfa,-0x1*0x891+-0x1ef+-0x2*-0x541),_0x2a01a0,_0x57dbfa),!_0x3f24ee&&(_0x3822f4['fillS'+_0x9e8155(0x566)]=_0x4f1f8a['ClZEL'],_0x3822f4[_0x9e8155(0x37a)]=_0x4f1f8a['bnsii'],_0x3822f4[_0x9e8155(0x6a3)+_0x9e8155(0x80c)](Math[_0x9e8155(0x541)](_0x5a5506['d']||-0x2010+-0x1*0x18f+0x97*0x39)+'m',_0x9853a1-_0x4f1f8a['dlPbt'](_0x2a01a0,-0x259*0x1+0x1b9d*0x1+-0xca1*0x2),_0x5615c2-_0x57dbfa/(-0x116*-0x10+-0x1*0x1c0b+0xaad)-(0x9*0x3fb+0x40*-0x6c+0x8*-0x11a)));}else return _0x2ae523['sourc'+'e']='Runti'+'me.re'+_0x9e8155(0x438)+'Game('+')',_0x3ccca4;}}}function _0x45e447(){var _0x26836f=_0x363400,_0x23107d=_0x2cad43();if(!_0x23107d||!_0x23107d['cv'])return;try{var _0x4b53a2=_0x23107d['cv']['getCo'+_0x26836f(0xa0c)]&&_0x23107d['cv']['getCo'+'ntext']('2d');if(!_0x4b53a2)return;var _0x5e294e=_0x23107d['cv']['width'],_0x5df5c0=_0x5e294e/(0xe5*0x5+-0x131a+0xea3),_0x3a912a=_0x4f1f8a[_0x26836f(0x98f)](_0xba967d),_0x244d19=_0x3a912a['me'];_0x4b53a2['clear'+_0x26836f(0x5e4)](-0x31*-0x55+-0x4b1*-0x4+-0x2309,-0x6*-0x62e+0x140a+-0x391e,_0x5e294e,_0x5e294e),_0x4b53a2['strok'+'eStyl'+'e']='rgba('+'255,1'+'43,17'+_0x26836f(0xa22)+')',_0x4b53a2[_0x26836f(0x330)+_0x26836f(0x92c)]=-0x2482*0x1+0x2*-0x272+-0x2967*-0x1;for(var _0x5caf88=-0x1*0x209b+0xf33*0x1+-0x1169*-0x1;_0x5caf88<=0x12a*-0x1b+0x2544+-0x47*0x15;_0x5caf88++){_0x4b53a2[_0x26836f(0x326)+'Path'](),_0x4b53a2[_0x26836f(0x9a5)](_0x5df5c0,_0x5df5c0,_0x4f1f8a['uToME']((_0x5df5c0-(0x1*0x1fa+-0x767+-0x7*-0xc7))*_0x5caf88,0x281*-0xb+0xec2+-0x1a*-0x7e),-0x3cb*0x4+0x1*0x212b+-0x10f*0x11,_0x4f1f8a[_0x26836f(0xa64)](Math['PI'],0x125*0x16+-0x85d+0x10cf*-0x1)),_0x4b53a2[_0x26836f(0x461)+'e']();}_0x4b53a2['begin'+_0x26836f(0x1f6)](),_0x4b53a2[_0x26836f(0x4b1)+'o'](0x18de+-0x1733+0x8d*-0x3,_0x5df5c0),_0x4b53a2[_0x26836f(0xb0b)+'o'](_0x5e294e-(-0xef*0x2+-0x1ddd+0x1fbf),_0x5df5c0),_0x4b53a2[_0x26836f(0x4b1)+'o'](_0x5df5c0,-0xc4d*-0x1+-0xa1a+-0x22f*0x1),_0x4b53a2[_0x26836f(0xb0b)+'o'](_0x5df5c0,_0x4f1f8a[_0x26836f(0xa01)](_0x5e294e,-0xe34+0x243f+0x1607*-0x1)),_0x4b53a2[_0x26836f(0x461)+'e']();if(!_0x244d19){if(_0x23107d['lg'])_0x23107d['lg'][_0x26836f(0x26b)+'onten'+'t']='';return;}var _0x3d46df=(_0x5df5c0-(0x1*-0x677+0x7d+0x600))/_0x28cfee[_0x26836f(0x4f6)],_0x58b30b=null,_0x1d3acd=_0x4931ea[_0x26836f(0x2c3)+'nNetw'+_0x26836f(0x61e)+'nc']||{},_0x30a5d0=Object[_0x26836f(0x33c)](_0x1d3acd);for(var _0x5ccd94=-0x14ca+0x5cf+0xefb;_0x4f1f8a[_0x26836f(0x628)](_0x5ccd94,_0x30a5d0[_0x26836f(0x6c4)+'h']);_0x5ccd94++){if(_0x4f1f8a['AvRcX'](_0x4f1f8a['eTwCC'],_0x26836f(0x669))){var _0x51b4=new _0x351a7f(_0x51509b);for(var _0x24cedf=0x104f*0x1+-0x10*0x208+0x1031;_0x24cedf<_0x1b82e1;_0x24cedf++)_0x51b4[_0x24cedf]=_0x21a36f[_0x26836f(0x7ef)+_0x26836f(0x476)](_0x160420+_0xf42c+_0x24cedf);return _0x1fddc3['ok']++,_0x51b4;}else{var _0x3c308f=_0x4f1f8a['orbnE'](_0x47105b,_0x1d3acd[_0x30a5d0[_0x5ccd94]][_0x26836f(0x808)],0x13*-0x191+-0x15a9+0x33a0,-0x14e3*0x1+0x26eb+-0x1205);if(_0x3c308f&&_0x4f1f8a[_0x26836f(0x496)](_0x3c308f[-0xe29+-0x18d5+0x26fe],0xd15+-0x21*0xb7+-0x10d*-0xa)&&_0x4f1f8a['HXaJj'](_0x3c308f[-0x1*-0x17a5+-0x5*-0x6d7+0x473*-0xd],0xd8a+0x64+0xdee*-0x1)&&_0x3c308f[0x49*-0x1+0xf4f*0x2+-0x1e53]===0xd87+0x1*-0x1e1+-0xba6){_0x58b30b=_0x4f1f8a[_0x26836f(0xa80)](_0x4e292c,_0x1d3acd[_0x30a5d0[_0x5ccd94]][_0x26836f(0x808)]+(-0x1*0xe59+-0x2*0x937+0x211f),_0x4f1f8a['sIarN']);break;}}}var _0x4ae754=-0x1b6d+0x127e+-0x1*-0x8ef;for(var _0x10b88c=0xd43+-0x120c+0x4c9;_0x10b88c<_0x3a912a[_0x26836f(0x2a0)][_0x26836f(0x6c4)+'h'];_0x10b88c++){var _0x5427ed=_0x3a912a['list'][_0x10b88c],_0x53fbc4=_0x4f1f8a[_0x26836f(0x8b3)](_0x5427ed['x'],_0x244d19['feet'][-0x1*0x1ead+-0x7*-0x269+0xdce])*_0x3d46df,_0x365cc6=(_0x5427ed['z']-_0x244d19['feet'][-0xdc8+-0x3*-0x361+0xb*0x55])*_0x3d46df,_0x19f3e2=Math[_0x26836f(0xb58)](_0x4f1f8a[_0x26836f(0x983)](_0x53fbc4*_0x53fbc4,_0x365cc6*_0x365cc6)),_0x4e1a9f=_0x5df5c0,_0xc09b31=_0x5df5c0;if(_0x19f3e2>_0x4f1f8a[_0x26836f(0x41e)](_0x5df5c0,-0x131*-0x1d+0x26b3+-0x493a)){if(_0x4f1f8a[_0x26836f(0xa0f)](_0x26836f(0x1a6),'lAyWu'))_0x4e1a9f=_0x5df5c0+_0x4f1f8a[_0x26836f(0x29e)](_0x53fbc4,_0x19f3e2)*(_0x5df5c0-(-0x13c5+0x4*0x59e+-0x2ad*0x1)),_0xc09b31=_0x5df5c0+_0x4f1f8a[_0x26836f(0x4fe)](_0x365cc6,_0x19f3e2)*_0x4f1f8a[_0x26836f(0x229)](_0x5df5c0,0xa1+0x5bb+-0x656);else try{if(_0xfc31a0[_0x2b229c][_0x26836f(0x27e)+_0x26836f(0x6c5)+_0x26836f(0x51f)])_0x4bf729[_0x23b90f][_0x26836f(0x27e)+'ntWin'+'dow'][_0x26836f(0x748)+_0x26836f(0x30f)+'e'](_0x588db0,'*');}catch(_0x1f6585){}}else _0x4e1a9f=_0x5df5c0+_0x53fbc4,_0xc09b31=_0x5df5c0+_0x365cc6;var _0x288969=_0x58b30b!==null&&_0x5427ed[_0x26836f(0xa55)]===_0x58b30b;_0x4b53a2['fillS'+'tyle']=_0x288969?_0x26836f(0x1f1)+'6a':_0x26836f(0xa13)+'74',_0x4b53a2[_0x26836f(0x326)+_0x26836f(0x1f6)](),_0x4b53a2['arc'](_0x4e1a9f,_0xc09b31,_0x288969?0x1a74+-0x1fdb+0x569:-0x375*0x2+-0x1143+0x1830+0.20000000000000018,0x1820+0xdf+-0x18ff,Math['PI']*(0x312+0x1ef4+-0x2204)),_0x4b53a2[_0x26836f(0x914)](),_0x4ae754++;}_0x4b53a2['fillS'+_0x26836f(0x566)]=_0x26836f(0x99b)+'a8',_0x4b53a2[_0x26836f(0x326)+_0x26836f(0x1f6)](),_0x4b53a2['arc'](_0x5df5c0,_0x5df5c0,0x1*0x59+-0x1ce1+0x1c8b,-0xb42*-0x2+-0x1596+-0xee,_0x4f1f8a[_0x26836f(0x510)](Math['PI'],-0x5*-0x4fb+0x25*0xe2+-0x1a5*0x23)),_0x4b53a2['fill'](),_0x23107d['lg']&&(_0x23107d['lg']['textC'+_0x26836f(0xaac)+'t']=_0x4f1f8a[_0x26836f(0x677)](_0x4f1f8a[_0x26836f(0x242)](_0x4f1f8a['CoENE'](_0x4f1f8a['DWDXf'],_0x4ae754),_0x4f1f8a[_0x26836f(0x2d3)])+Math[_0x26836f(0x541)](_0x28cfee[_0x26836f(0x4f6)])+'m',_0x28cfee[_0x26836f(0x795)]?_0x4f1f8a[_0x26836f(0x742)]('\x20·\x20fo'+'v\x20',Math[_0x26836f(0x541)](_0x148271[_0x26836f(0x4da)]))+'°':'')+(_0x58b30b!==null?_0x4f1f8a[_0x26836f(0x7f2)]('\x20·\x20te'+'am',_0x58b30b):''));}catch(_0x42056e){}}function _0x2f29b4(){var _0x5a7f89=_0x363400,_0x89fccb=_0x4931ea[_0x5a7f89(0x2c3)+_0x5a7f89(0xac7)+_0x5a7f89(0x61e)+'nc']||{};if(!Object[_0x5a7f89(0x33c)](_0x89fccb)['lengt'+'h'])return![];return!!_0x2bd268();}function _0x47049e(_0x100f0d){var _0x30d43d=_0x363400;try{var _0x39313b=_0x587b25;if(_0x39313b&&_0x39313b['el'])_0x39313b['el']['style']['displ'+'ay']=_0x100f0d?'':_0x4f1f8a['VTtIV'];var _0x191fe6=_0x38e415;if(_0x191fe6&&_0x191fe6['cv'])_0x191fe6['cv'][_0x30d43d(0x41c)]['displ'+'ay']=_0x100f0d?'':_0x30d43d(0x2d8);}catch(_0x476560){}}function _0x22faae(){var _0x4dfd23=_0x363400;if(_0x4f1f8a['xTXQH']==='RWGJO'){if(!_0x28cfee['on']||!_0x2f29b4()){if(_0x4f1f8a['TBaVL']('VXnUC','VXnUC')){_0x4f1f8a[_0x4dfd23(0xac4)](_0x47049e,![]),setTimeout(_0x22faae,-0xf*-0x7+-0xc4+0x1*0x187);return;}else _0x3a8336['style'][_0x4dfd23(0x2be)+'ty']=_0x13f424['open']?'1':'.5';}_0x4f1f8a['NAOUj'](_0x47049e,!![]),_0x4f1f8a['IyGrH'](_0x2cad43);if(_0x28cfee['boxes'])_0x27c758();var _0x37fc05=null;try{_0x37fc05=_0x4f1f8a[_0x4dfd23(0x134)](_0xba967d);}catch(_0x55fd8a){}try{_0x4f1f8a[_0x4dfd23(0x98f)](_0x45e447);}catch(_0x280ad0){}try{_0x4f1f8a['ICXJe'](_0x3e8a86,_0x37fc05);}catch(_0x24aa47){}_0x4f1f8a[_0x4dfd23(0x1d3)](setTimeout,_0x22faae,-0x749+0xe06*0x2+-0x9*0x249);}else{if(_0x196b78())return null;var _0xd247fe=_0x5de640[_0x4dfd23(0xa9f)+_0x4dfd23(0x6a5)+'ById'](_0x4dfd23(0x1cb)+_0x4dfd23(0xb69)+'v2');if(_0xd247fe)return _0xd247fe;if(!_0x4418d9['body']||!_0x3e214a['body']['appen'+_0x4dfd23(0x31c)+'d'])return null;try{var _0x4a27f5=_0x4f1f8a[_0x4dfd23(0x202)]['split']('|'),_0x35f469=-0x121+0x1*-0x26fd+0x140f*0x2;while(!![]){switch(_0x4a27f5[_0x35f469++]){case'0':_0xd247fe['id']=_0x4f1f8a[_0x4dfd23(0xb5c)];continue;case'1':_0xd247fe=_0x2f8710[_0x4dfd23(0x47e)+_0x4dfd23(0x27a)+_0x4dfd23(0x141)](_0x4f1f8a[_0x4dfd23(0x725)]);continue;case'2':return _0xd247fe;case'3':_0xc05223[_0x4dfd23(0x54b)]['appen'+'dChil'+'d'](_0xd247fe);continue;case'4':if(!_0x5a8200[_0x4dfd23(0xa9f)+_0x4dfd23(0x6a5)+'ById'](_0x4dfd23(0x1cb)+'a-sw-'+_0x4dfd23(0x289)+'s')){var _0x3cb97d=_0xd8a40f[_0x4dfd23(0x47e)+'eElem'+'ent']('style');_0x3cb97d['id']=_0x4f1f8a['WBIzo'],_0x3cb97d[_0x4dfd23(0x26b)+'onten'+'t']=_0x4f1f8a[_0x4dfd23(0x768)],(_0x39db8a['head']||_0x2af791[_0x4dfd23(0x2c4)+_0x4dfd23(0x9aa)+_0x4dfd23(0x6a5)])['appen'+_0x4dfd23(0x31c)+'d'](_0x3cb97d);}continue;}break;}}catch(_0x13081a){return null;}}}function _0x8f741f(){var _0x11e5e1=_0x363400,_0x3a46a6={'dwrdj':function(_0x41b7d5,_0x37043e){return _0x41b7d5!==_0x37043e;},'gzkkq':_0x11e5e1(0x283)+_0x11e5e1(0x398),'umeLN':_0x11e5e1(0x1cb)+_0x11e5e1(0x3e7)+_0x11e5e1(0xb05)+'z','NLGQB':function(_0x217987,_0x1ef146){return _0x217987+_0x1ef146;},'vLwuG':function(_0x57f5f4,_0x5ad71d){var _0x42c1df=_0x11e5e1;return _0x4f1f8a[_0x42c1df(0x878)](_0x57f5f4,_0x5ad71d);},'rADjt':function(_0x4bac74,_0x6867e6){return _0x4bac74+_0x6867e6;}},_0x56baf8=window['Unity'+'WebMo'+_0x11e5e1(0x921)]&&window[_0x11e5e1(0x198)+_0x11e5e1(0x28e)+'dkit']['Runti'+'me']||null,_0x2bcb85=_0x56baf8&&_0x56baf8[_0x11e5e1(0x5cb)+_0x11e5e1(0xacc)+_0x11e5e1(0x80c)],_0x773863=_0x2bcb85&&_0x2bcb85[_0x11e5e1(0x44f)+_0x11e5e1(0x5d2)],_0x2446ff={},_0x3a824b=[];for(var _0x127107 in _0x45a1b6){_0x2446ff[_0x127107]='0x'+_0x45a1b6[_0x127107][_0x11e5e1(0x808)][_0x11e5e1(0x71d)+_0x11e5e1(0x3f0)](0x129d+-0x491*0x4+-0x1*0x49);if(_0x45a1b6[_0x127107][_0x11e5e1(0x632)+_0x11e5e1(0x53d)])_0x3a824b['push'](_0x127107);}var _0x3e1041={};for(var _0x3cb50c in _0x45a1b6)_0x3e1041[_0x3cb50c]=_0x2be665(_0x45a1b6[_0x3cb50c]['ptr']);var _0x4b1268={},_0x357463=null;try{if(_0x11e5e1(0x840)===_0x11e5e1(0x840))_0x4b1268=_0xa056fa();else try{var _0xcff167=_0x30dec3['max'](0x232a*-0x1+-0xeca+-0x3f*-0xcb,_0x54888f[_0x11e5e1(0x38a)+_0x11e5e1(0x3e5)]||_0x4c1036['docum'+_0x11e5e1(0x9aa)+_0x11e5e1(0x6a5)][_0x11e5e1(0x2d4)+_0x11e5e1(0xab1)+'h']||0xef+0x1f*0xa3+-0x14ac),_0x371167=_0x4b9c3b[_0x11e5e1(0xa63)](-0x20df+0x4e1*-0x2+-0xd6*-0x33,_0x383edc['inner'+'Heigh'+'t']||_0x2ff2ea[_0x11e5e1(0x2c4)+_0x11e5e1(0x9aa)+_0x11e5e1(0x6a5)][_0x11e5e1(0x2d4)+_0x11e5e1(0x88e)+'ht']||-0x1*0x11f8+-0x1*0x1f9d+0x3195);return(_0x262184['cv']['width']!==_0xcff167||_0x198544['cv'][_0x11e5e1(0xab8)+'t']!==_0x371167)&&(_0x4fa789['cv']['width']=_0xcff167,_0x5f906['cv'][_0x11e5e1(0xab8)+'t']=_0x371167),{'w':_0xcff167,'h':_0x371167};}catch(_0x1612df){return{'w':0x0,'h':0x0};}}catch(_0x58f44a){_0x4f1f8a['CGCqg']('yBazl',_0x11e5e1(0x6a6))?_0xda19d8['oncli'+'ck']=function(){_0xfabcee(_0x2cf629);}:_0x357463=String(_0x58f44a&&_0x58f44a[_0x11e5e1(0x8a3)+'ge']||_0x58f44a);}var _0x117de2={'version':_0x44f6f9,'when':new Date()[_0x11e5e1(0x778)+_0x11e5e1(0x9a8)+'g'](),'elapsedMs':Date['now']()-_0x3bf38d,'frame':location['href']['slice'](0x1*-0xa1c+0x748+0x2d4,0x58*-0xd+0x471+-0x1*-0x7f),'host':_0x5581ad,'frameRole':_0x514eb8,'uwmk':!!_0x56baf8,'il2CppContext':!!_0x2bcb85,'typeCount':_0x773863?Object[_0x11e5e1(0x33c)](_0x773863)[_0x11e5e1(0x6c4)+'h']:null,'arm':_0x3f4793,'assemblies':_0x5bd57a,'hooksTotal':_0x54d5c9['lengt'+'h'],'hooksApplied':_0x21ec32(),'hooksResolved':_0x4f1f8a['WsSsJ'](_0x299bad),'hooksRegisteredAtArm':_0x3f4793[_0x11e5e1(0x4a9)+_0x11e5e1(0x81f)+_0x11e5e1(0xa52)]||-0x1613*0x1+-0x6*0x43c+0x55*0x8f,'hookErrors':_0x357f32['slice'](-0x1603+0x1275+0x38e,-0x1d95+0x1*0xb3a+0x1263),'instances':_0x2446ff,'classNames':_0x3e1041,'instancesReplaced':_0x3a824b,'hookFireProof':_0x127a34,'survey':_0x4b1268,'actkKeys':_0x41564b,'surveyRows':Object['keys'](_0x4b1268)['reduc'+'e'](function(_0x40b147,_0x46368a){return _0x40b147+_0x4b1268[_0x46368a]['lengt'+'h'];},0x192d*0x1+-0x1dd8+0x4ab),'reads':{'ok':_0x315f1a['ok'],'failed':_0x315f1a[_0x11e5e1(0x236)+'d'],'lastError':_0x315f1a['lastE'+_0x11e5e1(0xaad)],'source':_0x315f1a[_0x11e5e1(0x776)+'e']},'identity':_0x1fd4aa(),'globals':_0x1de873(),'wasmMemory':{'captured':!!_0x14b6a0,'atMs':_0x137bd4,'bytes':(function(){var _0x16ee00=_0x11e5e1;try{if(_0x4f1f8a['KJzyx']!==_0x16ee00(0xb68))return _0x14b6a0&&_0x14b6a0[_0x16ee00(0x9a9)+'r']?_0x14b6a0[_0x16ee00(0x9a9)+'r']['byteL'+_0x16ee00(0xafc)]:-0x20b*0x1+-0xe7f+0x108a;else{var _0x5e5c82=_0x3fa35e['Unity'+'WebMo'+_0x16ee00(0x921)]&&_0x50accc[_0x16ee00(0x198)+_0x16ee00(0x28e)+'dkit'][_0x16ee00(0x4d3)+'me'];if(!_0x5e5c82||_0x3a46a6['dwrdj'](typeof _0x5e5c82[_0x16ee00(0x47e)+_0x16ee00(0x1ad)+'in'],_0x3a46a6['gzkkq'])){_0x8414d1[_0x16ee00(0xb1d)]=_0x16ee00(0x4d3)+'me.cr'+_0x16ee00(0x486)+_0x16ee00(0x6d0)+'\x20unav'+_0x16ee00(0x6e7)+'le';return;}_0x493996[_0x16ee00(0xafb)+_0x16ee00(0x28d)]=!![],_0x8a1792=_0x5e5c82[_0x16ee00(0x47e)+_0x16ee00(0x1ad)+'in']({'name':_0x3a46a6[_0x16ee00(0xae5)],'version':_0x476cf8,'referencedAssemblies':_0x3c6081['slice']()}),_0x209701['ok']=!![];try{var _0x407c19=_0xa78233[_0x16ee00(0x198)+'WebMo'+_0x16ee00(0x921)][_0x16ee00(0x4d3)+'me'];_0x407c19['__sak'+_0x16ee00(0x86a)+'g']=_0x3a46a6[_0x16ee00(0x31d)](_0x357334,':')+_0x41e1a9[_0x16ee00(0x94f)+'m']()['toStr'+_0x16ee00(0x3f0)](-0x1229*0x1+0x2645+-0x2*0x9fc)['slice'](-0x25a2*-0x1+-0xfa3+-0x15fd,-0x29*0xec+0xa9*0xd+0x1d41),_0x36268c=_0x407c19['__sak'+'uraTa'+'g'];}catch(_0x508c0c){}_0x297daa(),_0xca306e['hooks'+'Regis'+_0x16ee00(0xa52)]=_0x5584ed['lengt'+'h'],_0x4f8494(),_0x5a88a6[_0x16ee00(0x9da)+_0x16ee00(0xaef)]=!![];}}catch(_0x3a0d39){if(_0x16ee00(0x6b4)==='QfVgx')return-0x75d+0x35a+0x403;else{var _0x7e1018=_0x3a46a6[_0x16ee00(0x205)](_0x3a46a6['rADjt'](_0x4991ee,'\x0a'),_0x5308cd[_0x16ee00(0x8ed)+'gify'](_0x190a98,null,-0x1*-0x21f5+0x2067+-0x425b))+'\x0a'+_0x4d1203;if(_0x4fb6a0['clipb'+_0x16ee00(0x67d)]&&_0x546128[_0x16ee00(0x794)+'oard'][_0x16ee00(0x545)+_0x16ee00(0xad3)])_0xefed4d['clipb'+'oard'][_0x16ee00(0x545)+_0x16ee00(0xad3)](_0x7e1018)['then'](function(){var _0x1f1985=_0x16ee00;_0x5122a9['textC'+_0x1f1985(0xaac)+'t']=_0x1f1985(0x346)+'d';});else _0x340a99[_0x16ee00(0x26b)+_0x16ee00(0xaac)+'t']=_0x16ee00(0x13d)+_0x16ee00(0xa1a)+_0x16ee00(0x9a0)+'ed\x20-\x20'+_0x16ee00(0x9db)+'the\x20p'+'anel\x20'+'inste'+'ad';}}}()),'exportKeys':_0x374ecb},'diff':_0x401047[_0x11e5e1(0x57b)](0x2498+-0x243f+-0x59,0x1*-0x1e89+-0x1d*0xfb+0x3b20),'speed':{'on':_0x16771b['on'],'factor':_0x16771b[_0x11e5e1(0x890)+'r'],'writes':_0x3f2467,'scaled':_0x3203cd[_0x11e5e1(0x57b)](0x1e0+0x6*0x4bd+-0xa1a*0x3,0x2*0xf3f+-0x6fb+-0x1773),'skipped':_0x4fc2a6['slice'](-0x18*-0xbf+0xdbd*-0x1+-0x42b,-0x1*-0xc37+0x146*-0x5+-0x5c9)},'esp':_0x355c4f(),'view':_0x167834(),'fov':_0x148271['fov'],'espView':{'on':_0x28cfee['on'],'boxes':_0x28cfee[_0x11e5e1(0x795)],'span':_0x28cfee['span']},'local':(function(){var _0x3aa68e=_0x11e5e1,_0x18f98c=_0x2bd268();if(!_0x18f98c)return null;return{'ptr':'0x'+_0x18f98c['ptr'][_0x3aa68e(0x71d)+_0x3aa68e(0x3f0)](0xe03*-0x1+0x800+0x613),'feet':_0x18f98c[_0x3aa68e(0x99f)],'eye':_0x18f98c[_0x3aa68e(0xb6b)],'pitch':_0x18f98c[_0x3aa68e(0x937)],'yaw':_0x18f98c[_0x3aa68e(0x92a)],'reach':_0x18f98c[_0x3aa68e(0x608)]};}()),'uwmkLog':_0xd60d6f[_0x11e5e1(0x57b)](0x117c+-0x7d6*-0x4+-0xc35*0x4,-0x1f*-0x4c+-0x1*0x1885+-0x233*-0x7),'warnings':[]};if(_0x357463)_0x117de2['warni'+'ngs']['push'](_0x4f1f8a[_0x11e5e1(0xb29)](_0x4f1f8a[_0x11e5e1(0x6fb)],_0x357463));if(_0x3f4793[_0x11e5e1(0xb1d)])_0x117de2['warni'+_0x11e5e1(0xb19)]['push'](_0x4f1f8a[_0x11e5e1(0x39c)](_0x11e5e1(0x7ea)+_0x11e5e1(0x3a7)+'g\x20fai'+_0x11e5e1(0xb34),_0x3f4793[_0x11e5e1(0xb1d)]));_0x4f1f8a[_0x11e5e1(0x85a)](_0x117de2[_0x11e5e1(0x18f)+_0x11e5e1(0x907)],0x213c+0x260b*0x1+-0x4747)&&_0x4f1f8a['LsugI'](Object[_0x11e5e1(0x33c)](_0x117de2['insta'+'nces'])[_0x11e5e1(0x6c4)+'h'],-0x281*-0x3+0x77b*-0x2+0x773)&&(_0x4f1f8a['ZfBtY'](_0x4f1f8a[_0x11e5e1(0x9f1)],_0x11e5e1(0xaa3))?_0x57ee43=_0x1d27b5[_0x11e5e1(0x33c)](_0x3c3bac)['slice'](-0x1*0x1343+0xb*-0x158+0x220b,-0x14b6+-0x10f*0x2+0x1*0x16ec):_0x117de2['warni'+_0x11e5e1(0xb19)][_0x11e5e1(0xaf5)](_0x4f1f8a['eIMhn'](_0x4f1f8a['JzIlU']('captu'+_0x11e5e1(0x892),Object[_0x11e5e1(0x33c)](_0x117de2['insta'+_0x11e5e1(0x47f)])[_0x11e5e1(0x6c4)+'h'])+_0x4f1f8a['xURQP'],_0x315f1a[_0x11e5e1(0x1da)+'rror']?_0x4f1f8a[_0x11e5e1(0xa1d)]+_0x315f1a[_0x11e5e1(0x1da)+'rror']:_0x4f1f8a['rOnNc'])));_0x117de2['ident'+_0x11e5e1(0x54c)]&&_0x4f1f8a[_0x11e5e1(0x443)](_0x117de2[_0x11e5e1(0x3f4)+'ity'][_0x11e5e1(0xb73)+_0x11e5e1(0x288)],![])&&_0x117de2['warni'+'ngs'][_0x11e5e1(0xaf5)](_0x4f1f8a['kUFHN'](_0x4f1f8a[_0x11e5e1(0x79e)](_0x4f1f8a[_0x11e5e1(0x317)],_0x4f1f8a['LQucd'])+('the\x20g'+_0x11e5e1(0x721)+_0x11e5e1(0x431)+'the\x20o'+_0x11e5e1(0x8f3)+_0x11e5e1(0x1ed)+_0x11e5e1(0x6b1)+_0x11e5e1(0xa69)+_0x11e5e1(0xa3d)+'.\x20Dis'+_0x11e5e1(0x4ad)+_0x11e5e1(0x76d)+'\x20othe'+'r\x20'),_0x11e5e1(0xa0e)+_0x11e5e1(0x80b)+_0x11e5e1(0x32f)+_0x11e5e1(0xa1e)+_0x11e5e1(0x233)+'permo'+'nkey\x20'+_0x11e5e1(0x188)+_0x11e5e1(0x174)+'eload'+'.'));_0x117de2[_0x11e5e1(0x3f4)+_0x11e5e1(0x54c)]&&_0x4f1f8a[_0x11e5e1(0x526)](_0x117de2['ident'+'ity']['plugi'+'nRunt'+_0x11e5e1(0x942)+_0x11e5e1(0x1cf)+'ted'],![])&&_0x117de2['warni'+'ngs'][_0x11e5e1(0xaf5)]('plugi'+_0x11e5e1(0x234)+_0x11e5e1(0x4e0)+'\x20is\x20n'+_0x11e5e1(0x5f7)+'ndow.'+'Unity'+'WebMo'+_0x11e5e1(0x3dc)+'Runti'+_0x11e5e1(0x78c)+'the\x20p'+_0x11e5e1(0x6d0)+_0x11e5e1(0x1b0)+_0x11e5e1(0x6b3)+'\x20'+(_0x11e5e1(0x167)+'st\x20a\x20'+'diffe'+_0x11e5e1(0x1a4)+'Runti'+_0x11e5e1(0x1ec)+_0x11e5e1(0x8b9)+_0x11e5e1(0x448)+'n\x20the'+'\x20glob'+'al\x20no'+'w\x20exp'+'oses.'));if(_0x117de2[_0x11e5e1(0x3e1)]&&_0x117de2[_0x11e5e1(0x3e1)][_0x11e5e1(0x211)])_0x117de2['warni'+'ngs'][_0x11e5e1(0xaf5)](_0x11e5e1(0x257)+_0x117de2[_0x11e5e1(0x3e1)][_0x11e5e1(0x211)]);if(_0x117de2['globa'+'ls']&&!_0x117de2['globa'+'ls']['heapU'+'8']){var _0x17940b='';_0x117de2[_0x11e5e1(0x705)+_0x11e5e1(0x8ba)+_0x11e5e1(0x614)]&&(_0x17940b=_0x4f1f8a[_0x11e5e1(0x1a1)](_0x4f1f8a[_0x11e5e1(0x184)](_0x4f1f8a[_0x11e5e1(0x58b)](_0x4f1f8a[_0x11e5e1(0x48d)](_0x11e5e1(0x9fd)+'ok\x20fi'+_0x11e5e1(0x849)+'t\x20'+_0x117de2[_0x11e5e1(0x705)+_0x11e5e1(0x8ba)+_0x11e5e1(0x614)]['atMs']+('ms\x20wi'+'th\x20or'+_0x11e5e1(0x694)+'lFunc'+'=')+_0x117de2['hookF'+_0x11e5e1(0x8ba)+_0x11e5e1(0x614)][_0x11e5e1(0x23d)+_0x11e5e1(0x93b)+'nc'],_0x11e5e1(0xb0a)+_0x11e5e1(0x557)+'resol'+'ved=')+_0x117de2['hookF'+'irePr'+_0x11e5e1(0x614)]['resol'+_0x11e5e1(0x279)+'eAtFi'+'re'],_0x11e5e1(0xa51)+'rce:\x20'),_0x117de2[_0x11e5e1(0x705)+_0x11e5e1(0x8ba)+_0x11e5e1(0x614)][_0x11e5e1(0x84d)+_0x11e5e1(0xa16)+_0x11e5e1(0x464)+'e']||_0x4f1f8a['VTtIV']),_0x11e5e1(0x347)+_0x11e5e1(0x683)+'refer'+_0x11e5e1(0x2a2)+_0x11e5e1(0x885)+'ed\x20th'+'en\x20an'+'d\x20is\x20'+'not\x20r'+_0x11e5e1(0x1ca)+'ble\x20n'+'ow.')),_0x117de2['warni'+_0x11e5e1(0xb19)][_0x11e5e1(0xaf5)](_0x4f1f8a['Eymoe'](_0x4f1f8a[_0x11e5e1(0x4f1)]+(_0x117de2[_0x11e5e1(0x9c9)+'ls']['gameS'+'ource']||'none'),').\x20')+(_0x11e5e1(0x183)+_0x11e5e1(0x17e)+_0x11e5e1(0x32b)+_0x11e5e1(0x6b0)+_0x11e5e1(0x3f6)+_0x11e5e1(0x42e)+_0x11e5e1(0x434)+'e\x20obj'+_0x11e5e1(0x641)+_0x11e5e1(0xb66)+_0x11e5e1(0xa28)+'.HEAP'+_0x11e5e1(0x9d2)+'\x20reac'+'hable'+'.')+_0x17940b);}(_0x117de2[_0x11e5e1(0x9c9)+'ls']&&!_0x117de2['globa'+'ls'][_0x11e5e1(0x520)+'Wrapp'+'er']||_0x4f1f8a[_0x11e5e1(0x856)](_0x117de2[_0x11e5e1(0x9c9)+'ls'][_0x11e5e1(0x520)+_0x11e5e1(0x887)+'er'],_0x4f1f8a[_0x11e5e1(0x362)]))&&_0x117de2['warni'+_0x11e5e1(0xb19)][_0x11e5e1(0xaf5)](_0x4f1f8a['qRlei']);if(_0x117de2['hooks'+_0x11e5e1(0x3c0)]>-0x17b7+0xf1*-0xc+0x2303&&_0x117de2[_0x11e5e1(0x4a9)+_0x11e5e1(0x34d)+'ed']===-0x854+0x2676+0x13*-0x196&&_0x773863){if(_0x4f1f8a[_0x11e5e1(0x299)]===_0x4f1f8a[_0x11e5e1(0x299)]){if(_0x4f1f8a[_0x11e5e1(0x410)](_0x117de2[_0x11e5e1(0x4a9)+_0x11e5e1(0x535)+_0x11e5e1(0xa12)],0x1278+-0x1*0x7bf+-0xab9))_0x117de2[_0x11e5e1(0x67e)+'ngs'][_0x11e5e1(0xaf5)](_0x4f1f8a['JzIlU'](_0x4f1f8a['RaNEw'](_0x11e5e1(0x893)+_0x117de2['hooks'+'Total']+_0x4f1f8a[_0x11e5e1(0x491)]+('runs\x20'+_0x11e5e1(0x14e)+_0x11e5e1(0x16f)+'g\x20Web'+_0x11e5e1(0x2c0)+_0x11e5e1(0x75e)+'nstan'+'tiate'+_0x11e5e1(0xb0a)+'snaps'+'hots\x20'+_0x11e5e1(0x22e)+'n.hoo'+_0x11e5e1(0x2fd)+'ngth,'+'\x20')+_0x4f1f8a['smyIX']+(_0x11e5e1(0x81f)+'tered'+'\x20'),_0x117de2[_0x11e5e1(0x4a9)+'Regis'+_0x11e5e1(0xa52)+_0x11e5e1(0x3a6)]),_0x4f1f8a[_0x11e5e1(0xae8)]));else{if('syCGU'===_0x4f1f8a[_0x11e5e1(0x187)])_0x117de2[_0x11e5e1(0x67e)+'ngs']['push'](_0x4f1f8a['CQuqR']+_0x117de2['hooks'+'Resol'+'ved']+_0x11e5e1(0xa02)+_0x117de2[_0x11e5e1(0x4a9)+'Total']+(_0x11e5e1(0x7d8)+_0x11e5e1(0x91a)+_0x11e5e1(0x423)+'able\x20'+_0x11e5e1(0x79a)+'\x20but\x20'+'appli'+_0x11e5e1(0xb31)+_0x11e5e1(0xa92)+'he\x20si'+_0x11e5e1(0x3d5)+_0x11e5e1(0x4fa))+_0x4f1f8a['LDISs']);else{if(_0x4f1f8a['Yfnte'](typeof _0x22f770,'undef'+'ined')&&_0x3e26eb)return _0x121dd6[_0x11e5e1(0x776)+'e']='bare\x20'+_0x11e5e1(0x557)+'bindi'+'ng',_0x3f72f2;}}}else return _0x31f7a3(_0x2a769b);}_0x4f1f8a['LsugI'](_0x117de2['hooks'+'Appli'+'ed'],-0x25ec+0x29*0x76+0x1306)&&!_0x117de2['insta'+_0x11e5e1(0x47f)][_0x11e5e1(0x531)+'ntrol'+'ler']&&_0x117de2['warni'+_0x11e5e1(0xb19)][_0x11e5e1(0xaf5)](_0x11e5e1(0x733)+_0x11e5e1(0x901)+_0x11e5e1(0x60a)+_0x11e5e1(0x255)+'t\x20no\x20'+_0x11e5e1(0x531)+_0x11e5e1(0x2fb)+'ler\x20h'+'as\x20fi'+_0x11e5e1(0x2e1)+_0x11e5e1(0x4f0)+('Eithe'+_0x11e5e1(0x3a9)+'\x20are\x20'+'not\x20i'+_0x11e5e1(0x539)+'ound,'+_0x11e5e1(0x34b)+'he\x20ho'+'ok\x20is'+_0x11e5e1(0x8fb)+_0x11e5e1(0x6f0)+_0x11e5e1(0x3fc)+_0x11e5e1(0x46c)+_0x11e5e1(0x905)));if(_0x117de2[_0x11e5e1(0x95a)+'ncesR'+'eplac'+'ed'][_0x11e5e1(0x6c4)+'h']){if(_0x4f1f8a['KaPHH'](_0x4f1f8a[_0x11e5e1(0x6f9)],_0x4f1f8a['gitsN']))return _0x4a78bf[_0x11e5e1(0x236)+'d']++,_0x4aaf7b[_0x11e5e1(0x1da)+'rror']=_0x1ab7d4['lastE'+_0x11e5e1(0xaad)]||_0x11e5e1(0x908)+_0x11e5e1(0x2a9)+_0x5277d4['toStr'+_0x11e5e1(0x3f0)](-0x2190+0x18bb*-0x1+0x3a5b*0x1)+(_0x11e5e1(0x78b)+'\x20heap'+_0x11e5e1(0x63a)+'0x')+_0x4769c8[_0x11e5e1(0x8de)+_0x11e5e1(0xafc)][_0x11e5e1(0x71d)+_0x11e5e1(0x3f0)](0x1ad2+0x10*0x1ae+-0x35a2),_0x4033d4;else _0x117de2['warni'+_0x11e5e1(0xb19)]['push'](_0x11e5e1(0x28c)+'lt\x20si'+_0x11e5e1(0x24a)+_0x11e5e1(0x21e)+_0x11e5e1(0x509)+'re\x20(r'+_0x11e5e1(0x872)+'n?):\x20'+_0x117de2['insta'+_0x11e5e1(0x1c2)+'eplac'+'ed'][_0x11e5e1(0x633)](',\x20'));}return _0x117de2;}function _0x2c245c(_0x3ef380){var _0x124c55=_0x363400;if('KgoBY'!==_0x124c55(0x5e7)){console[_0x124c55(0x564)](_0x124c55(0x231)+_0x124c55(0x8dd)+'\x20Skil'+_0x124c55(0x4bf)+'\x20repo'+'rt',_0x4f1f8a[_0x124c55(0x33d)](_0x4f1f8a['kBsGM'](_0x124c55(0x390)+':',_0x58bb9b),_0x4f1f8a['IPqQJ']),_0x3ef380),console['log'](_0x4f1f8a[_0x124c55(0x418)](_0x2b5402+'\x0a'+JSON[_0x124c55(0x8ed)+_0x124c55(0x9d8)](_0x3ef380,null,-0x1*0x1297+-0x1bbe+0x2e56)+'\x0a',_0x4e9631)),_0xa9ea0f=_0x3ef380;try{_0x4711cd(_0x3ef380);}catch(_0x4be56e){}_0x54f8eb(_0x4f1f8a['MflbI'],{'report':_0x3ef380});}else{var _0x13bece=_0x5f1fe7['query'+_0x124c55(0x674)+_0x124c55(0x97d)+'l'](_0x4f1f8a[_0x124c55(0x14a)]);for(var _0x18b1c3=0xd63+0x2562+0x13d*-0x29;_0x4f1f8a['BJaTK'](_0x18b1c3,_0x13bece[_0x124c55(0x6c4)+'h']);_0x18b1c3++){try{if(_0x13bece[_0x18b1c3][_0x124c55(0x27e)+'ntWin'+_0x124c55(0x51f)])_0x13bece[_0x18b1c3]['conte'+_0x124c55(0x6c5)+_0x124c55(0x51f)][_0x124c55(0x748)+'essag'+'e'](_0x2743e,'*');}catch(_0x57f7fd){}}}}function _0x432c6b(){var _0x4aca02=_0x363400,_0x30edc8={'esawD':function(_0x23ad52,_0x85d3ec,_0x1f3f90){return _0x23ad52(_0x85d3ec,_0x1f3f90);},'WJRKK':'NPC_C'+_0x4aca02(0x6ea)+'ler','crgkc':_0x4f1f8a[_0x4aca02(0x9cb)]};if(_0x4f1f8a[_0x4aca02(0x14d)](_0x4aca02(0x577),_0x4aca02(0x577)))try{if(_0x4aca02(0x543)!==_0x4aca02(0x543)){var _0x1d2e02=_0x30edc8[_0x4aca02(0x421)](_0x2439de,_0x30edc8[_0x4aca02(0x4dd)],_0x4b77ae[_0x521704[_0x2ba78c]]['ptr']);_0x1d2e02[_0x4aca02(0xad2)]=_0x2fc2bf[_0x13de7a[_0x4e0c48]][_0x4aca02(0xad2)],_0x1d2e02[_0x4aca02(0xa6a)+_0x4aca02(0x43e)+'s']=_0x59113c[_0x5402e7[_0x15d433]][_0x4aca02(0xa6a)+_0x4aca02(0x4d2)]-_0x54566d;if(_0x1d2e02[_0x4aca02(0x906)][_0x4aca02(0x52c)+'h'])_0x1d2e02['healt'+'h']=_0x1e33f5(_0x62dcde(_0x1d2e02[_0x4aca02(0x906)]['healt'+'h'],-0x17e5+0x24ac+0x1f*-0x69),_0x30edc8['crgkc'],_0x4aca02(0x128));_0x3554ea[_0x4aca02(0x436)][_0x4aca02(0xaf5)](_0x1d2e02);}else return _0x8f741f();}catch(_0x375c36){return{'version':_0x44f6f9,'when':new Date()['toISO'+_0x4aca02(0x9a8)+'g'](),'elapsedMs':Date[_0x4aca02(0x5bc)]()-_0x3bf38d,'host':_0x5581ad,'uwmk':!!(window['Unity'+_0x4aca02(0x28e)+_0x4aca02(0x921)]&&window[_0x4aca02(0x198)+'WebMo'+_0x4aca02(0x921)]['Runti'+'me']),'il2CppContext':![],'arm':_0x3f4793,'hooksTotal':_0x54d5c9[_0x4aca02(0x6c4)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':String(_0x375c36&&_0x375c36[_0x4aca02(0x8a3)+'ge']||_0x375c36)};}else _0xf1988a[_0x4aca02(0x211)]=_0x4aca02(0x4c5)+'otonN'+'etwor'+'kSync'+_0x4aca02(0xb3c)+'NPC_C'+_0x4aca02(0x6ea)+_0x4aca02(0xb4e)+_0x4aca02(0x57f)+'\x20game'+'\x20mana'+_0x4aca02(0x30c)+_0x4aca02(0xa5e)+_0x4aca02(0x1f2)+'at\x20'+(_0x4aca02(0x3c8)+'obby\x20'+'looks'+_0x4aca02(0x2b7)+_0x4aca02(0x857)+'n\x20the'+'\x20reco'+_0x4aca02(0xb0e)+_0x4aca02(0xae2)+_0x4aca02(0x87a)+'\x20roun'+'d,\x20no'+'t\x20the'+'\x20menu'+'.');}function _0x58f06a(){var _0x3c5966=_0x363400,_0x449980={'YDzHi':function(_0x4b2c00,_0xb70108,_0x179032){return _0x4b2c00(_0xb70108,_0x179032);},'cCXFg':function(_0x238fed,_0x16df2e){return _0x4f1f8a['nhCGt'](_0x238fed,_0x16df2e);}},_0x39b3e6=-0x8f9+-0x3cb*0x1+0x2*0x662;try{_0x4f1f8a['YzTZw']===_0x4f1f8a[_0x3c5966(0x163)]?_0x4f1f8a['BmZOn'](_0x22faae):_0x449980['YDzHi'](_0x4f698e,!_0x3aa332['on'],_0x5f2b6d[_0x3c5966(0x890)+'r']);}catch(_0x36bcad){}try{_0x5b78bb();}catch(_0x22e5a1){}setInterval(_0x4f97f5,0x1a0b+-0x9c7*-0x2+0x7*-0x603),_0x2c245c(_0x4f1f8a[_0x3c5966(0xa8c)](_0x432c6b)),function _0x41ca91(){var _0x1ab7c5=_0x3c5966;if(!_0x54d5c9[_0x1ab7c5(0x6c4)+'h'])try{_0x5a0219();}catch(_0x4af1d9){}_0x39b3e6++,_0x2c245c(_0x432c6b());if(!_0x54d5c9[_0x1ab7c5(0x6c4)+'h']&&_0x449980['cCXFg'](_0x39b3e6,-0x14c1+-0x1*0x43a+0x1a27))_0x449980[_0x1ab7c5(0x5da)](setTimeout,_0x41ca91,0x103a+-0x191f+-0x10b5*-0x1);else{if(!Object['keys'](_0x45a1b6)[_0x1ab7c5(0x6c4)+'h']&&_0x39b3e6<0x3b9*0x4+0x1103+-0x1ebb)setTimeout(_0x41ca91,0x22*-0x62+0x2*-0xa46+-0x1*-0x2960);else setTimeout(_0x41ca91,0x18*-0x82+-0x1*0x1c2d+-0x25f*-0x13);}}();}if(document[_0x363400(0x54b)])_0x4f1f8a['pevXy'](_0x58f06a);else document[_0x363400(0xacb)+_0x363400(0x7e1)+'stene'+'r'](_0x363400(0x295)+_0x363400(0x8e1)+_0x363400(0x207)+'d',_0x58f06a,{'once':!![]});if(document['body']){if(_0x4f1f8a[_0x363400(0x290)](_0x363400(0x5ca),_0x4f1f8a['FvLvZ']))_0x9cbb26=_0x229349(_0x363400(0x224)+'on',![]),_0x562630[_0x363400(0xaf5)](_0x492b30);else try{_0xb3c690();}catch(_0x29d1d3){}}else document[_0x363400(0xacb)+_0x363400(0x7e1)+'stene'+'r']('DOMCo'+_0x363400(0x8e1)+'Loade'+'d',function(){var _0x2471e8=_0x363400;try{_0x4f1f8a[_0x2471e8(0xa7b)](_0xb3c690);}catch(_0x1cc9d8){}},{'once':!![]});})()));function _0x3c15(){var _0x1bdc35=['uLDhsK8','iokaLcbUBW','AxrSzsa','yMuGCMu','zMfSC2u','BgvMDdO','Aw50iIa','qLzKAgy','oJOTD2u','Dwj7zM8','BNrLCI0','CNDqC0K','z2XVyMe','tNnXC28','rhzRvhy','yxjNAw4','DhLWzq','Dxm6nNa','v0fswI0','rMLLBgq','ifnxlva','vtGGAxm','AxPLoJe','DZiTB3u','y0HvELK','lxDLyMS','mhHKma','z2LMEq','CMvTB3y','BwvTB3i','B3bLBIa','nZq4mZa','v1vWzuW','iNrLEhq','BNrezwy','lNnRlwm','yw5ZCge','AxvZoJK','mhGXna','t013t2u','nMi5zcW','yM90q28','C3vI','wvjrBuu','Dc13zwK','nsaWlti','uvHhq1m','DgL0Bgu','Fdz8mNW','rxLL','s3LhquC','DMXgwxy','sKzSCe4','B2DVlxm','vLDHswe','mNb4o3a','BMDL','ihjNyMe','o2n1CNm','mtbWEdS','zM9Sza','zw5LBwK','zM9UDc0','zMy8l2i','ieeGAg8','DgDMtuS','wuD0BMW','idfWEca','y3DxAKK','ig9Mia','tfDRuhO','idqGnc4','zwDPC3q','Dcb3yxm','iIbZDhi','whj1qwK','CMrLCJO','zgvZy3S','BxnXufG','BNrLEhq','mIiGC3q','u2fRDxi','r2LbEw4','B2XZoJO','revpq3m','DMvK','i2zMnMu','qKD1q0W','BNqTzMe','B3vYy2u','zcbPCYa','zcbYz2i','mdbWEcW','B2fYzca','zciVpG','yMrHowm','C2ruELC','Axb0igK','AdO5mNa','twzlBgq','C0ntweG','nYWUmty','lwLUzgu','ihnVBgK','BgjjDeG','ndmSmtC','C28GC3q','B2r1Bgu','tuXREfe','DgfYz2u','zxi7D2K','CgfKzgK','i3nHA3u','EuvzrfC','zYbMB3i','igfWCgW','r2Dov1K','B25JBgK','BMfNzxi','ChGPktS','Ewr3BfG','zgvYoJe','uNvRyNu','ywjSzwq','uNPfuuO','werTq0S','CgfUzwW','tgLZDa','AgfUzwq','BLr5Cgu','vgTxy1m','yxvXCKi','ndK3ntf2CenVCxu','keLUC2u','ugT5txK','mxWW','txvSDgK','Aw1L','z3jVDw4','ywnPDhK','y29TyMe','EhL6','sevbufu','o21PBI0','BMTnz3u','oYi+rvm','zsbLDMu','DdOG','icHZB3u','DgvYzwq','yw5Jzsa','ksbZyxq','DgvHBq','ktTIB3i','CM9luhe','mJHWEdS','yxrHihi','CIiGC3q','thn1z0K','icdcTYaG','ChbLCIa','vgHHDca','oNjNyMe','nJq2o3a','sxHOwgW','rNnXzw4','Bwf4','thfZDMC','CMvWB3i','B3rO','iNnWiIa','zgf0yxm','CYbVCNa','zMLYC3q','yxmSBw8','Aw50Aw4','A2T5De8','B206mJq','y2XHC3m','D01utum','wMzcDfK','CMv7zM8','B2jM','u2DYwuW','sLjmALO','Dw5PDhK','lJa0ktS','nwmWidm','zwXxzNq','mJm1nfLKyuTyEG','DfDAuw4','o3DPzhq','phnWyw4','m3WWFdC','DgHLiha','wvjlD3i','AgfADMK','Bw4Ty2W','z1ztufi','C2LU','A25VtMW','ywqGzNi','tuzQB0S','mtTJB2W','Ad0ImIi','mJbWEca','AMXyBwS','rwzcrNC','ugX0y1e','zM8Qksa','igj1Dca','lwTD','DhrVBJ4','BMuUifq','Aw5WDxq','zeXuAum','oMf1Dg8','Ag9Ksw4','BLrRtvu','B3CGkey','ihnRAxa','rw9jAMq','igLUC3q','yw1Ligy','B1btu04','n2vLzJu','z2v0rwW','mNb4o2i','t1LrBwG','kgXVyMi','CNfwyMu','igzSB28','AxmGyNu','CNq7ywW','wKzTsg8','ztOXm3a','rwnSDee','mcaWige','t0rTAey','B250zw4','CNjVCG','yM94lxm','E2zVBNq','DhjVA2u','DfDPzhq','ms41ihu','uvDhue8','BIb0Agu','rgLMzIa','y09oDvq','ChGGC28','AgvPz2G','svP5A3i','zMLSBd0','mcaWida','s2LOsw0','zLzitNi','idzWEca','zNjVBsa','zMXLEc0','qvfoBfO','uMfUz2u','AgfZtw8','wev6txy','ywnRz3i','lxDLAwC','BK5LDhC','Aw5Ly2e','tJWVyNu','DxrVo3O','ywrKrxy','CenVBNq','ywX1zt0','lJa4ktS','y3nZvgu','if0GywW','BNvjA0i','AgL0CW','vgv4Da','iJ5ZywS','zxjZ','zxjLzca','C1fnyNe','q0LtAhy','ChG7Fq','CxHICfC','ignOzwm','zxnVBhy','CYbHy3i','kZb4mJK','lJuIihy','EM1eEuq','AwXKlG','surfige','BNbsENy','ihvUAxq','Dw1Lte4','txjzwvu','zefsrK0','v29OzfC','i2zMnMi','AgLZig0','C3zNpG','lNnRlwi','C3bSAxq','yxbZAg8','EvrHCa','pgiGC3q','ChqRmhG','AgfKB3C','Bg9NBY0','BNnWyxi','ChvZAa','BgXxyxi','B3bLBG','CgvZia','CI10Ahu','wNPXreG','yxr0zw0','zw5NDgG','BvrmzLe','nZH2AdS','rJKPpc8','ldiZocW','zfHqB1e','vgL2t20','DxjHlwu','BMqU','BgX3yxi','yurHyNK','CgvJDhm','Bw4TAa','zevQzei','igfUzca','BgLUzvq','rNfXrKO','BMCUcG','BIbjtLm','B3j0lGO','Aw5Lza','C2STCMe','zJy0','A01KD3e','CgP2ueu','DgeTyt0','Dg87iJ4','ktT9','nZKSmtq','BMDZ','D1HWEhu','iI8+pc8','z2vY','zxjYB3i','uLjqtgK','mNb4o3O','uufltvG','DfzYr1u','tKvIvhK','zw5LBxK','lcbuyw0','mtbWEca','ihLLDca','A09eA2K','zg93oMK','wwDUBhO','iM5VBMu','AuTTy0C','u29yshO','DhrdwMS','zwXMoMy','DLfOuee','z0Hvugy','zwqGBM8','DcbZCgu','kde1mcu','BgvKoIa','oYi+u24','C3rVCfa','wMDKzxe','zNjVDw4','m3WXFdi','r1n3u1C','iIbZDhK','lcbUBYa','yNb6u0G','lwzHBwK','yKjOq2e','wwTrA0m','ywnLlwK','ywjZ','zYbTyxi','thfQs0e','Bfn3Dgy','BJ0ICM8','zMj3zgC','Bg9Hzhm','yNHyswS','mYWXnZC','yKjTzg4','sfbgA3q','B3nZihq','BgvYige','lxDYyxa','BY1MAwW','CvL1wfK','A2D1z3G','ChG7zM8','BgW6Aw4','sgvHBhq','B2jQzwm','AwDUlwK','C3fYDa','B3jKzxi','mIWUnsK','idaGmxa','zgPTswu','C2v0ida','AxnHyMW','B3nPDgK','C2STy3q','twPdD3i','A3TOzwK','mtC3nte1yurRsKTJ','B0PsC28','q0jJu2m','AxrOie0','sxPgz0e','D2TeAe0','ys1ZDY0','A2v5vxm','zxLL','ign1yMK','zcb3yxm','AgvHCfu','FdL8nxW','CxPXrKq','icbVyMO','z2Potey','DgfNtwe','D0rREhm','zxGTzgK','yxnZAwy','DgLUzYa','B2jMsq','Du95veu','C3qY','C2v0sw4','zKXHqve','mxWWFdq','BwuUx2C','EI51C2u','CM9ZCY0','CMvWzwe','EeDrzNa','yw1Ltwe','v1HiEwW','C2zVCM0','mZT9','BMTLEsa','DeTLrMy','EMu6mte','AwzWDu0','t3brBNK','CM9WywC','q2XPCgi','u3bYAw4','AwrLCG','BMCGyxq','zw50','AM9sAhC','iZHKn2e','DgXLCW','yMeOmJu','ktTJB2W','ExrLCW','ldi1nsW','nZCSlJu','sgziA3a','ifvjiIW','m3W2','sgDkre4','B25Jzsa','AwXKlca','vwLKDKe','cNbPDgm','z2rSwuq','Aun4BKW','AgvYAxq','qLbPrKW','CdO0ChG','ic0+ia','Bd0Ii2y','msiGDMe','pgnPCMm','DMvKia','oInMnMu','Ag90icG','BMqIihm','Axrdz1K','vKfXA3u','zMjPDxG','zxi6mdS','wxPuwNC','mNWXFdG','zxmGAxq','BNTIywm','ywDHAw4','CYGXlJe','yNj2D2q','u25XCfO','B3b7zgK','v1rsreW','mNb4idC','v19F','zhvYAw4','v1DTBue','rhH1CKe','lM1Ulxq','BgLKihi','yxjKlxi','zgL1CZO','reTTChi','lxrYywm','Dw5Kzwy','DcbKyxq','C2v0ica','BMnLv3i','D1fdBgS','ChG7D2K','CMvHzhm','DvzmvwK','oJeYmha','u1buv0u','DhKGAw4','sgvHCca','DuPfvuC','AgvHCei','s1Lxswe','ALjqEMe','yw5KigG','nYWUnYK','vxb5Au4','CI1LDMu','r2fTzq','EffTv1C','zwq6ia','C3vYDMu','Bxvvz2K','C3rYB24','BM90ig0','sNPjBfu','v3fdwwe','CM9SBgu','mtaWDMG','psjWywq','vw5PDhK','tKnivhO','Bgu7zMK','nsWXmdC','yvv3uMW','y3vgB1O','BNn0yw4','C21uExa','ywDLigG','yNv0yxa','zxrOAw4','vw5KDvi','CMvUDca','ig9Uy2u','uezXANu','rNPNtgG','v2jprgu','yMfS','DMLZDwe','DxjLzey','CMvMzxi','zvbSDwC','DeHSs0S','y1zmqMO','ihDHCYa','Aw5N4OcM','Axr5oJe','AwrLE2q','yxbWzxi','lNnRlxa','vgHLigy','BIaUC2S','B20GDgG','qwfWuu0','DKrdDvu','idqTnc4','DhnpshC','z2Lut0K','z3TMB24','mJi5mZm0mgHTAu94qG','DvbAzMS','BMfWC2G','BMnLC1i','BMvJyxa','B25Lige','igzYyw0','y2uGyM8','oJfWEca','CMeTzxm','lxGIihm','zwfJAge','C2fRDxi','lM1Ulwm','o2jVDhq','lxnOywq','rxHWB3i','otK7Bwe','zxi7Dxm','wMvotMW','Cg1JyKC','zsbZDhi','BgLNBJO','y2f0','quWGqum','C0H3Aha','mJq2ldi','BgfZDeu','vwfNzee','vM1oCNe','AwrKzw4','CePfBLe','CMvSyxK','BNq6Aw4','EgzvuxG','Ag9VA1a','iZe1mgm','Awq7z3i','B25VC3a','ohb4o2i','qwnhBKm','y2fuzfK','ru5ept0','zwqGEwu','sfDNrhC','BwuGAw4','BgrPBMC','zYaVigO','y29MB3i','DxnPyMW','iZrMogy','AxmGD2G','yt0IyMe','zxqSig8','iNn3mI0','ugf0Aa','tgrJt1O','B1jjA0O','uunPyKO','EcbYz2i','B2zMihq','Aw4TD2K','zMLSDgu','AhrUzxm','qKDLwvm','Aw4OnJi','Dunyv0C','EvDQq1m','qNLjza','ywn0B3i','DKX3DuC','AZPICMu','tg9Hzgu','mJu1lde','CxvLCNK','DgvYo2y','B24Gzge','Cej6ANC','BhvTBJS','yxa6nha','zxi6mxa','rw5HyMW','BM90zq','ihvPlw0','y3vYC28','yNv0Dg8','qLPKweS','zwqU','owm5o20','v0fiAwO','C2vUDca','iJ5gosa','CKnVDw4','vwfyt3G','CMrLCI0','AxjZDca','ie9o','yNvPBgq','kde4ChG','BI5OB28','BK1eAfu','u2vZC2K','Aw50lxC','oMnVBhu','y2vUDgu','lZ48l3m','D2nKBwW','ywX7zM8','B24+','oMLUC2u','DgfSE3a','CgX1z2K','qMX2v2K','AxnWBge','jwnBC2e','CgXPzxi','BIbuyw0','BI5FCNu','ys1Tzw4','zMfPBgu','yw4+','ihnRAwW','rwjbtgW','sfnlEvC','phn0CM8','tMfTzq','B3jPz2K','AgLKzgu','kZb4','vernx0C','yvzJrLm','wgvzC2C','BwLUv2K','v1nZEMy','psiXiIa','AxrJAa','Bgu9iMi','iIbZDgu','Ahzfsve','BMnLigy','zxCGy2e','BdPPBMK','q1vbEwS','BwvUDc0','mtrWEdS','C2nHBge','rg1sBgy','i2y3zwu','C1DHCMG','BgqGAxm','zwqGyNu','mJeSmti','rvnqoIa','CMnLoIa','CM9Wlwy','C2STC3C','oInMn2u','B250lxm','BwuGD2u','nhWYFdK','weLIB0i','y2fTia','BM8Gzw4','igLUlwy','BwfYz2K','sgDVwuS','vgDeDhu','BwuUy3i','Cg9HyNG','r0jxAwm','A2v5qxq','shfNrw8','Dgv4Dem','z2fWoJe','yxjLBNq','y2u7y28','rJKGihm','zhnhyKu','BI1PDgu','BMq6i2y','A2uTBgK','DxjHDgu','vLHVzuK','DgHPBMC','yNjLywS','ihnOB3C','DMvhyw0','zuvSzw0','zgLMzG','mxW0Fda','BgvY','y29UDgu','ndy7y3u','BNrLCJS','yt0IC3q','DLb6DLG','zNvUy3q','w2rHDge','A2r1ywi','y2SIpJW','yw55ihC','DgnOzxm','DJiTy3m','s0fdEwy','nIaXoci','CMvIDwK','ChrLza','v2vItw8','nLP2EgHSsW','Du5eALe','B250lwy','shfprvq','zeLuq1a','ug9ZAxq','re9nq28','idyWCYa','zM9UDdO','ChG7yM8','BuTyqxK','lwnHCMq','oMjYAwC','ndGZnJq','oImXnta','AMDTA2W','DMLZAwi','BgLZDa','mhb4oYi','zw5Jzsa','BKjfrNi','uKPLBum','zhKIihm','iey3ica','Efb2DgO','BMvQB2K','C3mGmhG','y0HnDMW','zvbYB3a','igfYztO','s0TgANK','vKTWr2S','BwfUEq','mNmSyMe','o2jVEc0','BM8Gvxa','yxjKlM8','vuLJz0O','qvDZuem','BgLKzxi','igXPA2u','Ate2','BM9ZCge','u2nPDM8','mJq4mJu2CerpwgvX','kdiXlde','Ag90','B3bHy2K','DvPWy1e','qxnZzw0','D05Jyxa','wLb6C2W','ugHVDg8','zg9JDw0','igfYBwu','phn2zYa','oJK5oxa','zKDQC28','C2v0','D2HPDgu','iZjHmgy','tw9KDwW','mJTZDhi','q291BNq','y0HoDwW','zwy1o2i','EdTVDMu','lYbZChi','Cw1er1e','y2XPzw4','Ec8XlJq','Au1QDeu','rfnMDNy','BM9Uzq','C29Ivvq','C2vYDcK','uIbbq1q','DgvYlwu','y2fUDMe','CKXPC3q','CML0o28','ihbHBMu','CMvKihK','BwfUywC','EtPMBgu','rvnqig8','rKnUD0i','ohb4ide','B2Hprva','nYWUmZu','s3L2uwC','B206mxa','mZGSmJq','B2XVCJO','yMXLig4','AgrSq2C','z2v0q28','DdOXnha','CM5PBMC','CwDPrMG','ze10zNi','EgvKo3q','A2zQAfO','CMvH','Aw5NoJi','DxjJzq','lsa0oha','ig9MzG','BNrYB2W','AwnOigy','A3mUBgu','Bgz0D3e','C0jpvei','DunzDeW','yxjKlwG','rgHRDe0','DZOWidi','BM90ihi','yxv0BW','q1njz20','C2fNzq','nsWUmdi','ywDrDK8','Bgu9iMm','rxvsre8','z2vYlIa','zxiTCMe','BNq7y28','zxnZywC','mhb4o2y','ig1VDMu','ic40nxm','u2HHCNa','pJiUmhG','oJa7zgK','Bg1cqMy','BLrSque','t2nIyNe','Ag90CYa','A0Dntei','CMfUz2u','zenOAwW','tKXhuui','B3rVBK4','Dhj1zq','suLcuhi','Dc1ZAxO','pc9WCMu','ugr4y3e','CJTZDhi','lYbQDw0','yMvNAw4','B3C6Aw4','r1z4wwy','CcbHBMq','zwfKEsa','ihn0yxK','rfDbEe4','Bw9YEvq','Bgv4oJe','sYbZy3i','BgLUzvC','mcWUntu','Dgv4Dee','4OcuigzYyq','nsiGC3q','EcKPo20','oJHWEdS','ChG7CMK','mhW1Fdm','B2jIEsa','BYb0Agu','BM9UztS','A2v5CW','r0LWuxO','Bg9HDhm','mtC3lc4','vKT2yuq','vgfTCgu','yxa9iNi','yNv0ig4','tMv0D28','BM8GBgK','q29WAwu','ksWGC28','EdT9','Bg9dAge','rvfRr2u','ig9Yihq','Bgu9iM0','qxbWBgK','B2TLlxC','Dg46Ag8','zxmGBM8','zuf0rMK','B246ywi','nxWZ','Dg9Nz2W','t3PzrKS','BwvTyMu','mhG0ma','DxnLCI0','tuSGq08','lJKYktS','Dg9gAxG','C3rLCa','D2LKDgG','igzHA2u','y29UDhi','BLfcr0e','AwvKige','wejKEfe','A3mGD2G','EvDLAeK','z2H0oJi','y2zcAe4','Dg87zMK','EdTMAwW','igL0ihm','Bg9YoNi','DMfYkc0','r05twKe','ihDYAxq','yw1LlGO','mtjWEdS','yMvSB3C','ChGGmdS','ihnPz24','AwnOlJW','mJbWEcK','DLrXC0u','z2H0oJm','B3vUDa','zsbNyw0','D2fctNK','zM9UDa','B250lxC','ysbtA2K','FdH8nW','lxnWywm','Cgv0ywW','Aw5PDgu','DtmY','s2rVqMC','oYi+u3a','zxrmzwy','ntuSmJu','CMeTC3C','zevTB0K','B3i6iZG','AwqTDgu','Aw5Uzxi','q29UC28','DhjPyNu','twvXz3a','mJu1ldi','icaGy28','y29SB3i','DgGGB3i','ktSGBM8','Ds1YB28','zvn0CMu','EfnzqLa','yxv0BZS','CZPZDge','Aw9U','igzPzwW','ic4Znxm','z2v0sw4','z2fztwy','B0X3CLa','q1zfrMG','CMvMDxm','y2P0wfi','z1HUq2e','Dg9Y','lxrPDgW','Ag9ZDa','CNqP','qxrbCM0','yxjTAw4','AdO5nNa','CIb5B3u','nxb4o2i','oIiIo3a','BIG1mNy','ChjLDMu','x19tquS','owqIihm','yZK7BwK','Ec8XlJm','BMnL','Ag9ZDg4','A2vKpsi','B3zLCMy','ztT3Awq','DcbYzxa','C3rLBMu','u2nYzwu','teLwrsa','yxjKlxq','jtTIywm','CfbdAwy','nIWUotu','A29mwxu','vg90ywW','ihvUyxy','Dxbdy0u','CKnAwKK','zgLZCgW','twHJD20','CgfYzw4','vMDLCM0','DgHLigW','BMq7Fq','x2DHBwu','Dhj1zsi','lwXPBMu','z2H0oJG','igDSB2i','lMrSBa','ihrVCc0','sw5ZDge','ztTTyxi','lde0mYW','lg1VBM8','z25HDhu','zgf0yq','wxjpA1u','i3n3mI0','zu5mC1G','AfnJCMK','DxqGEw8','zgTPDc4','CK9HvM8','B3vUzdO','AxbIB2e','mZu0ofbjvungrW','zxnW','lNnRlxy','yLvuv24','yw5ZAxq','v2LKDgG','yw5NzxS','ys1ZA2K','uLH0EuW','Dxm6nta','sefLCvG','BgfZDem','B2TLpsi','CMuk','BNqTC2K','BcbHz2e','Aw5N','zw50o2i','BNrZoMe','Aur6D2y','AwrLBNq','BMC6nha','A2vKihu','vxzfBuK','zwXLy3q','tKnhzg4','B206nNa','zgf0ys0','B25Nig8','ihjLy28','s2DgwwG','t2TRquG','ignVCgK','mdTMB24','B3G9iJa','yw1PBMC','zxG7ywW','r0TKAfO','sNzbvNa','zNbZ','igrVy3u','rKPbr3C','Dw5UAw4','khrOAxm','B2XLig4','DMvYC2K','D3jHCdS','zxH0lwe','Ce9gCeK','rvnqigi','y2fTzxi','y2TNCM8','yMLUzgK','Dxm6n3a','psiXlJi','AguGCMe','AMvVrum','y0LUChu','ChDMwNy','ywnLlem','C3r5Bgu','EfbmteC','DxnHyK4','DcbPBMO','swjHBeK','zxnHD0q','sLPNsMy','BYbHihq','DgfU','z2fnqMu','B21Tyw4','CMfWoNC','ignHChq','wxDVEeO','sxPwCwy','CMDPBI0','yxrJAc4','DxrVo2y','BNrPBca','oImYyta','nYWUnsK','AgLSzsa','C1zcquu','ifvxtuS','ysbNyw0','rMXHzW','yM90CW','Dxr0B24','C29SDMu','DM5wAKO','ChqGsvm','zMzZzxq','yw5LBhS','DMvYzMW','u2vLBK0','sM9bB0y','r0n3rNq','t2zMC2u','lNnRlxm','AfjtB3m','Aef0vLG','Dte2','wMXsyNC','qu5pveG','zsb0Age','DKX0BMu','wfvbu04','y29Z','DMXVEwu','B25NpG','EdTOzwK','C2nYAxa','Bwvnyw4','Fdr8mhW','B2jMrG','vgHLiha','mNz3ldy','C2HIswK','u3bLzwq','q2fTzxi','s2DsEvm','Bfjntge','B3rLE2y','sxDfwu8','sw5Zzxi','AxrSzxm','msiGC3q','z0TNqMe','ktSTD2u','C3rYB2S','ic0Gy2e','vw16seq','qxrgAxi','mhb4oW','DhLSzt0','mda7y28','zgDWDha','mxb4idy','Agv4','ihjLywm','DMvYBg8','v2Ljzxa','CKLMtNu','DgHLBG','yJLKo2i','wujesey','Bw4TDg8','mhHLoa','zwn0Aw8','vKvsu0K','BNq4','B2LUDgu','AwzMzxi','BJPJzw4','C3rHCNq','AwDMwfm','icaYlIa','EIaOsw4','y3jLyxq','BMnLCW','BNvTyMu','Fdn8mhW','wgjhwfi','ic0GndG','icbVzMy','yuzYB20','zwf0zva','pc9ZDhi','igj5igu','sefNufG','ywn0Axy','zMykrJG','CdPYB3u','q1HOy3a','AgLKpq','CMuGy2W','rgXSq04','CgruAg0','CxfWt1i','yY0XlJu','Bwv0ywq','Axr5oI4','uMvAt3u','B3n0Awm','BNuTCM8','oJeGmsa','Cg9ZAxq','zwjRAxq','ifnRAwW','yhbSyxK','zKrRCxu','CI1Yywq','BffbseW','EdPUB24','D2fYBG','tKrQrfe','BgfIzwW','t1PUqMi','vg9cCKC','B2SGzMK','ChG7y3u','Ag9VA3m','B2XSzxi','DMjRz1K','u1nXEKS','ywjSzsa','EergshO','DgvZDa','idGWChG','Bw92zvq','A2LUza','zgrPBMC','C3LUyW','pt09u0e','whnzyuq','r1fIv1i','zhvSzq','CM9VDa','oJPHzNq','nhb4idK','C1bez1i','oYi+ltW','ihn0EwW','BfDHCNO','igHLyxa','nhWYFda','Awq7CgW','D2fZBvq','r2fTzsG','tM8GugG','zIb0Agu','Fdj8mhW','C2vYlxm','yM9KExS','uwfbBhy','y29WEq','yurKt2O','mxb4o2m','EgvZlIa','zhmGWRCG','sw9ZEhC','yM9Yzgu','u2vLBG','uNvUDgK','Bcb1Cgq','sgnTv2m','Cw1mz1e','yxnZtMe','D2Xjqum','C28GDgG','zM92','sgvOvge','rLfht2K','v0Pss0S','B24GDgG','A2v5','BNrPBwu','CJOWo2i','BLbqyuG','oJe7BwK','B29RCYa','yxbP','B2r5','AwX0zxi','oI40o30','v2reqvy','yxjN','Bg9ZzxS','EtPIBg8','q2jtrgC','mxb4ihm','sgvPz2G','zxqUia','q3zRAe8','Esb0Exa','AurIAg4','Ag9VAW','BwvHBNm','C3bHBG','uMvSB2e','DMfS','uMvks3y','CMuG','BMq6CMC','wun3vgO','nsWUmdG','CMPfr3G','EdSIpNy','nsWXndm','sKH5rvy','sMfjAKe','iZaWmdS','D2zZqwO','AKDXA1y','nsK7','CM9Rzs0','y3rmuuS','y2fWDhu','B246y28','BNrPyxq','yw5LBca','ntbWEcW','y0TqCfy','BMC6mca','Bw9IzgK','uvniDK4','Dxm6oha','y2uTAxq','y0P6ugC','BgW+','vxbKyxq','BMrVDY4','ihDOAwW','zwz0ic4','wxj3wfu','ywL0Aw4','D3vXDKW','mhGZma','ltiUns0','zg93','DMfSDwu','w2fYAwe','ihbHDgm','Cvzpv2K','z2v0rMW','ywn0','z3HIwxK','uvritey','zgf0zsG','Aw1HDgK','ntTWB2K','CMXoBuu','AgvHBhq','CMfUy2u','AxvZoJe','rxDzrhO','EMj0wNy','rLbty28','o2jVCMq','yZfKo2m','DcaOC28','uMvZB2W','EtPUB24','ywLSzwq','BhHezfu','BIbHihi','wK50Eg8','mhb4ic0','C3DwzK8','y2vK','Aw5ZDgu','zdTTyxi','lwjYzwe','CM91BMq','AhjwwwW','BMHXsvC','C2vSzwm','D3jPDgu','y3qOCYK','qK5rB2K','i2zMzdq','DgfSBgK','iMjHy2S','yM9KEq','Axr5','mNb4o2G','yw5Nzsi','D3Plt28','nhb4o3q','Ag90ig4','CKDUtuu','iMvZCci','u2vNB2u','yxmGAwq','uuHKDKW','z2fTzsa','DcbTyxq','BgCIihm','lGOkswy','BM8GD2e','z2LUlwW','uLmG','tNzlCfe','zsXdB24','C2v0sxq','zxG6BM8','DMuGBwe','zK5WCLG','Bg9N','EdTHy2m','DhLSzq','zw51','zhfeEha','nxb4o2G','AxrLBxm','uuf6wgS','icb3CMK','rvbTvwW','C2STC2W','mJiSmsW','lwHPBNq','y2GGDgG','Dw1Uo2C','BwuGBM8','vhDZA0i','qwrzCgm','EKDruK0','rwHrAKm','idaGlYa','DvveqLu','ig1PBJ0','C2XPy2u','qxbgufy','tffVug0','ztT0B3a','BMqGBM8','DgG6mJG','lde3nYW','Bgv4oJa','ywqGzMe','zJmY','ywWGB24','DgvZia','AMDuweO','zxj7y28','B3nWywm','zJu7yM8','CNvbrKm','zgfY','wfj6D2e','igLKpsi','mNWX','Bg93oMe','qvDQEfy','Ag92zxi','ktTIB3G','CMqTDgK','EdTMB24','CMfKAxu','Cxbhq0y','BgrZlIa','rerbz1y','CxLjDMG','oYi+','zYbZy3i','C2L6ztO','Aw5Ozxi','yNL0zxm','A2vLCa','DhbHC3m','DeHAzxm','pZWVC3a','yxjTzwq','zw4Gyw4','BMzlA1a','z2LUigC','CuD0uuq','igfJDgK','lxnWzwu','AwvSzca','yxjPys0','Dg9W','BJPJB2W','ywLUAw4','v1jnEM0','B3vWig8','qw56qvq','qMH5C2G','C3bHCMu','m3WYFda','D2HLBIa','DxDTAYa','zxmGB2y','AxvZoJC','mJu1lc4','AKjREg8','BM93','idrWEca','DePnwMO','rw5LBxK','s1DfwhK','CM51rhq','zgvIDwC','zvjjBhC','EhbVCNq','y29Kzq','qLbezKG','q0zUsNC','yM9VBgu','Bwvhyw0','AxH1t3y','AwWYq3a','CM12v1q','mxW2Fdq','Bgf0zvK','zgLUzZO','DciGC3q','sgDgvfC','DerHDge','sNzws0u','zwffEvG','z1bMCNK','zxr3B3i','zM9YBq','DxnLtg8','DeHLywW','wur6sgK','zLjoAK0','rwLhu0W','o2zSzxG','CMvJDgK','ztT0CMe','Def3uvy','nYWUncK','BI13Awq','DejJsMC','uMvJDa','vvbcufm','otLUC2f3v2S','yuXJuhO','r2jzEfO','kdi1nsW','AwzLig8','ChG7iJ4','C3LZDgu','A1vgse4','qKD2Bxa','AMvJDhm','idaGmca','Ec1KAxi','CNnVCJO','ztTWywq','tMXSr0u','ywXSoMK','Bez1BMm','B3qGD2K','BwLU','sxLgvKy','CgzcBLC','sfHHsMO','owqPida','lJm2lde','t3HYvxK','D29Yzc0','A2DYB3u','vNz3uuS','CMXHyMu','D2LUzg8','BMfjvhO','q2HPBgq','ihvWk2q','zLPPwxC','CMvHy2G','AxmGBM8','yxbWBgK','qw9psxK','BxHVrfu','AxvZoJi','mtiWzMnJEgPP','Cg9Zqxq','ltiUnsa','DdPUB24','yunIANO','rMTbu0C','B29M','psjZywS','CMvHzca','DuPVzNG','vgDpEgS','CJOXChG','oMzSzxG','yMLIu0q','oNrYyw4','DunUtwC','B3jRu3K','yxjLige','DgG6mZq','yxvSDa','veXXBKC','zxzLBNq','yMTPDc0','C3LUy3m','BML0Awe','rwH3wLy','C3fOy0q','ytK5o20','y29SCW','yNPSEKi','zK16wuu','DY5vBMK','iJ54pc8','Aw4TyM8','igLZigy','zYdcTYa','CMvWBge','AM9PBG','lNnRlw0','yw9Xww8','ic8G','mhGXoa','rKX0zeG','oIm4zdC','igvUzca','pgnHBNy','CKf2Agy','DdO3mda','Edjfna','sNrSveW','z3b1sLK','zwn0ihC','lsbvBMK','y01NEfu','ls1W','Dw5PDa','B3zWAKu','CMfWoYi','y2uSihm','twzSyKK','DMvYE2m','C29SDxq','lJGYktS','AxHLzdS','B2DVE2q','A2v5u28','rxbJzhe','DgG6mJK','CMzSB3C','ChG7B3a','CJPWB2K','t1bbAwi','y0rdvKe','z25YDhO','ALzpu0m','B0jdAwC','s2jWsMe','AguGC2K','Dw1UCZO','DgGY','uMvHC28','EwvYqw4','wenhBey','CMf3','rviGD2K','AKfhsKu','otbWEdS','vgHPCYa','Bxm6y2u','EcbZB2W','Ahq6nZa','yuXXse8','mxW0Fdm','rvnqig0','B3CTEtO','zw50lwm','oJe3ChG','BwLLCYa','AujAyxC','AtmY','odbWEdS','oJyYDMG','u2vSzwm','q2POAvK','EdTMBgu','A1PXEve','ywj7zgK','ywLUE2y','yxK6z3i','iJiIihm','AdO2mNa','B2fYza','D2fYBMK','DxjHpc8','CKnVBNq','BIbYzwW','ywfZzw8','ihrOzsa','yNvPDuC','oJrWEca','icaXlIa','C2STBM8','B2nODva','icaO','m3b4o3C','BNvMuMW','mdb2DYa','tKfpvwO','B2zMC2u','CMfTzsa','yLbfBMS','z3Lrzxe','s3zSuui','ugfksuu','AwDPBMe','rLzND2C','DxjLzca','tg5NBgy','lxnUyxa','C2v0vwK','CNqGihq','oJa7EI0','zwXUrvG','wvL5Bgi','idHWEdS','DgHLigC','o2zVBNq','DuzkrvC','BcWk','zMLSBfq','Bgv4lxm','zw1LBNq','EujHEMW','y29Uy2e','ExjOD2q','oJi1ChG','C3CYlwG','icbTzw0','iJeIig0','zwvKig8','qKPpCei','nxm0idi','igjSB2m','igL0igK','zxaGDgG','yNvPBhq','uwzwz3G','C2vSzwe','zxHWB3i','BguGy3G','m3W1Fde','C25HCa','zsbPBNm','sfDTvum','venUwNi','tLjMz3q','AwXLzcW','qM94zxm','DgPVyuq','zhrOoJu','uLPeAMG','A2v5vhK','BgvUz3q','BNrxAw4','CgfKrw4','Dwn2Dvy','v3bWs2y','vLr0svy','DgXL','yw5JztO','Dw5KoNq','Dgv4Dge','DgHtDMS','AgvHCca','BhvNAw4','qu5uAeu','Ec13Awq','qun6DuO','t2zPvNe','ys1IB3G','idaGmJq','wu5Nu20','DgL2zxS','z2uUrgu','ywrPDxm','mhGYoa','n3b4o3a','qMTNCeq','DMvJmG','CgXHEwu','BhzTq1C','z1zpBxG','quXSyu0','C2HHzg8','tePmrK4','ywjLBhS','wKDsuwW','ywLSywi','E29Wywm','zsb3ywW','B3rYB2W','B2f0mZi','y1v5CgG','rJyGywW','B25ZB2W','tgDzBKy','AguGD3i','AwqGCMC','CwTxzK8','DNvcsg4','sM9oseW','lNjLC28','AhzMzw0','wxbNCue','DhrVBtO','z2L0C04','zYbIBgK','qKnPtM0','BM8TBwu','vxn3tfK','rvjOzLm','v2XcwuC','yxrnCW','C2STDMe','ndG4oteYoeTIq2D5za','y21K','rLb3ANC','Ag9VA0y','mIWYosW','q0TLr2C','CMv0Dxi','ChbLyxi','DMnvzgG','zgvYoJa','B2TZihi','kdiYChG','y2XVC2u','DxjH','ie9IC2m','DYbNBg8','z2fTzq','zMXVyxq','Bfj3ELG','zMfRzq','zcbKAwe','t2zM','t0H2z1y','mtqZlde','Dg9WoJe','psjYB3u','DxjHimk3','Dg9tDhi','igL0ige','imk3ia','zhmGB24','yw1LihC','yNL0zu8','Cg9YDca','wYbHBMq','thnQyw8','uKfqueu','ufb5rNi','iNnUyxa','ignVBNm','C29SAwq','zgvYlxi','Cg1xwfy','CMvUDdS','m3WXFdq','ywrKAw4','y1HNwLy','tunKB0G','B3i6i2y','sg9VA3m','mJqYlc4','y3rPB24','ufKGve8','B2SGEwu','zsbWCMu','lc40nsK','Aw9UoMW','ihbVC3q','DwvxCMe','Aw50E2q','zxnJ','DKvwA3K','yxrLigy','zgvMAw4','EfjPy20','icaZlIa','CMfUihK','Esbku08','D3jHCdO','Ahrlu3u','Cg9ZDe0','oxb4ide','CMuGkhi','BhKGCg8','lM1Ulxa','s29Atvi','DgfYDdS','zePVCMq','zxj0Eq','y2fWC3u','ywDLCG','AKTmDKi','t3fODuK','DxbKyxq','t1Dht1q','EI1PBMq','CMeTCgu','AgLSza','rKffEeK','sNvTCca','nYWUocK','nJaWo20','yMX5lMK','CM1VBMS','lwfWCgu','ENPJtuW','icbMywm','zNKTy28','idaGyxu','B3rLlMu','DgfkEe8','ywnLo3C','z0LrD1G','tgn1uwq','DhjHBNm','zwfKE2q','BgfZDfC','zxzLCNK','CMuGAwC','Eun1ufe','Bgv4lxC','lKHfqva','v2zhsNe','mZrOsxD0wfu','zw5HyMW','zw1Pzxm','C291CMm','BKTdrLy','Dg9ju08','yxK6zMW','Cvfjr3C','yxbWBhK','tefzrvi','BIbPzNi','y2HLy2S','Ew9Tq0G','BLj1BNq','wgrWwu4','zdTWBge','ChG7yMe','u25HChm','yMfJA2q','C2STyNq','Awr0AdO','DxjPBMC','o3rYyw4','icaGica','ihbHC3q','BwuGlsa','Ad0Ims4','vLfKqNO','nZq4mJK','BhzLr2e','EcaXmNa','BNqTD2u','rezosLu','y2XPCgi','yM94zxm','BwfW','ohb4o2G','y3rAsNO','AguGBgK','Aw5KzxG','yMfJA2C','tgTLCwy','CMDIysG','DLrNAwy','DdmY','igq9iK0','r0XwAeq','CdO4ChG','zxKGAxm','ufbRt0S','igTPBMq','C3Ldr1u','EdTWywq','qKzxsLa','DM9Pza','vxD0yKW','EgHowg4','tvvIzxu','l3nWyw4','EMjqB0W','4Ocuihr3BW','B2jMqG','z01NtKi','qwztCfe','AfrWquS','C3zNE3C','BcbKAxm','ywX0','t1nnBwS','zgf0zsa','D2fPDgK','zhrO','C3CYlxm','Cgu9iNi','r2vzzMW','zciGC3q','B25Ligi','A0TUu2y','lxjHzgK','BMfIBgu','EuDxseG','Dxm6mti','CMvZB2W','z1LyB0m','zdPYz2i','D1rNAei','DMvKpq','Axy+','D24Gvxa','BNqZmG','igzPCNm','Fdn8nhW','Bg9JywW','uuTUALi','B2XPzca','iMzVBgq','B0TozxG','zxjHDgu','lwe9iG','mcbMAwu','ywfMvLu','igHVB2S','mhGXma','zhrOoJi','zvjLy3q','s1vsqs0','lJv6iIa','ig9IAMu','icaGia','vKXdt2e','zw50tgK','lxDPzhq','Cc1SzW','zxG7z2e','C2v0uhi','z2jHkdi','CJOJzJC','B3i6','BMC+','vvDnsYa','idi0iJ4','pt09','DgvYiJ4','uevJDKe','z2v0vwK','rvDcCfG','BgLUzwm','uhPwsLm','DgX7zgK','FdL8mhW','yMfZzq','oM5VBMu','mtiGmJe','Bw4TCge','BgvYkZa','zwqGlsa','y2vKigi','BM8GCMu','vufrzgO','BMq6Dhi','Fdr8mNW','B3i6Cg8','zKrlteK','CMvK','zM9oB3y','BLzPzxC','ztOXnha','yxGTD2K','uePPqMO','ChrY','oMjSDxi','vLfcCeO','ys9vv00','zxH0','lxaSnta','BM8Gseu','Dg9YicS','C25HChm','zwqGDgG','zMzMoW','oMLUAgu','zwyYo2y','sunWvNG','CM93CW','B0vPrhm','y2S7zM8','Bgf5oM4','icbMAwu','BNnPC3q','C2XPzgu','zZOXmxa','i2zMzJa','uMvNAxm','z1L4uNi','zKHrCKu','B25PBNa','yxrPB24','rgzrCKm','Dxm6mta','As1TB24','AgL0zs0','ohb4o3a','tgvLugq','AwDODdO','ltqTnY4','DMLLD0i','qKjKy1C','CML0Dgu','Ds1JC3m','uw1wA3y','D2H5','phbHDgG','yxiTz3i','CZPUB24','mNW1Fdy','pc9KAxy','zw50zxi','B3j5','u255CKK','ig9Uia','q3vRz3C','rhzlAxm','DdTIB3i','psiXmIi','zsGP','zfHjAuC','DhLWzum','o2nVBg8','mtaSmte','BK13tKC','BNq6mte','ywrPzw4','ywXPz24','BeLIv2u','CMvKige','ifbpuLq','iJ48l2q','ChG7Cge','z2fTzvm','yxG9iJu','psjZDZi','EwuU','uMvMDxm','z29Lqxq','C2STBwi','D2f0y2G','Awf6teG','qMHOELy','ic0GCNu','C2fUzq','C3bLzwq','y25mrhe','r0fAqMS','v0LkrKK','ELfYrvy','q2jwugC','vNbbBKC','DvPIqxm','ywz0zxi','vND0vMm','z2H0oJy','qvbvoca','CdOXmha','oJaGmca','icbJyw0','D2fZBu0','o2jHy2S','DxjHvge','ihzPysa','CgLUzYa','qNjHy2S','DffUwLe','Bg9YoIm','B2DTvwW','uKXbwKO','zxnWyxC','i2jKytK','o29Wywm','Dhm6yxu','qvD2tui','u0XWCNO','D1rRsee','pc9ZBwe','igXPDMu','EurHD28','oMnLBNq','sMvksgy','psiXlJu','zdP0CMe','Awjdvhu','B3r7ywW','Fdn8mG','D0fOzey','r1vHqLy','zxHPC3q','q0vxv0O','v3jHCha','vLbtr0S','Bw4TDgK','BwzwtM0','u0LRsfq','suzAC1O','zsDZig8','DeHLAwC','B3bLCNq','zMfJDg8','yw1PBhK','CMvKia','mcbVzIa','o2fSAwC','uMvWB3i','uurWqLC','ig9U','B24GAwq','Ewv0lG','mhHKna','ntuSlJa','C2L6zq','CMLNAhq','AgfIBgu','igfYBwK','EdOYmtq','quX4AhC','ieaG','BwvZC2e','ndzWEdS','mduPo30','mdCSmtu','A2PSB2S','C2v0qxq','Fdn8ma','lJuGms4','CZOXmha','BMv2zxi','wunkzLu','svzficG','uMforxC','tvnQs2G','C3CYlwy','B25Z','sMLptgC','EKXOq3i','yNjJzg4','DMuGB2i','te5OwKq','BMfTzq','C3rHBMm','AxjLuhi','BgTXB3i','tM8GCMu','lK1Vzhu','mtjWEca','BNq7yM8','zxz1vgy','Cg9PBNq','mJq3mJbMBejerwu','lL9Nyw0','ys1ZDW','yZKIpNC','B2fKzwq','Et8Pica','BwuOkq','u2fwze0','Aw5MBW','BMzTEvu','C2vYAwy','r1PPu0y','qMLUzgK','ndC0odm','ugXHEwu','qu1Iv1G','C3bSyxK','B3jIBKu','BwuUCMu','DgfN','yvDfuNK','C3rHDhu','mdT0B3a','z2v0sxq','BLHJtwi','zxjZyc4','C2fUCY0','A3vYyv0','yNL0zuW','EsbPBIa','igP1Bxa','BNrLBNq','CKLLDMO','DgTqwKW','DdOWo28','A2L0lwe','ldi5lc4','BhvLica','l2j1Dhq','CuDNC00','pgrPDIa','wMz4Bui','ChbUEM0','C3rYAw4','svj1DfO','DMC+','CNmGyxi','AxnmB2m','u1zyswS','BMuGAg8','sfrnta','mhG3yW','zMXLEdO','mIWUocK','igfNCMu','tuzbr2m','sw5KzxG','ig9Uihq','vgHLigG','igvUDhi','BgT0Bhy','zxi7zM8','x3j1BNq','igfYzsa','mhGYna','Fdz8na','v29YBgq','ywqU','CMvMCW','EvjVD3m','ywrKCMu','ig1HBMe','zNrUq1K','DhLxzwi','uMfKyxi','lwv2zw4','Ahq6nJu','AwDfwhm','EtOUndu','Bw91C2u','lxrVz2C','nsWYntu','zMLSBa','BwvHBG','DeLYzw0','lwnVChK','mcbYz2i','q1vSwhu','khmPihq','yxjT','yxbWzw4','C1bfCeW','C2HVD24','zsbTAw4','lNnRlw4','zgTPDa','DxrVo30','EwXLpsi','v0jjEM8','sunysMu','C28GAg8','pgj1Dhq','vNDgvNC','D1fpEhG','Ewf3','BJWVyNu','Awr0Aa','BxmGD2K','Bg9ZztO','x19ZywS','BhrLCJO','D2vPz2G','rwDSCLO','vuvTqNq','Bg9VA3m','AgvHza','D29YBgq','CgL0y2G','zw1VCNK','nc00lJu','zgL2','BMfSrNu','uwjsy1K','C2LUz2W','CM9SBgi','zLv6AM4','igzVCIa','o21HCMC','Aw1Lsxm','BMu7Fq','A3mG','igvHC2u','C0LHCK4','B3nL','uNjStuW','DhDPy2u','wLvttMu','zZOXmha','ihDOAwm','tgfUvfu','zNfgA0G','CMfUzg8','icbOB28','uxnxvM4','DhDfug0','zxrsAwC','BgLNBG','zvDWDey','Axb0ige','Aw50zxi','iefdveK','CgXPzxm','Aw5ZDge','vLv2t1O','nNb4o2i','ihjVDw4','E2zSzxG','C2STBwq','vfLjrKK','nduPo2i','ifrOzsa','CgnMr1G','zxrVBG','r2zduxO','igDHBwu','D3LbDwu','yw1L','Awzhs1G','ys1Wzxq','CMfTzs4','C28GAxq','C3bHy2u','qM90','BguIihm','BM9pr0W','oc00lJu','zwXHChm','D2L0y2G','B3r0B20','cKLUC2u','CMvMAxG','nhWXFda','tLbdx0m','EtPNCMK','ENHTvfq','oY13zwi','D0nPCha','Dg9YqwW','C0z0u1u','BMvS','r2Pnshe','zJzIowq','Ewf3t2y','Cgjeywi','Axq7Fq','ugDzwu8','Awv3','zJu7Fq','zwrnCW','ifnxlvC','zwLNAhq','Fdb8mG','tg9VAW','DdPZDge','Fdj8nxW','BLffAKq','BMTNwLK','AxqTC2m','zvbTrfa','sxfrvui','mtfWEdS','whnVsvy','xxTIywm','oJiXndC','Aw9UoMy','BM9Yzwq','DgLHDgu','iZDLzta','lJq1ktS','Bw4TDge','vvjbx1m','zMvLDa','yMXVy2S','CIb0Agu','A3DbBLm','Dw50','y0zpDeu','yxjJ','DxjHtwu','CgvKigi','u3rYAw4','yNvMzMu','zw50rwW','ig1LBNu','C29Syxm','r3ztwxu','v0LlC3K','ufHRr08','C1vYyKG','CMTqBge','DZiTyM8','DKvSrLO','ihbHz2u','B3qGica','q29Jrhi','ztOXmxa','rgLHz24','icaGDMe','C2vLBNq','C2STy2e','ru10Buu'];_0x3c15=function(){return _0x1bdc35;};return _0x3c15();}
