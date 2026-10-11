// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.9.15
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

function _0x224c(_0x4892a5,_0x38d2f6){_0x4892a5=_0x4892a5-(0x20d3+0x3f7+-0x245f*0x1);var _0x4974ca=_0x150e();var _0x1bfe04=_0x4974ca[_0x4892a5];if(_0x224c['thlghm']===undefined){var _0x27071e=function(_0x33bdfa){var _0x5d9f0c='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x5affdb='',_0x574091='';for(var _0x8da9c6=-0x4*0x47b+0x1c10+-0xa24,_0x515847,_0x4d283d,_0x229389=0x4*0x73c+-0x156*-0x15+-0x38fe;_0x4d283d=_0x33bdfa['charAt'](_0x229389++);~_0x4d283d&&(_0x515847=_0x8da9c6%(0x1*0x1927+-0xab6*0x2+-0x3b7)?_0x515847*(-0x23*0xc1+0xce*-0x24+-0x16d*-0x27)+_0x4d283d:_0x4d283d,_0x8da9c6++%(0x139a+0x10a5*-0x1+-0x2f1))?_0x5affdb+=String['fromCharCode'](-0x1*-0x17b2+0x1e51+-0x3504&_0x515847>>(-(-0x16cd+-0x696+-0x1*-0x1d65)*_0x8da9c6&0x1a02*0x1+-0x78*-0x52+-0x4c*0xd9)):0x1*-0xb23+-0xe59+0x197c){_0x4d283d=_0x5d9f0c['indexOf'](_0x4d283d);}for(var _0x5aa8fb=0x1*-0x142f+0x4*0x650+-0x1*0x511,_0xb0ea5f=_0x5affdb['length'];_0x5aa8fb<_0xb0ea5f;_0x5aa8fb++){_0x574091+='%'+('00'+_0x5affdb['charCodeAt'](_0x5aa8fb)['toString'](-0x491*0x4+0x694+0x8*0x178))['slice'](-(-0x1*0x5d9+-0x6ce*-0x5+0x1c2b*-0x1));}return decodeURIComponent(_0x574091);};_0x224c['NeodfP']=_0x27071e,_0x224c['lkEFsj']={},_0x224c['thlghm']=!![];}var _0x1c8de7=_0x4974ca[0xae1*0x1+0x3e6+-0xec7],_0x173240=_0x4892a5+_0x1c8de7,_0x39a1bf=_0x224c['lkEFsj'][_0x173240];return!_0x39a1bf?(_0x1bfe04=_0x224c['NeodfP'](_0x1bfe04),_0x224c['lkEFsj'][_0x173240]=_0x1bfe04):_0x1bfe04=_0x39a1bf,_0x1bfe04;}function _0x150e(){var _0x272ed5=['AM9PBG','CMeTC3C','DenVBg8','mNWXn3W','ze1xzNa','Ce10B3y','ohb4ksK','WOFcK8ktWOFcHW','ywnLlem','khmPigq','lwHPBNq','AwzLig8','idHWEdS','sM5tr08','rennuNO','q01c','BMTjC3q','zxiGyM8','yMvNAw4','CMuGkhi','mcbVzIa','CMfWoYi','ruPAEMy','ys1IB3G','zwz0oMe','DgG6mdS','r0vty3y','zgvYlxi','lde1nYW','nhWZFdu','BhvLica','CM9SBgu','Cg9iq00','q0z5BMy','BwvTB3i','u3rYAw4','mNb4o3a','z2H0oJi','D2fZBva','ig9Ul28','t05yywm','qLHmuKm','zYbZy3i','AgL0zs0','B2SGEwu','ihjLywm','WPhcI8kjWPtcKG','B3qGD2K','mtrWEdS','WOBcHSkmWPtcIW','Aw5Lza','o2nVBg8','ugvHCLi','rxjVA1O','wLfbu3y','idzWEca','lcbnzxq','C3rPzfG','lxnPEMu','BgjQqNO','rxfvv3y','Fdj8m3W','tLjyB0u','Fdn8mG','ztOXnha','AgvSza','y3rZimk3','Aw5KzxG','y29MB3i','B3bLBG','t3jkD0W','iMjHy2S','D1HHqLe','B3i6CMC','DhKGAw4','Bwvhyw0','C3rHBMm','mJG7','A2v5vxm','zsGPlMu','mJKYuxDQtMXh','yMXLig4','nsaWlti','CMvSyxK','igHHy2S','lxnOywq','CMvcEfq','u2nPDM8','rwXTuue','teD0ww8','WO7cI8koWPhcJa','uMvWB3i','Fdn8n3W','CM5PBMC','s3LRzvm','Ag9VAW','DMvhyw0','Bxjlr2K','BM5VDca','oJOTD2u','DgG9iJe','iIbZDgu','CgfJAxq','AwzMzxi','ihbVC3q','rKvgu0y','EdTHBgK','zNPcvKG','sgv3s2m','ywrKrxy','iZDLzta','CJTZDhi','BM8TBwu','ExbLCW','BM8Gvxa','r1vcCwC','CYb3zxi','ChrLza','pgnHBNy','zsXdB24','yxnZAwy','EvjVD3m','rKPXEwO','ExrLCW','DgXL','B3jRu3K','zgTPDc4','u01bEwu','C291CMm','DY4Guhi','DvfOBxC','Bff5wNu','vxfvExu','B2XPzca','mtyZmZe3m3DeuvLvra','ntuSlJa','EeLMqxi','x19tquS','WPpcICkoWOBcKW','ugXpEMW','WOJcKmkvWO7cLa','vu9VDMm','rMrtqu8','yM91BMq','DwzVsKG','lM1Ulwm','mIWYosW','zeH2vLq','wwTVrve','EhbVCNq','DxjHpc8','CdPYB3u','nwmWidm','CM91BMq','AK1kEey','C2STChi','ywX1zt0','nYWYmsW','u2DHqMe','tM8GCMu','serVDLK','BM9Uzq','mdCSmtu','WOZcICkoWOBcHG','DxDTAYa','yxbZAg8','sgvPz2G','zLL5ze0','t0rqzem','DgG6BwK','B3v0','DergBwy','CNvNwuq','ktTIB3i','CMf3qG','CM9ZCY0','BNrPyxq','lNnRlwG','WONcLmkmWOVcIq','B1vwCgK','CMfTzsa','yJLKo2i','Ewv0lG','AwDODdO','rxrZDuK','AwvSzca','C29SAwq','Dg9W','nNWXmxW','wfL2shm','WO7cICktWPxcLa','AwzPzwq','EMu6mta','z2v0rMW','ywj4D0G','DgvK','A3mUBgu','zw5Jzsa','lGOkswy','pgnPCMm','DgnOzxm','zJzIowq','AxzLo3C','WOVcKCksWO7cHW','DcbKyxq','zMLSDgu','ihnPz24','wxPMBMW','Cg9PBNq','icaGDhK','CJPYz2i','veH0AMW','DgvYzwq','q09tBgC','DwjMDeO','uvHbCuu','tefcrhi','uxftwg8','zNPdBLG','Dte2','zvbPEgu','rJKPpc8','psjYB3u','ELLxr24','yKfdD1G','BhnYD0m','o2zVBNq','AujKrey','u0Hxs3q','C2TPBMC','yKr3EKG','whPHzwy','DcbTyxq','BM90ihi','ic0+ia','WOVcH8khWPlcKa','EwuU','BwvTyMu','WOJcKCkvWPlcKG','C2fUCY0','DerHDge','WORcJSknWORcKq','ywXSoMK','D3jSs0q','B29RCW','AguGCMe','WPdcJmkkWORcKa','DgrlufO','ANvZDgK','khmPihq','z0fPvwG','zxr3B3i','mcaWida','Bg9HDhm','AguGBgK','DgLVBJO','y2vUDgu','y29Uy2e','DMvYzMW','BMvS','EIaOsw4','rJKGihm','ig90Agu','z3L2BwO','uNniAg8','B2nXAei','z2v0sw4','zM92u2e','ifbpuLq','C3bHBG','B3CU','DwLby3G','BLr5Cgu','tgvYrhi','w2fYAwe','y3vZ','zxiIlci','uwnJB0K','D2fPDgK','yw1L','ztT3Awq','mYWXnZC','AtmY','B24+','Cffpyva','igzVCIa','ruTLrwy','C3bYAw4','Aw1WBge','WPdcKCkvWOZcJG','zLrcEu8','DfDSBeK','zdTYAwC','rvnqoIa','4OcuigzYyq','B25Z','DYbLEha','B2SGAxm','DNbrz2m','CMf3wwe','C2v0qG','B2TLlwW','t0v1B3m','Dw5PDa','o21HCMC','Bgv4oJa','D1nWseO','r3jREei','B3j04OcM','tLzrsha','WO7cJCkjWOVcKW','uw1wAfa','ifnxlva','mhb4oW','sgvHBhq','icSG','AgfIBgu','DgfSBgK','CgvZia','ldiZocW','FdeWFdm','zMLYzsa','B3j5','D1z5rKy','Ag9VA3m','yxrLigy','u2vSzwm','u29jrxq','iefdveK','CKXPC3q','B3nZihq','CK5XweS','Ag90CYa','mtjWEdS','iIbZDhi','sNvTCca','Cgu9iNi','BIbZB20','yxj7D2K','zMLLBgq','WPpcKmkiWPlcKa','ie9IC2m','ndC7','B3CGkey','oYi+u3a','C25HChm','CxbtA1K','zhjlwMe','BeHUqxe','lJKYktS','AwqGzg8','igHVB2S','zvHdvxe','WOZcKSksWPpcIG','wgTntK0','EhHZthq','tNLfshm','WPxcKSkiWOFcKG','B3G9iJa','igrPzca','y29TyMe','mcu7','refWC3e','zxrL','oJeYmha','BwuOkq','zejODKC','C2STBM8','pgrPDIa','yxr1CMu','Aw5ZDge','ifvjiIW','ihbHBMu','nsWXndm','yMPjy3i','WOZcJCkvWONcIG','ChG7yM8','ywnRz3i','AY13B3i','BM8Gseu','DxqGEw8','Dw5PDhK','zNvkr1a','B2LUDgu','D3zcwwW','ELzNz1m','lc40nsK','B3rLE2y','pc9KAxy','D2HVBgu','Bgv4lxC','y21K','CMvKige','y29WEq','BxjVwgK','D0nbBwO','Aw1HCcW','zJmY','WOBcISkoWOVcIa','DJiTDge','Awr0AdO','CZOXmha','CMvWB3i','AgLKzgu','A2rlBLu','C3CYlwi','ifjLC2u','CMf3Aw4','BgW+','CgfYzw4','D2fZBvi','DLLcExi','E2zSzxG','C2v0rMW','ysGYntu','WPdcKCkrWOBcIW','q0HyBgy','terHuLu','ign5psi','Aw50','B24GAwq','B20GDgG','qvbvoca','DhjHBNm','rviGD2K','zvn0CMu','C2z4A0q','zxG6BM8','ic8GrJy','ihDHCYa','EhL6','igXPDMu','z2H0oJC','WONcHSkqWOJcJa','i2zMnMu','DhbHC3m','mtiXmdv2vKTgB0q','DJiTy3m','wfz4uKm','t0XZBue','WPxcImkqWPlcKa','DMvYE2y','icbMAwu','lwvZCc0','CgXHEwu','BxPYt1m','teDYzKe','v2rPBMW','ysbNyw0','oMf1Dg8','ig9Uy2u','WOVcLCkkWOZcHG','rg1xyw0','sgv6B1K','y3vYC28','D3jPDgu','A3vusxG','zxzLBNq','EgHqy20','vtGGAxm','zwDpALm','mZGSmJq','s0HQrM4','ignVCgK','Axr5ic4','rKvfsNO','sfveigq','WPtcHSkkWO/cJG','WPtcJSkrWO3cLq','uKPSAuO','WOBcKSksWORcJG','cNbPDgm','ys1ZDW','zwjRAxq','zw50igK','DMGGlsa','ig1LBNu','WOVcKmkiWO3cHW','CgfYyw0','zYbMB3i','nsiGC3q','mJjMqwnsBKK','B3rVBK4','kdi1nsW','mZT9','ys1LC3a','Dhj1zsi','Aw5N','txvSDgK','WPlcKCkuWO3cKW','AgnKzMm','Cg9Zqxq','ENnQseW','z2LUlwW','yxmGBM8','ktTIB3G','BNmU','ChGGmdS','BNq6Aw4','WPpcK8knWO7cIW','yxjN','DwrvEhC','BwvHBG','Fdj8nNW','BNPjDuq','WPlcLCkqWONcIa','DgfIBgu','DxjHimk3','DvHfz0m','r2fTzsG','seXIDfe','vuTtuw4','BgLNBI0','C2vLBNq','WORcICkoWO3cJq','CZPUB24','q1PXu1K','B2jMrG','zuL0zw0','tgjMAhu','CMXHyMu','CgXvyvi','ndGZnJq','vNH0wLC','yxjLige','tengCeC','Aw50zxi','zM9Sza','igvUDhi','yxjKlxi','B1rQvwm','zwz0oJe','CgL0y2G','DfL6uLq','DMLZAwi','BwveCLK','igvHC2u','BgLZDa','sg51rMi','DtmY','zvjLy3q','zMfRzq','ucbVBJW','Dg9Y','y2fWC3u','Ec13Awq','WOJcJmkjWO7cLq','zM92','yuzYB20','Awq7CgW','zgL1CZO','WOBcLCklWOBcKq','DxjYzw4','odGWD1n5vhDd','B25Nig8','q2fTzxi','zw50','DgHLBG','rNfzuvO','WPhcLCkiWO/cIa','yvz6DuC','iIbMAwW','AgvHza','ywT1CMe','DdPUB24','BgvUz3q','y3f5A0O','zdP0CMe','v2LKDgG','ofnRC3f5ta','vePLyLC','BIbHihi','AMfUseK','zw5NDgG','r3n6Cfy','owqIihm','wwzQBuu','v0nxzxy','zwf0zva','WORcKSklWO3cKq','CMvMCW','B2XLig4','uwXtsMe','C2STBwq','CMeTBwu','AxrPywW','BJOWo3a','ww95Cha','AguGC2K','shL4qKe','BLzPzxC','BerXquu','qxbHD3C','E2zVBNq','C29SDMu','yxjJ','zZOXmha','qvvXExy','BdPPBMK','ig9Uihq','tg9VAYa','zeXcuM0','DMvKia','u3HrCxi','icb3CMK','CNqGihq','CgvYBw8','WOJcK8kiWPxcIW','q0PkC0G','Dg46Ag8','DMvYBg8','D2nqt2q','BM8GD2e','lJGYktS','As1TB24','WPdcKCkjWOBcKq','t3zzBei','AxrOie0','C3zNE3C','DMjKD1y','zxG7ywW','DgfU','Dur6D3e','vvjbx1m','AxPhAxq','zgf0zsG','AwvYkc4','vLLKsgG','z3fhsxi','Ewf3qxq','BYbHihq','BwvZC2e','lxDLyMS','BM90ig0','WO3cLCktWPtcIW','nZu7Bwe','zMLYC3q','WOBcKmkgWPhcIG','AgvYAxq','weH2v3a','sejTz1K','Axn0zxi','nYWUmsK','CM9VDa','Ew9Wsgm','uMfKyxi','ohb4o2i','zujfueS','tfPTAKG','EuTdv3G','Bd0Ii2y','yxbWzxi','lMn0B3i','ldeWnYW','CMLNAhq','BMq6i2y','CZ0NC2S','EgnqyKK','qxvQBxa','rgXJEeS','Dw5Kzwq','zMXLEa','D3zSB0q','DcHHDxq','Cg9Z','lwnOzwm','Ag90','werutgi','zw50tgK','Axr5','iokaLcbUBW','qxnZzw0','AwnOigy','Dg87iJ4','A2LUza','WO7cKmkhWOFcKG','qKfrAMO','zwqGBM8','iIbZDhK','y2GGDgG','Fdj8nhW','icaZlIa','ltiUns0','DgHLiha','C2vSzwe','zxGTzgK','pt09','v2jzv1u','zgL2','oxb4ide','mIWUocK','ANnIwg8','mNm7Cg8','B3i6i2y','lwXLzNq','zMfPBgu','WPhcKSkpWPdcJG','ic0GDgG','ie1ciea','uKHLDw0','sMLMwhe','EtPMBgu','DYaTidq','Bw92zvq','C3rHDhu','Dg91y2G','DdOXmxa','CMvKihK','AxmGyNu','y0P4s3y','DfDPzhq','wKz1yKW','zxi7Dxm','CenVBNq','o21HEc0','DhPsvMu','DxjJztO','rviGvvC','Dw5KiI8','sNfdwwu','z2LMEq','z2v0sxq','DgfYz2u','yxrnCW','Efb0Dgu','oJi1ChG','uxrKA3C','ELHRCMO','mNW1FdC','ktT9','rgnkvK0','ywz0zxi','CIb0Agu','rgrfD00','zxnZywC','v1zwzvC','yMfY','v0fswI0','AgPwwhC','Dg9WoJe','ELzxB3e','AMvJDhm','u1rkEem','Aw1TuhG','Aw1L','Bg93oMe','oJm0ChG','tMHLy1u','BwfUEq','y2vK','DhLWzum','yMvHCMK','sYbZy3i','WO3cKCkoWORcIG','zMLSBfm','wuzks1y','t0SGt1y','C3mGmhG','WPxcJ8kgWOJcKq','oJe7Dhi','WOZcImkkWONcKG','WPpcI8kmWPtcLq','mhb4idu','BhK6Aw4','CvLqvLK','CcbHBMq','AwzYyw0','te9h','WOZcHSkvWPhcIG','WPdcICkpWO7cKW','zgfYExi','B25LoYi','ifnxlvC','mtC3lc4','Dw5Kzwy','BfjKwuq','zwXVywq','BhTWB3m','uMvZB2W','DMfYkc0','CM93CW','Aw1Lr2e','CeHUsey','C2v0Dgu','zxG7zMW','zwqGDgG','mhGXna','ihn0EwW','WOZcI8kpWO3cIa','CI1LDMu','zvn0EwW','WOJcJ8kuWPxcIG','BNrezwy','zMLSBa','DxjH','CKnVDw4','D2fZBvq','z1zuExe','zwXHChm','yMX5lum','ru9suKq','yMrHowm','nc00lJu','DcbPBMO','lcbZDgu','ldi0mIW','AMDbwuK','nhb4idK','ihWG','khrOAxm','ztTTyxi','BhvNAw4','ltiUnsa','BM9UztS','B3rO','B250zw4','r3fgDxq','B3bHy2K','thPfBfm','WPtcKmkjWO/cIq','Ec1KAxi','z25HDhu','sg1Nwxi','z2fWoJG','EKfwt3i','Bw4TC2K','lxnWywm','mhG0ma','zgvIDwC','oJaGmca','ueXbwuu','mJbWEcK','BMqU','C1PQBvC','Ewf3r2u','v1jHzem','yM94lxm','sMrQDxu','r3zptw0','ywn0','oNjNyMe','lNnRlw4','BIbuyw0','lJa0ktS','ywLUAw4','C2STCMe','WPxcICklWO3cIG','B2jM','Fdz8mhW','igfYzsa','wMrtwwm','DhrVBtO','qNDjDvy','D28GzMW','C2HHzg8','wwfWvu4','D0fJrM4','AgjyuxC','C2vSzIa','ChG7y3u','yNv0Dg8','Dg87zMK','y2XHC3m','WOVcKCkrWONcKq','vxPwDgS','r1fJDwq','qvv5seC','lc4WmJu','DgvZDa','rufet3i','zerVAuW','igXPA2u','sw5ZDge','Bw4Ty28','n3b4o3a','lJuIihy','DvfjBKi','iMvZCci','y2uTAxq','Ae9Hz3m','BNrPBca','B2fYza','CY5Tzw0','WPtcJCkrWPhcKa','tLnXrwm','l3nWyw4','zgLMzG','Axr5oI4','ue5KrM4','AfjUv3G','ihjLy28','iJ5tCgu','tw91C2u','WOBcJmkoWPtcKa','BM90zq','CMrLCI0','zNKTy28','uMDMD0i','rgHHr1G','lL9Nyw0','oMjSDxi','rK13Bxa','oJfWEca','ihvUyxy','werOEfu','BM1mENO','pJiUmhG','zhmGWRCG','BNrLEhq','v2vHCg8','zwvKzwq','tg9VAYS','wfzsBwe','BMfTzq','WOVcHSkuWPtcKq','ChG7yMe','yuv6s3G','zgvYoJa','B3rYB2W','AhvKlwm','zcb0Agu','Duz3zwC','z2v0q28','tKTnuxu','wKnpAgG','nJaWo20','DgG6mZq','EdOYmtq','ihnPBMm','ChG7','zMXVyxq','WORcJmkgWPxcHW','oY13zwi','B3bLCNq','EhfmswS','WPxcISksWPhcIW','vvH2qK8','y2rjsNa','BgLUzvq','ig9Uia','z2v0rwW','oMnVBhu','zwLNAhq','BNqTC2K','mxb4ihm','nhWWFde','D1HpyKm','WOJcLmkoWOBcKa','AdO2mNa','z3jVDw4','DcGJzMy','BNvTyMu','tuTMuKC','oxW3Fdi','y1LdBvy','lwv2zw4','qu5eihq','ndC0odm','uLmG','igzHA2u','zxjYB3i','BK5LDhC','BMnLC1i','zxnYCfi','BenhvNa','otLWEdS','oInMnMu','yMeOmJu','igDSB2i','ocK7Fq','B3r0B20','BNjfuum','AxnWBge','ic0GCNu','zenOAwW','CdO4ChG','rLbty28','C28GAg8','Cg9ZAxq','B25VC3a','ihDOAwm','BNq6mte','ChG7zM8','ywWGBM8','s2vqvwW','WO7cK8kpWO3cIa','o3DPzhq','BMnL','DLnwy0u','B2XVCJO','qu5pveG','ytK5o20','v2vkrMK','zxjHia','WPtcH8kmWPhcIG','A3fJz3K','zw1VCNK','D0HAqxy','WPdcJCklWPpcIG','rgPSsMy','sMjKDui','DxjHtwu','B206mxa','y3qGzM8','C3rHCNq','WO3cICkqWPpcIG','CMfTzs4','owq7y28','BNPpuvG','ic4Znxm','zuvXuNm','zuTXC2m','BwfYA3m','igvYCM8','EMu6mte','lxyYE2e','i2y3zwu','wxnWyMi','r0Llqwi','zw50o2i','s2roBvy','D3v4Dge','yM90CW','Cfzltwi','vNjnC28','uu5OtfK','yxrPB24','rxbUwfu','twjls3i','z2TwDNe','yu14wgS','WPdcKCkoWO/cIq','r2fTzq','yMfJA2q','o3rVCdO','Dgfyywe','D0veu1G','EdTMB24','zwn0zwq','Dg9tDhi','uMvSB2e','ywjSzsa','AxrPB24','BM8GCMu','twHRzhC','BMDZ','ywX0','D2fgq3q','ue1XD0u','B3qUBw4','zg93','Ec8XlJm','zur6sxi','nNb4o2G','zNjVBsa','CJOXChG','zMzZzxq','y2uSq28','Eun5t3q','lIbozwu','z2fVz20','msiGC3q','zKngzK4','DezgwNC','oc00lJu','DKHiANa','B3nWywm','tIbIEsa','A2uTBgK','veThseq','Aw4TD2K','yxztwLG','zsbYzw0','z3jHyG','D3jVBMC','DcbPDca','CgfUpG','WO3cKCksWPpcIa','CMfUz2u','C2fUzq','zw50zxi','zvrwD0q','AKrUCei','sg9VA3m','AguGD3i','qvPbzMO','B3zLCMy','nsWUmdu','pZWVC3a','Dc4kcLq','we9xtwK','ntuSmJu','zt0IyMe','r3HLAvi','DgnO','ktTJB2W','EuHiv28','DxnPyMW','ns00idC','WORcKSkkWPhcLa','t2rot3G','yM90Dg8','DLrOuKi','D257B3a','DgHLigW','t0ruyxa','Afz6vMi','EgjWshu','rwLnC0S','C2v0','BgrWu2O','yM9KEq','D3rxsvy','z2jHkdi','cLSGif0','EsbMywK','BhDluey','zhvSzq','u2nYzwu','vxHOtwG','osWGDhu','s2j4t1G','o2jVCMq','lwH1zhS','tMv0D28','y3rPB24','yxfzsw4','ktSGBM8','icaGia','C2STy3q','CMfKAxu','WOZcHSkpWPhcJW','DcbZCgu','weXIDNa','CMvWBge','WOBcKmksWPhcKa','BMq6CMC','BcWk','yNPtrvO','WPlcI8ktWOVcKG','BNrLBNq','swvzuw8','ufLpteq','ywnLo3C','yMX5lMK','AxHMA0y','z2fTzvm','mhG3yW','ugHVDg8','rvnqig8','EdTMAwW','C3PZA00','AwXLCwC','oJrWEdS','nJi4r2jhufr5','mtb8ohW','oInMn2u','CM9WywC','A2v5vhK','BMTLEsa','B29RCYa','BNqTzMe','DKrKrMi','DhjVA2u','yxjLzca','yNLXyM0','WOZcJ8kmWORcKq','yMP6r1i','ChG7iJ4','Cfn2C1u','x19hzw4','zxbSywm','r3vPCuK','y29Kzq','sxnku1q','u2HotMi','WPpcKSktWPlcIq','ChjIy0u','lxDYyxa','Ae9vExq','C3fYDa','veLwrq','ywn0Axy','zxmGAxq','mJqYlc4','y2fUzgK','x3j1BNq','uvLJD28','WO/cJSkpWOBcKW','BvbewNm','mJq2ldi','B3i6Cg8','yxmGzMK','ywnwALa','Cd0Imc4','sg93tK4','C3LUy3m','igzYyw0','q2XAD3u','vgHHDca','lMrSBa','B25NE2m','yw1KDKO','C3bHy2u','BgqGB2y','mcaXChG','ihbHz2u','B3vUzdO','ywDHAw4','BKL2CgS','q3rgEKi','ihjNyMe','BMrADuq','u25HChm','psiXlJi','i2zMzJa','BgvYigG','BgLNBG','ChGGC28','ltqTnY4','WONcKCkgWPpcJW','C3vNqMG','mJrWEa','lxDLAwC','AxrSzxS','wLfuC3G','CYbYzwC','D2fZBu0','BgLKzxi','zxH0lwe','zxqUia','vernx0C','DLjLr04','sM5NzxC','BgfZDfC','vgXpBei','qNjHy2S','zgTPDa','ifrOzsa','zfj3EuK','DhrVBJ4','igfYBwu','u2vZC2K','qKLPrfq','nsK7yM8','rhHpBuS','BgfIzwW','mxb4o2m','Bgu9iMq','xxTIywm','y2XVC2u','lwjVDhq','DYGWida','B246B3a','tMz3Bxq','WONcJCkkWORcKa','zvbNCxu','Awq7z3i','mtj8nxW','idGWChG','imk3ihrL','AwWYq3a','ldi5lc4','C0LywwW','Eca4ChG','vevYCM4','t3rkuvG','DMvYE2m','DMvYC2K','DgvpAgu','WOVcJSkoWPhcHG','EY13zwi','ihbHDgm','DxjLzey','mwzYksK','tejNtvi','zw50lwm','s1vsqs0','u2fRDxi','qwn0Aw8','yw4+','y3nfEhC','rvHrwxu','AxHLzdS','D2DoDuO','oxW2Fdm','r1bswvK','DLnkEfO','CMvK','AgLSzsa','CMvMAxG','CMf3','WONcISkgWPlcIq','BNLjD2C','ig91Dca','lt4GDM8','mda7Bwe','psjJB2W','rgPTC24','WOJcISkiWPdcLa','C2vYDcK','qNjLywS','ig9IAMu','EdT9','rvrRtwy','WPpcICkqWOZcJa','DdPZDge','B25TB3u','D2fYBG','sNvrwwW','uufKqxa','WO7cJmkqWORcJa','ie9o','BNq7yM8','yw1PBMC','BwuUy3i','C3rJtw0','zxjLzca','yNL0zxm','mduPlda','zxjZyc4','BMDtwLG','yxjPys0','s3vTzuS','Dde2','uvHxCKS','oYi+','AwnOlJW','r3zevuq','zw1WDhK','v0LhsgC','yMvJCfG','AxfwAuK','mNm7Fq','CxvLCNK','B0D6Ave','WO/cKCksWPtcIG','C2LIEeG','WPtcJCkhWPtcJq','vfHkq2e','BMfcq3G','zYbIBgK','Bwvwrg4','EdTIywm','AxjLuhi','wK1Nz2K','B2zM','BJPJzw4','BM8Gz3i','idfWEca','DeHLAwC','C2L6zq','WOFcKCkrWPdcKq','CMvNAxm','lNnRlwm','z3zPEeK','D29YC3q','ihzPysa','mtbWEdS','Ce5dzNe','D3z4zxi','B2zMC2u','ELzgq08','WONcKCkgWORcKq','DxDTAW','Bw4TBg8','WONcK8kuWO7cJa','y09VzMC','mNb4o2i','ocWYndi','uNnYt00','BNrYB2W','ksWGC28','uNfOrLC','A2vKpsi','vgHLigC','DfnwAwe','yw5Jzsa','C05Ot3K','WOZcKmkhWOZcHG','B2jMsq','B0PjyM0','yw1Ligy','mIiGC3q','DhjVEq','Aw4U','zxaGDgG','BMqGBM8','wNLPDw4','Bxm6y2u','Bg9Zzsa','Dw5Yzxm','B3i6','yM9Yzgu','CKnVBg8','BwfW','uxr2yvq','o2n1CNm','nhb4o3q','zIb0Agu','t1rRvMK','uLDrzLy','kgD1zxm','A3Hivum','mtaIihi','WOFcH8kmWOBcHG','BfjHDgK','DgL0Bgu','Ec1OzwK','mJu1lde','DcbUBYa','rgLMzIa','ihrOAxm','mNWXFdu','AwXLzcW','BwvUDs0','Dw1UCZO','ihn0yxK','reHgC2C','ChG7Cge','nxW2Fda','AxDfAvi','sgPdwLi','Bgu9','BJWVyNu','WPpcI8kmWO7cIq','kde4ChG','CNj7y28','BMrVDY4','id0G','idaGmca','lKHfqva','q2ndrgK','DxrVo30','Cg93yLG','B2XSzxi','te1ps2u','vhvWEuC','sgHREfm','o2zSzxG','D3zpEMO','igLUC3q','zgLZCgW','ywLSzwq','DMD7D2K','icaGica','vu9VCLC','Cuvkuhm','B250lxC','zNjVDw4','z3z4Cem','vLDqyLO','Dgv4Dge','phnTywW','rJyGywW','DcaOC28','Bvn6yxO','D1vdC2K','vNvyCvK','DxjPBMC','uKnuA3a','igzSB28','qLLltKW','WORcH8ksWPxcHG','tLbdx0m','ysbZDge','zgvZy3S','zxnW','tw9KA2K','yt0IC3q','BgvMDa','Ae9SAum','zhrOoJm','AxvZoJe','A0PhAwu','ANfLvvG','yM90q28','s2LwqLm','Aw5PDgu','zuDUvem','ihjVDw4','ig5VDca','yxbWBgK','DgHLig8','BMflEMq','B250lxm','rNDnBgW','C2v0tge','y0nMAxK','z2LUigC','BgX3yxi','v0Xesvy','zgvYoJe','EhjfAMu','BMq6Dhi','uxzHAeO','sxP5Ceq','z09ZA2e','C3bLzwq','wvf5z2C','q1HMDLe','idrWEca','BgLKihi','AxjZDca','q2LYzwC','DwKTBw8','y3PmquG','DffYqMC','zMvLDa','CMvH','zMzMoW','iJ5ZywS','ihDOAwW','y29Z','pc9ZBwe','BK9Lwxy','DxbvAhe','oYi+u24','zxKGAxm','C3rwAKe','WONcJSkvWPxcHW','Ahq6nZa','ugXHEwu','qurkuNi','lJi1ktS','yxqG','qxDHA2u','DgeTyt0','o3DVCMq','zt0Iy28','BMv2zxi','BgrPBMC','rLjKAhy','zxrZicS','Ec8XlJq','r2HrsM0','yw5NzxS','mtb8oxW','WONcImktWOVcIW','oJeGmsa','sLbsv0W','WPpcI8kuWPtcLa','uKDKD1C','zxi7zMW','ELHzAwS','z2fMEMi','EMjvEgm','r1vfu1m','oNbYzs0','zgf0yxm','ChGVms4','AvHbuMi','yxm+','ChvZAa','Fdb8mxW','DhLWzq','weTLAKm','CMDIysG','CMvHzca','rw5HyMW','WPlcJmkjWORcKW','mhG5oa','BNq4','zgLUzZO','i2zMzdq','DgHRre8','EwvYqw4','BhDHCNO','BNvsCM4','tw9KDwW','uMfUz2u','BvLuwuu','igzPzwW','Dgv4Dem','WO/cJmkgWOFcJG','DMuGB2i','sxjhAgm','svz4z3K','CI5KBgW','yxvSDa','o292zxi','zwfKywi','Dg90ywW','zwqGyNu','AeHAExO','uxDpAKO','yxmGAwq','uMT6BgC','WOBcH8ktWOJcJW','Bw91C2u','t294vKq','zcdcTYa','zsDZig8','BMTsAu8','sevbufu','DNDXCM8','sgvHCa','qxjIzLe','yxrHBJi','zMXLEdO','igj5igu','yMfJA2C','lYbQDw0','n3WZFde','Aw5MBW','qK5ODhy','oJa7EI0','AwX0zxi','psjZDZi','AxHKALC','B3n0zMK','BwuUx2C','sND3A0K','m3W0','kdiXlde','yxbP','WOJcH8ktWOZcLa','D24Gvxa','oIm4zdC','AKPrsva','AgX6veK','AML0qKi','C2v0sgK','r1LvquO','CNPguLK','CMvTB3y','yxjKlM8','B2DNzwq','zxG7z2e','oYi+ltW','rvnqigi','zxH0','n2vLzJu','WO/cHSkqWPtcIq','CJPWB2K','yxGTD2K','DgvYiJ4','DMLLD0i','y2u7y28','EMjiwve','yYGXmda','lJC1ktS','lwL0zw0','DhK6mdS','oM1PBIG','nYK7y3u','mtbWEca','vhHzqKy','ELnlEhe','Au93zgS','BMnLigy','u3bLzwq','owqPida','CMvHy2G','EdTHy2m','WO3cLmksWPpcKG','u3bYAw4','Cc1SzW','z3ftBNC','ChG7Fq','A1n5BMm','qw5dwgy','zMLSBfq','lIbeAxm','BIbjtLm','rwv2t3q','t1jktKm','zNbZ','ywLSywi','EdTIB3i','pt09u0e','ic40nxm','yMLUzgK','zhrO','EwXLpsi','tuSGq08','DxvoEMm','qNLjza','nsWXmdC','BgfWDKy','BgW6Aw4','WOVcLmkiWPdcIa','CMvSyxq','AgfKB3C','CMuG','AxnHyMW','zcbYz2i','DxnLtg8','AxmGD2G','BLj1BNq','kdaSmcW','igL0igK','Dxm6nNa','BgTOuwO','WONcH8kpWPlcLq','zg9JDw0','z2v0vwK','BhvTBJS','phn0CM8','Aw5Qzwm','Dhm6yxu','zsbPBNm','sw5Zzxi','qM94zxm','WO/cLCkqWOFcJq','C25HCa','sxzSvKK','ig9Mihy','rK5HwLC','y1vHAeu','zMLLza','AgvSBg8','BNn0yw4','C2vSzwm','WPlcImklWPxcIq','zwfJAge','BLLMwK4','z2XVyMe','BgXLzca','AwXKlca','B2TLpsi','AwDUlwK','mJGPo30','if0GywW','C2XPy2u','zsbZDhi','WOVcHSkoWPxcKq','C29SDxq','rwL0Agu','uhDmswy','wKD6CuG','C3bSAxq','vvfjD1C','n3W2Fdu','A2DYB3u','yNvPBhq','DwLSzci','CMqTAgu','i2zMogy','yxiTz3i','rwPjr3G','vNPmAgC','CMvKDwm','Bgv4lxm','Dw5UAw4','igfNCMu','WORcI8knWPtcJG','DcbIzwu','EvjUzfi','mhW3Fdq','WPdcK8krWPhcIW','Bhvgz24','B25PBNa','WPlcJmkiWOFcIa','Aw5Uzxi','WPpcLmkhWOVcHG','rePzzvG','AgHXrhG','AwrLBNq','BML0Awe','Cg9ZDe0','tgLZDa','zwy1o2i','BKT2EKy','zsb0Age','psjWywq','BxLXu3C','y2X1C3q','zM9UDc0','WO7cJSkuWO/cLq','BgvZ','ANvTCa','DfLMCgm','wfDWt0G','ufKGve8','EcbZB2W','tg9Hzgu','zwn0Aw8','y0PPzKS','lNjLC28','CYXTB24','igP1Bxa','oJa7zgK','t1LjD2K','BhrLCJO','ihn0CM8','WOZcKmkjWOBcKG','nZH2AdS','vw5Zr2S','WOZcK8krWORcIq','DdmY','Dg57ywW','ywLUE2y','y2SIpJW','yuPHCfK','Aw5WDxq','WPdcH8kgWOJcJG','uMjAELm','sKf3q0q','zxzLCNK','pgLUChu','ywXSvMu','EgvUD2W','z2rWtNe','igfUzca','zwqGlYa','qM90','WPpcJmkrWPhcKW','Dg9gAxG','DMvK','Aw9U','zsb1C2u','zYbPBNq','D0roCNu','AxrZ','zhmGB24','AgvHCca','C3vYDMu','igjVDgG','B29XyKm','ihrOzsa','AdO5nNa','yw5LBca','icbJyw0','WOZcISkgWPdcHW','zNvUy3q','nYWUocK','vhfkyvG','Ad0ImIi','vxHHEu8','A1rxqNG','C2STDMe','ywn0B3i','Ds1JC3m','y2TNCM8','y2u7','BI1ZCge','CNqP','C28GAxq','ChG7Agu','ugf0Aa','D2HpAuS','WOJcKmkvWONcJq','v01XB1a','AxvZoJK','WPhcLCkhWOJcKq','uMvZzxq','WOFcI8kiWPdcJG','s3LHsva','zwqU','ig9MzG','B25Ligi','ALflsuW','zxmGBM8','EwH2t1C','BxnWANa','A1rdywi','icbVzMy','Bgu9iMm','Dxr0B24','BNrPBwu','svzficG','nxb4o2i','zw51','zw50rwW','y2HLy2S','ihrVCc0','mtjWEc8','WORcKSksWORcKW','ywjLBhS','A0PSsfG','BMqGEwe','ywrrqxG','uMvMDxm','qM1pC1q','tMfTzq','Cgv0ywW','lde0mYW','zxb2qvq','B3v0idK','sNfMrfi','ywrPDxm','wfzwshy','yxjNAw4','igDHBwu','B25NlG','ksbVCIa','B3borxK','vKnkywS','qxfozwC','Bgf0zvK','oJeYChG','D2LUzg8','Eunesg4','y3jduu8','ywDvwvm','u0TjteW','uMvNAxm','B2XZE2y','idqTnc4','ChrY','vgHLigy','Bw4Ty2W','ELbjEK4','WO/cI8kiWOFcHG','q0HRBMW','y2uGyM8','swPfswG','y2fWDhu','Dxm6mta','werJz3K','yNPZAfK','WORcJmksWPlcLa','keLUC2u','EfrTAhe','B3jPz2K','CMfJDgu','lNnRlxa','CMrLCJO','WPhcImksWO3cHW','DhLWzu4','B25LoW','WO7cKCksWOFcIq','qvvRqNe','u3POBem','igj1Dca','vg90ywW','AgL0CW','Acbxzwi','zuLszLG','zw5K','B2f0nJq','zw5HyMW','DNmGC24','B3vUzci','lNnRlw0','WOBcJ8kjWPxcKa','igfYBwK','reHbtxu','wurJAvK','y0zsshK','tM9Hufe','CdO2ChG','ExDsCMq','A2v5','y3nZvgu','ztT0B3a','DeHLywW','B24Gzge','B29M','WPxcKSkgWORcJG','qLzRvgW','CYb1BNi','ms41ihu','C2v0sxq','DMuGBwe','BgvHCG','uuTVv3i','A2v5qxq','zsb3ywW','DhDPy2u','DxnLCI0','igL0ihm','lwXPBMu','ChGPo20','yMfUzc4','yxa8l2i','zxrVBG','vejuEhe','q2viDei','EtPIBg8','l2nHBNy','Bg9N','z1bcvwS','igLZigy','u29qy0O','BgvY','DgHLige','Bwvnyw4','B3DVuxC','vKXtBvK','D2zMD08','yNrYCKS','sw5KzxG','tunqugq','WOFcJCkvWO3cHW','DKD4ueu','BwvUDc0','Awr0AcK','qxbWBgK','rvrVsMq','sMLiA3m','yMjPBuS','B3fQtw4','pgj1Dhq','DxjLzca','EuPwqKq','nZKSmtq','tg9VAW','zu96s2O','zw1LBNq','lwTD','uIbbq1q','mhb4ic0','Aw50lxC','icbOB28','r2PnEKi','idqGnc4','z2fTzsa','renPyuy','WPlcKCkoWPxcKG','zw1ZoMm','vNbWwfa','B0Xdqxu','Ag9Ksw4','sLzAvM0','DvHqAvu','mNmSyMe','WOVcKCknWOBcKW','BM8Gtw8','AgLKpq','zMLSBd0','qKvhsu4','s25uq1e','vw5PDhK','ihLLDca','y2f0','y29UDhi','Aw5KB3C','BgLUzvC','otK7Bwe','lM1UlwW','tw9hvgq','zvbSDwC','ndySmJm','wxfIELe','C2L6ztO','ywXSzwq','z2uUrgu','u3rTt2i','EcaXmNa','C3rLBMu','mxb4idy','x2DHBwu','BMHPugS','Be5twNC','yxmSBw8','Bw9YEvq','EI1PBMq','zxLL','mhGXoa','DxrVo3O','nZq4mJK','zxi7zM8','zhjVCc0','zxiGCMu','su5higy','iJ48l2q','Awr0Aa','u1nTBey','BgXxyxi','C28GC3q','ihvWk2q','txHAsee','sKzbBxe','ze1UA3e','BhqGC2K','ig9U','nMi5zcW','BKrYvLe','D3jHCdS','yMfS','x19ZywS','C2zVCM0','zcb3yxm','vNf1qwO','ieaG','ELHqu2q','qwrrwxy','BgvJDdO','WOJcKCkvWPpcHW','C2v0sw4','WOBcJ8kvWPlcKG','zhrOoJu','ywXPz24','WONcLmkoWPpcJW','zxi7D2K','zciGC3q','AuH4vw8','WO7cLmktWPtcJq','yvzXB3a','A3PNs00','yKzlzva','svLcqMq','CdOXmha','ChG7B3a','AxPLoJe','zM8Qksa','sNnJDxe','zvrYzKS','xtO6ywy','v1LHCw4','lJKPo2i','mYWXmdy','yM94zxm','lde3nYW','WO/cKCkoWO3cHG','zcWGBM8','WO3cJmkgWPtcJq','BMfNzxi','WO/cI8koWO3cJW','zNjHBwu','Bw4TDg8','zuLwrNK','s21bqMK','DZiTyM8','nNb4o2i','BfP0tLy','WOJcLmkoWO3cKW','CMfUihK','DcaWida','DdTIB3i','lM1Ulw0','r0TOsgW','ihvUAxq','BIbYzwW','BIbPzNi','oNrYyw4','mtfWEdS','psjZywS','ugv1BNu','C2vYlxm','Ag90ig4','BgvYkZa','uwz3sK0','Dcb0Agu','s1rwCK8','CYbVCNa','DhLSzt0','Dvvxshe','q29WAwu','iIbTAw4','BwuGD2u','DYbNBg8','D29YBgq','BIb0Agu','mtn8m3W','BKnQq1O','rxHWB3i','rxfMs3K','txfluNu','Chr1CMu','ignHChq','q2rxD1a','CMfUzg8','mNb4o3O','AxnmB2m','v25grMi','zgTJtNO','BMvTAfe','BM90igK','q2HPBgq','A3nqtK0','Bg9lC2G','Dw1IE2i','Dcb3yxm','lZ48l3m','v2P2seK','DxjHlwu','AwrLCG','v2vItw8','BgrZlIa','nsK7','ExfJAvK','vLLXtKC','C2fRDxi','zxG6mJe','y3jLyxq','Dw5KoNq','q0D3z0K','uK90v1O','phnWyw4','WPdcKmkpWO3cIG','ww5vs0y','ncK7yM8','Fdn8mq','CI5QCYa','q29WEsa','CM1VBMS','zgv6vwK','DgLVBIK','t2zMC2u','Bg9JywW','zuvSzw0','zw5VruC','ugDRtgq','DM1Nsfe','DwDRyu8','vuTeC0q','Ag9ZDg4','BMDL','CMv0','BguGy3G','v2fSAYa','WOBcJSkhWONcIG','u2HHCNa','CvDru0C','oJK5oxa','C3qY','DMLLDYa','z1PMyMm','zwqGB2y','ywnLlwK','Dw50','WPtcISksWOFcKG','DgfNtwe','mtf8mta','BMfWC2G','CJTNyxa','BgLLzca','whr3v1G','CNvUCYa','igvUzca','r2j4vLa','AwnLihC','WPtcI8kgWORcJG','z2LZDgu','CMeTCgu','C2nYAxa','CMf3qq','iZjHmgy','CgfKrw4','AxrSzsa','oJrWEca','CMvZB2W','EvrHCa','zfvIAu0','vwXnqLm','y1DnzNe','iZrMogy','AKzdvKe','BgfZDem','iZHKn2e','BMC+','DvbvA1u','CMuk','BwfUywC','B2jIEsa','WOVcImktWOJcKq','tM8GugG','Ag9VA0y','C29Syxm','CKjot0e','zw5LBwK','D2LVyui','yNvMzMu','zxi6mxa','ihvPlw0','y2XPCgi','lwnHCMq','BhLJtKi','v2frDxK','iI8+pc8','r0jJwfy','v19F','zfvLr2K','turHC3e','yxbWBhK','C3rHy2S','WONcHSkuWPlcKG','B3i6iZG','zMzgy2q','B25ZB2W','BgfZDeu','u0Hmrfu','AcbMAwu','v2P6rMe','zwXLy3q','Dg9WoI0','B3nLCY4','BMvZrfq','Bg9VA3m','C25qrey','mhGXmum','B2DVE2q','WPdcK8kqWO/cIa','WOBcJmkkWOFcIq','WPdcLCknWPdcIa','Ewv0ic0','wufmrw8','ys1Tzw4','rMjPt0y','veHItgC','igL0ige','EwDxu1O','CMvIDwK','yxr0zw0','vKLt','w2rHDge','ztT0CMe','z2fTzq','uNvUDgK','yxjKlxq','lM1Ulxm','rND0t1y','zgntsuO','zxmGDgG','yxG9iJu','rw5LBxK','r0TMB0i','zJWVyNu','mJiXmJe4mMvftLzduG','C21uExa','B3r7ywW','DgLHDgu','icbMywm','nZCSlJq','v29nD1G','C2fou0G','DNrerNq','wuTKwMy','qNLrBgy','igfYztO','B3vUDa','A2v5q28','ig1HBMe','zMfJDg8','lJv6iIa','CMfUC3a','CMDPBI0','psiXmIi','Awvmy0C','WO/cKSknWO3cIq','BM9ZCge','DMLLDY0','rhHryvm','Dg1xvgW','DMLZDwe','tgf0zvu','idaGmxa','mIWUnsK','nsWUmdG','ntbvvw54Dwm','WPpcHSkhWOZcIG','y2fSlMq','D2LKDgG','AgvPz2G','qwzTyNK','DgX7zgK','AgvHBhq','Cfj5Aue','rgTbrMC','WPpcImktWOJcLq','lxjHzgK','B3CTEtO','nZq4mZa','rhDIvxO','z3vkBum','ywj7zgK','u2vLBG','q291BNq','zMy3ytK','CMvMzxi','C1DSAKu','CNmG','C3nPBMC','rhjJCfe','WPlcLmkhWO3cJa','CfzLBMy','sLL3Cha','yMTPDc0','B2f0mZi','uvrXAhC','ugPQz08','zsGP','ztTWywq','Au1bC2G','igq9iK0','DgGGB3i','ieeGAg8','z3TMB24','yMvS','zcbPCYa','AgHhv0i','BgCIihm','BMqIihm','CgfYC2u','B24GDgG','BMD0AcW','BMvJyxa','WO7cK8ktWOVcIG','zKTvtw8','B25Jzsa','yLb0z20','rLftshm','sMLtwhq','ChbnqvC','Dxm6n3a','mcbYz2i','Bgf5oM4','zgf0zsa','oImYyta','sMPvvvu','y1jUCLq','wejbthu','Dg8Gy2W','BxfLB0W','CNjVCG','ExbLpsi','mcbMAwu','cMHVB2S','zujqAfG','DgvTCZO','m3b4o3C','WPtcH8klWO3cIq','WPpcJ8kvWOFcJG','Ewf3','Du9Vu0W','ndmSmtC','BxD3vLG','CMuGAwC','lwLUzgu','zwqGEwu','tfrKu3u','CI1Yywq','Cxzqwe4','CwLIu1i','CfnOEMu','B1LtqKi','nZq4mZy','sLjmEM8','AMjPqLe','ifnRAwW','EtOUndu','BwuGAw4','ywPUA1O','zg93oMK','yxjTzwq','igrVy3u','ANHjCuu','uwHyt1m','AfnJCMK','wuDlEfO','zYdcTYa','A3mG','Bgu7zMK','yMeOmJq','WORcHSkkWOVcHG','lJmPo2q','B3n0Awm','sLDOqLK','BgvYige','y1DNwem','BwuGlsa','zsbLDMu','WOFcICkjWPdcHW','D2DiEfa','BMq7Fq','rvnqig0','C3rYB2S','zgvMAw4','C3LUyW','mtaSmte','q0TQBKe','A3TOzwK','yw5Nzsi','oJHWEdS','idyWCYa','CgXPzxm','CLrNBgW','DcbPzd0','s2veDve','DfrgBeq','zxnLihq','BgvMDdO','ChLADvK','CIb5B3u','suTvzMS','sKXNEhK','Egz2sg8','BwvHBNm','uxHiugO','qwfSvxO','q05hCeK','u2vLBK0','i3n3mI0','yujbB2K','imk3ia','A1fsD08','iMzVBgq','yuLnrLa','zxHLy0m','WOVcKSklWO/cLq','lJq1ktS','qMvHCMK','zM9YBq','nJTMB24','vvzsC2q','B3j0lGO','D3H0rKe','C3zNiIa','oJCWmdS','ig1VDMu','zJfIo2i','ys1ZDY0','ExPsvMW','zsbNyw0','u3H3uxC','we9Jrxy','iM5VBMu','sMHnz2e','CMTWDLe','mtC2nJy2rxHpAMjn','WPxcJSkvWOFcHG','vwDSzg8','Ds1YB28','BM93','ic0Gy2e','C3rYAw4','idi0iJ4','wgLMA04','4Psa4Psaia','yxjHBxm','zhvYAw4','C3aTy3y','mNW1Fdy','BJPJB2W','BMu7Fq','nsWYntu','yxrJAc4','A2jeDe4','rM5bD1a','uw1nsKi','zwrnCW','y29WAwu','A0nNB1O','mtiGmJe','DwPcse0','CKnVBNq','FdH8oxW','uLvTDwW','CgvJDhm','rwDpzfO','Buz6veq','u0zhwKu','vgv4Da','DfffAgO','WOBcICkgWOVcIW','y29SB3i','ChG7Bwe','WOFcLmkrWPxcJW','C2L0Aw8','C3LZDgu','B2Tbuhy','B2TZihi','nZCSlJu','C2v0vwK','CMnPywW','rxLL','EfbtAMC','r0jwshm','WPxcJSkpWOJcJq','BM8Gzw4','ywqGzNi','Bvjgsui','mJu1lc4','vejLvxq','yZKIpNC','vKDgu0G','yxbWzw4','nYWUmZu','ndi4nJm0u3LYvxvl','CgfUzwW','oM5VBMu','WOJcICkpWPhcLa','yxjKlwG','A2v5CW','CYb1BMK','pc9ZCge','CgX1z2K','ksbZyxq','lwfSAwC','EdTNyxa','wKPODNG','Eu52AKe','y2j4yMW','C2PpCgm','DgvZia','B3PcvuG','Dhj1zq','EwvZ','uNDOAgS','B2r1Bgu','zxiTCMe','sffIugi','rJGGlYa','vgfTCgu','n3W5Fdy','ys9vv00','Bw9UB3m','nhWXFdm','yY0XlJu','BNuTCM8','BIbtruu','WORcJSksWPxcIW','qxrbCM0','oJiXndC','ldi1nsW','CMvZCYa','BMvPDgG','qxDiywO','zwDPC3q','CgLUzYa','DgLUzYa','CuzMALu','CgrHDgu','kZb4mJK','WOVcICksWONcIW','ntbWEcW','B21Tyw4','CeXZvhG','DdOG','zMy8l2i','mca0ChG','Awq9iNm','kdiYChG','B2yGCMe','CwP3B2K','DdOWo28','A0LWwKq','Dc13zwK','BfnQvKG','Dxm6oha','q3DzBwW','B3DUkq','CMvMDxm','t25qEve','ENbNreG','sLbzr0G','idb4mJG','z1P3BhK','D0Dmy1e','AgvHCei','AKPTt0e','q2PMwxa','zw5LBxK','CMXKEMu','ywrKAw4','EsbPBIa','WOZcI8kmWOBcJW','WO7cHSknWOBcIq','C3bSyxK','Cg9YDca','BMnLCW','B2X2zwq','ignVBNm','wLHVENm','psiXlJu','Ag9ZDa','zwvKig8','Dwj7zM8','DgHPBMC','q0HZrwi','Dg9YqwW','r3Pvr1O','EdTMBgu','Esbku08','EdTOzwK','sfrnta','BfDHCNO','zxrZigm','ntuSmtq','yw55ihC','ihzPzxC','igTUB3C','shzzCg0','u0LMu2O','vKuGDG','A1rdDfy','BMuUifq','r2v0Dgu','WONcLCksWPdcHG','mtGGnIa','igLKpsi','yxa9iNi','BI1PDgu','yxv0BW','r01qCMi','D2L3A04','ywjSzwq','DeDJs3y','lM1Ulxq','DgHLigC','Aw1Lsxm','WO/cImkpWONcIq','CMeTzxm','AwXKlG','B0XAvMm','WPtcJCkhWOFcIG','AgLSza','EdSIpNy','weDhEhC','wePSvK0','mcaWige','Ew9pEwu','WOBcLmkuWO7cJq','DMfS','q2XPCgi','rKfnq1m','DhjPyNu','BgvvD2q','ihbHC3m','o21PBI0','mJu1ldi','BM9Yzwq','vMfSDwu','qNjqvwq','BNq7y28','nxWZFda','ihjLCg8','u2vNB2u','AxrLBxm','WPxcISkrWPxcKG','zhPUq2y','B3vWig8','refdthu','phbHDgG','surfige','BxfYufG','Edjfna','WPtcICktWOJcKW','zgf0yq','DgfN','EdTWywq','CwDvswW','BNrLCI0','mdT9','z2v0Dgu','z2vY','C094D1G','yxK6z3i','B2jMqG','BfbLq0y','WOJcLmknWO3cJa','zgf0ys0','y2vKigi','sMPrBxK','rxLxDM8','BI5FCNu','shb5uM0','ihnVBgK','DKD5y3i','C3LkrK8','vgHLigG','CZPZDge','z0LewLe','CJOWo2i','Bgu9iMi','yw5JztO','zhrOoJi','lxDPzhq','BcbHz2e','B3vYy2u','BMXqBeK','re9nq28','mtG1ndC0ngXlDu1XyW','C2LUz2W','C0jez2O','E29Wywm','ohb4o2G','ihjLC28','uePUtfC','D0zhweO','Aw50Aw4','CNvUDgK','AZPICMu','yxa6nha','rhnhCxa','C2STBwi','zJu7Fq','lNnRlwi','uujXqvm','r25PENu','mtqZlde','zLfWzgq','zdTWBge','zgHAEfi','Fdz8nq','x19WCeW','u2v0tg8','CM9Wlwy','DM9Pza','Bgv4oJe','B2fuEhC','nIKSAw4','svPIsu8','r1DmDfC','phn2zYa','wuDOtMu','WO/cJmkgWPhcIq','sgrAqNy','WORcK8kqWOBcJa','ys5ZA2K','z3ftsxu','WOJcJmkhWO7cHW','CMfWoNC','iJ54pc8','EgvZlIa','zdTTyxi','y2fUDMe','v1fwv3G','oJyYDMG','CMvHzhm','lwjYzwe','D2HPDgu','vMXhDLe','Agrbu1O','Fdn8mNW','zYb3Agu','Avzyvu8','otbWEdS','mNb4o2G','EMHLr3a','D1nHsNq','lNnRlxm','CgfKzgK','oInMzJy','quLLANi','ENrhuvq','zcbKAwe','DNLZBKO','DhLSzq','Dc1ZAxO','AgfZtw8','Bwf4','ywjZ','y29SCW','nJq2o3a','ywnPDhK','yNL0zuW','C2nHBge','Awrpwxm','yNrLsLy','AxmGBM8','tfPMveO','C2ryvxC','AxnNrM4','AgvHCfu','CLHgA2i','ywrPzw4','WPxcJSkpWOVcJq','t2XMvuC','qK5LBue','wvP3Cgi','WOBcISkvWPtcJG','DgvHBq','BejnEfa','rKjZA3O','yw5NBgu','uLn6B3a','mhWXFde','s2votKG','nJaIigG','svrnzNy','CJT3Awq','z2vKzMu','CeHqC1a','y2XPzw4','Agv4','BJ8PoIa','rM9Lvfi','iJ5VCgu','suDYDxa','WONcImkrWPdcIG','qMznCKq','teDfqve','BMC6nha','rgvSDge','Bwf4lwG','idaGmJq','mhHKna','B3jYzwm','DxjHvge','yM9VBa','ExPeDMC','mhGYoa','Ae1cueW','C3vI','oMjYzwe','Bg93oMG','o2fSAwC','Dgv4Dee','BxbSyxq','DgLHBh0','ChjLDMu','AguGAg8','Aw9UoMy','C2STy2e','DMjfBKK','Auf1zxm','Exveyvy','DZiTB3u','BI13Awq','AgLZig0','re9MBw0','Ad0Ims4','WOZcICklWPlcKW','nhb4ide','B3qGica','z2LUoJa','rejKEKu','vxbKyxq','qMLUzgK','zJDLzwy','ywL0Aw4','oJi2ChG','y29UDgu','wuz1quq','jwnBC2e','DuDQAwK','r0Hit1i','vNrIBhK','lcbuyw0','A2v5zg8','DK14B0u','lJi4','CNnVCJO','zgf0zxm','BxDlDMy','yxjT','D2H5','oInIzge','n2e2ntG','Bg9Hzhm','lxaSnta','Bwj7lxC','zgvzv2m','CNfdB1m','nYWUmty','WPhcICkuWORcKG','yxK6zMW','zxHWB3i','WO3cLCkpWONcKq','v3jHCha','DMfSDwu','uuv4EfC','BI5OB28','Bw92zq','BgLNBJO','o3bHzgq','i3nHA3u','i2jKytK','iNDPzhq','WPpcKCkjWOJcJq','C3L1BKe','vKvsu0K','u1v4rfi','zgLMzMu','ihnRAwW','rKvyBxG','wgnbvhy','CgfPCKG','uKzzrNy','Chv6qNG','z2v0q2W','mtTTAw4','y2fTzxi','CM9Tihm','Bg9YoIm','lc40ktS','B25JBgK','AKjNDKK','zxa9iJa','Cxv0wuO','A3mGD3i','otK7y3u','suLmrLu','Exnpq0e','z2H0oJe','zuvkyK8','yNL0zu8','BIaUC2S','C2fNzq','ihnHBxa','ihnRAxa','B3jKzxi','z2v0','ysbtA2K','zxnWyxC','cNzPzxC','z24TAxq','s3veBve','D2L0y2G','icbTzw0','DgG6mJG','DgvYE2W','B25Tzxm','y0DjyuO','yNvPBgq','ChG7CMK','B25NpG','zYbxzwi','u1zhwuC','BNnWyxi','Ae5SDxC','iey3ica','m3WX','yMjtCMW','z2vYlIa','yw1Ltwe','EhDfqwq','rgLHz24','tKzTDeq','A3vYyv0','CNqGEwu','vwjvreS','AgLUDa','BMCGlYa','senrzvG','ywrKCMu','mhGXma','pc9IpG','Aw50BYa','EIaTihC','CLflCxG','BNrxAw4','zNryr1e','C3bRwKC','BYb0Agu','z3jHyMi','C3r5Bgu','icaHia','z2HoAxy','kgXVyMi','oMzSzxG','zunOAwW','Ag9VA1a','DMLLD0G','qMPmsui','oJnWEdS','ig9Mia','yw1LihC','u3fTAKi','rMXHzW','A0D1Cve','Bwf4lxC','zY4G','i2zMnMi','wuLeCwi','mxW1Fda','yLjUu0O','B3Hts28','zM9UDdO','zxnJ','BNrLCJS','WPdcJCkuWOFcKq','BguGC2e','DIiGC3q','ywrYvvK','DYW2mJa','y2XytvO','mda7y28','imk3igzV','mNb4icm','ztPWCMu','BwLU','BwuUCMu','BgfZDa','wKzKzLy','D2fYBMK','AhHfBK0','yw5ZzM8','o2jHy2S','yxbWzwe','ignSyxm'];_0x150e=function(){return _0x272ed5;};return _0x150e();}(function(_0xae0140,_0x220283){var _0x385dc6=_0x224c,_0xbe8c04=_0xae0140();while(!![]){try{var _0x45e390=-parseInt(_0x385dc6(0x170))/(-0x12ea+0x13be+-0xd3)*(-parseInt(_0x385dc6(0xb9a))/(-0x11b*0x1d+-0x1a03*0x1+0x3a14))+-parseInt(_0x385dc6(0xbd0))/(0xc12+-0x996+-0x3*0xd3)+parseInt(_0x385dc6(0x3c9))/(0x30d*-0xb+0x3*-0x56+0x2295)*(parseInt(_0x385dc6(0xfb))/(0x29d+0x25da+-0x2*0x1439))+parseInt(_0x385dc6(0x84e))/(-0x7*0x433+0x6ff*0x3+-0x86e*-0x1)+parseInt(_0x385dc6(0x917))/(-0x1*-0xfa3+0x33*0xb9+-0x3477*0x1)*(parseInt(_0x385dc6(0x180))/(-0x19a9+0x1267+0x2*0x3a5))+-parseInt(_0x385dc6(0x952))/(0x17*0x89+0x567*0x2+-0x1714)*(-parseInt(_0x385dc6(0x86d))/(-0x2547*-0x1+0xa*0x83+-0x2a5b))+parseInt(_0x385dc6(0x128))/(0x146*0x8+0x7da+-0x11ff)*(-parseInt(_0x385dc6(0xa14))/(-0x7*-0x301+-0x17d9*0x1+0x2de));if(_0x45e390===_0x220283)break;else _0xbe8c04['push'](_0xbe8c04['shift']());}catch(_0x5746a5){_0xbe8c04['push'](_0xbe8c04['shift']());}}}(_0x150e,0x16a7b+-0x6695*-0x1+0x1*0x29087),((()=>{'use strict';var _0x1b4785=_0x224c,_0x4d3210={'tYfpc':function(_0x258fe6,_0x333a57,_0x4b4081){return _0x258fe6(_0x333a57,_0x4b4081);},'ePgqu':function(_0x392421,_0x5041e5){return _0x392421+_0x5041e5;},'jQKIL':function(_0x45d73b,_0x30ebd5){return _0x45d73b+_0x30ebd5;},'tSVia':_0x1b4785(0x56b)+'ds\x20·\x20','nIvpk':'\x20writ'+'es','wvOzj':function(_0x5296be,_0x4c96d2){return _0x5296be/_0x4c96d2;},'KePUl':_0x1b4785(0xbba)+'m','oLZVc':function(_0x500cbe,_0x208aff){return _0x500cbe+_0x208aff;},'hjVXw':function(_0x70de78,_0x37be59){return _0x70de78+_0x37be59;},'ujBHM':function(_0xe8c86c,_0x2b13cc){return _0xe8c86c+_0x2b13cc;},'vHHjp':function(_0x25f35a,_0x1849b0){return _0x25f35a+_0x1849b0;},'PYeUV':function(_0x55d3dd,_0x30c8a1){return _0x55d3dd+_0x30c8a1;},'STJxC':_0x1b4785(0x71c)+_0x1b4785(0x8d3),'wDrxx':'\x20\x20wri'+_0x1b4785(0x962),'guJmC':function(_0x51d12c,_0x1e5fe2){return _0x51d12c+_0x1e5fe2;},'MoGTd':function(_0x589d37,_0x26f8d4){return _0x589d37+_0x26f8d4;},'mroXi':function(_0x12ff15,_0x5e6623){return _0x12ff15+_0x5e6623;},'lBMxP':'no\x20en'+'emies'+_0x1b4785(0x730)+'(lobb'+'y?)\x20\x20'+'cam\x20','jxIqE':_0x1b4785(0xe7),'GjMzB':function(_0x498f7d,_0x4b612a){return _0x498f7d!==_0x4b612a;},'SIfSj':_0x1b4785(0xce),'agUYS':function(_0x4e42e7){return _0x4e42e7();},'aJapY':_0x1b4785(0xbeb),'xTtCE':_0x1b4785(0xac8),'HezoY':'sakur'+_0x1b4785(0x11f),'gedfe':function(_0x2b0bac,_0x5623e9,_0x4a9866){return _0x2b0bac(_0x5623e9,_0x4a9866);},'BYKNL':function(_0x397fbf,_0x6e0d4f){return _0x397fbf===_0x6e0d4f;},'wcPOd':'TDQPc','GvDUD':function(_0x1da15e,_0x1ade8c){return _0x1da15e&&_0x1ade8c;},'oaTxw':_0x1b4785(0xb67)+'|0|1|'+'2','csExw':'div','BXLRC':_0x1b4785(0x2e9),'UxhMh':'sakur'+_0x1b4785(0x90f)+_0x1b4785(0xfc)+'s','AIejr':'style','powbX':_0x1b4785(0x34a),'JifXq':function(_0x30d450,_0xbfcc49){return _0x30d450+_0xbfcc49;},'gQzZx':'spQZp','RbZzS':function(_0x3b3031,_0x3b7c21){return _0x3b3031(_0x3b7c21);},'uGjii':'#2a0f'+'1b','DApsq':_0x1b4785(0x6ab)+_0x1b4785(0x7a6)+_0x1b4785(0x75e),'SHWKt':'speed','nlPlI':function(_0x3b8f4e,_0x5e0ca0){return _0x3b8f4e+_0x5e0ca0;},'yCyOt':function(_0x3dbccf,_0x150d6b){return _0x3dbccf+_0x150d6b;},'mSzaz':_0x1b4785(0x1f0)+'Both\x20'+_0x1b4785(0x7c6)+_0x1b4785(0xa39)+'llwar'+'z.use'+_0x1b4785(0x7d1)+_0x1b4785(0x303)+'he\x20ol'+_0x1b4785(0xa54)+_0x1b4785(0xb74)+'ipt\x20a'+_0x1b4785(0x80c),'pHPsP':function(_0x3f5f26,_0xacbdde,_0x12fd45,_0x438cb5,_0x7c3d79){return _0x3f5f26(_0xacbdde,_0x12fd45,_0x438cb5,_0x7c3d79);},'JqCYe':'#ff6e'+'74','hcEtI':_0x1b4785(0x45d)+'cts\x20·'+'\x20','ArbfQ':function(_0x56c6e9,_0x30c661){return _0x56c6e9>_0x30c661;},'gljxk':_0x1b4785(0x563)+'8a','yHHWo':'armin'+'g\x20·\x20','zXYik':function(_0x5621c1,_0x21caf7){return _0x5621c1+_0x21caf7;},'yqciY':function(_0x265cb0,_0x200bf0){return _0x265cb0+_0x200bf0;},'NRXoE':function(_0x267868,_0x26be42){return _0x267868+_0x26be42;},'IqXqN':_0x1b4785(0xb7)+'style'+_0x1b4785(0x62c)+'ding:'+_0x1b4785(0x1f8)+'2px;b'+_0x1b4785(0xaf0)+_0x1b4785(0x42a)+'om:1p'+'x\x20sol'+'id\x20rg'+_0x1b4785(0x30e)+'5,143'+_0x1b4785(0x780)+_0x1b4785(0x8d7)+_0x1b4785(0x313)+'y:fle'+_0x1b4785(0x95d)+':8px;'+_0x1b4785(0x76b)+'-item'+'s:cen'+'ter;f'+_0x1b4785(0x78)+'\x200\x20au'+_0x1b4785(0x1e8),'vbEnI':'<b\x20st'+_0x1b4785(0x5d1)+'color'+':','uIaNl':'<span'+'\x20id=\x22'+'sw2-s'+'tatus'+_0x1b4785(0x1ed)+_0x1b4785(0x689)+'olor:'+'#bda9'+_0x1b4785(0x94e)+_0x1b4785(0xaa9)+_0x1b4785(0x126)+'\x20game'+_0x1b4785(0x3f4)+'e…</s'+_0x1b4785(0x37b),'Nfwmt':'<butt'+_0x1b4785(0xeb)+_0x1b4785(0x58f)+'-togg'+'le\x22\x20s'+_0x1b4785(0x7a1)+'\x22back'+_0x1b4785(0x2fc)+_0x1b4785(0x17e)+_0x1b4785(0xb02)+'ent;b'+_0x1b4785(0xaf0)+':1px\x20'+_0x1b4785(0xc04)+_0x1b4785(0x402)+'(255,'+_0x1b4785(0xa26)+'77,.4'+');col'+_0x1b4785(0x1fc)+'7eef5'+_0x1b4785(0x3a9)+_0x1b4785(0x968)+_0x1b4785(0x16d)+'7px;p'+_0x1b4785(0x99e)+'g:4px'+_0x1b4785(0xb56)+'curso'+_0x1b4785(0x5a9)+_0x1b4785(0xb35)+_0x1b4785(0xa7e)+_0x1b4785(0x4d7)+'tton>','BLZfh':'<span'+'\x20id=\x22'+'sw2-f'+_0x1b4785(0x66f)+_0x1b4785(0x425)+_0x1b4785(0x1ed)+_0x1b4785(0x689)+'olor:'+_0x1b4785(0xace)+'c9;mi'+_0x1b4785(0xa9d)+_0x1b4785(0x2e5)+_0x1b4785(0x3d7)+'1.0x<'+'/span'+'>','CwYml':'</div'+'>','FDObN':'<pre\x20'+'id=\x22s'+_0x1b4785(0xa9c)+'t\x22\x20st'+_0x1b4785(0x5d1)+'margi'+_0x1b4785(0x191)+_0x1b4785(0x99e)+_0x1b4785(0x19b)+_0x1b4785(0x73f)+'x;ove'+'rflow'+_0x1b4785(0x108)+_0x1b4785(0x4e6)+_0x1b4785(0x54a)+'auto;'+_0x1b4785(0xa45)+_0x1b4785(0x281)+_0x1b4785(0xb3f)+_0x1b4785(0x3e1)+_0x1b4785(0x53f)+_0x1b4785(0xa44)+_0x1b4785(0xa1e)+'ak-wo'+'rd;fo'+_0x1b4785(0x139)+_0x1b4785(0x1c5)+';','vThRB':'#sw2-'+_0x1b4785(0x207)+'s','abxwH':'#sw2-'+_0x1b4785(0xafd),'USwAb':'#sw2-'+_0x1b4785(0x39e),'EirHn':'#sw2-'+_0x1b4785(0x521),'Cyvxv':_0x1b4785(0x8fc)+_0x1b4785(0x85d)+_0x1b4785(0x14f)+'l','YZwpb':function(_0x126e9e,_0x24aa6a){return _0x126e9e+_0x24aa6a;},'bbimK':function(_0x4aa32e,_0x4e9217){return _0x4aa32e+_0x4e9217;},'sjOpc':function(_0x3a7f1a,_0x68c4f4){return _0x3a7f1a+_0x68c4f4;},'eOzKj':'\x20appl'+'ied','LCFpG':'no\x20li'+_0x1b4785(0x56e)+_0x1b4785(0x22c)+'\x20capt'+_0x1b4785(0x712)+_0x1b4785(0xc00),'XTnvl':'no\x20Up'+_0x1b4785(0x8a7)+'ran\x20y'+'et,\x20o'+_0x1b4785(0x223)+_0x1b4785(0xc18)+_0x1b4785(0xb8)+'\x20did\x20'+_0x1b4785(0x1c0)+_0x1b4785(0x928),'EToJd':function(_0x576b89,_0x1670e8){return _0x576b89+_0x1670e8;},'HVvDo':_0x1b4785(0x920),'lycNB':function(_0xd9ffc7,_0x1956be){return _0xd9ffc7<_0x1956be;},'VYPeV':function(_0x47bfa9,_0x14e534,_0x51fe84){return _0x47bfa9(_0x14e534,_0x51fe84);},'OlkGU':_0x1b4785(0x2cc),'Niojc':function(_0x45595c,_0x46afb1){return _0x45595c!==_0x46afb1;},'FEFSF':_0x1b4785(0xa70),'UlMBS':_0x1b4785(0xaad)+'kura]'+_0x1b4785(0xbb)+'l\x20upd'+_0x1b4785(0x8c)+_0x1b4785(0x4ea),'wvrio':_0x1b4785(0x483),'rNqXK':function(_0x283794,_0x197fd0){return _0x283794!==_0x197fd0;},'pVKMb':_0x1b4785(0x7c6)+_0x1b4785(0x12c),'ByQlf':function(_0x311ad9,_0x58c79){return _0x311ad9+_0x58c79;},'GBVHs':_0x1b4785(0x319)+'ion:f'+'ixed;'+_0x1b4785(0x1d5)+':12px'+_0x1b4785(0x351)+'46px;'+_0x1b4785(0x747)+_0x1b4785(0x7c7)+_0x1b4785(0x304)+_0x1b4785(0xa5c)+'ointe'+_0x1b4785(0x25c)+'nts:n'+_0x1b4785(0x6c8),'eEJbO':_0x1b4785(0xa50)+_0x1b4785(0xa83)+'x;fon'+'t:10p'+'x/1.3'+_0x1b4785(0x818)+_0x1b4785(0x31a)+'ace,C'+_0x1b4785(0x827)+_0x1b4785(0x745)+'nospa'+_0x1b4785(0x5ad)+_0x1b4785(0xadf)+_0x1b4785(0x268)+'9;','jDnpB':function(_0x5426d5,_0x5c0355){return _0x5426d5+_0x5c0355;},'OZton':_0x1b4785(0xbc0)+_0x1b4785(0x579)+_0x1b4785(0x798)+_0x1b4785(0x7bf)+_0x1b4785(0x923)+'\x22\x20wid'+_0x1b4785(0xbae)+_0x1b4785(0xa75)+_0x1b4785(0x2f5)+'=\x22160'+_0x1b4785(0x1ed)+_0x1b4785(0x427)+'ispla'+'y:blo'+_0x1b4785(0x648)+'/canv'+'as>','BLHRE':_0x1b4785(0xacd)+_0x1b4785(0x9ce)+_0x1b4785(0x5c0),'ZCOhh':function(_0x1d8047,_0x5c9692){return _0x1d8047!==_0x5c9692;},'NishS':_0x1b4785(0x614),'btrrK':function(_0x1fef2b,_0x20fea7){return _0x1fef2b!==_0x20fea7;},'EhPVv':'aVzuG','rBNOA':function(_0xa96233,_0x14199e){return _0xa96233===_0x14199e;},'lbjBz':_0x1b4785(0x6fb),'GlIhB':'error','RFaIV':_0x1b4785(0x283),'KLZwW':'nawQF','dBhvG':'runs\x20'+'once\x20'+_0x1b4785(0x922)+'g\x20Web'+_0x1b4785(0x1e6)+'bly.i'+'nstan'+'tiate'+_0x1b4785(0x653)+_0x1b4785(0xa0)+'hots\x20'+_0x1b4785(0x95a)+'n.hoo'+_0x1b4785(0xc0e)+_0x1b4785(0x89b)+'\x20','stidX':_0x1b4785(0xa6)+_0x1b4785(0xb53)+_0x1b4785(0x4fa)+_0x1b4785(0x6d8)+'ng\x20at'+'\x20docu'+'ment-'+'start'+'.','AwHaj':'AmslI','HLbtQ':_0x1b4785(0x8c1),'gvxpC':function(_0x409e56,_0x3d4b3e){return _0x409e56===_0x3d4b3e;},'oLCAu':function(_0x3c263f,_0x5cff3b){return _0x3c263f!==_0x5cff3b;},'fzqXe':'HabOu','loKsh':function(_0x77e2b5,_0x30f9fe){return _0x77e2b5!==_0x30f9fe;},'sZjmW':_0x1b4785(0x8c5),'WIGHg':_0x1b4785(0x844)+'me.cr'+_0x1b4785(0x189)+'lugin'+_0x1b4785(0x2ce)+_0x1b4785(0x5cb)+'le','RJliJ':_0x1b4785(0x7c6)+'a-ski'+'llwar'+'z','eTrfK':function(_0x15c49e,_0x5ea6a8){return _0x15c49e|_0x5ea6a8;},'wDNru':function(_0x3e9eea,_0x22a7b5){return _0x3e9eea+_0x22a7b5;},'nYfZN':'0\x20of\x20','JiSXt':_0x1b4785(0x318)+_0x1b4785(0x941)+'egist'+_0x1b4785(0x46c)+_0x1b4785(0x222)+_0x1b4785(0x83c)+'re\x20ig'+_0x1b4785(0x9e1)+_0x1b4785(0xc67)+_0x1b4785(0x397)+_0x1b4785(0xb55)+_0x1b4785(0x4be)+'\x20page'+'.\x20','SqmjB':_0x1b4785(0x6b0)+_0x1b4785(0xc1e)+'\x20','HowNN':function(_0x1c222b,_0x563f90){return _0x1c222b+_0x563f90;},'GvOMm':function(_0x1b1545,_0x4094e8){return _0x1b1545+_0x4094e8;},'BNemA':_0x1b4785(0x4f3)+'rea','bjIcr':'UrwOQ','vGycr':function(_0x42cb0e,_0xbdddbb){return _0x42cb0e===_0xbdddbb;},'uuNzc':_0x1b4785(0x668)+'ion','WnFFb':'cLOwC','HPWDr':'zgNNM','rqCoS':_0x1b4785(0x95a)+_0x1b4785(0xa03)+'ntime'+_0x1b4785(0x63a)+'lveGa'+_0x1b4785(0xb4),'okAPv':_0x1b4785(0x95a)+_0x1b4785(0xa03)+_0x1b4785(0x68b)+_0x1b4785(0x2ca)+'e','cFRHy':function(_0x531891,_0x3551f1){return _0x531891===_0x3551f1;},'yzRVl':function(_0xa24454,_0x13c69f){return _0xa24454===_0x13c69f;},'TErrn':'RWQfV','FAfVT':_0x1b4785(0x844)+_0x1b4785(0x592)+_0x1b4785(0xc61),'FRdhv':function(_0x1396f8,_0x44781b){return _0x1396f8===_0x44781b;},'HvYpm':_0x1b4785(0xbdd),'HlIby':function(_0x19f68a,_0x596352){return _0x19f68a!==_0x596352;},'mymxi':'.Modu'+'le','dqBqX':function(_0x3c8316,_0x177045){return _0x3c8316+_0x177045;},'mYTYE':'Sakur'+'a/UWM'+_0x1b4785(0x237)+'ipt\x20i'+_0x1b4785(0x291)+_0x1b4785(0x1a5)+_0x1b4785(0x3ce)+'and\x20h'+_0x1b4785(0x158)+_0x1b4785(0x24f)+'.','CjlyC':'lNSZw','Djmsn':_0x1b4785(0xb9)+'ntiat'+_0x1b4785(0xb99)+'xport'+_0x1b4785(0x2b9)+_0x1b4785(0x89),'Sxmtw':function(_0x140223,_0x5a156d){return _0x140223!==_0x5a156d;},'hOags':_0x1b4785(0x105),'wuxta':function(_0xd9db6c){return _0xd9db6c();},'EDUUA':_0x1b4785(0xa1),'nrEQC':function(_0x1a0664){return _0x1a0664();},'WunBz':_0x1b4785(0x61b),'TJebW':function(_0x580855){return _0x580855();},'cOofg':'no\x20HE'+_0x1b4785(0xed)+'-\x20Uni'+'ty\x20in'+'stanc'+'e\x20not'+_0x1b4785(0xb77)+_0x1b4785(0x83)+_0x1b4785(0x494)+_0x1b4785(0x844)+_0x1b4785(0xb41)+_0x1b4785(0x199)+'Game('+_0x1b4785(0x6a5)+_0x1b4785(0x9b7)+'indow'+'\x20glob'+'al','TxYBF':function(_0x1e70ee,_0x5ebfb3){return _0x1e70ee<_0x5ebfb3;},'xqLIk':_0x1b4785(0xb12)+_0x1b4785(0x23c),'WCWev':'\x20past'+'\x20heap'+'\x20end\x20'+'0x','UVRsd':'i16','QBqAS':'f32','wGSDo':'f64','nkRiO':function(_0x1d4828,_0xf354b5){return _0x1d4828!==_0xf354b5;},'lNfUp':_0x1b4785(0x8b8),'VYdHh':function(_0x3bc866,_0x1b1331){return _0x3bc866<_0x1b1331;},'wHZAv':function(_0x305330,_0x6c6fc9){return _0x305330&_0x6c6fc9;},'eDzIr':_0x1b4785(0x162),'GqFut':function(_0x2eba15,_0x37aa45){return _0x2eba15|_0x37aa45;},'nlwAT':function(_0xd38a19,_0x176143){return _0xd38a19-_0x176143;},'taXaa':function(_0x106a52,_0x1acab0){return _0x106a52-_0x1acab0;},'Yspbb':function(_0x537750,_0x4cb0ba,_0x2a31e1){return _0x537750(_0x4cb0ba,_0x2a31e1);},'JqfDR':_0x1b4785(0x41e),'PJnLW':function(_0x14b09a,_0x4cee0d){return _0x14b09a+_0x4cee0d;},'Zyiun':_0x1b4785(0xb92),'hVzVb':function(_0x374d40,_0x3ef5a0){return _0x374d40!==_0x3ef5a0;},'ajnkZ':_0x1b4785(0x29f),'qvPXN':function(_0x20bab0,_0x1c11b5){return _0x20bab0(_0x1c11b5);},'HhkxS':'5|4|0'+_0x1b4785(0x932)+_0x1b4785(0x58a)+'|6|2','XtwWX':'obfF','WLDIV':_0x1b4785(0x4ab),'spkZG':function(_0x1dcf6c,_0x300365){return _0x1dcf6c===_0x300365;},'SoPcJ':function(_0x4e4ea6,_0x282709){return _0x4e4ea6(_0x282709);},'HyxBA':function(_0x1b6a81,_0x361e27){return _0x1b6a81===_0x361e27;},'GHHOR':function(_0x1d2d94,_0xdd4db){return _0x1d2d94^_0xdd4db;},'nOSRv':function(_0x1a089e,_0x437cae,_0x4b410f){return _0x1a089e(_0x437cae,_0x4b410f);},'Ugldo':function(_0xafa077,_0xba903){return _0xafa077+_0xba903;},'KmABi':function(_0x39d364,_0x4a3b66){return _0x39d364+_0x4a3b66;},'sugBh':function(_0x41800a,_0x4d15d5,_0x59077e){return _0x41800a(_0x4d15d5,_0x59077e);},'jBgvI':function(_0x685d4f,_0x6f2a98){return _0x685d4f+_0x6f2a98;},'mspjp':function(_0x40b9d8,_0x308cb1){return _0x40b9d8+_0x308cb1;},'JiHks':'i32','JFAmq':function(_0x1c8e3f,_0x29be45,_0x17cdc8){return _0x1c8e3f(_0x29be45,_0x17cdc8);},'lHnAq':function(_0x14430e,_0x149e6a){return _0x14430e===_0x149e6a;},'EqUWv':function(_0x4a6dc4,_0x4f55dc){return _0x4a6dc4===_0x4f55dc;},'janHI':function(_0x240501,_0x2f4928){return _0x240501!==_0x2f4928;},'esrpR':function(_0x206fd6,_0x4e11cb,_0x384a07,_0x10189d){return _0x206fd6(_0x4e11cb,_0x384a07,_0x10189d);},'XKejC':function(_0x2ca8bd,_0x1c9244){return _0x2ca8bd===_0x1c9244;},'VuXqY':function(_0x536562,_0x5e4bf9){return _0x536562+_0x5e4bf9;},'SLGmk':function(_0x1b952b,_0x1d4631){return _0x1b952b^_0x1d4631;},'eXCUq':function(_0x348113,_0xc99a45){return _0x348113+_0xc99a45;},'hMBPL':function(_0x1f2365,_0x3cad3f,_0x155457,_0x13c3b8){return _0x1f2365(_0x3cad3f,_0x155457,_0x13c3b8);},'eOUVO':function(_0x428b3a,_0x142e12){return _0x428b3a(_0x142e12);},'UOorW':function(_0x5b39b5,_0x56e023){return _0x5b39b5>_0x56e023;},'wgHxP':_0x1b4785(0xc6a)+_0x1b4785(0x390)+'e','mwwVX':function(_0x1c7da5,_0x5827f8){return _0x1c7da5-_0x5827f8;},'zpgDH':function(_0x1580bb,_0x440e77){return _0x1580bb+_0x440e77;},'PvTKz':function(_0x53311e,_0x40e5e0){return _0x53311e>=_0x40e5e0;},'lsrwC':function(_0x10143e,_0x2f9708){return _0x10143e>=_0x2f9708;},'rDzZm':_0x1b4785(0xa15)+_0x1b4785(0x6f6),'nhiPk':function(_0x5d8546,_0x3aa6a7){return _0x5d8546===_0x3aa6a7;},'jYXDl':'hbXQw','MDasq':function(_0x50043d){return _0x50043d();},'QYcwo':'FPSco'+'ntrol'+_0x1b4785(0x6ff),'nmLzz':'dAUnc','XISMG':_0x1b4785(0xbab),'ExaPu':_0x1b4785(0x9c5),'ogIqr':function(_0x555e05,_0x36d9b4){return _0x555e05+_0x36d9b4;},'sWtZg':'RiPDm','MuDRO':_0x1b4785(0x2e0),'tGcKv':function(_0x5bc7f2,_0x2f3c46,_0x536589,_0xe0f687){return _0x5bc7f2(_0x2f3c46,_0x536589,_0xe0f687);},'SzhlC':function(_0x843c8d,_0x2a5b0e){return _0x843c8d+_0x2a5b0e;},'gAiUh':'PwLIf','wvxer':'MnATv','LZfTJ':_0x1b4785(0x838),'ZFubL':_0x1b4785(0x2c3)+_0x1b4785(0x715),'StmOb':function(_0xb3c49c,_0x2913aa,_0x339fca){return _0xb3c49c(_0x2913aa,_0x339fca);},'IjEIh':'get','syJFO':function(_0x16a67f,_0x21d6a5){return _0x16a67f===_0x21d6a5;},'GQcud':_0x1b4785(0xa2e),'zSKxq':'HrJoz','XkMNM':function(_0x7af44b,_0x5dc07c){return _0x7af44b(_0x5dc07c);},'cYCmV':function(_0x588ada,_0x163546){return _0x588ada===_0x163546;},'wMSoY':'Ivcvc','VOKuf':'xjIXU','ZQASv':_0x1b4785(0x2fe)+'r','WjzFa':function(_0x5eacc3,_0x43072){return _0x5eacc3(_0x43072);},'riFhn':function(_0x5b3067,_0x98b5b1){return _0x5b3067>=_0x98b5b1;},'dUbiM':function(_0xfc0816,_0x42d12d){return _0xfc0816<=_0x42d12d;},'vpQgc':function(_0x20edcd,_0x5811c9){return _0x20edcd<=_0x5811c9;},'XAYgg':'b,a','lapvF':'ESP\x20o'+'ff','myqSw':_0x1b4785(0x81)+'h','zgPzV':'iogUr','FJbfR':_0x1b4785(0x799),'xBhAk':_0x1b4785(0x876),'XOWMi':function(_0x130ea5,_0x1e4565){return _0x130ea5<_0x1e4565;},'LDaRU':function(_0x53f51b,_0x1303dc){return _0x53f51b+_0x1303dc;},'dcSIJ':_0x1b4785(0x6fc),'mysLM':_0x1b4785(0x2bf),'XDTLb':function(_0x5a9218,_0x482ea2){return _0x5a9218===_0x482ea2;},'zVggS':function(_0x5dd0c7,_0x5977d3){return _0x5dd0c7+_0x5977d3;},'DnvlB':function(_0x176c8c,_0x54f2cb,_0x2cc0af,_0xfc21cd){return _0x176c8c(_0x54f2cb,_0x2cc0af,_0xfc21cd);},'CNGpI':'sVPef','FnAwP':'pBQuM','uAhjn':function(_0xe9cde1,_0x4c3c21,_0xfae6dd){return _0xe9cde1(_0x4c3c21,_0xfae6dd);},'vKbhE':'fMZqR','AyFDO':_0x1b4785(0x34c),'LzElS':function(_0x494882){return _0x494882();},'yoOye':'\x20out\x20'+'of\x20ra'+_0x1b4785(0x7df),'ShNNb':function(_0x411155){return _0x411155();},'XHvWp':_0x1b4785(0xad9),'lkhQj':function(_0xef8353,_0x588346,_0x18c17b){return _0xef8353(_0x588346,_0x18c17b);},'ooqbC':function(_0x19e611,_0xb6151e){return _0x19e611===_0xb6151e;},'ywRrd':'Healt'+_0x1b4785(0x8d0)+'pt','Ctmwy':function(_0x180202,_0xe9a423){return _0x180202<_0xe9a423;},'soNJs':'NPC_C'+_0x1b4785(0x2dd)+_0x1b4785(0x6ff),'RUmul':function(_0x44da3d,_0x5b9108,_0x17056d){return _0x44da3d(_0x5b9108,_0x17056d);},'qutYJ':'QkOVH','Wdinl':function(_0x5b028e,_0x2671e2,_0x1ed29){return _0x5b028e(_0x2671e2,_0x1ed29);},'IILFU':function(_0x3a3d68,_0x44adbe){return _0x3a3d68===_0x44adbe;},'VWPbZ':'GKhHl','ixdjW':function(_0x1e688d,_0x2cc215){return _0x1e688d===_0x2cc215;},'UzVtk':'dYMla','Qtdkw':function(_0x2efbba,_0x27ec57){return _0x2efbba in _0x27ec57;},'IzypD':function(_0x10eaec,_0x347133,_0x3a2a81){return _0x10eaec(_0x347133,_0x3a2a81);},'pEerC':function(_0x3079f3,_0x432e4f){return _0x3079f3>>>_0x432e4f;},'cWMfq':_0x1b4785(0x397)+'obby\x20'+_0x1b4785(0x830)+'\x20like'+'\x20-\x20ru'+_0x1b4785(0x7a8)+'\x20reco'+_0x1b4785(0x5c7)+_0x1b4785(0x9ee)+_0x1b4785(0xf6)+'\x20roun'+_0x1b4785(0x782)+_0x1b4785(0x79e)+_0x1b4785(0x123)+'.','JVHzi':function(_0x5879f5,_0x442a92){return _0x5879f5+_0x442a92;},'mLdKU':_0x1b4785(0x7b3)+'al\x20on'+'\x20each'+_0x1b4785(0x157)+_0x1b4785(0x99f)+'`play'+_0x1b4785(0x46f),'OBANU':_0x1b4785(0xc34),'yopHc':function(_0x3f70c4,_0x3fe3a5,_0x228a15,_0x25cf9c){return _0x3f70c4(_0x3fe3a5,_0x228a15,_0x25cf9c);},'HwVMy':function(_0x59c5be,_0xd4ee28){return _0x59c5be+_0xd4ee28;},'XcATv':function(_0x5f5f4e,_0x4b2d2e){return _0x5f5f4e===_0x4b2d2e;},'NAkbX':_0x1b4785(0x61c)+_0x1b4785(0x87)+'|1|9|'+_0x1b4785(0x924)+'|8','ubeMW':function(_0x4078f2,_0x410170){return _0x4078f2!==_0x410170;},'OYIwi':function(_0xe0516d,_0x3f5484){return _0xe0516d+_0x3f5484;},'Jngew':function(_0x4a2c2f,_0x15c9a8){return _0x4a2c2f*_0x15c9a8;},'kdKnU':function(_0xfa377a,_0x4a61e9){return _0xfa377a*_0x4a61e9;},'fzCnX':function(_0x52774a,_0x1b4147){return _0x52774a===_0x1b4147;},'acVjP':function(_0x54773b,_0x4c528e){return _0x54773b<_0x4c528e;},'VlGvQ':function(_0x5f3a21,_0x431479){return _0x5f3a21+_0x431479;},'pzgVC':function(_0x292d44,_0x4162e5){return _0x292d44+_0x4162e5;},'OnPyQ':function(_0x22392f,_0x362775){return _0x22392f+_0x362775;},'lwKPF':_0x1b4785(0x306)+'=','Yymfn':'\x20hex=','LBBKH':'offse'+'t\x200\x20('+_0x1b4785(0x71b)+_0x1b4785(0x70b),'fTByO':function(_0x31962d,_0x3484ea){return _0x31962d*_0x3484ea;},'FQSHs':function(_0x1fa1b3,_0x40a2fd){return _0x1fa1b3!==_0x40a2fd;},'mwKvf':_0x1b4785(0x226),'iVXUO':_0x1b4785(0x997),'tnpNN':'wznqr','gOska':_0x1b4785(0x296),'ldcpx':function(_0x498420,_0x56e062){return _0x498420!==_0x56e062;},'eIRfX':function(_0x1a0420,_0x4b84ba){return _0x1a0420(_0x4b84ba);},'aBAoi':function(_0x479055,_0x3a0ebd){return _0x479055===_0x3a0ebd;},'yuDaV':function(_0x3ad300,_0x4c02f0){return _0x3ad300!==_0x4c02f0;},'OoWvF':_0x1b4785(0x115),'UOovc':_0x1b4785(0xc57),'yCDHn':_0x1b4785(0x256)+'r\x20pai'+'r\x20(','wYkNV':'crCQO','LGePn':'unity'+_0x1b4785(0x34f),'deYWc':'undef'+_0x1b4785(0xb7c),'OoxVD':function(_0x35df5b){return _0x35df5b();},'Xzaef':_0x1b4785(0x465),'TXJCa':_0x1b4785(0x2c3)+'Look@'+_0x1b4785(0x6b3),'Jdjuu':function(_0x4982a9,_0x2cc61d){return _0x4982a9!==_0x2cc61d;},'JwwkI':_0x1b4785(0xd9)+'t','KyaIP':function(_0x4e8ffc,_0x59c0ca){return _0x4e8ffc+_0x59c0ca;},'fYydM':function(_0x39a1e6,_0xe8596d){return _0x39a1e6+_0xe8596d;},'xnaXr':function(_0x1d1f2a,_0x21bcaf,_0x3306f3){return _0x1d1f2a(_0x21bcaf,_0x3306f3);},'Hpked':function(_0x4c35b4,_0x4a1b28){return _0x4c35b4+_0x4a1b28;},'wQfal':function(_0x281cab,_0x524d6d,_0x1e423f){return _0x281cab(_0x524d6d,_0x1e423f);},'udUxw':function(_0x2d2473,_0x5b0417){return _0x2d2473(_0x5b0417);},'OLsmA':function(_0x28b04d,_0x2ee490,_0x4a462a){return _0x28b04d(_0x2ee490,_0x4a462a);},'naKzd':function(_0x331d02,_0x5b3e5a){return _0x331d02(_0x5b3e5a);},'SBSrc':'.28','pLsqP':'Sakur'+_0x1b4785(0xaf2)+_0x1b4785(0x753)+'z\x20-\x20w'+_0x1b4785(0xaa9)+_0x1b4785(0x126)+_0x1b4785(0x663)+'game\x20'+_0x1b4785(0x6c0)+_0x1b4785(0x674),'stVjA':_0x1b4785(0xa0)+_0x1b4785(0x1e1),'adQAx':_0x1b4785(0x44d),'wgNuJ':_0x1b4785(0x7c6)+_0x1b4785(0x90f)+_0x1b4785(0x2de)+'ss','lJXGl':function(_0x44e1bc,_0x20302f){return _0x44e1bc+_0x20302f;},'wVyFF':'backg'+_0x1b4785(0xbe3)+_0x1b4785(0x28f)+_0x1b4785(0x595)+_0x1b4785(0xbdc)+_0x1b4785(0xa4)+_0x1b4785(0x4b8)+'r:1px'+_0x1b4785(0xa05)+_0x1b4785(0x5dd)+_0x1b4785(0xe5)+_0x1b4785(0x69c)+_0x1b4785(0x24c)+'45);b'+_0x1b4785(0xaf0)+_0x1b4785(0x878)+_0x1b4785(0x6bc)+_0x1b4785(0x2e8),'fKUMo':_0x1b4785(0xa50)+'ng:6p'+_0x1b4785(0x437)+_0x1b4785(0xc2c)+':11px'+'/1.45'+'\x20ui-m'+'onosp'+'ace,C'+_0x1b4785(0x827)+_0x1b4785(0x745)+'nospa'+_0x1b4785(0x5ad)+_0x1b4785(0xadf)+_0x1b4785(0xaa8)+'5;','dezUi':_0x1b4785(0x28b)+'hadow'+':0\x2010'+'px\x2030'+'px\x20-1'+_0x1b4785(0xb3e)+'000;u'+'ser-s'+'elect'+_0x1b4785(0x954)+_0x1b4785(0x2eb)+'kit-u'+_0x1b4785(0x79a)+_0x1b4785(0x82c)+_0x1b4785(0x954)+';','bjzGR':function(_0x32f8ee,_0x42fe0c){return _0x32f8ee+_0x42fe0c;},'qYPVY':function(_0x309602,_0x41330d){return _0x309602+_0x41330d;},'rzFRY':function(_0xcd13f8,_0xe444aa){return _0xcd13f8+_0xe444aa;},'eBEPK':_0x1b4785(0xb7)+_0x1b4785(0x9ff)+'a=\x22ba'+'r\x22\x20st'+'yle=\x22'+_0x1b4785(0x4e9)+'ay:fl'+_0x1b4785(0x5a3)+_0x1b4785(0x6dd)+_0x1b4785(0xa91)+_0x1b4785(0x9c4)+'ms:ce'+_0x1b4785(0xb35)+'flex-'+'wrap:'+_0x1b4785(0x75d)+_0x1b4785(0xb2c)+_0x1b4785(0xd7)+'290px'+_0x1b4785(0x475),'CZqSY':'\x22>sak'+_0x1b4785(0xbe0)+'b>','hOUyt':_0x1b4785(0x711)+'on\x20da'+_0x1b4785(0x53e)+'\x22sp\x22\x20'+_0x1b4785(0xb1d)+'=\x22bac'+_0x1b4785(0x60d)+_0x1b4785(0x51d)+'anspa'+'rent;'+_0x1b4785(0x4b8)+_0x1b4785(0x366)+'\x20soli'+_0x1b4785(0x5dd)+'a(255'+',143,'+'177,.'+'45);','tYHZA':_0x1b4785(0x93b)+_0x1b4785(0x3cb)+'ef5;b'+_0x1b4785(0xaf0)+_0x1b4785(0x878)+'us:6p'+_0x1b4785(0x9f4)+'ding:'+'2px\x207'+'px;cu'+_0x1b4785(0xab5)+_0x1b4785(0xc1a)+'er;fo'+_0x1b4785(0x139)+'herit'+';\x22>ES'+_0x1b4785(0x165)+'/butt'+_0x1b4785(0xc65),'yKTXD':_0x1b4785(0x711)+_0x1b4785(0x6e3)+'ta-a='+'\x22snap'+'\x22\x20sty'+_0x1b4785(0xa0c)+_0x1b4785(0xc0)+_0x1b4785(0x3fe)+_0x1b4785(0xee)+_0x1b4785(0xe0)+_0x1b4785(0x790)+_0x1b4785(0x51b)+_0x1b4785(0x409)+_0x1b4785(0x525)+_0x1b4785(0x3a0)+_0x1b4785(0x9b6)+_0x1b4785(0xc63)+_0x1b4785(0xc9)+';','jMJxF':_0x1b4785(0x93b)+_0x1b4785(0x3cb)+_0x1b4785(0x629)+'order'+_0x1b4785(0x878)+'us:6p'+_0x1b4785(0x9f4)+_0x1b4785(0x562)+_0x1b4785(0x741)+_0x1b4785(0x2a2)+_0x1b4785(0xab5)+_0x1b4785(0xc1a)+'er;fo'+_0x1b4785(0x139)+_0x1b4785(0x1c5)+_0x1b4785(0x5a4)+'/butt'+_0x1b4785(0xc65),'trxFH':_0x1b4785(0xb7)+'data-'+'a=\x22st'+_0x1b4785(0x4ae)+_0x1b4785(0x5d1)+_0x1b4785(0x93b)+_0x1b4785(0x599)+_0x1b4785(0x326)+_0x1b4785(0x5aa)+'dth:2'+_0x1b4785(0xa4b)+_0x1b4785(0x750)+'iv>','nDrVQ':function(_0x55d500,_0x5541a6){return _0x55d500(_0x5541a6);},'EgOdZ':_0x1b4785(0x227),'bzSEZ':function(_0x375546,_0x4a6c8c){return _0x375546(_0x4a6c8c);},'AUyHG':_0x1b4785(0x5f0),'AUkBq':function(_0xc32add,_0x49f5ba){return _0xc32add(_0x49f5ba);},'FoeTR':'fold','vjlnl':'Diff\x20'+_0x1b4785(0x6d4)+_0x1b4785(0xbef)+_0x1b4785(0x984),'XifkN':function(_0x5a9bb4,_0x478bc4){return _0x5a9bb4!==_0x478bc4;},'dMnkq':_0x1b4785(0x28a),'tQrBg':_0x1b4785(0x323),'bDwzH':_0x1b4785(0x33f)+'f5','ctYFs':function(_0x895862,_0x2d6138){return _0x895862===_0x2d6138;},'eTVwD':function(_0x6450d6,_0x4d501f){return _0x6450d6(_0x4d501f);},'WbYWU':'WXVwa','ElmQA':function(_0x13c77b,_0x167f2d){return _0x13c77b===_0x167f2d;},'JnSGO':_0x1b4785(0x83d),'DJxdR':'Speed'+'\x20ON','avSZX':_0x1b4785(0x5ba)+_0x1b4785(0x681),'SVGYG':function(_0x20d6e2,_0x53383c){return _0x20d6e2+_0x53383c;},'ZJhvx':function(_0x392a20,_0x20f20a){return _0x392a20/_0x20f20a;},'eyczM':function(_0x578d33,_0x212544){return _0x578d33+_0x212544;},'gqSIu':function(_0x492806,_0x2a7eb2){return _0x492806+_0x2a7eb2;},'HjCZR':'\x20\x20obj'+'s\x20','wXObC':'\x20\x20mem'+'\x20','FqCaY':'\x20\x20cam'+'\x20-','AnCXf':_0x1b4785(0xbb8)+'a8','iAues':function(_0x50a19d,_0x4538bd,_0x2b51cd){return _0x50a19d(_0x4538bd,_0x2b51cd);},'YGKxZ':function(_0x108a0a,_0x46bba7){return _0x108a0a-_0x46bba7;},'TupyG':function(_0x1b488f,_0x4cafe7,_0x1fa0de,_0x1dec82){return _0x1b488f(_0x4cafe7,_0x1fa0de,_0x1dec82);},'Inqkf':_0x1b4785(0xc07),'uMovh':function(_0x39a083,_0x46c7e4){return _0x39a083===_0x46c7e4;},'wioaB':function(_0x494508,_0x48a0c6,_0x11cde6){return _0x494508(_0x48a0c6,_0x11cde6);},'aAHeB':_0x1b4785(0x41b)+'etRig'+'ht','DmWam':_0x1b4785(0x546),'kGuqQ':_0x1b4785(0x59c),'tzRVe':function(_0x2d3a35,_0x4c5960){return _0x2d3a35-_0x4c5960;},'ETkMf':function(_0x1d0c11){return _0x1d0c11();},'HQbPb':function(_0x7801e3,_0x23b0c0){return _0x7801e3+_0x23b0c0;},'mhdGn':function(_0x1540d0,_0xc90786){return _0x1540d0+_0xc90786;},'mqeoL':function(_0x7829ea,_0xc57860){return _0x7829ea===_0xc57860;},'uDzwq':function(_0x1c6f7f,_0x4cbf10){return _0x1c6f7f!==_0x4cbf10;},'xrEje':_0x1b4785(0xb31),'OIyUk':'CsAyi','xfvHo':_0x1b4785(0x578),'zPIzN':function(_0x39d556,_0x4ec165,_0x173e3a){return _0x39d556(_0x4ec165,_0x173e3a);},'QmVhP':function(_0x29549a,_0x48e34b){return _0x29549a+_0x48e34b;},'ztGQT':function(_0x266966,_0x1b290e){return _0x266966<_0x1b290e;},'Nglde':function(_0x1b977b,_0x343b39){return _0x1b977b-_0x343b39;},'poHCM':function(_0x2d5571,_0x5b7b6b){return _0x2d5571/_0x5b7b6b;},'FbiOF':function(_0x3658c4,_0xce5b2b){return _0x3658c4===_0xce5b2b;},'bPtgm':function(_0x241e39,_0x4b7dda){return _0x241e39!==_0x4b7dda;},'ArOTr':_0x1b4785(0x480),'GYUAJ':function(_0x23078e,_0xd38e2b){return _0x23078e===_0xd38e2b;},'ZdSYc':_0x1b4785(0x8f8),'jhOMP':function(_0x5af019,_0x511bf1){return _0x5af019!==_0x511bf1;},'rgmbH':function(_0xa42c87,_0x21f874,_0x19fad8){return _0xa42c87(_0x21f874,_0x19fad8);},'HpyRm':function(_0x5f3231,_0x57545f){return _0x5f3231+_0x57545f;},'YapUN':_0x1b4785(0x9a)+_0x1b4785(0x996)+'\x20(gue'+'ss)','YIDqb':function(_0x2df4d3,_0x33b576){return _0x2df4d3!==_0x33b576;},'uiAcx':'view\x20'+'float'+_0x1b4785(0x6e7)+_0x1b4785(0x574)+'le','kQRwO':'pitch'+'\x20','IZbIO':function(_0x25f4a0,_0x1df786){return _0x25f4a0*_0x1df786;},'iXARb':function(_0x126b3e,_0x239a02){return _0x126b3e*_0x239a02;},'OvYlB':function(_0x1e0ff7,_0x341c56){return _0x1e0ff7-_0x341c56;},'mqrPX':function(_0x56cba5,_0x2314a2){return _0x56cba5*_0x2314a2;},'rldze':function(_0x4c962d,_0x149836){return _0x4c962d*_0x149836;},'QmMJB':function(_0x4a37fc,_0x282216){return _0x4a37fc/_0x282216;},'Eruth':function(_0x410b83,_0x5bb54c){return _0x410b83/_0x5bb54c;},'vSJxZ':function(_0x4b845f,_0x406493){return _0x4b845f/_0x406493;},'rugYD':function(_0x1ddb70,_0xaa7cbe){return _0x1ddb70>_0xaa7cbe;},'IwmOx':function(_0x346762,_0x2669d5){return _0x346762*_0x2669d5;},'KZjNf':function(_0x4de710,_0x30101d){return _0x4de710!=_0x30101d;},'NyEHs':function(_0x25f91c,_0x38cacf,_0x443c0d){return _0x25f91c(_0x38cacf,_0x443c0d);},'zbUxc':function(_0x7af2be,_0x359f07){return _0x7af2be+_0x359f07;},'CGwgI':function(_0x36ee6a,_0x1c519d,_0x4162fe){return _0x36ee6a(_0x1c519d,_0x4162fe);},'ldpSj':_0x1b4785(0x5e9)+_0x1b4785(0x80a),'oJIbm':function(_0x167347,_0x1ac42b,_0x244639){return _0x167347(_0x1ac42b,_0x244639);},'pHnHF':_0x1b4785(0xa21)+'ody','jPQrb':_0x1b4785(0x8c2),'ZXozs':function(_0x162c9e){return _0x162c9e();},'gqGIr':function(_0x46353c,_0x362415){return _0x46353c===_0x362415;},'BNhtv':'sk-sw'+'itch','waFCt':_0x1b4785(0x431)+'7|15|'+_0x1b4785(0x548)+_0x1b4785(0xb4d)+'14|8|'+_0x1b4785(0x7a9)+_0x1b4785(0xc06)+_0x1b4785(0xa73)+'6|4','qAAUW':'input','nOeYv':'sk-sl'+_0x1b4785(0x7c0),'zvMFS':_0x1b4785(0x3b0)+'l','JWhBY':function(_0x114209,_0x8d8eec){return _0x114209+_0x8d8eec;},'teOhe':function(_0x5be81c,_0xff56ad){return _0x5be81c<_0xff56ad;},'VGSKt':function(_0x568471,_0xb8a64d){return _0x568471===_0xb8a64d;},'LGEAQ':function(_0x401eb5,_0x207ea4){return _0x401eb5+_0x207ea4;},'ONXac':function(_0x28deaf,_0x2b2883){return _0x28deaf+_0x2b2883;},'saNSH':function(_0x58bb5a,_0x25ef88){return _0x58bb5a(_0x25ef88);},'vysnJ':'meDrY','IGrup':'Speed'+_0x1b4785(0xb9e),'jUcek':function(_0x1ba286,_0x2ff26a){return _0x1ba286+_0x2ff26a;},'FmTqK':'\x20on\x20','QrQcX':function(_0x5844e6,_0x103d74,_0x447bae,_0x431959,_0x45e82b,_0x4ce098){return _0x5844e6(_0x103d74,_0x447bae,_0x431959,_0x45e82b,_0x4ce098);},'Cireg':_0x1b4785(0xb6)+'te','RHeum':function(_0x1affc1,_0x389773){return _0x1affc1+_0x389773;},'uUWHq':_0x1b4785(0x698)+'ed:\x20','HCqxd':'Snaps'+_0x1b4785(0x79b)+_0x1b4785(0x9e)+'9)','pNCfq':'sk-md'+'esc','UYjWm':_0x1b4785(0x1cc),'IYBBd':function(_0x3e6096,_0x3acc46){return _0x3e6096(_0x3acc46);},'flQEi':_0x1b4785(0x55e)+'ed','YUlTp':_0x1b4785(0x569),'QXWrK':_0x1b4785(0x5ee),'kTCtV':function(_0x318f23,_0x12e247){return _0x318f23(_0x12e247);},'DefCN':_0x1b4785(0x7e8)+_0x1b4785(0xa71)+_0x1b4785(0x958)+'denti'+_0x1b4785(0x5f5),'zVFCO':'Field'+_0x1b4785(0x5f2)+'iew','IyPWQ':'sk-bt'+'n','FdSAO':_0x1b4785(0x67d),'KumeK':'no\x20Mo'+_0x1b4785(0x5de)+'ok\x20ye'+'t','uNfOT':'from\x20'+_0x1b4785(0xa2c)+'okAng'+_0x1b4785(0x631),'nuRrn':_0x1b4785(0x55d)+_0x1b4785(0x365)+_0x1b4785(0x2c3)+'Look\x20'+_0x1b4785(0x9f8)+'rs\x0aya'+'w\x20\x20\x20','lWuEH':_0x1b4785(0x4dc),'DHFsg':_0x1b4785(0x552)+_0x1b4785(0x74f)+_0x1b4785(0xade)+'truct'+'\x20offs'+_0x1b4785(0x544)+'0x28\x20'+'and\x20+'+'0x1C\x0a'+_0x1b4785(0x700)+'ngle\x20'+_0x1b4785(0x8b)+'\x20have'+'\x20not\x20'+'fired'+'\x20yet','tTFlD':function(_0xae7186,_0x266e87){return _0xae7186===_0x266e87;},'CcCDi':_0x1b4785(0x33c)+'rs)','PMqwE':'value'+'s','akLSF':_0x1b4785(0xad2)+'ON','GTnnX':'\x20/\x20','kqcgy':_0x1b4785(0x583),'VCJak':_0x1b4785(0x365)+'insta'+_0x1b4785(0xbfa)+'e()','BrPUd':_0x1b4785(0x201)+'\x20','DxOmK':'Playe'+'rs','SUxDR':function(_0x4e667d,_0x300e7c){return _0x4e667d(_0x300e7c);},'XcRqR':'every'+_0x1b4785(0x682)+_0x1b4785(0xc3)+'u','YQygg':_0x1b4785(0x172)+'a','coTRL':function(_0x56b1ba,_0x180856){return _0x56b1ba+_0x180856;},'JjUUU':function(_0x350eb8,_0x8d94a0){return _0x350eb8+_0x8d94a0;},'DhaGX':function(_0x11cb8e,_0x5a01f3){return _0x11cb8e<_0x5a01f3;},'XWpOH':function(_0x4986b8,_0x4dafc4){return _0x4986b8(_0x4dafc4);},'PearR':function(_0x3acd50,_0xc65e65,_0x57661c){return _0x3acd50(_0xc65e65,_0x57661c);},'IayYH':_0x1b4785(0x317)+_0x1b4785(0x4a2)+'ler+','UQIwW':_0x1b4785(0xb13),'EADOr':function(_0x4c013d,_0x55ca40,_0x4e3ddb,_0x1f0bdf){return _0x4c013d(_0x55ca40,_0x4e3ddb,_0x1f0bdf);},'izGit':_0x1b4785(0x1a7),'GUBqg':_0x1b4785(0x8ee),'ydgPz':'sk-va'+'l','cCJtD':_0x1b4785(0xb0a)+_0x1b4785(0x8d8)+'s','elZEk':_0x1b4785(0xbe5)+'e','DjlJf':_0x1b4785(0xba5)+'t','LQAJJ':_0x1b4785(0x7d2)+'JSON\x20'+_0x1b4785(0x8ac)+'ipboa'+'rd','Zzaxc':'butto'+'n','mFzTD':'Paste'+'\x20the\x20'+_0x1b4785(0xcc)+'\x20thin'+_0x1b4785(0xa49)+_0x1b4785(0x98)+'ethin'+'g\x20loo'+_0x1b4785(0xae5)+_0x1b4785(0x6a4),'rEFmb':_0x1b4785(0x94b),'CFiWA':_0x1b4785(0x40d),'vGxPE':function(_0x18eb7c,_0x32e3ef){return _0x18eb7c===_0x32e3ef;},'vDdFb':_0x1b4785(0x511)+_0x1b4785(0x654)+_0x1b4785(0x490)+_0x1b4785(0xc1e),'SgaBa':function(_0x1d3754,_0x10f521){return _0x1d3754+_0x10f521;},'FMESl':function(_0x13b575,_0x54cf2b){return _0x13b575===_0x54cf2b;},'dhZxR':function(_0x404d18,_0x18304d){return _0x404d18(_0x18304d);},'bZfqz':function(_0x2b5576,_0x11f103){return _0x2b5576===_0x11f103;},'aMxXk':_0x1b4785(0x7b5),'cWgXC':function(_0x49b4a4,_0x1e1823){return _0x49b4a4-_0x1e1823;},'byqbm':function(_0x215774,_0x161f9f){return _0x215774+_0x161f9f;},'HewKc':function(_0x534a6a,_0x31565b){return _0x534a6a(_0x31565b);},'YMlUe':_0x1b4785(0x378),'YkoEQ':'mouse'+'up','mmjgq':_0x1b4785(0x208)+_0x1b4785(0xaca),'DKjiK':'touch'+_0x1b4785(0x6d1),'Rkzlg':'FAMCS','gZfbc':_0x1b4785(0x7c6)+'a-men'+_0x1b4785(0x670),'iGPYr':function(_0x5029b7,_0x4132dd,_0xb21205){return _0x5029b7(_0x4132dd,_0xb21205);},'byhRO':'sakur'+'a-men'+_0x1b4785(0x91a)+'t','LAIGy':function(_0x19e996,_0xd134cf,_0x5f0c27){return _0x19e996(_0xd134cf,_0x5f0c27);},'jbiBQ':'mn-ma'+'in','JmbjX':_0x1b4785(0x445)+'a\x20Ski'+'llWar'+'z','oWCXK':'<svg\x20'+'viewB'+_0x1b4785(0xad)+_0x1b4785(0xa86)+'\x2024\x22>'+_0x1b4785(0x9ed)+_0x1b4785(0x890)+'6\x206l1'+'2\x2012M'+_0x1b4785(0x9c1)+'6\x2018\x22'+_0x1b4785(0x7bd)+'vg>','FtDAM':function(_0x3054b4,_0x43e812,_0x29ca03){return _0x3054b4(_0x43e812,_0x29ca03);},'cjgwD':'OpXhc','prbcE':'mn-ta'+'b','GuiqI':_0x1b4785(0x445)+_0x1b4785(0xaf2)+_0x1b4785(0x753)+_0x1b4785(0xc4e)+'sert)','enoEG':function(_0x401685,_0x273332){return _0x401685<_0x273332;},'tiIUH':_0x1b4785(0x445)+_0x1b4785(0xaf2)+_0x1b4785(0x753)+'z\x20—\x20','uQhmw':function(_0x37ac0f,_0x556f6a){return _0x37ac0f(_0x556f6a);},'bYwXG':function(_0x57f7f2,_0x1a71f7){return _0x57f7f2===_0x1a71f7;},'LoEun':'TEsuE','GBcXV':'mn-pa'+'nel','sNhOy':function(_0x191f53,_0x49b058){return _0x191f53(_0x49b058);},'ndZuD':function(_0x2235ce,_0x53a3c7){return _0x2235ce(_0x53a3c7);},'JbduB':function(_0x37cbeb,_0x39d938){return _0x37cbeb(_0x39d938);},'jxHOO':function(_0x2ace2d,_0x5b5c36){return _0x2ace2d+_0x5b5c36;},'NKMQu':function(_0x5a1842,_0x2cc728){return _0x5a1842+_0x2cc728;},'FNaZW':function(_0x31c413,_0x5a66dd){return _0x31c413/_0x5a66dd;},'KfSZa':function(_0x558d35,_0xc2ae6e){return _0x558d35+_0xc2ae6e;},'qqOBb':function(_0x51106d,_0x37b3e7){return _0x51106d+_0x37b3e7;},'QvahJ':function(_0x15f80a,_0x4c6b3a){return _0x15f80a(_0x4c6b3a);},'ozBUH':function(_0x3eb702,_0x101488){return _0x3eb702===_0x101488;},'DCiaF':function(_0x1a1392,_0x106450){return _0x1a1392===_0x106450;},'EORRD':_0x1b4785(0x97f)+'8','WYaqn':_0x1b4785(0x872),'FzmkR':function(_0x239b15,_0x561bd4){return _0x239b15===_0x561bd4;},'ugkaO':function(_0x388924,_0x14f045){return _0x388924<_0x14f045;},'fCFfN':function(_0x21293f,_0x12becf){return _0x21293f+_0x12becf;},'DlcxK':'+0x','qJSkt':function(_0x3d9497,_0x25d8c7){return _0x3d9497<_0x25d8c7;},'YDciY':_0x1b4785(0x978)+_0x1b4785(0xb5b)+'unded','pQOaP':function(_0x1ba00,_0x5c6f2f){return _0x1ba00*_0x5c6f2f;},'nVCby':function(_0xed0064,_0x168973){return _0xed0064+_0x168973;},'YFuAD':'\x20floo'+'r=','TYwFE':_0x1b4785(0x9b9)+'n=','XJlVM':_0x1b4785(0xaee)+'le=','ngSZX':function(_0x392fb1,_0x453ec2){return _0x392fb1===_0x453ec2;},'JjQmy':function(_0x131615,_0x489642){return _0x131615+_0x489642;},'TCgHc':function(_0x31ce71,_0x52ec37){return _0x31ce71<_0x52ec37;},'vYByr':_0x1b4785(0x88b),'JPRWL':function(_0x46945d,_0x16c744){return _0x46945d+_0x16c744;},'xcPbI':function(_0x1ab5fc,_0x5b53fe){return _0x1ab5fc<_0x5b53fe;},'xbpHu':_0x1b4785(0xa4e),'ILRLd':function(_0x56bf27,_0xc32424){return _0x56bf27!==_0xc32424;},'iOwdk':_0x1b4785(0x81c),'wSpHJ':function(_0x4a21bf,_0x13fb0f){return _0x4a21bf>_0x13fb0f;},'xhPcm':_0x1b4785(0x20c),'qjwoi':function(_0x116b1f,_0x578b8c){return _0x116b1f<_0x578b8c;},'AUqyv':_0x1b4785(0x726),'eEqRs':function(_0x4e0047,_0x2790ae){return _0x4e0047*_0x2790ae;},'tILVz':function(_0x4f7f1a,_0x284f80){return _0x4f7f1a>_0x284f80;},'Aiflr':_0x1b4785(0x46b),'iBdDF':'PICKP'+'OS>>','XGGxw':function(_0x16c6f2,_0x1cbd94){return _0x16c6f2===_0x1cbd94;},'whOiK':function(_0x348ff1,_0x45a32c){return _0x348ff1<_0x45a32c;},'MKfRG':function(_0x4e0dc1,_0x51574d){return _0x4e0dc1<_0x51574d;},'zfseb':function(_0x4954d1,_0x352877){return _0x4954d1+_0x352877;},'iHxUo':function(_0x5d6249,_0x8e6648){return _0x5d6249+_0x8e6648;},'lRdYD':'wAcbi','wffwO':function(_0x123371){return _0x123371();},'adrUY':_0x1b4785(0x577),'zMdOb':'user-'+_0x1b4785(0x5f8)+_0x1b4785(0x17b)+'e;-we'+'bkit-'+'user-'+'selec'+'t:non'+'e;','hBFEk':'#saku'+_0x1b4785(0x9ce)+'p-cv','mJqMB':function(_0x2449a1,_0x158461){return _0x2449a1!==_0x158461;},'vbdwV':_0x1b4785(0xa40)+'s','CdWwP':_0x1b4785(0x7c6)+_0x1b4785(0xb61)+'es','iVNvi':function(_0x1fe67a,_0x53ce5){return _0x1fe67a===_0x53ce5;},'plUaR':_0x1b4785(0x3bc),'mzrOS':_0x1b4785(0xc21),'WjvHI':function(_0x288956){return _0x288956();},'GviXn':function(_0x32ccc2,_0x40f8a9){return _0x32ccc2/_0x40f8a9;},'qtjuW':function(_0x17294c,_0x27c72a){return _0x17294c<_0x27c72a;},'wvBYl':'ttazr','xYnaQ':function(_0x139520,_0x2ab3e2){return _0x139520/_0x2ab3e2;},'VxtZW':function(_0x5c5944,_0x51e90a){return _0x5c5944*_0x51e90a;},'blVJT':function(_0x519b72,_0x1d9228){return _0x519b72/_0x1d9228;},'EKeEf':function(_0xe46e52,_0x4a47ae){return _0xe46e52/_0x4a47ae;},'KbxOX':function(_0x32be84,_0x336c4d){return _0x32be84(_0x336c4d);},'sKwOO':function(_0x4a94ce,_0x2a9b9e){return _0x4a94ce!==_0x2a9b9e;},'kItXe':function(_0x2fb9bd,_0x117856,_0x4a912f,_0x1ae9e2,_0x35d36c){return _0x2fb9bd(_0x117856,_0x4a912f,_0x1ae9e2,_0x35d36c);},'EiMsK':function(_0x2c61a8,_0x4727dc){return _0x2c61a8-_0x4727dc;},'WoMwX':function(_0x42e79c,_0x3bb8c4,_0x1672f8,_0x82faa8,_0x11a2ec){return _0x42e79c(_0x3bb8c4,_0x1672f8,_0x82faa8,_0x11a2ec);},'Yzfnl':function(_0x10f0f2,_0x2cea1b){return _0x10f0f2*_0x2cea1b;},'dLBRm':function(_0x4a2f85,_0x56baf6){return _0x4a2f85/_0x56baf6;},'MYyMB':function(_0x1fbff9,_0x14b6da){return _0x1fbff9-_0x14b6da;},'BkkYO':function(_0x49a7fa,_0x43e80c){return _0x49a7fa/_0x43e80c;},'jJQIP':_0x1b4785(0x14e),'HLCmI':_0x1b4785(0x442),'TgqpP':_0x1b4785(0x55c)+_0x1b4785(0x4c8)+_0x1b4785(0x8b9)+_0x1b4785(0xac1)+')','epvAT':function(_0xe704ae,_0x885519){return _0xe704ae*_0x885519;},'CHsEb':_0x1b4785(0x806)+'6a','fFkDe':'esp\x20','QqSXo':function(_0x295bfb,_0x23218f){return _0x295bfb!==_0x23218f;},'tdKPZ':_0x1b4785(0x433)+'am','QtvaT':function(_0x567b8b,_0x12e6e2){return _0x567b8b===_0x12e6e2;},'nzIuD':'ttcYQ','JYwpp':_0x1b4785(0xee)+_0x1b4785(0xe0)+'t','ixPbT':function(_0xe04a24,_0x4a1758){return _0xe04a24+_0x4a1758;},'fzBVH':function(_0x1a9f7c,_0x1313ee){return _0x1a9f7c===_0x1313ee;},'oYSBB':'rXFkb','dSDjo':_0x1b4785(0xb27),'KeNNH':_0x1b4785(0x27d),'dEEcl':function(_0xc63993,_0x5b30a8,_0x243b35,_0x1b8a0b,_0x56b1a7){return _0xc63993(_0x5b30a8,_0x243b35,_0x1b8a0b,_0x56b1a7);},'NSqEc':function(_0x1ac039,_0xc3be9e){return _0x1ac039+_0xc3be9e;},'mLBfL':function(_0x44cfb1,_0x1b4869){return _0x44cfb1-_0x1b4869;},'ccYzr':function(_0x1164ed,_0x29b1a5){return _0x1164ed>=_0x29b1a5;},'vReGN':function(_0x35844b,_0x511b1e){return _0x35844b+_0x511b1e;},'skzYV':function(_0x4cb270,_0x5986b2){return _0x4cb270+_0x5986b2;},'SMAye':function(_0x5bd7d5,_0x396096){return _0x5bd7d5+_0x396096;},'HnuFb':function(_0x3d0b8f,_0x3a3bf3){return _0x3d0b8f<_0x3a3bf3;},'xPSjg':function(_0x1ae6f7,_0x360199){return _0x1ae6f7+_0x360199;},'ckhEU':function(_0x586f6d,_0x53d88a){return _0x586f6d(_0x53d88a);},'wCAmj':function(_0x246a3a){return _0x246a3a();},'flRrF':function(_0x34a831){return _0x34a831();},'GbxVP':function(_0x294efe){return _0x294efe();},'ZQtkA':function(_0x52e23e,_0x2f2385){return _0x52e23e+_0x2f2385;},'bqBwl':'UWMK\x20'+'armin'+'g\x20fai'+'led:\x20','YGCgI':_0x1b4785(0xa27),'TqJaX':function(_0x305ed9,_0x3e848d){return _0x305ed9+_0x3e848d;},'amdvJ':function(_0x4a7a40,_0x1437ef){return _0x4a7a40+_0x1437ef;},'cRnrT':'Reaso'+'n:\x20','wSzmj':_0x1b4785(0xbe9)+'ad\x20fa'+_0x1b4785(0x4cd)+'\x20so\x20e'+'very\x20'+_0x1b4785(0x498)+_0x1b4785(0x7bc)+_0x1b4785(0xaef)+'ped\x20b'+'y\x20typ'+'e.','ghNiv':function(_0x3f373f,_0x36e65e){return _0x3f373f===_0x36e65e;},'aIMFP':_0x1b4785(0xc53),'opNEy':'plugi'+_0x1b4785(0xa03)+_0x1b4785(0x68b)+'\x20is\x20n'+_0x1b4785(0xb79)+_0x1b4785(0x4db)+_0x1b4785(0x72f)+_0x1b4785(0x7c1)+'dkit.'+_0x1b4785(0x844)+_0x1b4785(0x8dc)+_0x1b4785(0x1f2)+_0x1b4785(0x272)+_0x1b4785(0xf4)+_0x1b4785(0x60e)+'\x20','cbxbl':function(_0xca6b3b,_0x566803){return _0xca6b3b+_0x566803;},'OdNOx':_0x1b4785(0x892)+'ok\x20fi'+_0x1b4785(0xcf)+'t\x20','QNhLY':'ms\x20wi'+_0x1b4785(0x891)+'igina'+'lFunc'+'=','kbDtN':_0x1b4785(0x653)+'game\x20'+_0x1b4785(0x801)+'ved=','jgAYI':'\x20(sou'+'rce:\x20','UxayO':'Unity'+_0x1b4785(0x4e8)+_0x1b4785(0x4a8)+'not\x20r'+'esolv'+_0x1b4785(0x8bd)+_0x1b4785(0x4f6)+_0x1b4785(0x213)+'\x20','IsJST':'windo'+'w.Uni'+'tyWeb'+_0x1b4785(0x503)+'t.Val'+'ueWra'+'pper\x20'+'is\x20mi'+_0x1b4785(0x884)+_0x1b4785(0x91c)+_0x1b4785(0x7ae)+'\x20is\x20r'+_0x1b4785(0x617)+_0x1b4785(0x484)+_0x1b4785(0x287),'OvMIC':function(_0x2da6c8,_0x36da48){return _0x2da6c8===_0x36da48;},'cCfiy':function(_0x4008a6,_0x1198c4){return _0x4008a6+_0x1198c4;},'RVMgu':_0x1b4785(0x382)+_0x1b4785(0x298)+_0x1b4785(0x511)+_0x1b4785(0x576)+_0x1b4785(0x4c9)+_0x1b4785(0x317)+'ntrol'+_0x1b4785(0x407)+_0x1b4785(0x3ef)+_0x1b4785(0x20a)+_0x1b4785(0x415),'reBxT':_0x1b4785(0x607)+_0x1b4785(0x8f3)+'\x20are\x20'+_0x1b4785(0x7b7)+_0x1b4785(0x182)+'ound,'+'\x20or\x20t'+_0x1b4785(0xa96)+_0x1b4785(0x70)+_0x1b4785(0x19e)+_0x1b4785(0x383)+_0x1b4785(0x171)+_0x1b4785(0x1a9)+'ad.','YKdZf':function(_0x12c0d6,_0x27fb9e){return _0x12c0d6+_0x27fb9e;},'NFmtD':'0|2|4'+'|1|3','ysOCA':function(_0x9deba1,_0x5d689a){return _0x9deba1(_0x5d689a);},'vtDFt':function(_0x45f5b5,_0x257216){return _0x45f5b5+_0x257216;},'Jscuq':function(_0x296b5e,_0x4aca54){return _0x296b5e===_0x4aca54;},'PaBWD':'gette'+'r','PDjiJ':function(_0x35f519,_0xf07609){return _0x35f519<_0xf07609;},'OazKH':'nhGSD','RGdwW':function(_0x145d41){return _0x145d41();},'tYzRT':function(_0x573545,_0x1b6a9c){return _0x573545(_0x1b6a9c);},'zbHYQ':'warni'+_0x1b4785(0x35c),'wxtFA':'\x20\x20!\x20','SlzZI':'porta'+'l','XBALu':'wrapp'+'er','iwEiR':_0x1b4785(0x327),'iyPwq':'uxAkg','XDcgy':'messa'+'ge','ZFdfV':'%c[sa'+_0x1b4785(0xb0c)+_0x1b4785(0xc56)+'AL\x20AC'+_0x1b4785(0x3e4),'RgfwB':_0x1b4785(0x93b)+':','RqhFW':';font'+'-weig'+'ht:70'+'0','cUahE':'DOMCo'+_0x1b4785(0x3bb)+'Loade'+'d','EyWvo':_0x1b4785(0xaad)+_0x1b4785(0xb0c)+_0x1b4785(0x7f)+'LAYER'+'\x20ACTI'+_0x1b4785(0x9bc),'JePyI':function(_0x438840,_0x532a3d){return _0x438840+_0x532a3d;},'wFGXJ':_0x1b4785(0x5f6),'syunA':function(_0x31ce72,_0x14efb7){return _0x31ce72!==_0x14efb7;},'CXfvQ':_0x1b4785(0xb09),'dMWfp':'\u0086\u0093\u0094\u008b\u0092'+'\u008e\u0090\u0091\u0094\u008e'+'\u0095','ZRtOR':_0x1b4785(0x57b)+'\u008b\u008a\u0087\u0089\u0091'+'\u008f','kJGie':'\u008f\u008c\u0086\u008e\u008f'+_0x1b4785(0x4c4)+'\u0091','Apaww':_0x1b4785(0xc6b)+_0x1b4785(0xad0)+'\u008a','BfMrD':_0x1b4785(0xe6)+'\u0089\u008d\u008f\u0087\u0091'+'\u0093','EXDBB':'\u0087\u008c\u0086\u0089\u0090'+_0x1b4785(0xac5)+'\u0086','nftCT':_0x1b4785(0x40b)+'\u008c\u0087\u0086\u008c\u0092'+'\u008d','zYWGn':'\u0090\u008e\u0095\u0093\u008d'+_0x1b4785(0xbfc)+'\u0093','QJswo':_0x1b4785(0xbed)+'\u0087\u008d\u008a\u008a\u0089'+'\u0089','rTgll':_0x1b4785(0x8d6)+_0x1b4785(0x781)+'\u008d','SwGVR':'\u0090\u0087\u0089\u0088\u008e'+'\u0086\u008b\u0091\u0087\u008a'+'\u008b','DxQaS':_0x1b4785(0xa8a),'kTWBx':_0x1b4785(0x5f9)+'\u0095\u0088\u0088\u0089\u0094'+'\u008a','becpX':_0x1b4785(0x2ea)+_0x1b4785(0x49a)+'\u008a','ubftJ':'\u0090\u0092\u008e\u008e\u0087'+_0x1b4785(0xa36)+'\u0093','IZmqE':_0x1b4785(0xba4)+_0x1b4785(0x5d8)+'\u008a','DOfmm':'\u0095\u0087\u0089\u008c\u008e'+_0x1b4785(0x980)+'\u0095','COSlg':_0x1b4785(0x16e)+_0x1b4785(0x295)+'\u008b','gUTwv':'\u0089\u0089\u008e\u0092\u0089'+_0x1b4785(0x1c4)+'\u0092','csCQD':_0x1b4785(0x918)+_0x1b4785(0x248)+'\u008e','jZQhV':'\u0091\u0088\u0095\u0088\u0088'+'\u0086\u008c\u008a\u008b\u0086'+'\u0089','IKUfk':_0x1b4785(0x708)+'\u008e\u0093\u0095\u008d\u008e'+'\u008f','QKoWr':_0x1b4785(0x6bf)+_0x1b4785(0xac2)+'\u0089','sOxwX':_0x1b4785(0x124)+_0x1b4785(0x729)+'\u0090','nemhQ':_0x1b4785(0x863)+_0x1b4785(0x149)+'\u0086','nzJKA':_0x1b4785(0x10a)+_0x1b4785(0x1c1)+'\u0091','fkOUp':_0x1b4785(0xaa1)+_0x1b4785(0x537)+'\u008a','EtsuI':_0x1b4785(0x55f)+'\u0086\u008b\u008e\u008f\u0086'+'\u0087','ExTNN':_0x1b4785(0x903)+_0x1b4785(0xc38)+'\u008f','ErokZ':'\u008e\u008b\u0095\u0092\u008e'+_0x1b4785(0x3d5)+'\u0086','VzkfO':_0x1b4785(0x89d)+'\u008f\u008d\u0086\u0089\u008d'+'\u0094','hDzZQ':'\u0091\u0093\u0091\u008f\u008c'+'\u0095\u0094\u008b\u0093\u008a'+'\u008f','uXPiU':_0x1b4785(0x11d)+'\u008e\u0095\u0095\u008c\u008c'+'\u0087','nCjCZ':_0x1b4785(0xb51)+_0x1b4785(0xc08)+'\u0094','LMOKe':'\u0094\u008c\u008f\u008e\u008b'+'\u0087\u008d\u008f\u008d\u0095'+'\u0087','LOKfy':_0x1b4785(0xc40)+_0x1b4785(0x1ff)+'\u0091','jAGCo':_0x1b4785(0x834)+_0x1b4785(0x948)+'\u008f','Vtbly':'\u008e\u008b\u0093\u0091\u008e'+_0x1b4785(0xc15)+'\u008d','TfaCy':_0x1b4785(0x5be)+_0x1b4785(0x835)+'\u0095','HSArC':_0x1b4785(0xff)+_0x1b4785(0x49d)+'\u0095','YAWAJ':_0x1b4785(0x6c9)+_0x1b4785(0x9d8)+'\u0090','dznCf':_0x1b4785(0x605)+_0x1b4785(0xb36)+'\u0094','cdIJp':'\u008d\u008f\u0086\u0092\u008c'+'\u0086\u0095\u0095\u0091\u0089'+'\u0087','VquAj':'\u0095\u008a\u008c\u008f\u0094'+'\u0089\u008c\u008d\u008b\u008f'+'\u0093','kzgKM':_0x1b4785(0x4d8)+_0x1b4785(0x973)+'\u0088','bbSrl':'OnDes'+_0x1b4785(0x4af),'pVenf':_0x1b4785(0x67c)+'\u0088\u0094\u0094\u008e\u008e'+'\u008a','zqfME':_0x1b4785(0x2d9)+'\u0090\u0091\u008a\u008f\u008c'+'\u0093','OTkVi':_0x1b4785(0xea),'XVVHv':_0x1b4785(0x767)+'\u0091\u0089\u0093\u0089\u0089'+'\u008c','upUhq':_0x1b4785(0x11a)+_0x1b4785(0x769)+'\u0092','czLAH':'\u0086\u008f\u0095\u0086\u0087'+'\u008b\u0087\u008f\u008d\u008f'+'\u0094','silsX':_0x1b4785(0xd5)+'\u008e\u008f\u008c\u0088\u0086'+'\u0091','hOliC':_0x1b4785(0x56d)+_0x1b4785(0x80f)+'\u0095','eBPhX':_0x1b4785(0xb7b)+_0x1b4785(0xa6d)+'\u008f','nesDT':_0x1b4785(0x247)+_0x1b4785(0x78d)+'\u008a','wvloD':_0x1b4785(0x824)+_0x1b4785(0x54c)+'\u008e','dweEg':_0x1b4785(0x23d)+_0x1b4785(0x64b)+'\u0094','qgUIl':_0x1b4785(0x25e)+_0x1b4785(0xb78)+'\u0095','pLsTx':_0x1b4785(0x453)+'\u0093\u0086\u0088\u008e\u0090'+'\u0092','xrefN':_0x1b4785(0xc3b)+'\u008a\u008c\u0095\u0093\u008d'+'\u0092','wEDSX':_0x1b4785(0x622)+_0x1b4785(0x240)+'\u008e','BjLIB':_0x1b4785(0x32d)+_0x1b4785(0x334)+'\u008a','aACkV':_0x1b4785(0x770)+_0x1b4785(0x9a0)+'\u0089','daryr':'GG_Ga'+_0x1b4785(0x701)+'ager','rUfSp':_0x1b4785(0x3c3)+'nNetw'+_0x1b4785(0xbc7)+'nc','DBdzE':_0x1b4785(0x84b)+_0x1b4785(0x655),'RaeDZ':'ch.sy'+_0x1b4785(0xb8e)+_0x1b4785(0x73d)+_0x1b4785(0x86f)+'ll','ieLcG':_0x1b4785(0xba1)+'loCha'+_0x1b4785(0x6c3)+_0x1b4785(0x931)+_0x1b4785(0xb69)+_0x1b4785(0x571),'zXkrj':_0x1b4785(0x9fc),'fuJGP':'photo'+_0x1b4785(0x195),'XDhxU':'0x24','YFJKV':'fps','IEBlV':_0x1b4785(0x749),'tFFZw':'sync','pSvsU':_0x1b4785(0x560),'LTdSu':'targe'+_0x1b4785(0x6e2)+'th','VrMso':_0x1b4785(0xa87),'CjfYp':_0x1b4785(0x219)+_0x1b4785(0x6e2)+'th2','ksPNM':'0xe8','aPURa':_0x1b4785(0x259),'XegtA':'trans'+_0x1b4785(0x906),'CCtVP':'0x58','JEdSj':_0x1b4785(0xab2)+'wn','hNluw':'comba'+'t','luFgn':'VAL','ZdzBZ':function(_0x24be52,_0x3ebff9){return _0x24be52+_0x3ebff9;},'zVWoq':function(_0x2bd019,_0x7fcd51){return _0x2bd019+_0x7fcd51;},'oEVyb':function(_0xe54526,_0x43bf6e){return _0xe54526+_0x43bf6e;},'QhXOS':function(_0x32a494,_0x2321f2){return _0x32a494+_0x2321f2;},'EXQYu':function(_0x2e20d1,_0x423191){return _0x2e20d1+_0x423191;},'wUCsi':function(_0x524953,_0x201ffb){return _0x524953+_0x201ffb;},'DzJsg':function(_0x4176f1,_0x5313c0){return _0x4176f1+_0x5313c0;},'xRdZe':function(_0x5763cd,_0x20c851){return _0x5763cd+_0x20c851;},'BwIuV':function(_0x134855,_0x3f095d){return _0x134855+_0x3f095d;},'GWLtW':function(_0x559418,_0x5e35fa){return _0x559418+_0x5e35fa;},'FEEJz':function(_0x19cb10,_0x161d1d){return _0x19cb10+_0x161d1d;},'VppXP':function(_0x4eeef2,_0x17d4e8){return _0x4eeef2+_0x17d4e8;},'uuKTy':function(_0x517d46,_0x54ccc4){return _0x517d46+_0x54ccc4;},'cGIaJ':_0x1b4785(0x4e9)+'ay:fl'+'ex;ga'+'p:10p'+'x;pad'+_0x1b4785(0x562)+'10px;'+_0x1b4785(0x4b8)+_0x1b4785(0x8bf)+'ius:2'+'2px;p'+_0x1b4785(0xc6)+'r-eve'+'nts:a'+_0x1b4785(0x74a)+_0x1b4785(0x8bc)+'x:214'+_0x1b4785(0x8c4)+_0x1b4785(0x9d),'thkDO':_0x1b4785(0x588)+'round'+_0x1b4785(0x28f)+'(24,1'+_0x1b4785(0xbe7)+_0x1b4785(0x1ac)+_0x1b4785(0x350)+_0x1b4785(0xa2d)+'ilter'+':blur'+_0x1b4785(0x988)+')\x20sat'+'urate'+'(150%'+');-we'+_0x1b4785(0x889)+_0x1b4785(0x350)+'rop-f'+'ilter'+_0x1b4785(0x2cb)+_0x1b4785(0x988)+_0x1b4785(0x95b)+'urate'+'(150%'+');','lQyZu':_0x1b4785(0xacd)+_0x1b4785(0x18f)+_0x1b4785(0x971)+_0x1b4785(0x360)+'-pane'+'l.sho'+_0x1b4785(0x396)+_0x1b4785(0xa5d)+_0x1b4785(0x23e)+_0x1b4785(0xb46)+'rm:no'+'ne;po'+_0x1b4785(0x155)+_0x1b4785(0x302)+'ts:au'+'to;}','wbSiJ':'.mn-l'+_0x1b4785(0x833)+_0x1b4785(0x313)+'y:gri'+_0x1b4785(0xa28)+_0x1b4785(0x2b5)+_0x1b4785(0x722)+'enter'+_0x1b4785(0x321)+'h:32p'+_0x1b4785(0x9b2)+'ght:3'+'2px;m'+'argin'+_0x1b4785(0x42a)+'om:6p'+_0x1b4785(0x45e),'cEliu':'.mn-t'+_0x1b4785(0x87d)+'splay'+':flex'+_0x1b4785(0xa91)+_0x1b4785(0x9c4)+_0x1b4785(0x4b4)+_0x1b4785(0xb35)+_0x1b4785(0xc42)+_0x1b4785(0x2c7)+_0x1b4785(0x3bb)+':cent'+'er;wi'+_0x1b4785(0x76a)+_0x1b4785(0xa4c)+'eight'+_0x1b4785(0x231)+';bord'+'er:0;'+_0x1b4785(0x4b8)+'r-rad'+_0x1b4785(0x508)+_0x1b4785(0x80),'YuuXO':_0x1b4785(0x791)+_0x1b4785(0x647)+_0x1b4785(0xa2f)+_0x1b4785(0x9df)+_0x1b4785(0x870)+_0x1b4785(0x63d)+_0x1b4785(0x9a2)+':flex'+_0x1b4785(0x4e6)+'-dire'+_0x1b4785(0x3ac)+_0x1b4785(0x2f4)+'mn;}','clXMZ':_0x1b4785(0x93b)+':inhe'+'rit;o'+_0x1b4785(0xbb0)+_0x1b4785(0x8c8)+_0x1b4785(0x4bc)+_0x1b4785(0x3ee)+_0x1b4785(0x155)+';}','lDqAE':'.mn-c'+_0x1b4785(0x4b5)+_0x1b4785(0x1b1)+'idth:'+'14px;'+_0x1b4785(0x871)+'t:14p'+_0x1b4785(0x3c5)+'l:non'+'e;str'+'oke:c'+_0x1b4785(0x16f)+_0x1b4785(0xb4c)+_0x1b4785(0xbb9)+'oke-w'+'idth:'+'2;str'+_0x1b4785(0x74)+'ineca'+_0x1b4785(0xbe1)+_0x1b4785(0x8e0),'BkgNN':'.sk-c'+'ard{b'+_0x1b4785(0xaf0)+'-radi'+'us:12'+'px;ba'+_0x1b4785(0x671)+'und:r'+'gba(2'+_0x1b4785(0x38a)+_0x1b4785(0x927)+_0x1b4785(0x2aa)+_0x1b4785(0x136)+_0x1b4785(0xb9f)+'ow:in'+'set\x200'+_0x1b4785(0x4dd)+'1px\x20r'+_0x1b4785(0x3a0)+_0x1b4785(0x38a)+'5,255'+',.05)'+';}','pRyiA':_0x1b4785(0x491)+'ard.o'+'n{bac'+_0x1b4785(0x60d)+_0x1b4785(0x3b7)+_0x1b4785(0x30e)+_0x1b4785(0x927)+',255,'+_0x1b4785(0x292)+'box-s'+'hadow'+':inse'+_0x1b4785(0x78f)+_0x1b4785(0x86a)+'x\x20rgb'+_0x1b4785(0xe5)+_0x1b4785(0x1d4)+'157,.'+_0x1b4785(0x601),'VTTpg':'.sk-c'+_0x1b4785(0x845)+_0x1b4785(0x7ff)+'stron'+_0x1b4785(0x893)+_0x1b4785(0xa57)+'e:13p'+'x;fon'+_0x1b4785(0x98d)+'ght:6'+_0x1b4785(0xb3c)+'lor:r'+_0x1b4785(0x3a0)+_0x1b4785(0x739)+_0x1b4785(0x4a0)+_0x1b4785(0xc9)+';}','koTNi':'.sk-c'+_0x1b4785(0x5a1)+_0x1b4785(0xaec)+_0x1b4785(0x81a)+'-titl'+_0x1b4785(0x604)+_0x1b4785(0x3f8)+_0x1b4785(0x324)+_0x1b4785(0x406)+_0x1b4785(0xa22),'TYMgT':'.sk-m'+_0x1b4785(0x501)+_0x1b4785(0x62f)+'size:'+_0x1b4785(0x797)+_0x1b4785(0x278)+'ty:.4'+_0x1b4785(0x77)+'in-bo'+_0x1b4785(0x29a)+'6px;w'+_0x1b4785(0xb75)+_0x1b4785(0x3fa)+':pre-'+_0x1b4785(0x75d)+'}','vmgHQ':'.sk-c'+_0x1b4785(0x873)+'splay'+_0x1b4785(0xb21)+_0x1b4785(0xa91)+'n-ite'+'ms:ce'+_0x1b4785(0xb35)+_0x1b4785(0x27e)+_0x1b4785(0x4d2)+'dding'+_0x1b4785(0x800)+'0;fon'+_0x1b4785(0xa57)+'e:11.'+'5px;}','JbWmJ':_0x1b4785(0xbfb)+'int{d'+'ispla'+_0x1b4785(0x6f9)+'ck;fo'+_0x1b4785(0x2f6)+_0x1b4785(0xc0a)+_0x1b4785(0x776)+'acity'+':.4;}','SoIEt':_0x1b4785(0xa4f)+'witch'+'{posi'+_0x1b4785(0xc49)+_0x1b4785(0x5d9)+_0x1b4785(0xc14)+_0x1b4785(0xd7)+'26px;'+'heigh'+'t:14p'+_0x1b4785(0x5cc)+_0x1b4785(0x2dc)+';bord'+_0x1b4785(0x968)+_0x1b4785(0x16d)+'99px;'+'backg'+_0x1b4785(0xbe3)+_0x1b4785(0x28f)+'(255,'+'255,2'+_0x1b4785(0xbd1)+_0x1b4785(0x5b4)+_0x1b4785(0xab5)+_0x1b4785(0xc1a)+_0x1b4785(0x54e)+_0x1b4785(0xf2)+_0x1b4785(0x926),'rVOfv':'.sk-s'+_0x1b4785(0xaf7)+'::aft'+'er{co'+_0x1b4785(0x3bb)+':\x22\x22;p'+'ositi'+'on:ab'+_0x1b4785(0x606)+_0x1b4785(0x6e1)+_0x1b4785(0xb26)+'left:'+_0x1b4785(0x8b4)+'idth:'+_0x1b4785(0xa18)+'eight'+':8px;'+_0x1b4785(0x4b8)+'r-rad'+'ius:5'+_0x1b4785(0xb0),'zXPSd':'.sk-r'+_0x1b4785(0x547)+_0x1b4785(0x4e9)+_0x1b4785(0xac3)+_0x1b4785(0x1b3)+_0x1b4785(0x600)+_0x1b4785(0x8b3)+_0x1b4785(0xc4a)+_0x1b4785(0x7f1)+_0x1b4785(0x8e9)+'}','qCFUd':'.sk-s'+_0x1b4785(0x413)+_0x1b4785(0xbad)+_0x1b4785(0x889)+'slide'+'r-run'+'nable'+'-trac'+_0x1b4785(0x8e7)+_0x1b4785(0xb6f)+_0x1b4785(0xbf)+_0x1b4785(0x2c6)+_0x1b4785(0x3b1)+'s:2px'+';','GKfoB':_0x1b4785(0xa4f)+_0x1b4785(0x413)+_0x1b4785(0xbad)+'bkit-'+'slide'+'r-thu'+_0x1b4785(0xabe)+_0x1b4785(0x120)+'-appe'+'aranc'+'e:non'+_0x1b4785(0xc62)+'th:6p'+_0x1b4785(0x9b2)+'ght:6'+_0x1b4785(0x93c)+_0x1b4785(0x860)+_0x1b4785(0x82d)+'2px;b'+_0x1b4785(0xaf0)+'-radi'+'us:50'+'%;bac'+_0x1b4785(0x60d)+_0x1b4785(0x1d6)+'f6b9d'+';}','SxQqr':'.sk-v'+'al{fo'+'nt-si'+_0x1b4785(0x33d)+_0x1b4785(0x31d)+'nt-we'+_0x1b4785(0xc01)+_0x1b4785(0x2e4)+_0x1b4785(0x375)+'dth:3'+_0x1b4785(0x4bd)+_0x1b4785(0x414)+_0x1b4785(0xacb)+_0x1b4785(0x1d5)+';colo'+_0x1b4785(0xc1c)+'a(246'+_0x1b4785(0x86)+_0x1b4785(0x3e7)+_0x1b4785(0x310),'hdASZ':'.sk-n'+'ote.e'+_0x1b4785(0x4da)+'lor:#'+_0x1b4785(0x880)+_0x1b4785(0x12b),'sWljE':_0x1b4785(0xa23)+_0x1b4785(0x646)+'ign-s'+'elf:f'+_0x1b4785(0x616)+'tart;'+'borde'+_0x1b4785(0xa0b)+_0x1b4785(0xaf0)+_0x1b4785(0x878)+'us:8p'+_0x1b4785(0x9f4)+_0x1b4785(0x562)+'8px\x201'+_0x1b4785(0x78b)+'ackgr'+'ound:'+'#ff6b'+_0x1b4785(0x336)+_0x1b4785(0xadf)+_0x1b4785(0x52d),'EJZzf':'font-'+_0x1b4785(0x73b)+'11.5p'+_0x1b4785(0x354)+'t-wei'+_0x1b4785(0xf7)+'00;cu'+'rsor:'+_0x1b4785(0xc1a)+'er;fo'+_0x1b4785(0x3d0)+'mily:'+'inher'+'it;}','BVkTl':_0x1b4785(0x6c4)+'re{fo'+_0x1b4785(0x31c)+_0x1b4785(0x555)+'5\x20ui-'+_0x1b4785(0x96e)+'pace,'+'Conso'+'las,m'+'onosp'+_0x1b4785(0x3be)+_0x1b4785(0xb75)+_0x1b4785(0x3fa)+_0x1b4785(0x553)+_0x1b4785(0x75d)+'word-'+'break'+_0x1b4785(0xa8f)+_0x1b4785(0xc1)+_0x1b4785(0xa3f)+_0x1b4785(0xaa4)+';opac'+_0x1b4785(0x2be)+_0x1b4785(0x1c2)+_0x1b4785(0x4c7)+'ght:2'+'80px;'+'overf'+_0x1b4785(0x230)+_0x1b4785(0x4e0),'QccoI':_0x1b4785(0xacd)+_0x1b4785(0x7fa)+'tal{p'+'ositi'+'on:fi'+'xed;t'+'op:12'+_0x1b4785(0xafe)+_0x1b4785(0xae9)+_0x1b4785(0x7b2)+_0x1b4785(0x8bc)+'x:214'+'74836'+'46;cu'+_0x1b4785(0xab5)+_0x1b4785(0xc1a)+_0x1b4785(0x76d)+_0x1b4785(0xa0e)+_0x1b4785(0x364)+'eight'+_0x1b4785(0xaaa)+';opac'+'ity:.'+_0x1b4785(0xb97),'ZXGxY':'trans'+_0x1b4785(0x359)+':opac'+_0x1b4785(0x117)+_0x1b4785(0x1fb)+_0x1b4785(0x155)+_0x1b4785(0x302)+_0x1b4785(0x5eb)+_0x1b4785(0x2a4)+_0x1b4785(0x63f)+'drop-'+_0x1b4785(0x29d)+_0x1b4785(0x42b)+'\x204px\x20'+_0x1b4785(0x55c)+'255,1'+_0x1b4785(0xbec)+'7,.7)'+_0x1b4785(0x220),'FwMll':'<svg\x20'+_0x1b4785(0x5ac)+_0x1b4785(0xad)+_0x1b4785(0xa86)+_0x1b4785(0x91e)+'<path'+_0x1b4785(0x890)+_0x1b4785(0x92f)+_0x1b4785(0x970)+_0x1b4785(0x1f1)+'4-4.5'+'-4-7.'+_0x1b4785(0xb9c)+'.5\x201.'+_0x1b4785(0x36f)+_0x1b4785(0x6b2)+'5s4\x202'+'\x204\x204.'+'5c0\x203'+_0x1b4785(0x273)+'5-4\x207'+'.5z\x22\x20','cqykJ':function(_0x4b542c,_0x1f94d9){return _0x4b542c+_0x1f94d9;},'oTjUc':function(_0x50769b,_0xb6299f){return _0x50769b+_0xb6299f;},'GIKAb':function(_0x1ce0fb){return _0x1ce0fb();},'bFKeP':_0x1b4785(0x50c)};var _0x11e2da=location[_0x1b4785(0x7de)+_0x1b4785(0xc61)]||'',_0x47d5d3=/(^|\.)www\.crazygames\.com$/['test'](_0x11e2da),_0x5aa2e8=/(^|\.)games\.crazygames\.com$/[_0x1b4785(0x2ab)](_0x11e2da),_0x463d44=/(^|\.)crazygames\.com$/['test'](_0x11e2da)&&!_0x47d5d3&&!_0x5aa2e8,_0x502dd5=_0x47d5d3?_0x4d3210['SlzZI']:_0x5aa2e8?_0x4d3210[_0x1b4785(0x8ab)]:_0x1b4785(0x103)+'r';if(!_0x47d5d3&&!_0x5aa2e8&&!_0x463d44)return;var _0x10dc48=_0x1b4785(0x611)+'b1',_0x7ae546='__sak'+'ura_s'+'w_v2',_0x3c082f=_0x1b4785(0x5cd)+_0x1b4785(0x444)+'SKILL'+'WARZ-'+_0x1b4785(0x72d)+_0x1b4785(0x1f5),_0x15c15f='===SA'+'KURA-'+_0x1b4785(0x6af)+_0x1b4785(0x228)+'END=='+'=',_0x21f2bf='2.9.1'+'5';if(_0x5aa2e8){if(_0x4d3210[_0x1b4785(0x4d4)]===_0x4d3210['iyPwq'])for(var _0x354376=-0x1cab+0x79*0x11+0x26*0x8b;_0x354376<_0x1da156[_0x1b4785(0x17c)+'h'];_0x354376++){var _0x25d83d=_0x33e0ba(_0xa2b840+_0x37c15e(_0x1ebb28[_0x354376][-0x193*0x9+-0x1000+-0x1*-0x1e2b],-0x1859+0x1a56+-0x1ed),'u32');if(_0x25d83d)_0x279a0e['refs'][_0x5913b7[_0x354376][0x1e7f+-0x5*0x269+0x1271*-0x1]]='0x'+(_0x25d83d>>>0x251b*0x1+-0x16a+-0x23b1)[_0x1b4785(0x356)+'ing'](0x6*-0x472+-0x23bd+0x3e79);}else{window['addEv'+'entLi'+_0x1b4785(0x740)+'r'](_0x4d3210['XDcgy'],function(_0x58d2c2){var _0x566865=_0x1b4785;if(_0x566865(0x221)===_0x4d3210[_0x566865(0x8ce)])_0x4d3210[_0x566865(0x633)](_0x66549d,_0x5f3161,_0x5b7a7c[_0x566865(0x85d)+'r']),_0x56c793['textC'+_0x566865(0x276)+'t']=_0x3b0f27?_0x4d3210['ePgqu'](_0x4d3210[_0x566865(0x683)](_0x4d3210['ePgqu'](_0x4d3210[_0x566865(0x683)]('x',_0x432da2['facto'+'r'][_0x566865(0x657)+'ed'](0x33d*-0x8+-0x854+-0x223d*-0x1))+_0x566865(0x2f2),_0x45b1f5[_0x566865(0x17c)+'h']),_0x4d3210[_0x566865(0x4a7)]),_0x4ae1cc)+_0x4d3210[_0x566865(0x400)]:_0x566865(0x12f)+_0x566865(0x8eb)+'\x20move'+'ment-'+'speed'+_0x566865(0x56b)+'ds\x20on'+'ly.\x20H'+_0x566865(0x2f5)+_0x566865(0x26b)+_0x566865(0x244)+_0x566865(0x63c)+'\x20are\x20'+_0x566865(0x992)+_0x566865(0x680);else{var _0x20eb7e=_0x58d2c2[_0x566865(0x9f2)];if(!_0x20eb7e||_0x20eb7e['__sak'+_0x566865(0x261)]!==_0x7ae546)return;try{if(window[_0x566865(0xe0)+'t']&&_0x4d3210['GjMzB'](window[_0x566865(0xe0)+'t'],window))window[_0x566865(0xe0)+'t'][_0x566865(0x627)+'essag'+'e'](_0x20eb7e,'*');if(window['top']&&_0x4d3210[_0x566865(0x71d)](window[_0x566865(0xc05)],window))window[_0x566865(0xc05)][_0x566865(0x627)+_0x566865(0x225)+'e'](_0x20eb7e,'*');}catch(_0x2325cd){}if(_0x20eb7e&&_0x20eb7e[_0x566865(0x1e9)]===_0x4d3210[_0x566865(0x9bb)]){if(_0x566865(0x687)!==_0x566865(0x488))try{var _0xae1fdb=document['query'+_0x566865(0x8d)+_0x566865(0x9ae)+'l']('ifram'+'e');for(var _0x2eaee1=-0x11c4+0x12f1+-0x7*0x2b;_0x2eaee1<_0xae1fdb[_0x566865(0x17c)+'h'];_0x2eaee1++){if('laPDG'!==_0x566865(0xa35))try{if(_0xae1fdb[_0x2eaee1][_0x566865(0xaab)+_0x566865(0xb18)+'dow'])_0xae1fdb[_0x2eaee1]['conte'+'ntWin'+'dow']['postM'+_0x566865(0x225)+'e'](_0x20eb7e,'*');}catch(_0x50f456){}else try{_0x229389[_0x566865(0x429)]();}catch(_0x5d4dae){}}}catch(_0x37ea4f){}else{if(!_0x1180a3()&&!_0x396531){if(_0x2b5351['el'])_0x31ab1e['el'][_0x566865(0xb1d)]['displ'+'ay']=_0x566865(0xbeb);return;}if(_0x29db22['el'])_0x518766['el'][_0x566865(0xb1d)][_0x566865(0x4e9)+'ay']='';var _0x3cda3a=_0x4b8897['keys'](_0x2a4f78&&_0x371940[_0x566865(0xb9)+'nces']||{})['lengt'+'h'],_0x1b3fd6=_0x4822af&&_0x33f420[_0x566865(0x502)]||null,_0x5501fc=_0x1b3fd6?_0x1b3fd6[_0x566865(0x99c)+'Count']||0xcb9+0xa4b*-0x1+-0x26e:0x9*0x1a6+-0x6bb*0x3+-0x1c9*-0x3,_0x27fc5b=_0x1b3fd6?_0x1b3fd6['botCo'+'unt']||0x2662+-0x409+0x3d1*-0x9:-0x1974+-0x2*0x109d+0x3aae,_0x254e8c=_0xcfd142?_0x4d3210[_0x566865(0x42f)](_0x4d3210[_0x566865(0x4e7)](_0x3083b7[_0x566865(0x816)+'r'][_0x566865(0xa5e)+'ength'],-0x1ab4e*-0x3+-0xf0a7b+0x1*0x1a0891)[_0x566865(0x657)+'ed'](0x1*0x24b1+0x7*0x4e+-0x26d3*0x1),'MB'):_0x4d3210[_0x566865(0x31f)],_0x218d18=_0x4d3210[_0x566865(0x9d0)](_0x4d3210['hjVXw'](_0x4d3210['ujBHM'](_0x4d3210[_0x566865(0x370)](_0x4d3210['PYeUV'](_0x4d3210['oLZVc']('v',_0x246cb5&&_0x670f08[_0x566865(0x43b)+'on']||_0x957ab0)+_0x4d3210[_0x566865(0x22d)]+(_0x469e5c&&_0xab346f['hooks'+_0x566865(0x70c)+'ed']||-0x28e+-0x886+-0x2*-0x58a)+'/'+(_0x549aa4&&_0x5ef748[_0x566865(0x8b)+_0x566865(0x6cd)]||-0xddc+-0xf57+0x1d33),'\x20\x20obj'+'s\x20'),_0x3cda3a),_0x566865(0xaf8)+'\x20')+_0x254e8c,_0x4d3210['wDrxx']),_0x4c2817);_0x59c33b['st'][_0x566865(0x56c)+_0x566865(0x276)+'t']=_0x218d18;var _0x18e84d=_0x396778[_0x566865(0x7e7)];_0x18e84d&&(_0x18e84d['textC'+'onten'+'t']=_0x5501fc>0x1*0x191e+0x1445*-0x1+-0x4d9*0x1?_0x4d3210['guJmC'](_0x4d3210['MoGTd']('PLAYE'+_0x566865(0x305),_0x5501fc)+(_0x27fc5b?_0x4d3210[_0x566865(0x683)](_0x566865(0x82)+_0x27fc5b,'\x20bots'):''),_0x1b3fd6&&_0x1b3fd6[_0x566865(0xadd)+'a']?_0x4d3210[_0x566865(0xd1)](_0x566865(0x666)+'\x20',_0x1b3fd6['camer'+_0x566865(0x16b)]):_0x566865(0x666)+'\x20-'):_0x4d3210[_0x566865(0xa6f)]+(_0x1b3fd6&&_0x1b3fd6[_0x566865(0xadd)+'a']?_0x1b3fd6['camer'+_0x566865(0x16b)]:'-'),_0x18e84d[_0x566865(0xb1d)][_0x566865(0x93b)]=_0x5501fc>0x4*0x67f+0xf*0x241+-0x3bcb?_0x566865(0xbb8)+'a8':'#8d7a'+'99');}}}}),console[_0x1b4785(0x6fb)]('%c[sa'+_0x1b4785(0xb0c)+_0x1b4785(0x24b)+'RAPPE'+_0x1b4785(0x719)+_0x1b4785(0x68c)+_0x1b4785(0xb9d)+_0x1b4785(0x755)+_0x1b4785(0x991),'color'+':'+_0x10dc48);return;}}if(_0x47d5d3){console[_0x1b4785(0x6fb)](_0x4d3210[_0x1b4785(0xb43)],_0x4d3210[_0x1b4785(0x2c8)]+_0x10dc48+_0x4d3210[_0x1b4785(0x4a4)],{'host':_0x11e2da});var _0x406f3a={'set':function(){},'command':function(){}};function _0x4ef8cc(_0x33ee84,_0x3080a9){var _0x15464e=_0x1b4785,_0x4eee6b={'__sakura':_0x7ae546,'kind':_0x4d3210['SIfSj'],'cmd':_0x33ee84,'arg':_0x3080a9};try{var _0x13b488=document[_0x15464e(0x47d)+_0x15464e(0x8d)+_0x15464e(0x9ae)+'l'](_0x15464e(0x245)+'e');for(var _0x44c9e8=-0x119*0xa+-0x11*-0xa3+0x27;_0x44c9e8<_0x13b488['lengt'+'h'];_0x44c9e8++){try{if(_0x13b488[_0x44c9e8][_0x15464e(0xaab)+_0x15464e(0xb18)+'dow'])_0x13b488[_0x44c9e8][_0x15464e(0xaab)+'ntWin'+'dow'][_0x15464e(0x627)+_0x15464e(0x225)+'e'](_0x4eee6b,'*');}catch(_0x647c98){}}}catch(_0x382808){}try{if(_0x4d3210['xTtCE']===_0x15464e(0xac8)){var _0x48d33a=new BroadcastChannel(_0x4d3210[_0x15464e(0x10c)]);_0x48d33a['postM'+'essag'+'e'](_0x4eee6b),_0x4d3210[_0x15464e(0xa78)](setTimeout,function(){try{_0x48d33a['close']();}catch(_0x14811f){}},0x961*0x1+0x23f1+-0x4*0xb16);}else{_0x5c7baf['on']=!!_0x251d5d,_0x5e8efe['boxes']=!!_0x473847,_0x1123de();try{var _0x4dab04=_0x4d3210[_0x15464e(0x6ae)](_0x5bdf03);if(_0x4dab04&&_0x4dab04['el'])_0x4dab04['el'][_0x15464e(0xb1d)][_0x15464e(0x4e9)+'ay']=_0x32eaa1['on']?'':_0x4d3210[_0x15464e(0x649)];var _0x4e5207=_0x4530f3;if(_0x4e5207&&_0x4e5207['cv'])_0x4e5207['cv'][_0x15464e(0xb1d)]['displ'+'ay']=_0x776d74['on']&&_0x3f6e72[_0x15464e(0x77f)]?'':_0x4d3210['aJapY'];}catch(_0x5dd236){}}}catch(_0x4e45a1){}}var _0x3e0d73='sakur'+'a-sw-'+'panel'+'-hidd'+'en';function _0x5be831(){var _0x3144ef=_0x1b4785;try{return localStorage[_0x3144ef(0x218)+'em'](_0x3e0d73)==='1';}catch(_0x4e87d8){if(_0x4d3210['BYKNL']('ZPEpn',_0x4d3210[_0x3144ef(0x1aa)]))_0x377108[_0x3144ef(0x73)]=_0x224da4[0xdad+0x27*0x27+-0x139c]['val'](),_0x341744['pairH'+'its']++;else return![];}}function _0x4d6dc0(_0x17b096){var _0x2ec608=_0x1b4785;try{_0x17b096?localStorage[_0x2ec608(0x6e9)+'em'](_0x3e0d73,'1'):localStorage[_0x2ec608(0x5a0)+'eItem'](_0x3e0d73);}catch(_0xce8d63){}try{var _0x38866e=document['getEl'+_0x2ec608(0x717)+_0x2ec608(0x5d4)]('sakur'+_0x2ec608(0x90f)+'v2');if(_0x38866e)_0x38866e[_0x2ec608(0x5a0)+'e']();}catch(_0x135743){}try{var _0x296982=document['getEl'+_0x2ec608(0x717)+_0x2ec608(0x5d4)](_0x2ec608(0x7c6)+'a-sw-'+_0x2ec608(0xd6)+'b');if(_0x4d3210[_0x2ec608(0x477)](_0x17b096,!_0x296982)&&document[_0x2ec608(0x39e)]){var _0x590781=_0x4d3210[_0x2ec608(0xa30)][_0x2ec608(0x60a)]('|'),_0xb1a87d=-0x1a0f*-0x1+0x2419+-0x3e28;while(!![]){switch(_0x590781[_0xb1a87d++]){case'0':_0x750334['textC'+'onten'+'t']=_0x2ec608(0x7c6)+'a';continue;case'1':_0x750334[_0x2ec608(0xae1)+'ck']=function(){_0x4d6dc0(![]),_0xe5ca1a();};continue;case'2':document['body'][_0x2ec608(0x950)+'dChil'+'d'](_0x750334);continue;case'3':_0x750334['id']=_0x2ec608(0x7c6)+_0x2ec608(0x90f)+_0x2ec608(0xd6)+'b';continue;case'4':var _0x750334=document[_0x2ec608(0x7c8)+_0x2ec608(0x7d8)+'ent'](_0x4d3210['csExw']);continue;case'5':_0x750334['style'][_0x2ec608(0x6e0)+'xt']=_0x4d3210['guJmC'](_0x2ec608(0x319)+_0x2ec608(0xa97)+_0x2ec608(0x44a)+'left:'+'12px;'+_0x2ec608(0x22a)+'2px;z'+_0x2ec608(0x8bc)+_0x2ec608(0x2e6)+_0x2ec608(0x74b)+_0x2ec608(0xae6)+'rsor:'+'point'+_0x2ec608(0x20f)+'er-se'+_0x2ec608(0x766)+_0x2ec608(0x274),_0x2ec608(0x588)+'round'+_0x2ec608(0x28f)+'(21,1'+_0x2ec608(0xbdc)+_0x2ec608(0x77d)+_0x2ec608(0xaf0)+':1px\x20'+_0x2ec608(0xc04)+_0x2ec608(0x402)+'(255,'+_0x2ec608(0xa26)+_0x2ec608(0x942)+');col'+_0x2ec608(0x4b7))+_0x10dc48+';'+(_0x2ec608(0x4b8)+_0x2ec608(0x8bf)+_0x2ec608(0x67b)+_0x2ec608(0x30c)+_0x2ec608(0xa50)+'ng:4p'+_0x2ec608(0x73f)+_0x2ec608(0x354)+'t:11p'+'x/1.4'+_0x2ec608(0x818)+_0x2ec608(0x31a)+'ace,C'+_0x2ec608(0x827)+_0x2ec608(0x745)+'nospa'+_0x2ec608(0x672));continue;}break;}}else!_0x17b096&&_0x296982&&_0x296982['remov'+'e']();}catch(_0x10d0e6){}}function _0x6b89ee(){var _0x4f4e61=_0x1b4785,_0x2b7e98={'wiwkN':_0x4d3210['BXLRC'],'bteJV':_0x4f4e61(0x2c3)+_0x4f4e61(0x715),'uQInB':function(_0x2999be,_0x312b56,_0x66c0fc){return _0x2999be(_0x312b56,_0x66c0fc);},'YnUKF':'get','sfxkD':function(_0xb630ab,_0x146762){var _0x3c6051=_0x4f4e61;return _0x4d3210[_0x3c6051(0x4fd)](_0xb630ab,_0x146762);}};if(_0x5be831())return null;var _0x1c32b9=document['getEl'+_0x4f4e61(0x717)+_0x4f4e61(0x5d4)](_0x4f4e61(0x7c6)+'a-sw-'+'v2');if(_0x1c32b9)return _0x1c32b9;if(!document[_0x4f4e61(0x39e)]||!document[_0x4f4e61(0x39e)][_0x4f4e61(0x950)+_0x4f4e61(0x315)+'d'])return null;try{if(!document['getEl'+'ement'+'ById'](_0x4d3210['UxhMh'])){var _0x3a21a8=document['creat'+'eElem'+_0x4f4e61(0x173)](_0x4d3210[_0x4f4e61(0xa52)]);_0x3a21a8['id']=_0x4d3210[_0x4f4e61(0x3a6)],_0x3a21a8['textC'+_0x4f4e61(0x276)+'t']='#saku'+_0x4f4e61(0xb4b)+_0x4f4e61(0x33e)+_0x4f4e61(0x5d7)+_0x4f4e61(0x190)+'}',(document[_0x4f4e61(0x179)]||document[_0x4f4e61(0x5e6)+'entEl'+_0x4f4e61(0x717)])[_0x4f4e61(0x950)+_0x4f4e61(0x315)+'d'](_0x3a21a8);}return _0x1c32b9=document[_0x4f4e61(0x7c8)+_0x4f4e61(0x7d8)+_0x4f4e61(0x173)](_0x4d3210[_0x4f4e61(0x448)]),_0x1c32b9['id']='sakur'+_0x4f4e61(0x90f)+'v2',document['body'][_0x4f4e61(0x950)+_0x4f4e61(0x315)+'d'](_0x1c32b9),_0x1c32b9;}catch(_0x254cf6){if(_0x4d3210[_0x4f4e61(0x4e1)]!=='mZWBY')return null;else{if(_0x585f1a[_0x4f4e61(0x7e0)]===_0x2b7e98[_0x4f4e61(0x9c7)])_0x8b60e0['hookP'+_0x4f4e61(0x591)+'x']({'typeName':_0x2b7e98[_0x4f4e61(0xa61)],'methodName':_0x3be832[_0x4f4e61(0x2d8)],'params':_0x17e54f[_0x4f4e61(0xb70)+_0x4f4e61(0x921)],'returnType':_0x12e2f6[_0x4f4e61(0xe1)+'et']},_0x2b7e98[_0x4f4e61(0x2b3)](_0x1b2b1a,_0x2b7e98[_0x4f4e61(0x7ce)],_0x85244f['name']));else _0x2b7e98[_0x4f4e61(0xf1)](_0x198e67['ret'],'void')&&_0x2b7e98[_0x4f4e61(0xf1)](_0x56d427[_0x4f4e61(0x125)+'s'][_0x4f4e61(0x17c)+'h'],0xa0f+0x1*-0x24e1+0x1ad3)&&_0x324045['param'+'s'][0x1dbf*-0x1+-0x1*-0x5af+0x1810]===_0x2b7e98[_0x4f4e61(0x9c7)]&&_0x25d9f2['hookP'+_0x4f4e61(0x451)]({'typeName':'Mouse'+_0x4f4e61(0x715),'methodName':_0x5e3686[_0x4f4e61(0x2d8)],'params':_0x57bb3e[_0x4f4e61(0xb70)+_0x4f4e61(0x921)],'returnType':_0x2be2cd},_0x116287('set',_0x1e86ad[_0x4f4e61(0x2d8)]));}}}function _0xe5ca1a(){var _0x49ae68=_0x1b4785,_0x2edd61={'sTeoJ':function(_0x3b5246,_0x5ea094){return _0x3b5246===_0x5ea094;},'oUVpi':_0x49ae68(0x2fe)+'r','pVSDA':function(_0x573194,_0x454b10){return _0x573194+_0x454b10;},'sIXYl':function(_0x8ad571,_0x185dd3){return _0x4d3210['JifXq'](_0x8ad571,_0x185dd3);},'ftXGQ':function(_0x2d2ab5,_0x580c76){var _0x6e3e47=_0x49ae68;return _0x4d3210[_0x6e3e47(0xd1)](_0x2d2ab5,_0x580c76);},'CmBFJ':function(_0x31baf9,_0x4c2659){return _0x31baf9+_0x4c2659;}};if(_0x4d3210['gQzZx']!==_0x49ae68(0x695)){var _0x3e8b5f=_0x6b89ee();if(!_0x3e8b5f)return _0x406f3a;if(_0x3e8b5f['datas'+'et'][_0x49ae68(0x596)])return _0x3e8b5f[_0x49ae68(0x596)];try{return _0x4d3210[_0x49ae68(0x64c)](_0x28749f,_0x3e8b5f);}catch(_0x560366){return _0x3e8b5f[_0x49ae68(0x554)+'et']['api']='1',_0x3e8b5f['api']=_0x406f3a,console[_0x49ae68(0x463)](_0x49ae68(0xaad)+'kura]'+'\x20pane'+'l\x20dis'+_0x49ae68(0x9c8),_0x49ae68(0x93b)+':'+_0x10dc48,_0x560366),_0x406f3a;}}else{var _0x28623f=_0x22932b[_0x3ab4e8],_0x50f4f6=_0x2edd61['sTeoJ'](typeof _0x28623f['v'],_0x2edd61[_0x49ae68(0xbfd)])?_0x4b4319[_0x49ae68(0xbe3)](_0x28623f['v']*(0x784*-0x1+-0x29*-0xed+-0x1a89))/(0x1aa3+0x24c9+-0x3b84):_0x28623f['v'];_0x3db36f[_0x49ae68(0x558)](_0x2edd61['pVSDA'](_0x2edd61[_0x49ae68(0x436)](_0x2edd61[_0x49ae68(0xb19)](_0x2edd61['CmBFJ']('\x20\x20',('0x'+_0x28623f['o']['toStr'+_0x49ae68(0x12e)](0x18c6+0x3*0xbca+-0xf05*0x4))['padEn'+'d'](-0x18fb+0x21bb+0x12*-0x7c))+'\x20',_0x28623f['k']['padEn'+'d'](-0x1*0x208e+-0x120c+0x5*0xa21)),'\x20'),_0x1c871c(_0x50f4f6)[_0x49ae68(0x7fe)+'d'](0x1f2e+-0x1*-0x739+-0x2657))+'\x20'+(_0x28623f['raw']||''));}}function _0x28749f(_0x33d0fb){var _0x1f5145=_0x1b4785,_0x4397ea={'VuVqx':_0x1f5145(0xb8f),'MbKKr':_0x4d3210[_0x1f5145(0xb1)],'itNVL':function(_0x545309){return _0x545309();},'qRQQH':function(_0x3e9d36,_0x1e28f3){return _0x3e9d36(_0x1e28f3);},'TIRHE':'snaps'+_0x1f5145(0x1e1),'BAQjj':_0x4d3210[_0x1f5145(0xc2e)],'AJuQY':function(_0x4ee0ca,_0x14f41f){return _0x4ee0ca||_0x14f41f;},'LerDr':function(_0x2d82c3,_0xe56408){return _0x4d3210['nlPlI'](_0x2d82c3,_0xe56408);},'qEJPs':function(_0x2452d0,_0x582913){return _0x4d3210['yCyOt'](_0x2452d0,_0x582913);},'hcdfc':function(_0x3f0b82,_0x26c21f){return _0x3f0b82+_0x26c21f;},'TlOlB':'This\x20'+_0x1f5145(0x953)+'\x20prov'+_0x1f5145(0x849)+_0x1f5145(0x65a)+'rscri'+'pt\x20IS'+_0x1f5145(0x4e8)+_0x1f5145(0x73c)+_0x1f5145(0x653)+'runni'+'ng\x20on'+_0x1f5145(0x663)+'porta'+_0x1f5145(0x3b8),'tQEhj':_0x4d3210[_0x1f5145(0x4f7)],'OEuos':_0x1f5145(0x4ec)+_0x1f5145(0xb9)+_0x1f5145(0x5fd)+'—\x20two'+_0x1f5145(0x116)+'es\x20of'+'\x20UWMK'+_0x1f5145(0x661)+_0x1f5145(0x43f)+_0x1f5145(0x6cf)+_0x1f5145(0x1e6)+_0x1f5145(0x3bf)+_0x1f5145(0x5f7)+_0x1f5145(0x851)+'.\x0a\x0a','DJYeX':_0x1f5145(0x357)+_0x1f5145(0x2df)+_0x1f5145(0x6a3)+_0x1f5145(0x3fd)+_0x1f5145(0x109)+_0x1f5145(0x653)+'watch'+_0x1f5145(0x4cb)+'\x20pane'+_0x1f5145(0xa10)+_0x1f5145(0x4b0),'WUEBO':function(_0x44f96a,_0x7c1958,_0x3cf463,_0x4ec481,_0x54371b){var _0x5e332f=_0x1f5145;return _0x4d3210[_0x5e332f(0xa79)](_0x44f96a,_0x7c1958,_0x3cf463,_0x4ec481,_0x54371b);},'MpfKK':function(_0x38dbf3,_0x284bef){return _0x38dbf3/_0x284bef;},'bfrRO':function(_0x3b7320,_0x368231,_0xdbe9a6,_0x58f7a5,_0x3573b5){return _0x3b7320(_0x368231,_0xdbe9a6,_0x58f7a5,_0x3573b5);},'HdZBv':function(_0x3d0bd3,_0x44e4c1){var _0xa01802=_0x1f5145;return _0x4d3210[_0xa01802(0x87c)](_0x3d0bd3,_0x44e4c1);},'XTGxX':_0x4d3210[_0x1f5145(0x216)],'PixgC':function(_0x3243b6,_0x13d6bb){return _0x3243b6+_0x13d6bb;},'vTICY':function(_0x5727a7,_0x9eccac){return _0x5727a7+_0x9eccac;},'ttNZV':'LIVE\x20'+'·\x20','kuTIx':_0x4d3210['hcEtI'],'jqeUX':function(_0x2de883,_0x59f515){return _0x4d3210['ArbfQ'](_0x2de883,_0x59f515);},'szskM':_0x4d3210['gljxk'],'mjKBz':_0x1f5145(0x232),'Gnizu':_0x4d3210[_0x1f5145(0x38f)],'EevOt':function(_0x5c1f33,_0x1de043){return _0x5c1f33===_0x1de043;},'tWllI':'JSBrn','PjjmD':'F9\x20tw'+_0x1f5145(0x7f7)+_0x1f5145(0x450)+'walki'+'ng\x20/\x20'+_0x1f5145(0xc69)+_0x1f5145(0x97c)+'/\x20jum'+_0x1f5145(0x97b)+'marks'+_0x1f5145(0x31b)+_0x1f5145(0x82a)+'ld\x20is'+_0x1f5145(0x31b)+'h.','CtFzB':'DACLu','ndJUo':function(_0x410eba,_0x4ac1a4){return _0x410eba(_0x4ac1a4);},'sBDgj':function(_0x46b9fb,_0x96d8fe){return _0x46b9fb+_0x96d8fe;},'FLcFl':function(_0x506b07,_0x3cdddc){return _0x506b07+_0x3cdddc;}};_0x33d0fb['style'][_0x1f5145(0x6e0)+'xt']=_0x4d3210[_0x1f5145(0x683)]('posit'+_0x1f5145(0xa97)+_0x1f5145(0x44a)+_0x1f5145(0x8f1)+_0x1f5145(0x94)+_0x1f5145(0x22a)+_0x1f5145(0x7b2)+_0x1f5145(0x8bc)+_0x1f5145(0x2e6)+_0x1f5145(0x87a)+_0x1f5145(0x457)+_0x1f5145(0x168)+_0x1f5145(0xbf3)+'n(52v'+_0x1f5145(0xb3a)+_0x1f5145(0x6f3)+'ax-he'+_0x1f5145(0xc01)+_0x1f5145(0x642),'backg'+_0x1f5145(0xbe3)+':#150'+'c1d;c'+_0x1f5145(0x324)+'#f7ee'+'f5;bo'+_0x1f5145(0x6c5)+_0x1f5145(0x2f7)+_0x1f5145(0xbcf)+'rgba('+_0x1f5145(0x4c8)+_0x1f5145(0x8b9)+'7,.5)'+_0x1f5145(0x3a9)+'er-ra'+_0x1f5145(0x16d)+_0x1f5145(0xb7a))+(_0x1f5145(0xb33)+_0x1f5145(0x692)+_0x1f5145(0x6e8)+_0x1f5145(0x1ad)+_0x1f5145(0x371)+_0x1f5145(0xbc1)+_0x1f5145(0x812)+',mono'+'space'+';box-'+'shado'+'w:0\x202'+_0x1f5145(0x241)+_0x1f5145(0x71a)+'20px\x20'+'#000;')+('displ'+_0x1f5145(0xac3)+_0x1f5145(0x257)+_0x1f5145(0x1f4)+'recti'+'on:co'+_0x1f5145(0x5e8)+_0x1f5145(0x385)+_0x1f5145(0xa90)+'idden'+';'),_0x33d0fb[_0x1f5145(0x621)+_0x1f5145(0x9b3)]=_0x4d3210[_0x1f5145(0x203)](_0x4d3210[_0x1f5145(0x369)](_0x4d3210[_0x1f5145(0x737)](_0x4d3210[_0x1f5145(0x369)](_0x4d3210[_0x1f5145(0x9d0)](_0x4d3210['zXYik'](_0x4d3210['hjVXw'](_0x4d3210[_0x1f5145(0xd1)](_0x4d3210[_0x1f5145(0x7c4)](_0x4d3210[_0x1f5145(0xb88)](_0x4d3210['IqXqN'],_0x4d3210[_0x1f5145(0xa99)]),_0x10dc48)+(_0x1f5145(0x52e)+_0x1f5145(0x142)+_0x1f5145(0xad5)+_0x1f5145(0x566)+_0x1f5145(0xb14))+('<span'+'\x20id=\x22'+_0x1f5145(0xdc)+_0x1f5145(0x60f)+'\x20styl'+_0x1f5145(0x540)+'lor:#'+_0x1f5145(0xabb)+_0x1f5145(0x907)+'t-siz'+'e:11p'+'x;pad'+_0x1f5145(0x562)+'1px\x206'+_0x1f5145(0xbf)+_0x1f5145(0x6c5)+_0x1f5145(0x2f7)+_0x1f5145(0xbcf)+_0x1f5145(0x55c)+_0x1f5145(0x4c8)+_0x1f5145(0x8b9)+_0x1f5145(0x951)+');bor'+_0x1f5145(0xb65)+_0x1f5145(0x6a0)+_0x1f5145(0x7e6)+_0x1f5145(0x9d3)+_0x1f5145(0x387)+_0x1f5145(0x447))+_0x4d3210['uIaNl'],'<butt'+_0x1f5145(0xeb)+_0x1f5145(0x58f)+'-copy'+_0x1f5145(0x1ed)+'le=\x22d'+'ispla'+'y:non'+_0x1f5145(0x271)+_0x1f5145(0x134)+_0x1f5145(0xb62)+'uto;b'+_0x1f5145(0xc0)+'ound:')+_0x10dc48,_0x1f5145(0x3a9)+'er:0;'+_0x1f5145(0x93b)+_0x1f5145(0x8a8)+_0x1f5145(0x90e)+'order'+'-radi'+'us:7p'+_0x1f5145(0x9f4)+_0x1f5145(0x562)+_0x1f5145(0xaa2)+'0px;f'+_0x1f5145(0x4ef)+'eight'+_0x1f5145(0x90c)+_0x1f5145(0x10d)+'r:poi'+_0x1f5145(0xb35)+'\x22>Cop'+_0x1f5145(0x9b1)+'N</bu'+_0x1f5145(0x41f))+_0x4d3210[_0x1f5145(0x42d)]+(_0x1f5145(0x711)+'on\x20id'+_0x1f5145(0x58f)+'-x\x22\x20s'+'tyle='+_0x1f5145(0xb91)+_0x1f5145(0x2fc)+'d:tra'+_0x1f5145(0xb02)+_0x1f5145(0x342)+'order'+':1px\x20'+_0x1f5145(0xc04)+_0x1f5145(0x402)+_0x1f5145(0x12a)+'143,1'+_0x1f5145(0x853)+_0x1f5145(0x38e)+_0x1f5145(0x1fc)+_0x1f5145(0x5a7)+_0x1f5145(0x3a9)+'er-ra'+_0x1f5145(0x16d)+_0x1f5145(0x2b1)+_0x1f5145(0x99e)+'g:4px'+'\x208px;'+'curso'+_0x1f5145(0x5a9)+'nter;'+_0x1f5145(0xa3d)+'butto'+'n>')+(_0x1f5145(0xcb)+'>'),_0x1f5145(0xb7)+_0x1f5145(0x987)+_0x1f5145(0x78a)+'dy\x22\x20s'+_0x1f5145(0x7a1)+'\x22disp'+_0x1f5145(0x8a6)+_0x1f5145(0x24a)+'>')+('<div\x20'+'style'+_0x1f5145(0x62c)+_0x1f5145(0x562)+'8px\x201'+_0x1f5145(0x49f)+_0x1f5145(0xaf0)+_0x1f5145(0x42a)+_0x1f5145(0x331)+_0x1f5145(0x636)+'id\x20rg'+'ba(25'+_0x1f5145(0xbc)+_0x1f5145(0x780)+'.18);'+'displ'+'ay:fl'+_0x1f5145(0x5a3)+_0x1f5145(0x316)+';alig'+'n-ite'+'ms:ce'+_0x1f5145(0xb35)+_0x1f5145(0x586)+_0x1f5145(0x9d6)+'uto;f'+_0x1f5145(0xcd)+_0x1f5145(0xa3c)+_0x1f5145(0xb5f)+'>')+('<butt'+'on\x20id'+_0x1f5145(0x58f)+'-spee'+_0x1f5145(0x76e)+_0x1f5145(0x5d1)+'backg'+_0x1f5145(0xbe3)+':tran'+'spare'+_0x1f5145(0x468)+_0x1f5145(0x6c5)+'1px\x20s'+_0x1f5145(0xbcf)+'rgba('+'255,1'+_0x1f5145(0x8b9)+'7,.4)'+_0x1f5145(0xb7d)+'r:#f7'+'eef5;'+_0x1f5145(0x4b8)+_0x1f5145(0x8bf)+'ius:7'+_0x1f5145(0x4d2)+'dding'+_0x1f5145(0x800)+_0x1f5145(0x495)+'curso'+_0x1f5145(0x5a9)+'nter;'+_0x1f5145(0x2c2)+_0x1f5145(0x7ea)+_0x1f5145(0x84d)+'tton>'),_0x1f5145(0x64f)+_0x1f5145(0x8ed)+'\x22sw2-'+'facto'+'r\x22\x20ty'+_0x1f5145(0x97)+_0x1f5145(0x8e8)+'\x20min='+'\x221\x22\x20m'+_0x1f5145(0x84a)+_0x1f5145(0xbaf)+_0x1f5145(0x3f1)+'1\x22\x20va'+'lue=\x22'+_0x1f5145(0x36c)+_0x1f5145(0x5d1)+'width'+_0x1f5145(0xb3)+_0x1f5145(0x5bd)+_0x1f5145(0x443)+_0x1f5145(0x324)),_0x10dc48)+_0x1f5145(0x475)+_0x4d3210['BLZfh']+(_0x1f5145(0x711)+_0x1f5145(0xeb)+_0x1f5145(0x58f)+'-snap'+_0x1f5145(0x1ed)+'le=\x22b'+'ackgr'+_0x1f5145(0x3fe)+_0x1f5145(0xee)+_0x1f5145(0xe0)+_0x1f5145(0x790)+'der:1'+'px\x20so'+'lid\x20r'+_0x1f5145(0x3a0)+_0x1f5145(0x9b6)+'3,177'+_0x1f5145(0xae0)+_0x1f5145(0x93b)+_0x1f5145(0x3cb)+_0x1f5145(0x629)+_0x1f5145(0xaf0)+'-radi'+_0x1f5145(0x8a4)+'x;pad'+_0x1f5145(0x562)+_0x1f5145(0x26e)+_0x1f5145(0x2a2)+_0x1f5145(0xab5)+_0x1f5145(0xc1a)+'er;\x22>'+_0x1f5145(0x404)+'hot\x20('+_0x1f5145(0xc27)+_0x1f5145(0x2a3)+'n>'),_0x1f5145(0x7cc)+_0x1f5145(0x9c2)+'sw2-h'+'int\x22\x20'+'style'+_0x1f5145(0x458)+_0x1f5145(0x825)+'d7a99'+'\x22>F9\x20'+_0x1f5145(0x6ef)+_0x1f5145(0x52f)+_0x1f5145(0x6ee)+'king\x20'+'/\x20spr'+_0x1f5145(0xa1c)+'g\x20/\x20j'+'umpin'+'g\x20mar'+'ks\x20wh'+_0x1f5145(0x1e7)+_0x1f5145(0xc03)+_0x1f5145(0x5df)+_0x1f5145(0x476)+_0x1f5145(0x2bc)+'>'),_0x4d3210[_0x1f5145(0x990)])+_0x4d3210['FDObN'],_0x1f5145(0xa85)+'eight'+_0x1f5145(0xa42)+';\x22>No'+_0x1f5145(0x9e6)+_0x1f5145(0xb0d)+_0x1f5145(0x388)+'his\x20p'+_0x1f5145(0x665)+'updat'+_0x1f5145(0x3e6)+_0x1f5145(0x2a1)+'when\x20'+'the\x20g'+'ame\x20f'+'rame\x20'+_0x1f5145(0xabc)+_0x1f5145(0x1e5)+_0x1f5145(0x9a6)+_0x1f5145(0x18c)+_0x1f5145(0x2d5)+_0x1f5145(0xc10)+_0x1f5145(0x6f1)+'tays\x20'+_0x1f5145(0x478)+_0x1f5145(0xab1)+'permo'+_0x1f5145(0x3ce)+_0x1f5145(0xa62)+_0x1f5145(0x26a)+'ectin'+_0x1f5145(0x65b)+_0x1f5145(0xb1b)+'\x20cros'+'s-ori'+_0x1f5145(0x518)+_0x1f5145(0x4ad)+_0x1f5145(0x335)+'</pre'+'>')+('</div'+'>');var _0x2f7ae0=_0x33d0fb[_0x1f5145(0x47d)+'Selec'+'tor'](_0x4d3210[_0x1f5145(0x395)]),_0x43fef3=_0x33d0fb[_0x1f5145(0x47d)+_0x1f5145(0x8d)+_0x1f5145(0x166)](_0x4d3210[_0x1f5145(0xc0c)]),_0x39fb0f=_0x33d0fb[_0x1f5145(0x47d)+'Selec'+'tor'](_0x1f5145(0x8fc)+_0x1f5145(0xbf4)),_0x6e54cd=_0x33d0fb[_0x1f5145(0x47d)+_0x1f5145(0x8d)+_0x1f5145(0x166)]('#sw2-'+_0x1f5145(0xd0)),_0x40c3b1=_0x33d0fb['query'+'Selec'+'tor'](_0x1f5145(0x8fc)+'x'),_0xe7e5fd=_0x33d0fb[_0x1f5145(0x47d)+_0x1f5145(0x8d)+_0x1f5145(0x166)]('#sw2-'+'toggl'+'e'),_0x3e0152=_0x33d0fb[_0x1f5145(0x47d)+_0x1f5145(0x8d)+'tor'](_0x4d3210['USwAb']),_0x5423e3=_0x33d0fb[_0x1f5145(0x47d)+'Selec'+_0x1f5145(0x166)]('#sw2-'+'snap'),_0x563a96=_0x33d0fb[_0x1f5145(0x47d)+_0x1f5145(0x8d)+_0x1f5145(0x166)](_0x4d3210['EirHn']),_0x324533=_0x33d0fb[_0x1f5145(0x47d)+'Selec'+'tor']('#sw2-'+_0x1f5145(0x85d)+'r'),_0x5e34d1=_0x33d0fb[_0x1f5145(0x47d)+_0x1f5145(0x8d)+_0x1f5145(0x166)](_0x4d3210['Cyvxv']),_0x1226ce=_0x33d0fb[_0x1f5145(0x47d)+'Selec'+_0x1f5145(0x166)]('#sw2-'+_0x1f5145(0xb0f)),_0x5591a9=null,_0x25e148=![];function _0x3eadc4(){var _0x32538b=_0x1f5145;if(_0x3e0152)_0x3e0152[_0x32538b(0xb1d)]['displ'+'ay']=_0x25e148?'':_0x32538b(0xbeb);if(_0xe7e5fd)_0xe7e5fd[_0x32538b(0x56c)+'onten'+'t']=_0x25e148?_0x32538b(0x429):_0x4397ea['VuVqx'];_0x33d0fb[_0x32538b(0xb1d)][_0x32538b(0x870)]=_0x25e148?'min(5'+'2vw,6'+_0x32538b(0x286):_0x32538b(0x9c5),_0x33d0fb['style']['backg'+'round']=_0x25e148?'#150c'+'1d':_0x32538b(0x55c)+'21,12'+_0x32538b(0x435)+'9)';}if(_0xe7e5fd)_0xe7e5fd[_0x1f5145(0xae1)+'ck']=function(){var _0x22e128=_0x1f5145;_0x22e128(0x651)===_0x22e128(0x651)?(_0x25e148=!_0x25e148,_0x3eadc4()):_0x34b065();};_0x3eadc4();if(_0x40c3b1)_0x40c3b1['oncli'+'ck']=function(){var _0x48bb7d=_0x1f5145;if(_0x48bb7d(0x97d)!==_0x48bb7d(0x410))_0x4d6dc0(!![]);else return _0x2b9570['sourc'+'e']=_0x4397ea[_0x48bb7d(0x34b)],_0x2f4596;};if(_0x5423e3)_0x5423e3['oncli'+'ck']=function(){var _0x158740=_0x1f5145;_0x158740(0x1c7)!=='HBmgY'?_0x4397ea['itNVL'](_0x4aa4ee):_0x4397ea['qRQQH'](_0x4ef8cc,_0x4397ea['TIRHE']);};var _0x525f04=![];function _0x120bc6(){var _0x42d5f5=_0x1f5145;_0x4ef8cc(_0x4397ea[_0x42d5f5(0x1eb)],{'on':_0x525f04,'factor':parseFloat(_0x324533[_0x42d5f5(0xac7)])||-0xd23+0x1940+-0x14*0x9b});}if(_0x563a96)_0x563a96[_0x1f5145(0xae1)+'ck']=function(){var _0x1e31b9=_0x1f5145;_0x525f04=!_0x525f04,_0x563a96[_0x1e31b9(0x56c)+_0x1e31b9(0x276)+'t']=_0x525f04?'Speed'+'\x20ON':_0x1e31b9(0x5ba)+'\x20off',_0x563a96[_0x1e31b9(0xb1d)][_0x1e31b9(0x588)+_0x1e31b9(0xbe3)]=_0x525f04?_0x10dc48:_0x1e31b9(0xee)+_0x1e31b9(0xe0)+'t',_0x563a96[_0x1e31b9(0xb1d)]['color']=_0x525f04?_0x4d3210[_0x1e31b9(0xaae)]:_0x1e31b9(0x33f)+'f5',_0x120bc6();};if(_0x324533)_0x324533[_0x1f5145(0x61f)+'ut']=function(){var _0x383b8d=_0x1f5145;if(_0x5e34d1)_0x5e34d1[_0x383b8d(0x56c)+'onten'+'t']=(parseFloat(_0x324533[_0x383b8d(0xac7)])||-0x3*0x959+0x1961+-0x1*-0x2ab)['toFix'+'ed'](0x650+0x1b48+-0x2197)+'x';_0x120bc6();};if(_0x6e54cd)_0x6e54cd[_0x1f5145(0xae1)+'ck']=function(){var _0x45d1b2=_0x1f5145,_0x4799d={'SxwQw':'texta'+_0x45d1b2(0x52c)},_0xb5413a=_0x4d3210['mroXi'](_0x3c082f+'\x0a'+(_0x5591a9?JSON['strin'+_0x45d1b2(0x217)](_0x5591a9,null,-0x22f4*0x1+-0x2076+0x436b):''),'\x0a')+_0x15c15f,_0x529774=function(){var _0x551a47=_0x45d1b2;if(_0x6e54cd)_0x6e54cd['textC'+'onten'+'t']=_0x551a47(0x7a3)+'d';};if(navigator['clipb'+'oard']&&navigator[_0x45d1b2(0x819)+'oard'][_0x45d1b2(0x10e)+'Text'])navigator['clipb'+'oard']['write'+'Text'](_0xb5413a)[_0x45d1b2(0x174)](_0x529774,function(){_0x5d55dc();});else _0x5d55dc();function _0x5d55dc(){var _0x3251ae=_0x45d1b2;if('AdQYv'===_0x3251ae(0x765)){var _0x837847=document[_0x3251ae(0x7c8)+_0x3251ae(0x7d8)+'ent'](_0x4799d[_0x3251ae(0x912)]);_0x837847['value']=_0xb5413a;if(!document['body'])return;document['body'][_0x3251ae(0x950)+_0x3251ae(0x315)+'d'](_0x837847),_0x837847['selec'+'t']();try{document[_0x3251ae(0x902)+'omman'+'d']('copy'),_0x529774();}catch(_0xc32a3f){}_0x837847['remov'+'e']();}else{var _0xbc40bc=_0x4d1289[_0x3251ae(0x2f3)+'ement'+_0x3251ae(0x5d4)]('sakur'+'a-sw-'+'v2');if(_0xbc40bc)_0xbc40bc[_0x3251ae(0x5a0)+'e']();}}};_0x4d3210['gedfe'](setTimeout,function(){var _0x336c53=_0x1f5145;if(_0x5591a9)return;if(_0x4397ea['AJuQY'](!_0x2f7ae0,!_0x39fb0f))return;_0x2f7ae0[_0x336c53(0x56c)+_0x336c53(0x276)+'t']=_0x336c53(0x35a)+_0x336c53(0x9a3)+_0x336c53(0x222)+_0x336c53(0x8ea)+_0x336c53(0x6d)+'me\x20no'+_0x336c53(0x26a)+_0x336c53(0x355)+'?',_0x2f7ae0[_0x336c53(0xb1d)][_0x336c53(0x93b)]='#ffb3'+'c7',_0x39fb0f[_0x336c53(0x56c)+'onten'+'t']=_0x4397ea['LerDr'](_0x4397ea[_0x336c53(0xc5b)](_0x4397ea[_0x336c53(0x4ee)](_0x4397ea[_0x336c53(0x131)](_0x336c53(0x4a6)+'ame\x20f'+_0x336c53(0xbfe)+_0x336c53(0x541)+_0x336c53(0xbb2)+'ed\x20a\x20'+'singl'+'e\x20rep'+_0x336c53(0x909)+'\x0a',_0x4397ea[_0x336c53(0x41a)]),'so\x20th'+_0x336c53(0x377)+_0x336c53(0x293)+'g\x20sus'+_0x336c53(0x934)+_0x336c53(0x859)+'\x0a\x0a')+('\x20\x201.\x20'+_0x336c53(0x96b)+_0x336c53(0x7d3)+_0x336c53(0x535)+_0x336c53(0x510)+_0x336c53(0x5ea)+_0x336c53(0x97c)+_0x336c53(0xb15)+'the\x20c'+_0x336c53(0xbf9)+_0x336c53(0x6c2)+_0x336c53(0x795)+'ame.\x0a')+('\x20\x202.\x20'+'The\x20p'+'age\x20h'+_0x336c53(0x135)+_0x336c53(0x61a)+_0x336c53(0x794)+'oaded'+_0x336c53(0x2e7)+_0x336c53(0x5ec)+_0x336c53(0x84)+'ng.\x0a'),_0x4397ea[_0x336c53(0x939)])+_0x4397ea[_0x336c53(0x75)],_0x4397ea[_0x336c53(0x623)]);},0xa672+-0x16362+0x1a750);var _0x4e5891={'set':function(_0x377700){var _0x205c17=_0x1f5145;_0x5591a9=_0x377700;if(_0x6e54cd)_0x6e54cd[_0x205c17(0xb1d)][_0x205c17(0x4e9)+'ay']='';if(_0x43fef3){if(_0x205c17(0x98c)!==_0x205c17(0xb11)){_0x43fef3[_0x205c17(0x56c)+_0x205c17(0x276)+'t']=_0x4397ea[_0x205c17(0xa37)]('v',_0x377700[_0x205c17(0x43b)+'on']||'?');var _0x2768b9=_0x21f2bf,_0x8e59a9=_0x377700[_0x205c17(0x43b)+'on']||'';_0x43fef3[_0x205c17(0xb1d)][_0x205c17(0x93b)]=_0x8e59a9===_0x2768b9?_0x10dc48:_0x4397ea['XTGxX'],_0x43fef3[_0x205c17(0xb1d)]['borde'+_0x205c17(0x4b9)+'r']=_0x8e59a9===_0x2768b9?'rgba('+_0x205c17(0x4c8)+'43,17'+'7,.35'+')':_0x4397ea['XTGxX'];}else{var _0x2655e4=_0x4397ea['WUEBO'](_0x51ddaa,_0xdfa35d[_0x205c17(0x748)],[_0x4e545a[_0x205c17(0x748)][-0xcd*-0x2d+-0xce3*0x2+-0x47*0x25],_0x2a5a95['eye'][0x1a23+-0x232e+0x90c]+(-0x185f+0x1*0x3ec+0x147d),_0x4397ea[_0x205c17(0x131)](_0x5726ff['eye'][0x647+-0x1*0x1231+0xbec],-0x1df3+-0x1eee+0x3ceb)],-0x2*-0xf6b+0x1def+-0x38dd*0x1,0x25d1+-0x24e0+0x2f7);if(_0x2655e4)_0x2b012c=_0x4397ea['MpfKK'](_0x2655e4['y'],0x141a+-0x18b*-0xa+-0x1fa0);var _0x272a99=_0x4397ea['bfrRO'](_0x353676,_0x13fa18[_0x205c17(0x748)],[_0x2a52a7['eye'][-0x9*0x20+0x12aa+-0x382*0x5],_0x3ac8d7['eye'][0x21d1*-0x1+-0x3*0xa37+-0x157d*-0x3]-(-0x120f+-0x20b8+0x32d1*0x1),_0x36cad7[_0x205c17(0x748)][-0x1542+0x1294+0x2b0]+(-0x1*-0x179f+0x148c+-0x365*0xd)],-0x4fa+0x3*0x5ff+-0x91b,0x40b+-0xd*-0x301+0x30*-0xd1);if(_0x272a99)_0x35c614=_0x272a99['y']/(0x187a+0xba5+-0x2037);}}var _0x15af42=_0x377700[_0x205c17(0xb9)+_0x205c17(0x9a4)]&&_0x377700[_0x205c17(0xb9)+'nces'][_0x205c17(0x317)+'ntrol'+_0x205c17(0x6ff)],_0x573e58=Math[_0x205c17(0xbe3)]((_0x377700[_0x205c17(0x265)+_0x205c17(0x92c)]||0x62*-0x58+0x1cd4+0x4dc)/(0x3*0x18e+0x43*0x83+-0x230b));if(_0x2f7ae0){var _0x5a9f21,_0x4ae52c;if(_0x15af42&&_0x377700['surve'+'y']&&_0x377700[_0x205c17(0x660)+'y'][_0x205c17(0x317)+_0x205c17(0x4a2)+_0x205c17(0x6ff)])_0x5a9f21=_0x4397ea['PixgC'](_0x4397ea['vTICY'](_0x4397ea[_0x205c17(0x131)](_0x4397ea['ttNZV'],Object[_0x205c17(0x957)](_0x377700[_0x205c17(0xb9)+_0x205c17(0x9a4)])[_0x205c17(0x17c)+'h']),_0x4397ea[_0x205c17(0x10f)])+_0x573e58,'s'),_0x4ae52c=_0x205c17(0xbb8)+'a8';else{if(_0x4397ea[_0x205c17(0x50a)](_0x377700['hooks'+_0x205c17(0x70c)+'ed'],-0x1b89+-0x7eb*0x4+0x3b35))_0x5a9f21='hooks'+_0x205c17(0x420)+'d\x20·\x20'+_0x573e58+'s',_0x4ae52c=_0x205c17(0x563)+'8a';else _0x377700[_0x205c17(0x7fb)+_0x205c17(0xc3a)]?(_0x5a9f21='metad'+'ata\x20r'+'eady\x20'+'·\x20'+_0x573e58+'s',_0x4ae52c=_0x4397ea[_0x205c17(0x3c6)]):_0x4397ea['mjKBz']==='NhecU'?(_0x5a9f21=(_0x377700[_0x205c17(0xab8)]&&_0x377700[_0x205c17(0xab8)]['ok']?'armed'+_0x205c17(0x8fe):_0x4397ea[_0x205c17(0xa25)])+_0x573e58+'s',_0x4ae52c=_0x205c17(0x563)+'8a'):_0x2ebf10['warni'+'ngs']['push'](_0x4397ea[_0x205c17(0xc5b)](_0x205c17(0x95a)+'n._ru'+_0x205c17(0x68b)+'\x20is\x20n'+_0x205c17(0xb79)+_0x205c17(0x4db)+'Unity'+_0x205c17(0x7c1)+_0x205c17(0xbc8)+_0x205c17(0x844)+'me\x20-\x20'+'the\x20p'+_0x205c17(0x272)+'\x20was\x20'+'built'+'\x20',_0x205c17(0x3ff)+'st\x20a\x20'+_0x205c17(0xad4)+'rent\x20'+'Runti'+_0x205c17(0x8c9)+_0x205c17(0xb96)+'e\x20tha'+_0x205c17(0x7a8)+_0x205c17(0x30f)+_0x205c17(0x31e)+_0x205c17(0x6f)+_0x205c17(0x82e)));}_0x2f7ae0['textC'+'onten'+'t']=_0x5a9f21,_0x2f7ae0['style']['color']=_0x4ae52c;}if(_0x1226ce){if(_0x4397ea[_0x205c17(0x5c8)](_0x205c17(0x5f1),_0x4397ea[_0x205c17(0xc6d)])){var _0x354664=_0x5cbb90[_0x222c8d];_0x6c7232[_0x205c17(0x558)](_0x4397ea[_0x205c17(0x4ee)](_0x354664,'\x20@\x20')+_0x2307b2[_0x354664]);}else _0x1226ce[_0x205c17(0x56c)+_0x205c17(0x276)+'t']=_0x377700['diff']&&_0x377700['diff'][_0x205c17(0x17c)+'h']?_0x4397ea['hcdfc'](_0x205c17(0x4ca)+_0x205c17(0x6d4)+_0x205c17(0xbef)+_0x205c17(0x984),_0x377700[_0x205c17(0x2bd)][_0x205c17(0xb4a)](',\x20')):_0x4397ea['PjjmD'];}_0x377700[_0x205c17(0x521)]&&_0x563a96&&(_0x525f04=!!_0x377700['speed']['on'],_0x563a96['textC'+_0x205c17(0x276)+'t']=_0x525f04?_0x205c17(0x5ba)+_0x205c17(0x467):_0x205c17(0x5ba)+_0x205c17(0x681),_0x563a96[_0x205c17(0xb1d)][_0x205c17(0x588)+'round']=_0x525f04?_0x10dc48:'trans'+'paren'+'t',_0x563a96['style']['color']=_0x525f04?_0x205c17(0x7fd)+'1b':'#f7ee'+'f5',_0x5e34d1&&_0x377700['speed'][_0x205c17(0x85d)+'r']&&(_0x5e34d1[_0x205c17(0x56c)+_0x205c17(0x276)+'t']=Number(_0x377700[_0x205c17(0x521)][_0x205c17(0x85d)+'r'])[_0x205c17(0x657)+'ed'](0x14*-0x38+0xf*-0x16f+0x19e2)+'x'));if(_0x39fb0f){if(_0x205c17(0x9ec)!==_0x4397ea[_0x205c17(0x401)]){var _0x28cf51=_0x7bc241[_0x205c17(0x7c8)+_0x205c17(0x7d8)+'ent'](_0x488d73);if(_0x172f06)_0x28cf51[_0x205c17(0x2a5)+_0x205c17(0x69a)]=_0x44cd3d;if(_0x3decf4!=null)_0x28cf51[_0x205c17(0x621)+'HTML']=_0x270548;return _0x28cf51;}else try{_0x39fb0f[_0x205c17(0x56c)+'onten'+'t']=_0x4397ea['ndJUo'](_0x527b82,_0x377700);}catch(_0x3c8656){_0x39fb0f['textC'+_0x205c17(0x276)+'t']=JSON[_0x205c17(0x91d)+_0x205c17(0x217)](_0x377700,null,-0x1fd3+0xee2+-0x2*-0x879);}}console['log'](_0x205c17(0xaad)+_0x205c17(0xb0c)+_0x205c17(0x8c7)+_0x205c17(0x9b4)+_0x205c17(0x9e6)+'rt',_0x4397ea[_0x205c17(0xa16)](_0x205c17(0x93b)+':',_0x10dc48)+(_0x205c17(0xc2c)+'-weig'+'ht:70'+'0'),_0x377700),console[_0x205c17(0x6fb)](_0x4397ea['FLcFl'](_0x3c082f+'\x0a'+JSON[_0x205c17(0x91d)+'gify'](_0x377700,null,0x49e+-0x7*-0x10d+-0x4*0x2fe)+'\x0a',_0x15c15f));}};return _0x33d0fb['datas'+'et'][_0x1f5145(0x596)]='1',_0x33d0fb[_0x1f5145(0x596)]=_0x4e5891,_0x4e5891;}function _0x527b82(_0xa936e1){var _0xd08bcb=_0x1b4785,_0x5d4fc0=[];_0x5d4fc0['push'](_0x4d3210['jQKIL'](_0x4d3210[_0xd08bcb(0xa6c)](_0xd08bcb(0x786)+'\x20\x20\x20\x20',_0xa936e1['host']||'?'),'\x20\x20(')+Math[_0xd08bcb(0xbe3)]((_0xa936e1[_0xd08bcb(0x265)+'edMs']||0x1*0xf4e+-0x1ae6+0xb98)/(-0x1d8a+-0x14b4+-0x3626*-0x1))+'s)'),_0x5d4fc0[_0xd08bcb(0x558)](_0x4d3210['NRXoE'](_0x4d3210[_0xd08bcb(0x70f)](_0xd08bcb(0xbee)+_0xd08bcb(0x3af)+(_0xa936e1[_0xd08bcb(0x49b)]?'yes':'no')+('\x20\x20\x20co'+'ntext'+'\x20'),_0xa936e1[_0xd08bcb(0x434)+_0xd08bcb(0x210)+_0xd08bcb(0x5a6)]?_0xd08bcb(0x965):'no'),_0xd08bcb(0xc1b)+_0xd08bcb(0x85))+(_0xa936e1[_0xd08bcb(0x235)+'ount']!=null?_0xa936e1[_0xd08bcb(0x235)+_0xd08bcb(0x85a)]:'?')),_0x5d4fc0['push'](_0x4d3210['sjOpc'](_0x4d3210[_0xd08bcb(0x961)](_0x4d3210['vHHjp'](_0xd08bcb(0x8b)+_0xd08bcb(0x3af)+_0xa936e1[_0xd08bcb(0x8b)+_0xd08bcb(0x70c)+'ed'],'/'),_0xa936e1['hooks'+_0xd08bcb(0x6cd)]),_0x4d3210[_0xd08bcb(0x716)])),_0x5d4fc0['push']('');var _0x385e1f=_0xa936e1['insta'+'nces']||{},_0x27bf79=Object[_0xd08bcb(0x957)](_0x385e1f);!_0x27bf79['lengt'+'h']&&(_0x5d4fc0['push'](_0x4d3210[_0xd08bcb(0x154)]),_0x5d4fc0[_0xd08bcb(0x558)](''),_0x5d4fc0[_0xd08bcb(0x558)]('The\x20h'+_0xd08bcb(0x3cf)+_0xd08bcb(0x88)+_0xd08bcb(0x89a)+_0xd08bcb(0x911)+'e\x27s\x20o'+_0xd08bcb(0x598)+_0xd08bcb(0x1b8)+_0xd08bcb(0x3ae)+_0xd08bcb(0x9ac)+'\x20capt'+'ured\x20'+'means'),_0x5d4fc0['push'](_0x4d3210['XTnvl']));for(var _0x2c3408=-0x765*-0x3+0x9b7+-0x551*0x6;_0x2c3408<_0x27bf79['lengt'+'h'];_0x2c3408++){var _0x4d59ef=_0x27bf79[_0x2c3408];_0x5d4fc0[_0xd08bcb(0x558)](_0x4d3210[_0xd08bcb(0x70f)](_0x4d59ef+_0xd08bcb(0x763),_0x385e1f[_0x4d59ef]));}_0x5d4fc0['push']('');var _0x42beaf=_0xa936e1[_0xd08bcb(0x660)+'y']||{},_0x454f23=Object['keys'](_0x42beaf);for(var _0x5b105e=-0x37b*-0x3+0x2*0x118d+-0x2d8b;_0x5b105e<_0x454f23['lengt'+'h'];_0x5b105e++){var _0x5711b7=_0x454f23[_0x5b105e],_0x303298=_0x42beaf[_0x5711b7];if(!_0x303298||!_0x303298[_0xd08bcb(0x17c)+'h'])continue;_0x5d4fc0['push'](_0x4d3210[_0xd08bcb(0x930)](_0x4d3210[_0xd08bcb(0x70d)](_0x4d3210['HVvDo']+_0x5711b7,'\x20'),new Array(Math[_0xd08bcb(0xa59)](0x4a1*0x1+-0x116d*-0x1+-0x160d,0x43*-0x45+-0x1703+0x2934-_0x5711b7['lengt'+'h']))['join']('─'))),_0x5d4fc0[_0xd08bcb(0x558)](_0xd08bcb(0x688)+'set\x20\x20'+'\x20kind'+_0xd08bcb(0x4ec)+'\x20\x20\x20va'+_0xd08bcb(0xb68)+'\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20'+_0xd08bcb(0x452));for(var _0x1c4b9c=0x1fc9+-0x173*-0x2+-0x22af;_0x4d3210[_0xd08bcb(0x81b)](_0x1c4b9c,_0x303298['lengt'+'h']);_0x1c4b9c++){var _0x53cac7=_0x303298[_0x1c4b9c],_0x55f35c=typeof _0x53cac7['v']===_0xd08bcb(0x2fe)+'r'?Math['round'](_0x53cac7['v']*(-0x1*-0x1891+-0x11d*0xd+-0x6*0x108))/(-0xb09*-0x3+0x254e+0x4b*-0xe3):_0x53cac7['v'];_0x5d4fc0['push'](_0x4d3210['jQKIL'](_0x4d3210[_0xd08bcb(0x683)]('\x20\x20',_0x4d3210['MoGTd']('0x',_0x53cac7['o'][_0xd08bcb(0x356)+'ing'](-0xbe7+-0x3*0x7a9+0x22f2))['padEn'+'d'](0xa0e+0x166b+-0x2071))+'\x20'+_0x53cac7['k'][_0xd08bcb(0x7fe)+'d'](-0x14c+-0x19b*0x18+-0xad*-0x3b)+'\x20'+_0x4d3210[_0xd08bcb(0x64c)](String,_0x55f35c)[_0xd08bcb(0x7fe)+'d'](0x7b8+0x1*-0x9d6+0x22e)+'\x20',_0x53cac7[_0xd08bcb(0x452)]||''));}_0x5d4fc0['push']('');}if(_0xa936e1[_0xd08bcb(0xb44)+_0xd08bcb(0x35c)]&&_0xa936e1['warni'+'ngs'][_0xd08bcb(0x17c)+'h']){_0x5d4fc0[_0xd08bcb(0x558)](_0xd08bcb(0xb44)+_0xd08bcb(0x35c));for(var _0x1fabf6=-0x96b+0x474+-0x1*-0x4f7;_0x1fabf6<_0xa936e1['warni'+_0xd08bcb(0x35c)]['lengt'+'h'];_0x1fabf6++)_0x5d4fc0[_0xd08bcb(0x558)](_0xd08bcb(0xb1e)+_0xa936e1[_0xd08bcb(0xb44)+'ngs'][_0x1fabf6]);}return _0x5d4fc0['join']('\x0a');}window[_0x1b4785(0xbb7)+_0x1b4785(0x1e3)+_0x1b4785(0x740)+'r'](_0x1b4785(0x1be)+'ge',function(_0x3c3a20){var _0x1fc1a5=_0x1b4785,_0x34315f={'fyOkZ':function(_0x31855f,_0x40def1){var _0x4b979b=_0x224c;return _0x4d3210[_0x4b979b(0x70f)](_0x31855f,_0x40def1);}};if(_0x4d3210[_0x1fc1a5(0x71d)]('oywIx',_0x4d3210['OlkGU'])){var _0x34da4b=_0x3c3a20['data'];if(!_0x34da4b||_0x4d3210['Niojc'](_0x34da4b[_0x1fc1a5(0x75f)+_0x1fc1a5(0x261)],_0x7ae546))return;try{if(_0x4d3210['BYKNL'](_0x34da4b['kind'],_0x1fc1a5(0x5f6))){_0xe5ca1a()['set']({'host':_0x34da4b[_0x1fc1a5(0x9a9)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x34da4b[_0x1fc1a5(0x1e9)]==='repor'+'t')_0xe5ca1a()[_0x1fc1a5(0x39c)](_0x34da4b[_0x1fc1a5(0xd9)+'t']);}catch(_0x1ae0bc){if(_0x4d3210['BYKNL']('FBskz',_0x4d3210[_0x1fc1a5(0xbb3)]))console['warn'](_0x4d3210[_0x1fc1a5(0x804)],'color'+':'+_0x10dc48,_0x1ae0bc);else{var _0x3d3ea1={},_0x2c0b0b=_0x303247();if(!_0x2c0b0b)return _0x3d3ea1;_0x3d3ea1['Mouse'+'Look@'+'ptr']=_0x2c0b0b['mouse'+_0x1fc1a5(0x715)];for(var _0xf75c2e in _0x2c0b0b['float'+'s'])_0x3d3ea1[_0x34315f['fyOkZ'](_0x1fc1a5(0x2c3)+'Look+',_0xf75c2e)]=_0x2c0b0b[_0x1fc1a5(0x2e9)+'s'][_0xf75c2e];if(_0x2c0b0b[_0x1fc1a5(0xadd)+'a'])_0x3d3ea1[_0x1fc1a5(0x2c3)+_0x1fc1a5(0x2d6)+'camer'+'a']=_0x2c0b0b[_0x1fc1a5(0xadd)+'a'];return _0x3d3ea1;}}}else{if(_0x28db0a&&!_0x4d3210[_0x1fc1a5(0x6ae)](_0x4ce8ac)){_0x4d3210['agUYS'](_0x4d46fa);return;}_0x4d3210['VYPeV'](_0x5c9a2b,!![],_0x491c2d);}});function _0x2fed4b(){_0x4d6dc0(!![]);}if(document[_0x1b4785(0x39e)])_0x2fed4b();else document[_0x1b4785(0xbb7)+'entLi'+'stene'+'r'](_0x4d3210[_0x1b4785(0x5f4)],_0x2fed4b,{'once':!![]});return;}window[_0x1b4785(0xbd3)+_0x1b4785(0x1b6)+'W__']=window[_0x1b4785(0xbd3)+'URA_S'+_0x1b4785(0x81f)]||{'at':Date[_0x1b4785(0x91b)]()};function _0x52c86e(_0x842c47,_0x33eeb6){var _0x1d94d8=_0x1b4785,_0x2f59ac={'__sakura':_0x7ae546,'kind':_0x842c47};if(_0x33eeb6){for(var _0x1a839c in _0x33eeb6)_0x2f59ac[_0x1a839c]=_0x33eeb6[_0x1a839c];}try{if(_0x1d94d8(0x483)===_0x4d3210['wvrio']){if(window['paren'+'t']&&_0x4d3210[_0x1d94d8(0x92)](window[_0x1d94d8(0xe0)+'t'],window))window[_0x1d94d8(0xe0)+'t']['postM'+'essag'+'e'](_0x2f59ac,'*');}else try{_0x4d3210['agUYS'](_0x1e89c9);}catch(_0x5ac66e){}}catch(_0x43a4e5){}try{if(window['top']&&window[_0x1d94d8(0xc05)]!==window)window[_0x1d94d8(0xc05)][_0x1d94d8(0x627)+'essag'+'e'](_0x2f59ac,'*');}catch(_0x14ed59){}}console[_0x1b4785(0x6fb)](_0x4d3210[_0x1b4785(0xb88)](_0x4d3210[_0x1b4785(0xa02)],_0x21f2bf),_0x4d3210['JePyI'](_0x4d3210[_0x1b4785(0x2c8)]+_0x10dc48,';font'+_0x1b4785(0x40e)+_0x1b4785(0x538)+'0;fon'+'t-siz'+_0x1b4785(0xb8a)+'x'),{'host':_0x11e2da,'href':location['href'],'version':_0x21f2bf}),_0x52c86e(_0x4d3210[_0x1b4785(0xa1b)],{'host':_0x11e2da,'role':_0x502dd5});var _0x1fe26d=window['__SAK'+_0x1b4785(0x1b6)+_0x1b4785(0x81f)]&&window[_0x1b4785(0xbd3)+'URA_S'+_0x1b4785(0x81f)]['at']||Date[_0x1b4785(0x91b)]();window['addEv'+_0x1b4785(0x1e3)+'stene'+'r'](_0x4d3210[_0x1b4785(0x6bd)],function(_0x3231cb){var _0x44dba5=_0x1b4785;try{if(_0x4d3210['ZCOhh'](_0x4d3210['NishS'],_0x44dba5(0x614))){if(!_0x502862['body']||!_0x37eeaf[_0x44dba5(0x39e)][_0x44dba5(0x950)+_0x44dba5(0x315)+'d'])return null;var _0xb79929=_0x4db759['creat'+_0x44dba5(0x7d8)+'ent'](_0x4d3210[_0x44dba5(0x448)]);_0xb79929['id']=_0x4d3210[_0x44dba5(0x346)],_0xb79929[_0x44dba5(0xb1d)][_0x44dba5(0x6e0)+'xt']=_0x4d3210['guJmC'](_0x4d3210[_0x44dba5(0x858)](_0x4d3210[_0x44dba5(0x947)],'backg'+_0x44dba5(0xbe3)+':rgba'+'(21,1'+_0x44dba5(0xbdc)+'.72);'+_0x44dba5(0x4b8)+_0x44dba5(0x366)+'\x20soli'+_0x44dba5(0x5dd)+_0x44dba5(0xe5)+_0x44dba5(0x69c)+_0x44dba5(0x24c)+'4);bo'+_0x44dba5(0x2c6)+'radiu'+'s:10p'+'x;')+_0x4d3210[_0x44dba5(0xaea)],_0x44dba5(0x6f0)+'selec'+'t:non'+'e;-we'+_0x44dba5(0x889)+_0x44dba5(0x6f0)+'selec'+_0x44dba5(0x17b)+'e;'),_0xb79929[_0x44dba5(0x621)+_0x44dba5(0x9b3)]=_0x4d3210['jDnpB'](_0x4d3210['OZton'],'<div\x20'+_0x44dba5(0x987)+'akura'+_0x44dba5(0x102)+'lg\x22\x20s'+'tyle='+'\x22text'+_0x44dba5(0x95c)+_0x44dba5(0x48a)+_0x44dba5(0x5ab)+'</div'+'>');var _0x2dd14e={'cv':{'getContext':function(){return null;}},'el':_0xb79929};_0x526f10[_0x44dba5(0x39e)][_0x44dba5(0x950)+'dChil'+'d'](_0xb79929),_0x642f3b={'el':_0xb79929,'cv':_0xb79929[_0x44dba5(0x47d)+'Selec'+'tor'](_0x44dba5(0xacd)+'ra-es'+'p-cv'),'lg':_0xb79929[_0x44dba5(0x47d)+_0x44dba5(0x8d)+_0x44dba5(0x166)](_0x4d3210['BLHRE'])};if(!_0x3cff3f['cv']||!_0x3074fd['cv']['getCo'+_0x44dba5(0x2d3)])_0x3644bf=_0x2dd14e;return _0x4d9f9;}else{var _0x258efa=_0x3231cb&&_0x3231cb['data'];if(!_0x258efa||_0x4d3210[_0x44dba5(0x705)](_0x258efa[_0x44dba5(0x75f)+_0x44dba5(0x261)],_0x7ae546)||_0x258efa[_0x44dba5(0x1e9)]!==_0x4d3210[_0x44dba5(0x9bb)])return;_0xa5ef5d(_0x258efa[_0x44dba5(0xce)],_0x258efa[_0x44dba5(0x13b)]);}}catch(_0x424df8){}});try{if(_0x4d3210[_0x1b4785(0xad1)](_0x4d3210[_0x1b4785(0x523)],'zSuBd')){var _0x106638=new BroadcastChannel(_0x4d3210[_0x1b4785(0x10c)]);_0x106638[_0x1b4785(0xafb)+_0x1b4785(0xaed)]=function(_0x44bcea){var _0x1ef9d7=_0x1b4785,_0x4d4fa3={'VtszG':function(_0x4b45df){var _0x1cc237=_0x224c;return _0x4d3210[_0x1cc237(0x6ae)](_0x4b45df);}};if(_0x4d3210['BYKNL'](_0x1ef9d7(0x177),_0x4d3210['EhPVv'])){var _0x35d044=_0x44bcea[_0x1ef9d7(0x9f2)];if(_0x35d044&&_0x4d3210['rBNOA'](_0x35d044[_0x1ef9d7(0x75f)+_0x1ef9d7(0x261)],_0x7ae546)&&_0x35d044[_0x1ef9d7(0x1e9)]===_0x4d3210['SIfSj'])_0xa5ef5d(_0x35d044[_0x1ef9d7(0xce)],_0x35d044[_0x1ef9d7(0x13b)]);}else{var _0x4ee9c2=_0x28f105[_0x1ef9d7(0x9f2)];if(!_0x4ee9c2||_0x4ee9c2[_0x1ef9d7(0x75f)+'ura']!==_0x3d2da6)return;try{if(_0x4ee9c2[_0x1ef9d7(0x1e9)]==='hello'){_0x4d4fa3['VtszG'](_0xfbb648)['set']({'host':_0x4ee9c2['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x4ee9c2[_0x1ef9d7(0x1e9)]==='repor'+'t')_0x45d34b()[_0x1ef9d7(0x39c)](_0x4ee9c2[_0x1ef9d7(0xd9)+'t']);}catch(_0x438c0b){_0x352db2['warn']('%c[sa'+'kura]'+_0x1ef9d7(0xbb)+'l\x20upd'+'ate\x20f'+_0x1ef9d7(0x4ea),_0x1ef9d7(0x93b)+':'+_0x1bf19a,_0x438c0b);}}};}else{var _0x2ae3ea=_0x136cf9['max'](0x1*-0xfe2+0x631+0x49*0x22,_0x26ebd1[_0x1b4785(0x621)+_0x1b4785(0x17f)]||_0x32f829['docum'+_0x1b4785(0x68f)+'ement'][_0x1b4785(0xa7a)+_0x1b4785(0x20d)+'h']||0x54a*0x3+0x24*-0x2d+-0x42*0x25),_0x2c7f95=_0x591898[_0x1b4785(0xa59)](-0x2*0x11dd+0xcb4+0x1707,_0x4adb99[_0x1b4785(0x621)+_0x1b4785(0xbf0)+'t']||_0xf4d29f[_0x1b4785(0x5e6)+'entEl'+_0x1b4785(0x717)][_0x1b4785(0xa7a)+'tHeig'+'ht']||-0x3*0x69a+-0x5*-0x5cf+-0x93d);return(_0x4fa05e['cv']['width']!==_0x2ae3ea||_0x4d3210[_0x1b4785(0x92)](_0x3f12e8['cv']['heigh'+'t'],_0x2c7f95))&&(_0x3bf2fa['cv'][_0x1b4785(0x870)]=_0x2ae3ea,_0x119e73['cv'][_0x1b4785(0x871)+'t']=_0x2c7f95),{'w':_0x2ae3ea,'h':_0x2c7f95};}}catch(_0x591835){}var _0x5b10b7=[];(function _0x12c0fe(){var _0x1138ac=_0x1b4785,_0x4fdaec={'AqNeg':function(_0x4929cc,_0x3295d0){var _0xb92be0=_0x224c;return _0x4d3210[_0xb92be0(0x813)](_0x4929cc,_0x3295d0);},'UaoIW':'Unity'+'WebMo'+'dkit','ZmZKe':function(_0x6abab9,_0x26f1e7){return _0x6abab9(_0x26f1e7);},'GszpV':_0x1138ac(0x668)+'ion'},_0x57814a=[_0x4d3210['lbjBz'],'warn',_0x4d3210['GlIhB'],_0x1138ac(0x58b),_0x4d3210['RFaIV']];for(var _0x3888ea=0xea1+0xc4*0x32+0xd7*-0x3f;_0x4d3210[_0x1138ac(0x81b)](_0x3888ea,_0x57814a['lengt'+'h']);_0x3888ea++){(function(_0x143c8b){var _0x3d1faf=_0x1138ac;if('DdEwM'===_0x3d1faf(0x224)){var _0x40fa77=console[_0x143c8b];if(typeof _0x40fa77!==_0x4fdaec[_0x3d1faf(0x185)])return;console[_0x143c8b]=function(){var _0x52e4dd=_0x3d1faf;try{var _0x530fab='';for(var _0x3b4e10=-0xc8*0x1b+0x1d2b*0x1+-0x2b1*0x3;_0x3b4e10<arguments['lengt'+'h'];_0x3b4e10++){var _0x350818=arguments[_0x3b4e10];if(_0x4fdaec[_0x52e4dd(0x6a8)](typeof _0x350818,_0x52e4dd(0x91d)+'g'))_0x530fab+=_0x350818;else{if(_0x350818&&_0x350818[_0x52e4dd(0x1be)+'ge'])_0x530fab+=_0x350818['messa'+'ge'];}}if(_0x530fab['index'+'Of'](_0x3c082f)!==-(-0x7bc+-0x22*-0x26+0x2b1*0x1))return _0x40fa77['apply'](console,arguments);if(_0x530fab['index'+'Of'](_0x4fdaec['UaoIW'])!==-(0xc*0x15c+0x1*0x427+-0x1476)){var _0x39db56=_0x530fab['slice'](-0x995*0x4+0x7b*0x45+0x52d,0x175*0xf+-0x347*0x5+-0x44c);if(_0x5b10b7[_0x52e4dd(0xb8d)+'Of'](_0x39db56)===-(-0x5fe*-0x4+-0x31f*-0x5+-0x2*0x13c9)&&_0x5b10b7['lengt'+'h']<0x848+0x1d57+-0x2563)_0x5b10b7['push'](_0x39db56);}}catch(_0x5ea0de){}return _0x40fa77['apply'](console,arguments);};}else _0x5d1cd0[_0x3d1faf(0x307)]=_0x4fdaec['ZmZKe'](_0x4ce9ad,_0x5660bd&&_0x59b140[_0x3d1faf(0x1be)+'ge']||_0x478cb0);}(_0x57814a[_0x3888ea]));}}());var _0x1065b2={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x3e646b=null,_0x893716=null,_0x125885=-(-0x2655+-0xbd4+0x322a),_0x2a5718=null;function _0x10f9c5(_0x5ed210){var _0x2876f8=_0x1b4785,_0x36aa97={'gyvmj':function(_0x3149ca,_0x4c1956){return _0x3149ca(_0x4c1956);}};if(_0x4d3210['Niojc'](_0x2876f8(0x78c),'lZtNV'))return _0x2b9eee['sourc'+'e']=_0x2876f8(0x844)+'me.re'+'solve'+'Game('+')',_0x52f9b4;else try{if(!_0x5ed210)return;var _0xe7cf90=_0x5ed210[_0x2876f8(0xb9)+_0x2876f8(0x322)]?_0x5ed210[_0x2876f8(0xb9)+'nce'][_0x2876f8(0xac4)+'ts']:_0x5ed210[_0x2876f8(0xac4)+'ts']||null;if(!_0xe7cf90)return;if(!_0x2a5718)try{if(_0x2876f8(0x88c)!==_0x4d3210['KLZwW'])_0x2a5718=Object[_0x2876f8(0x957)](_0xe7cf90)['slice'](0x837*-0x1+-0x2069+-0x64*-0x68,0x1e45+0xcfd+-0x2b2a);else return _0x36aa97[_0x2876f8(0xc51)](_0x420dec,_0x4597a5);}catch(_0x3a3b05){}var _0x587327=_0xe7cf90[_0x2876f8(0xb6c)+'y'];_0x587327&&_0x587327[_0x2876f8(0x816)+'r']&&_0x587327[_0x2876f8(0x816)+'r']['byteL'+_0x2876f8(0x184)]>-0x1013+-0x155e+0x429*0x9&&(_0x893716=_0x587327,_0x125885=Date['now']()-_0x1fe26d);}catch(_0x50a126){}}function _0xfb5d30(){var _0x567744=_0x1b4785,_0x12cf8d={'fIRks':function(_0x264483,_0x2dd8a8){return _0x4d3210['RbZzS'](_0x264483,_0x2dd8a8);},'KTVrO':_0x567744(0x2d8),'KnTCQ':function(_0x3ff645,_0x228254){return _0x4d3210['YZwpb'](_0x3ff645,_0x228254);},'MCPPd':function(_0x3c9702,_0x50f52d){return _0x3c9702+_0x50f52d;},'oGziQ':_0x4d3210[_0x567744(0xb5)],'LlWoY':_0x4d3210[_0x567744(0xb83)]};try{if(_0x4d3210[_0x567744(0x92)](_0x4d3210[_0x567744(0x979)],_0x567744(0x62a))){if(typeof WebAssembly==='undef'+_0x567744(0xb7c))return;var _0x277398=[_0x567744(0xb9)+_0x567744(0xbfa)+'e',_0x567744(0xb9)+'ntiat'+_0x567744(0xf0)+_0x567744(0x469)];for(var _0x29de2b=-0x15c7+-0x1*-0xda2+0x825;_0x29de2b<_0x277398[_0x567744(0x17c)+'h'];_0x29de2b++){_0x567744(0x8c1)!==_0x4d3210[_0x567744(0x145)]?_0x385727['hookP'+_0x567744(0x591)+'x']({'typeName':_0x567744(0x2c3)+_0x567744(0x715),'methodName':_0x2e1246[_0x567744(0x2d8)],'params':_0x2a1003['wasmP'+_0x567744(0x921)],'returnType':_0x47ef58[_0x567744(0xe1)+'et']},_0x410216('get',_0x134f81[_0x567744(0x2d8)])):function(_0x2cc242){var _0x5bc58c=_0x567744,_0x4fdbaa=(_0x5bc58c(0x9e5)+'|2|4|'+'1')[_0x5bc58c(0x60a)]('|'),_0x3649fb=-0x823*-0x1+-0x218a+0x1967*0x1;while(!![]){switch(_0x4fdbaa[_0x3649fb++]){case'0':var _0x12dad9=function(){var _0x3e39b1=_0x5bc58c,_0x57db29=_0x30766a[_0x3e39b1(0x822)](this,arguments);try{if(_0x57db29&&typeof _0x57db29['then']===_0x3e39b1(0x668)+'ion')_0x57db29[_0x3e39b1(0x174)](_0x10f9c5,function(){});else _0x12cf8d['fIRks'](_0x10f9c5,_0x57db29);}catch(_0x3b7aa9){}return _0x57db29;};continue;case'1':WebAssembly[_0x2cc242]=_0x12dad9;continue;case'2':_0x12dad9[_0x5bc58c(0x75f)+_0x5bc58c(0x330)+_0x5bc58c(0x746)+'ap']=!![];continue;case'3':if(typeof _0x30766a!=='funct'+_0x5bc58c(0x659)||_0x30766a[_0x5bc58c(0x75f)+'uraMe'+'moryT'+'ap'])return;continue;case'4':try{Object[_0x5bc58c(0x8e3)+'eProp'+'erty'](_0x12dad9,_0x12cf8d[_0x5bc58c(0x79f)],{'value':_0x30766a['name'],'configurable':!![]});}catch(_0x3422c5){}continue;case'5':var _0x30766a=WebAssembly[_0x2cc242];continue;}break;}}(_0x277398[_0x29de2b]);}}else _0x3919e1[_0x567744(0xb44)+_0x567744(0x35c)][_0x567744(0x558)](_0x12cf8d[_0x567744(0x72e)](_0x12cf8d[_0x567744(0x707)]('0\x20of\x20'+_0x3557fc['hooks'+'Total']+('\x20hook'+'s\x20wer'+_0x567744(0x8dd)+_0x567744(0x972)+'N\x20by\x20'+'UWMK.'+'\x20The\x20'+_0x567744(0x822)+_0x567744(0x9de)+'\x20'),_0x12cf8d[_0x567744(0x47e)])+('so\x20ho'+_0x567744(0x941)+_0x567744(0x97a)+_0x567744(0x46c)+_0x567744(0x222)+_0x567744(0x83c)+'re\x20ig'+'nored'+_0x567744(0xc67)+'the\x20l'+_0x567744(0xb55)+'f\x20the'+'\x20page'+'.\x20')+(_0x567744(0x6b0)+_0x567744(0xc1e)+'\x20')+_0x4de79d['hooks'+_0x567744(0x6b0)+_0x567744(0xc1e)+_0x567744(0x974)],_0x12cf8d['LlWoY']));}catch(_0x2cd946){}}var _0x2f016e=null,_0xefd364=null,_0x22c822={},_0x536bb1={'MouseLook':[{'name':_0x1b4785(0xc35)+_0x1b4785(0x6d7)+'\u0094','ret':_0x4d3210['GQcud'],'params':[],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)]]},{'name':_0x1b4785(0x27a)+'\u0095\u0092\u0089\u0092\u0087'+'\u008e','ret':_0x1b4785(0xa2e),'params':['float'],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)],_0x1b4785(0xd4)]},{'name':_0x1b4785(0x238)+_0x1b4785(0x1ae)+'\u0092','ret':_0x4d3210[_0x1b4785(0x2a8)],'params':[_0x1b4785(0x2e9)],'wasmParams':[_0x1b4785(0xc64),_0x1b4785(0xd4)]},{'name':_0x4d3210[_0x1b4785(0xb4e)],'ret':_0x4d3210['GQcud'],'params':[_0x1b4785(0x2e9)],'wasmParams':[_0x1b4785(0xc64),'f32']},{'name':_0x1b4785(0xa80)+_0x1b4785(0x9b)+'\u0091','ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':_0x1b4785(0x37c)+_0x1b4785(0xa8)+'\u0094','ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':_0x4d3210['ZRtOR'],'ret':'void','params':[],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)]]},{'name':_0x1b4785(0x869)+_0x1b4785(0x97e),'ret':_0x4d3210['GQcud'],'params':[],'wasmParams':['i32']},{'name':'\u0088\u0091\u008b\u0087\u0087'+'\u008e\u008f\u0091\u0088\u008c'+'\u0095','ret':_0x4d3210[_0x1b4785(0x2a8)],'params':[],'wasmParams':['i32']},{'name':'\u008c\u0091\u0088\u0095\u008c'+_0x1b4785(0x2ee)+'\u0095','ret':_0x1b4785(0x2e9),'params':[],'wasmParams':[_0x1b4785(0xc64)],'wasmRet':_0x4d3210['QBqAS']},{'name':'\u0091\u008f\u0088\u0086\u0091'+'\u0092\u0088\u0090\u008c\u0088'+'\u0090','ret':_0x4d3210[_0x1b4785(0x2a8)],'params':[],'wasmParams':['i32']},{'name':'\u0087\u008e\u0089\u008e\u0091'+'\u0091\u0087\u008e\u008a\u008d'+'\u0088','ret':_0x1b4785(0xa2e),'params':['float'],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)],_0x4d3210[_0x1b4785(0xa24)]]},{'name':'\u0093\u0089\u0095\u0092\u0090'+_0x1b4785(0x3ba)+'\u008d','ret':_0x4d3210[_0x1b4785(0xb73)],'params':[],'wasmParams':[_0x4d3210['JiHks']],'wasmRet':_0x4d3210['QBqAS']},{'name':'\u008d\u0095\u0088\u0092\u008c'+_0x1b4785(0x641)+'\u0092','ret':_0x4d3210[_0x1b4785(0x2a8)],'params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':_0x4d3210[_0x1b4785(0x509)],'ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':_0x4d3210[_0x1b4785(0x197)],'ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)]]},{'name':_0x4d3210[_0x1b4785(0xa81)],'ret':_0x4d3210[_0x1b4785(0x2a8)],'params':[],'wasmParams':[_0x4d3210['JiHks']]},{'name':'\u008d\u0093\u0095\u008a\u0088'+_0x1b4785(0x693)+'\u008a','ret':'void','params':[_0x1b4785(0x2e9),_0x4d3210[_0x1b4785(0xb73)]],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)],_0x4d3210['QBqAS'],_0x1b4785(0xd4)]},{'name':_0x4d3210['EXDBB'],'ret':_0x4d3210[_0x1b4785(0xb73)],'params':[],'wasmParams':[_0x1b4785(0xc64)],'wasmRet':'f32'},{'name':'\u008b\u0092\u0089\u0090\u008d'+_0x1b4785(0xbd4)+'\u0088','ret':_0x4d3210['GQcud'],'params':[],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)]]},{'name':_0x1b4785(0x1d3),'ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':_0x1b4785(0x656)+_0x1b4785(0x34e)+'\u008e','ret':_0x1b4785(0xa2e),'params':['float'],'wasmParams':[_0x4d3210['JiHks'],_0x1b4785(0xd4)]},{'name':_0x1b4785(0x644)+'\u0087\u0092\u0088\u0088\u008c'+'\u0088','ret':_0x1b4785(0x2e9),'params':[],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)]],'wasmRet':_0x1b4785(0xd4)},{'name':_0x1b4785(0x2ba)+'\u008b\u0094\u0093\u0086\u008c'+'\u008a','ret':'void','params':['float','float'],'wasmParams':[_0x1b4785(0xc64),_0x1b4785(0xd4),_0x1b4785(0xd4)]},{'name':_0x4d3210['nftCT'],'ret':'void','params':[],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)]]},{'name':_0x1b4785(0x2ea)+'\u0089\u0091\u0086\u008a\u0091'+'\u008a','ret':_0x1b4785(0xa2e),'params':[],'wasmParams':['i32']},{'name':'\u008e\u0092\u0091\u0088\u0092'+_0x1b4785(0x836)+'\u008b','ret':_0x1b4785(0xa2e),'params':[_0x1b4785(0x2e9)],'wasmParams':['i32',_0x1b4785(0xd4)]},{'name':_0x4d3210[_0x1b4785(0xc29)],'ret':_0x1b4785(0x2e9),'params':[],'wasmParams':[_0x1b4785(0xc64)],'wasmRet':_0x1b4785(0xd4)},{'name':_0x1b4785(0x320)+_0x1b4785(0x679)+'\u008a','ret':_0x1b4785(0x2e9),'params':[],'wasmParams':[_0x1b4785(0xc64)],'wasmRet':_0x1b4785(0xd4)},{'name':_0x1b4785(0x47f)+'\u0089\u008a\u0093\u0090\u0095'+'\u0088','ret':_0x4d3210[_0x1b4785(0x2a8)],'params':['float'],'wasmParams':[_0x4d3210['JiHks'],_0x1b4785(0xd4)]},{'name':'\u0087\u008f\u008d\u008b\u0092'+'\u0089\u0090\u0087\u0086\u0087'+'\u008c','ret':_0x4d3210['GQcud'],'params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':'\u008c\u0091\u0093\u0095\u0087'+_0x1b4785(0x667)+'\u0093','ret':_0x4d3210[_0x1b4785(0x2a8)],'params':[_0x4d3210[_0x1b4785(0xb73)]],'wasmParams':[_0x1b4785(0xc64),'f32']},{'name':_0x4d3210['QJswo'],'ret':_0x4d3210[_0x1b4785(0x2a8)],'params':[],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)]]},{'name':_0x1b4785(0x620)+'\u008c\u008a\u0089\u0090\u008c'+'\u0090','ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':_0x4d3210[_0x1b4785(0x8ec)],'ret':_0x4d3210['GQcud'],'params':[_0x1b4785(0x2e9)],'wasmParams':['i32','f32']}],'FPScontroller':[{'name':_0x1b4785(0x721)+'\u0090\u008b\u008d\u008d\u0093'+'\u008e','ret':_0x4d3210[_0x1b4785(0xb73)],'params':[],'wasmParams':[_0x4d3210['JiHks']],'wasmRet':_0x1b4785(0xd4)},{'name':_0x1b4785(0x61d)+'\u0092\u0091\u0088\u008c\u0090'+'\u0092','ret':_0x1b4785(0xa2e),'params':[],'wasmParams':['i32']},{'name':'\u0089\u008c\u0095\u0088\u008a'+'\u0094\u0090\u0094\u008c\u0094'+'\u0094','ret':_0x1b4785(0xa8a),'params':[],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)]],'wasmRet':_0x1b4785(0xc64)},{'name':_0x4d3210['SwGVR'],'ret':_0x4d3210[_0x1b4785(0x2a8)],'params':[_0x4d3210[_0x1b4785(0x866)]],'wasmParams':[_0x1b4785(0xc64),_0x1b4785(0xc64)]},{'name':_0x1b4785(0xac)+_0x1b4785(0x140)+'\u0092','ret':_0x4d3210['GQcud'],'params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':_0x4d3210[_0x1b4785(0x66d)],'ret':_0x4d3210[_0x1b4785(0x2a8)],'params':[],'wasmParams':['i32']},{'name':_0x4d3210[_0x1b4785(0x47a)],'ret':'void','params':[],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)]]},{'name':_0x1b4785(0x1a6)+_0x1b4785(0x6b7)+'\u0087','ret':_0x1b4785(0xa8a),'params':[],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)]],'wasmRet':_0x4d3210[_0x1b4785(0x70e)]},{'name':_0x1b4785(0x9d1)+_0x1b4785(0x23f)+'\u0087','ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)]]},{'name':_0x4d3210[_0x1b4785(0xc20)],'ret':_0x4d3210['DxQaS'],'params':[],'wasmParams':['i32'],'wasmRet':'i32'},{'name':_0x4d3210['IZmqE'],'ret':_0x4d3210[_0x1b4785(0x866)],'params':[],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)]],'wasmRet':_0x1b4785(0xc64)},{'name':_0x1b4785(0x549)+'\u008c\u0087\u0095\u0093\u008b'+'\u0094','ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)]]},{'name':_0x4d3210[_0x1b4785(0xa9f)],'ret':_0x4d3210['GQcud'],'params':[],'wasmParams':[_0x4d3210['JiHks']]},{'name':_0x4d3210[_0x1b4785(0xc1f)],'ret':'bool','params':['bool',_0x1b4785(0xa8a)],'wasmParams':[_0x1b4785(0xc64),_0x4d3210[_0x1b4785(0x70e)],_0x4d3210[_0x1b4785(0x70e)]],'wasmRet':_0x4d3210[_0x1b4785(0x70e)]},{'name':_0x1b4785(0x955)+'\u0092\u008b\u008c\u0088\u0089'+'\u0090','ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)]]},{'name':_0x4d3210['gUTwv'],'ret':_0x1b4785(0xa8a),'params':[],'wasmParams':['i32'],'wasmRet':'i32'},{'name':_0x1b4785(0x392)+'\u008b\u008c\u0087\u008d\u0095'+'\u008f','ret':_0x1b4785(0xa2e),'params':['bool'],'wasmParams':[_0x1b4785(0xc64),_0x1b4785(0xc64)]},{'name':_0x4d3210['csCQD'],'ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':_0x4d3210['jZQhV'],'ret':_0x4d3210[_0x1b4785(0x866)],'params':[],'wasmParams':[_0x1b4785(0xc64)],'wasmRet':_0x4d3210['JiHks']},{'name':_0x4d3210[_0x1b4785(0x8f4)],'ret':_0x4d3210[_0x1b4785(0x2a8)],'params':[],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)]]},{'name':_0x1b4785(0x597)+_0x1b4785(0x6c6)+'\u0094','ret':_0x4d3210[_0x1b4785(0x2a8)],'params':[],'wasmParams':['i32']},{'name':_0x4d3210[_0x1b4785(0x6ec)],'ret':_0x4d3210[_0x1b4785(0x2a8)],'params':[],'wasmParams':['i32']},{'name':'\u008a\u0088\u0087\u0090\u008f'+'\u0086\u008b\u008e\u008a\u0089'+'\u008b','ret':_0x4d3210[_0x1b4785(0x2a8)],'params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':_0x1b4785(0x8de)+_0x1b4785(0x785)+'\u0094','ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)]]},{'name':_0x4d3210[_0x1b4785(0x9fa)],'ret':'void','params':[_0x4d3210[_0x1b4785(0x866)]],'wasmParams':['i32',_0x1b4785(0xc64)]},{'name':_0x4d3210[_0x1b4785(0x7b6)],'ret':_0x4d3210[_0x1b4785(0x2a8)],'params':[],'wasmParams':['i32']},{'name':'\u008d\u0095\u0087\u0093\u0092'+_0x1b4785(0x886)+'\u008b','ret':_0x1b4785(0xa2e),'params':[],'wasmParams':['i32']},{'name':_0x1b4785(0x3b6)+_0x1b4785(0x2a6)+'\u008c','ret':_0x4d3210['GQcud'],'params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':_0x4d3210['nzJKA'],'ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)]]},{'name':_0x4d3210['fkOUp'],'ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)]]},{'name':_0x1b4785(0x67e)+'\u008b\u0089\u0089\u0088\u0093'+'\u0092','ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':'\u0088\u008b\u008f\u008a\u008e'+'\u0095\u008e\u008c\u008c\u0092'+'\u0091','ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':'\u0093\u0086\u0088\u008d\u008f'+_0x1b4785(0x329)+'\u0094','ret':_0x4d3210['GQcud'],'params':['bool'],'wasmParams':[_0x1b4785(0xc64),_0x1b4785(0xc64)]},{'name':_0x1b4785(0x8b5)+_0x1b4785(0x9e9)+'\u0090','ret':_0x1b4785(0xa2e),'params':[],'wasmParams':['i32']},{'name':'\u0094\u0094\u008e\u0091\u0090'+'\u008c\u0091\u008c\u008a\u008f'+'\u0095','ret':'void','params':[],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)]]},{'name':_0x1b4785(0x619)+_0x1b4785(0x460)+'\u008a','ret':_0x4d3210[_0x1b4785(0x2a8)],'params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':_0x1b4785(0x93d)+_0x1b4785(0x4aa)+'\u0087','ret':'void','params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':'\u008c\u0089\u0091\u0095\u0090'+_0x1b4785(0x43d)+'\u0087','ret':_0x4d3210[_0x1b4785(0x2a8)],'params':[],'wasmParams':['i32']},{'name':_0x4d3210[_0x1b4785(0xc02)],'ret':'void','params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':_0x1b4785(0x481)+_0x1b4785(0x18a)+'\u0094','ret':_0x4d3210[_0x1b4785(0x2a8)],'params':['bool'],'wasmParams':[_0x1b4785(0xc64),_0x4d3210[_0x1b4785(0x70e)]]},{'name':_0x4d3210['ExTNN'],'ret':'bool','params':[],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)]],'wasmRet':'i32'},{'name':_0x4d3210[_0x1b4785(0xb7f)],'ret':_0x1b4785(0xa8a),'params':[],'wasmParams':['i32'],'wasmRet':_0x4d3210[_0x1b4785(0x70e)]},{'name':_0x1b4785(0x9c0)+_0x1b4785(0x86e)+'\u008d','ret':_0x1b4785(0xa8a),'params':[],'wasmParams':['i32'],'wasmRet':_0x4d3210['JiHks']},{'name':_0x4d3210['VzkfO'],'ret':'void','params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':_0x1b4785(0x1d3),'ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)]]},{'name':'\u0088\u0091\u0095\u008a\u0087'+'\u0092\u008b\u008a\u0087\u008e'+'\u008b','ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':'\u0087\u0095\u008f\u008d\u008e'+_0x1b4785(0x5e5)+'\u0091','ret':_0x4d3210['GQcud'],'params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':_0x1b4785(0xf8)+'\u0088\u008e\u0088\u008b\u0090'+'\u008b','ret':_0x4d3210['GQcud'],'params':[],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)]]},{'name':_0x4d3210['hDzZQ'],'ret':'void','params':[],'wasmParams':['i32']},{'name':'\u008d\u0094\u0095\u008b\u008a'+'\u0093\u0095\u0095\u0093\u008a'+'\u0094','ret':_0x1b4785(0xa2e),'params':['float'],'wasmParams':[_0x1b4785(0xc64),_0x4d3210[_0x1b4785(0xa24)]]},{'name':_0x1b4785(0xbe)+'\u0089\u008e\u0086\u0095\u008c'+'\u0092','ret':'bool','params':[],'wasmParams':['i32'],'wasmRet':_0x1b4785(0xc64)},{'name':_0x4d3210[_0x1b4785(0x727)],'ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x4d3210['JiHks']]},{'name':_0x4d3210[_0x1b4785(0x7aa)],'ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':_0x1b4785(0x7cd)+'\u0094\u0093\u0088\u0088\u0093'+'\u0092','ret':'void','params':[],'wasmParams':['i32']},{'name':'\u008b\u0090\u008d\u0095\u0086'+_0x1b4785(0x5ef)+'\u008c','ret':_0x1b4785(0xa8a),'params':[],'wasmParams':['i32'],'wasmRet':_0x1b4785(0xc64)},{'name':_0x4d3210[_0x1b4785(0x4e3)],'ret':_0x4d3210['DxQaS'],'params':[_0x4d3210[_0x1b4785(0x866)],'bool'],'wasmParams':[_0x4d3210['JiHks'],'i32',_0x1b4785(0xc64)],'wasmRet':_0x4d3210[_0x1b4785(0x70e)]},{'name':_0x1b4785(0xaa6)+'e','ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x4d3210['JiHks']]},{'name':_0x1b4785(0x11b)+'\u008f\u0093\u0086\u008b\u008e'+'\u008e','ret':'void','params':[],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)]]},{'name':_0x4d3210['LOKfy'],'ret':'void','params':[],'wasmParams':[_0x4d3210['JiHks']]},{'name':'\u0095\u0090\u0093\u0093\u008a'+_0x1b4785(0x7ed)+'\u0086','ret':_0x4d3210[_0x1b4785(0x2a8)],'params':[],'wasmParams':['i32']},{'name':_0x4d3210['jAGCo'],'ret':'void','params':[_0x4d3210['BXLRC']],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)],_0x1b4785(0xd4)]},{'name':'\u0086\u0087\u0087\u008e\u0094'+_0x1b4785(0xa38)+'\u008b','ret':_0x1b4785(0xa2e),'params':[],'wasmParams':['i32']},{'name':_0x4d3210[_0x1b4785(0xab0)],'ret':_0x4d3210[_0x1b4785(0x866)],'params':[_0x4d3210[_0x1b4785(0x866)],'bool'],'wasmParams':['i32',_0x1b4785(0xc64),_0x4d3210['JiHks']],'wasmRet':_0x4d3210[_0x1b4785(0x70e)]},{'name':_0x4d3210['TfaCy'],'ret':_0x1b4785(0xa2e),'params':[_0x4d3210[_0x1b4785(0xb73)],'bool'],'wasmParams':[_0x4d3210['JiHks'],_0x4d3210[_0x1b4785(0xa24)],_0x4d3210['JiHks']]},{'name':'\u0094\u0090\u0095\u0092\u008e'+_0x1b4785(0x877)+'\u008f','ret':'void','params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':_0x1b4785(0x783)+_0x1b4785(0x176)+'\u008c','ret':_0x4d3210[_0x1b4785(0x2a8)],'params':[],'wasmParams':[_0x4d3210['JiHks']]},{'name':_0x4d3210['HSArC'],'ret':_0x1b4785(0xa2e),'params':[],'wasmParams':['i32']}],'TDM_GameManager':[{'name':_0x4d3210['YAWAJ'],'ret':_0x1b4785(0xa2e),'params':[],'wasmParams':['i32']},{'name':_0x1b4785(0x5a8)+'\u0095\u0088\u0093\u0087\u0089'+'\u008a','ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)]]},{'name':'\u0094\u0090\u0089\u008c\u008e'+_0x1b4785(0x25b)+'\u0089','ret':_0x1b4785(0xa8a),'params':[_0x1b4785(0xea)],'wasmParams':['i32','i32'],'wasmRet':_0x4d3210[_0x1b4785(0x70e)]},{'name':_0x1b4785(0x48f)+_0x1b4785(0x7f8)+'\u0086','ret':_0x4d3210[_0x1b4785(0x2a8)],'params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':'\u0087\u0094\u0093\u008f\u008d'+_0x1b4785(0x9fe)+'\u008c','ret':_0x4d3210[_0x1b4785(0x2a8)],'params':['bool'],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)],'i32']},{'name':_0x4d3210[_0x1b4785(0x9ea)],'ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x4d3210['JiHks']]},{'name':_0x1b4785(0x9a1)+_0x1b4785(0x3df)+'\u008c','ret':_0x4d3210[_0x1b4785(0x2a8)],'params':[],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)]]},{'name':_0x4d3210[_0x1b4785(0x2f0)],'ret':_0x4d3210[_0x1b4785(0x2a8)],'params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':'.ctor','ret':_0x4d3210[_0x1b4785(0x2a8)],'params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':_0x1b4785(0x2c4)+'\u008a\u008a\u0090\u0088\u008c'+'\u0088','ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':_0x4d3210[_0x1b4785(0x762)],'ret':_0x4d3210[_0x1b4785(0x2a8)],'params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':'\u008b\u0088\u008d\u0087\u0090'+_0x1b4785(0x466)+'\u0094','ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':'\u0093\u0087\u008f\u008f\u0093'+'\u0091\u0091\u0089\u0091\u0092'+'\u008c','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x4d3210[_0x1b4785(0x772)],'ret':'void','params':[],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)]]},{'name':_0x4d3210[_0x1b4785(0xb06)],'ret':_0x1b4785(0xa2e),'params':[],'wasmParams':['i32']},{'name':_0x1b4785(0x42e)+'\u008c\u008f\u0086\u0095\u0094'+'\u008a','ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':'\u008e\u0095\u008e\u0087\u0086'+'\u008c\u008e\u0095\u0088\u008e'+'\u0091','ret':_0x1b4785(0xa2e),'params':[],'wasmParams':['i32']},{'name':_0x4d3210[_0x1b4785(0x887)],'ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)]]},{'name':'comme'+_0x1b4785(0x944)+_0x1b4785(0x45c)+'Compl'+_0x1b4785(0xb2),'ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':_0x4d3210['zqfME'],'ret':_0x4d3210[_0x1b4785(0x2a8)],'params':[_0x1b4785(0xa8a)],'wasmParams':[_0x1b4785(0xc64),_0x4d3210[_0x1b4785(0x70e)]]},{'name':_0x1b4785(0x13a)+'\u008a\u0088\u0092\u0095\u0094'+'\u0086','ret':_0x1b4785(0xa2e),'params':[_0x4d3210[_0x1b4785(0x4bf)],'int',_0x4d3210['OTkVi']],'wasmParams':[_0x1b4785(0xc64),_0x4d3210[_0x1b4785(0x70e)],'i32',_0x4d3210[_0x1b4785(0x70e)]]},{'name':'\u008b\u008f\u0089\u0093\u0094'+_0x1b4785(0x9f1)+'\u0089','ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x4d3210['JiHks']]},{'name':_0x4d3210[_0x1b4785(0x6a1)],'ret':_0x1b4785(0xa2e),'params':['int','int','int'],'wasmParams':[_0x4d3210['JiHks'],_0x4d3210['JiHks'],_0x1b4785(0xc64),'i32']},{'name':_0x4d3210[_0x1b4785(0x533)],'ret':_0x1b4785(0xa8a),'params':[],'wasmParams':[_0x1b4785(0xc64)],'wasmRet':_0x4d3210[_0x1b4785(0x70e)]},{'name':_0x1b4785(0xaa6)+'e','ret':_0x4d3210[_0x1b4785(0x2a8)],'params':[],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)]]},{'name':_0x1b4785(0x9cd)+'\u008e\u0094\u0093\u0093\u008d'+'\u0087','ret':_0x4d3210['GQcud'],'params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':'\u0086\u0090\u0086\u008c\u0090'+'\u0095\u008c\u0087\u0086\u0087'+'\u008b','ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':'\u0087\u0087\u0089\u0092\u008d'+_0x1b4785(0x3eb)+'\u0092','ret':_0x1b4785(0xa2e),'params':[],'wasmParams':['i32']},{'name':_0x1b4785(0xbd6)+_0x1b4785(0x1ea)+'\u008e','ret':_0x4d3210['GQcud'],'params':[],'wasmParams':['i32']},{'name':'\u008e\u0092\u0090\u0088\u0091'+_0x1b4785(0x8b6)+'\u008c','ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x4d3210['JiHks']]},{'name':_0x1b4785(0x169)+_0x1b4785(0x4fe)+'\u008e','ret':_0x1b4785(0xa2e),'params':[_0x1b4785(0xa8a)],'wasmParams':[_0x1b4785(0xc64),_0x1b4785(0xc64)]},{'name':_0x4d3210[_0x1b4785(0x529)],'ret':_0x1b4785(0xa2e),'params':[],'wasmParams':['i32']},{'name':'\u008e\u0094\u008b\u0090\u008e'+_0x1b4785(0x6e5)+'\u008c','ret':'void','params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':_0x4d3210['silsX'],'ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)]]},{'name':'OnApp'+'licat'+'ionFo'+_0x1b4785(0xc5d),'ret':_0x1b4785(0xa2e),'params':[_0x1b4785(0xa8a)],'wasmParams':[_0x1b4785(0xc64),_0x4d3210[_0x1b4785(0x70e)]]},{'name':_0x4d3210[_0x1b4785(0x506)],'ret':'bool','params':[],'wasmParams':[_0x1b4785(0xc64)],'wasmRet':_0x4d3210[_0x1b4785(0x70e)]},{'name':_0x4d3210[_0x1b4785(0x8b2)],'ret':_0x4d3210[_0x1b4785(0x2a8)],'params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':_0x4d3210[_0x1b4785(0x82f)],'ret':'bool','params':['int'],'wasmParams':['i32',_0x4d3210[_0x1b4785(0x70e)]],'wasmRet':'i32'},{'name':'\u0087\u008d\u0088\u0086\u008a'+'\u0090\u0088\u008f\u0089\u008a'+'\u008e','ret':_0x1b4785(0xa2e),'params':[_0x4d3210[_0x1b4785(0x866)]],'wasmParams':[_0x1b4785(0xc64),_0x4d3210[_0x1b4785(0x70e)]]},{'name':_0x1b4785(0xa69)+'\u008f\u0095\u0089\u008e\u008b'+'\u0094','ret':_0x1b4785(0xa2e),'params':[],'wasmParams':['i32']},{'name':'\u0086\u008a\u008f\u008f\u0089'+_0x1b4785(0x7d)+'\u008e','ret':_0x4d3210[_0x1b4785(0x2a8)],'params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':'\u008a\u008a\u008b\u008f\u0092'+_0x1b4785(0xa3b)+'\u008c','ret':_0x4d3210['GQcud'],'params':[_0x1b4785(0xea),_0x4d3210['OTkVi'],_0x1b4785(0xea)],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)],'i32',_0x1b4785(0xc64),'i32']},{'name':_0x4d3210[_0x1b4785(0x1dd)],'ret':'void','params':[],'wasmParams':['i32']},{'name':_0x1b4785(0x53d),'ret':_0x4d3210['GQcud'],'params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':'\u0086\u0088\u0095\u0092\u0094'+_0x1b4785(0x93a)+'\u0088','ret':_0x4d3210[_0x1b4785(0x2a8)],'params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':'\u0094\u0092\u0086\u0092\u0092'+_0x1b4785(0x3b2)+'\u008e','ret':_0x4d3210[_0x1b4785(0x2a8)],'params':[],'wasmParams':['i32']},{'name':_0x4d3210['dweEg'],'ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':'\u0087\u0089\u008f\u008a\u0095'+'\u0089\u0094\u0091\u0087\u0087'+'\u0086','ret':_0x4d3210['GQcud'],'params':[_0x1b4785(0xa8a)],'wasmParams':['i32','i32']},{'name':_0x4d3210[_0x1b4785(0x9f5)],'ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)]]},{'name':_0x4d3210[_0x1b4785(0x983)],'ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':_0x1b4785(0x45a)+'\u008b\u0091\u008d\u008a\u008b'+'\u008e','ret':_0x4d3210['GQcud'],'params':[],'wasmParams':['i32']},{'name':_0x4d3210['xrefN'],'ret':_0x4d3210[_0x1b4785(0x2a8)],'params':[_0x1b4785(0xea),_0x4d3210['OTkVi']],'wasmParams':['i32','i32','i32']},{'name':_0x1b4785(0x2fa)+_0x1b4785(0x130)+'\u0086','ret':'void','params':[],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)]]},{'name':_0x4d3210[_0x1b4785(0x353)],'ret':_0x4d3210[_0x1b4785(0x2a8)],'params':[],'wasmParams':[_0x4d3210[_0x1b4785(0x70e)]]},{'name':'\u0094\u0088\u008a\u0094\u0092'+_0x1b4785(0x76c)+'\u0092','ret':'void','params':[_0x1b4785(0xa8a)],'wasmParams':[_0x1b4785(0xc64),_0x4d3210[_0x1b4785(0x70e)]]},{'name':_0x4d3210[_0x1b4785(0xb25)],'ret':_0x1b4785(0xa2e),'params':[],'wasmParams':[_0x1b4785(0xc64)]},{'name':_0x1b4785(0x7e3)+_0x1b4785(0x630)+'\u0095','ret':_0x1b4785(0xa2e),'params':[],'wasmParams':['i32']},{'name':_0x4d3210['aACkV'],'ret':_0x4d3210[_0x1b4785(0x2a8)],'params':[],'wasmParams':['i32']}]},_0x2b4c43=[],_0x32994d=[],_0x38db79={},_0x48e9a1=-0x1a67+-0x1adf+0x1aa3*0x2,_0x3c78fe=![],_0x361df6=[],_0x160c27=[{'type':'FPSco'+'ntrol'+'ler','keep':!![]},{'type':_0x1b4785(0x81)+'hScri'+'pt','keep':!![]},{'type':_0x1b4785(0x2d4)+'nMana'+_0x1b4785(0x9f9),'keep':![]},{'type':_0x1b4785(0x416)+_0x1b4785(0xb08)+_0x1b4785(0x784),'keep':!![]},{'type':_0x4d3210[_0x1b4785(0x249)],'keep':!![]},{'type':_0x4d3210['rUfSp'],'keep':!![],'many':!![]},{'type':_0x1b4785(0x3ab)+'rkPla'+_0x1b4785(0x565)+'imati'+_0x1b4785(0x6e),'keep':!![],'many':!![]},{'type':_0x1b4785(0x4ff)+'otrol'+'ler','keep':!![],'many':!![]},{'type':_0x4d3210[_0x1b4785(0xaa5)],'keep':!![],'many':!![]}],_0x8834d5=['Assem'+'bly-C'+_0x1b4785(0x7e4)+_0x1b4785(0x3f7),_0x1b4785(0x1e6)+_0x1b4785(0x266)+_0x1b4785(0x7e4)+'-firs'+_0x1b4785(0xfa)+'.dll',_0x4d3210['RaeDZ'],'cInpu'+'t.dll',_0x4d3210[_0x1b4785(0x862)],_0x1b4785(0x3d9)+'erate'+'d'];(function _0x54a73a(){var _0x390f43=_0x1b4785,_0x1cf583={'yKHZu':function(_0x31343f,_0x38c3bc){var _0x34a75b=_0x224c;return _0x4d3210[_0x34a75b(0x381)](_0x31343f,_0x38c3bc);},'NlkJp':function(_0x56d259,_0x3e7a68){return _0x4d3210['rBNOA'](_0x56d259,_0x3e7a68);},'EjIGx':function(_0x415bb9,_0x2c3388){var _0x15d577=_0x224c;return _0x4d3210[_0x15d577(0x4f1)](_0x415bb9,_0x2c3388);}};if(_0x4d3210['oLCAu'](_0x390f43(0x756),_0x4d3210['fzqXe']))try{if(_0x4d3210[_0x390f43(0x7ba)](_0x4d3210[_0x390f43(0x288)],_0x390f43(0x8c5))){_0x4758d8[_0x390f43(0x558)]({'o':-(0x3cb*-0x5+-0x12c2*-0x1+0x12*0x3),'v':0x0,'why':_0x1cf583['yKHZu'](_0x390f43(0x48b)+_0x390f43(0x9eb)+'f\x20',_0x286b3f)+(_0x390f43(0x9c)+_0x390f43(0x440)+_0x390f43(0xc47)+_0x390f43(0x618)+'ed')});return;}else{var _0x66c16f=('4|8|1'+'0|9|1'+_0x390f43(0x13e)+'0|5|7'+'|3')[_0x390f43(0x60a)]('|'),_0x1cc9f=-0x23c7+0x21b5*-0x1+-0x115f*-0x4;while(!![]){switch(_0x66c16f[_0x1cc9f++]){case'0':_0x5d8b67();continue;case'1':_0x1065b2['ok']=!![];continue;case'2':try{var _0x4a615c=window[_0x390f43(0x72f)+_0x390f43(0x7c1)+_0x390f43(0x41c)][_0x390f43(0x844)+'me'];_0x4a615c[_0x390f43(0x75f)+_0x390f43(0xa89)+'g']=_0x4d3210[_0x390f43(0x7c4)](_0x21f2bf+':',Math['rando'+'m']()[_0x390f43(0x356)+'ing'](0xeb8+0x1*0x81c+-0x10*0x16b)['slice'](0x120+-0x21f2+0x20d4,0x1*-0x1b70+0x26dd+-0xb63)),_0x3e646b=_0x4a615c[_0x390f43(0x75f)+'uraTa'+'g'];}catch(_0x1b4784){}continue;case'3':_0x1065b2['memor'+_0x390f43(0x802)]=!![];continue;case'4':var _0x29cc41=window[_0x390f43(0x72f)+_0x390f43(0x7c1)+_0x390f43(0x41c)]&&window['Unity'+'WebMo'+_0x390f43(0x41c)]['Runti'+'me'];continue;case'5':_0x1065b2['hooks'+'Regis'+_0x390f43(0xc1e)]=_0x2b4c43[_0x390f43(0x17c)+'h'];continue;case'6':_0x5b6590();continue;case'7':_0xfb5d30();continue;case'8':if(!_0x29cc41||typeof _0x29cc41[_0x390f43(0x7c8)+'ePlug'+'in']!=='funct'+_0x390f43(0x659)){_0x1065b2[_0x390f43(0x307)]=_0x4d3210[_0x390f43(0x479)];return;}continue;case'9':_0xefd364=_0x29cc41['creat'+_0x390f43(0x738)+'in']({'name':_0x4d3210[_0x390f43(0x11c)],'version':_0x21f2bf,'referencedAssemblies':_0x8834d5[_0x390f43(0x603)]()});continue;case'10':_0x1065b2[_0x390f43(0x83f)+_0x390f43(0xbbf)]=!![];continue;}break;}}}catch(_0x1f918b){_0x1065b2['error']=String(_0x1f918b&&_0x1f918b[_0x390f43(0x1be)+'ge']||_0x1f918b);}else{var _0x78f9a=_0x1cf583['NlkJp'](_0x1a7a17,'v2')?-0x51d+0xd*-0xd+0x5c8*0x1:_0x1cf583[_0x390f43(0x613)](_0x19c17d,'v3')?0xaab+-0x2133+0x168b:-0x7*0x8f+-0x1*-0x2405+-0x2018*0x1,_0x3d1628=_0x247a32(_0x17e053['ptr'],_0x113fd1,_0x78f9a);_0x3d1628&&(_0x59677e[_0x390f43(0xf5)]=_0x3d1628,_0x4e36a3['v']=_0x3d1628[0x6a7+0x119+-0x7c0]);}}());var _0x493391=new Float32Array(-0x30*-0x9b+0x7*-0x18b+-0x26*0x7b),_0x36827d=new Int32Array(_0x493391['buffe'+'r']);function _0x57e76c(_0x2b46be){return _0x493391[0x9be*0x2+0x252+-0xae7*0x2]=_0x2b46be,_0x36827d[-0x3dd*0x1+0x2*0xed7+-0x19d1];}function _0x29f185(_0x34c99c){var _0x19129d=_0x1b4785;return _0x36827d[-0x225b+0xf*0x4a+0x5*0x601]=_0x4d3210[_0x19129d(0x77a)](_0x34c99c,-0x2e6*-0x3+0x5a9+-0x7*0x20d),_0x493391[-0xce*-0x25+-0x1823*0x1+0x3*-0x1e1];}var _0x5e265a={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x4f7d11(){var _0x434395=_0x1b4785,_0x263cca={'RCTkp':_0x4d3210[_0x434395(0xa6b)],'HMbyv':function(_0xbbacc6){return _0x4d3210['agUYS'](_0xbbacc6);},'UbUDK':function(_0x560c82,_0x37d337){return _0x560c82!==_0x37d337;}};if(_0x4d3210[_0x434395(0x2e3)](_0x4d3210['bjIcr'],_0x4d3210[_0x434395(0xbd)])){var _0x16c73d=(_0x434395(0x4cc)+_0x434395(0x297)+_0x434395(0x594))['split']('|'),_0x16d041=-0x22e5+-0x1*0x2637+0x1247*0x4;while(!![]){switch(_0x16c73d[_0x16d041++]){case'0':_0x92c527[_0x434395(0x5f8)+'t']();continue;case'1':_0x92c527[_0x434395(0xac7)]=_0x34c23b;continue;case'2':var _0x92c527=_0x23a00f[_0x434395(0x7c8)+'eElem'+'ent'](_0x263cca[_0x434395(0x4fb)]);continue;case'3':try{_0x436b7f[_0x434395(0x902)+_0x434395(0x982)+'d']('copy'),_0x263cca['HMbyv'](_0x2c8250);}catch(_0x238281){}continue;case'4':_0x92c527['remov'+'e']();continue;case'5':if(!_0x3bb371['body'])return;continue;case'6':_0x3bce9f['body'][_0x434395(0x950)+'dChil'+'d'](_0x92c527);continue;}break;}}else{try{if(_0xefd364&&_0xefd364['_runt'+_0x434395(0x22f)]){var _0xff089b=_0xefd364['_runt'+_0x434395(0x22f)];if(_0x4d3210[_0x434395(0xa06)](typeof _0xff089b[_0x434395(0x801)+_0x434395(0xbaa)+'e'],_0x4d3210[_0x434395(0x5d3)])){var _0x3d0264=_0xff089b['resol'+_0x434395(0xbaa)+'e']();if(_0x3d0264){if(_0x4d3210[_0x434395(0x7b4)]===_0x4d3210['HPWDr']){if(_0x263cca[_0x434395(0xb0e)](typeof _0xd882ab,'undef'+_0x434395(0xb7c))&&_0x5cd6c6)return _0x53bd48[_0x434395(0xbca)+'e']='bare\x20'+'game\x20'+'bindi'+'ng',_0x1da147;}else return _0x5e265a[_0x434395(0xbca)+'e']=_0x4d3210[_0x434395(0xac0)],_0x3d0264;}}if(_0xff089b['_game'])return _0x5e265a[_0x434395(0xbca)+'e']=_0x4d3210[_0x434395(0x940)],_0xff089b[_0x434395(0x742)];}}catch(_0x4c309a){}try{var _0x2c93e7=window['Unity'+_0x434395(0x7c1)+_0x434395(0x41c)]&&window[_0x434395(0x72f)+_0x434395(0x7c1)+_0x434395(0x41c)]['Runti'+'me'];if(_0x2c93e7&&_0x4d3210[_0x434395(0x6db)](typeof _0x2c93e7[_0x434395(0x801)+'veGam'+'e'],_0x4d3210['uuNzc'])){var _0x26f9dd=_0x2c93e7[_0x434395(0x801)+'veGam'+'e']();if(_0x26f9dd){if(_0x4d3210[_0x434395(0x910)](_0x434395(0x4c0),_0x4d3210[_0x434395(0x438)]))return _0x5e265a['sourc'+'e']=_0x434395(0x844)+_0x434395(0xb41)+'solve'+_0x434395(0x144)+')',_0x26f9dd;else _0x1e2509['preve'+_0x434395(0x25f)+'ault']();}}if(_0x2c93e7&&_0x2c93e7['_game'])return _0x5e265a['sourc'+'e']=_0x4d3210['FAfVT'],_0x2c93e7;}catch(_0x18219e){}try{var _0x2b88df=window[_0x434395(0xc4)+'Insta'+_0x434395(0x322)]||window[_0x434395(0xc4)+_0x434395(0x34f)]||window[_0x434395(0x843)];if(_0x2b88df){if(_0x4d3210[_0x434395(0x543)](_0x4d3210[_0x434395(0x9ba)],'JoOmo'))_0x319a06['hooks'+_0x434395(0x251)+_0x434395(0x658)]===-0xd2a+-0xa75+0x179f*0x1?_0x25c437[_0x434395(0xb44)+'ngs'][_0x434395(0x558)](_0x4d3210[_0x434395(0x65c)](_0x4d3210['JifXq'](_0x4d3210['nlPlI'](_0x4d3210[_0x434395(0x5fb)]+_0x56b9b1[_0x434395(0x8b)+_0x434395(0x6cd)],_0x434395(0xa6)+_0x434395(0xbbe)+_0x434395(0x8dd)+_0x434395(0x972)+_0x434395(0x372)+'UWMK.'+_0x434395(0x41d)+'apply'+_0x434395(0x9de)+'\x20')+('runs\x20'+_0x434395(0x89f)+_0x434395(0x922)+_0x434395(0xb00)+_0x434395(0x1e6)+_0x434395(0x3bf)+'nstan'+_0x434395(0x851)+_0x434395(0x653)+'snaps'+_0x434395(0x93)+'plugi'+_0x434395(0xac9)+_0x434395(0xc0e)+'ngth,'+'\x20'),_0x4d3210[_0x434395(0x8a2)])+_0x4d3210[_0x434395(0xb29)],_0x26584d['hooks'+'Regis'+'tered'+'AtArm'])+(_0x434395(0xa6)+_0x434395(0xb53)+_0x434395(0x4fa)+_0x434395(0x6d8)+'ng\x20at'+_0x434395(0x8cd)+'ment-'+'start'+'.')):_0x587d89[_0x434395(0xb44)+_0x434395(0x35c)]['push'](_0x4d3210[_0x434395(0x3f2)](_0x4d3210['zXYik'](_0x4d3210['GvOMm']('UWMK\x20'+_0x434395(0x801)+_0x434395(0x1a1)+_0x51cda0[_0x434395(0x8b)+'Resol'+_0x434395(0x658)],_0x434395(0xb27)),_0x46d865[_0x434395(0x8b)+_0x434395(0x6cd)]),'\x20hook'+_0x434395(0xc43)+_0x434395(0x1bd)+'able\x20'+'index'+_0x434395(0x6cc)+_0x434395(0x511)+_0x434395(0x1ec)+_0x434395(0x9be)+_0x434395(0x193)+_0x434395(0x27c)+'re\x20')+('(this'+_0x434395(0xb82)+_0x434395(0x725)+'fo*)\x20'+_0x434395(0x456)+_0x434395(0xa5)+_0x434395(0x684)+'t\x20mat'+'ch\x20th'+'is\x20bu'+_0x434395(0x9cf)));else return _0x5e265a[_0x434395(0xbca)+'e']='windo'+_0x434395(0x7a6)+_0x434395(0x75e),_0x2b88df;}}catch(_0x33e51f){}try{if(_0x4d3210['HlIby'](typeof game,_0x434395(0x24d)+_0x434395(0xb7c))&&game)return _0x5e265a[_0x434395(0xbca)+'e']='bare\x20'+_0x434395(0x71f)+_0x434395(0x5cf)+'ng',game;}catch(_0x4be5fd){}try{var _0x3b3522=Object['keys'](window);for(var _0x55e3aa=-0x1b7*0x7+-0x4f*0x1+0xc50;_0x55e3aa<_0x3b3522[_0x434395(0x17c)+'h']&&_0x55e3aa<-0x5*0x6bb+-0x146+-0x149*-0x1d;_0x55e3aa++){var _0x13c2ad=window[_0x3b3522[_0x55e3aa]];if(_0x13c2ad&&typeof _0x13c2ad==='objec'+'t'&&_0x13c2ad[_0x434395(0x568)+'e']&&_0x13c2ad[_0x434395(0x568)+'e'][_0x434395(0x581)+'8']&&_0x13c2ad['Modul'+'e'][_0x434395(0x581)+'8'][_0x434395(0x816)+'r'])return _0x5e265a['sourc'+'e']=_0x4d3210['ujBHM'](_0x434395(0x6ab)+'w.',_0x3b3522[_0x55e3aa])+_0x4d3210['mymxi'],_0x13c2ad;}}catch(_0x2eb26e){}return _0x5e265a[_0x434395(0xbca)+'e']=null,null;}}function _0x4feac4(){var _0x1aaa1b=_0x1b4785;if(_0x4d3210[_0x1aaa1b(0x543)](_0x4d3210['CjlyC'],_0x1aaa1b(0x744))){try{if(_0x1aaa1b(0x6dc)!==_0x1aaa1b(0x1d9)){if(_0x893716&&_0x893716[_0x1aaa1b(0x816)+'r']&&_0x893716['buffe'+'r']['byteL'+_0x1aaa1b(0x184)])return _0x5e265a[_0x1aaa1b(0xbca)+'e']=_0x5e265a[_0x1aaa1b(0xbca)+'e']||_0x4d3210[_0x1aaa1b(0x459)],new Uint8Array(_0x893716[_0x1aaa1b(0x816)+'r']);}else _0x5853fd[_0x1aaa1b(0xb44)+_0x1aaa1b(0x35c)][_0x1aaa1b(0x558)](_0x4d3210['dqBqX'](_0x1aaa1b(0x325)+_0x1aaa1b(0x214)+_0x1aaa1b(0x5d2)+_0x1aaa1b(0x635)+_0x1aaa1b(0x23b)+_0x1aaa1b(0xef)+_0x1aaa1b(0x4db)+_0x1aaa1b(0x72f)+'WebMo'+_0x1aaa1b(0xbc8)+'\x20The\x20'+_0x1aaa1b(0x844)+_0x1aaa1b(0x7a5)+'\x20arme'+'d\x20was'+'\x20'+(_0x1aaa1b(0x3b5)+'ced\x20b'+'y\x20a\x20d'+_0x1aaa1b(0xbb1)+'ent\x20i'+_0x1aaa1b(0x5f7)+'ce,\x20s'+'o\x20we\x20'+'are\x20a'+_0x1aaa1b(0xc2f)+_0x1aaa1b(0x663)+_0x1aaa1b(0x379)+_0x1aaa1b(0x45d)+_0x1aaa1b(0x332)+'r\x20')+(_0x1aaa1b(0x9cb)+'ame\x20w'+'hile\x20'+_0x1aaa1b(0x512)+'ne\x20ho'+'lding'+_0x1aaa1b(0x5e2)+_0x1aaa1b(0x7a0)+'haned'+'.\x20Dis'+_0x1aaa1b(0x358)+_0x1aaa1b(0x64e)+_0x1aaa1b(0xc50)+'r\x20'),_0x4d3210[_0x1aaa1b(0x56a)]));}catch(_0x89ca53){}try{if(_0x4d3210['Sxmtw']('JWQIG',_0x4d3210[_0x1aaa1b(0x2b6)])){var _0x3be94e=_0x4d3210[_0x1aaa1b(0x344)](_0x4f7d11);if(_0x3be94e&&_0x3be94e[_0x1aaa1b(0x568)+'e']&&_0x3be94e[_0x1aaa1b(0x568)+'e'][_0x1aaa1b(0x581)+'8']&&_0x3be94e[_0x1aaa1b(0x568)+'e']['HEAPU'+'8'][_0x1aaa1b(0x816)+'r'])return _0x3be94e[_0x1aaa1b(0x568)+'e'][_0x1aaa1b(0x581)+'8'];}else _0x161664=_0x44150c(_0x1a9efb);}catch(_0x381bb3){}return null;}else{if(_0x4892a5[_0x38d2f6]['conte'+_0x1aaa1b(0xb18)+_0x1aaa1b(0x361)])_0x4974ca[_0x1bfe04]['conte'+_0x1aaa1b(0xb18)+'dow'][_0x1aaa1b(0x627)+'essag'+'e'](_0x27071e,'*');}}function _0x1634d1(){var _0x2bd1b8=_0x1b4785;if(_0x4d3210['EDUUA']!=='DOTsV'){var _0x4bc96f=_0x4d3210[_0x2bd1b8(0x312)](_0x4feac4);if(!_0x4bc96f)return null;try{return new DataView(_0x4bc96f['buffe'+'r'],_0x4bc96f['byteO'+_0x2bd1b8(0x367)],_0x4bc96f[_0x2bd1b8(0xa5e)+_0x2bd1b8(0x184)]);}catch(_0x11ffe1){return _0x2bd1b8(0x73a)!==_0x4d3210['WunBz']?null:_0x535591['on'];}}else _0x492eb2++,_0x9f276b[_0x2bd1b8(0x37e)]=!![];}function _0x28dbcb(_0x445196,_0x2a8155){var _0x42b085=_0x1b4785,_0x21c377=_0x4d3210[_0x42b085(0x181)](_0x1634d1);if(!_0x21c377)return _0x5e265a['faile'+'d']++,_0x5e265a[_0x42b085(0x828)+'rror']=_0x5e265a[_0x42b085(0x828)+_0x42b085(0x8ae)]||_0x4d3210[_0x42b085(0x49e)],undefined;if(_0x4d3210[_0x42b085(0x5b6)](_0x445196,0xa60+-0x103*0x1+0x11*-0x8d)||_0x445196+(0x14b*-0x15+-0x5*0x687+-0x2*-0x1de7)>_0x21c377[_0x42b085(0xa5e)+'ength'])return _0x5e265a[_0x42b085(0x1fe)+'d']++,_0x5e265a[_0x42b085(0x828)+_0x42b085(0x8ae)]=_0x5e265a[_0x42b085(0x828)+_0x42b085(0x8ae)]||_0x4d3210[_0x42b085(0x2ed)]+_0x445196['toStr'+'ing'](-0x1e+-0x13*-0x167+-0x5*0x54b)+_0x4d3210[_0x42b085(0x188)]+_0x21c377[_0x42b085(0xa5e)+'ength'][_0x42b085(0x356)+'ing'](-0x2510+-0x56*-0x17+0x1d66),undefined;try{_0x5e265a['ok']++;switch(_0x2a8155){case'u8':return _0x21c377['getUi'+'nt8'](_0x445196);case'i8':return _0x21c377[_0x42b085(0xc54)+'t8'](_0x445196);case _0x4d3210[_0x42b085(0x908)]:return _0x21c377[_0x42b085(0xc54)+_0x42b085(0x473)](_0x445196,!![]);case _0x42b085(0xc25):return _0x21c377['getUi'+'nt16'](_0x445196,!![]);case'i32':return _0x21c377[_0x42b085(0xc54)+'t32'](_0x445196,!![]);case'u32':return _0x21c377[_0x42b085(0x5e7)+'nt32'](_0x445196,!![]);case _0x4d3210[_0x42b085(0xa24)]:return _0x21c377['getFl'+_0x42b085(0x88a)](_0x445196,!![]);case _0x4d3210['wGSDo']:return _0x21c377['getFl'+_0x42b085(0x6d2)](_0x445196,!![]);case'v2':case'v3':case'v4':return _0x21c377[_0x42b085(0xc0b)+_0x42b085(0x88a)](_0x445196,!![]);default:return _0x21c377['getIn'+'t32'](_0x445196,!![]);}}catch(_0xa733d2){if(_0x4d3210[_0x42b085(0x580)](_0x4d3210['lNfUp'],_0x4d3210['lNfUp']))_0x3c8a17[_0x42b085(0xa2b)+_0x42b085(0x5a2)]=-0x87d*0x1+0x24ba+0x22c*-0xd,_0x4ff7c1[_0x42b085(0x6fb)]('PP>>\x20'+'n='+_0x49cc79[_0x42b085(0x17c)+'h']+(_0x42b085(0xb77)+'h=')+_0x12c51a[_0x42b085(0x657)+'ed'](0x1*-0x212d+-0x162c+0x375b)+(_0x42b085(0x4fc)+'r=')+_0x19cfa0['toFix'+'ed'](-0x2*-0x53b+-0x1296*0x2+0x1ab8)+('\x20know'+'n=')+_0x41e953+('\x20samp'+_0x42b085(0x4d6))+_0x371deb['strin'+'gify'](_0x1ac21d['slice'](0x12*0x19d+-0x2*-0xc90+-0x362a,0x1d4d+0x1*0x18ad+-0x2*0x1afc)));else return _0x5e265a[_0x42b085(0x1fe)+'d']++,_0x5e265a[_0x42b085(0x828)+_0x42b085(0x8ae)]=_0x5e265a[_0x42b085(0x828)+_0x42b085(0x8ae)]||String(_0xa733d2&&_0xa733d2['messa'+'ge']||_0xa733d2)['slice'](0x1e79+-0x1d78+-0x101,-0x3*-0xc00+-0xaf3+-0x1895),undefined;}}function _0x21949b(_0x1a835d,_0x111ec3,_0x31d730){var _0x54773c=_0x1b4785,_0x4fb37d=_0x4d3210[_0x54773c(0x312)](_0x1634d1);if(!_0x4fb37d||_0x4d3210[_0x54773c(0x1ba)](_0x1a835d,0x12cc+0x132b*-0x1+0x5f)||_0x4d3210['NRXoE'](_0x1a835d,-0x91*0x11+0x1d02+0x1*-0x135d)>_0x4fb37d[_0x54773c(0xa5e)+'ength'])return![];try{switch(_0x111ec3){case'u8':case'i8':_0x4fb37d[_0x54773c(0x943)+'nt8'](_0x1a835d,_0x4d3210[_0x54773c(0x32c)](_0x31d730,-0x144*-0x11+0xc2c+0x20b1*-0x1));break;case _0x4d3210[_0x54773c(0x908)]:case'u16':_0x4fb37d[_0x54773c(0x768)+'t16'](_0x1a835d,_0x4d3210[_0x54773c(0x77a)](_0x31d730,-0x21e+-0x13c*0xf+0x14a2),!![]);break;case _0x54773c(0xc64):case _0x4d3210[_0x54773c(0x363)]:_0x4fb37d[_0x54773c(0x768)+'t32'](_0x1a835d,_0x31d730|0x3d9*0x5+-0x1f79*0x1+0xc3c,!![]);break;case _0x4d3210[_0x54773c(0xa24)]:_0x4fb37d[_0x54773c(0xe4)+'oat32'](_0x1a835d,_0x31d730,!![]);break;default:_0x4fb37d[_0x54773c(0x768)+_0x54773c(0x645)](_0x1a835d,_0x4d3210['GqFut'](_0x31d730,-0x23f5+0x12*-0x1f5+0x1*0x472f),!![]);}return!![];}catch(_0x3ee1fd){return![];}}var _0x47660f={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':_0x4d3210['JiHks']},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':_0x1b4785(0xc64)},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0x2338fc(_0x54193c){var _0x168fbd=_0x1b4785,_0x246686={'pHbPQ':function(_0x51f9a2,_0x432b2d){return _0x4d3210['nlwAT'](_0x51f9a2,_0x432b2d);},'snPDF':function(_0x43b98e,_0x355cb0){var _0xa1364=_0x224c;return _0x4d3210[_0xa1364(0x352)](_0x43b98e,_0x355cb0);}};if(_0x168fbd(0x5c1)===_0x168fbd(0x5c1)){var _0x485ea8='';for(var _0xfbac11=-0x230f+0x2036+0x2d9;_0xfbac11<_0x54193c[_0x168fbd(0x17c)+'h'];_0xfbac11++){var _0x47a90b=_0x54193c[_0xfbac11][_0x168fbd(0x356)+_0x168fbd(0x12e)](-0x13*0xa4+0x9cd+0x26f);_0x485ea8+=(_0x47a90b[_0x168fbd(0x17c)+'h']<-0xda3+-0xe40+0x1be5?'0':'')+_0x47a90b;}return _0x485ea8;}else _0x15b051[_0x168fbd(0x505)]=_0x246686['pHbPQ'](_0x246686[_0x168fbd(0x831)](_0x355a3b[_0x168fbd(0x621)+'Width']||0x26bf+-0x856*-0x2+-0x376b,_0x2b66a1[_0x168fbd(0x498)+'tWidt'+'h']||0x113f*0x1+0x23ab*0x1+-0x327e),-0x282+0x3d9*-0x4+-0x149*-0xe);}function _0x176c45(_0x5ebfa9,_0x4e2817,_0x1c9e11){var _0x18691f=_0x1b4785,_0x565cc9={'pMtov':function(_0x233ada,_0x73925a){var _0x25390a=_0x224c;return _0x4d3210[_0x25390a(0x370)](_0x233ada,_0x73925a);},'Tpwsc':function(_0x31fc5c,_0x4d2d18,_0x235918){var _0x21ba62=_0x224c;return _0x4d3210[_0x21ba62(0x340)](_0x31fc5c,_0x4d2d18,_0x235918);},'RUHkd':function(_0x4c63e0,_0x303390){return _0x4c63e0!==_0x303390;}};if(_0x4d3210['FRdhv']('PkaYI',_0x4d3210[_0x18691f(0x69f)])){var _0x2def52=_0xf1aeb1();if(!_0x2def52)return null;return{'ptr':'0x'+_0x2def52['ptr']['toStr'+_0x18691f(0x12e)](-0x2296+-0x4db*-0x5+0xa5f),'feet':_0x2def52['feet'],'eye':_0x2def52['eye'],'posAt':_0x2def52[_0x18691f(0x132)],'copies':_0x2def52['copie'+'s'],'cluster':_0x2def52['clust'+'er'],'eyeHeight':_0x3829dc,'pitch':_0x2def52[_0x18691f(0x15b)],'yaw':_0x2def52['yaw'],'reach':_0x2def52['reach']};}else{var _0x6f6361=_0x4d3210[_0x18691f(0x181)](_0x1634d1);if(!_0x6f6361)return _0x5e265a[_0x18691f(0x1fe)+'d']++,_0x5e265a[_0x18691f(0x828)+_0x18691f(0x8ae)]=_0x5e265a[_0x18691f(0x828)+'rror']||_0x18691f(0xc2)+'APU8\x20'+'-\x20Uni'+_0x18691f(0xb94)+_0x18691f(0xb96)+'e\x20not'+_0x18691f(0xb77)+_0x18691f(0x83)+'\x20via\x20'+_0x18691f(0x844)+'me.re'+_0x18691f(0x199)+'Game('+')\x20or\x20'+'any\x20w'+_0x18691f(0x733)+_0x18691f(0x30f)+'al',null;if(_0x4d3210[_0x18691f(0x1ba)](_0x4e2817,-0x10d+-0x4e1+0x5ee)||_0x4e2817+_0x1c9e11>_0x6f6361[_0x18691f(0xa5e)+_0x18691f(0x184)])return _0x5e265a[_0x18691f(0x1fe)+'d']++,_0x5e265a[_0x18691f(0x828)+_0x18691f(0x8ae)]=_0x5e265a[_0x18691f(0x828)+'rror']||_0x4d3210[_0x18691f(0xa1a)]('addre'+_0x18691f(0x23c)+(_0x5ebfa9+_0x4e2817)['toStr'+_0x18691f(0x12e)](0x1a2c+0x23f5+-0x3e11),'\x20past'+'\x20heap'+_0x18691f(0x7f5)+'0x')+_0x6f6361['byteL'+_0x18691f(0x184)][_0x18691f(0x356)+_0x18691f(0x12e)](-0x1ff4+0x4*-0x6d3+0x3b50),null;try{if(_0x4d3210['Zyiun']===_0x4d3210[_0x18691f(0x4b3)]){var _0xa3da2d=new Uint8Array(_0x1c9e11);for(var _0x1396b2=-0x242c+-0x190+-0x45*-0x8c;_0x1396b2<_0x1c9e11;_0x1396b2++)_0xa3da2d[_0x1396b2]=_0x6f6361[_0x18691f(0x5e7)+'nt8'](_0x5ebfa9+_0x4e2817+_0x1396b2);return _0x5e265a['ok']++,_0xa3da2d;}else{_0x403445[_0x18691f(0x9f3)]={};for(var _0x29f16f=-0x243b+0x2477+-0x4*0xf;_0x29f16f<_0x2dd5ee[_0x18691f(0x17c)+'h'];_0x29f16f++){var _0x4685f0=_0x4a77fb(_0x565cc9[_0x18691f(0xb4f)](_0x494f52,_0x565cc9['Tpwsc'](_0x4c6b6b,_0x588f0c[_0x29f16f][0x1f92+-0x18e3*0x1+-0x6af],-0x5f3*-0x6+0x70a+-0x1*0x2aac)),_0x18691f(0xc64));if(_0x4685f0!==_0x19bd39)_0x328d6c[_0x18691f(0x9f3)][_0x3cea63[_0x29f16f][0x4*-0xac+0x23d9+-0x1*0x2128]]=_0x4685f0;}}}catch(_0x4cc788){if(_0x4d3210['hVzVb'](_0x4d3210[_0x18691f(0x8ca)],_0x4d3210['ajnkZ'])){if(_0x27fede[_0x18691f(0xc05)]&&_0x565cc9['RUHkd'](_0x3caa3f[_0x18691f(0xc05)],_0x21f7aa))_0x27aa2b[_0x18691f(0xc05)]['postM'+_0x18691f(0x225)+'e'](_0x4bbeb4,'*');}else return _0x5e265a['faile'+'d']++,_0x5e265a['lastE'+'rror']=_0x5e265a[_0x18691f(0x828)+_0x18691f(0x8ae)]||_0x4d3210[_0x18691f(0x8c0)](String,_0x4cc788&&_0x4cc788['messa'+'ge']||_0x4cc788)['slice'](0x16d4+-0x166e+-0x66,-0x1e43+-0x14cf*-0x1+0x9ec),null;}}}function _0x4e69d3(_0x597076,_0x521468,_0x10a7b7){var _0x146e16=_0x1b4785,_0x3152d5=_0x4d3210[_0x146e16(0x4e5)][_0x146e16(0x60a)]('|'),_0x8e8041=-0x1*-0x585+0x1243+-0x17c8;while(!![]){switch(_0x3152d5[_0x8e8041++]){case'0':if(!_0x176e34)return null;continue;case'1':var _0x29943e=_0x10a7b7===_0x4d3210['XtwWX']?_0x34d7e7[_0x146e16(0xc0b)+_0x146e16(0x88a)](_0xfbfe0b[_0x146e16(0x164)],!![]):_0x10a7b7===_0x4d3210['WLDIV']?_0x34d7e7[_0x146e16(0xc54)+_0x146e16(0x645)](_0xfbfe0b[_0x146e16(0x164)],!![]):_0x34d7e7[_0x146e16(0x5e7)+_0x146e16(0x561)](_0xfbfe0b['fake']);continue;case'2':return{'keyAtOffset0':_0x20b8ba,'hidden':_0x45ff96,'inited':_0x285e6e,'fake':_0x29943e,'act':_0x1f017d,'hex':_0x2338fc(_0x176e34),'alt':_0x4d3210[_0x146e16(0xb1a)](_0x10a7b7,_0x4d3210[_0x146e16(0x51a)])?_0x45ff96^(_0x29943e|-0x1bbc*0x1+0x20c*-0x11+0x3e88):null};case'3':var _0x285e6e=_0x34d7e7[_0x146e16(0x5e7)+_0x146e16(0x561)](_0xfbfe0b[_0x146e16(0x50d)+'d'])&0x2586+0x1c64*-0x1+-0x1*0x921;continue;case'4':var _0x176e34=_0x176c45(_0x597076,_0x521468,_0xfbfe0b[_0x146e16(0x48e)]);continue;case'5':var _0xfbfe0b=_0x47660f[_0x10a7b7];continue;case'6':var _0x1f017d=_0x34d7e7[_0x146e16(0x5e7)+_0x146e16(0x561)](_0xfbfe0b['activ'+'e'])&-0x1*0x833+-0x1a89+0x22bd;continue;case'7':var _0x45ff96=_0x34d7e7[_0x146e16(0xc54)+'t32'](_0xfbfe0b[_0x146e16(0xda)+'n'],!![]);continue;case'8':var _0x34d7e7=new DataView(_0x176e34[_0x146e16(0x816)+'r'],_0x176e34['byteO'+'ffset'],_0x176e34['byteL'+_0x146e16(0x184)]);continue;case'9':var _0x20b8ba=_0x34d7e7[_0x146e16(0xc54)+_0x146e16(0x645)](_0xfbfe0b['key'],!![]);continue;}break;}}function _0x471594(_0x31ccdc,_0x13827a,_0x538a03){var _0x31dd5a=_0x1b4785;if(_0x31ccdc==='obfF')return _0x4d3210[_0x31dd5a(0x6fe)](_0x29f185,_0x13827a^_0x538a03);if(_0x4d3210[_0x31dd5a(0x194)](_0x31ccdc,_0x4d3210[_0x31dd5a(0x51a)]))return _0x4d3210[_0x31dd5a(0x277)](_0x4d3210['GHHOR'](_0x13827a,_0x538a03),0x9*0x11+0x7*0x4e4+0x1*-0x22d5);return _0x4d3210[_0x31dd5a(0x32c)](_0x4d3210['GHHOR'](_0x13827a,_0x538a03),-0xe*-0xe9+-0x1a7d+0x11*0xde)!==0xc6b+0xbf1*0x3+0x1a*-0x1db?-0x9c1+-0x20f3+-0x1*-0x2ab5:-0x1946*0x1+0x1364+0x5e2;}function _0xe878b8(_0x2bf299,_0x3c515c,_0x4c8c5a){var _0x581000=_0x1b4785,_0x3f4a22=_0x47660f[_0x4c8c5a];if(!_0x3f4a22)return null;var _0x41ba92=_0x4d3210['nOSRv'](_0x28dbcb,_0x4d3210[_0x581000(0x919)](_0x4d3210['NRXoE'](_0x2bf299,_0x3c515c),_0x3f4a22[_0x581000(0x6df)]),'u8'),_0x5ba562=_0x28dbcb(_0x4d3210[_0x581000(0x789)](_0x2bf299,_0x3c515c)+_0x3f4a22['hidde'+'n'],_0x581000(0xc64)),_0x4c18a5=_0x4d3210['sugBh'](_0x28dbcb,_0x4d3210[_0x581000(0xae2)](_0x2bf299+_0x3c515c,_0x3f4a22['inite'+'d']),'u8'),_0x25d58=_0x28dbcb(_0x4d3210[_0x581000(0x686)](_0x2bf299+_0x3c515c,_0x3f4a22['fake']),_0x4c8c5a===_0x4d3210['XtwWX']?_0x4d3210[_0x581000(0xa24)]:_0x4c8c5a===_0x581000(0x4ab)?_0x4d3210['JiHks']:'u8'),_0x2a5ec5=_0x4d3210['JFAmq'](_0x28dbcb,_0x4d3210[_0x581000(0xa12)](_0x2bf299,_0x3c515c)+_0x3f4a22[_0x581000(0x3e5)+'e'],'u8');if(_0x41ba92===undefined||_0x4d3210[_0x581000(0xa3)](_0x5ba562,undefined)||_0x25d58===undefined||_0x4d3210[_0x581000(0x6db)](_0x2a5ec5,undefined))return null;_0x41ba92&=0x4fd+-0x24f0+0x20f2,_0x5ba562|=-0x5f1*0x3+0x1023+0x1b0,_0x4c18a5=(_0x4c18a5||-0x1*-0x18d9+0x3*0xacf+-0x3946)&-0x1777+-0xf35+-0x26ad*-0x1,_0x2a5ec5&=0xfb*-0x2+0x92b*-0x3+0x1d78;var _0x48a672;if(_0x4d3210['EqUWv'](_0x4c8c5a,_0x4d3210['XtwWX']))_0x48a672=_0x29f185(_0x5ba562^_0x41ba92);else{if(_0x4c8c5a===_0x4d3210[_0x581000(0x51a)])_0x48a672=_0x5ba562^_0x41ba92|-0x1a27+-0x1*0xdff+-0x6*-0x6b1;else _0x48a672=_0x4d3210[_0x581000(0x183)](_0x4d3210['wHZAv'](_0x4d3210[_0x581000(0xaaf)](_0x5ba562,_0x41ba92),-0x1*-0x94f+-0x3*0x3b5+0x2cf),0x1fce*-0x1+-0x1*-0x2259+-0x1f*0x15)?0x25d*-0x5+-0x7c4+0x1396:-0x19b7+-0xb72+0x2529;}return{'real':_0x48a672,'fake':_0x25d58,'act':_0x2a5ec5,'init':_0x4c18a5,'key':_0x41ba92,'hidden':_0x5ba562};}function _0x1dc7ea(_0x4496c9,_0x4d5eb5,_0x4f91a0,_0x3cefec){var _0x390186=_0x1b4785,_0x1737fa=_0x47660f[_0x4f91a0],_0x14e124=_0x4d3210['esrpR'](_0x176c45,_0x4496c9,_0x4d5eb5,_0x1737fa['size']);if(!_0x14e124)return![];var _0x247043=new DataView(_0x14e124['buffe'+'r'],_0x14e124[_0x390186(0xaeb)+'ffset'],_0x14e124['byteL'+_0x390186(0x184)]),_0x27857b=_0x4d3210['XKejC'](_0x1737fa['keyTy'+'pe'],'u8')?_0x247043['getUi'+_0x390186(0x561)](_0x1737fa[_0x390186(0x6df)]):_0x247043['getIn'+_0x390186(0x645)](_0x1737fa[_0x390186(0x6df)],!![]),_0x2eb5f5;if(_0x4f91a0===_0x390186(0x14c))_0x2eb5f5=_0x57e76c(_0x3cefec);else{if(_0x4f91a0==='obfI')_0x2eb5f5=_0x3cefec|0x225e+-0x1327*-0x2+-0x48ac;else _0x2eb5f5=(_0x3cefec?-0x2114+-0x2b*-0xac+-0x1d*-0x25:0xa6*0x5+0x1d3c+-0x207a)&0x1*-0x204d+0x1*0x1f19+0x233*0x1;}return _0x4d3210['esrpR'](_0x21949b,_0x4d3210['VuXqY'](_0x4496c9,_0x4d5eb5)+_0x1737fa[_0x390186(0xda)+'n'],_0x390186(0xc64),_0x4d3210['SLGmk'](_0x2eb5f5,_0x27857b))&&_0x21949b(_0x4d3210['eXCUq'](_0x4496c9+_0x4d5eb5,_0x1737fa['fake']),_0x4f91a0===_0x390186(0x14c)?_0x4d3210['QBqAS']:_0x4f91a0===_0x4d3210[_0x390186(0x51a)]?'i32':'u8',_0x4d3210[_0x390186(0xa3)](_0x4f91a0,_0x4d3210[_0x390186(0x7f3)])?_0x3cefec:_0x4f91a0==='obfI'?_0x4d3210[_0x390186(0x77a)](_0x3cefec,0x1*-0x25f3+0x23a2+0x251):_0x3cefec?0x685+0x4dd+0x1*-0xb61:0x1b2a+0x682+-0x21ac)&&_0x4d3210['hMBPL'](_0x21949b,_0x4d3210['Ugldo'](_0x4496c9,_0x4d5eb5)+_0x1737fa['activ'+'e'],'u8',-0x71*0x1d+0x1c9*0x4+0x5a9);}var _0xde72d1={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0x48cc2a=-0xead+-0x2*0xe57+0x2b5b+0.03,_0x3c5e09=-0x1627+0x3*0xaac+-0x9db,_0x5d4b2c={},_0x2289af=-0x1b6+0x34*0x26+-0x602,_0x18ed02=[],_0x1f3553=[];function _0x18c41f(_0x1554d2){var _0x2bbc02=_0x1b4785,_0x37d429={'GxeiR':function(_0x14dffd,_0x382b91){return _0x14dffd===_0x382b91;}},_0x1c5283=_0x5a6a9c['FPSco'+_0x2bbc02(0x4a2)+_0x2bbc02(0x6ff)]||[],_0x5d291c=[];_0x1f3553=[],_0x18ed02=[];for(var _0x6ee962=0xe94+-0x1d*0x43+-0x6fd*0x1;_0x6ee962<_0x1c5283[_0x2bbc02(0x17c)+'h'];_0x6ee962++){if(_0x2bbc02(0x8a3)!==_0x2bbc02(0x398)){var _0x41dd23=_0x1c5283[_0x6ee962][-0xa*-0x38b+-0xcec+0x43*-0x56];if(_0x1c5283[_0x6ee962][-0x1*-0x4b3+-0xb0f+-0x9*-0xb5]!==_0x2bbc02(0x14c))continue;var _0x3969a3=_0x4e69d3(_0x1554d2,_0x41dd23,_0x2bbc02(0x14c));if(!_0x3969a3||_0x3969a3[_0x2bbc02(0x50d)+'d']!==-0x2203*-0x1+0x1d91+-0x15*0x307)continue;var _0x36cc46=_0x4d3210[_0x2bbc02(0x30a)](_0x471594,_0x2bbc02(0x14c),_0x3969a3['hidde'+'n'],_0x3969a3[_0x2bbc02(0x6ed)+_0x2bbc02(0x7d6)+'t0']);if(typeof _0x36cc46!=='numbe'+'r'||!_0x4d3210['eOUVO'](isFinite,_0x36cc46))continue;var _0x446217=_0x1554d2+':'+_0x41dd23,_0x4a2e57=_0x5d4b2c[_0x446217];if(!_0x4a2e57||_0x36cc46!==_0x4a2e57[_0x2bbc02(0x419)+'ritte'+'n'])_0x4a2e57=_0x5d4b2c[_0x446217]={'base':_0x36cc46,'lastWritten':null};var _0x34fd5b=_0x4a2e57['base'],_0x2f7031=Math[_0x2bbc02(0xa5a)](_0x34fd5b);if(_0x2f7031<0x973+-0xde8*0x1+-0x7*-0xa3+0.0001||_0x4d3210[_0x2bbc02(0x4ed)](_0x2f7031,0x1d737+-0xd058*-0x1+-0x120ef)){_0x1f3553[_0x2bbc02(0x558)]({'o':_0x41dd23,'v':_0x36cc46,'why':_0x4d3210[_0x2bbc02(0x8df)]});continue;}_0x5d291c[_0x2bbc02(0x558)]({'o':_0x41dd23,'v':_0x36cc46,'a':_0x2f7031,'base':_0x34fd5b,'key':_0x446217,'st':_0x4a2e57});}else{var _0x522254=_0x4d3210[_0x2bbc02(0x344)](_0x32c922);if(_0x522254&&_0x522254[_0x2bbc02(0x568)+'e']&&_0x522254[_0x2bbc02(0x568)+'e']['HEAPU'+'8']&&_0x522254[_0x2bbc02(0x568)+'e']['HEAPU'+'8'][_0x2bbc02(0x816)+'r'])return _0x522254['Modul'+'e'][_0x2bbc02(0x581)+'8'];}}var _0x1152fa=[];for(var _0xd42d12=0x20f6*-0x1+-0x2619+0x470f;_0xd42d12<_0x5d291c[_0x2bbc02(0x17c)+'h'];_0xd42d12++){var _0x68909f=_0x5d291c[_0xd42d12]['a'],_0x4c1a07=null;for(var _0x460f44=0x203a+0x2*0x237+-0x44*0x8a;_0x460f44<_0x1152fa['lengt'+'h'];_0x460f44++){var _0x422bb7=_0x1152fa[_0x460f44][_0x2bbc02(0x13d)]/_0x68909f;if(_0x422bb7>_0x4d3210[_0x2bbc02(0x8ba)](-0x22*-0x107+0x1*0x1576+-0xb47*0x5,_0x48cc2a)&&_0x422bb7<_0x4d3210[_0x2bbc02(0x994)](-0x2266+-0x20a0+0x4307*0x1,_0x48cc2a)){_0x4c1a07=_0x1152fa[_0x460f44];break;}}!_0x4c1a07&&(_0x4c1a07={'mean':_0x68909f,'members':[]},_0x1152fa['push'](_0x4c1a07));_0x4c1a07['membe'+'rs'][_0x2bbc02(0x558)](_0x5d291c[_0xd42d12]),_0x4c1a07['mean']=0x1bf2+-0x491*0x1+0xab*-0x23;for(var _0x1181ca=-0x5*0x5d2+0x92*0x8+-0x15d*-0x12;_0x1181ca<_0x4c1a07['membe'+'rs']['lengt'+'h'];_0x1181ca++)_0x4c1a07['mean']+=_0x4c1a07['membe'+'rs'][_0x1181ca]['a'];_0x4c1a07[_0x2bbc02(0x13d)]/=_0x4c1a07[_0x2bbc02(0xc37)+'rs']['lengt'+'h'];}var _0x56fe92=[];for(var _0x229180=-0x6a7+-0x240a*-0x1+-0x1d63;_0x229180<_0x1152fa[_0x2bbc02(0x17c)+'h'];_0x229180++){if(_0x4d3210['ZCOhh']('eGnTC',_0x2bbc02(0x50e)))try{return _0x37d429[_0x2bbc02(0x38c)](_0x4be4e9['getIt'+'em'](_0x88cf73),'1');}catch(_0x559ddb){return![];}else{if(_0x4d3210['PvTKz'](_0x1152fa[_0x229180]['membe'+'rs'][_0x2bbc02(0x17c)+'h'],_0x3c5e09))_0x56fe92['push'](_0x1152fa[_0x229180]);}}if(!_0x56fe92[_0x2bbc02(0x17c)+'h']){_0x1f3553[_0x2bbc02(0x558)]({'o':-(0x1*0x1b13+-0x7*0x2cd+-0x777*0x1),'v':0x0,'why':'no\x20gr'+_0x2bbc02(0x9eb)+'f\x20'+_0x3c5e09+(_0x2bbc02(0x9c)+_0x2bbc02(0x440)+'loats'+_0x2bbc02(0x618)+'ed')});return;}var _0x1ac19a=_0x56fe92[-0x5*-0x411+-0x6d2+-0xd83*0x1][_0x2bbc02(0x13d)];for(var _0x220267=0x786+-0x1*-0x1127+-0x18ad;_0x220267<_0x56fe92['lengt'+'h'];_0x220267++)if(_0x56fe92[_0x220267][_0x2bbc02(0x13d)]<_0x1ac19a)_0x1ac19a=_0x56fe92[_0x220267][_0x2bbc02(0x13d)];var _0x425912=_0x1ac19a*(-0x2064+0x123*0x12+0xbee+0.5);for(var _0xa4155c=-0x8cb*0x1+-0x12cf+0x1b9a;_0xa4155c<_0x1152fa[_0x2bbc02(0x17c)+'h'];_0xa4155c++){if(_0x4d3210[_0x2bbc02(0xc2b)](_0x1152fa[_0xa4155c][_0x2bbc02(0xc37)+'rs']['lengt'+'h'],_0x3c5e09))continue;for(var _0x16e052=0x3fa+-0x1491+0x1f*0x89;_0x16e052<_0x1152fa[_0xa4155c][_0x2bbc02(0xc37)+'rs'][_0x2bbc02(0x17c)+'h'];_0x16e052++){_0x1f3553[_0x2bbc02(0x558)]({'o':_0x1152fa[_0xa4155c][_0x2bbc02(0xc37)+'rs'][_0x16e052]['o'],'v':_0x1152fa[_0xa4155c]['membe'+'rs'][_0x16e052]['v'],'why':_0x4d3210['rDzZm']});}}for(var _0x362d1c=0x691+0x4*-0x1a8+0x1*0xf;_0x362d1c<_0x56fe92[_0x2bbc02(0x17c)+'h'];_0x362d1c++){var _0x2ec277=_0x56fe92[_0x362d1c][_0x2bbc02(0xc37)+'rs'];for(var _0x50ec60=-0xa6*0x1+0x26*-0x59+0x2*0x6ee;_0x4d3210[_0x2bbc02(0x5b6)](_0x50ec60,_0x2ec277[_0x2bbc02(0x17c)+'h']);_0x50ec60++){var _0x527f19=_0x2ec277[_0x50ec60];if(_0x527f19['a']<_0x425912){_0x1f3553[_0x2bbc02(0x558)]({'o':_0x527f19['o'],'v':_0x527f19['v'],'why':'below'+_0x2bbc02(0x4fc)+'r\x20'+_0x425912[_0x2bbc02(0x657)+'ed'](-0xd8*-0x4+0xdc3+-0x1121)});continue;}var _0x295b97=_0x527f19['base']*_0xde72d1[_0x2bbc02(0x85d)+'r'];_0x1dc7ea(_0x1554d2,_0x527f19['o'],_0x2bbc02(0x14c),_0x295b97)&&(_0x527f19['st'][_0x2bbc02(0x419)+'ritte'+'n']=Math[_0x2bbc02(0x4f0)+'d'](_0x295b97),_0x2289af++,_0x18ed02['push']('0x'+_0x527f19['o']['toStr'+_0x2bbc02(0x12e)](0x1f0d*-0x1+-0x53*-0x29+0x11d2)));}}}var _0x5a6a9c={'FPScontroller':[[-0x2*0x51b+-0x91c+0x1362,'obfF'],[-0x68d+-0x2c*0x48+0x1315,'obfF'],[0x236f+0x1*-0x11f4+-0x113b,'obfF'],[0x2*-0xd1+-0x226b+0x2465,_0x4d3210['XtwWX']],[0x534+-0x9b3+0x4ef*0x1,_0x1b4785(0x14c)],[0x2c4*-0x8+-0x218c+0x3834,'obfF'],[-0x1*-0x21c+-0x1924+0x17a8,_0x4d3210[_0x1b4785(0x7f3)]],[0x200c+-0xbea+0x136a*-0x1,_0x1b4785(0x9fc)],[0x15f7+-0x8b5+-0x215*0x6,_0x4d3210[_0x1b4785(0x7f3)]],[-0x6*-0x2c7+-0x2*0x32d+-0xb*0xdc,'i32'],[-0x6ab*0x3+-0x1*0x163f+0x1cc*0x18,'v3'],[0x3*-0x6d1+-0xe6c+0x77*0x4d,'u8'],[0x163*-0x2+0x1*0xec9+0x3b1*-0x3,'obfF'],[0x26f9+0x1*-0x120d+-0x13e4*0x1,'i32'],[-0xb77+0xafd*0x1+0x186,'u8'],[-0x2*0xb33+-0xc1a*0x1+0x2390,_0x1b4785(0xc64)],[-0x2f*0x57+0x1377+-0x1*0x26a,'u8'],[-0xe70+-0x2540+0x34c5,'u8'],[-0xa9e*-0x1+0x899*0x1+-0x39f*0x5,_0x4d3210[_0x1b4785(0x7f3)]],[0x1b5*-0x2+-0x1999*-0x1+0x83*-0x29,_0x4d3210[_0x1b4785(0x7f3)]],[-0x1*0x7fd+0x1b16+-0x11cd,'f32'],[0x21af*0x1+0xf*0xb9+-0x1*0x2b36,'f32'],[0x1*-0x1d96+0x50*-0x22+-0x298a*-0x1,'v3'],[-0xe*-0x2ba+-0x7e9+-0x1ce3,'v3'],[-0x93f+-0x3b5+0x730*0x2,_0x1b4785(0xd4)],[0x160f+-0x1*-0x16e5+-0x2b84,_0x4d3210[_0x1b4785(0xa24)]],[0x1bd1+-0x55f+0x14ea*-0x1,'u8'],[0xdf*0x20+0x19c+-0x10*0x1bf,_0x4d3210['QBqAS']],[0x8*-0x2a6+0x93*0x2a+0xab*-0x2,'v3'],[-0x17d*-0x11+-0x16*-0x86+-0x232d,'u8'],[0x205*0xe+-0x1b42+0xb0,_0x1b4785(0xd4)],[-0x2+-0x22fc+-0x4a*-0x7f,_0x1b4785(0xd4)],[-0x1f*0xe3+0x129+-0x1c1*-0x10,'u8'],[-0x12ff*0x1+-0x1abb*0x1+0x2f77*0x1,'u8'],[-0x9d0+-0x39f*0x1+-0xa9*-0x17,_0x4d3210['XtwWX']],[0x2*-0x1169+-0x184c+0x3cf6,'f32'],[0x5ad*0x2+0x8*0x1cb+-0x17d6,'u8'],[-0x110f*0x2+0x538+0x1ec6,_0x1b4785(0x14c)],[-0x1e55+-0x1758+0x37a5,'v3'],[0x1*0xe52+0x1a61+0x209*-0x13,_0x4d3210['zXkrj']],[-0x14c9+0x12c4+-0xd*-0x51,_0x4d3210['QBqAS']],[0x2*0x2d9+0x21d3*-0x1+-0x1*-0x1e3d,'f32'],[0x118a+-0x1624+0x6e6,'f32'],[0x76*-0x7+-0x2272+0x27fc,_0x1b4785(0xd4)],[0x1*0x86d+-0x1391+0xd78,_0x1b4785(0xd4)],[-0x1e18+0x2*0xd2d+-0x2*-0x30b,_0x1b4785(0xd4)],[0x2025+0x2493+0x1*-0x425c,'u8'],[0x9db+-0x64*-0x53+-0x27ea,'u8'],[-0x14c4+0x277*0x5+0xacf,'u8'],[0x1235+0x1998+-0x1f9*0x15,_0x4d3210['QBqAS']],[0x17ea+0xf07+-0xc2f*0x3,'u8'],[0x3*0x425+0x11*0xed+-0x19c7*0x1,'u8'],[0x681+0x17*-0x156+0x1aa1,'f32'],[0x1*0x17c5+0x1abb+-0x3014,_0x1b4785(0xd4)],[-0x10dd+0x2c6*0x2+-0x1*-0xdc1,_0x4d3210['QBqAS']],[0x1d7d+0x18f4+-0x33fd,'f32'],[0x581+0xab6+-0xdbf,_0x4d3210['QBqAS']],[-0x33*-0x4a+-0x2dc*0x4+-0x2a*0x5,'f32'],[0x9cd*-0x3+-0x276+0x225d*0x1,_0x1b4785(0xd4)],[-0xdf+0x662+0x1*-0x2ff,'v3'],[0xd15+0x1860+-0x22e1,'u8'],[-0x84*-0x9+0x2*-0x1200+0x10fa*0x2,'v3'],[-0x4e9+0x2b*-0x35+0x27*0x6c,_0x1b4785(0xd4)],[0x20f7+0x1422+-0x326d,'v3'],[0xf10+0x131*-0xd+-0x5*-0xa1,'f32'],[-0x28e+-0x233f+0x2889,_0x4d3210['QBqAS']],[-0x1*0x1ce2+-0x178d*0x1+0x372f,_0x4d3210['QBqAS']],[-0x243*0x3+-0xd03+0x1690,'u8'],[0x1d3b+0x89*0x12+-0x2418,'u8'],[0x45f+-0x4*-0x58f+-0x17d3,_0x1b4785(0xd4)],[-0x1da3+0x122f+0xe50,'f32'],[-0x2642+-0x113*0xd+0x1*0x371d,'v3'],[-0xe2*0x1d+-0x1c*-0x83+0xe36,'v3'],[0x3c7*0x1+0x1716+-0x1*0x17e1,_0x1b4785(0xd4)],[0xa08+-0x92c*0x2+0x4*0x2d4,_0x1b4785(0xd4)],[0x0+0x15e2+-0x12de,_0x4d3210[_0x1b4785(0xa24)]],[-0x1f6*-0x1+0x17b*-0x5+0x879,_0x1b4785(0xd4)],[0x17f*0x4+-0x943*0x1+0x653,'v3'],[-0x122+0x1600+-0x11c6,'u8'],[0xf88+-0x1f63*-0x1+-0x5*0x8c3,'v3'],[0x1954+0x1463+-0x2a8f,_0x1b4785(0xc64)],[0xa21*0x2+0x7*0x536+-0x3590,_0x1b4785(0xd4)],[-0x4eb+-0x1*-0x48b+0x390,_0x1b4785(0xd4)],[0x1fd2+-0x6d6+-0x15c8,_0x1b4785(0xd4)],[-0x212b*-0x1+0x4b*0x47+-0x32bc,_0x4d3210[_0x1b4785(0xa24)]],[-0x14a8+0x1c3+0x1625,'u8'],[-0xb11*0x2+0x37e+0x127*0x13,'u8'],[0x1*-0x1350+-0xfc7+0x2663,'u8'],[0x159b+-0x4*-0xad+-0x1502*0x1,'u8'],[0x1ab+-0x1c96+0x1e39,'u8'],[-0x1e3e+-0x2113*0x1+0x42a1,_0x1b4785(0xd4)],[-0x33f+-0x3*0x73c+0x39*0x7f,_0x1b4785(0xd4)],[0x4*0x7b2+0x14*0xdd+-0x2cb4,_0x1b4785(0xd4)],[-0x658+0x1ad0+-0x88e*0x2,'f32'],[0x2*0x6d+-0x582*0x5+0x1e10,_0x4d3210['QBqAS']],[-0x3*0x977+-0x26ef+0x11ae*0x4,'u8'],[-0x4b0+-0x1a54+0x226c,'f32'],[-0x2ac*0xe+0x1*-0x3bb+0xbb*0x3d,_0x4d3210[_0x1b4785(0xa24)]],[-0x265f+0x1b0d+0x1*0xec2,'u8'],[0xa6*-0xe+-0x22f2+0x2f7e*0x1,'v3'],[0x1f9e+-0x2*-0x88c+-0x2d32,'v3'],[0x1*0x261+-0x2*0xb3f+0xb*0x227,'v3'],[0x13c+-0x1a*-0xce+-0x4a3*0x4,_0x4d3210['QBqAS']],[-0x1df0+0x2602*-0x1+0x4792,_0x4d3210[_0x1b4785(0xa24)]],[-0x9ec+-0x5*0x14f+0x141b,_0x4d3210['QBqAS']],[-0x1*-0x1d42+0x1*0x17b6+-0x3150,'v3'],[-0x7f*0x25+-0xf5*0x13+0x283e,_0x4d3210[_0x1b4785(0x70e)]],[-0x1123+-0x13df+0x28ba,'u8'],[-0x7f*0x3f+-0x1e79+-0x126*-0x39,_0x1b4785(0xc64)],[0x825*0x1+-0x3*0x8e3+0x1644,_0x4d3210[_0x1b4785(0xa24)]],[0x2c5*0x1+-0xa1*-0x1d+-0x113e,_0x4d3210[_0x1b4785(0xa24)]],[0x537+0x1d4d+-0x2*0xf5e,_0x4d3210[_0x1b4785(0xa24)]],[0x1f*0x6b+0x9*-0x179+-0x1*-0x418,_0x4d3210[_0x1b4785(0xa24)]],[0x40d*0x1+-0x826+0x7e9,'v3'],[-0x14a0+0x1737+0x145,_0x1b4785(0xc64)],[-0x9c4+-0x88a*0x2+0x1eb8,'u8'],[-0x1a*-0x13e+0x35b+-0x1fc6,'u8'],[0x23ac+-0x242*0xd+-0x270,'u8'],[0x4*0x34c+0x63c+-0x1*0xf88,'f32'],[0x45a+-0xfb3*0x1+-0x163*-0xb,_0x1b4785(0xc64)]],'HealthScript':[[0x1c05+-0xc*-0x283+0x169*-0x29,'u8'],[-0x228d+-0x1*-0x701+0x26*0xbc,_0x4d3210['JiHks']],[-0x724*0x1+0x575*0x5+-0x13a5,'f32'],[-0xaa5+-0x4d0+0xff9,_0x1b4785(0xd4)],[-0x1597*-0x1+0x64b+-0x1b5a,_0x1b4785(0xd4)],[-0x33*0x6c+-0x13*-0x104+0x2c4,_0x4d3210[_0x1b4785(0xa24)]],[0x13*0xb+0x133+0x2*-0xba,_0x4d3210[_0x1b4785(0xa24)]],[-0x5bb+-0x20fc+0x274b,_0x1b4785(0xd4)],[0x1afd+0x73*0x5+-0x1c9c,_0x1b4785(0xc64)],[0x1d5e+-0x581*-0x2+-0x13de*0x2,_0x4d3210[_0x1b4785(0x70e)]],[-0x1b00+0x1829*-0x1+0x23*0x17b,'u8'],[0x180a+0x843*0x2+-0x1*0x27e7,'u8'],[0x1e2e+0x1*0x1da2+-0x3b26,'u8'],[0x653+0xea+0x2*-0x349,'u8'],[-0xd92*-0x1+-0x2398+0x16c6,_0x1b4785(0x4ab)],[-0x17c0+-0x1d4c+0x20*0x1af,'obfI'],[0x23a0+0x599*-0x1+-0x163*0x15,_0x4d3210['WLDIV']],[-0x2aa+-0xc8e+0x7a*0x22,'obfI'],[-0x151*-0x3+-0x1*0xf4f+-0x3*-0x424,_0x1b4785(0x4ab)],[-0x16a2*-0x1+0xc6d+-0x21eb,_0x1b4785(0x9fc)],[0x1f62*-0x1+-0x5ee*-0x1+-0x26c*-0xb,'obfF'],[-0x1*0x1c3f+0x1c03+0x184,_0x1b4785(0xd4)],[0x1c1c*-0x1+0xf24+0xe44,_0x4d3210['QBqAS']],[0xc6f*0x1+0x625+-0x8a2*0x2,_0x1b4785(0xd4)],[0x2*0x473+0x204+-0x2*0x4cb,_0x4d3210['QBqAS']],[-0xe0*0x1a+-0x1345*0x2+-0x1e6*-0x21,_0x4d3210['QBqAS']],[-0xea4+-0x1e7*0x11+0x305b,'v3'],[0x7c4*0x3+0x1f*0x35+0x96d*-0x3,'f32'],[-0x239c+0x8*0x2ff+0x4*0x347,_0x1b4785(0xd4)],[-0x1c14+0xd65+0x102f,'u8'],[0xa8*0x26+0x6cc+-0x1e30,'u8'],[0x98*-0x17+-0x893+0x17cb,'i32']],'PlayerConfig':[],'WeaponManager':[[0xd1b+0x113*-0x15+0x98c,'i32'],[0x74a+0x979*-0x1+0x24b,_0x1b4785(0xc64)],[0x1e7*0x13+-0x1a2*0xf+-0xe3*0xd,'u8'],[0x66a*0x4+0x2577*-0x1+0xa1*0x13,_0x1b4785(0xc64)],[-0x235b+0x3*-0x9f5+-0xe3*-0x4a,_0x4d3210[_0x1b4785(0x7f3)]],[-0x2042+0x14e2+-0x3f4*-0x3,_0x1b4785(0xd4)],[-0x397+0xe69+-0xa4e,_0x1b4785(0xc64)],[0x1e3c+-0x325*-0x3+-0x2723,'u8'],[-0x9*0x194+0xbd*-0x1+0xe*0x11b,'u8'],[-0x1*0x1f4e+0x473+0x1b67,_0x1b4785(0xc64)],[0x9fe+0x1bbe+-0x252c,_0x1b4785(0xd4)],[-0x20*-0x95+0x2*-0x80b+-0x1f2,_0x4d3210[_0x1b4785(0xa24)]],[0x162e*-0x1+-0x6da*0x1+0x1db4,_0x1b4785(0xc64)],[-0x2*-0xe27+0x1b*0x4c+-0x2396,'u8'],[-0xa6*0x21+0x1*0x59c+0x10a6,_0x1b4785(0x4ab)],[-0x18fd*-0x1+0x3*0xafb+-0x38fe,_0x1b4785(0x4ab)],[0x1250+0x1238+-0x2384,_0x4d3210[_0x1b4785(0xa24)]],[-0x153a+-0x233b*0x1+0x397d,'f32'],[-0x1e*0x59+0x1*-0x1d9b+0xd*0x329,'f32'],[0xd*-0x8a+-0xcd4*0x3+0x2e96,_0x4d3210[_0x1b4785(0xa24)]],[0x48*0xd+0x15b7*-0x1+0x132f,_0x4d3210[_0x1b4785(0xa24)]],[-0x10b8+0x28*0x33+-0x1*-0x9e8,'u8'],[-0x4*0x4cc+-0x10b7+0x2513*0x1,_0x4d3210[_0x1b4785(0x51a)]],[-0xe4e*0x1+0xbf*-0x17+0x19*0x14f,_0x1b4785(0x4ab)],[-0x256*-0xd+0x1951*0x1+-0x4f1*0xb,'obfI'],[0x1cf9*0x1+0x2252+-0x1*0x3de3,_0x4d3210[_0x1b4785(0x21e)]],[-0x2264+-0x9*-0x12+-0x2336*-0x1,_0x4d3210['zXkrj']],[-0x1086+-0xa*-0x1f3+-0x178,_0x4d3210[_0x1b4785(0x21e)]],[-0x166+-0xc6d*-0x1+-0x97b,'obfB'],[0x329*-0x7+0x24c8+-0xd05,_0x4d3210[_0x1b4785(0x21e)]],[0x109*-0x1a+0x1*-0x551+0x21eb,_0x4d3210[_0x1b4785(0x51a)]],[0x26*-0xa3+0x1*-0xb3a+-0x4*-0x94e,_0x1b4785(0xc64)],[-0x172+0x1*0x1da1+-0x2b*0x9d,'u8'],[-0x139a+-0xe20+0x238e,_0x1b4785(0xc64)],[0x155b+-0xaf*-0x33+0x244*-0x18,'i32'],[0x1510+-0x24eb+-0x11db*-0x1,_0x4d3210['JiHks']],[-0x2121+0x745+0x1bf0,'u8'],[-0x1feb+-0x1c83+0x3e8a,'u8'],[-0x12c5+0x2*-0x3fa+0x1*0x1cd6,'u8'],[-0x2*0x6d+0x259f*0x1+-0x22a7,'u8'],[0xb*-0x327+0x1*0x17a+0x2*0x11a9,'u8'],[0x5d+-0x19ac+0x1b9f,_0x1b4785(0xc64)],[-0x1*-0x1d57+0x2*-0xd1c+-0xc7*0x1,'u8']],'GG_GameManager':[[0xefa+-0x2460+0x397*0x6,'u8'],[-0x1*-0x10db+-0x1*-0x26a8+-0x3757,'f32'],[-0x230e+0x132a+0x814*0x2,'u8'],[-0x2360+-0x1193*0x1+0x3538,'u8'],[0x1*0x1428+0x2006+-0xe*0x3b5,_0x4d3210[_0x1b4785(0xa24)]],[0x81*0x7+-0x2441*-0x1+-0x277c,_0x1b4785(0xd4)],[0xeb7*0x2+-0x97b*-0x2+-0x3014,_0x4d3210[_0x1b4785(0x70e)]],[0xd6c+-0xd70+0x58,_0x1b4785(0xc64)],[0x13ca+-0x14d7+0x165,'u8'],[-0xda*0x2d+-0x470+-0x159b*-0x2,'u8'],[-0x21b0+0xd7b+0x14ad,_0x1b4785(0xd4)],[-0x43*-0x5+-0xac2+0x9ef,'f32'],[0x15f4+0x685*-0x3+-0x1*0x1d5,'i32'],[-0xeff*0x2+-0x871*-0x2+0xdb0,'u8'],[0x862+0x3*0x348+-0x1186,_0x1b4785(0xc64)],[-0x2*-0xafb+0x23ec+0x16*-0x299,_0x1b4785(0xc64)],[0xc1+-0x1040+0x103f,_0x4d3210[_0x1b4785(0x70e)]],[-0x19dc+0x1e56*0x1+-0x392,_0x4d3210['WLDIV']],[-0x1*-0x187f+0x1*-0x1bac+0x429,_0x1b4785(0x4ab)],[-0x1*0x33d+-0x1c51*-0x1+-0x1804,'obfI'],[0x10*-0x1c9+0x1b+-0x29*-0xb9,'u8'],[-0x564+-0xe6d*0x1+-0x1501*-0x1,'i32'],[0x1*-0x4fd+-0x2*0x1240+0x2ae1,'u8'],[-0x258f+-0x11a4+-0x1*-0x38a3,_0x4d3210[_0x1b4785(0xa24)]],[0x2e*-0x1+0x204+-0x56,'u8'],[0xc4b+0x38+-0xafb*0x1,'u8'],[0xb*-0xf+-0x335*0xa+-0x1*-0x225b,'u8'],[-0x134d+-0x13fc+0x28f1*0x1,_0x4d3210['JiHks']],[-0x1b05+0x1aa1*0x1+0x210,_0x1b4785(0xd4)],[0x11a9*0x2+-0x150b*0x1+0x1*-0xc97,'u8'],[0x862+0x1f38+-0x25e9,'u8'],[-0x7f4+-0x1a0b+0xdf*0x29,'i32'],[0xb*-0x1b5+-0x2*-0x137c+-0x627*0x3,_0x4d3210['JiHks']],[0x221f+-0x1477+0x6*-0x1fc,_0x1b4785(0xd4)],[0x1dd6*-0x1+-0x1*0xacd+0x2a67,_0x4d3210[_0x1b4785(0x70e)]],[0x239+0x1022+0x1093*-0x1,_0x4d3210[_0x1b4785(0xa24)]],[0x4*-0x9c+0x656+-0x21a,_0x4d3210[_0x1b4785(0x70e)]],[-0xe0+0x1*-0x1f0f+-0x1*-0x21bf,'i32']],'TDM_GameManager':[[-0x1f5b+0x2*-0x9cc+0x330b,'u8'],[-0xb9b*-0x3+0x1*-0x148e+-0xe23,'u8'],[-0x3*0x461+0x1*-0x1986+0x26ca,'u8'],[0x741*-0x5+-0x6*0x1a5+-0xb*-0x435,_0x1b4785(0xd4)],[0x341*0x3+-0x5fc*0x2+0x28d,'u8'],[-0x181d*0x1+0x1fb2+-0x739,_0x1b4785(0xd4)],[-0x692+0x1a10+0x98f*-0x2,_0x4d3210['QBqAS']],[0x2dd*0x2+-0x10d1+0x1*0xb7b,_0x4d3210[_0x1b4785(0x70e)]],[0x1ab*-0x6+-0x2694+0x2*0x187f,_0x1b4785(0xc64)],[0x20d5+0x76b*-0x1+-0x18fe,'u8'],[-0x2c*-0x71+0x1*-0x19bd+-0x2*-0x35f,'u8'],[0x1139+0x10ac*0x1+-0xb27*0x3,_0x1b4785(0xd4)],[-0x17f*-0x1+-0x1*0x907+0x7fc,_0x1b4785(0xd4)],[0xeaa+0x1a18+-0x284a,_0x1b4785(0xc64)],[0x3ff+-0x22d2*-0x1+0x61*-0x65,'u8'],[-0x22a4+0x12dc*0x1+0x1058,_0x1b4785(0x4ab)],[0x115*-0x1e+-0x13*-0x1f1+-0x395,'obfI'],[-0x24e+-0x257c+0x486*0x9,'obfI'],[-0x195*0x9+-0xd9b+0xd*0x238,'obfI'],[-0x261e+0x1fca+0x768,'u8'],[0x1a25+0x1191+0x152d*-0x2,'u8'],[0x1*-0x1e67+-0x20f7+0x40be,_0x4d3210[_0x1b4785(0x70e)]],[-0x1*-0xa68+-0xa35*0x1+0x139,'u8'],[-0x25d7+0xa9d+0x1cbe,'u8'],[-0x4*0x6bb+0x730+0x551*0x4,_0x4d3210[_0x1b4785(0xa24)]],[0x23af+0x902+-0x2b25,_0x4d3210['JiHks']],[-0xb9c*-0x3+-0x21ca+0x86,_0x4d3210[_0x1b4785(0x70e)]],[0x3e*0x9+0x195b*-0x1+-0x1*-0x18c1,_0x4d3210['QBqAS']],[-0x1*0x133+-0x631+-0x2*-0x47e,_0x1b4785(0xc64)],[-0x1dd8+0x10e6+0xe8e,_0x4d3210[_0x1b4785(0x70e)]],[0x25a0+0x1616+-0x3a16*0x1,'f32'],[-0x1*-0x12f0+-0xa09+-0xb*0xa9,_0x4d3210['QBqAS']],[0x2145+0x4d0*0x3+-0x2e0d*0x1,_0x4d3210['JiHks']],[-0x1c9*-0xa+0x174+-0x119e,'u8'],[-0x12e*-0x3+0x75e+0x1*-0x937,'u8'],[0x80*-0x2e+0xeb0+0xa08,'f32']],'PhotonNetworkSync':[[-0x2*0xe83+0x51*0x3+-0x96d*-0x3,'v3'],[-0x1*-0x211+-0xd08+0x21*0x57,_0x4d3210[_0x1b4785(0x70e)]],[0x27e+-0x17*0x26+0x130,'u8'],[-0x33f*0x7+0x1f4b+-0x84d*0x1,'u8'],[-0x22b4+0x1f6*-0x3+0x146f*0x2,'v3'],[0x1646+-0x2342+0x8*0x1aa,'u8'],[-0xfc3+-0x13e*0x13+0x217*0x13,_0x1b4785(0xc64)],[-0x5aa+-0x8e5+0x13*0xc9,_0x4d3210['JiHks']],[0x1820+-0x74a+-0x1076,_0x4d3210[_0x1b4785(0xa24)]],[-0x253f+0x23c8+0x13*0x19,_0x1b4785(0xd4)],[0x8d2+0x80c+-0x1076,'f32'],[-0x61f*-0x3+0x338+0x1*-0x1529,'v3'],[0x7*0x254+-0x18fc+0x928,'f32'],[-0x14dd+-0x22d4+0x382d,_0x1b4785(0xd4)],[0x1672+-0x2132+0xb40,_0x1b4785(0xc64)],[-0x232d+0x19bc+-0x45*-0x25,'f32']],'MouseLook':[[-0x2590+-0x97b*-0x3+0x933,'f32'],[-0x3*0x61f+0x1545+0x8*-0x5a,_0x1b4785(0xd4)],[-0xfcf+0x952+0x699*0x1,_0x4d3210['QBqAS']],[-0xd*0x20b+0x8ef+0x11c0,_0x4d3210['QBqAS']],[-0xbe6+0xc36+-0xb*0x4,_0x1b4785(0xd4)],[0x3d6*-0x2+-0x1f*-0xb+0x67f*0x1,_0x4d3210['QBqAS']],[0x173+0x1*-0x1017+0x3b5*0x4,_0x1b4785(0xd4)],[0x1772*0x1+-0x1*-0x56+-0x1794,'u8'],[0x1dd7+-0x2045+0x2a6,_0x4d3210['QBqAS']],[0xc26*0x2+-0x1a*0xe5+-0x2*0x67,_0x4d3210['QBqAS']],[0x507+0x3a2+-0x869,'i32'],[-0x3d*-0x83+-0x19b0+-0x1c1*0x3,'u8'],[0xe89+-0x1ecb+0x1d*0x92,'v2']],'NetworkPlayerAnimations':[[-0x2617+0x1277+0x1448,'v3'],[0x153+-0x143a+0x3*0x689,'v3'],[-0xf21+-0xf48+0x1f29,'u8'],[0x2*0x9c8+0x4*-0x3f4+-0x2fc,_0x4d3210[_0x1b4785(0x70e)]],[0xb9*-0x1+0xaf7*-0x1+0xc78,_0x4d3210[_0x1b4785(0x70e)]],[-0x2068+-0x7c*0x1d+0x2f40,_0x4d3210['QBqAS']],[-0x2147*-0x1+-0x10*-0xd0+-0x2d77,_0x1b4785(0xd4)],[-0x13*0x208+-0x6f3*-0x2+-0x198e*-0x1,_0x4d3210[_0x1b4785(0xa24)]],[-0x1*0x29+0x1*-0x16a9+0x9*0x2a2,_0x4d3210['QBqAS']],[-0x230f+0x1*0x1c19+-0x2*-0x3ef,'f32'],[0x52*-0x3a+-0xdd9+-0x1*-0x2159,_0x1b4785(0xd4)],[-0x1*-0x23e9+0xbaa+-0x2ea3,_0x1b4785(0xd4)],[-0x145c+0xe88+0x6c8,_0x4d3210[_0x1b4785(0xa24)]],[0x117d*0x2+-0x2192+-0x38*0x2,'f32'],[0x1*0x2333+0x3*0xc03+-0x4640,_0x1b4785(0xd4)],[-0x1e41+0x1*-0x234a+0x428b,_0x4d3210[_0x1b4785(0xa24)]],[0x75d+-0x9*-0x3b+0x4*-0x21b,_0x4d3210[_0x1b4785(0xa24)]],[0x1a*-0x101+-0x7de*0x4+0x3a9a,_0x1b4785(0xc64)],[-0x2*-0x7e3+-0xf*0x205+0xf91,'u8'],[0x1367*-0x1+-0x4ce+0x1945,_0x1b4785(0xc64)],[0x3a5*0x5+0x5cb*-0x5+-0xbd2*-0x1,_0x1b4785(0xc64)],[-0x461+-0x430*0x4+-0x1*-0x1639,'u8'],[0xc31+0x1a*0x155+-0x2db7,_0x4d3210[_0x1b4785(0xa24)]],[-0x24*-0x4d+-0x31d*-0x5+0x1*-0x1945,_0x1b4785(0xd4)],[0x1194+-0xeaf+-0x1c1,_0x4d3210[_0x1b4785(0xa24)]],[-0x313*-0x1+0x98e*0x2+-0x1507,_0x4d3210['QBqAS']],[0x17d6+0x1*-0xf4+-0x15b6,'u8'],[0x133c+0x129+-0x132d,'u8'],[0x55*0x4c+-0x2605+0xe05,'v3'],[0x31b+-0x3*0x9ca+0x1b8b,'v3'],[-0x2143+0x67*-0x60+0x4977,'u8']],'NPC_Cotroller':[[-0x163b+0x2*-0xfb1+0x35b1,'v3'],[0x900+-0x5*-0x21e+-0x1376,_0x1b4785(0xd4)],[0x1506+0x1*-0x349+-0x1199,_0x4d3210['QBqAS']],[-0x3d4+-0x184a+0x1c74,'u8'],[0x7*-0x589+-0x105a+0x3770,'u8'],[0x92+0xef*-0x3+0x11*0x27,'v3'],[0x3c6*-0x7+0x565*-0x2+0x25d0,'u8'],[0x1*0x2544+0xd91+0x3235*-0x1,_0x4d3210['QBqAS']],[-0x2373+0x167d+0xd9a,_0x4d3210['QBqAS']],[-0x1fac+0x1824+0x840,_0x1b4785(0xd4)],[0xa17*0x2+-0xd*0x1c3+0x375,_0x1b4785(0xd4)],[-0x2c*0x53+0x7*-0x251+0x1f43*0x1,'u8'],[0xb11*0x3+-0x1*0x9d9+-0x168e,'f32'],[-0x5*-0x11a+-0x64*0x56+-0x1cee*-0x1,_0x4d3210['QBqAS']],[-0x5b*0x29+0x1f2d+-0xfbe,_0x1b4785(0xd4)],[0x1*0x12+0x1*-0x2457+-0x25*-0x101,_0x1b4785(0xd4)],[0x3a9+-0x2f6*-0xb+-0x2357,'u8'],[-0x2331+-0x2*-0xf7d+0x107*0x5,_0x1b4785(0xd4)],[0xeb*0x1d+-0x1cb*-0x15+-0x3f56,'v3'],[0x1*-0x18c7+0x1a3d+0x2*-0x3d,_0x1b4785(0xd4)],[0x1*-0x882+0x11ae+0x4*-0x20b,_0x1b4785(0xc64)],[-0x2397+0xdd7+-0x5b1*-0x4,'f32'],[0x2*0x1145+-0xf47*-0x1+-0xb5*0x45,_0x1b4785(0xd4)],[0x229*-0x7+0x1c26+-0xbfb,_0x4d3210[_0x1b4785(0xa24)]],[-0x11b3+0x11a0+-0x127*-0x1,'v3'],[0x14f1*-0x1+-0x5*-0x7bb+-0x182*0xb,_0x1b4785(0xd4)],[0x35c+0x1475+-0x16ad,_0x4d3210[_0x1b4785(0xa24)]],[0xc04+0x1219+0x1ce9*-0x1,'v3'],[0x7*-0x250+0x2267+0x1*-0x10f3,'u8'],[-0x6fd*-0x4+0x1fd2+-0x1*0x3a7e,_0x4d3210['QBqAS']],[-0x1*-0x122b+0xe10+-0x1eeb*0x1,'v3'],[0x1890+0x47*0x35+0x3*-0xca1,_0x4d3210['JiHks']],[-0x2573+0xec1+0x181e,_0x4d3210['JiHks']],[0x45b+0x81*-0x25+0xfba,_0x4d3210['QBqAS']],[-0x22f+-0x18b*0x3+0x844,'u8'],[-0x4*0x8b3+0x13d1+-0x1073*-0x1,'v4'],[-0x53*-0x41+-0x3*0xbdb+0x1006,_0x1b4785(0xd4)],[0x158a+0x204c+-0x344a,_0x4d3210[_0x1b4785(0xa24)]],[0x16ef+0x25d4+-0x3b33,_0x4d3210[_0x1b4785(0xa24)]],[0x9*-0x8e+-0x239*0xe+-0xfe*-0x26,'u8'],[-0xa*0x357+-0x1d7*0x3+0x288b,_0x4d3210['JiHks']]],'TargetHealth':[[0x1f88+-0x2cf*-0x8+-0x35f0,_0x1b4785(0xc64)],[0x24bc+0x2591+-0x4a39,'i32'],[-0xa82+-0x53c+-0x1a*-0x9d,'u8'],[-0x25a2+-0x250c+0x4af2*0x1,_0x4d3210[_0x1b4785(0x70e)]],[-0x7cf*0x1+0xcaf+0x498*-0x1,_0x4d3210['JiHks']],[0x234f+0xe8*0x9+0x1*-0x2b2b,_0x1b4785(0xc64)],[-0x2*0x401+0xa00+-0x2*0xd7,_0x1b4785(0xc64)],[-0x83*-0x2a+-0x4bb+-0x103f,_0x1b4785(0xd4)],[-0x2*-0x11a1+0x83b*-0x4+0x2*-0xe5,_0x4d3210[_0x1b4785(0xa24)]],[-0x64*-0x7+0x2259+-0x2485*0x1,'u8'],[0x1*0x1465+0x1c26+-0x3*0xffd,_0x4d3210['QBqAS']],[0xec0*0x1+-0x1*0x745+-0x6d7,'u8'],[0x3d5*0x1+-0x15a*0xc+-0x3*-0x459,_0x4d3210['JiHks']],[-0x1*0x2068+-0x1d5b+0x3e6f,_0x1b4785(0xc64)],[0x3*-0x1c7+0x1a49+-0x1434,_0x4d3210['QBqAS']],[0x2*-0x12d3+-0x1*-0x144d+0x5*0x3a1,'u8']],'SectatorCamera':[[0x1796+-0x1*0x184d+0xcb,_0x4d3210['QBqAS']],[0x19c*0x3+0x652+0x2*-0x587,_0x1b4785(0xd4)],[-0x3a+0x2615+-0x25bf,_0x4d3210[_0x1b4785(0xa24)]],[-0x1f*0xfb+0x3af+0x2af*0xa,'v3'],[-0xc25+-0xb80+0x17d1,'v3'],[0x2ba*0xa+-0x2180+-0x6*-0x116,_0x4d3210[_0x1b4785(0x70e)]],[-0xf7b+-0x1*-0x145d+-0x496*0x1,_0x1b4785(0xc64)],[-0x1afc+0x161e+0x52e*0x1,'f32'],[0x1caf*0x1+0x12*-0x55+-0x1661,_0x4d3210['JiHks']],[-0x7b*0x43+0xd*-0x24b+0x3e58,_0x1b4785(0xd4)],[-0x1*0x12a5+-0x434*0x1+0x1c9*0xd,'u8'],[0xa9*0x9+0xffd*-0x1+0xa6c,'v3'],[0x66e+-0x16c+-0x1*0x496,'v4'],[0x31*-0xd+-0x8dc+0xbd5,'u8'],[0x6*-0x261+0xae9+0x3dd,_0x4d3210[_0x1b4785(0x70e)]]],'UISettings':[[-0x5*0x6ac+0x665*-0x1+0x27e1,'i32'],[-0x807*-0x1+0x1c4f+-0x242e,_0x4d3210[_0x1b4785(0xa24)]],[0x1fe4+-0x172d*-0x1+-0x35cd,'u8'],[0x1de9+-0x1*-0x94e+-0x25ef,_0x1b4785(0xc64)],[-0x1435+-0xf20*-0x1+0x669,_0x4d3210[_0x1b4785(0x70e)]],[-0x2*0x39f+0xc68+0xa3*-0x6,_0x4d3210[_0x1b4785(0x70e)]],[0x20c2+0xd*-0x277+0x1*0xa5,'u8'],[-0x1*0x7f9+0x2*0x55+0x22b*0x4,'u8'],[0x2177*0x1+0x16ea+-0x3703,'u8'],[0x1*0x1a0b+0x21b3+-0x3a5f,'u8'],[0x2ce*0x8+-0x2*-0x4f0+0xb0*-0x2d,'u8'],[-0x17fd*-0x1+-0x21a+0x15*-0xfa,'u8'],[0xc7*0x29+-0x1*0x80f+-0x166e,'u8'],[-0x15f1*-0x1+0x15d0+-0x2a05,_0x1b4785(0xd4)],[0x1*-0x404+-0x2189+0x37*0xb7,_0x1b4785(0xd4)],[-0x56c*0x1+-0x8+0x78c,'u8'],[0xec2*-0x2+0x4ce+0x2b*0xa2,_0x4d3210[_0x1b4785(0xa24)]],[0x1b5e+0x43*0x61+-0x3221,_0x1b4785(0xc64)],[0x180+-0xf0f+0x1087*0x1,'u8'],[-0x269c+-0x4*-0x1dd+0x22c4,'u8'],[0x1acc+0xc*0xe2+-0x21c4,'v2'],[-0x5da*-0x1+-0x1e3+0x1*-0x4f,'v2'],[-0x1282+-0x10a6+0x26d8,'u8'],[0x1700+-0x1f6b+-0x1*-0xc23,'u8'],[-0xa18+0x1c5a+0x4d2*-0x3,'f32'],[-0xd*-0x3b+-0x2691+0x2762,'v3'],[0x39f+0x19e2+0x2d9*-0x9,_0x1b4785(0xd4)],[-0x24d9*0x1+0x2*0x617+0x1c8f,_0x4d3210[_0x1b4785(0xa24)]],[0x234+0x2191+0x1*-0x1fdd,_0x4d3210[_0x1b4785(0xa24)]],[0x172e+0x1f03+-0x3241,'u8'],[0x2*0xc93+-0x1*0x141b+-0x11a,'u8'],[0x21e7+0x442+0x2235*-0x1,'i32'],[-0x2156*0x1+0xb3a+0x1a1c,_0x1b4785(0xc64)],[0x434*-0x8+-0x27*0x29+0x2be3,'i32'],[0xbd6+-0x20*0x82+0x439*0x2,_0x4d3210['JiHks']],[-0x3d0+0x14b*-0x9+0x137f,_0x4d3210[_0x1b4785(0x70e)]],[0x16*-0x1aa+-0x16ed+0x3f99,'i32'],[-0x1a18+-0x2*-0x11dd+-0x58e,'i32'],[-0xd7a+-0x1d*0x13d+0x357b,_0x1b4785(0xc64)],[0x18b4+-0x338+-0x1160,_0x1b4785(0xc64)],[0x1b22+0x3*0x789+-0x2d9d*0x1,_0x4d3210[_0x1b4785(0x70e)]],[0x1a*-0x169+0x1680+0x127e,'u8'],[0x6*-0x34c+0xc1d*-0x3+0x3c74,'u8'],[-0x32c*-0x4+0x1b9c+-0x11fb*0x2,'u8'],[-0x1a6f+0x10*-0xa4+-0x1*-0x2906,'u8'],[-0x3*0x2a7+0xbb*0x5+0x8da,_0x1b4785(0xd4)]]},_0x43d252={},_0x1461a8={};function _0x1815f0(_0x18e2aa,_0x3a038a,_0x31dcaa){var _0x519b17={'MqKRu':function(_0x25050d,_0xdd098e){return _0x25050d+_0xdd098e;}};return function(_0x11e207){var _0x2df022=_0x224c,_0x4d2850={'tDFmf':function(_0x465cd1,_0xdfeefc){return _0x465cd1===_0xdfeefc;}};try{var _0x33583d=_0x11e207&&_0x11e207['val']?_0x11e207['val']():0x1ddb*-0x1+0x10*-0x122+0x2ffb;if(!_0x33583d)return;var _0xf63287=_0x1461a8[_0x18e2aa]||(_0x1461a8[_0x18e2aa]={}),_0x2b8ab9=_0xf63287[_0x33583d];if(!_0x2b8ab9)_0x2b8ab9=_0xf63287[_0x33583d]={'ptr':_0x33583d,'firstSeen':Date[_0x2df022(0x91b)](),'hits':0x0};_0x2b8ab9['hits']++;if(_0x31dcaa){if(_0x4d3210[_0x2df022(0x743)](_0x2df022(0x2a0),_0x4d3210['jYXDl'])){if(!_0x43d252[_0x33583d])_0x43d252[_0x33583d]={'ptr':_0x33583d,'kind':_0x18e2aa,'firstSeen':Date[_0x2df022(0x91b)](),'hits':0x0};_0x43d252[_0x33583d]['hits']++;}else return{'o':_0x519b17[_0x2df022(0x7ad)]('0x',_0x8063ee[-0x1b*0x32+-0xd49+-0x1*-0x128f]['toStr'+'ing'](-0x207*-0x9+0xa5a+-0x1c89*0x1)),'v':_0x3f6307(_0xecedb4+_0x30c12d[0x6b*-0x4b+-0x1*0x68e+0x139*0x1f],_0x39ec22[-0xdcb+0x725+-0xd*-0x83])};}else{var _0x1d1976=_0x22c822[_0x18e2aa];if(!_0x1d1976||_0x1d1976[_0x2df022(0x6b3)]!==_0x33583d){_0x22c822[_0x18e2aa]={'ptr':_0x33583d,'firstSeen':Date[_0x2df022(0x91b)](),'hits':0x0,'replaced':!!_0x1d1976};try{var _0x379b65=_0x2b4c43[_0x2df022(0xc17)+'r'](function(_0x2f4f18){var _0x19c998=_0x2df022;return _0x4d2850[_0x19c998(0xbf5)](_0x2f4f18[_0x19c998(0x55a)],_0x18e2aa);})[0x192*0x2+0x1*-0x146b+0x1147];_0x26710c={'type':_0x18e2aa,'atMs':Date['now']()-_0x1fe26d,'originalFunc':!!(_0x379b65&&_0x379b65['hook']&&typeof _0x379b65[_0x2df022(0xba9)][_0x2df022(0x6c2)+'nalFu'+'nc']===_0x4d3210[_0x2df022(0x5d3)]),'resolveGameAtFire':!!_0x4d3210[_0x2df022(0x821)](_0x4f7d11),'gameSourceAtFire':_0x5e265a['sourc'+'e']};}catch(_0x35ee0d){}}}if(_0x18e2aa===_0x4d3210['QYcwo']&&_0xde72d1['on']){if(_0x4d3210[_0x2df022(0x2d0)]!=='Xlmfj')try{_0x18c41f(_0x33583d);}catch(_0x4e1a52){}else{var _0xd64e=_0x30f38d[_0x3af954];_0x428179+=_0xd64e[_0x2df022(0x6ce)]||0x17*0xc1+0x3*-0x3c9+-0x5fc,_0xbc5e17+=_0x519b17['MqKRu'](_0xd64e['setHi'+'ts']||0x1*-0x1277+0x1709+-0x492,_0xd64e[_0x2df022(0xad8)+'its']||0x100*0x1+-0x1d5f+0x1c5f);}}if(!_0x3a038a){if(_0x4d3210[_0x2df022(0xa3)](_0x2df022(0x18d),_0x4d3210['XISMG'])){if(_0x34389b['el'])_0x465575['el'][_0x2df022(0xb1d)]['displ'+'ay']='none';return;}else{var _0x379b65=_0x2b4c43[_0x2df022(0xc17)+'r'](function(_0x1f5b76){return _0x1f5b76['type']===_0x18e2aa;})[-0x262d+-0x124*0x4+0x2abd];if(_0x379b65&&_0x379b65[_0x2df022(0xba9)])try{_0x379b65[_0x2df022(0xba9)][_0x2df022(0x6d3)+'ed']=![];}catch(_0x56d21d){}}}}catch(_0x9a115b){}};}function _0x5b6590(){var _0xd38012=_0x1b4785;if(_0x4d3210['Niojc'](_0x4d3210['sWtZg'],_0x4d3210['MuDRO'])){if(_0x2b4c43['lengt'+'h'])return!![];if(!window[_0xd38012(0x72f)+_0xd38012(0x7c1)+_0xd38012(0x41c)]||!window[_0xd38012(0x72f)+_0xd38012(0x7c1)+'dkit']['Runti'+'me'])return![];var _0x16023e=window[_0xd38012(0x72f)+_0xd38012(0x7c1)+'dkit'][_0xd38012(0x844)+'me'];if(!_0x16023e[_0xd38012(0x95a)+'ns']||!_0x16023e[_0xd38012(0x95a)+'ns'][_0xd38012(0x17c)+'h'])return![];_0x2f016e=window[_0xd38012(0x72f)+_0xd38012(0x7c1)+_0xd38012(0x41c)][_0xd38012(0x9e2)+_0xd38012(0xac6)+'er'],_0xefd364=_0xefd364||_0x16023e['plugi'+'ns'][_0x16023e[_0xd38012(0x95a)+'ns'][_0xd38012(0x17c)+'h']-(0xe89+0x10*0x32+0x5*-0x388)];if(!_0xefd364||_0x4d3210['Sxmtw'](typeof _0xefd364['hookP'+_0xd38012(0x451)],_0x4d3210[_0xd38012(0x5d3)]))return![];for(var _0x36563e=0x614*-0x5+-0xabd*-0x1+-0x75*-0x2b;_0x36563e<_0x160c27['lengt'+'h'];_0x36563e++){var _0x4a5f3c=_0x160c27[_0x36563e];try{if('VoJPW'!=='VoJPW'){var _0x41645b=('2|0|5'+'|8|4|'+_0xd38012(0x96c)+_0xd38012(0x7d0))[_0xd38012(0x60a)]('|'),_0x3a5709=-0x176a+-0x13f1+0x2b5b;while(!![]){switch(_0x41645b[_0x3a5709++]){case'0':var _0x1ebda4=_0x3642d3['offse'+'tWidt'+'h']||0x1*-0x2269+0x2f8+0x21dd*0x1,_0x1a64a6=_0x234567[_0xd38012(0x498)+'tHeig'+'ht']||0x23dc+0xebb+-0xb*0x475;continue;case'1':_0x1789b2['pos']={'x':_0x2063ee,'y':_0x7a3fbf};continue;case'2':if(!_0x16517f)return;continue;case'3':_0x587d97['style'][_0xd38012(0x394)+'m']=_0x4d3210['ExaPu'];continue;case'4':_0x7a3fbf=_0x56d5d9[_0xd38012(0xa59)](-0x222a+0x76d*0x3+-0x153*-0x9,_0x27e7ef['min'](_0x4d3210[_0xd38012(0x8ba)]((_0x27dcf1['inner'+_0xd38012(0xbf0)+'t']||-0x93d+0x10f+0x15d*0x6)-_0x1a64a6,0x12d0*0x1+0x15e8+0x54*-0x7c),_0x7a3fbf));continue;case'5':var _0x2063ee=(_0x23797f['clien'+'tX']||0x25c0+0x18c0+0x20*-0x1f4)-_0x4f4c8f,_0x7a3fbf=(_0x46c5b7[_0xd38012(0xa7a)+'tY']||-0x52b+-0x3c*0x69+-0x34f*-0x9)-_0x4059f2;continue;case'6':_0x562944[_0xd38012(0xb1d)][_0xd38012(0x1d5)]=_0xd38012(0x9c5);continue;case'7':_0xd8d223['style'][_0xd38012(0x505)]=_0x4d3210['ogIqr'](_0x2063ee,'px');continue;case'8':_0x2063ee=_0x139b63['max'](0x18aa+0x18f3*-0x1+0x51,_0x5692ab['min']((_0x473361[_0xd38012(0x621)+_0xd38012(0x17f)]||0xc9f+-0x22fe+0x165f)-_0x1ebda4-(0x5*-0x40a+-0x75f+0x5*0x585),_0x2063ee));continue;case'9':_0x2542e0['style']['top']=_0x7a3fbf+'px';continue;}break;}}else{var _0x54e62e=_0xefd364['hookP'+_0xd38012(0x451)]({'typeName':_0x4a5f3c[_0xd38012(0x55a)],'methodName':'Updat'+'e','params':[_0x4d3210['JiHks'],_0xd38012(0xc64)],'returnType':undefined},_0x4d3210['tGcKv'](_0x1815f0,_0x4a5f3c['type'],_0x4a5f3c['keep'],_0x4a5f3c[_0xd38012(0x233)]));_0x2b4c43['push']({'type':_0x4a5f3c[_0xd38012(0x55a)],'hook':_0x54e62e,'keep':_0x4a5f3c['keep']});}}catch(_0x5afb9e){_0x32994d[_0xd38012(0x558)](_0x4d3210[_0xd38012(0x6cb)](_0x4a5f3c[_0xd38012(0x55a)],':\x20')+String(_0x5afb9e&&_0x5afb9e['messa'+'ge']||_0x5afb9e)[_0xd38012(0x603)](-0x14a1+-0x2*0x1036+0x11af*0x3,0x2363*0x1+-0x501*0x2+-0x18c1));}}return _0x2b4c43[_0xd38012(0x17c)+'h']>-0x5*0x59a+-0x1*0x250+-0xf29*-0x2;}else{var _0x307abe=_0x47865d('FPSco'+_0xd38012(0x4a2)+'ler',_0x5c8841[_0x1cf62e[_0x55be47]]['ptr']);_0x307abe[_0xd38012(0x6ce)]=_0x2175ef[_0x3a707f[_0x450ad3]][_0xd38012(0x6ce)],_0x307abe['isLoc'+'al']=_0x1f5096[_0x2917f9[_0x1149c7]][_0xd38012(0x6b3)]===_0x452a27,_0x3952e6[_0xd38012(0x732)+_0xd38012(0x4e2)+'s'][_0xd38012(0x558)](_0x307abe);}}function _0x265520(_0x1b0370,_0x1b4e17){var _0x51ed14=_0x1b4785,_0x14e72e={'vMxoE':_0x51ed14(0xaf1),'BmOsT':_0x4d3210['uuNzc'],'LGtYo':function(_0x47cbe7,_0x5b1772){return _0x47cbe7===_0x5b1772;},'TBTxq':function(_0x1b3a79,_0x542829){return _0x1b3a79>_0x542829;},'rkpvQ':_0x4d3210[_0x51ed14(0xc44)],'lPeCF':function(_0x316272,_0x3ce8f3){return _0x4d3210['spkZG'](_0x316272,_0x3ce8f3);}};return function(){var _0x3e38e7=_0x51ed14;try{var _0x59f152=_0x38db79[_0x1b4e17]||(_0x38db79[_0x1b4e17]={'last':null,'hits':0x0,'setLast':null,'setHits':0x0,'setB':null,'pairHits':0x0,'lo':null,'hi':null,'jump':0x0}),_0x38d03a=arguments;if(_0x1b0370===_0x14e72e[_0x3e38e7(0xab3)]){var _0x449cee=_0x38d03a[0x17e1+-0x2e*0x17+-0x1*0x13bf];if(_0x449cee&&typeof _0x449cee['val']===_0x14e72e[_0x3e38e7(0x699)]){var _0x1d3656=_0x449cee[_0x3e38e7(0x9d9)]();if(typeof _0x1d3656==='numbe'+'r'&&isFinite(_0x1d3656)){if(_0x14e72e[_0x3e38e7(0xba3)](_0x59f152['lo'],null)||_0x1d3656<_0x59f152['lo'])_0x59f152['lo']=_0x1d3656;if(_0x59f152['hi']===null||_0x14e72e[_0x3e38e7(0x6f7)](_0x1d3656,_0x59f152['hi']))_0x59f152['hi']=_0x1d3656;if(_0x59f152[_0x3e38e7(0xb42)]!==null){if(_0x3e38e7(0x608)!==_0x14e72e[_0x3e38e7(0x916)]){var _0x3e8b43=_0x2007b8[_0x3e38e7(0x7c8)+_0x3e38e7(0x7d8)+'ent']('style');_0x3e8b43['id']=_0x3e38e7(0x7c6)+_0x3e38e7(0x839)+'u-css',_0x3e8b43['textC'+_0x3e38e7(0x276)+'t']=_0x17b25f,(_0x4ff732[_0x3e38e7(0x179)]||_0x308336[_0x3e38e7(0x5e6)+'entEl'+_0x3e38e7(0x717)])['appen'+_0x3e38e7(0x315)+'d'](_0x3e8b43);}else{var _0x546b22=Math[_0x3e38e7(0xa5a)](_0x1d3656-_0x59f152['last']);if(_0x546b22>_0x59f152['jump'])_0x59f152[_0x3e38e7(0x632)]=_0x546b22;}}_0x59f152[_0x3e38e7(0xb42)]=_0x1d3656;}_0x59f152['hits']++;if(_0x38d03a[-0x947+-0x1d*0x42+-0xc3*-0x16]&&typeof _0x38d03a[-0x1*-0x685+-0x16e6+0x1062]['val']==='funct'+_0x3e38e7(0x659)){var _0x424dc3=_0x38d03a[0xc3d+0xd*-0x205+0xe05][_0x3e38e7(0x9d9)]();if(_0x424dc3)_0x48e9a1=_0x424dc3;}}}else{_0x38d03a[-0x521+-0x1cee+0x2210]&&_0x14e72e[_0x3e38e7(0xba3)](typeof _0x38d03a[0x1bb5+-0x81c+-0x1398][_0x3e38e7(0x9d9)],'funct'+'ion')&&(_0x59f152['setLa'+'st']=_0x38d03a[0x1974+-0x1c81+0x30e][_0x3e38e7(0x9d9)](),_0x59f152['setHi'+'ts']++);_0x38d03a[0x1*0xf25+-0xdb0+-0x7*0x35]&&typeof _0x38d03a[-0x10d*-0x1+0x1802+-0x190d][_0x3e38e7(0x9d9)]===_0x14e72e[_0x3e38e7(0x699)]&&(_0x14e72e[_0x3e38e7(0x9fd)](_0x3e38e7(0x113),'egOjS')?(_0x59f152[_0x3e38e7(0x73)]=_0x38d03a[0x1441+0x1*-0x1945+0x506][_0x3e38e7(0x9d9)](),_0x59f152[_0x3e38e7(0xad8)+_0x3e38e7(0x65d)]++):(_0xf38628['cv']['width']=_0x3030a4,_0x42a73b['cv'][_0x3e38e7(0x871)+'t']=_0x25d06f));if(_0x38d03a[0x23b*-0x2+0x34e+0x128*0x1]&&typeof _0x38d03a[0xbf8+0x74c+0x19b*-0xc][_0x3e38e7(0x9d9)]===_0x3e38e7(0x668)+_0x3e38e7(0x659)){var _0x2e0275=_0x38d03a[0xdbe*-0x1+-0x2d7+-0x5*-0x351][_0x3e38e7(0x9d9)]();if(_0x2e0275)_0x48e9a1=_0x2e0275;}}}catch(_0x1789f9){}};}function _0x5d8b67(){var _0x4258c3=_0x1b4785,_0x5924a9={'gIDZQ':function(_0x4bc2c5,_0x539a11,_0x4b13f2){return _0x4bc2c5(_0x539a11,_0x4b13f2);}};if(_0x3c78fe)return!![];if(!_0xefd364||_0x4d3210[_0x4258c3(0x724)](typeof _0xefd364[_0x4258c3(0xb23)+_0x4258c3(0x591)+'x'],_0x4d3210['uuNzc']))return![];var _0x3c6721=_0x536bb1[_0x4258c3(0x2c3)+'Look']||[];for(var _0x429487=0x233c+0x1c79+-0x3fb5;_0x429487<_0x3c6721[_0x4258c3(0x17c)+'h'];_0x429487++){if(_0x4d3210[_0x4258c3(0x497)]!==_0x4d3210[_0x4258c3(0xa63)]){var _0x38b4e2=_0x3c6721[_0x429487];try{if(_0x4d3210[_0x4258c3(0x4fd)](_0x38b4e2[_0x4258c3(0x7e0)],_0x4d3210[_0x4258c3(0xb73)]))_0xefd364['hookP'+'ostfi'+'x']({'typeName':_0x4d3210[_0x4258c3(0x20e)],'methodName':_0x38b4e2[_0x4258c3(0x2d8)],'params':_0x38b4e2[_0x4258c3(0xb70)+'arams'],'returnType':_0x38b4e2['wasmR'+'et']},_0x4d3210['StmOb'](_0x265520,_0x4d3210[_0x4258c3(0x6ba)],_0x38b4e2[_0x4258c3(0x2d8)]));else _0x4d3210['syJFO'](_0x38b4e2[_0x4258c3(0x7e0)],_0x4d3210['GQcud'])&&_0x38b4e2['param'+'s']['lengt'+'h']===-0xb61+-0x2*0x1009+0x3*0xe7c&&_0x38b4e2[_0x4258c3(0x125)+'s'][-0x13c8+0x14a4+-0x37*0x4]===_0x4d3210[_0x4258c3(0xb73)]&&_0xefd364['hookP'+_0x4258c3(0x451)]({'typeName':'Mouse'+'Look','methodName':_0x38b4e2['name'],'params':_0x38b4e2[_0x4258c3(0xb70)+_0x4258c3(0x921)],'returnType':undefined},_0x265520(_0x4258c3(0x39c),_0x38b4e2['name']));}catch(_0x218a49){if('iyvin'===_0x4d3210[_0x4258c3(0x5b7)]){_0xfab3b5(![]),_0x5924a9[_0x4258c3(0xa0a)](_0x558a32,_0x5cb1f1,-0x10*0x59+-0x1cf9+0xb*0x33f);return;}else _0x361df6[_0x4258c3(0x558)](_0x4d3210['XkMNM'](String,_0x218a49&&_0x218a49[_0x4258c3(0x1be)+'ge']||_0x218a49)[_0x4258c3(0x603)](0x147f+-0x141a+-0x65,-0x1*0x12e9+-0x19*0x161+0x7a*0x71));}}else _0x41144c[_0x4258c3(0x5a0)+_0x4258c3(0x14d)](_0xc50cc1),_0x4e07c8=!![];}return _0x3c78fe=!![],!![];}function _0xaa9641(){var _0x4ec001=_0x1b4785,_0x30ee75=0x2+0x6cb*0x5+-0x21f9,_0x19a74a=0x159a+-0xc7d+0x91d*-0x1,_0x46c21e=-0x9a8+0xb*-0x95+0x100f,_0x4ce8c9=0x5b*-0x16+-0x6f*-0x1f+-0x59f,_0x45691b=-0x1*0x1c2d+0x41f+0x180e;try{var _0x3159a4=window['Unity'+_0x4ec001(0x7c1)+'dkit']&&window[_0x4ec001(0x72f)+_0x4ec001(0x7c1)+'dkit'][_0x4ec001(0x844)+'me'],_0x48db86=_0xefd364||_0x3159a4&&_0x3159a4['plugi'+'ns']&&_0x3159a4[_0x4ec001(0x95a)+'ns'][_0x3159a4['plugi'+'ns'][_0x4ec001(0x17c)+'h']-(0x1*0x1c34+0xca*0x26+-0x3a2f)];if(_0x48db86&&_0x48db86[_0x4ec001(0x8b)])for(var _0x1792c8=-0x1*0x1741+-0x2162+0x38a3;_0x1792c8<_0x48db86[_0x4ec001(0x8b)][_0x4ec001(0x17c)+'h'];_0x1792c8++){var _0x2c5485=_0x48db86['hooks'][_0x1792c8];if(!_0x2c5485||_0x2c5485[_0x4ec001(0x6c7)+'ame']!==_0x4ec001(0x2c3)+'Look')continue;_0x30ee75++;if(_0x4d3210[_0x4ec001(0x2e3)](_0x2c5485['table'+_0x4ec001(0x706)],undefined))_0x19a74a++;if(_0x2c5485[_0x4ec001(0x511)+'ed'])_0x46c21e++;}}catch(_0x128100){}for(var _0x3046b1 in _0x38db79){var _0x407581=_0x38db79[_0x3046b1];_0x4ce8c9+=_0x407581['hits']||-0x1771+-0x309+0x1a7a,_0x45691b+=(_0x407581[_0x4ec001(0x59d)+'ts']||0x9*0x137+0x2429*-0x1+0x193a)+(_0x407581['pairH'+_0x4ec001(0x65d)]||-0x14ac+-0x465+0x3*0x85b);}return{'registered':_0x3c78fe,'total':_0x30ee75,'resolved':_0x19a74a,'applied':_0x46c21e,'getterHits':_0x4ce8c9,'setterHits':_0x45691b,'distinct':Object['keys'](_0x38db79)[_0x4ec001(0x17c)+'h'],'errorCount':_0x361df6[_0x4ec001(0x17c)+'h'],'errors':_0x361df6[_0x4ec001(0x603)](0x6a1*-0x3+0x1745+-0x362,0xc4b*0x1+0x34c+-0xf93)};}function _0x35a98e(){var _0x300670=_0x1b4785,_0xc22406={'leUwd':function(_0x41e6bf,_0x552a80){var _0x3980e1=_0x224c;return _0x4d3210[_0x3980e1(0xa3)](_0x41e6bf,_0x552a80);},'ixfkF':function(_0x24a810,_0x31576c){return _0x24a810*_0x31576c;}},_0x54c094=null,_0x312579=0x5d*0x33+-0x1a2c+0x7a5;for(var _0xbe87e8 in _0x38db79){if(_0x4d3210[_0x300670(0x301)](_0x4d3210['wMSoY'],_0x4d3210['VOKuf'])){var _0x1ed827={'EzaVK':function(_0x1b22af,_0x1a3c95){return _0x1b22af/_0x1a3c95;}};if(_0x2f6ad4==='v3'){var _0x23de45=_0x2b355a[_0x208843][_0x300670(0xf5)]||[_0x5d8426[_0x5bcf72]['v'],0x7ed*0x1+0x136*0x1+-0x923,-0x1d*0x2f+-0x3*-0xaf1+-0x8*0x370];return _0x23de45[_0x300670(0x4ba)](function(_0x2cfdf3){return _0x1ed827['EzaVK'](_0x43f0f2['round'](_0x2cfdf3*(-0x40b+0x1*-0x17cb+0x1c3a)),0xa76*0x1+-0x1fa3+-0x1591*-0x1);})[_0x300670(0xb4a)]('\x20\x20');}var _0x1b133c=_0x3ae19a[_0x425e56]['v'];return _0xc22406[_0x300670(0x9dd)](typeof _0x1b133c,'numbe'+'r')?_0x37ed88['round'](_0xc22406[_0x300670(0x3c0)](_0x1b133c,0xff2+-0xf3c+0x332))/(0xc4+-0x1b6e+0x25a*0xd):_0x48053b(_0x1b133c);}else{var _0x4916e7=_0x38db79[_0xbe87e8];_0x4916e7[_0x300670(0xad8)+_0x300670(0x65d)]&&_0x4916e7['pairH'+'its']>_0x312579&&typeof _0x4916e7[_0x300670(0x516)+'st']===_0x4d3210['ZQASv']&&typeof _0x4916e7['setB']===_0x300670(0x2fe)+'r'&&isFinite(_0x4916e7[_0x300670(0x516)+'st'])&&_0x4d3210[_0x300670(0x82b)](isFinite,_0x4916e7[_0x300670(0x73)])&&(_0x54c094={'rawA':_0x4916e7[_0x300670(0x516)+'st'],'rawB':_0x4916e7[_0x300670(0x73)],'hits':_0x4916e7[_0x300670(0xad8)+'its'],'name':_0xbe87e8},_0x312579=_0x4916e7['pairH'+'its']);}}if(!_0x54c094)return null;var _0x17b461=_0x4d3210['riFhn'](_0x54c094['rawA'],-(-0x2c*-0x7b+-0x1*0x101e+-0x4ac))&&_0x4d3210[_0x300670(0x803)](_0x54c094[_0x300670(0x7fc)],0x85b+0x64d*-0x1+-0x4*0x6d),_0x58a899=_0x54c094[_0x300670(0xbf8)]>=-(0x130+0x7*-0x2b3+-0x3*-0x605)&&_0x4d3210[_0x300670(0x71)](_0x54c094['rawB'],0x1b63+-0x147+-0x19c2);return _0x17b461!==_0x58a899?(_0x54c094['pitch']=_0x17b461?_0x54c094[_0x300670(0x7fc)]:_0x54c094[_0x300670(0xbf8)],_0x54c094[_0x300670(0x8b7)]=_0x17b461?_0x54c094['rawB']:_0x54c094[_0x300670(0x7fc)],_0x54c094[_0x300670(0xaf0)]=_0x17b461?'a,b':_0x4d3210['XAYgg']):(_0x54c094[_0x300670(0x15b)]=null,_0x54c094[_0x300670(0x8b7)]=null,_0x54c094['order']=_0x300670(0x4b6)+'olved'+'\x20('+(_0x17b461?'both\x20'+_0x300670(0xbd9)+'ed':_0x300670(0x978)+_0x300670(0xb5b)+_0x300670(0x1db))+')'),_0x54c094;}function _0x194ea7(){var _0x2a283a=_0x1b4785,_0x2f34b4={'qWQSG':_0x4d3210[_0x2a283a(0x62d)]};if(_0x4d3210['zgPzV']==='sSYcQ'){var _0x27cb0a=_0x153eda[_0x2a283a(0x60a)]('+');_0xb1037c=_0x5d4113(_0x1555e1,_0x27cb0a[0x1*-0x158b+0x1*-0x1bb6+0x579*0x9]['index'+'Of'](_0x2f34b4[_0x2a283a(0x7e5)])===0x382*0x2+0xa*-0x2ff+0x16f2?_0x2a283a(0x81)+'hScri'+'pt':'FPSco'+_0x2a283a(0x4a2)+_0x2a283a(0x6ff),_0x423529(_0x27cb0a[0x11*-0x12+0x15a0+-0x146d],0x1eb4+0x1609+0x1*-0x34ad));}else{var _0x122421=0xe32+0x3*-0x185+-0x9a3;for(var _0x2af849=0xd*-0x1df+0x431+-0x1*-0x1422;_0x4d3210['VYdHh'](_0x2af849,_0x2b4c43['lengt'+'h']);_0x2af849++){if('hlzTI'!==_0x2a283a(0x59b))try{var _0x2d8ca3=_0x5560e8&&_0x1e0d63[_0x2a283a(0x502)];if(!_0x2d8ca3)return;if(_0x5b3a4a['boxes']&&!_0xcb4df8())_0x546a7c['boxes']=![];var _0x43b693=!_0x10cfee['on']?_0x4d3210[_0x2a283a(0x5d6)]:_0x33d0f5[_0x2a283a(0x77f)]?'ESP\x20b'+'oth':'ESP\x20m'+'ap';if(_0x43b693!==_0x2d8ca3['textC'+_0x2a283a(0x276)+'t'])_0x2d8ca3[_0x2a283a(0x56c)+_0x2a283a(0x276)+'t']=_0x43b693;_0x2d8ca3['style']['backg'+_0x2a283a(0xbe3)]=_0xfdb2ca['on']?_0x1c659e:'trans'+_0x2a283a(0xe0)+'t',_0x2d8ca3[_0x2a283a(0xb1d)][_0x2a283a(0x93b)]=_0x2072a5['on']?_0x2a283a(0x7fd)+'1b':_0x2a283a(0x33f)+'f5';}catch(_0x110452){}else{if(_0x2b4c43[_0x2af849][_0x2a283a(0xba9)]&&_0x2b4c43[_0x2af849]['hook'][_0x2a283a(0x141)+_0x2a283a(0x706)]!==undefined)_0x122421++;}}return _0x122421;}}function _0x537754(){var _0x11d9da=_0x1b4785;if(_0x4d3210[_0x11d9da(0x2e3)](_0x4d3210['FJbfR'],_0x4d3210['xBhAk'])){var _0x9da826=0x25a0+-0x1*0x81b+-0x9d7*0x3;for(var _0x211010=0xb00+0x14a4+-0x14*0x195;_0x211010<_0x2b4c43['lengt'+'h'];_0x211010++){if(_0x2b4c43[_0x211010]['hook']&&_0x2b4c43[_0x211010][_0x11d9da(0xba9)][_0x11d9da(0x511)+'ed'])_0x9da826++;}return _0x9da826;}else try{_0x172278();}catch(_0x479311){}}var _0x263deb=null,_0x46e0e3=[],_0x4ffb14={},_0x26710c=null;function _0x37b91a(_0x39e205){try{if(!_0x2f016e||!_0x39e205)return null;var _0xa103b6=new _0x2f016e(_0x39e205)['getCl'+'assNa'+'me']();return _0xa103b6===undefined?null:_0xa103b6;}catch(_0x49759f){return null;}}function _0x359ffa(_0x114bf5,_0x2f0cc1,_0x19e88d){var _0x510cce=_0x1b4785,_0x307523=(_0x510cce(0x4d3)+_0x510cce(0x1ef)+_0x510cce(0xb05))['split']('|'),_0x144bc0=-0x2329+-0x2b*-0x95+0xa22;while(!![]){switch(_0x307523[_0x144bc0++]){case'0':if(_0x2f0cc1<0x7f*-0x1f+-0x1c7*-0xb+-0x42c||_0x2f0cc1+_0x19e88d*(0x2b*0x7d+-0x38f+0x37c*-0x5)>_0x156bfa['byteL'+_0x510cce(0x184)])return null;continue;case'1':return _0x4cd3fa;case'2':var _0x4cd3fa=[];continue;case'3':_0x5e265a['ok']+=_0x19e88d;continue;case'4':for(var _0x4d54a1=0xa83*0x1+-0x1c*-0x1+-0xa9f;_0x4d3210['XOWMi'](_0x4d54a1,_0x19e88d);_0x4d54a1++)_0x4cd3fa[_0x510cce(0x558)](_0x156bfa[_0x510cce(0xc0b)+'oat32'](_0x4d3210[_0x510cce(0xe8)](_0x114bf5+_0x2f0cc1,_0x4d54a1*(-0x10ef+0xd4c+-0x3a7*-0x1)),!![]));continue;case'5':var _0x156bfa=_0x1634d1();continue;case'6':if(!_0x156bfa)return null;continue;}break;}}var _0x204242={'PhotonNetworkSync':[[_0x1b4785(0xb13),_0x4d3210[_0x1b4785(0xc5)]],['0x20',_0x1b4785(0x874)+'h'],[_0x4d3210[_0x1b4785(0x2cf)],_0x1b4785(0xee)+'form'],[_0x1b4785(0xa8c),_0x4d3210[_0x1b4785(0x23a)]],['0x30',_0x1b4785(0x57c)+'Look']],'NetworkPlayerAnimations':[[_0x1b4785(0xb13),_0x1b4785(0x167)+'le'],[_0x4d3210['IEBlV'],_0x4d3210[_0x1b4785(0x36e)]]],'NPC_Cotroller':[[_0x4d3210[_0x1b4785(0x3d8)],_0x1b4785(0x167)+'le'],['0xb4',_0x4d3210[_0x1b4785(0x8be)]],['0xd0','healt'+'h'],[_0x4d3210[_0x1b4785(0x347)],_0x4d3210[_0x1b4785(0x99b)]],[_0x4d3210[_0x1b4785(0x7b9)],'trans'+'form']],'EnemyBot':[[_0x4d3210['aPURa'],_0x4d3210['XegtA']]]},_0x3cc9f5={'PhotonNetworkSync':[[_0x4d3210['CCtVP'],_0x1b4785(0xa6e)],[_0x1b4785(0x3c2),_0x1b4785(0x7d7)+_0x1b4785(0xb2a)],['0x5c','id']]};function _0x2b1bbd(_0x5017f3,_0x3074b8){var _0x569202=_0x1b4785,_0x442741={'JPYGH':function(_0x486d48,_0x2736da){return _0x486d48/_0x2736da;},'wtWIV':function(_0xeb94,_0x6a6a11){return _0x4d3210['XDTLb'](_0xeb94,_0x6a6a11);},'nyIwg':_0x569202(0x6d9),'QAdAH':function(_0x3269ad,_0x408114){return _0x3269ad===_0x408114;},'yJVBD':_0x4d3210[_0x569202(0x70e)],'xIfAr':function(_0x2f006a,_0x168a5c,_0x29bf05){return _0x2f006a(_0x168a5c,_0x29bf05);},'eIVFy':function(_0x30c7c4,_0x2c8c14){return _0x30c7c4+_0x2c8c14;}},_0x3571a9=_0x5a6a9c[_0x5017f3]||[],_0x753a4c={'kind':_0x5017f3,'ptr':'0x'+_0x3074b8[_0x569202(0x356)+'ing'](0x1*-0xa00+0x2209+-0x17f9),'pos':null,'posAt':null,'allVecs':[],'scalars':[],'refs':{}};for(var _0x30fc65=0x661*0x5+-0x2*-0x1d1+-0x2387;_0x30fc65<_0x3571a9['lengt'+'h'];_0x30fc65++){if(_0x4d3210[_0x569202(0x4fd)]('uWTuY',_0x569202(0x4a1))){var _0x178000=_0x2d40f9['Photo'+_0x569202(0x308)+'orkSy'+'nc']||{};if(!_0x56ccc3[_0x569202(0x957)](_0x178000)[_0x569202(0x17c)+'h'])return![];return!!_0x5b9bea();}else{if(_0x3571a9[_0x30fc65][-0x1de*-0xd+-0x5c3*-0x6+-0x3ad7]!=='v3')continue;var _0x5bbb29=_0x359ffa(_0x3074b8,_0x3571a9[_0x30fc65][0x1*-0x1ebb+-0x1*-0x2175+-0x2ba],-0x8a+0xd87+-0xcfa);if(!_0x5bbb29)continue;_0x753a4c[_0x569202(0x650)+'cs'][_0x569202(0x558)]({'o':'0x'+_0x3571a9[_0x30fc65][0x7d1+0x509+0x46*-0x2f][_0x569202(0x356)+_0x569202(0x12e)](0x7d5*0x3+-0x1fbe+0x2c5*0x3),'v':_0x5bbb29});}}var _0x2661e6=-0x7b*-0x6+-0x2c3*0x9+0x15f9,_0x13f10e=_0x4d3210['zVggS'](_0x5017f3,'@')+_0x3074b8,_0x25efd9=_0x4d3210['DnvlB'](_0x199b13,_0x753a4c['allVe'+'cs'],_0x5551a0(),_0x1177dd[_0x13f10e]);_0x1177dd[_0x13f10e]=_0x25efd9['posAt']?{'o':_0x25efd9[_0x569202(0x132)]}:null,_0x753a4c[_0x569202(0x1df)]=_0x25efd9[_0x569202(0x1df)],_0x753a4c['posAt']=_0x25efd9['posAt'],_0x753a4c[_0x569202(0xb8b)]=_0x25efd9[_0x569202(0xb8b)],_0x753a4c[_0x569202(0x3e8)+_0x569202(0xab6)]=_0x25efd9['candi'+_0x569202(0xab6)],_0x753a4c[_0x569202(0x62e)+'er']=_0x25efd9['clust'+'er'],_0x753a4c[_0x569202(0x5bc)]=_0x25efd9[_0x569202(0x5bc)],void _0x2661e6;var _0x1d030b=_0x204242[_0x5017f3],_0x267650=_0x3cc9f5[_0x5017f3];if(_0x267650){if(_0x4d3210[_0x569202(0x8fa)]===_0x569202(0xa64))_0x2de086(_0x283232,_0x2a2c97['boxes']);else{_0x753a4c['tag']={};for(var _0x540b2c=-0x2d8*-0xa+-0x122a+-0xa46;_0x540b2c<_0x267650[_0x569202(0x17c)+'h'];_0x540b2c++){if(_0x569202(0x915)===_0x4d3210[_0x569202(0x92a)]){var _0x248be7=_0x2b19b9[_0x569202(0x3e9)+_0x569202(0x22f)];if(typeof _0x248be7['resol'+_0x569202(0xbaa)+'e']===_0x569202(0x668)+_0x569202(0x659)){var _0x413aea=_0x248be7['resol'+'veGam'+'e']();if(_0x413aea)return _0x29c7f3['sourc'+'e']=_0x4d3210[_0x569202(0xac0)],_0x413aea;}if(_0x248be7[_0x569202(0x742)])return _0x50a0ba['sourc'+'e']=_0x569202(0x95a)+'n._ru'+_0x569202(0x68b)+'._gam'+'e',_0x248be7[_0x569202(0x742)];}else{var _0x5c5d3c=_0x4d3210['StmOb'](_0x28dbcb,_0x3074b8+_0x4d3210['uAhjn'](parseInt,_0x267650[_0x540b2c][0x1*-0x1a22+0x1*0x23f9+-0x9d7],0x1*-0x2554+0x16d8+-0xe*-0x10a),'i32');if(_0x5c5d3c!==undefined)_0x753a4c[_0x569202(0x9f3)][_0x267650[_0x540b2c][0x1ea7+0x17*0x125+-0x5*0xb65]]=_0x5c5d3c;}}}}if(_0x1d030b){if('AAprz'!==_0x4d3210['vKbhE'])for(var _0x20309d=0x218c+0x143c+-0x4*0xd72;_0x20309d<_0x1d030b['lengt'+'h'];_0x20309d++){if(_0x569202(0x807)===_0x4d3210['AyFDO'])return _0x442741[_0x569202(0x995)](_0x53ce60['round'](_0x2b14f7*(0x449+0x1135+-0x151a)),0x165a+0x3c9+-0x19bf);else{var _0x6fde82=_0x4d3210[_0x569202(0x633)](_0x28dbcb,_0x4d3210[_0x569202(0x203)](_0x3074b8,parseInt(_0x1d030b[_0x20309d][-0x452*0x2+-0x1839+0x20dd],0x1*0x2311+0x5b*-0x1+0x1*-0x22a6)),'u32');if(_0x6fde82)_0x753a4c[_0x569202(0x18b)][_0x1d030b[_0x20309d][-0x1*0xb7+0x1daa+0xf7*-0x1e]]=_0x4d3210[_0x569202(0x28d)]('0x',(_0x6fde82>>>-0x8*0x2d3+-0x414*0x7+0x1992*0x2)[_0x569202(0x356)+_0x569202(0x12e)](-0x6f*0xe+0x1e45+-0x1823));}}else return null;}return _0x753a4c[_0x569202(0xa5f)+'rs']=_0x3571a9[_0x569202(0xc17)+'r'](function(_0x103ff2){var _0x38ca58=_0x569202;if(_0x442741[_0x38ca58(0x39f)](_0x442741[_0x38ca58(0x454)],_0x442741[_0x38ca58(0x454)]))return _0x103ff2[0x2705+0x1202*0x2+-0x4b08]===_0x38ca58(0xd4)||_0x442741['QAdAH'](_0x103ff2[0x1ed4+0x4eb+-0x23be],_0x442741[_0x38ca58(0x713)]);else _0x113504[_0x38ca58(0xa58)+_0x38ca58(0x3a4)]=![],_0x75f521[_0x38ca58(0xa66)+'8']=![],_0xcac410['heapB'+_0x38ca58(0xbc5)]=0xfcb+0x1e65+-0x2e30;})[_0x569202(0x4ba)](function(_0x16f063){var _0xebcb2e=_0x569202,_0x89ce17={'KAyNc':function(_0x5c0841,_0x19e842,_0x29e160){var _0x52e768=_0x224c;return _0x442741[_0x52e768(0xbd2)](_0x5c0841,_0x19e842,_0x29e160);},'gaogm':function(_0x33dbc6,_0x29b826){var _0x29b3f8=_0x224c;return _0x442741[_0x29b3f8(0x788)](_0x33dbc6,_0x29b826);},'DrcpQ':'u32'};if(_0xebcb2e(0x83b)==='ToXlo'){var _0x15e320=_0x89ce17['KAyNc'](_0x2dd478,_0x89ce17[_0xebcb2e(0x36b)](_0x529e35,_0x2b7646(_0x126308[_0x52c8b2][-0x1c37+0x15cd*0x1+0x66a],-0xbce*0x1+-0x2*-0x4df+0x220)),_0x89ce17[_0xebcb2e(0x885)]);if(_0x15e320)_0x1df4cd[_0xebcb2e(0x18b)][_0x19624b[_0x3180f9][0x1991+0x3*-0x6bb+-0x1*0x55f]]='0x'+(_0x15e320>>>-0x1945*0x1+-0x41*-0x32+0xc93)['toStr'+'ing'](-0x2615*-0x1+-0x14f6*0x1+-0x1*0x110f);}else return{'o':'0x'+_0x16f063[-0x1*0x13f1+-0x1*0x1175+0x2566]['toStr'+_0xebcb2e(0x12e)](-0x3*-0x2c0+0x11ea+-0x1a1a),'v':_0x442741[_0xebcb2e(0xbd2)](_0x28dbcb,_0x3074b8+_0x16f063[0x13f8+-0x1013*-0x2+-0x341e],_0x16f063[-0xead+0x832+0x53*0x14])};})[_0x569202(0xc17)+'r'](function(_0x4832d3){var _0x540709=_0x569202;if(_0x4d3210[_0x540709(0x848)]===_0x4d3210['mysLM'])_0x9266a5[_0x540709(0xb44)+_0x540709(0x35c)][_0x540709(0x558)]('rebui'+_0x540709(0x759)+_0x540709(0x5b9)+'irst\x20'+_0x540709(0x6bb)+_0x540709(0xb5d)+_0x540709(0xaf3)+'n?):\x20'+_0x17a727['insta'+_0x540709(0x309)+'eplac'+'ed']['join'](',\x20'));else return _0x4832d3['v']!==undefined&&isFinite(_0x4832d3['v']);})['slice'](0x2628+0x44f*0x2+-0x2ec6,-0x221f+0xb5+0x10bb*0x2),_0x753a4c;}function _0x1dad4a(){var _0x132675=_0x1b4785,_0xbac6e6={'owoQw':function(_0x10af82,_0x21519d){return _0x10af82+_0x21519d;},'WcKmd':_0x4d3210[_0x132675(0x9d7)],'ClZwu':function(_0x3264d7){return _0x4d3210['ShNNb'](_0x3264d7);},'yNvjA':_0x132675(0x7c6)+'a-sw-'+'v2'},_0x5344c7={'players':[],'bots':[],'enemies':[],'controllers':[],'camera':null,'cameraFrom':null,'playerList':null,'managers':{},'wasmTypes':null},_0x5210fd=_0x22c822[_0x132675(0x317)+'ntrol'+_0x132675(0x6ff)]&&_0x22c822['FPSco'+_0x132675(0x4a2)+_0x132675(0x6ff)][_0x132675(0x6b3)]||-0x20db+0x14e*0x11+0x1*0xaad,_0x46a0ae=_0x1461a8[_0x132675(0x3c3)+_0x132675(0x308)+_0x132675(0xbc7)+'nc']||{},_0x51cc62=Object['keys'](_0x46a0ae);for(var _0x293901=-0x10b7*0x1+0x1a4a+-0x993;_0x293901<_0x51cc62['lengt'+'h']&&_0x293901<-0x10*-0xac+-0x2e0+-0x7c8;_0x293901++){if(_0x132675(0x913)===_0x4d3210[_0x132675(0x1c6)])return _0x5a2381['v']!==_0x3042ff&&_0x3f118c(_0x14f23c['v']);else{var _0x497212=_0x46a0ae[_0x51cc62[_0x293901]],_0x346ae5=_0x4d3210[_0x132675(0x5e4)](_0x2b1bbd,_0x132675(0x3c3)+_0x132675(0x308)+'orkSy'+'nc',_0x497212[_0x132675(0x6b3)]);_0x346ae5[_0x132675(0x6ce)]=_0x497212[_0x132675(0x6ce)],_0x346ae5[_0x132675(0x1c3)+'SeenM'+'s']=_0x4d3210['mwwVX'](_0x497212[_0x132675(0x1c3)+_0x132675(0x87e)],_0x1fe26d),_0x346ae5[_0x132675(0x7b3)+'al']=!!_0x5210fd&&_0x4d3210[_0x132675(0x662)](_0x346ae5['refs'][_0x132675(0x5ca)],'0x'+_0x5210fd[_0x132675(0x356)+_0x132675(0x12e)](0xbd*-0x7+-0x5*-0x241+-0x305*0x2));if(_0x346ae5[_0x132675(0x18b)][_0x132675(0x874)+'h']){if(_0x132675(0x7c5)===_0x132675(0x7c5)){var _0x4072ff=parseInt(_0x346ae5[_0x132675(0x18b)][_0x132675(0x874)+'h'],0xce7+-0x9d*0x22+0x803);_0x346ae5[_0x132675(0x874)+'h']=_0x12a9fe(_0x4072ff,_0x4d3210[_0x132675(0x6de)],_0x132675(0x4ab));}else return _0x18c0fa[_0x132675(0x625)+_0x132675(0xc09)]=![],_0x1e2e0b['why']=_0xbac6e6[_0x132675(0x702)](_0x132675(0x15b)+'\x20',_0x542cd9[_0x132675(0xbe3)](_0x1f0866))+_0xbac6e6['WcKmd'],null;}_0x5344c7[_0x132675(0x103)+'rs'][_0x132675(0x558)](_0x346ae5);}}_0x5344c7[_0x132675(0x103)+'rCoun'+'t']=_0x51cc62['lengt'+'h'];var _0x36a5e2=_0x1461a8['NPC_C'+'otrol'+_0x132675(0x6ff)]||{},_0x2ce70e=Object[_0x132675(0x957)](_0x36a5e2);for(var _0x2661b1=0x4f2*0x1+-0x1*-0x1f2a+-0x241c;_0x4d3210['Ctmwy'](_0x2661b1,_0x2ce70e[_0x132675(0x17c)+'h'])&&_0x2661b1<-0x3f1+-0x3*0x1d4+0x985;_0x2661b1++){var _0x2ff439=_0x2b1bbd(_0x4d3210['soNJs'],_0x36a5e2[_0x2ce70e[_0x2661b1]][_0x132675(0x6b3)]);_0x2ff439[_0x132675(0x6ce)]=_0x36a5e2[_0x2ce70e[_0x2661b1]]['hits'],_0x2ff439[_0x132675(0x1c3)+_0x132675(0x8fb)+'s']=_0x4d3210['mwwVX'](_0x36a5e2[_0x2ce70e[_0x2661b1]][_0x132675(0x1c3)+'Seen'],_0x1fe26d);if(_0x2ff439['refs'][_0x132675(0x874)+'h'])_0x2ff439[_0x132675(0x874)+'h']=_0x4d3210[_0x132675(0xa8d)](_0x12a9fe,_0x4d3210[_0x132675(0x933)](parseInt,_0x2ff439[_0x132675(0x18b)]['healt'+'h'],-0xc4c+0x7c1+0x49b),_0x4d3210[_0x132675(0x6de)],_0x4d3210['WLDIV']);_0x5344c7[_0x132675(0x345)][_0x132675(0x558)](_0x2ff439);}_0x5344c7[_0x132675(0x50b)+_0x132675(0x7ec)]=_0x2ce70e[_0x132675(0x17c)+'h'];var _0x44e0d9=_0x1461a8['FPSco'+'ntrol'+'ler']||{},_0x3cb3a6=Object['keys'](_0x44e0d9);for(var _0x15c475=-0x142d+-0xd3c+0x2169*0x1;_0x15c475<_0x3cb3a6[_0x132675(0x17c)+'h']&&_0x15c475<0xb9a+0x2110+-0x2c92;_0x15c475++){if(_0x4d3210[_0x132675(0xae4)]!==_0x4d3210['qutYJ'])return![];else{var _0x5b8123=_0x4d3210[_0x132675(0x106)](_0x2b1bbd,'FPSco'+'ntrol'+_0x132675(0x6ff),_0x44e0d9[_0x3cb3a6[_0x15c475]]['ptr']);_0x5b8123['hits']=_0x44e0d9[_0x3cb3a6[_0x15c475]][_0x132675(0x6ce)],_0x5b8123[_0x132675(0x7b3)+'al']=_0x4d3210[_0x132675(0xae7)](_0x44e0d9[_0x3cb3a6[_0x15c475]][_0x132675(0x6b3)],_0x5210fd),_0x5344c7['contr'+_0x132675(0x4e2)+'s']['push'](_0x5b8123);}}_0x5344c7['contr'+'oller'+_0x132675(0x87f)]=_0x3cb3a6[_0x132675(0x17c)+'h'];var _0x30e302=_0x5344c7[_0x132675(0x103)+'rs'][_0x132675(0xc4b)+'t'](_0x5344c7[_0x132675(0x345)]);for(var _0xff5b70=0x8*0xc2+0x13*-0x10f+-0x147*-0xb;_0xff5b70<_0x30e302['lengt'+'h'];_0xff5b70++){if(_0x4d3210[_0x132675(0x7ba)](_0x132675(0x792),_0x4d3210[_0x132675(0x4f2)]))_0x40b8a7['setAt'+_0x132675(0x9dc)+'te'](_0x132675(0x471)+_0x132675(0x690)+'ed',_0x4d3210[_0x132675(0x279)](_0x5f56cb)?'true':'false');else{if(_0x30e302[_0xff5b70][_0x132675(0x7b3)+'al'])continue;_0x5344c7['enemi'+'es']['push'](_0x30e302[_0xff5b70]);}}_0x5344c7[_0x132675(0x99c)+'Count']=_0x5344c7[_0x132675(0x814)+'es'][_0x132675(0x17c)+'h'];var _0x4f1717={'TDM_GameManager':0x2c,'GG_GameManager':0x14},_0x86e21={'TDM_GameManager':0x50,'GG_GameManager':0x5c};for(var _0x56fbb3 in _0x22c822){if(_0x4d3210[_0x132675(0x590)](_0x4d3210[_0x132675(0x2a7)],'mJLRz')){var _0xb5fde7=_0x4b33eb[_0x132675(0x801)+_0x132675(0xbaa)+'e']();if(_0xb5fde7)return _0x1ae5df[_0x132675(0xbca)+'e']='Runti'+'me.re'+'solve'+'Game('+')',_0xb5fde7;}else{var _0x299b5f=_0x22c822[_0x56fbb3];if(!_0x299b5f||!_0x299b5f['ptr'])continue;if(!_0x4d3210[_0x132675(0x21d)](_0x56fbb3,_0x4f1717))continue;_0x5344c7[_0x132675(0x80d)+'ers'][_0x56fbb3]='0x'+_0x299b5f['ptr'][_0x132675(0x356)+_0x132675(0x12e)](-0x18ef*0x1+0x84a+0x10b5);var _0x5b928a=_0x4d3210[_0x132675(0x51f)](_0x28dbcb,_0x299b5f[_0x132675(0x6b3)]+_0x4f1717[_0x56fbb3],_0x4d3210['eDzIr']),_0x48eff7=_0x28dbcb(_0x299b5f['ptr']+_0x86e21[_0x56fbb3],'u32');if(_0x5b928a&&_0x5344c7[_0x132675(0xadd)+'a']===null){if('epQUj'===_0x132675(0x3c7)){var _0x49c511=_0xbac6e6['ClZwu'](_0x396b1f);return!!(_0x49c511&&_0x34ba13[_0x132675(0x625)+_0x132675(0xc09)]);}else _0x5344c7['camer'+'a']='0x'+_0x4d3210['pEerC'](_0x5b928a,0x15c5+0x1bd*-0x2+-0x124b)[_0x132675(0x356)+_0x132675(0x12e)](-0x4aa*-0x7+-0x5c3+-0x1ad3),_0x5344c7['camer'+_0x132675(0x16b)]=_0x56fbb3;}if(_0x48eff7&&_0x4d3210[_0x132675(0x55b)](_0x5344c7['playe'+'rList'],null))_0x5344c7[_0x132675(0x103)+_0x132675(0x90)]='0x'+(_0x48eff7>>>0x40a+-0x1265+0xe5b)[_0x132675(0x356)+_0x132675(0x12e)](0x105c+-0x4c4*-0x4+0x235c*-0x1);}}if(!_0x5344c7[_0x132675(0x103)+_0x132675(0x262)+'t']&&!_0x5344c7['botCo'+_0x132675(0x7ec)]&&!_0x5344c7[_0x132675(0xadd)+'a']){if(_0x132675(0xba8)===_0x132675(0xba8))_0x5344c7[_0x132675(0x2c5)]=_0x132675(0x810)+_0x132675(0x129)+_0x132675(0xc45)+_0x132675(0x5c3)+',\x20no\x20'+_0x132675(0x4ff)+_0x132675(0x2dd)+_0x132675(0x8da)+_0x132675(0x4b2)+_0x132675(0x6a3)+_0x132675(0x85c)+_0x132675(0xb07)+_0x132675(0x3f6)+_0x132675(0x5df)+_0x132675(0x53c)+_0x4d3210[_0x132675(0x805)];else return _0x594002[_0x132675(0xc57)];}else{if(!_0x5344c7[_0x132675(0x99c)+_0x132675(0x87f)]){if(_0x132675(0xc2a)!=='bACwX'){var _0x2a2098=(_0x132675(0x2f8)+_0x132675(0xb89))[_0x132675(0x60a)]('|'),_0x42c20b=-0x120e+0xc33+0x5db;while(!![]){switch(_0x2a2098[_0x42c20b++]){case'0':_0x304389=_0x1f8717[_0x132675(0x7c8)+'eElem'+_0x132675(0x173)]('div');continue;case'1':_0x4a952d['id']=_0xbac6e6[_0x132675(0x95f)];continue;case'2':return _0x271cd2;case'3':_0xd2b4df[_0x132675(0x39e)]['appen'+_0x132675(0x315)+'d'](_0x56e063);continue;case'4':if(!_0x5926ba['getEl'+'ement'+_0x132675(0x5d4)](_0x132675(0x7c6)+'a-sw-'+_0x132675(0xfc)+'s')){var _0x5d8b4f=_0x212afb[_0x132675(0x7c8)+_0x132675(0x7d8)+_0x132675(0x173)](_0x132675(0xb1d));_0x5d8b4f['id']=_0x132675(0x7c6)+_0x132675(0x90f)+_0x132675(0xfc)+'s',_0x5d8b4f['textC'+_0x132675(0x276)+'t']=_0x132675(0xacd)+_0x132675(0xb4b)+_0x132675(0x33e)+'ll:in'+_0x132675(0x190)+'}',(_0x17b59f[_0x132675(0x179)]||_0x10fa3d[_0x132675(0x5e6)+_0x132675(0x68f)+_0x132675(0x717)])['appen'+'dChil'+'d'](_0x5d8b4f);}continue;}break;}}else _0x5344c7[_0x132675(0x2c5)]=_0x4d3210['JVHzi'](_0x132675(0x539)+'rs\x20ar'+'e\x20pre'+'sent\x20'+'but\x20n'+'one\x20a'+'re\x20cl'+_0x132675(0xbc2)+'ied\x20a'+'s\x20ene'+'mies\x20'+_0x132675(0x837)+'\x20chec'+'k\x20',_0x4d3210['mLdKU']);}}try{if(_0x132675(0xaa)!=='SaoFY'){var _0x363651=window[_0x132675(0x72f)+_0x132675(0x7c1)+'dkit']&&window[_0x132675(0x72f)+_0x132675(0x7c1)+_0x132675(0x41c)]['Runti'+'me'],_0x3bf104=_0x363651&&_0x363651['inter'+'nalWa'+_0x132675(0x84f)+'es']||[],_0xff0aa9={};for(var _0x49c75c=0x11d7+-0x1516+0x33f;_0x49c75c<_0x3bf104['lengt'+'h']&&_0x4d3210[_0x132675(0x1ba)](_0x49c75c,-0x1*-0x195b+0x1f3f*-0x1+0x1584);_0x49c75c++){if('kCgoZ'!==_0x132675(0x92e))_0xe4bb6[_0x132675(0xc57)]=_0x1cb6b8;else{var _0x82e118=_0x3bf104[_0x49c75c][_0x132675(0x125)+'s'][_0x132675(0xb4a)](',')+_0x4d3210['OBANU']+(_0x3bf104[_0x49c75c]['retur'+_0x132675(0xc5a)]||_0x132675(0xa2e));_0xff0aa9[_0x82e118]=(_0xff0aa9[_0x82e118]||0x17dd+-0x14*0xfa+0x1*-0x455)+(-0x65*0x3b+-0x1b10+0x3258);}}_0x5344c7[_0x132675(0x263)+_0x132675(0xbbb)]=_0xff0aa9;}else{var _0x1f85fb=_0xbac6e6[_0x132675(0x3f5)](_0x3302a4);if(!_0x1f85fb)return null;try{return new _0x55f46b(_0x1f85fb[_0x132675(0x816)+'r'],_0x1f85fb[_0x132675(0xaeb)+_0x132675(0x367)],_0x1f85fb[_0x132675(0xa5e)+_0x132675(0x184)]);}catch(_0x12ace1){return null;}}}catch(_0x1a9a2){}return _0x5344c7;}function _0x12a9fe(_0xe90af4,_0x5498bb,_0x711388){var _0x3c8921=_0x1b4785;try{var _0x44d2a4=_0x5a6a9c[_0x5498bb]||[];for(var _0x29f04f=0x201c+-0x228e+0x272*0x1;_0x4d3210[_0x3c8921(0x389)](_0x29f04f,_0x44d2a4['lengt'+'h']);_0x29f04f++){if(_0x44d2a4[_0x29f04f][0x2283+0x1*-0xd04+-0x157e]!==_0x711388)continue;var _0xdc3890=_0x44d2a4[_0x29f04f][-0x23a2+0x265f+-0x1*0x2bd];if(_0x711388[_0x3c8921(0xb8d)+'Of']('obf')===-0x1*0x215b+-0x14d4+0x4ed*0xb){var _0xcfef53=_0x4d3210[_0x3c8921(0x1cb)](_0x4e69d3,_0xe90af4,_0xdc3890,_0x711388);if(!_0xcfef53)return null;_0xcfef53['o']=_0xdc3890,_0xcfef53['k']=_0x711388;var _0x2819f8=_0x1264ae([_0xcfef53]);if(!_0x2819f8['rows'][_0x3c8921(0x17c)+'h'])return null;return _0x2819f8['rows'][-0x162f+-0x9*-0x3b3+0x2*-0x58e];}var _0x2785c4=_0x4d3210[_0x3c8921(0x73e)](_0x28dbcb,_0x4d3210['HwVMy'](_0xe90af4,_0xdc3890),_0x711388);if(_0x4d3210[_0x3c8921(0xad7)](_0x2785c4,undefined))return null;return{'o':_0x4d3210[_0x3c8921(0xb88)]('0x',_0xdc3890['toStr'+_0x3c8921(0x12e)](-0x547*-0x7+0xc4*-0x2+-0x1*0x2359)),'v':_0x2785c4};}}catch(_0x2eff3d){}return null;}function _0x59bcf0(){var _0x5406d0=_0x1b4785,_0x1f23a4={};_0x5e265a['ok']=-0x1*0x13c6+-0x4d8+0x189e,_0x5e265a[_0x5406d0(0x1fe)+'d']=-0x1f36+-0x1*0x727+0x265d,_0x5e265a['lastE'+_0x5406d0(0x8ae)]=null;var _0x2cbf9d=Object[_0x5406d0(0x957)](_0x5a6a9c);for(var _0x194772=0x3ef*0x5+0x1*0x12b3+-0x265e;_0x194772<_0x2cbf9d[_0x5406d0(0x17c)+'h'];_0x194772++){var _0x52c2e8=_0x2cbf9d[_0x194772],_0x43d58f=_0x22c822[_0x52c2e8];if(!_0x43d58f||!_0x43d58f['ptr'])continue;var _0x10428b=_0x5a6a9c[_0x52c2e8]||[],_0x2eec86=[];for(var _0x3812cd=-0x11*-0xf0+-0x1e52+0xe62*0x1;_0x4d3210['Ctmwy'](_0x3812cd,_0x10428b[_0x5406d0(0x17c)+'h']);_0x3812cd++){if(_0x5406d0(0x27f)==='zAVOr'){var _0x15e50b=_0x10428b[_0x3812cd][-0x1eb0+-0x195d+-0x1*-0x380d],_0x536f41=_0x10428b[_0x3812cd][-0x47*0x63+-0x3c8*-0x1+0xe*0x1b1];if(_0x536f41[_0x5406d0(0xb8d)+'Of'](_0x5406d0(0x296))===0x14f6+-0xa3d*0x2+-0x7c){if(_0x5406d0(0x652)===_0x5406d0(0xada))return _0x56f8f4[0x49d*0x4+0x1*-0x1b33+0x8bf]=_0x423f58,_0x420880[-0x8e0*-0x1+-0x16e0+-0x100*-0xe];else{var _0x3e2062=_0x4e69d3(_0x43d58f[_0x5406d0(0x6b3)],_0x15e50b,_0x536f41);if(!_0x3e2062)continue;_0x3e2062['o']=_0x15e50b,_0x3e2062['k']=_0x536f41,_0x2eec86['push'](_0x3e2062);}}else{var _0x38dbc1=_0x28dbcb(_0x4d3210['mroXi'](_0x43d58f[_0x5406d0(0x6b3)],_0x15e50b),_0x536f41);if(_0x4d3210[_0x5406d0(0xb86)](_0x38dbc1,undefined))continue;var _0x59ea55={'o':_0x15e50b,'k':_0x536f41,'v':_0x38dbc1};if(_0x4d3210[_0x5406d0(0x6db)](_0x536f41,'v2')||_0x4d3210[_0x5406d0(0xae7)](_0x536f41,'v3')||_0x536f41==='v4'){var _0x22438c=_0x4d3210[_0x5406d0(0xc24)](_0x536f41,'v2')?-0xe05*0x2+0xe*-0x230+0x3aac:_0x536f41==='v3'?0x1*-0x974+0x4f*0x3b+-0x45f*0x2:-0x49*-0x47+0x3b7+-0x265*0xa,_0x573330=_0x4d3210[_0x5406d0(0x1cb)](_0x359ffa,_0x43d58f[_0x5406d0(0x6b3)],_0x15e50b,_0x22438c);_0x573330&&(_0x59ea55[_0x5406d0(0xf5)]=_0x573330,_0x59ea55['v']=_0x573330[0x1aef+0x1903+-0x33f2]);}_0x2eec86['push'](_0x59ea55);}}else{var _0x5d4637=_0x4d3210['NAkbX']['split']('|'),_0x26413e=-0x1cdf+0x1*-0x727+-0xc02*-0x3;while(!![]){switch(_0x5d4637[_0x26413e++]){case'0':var _0x14cecf=_0x10e9cb['list'][_0x4f54f9];continue;case'1':var _0x1ac91c=_0x4d3210['ubeMW'](_0x22d558,null)&&_0x14cecf['team']===_0xad9a8d;continue;case'2':_0x4f57fd[_0x5406d0(0xb5c)+'Path']();continue;case'3':_0x55e81c>_0x4d3210['taXaa'](_0x4ca846,-0x1c0a*0x1+0x11*-0xc1+-0x12b*-0x23)?(_0x1f449d=_0x30c213+_0x41c029/_0x55e81c*(_0x4439d4-(-0xfc*-0x1e+0x3a6*-0x7+-0x3f8)),_0x273731=_0x4d3210['HwVMy'](_0x19dfe5,_0x29432a/_0x55e81c*(_0x5089fb-(0x12ed+0x4d*0x67+-0x31e2)))):(_0x1f449d=_0x4d3210['zXYik'](_0x5672e5,_0x41c029),_0x273731=_0x2bca19+_0x29432a);continue;case'4':var _0x55e81c=_0x203cda[_0x5406d0(0x3e3)](_0x4d3210[_0x5406d0(0x63e)](_0x41c029*_0x41c029,_0x4d3210[_0x5406d0(0x418)](_0x29432a,_0x29432a)));continue;case'5':_0x2d9e30[_0x5406d0(0x19a)](_0x1f449d,_0x273731,_0x1ac91c?0xb*0x191+-0x4a*0x1f+0x2c1*-0x3:0x167*-0x1b+0x9a2*-0x1+-0x2*-0x17c1+0.20000000000000018,-0x1933*0x1+-0x450+0x1d83,_0x4d3210[_0x5406d0(0xdb)](_0x1b2304['PI'],0x22a8+-0xcc4+-0x15e2));continue;case'6':_0x49e417[_0x5406d0(0x260)]();continue;case'7':var _0x41c029=(_0x14cecf['x']-_0x1f1a1f['feet'][-0x10e6+0x61b*-0x3+0x3*0xbbd])*_0x4998a8,_0x29432a=(_0x14cecf['z']-_0x2265bc['feet'][-0x363*0xb+0xae2+0x1a61])*_0x41b6d4;continue;case'8':_0x59392a++;continue;case'9':_0x41efd9['fillS'+_0x5406d0(0xa56)]=_0x1ac91c?_0x5406d0(0x806)+'6a':_0x5406d0(0xf9)+'74';continue;case'10':var _0x1f449d=_0x4fb9a2,_0x273731=_0x2c965b;continue;}break;}}}if(_0x2eec86[_0x5406d0(0x17c)+'h']){var _0x1f8a21=_0x1264ae(_0x2eec86);_0x1f23a4[_0x52c2e8]=_0x1f8a21[_0x5406d0(0x253)],_0x4ffb14[_0x52c2e8]={'key':_0x1f8a21[_0x5406d0(0x6df)],'sane':_0x1f8a21[_0x5406d0(0x37e)],'checked':_0x1f8a21['check'+'ed'],'keyConsistent':_0x1f8a21[_0x5406d0(0x85b)+'nsist'+_0x5406d0(0x173)],'keySource':_0x1f8a21['keySo'+'urce']};}}return _0x1f23a4;}function _0x1264ae(_0x3f89f3){var _0x22b2d5=_0x1b4785,_0xea29e0=0x30b*0x6+-0x1975+-0x1*-0x733,_0xec74e4=-0x2612+-0x2*0x123a+0x4a86,_0x791493=null;for(var _0xfd4f95=0x1509+0x814+0x1d1d*-0x1;_0x4d3210[_0x22b2d5(0x3f0)](_0xfd4f95,_0x3f89f3['lengt'+'h']);_0xfd4f95++){var _0x3f57cb=_0x3f89f3[_0xfd4f95];if(_0x3f57cb['k'][_0x22b2d5(0xb8d)+'Of']('obf')!==-0x86c+-0x1bf6+0x1231*0x2)continue;_0x3f57cb['v']=_0x471594(_0x3f57cb['k'],_0x3f57cb[_0x22b2d5(0xda)+'n'],_0x3f57cb['keyAt'+_0x22b2d5(0x7d6)+'t0']),_0x3f57cb[_0x22b2d5(0xb98)+'ed']=_0x3f57cb[_0x22b2d5(0x6ed)+'Offse'+'t0'],_0x3f57cb['raw']=_0x4d3210['VlGvQ'](_0x4d3210[_0x22b2d5(0x70d)](_0x4d3210['ByQlf'](_0x4d3210['pzgVC'](_0x4d3210[_0x22b2d5(0x686)](_0x4d3210[_0x22b2d5(0x993)](_0x4d3210[_0x22b2d5(0x6cb)](_0x22b2d5(0x72b),_0x3f57cb[_0x22b2d5(0xda)+'n'])+_0x4d3210[_0x22b2d5(0x3a3)],_0x3f57cb['fake']),_0x3f57cb[_0x22b2d5(0x28e)]?_0x22b2d5(0x8f)+'VE':''),'\x20k0='),_0x3f57cb['keyAt'+_0x22b2d5(0x7d6)+'t0']),_0x4d3210['Yymfn']),_0x3f57cb[_0x22b2d5(0xa7b)]);if(_0x4d3210[_0x22b2d5(0x1e2)](_0x791493,null))_0x791493=_0x3f57cb[_0x22b2d5(0x6ed)+'Offse'+'t0'];_0xec74e4++,_0x255011(_0x3f57cb)?(_0xea29e0++,_0x3f57cb[_0x22b2d5(0x37e)]=!![]):_0x3f57cb['sane']=![],delete _0x3f57cb[_0x22b2d5(0x35d)];}return{'rows':_0x3f89f3,'key':_0x791493,'sane':_0xea29e0,'checked':_0xec74e4,'keyConsistent':_0x1c81f4(_0x3f89f3),'keySource':_0x4d3210['LBBKH']};}function _0x1c81f4(_0x19f73d){var _0x2d336a=_0x1b4785;if(_0x4d3210['FQSHs'](_0x4d3210[_0x2d336a(0xab7)],_0x4d3210[_0x2d336a(0xa4a)])){var _0x521a0e={};for(var _0x224103=-0x2ea+0x2be*0x6+-0xd8a;_0x224103<_0x19f73d[_0x2d336a(0x17c)+'h'];_0x224103++){if(_0x4d3210['tnpNN']===_0x2d336a(0x639))return _0x4d3210['wvOzj'](_0x39cead[_0x2d336a(0xbe3)](_0x4d3210[_0x2d336a(0xc6c)](_0x197d7a,0xa4+0x35*0xa5+-0x2269)),-0x21f4+0x584+0x1cd4);else{var _0x432d19=_0x19f73d[_0x224103];if(_0x432d19['k']['index'+'Of'](_0x4d3210[_0x2d336a(0x520)])!==0x1*-0x1dc5+0x2428+-0x663)continue;if(_0x521a0e[_0x432d19['k']]===undefined)_0x521a0e[_0x432d19['k']]=_0x432d19['keyUs'+'ed'];else{if(_0x521a0e[_0x432d19['k']]!==_0x432d19['keyUs'+'ed'])return![];}}}return!![];}else _0x4f5bee[_0x2d336a(0xb1d)][_0x2d336a(0x278)+'ty']='1';}function _0x255011(_0x3c4bc9){var _0xfa88a6=_0x1b4785,_0x33327b=_0x3c4bc9['v'];if(typeof _0x33327b!==_0xfa88a6(0x2fe)+'r'||!isFinite(_0x33327b))return![];if(_0x3c4bc9['k']===_0xfa88a6(0x9fc))return _0x33327b===-0x1*-0x250c+-0x2*0x17+0x1a*-0x16b||_0x33327b===-0xbd7*0x3+-0xb22+-0x4*-0xbaa;var _0x3a24b7=_0x3c4bc9[_0xfa88a6(0x164)];if(_0x4d3210['ldcpx'](typeof _0x3a24b7,'numbe'+'r')||!_0x4d3210[_0xfa88a6(0x6d0)](isFinite,_0x3a24b7))return!![];if(_0x4d3210[_0xfa88a6(0x8fd)](_0x3c4bc9[_0xfa88a6(0x28e)],0x27f*0x1+0x2c*-0x1b+-0x32*-0xb)){if(_0x4d3210[_0xfa88a6(0xa9b)](_0xfa88a6(0x115),_0x4d3210['OoWvF']))_0x1bd491[_0xfa88a6(0xb23)+_0xfa88a6(0x451)]({'typeName':_0xfa88a6(0x2c3)+_0xfa88a6(0x715),'methodName':_0x2730ec['name'],'params':_0x43408a['wasmP'+_0xfa88a6(0x921)],'returnType':_0x54df94},_0x2b5fbd('set',_0x5c53aa['name']));else return Math['abs'](_0x33327b-_0x3a24b7)<=Math[_0xfa88a6(0xa59)](0x25*0x70+-0x1*-0x15b+-0x118a,_0x4d3210['Jngew'](Math['abs'](_0x3a24b7),-0x11*0x27+-0x218a+0x2421+0.6));}return Math[_0xfa88a6(0xa5a)](_0x33327b)<0x1b0f*0x23b7a+-0xd6c*-0x590dc+-0x4b80d8f6;}function _0x2c8a39(){var _0x3949e8=_0x1b4785,_0x1b963b={'wZHnq':_0x3949e8(0x1d5),'oxSKo':_0x4d3210[_0x3949e8(0xbd7)],'eCwWG':function(_0x3602f5,_0x287f97){var _0x42df00=_0x3949e8;return _0x4d3210[_0x42df00(0xb88)](_0x3602f5,_0x287f97);},'TfIeh':_0x4d3210[_0x3949e8(0x6ac)]},_0x5dd3a6={};try{if(_0x4d3210['wYkNV']===_0x3949e8(0x6ad)){var _0xab2db6=window['Unity'+_0x3949e8(0x7c1)+'dkit']&&window['Unity'+_0x3949e8(0x7c1)+_0x3949e8(0x41c)]['Runti'+'me'];_0x5dd3a6['tag']=_0xab2db6&&_0xab2db6['__sak'+'uraTa'+'g']||null,_0x5dd3a6[_0x3949e8(0x7ee)+_0x3949e8(0xc12)]=!!(_0xab2db6&&_0x3e646b&&_0xab2db6['__sak'+'uraTa'+'g']===_0x3e646b),_0x5dd3a6[_0x3949e8(0xa1d)+'meGam'+'e']=_0xab2db6&&_0xab2db6['_game']?typeof _0xab2db6[_0x3949e8(0x742)]:_0x3949e8(0xbeb),_0x5dd3a6[_0x3949e8(0x95a)+_0x3949e8(0x5e0)+'imeIs'+_0x3949e8(0x7ab)+'ted']=!!(_0xefd364&&_0xefd364[_0x3949e8(0x3e9)+_0x3949e8(0x22f)]&&_0xefd364[_0x3949e8(0x3e9)+'ime']===_0xab2db6),_0x5dd3a6[_0x3949e8(0x95a)+'nRunt'+_0x3949e8(0x254)+'me']=_0xefd364&&_0xefd364['_runt'+_0x3949e8(0x22f)]&&_0xefd364[_0x3949e8(0x3e9)+'ime']['_game']?typeof _0xefd364['_runt'+'ime'][_0x3949e8(0x742)]:_0x4d3210['aJapY'];}else{var _0x360400=(_0x3949e8(0x96f)+'|8|0|'+_0x3949e8(0x300)+_0x3949e8(0xa2a))[_0x3949e8(0x60a)]('|'),_0x44e34d=0x1008*-0x1+0x741+0x8c7;while(!![]){switch(_0x360400[_0x44e34d++]){case'0':_0x4987b0[_0x3949e8(0xb1d)]['textA'+'lign']=_0x1b963b['wZHnq'];continue;case'1':var _0x4987b0=_0x5a9785(_0x1b963b[_0x3949e8(0xb32)],_0x3949e8(0x66e)+'l');continue;case'2':_0x496989['appen'+_0x3949e8(0x315)+'d'](_0x4987b0);continue;case'3':_0x4987b0['style']['minWi'+'dth']='0';continue;case'4':var _0x496989=_0x5cf369(_0x57470d[_0x1d2222][-0x2369+0x494*-0x1+0x1d*0x161]);continue;case'5':_0x2b0100[_0x3949e8(0x39e)][_0x3949e8(0x808)+_0x3949e8(0x9d2)]['sp']=_0x4987b0;continue;case'6':_0x543b3f[_0x3949e8(0x39e)]['appen'+'dChil'+'d'](_0x496989);continue;case'7':_0x4987b0[_0x3949e8(0x554)+'et']['k']=_0x14ba19[_0x5d729f][-0x1a59+-0x17*-0x7d+-0x7*-0x229];continue;case'8':_0x4987b0[_0x3949e8(0xb1d)][_0x3949e8(0x1dc)]='1';continue;case'9':_0x4987b0[_0x3949e8(0x56c)+'onten'+'t']=_0x262357(_0x1ad31d[_0x40d638][-0x10ca+0x296*0x1+0x6b*0x22]);continue;}break;}}}catch(_0x266219){_0x4d3210[_0x3949e8(0x8a1)](_0x3949e8(0xa20),'DsGqp')?(_0x1af387=_0x4aced2[_0x3949e8(0x15b)],_0x260a07=_0x5e4ecb['yaw'],_0x1e4a9b[_0x3949e8(0xbca)+'e']=_0x1b963b['eCwWG'](_0x1b963b['TfIeh']+_0x702174[_0x3949e8(0xaf0)],')')):_0x5dd3a6['error']=String(_0x266219&&_0x266219[_0x3949e8(0x1be)+'ge']||_0x266219);}return _0x5dd3a6;}function _0x42bce1(){var _0x42783a=_0x1b4785,_0x25810e=[_0x42783a(0xc4)+_0x42783a(0x2af)+_0x42783a(0x322),_0x4d3210['LGePn'],_0x42783a(0x843),'unity'+_0x42783a(0x2af)+'nceWr'+_0x42783a(0x1d2)],_0x5eeb69={};for(var _0x5d0828=0x5d*-0xf+-0x4*-0x21e+0x1*-0x305;_0x5d0828<_0x25810e[_0x42783a(0x17c)+'h'];_0x5d0828++){var _0x54e92e=_0x25810e[_0x5d0828],_0x51f5fa=typeof window[_0x54e92e];_0x5eeb69[_0x54e92e]=_0x51f5fa===_0x42783a(0x24d)+_0x42783a(0xb7c)?_0x4d3210[_0x42783a(0xabf)]:_0x51f5fa;}var _0x5663dc=_0x4d3210['OoxVD'](_0x4f7d11);_0x5eeb69['gameS'+'ource']=_0x5e265a[_0x42783a(0xbca)+'e'];try{_0x4d3210[_0x42783a(0xc31)]!==_0x42783a(0x187)?(_0x5eeb69[_0x42783a(0xa58)+'dule']=!!(_0x5663dc&&_0x5663dc[_0x42783a(0x568)+'e']),_0x5eeb69[_0x42783a(0xa66)+'8']=!!(_0x5663dc&&_0x5663dc[_0x42783a(0x568)+'e']&&_0x5663dc['Modul'+'e'][_0x42783a(0x581)+'8']),_0x5eeb69['heapB'+'ytes']=_0x5eeb69[_0x42783a(0xa66)+'8']?_0x5663dc['Modul'+'e'][_0x42783a(0x581)+'8'][_0x42783a(0x17c)+'h']:-0x1cec+-0x497+0x2183*0x1):_0x2709c6=[];}catch(_0x1907f9){_0x5eeb69[_0x42783a(0xa58)+_0x42783a(0x3a4)]=![],_0x5eeb69[_0x42783a(0xa66)+'8']=![],_0x5eeb69['heapB'+_0x42783a(0xbc5)]=-0x3c1+-0x2*-0x102f+-0x1*0x1c9d;}return _0x5eeb69['value'+'Wrapp'+'er']=typeof _0x2f016e,_0x5eeb69;}function _0x18703b(){var _0x2120d1=_0x1b4785,_0x12e991=('6|1|0'+_0x2120d1(0xa48)+'4|5')[_0x2120d1(0x60a)]('|'),_0x459d05=0x1*0x1f67+0x2082+-0x3fe9*0x1;while(!![]){switch(_0x12e991[_0x459d05++]){case'0':if(!_0x1c4ed2)return _0x57881f;continue;case'1':var _0x1c4ed2=_0x1feba7();continue;case'2':for(var _0x2b8797 in _0x1c4ed2['float'+'s'])_0x57881f['Mouse'+_0x2120d1(0x2d6)+_0x2b8797]=_0x1c4ed2[_0x2120d1(0x2e9)+'s'][_0x2b8797];continue;case'3':_0x57881f[_0x4d3210[_0x2120d1(0x482)]]=_0x1c4ed2[_0x2120d1(0x57c)+_0x2120d1(0x715)];continue;case'4':if(_0x1c4ed2['camer'+'a'])_0x57881f[_0x2120d1(0x2c3)+_0x2120d1(0x2d6)+'camer'+'a']=_0x1c4ed2[_0x2120d1(0xadd)+'a'];continue;case'5':return _0x57881f;case'6':var _0x57881f={};continue;}break;}}function _0x4419ed(_0xf24450){var _0x59ffc7=_0x1b4785,_0x3e6891={};for(var _0x365659 in _0xf24450){if(_0x59ffc7(0x492)===_0x59ffc7(0x492)){var _0x2e1792=_0xf24450[_0x365659];for(var _0x3a4efd=0x2172+-0x2552+0x3e0;_0x4d3210[_0x59ffc7(0x5b6)](_0x3a4efd,_0x2e1792['lengt'+'h']);_0x3a4efd++){_0x3e6891[_0x4d3210['vHHjp'](_0x365659,'+0x')+_0x2e1792[_0x3a4efd]['o'][_0x59ffc7(0x356)+_0x59ffc7(0x12e)](-0x16f+-0x79d+0x91c)]=_0x2e1792[_0x3a4efd]['v'];}}else try{return _0x4d3210[_0x59ffc7(0x312)](_0x266b85);}catch(_0x6bfe37){return{'version':_0x2990de,'when':new _0x45709f()['toISO'+'Strin'+'g'](),'elapsedMs':_0x219def[_0x59ffc7(0x91b)]()-_0x333762,'host':_0x3a5026,'uwmk':!!(_0x7be031[_0x59ffc7(0x72f)+'WebMo'+_0x59ffc7(0x41c)]&&_0x2ea2c1['Unity'+_0x59ffc7(0x7c1)+_0x59ffc7(0x41c)][_0x59ffc7(0x844)+'me']),'il2CppContext':![],'arm':_0x54cc37,'hooksTotal':_0x312d8d['lengt'+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x58a97e(_0x6bfe37&&_0x6bfe37['messa'+'ge']||_0x6bfe37)};}}return _0x3e6891;}function _0xa5ef5d(_0xc441,_0x3c915b){var _0x39f58e=_0x1b4785;if(_0x4d3210[_0x39f58e(0x910)](_0xc441,'speed')){_0x49da82(_0x3c915b&&_0x4d3210[_0x39f58e(0x1e2)](typeof _0x3c915b['on'],'boole'+'an')?_0x3c915b['on']:_0xde72d1['on'],_0x3c915b&&typeof _0x3c915b[_0x39f58e(0x85d)+'r']==='numbe'+'r'?_0x3c915b['facto'+'r']:_0xde72d1['facto'+'r']);return;}if(_0x4d3210[_0x39f58e(0x28c)](_0xc441,_0x39f58e(0xa0)+_0x39f58e(0x1e1)))return;var _0x20d187=_0x59bcf0(),_0x25a825=_0x4d3210[_0x39f58e(0x64c)](_0x4419ed,_0x20d187),_0x484b21=_0x18703b();for(var _0x4ed449 in _0x484b21)_0x25a825[_0x4ed449]=_0x484b21[_0x4ed449];if(!_0x263deb){_0x263deb=_0x25a825,_0x46e0e3=[],_0x52c86e(_0x4d3210[_0x39f58e(0x593)],{'report':_0x23f7f3()});return;}_0x46e0e3=[];for(var _0x4e0b77 in _0x25a825){var _0x21c79b=_0x263deb[_0x4e0b77],_0x216006=_0x25a825[_0x4e0b77];if(_0x21c79b!==_0x216006)_0x46e0e3[_0x39f58e(0x558)](_0x4d3210[_0x39f58e(0x67f)](_0x4d3210[_0x39f58e(0xbf1)](_0x4d3210[_0x39f58e(0xa46)](_0x4e0b77,':\x20')+_0x21c79b,_0x4d3210['OBANU']),_0x216006));}_0x263deb=_0x25a825,_0x4d3210['xnaXr'](_0x52c86e,_0x4d3210['JwwkI'],{'report':_0x23f7f3()});}var _0x4f8894=null;function _0x4e60dc(){var _0x3aea13=_0x1b4785,_0xc39a49={'qRJBD':_0x4d3210['SBSrc'],'ODPdC':_0x4d3210['pLsqP'],'CeHtB':_0x4d3210[_0x3aea13(0x536)]};if(_0x4f8894)return _0x4f8894;try{if(_0x4d3210[_0x3aea13(0x697)]===_0x4d3210[_0x3aea13(0x697)]){if(!document[_0x3aea13(0x39e)]||!document[_0x3aea13(0x39e)][_0x3aea13(0x950)+_0x3aea13(0x315)+'d'])return null;if(!document['getEl'+_0x3aea13(0x717)+_0x3aea13(0x5d4)](_0x4d3210[_0x3aea13(0x44b)])){if(_0x3aea13(0x7ac)!==_0x3aea13(0xa60)){var _0x179622=document[_0x3aea13(0x7c8)+'eElem'+_0x3aea13(0x173)](_0x4d3210[_0x3aea13(0xa52)]);_0x179622['id']='sakur'+'a-sw-'+_0x3aea13(0x2de)+'ss',_0x179622['textC'+_0x3aea13(0x276)+'t']=_0x3aea13(0xacd)+'ra-sw'+_0x3aea13(0x3aa)+_0x3aea13(0xc3c)+_0x3aea13(0x626)+'l}',(document[_0x3aea13(0x179)]||document[_0x3aea13(0x5e6)+'entEl'+_0x3aea13(0x717)])[_0x3aea13(0x950)+'dChil'+'d'](_0x179622);}else _0x50c148=_0x5da13d['keys'](_0x4b41eb)['slice'](-0x1105*0x1+-0xb*-0x25f+-0xa*0xe8,-0x21d8+0x2496+0x71*-0x6);}var _0x33153f=document[_0x3aea13(0x7c8)+'eElem'+_0x3aea13(0x173)](_0x4d3210[_0x3aea13(0x448)]);_0x33153f['id']=_0x3aea13(0x7c6)+'a-sw-'+'hud',_0x33153f[_0x3aea13(0xb1d)][_0x3aea13(0x6e0)+'xt']=_0x4d3210['lJXGl'](_0x4d3210[_0x3aea13(0x686)](_0x3aea13(0x319)+'ion:f'+_0x3aea13(0x44a)+_0x3aea13(0x8f1)+_0x3aea13(0x1cd)+_0x3aea13(0x311)+_0x3aea13(0x8e9)+_0x3aea13(0x747)+_0x3aea13(0x7c7)+'47483'+'647;d'+_0x3aea13(0x313)+_0x3aea13(0x204)+'x;fle'+_0x3aea13(0x27b)+_0x3aea13(0x638)+'n:col'+'umn;g'+_0x3aea13(0xa1f)+'x;',_0x4d3210[_0x3aea13(0x8a)])+_0x4d3210[_0x3aea13(0x89e)],_0x4d3210[_0x3aea13(0x7d4)]);var _0x373a7f='<div\x20'+_0x3aea13(0x9ff)+'a=\x22st'+_0x3aea13(0x4ae)+'yle=\x22'+_0x3aea13(0x93b)+_0x3aea13(0x599)+'a99;m'+_0x3aea13(0x5aa)+'dth:2'+'90px;'+_0x3aea13(0x750)+'iv>';_0x33153f[_0x3aea13(0x621)+_0x3aea13(0x9b3)]=_0x4d3210[_0x3aea13(0x3d6)](_0x4d3210['guJmC'](_0x4d3210[_0x3aea13(0x243)](_0x4d3210[_0x3aea13(0x59f)](_0x4d3210[_0x3aea13(0x994)](_0x4d3210[_0x3aea13(0x737)](_0x4d3210['HowNN'](_0x4d3210[_0x3aea13(0x1ce)]+_0x4d3210[_0x3aea13(0xa99)]+_0x10dc48+_0x4d3210[_0x3aea13(0x14b)],_0x4d3210[_0x3aea13(0x3e2)]),_0x3aea13(0x93b)+':#f7e'+'ef5;b'+'order'+'-radi'+'us:6p'+'x;pad'+_0x3aea13(0x562)+'2px\x208'+'px;cu'+_0x3aea13(0xab5)+'point'+_0x3aea13(0x74c)+_0x3aea13(0x139)+'herit'+_0x3aea13(0x9f)+_0x3aea13(0x9aa)+_0x3aea13(0x985)+_0x3aea13(0x68a)+'>'),_0x3aea13(0x64f)+_0x3aea13(0xc16)+'a-a=\x22'+'fx\x22\x20t'+_0x3aea13(0x8af)+_0x3aea13(0x37d)+_0x3aea13(0x7a4)+'=\x221\x22\x20'+'max=\x22'+_0x3aea13(0x127)+_0x3aea13(0xae3)+_0x3aea13(0x2b2)+_0x3aea13(0xbe6)+'\x222\x22\x20s'+_0x3aea13(0x7a1)+_0x3aea13(0xacf)+'h:92p'+_0x3aea13(0x5bd)+_0x3aea13(0x443)+_0x3aea13(0x324)),_0x10dc48)+_0x3aea13(0x475)+('<span'+'\x20data'+'-a=\x22f'+_0x3aea13(0xb38)+'yle=\x22'+_0x3aea13(0x93b)+_0x3aea13(0xaba)+'9c9;m'+'in-wi'+_0x3aea13(0x507)+'0px;\x22'+_0x3aea13(0x2d1)+_0x3aea13(0x959)+'n>')+(_0x3aea13(0x711)+_0x3aea13(0x6e3)+'ta-a='+_0x3aea13(0x2b4)+_0x3aea13(0x25a)+_0x3aea13(0x38b)+_0x3aea13(0x671)+_0x3aea13(0x7c9)+_0x3aea13(0x85f)+'arent'+_0x3aea13(0x3a9)+_0x3aea13(0x817)+'x\x20sol'+'id\x20rg'+_0x3aea13(0x30e)+_0x3aea13(0xbc)+_0x3aea13(0x780)+_0x3aea13(0x904))+_0x4d3210['tYHZA'],_0x4d3210['yKTXD'])+(_0x3aea13(0x93b)+_0x3aea13(0x3cb)+_0x3aea13(0x629)+'order'+_0x3aea13(0x878)+_0x3aea13(0x5e3)+'x;pad'+_0x3aea13(0x562)+'2px\x207'+_0x3aea13(0x2a2)+_0x3aea13(0xab5)+_0x3aea13(0xc1a)+'er;fo'+'nt:in'+'herit'+_0x3aea13(0x534)+_0x3aea13(0x6f5)+'utton'+'>')+('<butt'+_0x3aea13(0x6e3)+_0x3aea13(0x53e)+_0x3aea13(0x900)+_0x3aea13(0x1ed)+'le=\x22m'+_0x3aea13(0x6a2)+_0x3aea13(0x1fd)+_0x3aea13(0x108)+_0x3aea13(0xb47)+'groun'+_0x3aea13(0x17e)+'nspar'+_0x3aea13(0x342)+_0x3aea13(0xaf0)+_0x3aea13(0x2cd)+_0x3aea13(0xc04)+'\x20rgba'+'(255,'+'143,1'+'77,.4'+_0x3aea13(0x7c3)),_0x4d3210[_0x3aea13(0xbe4)])+_0x4d3210[_0x3aea13(0x990)]+(_0x3aea13(0xb7)+'data-'+_0x3aea13(0x504)+'\x22\x20sty'+_0x3aea13(0x689)+'olor:'+_0x3aea13(0x809)+_0x3aea13(0x735)+_0x3aea13(0x168)+'th:29'+'0px;\x22'+'></di'+'v>'),_0x4d3210['trxFH']),_0x33153f[_0x3aea13(0x621)+_0x3aea13(0x9b3)]=_0x373a7f;var _0x4bdc99=function(_0x535c2f){var _0x566221=_0x3aea13;if(_0x566221(0x826)!==_0x566221(0x826))try{if(!_0x5d2fdf[_0x566221(0x69b)])return;var _0x564333=_0x1f06ab();_0x58df1e[_0x566221(0x69b)][_0x566221(0xb1d)]['opaci'+'ty']=_0x2b61d2[_0x566221(0xb8f)]?'1':_0x564333?'.8':_0xc39a49['qRJBD'],_0x183ba3[_0x566221(0x69b)][_0x566221(0x4c6)]=_0x564333?_0x566221(0x445)+_0x566221(0xaf2)+'llWar'+'z\x20(In'+'sert)':_0xc39a49[_0x566221(0xbf2)];}catch(_0x37193d){}else return _0x33153f[_0x566221(0x47d)+_0x566221(0x8d)+_0x566221(0x166)](_0x4d3210['Hpked'](_0x566221(0x841)+'-a=\x22',_0x535c2f)+'\x22]');},_0x38a2ee=_0x4bdc99('st'),_0x527ed3=_0x4d3210['nDrVQ'](_0x4bdc99,'st2'),_0x253aa6=_0x4d3210[_0x3aea13(0x75c)](_0x4bdc99,'sp'),_0x22741b=_0x4d3210[_0x3aea13(0x13c)](_0x4bdc99,'fx'),_0x103f34=_0x4d3210[_0x3aea13(0x6d0)](_0x4bdc99,'fv'),_0x43b4f4=_0x4bdc99(_0x4d3210[_0x3aea13(0x935)]);if(_0x253aa6)_0x253aa6[_0x3aea13(0xae1)+'ck']=function(){_0x49da82(!_0xde72d1['on'],_0xde72d1['facto'+'r']);};if(_0x22741b)_0x22741b['oninp'+'ut']=function(){var _0x1408f2=_0x3aea13;_0x4d3210['wQfal'](_0x49da82,_0xde72d1['on'],_0x4d3210[_0x1408f2(0x13c)](parseFloat,_0x22741b['value'])||0x8fe*0x1+0x1e0c+0x1*-0x2709);};if(_0x4d3210[_0x3aea13(0x513)](_0x4bdc99,_0x3aea13(0x5f0)))_0x4d3210[_0x3aea13(0x3b9)](_0x4bdc99,_0x4d3210[_0x3aea13(0x2a9)])['oncli'+'ck']=function(){var _0x377435=_0x3aea13,_0x14ac1f={'YrqUr':_0x377435(0x844)+_0x377435(0x46a)+_0x377435(0x189)+'lugin'+_0x377435(0x2ce)+'ailab'+'le'};if('immPx'!==_0x377435(0x22e)){_0x1cebc3['error']=_0x14ac1f['YrqUr'];return;}else _0xa5ef5d(_0xc39a49[_0x377435(0x6f8)]);};var _0x13c6f9=_0x4d3210[_0x3aea13(0x64c)](_0x4bdc99,_0x3aea13(0x502));if(_0x13c6f9)_0x13c6f9['oncli'+'ck']=function(){var _0x5b66ce=_0x3aea13;if(!_0x442d4e['on'])_0x27c5fc(!![],![]);else{if(_0x442d4e['boxes'])_0x4d3210[_0x5b66ce(0xfe)](_0x27c5fc,![],![]);else{if(_0xf06a84())_0x27c5fc(!![],!![]);else _0x4d3210[_0x5b66ce(0x40c)](_0x27c5fc,![],![]);}}};if(_0x4d3210['AUkBq'](_0x4bdc99,_0x4d3210['FoeTR']))_0x4d3210['qvPXN'](_0x4bdc99,_0x4d3210[_0x3aea13(0xa7d)])['oncli'+'ck']=function(){var _0x446637=_0x3aea13;if(!_0x43b4f4)return;var _0x6be6d5=_0x43b4f4[_0x446637(0xb1d)][_0x446637(0x4e9)+'ay']===_0x446637(0xbeb);_0x43b4f4['style'][_0x446637(0x4e9)+'ay']=_0x6be6d5?'':_0x446637(0xbeb),_0x4d3210['naKzd'](_0x4bdc99,_0x446637(0x156))[_0x446637(0x56c)+_0x446637(0x276)+'t']=_0x6be6d5?'-':'+';};return document[_0x3aea13(0x39e)][_0x3aea13(0x950)+'dChil'+'d'](_0x33153f),_0x4f8894={'el':_0x33153f,'st':_0x38a2ee,'st2':_0x527ed3,'sp':_0x253aa6,'fx':_0x22741b,'fv':_0x103f34,'esp':_0x13c6f9},_0x4f8894;}else _0x39d987[_0x3aea13(0xa58)+'dule']=!!(_0x531023&&_0x13a428[_0x3aea13(0x568)+'e']),_0x2f505e[_0x3aea13(0xa66)+'8']=!!(_0x93dc46&&_0x258661[_0x3aea13(0x568)+'e']&&_0x18f12d[_0x3aea13(0x568)+'e']['HEAPU'+'8']),_0x2ad947['heapB'+_0x3aea13(0xbc5)]=_0x16c3d4['heapU'+'8']?_0x5c15ea['Modul'+'e']['HEAPU'+'8']['lengt'+'h']:0x3*0x72b+-0xa67+-0x1d*0x62;}catch(_0x407b5b){return console[_0x3aea13(0x463)](_0x3aea13(0xaad)+'kura]'+'\x20in-f'+_0x3aea13(0xbfe)+_0x3aea13(0x119)+_0x3aea13(0x5dc)+'ed',_0x4d3210[_0x3aea13(0xd1)](_0x3aea13(0x93b)+':',_0x10dc48),_0x407b5b),null;}}function _0xf06a84(){var _0xf71e3f=_0x1b4785;try{var _0x3a1385=_0x1e0751();return!!(_0x3a1385&&_0x4fb861['ident'+_0xf71e3f(0xc09)]);}catch(_0x501e27){return![];}}function _0x2278c2(){var _0x11d44d=_0x1b4785;if(_0x4d3210['XifkN'](_0x11d44d(0x28a),_0x4d3210[_0x11d44d(0x758)])){_0x851508[_0x5cfc1d]='0x'+_0x3dcb74[_0x84ef32][_0x11d44d(0x6b3)]['toStr'+_0x11d44d(0x12e)](0x22c2+-0x22f1+0x15*0x3);if(_0x2e8412[_0x5810c4][_0x11d44d(0x3b5)+_0x11d44d(0x234)])_0x5cf393[_0x11d44d(0x558)](_0xe2733b);}else try{if('PUyyT'!==_0x4d3210[_0x11d44d(0x52a)]){var _0x577af5=_0x4f8894&&_0x4f8894['esp'];if(!_0x577af5)return;if(_0x442d4e[_0x11d44d(0x77f)]&&!_0x4d3210['nrEQC'](_0xf06a84))_0x442d4e['boxes']=![];var _0x224b7f=!_0x442d4e['on']?_0x11d44d(0x3c4)+'ff':_0x442d4e[_0x11d44d(0x77f)]?_0x11d44d(0x5a5)+_0x11d44d(0x275):_0x11d44d(0x8e1)+'ap';if(_0x224b7f!==_0x577af5[_0x11d44d(0x56c)+_0x11d44d(0x276)+'t'])_0x577af5[_0x11d44d(0x56c)+'onten'+'t']=_0x224b7f;_0x577af5['style'][_0x11d44d(0x588)+_0x11d44d(0xbe3)]=_0x442d4e['on']?_0x10dc48:'trans'+_0x11d44d(0xe0)+'t',_0x577af5[_0x11d44d(0xb1d)]['color']=_0x442d4e['on']?_0x4d3210[_0x11d44d(0xaae)]:_0x4d3210[_0x11d44d(0xc30)];}else _0x1c63bd['textC'+_0x11d44d(0x276)+'t']=_0x2df853[_0x11d44d(0x2bd)]&&_0x560c1c['diff']['lengt'+'h']?_0x4d3210['vjlnl']+_0x3189e6[_0x11d44d(0x2bd)][_0x11d44d(0xb4a)](',\x20'):'F9\x20tw'+'ice\x20w'+'hile\x20'+'walki'+_0x11d44d(0xb10)+'sprin'+_0x11d44d(0x97c)+_0x11d44d(0x589)+_0x11d44d(0x97b)+_0x11d44d(0x33b)+_0x11d44d(0x31b)+_0x11d44d(0x82a)+'ld\x20is'+_0x11d44d(0x31b)+'h.';}catch(_0x2ee82a){}}function _0x27c5fc(_0xd09e3a,_0x49ff90){var _0x567c3f=_0x1b4785;_0x442d4e['on']=!!_0xd09e3a,_0x442d4e[_0x567c3f(0x77f)]=!!_0x49ff90,_0x2278c2();try{var _0x2eeb9c=_0x4d3210['TJebW'](_0x3c36ed);if(_0x2eeb9c&&_0x2eeb9c['el'])_0x2eeb9c['el']['style']['displ'+'ay']=_0x442d4e['on']?'':_0x4d3210[_0x567c3f(0x649)];var _0x54a608=_0xca0c16;if(_0x54a608&&_0x54a608['cv'])_0x54a608['cv']['style'][_0x567c3f(0x4e9)+'ay']=_0x442d4e['on']&&_0x442d4e['boxes']?'':'none';}catch(_0x3471c0){}}var _0x2562d6=-0x734+-0x2193+0x28c9;function _0x49da82(_0xf2f793,_0x6027bb){var _0x1e69ac=_0x1b4785;if(_0x4d3210['nkRiO'](_0x1e69ac(0x643),_0x4d3210[_0x1e69ac(0x1f6)])){var _0x45f6a1=_0xde72d1['on'];_0xde72d1['on']=!!_0xf2f793;if(_0xde72d1['on']&&!_0x45f6a1&&(_0x6027bb===undefined||_0x4d3210[_0x1e69ac(0x910)](_0x6027bb,null)||_0x4d3210[_0x1e69ac(0xba2)](Number(_0x6027bb),0x49*-0x67+0x73c*-0x5+0x418c))){if(_0x1e69ac(0x83d)!==_0x4d3210[_0x1e69ac(0xb57)]){var _0x35d9ea=_0xf6725e[_0x1e69ac(0x9f2)];if(_0x35d9ea&&_0x4d3210[_0x1e69ac(0xa3)](_0x35d9ea[_0x1e69ac(0x75f)+'ura'],_0x3688f4)&&_0x4d3210['ctYFs'](_0x35d9ea['kind'],_0x4d3210['SIfSj']))_0x49bae8(_0x35d9ea['cmd'],_0x35d9ea[_0x1e69ac(0x13b)]);}else _0x6027bb=_0x2562d6;}_0xde72d1[_0x1e69ac(0x85d)+'r']=Math[_0x1e69ac(0xb40)](_0xde72d1['max'],Math[_0x1e69ac(0xa59)](_0xde72d1[_0x1e69ac(0xb40)],Number(_0x6027bb)||-0xd3f*0x1+0x13ef+0x3b*-0x1d));if(!_0xde72d1['on'])_0x5d4b2c={};var _0x31929f=_0x4e60dc();if(_0x31929f){if(_0x31929f['sp']){if('LgtqH'==='LgtqH')_0x31929f['sp'][_0x1e69ac(0x56c)+_0x1e69ac(0x276)+'t']=_0xde72d1['on']?_0x4d3210['DJxdR']:_0x4d3210[_0x1e69ac(0x376)],_0x31929f['sp'][_0x1e69ac(0xb1d)]['backg'+_0x1e69ac(0xbe3)]=_0xde72d1['on']?_0x10dc48:'trans'+_0x1e69ac(0xe0)+'t',_0x31929f['sp'][_0x1e69ac(0xb1d)]['color']=_0xde72d1['on']?_0x1e69ac(0x7fd)+'1b':'#f7ee'+'f5';else return _0x391a47[_0x1e69ac(0x16a)];}if(_0x31929f['fx'])_0x31929f['fx'][_0x1e69ac(0xac7)]=String(_0xde72d1['facto'+'r']);if(_0x31929f['fv'])_0x31929f['fv'][_0x1e69ac(0x56c)+_0x1e69ac(0x276)+'t']=_0xde72d1[_0x1e69ac(0x85d)+'r']['toFix'+'ed'](-0x2*-0xc50+-0x10e*-0x11+-0x2a8d)+'x';}}else _0x4d3210[_0x1e69ac(0x380)](_0x3f73c2,!![]);}function _0xfbbb1b(_0x3cb50c){var _0x5b1e8d=_0x1b4785,_0x218794=_0x4d3210['nrEQC'](_0x4e60dc);if(!_0x218794||!_0x218794['st'])return;try{if(!_0x157ac9()&&!_0xa632df){if(_0x218794['el'])_0x218794['el'][_0x5b1e8d(0xb1d)][_0x5b1e8d(0x4e9)+'ay']='none';return;}if(_0x218794['el'])_0x218794['el']['style'][_0x5b1e8d(0x4e9)+'ay']='';var _0x4752c7=Object['keys'](_0x3cb50c&&_0x3cb50c[_0x5b1e8d(0xb9)+_0x5b1e8d(0x9a4)]||{})[_0x5b1e8d(0x17c)+'h'],_0x2cf33b=_0x3cb50c&&_0x3cb50c['esp']||null,_0x339f63=_0x2cf33b?_0x2cf33b['enemy'+'Count']||-0x1dac+0x124+-0x2*-0xe44:0x259d*0x1+0x20c8+-0x1*0x4665,_0x1b7e68=_0x2cf33b?_0x2cf33b[_0x5b1e8d(0x50b)+'unt']||-0x47e+-0x836+0xcb4:-0x7ab+-0x15ae+0x1d59,_0x59fe95=_0x893716?_0x4d3210[_0x5b1e8d(0xb01)](_0x4d3210[_0x5b1e8d(0x95e)](_0x893716[_0x5b1e8d(0x816)+'r'][_0x5b1e8d(0xa5e)+_0x5b1e8d(0x184)],0x1e0f7d+-0xd5*0x16eb+-0xd15*-0x62)[_0x5b1e8d(0x657)+'ed'](-0x6c9+-0xb*0x363+-0x2c0a*-0x1),'MB'):_0x5b1e8d(0xbba)+'m',_0x9b51b0=_0x4d3210['eyczM'](_0x4d3210[_0x5b1e8d(0x919)](_0x4d3210[_0x5b1e8d(0xa3a)]('v'+(_0x3cb50c&&_0x3cb50c[_0x5b1e8d(0x43b)+'on']||_0x21f2bf)+(_0x5b1e8d(0x71c)+_0x5b1e8d(0x8d3))+(_0x3cb50c&&_0x3cb50c['hooks'+_0x5b1e8d(0x70c)+'ed']||0x1*0x1c90+0x314*0x3+-0x3b*0xa4),'/')+(_0x3cb50c&&_0x3cb50c[_0x5b1e8d(0x8b)+_0x5b1e8d(0x6cd)]||-0xd2*-0x2+-0x15c7+0x1423),_0x4d3210[_0x5b1e8d(0x4d5)])+_0x4752c7+_0x4d3210[_0x5b1e8d(0x2f9)]+_0x59fe95,_0x5b1e8d(0x1a3)+_0x5b1e8d(0x962))+_0x2289af;_0x218794['st'][_0x5b1e8d(0x56c)+_0x5b1e8d(0x276)+'t']=_0x9b51b0;var _0x2a4a9c=_0x218794[_0x5b1e8d(0x7e7)];if(_0x2a4a9c){if(_0x4d3210[_0x5b1e8d(0xa07)]('LTvni',_0x5b1e8d(0x9af))){if(!_0xbb3483||!_0x4aea04)return null;var _0x2299b6=new _0x52e6a1(_0x27e9d3)[_0x5b1e8d(0xadb)+'assNa'+'me']();return _0x2299b6===_0xa1c08d?null:_0x2299b6;}else _0x2a4a9c[_0x5b1e8d(0x56c)+'onten'+'t']=_0x339f63>-0x2*0x1209+0x14b3*-0x1+-0x1*-0x38c5?_0x5b1e8d(0x285)+_0x5b1e8d(0x305)+_0x339f63+(_0x1b7e68?_0x5b1e8d(0x82)+_0x1b7e68+'\x20bots':'')+(_0x2cf33b&&_0x2cf33b[_0x5b1e8d(0xadd)+'a']?_0x5b1e8d(0x666)+'\x20'+_0x2cf33b['camer'+'aFrom']:_0x4d3210['FqCaY']):_0x5b1e8d(0x949)+'emies'+_0x5b1e8d(0x730)+_0x5b1e8d(0xb20)+'y?)\x20\x20'+'cam\x20'+(_0x2cf33b&&_0x2cf33b['camer'+'a']?_0x2cf33b['camer'+_0x5b1e8d(0x16b)]:'-'),_0x2a4a9c['style'][_0x5b1e8d(0x93b)]=_0x339f63>-0x4d*0x57+0x22a5+0x46*-0x1f?_0x4d3210[_0x5b1e8d(0x5c4)]:_0x5b1e8d(0x809)+'99';}}catch(_0x26fc9a){}}window['addEv'+_0x1b4785(0x1e3)+_0x1b4785(0x740)+'r'](_0x4d3210['JEdSj'],function(_0x114145){var _0x44ae45=_0x1b4785,_0x574a31={'UqUyu':function(_0x482be4){return _0x482be4();}};if(_0x4d3210['Inqkf']===_0x44ae45(0xb5a)){var _0x5e56cd=_0x1be056[_0x2c0498[_0x214925]],_0x378736=_0x4d3210['iAues'](_0x5ee52f,'Photo'+_0x44ae45(0x308)+_0x44ae45(0xbc7)+'nc',_0x5e56cd['ptr']);_0x378736[_0x44ae45(0x6ce)]=_0x5e56cd[_0x44ae45(0x6ce)],_0x378736['first'+'SeenM'+'s']=_0x4d3210[_0x44ae45(0x8d1)](_0x5e56cd[_0x44ae45(0x1c3)+_0x44ae45(0x87e)],_0x472af2),_0x378736['isLoc'+'al']=!!_0x4956f9&&_0x378736['refs'][_0x44ae45(0x5ca)]==='0x'+_0x3b57f5[_0x44ae45(0x356)+_0x44ae45(0x12e)](0x441+-0x8b*-0x1+0x12f*-0x4);if(_0x378736[_0x44ae45(0x18b)][_0x44ae45(0x874)+'h']){var _0x48db69=_0x4c9b27(_0x378736[_0x44ae45(0x18b)]['healt'+'h'],-0x1329+-0xd4*-0x17+0x2d);_0x378736['healt'+'h']=_0x4d3210['TupyG'](_0x3832e6,_0x48db69,_0x44ae45(0x81)+_0x44ae45(0x8d0)+'pt',_0x44ae45(0x4ab));}_0x4775c1[_0x44ae45(0x103)+'rs']['push'](_0x378736);}else{if(!_0x114145)return;try{if(_0x114145['code']==='F9'){_0x114145[_0x44ae45(0xa95)+_0x44ae45(0x25f)+'ault'](),_0xa5ef5d(_0x44ae45(0xa0)+_0x44ae45(0x1e1));return;}if(_0x4d3210['uMovh'](_0x114145['code'],'F7')){_0x114145[_0x44ae45(0xa95)+_0x44ae45(0x25f)+_0x44ae45(0x572)](),_0x49da82(!_0xde72d1['on'],_0xde72d1[_0x44ae45(0x85d)+'r']);return;}if(_0x114145[_0x44ae45(0x3dc)]==='F8'){_0x114145[_0x44ae45(0xa95)+_0x44ae45(0x25f)+_0x44ae45(0x572)](),_0x4d3210['wioaB'](_0x49da82,_0xde72d1['on'],_0x4d3210['guJmC'](_0xde72d1['facto'+'r'],-0x1*-0xf92+-0x1a53+0xac1+0.5));return;}if(_0x114145[_0x44ae45(0x3dc)]==='F6'){_0x114145['preve'+'ntDef'+'ault'](),_0x4d3210[_0x44ae45(0x757)](_0x49da82,_0xde72d1['on'],_0xde72d1[_0x44ae45(0x85d)+'r']-(0x5e*-0x13+0x8f0+-0x2*0xfb+0.5));return;}if(_0x114145['code']===_0x44ae45(0x5ed)+'t'){_0x114145[_0x44ae45(0xa95)+_0x44ae45(0x25f)+_0x44ae45(0x572)](),_0x2b899c(!_0x3c9210[_0x44ae45(0xb8f)]);return;}if(_0x114145[_0x44ae45(0x3dc)]===_0x4d3210['aAHeB']){if(_0x4d3210[_0x44ae45(0x10b)]===_0x4d3210[_0x44ae45(0xb2b)])_0x3d7ee8(!_0x1e8ffd()),_0x574a31[_0x44ae45(0xbce)](_0x22f861);else{_0x114145[_0x44ae45(0xa95)+'ntDef'+_0x44ae45(0x572)](),_0x4fe0c4['fov']=Math['min'](0x7*-0x226+0x6*0x418+-0x47d*0x2,_0x4fe0c4[_0x44ae45(0x16a)]+(0x1db5+-0x1*-0x1d2a+-0x3add)),_0x13e9cb();return;}}if(_0x4d3210['cYCmV'](_0x114145[_0x44ae45(0x3dc)],'Brack'+'etLef'+'t')){_0x114145[_0x44ae45(0xa95)+_0x44ae45(0x25f)+_0x44ae45(0x572)](),_0x4fe0c4[_0x44ae45(0x16a)]=Math['max'](-0xc7a+0x1421+-0x789,_0x4d3210[_0x44ae45(0x212)](_0x4fe0c4[_0x44ae45(0x16a)],0x2*-0x11c2+-0xa15+0x2d9b)),_0x4d3210[_0x44ae45(0x45f)](_0x13e9cb);return;}}catch(_0x35cbeb){}}},!![]);var _0x442d4e={'on':!![],'span':0x50,'boxes':![]};function _0x1feba7(){var _0x1bf42f=_0x1b4785,_0x2c6fcb=_0x1461a8[_0x1bf42f(0x3c3)+_0x1bf42f(0x308)+_0x1bf42f(0xbc7)+'nc']||{},_0x2116c7=Object[_0x1bf42f(0x957)](_0x2c6fcb);for(var _0x126542=0x11e5*0x1+0x9d*-0x2+-0x10ab;_0x126542<_0x2116c7['lengt'+'h'];_0x126542++){var _0x16f405=_0x2c6fcb[_0x2116c7[_0x126542]][_0x1bf42f(0x6b3)],_0x2eee09=_0x28dbcb(_0x4d3210[_0x1bf42f(0x969)](_0x16f405,-0x118d+0xf7c+0x241),_0x1bf42f(0x162));if(!_0x2eee09)continue;var _0x3a84c2=_0x5a6a9c['Mouse'+_0x1bf42f(0x715)]||[],_0x5c41e5={'mouseLook':'0x'+(_0x2eee09>>>-0x2ac+0x684+-0x3d8)[_0x1bf42f(0x356)+_0x1bf42f(0x12e)](-0x3*-0x2b9+-0x151c+0xd01*0x1),'floats':{},'camera':null,'vec2':null};for(var _0x2badf4=0xdc5+0x1*-0x232f+0x156a*0x1;_0x2badf4<_0x3a84c2['lengt'+'h'];_0x2badf4++){if(_0x3a84c2[_0x2badf4][0x1a73+-0x912+-0x4*0x458]!==_0x4d3210['QBqAS'])continue;_0x5c41e5[_0x1bf42f(0x2e9)+'s']['0x'+_0x3a84c2[_0x2badf4][0x1fe3*-0x1+0x8*-0x445+0x420b]['toStr'+_0x1bf42f(0x12e)](0x526+0xcd+-0x5e3*0x1)]=_0x28dbcb(_0x2eee09+_0x3a84c2[_0x2badf4][-0x2*-0x967+-0x24fb*0x1+0x9*0x205],_0x4d3210[_0x1bf42f(0xa24)]);}var _0x14fd7c=_0x28dbcb(_0x4d3210[_0x1bf42f(0x70f)](_0x2eee09,0x16ba+0x2387+-0x1*0x3a15),_0x1bf42f(0x162));if(_0x14fd7c)_0x5c41e5['camer'+'a']=_0x4d3210['mhdGn']('0x',(_0x14fd7c>>>-0x70f+-0x6ae+0x1*0xdbd)[_0x1bf42f(0x356)+_0x1bf42f(0x12e)](-0x14*0x42+0x1*0xca4+0x5*-0x17c));var _0x283316=_0x4d3210[_0x1bf42f(0x1cb)](_0x359ffa,_0x2eee09,-0x5*-0x34f+-0x10b*-0x21+-0x32ae,0x20a5+-0xaa7+0xe*-0x192);if(_0x283316)_0x5c41e5['vec2']=_0x283316;return _0x5c41e5;}return null;}var _0x2ff1b6=_0x1b4785(0x7c6)+'a-sw-'+'fov',_0x4fe0c4={'pitch':null,'yaw':null,'fov':0x5a,'known':![]};try{var _0x4697f5=localStorage[_0x1b4785(0x218)+'em'](_0x2ff1b6);if(_0x4697f5)_0x4fe0c4[_0x1b4785(0x16a)]=Math[_0x1b4785(0xb40)](-0x1c30*0x1+0x9f1+0x12cb,Math['max'](-0x2687+0x39e*-0x6+0x3c59*0x1,_0x4d3210[_0x1b4785(0x6ca)](parseFloat,_0x4697f5)||-0x14ef*-0x1+-0x26ea+0x1255));}catch(_0x12dd80){}function _0x13e9cb(){var _0x391a5c=_0x1b4785;try{localStorage['setIt'+'em'](_0x2ff1b6,String(_0x4fe0c4[_0x391a5c(0x16a)]));}catch(_0x26dccb){}}var _0x985bb5=_0x1b4785(0x7c6)+'a-sw-'+_0x1b4785(0x865)+_0x1b4785(0x489),_0x425cb8=![];try{localStorage[_0x1b4785(0x218)+'em'](_0x985bb5)!==null&&(localStorage[_0x1b4785(0x5a0)+'eItem'](_0x985bb5),_0x425cb8=!![]);}catch(_0x107795){}var _0x54922b=-0x2170+0x4b5*-0x1+-0x35*-0xb9,_0x340993=-0xb0*0x26+-0x8f9*0x2+-0x179*-0x1e,_0x54922b=0x49b+0x403*0x6+0x1*-0x1c85,_0x340993=0x3*-0x536+-0x2*0x3c7+0x174c*0x1,_0x4fb861={'pitch':null,'yaw':null,'identified':![],'why':_0x4d3210[_0x1b4785(0x472)],'source':null,'yawGetter':null,'pitchGetter':null,'getters':[]};function _0x1c3ed9(_0x2db3a4){var _0x5ce306=_0x1b4785;if(_0x4d3210[_0x5ce306(0x813)](_0x5ce306(0x337),_0x5ce306(0x337))){var _0x27f175=null,_0x2a8bcd=0x311+-0x1*0x305+-0x6*0x2;for(var _0x1aff1e in _0x38db79){var _0x1969a3=_0x38db79[_0x1aff1e];if(!_0x1969a3[_0x5ce306(0x6ce)]||_0x4d3210[_0x5ce306(0x8ad)](_0x1969a3['last'],null))continue;var _0x58fd45=_0x28dbcb(_0x48e9a1+_0x2db3a4,_0x5ce306(0xd4));if(typeof _0x58fd45!==_0x4d3210[_0x5ce306(0xb80)])continue;Math[_0x5ce306(0xa5a)](_0x4d3210[_0x5ce306(0x8d1)](_0x1969a3[_0x5ce306(0xb42)],_0x58fd45))<-0x1*0x1a73+-0x1366+0x2dd9+0.001&&_0x1969a3[_0x5ce306(0x6ce)]>_0x2a8bcd&&(_0x27f175=_0x1aff1e,_0x2a8bcd=_0x1969a3[_0x5ce306(0x6ce)]);}return _0x27f175;}else return _0x1fbe0e['getIt'+'em'](_0x5e91f7)==='1';}function _0x381319(_0x1419aa){var _0x3e828f=_0x1b4785,_0x3e33ab={'FwtOV':function(_0x4841f6,_0xa0abd1){return _0x4841f6<_0xa0abd1;}},_0x429def=[],_0x300322=_0x5a6a9c[_0x3e828f(0x2c3)+'Look']||[];for(var _0x41f265 in _0x38db79){if(_0x4d3210[_0x3e828f(0x1b5)](_0x4d3210[_0x3e828f(0x51c)],_0x4d3210['OIyUk'])){var _0x573c94=_0x38db79[_0x41f265];if(!_0x573c94[_0x3e828f(0x6ce)])continue;var _0x1eb8f9=null;for(var _0x53dba2=-0x3fd*-0x1+0x1bbc+-0x1fb9;_0x53dba2<_0x300322['lengt'+'h'];_0x53dba2++){if(_0x4d3210['xfvHo']===_0x4d3210[_0x3e828f(0x8f6)]){if(_0x300322[_0x53dba2][0x24a9+-0x975*-0x1+-0x2e1d]!==_0x4d3210[_0x3e828f(0xa24)])continue;var _0x5b810d=_0x4d3210[_0x3e828f(0x6b6)](_0x28dbcb,_0x4d3210['QmVhP'](_0x1419aa,_0x300322[_0x53dba2][0x1b2c+0x46f+-0x1f9b*0x1]),_0x3e828f(0xd4));if(_0x4d3210['nhiPk'](typeof _0x5b810d,_0x3e828f(0x2fe)+'r')&&_0x4d3210['ztGQT'](Math[_0x3e828f(0xa5a)](_0x4d3210[_0x3e828f(0x8d1)](_0x5b810d,_0x573c94[_0x3e828f(0xb42)])),0x1*0x1a9+-0x108b+0xee2+0.001)){_0x1eb8f9=_0x4d3210[_0x3e828f(0x9d0)]('0x',_0x300322[_0x53dba2][-0xf71+0x233b*-0x1+0x32ac][_0x3e828f(0x356)+_0x3e828f(0x12e)](-0x16c9+-0x1*0x1489+0x2b62));break;}}else{_0x1bd8d7(_0x6bb4f8['cat']);try{var _0x2c4e78=_0x4e7cd4[_0x3e828f(0x621)+'Heigh'+'t']||0x17b*-0xd+0x6c1+0xf9e*0x1;if(_0x2c4e78<-0x1*-0x192b+-0x1c62+0x5a3)_0x4d3210[_0x3e828f(0x513)](_0x301163,![]);}catch(_0x59fc60){}}}_0x429def[_0x3e828f(0x558)]({'name':_0x41f265,'value':_0x573c94[_0x3e828f(0xb42)],'matches':_0x1eb8f9,'hits':_0x573c94['hits'],'lo':_0x573c94['lo'],'hi':_0x573c94['hi'],'travel':_0x573c94['lo']===null?0x9bf*0x3+-0x1*-0x25f5+0x2199*-0x2:_0x4d3210['ZJhvx'](Math[_0x3e828f(0xbe3)](_0x4d3210['Nglde'](_0x573c94['hi'],_0x573c94['lo'])*(-0x419*0x4+-0x23a7*0x1+-0x346f*-0x1)),-0x12cb+0x1*0x1541+-0x6a*0x5),'jump':_0x4d3210['poHCM'](Math['round'](_0x573c94['jump']*(-0x17a9+0x13*-0x1b5+0x387c)),-0x3e*-0x56+-0xda*0x21+0xda*0x9),'set':_0x573c94['setHi'+'ts']?_0x573c94[_0x3e828f(0x516)+'st']:null});}else return'0x'+(_0x3e33ab[_0x3e828f(0x847)](_0x4b8c9d['o'],-0x264b+0x22a7+0x3a4)?'?':_0x1b8ee0['o']['toStr'+'ing'](-0x5f6+0x14*-0x15b+0x2122))+'\x20('+_0xbd6d7f[_0x3e828f(0xab9)]+')';}return _0x429def;}function _0x1e0751(){var _0x47d323=_0x1b4785,_0x414156={'CFynf':_0x4d3210[_0x47d323(0x649)],'jJmOA':function(_0x16966c,_0x1898fb){var _0x24292a=_0x47d323;return _0x4d3210[_0x24292a(0x6fe)](_0x16966c,_0x1898fb);},'LZmjH':function(_0x1ef250,_0x4ed5e4){return _0x4d3210['FbiOF'](_0x1ef250,_0x4ed5e4);},'wiQlN':_0x47d323(0x133),'hxEnM':function(_0x3e40ff,_0x22005a){return _0x3e40ff===_0x22005a;},'lGpYt':function(_0x339261){var _0xb5adf5=_0x47d323;return _0x4d3210[_0xb5adf5(0x57d)](_0x339261);},'WMqoP':function(_0x2d801a,_0x3113e9,_0x1ed9f0){var _0x27f926=_0x47d323;return _0x4d3210[_0x27f926(0x106)](_0x2d801a,_0x3113e9,_0x1ed9f0);}},_0x312fe5=_0x1feba7();if(!_0x312fe5||!_0x312fe5[_0x47d323(0x57c)+'Look'])return _0x4fb861['ident'+'ified']=![],_0x4fb861[_0x47d323(0xab9)]=_0x47d323(0x72a)+'useLo'+_0x47d323(0xb76)+'t',null;var _0x7cf5e5=parseInt(_0x312fe5[_0x47d323(0x57c)+'Look'],-0x3*-0x5db+-0x36*-0x2f+-0x1b6b);if(_0x48e9a1!==_0x7cf5e5)_0x48e9a1=_0x7cf5e5;_0x4fb861['gette'+'rs']=_0x381319(_0x7cf5e5);var _0x3216d5=_0x35a98e(),_0x156d3a=0x18bc+0x4f3+-0x1dae,_0x11a989=0x1*0x123f+-0x77e*-0x1+-0x1963;function _0xb13ec1(_0x36860a){var _0x20eabd=_0x47d323;if(_0x414156[_0x20eabd(0x1cf)](_0x20eabd(0xa76),_0x414156['wiQlN'])){var _0x37226f={};try{var _0x3a1a0f=(_0x20eabd(0xb30)+_0x20eabd(0xb87)+'4')[_0x20eabd(0x60a)]('|'),_0x516f2d=-0x260*0x4+-0xe9+-0x5*-0x215;while(!![]){switch(_0x3a1a0f[_0x516f2d++]){case'0':_0x37226f[_0x20eabd(0x7ee)+_0x20eabd(0xc12)]=!!(_0x25f95d&&_0x492a8c&&_0x25f95d['__sak'+'uraTa'+'g']===_0x5bf9d0);continue;case'1':var _0x25f95d=_0x307944[_0x20eabd(0x72f)+_0x20eabd(0x7c1)+_0x20eabd(0x41c)]&&_0x46159f[_0x20eabd(0x72f)+_0x20eabd(0x7c1)+'dkit'][_0x20eabd(0x844)+'me'];continue;case'2':_0x37226f['runti'+_0x20eabd(0xb95)+'e']=_0x25f95d&&_0x25f95d['_game']?typeof _0x25f95d['_game']:_0x414156[_0x20eabd(0xb6b)];continue;case'3':_0x37226f[_0x20eabd(0x95a)+'nRunt'+_0x20eabd(0x9cc)+_0x20eabd(0x7ab)+'ted']=!!(_0x178e02&&_0x1dfe63[_0x20eabd(0x3e9)+_0x20eabd(0x22f)]&&_0x51318b['_runt'+_0x20eabd(0x22f)]===_0x25f95d);continue;case'4':_0x37226f['plugi'+_0x20eabd(0x5e0)+'imeGa'+'me']=_0x2671a3&&_0x3459bf[_0x20eabd(0x3e9)+_0x20eabd(0x22f)]&&_0x1366a5['_runt'+_0x20eabd(0x22f)]['_game']?typeof _0x57fa65[_0x20eabd(0x3e9)+'ime'][_0x20eabd(0x742)]:_0x20eabd(0xbeb);continue;case'5':_0x37226f['tag']=_0x25f95d&&_0x25f95d[_0x20eabd(0x75f)+_0x20eabd(0xa89)+'g']||null;continue;}break;}}catch(_0xd03d1d){_0x37226f[_0x20eabd(0x307)]=_0x414156[_0x20eabd(0x99a)](_0x590055,_0xd03d1d&&_0xd03d1d[_0x20eabd(0x1be)+'ge']||_0xd03d1d);}return _0x37226f;}else return _0x36860a['lo']===null||_0x414156[_0x20eabd(0xb45)](_0x36860a['hi'],null)?-0x1db3+-0x2*-0x757+0xf05:_0x36860a['hi']-_0x36860a['lo'];}var _0x3f780c=null;for(var _0x5c745e in _0x38db79){if(_0x4d3210[_0x47d323(0x8a0)](_0x4d3210['ArOTr'],_0x47d323(0x710))){var _0x262fd3=_0x38db79[_0x5c745e];if(!_0x262fd3['hits']||_0x4d3210['fzCnX'](_0x262fd3[_0x47d323(0xb42)],null))continue;if(_0x4d3210[_0x47d323(0x389)](_0x4d3210[_0x47d323(0x6d0)](_0xb13ec1,_0x262fd3),_0x156d3a))continue;if(_0x4d3210['ArbfQ'](_0x262fd3[_0x47d323(0x632)],_0x11a989))continue;var _0x49744a=_0x4d3210['zPIzN'](_0x28dbcb,_0x48e9a1+_0x54922b,'f32');if(_0x4d3210[_0x47d323(0x2e3)](typeof _0x49744a,_0x4d3210['ZQASv'])||Math['abs'](_0x4d3210[_0x47d323(0x352)](_0x262fd3['last'],_0x49744a))>=-0x40*0x1c+0x1638+-0xf38+0.001)continue;if(!_0x3f780c||_0x262fd3['hits']>_0x38db79[_0x3f780c][_0x47d323(0x6ce)])_0x3f780c=_0x5c745e;}else{var _0x4d085a=_0x32f686;if(_0x4d085a&&_0x4d085a['el'])_0x4d085a['el']['style']['displ'+'ay']=_0x428d64?'':'none';var _0x3c71cd=_0x129bb3;if(_0x3c71cd&&_0x3c71cd['cv'])_0x3c71cd['cv'][_0x47d323(0xb1d)][_0x47d323(0x4e9)+'ay']=_0x4c9aa3?'':_0x4d3210[_0x47d323(0x649)];}}var _0x45dfcd=null;for(var _0x2f8762 in _0x38db79){if(_0x2f8762===_0x3f780c)continue;var _0x21aed2=_0x38db79[_0x2f8762];if(!_0x21aed2['hits']||_0x4d3210[_0x47d323(0x59e)](_0x21aed2['last'],null))continue;if(_0xb13ec1(_0x21aed2)<_0x156d3a)continue;if(_0x21aed2['jump']>_0x11a989)continue;if(_0x21aed2[_0x47d323(0xb42)]>=-(-0x1871+0x119c+0x72f)&&_0x4d3210['dUbiM'](_0x21aed2['last'],-0x41+0x154c+-0x1*0x14b1)){if(_0x47d323(0x8f8)===_0x4d3210[_0x47d323(0x299)]){_0x45dfcd=_0x2f8762;break;}else _0x414156['lGpYt'](_0x2cd0b9);}}_0x4fb861[_0x47d323(0x289)+'tter']=_0x3f780c,_0x4fb861['pitch'+_0x47d323(0x9bf)+'r']=_0x45dfcd;var _0x47931d,_0x3265ed;if(_0x3216d5&&_0x4d3210['jhOMP'](_0x3216d5[_0x47d323(0x15b)],null))_0x3265ed=_0x3216d5['pitch'],_0x47931d=_0x3216d5[_0x47d323(0x8b7)],_0x4fb861['sourc'+'e']=_0x4d3210[_0x47d323(0x6ac)]+_0x3216d5[_0x47d323(0xaf0)]+')';else _0x3f780c?_0x47d323(0x7dd)!==_0x47d323(0x7dd)?_0x414156[_0x47d323(0x67a)](_0x3fa124,!_0xb9b2ea['on'],_0x434070[_0x47d323(0x85d)+'r']):(_0x47931d=_0x38db79[_0x3f780c]['last'],_0x4fb861[_0x47d323(0xbca)+'e']=_0x47d323(0x9f8)+'r',_0x3265ed=_0x45dfcd?_0x38db79[_0x45dfcd][_0x47d323(0xb42)]:_0x4d3210['rgmbH'](_0x28dbcb,_0x7cf5e5+_0x340993,_0x4d3210[_0x47d323(0xa24)])):(_0x47931d=_0x4d3210[_0x47d323(0x815)](_0x28dbcb,_0x4d3210[_0x47d323(0x203)](_0x7cf5e5,_0x54922b),_0x47d323(0xd4)),_0x3265ed=_0x28dbcb(_0x4d3210[_0x47d323(0xa04)](_0x7cf5e5,_0x340993),_0x47d323(0xd4)),_0x4fb861[_0x47d323(0xbca)+'e']=_0x4d3210[_0x47d323(0x29e)]);_0x4fb861[_0x47d323(0x72)+'w']=_0x47931d,_0x4fb861['rawPi'+'tch']=_0x3265ed;if(_0x4d3210['XifkN'](typeof _0x47931d,'numbe'+'r')||!isFinite(_0x47931d)||_0x4d3210[_0x47d323(0xb2f)](typeof _0x3265ed,_0x4d3210['ZQASv'])||!isFinite(_0x3265ed)){if(_0x4d3210['YIDqb'](_0x47d323(0xbc4),'FEsDN'))return _0x4fb861[_0x47d323(0x625)+_0x47d323(0xc09)]=![],_0x4fb861['why']=_0x4d3210[_0x47d323(0xc59)],null;else _0x203150=_0x284863();}if(_0x4d3210[_0x47d323(0xa53)](_0x3265ed,-(0x1*0x24a5+0x3*-0x946+-0x879*0x1))||_0x3265ed>0x127d*0x1+0xf57+-0x217a)return _0x4fb861[_0x47d323(0x625)+_0x47d323(0xc09)]=![],_0x4fb861[_0x47d323(0xab9)]=_0x4d3210[_0x47d323(0x8ff)]+Math[_0x47d323(0xbe3)](_0x3265ed)+(_0x47d323(0x455)+_0x47d323(0x989)+'nge'),null;return _0x4fb861['why']='',_0x4fb861[_0x47d323(0x625)+'ified']=!![],_0x4fb861[_0x47d323(0x15b)]=_0x3265ed,_0x4fb861['yaw']=_0x47931d,_0x4fb861;}function _0x25f0b8(_0x42c638,_0x134d35,_0x2236e9,_0x1a6f08){var _0x475f40=_0x1b4785,_0x5dee2f=_0x1e0751();if(!_0x5dee2f)return null;var _0x58d831=_0x4d3210['IZbIO'](_0x5dee2f['pitch'],Math['PI'])/(-0x1529+0x24a*-0x6+0x1*0x2399),_0x52c80d=_0x4d3210['Jngew'](_0x5dee2f[_0x475f40(0x8b7)],Math['PI'])/(0x1007*-0x1+0x11d7+-0x11c),_0x19aef3=Math[_0x475f40(0x530)](_0x58d831),_0x5e11e9=_0x4d3210[_0x475f40(0xa32)](Math['sin'](_0x52c80d),_0x19aef3),_0x460031=-Math['sin'](_0x58d831),_0x305ed1=Math[_0x475f40(0x530)](_0x52c80d)*_0x19aef3,_0xe60c79=_0x305ed1,_0x3a0e81=-0x2c*-0x35+-0x3f1*0x5+0xa99,_0x1c7352=-_0x5e11e9,_0x5b84a8=_0x134d35[0x79d*0x5+0x675*-0x3+-0x959*0x2]-_0x42c638[-0x434*0x6+0x1e58+-0x520],_0x2abb02=_0x134d35[-0x4*-0x4fc+-0x2*0x1291+-0x25*-0x77]-_0x42c638[0x19df+0x39*-0x49+-0x99d],_0x766b86=_0x134d35[-0x20b*-0x6+0xd2a*-0x2+0xe14]-_0x42c638[0x90a+-0x20ff*-0x1+-0x2a07],_0x2a391b=_0x4d3210[_0x475f40(0xa7)](_0x5b84a8*_0x5e11e9+_0x2abb02*_0x460031,_0x4d3210['iXARb'](_0x766b86,_0x305ed1));if(_0x2a391b<=0x1ae9+-0x11c5*0x2+0x8a1+0.05)return null;var _0x1daaf4=_0x5b84a8*_0xe60c79+_0x2abb02*_0x3a0e81+_0x766b86*_0x1c7352,_0x2456ea=_0x4d3210['HwVMy'](_0x4d3210['iXARb'](_0x5b84a8,_0x4d3210[_0x475f40(0x1af)](_0x4d3210['iXARb'](_0x460031,_0x1c7352),_0x4d3210['iXARb'](_0x305ed1,_0x3a0e81)))+_0x2abb02*(_0x305ed1*_0xe60c79-_0x4d3210[_0x475f40(0x9ef)](_0x5e11e9,_0x1c7352)),_0x766b86*(_0x4d3210[_0x475f40(0x99d)](_0x5e11e9,_0x3a0e81)-_0x460031*_0xe60c79)),_0x19823c=_0x2236e9/_0x1a6f08,_0x4d0718=_0x4d3210['kdKnU'](_0x4fe0c4['fov'],Math['PI'])/(-0x1628+-0x11b2+0x288e),_0xebf5d5=Math[_0x475f40(0x1b4)](_0x4d0718/(-0x1bf2+-0x1*-0xdcd+0xe27)),_0x289232=_0x4d3210[_0x475f40(0x92b)](_0x1daaf4,_0x2a391b)/_0x4d3210[_0x475f40(0xdb)](_0xebf5d5,_0x19823c),_0x410579=_0x4d3210['Eruth'](_0x4d3210[_0x475f40(0x44e)](_0x2456ea,_0x2a391b),_0xebf5d5);if(_0x4d3210['XOWMi'](_0x289232,-(-0x4f7+0x83a+0x1a1*-0x2+0.6000000000000001))||_0x289232>-0xffa+0x26c3*-0x1+0x36be+0.6000000000000001||_0x410579<-(0x2*-0x7bb+0x3*-0x5b2+0x208d+0.6000000000000001)||_0x4d3210[_0x475f40(0xbf6)](_0x410579,-0x189a+0x1*0x16c3+0x1d8+0.6000000000000001))return null;return{'x':_0x4d3210['IwmOx'](_0x4d3210['IwmOx'](_0x289232,-0x118*-0xa+-0xd76+0x2*0x143+0.5)+(0x104a+0xafc+-0x1b46+0.5),_0x2236e9),'y':_0x4d3210[_0x475f40(0xa32)](_0x4d3210['YGKxZ'](0x577*0x2+0x1*0xd33+0xd5*-0x1d+0.5,_0x4d3210['rldze'](_0x410579,-0x602+0xe76+-0x21d*0x4+0.5)),_0x1a6f08),'z':_0x2a391b};}var _0x3c9210={'open':![],'cat':_0x4d3210[_0x1b4785(0xb03)],'built':![],'root':null,'cols':null,'head':null,'sub':null,'syncs':[],'pos':null},_0x514c8c='sakur'+_0x1b4785(0x90f)+_0x1b4785(0x4ce)+'pos',_0xa632df=null,_0x4353e=[{'id':_0x1b4785(0xaf)+'t','label':_0x1b4785(0xb59)},{'id':_0x1b4785(0x868)+'ls','label':_0x1b4785(0x840)},{'id':_0x4d3210[_0x1b4785(0x35f)],'label':_0x4d3210[_0x1b4785(0x61e)]},{'id':_0x4d3210[_0x1b4785(0xb85)],'label':_0x1b4785(0x246)}],_0x554616=_0x4d3210['ZdzBZ'](_0x4d3210[_0x1b4785(0x22b)](_0x4d3210['oEVyb'](_0x4d3210[_0x1b4785(0x8cf)](_0x4d3210[_0x1b4785(0x449)](_0x4d3210['JjQmy'](_0x4d3210[_0x1b4785(0x4f8)](_0x4d3210['DzJsg'](_0x4d3210[_0x1b4785(0xd1)](_0x4d3210['xRdZe'](_0x4d3210[_0x1b4785(0x737)](_0x4d3210['KyaIP'](_0x4d3210['wDNru'](_0x4d3210[_0x1b4785(0x8cf)](_0x4d3210[_0x1b4785(0x229)](_0x4d3210[_0x1b4785(0x29b)](_0x4d3210['skzYV'](_0x4d3210[_0x1b4785(0xa33)](_0x4d3210[_0x1b4785(0x3f9)](_0x4d3210[_0x1b4785(0x118)](_0x4d3210[_0x1b4785(0x723)](_0x4d3210['uuKTy']('#saku'+'ra-me'+'nu-ro'+_0x1b4785(0x850)+_0x1b4785(0x19d)+_0x1b4785(0xa94)+(_0x1b4785(0xacd)+'ra-me'+_0x1b4785(0x971)+_0x1b4785(0x360)+'-pane'+_0x1b4785(0x250)+'ition'+':fixe'+_0x1b4785(0x6b)+'ht:24'+'px;bo'+_0x1b4785(0x29a)+'24px;'+'width'+_0x1b4785(0x5b3)+'620px'+',calc'+'(100v'+_0x1b4785(0x205)+_0x1b4785(0xb50)+_0x1b4785(0x211)+_0x1b4785(0x871)+'t:min'+'(500p'+'x,cal'+_0x1b4785(0x5af)+_0x1b4785(0x122)+'48px)'+');'),_0x4d3210[_0x1b4785(0xafc)])+_0x4d3210[_0x1b4785(0x564)]+('box-s'+_0x1b4785(0x5da)+_0x1b4785(0x284)+_0x1b4785(0x3fc)+_0x1b4785(0x402)+_0x1b4785(0x12a)+_0x1b4785(0x9e0)+_0x1b4785(0xbd1)+_0x1b4785(0xa31)+'set\x200'+_0x1b4785(0x48c)+_0x1b4785(0x8a5)+'a(255'+_0x1b4785(0x976)+_0x1b4785(0x94c)+_0x1b4785(0x46e)+'\x2030px'+_0x1b4785(0x432)+'\x20rgba'+_0x1b4785(0x5e1)+'0,.55'+');'),'opaci'+_0x1b4785(0x5b2)+'trans'+'form:'+'trans'+_0x1b4785(0x6a9)+_0x1b4785(0x4d9)+');poi'+_0x1b4785(0x9f6)+_0x1b4785(0x110)+'s:non'+_0x1b4785(0x842)+'nsiti'+_0x1b4785(0x42c)+_0x1b4785(0xa5d)+_0x1b4785(0x338)+_0x1b4785(0x15f)+',tran'+_0x1b4785(0x760)+_0x1b4785(0x5ce)+'\x20cubi'+'c-bez'+_0x1b4785(0x1b9)+'22,1,'+'.36,1'+');')+('color'+_0x1b4785(0x30d)+'ef2;f'+'ont-s'+'ize:1'+'3px;f'+'ont-f'+'amily'+':\x22Int'+_0x1b4785(0xc5e)+_0x1b4785(0x9e7)+_0x1b4785(0xba)+_0x1b4785(0x93f)+'m-ui,'+_0x1b4785(0xc39)+'serif'+';}')+_0x4d3210[_0x1b4785(0xbcd)],_0x1b4785(0x846)+'ide{d'+'ispla'+_0x1b4785(0x204)+_0x1b4785(0x9b0)+'x-dir'+_0x1b4785(0x638)+_0x1b4785(0x925)+'umn;a'+_0x1b4785(0x147)+_0x1b4785(0x9e8)+':cent'+'er;ga'+'p:4px'+';widt'+_0x1b4785(0x2fb)+_0x1b4785(0x9b0)+'x:non'+_0x1b4785(0x88e)+_0x1b4785(0x562)+'12px\x20'+'0;')+(_0x1b4785(0x4b8)+_0x1b4785(0x8bf)+_0x1b4785(0x508)+_0x1b4785(0x78b)+'ackgr'+_0x1b4785(0x3fe)+_0x1b4785(0x55c)+_0x1b4785(0x9e0)+_0x1b4785(0x38a)+'5,.02'+_0x1b4785(0x423)+'x-sha'+_0x1b4785(0x8cb)+'nset\x20'+_0x1b4785(0xc46)+'\x201px\x20'+_0x1b4785(0x55c)+'255,2'+'55,25'+_0x1b4785(0x386)+');}')+_0x4d3210['wbSiJ']+(_0x1b4785(0x736)+'ogo-s'+_0x1b4785(0x4eb)+_0x1b4785(0xa0e)+'5px;h'+'eight'+_0x1b4785(0x21c)+_0x1b4785(0x573)+'flow:'+_0x1b4785(0x15d)+_0x1b4785(0x8d4)+'lter:'+_0x1b4785(0x74d)+_0x1b4785(0x29d)+_0x1b4785(0x42b)+_0x1b4785(0x524)+'rgba('+_0x1b4785(0x4c8)+'07,15'+_0x1b4785(0x669)+');}')+_0x4d3210['cEliu'],'backg'+'round'+_0x1b4785(0x796)+'spare'+_0x1b4785(0x9e4)+'lor:r'+_0x1b4785(0x3a0)+_0x1b4785(0x739)+'8,242'+',.4);'+'curso'+_0x1b4785(0x5a9)+_0x1b4785(0xb35)+'font-'+'size:'+_0x1b4785(0x495)+'font-'+'weigh'+'t:700'+_0x1b4785(0xc2c)+'-fami'+_0x1b4785(0x242)+'herit'+';}')+(_0x1b4785(0x9ca)+'ab:ho'+_0x1b4785(0x43a)+'olor:'+'rgba('+_0x1b4785(0x3ed)+'38,24'+_0x1b4785(0x1f9)+';}'),'.mn-t'+'ab.ac'+'tive{'+_0x1b4785(0x93b)+_0x1b4785(0xa51)+_0x1b4785(0xbff)+_0x1b4785(0xc0)+_0x1b4785(0x3fe)+_0x1b4785(0x55c)+'255,1'+_0x1b4785(0xbec)+_0x1b4785(0x1c9)+';}')+_0x4d3210['YuuXO']+(_0x1b4785(0x9ca)+'op{di'+'splay'+_0x1b4785(0xb21)+';alig'+_0x1b4785(0x9c4)+'ms:ce'+'nter;'+'gap:1'+_0x1b4785(0xb6e)+_0x1b4785(0x99e)+'g:6px'+_0x1b4785(0xb81)+'12px;'+'user-'+_0x1b4785(0x5f8)+_0x1b4785(0x17b)+'e;}')+(_0x1b4785(0x9ca)+'itles'+_0x1b4785(0xe3)+':1;mi'+_0x1b4785(0xa9d)+_0x1b4785(0xb63)+'}')+('.mn-h'+_0x1b4785(0x198)+_0x1b4785(0xb84)+':17px'+';font'+_0x1b4785(0x40e)+'ht:65'+_0x1b4785(0x9f7)),_0x1b4785(0x846)+_0x1b4785(0x9ab)+_0x1b4785(0x2f6)+_0x1b4785(0x33d)+_0x1b4785(0x776)+_0x1b4785(0xa5d)+':.4;}'),_0x1b4785(0xbdb)+'lose{'+_0x1b4785(0x4e9)+_0x1b4785(0x9fb)+_0x1b4785(0x16c)+_0x1b4785(0x7eb)+_0x1b4785(0x8b3)+_0x1b4785(0xc4a)+_0x1b4785(0xa77)+_0x1b4785(0xaf9)+_0x1b4785(0x676)+_0x1b4785(0xc01)+'28px;'+_0x1b4785(0x4b8)+_0x1b4785(0xa0b)+_0x1b4785(0xaf0)+_0x1b4785(0x878)+_0x1b4785(0x98f)+_0x1b4785(0x486)+'kgrou'+'nd:tr'+'anspa'+'rent;'),_0x4d3210[_0x1b4785(0xb3b)])+(_0x1b4785(0xbdb)+'lose:'+'hover'+_0x1b4785(0xa17)+'ity:1'+_0x1b4785(0xb47)+'groun'+'d:rgb'+_0x1b4785(0xe5)+_0x1b4785(0x976)+'255,.'+'05);}'),_0x4d3210[_0x1b4785(0x196)]),'.mn-c'+_0x1b4785(0x6b1)+'lex:1'+_0x1b4785(0x9df)+_0x1b4785(0x871)+_0x1b4785(0x98b)+_0x1b4785(0xc4c)+_0x1b4785(0x879)+'auto;'+'displ'+'ay:gr'+_0x1b4785(0x430)+'id-te'+_0x1b4785(0xa93)+'e-col'+_0x1b4785(0x4cf)+'repea'+_0x1b4785(0x1de)+'o-fil'+'l,min'+'max(2'+_0x1b4785(0x981)+_0x1b4785(0x441)+';'),_0x1b4785(0x76b)+_0x1b4785(0x5b1)+_0x1b4785(0xa09)+'rt;al'+'ign-c'+_0x1b4785(0x276)+_0x1b4785(0x461)+'rt;ga'+_0x1b4785(0x775)+'x;pad'+_0x1b4785(0x562)+_0x1b4785(0x986)+'\x206px\x20'+'0;}')+('.mn-c'+'ols::'+'-webk'+'it-sc'+'rollb'+_0x1b4785(0x99)+'dth:8'+_0x1b4785(0x5c2))+(_0x1b4785(0xbdb)+'ols::'+_0x1b4785(0x1bf)+'it-sc'+'rollb'+'ar-th'+_0x1b4785(0x7bb)+'ackgr'+'ound:'+_0x1b4785(0x55c)+_0x1b4785(0x9e0)+'55,25'+_0x1b4785(0x86c)+_0x1b4785(0xbf7)+_0x1b4785(0xb65)+'adius'+_0x1b4785(0x3c8)+'}')+_0x4d3210['BkgNN']+_0x4d3210[_0x1b4785(0x875)],_0x1b4785(0x491)+_0x1b4785(0x956)+'ead{d'+_0x1b4785(0x313)+_0x1b4785(0x204)+_0x1b4785(0xbb4)+_0x1b4785(0xaf5)+_0x1b4785(0x722)+_0x1b4785(0x37f)+';gap:'+'8px;p'+'addin'+'g:11p'+_0x1b4785(0x73f)+_0x1b4785(0x45e)),'.sk-c'+_0x1b4785(0x845)+_0x1b4785(0x40f)+_0x1b4785(0x586)+_0x1b4785(0xadc)+_0x1b4785(0xa0f)+'h:0;}'),_0x4d3210['VTTpg'])+_0x4d3210['koTNi'],_0x1b4785(0x6d6)+'body{'+_0x1b4785(0xa50)+'ng:0\x20'+'12px\x20'+_0x1b4785(0x495)+'}')+_0x4d3210['TYMgT']+_0x4d3210[_0x1b4785(0x7db)]+('.sk-l'+_0x1b4785(0x694)+_0x1b4785(0x586)+'1;col'+_0x1b4785(0xb93)+_0x1b4785(0x8d5)+'6,238'+_0x1b4785(0x26c)+_0x1b4785(0x5b0)+'}'),_0x4d3210['JbWmJ'])+_0x4d3210[_0x1b4785(0x8e)],_0x4d3210['rVOfv'])+(_0x1b4785(0x588)+_0x1b4785(0xbe3)+_0x1b4785(0x28f)+_0x1b4785(0x12a)+'255,2'+'55,.2'+'5);tr'+'ansit'+'ion:l'+'eft\x20.'+_0x1b4785(0x728)+'ckgro'+'und\x20.'+_0x1b4785(0x47c))+(_0x1b4785(0xa4f)+_0x1b4785(0xaf7)+_0x1b4785(0xc5c)+'-chec'+_0x1b4785(0x4a5)+_0x1b4785(0x12d)+_0x1b4785(0x428)+'kgrou'+'nd:rg'+'ba(25'+_0x1b4785(0x5d5)+_0x1b4785(0xb66)+_0x1b4785(0x53b)+'}'),_0x1b4785(0xa4f)+'witch'+_0x1b4785(0xc5c)+_0x1b4785(0x1e0)+_0x1b4785(0x4a5)+'true\x22'+_0x1b4785(0x77b)+_0x1b4785(0xafa)+_0x1b4785(0x15a)+_0x1b4785(0x68d)+'ackgr'+_0x1b4785(0x3fe)+_0x1b4785(0xb2e)+'9d;}'),_0x4d3210[_0x1b4785(0x764)]),'.sk-s'+'lider'+_0x1b4785(0x43e)+'kit-a'+'ppear'+_0x1b4785(0xa0d)+'none;'+_0x1b4785(0xb48)+'rance'+':none'+';widt'+_0x1b4785(0x664)+_0x1b4785(0x9b2)+'ght:8'+_0x1b4785(0x2da)+_0x1b4785(0x671)+_0x1b4785(0x7c9)+_0x1b4785(0x85f)+'arent'+';}')+_0x4d3210['qCFUd']+(_0x1b4785(0x588)+_0x1b4785(0xbe3)+':line'+_0x1b4785(0x612)+_0x1b4785(0xa68)+_0x1b4785(0x2fd)+_0x1b4785(0x75b)+_0x1b4785(0xb2e)+_0x1b4785(0x5bb)+'\x200\x20/\x20'+_0x1b4785(0x252)+_0x1b4785(0xabd)+'%)\x2010'+'0%\x20no'+'-repe'+'at,rg'+'ba(25'+_0x1b4785(0x927)+_0x1b4785(0x976)+'.08);'+'}')+_0x4d3210[_0x1b4785(0x84c)]+_0x4d3210[_0x1b4785(0x1a2)]+(_0x1b4785(0x290)+_0x1b4785(0xca)+_0x1b4785(0x514)+_0x1b4785(0x777)+_0x1b4785(0x426)+_0x1b4785(0x324)+'rgba('+_0x1b4785(0x3ed)+_0x1b4785(0x114)+_0x1b4785(0x86b)+_0x1b4785(0xacc)+'ing:2'+_0x1b4785(0x138)+_0x1b4785(0xa45)+_0x1b4785(0x281)+'e:pre'+'-wrap'+';}')+_0x4d3210[_0x1b4785(0xa47)]+_0x4d3210[_0x1b4785(0x882)]+_0x4d3210[_0x1b4785(0xb60)]+('.sk-b'+_0x1b4785(0x1a8)+_0x1b4785(0x100)+_0x1b4785(0x58e)+':brig'+'htnes'+'s(1.1'+_0x1b4785(0x220))+_0x4d3210[_0x1b4785(0x6e6)],_0x4d3210[_0x1b4785(0xc5f)]),_0x4d3210['ZXGxY']),_0x295509=_0x4d3210[_0x1b4785(0x515)]+(_0x1b4785(0x72c)+'\x22none'+_0x1b4785(0x95)+_0x1b4785(0x5ff)+'#ff6b'+_0x1b4785(0x186)+_0x1b4785(0x3d2)+'-widt'+_0x1b4785(0x66b)+_0x1b4785(0x640)+'ke-li'+_0x1b4785(0x89c)+_0x1b4785(0xc28)+_0x1b4785(0x898)+'troke'+_0x1b4785(0x6f2)+'join='+'\x22roun'+'d\x22/>')+(_0x1b4785(0xc11)+'le\x20cx'+_0x1b4785(0x861)+_0x1b4785(0xe9)+'10\x22\x20r'+_0x1b4785(0x9a8)+'\x22\x20fil'+_0x1b4785(0x1d1)+_0x1b4785(0xc13)+_0x1b4785(0x81d)+'svg>'),_0xd6f58a=_0x4d3210[_0x1b4785(0x17d)](_0x4d3210[_0x1b4785(0x159)](_0x1b4785(0xa34)+'class'+'=\x22mn-'+'logo-'+_0x1b4785(0x90b)+_0x1b4785(0x5ac)+_0x1b4785(0xad)+_0x1b4785(0xa86)+_0x1b4785(0x91e)+_0x1b4785(0x9ed)+_0x1b4785(0x890)+'12\x2021'+'c-1.5'+_0x1b4785(0x1f1)+_0x1b4785(0x269)+_0x1b4785(0x40a)+_0x1b4785(0xb9c)+'.5\x201.'+_0x1b4785(0x36f)+_0x1b4785(0x6b2)+'5s4\x202'+_0x1b4785(0x71e)+_0x1b4785(0xbe2)+_0x1b4785(0x273)+_0x1b4785(0x391)+_0x1b4785(0x85e),_0x1b4785(0x72c)+_0x1b4785(0x914)+_0x1b4785(0x95)+_0x1b4785(0x5ff)+_0x1b4785(0xb2e)+_0x1b4785(0x186)+'troke'+'-widt'+_0x1b4785(0xaa0)+'6\x22\x20st'+'roke-'+'linec'+_0x1b4785(0x9c3)+_0x1b4785(0x6d5)+'\x20stro'+_0x1b4785(0x373)+'nejoi'+'n=\x22ro'+_0x1b4785(0x215)+'>'),_0x1b4785(0xc11)+_0x1b4785(0x7e1)+_0x1b4785(0x861)+'\x20cy=\x22'+_0x1b4785(0x4c3)+_0x1b4785(0x405)+_0x1b4785(0x178)+'l=\x22#f'+_0x1b4785(0xc13)+_0x1b4785(0x81d)+'svg>');function _0x284a02(_0x3d0cd4,_0x4dcaac,_0x36a75e){var _0x1b2377=_0x1b4785,_0x2f2b27=document[_0x1b2377(0x7c8)+'eElem'+_0x1b2377(0x173)](_0x3d0cd4);if(_0x4dcaac)_0x2f2b27['class'+_0x1b2377(0x69a)]=_0x4dcaac;if(_0x4d3210['KZjNf'](_0x36a75e,null))_0x2f2b27[_0x1b2377(0x621)+'HTML']=_0x36a75e;return _0x2f2b27;}function _0xf5ec6(_0xb1e881,_0x2527ff){var _0x1b4372=_0x1b4785,_0x53e68c=_0x4d3210[_0x1b4372(0xab)](_0x284a02,'div',_0x4d3210[_0x1b4372(0x551)]('sk-ca'+'rd',_0x2527ff?_0x1b4372(0x75a):'')),_0xd36583=_0x4d3210[_0x1b4372(0x7ca)](_0x284a02,'div',_0x1b4372(0xa98)+_0x1b4372(0x610)+'ad'),_0x1f30ec=_0x284a02(_0x1b4372(0x1f7),'sk-ca'+'rd-ti'+_0x1b4372(0xbc6),_0x4d3210[_0x1b4372(0x39d)]+_0xb1e881+('</str'+_0x1b4372(0xaff)));_0xd36583[_0x1b4372(0x950)+_0x1b4372(0x315)+'d'](_0x1f30ec);var _0x39cd09=_0x4d3210[_0x1b4372(0x4ac)](_0x284a02,'div',_0x4d3210[_0x1b4372(0x255)]);return _0x53e68c['appen'+_0x1b4372(0x315)+'d'](_0xd36583),_0x53e68c[_0x1b4372(0x950)+_0x1b4372(0x315)+'d'](_0x39cd09),_0x53e68c[_0x1b4372(0x39e)]=_0x39cd09,_0x53e68c[_0x1b4372(0x179)]=_0x1f30ec,_0x53e68c;}function _0x4398e0(_0x2605d4,_0x112d5d){var _0x23a457=_0x1b4785,_0x41b45b={'zheGp':function(_0x1c293b,_0x2ef685){var _0x81d05e=_0x224c;return _0x4d3210[_0x81d05e(0x1bb)](_0x1c293b,_0x2ef685);}},_0x40746e=_0x284a02(_0x23a457(0x2a3)+'n',_0x4d3210[_0x23a457(0x58c)]);_0x40746e['type']='butto'+'n';var _0x1a4d58=function(){var _0x471005=_0x23a457;if('xmfjK'!==_0x4d3210['jPQrb'])_0x40746e['setAt'+_0x471005(0x9dc)+'te'](_0x471005(0x471)+'check'+'ed',_0x2605d4()?_0x471005(0x964):'false');else return _0x4a7aed['v'][0x137d+0x110d+-0xc2e*0x3]===_0x1dbd02[-0x200b+-0x2212+-0x1*-0x421d]&&_0x41b45b[_0x471005(0xa4d)](_0x415512['v'][0x8e+0x1*-0xa01+0x974],_0x509db6[0x2d*-0x41+0xfe9*0x2+0x4*-0x519])&&_0x3b458a['v'][-0x1*-0x2bb+-0x1*0x428+0x16f]===_0x43375a[0x1a2b+-0x1659+-0x3d0];};return _0x40746e['oncli'+'ck']=function(){var _0x264660=_0x23a457;_0x112d5d(!_0x4d3210[_0x264660(0x9a7)](_0x2605d4)),_0x4d3210[_0x264660(0x3de)](_0x1a4d58);},_0x1a4d58(),_0x40746e[_0x23a457(0x8e4)]=_0x1a4d58,_0x3c9210[_0x23a457(0x3f3)][_0x23a457(0x558)](_0x1a4d58),_0x40746e;}function _0x3301a7(_0x1346b1,_0x1ed8c2,_0x38e30d,_0x57faa0,_0x24f319){var _0x9b9b3a=_0x1b4785,_0x2c35dc=_0x4d3210[_0x9b9b3a(0x35e)][_0x9b9b3a(0x60a)]('|'),_0x159878=-0x2*-0x33d+-0x13fd+-0x3*-0x481;while(!![]){switch(_0x2c35dc[_0x159878++]){case'0':_0x2b930a[_0x9b9b3a(0x64a)]=_0x35072a;continue;case'1':_0x41a6b6();continue;case'2':_0x35072a['max']=String(_0x1ed8c2);continue;case'3':_0x2b930a[_0x9b9b3a(0x950)+'dChil'+'d'](_0x35072a);continue;case'4':return _0x2b930a;case'5':var _0x2b930a=_0x284a02('div',_0x9b9b3a(0x294)+_0x9b9b3a(0x7df));continue;case'6':_0x2b930a['appen'+_0x9b9b3a(0x315)+'d'](_0x30d58a);continue;case'7':var _0x35072a=document[_0x9b9b3a(0x7c8)+'eElem'+'ent'](_0x4d3210['qAAUW']);continue;case'8':var _0x41a6b6=function(){var _0x175770=_0x9b9b3a,_0xa79dec=_0x57faa0();_0x35072a[_0x175770(0xac7)]=String(_0xa79dec),_0x30d58a['textC'+'onten'+'t']=(_0x38e30d<-0x224e+-0xec1*-0x1+0x138e?_0xa79dec[_0x175770(0x657)+'ed'](-0x1*0x75b+0xe71*-0x1+0x15cd):_0xa68a7[_0x175770(0xb64)](String,Math[_0x175770(0xbe3)](_0xa79dec)))+(_0x35072a[_0x175770(0x554)+'et']['unit']||'');var _0xc32160=_0xa68a7[_0x175770(0x582)](_0xa79dec-_0x1346b1,_0x1ed8c2-_0x1346b1)*(-0x134e+0x19d3+-0x621);_0x35072a[_0x175770(0xb1d)]['setPr'+_0x175770(0x2ec)+'y']('--p',_0xa68a7[_0x175770(0x685)](_0xc32160,'%'));};continue;case'9':_0x35072a['min']=String(_0x1346b1);continue;case'10':_0x35072a[_0x9b9b3a(0x2a5)+'Name']=_0x4d3210[_0x9b9b3a(0x532)];continue;case'11':_0x2b930a[_0x9b9b3a(0x8e4)]=_0x41a6b6;continue;case'12':var _0xa68a7={'GEScv':function(_0x566fa1,_0x11a650){var _0x39f3a5=_0x9b9b3a;return _0x4d3210[_0x39f3a5(0x8c0)](_0x566fa1,_0x11a650);},'vwqro':function(_0x2e9edb,_0x3e7b19){return _0x2e9edb/_0x3e7b19;},'yhvOW':function(_0x227b4f,_0x146742){return _0x227b4f+_0x146742;}};continue;case'13':_0x35072a[_0x9b9b3a(0x61f)+'ut']=function(){var _0x2b5f28=_0x9b9b3a;_0x24f319(parseFloat(_0x35072a[_0x2b5f28(0xac7)])||_0x1346b1),_0x41a6b6();};continue;case'14':var _0x30d58a=_0x284a02(_0x4d3210[_0x9b9b3a(0xbd7)],'sk-va'+'l');continue;case'15':_0x35072a['type']='range';continue;case'16':_0x3c9210[_0x9b9b3a(0x3f3)]['push'](_0x41a6b6);continue;case'17':_0x35072a['step']=String(_0x38e30d);continue;}break;}}function _0x556693(_0x641b4c,_0x26bb44){var _0x3b35bc=_0x1b4785,_0x5862f2=_0x284a02(_0x3b35bc(0x1f7),_0x4d3210['zvMFS']),_0xf9e0c1=_0x4d3210[_0x3b35bc(0x30a)](_0x284a02,'div','sk-la'+_0x3b35bc(0x894),_0x641b4c+(_0x26bb44?_0x4d3210['JWhBY']('<span'+_0x3b35bc(0xb49)+_0x3b35bc(0x1d7)+_0x3b35bc(0xb54)+'\x27>'+_0x26bb44,_0x3b35bc(0x959)+'n>'):''));return _0x5862f2['appen'+'dChil'+'d'](_0xf9e0c1),_0x5862f2;}function _0x1da87d(_0x1a9361,_0x1ed35e,_0x2b83d9,_0x954c22){var _0x3302ed=_0x1b4785,_0x509413={'TOteb':function(_0x45a07b,_0x554037){return _0x45a07b/_0x554037;}},_0x583b4f=_0x1a9361&&_0x1a9361[_0x3302ed(0x660)+'y']&&_0x1a9361[_0x3302ed(0x660)+'y'][_0x1ed35e];if(!_0x583b4f)return'-';for(var _0x3d2650=-0x89*-0x27+0x18f7+-0x16eb*0x2;_0x4d3210[_0x3302ed(0x43c)](_0x3d2650,_0x583b4f[_0x3302ed(0x17c)+'h']);_0x3d2650++){if(_0x4d3210['VGSKt'](_0x583b4f[_0x3d2650]['o'],_0x2b83d9)){if(_0x4d3210[_0x3302ed(0x6db)](_0x954c22,'v3')){var _0x5b46d5=_0x583b4f[_0x3d2650][_0x3302ed(0xf5)]||[_0x583b4f[_0x3d2650]['v'],0x388*0x7+0x13eb+-0x2ca3,0xaa6*0x1+-0x1097*-0x1+-0x1b3d];return _0x5b46d5[_0x3302ed(0x4ba)](function(_0x31e4a5){return _0x509413['TOteb'](Math['round'](_0x31e4a5*(-0x323+0x17ab+-0x1*0x1424)),0x5b3*0x2+0x1*-0x2242+-0x18*-0xf8);})[_0x3302ed(0xb4a)]('\x20\x20');}var _0x2ee514=_0x583b4f[_0x3d2650]['v'];return typeof _0x2ee514===_0x3302ed(0x2fe)+'r'?_0x4d3210['vSJxZ'](Math[_0x3302ed(0xbe3)](_0x2ee514*(-0x22c7+0x294*0xc+0x7bf)),0x1331+-0x1031+0x2*0x74):_0x4d3210['naKzd'](String,_0x2ee514);}}return'-';}function _0x25f0ab(_0x5dc5cb){var _0x2e4464=_0x1b4785,_0x322050={'rQKqx':function(_0x2e94cf,_0x4eeb55,_0x3ef6df,_0x1e9639){return _0x2e94cf(_0x4eeb55,_0x3ef6df,_0x1e9639);},'cbqgp':function(_0x3ea0d4,_0x177513,_0x2b7588){return _0x4d3210['wioaB'](_0x3ea0d4,_0x177513,_0x2b7588);},'TBeUt':function(_0x31f809,_0x54d7a0){return _0x31f809+_0x54d7a0;},'vXgGg':function(_0x328087,_0x2a90f2){return _0x328087===_0x2a90f2;},'uPUkU':'eKqsc','CHknl':function(_0x52659f,_0x3d8f2a){var _0x20c581=_0x224c;return _0x4d3210[_0x20c581(0xb72)](_0x52659f,_0x3d8f2a);},'ADJRr':function(_0x5a5d40,_0x50c7fe){return _0x5a5d40+_0x50c7fe;},'IVxgy':function(_0x389542,_0x58225f){return _0x4d3210['saNSH'](_0x389542,_0x58225f);},'KuDmQ':_0x4d3210[_0x2e4464(0x536)],'yKCWx':function(_0x1a6b61,_0x2da365,_0x316ca9){return _0x1a6b61(_0x2da365,_0x316ca9);},'gLCPj':_0x4d3210[_0x2e4464(0xa55)],'JuQYl':function(_0x22f04d){return _0x22f04d();},'qiTdE':function(_0x381917,_0x43ea48){var _0x5e4963=_0x2e4464;return _0x4d3210[_0x5e4963(0x855)](_0x381917,_0x43ea48);},'dUeGi':_0x2e4464(0xc3d),'PAKsR':function(_0x52be16,_0x38b0f7){return _0x52be16*_0x38b0f7;},'isgFn':function(_0x1e03ae,_0x34bbb6){var _0x2bb068=_0x2e4464;return _0x4d3210[_0x2bb068(0x71d)](_0x1e03ae,_0x34bbb6);},'Yoypp':function(_0x42d1fa,_0x1f1bb5){return _0x42d1fa&_0x1f1bb5;},'XLbvp':_0x2e4464(0x4ab),'gafzb':_0x2e4464(0x5c9),'Rwhhk':function(_0x48a668,_0xe169d6){var _0x34b1f2=_0x2e4464;return _0x4d3210[_0x34b1f2(0x83a)](_0x48a668,_0xe169d6);},'CKjnA':'PYOLD','DjMrN':_0x2e4464(0x7d2)+'faile'+'d'},_0x2e7ba4=_0xa632df,_0x2fb484=[],_0x5f180f;if(_0x5dc5cb===_0x2e4464(0xaf)+'t'){var _0x3e9141=_0xf5ec6(_0x4d3210[_0x2e4464(0xa7f)],_0xde72d1['on']),_0x24ce8b=_0x284a02(_0x4d3210[_0x2e4464(0x448)],_0x2e4464(0x18e)+_0x2e4464(0xb34),_0xde72d1['on']?_0x4d3210['jUcek']('x'+_0xde72d1['facto'+'r']['toFix'+'ed'](-0x1*-0x1887+0xc02+-0x2488)+_0x4d3210['FmTqK'],_0x18ed02['lengt'+'h'])+(_0x2e4464(0x56b)+_0x2e4464(0x2d2))+_0x2289af+('\x20writ'+'es'):_0x2e4464(0x12f)+_0x2e4464(0x8eb)+_0x2e4464(0x90d)+'ment-'+_0x2e4464(0x521)+_0x2e4464(0x56b)+_0x2e4464(0x65e)+'ly.\x20H'+_0x2e4464(0x2f5)+_0x2e4464(0x26b)+_0x2e4464(0x244)+_0x2e4464(0x63c)+'\x20are\x20'+_0x2e4464(0x992)+'ed.'),_0xd9e0e5=_0x4d3210[_0x2e4464(0xa9)](_0x556693,_0x2e4464(0x55e)+'ed');_0xd9e0e5[_0x2e4464(0x950)+_0x2e4464(0x315)+'d'](_0x4398e0(function(){return _0xde72d1['on'];},function(_0x269dd1){var _0x15460f=_0x2e4464;_0x49da82(_0x269dd1,_0xde72d1['facto'+'r']),_0x24ce8b['textC'+_0x15460f(0x276)+'t']=_0x269dd1?_0x4d3210[_0x15460f(0x70f)](_0x4d3210[_0x15460f(0xa82)](_0x4d3210['JifXq']('x',_0xde72d1['facto'+'r'][_0x15460f(0x657)+'ed'](-0x1efa+-0xb7+0x2*0xfd9)),'\x20on\x20')+_0x18ed02['lengt'+'h'],_0x15460f(0x56b)+_0x15460f(0x2d2))+_0x2289af+_0x4d3210[_0x15460f(0x400)]:'Multi'+'plies'+'\x20move'+'ment-'+_0x15460f(0x521)+_0x15460f(0x56b)+_0x15460f(0x65e)+'ly.\x20H'+_0x15460f(0x2f5)+_0x15460f(0x26b)+_0x15460f(0x244)+_0x15460f(0x63c)+'\x20are\x20'+_0x15460f(0x992)+_0x15460f(0x680);})),_0x3e9141['body'][_0x2e4464(0x950)+_0x2e4464(0x315)+'d'](_0x24ce8b),_0x3e9141[_0x2e4464(0x39e)][_0x2e4464(0x950)+_0x2e4464(0x315)+'d'](_0xd9e0e5);var _0x199b25=_0x4d3210['QrQcX'](_0x3301a7,0x12f6*-0x2+0x264+0x2389,0x1091*0x1+-0x4eb+0x1*-0xba1,-0x1*-0xee6+-0xcaa*0x1+0xb*-0x34+0.5,function(){var _0x4ceaf0=_0x2e4464;return _0xde72d1[_0x4ceaf0(0x85d)+'r'];},function(_0x5bfc44){var _0xe0d857=_0x2e4464,_0x10176d={'MuwCA':function(_0x271c43,_0x2a6243,_0x3dd039,_0x326e62){var _0x57ca0f=_0x224c;return _0x322050[_0x57ca0f(0xb17)](_0x271c43,_0x2a6243,_0x3dd039,_0x326e62);},'ZwXAP':'Healt'+_0xe0d857(0x8d0)+'pt','AalUz':_0xe0d857(0x4ab)};if(_0xe0d857(0x343)===_0xe0d857(0x343))_0x322050['cbqgp'](_0x49da82,_0xde72d1['on'],_0x5bfc44);else{var _0x1a474d=_0x29f2fb(_0x163612[_0xe0d857(0x18b)]['healt'+'h'],0x1bb1+0xe6f*0x1+0x2a1*-0x10);_0x2aeb97[_0xe0d857(0x874)+'h']=_0x10176d['MuwCA'](_0x3d0b28,_0x1a474d,_0x10176d['ZwXAP'],_0x10176d[_0xe0d857(0x8f9)]);}});_0x199b25[_0x2e4464(0x64a)]['datas'+'et'][_0x2e4464(0x76)]='x';var _0x497d11=_0x556693('Multi'+'plier',_0x2e4464(0x96a)+_0x2e4464(0x4f5)+_0x2e4464(0x754)+_0x2e4464(0x4b1)+'is');_0x497d11['appen'+_0x2e4464(0x315)+'d'](_0x199b25),_0x3e9141['body'][_0x2e4464(0x950)+_0x2e4464(0x315)+'d'](_0x497d11);if(_0x1f3553['lengt'+'h']){var _0x372625=_0x284a02(_0x4d3210[_0x2e4464(0x448)],_0x4d3210[_0x2e4464(0x527)],_0x4d3210[_0x2e4464(0x202)](_0x4d3210[_0x2e4464(0x7a2)],_0x1f3553[_0x2e4464(0x603)](-0x1937+0xbbd*-0x3+0xdd*0x46,-0x1547+-0x5af+0x1afa)[_0x2e4464(0x4ba)](function(_0x40ff90){var _0x91baed=_0x2e4464,_0x10e53e={'wGLcQ':function(_0xb7fd5c,_0x19a8c9){var _0x26e249=_0x224c;return _0x322050[_0x26e249(0x94d)](_0xb7fd5c,_0x19a8c9);},'kxHUC':'#ffd4'+'8a'};if(_0x322050['vXgGg'](_0x322050[_0x91baed(0x80b)],_0x91baed(0x33a)))return _0x322050[_0x91baed(0x6b8)](_0x322050[_0x91baed(0x53a)]('0x',_0x40ff90['o']<-0xcd4*-0x1+-0x2*0xd87+-0xe3a*-0x1?'?':_0x40ff90['o']['toStr'+_0x91baed(0x12e)](0xbe*-0x15+0x8b1+0x6f5))+'\x20('+_0x40ff90['why'],')');else _0xad4e44=_0x10e53e[_0x91baed(0x998)]('hooks'+_0x91baed(0x420)+_0x91baed(0x57e)+_0x438f2b,'s'),_0x3f495b=_0x10e53e[_0x91baed(0x4c2)];})['join']('\x20\x20')));_0x3e9141[_0x2e4464(0x39e)][_0x2e4464(0x950)+'dChil'+'d'](_0x372625);}_0x2fb484['push'](_0x3e9141);var _0x194553=_0xf5ec6(_0x2e4464(0xaa7)+'ngs'),_0x57414a=_0x4d3210['yopHc'](_0x284a02,_0x2e4464(0x2a3)+'n','sk-bt'+'n',_0x4d3210['HCqxd']);_0x57414a['type']=_0x2e4464(0x2a3)+'n',_0x57414a['oncli'+'ck']=function(){var _0x5cc240=_0x2e4464;_0x322050['IVxgy'](_0xa5ef5d,_0x322050[_0x5cc240(0xaf6)]);},_0x194553['body']['appen'+'dChil'+'d'](_0x284a02(_0x4d3210[_0x2e4464(0x448)],_0x4d3210[_0x2e4464(0x496)],_0x2e4464(0xc4f)+_0x2e4464(0x7f0)+_0x2e4464(0xaa3)+_0x2e4464(0xb04)+'speed'+_0x2e4464(0xb71)+'ff\x0aF8'+_0x2e4464(0xf3)+_0x2e4464(0x852)+'tor\x20+'+'/-0.5'+_0x2e4464(0x3a1)+_0x2e4464(0x101)+_0x2e4464(0x3fb)+_0x2e4464(0x9b8)+'\x0aInse'+_0x2e4464(0x1a4)+_0x2e4464(0xa9e)+_0x2e4464(0x68e))),_0x194553[_0x2e4464(0x39e)][_0x2e4464(0x950)+'dChil'+'d'](_0x57414a),_0x2fb484['push'](_0x194553);}if(_0x5dc5cb==='visua'+'ls'){if('uXEgC'!==_0x2e4464(0x143))_0x21a0ba['setIt'+'em'](_0x300fba,_0x452e71[_0x2e4464(0x91d)+_0x2e4464(0x217)](_0x2b2171[_0x2e4464(0x1df)]));else{var _0x535ed3=_0xf5ec6(_0x4d3210['UYjWm'],_0x442d4e['on']),_0x210d06=_0x4d3210[_0x2e4464(0x774)](_0x556693,_0x4d3210['flQEi']);_0x210d06['appen'+_0x2e4464(0x315)+'d'](_0x4d3210['tYfpc'](_0x4398e0,function(){return _0x442d4e['on'];},function(_0x54fbc9){var _0x190206=_0x2e4464;_0x322050[_0x190206(0x1d0)](_0x27c5fc,_0x54fbc9,_0x442d4e[_0x190206(0x77f)]);})),_0x535ed3['body'][_0x2e4464(0x950)+_0x2e4464(0x315)+'d'](_0x4d3210['tGcKv'](_0x284a02,'div','sk-md'+_0x2e4464(0xb34),'World'+'-spac'+'e\x20min'+_0x2e4464(0xd3)+_0x2e4464(0x691)+_0x2e4464(0x1d5)+_0x2e4464(0x36a)+_0x2e4464(0x65e)+'ly\x20po'+_0x2e4464(0x93e)+_0x2e4464(0x137))),_0x535ed3['body'][_0x2e4464(0x950)+_0x2e4464(0x315)+'d'](_0x210d06);var _0x528d9c=_0x3301a7(0x1f1e+-0x281*0x3+0x17*-0x105,-0x4*0x413+-0x35*-0x7d+0x1*-0x8f5,-0x1b93+0x1ac9+-0x2*-0x6a,function(){var _0x5afc54=_0x2e4464;return _0x442d4e[_0x5afc54(0xc57)];},function(_0x50faa){var _0x5bb3ec=_0x2e4464;if('PBKwv'===_0x5bb3ec(0xbd5))try{_0x393ed8['hook']['enabl'+'ed']=![];}catch(_0x1ceb60){}else _0x442d4e[_0x5bb3ec(0xc57)]=_0x50faa;});_0x528d9c[_0x2e4464(0x64a)]['datas'+'et'][_0x2e4464(0x76)]='m';var _0x340db7=_0x4d3210[_0x2e4464(0x633)](_0x556693,_0x4d3210['YUlTp'],_0x2e4464(0x7a7)+_0x2e4464(0x793)+'s\x20acr'+_0x2e4464(0x91)+_0x2e4464(0xc3f)+'dar');_0x340db7[_0x2e4464(0x950)+_0x2e4464(0x315)+'d'](_0x528d9c),_0x535ed3[_0x2e4464(0x39e)][_0x2e4464(0x950)+_0x2e4464(0x315)+'d'](_0x340db7),_0x2fb484[_0x2e4464(0x558)](_0x535ed3);var _0x5da5ae=_0x4d3210[_0x2e4464(0xa78)](_0xf5ec6,_0x4d3210[_0x2e4464(0x474)],_0x442d4e['boxes']),_0x32d35c=_0x4d3210[_0x2e4464(0x9bd)](_0x556693,_0x4d3210['flQEi']);_0x32d35c['appen'+_0x2e4464(0x315)+'d'](_0x4398e0(function(){return _0x442d4e['boxes'];},function(_0x321921){var _0xf81a82=_0x2e4464;if(_0x321921&&!_0xf06a84()){if(_0xf81a82(0x15e)===_0x322050['gLCPj']){_0x2278c2();return;}else _0x570a08[_0xf81a82(0x819)+_0xf81a82(0x2b8)][_0xf81a82(0x10e)+_0xf81a82(0x938)](_0x343e0e)[_0xf81a82(0x174)](_0x1be088,function(){_0xcfe3d7();});}_0x27c5fc(!![],_0x321921);}));var _0x15cb4e=_0x2e7ba4&&_0x2e7ba4['angle'+'s'];_0x5da5ae['body'][_0x2e4464(0x950)+_0x2e4464(0x315)+'d'](_0x284a02(_0x4d3210['csExw'],_0x2e4464(0x18e)+_0x2e4464(0xb34),_0x15cb4e&&!_0x15cb4e[_0x2e4464(0x625)+_0x2e4464(0xc09)]?'Not\x20d'+_0x2e4464(0xde)+_0x2e4464(0xb2d)+(_0x15cb4e['why']||_0x4d3210['DefCN'])+(_0x2e4464(0x200)+_0x2e4464(0x8f0)+_0x2e4464(0x29c)+'oats\x20'+'are\x20n'+'ot\x20pi'+'tch\x20a'+_0x2e4464(0x696)+_0x2e4464(0xbcb)+'ess\x20F'+_0x2e4464(0x3a7)+'rn\x20ab'+_0x2e4464(0x69e)+'0°,\x20p'+_0x2e4464(0x977)+'F9.'):_0x15cb4e&&!_0x15cb4e[_0x2e4464(0xc55)+'ne']?'Field'+_0x2e4464(0x5f2)+'iew\x20i'+'s\x20'+Math[_0x2e4464(0xbe3)](_0x15cb4e['fov'])+('°,\x20ou'+'tside'+'\x20the\x20'+'sane\x20'+_0x2e4464(0x6f4)+_0x2e4464(0xdd)+_0x2e4464(0x37a)+'below'+'.'):_0x2e4464(0x3a5)+_0x2e4464(0x673)+_0x2e4464(0x6b9)+_0x2e4464(0xa3e)+_0x2e4464(0x6b4)+'ield\x20'+'of\x20vi'+'ew\x20ca'+_0x2e4464(0xbac)+'be\x20re'+_0x2e4464(0x94a)+_0x2e4464(0xec)+_0x2e4464(0x20b)+_0x2e4464(0x5fe)+_0x2e4464(0x675)+_0x2e4464(0x6fd)+'itted'+_0x2e4464(0x587)+_0x2e4464(0xc36))),_0x5da5ae[_0x2e4464(0x39e)][_0x2e4464(0x950)+'dChil'+'d'](_0x32d35c);var _0x317be0=_0x3301a7(0x3*-0xa7d+0x243+0x1d70,0x14af+0xc5*-0x9+-0x8*0x1a8,0x184b+0x261+-0x1aaa,function(){var _0x501e16=_0x2e4464;return _0x4fe0c4[_0x501e16(0x16a)];},function(_0x3e435d){var _0x7ff358=_0x2e4464;_0x4fe0c4[_0x7ff358(0x16a)]=_0x3e435d,_0x322050[_0x7ff358(0x464)](_0x13e9cb);});_0x317be0[_0x2e4464(0x64a)]['datas'+'et']['unit']='°';var _0xcbabf2=_0x556693(_0x4d3210[_0x2e4464(0x499)],'[\x20and'+_0x2e4464(0x602)+_0x2e4464(0x754)+_0x2e4464(0x4b1)+'is');_0xcbabf2[_0x2e4464(0x950)+_0x2e4464(0x315)+'d'](_0x317be0);var _0x371e36=_0x556693(_0x2e4464(0x67d)+'\x20view','fov\x20b'+'ack\x20t'+'o\x2075,'+'\x20offs'+_0x2e4464(0x9b5)+_0x2e4464(0x6eb)),_0x355226=_0x4d3210[_0x2e4464(0x9c9)](_0x284a02,_0x2e4464(0x2a3)+'n',_0x4d3210['IyPWQ'],_0x4d3210[_0x2e4464(0xbd8)]);_0x355226['addEv'+'entLi'+_0x2e4464(0x740)+'r']('click',function(){var _0x12ecfa=_0x2e4464;_0x4fe0c4[_0x12ecfa(0x16a)]=0x1baf+-0xa2*0x27+-0x2*0x15b,_0x13e9cb(),_0x322050['qiTdE'](_0x47a4dd,_0x3c9210['cat']);}),_0x371e36[_0x2e4464(0x950)+_0x2e4464(0x315)+'d'](_0x355226),_0x5da5ae[_0x2e4464(0x39e)]['appen'+_0x2e4464(0x315)+'d'](_0xcbabf2),_0x5da5ae[_0x2e4464(0x39e)]['appen'+_0x2e4464(0x315)+'d'](_0x371e36);var _0x4b6f5c=_0x2e7ba4&&_0x2e7ba4['view'];_0x5da5ae['body']['appen'+'dChil'+'d'](_0x284a02(_0x2e4464(0x1f7),_0x2e4464(0xb6)+'te',_0x4d3210[_0x2e4464(0x969)](_0x4d3210[_0x2e4464(0x7e)]('view:'+'\x20',_0x4b6f5c?_0x4b6f5c[_0x2e4464(0x57c)+_0x2e4464(0x715)]?_0x2e4464(0x2c3)+_0x2e4464(0x19f)+_0x4b6f5c[_0x2e4464(0x57c)+_0x2e4464(0x715)]+(_0x4b6f5c[_0x2e4464(0xadd)+'a']?_0x4d3210['VuXqY'](_0x2e4464(0x666)+_0x2e4464(0x328),_0x4b6f5c[_0x2e4464(0xadd)+'a']):''):_0x4d3210[_0x2e4464(0x472)]:_0x2e4464(0x72a)+_0x2e4464(0x5de)+_0x2e4464(0xb76)+'t'),_0x15cb4e?_0x4d3210[_0x2e4464(0x686)]('\x0a',_0x15cb4e['sourc'+'e']&&_0x15cb4e[_0x2e4464(0xbca)+'e'][_0x2e4464(0xb8d)+'Of']('sette'+'r\x20pai'+'r')===0x1e90+-0x2e7*-0x7+-0x32e1?_0x4d3210[_0x2e4464(0x737)](_0x4d3210['uNfOT']+_0x15cb4e[_0x2e4464(0xbca)+'e']['slice'](0x21cc+-0x2*-0x1f6+-0x25ad)+('\x0ayaw\x20'+'\x20\x20')+Math[_0x2e4464(0xbe3)](_0x15cb4e['rawYa'+'w'])+(_0x2e4464(0x11e)+'h\x20'),Math[_0x2e4464(0xbe3)](_0x15cb4e['rawPi'+'tch'])):_0x4d3210[_0x2e4464(0x6db)](_0x15cb4e['sourc'+'e'],_0x2e4464(0x9f8)+'r')?_0x4d3210[_0x2e4464(0x8d9)](_0x4d3210[_0x2e4464(0x67f)](_0x4d3210[_0x2e4464(0x567)],_0x15cb4e[_0x2e4464(0x1bc)])+_0x4d3210['lWuEH']+Math['round'](_0x15cb4e['rawYa'+'w']),'\x0apitc'+'h\x20')+_0x15cb4e[_0x2e4464(0x15b)+'At']+_0x2e4464(0x4dc)+Math['round'](_0x15cb4e['rawPi'+_0x2e4464(0x38d)]):_0x4d3210[_0x2e4464(0x4d1)]):'')+(_0x15cb4e&&_0x15cb4e[_0x2e4464(0xb24)+'ooks']&&_0x4d3210[_0x2e4464(0x8ef)](_0x15cb4e[_0x2e4464(0xb24)+'ooks'][_0x2e4464(0x511)+'ed'],-0x2215*0x1+-0xed5+-0x30ea*-0x1)&&_0x4d3210['ArbfQ'](_0x15cb4e['viewH'+_0x2e4464(0xc3e)]['total'],0x5*-0x529+-0xd*0x1ff+0x1140*0x3)?_0x2e4464(0x8b1)+_0x2e4464(0x411)+_0x2e4464(0x1c8)+_0x2e4464(0x576)+'t\x20non'+'e\x20app'+_0x2e4464(0x7f2)+'('+_0x15cb4e[_0x2e4464(0xb24)+_0x2e4464(0xc3e)][_0x2e4464(0x801)+_0x2e4464(0x658)]+'/'+_0x15cb4e[_0x2e4464(0xb24)+'ooks'][_0x2e4464(0x575)]+(_0x2e4464(0xa19)+'lved)'):_0x15cb4e&&_0x15cb4e['viewH'+'ooks']&&_0x15cb4e[_0x2e4464(0xb24)+_0x2e4464(0xc3e)]['total']===-0x1b5+-0x56*0x35+0x1383?_0x2e4464(0xaf4)+'\x20hook'+'s\x20wer'+'e\x20nev'+_0x2e4464(0x74e)+_0x2e4464(0x7f9)+'red\x20('+_0x15cb4e['viewH'+_0x2e4464(0xc3e)][_0x2e4464(0x307)+_0x2e4464(0x87f)]+_0x4d3210[_0x2e4464(0x4df)]:'')+(_0x425cb8?'\x0a(cle'+_0x2e4464(0x3d3)+_0x2e4464(0x500)+_0x2e4464(0xb37)+'ved\x20c'+_0x2e4464(0xa88)+_0x2e4464(0x7d5):''))),_0x2fb484['push'](_0x5da5ae);}}if(_0x4d3210[_0x2e4464(0xba2)](_0x5dc5cb,_0x4d3210['PMqwE'])){var _0x7bcb86=[['Build',_0x4d3210['akLSF'],_0x2e7ba4?_0x2e7ba4['versi'+'on']:'-'],[_0x2e4464(0x382),_0x2e4464(0x511)+_0x2e4464(0x654)+_0x2e4464(0x490)+_0x2e4464(0xc1e),_0x2e7ba4?_0x4d3210[_0x2e4464(0xa82)](_0x2e7ba4[_0x2e4464(0x8b)+_0x2e4464(0x70c)+'ed'],_0x4d3210['GTnnX'])+_0x2e7ba4[_0x2e4464(0x8b)+'Regis'+_0x2e4464(0xc1e)+_0x2e4464(0x974)]:'-'],[_0x4d3210[_0x2e4464(0x32a)],_0x4d3210[_0x2e4464(0x6a7)],_0x2e7ba4&&_0x2e7ba4[_0x2e4464(0x412)+_0x2e4464(0x32b)]&&_0x2e7ba4['wasmM'+_0x2e4464(0x32b)]['captu'+_0x2e4464(0x44f)]?_0x4d3210[_0x2e4464(0x6cb)](Math['round'](_0x2e7ba4['wasmM'+_0x2e4464(0x32b)][_0x2e4464(0x46d)]/(-0x1*-0x1b0f1c+-0x169861+0xb5*0x1051))+_0x4d3210['BrPUd'],_0x2e7ba4[_0x2e4464(0x412)+'emory'][_0x2e4464(0x21a)])+'ms':'-'],[_0x4d3210[_0x2e4464(0x424)],'Photo'+'nNetw'+_0x2e4464(0xbc7)+'nc',_0x2e7ba4&&_0x2e7ba4[_0x2e4464(0x502)]?_0x4d3210[_0x2e4464(0xad3)](String,_0x2e7ba4[_0x2e4464(0x502)][_0x2e4464(0x103)+_0x2e4464(0x262)+'t']):'-'],['Enemi'+'es',_0x4d3210['XcRqR'],_0x2e7ba4&&_0x2e7ba4['esp']?String(_0x2e7ba4['esp']['enemy'+'Count']):'-'],[_0x4d3210[_0x2e4464(0x522)],'off\x20t'+_0x2e4464(0xc48)+_0x2e4464(0x6ea)+_0x2e4464(0x784),_0x2e7ba4&&_0x2e7ba4[_0x2e4464(0x502)]&&_0x2e7ba4[_0x2e4464(0x502)][_0x2e4464(0xadd)+'a']?_0x4d3210['coTRL'](_0x4d3210[_0x2e4464(0x8a9)](_0x2e7ba4['esp']['camer'+'a'],'\x20('),_0x2e7ba4[_0x2e4464(0x502)][_0x2e4464(0xadd)+'aFrom'])+')':'-']];for(_0x5f180f=0x3*0x52f+0x759+0xb73*-0x2;_0x4d3210[_0x2e4464(0x2c9)](_0x5f180f,_0x7bcb86['lengt'+'h']);_0x5f180f++){var _0x5739d2=(_0x2e4464(0x21f)+'|4|8|'+_0x2e4464(0x7ef)+_0x2e4464(0x559)+_0x2e4464(0x44c))[_0x2e4464(0x60a)]('|'),_0x48d220=-0x1*-0x51f+0x1fd6+-0x24f5;while(!![]){switch(_0x5739d2[_0x48d220++]){case'0':_0x58f8e0[_0x2e4464(0x950)+_0x2e4464(0x315)+'d'](_0x9182f);continue;case'1':var _0x263a85=_0x2fb484['lengt'+'h']?_0x2fb484[_0x2fb484['lengt'+'h']-(-0xd15+-0x68f*-0x1+-0x3*-0x22d)]:null;continue;case'2':var _0x58f8e0=_0x4d3210[_0x2e4464(0x634)](_0x556693,_0x7bcb86[_0x5f180f][-0x1553*-0x1+-0x2448+0xef5]);continue;case'3':_0x263a85[_0x2e4464(0x39e)]['lastC'+_0x2e4464(0x9d2)]['sp']=_0x9182f;continue;case'4':_0x9182f['style'][_0x2e4464(0x1dc)]='1';continue;case'5':var _0x9182f=_0x4d3210[_0x2e4464(0xb7e)](_0x284a02,_0x2e4464(0xc57),'sk-va'+'l');continue;case'6':_0x263a85[_0x2e4464(0x39e)]['appen'+'dChil'+'d'](_0x58f8e0);continue;case'7':_0x9182f[_0x2e4464(0xb1d)]['minWi'+_0x2e4464(0x5d0)]='0';continue;case'8':_0x9182f['style']['textA'+_0x2e4464(0x408)]=_0x2e4464(0x1d5);continue;case'9':!_0x263a85&&(_0x263a85=_0x4d3210[_0x2e4464(0xb7e)](_0xf5ec6,_0x2e4464(0x421)+'on',![]),_0x2fb484['push'](_0x263a85));continue;case'10':_0x9182f[_0x2e4464(0x554)+'et']['k']=_0x7bcb86[_0x5f180f][0x7b3*-0x3+-0x1a6c+0x3186];continue;case'11':_0x9182f[_0x2e4464(0x56c)+_0x2e4464(0x276)+'t']=String(_0x7bcb86[_0x5f180f][-0x1949+-0x33b+0xe43*0x2]);continue;}break;}}var _0x455148=_0xf5ec6('Playe'+'r',![]),_0x44aa2f=[['Posit'+_0x2e4464(0x659),_0x2e7ba4&&_0x2e7ba4['local']&&_0x2e7ba4['local'][_0x2e4464(0x132)]?_0x4d3210['jBgvI'](_0x4d3210['IayYH'],_0x2e7ba4[_0x2e4464(0x7d7)]['posAt']):_0x2e4464(0x317)+'ntrol'+'ler',_0x2e7ba4&&_0x2e7ba4['local']&&_0x2e7ba4['local'][_0x2e4464(0x52b)]?_0x2e7ba4[_0x2e4464(0x7d7)]['feet'][_0x2e4464(0x4ba)](function(_0x149a30){var _0x5712f7=_0x2e4464;if(_0x322050[_0x5712f7(0x820)]!==_0x322050['dUeGi']){var _0x307f45=_0x48bc9a[_0x5712f7(0x218)+'em'](_0x3ee475);if(_0x307f45)_0x5e3ebd[_0x5712f7(0x16a)]=_0x3e0a2c[_0x5712f7(0xb40)](0x25*0x7+-0x3b7*0x3+-0x1*-0xaae,_0x235ca6[_0x5712f7(0xa59)](-0x22fc*-0x1+-0x277*-0x6+-0x1c6*0x1c,_0x322050[_0x5712f7(0x570)](_0x5b32be,_0x307f45)||0x5a4+0x2263+-0x27ad));}else return Math[_0x5712f7(0xbe3)](_0x322050['PAKsR'](_0x149a30,0x2*0xb56+0x1896+0x359*-0xe))/(0x7f*-0x1f+0xc56+0x36f);})[_0x2e4464(0xb4a)]('\x20\x20'):'-'],[_0x2e4464(0x945),_0x4d3210['nlPlI']('+'+_0x3dfca6,'m'),_0x2e7ba4&&_0x2e7ba4[_0x2e4464(0x7d7)]&&_0x2e7ba4[_0x2e4464(0x7d7)][_0x2e4464(0x748)]?_0x2e7ba4[_0x2e4464(0x7d7)][_0x2e4464(0x748)]['map'](function(_0x236185){var _0x465bb0=_0x2e4464;return Math[_0x465bb0(0xbe3)](_0x236185*(-0xe5c*-0x2+-0x717+-0x1*0x153d))/(0x1*0x18f8+-0xa37*0x1+-0x1*0xe5d);})[_0x2e4464(0xb4a)]('\x20\x20'):'-'],[_0x2e4464(0x7e2)+'speed',_0x4d3210[_0x2e4464(0x60b)],_0x4d3210[_0x2e4464(0x4e4)](_0x1da87d,_0x2e7ba4,'FPSco'+'ntrol'+_0x2e4464(0x6ff),-0xd94+-0x22de+0x3082)],[_0x2e4464(0x5bf)+_0x2e4464(0x3b3)+'ed',_0x2e4464(0x282),_0x4d3210[_0x2e4464(0x2ac)](_0x1da87d,_0x2e7ba4,_0x4d3210['QYcwo'],-0x23ac+0x108c+0x50*0x3e)],[_0x2e4464(0x96)+'heigh'+'t',_0x2e4464(0x832),_0x1da87d(_0x2e7ba4,_0x2e4464(0x317)+_0x2e4464(0x4a2)+'ler',0x1*0x1bdf+0x2653+0xad9*-0x6)],[_0x4d3210['myqSw'],'Healt'+_0x2e4464(0x8d0)+'pt+0x'+'C0',_0x1da87d(_0x2e7ba4,_0x2e4464(0x81)+'hScri'+'pt',-0x1189*0x2+-0x131a*0x1+0x36ec)]];for(_0x5f180f=-0x15d*0x2+0x634*0x2+-0x9ae;_0x4d3210[_0x2e4464(0x2c9)](_0x5f180f,_0x44aa2f[_0x2e4464(0x17c)+'h']);_0x5f180f++){if(_0x4d3210[_0x2e4464(0x1b7)]===_0x4d3210[_0x2e4464(0xbbd)])_0xbc7f34[_0x2e4464(0x56c)+'onten'+'t']=_0xd11132(_0x2da8e3);else{var _0x5d213b=_0x556693(_0x44aa2f[_0x5f180f][0x8*-0x360+-0x2d*-0xc0+0x1b0*-0x4]),_0x2fd694=_0x284a02(_0x2e4464(0xc57),_0x4d3210['ydgPz']);_0x2fd694['style']['minWi'+'dth']='0',_0x2fd694['style'][_0x2e4464(0x1dc)]='1',_0x2fd694[_0x2e4464(0xb1d)][_0x2e4464(0xa92)+_0x2e4464(0x408)]='right',_0x2fd694[_0x2e4464(0x56c)+'onten'+'t']=String(_0x44aa2f[_0x5f180f][-0x27f+-0x577*-0x1+0x2*-0x17b]),_0x2fd694[_0x2e4464(0x554)+'et']['k']=_0x44aa2f[_0x5f180f][0xf51+0x255a+-0x34aa],_0x5d213b[_0x2e4464(0x950)+_0x2e4464(0x315)+'d'](_0x2fd694),_0x455148['body'][_0x2e4464(0x950)+_0x2e4464(0x315)+'d'](_0x5d213b),_0x455148[_0x2e4464(0x39e)]['lastC'+_0x2e4464(0x9d2)]['sp']=_0x2fd694;}}_0x2fb484[_0x2e4464(0x558)](_0x455148);}if(_0x5dc5cb===_0x4d3210[_0x2e4464(0xb85)]){var _0x5d257b=_0x4d3210[_0x2e4464(0xa9a)](_0xf5ec6,_0x4d3210['cCJtD'],![]),_0x2e75e7=_0x2e7ba4&&_0x2e7ba4['warni'+_0x2e4464(0x35c)]&&_0x2e7ba4[_0x2e4464(0xb44)+_0x2e4464(0x35c)][_0x2e4464(0x17c)+'h']?_0x2e7ba4[_0x2e4464(0xb44)+_0x2e4464(0x35c)][_0x2e4464(0xb4a)]('\x0a'):_0x2e4464(0x1ab)+_0x2e4464(0xba7)+'s';_0x5d257b[_0x2e4464(0x39e)][_0x2e4464(0x950)+'dChil'+'d'](_0x284a02(_0x2e4464(0x1f7),_0x4d3210['elZEk'],_0x2e75e7)),_0x2fb484[_0x2e4464(0x558)](_0x5d257b);var _0x229528=_0xf5ec6(_0x4d3210[_0x2e4464(0x32e)],![]),_0xc2e72b=_0x284a02(_0x2e4464(0x2a3)+'n','sk-bt'+'n',_0x4d3210['LQAJJ']);_0xc2e72b['type']=_0x4d3210['Zzaxc'],_0xc2e72b[_0x2e4464(0xae1)+'ck']=function(){var _0x45d476=_0x2e4464,_0x16d256={'TwLzU':function(_0x3f9de1,_0x2ea542){return _0x3f9de1===_0x2ea542;},'MAPqG':function(_0x35b925,_0x3030cf){return _0x35b925(_0x3030cf);},'mONQE':function(_0x1a05da,_0x32aa05){return _0x1a05da|_0x32aa05;},'XiSKV':function(_0x5c1bbc,_0xa21d8e){var _0x4bbd52=_0x224c;return _0x322050[_0x4bbd52(0x192)](_0x5c1bbc,_0xa21d8e);},'HDovY':function(_0x4d3a68,_0x1fdc4d){return _0x4d3a68+_0x1fdc4d;},'WQVWx':_0x45d476(0xc64),'XVxRC':function(_0x43fec7,_0x20f2e5){return _0x43fec7^_0x20f2e5;},'ROtWZ':_0x45d476(0xd4),'VbqZy':_0x322050[_0x45d476(0x3b4)],'hhqDx':function(_0x401492,_0x367163){return _0x401492|_0x367163;},'IrGhc':function(_0x24914e,_0x5ecca4){return _0x24914e+_0x5ecca4;}};if(_0x45d476(0xc22)===_0x322050[_0x45d476(0x550)]){if(_0x158b63['paren'+'t']&&_0x3af333[_0x45d476(0xe0)+'t']!==_0x30e2b4)_0x487391[_0x45d476(0xe0)+'t'][_0x45d476(0x627)+_0x45d476(0x225)+'e'](_0x472b01,'*');if(_0x1d65cf['top']&&_0x322050[_0x45d476(0xa65)](_0xf7b62a['top'],_0xc54b93))_0x53047c[_0x45d476(0xc05)]['postM'+'essag'+'e'](_0x1bf8d2,'*');}else try{var _0x3651b4=_0x322050['ADJRr'](_0x3c082f+'\x0a'+JSON[_0x45d476(0x91d)+_0x45d476(0x217)](_0x2e7ba4,null,0x13*0x23+-0x19df*-0x1+-0x1c77)+'\x0a',_0x15c15f);if(navigator['clipb'+'oard']&&navigator['clipb'+_0x45d476(0x2b8)][_0x45d476(0x10e)+'Text'])navigator[_0x45d476(0x819)+_0x45d476(0x2b8)]['write'+_0x45d476(0x938)](_0x3651b4)[_0x45d476(0x174)](function(){var _0x59c2ed=_0x45d476;_0xc2e72b[_0x59c2ed(0x56c)+_0x59c2ed(0x276)+'t']='Copie'+'d';});else _0xc2e72b['textC'+_0x45d476(0x276)+'t']=_0x45d476(0x9da)+'oard\x20'+'block'+'ed\x20-\x20'+'open\x20'+'the\x20p'+_0x45d476(0x665)+'inste'+'ad';}catch(_0xd88bee){if(_0x322050[_0x45d476(0x966)](_0x322050[_0x45d476(0x8e6)],_0x45d476(0x3bd)))_0xc2e72b[_0x45d476(0x56c)+'onten'+'t']=_0x322050['DjMrN'];else{var _0x35a141=_0x2a0afa[_0x129da],_0x3514d1=_0x494c66(_0x259b3a,_0x5e1cba,_0x35a141[_0x45d476(0x48e)]);if(!_0x3514d1)return![];var _0x14bc47=new _0x252537(_0x3514d1[_0x45d476(0x816)+'r'],_0x3514d1[_0x45d476(0xaeb)+'ffset'],_0x3514d1['byteL'+_0x45d476(0x184)]),_0x124b8d=_0x16d256['TwLzU'](_0x35a141[_0x45d476(0x3cd)+'pe'],'u8')?_0x14bc47[_0x45d476(0x5e7)+_0x45d476(0x561)](_0x35a141['key']):_0x14bc47['getIn'+'t32'](_0x35a141['key'],!![]),_0x43fd86;if(_0x595d59==='obfF')_0x43fd86=_0x16d256['MAPqG'](_0x5e9781,_0x25fec4);else{if(_0xc72eaa==='obfI')_0x43fd86=_0x16d256['mONQE'](_0x2e1d36,0x2407+-0x28+-0x1*0x23df);else _0x43fd86=_0x16d256['XiSKV'](_0x296527?-0x1*-0x181a+0x1540+-0x2f*0xf7:0x833+-0x1*-0x62e+-0xe61,-0xf8f*0x1+-0x47*-0xa+0xdc8);}return _0x5a1283(_0x16d256[_0x45d476(0xbea)](_0x5df6ea+_0x2a640f,_0x35a141['hidde'+'n']),_0x16d256[_0x45d476(0xa41)],_0x16d256[_0x45d476(0xfd)](_0x43fd86,_0x124b8d))&&_0x3dbc44(_0x3c87f9+_0x4f4e4e+_0x35a141[_0x45d476(0x164)],_0x53ed6c==='obfF'?_0x16d256[_0x45d476(0x7cb)]:_0x13ab46===_0x45d476(0x4ab)?_0x16d256['WQVWx']:'u8',_0x16d256['TwLzU'](_0x1154a1,_0x45d476(0x14c))?_0x350578:_0x59c656===_0x16d256['VbqZy']?_0x16d256[_0x45d476(0x624)](_0x1e5744,0x1b07+-0xc6+-0x1a41):_0x450a12?-0xbd1+-0x1*0x1727+0x22f9:0xa61*-0x1+-0x2c*0x59+0x19ad)&&_0x29b899(_0x16d256[_0x45d476(0x56f)](_0x3829b5+_0x378773,_0x35a141['activ'+'e']),'u8',0x1*-0x18ce+-0x1aa+-0xe*-0x1e4);}}},_0x229528[_0x2e4464(0x39e)][_0x2e4464(0x950)+_0x2e4464(0x315)+'d'](_0x4d3210[_0x2e4464(0x30a)](_0x284a02,_0x2e4464(0x1f7),_0x2e4464(0x18e)+_0x2e4464(0xb34),_0x4d3210[_0x2e4464(0x936)])),_0x229528[_0x2e4464(0x39e)][_0x2e4464(0x950)+'dChil'+'d'](_0xc2e72b),_0x2fb484[_0x2e4464(0x558)](_0x229528);}return _0x2fb484;}function _0x3763e1(){var _0x38ad53=_0x1b4785;if(_0x3c9210[_0x38ad53(0xb8f)])_0x2b899c(!![]);}function _0x4f8f08(){var _0x2b5346=_0x1b4785;try{var _0x15dfc6=localStorage[_0x2b5346(0x218)+'em'](_0x514c8c);if(!_0x15dfc6)return;var _0x5344fe=JSON[_0x2b5346(0x899)](_0x15dfc6);if(_0x5344fe&&typeof _0x5344fe['x']===_0x2b5346(0x2fe)+'r'&&typeof _0x5344fe['y']==='numbe'+'r')_0x3c9210['pos']=_0x5344fe;}catch(_0x58d0e5){}}function _0x45574e(){var _0x5f1b75=_0x1b4785;try{localStorage['setIt'+'em'](_0x514c8c,JSON['strin'+'gify'](_0x3c9210[_0x5f1b75(0x1df)]));}catch(_0x5d36ea){}}function _0x252d36(){var _0x5ef2b2=_0x1b4785,_0x13bf17=_0x3c9210[_0x5ef2b2(0x1ca)];if(!_0x13bf17||!_0x13bf17['style'])return;if(_0x3c9210[_0x5ef2b2(0x1df)]){if('aVqop'===_0x5ef2b2(0x771))_0x13bf17[_0x5ef2b2(0xb1d)]['left']=_0x3c9210['pos']['x']+'px',_0x13bf17[_0x5ef2b2(0xb1d)][_0x5ef2b2(0xc05)]=_0x4d3210[_0x5ef2b2(0xc8)](_0x3c9210[_0x5ef2b2(0x1df)]['y'],'px'),_0x13bf17[_0x5ef2b2(0xb1d)]['right']=_0x4d3210['ExaPu'],_0x13bf17[_0x5ef2b2(0xb1d)]['botto'+'m']=_0x5ef2b2(0x9c5);else{var _0x7bf296=arguments[_0x1f34fb];if(typeof _0x7bf296==='strin'+'g')_0x5b82c8+=_0x7bf296;else{if(_0x7bf296&&_0x7bf296[_0x5ef2b2(0x1be)+'ge'])_0x327c33+=_0x7bf296[_0x5ef2b2(0x1be)+'ge'];}}}else{if('mRFIB'===_0x4d3210['rEFmb'])_0x13bf17[_0x5ef2b2(0xb1d)][_0x5ef2b2(0x505)]=_0x5ef2b2(0x9c5),_0x13bf17[_0x5ef2b2(0xb1d)][_0x5ef2b2(0xc05)]='auto',_0x13bf17['style'][_0x5ef2b2(0x1d5)]='24px',_0x13bf17[_0x5ef2b2(0xb1d)][_0x5ef2b2(0x394)+'m']=_0x4d3210['CFiWA'];else{if(!_0xd3a87e[_0x25de57])_0x3304c2[_0x5162cf]={'ptr':_0x2d2210,'kind':_0x539b1d,'firstSeen':_0x1f2923[_0x5ef2b2(0x91b)](),'hits':0x0};_0x4ea8b6[_0x48c7b3]['hits']++;}}}function _0x51957a(_0x5d7f47,_0x39bf18){var _0x36f007=_0x1b4785,_0x25a5d0={'tmWTl':function(_0x461d3e,_0x2bdc82){return _0x461d3e*_0x2bdc82;},'ufoJH':function(_0x37e187,_0x27fbcf){return _0x37e187/_0x27fbcf;},'NVQHp':function(_0x868ea9,_0x3d2b9f){var _0x1b5181=_0x224c;return _0x4d3210[_0x1b5181(0x3d4)](_0x868ea9,_0x3d2b9f);},'ExCsf':_0x36f007(0x8cc)+'\x20·\x20','SFGZE':_0x36f007(0x374),'meVDn':function(_0x5b69dc,_0x43b92a){var _0x47b169=_0x36f007;return _0x4d3210[_0x47b169(0xbb6)](_0x5b69dc,_0x43b92a);},'SbTPF':function(_0x200042,_0x3244e4){return _0x200042-_0x3244e4;}};if(_0x4d3210[_0x36f007(0x8a0)](_0x36f007(0x384),_0x36f007(0x384))){var _0x9b4137=_0x4c8057[_0x2f4b8a]['datas'+'et']['k'],_0x2dddd3='';if(_0x4d3210[_0x36f007(0x709)](_0x9b4137,'VERSI'+'ON'))_0x2dddd3=_0x580420?_0x4dbaca['versi'+'on']:'-';else{if(_0x9b4137===_0x4d3210[_0x36f007(0x3d1)])_0x2dddd3=_0x30bbd3?_0x254e23['hooks'+'Appli'+'ed']+'\x20/\x20'+_0x4e60c9['hooks'+'Regis'+_0x36f007(0xc1e)+'AtArm']:'-';else{if(_0x9b4137===_0x36f007(0x365)+'insta'+_0x36f007(0xbfa)+_0x36f007(0x88d))_0x2dddd3=_0x17ef11&&_0x52c174['wasmM'+'emory']&&_0x23390e[_0x36f007(0x412)+_0x36f007(0x32b)]['captu'+_0x36f007(0x44f)]?_0x4d3210[_0x36f007(0x202)](_0x4d3210[_0x36f007(0xbe8)](_0x2134e2[_0x36f007(0xbe3)](_0x4d3210[_0x36f007(0xb6a)](_0x1d66be['wasmM'+'emory'][_0x36f007(0x46d)],0x7*0x1351c+0x10f280+0x96644*-0x1)),'\x20MB\x20@'+'\x20')+_0x47eaaa[_0x36f007(0x412)+'emory'][_0x36f007(0x21a)],'ms'):'-';else{if(_0x9b4137===_0x36f007(0x3c3)+_0x36f007(0x308)+_0x36f007(0xbc7)+'nc')_0x2dddd3=_0x597561&&_0x2bfcbd['esp']?_0x4a73c5(_0x4a6432[_0x36f007(0x502)][_0x36f007(0x103)+_0x36f007(0x262)+'t']):'-';else{if(_0x4d3210['FMESl'](_0x9b4137,_0x36f007(0x64e)+_0x36f007(0x682)+_0x36f007(0xc3)+'u'))_0x2dddd3=_0x446eca&&_0xdea4a5[_0x36f007(0x502)]?_0x4d3210[_0x36f007(0xa29)](_0x11e42e,_0x2749e2[_0x36f007(0x502)][_0x36f007(0x99c)+_0x36f007(0x87f)]):'-';else{if(_0x9b4137==='off\x20t'+'he\x20li'+_0x36f007(0x6ea)+_0x36f007(0x784))_0x2dddd3=_0x33bcfa&&_0x1fbc64['esp']&&_0x3707fa['esp'][_0x36f007(0xadd)+'a']?_0x283e10['esp']['camer'+'a']+'\x20('+_0x295912['esp']['camer'+_0x36f007(0x16b)]+')':'-';else{if(_0x9b4137===_0x36f007(0x317)+'ntrol'+_0x36f007(0x79c)+_0x36f007(0x9f0))_0x2dddd3=_0x31e070&&_0x497b72['local']&&_0x5b7f32['local']['feet']?_0x362e76[_0x36f007(0x7d7)][_0x36f007(0x52b)][_0x36f007(0x4ba)](function(_0x7d2691){var _0x21d507=_0x36f007;return _0x866fbb[_0x21d507(0xbe3)](_0x25a5d0[_0x21d507(0x867)](_0x7d2691,0x1*-0x22e1+-0x22cf+-0x5d7*-0xc))/(-0x17cd+-0x17e5+0x3016);})[_0x36f007(0xb4a)]('\x20\x20'):'-';else{if(_0x4d3210['GYUAJ'](_0x9b4137,_0x36f007(0x97f)+'8'))_0x2dddd3=_0x2894a1&&_0x8a41a7['local']&&_0x56c939[_0x36f007(0x7d7)]['eye']?_0x339a25[_0x36f007(0x7d7)][_0x36f007(0x748)]['map'](function(_0x167dc5){var _0x2c2b46=_0x36f007;return _0x25a5d0[_0x2c2b46(0xbda)](_0x1e617b[_0x2c2b46(0xbe3)](_0x25a5d0['tmWTl'](_0x167dc5,-0x2e*0x3a+-0x229d*0x1+0x2d6d)),-0x3*-0x259+0x3*0xa3f+-0x959*0x4);})['join']('\x20\x20'):'-';else{var _0x3fe340=_0x9b4137[_0x36f007(0x60a)]('+');_0x2dddd3=_0x3ec66e(_0x2e77c9,_0x3fe340[0x42d+0x238e+-0x7*0x5ad][_0x36f007(0xb8d)+'Of'](_0x36f007(0x81)+'h')===0x21e9+0x3*0x313+-0x2b22?_0x36f007(0x81)+_0x36f007(0x8d0)+'pt':_0x4d3210[_0x36f007(0x3ea)],_0x5079af(_0x3fe340[-0xeca+0x14ce+0x39*-0x1b],-0x60b+0x1886+-0x126b));}}}}}}}}if(_0x2dddd3!==_0xeb669[_0x2d5a29][_0x36f007(0x56c)+'onten'+'t'])_0x37bbe0[_0x10ed6d][_0x36f007(0x56c)+'onten'+'t']=_0x2dddd3;}else try{var _0x5a708e=![],_0x117660=-0x26e2+0x25a9+0x139,_0xb86f1e=-0x47*-0x6b+-0x236a+0x5bd;_0x39bf18[_0x36f007(0xb1d)]['curso'+'r']=_0x4d3210['YMlUe'],_0x39bf18['style'][_0x36f007(0x208)+_0x36f007(0x446)+'n']=_0x36f007(0xbeb);var _0x150dc8=function(_0x2e124d){var _0x2bc106=_0x36f007;if('TKGHD'===_0x25a5d0[_0x2bc106(0x937)]){_0x5a708e=!![],_0x39bf18[_0x2bc106(0xb1d)][_0x2bc106(0x10d)+'r']=_0x2bc106(0xb1c)+_0x2bc106(0x12e);var _0x148f53={'left':_0x25a5d0[_0x2bc106(0x485)](parseFloat,_0x5d7f47[_0x2bc106(0xb1d)]['left'])||-0x1606+-0xe48+0x244e,'top':parseFloat(_0x5d7f47['style']['top'])||-0x384+-0x1178+-0x14fc*-0x1};if(!_0x5d7f47['style'][_0x2bc106(0x505)]||_0x5d7f47[_0x2bc106(0xb1d)][_0x2bc106(0x505)]==='auto'){if(_0x2bc106(0xb90)===_0x2bc106(0xad6))return{'pos':null,'posAt':null,'candidates':0x0,'cluster':0x0,'groups':0x0,'discarded':_0x5e3b99,'ambiguous':![],'reach':0x0,'held':![]};else _0x148f53['left']=(window[_0x2bc106(0x621)+_0x2bc106(0x17f)]||0x2c*-0x6c+0x1923+0x1*-0x693)-(_0x5d7f47['offse'+'tWidt'+'h']||0x29b*-0x5+-0x208+-0x1*-0x117b)-(-0x1c49+0x2*-0x192+0x1f85);}(!_0x5d7f47[_0x2bc106(0xb1d)][_0x2bc106(0xc05)]||_0x5d7f47[_0x2bc106(0xb1d)][_0x2bc106(0xc05)]===_0x2bc106(0x9c5))&&(_0x148f53['top']=_0x25a5d0['SbTPF'](window[_0x2bc106(0x621)+_0x2bc106(0xbf0)+'t']||-0x1d1c+-0x3*-0x3e+-0x15a*-0x15,_0x5d7f47[_0x2bc106(0x498)+'tHeig'+'ht']||0x7ab+0x17a8+-0x1dc3)-(0x1c98+0x1492*0x1+-0x3112));_0x117660=(_0x2e124d[_0x2bc106(0xa7a)+'tX']||0xb61+-0x26e9+0x371*0x8)-_0x148f53['left'],_0xb86f1e=_0x25a5d0['SbTPF'](_0x2e124d[_0x2bc106(0xa7a)+'tY']||0x1*0x169f+0x1d70+0x1*-0x340f,_0x148f53['top']);try{_0x2e124d[_0x2bc106(0xa95)+_0x2bc106(0x25f)+'ault']();}catch(_0x21aa5e){}}else _0x522331=_0x25a5d0[_0x2bc106(0x7c)](_0x5f2a92['arm']&&_0x473076[_0x2bc106(0xab8)]['ok']?_0x25a5d0['ExCsf']:'armin'+_0x2bc106(0x8d2),_0x3fd629)+'s',_0x1e8b96='#ffd4'+'8a';},_0x5d2112=function(_0x245349){var _0x39a94a=_0x36f007;if(_0x4d3210['bZfqz'](_0x4d3210['aMxXk'],_0x4d3210[_0x39a94a(0x34d)])){if(!_0x5a708e)return;var _0x57637e=_0x5d7f47[_0x39a94a(0x498)+'tWidt'+'h']||-0x2*-0x128+-0x1938+0x1954,_0x3db2ae=_0x5d7f47[_0x39a94a(0x498)+'tHeig'+'ht']||-0x325+-0x37*-0x2c+-0x4bf,_0x5c3cc4=_0x4d3210[_0x39a94a(0x212)](_0x245349[_0x39a94a(0xa7a)+'tX']||0x25e1+0x199*0x16+-0x4907*0x1,_0x117660),_0x189d8c=(_0x245349[_0x39a94a(0xa7a)+'tY']||-0xa31*0x1+0x2319+-0x63a*0x4)-_0xb86f1e;_0x5c3cc4=Math['max'](-0x5b7+-0x1a9+-0x9e*-0xc,Math[_0x39a94a(0xb40)](_0x4d3210['nlwAT'](window[_0x39a94a(0x621)+_0x39a94a(0x17f)]||-0xe3*-0x1+0x1408+0xff*-0x15,_0x57637e)-(-0x1fa1+0xa*0x293+0x5eb),_0x5c3cc4)),_0x189d8c=Math['max'](0x1e2*0x1+-0x116c+0xf92,Math[_0x39a94a(0xb40)](_0x4d3210['YGKxZ'](_0x4d3210[_0x39a94a(0x8db)](window['inner'+_0x39a94a(0xbf0)+'t']||0x1865+0xea1+-0x2706,_0x3db2ae),-0xdc6+0x699*-0x3+-0xb33*-0x3),_0x189d8c)),_0x5d7f47[_0x39a94a(0xb1d)]['left']=_0x5c3cc4+'px',_0x5d7f47['style'][_0x39a94a(0xc05)]=_0x4d3210[_0x39a94a(0xa04)](_0x189d8c,'px'),_0x5d7f47[_0x39a94a(0xb1d)]['right']=_0x4d3210['ExaPu'],_0x5d7f47[_0x39a94a(0xb1d)][_0x39a94a(0x394)+'m']=_0x4d3210['ExaPu'],_0x3c9210['pos']={'x':_0x5c3cc4,'y':_0x189d8c};}else{var _0xfbb328=_0x445a9a[_0x2b9218[_0x582fdb]];if(_0xfbb328&&typeof _0xfbb328==='objec'+'t'&&_0xfbb328['Modul'+'e']&&_0xfbb328[_0x39a94a(0x568)+'e']['HEAPU'+'8']&&_0xfbb328['Modul'+'e'][_0x39a94a(0x581)+'8']['buffe'+'r'])return _0x15503f[_0x39a94a(0xbca)+'e']='windo'+'w.'+_0x4ec0ba[_0x5e692e]+('.Modu'+'le'),_0xfbb328;}},_0x589439=function(){var _0x31de92=_0x36f007;if(!_0x5a708e)return;_0x5a708e=![],_0x39bf18[_0x31de92(0xb1d)][_0x31de92(0x10d)+'r']=_0x31de92(0x378),_0x4d3210[_0x31de92(0x279)](_0x45574e);};_0x39bf18[_0x36f007(0xbb7)+_0x36f007(0x1e3)+'stene'+'r'](_0x36f007(0x57c)+'down',_0x150dc8),window[_0x36f007(0xbb7)+'entLi'+'stene'+'r']('mouse'+'move',_0x5d2112),window['addEv'+'entLi'+_0x36f007(0x740)+'r'](_0x4d3210[_0x36f007(0xbde)],_0x589439),_0x39bf18[_0x36f007(0xbb7)+_0x36f007(0x1e3)+_0x36f007(0x740)+'r']('touch'+_0x36f007(0x333),_0x150dc8,{'passive':![]}),window['addEv'+'entLi'+'stene'+'r'](_0x4d3210['mmjgq'],_0x5d2112,{'passive':![]}),window[_0x36f007(0xbb7)+_0x36f007(0x1e3)+'stene'+'r'](_0x4d3210['DKjiK'],_0x589439);}catch(_0x5c7434){}}function _0x3522c1(){var _0x458182=_0x1b4785,_0x2e7730={'EcFRR':_0x4d3210[_0x458182(0x57a)]};if(_0x3c9210['built'])return _0x3c9210[_0x458182(0x1ca)];try{if(!document[_0x458182(0x39e)]||!document[_0x458182(0x39e)][_0x458182(0x950)+'dChil'+'d'])return null;if(!document[_0x458182(0x2f3)+'ement'+_0x458182(0x5d4)](_0x458182(0x7c6)+'a-men'+_0x458182(0x670))){var _0x2418ac=document[_0x458182(0x7c8)+_0x458182(0x7d8)+_0x458182(0x173)]('style');_0x2418ac['id']=_0x4d3210[_0x458182(0x7e9)],_0x2418ac['textC'+_0x458182(0x276)+'t']=_0x554616,(document['head']||document['docum'+_0x458182(0x68f)+_0x458182(0x717)])[_0x458182(0x950)+'dChil'+'d'](_0x2418ac);}var _0x35e5cc=_0x4d3210['iGPYr'](_0x284a02,_0x4d3210[_0x458182(0x448)],'mn-pa'+_0x458182(0xc4d));_0x35e5cc['id']=_0x4d3210['byhRO'];var _0x56ab7b=_0x4d3210['LAIGy'](_0x284a02,_0x458182(0x1f7),_0x458182(0x280)+'de'),_0x198949=_0x4d3210[_0x458182(0x4e4)](_0x284a02,_0x458182(0x1f7),_0x458182(0x49c)+'go',_0xd6f58a);_0x56ab7b[_0x458182(0x950)+'dChil'+'d'](_0x198949);var _0x410bb3=_0x284a02(_0x458182(0x1f7),_0x4d3210[_0x458182(0x8c6)]),_0x175535=_0x4d3210[_0x458182(0x633)](_0x284a02,_0x4d3210[_0x458182(0x448)],_0x458182(0x787)+'p'),_0x340f6f=_0x284a02(_0x4d3210[_0x458182(0x448)],'mn-ti'+'tles'),_0x5519e1=_0x284a02(_0x458182(0x1f7),'mn-h',_0x4d3210['JmbjX']),_0x1bf1f5=_0x284a02(_0x458182(0x1f7),'mn-su'+'b',_0x458182(0x333)+'ing…');_0x340f6f[_0x458182(0x950)+'dChil'+'d'](_0x5519e1),_0x340f6f['appen'+'dChil'+'d'](_0x1bf1f5);var _0x50b29b=_0x4d3210[_0x458182(0x30a)](_0x284a02,_0x4d3210[_0x458182(0x448)],_0x458182(0x6b5)+'ose',_0x4d3210['oWCXK']);_0x50b29b['oncli'+'ck']=function(){_0x2b899c(![]);},_0x175535[_0x458182(0x950)+'dChil'+'d'](_0x340f6f),_0x175535[_0x458182(0x950)+'dChil'+'d'](_0x50b29b);var _0x146418=_0x4d3210['FtDAM'](_0x284a02,_0x4d3210['csExw'],_0x458182(0x2b0)+'ls');_0x410bb3['appen'+_0x458182(0x315)+'d'](_0x175535),_0x410bb3[_0x458182(0x950)+'dChil'+'d'](_0x146418),_0x35e5cc[_0x458182(0x950)+'dChil'+'d'](_0x56ab7b),_0x35e5cc['appen'+_0x458182(0x315)+'d'](_0x410bb3),document[_0x458182(0x39e)][_0x458182(0x950)+_0x458182(0x315)+'d'](_0x35e5cc),_0x3c9210['root']=_0x35e5cc,_0x3c9210['cols']=_0x146418,_0x3c9210[_0x458182(0x179)]=_0x5519e1,_0x3c9210[_0x458182(0xa8e)]=_0x1bf1f5,_0x4d3210[_0x458182(0x6ae)](_0x4f8f08),_0x252d36(),_0x51957a(_0x35e5cc,_0x175535);var _0x25f4d3={};for(var _0x5cbea2=0x2460+-0xab7*0x3+-0x43b;_0x5cbea2<_0x4353e[_0x458182(0x17c)+'h'];_0x5cbea2++){if(_0x4d3210['Sxmtw']('OpXhc',_0x4d3210['cjgwD'])){var _0x458815=_0x24b8c8['getIt'+'em'](_0x29d363);if(!_0x458815)return;var _0x41ad5a=_0x25c900[_0x458182(0x899)](_0x458815);if(_0x41ad5a&&typeof _0x41ad5a['x']===_0x4d3210['ZQASv']&&typeof _0x41ad5a['y']===_0x4d3210['ZQASv'])_0x116c9b[_0x458182(0x1df)]=_0x41ad5a;}else{var _0x5ed0f5=_0x4353e[_0x5cbea2],_0x272b24=_0x284a02('butto'+'n',_0x4d3210[_0x458182(0x3e0)],_0x4d3210[_0x458182(0x858)](_0x4d3210['KyaIP'](_0x458182(0x4f4)+'l>',_0x5ed0f5[_0x458182(0x425)]),_0x458182(0x531)+_0x458182(0xdf)));_0x272b24[_0x458182(0x55a)]=_0x458182(0x2a3)+'n',_0x272b24['title']=_0x5ed0f5['label'],function(_0x485626){var _0xa7d2c7=_0x458182;if(_0x2e7730['EcFRR']!==_0xa7d2c7(0x9db))try{_0x365062['setIt'+'em'](_0x571619,_0x4a365e[_0xa7d2c7(0x91d)+_0xa7d2c7(0x217)](_0x2e89da[_0xa7d2c7(0x1df)]));}catch(_0x4ea121){}else _0x272b24[_0xa7d2c7(0xae1)+'ck']=function(){_0x47a4dd(_0x485626);};}(_0x5ed0f5['id']),_0x25f4d3[_0x5ed0f5['id']]=_0x272b24,_0x56ab7b['appen'+_0x458182(0x315)+'d'](_0x272b24);}}_0x3c9210['butto'+'ns']=_0x25f4d3;var _0x3d9bf7=_0x284a02(_0x4d3210[_0x458182(0x448)],null,_0x295509);return _0x3d9bf7['id']='sakur'+'a-pet'+'al',_0x3d9bf7[_0x458182(0x4c6)]=_0x4d3210[_0x458182(0x3db)],_0x3d9bf7[_0x458182(0x462)+_0x458182(0x148)+'er']=function(){var _0x29b58a=_0x458182;_0x3d9bf7[_0x29b58a(0xb1d)][_0x29b58a(0x278)+'ty']='1';},_0x3d9bf7['onmou'+_0x458182(0x1f3)+'ve']=function(){var _0x279d73=_0x458182;_0x3d9bf7[_0x279d73(0xb1d)][_0x279d73(0x278)+'ty']=_0x3c9210[_0x279d73(0xb8f)]?'1':'.5';},_0x3d9bf7[_0x458182(0xae1)+'ck']=function(_0x1726c3){var _0x5e4901=_0x458182;if(_0x1726c3&&_0x1726c3['stopP'+'ropag'+_0x5e4901(0x349)])_0x1726c3['stopP'+_0x5e4901(0x3cc)+_0x5e4901(0x349)]();_0x2b899c(!_0x3c9210['open']);},document[_0x458182(0x39e)][_0x458182(0x950)+_0x458182(0x315)+'d'](_0x3d9bf7),_0x3c9210[_0x458182(0x69b)]=_0x3d9bf7,_0x4d3210['iGPYr'](setInterval,function(){var _0x464cff=_0x458182;try{if(!_0x3c9210[_0x464cff(0x69b)])return;var _0x247b66=_0x157ac9();_0x3c9210['petal']['style'][_0x464cff(0x278)+'ty']=_0x3c9210[_0x464cff(0xb8f)]?'1':_0x247b66?'.8':_0x464cff(0xab4),_0x3c9210[_0x464cff(0x69b)][_0x464cff(0x4c6)]=_0x247b66?'Sakur'+_0x464cff(0xaf2)+_0x464cff(0x753)+_0x464cff(0xc4e)+_0x464cff(0x45b):_0x464cff(0x445)+_0x464cff(0xaf2)+_0x464cff(0x753)+_0x464cff(0xb16)+'aitin'+_0x464cff(0x126)+'\x20the\x20'+'game\x20'+'(Inse'+_0x464cff(0x674);}catch(_0x2d846c){}},-0x1f3*0xe+0xc23*0x1+0x11e3),_0x3c9210['built']=!![],_0x47a4dd(_0x3c9210[_0x458182(0x731)]),_0x35e5cc;}catch(_0x3c3bb8){return console[_0x458182(0x463)](_0x458182(0xaad)+_0x458182(0xb0c)+'\x20menu'+_0x458182(0x2ce)+_0x458182(0x5cb)+'le',_0x4d3210[_0x458182(0x969)]('color'+':',_0x10dc48),_0x3c3bb8),null;}}function _0x47a4dd(_0x369aa9){var _0xe3e3d2=_0x1b4785;if(_0xe3e3d2(0x6be)!==_0xe3e3d2(0x6be))return null;else{_0x3c9210['cat']=_0x369aa9,_0x3c9210[_0xe3e3d2(0x3f3)]=[];if(!_0x3c9210['cols'])return;var _0x380b48=null;for(var _0x2b2808=0x25f8+-0x303*0x4+-0x19ec;_0x4d3210[_0xe3e3d2(0x7d9)](_0x2b2808,_0x4353e[_0xe3e3d2(0x17c)+'h']);_0x2b2808++)if(_0x4353e[_0x2b2808]['id']===_0x369aa9)_0x380b48=_0x4353e[_0x2b2808];_0x3c9210['head']['textC'+_0xe3e3d2(0x276)+'t']=_0x4d3210['tiIUH']+(_0x380b48&&_0x380b48['label']||'?');for(var _0x1daed6 in _0x3c9210[_0xe3e3d2(0x2a3)+'ns']){if(_0x3c9210['butto'+'ns'][_0x1daed6]['class'+_0xe3e3d2(0x628)])_0x3c9210['butto'+'ns'][_0x1daed6][_0xe3e3d2(0x2a5)+_0xe3e3d2(0x69a)]='mn-ta'+'b'+(_0x1daed6===_0x369aa9?'\x20acti'+'ve':'');}var _0x23b06d=[];try{_0x23b06d=_0x4d3210[_0xe3e3d2(0xbcc)](_0x25f0ab,_0x369aa9);}catch(_0x73a92a){_0x4d3210['bYwXG'](_0x4d3210['LoEun'],'kXywG')?_0xe67036['sane']=![]:_0x23b06d=[];}while(_0x3c9210['cols']['first'+_0xe3e3d2(0x7b8)])_0x3c9210[_0xe3e3d2(0xa5b)][_0xe3e3d2(0x5a0)+_0xe3e3d2(0xb22)+'d'](_0x3c9210[_0xe3e3d2(0xa5b)]['first'+_0xe3e3d2(0x7b8)]);for(var _0x1ef4a2=-0x1980+0x1*-0x25d5+-0x1*-0x3f55;_0x1ef4a2<_0x23b06d[_0xe3e3d2(0x17c)+'h'];_0x1ef4a2++)_0x3c9210[_0xe3e3d2(0xa5b)][_0xe3e3d2(0x950)+'dChil'+'d'](_0x23b06d[_0x1ef4a2]);}}function _0x2b899c(_0x3f2f60){var _0x9bb829=_0x1b4785;_0x3c9210[_0x9bb829(0xb8f)]=!!_0x3f2f60;var _0x3e6799=_0x3522c1();if(!_0x3e6799)return;_0x3e6799['class'+_0x9bb829(0x69a)]=_0x4d3210[_0x9bb829(0x81e)]+(_0x3c9210[_0x9bb829(0xb8f)]?'\x20show'+'n':'');if(_0x3c9210[_0x9bb829(0x69b)])_0x3c9210['petal'][_0x9bb829(0xb1d)][_0x9bb829(0x278)+'ty']=_0x3c9210['open']?'1':'.5';if(_0x3c9210[_0x9bb829(0xb8f)]){_0x4d3210[_0x9bb829(0x4a9)](_0x47a4dd,_0x3c9210[_0x9bb829(0x731)]);try{var _0x21dc24=window[_0x9bb829(0x621)+'Heigh'+'t']||-0x38f*-0x2+-0xfc1*0x1+0xbc3*0x1;if(_0x21dc24<-0x1f0e+0xd13*0x2+-0x754*-0x1)_0x4d3210[_0x9bb829(0x403)](_0x3b999e,![]);}catch(_0x1a8a05){}}}function _0x59b8d0(){var _0x14571a=_0x1b4785,_0xfc61a7={'SSmlF':function(_0x4b69db,_0x398ce6){var _0xa504c0=_0x224c;return _0x4d3210[_0xa504c0(0xc6c)](_0x4b69db,_0x398ce6);},'lSjVH':_0x14571a(0x24d)+'ined','RSzop':function(_0x51cdf8,_0x3dc628){var _0x1c5b40=_0x14571a;return _0x4d3210[_0x1c5b40(0x32f)](_0x51cdf8,_0x3dc628);},'UXsLE':function(_0x5e4546,_0x1d7ab8){return _0x5e4546&&_0x1d7ab8;},'PgkLd':_0x4d3210[_0x14571a(0x448)],'VwntG':'posit'+_0x14571a(0xa97)+_0x14571a(0x44a)+_0x14571a(0x8f1)+'12px;'+'top:1'+'2px;z'+_0x14571a(0x8bc)+'x:214'+_0x14571a(0x74b)+_0x14571a(0xae6)+_0x14571a(0xab5)+'point'+_0x14571a(0x20f)+'er-se'+_0x14571a(0x766)+_0x14571a(0x274),'JAwCD':_0x14571a(0x4b8)+_0x14571a(0x8bf)+_0x14571a(0x67b)+_0x14571a(0x30c)+_0x14571a(0xa50)+_0x14571a(0xa83)+_0x14571a(0x73f)+_0x14571a(0x354)+_0x14571a(0x209)+_0x14571a(0x545)+_0x14571a(0x818)+_0x14571a(0x31a)+_0x14571a(0xb52)+_0x14571a(0x827)+'as,mo'+'nospa'+'ce;','OlfUG':'sakur'+'a','GMPrb':function(_0x35a543,_0x260279){return _0x35a543&&_0x260279;}};if(!_0x3c9210['open']||!_0x3c9210[_0x14571a(0x60e)])return;try{for(var _0x367fb1=-0x2440+0x141*0x14+0x1a*0x6e;_0x4d3210[_0x14571a(0x43c)](_0x367fb1,_0x3c9210['syncs']['lengt'+'h']);_0x367fb1++){try{_0x3c9210[_0x14571a(0x3f3)][_0x367fb1]();}catch(_0x1933e1){}}var _0x160bdf=_0xa632df;_0x3c9210[_0x14571a(0xa8e)][_0x14571a(0x56c)+_0x14571a(0x276)+'t']=_0x160bdf?_0x4d3210['jDnpB'](_0x4d3210[_0x14571a(0x70f)](_0x4d3210['jxHOO']('v',_0x160bdf[_0x14571a(0x43b)+'on'])+('\x20\x20·\x20\x20'+_0x14571a(0x8b)+'\x20'),_0x160bdf[_0x14571a(0x8b)+_0x14571a(0x70c)+'ed'])+'/'+_0x160bdf['hooks'+'Total']+('\x20\x20·\x20\x20'+_0x14571a(0x103)+_0x14571a(0x883))+(_0x160bdf['esp']&&_0x160bdf['esp']['playe'+_0x14571a(0x262)+'t']||-0x2578+-0x13f4+0x396c)+('\x20\x20·\x20\x20'+_0x14571a(0x65f)),_0x160bdf['wasmM'+_0x14571a(0x32b)]&&_0x160bdf['wasmM'+'emory'][_0x14571a(0x6bb)+'red']?_0x4d3210[_0x14571a(0x2e2)](Math['round'](_0x4d3210['FNaZW'](_0x160bdf['wasmM'+'emory'][_0x14571a(0x46d)],0x357d+0x1be62d+-0xc1baa)),'MB'):'-'):_0x14571a(0xc60)+'ng\x20fo'+_0x14571a(0x223)+'\x20firs'+'t\x20rep'+_0x14571a(0x7b);var _0x405a5d=_0x3c9210[_0x14571a(0xa5b)][_0x14571a(0x47d)+'Selec'+_0x14571a(0x9ae)+'l']?_0x3c9210['cols'][_0x14571a(0x47d)+'Selec'+_0x14571a(0x9ae)+'l'](_0x14571a(0x841)+_0x14571a(0x718)):[];for(var _0x3fb09b=-0x4*0x872+-0x15fc+-0x14c*-0x2b;_0x3fb09b<_0x405a5d[_0x14571a(0x17c)+'h'];_0x3fb09b++){var _0x28a448=_0x405a5d[_0x3fb09b]['datas'+'et']['k'],_0x5045b5='';if(_0x28a448==='VERSI'+'ON')_0x5045b5=_0x160bdf?_0x160bdf['versi'+'on']:'-';else{if(_0x4d3210[_0x14571a(0xa06)](_0x28a448,_0x4d3210[_0x14571a(0x3d1)]))_0x5045b5=_0x160bdf?_0x4d3210['KfSZa'](_0x160bdf['hooks'+_0x14571a(0x70c)+'ed'],_0x4d3210['GTnnX'])+_0x160bdf['hooks'+_0x14571a(0x6b0)+_0x14571a(0xc1e)+_0x14571a(0x974)]:'-';else{if(_0x28a448===_0x14571a(0x365)+_0x14571a(0xb9)+_0x14571a(0xbfa)+_0x14571a(0x88d))_0x5045b5=_0x160bdf&&_0x160bdf[_0x14571a(0x412)+'emory']&&_0x160bdf[_0x14571a(0x412)+_0x14571a(0x32b)]['captu'+'red']?_0x4d3210['qqOBb'](Math['round'](_0x160bdf[_0x14571a(0x412)+_0x14571a(0x32b)]['bytes']/(0xa13*0x207+0xe4665*0x1+0x5*-0x3bd62))+_0x4d3210[_0x14571a(0x9e3)],_0x160bdf[_0x14571a(0x412)+_0x14571a(0x32b)][_0x14571a(0x21a)])+'ms':'-';else{if(_0x28a448==='Photo'+_0x14571a(0x308)+'orkSy'+'nc')_0x5045b5=_0x160bdf&&_0x160bdf[_0x14571a(0x502)]?_0x4d3210[_0x14571a(0x51e)](String,_0x160bdf['esp'][_0x14571a(0x103)+'rCoun'+'t']):'-';else{if(_0x28a448===_0x4d3210['XcRqR'])_0x5045b5=_0x160bdf&&_0x160bdf['esp']?String(_0x160bdf[_0x14571a(0x502)][_0x14571a(0x99c)+_0x14571a(0x87f)]):'-';else{if(_0x4d3210[_0x14571a(0x963)](_0x28a448,'off\x20t'+'he\x20li'+'ve\x20ma'+_0x14571a(0x784)))_0x5045b5=_0x160bdf&&_0x160bdf[_0x14571a(0x502)]&&_0x160bdf[_0x14571a(0x502)]['camer'+'a']?_0x4d3210['jUcek'](_0x160bdf[_0x14571a(0x502)][_0x14571a(0xadd)+'a'],'\x20(')+_0x160bdf['esp'][_0x14571a(0xadd)+_0x14571a(0x16b)]+')':'-';else{if(_0x28a448===_0x14571a(0x317)+_0x14571a(0x4a2)+'ler+0'+'x2E4')_0x5045b5=_0x160bdf&&_0x160bdf[_0x14571a(0x7d7)]&&_0x160bdf[_0x14571a(0x7d7)][_0x14571a(0x52b)]?_0x160bdf['local'][_0x14571a(0x52b)][_0x14571a(0x4ba)](function(_0x1d6168){var _0x11b4db=_0x14571a;return Math[_0x11b4db(0xbe3)](_0xfc61a7[_0x11b4db(0x752)](_0x1d6168,0x3b9+-0x3fb+-0x2*-0x53))/(0x1b1*0x1+-0x1be6+0x1a99);})[_0x14571a(0xb4a)]('\x20\x20'):'-';else{if(_0x4d3210[_0x14571a(0x720)](_0x28a448,_0x4d3210[_0x14571a(0x267)]))_0x5045b5=_0x160bdf&&_0x160bdf[_0x14571a(0x7d7)]&&_0x160bdf[_0x14571a(0x7d7)][_0x14571a(0x748)]?_0x160bdf[_0x14571a(0x7d7)][_0x14571a(0x748)][_0x14571a(0x4ba)](function(_0x284dd6){var _0x309ea8=_0x14571a,_0x1e8220={'iMAsh':_0xfc61a7[_0x309ea8(0x98e)],'rIuKP':'unity'+'Game','DCMRz':'game','OtJQX':_0x309ea8(0xc4)+'Insta'+'nceWr'+_0x309ea8(0x1d2),'BIiDT':function(_0x1444d8){return _0x1444d8();}};if('ZxIEy'!==_0x309ea8(0x896))return Math[_0x309ea8(0xbe3)](_0x284dd6*(0x1632*-0x1+0x1b61+-0x4cb))/(0x1dfd*-0x1+-0x2054+-0x3eb5*-0x1);else{var _0x1a8966=('2|4|0'+_0x309ea8(0xba6)+'6|5|1')[_0x309ea8(0x60a)]('|'),_0x174e14=0x2*-0x2b6+-0x36a+0x8d6;while(!![]){switch(_0x1a8966[_0x174e14++]){case'0':for(var _0x4e9066=0x1556+0x3*0x9c0+0xb9*-0x46;_0x4e9066<_0x463751['lengt'+'h'];_0x4e9066++){var _0x4837f5=_0x463751[_0x4e9066],_0x29caaa=typeof _0x3db155[_0x4837f5];_0x55f69e[_0x4837f5]=_0x29caaa==='undef'+'ined'?_0x1e8220[_0x309ea8(0x88f)]:_0x29caaa;}continue;case'1':return _0x55f69e;case'2':var _0x463751=['unity'+_0x309ea8(0x2af)+_0x309ea8(0x322),_0x1e8220['rIuKP'],_0x1e8220[_0x309ea8(0xb58)],_0x1e8220[_0x309ea8(0x439)]];continue;case'3':var _0x129e0b=_0x1e8220[_0x309ea8(0x422)](_0x3f2de0);continue;case'4':var _0x55f69e={};continue;case'5':_0x55f69e[_0x309ea8(0xac7)+'Wrapp'+'er']=typeof _0x2485b4;continue;case'6':try{_0x55f69e['hasMo'+_0x309ea8(0x3a4)]=!!(_0x129e0b&&_0x129e0b[_0x309ea8(0x568)+'e']),_0x55f69e['heapU'+'8']=!!(_0x129e0b&&_0x129e0b[_0x309ea8(0x568)+'e']&&_0x129e0b[_0x309ea8(0x568)+'e'][_0x309ea8(0x581)+'8']),_0x55f69e[_0x309ea8(0x999)+'ytes']=_0x55f69e[_0x309ea8(0xa66)+'8']?_0x129e0b['Modul'+'e']['HEAPU'+'8'][_0x309ea8(0x17c)+'h']:0x16*-0x4+0x26e8+-0x4*0x9a4;}catch(_0x2abe4a){_0x55f69e[_0x309ea8(0xa58)+'dule']=![],_0x55f69e[_0x309ea8(0xa66)+'8']=![],_0x55f69e[_0x309ea8(0x999)+'ytes']=-0xb1b+0x1042+-0x527;}continue;case'7':_0x55f69e['gameS'+'ource']=_0x2da2ab[_0x309ea8(0xbca)+'e'];continue;}break;}}})['join']('\x20\x20'):'-';else{if(_0x4d3210[_0x14571a(0x77c)]!=='Afmby'){var _0x1710e3=_0x28e5fe[_0x14571a(0x2f3)+_0x14571a(0x717)+_0x14571a(0x5d4)](_0x14571a(0x7c6)+_0x14571a(0x90f)+'v2-ta'+'b');if(_0xfc61a7['UXsLE'](_0x189886,!_0x1710e3)&&_0xe714dd['body']){var _0x446f90=_0xe3c811['creat'+_0x14571a(0x7d8)+_0x14571a(0x173)](_0xfc61a7[_0x14571a(0x7da)]);_0x446f90['id']=_0x14571a(0x7c6)+'a-sw-'+'v2-ta'+'b',_0x446f90[_0x14571a(0xb1d)]['cssTe'+'xt']=_0xfc61a7['VwntG']+(_0x14571a(0x588)+_0x14571a(0xbe3)+':rgba'+_0x14571a(0x595)+'2,29,'+_0x14571a(0x77d)+'order'+_0x14571a(0x2cd)+_0x14571a(0xc04)+'\x20rgba'+_0x14571a(0x12a)+_0x14571a(0xa26)+_0x14571a(0x942)+');col'+_0x14571a(0x4b7))+_0x124f2e+';'+_0xfc61a7[_0x14571a(0x64d)],_0x446f90['textC'+_0x14571a(0x276)+'t']=_0xfc61a7[_0x14571a(0xa6a)],_0x446f90[_0x14571a(0xae1)+'ck']=function(){var _0x2c7cfd=_0x14571a;_0xfc61a7[_0x2c7cfd(0xa72)](_0x30ad35,![]),_0x3d602d();},_0x2d49b7[_0x14571a(0x39e)][_0x14571a(0x950)+_0x14571a(0x315)+'d'](_0x446f90);}else _0xfc61a7[_0x14571a(0x9c6)](!_0x46c27c,_0x1710e3)&&_0x1710e3[_0x14571a(0x5a0)+'e']();}else{var _0xe6a3ba=_0x28a448['split']('+');_0x5045b5=_0x1da87d(_0x160bdf,_0x4d3210['FzmkR'](_0xe6a3ba[-0x6*-0x66c+-0x138c+0x195*-0xc]['index'+'Of'](_0x14571a(0x81)+'h'),-0xfc1*0x1+-0x3df+0x13a0)?'Healt'+'hScri'+'pt':_0x14571a(0x317)+_0x14571a(0x4a2)+_0x14571a(0x6ff),parseInt(_0xe6a3ba[0x1*0x1567+0x1*-0x1b82+0x61c],0x6f9+0x9bd+-0x10a6));}}}}}}}}}if(_0x5045b5!==_0x405a5d[_0x3fb09b]['textC'+_0x14571a(0x276)+'t'])_0x405a5d[_0x3fb09b][_0x14571a(0x56c)+_0x14571a(0x276)+'t']=_0x5045b5;}}catch(_0x4654e3){}}function _0x5551a0(){var _0x2e22b0=_0x1b4785;if('hRnWx'===_0x2e22b0(0x2c0))try{var _0x7151f9=_0x4a5832();return _0x7151f9&&_0x7151f9[_0x2e22b0(0x52b)]?_0x7151f9[_0x2e22b0(0x52b)][0x20e5+0x1*-0x1164+0x7c0*-0x2]:null;}catch(_0x2e8b24){return null;}else{var _0x53824a=_0x4e814f[_0x2e22b0(0x47d)+'Selec'+_0x2e22b0(0x9ae)+'l'](_0x2e22b0(0x245)+'e');for(var _0x341d61=-0x2410+-0x2362+0x4772;_0x341d61<_0x53824a[_0x2e22b0(0x17c)+'h'];_0x341d61++){try{if(_0x53824a[_0x341d61][_0x2e22b0(0xaab)+'ntWin'+_0x2e22b0(0x361)])_0x53824a[_0x341d61]['conte'+_0x2e22b0(0xb18)+'dow']['postM'+_0x2e22b0(0x225)+'e'](_0x5d46b4,'*');}catch(_0x1553d2){}}}}var _0x2240e4=0x4b*-0x2b+0x1*0x196d+-0xcd2+0.5,_0x1afc01=0x1f63+-0x349*0x5+-0xef0+0.25,_0x1177dd={},_0x3b6eae=null,_0x3dfca6=0x13ac+-0x114*-0xb+0x7*-0x481+0.8;function _0x199b13(_0x5a9d76,_0x435014,_0x2d999d){var _0x56258a=_0x1b4785,_0x2cfd4e={'VGFSH':function(_0x485c0b,_0x525a3d){return _0x485c0b+_0x525a3d;},'pyZuY':'both\x20'+_0x56258a(0xbd9)+'ed','KRLKO':_0x4d3210[_0x56258a(0x6da)]};try{var _0x2e70ab=[],_0x1b79cc,_0x8094ec,_0x680e72=_0x4d3210['Jdjuu'](_0x435014,null)&&_0x4d3210[_0x56258a(0x7ba)](_0x435014,undefined)&&isFinite(_0x435014),_0x36f3dd=0x1783*0x1+0xf00+-0x2683;for(_0x1b79cc=0x1c77+0x26d8+-0x434f;_0x1b79cc<_0x5a9d76['lengt'+'h'];_0x1b79cc++){var _0x48fda3=_0x5a9d76[_0x1b79cc]['v'];if(!_0x48fda3)continue;var _0x56bd08=Math[_0x56258a(0x3e3)](_0x4d3210[_0x56258a(0xc66)](_0x48fda3[0x253+-0x2*0xa0f+-0x11cb*-0x1],_0x48fda3[-0xa20+0x11c9+0x25*-0x35])+_0x48fda3[0x71d+-0xdfd+0x6e2]*_0x48fda3[-0x1b95+0x393*-0x8+-0x2f5*-0x13]);if(_0x56bd08>_0x36f3dd)_0x36f3dd=_0x56bd08;}var _0x1421b6=_0x36f3dd*(0x611*0x3+-0xe3c+0x3f7*-0x1+0.25),_0x37b10d=-0x1b22+-0x1*-0x1d36+-0x214;_0x4d3210[_0x56258a(0x399)](typeof console,_0x56258a(0x24d)+'ined')&&console[_0x56258a(0x6fb)]&&!globalThis[_0x56258a(0xa2b)+'ogged']&&(globalThis[_0x56258a(0xa2b)+'ogged']=-0x527*-0x1+0x4e1+-0xa07*0x1,console[_0x56258a(0x6fb)](_0x4d3210[_0x56258a(0x54f)](_0x4d3210[_0x56258a(0x858)](_0x4d3210['nVCby']('PP>>\x20'+'n='+_0x5a9d76[_0x56258a(0x17c)+'h']+('\x20reac'+'h=')+_0x36f3dd[_0x56258a(0x657)+'ed'](-0xcbb*-0x2+0xe6*0x27+-0x3c7e)+_0x4d3210[_0x56258a(0xaac)]+_0x1421b6['toFix'+'ed'](-0x2420+0x2*0x10a3+0x2dc)+_0x4d3210['TYwFE'],_0x680e72),_0x4d3210[_0x56258a(0x9d5)]),JSON[_0x56258a(0x91d)+'gify'](_0x5a9d76['slice'](0x202a+0x2bc+-0x22e6,-0x1f18+0x1179+0xda1)))));for(_0x1b79cc=0x87*-0x19+-0x1*-0x1cf5+-0xfc6;_0x1b79cc<_0x5a9d76[_0x56258a(0x17c)+'h'];_0x1b79cc++){var _0x54bfb4=_0x5a9d76[_0x1b79cc]['v'];if(!_0x54bfb4)continue;if(_0x4d3210[_0x56258a(0xa06)](_0x54bfb4[0xac3+-0x1*0x22db+0x1818],-0x59*0x2+-0x247b*0x1+0x252d)&&_0x54bfb4[-0x10c+-0x1c0+0x2cd]===0x4c1*-0x1+0x146c*0x1+-0xfab&&_0x4d3210[_0x56258a(0x470)](_0x54bfb4[-0x2*-0x100d+-0x1590+-0x2a2*0x4],0xc07+-0x2*0xb5+-0x8f*0x13))continue;var _0x9ad444=Math[_0x56258a(0x3e3)](_0x4d3210[_0x56258a(0xa01)](_0x54bfb4[0x1bcd+-0xb*0x370+0xa03]*_0x54bfb4[-0x5dd*-0x5+0xede+-0x2c2f*0x1],_0x54bfb4[0x1d54+0x6c*0x57+-0x272*0x1b]*_0x54bfb4[0x180d*0x1+-0x3*0xc9+-0x15b0]));if(_0x4d3210['TCgHc'](_0x9ad444,_0x1421b6)){_0x37b10d++;continue;}_0x2e70ab[_0x56258a(0x558)](_0x5a9d76[_0x1b79cc]);}if(!_0x2e70ab[_0x56258a(0x17c)+'h'])return'KMbaA'!==_0x4d3210[_0x56258a(0xe2)]?{'pos':null,'posAt':null,'candidates':0x0,'cluster':0x0,'groups':0x0,'discarded':_0x37b10d,'ambiguous':![],'reach':0x0,'held':![]}:_0x21f638[_0x56258a(0xbe3)](_0x4d3210[_0x56258a(0x556)](_0x1c2660,-0x20b*0xa+0x8fb+0xbd7))/(-0x25bb+-0x1b26+0x4145);var _0x1ee50b=[];for(_0x1b79cc=0x250a+-0x1d7c+0x78e*-0x1;_0x1b79cc<_0x2e70ab[_0x56258a(0x17c)+'h'];_0x1b79cc++){var _0x33fd33=_0x2e70ab[_0x1b79cc]['v'],_0x44e178=-(0x56*-0x71+0x18ec+0xd0b);for(_0x8094ec=-0xdf8+-0xa7*-0x3a+-0x17de;_0x4d3210['ztGQT'](_0x8094ec,_0x1ee50b['lengt'+'h']);_0x8094ec++){var _0x2d0a8b=_0x1ee50b[_0x8094ec]['c'][0x1bd5+-0x7*0x546+0x915]['v'],_0x32bfcc=_0x33fd33[0xca4*-0x1+-0x9*0x377+0x2bd3]-_0x2d0a8b[-0x1*-0xf9d+-0x1eb8+0xf1b],_0x3778d1=_0x33fd33[-0x18ce+0x2*-0x68e+0x23b*0x11]-_0x2d0a8b[0x1f15+0x989*-0x1+0x158b*-0x1],_0x3f9095=_0x33fd33[-0x4*0x5e5+0x475+0x3b*0x53]-_0x2d0a8b[-0x525*0x5+0x12dc*-0x1+-0x2f9*-0xf];if(_0x4d3210[_0x56258a(0x54b)](_0x4d3210[_0x56258a(0x203)](_0x4d3210[_0x56258a(0x99d)](_0x32bfcc,_0x32bfcc),_0x3778d1*_0x3778d1),_0x3f9095*_0x3f9095)<=_0x1afc01){_0x44e178=_0x8094ec;break;}}if(_0x4d3210[_0x56258a(0x709)](_0x44e178,-(-0xf0+0x25d*-0xd+0x1faa)))_0x1ee50b['push']({'c':[_0x2e70ab[_0x1b79cc]]});else _0x1ee50b[_0x44e178]['c'][_0x56258a(0x558)](_0x2e70ab[_0x1b79cc]);}var _0x59cbe6=_0x1ee50b[-0x2266+0x1*-0x93c+0x2ba2],_0x519703=-Infinity;for(_0x8094ec=-0x2*0x83f+-0x1*-0x238f+-0x3*0x65b;_0x8094ec<_0x1ee50b[_0x56258a(0x17c)+'h'];_0x8094ec++){var _0x5d6255=_0x1ee50b[_0x8094ec]['c'],_0x1ec803=_0x5d6255[_0x56258a(0x17c)+'h']*(-0x4f*0xe+-0x12db+0x3*0x907);if(_0x680e72){var _0x37ad02=Infinity;for(var _0x346ef9=-0x89*0xb+-0x115*0x20+0x2883;_0x4d3210[_0x56258a(0x1d8)](_0x346ef9,_0x5d6255['lengt'+'h']);_0x346ef9++){var _0x13d6cc=Math['abs'](_0x5d6255[_0x346ef9]['v'][-0xa8b*0x1+0x25a7+-0x1b1b]-_0x435014);if(_0x4d3210[_0x56258a(0x389)](_0x13d6cc,_0x37ad02))_0x37ad02=_0x13d6cc;}_0x1ec803-=_0x37ad02;}else{if(_0x56258a(0x703)!==_0x56258a(0x3ec)){var _0x17283e=0x1d92+0x1*-0xed+0x1ca5*-0x1;for(var _0x9b0d1f=0x412*0x2+0x1b1*0x9+0x175d*-0x1;_0x9b0d1f<_0x5d6255['lengt'+'h'];_0x9b0d1f++){if(_0x4d3210[_0x56258a(0x39a)]==='ijNtK')_0x24a93d[_0x56258a(0x558)]('no\x20li'+'ve\x20ob'+_0x56258a(0x22c)+'\x20capt'+'ured\x20'+_0x56258a(0xc00)),_0x124d09[_0x56258a(0x558)](''),_0x48a173['push'](_0x56258a(0xa08)+'ooks\x20'+_0x56258a(0x88)+_0x56258a(0x89a)+'e\x20gam'+_0x56258a(0x57f)+_0x56258a(0x598)+_0x56258a(0x1b8)+_0x56258a(0x3ae)+'thing'+_0x56258a(0x7af)+_0x56258a(0x712)+_0x56258a(0x8f7)),_0xdb4621['push'](_0x56258a(0xbbc)+_0x56258a(0x8a7)+_0x56258a(0x78e)+'et,\x20o'+_0x56258a(0x223)+'\x20sign'+_0x56258a(0xb8)+_0x56258a(0xae)+'not\x20m'+_0x56258a(0x928));else{var _0x44b9ac=Math['sqrt'](_0x5d6255[_0x9b0d1f]['v'][-0x1a39+-0x1b59*0x1+0x3592]*_0x5d6255[_0x9b0d1f]['v'][-0xf69*0x1+0x1*0x14ef+0x65*-0xe]+_0x5d6255[_0x9b0d1f]['v'][-0x1612+-0x11*0xb9+0x225d]*_0x5d6255[_0x9b0d1f]['v'][-0x2137+0x3*0xc17+-0x30c]);if(_0x44b9ac>_0x17283e)_0x17283e=_0x44b9ac;}}_0x1ec803+=_0x17283e;}else _0x460fbe['pitch']=null,_0x4f3162[_0x56258a(0x8b7)]=null,_0x475185['order']=_0x2cfd4e[_0x56258a(0x94f)]('unres'+_0x56258a(0x9a5)+'\x20(',_0xe18a5?_0x2cfd4e[_0x56258a(0x8f2)]:_0x2cfd4e['KRLKO'])+')';}_0x1ec803>_0x519703&&(_0x519703=_0x1ec803,_0x59cbe6=_0x1ee50b[_0x8094ec]);}var _0x587414=_0x59cbe6['c'][-0x981*0x3+-0x1f79+0x3bfc],_0xb48df6=-(-0x1*-0xa95+-0x129b+0x2ad*0x3);for(_0x8094ec=-0x1dc9+0x389*-0x2+0x24db;_0x8094ec<_0x59cbe6['c']['lengt'+'h'];_0x8094ec++){if(_0x4d3210['ILRLd'](_0x4d3210[_0x56258a(0x5b8)],_0x56258a(0xc52))){var _0x19637a=_0x59cbe6['c'][_0x8094ec]['v'],_0x45fbd9=Math['sqrt'](_0x4d3210[_0x56258a(0xc66)](_0x19637a[0x1d78+-0x7df+0x39*-0x61],_0x19637a[-0x4c1+-0x196c+0x1e2d])+_0x19637a[-0x376+0x9d*-0x2+-0x1*-0x4b2]*_0x19637a[0x28*-0x80+-0xa36+0x2*0xf1c]);(_0x4d3210[_0x56258a(0x79)](_0x45fbd9,_0xb48df6)||_0x45fbd9===_0xb48df6&&_0x19637a[0x1cc6+0x71*0x1f+-0x2a74]<_0x587414['v'][0x1*-0x1ae3+-0x1a0+0x721*0x4])&&(_0x56258a(0x20c)!==_0x4d3210[_0x56258a(0x111)]?(_0x38d9b2[_0x56258a(0x16a)]=-0x1a*-0xb2+-0x759+-0xa70,_0x130b44(),_0x169fa5(_0x5cb7db['cat'])):(_0xb48df6=_0x45fbd9,_0x587414=_0x59cbe6['c'][_0x8094ec]));}else{var _0x54908c=_0x49406e[_0xcde878];for(var _0x3f9807=-0x266*0x9+0x2*0x127d+-0x7b2*0x2;_0x4d3210[_0x56258a(0x7dc)](_0x3f9807,_0x54908c[_0x56258a(0x17c)+'h']);_0x3f9807++){_0x5966a9[_0x4d3210[_0x56258a(0x36d)](_0x2f5747,_0x4d3210[_0x56258a(0x1da)])+_0x54908c[_0x3f9807]['o'][_0x56258a(0x356)+_0x56258a(0x12e)](0x23ef+-0x2178+0xcd*-0x3)]=_0x54908c[_0x3f9807]['v'];}}}var _0x5dbdcd=![];if(_0x2d999d&&_0x2d999d['o'])for(_0x8094ec=0x2bd+0x2120+-0x23dd;_0x4d3210[_0x56258a(0x98a)](_0x8094ec,_0x59cbe6['c'][_0x56258a(0x17c)+'h']);_0x8094ec++){if(_0x4d3210[_0x56258a(0x19c)]!==_0x56258a(0x726)){var _0x28f42b=_0x24f06e;for(var _0x3f1e4c=-0x15e9+-0x144+0x1*0x172d;_0x3f1e4c<_0x1744de['lengt'+'h'];_0x3f1e4c++){var _0x386161=_0x257e54[_0x56258a(0xa5a)](_0x2d1150[_0x3f1e4c]['v'][0x202b+-0x32*-0x9+-0x21ec]-_0x335fbe);if(_0x4d3210['qJSkt'](_0x386161,_0x28f42b))_0x28f42b=_0x386161;}_0x34fc76-=_0x28f42b;}else{if(_0x59cbe6['c'][_0x8094ec]['o']!==_0x2d999d['o'])continue;_0x587414=_0x59cbe6['c'][_0x8094ec],_0xb48df6=Math[_0x56258a(0x3e3)](_0x4d3210[_0x56258a(0x339)](_0x587414['v'][-0x4*-0x1cd+0x25e6+-0x2d1a],_0x587414['v'][0xb3b+0xe34+0x196f*-0x1])+_0x587414['v'][-0x20f4+-0x782*-0x1+0xb5*0x24]*_0x587414['v'][0x1efd+0xb17+-0x2a12]),_0x5dbdcd=!![];break;}}return{'pos':_0x587414['v'],'posAt':_0x587414['o'],'candidates':_0x2e70ab['lengt'+'h'],'cluster':_0x59cbe6['c'][_0x56258a(0x17c)+'h'],'groups':_0x1ee50b['lengt'+'h'],'held':_0x5dbdcd,'discarded':_0x37b10d,'ambiguous':_0x4d3210['tILVz'](_0x1ee50b[_0x56258a(0x17c)+'h'],-0x18e1*0x1+0x940+0x3*0x536),'reach':_0xb48df6};}catch(_0x2ed15f){return _0x56258a(0x146)!==_0x4d3210['Aiflr']?(console[_0x56258a(0x6fb)](_0x4d3210[_0x56258a(0xc2d)],_0x2ed15f[_0x56258a(0x1be)+'ge'],_0x4d3210['AUkBq'](String,_0x2ed15f['stack']||'')[_0x56258a(0x60a)]('\x0a')[_0x56258a(0x603)](0xad9*0x2+-0x138e+-0x224,0x1*0x2227+-0xe12*0x1+0xb*-0x1d3)[_0x56258a(0xb4a)](_0x56258a(0x26f))),{'pos':null,'posAt':null,'candidates':0x0,'cluster':0x0,'groups':0x0,'held':![],'discarded':0x0,'ambiguous':![],'reach':0x0}):_0x335781['on'];}}function _0x4a5832(){var _0x350122=_0x1b4785,_0x5c7090=_0x22c822[_0x350122(0x317)+'ntrol'+_0x350122(0x6ff)];if(!_0x5c7090||!_0x5c7090[_0x350122(0x6b3)])return null;var _0x345fb2=_0x5a6a9c[_0x350122(0x317)+_0x350122(0x4a2)+'ler']||[],_0x219565=[];for(var _0x408db1=-0x1e8b+-0x2*0x135a+-0x39*-0x137;_0x408db1<_0x345fb2['lengt'+'h'];_0x408db1++){if(_0x345fb2[_0x408db1][-0x1*-0x1751+0x1df1+0x3541*-0x1]!=='v3')continue;var _0x3efe48=_0x359ffa(_0x5c7090['ptr'],_0x345fb2[_0x408db1][0x12a1*-0x1+-0x1f66+0x3207],-0x2*-0xe3e+-0x21a5+0x14b*0x4);if(_0x3efe48)_0x219565[_0x350122(0x558)]({'o':'0x'+_0x345fb2[_0x408db1][-0x1cf8+0x861+0x1497][_0x350122(0x356)+'ing'](0x131b+-0x1349+0x3e),'v':_0x3efe48});}var _0x1eb6a7=_0x199b13(_0x219565,null,_0x3b6eae);if(!_0x1eb6a7[_0x350122(0x1df)])return null;_0x3b6eae=_0x1eb6a7['posAt']?{'o':_0x1eb6a7['posAt']}:null;var _0x22a01b=_0x1eb6a7['pos'];return{'ptr':_0x5c7090['ptr'],'feet':_0x22a01b,'posAt':_0x1eb6a7[_0x350122(0x132)],'candidates':_0x1eb6a7[_0x350122(0x3e8)+'dates'],'cluster':_0x1eb6a7['clust'+'er'],'copies':_0x219565[_0x350122(0xc17)+'r'](function(_0x5645df){var _0x53451b=_0x350122;return _0x5645df['v'][0x5*0x3f+0x106*0x4+-0x553]===_0x22a01b[-0x1*-0xfd9+0xfa7*-0x1+-0x32]&&_0x5645df['v'][-0xf5d+-0x1a8b*-0x1+-0xb2d]===_0x22a01b[0x16c5+0x16be+-0x2d82]&&_0x4d3210[_0x53451b(0x9d4)](_0x5645df['v'][-0x26a4+0x8cb+-0x1*-0x1ddb],_0x22a01b[0x5f4+0x25df+-0x2bd1]);})['map'](function(_0x3654f9){var _0x273cbc=_0x350122;if(_0x273cbc(0x2ef)===_0x273cbc(0x264)){if(_0x4e8d24[_0x3eddf7][_0x273cbc(0xba9)]&&_0x56a426[_0x24a6bd][_0x273cbc(0xba9)][_0x273cbc(0x141)+_0x273cbc(0x706)]!==_0x214040)_0x12666b++;}else return _0x3654f9['o'];}),'eye':[_0x22a01b[0xf40+0x41*0x5c+0x1*-0x269c],_0x22a01b[0x262e+0xc5*0x3+0x2*-0x143e]+_0x3dfca6,_0x22a01b[0x1*-0x54a+-0x1c5*-0xa+-0x6*0x211]],'reach':_0x1eb6a7['reach'],'pitch':_0x4d3210['FtDAM'](_0x28dbcb,_0x5c7090['ptr']+(0x211d+-0x16b6+-0x8fb),'f32'),'yaw':_0x28dbcb(_0x4d3210['YZwpb'](_0x5c7090['ptr'],0x7*0x401+0x7*-0xaa+-0x29*0x89),'f32')};}function _0x14d364(){var _0x5d6362=_0x1b4785,_0x373aec={'drKZa':function(_0x23b62f,_0x51718c){var _0x54f312=_0x224c;return _0x4d3210[_0x54f312(0x855)](_0x23b62f,_0x51718c);}},_0x131517=_0x4a5832(),_0x11a0f0=[],_0x176af1=_0x1461a8['Photo'+_0x5d6362(0x308)+'orkSy'+'nc']||{},_0x5abf8d=Object[_0x5d6362(0x957)](_0x176af1);for(var _0xf7902a=0x3*0x43c+-0x1*-0x1152+0x356*-0x9;_0x4d3210[_0x5d6362(0x678)](_0xf7902a,_0x5abf8d['lengt'+'h'])&&_0x4d3210[_0x5d6362(0x2ff)](_0xf7902a,0x7b*-0x3f+-0xb06+-0x17*-0x1cd);_0xf7902a++){var _0x272380=_0x176af1[_0x5abf8d[_0xf7902a]],_0x457255=[],_0x26aca4=_0x5a6a9c['Photo'+'nNetw'+_0x5d6362(0xbc7)+'nc']||[];for(var _0x369f81=-0x40+-0xe0c+0x5*0x2dc;_0x369f81<_0x26aca4['lengt'+'h'];_0x369f81++){if(_0x4d3210[_0x5d6362(0x71d)]('wGHxm','wGHxm'))try{_0x373aec[_0x5d6362(0xa2)](_0x1f866b,_0x2f0f45);}catch(_0x3de34f){}else{if(_0x26aca4[_0x369f81][0x12c*-0x12+0x3e*0x4f+0x1*0x1f7]!=='v3')continue;var _0x1f876f=_0x359ffa(_0x272380[_0x5d6362(0x6b3)],_0x26aca4[_0x369f81][0x1866+0x21d+0x1a83*-0x1],0x571+0x7f*0xb+-0xae3);if(_0x1f876f)_0x457255[_0x5d6362(0x558)]({'o':_0x4d3210['zfseb']('0x',_0x26aca4[_0x369f81][-0x5cd+-0x1*0x1f96+0x2563]['toStr'+_0x5d6362(0x12e)](0x17*-0xa7+-0x6*-0x132+-0x2f*-0x2b)),'v':_0x1f876f});}}var _0x1049a5=_0x199b13(_0x457255,_0x131517?_0x131517[_0x5d6362(0x52b)][0x1b2*0xd+0x2244+-0x1d*0x1f1]:null,_0x1177dd[_0x5abf8d[_0xf7902a]]);_0x1177dd[_0x5abf8d[_0xf7902a]]=_0x1049a5['posAt']?{'o':_0x1049a5['posAt']}:null;var _0x11686c=_0x1049a5['pos'];if(!_0x11686c)continue;var _0x3024d3={'ptr':_0x272380[_0x5d6362(0x6b3)],'x':_0x11686c[0x4*0x3af+0x154a+-0xae*0x35],'y':_0x11686c[-0x1a5b+0x1811+0x24b],'z':_0x11686c[-0x2545+0xce9+0x185e],'posAt':_0x1049a5['posAt'],'candidates':_0x1049a5[_0x5d6362(0x3e8)+_0x5d6362(0xab6)],'cluster':_0x1049a5[_0x5d6362(0x62e)+'er'],'team':_0x28dbcb(_0x272380['ptr']+(-0x70b*0x1+-0xad5+0x247*0x8),'i32'),'localFlag':_0x28dbcb(_0x4d3210[_0x5d6362(0x76f)](_0x272380['ptr'],-0x64d*0x1+-0x56c+-0x19*-0x7d),_0x4d3210['JiHks'])};if(_0x131517){var _0x507466=_0x11686c[-0x6*0x477+-0x7af*-0x5+0x1*-0xba1]-_0x131517[_0x5d6362(0x52b)][0x773*-0x1+-0x1d43+0x24b6],_0xf73ef0=_0x11686c[0x4*0x733+0x21*0x10f+0xb*-0x5cb]-_0x131517[_0x5d6362(0x52b)][-0x212e+0x2309*-0x1+-0x4439*-0x1];_0x3024d3['d']=Math[_0x5d6362(0x3e3)](_0x507466*_0x507466+_0xf73ef0*_0xf73ef0),_0x3024d3[_0x5d6362(0x236)+'ng']=Math[_0x5d6362(0x585)](_0x507466,_0xf73ef0)*(0x1*-0x1dfa+0x3cf+0x8f5*0x3)/Math['PI'];}_0x11a0f0[_0x5d6362(0x558)](_0x3024d3);}return{'me':_0x131517,'list':_0x11a0f0};}var _0x53b094=null;function _0x3c36ed(){var _0x142a65=_0x1b4785;if(_0x4d3210['FRdhv'](_0x4d3210[_0x142a65(0xb39)],_0x142a65(0x577))){if(_0x53b094)return _0x53b094;try{if(!document[_0x142a65(0x39e)]||!document[_0x142a65(0x39e)]['appen'+_0x142a65(0x315)+'d'])return null;var _0x481a45=document['creat'+_0x142a65(0x7d8)+'ent']('div');_0x481a45['id']=_0x4d3210['pVKMb'],_0x481a45[_0x142a65(0xb1d)][_0x142a65(0x6e0)+'xt']=_0x4d3210[_0x142a65(0x4f9)](_0x142a65(0x319)+_0x142a65(0xa97)+'ixed;'+_0x142a65(0x1d5)+_0x142a65(0x6aa)+_0x142a65(0x351)+'46px;'+_0x142a65(0x747)+'ex:21'+_0x142a65(0x304)+'646;p'+'ointe'+'r-eve'+'nts:n'+_0x142a65(0x6c8),'backg'+_0x142a65(0xbe3)+_0x142a65(0x28f)+_0x142a65(0x595)+'2,29,'+'.72);'+'borde'+'r:1px'+_0x142a65(0xa05)+_0x142a65(0x5dd)+_0x142a65(0xe5)+_0x142a65(0x69c)+_0x142a65(0x24c)+_0x142a65(0x7cf)+'rder-'+_0x142a65(0x3b1)+_0x142a65(0xd8)+'x;')+(_0x142a65(0xa50)+'ng:4p'+_0x142a65(0x354)+'t:10p'+_0x142a65(0x362)+'\x20ui-m'+_0x142a65(0x31a)+'ace,C'+_0x142a65(0x827)+'as,mo'+_0x142a65(0x864)+_0x142a65(0x5ad)+'lor:#'+'bda9c'+'9;')+_0x4d3210['zMdOb'],_0x481a45['inner'+_0x142a65(0x9b3)]=_0x4d3210[_0x142a65(0x969)]('<canv'+'as\x20id'+_0x142a65(0x798)+'ura-e'+_0x142a65(0x923)+'\x22\x20wid'+'th=\x221'+_0x142a65(0xa75)+'eight'+'=\x22160'+'\x22\x20sty'+_0x142a65(0x427)+'ispla'+_0x142a65(0x6f9)+_0x142a65(0x648)+_0x142a65(0x6fa)+_0x142a65(0x557),'<div\x20'+_0x142a65(0x987)+_0x142a65(0x17a)+'-esp-'+_0x142a65(0x897)+'tyle='+'\x22text'+'-alig'+'n:cen'+'ter\x22>'+_0x142a65(0xcb)+'>');var _0x3705d0={'cv':{'getContext':function(){var _0x36e584=_0x142a65;if(_0x4d3210['Niojc'](_0x4d3210[_0x36e584(0x24e)],_0x36e584(0x79d)))return null;else _0x33aa5f(_0x36e584(0xa0)+'hot');}},'el':_0x481a45};document[_0x142a65(0x39e)]['appen'+_0x142a65(0x315)+'d'](_0x481a45),_0x53b094={'el':_0x481a45,'cv':_0x481a45['query'+'Selec'+_0x142a65(0x166)](_0x4d3210['hBFEk']),'lg':_0x481a45[_0x142a65(0x47d)+_0x142a65(0x8d)+'tor'](_0x142a65(0xacd)+'ra-es'+_0x142a65(0x5c0))};if(!_0x53b094['cv']||!_0x53b094['cv']['getCo'+_0x142a65(0x2d3)])_0x53b094=_0x3705d0;return _0x53b094;}catch(_0xae6065){return null;}}else{_0x4d3210[_0x142a65(0x704)](_0x1ab712)['set']({'host':_0x58a2c4[_0x142a65(0x9a9)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}}var _0xca0c16=null;function _0x3ebd66(){var _0xb6437a=_0x1b4785;if(_0x4d3210['mJqMB']('vDEJb',_0xb6437a(0x3ad))){if(_0xca0c16)return _0xca0c16;try{if(!document[_0xb6437a(0x39e)]||!document[_0xb6437a(0x39e)][_0xb6437a(0x950)+_0xb6437a(0x315)+'d'])return null;var _0x3695bb=document[_0xb6437a(0x7c8)+_0xb6437a(0x7d8)+'ent'](_0x4d3210[_0xb6437a(0x1b2)]);return _0x3695bb['id']=_0x4d3210[_0xb6437a(0x7b0)],_0x3695bb['style'][_0xb6437a(0x6e0)+'xt']=_0xb6437a(0x319)+_0xb6437a(0xa97)+'ixed;'+_0xb6437a(0x8f1)+'0;top'+_0xb6437a(0x58d)+'index'+_0xb6437a(0x975)+_0xb6437a(0x151)+'5;poi'+_0xb6437a(0x9f6)+_0xb6437a(0x110)+_0xb6437a(0x14a)+'e;',document['body'][_0xb6437a(0x950)+_0xb6437a(0x315)+'d'](_0x3695bb),_0xca0c16={'cv':_0x3695bb},_0xca0c16;}catch(_0x2583e3){return null;}}else _0xfca34c[_0x562883+'+0x'+_0x9a235d[_0x53b4ab]['o']['toStr'+'ing'](-0x6*0x3c0+-0x114a+0x27da)]=_0x19e642[_0x1c4b47]['v'];}function _0x42e094(_0x4a7c28){var _0x26d88d=_0x1b4785;try{var _0x3c9676=Math[_0x26d88d(0xa59)](0x1da8+-0x1829*0x1+-0x26*0x25,window[_0x26d88d(0x621)+'Width']||document[_0x26d88d(0x5e6)+_0x26d88d(0x68f)+_0x26d88d(0x717)][_0x26d88d(0xa7a)+'tWidt'+'h']||-0xe7f*-0x1+-0x4f7*0x2+0x7*-0xa7),_0x944676=Math[_0x26d88d(0xa59)](-0x1426*-0x1+0x1c57+-0x307c,window['inner'+'Heigh'+'t']||document['docum'+'entEl'+'ement'][_0x26d88d(0xa7a)+_0x26d88d(0x48d)+'ht']||-0xe4+0x3d*0x45+-0xf8d);return(_0x4a7c28['cv']['width']!==_0x3c9676||_0x4a7c28['cv'][_0x26d88d(0x871)+'t']!==_0x944676)&&('xPtte'!==_0x26d88d(0x21b)?(_0x1686f0['style'][_0x26d88d(0x505)]=_0x3b1dd9['pos']['x']+'px',_0x1e2158[_0x26d88d(0xb1d)]['top']=_0x235d53[_0x26d88d(0x1df)]['y']+'px',_0x3e6968['style']['right']=_0x26d88d(0x9c5),_0x40a0cb[_0x26d88d(0xb1d)]['botto'+'m']=_0x4d3210['ExaPu']):(_0x4a7c28['cv'][_0x26d88d(0x870)]=_0x3c9676,_0x4a7c28['cv'][_0x26d88d(0x871)+'t']=_0x944676)),{'w':_0x3c9676,'h':_0x944676};}catch(_0x4e7c42){if(_0x4d3210[_0x26d88d(0x71d)](_0x26d88d(0x47b),_0x26d88d(0x47b)))_0xc229ad[_0x26d88d(0x2c5)]='No\x20Ph'+'otonN'+'etwor'+'kSync'+',\x20no\x20'+_0x26d88d(0x4ff)+_0x26d88d(0x2dd)+_0x26d88d(0x8da)+_0x26d88d(0x4b2)+_0x26d88d(0x6a3)+'\x20mana'+_0x26d88d(0xb07)+'That\x20'+_0x26d88d(0x5df)+'at\x20'+(_0x26d88d(0x397)+_0x26d88d(0x80e)+_0x26d88d(0x830)+_0x26d88d(0x2ae)+_0x26d88d(0x314)+_0x26d88d(0x7a8)+_0x26d88d(0x2c1)+'n\x20INS'+'IDE\x20a'+_0x26d88d(0xf6)+_0x26d88d(0x50f)+_0x26d88d(0x782)+_0x26d88d(0x79e)+'\x20menu'+'.');else return{'w':0x0,'h':0x0};}}function _0x99ed55(){var _0x52064c=_0x1b4785,_0x5664bc={'wJntQ':function(_0x57b51d,_0x4fa8d3){return _0x4d3210['iVNvi'](_0x57b51d,_0x4fa8d3);}},_0x20c71e={'rows':[],'worstBearing':null,'worstDelta':0x0,'canvas':null};try{if(_0x4d3210[_0x52064c(0x150)]!==_0x4d3210[_0x52064c(0x104)])_0x20c71e[_0x52064c(0xa40)+'s']={'w':_0xca0c16&&_0xca0c16['cv']?_0xca0c16['cv']['width']:-0x67*0x6+0x1184*-0x1+-0x1*-0x13ee,'h':_0xca0c16&&_0xca0c16['cv']?_0xca0c16['cv']['heigh'+'t']:0x4ef*-0x1+0x1df2*0x1+0x1*-0x1903,'innerW':window['inner'+'Width'],'innerH':window[_0x52064c(0x621)+_0x52064c(0xbf0)+'t'],'dpr':window['devic'+_0x52064c(0xc26)+_0x52064c(0x4c5)+'o']||-0x10f*-0x4+0x1978+-0x1db3};else{_0x10468e[_0x506aa7]={'ptr':_0x3e681b,'firstSeen':_0xb87eb7['now'](),'hits':0x0,'replaced':!!_0x26d6ed};try{var _0x10ddfb=_0x472fd4[_0x52064c(0xc17)+'r'](function(_0x26799b){return _0x26799b['type']===_0x5a486a;})[0x1*-0xa97+0x12b3+0x1*-0x81c];_0x273817={'type':_0x3fa9ab,'atMs':_0xffe580[_0x52064c(0x91b)]()-_0x2dd580,'originalFunc':!!(_0x10ddfb&&_0x10ddfb['hook']&&_0x5664bc['wJntQ'](typeof _0x10ddfb[_0x52064c(0xba9)]['origi'+'nalFu'+'nc'],_0x52064c(0x668)+_0x52064c(0x659))),'resolveGameAtFire':!!_0x422643(),'gameSourceAtFire':_0x5834b7[_0x52064c(0xbca)+'e']};}catch(_0xd6ba0){}}}catch(_0x14f772){}var _0x2cb7cf=_0x4d3210[_0x52064c(0x7be)](_0x14d364);if(!_0x2cb7cf||!_0x2cb7cf['me'])return _0x20c71e;var _0x4cdb89=_0x20c71e['canva'+'s']['w']||-0x219d+0x216+0x236f,_0x269af8=_0x20c71e[_0x52064c(0xa40)+'s']['h']||0x24d2+-0x124e+-0xe9c,_0x3156ac=_0x4cdb89/_0x269af8,_0x18df9d=Math['tan'](_0x4d3210['GviXn'](_0x4fe0c4[_0x52064c(0x16a)]*Math['PI']/(0x50c*0x4+0x1*-0x135d+-0x1f),0xf47*0x1+0x156+-0x109b));for(var _0x1798b1=-0x1*-0x82d+0x18ba+-0x20e7;_0x1798b1<_0x2cb7cf[_0x52064c(0x160)][_0x52064c(0x17c)+'h']&&_0x4d3210['qtjuW'](_0x1798b1,0x2*0xd0f+-0x1*0xff9+0x1*-0xa1d);_0x1798b1++){if(_0x4d3210[_0x52064c(0xc7)]!==_0x4d3210[_0x52064c(0xc7)])_0x423772();else{var _0x1c1102=_0x2cb7cf['list'][_0x1798b1];if(typeof _0x1c1102['beari'+'ng']!==_0x52064c(0x2fe)+'r'||typeof _0x1c1102['d']!==_0x52064c(0x2fe)+'r'||_0x4d3210[_0x52064c(0x98a)](_0x1c1102['d'],0x12a4+-0x597*-0x2+-0x1dd2+0.5))continue;var _0x51026b=_0x25f0b8(_0x2cb7cf['me'][_0x52064c(0x748)],[_0x1c1102['x'],_0x1c1102['y'],_0x1c1102['z']],_0x4cdb89,_0x269af8);if(!_0x51026b)continue;var _0x2e6f4d=_0x4d3210[_0x52064c(0x5f3)](_0x51026b['x'],_0x4cdb89)-(-0xca*0x2b+0xe14*-0x1+0x3002+0.5),_0x1155ac=_0x4d3210['xYnaQ'](Math['tan'](_0x1c1102[_0x52064c(0x236)+'ng']*Math['PI']/(0x1*0x29+0x1*-0x1917+0x19a2)),_0x4d3210[_0x52064c(0x152)](_0x18df9d,_0x3156ac));if(_0x4d3210[_0x52064c(0x4ed)](Math[_0x52064c(0xa5a)](_0x1155ac),-0x1edb+0x9dc+0x19*0xd7+0.8))continue;var _0x43fe0c=_0x4d3210['Nglde'](_0x2e6f4d,_0x1155ac);_0x20c71e[_0x52064c(0x253)]['push']({'d':Math['round'](_0x1c1102['d']),'bearing':Math[_0x52064c(0xbe3)](_0x1c1102['beari'+'ng']),'at':Math[_0x52064c(0xbe3)](_0x2e6f4d*(0x211d+0x1d14+0x1*-0x3a49))/(0x2f*0xc0+0x21af*-0x1+0x257),'want':_0x4d3210['blVJT'](Math['round'](_0x1155ac*(0x1*-0x15f7+0x2520+-0x1*0xb41)),0x4cf+0x1*-0x545+0x45e),'off':_0x4d3210[_0x52064c(0xc68)](Math['round'](_0x4d3210[_0x52064c(0xc6c)](_0x43fe0c,-0x243c+0x13a2+0x1482)),-0x1ed1+-0x431+0x26ea)}),_0x4d3210[_0x52064c(0x79)](Math['abs'](_0x43fe0c),Math[_0x52064c(0xa5a)](_0x20c71e['worst'+_0x52064c(0xa84)]))&&(_0x20c71e[_0x52064c(0x493)+'Delta']=Math['round'](_0x43fe0c*(-0xcd0+-0x1135*-0x2+-0x2f3*0x6))/(-0x1*-0x1b4d+0xe28+-0x258d),_0x20c71e[_0x52064c(0x493)+_0x52064c(0x905)+'ng']=Math['round'](_0x1c1102[_0x52064c(0x236)+'ng']));}}return _0x20c71e;}var _0x37ee0a=0x4f8+-0x1*0x1494+0xf9d+0.75,_0x24a3d5=-0x1458+-0x1769+0x2bc1*0x1+0.25,_0x449c20=-0x1*-0x21c1+0x40*0x1+-0x1*0x2201+0.42;function _0x57d86d(_0x5c865d){var _0x17880b=_0x1b4785,_0x172731=_0xca0c16;if(!_0x172731)return;var _0x594be4=_0x172731['cv'][_0x17880b(0x2e1)+'ntext']&&_0x172731['cv']['getCo'+_0x17880b(0x2d3)]('2d');if(!_0x594be4)return;var _0x2a7cdb=_0x4d3210[_0x17880b(0x3a8)](_0x42e094,_0x172731);_0x594be4['clear'+'Rect'](-0x13e9*-0x1+0x10fb+-0x626*0x6,0x2415+0x41*0x4f+-0x1*0x3824,_0x2a7cdb['w'],_0x2a7cdb['h']);if(!_0x442d4e['boxes']||!_0x5c865d||!_0x5c865d['me'])return;var _0x55381d=_0x5c865d['me'],_0x43e6b7=null,_0x546fca=_0x1461a8[_0x17880b(0x3c3)+'nNetw'+_0x17880b(0xbc7)+'nc']||{},_0x62a4f2=Object['keys'](_0x546fca);for(var _0x21dc83=0x13bd+-0xefc+-0x4c1;_0x4d3210[_0x17880b(0x678)](_0x21dc83,_0x62a4f2[_0x17880b(0x17c)+'h']);_0x21dc83++){var _0x1dd134=_0x359ffa(_0x546fca[_0x62a4f2[_0x21dc83]][_0x17880b(0x6b3)],0x2697+-0x1d32+-0x931,0x861+0xc61+0x14bf*-0x1);if(_0x1dd134&&_0x4d3210['EqUWv'](_0x1dd134[-0xbc4+-0xa03*0x1+-0x15c7*-0x1],-0xa3*0x7+0x1*-0x3ce+-0x5*-0x1a7)&&_0x1dd134[-0x132e+-0x1c79+0x2fa8]===-0x2665+-0x2659+0x4cbe&&_0x4d3210[_0x17880b(0x9d4)](_0x1dd134[0x5*0x6bb+-0x2d*-0x12+-0x417*0x9],-0xd4*0xb+0x1178+-0x217*0x4)){_0x43e6b7=_0x28dbcb(_0x546fca[_0x62a4f2[_0x21dc83]]['ptr']+(-0xc22+0x727+-0x1*-0x553),_0x4d3210['JiHks']);break;}}for(var _0x10abad=0x1*-0xd31+-0x1ff7+0x2d28;_0x10abad<_0x5c865d[_0x17880b(0x160)][_0x17880b(0x17c)+'h'];_0x10abad++){if('DtPuF'!==_0x17880b(0x8f5)){var _0x42d5a4=_0x5c865d[_0x17880b(0x160)][_0x10abad],_0x2f7d2f=_0x4d3210['sKwOO'](_0x43e6b7,null)&&_0x42d5a4['team']===_0x43e6b7,_0x34c733=_0x4d3210['kItXe'](_0x25f0b8,_0x55381d[_0x17880b(0x748)],[_0x42d5a4['x'],_0x4d3210[_0x17880b(0x39b)](_0x42d5a4['y'],_0x24a3d5),_0x42d5a4['z']],_0x2a7cdb['w'],_0x2a7cdb['h']),_0x51cf8c=_0x4d3210[_0x17880b(0x854)](_0x25f0b8,_0x55381d['eye'],[_0x42d5a4['x'],_0x42d5a4['y']+_0x37ee0a,_0x42d5a4['z']],_0x2a7cdb['w'],_0x2a7cdb['h']);if(!_0x34c733||!_0x51cf8c)continue;var _0xd55ed3=Math[_0x17880b(0xa5a)](_0x51cf8c['y']-_0x34c733['y']);if(!(_0xd55ed3>-0x270+0x1f0f+-0x1c9f))continue;var _0x2ea8f5=Math['max'](0xb*-0x2ef+-0x22a1+-0x42e8*-0x1,Math[_0x17880b(0xb40)](-0x1*0x104e+0x4*-0x782+-0x30*-0xf9,_0x4d3210[_0x17880b(0xc19)](_0xd55ed3,_0x449c20)));if(_0xd55ed3>-0x2d*0xa7+0xc41+0x1*0x12be)continue;var _0x253328=_0x4d3210['FNaZW'](_0x34c733['x']+_0x51cf8c['x'],-0x1ff3+0x2*-0xe27+0x3c43),_0x2f3cec=_0x4d3210[_0x17880b(0x1a0)](_0x34c733['y']+_0x51cf8c['y'],-0x191c*0x1+0x36*0x61+0x4a8*0x1);_0x594be4[_0x17880b(0x8e2)+_0x17880b(0x25d)+'e']=_0x2f7d2f?_0x17880b(0x55c)+_0x17880b(0x714)+_0x17880b(0x77e)+',.9)':_0x17880b(0x55c)+'255,1'+_0x17880b(0x8e5)+'6,.95'+')',_0x594be4[_0x17880b(0x734)+_0x17880b(0x751)]=_0x2f7d2f?0xd45*0x1+-0x2077+0x1333:0x2525+0x15e0+-0x3b03,_0x594be4['strok'+_0x17880b(0x163)](_0x253328-_0x2ea8f5/(0x87*0x11+0x1*-0x1e98+-0x15a3*-0x1),_0x4d3210['MYyMB'](_0x2f3cec,_0x4d3210['BkkYO'](_0xd55ed3,0x17*-0xf7+-0xcc0+0x22f3)),_0x2ea8f5,_0xd55ed3);if(!_0x2f7d2f){if(_0x17880b(0x14e)!==_0x4d3210[_0x17880b(0x59a)])return{'w':0x0,'h':0x0};else _0x594be4[_0x17880b(0x239)+_0x17880b(0xa56)]=_0x17880b(0x55c)+'255,1'+'10,11'+'6,.95'+')',_0x594be4['font']=_0x17880b(0x5b5)+_0x17880b(0x528)+'nospa'+_0x17880b(0x368)+'nsola'+_0x17880b(0x63b)+'ospac'+'e',_0x594be4[_0x17880b(0x5c5)+_0x17880b(0x5a6)](_0x4d3210[_0x17880b(0x919)](Math[_0x17880b(0xbe3)](_0x42d5a4['d']||-0x244f+0x25fe+0x1*-0x1af),'m'),_0x253328-_0x2ea8f5/(-0xc50+-0x735+-0x1*-0x1387),_0x4d3210[_0x17880b(0x212)](_0x2f3cec,_0xd55ed3/(-0x1bdd+-0x62f*0x1+0x1107*0x2))-(0x1054+0x1*-0x7ca+-0x887));}}else{var _0x17ef0b=_0x5cc391[_0x17880b(0x7c8)+_0x17880b(0x7d8)+_0x17880b(0x173)](_0x17880b(0xb1d));_0x17ef0b['id']='sakur'+'a-sw-'+_0x17880b(0x2de)+'ss',_0x17ef0b['textC'+'onten'+'t']='#saku'+_0x17880b(0xb4b)+_0x17880b(0x3aa)+_0x17880b(0xc3c)+'nitia'+'l}',(_0xbb33a4[_0x17880b(0x179)]||_0x231ff8['docum'+'entEl'+_0x17880b(0x717)])[_0x17880b(0x950)+_0x17880b(0x315)+'d'](_0x17ef0b);}}}function _0x5b2e76(){var _0x4457e4=_0x1b4785,_0x1ea83d={'EGpRv':'funct'+_0x4457e4(0x659),'uwwEe':function(_0x5186d5,_0xcb89f0){var _0x33b5b3=_0x4457e4;return _0x4d3210[_0x33b5b3(0x855)](_0x5186d5,_0xcb89f0);}},_0x357d64=_0x3c36ed();if(!_0x357d64||!_0x357d64['cv'])return;try{if(_0x4d3210[_0x4457e4(0xa07)](_0x4d3210['HLCmI'],_0x4d3210['HLCmI'])){var _0x3e0d1e=_0x357d64['cv'][_0x4457e4(0x2e1)+_0x4457e4(0x2d3)]&&_0x357d64['cv'][_0x4457e4(0x2e1)+_0x4457e4(0x2d3)]('2d');if(!_0x3e0d1e)return;var _0x42c5cd=_0x357d64['cv'][_0x4457e4(0x870)],_0x15e7c1=_0x42c5cd/(-0x55*-0x2b+-0x11*0xdf+-0x2*-0x45),_0xd732e7=_0x14d364(),_0x1d0422=_0xd732e7['me'];_0x3e0d1e['clear'+'Rect'](0x1ae4+-0x55*0x2c+-0xc48,0xd2a*0x2+0x1ff0+-0x3a44,_0x42c5cd,_0x42c5cd),_0x3e0d1e[_0x4457e4(0x8e2)+'eStyl'+'e']=_0x4d3210['TgqpP'],_0x3e0d1e[_0x4457e4(0x734)+_0x4457e4(0x751)]=-0x1fca+-0x12a*-0x4+-0x1*-0x1b23;for(var _0x428249=-0xdd0+-0x317*0x8+-0x1*-0x2689;_0x428249<=0x1c60+0x152e+0x481*-0xb;_0x428249++){_0x3e0d1e[_0x4457e4(0xb5c)+'Path'](),_0x3e0d1e[_0x4457e4(0x19a)](_0x15e7c1,_0x15e7c1,(_0x15e7c1-(0x1*-0x373+-0x2*0x51c+-0x1f*-0x71))*_0x428249/(-0x18cb+-0x2255+0x3b23),0x127f+-0x1*-0x982+-0x1c01,Math['PI']*(-0x6ed*-0x3+0x676*-0x1+0x14d*-0xb)),_0x3e0d1e['strok'+'e']();}_0x3e0d1e['begin'+_0x4457e4(0x677)](),_0x3e0d1e[_0x4457e4(0x206)+'o'](-0x3*0xab7+-0x148d+0x1192*0x3,_0x15e7c1),_0x3e0d1e['lineT'+'o'](_0x42c5cd-(-0x1362+-0x1b4f+0x2eb5),_0x15e7c1),_0x3e0d1e[_0x4457e4(0x206)+'o'](_0x15e7c1,-0x1*-0xe+-0x9f8+0x9ee),_0x3e0d1e[_0x4457e4(0x2f1)+'o'](_0x15e7c1,_0x42c5cd-(0x14c*0x17+-0x27d+0x577*-0x5)),_0x3e0d1e['strok'+'e']();if(!_0x1d0422){if(_0x357d64['lg'])_0x357d64['lg']['textC'+_0x4457e4(0x276)+'t']='';return;}var _0xb7f964=_0x4d3210[_0x4457e4(0x39b)](_0x15e7c1,-0x107*0x21+0x1a51*-0x1+0x3c3e)/_0x442d4e['span'],_0x2aa8bf=null,_0x165a81=_0x1461a8['Photo'+_0x4457e4(0x308)+_0x4457e4(0xbc7)+'nc']||{},_0x4b1ea8=Object['keys'](_0x165a81);for(var _0x4597d0=-0xb44+-0xa6*-0x19+-0x4f2;_0x4597d0<_0x4b1ea8[_0x4457e4(0x17c)+'h'];_0x4597d0++){var _0x1f56cb=_0x359ffa(_0x165a81[_0x4b1ea8[_0x4597d0]][_0x4457e4(0x6b3)],-0x249d+0x108a+0x1d*0xb3,0x2235+-0xa06+-0xb6*0x22);if(_0x1f56cb&&_0x1f56cb[0x197b+0x58e*-0x5+0x24b]===0x22*-0x53+0x2224+0x10d*-0x16&&_0x1f56cb[0xb4f+-0x1848+0xcfa]===-0x2445+0x5ea*0x1+0x1e5b&&_0x1f56cb[0xde+-0x343+0xf*0x29]===0x3e*-0x43+-0x333+-0x1*-0x136d){if(_0x4457e4(0xa8b)===_0x4457e4(0x35b)){var _0x258eee=_0xf656ba['resol'+_0x4457e4(0xbaa)+'e']();if(_0x258eee)return _0x1e0b40[_0x4457e4(0xbca)+'e']=_0x4d3210['rqCoS'],_0x258eee;}else{_0x2aa8bf=_0x28dbcb(_0x4d3210['OnPyQ'](_0x165a81[_0x4b1ea8[_0x4597d0]]['ptr'],-0x153+-0x3*-0x79+0x40*0x1),'i32');break;}}}var _0x2ac880=0x1fb1+-0x2371+0x3c0;for(var _0x229f08=0x1464+0xf*-0x4d+0xfe1*-0x1;_0x229f08<_0xd732e7[_0x4457e4(0x160)]['lengt'+'h'];_0x229f08++){var _0x5208f9=_0xd732e7['list'][_0x229f08],_0x9945d7=(_0x5208f9['x']-_0x1d0422['feet'][0x2399+0x227b+-0xbae*0x6])*_0xb7f964,_0x1a0750=_0x4d3210[_0x4457e4(0x69d)](_0x5208f9['z']-_0x1d0422[_0x4457e4(0x52b)][0x1b71+0x259d*0x1+-0x410c],_0xb7f964),_0x397f3a=Math[_0x4457e4(0x3e3)](_0x9945d7*_0x9945d7+_0x1a0750*_0x1a0750),_0x525562=_0x15e7c1,_0x472618=_0x15e7c1;_0x4d3210[_0x4457e4(0x584)](_0x397f3a,_0x15e7c1-(-0x4af+-0x2374+0x2829))?(_0x525562=_0x15e7c1+_0x9945d7/_0x397f3a*_0x4d3210['Nglde'](_0x15e7c1,-0x2*-0x65b+0x11+-0xcc1),_0x472618=_0x15e7c1+_0x1a0750/_0x397f3a*(_0x15e7c1-(-0x36a+0x5b6*-0x4+0x1a48))):(_0x525562=_0x15e7c1+_0x9945d7,_0x472618=_0x4d3210[_0x4457e4(0xae2)](_0x15e7c1,_0x1a0750));var _0x23b85a=_0x4d3210['XifkN'](_0x2aa8bf,null)&&_0x5208f9[_0x4457e4(0xa6e)]===_0x2aa8bf;_0x3e0d1e[_0x4457e4(0x239)+_0x4457e4(0xa56)]=_0x23b85a?_0x4d3210[_0x4457e4(0x9ad)]:_0x4457e4(0xf9)+'74',_0x3e0d1e[_0x4457e4(0xb5c)+_0x4457e4(0x677)](),_0x3e0d1e['arc'](_0x525562,_0x472618,_0x23b85a?-0x3*0x1ca+0xbdd+-0x67d:0x2195+0x1528+-0x36ba+0.20000000000000018,-0x2c*0xa4+0x2387+0x757*-0x1,Math['PI']*(0x1643+0x11cd+0xd5a*-0x3)),_0x3e0d1e[_0x4457e4(0x260)](),_0x2ac880++;}_0x3e0d1e[_0x4457e4(0x239)+_0x4457e4(0xa56)]='#7ee0'+'a8',_0x3e0d1e[_0x4457e4(0xb5c)+'Path'](),_0x3e0d1e[_0x4457e4(0x19a)](_0x15e7c1,_0x15e7c1,-0x134d+-0x179a+-0x2aea*-0x1,-0x130a+-0x50*0x4a+-0x2*-0x1515,_0x4d3210['iXARb'](Math['PI'],0x969+-0x5a2+-0x3c5)),_0x3e0d1e[_0x4457e4(0x260)]();if(_0x357d64['lg']){if(_0x4d3210['rBNOA']('HyGpF','OiJMU')){if(_0x1d3c77&&typeof _0x1b5a11[_0x4457e4(0x174)]===_0x1ea83d['EGpRv'])_0x1e5436[_0x4457e4(0x174)](_0x793f75,function(){});else _0x1ea83d['uwwEe'](_0x13e171,_0x6e7080);}else _0x357d64['lg']['textC'+_0x4457e4(0x276)+'t']=_0x4d3210['jxHOO'](_0x4d3210['KfSZa'](_0x4d3210['fFkDe']+_0x2ac880+'\x20·\x20',Math['round'](_0x442d4e['span']))+'m',_0x442d4e[_0x4457e4(0x77f)]?_0x4d3210[_0x4457e4(0x3d4)](_0x4457e4(0xb3d)+'v\x20'+Math['round'](_0x4fe0c4[_0x4457e4(0x16a)]),'°'):'')+(_0x4d3210[_0x4457e4(0xc23)](_0x2aa8bf,null)?_0x4d3210[_0x4457e4(0xc41)]+_0x2aa8bf:'');}}else return _0x457da8[_0x4457e4(0xbca)+'e']=_0xc73765['sourc'+'e']||_0x4457e4(0xb9)+_0x4457e4(0xbfa)+'e().e'+_0x4457e4(0xbdf)+_0x4457e4(0x2b9)+'ory',new _0x562118(_0x1306ae[_0x4457e4(0x816)+'r']);}catch(_0x44b3f4){}}function _0x157ac9(){var _0x53ba99=_0x1b4785,_0x5a4ec2=_0x1461a8[_0x53ba99(0x3c3)+'nNetw'+'orkSy'+'nc']||{};if(!Object['keys'](_0x5a4ec2)[_0x53ba99(0x17c)+'h'])return![];return!!_0x4a5832();}function _0x3b999e(_0x1e47fc){var _0xbdfef4=_0x1b4785,_0x625e26={'rmUft':function(_0x40cdb8,_0x3fe998){return _0x40cdb8+_0x3fe998;},'TcKcS':function(_0x37fbed,_0x410ce7){return _0x37fbed*_0x410ce7;}};try{if(_0x4d3210[_0xbdfef4(0x4bb)](_0x4d3210[_0xbdfef4(0x13f)],'ttcYQ')){var _0x360990=_0x53b094;if(_0x360990&&_0x360990['el'])_0x360990['el'][_0xbdfef4(0xb1d)][_0xbdfef4(0x4e9)+'ay']=_0x1e47fc?'':_0x4d3210[_0xbdfef4(0x649)];var _0x45b6fe=_0xca0c16;if(_0x45b6fe&&_0x45b6fe['cv'])_0x45b6fe['cv'][_0xbdfef4(0xb1d)][_0xbdfef4(0x4e9)+'ay']=_0x1e47fc?'':_0x4d3210[_0xbdfef4(0x649)];}else{var _0x519170=_0x1cc473['c'][_0x2bf896]['v'],_0x5d88f8=_0x17235a[_0xbdfef4(0x3e3)](_0x625e26['rmUft'](_0x519170[0xf*0x5+-0x1*0x175b+0x1710]*_0x519170[0x995+-0x2f*-0xbd+0xb12*-0x4],_0x625e26['TcKcS'](_0x519170[-0x236b*0x1+-0x237b+-0x8*-0x8dd],_0x519170[-0x1*-0x1424+0xf64*0x1+-0x11c3*0x2])));(_0x5d88f8>_0x2951c7||_0x5d88f8===_0x5b907a&&_0x519170[-0x19bb+0x1d11+-0x355]<_0x562bd1['v'][-0x2*0x1269+0xd46*-0x1+0x3219])&&(_0x34519d=_0x5d88f8,_0x34ccce=_0x1f171b['c'][_0x1311a5]);}}catch(_0x140325){}}function _0x6be83e(){var _0x7ce2c2=_0x1b4785;if(!_0x442d4e['on']||!_0x157ac9()){_0x3b999e(![]),setTimeout(_0x6be83e,0x171b+0x2*0x1168+0xc7*-0x49);return;}_0x3b999e(!![]),_0x2278c2(),_0x3c36ed();if(_0x442d4e['boxes'])_0x4d3210['ZXozs'](_0x3ebd66);var _0x4f0f7c=null;try{_0x4d3210[_0x7ce2c2(0xbb5)](_0x7ce2c2(0x175),_0x7ce2c2(0x87b))?(_0x174f35=!!_0x133973[_0x7ce2c2(0x521)]['on'],_0x40e01a['textC'+'onten'+'t']=_0x16cea4?'Speed'+_0x7ce2c2(0x467):'Speed'+'\x20off',_0x2b12a5[_0x7ce2c2(0xb1d)]['backg'+_0x7ce2c2(0xbe3)]=_0x54f89e?_0x1f90fd:_0x4d3210[_0x7ce2c2(0x888)],_0x1865a6['style']['color']=_0x4fd800?_0x4d3210[_0x7ce2c2(0xaae)]:_0x7ce2c2(0x33f)+'f5',_0x3d016c&&_0x2c22a2[_0x7ce2c2(0x521)]['facto'+'r']&&(_0x3581ca[_0x7ce2c2(0x56c)+'onten'+'t']=_0x4d3210['ixPbT'](_0x35d5ab(_0x13afb0[_0x7ce2c2(0x521)][_0x7ce2c2(0x85d)+'r'])[_0x7ce2c2(0x657)+'ed'](-0x7*-0x1b1+0x1a3f+-0x2615),'x'))):_0x4f0f7c=_0x14d364();}catch(_0x37bda8){}try{_0x5b2e76();}catch(_0x325115){}try{_0x4d3210['nDrVQ'](_0x57d86d,_0x4f0f7c);}catch(_0x4b051c){}setTimeout(_0x6be83e,0xe75+-0x27*-0xbf+0x8ac*-0x5);}function _0x23f7f3(){var _0x78bff2=_0x1b4785,_0x296c95={'aEzKx':function(_0x2273c6,_0x27d40a){var _0x2a1c8d=_0x224c;return _0x4d3210[_0x2a1c8d(0x161)](_0x2273c6,_0x27d40a);},'ZGzqH':function(_0xfd6031,_0x6a0f23){var _0x51e266=_0x224c;return _0x4d3210[_0x51e266(0x946)](_0xfd6031,_0x6a0f23);}},_0x236e6f=window['Unity'+'WebMo'+'dkit']&&window[_0x78bff2(0x72f)+_0x78bff2(0x7c1)+'dkit']['Runti'+'me']||null,_0x4376bd=_0x236e6f&&_0x236e6f['il2Cp'+'pCont'+'ext'],_0x45301a=_0x4376bd&&_0x4376bd[_0x78bff2(0x7fb)+_0x78bff2(0xc3a)],_0x5f11d2={},_0x52ad7c=[];for(var _0x21394c in _0x22c822){_0x5f11d2[_0x21394c]='0x'+_0x22c822[_0x21394c][_0x78bff2(0x6b3)]['toStr'+_0x78bff2(0x12e)](0x260a+0x11c4+-0x37be);if(_0x22c822[_0x21394c]['repla'+_0x78bff2(0x234)])_0x52ad7c[_0x78bff2(0x558)](_0x21394c);}var _0x598f24={};for(var _0xdaf3ce in _0x22c822)_0x598f24[_0xdaf3ce]=_0x4d3210['ckhEU'](_0x37b91a,_0x22c822[_0xdaf3ce]['ptr']);var _0x2c1ce4={},_0x2b921b=null;try{_0x2c1ce4=_0x4d3210[_0x78bff2(0x45f)](_0x59bcf0);}catch(_0x269bcd){_0x2b921b=String(_0x269bcd&&_0x269bcd['messa'+'ge']||_0x269bcd);}var _0x279f9a={'version':_0x21f2bf,'when':new Date()['toISO'+_0x78bff2(0xb6d)+'g'](),'elapsedMs':Date['now']()-_0x1fe26d,'frame':location['href'][_0x78bff2(0x603)](-0x24d3*0x1+0x9*-0x37e+0x4441*0x1,-0x1ce8+0xe67+0x1*0xef9),'host':_0x11e2da,'frameRole':_0x502dd5,'uwmk':!!_0x236e6f,'il2CppContext':!!_0x4376bd,'typeCount':_0x45301a?Object[_0x78bff2(0x957)](_0x45301a)['lengt'+'h']:null,'arm':_0x1065b2,'assemblies':_0x8834d5,'hooksTotal':_0x2b4c43['lengt'+'h'],'hooksApplied':_0x4d3210[_0x78bff2(0xd2)](_0x537754),'hooksResolved':_0x194ea7(),'hooksRegisteredAtArm':_0x1065b2['hooks'+'Regis'+_0x78bff2(0xc1e)]||0x1*0x2113+0x75+-0x1*0x2188,'hookErrors':_0x32994d['slice'](-0x1336*-0x1+-0x4*-0x687+0x2*-0x16a9,0x1460+-0x20f*0x1+-0x1249),'instances':_0x5f11d2,'classNames':_0x598f24,'instancesReplaced':_0x52ad7c,'hookFireProof':_0x26710c,'survey':_0x2c1ce4,'actkKeys':_0x4ffb14,'surveyRows':Object[_0x78bff2(0x957)](_0x2c1ce4)[_0x78bff2(0x615)+'e'](function(_0xa0a13f,_0x59d918){var _0x4363a6=_0x78bff2;return _0xa0a13f+_0x2c1ce4[_0x59d918][_0x4363a6(0x17c)+'h'];},-0xb*0x29b+0x6f3+0x2*0xadb),'reads':{'ok':_0x5e265a['ok'],'failed':_0x5e265a['faile'+'d'],'lastError':_0x5e265a[_0x78bff2(0x828)+_0x78bff2(0x8ae)],'source':_0x5e265a['sourc'+'e']},'identity':_0x2c8a39(),'globals':_0x4d3210['flRrF'](_0x42bce1),'wasmMemory':{'captured':!!_0x893716,'atMs':_0x125885,'bytes':(function(){var _0x2d6505=_0x78bff2;if(_0x4d3210['spkZG'](_0x4d3210[_0x2d6505(0x8c3)],_0x2d6505(0xa67)))try{return _0x893716&&_0x893716['buffe'+'r']?_0x893716['buffe'+'r']['byteL'+'ength']:0x7ad*-0x5+0xd66+0x1*0x18fb;}catch(_0x136c35){return-0x25eb+0x1*-0x8aa+-0xe1*-0x35;}else{var _0x5ba367=_0x583ef9['query'+'Selec'+'torAl'+'l'](_0x2d6505(0x245)+'e');for(var _0x347ed3=-0x47*-0x61+-0x8f4+-0x1*0x11f3;_0x296c95[_0x2d6505(0x2db)](_0x347ed3,_0x5ba367[_0x2d6505(0x17c)+'h']);_0x347ed3++){try{if(_0x5ba367[_0x347ed3][_0x2d6505(0xaab)+_0x2d6505(0xb18)+_0x2d6505(0x361)])_0x5ba367[_0x347ed3]['conte'+'ntWin'+_0x2d6505(0x361)][_0x2d6505(0x627)+'essag'+'e'](_0x1b5f2e,'*');}catch(_0x1b6620){}}}}()),'exportKeys':_0x2a5718},'diff':_0x46e0e3[_0x78bff2(0x603)](-0x2402+-0x847+0xec3*0x3,0xe0*0x8+0x1*-0x17e5+0x123*0xf),'speed':{'on':_0xde72d1['on'],'factor':_0xde72d1[_0x78bff2(0x85d)+'r'],'writes':_0x2289af,'scaled':_0x18ed02[_0x78bff2(0x603)](0x13*-0x107+0x49f+0xee6,0xf93+0x2*-0xb4f+0x11*0x6b),'skipped':_0x1f3553[_0x78bff2(0x603)](0x96e*-0x1+-0x1*-0x1312+0x9a4*-0x1,0x1575+0x7*-0x437+-0x3*-0x2b4)},'esp':_0x4d3210[_0x78bff2(0x7f6)](_0x1dad4a),'view':_0x1feba7(),'angles':(function(){var _0x53c6cf=_0x78bff2,_0x2743d2={'GrkxB':function(_0x348665,_0x5e7db1){return _0x4d3210['JPRWL'](_0x348665,_0x5e7db1);},'dDoiL':_0x4d3210['dSDjo'],'yxMnt':function(_0x51389b){return _0x51389b();}};if(_0x4d3210[_0x53c6cf(0xa74)]===_0x4d3210['KeNNH']){var _0x4c1804=_0x1e0751(),_0x4a0e5c=null,_0x45648f=null,_0x42a5de=_0x4d3210['TJebW'](_0x4a5832);if(_0x42a5de){var _0x418c3f=_0x4d3210['dEEcl'](_0x25f0b8,_0x42a5de['eye'],[_0x42a5de['eye'][0x2*0x1087+0x1ef3+-0x4001],_0x42a5de['eye'][0x897*0x1+0x2da+-0x10*0xb7],_0x42a5de['eye'][-0x100b*0x2+0x185*-0x19+0x4615]+(0xf11+-0x1*-0x2399+-0x32a9)],0x43a*0x3+-0x136c+-0xaa6*-0x1,-0xc6e+0x23cb*0x1+0x11*-0x125);_0x418c3f&&(_0x4a0e5c=_0x418c3f['x']/(0x12*0x201+0x1*-0x16ce+-0x95c),_0x45648f=_0x418c3f['y']/(0x4bd*0x5+-0x596+-0xe33));}var _0x1884d5=null,_0x225f9c=null;if(_0x42a5de){var _0x441dae=_0x25f0b8(_0x42a5de['eye'],[_0x42a5de[_0x53c6cf(0x748)][-0x1b71+0x23*0x17+-0x1*-0x184c],_0x42a5de['eye'][0x40*0x37+0x6f2+-0x14b1]+(-0xc83+0x149f+-0x812),_0x4d3210[_0x53c6cf(0x2bb)](_0x42a5de[_0x53c6cf(0x748)][0x116*0x20+0x20*-0x11+-0x209e],0x1bb8+-0xef4+-0xcba)],0x6be*0x2+-0x3*-0x41b+0x3b*-0x5f,-0x12b9+0x11*0x9b+0xc56);if(_0x441dae)_0x1884d5=_0x441dae['y']/(-0x335*0x5+0x2fb*-0x6+0x25d3);var _0x167b7a=_0x4d3210[_0x53c6cf(0x854)](_0x25f0b8,_0x42a5de[_0x53c6cf(0x748)],[_0x42a5de[_0x53c6cf(0x748)][0x328+0x3*0x8e1+-0x1dcb],_0x4d3210['mLBfL'](_0x42a5de['eye'][0xa77*0x3+0x23*0x115+-0x4543],-0xcc0+-0x1c9f+0x2969),_0x42a5de[_0x53c6cf(0x748)][-0xf*0x115+0x1fe3+0x1*-0xfa6]+(-0xc3f+0xb*-0x33d+0x248*0x15)],-0xead*-0x1+-0x3d*-0x3e+0x198b*-0x1,-0x4*-0x13e+0x96*0x33+-0x1ef2*0x1);if(_0x167b7a)_0x225f9c=_0x167b7a['y']/(0x134*0x1f+-0x1afb*0x1+0x3*-0x223);}return{'identified':_0x4fb861[_0x53c6cf(0x625)+'ified'],'why':_0x4fb861['why'],'source':_0x4fb861['sourc'+'e'],'viewHooks':(function(){var _0xf35f44=_0x53c6cf,_0x5d95bb={'SHLDU':function(_0x25f92a,_0x1972f0){var _0x258a67=_0x224c;return _0x2743d2[_0x258a67(0x7a)](_0x25f92a,_0x1972f0);},'THtjl':'UWMK\x20'+_0xf35f44(0x801)+'ved\x20','PXbvF':_0x2743d2[_0xf35f44(0x2ad)],'THXeY':'(this'+_0xf35f44(0xb82)+_0xf35f44(0x725)+_0xf35f44(0x778)+_0xf35f44(0x456)+_0xf35f44(0xa5)+'es\x20no'+_0xf35f44(0xc32)+_0xf35f44(0x1ee)+_0xf35f44(0x20b)+_0xf35f44(0x9cf)};try{return _0xaa9641();}catch(_0x156908){if('lCGVp'!==_0xf35f44(0x30b))_0x6b705b[_0xf35f44(0xb44)+_0xf35f44(0x35c)][_0xf35f44(0x558)](_0x5d95bb[_0xf35f44(0x829)](_0x5d95bb[_0xf35f44(0xc1d)]+_0x5eede5[_0xf35f44(0x8b)+_0xf35f44(0x251)+_0xf35f44(0x658)],_0x5d95bb['PXbvF'])+_0x4cb7f2[_0xf35f44(0x8b)+_0xf35f44(0x6cd)]+(_0xf35f44(0xa6)+_0xf35f44(0xc43)+'o\x20a\x20t'+_0xf35f44(0x358)+_0xf35f44(0xb8d)+'\x20but\x20'+'appli'+_0xf35f44(0x1ec)+_0xf35f44(0x9be)+'he\x20si'+_0xf35f44(0x27c)+_0xf35f44(0x5db))+_0x5d95bb['THXeY']);else return{'err':String(_0x156908&&_0x156908[_0xf35f44(0x1be)+'ge']),'stack':String(_0x156908&&_0x156908[_0xf35f44(0x823)])};}}()),'setterPair':(function(){var _0xb2ea7=_0x53c6cf,_0x4ec21f=_0x2743d2['yxMnt'](_0x35a98e);return _0x4ec21f?{'a':_0x4ec21f[_0xb2ea7(0x7fc)],'b':_0x4ec21f[_0xb2ea7(0xbf8)],'hits':_0x4ec21f[_0xb2ea7(0x6ce)],'order':_0x4ec21f[_0xb2ea7(0xaf0)]}:null;}()),'yawAt':_0x4fb861[_0x53c6cf(0x289)+'tter']||'0x28\x20'+_0x53c6cf(0x4c1)+'s)','pitchAt':_0x4fb861['pitch'+'Gette'+'r']||'0x1c\x20'+_0x53c6cf(0x4c1)+'s)','getters':_0x4fb861[_0x53c6cf(0x9f8)+'rs'],'rawPitch':_0x4fb861['rawPi'+_0x53c6cf(0x38d)],'rawYaw':_0x4fb861['rawYa'+'w'],'pitch':_0x4fb861['pitch'],'yaw':_0x4fb861[_0x53c6cf(0x8b7)],'legacyOffsetsCleared':_0x425cb8,'fov':_0x4fe0c4['fov'],'fovSane':_0x4d3210['ccYzr'](_0x4fe0c4['fov'],0x14f2+0x8*0x2a5+-0x29de)&&_0x4fe0c4[_0x53c6cf(0x16a)]<=-0x264+-0xfa8+0x127a,'centreX':_0x4a0e5c,'centreY':_0x45648f,'aboveY':_0x1884d5,'belowY':_0x225f9c,'projection':_0x99ed55()};}else{var _0x4ff1d=_0x4c788b(_0x1bfc3a['eye'],[_0x582679[_0x53c6cf(0x748)][-0x409*-0x8+-0x122+-0x1f26],_0x3e4cd9[_0x53c6cf(0x748)][-0x1a5*0x13+0x616*-0x3+-0x3182*-0x1],_0x296c95[_0x53c6cf(0x609)](_0x48f31b['eye'][0x20b5+0x24f4+-0x45a7],-0x4f*-0x47+0x2b*-0x9d+0x7f*0x9)],-0x247a+0x1d*0x53+0x1efb*0x1,0x1*0x1579+-0x1ad*-0x2+-0x2fd*0x7);_0x4ff1d&&(_0x497c0c=_0x4ff1d['x']/(0x3a+0x1*0x18c1+-0x19f*0xd),_0x12435d=_0x4ff1d['y']/(0x1600+0x1387*0x1+-0x259f));}}()),'fov':_0x4fe0c4['fov'],'espView':{'on':_0x442d4e['on'],'boxes':_0x442d4e[_0x78bff2(0x77f)],'span':_0x442d4e['span']},'local':(function(){var _0x5940d1=_0x78bff2,_0xf9d992=_0x4d3210['LzElS'](_0x4a5832);if(!_0xf9d992)return null;return{'ptr':'0x'+_0xf9d992[_0x5940d1(0x6b3)][_0x5940d1(0x356)+'ing'](-0x1f11+-0x361+0x2282),'feet':_0xf9d992['feet'],'eye':_0xf9d992[_0x5940d1(0x748)],'posAt':_0xf9d992['posAt'],'copies':_0xf9d992[_0x5940d1(0x92d)+'s'],'cluster':_0xf9d992['clust'+'er'],'eyeHeight':_0x3dfca6,'pitch':_0xf9d992[_0x5940d1(0x15b)],'yaw':_0xf9d992[_0x5940d1(0x8b7)],'reach':_0xf9d992['reach']};}()),'uwmkLog':_0x5b10b7['slice'](-0x9eb+0x85+0x966,-0xd*-0x127+-0x17fd+0x916),'warnings':[]};if(_0x2b921b)_0x279f9a['warni'+_0x78bff2(0x35c)]['push']('surve'+_0x78bff2(0x3a2)+'led:\x20'+_0x2b921b);if(_0x1065b2['error'])_0x279f9a[_0x78bff2(0xb44)+_0x78bff2(0x35c)][_0x78bff2(0x558)](_0x4d3210['ZQtkA'](_0x4d3210['bqBwl'],_0x1065b2[_0x78bff2(0x307)]));if(_0x279f9a['surve'+_0x78bff2(0xbc3)]===0xaef+-0xd1*0x1e+0xd8f&&_0x4d3210[_0x78bff2(0x4ed)](Object[_0x78bff2(0x957)](_0x279f9a['insta'+'nces'])['lengt'+'h'],-0xff9+-0x1169*0x2+0x1*0x32cb)){if(_0x4d3210[_0x78bff2(0x7ba)](_0x4d3210['YGCgI'],_0x4d3210['YGCgI'])){var _0x6e4f6=(_0x78bff2(0x3ca)+'3|1|4'+'|2|0|'+_0x78bff2(0x60c)+'|9')[_0x78bff2(0x60a)]('|'),_0x500c75=0x12*0x1d8+0x2318+0x17*-0x2f8;while(!![]){switch(_0x6e4f6[_0x500c75++]){case'0':_0x4d3210['OoxVD'](_0x3621d2);continue;case'1':_0x3bac7f=_0x5f2784[_0x78bff2(0x7c8)+'ePlug'+'in']({'name':_0x78bff2(0x7c6)+'a-ski'+_0x78bff2(0x519)+'z','version':_0x56c0fc,'referencedAssemblies':_0x10f354[_0x78bff2(0x603)]()});continue;case'2':try{var _0x11d97a=_0x5638b0[_0x78bff2(0x72f)+_0x78bff2(0x7c1)+'dkit'][_0x78bff2(0x844)+'me'];_0x11d97a['__sak'+_0x78bff2(0xa89)+'g']=_0x4d3210[_0x78bff2(0x417)](_0x4d3210['skzYV'](_0x26e695,':'),_0x173f77[_0x78bff2(0x7b1)+'m']()[_0x78bff2(0x356)+'ing'](-0x807+0x8a2+0x11*-0x7)[_0x78bff2(0x603)](-0x6c1*-0x2+-0xf3*0x24+-0x12*-0x126,0x2659+-0x9a0+-0x1caf)),_0x1d376e=_0x11d97a['__sak'+_0x78bff2(0xa89)+'g'];}catch(_0x2af05d){}continue;case'3':_0x1b9873['attem'+_0x78bff2(0xbbf)]=!![];continue;case'4':_0x3dee19['ok']=!![];continue;case'5':_0x39715f();continue;case'6':_0x25c51e['hooks'+'Regis'+'tered']=_0x53fd4b[_0x78bff2(0x17c)+'h'];continue;case'7':_0x5a8647();continue;case'8':if(!_0x5f2784||_0x4d3210[_0x78bff2(0x91f)](typeof _0x5f2784[_0x78bff2(0x7c8)+'ePlug'+'in'],_0x78bff2(0x668)+'ion')){_0x50502a[_0x78bff2(0x307)]=_0x4d3210[_0x78bff2(0x479)];return;}continue;case'9':_0x3e87fd[_0x78bff2(0xb6c)+_0x78bff2(0x802)]=!![];continue;case'10':var _0x5f2784=_0x3089e6['Unity'+_0x78bff2(0x7c1)+'dkit']&&_0x3e1247[_0x78bff2(0x72f)+_0x78bff2(0x7c1)+'dkit'][_0x78bff2(0x844)+'me'];continue;}break;}}else _0x279f9a['warni'+_0x78bff2(0x35c)][_0x78bff2(0x558)](_0x4d3210[_0x78bff2(0x66a)](_0x4d3210['amdvJ'](_0x78bff2(0x6bb)+'red\x20',Object['keys'](_0x279f9a[_0x78bff2(0xb9)+'nces'])['lengt'+'h'])+(_0x78bff2(0x45d)+'ct(s)'+'\x20but\x20'+_0x78bff2(0x55d)+_0x78bff2(0x8b0)+_0x78bff2(0x7c2)),_0x5e265a['lastE'+_0x78bff2(0x8ae)]?_0x4d3210[_0x78bff2(0x8aa)]+_0x5e265a[_0x78bff2(0x828)+'rror']:_0x4d3210['wSzmj']));}_0x279f9a[_0x78bff2(0x625)+_0x78bff2(0x1e4)]&&_0x279f9a[_0x78bff2(0x625)+'ity']['tagMa'+_0x78bff2(0xc12)]===![]&&_0x279f9a[_0x78bff2(0xb44)+'ngs']['push'](_0x78bff2(0x325)+_0x78bff2(0x214)+'MK\x20CO'+_0x78bff2(0x635)+'OK\x20OV'+'ER\x20wi'+_0x78bff2(0x4db)+'Unity'+_0x78bff2(0x7c1)+_0x78bff2(0xbc8)+'\x20The\x20'+_0x78bff2(0x844)+_0x78bff2(0x7a5)+_0x78bff2(0x420)+_0x78bff2(0x761)+'\x20'+('repla'+_0x78bff2(0xa00)+'y\x20a\x20d'+'iffer'+_0x78bff2(0x121)+_0x78bff2(0x5f7)+'ce,\x20s'+'o\x20we\x20'+_0x78bff2(0x153)+'sking'+_0x78bff2(0x663)+_0x78bff2(0x379)+'\x20obje'+_0x78bff2(0x332)+'r\x20')+(_0x78bff2(0x9cb)+_0x78bff2(0xb28)+'hile\x20'+_0x78bff2(0x512)+'ne\x20ho'+_0x78bff2(0x542)+_0x78bff2(0x5e2)+'s\x20orp'+'haned'+_0x78bff2(0x5c6)+_0x78bff2(0x358)+_0x78bff2(0x64e)+'\x20othe'+'r\x20')+(_0x78bff2(0x445)+_0x78bff2(0x96d)+'K\x20scr'+'ipt\x20i'+_0x78bff2(0x291)+'permo'+_0x78bff2(0x3ce)+'and\x20h'+_0x78bff2(0x158)+'eload'+'.'));_0x279f9a[_0x78bff2(0x625)+'ity']&&_0x4d3210[_0x78bff2(0xb1f)](_0x279f9a[_0x78bff2(0x625)+_0x78bff2(0x1e4)][_0x78bff2(0x95a)+'nRunt'+_0x78bff2(0x9cc)+_0x78bff2(0x7ab)+_0x78bff2(0xc0d)],![])&&(_0x4d3210[_0x78bff2(0x901)]!==_0x78bff2(0xc53)?(_0x432d14=_0x4d3210[_0x78bff2(0xbc9)]('LIVE\x20'+'·\x20'+_0x579592[_0x78bff2(0x957)](_0x4b0fd9[_0x78bff2(0xb9)+_0x78bff2(0x9a4)])['lengt'+'h'],'\x20obje'+_0x78bff2(0xb8c)+'\x20')+_0x334f18+'s',_0x1f64e1=_0x78bff2(0xbb8)+'a8'):_0x279f9a[_0x78bff2(0xb44)+_0x78bff2(0x35c)]['push'](_0x4d3210[_0x78bff2(0x930)](_0x4d3210[_0x78bff2(0x6a6)],_0x78bff2(0x3ff)+'st\x20a\x20'+'diffe'+'rent\x20'+_0x78bff2(0x844)+'me\x20in'+_0x78bff2(0xb96)+_0x78bff2(0x62b)+'n\x20the'+_0x78bff2(0x30f)+'al\x20no'+_0x78bff2(0x6f)+_0x78bff2(0x82e))));if(_0x279f9a['esp']&&_0x279f9a[_0x78bff2(0x502)]['note'])_0x279f9a['warni'+'ngs']['push'](_0x78bff2(0x6c)+_0x279f9a[_0x78bff2(0x502)][_0x78bff2(0x2c5)]);if(_0x279f9a['globa'+'ls']&&!_0x279f9a[_0x78bff2(0x5fc)+'ls']['heapU'+'8']){var _0x280757='';_0x279f9a[_0x78bff2(0x811)+'irePr'+'oof']&&(_0x280757=_0x4d3210[_0x78bff2(0xa7)](_0x4d3210[_0x78bff2(0x960)](_0x4d3210['KfSZa'](_0x4d3210[_0x78bff2(0x393)]+_0x279f9a[_0x78bff2(0x811)+_0x78bff2(0x487)+_0x78bff2(0x6e4)][_0x78bff2(0x21a)]+_0x4d3210[_0x78bff2(0x348)],_0x279f9a[_0x78bff2(0x811)+'irePr'+_0x78bff2(0x6e4)]['origi'+'nalFu'+'nc']),_0x4d3210[_0x78bff2(0x929)])+_0x279f9a['hookF'+_0x78bff2(0x487)+_0x78bff2(0x6e4)][_0x78bff2(0x801)+'veGam'+'eAtFi'+'re']+_0x4d3210[_0x78bff2(0x26d)]+(_0x279f9a[_0x78bff2(0x811)+_0x78bff2(0x487)+_0x78bff2(0x6e4)][_0x78bff2(0x3c1)+_0x78bff2(0xa11)+'AtFir'+'e']||_0x4d3210['aJapY']),_0x78bff2(0x4a3)+_0x78bff2(0x663)+_0x78bff2(0x881)+_0x78bff2(0xc0f)+'exist'+_0x78bff2(0x258)+'en\x20an'+_0x78bff2(0x895)+_0x78bff2(0xc33)+_0x78bff2(0x5fa)+_0x78bff2(0xb9b)+_0x78bff2(0xc58))),_0x279f9a[_0x78bff2(0xb44)+_0x78bff2(0x35c)][_0x78bff2(0x558)](_0x4d3210[_0x78bff2(0x36d)](_0x4d3210[_0x78bff2(0x66c)]+(_0x279f9a[_0x78bff2(0x5fc)+'ls'][_0x78bff2(0x3c1)+'ource']||_0x78bff2(0xbeb))+').\x20'+('Heap\x20'+_0x78bff2(0xa43)+_0x78bff2(0x4d0)+'\x20bloc'+'ked\x20u'+_0x78bff2(0x2b7)+_0x78bff2(0x107)+'e\x20obj'+'ect\x20w'+_0x78bff2(0x1b0)+_0x78bff2(0x967)+_0x78bff2(0x4de)+_0x78bff2(0x112)+_0x78bff2(0xb77)+_0x78bff2(0x83)+'.'),_0x280757));}(_0x279f9a[_0x78bff2(0x5fc)+'ls']&&!_0x279f9a['globa'+'ls']['value'+'Wrapp'+'er']||_0x279f9a[_0x78bff2(0x5fc)+'ls'][_0x78bff2(0xac7)+'Wrapp'+'er']===_0x4d3210['deYWc'])&&_0x279f9a['warni'+_0x78bff2(0x35c)][_0x78bff2(0x558)](_0x4d3210[_0x78bff2(0x3dd)]);_0x279f9a[_0x78bff2(0x8b)+'Total']>-0x25f6+0x13e9+0x1*0x120d&&_0x279f9a[_0x78bff2(0x8b)+'Appli'+'ed']===-0x124e+-0x1fa3+0x31f1&&_0x45301a&&('iqwGQ'==='iqwGQ'?_0x4d3210['OvMIC'](_0x279f9a['hooks'+'Resol'+'ved'],-0x1bdc*0x1+0x221b+-0x63f)?_0x279f9a[_0x78bff2(0xb44)+_0x78bff2(0x35c)]['push'](_0x4d3210[_0x78bff2(0x517)](_0x4d3210['wDNru'](_0x78bff2(0xb5e)+_0x279f9a['hooks'+'Total'],_0x78bff2(0xa6)+_0x78bff2(0xbbe)+'e\x20eve'+'n\x20SEE'+_0x78bff2(0x372)+'UWMK.'+_0x78bff2(0x41d)+_0x78bff2(0x822)+'\x20pass'+'\x20')+(_0x78bff2(0x7f4)+'once\x20'+'durin'+_0x78bff2(0xb00)+_0x78bff2(0x1e6)+_0x78bff2(0x3bf)+'nstan'+_0x78bff2(0x851)+_0x78bff2(0x653)+'snaps'+'hots\x20'+'plugi'+'n.hoo'+_0x78bff2(0xc0e)+'ngth,'+'\x20')+(_0x78bff2(0x318)+'oks\x20r'+_0x78bff2(0x97a)+_0x78bff2(0x46c)+_0x78bff2(0x222)+'\x20it\x20a'+_0x78bff2(0x8bb)+_0x78bff2(0x9e1)+'\x20for\x20'+_0x78bff2(0x397)+'ife\x20o'+_0x78bff2(0x4be)+_0x78bff2(0x3fd)+'.\x20')+('Regis'+_0x78bff2(0xc1e)+'\x20'),_0x279f9a[_0x78bff2(0x8b)+'Regis'+'tered'+_0x78bff2(0x974)])+(_0x78bff2(0xa6)+'(s)\x20d'+_0x78bff2(0x4fa)+'\x20armi'+'ng\x20at'+'\x20docu'+_0x78bff2(0x70a)+_0x78bff2(0x333)+'.')):_0x279f9a[_0x78bff2(0xb44)+'ngs'][_0x78bff2(0x558)](_0x4d3210[_0x78bff2(0x6cb)]('UWMK\x20'+_0x78bff2(0x801)+'ved\x20'+_0x279f9a['hooks'+_0x78bff2(0x251)+'ved']+_0x78bff2(0xb27)+_0x279f9a['hooks'+_0x78bff2(0x6cd)],'\x20hook'+'(s)\x20t'+_0x78bff2(0x1bd)+_0x78bff2(0x358)+_0x78bff2(0xb8d)+_0x78bff2(0x6cc)+'appli'+'ed\x20no'+'ne.\x20T'+'he\x20si'+'gnatu'+_0x78bff2(0x5db))+(_0x78bff2(0x270)+_0x78bff2(0xb82)+'hodIn'+_0x78bff2(0x778)+'->\x20vo'+_0x78bff2(0xa5)+'es\x20no'+_0x78bff2(0xc32)+'ch\x20th'+_0x78bff2(0x20b)+_0x78bff2(0x9cf))):(_0x41dcdc[_0x78bff2(0x16a)]=_0x3a6fe9,_0x25f801()));if(_0x279f9a[_0x78bff2(0x8b)+_0x78bff2(0x70c)+'ed']>-0x1713+-0x11d8+0x28eb&&!_0x279f9a[_0x78bff2(0xb9)+_0x78bff2(0x9a4)][_0x78bff2(0x317)+'ntrol'+'ler']){if('RpwYe'==='RpwYe')_0x279f9a[_0x78bff2(0xb44)+_0x78bff2(0x35c)][_0x78bff2(0x558)](_0x4d3210['RVMgu']+_0x4d3210[_0x78bff2(0xba0)]);else{if(_0x4b21a4[_0x78bff2(0x2a3)+'ns'][_0x10fa12][_0x78bff2(0x2a5)+_0x78bff2(0x628)])_0x5da276[_0x78bff2(0x2a3)+'ns'][_0x2b88fd]['class'+'Name']='mn-ta'+'b'+(_0x147b89===_0x321909?'\x20acti'+'ve':'');}}return _0x279f9a[_0x78bff2(0xb9)+_0x78bff2(0x309)+_0x78bff2(0x3da)+'ed'][_0x78bff2(0x17c)+'h']&&_0x279f9a['warni'+_0x78bff2(0x35c)]['push'](_0x4d3210[_0x78bff2(0x857)](_0x78bff2(0x83e)+_0x78bff2(0x759)+'nce\x20f'+_0x78bff2(0x526)+_0x78bff2(0x6bb)+_0x78bff2(0xb5d)+_0x78bff2(0xaf3)+_0x78bff2(0xa7c),_0x279f9a[_0x78bff2(0xb9)+'ncesR'+_0x78bff2(0x3da)+'ed']['join'](',\x20'))),_0x279f9a;}function _0x5be8ab(_0x4d7278){var _0x365d38=_0x1b4785,_0x117d4d=_0x4d3210[_0x365d38(0xb0b)][_0x365d38(0x60a)]('|'),_0x3cd3dd=0x1e57*-0x1+0x10ea+0xd6d;while(!![]){switch(_0x117d4d[_0x3cd3dd++]){case'0':console[_0x365d38(0x6fb)](_0x365d38(0xaad)+_0x365d38(0xb0c)+'\x20Skil'+'lWarz'+'\x20repo'+'rt',_0x365d38(0x93b)+':'+_0x10dc48+(';font'+_0x365d38(0x40e)+_0x365d38(0x538)+'0'),_0x4d7278);continue;case'1':try{_0x4d3210[_0x365d38(0xae8)](_0xfbbb1b,_0x4d7278);}catch(_0x5d7e6d){}continue;case'2':console[_0x365d38(0x6fb)](_0x4d3210['KmABi'](_0x4d3210[_0x365d38(0x856)](_0x3c082f+'\x0a'+JSON['strin'+'gify'](_0x4d7278,null,-0x17e0+-0x11ed+0x29ce),'\x0a'),_0x15c15f));continue;case'3':_0x4d3210['rgmbH'](_0x52c86e,'repor'+'t',{'report':_0x4d7278});continue;case'4':_0xa632df=_0x4d7278;continue;}break;}}function _0x2fbaa9(){var _0x59a949=_0x1b4785,_0x5c48a1={'lGful':function(_0x3d2e90,_0x15891f){return _0x3d2e90-_0x15891f;},'jsbXo':function(_0x1511f2,_0x4f294e){return _0x1511f2/_0x4f294e;}};try{if(_0x4d3210[_0x59a949(0x779)]('GhOPy','QKOoX')){var _0x2da3fe=_0x5be87d[0x1c3d*-0x1+0x26be+-0xa81]-_0x269d3a[_0x59a949(0x52b)][-0x2608+-0x1*0x1525+-0x3b2d*-0x1],_0xbf8b3f=_0x5c48a1['lGful'](_0x5be5bb[-0x1*-0x59+-0x1707+0x30*0x79],_0x3f38a3[_0x59a949(0x52b)][-0x17d*0x19+0x305*-0x7+0x54e*0xb]);_0x24f5cb['d']=_0x1f340e[_0x59a949(0x3e3)](_0x2da3fe*_0x2da3fe+_0xbf8b3f*_0xbf8b3f),_0x5ea335['beari'+'ng']=_0x5c48a1[_0x59a949(0x1fa)](_0x2adc89[_0x59a949(0x585)](_0x2da3fe,_0xbf8b3f)*(0x3b0*0x7+-0x18d9*-0x1+-0x57*0x93),_0x5e0976['PI']);}else return _0x23f7f3();}catch(_0x359ef3){return{'version':_0x21f2bf,'when':new Date()['toISO'+_0x59a949(0xb6d)+'g'](),'elapsedMs':Date[_0x59a949(0x91b)]()-_0x1fe26d,'host':_0x11e2da,'uwmk':!!(window[_0x59a949(0x72f)+_0x59a949(0x7c1)+'dkit']&&window[_0x59a949(0x72f)+_0x59a949(0x7c1)+_0x59a949(0x41c)]['Runti'+'me']),'il2CppContext':![],'arm':_0x1065b2,'hooksTotal':_0x2b4c43[_0x59a949(0x17c)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':String(_0x359ef3&&_0x359ef3['messa'+'ge']||_0x359ef3)};}}function _0x11c845(){var _0x4d7ee9=_0x1b4785;if(_0x4d3210[_0x4d7ee9(0x194)](_0x4d3210['OazKH'],'TvIlJ'))_0x3e350d=_0x35ef73[_0x5614a6]['last'],_0x4a9eec['sourc'+'e']=_0x4d3210['PaBWD'],_0x1b1d79=_0x125e5f?_0x332dce[_0x1c024a][_0x4d7ee9(0xb42)]:_0xd1870(_0x86e802+_0x31e965,_0x4d7ee9(0xd4));else{var _0x4a03d6=-0x58f*0x3+-0x1c0e+0x2cbb;try{if(_0x4d7ee9(0x2d7)!==_0x4d7ee9(0x2d7))try{_0x22e03a[_0x4d7ee9(0x3f3)][_0x4340a5]();}catch(_0x36dd43){}else _0x4d3210['ShNNb'](_0x6be83e);}catch(_0x2046e2){}try{_0x4d3210[_0x4d7ee9(0x54d)](_0x3522c1);}catch(_0x575bca){}setInterval(_0x59b8d0,0x7a1+0x134f+-0x176c),_0x4d3210[_0x4d7ee9(0x15c)](_0x5be8ab,_0x2fbaa9()),function _0x79ad6a(){var _0x20d38c=_0x4d7ee9;if(!_0x2b4c43[_0x20d38c(0x17c)+'h'])try{_0x5b6590();}catch(_0x2fa030){}_0x4a03d6++,_0x5be8ab(_0x2fbaa9());if(!_0x2b4c43[_0x20d38c(0x17c)+'h']&&_0x4a03d6<0x139*-0x2+0x22ee*0x1+0x7d4*-0x4)setTimeout(_0x79ad6a,0x2358+0x3*0x14b+-0x1f69);else{if(!Object['keys'](_0x22c822)['lengt'+'h']&&_0x4d3210['PDjiJ'](_0x4a03d6,0x1994+-0x695+-0x11d3))setTimeout(_0x79ad6a,0x8e*-0xb+0x69f*-0x3+0x21c7*0x1);else setTimeout(_0x79ad6a,-0x397+-0x15d7*0x1+0xf0f*0x2);}}();}}if(document[_0x1b4785(0x39e)])_0x4d3210[_0x1b4785(0x341)](_0x11c845);else document['addEv'+_0x1b4785(0x1e3)+'stene'+'r'](_0x1b4785(0xa13)+'ntent'+_0x1b4785(0x637)+'d',_0x11c845,{'once':!![]});if(document[_0x1b4785(0x39e)]){if(_0x1b4785(0x6c1)!=='xTmhq'){_0x3a7123['push'](_0x4d3210[_0x1b4785(0x5ae)]);for(var _0x89ff8=-0x25ea+0x1540+0x10aa;_0x89ff8<_0x4d8986['warni'+'ngs']['lengt'+'h'];_0x89ff8++)_0x5824d9['push'](_0x4d3210[_0x1b4785(0x90a)]+_0xca7dec[_0x1b4785(0xb44)+'ngs'][_0x89ff8]);}else try{_0x4d3210['Jdjuu']('KiVBS',_0x4d3210[_0x1b4785(0x773)])?_0x4d3210[_0x1b4785(0x513)](_0x4fa156,_0x403058):_0x4e60dc();}catch(_0x23595d){}}else document[_0x1b4785(0xbb7)+_0x1b4785(0x1e3)+_0x1b4785(0x740)+'r'](_0x1b4785(0xa13)+_0x1b4785(0x3bb)+'Loade'+'d',function(){try{_0x4e60dc();}catch(_0x8d32f){}},{'once':!![]});})()));
