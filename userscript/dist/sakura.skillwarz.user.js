// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.5.0
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

function _0x5e49(_0x22b59c,_0x4f884e){_0x22b59c=_0x22b59c-(-0x4e5+-0x17*0x9c+0x142b);var _0x466f09=_0xc930();var _0x551a43=_0x466f09[_0x22b59c];if(_0x5e49['vlcHhp']===undefined){var _0x6f6130=function(_0x2f4e45){var _0x35c434='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x4e850c='',_0x3c0cb2='';for(var _0x3eee96=0x3*0x2bc+0x19*0x129+0xf*-0x27b,_0x1ea938,_0x1c868c,_0x38dc48=-0xb34+-0x7*0x1ab+-0x16e1*-0x1;_0x1c868c=_0x2f4e45['charAt'](_0x38dc48++);~_0x1c868c&&(_0x1ea938=_0x3eee96%(-0x1cf*0xb+0xb03+0x22*0x43)?_0x1ea938*(0x2e1*0x4+-0x7*-0x393+0x2449*-0x1)+_0x1c868c:_0x1c868c,_0x3eee96++%(-0x6*0x61+0xe*-0x224+-0x2*-0x1021))?_0x4e850c+=String['fromCharCode'](-0x3ce+-0xe5*0xa+-0xcf*-0x11&_0x1ea938>>(-(-0x32f+0x262b*-0x1+0x4*0xa57)*_0x3eee96&0x1454+-0x2*0x20e+-0x1032)):-0x114a+0x4*0x1df+0x9ce){_0x1c868c=_0x35c434['indexOf'](_0x1c868c);}for(var _0x1c82eb=-0x2294+0x17ac+0xae8,_0x855aed=_0x4e850c['length'];_0x1c82eb<_0x855aed;_0x1c82eb++){_0x3c0cb2+='%'+('00'+_0x4e850c['charCodeAt'](_0x1c82eb)['toString'](-0x8d0+-0x3eb+-0x19*-0x83))['slice'](-(0x20*-0x35+0x287+0x41b));}return decodeURIComponent(_0x3c0cb2);};_0x5e49['sKQjcD']=_0x6f6130,_0x5e49['GZeBoj']={},_0x5e49['vlcHhp']=!![];}var _0x512ca4=_0x466f09[-0x1*0x1478+-0x7d4+-0x2*-0xe26],_0x5af575=_0x22b59c+_0x512ca4,_0x4395f2=_0x5e49['GZeBoj'][_0x5af575];return!_0x4395f2?(_0x551a43=_0x5e49['sKQjcD'](_0x551a43),_0x5e49['GZeBoj'][_0x5af575]=_0x551a43):_0x551a43=_0x4395f2,_0x551a43;}function _0xc930(){var _0x4a5b08=['EcaXmNa','BwfUEq','DcbKyxq','ywXSoMK','igjSB2m','BNqGywy','BMCGlYa','zw50rwW','AxvZoJC','CMvMzxi','ys1Hpsi','zsbSB2i','nsiGC3q','otm0mduZnK9oruvhyW','Dde2','ANzqseO','nZH2AdS','DZOWidi','B3DUkq','ihjNyMe','zxi7iJ4','sfvJCLu','zt0Iy28','BMCUcG','zw4Gyw4','C2fUzq','lsbvBMK','CMvKDwm','sKHZBK0','A0HZr1K','zsbUB3q','nZCSlJq','CYb3zxi','D2r2vfm','rwL0Agu','Fdr8ma','C29SDMu','rhzvtuC','EgrJBKq','zwqGBM8','igfYBwK','ALLnAwS','wgHpyK0','Bwf4psi','yMLUzgK','EufSA3O','B3i6i2y','q3DMyLq','zYbZDxm','oNjNyMe','ywqGzMe','u3PNEey','BNrPBwu','zMLYC3q','ChrLza','ihnVigu','vg90ywW','ihvUyxy','q291BNq','zgf0yq','zwn0Aw8','lYbQDw0','qMrOyum','D2fZBvq','mcbMAwu','yZKIpNC','AwWYq3a','v3jHCha','DgTusMm','zYbxzwi','yw1PBMC','BwuGlsa','BNqZmG','BhzoEeq','AM1Zu1K','zwf0zva','C1rtCum','DgvZia','B2XAqKi','zxjHDgu','zhb5A20','ywDLigG','ys1ZDW','zMy8l2i','C3CYlxm','BJOWo3a','i2y3zwu','zwy1o2i','CMfUzg8','zgLUzZO','A2v5zg8','CMTSBey','t1LyD0W','mhb4idu','CIiGDhK','DufOD0e','tNLPuMC','DhLWzq','B250lxC','BhbNqKC','zNGIihq','ywXSvMu','x3j1BNq','AMv6tNq','BMC6nha','Bgu9iMm','psjIywm','EKPNwxm','uvvRExq','oYi+','tvHqq0u','EKjrqwO','CgfKzgK','ChG7y3u','zxmGB2y','quf1u04','mNW0Fda','CM9SBgu','mtbWEdS','rwXmz0G','y29WEq','lc40ktS','oJaGmta','rKvlwxq','BwvZC2e','n3W0Fdi','CxvLCNK','y0LUChu','C3rYAw4','ztOXnha','EdTMBgu','A2vKihu','nduPoW','BMnLC1i','pgj1Dhq','s1vsqs0','zxHWB3i','x2DHBwu','s3bhDNe','s3vnyuG','yM11s3i','zgrPBMC','r0v3EeC','B2SGAxm','CMvTB3y','su5tsuq','sufXrNK','igfYBwu','Bgu9iMi','DK52y20','tgXsrKC','tJWVyNu','lZeUndu','lwH1zhS','C2fNzq','Ahq6nZa','zhvYAw4','C28GAg8','qxf3Ew4','CM93CW','AdO5mNa','DfzcCxG','CY5Tzw0','tLrbtLO','zg93','B24GDgG','zxmGAxq','B3rYB2W','yxv0BW','Ag9VA3m','Aw4U','ic0Gy2e','n3b4o3a','ywn0','Dvn4z08','Ag9VA0y','ieaG','yxnZtMe','q3Hnsw8','v3zMrgu','Bg9HDhm','s2noweu','AxrOie0','we1iBxe','sM9uzwu','ig1VBwu','sw5ZDge','AenryNm','B2jMqG','vvjbx1m','tMHJBLu','EvrUq2G','vuvHvu0','BwLUkdu','zNjHBwu','CgfYzw4','B25Nig8','l3nWyw4','EwvZ','DhLSzt0','CKnVBg8','Aw5KzxG','igHVB2S','AwXLzcW','sw5KzxG','BJPJB2W','EfHdzxe','wMrLB1O','msiGDMe','lc40nsK','tw9KDwW','lYbZChi','icaGy28','qKvhsu4','AxnHyMW','uNz3tgG','Esb0Exa','lwjYzwe','yxqGDgG','yxbWzw4','CNDNsxq','nsWXndm','B24+','zYbMB3i','uxf0qMq','CNjVCG','o2jVCMq','B3j5','zMLYzsa','DtmY','DJiTy3m','BwLLCYa','wxDhEwO','z25HDhu','nJTMB24','CKXPC3q','lJKPo2i','tw5KtMW','BhvLpsi','yZK7BwK','CNvUBMK','B29M','zw5LBxK','Aw1WDfG','iNDPzhq','qwvwDNG','C3r5Bgu','BhrdC2K','yxK6zMW','Ag9VAW','ihzPysa','ksWGC28','BMfSrNu','Cg9Zqxq','vgHPCYa','ndKWCfrADu56','C2f1yK0','phnWyw4','igfYztO','ihLLDca','lGOk','tg9Hzgu','AwrKzw4','A3fRweS','lIbeAxm','rxfKEfu','yxG9iJu','jwnBC2e','sKrquxK','wurLBKe','shHqzee','sunQvvi','quTXv28','y2XPCgi','AguGCM8','EwXLpsi','DKP0qMu','zKHiqu0','sNjjthC','otK7Bwe','AxzLihi','u2PnqKy','zxnZywC','yZfKo2m','Dg9ju08','ifnRAwW','rLbty28','vLbkDxa','BNn0yw4','zJy0','uMzbuvO','qKLowMC','CgvJDhm','rviGvvC','ys1ZDY0','uMvNAxm','vgHLigC','DNb3DM8','rhnKBvq','zYbIBgK','EhL6','ihbHC3q','BI13Awq','ihrOAxm','nZq4mZa','CvfNuKm','igL0igK','lg1VBM8','quz3wvy','Aw5N','CMvIDwK','sNrIz00','tMj2Dwy','lcbnzxq','BhqGC2K','EI51C2u','quPRC3e','zeHyEhi','tLrhzgm','yw1Ligy','ihDOAwW','vLnwB1a','sgXku3G','zg9JDw0','ChjLDMu','EvntveG','Bez1BMm','DxDTAW','Bg9N','BM90ig0','lxnUyxa','qxvqrMq','DgvZDa','y2HLy2S','sevbufu','pc9IpG','DxjPBMC','Dte2','v2vHCg8','yLPLreO','BhzLr2e','ms4WEdW','mI41lJa','rLPRrK8','BgvMDdO','CMfTzsa','yM9Yzgu','BML0Awe','y2TLzca','C01jtwi','zhKIihm','D0r3DNy','iZjHmgy','tIbIEsa','iMjHy2S','zwXLy3q','qxbWBgK','Aw5Uzxi','ihnPz24','CuTswwW','AKztueO','A2v5q28','EdTVDMu','Dw5Kihm','nteYmtLfsNvuvfe','zxjYB3i','BwLU','BNrLBNq','pgLUChu','ChvZAa','Ag9Ksw4','qM90Aca','rwHtvMi','Ag90CYa','BNrPBca','oM5VBMu','zw5LBwK','Dw5Kzwy','icbVzMy','DgfNtwe','y2fTzxi','CMeTC3C','ifvxtuS','twjqCMS','sxPjz2e','z2v0sw4','DxjHvge','yw5Jzsa','ruTdzMu','B2f0nJq','igrPzca','Dw5PDhK','DciGC3q','vfPmAhy','EgDUAuO','BNnWyxi','CMvWBge','DxnwywG','vgvctKS','DIiGC3q','s1bNt0W','BM9Kr0S','Aw1Lr2e','yw1L','z2v0vwK','vgv4Da','Durvze0','B2fYza','yxrLigy','zvbYB3a','zMfPBgu','otK7y3u','C3CYlwy','C2Hhz2G','igDSB2i','ndmSmtC','wgLPwfK','EtPMBgu','zwqGysa','zYbMywK','pgiGC3q','tLbdx0m','Axy+','zxnW','svzficG','ig9Yihq','BgvUz3q','teLvv2m','CgX0D3m','zxmGC3a','x19tquS','D1bouxq','BgPQy2e','BMnLigy','wK1rCLO','AgvHCfu','D21jCwy','wwnnyLa','zwfJAge','B25Jzsa','zhrOoJi','qsbNyw0','sMzlAKW','icaXlIa','ig1PBJ0','iJ54pc8','CMvMAxG','oda4mdKXme9SvKr2yq','lde0mYW','y2fTia','mNb4idG','zwXVywq','zsbYzw0','D2fYBG','wNLhy3u','lxnWzwu','B3bLBG','zwLNAhq','idHWEdS','Bgf5oM4','BwfW','zvzdrwm','svnyBKi','pc9KAxy','v19F','BMTLEsa','yxv0BZS','tNvKvva','D0nStMO','BNvTyMu','BwuOkq','Fdn8ma','igj1Dca','C3qY','mta4nZC4ntbgy2rrrM4','DMuGyNu','igfUzca','CMvJDgK','nYWUmZu','CMf3','Aw50Aw4','Bg9Hzhm','DxjHx3m','CI1Yywq','zdDHotK','A2DYB3u','z2jHkdi','vKuGDG','Cg9Z','Dg9YqwW','yMvSB3C','u3rYAw4','sLDsyvm','B246y28','BhvTBJS','A3Doze8','Bgu9iM0','yxjKlxi','y2u7y28','CK9jvK0','BYbHihq','AfnJCMK','A1Lkz3K','tejUD0S','A3mUBgu','CYbVCNa','zwDPC3q','AM9PBG','lwe9iG','sufoyvy','BMzpqKm','yw55ihC','BwvHBG','yw5Kig4','BYb3zsa','A3mG','pJWVzgK','t0rmrve','CgfKrw4','CMnLoIa','DefKsK0','AguGAg8','DgvYihq','y29SB3i','q29bBuu','BwnkDKi','zwz0oMe','DcbPBMO','uMTHvNq','DxjJztO','nZq4mJK','z2uUrgu','uhvWvgC','u2vSzwm','B29RCYa','A2v5','vNLpy3u','u3nWEKK','y29Kzq','ihnRAwW','wuLuCgm','B250zw4','Cg9ZDe0','D09frLC','CNnVCJO','q29WAwu','CMDIysG','nZCSlJu','ywLSzwq','zgL1CZO','mtuYq01YvevX','Chr1CMu','tuSGq08','rLziq0K','zgvMAw4','BMuGAg8','uNvUDgK','tLLVtxy','BNq6Aw4','EwLSzge','AwDODdO','Ag9VA1a','B0vvD0C','yxr0zw0','ywLUAw4','zgTPDc4','zNvUy3q','BMfTzq','ig5VDca','ig9Mia','ztTTyxi','rvnqoIa','tLHoz04','D1n6wNC','zYbPBNq','EdTMB24','v1n5AMW','A2vLCa','ChrY','C2v0ica','Bg1HA2u','y2zVzNu','AxmGyNu','pgrPDIa','B3jPz2K','Dxm6mta','yxbWBhK','oYi+tM8','AhH3suO','yxbP','ywDLCG','yxjNAw4','zxqUia','zIb0Agu','icaYlIa','seDeBwG','Ec1KAxi','DhLWzum','o2zVBNq','q2veBuy','BMq6Dhi','CMvH','BYbJyw0','yxjT','y2GUC3K','ywjZ','BuPqBvO','BLDNBxi','zuL0zw0','B25ZB2W','zenOAwW','ChrIyMq','yxmGDgK','CgPczwO','ywDLCIa','mxWYFdq','AeT4AKK','kdiXlde','rgnkuMK','vvnqzhe','EI1PBMq','rgTJsxi','y2XVC2u','C2fRDxi','pZWVC3a','BNq4','BNrYB2W','zxvgt2K','zYaVigO','vgfTCgu','wMXnDuu','vg1Zt28','mNb4o3O','zw5NDgG','AvDwswm','shvcu3m','zxmGDgG','qM90','zsb0Age','zK5yCuW','wg5luuO','vxbJuvq','ihbHC3m','igLZig4','C2XPy2u','ywjSzsa','yNvMzMu','uwfwv08','ChGGlte','DcbTyxq','A1HAvgq','BNrPyxq','igrHDge','yxfKEg0','zNjVDw4','A0zIt2G','rwrnrKm','ohW1Fde','C25It1K','nhb4ide','q2Xsq0S','tNvmv3i','Ag90icG','ztPWCMu','BMDZ','lwLUzgu','B24GAwq','oJeYmha','ig90Agu','twPws0O','iZDLzta','ru1Puwy','BM93','zJfIo2i','ywSTD28','zxKGAxm','iJeIig0','zxi7zM8','ExrLCW','y3jLyxq','ufLLqwK','qxnZzw0','Dw9gvve','uMfbDhO','u2HHCNa','B3vYy2u','icaHia','Aw5KB3C','D0XurhC','yMfZzq','lxDLAwC','AwrLBNq','BgfZDfC','B25PBNa','q1LWz1i','z2v0q2W','rwvVDxq','ExbLpsi','vgHLigG','C3H3Avm','w2rHDge','Cg9PBNq','Ec13Awq','mNW3Fda','lwzPCNm','t1rxAMm','BM9UztS','r2fTzq','D2LUzg8','uu1OwLi','psjZDZi','Axr5','B25LoYi','B2TZihi','rNDzBe4','DMvYEsa','BJ8PoIa','zMLSDgu','AgL0CW','B0Huz3a','Aw5PDgu','u1zYDKi','y3qOCYK','AgLKzgu','zhrOoJm','ihrOzsa','iJ5gosa','BM90igK','wg5irvC','igvUzca','AwzYyw0','mZy1mJiZnu9QDezUsq','CMvhDxi','mtjWEdS','shf0vhu','z2v0rwW','DgLHDgu','BMnIDxm','D1rHu0C','ndm5oti3mKPiv09QEG','sgvHCca','B2SGzMK','B2f0mZi','BwDzA0u','zM9UDdO','C2vSzwm','ig9Uy2u','yNv0Dg8','Dg9W','BM9Uzq','mJbWEcK','BgfZDeu','oNrYyw4','yMfJA2C','AguGC2K','BhjpDfu','qMD2AwS','ENfruwK','zgvYoJe','CMfJDgu','CMvKige','zgLZCgW','zvbRwfm','BIb0Agu','B2jM','C2fODgu','zvn0CMu','B206mxa','igzSB28','igL0ige','AxjZDca','AgvHCei','AwvK','ignVBNm','BwvHBNm','B3fuu2G','icaGDMe','CMvSyxK','ifrOzsa','oJHWEdS','Dgf5CYa','EfLyCMO','vhjSwfe','Aw9UoMy','yxbZAg8','DY5vBMK','Bwf4lwG','DgHLigm','C2L6zq','yxDUige','zvbSDwC','Bwv0ywq','CgXHEwu','D2LKDgG','teLwrsa','ys9vv00','AxjLuhi','iNnUyxa','BMuUifq','DxnPyMW','D2HPDgu','AxmGBgK','r0DFr2e','DhjHBNm','sg51t2C','t1zHueO','zxiTCMe','zgv2wuW','mJeSmti','BwfYz2K','Cg9YDge','iIbZDgu','AgfUzwq','DYbNBg8','iZe1mgm','yMfYzsa','rviGD2K','zwHnr1O','yNL0zu8','ChG7iJ4','tffoBKi','zwvKig8','Bgj5v3m','nxW2Fdm','zdP0CMe','yxjTzwq','ie9IC2m','EdSIpNy','u0TjteW','r2fTzsG','CgfUpG','AMTWC2G','BguIihm','tw9XzLG','DMvKpq','yxDSsgu','DYbLEha','Ag90','y2DWELq','zxHPC3q','DxjLzey','teXIyMW','zsbNyw0','ksbVCIa','AcbMAwu','yNL0zuW','zxH0','BMCGB24','zxzLCNK','DgfN','B2XPzca','y3vYC28','yxbWBgK','sMHKDfq','DgHLigW','Eer4AKC','zJmY','C25HCa','DMfSDwu','yw1LihC','D2f0y2G','rvfiDuG','C3rLBMu','BgXLzca','C3bHy2u','DgfSBgK','khrOAxm','Aw1WBge','AxvZoJK','yxjTAw4','mNb4idC','BwT6uuK','t2zMC2u','AgfIBgu','iJ5VCgu','BejiufC','BwfUywC','AxrPywW','n2e2ntG','DxjHtwu','icb3CMK','u1HgqMi','AwrIEgu','zfL5CNC','BIbtruu','y1jkuwW','wLfky0O','Et8Pica','lwe9iMy','CfHmv2S','zxjLzca','zsbVyMO','ywrKAw4','i3n3mI0','C2v0','AeLrC1m','Fdn8nxW','CMuG','vunJDeq','s2TzBKK','zsGPlMu','z2LUlwW','ywnRz3i','BM90ihi','BNn3Cui','zwrnCW','qKryC0K','s21Tr3C','BLj1BNq','A2v5CW','DvnLuva','ru5ftuK','rwPgvfG','tfL4D3O','B2XVCJO','ig9Uihq','ChG7Cge','BhDHCNO','zwXHChm','CMXHyMu','DxjH','zw50o2i','zMXLEc0','rxHWB3i','sxHqAfa','z1DorNG','ve9gqvO','tvnIqva','ihbHBMu','4OcuigzYyq','vwHkCLu','u0PcDfi','DuniAMu','Cfjtz0O','qu5eihq','B2fKC2q','Ehvnvum','v0nkANa','wvLXzvq','zw1WDhK','C29Syxm','ktSGBM8','zxj0Eq','C29SAwq','A1z1vei','t2vjsKS','uNzfr3y','BcbKAxm','yxrJAc4','ytK5o20','CMfWoYi','zxmGBM8','yM9KEq','vKD1y1e','vMHUre0','BfDHCNO','zgLMzG','EfzpC1a','qu5pveG','sufbEeG','z2XVyMe','zYdcTYa','igDHBwu','CJPWB2K','AwvPsKC','rvDSvgm','AguGD3i','BwvUDc0','zgL2','re9nq28','B2jMrG','oInMn2u','lcbuyw0','B25xt1e','Ag92thy','AgvYAxq','C3rHCNq','BgvKoIa','Dg9Y','Dcb3yxm','v2LvreC','zw50tgK','ELrPteq','DwvxCMe','A2LUza','ywLSywi','AtmY','ntuSmtq','Dc4kcLq','pc9ZCge','D1v5wLq','zefnr1y','iJ5tCgu','ihj1BIa','mJbWEca','AhvKlwm','y0zxDfG','x19ZywS','EMvzzxq','BNrezwy','B2fKzwq','vvnYrei','BNq7yM8','CMvHzhm','zgf0ys0','zw1LBNq','rfbdzeK','vxL3CvG','EdOYmtq','zxHLy0m','igHLyxa','tgzNBvi','DgnOzxm','rgTNCMi','AwXKlG','DKPoweG','CMuGAwC','ChG7','qxnlDge','BYb0Agu','zcb0Agu','yw5Nzsi','BwvTyMu','CMvZB2W','B2TZigW','zxzjC3a','vuvJshK','pc9WCMu','Aw5Lza','BM9ZCge','ihjLCg8','DMvK','t0SGt1y','lxDYyxa','CKz3Bum','ysGYntu','qwviDKy','Auzctuq','B3vUDa','DhDXB0O','igrVy3u','mhb4o2y','ywrKrxy','icbTzw0','Dg9tDhi','uhHWA0C','serWwLy','zxiTC2u','CgvYBw8','zhrKDKG','vw5PDhK','D3jVBMC','r0rIEhq','CgfUzwW','zxrVBG','zKTdAuS','igjVDgG','DMvKia','q051rw0','icbVyMO','uMvZB2W','igzVCIa','ic0+ia','wg9Stxe','AgfZtw8','BgvYigG','Cgu9iNi','C3mGmhG','vhnir2C','yMeOmJu','y2LesKi','Fdr8m3W','ihnPBMm','Ehfxr20','Bxm6y2u','CgvZia','x19hzw4','ihvPlw0','A0fxBwG','r2LTBNi','veLwrq','EdTNyxa','uNPoAvy','vuLws04','Bwf4lxC','EcbZB2W','z3jUq3C','y3nZvgu','mxb4idy','u3bLzwq','y2GGDgG','mcbVzIa','Dw5UAw4','C2v0sw4','v0Pwwgq','AgvHza','zsbTyw4','rfDgz28','Dxr0B24','zxqSig8','A2v5qxq','yt0IyMe','ywDHAw4','B25VC3a','z3jVDw4','D3zUEwi','s1bgBMS','C2vYlxm','Dg9gAxG','zMfJDg8','AgvSBg8','z2LMEq','CMnyz3C','ALDYAvG','BNnPC3q','CgX1z2K','s2Trtfi','CNfnwKe','Agv4','AhnywvG','qvDNwxq','BM8Gseu','DMuGB2i','wgf6CNC','EwrQDe4','EdTWywq','ihDOAwm','C2v0rMW','wvbnqvO','yw5KigG','As1TB24','z0viy28','DcbUBYa','zev2Bu0','Cg9YDca','z2fTzsa','s2XbDMq','yLHnq2W','CenVBNq','Bgu9iMq','C3zeEMG','lJe4ktS','q1vmBhq','AvLetuK','BIbYzwW','s1rsy1i','zMfRzq','A2v5vxm','lL9Nyw0','qNLjza','BvrxEeO','DgvK','sfrnta','BgHcA2e','rNzfzw8','iZHKn2e','u25HChm','AeTwAwG','igfNCMu','Bwf4','C291CMm','ks4G','BM9Yzwq','lde3nYW','sYbZy3i','AxmGD2G','AwzLig8','CuPpuxy','BIbuyw0','C3bHCMu','ywX1zt0','wNbzEfa','Cg9ZAxq','ywLNEee','sxHNt1e','B3jKzxi','t2rbrMW','yxmSBw8','Aw5ZDge','zxa9iJa','qKDcBhy','vKnssuK','B3P4v2q','A1z5sxe','zxGTzgK','ChvmCM0','BfvrtKy','BM90zq','khmPihq','vgHLiha','CZPJzw4','yNvPBgq','zcbKAwe','Axb0igK','DgvYo2y','igLUC3q','lwXLzNq','D0jyyxa','C3nPBMC','DdOG','BMnLCW','B21Tyw4','zxbSywm','y2fWDhu','iIbZDhK','DgG6mZq','Cgj4DuK','Bvrwz1a','AxnWBge','vLvhs1G','DNmGC24','B2zMC2u','BNrLEhq','CMrLCJO','vKPPwLe','zw9rv0K','ihbHz2u','BwuUy3i','zw5HyMW','qxrgAxi','BuvcDuK','BJWVyNu','CIb0Agu','zM8Qksa','vvDnsYa','yMX5lMK','ywL0Aw4','DhbHC3m','Ag9ZDa','q29zB3a','Cd0Imc4','i2zMogy','yxvSDa','iMrPC3a','Bg9YoIm','nNW1Fde','C2vSzIa','ihjLywm','yMX5lum','BgrZlIa','zMXLEdO','C3vYDMu','D2fYBMK','CgvKigi','BNrLCJS','ELfty3u','Awq9iNm','oJfWEca','AuzIwLG','yt0IC3q','Aw1Lsxm','i2zMzdq','q1D6EKS','vMjOzfe','sNDArhq','ysbNyw0','ignYB3m','ywfPvMW','Dg9WoJe','FdH8ma','wvPouLG','AxHLzdS','EKrQt0e','qKD6sfe','tvvnvgm','zwqGEwu','quWGqum','zxjHlIa','txr0Euu','BgrdCfy','re55s3K','CgLUzYa','EeHKCvu','yvr6Ehu','ihnVBgK','DdTIB3i','Dw1zthy','tvzQsMm','otLWEdS','zJWVyNu','zMzZzxq','Fdf8nhW','uIbbq1q','B3vUzdO','CKTICwW','BfjUswm','yNHSr2m','i2zMyJm','BgW6Aw4','BMrVDY4','mJu1lde','u2fRDxi','twXtCNi','A3vYyv0','yxa6nha','BwuGBM8','v2vItw8','uMvSB2e','swzeuLa','D24Gvxa','B0zTsxG','B24Gzge','CKf4CNe','ie9o','s2rsyxK','yKzOA08','CLzHDMe','A3jWBfe','BgTRELO','swvkEwq','yNvPBhq','B1PMq3C','ignVCgK','CJOXChG','t1btsKG','yxr1CMu','rw5LBxK','rJKGDhC','AfnJug0','zwqGyNu','BMnL','nhLyELrmAa','oY13zwi','z2v0rMW','zZO0ChG','ndq3nhLYCK5QuG','CMvUDdS','ihnRAxa','BenTrwC','lxyYE2e','q19dB3q','B3vWig8','r0rcvNC','DcbIzwu','y3qGzM8','y29UDgu','rgLMzIa','oMf1Dg8','lxrVz2C','mNb4icm','zhvSzq','wfHeA0C','DgHLBG','ig9MzG','mIWYosW','zgvYlxi','BwP1t0W','A3bLAvi','qxrbCM0','C2HHzg8','Aw50lxC','tKTJBvO','oJrWEca','BLr5Cgu','r0vXCNO','wuDfA2W','B3v0','Ewv0ic0','ChGGC28','svrcruu','AeLRzKy','lxjHzgK','DgHLigC','z2fTzq','ihnVig4','BIG1mNy','zMzNv24','C3bLzwq','u0HrAgu','rJKPpc8','uxnWvxm','zw50','lGOkswy','oImXnta','DgeTyt0','BwuUCMu','rvmG','Esbku08','Aw9U','uwXuvei','DgHLihi','CMv0Dxi','ywjSzwq','CIb5B3u','CdO4ChG','DhLxzwi','zuvSzw0','B3vUzcW','CMfTzs4','CgfYyw0','yxrnCW','zxG7z2e','BfLxA1G','BMD0AcW','C3bSAxq','qvbvoca','AwnOigy','q2X4vMe','B3qGD2K','oJeGmsa','BgvY','z21htxq','idaGyxu','ugrOsLu','C1L2DM4','rhDOBKG','z2fTzvm','CNnJCMK','yxGTD2K','B2jMsq','iMzVBgq','kdi1nsW','mNz3ldy','i3nHA3u','vvDnsY4','BM90ihq','ignHChq','oxb4ide','ig9IAMu','i2jKytK','DgHLiha','CMvWB3i','t0HZtuO','BhvNAw4','yxbWzxi','psjWywq','C2LUz2W','DfHWyvO','re1Fr2e','igLKpsi','C25HChm','ms41ihu','Bg9Lqwm','C3rHBMm','mtqZlde','C21uExa','DM9Pza','nhb4idK','zKPcugu','BgX3yxi','B0zbz2S','Dxm6nNa','y21K','iefdveK','vuXtyKi','DMrJD00','DxjJzq','iNnWiIa','v0fswI0','D192mG','CJOJzJC','BNuU','wvnivNC','DcaWicG','BNqXnG','Evv5sem','BMfNzxi','AhjLzG','CM91BMq','yw5ZCge','zwqGB2y','zcbPCYa','Bw9YEvq','BxDQr0W','A2v5u28','lJuIihy','uxrJC2C','C2nYAxa','mdTMB24','mNb4o2i','rvrSsNe','BI1PDgu','wfvQqMW','BI5FCNu','kgXVyMi','B25JBgK','D2HLBIa','yxjN','ChGGmZa','rKLpsK0','z0fdAhC','qLz5BMi','yMTHzfO','lt4GDM8','DwLky1u','o2nVBg8','rLzuzwS','AxvNyve','DdmY','yxrHihi','BwvTB3i','zgTPDa','EfznA0S','AMz3vxK','DgHPBMC','CuTuDeO','v1DkBLu','zgf0yxm','ENPHqKu','igLUlwy','AgLSzsa','rfflrNO','zgvIDwC','q1fwBNO','BKP3Dhm','ywn0B3i','vNrIqw8','ufKGve8','Dxm6n3a','A3mGD2G','Cxf3D20','DgHLig8','ANPQwgS','r0jUv2G','su5dzw0','C2v0sxq','Bgf5Eee','u2vLBG','vMfSDwu','BNrxAw4','lxnWywm','tw9KA2K','DMvYC2K','BgrPBMC','zxjZ','zsDZig8','CNfZz3O','oYi+u24','EdTHy2m','wK1Rs00','DhrVBJ4','zsbLDMu','zM9Sza','i2zMnMu','tuLStfO','DMvhyw0','ktTJB2W','CML0Dgu','DZiTB3u','DunOuKi','Dgv4Dem','Aw1L','DhKGAw4','DgvYzwq'];_0xc930=function(){return _0x4a5b08;};return _0xc930();}(function(_0x4ec140,_0x5a5b33){var _0x23723e=_0x5e49,_0x29c73e=_0x4ec140();while(!![]){try{var _0x4759ae=-parseInt(_0x23723e(0x5a3))/(0x76a+0x1*-0x472+-0x2f7)*(-parseInt(_0x23723e(0x175))/(-0x1*0xad9+0x8e3+0x18*0x15))+parseInt(_0x23723e(0x359))/(0x2df*0x4+-0x1*0x5ab+0x1*-0x5ce)+parseInt(_0x23723e(0x59f))/(0x4f*-0x18+0xd93+-0x627)*(-parseInt(_0x23723e(0x351))/(-0xa1*-0x3d+-0x45d+-0x21fb))+-parseInt(_0x23723e(0x68b))/(-0x25ea+-0x1041+0x3631)+parseInt(_0x23723e(0x1e2))/(-0x863+-0x5*-0x24a+-0x308)*(parseInt(_0x23723e(0x29c))/(-0x22*0xb8+-0x17*0x1af+0x3f31))+parseInt(_0x23723e(0x250))/(-0x4ae*-0x3+-0x10e0+-0xf5*-0x3)+-parseInt(_0x23723e(0x235))/(0x14f8+0x72e+0xe*-0x202);if(_0x4759ae===_0x5a5b33)break;else _0x29c73e['push'](_0x29c73e['shift']());}catch(_0x1a1ece){_0x29c73e['push'](_0x29c73e['shift']());}}}(_0xc930,0x18a7f7*0x1+-0x2*0xa7c93+0x8c084),((()=>{'use strict';var _0x1a1d69=_0x5e49,_0x27c645={'UEaUM':function(_0x5d9d15,_0x463caf){return _0x5d9d15(_0x463caf);},'shGgh':function(_0x2fd2a8,_0x1ea7cd){return _0x2fd2a8(_0x1ea7cd);},'HGDmh':function(_0xd5af66){return _0xd5af66();},'jmsSY':_0x1a1d69(0x295),'VGucQ':function(_0x4041ba,_0x5804b1){return _0x4041ba!==_0x5804b1;},'ffgWn':function(_0xb05a47,_0x1ccb12){return _0xb05a47===_0x1ccb12;},'lhBka':_0x1a1d69(0x618),'UCctD':_0x1a1d69(0x4d7)+'APU8\x20'+'-\x20Uni'+_0x1a1d69(0x67c)+'stanc'+_0x1a1d69(0x69c)+_0x1a1d69(0x54b)+'hable'+_0x1a1d69(0x170)+_0x1a1d69(0x2a2)+_0x1a1d69(0x5d5)+_0x1a1d69(0x6a2)+_0x1a1d69(0x3b3)+_0x1a1d69(0x3c1)+_0x1a1d69(0x275)+'indow'+_0x1a1d69(0x214)+'al','xgniJ':function(_0x432aad,_0x2f550e){return _0x432aad!==_0x2f550e;},'QveZD':_0x1a1d69(0x352),'ChUhI':_0x1a1d69(0x350)+'e','TmsOo':'sakur'+_0x1a1d69(0x6d0),'UyWzC':'sakur'+'a-ski'+_0x1a1d69(0x615)+'z','yTnCh':_0x1a1d69(0x2e5)+_0x1a1d69(0x19c)+'v2-ta'+'b','EjFTX':'div','XnKQJ':function(_0x16eb51,_0x5be714){return _0x16eb51+_0x5be714;},'vpwvo':function(_0x57e727,_0x2a3e44){return _0x57e727&&_0x2a3e44;},'bkadZ':function(_0x3a4dfc,_0x11b0c5){return _0x3a4dfc!==_0x11b0c5;},'YGlYA':'NwHEA','imptX':_0x1a1d69(0x5fb)+_0x1a1d69(0x1f3)+'-v2{a'+'ll:in'+_0x1a1d69(0x3e3)+'}','ySSTH':function(_0x462c62,_0x8e95b1){return _0x462c62(_0x8e95b1);},'EqdxU':'none','ICjUR':_0x1a1d69(0x23e),'KdRay':_0x1a1d69(0x73f)+_0x1a1d69(0x5fa)+_0x1a1d69(0x364),'GiQxF':_0x1a1d69(0x726),'hKVih':'QMhZR','ozxWd':'HZMiq','bxlGc':function(_0xcc81d8,_0x621f08){return _0xcc81d8===_0x621f08;},'XuPAv':'#ff6e'+'74','GDBVw':_0x1a1d69(0x2d5),'DKOSS':function(_0x4ae393,_0x587a60){return _0x4ae393+_0x587a60;},'rFwmC':'\x20obje'+'cts\x20·'+'\x20','rwgIt':_0x1a1d69(0x559)+'8a','EQHuH':function(_0xdc542a,_0x168d16){return _0xdc542a+_0x168d16;},'EWdMs':_0x1a1d69(0x38d)+_0x1a1d69(0x647)+'eady\x20'+'·\x20','EMiQf':'armin'+_0x1a1d69(0x437),'GqcWO':function(_0x42efcc,_0x3ff765){return _0x42efcc===_0x3ff765;},'FZkFO':_0x1a1d69(0x16d),'bZeDJ':_0x1a1d69(0x44a),'WUEbV':_0x1a1d69(0x5c1),'wDwvv':_0x1a1d69(0x399)+_0x1a1d69(0x741)+'t','JtbgM':function(_0x363a2e,_0x5a235e){return _0x363a2e(_0x5a235e);},'MIlLZ':'#2a0f'+'1b','AFwYV':'color'+':','zQScu':function(_0x5e9856,_0xe0f61){return _0x5e9856+_0xe0f61;},'gEHco':_0x1a1d69(0x24b)+'r','JHsnM':_0x1a1d69(0x6f6),'gAChw':_0x1a1d69(0x2c8)+_0x1a1d69(0x51b)+_0x1a1d69(0x6cf)+'as\x20no'+_0x1a1d69(0x5ab)+_0x1a1d69(0x4ee)+_0x1a1d69(0x45e)+_0x1a1d69(0x4a6)+'e\x20ins'+_0x1a1d69(0x3d7)+_0x1a1d69(0x695),'lYWkX':_0x1a1d69(0x202)+'ced\x20b'+'y\x20a\x20d'+'iffer'+'ent\x20i'+_0x1a1d69(0x196)+'ce,\x20s'+_0x1a1d69(0x278)+'are\x20a'+'sking'+'\x20the\x20'+_0x1a1d69(0x491)+'\x20obje'+_0x1a1d69(0x5ac)+'r\x20','AsKta':_0x1a1d69(0x450),'ODLEQ':_0x1a1d69(0x440),'HlJSx':function(_0xc0c13f,_0x571536){return _0xc0c13f===_0x571536;},'IAqFy':function(_0x2d996d,_0x325b40){return _0x2d996d^_0x325b40;},'rdrjp':function(_0x23bfce,_0x249882){return _0x23bfce+_0x249882;},'IeJyd':function(_0x40d163,_0x1b8712){return _0x40d163+_0x1b8712;},'hIkfF':function(_0x12bcbe,_0x4db8a8){return _0x12bcbe+_0x4db8a8;},'AKqWo':function(_0x1ebf48,_0x374ba2){return _0x1ebf48+_0x374ba2;},'BGzHQ':function(_0x36e386,_0x1c7c09){return _0x36e386+_0x1c7c09;},'ClRCK':function(_0x28a1ac,_0x4c481d){return _0x28a1ac+_0x4c481d;},'UpcQT':function(_0x2e3d85,_0x32219f){return _0x2e3d85+_0x32219f;},'aqdxm':function(_0xe0444e,_0x4bea96){return _0xe0444e+_0x4bea96;},'xuMUC':_0x1a1d69(0x21a)+_0x1a1d69(0x189)+_0x1a1d69(0x281)+':','XWodZ':_0x1a1d69(0x177)+_0x1a1d69(0x60b)+'sw2-b'+'uild\x22'+'\x20styl'+_0x1a1d69(0x694)+_0x1a1d69(0x548)+_0x1a1d69(0x3e4)+_0x1a1d69(0x160)+'t-siz'+'e:11p'+_0x1a1d69(0x4db)+_0x1a1d69(0x6d7)+_0x1a1d69(0x4b6)+'px;bo'+'rder:'+'1px\x20s'+_0x1a1d69(0x3c8)+'rgba('+_0x1a1d69(0x580)+_0x1a1d69(0x215)+'7,.35'+');bor'+_0x1a1d69(0x5b7)+'adius'+':999p'+_0x1a1d69(0x3b1)+_0x1a1d69(0x2e6)+'an>','RfAQZ':_0x1a1d69(0x177)+'\x20id=\x22'+_0x1a1d69(0x6d2)+'tatus'+_0x1a1d69(0x52a)+_0x1a1d69(0x6e7)+'olor:'+_0x1a1d69(0x601)+_0x1a1d69(0x6bf)+_0x1a1d69(0x540)+_0x1a1d69(0x155)+_0x1a1d69(0x438)+'\x20fram'+'e…</s'+_0x1a1d69(0x3b4),'dNDYj':'<butt'+_0x1a1d69(0x310)+_0x1a1d69(0x33c)+_0x1a1d69(0x5b0)+_0x1a1d69(0x3b6)+_0x1a1d69(0x745)+'\x22back'+'groun'+_0x1a1d69(0x3ae)+_0x1a1d69(0x201)+_0x1a1d69(0x40f)+'order'+_0x1a1d69(0x555)+'solid'+_0x1a1d69(0x691)+_0x1a1d69(0x5f9)+_0x1a1d69(0x610)+_0x1a1d69(0x69d)+_0x1a1d69(0x676)+'or:#f'+'7eef5'+';bord'+_0x1a1d69(0x39c)+_0x1a1d69(0x29b)+_0x1a1d69(0x72a)+_0x1a1d69(0x3f2)+'g:4px'+_0x1a1d69(0x240)+'curso'+_0x1a1d69(0x439)+'nter;'+_0x1a1d69(0x3e0)+_0x1a1d69(0x53b)+'tton>','YcMbP':_0x1a1d69(0x245)+'>','snbOY':'<div\x20'+_0x1a1d69(0x554)+'w2-bo'+_0x1a1d69(0x1d4)+_0x1a1d69(0x745)+_0x1a1d69(0x547)+_0x1a1d69(0x241)+_0x1a1d69(0x33e)+'>','HDpZV':_0x1a1d69(0x2bd)+_0x1a1d69(0x16c)+_0x1a1d69(0x607)+'ding:'+'8px\x201'+_0x1a1d69(0x633)+_0x1a1d69(0x50d)+'-bott'+'om:1p'+_0x1a1d69(0x4b3)+'id\x20rg'+_0x1a1d69(0x4a3)+_0x1a1d69(0x153)+_0x1a1d69(0x501)+_0x1a1d69(0x4eb)+_0x1a1d69(0x36f)+'ay:fl'+_0x1a1d69(0x5e5)+_0x1a1d69(0x5de)+';alig'+_0x1a1d69(0x635)+'ms:ce'+'nter;'+_0x1a1d69(0x54e)+'0\x200\x20a'+'uto;f'+'lex-w'+'rap:w'+_0x1a1d69(0x42c)+'>','UCNDZ':'<butt'+'on\x20id'+'=\x22sw2'+_0x1a1d69(0x23d)+'d\x22\x20st'+'yle=\x22'+'backg'+'round'+_0x1a1d69(0x366)+_0x1a1d69(0x507)+_0x1a1d69(0x460)+_0x1a1d69(0x533)+'1px\x20s'+'olid\x20'+'rgba('+_0x1a1d69(0x580)+_0x1a1d69(0x215)+'7,.4)'+_0x1a1d69(0x643)+_0x1a1d69(0x620)+'eef5;'+'borde'+_0x1a1d69(0x259)+_0x1a1d69(0x686)+_0x1a1d69(0x40a)+_0x1a1d69(0x70b)+_0x1a1d69(0x5be)+_0x1a1d69(0x6f4)+_0x1a1d69(0x3c9)+'r:poi'+'nter;'+_0x1a1d69(0x456)+_0x1a1d69(0x62a)+_0x1a1d69(0x575)+_0x1a1d69(0x670),'ULSbB':_0x1a1d69(0x1e6)+'t\x20id='+'\x22sw2-'+_0x1a1d69(0x4cb)+_0x1a1d69(0x6dc)+_0x1a1d69(0x4a0)+_0x1a1d69(0x473)+_0x1a1d69(0x232)+_0x1a1d69(0x31a)+_0x1a1d69(0x180)+_0x1a1d69(0x3a1)+_0x1a1d69(0x544)+_0x1a1d69(0x146)+_0x1a1d69(0x164)+'1\x22\x20st'+'yle=\x22'+_0x1a1d69(0x38f)+_0x1a1d69(0x311)+_0x1a1d69(0x66e)+'ent-c'+_0x1a1d69(0x408),'DPCdI':_0x1a1d69(0x704)+_0x1a1d69(0x310)+_0x1a1d69(0x33c)+_0x1a1d69(0x1c0)+'\x22\x20sty'+_0x1a1d69(0x712)+_0x1a1d69(0x3fc)+_0x1a1d69(0x579)+_0x1a1d69(0x399)+_0x1a1d69(0x741)+_0x1a1d69(0x571)+'der:1'+_0x1a1d69(0x5c4)+'lid\x20r'+_0x1a1d69(0x25c)+_0x1a1d69(0x451)+'3,177'+_0x1a1d69(0x6f7)+'color'+':#f7e'+_0x1a1d69(0x6d5)+_0x1a1d69(0x50d)+'-radi'+_0x1a1d69(0x65a)+_0x1a1d69(0x4db)+'ding:'+_0x1a1d69(0x613)+_0x1a1d69(0x6ef)+_0x1a1d69(0x296)+_0x1a1d69(0x333)+_0x1a1d69(0x692)+_0x1a1d69(0x4fa)+_0x1a1d69(0x30c)+_0x1a1d69(0x5cf)+'butto'+'n>','nBHty':_0x1a1d69(0x177)+'\x20id=\x22'+'sw2-h'+'int\x22\x20'+_0x1a1d69(0x16c)+'=\x22col'+'or:#8'+_0x1a1d69(0x25a)+_0x1a1d69(0x34c)+'twice'+_0x1a1d69(0x1b6)+'e\x20wal'+'king\x20'+_0x1a1d69(0x149)+_0x1a1d69(0x256)+_0x1a1d69(0x2ea)+'umpin'+'g\x20mar'+_0x1a1d69(0x65b)+_0x1a1d69(0x5ea)+'ield\x20'+'is\x20wh'+'ich.<'+'/span'+'>','SspzI':'<pre\x20'+'id=\x22s'+_0x1a1d69(0x678)+_0x1a1d69(0x1fe)+'yle=\x22'+_0x1a1d69(0x39f)+_0x1a1d69(0x6d3)+'addin'+'g:10p'+_0x1a1d69(0x67e)+_0x1a1d69(0x1e0)+'rflow'+_0x1a1d69(0x5af)+';flex'+_0x1a1d69(0x5ed)+_0x1a1d69(0x248)+_0x1a1d69(0x396)+_0x1a1d69(0x666)+_0x1a1d69(0x30d)+_0x1a1d69(0x47f)+';word'+_0x1a1d69(0x14f)+'k:bre'+_0x1a1d69(0x318)+'rd;fo'+_0x1a1d69(0x2a4)+_0x1a1d69(0x445)+';','iWVIc':_0x1a1d69(0x3f3)+_0x1a1d69(0x6f6),'CMkga':_0x1a1d69(0x3f3)+'x','umYLv':_0x1a1d69(0x3f3)+_0x1a1d69(0x5cd),'lpgBG':_0x1a1d69(0x3f3)+_0x1a1d69(0x4cb)+'r','yuJVo':_0x1a1d69(0x3f3)+'hint','WCJjp':function(_0x212251){return _0x212251();},'LYxwz':function(_0x1a7cfd,_0x16deb3,_0x343aaa){return _0x1a7cfd(_0x16deb3,_0x343aaa);},'MjVKJ':function(_0x4a37cc,_0x51a62f){return _0x4a37cc^_0x51a62f;},'nodGK':_0x1a1d69(0x5f7),'mJPmZ':function(_0x46142c,_0x2c3fba){return _0x46142c|_0x2c3fba;},'OVaPJ':'loZLG','uiJcU':function(_0x2c6c18,_0x407252){return _0x2c6c18+_0x407252;},'ViVCS':_0x1a1d69(0x740)+'\x20\x20\x20\x20','YZNRX':'\x20\x20(','EKCfe':function(_0x2b016a,_0x3bad29){return _0x2b016a/_0x3bad29;},'HnuOg':_0x1a1d69(0x14a)+_0x1a1d69(0x532)+'\x20','nfOBC':function(_0x3c1c1c,_0x29fb73){return _0x3c1c1c!=_0x29fb73;},'YwGyj':function(_0x198633,_0x278de9){return _0x198633+_0x278de9;},'CoAmE':'hooks'+'\x20\x20\x20\x20','SJBtR':'no\x20li'+_0x1a1d69(0x4d8)+'jects'+'\x20capt'+'ured\x20'+'yet.','oNWOI':function(_0x161f6f,_0x2bebd9){return _0x161f6f+_0x2bebd9;},'DWFgo':_0x1a1d69(0x72e),'AWgYt':function(_0x60a5e3,_0x567ce6){return _0x60a5e3<_0x567ce6;},'ZMkKM':_0x1a1d69(0x609),'KcNXE':_0x1a1d69(0x1f0)+_0x1a1d69(0x2b9)+'\x20kind'+'\x20\x20\x20\x20\x20'+_0x1a1d69(0x37e)+'lue\x20\x20'+'\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20'+_0x1a1d69(0x255),'kFbOh':function(_0x52f84c,_0x311d39){return _0x52f84c<_0x311d39;},'RaAtz':function(_0xaf1ffd,_0x584cab){return _0xaf1ffd===_0x584cab;},'ptbbd':'EInWR','RvEGv':function(_0x1ff5e6,_0x1e846f){return _0x1ff5e6===_0x1e846f;},'lmake':function(_0x47b379,_0x229f12){return _0x47b379+_0x229f12;},'NXNgN':'warni'+_0x1a1d69(0x30e),'DNyKy':'i16','VtbAo':'u32','layxA':'f32','tGURe':_0x1a1d69(0x197),'tkTJc':'repor'+'t','GEqrz':_0x1a1d69(0x6a7),'oFmIx':function(_0x46260d){return _0x46260d();},'lxpbH':function(_0x595c5b,_0x5c2405){return _0x595c5b!==_0x5c2405;},'iugaQ':'JOwsE','HUcrU':function(_0x916eb2,_0x4d5835){return _0x916eb2(_0x4d5835);},'wvnyb':function(_0x11b5d5){return _0x11b5d5();},'iFbZX':'name','SLaSj':function(_0x1773d9,_0x115c8e){return _0x1773d9!==_0x115c8e;},'CRaDM':_0x1a1d69(0x435),'rVava':'funct'+'ion','gWNFx':_0x1a1d69(0x490)+_0x1a1d69(0x586)+_0x1a1d69(0x649),'SjMBF':_0x1a1d69(0x1e3),'TZLhv':'info','aaiVl':function(_0x26b808,_0x4aa0d9){return _0x26b808===_0x4aa0d9;},'hKxjI':_0x1a1d69(0x64e),'jFSPJ':function(_0x4cdd5c,_0x2d52af){return _0x4cdd5c>_0x2d52af;},'INCem':function(_0x3eb05c,_0x12fe18){return _0x3eb05c-_0x12fe18;},'ZdeoZ':function(_0x14366f,_0x3a1cde){return _0x14366f>_0x3a1cde;},'hhhru':function(_0xe20691,_0x5754d3){return _0xe20691+_0x5754d3;},'IxgOQ':function(_0x2ab25e,_0x95e15d){return _0x2ab25e+_0x95e15d;},'LfgmR':function(_0x2affbe,_0x14cb4c){return _0x2affbe*_0x14cb4c;},'aTzxu':'Hooks'+'\x20are\x20'+_0x1a1d69(0x3ca)+_0x1a1d69(0x59d)+'t\x20no\x20'+_0x1a1d69(0x194)+'ntrol'+_0x1a1d69(0x49f)+'as\x20fi'+'red\x20y'+_0x1a1d69(0x2c6),'rKbql':function(_0x32a9bb,_0x36606c){return _0x32a9bb!==_0x36606c;},'VbhdQ':function(_0x32806b,_0x18de73){return _0x32806b===_0x18de73;},'vJtBe':_0x1a1d69(0x16b),'KuMaH':function(_0x2595de,_0x52e9c2){return _0x2595de<_0x52e9c2;},'YLQJC':'DTwTQ','iFBMD':_0x1a1d69(0x4ad),'rMssV':_0x1a1d69(0x510)+'ntiat'+_0x1a1d69(0x374)+_0x1a1d69(0x6c4),'XiiXY':'9|4|3'+'|2|7|'+_0x1a1d69(0x549)+_0x1a1d69(0x561),'grnCw':'#saku'+_0x1a1d69(0x1f3)+_0x1a1d69(0x717)+_0x1a1d69(0x681)+'nitia'+'l}','sxwiS':'HPkPW','rkllF':'OcNLl','cFWtX':function(_0x238956,_0x172642){return _0x238956===_0x172642;},'bbVJr':_0x1a1d69(0x5b9),'Omdmr':'Runti'+_0x1a1d69(0x5d5)+_0x1a1d69(0x6a2)+_0x1a1d69(0x3b3)+')','DcJRi':function(_0x119528,_0x42e940){return _0x119528===_0x42e940;},'ISXnB':'KmmGw','ClxVa':function(_0xa1bac7,_0x570bb5){return _0xa1bac7!==_0x570bb5;},'LIUWc':_0x1a1d69(0x3a5)+_0x1a1d69(0x4e5)+_0x1a1d69(0x6aa)+'ng','MndNl':'objec'+'t','VJiZQ':function(_0x4ec7a6){return _0x4ec7a6();},'qclsJ':'insta'+'ntiat'+_0x1a1d69(0x3fa)+'xport'+_0x1a1d69(0x720)+_0x1a1d69(0x159),'fHHAM':function(_0xd19e7a){return _0xd19e7a();},'pjBej':function(_0x5dc40d,_0x5de3df){return _0x5dc40d===_0x5de3df;},'uxRVt':function(_0xe298,_0x29e7c1){return _0xe298+_0x29e7c1;},'doOtX':_0x1a1d69(0x3d8)+_0x1a1d69(0x1af)+'hodIn'+_0x1a1d69(0x53d)+_0x1a1d69(0x641)+'id\x20do'+_0x1a1d69(0x42d)+_0x1a1d69(0x2ff)+_0x1a1d69(0x4b8)+_0x1a1d69(0x2bc)+_0x1a1d69(0x46c),'kHsGY':_0x1a1d69(0x41b),'xMhMc':function(_0x22b80e,_0x1efd82){return _0x22b80e!==_0x1efd82;},'hzLUC':function(_0x37428d,_0x2a513a){return _0x37428d<_0x2a513a;},'MXPCE':function(_0x434207){return _0x434207();},'wTaSG':function(_0x13d1a8,_0x4a09dd){return _0x13d1a8!==_0x4a09dd;},'jWriX':_0x1a1d69(0x4ed),'vdcwM':function(_0x5ca9ea,_0x21283e){return _0x5ca9ea+_0x21283e;},'oFAgk':function(_0x3212a7,_0xaff0ba){return _0x3212a7+_0xaff0ba;},'oadsd':'addre'+_0x1a1d69(0x4a1),'dpykm':_0x1a1d69(0x6a8),'KPFnk':function(_0x428f2a,_0x1624e6){return _0x428f2a!==_0x1624e6;},'uAhwA':'fJBPe','XolMq':function(_0x2e49be,_0x5243e5){return _0x2e49be+_0x5243e5;},'ZSRcY':_0x1a1d69(0x14d),'DDtRx':'u16','FwYlN':function(_0x4d6c0a,_0x5e488e){return _0x4d6c0a|_0x5e488e;},'JfKjL':function(_0x1ca7d9,_0x2f9895){return _0x1ca7d9(_0x2f9895);},'TOFAZ':_0x1a1d69(0x330)+'ooks\x20'+_0x1a1d69(0x15a)+_0x1a1d69(0x723)+_0x1a1d69(0x3c0)+_0x1a1d69(0x66b)+_0x1a1d69(0x589)+'date('+_0x1a1d69(0x423)+_0x1a1d69(0x64c)+_0x1a1d69(0x5fe)+'ured\x20'+_0x1a1d69(0x37c),'AdNLU':'jzjXk','ETdOM':function(_0x556c3a,_0x3ec189,_0x43aa71,_0x21ed21){return _0x556c3a(_0x3ec189,_0x43aa71,_0x21ed21);},'GBnWh':function(_0x5511b8,_0x6b1f9f){return _0x5511b8===_0x6b1f9f;},'RzNiV':function(_0x2e7981,_0x96d51d){return _0x2e7981^_0x96d51d;},'PdhJU':function(_0xee0f3e,_0x477c40){return _0xee0f3e!==_0x477c40;},'twqoJ':'aOteY','ePkXS':function(_0x599f5e,_0x226454){return _0x599f5e!==_0x226454;},'gmGMt':function(_0x2dd70c,_0x2e8f51){return _0x2dd70c&_0x2e8f51;},'FfxWg':function(_0x416989,_0x589593){return _0x416989+_0x589593;},'Xazrw':function(_0x444e93,_0x20905d,_0x18b628){return _0x444e93(_0x20905d,_0x18b628);},'NPIbR':function(_0x239cb9,_0x50e60e){return _0x239cb9+_0x50e60e;},'TunEC':function(_0xb7085b,_0x5c3a95,_0x57548e){return _0xb7085b(_0x5c3a95,_0x57548e);},'Eeout':function(_0x2c465f,_0x5152d5){return _0x2c465f===_0x5152d5;},'PqjMb':function(_0x2f90de,_0x1600ba){return _0x2f90de||_0x1600ba;},'ZMQrZ':function(_0x5a296a,_0x1c663f){return _0x5a296a===_0x1c663f;},'FEKYt':function(_0x499db3,_0x4531c9){return _0x499db3===_0x4531c9;},'kacpZ':function(_0x3ddd63,_0x662767){return _0x3ddd63!==_0x662767;},'EwIag':function(_0x1be7ad,_0x10b704){return _0x1be7ad&_0x10b704;},'VhnDM':function(_0x5009d1,_0x415b95,_0x3c2252,_0x1ee0be){return _0x5009d1(_0x415b95,_0x3c2252,_0x1ee0be);},'slHKd':function(_0x5a9f08,_0x1c8063){return _0x5a9f08^_0x1c8063;},'cOonu':function(_0x1838a9,_0x1a6f06){return _0x1838a9===_0x1a6f06;},'MUMTc':function(_0x580fc6,_0x425104,_0x2ad87e,_0x44590c){return _0x580fc6(_0x425104,_0x2ad87e,_0x44590c);},'imIdK':function(_0x180f1e,_0xc66165){return _0x180f1e===_0xc66165;},'ITBEE':function(_0x334d41,_0x5e3b80,_0xf2586d,_0xf26070){return _0x334d41(_0x5e3b80,_0xf2586d,_0xf26070);},'OdAFl':_0x1a1d69(0x2e5)+_0x1a1d69(0x19c)+'v2','awlHe':_0x1a1d69(0x390)+'·\x20','wmIqf':_0x1a1d69(0x314)+'a8','LlRFG':function(_0x67128b,_0x31497c){return _0x67128b<_0x31497c;},'PJcuc':_0x1a1d69(0x56b),'OHsMJ':'EDftm','dEvmM':function(_0x5a91e5,_0x42d260,_0x4a3eb4,_0x45898d){return _0x5a91e5(_0x42d260,_0x4a3eb4,_0x45898d);},'mTWxJ':function(_0x1caf44,_0x4e73cf){return _0x1caf44<_0x4e73cf;},'yilda':_0x1a1d69(0x3d9)+_0x1a1d69(0x395)+'e','Moqwd':function(_0x4dc641,_0x4d360f){return _0x4dc641<_0x4d360f;},'UOuIE':function(_0x1616ac,_0x5c4ec6){return _0x1616ac===_0x5c4ec6;},'qUyNv':'IfDRP','rqsgz':function(_0x3fd72e,_0x2927de){return _0x3fd72e>=_0x2927de;},'mCapK':function(_0x4e00d8,_0x40520c){return _0x4e00d8*_0x40520c;},'OTLza':function(_0x355758,_0x2c687f){return _0x355758>=_0x2c687f;},'DsdmT':_0x1a1d69(0x608)+_0x1a1d69(0x494),'tVxef':function(_0x33a462,_0x2744e1){return _0x33a462<_0x2744e1;},'rAxrq':function(_0x4ec971,_0x3c7c2a,_0x16e452,_0x4c1c8d,_0x2e2f85){return _0x4ec971(_0x3c7c2a,_0x16e452,_0x4c1c8d,_0x2e2f85);},'YPMAZ':_0x1a1d69(0x4ac),'bmuKr':function(_0x4acf21,_0x303492){return _0x4acf21===_0x303492;},'dExYT':function(_0x1264e2,_0x35867b){return _0x1264e2-_0x35867b;},'loeAc':function(_0x15d5fb,_0x547c3f){return _0x15d5fb===_0x547c3f;},'xVMkK':_0x1a1d69(0x194)+_0x1a1d69(0x2e8)+_0x1a1d69(0x5ee),'cFtOM':_0x1a1d69(0x5ce),'kwNdO':_0x1a1d69(0x2e5)+'a-sw-'+_0x1a1d69(0x15c)+'s','usVah':_0x1a1d69(0x16c),'SrmmS':function(_0x2d6d02,_0x20b3ad){return _0x2d6d02!==_0x20b3ad;},'cRJQl':'ddnuH','kGmpn':'Updat'+'e','eDLeJ':function(_0x3c72c1,_0x1f681b,_0xaf7c46,_0x987f9f){return _0x3c72c1(_0x1f681b,_0xaf7c46,_0x987f9f);},'bXMCl':'UNHjM','hsXYX':'strin'+'g','Aqwyn':_0x1a1d69(0x2cd),'IzIga':function(_0xcde4a2,_0x473d25){return _0xcde4a2<_0x473d25;},'MlSrr':function(_0x577b4a,_0x58e24b){return _0x577b4a+_0x58e24b;},'CQVnz':'1|2|0'+_0x1a1d69(0x4a5)+'5|6','OYXwL':function(_0x153a83,_0x27fb0c){return _0x153a83*_0x27fb0c;},'YyArM':function(_0x1df8af,_0x3d0828){return _0x1df8af+_0x3d0828;},'MttyE':function(_0x1fba38,_0x38738f){return _0x1fba38+_0x38738f;},'uSxgO':'posit'+_0x1a1d69(0x385)+_0x1a1d69(0x563)+_0x1a1d69(0x1ce)+_0x1a1d69(0x353)+_0x1a1d69(0x560)+_0x1a1d69(0x2ee)+_0x1a1d69(0x30f)+_0x1a1d69(0x466)+_0x1a1d69(0x288)+_0x1a1d69(0x211)+_0x1a1d69(0x296)+_0x1a1d69(0x333)+'er;us'+_0x1a1d69(0x48d)+'lect:'+_0x1a1d69(0x338),'NudUP':function(_0x102e3d,_0x5654af){return _0x102e3d&&_0x5654af;},'JrILw':function(_0x1ce7c7,_0x485cff){return _0x1ce7c7===_0x485cff;},'Qtcsg':function(_0x17928a,_0x432aeb){return _0x17928a<_0x432aeb;},'svDzh':function(_0x53e334,_0x51eed1){return _0x53e334===_0x51eed1;},'mEBuI':_0x1a1d69(0x20c),'JCNpE':_0x1a1d69(0x1b2),'iZCqG':function(_0x1e039c,_0x395c73){return _0x1e039c in _0x395c73;},'sYvvn':function(_0x566d73,_0xc02b4b){return _0x566d73+_0xc02b4b;},'OeIJK':function(_0x2477c0,_0x466266){return _0x2477c0===_0x466266;},'CNuEm':_0x1a1d69(0x509),'USrDB':'bVewD','NTcMt':function(_0x54a4a8,_0x10d2b9){return _0x54a4a8>>>_0x10d2b9;},'hPHvG':'ymroO','VQLam':'No\x20NP'+_0x1a1d69(0x5a8)+'rolle'+'r\x20and'+'\x20no\x20T'+_0x1a1d69(0x60a)+'meMan'+'ager,'+_0x1a1d69(0x5ca)+'o\x20ene'+_0x1a1d69(0x15d)+_0x1a1d69(0x277)+_0x1a1d69(0x2d0)+_0x1a1d69(0x569),'DkcIr':_0x1a1d69(0x612),'SzgxF':function(_0x453bfc,_0x4b080e,_0x598658,_0x2bc1c1){return _0x453bfc(_0x4b080e,_0x598658,_0x2bc1c1);},'CULlt':function(_0x36f87b,_0x3ec415){return _0x36f87b+_0x3ec415;},'FIOJM':function(_0x595e15,_0x2a21bd){return _0x595e15===_0x2a21bd;},'wLTDw':function(_0x3e7898,_0x2024f8){return _0x3e7898===_0x2024f8;},'cRCmD':function(_0x199ec8,_0x4f3d48){return _0x199ec8===_0x4f3d48;},'kVyIq':function(_0x424952,_0x5babdf){return _0x424952+_0x5babdf;},'JoTee':function(_0x2e30c2,_0xb54b14){return _0x2e30c2+_0xb54b14;},'SVrvB':'hid=','oHTgp':'\x20hex=','xYXrj':function(_0xd062a,_0x428835){return _0xd062a===_0x428835;},'tAdJM':function(_0x37b68a,_0x96fa50){return _0x37b68a(_0x96fa50);},'KkQLR':'offse'+_0x1a1d69(0x623)+_0x1a1d69(0x5bc)+'idth)','xHdqU':function(_0x54d79b,_0x285901){return _0x54d79b!==_0x285901;},'NYoMv':function(_0x2a3b90,_0x513c90){return _0x2a3b90===_0x513c90;},'xXCeq':_0x1a1d69(0x73a),'sahte':function(_0x36e9a7,_0x3187bb){return _0x36e9a7===_0x3187bb;},'QRdfN':function(_0x30366b,_0x2897fd){return _0x30366b<=_0x2897fd;},'bOcDV':_0x1a1d69(0x6f2)+_0x1a1d69(0x3f6)+'1','VPJup':function(_0x1f5ce1){return _0x1f5ce1();},'CUVAt':'3|1|2'+_0x1a1d69(0x6a1),'ybaFJ':function(_0x2d3e09,_0x50ad4f){return _0x2d3e09<_0x50ad4f;},'lRnIc':function(_0x5b5bc4,_0x470f6c){return _0x5b5bc4+_0x470f6c;},'QqtBd':'Reaso'+'n:\x20','XMHmq':function(_0x242275,_0x146c3f){return _0x242275===_0x146c3f;},'NTGdc':_0x1a1d69(0x5cd),'OpdbO':_0x1a1d69(0x43a),'DBcae':function(_0x3dcb1a,_0x24773e){return _0x3dcb1a===_0x24773e;},'xiApD':function(_0x88d7cc,_0x585f02){return _0x88d7cc!==_0x585f02;},'PYeAi':function(_0x2d1588,_0x5cf89f){return _0x2d1588!==_0x5cf89f;},'TeBNK':'biktl','MaDsG':function(_0x5554c9,_0x3fbe9b,_0x3b2743){return _0x5554c9(_0x3fbe9b,_0x3b2743);},'IxPhP':_0x1a1d69(0x58f),'HqtTu':_0x1a1d69(0x30b),'RLyPy':function(_0x5155a3,_0x5b9079){return _0x5155a3!==_0x5b9079;},'evIsp':function(_0x5d85aa,_0x326028){return _0x5d85aa+_0x326028;},'GDbxt':function(_0x221735,_0x1d6c8f){return _0x221735+_0x1d6c8f;},'MbPaP':_0x1a1d69(0x49c),'HuBSs':'[data'+_0x1a1d69(0x272),'rqMZA':_0x1a1d69(0x679),'lBHPW':function(_0x4e2310,_0x64299b){return _0x4e2310+_0x64299b;},'hHSuT':'backg'+_0x1a1d69(0x628)+_0x1a1d69(0x6af)+_0x1a1d69(0x2df)+_0x1a1d69(0x5b6)+'.92);'+_0x1a1d69(0x1d0)+_0x1a1d69(0x597)+'\x20soli'+'d\x20rgb'+_0x1a1d69(0x481)+_0x1a1d69(0x236)+'177,.'+'45);b'+_0x1a1d69(0x50d)+'-radi'+_0x1a1d69(0x2bf)+_0x1a1d69(0x46f),'WXwoF':'paddi'+'ng:6p'+'x\x208px'+';font'+':11px'+_0x1a1d69(0x716)+_0x1a1d69(0x4ab)+'onosp'+'ace,C'+'onsol'+'as,mo'+_0x1a1d69(0x47b)+_0x1a1d69(0x268)+_0x1a1d69(0x548)+'f7eef'+'5;','ZlMuE':function(_0x4ced80,_0x6cc889){return _0x4ced80+_0x6cc889;},'fxtUZ':function(_0x4ca0ca,_0x2d80b0){return _0x4ca0ca+_0x2d80b0;},'hxwIJ':_0x1a1d69(0x2bd)+_0x1a1d69(0x462)+_0x1a1d69(0x4c3)+'r\x22\x20st'+_0x1a1d69(0x189)+'displ'+_0x1a1d69(0x16e)+'ex;ga'+'p:6px'+';alig'+_0x1a1d69(0x635)+_0x1a1d69(0x4a8)+_0x1a1d69(0x552)+_0x1a1d69(0x410)+'wrap:'+'wrap;'+_0x1a1d69(0x4b2)+'idth:'+'290px'+_0x1a1d69(0x6eb),'TADPN':'\x22>sak'+'ura</'+'b>','fElnB':_0x1a1d69(0x281)+':#f7e'+_0x1a1d69(0x6d5)+_0x1a1d69(0x50d)+'-radi'+_0x1a1d69(0x617)+_0x1a1d69(0x4db)+'ding:'+_0x1a1d69(0x238)+_0x1a1d69(0x6ef)+_0x1a1d69(0x296)+'point'+'er;fo'+_0x1a1d69(0x2a4)+_0x1a1d69(0x445)+';\x22>Sp'+_0x1a1d69(0x3ab)+_0x1a1d69(0x6d1)+_0x1a1d69(0x4c0)+'>','nJwts':_0x1a1d69(0x177)+_0x1a1d69(0x302)+_0x1a1d69(0x3ee)+_0x1a1d69(0x205)+'yle=\x22'+_0x1a1d69(0x281)+':#bda'+'9c9;m'+'in-wi'+_0x1a1d69(0x34a)+'0px;\x22'+'>2.0x'+_0x1a1d69(0x453)+'n>','EWlTc':'<butt'+_0x1a1d69(0x58b)+'ta-a='+_0x1a1d69(0x393)+'\x22\x20sty'+_0x1a1d69(0x712)+_0x1a1d69(0x3fc)+_0x1a1d69(0x579)+_0x1a1d69(0x399)+'paren'+'t;bor'+_0x1a1d69(0x36c)+'px\x20so'+'lid\x20r'+_0x1a1d69(0x25c)+'55,14'+'3,177'+_0x1a1d69(0x147)+';','oEUwG':_0x1a1d69(0x281)+':#f7e'+'ef5;b'+_0x1a1d69(0x50d)+'-radi'+_0x1a1d69(0x617)+_0x1a1d69(0x4db)+'ding:'+'1px\x206'+'px;cu'+_0x1a1d69(0x296)+_0x1a1d69(0x333)+'er;fo'+_0x1a1d69(0x2a4)+_0x1a1d69(0x445)+';\x22>-<'+'/butt'+_0x1a1d69(0x154),'usgfo':'<div\x20'+_0x1a1d69(0x462)+_0x1a1d69(0x557)+_0x1a1d69(0x52a)+_0x1a1d69(0x6e7)+_0x1a1d69(0x408)+'#8d7a'+_0x1a1d69(0x18d)+_0x1a1d69(0x334)+'th:29'+'0px;\x22'+_0x1a1d69(0x27a)+'v>','CoYop':'<div\x20'+_0x1a1d69(0x462)+_0x1a1d69(0x557)+'2\x22\x20st'+'yle=\x22'+_0x1a1d69(0x281)+':#8d7'+_0x1a1d69(0x42b)+_0x1a1d69(0x5f6)+_0x1a1d69(0x22e)+'90px;'+'\x22></d'+_0x1a1d69(0x21c),'BGBlv':function(_0x5934ba,_0x1091ec){return _0x5934ba(_0x1091ec);},'MNXja':_0x1a1d69(0x3cf),'nCXzs':_0x1a1d69(0x672),'lrOtU':function(_0x5e93f0,_0x245fa5){return _0x5e93f0+_0x245fa5;},'NyiRg':_0x1a1d69(0x1ee)+_0x1a1d69(0x223)+_0x1a1d69(0x38b)+_0x1a1d69(0x737)+'nt\x20af'+_0x1a1d69(0x280)+_0x1a1d69(0x188)+_0x1a1d69(0x1e1)+'tarts'+'.','EHHdh':_0x1a1d69(0x199),'ghofd':'FJVpk','ZyGcu':_0x1a1d69(0x6d4)+'f5','HPTdI':'no-me'+'m','MqAYV':function(_0x5109df,_0xe49931){return _0x5109df+_0xe49931;},'zzaBE':function(_0x5ae392,_0x542904){return _0x5ae392+_0x542904;},'JMKxC':function(_0x1053e2,_0x59ee8d){return _0x1053e2+_0x59ee8d;},'tVBqx':function(_0x3e93ee,_0x4e2af9){return _0x3e93ee+_0x4e2af9;},'dHXxr':_0x1a1d69(0x489)+'\x20','LLbbl':'ehyli','YYqeT':function(_0x4a1c92,_0x13019){return _0x4a1c92>_0x13019;},'lCazY':function(_0x3e27db,_0x5e4a34){return _0x3e27db+_0x5e4a34;},'QlTTB':function(_0x1e68c7,_0x6eb651){return _0x1e68c7+_0x6eb651;},'PxpkG':'\x20\x20cam'+'\x20-','WhIkb':_0x1a1d69(0x4f9)+'99','dAMGV':_0x1a1d69(0x60c)+'hot','mcJvB':function(_0x2888cf,_0x3d5f51){return _0x2888cf===_0x3d5f51;},'uSeQP':function(_0x2336a8,_0x12b151){return _0x2336a8+_0x12b151;},'iOCPd':function(_0x5e0c0a){return _0x5e0c0a();},'kVuTB':_0x1a1d69(0x600)+_0x1a1d69(0x348)+'\x20but\x20'+'read\x20'+'0\x20fie'+'lds.\x20','mkzQI':function(_0x14113d,_0x46a758){return _0x14113d+_0x46a758;},'YDenA':function(_0x22e791,_0x2d7742){return _0x22e791+_0x2d7742;},'LMVEB':'plugi'+'n._ru'+_0x1a1d69(0x6b2)+_0x1a1d69(0x2f9)+_0x1a1d69(0x5ec)+'ndow.'+'Unity'+_0x1a1d69(0x586)+'dkit.'+_0x1a1d69(0x2a2)+_0x1a1d69(0x6c5)+_0x1a1d69(0x602)+'lugin'+'\x20was\x20'+_0x1a1d69(0x594)+'\x20','TTdxa':function(_0x59c353,_0xfd9129){return _0x59c353+_0xfd9129;},'mRzXx':'ms\x20wi'+'th\x20or'+'igina'+_0x1a1d69(0x1bc)+'=','uCHje':'\x20(sou'+_0x1a1d69(0x27d),'BVynb':_0x1a1d69(0x4ff),'jezNt':_0x1a1d69(0x33a)+_0x1a1d69(0x387)+_0x1a1d69(0x5df)+_0x1a1d69(0x667)+'t.Val'+_0x1a1d69(0x44d)+'pper\x20'+'is\x20mi'+_0x1a1d69(0x524)+_0x1a1d69(0x729)+_0x1a1d69(0x29d)+'\x20is\x20r'+_0x1a1d69(0x4ba)+_0x1a1d69(0x1a1)+'nd.','AuPFd':function(_0x4fc425,_0x541d02){return _0x4fc425>_0x541d02;},'VUGKX':'kdqSQ','wSzZw':'runs\x20'+_0x1a1d69(0x22d)+'durin'+'g\x20Web'+_0x1a1d69(0x31f)+'bly.i'+'nstan'+_0x1a1d69(0x356)+'\x20and\x20'+'snaps'+_0x1a1d69(0x1eb)+_0x1a1d69(0x4d1)+'n.hoo'+_0x1a1d69(0x26e)+_0x1a1d69(0x5e7)+'\x20','qqwwm':_0x1a1d69(0x19d)+_0x1a1d69(0x67d)+'\x20','ZoalE':_0x1a1d69(0x748)+'(s)\x20d'+_0x1a1d69(0x1c6)+'\x20armi'+'ng\x20at'+'\x20docu'+_0x1a1d69(0x43d)+_0x1a1d69(0x446)+'.','pXLWk':_0x1a1d69(0x5f3),'yAlkz':function(_0x3c874e,_0x2fc934){return _0x3c874e+_0x2fc934;},'ciDJB':_0x1a1d69(0x53e)+'resol'+'ved\x20','BMKlg':_0x1a1d69(0x2cc)+'-weig'+_0x1a1d69(0x719)+'0','FVTek':function(_0x424d0a,_0xcf0b41){return _0x424d0a+_0xcf0b41;},'hCQbs':function(_0x2209fa,_0x187d14){return _0x2209fa+_0x187d14;},'aigxA':function(_0x353c75,_0x1b4eb5,_0x258e72){return _0x353c75(_0x1b4eb5,_0x258e72);},'SPeNn':function(_0x4cb797){return _0x4cb797();},'Tddsx':function(_0x595214,_0x3497d7){return _0x595214(_0x3497d7);},'JhdtT':function(_0x285d3e,_0x47d239,_0x2b6fff){return _0x285d3e(_0x47d239,_0x2b6fff);},'KkYnI':function(_0x1a6d39){return _0x1a6d39();},'krplQ':function(_0x5b485c,_0x2c9a2d){return _0x5b485c===_0x2c9a2d;},'oqTSh':'BjKZs','SyMLw':_0x1a1d69(0x1d3),'pbxuI':'===SA'+_0x1a1d69(0x705)+_0x1a1d69(0x3b2)+_0x1a1d69(0x61e)+_0x1a1d69(0x14b)+'===','oZfCw':function(_0x3a8e92,_0x564b9e){return _0x3a8e92+_0x564b9e;},'eFjoy':'sakur'+_0x1a1d69(0x19c)+'panel'+'-hidd'+'en','jvPHJ':'DOMCo'+_0x1a1d69(0x1e5)+_0x1a1d69(0x17b)+'d','CwfbT':_0x1a1d69(0x181)+_0x1a1d69(0x583)+'\x20SW-P'+'LAYER'+_0x1a1d69(0x619)+_0x1a1d69(0x25d),'vNvcm':function(_0x100a4f,_0x527432,_0x12fa72){return _0x100a4f(_0x527432,_0x12fa72);},'UyRqi':_0x1a1d69(0x4cc),'jfwUy':'Healt'+_0x1a1d69(0x26b)+'pt','GEwxG':_0x1a1d69(0x398)+'meMan'+_0x1a1d69(0x2c4),'VOOJq':_0x1a1d69(0x21b)+'otrol'+_0x1a1d69(0x5ee),'wWPWX':_0x1a1d69(0x59a)+_0x1a1d69(0x2f3),'ETlJq':_0x1a1d69(0x31f)+_0x1a1d69(0x54c)+'Sharp'+'.dll','wPugD':_0x1a1d69(0x6fd)+'t.dll'};var _0x584430=location['hostn'+_0x1a1d69(0x209)]||'',_0x1fa9ac=/(^|\.)www\.crazygames\.com$/[_0x1a1d69(0x1c2)](_0x584430),_0x227955=/(^|\.)games\.crazygames\.com$/[_0x1a1d69(0x1c2)](_0x584430),_0x18a66d=/(^|\.)crazygames\.com$/[_0x1a1d69(0x1c2)](_0x584430)&&!_0x1fa9ac&&!_0x227955,_0x73e1ab=_0x1fa9ac?'porta'+'l':_0x227955?'wrapp'+'er':_0x1a1d69(0x38e)+'r';if(_0x27c645[_0x1a1d69(0x19f)](!_0x1fa9ac,!_0x227955)&&!_0x18a66d)return;var _0x2424a5=_0x1a1d69(0x545)+'b1',_0x4f9cf8=_0x1a1d69(0x45b)+_0x1a1d69(0x258)+_0x1a1d69(0x61f),_0x243a88=_0x27c645[_0x1a1d69(0x52c)],_0x391ae8='===SA'+'KURA-'+_0x1a1d69(0x3b2)+'WARZ-'+'END=='+'=',_0x151742=_0x1a1d69(0x1cc);if(_0x227955){window[_0x1a1d69(0x488)+'entLi'+_0x1a1d69(0x3d4)+'r'](_0x1a1d69(0x6fa)+'ge',function(_0x5e0da0){var _0x159b35=_0x1a1d69;if(_0x27c645['jmsSY']===_0x27c645[_0x159b35(0x6c8)]){var _0x697bf4=_0x5e0da0[_0x159b35(0x6b9)];if(!_0x697bf4||_0x697bf4[_0x159b35(0x45b)+'ura']!==_0x4f9cf8)return;try{if(window[_0x159b35(0x741)+'t']&&window['paren'+'t']!==window)window[_0x159b35(0x741)+'t'][_0x159b35(0x294)+_0x159b35(0x190)+'e'](_0x697bf4,'*');if(window['top']&&_0x27c645['VGucQ'](window[_0x159b35(0x362)],window))window[_0x159b35(0x362)]['postM'+_0x159b35(0x190)+'e'](_0x697bf4,'*');}catch(_0x262b21){}if(_0x697bf4&&_0x27c645[_0x159b35(0x5cc)](_0x697bf4['kind'],_0x27c645[_0x159b35(0x4f7)]))try{var _0x2a6b3c=document['query'+_0x159b35(0x28b)+_0x159b35(0x25f)+'l'](_0x159b35(0x350)+'e');for(var _0x32409c=0x1d1b+-0x1600+-0x71b;_0x32409c<_0x2a6b3c[_0x159b35(0x220)+'h'];_0x32409c++){try{if(_0x2a6b3c[_0x32409c][_0x159b35(0x5ad)+'ntWin'+_0x159b35(0x722)])_0x2a6b3c[_0x32409c]['conte'+_0x159b35(0x665)+_0x159b35(0x722)][_0x159b35(0x294)+'essag'+'e'](_0x697bf4,'*');}catch(_0x30f05e){}}}catch(_0x2e1434){}}else{var _0x5d5783=_0xaccac3['on'];_0x5bb04c['on']=!!_0x104a22;_0x54856e['on']&&!_0x5d5783&&(_0x31a06c===_0x45874e||_0x3e81ba===null||_0x27c645['UEaUM'](_0x59146d,_0x21aa21)===0x437+0x15*-0x6d+0x4bb)&&(_0x229579=_0x7f1e49);_0x357766['facto'+'r']=_0x2ff863['min'](_0x3a3af1[_0x159b35(0x4fd)],_0x2a73ea[_0x159b35(0x4fd)](_0x1814d1[_0x159b35(0x1e4)],_0x27c645[_0x159b35(0x213)](_0x5d799a,_0x25d40b)||-0x179a+0x754*0x1+0x1047));if(!_0x5acbe7['on'])_0x272b38={};var _0x1f8d5d=_0x27c645['HGDmh'](_0x5b6b4e);if(_0x1f8d5d){_0x1f8d5d['sp']&&(_0x1f8d5d['sp'][_0x159b35(0x67a)+'onten'+'t']=_0x128e35['on']?_0x159b35(0x4b7)+'\x20ON':'Speed'+_0x159b35(0x5b5),_0x1f8d5d['sp']['style'][_0x159b35(0x367)+_0x159b35(0x628)]=_0x2951a8['on']?_0x3df615:_0x159b35(0x399)+_0x159b35(0x741)+'t',_0x1f8d5d['sp'][_0x159b35(0x16c)][_0x159b35(0x281)]=_0xc2a4d8['on']?'#2a0f'+'1b':'#f7ee'+'f5');if(_0x1f8d5d['fx'])_0x1f8d5d['fx']['value']=_0x23bf38(_0x33c80b['facto'+'r']);if(_0x1f8d5d['fv'])_0x1f8d5d['fv']['textC'+'onten'+'t']=_0x4d7960[_0x159b35(0x4cb)+'r'][_0x159b35(0x4ca)+'ed'](0x44f+0x12d5+0x1723*-0x1)+'x';}}}),console[_0x1a1d69(0x1be)](_0x1a1d69(0x181)+'kura]'+'\x20SW-W'+'RAPPE'+_0x1a1d69(0x578)+_0x1a1d69(0x21e)+_0x1a1d69(0x37f)+'\x20up+d'+_0x1a1d69(0x690),_0x27c645[_0x1a1d69(0x595)](_0x1a1d69(0x281)+':',_0x2424a5));return;}if(_0x1fa9ac){console[_0x1a1d69(0x1be)]('%c[sa'+'kura]'+'\x20PORT'+_0x1a1d69(0x568)+_0x1a1d69(0x4ae),_0x27c645[_0x1a1d69(0x4ec)](_0x27c645[_0x1a1d69(0x477)](_0x27c645[_0x1a1d69(0x1aa)],_0x2424a5),_0x27c645['BMKlg']),{'host':_0x584430});var _0x3ad8af={'set':function(){},'command':function(){}};function _0x50c0ab(_0x3bb77a,_0x56d223){var _0x68fbe9=_0x1a1d69;if(_0x27c645['xgniJ'](_0x27c645['QveZD'],_0x68fbe9(0x352)))return _0x24b3d6[_0x68fbe9(0x210)+'d']++,_0x4f7fd8['lastE'+'rror']=_0x47187e['lastE'+_0x68fbe9(0x157)]||_0x27c645[_0x68fbe9(0x3f8)],null;else{var _0x1526be={'__sakura':_0x4f9cf8,'kind':_0x27c645['lhBka'],'cmd':_0x3bb77a,'arg':_0x56d223};try{var _0x2ee05c=document[_0x68fbe9(0x6fc)+'Selec'+_0x68fbe9(0x25f)+'l'](_0x27c645['ChUhI']);for(var _0x299ee7=0x94d+0x13ac+0x1*-0x1cf9;_0x299ee7<_0x2ee05c['lengt'+'h'];_0x299ee7++){try{if(_0x2ee05c[_0x299ee7]['conte'+_0x68fbe9(0x665)+_0x68fbe9(0x722)])_0x2ee05c[_0x299ee7]['conte'+_0x68fbe9(0x665)+_0x68fbe9(0x722)]['postM'+'essag'+'e'](_0x1526be,'*');}catch(_0x5c7cd5){}}}catch(_0x41abdf){}try{var _0x288c7f=new BroadcastChannel(_0x27c645[_0x68fbe9(0x2ed)]);_0x288c7f['postM'+'essag'+'e'](_0x1526be),setTimeout(function(){var _0x33e46e=_0x68fbe9;try{_0x288c7f[_0x33e46e(0x2e4)]();}catch(_0x5e964c){}},-0xb93+-0x2061+0x1aa*0x1b);}catch(_0x754ed9){}}}var _0x1849d7=_0x27c645['eFjoy'];function _0xda6da8(){var _0x488dae=_0x1a1d69,_0x3d118f={'hovLv':function(_0x5c27a1,_0x4f6e47){return _0x5c27a1===_0x4f6e47;},'euFOi':_0x488dae(0x4d1)+_0x488dae(0x637)+_0x488dae(0x6b2)+_0x488dae(0x4f2)+'e'};try{return localStorage['getIt'+'em'](_0x1849d7)==='1';}catch(_0x1dfc96){if('IDCVw'!==_0x488dae(0x4e6))return![];else{var _0x2fa043=_0x5aab03[_0x488dae(0x6e4)+_0x488dae(0x67b)];if(_0x3d118f[_0x488dae(0x444)](typeof _0x2fa043[_0x488dae(0x475)+_0x488dae(0x675)+'e'],_0x488dae(0x2ac)+_0x488dae(0x5d8))){var _0x5bbe4b=_0x2fa043[_0x488dae(0x475)+_0x488dae(0x675)+'e']();if(_0x5bbe4b)return _0x4a4528['sourc'+'e']='plugi'+'n._ru'+_0x488dae(0x6b2)+'.reso'+'lveGa'+_0x488dae(0x24c),_0x5bbe4b;}if(_0x2fa043[_0x488dae(0x707)])return _0x1046fd['sourc'+'e']=_0x3d118f[_0x488dae(0x2e9)],_0x2fa043['_game'];}}}function _0x18df90(_0x3c57f0){var _0x31fee2=_0x1a1d69,_0xd518d9={'ZQJcJ':_0x27c645['UyWzC'],'AUSlb':_0x31fee2(0x6ca),'NyaEd':function(_0x5cd9c1,_0x1ec631){return _0x5cd9c1(_0x1ec631);}};try{_0x3c57f0?localStorage[_0x31fee2(0x661)+'em'](_0x1849d7,'1'):localStorage[_0x31fee2(0x70e)+_0x31fee2(0x2d6)](_0x1849d7);}catch(_0x327279){}try{var _0x3cb8ac=document['getEl'+_0x31fee2(0x463)+'ById'](_0x31fee2(0x2e5)+_0x31fee2(0x19c)+'v2');if(_0x3cb8ac)_0x3cb8ac[_0x31fee2(0x70e)+'e']();}catch(_0x157888){}try{var _0x466736=document['getEl'+'ement'+_0x31fee2(0x4f3)](_0x27c645[_0x31fee2(0x73d)]);if(_0x3c57f0&&!_0x466736&&document[_0x31fee2(0x42e)]){var _0x671232=document[_0x31fee2(0x31d)+_0x31fee2(0x5e0)+_0x31fee2(0x5d1)](_0x27c645[_0x31fee2(0x406)]);_0x671232['id']=_0x27c645[_0x31fee2(0x73d)],_0x671232['style'][_0x31fee2(0x4b5)+'xt']=_0x27c645['XnKQJ'](_0x31fee2(0x50a)+_0x31fee2(0x385)+_0x31fee2(0x563)+'left:'+_0x31fee2(0x353)+'top:1'+_0x31fee2(0x2ee)+_0x31fee2(0x30f)+_0x31fee2(0x466)+_0x31fee2(0x288)+'99;cu'+_0x31fee2(0x296)+'point'+'er;us'+'er-se'+'lect:'+'none;'+(_0x31fee2(0x367)+_0x31fee2(0x628)+':rgba'+_0x31fee2(0x2df)+_0x31fee2(0x5b6)+'.9);b'+_0x31fee2(0x50d)+':1px\x20'+_0x31fee2(0x425)+_0x31fee2(0x691)+_0x31fee2(0x5f9)+_0x31fee2(0x610)+_0x31fee2(0x299)+_0x31fee2(0x676)+'or:')+_0x2424a5+';',_0x31fee2(0x1d0)+'r-rad'+_0x31fee2(0x3da)+_0x31fee2(0x574)+_0x31fee2(0x6ee)+_0x31fee2(0x6e6)+_0x31fee2(0x67e)+_0x31fee2(0x2b5)+'t:11p'+'x/1.4'+_0x31fee2(0x4ab)+_0x31fee2(0x4c5)+'ace,C'+_0x31fee2(0x2d7)+_0x31fee2(0x50f)+'nospa'+'ce;'),_0x671232[_0x31fee2(0x67a)+_0x31fee2(0x293)+'t']='sakur'+'a',_0x671232['oncli'+'ck']=function(){var _0x320031=_0x31fee2,_0x441aea={'MVjJc':function(_0x5dc96a,_0x1e0702){return _0x5dc96a!==_0x1e0702;},'hIQsS':'Runti'+_0x320031(0x537)+_0x320031(0x6c9)+_0x320031(0x605)+_0x320031(0x6b7)+_0x320031(0x44f)+'le','cgPEh':_0xd518d9[_0x320031(0x3ec)],'wdvTS':function(_0x50141e,_0x5d3d99){return _0x50141e+_0x5d3d99;},'CIrUb':function(_0x1cf99f){return _0x1cf99f();}};if(_0xd518d9['AUSlb']===_0x320031(0x73c)){var _0x8bafd=_0x31bbcd[_0x320031(0x490)+'WebMo'+_0x320031(0x649)]&&_0x1e7053['Unity'+_0x320031(0x586)+_0x320031(0x649)][_0x320031(0x2a2)+'me'];if(!_0x8bafd||_0x441aea[_0x320031(0x573)](typeof _0x8bafd[_0x320031(0x31d)+_0x320031(0x38c)+'in'],'funct'+_0x320031(0x5d8))){_0x8bce0a['error']=_0x441aea[_0x320031(0x3f5)];return;}_0x3ba7c8['attem'+_0x320031(0x6b4)]=!![],_0x2ab05e=_0x8bafd[_0x320031(0x31d)+_0x320031(0x38c)+'in']({'name':_0x441aea['cgPEh'],'version':_0x47f6a2,'referencedAssemblies':_0x233d52[_0x320031(0x2fa)]()}),_0x5155ef['ok']=!![];try{var _0x3185c0=_0x48bee5[_0x320031(0x490)+_0x320031(0x586)+'dkit']['Runti'+'me'];_0x3185c0['__sak'+_0x320031(0x1f8)+'g']=_0x441aea[_0x320031(0x69f)](_0x54a9da,':')+_0x2d673a[_0x320031(0x6d6)+'m']()[_0x320031(0x48a)+_0x320031(0x1ab)](-0x1*0x29+0x1*0xc2a+0x1*-0xbdd)[_0x320031(0x2fa)](0xd7d+-0x11c4+0x449,0x3d*0x67+-0x4*-0x37a+-0x1*0x2669),_0x2cfee9=_0x3185c0[_0x320031(0x45b)+_0x320031(0x1f8)+'g'];}catch(_0xa42dc0){}_0x441aea['CIrUb'](_0x50a104),_0x2d3daf['hooks'+_0x320031(0x19d)+_0x320031(0x67d)]=_0x38ac70['lengt'+'h'],_0x11f457(),_0x49fab8['memor'+'yTap']=!![];}else _0xd518d9['NyaEd'](_0x18df90,![]),_0x5c240d();},document['body']['appen'+_0x31fee2(0x2d8)+'d'](_0x671232);}else{if(_0x27c645[_0x31fee2(0x19f)](!_0x3c57f0,_0x466736)){if(_0x27c645['bkadZ'](_0x27c645['YGlYA'],'WTdMJ'))_0x466736[_0x31fee2(0x70e)+'e']();else return _0x1b6af1['faile'+'d']++,_0x50d34f[_0x31fee2(0x365)+'rror']=_0x329db6[_0x31fee2(0x365)+_0x31fee2(0x157)]||_0x468e8d(_0x3ac1ed&&_0x580c09[_0x31fee2(0x6fa)+'ge']||_0x27ed1e)['slice'](-0x1*0x179b+0x1*-0x998+0x2133,0x2a6*-0xa+-0x6cd*-0x5+-0x5*0x169),_0x2e5fb2;}}}catch(_0x2127db){}}function _0x1fe2d5(){var _0x4facb6=_0x1a1d69;if(_0x27c645['HGDmh'](_0xda6da8))return null;var _0x104c08=document[_0x4facb6(0x355)+_0x4facb6(0x463)+_0x4facb6(0x4f3)]('sakur'+'a-sw-'+'v2');if(_0x104c08)return _0x104c08;if(!document[_0x4facb6(0x42e)]||!document['body'][_0x4facb6(0x151)+'dChil'+'d'])return null;try{if(!document[_0x4facb6(0x355)+_0x4facb6(0x463)+'ById']('sakur'+_0x4facb6(0x19c)+'v2-cs'+'s')){var _0x112c5d=document['creat'+_0x4facb6(0x5e0)+'ent'](_0x4facb6(0x16c));_0x112c5d['id']='sakur'+_0x4facb6(0x19c)+'v2-cs'+'s',_0x112c5d[_0x4facb6(0x67a)+'onten'+'t']=_0x27c645[_0x4facb6(0x169)],(document[_0x4facb6(0x4bd)]||document[_0x4facb6(0x1b9)+_0x4facb6(0x685)+_0x4facb6(0x463)])['appen'+_0x4facb6(0x2d8)+'d'](_0x112c5d);}return _0x104c08=document[_0x4facb6(0x31d)+'eElem'+'ent'](_0x27c645[_0x4facb6(0x406)]),_0x104c08['id']=_0x4facb6(0x2e5)+'a-sw-'+'v2',document[_0x4facb6(0x42e)][_0x4facb6(0x151)+_0x4facb6(0x2d8)+'d'](_0x104c08),_0x104c08;}catch(_0x4dca5f){return null;}}function _0x5c240d(){var _0x28ec78=_0x1a1d69,_0x51465f=_0x1fe2d5();if(!_0x51465f)return _0x3ad8af;if(_0x51465f['datas'+'et']['api'])return _0x51465f[_0x28ec78(0x2c3)];try{return _0x27c645[_0x28ec78(0x1bb)](_0x5933cc,_0x51465f);}catch(_0x193fdc){return _0x51465f[_0x28ec78(0x64f)+'et'][_0x28ec78(0x2c3)]='1',_0x51465f[_0x28ec78(0x2c3)]=_0x3ad8af,console[_0x28ec78(0x23b)](_0x28ec78(0x181)+_0x28ec78(0x583)+_0x28ec78(0x416)+_0x28ec78(0x429)+_0x28ec78(0x5dc),'color'+':'+_0x2424a5,_0x193fdc),_0x3ad8af;}}function _0x5933cc(_0x462ff0){var _0x34fc18=_0x1a1d69,_0x487caf={'onWOQ':function(_0x49945e,_0x2bf82f){return _0x49945e(_0x2bf82f);},'WSyjl':'Speed'+_0x34fc18(0x5b5),'xKOHu':'trans'+'paren'+'t','lCmEg':_0x27c645[_0x34fc18(0x674)],'XXDkG':_0x34fc18(0x6d4)+'f5','qXaoo':function(_0xcc6bb7){return _0xcc6bb7();},'XnHEW':_0x27c645['gEHco'],'cfofu':function(_0x22578e,_0x5b99ee){return _0x22578e+_0x5b99ee;},'WJVXd':function(_0x3ba9fa,_0x5ceff2){return _0x3ba9fa+_0x5ceff2;},'pltws':function(_0x167eb9){return _0x167eb9();},'snmTy':_0x27c645[_0x34fc18(0x69a)],'rOIVM':_0x34fc18(0x2dd)+_0x34fc18(0x24d),'ncbus':function(_0x4962c0,_0xbeb9c4){return _0x4962c0+_0xbeb9c4;},'bsaWX':function(_0x1a52b6,_0x813459){return _0x1a52b6+_0x813459;},'JUTQy':function(_0x5a8013,_0x358300){return _0x5a8013+_0x358300;},'Dwhpe':_0x34fc18(0x231)+_0x34fc18(0x2eb)+'rmonk'+_0x34fc18(0x319)+_0x34fc18(0x2ae)+'injec'+'ting\x20'+'into\x20'+_0x34fc18(0x389)+'ross-'+_0x34fc18(0x2be)+'n\x20ifr'+'ame.\x0a','njCyX':_0x27c645[_0x34fc18(0x63e)],'USPdq':function(_0x15e94a,_0x33e2e8){return _0x15e94a||_0x33e2e8;},'Snqwt':_0x34fc18(0x57d)+'c7','MoqfX':_0x27c645['lYWkX'],'wQuoY':_0x34fc18(0x5c8)+_0x34fc18(0x3d1)+_0x34fc18(0x652)+_0x34fc18(0x65d)+_0x34fc18(0x2a1)+_0x34fc18(0x669)+_0x34fc18(0x1a8)+'s\x20orp'+_0x34fc18(0x3a2)+'.\x20Dis'+'able\x20'+_0x34fc18(0x3c6)+'\x20othe'+'r\x20','mwjGL':function(_0x47ad71,_0x349b62){return _0x47ad71+_0x349b62;},'yydKv':function(_0x299d64,_0x43fc3c,_0x51c41c){return _0x299d64(_0x43fc3c,_0x51c41c);},'ehMGZ':_0x27c645[_0x34fc18(0x470)],'MtRhl':function(_0x5e49f7,_0x5b683b){return _0x5e49f7+_0x5b683b;},'zqQQi':_0x27c645[_0x34fc18(0x27b)],'xDxjG':function(_0x15b460,_0x1f8d29){var _0x182296=_0x34fc18;return _0x27c645[_0x182296(0x1b8)](_0x15b460,_0x1f8d29);},'yUyHC':_0x34fc18(0x5f7),'nswqB':function(_0x5b3da6,_0x4b653f,_0x1f7f7c){return _0x5b3da6(_0x4b653f,_0x1f7f7c);},'kYJgy':function(_0x1ca63b,_0x4208aa){return _0x1ca63b&_0x4208aa;},'AeHvF':function(_0x36fc92,_0x3fd8b2){var _0x42ccbc=_0x34fc18;return _0x27c645[_0x42ccbc(0x710)](_0x36fc92,_0x3fd8b2);},'eoQWI':function(_0x1301c2,_0x193654){var _0x2d79b3=_0x34fc18;return _0x27c645[_0x2d79b3(0x57c)](_0x1301c2,_0x193654);}};_0x462ff0[_0x34fc18(0x16c)][_0x34fc18(0x4b5)+'xt']=_0x27c645[_0x34fc18(0x553)]('posit'+_0x34fc18(0x385)+'ixed;'+_0x34fc18(0x1ce)+_0x34fc18(0x353)+_0x34fc18(0x560)+_0x34fc18(0x2ee)+_0x34fc18(0x30f)+'x:214'+_0x34fc18(0x1a6)+'00;ma'+_0x34fc18(0x334)+'th:mi'+_0x34fc18(0x5cb)+'w,620'+'px);m'+'ax-he'+_0x34fc18(0x2a6)+_0x34fc18(0x68e)+(_0x34fc18(0x367)+_0x34fc18(0x628)+_0x34fc18(0x5d3)+_0x34fc18(0x191)+_0x34fc18(0x408)+'#f7ee'+'f5;bo'+_0x34fc18(0x533)+'1px\x20s'+_0x34fc18(0x3c8)+_0x34fc18(0x298)+'255,1'+'43,17'+'7,.5)'+_0x34fc18(0x158)+_0x34fc18(0x39c)+_0x34fc18(0x29b)+'14px;')+(_0x34fc18(0x35e)+'12px/'+_0x34fc18(0x60d)+_0x34fc18(0x4e0)+'ospac'+'e,Con'+_0x34fc18(0x422)+_0x34fc18(0x1a9)+_0x34fc18(0x3d6)+';box-'+_0x34fc18(0x5bb)+_0x34fc18(0x68f)+_0x34fc18(0x6db)+'0px\x20-'+_0x34fc18(0x458)+'#000;'),_0x34fc18(0x36f)+_0x34fc18(0x16e)+'ex;fl'+_0x34fc18(0x516)+_0x34fc18(0x253)+_0x34fc18(0x263)+_0x34fc18(0x264)+'overf'+'low:h'+_0x34fc18(0x17c)+';'),_0x462ff0[_0x34fc18(0x1db)+_0x34fc18(0x4f6)]=_0x27c645['rdrjp'](_0x27c645['IeJyd'](_0x27c645['XnKQJ'](_0x27c645[_0x34fc18(0x5c6)](_0x27c645['XnKQJ'](_0x27c645[_0x34fc18(0x186)](_0x27c645['BGzHQ'](_0x27c645[_0x34fc18(0x30a)](_0x27c645[_0x34fc18(0x2f7)](_0x27c645['XnKQJ'](_0x27c645[_0x34fc18(0x303)](_0x34fc18(0x2bd)+_0x34fc18(0x16c)+_0x34fc18(0x607)+_0x34fc18(0x6d7)+_0x34fc18(0x5ff)+'2px;b'+'order'+'-bott'+_0x34fc18(0x375)+_0x34fc18(0x4b3)+'id\x20rg'+_0x34fc18(0x4a3)+_0x34fc18(0x153)+_0x34fc18(0x501)+'.3);d'+_0x34fc18(0x52e)+'y:fle'+_0x34fc18(0x4af)+':8px;'+'align'+'-item'+_0x34fc18(0x51c)+_0x34fc18(0x520)+'lex:0'+_0x34fc18(0x5f0)+'to;\x22>',_0x27c645[_0x34fc18(0x41e)]),_0x2424a5)+('\x22>sak'+'ura\x20·'+_0x34fc18(0x291)+_0x34fc18(0x40b)+_0x34fc18(0x1c5)),_0x27c645['XWodZ']),_0x27c645[_0x34fc18(0x198)])+(_0x34fc18(0x704)+_0x34fc18(0x310)+_0x34fc18(0x33c)+'-copy'+_0x34fc18(0x52a)+_0x34fc18(0x4e9)+_0x34fc18(0x52e)+'y:non'+_0x34fc18(0x2b0)+_0x34fc18(0x3fb)+_0x34fc18(0x284)+'uto;b'+_0x34fc18(0x3fc)+'ound:'),_0x2424a5),_0x34fc18(0x158)+'er:0;'+_0x34fc18(0x281)+':#2a0'+_0x34fc18(0x317)+_0x34fc18(0x50d)+_0x34fc18(0x5c7)+_0x34fc18(0x65a)+_0x34fc18(0x4db)+_0x34fc18(0x6d7)+_0x34fc18(0x309)+_0x34fc18(0x487)+_0x34fc18(0x6e0)+'eight'+':700;'+_0x34fc18(0x3c9)+_0x34fc18(0x439)+_0x34fc18(0x552)+'\x22>Cop'+_0x34fc18(0x5d7)+_0x34fc18(0x715)+_0x34fc18(0x670))+_0x27c645['dNDYj']+('<butt'+'on\x20id'+_0x34fc18(0x33c)+'-x\x22\x20s'+'tyle='+_0x34fc18(0x1d8)+_0x34fc18(0x4c6)+_0x34fc18(0x3ae)+_0x34fc18(0x201)+'ent;b'+'order'+_0x34fc18(0x555)+_0x34fc18(0x425)+_0x34fc18(0x691)+_0x34fc18(0x5f9)+_0x34fc18(0x610)+_0x34fc18(0x69d)+_0x34fc18(0x676)+_0x34fc18(0x6ac)+'7eef5'+';bord'+'er-ra'+'dius:'+'7px;p'+_0x34fc18(0x3f2)+_0x34fc18(0x5a2)+_0x34fc18(0x240)+_0x34fc18(0x3c9)+_0x34fc18(0x439)+'nter;'+_0x34fc18(0x233)+_0x34fc18(0x361)+'n>')+_0x27c645['YcMbP'],_0x27c645[_0x34fc18(0x308)])+_0x27c645[_0x34fc18(0x48c)],_0x27c645['UCNDZ'])+_0x27c645[_0x34fc18(0x61a)],_0x2424a5)+';\x22>',_0x34fc18(0x177)+_0x34fc18(0x60b)+_0x34fc18(0x212)+_0x34fc18(0x657)+'label'+_0x34fc18(0x52a)+'le=\x22c'+_0x34fc18(0x408)+'#bda9'+_0x34fc18(0x165)+_0x34fc18(0x1a4)+_0x34fc18(0x52b)+_0x34fc18(0x3a9)+_0x34fc18(0x1cb)+_0x34fc18(0x743)+'>')+_0x27c645[_0x34fc18(0x464)]+_0x27c645['nBHty'],_0x27c645[_0x34fc18(0x22b)])+_0x27c645[_0x34fc18(0x28f)]+(_0x34fc18(0x388)+_0x34fc18(0x23f)+':62vh'+_0x34fc18(0x2c1)+_0x34fc18(0x47c)+'rt\x20ye'+_0x34fc18(0x452)+'his\x20p'+'anel\x20'+'updat'+_0x34fc18(0x724)+_0x34fc18(0x54a)+_0x34fc18(0x63a)+'the\x20g'+_0x34fc18(0x1b5)+_0x34fc18(0x1cf)+_0x34fc18(0x257)+'\x20—\x20no'+_0x34fc18(0x37b)+'ole\x20n'+'eeded'+_0x34fc18(0x5d2)+'\x20it\x20s'+_0x34fc18(0x382)+_0x34fc18(0x421)+_0x34fc18(0x442)+'permo'+_0x34fc18(0x247)+'is\x20no'+_0x34fc18(0x285)+'ectin'+_0x34fc18(0x2b4)+_0x34fc18(0x471)+_0x34fc18(0x55e)+'s-ori'+'gin\x20g'+'ame\x20f'+_0x34fc18(0x5e2)+_0x34fc18(0x479)+'>')+(_0x34fc18(0x245)+'>');var _0x1dcdb8=_0x462ff0[_0x34fc18(0x6fc)+'Selec'+'tor']('#sw2-'+'statu'+'s'),_0x1c6bc7=_0x462ff0[_0x34fc18(0x6fc)+_0x34fc18(0x28b)+'tor'](_0x34fc18(0x3f3)+_0x34fc18(0x51d)),_0x47423d=_0x462ff0[_0x34fc18(0x6fc)+_0x34fc18(0x28b)+_0x34fc18(0x448)](_0x34fc18(0x3f3)+_0x34fc18(0x5c2)),_0x2ece17=_0x462ff0[_0x34fc18(0x6fc)+'Selec'+_0x34fc18(0x448)](_0x27c645[_0x34fc18(0x2f0)]),_0x2c2ab5=_0x462ff0[_0x34fc18(0x6fc)+'Selec'+_0x34fc18(0x448)](_0x27c645['CMkga']),_0x5f265d=_0x462ff0['query'+'Selec'+'tor'](_0x34fc18(0x3f3)+'toggl'+'e'),_0x33f7d9=_0x462ff0['query'+_0x34fc18(0x28b)+_0x34fc18(0x448)]('#sw2-'+_0x34fc18(0x42e)),_0x3b92c3=_0x462ff0[_0x34fc18(0x6fc)+_0x34fc18(0x28b)+'tor'](_0x34fc18(0x3f3)+_0x34fc18(0x3cf)),_0x34928a=_0x462ff0[_0x34fc18(0x6fc)+_0x34fc18(0x28b)+'tor'](_0x27c645[_0x34fc18(0x572)]),_0x567cc3=_0x462ff0['query'+'Selec'+'tor'](_0x27c645[_0x34fc18(0x6e1)]),_0x4630d5=_0x462ff0[_0x34fc18(0x6fc)+'Selec'+'tor'](_0x34fc18(0x3f3)+_0x34fc18(0x4cb)+_0x34fc18(0x40d)+'l'),_0x5e8831=_0x462ff0[_0x34fc18(0x6fc)+'Selec'+_0x34fc18(0x448)](_0x27c645['yuJVo']),_0x52f29a=null,_0x58ffda=![];function _0x1675d4(){var _0x22754b=_0x34fc18;if(_0x33f7d9)_0x33f7d9[_0x22754b(0x16c)]['displ'+'ay']=_0x58ffda?'':_0x27c645[_0x22754b(0x17f)];if(_0x5f265d)_0x5f265d[_0x22754b(0x67a)+_0x22754b(0x293)+'t']=_0x58ffda?'close':_0x27c645[_0x22754b(0x185)];_0x462ff0[_0x22754b(0x16c)]['width']=_0x58ffda?_0x27c645[_0x22754b(0x58e)]:_0x27c645['GiQxF'],_0x462ff0[_0x22754b(0x16c)]['backg'+'round']=_0x58ffda?_0x22754b(0x3a4)+'1d':_0x22754b(0x298)+_0x22754b(0x39e)+',29,.'+'9)';}if(_0x5f265d)_0x5f265d[_0x34fc18(0x639)+'ck']=function(){_0x58ffda=!_0x58ffda,_0x1675d4();};_0x27c645[_0x34fc18(0x41f)](_0x1675d4);if(_0x2c2ab5)_0x2c2ab5['oncli'+'ck']=function(){var _0x57c489=_0x34fc18;_0x27c645[_0x57c489(0x213)](_0x18df90,!![]);};if(_0x3b92c3)_0x3b92c3['oncli'+'ck']=function(){var _0x398518=_0x34fc18;_0x50c0ab(_0x398518(0x60c)+_0x398518(0x3bb));};var _0x30cf52=![];function _0x3790cd(){var _0x55334e=_0x34fc18;_0x50c0ab(_0x55334e(0x5cd),{'on':_0x30cf52,'factor':_0x487caf[_0x55334e(0x443)](parseFloat,_0x567cc3['value'])||0x1*-0xbbd+-0x11e0+-0x1*-0x1d9e});}if(_0x34928a)_0x34928a['oncli'+'ck']=function(){var _0x5aadab=_0x34fc18;_0x30cf52=!_0x30cf52,_0x34928a['textC'+'onten'+'t']=_0x30cf52?_0x5aadab(0x4b7)+_0x5aadab(0x58d):_0x487caf[_0x5aadab(0x2b6)],_0x34928a['style'][_0x5aadab(0x367)+_0x5aadab(0x628)]=_0x30cf52?_0x2424a5:_0x487caf['xKOHu'],_0x34928a['style'][_0x5aadab(0x281)]=_0x30cf52?_0x487caf[_0x5aadab(0x5a6)]:_0x487caf[_0x5aadab(0x5b3)],_0x487caf['qXaoo'](_0x3790cd);};if(_0x567cc3)_0x567cc3[_0x34fc18(0x32b)+'ut']=function(){var _0x4b8b41=_0x34fc18;if(_0x4630d5)_0x4630d5[_0x4b8b41(0x67a)+_0x4b8b41(0x293)+'t']=(parseFloat(_0x567cc3[_0x4b8b41(0x3d0)])||-0x2dd+0x1*0x251+0x8d)['toFix'+'ed'](0x16e5*0x1+-0x1d81*-0x1+-0x3465)+'x';_0x3790cd();};if(_0x2ece17)_0x2ece17['oncli'+'ck']=function(){var _0x5bc32d=_0x34fc18,_0x3502aa={'BBoyg':_0x5bc32d(0x297)+'d'},_0x4156c3=_0x27c645['XnKQJ'](_0x27c645['XnKQJ'](_0x243a88,'\x0a')+(_0x52f29a?JSON[_0x5bc32d(0x6fe)+_0x5bc32d(0x4cd)](_0x52f29a,null,-0x250e+0x1*0x1f76+0x599):''),'\x0a')+_0x391ae8,_0x36a776=function(){var _0x765d3b=_0x5bc32d;if(_0x2ece17)_0x2ece17[_0x765d3b(0x67a)+_0x765d3b(0x293)+'t']=_0x3502aa['BBoyg'];};if(navigator['clipb'+_0x5bc32d(0x20d)]&&navigator[_0x5bc32d(0x187)+_0x5bc32d(0x20d)]['write'+_0x5bc32d(0x20b)]){if(_0x27c645['xgniJ'](_0x27c645[_0x5bc32d(0x4fb)],_0x5bc32d(0x33b))){var _0x3759fd=_0x18ecde[_0x52836f],_0x35e81a=typeof _0x3759fd['v']===_0x487caf[_0x5bc32d(0x34e)]?_0x475424['round'](_0x3759fd['v']*(0x1517*-0x1+-0xb*-0x349+-0xb24))/(-0xece+0x2c*-0x6d+0x12b9*0x2):_0x3759fd['v'];_0xd85008[_0x5bc32d(0x1e7)](_0x487caf['cfofu'](_0x487caf['cfofu'](_0x487caf[_0x5bc32d(0x2bb)](_0x487caf['WJVXd'](_0x487caf[_0x5bc32d(0x4bc)]('\x20\x20',_0x487caf[_0x5bc32d(0x4bc)]('0x',_0x3759fd['o'][_0x5bc32d(0x48a)+'ing'](-0x35+-0x9*0x251+0x151e))[_0x5bc32d(0x27c)+'d'](-0x88*0x43+0x440*-0x1+0x27e0)),'\x20'),_0x3759fd['k'][_0x5bc32d(0x27c)+'d'](-0x209*-0x5+-0x20ce+0x16ac*0x1)),'\x20'),_0x147753(_0x35e81a)['padEn'+'d'](0x253c+0x1624+-0x3b50))+'\x20'+(_0x3759fd[_0x5bc32d(0x255)]||''));}else navigator['clipb'+'oard']['write'+_0x5bc32d(0x20b)](_0x4156c3)[_0x5bc32d(0x5b4)](_0x36a776,function(){var _0x2ff374=_0x5bc32d;_0x487caf[_0x2ff374(0x222)](_0x403f18);});}else _0x403f18();function _0x403f18(){var _0x128f17=_0x5bc32d,_0x1d88fc=document['creat'+'eElem'+_0x128f17(0x5d1)]('texta'+_0x128f17(0x2cf));_0x1d88fc[_0x128f17(0x3d0)]=_0x4156c3;if(!document['body'])return;document['body'][_0x128f17(0x151)+'dChil'+'d'](_0x1d88fc),_0x1d88fc[_0x128f17(0x35f)+'t']();try{document[_0x128f17(0x467)+_0x128f17(0x527)+'d'](_0x487caf['snmTy']),_0x36a776();}catch(_0x25ec25){}_0x1d88fc[_0x128f17(0x70e)+'e']();}};_0x27c645[_0x34fc18(0x407)](setTimeout,function(){var _0x3e3aeb=_0x34fc18,_0x321aec=_0x487caf[_0x3e3aeb(0x269)][_0x3e3aeb(0x5e8)]('|'),_0xcb0030=0x2144+-0x2585+0x441;while(!![]){switch(_0x321aec[_0xcb0030++]){case'0':_0x47423d[_0x3e3aeb(0x67a)+_0x3e3aeb(0x293)+'t']=_0x487caf[_0x3e3aeb(0x357)](_0x487caf['bsaWX'](_0x487caf['JUTQy'](_0x3e3aeb(0x19e)+_0x3e3aeb(0x1b5)+'rame\x20'+'never'+'\x20post'+_0x3e3aeb(0x218)+_0x3e3aeb(0x608)+'e\x20rep'+'ort.\x0a'+'\x0a'+(_0x3e3aeb(0x174)+_0x3e3aeb(0x493)+'\x20prov'+_0x3e3aeb(0x2f2)+'e\x20use'+_0x3e3aeb(0x5f5)+'pt\x20IS'+_0x3e3aeb(0x521)+'alled'+'\x20and\x20'+_0x3e3aeb(0x166)+_0x3e3aeb(0x3c5)+'\x20the\x20'+_0x3e3aeb(0x3a0)+'l,\x0a'),'so\x20th'+_0x3e3aeb(0x23a)+_0x3e3aeb(0x2aa)+_0x3e3aeb(0x6ae)+_0x3e3aeb(0x19a)+_0x3e3aeb(0x178)+'\x0a\x0a'),_0x487caf['Dwhpe']),_0x487caf['njCyX'])+('\x20\x203.\x20'+_0x3e3aeb(0x1e9)+'sakur'+'a.ski'+_0x3e3aeb(0x615)+_0x3e3aeb(0x1b1)+'r.js\x20'+_0x3e3aeb(0x41c)+'he\x20ol'+_0x3e3aeb(0x51e)+'g\x20scr'+'ipt\x20a'+'re\x0a')+('\x20\x20\x20\x20\x20'+'insta'+_0x3e3aeb(0x3d5)+'—\x20two'+_0x3e3aeb(0x596)+_0x3e3aeb(0x6f0)+_0x3e3aeb(0x1f4)+_0x3e3aeb(0x496)+'\x20patc'+'h\x20Web'+_0x3e3aeb(0x31f)+_0x3e3aeb(0x53f)+_0x3e3aeb(0x196)+_0x3e3aeb(0x356)+_0x3e3aeb(0x17a))+(_0x3e3aeb(0x587)+_0x3e3aeb(0x472)+'\x20game'+_0x3e3aeb(0x536)+_0x3e3aeb(0x360)+'\x20and\x20'+_0x3e3aeb(0x3d2)+_0x3e3aeb(0x1a5)+'\x20pane'+'l\x20aga'+_0x3e3aeb(0x728));continue;case'1':if(_0x52f29a)return;continue;case'2':if(_0x487caf[_0x3e3aeb(0x2e1)](!_0x1dcdb8,!_0x47423d))return;continue;case'3':_0x1dcdb8[_0x3e3aeb(0x16c)]['color']=_0x487caf['Snqwt'];continue;case'4':_0x1dcdb8['textC'+_0x3e3aeb(0x293)+'t']='no\x20re'+_0x3e3aeb(0x4e4)+'after'+'\x2060s\x20'+_0x3e3aeb(0x417)+_0x3e3aeb(0x585)+'t\x20inj'+'ected'+'?';continue;}break;}},0x19cc3+-0x16c6a+-0xba07*-0x1);var _0x43cdde={'set':function(_0x42eb0f){var _0xddfb49=_0x34fc18,_0x18f052={'uoFUQ':function(_0x3d1e12,_0x36c417){return _0x3d1e12(_0x36c417);}};_0x52f29a=_0x42eb0f;if(_0x2ece17)_0x2ece17[_0xddfb49(0x16c)][_0xddfb49(0x36f)+'ay']='';if(_0x1c6bc7){if(_0x27c645[_0xddfb49(0x514)]!==_0x27c645['ozxWd'])_0xde652[_0xddfb49(0x550)+'ngs'][_0xddfb49(0x1e7)](_0x487caf['ncbus']('ANOTH'+_0xddfb49(0x19b)+'MK\x20CO'+_0xddfb49(0x659)+_0xddfb49(0x47e)+'ER\x20wi'+_0xddfb49(0x57f)+_0xddfb49(0x490)+_0xddfb49(0x586)+_0xddfb49(0x2ab)+_0xddfb49(0x380)+'Runti'+'me\x20we'+_0xddfb49(0x711)+'d\x20was'+'\x20'+_0x487caf[_0xddfb49(0x3b7)]+_0x487caf['wQuoY'],'Sakur'+_0xddfb49(0x391)+_0xddfb49(0x502)+'ipt\x20i'+_0xddfb49(0x506)+'permo'+'nkey\x20'+_0xddfb49(0x4df)+_0xddfb49(0x267)+_0xddfb49(0x239)+'.'));else{_0x1c6bc7[_0xddfb49(0x67a)+'onten'+'t']='v'+(_0x42eb0f[_0xddfb49(0x668)+'on']||'?');var _0x27a21d=_0x151742,_0x3de892=_0x42eb0f[_0xddfb49(0x668)+'on']||'';_0x1c6bc7['style']['color']=_0x27c645['bxlGc'](_0x3de892,_0x27a21d)?_0x2424a5:_0x27c645['XuPAv'],_0x1c6bc7[_0xddfb49(0x16c)][_0xddfb49(0x1d0)+'rColo'+'r']=_0x3de892===_0x27a21d?'rgba('+_0xddfb49(0x580)+'43,17'+_0xddfb49(0x254)+')':'#ff6e'+'74';}}var _0x1729af=_0x42eb0f['insta'+'nces']&&_0x42eb0f[_0xddfb49(0x510)+'nces']['FPSco'+_0xddfb49(0x2e8)+'ler'],_0x26fc8b=Math['round']((_0x42eb0f[_0xddfb49(0x40c)+_0xddfb49(0x3ff)]||-0x876*-0x4+0x83*-0x11+0x29*-0x9d)/(-0x11*-0x102+0x1cc3*-0x1+0x1*0xf89));if(_0x1dcdb8){var _0x9219fd,_0x4324b1;if(_0x1729af&&_0x42eb0f[_0xddfb49(0x54f)+'y']&&_0x42eb0f[_0xddfb49(0x54f)+'y']['FPSco'+_0xddfb49(0x2e8)+'ler']){if(_0xddfb49(0x2d5)!==_0x27c645[_0xddfb49(0x5aa)]){_0x18f052[_0xddfb49(0x320)](_0x5c35a8,!![]);return;}else _0x9219fd=_0x27c645[_0xddfb49(0x2f6)](_0x27c645[_0xddfb49(0x2f6)](_0x27c645['DKOSS'](_0xddfb49(0x390)+'·\x20',Object['keys'](_0x42eb0f['insta'+'nces'])[_0xddfb49(0x220)+'h'])+_0x27c645['rFwmC'],_0x26fc8b),'s'),_0x4324b1='#7ee0'+'a8';}else{if(_0x42eb0f['hooks'+'Appli'+'ed']>-0xa7c+0x5e*-0x40+-0x15c*-0x19)_0x9219fd=_0x27c645['DKOSS'](_0xddfb49(0x727)+'\x20arme'+'d\x20·\x20'+_0x26fc8b,'s'),_0x4324b1=_0x27c645[_0xddfb49(0x152)];else _0x42eb0f[_0xddfb49(0x631)+'tData']?(_0x9219fd=_0x27c645['EQHuH'](_0x27c645['EWdMs'],_0x26fc8b)+'s',_0x4324b1=_0x27c645[_0xddfb49(0x152)]):(_0x9219fd=(_0x42eb0f['arm']&&_0x42eb0f[_0xddfb49(0x2d1)]['ok']?_0xddfb49(0x3af)+'\x20·\x20':_0x27c645[_0xddfb49(0x315)])+_0x26fc8b+'s',_0x4324b1='#ffd4'+'8a');}_0x1dcdb8[_0xddfb49(0x67a)+_0xddfb49(0x293)+'t']=_0x9219fd,_0x1dcdb8['style']['color']=_0x4324b1;}if(_0x5e8831){if(_0x27c645['GqcWO'](_0x27c645[_0xddfb49(0x1cd)],'RPOsi')){var _0x55de0f=_0x115c41[_0xccfb96];if(!_0x55de0f)return null;var _0x159c36=_0x1c9eaa(_0x487caf[_0xddfb49(0x62d)](_0x483eed,_0x41757a)+_0x55de0f[_0xddfb49(0x28d)],'u8'),_0x9dba4a=_0x487caf['yydKv'](_0x553983,_0x4b6cb0+_0x2787ea+_0x55de0f[_0xddfb49(0x349)+'n'],_0x487caf[_0xddfb49(0x3a7)]),_0x4fccb4=_0x1ad0df(_0x487caf[_0xddfb49(0x4bc)](_0x487caf['MtRhl'](_0x4d4728,_0x428a79),_0x55de0f[_0xddfb49(0x346)+'d']),'u8'),_0x58d853=_0x35065f(_0x1d0dc1+_0x46fc53+_0x55de0f['fake'],_0x5c4d69===_0x487caf[_0xddfb49(0x36b)]?_0xddfb49(0x3ce):_0x487caf['xDxjG'](_0x56e4b9,_0x487caf[_0xddfb49(0x625)])?_0x487caf[_0xddfb49(0x3a7)]:'u8'),_0x243dbf=_0x487caf[_0xddfb49(0x3fe)](_0x49d639,_0x25bc74+_0x3e8859+_0x55de0f['activ'+'e'],'u8');if(_0x487caf[_0xddfb49(0x3cd)](_0x159c36,_0x5f480f)||_0x9dba4a===_0x1472ba||_0x58d853===_0x5148c0||_0x243dbf===_0x2dc762)return null;_0x159c36&=0x2168+0x2500+-0x4569,_0x9dba4a|=-0x810+-0x26d8+-0x9e*-0x4c,_0x4fccb4=_0x487caf['kYJgy'](_0x4fccb4||0x1*0x10eb+0x38*-0x7f+0xadd,0x139*-0x1+-0xd89+0xec3),_0x243dbf&=-0x1625+-0x1c9*-0xb+0x283;var _0x56a083;if(_0xd58917==='obfF')_0x56a083=_0x214a87(_0x487caf[_0xddfb49(0x482)](_0x9dba4a,_0x159c36));else{if(_0x487caf[_0xddfb49(0x535)](_0xfd353f,_0x487caf[_0xddfb49(0x625)]))_0x56a083=_0x9dba4a^_0x159c36|0x3*-0x86b+-0x697*-0x5+-0x7b2;else _0x56a083=_0x487caf[_0xddfb49(0x26c)](_0x9dba4a^_0x159c36,-0x1*-0x2126+0x13d8+-0x1155*0x3)!==-0x2019+-0x1*0x1127+0x1*0x3140?0x2*-0x98e+-0x1*-0x1dff+-0xae2:-0x4a*0x45+-0x1357*-0x1+0x9b;}return{'real':_0x56a083,'fake':_0x58d853,'act':_0x243dbf,'init':_0x4fccb4,'key':_0x159c36,'hidden':_0x9dba4a};}else _0x5e8831['textC'+'onten'+'t']=_0x42eb0f[_0xddfb49(0x432)]&&_0x42eb0f['diff'][_0xddfb49(0x220)+'h']?_0xddfb49(0x5ae)+_0xddfb49(0x530)+_0xddfb49(0x386)+_0xddfb49(0x525)+_0x42eb0f['diff'][_0xddfb49(0x271)](',\x20'):_0xddfb49(0x59b)+'ice\x20w'+_0xddfb49(0x652)+'walki'+_0xddfb49(0x684)+'sprin'+'ting\x20'+_0xddfb49(0x6bb)+_0xddfb49(0x56d)+'marks'+_0xddfb49(0x4dc)+_0xddfb49(0x3c2)+'ld\x20is'+_0xddfb49(0x4dc)+'h.';}if(_0x42eb0f['speed']&&_0x34928a){if(_0x27c645[_0xddfb49(0x1c9)]!==_0x27c645['WUEbV']){var _0x298b47=('3|2|0'+'|4|1')[_0xddfb49(0x5e8)]('|'),_0x1e92a9=0xe3b*0x1+0x2*0x136d+-0x3515;while(!![]){switch(_0x298b47[_0x1e92a9++]){case'0':_0x34928a[_0xddfb49(0x16c)][_0xddfb49(0x367)+'round']=_0x30cf52?_0x2424a5:_0x27c645['wDwvv'];continue;case'1':_0x4630d5&&_0x42eb0f[_0xddfb49(0x5cd)]['facto'+'r']&&(_0x4630d5['textC'+'onten'+'t']=_0x27c645[_0xddfb49(0x1ad)](Number,_0x42eb0f[_0xddfb49(0x5cd)][_0xddfb49(0x4cb)+'r'])[_0xddfb49(0x4ca)+'ed'](0x4f9*-0x5+0x1ae9+-0x20b)+'x');continue;case'2':_0x34928a[_0xddfb49(0x67a)+_0xddfb49(0x293)+'t']=_0x30cf52?'Speed'+_0xddfb49(0x58d):_0xddfb49(0x4b7)+'\x20off';continue;case'3':_0x30cf52=!!_0x42eb0f[_0xddfb49(0x5cd)]['on'];continue;case'4':_0x34928a[_0xddfb49(0x16c)][_0xddfb49(0x281)]=_0x30cf52?_0x27c645[_0xddfb49(0x674)]:'#f7ee'+'f5';continue;}break;}}else _0x18f052['uoFUQ'](_0x5ee803,![]),_0x32c2b7();}if(_0x47423d)try{_0x47423d['textC'+'onten'+'t']=_0x40cada(_0x42eb0f);}catch(_0x3d0d00){_0x47423d[_0xddfb49(0x67a)+_0xddfb49(0x293)+'t']=JSON[_0xddfb49(0x6fe)+_0xddfb49(0x4cd)](_0x42eb0f,null,-0xe38+0x8b*-0x3d+0x6*0x7e4);}console[_0xddfb49(0x1be)](_0xddfb49(0x181)+_0xddfb49(0x583)+'\x20Skil'+'lWarz'+_0xddfb49(0x47c)+'rt',_0x27c645['AFwYV']+_0x2424a5+(';font'+_0xddfb49(0x328)+_0xddfb49(0x719)+'0'),_0x42eb0f),console[_0xddfb49(0x1be)](_0x27c645[_0xddfb49(0x2f6)](_0x27c645['XnKQJ'](_0x27c645[_0xddfb49(0x553)](_0x27c645['DKOSS'](_0x243a88,'\x0a'),JSON['strin'+_0xddfb49(0x4cd)](_0x42eb0f,null,-0x1*0xb31+-0x1*0x25f+0xd91)),'\x0a'),_0x391ae8));}};return _0x462ff0['datas'+'et'][_0x34fc18(0x2c3)]='1',_0x462ff0['api']=_0x43cdde,_0x43cdde;}function _0x40cada(_0x2bf4c7){var _0x143d08=_0x1a1d69;if(_0x27c645[_0x143d08(0x42f)](_0x143d08(0x1ea),_0x27c645[_0x143d08(0x39b)])){var _0x507dbf=[];_0x507dbf[_0x143d08(0x1e7)](_0x27c645[_0x143d08(0x3d3)](_0x27c645[_0x143d08(0x642)](_0x27c645['ViVCS']+(_0x2bf4c7['host']||'?')+_0x27c645[_0x143d08(0x562)],Math[_0x143d08(0x628)](_0x27c645[_0x143d08(0x1fa)](_0x2bf4c7['elaps'+_0x143d08(0x3ff)]||-0x253a+-0x6d*-0x52+0x250,-0xb9f+0x736+0x851))),'s)')),_0x507dbf['push']('uwmk\x20'+'\x20\x20\x20\x20'+(_0x2bf4c7[_0x143d08(0x1bd)]?_0x143d08(0x744):'no')+_0x27c645[_0x143d08(0x39a)]+(_0x2bf4c7[_0x143d08(0x6c0)+'pCont'+_0x143d08(0x3c4)]?_0x143d08(0x744):'no')+('\x20\x20\x20ty'+_0x143d08(0x4a9))+(_0x27c645[_0x143d08(0x274)](_0x2bf4c7[_0x143d08(0x2cb)+_0x143d08(0x484)],null)?_0x2bf4c7[_0x143d08(0x2cb)+_0x143d08(0x484)]:'?')),_0x507dbf[_0x143d08(0x1e7)](_0x27c645[_0x143d08(0x15e)](_0x27c645[_0x143d08(0x282)]+_0x2bf4c7[_0x143d08(0x727)+'Appli'+'ed']+'/',_0x2bf4c7[_0x143d08(0x727)+_0x143d08(0x6b6)])+('\x20appl'+_0x143d08(0x37a))),_0x507dbf['push']('');var _0x46f559=_0x2bf4c7[_0x143d08(0x510)+_0x143d08(0x526)]||{},_0x11e403=Object[_0x143d08(0x403)](_0x46f559);!_0x11e403['lengt'+'h']&&(_0x507dbf['push'](_0x27c645[_0x143d08(0x419)]),_0x507dbf['push'](''),_0x507dbf[_0x143d08(0x1e7)](_0x143d08(0x330)+_0x143d08(0x28c)+_0x143d08(0x15a)+_0x143d08(0x723)+_0x143d08(0x3c0)+_0x143d08(0x66b)+_0x143d08(0x589)+'date('+');\x20no'+'thing'+'\x20capt'+'ured\x20'+_0x143d08(0x37c)),_0x507dbf[_0x143d08(0x1e7)]('no\x20Up'+'date\x20'+'ran\x20y'+_0x143d08(0x4c1)+'r\x20the'+_0x143d08(0x1dc)+_0x143d08(0x599)+_0x143d08(0x1fc)+_0x143d08(0x1bf)+_0x143d08(0x42a)));for(var _0x525245=-0x2d*0x7d+0x2684+-0x108b;_0x525245<_0x11e403['lengt'+'h'];_0x525245++){var _0x35e221=_0x11e403[_0x525245];_0x507dbf[_0x143d08(0x1e7)](_0x27c645['oNWOI'](_0x35e221,_0x27c645[_0x143d08(0x4bf)])+_0x46f559[_0x35e221]);}_0x507dbf['push']('');var _0x38623e=_0x2bf4c7['surve'+'y']||{},_0x2af1a3=Object[_0x143d08(0x403)](_0x38623e);for(var _0xc4a48d=0x1cb2*0x1+0x1a6+-0x1e58;_0x27c645[_0x143d08(0x4d6)](_0xc4a48d,_0x2af1a3['lengt'+'h']);_0xc4a48d++){if(_0x27c645[_0x143d08(0x66f)]===_0x27c645[_0x143d08(0x66f)]){var _0x138e45=_0x2af1a3[_0xc4a48d],_0x4464fa=_0x38623e[_0x138e45];if(!_0x4464fa||!_0x4464fa[_0x143d08(0x220)+'h'])continue;_0x507dbf[_0x143d08(0x1e7)]('──\x20'+_0x138e45+'\x20'+new Array(Math['max'](-0x1*-0x230e+-0x10a2+-0x126b,-0xa87+0x9e*-0x39+0x2dd7-_0x138e45[_0x143d08(0x220)+'h']))['join']('─')),_0x507dbf[_0x143d08(0x1e7)](_0x27c645[_0x143d08(0x733)]);for(var _0x5242f4=0x222e+0xc92*0x1+-0x11*0x2c0;_0x27c645['kFbOh'](_0x5242f4,_0x4464fa['lengt'+'h']);_0x5242f4++){if(_0x27c645['RaAtz'](_0x27c645[_0x143d08(0x2d9)],_0x143d08(0x32c)))_0x45c093[_0x143d08(0x467)+'omman'+'d'](_0x27c645['JHsnM']),_0x3b6797();else{var _0x1f541b=_0x4464fa[_0x5242f4],_0x1d4568=_0x27c645['RvEGv'](typeof _0x1f541b['v'],_0x27c645['gEHco'])?Math[_0x143d08(0x628)](_0x1f541b['v']*(0x1685+-0x214b+0xeae*0x1))/(-0x1*0x1283+0x1*0x2645+-0x2*0x7ed):_0x1f541b['v'];_0x507dbf['push'](_0x27c645[_0x143d08(0x2ba)](_0x27c645['oNWOI']('\x20\x20'+('0x'+_0x1f541b['o']['toStr'+'ing'](-0x743*-0x1+0x14*0x174+-0x2443))[_0x143d08(0x27c)+'d'](0x1d69+0x7d8+0x1*-0x2539)+'\x20',_0x1f541b['k'][_0x143d08(0x27c)+'d'](-0xe53+0x87e*-0x4+0x10d*0x2e)),'\x20')+_0x27c645[_0x143d08(0x213)](String,_0x1d4568)[_0x143d08(0x27c)+'d'](-0xd41+0xc7d*-0x1+0x9*0x2de)+'\x20'+(_0x1f541b['raw']||''));}}_0x507dbf['push']('');}else{if(_0x29e168[_0x143d08(0x44e)]===_0x143d08(0x4cc)){_0x319298()['set']({'host':_0x1a9618['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x3f6e4d['kind']==='repor'+'t')_0x357c85()[_0x143d08(0x3f4)](_0x1c1add[_0x143d08(0x603)+'t']);}}if(_0x2bf4c7[_0x143d08(0x550)+_0x143d08(0x30e)]&&_0x2bf4c7['warni'+_0x143d08(0x30e)][_0x143d08(0x220)+'h']){_0x507dbf[_0x143d08(0x1e7)](_0x27c645[_0x143d08(0x2b2)]);for(var _0x177af7=-0x5f+0x214e+-0x20ef;_0x177af7<_0x2bf4c7['warni'+_0x143d08(0x30e)][_0x143d08(0x220)+'h'];_0x177af7++)_0x507dbf['push'](_0x143d08(0x324)+_0x2bf4c7[_0x143d08(0x550)+_0x143d08(0x30e)][_0x177af7]);}return _0x507dbf[_0x143d08(0x271)]('\x0a');}else{if(_0x20a488===_0x143d08(0x440))return _0x27c645[_0x143d08(0x1bb)](_0x155cd0,_0x27c645[_0x143d08(0x313)](_0x5b16d1,_0x1740d1));if(_0x4fe712===_0x27c645['nodGK'])return _0x27c645[_0x143d08(0x2d4)](_0x443b31^_0x529782,-0x56c+0x6c2*-0x1+0xc2e);return(_0x27c645[_0x143d08(0x710)](_0x22cb39,_0x1b206c)&-0xd57+0x9*0x89+0x985)!==-0x5f6+0x268*-0xf+-0x602*-0x7?-0x4a*0x6b+-0x2f*-0x91+0x450:-0x21c6+-0x258*0xd+0x403e;}}window['addEv'+'entLi'+_0x1a1d69(0x3d4)+'r']('messa'+'ge',function(_0x1c5403){var _0x2c142c=_0x1a1d69;if(_0x2c142c(0x182)===_0x2c142c(0x454)){_0x48f49a['ok']++;switch(_0xc2bf80){case'u8':return _0x3ca55b[_0x2c142c(0x20a)+_0x2c142c(0x2e7)](_0x30c1b4);case'i8':return _0x2cd3cf[_0x2c142c(0x1f7)+'t8'](_0x2bad52);case _0x27c645[_0x2c142c(0x56c)]:return _0x5d53a8['getIn'+_0x2c142c(0x68c)](_0x3a010a,!![]);case'u16':return _0xf22712['getUi'+'nt16'](_0x1bd95c,!![]);case _0x27c645['AsKta']:return _0x40dc45[_0x2c142c(0x1f7)+_0x2c142c(0x646)](_0x3b65b4,!![]);case _0x27c645['VtbAo']:return _0x39e2c1[_0x2c142c(0x20a)+_0x2c142c(0x6c6)](_0x8df50,!![]);case _0x27c645[_0x2c142c(0x662)]:return _0x35f4eb[_0x2c142c(0x5a1)+_0x2c142c(0x35c)](_0x504ebf,!![]);case _0x27c645['tGURe']:return _0x2a6bef['getFl'+_0x2c142c(0x1fb)](_0x4d04f7,!![]);case'v2':case'v3':case'v4':return _0xdb3769['getFl'+_0x2c142c(0x35c)](_0x10c2f4,!![]);default:return _0x461e47[_0x2c142c(0x1f7)+'t32'](_0x58a156,!![]);}}else{var _0x3acae3=_0x1c5403[_0x2c142c(0x6b9)];if(!_0x3acae3||_0x3acae3[_0x2c142c(0x45b)+_0x2c142c(0x40e)]!==_0x4f9cf8)return;try{if(_0x27c645[_0x2c142c(0x5cc)](_0x3acae3['kind'],_0x2c142c(0x4cc))){_0x27c645[_0x2c142c(0x2c9)](_0x5c240d)['set']({'host':_0x3acae3[_0x2c142c(0x542)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x3acae3['kind']===_0x27c645[_0x2c142c(0x6c2)])_0x27c645[_0x2c142c(0x2c9)](_0x5c240d)['set'](_0x3acae3[_0x2c142c(0x603)+'t']);}catch(_0x518d8a){console['warn']('%c[sa'+_0x2c142c(0x583)+_0x2c142c(0x416)+'l\x20upd'+_0x2c142c(0x20e)+_0x2c142c(0x29a),_0x2c142c(0x281)+':'+_0x2424a5,_0x518d8a);}}});function _0x513420(){var _0x5b828c=_0x1a1d69,_0x1e791e={'yPIoD':_0x27c645[_0x5b828c(0x6c2)],'Nbvuf':function(_0x215597){return _0x27c645['WCJjp'](_0x215597);}};if(_0x5b828c(0x6a7)!==_0x27c645[_0x5b828c(0x5c0)]){_0x3d042b[_0x5b828c(0x67a)+_0x5b828c(0x293)+'t']='v'+(_0x4a447c[_0x5b828c(0x668)+'on']||'?');var _0x113b19=_0x417bcb,_0x1f34f3=_0x22828c['versi'+'on']||'';_0x58e56e[_0x5b828c(0x16c)]['color']=_0x1f34f3===_0x113b19?_0x5e36d3:_0x5b828c(0x673)+'74',_0x2b4f4c[_0x5b828c(0x16c)][_0x5b828c(0x1d0)+_0x5b828c(0x746)+'r']=_0x1f34f3===_0x113b19?_0x5b828c(0x298)+_0x5b828c(0x580)+_0x5b828c(0x215)+'7,.35'+')':'#ff6e'+'74';}else{if(_0x27c645[_0x5b828c(0x58a)](_0xda6da8)){if(_0x27c645['lxpbH']('AadXR',_0x27c645[_0x5b828c(0x645)])){_0x27c645[_0x5b828c(0x693)](_0x18df90,!![]);return;}else{_0x70859b=_0x342790,_0x1f80bc=[],_0x2418fb(_0x1e791e['yPIoD'],{'report':_0x1e791e[_0x5b828c(0x1ae)](_0x424535)});return;}}_0x27c645['wvnyb'](_0x5c240d);}}if(document[_0x1a1d69(0x42e)])_0x513420();else document[_0x1a1d69(0x488)+_0x1a1d69(0x44b)+_0x1a1d69(0x3d4)+'r'](_0x27c645[_0x1a1d69(0x68d)],_0x513420,{'once':!![]});return;}window[_0x1a1d69(0x224)+_0x1a1d69(0x73b)+_0x1a1d69(0x246)]=window[_0x1a1d69(0x224)+_0x1a1d69(0x73b)+_0x1a1d69(0x246)]||{'at':Date['now']()};function _0xdd3255(_0x54dabc,_0x8ff3ae){var _0x12cdff=_0x1a1d69,_0x3999c4={'__sakura':_0x4f9cf8,'kind':_0x54dabc};if(_0x8ff3ae){for(var _0x505076 in _0x8ff3ae)_0x3999c4[_0x505076]=_0x8ff3ae[_0x505076];}try{if(_0x27c645['SLaSj'](_0x12cdff(0x39d),_0x12cdff(0x306))){if(window[_0x12cdff(0x741)+'t']&&window['paren'+'t']!==window)window['paren'+'t']['postM'+_0x12cdff(0x190)+'e'](_0x3999c4,'*');}else _0x3633c6['defin'+_0x12cdff(0x20f)+_0x12cdff(0x424)](_0x3ca313,_0x27c645[_0x12cdff(0x556)],{'value':_0x3c3100['name'],'configurable':!![]});}catch(_0x4966cf){}try{if(window['top']&&window[_0x12cdff(0x362)]!==window)window['top']['postM'+'essag'+'e'](_0x3999c4,'*');}catch(_0x3485f7){}}console['log'](_0x27c645[_0x1a1d69(0x5f2)](_0x27c645[_0x1a1d69(0x6ad)],_0x151742),_0x27c645[_0x1a1d69(0x183)]('color'+':'+_0x2424a5,_0x1a1d69(0x2cc)+_0x1a1d69(0x328)+_0x1a1d69(0x719)+_0x1a1d69(0x632)+'t-siz'+_0x1a1d69(0x6ff)+'x'),{'host':_0x584430,'href':location['href'],'version':_0x151742}),_0x27c645[_0x1a1d69(0x713)](_0xdd3255,_0x27c645['UyRqi'],{'host':_0x584430,'role':_0x73e1ab});var _0x3439fb=window[_0x1a1d69(0x224)+'URA_S'+'W__']&&window[_0x1a1d69(0x224)+'URA_S'+'W__']['at']||Date[_0x1a1d69(0x316)]();window['addEv'+'entLi'+'stene'+'r'](_0x1a1d69(0x6fa)+'ge',function(_0x205c1a){var _0x10e3ee=_0x1a1d69;try{if(_0x27c645['CRaDM']!==_0x10e3ee(0x435))try{_0x2d1725['hook']['enabl'+'ed']=![];}catch(_0x53b091){}else{var _0x3e797a=_0x205c1a&&_0x205c1a[_0x10e3ee(0x6b9)];if(!_0x3e797a||_0x3e797a['__sak'+'ura']!==_0x4f9cf8||_0x3e797a[_0x10e3ee(0x44e)]!==_0x27c645[_0x10e3ee(0x4f7)])return;_0x2516f9(_0x3e797a[_0x10e3ee(0x618)],_0x3e797a[_0x10e3ee(0x63b)]);}}catch(_0xc723ce){}});try{var _0x56911f=new BroadcastChannel(_0x27c645[_0x1a1d69(0x2ed)]);_0x56911f['onmes'+_0x1a1d69(0x718)]=function(_0x3d003f){var _0x3c50b4=_0x1a1d69,_0x34fac5=_0x3d003f['data'];if(_0x34fac5&&_0x34fac5['__sak'+_0x3c50b4(0x40e)]===_0x4f9cf8&&_0x34fac5[_0x3c50b4(0x44e)]===_0x3c50b4(0x618))_0x2516f9(_0x34fac5[_0x3c50b4(0x618)],_0x34fac5[_0x3c50b4(0x63b)]);};}catch(_0x58ce5f){}var _0x4b3186=[];(function _0x40d207(){var _0x50ac08=_0x1a1d69,_0x362257={'Bgvik':_0x27c645[_0x50ac08(0x413)]},_0x4a1ef4=[_0x50ac08(0x1be),_0x50ac08(0x23b),_0x27c645[_0x50ac08(0x18f)],_0x27c645[_0x50ac08(0x1ff)],_0x50ac08(0x654)];for(var _0x54c476=-0x13*-0x23+0xbf5*-0x1+-0x2*-0x4ae;_0x27c645['AWgYt'](_0x54c476,_0x4a1ef4['lengt'+'h']);_0x54c476++){(function(_0x8a9f80){var _0x1fd8dd=_0x50ac08,_0x55bcb5=console[_0x8a9f80];if(typeof _0x55bcb5!==_0x27c645[_0x1fd8dd(0x590)])return;console[_0x8a9f80]=function(){var _0xccfda9=_0x1fd8dd;try{var _0x529ea0='';for(var _0x1db0ef=-0x1994+-0x1d*-0x5f+-0x1*-0xed1;_0x1db0ef<arguments[_0xccfda9(0x220)+'h'];_0x1db0ef++){if('zkywh'!=='zkywh'){if(_0x350b2b[_0xccfda9(0x741)+'t']&&_0x4d8c5f['paren'+'t']!==_0x46fab4)_0x31fbfb[_0xccfda9(0x741)+'t']['postM'+_0xccfda9(0x190)+'e'](_0x2149ef,'*');}else{var _0x54812f=arguments[_0x1db0ef];if(typeof _0x54812f===_0xccfda9(0x6fe)+'g')_0x529ea0+=_0x54812f;else{if(_0x54812f&&_0x54812f['messa'+'ge'])_0x529ea0+=_0x54812f['messa'+'ge'];}}}if(_0x529ea0['index'+'Of'](_0x243a88)!==-(0x2585+0x1*-0x23de+0x2*-0xd3))return _0x55bcb5[_0xccfda9(0x2c0)](console,arguments);if(_0x529ea0[_0xccfda9(0x747)+'Of'](_0x362257[_0xccfda9(0x36a)])!==-(0x224*0x8+0x823*-0x1+-0x8fc)){var _0x575f6b=_0x529ea0['slice'](0x30d*0x6+0x5d2+-0x1820,-0xf2f*0x1+-0x9b*-0x5+0xd54);if(_0x4b3186['index'+'Of'](_0x575f6b)===-(-0x1d5b+0x1a5b+0x301*0x1)&&_0x4b3186[_0xccfda9(0x220)+'h']<-0x4*-0x99f+0x1*0x1b8+-0x13fc*0x2)_0x4b3186[_0xccfda9(0x1e7)](_0x575f6b);}}catch(_0x26f602){}return _0x55bcb5[_0xccfda9(0x2c0)](console,arguments);};}(_0x4a1ef4[_0x54c476]));}}());var _0x4f1617={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x22cc59=null,_0x39fbb5=null,_0x46ad92=-(-0xe71+-0x128b*-0x1+-0x419),_0xd0e42e=null;function _0x33abd0(_0x154518){var _0x133e98=_0x1a1d69;if(_0x27c645[_0x133e98(0x55f)](_0x133e98(0x495),'fKCiK'))try{if(!_0x154518)return;var _0x2246b6=_0x154518['insta'+_0x133e98(0x59e)]?_0x154518['insta'+'nce']['expor'+'ts']:_0x154518[_0x133e98(0x706)+'ts']||null;if(!_0x2246b6)return;if(!_0xd0e42e){if(_0x27c645[_0x133e98(0x2de)]!==_0x27c645[_0x133e98(0x2de)])try{_0x1c82eb['close']();}catch(_0x1dd4d2){}else try{_0xd0e42e=Object['keys'](_0x2246b6)['slice'](0xb3d+-0xfa2+0x465,-0x9*-0x183+0x1f*0x63+-0x330*0x8);}catch(_0x12494e){}}var _0x5449b3=_0x2246b6[_0x133e98(0x648)+'y'];_0x5449b3&&_0x5449b3[_0x133e98(0x2fc)+'r']&&_0x27c645[_0x133e98(0x1de)](_0x5449b3['buffe'+'r'][_0x133e98(0x3c3)+_0x133e98(0x2ef)],-0xdaa+0x2*-0x3b9+-0x1c*-0xc1)&&(_0x39fbb5=_0x5449b3,_0x46ad92=_0x27c645[_0x133e98(0x660)](Date['now'](),_0x3439fb));}catch(_0x4eb673){}else _0x3a784e=_0x5a3140,_0x4d392d=_0x28ce38['now']()-_0x10b014;}function _0x3a5511(){var _0x4b391b=_0x1a1d69,_0x1d5015={'kqkXK':_0x4b391b(0x2ac)+_0x4b391b(0x5d8),'oewDa':function(_0x21d81f,_0x3d8310){return _0x21d81f===_0x3d8310;},'BDXsI':function(_0x32ec54){var _0x160f0a=_0x4b391b;return _0x27c645[_0x160f0a(0x4c7)](_0x32ec54);},'saubM':function(_0x401cca,_0x172513){var _0x57ea1f=_0x4b391b;return _0x27c645[_0x57ea1f(0x709)](_0x401cca,_0x172513);}};if(_0x27c645[_0x4b391b(0x57a)](_0x27c645['YLQJC'],_0x4b391b(0x465)))try{if(_0x27c645[_0x4b391b(0x483)]==='RaQHK'){var _0x1c8e9f=_0x2f6ae4();if(!_0x1c8e9f)return null;if(_0x295430<0x215+-0x227d+0x2068||_0x27c645[_0x4b391b(0x145)](_0x38dad8+_0x5ce50c*(-0x1be7+0x7a9+0x1442),_0x1c8e9f[_0x4b391b(0x3c3)+'ength']))return null;var _0x48db2d=[];for(var _0x1c6836=0x63a+0x1*0x1367+-0xf3*0x1b;_0x1c6836<_0x4e6b55;_0x1c6836++)_0x48db2d['push'](_0x1c8e9f[_0x4b391b(0x5a1)+_0x4b391b(0x35c)](_0x27c645['hhhru'](_0x27c645[_0x4b391b(0x50c)](_0x32a354,_0x2960d9),_0x27c645[_0x4b391b(0x469)](_0x1c6836,0x2223*-0x1+-0xdc5+0x2fec)),!![]));return _0x56414e['ok']+=_0x188d94,_0x48db2d;}else{if(typeof WebAssembly==='undef'+'ined')return;var _0x478558=[_0x4b391b(0x510)+_0x4b391b(0x301)+'e',_0x27c645['rMssV']];for(var _0x25a4e9=-0x55d*0x6+-0xd21*-0x1+0x130d*0x1;_0x25a4e9<_0x478558[_0x4b391b(0x220)+'h'];_0x25a4e9++){(function(_0x1f0045){var _0x4a08d6=_0x4b391b,_0x389bd4={'LilQM':_0x27c645[_0x4a08d6(0x56f)]};if(_0x27c645['rKbql']('PvWKy','PvWKy')){var _0x7d3413=_0x3bf829[_0x17e7ce];_0x59840c[_0x4a08d6(0x1e7)](_0x7d3413+'\x20@\x20'+_0x49d587[_0x7d3413]);}else{var _0x594d5e=WebAssembly[_0x1f0045];if(typeof _0x594d5e!==_0x27c645['rVava']||_0x594d5e[_0x4a08d6(0x45b)+_0x4a08d6(0x3e5)+_0x4a08d6(0x62c)+'ap'])return;var _0x30e19f=function(){var _0x3b8e7a=_0x4a08d6;if(_0x3b8e7a(0x4a7)===_0x3b8e7a(0x59c))_0x1bcfed['warni'+'ngs'][_0x3b8e7a(0x1e7)](_0x389bd4['LilQM']+(_0x3b8e7a(0x6a0)+_0x3b8e7a(0x5dd)+'\x20are\x20'+_0x3b8e7a(0x34d)+'n\x20a\x20r'+'ound,'+'\x20or\x20t'+_0x3b8e7a(0x27f)+_0x3b8e7a(0x70d)+_0x3b8e7a(0x409)+_0x3b8e7a(0x43c)+_0x3b8e7a(0x742)+'verlo'+'ad.'));else{var _0xeb244f=_0x594d5e[_0x3b8e7a(0x2c0)](this,arguments);try{if(_0xeb244f&&typeof _0xeb244f['then']===_0x1d5015[_0x3b8e7a(0x17d)])_0xeb244f['then'](_0x33abd0,function(){});else _0x33abd0(_0xeb244f);}catch(_0x32a05a){}return _0xeb244f;}};_0x30e19f[_0x4a08d6(0x45b)+_0x4a08d6(0x3e5)+_0x4a08d6(0x62c)+'ap']=!![];try{if(_0x27c645[_0x4a08d6(0x55b)](_0x4a08d6(0x206),_0x27c645[_0x4a08d6(0x18a)])){var _0x17131b=arguments[_0x4b384e];if(_0x1d5015['oewDa'](typeof _0x17131b,_0x4a08d6(0x6fe)+'g'))_0xb4e7d2+=_0x17131b;else{if(_0x17131b&&_0x17131b[_0x4a08d6(0x6fa)+'ge'])_0x1edd48+=_0x17131b[_0x4a08d6(0x6fa)+'ge'];}}else Object[_0x4a08d6(0x2a0)+_0x4a08d6(0x20f)+'erty'](_0x30e19f,_0x27c645[_0x4a08d6(0x556)],{'value':_0x594d5e[_0x4a08d6(0x2ad)],'configurable':!![]});}catch(_0x39710d){}WebAssembly[_0x1f0045]=_0x30e19f;}}(_0x478558[_0x25a4e9]));}}}catch(_0x4a1583){}else{if(!_0x504ddd['lengt'+'h'])try{_0x1d5015[_0x4b391b(0x400)](_0x3f1670);}catch(_0x4928f2){}_0x7d327b++,_0x5edaa4(_0x1d5015[_0x4b391b(0x400)](_0x54d482));if(!_0x491c30['lengt'+'h']&&_0x1d5015[_0x4b391b(0x176)](_0x147d8c,-0x1265*-0x1+-0x599*0x6+-0x1*-0x105d))_0x2f8bca(_0x264d33,-0x203f*0x1+-0x1401+-0x1f*-0x1f0);else{if(!_0x5d8f4a['keys'](_0x341fc9)['lengt'+'h']&&_0x152d4c<-0x1c9*-0x1+-0x2*-0xbcf+0x183b*-0x1)_0x582041(_0x502ce6,-0x116d+0xda1*0x1+0xb9c);else _0x261f81(_0x6a2e7b,0xaad+-0x2514+0x1f17);}}}var _0x2996a4=null,_0x4ab78b=null,_0xefb98f={},_0x12f761=[],_0x217e3d=[],_0xd344e=[{'type':_0x27c645['xVMkK'],'keep':!![]},{'type':_0x27c645[_0x1a1d69(0x64b)],'keep':!![]},{'type':_0x1a1d69(0x1c8)+'nMana'+'ger','keep':![]},{'type':'TDM_G'+'ameMa'+_0x1a1d69(0x626),'keep':!![]},{'type':_0x27c645[_0x1a1d69(0x70c)],'keep':!![]},{'type':_0x27c645['VOOJq'],'keep':!![],'many':!![]},{'type':_0x27c645['wWPWX'],'keep':!![],'many':!![]}],_0x1e1e14=[_0x27c645[_0x1a1d69(0x634)],_0x1a1d69(0x31f)+'bly-C'+_0x1a1d69(0x322)+_0x1a1d69(0x336)+_0x1a1d69(0x541)+'.dll',_0x1a1d69(0x2d2)+'cofor'+_0x1a1d69(0x289)+'cal.d'+'ll',_0x27c645['wPugD'],'Scivo'+'loCha'+_0x1a1d69(0x36d)+'rCont'+_0x1a1d69(0x6f3)+'r.dll',_0x1a1d69(0x4aa)+_0x1a1d69(0x6cd)+'d'];(function _0x43d2b4(){var _0x27e961=_0x1a1d69;try{var _0x19037c=_0x27c645[_0x27e961(0x216)][_0x27e961(0x5e8)]('|'),_0x4cd3f6=0x17*0x16f+0x1*-0x2317+0x1*0x21e;while(!![]){switch(_0x19037c[_0x4cd3f6++]){case'0':_0x4f1617['memor'+'yTap']=!![];continue;case'1':_0x4f1617[_0x27e961(0x727)+'Regis'+'tered']=_0x12f761[_0x27e961(0x220)+'h'];continue;case'2':_0x4ab78b=_0x245705[_0x27e961(0x31d)+_0x27e961(0x38c)+'in']({'name':'sakur'+'a-ski'+_0x27e961(0x615)+'z','version':_0x151742,'referencedAssemblies':_0x1e1e14[_0x27e961(0x2fa)]()});continue;case'3':_0x4f1617[_0x27e961(0x2a9)+_0x27e961(0x6b4)]=!![];continue;case'4':if(!_0x245705||typeof _0x245705['creat'+'ePlug'+'in']!==_0x27e961(0x2ac)+'ion'){_0x4f1617['error']='Runti'+'me.cr'+_0x27e961(0x6c9)+'lugin'+_0x27e961(0x6b7)+_0x27e961(0x44f)+'le';return;}continue;case'5':_0x18edbc();continue;case'6':try{var _0x2fcf0b=window[_0x27e961(0x490)+'WebMo'+_0x27e961(0x649)]['Runti'+'me'];_0x2fcf0b[_0x27e961(0x45b)+_0x27e961(0x1f8)+'g']=_0x151742+':'+Math['rando'+'m']()[_0x27e961(0x48a)+'ing'](-0x1c12+-0x1*-0x17f3+-0x1*-0x443)[_0x27e961(0x2fa)](-0xb93+0x262a*-0x1+-0xf*-0x351,0xabf+0x306+-0x5*0x2bf),_0x22cc59=_0x2fcf0b[_0x27e961(0x45b)+_0x27e961(0x1f8)+'g'];}catch(_0x8a88a2){}continue;case'7':_0x4f1617['ok']=!![];continue;case'8':_0x3a5511();continue;case'9':var _0x245705=window[_0x27e961(0x490)+_0x27e961(0x586)+'dkit']&&window[_0x27e961(0x490)+_0x27e961(0x586)+_0x27e961(0x649)][_0x27e961(0x2a2)+'me'];continue;}break;}}catch(_0x51151e){_0x4f1617[_0x27e961(0x1e3)]=String(_0x51151e&&_0x51151e[_0x27e961(0x6fa)+'ge']||_0x51151e);}}());var _0x105e92=new Float32Array(-0x146*-0x7+0x223d+0x7*-0x62a),_0x51e4c3=new Int32Array(_0x105e92[_0x1a1d69(0x2fc)+'r']);function _0x120e14(_0x2048b8){return _0x105e92[0x2004+0x1323*0x1+-0x3327]=_0x2048b8,_0x51e4c3[0x7be*-0x5+-0x1e05+0x44bb];}function _0x34d4f2(_0x31c760){return _0x51e4c3[0x10af+0x1d3b+0x7a7*-0x6]=_0x31c760|-0xb14+0x1fe3+-0x7*0x2f9,_0x105e92[-0xcc0+-0x1*-0x1e61+-0x1*0x11a1];}var _0x3a73b0={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0xac6984(){var _0x3fdb68=_0x1a1d69,_0x531707={'UEcHy':function(_0x5f3de3,_0x4a9729){return _0x27c645['IxgOQ'](_0x5f3de3,_0x4a9729);},'PtQhW':_0x27c645[_0x3fdb68(0x4b4)]};if(_0x27c645[_0x3fdb68(0x331)]===_0x3fdb68(0x6ea))return _0x393ab9['query'+'Selec'+_0x3fdb68(0x448)](_0x531707[_0x3fdb68(0x478)](_0x3fdb68(0x332)+'-a=\x22',_0x1c87e5)+'\x22]');else{try{if(_0x3fdb68(0x6bc)!=='hmJab'){if(_0x4ab78b&&_0x4ab78b[_0x3fdb68(0x6e4)+_0x3fdb68(0x67b)]){if(_0x27c645['rkllF']===_0x27c645[_0x3fdb68(0x6d9)]){var _0x4a8ab4=_0x4ab78b['_runt'+'ime'];if(typeof _0x4a8ab4[_0x3fdb68(0x475)+_0x3fdb68(0x675)+'e']===_0x3fdb68(0x2ac)+_0x3fdb68(0x5d8)){var _0x1ccb25=_0x4a8ab4['resol'+_0x3fdb68(0x675)+'e']();if(_0x1ccb25)return'VTxQM'===_0x3fdb68(0x433)?(_0x3507c9['sourc'+'e']=_0x3fdb68(0x2a2)+'me.re'+_0x3fdb68(0x6a2)+_0x3fdb68(0x3b3)+')',_0x1ca454):(_0x3a73b0[_0x3fdb68(0x4fe)+'e']=_0x3fdb68(0x4d1)+_0x3fdb68(0x637)+_0x3fdb68(0x6b2)+'.reso'+_0x3fdb68(0x1ca)+'me()',_0x1ccb25);}if(_0x4a8ab4['_game'])return _0x3a73b0[_0x3fdb68(0x4fe)+'e']=_0x3fdb68(0x4d1)+'n._ru'+_0x3fdb68(0x6b2)+'._gam'+'e',_0x4a8ab4['_game'];}else{var _0x54c1e3=_0x274adb[_0x3fdb68(0x2c0)](this,arguments);try{if(_0x54c1e3&&_0x27c645[_0x3fdb68(0x5cc)](typeof _0x54c1e3[_0x3fdb68(0x5b4)],_0x3fdb68(0x2ac)+_0x3fdb68(0x5d8)))_0x54c1e3[_0x3fdb68(0x5b4)](_0x4e5de2,function(){});else _0x41e882(_0x54c1e3);}catch(_0x549942){}return _0x54c1e3;}}}else{var _0x59082d=_0x337e2e[_0x3fdb68(0x31d)+'eElem'+'ent'](_0x3fdb68(0x16c));_0x59082d['id']='sakur'+_0x3fdb68(0x19c)+'hud-c'+'ss',_0x59082d[_0x3fdb68(0x67a)+_0x3fdb68(0x293)+'t']=_0x531707['PtQhW'],(_0xa9b58c['head']||_0xafe009[_0x3fdb68(0x1b9)+_0x3fdb68(0x685)+'ement'])['appen'+'dChil'+'d'](_0x59082d);}}catch(_0x5d803e){}try{if(_0x27c645[_0x3fdb68(0x45a)](_0x27c645['bbVJr'],_0x3fdb68(0x5b9))){var _0x2fe4fd=window[_0x3fdb68(0x490)+'WebMo'+_0x3fdb68(0x649)]&&window[_0x3fdb68(0x490)+_0x3fdb68(0x586)+_0x3fdb68(0x649)]['Runti'+'me'];if(_0x2fe4fd&&_0x27c645[_0x3fdb68(0x57c)](typeof _0x2fe4fd[_0x3fdb68(0x475)+'veGam'+'e'],'funct'+'ion')){var _0x301460=_0x2fe4fd[_0x3fdb68(0x475)+'veGam'+'e']();if(_0x301460)return _0x3a73b0['sourc'+'e']=_0x27c645['Omdmr'],_0x301460;}if(_0x2fe4fd&&_0x2fe4fd[_0x3fdb68(0x707)])return _0x3a73b0[_0x3fdb68(0x4fe)+'e']='Runti'+'me._g'+'ame',_0x2fe4fd;}else try{if(_0x439f71[_0x2742e2]['conte'+_0x3fdb68(0x665)+_0x3fdb68(0x722)])_0x1e23f7[_0x16b451][_0x3fdb68(0x5ad)+_0x3fdb68(0x665)+'dow'][_0x3fdb68(0x294)+_0x3fdb68(0x190)+'e'](_0x262215,'*');}catch(_0x4e94e7){}}catch(_0x3362b4){}try{if(_0x27c645['DcJRi'](_0x3fdb68(0x401),_0x27c645[_0x3fdb68(0x244)])){var _0x436ad9=window[_0x3fdb68(0x1fd)+_0x3fdb68(0x738)+_0x3fdb68(0x59e)]||window[_0x3fdb68(0x1fd)+_0x3fdb68(0x339)]||window['game'];if(_0x436ad9)return _0x3a73b0[_0x3fdb68(0x4fe)+'e']='windo'+_0x3fdb68(0x3a3)+'bal',_0x436ad9;}else{var _0x36b7b2=_0x31cad3[_0x3fdb68(0x475)+_0x3fdb68(0x675)+'e']();if(_0x36b7b2)return _0x17e2c0[_0x3fdb68(0x4fe)+'e']='plugi'+_0x3fdb68(0x637)+_0x3fdb68(0x6b2)+'.reso'+'lveGa'+'me()',_0x36b7b2;}}catch(_0x3429ba){}try{if(_0x27c645[_0x3fdb68(0x5eb)](typeof game,_0x3fdb68(0x1ef)+_0x3fdb68(0x47a))&&game)return _0x3a73b0[_0x3fdb68(0x4fe)+'e']=_0x27c645[_0x3fdb68(0x221)],game;}catch(_0x23ade3){}try{var _0x1faf0c=Object['keys'](window);for(var _0xfe914c=0x1184+0x22*-0x60+-0x4c4;_0xfe914c<_0x1faf0c['lengt'+'h']&&_0xfe914c<0x1*0x3ab+0xd*-0x1b5+-0x1*-0x14de;_0xfe914c++){var _0x146a89=window[_0x1faf0c[_0xfe914c]];if(_0x146a89&&_0x27c645[_0x3fdb68(0x428)](typeof _0x146a89,_0x27c645[_0x3fdb68(0x163)])&&_0x146a89[_0x3fdb68(0x148)+'e']&&_0x146a89[_0x3fdb68(0x148)+'e'][_0x3fdb68(0x1c4)+'8']&&_0x146a89[_0x3fdb68(0x148)+'e'][_0x3fdb68(0x1c4)+'8']['buffe'+'r'])return _0x3a73b0[_0x3fdb68(0x4fe)+'e']='windo'+'w.'+_0x1faf0c[_0xfe914c]+('.Modu'+'le'),_0x146a89;}}catch(_0x448640){}return _0x3a73b0[_0x3fdb68(0x4fe)+'e']=null,null;}}function _0xb5645a(){var _0x1b88c8=_0x1a1d69,_0x52203a={'XCFfJ':function(_0x486248){var _0x519dad=_0x5e49;return _0x27c645[_0x519dad(0x534)](_0x486248);}};try{if(_0x39fbb5&&_0x39fbb5[_0x1b88c8(0x2fc)+'r']&&_0x39fbb5[_0x1b88c8(0x2fc)+'r'][_0x1b88c8(0x3c3)+_0x1b88c8(0x2ef)])return _0x3a73b0[_0x1b88c8(0x4fe)+'e']=_0x3a73b0[_0x1b88c8(0x4fe)+'e']||_0x27c645['qclsJ'],new Uint8Array(_0x39fbb5[_0x1b88c8(0x2fc)+'r']);}catch(_0x5b52e5){}try{if(_0x27c645[_0x1b88c8(0x55b)](_0x1b88c8(0x518),_0x1b88c8(0x518))){var _0x1731b8=_0x27c645[_0x1b88c8(0x18b)](_0xac6984);if(_0x1731b8&&_0x1731b8[_0x1b88c8(0x148)+'e']&&_0x1731b8[_0x1b88c8(0x148)+'e']['HEAPU'+'8']&&_0x1731b8[_0x1b88c8(0x148)+'e']['HEAPU'+'8'][_0x1b88c8(0x2fc)+'r'])return _0x1731b8[_0x1b88c8(0x148)+'e'][_0x1b88c8(0x1c4)+'8'];}else{var _0x161996=_0x52203a['XCFfJ'](_0x37a9c2);if(!_0x161996)return null;try{return new _0x4a3bf5(_0x161996['buffe'+'r'],_0x161996['byteO'+_0x1b88c8(0x576)],_0x161996[_0x1b88c8(0x3c3)+'ength']);}catch(_0x9247c0){return null;}}}catch(_0x4688b3){}return null;}function _0x338370(){var _0xfc716b=_0x1a1d69,_0x269198={'zDjOA':function(_0x318f9d,_0x3eed35){return _0x27c645['uxRVt'](_0x318f9d,_0x3eed35);},'qHDxo':_0xfc716b(0x748)+_0xfc716b(0x69e)+_0xfc716b(0x671)+'n\x20SEE'+'N\x20by\x20'+_0xfc716b(0x5fc)+_0xfc716b(0x380)+'apply'+_0xfc716b(0x2f8)+'\x20','vJNXH':'runs\x20'+_0xfc716b(0x22d)+_0xfc716b(0x71a)+_0xfc716b(0x6c3)+_0xfc716b(0x31f)+_0xfc716b(0x53f)+'nstan'+_0xfc716b(0x356)+'\x20and\x20'+_0xfc716b(0x60c)+_0xfc716b(0x1eb)+'plugi'+'n.hoo'+_0xfc716b(0x26e)+_0xfc716b(0x5e7)+'\x20','KTRcR':function(_0x4436ab,_0x2d1a2f){return _0x27c645['uxRVt'](_0x4436ab,_0x2d1a2f);},'kUkpH':_0xfc716b(0x53e)+_0xfc716b(0x475)+_0xfc716b(0x497),'NTANZ':_0xfc716b(0x748)+'(s)\x20t'+_0xfc716b(0x26a)+'able\x20'+'index'+_0xfc716b(0x24e)+'appli'+_0xfc716b(0x6a5)+'ne.\x20T'+_0xfc716b(0x368)+_0xfc716b(0x15f)+'re\x20','UIVKN':_0x27c645['doOtX']};if(_0x27c645['bkadZ'](_0x27c645[_0xfc716b(0x69b)],_0xfc716b(0x6cc))){var _0x512764=_0xb5645a();if(!_0x512764)return null;try{if(_0xfc716b(0x517)==='raWZS'){_0x306455(_0x36f066&&typeof _0x295976['on']==='boole'+'an'?_0x106647['on']:_0x241885['on'],_0x3e7817&&_0x27c645[_0xfc716b(0x2db)](typeof _0x3e09f7[_0xfc716b(0x4cb)+'r'],_0xfc716b(0x24b)+'r')?_0x108a2d[_0xfc716b(0x4cb)+'r']:_0x17cfe5[_0xfc716b(0x4cb)+'r']);return;}else return new DataView(_0x512764[_0xfc716b(0x2fc)+'r'],_0x512764[_0xfc716b(0x3a8)+_0xfc716b(0x576)],_0x512764[_0xfc716b(0x3c3)+_0xfc716b(0x2ef)]);}catch(_0x5cadf0){return null;}}else _0x27a93d[_0xfc716b(0x727)+_0xfc716b(0x49a)+_0xfc716b(0x47d)]===0x9d7+-0x95f*-0x2+0x1c95*-0x1?_0xe038f2[_0xfc716b(0x550)+_0xfc716b(0x30e)][_0xfc716b(0x1e7)](_0x269198[_0xfc716b(0x564)](_0x269198[_0xfc716b(0x564)](_0xfc716b(0x4b9),_0x3ce49e[_0xfc716b(0x727)+_0xfc716b(0x6b6)])+_0x269198['qHDxo']+_0x269198[_0xfc716b(0x46d)]+(_0xfc716b(0x71b)+_0xfc716b(0x33f)+_0xfc716b(0x270)+_0xfc716b(0x3f0)+'after'+_0xfc716b(0x377)+_0xfc716b(0x46e)+'nored'+_0xfc716b(0x49b)+'the\x20l'+'ife\x20o'+_0xfc716b(0x2c7)+_0xfc716b(0x536)+'.\x20')+(_0xfc716b(0x19d)+'tered'+'\x20'),_0x2667f1[_0xfc716b(0x727)+_0xfc716b(0x19d)+_0xfc716b(0x67d)+_0xfc716b(0x5ba)])+('\x20hook'+'(s)\x20d'+_0xfc716b(0x1c6)+_0xfc716b(0x6a6)+'ng\x20at'+_0xfc716b(0x486)+'ment-'+_0xfc716b(0x446)+'.')):_0x2970be['warni'+'ngs'][_0xfc716b(0x1e7)](_0x269198[_0xfc716b(0x4ef)](_0x269198['zDjOA'](_0x269198[_0xfc716b(0x564)](_0x269198['kUkpH']+_0x9ba7a3[_0xfc716b(0x727)+_0xfc716b(0x49a)+_0xfc716b(0x47d)],_0xfc716b(0x2af))+_0x45c830['hooks'+_0xfc716b(0x6b6)],_0x269198[_0xfc716b(0x721)]),_0x269198[_0xfc716b(0x4b1)]));}function _0x4907bc(_0xe71d6d,_0x296b63){var _0x4f3012=_0x1a1d69,_0x25b473={'HxPdA':function(_0x100e80,_0x51e056){return _0x27c645['hzLUC'](_0x100e80,_0x51e056);}},_0x11e68e=_0x27c645[_0x4f3012(0x6ec)](_0x338370);if(!_0x11e68e){if(_0x27c645[_0x4f3012(0x358)](_0x4f3012(0x4ed),_0x27c645[_0x4f3012(0x4cf)])){if(_0x405974[_0x4f3012(0x362)]&&_0x27c645['xMhMc'](_0x33336c[_0x4f3012(0x362)],_0x521711))_0x2daf96[_0x4f3012(0x362)][_0x4f3012(0x294)+'essag'+'e'](_0x45d846,'*');}else return _0x3a73b0['faile'+'d']++,_0x3a73b0[_0x4f3012(0x365)+_0x4f3012(0x157)]=_0x3a73b0['lastE'+_0x4f3012(0x157)]||_0x4f3012(0x4d7)+_0x4f3012(0x5e9)+_0x4f3012(0x698)+_0x4f3012(0x67c)+'stanc'+'e\x20not'+'\x20reac'+_0x4f3012(0x3df)+'\x20via\x20'+'Runti'+'me.re'+'solve'+'Game('+_0x4f3012(0x3c1)+'any\x20w'+_0x4f3012(0x325)+_0x4f3012(0x214)+'al',undefined;}if(_0xe71d6d<-0xd*0x1fc+0x19a3*-0x1+0xd1*0x3f||_0xe71d6d+(-0x3fa+0x6b*0x5+-0x1*-0x1e7)>_0x11e68e['byteL'+'ength']){if(_0x27c645[_0x4f3012(0x45a)]('LmdRB',_0x4f3012(0x6c7))){var _0x2bfb12=_0x27bad7[_0x4f3012(0x2fa)](0x1128+0x2*-0x30e+-0xb0c,0x4*0x3af+0x1f7c+-0x2d0c);if(_0x59f9e5[_0x4f3012(0x747)+'Of'](_0x2bfb12)===-(-0x96c+-0x42*-0x38+0x503*-0x1)&&_0x25b473[_0x4f3012(0x184)](_0x2b9c2a[_0x4f3012(0x220)+'h'],0x1*-0x58e+-0x21b9+0x2783))_0x15178b[_0x4f3012(0x1e7)](_0x2bfb12);}else return _0x3a73b0[_0x4f3012(0x210)+'d']++,_0x3a73b0['lastE'+_0x4f3012(0x157)]=_0x3a73b0['lastE'+'rror']||_0x27c645[_0x4f3012(0x61b)](_0x27c645['oFAgk'](_0x27c645[_0x4f3012(0x41d)],_0xe71d6d[_0x4f3012(0x48a)+'ing'](-0xc37+-0x267*0x2+0x1115))+(_0x4f3012(0x1a3)+_0x4f3012(0x468)+'\x20end\x20'+'0x'),_0x11e68e[_0x4f3012(0x3c3)+_0x4f3012(0x2ef)]['toStr'+'ing'](-0x39*-0x22+-0x1faf+-0x182d*-0x1)),undefined;}try{if('XhObM'!==_0x27c645[_0x4f3012(0x6ce)])_0x185ca6[_0x4f3012(0x2e4)]();else{_0x3a73b0['ok']++;switch(_0x296b63){case'u8':return _0x11e68e[_0x4f3012(0x20a)+_0x4f3012(0x2e7)](_0xe71d6d);case'i8':return _0x11e68e['getIn'+'t8'](_0xe71d6d);case _0x27c645['DNyKy']:return _0x11e68e['getIn'+_0x4f3012(0x68c)](_0xe71d6d,!![]);case _0x4f3012(0x1c7):return _0x11e68e['getUi'+_0x4f3012(0x624)](_0xe71d6d,!![]);case'i32':return _0x11e68e[_0x4f3012(0x1f7)+'t32'](_0xe71d6d,!![]);case _0x27c645[_0x4f3012(0x658)]:return _0x11e68e[_0x4f3012(0x20a)+'nt32'](_0xe71d6d,!![]);case _0x4f3012(0x3ce):return _0x11e68e[_0x4f3012(0x5a1)+_0x4f3012(0x35c)](_0xe71d6d,!![]);case _0x4f3012(0x197):return _0x11e68e['getFl'+'oat64'](_0xe71d6d,!![]);case'v2':case'v3':case'v4':return _0x11e68e[_0x4f3012(0x5a1)+'oat32'](_0xe71d6d,!![]);default:return _0x11e68e[_0x4f3012(0x1f7)+_0x4f3012(0x646)](_0xe71d6d,!![]);}}}catch(_0x1202cd){return _0x27c645[_0x4f3012(0x4c8)](_0x27c645[_0x4f3012(0x6dd)],_0x4f3012(0x614))?null:(_0x3a73b0[_0x4f3012(0x210)+'d']++,_0x3a73b0[_0x4f3012(0x365)+_0x4f3012(0x157)]=_0x3a73b0['lastE'+'rror']||String(_0x1202cd&&_0x1202cd[_0x4f3012(0x6fa)+'ge']||_0x1202cd)[_0x4f3012(0x2fa)](0x2081+0x1edf+-0x8*0x7ec,0x789*0x3+0x20d2+-0x36f5),undefined);}}function _0xb91373(_0x3479b1,_0x2f5e7e,_0x501fea){var _0x46b8ef=_0x1a1d69,_0x44de05=_0x27c645[_0x46b8ef(0x4c7)](_0x338370);if(!_0x44de05||_0x3479b1<-0x1aea+0x127f+0x1*0x86b||_0x27c645['XolMq'](_0x3479b1,-0x50+-0x126f+-0x12c3*-0x1)>_0x44de05['byteL'+'ength'])return![];try{if(_0x27c645['ZSRcY']!==_0x46b8ef(0x14d))return _0x14b834[0x23de+-0xe0a+-0x15d3]===_0x46b8ef(0x3ce);else{switch(_0x2f5e7e){case'u8':case'i8':_0x44de05['setUi'+_0x46b8ef(0x2e7)](_0x3479b1,_0x501fea&-0x1*-0x68c+-0x1*-0xa42+0x1*-0xfcf);break;case _0x27c645[_0x46b8ef(0x56c)]:case _0x27c645['DDtRx']:_0x44de05[_0x46b8ef(0x4bb)+_0x46b8ef(0x68c)](_0x3479b1,_0x27c645[_0x46b8ef(0x340)](_0x501fea,-0x7b*-0x48+0x1*-0x1261+-0x1037),!![]);break;case'i32':case _0x46b8ef(0x15b):_0x44de05[_0x46b8ef(0x4bb)+'t32'](_0x3479b1,_0x501fea|-0x56f+0x1*-0x8b4+-0x149*-0xb,!![]);break;case'f32':_0x44de05[_0x46b8ef(0x4dd)+_0x46b8ef(0x35c)](_0x3479b1,_0x501fea,!![]);break;default:_0x44de05[_0x46b8ef(0x4bb)+'t32'](_0x3479b1,_0x27c645[_0x46b8ef(0x340)](_0x501fea,-0x65b*0x4+-0xbe+-0x18a*-0x11),!![]);}return!![];}}catch(_0x5a4871){return![];}}var _0x5c2004={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':'i32'},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':_0x1a1d69(0x450)},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0xa55102(_0x3b89a6){var _0x5e79f9=_0x1a1d69,_0x2e0307={'JXZvI':_0x27c645[_0x5e79f9(0x17f)],'zPHqu':_0x5e79f9(0x672)},_0x213278='';for(var _0x4bd8c2=-0x11*-0x101+0x294+-0x13a5;_0x4bd8c2<_0x3b89a6['lengt'+'h'];_0x4bd8c2++){if(_0x5e79f9(0x384)!=='DGMGT'){var _0x22b500=_0x3b89a6[_0x4bd8c2]['toStr'+'ing'](0x1b*-0x17+-0x1e*-0xe7+0x7*-0x383);_0x213278+=(_0x22b500[_0x5e79f9(0x220)+'h']<0x59d*0x2+-0x23f*0x1+-0x8f9?'0':'')+_0x22b500;}else{if(!_0x4b6dbc)return;var _0x5cd4ac=_0x351adf[_0x5e79f9(0x16c)]['displ'+'ay']===_0x5e79f9(0x363);_0x51a599['style'][_0x5e79f9(0x36f)+'ay']=_0x5cd4ac?'':_0x2e0307['JXZvI'],_0x37af57(_0x2e0307['zPHqu'])['textC'+_0x5e79f9(0x293)+'t']=_0x5cd4ac?'-':'+';}}return _0x213278;}function _0x206c21(_0x4a383b,_0x5295fa,_0x311186){var _0x2e209e=_0x1a1d69,_0xb4a7a9={'jkpsh':function(_0x4d7914,_0x44d947){var _0x1ed0d5=_0x5e49;return _0x27c645[_0x1ed0d5(0x213)](_0x4d7914,_0x44d947);},'qKRYl':function(_0x30cacf,_0x451dc6){return _0x30cacf!==_0x451dc6;},'dYyrw':_0x2e209e(0x60c)+'hot','VCRII':function(_0x4a1186,_0x57425e){return _0x4a1186===_0x57425e;},'TsHGg':'speed','mTVgP':function(_0x469827,_0x553d7a,_0x399c47){return _0x469827(_0x553d7a,_0x399c47);},'eVCEc':'boole'+'an','QspUs':_0x2e209e(0x24b)+'r'},_0x3b6696=_0x338370();if(!_0x3b6696){if(_0x2e209e(0x273)!==_0x2e209e(0x3aa))return _0x3a73b0['faile'+'d']++,_0x3a73b0[_0x2e209e(0x365)+_0x2e209e(0x157)]=_0x3a73b0['lastE'+_0x2e209e(0x157)]||_0x2e209e(0x4d7)+'APU8\x20'+_0x2e209e(0x698)+_0x2e209e(0x67c)+'stanc'+_0x2e209e(0x69c)+_0x2e209e(0x54b)+'hable'+_0x2e209e(0x170)+'Runti'+_0x2e209e(0x5d5)+'solve'+'Game('+')\x20or\x20'+_0x2e209e(0x275)+_0x2e209e(0x325)+_0x2e209e(0x214)+'al',null;else{var _0x250402=(_0x2e209e(0x307)+'|0|3|'+_0x2e209e(0x6fb)+'|6')[_0x2e209e(0x5e8)]('|'),_0x553f25=0x5*0x751+0xc4c*0x1+-0x30e1;while(!![]){switch(_0x250402[_0x553f25++]){case'0':var _0x2f8937=_0xb4a7a9[_0x2e209e(0x3b5)](_0x4032ce,_0x31eced);continue;case'1':var _0x31eced=_0x3424ce();continue;case'2':_0x2c069a=_0x2f8937;continue;case'3':if(!_0x55e951){_0x15660b=_0x2f8937,_0x5b30d8=[],_0x403a34('repor'+'t',{'report':_0x449e22()});return;}continue;case'4':for(var _0x3c5be0 in _0x2f8937){var _0x3d8f98=_0x3a4aaf[_0x3c5be0],_0x4059dc=_0x2f8937[_0x3c5be0];if(_0xb4a7a9[_0x2e209e(0x1dd)](_0x3d8f98,_0x4059dc))_0x452afc[_0x2e209e(0x1e7)](_0x3c5be0+':\x20'+_0x3d8f98+_0x2e209e(0x49c)+_0x4059dc);}continue;case'5':if(_0xda95f2!==_0xb4a7a9[_0x2e209e(0x3e9)])return;continue;case'6':_0x2bbeab('repor'+'t',{'report':_0x5f4240()});continue;case'7':_0x12a5c8=[];continue;case'8':if(_0xb4a7a9[_0x2e209e(0x513)](_0x3d2dcf,_0xb4a7a9[_0x2e209e(0x4a2)])){_0xb4a7a9[_0x2e209e(0x52d)](_0x3d49b8,_0x254f28&&typeof _0x3593ec['on']===_0xb4a7a9[_0x2e209e(0x243)]?_0x5b6a27['on']:_0x282caa['on'],_0x2c0d37&&_0xb4a7a9['VCRII'](typeof _0x48910c[_0x2e209e(0x4cb)+'r'],_0xb4a7a9[_0x2e209e(0x5d0)])?_0x40518b[_0x2e209e(0x4cb)+'r']:_0x304f8f['facto'+'r']);return;}continue;}break;}}}if(_0x27c645[_0x2e209e(0x709)](_0x5295fa,-0xf7+0x12b3*0x1+-0x11bc)||_0x5295fa+_0x311186>_0x3b6696['byteL'+'ength'])return _0x3a73b0[_0x2e209e(0x210)+'d']++,_0x3a73b0['lastE'+_0x2e209e(0x157)]=_0x3a73b0['lastE'+_0x2e209e(0x157)]||_0x27c645['vdcwM'](_0x27c645[_0x2e209e(0x41d)],(_0x4a383b+_0x5295fa)[_0x2e209e(0x48a)+'ing'](-0x12c2*-0x1+0x5*-0x2d7+-0x47f))+(_0x2e209e(0x1a3)+'\x20heap'+_0x2e209e(0x34f)+'0x')+_0x3b6696[_0x2e209e(0x3c3)+_0x2e209e(0x2ef)][_0x2e209e(0x48a)+'ing'](-0x773+-0x2*-0x9ad+-0x1*0xbd7),null;try{var _0x17ad2c=new Uint8Array(_0x311186);for(var _0x1e5443=0x16*0x15d+0x28*-0xbc+-0x9e*0x1;_0x1e5443<_0x311186;_0x1e5443++)_0x17ad2c[_0x1e5443]=_0x3b6696['getUi'+'nt8'](_0x27c645['lmake'](_0x4a383b,_0x5295fa)+_0x1e5443);return _0x3a73b0['ok']++,_0x17ad2c;}catch(_0x4e4420){return _0x3a73b0[_0x2e209e(0x210)+'d']++,_0x3a73b0[_0x2e209e(0x365)+_0x2e209e(0x157)]=_0x3a73b0['lastE'+_0x2e209e(0x157)]||_0x27c645['JfKjL'](String,_0x4e4420&&_0x4e4420['messa'+'ge']||_0x4e4420)['slice'](-0x2236+-0x7aa+0x43*0xa0,0x84c+-0x8c3*0x3+0x1*0x1275),null;}}function _0xd445a1(_0x46646b,_0x5dd4e6,_0x49e197){var _0xf79fa8=_0x1a1d69;if(_0x27c645['AdNLU']!==_0xf79fa8(0x65e))_0x4269cf[_0xf79fa8(0x1e7)](_0x27c645[_0xf79fa8(0x419)]),_0x5e702b['push'](''),_0x3ff217[_0xf79fa8(0x1e7)](_0x27c645[_0xf79fa8(0x414)]),_0x3b2e10[_0xf79fa8(0x1e7)]('no\x20Up'+'date\x20'+'ran\x20y'+_0xf79fa8(0x4c1)+_0xf79fa8(0x53c)+_0xf79fa8(0x1dc)+'ature'+_0xf79fa8(0x1fc)+_0xf79fa8(0x1bf)+_0xf79fa8(0x42a));else{var _0x1fc45d=_0x5c2004[_0x49e197],_0x574ca3=_0x27c645['ETdOM'](_0x206c21,_0x46646b,_0x5dd4e6,_0x1fc45d[_0xf79fa8(0x38a)]);if(!_0x574ca3)return null;var _0x24c1db=new DataView(_0x574ca3['buffe'+'r'],_0x574ca3[_0xf79fa8(0x3a8)+'ffset'],_0x574ca3['byteL'+_0xf79fa8(0x2ef)]),_0xd1a52=_0x24c1db[_0xf79fa8(0x1f7)+'t32'](_0x1fc45d[_0xf79fa8(0x28d)],!![]),_0x36eb5b=_0x24c1db['getIn'+_0xf79fa8(0x646)](_0x1fc45d[_0xf79fa8(0x349)+'n'],!![]),_0x47dde7=_0x24c1db[_0xf79fa8(0x20a)+'nt8'](_0x1fc45d['inite'+'d'])&-0x4*-0x4a3+0xadc+-0x1d67,_0x24d66b=_0x49e197===_0x27c645[_0xf79fa8(0x27b)]?_0x24c1db[_0xf79fa8(0x5a1)+'oat32'](_0x1fc45d['fake'],!![]):_0x27c645[_0xf79fa8(0x65f)](_0x49e197,_0xf79fa8(0x5f7))?_0x24c1db[_0xf79fa8(0x1f7)+_0xf79fa8(0x646)](_0x1fc45d[_0xf79fa8(0x4f0)],!![]):_0x24c1db['getUi'+'nt8'](_0x1fc45d[_0xf79fa8(0x4f0)]),_0x228c3c=_0x24c1db[_0xf79fa8(0x20a)+_0xf79fa8(0x2e7)](_0x1fc45d['activ'+'e'])&0x1*-0x7d5+0xb5e+-0x388;return{'keyAtOffset0':_0xd1a52,'hidden':_0x36eb5b,'inited':_0x47dde7,'fake':_0x24d66b,'act':_0x228c3c,'hex':_0xa55102(_0x574ca3),'alt':_0x49e197==='obfI'?_0x27c645[_0xf79fa8(0x4b0)](_0x36eb5b,_0x24d66b|-0x165c+0x864+-0x3*-0x4a8):null};}}function _0x565fbf(_0x268491,_0x5baf0b,_0x21e896){var _0x1b0a59=_0x1a1d69;if(_0x27c645[_0x1b0a59(0x5f1)](_0x27c645[_0x1b0a59(0x485)],_0x1b0a59(0x44c))){if(_0x27c645['ffgWn'](_0x268491,_0x27c645[_0x1b0a59(0x27b)]))return _0x34d4f2(_0x5baf0b^_0x21e896);if(_0x268491===_0x27c645['nodGK'])return _0x5baf0b^_0x21e896|0x511+0x1*0xaf4+-0x1005*0x1;return _0x27c645[_0x1b0a59(0x370)](_0x27c645[_0x1b0a59(0x5ef)](_0x5baf0b^_0x21e896,-0xbce*0x2+0x8fc+0x1*0xf9f),0x1*0xcf7+-0x1*0xda1+-0xa*-0x11)?-0x35*0x71+-0x1*0xc4b+0x23b1:-0x130f+0x1f06+-0xbf7*0x1;}else _0x497e2f['sane']=![];}function _0x53343d(_0x4fa331,_0x449986,_0xff1a09){var _0x776d4f=_0x1a1d69,_0x2e29cb=_0x5c2004[_0xff1a09];if(!_0x2e29cb)return null;var _0x4c97a7=_0x27c645[_0x776d4f(0x407)](_0x4907bc,_0x4fa331+_0x449986+_0x2e29cb['key'],'u8'),_0x1f0851=_0x4907bc(_0x27c645['FfxWg'](_0x4fa331,_0x449986)+_0x2e29cb['hidde'+'n'],_0x776d4f(0x450)),_0x3eaa1b=_0x27c645[_0x776d4f(0x4d9)](_0x4907bc,_0x4fa331+_0x449986+_0x2e29cb[_0x776d4f(0x346)+'d'],'u8'),_0x55be8d=_0x4907bc(_0x27c645['NPIbR'](_0x4fa331,_0x449986)+_0x2e29cb[_0x776d4f(0x4f0)],_0xff1a09===_0x776d4f(0x440)?_0x27c645[_0x776d4f(0x662)]:_0xff1a09==='obfI'?_0x776d4f(0x450):'u8'),_0x27f9c0=_0x27c645['TunEC'](_0x4907bc,_0x4fa331+_0x449986+_0x2e29cb['activ'+'e'],'u8');if(_0x27c645[_0x776d4f(0x32e)](_0x4c97a7,undefined)||_0x27c645[_0x776d4f(0x321)](_0x1f0851,undefined)||_0x27c645[_0x776d4f(0x65f)](_0x55be8d,undefined)||_0x27c645[_0x776d4f(0x65f)](_0x27f9c0,undefined))return null;_0x4c97a7&=0x9f6+0xa7*0x22+-0x1f25,_0x1f0851|=0x17ff+-0x1789+-0x76,_0x3eaa1b=_0x27c645['PqjMb'](_0x3eaa1b,0x2333+-0xdf5*-0x1+-0x3128)&0x228c+0x1987*0x1+-0x3c12,_0x27f9c0&=-0x1*-0xe1+0x1*-0x6cd+0x5ed;var _0x1f4bf2;if(_0x27c645['ZMQrZ'](_0xff1a09,_0x27c645[_0x776d4f(0x27b)]))_0x1f4bf2=_0x34d4f2(_0x1f0851^_0x4c97a7);else{if(_0x27c645[_0x776d4f(0x6f9)](_0xff1a09,_0x776d4f(0x5f7)))_0x1f4bf2=_0x27c645['FwYlN'](_0x27c645[_0x776d4f(0x710)](_0x1f0851,_0x4c97a7),0x215a+0x7a2*0x4+-0x3fe2);else _0x1f4bf2=_0x27c645['kacpZ'](_0x27c645['EwIag'](_0x1f0851^_0x4c97a7,-0x2666+-0xa4e*0x1+0x31b3),-0x90*0xc+-0xfb7+0x1677)?-0x31d*-0x9+-0xf79+-0xc8b:0x4*-0x13e+-0x7*-0x495+-0x1b1b;}return{'real':_0x1f4bf2,'fake':_0x55be8d,'act':_0x27f9c0,'init':_0x3eaa1b,'key':_0x4c97a7,'hidden':_0x1f0851};}function _0x5aa60b(_0x243930,_0x39f9dc,_0x26d4c5,_0x2e7359){var _0x151d42=_0x1a1d69,_0x1fd69f=(_0x151d42(0x335)+_0x151d42(0x577)+_0x151d42(0x3ad))['split']('|'),_0x24d173=0x242d+-0x1ef7+-0x2*0x29b;while(!![]){switch(_0x1fd69f[_0x24d173++]){case'0':if(!_0x3a655c)return![];continue;case'1':var _0x103ef3=new DataView(_0x3a655c['buffe'+'r'],_0x3a655c[_0x151d42(0x3a8)+_0x151d42(0x576)],_0x3a655c[_0x151d42(0x3c3)+'ength']);continue;case'2':var _0x53ee2f=_0x5c2004[_0x26d4c5];continue;case'3':return _0x27c645[_0x151d42(0x430)](_0xb91373,_0x27c645['BGzHQ'](_0x243930,_0x39f9dc)+_0x53ee2f['hidde'+'n'],_0x27c645[_0x151d42(0x470)],_0x27c645['slHKd'](_0x591e44,_0x226083))&&_0xb91373(_0x27c645[_0x151d42(0x616)](_0x27c645['NPIbR'](_0x243930,_0x39f9dc),_0x53ee2f[_0x151d42(0x4f0)]),_0x27c645[_0x151d42(0x228)](_0x26d4c5,'obfF')?'f32':_0x26d4c5===_0x27c645['nodGK']?_0x151d42(0x450):'u8',_0x27c645['cOonu'](_0x26d4c5,_0x27c645[_0x151d42(0x27b)])?_0x2e7359:_0x26d4c5===_0x151d42(0x5f7)?_0x27c645[_0x151d42(0x2d4)](_0x2e7359,0x1325+-0x43a*0x1+-0xeeb):_0x2e7359?0x1*-0x1d41+0x2044+-0x302:-0x2*-0x5b1+0x1*0x1b9f+-0x2701)&&_0x27c645[_0x151d42(0x566)](_0xb91373,_0x243930+_0x39f9dc+_0x53ee2f['activ'+'e'],'u8',0x194*0x6+-0x1373+0x49*0x23);case'4':var _0x226083=_0x53ee2f['keyTy'+'pe']==='u8'?_0x103ef3[_0x151d42(0x20a)+_0x151d42(0x2e7)](_0x53ee2f[_0x151d42(0x28d)]):_0x103ef3[_0x151d42(0x1f7)+_0x151d42(0x646)](_0x53ee2f[_0x151d42(0x28d)],!![]);continue;case'5':var _0x591e44;continue;case'6':if(_0x27c645['imIdK'](_0x26d4c5,_0x27c645['ODLEQ']))_0x591e44=_0x27c645[_0x151d42(0x1ad)](_0x120e14,_0x2e7359);else{if(_0x26d4c5===_0x151d42(0x5f7))_0x591e44=_0x2e7359|0x239a+-0x149d+0x3*-0x4ff;else _0x591e44=(_0x2e7359?0x2e*0x2b+0x1*-0x18ac+-0x10f3*-0x1:0x3c*-0xe+-0x1*-0x155d+0x1215*-0x1)&0x165b+-0x7fa*-0x1+-0x1*0x1d56;}continue;case'7':var _0x3a655c=_0x27c645[_0x151d42(0x5c5)](_0x206c21,_0x243930,_0x39f9dc,_0x53ee2f[_0x151d42(0x38a)]);continue;}break;}}var _0x5e4b7a={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0x3aed46=-0x1c66+0xa1e+0x1248+0.03,_0x3a6531=-0x17*0x71+0x28d*-0xf+-0x2*-0x1836,_0x5a04d4={},_0x3a914b=0x20fb*0x1+0xbe6+-0x2ce1*0x1,_0xc5429f=[],_0x244e82=[];function _0xce01d8(_0x370bc4){var _0xd40d90=_0x1a1d69,_0x2d58cc={'ztqAd':function(_0x17fbc1,_0x5782a9){return _0x17fbc1===_0x5782a9;},'qKTtJ':'none'},_0x4d8cf7=_0x4e36f6[_0xd40d90(0x194)+_0xd40d90(0x2e8)+_0xd40d90(0x5ee)]||[],_0x5710dd=[];_0x244e82=[],_0xc5429f=[];for(var _0x4c16c6=-0x1f79*-0x1+-0x642*-0x4+-0x3881;_0x27c645[_0xd40d90(0x714)](_0x4c16c6,_0x4d8cf7['lengt'+'h']);_0x4c16c6++){if(_0x27c645['PJcuc']!==_0x27c645[_0xd40d90(0x604)]){var _0x5f4c88=_0x4d8cf7[_0x4c16c6][-0x3*0x433+0x455+0x844];if(_0x4d8cf7[_0x4c16c6][-0x17*0x47+-0x463+-0xac5*-0x1]!=='obfF')continue;var _0x418cc7=_0xd445a1(_0x370bc4,_0x5f4c88,_0x27c645[_0xd40d90(0x27b)]);if(!_0x418cc7||_0x418cc7[_0xd40d90(0x346)+'d']!==-0x1763*0x1+-0x2137+0x2b*0x151)continue;var _0x2c0eb0=_0x27c645[_0xd40d90(0x4e3)](_0x565fbf,'obfF',_0x418cc7['hidde'+'n'],_0x418cc7[_0xd40d90(0x4c2)+'Offse'+'t0']);if(typeof _0x2c0eb0!==_0x27c645[_0xd40d90(0x4e1)]||!isFinite(_0x2c0eb0))continue;var _0x25d5c0=_0x370bc4+':'+_0x5f4c88,_0x2e6ecc=_0x5a04d4[_0x25d5c0];if(!_0x2e6ecc||_0x2c0eb0!==_0x2e6ecc[_0xd40d90(0x32a)+'ritte'+'n'])_0x2e6ecc=_0x5a04d4[_0x25d5c0]={'base':_0x2c0eb0,'lastWritten':null};var _0x4d5955=_0x2e6ecc[_0xd40d90(0x327)],_0xeb91ee=Math['abs'](_0x4d5955);if(_0x27c645[_0xd40d90(0x4f4)](_0xeb91ee,-0x2032+-0x1f*-0x13+0x9f7*0x3+0.0001)||_0xeb91ee>-0x1e59c+-0x1*-0x8939+-0x1*-0x2e303){if(_0xd40d90(0x26d)==='LBnwK'){_0x244e82[_0xd40d90(0x1e7)]({'o':_0x5f4c88,'v':_0x2c0eb0,'why':_0x27c645[_0xd40d90(0x2a5)]});continue;}else try{return _0x22103a&&_0x421219['buffe'+'r']?_0xaaf8b6[_0xd40d90(0x2fc)+'r'][_0xd40d90(0x3c3)+'ength']:0x6*0x381+-0x2349*-0x1+-0x384f;}catch(_0x507404){return 0x156f+0x28*-0x8a+0x21;}}_0x5710dd[_0xd40d90(0x1e7)]({'o':_0x5f4c88,'v':_0x2c0eb0,'a':_0xeb91ee,'base':_0x4d5955,'key':_0x25d5c0,'st':_0x2e6ecc});}else _0x446933();}var _0x5359c3=[];for(var _0x511f3e=-0x928+-0x1*-0x8a5+0x83;_0x511f3e<_0x5710dd[_0xd40d90(0x220)+'h'];_0x511f3e++){var _0x12d9a9=_0x5710dd[_0x511f3e]['a'],_0x2eccdc=null;for(var _0x4bcfc1=0x1d*-0xf1+0x22ea+-0x79d;_0x27c645['Moqwd'](_0x4bcfc1,_0x5359c3['lengt'+'h']);_0x4bcfc1++){var _0x586efd=_0x5359c3[_0x4bcfc1]['mean']/_0x12d9a9;if(_0x586efd>-0x1*-0x62f+-0x1e64+0x1836-_0x3aed46&&_0x586efd<0x1717*-0x1+-0xa08+0x2120+_0x3aed46){_0x2eccdc=_0x5359c3[_0x4bcfc1];break;}}if(!_0x2eccdc){if(_0x27c645['UOuIE'](_0xd40d90(0x55a),_0xd40d90(0x337))){var _0x1df9cc=_0x4e352b[_0xd40d90(0x355)+_0xd40d90(0x463)+'ById'](_0x27c645[_0xd40d90(0x50e)]);if(_0x1df9cc)_0x1df9cc[_0xd40d90(0x70e)+'e']();}else _0x2eccdc={'mean':_0x12d9a9,'members':[]},_0x5359c3[_0xd40d90(0x1e7)](_0x2eccdc);}_0x2eccdc['membe'+'rs'][_0xd40d90(0x1e7)](_0x5710dd[_0x511f3e]),_0x2eccdc[_0xd40d90(0x276)]=-0x9d7+-0xb9b+0x16e*0xf;for(var _0x3e9db3=0x71*0x2b+-0x22*-0xef+-0x5*0xa25;_0x3e9db3<_0x2eccdc[_0xd40d90(0x474)+'rs']['lengt'+'h'];_0x3e9db3++)_0x2eccdc[_0xd40d90(0x276)]+=_0x2eccdc['membe'+'rs'][_0x3e9db3]['a'];_0x2eccdc['mean']/=_0x2eccdc[_0xd40d90(0x474)+'rs'][_0xd40d90(0x220)+'h'];}var _0x198bd1=[];for(var _0x530e31=0x270d+-0x105f+-0x16ae;_0x530e31<_0x5359c3[_0xd40d90(0x220)+'h'];_0x530e31++){if(_0xd40d90(0x588)===_0x27c645['qUyNv']){if(_0x27c645[_0xd40d90(0x66c)](_0x5359c3[_0x530e31][_0xd40d90(0x474)+'rs'][_0xd40d90(0x220)+'h'],_0x3a6531))_0x198bd1[_0xd40d90(0x1e7)](_0x5359c3[_0x530e31]);}else{var _0x1e68d6=_0x423ea3['Unity'+'WebMo'+'dkit']&&_0x2461f4[_0xd40d90(0x490)+_0xd40d90(0x586)+'dkit'][_0xd40d90(0x2a2)+'me'];_0x268db1[_0xd40d90(0x3c7)]=_0x1e68d6&&_0x1e68d6[_0xd40d90(0x45b)+_0xd40d90(0x1f8)+'g']||null,_0x4ebbf5['tagMa'+_0xd40d90(0x46a)]=!!(_0x1e68d6&&_0x595941&&_0x2d58cc['ztqAd'](_0x1e68d6['__sak'+_0xd40d90(0x1f8)+'g'],_0x440689)),_0x3f5e52['runti'+'meGam'+'e']=_0x1e68d6&&_0x1e68d6['_game']?typeof _0x1e68d6[_0xd40d90(0x707)]:_0x2d58cc[_0xd40d90(0x64d)],_0x263a4e[_0xd40d90(0x4d1)+_0xd40d90(0x402)+'imeIs'+'Expor'+'ted']=!!(_0x4ff90e&&_0x3f9c86[_0xd40d90(0x6e4)+'ime']&&_0x2d58cc['ztqAd'](_0x134f75[_0xd40d90(0x6e4)+'ime'],_0x1e68d6)),_0xb06804['plugi'+_0xd40d90(0x402)+_0xd40d90(0x208)+'me']=_0x4f502c&&_0x35d1c1['_runt'+_0xd40d90(0x67b)]&&_0x454d87[_0xd40d90(0x6e4)+_0xd40d90(0x67b)][_0xd40d90(0x707)]?typeof _0x33491a[_0xd40d90(0x6e4)+'ime']['_game']:_0xd40d90(0x363);}}if(!_0x198bd1[_0xd40d90(0x220)+'h']){_0x244e82[_0xd40d90(0x1e7)]({'o':-(0x551+-0x11d3+0xc83),'v':0x0,'why':'no\x20gr'+_0xd40d90(0x5a9)+'f\x20'+_0x3a6531+(_0xd40d90(0x3b0)+_0xd40d90(0x3be)+'loats'+_0xd40d90(0x4fc)+'ed')});return;}var _0x5f4057=_0x198bd1[0x179+-0x172a+0x15b1][_0xd40d90(0x276)];for(var _0x149fb3=0x3*0x92c+0x18e0+-0x3464;_0x149fb3<_0x198bd1[_0xd40d90(0x220)+'h'];_0x149fb3++)if(_0x27c645[_0xd40d90(0x305)](_0x198bd1[_0x149fb3]['mean'],_0x5f4057))_0x5f4057=_0x198bd1[_0x149fb3][_0xd40d90(0x276)];var _0x252d6b=_0x27c645['mCapK'](_0x5f4057,-0x24aa+0x1*0x1a26+0x542*0x2+0.5);for(var _0x3e011a=-0x1*0x698+0x6*0x619+-0x1dfe;_0x3e011a<_0x5359c3[_0xd40d90(0x220)+'h'];_0x3e011a++){if(_0x27c645['OTLza'](_0x5359c3[_0x3e011a]['membe'+'rs'][_0xd40d90(0x220)+'h'],_0x3a6531))continue;for(var _0x102930=-0x227*0xa+0x1d25+-0x79f;_0x102930<_0x5359c3[_0x3e011a][_0xd40d90(0x474)+'rs'][_0xd40d90(0x220)+'h'];_0x102930++){_0x244e82[_0xd40d90(0x1e7)]({'o':_0x5359c3[_0x3e011a]['membe'+'rs'][_0x102930]['o'],'v':_0x5359c3[_0x3e011a][_0xd40d90(0x474)+'rs'][_0x102930]['v'],'why':_0x27c645[_0xd40d90(0x1a0)]});}}for(var _0x75fd7e=0x231+-0x52*0x5d+-0x9*-0x311;_0x27c645['tVxef'](_0x75fd7e,_0x198bd1[_0xd40d90(0x220)+'h']);_0x75fd7e++){if(_0x27c645[_0xd40d90(0x228)](_0xd40d90(0x48f),_0xd40d90(0x3e8)))_0x52f8fb=_0x27c645['XnKQJ'](_0x27c645[_0xd40d90(0x3b9)]+_0xb1c5e9[_0xd40d90(0x403)](_0xa9396['insta'+_0xd40d90(0x526)])['lengt'+'h']+_0x27c645[_0xd40d90(0x480)]+_0x40917c,'s'),_0x3fee1a=_0x27c645[_0xd40d90(0x22a)];else{var _0x1c784d=_0x198bd1[_0x75fd7e]['membe'+'rs'];for(var _0x3d9be3=-0x580+0x76*-0x50+-0x1c4*-0x18;_0x27c645['mTWxJ'](_0x3d9be3,_0x1c784d[_0xd40d90(0x220)+'h']);_0x3d9be3++){var _0xda9635=_0x1c784d[_0x3d9be3];if(_0xda9635['a']<_0x252d6b){_0x244e82[_0xd40d90(0x1e7)]({'o':_0xda9635['o'],'v':_0xda9635['v'],'why':_0x27c645['AKqWo'](_0xd40d90(0x260)+_0xd40d90(0x376)+'r\x20',_0x252d6b[_0xd40d90(0x4ca)+'ed'](0x1*-0x256f+0x1c99+0x8d8))});continue;}var _0x31d5c6=_0xda9635[_0xd40d90(0x327)]*_0x5e4b7a[_0xd40d90(0x4cb)+'r'];_0x27c645[_0xd40d90(0x58c)](_0x5aa60b,_0x370bc4,_0xda9635['o'],_0x27c645['ODLEQ'],_0x31d5c6)&&(_0xda9635['st'][_0xd40d90(0x32a)+_0xd40d90(0x677)+'n']=Math[_0xd40d90(0x304)+'d'](_0x31d5c6),_0x3a914b++,_0xc5429f[_0xd40d90(0x1e7)]('0x'+_0xda9635['o']['toStr'+'ing'](0x5*0x376+0x3*0x713+-0x2677)));}}}}var _0x4e36f6={'FPScontroller':[[0x1e*-0x133+-0x1c90+0x409a,_0x27c645['ODLEQ']],[-0x377+-0x2*-0x91d+-0xe9b,_0x1a1d69(0x440)],[0x1275+-0x14*0x14f+0x7f7,_0x1a1d69(0x440)],[0x7df+-0x1*-0xf52+-0x16d9,_0x27c645[_0x1a1d69(0x27b)]],[0x1709+0x1*0x25ae+-0x3c47,_0x27c645['ODLEQ']],[0x9b1+0x3ee*-0x1+-0x53b,_0x1a1d69(0x440)],[0x1e13+-0x4d4+-0x189f,_0x27c645[_0x1a1d69(0x27b)]],[-0x197c+0x913+0x1121,_0x1a1d69(0x73a)],[-0x760+0x3f+0x7e5,_0x27c645[_0x1a1d69(0x27b)]],[0x1f82*0x1+0xf88+-0x2e2e,_0x27c645['AsKta']],[0x1f18+0x2494+0x384*-0x13,'v3'],[-0x1579+0xda4+-0x1b*-0x53,'u8'],[0xbf*-0x6+0x6b*-0x9+0x92d,_0x1a1d69(0x440)],[0x10b6+-0x1c96*0x1+0xce8,'i32'],[0x2*-0x11e3+0x1*-0x1963+0x3e35,'u8'],[-0x1d*-0x14c+-0x195+-0x22f7,_0x27c645['AsKta']],[0x262c+-0x1*0x24b+-0x22cd,'u8'],[0xb3*0x2+0x39e*-0x5+0x11c5,'u8'],[-0xd*-0x16f+-0x3*-0x56+-0x1289,_0x1a1d69(0x440)],[-0x1402+-0x2186+0x36bc,_0x27c645[_0x1a1d69(0x27b)]],[0x22d*-0x11+-0xb3*0x33+0x49f2,_0x1a1d69(0x3ce)],[-0x1*0x2db+-0x1*-0x1d71+-0x2*0xca3,'f32'],[-0x17d*0x1+0x5f0+-0x31f,'v3'],[0x1*-0x150a+-0x563*0x3+0x2693,'v3'],[-0x2*-0xb61+-0x76*-0x6+-0x181a,_0x1a1d69(0x3ce)],[-0x7d2+0x5*-0x393+0x1b21,_0x27c645['layxA']],[-0x9d*-0x28+0x57*0x6+-0x190a,'u8'],[-0xf9*-0x12+-0x3a4*-0x1+0x9cd*-0x2,_0x27c645[_0x1a1d69(0x662)]],[-0x5*-0x45f+-0x1*0x350+-0x10f3,'v3'],[0x24ab+-0xaf4+0x1813*-0x1,'u8'],[-0x1ed0+0x2*0x453+0x17de,_0x27c645['layxA']],[0x8*0x358+0xb77*0x1+-0x247f,_0x1a1d69(0x3ce)],[-0x1953+0x29*-0x53+-0x5*-0x812,'u8'],[-0x480+-0xf21*0x2+0x247f,'u8'],[0x6e5+-0x1*0xc12+0x6ed,_0x1a1d69(0x440)],[0x1*-0x749+0x75b+0x1c6,_0x27c645[_0x1a1d69(0x662)]],[0x531*0x1+0xe06+-0x115b*0x1,'u8'],[-0x15b*0x6+-0xf*-0x263+0x5d*-0x47,_0x27c645['ODLEQ']],[0x1*0x1966+-0x230c+0xb9e,'v3'],[0x17e1+-0x2*-0xf12+0x1*-0x33fd,'obfB'],[0x3*0xa0d+-0x734+-0x14db,_0x27c645['layxA']],[-0x1f0c+0x2031+0xf7,_0x27c645['layxA']],[-0x67b+0x1d58+0xc3*-0x1b,'f32'],[-0x3*-0xa9f+-0x23*-0xd7+0x1e*-0x1f7,_0x27c645[_0x1a1d69(0x662)]],[0x610+-0x97*0x12+-0x2*-0x371,_0x1a1d69(0x3ce)],[0x172f+0x1f4e+0x773*-0x7,_0x27c645['layxA']],[-0x1896*-0x1+-0x15a*0xd+-0x4a8,'u8'],[0x794+-0x67f*-0x2+-0x3b*0x4f,'u8'],[-0x24b*-0x7+0x418+-0x11c7,'u8'],[0x114*-0x20+-0x144a+0x392a,_0x1a1d69(0x3ce)],[0x3*-0x44c+-0x114*0x1b+-0x2c64*-0x1,'u8'],[0x2066+-0x129e+-0xb63,'u8'],[-0x91f+-0x1*-0x1aab+0x22*-0x72,_0x27c645[_0x1a1d69(0x662)]],[-0x1336+0xe9*-0x17+0x2a91,'f32'],[-0xd0e+0x12fe+-0x380,_0x27c645[_0x1a1d69(0x662)]],[-0x143b+-0x1dd8+0x781*0x7,'f32'],[-0x3*-0x649+0x1*-0x1ccc+0xc69,_0x27c645[_0x1a1d69(0x662)]],[0x1*-0x10ca+-0x10*0x67+0xcdb*0x2,_0x27c645[_0x1a1d69(0x662)]],[0x2143+-0x2445+0x582,_0x27c645[_0x1a1d69(0x662)]],[0x183e+0x1b52+0x2b*-0x124,'v3'],[-0x215e+-0x11a4+0x3596,'u8'],[-0x1542+-0x1590+0x2d6a,'v3'],[-0xe89*0x1+-0xd8c+0x1eb9,_0x1a1d69(0x3ce)],[-0xf99+0x2d1+0xf74,'v3'],[-0x2c*0x4d+-0x12e5+0xb*0x32b,_0x27c645['layxA']],[-0x84b+0x1961*-0x1+0x4*0x91a,_0x27c645[_0x1a1d69(0x662)]],[0x83*-0x24+0x26*-0x101+-0x1da9*-0x2,_0x1a1d69(0x3ce)],[-0xb3f*0x2+0x1ef2+-0x5b0,'u8'],[0x1fb0+0x14bd+0x38*-0xe3,'u8'],[0x1d5a+-0x24a6+0xa14,_0x27c645[_0x1a1d69(0x662)]],[0x4*-0x8ab+0x1*0x24a3+0xe5,_0x1a1d69(0x3ce)],[0x26b3+0x2d*0x1b+-0x288e,'v3'],[-0x199*0x1+0x2*0x4df+-0x1f*0x2b,'v3'],[-0x587+0x847+0x1*0x3c,'f32'],[-0x1ebf*-0x1+0x20f8+-0x143d*0x3,_0x27c645[_0x1a1d69(0x662)]],[0x1b58+-0x6fd*0x4+0x3a0*0x1,_0x1a1d69(0x3ce)],[0x1*-0x23b3+0x1*0x1edd+0x7de,_0x27c645[_0x1a1d69(0x662)]],[0x224e+0x13a9*-0x1+-0xb99*0x1,'v3'],[0x1718*0x1+-0xfdb+-0x425,'u8'],[-0xdb2+-0x18e9+-0x29b7*-0x1,'v3'],[-0x1ffb+0x8e4+0x1*0x1a3f,_0x27c645['AsKta']],[-0x5*0x453+-0x2e7+0x5*0x58a,_0x1a1d69(0x3ce)],[0xde6+-0x2*0x3fb+0xb*-0x40,_0x27c645[_0x1a1d69(0x662)]],[0xb46+-0x19ea+-0x476*-0x4,_0x27c645['layxA']],[0x3*-0x5ef+-0x1*-0x262c+-0x1*0x1123,_0x1a1d69(0x3ce)],[-0x1df6+0x1191*0x1+0xfa5,'u8'],[0x15a1+-0x1865+0x605,'u8'],[0xe4d+0x84e*-0x1+0x1*-0x2b3,'u8'],[-0x1ab4+0x1fd7+-0x1d6,'u8'],[-0xaed+0x191a+-0xadf,'u8'],[-0x7*0x397+-0x11ff+0x2e70,'f32'],[0x2362+0x99*0x31+-0x17f*0x29,'f32'],[0x34e*-0x3+0x1*0x1da7+-0x1065,_0x27c645['layxA']],[0x1*0x1fb7+0x4b*0x1d+-0x24da,'f32'],[0x2*0x1c+0x1917+0x1*-0x15ef,_0x27c645[_0x1a1d69(0x662)]],[0xf15+-0x232*-0x7+-0x1b0f,'u8'],[0x9*0x251+-0x4*-0x4b3+-0x243d,_0x1a1d69(0x3ce)],[0x1*0x956+0x2fd*0x6+-0x17d8,_0x27c645[_0x1a1d69(0x662)]],[0x1*-0x12c2+-0x120b+-0x1*-0x283d,'u8'],[-0x119*-0x3+-0x43*-0x15+0x1*-0x552,'v3'],[0x3*-0xace+-0x1ef4+0x42e2,'v3'],[-0x4ed+0x9e3+-0x1*0x166,'v3'],[0x1*-0xb95+0x1a3+-0xa*-0x15b,_0x27c645[_0x1a1d69(0x662)]],[-0x12b2+-0x24ea+0x3b3c,_0x27c645[_0x1a1d69(0x662)]],[-0x5*-0x789+0x234a+-0x4553,_0x1a1d69(0x3ce)],[0xa3b+-0x18a8+0x1215,'v3'],[-0x195b*0x1+-0x141c+-0x312b*-0x1,_0x1a1d69(0x450)],[-0x22e9+0xf0+0x25b1*0x1,'u8'],[0x2e*-0xbd+-0x1363*0x1+0x3915,_0x1a1d69(0x450)],[-0x1f9d+-0x21*-0xde+0x6bf,_0x27c645[_0x1a1d69(0x662)]],[-0x1ed0+-0x164d+0x38e1,'f32'],[0xd6*0x5+-0x2*-0x16d+-0x340,_0x27c645['layxA']],[0x1da1+0x3*0x641+0x593*-0x8,_0x27c645[_0x1a1d69(0x662)]],[0x1954+-0x4*0x871+0xc40,'v3'],[0x2*-0x5a7+-0x124d*0x2+0x33c4,_0x27c645['AsKta']],[0x1ada+-0x32*0x19+0x3*-0x608,'u8'],[-0xe0*-0x24+-0x67*-0x2+-0x1c6d,'u8'],[0x22d4+0x1e7c+0x3*-0x147a,'u8'],[-0x1be1+0x781+0x1844,'f32'],[0x1a53+0x18e4+-0x2f4f,'i32']],'HealthScript':[[-0x1*-0x10e+0x152*-0x1a+0x296*0xd,'u8'],[0x5dc+0x110e+0x1*-0x168e,'i32'],[0xae*0x22+-0x171*-0x1+0x1*-0x180d,_0x1a1d69(0x3ce)],[-0x2*0xba2+-0x3af*-0x3+0xcbb,_0x27c645['layxA']],[0xb*0x5e+0x5*-0x1a+0x3*-0x100,_0x27c645[_0x1a1d69(0x662)]],[0x1*-0x8c6+0x1c*-0x42+0x108a,_0x27c645['layxA']],[0x1*0x8f5+-0x1ea7+0xb*0x206,_0x27c645['layxA']],[0x2581*0x1+0x21a8+-0x4695,_0x27c645[_0x1a1d69(0x662)]],[0x628+-0x86*-0x8+-0x9b8,_0x27c645[_0x1a1d69(0x470)]],[-0x1ec1+-0xd9b+0xc0*0x3c,_0x1a1d69(0x450)],[-0x1ce+0x1467+-0x11f1,'u8'],[-0x1f4a+-0x15c0+0x3b*0xe9,'u8'],[-0x19f9*0x1+0x1d86+0x1*-0x2e3,'u8'],[-0x7*0x102+-0x37+0x7f0,'u8'],[-0x1*0x2f5+0x1*0xd13+0x2*-0x4af,_0x27c645[_0x1a1d69(0x207)]],[-0x1526*-0x1+0x1*-0x1e21+0x9cf,_0x1a1d69(0x5f7)],[0x29*-0x95+-0x52a+-0x4f*-0x61,_0x27c645[_0x1a1d69(0x207)]],[-0x1130+-0x2335*-0x1+-0x1109,'obfI'],[-0xbb6*-0x1+0xf15+0x3ad*-0x7,'obfI'],[-0x1204+-0x1d9*0xc+-0x2954*-0x1,_0x27c645['xXCeq']],[-0x132e*0x2+-0x3*0x789+0x8e1*0x7,_0x1a1d69(0x440)],[-0x1*-0xc+0x647*0x4+0x17e*-0x10,_0x1a1d69(0x3ce)],[-0x2010+0x5*0x7b5+-0x52d,_0x27c645['layxA']],[0x1101*0x2+-0x1264+-0x727*0x2,_0x27c645[_0x1a1d69(0x662)]],[0x71*0x51+0x14*0xb0+-0x302d,'f32'],[0x3*-0xcdd+0xf*-0xfd+0x3*0x1242,'f32'],[-0x1*0x4e2+0x1c78+-0x1636,'v3'],[0x2*0x612+0x4f*0x3+-0xba1,_0x1a1d69(0x3ce)],[0x2222+0xf32+-0x2fdc,_0x27c645[_0x1a1d69(0x662)]],[0x2578+0x10c6+-0x34be,'u8'],[0x1899+-0x1828+-0x11b*-0x1,'u8'],[0x67*0x15+-0x1fca+0x84d*0x3,_0x1a1d69(0x450)]],'PlayerConfig':[],'WeaponManager':[[0xdcd*-0x1+0xbbd*-0x1+0x19a2,'i32'],[-0x22d6+0xe*-0x212+0x3fee,'i32'],[0x1693+0x58e*0x4+-0x2cab,'u8'],[0x33+0x693+-0x6a2,'i32'],[0x36f+0x2*-0x2eb+-0x37*-0xd,_0x27c645[_0x1a1d69(0x27b)]],[0x45a+0xfc+-0x4da,'f32'],[-0x13*0x12d+-0x3c8+0x1aa3,_0x27c645['AsKta']],[-0x60a*-0x5+-0x10bb*0x1+-0x2b*0x4d,'u8'],[-0x1b7c+-0x10a+0x1d0f,'u8'],[-0xbe6+-0x112+0xd84,_0x1a1d69(0x450)],[-0xf82+-0x17d4+0x27e6,_0x1a1d69(0x3ce)],[-0x24a7+0x11a*-0x2+0x2773,_0x27c645['layxA']],[-0x108a+-0x22dc+-0x2*-0x1a09,'i32'],[0x2262+-0x1c1a+-0x58c,'u8'],[-0x210c+0x1*-0x11f+0xbad*0x3,_0x27c645['nodGK']],[0x134d+-0xd5d+0x280*-0x2,_0x1a1d69(0x5f7)],[0x17f8+-0x1f6+-0x14fe,_0x1a1d69(0x3ce)],[0x2*-0xeca+0x20db+-0x5*0x73,_0x1a1d69(0x3ce)],[-0x2*-0x12ff+0x650+-0x2b42,_0x27c645[_0x1a1d69(0x662)]],[0x3*-0xab8+-0x4*-0x687+0x724,'f32'],[-0x1fc8+0x22b6+-0x1ce,_0x1a1d69(0x3ce)],[0x9c8+0x139f+-0x1c3f,'u8'],[0xa7*0x24+-0xae*0x2+-0x14f4,_0x1a1d69(0x5f7)],[-0x79*0x41+-0xc53+0x2c4c,_0x27c645[_0x1a1d69(0x207)]],[-0x198*0x9+0x2092+-0x2*0x873,_0x27c645['nodGK']],[-0x8b*-0x22+0x2241*0x1+-0x334f,_0x27c645['xXCeq']],[0xaa1*0x2+-0x17e1*0x1+0x413,'obfB'],[-0xa7*-0x32+0x1934+-0x3852,_0x1a1d69(0x73a)],[0x6a5+0x1008+-0x1*0x1521,_0x1a1d69(0x73a)],[-0x19ab*0x1+0x7bc*0x5+0x1*-0xb5d,_0x1a1d69(0x73a)],[0x89+-0x14*0x149+-0x37*-0x7d,_0x27c645[_0x1a1d69(0x207)]],[-0x795+0x3*0xa49+-0x157a,_0x27c645['AsKta']],[0x950+-0x1960+0x11e0,'u8'],[-0x9*-0x3b3+0x6a6*-0x3+0x3*-0x3d7,_0x1a1d69(0x450)],[0x1*0x1db9+0xafe*0x2+-0x31dd,'i32'],[0x490+-0xd9*0x1a+0x2*0x9bd,'i32'],[0xbf2+-0x447*-0x5+-0x1f41,'u8'],[0x1872+0x761+-0x1db7*0x1,'u8'],[0x5*-0x1d2+0x19*0x43+0x2e*0x1a,'u8'],[0x1558+-0x263e+0x4*0x4c1,'u8'],[0x888*0x4+0x188b+-0x1*0x388c,'u8'],[0x1cf*-0xc+0x8c7*-0x1+0x20cb,_0x1a1d69(0x450)],[-0x171a+-0x1723*0x1+0x3095,'u8']],'GG_GameManager':[[0x2*0xc86+0x2442+0x1e95*-0x2,'u8'],[-0x1882+-0x2c3*0x4+0x23ba,_0x1a1d69(0x3ce)],[0x3b1+0x1328+-0x29*0x8d,'u8'],[0x8*0xd+0x2*-0xdd+0x197,'u8'],[-0x16*-0x62+0x2*-0x6b7+0x54a,'f32'],[-0x1*0x78d+0x3e0*-0x7+-0x4ff*-0x7,'f32'],[-0x18cf+0x129c+-0x1*-0x683,_0x27c645[_0x1a1d69(0x470)]],[0x212b+-0x1157+0xf80*-0x1,_0x27c645['AsKta']],[0x1a64+0x56*-0x6a+0x990,'u8'],[0x17d3+-0x23ac+0x43*0x2f,'u8'],[-0x1*0x233b+0x1692+0xd21,_0x1a1d69(0x3ce)],[0x34d*0xb+0x13bb+-0x378e,_0x27c645['layxA']],[0x13f1+-0x3*-0x221+0x19c4*-0x1,_0x1a1d69(0x450)],[-0x15*0x65+-0x1*-0x3aa+0x1*0x533,'u8'],[-0x2*0x5de+-0xda6*0x2+0x27bc,_0x1a1d69(0x450)],[-0x4*-0x971+0x1*-0x18b+-0x237d,_0x27c645['AsKta']],[-0x12a1+-0x4*-0x66a+-0x647,'i32'],[0x22a+-0x5*0x6f7+-0x1*-0x2191,_0x1a1d69(0x5f7)],[0x708+0x6a9+0xcb5*-0x1,_0x1a1d69(0x5f7)],[0x2598+0x192f+-0x3db7,_0x27c645[_0x1a1d69(0x207)]],[-0x2337+-0x2132+-0x17b*-0x2f,'u8'],[0xf4d+-0x3b5+-0xa68,_0x27c645[_0x1a1d69(0x470)]],[0x1acb+-0x9e6+-0x237*0x7,'u8'],[0x1*-0xa0d+-0x2334+0x2eb1,_0x27c645[_0x1a1d69(0x662)]],[0x5f+-0x812+0x5*0x1d7,'u8'],[0x4*0xc9+-0xa9f*0x1+-0x3*-0x301,'u8'],[0x2118+0x1*-0x2615+0x6a1,'u8'],[0xc48+-0x2452+-0x8f*-0x2e,_0x27c645[_0x1a1d69(0x470)]],[0xa09*0x2+-0x1d4b+0xae5,'f32'],[0xb98+0x8*-0x3f+-0x7f0,'u8'],[0x13b4+0x370+-0x121*0x13,'u8'],[0x1c6+-0x12df*0x1+-0x12d1*-0x1,_0x27c645['AsKta']],[0x264e+0x2e3*0x3+-0x2d3b,'i32'],[0x1*-0x102+0x84f+0x1d*-0x31,_0x27c645[_0x1a1d69(0x662)]],[-0x27*-0x1e+-0x32b+-0x1f*-0x3,_0x27c645[_0x1a1d69(0x470)]],[-0x1094*-0x1+-0x39*0x26+0x1*-0x656,_0x27c645['layxA']],[0x265c+0x245e+-0x48ee,_0x1a1d69(0x450)],[-0x2569+-0x129*-0xf+0x15d2,_0x27c645[_0x1a1d69(0x470)]]],'TDM_GameManager':[[-0x176b+0x1*0x3ef+0x1394,'u8'],[0x1228+0x58d+-0x1795,'u8'],[-0x1757+-0x1bc1*0x1+0x2f*0x117,'u8'],[0x18c4+-0x107*-0x1+0x3*-0x88d,_0x27c645['layxA']],[0x101*-0x17+-0x34d*0x3+-0x2*-0x10ab,'u8'],[-0x1*-0x15a5+-0x6*0xb1+0x1*-0x1123,_0x27c645['layxA']],[-0xdaf+0x1f34+-0x1125,'f32'],[0x2be*0x4+0xd3a*0x2+-0x2508,_0x1a1d69(0x450)],[-0x405+-0x1*-0x50b+-0x9e,_0x27c645[_0x1a1d69(0x470)]],[0xd*-0x240+0x82e+-0x395*-0x6,'u8'],[-0x92*0x22+-0x1cf4+0xe3*0x37,'u8'],[-0x2*-0xd1f+-0x1*0x1a35+0x67,_0x27c645[_0x1a1d69(0x662)]],[-0x3*0x8ab+0x2c8*-0x7+0x2ded,'f32'],[0xd*-0xf5+-0x157e+-0x2267*-0x1,_0x27c645[_0x1a1d69(0x470)]],[0x5*-0x423+0x6*-0x1a1+0x1f01,'u8'],[-0xccd+-0x142+0x1*0xe9f,_0x27c645[_0x1a1d69(0x207)]],[-0x279*0xe+-0xb8f*-0x1+0x1*0x17e7,_0x1a1d69(0x5f7)],[-0x173d*0x1+0x1901*0x1+-0xd8,_0x1a1d69(0x5f7)],[-0x331+0x7d+0x3b4,_0x27c645['nodGK']],[0x711+0x3b*-0x3d+-0x812*-0x1,'u8'],[-0x8*0x38d+0x28*-0x68+0x2e04,'u8'],[-0x175b*-0x1+-0x1419+0x1e2*-0x1,'i32'],[-0x4d6+0x1c9f+-0x165d,'u8'],[0x148f*-0x1+0x1d8d+0x1*-0x77a,'u8'],[0x1487+0x1835+0x62c*-0x7,'f32'],[0x19*0xcc+-0xe5*0x17+0x233,_0x27c645['AsKta']],[-0x1*0xb4b+-0x19a8+-0x1*-0x2683,_0x27c645['AsKta']],[-0x2*-0xdcd+-0x564*0x2+0x79f*-0x2,_0x1a1d69(0x3ce)],[-0xd77+-0x1f7*0x1+-0x883*-0x2,_0x1a1d69(0x450)],[-0x164f*0x1+-0xe90+0x1*0x267b,_0x1a1d69(0x450)],[0x4e+0x1030+-0x1*0xede,_0x1a1d69(0x3ce)],[-0x24c5*0x1+-0x1a40+-0x40a9*-0x1,'f32'],[-0xe6+0x3cb*0x1+-0x13d*0x1,'i32'],[0x132c+0x147+-0x12c3,'u8'],[-0x1*-0x12b2+-0x1*-0x184+0x1af*-0xb,'u8'],[0x1*-0xa51+0x6db+0x52e,_0x1a1d69(0x3ce)]],'NPC_Cotroller':[[-0x13*0x53+-0x1*-0xbd9+-0x1*0x59c,'v3'],[0x759*0x4+0x2429+-0x416d,'f32'],[-0xb7f+0xb*0x32+0x97d,_0x27c645['layxA']],[0x1e0d+-0x1f4c+0x195*0x1,'u8'],[0x17*0x29+-0x4*-0x2a1+-0xddc*0x1,'u8'],[-0x1*-0x230d+0x5be+0x3ad*-0xb,'v3'],[0x56f*-0x2+0x5b*0x3+0xa69,'u8'],[0x26e3+-0x385*0x1+-0x22be,_0x1a1d69(0x3ce)],[0xc95*0x1+0xaa+0x7*-0x1cd,'f32'],[0xc8b+0x2*-0x30+0x3*-0x3d1,_0x1a1d69(0x3ce)],[-0x1a4c+-0x371*0x5+0x5*0x8d9,_0x1a1d69(0x3ce)],[-0x3*0x35+0x1b6c+-0x1*0x1a05,'u8'],[0x8a*-0x3e+-0x1*0x1fd3+-0x247*-0x1d,'f32'],[0x3*-0x698+-0x1657+0x2af7,_0x1a1d69(0x3ce)],[-0xd8b+0xc89+0x1de,_0x27c645[_0x1a1d69(0x662)]],[-0x1216*-0x2+-0x1b14+0x4*-0x20e,_0x27c645[_0x1a1d69(0x662)]],[-0x2*-0x10c9+-0x3*-0x301+0x335*-0xd,'u8'],[-0x15ba+-0xad4+-0x1*-0x217a,_0x27c645['layxA']],[0xa*0x151+-0x3*0x4e3+0x26f,'v3'],[0x1773+-0x1a11+0x1cd*0x2,_0x1a1d69(0x3ce)],[0x174c+-0x1303+-0x1d*0x1d,_0x1a1d69(0x450)],[0x1*0x189a+0x220c+0x1336*-0x3,'f32'],[-0x491*-0x5+-0xf56+-0x677,'f32'],[0x13*-0x51+0xf*0xf1+-0x71*0x10,_0x1a1d69(0x3ce)],[0x1e9c+-0x1*-0x405+-0x15*0x199,'v3'],[-0x243a+-0x1d92+0x42ec,_0x27c645[_0x1a1d69(0x662)]],[-0xad1*-0x1+-0x2423+0x1a76,_0x1a1d69(0x3ce)],[0x1f53+0x123c+0x1*-0x305b,'v3'],[-0x7*0x1e8+-0x1a97+0x2933,'u8'],[-0x1754+0xced+-0xbaf*-0x1,_0x27c645[_0x1a1d69(0x662)]],[-0x24a8+-0x23d2*0x1+0x49ca,'v3'],[-0x277*0x4+0x134e*-0x1+0x1e8a,'i32'],[0x5*0x246+-0xe49+0x457,_0x1a1d69(0x450)],[0xdd8+-0x53*-0x4f+-0x2605,_0x27c645[_0x1a1d69(0x662)]],[-0x24fb*0x1+-0x80e+0x1*0x2e7d,'u8'],[-0x137*-0xe+-0xe80+0x1*-0x10a,'v4'],[-0xf*0x23b+-0x16c*0x13+-0x1ad*-0x25,_0x27c645[_0x1a1d69(0x662)]],[0x3b9*0x4+0x227*-0x1+0x3*-0x3bb,_0x27c645[_0x1a1d69(0x662)]],[-0xbd1*0x1+0x17b5+0x2*-0x52a,_0x1a1d69(0x3ce)],[-0x2302+-0x2*0x20d+0x1*0x28b4,'u8'],[-0x18d5+-0x1*0x559+0x1fce,'i32']],'TargetHealth':[[-0x68+-0x602+-0x2*-0x33d,_0x27c645['AsKta']],[-0x262c+0x1e3c+0x804,_0x27c645[_0x1a1d69(0x470)]],[-0x1*-0x11b+-0x1f*0xd3+0x18a6,'u8'],[-0x32a+-0x149b+0x1809*0x1,_0x1a1d69(0x450)],[-0x10aa*-0x1+-0x1*-0x1573+-0x5*0x791,_0x27c645['AsKta']],[0x2085+-0x1f95+-0xa4,_0x1a1d69(0x450)],[0x2095+-0x1660+0x95*-0x11,'i32'],[0x158d*-0x1+-0x2366+-0x1*-0x3977,_0x1a1d69(0x3ce)],[0xc6*0x12+-0x16ca+0x96a*0x1,_0x1a1d69(0x3ce)],[0x5f*0x69+-0x210+0x7*-0x531,'u8'],[0x16ab+0x221*0xf+-0x3606,_0x1a1d69(0x3ce)],[-0x8d4+-0x327+0x9*0x167,'u8'],[-0x3a1*-0x2+0x1228+-0x1*0x18c2,_0x27c645[_0x1a1d69(0x470)]],[-0x791*0x5+0x1f5*-0xe+0x1*0x41e7,_0x1a1d69(0x450)],[-0x25f2+0x1*0x303+-0x91*-0x3f,_0x1a1d69(0x3ce)],[-0x1f00+0x1*-0x1c93+-0xb*-0x57d,'u8']],'SectatorCamera':[[-0xedf+-0x2086*-0x1+-0x1193,_0x27c645['layxA']],[0x2*0x614+0x112*0x12+-0x2*0xfaa,_0x27c645['layxA']],[0x187c+0x885+0xaf7*-0x3,_0x1a1d69(0x3ce)],[-0x2476+-0x2*-0x92f+0x1238,'v3'],[0x454*0x8+-0x4d9*-0x5+-0x3ab1*0x1,'v3'],[-0xff6+0x7f*0x20+0x5e,_0x27c645['AsKta']],[-0xedc+-0x5d*-0x67+0x1*-0x1643,'i32'],[-0x6*-0x1f5+0x1*0x1847+-0x23b5,_0x1a1d69(0x3ce)],[0x16f5+0x886+-0x1f27,'i32'],[-0x1b1b+0x4*-0x1a6+0x220b,_0x1a1d69(0x3ce)],[0x25be+0x18eb+-0x3e4d,'u8'],[0x1*-0x1556+-0xb6d+0x1f3*0x11,'v3'],[0x2462+0x98b*0x2+-0x370c,'v4'],[-0x1*0x93c+-0xcf0+0x16a8,'u8'],[0x22c8+0xc12+0x1*-0x2e5a,'i32']]},_0x12449f={};function _0xb5f1d1(_0x999d73,_0x530791,_0x2ba954){var _0xfe5f13=_0x1a1d69,_0x25266f={'XUjBl':function(_0x2636fc,_0x76c09a){return _0x2636fc+_0x76c09a;},'OPSJH':_0x27c645[_0xfe5f13(0x265)],'UhJrU':_0x27c645[_0xfe5f13(0x203)],'SXFBb':_0xfe5f13(0x5fb)+_0xfe5f13(0x1f3)+_0xfe5f13(0x5a7)+_0xfe5f13(0x57e)+_0xfe5f13(0x3e3)+'}','zeYet':_0x27c645['OdAFl']};return function(_0x15fc03){var _0x50c2fa=_0xfe5f13,_0x545da2={'cgpzT':_0x27c645['rwgIt'],'YITpc':function(_0x309e85,_0x1e1dba){return _0x309e85===_0x1e1dba;},'xelFi':_0x50c2fa(0x226)};if(_0x27c645['YPMAZ']===_0x27c645[_0x50c2fa(0x4de)])try{if('YpUUs'!=='YpUUs')_0x566518='metad'+_0x50c2fa(0x647)+'eady\x20'+'·\x20'+_0x5781d3+'s',_0xdfdf0d=_0x545da2[_0x50c2fa(0x3bc)];else{var _0x25d245=_0x15fc03&&_0x15fc03['val']?_0x15fc03['val']():0x1fba+0x2*-0x80f+-0xf9c;if(!_0x25d245)return;if(_0x2ba954){if(!_0x12449f[_0x25d245])_0x12449f[_0x25d245]={'ptr':_0x25d245,'kind':_0x999d73,'firstSeen':Date[_0x50c2fa(0x316)](),'hits':0x0};_0x12449f[_0x25d245][_0x50c2fa(0x344)]++;}else{var _0x59f0d3=_0xefb98f[_0x999d73];if(!_0x59f0d3||_0x27c645['KPFnk'](_0x59f0d3[_0x50c2fa(0x2b8)],_0x25d245)){_0xefb98f[_0x999d73]={'ptr':_0x25d245,'firstSeen':Date['now'](),'hits':0x0,'replaced':!!_0x59f0d3};try{if(_0x27c645[_0x50c2fa(0x70a)](_0x50c2fa(0x415),_0x50c2fa(0x415))){var _0x85346b=_0x12f761['filte'+'r'](function(_0x4b1baf){var _0x4ee445=_0x50c2fa;return _0x4b1baf[_0x4ee445(0x6df)]===_0x999d73;})[0x10c9*0x2+-0x282*0xc+-0x37a*0x1];_0x33160d={'type':_0x999d73,'atMs':_0x27c645['dExYT'](Date['now'](),_0x3439fb),'originalFunc':!!(_0x85346b&&_0x85346b[_0x50c2fa(0x16f)]&&typeof _0x85346b[_0x50c2fa(0x16f)][_0x50c2fa(0x2be)+'nalFu'+'nc']===_0x50c2fa(0x2ac)+'ion'),'resolveGameAtFire':!!_0xac6984(),'gameSourceAtFire':_0x3a73b0[_0x50c2fa(0x4fe)+'e']};}else return _0x545da2[_0x50c2fa(0x292)](_0x38d24b[_0x50c2fa(0x6df)],_0xdaea76);}catch(_0xe470a5){}}}if(_0x27c645[_0x50c2fa(0x60e)](_0x999d73,_0x27c645[_0x50c2fa(0x64a)])&&_0x5e4b7a['on'])try{_0xce01d8(_0x25d245);}catch(_0x15ac03){}if(!_0x530791){var _0x85346b=_0x12f761[_0x50c2fa(0x343)+'r'](function(_0x49dbe8){var _0x461737=_0x50c2fa;if(_0x545da2[_0x461737(0x292)]('UqjJj',_0x545da2['xelFi']))_0x253a30['textC'+_0x461737(0x293)+'t']=_0x3ff45b(_0x596bb2);else return _0x49dbe8[_0x461737(0x6df)]===_0x999d73;})[-0x2ef*-0x3+-0xf7*-0x4+-0xca9*0x1];if(_0x85346b&&_0x85346b[_0x50c2fa(0x16f)])try{if(_0x27c645['cFtOM']===_0x50c2fa(0x262)){var _0x306c0d=_0x1b2ec5[_0x50c2fa(0x490)+_0x50c2fa(0x586)+_0x50c2fa(0x649)][_0x50c2fa(0x2a2)+'me'];_0x306c0d['__sak'+'uraTa'+'g']=_0x25266f[_0x50c2fa(0x636)](_0x53700d+':',_0x101bb4['rando'+'m']()[_0x50c2fa(0x48a)+_0x50c2fa(0x1ab)](-0x1ece+-0x103a+0x2f2c)[_0x50c2fa(0x2fa)](-0x86*-0x2c+-0x3b5*-0x2+-0x1e70*0x1,0x380+0x1*0xf6f+-0x12e5*0x1)),_0x20319f=_0x306c0d[_0x50c2fa(0x45b)+_0x50c2fa(0x1f8)+'g'];}else _0x85346b[_0x50c2fa(0x16f)][_0x50c2fa(0x538)+'ed']=![];}catch(_0x587745){}}}}catch(_0x58c662){}else{if(!_0x469124['getEl'+_0x50c2fa(0x463)+'ById'](_0x25266f[_0x50c2fa(0x598)])){var _0x4e1386=_0x5d3fab['creat'+_0x50c2fa(0x5e0)+'ent'](_0x25266f[_0x50c2fa(0x418)]);_0x4e1386['id']=_0x25266f['OPSJH'],_0x4e1386[_0x50c2fa(0x67a)+'onten'+'t']=_0x25266f[_0x50c2fa(0x3e7)],(_0x5f09b0[_0x50c2fa(0x4bd)]||_0x5a83d7['docum'+_0x50c2fa(0x685)+_0x50c2fa(0x463)])['appen'+'dChil'+'d'](_0x4e1386);}return _0x523111=_0x1cfd4a['creat'+_0x50c2fa(0x5e0)+_0x50c2fa(0x5d1)](_0x50c2fa(0x43e)),_0x1fcafc['id']=_0x25266f[_0x50c2fa(0x45c)],_0x363ddc[_0x50c2fa(0x42e)][_0x50c2fa(0x151)+_0x50c2fa(0x2d8)+'d'](_0x4900f1),_0x3bea68;}};}function _0x18edbc(){var _0x3c4f59=_0x1a1d69;if(_0x12f761['lengt'+'h'])return!![];if(!window[_0x3c4f59(0x490)+'WebMo'+_0x3c4f59(0x649)]||!window[_0x3c4f59(0x490)+_0x3c4f59(0x586)+_0x3c4f59(0x649)][_0x3c4f59(0x2a2)+'me'])return![];var _0x4d310f=window[_0x3c4f59(0x490)+_0x3c4f59(0x586)+_0x3c4f59(0x649)][_0x3c4f59(0x2a2)+'me'];if(!_0x4d310f[_0x3c4f59(0x4d1)+'ns']||!_0x4d310f['plugi'+'ns'][_0x3c4f59(0x220)+'h'])return![];_0x2996a4=window['Unity'+_0x3c4f59(0x586)+_0x3c4f59(0x649)][_0x3c4f59(0x664)+'Wrapp'+'er'],_0x4ab78b=_0x4ab78b||_0x4d310f[_0x3c4f59(0x4d1)+'ns'][_0x4d310f[_0x3c4f59(0x4d1)+'ns']['lengt'+'h']-(-0x29c+-0xc0c+0xea9)];if(!_0x4ab78b||_0x27c645['SrmmS'](typeof _0x4ab78b['hookP'+_0x3c4f59(0x234)],'funct'+'ion'))return![];for(var _0x5eac3e=-0x2*-0x1ea+-0x1*0x1f2+-0x1e2;_0x5eac3e<_0xd344e['lengt'+'h'];_0x5eac3e++){var _0x4f15d0=_0xd344e[_0x5eac3e];try{if(_0x27c645[_0x3c4f59(0x3eb)]!==_0x27c645[_0x3c4f59(0x3eb)]){_0x29c9e0['error']='Runti'+_0x3c4f59(0x537)+'eateP'+_0x3c4f59(0x605)+_0x3c4f59(0x6b7)+'ailab'+'le';return;}else{var _0x2f9267=_0x4ab78b['hookP'+'refix']({'typeName':_0x4f15d0[_0x3c4f59(0x6df)],'methodName':_0x27c645['kGmpn'],'params':[_0x3c4f59(0x450),_0x27c645[_0x3c4f59(0x470)]],'returnType':undefined},_0x27c645['eDLeJ'](_0xb5f1d1,_0x4f15d0['type'],_0x4f15d0[_0x3c4f59(0x2b7)],_0x4f15d0[_0x3c4f59(0x67f)]));_0x12f761['push']({'type':_0x4f15d0['type'],'hook':_0x2f9267,'keep':_0x4f15d0[_0x3c4f59(0x2b7)]});}}catch(_0x3451f6){_0x217e3d['push'](_0x4f15d0[_0x3c4f59(0x6df)]+':\x20'+_0x27c645['JfKjL'](String,_0x3451f6&&_0x3451f6[_0x3c4f59(0x6fa)+'ge']||_0x3451f6)[_0x3c4f59(0x2fa)](-0x39c*-0xa+0x21a7+0xdf3*-0x5,-0x35*0x71+-0x26f6+0x2bd*0x17));}}return _0x12f761[_0x3c4f59(0x220)+'h']>0x2*0x87d+-0x2690+-0x9*-0x266;}function _0x5f5098(){var _0x32fa7f=_0x1a1d69,_0x5db5d8=-0x3*0x4c1+0x1*0x118a+-0x347;for(var _0x229a4f=-0x1abf*-0x1+0x33b*-0x4+-0xdd3*0x1;_0x229a4f<_0x12f761[_0x32fa7f(0x220)+'h'];_0x229a4f++){if(_0x27c645[_0x32fa7f(0x4e7)]===_0x32fa7f(0x708))_0x3c3146={'mean':_0x42b49f,'members':[]},_0x59980f['push'](_0x3e5da7);else{if(_0x12f761[_0x229a4f][_0x32fa7f(0x16f)]&&_0x27c645[_0x32fa7f(0x200)](_0x12f761[_0x229a4f]['hook']['table'+_0x32fa7f(0x142)],undefined))_0x5db5d8++;}}return _0x5db5d8;}function _0x2943e0(){var _0x471e49=_0x1a1d69,_0x49c33b={'QJQlb':_0x27c645[_0x471e49(0x4d5)]};if('CeDmF'===_0x27c645[_0x471e49(0x71c)]){var _0x5a2c17=0xe1e+0x1973*-0x1+-0x3c7*-0x3;for(var _0x31f727=0x144+0x19e0+-0x1b24*0x1;_0x27c645[_0x471e49(0x1f6)](_0x31f727,_0x12f761['lengt'+'h']);_0x31f727++){if(_0x27c645['aaiVl'](_0x471e49(0x28a),_0x471e49(0x28a))){if(_0x12f761[_0x31f727]['hook']&&_0x12f761[_0x31f727]['hook'][_0x471e49(0x3ca)+'ed'])_0x5a2c17++;}else return _0x2eecb5[_0x471e49(0x4fe)+'e']=_0x8632e1['sourc'+'e']||_0x471e49(0x510)+_0x471e49(0x301)+_0x471e49(0x3fa)+'xport'+_0x471e49(0x720)+_0x471e49(0x159),new _0x79e2e0(_0x27a5e7[_0x471e49(0x2fc)+'r']);}return _0x5a2c17;}else{var _0x89fd28='';for(var _0x3e4247=-0x2294+0x1d83+0x511;_0x3e4247<arguments[_0x471e49(0x220)+'h'];_0x3e4247++){var _0x17c08d=arguments[_0x3e4247];if(typeof _0x17c08d===_0x49c33b['QJQlb'])_0x89fd28+=_0x17c08d;else{if(_0x17c08d&&_0x17c08d['messa'+'ge'])_0x89fd28+=_0x17c08d[_0x471e49(0x6fa)+'ge'];}}if(_0x89fd28[_0x471e49(0x747)+'Of'](_0x2c555a)!==-(-0x1b84+0x1918+-0x1*-0x26d))return _0x157d0c[_0x471e49(0x2c0)](_0x28393a,arguments);if(_0x89fd28['index'+'Of'](_0x471e49(0x490)+'WebMo'+_0x471e49(0x649))!==-(-0x12af*-0x1+0xf43*0x1+0x21f1*-0x1)){var _0x4ba09a=_0x89fd28[_0x471e49(0x2fa)](0x13b5*-0x1+-0x1b30+0x2ee5,0x7de+0x18ab*-0x1+0x11f9);if(_0x4f94ca['index'+'Of'](_0x4ba09a)===-(-0x20b*-0x12+-0x2333*0x1+-0x192)&&_0x4572bd['lengt'+'h']<0x2*0xab8+-0xc0b+-0x929)_0x2ddbf7[_0x471e49(0x1e7)](_0x4ba09a);}}}var _0x12179c=null,_0x5df0c4=[],_0x4eb734={},_0x33160d=null;function _0x2a7a59(_0x410beb){var _0xad01bd=_0x1a1d69;try{if(!_0x2996a4||!_0x410beb)return null;var _0xbc2537=new _0x2996a4(_0x410beb)[_0xad01bd(0x32d)+'assNa'+'me']();return _0x27c645['cFWtX'](_0xbc2537,undefined)?null:_0xbc2537;}catch(_0x1ae44a){if(_0x27c645['bmuKr'](_0xad01bd(0x505),_0xad01bd(0x4f8)))_0x5ef677['error']=_0x4d2594(_0x771a2a&&_0x4c0d66[_0xad01bd(0x6fa)+'ge']||_0x293492);else return null;}}function _0xdb37a8(_0x506739,_0x474663,_0x51e9ac){var _0x585b61=_0x1a1d69,_0x54b98d={'LjpaX':function(_0x201bb3,_0x4cc360){var _0x396a73=_0x5e49;return _0x27c645[_0x396a73(0x582)](_0x201bb3,_0x4cc360);}};if(_0x585b61(0x3ac)===_0x585b61(0x3ac)){var _0xcf3af4=_0x27c645[_0x585b61(0x655)][_0x585b61(0x5e8)]('|'),_0x2839a2=0x2e*-0x37+-0x5cb+0x1*0xfad;while(!![]){switch(_0xcf3af4[_0x2839a2++]){case'0':if(_0x27c645['KuMaH'](_0x474663,-0x1012+0xb*-0x1a5+0x2229)||_0x27c645[_0x585b61(0x1de)](_0x474663+_0x51e9ac*(-0x3e4+-0x1e4c+-0x18e*-0x16),_0x4c874f['byteL'+'ength']))return null;continue;case'1':var _0x4c874f=_0x338370();continue;case'2':if(!_0x4c874f)return null;continue;case'3':for(var _0x26656f=-0x86f*-0x1+-0x69+0xd*-0x9e;_0x26656f<_0x51e9ac;_0x26656f++)_0x617659['push'](_0x4c874f['getFl'+_0x585b61(0x35c)](_0x506739+_0x474663+_0x27c645[_0x585b61(0x6da)](_0x26656f,-0x1335+-0x11f*0x5+-0x4*-0x635),!![]));continue;case'4':var _0x617659=[];continue;case'5':_0x3a73b0['ok']+=_0x51e9ac;continue;case'6':return _0x617659;}break;}}else return _0x23b273['sourc'+'e']=_0x54b98d['LjpaX'](_0x585b61(0x33a)+'w.'+_0x11d097[_0x20eacc],'.Modu'+'le'),_0x492f0d;}function _0x346200(){var _0x2c46e0=_0x1a1d69,_0x4c21b0={'XEmYQ':function(_0xfaedc0,_0x21128d){return _0xfaedc0(_0x21128d);},'fowYc':_0x2c46e0(0x2e5)+_0x2c46e0(0x19c)+_0x2c46e0(0x15c)+'s','vHIVp':_0x27c645['imptX'],'CxMIo':function(_0x269b4a,_0x168fa2){return _0x269b4a+_0x168fa2;},'VyOcu':_0x2c46e0(0x2e5)+_0x2c46e0(0x19c)+'v2-ta'+'b','MOCtY':_0x27c645[_0x2c46e0(0x406)],'ydjtN':_0x27c645[_0x2c46e0(0x72c)],'DvUMG':_0x2c46e0(0x2e5)+'a','mgYkE':function(_0x214d58,_0x39f950){var _0x28a7c4=_0x2c46e0;return _0x27c645[_0x28a7c4(0x249)](_0x214d58,_0x39f950);}},_0x3db356={'enemies':[],'camera':null,'cameraFrom':null,'playerList':null,'managers':{},'wasmTypes':null},_0x3fca60=Object[_0x2c46e0(0x403)](_0x12449f),_0x4aa087=_0x4e36f6['NPC_C'+_0x2c46e0(0x725)+_0x2c46e0(0x5ee)]&&_0x4e36f6[_0x2c46e0(0x21b)+'otrol'+_0x2c46e0(0x5ee)][_0x2c46e0(0x220)+'h']?_0x4e36f6[_0x2c46e0(0x21b)+'otrol'+'ler']:_0x4e36f6[_0x2c46e0(0x59a)+'Bot']||[];for(var _0x2cab1f=0x37*0x5+0xb3*0x17+0x12*-0xf4;_0x27c645['KuMaH'](_0x2cab1f,_0x3fca60[_0x2c46e0(0x220)+'h'])&&_0x27c645[_0x2c46e0(0x305)](_0x2cab1f,0x16*0xf1+0x26a8+-0x3b46);_0x2cab1f++){if(_0x27c645[_0x2c46e0(0x18c)]('PwVRN',_0x2c46e0(0x29f))){_0x4cfb93()['set']({'host':_0x2695d7['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}else{var _0x46cdbd=_0x12449f[_0x3fca60[_0x2cab1f]],_0xc61cfb=_0x4aa087,_0x557369={'ptr':'0x'+_0x46cdbd[_0x2c46e0(0x2b8)][_0x2c46e0(0x48a)+'ing'](0x25ee+-0x1931*-0x1+-0x3f0f),'kind':_0x46cdbd[_0x2c46e0(0x44e)]||null,'hits':_0x46cdbd['hits'],'firstSeenMs':_0x46cdbd[_0x2c46e0(0x6b3)+_0x2c46e0(0x663)]-_0x3439fb,'pos':null,'posAt':null,'allVecs':[],'scalars':[],'health':null};for(var _0x5b8526=-0x4fe+-0x23f1*0x1+0x28ef;_0x27c645['Qtcsg'](_0x5b8526,_0xc61cfb[_0x2c46e0(0x220)+'h']);_0x5b8526++){if(_0x27c645['svDzh'](_0x2c46e0(0x653),_0x2c46e0(0x622))){var _0x34ba47=_0x4c21b0['XEmYQ'](_0x161e94,_0x4b22ff);_0x5a719a[_0xcec638]=_0x34ba47[_0x2c46e0(0x71d)],_0x1d92c4[_0x2ca5d0]={'key':_0x34ba47[_0x2c46e0(0x28d)],'sane':_0x34ba47[_0x2c46e0(0x697)],'checked':_0x34ba47[_0x2c46e0(0x1c3)+'ed'],'keyConsistent':_0x34ba47[_0x2c46e0(0x1df)+_0x2c46e0(0x4d0)+'ent'],'keySource':_0x34ba47['keySo'+_0x2c46e0(0x61c)]};}else{if(_0xc61cfb[_0x5b8526][0x1b73+-0x1ad8+-0x4d*0x2]!=='v3')continue;var _0xf82f98=_0x27c645['VhnDM'](_0xdb37a8,_0x46cdbd[_0x2c46e0(0x2b8)],_0xc61cfb[_0x5b8526][0x665*0x6+0xbed+-0x324b],0x20a2+0xe06+-0x2ea5);if(!_0xf82f98)continue;_0x557369[_0x2c46e0(0x6e3)+'cs'][_0x2c46e0(0x1e7)]({'o':'0x'+_0xc61cfb[_0x5b8526][-0x1*0xd99+0xc7b+0x11e]['toStr'+'ing'](0x1d64+-0x1*-0x1f99+-0x3ced),'v':_0xf82f98});if(_0x557369['pos']===null&&_0xf82f98[0x849+-0xc1f+0x3d6]!==0x96+0xe*0x3e+-0x3fa&&_0x27c645[_0x2c46e0(0x358)](_0xf82f98[-0x8da+0x1602+-0xd26],-0x1*-0xbe1+-0x1*-0xf9+-0xcda)){if(_0x27c645[_0x2c46e0(0x53a)]!==_0x27c645['JCNpE'])_0x557369[_0x2c46e0(0x25e)]=_0xf82f98,_0x557369[_0x2c46e0(0x173)]='0x'+_0xc61cfb[_0x5b8526][0x2b*0x2f+-0xb*0x22d+0x100a*0x1][_0x2c46e0(0x48a)+'ing'](-0x1*0x14a8+-0x24f+0x1707);else{var _0x4e7723=_0x12f988[_0x48c60e][_0x2c46e0(0x48a)+_0x2c46e0(0x1ab)](-0x1dc1*-0x1+0x9b1+-0x2762*0x1);_0x2595e2+=_0x27c645['YyArM'](_0x4e7723['lengt'+'h']<-0x74*-0x53+0x1*-0x1172+-0x1428?'0':'',_0x4e7723);}}}}_0x557369['scala'+'rs']=_0xc61cfb[_0x2c46e0(0x343)+'r'](function(_0x489aba){var _0x267cb3=_0x2c46e0;return _0x27c645['ffgWn'](_0x489aba[0x498*-0x8+0xfc5+0x14fc],_0x27c645[_0x267cb3(0x662)]);})[_0x2c46e0(0x242)](function(_0x3cebd5){var _0x578e8c=_0x2c46e0;if('kXZTd'!==_0x578e8c(0x300)){var _0x2c7630=_0x231195[_0x578e8c(0x31d)+'eElem'+'ent']('style');_0x2c7630['id']=_0x4c21b0['fowYc'],_0x2c7630[_0x578e8c(0x67a)+_0x578e8c(0x293)+'t']=_0x4c21b0['vHIVp'],(_0x393c9f[_0x578e8c(0x4bd)]||_0x592c55['docum'+_0x578e8c(0x685)+'ement'])['appen'+_0x578e8c(0x2d8)+'d'](_0x2c7630);}else return{'o':_0x27c645[_0x578e8c(0x56a)]('0x',_0x3cebd5[-0x12d1+-0x585+-0x23*-0xb2][_0x578e8c(0x48a)+_0x578e8c(0x1ab)](-0x19db+-0x6*-0x392+-0x47f*-0x1)),'v':_0x4907bc(_0x46cdbd['ptr']+_0x3cebd5[-0x11*0x61+0x652+0x1f],_0x578e8c(0x3ce))};})['filte'+'r'](function(_0x545c84){return _0x545c84['v']!==undefined&&isFinite(_0x545c84['v']);})['slice'](0x1682+0x1*0x9b+-0x3d*0x61,0x39*0x3+-0x12c*0xa+0x1*0xb17);var _0xf4f3d8=_0x27c645[_0x2c46e0(0x407)](_0x4907bc,_0x46cdbd['ptr']+(-0x1f48+0x1*-0xd1d+-0x2d35*-0x1),_0x27c645['VtbAo']);if(_0xf4f3d8)_0x557369['healt'+'h']='0x'+(_0xf4f3d8>>>-0x261e+-0x18*0x199+0x1*0x4c76)['toStr'+'ing'](0x572*-0x7+0x188c*-0x1+-0xe*-0x47b);_0x3db356[_0x2c46e0(0x1ee)+'es'][_0x2c46e0(0x1e7)](_0x557369);}}_0x3db356[_0x2c46e0(0x168)+'Count']=_0x3fca60[_0x2c46e0(0x220)+'h'];var _0xcc09b1={'TDM_GameManager':0x2c,'GG_GameManager':0x14},_0xe6d73e={'TDM_GameManager':0x50,'GG_GameManager':0x5c};for(var _0xe855ac in _0xefb98f){var _0x56650b=_0xefb98f[_0xe855ac];if(!_0x56650b||!_0x56650b[_0x2c46e0(0x2b8)])continue;if(!_0x27c645['iZCqG'](_0xe855ac,_0xcc09b1))continue;_0x3db356[_0x2c46e0(0x3e2)+_0x2c46e0(0x66a)][_0xe855ac]=_0x27c645['oFAgk']('0x',_0x56650b[_0x2c46e0(0x2b8)][_0x2c46e0(0x48a)+'ing'](0x155b+0x48d*0x7+-0x3526));var _0x373d0f=_0x27c645[_0x2c46e0(0x4d9)](_0x4907bc,_0x56650b[_0x2c46e0(0x2b8)]+_0xcc09b1[_0xe855ac],_0x2c46e0(0x15b)),_0x569c26=_0x27c645[_0x2c46e0(0x4d9)](_0x4907bc,_0x27c645[_0x2c46e0(0x5f2)](_0x56650b[_0x2c46e0(0x2b8)],_0xe6d73e[_0xe855ac]),_0x27c645[_0x2c46e0(0x658)]);if(_0x373d0f&&_0x27c645['OeIJK'](_0x3db356['camer'+'a'],null)){if(_0x27c645['VGucQ'](_0x27c645[_0x2c46e0(0x498)],_0x27c645[_0x2c46e0(0x45f)]))_0x3db356[_0x2c46e0(0x1f2)+'a']='0x'+_0x27c645['NTcMt'](_0x373d0f,0x1623*0x1+0xd39+-0x124*0x1f)['toStr'+_0x2c46e0(0x1ab)](0x1be3+0xc40+0x2813*-0x1),_0x3db356[_0x2c46e0(0x1f2)+'aFrom']=_0xe855ac;else{_0x4b40a9['log']('%c[sa'+_0x2c46e0(0x583)+'\x20Skil'+_0x2c46e0(0x431)+_0x2c46e0(0x47c)+'rt',_0x4c21b0[_0x2c46e0(0x730)]('color'+':',_0x162763)+(';font'+'-weig'+_0x2c46e0(0x719)+'0'),_0x5749e2),_0x55264c[_0x2c46e0(0x1be)](_0x4c21b0[_0x2c46e0(0x730)](_0x224bc7+'\x0a'+_0xa22bdf[_0x2c46e0(0x6fe)+'gify'](_0x3d69c1,null,-0x43*0x81+-0x26aa+0x486e*0x1),'\x0a')+_0x125781);try{_0x4e7205(_0x126e4c);}catch(_0x3768b9){}_0x4c9ab4('repor'+'t',{'report':_0x4cb8bf});}}if(_0x569c26&&_0x27c645[_0x2c46e0(0x2e0)](_0x3db356[_0x2c46e0(0x38e)+_0x2c46e0(0x161)],null))_0x3db356['playe'+_0x2c46e0(0x161)]='0x'+(_0x569c26>>>-0x1a2b+-0x244c+0x3e77)['toStr'+'ing'](-0x515+0x4*0x346+0xb9*-0xb);}if(_0x27c645[_0x2c46e0(0x4ea)](_0x3db356[_0x2c46e0(0x168)+'Count'],-0x4aa+-0x1*-0x54+0x456*0x1)&&!_0x3db356[_0x2c46e0(0x1f2)+'a']){if(_0x27c645[_0x2c46e0(0x640)]('ymroO',_0x27c645['hPHvG'])){var _0x43a071=_0x1c95cd[_0x2c46e0(0x355)+_0x2c46e0(0x463)+'ById'](_0x4c21b0[_0x2c46e0(0x28e)]);if(_0x1fe84b&&!_0x43a071&&_0x32acb4[_0x2c46e0(0x42e)]){var _0x4f0f0b=_0x45f7b1[_0x2c46e0(0x31d)+'eElem'+_0x2c46e0(0x5d1)](_0x4c21b0['MOCtY']);_0x4f0f0b['id']=_0x4c21b0[_0x2c46e0(0x28e)],_0x4f0f0b['style']['cssTe'+'xt']=_0x4c21b0[_0x2c46e0(0x4da)]+('backg'+_0x2c46e0(0x628)+_0x2c46e0(0x6af)+_0x2c46e0(0x2df)+'2,29,'+_0x2c46e0(0x162)+'order'+':1px\x20'+'solid'+_0x2c46e0(0x691)+'(255,'+_0x2c46e0(0x610)+'77,.5'+_0x2c46e0(0x676)+'or:')+_0xb47d13+';'+('borde'+'r-rad'+_0x2c46e0(0x3da)+'99px;'+'paddi'+_0x2c46e0(0x6e6)+_0x2c46e0(0x67e)+'x;fon'+'t:11p'+'x/1.4'+'\x20ui-m'+_0x2c46e0(0x4c5)+'ace,C'+'onsol'+'as,mo'+'nospa'+'ce;'),_0x4f0f0b[_0x2c46e0(0x67a)+'onten'+'t']=_0x4c21b0[_0x2c46e0(0x6a3)],_0x4f0f0b['oncli'+'ck']=function(){_0xa026f4(![]),_0x266390();},_0x2f2845['body']['appen'+'dChil'+'d'](_0x4f0f0b);}else _0x4c21b0[_0x2c46e0(0x35d)](!_0x2c9730,_0x43a071)&&_0x43a071[_0x2c46e0(0x70e)+'e']();}else _0x3db356[_0x2c46e0(0x519)]=_0x27c645['VQLam']+('That\x20'+_0x2c46e0(0x503)+_0x2c46e0(0x150)+_0x2c46e0(0x689)+'by\x20lo'+_0x2c46e0(0x476)+'ike\x20-'+_0x2c46e0(0x457)+_0x2c46e0(0x5da)+'econ\x20'+_0x2c46e0(0x70f)+'E\x20a\x20l'+_0x2c46e0(0x18e)+_0x2c46e0(0x5e1)+'\x20')+(_0x2c46e0(0x5fd)+'he\x20me'+_0x2c46e0(0x621));}else _0x27c645['ffgWn'](_0x3db356[_0x2c46e0(0x168)+'Count'],0x10dd+-0x7*0x295+0x136)&&(_0x3db356[_0x2c46e0(0x519)]='A\x20gam'+'e\x20man'+_0x2c46e0(0x2dc)+'is\x20li'+'ve\x20bu'+_0x2c46e0(0x4e2)+_0x2c46e0(0x21b)+_0x2c46e0(0x725)+_0x2c46e0(0x49f)+'as\x20ti'+_0x2c46e0(0x1d2)+_0x2c46e0(0x5c3)+'\x20'+(_0x2c46e0(0x1ee)+'es\x20sp'+'awn\x20a'+_0x2c46e0(0x737)+_0x2c46e0(0x683)+'ter\x20t'+_0x2c46e0(0x188)+_0x2c46e0(0x1e1)+'tarts'+'.'));try{var _0xd28dd=window[_0x2c46e0(0x490)+_0x2c46e0(0x586)+_0x2c46e0(0x649)]&&window[_0x2c46e0(0x490)+_0x2c46e0(0x586)+_0x2c46e0(0x649)]['Runti'+'me'],_0x561bd3=_0xd28dd&&_0xd28dd['inter'+'nalWa'+_0x2c46e0(0x611)+'es']||[],_0x2edda0={};for(var _0x49b548=-0x579*-0x1+-0x2059+0x1ae0;_0x27c645[_0x2c46e0(0x630)](_0x49b548,_0x561bd3[_0x2c46e0(0x220)+'h'])&&_0x49b548<-0x2*0xdb3+0x492+0x2674;_0x49b548++){var _0x1e37df=_0x561bd3[_0x49b548][_0x2c46e0(0x5e3)+'s'][_0x2c46e0(0x271)](',')+_0x2c46e0(0x49c)+(_0x561bd3[_0x49b548][_0x2c46e0(0x5db)+_0x2c46e0(0x5bf)]||_0x27c645[_0x2c46e0(0x2e3)]);_0x2edda0[_0x1e37df]=(_0x2edda0[_0x1e37df]||0x1*-0xca+0x925*-0x3+-0x11*-0x1a9)+(-0x4ab*-0x1+0x1025*-0x1+0x1*0xb7b);}_0x3db356[_0x2c46e0(0x6bd)+'ypes']=_0x2edda0;}catch(_0x51b8bd){}return _0x3db356;}function _0x46b9dc(){var _0x300f17=_0x1a1d69,_0x516817={'AAuSN':function(_0x5a9fc4,_0x43ae99){var _0x125485=_0x5e49;return _0x27c645[_0x125485(0x49d)](_0x5a9fc4,_0x43ae99);}},_0x4f6685={};_0x3a73b0['ok']=-0x1*0x11eb+-0x18eb*0x1+-0x1*-0x2ad6,_0x3a73b0[_0x300f17(0x210)+'d']=-0x24d+-0x2095+-0x5e*-0x5f,_0x3a73b0[_0x300f17(0x365)+_0x300f17(0x157)]=null;var _0xe572e5=Object[_0x300f17(0x403)](_0x4e36f6);for(var _0x1ab863=0x5a1+0x2*-0x124e+0x4d*0x67;_0x27c645[_0x300f17(0x1f6)](_0x1ab863,_0xe572e5[_0x300f17(0x220)+'h']);_0x1ab863++){var _0x131c94=_0xe572e5[_0x1ab863],_0x2fe9aa=_0xefb98f[_0x131c94];if(!_0x2fe9aa||!_0x2fe9aa[_0x300f17(0x2b8)])continue;var _0x5ee3bb=_0x4e36f6[_0x131c94]||[],_0x512b1e=[];for(var _0x2efe9f=-0xa72*0x2+-0x42e+0x1912;_0x2efe9f<_0x5ee3bb['lengt'+'h'];_0x2efe9f++){if(_0x300f17(0x55c)==='DAKMV'){_0x28ba41['push']({'o':-(-0xc1d+0x2*-0x989+-0x3e6*-0x8),'v':0x0,'why':_0x516817[_0x300f17(0x6f1)]('no\x20gr'+'oup\x20o'+'f\x20',_0x5720f8)+(_0x300f17(0x3b0)+'uredF'+_0x300f17(0x732)+_0x300f17(0x4fc)+'ed')});return;}else{var _0xb752ed=_0x5ee3bb[_0x2efe9f][-0x1f2f+0x1e4e+0x2d*0x5],_0x2caa4e=_0x5ee3bb[_0x2efe9f][0x453+0x1e28+-0x5bf*0x6];if(_0x2caa4e['index'+'Of']('obf')===-0x5*0x279+0x16b*0xf+0x4*-0x23a){var _0x1e1290=_0x27c645[_0x300f17(0x6b1)](_0xd445a1,_0x2fe9aa[_0x300f17(0x2b8)],_0xb752ed,_0x2caa4e);if(!_0x1e1290)continue;_0x1e1290['o']=_0xb752ed,_0x1e1290['k']=_0x2caa4e,_0x512b1e['push'](_0x1e1290);}else{var _0xe14ce2=_0x4907bc(_0x27c645[_0x300f17(0x4ec)](_0x2fe9aa[_0x300f17(0x2b8)],_0xb752ed),_0x2caa4e);if(_0xe14ce2===undefined)continue;var _0x1b67ce={'o':_0xb752ed,'k':_0x2caa4e,'v':_0xe14ce2};if(_0x27c645[_0x300f17(0x63d)](_0x2caa4e,'v2')||_0x2caa4e==='v3'||_0x27c645[_0x300f17(0x326)](_0x2caa4e,'v4')){var _0x12f8df=_0x27c645['cRCmD'](_0x2caa4e,'v2')?0x1b77*0x1+0x1881+0x1152*-0x3:_0x2caa4e==='v3'?-0x4*0x877+-0x17aa+0x3989:-0x1b7*0x5+-0x10be+0x1955,_0x5ad8df=_0xdb37a8(_0x2fe9aa['ptr'],_0xb752ed,_0x12f8df);_0x5ad8df&&(_0x1b67ce[_0x300f17(0x1a2)]=_0x5ad8df,_0x1b67ce['v']=_0x5ad8df[-0xe5*-0x2b+0x1654+-0x3ccb]);}_0x512b1e['push'](_0x1b67ce);}}}if(_0x512b1e['lengt'+'h']){var _0x576d8a=_0x49aa16(_0x512b1e);_0x4f6685[_0x131c94]=_0x576d8a[_0x300f17(0x71d)],_0x4eb734[_0x131c94]={'key':_0x576d8a[_0x300f17(0x28d)],'sane':_0x576d8a[_0x300f17(0x697)],'checked':_0x576d8a[_0x300f17(0x1c3)+'ed'],'keyConsistent':_0x576d8a['keyCo'+_0x300f17(0x4d0)+'ent'],'keySource':_0x576d8a[_0x300f17(0x62e)+'urce']};}}return _0x4f6685;}function _0x49aa16(_0x287f91){var _0x577acf=_0x1a1d69,_0x32840b=0x24c5+0x248*-0xd+0x3*-0x25f,_0x150594=-0xef*0x25+0xc14+0x1677,_0xe70355=null;for(var _0x43a061=0x1ae5+0xcb9*0x2+-0x3457;_0x43a061<_0x287f91['lengt'+'h'];_0x43a061++){var _0x32c6af=_0x287f91[_0x43a061];if(_0x32c6af['k']['index'+'Of'](_0x577acf(0x372))!==0x7f5*-0x3+-0x147d+0x2c5c)continue;_0x32c6af['v']=_0x565fbf(_0x32c6af['k'],_0x32c6af['hidde'+'n'],_0x32c6af['keyAt'+'Offse'+'t0']),_0x32c6af[_0x577acf(0x4f1)+'ed']=_0x32c6af['keyAt'+_0x577acf(0x3de)+'t0'],_0x32c6af['raw']=_0x27c645['DKOSS'](_0x27c645['kVyIq'](_0x27c645['MttyE'](_0x27c645[_0x577acf(0x736)](_0x27c645[_0x577acf(0x565)](_0x27c645[_0x577acf(0x5c6)](_0x27c645[_0x577acf(0x347)],_0x32c6af['hidde'+'n']),'\x20fake'+'='),_0x32c6af[_0x577acf(0x4f0)]),_0x32c6af['act']?'\x20ACTI'+'VE':'')+'\x20k0=',_0x32c6af[_0x577acf(0x4c2)+'Offse'+'t0'])+_0x27c645[_0x577acf(0x345)],_0x32c6af[_0x577acf(0x4d4)]);if(_0x27c645[_0x577acf(0x383)](_0xe70355,null))_0xe70355=_0x32c6af[_0x577acf(0x4c2)+_0x577acf(0x3de)+'t0'];_0x150594++,_0x38c691(_0x32c6af)?(_0x32840b++,_0x32c6af[_0x577acf(0x697)]=!![]):_0x32c6af[_0x577acf(0x697)]=![],delete _0x32c6af['alt'];}return{'rows':_0x287f91,'key':_0xe70355,'sane':_0x32840b,'checked':_0x150594,'keyConsistent':_0x27c645[_0x577acf(0x27e)](_0x420d45,_0x287f91),'keySource':_0x27c645[_0x577acf(0x4d2)]};}function _0x420d45(_0x36c5e7){var _0x29e28d=_0x1a1d69,_0x4e012e={};for(var _0x5e808b=0x18e9+-0x1*-0xa15+-0xbaa*0x3;_0x5e808b<_0x36c5e7['lengt'+'h'];_0x5e808b++){var _0x34430f=_0x36c5e7[_0x5e808b];if(_0x27c645[_0x29e28d(0x56e)](_0x34430f['k']['index'+'Of']('obf'),-0x2350+-0x1521+-0x3871*-0x1))continue;if(_0x27c645[_0x29e28d(0x2a3)](_0x4e012e[_0x34430f['k']],undefined))_0x4e012e[_0x34430f['k']]=_0x34430f['keyUs'+'ed'];else{if(_0x27c645['SrmmS'](_0x4e012e[_0x34430f['k']],_0x34430f['keyUs'+'ed']))return![];}}return!![];}function _0x38c691(_0x6df42d){var _0x22dd7=_0x1a1d69,_0x2ad86=_0x6df42d['v'];if(typeof _0x2ad86!==_0x27c645[_0x22dd7(0x4e1)]||!isFinite(_0x2ad86))return![];if(_0x6df42d['k']===_0x27c645[_0x22dd7(0x144)])return _0x27c645[_0x22dd7(0x373)](_0x2ad86,-0x1958+-0x2d*-0x33+0x257*0x7)||_0x2ad86===-0x2452+-0x1642+0x3a95;var _0x532eb6=_0x6df42d[_0x22dd7(0x4f0)];if(typeof _0x532eb6!==_0x22dd7(0x24b)+'r'||!isFinite(_0x532eb6))return!![];if(_0x27c645[_0x22dd7(0x427)](_0x6df42d[_0x22dd7(0x72b)],-0x10c7*-0x2+0x1be7+-0x3d74))return _0x27c645['QRdfN'](Math['abs'](_0x2ad86-_0x532eb6),Math[_0x22dd7(0x4fd)](0x7+0x1*-0x8ab+0x8a5,Math[_0x22dd7(0x2d3)](_0x532eb6)*(-0x1*0x2463+-0x1cb0+0x4113+0.6)));return Math[_0x22dd7(0x2d3)](_0x2ad86)<0x448463b1+0x669dcdbe+0x3d887fb*-0x1d;}function _0x1f2424(){var _0x2232dd=_0x1a1d69,_0x3c1feb={};try{var _0x4de07d=_0x27c645['bOcDV'][_0x2232dd(0x5e8)]('|'),_0x41361e=-0x9*-0x33e+0x7*0x3d6+-0x3808;while(!![]){switch(_0x4de07d[_0x41361e++]){case'0':_0x3c1feb[_0x2232dd(0x1f1)+_0x2232dd(0x46a)]=!!(_0x560a26&&_0x22cc59&&_0x560a26[_0x2232dd(0x45b)+_0x2232dd(0x1f8)+'g']===_0x22cc59);continue;case'1':_0x3c1feb['plugi'+_0x2232dd(0x402)+_0x2232dd(0x208)+'me']=_0x4ab78b&&_0x4ab78b[_0x2232dd(0x6e4)+'ime']&&_0x4ab78b[_0x2232dd(0x6e4)+_0x2232dd(0x67b)]['_game']?typeof _0x4ab78b[_0x2232dd(0x6e4)+_0x2232dd(0x67b)]['_game']:_0x2232dd(0x363);continue;case'2':var _0x560a26=window['Unity'+'WebMo'+_0x2232dd(0x649)]&&window[_0x2232dd(0x490)+_0x2232dd(0x586)+_0x2232dd(0x649)]['Runti'+'me'];continue;case'3':_0x3c1feb['runti'+'meGam'+'e']=_0x560a26&&_0x560a26[_0x2232dd(0x707)]?typeof _0x560a26['_game']:_0x27c645[_0x2232dd(0x17f)];continue;case'4':_0x3c1feb['tag']=_0x560a26&&_0x560a26['__sak'+_0x2232dd(0x1f8)+'g']||null;continue;case'5':_0x3c1feb[_0x2232dd(0x4d1)+'nRunt'+_0x2232dd(0x558)+'Expor'+_0x2232dd(0x4f5)]=!!(_0x4ab78b&&_0x4ab78b['_runt'+_0x2232dd(0x67b)]&&_0x4ab78b[_0x2232dd(0x6e4)+_0x2232dd(0x67b)]===_0x560a26);continue;}break;}}catch(_0x821737){_0x3c1feb[_0x2232dd(0x1e3)]=_0x27c645[_0x2232dd(0x213)](String,_0x821737&&_0x821737[_0x2232dd(0x6fa)+'ge']||_0x821737);}return _0x3c1feb;}function _0x256a74(){var _0x285061=_0x1a1d69,_0x5994dd=['unity'+_0x285061(0x738)+'nce',_0x285061(0x1fd)+'Game',_0x285061(0x5c9),_0x285061(0x1fd)+'Insta'+'nceWr'+_0x285061(0x606)],_0x54bf97={};for(var _0x43c56d=0x17a9+-0x239a*-0x1+-0x3b43*0x1;_0x43c56d<_0x5994dd['lengt'+'h'];_0x43c56d++){if(_0x285061(0x6ed)!=='GloeE'){var _0x2fae06=_0x5994dd[_0x43c56d],_0x1a3631=typeof window[_0x2fae06];_0x54bf97[_0x2fae06]=_0x1a3631===_0x285061(0x1ef)+'ined'?_0x285061(0x1ef)+_0x285061(0x47a):_0x1a3631;}else _0x2068b4=_0x27c645['UEaUM'](_0x15416d,_0x1664b7&&_0x5c11cf['messa'+'ge']||_0x46cd50);}var _0x54c818=_0xac6984();_0x54bf97['gameS'+_0x285061(0x323)]=_0x3a73b0['sourc'+'e'];try{_0x54bf97['hasMo'+_0x285061(0x5b2)]=!!(_0x54c818&&_0x54c818[_0x285061(0x148)+'e']),_0x54bf97['heapU'+'8']=!!(_0x54c818&&_0x54c818[_0x285061(0x148)+'e']&&_0x54c818['Modul'+'e']['HEAPU'+'8']),_0x54bf97[_0x285061(0x379)+'ytes']=_0x54bf97[_0x285061(0x229)+'8']?_0x54c818[_0x285061(0x148)+'e']['HEAPU'+'8'][_0x285061(0x220)+'h']:0xa3*0xa+0x894+-0x779*0x2;}catch(_0x4d36d7){_0x54bf97[_0x285061(0x49e)+'dule']=![],_0x54bf97[_0x285061(0x229)+'8']=![],_0x54bf97[_0x285061(0x379)+_0x285061(0x31c)]=0x1321+0x1034+-0x2355;}return _0x54bf97['value'+_0x285061(0x6c1)+'er']=typeof _0x2996a4,_0x54bf97;}function _0x44bfe7(_0x1f3afa){var _0xb2f665=_0x1a1d69,_0xf448d4={};for(var _0x519791 in _0x1f3afa){if('mNFgI'!==_0xb2f665(0x6f5)){var _0x37dcb9=_0x1f3afa[_0x519791];for(var _0xe58e79=-0x1c7b+-0x5ea+0x2265*0x1;_0x27c645['ybaFJ'](_0xe58e79,_0x37dcb9[_0xb2f665(0x220)+'h']);_0xe58e79++){_0xf448d4[_0x519791+'+0x'+_0x37dcb9[_0xe58e79]['o'][_0xb2f665(0x48a)+'ing'](0x227+-0x1234+0x55f*0x3)]=_0x37dcb9[_0xe58e79]['v'];}}else{if(_0x27c645[_0xb2f665(0x195)](_0x396574))return null;var _0x4e323f=_0x5eb754[_0xb2f665(0x355)+'ement'+_0xb2f665(0x4f3)](_0x27c645[_0xb2f665(0x50e)]);if(_0x4e323f)return _0x4e323f;if(!_0x1c8f53['body']||!_0x2f2ab4[_0xb2f665(0x42e)]['appen'+'dChil'+'d'])return null;try{var _0x40f3d6=_0x27c645['CUVAt']['split']('|'),_0x13a8bd=-0x10*-0x231+0x19f7*-0x1+0x1*-0x919;while(!![]){switch(_0x40f3d6[_0x13a8bd++]){case'0':return _0x4e323f;case'1':_0x4e323f=_0x323ef3[_0xb2f665(0x31d)+_0xb2f665(0x5e0)+'ent'](_0xb2f665(0x43e));continue;case'2':_0x4e323f['id']='sakur'+'a-sw-'+'v2';continue;case'3':if(!_0x4f01df[_0xb2f665(0x355)+'ement'+_0xb2f665(0x4f3)](_0xb2f665(0x2e5)+_0xb2f665(0x19c)+'v2-cs'+'s')){var _0x4b5336=_0x28f12c['creat'+_0xb2f665(0x5e0)+_0xb2f665(0x5d1)]('style');_0x4b5336['id']=_0x27c645[_0xb2f665(0x265)],_0x4b5336['textC'+_0xb2f665(0x293)+'t']=_0xb2f665(0x5fb)+_0xb2f665(0x1f3)+_0xb2f665(0x5a7)+_0xb2f665(0x57e)+_0xb2f665(0x3e3)+'}',(_0x56105f[_0xb2f665(0x4bd)]||_0x1365af[_0xb2f665(0x1b9)+_0xb2f665(0x685)+_0xb2f665(0x463)])['appen'+_0xb2f665(0x2d8)+'d'](_0x4b5336);}continue;case'4':_0x55a03b[_0xb2f665(0x42e)][_0xb2f665(0x151)+_0xb2f665(0x2d8)+'d'](_0x4e323f);continue;}break;}}catch(_0x3de653){return null;}}}return _0xf448d4;}function _0x2516f9(_0x171997,_0x3e36bf){var _0x296e20=_0x1a1d69,_0x317931={'wBXap':_0x296e20(0x612),'zJgYs':function(_0x7113c6,_0x234669){return _0x7113c6+_0x234669;},'wPNQt':function(_0xd0a3e3,_0x24a901){var _0x4ef48e=_0x296e20;return _0x27c645[_0x4ef48e(0x515)](_0xd0a3e3,_0x24a901);},'EtNYf':function(_0x31d346,_0x50df16){var _0x4baa4e=_0x296e20;return _0x27c645[_0x4baa4e(0x57b)](_0x31d346,_0x50df16);},'IxrsK':_0x27c645[_0x296e20(0x156)],'fNXqL':'No\x20re'+_0x296e20(0x6b0)+_0x296e20(0x749)+'\x20so\x20e'+_0x296e20(0x341)+_0x296e20(0x531)+'t\x20was'+_0x296e20(0x5a5)+'ped\x20b'+_0x296e20(0x14e)+'e.'};if(_0x27c645[_0x296e20(0x735)](_0x171997,_0x27c645[_0x296e20(0x1b4)])){if(_0x27c645['OpdbO']!==_0x27c645['OpdbO']){var _0x57addf=_0x47f49a[_0x1f377d]['param'+'s'][_0x296e20(0x271)](',')+'\x20->\x20'+(_0x16524[_0x2a9fb7]['retur'+_0x296e20(0x5bf)]||_0x317931[_0x296e20(0x523)]);_0x46ed13[_0x57addf]=_0x317931[_0x296e20(0x6e9)](_0x38b958[_0x57addf]||-0xb91+-0x2119*0x1+0x2caa,0x26a6+0x1d*-0xe9+-0x31*0x40);}else{_0x1db88d(_0x3e36bf&&typeof _0x3e36bf['on']==='boole'+'an'?_0x3e36bf['on']:_0x5e4b7a['on'],_0x3e36bf&&_0x27c645['DBcae'](typeof _0x3e36bf['facto'+'r'],'numbe'+'r')?_0x3e36bf[_0x296e20(0x4cb)+'r']:_0x5e4b7a[_0x296e20(0x4cb)+'r']);return;}}if(_0x27c645['xiApD'](_0x171997,_0x296e20(0x60c)+'hot'))return;var _0x515ff2=_0x46b9dc(),_0x263da0=_0x44bfe7(_0x515ff2);if(!_0x12179c){if(_0x27c645[_0x296e20(0x31e)](_0x27c645[_0x296e20(0x204)],_0x27c645[_0x296e20(0x204)]))try{if(!_0xe8fa87||!_0x48ba79)return null;var _0x56a5d9=new _0x5c5b1c(_0x408f45)[_0x296e20(0x32d)+_0x296e20(0x72f)+'me']();return _0x56a5d9===_0x2beda2?null:_0x56a5d9;}catch(_0x4a91c0){return null;}else{_0x12179c=_0x263da0,_0x5df0c4=[],_0x27c645['MaDsG'](_0xdd3255,_0x27c645[_0x296e20(0x6c2)],{'report':_0x27c645[_0x296e20(0x4c7)](_0x12803f)});return;}}_0x5df0c4=[];for(var _0x3ff5d6 in _0x263da0){if(_0x27c645[_0x296e20(0x60e)](_0x27c645[_0x296e20(0x412)],_0x27c645[_0x296e20(0x354)]))_0x34a19e[_0x296e20(0x550)+_0x296e20(0x30e)][_0x296e20(0x1e7)](_0x317931[_0x296e20(0x6e9)](_0x317931[_0x296e20(0x225)](_0x296e20(0x529)+'red\x20',_0x4e4dd1[_0x296e20(0x403)](_0x4ada1e[_0x296e20(0x510)+'nces'])['lengt'+'h']),_0x296e20(0x600)+_0x296e20(0x348)+'\x20but\x20'+'read\x20'+_0x296e20(0x6be)+_0x296e20(0x54d))+(_0x50c009[_0x296e20(0x365)+'rror']?_0x317931['EtNYf'](_0x317931['IxrsK'],_0xb7b2e3['lastE'+_0x296e20(0x157)]):_0x317931[_0x296e20(0x2f5)]));else{var _0x1b4abf=_0x12179c[_0x3ff5d6],_0x164e6f=_0x263da0[_0x3ff5d6];if(_0x27c645['RLyPy'](_0x1b4abf,_0x164e6f))_0x5df0c4['push'](_0x27c645['hIkfF'](_0x27c645['evIsp'](_0x27c645[_0x296e20(0x492)](_0x3ff5d6+':\x20',_0x1b4abf),_0x27c645['MbPaP']),_0x164e6f));}}_0x12179c=_0x263da0,_0xdd3255(_0x296e20(0x603)+'t',{'report':_0x12803f()});}var _0x56e54d=null;function _0x1be142(){var _0x4aebbf=_0x1a1d69,_0x5a8d11={'xdcnD':_0x27c645[_0x4aebbf(0x4d3)]};if(_0x56e54d)return _0x56e54d;try{if(!document[_0x4aebbf(0x42e)]||!document['body']['appen'+_0x4aebbf(0x2d8)+'d'])return null;if(!document[_0x4aebbf(0x355)+_0x4aebbf(0x463)+_0x4aebbf(0x4f3)](_0x4aebbf(0x2e5)+'a-sw-'+'hud-c'+'ss')){var _0x1554fb=document[_0x4aebbf(0x31d)+'eElem'+_0x4aebbf(0x5d1)]('style');_0x1554fb['id']=_0x4aebbf(0x2e5)+_0x4aebbf(0x19c)+_0x4aebbf(0x459)+'ss',_0x1554fb[_0x4aebbf(0x67a)+_0x4aebbf(0x293)+'t']='#saku'+'ra-sw'+_0x4aebbf(0x717)+_0x4aebbf(0x681)+_0x4aebbf(0x1d1)+'l}',(document[_0x4aebbf(0x4bd)]||document[_0x4aebbf(0x1b9)+_0x4aebbf(0x685)+_0x4aebbf(0x463)])['appen'+_0x4aebbf(0x2d8)+'d'](_0x1554fb);}var _0x324e5f=document[_0x4aebbf(0x31d)+_0x4aebbf(0x5e0)+_0x4aebbf(0x5d1)](_0x27c645['EjFTX']);_0x324e5f['id']=_0x4aebbf(0x2e5)+_0x4aebbf(0x19c)+'hud',_0x324e5f[_0x4aebbf(0x16c)][_0x4aebbf(0x4b5)+'xt']=_0x27c645[_0x4aebbf(0x3e1)](_0x27c645['ClRCK']('posit'+_0x4aebbf(0x385)+'ixed;'+_0x4aebbf(0x1ce)+'8px;b'+'ottom'+_0x4aebbf(0x381)+_0x4aebbf(0x2e2)+'ex:21'+'47483'+'647;d'+'ispla'+_0x4aebbf(0x217)+_0x4aebbf(0x700)+_0x4aebbf(0x2ca)+_0x4aebbf(0x6ba)+_0x4aebbf(0x143)+'umn;g'+_0x4aebbf(0x584)+'x;'+_0x27c645['hHSuT'],_0x27c645['WXwoF']),'box-s'+'hadow'+_0x4aebbf(0x6f8)+_0x4aebbf(0x63c)+_0x4aebbf(0x2fe)+_0x4aebbf(0x5b1)+'000;u'+_0x4aebbf(0x4c9)+_0x4aebbf(0x1d9)+_0x4aebbf(0x1ed)+_0x4aebbf(0x5a0)+'kit-u'+_0x4aebbf(0x4c9)+'elect'+_0x4aebbf(0x1ed)+';');var _0x589eba=_0x27c645['sYvvn'](_0x27c645[_0x4aebbf(0x2ec)](_0x27c645['kVyIq'](_0x27c645[_0x4aebbf(0x2ec)](_0x27c645[_0x4aebbf(0x553)](_0x27c645[_0x4aebbf(0x5c6)](_0x27c645['fxtUZ'](_0x27c645[_0x4aebbf(0x30a)](_0x27c645[_0x4aebbf(0x553)](_0x27c645[_0x4aebbf(0x2c2)]+(_0x4aebbf(0x21a)+_0x4aebbf(0x189)+'color'+':'),_0x2424a5)+_0x27c645['TADPN']+('<butt'+'on\x20da'+'ta-a='+_0x4aebbf(0x61d)+_0x4aebbf(0x16c)+_0x4aebbf(0x6e8)+_0x4aebbf(0x25b)+_0x4aebbf(0x2ce)+_0x4aebbf(0x629)+_0x4aebbf(0x5a4)+_0x4aebbf(0x1d0)+_0x4aebbf(0x597)+_0x4aebbf(0x570)+'d\x20rgb'+_0x4aebbf(0x481)+',143,'+'177,.'+_0x4aebbf(0x702))+_0x27c645['fElnB']+(_0x4aebbf(0x1e6)+_0x4aebbf(0x680)+_0x4aebbf(0x688)+_0x4aebbf(0x6e2)+_0x4aebbf(0x32f)+'range'+'\x22\x20min'+'=\x221\x22\x20'+_0x4aebbf(0x6a9)+_0x4aebbf(0x68a)+_0x4aebbf(0x511)+_0x4aebbf(0x62f)+_0x4aebbf(0x508)+'\x222\x22\x20s'+'tyle='+_0x4aebbf(0x16a)+_0x4aebbf(0x71e)+'x;acc'+'ent-c'+'olor:'),_0x2424a5)+';\x22>',_0x27c645[_0x4aebbf(0x656)]),_0x27c645[_0x4aebbf(0x43b)]),'color'+_0x4aebbf(0x441)+_0x4aebbf(0x6d5)+'order'+'-radi'+'us:6p'+_0x4aebbf(0x4db)+'ding:'+_0x4aebbf(0x3dc)+'px;cu'+_0x4aebbf(0x296)+_0x4aebbf(0x333)+_0x4aebbf(0x31b)+_0x4aebbf(0x2a4)+_0x4aebbf(0x445)+_0x4aebbf(0x66d)+'ap</b'+'utton'+'>')+(_0x4aebbf(0x704)+_0x4aebbf(0x58b)+_0x4aebbf(0x5d4)+_0x4aebbf(0x5f8)+'\x22\x20sty'+_0x4aebbf(0x266)+_0x4aebbf(0x2c5)+_0x4aebbf(0x522)+':auto'+';back'+_0x4aebbf(0x4c6)+'d:tra'+'nspar'+_0x4aebbf(0x40f)+_0x4aebbf(0x50d)+_0x4aebbf(0x555)+'solid'+'\x20rgba'+'(255,'+_0x4aebbf(0x610)+'77,.4'+'5);'),_0x27c645[_0x4aebbf(0x2a8)]),'</div'+'>'),_0x27c645['usgfo']),_0x27c645[_0x4aebbf(0x543)]);_0x324e5f['inner'+'HTML']=_0x589eba;var _0x319eb1=function(_0x5ba1ab){var _0x2d9b9d=_0x4aebbf;return _0x324e5f['query'+'Selec'+'tor'](_0x27c645[_0x2d9b9d(0x515)](_0x27c645[_0x2d9b9d(0x2f1)],_0x5ba1ab)+'\x22]');},_0x40f7d3=_0x319eb1('st'),_0x44b7fc=_0x27c645[_0x4aebbf(0x512)](_0x319eb1,_0x4aebbf(0x24f)),_0x2d185b=_0x319eb1('sp'),_0x3cbaa1=_0x319eb1('fx'),_0x62dbf6=_0x319eb1('fv'),_0x341416=_0x319eb1('bar');if(_0x2d185b)_0x2d185b['oncli'+'ck']=function(){var _0x5da800=_0x4aebbf,_0x43e821={'NKcmZ':function(_0x1ff5fb,_0x29b4f6){return _0x1ff5fb+_0x29b4f6;},'vXDbp':_0x5da800(0x559)+'8a'};_0x5a8d11[_0x5da800(0x6a4)]!==_0x5da800(0x679)?(_0x5c51f4=_0x43e821[_0x5da800(0x5bd)]('hooks'+_0x5da800(0x711)+'d\x20·\x20'+_0xf068e5,'s'),_0x5607b6=_0x43e821['vXDbp']):_0x1db88d(!_0x5e4b7a['on'],_0x5e4b7a['facto'+'r']);};if(_0x3cbaa1)_0x3cbaa1[_0x4aebbf(0x32b)+'ut']=function(){'LPvvs'==='OimfX'?_0x3fa9cb(!![]):_0x1db88d(_0x5e4b7a['on'],parseFloat(_0x3cbaa1['value'])||-0x1df5*0x1+-0x6f2+-0x2*-0x1274);};if(_0x27c645['JtbgM'](_0x319eb1,_0x27c645['MNXja']))_0x319eb1('snap')[_0x4aebbf(0x639)+'ck']=function(){var _0x468ffa=_0x4aebbf;_0x2516f9('snaps'+_0x468ffa(0x3bb));};if(_0x319eb1(_0x27c645['nCXzs']))_0x319eb1(_0x27c645['nCXzs'])[_0x4aebbf(0x639)+'ck']=function(){var _0x5557b1=_0x4aebbf;if(!_0x341416)return;var _0x412f8e=_0x341416[_0x5557b1(0x16c)]['displ'+'ay']===_0x5557b1(0x363);_0x341416[_0x5557b1(0x16c)]['displ'+'ay']=_0x412f8e?'':'none',_0x319eb1(_0x5557b1(0x672))['textC'+'onten'+'t']=_0x412f8e?'-':'+';};return document[_0x4aebbf(0x42e)][_0x4aebbf(0x151)+'dChil'+'d'](_0x324e5f),_0x56e54d={'el':_0x324e5f,'st':_0x40f7d3,'st2':_0x44b7fc,'sp':_0x2d185b,'fx':_0x3cbaa1,'fv':_0x62dbf6},_0x56e54d;}catch(_0x18e7c8){return console['warn'](_0x4aebbf(0x181)+_0x4aebbf(0x583)+_0x4aebbf(0x651)+_0x4aebbf(0x1cf)+'HUD\x20d'+_0x4aebbf(0x14c)+'ed',_0x27c645[_0x4aebbf(0x369)]('color'+':',_0x2424a5),_0x18e7c8),null;}}var _0x1204c5=0x3*-0x6fc+-0x169*-0xc+0x40a;function _0x1db88d(_0x1c1020,_0x1b386c){var _0x563bdf=_0x1a1d69,_0x43adcb=_0x5e4b7a['on'];_0x5e4b7a['on']=!!_0x1c1020;_0x5e4b7a['on']&&!_0x43adcb&&(_0x1b386c===undefined||_0x1b386c===null||Number(_0x1b386c)===-0x1*0x166f+0x815+0x19*0x93)&&(_0x27c645['EHHdh']!==_0x27c645['ghofd']?_0x1b386c=_0x1204c5:_0x60383f[_0x563bdf(0x519)]=_0x27c645['rdrjp'](_0x563bdf(0x22f)+_0x563bdf(0x4be)+_0x563bdf(0x2dc)+_0x563bdf(0x397)+_0x563bdf(0x251)+_0x563bdf(0x4e2)+_0x563bdf(0x21b)+'otrol'+_0x563bdf(0x49f)+_0x563bdf(0x2da)+'cked\x20'+_0x563bdf(0x5c3)+'\x20',_0x27c645[_0x563bdf(0x6de)]));_0x5e4b7a['facto'+'r']=Math[_0x563bdf(0x1e4)](_0x5e4b7a[_0x563bdf(0x4fd)],Math['max'](_0x5e4b7a[_0x563bdf(0x1e4)],Number(_0x1b386c)||0xc*0x55+0x1b2*0xf+0x1d69*-0x1));if(!_0x5e4b7a['on'])_0x5a04d4={};var _0x48d0b4=_0x1be142();if(_0x48d0b4){_0x48d0b4['sp']&&(_0x48d0b4['sp'][_0x563bdf(0x67a)+'onten'+'t']=_0x5e4b7a['on']?'Speed'+_0x563bdf(0x58d):_0x563bdf(0x4b7)+_0x563bdf(0x5b5),_0x48d0b4['sp'][_0x563bdf(0x16c)][_0x563bdf(0x367)+_0x563bdf(0x628)]=_0x5e4b7a['on']?_0x2424a5:_0x27c645[_0x563bdf(0x1d5)],_0x48d0b4['sp'][_0x563bdf(0x16c)][_0x563bdf(0x281)]=_0x5e4b7a['on']?_0x563bdf(0x1d6)+'1b':_0x27c645[_0x563bdf(0x23c)]);if(_0x48d0b4['fx'])_0x48d0b4['fx']['value']=String(_0x5e4b7a[_0x563bdf(0x4cb)+'r']);if(_0x48d0b4['fv'])_0x48d0b4['fv']['textC'+'onten'+'t']=_0x27c645['uxRVt'](_0x5e4b7a[_0x563bdf(0x4cb)+'r'][_0x563bdf(0x4ca)+'ed'](0x3*0xa49+0x3f1*0x9+-0x4253),'x');}}function _0x3bd680(_0x4073d6){var _0x522695=_0x1a1d69,_0x4fad58=_0x27c645[_0x522695(0x6ec)](_0x1be142);if(!_0x4fad58||!_0x4fad58['st'])return;try{var _0x4ef4e7=Object[_0x522695(0x403)](_0x4073d6&&_0x4073d6[_0x522695(0x510)+_0x522695(0x526)]||{})['lengt'+'h'],_0x4de5e5=_0x4073d6&&_0x4073d6[_0x522695(0x21d)]||null,_0x25730f=_0x4de5e5?_0x4de5e5['enemy'+_0x522695(0x6b8)]||-0xf2b+-0x7*-0x34a+0x7db*-0x1:0x385*-0x5+0x2e9*0x7+-0x2c6,_0x1fdcf0=_0x39fbb5?_0x27c645[_0x522695(0x1fa)](_0x39fbb5[_0x522695(0x2fc)+'r'][_0x522695(0x3c3)+_0x522695(0x2ef)],-0x184eac+-0xff9*0x17e+0x40243a)[_0x522695(0x4ca)+'ed'](-0x146f+0x1*0x10af+0x3c0)+'MB':_0x27c645['HPTdI'],_0x20c8c6=_0x27c645['YwGyj'](_0x27c645[_0x522695(0x582)](_0x27c645['MqAYV'](_0x27c645[_0x522695(0x650)](_0x27c645['JMKxC'](_0x27c645[_0x522695(0x3d3)](_0x27c645[_0x522695(0x71f)]('v',_0x4073d6&&_0x4073d6[_0x522695(0x668)+'on']||_0x151742)+('\x20\x20hoo'+_0x522695(0x279)),_0x4073d6&&_0x4073d6[_0x522695(0x727)+'Appli'+'ed']||-0xb35*0x1+0x13ca+0x1*-0x895),'/')+(_0x4073d6&&_0x4073d6[_0x522695(0x727)+'Total']||0x1b69+-0x30*0x7b+0x173*-0x3),_0x522695(0x499)+'s\x20')+_0x4ef4e7,_0x27c645[_0x522695(0x1b3)]),_0x1fdcf0),_0x522695(0x3e6)+_0x522695(0x6cb))+_0x3a914b;_0x4fad58['st'][_0x522695(0x67a)+'onten'+'t']=_0x20c8c6;var _0x2f28e1=_0x4fad58['st2'];_0x2f28e1&&(_0x27c645[_0x522695(0x3bf)]===_0x27c645[_0x522695(0x3bf)]?(_0x2f28e1[_0x522695(0x67a)+_0x522695(0x293)+'t']=_0x27c645[_0x522695(0x420)](_0x25730f,0xf24+0x189*-0xd+-0x89*-0x9)?_0x27c645['lCazY'](_0x522695(0x405)+_0x522695(0x5d6),_0x25730f)+(_0x4de5e5&&_0x4de5e5[_0x522695(0x1f2)+'a']?_0x27c645[_0x522695(0x5d9)]('\x20\x20cam'+'\x20',_0x4de5e5[_0x522695(0x1f2)+'aFrom']):_0x27c645[_0x522695(0x48b)]):'no\x20en'+'emies'+_0x522695(0x179)+_0x522695(0x638)+_0x522695(0x3ed)+_0x522695(0x237)+(_0x4de5e5&&_0x4de5e5[_0x522695(0x1f2)+'a']?_0x4de5e5[_0x522695(0x1f2)+'aFrom']:'-'),_0x2f28e1[_0x522695(0x16c)]['color']=_0x25730f>-0x3a*-0x1d+0x11c7+-0x1859?'#7ee0'+'a8':_0x27c645['WhIkb']):(_0x16692d++,_0x48dcde[_0x522695(0x697)]=!![]));}catch(_0x31077b){}}window['addEv'+_0x1a1d69(0x44b)+_0x1a1d69(0x3d4)+'r'](_0x1a1d69(0x6d8)+'wn',function(_0x3598b6){var _0x50c8c1=_0x1a1d69,_0x5c7368={'PzfIx':function(_0x1521d8,_0x219d13,_0x52502a){return _0x1521d8(_0x219d13,_0x52502a);}};if(!_0x3598b6)return;try{if(_0x3598b6[_0x50c8c1(0x290)]==='F9'){if('cfcwM'===_0x50c8c1(0x1b7))try{var _0x325309=_0x8b559f&&_0x256118[_0x50c8c1(0x6b9)];if(!_0x325309||_0x325309[_0x50c8c1(0x45b)+_0x50c8c1(0x40e)]!==_0x4457b5||_0x325309['kind']!==_0x50c8c1(0x618))return;_0x5c7368['PzfIx'](_0x3f0d77,_0x325309['cmd'],_0x325309[_0x50c8c1(0x63b)]);}catch(_0x3a5ae0){}else{_0x3598b6[_0x50c8c1(0x1ba)+'ntDef'+_0x50c8c1(0x546)](),_0x2516f9(_0x27c645[_0x50c8c1(0x455)]);return;}}if(_0x3598b6[_0x50c8c1(0x290)]==='F7'){_0x3598b6['preve'+'ntDef'+_0x50c8c1(0x546)](),_0x1db88d(!_0x5e4b7a['on'],_0x5e4b7a['facto'+'r']);return;}if(_0x27c645[_0x50c8c1(0x428)](_0x3598b6[_0x50c8c1(0x290)],'F8')){_0x3598b6[_0x50c8c1(0x1ba)+_0x50c8c1(0x45d)+'ault'](),_0x1db88d(_0x5e4b7a['on'],_0x5e4b7a[_0x50c8c1(0x4cb)+'r']+(0x11e5+0x8*-0x304+0x63b+0.5));return;}if(_0x27c645[_0x50c8c1(0x283)](_0x3598b6[_0x50c8c1(0x290)],'F6')){if('LncSl'===_0x50c8c1(0x24a))_0x3726bb[_0x50c8c1(0x49e)+'dule']=![],_0x606d84['heapU'+'8']=![],_0x16d81f['heapB'+_0x50c8c1(0x31c)]=0x1cf8*0x1+0x1b*0x85+0x4c7*-0x9;else{_0x3598b6['preve'+'ntDef'+_0x50c8c1(0x546)](),_0x1db88d(_0x5e4b7a['on'],_0x5e4b7a['facto'+'r']-(0xd*0x2ff+0x3*-0xc92+-0x13d+0.5));return;}}}catch(_0x2f892b){}},!![]);function _0x12803f(){var _0x4950ec=_0x1a1d69,_0x3c9145={'FGsis':_0x27c645[_0x4950ec(0x590)],'WvfDe':_0x27c645[_0x4950ec(0x470)],'bkheQ':function(_0x3b92c8,_0x3521ff,_0x33e0ef,_0x4cdd68){return _0x3b92c8(_0x3521ff,_0x33e0ef,_0x4cdd68);},'WwgAu':function(_0x44fd70,_0x11a88e){return _0x44fd70+_0x11a88e;},'JksbL':function(_0x5aaf65,_0x185ef2){var _0x548fcf=_0x4950ec;return _0x27c645[_0x548fcf(0x1ad)](_0x5aaf65,_0x185ef2);},'ENLow':function(_0x234dec,_0x4c2f4e){return _0x234dec>_0x4c2f4e;},'mjuOL':function(_0x2e2c53,_0x10c487){var _0x1d1e99=_0x4950ec;return _0x27c645[_0x1d1e99(0x5f1)](_0x2e2c53,_0x10c487);},'Dkgrb':_0x4950ec(0x286)},_0x19c3be=window['Unity'+'WebMo'+'dkit']&&window['Unity'+_0x4950ec(0x586)+'dkit'][_0x4950ec(0x2a2)+'me']||null,_0x552a9c=_0x19c3be&&_0x19c3be[_0x4950ec(0x6c0)+_0x4950ec(0x4e8)+_0x4950ec(0x3c4)],_0x493bc8=_0x552a9c&&_0x552a9c[_0x4950ec(0x631)+'tData'],_0x1765fa={},_0x520cc3=[];for(var _0x1e0c67 in _0xefb98f){_0x1765fa[_0x1e0c67]=_0x27c645[_0x4950ec(0x582)]('0x',_0xefb98f[_0x1e0c67][_0x4950ec(0x2b8)]['toStr'+'ing'](0x2278+-0x389+-0x1edf));if(_0xefb98f[_0x1e0c67]['repla'+'ced'])_0x520cc3['push'](_0x1e0c67);}var _0x148c45={};for(var _0x2f2c21 in _0xefb98f)_0x148c45[_0x2f2c21]=_0x27c645[_0x4950ec(0x230)](_0x2a7a59,_0xefb98f[_0x2f2c21][_0x4950ec(0x2b8)]);var _0x15bdc0={},_0x6d2885=null;try{_0x15bdc0=_0x46b9dc();}catch(_0x46c6b4){_0x6d2885=_0x27c645[_0x4950ec(0x213)](String,_0x46c6b4&&_0x46c6b4['messa'+'ge']||_0x46c6b4);}var _0x1b2d65={'version':_0x151742,'when':new Date()[_0x4950ec(0x192)+_0x4950ec(0x261)+'g'](),'elapsedMs':Date['now']()-_0x3439fb,'frame':location[_0x4950ec(0x627)]['slice'](0x20*0x17+-0x7*-0x8f+0x243*-0x3,-0x14a3*-0x1+-0x22e4+0x1*0xeb9),'host':_0x584430,'frameRole':_0x73e1ab,'uwmk':!!_0x19c3be,'il2CppContext':!!_0x552a9c,'typeCount':_0x493bc8?Object['keys'](_0x493bc8)[_0x4950ec(0x220)+'h']:null,'arm':_0x4f1617,'assemblies':_0x1e1e14,'hooksTotal':_0x12f761[_0x4950ec(0x220)+'h'],'hooksApplied':_0x2943e0(),'hooksResolved':_0x5f5098(),'hooksRegisteredAtArm':_0x4f1617[_0x4950ec(0x727)+_0x4950ec(0x19d)+'tered']||-0x107f+0x2143+-0x10c4,'hookErrors':_0x217e3d['slice'](-0x24d+-0x29*-0x3e+-0x7a1,-0x1026+0x2*-0x977+0x8c7*0x4),'instances':_0x1765fa,'classNames':_0x148c45,'instancesReplaced':_0x520cc3,'hookFireProof':_0x33160d,'survey':_0x15bdc0,'actkKeys':_0x4eb734,'surveyRows':Object['keys'](_0x15bdc0)[_0x4950ec(0x699)+'e'](function(_0x4147d7,_0xfdc209){var _0x4fc248=_0x4950ec;return _0x27c645[_0x4fc248(0x404)](_0x4147d7,_0x15bdc0[_0xfdc209][_0x4fc248(0x220)+'h']);},0x1cb2+-0x10*-0x197+0xa9*-0x52),'reads':{'ok':_0x3a73b0['ok'],'failed':_0x3a73b0['faile'+'d'],'lastError':_0x3a73b0[_0x4950ec(0x365)+'rror'],'source':_0x3a73b0['sourc'+'e']},'identity':_0x27c645[_0x4950ec(0x195)](_0x1f2424),'globals':_0x256a74(),'wasmMemory':{'captured':!!_0x39fbb5,'atMs':_0x46ad92,'bytes':(function(){var _0x10ba66=_0x4950ec;try{if(_0x3c9145[_0x10ba66(0x5b8)](_0x3c9145[_0x10ba66(0x46b)],_0x3c9145['Dkgrb'])){if(_0x16a1c1['lengt'+'h'])return!![];if(!_0x1f982e['Unity'+_0x10ba66(0x586)+_0x10ba66(0x649)]||!_0x5e1260[_0x10ba66(0x490)+'WebMo'+_0x10ba66(0x649)]['Runti'+'me'])return![];var _0x17e946=_0xe30b4b[_0x10ba66(0x490)+'WebMo'+'dkit']['Runti'+'me'];if(!_0x17e946['plugi'+'ns']||!_0x17e946['plugi'+'ns']['lengt'+'h'])return![];_0x4a4762=_0x8ae6aa['Unity'+_0x10ba66(0x586)+_0x10ba66(0x649)]['Value'+'Wrapp'+'er'],_0x55d3ae=_0x2754a9||_0x17e946[_0x10ba66(0x4d1)+'ns'][_0x17e946[_0x10ba66(0x4d1)+'ns'][_0x10ba66(0x220)+'h']-(0x27c*-0xb+-0xb*0x32f+0x3e5a*0x1)];if(!_0x293106||typeof _0x4859ec[_0x10ba66(0x2a7)+'refix']!==_0x3c9145['FGsis'])return![];for(var _0x3ce2be=-0x52a*-0x1+0x163c+0x15*-0x14e;_0x3ce2be<_0x5e29b5[_0x10ba66(0x220)+'h'];_0x3ce2be++){var _0x3e2896=_0x1ed366[_0x3ce2be];try{var _0x3677a4=_0x13f8f5['hookP'+_0x10ba66(0x234)]({'typeName':_0x3e2896[_0x10ba66(0x6df)],'methodName':'Updat'+'e','params':[_0x10ba66(0x450),_0x3c9145[_0x10ba66(0x731)]],'returnType':_0x340e0f},_0x3c9145['bkheQ'](_0x46a78c,_0x3e2896['type'],_0x3e2896[_0x10ba66(0x2b7)],_0x3e2896[_0x10ba66(0x67f)]));_0x18d7e4[_0x10ba66(0x1e7)]({'type':_0x3e2896[_0x10ba66(0x6df)],'hook':_0x3677a4,'keep':_0x3e2896['keep']});}catch(_0x531a76){_0xf4c94d[_0x10ba66(0x1e7)](_0x3c9145['WwgAu'](_0x3e2896['type']+':\x20',_0x3c9145['JksbL'](_0x1fb5e0,_0x531a76&&_0x531a76[_0x10ba66(0x6fa)+'ge']||_0x531a76)[_0x10ba66(0x2fa)](0xd0*-0x1b+-0x8a5*0x1+0x1*0x1e95,-0x83*-0x30+0x1724+0x5c*-0x83)));}}return _0x3c9145['ENLow'](_0x59ae1f['lengt'+'h'],-0x1b80+0x1294+-0x2*-0x476);}else return _0x39fbb5&&_0x39fbb5['buffe'+'r']?_0x39fbb5['buffe'+'r']['byteL'+'ength']:-0xc67+0x1*-0x14b3+0x211a;}catch(_0x479c02){return 0x2*0xb3f+-0x18df+-0x3*-0xcb;}}()),'exportKeys':_0xd0e42e},'diff':_0x5df0c4[_0x4950ec(0x2fa)](-0x1c08+0x1988+0xa*0x40,-0x3c0+0x1239+0xe51*-0x1),'speed':{'on':_0x5e4b7a['on'],'factor':_0x5e4b7a[_0x4950ec(0x4cb)+'r'],'writes':_0x3a914b,'scaled':_0xc5429f[_0x4950ec(0x2fa)](0x1*0x195d+-0x1*0x1cba+-0x1*-0x35d,0x57e+0xd*-0x2c4+0x1e86),'skipped':_0x244e82[_0x4950ec(0x2fa)](0x5*0x286+-0x1cd*-0x1+-0xe6b,-0xd08+0x46c*-0x1+0x1184)},'esp':_0x27c645['iOCPd'](_0x346200),'uwmkLog':_0x4b3186[_0x4950ec(0x2fa)](0x107c+0x125*-0x7+-0x879,0x4*0x7f6+-0x179+0x2c1*-0xb),'warnings':[]};if(_0x6d2885)_0x1b2d65[_0x4950ec(0x550)+'ngs']['push'](_0x4950ec(0x54f)+'y\x20fai'+_0x4950ec(0x447)+_0x6d2885);if(_0x4f1617['error'])_0x1b2d65[_0x4950ec(0x550)+_0x4950ec(0x30e)]['push'](_0x27c645[_0x4950ec(0x515)]('UWMK\x20'+_0x4950ec(0x3db)+_0x4950ec(0x219)+_0x4950ec(0x447),_0x4f1617[_0x4950ec(0x1e3)]));_0x1b2d65[_0x4950ec(0x54f)+'yRows']===-0x79*0x1b+0x1*-0xb83+0x1846&&Object['keys'](_0x1b2d65[_0x4950ec(0x510)+_0x4950ec(0x526)])[_0x4950ec(0x220)+'h']>0x1d00+0x1e15+-0x25d*0x19&&_0x1b2d65[_0x4950ec(0x550)+_0x4950ec(0x30e)][_0x4950ec(0x1e7)]('captu'+'red\x20'+Object[_0x4950ec(0x403)](_0x1b2d65[_0x4950ec(0x510)+'nces'])['lengt'+'h']+_0x27c645[_0x4950ec(0x426)]+(_0x3a73b0[_0x4950ec(0x365)+'rror']?_0x27c645[_0x4950ec(0x156)]+_0x3a73b0[_0x4950ec(0x365)+_0x4950ec(0x157)]:'No\x20re'+_0x4950ec(0x6b0)+'iled,'+_0x4950ec(0x6b5)+'very\x20'+_0x4950ec(0x531)+_0x4950ec(0x449)+_0x4950ec(0x5a5)+_0x4950ec(0x551)+'y\x20typ'+'e.'));_0x1b2d65[_0x4950ec(0x329)+_0x4950ec(0x33d)]&&_0x1b2d65[_0x4950ec(0x329)+'ity'][_0x4950ec(0x1f1)+_0x4950ec(0x46a)]===![]&&_0x1b2d65[_0x4950ec(0x550)+_0x4950ec(0x30e)]['push'](_0x27c645[_0x4950ec(0x3dd)](_0x27c645['YDenA'](_0x27c645[_0x4950ec(0x616)](_0x4950ec(0x434)+_0x4950ec(0x19b)+_0x4950ec(0x29e)+'PY\x20TO'+_0x4950ec(0x47e)+_0x4950ec(0x3a6)+'ndow.'+_0x4950ec(0x490)+_0x4950ec(0x586)+'dkit.'+_0x4950ec(0x380)+_0x4950ec(0x2a2)+'me\x20we'+'\x20arme'+'d\x20was'+'\x20',_0x27c645[_0x4950ec(0x5e6)]),_0x4950ec(0x5c8)+_0x4950ec(0x3d1)+_0x4950ec(0x652)+_0x4950ec(0x65d)+_0x4950ec(0x2a1)+_0x4950ec(0x669)+_0x4950ec(0x1a8)+_0x4950ec(0x26f)+_0x4950ec(0x3a2)+_0x4950ec(0x17e)+_0x4950ec(0x2fb)+_0x4950ec(0x3c6)+_0x4950ec(0x312)+'r\x20'),_0x4950ec(0x581)+'a/UWM'+'K\x20scr'+_0x4950ec(0x51f)+'n\x20Tam'+_0x4950ec(0x48e)+_0x4950ec(0x247)+'and\x20h'+'ard-r'+'eload'+'.'));_0x1b2d65['ident'+'ity']&&_0x1b2d65[_0x4950ec(0x329)+'ity'][_0x4950ec(0x4d1)+_0x4950ec(0x402)+'imeIs'+_0x4950ec(0x411)+'ted']===![]&&_0x1b2d65[_0x4950ec(0x550)+_0x4950ec(0x30e)][_0x4950ec(0x1e7)](_0x27c645['LMVEB']+(_0x4950ec(0x4c4)+'st\x20a\x20'+'diffe'+'rent\x20'+'Runti'+'me\x20in'+_0x4950ec(0x60f)+_0x4950ec(0x2f4)+_0x4950ec(0x371)+_0x4950ec(0x214)+'al\x20no'+_0x4950ec(0x3ba)+'oses.'));if(_0x1b2d65[_0x4950ec(0x21d)]&&_0x1b2d65['esp'][_0x4950ec(0x519)])_0x1b2d65[_0x4950ec(0x550)+_0x4950ec(0x30e)]['push'](_0x4950ec(0x2b1)+_0x1b2d65['esp']['note']);if(_0x1b2d65['globa'+'ls']&&!_0x1b2d65[_0x4950ec(0x436)+'ls'][_0x4950ec(0x229)+'8']){if(_0x4950ec(0x2fd)!==_0x4950ec(0x2fd))_0xe2d4c4[_0x4950ec(0x49e)+_0x4950ec(0x5b2)]=!!(_0x17c9ad&&_0x5d9a40['Modul'+'e']),_0x3ae966['heapU'+'8']=!!(_0x571389&&_0x1365f7['Modul'+'e']&&_0x202372[_0x4950ec(0x148)+'e']['HEAPU'+'8']),_0x50dfd1[_0x4950ec(0x379)+'ytes']=_0x36fc40[_0x4950ec(0x229)+'8']?_0x39df34[_0x4950ec(0x148)+'e'][_0x4950ec(0x1c4)+'8'][_0x4950ec(0x220)+'h']:0x722+0xd*0x19e+-0x1c28;else{var _0x4c1ff3='';_0x1b2d65[_0x4950ec(0x72d)+'irePr'+'oof']&&(_0x4c1ff3=_0x27c645[_0x4950ec(0x593)](_0x27c645['TTdxa'](_0x27c645['MttyE']('\x20A\x20ho'+_0x4950ec(0x35b)+_0x4950ec(0x36e)+'t\x20',_0x1b2d65[_0x4950ec(0x72d)+_0x4950ec(0x392)+_0x4950ec(0x167)][_0x4950ec(0x5e4)]),_0x27c645['mRzXx'])+_0x1b2d65['hookF'+'irePr'+_0x4950ec(0x167)]['origi'+_0x4950ec(0x172)+'nc']+(_0x4950ec(0x252)+_0x4950ec(0x4e5)+_0x4950ec(0x475)+_0x4950ec(0x3b8))+_0x1b2d65['hookF'+_0x4950ec(0x392)+_0x4950ec(0x167)]['resol'+'veGam'+'eAtFi'+'re']+_0x27c645[_0x4950ec(0x41a)],_0x1b2d65[_0x4950ec(0x72d)+_0x4950ec(0x392)+_0x4950ec(0x167)][_0x4950ec(0x5f4)+_0x4950ec(0x323)+_0x4950ec(0x539)+'e']||_0x4950ec(0x363))+(_0x4950ec(0x171)+_0x4950ec(0x34b)+_0x4950ec(0x687)+'ence\x20'+_0x4950ec(0x3bd)+'ed\x20th'+_0x4950ec(0x696)+_0x4950ec(0x62b)+'not\x20r'+_0x4950ec(0x22c)+'ble\x20n'+'ow.')),_0x1b2d65[_0x4950ec(0x550)+_0x4950ec(0x30e)][_0x4950ec(0x1e7)](_0x27c645['UpcQT'](_0x27c645['NPIbR']('Unity'+_0x4950ec(0x521)+_0x4950ec(0x1f9)+_0x4950ec(0x3fd)+'esolv'+_0x4950ec(0x567)+'t\x20(so'+_0x4950ec(0x287)+'\x20'+(_0x1b2d65[_0x4950ec(0x436)+'ls']['gameS'+'ource']||_0x4950ec(0x363)),_0x27c645[_0x4950ec(0x63f)])+(_0x4950ec(0x35a)+_0x4950ec(0x461)+'\x20stay'+_0x4950ec(0x682)+_0x4950ec(0x701)+_0x4950ec(0x1ec)+_0x4950ec(0x55d)+_0x4950ec(0x3f1)+'ect\x20w'+_0x4950ec(0x734)+'odule'+'.HEAP'+'U8\x20is'+'\x20reac'+_0x4950ec(0x3df)+'.'),_0x4c1ff3));}}(_0x1b2d65[_0x4950ec(0x436)+'ls']&&!_0x1b2d65['globa'+'ls']['value'+_0x4950ec(0x6c1)+'er']||_0x27c645[_0x4950ec(0x57c)](_0x1b2d65['globa'+'ls'][_0x4950ec(0x3d0)+'Wrapp'+'er'],_0x4950ec(0x1ef)+'ined'))&&_0x1b2d65[_0x4950ec(0x550)+_0x4950ec(0x30e)][_0x4950ec(0x1e7)](_0x27c645[_0x4950ec(0x6e5)]);if(_0x27c645[_0x4950ec(0x1c1)](_0x1b2d65[_0x4950ec(0x727)+_0x4950ec(0x6b6)],-0x19ef*-0x1+0x206f+-0xf1*0x3e)&&_0x1b2d65[_0x4950ec(0x727)+_0x4950ec(0x1da)+'ed']===-0x1f31+-0x125f+-0xf4*-0x34&&_0x493bc8){if(_0x27c645[_0x4950ec(0x52f)]!=='tsIAD'){if(_0x27c645[_0x4950ec(0x4ea)](_0x1b2d65['hooks'+'Resol'+'ved'],-0x8cc+0x2ef*0x9+-0x119b))_0x1b2d65[_0x4950ec(0x550)+'ngs'][_0x4950ec(0x1e7)](_0x27c645['vdcwM'](_0x27c645[_0x4950ec(0x650)](_0x4950ec(0x4b9)+_0x1b2d65[_0x4950ec(0x727)+_0x4950ec(0x6b6)],_0x4950ec(0x748)+_0x4950ec(0x69e)+_0x4950ec(0x671)+_0x4950ec(0x3ea)+_0x4950ec(0x1d7)+'UWMK.'+'\x20The\x20'+'apply'+'\x20pass'+'\x20'),_0x27c645[_0x4950ec(0x2b3)])+('so\x20ho'+_0x4950ec(0x33f)+_0x4950ec(0x270)+_0x4950ec(0x3f0)+'after'+'\x20it\x20a'+'re\x20ig'+_0x4950ec(0x500)+_0x4950ec(0x49b)+_0x4950ec(0x3cc)+_0x4950ec(0x504)+'f\x20the'+'\x20page'+'.\x20')+_0x27c645[_0x4950ec(0x65c)]+_0x1b2d65['hooks'+_0x4950ec(0x19d)+_0x4950ec(0x67d)+'AtArm']+_0x27c645['ZoalE']);else{if('DwhnH'!==_0x27c645[_0x4950ec(0x3ef)])return _0x16e3fc(_0x22b83a);else _0x1b2d65[_0x4950ec(0x550)+'ngs']['push'](_0x27c645[_0x4950ec(0x6ab)](_0x27c645[_0x4950ec(0x2ec)](_0x27c645[_0x4950ec(0x4a4)]+_0x1b2d65[_0x4950ec(0x727)+_0x4950ec(0x49a)+_0x4950ec(0x47d)],_0x4950ec(0x2af)),_0x1b2d65['hooks'+_0x4950ec(0x6b6)])+(_0x4950ec(0x748)+_0x4950ec(0x51a)+_0x4950ec(0x26a)+'able\x20'+'index'+_0x4950ec(0x24e)+'appli'+_0x4950ec(0x6a5)+_0x4950ec(0x394)+'he\x20si'+'gnatu'+_0x4950ec(0x3f7))+('(this'+_0x4950ec(0x1af)+_0x4950ec(0x1e8)+_0x4950ec(0x53d)+'->\x20vo'+'id\x20do'+'es\x20no'+_0x4950ec(0x2ff)+_0x4950ec(0x4b8)+_0x4950ec(0x2bc)+'ild.'));}}else return null;}return _0x1b2d65['hooks'+'Appli'+'ed']>0x3*-0x26+-0x1f30+-0x2*-0xfd1&&!_0x1b2d65[_0x4950ec(0x510)+_0x4950ec(0x526)]['FPSco'+'ntrol'+'ler']&&_0x1b2d65['warni'+_0x4950ec(0x30e)][_0x4950ec(0x1e7)](_0x27c645['aTzxu']+('Eithe'+'r\x20you'+'\x20are\x20'+'not\x20i'+'n\x20a\x20r'+_0x4950ec(0x5e1)+_0x4950ec(0x21f)+'he\x20ho'+_0x4950ec(0x70d)+_0x4950ec(0x409)+_0x4950ec(0x43c)+'ong\x20o'+'verlo'+'ad.')),_0x1b2d65['insta'+_0x4950ec(0x703)+_0x4950ec(0x528)+'ed']['lengt'+'h']&&_0x1b2d65['warni'+_0x4950ec(0x30e)][_0x4950ec(0x1e7)](_0x27c645[_0x4950ec(0x736)](_0x4950ec(0x1ac)+_0x4950ec(0x1b0)+_0x4950ec(0x227)+_0x4950ec(0x378)+'captu'+'re\x20(r'+'espaw'+_0x4950ec(0x342),_0x1b2d65[_0x4950ec(0x510)+_0x4950ec(0x703)+_0x4950ec(0x528)+'ed'][_0x4950ec(0x271)](',\x20'))),_0x1b2d65;}function _0x44cff6(_0x33069a){var _0x3615b2=_0x1a1d69;console['log'](_0x3615b2(0x181)+_0x3615b2(0x583)+_0x3615b2(0x193)+'lWarz'+_0x3615b2(0x47c)+'rt',_0x3615b2(0x281)+':'+_0x2424a5+_0x27c645['BMKlg'],_0x33069a),console['log'](_0x27c645[_0x3615b2(0x644)](_0x27c645[_0x3615b2(0x739)](_0x243a88+'\x0a',JSON['strin'+'gify'](_0x33069a,null,-0x2b*0xad+0x22d*0xb+-0x1*-0x521))+'\x0a',_0x391ae8));try{_0x3bd680(_0x33069a);}catch(_0x4e5edb){}_0x27c645[_0x3615b2(0x50b)](_0xdd3255,'repor'+'t',{'report':_0x33069a});}function _0x38e772(){var _0x46d310=_0x1a1d69;try{return _0x27c645['SPeNn'](_0x12803f);}catch(_0x5c9927){return{'version':_0x151742,'when':new Date()[_0x46d310(0x192)+_0x46d310(0x261)+'g'](),'elapsedMs':Date[_0x46d310(0x316)]()-_0x3439fb,'host':_0x584430,'uwmk':!!(window['Unity'+_0x46d310(0x586)+'dkit']&&window[_0x46d310(0x490)+_0x46d310(0x586)+'dkit'][_0x46d310(0x2a2)+'me']),'il2CppContext':![],'arm':_0x4f1617,'hooksTotal':_0x12f761[_0x46d310(0x220)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x27c645[_0x46d310(0x73e)](String,_0x5c9927&&_0x5c9927['messa'+'ge']||_0x5c9927)};}}function _0x3a090d(){var _0x3b9922=_0x1a1d69,_0x317da6={'MbPrk':function(_0x2f16da){return _0x2f16da();},'BicXB':function(_0x52412c,_0x221643){return _0x27c645['Tddsx'](_0x52412c,_0x221643);},'rcXgw':function(_0x5b3df0){return _0x5b3df0();},'qQgRC':function(_0x450219,_0x150105){return _0x450219<_0x150105;},'sIdrh':function(_0x1845f3,_0x486b9d,_0x4cd098){var _0x51fce3=_0x5e49;return _0x27c645[_0x51fce3(0x3cb)](_0x1845f3,_0x486b9d,_0x4cd098);}},_0x107370=-0x7*-0x3c7+-0x1caa+0x239;_0x44cff6(_0x27c645[_0x3b9922(0x3f9)](_0x38e772)),function _0x1a5c73(){var _0x263fcb=_0x3b9922;if(!_0x12f761['lengt'+'h'])try{_0x317da6[_0x263fcb(0x1f5)](_0x18edbc);}catch(_0x387b45){}_0x107370++,_0x317da6['BicXB'](_0x44cff6,_0x317da6[_0x263fcb(0x4ce)](_0x38e772));if(!_0x12f761['lengt'+'h']&&_0x317da6[_0x263fcb(0x1a7)](_0x107370,0x85a+-0x1753+0x1*0x1025))setTimeout(_0x1a5c73,-0x1fef+-0x2452+0x195b*0x3);else{if(!Object[_0x263fcb(0x403)](_0xefb98f)['lengt'+'h']&&_0x107370<0x833+0x1579*0x1+-0x1c80)_0x317da6['sIdrh'](setTimeout,_0x1a5c73,-0x4*-0x31d+0x951*-0x1+-0x15*-0x39);else setTimeout(_0x1a5c73,-0x1fdb+0xf5*0x1+-0x38f*-0xa);}}();}if(document[_0x1a1d69(0x42e)])_0x3a090d();else document['addEv'+_0x1a1d69(0x44b)+'stene'+'r'](_0x1a1d69(0x43f)+_0x1a1d69(0x1e5)+_0x1a1d69(0x17b)+'d',_0x3a090d,{'once':!![]});if(document[_0x1a1d69(0x42e)])try{'lkkzZ'!==_0x1a1d69(0x592)?_0x4ecef0(!_0x27d90a['on'],_0x2aef03[_0x1a1d69(0x4cb)+'r']):_0x27c645['MXPCE'](_0x1be142);}catch(_0x46e0a6){}else document['addEv'+_0x1a1d69(0x44b)+'stene'+'r']('DOMCo'+_0x1a1d69(0x1e5)+_0x1a1d69(0x17b)+'d',function(){var _0x22f792=_0x1a1d69;if(_0x27c645[_0x22f792(0x591)](_0x27c645[_0x22f792(0x37d)],_0x27c645['SyMLw']))return _0x4c4d02[0x56c+0x63d*0x3+-0x1823]=_0x162174,_0x22121b[0xa15+0x9f2*-0x3+0x185*0xd];else try{_0x1be142();}catch(_0x17336d){}},{'once':!![]});})()));
