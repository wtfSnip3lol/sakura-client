// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.0.1
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

function _0x1a66(_0x389d4a,_0x5a7323){_0x389d4a=_0x389d4a-(-0x12*0x1f+0x25a4+0x2241*-0x1);var _0x149a8a=_0x5e6e();var _0x31e133=_0x149a8a[_0x389d4a];if(_0x1a66['MUKqHj']===undefined){var _0x3099db=function(_0x501b60){var _0x456ddf='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x10968e='',_0x3cdd10='';for(var _0x55b457=-0x596+0x19b1+-0x141b*0x1,_0x2b818a,_0x5296a9,_0x5d3b4a=0x1858+0x6*0x1b3+-0x228a;_0x5296a9=_0x501b60['charAt'](_0x5d3b4a++);~_0x5296a9&&(_0x2b818a=_0x55b457%(0x512+-0x1*-0x5ab+-0xab9)?_0x2b818a*(-0x14d7*0x1+0x1*0x1f79+0x1*-0xa62)+_0x5296a9:_0x5296a9,_0x55b457++%(0x214*0x8+-0x210a*-0x1+-0x31a6))?_0x10968e+=String['fromCharCode'](-0x2578+-0x1e7*0x13+-0x776*-0xa&_0x2b818a>>(-(-0x2dc+-0x3f*-0x4c+0x7eb*-0x2)*_0x55b457&-0x23f6+-0x18cc+0x3cc8)):-0x7*0x2ae+-0x1*0x1af8+0x2dba){_0x5296a9=_0x456ddf['indexOf'](_0x5296a9);}for(var _0x469ead=0x1c79+-0xd88+-0x9*0x1a9,_0x353e0d=_0x10968e['length'];_0x469ead<_0x353e0d;_0x469ead++){_0x3cdd10+='%'+('00'+_0x10968e['charCodeAt'](_0x469ead)['toString'](-0x195b*-0x1+0x3*0x6fb+-0x2e3c))['slice'](-(-0x698+0x133c*0x1+-0xca2));}return decodeURIComponent(_0x3cdd10);};_0x1a66['owRNtd']=_0x3099db,_0x1a66['UoIkLk']={},_0x1a66['MUKqHj']=!![];}var _0x35526c=_0x149a8a[0x141*-0x1b+-0x109+0x22e4],_0x4d7f3e=_0x389d4a+_0x35526c,_0x1e3ccd=_0x1a66['UoIkLk'][_0x4d7f3e];return!_0x1e3ccd?(_0x31e133=_0x1a66['owRNtd'](_0x31e133),_0x1a66['UoIkLk'][_0x4d7f3e]=_0x31e133):_0x31e133=_0x1e3ccd,_0x31e133;}(function(_0x1994b6,_0x18c24f){var _0x12d2bb=_0x1a66,_0x3694f5=_0x1994b6();while(!![]){try{var _0x180b54=-parseInt(_0x12d2bb(0x3d9))/(-0x1a7*-0x7+0xc31+0x17c1*-0x1)+parseInt(_0x12d2bb(0x2b8))/(-0x1ec8+0x1fe7*-0x1+-0x5b3*-0xb)+parseInt(_0x12d2bb(0x1c5))/(-0x2*0x1109+-0x2542+0x4757)+parseInt(_0x12d2bb(0x175))/(0x1*0x1e67+-0x1*-0x46+0x1*-0x1ea9)+parseInt(_0x12d2bb(0x287))/(-0x25eb+-0x13*-0x167+0xb4b)*(-parseInt(_0x12d2bb(0x363))/(0x134+0xf55+-0x1083))+-parseInt(_0x12d2bb(0x3f0))/(-0x299*0x9+-0x1663+0x1*0x2dcb)*(-parseInt(_0x12d2bb(0x339))/(-0x1*0xf85+0x49*-0x13+0x14f8))+-parseInt(_0x12d2bb(0x27d))/(-0x11df+-0x172c+0x2914)*(-parseInt(_0x12d2bb(0x371))/(-0x1ee2+-0x1b3e+-0x3a2a*-0x1));if(_0x180b54===_0x18c24f)break;else _0x3694f5['push'](_0x3694f5['shift']());}catch(_0x97d8aa){_0x3694f5['push'](_0x3694f5['shift']());}}}(_0x5e6e,-0x1a1da1+0x117b8e+0x170317),((()=>{'use strict';var _0xd5d532=_0x1a66,_0x3762cf={'gxyvQ':function(_0x38e571,_0x1eb98d){return _0x38e571===_0x1eb98d;},'AutZU':_0xd5d532(0x433),'ZfNHt':function(_0x5bc6a4,_0x3d3d42){return _0x5bc6a4!==_0x3d3d42;},'FoivA':_0xd5d532(0x37b)+_0xd5d532(0x157),'sMYlI':function(_0x197910){return _0x197910();},'dMSDq':function(_0x5569e4,_0x4e864c){return _0x5569e4(_0x4e864c);},'YWEPq':function(_0x2a5de7,_0x13c2ef){return _0x2a5de7+_0x13c2ef;},'tnxcZ':function(_0x5b6b96,_0x8d656c){return _0x5b6b96+_0x8d656c;},'tBklx':function(_0x2e0f82){return _0x2e0f82();},'HmJaP':function(_0x47888a,_0x46f658,_0x112773){return _0x47888a(_0x46f658,_0x112773);},'GkiTb':'sakur'+_0xd5d532(0x167)+_0xd5d532(0x3de)+'s','fGeyZ':'div','IAPFw':_0xd5d532(0x151)+_0xd5d532(0x167)+'v2','BfwBE':_0xd5d532(0x39e),'gdJvu':function(_0x2e7bf0,_0x1b4895){return _0x2e7bf0+_0x1b4895;},'synTH':_0xd5d532(0x236)+_0xd5d532(0x1b9)+_0xd5d532(0x318)+_0xd5d532(0x277)+_0xd5d532(0x342)+'\x20are:'+'\x0a\x0a','eaNqC':_0xd5d532(0x3ea)+_0xd5d532(0x30e)+_0xd5d532(0x45a)+'ey\x20is'+'\x20not\x20'+'injec'+_0xd5d532(0x490)+'into\x20'+_0xd5d532(0x314)+_0xd5d532(0x39c)+_0xd5d532(0x367)+'n\x20ifr'+_0xd5d532(0x41f),'yfjKC':'\x20\x202.\x20'+'The\x20p'+'age\x20h'+'as\x20no'+'t\x20bee'+_0xd5d532(0x3df)+_0xd5d532(0x1fc)+_0xd5d532(0x36c)+_0xd5d532(0x178)+'talli'+'ng.\x0a','PhJHB':_0xd5d532(0x238)+_0xd5d532(0x259)+_0xd5d532(0x151)+_0xd5d532(0x2dc)+_0xd5d532(0x26e)+_0xd5d532(0x36f)+_0xd5d532(0x2ca)+_0xd5d532(0x22d)+'he\x20ol'+_0xd5d532(0x253)+_0xd5d532(0x3e8)+_0xd5d532(0x362)+_0xd5d532(0x424),'aRinH':_0xd5d532(0x146)+_0xd5d532(0x2b5)+_0xd5d532(0x396)+'\x20page'+'\x20once'+_0xd5d532(0x2e4)+'watch'+_0xd5d532(0x385)+_0xd5d532(0x220)+_0xd5d532(0x179)+_0xd5d532(0x3e1),'qZTGs':'#ffb3'+'c7','mGoKh':'no\x20re'+_0xd5d532(0x158)+_0xd5d532(0x390)+'\x2060s\x20'+_0xd5d532(0x32b)+_0xd5d532(0x1dd)+_0xd5d532(0x3a2)+_0xd5d532(0x204)+'?','QCsGG':function(_0x4cd6e1,_0x9ed1ff){return _0x4cd6e1||_0x9ed1ff;},'JaeLF':_0xd5d532(0x38d),'rusdJ':function(_0x64ac20,_0x4ea988){return _0x64ac20^_0x4ea988;},'SErwD':function(_0x4838bc,_0x386089){return _0x4838bc/_0x386089;},'VQGSe':'#7ee0'+'a8','KTEst':function(_0x429bd6,_0x1af649){return _0x429bd6!==_0x1af649;},'JOnWW':'QCAGA','SUfxe':_0xd5d532(0x137)+_0xd5d532(0x309)+_0xd5d532(0x454),'yAKzM':_0xd5d532(0x1ba)+'8a','caiSi':_0xd5d532(0x35e)+_0xd5d532(0x479),'unwIm':_0xd5d532(0x3b7)+'g\x20·\x20','jJWQK':function(_0x2e1883,_0x1be4af){return _0x2e1883!==_0x1be4af;},'mCfuG':'F9\x20tw'+_0xd5d532(0x2de)+_0xd5d532(0x1b6)+_0xd5d532(0x313)+'ng\x20/\x20'+_0xd5d532(0x291)+'ting\x20'+'/\x20jum'+_0xd5d532(0x217)+'marks'+'\x20whic'+_0xd5d532(0x270)+'ld\x20is'+'\x20whic'+'h.','VRsVN':function(_0x5130f9,_0x32ba90){return _0x5130f9===_0x32ba90;},'vQjAB':_0xd5d532(0x408),'wSwUU':_0xd5d532(0x42f)+_0xd5d532(0x2b3)+_0xd5d532(0x25b)+'lWarz'+'\x20repo'+'rt','khfgR':function(_0x4cb6c0,_0x5eb4e9){return _0x4cb6c0+_0x5eb4e9;},'XCtMM':function(_0x3c4f2b,_0x8ba880){return _0x3c4f2b+_0x8ba880;},'VXBdF':function(_0x136946,_0x40b440){return _0x136946+_0x40b440;},'spXrI':_0xd5d532(0x205)+'d','wrFte':function(_0x513416,_0x2679e3){return _0x513416&&_0x2679e3;},'FQjvZ':function(_0x2708a6,_0x2fa303){return _0x2708a6<_0x2fa303;},'YxVKr':function(_0x472c29,_0x3c6e3e){return _0x472c29+_0x3c6e3e;},'UVUUc':function(_0x597359,_0x3cf63a){return _0x597359+_0x3cf63a;},'jowzI':'backg'+_0xd5d532(0x155)+':#150'+_0xd5d532(0x3a5)+_0xd5d532(0x286)+_0xd5d532(0x3a4)+_0xd5d532(0x243)+_0xd5d532(0x444)+'1px\x20s'+_0xd5d532(0x435)+'rgba('+'255,1'+'43,17'+_0xd5d532(0x493)+';bord'+'er-ra'+_0xd5d532(0x14d)+_0xd5d532(0x421),'nDApK':'font:'+_0xd5d532(0x3e9)+_0xd5d532(0x39d)+'i-mon'+_0xd5d532(0x456)+_0xd5d532(0x3e2)+'solas'+',mono'+_0xd5d532(0x1ee)+_0xd5d532(0x189)+_0xd5d532(0x1c0)+'w:0\x202'+_0xd5d532(0x2ba)+'0px\x20-'+'20px\x20'+_0xd5d532(0x3d2),'Uyoij':function(_0x42e4e9,_0x1c09ce){return _0x42e4e9+_0x1c09ce;},'yyajn':function(_0x1fc664,_0x70cfb9){return _0x1fc664+_0x70cfb9;},'wJXFY':function(_0x35ff46,_0x4a5785){return _0x35ff46+_0x4a5785;},'AeIqr':_0xd5d532(0x166)+'yle=\x22'+'color'+':','NHWRW':'<span'+'\x20id=\x22'+_0xd5d532(0x2db)+_0xd5d532(0x48d)+_0xd5d532(0x2b1)+_0xd5d532(0x383)+_0xd5d532(0x42b)+_0xd5d532(0x35b)+'\x22>F9\x20'+_0xd5d532(0x480)+_0xd5d532(0x136)+_0xd5d532(0x2df)+_0xd5d532(0x47b)+_0xd5d532(0x450)+_0xd5d532(0x26a)+_0xd5d532(0x1b1)+'umpin'+_0xd5d532(0x3af)+_0xd5d532(0x31b)+'ich\x20f'+_0xd5d532(0x477)+'is\x20wh'+_0xd5d532(0x2bb)+'/span'+'>','OvyTA':'max-h'+'eight'+':62vh'+_0xd5d532(0x40e)+_0xd5d532(0x359)+'rt\x20ye'+'t.\x0a\x0aT'+'his\x20p'+'anel\x20'+_0xd5d532(0x3ad)+_0xd5d532(0x397)+_0xd5d532(0x13c)+_0xd5d532(0x15e)+_0xd5d532(0x152)+_0xd5d532(0x46d)+'rame\x20'+_0xd5d532(0x413)+'\x20—\x20no'+'\x20cons'+'ole\x20n'+_0xd5d532(0x20d)+_0xd5d532(0x14f)+'\x20it\x20s'+'tays\x20'+_0xd5d532(0x2c3)+',\x20Tam'+_0xd5d532(0x38f)+_0xd5d532(0x18a)+_0xd5d532(0x355)+_0xd5d532(0x3a2)+'ectin'+_0xd5d532(0x3dc)+_0xd5d532(0x320)+_0xd5d532(0x405)+_0xd5d532(0x457)+'gin\x20g'+'ame\x20f'+_0xd5d532(0x46e)+'</pre'+'>','iONTW':'#sw2-'+'statu'+'s','sJYaq':'#sw2-'+_0xd5d532(0x1bd),'APAik':'#sw2-'+'hint','mbRNm':function(_0x3143ce,_0x4925a3){return _0x3143ce+_0x4925a3;},'IDgZN':_0xd5d532(0x22a)+'\x20\x20\x20\x20','XdYhC':'uwmk\x20'+_0xd5d532(0x2d7),'GVTFB':'yes','OimhK':_0xd5d532(0x464)+'pes\x20','YntAu':function(_0x5bbe80,_0x14d41e){return _0x5bbe80+_0x14d41e;},'KraHy':function(_0x33454e,_0x568daa){return _0x33454e<_0x568daa;},'Sjyip':function(_0x1ecfd1,_0x265fe7){return _0x1ecfd1+_0x265fe7;},'ukESb':function(_0x590a51,_0x396ed2){return _0x590a51+_0x396ed2;},'HbAOu':_0xd5d532(0x344),'sRETH':function(_0x3baf77,_0x85444a){return _0x3baf77-_0x85444a;},'xdqXB':_0xd5d532(0x181)+_0xd5d532(0x492)+_0xd5d532(0x33c)+_0xd5d532(0x2c7)+_0xd5d532(0x239)+_0xd5d532(0x2cd)+'\x20\x20\x20\x20\x20'+_0xd5d532(0x2c7)+_0xd5d532(0x200),'srLrH':function(_0x215f89,_0x2f618f){return _0x215f89*_0x2f618f;},'DfYyX':function(_0x5b5fe6,_0x719944){return _0x5b5fe6+_0x719944;},'RlSgv':'style','CJZOd':_0xd5d532(0x23a)+'ra-sw'+_0xd5d532(0x36e)+_0xd5d532(0x2af)+'itial'+'}','Unorr':_0xd5d532(0x40c),'VlJhQ':'%c[sa'+_0xd5d532(0x2b3)+_0xd5d532(0x220)+_0xd5d532(0x198)+_0xd5d532(0x321)+_0xd5d532(0x16b),'aVaxe':'color'+':','wyZWN':function(_0x59ba18,_0x59957a){return _0x59ba18===_0x59957a;},'RQtqU':function(_0x2330ee,_0x14f741){return _0x2330ee!==_0x14f741;},'Lugfa':function(_0x185b67,_0x182057){return _0x185b67!==_0x182057;},'lJWXX':function(_0x2cbb60,_0x3a1221){return _0x2cbb60!==_0x3a1221;},'AagkY':_0xd5d532(0x244)+_0xd5d532(0x375),'tIgbv':'error','BODMG':_0xd5d532(0x151)+'a-ski'+_0xd5d532(0x26e)+'z','WuzBF':function(_0x3611a1,_0x2cd1b3){return _0x3611a1(_0x2cd1b3);},'kFuEC':_0xd5d532(0x2da)+'e','EqZHr':'i32','xmPhb':function(_0x4e7bbf,_0x15f8c6){return _0x4e7bbf+_0x15f8c6;},'iChqc':function(_0x194c76,_0x6d98fe){return _0x194c76(_0x6d98fe);},'IVyco':function(_0x2cc521){return _0x2cc521();},'FhSCk':'TyjHq','sWMHF':function(_0x34e8aa,_0x1ac4f1){return _0x34e8aa!==_0x1ac4f1;},'HJTjz':_0xd5d532(0x17b),'QEHWS':_0xd5d532(0x1d8),'oWUGO':'no\x20HE'+'APU8\x20'+_0xd5d532(0x2d0)+'y\x20ins'+'tance'+'\x20not\x20'+_0xd5d532(0x3cc)+_0xd5d532(0x3b9)+'\x20wind'+_0xd5d532(0x30b)+'ityIn'+_0xd5d532(0x46c)+'e/uni'+_0xd5d532(0x1c2)+_0xd5d532(0x3b5)+'e)','WBvRZ':function(_0x1bc3f2,_0x115ba5){return _0x1bc3f2<_0x115ba5;},'REyiy':function(_0x5d3552,_0x23b7fc){return _0x5d3552+_0x23b7fc;},'ALwiz':function(_0x29ac5e,_0x46dac8){return _0x29ac5e+_0x46dac8;},'vehTe':'i16','NhfFj':_0xd5d532(0x3fa),'JLrKX':'u32','EnCtJ':function(_0x169f1b,_0x110d2c){return _0x169f1b|_0x110d2c;},'Mnxyt':function(_0x19e979,_0x524166){return _0x19e979+_0x524166;},'SGlyW':function(_0x3c074e,_0x4b8b2b){return _0x3c074e&_0x4b8b2b;},'dyKAB':function(_0x4f8224,_0x49006e){return _0x4f8224===_0x49006e;},'TLmtj':'obfF','XWYNy':function(_0x43ec11,_0x568a7f){return _0x43ec11===_0x568a7f;},'eTlCA':_0xd5d532(0x3c5),'kgSYo':function(_0xf36da5,_0x10963b){return _0xf36da5+_0x10963b;},'NOEZH':function(_0x36eca8,_0x2f85d3,_0x28c759,_0x54dcf2){return _0x36eca8(_0x2f85d3,_0x28c759,_0x54dcf2);},'qVSiB':function(_0x52e30f,_0x404b7f){return _0x52e30f+_0x404b7f;},'ytycA':function(_0x39379d,_0x5ab182){return _0x39379d+_0x5ab182;},'cjitW':_0xd5d532(0x1ac),'epSGb':function(_0x5644d0,_0x2b4ebe){return _0x5644d0^_0x2b4ebe;},'UGSpj':function(_0x42a974,_0x3cd316){return _0x42a974===_0x3cd316;},'pgZrR':function(_0x28276d,_0x4c1fce){return _0x28276d^_0x4c1fce;},'HLgLG':function(_0x16068f,_0xd1c2d6){return _0x16068f|_0xd1c2d6;},'WngxQ':function(_0x58c888,_0x148662){return _0x58c888+_0x148662;},'NTKpH':'zMpqq','YZASb':function(_0x9ea1d4,_0x19f1a4){return _0x9ea1d4<_0x19f1a4;},'spOGV':function(_0x195fa1,_0x28956d){return _0x195fa1+_0x28956d;},'DeYAi':_0xd5d532(0x42c),'nulHU':function(_0x69ed6,_0x50f3cf){return _0x69ed6+_0x50f3cf;},'GOFSl':_0xd5d532(0x2ad)+_0xd5d532(0x19f)+'\x20end\x20'+'0x','dxniw':function(_0x479bf0,_0x5703c3){return _0x479bf0===_0x5703c3;},'RYlye':function(_0x90fbcc,_0x123aa3){return _0x90fbcc===_0x123aa3;},'dckqn':_0xd5d532(0x305),'Xmluh':function(_0x4a1027,_0x36b416){return _0x4a1027+_0x36b416;},'gjRii':function(_0x2e360a,_0x64302c){return _0x2e360a+_0x64302c;},'HFIDk':function(_0x38b9c0,_0x47778c){return _0x38b9c0+_0x47778c;},'IgYHq':_0xd5d532(0x29b),'rAxgP':_0xd5d532(0x461)+'VE','PskQs':function(_0x2014a1,_0xad017a){return _0x2014a1+_0xad017a;},'tKncW':_0xd5d532(0x353)+_0xd5d532(0x1b0)+_0xd5d532(0x15d),'qwujW':_0xd5d532(0x353)+'Insta'+'nceWr'+_0xd5d532(0x250),'Aprve':'undef'+'ined','SAqxL':function(_0xca9aee){return _0xca9aee();},'PEedC':function(_0x266e7f,_0x61fc2){return _0x266e7f<_0x61fc2;},'tIKWe':function(_0xfcee7a,_0x5b29d7){return _0xfcee7a!==_0x5b29d7;},'LUFTx':function(_0x2449a7,_0x42adf6,_0x39e7d2){return _0x2449a7(_0x42adf6,_0x39e7d2);},'gVnCw':'vOGqr','pcIzX':function(_0x5ca936,_0x32d968){return _0x5ca936+_0x32d968;},'Gsvhs':'repor'+'t','hCFBM':function(_0x27857a,_0x20a08c){return _0x27857a===_0x20a08c;},'DiSdp':'7|9|1'+_0xd5d532(0x347)+_0xd5d532(0x3fe)+_0xd5d532(0x206)+_0xd5d532(0x1b2)+_0xd5d532(0x29c)+'11|6','KmpSt':function(_0x25bff7,_0x402246){return _0x25bff7===_0x402246;},'itqyv':function(_0x4b57fe,_0x5110d5){return _0x4b57fe===_0x5110d5;},'frxTv':function(_0x2f0d8d,_0x44ed5d){return _0x2f0d8d^_0x44ed5d;},'ehksu':_0xd5d532(0x1dc),'QAsMb':function(_0x3b7846,_0x159e7e){return _0x3b7846+_0x159e7e;},'kQyKr':_0xd5d532(0x199)+'y\x20fai'+_0xd5d532(0x1e2),'uwLPz':_0xd5d532(0x2cc)+_0xd5d532(0x3b7)+'g\x20fai'+_0xd5d532(0x1e2),'hYCDk':function(_0xc95745,_0xbe509a){return _0xc95745>_0xbe509a;},'FQlhn':function(_0x2ff5a4,_0x2fb498){return _0x2ff5a4===_0x2fb498;},'CBTfD':_0xd5d532(0x16d),'OeUIL':function(_0x7b67f1,_0x1e4e70){return _0x7b67f1+_0x1e4e70;},'bEpwa':'captu'+_0xd5d532(0x299),'JxVRD':'\x20obje'+_0xd5d532(0x42a)+'\x20but\x20'+_0xd5d532(0x403)+_0xd5d532(0x334)+'lds.\x20','MtAKi':'No\x20re'+_0xd5d532(0x372)+_0xd5d532(0x33d)+'\x20so\x20e'+_0xd5d532(0x176)+_0xd5d532(0x264)+'t\x20was'+_0xd5d532(0x218)+_0xd5d532(0x26b)+_0xd5d532(0x410)+'e.','lHLVY':function(_0x42ccf0,_0x564590){return _0x42ccf0!==_0x564590;},'kwsTY':_0xd5d532(0x3f2),'MXjrZ':_0xd5d532(0x497)+'\x20read'+'s\x20can'+'not\x20w'+_0xd5d532(0x2c9)+'ntil\x20'+_0xd5d532(0x379)+_0xd5d532(0x1cf)+'eap\x20i'+_0xd5d532(0x2d4)+_0xd5d532(0x427)+_0xd5d532(0x1b5)+_0xd5d532(0x15f)+_0xd5d532(0x40b)+_0xd5d532(0x44b)+'ames.','HxKyn':function(_0x1f6d03,_0x549428){return _0x1f6d03===_0x549428;},'IIvCU':_0xd5d532(0x332)+_0xd5d532(0x279)+'tyWeb'+_0xd5d532(0x2eb)+_0xd5d532(0x1bc)+_0xd5d532(0x48e)+_0xd5d532(0x171)+_0xd5d532(0x2c5)+_0xd5d532(0x19c)+'\x20-\x20ca'+_0xd5d532(0x425)+'\x20is\x20r'+'unnin'+_0xd5d532(0x193)+_0xd5d532(0x37c),'sobcG':function(_0x312d5e,_0x188a31){return _0x312d5e+_0x188a31;},'jQCYh':function(_0xfe728a,_0x3c87c4){return _0xfe728a+_0x3c87c4;},'dQMzd':_0xd5d532(0x44f)+_0xd5d532(0x44e)+'appli'+_0xd5d532(0x2c8)+_0xd5d532(0x2ed)+'FPSco'+_0xd5d532(0x298)+_0xd5d532(0x32e)+_0xd5d532(0x3c4)+'red\x20y'+'et.\x20','UwwWl':function(_0x3ffdd4){return _0x3ffdd4();},'Odlbu':'Vzfsv','XcELk':_0xd5d532(0x366),'flBXV':_0xd5d532(0x2ff),'jGSPF':function(_0xa3bba8,_0x53f1cd){return _0xa3bba8<_0x53f1cd;},'lHBQY':function(_0x134164,_0x50a9c3,_0x58644c){return _0x134164(_0x50a9c3,_0x58644c);},'jmWYM':'playe'+'r','wQnsc':'__sak'+'ura_s'+_0xd5d532(0x226),'OByso':'===SA'+_0xd5d532(0x488)+_0xd5d532(0x1eb)+'WARZ-'+'BEGIN'+_0xd5d532(0x358),'uChYk':_0xd5d532(0x2d9)+_0xd5d532(0x488)+_0xd5d532(0x1eb)+'WARZ-'+_0xd5d532(0x1a2)+'=','LMuFQ':_0xd5d532(0x42f)+_0xd5d532(0x2b3)+'\x20SW-W'+_0xd5d532(0x18e)+'R\x20ACT'+'IVE\x20('+_0xd5d532(0x27b)+_0xd5d532(0x1c8)+')','GKOXG':'%c[sa'+'kura]'+_0xd5d532(0x18b)+_0xd5d532(0x156)+'TIVE','Afzyf':function(_0x10a9c4,_0x57bb84){return _0x10a9c4+_0x57bb84;},'ucrTk':_0xd5d532(0x240)+'ge','gVZJE':_0xd5d532(0x28f)+'ntent'+_0xd5d532(0x33b)+'d','QgEvP':_0xd5d532(0x3cb)+_0xd5d532(0x1b7)+'ht:70'+'0','pkjgO':_0xd5d532(0x151)+'a-sw','qHUuh':'Assem'+'bly-C'+'Sharp'+_0xd5d532(0x2f3),'qkcyA':_0xd5d532(0x377)+'cofor'+_0xd5d532(0x330)+_0xd5d532(0x38c)+'ll','UDxEc':'cInpu'+_0xd5d532(0x274),'dclgw':'__Gen'+_0xd5d532(0x407)+'d','eMVqu':'obfB','pLvBS':_0xd5d532(0x31a)+'ntrol'+'ler','PDFbE':_0xd5d532(0x333)+'meMan'+_0xd5d532(0x21b)};var _0x54d273=location[_0xd5d532(0x1af)+_0xd5d532(0x336)]||'',_0x249d1b=/(^|\.)www\.crazygames\.com$/['test'](_0x54d273),_0x1f4076=/(^|\.)games\.crazygames\.com$/[_0xd5d532(0x257)](_0x54d273),_0x1df8f7=/(^|\.)crazygames\.com$/[_0xd5d532(0x257)](_0x54d273)&&!_0x249d1b&&!_0x1f4076,_0x4cf714=_0x249d1b?_0xd5d532(0x19e)+'l':_0x1f4076?'wrapp'+'er':_0x3762cf[_0xd5d532(0x2e5)];if(!_0x249d1b&&!_0x1f4076&&!_0x1df8f7)return;var _0x332217='#ff8f'+'b1',_0x7a511=_0x3762cf[_0xd5d532(0x468)],_0x177714=_0x3762cf[_0xd5d532(0x2f0)],_0x34cdd9=_0x3762cf['uChYk'];if(_0x1f4076){if(_0xd5d532(0x3b8)!=='hDzIZ'){window[_0xd5d532(0x306)+'entLi'+'stene'+'r']('messa'+'ge',function(_0xf4249c){var _0x24b473=_0xd5d532,_0x3c50ac=_0xf4249c[_0x24b473(0x297)];if(!_0x3c50ac||_0x3c50ac[_0x24b473(0x147)+_0x24b473(0x295)]!==_0x7a511)return;try{if(_0x3762cf[_0x24b473(0x164)](_0x24b473(0x433),_0x3762cf[_0x24b473(0x23b)])){if(window['paren'+'t']&&window['paren'+'t']!==window)window[_0x24b473(0x39b)+'t'][_0x24b473(0x3a9)+'essag'+'e'](_0x3c50ac,'*');if(window[_0x24b473(0x44d)]&&_0x3762cf[_0x24b473(0x48c)](window['top'],window))window[_0x24b473(0x44d)][_0x24b473(0x3a9)+_0x24b473(0x43c)+'e'](_0x3c50ac,'*');}else _0x1f8c2c[_0x24b473(0x2a2)]=_0x42938b(_0x2ae00c&&_0x1c4445['messa'+'ge']||_0xff761);}catch(_0x36647e){}}),console['log'](_0x3762cf[_0xd5d532(0x22b)],_0xd5d532(0x207)+':'+_0x332217);return;}else{if(_0x3762cf[_0xd5d532(0x48c)](_0x488518,_0x3762cf[_0xd5d532(0x1f0)]))return;var _0x38e598=_0x3762cf[_0xd5d532(0x401)](_0x1f41b1),_0x445c2b=_0x3762cf[_0xd5d532(0x32a)](_0x18ccb9,_0x38e598);if(!_0x349771){_0x161c47=_0x445c2b,_0x9dc04a=[],_0x164ad5(_0xd5d532(0x38b)+'t',{'report':_0x3762cf['sMYlI'](_0x4e5cb1)});return;}_0xdde2e7=[];for(var _0x50d2af in _0x445c2b){var _0x360b6f=_0x2b3be9[_0x50d2af],_0x394528=_0x445c2b[_0x50d2af];if(_0x3762cf[_0xd5d532(0x48c)](_0x360b6f,_0x394528))_0x6e6283[_0xd5d532(0x266)](_0x3762cf[_0xd5d532(0x2d2)](_0x3762cf['tnxcZ'](_0x50d2af+':\x20'+_0x360b6f,_0xd5d532(0x2ec)),_0x394528));}_0x35b010=_0x445c2b,_0x4f30f3(_0xd5d532(0x38b)+'t',{'report':_0x3762cf['tBklx'](_0x4653e3)});}}if(_0x249d1b){console[_0xd5d532(0x1db)](_0x3762cf['GKOXG'],_0x3762cf[_0xd5d532(0x482)](_0x3762cf[_0xd5d532(0x1df)]('color'+':',_0x332217),';font'+_0xd5d532(0x1b7)+_0xd5d532(0x281)+'0'),{'host':_0x54d273});var _0x4133ad={'set':function(){},'command':function(){}};function _0x3bbba9(_0x3c2618,_0xc31a25){var _0x37fd8b=_0xd5d532,_0x3b72c7={'__sakura':_0x7a511,'kind':'cmd','cmd':_0x3c2618,'arg':_0xc31a25};try{if('JFQyI'==='giOiC'){try{var _0x2c59dc=_0x3762cf[_0x37fd8b(0x48c)](typeof _0x562639,_0x37fd8b(0x138)+_0x37fd8b(0x495))?_0x4d7f70[_0x37fd8b(0x353)+'Insta'+'nce']||_0x5b3052[_0x37fd8b(0x353)+_0x37fd8b(0x194)]||_0xda0c5['game']:null;if(_0x2c59dc&&_0x2c59dc['Modul'+'e']&&_0x2c59dc[_0x37fd8b(0x47d)+'e'][_0x37fd8b(0x1f1)+'8']&&_0x2c59dc[_0x37fd8b(0x47d)+'e'][_0x37fd8b(0x1f1)+'8']['buffe'+'r'])return _0x2c59dc[_0x37fd8b(0x47d)+'e'][_0x37fd8b(0x1f1)+'8'];}catch(_0x29f9c4){}return null;}else{var _0x15b34d=new BroadcastChannel('sakur'+'a-sw');_0x15b34d['postM'+_0x37fd8b(0x43c)+'e'](_0x3b72c7),_0x3762cf['HmJaP'](setTimeout,function(){var _0x44fa3f=_0x37fd8b;try{_0x15b34d[_0x44fa3f(0x432)]();}catch(_0x33d79d){}},0x2*0x9ad+0xe*-0x5a+0x1c*-0x7b);}}catch(_0xb3f097){}}function _0x37cb2a(){var _0x69168e=_0xd5d532,_0x1880d9=document[_0x69168e(0x154)+_0x69168e(0x315)+_0x69168e(0x3cd)](_0x69168e(0x151)+_0x69168e(0x167)+'v2');if(_0x1880d9)return _0x1880d9;if(!document[_0x69168e(0x153)]||!document['body'][_0x69168e(0x402)+_0x69168e(0x26d)+'d'])return null;try{if(!document['getEl'+_0x69168e(0x315)+'ById'](_0x3762cf['GkiTb'])){var _0x1ab592=document[_0x69168e(0x389)+_0x69168e(0x2c1)+'ent'](_0x69168e(0x2b1));_0x1ab592['id']=_0x3762cf['GkiTb'],_0x1ab592['textC'+_0x69168e(0x32f)+'t']=_0x69168e(0x23a)+_0x69168e(0x3ef)+_0x69168e(0x36e)+_0x69168e(0x2af)+'itial'+'}',(document['head']||document['docum'+_0x69168e(0x17e)+_0x69168e(0x315)])[_0x69168e(0x402)+'dChil'+'d'](_0x1ab592);}return _0x1880d9=document['creat'+'eElem'+'ent'](_0x3762cf['fGeyZ']),_0x1880d9['id']=_0x3762cf['IAPFw'],document['body'][_0x69168e(0x402)+_0x69168e(0x26d)+'d'](_0x1880d9),_0x1880d9;}catch(_0x31ae0d){return null;}}function _0xab65c7(){var _0x438655=_0xd5d532,_0x2ed9ec={'YUtGR':function(_0x4678e4,_0x46e72b){return _0x4678e4+_0x46e72b;}};if(_0x438655(0x1d1)!==_0x3762cf['BfwBE']){var _0x42ace6=_0x37cb2a();if(!_0x42ace6)return _0x4133ad;if(_0x42ace6['datas'+'et'][_0x438655(0x285)])return _0x42ace6['api'];try{return _0x26d62a(_0x42ace6);}catch(_0x3f91d0){return _0x42ace6['datas'+'et'][_0x438655(0x285)]='1',_0x42ace6[_0x438655(0x285)]=_0x4133ad,console[_0x438655(0x13a)]('%c[sa'+_0x438655(0x2b3)+'\x20pane'+'l\x20dis'+_0x438655(0x2ee),'color'+':'+_0x332217,_0x3f91d0),_0x4133ad;}}else{_0x253c23[_0x402808]=_0x2ed9ec[_0x438655(0x373)]('0x',_0x31e6fc[_0x18f381]['ptr'][_0x438655(0x1cb)+'ing'](0x81*0x1+0x1337*-0x2+0x25fd));if(_0x376617[_0x5c3784]['repla'+'ced'])_0x4aeba4['push'](_0x1568e2);}}function _0x26d62a(_0x4f5041){var _0x1ab1b3=_0xd5d532,_0x555e4c={'TQZJF':_0x3762cf[_0x1ab1b3(0x210)],'QoEyU':function(_0x30bdb1,_0x4fb1df){return _0x30bdb1+_0x4fb1df;},'ZWSYS':function(_0x14f5da){return _0x14f5da();},'HYeoW':function(_0x222a49,_0x20a0a4){var _0x34baa4=_0x1ab1b3;return _0x3762cf[_0x34baa4(0x1e7)](_0x222a49,_0x20a0a4);},'evEsp':function(_0xb331b5,_0xd92928){var _0x399c2c=_0x1ab1b3;return _0x3762cf[_0x399c2c(0x289)](_0xb331b5,_0xd92928);},'URyul':_0x1ab1b3(0x42f)+'kura]'+_0x1ab1b3(0x3e0)+'RAPPE'+_0x1ab1b3(0x3db)+'IVE\x20('+_0x1ab1b3(0x27b)+_0x1ab1b3(0x1c8)+')','vZEPf':function(_0x4eec02,_0x45b276){return _0x4eec02+_0x45b276;},'QVSWT':function(_0x461b09,_0x572ae7){return _0x3762cf['dMSDq'](_0x461b09,_0x572ae7);}};_0x4f5041[_0x1ab1b3(0x2b1)][_0x1ab1b3(0x387)+'xt']=_0x3762cf[_0x1ab1b3(0x29e)](_0x3762cf[_0x1ab1b3(0x3a7)](_0x3762cf['UVUUc']('posit'+_0x1ab1b3(0x300)+'ixed;'+_0x1ab1b3(0x2fe)+_0x1ab1b3(0x465)+_0x1ab1b3(0x165)+'2px;z'+'-inde'+'x:214'+_0x1ab1b3(0x351)+_0x1ab1b3(0x15b)+_0x1ab1b3(0x3a1)+_0x1ab1b3(0x135)+'vw,62'+_0x1ab1b3(0x2a1)+_0x1ab1b3(0x1f7)+_0x1ab1b3(0x45b)+_0x1ab1b3(0x38e)+';',_0x3762cf['jowzI']),_0x3762cf[_0x1ab1b3(0x32c)]),'displ'+'ay:fl'+'ex;fl'+_0x1ab1b3(0x3a8)+_0x1ab1b3(0x40f)+'on:co'+_0x1ab1b3(0x28c)+_0x1ab1b3(0x48f)+'low:h'+_0x1ab1b3(0x222)+';'),_0x4f5041['inner'+_0x1ab1b3(0x2f2)]=_0x3762cf['Uyoij'](_0x3762cf[_0x1ab1b3(0x41b)](_0x3762cf['Uyoij'](_0x3762cf['wJXFY'](_0x3762cf[_0x1ab1b3(0x29f)](_0x1ab1b3(0x1c9)+'style'+'=\x22pad'+_0x1ab1b3(0x1c6)+'9px\x201'+_0x1ab1b3(0x14b)+_0x1ab1b3(0x1ad)+'-bott'+_0x1ab1b3(0x3d8)+'x\x20sol'+'id\x20rg'+'ba(25'+'5,143'+_0x1ab1b3(0x292)+_0x1ab1b3(0x2e0)+_0x1ab1b3(0x3ed)+_0x1ab1b3(0x1e5)+_0x1ab1b3(0x486)+':8px;'+_0x1ab1b3(0x2d1)+_0x1ab1b3(0x21c)+_0x1ab1b3(0x3e6)+'ter;f'+_0x1ab1b3(0x1ea)+_0x1ab1b3(0x1fe)+'to;\x22>'+_0x3762cf[_0x1ab1b3(0x2e1)]+_0x332217+(_0x1ab1b3(0x39f)+_0x1ab1b3(0x466)+_0x1ab1b3(0x445)+_0x1ab1b3(0x20b)+_0x1ab1b3(0x354))+(_0x1ab1b3(0x2b4)+'\x20id=\x22'+_0x1ab1b3(0x398)+_0x1ab1b3(0x386)+'\x22\x20sty'+'le=\x22c'+'olor:'+'#bda9'+'c9\x22>w'+_0x1ab1b3(0x2ab)+'g\x20for'+_0x1ab1b3(0x396)+'\x20fram'+'e…</s'+_0x1ab1b3(0x1d2))+(_0x1ab1b3(0x162)+'on\x20id'+_0x1ab1b3(0x349)+_0x1ab1b3(0x2b0)+'\x22\x20sty'+_0x1ab1b3(0x159)+_0x1ab1b3(0x3ed)+'y:non'+'e;mar'+_0x1ab1b3(0x2e2)+_0x1ab1b3(0x3dd)+'uto;b'+_0x1ab1b3(0x15a)+_0x1ab1b3(0x1da)),_0x332217),_0x1ab1b3(0x429)+_0x1ab1b3(0x3d4)+'color'+':#2a0'+_0x1ab1b3(0x19a)+'order'+_0x1ab1b3(0x3ca)+_0x1ab1b3(0x310)+_0x1ab1b3(0x2c6)+_0x1ab1b3(0x1c6)+_0x1ab1b3(0x245)+'0px;f'+_0x1ab1b3(0x369)+_0x1ab1b3(0x45b)+':700;'+'curso'+'r:poi'+_0x1ab1b3(0x3d3)+'\x22>Cop'+_0x1ab1b3(0x2dd)+'N</bu'+_0x1ab1b3(0x41e)),'<butt'+'on\x20id'+'=\x22sw2'+_0x1ab1b3(0x471)+_0x1ab1b3(0x1fa)+_0x1ab1b3(0x3f5)+_0x1ab1b3(0x2e9)+_0x1ab1b3(0x3f7)+_0x1ab1b3(0x3ff)+_0x1ab1b3(0x331)+'order'+':1px\x20'+'solid'+'\x20rgba'+_0x1ab1b3(0x31f)+_0x1ab1b3(0x44c)+'77,.4'+_0x1ab1b3(0x1e6)+_0x1ab1b3(0x23d)+_0x1ab1b3(0x170)+';bord'+_0x1ab1b3(0x272)+'dius:'+_0x1ab1b3(0x451)+'addin'+_0x1ab1b3(0x3be)+'\x208px;'+_0x1ab1b3(0x1ae)+'r:poi'+'nter;'+'\x22>x</'+'butto'+'n>'),'</div'+'>')+(_0x1ab1b3(0x1c9)+'style'+'=\x22pad'+'ding:'+_0x1ab1b3(0x404)+'2px;b'+_0x1ab1b3(0x1ad)+'-bott'+_0x1ab1b3(0x3d8)+_0x1ab1b3(0x23f)+_0x1ab1b3(0x183)+_0x1ab1b3(0x438)+_0x1ab1b3(0x391)+_0x1ab1b3(0x292)+_0x1ab1b3(0x2c4)+_0x1ab1b3(0x436)+_0x1ab1b3(0x3ab)+_0x1ab1b3(0x324)+_0x1ab1b3(0x3f1)+';alig'+_0x1ab1b3(0x3ee)+_0x1ab1b3(0x46a)+_0x1ab1b3(0x3d3)+'flex:'+'0\x200\x20a'+_0x1ab1b3(0x472)+'>')+(_0x1ab1b3(0x162)+'on\x20id'+'=\x22sw2'+_0x1ab1b3(0x3a6)+_0x1ab1b3(0x252)+_0x1ab1b3(0x2b6)+'ackgr'+_0x1ab1b3(0x1da)+'trans'+_0x1ab1b3(0x39b)+'t;bor'+'der:1'+_0x1ab1b3(0x19d)+'lid\x20r'+'gba(2'+'55,14'+_0x1ab1b3(0x41d)+_0x1ab1b3(0x3c2)+_0x1ab1b3(0x207)+':#f7e'+'ef5;b'+_0x1ab1b3(0x1ad)+_0x1ab1b3(0x3ca)+'us:7p'+_0x1ab1b3(0x2c6)+_0x1ab1b3(0x1c6)+_0x1ab1b3(0x3ec)+'px;cu'+_0x1ab1b3(0x35f)+'point'+'er;\x22>'+'Snaps'+'hot\x20('+_0x1ab1b3(0x2cf)+'butto'+'n>'),_0x3762cf[_0x1ab1b3(0x37d)])+(_0x1ab1b3(0x325)+'>')+('<pre\x20'+_0x1ab1b3(0x3f9)+'w2-ou'+'t\x22\x20st'+_0x1ab1b3(0x23c)+_0x1ab1b3(0x1f3)+_0x1ab1b3(0x186)+'addin'+_0x1ab1b3(0x3ac)+_0x1ab1b3(0x24c)+_0x1ab1b3(0x2a0)+'rflow'+_0x1ab1b3(0x144)+_0x1ab1b3(0x47e)+_0x1ab1b3(0x2c0)+_0x1ab1b3(0x1b3)+'white'+'-spac'+'e:pre'+_0x1ab1b3(0x29a)+';word'+_0x1ab1b3(0x161)+'k:bre'+_0x1ab1b3(0x237)+_0x1ab1b3(0x3a3)+_0x1ab1b3(0x3ce)+_0x1ab1b3(0x27f)+';')+_0x3762cf[_0x1ab1b3(0x3f4)];var _0x35fe0c=_0x4f5041['query'+_0x1ab1b3(0x197)+'tor'](_0x3762cf[_0x1ab1b3(0x1a0)]),_0x55ae8b=_0x4f5041['query'+_0x1ab1b3(0x197)+_0x1ab1b3(0x356)]('#sw2-'+_0x1ab1b3(0x311)),_0x5234fe=_0x4f5041['query'+'Selec'+_0x1ab1b3(0x356)]('#sw2-'+'copy'),_0x46e57a=_0x4f5041[_0x1ab1b3(0x141)+_0x1ab1b3(0x197)+_0x1ab1b3(0x356)](_0x1ab1b3(0x214)+'x'),_0x78b622=_0x4f5041[_0x1ab1b3(0x141)+_0x1ab1b3(0x197)+'tor'](_0x3762cf[_0x1ab1b3(0x3e5)]),_0x4b72d5=_0x4f5041[_0x1ab1b3(0x141)+_0x1ab1b3(0x197)+'tor'](_0x3762cf['APAik']),_0x3587fb=null;if(_0x46e57a)_0x46e57a['oncli'+'ck']=function(){var _0x3ca64e=_0x1ab1b3;try{_0x4f5041[_0x3ca64e(0x2d3)+'e']();}catch(_0x3acaac){}};if(_0x78b622)_0x78b622[_0x1ab1b3(0x469)+'ck']=function(){var _0x5b4c9c=_0x1ab1b3;if(_0x5b4c9c(0x26c)!=='xNmqa'){if(_0x2c0ffd[_0xfa421]['hook']&&_0x333d6a[_0x293d74][_0x5b4c9c(0x426)]['appli'+'ed'])_0x4b8c1e++;}else _0x3bbba9('snaps'+_0x5b4c9c(0x157));};if(_0x5234fe)_0x5234fe['oncli'+'ck']=function(){var _0x1108b0=_0x1ab1b3,_0x110f47=_0x555e4c['QoEyU'](_0x555e4c[_0x1108b0(0x3c9)](_0x555e4c['QoEyU'](_0x177714,'\x0a'),_0x3587fb?JSON[_0x1108b0(0x190)+'gify'](_0x3587fb,null,-0x1*-0x2e3+-0x1*-0x1771+-0x1a53):''),'\x0a')+_0x34cdd9,_0x28dce3=function(){var _0x21bad3=_0x1108b0;if(_0x5234fe)_0x5234fe[_0x21bad3(0x36d)+_0x21bad3(0x32f)+'t']=_0x555e4c['TQZJF'];};if(navigator[_0x1108b0(0x303)+_0x1108b0(0x49a)]&&navigator[_0x1108b0(0x303)+_0x1108b0(0x49a)][_0x1108b0(0x3d5)+'Text'])navigator['clipb'+'oard'][_0x1108b0(0x3d5)+_0x1108b0(0x202)](_0x110f47)['then'](_0x28dce3,function(){_0x4d7835();});else _0x555e4c['ZWSYS'](_0x4d7835);function _0x4d7835(){var _0x3bf636=_0x1108b0,_0x64b675=document['creat'+_0x3bf636(0x2c1)+_0x3bf636(0x241)](_0x3bf636(0x1f2)+'rea');_0x64b675['value']=_0x110f47;if(!document[_0x3bf636(0x153)])return;document['body'][_0x3bf636(0x402)+'dChil'+'d'](_0x64b675),_0x64b675['selec'+'t']();try{document[_0x3bf636(0x2d5)+_0x3bf636(0x1a8)+'d']('copy'),_0x28dce3();}catch(_0x19021c){}_0x64b675['remov'+'e']();}};setTimeout(function(){var _0x395504=_0x1ab1b3;if(_0x3762cf['ZfNHt']('nWeII',_0x395504(0x328))){var _0x286199={'vWZGc':function(_0xef620c,_0x4d9718){var _0x8789d=_0x395504;return _0x555e4c[_0x8789d(0x3c3)](_0xef620c,_0x4d9718);},'QzMaZ':function(_0x862898){return _0x862898();},'bkueW':function(_0x2eab3a,_0x2813a3){return _0x555e4c['evEsp'](_0x2eab3a,_0x2813a3);}},_0x2edb57=![],_0x2b6978=-0x1*-0xe2f+-0x2489+0x2*0xb2d;_0x16535f(_0x364fa6()),function _0x49708e(){var _0x348d1a=_0x395504,_0x208cb4=_0x11ddc0[_0x348d1a(0x3b6)+_0x348d1a(0x163)+_0x348d1a(0x499)]&&_0x32981a[_0x348d1a(0x3b6)+_0x348d1a(0x163)+_0x348d1a(0x499)][_0x348d1a(0x455)+'me']||null,_0x2876cc=_0x208cb4&&_0x208cb4[_0x348d1a(0x2b9)+'pCont'+_0x348d1a(0x48a)]&&_0x208cb4[_0x348d1a(0x2b9)+'pCont'+'ext'][_0x348d1a(0x3d6)+'tData'];_0x286199[_0x348d1a(0x172)](_0x2876cc,!_0x2edb57)&&(_0x2edb57=_0x493b70());_0x2b6978++,_0x2d89d5(_0x286199['QzMaZ'](_0x1c7414));if(!_0x2edb57&&_0x286199['bkueW'](_0x2b6978,0x3*-0xad8+-0xef*0x25+-0x443f*-0x1))_0x4ba724(_0x49708e,0x705*-0x1+0x64c*0x3+-0x40f);else{if(!_0x1ff5a0['keys'](_0x2e0989)['lengt'+'h']&&_0x2b6978<0x14ab+-0x15b4+0x5*0x71)_0x297605(_0x49708e,-0xc54+0x1e7d+-0x1*0xa59);else _0x1413bc(_0x49708e,-0x75b*0x5+0x523+0x2454);}}();}else{var _0x2abb06=(_0x395504(0x265)+'|2|0')['split']('|'),_0x422e05=0x85f*-0x3+0x1607*-0x1+-0xbc9*-0x4;while(!![]){switch(_0x2abb06[_0x422e05++]){case'0':_0x55ae8b['textC'+_0x395504(0x32f)+'t']=_0x3762cf[_0x395504(0x2d2)](_0x3762cf['tnxcZ'](_0x3762cf[_0x395504(0x3a7)](_0x3762cf[_0x395504(0x14a)](_0x395504(0x184)+_0x395504(0x46d)+_0x395504(0x395)+_0x395504(0x301)+'\x20post'+'ed\x20a\x20'+'singl'+'e\x20rep'+_0x395504(0x290)+'\x0a','This\x20'+_0x395504(0x47f)+_0x395504(0x3c0)+'es\x20th'+_0x395504(0x268)+_0x395504(0x409)+_0x395504(0x2b7)+_0x395504(0x2f6)+'alled'+'\x20and\x20'+'runni'+_0x395504(0x185)+_0x395504(0x1a4)+_0x395504(0x19e)+'l,\x0a'),_0x3762cf['synTH'])+_0x3762cf[_0x395504(0x229)],_0x3762cf[_0x395504(0x45e)])+_0x3762cf[_0x395504(0x45d)]+('\x20\x20\x20\x20\x20'+'insta'+'lled\x20'+_0x395504(0x284)+'\x20copi'+_0x395504(0x177)+'\x20UWMK'+_0x395504(0x271)+_0x395504(0x203)+_0x395504(0x496)+_0x395504(0x374)+_0x395504(0x348)+_0x395504(0x307)+_0x395504(0x34f)+_0x395504(0x13d)),_0x3762cf['aRinH']);continue;case'1':if(_0x3587fb)return;continue;case'2':_0x35fe0c[_0x395504(0x2b1)]['color']=_0x3762cf['qZTGs'];continue;case'3':_0x35fe0c['textC'+'onten'+'t']=_0x3762cf[_0x395504(0x211)];continue;case'4':if(_0x3762cf[_0x395504(0x28b)](!_0x35fe0c,!_0x55ae8b))return;continue;}break;}}},-0x1*-0xd558+-0x2*-0x96dd+-0x118b2*0x1);var _0x4458cb={'set':function(_0x442238){var _0x2386cc=_0x1ab1b3,_0xb06e19={'NjvhV':_0x3762cf[_0x2386cc(0x28e)],'jqNwv':'obfF','rqmTM':'f32','StSIN':function(_0x5c1a05,_0x76bacc){var _0x409231=_0x2386cc;return _0x3762cf[_0x409231(0x14a)](_0x5c1a05,_0x76bacc);},'ecUTg':_0x2386cc(0x329),'CcENg':function(_0x1ff4c9,_0x1418bb){var _0x41558a=_0x2386cc;return _0x3762cf[_0x41558a(0x3a7)](_0x1ff4c9,_0x1418bb);},'ngBNo':function(_0x34b0d5,_0x31c5ef,_0x4084b8,_0x23c59a){return _0x34b0d5(_0x31c5ef,_0x4084b8,_0x23c59a);},'uGWWM':function(_0x14b806,_0x1036cb){return _0x14b806|_0x1036cb;},'vNBHH':function(_0x1ec747,_0x3eb82e){return _0x3762cf['gxyvQ'](_0x1ec747,_0x3eb82e);},'rRfTY':'obfI','QLMsW':function(_0x2d7142,_0x53f53e){var _0x297e05=_0x2386cc;return _0x3762cf[_0x297e05(0x1aa)](_0x2d7142,_0x53f53e);}};if(_0x2386cc(0x3bd)==='UOmtU'){_0x3587fb=_0x442238;if(_0x5234fe)_0x5234fe['style'][_0x2386cc(0x436)+'ay']='';var _0x269bce=_0x442238['insta'+'nces']&&_0x442238[_0x2386cc(0x215)+_0x2386cc(0x2a4)][_0x2386cc(0x31a)+_0x2386cc(0x298)+'ler'],_0x3760ed=Math[_0x2386cc(0x155)](_0x3762cf['SErwD'](_0x442238[_0x2386cc(0x393)+'edMs']||-0x18ed+0xa4a+0xea3,0x1c6c+0x2511*-0x1+0x33*0x3f));if(_0x35fe0c){var _0x1027b4,_0x19ce96;if(_0x269bce&&_0x442238['surve'+'y']&&_0x442238['surve'+'y']['FPSco'+_0x2386cc(0x298)+'ler'])_0x1027b4=_0x2386cc(0x343)+'·\x20'+Object['keys'](_0x442238[_0x2386cc(0x215)+'nces'])[_0x2386cc(0x242)+'h']+(_0x2386cc(0x24b)+_0x2386cc(0x1d6)+'\x20')+_0x3760ed+'s',_0x19ce96=_0x3762cf[_0x2386cc(0x489)];else{if(_0x442238['hooks'+'Appli'+'ed']>0x1*-0x644+0x7*0x307+0xeed*-0x1){if(_0x3762cf['KTEst'](_0x3762cf[_0x2386cc(0x278)],_0x3762cf['JOnWW'])){var _0x4dc0a1=_0x338fe7[_0x9cdcc0];_0x2621c5['push'](_0x4dc0a1+_0xb06e19['NjvhV']+_0x537ebe[_0x4dc0a1]);}else _0x1027b4=_0x3762cf['tnxcZ'](_0x3762cf[_0x2386cc(0x22c)],_0x3760ed)+'s',_0x19ce96='#ffd4'+'8a';}else _0x442238[_0x2386cc(0x3d6)+_0x2386cc(0x2a5)]?(_0x1027b4=_0x3762cf['YWEPq'](_0x2386cc(0x28d)+'ata\x20r'+_0x2386cc(0x173)+'·\x20',_0x3760ed)+'s',_0x19ce96=_0x3762cf['yAKzM']):(_0x1027b4=(_0x442238['arm']&&_0x442238[_0x2386cc(0x36a)]['ok']?_0x3762cf['caiSi']:_0x3762cf[_0x2386cc(0x3e7)])+_0x3760ed+'s',_0x19ce96='#ffd4'+'8a');}_0x35fe0c[_0x2386cc(0x36d)+'onten'+'t']=_0x1027b4,_0x35fe0c['style'][_0x2386cc(0x207)]=_0x19ce96;}if(_0x4b72d5){if(_0x3762cf[_0x2386cc(0x30c)](_0x2386cc(0x1a7),_0x2386cc(0x1a7))){_0x3c12dd['addEv'+_0x2386cc(0x227)+_0x2386cc(0x1e0)+'r']('messa'+'ge',function(_0x373c6c){var _0x1948c7=_0x2386cc,_0x8629bd=_0x373c6c[_0x1948c7(0x297)];if(!_0x8629bd||_0x8629bd[_0x1948c7(0x147)+'ura']!==_0x580314)return;try{if(_0x484ad9[_0x1948c7(0x39b)+'t']&&_0x1281bb['paren'+'t']!==_0x35e0fa)_0xb8bfa1['paren'+'t'][_0x1948c7(0x3a9)+'essag'+'e'](_0x8629bd,'*');if(_0x2c3257[_0x1948c7(0x44d)]&&_0x4683a8[_0x1948c7(0x44d)]!==_0x526b2b)_0x5c1d58['top'][_0x1948c7(0x3a9)+_0x1948c7(0x43c)+'e'](_0x8629bd,'*');}catch(_0x5256b0){}}),_0x3046bf[_0x2386cc(0x1db)](_0x555e4c['URyul'],_0x555e4c[_0x2386cc(0x261)](_0x2386cc(0x207)+':',_0x43fa60));return;}else _0x4b72d5['textC'+_0x2386cc(0x32f)+'t']=_0x442238['diff']&&_0x442238[_0x2386cc(0x430)]['lengt'+'h']?_0x2386cc(0x30d)+'vs\x20sn'+_0x2386cc(0x378)+'t:\x20'+_0x442238[_0x2386cc(0x430)]['join'](',\x20'):_0x3762cf['mCfuG'];}if(_0x55ae8b){if('fSxJi'===_0x2386cc(0x418))try{_0x3762cf['VRsVN']('YAMMx',_0x3762cf[_0x2386cc(0x308)])?_0x55ae8b['textC'+_0x2386cc(0x32f)+'t']=_0x3762cf[_0x2386cc(0x32a)](_0xa10422,_0x442238):_0x590c56[_0x2386cc(0x266)](_0x555e4c[_0x2386cc(0x3c9)](_0x1cb6b9['type']+':\x20',_0x555e4c['QVSWT'](_0x44e15f,_0x4b5b70&&_0x5b3d44[_0x2386cc(0x240)+'ge']||_0x2de568)['slice'](-0x1*-0x8dd+0x1130*0x2+-0x2b3d,-0x1bdd*0x1+-0x5f8+-0x1*-0x2275)));}catch(_0x3d5d6d){_0x55ae8b['textC'+'onten'+'t']=JSON['strin'+_0x2386cc(0x364)](_0x442238,null,0x66c+0x95b*0x1+-0x2a1*0x6);}else try{_0x12f488[_0x2386cc(0x2d3)+'e']();}catch(_0x8bd61){}}console[_0x2386cc(0x1db)](_0x3762cf[_0x2386cc(0x18d)],_0x3762cf[_0x2386cc(0x29f)](_0x3762cf[_0x2386cc(0x280)](_0x2386cc(0x207)+':',_0x332217),_0x2386cc(0x3cb)+'-weig'+_0x2386cc(0x281)+'0'),_0x442238),console[_0x2386cc(0x1db)](_0x3762cf[_0x2386cc(0x482)](_0x177714+'\x0a'+JSON[_0x2386cc(0x190)+'gify'](_0x442238,null,0x1*0x623+-0x17e4+-0x1*-0x11c2),'\x0a')+_0x34cdd9);}else{var _0x5976bc=(_0x2386cc(0x31e)+_0x2386cc(0x388)+'4|9|0'+_0x2386cc(0x3f8))[_0x2386cc(0x452)]('|'),_0x20c40e=0x1ad0+-0xdcd*-0x2+0x7*-0x7c6;while(!![]){switch(_0x5976bc[_0x20c40e++]){case'0':var _0x35678c=_0x4bb290===_0xb06e19['jqNwv']?_0xb06e19[_0x2386cc(0x2a8)]:_0x52da13===_0x2386cc(0x3c5)?_0x2386cc(0x329):'u8';continue;case'1':return _0x23715e(_0xb06e19[_0x2386cc(0x219)](_0xb06e19[_0x2386cc(0x219)](_0x4ca375,_0x16d5d2),_0x3381b1[_0x2386cc(0x263)+'n']),_0xb06e19[_0x2386cc(0x14e)],_0x29548c|0x254f*-0x1+-0xf*-0x1cf+0xa2e)&&_0x3fcc9a(_0xb06e19[_0x2386cc(0x2be)](_0x3e7a02+_0x54b6c8,_0x3381b1['fake']),_0x35678c,_0x39633b)&&_0xb06e19[_0x2386cc(0x476)](_0xb94443,_0x3e9841+_0xd34249+_0x3381b1[_0x2386cc(0x2c2)+'e'],'u8',0x23a0+0x21fc+-0x459c);case'2':var _0x39633b=_0x2f89d2===_0x2386cc(0x3e4)?_0x2e52e0:_0x2b2d28==='obfI'?_0xb06e19[_0x2386cc(0x411)](_0x5904b6,-0x1a3+-0x143a+0xc1*0x1d):_0x53494d?-0x3*-0x4f5+-0xd42*0x1+-0xce*0x2:-0x1*0xd12+0x3*-0x377+0x1777;continue;case'3':var _0x59efe0=_0xb06e19[_0x2386cc(0x476)](_0x4c76c8,_0xf33acf,_0x132dbb,_0x3500af);continue;case'4':var _0x29548c;continue;case'5':var _0x3adad3=_0x59efe0[_0x2386cc(0x149)];continue;case'6':var _0x3381b1=_0x434dae[_0x4a0aa9];continue;case'7':if(!_0x59efe0)return![];continue;case'8':if(!_0x3381b1)return![];continue;case'9':if(_0x59c02===_0xb06e19[_0x2386cc(0x1fd)])_0x29548c=_0x29f151(_0x154b9d)^_0x3adad3;else{if(_0xb06e19['vNBHH'](_0x306a00,_0xb06e19[_0x2386cc(0x142)]))_0x29548c=_0xb06e19[_0x2386cc(0x411)](_0x2131be,-0x167c+-0x2702+0x1*0x3d7e)^_0x3adad3;else _0x29548c=_0xb06e19['QLMsW']((_0x15befd?0x5d*-0x47+-0x1f98+-0x4*-0xe59:0xc13*0x1+-0x2135+-0x1522*-0x1)&-0x1*-0x22e1+0x109d*0x1+-0x327f,_0x3adad3);}continue;}break;}}}};return _0x4f5041[_0x1ab1b3(0x1d0)+'et'][_0x1ab1b3(0x285)]='1',_0x4f5041['api']=_0x4458cb,_0x4458cb;}function _0xa10422(_0x3d0e68){var _0x5e3306=_0xd5d532,_0x6893d1=[];_0x6893d1[_0x5e3306(0x266)](_0x3762cf[_0x5e3306(0x224)](_0x3762cf[_0x5e3306(0x195)]+(_0x3d0e68['host']||'?')+_0x5e3306(0x37e)+Math[_0x5e3306(0x155)](_0x3762cf['SErwD'](_0x3d0e68['elaps'+_0x5e3306(0x282)]||-0x1c4c+-0x1*0x11e3+-0x7*-0x699,-0x1*-0x2551+-0x20d7+-0x92)),'s)')),_0x6893d1['push'](_0x3762cf[_0x5e3306(0x15c)](_0x3762cf[_0x5e3306(0x2f5)]+(_0x3d0e68['uwmk']?_0x5e3306(0x491):'no')+(_0x5e3306(0x248)+'ntext'+'\x20'),_0x3d0e68['il2Cp'+_0x5e3306(0x453)+_0x5e3306(0x48a)]?_0x3762cf['GVTFB']:'no')+_0x3762cf[_0x5e3306(0x46f)]+(_0x3d0e68['typeC'+_0x5e3306(0x494)]!=null?_0x3d0e68['typeC'+_0x5e3306(0x494)]:'?')),_0x6893d1[_0x5e3306(0x266)](_0x3762cf[_0x5e3306(0x406)](_0x5e3306(0x137)+_0x5e3306(0x2d7),_0x3d0e68[_0x5e3306(0x137)+_0x5e3306(0x3da)+'ed'])+'/'+_0x3d0e68['hooks'+_0x5e3306(0x160)]+(_0x5e3306(0x3f3)+_0x5e3306(0x43a))),_0x6893d1['push']('');var _0x4f646e=_0x3d0e68['insta'+'nces']||{},_0x52c882=Object['keys'](_0x4f646e);!_0x52c882[_0x5e3306(0x242)+'h']&&(_0x6893d1[_0x5e3306(0x266)](_0x5e3306(0x25a)+_0x5e3306(0x24e)+_0x5e3306(0x43b)+_0x5e3306(0x174)+'ured\x20'+_0x5e3306(0x168)),_0x6893d1[_0x5e3306(0x266)](''),_0x6893d1[_0x5e3306(0x266)](_0x5e3306(0x2e7)+_0x5e3306(0x42d)+'fire\x20'+'on\x20th'+'e\x20gam'+_0x5e3306(0x148)+_0x5e3306(0x296)+'date('+');\x20no'+_0x5e3306(0x17a)+_0x5e3306(0x174)+'ured\x20'+'means'),_0x6893d1[_0x5e3306(0x266)]('no\x20Up'+_0x5e3306(0x442)+'ran\x20y'+_0x5e3306(0x3cf)+_0x5e3306(0x1ec)+_0x5e3306(0x1d4)+_0x5e3306(0x447)+_0x5e3306(0x360)+'not\x20m'+_0x5e3306(0x2fc)));for(var _0x1c839e=0x47*-0x41+0x1*0x21ad+0x1*-0xfa6;_0x3762cf['KraHy'](_0x1c839e,_0x52c882[_0x5e3306(0x242)+'h']);_0x1c839e++){var _0x187a56=_0x52c882[_0x1c839e];_0x6893d1[_0x5e3306(0x266)](_0x3762cf[_0x5e3306(0x316)](_0x187a56+_0x3762cf[_0x5e3306(0x28e)],_0x4f646e[_0x187a56]));}_0x6893d1['push']('');var _0x3fcee2=_0x3d0e68[_0x5e3306(0x199)+'y']||{},_0x30616a=Object['keys'](_0x3fcee2);for(var _0x158bf5=0x1e23+-0x4*0x3e8+-0xe83;_0x3762cf['KraHy'](_0x158bf5,_0x30616a[_0x5e3306(0x242)+'h']);_0x158bf5++){var _0x11f011=_0x30616a[_0x158bf5],_0x336918=_0x3fcee2[_0x11f011];if(!_0x336918||!_0x336918[_0x5e3306(0x242)+'h'])continue;_0x6893d1[_0x5e3306(0x266)](_0x3762cf['VXBdF'](_0x3762cf[_0x5e3306(0x3bf)](_0x3762cf[_0x5e3306(0x3a7)](_0x3762cf['HbAOu'],_0x11f011),'\x20'),new Array(Math['max'](0xedd*0x2+0x541*0x7+0x380*-0x13,_0x3762cf[_0x5e3306(0x484)](-0x213a*0x1+-0xc66+0x2dc2,_0x11f011['lengt'+'h'])))[_0x5e3306(0x1c4)]('─'))),_0x6893d1[_0x5e3306(0x266)](_0x3762cf[_0x5e3306(0x233)]);for(var _0x445e45=-0x974*0x4+-0x1134+0x3704;_0x445e45<_0x336918['lengt'+'h'];_0x445e45++){var _0x2543e1=_0x336918[_0x445e45],_0x3fd8b8=typeof _0x2543e1['v']==='numbe'+'r'?Math['round'](_0x3762cf['srLrH'](_0x2543e1['v'],0x1*0x17c2+0x270+-0x164a))/(0x22*0xaf+-0xf*0x13a+-0xf0):_0x2543e1['v'];_0x6893d1['push'](_0x3762cf['DfYyX'](_0x3762cf['Uyoij']('\x20\x20'+('0x'+_0x2543e1['o'][_0x5e3306(0x1cb)+'ing'](0x1e2d+-0x1*0x2b7+-0x14e*0x15))[_0x5e3306(0x3d0)+'d'](-0x268b+-0x7*0x63+-0x529*-0x8),'\x20')+_0x2543e1['k']['padEn'+'d'](0x1*-0x1025+-0x1*0x23c9+0x5*0xa65)+'\x20'+String(_0x3fd8b8)[_0x5e3306(0x3d0)+'d'](-0x1bd8+0x3*-0x657+-0x125*-0x29)+'\x20',_0x2543e1[_0x5e3306(0x200)]||''));}_0x6893d1[_0x5e3306(0x266)]('');}if(_0x3d0e68[_0x5e3306(0x33a)+'ngs']&&_0x3d0e68[_0x5e3306(0x33a)+'ngs']['lengt'+'h']){_0x6893d1[_0x5e3306(0x266)](_0x5e3306(0x33a)+'ngs');for(var _0x201a63=-0xf8b+-0x1*-0x1580+-0x5f5;_0x3762cf['KraHy'](_0x201a63,_0x3d0e68[_0x5e3306(0x33a)+_0x5e3306(0x32d)]['lengt'+'h']);_0x201a63++)_0x6893d1[_0x5e3306(0x266)](_0x3762cf['khfgR']('\x20\x20!\x20',_0x3d0e68[_0x5e3306(0x33a)+'ngs'][_0x201a63]));}return _0x6893d1[_0x5e3306(0x1c4)]('\x0a');}window['addEv'+'entLi'+_0xd5d532(0x1e0)+'r'](_0x3762cf[_0xd5d532(0x420)],function(_0x1cf6ff){var _0x1959ad=_0xd5d532,_0xb470ae=_0x1cf6ff['data'];if(!_0xb470ae||_0xb470ae[_0x1959ad(0x147)+'ura']!==_0x7a511)return;try{if(_0x3762cf['Unorr']===_0x1959ad(0x40c)){if(_0xb470ae['kind']===_0x1959ad(0x40a)){_0xab65c7()['set']({'host':_0xb470ae[_0x1959ad(0x22f)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0xb470ae[_0x1959ad(0x247)]===_0x1959ad(0x38b)+'t')_0xab65c7()[_0x1959ad(0x221)](_0xb470ae[_0x1959ad(0x38b)+'t']);}else{var _0x354fd9=_0x47bdb3['getEl'+'ement'+_0x1959ad(0x3cd)]('sakur'+'a-sw-'+'v2');if(_0x354fd9)return _0x354fd9;if(!_0x3bb156[_0x1959ad(0x153)]||!_0x4cd885['body']['appen'+_0x1959ad(0x26d)+'d'])return null;try{var _0x3467bf=(_0x1959ad(0x3ae)+'|1|3')[_0x1959ad(0x452)]('|'),_0x43457b=0x1*0x54a+-0x193b+0x13f1;while(!![]){switch(_0x3467bf[_0x43457b++]){case'0':_0x354fd9=_0x137d88[_0x1959ad(0x389)+_0x1959ad(0x2c1)+'ent'](_0x3762cf[_0x1959ad(0x225)]);continue;case'1':_0x6ff66c['body']['appen'+_0x1959ad(0x26d)+'d'](_0x354fd9);continue;case'2':if(!_0x16b912['getEl'+_0x1959ad(0x315)+_0x1959ad(0x3cd)]('sakur'+'a-sw-'+'v2-cs'+'s')){var _0x4be562=_0x5e824f[_0x1959ad(0x389)+'eElem'+_0x1959ad(0x241)](_0x3762cf[_0x1959ad(0x23e)]);_0x4be562['id']=_0x1959ad(0x151)+_0x1959ad(0x167)+_0x1959ad(0x3de)+'s',_0x4be562['textC'+_0x1959ad(0x32f)+'t']=_0x3762cf[_0x1959ad(0x3bb)],(_0x165165['head']||_0x359df1[_0x1959ad(0x31c)+_0x1959ad(0x17e)+_0x1959ad(0x315)])['appen'+'dChil'+'d'](_0x4be562);}continue;case'3':return _0x354fd9;case'4':_0x354fd9['id']=_0x3762cf[_0x1959ad(0x1d7)];continue;}break;}}catch(_0x4af250){return null;}}}catch(_0x56b147){console[_0x1959ad(0x13a)](_0x3762cf['VlJhQ'],_0x3762cf[_0x1959ad(0x357)]+_0x332217,_0x56b147);}});if(document[_0xd5d532(0x153)])_0xab65c7();else document[_0xd5d532(0x306)+_0xd5d532(0x227)+'stene'+'r'](_0x3762cf['gVZJE'],_0xab65c7,{'once':!![]});return;}window['__SAK'+_0xd5d532(0x3fd)+'W__']=window['__SAK'+_0xd5d532(0x3fd)+_0xd5d532(0x459)]||{'at':Date[_0xd5d532(0x209)]()};function _0x22f101(_0x21b33c,_0x12f314){var _0x180855=_0xd5d532,_0x14d4a8={'__sakura':_0x7a511,'kind':_0x21b33c};if(_0x12f314){for(var _0x5927b5 in _0x12f314)_0x14d4a8[_0x5927b5]=_0x12f314[_0x5927b5];}try{if(window[_0x180855(0x39b)+'t']&&window[_0x180855(0x39b)+'t']!==window)window['paren'+'t']['postM'+_0x180855(0x43c)+'e'](_0x14d4a8,'*');}catch(_0x48b3c8){}try{if(window[_0x180855(0x44d)]&&window['top']!==window)window['top'][_0x180855(0x3a9)+'essag'+'e'](_0x14d4a8,'*');}catch(_0x5999a3){}}console[_0xd5d532(0x1db)](_0xd5d532(0x42f)+'kura]'+'\x20SW-P'+'LAYER'+_0xd5d532(0x461)+'VE',_0x3762cf[_0xd5d532(0x335)]('color'+':',_0x332217)+_0x3762cf[_0xd5d532(0x29d)],{'host':_0x54d273,'href':location['href']}),_0x22f101(_0xd5d532(0x40a),{'host':_0x54d273,'role':_0x4cf714});var _0x34b58e=window[_0xd5d532(0x1de)+_0xd5d532(0x3fd)+'W__']&&window['__SAK'+_0xd5d532(0x3fd)+_0xd5d532(0x459)]['at']||Date['now']();try{var _0x12a548=new BroadcastChannel(_0x3762cf['pkjgO']);_0x12a548['onmes'+'sage']=function(_0x3cadc9){var _0x4e027c=_0xd5d532,_0xe5615e=_0x3cadc9[_0x4e027c(0x297)];if(_0xe5615e&&_0xe5615e[_0x4e027c(0x147)+_0x4e027c(0x295)]===_0x7a511&&_0x3762cf[_0x4e027c(0x17d)](_0xe5615e[_0x4e027c(0x247)],_0x4e027c(0x2e3)))_0x3762cf['HmJaP'](_0x1fbb8d,_0xe5615e['cmd'],_0xe5615e[_0x4e027c(0x150)]);};}catch(_0x466db1){}var _0x6e41c2=[];(function _0x27866f(){var _0x4d7b0b=_0xd5d532,_0x363151={'RuOtz':function(_0x1c37d6,_0x14ccfc){var _0x13ab64=_0x1a66;return _0x3762cf[_0x13ab64(0x316)](_0x1c37d6,_0x14ccfc);}},_0x5c42c9=['log',_0x4d7b0b(0x13a),_0x3762cf[_0x4d7b0b(0x27c)],_0x4d7b0b(0x439),_0x4d7b0b(0x2e8)];for(var _0x59b7d2=0x59+0x3d*0x29+-0xa1e;_0x59b7d2<_0x5c42c9[_0x4d7b0b(0x242)+'h'];_0x59b7d2++){(function(_0x1e6dd2){var _0x2a5d08=_0x4d7b0b,_0x4d651b={'rUrAg':function(_0x150905,_0x559ec1){return _0x3762cf['RQtqU'](_0x150905,_0x559ec1);},'wTLxR':'mRXIm','ODBvV':_0x2a5d08(0x20f),'kGDYj':function(_0x875ea0,_0x121cb8){return _0x875ea0<_0x121cb8;},'LktJm':function(_0x41105a,_0x149905){var _0x327673=_0x2a5d08;return _0x3762cf[_0x327673(0x25f)](_0x41105a,_0x149905);},'Ynabm':_0x2a5d08(0x3b6)+'WebMo'+_0x2a5d08(0x499),'qOLDL':function(_0x36beba,_0x3da158){return _0x36beba<_0x3da158;}};if(_0x3762cf[_0x2a5d08(0x25d)](_0x2a5d08(0x212),_0x2a5d08(0x35a))){var _0x1951e5=console[_0x1e6dd2];if(_0x3762cf[_0x2a5d08(0x30c)](typeof _0x1951e5,_0x3762cf['AagkY']))return;console[_0x1e6dd2]=function(){var _0x18a897=_0x2a5d08;if(_0x4d651b['rUrAg'](_0x4d651b['wTLxR'],_0x4d651b[_0x18a897(0x382)])){try{var _0x2e38ec='';for(var _0x3854bb=0x105a+-0x43*-0x94+-0x16*0x281;_0x4d651b[_0x18a897(0x2f9)](_0x3854bb,arguments[_0x18a897(0x242)+'h']);_0x3854bb++){var _0x5b8ac9=arguments[_0x3854bb];if(typeof _0x5b8ac9==='strin'+'g')_0x2e38ec+=_0x5b8ac9;else{if(_0x5b8ac9&&_0x5b8ac9['messa'+'ge'])_0x2e38ec+=_0x5b8ac9[_0x18a897(0x240)+'ge'];}}if(_0x4d651b['LktJm'](_0x2e38ec['index'+'Of'](_0x4d651b[_0x18a897(0x1ef)]),-(-0x1862*-0x1+0xbf3*-0x1+-0xc6e))&&_0x4d651b['qOLDL'](_0x6e41c2['lengt'+'h'],0x765+-0x82*0x31+0x11b9))_0x6e41c2[_0x18a897(0x266)](_0x2e38ec[_0x18a897(0x187)](0x11af+0xcb8+0x1*-0x1e67,-0x241f+-0x14d0+0x3a1b));}catch(_0x1de2d7){}return _0x1951e5[_0x18a897(0x365)](console,arguments);}else _0x510662[_0x18a897(0x1e4)+_0x18a897(0x20e)]=![],_0x7691ff[_0x18a897(0x2f8)+'8']=![];};}else _0x387f0b=_0x363151['RuOtz'](_0x2a5d08(0x137)+'\x20arme'+_0x2a5d08(0x454),_0x3151b6)+'s',_0xba2d9e='#ffd4'+'8a';}(_0x5c42c9[_0x59b7d2]));}}());var _0x3bbe7d={'attempted':![],'ok':![],'error':null},_0x77598b=[_0x3762cf['qHUuh'],'Assem'+'bly-C'+'Sharp'+_0xd5d532(0x323)+_0xd5d532(0x352)+_0xd5d532(0x2f3),_0x3762cf[_0xd5d532(0x317)],_0x3762cf['UDxEc'],_0xd5d532(0x3b3)+_0xd5d532(0x3c7)+'racte'+'rCont'+_0xd5d532(0x3c1)+_0xd5d532(0x1c1),_0x3762cf[_0xd5d532(0x208)]];(function _0xc271a3(){var _0x40f737=_0xd5d532;try{var _0x1baa00=window['Unity'+_0x40f737(0x163)+_0x40f737(0x499)]&&window['Unity'+_0x40f737(0x163)+_0x40f737(0x499)][_0x40f737(0x455)+'me'];if(!_0x1baa00||_0x3762cf[_0x40f737(0x48c)](typeof _0x1baa00[_0x40f737(0x389)+_0x40f737(0x41c)+'in'],_0x3762cf[_0x40f737(0x35c)])){_0x3bbe7d['error']=_0x40f737(0x455)+_0x40f737(0x293)+_0x40f737(0x1a1)+'lugin'+_0x40f737(0x462)+_0x40f737(0x27e)+'le';return;}_0x3bbe7d['attem'+'pted']=!![],_0x1baa00[_0x40f737(0x389)+'ePlug'+'in']({'name':_0x3762cf['BODMG'],'version':'2.0.1','referencedAssemblies':_0x77598b[_0x40f737(0x187)]()}),_0x3bbe7d['ok']=!![];}catch(_0x832cb1){_0x3bbe7d['error']=_0x3762cf[_0x40f737(0x463)](String,_0x832cb1&&_0x832cb1[_0x40f737(0x240)+'ge']||_0x832cb1);}}());var _0x4633da=new Float32Array(-0xd6d+0x2209+-0x149b),_0x3f9f74=new Int32Array(_0x4633da['buffe'+'r']);function _0x2c9b82(_0x577afc){var _0x2c8be8=_0xd5d532;return _0x3762cf[_0x2c8be8(0x164)](_0x2c8be8(0x21e),_0x2c8be8(0x18f))?null:(_0x4633da[-0x2312+-0xf59+-0x326b*-0x1]=_0x577afc,_0x3f9f74[0x7*0x403+0x1*-0x18f+-0x1a86]);}function _0x487c6b(_0x4d88e3){var _0x5c31ae=_0xd5d532;if(_0x3762cf[_0x5c31ae(0x467)](_0x5c31ae(0x44a),'XArnd'))return _0x3f9f74[-0x14ee+-0x4c*-0x19+0xd82*0x1]=_0x4d88e3|0xb*0xa3+-0x2*0x477+0x1ed,_0x4633da[-0x221d+0xdb7+0x1466];else{var _0x3f86bb=_0x50c407[_0x3ea226];for(var _0x2a036c=0x1eee*-0x1+0x459*-0x1+0x2347;_0x2a036c<_0x3f86bb[_0x5c31ae(0x242)+'h'];_0x2a036c++){_0x40f304[_0x417fde+_0x5c31ae(0x169)+_0x3f86bb[_0x2a036c]['o']['toStr'+_0x5c31ae(0x2aa)](0x61*-0x27+-0x1*0x25b+0x47*0x3e)]=_0x3f86bb[_0x2a036c]['v'];}}}var _0x54bb1a={'ok':0x0,'failed':0x0,'lastError':null};function _0x1ab9a1(){var _0x460092=_0xd5d532;try{var _0x145ee9=typeof window!==_0x460092(0x138)+'ined'?window[_0x460092(0x353)+'Insta'+'nce']||window['unity'+_0x460092(0x194)]||window['game']:null;if(_0x145ee9&&_0x145ee9[_0x460092(0x47d)+'e']&&_0x145ee9[_0x460092(0x47d)+'e'][_0x460092(0x1f1)+'8']&&_0x145ee9['Modul'+'e']['HEAPU'+'8'][_0x460092(0x2f4)+'r'])return _0x145ee9[_0x460092(0x47d)+'e'][_0x460092(0x1f1)+'8'];}catch(_0x54b780){}return null;}function _0x5d2968(){var _0x360fc5=_0xd5d532,_0x1009c2={'abyIV':function(_0x54a5c6,_0x3b19d4){return _0x54a5c6(_0x3b19d4);}},_0x2d1355=_0x3762cf['IVyco'](_0x1ab9a1);if(!_0x2d1355)return null;try{if(_0x3762cf[_0x360fc5(0x304)]!==_0x360fc5(0x3d7))return new DataView(_0x2d1355[_0x360fc5(0x2f4)+'r'],_0x2d1355['byteO'+_0x360fc5(0x143)],_0x2d1355['byteL'+'ength']);else{var _0x733ff7=_0x2ab87b[_0x3842fe];try{var _0x531666=_0x12d9bf[_0x360fc5(0x18c)+'refix']({'typeName':_0x733ff7[_0x360fc5(0x422)],'methodName':_0x3762cf[_0x360fc5(0x392)],'params':[_0x3762cf[_0x360fc5(0x3f6)],_0x3762cf[_0x360fc5(0x3f6)]],'returnType':_0x1ff83e},_0x51ed2d(_0x733ff7['type'],_0x733ff7[_0x360fc5(0x27a)]));_0x2225c4[_0x360fc5(0x266)]({'type':_0x733ff7['type'],'hook':_0x531666,'keep':_0x733ff7[_0x360fc5(0x27a)]});}catch(_0x3c52fa){_0x37b0e2['push'](_0x3762cf['xmPhb'](_0x733ff7['type'],':\x20')+_0x3762cf[_0x360fc5(0x1e3)](_0x343328,_0x3c52fa&&_0x3c52fa['messa'+'ge']||_0x3c52fa)[_0x360fc5(0x187)](-0x55*-0xd+-0x14f5+-0x1*-0x10a4,-0x5d9*-0x3+0x163e+-0x19*0x191));}}}catch(_0x3e6449){if(_0x3762cf[_0x360fc5(0x326)]('cEILZ',_0x3762cf['HJTjz']))try{_0x44ef0b[_0x360fc5(0x36d)+_0x360fc5(0x32f)+'t']=_0x1009c2[_0x360fc5(0x417)](_0x174739,_0x426757);}catch(_0x3ae24c){_0x36a78e['textC'+'onten'+'t']=_0x5a5895[_0x360fc5(0x190)+_0x360fc5(0x364)](_0x286ab3,null,0x130+-0x577+0x448);}else return null;}}function _0x3d6f25(_0x55f94f,_0x16fc1b){var _0xaa6f25=_0xd5d532,_0x4d59ba=_0x5d2968();if(!_0x4d59ba){if(_0x3762cf[_0xaa6f25(0x46b)]!=='JxeHT'){var _0x589c2c=_0x37a90f();if(!_0x589c2c)return null;try{return new _0x127b11(_0x589c2c[_0xaa6f25(0x2f4)+'r'],_0x589c2c[_0xaa6f25(0x139)+'ffset'],_0x589c2c[_0xaa6f25(0x1a6)+_0xaa6f25(0x384)]);}catch(_0x2b0045){return null;}}else return _0x54bb1a[_0xaa6f25(0x1be)+'d']++,_0x54bb1a[_0xaa6f25(0x1e1)+'rror']=_0x54bb1a['lastE'+'rror']||_0x3762cf[_0xaa6f25(0x40d)],undefined;}if(_0x3762cf['WBvRZ'](_0x55f94f,0x1*-0x1ff2+0x186*-0x9+-0xb6a*-0x4)||_0x55f94f+(0x1*0x119f+0x1*0xbf9+-0x2*0xeca)>_0x4d59ba[_0xaa6f25(0x1a6)+_0xaa6f25(0x384)])return _0x54bb1a['faile'+'d']++,_0x54bb1a[_0xaa6f25(0x1e1)+'rror']=_0x54bb1a['lastE'+'rror']||_0x3762cf['REyiy'](_0x3762cf[_0xaa6f25(0x3b1)](_0xaa6f25(0x16e)+_0xaa6f25(0x47c)+_0x55f94f[_0xaa6f25(0x1cb)+_0xaa6f25(0x2aa)](0x61f+0x3cb+-0x9da),_0xaa6f25(0x2ad)+_0xaa6f25(0x19f)+_0xaa6f25(0x3eb)+'0x'),_0x4d59ba['byteL'+_0xaa6f25(0x384)][_0xaa6f25(0x1cb)+_0xaa6f25(0x2aa)](0x3*0x677+-0x1163+-0x3*0xa6)),undefined;try{_0x54bb1a['ok']++;switch(_0x16fc1b){case'u8':return _0x4d59ba['getUi'+'nt8'](_0x55f94f);case'i8':return _0x4d59ba['getIn'+'t8'](_0x55f94f);case _0x3762cf[_0xaa6f25(0x322)]:return _0x4d59ba['getIn'+_0xaa6f25(0x273)](_0x55f94f,!![]);case _0x3762cf[_0xaa6f25(0x2b2)]:return _0x4d59ba[_0xaa6f25(0x423)+'nt16'](_0x55f94f,!![]);case _0xaa6f25(0x329):return _0x4d59ba['getIn'+'t32'](_0x55f94f,!![]);case _0x3762cf[_0xaa6f25(0x255)]:return _0x4d59ba['getUi'+'nt32'](_0x55f94f,!![]);case _0xaa6f25(0x1ac):return _0x4d59ba[_0xaa6f25(0x3e3)+_0xaa6f25(0x2bd)](_0x55f94f,!![]);case _0xaa6f25(0x458):return _0x4d59ba[_0xaa6f25(0x3e3)+_0xaa6f25(0x30a)](_0x55f94f,!![]);default:return _0x4d59ba['getIn'+_0xaa6f25(0x474)](_0x55f94f,!![]);}}catch(_0x2f439b){return _0x54bb1a[_0xaa6f25(0x1be)+'d']++,_0x54bb1a['lastE'+'rror']=_0x54bb1a[_0xaa6f25(0x1e1)+'rror']||String(_0x2f439b&&_0x2f439b['messa'+'ge']||_0x2f439b)[_0xaa6f25(0x187)](0xaa+0x1239+-0x3c7*0x5,0x1*-0x21fd+-0x3bd+0x2632*0x1),undefined;}}function _0x11fd05(_0x21c81d,_0x58f30d,_0x4b3227){var _0x39a7e7=_0xd5d532,_0x3cb643=_0x5d2968();if(!_0x3cb643||_0x21c81d<-0x23*-0x65+-0x7e7*0x1+-0x5e8||_0x3762cf[_0x39a7e7(0x29f)](_0x21c81d,0x4*-0x1d6+0x136e+-0xc12)>_0x3cb643['byteL'+_0x39a7e7(0x384)])return![];try{switch(_0x58f30d){case'u8':case'i8':_0x3cb643['setUi'+_0x39a7e7(0x1ca)](_0x21c81d,_0x4b3227&-0x1568+0x145*-0xe+0x282d);break;case _0x39a7e7(0x394):case _0x3762cf[_0x39a7e7(0x2b2)]:_0x3cb643[_0x39a7e7(0x48b)+_0x39a7e7(0x273)](_0x21c81d,_0x4b3227|0x1d1b+-0x9*0x376+0x1*0x20b,!![]);break;case _0x39a7e7(0x329):case _0x3762cf[_0x39a7e7(0x255)]:_0x3cb643['setIn'+_0x39a7e7(0x474)](_0x21c81d,_0x3762cf[_0x39a7e7(0x2f7)](_0x4b3227,0x167c+-0xc2c+-0x14a*0x8),!![]);break;case _0x39a7e7(0x1ac):_0x3cb643[_0x39a7e7(0x213)+_0x39a7e7(0x2bd)](_0x21c81d,_0x4b3227,!![]);break;default:_0x3cb643[_0x39a7e7(0x48b)+'t32'](_0x21c81d,_0x3762cf['EnCtJ'](_0x4b3227,0x9*-0x5e+-0x4*0xa3+0x5da),!![]);}return!![];}catch(_0x44aa9a){return![];}}var _0x58457a={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa}};function _0x205358(_0xc67f82,_0x389df0,_0x3b341c){var _0x4b412a=_0xd5d532,_0x2f947c=('7|13|'+'14|3|'+'1|5|8'+_0x4b412a(0x216)+_0x4b412a(0x2a9)+_0x4b412a(0x2e6)+'11|6')[_0x4b412a(0x452)]('|'),_0x423545=-0x1478+-0x228f+0x3707;while(!![]){switch(_0x2f947c[_0x423545++]){case'0':_0xde3e84|=0x1cca+-0x2fb*0x4+-0x1*0x10de;continue;case'1':var _0x33af76=_0x3d6f25(_0x3762cf[_0x4b412a(0x43d)](_0xc67f82,_0x389df0)+_0x54fba6[_0x4b412a(0x21a)+'d'],'u8');continue;case'2':_0x33af76=_0x3762cf['SGlyW'](_0x33af76||-0x1*-0x190c+-0x1ee5+0x3*0x1f3,-0xb77*0x3+0x1*0x125f+0x1007);continue;case'3':var _0xde3e84=_0x3762cf[_0x4b412a(0x288)](_0x3d6f25,_0x3762cf[_0x4b412a(0x34c)](_0xc67f82,_0x389df0)+_0x54fba6[_0x4b412a(0x263)+'n'],_0x3762cf[_0x4b412a(0x3f6)]);continue;case'4':if(_0x25ae11===undefined||_0xde3e84===undefined||_0x3762cf['wyZWN'](_0x4106d1,undefined)||_0x4bc48b===undefined)return null;continue;case'5':var _0x4106d1=_0x3d6f25(_0x3762cf['Uyoij'](_0x3762cf['gdJvu'](_0xc67f82,_0x389df0),_0x54fba6['fake']),_0x3762cf['dyKAB'](_0x3b341c,_0x3762cf['TLmtj'])?'f32':_0x3762cf['XWYNy'](_0x3b341c,_0x3762cf[_0x4b412a(0x1bb)])?'i32':'u8');continue;case'6':return{'real':_0x1a5f07,'fake':_0x4106d1,'act':_0x4bc48b,'init':_0x33af76,'key':_0x25ae11,'hidden':_0xde3e84};case'7':var _0x54fba6=_0x58457a[_0x3b341c];continue;case'8':var _0x4bc48b=_0x3d6f25(_0xc67f82+_0x389df0+_0x54fba6[_0x4b412a(0x2c2)+'e'],'u8');continue;case'9':_0x25ae11&=-0x1*-0x2333+0x2450+-0x4684;continue;case'10':var _0x1a5f07;continue;case'11':if(_0x3b341c===_0x3762cf[_0x4b412a(0x28a)])_0x1a5f07=_0x487c6b(_0xde3e84^_0x25ae11);else{if(_0x3b341c===_0x4b412a(0x3c5))_0x1a5f07=_0xde3e84^_0x25ae11|-0x10ef+0x1e6d+-0xd7e;else _0x1a5f07=_0x3762cf[_0x4b412a(0x3ba)](_0xde3e84^_0x25ae11,0x1f8+0x547+-0x640)!==0xc1+-0x1*-0x1de8+0xa7*-0x2f?0x1ef6+-0x1d*0x86+0x7*-0x241:0x2ed*-0x4+0x3bf+0x7f5;}continue;case'12':_0x4bc48b&=-0x1cd6+0x264a+0x1*-0x973;continue;case'13':if(!_0x54fba6)return null;continue;case'14':var _0x25ae11=_0x3d6f25(_0x3762cf['kgSYo'](_0xc67f82+_0x389df0,_0x54fba6['key']),'u8');continue;}break;}}function _0x275846(_0x4b98f7,_0x2ef00b,_0x25856a,_0x540e4e){var _0x4fd583=_0xd5d532,_0xac885c=(_0x4fd583(0x3b4)+_0x4fd583(0x345)+_0x4fd583(0x34d)+'|8|3')['split']('|'),_0x4f0e12=-0xe96*0x2+-0x1500+0x322c;while(!![]){switch(_0xac885c[_0x4f0e12++]){case'0':var _0x326e8a=_0x3762cf[_0x4fd583(0x24f)](_0x205358,_0x4b98f7,_0x2ef00b,_0x25856a);continue;case'1':if(!_0x188abb)return![];continue;case'2':if(!_0x326e8a)return![];continue;case'3':return _0x11fd05(_0x4b98f7+_0x2ef00b+_0x188abb['hidde'+'n'],_0x4fd583(0x329),_0x1f1805|0x2710+0x1648+-0x3d58)&&_0x11fd05(_0x4b98f7+_0x2ef00b+_0x188abb[_0x4fd583(0x33e)],_0x28fd69,_0x14014e)&&_0x3762cf['NOEZH'](_0x11fd05,_0x3762cf[_0x4fd583(0x43e)](_0x3762cf[_0x4fd583(0x3b2)](_0x4b98f7,_0x2ef00b),_0x188abb['activ'+'e']),'u8',-0x878+0xb*0x86+0x2b6);case'4':var _0x28fd69=_0x25856a===_0x3762cf[_0x4fd583(0x28a)]?_0x3762cf['cjitW']:_0x3762cf['VRsVN'](_0x25856a,_0x4fd583(0x3c5))?_0x4fd583(0x329):'u8';continue;case'5':var _0x456c26=_0x326e8a[_0x4fd583(0x149)];continue;case'6':var _0x1f1805;continue;case'7':var _0x188abb=_0x58457a[_0x25856a];continue;case'8':var _0x14014e=_0x25856a===_0x3762cf['TLmtj']?_0x540e4e:_0x3762cf['gxyvQ'](_0x25856a,_0x3762cf[_0x4fd583(0x1bb)])?_0x540e4e|-0x1e6f+0x1624+0x84b:_0x540e4e?-0x1*0x1d63+0x556+-0x180e*-0x1:0x15*0x9d+0x287+0xf68*-0x1;continue;case'9':if(_0x25856a===_0x4fd583(0x3e4))_0x1f1805=_0x3762cf[_0x4fd583(0x414)](_0x2c9b82(_0x540e4e),_0x456c26);else{if(_0x3762cf[_0x4fd583(0x276)](_0x25856a,_0x3762cf[_0x4fd583(0x1bb)]))_0x1f1805=_0x3762cf[_0x4fd583(0x487)](_0x3762cf['HLgLG'](_0x540e4e,0x247*0x6+-0x1dee+0x1044),_0x456c26);else _0x1f1805=_0x3762cf['rusdJ']((_0x540e4e?0x1d*0x105+-0x22*-0xd3+-0x3996:0x7*0xdf+-0xc08+0x5ef)&-0x191d+0x1*0x33b+0x16e1,_0x456c26);}continue;}break;}}var _0x444abd={'FPScontroller':[[0x158a+0x1d95+-0x330f,_0x3762cf[_0xd5d532(0x28a)]],[0x1*0x219e+0x12d+-0x22a3,_0x3762cf[_0xd5d532(0x28a)]],[-0x2659*-0x1+-0x2161+-0x1*0x4b8,'obfF'],[0xcd1+0x81*-0x4c+0x19d3,_0x3762cf[_0xd5d532(0x28a)]],[0xab3+-0xa0d*0x2+0x1*0x9d7,_0x3762cf['TLmtj']],[0x6*-0x449+-0x8c7+0xb*0x32f,_0x3762cf[_0xd5d532(0x28a)]],[-0x1e73+-0xb*0x380+0x4593,_0xd5d532(0x3e4)],[0x3*0x15f+0x3d9+0x12*-0x67,_0x3762cf['eMVqu']],[-0x13*0x161+0x1125+0x6*0x1a3,'obfF'],[0x1*-0x16f9+0x25*0x41+-0x7*-0x210,_0x3762cf[_0xd5d532(0x3f6)]],[0x119*0x5+-0x2cf*0x1+-0x1c2,'u8'],[0x1a7f+-0x38*-0x52+-0x8b3*0x5,_0x3762cf[_0xd5d532(0x28a)]],[0x30*0x1+-0x2007+0x20df,'i32'],[-0x124d*0x1+0xb*0x30d+-0xe36,'u8'],[0x25*-0xf0+-0x3*0x92b+0x3f41,_0x3762cf[_0xd5d532(0x3f6)]],[-0xa*-0x175+0x6dc+-0x145a,'u8'],[0x26a5+-0x1c99*0x1+-0x1b*0x55,'u8'],[0x1005+0x1013*0x2+-0x2f0f*0x1,'obfF'],[0x1756+0x1743+0x2d65*-0x1,_0x3762cf['TLmtj']],[0x12da*-0x2+-0x1dfb+0x44fb,_0xd5d532(0x1ac)],[-0x5*0x1+-0xf95*0x1+0x10ea,_0x3762cf[_0xd5d532(0x3a0)]],[0x372+0x1d1+0x1*-0x3d7,_0xd5d532(0x1ac)],[-0x15d*-0x1b+-0xe3b*0x2+-0x6e9,'f32'],[-0x1d5d+-0x1c6b+-0x92*-0x68,'u8'],[0x142e+-0x2*0xaaf+-0x46*-0xa,_0x3762cf['cjitW']],[0xedb+0x2154+-0x2e8b,'u8'],[0x1051+0x176*0x4+-0x1475*0x1,'f32'],[-0x1*0x23ef+0x1*-0x2646+0x4bed,_0xd5d532(0x1ac)],[0x24d+0x1a56+-0x1*0x1ae7,'u8'],[-0x1*0x1aa7+0x2665+-0x1*0xa01,'u8'],[0x26d1+0xb0f+-0x3020,'obfF'],[0x177*0x14+0x23b9+-0x3f2d,_0x3762cf[_0xd5d532(0x3a0)]],[0x8*0x5b+-0xab7*0x2+0x1472,'u8'],[0xe06+-0x2597*-0x1+-0x11*0x2ed,'obfF'],[0x1f5c+-0x2*-0x10ed+0x2*-0x1f97,'obfB'],[-0x1*-0xf1d+-0x13*0x49+0x8b*-0xe,_0xd5d532(0x1ac)],[0x3*-0x171+0x19cc+-0x135d,_0x3762cf['cjitW']],[-0x7*-0x17f+-0x1f40+-0x1*-0x1713,_0xd5d532(0x1ac)],[0xb3e+-0xc09+0x31b,_0xd5d532(0x1ac)],[0x881*0x4+-0x1503+0xaad*-0x1,'f32'],[0x221+0x2*0x607+-0xbd7*0x1,'f32'],[0x4*0x71a+0x1*0xeef+0x27*-0x10d,'u8'],[0x1e42+-0x1a09+-0x1dc,'u8'],[0xe8c+-0x4d9*0x8+-0x552*-0x5,'u8'],[-0x54+-0x1*-0x235e+0x4a*-0x71,'f32'],[-0x4*0x87d+0x111e*0x2+0x21c,'u8'],[-0xd6a+-0x1c1d+0x2*0x15f6,'u8'],[0x1*-0x105f+-0x158f+0x2856,'f32'],[0x1e65*0x1+-0x1e0a+0x211,'f32'],[0x1*-0x6f1+-0xf75+0x18d6,_0xd5d532(0x1ac)],[-0x1*-0x25e9+-0xeda+-0x149b,_0x3762cf[_0xd5d532(0x3a0)]],[-0x5*-0x5b9+-0x48d*-0x1+-0x1eb2*0x1,'f32'],[0x24*0x52+0x8e9*0x1+0x11f5*-0x1,_0x3762cf['cjitW']],[-0x1a2b+0x1e52+-0x1a7,_0x3762cf[_0xd5d532(0x3a0)]],[0x2587*0x1+-0xca5+-0x164e,'u8'],[-0x3*-0x416+-0xdcc+0x42e,_0x3762cf[_0xd5d532(0x3a0)]],[-0x503+-0x2e2*0x5+0x1625*0x1,_0xd5d532(0x1ac)],[0x617+0x127b+0xaeb*-0x2,_0xd5d532(0x1ac)],[0x6d2*0x2+0x45*0x80+-0x48a*0xa,_0x3762cf[_0xd5d532(0x3a0)]],[0xe5*-0x12+0x903*0x1+-0x3*-0x349,'u8'],[0x199*0x18+0x582+-0x2915,'u8'],[0x1*0x10f+-0xab5*0x1+-0x2*-0x637,'f32'],[-0x16*-0x9e+-0x25*0x4+-0xa24,_0xd5d532(0x1ac)],[0x21c5+0xbf3+0xaaf*-0x4,'f32'],[0x1*0x1442+0x1ee9+0xb*-0x461,_0xd5d532(0x1ac)],[0xbec+-0x1b00+0x1218,_0xd5d532(0x1ac)],[0xe67*0x1+-0x161c+0xabd,_0x3762cf[_0xd5d532(0x3a0)]],[-0xdea+0x2362+-0x1260,'u8'],[0x1d*-0x1+0x3d2+-0x8d,_0xd5d532(0x329)],[-0x543*0x1+0x137e+-0xb0f,_0xd5d532(0x1ac)],[0x97*-0x37+-0x424+-0x1*-0x27c5,'f32'],[0x1*0x129+0x13d4+-0x9d*0x1d,'f32'],[0x24cb+-0x15*0x180+-0x11*0x1f,_0x3762cf['cjitW']],[0x1*-0xaa1+-0x1bc3+0x29a4,'u8'],[-0x7ed*-0x3+0x1e18+-0x329e,'u8'],[0x10b1*-0x1+-0x752+0x1b4f,'u8'],[0x13*0x171+-0x792+-0x1084,'u8'],[0x1e4+0x2342*0x1+0x876*-0x4,'u8'],[0x4d9*0x1+-0xa22*0x3+-0x335*-0x9,_0xd5d532(0x1ac)],[-0x1*-0xfb+0x1817+-0x15be,_0xd5d532(0x1ac)],[0x3d4+0x1*-0x825+0x7a9,_0x3762cf[_0xd5d532(0x3a0)]],[0xb1b+-0x5*-0x7be+-0x2e75,'f32'],[0x126e+0x17ef+0x3*-0xcff,_0x3762cf['cjitW']],[-0x1585+-0x2b*0x4f+0x262e,'u8'],[-0x1039+-0x4c*0x9+0x164d,_0xd5d532(0x1ac)],[-0x1d7a+-0xa63+0x2b49,_0x3762cf[_0xd5d532(0x3a0)]],[-0x17a3+0x31*0x1f+0x1524,'u8'],[-0x1216+-0x4e1+-0x1a93*-0x1,_0x3762cf[_0xd5d532(0x3a0)]],[0xa*-0x2d2+0x13a5*-0x1+0x3379,_0x3762cf['cjitW']],[-0xeae*0x1+0x1962+-0x710,_0x3762cf['cjitW']],[0x13ff*-0x1+0x16f6*-0x1+0x2ea9*0x1,_0xd5d532(0x329)],[-0xd3b*-0x2+-0x45*-0x35+-0x2507*0x1,'u8'],[0x35e+-0x13a*-0xd+-0xf94,_0xd5d532(0x329)],[-0x2659+-0x36d*0x6+0x3ea7,_0xd5d532(0x1ac)],[-0x72+0x6b2+-0x27c,_0x3762cf[_0xd5d532(0x3a0)]],[-0xf95*0x1+0xa*0x9e+0xd31,_0x3762cf['cjitW']],[-0x1a2e+-0x2*-0x114b+-0x2*0x24e,_0xd5d532(0x1ac)],[0x187*0xf+-0x12a*-0x12+-0x2801,'i32'],[0x17c7+-0x5*-0x737+-0x37fa,'u8'],[0x1119+-0x1079+0x341,'u8'],[0xd75+-0x2f5*0xc+0x19e9,'u8'],[-0x25b8+-0x4a*-0x65+0xc6a,'f32'],[0xf0+-0x1c6f+0x1f67,_0xd5d532(0x329)]],'HealthScript':[[-0x217a+0x13c6+0x3a*0x3e,'u8'],[-0x15*0x4c+-0x2111+0x27a9,_0x3762cf[_0xd5d532(0x3f6)]],[-0xe7d+0x151d+0x2*-0x310,_0xd5d532(0x1ac)],[0x5fe*-0x2+0x1a2a+-0x13e*0xb,_0xd5d532(0x1ac)],[0x757*-0x2+0x1*0x25d9+0x1*-0x16a3,_0x3762cf[_0xd5d532(0x3a0)]],[-0x807+0x1a55+0x11c2*-0x1,_0xd5d532(0x1ac)],[-0x2*0xcf8+0x1*-0x119+0x1b99,_0x3762cf[_0xd5d532(0x3a0)]],[0x1d71+-0x2d*0x4d+0x147*-0xc,'f32'],[-0x1*0x713+0x2*-0x6ee+0x1*0x158f,_0xd5d532(0x329)],[-0x2163+0x7e5*-0x4+0x5*0xd1f,_0x3762cf['EqZHr']],[0x217d+-0x1*0x77f+-0x1956,'u8'],[-0xd*-0x2c5+-0x26cd+0x375,'u8'],[0x1*-0x1ac7+-0x1e87+-0x35*-0x118,'u8'],[0x1b2a+-0x11*-0x21d+-0x3e6c,'u8'],[-0x19f2*0x1+-0x1006+0x2ab8*0x1,'obfI'],[0x191c+-0x231f+0xad7,'obfI'],[-0x1f1f+-0x1cb9+0x3cc0,_0xd5d532(0x3c5)],[0x254c+-0x4a3+-0x1fad,'obfI'],[0xf0c+0x3af*-0x2+-0x2*0x34f,'obfI'],[-0x5*-0x7b+0x1244+-0x1387*0x1,'obfB'],[0x3fd*-0x5+-0x360*0x3+0x1f41,_0x3762cf[_0xd5d532(0x28a)]],[-0x8a+-0x1d22+0x1ef4,'f32'],[0xdf3*-0x1+-0x83*-0x47+-0x1516,'f32'],[0x266c+-0xffe+-0x151e,'f32'],[0x85*-0xd+-0x169*-0x19+-0x1b2c,_0xd5d532(0x1ac)],[-0x1088+0x1f13+-0xe1*0xf,_0x3762cf[_0xd5d532(0x3a0)]],[-0x9f5*0x3+-0xbd7+0x2b26,_0x3762cf['cjitW']],[-0x77*-0x37+-0x44a+0x13cf*-0x1,'f32'],[-0x416*0x8+0x1af*-0x14+0x43dc,'u8'],[0x961*-0x1+0xe55+0x1*-0x368,'u8'],[0x1587+0x54c+-0x1943,'i32']],'PlayerConfig':[],'WeaponManager':[[0x1aef+-0x1d*-0x3d+-0x21c0,'i32'],[0x18*-0x124+-0xfb3+0x8a3*0x5,_0xd5d532(0x329)],[-0x1590+-0x1*0x16f6+-0x27b*-0x12,'u8'],[-0x215+0x2*0x10f1+-0x1fa9,'i32'],[-0x123d+0x1ce3+0x1*-0xa42,_0x3762cf['TLmtj']],[-0x1ae1+-0x20*-0x92+0x91d,_0x3762cf['cjitW']],[-0x10eb*0x1+0x190d+-0x1*0x79e,_0x3762cf['EqZHr']],[-0x1*-0x1c+0x133b+-0x12cf,'u8'],[0x2cd+-0x844+0x600,'u8'],[0x1eb3+0x1*0xf8f+-0x2*0x16db,_0xd5d532(0x329)],[0x732*-0x3+-0x4*0x2db+0x2192,_0x3762cf[_0xd5d532(0x3a0)]],[0x1840+-0xde8+0x18*-0x68,_0x3762cf[_0xd5d532(0x3a0)]],[0x2f*0x2f+0x94*-0x2b+0x10e7*0x1,'i32'],[0xb*0x307+-0x1656+0x1b*-0x61,'u8'],[-0x3*0x2af+0x234a+-0x3*0x8cb,_0xd5d532(0x3c5)],[-0x6a8+-0xb10+0x12a8,_0xd5d532(0x3c5)],[-0x210a+-0x22f*-0x7+0x12c5,_0x3762cf[_0xd5d532(0x3a0)]],[-0xbf9+0x2*0x3b0+0x5a1*0x1,_0xd5d532(0x1ac)],[0x9b6*-0x2+-0x32f+0x17a7,_0xd5d532(0x1ac)],[-0x1a*-0xa2+-0xe9c+-0xc0,_0xd5d532(0x1ac)],[0x22ff*-0x1+0x232a+-0x5*-0x31,_0x3762cf['cjitW']],[-0x1160+0x12fe+-0x2*0x3b,'u8'],[0x22d2+0x5b9*0x1+0x1*-0x275f,'obfI'],[0xad6*0x2+0x1cb3+0x5*-0x9d3,_0x3762cf['eTlCA']],[-0x1b99+0x7*0x19+0x1c3e,_0x3762cf[_0xd5d532(0x1bb)]],[0x215f+0x36a+-0x2361,_0xd5d532(0x13b)],[0x7b9*0x4+-0x20d7*0x1+0xd*0x43,_0xd5d532(0x13b)],[-0x204f+0x25*0x7+0x20cc,_0xd5d532(0x13b)],[0x3b*0x67+0x58b+-0x19*0x11c,'obfB'],[-0x246e+-0x1*0x52a+-0x4*-0xacf,_0x3762cf[_0xd5d532(0x3aa)]],[0x11a3+0x2285+-0x3278,_0xd5d532(0x3c5)],[0x94d+-0x26e0+0x1f5f,_0x3762cf[_0xd5d532(0x3f6)]],[0x1*-0x18f9+0xeb+-0x1*-0x19de,'u8'],[-0x7*0x1da+-0x296*-0x4+0x472*0x1,'i32'],[0x1b4b+0x198*0xd+-0x2e2b,_0x3762cf[_0xd5d532(0x3f6)]],[-0x3*0xc8c+-0x1f7+0x1*0x299b,'i32'],[0x1615+0xf1c+0x231d*-0x1,'u8'],[0xe0e+-0x1d41+-0x5c5*-0x3,'u8'],[-0x23be+0x991*0x4+-0x7*0xf,'u8'],[0x2c*0x6e+0x206e*0x1+-0x3138,'u8'],[0x12b1+0x13d7+-0x2469,'u8'],[0x1488+-0x1*0x6bb+-0xb7d,'i32'],[0xf8d*0x1+0x111c+0x1e51*-0x1,'u8']],'GG_GameManager':[[0x24e5+0xcfb+-0x31bc*0x1,'u8'],[0x9c3+-0x1f8b+0x15f4,_0x3762cf['cjitW']],[0x1e*0x43+0xca*0x17+-0x19bc,'u8'],[0x26df+-0x25d*0xb+0x7*-0x1cd,'u8'],[0xcef+0x34b*0x5+-0x2*0xe8f,_0x3762cf[_0xd5d532(0x3a0)]],[-0xbad*-0x2+-0x2048+0x93a,_0x3762cf['cjitW']],[0xe3*0x27+-0x1*0x315+0x8*-0x3e6,_0x3762cf['EqZHr']],[-0xc87*-0x1+0x7*0x3ef+-0x27bc*0x1,_0xd5d532(0x329)],[0x47d+0x1*-0xda3+0x97e,'u8'],[0x1*-0x1f0b+-0x2ba+-0x1*-0x2239,'u8'],[0x739+-0x385*-0x1+-0xa46,'f32'],[0x225a+0x59*-0x5e+-0x4c*0x4,'f32'],[-0x1184+0x264c+0x1438*-0x1,_0xd5d532(0x329)],[-0x779*0x1+0x1fd2+0x5*-0x4c1,'u8'],[0x64c+-0x17b*-0x17+-0x33*0xc7,_0xd5d532(0x329)],[-0x201+0x449*-0x7+0x20bc,_0xd5d532(0x329)],[0x10c6*0x2+0x1d60+0x2*-0x1f16,_0xd5d532(0x329)],[-0x3bf+-0xb5*0x4+-0x5*-0x17f,_0xd5d532(0x3c5)],[-0x1c4a+-0x10d6+-0x4*-0xb87,'obfI'],[0x1875+0x1f76+-0x1249*0x3,'obfI'],[0x73d*0x2+0x58a*-0x1+0x1*-0x7c4,'u8'],[-0x2496+-0x11da+0xb20*0x5,'i32'],[0xd4f+-0x1729+-0xb3e*-0x1,'u8'],[-0x2*0xa53+0x2*-0x10a6+0x3762,_0x3762cf[_0xd5d532(0x3a0)]],[0x3*-0xb6e+-0x1*-0xa70+0x195a,'u8'],[0x137e+0xb07*0x1+-0x1cfd*0x1,'u8'],[0x900+0x1928+-0x2084,'u8'],[-0x6bf+-0x15*-0x11+-0x6*-0x12b,_0x3762cf['EqZHr']],[-0x1164*0x1+0x1*0x1397+-0x87,_0xd5d532(0x1ac)],[-0x20f1+0x21*-0x18+0x25b9,'u8'],[-0x1f17+-0x3*-0x9d4+0x34c,'u8'],[-0x60*-0x4+-0xe*-0x8f+-0x79a*0x1,_0x3762cf[_0xd5d532(0x3f6)]],[0xc9*-0x1d+0x1ee5+-0x664,_0xd5d532(0x329)],[0x1ad8+-0x1053+-0x5*0x1c1,_0x3762cf[_0xd5d532(0x3a0)]],[-0x31f+-0x67f*0x1+0x5b1*0x2,_0xd5d532(0x329)],[0x1038+0x1d0a+-0x2b7a,'f32'],[-0x1212+-0x2424+-0x3802*-0x1,_0x3762cf[_0xd5d532(0x3f6)]],[0x83d+-0x2245*-0x1+-0x28b2*0x1,'i32']]},_0x199a61=null,_0x5b7eb6=null,_0x3f1ed0={},_0x357969=[],_0x2aa0ec=[],_0x443c1f=[{'type':_0x3762cf[_0xd5d532(0x25c)],'keep':!![]},{'type':'Healt'+_0xd5d532(0x368)+'pt','keep':!![]},{'type':'Weapo'+'nMana'+_0xd5d532(0x434),'keep':![]},{'type':_0x3762cf['PDFbE'],'keep':![]}];function _0x3c4d14(_0x276eb0,_0x16e7c1){var _0x47c94d={'YAmFF':function(_0x552f48,_0x6bb7f2){return _0x552f48(_0x6bb7f2);},'ArYaq':function(_0x295e95,_0x5dd537){return _0x295e95===_0x5dd537;},'xWcnW':function(_0x2eb343,_0x5e1c32){return _0x2eb343!==_0x5e1c32;}};return function(_0x507654){var _0x3b7196=_0x1a66,_0x202d31={'VzCAS':function(_0x3fe001,_0x70fdf5){return _0x47c94d['YAmFF'](_0x3fe001,_0x70fdf5);},'dUCPZ':_0x3b7196(0x42f)+_0x3b7196(0x2b3)+'\x20pane'+_0x3b7196(0x399)+_0x3b7196(0x2ee),'BZShS':'Reaso'+'n:\x20','xXpNt':function(_0x1cf388,_0x3bbe3){return _0x1cf388!==_0x3bbe3;},'coTkE':'vpeTo','adKnc':'GKJWE','fftOL':function(_0x37648b,_0x216922){return _0x47c94d['ArYaq'](_0x37648b,_0x216922);}};if(_0x3b7196(0x201)===_0x3b7196(0x1ff)){var _0x4091d7=_0xce6fd6();if(!_0x4091d7)return _0x57484c;if(_0x4091d7['datas'+'et']['api'])return _0x4091d7[_0x3b7196(0x285)];try{return _0x202d31['VzCAS'](_0x3e2d5d,_0x4091d7);}catch(_0x36c808){return _0x4091d7[_0x3b7196(0x1d0)+'et']['api']='1',_0x4091d7['api']=_0x2d97a9,_0xabd08b['warn'](_0x202d31['dUCPZ'],_0x3b7196(0x207)+':'+_0x411ffb,_0x36c808),_0x3c89a1;}}else try{var _0xe8a86a=_0x507654&&_0x507654['val']?_0x507654['val']():-0x26c9+-0x1e78+-0x4541*-0x1;if(!_0xe8a86a)return;var _0x29103b=_0x3f1ed0[_0x276eb0];if(!_0x29103b||_0x47c94d[_0x3b7196(0x3fb)](_0x29103b['ptr'],_0xe8a86a))_0x3f1ed0[_0x276eb0]={'ptr':_0xe8a86a,'firstSeen':Date[_0x3b7196(0x209)](),'hits':0x0,'replaced':!!_0x29103b};_0x3f1ed0[_0x276eb0]['hits']++;if(!_0x16e7c1){var _0xc6ef04=_0x357969[_0x3b7196(0x275)+'r'](function(_0x3d69dc){var _0x29cff0=_0x3b7196,_0x2defb1={'QSsDB':function(_0x1eb519,_0x45199a){return _0x1eb519+_0x45199a;},'dsFCZ':_0x202d31[_0x29cff0(0x180)]};if(_0x202d31[_0x29cff0(0x188)](_0x202d31[_0x29cff0(0x416)],_0x202d31[_0x29cff0(0x251)]))return _0x202d31[_0x29cff0(0x1f5)](_0x3d69dc['type'],_0x276eb0);else _0x5d6137[_0x29cff0(0x33a)+_0x29cff0(0x32d)][_0x29cff0(0x266)](_0x2defb1['QSsDB']('captu'+'red\x20'+_0x83b8aa['keys'](_0x4370e0['insta'+_0x29cff0(0x2a4)])[_0x29cff0(0x242)+'h']+(_0x29cff0(0x24b)+_0x29cff0(0x42a)+'\x20but\x20'+_0x29cff0(0x403)+_0x29cff0(0x334)+_0x29cff0(0x2fa)),_0x573164[_0x29cff0(0x1e1)+_0x29cff0(0x2bc)]?_0x2defb1[_0x29cff0(0x232)](_0x2defb1[_0x29cff0(0x1ed)],_0x40bf9d[_0x29cff0(0x1e1)+_0x29cff0(0x2bc)]):'No\x20re'+'ad\x20fa'+_0x29cff0(0x33d)+_0x29cff0(0x448)+'very\x20'+'offse'+_0x29cff0(0x191)+'\x20skip'+'ped\x20b'+_0x29cff0(0x410)+'e.'));})[-0x68*0x2e+0x15b6+-0x12*0x2b];if(_0xc6ef04&&_0xc6ef04['hook'])try{_0xc6ef04[_0x3b7196(0x426)][_0x3b7196(0x415)+'ed']=![];}catch(_0x39f0ff){}}}catch(_0x51b07d){}};}function _0x196ea9(){var _0x52dd3d=_0xd5d532,_0x326106={'luyAy':function(_0x5893a1,_0x4e88c6){return _0x5893a1<_0x4e88c6;},'iXzWo':function(_0x531e59,_0x4bb30d){var _0x4dde30=_0x1a66;return _0x3762cf[_0x4dde30(0x1d5)](_0x531e59,_0x4bb30d);},'Stjuv':function(_0x3ea4fa,_0x47716a){return _0x3762cf['wrFte'](_0x3ea4fa,_0x47716a);}};if(_0x3762cf[_0x52dd3d(0x24a)]!==_0x52dd3d(0x17f)){if(!window[_0x52dd3d(0x3b6)+'WebMo'+'dkit']||!window[_0x52dd3d(0x3b6)+'WebMo'+_0x52dd3d(0x499)]['Runti'+'me'])return![];var _0x16de75=window['Unity'+_0x52dd3d(0x163)+_0x52dd3d(0x499)]['Runti'+'me'];if(!_0x16de75[_0x52dd3d(0x319)+'ns']||!_0x16de75[_0x52dd3d(0x319)+'ns']['lengt'+'h'])return![];_0x199a61=window['Unity'+_0x52dd3d(0x163)+'dkit'][_0x52dd3d(0x2d8)+_0x52dd3d(0x2ae)+'er'],_0x5b7eb6=_0x16de75[_0x52dd3d(0x319)+'ns'][_0x16de75[_0x52dd3d(0x319)+'ns'][_0x52dd3d(0x242)+'h']-(0x154e+-0x1627+0x2*0x6d)];if(!_0x5b7eb6||typeof _0x5b7eb6['hookP'+_0x52dd3d(0x45c)]!==_0x52dd3d(0x244)+_0x52dd3d(0x375))return![];for(var _0x538fc5=0x1*0x1f37+0x11e9+-0x1890*0x2;_0x3762cf[_0x52dd3d(0x145)](_0x538fc5,_0x443c1f[_0x52dd3d(0x242)+'h']);_0x538fc5++){var _0x4be7c9=_0x443c1f[_0x538fc5];try{if('DpiPY'!=='SwpQe'){var _0x101da2=_0x5b7eb6['hookP'+'refix']({'typeName':_0x4be7c9[_0x52dd3d(0x422)],'methodName':_0x3762cf[_0x52dd3d(0x392)],'params':['i32',_0x52dd3d(0x329)],'returnType':undefined},_0x3762cf[_0x52dd3d(0x288)](_0x3c4d14,_0x4be7c9[_0x52dd3d(0x422)],_0x4be7c9['keep']));_0x357969[_0x52dd3d(0x266)]({'type':_0x4be7c9[_0x52dd3d(0x422)],'hook':_0x101da2,'keep':_0x4be7c9[_0x52dd3d(0x27a)]});}else{_0x49e117['push']('warni'+_0x52dd3d(0x32d));for(var _0x144dd8=0x6be*-0x1+0x24ea+-0xf16*0x2;_0x326106['luyAy'](_0x144dd8,_0x14ca97[_0x52dd3d(0x33a)+'ngs'][_0x52dd3d(0x242)+'h']);_0x144dd8++)_0x472f2d[_0x52dd3d(0x266)](_0x326106[_0x52dd3d(0x246)](_0x52dd3d(0x1e9),_0x474031[_0x52dd3d(0x33a)+'ngs'][_0x144dd8]));}}catch(_0x235190){_0x2aa0ec['push'](_0x3762cf[_0x52dd3d(0x335)](_0x4be7c9[_0x52dd3d(0x422)],':\x20')+String(_0x235190&&_0x235190['messa'+'ge']||_0x235190)['slice'](-0x1593+0x919+-0x63d*-0x2,0x213f*0x1+0x283+-0x2322));}}return!![];}else{var _0x209078=_0x3eac2e[_0x52dd3d(0x3b6)+'WebMo'+_0x52dd3d(0x499)]&&_0x5b5c79[_0x52dd3d(0x3b6)+_0x52dd3d(0x163)+_0x52dd3d(0x499)][_0x52dd3d(0x455)+'me']||null,_0x534cf9=_0x209078&&_0x209078[_0x52dd3d(0x2b9)+'pCont'+_0x52dd3d(0x48a)]&&_0x209078[_0x52dd3d(0x2b9)+'pCont'+'ext'][_0x52dd3d(0x3d6)+_0x52dd3d(0x2a5)];_0x326106['Stjuv'](_0x534cf9,!_0x539318)&&(_0x3db28c=_0x507401());_0x96f766++,_0x10ecd3(_0x2d42d9());if(!_0x321f72&&_0x37232d<0x1834+0x2*-0x11e1+0xcba)_0x5c8556(_0x130102,-0x17ab+0xedd+0x3*0x58a);else{if(!_0x53b9ba[_0x52dd3d(0x249)](_0x4d7703)[_0x52dd3d(0x242)+'h']&&_0x326106['luyAy'](_0x5d7cbc,0x55f*0x1+0x8a4+-0xcd7))_0x398f4d(_0x16a315,0x1*0x26a9+0x1f5*-0xd+-0xad*0x8);else _0x5341b1(_0x3ee03e,0x15bb+0x1*-0x1763+0xe8*0x7);}}}function _0x4be9f3(){var _0x2fea65=_0xd5d532,_0x76f516=-0x1*-0x1b1+-0x2*-0x14b+-0x447;for(var _0x212930=-0x176e+0xb*-0x257+0x312b;_0x212930<_0x357969[_0x2fea65(0x242)+'h'];_0x212930++){if(_0x3762cf[_0x2fea65(0x338)]!==_0x3762cf[_0x2fea65(0x338)]){var _0x4b46e4=_0x48d7c4[_0x2fea65(0x18c)+'refix']({'typeName':_0x5fa1f['type'],'methodName':'Updat'+'e','params':[_0x2fea65(0x329),_0x2fea65(0x329)],'returnType':_0x2944c1},_0x437488(_0x556f14[_0x2fea65(0x422)],_0x133c68['keep']));_0x1bb1e7[_0x2fea65(0x266)]({'type':_0x46d618[_0x2fea65(0x422)],'hook':_0x4b46e4,'keep':_0x53cb5d[_0x2fea65(0x27a)]});}else{if(_0x357969[_0x212930][_0x2fea65(0x426)]&&_0x357969[_0x212930][_0x2fea65(0x426)][_0x2fea65(0x449)+'ed'])_0x76f516++;}}return _0x76f516;}var _0x29d3b0=null,_0x82fc26=[];function _0x2e03ff(_0x4a211f){var _0x369927=_0xd5d532;try{if(!_0x199a61||!_0x4a211f)return null;var _0xcf393d=new _0x199a61(_0x4a211f)[_0x369927(0x267)+_0x369927(0x400)+'me']();return _0x3762cf[_0x369927(0x235)](_0xcf393d,undefined)?null:_0xcf393d;}catch(_0x39a1ef){return _0x3762cf['RYlye']('bWuyd','OHIyM')?(_0x2a2765[_0x369927(0x1be)+'d']++,_0x36caf0[_0x369927(0x1e1)+'rror']=_0x1cdaf7['lastE'+_0x369927(0x2bc)]||_0x3762cf[_0x369927(0x283)](_0x369927(0x16e)+_0x369927(0x47c),_0x105609['toStr'+'ing'](-0xa6*0x2d+0xdb7+-0x5*-0x31b))+_0x3762cf[_0x369927(0x1f4)]+_0x4ea5b9['byteL'+_0x369927(0x384)]['toStr'+_0x369927(0x2aa)](-0x3*0x10d+-0x1*0x9d9+0xd10),_0x38367c):null;}}function _0x2cd1a8(){var _0x4b4ca7=_0xd5d532;if(_0x4b4ca7(0x1ce)!=='hjoAy')_0x3d177d=_0x429067(_0x2b3cfa&&_0xefd8d0[_0x4b4ca7(0x240)+'ge']||_0x367221);else{var _0x357b36={};_0x54bb1a['ok']=-0x3*-0xbb5+0x9ef+-0x2d0e,_0x54bb1a[_0x4b4ca7(0x1be)+'d']=0xc1a*0x2+0x70c+-0x1f40,_0x54bb1a['lastE'+'rror']=null;var _0x36de18=Object[_0x4b4ca7(0x249)](_0x444abd);for(var _0xa38f37=0x1c22+0x454+0x1*-0x2076;_0x3762cf['KraHy'](_0xa38f37,_0x36de18['lengt'+'h']);_0xa38f37++){var _0x366a9b=_0x36de18[_0xa38f37],_0x7fc092=_0x3f1ed0[_0x366a9b];if(!_0x7fc092||!_0x7fc092[_0x4b4ca7(0x346)])continue;var _0x477718=_0x444abd[_0x366a9b]||[],_0x60b3f7=[];for(var _0x535318=-0x306*-0x2+-0x1822*-0x1+-0x1e2e;_0x535318<_0x477718[_0x4b4ca7(0x242)+'h'];_0x535318++){if('qROGu'!==_0x3762cf['dckqn']){var _0x4eeaa8=-0xc*-0x185+0x1*-0xc7+0x6d*-0x29;for(var _0x59255f=-0x28e*-0x1+0x1951+-0x593*0x5;_0x59255f<_0x463f14[_0x4b4ca7(0x242)+'h'];_0x59255f++){if(_0x54a1aa[_0x59255f][_0x4b4ca7(0x426)]&&_0x5ec516[_0x59255f][_0x4b4ca7(0x426)][_0x4b4ca7(0x449)+'ed'])_0x4eeaa8++;}return _0x4eeaa8;}else{var _0xa2c416=_0x477718[_0x535318][-0x1cef*-0x1+-0x1d4+-0x1b1b],_0x5d9f97=_0x477718[_0x535318][-0x151a+-0x19db*-0x1+0x4c0*-0x1];if(_0x5d9f97['index'+'Of'](_0x4b4ca7(0x2d6))===0x2*-0x503+0x10*0x139+-0x98a){var _0x4d3c3d=_0x205358(_0x7fc092[_0x4b4ca7(0x346)],_0xa2c416,_0x5d9f97);if(!_0x4d3c3d)continue;_0x60b3f7[_0x4b4ca7(0x266)]({'o':_0xa2c416,'k':_0x5d9f97,'v':_0x4d3c3d['real'],'fake':_0x4d3c3d[_0x4b4ca7(0x33e)],'act':_0x4d3c3d[_0x4b4ca7(0x13f)],'inited':_0x4d3c3d[_0x4b4ca7(0x37f)],'raw':_0x3762cf[_0x4b4ca7(0x1cc)](_0x3762cf[_0x4b4ca7(0x258)](_0x3762cf['WngxQ'](_0x3762cf['HFIDk'](_0x4b4ca7(0x376)+_0x4d3c3d[_0x4b4ca7(0x149)],_0x3762cf['IgYHq']),_0x4d3c3d[_0x4b4ca7(0x263)+'n']),'\x20fake'+'='),_0x4d3c3d[_0x4b4ca7(0x33e)])+(_0x4d3c3d[_0x4b4ca7(0x13f)]?_0x3762cf[_0x4b4ca7(0x340)]:'')});}else{var _0x4ecf06=_0x3d6f25(_0x7fc092[_0x4b4ca7(0x346)]+_0xa2c416,_0x5d9f97);if(_0x4ecf06===undefined)continue;_0x60b3f7[_0x4b4ca7(0x266)]({'o':_0xa2c416,'k':_0x5d9f97,'v':_0x4ecf06,'raw':''});}}}if(_0x60b3f7[_0x4b4ca7(0x242)+'h'])_0x357b36[_0x366a9b]=_0x60b3f7;}return _0x357b36;}}function _0x3cff1e(){var _0x11a47c=_0xd5d532,_0x1df16c={'tdphf':function(_0x1b2c40,_0x5af701){return _0x1b2c40+_0x5af701;},'pwKVY':function(_0x398171,_0x3c9514){return _0x3762cf['PskQs'](_0x398171,_0x3c9514);},'kFqLf':function(_0x10ea33,_0xd43bb2){return _0x10ea33+_0xd43bb2;},'SRaFx':'LIVE\x20'+'·\x20','pToLK':function(_0x26e617){return _0x26e617();},'HhGMK':_0x11a47c(0x2ff)};if('jVNze'===_0x11a47c(0x1d3)){var _0x736814=[_0x3762cf[_0x11a47c(0x2cb)],_0x11a47c(0x353)+'Game',_0x11a47c(0x2ac),_0x3762cf['qwujW']],_0x31ef32={};for(var _0x4bcf71=0x1*-0x1370+0x1*0xef5+0x47b;_0x3762cf['WBvRZ'](_0x4bcf71,_0x736814[_0x11a47c(0x242)+'h']);_0x4bcf71++){if(_0x11a47c(0x498)===_0x11a47c(0x498)){var _0x44a858=_0x736814[_0x4bcf71],_0x41dc8b=typeof window[_0x44a858];_0x31ef32[_0x44a858]=_0x3762cf[_0x11a47c(0x276)](_0x41dc8b,_0x11a47c(0x138)+'ined')?_0x3762cf['Aprve']:_0x41dc8b;}else{_0x3762cf[_0x11a47c(0x42e)](_0x14e971)[_0x11a47c(0x221)]({'host':_0x4a6a41['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}}try{if(_0x11a47c(0x2a3)!==_0x11a47c(0x2a3))_0x5ec46e=_0x1df16c['tdphf'](_0x1df16c['pwKVY'](_0x1df16c[_0x11a47c(0x228)](_0x1df16c[_0x11a47c(0x230)],_0x51f7cc[_0x11a47c(0x249)](_0x3c113f[_0x11a47c(0x215)+'nces'])[_0x11a47c(0x242)+'h']),_0x11a47c(0x24b)+_0x11a47c(0x1d6)+'\x20')+_0x806d5e,'s'),_0x1c9dcc=_0x11a47c(0x21f)+'a8';else{var _0x5888c8=window['unity'+_0x11a47c(0x1b0)+_0x11a47c(0x15d)]||window[_0x11a47c(0x353)+_0x11a47c(0x194)]||window[_0x11a47c(0x2ac)];_0x31ef32[_0x11a47c(0x1e4)+_0x11a47c(0x20e)]=!!(_0x5888c8&&_0x5888c8['Modul'+'e']),_0x31ef32[_0x11a47c(0x2f8)+'8']=!!(_0x5888c8&&_0x5888c8['Modul'+'e']&&_0x5888c8[_0x11a47c(0x47d)+'e']['HEAPU'+'8']),_0x31ef32['heapB'+_0x11a47c(0x1e8)]=_0x31ef32['heapU'+'8']?_0x5888c8['Modul'+'e'][_0x11a47c(0x1f1)+'8']['lengt'+'h']:-0xdb5*-0x2+-0x417*0x9+-0x965*-0x1;}}catch(_0x341297){_0x31ef32[_0x11a47c(0x1e4)+'dule']=![],_0x31ef32[_0x11a47c(0x2f8)+'8']=![];}return _0x31ef32[_0x11a47c(0x16c)+_0x11a47c(0x2ae)+'er']=typeof _0x199a61,_0x31ef32;}else try{return _0x1df16c[_0x11a47c(0x370)](_0xd9bd04);}catch(_0x17dbf5){return{'version':_0x1df16c['HhGMK'],'when':new _0x198e58()[_0x11a47c(0x16f)+_0x11a47c(0x381)+'g'](),'elapsedMs':_0x29b1f2[_0x11a47c(0x209)]()-_0x2f81b4,'host':_0x52022f,'uwmk':!!(_0x37f0ce['Unity'+'WebMo'+'dkit']&&_0x1c0f70[_0x11a47c(0x3b6)+'WebMo'+_0x11a47c(0x499)][_0x11a47c(0x455)+'me']),'il2CppContext':![],'arm':_0x5978e2,'hooksTotal':_0x4037f8[_0x11a47c(0x242)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x1ef89b(_0x17dbf5&&_0x17dbf5[_0x11a47c(0x240)+'ge']||_0x17dbf5)};}}function _0x1cb19e(_0x1562c1){var _0x518cd3=_0xd5d532,_0xdc7ee5={};for(var _0x4e9522 in _0x1562c1){var _0x567044=_0x1562c1[_0x4e9522];for(var _0x44d954=0x97e+0x1*0x381+-0xcff;_0x3762cf[_0x518cd3(0x361)](_0x44d954,_0x567044[_0x518cd3(0x242)+'h']);_0x44d954++){_0x518cd3(0x47a)==='jCMbe'?_0xdc7ee5[_0x3762cf[_0x518cd3(0x17c)](_0x3762cf['xmPhb'](_0x4e9522,'+0x'),_0x567044[_0x44d954]['o'][_0x518cd3(0x1cb)+_0x518cd3(0x2aa)](-0x18b6+-0x7*-0x503+-0x7*0x179))]=_0x567044[_0x44d954]['v']:_0x46cc81=_0x3762cf['SAqxL'](_0x2508a8);}}return _0xdc7ee5;}function _0x1fbb8d(_0x22153f){var _0x32b127=_0xd5d532;if(_0x3762cf['tIKWe'](_0x22153f,_0x32b127(0x37b)+'hot'))return;var _0x242494=_0x2cd1a8(),_0x4454f3=_0x1cb19e(_0x242494);if(!_0x29d3b0){_0x29d3b0=_0x4454f3,_0x82fc26=[],_0x3762cf[_0x32b127(0x481)](_0x22f101,_0x32b127(0x38b)+'t',{'report':_0x970c04()});return;}_0x82fc26=[];for(var _0x2ec362 in _0x4454f3){if(_0x3762cf['XWYNy'](_0x32b127(0x437),_0x3762cf[_0x32b127(0x2bf)])){var _0x29942a=_0x29d3b0[_0x2ec362],_0x30d585=_0x4454f3[_0x2ec362];if(_0x29942a!==_0x30d585)_0x82fc26[_0x32b127(0x266)](_0x3762cf['Mnxyt'](_0x3762cf[_0x32b127(0x37a)](_0x2ec362+':\x20',_0x29942a)+_0x32b127(0x2ec),_0x30d585));}else _0x1df14d=_0x32b127(0x28d)+'ata\x20r'+_0x32b127(0x173)+'·\x20'+_0x3005b0+'s',_0x15f50e=_0x32b127(0x1ba)+'8a';}_0x29d3b0=_0x4454f3,_0x22f101(_0x3762cf['Gsvhs'],{'report':_0x970c04()});}window['addEv'+'entLi'+_0xd5d532(0x1e0)+'r'](_0xd5d532(0x262)+'wn',function(_0x304773){var _0x46e550=_0xd5d532;_0x304773&&_0x304773[_0x46e550(0x16a)]==='F9'&&(_0x304773[_0x46e550(0x419)+_0x46e550(0x14c)+_0x46e550(0x26f)](),_0x1fbb8d('snaps'+'hot'));},!![]);function _0x970c04(){var _0x325291=_0xd5d532,_0x2322f9={'zjVTs':function(_0x2584fa,_0x2d0cbf){return _0x2584fa+_0x2d0cbf;},'SZShx':_0x3762cf[_0x325291(0x350)],'LkPPz':function(_0x2008b5,_0x383ad5){return _0x2008b5||_0x383ad5;},'qdWpT':function(_0x1a428d,_0x15095c){var _0x2e3256=_0x325291;return _0x3762cf[_0x2e3256(0x467)](_0x1a428d,_0x15095c);},'xgcRk':function(_0x249d7c,_0x457064){return _0x249d7c===_0x457064;},'UjzOD':function(_0x15da48,_0x473ddb){var _0x3cc194=_0x325291;return _0x3762cf[_0x3cc194(0x2a6)](_0x15da48,_0x473ddb);},'uKVoz':_0x325291(0x329),'idodN':function(_0x207c0d,_0x33178e){return _0x3762cf['itqyv'](_0x207c0d,_0x33178e);},'gsTLM':_0x3762cf['eTlCA'],'zzkLY':function(_0x4c19bc,_0x4ddcd6){return _0x4c19bc|_0x4ddcd6;},'aNjpp':function(_0x325279,_0x2718ee){var _0x22f559=_0x325291;return _0x3762cf[_0x22f559(0x3bc)](_0x325279,_0x2718ee);},'yxXnd':function(_0x51ba9f,_0x3c0f93){return _0x51ba9f+_0x3c0f93;}};if(_0x325291(0x473)!==_0x325291(0x1f8)){var _0xcb065a=window[_0x325291(0x3b6)+_0x325291(0x163)+'dkit']&&window[_0x325291(0x3b6)+_0x325291(0x163)+_0x325291(0x499)][_0x325291(0x455)+'me']||null,_0x5dc6f7=_0xcb065a&&_0xcb065a[_0x325291(0x2b9)+_0x325291(0x453)+'ext'],_0x56bf9c=_0x5dc6f7&&_0x5dc6f7[_0x325291(0x3d6)+_0x325291(0x2a5)],_0x46f151={},_0x467d1e=[];for(var _0x54e093 in _0x3f1ed0){if(_0x3762cf[_0x325291(0x3d1)]!==_0x325291(0x485)){_0x46f151[_0x54e093]=_0x3762cf[_0x325291(0x260)]('0x',_0x3f1ed0[_0x54e093][_0x325291(0x346)]['toStr'+_0x325291(0x2aa)](0x1*-0x253d+0x3cb*0x1+-0x2182*-0x1));if(_0x3f1ed0[_0x54e093][_0x325291(0x34a)+'ced'])_0x467d1e[_0x325291(0x266)](_0x54e093);}else{var _0x255325=_0x5b893a['data'];if(_0x255325&&_0x255325[_0x325291(0x147)+'ura']===_0x43a824&&_0x255325['kind']==='cmd')_0x53b799(_0x255325[_0x325291(0x2e3)],_0x255325['arg']);}}var _0x4a5f5d={};for(var _0x26a1d7 in _0x3f1ed0)_0x4a5f5d[_0x26a1d7]=_0x2e03ff(_0x3f1ed0[_0x26a1d7]['ptr']);var _0xe54371={},_0x2dc5b3=null;try{if(_0x325291(0x1f9)===_0x325291(0x1f9))_0xe54371=_0x3762cf[_0x325291(0x42e)](_0x2cd1a8);else return{'version':'2.0.1','when':new _0xfd1b82()['toISO'+_0x325291(0x381)+'g'](),'elapsedMs':_0x3762cf['sRETH'](_0x1104fc[_0x325291(0x209)](),_0x5d1be1),'host':_0x2a4960,'uwmk':!!(_0xce0fe8['Unity'+_0x325291(0x163)+_0x325291(0x499)]&&_0x18d783['Unity'+'WebMo'+_0x325291(0x499)]['Runti'+'me']),'il2CppContext':![],'arm':_0x258f44,'hooksTotal':_0x460816['lengt'+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x31f2e0(_0x2c13a7&&_0x4340d6[_0x325291(0x240)+'ge']||_0x4e33ca)};}catch(_0x4c7e6d){_0x2dc5b3=String(_0x4c7e6d&&_0x4c7e6d['messa'+'ge']||_0x4c7e6d);}var _0x272068={'version':'2.0.1','when':new Date()['toISO'+_0x325291(0x381)+'g'](),'elapsedMs':Date[_0x325291(0x209)]()-_0x34b58e,'frame':location[_0x325291(0x13e)][_0x325291(0x187)](0x172f+-0xbf*0x9+-0x1078,0xfbc+0x3*-0x649+0x397),'host':_0x54d273,'frameRole':_0x4cf714,'uwmk':!!_0xcb065a,'il2CppContext':!!_0x5dc6f7,'typeCount':_0x56bf9c?Object['keys'](_0x56bf9c)[_0x325291(0x242)+'h']:null,'arm':_0x3bbe7d,'assemblies':_0x77598b,'hooksTotal':_0x357969['lengt'+'h'],'hooksApplied':_0x4be9f3(),'hookErrors':_0x2aa0ec[_0x325291(0x187)](0x115*0x6+0x872*0x1+-0x3bc*0x4,0x1*-0x9ef+-0xc*0xf1+0x1543),'instances':_0x46f151,'classNames':_0x4a5f5d,'instancesReplaced':_0x467d1e,'survey':_0xe54371,'surveyRows':Object['keys'](_0xe54371)['reduc'+'e'](function(_0x111ae4,_0x4379de){var _0x317a83=_0x325291;return _0x2322f9[_0x317a83(0x1c7)](_0x111ae4,_0xe54371[_0x4379de]['lengt'+'h']);},-0x1b25+-0x39d+-0x7f*-0x3e),'reads':{'ok':_0x54bb1a['ok'],'failed':_0x54bb1a[_0x325291(0x1be)+'d'],'lastError':_0x54bb1a[_0x325291(0x1e1)+'rror']},'globals':_0x3762cf[_0x325291(0x42e)](_0x3cff1e),'diff':_0x82fc26[_0x325291(0x187)](-0xa*-0x341+-0x937+-0x1753,-0x1*-0x106b+0x2*0xa2a+-0x1ed*0x13),'uwmkLog':_0x6e41c2[_0x325291(0x187)](-0x22ee+-0x40f+0x26fd,-0xb17+-0x375*0x4+0x2c7*0x9),'warnings':[]};if(_0x2dc5b3)_0x272068[_0x325291(0x33a)+'ngs'][_0x325291(0x266)](_0x3762cf['kQyKr']+_0x2dc5b3);if(_0x3bbe7d[_0x325291(0x2a2)])_0x272068[_0x325291(0x33a)+_0x325291(0x32d)]['push'](_0x3762cf[_0x325291(0x1f6)]+_0x3bbe7d[_0x325291(0x2a2)]);if(_0x3762cf[_0x325291(0x3b0)](_0x272068[_0x325291(0x199)+'yRows'],0x24e6+0x37d+-0x2863)&&_0x3762cf['hYCDk'](Object['keys'](_0x272068[_0x325291(0x215)+'nces'])[_0x325291(0x242)+'h'],-0x1f6*0x8+0x1d9b+-0xdeb)){if(_0x3762cf[_0x325291(0x30f)](_0x325291(0x337),_0x3762cf[_0x325291(0x2ef)])){var _0xc526f0=_0x2322f9[_0x325291(0x140)][_0x325291(0x452)]('|'),_0x373511=-0x1f*-0x11e+-0x7a5+-0x1afd;while(!![]){switch(_0xc526f0[_0x373511++]){case'0':var _0x34c9d3;continue;case'1':var _0x3df2a6=_0x3d68d7(_0x2322f9[_0x325291(0x1c7)](_0x5afeaa,_0x232ced)+_0x417a50[_0x325291(0x149)],'u8');continue;case'2':var _0xb8a948=_0x55195c(_0x124f3b+_0x356700+_0x417a50['hidde'+'n'],'i32');continue;case'3':_0x2c5422=_0x2322f9['LkPPz'](_0x2c5422,0x38*-0x15+-0x1*-0x8d1+-0x439)&0xb28+-0x22b+-0x8fc;continue;case'4':if(_0x2322f9['qdWpT'](_0x3df2a6,_0x4d4c8f)||_0x2322f9[_0x325291(0x269)](_0xb8a948,_0x3e0049)||_0x8e8cb2===_0x1c432a||_0x4523b1===_0x10082c)return null;continue;case'5':_0x3df2a6&=-0x18d*0x16+-0x1973+0x3c90;continue;case'6':return{'real':_0x34c9d3,'fake':_0x8e8cb2,'act':_0x4523b1,'init':_0x2c5422,'key':_0x3df2a6,'hidden':_0xb8a948};case'7':var _0x417a50=_0x21aabb[_0x55cd4f];continue;case'8':_0x4523b1&=-0x255a+-0x2a4*0xb+-0x59*-0xbf;continue;case'9':if(!_0x417a50)return null;continue;case'10':var _0x8e8cb2=_0x4a4765(_0x2322f9[_0x325291(0x1c7)](_0x46731d,_0x2a364e)+_0x417a50[_0x325291(0x33e)],_0x2a171b===_0x325291(0x3e4)?_0x325291(0x1ac):_0x2322f9['UjzOD'](_0x2917cb,'obfI')?_0x2322f9[_0x325291(0x1d9)]:'u8');continue;case'11':if(_0x335ef4===_0x325291(0x3e4))_0x34c9d3=_0x533ed5(_0xb8a948^_0x3df2a6);else{if(_0x2322f9['idodN'](_0x540c07,_0x2322f9[_0x325291(0x234)]))_0x34c9d3=_0x2322f9[_0x325291(0x45f)](_0x2322f9['aNjpp'](_0xb8a948,_0x3df2a6),0x1351+0x37c*-0x2+-0x6d*0x1d);else _0x34c9d3=(_0x2322f9[_0x325291(0x446)](_0xb8a948,_0x3df2a6)&0xd4d+-0x185*0x13+0x1091)!==0x1808+-0x1*0xcf2+0x1*-0xb16?-0x10c5+0x1*-0xef5+0x1fbb:-0xe*0x240+0xf98*-0x1+0x2f18;}continue;case'12':var _0x4523b1=_0x4067e(_0x2322f9['zjVTs'](_0x1464b4,_0x248bc9)+_0x417a50[_0x325291(0x2c2)+'e'],'u8');continue;case'13':_0xb8a948|=-0x1*-0x1ddc+0x34+-0x68*0x4a;continue;case'14':var _0x2c5422=_0x27c9cf(_0x2322f9[_0x325291(0x440)](_0x2af866,_0x946a38)+_0x417a50['inite'+'d'],'u8');continue;}break;}}else _0x272068[_0x325291(0x33a)+_0x325291(0x32d)]['push'](_0x3762cf[_0x325291(0x1fb)](_0x3762cf['bEpwa']+Object['keys'](_0x272068[_0x325291(0x215)+_0x325291(0x2a4)])['lengt'+'h'],_0x3762cf[_0x325291(0x2a7)])+(_0x54bb1a['lastE'+'rror']?'Reaso'+'n:\x20'+_0x54bb1a['lastE'+_0x325291(0x2bc)]:_0x3762cf[_0x325291(0x19b)]));}if(_0x272068[_0x325291(0x41a)+'ls']&&!_0x272068['globa'+'ls'][_0x325291(0x2f8)+'8']){if(_0x3762cf[_0x325291(0x1c3)](_0x325291(0x412),_0x3762cf[_0x325291(0x43f)]))_0x272068['warni'+_0x325291(0x32d)][_0x325291(0x266)]('game.'+_0x325291(0x47d)+_0x325291(0x3c8)+_0x325291(0x22e)+_0x325291(0x38a)+_0x325291(0x223)+_0x325291(0x441)+_0x325291(0x34e)+'dow.u'+'nityI'+_0x325291(0x307)+_0x325291(0x2ea)+'ityGa'+_0x325291(0x2fd)+_0x325291(0x20c)+_0x3762cf['MXjrZ']);else{if(_0x3762cf[_0x325291(0x28b)](!_0x124d09,!_0x17e77a))return null;var _0x5bd23e=new _0x8fbfed(_0x5c1023)['getCl'+'assNa'+'me']();return _0x3762cf['hCFBM'](_0x5bd23e,_0x28be61)?null:_0x5bd23e;}}return(_0x272068[_0x325291(0x41a)+'ls']&&!_0x272068['globa'+'ls'][_0x325291(0x16c)+_0x325291(0x2ae)+'er']||_0x3762cf[_0x325291(0x1cd)](_0x272068['globa'+'ls']['value'+'Wrapp'+'er'],_0x325291(0x138)+_0x325291(0x495)))&&_0x272068['warni'+_0x325291(0x32d)][_0x325291(0x266)](_0x3762cf[_0x325291(0x302)]),_0x272068['hooks'+_0x325291(0x160)]>-0x93*0x43+0x119*0x16+-0x13*-0xc1&&_0x3762cf[_0x325291(0x294)](_0x272068[_0x325291(0x137)+_0x325291(0x3da)+'ed'],0x2f0+0x137*0x1b+0x23bd*-0x1)&&_0x56bf9c&&_0x272068['warni'+'ngs'][_0x325291(0x266)](_0x3762cf[_0x325291(0x2d2)]('0\x20of\x20'+_0x272068[_0x325291(0x137)+_0x325291(0x160)]+('\x20Upda'+_0x325291(0x2ce)+_0x325291(0x137)+'\x20appl'+_0x325291(0x21d)+_0x325291(0x34b)+_0x325291(0x3fc)+_0x325291(0x478)),_0x325291(0x33f)+',\x20Met'+_0x325291(0x431)+_0x325291(0x2f1)+_0x325291(0x231)+_0x325291(0x35d)+_0x325291(0x1b8)+_0x325291(0x182)+_0x325291(0x483)+'s\x20bui'+'ld,\x20s'+_0x325291(0x428)+'hing\x20'+_0x325291(0x470)+'oked.')),_0x272068[_0x325291(0x137)+_0x325291(0x3da)+'ed']>0xd7*0x3+0x1a*0x4f+-0xa8b&&!_0x272068['insta'+'nces'][_0x325291(0x31a)+_0x325291(0x298)+_0x325291(0x36b)]&&_0x272068[_0x325291(0x33a)+'ngs'][_0x325291(0x266)]('Hooks'+'\x20are\x20'+_0x325291(0x449)+'ed\x20bu'+_0x325291(0x2ed)+_0x325291(0x31a)+_0x325291(0x298)+_0x325291(0x32e)+'as\x20fi'+'red\x20y'+_0x325291(0x39a)+('Eithe'+_0x325291(0x25e)+'\x20are\x20'+_0x325291(0x254)+'n\x20a\x20r'+_0x325291(0x1a5)+'\x20or\x20t'+'he\x20ho'+'ok\x20is'+'\x20on\x20t'+_0x325291(0x196)+_0x325291(0x1ab)+_0x325291(0x1a9)+'ad.')),_0x272068[_0x325291(0x215)+'ncesR'+_0x325291(0x1bf)+'ed'][_0x325291(0x242)+'h']&&_0x272068['warni'+'ngs']['push']('rebui'+'lt\x20si'+_0x325291(0x256)+_0x325291(0x20a)+_0x325291(0x31d)+'re\x20(r'+_0x325291(0x3c6)+_0x325291(0x1b4)+_0x272068['insta'+_0x325291(0x2fb)+_0x325291(0x1bf)+'ed'][_0x325291(0x1c4)](',\x20')),_0x272068;}else return new _0x222274(_0x113bfd['buffe'+'r'],_0x393224[_0x325291(0x139)+_0x325291(0x143)],_0x15c57c['byteL'+_0x325291(0x384)]);}function _0x47743d(_0x19d56d){var _0x3a6de3=_0xd5d532;console['log']('%c[sa'+_0x3a6de3(0x2b3)+'\x20Skil'+'lWarz'+_0x3a6de3(0x359)+'rt',_0x3762cf[_0x3a6de3(0x2d2)]('color'+':',_0x332217)+(';font'+_0x3a6de3(0x1b7)+_0x3a6de3(0x281)+'0'),_0x19d56d),console[_0x3a6de3(0x1db)](_0x3762cf[_0x3a6de3(0x475)](_0x3762cf[_0x3a6de3(0x482)](_0x3762cf['jQCYh'](_0x177714,'\x0a'),JSON[_0x3a6de3(0x190)+_0x3a6de3(0x364)](_0x19d56d,null,0xc12+0x1cb7*-0x1+0x10a6*0x1))+'\x0a',_0x34cdd9)),_0x3762cf[_0x3a6de3(0x288)](_0x22f101,'repor'+'t',{'report':_0x19d56d});}function _0x1c1735(){var _0x365090=_0xd5d532;try{return _0x3762cf['UwwWl'](_0x970c04);}catch(_0x3c538f){if(_0x3762cf['Odlbu']===_0x3762cf[_0x365090(0x1a3)])_0x194e02['warni'+'ngs'][_0x365090(0x266)](_0x3762cf['ALwiz'](_0x3762cf[_0x365090(0x327)],'Eithe'+'r\x20you'+'\x20are\x20'+_0x365090(0x254)+_0x365090(0x192)+_0x365090(0x1a5)+'\x20or\x20t'+_0x365090(0x24d)+_0x365090(0x312)+'\x20on\x20t'+_0x365090(0x196)+'ong\x20o'+'verlo'+'ad.'));else return{'version':_0x3762cf[_0x365090(0x443)],'when':new Date()[_0x365090(0x16f)+'Strin'+'g'](),'elapsedMs':Date[_0x365090(0x209)]()-_0x34b58e,'host':_0x54d273,'uwmk':!!(window[_0x365090(0x3b6)+_0x365090(0x163)+'dkit']&&window[_0x365090(0x3b6)+'WebMo'+_0x365090(0x499)][_0x365090(0x455)+'me']),'il2CppContext':![],'arm':_0x3bbe7d,'hooksTotal':_0x357969['lengt'+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x3762cf['dMSDq'](String,_0x3c538f&&_0x3c538f['messa'+'ge']||_0x3c538f)};}}function _0xbc745b(){var _0x518fe5=![],_0x32c276=0xb*-0x2b9+0x1215+0xbde;_0x47743d(_0x1c1735()),function _0x5ed055(){var _0x346c2=_0x1a66,_0x130c55=window[_0x346c2(0x3b6)+'WebMo'+'dkit']&&window['Unity'+_0x346c2(0x163)+_0x346c2(0x499)]['Runti'+'me']||null,_0x83819a=_0x130c55&&_0x130c55[_0x346c2(0x2b9)+_0x346c2(0x453)+'ext']&&_0x130c55[_0x346c2(0x2b9)+_0x346c2(0x453)+'ext']['scrip'+_0x346c2(0x2a5)];_0x3762cf[_0x346c2(0x1e7)](_0x83819a,!_0x518fe5)&&(_0x518fe5=_0x196ea9());_0x32c276++,_0x47743d(_0x1c1735());if(!_0x518fe5&&_0x32c276<-0x304+-0xd3*-0x29+-0x1d9b)_0x3762cf[_0x346c2(0x481)](setTimeout,_0x5ed055,-0xd4f*0x2+0x789*0x2+-0x15*-0xec);else{if(!Object[_0x346c2(0x249)](_0x3f1ed0)['lengt'+'h']&&_0x3762cf[_0x346c2(0x460)](_0x32c276,-0x180b*-0x1+0x7ca+-0x1ea9))setTimeout(_0x5ed055,-0x93b+-0x16f7+0x6*0x6ab);else _0x3762cf[_0x346c2(0x380)](setTimeout,_0x5ed055,-0x1*-0x192b+0x19f6+0x3*-0xf7b);}}();}if(document[_0xd5d532(0x153)])_0xbc745b();else document[_0xd5d532(0x306)+'entLi'+'stene'+'r']('DOMCo'+_0xd5d532(0x341)+_0xd5d532(0x33b)+'d',_0xbc745b,{'once':!![]});})()));function _0x5e6e(){var _0x524870=['rgLMzIa','vgfTCgu','rLfSAg4','Dxm6n3a','B3v0','B2SGAxm','D2fSA2K','DgHLigm','zw1LBNq','u2P5Axa','CwTJEue','ywLUAw4','CgX1z2K','rLbty28','A3mGD2G','zg9JDw0','y2fWDhu','nNW4Fdm','kdi1nsW','BYb0Agu','yxrLigy','DMvOvgu','lwzPCNm','zxG7z2e','pc9KAxy','C1Dnsey','zffnEMq','BLDLsuK','AtmY','ze1trhe','4OcuigzYyq','BKrbCeS','BMDZ','BgvYigG','B250zw4','z2uUrgu','zw50o2i','D2LUzg8','r0DFr2e','mcbMAwu','C3bpr1y','yw1L','y0rdv3q','rgvzqwK','mZmYmfPNBgvNqW','D2fYBMK','tg9Hzgu','igTPBMq','AwXLzcW','zMfRzq','khrOAxm','CKf4z1a','BNrLBNq','CgvJDhm','teLwrsa','4Psa4Psaia','Fdj8nxW','ChrY','Fdj8mtq','yMX5lMK','psjZDZi','CMvWBge','vgHLihm','uKv5AxK','nNW5Fdq','ysb3Aw4','DgLHDgu','rgLtzha','nZq4mZa','DhbHC3m','Dw5PDhK','pc9IpG','AxmGBM8','Dg9Y','yvzHEgu','pt09','ihjLCg8','DKznsgO','zdDHotK','qwfNA1K','AwqGzgK','yxjTzwq','CNnVCJO','igrPzca','uevLzem','Axb0ige','mtHIq212wfq','z2LMEq','yxbWBhK','wevQyKy','B3jPz2K','AfnJCMK','B250lxC','yxjT','BgvY','ihnPBMm','Dgv4Dem','lxyYE2e','EI51C2u','CfrVteS','nda0mtyWDwDdrMjg','ywqGzMe','wvv0r1i','qxnZzw0','Aw9U','A2v5pq','y2GUC3K','yxbZAg8','DgHLifC','CgnjELG','C25HChm','BMqU','tKHxuLC','icaO','Aw5PDa','BeHcuvK','u3rYAw4','t0rcDLy','psjJB2W','zw5NDgG','ihrOAxm','Dgf0Dxm','y3nZvgu','FdD8nxW','y3jLyxq','B3qGCMu','CMvWB3i','y2fSlMq','ieaG','oJC4DMG','CgvYBw8','ywz0zxi','nsWXndm','A0z1rum','zwXHChm','Ate2','CMfTzsa','igDHBwu','zxmGAxq','C3CYlxm','BcbKAxm','zxqUia','CgfYzw4','CM9ZCY0','ms41ihu','yuLcChu','iJ5ZywS','y2PPDfC','zhrOoM0','DcbPBMO','CMq7zM8','i2y3zwu','yZfKo2m','lxnUyxa','Dg54y1O','zxGTzgK','Cg9ZDe0','zu1wCxu','yxK6zMW','zZOXmha','DxbKyxq','mNWWFdq','zYbTyxi','AengqK0','quX3AxO','Exr5y0e','u2nPDM8','n3WXFda','zs9Nyw0','vw5PDhK','yxjTAw4','q2z0z3e','zwqGyxm','u0DSEvC','q0PAt2q','zNj4vhy','vu9TDfu','zZO0ChG','DwTfu2i','ihbYB3y','CM9SBgu','lc40ktS','sfLLB1C','yxmGzMK','B2jMsq','zxnWyxC','Bg9dAge','zs5irue','uw9fEvu','lxjHzgK','o2zVBNq','zxHWB3m','qNLjza','BNq6Aw4','zxqSig8','CgfKrw4','zwHRC3u','iZaWmdS','BNrLCJS','zxi6mdS','D3jPDgu','C2nYAxa','AhvXDKi','B206mxa','mty5mtCXnKTXu1bUBW','qxbWBgK','uIbbq1q','zYbPBNq','zwz0oMe','DJiTy3m','BIbYzwW','ifnxlvC','Aw4U','zsXdB24','z2v0rMW','B2jMrG','C0Pzyxe','CZPJzw4','Dw53sw0','zYbZy3i','mtjWEc8','icaXlIa','igvUzca','nhb4idK','AxnWBge','BI1PDgu','CMeTC3C','mta1ru5zDML1','CdO2ChG','DKzHCgO','igfWCgW','t3z5vee','iMjHy2S','rxfAshi','zdP0CMe','Fdj8mq','Awq9iNm','Dte2','EfDJBLC','AwDUyxq','vvjbx1m','FdeWFde','BNnWyxi','yxnZtMe','C01zBeK','yxbWzw4','CMvHzca','ohb4ide','ignYB3m','ww50qxu','zxjHDgu','wufntxG','CNnJCMK','AgvSBg8','B2yGDgG','tLHoDvy','B1Dvr08','oYi+tM8','CMvJDgK','Esb0Exa','DuDxv00','wgjmAuq','Bg9Hzhm','zxbtr2i','zw5HyMW','y29uA0u','ywj5svy','zLn4sMK','ChjLDMu','z2XVyMe','ExLHAM4','zvbSDwC','mYWXnZC','DhrVBJ4','yw1LlGO','DwnYvgS','mtrWEdS','DhLWzq','z2v0vwK','CMuk','Chr1CMu','Ag9VAW','B3nLzca','BYbUB3q','o2jVCMq','y3qOCYK','B3i6iZG','wfLdtvK','B29RCYa','DejRBhG','jwnBC2e','zgLMzG','Ag9Ksw4','y2XVC2u','yvbQvhu','z2vY','B2XPzca','zgLZCgW','DK9hCxi','yMeOmJu','Aw5MBW','AwvK','AMvJDhm','zxnZywC','tw54Exq','CvztAui','A3DZvfK','ExHyBMq','BguGDMK','zgf0zsa','zMXcwfy','CMrLCJO','ihnRAwW','yu5QCha','yxr1CMu','ihnVigu','yxbWBgK','wefYBMq','B3nLig4','mtqZlde','Dg9W','igfYzsa','sg9VA3m','lYbZChi','n3b4o3a','C3bSAxq','CenVBNq','zcdcTYa','uNvUDgK','B3nWywm','CY1VCMK','zJy0','v19F','CM1VBMS','zwLNAhq','CMvMAxG','ugHksei','EwzQs0m','ENPRtfK','AKDtuey','iefdveK','ihvUyxy','v3v6qKy','icaGDhK','mtjWEdS','DxjHimk3','vLjZvK4','D1fUC2m','B25JBgK','Bxm6y2u','uuviv1m','C3rHBMm','yw1Ligy','CMfTzs4','t2LTAeS','AxmGAg8','lxGIihm','DxrVoYi','Eer1wK4','DdmY','C29Iy0C','BMDctM8','AwvSzca','DxjLia','imk3ia','AKnnyMu','A2LUzYa','C3mGmhG','tw9KDwW','o2zSzxG','CgfUzwW','DhDPy2u','tfvgvhG','vLHczey','Acb0AgK','C1jfveG','qu5eveO','EdTNyxa','CgDACLi','s1vsqs0','vLfhu2u','zxH0','C2v0sw4','wMzoshq','Aw50iIa','DwvxCMe','B3zLCMy','DgLUzYa','EwvZ','C2v0ica','nYWUnsK','B3vUDa','Aw5Lza','Acbxzwi','rMLLBgq','uMXfCxe','zgTPDa','B2fYza','Aw4Onti','ihDOAwW','Ag9VA3m','Dw5Kzwy','yNL0zu8','D2fYBG','B2jMqG','C2vSzIa','lGOk','AhjLzG','ywn0','u1PtAhG','CxvLCNK','CLjMvfK','zMzZzxq','oMf1Dg8','wvPbu2i','uMvSB2e','x19ZywS','zsDZig8','A2v5','z2rkDNu','mNb4o2i','BNrezwy','zgL1CZO','zwnvvgC','lGOkswy','yxjN','C2fRDxi','DgHLigC','yM9KEq','z2v0rwW','CM91BMq','quWGqum','Ag90','Cg9YDca','Bgu9iMq','ywnRz3i','mda7D2K','D0PyrLK','BMnL','D2HLBIa','ig9Uzsa','vg90ywW','lwjYzwe','pgj1Dhq','v2vItw8','z3H5DLe','Dg9WoJe','pgiGC3q','ys1ZDY0','Ewv0lG','kZb4','y29Kzq','ywLSzwq','DMfSDwu','BKLyEgS','ywrKCMu','Dg9ju08','n2vLzJu','ChbLCIa','DLDAr2m','zwfKEsa','ignHChq','mJiYntCYmhvouxzzAG','DMvYEsa','zxmGB2y','zsbPBNm','BcbHz2e','DgHPBMC','y0vjtfO','sezjrgS','D3LAv04','zw50rwW','CfDMt0W','qLPtAfm','icbVzMy','ig1HDgm','AwqGCMC','vgHLigC','BMCGB24','BJOWo3a','C2XPy2u','EfHWtNq','o2jVEc0','BMTLEsa','ifbpuLq','Ag9VA1a','D1n3vvu','uKfqueu','uhvUv04','C3rYAw4','Dcb3yxm','BIbHihi','zYbIBgK','r2fTzq','surNwK4','AguGD3i','u2vSzwm','Bcb1Cgq','C3vYDMu','zJfIo2i','txrbs2K','C3nPBMC','ChGGC28','Cg9YDge','igHLyxa','Au9ovfC','zwf0zva','ru5ept0','wgnftgS','ihrOzsa','B3vUzcW','yNL0zuW','svDdsxO','B21Tyw4','DMvYBg8','CNvZzeO','B25Nig8','zJmY','B3jKzxi','y3vYC28','Ag9ZDg4','sw5ZDge','zYaVigO','FdeZFdm','yxv0BZS','BJ8PoIa','Dw5Kzxi','AgLSzsa','lxDLAwC','zcbUB3q','zsbYzw0','i2zMzdq','zvrSq0e','Dc5wywW','C25HCa','zMfPBgu','zxbSywm','C2HHzg8','CI5KBgW','DhLhyw0','BeHmvLK','AM9PBG','mZC4mdu1oejSv3z5BW','zgLUzZO','EMPwvhm','ig9UBhK','pgrPDIa','BNq4','Dg9tDhi','wg1SDwG','shHlEw4','AgPVqxK','qvnnigG','zgf0yxm','CurrAhm','CgfUpG','ALzoEMu','ihnPz24','v25NEfe','y3rZimk3','sufqrNC','sNHLsfq','DuTwB3O','B3vUzdO','Bg9N','ugfyALy','BwuGBM8','x19tquS','qwz6Ewy','C3rLBMu','BgfZDeu','BgvKoIa','AunOCwm','AgfZtw8','EtPMBgu','ktTJB2W','D3jgDgu','ExrLCW','icaHia','Bgv4oJa','u0TjteW','CIb0Agu','zhngq1O','C3bHy2u','ww5HyM0','rM9PDKe','sevbufu','Dgv4Dge','BwfYz2K','r09gu2W','zMz0t0W','DxDmuhO','Bwf4lwG','tenAB0G','DMT3Dgq','DhLSzt0','t2vvsuW','B2fKzwq','ANfoD3y','idaGyxu','AgDprKC','CMf3','vuvKCgG','vgv4Da','ihbHDgm','zwn0zwq','q29WAwu','mNW0Fdu','y29SB3i','zgnSz3C','BM93','AxjZDca','BhDHCNO','BwuUia','zwvKzwq','zhvSzq','yLzJu1y','C3byCKK','BuDVs2G','ug9VrKO','C2v0rMW','i3n3mI0','Aw5ZDge','Fdr8oxW','CgLUzYa','ihnRAxa','u3rtsu4','Aw5PDgu','ywDLCG','lwL0zw0','AwvKlIa','uKjnDKe','iZDLzta','ihbHBMu','C2v0','AwrKzw4','ywnOywi','BwjstM0','zKDLEvO','D192mG','zw50tgK','A0zXtgy','zwfoCum','zNjHBwu','te11rLe','u1vMEgu','qu5eihq','ufu4ig4','Ag9ZDa','u1jHrNG','lt4GDM8','uvnZrei','EgrXwei','z3nute0','zhHUAxC','C28GDgG','ywSTD28','icaZlIa','icaGDMe','i3nHA3u','qxv0wLu','EwXLpsi','B3i6i2y','uMXtz3y','EcbZB2W','BwvZC2e','zw50','BgvUz3q','zJu7yM8','zNvUy3q','nhb4ide','AvH6v28','A2LUza','icaGy28','A2v5CW','tLrlCeG','ig9IAMu','EcaXmNa','AguGAg8','DMuGB2i','tK9fwKG','yxbWzxi','ywrlBMm','iIbZDhK','zcbKAwe','BM90igK','sKXYs1G','BMnLigy','DgvZDa','z2PsAwK','qM90Aca','BM8GBgK','ifnRAwW','CeX2qLm','BePxwfG','CIb5B3u','thvNzMe','uufZtwi','DLPfugy','A2v5zg8','AgLKzgu','B2zMC2u','mxW0Fdm','ChvZAa','z2v0q2W','zsb1C2u','EgDJuMS','Aw50Aw4','CgvKigi','Ee5TCwe','zenOAwW','BgX3yxi','yxvSDa','AcbMAwu','igjVDgG','zxiTCMe','Dde2','Dc5KBgW','zMLSDgu','vuDtCgO','zYbZDxm','sK9Uv1C','DY5vBMK','A2vLCa','CMvSyxK','DeLNyNy','mJqZr3PTquXZ','ywLSywi','AgvYAxq','wen0tu0','Ahq6nZa','zwrnCW','BNvSsfu','4Ocuihr3BW','yxbP','B2XVCJO','mteWnZaZmgXjzNf4tq','sg1kyva','rLfQDLO','veXTDgO','uunZr0C','BhvTBJS','Bwv0ywq','sMfLtey','re9nq28','B3j0lGO','C3bYAw4','lde3nYW','BwuUy3i','wfDztNK','DxjH','D24Gvxa','zgf0yq','BNrYB2W','CMvKia','lxDYyxa','igHPzd0','FdH8mhW','uwDfDLa','wxHws3i','A2HMz1i','EdTVDMu','mhb4ktS','zxjYB3i','A0LhvMu','BMnLCW','DerHDge','s21Wu3q','sNHwuKq','CNfTve0','mhWYFde','Aw5N','ywL0Aw4','z2fTzq','ihbHC3q','v3jHCha','BgW6Aw4','lwnVChK','C3r5Bgu','tMHMrMO','A3vYyv0','phnWyw4','zcb0Agu','Bgu9iMi','ChqGsvm','nZy4ndaYuefPthjh','AwWYq3a','mhb4idu','AwnOlJW','CNjVCG','B2f0mZi','q2nftMC','z1zUq3C','oJeGmsa','zuvSzw0','ywn0Axy','zw1WDhK','lJe4ktS','AxmGBwK','EdTWywq','icaGica','zwqGyNu','B3jRihu','CI5QCYa','DeTUy1C','vvDnsYa','BhvLica','DguOksa','rJKPpc8','kfvUAxq','ywXPz24','wvDfuhe','CMvTB3y','CYbLEha','zxHLy0m','B2jM','icaGia','vMfSDwu','pt09u0e','vxbKyxq','C3CYlwG','ys5ZA2K','Esbku08','AwnLihC','zsb3ywW','lJmPo2q','qwvjCxi','z2LUlwW','y21K','igfUzca','AM1xwu0','mNWXmhW','vgHLigG','zgvIDwC','z3jVDw4','y2uVDw4','tw9KA2K','ic0+ia','DcbUBYa','ywjSzwq','q0juzKq','t0j5C28','zM8Qksa','sfrnta','lMrSBa','yNvMzMu','wgrzAem','igLUC3q','rw5dDeO','AgvHCfu','A0DewwO','BgrZlIa','BMnLC1i','yxrJAc4','BwuVz2e','BgvMDdO','mI4WlJe','Aw9UoMy','BMv2zxi','suL2q1u','y2XPCgi','rMHtq2S','Cvjpr3u','ywrKrxy','BNn0yw4','DLfQqui','igfYBwu','B2f0nJq','B3CUDw4','AKPxuuS'];_0x5e6e=function(){return _0x524870;};return _0x5e6e();}
