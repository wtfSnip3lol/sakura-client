// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.0.6
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

(function(_0x2cf5b7,_0x272567){var _0xfc49d4=_0x31c3,_0x4158f4=_0x2cf5b7();while(!![]){try{var _0x246ea1=-parseInt(_0xfc49d4(0x18b))/(0x1fea+0x729+0x1*-0x2712)+-parseInt(_0xfc49d4(0x44f))/(0xe94+0x3*0x653+-0x218b)*(-parseInt(_0xfc49d4(0x363))/(-0x3*-0x1e8+0xb*0x2c0+-0x23f5))+parseInt(_0xfc49d4(0x282))/(0x77a+0x141*-0x1+0xe3*-0x7)*(parseInt(_0xfc49d4(0x10b))/(0x4*-0x3ef+0xc9a+0x10d*0x3))+-parseInt(_0xfc49d4(0x2a6))/(0x1d*0x17+0x126b+-0x1500)*(-parseInt(_0xfc49d4(0x1a7))/(0x6c4+0xa3e+0x3f*-0x45))+-parseInt(_0xfc49d4(0x2da))/(0x1b7c+0x9*0x50+-0xf22*0x2)+parseInt(_0xfc49d4(0x2c9))/(0x370+0x13c*-0x18+0x1a39)*(-parseInt(_0xfc49d4(0x458))/(-0x26b3*0x1+-0x13a5*-0x1+0xd*0x178))+parseInt(_0xfc49d4(0x17f))/(-0x26ae*-0x1+-0x2*0xb5a+-0xfef);if(_0x246ea1===_0x272567)break;else _0x4158f4['push'](_0x4158f4['shift']());}catch(_0x2639ea){_0x4158f4['push'](_0x4158f4['shift']());}}}(_0x2502,0x45da7+-0x1292*0x60+-0x88ae9*-0x1),((()=>{'use strict';var _0x434d03=_0x31c3,_0x4581b1={'vbtLS':function(_0x42d433,_0xb3e0a7){return _0x42d433<_0xb3e0a7;},'JLlIL':'cmd','TOZDW':function(_0x37a68d,_0x5b7e56){return _0x37a68d===_0x5b7e56;},'vjRcH':_0x434d03(0x29b),'xslxv':'windo'+_0x434d03(0x3b1)+_0x434d03(0x10f)+_0x434d03(0x3ca)+_0x434d03(0x340)+_0x434d03(0x166)+'pper\x20'+_0x434d03(0x3fa)+'ssing'+'\x20-\x20ca'+'pture'+'\x20is\x20r'+_0x434d03(0x121)+_0x434d03(0x28a)+_0x434d03(0x41e),'AqGBY':_0x434d03(0x23a),'SgmSh':'sakur'+'a-sw-'+'v2','JOAYb':_0x434d03(0x131)+_0x434d03(0x30f),'cHBhr':function(_0x561176){return _0x561176();},'IYpLT':function(_0x1f08a7,_0x3cf596){return _0x1f08a7(_0x3cf596);},'uBoiJ':function(_0x34c2a5,_0x2f3fd2){return _0x34c2a5+_0x2f3fd2;},'CAtTX':function(_0x305c53){return _0x305c53();},'RBzgN':'no\x20re'+'port\x20'+_0x434d03(0x155)+_0x434d03(0x321)+_0x434d03(0x118)+'me\x20no'+'t\x20inj'+_0x434d03(0x34f)+'?','hjhhN':_0x434d03(0x4e1)+'c7','Ldobi':_0x434d03(0x424)+_0x434d03(0x1f7)+_0x434d03(0x16c)+_0x434d03(0x4d7)+_0x434d03(0x333)+_0x434d03(0x40e)+_0x434d03(0x1d1)+'e\x20rep'+'ort.\x0a'+'\x0a','bqIzm':_0x434d03(0x1f2)+_0x434d03(0x391)+_0x434d03(0x37c)+_0x434d03(0x1b3)+'e\x20use'+_0x434d03(0x103)+_0x434d03(0x35f)+_0x434d03(0x184)+_0x434d03(0x272)+_0x434d03(0x15e)+_0x434d03(0x442)+_0x434d03(0x42c)+'\x20the\x20'+_0x434d03(0x301)+_0x434d03(0x107),'YLzke':_0x434d03(0x1f4)+_0x434d03(0x35e)+'ainin'+_0x434d03(0x14a)+_0x434d03(0x205)+_0x434d03(0x26a)+'\x0a\x0a','NBrVi':_0x434d03(0x137)+_0x434d03(0x23f)+'age\x20h'+'as\x20no'+_0x434d03(0x4c8)+'n\x20rel'+_0x434d03(0x48a)+_0x434d03(0x2bd)+_0x434d03(0x2bc)+_0x434d03(0x393)+_0x434d03(0x15c),'fiKvh':_0x434d03(0x35a),'QPVBv':_0x434d03(0x3db)+_0x434d03(0x3c9),'sZPpx':'qFZiP','ldbKM':function(_0x5e8587,_0x120af6){return _0x5e8587!==_0x120af6;},'nPotr':_0x434d03(0x267)+'a8','odAgM':function(_0x3335a3,_0x16b743){return _0x3335a3>_0x16b743;},'kNVWY':'metad'+_0x434d03(0x418)+'eady\x20'+'·\x20','OejoA':function(_0x5541d3,_0x21ae67){return _0x5541d3+_0x21ae67;},'WDMcO':_0x434d03(0x3e3)+_0x434d03(0x2d4)+_0x434d03(0x2c8)+'lWarz'+'\x20repo'+'rt','eiIJx':function(_0x556c1c,_0x2d4889){return _0x556c1c+_0x2d4889;},'abzJu':'font:'+_0x434d03(0x32f)+_0x434d03(0x2ba)+'i-mon'+'ospac'+_0x434d03(0x199)+'solas'+_0x434d03(0x343)+_0x434d03(0x3ae)+_0x434d03(0x256)+'shado'+'w:0\x202'+'0px\x205'+_0x434d03(0x2d2)+'20px\x20'+_0x434d03(0x1ba),'tqAQP':_0x434d03(0x339)+'ay:fl'+'ex;fl'+_0x434d03(0x492)+_0x434d03(0x398)+'on:co'+'lumn;'+'overf'+_0x434d03(0x22f)+'idden'+';','fGodh':function(_0x12437d,_0x3ce005){return _0x12437d+_0x3ce005;},'TwYXM':function(_0x290d14,_0x2fa237){return _0x290d14+_0x2fa237;},'VSzbY':_0x434d03(0x28e)+_0x434d03(0x2ae)+'=\x22pad'+_0x434d03(0x228)+'9px\x201'+'2px;b'+_0x434d03(0x402)+_0x434d03(0x3f1)+'om:1p'+_0x434d03(0x1da)+_0x434d03(0x377)+'ba(25'+_0x434d03(0x2c3)+',177,'+_0x434d03(0x457)+'ispla'+_0x434d03(0x269)+'x;gap'+_0x434d03(0x12a)+_0x434d03(0x1be)+_0x434d03(0x10e)+_0x434d03(0x226)+_0x434d03(0x34d)+'lex:0'+_0x434d03(0x423)+_0x434d03(0x46a),'aBrqO':_0x434d03(0x1ed)+_0x434d03(0x172)+'sw2-s'+'tatus'+'\x22\x20sty'+_0x434d03(0x227)+_0x434d03(0x3ef)+_0x434d03(0x1c3)+'c9\x22>w'+_0x434d03(0x1e3)+_0x434d03(0x38e)+'\x20game'+_0x434d03(0x1d8)+_0x434d03(0x4ec)+'pan>','uQTeR':'<butt'+_0x434d03(0x1a3)+_0x434d03(0x40f)+_0x434d03(0x463)+'\x22\x20sty'+_0x434d03(0x18a)+_0x434d03(0x1ff)+_0x434d03(0x4d6)+_0x434d03(0x341)+'gin-l'+_0x434d03(0x4c2)+_0x434d03(0x336)+'ackgr'+'ound:','xOKQU':'<butt'+_0x434d03(0x1a3)+_0x434d03(0x40f)+_0x434d03(0x4e3)+_0x434d03(0x381)+_0x434d03(0x3f9)+'groun'+_0x434d03(0x147)+'nspar'+'ent;b'+'order'+_0x434d03(0x123)+'solid'+'\x20rgba'+'(255,'+_0x434d03(0x2ac)+_0x434d03(0x438)+');col'+'or:#f'+_0x434d03(0x390)+';bord'+_0x434d03(0x13e)+'dius:'+_0x434d03(0x1df)+_0x434d03(0x4b0)+'g:4px'+'\x208px;'+_0x434d03(0x10c)+_0x434d03(0x1cd)+_0x434d03(0x34b)+'\x22>x</'+'butto'+'n>','lsoZV':'</div'+'>','AjLdX':_0x434d03(0x28e)+_0x434d03(0x2ae)+'=\x22pad'+_0x434d03(0x228)+'8px\x201'+_0x434d03(0x134)+_0x434d03(0x402)+_0x434d03(0x3f1)+'om:1p'+_0x434d03(0x1da)+'id\x20rg'+'ba(25'+'5,143'+',177,'+_0x434d03(0x10a)+'displ'+_0x434d03(0x2a5)+_0x434d03(0x2ad)+_0x434d03(0x4ac)+_0x434d03(0x259)+'n-ite'+_0x434d03(0x2fc)+_0x434d03(0x34b)+_0x434d03(0x1e1)+_0x434d03(0x2c0)+_0x434d03(0x2a0)+'>','uiuZh':'<pre\x20'+'id=\x22s'+_0x434d03(0x35d)+'t\x22\x20st'+'yle=\x22'+'margi'+_0x434d03(0x4dc)+_0x434d03(0x4b0)+_0x434d03(0x4af)+'x\x2012p'+_0x434d03(0x372)+_0x434d03(0x466)+_0x434d03(0x1e6)+_0x434d03(0x394)+_0x434d03(0x331)+_0x434d03(0x386)+'white'+_0x434d03(0x196)+_0x434d03(0x485)+_0x434d03(0x4df)+_0x434d03(0x102)+'-brea'+'k:bre'+_0x434d03(0x3af)+_0x434d03(0x42a)+_0x434d03(0x1b1)+_0x434d03(0x405)+';','QeSNm':_0x434d03(0x345)+_0x434d03(0x2ea),'SEnbF':'#sw2-'+'hint','JRyMj':function(_0x25ce56,_0x5bbc57){return _0x25ce56<_0x5bbc57;},'oqipw':_0x434d03(0x325),'hGWaE':function(_0x16ace3,_0xd333bc){return _0x16ace3+_0xd333bc;},'oMqOs':function(_0x8e345d,_0x4a45b1){return _0x8e345d+_0x4a45b1;},'vjwZK':function(_0x14708a,_0x22f769){return _0x14708a!=_0x22f769;},'Emvub':_0x434d03(0x13d)+'\x20\x20\x20\x20','vcgcj':_0x434d03(0x4f8)+_0x434d03(0x179)+'jects'+_0x434d03(0x35c)+_0x434d03(0x30d)+_0x434d03(0x3a7),'oAmsO':'The\x20h'+'ooks\x20'+'fire\x20'+_0x434d03(0x4ce)+'e\x20gam'+_0x434d03(0x443)+'wn\x20Up'+_0x434d03(0x3ee)+');\x20no'+_0x434d03(0x1e7)+_0x434d03(0x35c)+_0x434d03(0x30d)+'means','yhhUg':'\x20@\x20','OmQYI':function(_0x3cfb77,_0x3de7ea){return _0x3cfb77<_0x3de7ea;},'YzZGU':function(_0x5e763c,_0x39d0be){return _0x5e763c+_0x39d0be;},'RIKoY':'──\x20','FtCVZ':'numbe'+'r','PdURV':function(_0xba5d97,_0x30d1e7){return _0xba5d97+_0x30d1e7;},'fYHXu':_0x434d03(0x2d0)+'ngs','bSBRj':function(_0x3f512a,_0x270feb){return _0x3f512a<_0x270feb;},'IeFMG':_0x434d03(0x3d0),'GPHcX':function(_0x18a7f4,_0x3ff73e){return _0x18a7f4!==_0x3ff73e;},'wcgag':_0x434d03(0x241)+'t','OvJHj':function(_0x1a7614,_0x4ec606){return _0x1a7614===_0x4ec606;},'XZomw':'OxBWu','RjOif':function(_0x257189,_0x259b99){return _0x257189!==_0x259b99;},'tfdqk':function(_0x4404dc,_0x532b19){return _0x4404dc===_0x532b19;},'wiCOa':'PeMgv','OujDp':function(_0x1f55f1,_0x3652cc){return _0x1f55f1!==_0x3652cc;},'txYLh':_0x434d03(0x335)+'ion','OiKvI':'F9\x20tw'+'ice\x20w'+_0x434d03(0x337)+_0x434d03(0x4fd)+_0x434d03(0x467)+_0x434d03(0x367)+'ting\x20'+_0x434d03(0x2ff)+_0x434d03(0x114)+_0x434d03(0x3e5)+_0x434d03(0x33c)+'h\x20fie'+_0x434d03(0x159)+_0x434d03(0x33c)+'h.','diCHU':_0x434d03(0x4f6),'iYJMm':_0x434d03(0x40a),'TriXa':_0x434d03(0x1c8),'IVaEn':_0x434d03(0x3fb),'xWasn':_0x434d03(0x2de),'wHLYW':_0x434d03(0x242),'mtUUy':'QgzTR','MjvRG':'KYHYp','FCbtX':'jpmUK','tbLcW':_0x434d03(0x2c2),'HVlSB':'windo'+_0x434d03(0x110)+_0x434d03(0x31c),'PpddN':function(_0x293e1f,_0x332e31){return _0x293e1f+_0x332e31;},'VlbAk':'zNwFi','uugeO':_0x434d03(0x185),'quSuF':function(_0x1781d1,_0x53928c){return _0x1781d1|_0x53928c;},'gnGop':function(_0x2e08c6,_0x3f7b65){return _0x2e08c6===_0x3f7b65;},'otTFk':function(_0x454945,_0x10e6ec){return _0x454945+_0x10e6ec;},'evrVi':'.Modu'+'le','ffIBo':_0x434d03(0x16e)+_0x434d03(0x4a4)+'\x20','BqwbZ':_0x434d03(0x426)+_0x434d03(0x1ec)+_0x434d03(0x378)+'\x20armi'+_0x434d03(0x3a1)+_0x434d03(0x494)+'ment-'+_0x434d03(0x2cd)+'.','DSNaO':_0x434d03(0x451),'VtWif':function(_0x31b9c3,_0x1557f5){return _0x31b9c3===_0x1557f5;},'ylzPA':_0x434d03(0x446),'ZBCSV':_0x434d03(0x113),'YUxxq':'plugi'+'n._ru'+'ntime'+'._gam'+'e','gCHuu':_0x434d03(0x2d7)+'me.re'+_0x434d03(0x149)+_0x434d03(0x465)+')','ZxOqr':_0x434d03(0x2d7)+_0x434d03(0x1d2)+_0x434d03(0x320),'GCoeC':function(_0x1bcfdf,_0x5d55a9){return _0x1bcfdf<_0x5d55a9;},'ziofA':_0x434d03(0x456),'rSTWb':'windo'+'w.','CbXDr':_0x434d03(0x176),'oMLbq':function(_0x5e359c,_0x4edb86){return _0x5e359c===_0x4edb86;},'odonY':_0x434d03(0x202),'bvMqe':'no\x20HE'+_0x434d03(0x151)+_0x434d03(0x1c0)+_0x434d03(0x39d)+_0x434d03(0x206)+_0x434d03(0x43b)+'\x20reac'+'hable'+_0x434d03(0x106)+_0x434d03(0x2d7)+_0x434d03(0x392)+_0x434d03(0x149)+_0x434d03(0x465)+')\x20or\x20'+'any\x20w'+_0x434d03(0x397)+_0x434d03(0x27a)+'al','yZLQx':function(_0x2205ac,_0x4f97af){return _0x2205ac+_0x4f97af;},'UxGds':function(_0x1c1b08,_0xabecf3){return _0x1c1b08+_0xabecf3;},'ihdoX':'\x20past'+_0x434d03(0x445)+_0x434d03(0x156)+'0x','NvahE':_0x434d03(0x416),'YNpgh':_0x434d03(0x43f),'pnRCa':function(_0x114444,_0x1b7249){return _0x114444+_0x1b7249;},'uWugY':function(_0x21f895,_0x29d1e1){return _0x21f895&_0x29d1e1;},'JBWDw':_0x434d03(0x2c6),'KkCxp':_0x434d03(0x316),'yZpHS':function(_0x12d2b1,_0x1d176b){return _0x12d2b1|_0x1d176b;},'Kuekc':_0x434d03(0x4d4),'sXSOa':function(_0x37952d,_0x5c4672,_0x31ddb0){return _0x37952d(_0x5c4672,_0x31ddb0);},'bKEmA':function(_0x55e3a9,_0x29cbe7){return _0x55e3a9+_0x29cbe7;},'aHgSG':function(_0x57bf56,_0x135451,_0x32d793){return _0x57bf56(_0x135451,_0x32d793);},'ljzAT':function(_0x23bffd,_0x439474){return _0x23bffd+_0x439474;},'ysrko':function(_0xab59d8,_0xaa89c2){return _0xab59d8||_0xaa89c2;},'StJdf':function(_0x29801c,_0x27693d){return _0x29801c(_0x27693d);},'vqDRR':function(_0x3dba8c,_0x2d1705){return _0x3dba8c^_0x2d1705;},'VSWOh':'obfI','zwGAN':_0x434d03(0x1dc),'KayQC':function(_0x54e4b0,_0x5301c5){return _0x54e4b0+_0x5301c5;},'GUAlV':function(_0xdaeac7,_0x424bf5){return _0xdaeac7|_0x424bf5;},'iovVz':function(_0x5158aa,_0x1fd00d,_0x227f8f,_0x347075){return _0x5158aa(_0x1fd00d,_0x227f8f,_0x347075);},'QVEsj':function(_0x5c43c9,_0x529977){return _0x5c43c9+_0x529977;},'SDaKh':function(_0x245227,_0x57fb8b){return _0x245227+_0x57fb8b;},'YywMl':'ITxOQ','fIIGf':function(_0x23d270,_0x17422d){return _0x23d270-_0x17422d;},'zqzaJ':function(_0x60c51d){return _0x60c51d();},'EkIKy':'dZjbJ','gcykr':function(_0x3db84c,_0x5c8e62){return _0x3db84c+_0x5c8e62;},'RpibS':_0x434d03(0x21f)+_0x434d03(0x3b2),'PCUuH':_0x434d03(0x2f3),'bQSRB':function(_0x40e5e2,_0x111b55){return _0x40e5e2!==_0x111b55;},'TuMbU':'gPzpV','fHZXk':function(_0x569f5e,_0x1f9131){return _0x569f5e===_0x1f9131;},'cgxGK':function(_0x497acb){return _0x497acb();},'nGXPU':_0x434d03(0x3e3)+_0x434d03(0x2d4)+'\x20pane'+_0x434d03(0x4e5)+'ate\x20f'+'ailed','EHOEm':_0x434d03(0x30c),'GEPui':_0x434d03(0x101),'ocnFZ':function(_0x1ef946,_0x5e790b){return _0x1ef946+_0x5e790b;},'LHzWl':_0x434d03(0x355),'TDuwI':'\x20ACTI'+'VE','gAoPG':_0x434d03(0x15e)+_0x434d03(0x276)+_0x434d03(0x11f)+_0x434d03(0x18c),'zXTYV':_0x434d03(0x18e)+'\x20the\x20'+_0x434d03(0x295)+'ence\x20'+_0x434d03(0x3b8)+_0x434d03(0x130)+_0x434d03(0x1ad)+_0x434d03(0x236)+_0x434d03(0x249)+_0x434d03(0x4f1)+'ble\x20n'+_0x434d03(0x3c2),'JWtiw':_0x434d03(0x376),'nAZFn':_0x434d03(0x201),'kYVHj':function(_0x3db7eb,_0x3702a8){return _0x3db7eb&&_0x3702a8;},'bdMQr':'none','WWnWX':function(_0x3fc378,_0x539c35){return _0x3fc378!==_0x539c35;},'qrQAs':_0x434d03(0x49d),'LYokZ':_0x434d03(0x268)+_0x434d03(0x175)+_0x434d03(0x252),'sozWh':'game','Llmtk':'unity'+_0x434d03(0x175)+_0x434d03(0x4d0)+'apper','tfBAB':function(_0x3f6a5f,_0xafdff3){return _0x3f6a5f<_0xafdff3;},'fdvZZ':_0x434d03(0x29d),'qQEWu':_0x434d03(0x3fe)+_0x434d03(0x3aa),'FjWBs':_0x434d03(0x254),'yYXxT':'\x20->\x20','vUBDc':function(_0x59d14e,_0x36a32d){return _0x59d14e!==_0x36a32d;},'VWRhe':_0x434d03(0x327),'vygwR':_0x434d03(0x111),'PYeDl':function(_0x884c65,_0x47070a){return _0x884c65(_0x47070a);},'qJWtq':function(_0xf9f51f,_0x44d15c){return _0xf9f51f+_0x44d15c;},'oaKYX':function(_0x4203ef,_0x54bf4c){return _0x4203ef+_0x54bf4c;},'hQlwx':function(_0x2ac3bc,_0x568710){return _0x2ac3bc+_0x568710;},'neTNw':'\x20hook'+'(s)\x20t'+'o\x20a\x20t'+_0x434d03(0x4d8)+_0x434d03(0x4ea)+_0x434d03(0x1bc)+_0x434d03(0x312)+'ed\x20no'+_0x434d03(0x4f4)+_0x434d03(0x232)+_0x434d03(0x200)+_0x434d03(0x283),'bsSMp':'(this'+',\x20Met'+'hodIn'+_0x434d03(0x1c1)+_0x434d03(0x1b4)+'id\x20do'+_0x434d03(0x250)+'t\x20mat'+_0x434d03(0x415)+'is\x20bu'+_0x434d03(0x342),'cOlJU':function(_0x2f7a8f,_0xc3885a){return _0x2f7a8f+_0xc3885a;},'vWOnS':function(_0x12ebcf,_0x9a66b2){return _0x12ebcf+_0x9a66b2;},'KEHtX':_0x434d03(0x31d),'fGDwN':_0x434d03(0x45f),'MqlPB':_0x434d03(0x264),'XkOKO':function(_0x4b3188){return _0x4b3188();},'RicHW':function(_0x458f54,_0x45d72f){return _0x458f54+_0x45d72f;},'FZkYH':function(_0x451826,_0x2267ae){return _0x451826+_0x2267ae;},'hUCqn':'Reaso'+'n:\x20','cqViN':function(_0x1bfe98,_0x40a4d5){return _0x1bfe98+_0x40a4d5;},'wQulV':'ANOTH'+_0x434d03(0x412)+'MK\x20CO'+'PY\x20TO'+_0x434d03(0x3f4)+'ER\x20wi'+_0x434d03(0x1f8)+'Unity'+_0x434d03(0x370)+_0x434d03(0x188)+_0x434d03(0x133)+_0x434d03(0x2d7)+_0x434d03(0x48d)+'\x20arme'+'d\x20was'+'\x20','FgMqB':'WoEQo','yIXon':function(_0x18d69d,_0x2b6854){return _0x18d69d+_0x2b6854;},'kIuap':function(_0x3a83f3,_0x199a28){return _0x3a83f3+_0x199a28;},'ZjTlT':_0x434d03(0x19a)+_0x434d03(0x223)+_0x434d03(0x245)+_0x434d03(0x158)+'=','kCikr':function(_0x34f3a6,_0x170bd5){return _0x34f3a6+_0x170bd5;},'Nnvrb':function(_0x423308,_0x93998c){return _0x423308+_0x93998c;},'UcDHQ':'\x20hook'+_0x434d03(0x157)+_0x434d03(0x4cf)+_0x434d03(0x4cd)+_0x434d03(0x420)+_0x434d03(0x193)+_0x434d03(0x133)+'apply'+_0x434d03(0x2f0)+'\x20','FXCam':_0x434d03(0x208)+_0x434d03(0x11f)+'ved\x20','sJQLZ':function(_0x19733e,_0x4368ab){return _0x19733e+_0x4368ab;},'iHvjL':_0x434d03(0x1d5),'RjiCq':function(_0x5e6e4a,_0x2983ff){return _0x5e6e4a+_0x2983ff;},'ShZpp':function(_0x56a7b8,_0x40b122){return _0x56a7b8+_0x40b122;},'GTush':'color'+':','SAVFj':function(_0x4f7035,_0xaa7cb6){return _0x4f7035+_0xaa7cb6;},'AytEm':function(_0x38c051,_0x509d5f){return _0x38c051+_0x509d5f;},'heRjD':function(_0x202d23,_0x2d64d0){return _0x202d23+_0x2d64d0;},'dwCJA':function(_0x20f72c,_0x31a12e){return _0x20f72c+_0x31a12e;},'lKvFW':function(_0x2a6975,_0x4a313f,_0x321add){return _0x2a6975(_0x4a313f,_0x321add);},'cLnCY':function(_0x396497,_0x2db78c,_0x20ec4e){return _0x396497(_0x2db78c,_0x20ec4e);},'EfaEV':_0x434d03(0x3b5)+'er','ZPGem':_0x434d03(0x4a1)+'r','aMTeZ':'===SA'+'KURA-'+_0x434d03(0x1fd)+'WARZ-'+'BEGIN'+_0x434d03(0x326),'YLSWI':function(_0x71bc36,_0x1f020c){return _0x71bc36+_0x1f020c;},'jBRNZ':_0x434d03(0x1f6)+'ge','fCRTB':_0x434d03(0x3e3)+_0x434d03(0x2d4)+_0x434d03(0x291)+_0x434d03(0x1b9)+'\x20ACTI'+'VE','Puhgo':_0x434d03(0x487)+_0x434d03(0x1de),'DJnfh':'FPSco'+'ntrol'+'ler','HfmQw':'GG_Ga'+'meMan'+'ager','VfWrd':'ch.sy'+'cofor'+_0x434d03(0x1e5)+_0x434d03(0x37d)+'ll','PjgIj':_0x434d03(0x1fb)+'loCha'+'racte'+'rCont'+_0x434d03(0x153)+_0x434d03(0x2e6),'bLkns':'obfB','GLCFs':_0x434d03(0x308)+'ntent'+'Loade'+'d'};var _0x40c2d0=location['hostn'+'ame']||'',_0x10c5ce=/(^|\.)www\.crazygames\.com$/[_0x434d03(0x1dd)](_0x40c2d0),_0x30efa8=/(^|\.)games\.crazygames\.com$/[_0x434d03(0x1dd)](_0x40c2d0),_0x423ccc=/(^|\.)crazygames\.com$/[_0x434d03(0x1dd)](_0x40c2d0)&&!_0x10c5ce&&!_0x30efa8,_0x331bc3=_0x10c5ce?_0x434d03(0x301)+'l':_0x30efa8?_0x4581b1['EfaEV']:_0x4581b1['ZPGem'];if(!_0x10c5ce&&!_0x30efa8&&!_0x423ccc)return;var _0x262573='#ff8f'+'b1',_0x598263='__sak'+'ura_s'+_0x434d03(0x33f),_0xd571d4=_0x4581b1[_0x434d03(0x1af)],_0x9d52d0='===SA'+_0x434d03(0x496)+_0x434d03(0x1fd)+'WARZ-'+_0x434d03(0x170)+'=';if(_0x30efa8){window[_0x434d03(0x2af)+_0x434d03(0x1b5)+'stene'+'r'](_0x434d03(0x1f6)+'ge',function(_0x190d60){var _0x50da11=_0x434d03,_0x2c4219=_0x190d60[_0x50da11(0x4ef)];if(!_0x2c4219||_0x2c4219[_0x50da11(0x187)+_0x50da11(0x329)]!==_0x598263)return;try{if(window['paren'+'t']&&window[_0x50da11(0x406)+'t']!==window)window['paren'+'t'][_0x50da11(0x2ee)+'essag'+'e'](_0x2c4219,'*');if(window['top']&&window['top']!==window)window['top'][_0x50da11(0x2ee)+'essag'+'e'](_0x2c4219,'*');}catch(_0x5d3116){}}),console[_0x434d03(0x40a)](_0x434d03(0x3e3)+_0x434d03(0x2d4)+_0x434d03(0x4f9)+_0x434d03(0x2b9)+_0x434d03(0x191)+'IVE\x20('+'relay'+'\x20only'+')',_0x4581b1['YLSWI'](_0x4581b1['GTush'],_0x262573));return;}if(_0x10c5ce){console['log']('%c[sa'+_0x434d03(0x2d4)+_0x434d03(0x4b3)+_0x434d03(0x2c4)+'TIVE',_0x4581b1[_0x434d03(0x3da)]('color'+':',_0x262573)+(_0x434d03(0x40d)+_0x434d03(0x126)+_0x434d03(0x115)+'0'),{'host':_0x40c2d0});var _0x1881ee={'set':function(){},'command':function(){}};function _0x21285f(_0x44c8e1,_0x2d4f00){var _0x305faa=_0x434d03,_0x532312={'JXNvf':function(_0x5dd19e,_0x32e5a7){return _0x4581b1['vbtLS'](_0x5dd19e,_0x32e5a7);}},_0x3eec10={'__sakura':_0x598263,'kind':_0x4581b1[_0x305faa(0x4ed)],'cmd':_0x44c8e1,'arg':_0x2d4f00};try{if(_0x4581b1[_0x305faa(0x39f)](_0x4581b1[_0x305faa(0x455)],_0x4581b1['vjRcH'])){var _0x44375b=new BroadcastChannel(_0x305faa(0x487)+_0x305faa(0x1de));_0x44375b[_0x305faa(0x2ee)+_0x305faa(0x388)+'e'](_0x3eec10),setTimeout(function(){var _0x4b7bb7=_0x305faa;try{if(_0x4b7bb7(0x17a)!==_0x4b7bb7(0x17a)){var _0x10c244=0x1*0x1e7+-0x8cb+0x6e4;for(var _0x4255a1=0x1*0xa5d+0x26d6+-0xb*0x479;_0x532312[_0x4b7bb7(0x1fe)](_0x4255a1,_0x16481a[_0x4b7bb7(0x476)+'h']);_0x4255a1++){if(_0x2beff9[_0x4255a1][_0x4b7bb7(0x2ec)]&&_0x253eec[_0x4255a1][_0x4b7bb7(0x2ec)][_0x4b7bb7(0x312)+'ed'])_0x10c244++;}return _0x10c244;}else _0x44375b[_0x4b7bb7(0x45b)]();}catch(_0x2f5a81){}},-0x22f8*0x1+-0x2574+0x24b3*0x2);}else return _0x201027['sourc'+'e']=_0x305faa(0x2f4)+_0x305faa(0x3ce)+_0x305faa(0x278)+_0x305faa(0x25f)+'e',_0x56d47c[_0x305faa(0x3cb)];}catch(_0x375370){}}function _0x522935(){var _0x5f058e=_0x434d03;if(_0x4581b1[_0x5f058e(0x4b9)]!==_0x5f058e(0x23a))_0x416ec9['warni'+'ngs'][_0x5f058e(0x318)](_0x4581b1['xslxv']);else{var _0x1baf98=document['getEl'+'ement'+_0x5f058e(0x357)](_0x4581b1['SgmSh']);if(_0x1baf98)return _0x1baf98;if(!document[_0x5f058e(0x230)]||!document['body'][_0x5f058e(0x36a)+_0x5f058e(0x4d3)+'d'])return null;try{var _0x3cf788=_0x4581b1['JOAYb']['split']('|'),_0x56dd3b=0x1*0xfbf+0x1c9b+0x656*-0x7;while(!![]){switch(_0x3cf788[_0x56dd3b++]){case'0':_0x1baf98['id']=_0x4581b1['SgmSh'];continue;case'1':_0x1baf98=document[_0x5f058e(0x1ce)+'eElem'+'ent']('div');continue;case'2':return _0x1baf98;case'3':document[_0x5f058e(0x230)]['appen'+'dChil'+'d'](_0x1baf98);continue;case'4':if(!document['getEl'+_0x5f058e(0x353)+_0x5f058e(0x357)](_0x5f058e(0x487)+_0x5f058e(0x40b)+'v2-cs'+'s')){var _0x5da4a6=document[_0x5f058e(0x1ce)+'eElem'+_0x5f058e(0x1d9)](_0x5f058e(0x2ae));_0x5da4a6['id']='sakur'+'a-sw-'+_0x5f058e(0x3b0)+'s',_0x5da4a6[_0x5f058e(0x19c)+'onten'+'t']='#saku'+'ra-sw'+'-v2{a'+'ll:in'+_0x5f058e(0x24c)+'}',(document[_0x5f058e(0x26b)]||document[_0x5f058e(0x382)+'entEl'+_0x5f058e(0x353)])[_0x5f058e(0x36a)+_0x5f058e(0x4d3)+'d'](_0x5da4a6);}continue;}break;}}catch(_0x209749){return null;}}}function _0x294aa2(){var _0x1dd62f=_0x434d03,_0x1f596f=_0x4581b1[_0x1dd62f(0x3bb)](_0x522935);if(!_0x1f596f)return _0x1881ee;if(_0x1f596f[_0x1dd62f(0x2ce)+'et'][_0x1dd62f(0x237)])return _0x1f596f['api'];try{return _0x4581b1['IYpLT'](_0x452f5a,_0x1f596f);}catch(_0x2b980d){return _0x1f596f[_0x1dd62f(0x2ce)+'et'][_0x1dd62f(0x237)]='1',_0x1f596f[_0x1dd62f(0x237)]=_0x1881ee,console['warn']('%c[sa'+'kura]'+'\x20pane'+'l\x20dis'+_0x1dd62f(0x38b),_0x1dd62f(0x28b)+':'+_0x262573,_0x2b980d),_0x1881ee;}}function _0x452f5a(_0x3fd9b3){var _0x1a371c=_0x434d03,_0x3b9394={'utQET':function(_0x5a7f14){return _0x5a7f14();},'nAwvv':'dLaZp','lDLcl':_0x4581b1[_0x1a371c(0x14d)],'HDfUa':_0x4581b1['QPVBv'],'NIBos':function(_0x55c8cc,_0x16a0bd){return _0x55c8cc===_0x16a0bd;},'OOQxo':_0x4581b1[_0x1a371c(0x2be)],'RcpZF':_0x1a371c(0x3fe)+_0x1a371c(0x3aa),'IVyAw':_0x1a371c(0x268)+_0x1a371c(0x44b),'QuslH':_0x1a371c(0x268)+_0x1a371c(0x175)+_0x1a371c(0x4d0)+_0x1a371c(0x197),'aSxLz':function(_0x547cff,_0x155999){var _0xc514b7=_0x1a371c;return _0x4581b1[_0xc514b7(0x2a9)](_0x547cff,_0x155999);},'KGzaw':'NsUQD','rjIoI':function(_0x2afdb2,_0x442705){return _0x2afdb2+_0x442705;},'UjSry':_0x1a371c(0x48b)+'cts\x20·'+'\x20','GEPao':_0x4581b1[_0x1a371c(0x1a1)],'UHzVk':function(_0x21700e,_0x228ead){var _0x2bf0df=_0x1a371c;return _0x4581b1[_0x2bf0df(0x361)](_0x21700e,_0x228ead);},'utHcH':_0x1a371c(0x13d)+'\x20arme'+'d\x20·\x20','tXNul':_0x4581b1['kNVWY'],'bnjFj':'armed'+_0x1a371c(0x479),'NzQaq':_0x1a371c(0x4a3)+_0x1a371c(0x17d),'rAzDd':function(_0x2cab24,_0x353d34){return _0x4581b1['OejoA'](_0x2cab24,_0x353d34);},'zaRfv':_0x1a371c(0x152)+_0x1a371c(0x447)+'apsho'+_0x1a371c(0x404),'yIadx':_0x4581b1[_0x1a371c(0x469)],'DkSLo':'color'+':','iGGjN':_0x1a371c(0x40d)+'-weig'+_0x1a371c(0x115)+'0'};_0x3fd9b3['style'][_0x1a371c(0x42b)+'xt']=_0x4581b1[_0x1a371c(0x380)](_0x1a371c(0x1ea)+_0x1a371c(0x181)+_0x1a371c(0x379)+_0x1a371c(0x473)+_0x1a371c(0x12c)+_0x1a371c(0x261)+'2px;z'+_0x1a371c(0x307)+_0x1a371c(0x323)+'74830'+'00;wi'+_0x1a371c(0x2dc)+_0x1a371c(0x26c)+_0x1a371c(0x2d1)+'0px);'+_0x1a371c(0x297)+'eight'+_0x1a371c(0x46f)+';'+('backg'+_0x1a371c(0x1b0)+_0x1a371c(0x136)+'c1d;c'+_0x1a371c(0x3ef)+'#f7ee'+_0x1a371c(0x2fa)+_0x1a371c(0x25a)+_0x1a371c(0x160)+_0x1a371c(0x182)+_0x1a371c(0x13c)+_0x1a371c(0x305)+'43,17'+_0x1a371c(0x45e)+_0x1a371c(0x32d)+_0x1a371c(0x13e)+_0x1a371c(0x3ba)+_0x1a371c(0x142))+_0x4581b1['abzJu'],_0x4581b1[_0x1a371c(0x3dc)]),_0x3fd9b3[_0x1a371c(0x3d4)+_0x1a371c(0x427)]=_0x4581b1[_0x1a371c(0x3f6)](_0x4581b1[_0x1a371c(0x25c)](_0x4581b1['OejoA'](_0x4581b1[_0x1a371c(0x186)](_0x4581b1['fGodh'](_0x4581b1[_0x1a371c(0x3f6)](_0x4581b1[_0x1a371c(0x25c)](_0x4581b1['VSzbY']+('<b\x20st'+'yle=\x22'+_0x1a371c(0x28b)+':'),_0x262573),_0x1a371c(0x25e)+'ura\x20·'+'\x20skil'+'lwarz'+_0x1a371c(0x287))+_0x4581b1[_0x1a371c(0x138)],_0x4581b1[_0x1a371c(0x32b)])+_0x262573+(';bord'+'er:0;'+'color'+':#2a0'+_0x1a371c(0x209)+_0x1a371c(0x402)+'-radi'+_0x1a371c(0x292)+_0x1a371c(0x306)+_0x1a371c(0x228)+_0x1a371c(0x4c5)+_0x1a371c(0x13b)+_0x1a371c(0x3eb)+_0x1a371c(0x32a)+_0x1a371c(0x47d)+'curso'+_0x1a371c(0x1cd)+_0x1a371c(0x34b)+_0x1a371c(0x4ae)+_0x1a371c(0x2e0)+'N</bu'+_0x1a371c(0x486)),_0x4581b1[_0x1a371c(0x21c)])+_0x4581b1['lsoZV'],_0x4581b1['AjLdX']),_0x1a371c(0x112)+_0x1a371c(0x1a3)+'=\x22sw2'+'-snap'+'\x22\x20sty'+'le=\x22b'+_0x1a371c(0x38f)+_0x1a371c(0x32c)+_0x1a371c(0x22e)+'paren'+'t;bor'+_0x1a371c(0x210)+'px\x20so'+'lid\x20r'+_0x1a371c(0x150)+'55,14'+'3,177'+_0x1a371c(0x4cc)+'color'+':#f7e'+'ef5;b'+_0x1a371c(0x402)+_0x1a371c(0x3bf)+_0x1a371c(0x292)+'x;pad'+'ding:'+_0x1a371c(0x43c)+_0x1a371c(0x162)+_0x1a371c(0x30a)+_0x1a371c(0x41a)+'er;\x22>'+_0x1a371c(0x2b1)+_0x1a371c(0x11b)+_0x1a371c(0x4da)+_0x1a371c(0x4e8)+'n>')+('<span'+_0x1a371c(0x172)+_0x1a371c(0x3d8)+_0x1a371c(0x4a9)+_0x1a371c(0x2ae)+'=\x22col'+_0x1a371c(0x31e)+'d7a99'+_0x1a371c(0x257)+'twice'+_0x1a371c(0x3fd)+'e\x20wal'+_0x1a371c(0x4f0)+_0x1a371c(0x145)+_0x1a371c(0x3c8)+'g\x20/\x20j'+'umpin'+_0x1a371c(0x23d)+'ks\x20wh'+_0x1a371c(0x117)+_0x1a371c(0x41b)+_0x1a371c(0x4d5)+_0x1a371c(0x3d5)+_0x1a371c(0x120)+'>'),_0x4581b1[_0x1a371c(0x251)])+_0x4581b1[_0x1a371c(0x39e)]+(_0x1a371c(0x297)+'eight'+':62vh'+_0x1a371c(0x452)+_0x1a371c(0x246)+_0x1a371c(0x374)+_0x1a371c(0x28c)+_0x1a371c(0x2f7)+_0x1a371c(0x3c7)+'updat'+'es\x20it'+_0x1a371c(0x14f)+'when\x20'+_0x1a371c(0x448)+_0x1a371c(0x1f7)+_0x1a371c(0x16c)+_0x1a371c(0x399)+_0x1a371c(0x40c)+'\x20cons'+_0x1a371c(0x434)+_0x1a371c(0x489)+_0x1a371c(0x450)+_0x1a371c(0x1ae)+'tays\x20'+'empty'+',\x20Tam'+_0x1a371c(0x15d)+_0x1a371c(0x44e)+_0x1a371c(0x17e)+_0x1a371c(0x1a0)+'ectin'+_0x1a371c(0x364)+'o\x20the'+_0x1a371c(0x139)+_0x1a371c(0x39a)+_0x1a371c(0x3a8)+_0x1a371c(0x1f7)+_0x1a371c(0x4e6)+'</pre'+'>');var _0x2ae5a9=_0x3fd9b3[_0x1a371c(0x27b)+_0x1a371c(0x132)+'tor'](_0x1a371c(0x345)+_0x1a371c(0x26e)+'s'),_0x5a7d3d=_0x3fd9b3[_0x1a371c(0x27b)+'Selec'+_0x1a371c(0x3e0)]('#sw2-'+_0x1a371c(0x4f3)),_0x299ba1=_0x3fd9b3[_0x1a371c(0x27b)+_0x1a371c(0x132)+_0x1a371c(0x3e0)](_0x4581b1[_0x1a371c(0x495)]),_0x25eb48=_0x3fd9b3[_0x1a371c(0x27b)+_0x1a371c(0x132)+'tor']('#sw2-'+'x'),_0xacd165=_0x3fd9b3['query'+_0x1a371c(0x132)+'tor'](_0x1a371c(0x345)+_0x1a371c(0x33d)),_0x42ead6=_0x3fd9b3['query'+_0x1a371c(0x132)+_0x1a371c(0x3e0)](_0x4581b1['SEnbF']),_0x5de472=null;if(_0x25eb48)_0x25eb48[_0x1a371c(0x2e5)+'ck']=function(){var _0x3e858f=_0x1a371c,_0x34e662={'xJXiH':function(_0x744b39){var _0x121c72=_0x31c3;return _0x3b9394[_0x121c72(0x3e9)](_0x744b39);},'HEZAJ':function(_0x3d95e0,_0x123345){return _0x3d95e0===_0x123345;}};if(_0x3e858f(0x3a5)!==_0x3e858f(0x3a5))_0x2115f6=_0x34e662[_0x3e858f(0x2e7)](_0x214d5c);else try{if(_0x3b9394[_0x3e858f(0x2c7)]===_0x3e858f(0x1bf))_0x3fd9b3['remov'+'e']();else{_0x2137f9[_0x333cba]={'ptr':_0x2db8ce,'firstSeen':_0x3f8501['now'](),'hits':0x0,'replaced':!!_0x10f54f};try{var _0x5f38dd=_0x3d1a94['filte'+'r'](function(_0x2194d4){var _0x19de32=_0x3e858f;return _0x34e662[_0x19de32(0x490)](_0x2194d4[_0x19de32(0x11d)],_0x1b99d0);})[0xe69+-0x24f*0x1+-0x60d*0x2];_0x1ba5da={'type':_0x4efe84,'atMs':_0x58e2b9[_0x3e858f(0x20f)]()-_0x117099,'originalFunc':!!(_0x5f38dd&&_0x5f38dd['hook']&&typeof _0x5f38dd['hook']['origi'+'nalFu'+'nc']===_0x3e858f(0x335)+_0x3e858f(0x2df)),'resolveGameAtFire':!!_0x1affce(),'gameSourceAtFire':_0x130d01[_0x3e858f(0x43e)+'e']};}catch(_0x1cdb8d){}}}catch(_0x2f0fb4){}};if(_0xacd165)_0xacd165[_0x1a371c(0x2e5)+'ck']=function(){var _0x28f402=_0x1a371c;_0x3b9394[_0x28f402(0x284)]!==_0x28f402(0x35a)?_0x3e83bb['error']=_0x2949b6(_0xc55f1f&&_0xd89a26['messa'+'ge']||_0x103b8e):_0x21285f(_0x3b9394[_0x28f402(0x3ea)]);};if(_0x299ba1)_0x299ba1[_0x1a371c(0x2e5)+'ck']=function(){var _0x588caf=_0x1a371c,_0x245864={'GZacI':function(_0x4b77f0,_0x2b65ff,_0x387640){return _0x4b77f0(_0x2b65ff,_0x387640);}},_0x2f741a=_0x4581b1[_0x588caf(0x3da)](_0x4581b1[_0x588caf(0x3da)](_0xd571d4+'\x0a',_0x5de472?JSON['strin'+_0x588caf(0x491)](_0x5de472,null,-0x5ea*0x4+-0x122f+0x29d8):''),'\x0a')+_0x9d52d0,_0x18c723=function(){var _0x239c77=_0x588caf;if(_0x299ba1)_0x299ba1[_0x239c77(0x19c)+'onten'+'t']='Copie'+'d';};if(navigator[_0x588caf(0x481)+_0x588caf(0x24a)]&&navigator['clipb'+'oard']['write'+_0x588caf(0x20a)])navigator[_0x588caf(0x481)+'oard'][_0x588caf(0x4e7)+_0x588caf(0x20a)](_0x2f741a)[_0x588caf(0x2e2)](_0x18c723,function(){_0x53bc65();});else _0x4581b1['CAtTX'](_0x53bc65);function _0x53bc65(){var _0x5b68e6=_0x588caf,_0x123383=document['creat'+'eElem'+'ent']('texta'+'rea');_0x123383[_0x5b68e6(0x4a8)]=_0x2f741a;if(!document[_0x5b68e6(0x230)])return;document[_0x5b68e6(0x230)][_0x5b68e6(0x36a)+_0x5b68e6(0x4d3)+'d'](_0x123383),_0x123383['selec'+'t']();try{if(_0x3b9394['NIBos'](_0x3b9394[_0x5b68e6(0x129)],_0x5b68e6(0x34e))){var _0x1864db=new _0x29f87d(_0x5b68e6(0x487)+'a-sw');_0x1864db[_0x5b68e6(0x2ee)+_0x5b68e6(0x388)+'e'](_0x1af8b1),_0x245864[_0x5b68e6(0x4c0)](_0x2d86f3,function(){var _0x59ddd0=_0x5b68e6;try{_0x1864db[_0x59ddd0(0x45b)]();}catch(_0x2127f2){}},-0x1*0x36d+-0x241*0x5+0xfac);}else document[_0x5b68e6(0x4be)+_0x5b68e6(0x319)+'d']('copy'),_0x18c723();}catch(_0xaee5aa){}_0x123383['remov'+'e']();}};setTimeout(function(){var _0x5b5530=_0x1a371c;if(_0x5de472)return;if(!_0x2ae5a9||!_0x5a7d3d)return;_0x2ae5a9[_0x5b5530(0x19c)+'onten'+'t']=_0x4581b1[_0x5b5530(0x389)],_0x2ae5a9['style']['color']=_0x4581b1[_0x5b5530(0x302)],_0x5a7d3d[_0x5b5530(0x19c)+_0x5b5530(0x198)+'t']=_0x4581b1['uBoiJ'](_0x4581b1['uBoiJ'](_0x4581b1['Ldobi']+_0x4581b1['bqIzm']+_0x4581b1['YLzke']+('\x20\x201.\x20'+'Tampe'+'rmonk'+_0x5b5530(0x344)+'\x20not\x20'+_0x5b5530(0x23b)+_0x5b5530(0x346)+'into\x20'+'the\x20c'+'ross-'+'origi'+'n\x20ifr'+_0x5b5530(0x21b)),_0x4581b1[_0x5b5530(0x478)])+('\x20\x203.\x20'+'Both\x20'+_0x5b5530(0x487)+'a.ski'+'llwar'+_0x5b5530(0x165)+'r.js\x20'+'AND\x20t'+'he\x20ol'+'d\x20dia'+'g\x20scr'+'ipt\x20a'+_0x5b5530(0x2f6))+(_0x5b5530(0x22c)+'insta'+'lled\x20'+'—\x20two'+'\x20copi'+'es\x20of'+'\x20UWMK'+_0x5b5530(0x358)+_0x5b5530(0x360)+_0x5b5530(0x36b)+_0x5b5530(0x2dd)+'bly.i'+'nstan'+'tiate'+'.\x0a\x0a'),_0x5b5530(0x14c)+'d\x20the'+_0x5b5530(0x408)+'\x20page'+_0x5b5530(0x3c3)+'\x20and\x20'+'watch'+_0x5b5530(0x15f)+_0x5b5530(0x42f)+_0x5b5530(0x449)+_0x5b5530(0x192));},-0x1b524+0x6eea+0x2309a);var _0x20b375={'set':function(_0x491c50){var _0x39c6e4=_0x1a371c;_0x5de472=_0x491c50;if(_0x299ba1)_0x299ba1[_0x39c6e4(0x2ae)]['displ'+'ay']='';var _0x269fd2=_0x491c50['insta'+_0x39c6e4(0x475)]&&_0x491c50[_0x39c6e4(0x28d)+_0x39c6e4(0x475)]['FPSco'+_0x39c6e4(0x1aa)+_0x39c6e4(0x4b7)],_0x38457e=Math['round']((_0x491c50[_0x39c6e4(0x39c)+'edMs']||0x2418+-0x256d+0x1f*0xb)/(-0x39*0x13+-0x236b+0x2b8e));if(_0x2ae5a9){if(_0x3b9394[_0x39c6e4(0x274)](_0x3b9394[_0x39c6e4(0x411)],_0x39c6e4(0x18d))){var _0x51a615=(_0x39c6e4(0x4ba)+'|5|6|'+_0x39c6e4(0x3de))['split']('|'),_0x424f4c=0x16ed+0x52*-0x45+-0xd3;while(!![]){switch(_0x51a615[_0x424f4c++]){case'0':return _0x2a166d;case'1':_0x2a166d[_0x39c6e4(0x4a8)+_0x39c6e4(0x4eb)+'er']=typeof _0x3bda05;continue;case'2':for(var _0x4799d4=-0x18d*0x11+-0x392+0x1def*0x1;_0x4799d4<_0x1d291b[_0x39c6e4(0x476)+'h'];_0x4799d4++){var _0x9212f9=_0x1d291b[_0x4799d4],_0x2feb2e=typeof _0x623fe9[_0x9212f9];_0x2a166d[_0x9212f9]=_0x3b9394[_0x39c6e4(0x1c5)](_0x2feb2e,'undef'+_0x39c6e4(0x3aa))?_0x3b9394['RcpZF']:_0x2feb2e;}continue;case'3':try{_0x2a166d[_0x39c6e4(0x38a)+'dule']=!!(_0x1d83e1&&_0x1d83e1[_0x39c6e4(0x1a4)+'e']),_0x2a166d['heapU'+'8']=!!(_0x1d83e1&&_0x1d83e1['Modul'+'e']&&_0x1d83e1['Modul'+'e'][_0x39c6e4(0x1f5)+'8']),_0x2a166d[_0x39c6e4(0x317)+_0x39c6e4(0x410)]=_0x2a166d[_0x39c6e4(0x289)+'8']?_0x1d83e1['Modul'+'e'][_0x39c6e4(0x1f5)+'8']['lengt'+'h']:-0x2*-0x17a+-0x707+0x413;}catch(_0x51ef7d){_0x2a166d['hasMo'+'dule']=![],_0x2a166d['heapU'+'8']=![],_0x2a166d[_0x39c6e4(0x317)+'ytes']=0xd98+-0xf1*0xd+-0x15b*0x1;}continue;case'4':var _0x1d291b=['unity'+'Insta'+'nce',_0x3b9394[_0x39c6e4(0x36f)],_0x39c6e4(0x2e9),_0x3b9394[_0x39c6e4(0x108)]];continue;case'5':var _0x1d83e1=_0x3b9394['utQET'](_0x2ec551);continue;case'6':_0x2a166d[_0x39c6e4(0x4ab)+_0x39c6e4(0x41f)]=_0x3eeec9['sourc'+'e'];continue;case'7':var _0x2a166d={};continue;}break;}}else{var _0x1fca16,_0x332305;if(_0x269fd2&&_0x491c50[_0x39c6e4(0x480)+'y']&&_0x491c50[_0x39c6e4(0x480)+'y']['FPSco'+_0x39c6e4(0x1aa)+_0x39c6e4(0x4b7)])_0x1fca16=_0x3b9394['rjIoI']('LIVE\x20'+'·\x20'+Object['keys'](_0x491c50['insta'+'nces'])[_0x39c6e4(0x476)+'h']+_0x3b9394[_0x39c6e4(0x280)],_0x38457e)+'s',_0x332305=_0x3b9394[_0x39c6e4(0x4e4)];else{if(_0x3b9394['UHzVk'](_0x491c50[_0x39c6e4(0x13d)+'Appli'+'ed'],-0x1b46+-0x12e3+0x2e29)){if(_0x39c6e4(0x27f)===_0x39c6e4(0x3ac)){_0x9c6985['ok']++;switch(_0x370792){case'u8':return _0x1be54c['getUi'+_0x39c6e4(0x21d)](_0x48e31e);case'i8':return _0x52bd2f['getIn'+'t8'](_0x4d782b);case _0x39c6e4(0x2c6):return _0x476715['getIn'+_0x39c6e4(0x4a7)](_0x1a1408,!![]);case'u16':return _0x4004a0[_0x39c6e4(0x4f7)+_0x39c6e4(0x25b)](_0x28141b,!![]);case _0x39c6e4(0x4d4):return _0x2dd543['getIn'+'t32'](_0x4bfa0a,!![]);case _0x39c6e4(0x416):return _0x338697[_0x39c6e4(0x4f7)+'nt32'](_0x258880,!![]);case'f32':return _0x4f07df[_0x39c6e4(0x2b4)+_0x39c6e4(0x253)](_0x320ce5,!![]);case _0x39c6e4(0x1e9):return _0xee6608[_0x39c6e4(0x2b4)+'oat64'](_0x531074,!![]);default:return _0x6140dd[_0x39c6e4(0x373)+_0x39c6e4(0x12b)](_0x19b451,!![]);}}else _0x1fca16=_0x3b9394[_0x39c6e4(0x338)](_0x3b9394['utHcH']+_0x38457e,'s'),_0x332305=_0x39c6e4(0x220)+'8a';}else _0x491c50['scrip'+_0x39c6e4(0x468)]?(_0x1fca16=_0x3b9394[_0x39c6e4(0x190)]+_0x38457e+'s',_0x332305=_0x39c6e4(0x220)+'8a'):(_0x1fca16=_0x3b9394[_0x39c6e4(0x338)]((_0x491c50[_0x39c6e4(0x119)]&&_0x491c50[_0x39c6e4(0x119)]['ok']?_0x3b9394[_0x39c6e4(0x235)]:_0x3b9394['NzQaq'])+_0x38457e,'s'),_0x332305=_0x39c6e4(0x220)+'8a');}_0x2ae5a9[_0x39c6e4(0x19c)+_0x39c6e4(0x198)+'t']=_0x1fca16,_0x2ae5a9[_0x39c6e4(0x2ae)][_0x39c6e4(0x28b)]=_0x332305;}}_0x42ead6&&(_0x42ead6[_0x39c6e4(0x19c)+_0x39c6e4(0x198)+'t']=_0x491c50['diff']&&_0x491c50[_0x39c6e4(0x4ad)][_0x39c6e4(0x476)+'h']?_0x3b9394['rAzDd'](_0x3b9394[_0x39c6e4(0x255)],_0x491c50['diff']['join'](',\x20')):'F9\x20tw'+'ice\x20w'+'hile\x20'+_0x39c6e4(0x4fd)+_0x39c6e4(0x467)+'sprin'+'ting\x20'+_0x39c6e4(0x2ff)+_0x39c6e4(0x114)+'marks'+_0x39c6e4(0x33c)+_0x39c6e4(0x2a2)+'ld\x20is'+'\x20whic'+'h.');if(_0x5a7d3d)try{_0x5a7d3d[_0x39c6e4(0x19c)+_0x39c6e4(0x198)+'t']=_0x26ca46(_0x491c50);}catch(_0x510aec){_0x5a7d3d[_0x39c6e4(0x19c)+_0x39c6e4(0x198)+'t']=JSON[_0x39c6e4(0x36e)+'gify'](_0x491c50,null,0x169b+0x3*0x699+-0x2a65);}console['log'](_0x3b9394['yIadx'],_0x3b9394[_0x39c6e4(0x2f9)](_0x3b9394['DkSLo'],_0x262573)+_0x3b9394[_0x39c6e4(0x368)],_0x491c50),console[_0x39c6e4(0x40a)](_0xd571d4+'\x0a'+JSON[_0x39c6e4(0x36e)+_0x39c6e4(0x491)](_0x491c50,null,-0x1d8e+-0x2*-0xf88+-0x37*0x7)+'\x0a'+_0x9d52d0);}};return _0x3fd9b3[_0x1a371c(0x2ce)+'et']['api']='1',_0x3fd9b3['api']=_0x20b375,_0x20b375;}function _0x26ca46(_0x32f127){var _0x266c89=_0x434d03,_0x21c52f={'vqQUR':'warni'+_0x266c89(0x4b5),'vtBmg':function(_0x5ebfbc,_0x475946){var _0x230683=_0x266c89;return _0x4581b1[_0x230683(0x1f1)](_0x5ebfbc,_0x475946);},'kznUk':function(_0x8c6b9b,_0x563ec9){return _0x8c6b9b+_0x563ec9;}},_0x223c74=[];_0x223c74['push']('frame'+_0x266c89(0x433)+(_0x32f127['host']||'?')+_0x4581b1[_0x266c89(0x17b)]+Math[_0x266c89(0x1b0)]((_0x32f127['elaps'+_0x266c89(0x2f8)]||0x4a9*-0x2+0x1c*0x16+0x6ea)/(-0x109e+-0xfea+-0x1*-0x2470))+'s)'),_0x223c74['push'](_0x4581b1[_0x266c89(0x303)](_0x4581b1[_0x266c89(0x380)](_0x4581b1[_0x266c89(0x38c)](_0x4581b1[_0x266c89(0x3da)]('uwmk\x20'+_0x266c89(0x433),_0x32f127[_0x266c89(0x497)]?_0x266c89(0x273):'no'),_0x266c89(0x169)+_0x266c89(0x214)+'\x20'),_0x32f127[_0x266c89(0x1c6)+_0x266c89(0x474)+'ext']?'yes':'no'),'\x20\x20\x20ty'+'pes\x20')+(_0x4581b1[_0x266c89(0x3f5)](_0x32f127[_0x266c89(0x3d7)+_0x266c89(0x47e)],null)?_0x32f127['typeC'+'ount']:'?')),_0x223c74['push'](_0x4581b1['hGWaE'](_0x4581b1['eiIJx'](_0x4581b1[_0x266c89(0x39b)],_0x32f127[_0x266c89(0x13d)+_0x266c89(0x262)+'ed']),'/')+_0x32f127[_0x266c89(0x13d)+'Total']+(_0x266c89(0x207)+'ied')),_0x223c74['push']('');var _0x34fc7a=_0x32f127['insta'+_0x266c89(0x475)]||{},_0x1daac4=Object[_0x266c89(0x4fa)](_0x34fc7a);!_0x1daac4[_0x266c89(0x476)+'h']&&(_0x223c74[_0x266c89(0x318)](_0x4581b1[_0x266c89(0x2aa)]),_0x223c74[_0x266c89(0x318)](''),_0x223c74['push'](_0x4581b1[_0x266c89(0x1c2)]),_0x223c74['push'](_0x266c89(0x213)+'date\x20'+'ran\x20y'+_0x266c89(0x3e1)+'r\x20the'+_0x266c89(0x163)+_0x266c89(0x2cc)+_0x266c89(0x32e)+_0x266c89(0x47a)+_0x266c89(0x4b8)));for(var _0x355074=0x1d26+-0x966*-0x1+-0x268c;_0x4581b1['vbtLS'](_0x355074,_0x1daac4['lengt'+'h']);_0x355074++){var _0x48f74b=_0x1daac4[_0x355074];_0x223c74[_0x266c89(0x318)](_0x4581b1[_0x266c89(0x3da)](_0x4581b1['oMqOs'](_0x48f74b,_0x4581b1['yhhUg']),_0x34fc7a[_0x48f74b]));}_0x223c74['push']('');var _0x5b5153=_0x32f127[_0x266c89(0x480)+'y']||{},_0x2ed46a=Object['keys'](_0x5b5153);for(var _0x5837f4=0x2691+-0x1fb5+-0x6dc;_0x4581b1['OmQYI'](_0x5837f4,_0x2ed46a[_0x266c89(0x476)+'h']);_0x5837f4++){var _0x57dd64=_0x2ed46a[_0x5837f4],_0x49bc31=_0x5b5153[_0x57dd64];if(!_0x49bc31||!_0x49bc31['lengt'+'h'])continue;_0x223c74[_0x266c89(0x318)](_0x4581b1[_0x266c89(0x3fc)](_0x4581b1[_0x266c89(0x3a4)],_0x57dd64)+'\x20'+new Array(Math['max'](0x1659+-0x13*-0x3e+-0x1*0x1af2,-0x1d5d+0x148+0xe9*0x1f-_0x57dd64[_0x266c89(0x476)+'h']))['join']('─')),_0x223c74['push'](_0x266c89(0x46c)+_0x266c89(0x429)+_0x266c89(0x3d1)+_0x266c89(0x22c)+'\x20\x20\x20va'+_0x266c89(0x244)+'\x20\x20\x20\x20\x20'+_0x266c89(0x22c)+_0x266c89(0x300));for(var _0x201559=0x43*-0x89+-0x2b3+-0xe*-0x2c1;_0x201559<_0x49bc31[_0x266c89(0x476)+'h'];_0x201559++){if(_0x266c89(0x2e4)!==_0x266c89(0x2e4)){_0x4bce9f[_0x266c89(0x318)](_0x21c52f['vqQUR']);for(var _0x153508=0x136b+0x1*-0x26b8+0x134d;_0x21c52f['vtBmg'](_0x153508,_0x2d3f41['warni'+'ngs'][_0x266c89(0x476)+'h']);_0x153508++)_0x4c6933[_0x266c89(0x318)](_0x21c52f['kznUk']('\x20\x20!\x20',_0x2885ef[_0x266c89(0x2d0)+'ngs'][_0x153508]));}else{var _0x1f6502=_0x49bc31[_0x201559],_0x1961f8=typeof _0x1f6502['v']===_0x4581b1['FtCVZ']?Math['round'](_0x1f6502['v']*(0xb*-0xa3+0x1ff2+-0x167*0xf))/(0xb*0x107+-0x1*0x1c34+0x14cf):_0x1f6502['v'];_0x223c74[_0x266c89(0x318)](_0x4581b1[_0x266c89(0x38c)](_0x4581b1['uBoiJ'](_0x4581b1['PdURV']('\x20\x20'+('0x'+_0x1f6502['o']['toStr'+_0x266c89(0x19e)](0x1de*0x8+0x16*-0xf+-0x2f*0x4a))['padEn'+'d'](0x155f+-0x3*-0x2ef+0x283*-0xc),'\x20')+_0x1f6502['k'][_0x266c89(0x43a)+'d'](0xe44*0x2+-0xb28+-0x1155),'\x20')+String(_0x1961f8)[_0x266c89(0x43a)+'d'](0x1e62+0x1*0x202f+-0x3e81),'\x20')+(_0x1f6502['raw']||''));}}_0x223c74[_0x266c89(0x318)]('');}if(_0x32f127[_0x266c89(0x2d0)+_0x266c89(0x4b5)]&&_0x32f127[_0x266c89(0x2d0)+_0x266c89(0x4b5)][_0x266c89(0x476)+'h']){_0x223c74[_0x266c89(0x318)](_0x4581b1['fYHXu']);for(var _0x17c91e=0xb27+0x1*0x1d09+0x1418*-0x2;_0x4581b1[_0x266c89(0x310)](_0x17c91e,_0x32f127[_0x266c89(0x2d0)+_0x266c89(0x4b5)]['lengt'+'h']);_0x17c91e++)_0x223c74[_0x266c89(0x318)](_0x4581b1[_0x266c89(0x38c)](_0x4581b1['IeFMG'],_0x32f127[_0x266c89(0x2d0)+'ngs'][_0x17c91e]));}return _0x223c74[_0x266c89(0x271)]('\x0a');}window['addEv'+'entLi'+_0x434d03(0x33b)+'r'](_0x4581b1['jBRNZ'],function(_0x58a115){var _0x1b8499=_0x434d03,_0x260370=_0x58a115['data'];if(!_0x260370||_0x4581b1[_0x1b8499(0x216)](_0x260370[_0x1b8499(0x187)+'ura'],_0x598263))return;try{if(_0x4581b1['TOZDW'](_0x260370[_0x1b8499(0x3b4)],_0x1b8499(0x354))){_0x4581b1[_0x1b8499(0x3bb)](_0x294aa2)['set']({'host':_0x260370['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x260370['kind']===_0x4581b1['wcgag'])_0x294aa2()[_0x1b8499(0x219)](_0x260370[_0x1b8499(0x241)+'t']);}catch(_0xb97c01){console[_0x1b8499(0x1c8)](_0x1b8499(0x3e3)+'kura]'+'\x20pane'+_0x1b8499(0x4e5)+_0x1b8499(0x304)+_0x1b8499(0x1c7),_0x1b8499(0x28b)+':'+_0x262573,_0xb97c01);}});if(document[_0x434d03(0x230)])_0x4581b1['cHBhr'](_0x294aa2);else document[_0x434d03(0x2af)+_0x434d03(0x1b5)+_0x434d03(0x33b)+'r'](_0x434d03(0x308)+'ntent'+_0x434d03(0x4bd)+'d',_0x294aa2,{'once':!![]});return;}window['__SAK'+'URA_S'+'W__']=window[_0x434d03(0x233)+'URA_S'+_0x434d03(0x4fc)]||{'at':Date[_0x434d03(0x20f)]()};function _0x2aad18(_0x4e4304,_0x1a3576){var _0x336e18=_0x434d03,_0x30ae10={'DggWr':function(_0x1e35de,_0x5de69d){var _0x399dcf=_0x31c3;return _0x4581b1[_0x399dcf(0x3c5)](_0x1e35de,_0x5de69d);}};if(_0x4581b1['TOZDW'](_0x4581b1[_0x336e18(0x3be)],'QYqfb')){if(!_0x4fdebb||!_0x45ad31)return null;var _0x515171=new _0x55daf2(_0x2ce673)['getCl'+_0x336e18(0x43d)+'me']();return _0x30ae10[_0x336e18(0x1a8)](_0x515171,_0x15ba81)?null:_0x515171;}else{var _0x4bf8cd={'__sakura':_0x598263,'kind':_0x4e4304};if(_0x1a3576){for(var _0x54e8c0 in _0x1a3576)_0x4bf8cd[_0x54e8c0]=_0x1a3576[_0x54e8c0];}try{if(window['paren'+'t']&&window[_0x336e18(0x406)+'t']!==window)window['paren'+'t']['postM'+_0x336e18(0x388)+'e'](_0x4bf8cd,'*');}catch(_0x13f158){}try{if(window[_0x336e18(0x195)]&&_0x4581b1[_0x336e18(0x277)](window['top'],window))window[_0x336e18(0x195)]['postM'+'essag'+'e'](_0x4bf8cd,'*');}catch(_0x233173){}}}console[_0x434d03(0x40a)](_0x4581b1[_0x434d03(0x23e)],_0x4581b1['pnRCa']('color'+':',_0x262573)+(';font'+'-weig'+_0x434d03(0x115)+'0'),{'host':_0x40c2d0,'href':location['href']}),_0x2aad18('hello',{'host':_0x40c2d0,'role':_0x331bc3});var _0x4b5b08=window[_0x434d03(0x233)+_0x434d03(0x2ab)+_0x434d03(0x4fc)]&&window['__SAK'+'URA_S'+_0x434d03(0x4fc)]['at']||Date[_0x434d03(0x20f)]();try{var _0x525b6e=new BroadcastChannel(_0x4581b1[_0x434d03(0x221)]);_0x525b6e[_0x434d03(0x24f)+'sage']=function(_0xa1b376){var _0x7c8221=_0x434d03;if(_0x7c8221(0x49f)===_0x7c8221(0x14e)){var _0x32fb11=_0x50a373['data'];if(_0x32fb11&&_0x32fb11[_0x7c8221(0x187)+'ura']===_0x1c1ca8&&_0x32fb11[_0x7c8221(0x3b4)]===_0x4581b1[_0x7c8221(0x4ed)])_0x496f85(_0x32fb11[_0x7c8221(0x28f)],_0x32fb11['arg']);}else{var _0x12c183=_0xa1b376['data'];if(_0x12c183&&_0x4581b1[_0x7c8221(0x2c1)](_0x12c183[_0x7c8221(0x187)+_0x7c8221(0x329)],_0x598263)&&_0x12c183['kind']===_0x7c8221(0x28f))_0x50e104(_0x12c183['cmd'],_0x12c183[_0x7c8221(0x400)]);}};}catch(_0x2d83a9){}var _0x149a0e=[];(function _0xa7cfd8(){var _0x2ba84b=_0x434d03,_0x73e36={'HsLCx':function(_0x44fc5a,_0x82ab53){return _0x44fc5a===_0x82ab53;},'NuRKv':function(_0x5af2df,_0x284669){return _0x5af2df===_0x284669;},'droEj':function(_0x5d1773,_0x1d9ffe){return _0x5d1773+_0x1d9ffe;},'CDidU':_0x4581b1['OiKvI'],'JlhBo':function(_0x6a4df6,_0x4b2fd4){return _0x4581b1['ldbKM'](_0x6a4df6,_0x4b2fd4);},'gjUtn':function(_0x5a464a,_0x396bfe){return _0x5a464a===_0x396bfe;}};if(_0x4581b1[_0x2ba84b(0x2a9)](_0x4581b1[_0x2ba84b(0x3ad)],_0x2ba84b(0x4f6))){if(_0x73e36['HsLCx'](_0xcce3bc['kind'],'hello')){_0x6ee955()['set']({'host':_0x2082b1[_0x2ba84b(0x1cf)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x73e36[_0x2ba84b(0x2e3)](_0x460e2d['kind'],'repor'+'t'))_0x4333e0()['set'](_0x38590f[_0x2ba84b(0x241)+'t']);}else{var _0x1c8535=[_0x4581b1[_0x2ba84b(0x16a)],_0x4581b1[_0x2ba84b(0x3d2)],'error',_0x2ba84b(0x225),_0x4581b1[_0x2ba84b(0x4f5)]];for(var _0x46ed99=-0x12b6+-0x1e8e*0x1+0x3144;_0x46ed99<_0x1c8535['lengt'+'h'];_0x46ed99++){if(_0x2ba84b(0x2de)===_0x4581b1['xWasn'])(function(_0x502aed){var _0x1613d0=_0x2ba84b;if(_0x4581b1[_0x1613d0(0x48c)]===_0x1613d0(0x1d3))_0x2865a4[_0x1613d0(0x19c)+_0x1613d0(0x198)+'t']=_0x2ec6fe[_0x1613d0(0x4ad)]&&_0xb0d867[_0x1613d0(0x4ad)]['lengt'+'h']?_0x73e36[_0x1613d0(0x4c7)](_0x1613d0(0x152)+_0x1613d0(0x447)+'apsho'+'t:\x20',_0x4149cd['diff']['join'](',\x20')):_0x73e36[_0x1613d0(0x46e)];else{var _0x2a473e=console[_0x502aed];if(_0x4581b1[_0x1613d0(0x436)](typeof _0x2a473e,_0x4581b1[_0x1613d0(0x3e7)]))return;console[_0x502aed]=function(){var _0x66e8e8=_0x1613d0;try{var _0x1eb3b2='';for(var _0x1da93a=-0x1*0xe64+-0x1ffc+0x2e60;_0x1da93a<arguments['lengt'+'h'];_0x1da93a++){var _0x10fd06=arguments[_0x1da93a];if(_0x73e36[_0x66e8e8(0x1d0)](typeof _0x10fd06,'strin'+'g'))_0x1eb3b2+=_0x10fd06;else{if(_0x10fd06&&_0x10fd06[_0x66e8e8(0x1f6)+'ge'])_0x1eb3b2+=_0x10fd06['messa'+'ge'];}}if(_0x73e36[_0x66e8e8(0x322)](_0x1eb3b2['index'+'Of'](_0xd571d4),-(-0x22c8+-0x9d0+-0x2c99*-0x1)))return _0x2a473e[_0x66e8e8(0x3e8)](console,arguments);if(_0x1eb3b2['index'+'Of']('Unity'+_0x66e8e8(0x370)+'dkit')!==-(-0x2213+-0x99*0x39+0x4425)){var _0xe0a91b=_0x1eb3b2['slice'](-0x22d9+0x1fd9+0x300,0x2335+-0x3f5+0x32*-0x9a);if(_0x73e36[_0x66e8e8(0x395)](_0x149a0e[_0x66e8e8(0x4ea)+'Of'](_0xe0a91b),-(0xde*-0x11+-0x2506+0x33c5))&&_0x149a0e['lengt'+'h']<0x8c2+-0xc*0x21+-0x26*0x2f)_0x149a0e['push'](_0xe0a91b);}}catch(_0x12bd2d){}return _0x2a473e['apply'](console,arguments);};}}(_0x1c8535[_0x46ed99]));else return _0x80fae['type']===_0x1b7bcb;}}}());var _0x191d95={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x8413cf=null,_0x42d21a=null,_0x55d141=-(0x1ca*0x11+0x1baf+-0x3a18),_0x1cf660=null;function _0x39e24b(_0x42ffd3){var _0x1827b7=_0x434d03,_0x1c5464={'zkMIu':function(_0x2a7b35,_0x1e0507){return _0x2a7b35<_0x1e0507;},'qKXza':_0x4581b1[_0x1827b7(0x419)]};try{if(!_0x42ffd3)return;var _0x12ed43=_0x42ffd3['insta'+'nce']?_0x42ffd3[_0x1827b7(0x28d)+'nce']['expor'+'ts']:_0x42ffd3[_0x1827b7(0x26f)+'ts']||null;if(!_0x12ed43)return;if(!_0x1cf660){if(_0x1827b7(0x1b7)!==_0x4581b1[_0x1827b7(0x414)]){var _0x1ade9d={};for(var _0x2bdeba in _0x766d69){var _0x45c704=_0x395be8[_0x2bdeba];for(var _0x5d7a65=-0x2ac*0x5+0x25a4+-0x2*0xc24;_0x1c5464[_0x1827b7(0x203)](_0x5d7a65,_0x45c704[_0x1827b7(0x476)+'h']);_0x5d7a65++){_0x1ade9d[_0x2bdeba+_0x1c5464[_0x1827b7(0x299)]+_0x45c704[_0x5d7a65]['o'][_0x1827b7(0x1eb)+_0x1827b7(0x19e)](0x1482+0x1ea2+0xe*-0x3a6)]=_0x45c704[_0x5d7a65]['v'];}}return _0x1ade9d;}else try{_0x1cf660=Object[_0x1827b7(0x4fa)](_0x12ed43)[_0x1827b7(0x20e)](-0x2248*0x1+0x59*-0x7+-0x1*-0x24b7,0x15f7+0x11bf+-0x279e);}catch(_0x2c80f9){}}var _0x46193e=_0x12ed43['memor'+'y'];if(_0x46193e&&_0x46193e['buffe'+'r']&&_0x46193e[_0x1827b7(0x352)+'r'][_0x1827b7(0x441)+'ength']>-0x5f3*0x5+-0x2593+0x4352){if(_0x4581b1[_0x1827b7(0x2c5)]!==_0x1827b7(0x477)){_0x3d95f7[_0x383b28]='0x'+_0x3cfdc5[_0x1f560d][_0x1827b7(0x2b6)][_0x1827b7(0x1eb)+_0x1827b7(0x19e)](0x1588+0x1*-0x15a7+0x2f);if(_0x519ecb[_0x489470][_0x1827b7(0x470)+_0x1827b7(0x33a)])_0x27f89f[_0x1827b7(0x318)](_0x4d16bb);}else _0x42d21a=_0x46193e,_0x55d141=Date[_0x1827b7(0x20f)]()-_0x4b5b08;}}catch(_0x2adac0){}}function _0x40c705(){var _0x226b9e=_0x434d03,_0x59d3f6={'akkyW':_0x4581b1[_0x226b9e(0x293)],'INauG':_0x4581b1['tbLcW'],'fLRLf':function(_0x480db3,_0x35b989){return _0x480db3!==_0x35b989;},'Primb':_0x4581b1['HVlSB']};if(_0x226b9e(0x140)!=='YbEmN')try{if(typeof WebAssembly===_0x226b9e(0x3fe)+_0x226b9e(0x3aa))return;var _0x356d84=['insta'+'ntiat'+'e',_0x226b9e(0x28d)+'ntiat'+'eStre'+'aming'];for(var _0x4bafa7=-0x1*0x14cb+-0x1b9b+0x3066*0x1;_0x4bafa7<_0x356d84[_0x226b9e(0x476)+'h'];_0x4bafa7++){(function(_0x18f01c){var _0x3984e1=_0x226b9e,_0x2fddc2={'drLlD':function(_0x4fd232,_0x516541){return _0x4fd232===_0x516541;}};if(_0x3984e1(0x35b)!==_0x59d3f6['akkyW'])return _0x454234['sourc'+'e']='Runti'+'me._g'+_0x3984e1(0x320),_0x8c4e54;else{var _0x54f77d=('3|2|4'+_0x3984e1(0x2cb)+'5')[_0x3984e1(0x3c4)]('|'),_0x29e220=-0xc4a+-0xdfc+0x1a46;while(!![]){switch(_0x54f77d[_0x29e220++]){case'0':_0x43c8c0[_0x3984e1(0x187)+'uraMe'+_0x3984e1(0x4fe)+'ap']=!![];continue;case'1':try{Object[_0x3984e1(0x20b)+_0x3984e1(0x12f)+'erty'](_0x43c8c0,_0x59d3f6[_0x3984e1(0x4e9)],{'value':_0x56418a['name'],'configurable':!![]});}catch(_0x22f9d7){}continue;case'2':if(_0x59d3f6['fLRLf'](typeof _0x56418a,_0x3984e1(0x335)+'ion')||_0x56418a['__sak'+'uraMe'+_0x3984e1(0x4fe)+'ap'])return;continue;case'3':var _0x56418a=WebAssembly[_0x18f01c];continue;case'4':var _0x43c8c0=function(){var _0x156492=_0x3984e1,_0x20ed30=_0x56418a[_0x156492(0x3e8)](this,arguments);try{if(_0x20ed30&&_0x2fddc2[_0x156492(0x3df)](typeof _0x20ed30[_0x156492(0x2e2)],_0x156492(0x335)+'ion'))_0x20ed30[_0x156492(0x2e2)](_0x39e24b,function(){});else _0x39e24b(_0x20ed30);}catch(_0x2a538f){}return _0x20ed30;};continue;case'5':WebAssembly[_0x18f01c]=_0x43c8c0;continue;}break;}}}(_0x356d84[_0x4bafa7]));}}catch(_0x3cd097){}else{var _0x56944c=_0x439134[_0x226b9e(0x268)+'Insta'+_0x226b9e(0x252)]||_0x24ba0c[_0x226b9e(0x268)+_0x226b9e(0x44b)]||_0x2acf14[_0x226b9e(0x2e9)];if(_0x56944c)return _0x3c254b[_0x226b9e(0x43e)+'e']=_0x59d3f6[_0x226b9e(0x1ca)],_0x56944c;}}var _0x39eb8c='2.0.6',_0x3cca4d=null,_0x329bba=null,_0x9948cb={},_0x448865=[],_0x46932c=[],_0x1fa830=[{'type':_0x4581b1['DJnfh'],'keep':!![]},{'type':_0x434d03(0x4b6)+_0x434d03(0x2eb)+'pt','keep':!![]},{'type':_0x434d03(0x428)+'nMana'+'ger','keep':![]},{'type':_0x4581b1[_0x434d03(0x27e)],'keep':![]}],_0xc37ee4=[_0x434d03(0x2dd)+_0x434d03(0x407)+'Sharp'+_0x434d03(0x3c6),'Assem'+_0x434d03(0x407)+_0x434d03(0x324)+_0x434d03(0x238)+_0x434d03(0x471)+'.dll',_0x4581b1['VfWrd'],_0x434d03(0x49c)+_0x434d03(0x387),_0x4581b1['PjgIj'],'__Gen'+_0x434d03(0x351)+'d'];(function _0x154694(){var _0x389619=_0x434d03,_0x5a5407={'abbPO':_0x389619(0x3e3)+_0x389619(0x2d4)+_0x389619(0x2c8)+_0x389619(0x49b)+_0x389619(0x246)+'rt','Kcucb':function(_0x3b5290,_0x545660){return _0x4581b1['PpddN'](_0x3b5290,_0x545660);},'ROXqy':function(_0x4bd49e,_0x4196d8){return _0x4bd49e+_0x4196d8;},'rWNWI':_0x389619(0x241)+'t'};if(_0x4581b1[_0x389619(0x277)](_0x389619(0x11c),_0x4581b1[_0x389619(0x47b)]))return-0x42f*0x9+-0xda0+0x3347;else try{var _0x539daf=window['Unity'+_0x389619(0x370)+_0x389619(0x212)]&&window[_0x389619(0x44a)+_0x389619(0x370)+_0x389619(0x212)][_0x389619(0x2d7)+'me'];if(!_0x539daf||_0x4581b1[_0x389619(0x277)](typeof _0x539daf['creat'+_0x389619(0x14b)+'in'],_0x389619(0x335)+'ion')){_0x191d95[_0x389619(0x4e2)]=_0x389619(0x2d7)+_0x389619(0x15a)+_0x389619(0x384)+'lugin'+_0x389619(0x215)+'ailab'+'le';return;}_0x191d95['attem'+_0x389619(0x4d1)]=!![],_0x329bba=_0x539daf[_0x389619(0x1ce)+_0x389619(0x14b)+'in']({'name':'sakur'+'a-ski'+_0x389619(0x161)+'z','version':_0x39eb8c,'referencedAssemblies':_0xc37ee4['slice']()}),_0x191d95['ok']=!![];try{if(_0x4581b1['uugeO']===_0x389619(0x234))_0x4067f6[_0x389619(0x40a)](_0x5a5407[_0x389619(0x1a2)],'color'+':'+_0x4daa9d+(';font'+'-weig'+'ht:70'+'0'),_0x5b5f10),_0x538990[_0x389619(0x40a)](_0x5a5407[_0x389619(0x248)](_0x5a5407[_0x389619(0x285)](_0x346605+'\x0a',_0x3b0ec5[_0x389619(0x36e)+_0x389619(0x491)](_0x265582,null,0x2f5*-0x1+0x1*0xf45+-0xc4f))+'\x0a',_0x1221c2)),_0x4e5b71(_0x5a5407[_0x389619(0x3d9)],{'report':_0x38754d});else{var _0x596e08=window['Unity'+'WebMo'+'dkit'][_0x389619(0x2d7)+'me'];_0x596e08[_0x389619(0x187)+'uraTa'+'g']=_0x4581b1[_0x389619(0x186)](_0x39eb8c,':')+Math[_0x389619(0x409)+'m']()[_0x389619(0x1eb)+_0x389619(0x19e)](-0x413*0x7+0x1*-0x1511+0x31ba)['slice'](-0x401*0x1+-0x1*-0x286+-0x17d*-0x1,0x2434+-0x526*0x7+-0x1*0x20),_0x8413cf=_0x596e08[_0x389619(0x187)+_0x389619(0x12e)+'g'];}}catch(_0x2d5f0b){}_0x51cbda(),_0x191d95['hooks'+_0x389619(0x16e)+_0x389619(0x4a4)]=_0x448865['lengt'+'h'],_0x40c705(),_0x191d95[_0x389619(0x148)+_0x389619(0x1f0)]=!![];}catch(_0x24ad90){_0x191d95[_0x389619(0x4e2)]=String(_0x24ad90&&_0x24ad90[_0x389619(0x1f6)+'ge']||_0x24ad90);}}());var _0x20dd56=new Float32Array(0x1*-0x17af+-0x2*0x457+0x205e),_0x291acb=new Int32Array(_0x20dd56['buffe'+'r']);function _0x165e19(_0x2549e7){return _0x20dd56[0x714+0x1657+-0x1d6b]=_0x2549e7,_0x291acb[0xc6+-0xd03+0xc3d];}function _0x3d7f91(_0x1c0dca){return _0x291acb[0x19a4+-0x153b+0x1*-0x469]=_0x4581b1['quSuF'](_0x1c0dca,-0x192b*0x1+-0xa9f*-0x3+-0x6b2),_0x20dd56[-0x18b0+0x6a*-0x1+-0x132*-0x15];}var _0x181dfb={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x58d870(){var _0x3a2d74=_0x434d03,_0x434ff7={'efLeE':_0x3a2d74(0x28b)+':','tjdvZ':function(_0x1f8dba,_0x4b5251){return _0x1f8dba+_0x4b5251;},'aTMpp':function(_0x1d8b59,_0x18f8df){return _0x1d8b59+_0x18f8df;},'rQLXp':function(_0x340de5,_0x34604d){return _0x340de5+_0x34604d;},'yukoy':_0x3a2d74(0x1b6),'foHDn':'\x20hook'+'s\x20wer'+'e\x20eve'+'n\x20SEE'+_0x3a2d74(0x420)+'UWMK.'+_0x3a2d74(0x133)+'apply'+_0x3a2d74(0x2f0)+'\x20','AaPWM':_0x3a2d74(0x444)+'oks\x20r'+_0x3a2d74(0x45a)+_0x3a2d74(0x2d8)+_0x3a2d74(0x155)+'\x20it\x20a'+'re\x20ig'+_0x3a2d74(0x44c)+'\x20for\x20'+_0x3a2d74(0x1ee)+'ife\x20o'+_0x3a2d74(0x2fb)+_0x3a2d74(0x413)+'.\x20','ymvmC':_0x4581b1['ffIBo'],'qdKdX':_0x4581b1['BqwbZ']};if(_0x4581b1[_0x3a2d74(0x171)]==='PtiSq')_0x2112d4[_0x3a2d74(0x1c8)](_0x3a2d74(0x3e3)+_0x3a2d74(0x2d4)+_0x3a2d74(0x42f)+_0x3a2d74(0x4e5)+_0x3a2d74(0x304)+'ailed',_0x434ff7['efLeE']+_0x21111e,_0x13e0d5);else{try{if(_0x329bba&&_0x329bba[_0x3a2d74(0x488)+'ime']){var _0x42157b=_0x329bba[_0x3a2d74(0x488)+'ime'];if(_0x4581b1['VtWif'](typeof _0x42157b[_0x3a2d74(0x11f)+'veGam'+'e'],_0x4581b1[_0x3a2d74(0x3e7)])){if(_0x4581b1[_0x3a2d74(0x2a9)](_0x3a2d74(0x263),_0x4581b1['ylzPA'])){var _0xe19911=_0x42157b[_0x3a2d74(0x11f)+'veGam'+'e']();if(_0xe19911)return _0x181dfb['sourc'+'e']=_0x3a2d74(0x2f4)+_0x3a2d74(0x3ce)+_0x3a2d74(0x278)+'.reso'+_0x3a2d74(0x270)+_0x3a2d74(0x2b7),_0xe19911;}else return _0x5af593[-0x2130+-0x167*-0x7+0xc1*0x1f]=_0xc14f4f|0x271+-0x7*-0x413+-0x1ef6,_0x4132bb[-0x77*0x1b+-0x1004+0x1c91];}if(_0x42157b['_game']){if('HYtbG'===_0x4581b1['ZBCSV'])return _0x181dfb[_0x3a2d74(0x43e)+'e']=_0x4581b1[_0x3a2d74(0x4e0)],_0x42157b[_0x3a2d74(0x3cb)];else{var _0x3f2c63=_0x5cbcb1[_0x575263[_0x5c7934]];if(_0x3f2c63&&_0x4581b1[_0x3a2d74(0x4c3)](typeof _0x3f2c63,'objec'+'t')&&_0x3f2c63[_0x3a2d74(0x1a4)+'e']&&_0x3f2c63['Modul'+'e'][_0x3a2d74(0x1f5)+'8']&&_0x3f2c63[_0x3a2d74(0x1a4)+'e'][_0x3a2d74(0x1f5)+'8'][_0x3a2d74(0x352)+'r'])return _0x49fad5[_0x3a2d74(0x43e)+'e']=_0x4581b1[_0x3a2d74(0x22a)]('windo'+'w.'+_0x20ee79[_0x206f5a],_0x4581b1['evrVi']),_0x3f2c63;}}}}catch(_0x4b3efc){}try{var _0x47f63e=window[_0x3a2d74(0x44a)+_0x3a2d74(0x370)+_0x3a2d74(0x212)]&&window[_0x3a2d74(0x44a)+_0x3a2d74(0x370)+_0x3a2d74(0x212)][_0x3a2d74(0x2d7)+'me'];if(_0x47f63e&&typeof _0x47f63e['resol'+'veGam'+'e']==='funct'+_0x3a2d74(0x2df)){var _0x26cf70=_0x47f63e['resol'+_0x3a2d74(0x20c)+'e']();if(_0x26cf70)return _0x181dfb[_0x3a2d74(0x43e)+'e']=_0x4581b1[_0x3a2d74(0x27c)],_0x26cf70;}if(_0x47f63e&&_0x47f63e[_0x3a2d74(0x3cb)])return _0x181dfb[_0x3a2d74(0x43e)+'e']=_0x4581b1[_0x3a2d74(0x12d)],_0x47f63e;}catch(_0x22ff71){}try{var _0x62140=window[_0x3a2d74(0x268)+_0x3a2d74(0x175)+_0x3a2d74(0x252)]||window[_0x3a2d74(0x268)+'Game']||window[_0x3a2d74(0x2e9)];if(_0x62140)return _0x3a2d74(0x425)!=='JkKhS'?(_0x181dfb[_0x3a2d74(0x43e)+'e']=_0x4581b1['HVlSB'],_0x62140):(_0x3485ea[_0x3a2d74(0x43e)+'e']=_0x3a2d74(0x2f4)+'n._ru'+_0x3a2d74(0x278)+'.reso'+_0x3a2d74(0x270)+'me()',_0x4fcb8e);}catch(_0x130dba){}try{if(typeof game!=='undef'+_0x3a2d74(0x3aa)&&game)return _0x181dfb[_0x3a2d74(0x43e)+'e']=_0x3a2d74(0x231)+_0x3a2d74(0x276)+_0x3a2d74(0x383)+'ng',game;}catch(_0x106d39){}try{var _0x3a5de5=Object[_0x3a2d74(0x4fa)](window);for(var _0x3eb38a=-0x4*-0x837+-0x1899+0x8d*-0xf;_0x4581b1[_0x3a2d74(0x396)](_0x3eb38a,_0x3a5de5['lengt'+'h'])&&_0x3eb38a<0x45c+-0xd*-0x239+-0x1ee9;_0x3eb38a++){var _0x39e95d=window[_0x3a5de5[_0x3eb38a]];if(_0x39e95d&&typeof _0x39e95d===_0x3a2d74(0x1f9)+'t'&&_0x39e95d[_0x3a2d74(0x1a4)+'e']&&_0x39e95d[_0x3a2d74(0x1a4)+'e'][_0x3a2d74(0x1f5)+'8']&&_0x39e95d[_0x3a2d74(0x1a4)+'e'][_0x3a2d74(0x1f5)+'8'][_0x3a2d74(0x352)+'r']){if(_0x4581b1[_0x3a2d74(0x1d7)]!==_0x4581b1[_0x3a2d74(0x1d7)])_0x225265['warni'+_0x3a2d74(0x4b5)][_0x3a2d74(0x318)](_0x434ff7[_0x3a2d74(0x22d)](_0x434ff7['aTMpp'](_0x434ff7['rQLXp'](_0x434ff7[_0x3a2d74(0x20d)]+_0x559393['hooks'+'Total']+_0x434ff7[_0x3a2d74(0x3ed)],'runs\x20'+_0x3a2d74(0x4d9)+'durin'+'g\x20Web'+_0x3a2d74(0x2dd)+_0x3a2d74(0x34a)+_0x3a2d74(0x144)+'tiate'+'\x20and\x20'+'snaps'+'hots\x20'+_0x3a2d74(0x2f4)+'n.hoo'+'ks.le'+_0x3a2d74(0x41c)+'\x20')+_0x434ff7[_0x3a2d74(0x3cc)],_0x434ff7[_0x3a2d74(0x37b)])+_0x2bc7cd['hooks'+_0x3a2d74(0x16e)+'tered'+'AtArm'],_0x434ff7['qdKdX']));else return _0x181dfb[_0x3a2d74(0x43e)+'e']=_0x4581b1[_0x3a2d74(0x186)](_0x4581b1['rSTWb']+_0x3a5de5[_0x3eb38a],_0x4581b1['evrVi']),_0x39e95d;}}}catch(_0x21263f){}return _0x181dfb[_0x3a2d74(0x43e)+'e']=null,null;}}function _0x27b9df(){var _0x204bcd=_0x434d03;try{if(_0x42d21a&&_0x42d21a['buffe'+'r']&&_0x42d21a[_0x204bcd(0x352)+'r'][_0x204bcd(0x441)+_0x204bcd(0x3e2)])return _0x181dfb[_0x204bcd(0x43e)+'e']=_0x181dfb['sourc'+'e']||_0x204bcd(0x28d)+_0x204bcd(0x1a6)+_0x204bcd(0x27d)+_0x204bcd(0x3ff)+'s.mem'+'ory',new Uint8Array(_0x42d21a[_0x204bcd(0x352)+'r']);}catch(_0x1a1dff){}try{var _0x20faf4=_0x58d870();if(_0x20faf4&&_0x20faf4[_0x204bcd(0x1a4)+'e']&&_0x20faf4['Modul'+'e']['HEAPU'+'8']&&_0x20faf4[_0x204bcd(0x1a4)+'e']['HEAPU'+'8'][_0x204bcd(0x352)+'r'])return _0x20faf4[_0x204bcd(0x1a4)+'e'][_0x204bcd(0x1f5)+'8'];}catch(_0x178680){}return null;}function _0x3510d1(){var _0xd9a0f7=_0x434d03,_0x5ccd26={'UFRzn':'windo'+'w.','gRSrZ':_0xd9a0f7(0x3b7)+'le'};if(_0x4581b1['CbXDr']===_0xd9a0f7(0x176)){var _0x1ab7a8=_0x27b9df();if(!_0x1ab7a8)return null;try{return new DataView(_0x1ab7a8[_0xd9a0f7(0x352)+'r'],_0x1ab7a8[_0xd9a0f7(0x44d)+'ffset'],_0x1ab7a8['byteL'+_0xd9a0f7(0x3e2)]);}catch(_0x195210){return null;}}else return _0x578360[_0xd9a0f7(0x43e)+'e']=_0x5ccd26[_0xd9a0f7(0x369)]+_0x3278da[_0x3ea83c]+_0x5ccd26[_0xd9a0f7(0x432)],_0x27593f;}function _0x260597(_0x41988,_0x12971f){var _0x1cc9c7=_0x434d03;if(_0x4581b1[_0x1cc9c7(0x277)]('cIpxJ',_0x4581b1[_0x1cc9c7(0x3b3)]))try{return _0x49b84e&&_0x371e89['buffe'+'r']?_0x5d8cf2['buffe'+'r'][_0x1cc9c7(0x441)+_0x1cc9c7(0x3e2)]:0x318+0xe20+-0x1d*0x98;}catch(_0x2b6662){return 0x2352*0x1+0xa9+-0x97*0x3d;}else{var _0x4d2aad=_0x3510d1();if(!_0x4d2aad)return _0x181dfb[_0x1cc9c7(0x1e2)+'d']++,_0x181dfb[_0x1cc9c7(0x49a)+'rror']=_0x181dfb['lastE'+_0x1cc9c7(0x47f)]||_0x4581b1[_0x1cc9c7(0x314)],undefined;if(_0x41988<0xe11+-0x16d3+0x461*0x2||_0x4581b1[_0x1cc9c7(0x42e)](_0x41988,0x1*0x12b9+0x4*-0x7ed+0x1*0xcff)>_0x4d2aad[_0x1cc9c7(0x441)+'ength'])return _0x1cc9c7(0x421)!==_0x1cc9c7(0x4bc)?(_0x181dfb['faile'+'d']++,_0x181dfb[_0x1cc9c7(0x49a)+_0x1cc9c7(0x47f)]=_0x181dfb['lastE'+_0x1cc9c7(0x47f)]||_0x4581b1['UxGds'](_0x1cc9c7(0x21f)+_0x1cc9c7(0x3b2)+_0x41988[_0x1cc9c7(0x1eb)+_0x1cc9c7(0x19e)](-0xd0f+0x1*0x1808+-0xae9),_0x4581b1[_0x1cc9c7(0x431)])+_0x4d2aad['byteL'+_0x1cc9c7(0x3e2)]['toStr'+'ing'](-0xb2d+0x1442+-0x905),undefined):_0x4581b1['oMLbq'](_0x141d0d['type'],_0x15880c);try{if('qBqOA'==='IIriG')_0x59f3a8();else{_0x181dfb['ok']++;switch(_0x12971f){case'u8':return _0x4d2aad[_0x1cc9c7(0x4f7)+'nt8'](_0x41988);case'i8':return _0x4d2aad['getIn'+'t8'](_0x41988);case'i16':return _0x4d2aad[_0x1cc9c7(0x373)+_0x1cc9c7(0x4a7)](_0x41988,!![]);case'u16':return _0x4d2aad['getUi'+_0x1cc9c7(0x25b)](_0x41988,!![]);case _0x1cc9c7(0x4d4):return _0x4d2aad[_0x1cc9c7(0x373)+'t32'](_0x41988,!![]);case _0x4581b1['NvahE']:return _0x4d2aad['getUi'+'nt32'](_0x41988,!![]);case _0x4581b1['YNpgh']:return _0x4d2aad[_0x1cc9c7(0x2b4)+'oat32'](_0x41988,!![]);case _0x1cc9c7(0x1e9):return _0x4d2aad['getFl'+_0x1cc9c7(0x350)](_0x41988,!![]);default:return _0x4d2aad['getIn'+'t32'](_0x41988,!![]);}}}catch(_0x29837b){return _0x181dfb['faile'+'d']++,_0x181dfb['lastE'+_0x1cc9c7(0x47f)]=_0x181dfb[_0x1cc9c7(0x49a)+'rror']||String(_0x29837b&&_0x29837b[_0x1cc9c7(0x1f6)+'ge']||_0x29837b)[_0x1cc9c7(0x20e)](0xcb5+-0x10*-0x196+-0x2615,0x56a+-0x61*0x3+-0x3cf),undefined;}}}function _0x18957f(_0x2ab643,_0x2ef43b,_0x1e45d1){var _0x263962=_0x434d03,_0x3d3622=_0x4581b1[_0x263962(0x437)](_0x3510d1);if(!_0x3d3622||_0x2ab643<0x2c9*-0x7+0x10e4*0x2+0x4c3*-0x3||_0x4581b1['pnRCa'](_0x2ab643,-0x1095+-0xc61*0x1+0x1cfa)>_0x3d3622[_0x263962(0x441)+_0x263962(0x3e2)])return![];try{switch(_0x2ef43b){case'u8':case'i8':_0x3d3622['setUi'+_0x263962(0x21d)](_0x2ab643,_0x4581b1[_0x263962(0x1e0)](_0x1e45d1,-0x1*0xaae+0x7*0x94+0x7a1));break;case _0x4581b1[_0x263962(0x4db)]:case _0x4581b1[_0x263962(0x48f)]:_0x3d3622[_0x263962(0x21e)+_0x263962(0x4a7)](_0x2ab643,_0x4581b1[_0x263962(0x4dd)](_0x1e45d1,0x23ff+-0x1670+-0xd8f),!![]);break;case _0x4581b1['Kuekc']:case _0x4581b1['NvahE']:_0x3d3622[_0x263962(0x21e)+'t32'](_0x2ab643,_0x4581b1[_0x263962(0x2b8)](_0x1e45d1,-0x120f+0x25a*0x2+0xd5b),!![]);break;case _0x4581b1[_0x263962(0x24e)]:_0x3d3622[_0x263962(0x403)+_0x263962(0x253)](_0x2ab643,_0x1e45d1,!![]);break;default:_0x3d3622[_0x263962(0x21e)+_0x263962(0x12b)](_0x2ab643,_0x1e45d1|0x263c+0x1d1*-0x13+-0x3b9,!![]);}return!![];}catch(_0x368309){return![];}}var _0x18f46e={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa}};function _0xb73d65(_0x4abacc,_0x589144,_0x57ac19){var _0x4866c7=_0x434d03,_0x3d79af=_0x18f46e[_0x57ac19];if(!_0x3d79af)return null;var _0x19e452=_0x260597(_0x4abacc+_0x589144+_0x3d79af['key'],'u8'),_0x58465b=_0x4581b1[_0x4866c7(0x3f2)](_0x260597,_0x4581b1['bKEmA'](_0x4abacc+_0x589144,_0x3d79af[_0x4866c7(0x2bf)+'n']),'i32'),_0x1e7e87=_0x260597(_0x4abacc+_0x589144+_0x3d79af[_0x4866c7(0x29e)+'d'],'u8'),_0x199c31=_0x4581b1[_0x4866c7(0x122)](_0x260597,_0x4581b1[_0x4866c7(0x330)](_0x4abacc,_0x589144)+_0x3d79af[_0x4866c7(0x472)],_0x57ac19==='obfF'?_0x4581b1[_0x4866c7(0x24e)]:_0x4581b1['VtWif'](_0x57ac19,_0x4866c7(0x498))?'i32':'u8'),_0x27f909=_0x260597(_0x4abacc+_0x589144+_0x3d79af['activ'+'e'],'u8');if(_0x19e452===undefined||_0x58465b===undefined||_0x199c31===undefined||_0x27f909===undefined)return null;_0x19e452&=-0x1df6+0x269*0xd+-0x60,_0x58465b|=-0x129b+-0x2*0x1220+0x36db,_0x1e7e87=_0x4581b1['ysrko'](_0x1e7e87,0x2*0x4a2+-0x16d6+0x6*0x243)&0x20ca+0x186*-0xb+-0x1007,_0x27f909&=0x1984+-0xd5b+0x4*-0x30a;var _0x28543f;if(_0x57ac19==='obfF')_0x28543f=_0x4581b1['StJdf'](_0x3d7f91,_0x4581b1[_0x4866c7(0x265)](_0x58465b,_0x19e452));else{if(_0x57ac19==='obfI')_0x28543f=_0x58465b^_0x19e452|0x1a34+-0x24e4+0x130*0x9;else _0x28543f=((_0x58465b^_0x19e452)&0x1a39+0x16fb+-0x12d*0x29)!==-0x2145*0x1+-0x22b4+0x43f9*0x1?0x5cc*0x1+-0x1aa1+0x7*0x2fa:0x4e5*0x5+-0x252d*0x1+0xcb4;}return{'real':_0x28543f,'fake':_0x199c31,'act':_0x27f909,'init':_0x1e7e87,'key':_0x19e452,'hidden':_0x58465b};}function _0x41633e(_0x28af1b,_0x447e32,_0xf06eb8,_0x4ff486){var _0x50b19e=_0x434d03,_0x3b5e64=_0x18f46e[_0xf06eb8];if(!_0x3b5e64)return![];var _0x4f4254=_0xb73d65(_0x28af1b,_0x447e32,_0xf06eb8);if(!_0x4f4254)return![];var _0x4aa6ad=_0x4f4254['key'],_0x284a45;if(_0x4581b1[_0x50b19e(0x29a)](_0xf06eb8,_0x50b19e(0x1dc)))_0x284a45=_0x4581b1['StJdf'](_0x165e19,_0x4ff486)^_0x4aa6ad;else{if(_0xf06eb8===_0x4581b1['VSWOh'])_0x284a45=_0x4581b1[_0x50b19e(0x265)](_0x4ff486|-0xfe3+0x1*0x44d+0xb96,_0x4aa6ad);else _0x284a45=_0x4581b1[_0x50b19e(0x1e0)](_0x4ff486?-0x65f+-0x2171+0x27d1:-0x1*-0x1de0+0x67*-0x5b+0x6bd,0x6be+-0x1e*-0xff+-0x23a1*0x1)^_0x4aa6ad;}var _0xef3a3e=_0xf06eb8===_0x4581b1['zwGAN']?'f32':_0xf06eb8==='obfI'?_0x4581b1[_0x50b19e(0x4a6)]:'u8',_0x5ae281=_0x4581b1['TOZDW'](_0xf06eb8,_0x50b19e(0x1dc))?_0x4ff486:_0xf06eb8===_0x4581b1[_0x50b19e(0x26d)]?_0x4ff486|0x4af+-0x22c0+-0x1*-0x1e11:_0x4ff486?0x677+0x3f*-0x75+0x1*0x1655:0x107*-0x1+-0x1b23*0x1+0x1c2a;return _0x18957f(_0x4581b1[_0x50b19e(0x22a)](_0x4581b1[_0x50b19e(0x31b)](_0x28af1b,_0x447e32),_0x3b5e64['hidde'+'n']),_0x50b19e(0x4d4),_0x4581b1['GUAlV'](_0x284a45,-0x3*0x5bd+-0x33d*-0x7+-0x574))&&_0x4581b1['iovVz'](_0x18957f,_0x4581b1[_0x50b19e(0x3b6)](_0x28af1b+_0x447e32,_0x3b5e64[_0x50b19e(0x472)]),_0xef3a3e,_0x5ae281)&&_0x18957f(_0x4581b1[_0x50b19e(0x45c)](_0x28af1b,_0x447e32)+_0x3b5e64[_0x50b19e(0x1e8)+'e'],'u8',0xe45+0x25+0x9*-0x19a);}var _0x16a99e={'FPScontroller':[[0xd34+0x17*-0x133+0x1*0xe71,'obfF'],[-0xde6*0x2+-0x4a*0x47+0x307a,'obfF'],[0x22a7+-0x3*-0x50+-0x2357,_0x434d03(0x1dc)],[-0x1804+-0x3*-0x4f6+0x4bd*0x2,_0x4581b1[_0x434d03(0x371)]],[-0x1*-0x9d8+0xf62+0x26*-0xa7,_0x4581b1[_0x434d03(0x371)]],[-0x2*-0x29b+0x5*0x36d+-0x15cf,_0x434d03(0x1dc)],[-0x1*0xa2a+-0x1e33+0x28fd,_0x4581b1[_0x434d03(0x371)]],[-0x17ed+0x11*0x62+0x1*0x1223,'obfB'],[-0x99a+-0x936+0x1394,_0x4581b1[_0x434d03(0x371)]],[0x10e4+-0x2*0x11d5+0x13a2,'i32'],[0x220c*-0x1+-0x23ec+0x2ba*0x1a,'u8'],[-0x1a7d+0x1d6e+0x9*-0x39,_0x4581b1['zwGAN']],[-0x5*-0x26b+0x1*0x1d2f+0x6b5*-0x6,_0x434d03(0x4d4)],[-0x5*-0x2aa+0x2*-0x8ee+0x596,'u8'],[-0x1c98*-0x1+0x442*-0x6+-0x1fc,_0x4581b1['Kuekc']],[-0x6*-0xa3+-0xa+-0x2b4,'u8'],[-0x348+-0x10b6+0x1513,'u8'],[-0x6b*-0x3b+0x1c4e+-0x33db,_0x4581b1['zwGAN']],[0x2*0x1115+-0x1e54+-0x2a2*0x1,_0x4581b1[_0x434d03(0x371)]],[0x8*-0x43b+-0x7*-0x185+0x33*0x7b,_0x434d03(0x43f)],[-0x1f8f*0x1+-0x121*0x1+0x2200,_0x4581b1[_0x434d03(0x24e)]],[0x1aa7+-0xb79+-0xdc2,'f32'],[-0x1ecc+-0x191*0x3+0x24ef,'f32'],[0xa71+-0x66+-0x883,'u8'],[-0x1bb9*0x1+-0xa32*-0x1+0x1313,'f32'],[-0x2375+-0xe0b+-0x1992*-0x2,'u8'],[-0x11f*0xb+0x4*-0x5fb+0x25f5,_0x434d03(0x43f)],[-0x11ab+0xff8+0x1*0x36b,_0x434d03(0x43f)],[0x110+0x2243*-0x1+-0x22ef*-0x1,'u8'],[0x8cf+-0xc*-0x51+-0xade,'u8'],[-0x4*-0x4dc+0x11*-0x19f+0x9df,_0x4581b1[_0x434d03(0x371)]],[0xbf*0x1a+-0xdec+-0x3a2,_0x4581b1[_0x434d03(0x24e)]],[0x19fc+0x2696+-0x3eb6,'u8'],[0x6*0x681+-0x80e+-0x1d18,_0x434d03(0x1dc)],[-0x19b7+-0x16*-0x14e+-0x31*0x5,_0x434d03(0x260)],[0x337*0x1+0x1*0x20dd+0x10fe*-0x2,'f32'],[0x44a*0x4+0x3cc*0x3+-0x1a70,_0x4581b1['YNpgh']],[-0x11d7+-0x101f+0x5b*0x66,_0x434d03(0x43f)],[-0xb26+0x1df0+0x2bf*-0x6,_0x434d03(0x43f)],[-0x11ba*-0x2+-0x271*0x9+0x23b*-0x5,'f32'],[-0x18f0+-0x2221*0x1+0x3d69,'f32'],[-0x2266+0xc8+0x3*0xbfe,'u8'],[-0x1a5*-0xe+0x1*0x2356+-0x37ff,'u8'],[0x77d+0x12b*0x1+-0x142*0x5,'u8'],[-0x15b3+-0x1ee2+0x1*0x36f5,_0x4581b1[_0x434d03(0x24e)]],[-0x243a+0x2*-0x801+0x36a0,'u8'],[0x7a3+-0x120e+0xcd0,'u8'],[0x10e2+-0xc0f+0x26b*-0x1,_0x4581b1['YNpgh']],[-0x1*-0xfe5+-0x17*-0xe2+-0x21c7,_0x4581b1[_0x434d03(0x24e)]],[0x143+-0x1ad7+0x1c04,_0x4581b1['YNpgh']],[0x13*0x1a5+-0x1*-0x2596+-0x1*0x4261,_0x4581b1[_0x434d03(0x24e)]],[0xd6+-0x17*0x121+0x1b99,_0x4581b1['YNpgh']],[-0x4*-0x51a+-0xbb5+-0x2b*0x25,'f32'],[0x1f2a*0x1+0x45d*-0x6+-0x27c,_0x434d03(0x43f)],[-0x8*0x322+0x51e*0x1+0xba*0x1f,'u8'],[0xb76+0x1466*0x1+-0xbb*0x28,_0x4581b1[_0x434d03(0x24e)]],[-0xc7*0x1+-0x1508+0x111*0x17,'f32'],[-0xd05*-0x1+-0x263f*-0x1+-0x1*0x3088,_0x434d03(0x43f)],[0x21ae+-0x6ac+-0x87*0x2e,_0x4581b1['YNpgh']],[0x45*0x7f+-0x60d*0x4+-0x743,'u8'],[-0x1*0x24c5+-0x1*-0xdc7+0x19c3,'u8'],[-0x53*0x29+0x1055+-0x42,_0x4581b1[_0x434d03(0x24e)]],[-0xb8c*-0x2+0x18d*0xd+-0x2865,_0x4581b1[_0x434d03(0x24e)]],[-0x2306+0x55d+0x20a5*0x1,_0x4581b1[_0x434d03(0x24e)]],[0x22aa+-0x704*-0x1+0x26ae*-0x1,_0x4581b1[_0x434d03(0x24e)]],[0xefa+0x221d+-0x2e13,'f32'],[0xf2e+0xd51+-0x1977,_0x434d03(0x43f)],[-0x70f+-0xc34+0x165b,'u8'],[-0xcdd+-0x2*-0xf51+-0xe9d,_0x434d03(0x4d4)],[0x2*-0x18a+0x1498+-0xe58,_0x434d03(0x43f)],[0x19b0+0xb0f*-0x1+-0xb71,_0x4581b1[_0x434d03(0x24e)]],[0x494+0x17a6+-0x1906,_0x4581b1[_0x434d03(0x24e)]],[0x54*-0x2+-0x1*0x739+-0x5*-0x239,_0x4581b1['YNpgh']],[0x19c2+-0x91b+-0x2f*0x49,'u8'],[0x259*0x6+0x1*-0x994+0x141*-0x1,'u8'],[0x39*-0x92+-0x2232+0x4600,'u8'],[-0x1dbd*0x1+0x734*0x4+0x43a,'u8'],[0x53e+0x1870+-0x1a60,'u8'],[-0xd*0xe5+0xd43+0x1ae,'f32'],[0x1ae0+-0x10d3*-0x1+-0x285f,'f32'],[-0x2c+-0x21d*0xc+0xe7*0x20,'f32'],[-0x3e5*-0x6+0x12ff+-0x7cd*0x5,_0x434d03(0x43f)],[0x5*0x1b5+0x1107+-0x1630,_0x434d03(0x43f)],[0xa49*0x1+-0x1173+0xa8e*0x1,'u8'],[0x10e5+-0xb75*-0x2+-0x1*0x2467,_0x4581b1['YNpgh']],[0x1a0a+-0x2354+-0x2*-0x65b,_0x434d03(0x43f)],[-0x2425*0x1+0x1*0x30b+0x248a*0x1,'u8'],[-0x3*0x846+-0x133*-0x5+0x1*0x166f,_0x434d03(0x43f)],[-0x1d1d+0xc4d*0x2+0x823,_0x4581b1[_0x434d03(0x24e)]],[0x17ab+0x1c1*-0xb+0x1*-0xbc,_0x4581b1['YNpgh']],[0xcab*-0x1+0x1f*0xfb+-0xe06,_0x434d03(0x4d4)],[-0x1*0x23bf+0x2*-0x11ff+0x2f*0x19b,'u8'],[0x11f2*-0x1+-0x1*-0x128c+0x322,'i32'],[0x1869*0x1+0xba8*-0x1+-0x1*0x901,_0x4581b1[_0x434d03(0x24e)]],[-0x1464+-0x780+0x7ea*0x4,_0x434d03(0x43f)],[-0x160f+-0x2af*0xa+0x34ad,'f32'],[0x19be+-0x989+-0xc69,_0x434d03(0x43f)],[-0x31*-0x77+-0x2f3*-0x6+-0x249d,_0x4581b1['Kuekc']],[-0xd93+0x7*0x46f+0x2f*-0x4a,'u8'],[-0x2*-0xca+0x90+0x1bd,'u8'],[0x5*0x3c5+-0x119d+0x153*0x2,'u8'],[0x20*0x71+0x5*0x17b+-0x11a3,_0x4581b1[_0x434d03(0x24e)]],[-0x1*-0x192d+-0x239f+-0x16*-0xa7,_0x4581b1[_0x434d03(0x4a6)]]],'HealthScript':[[0x24d4+-0x1928+-0xb54,'u8'],[0x7*0x80+0x19b3+0x17*-0x141,_0x4581b1['Kuekc']],[-0x7ec+-0x455*-0x5+0xd3d*-0x1,_0x4581b1['YNpgh']],[-0x11*0x3+-0x1*0x1cd+0x284,_0x4581b1[_0x434d03(0x24e)]],[0x4f*-0x61+-0x1*-0xf25+-0x4a*-0x35,_0x434d03(0x43f)],[-0x110e+-0x1*-0x2327+-0x118d,'f32'],[0x16f1+-0x2*0x10f+0x2e5*-0x7,'f32'],[0x755*0x4+-0x1b65+-0x15b,_0x4581b1['YNpgh']],[0x10b0+0xbb+-0x10cb,'i32'],[-0x19b+-0x8eb+0x1*0xb2a,_0x434d03(0x4d4)],[0x1c20+-0x11c2+-0x9b6,'u8'],[-0x1244+-0xc6b+-0x1*-0x1f58,'u8'],[0xdb3+0x1c66+-0x296f*0x1,'u8'],[0x16f2+0x1*-0x8dd+-0x11*0xca,'u8'],[0x3*-0x679+-0x23f8+0x7*0x805,_0x4581b1[_0x434d03(0x26d)]],[0xbaf*-0x2+0xf57+-0x8db*-0x1,_0x4581b1[_0x434d03(0x26d)]],[-0x1cee+-0x10f0+0x1763*0x2,_0x4581b1['VSWOh']],[-0xcc5+0x1ac*0x2+0xa69,_0x4581b1[_0x434d03(0x26d)]],[-0x4*0x7f7+0x3e*-0x95+0x4502,'obfI'],[0x8*-0x129+0x2673+-0x1c07,_0x4581b1['bLkns']],[-0x1*-0x53d+-0x6*-0x6d+-0x69b,_0x434d03(0x1dc)],[0x8ca+0xb89+-0x130b*0x1,_0x4581b1[_0x434d03(0x24e)]],[0x1bff+-0x2*-0x1207+0x11*-0x3b1,_0x434d03(0x43f)],[-0x12cd+-0x268b+-0x2*-0x1d54,'f32'],[-0x1361+-0x43f*0x3+-0x2*-0x10b9,_0x4581b1[_0x434d03(0x24e)]],[-0x1a0+-0x5cc*-0x1+0x48*-0xa,_0x434d03(0x43f)],[-0x1*-0x132+0xd2a+-0xcec,_0x4581b1[_0x434d03(0x24e)]],[0x331*-0x1+0x1b3d*-0x1+0x2*0xff3,_0x4581b1['YNpgh']],[-0xb7d+0x50e+0x7ef,'u8'],[0x160e+0x49*-0x27+-0x321*0x3,'u8'],[0x1*0xe0c+-0x19*-0x103+-0x25c7,_0x4581b1[_0x434d03(0x4a6)]]],'PlayerConfig':[],'WeaponManager':[[-0x2*-0x455+0x43*0x89+-0x2c6d,_0x4581b1['Kuekc']],[0x1*0x84b+-0x178f+0xf60,_0x434d03(0x4d4)],[-0xb8f*0x1+0x30*-0x3c+0x16ef,'u8'],[0x1*-0x1b9d+-0x1d0b*-0x1+0x2*-0xa5,_0x434d03(0x4d4)],[0x3d1*0x7+-0x1101+-0x952,'obfF'],[0x79*0x27+-0x231e+0x112b,_0x434d03(0x43f)],[-0xb*0x2fb+-0x174d+0xcf*0x46,_0x4581b1[_0x434d03(0x4a6)]],[-0x1b61+-0x26*0x9b+0x32eb,'u8'],[0x48f*0x4+-0x7*-0x333+-0x2818,'u8'],[0x39+-0x1e99+0x1eec,_0x434d03(0x4d4)],[0x3f9+0x78a+0x1*-0xaf3,_0x4581b1[_0x434d03(0x24e)]],[-0x2*0xf4f+0x11a1+0xb7*0x13,'f32'],[0x5a3+0x98*0x17+-0x129f*0x1,_0x4581b1['Kuekc']],[-0x54*-0x3c+-0x1*0x8dd+-0xa17,'u8'],[0x5df*0x5+0x13e4+-0x3063,_0x4581b1['VSWOh']],[0xa4a+0x307*0x5+-0x187d,_0x4581b1[_0x434d03(0x26d)]],[0x61+0x5*0x182+-0x6e7,_0x4581b1['YNpgh']],[0xd*-0xfa+0x481*0x5+-0x8cb,_0x434d03(0x43f)],[0x23*-0x29+-0xe56+0x255*0x9,_0x434d03(0x43f)],[-0x177e+0x1e7*-0x12+-0xfb*-0x3c,_0x4581b1[_0x434d03(0x24e)]],[-0xf74+-0x9fa*0x2+0x2488,_0x434d03(0x43f)],[0x1a93*0x1+0x1*-0x159b+0x1e8*-0x2,'u8'],[-0x2177+0x267e*0x1+-0x3db,'obfI'],[0x2491+-0x1*0x210e+-0x243,'obfI'],[0x55c*0x4+0x1*0x9a3+-0x1dbf,_0x4581b1['VSWOh']],[-0x8a7*0x3+-0x12a3+0x2e00,_0x4581b1[_0x434d03(0x1b2)]],[0x1f62+0x2*-0xcd7+-0x440,_0x4581b1[_0x434d03(0x1b2)]],[0x5*0x391+-0x155*0x1+-0xc*0x140,_0x434d03(0x260)],[0xf1*0x9+0x1eeb+-0x568*0x7,_0x434d03(0x260)],[0x1*-0x169+-0x4e8*-0x6+-0x1a63,_0x4581b1[_0x434d03(0x1b2)]],[-0x1*0x18ef+0x151*0xf+0x6e0,'obfI'],[-0x1*-0x17b7+0x55*0x62+-0x3675,_0x4581b1['Kuekc']],[-0x2636+0xbab+0x1c5b*0x1,'u8'],[-0x1246+0xa8f+0x98b,'i32'],[0x232b+-0x1255+-0xefe,'i32'],[-0x41*0x27+0xa32+-0x17*-0x13,'i32'],[0x192c*-0x1+0x2a1+-0xb*-0x23d,'u8'],[0xe02+-0x1555+0x69*0x17,'u8'],[-0xbf*0x1b+-0xc1*-0x4+0x133e,'u8'],[-0xbe8+-0x15b7+0x23bd,'u8'],[-0x12*-0x1c4+-0x2109*-0x1+-0x1e*0x217,'u8'],[-0xea2+0x18d0+-0x35*0x26,_0x4581b1['Kuekc']],[-0x1*0x5bf+-0x6*0x232+0x1543,'u8']],'GG_GameManager':[[-0x1*0x967+0xa04*-0x2+0x1d93,'u8'],[0x46*-0x4c+0x1*0x261b+-0x1127,_0x434d03(0x43f)],[0x17a6+0x1*-0x1f99+0x1*0x837,'u8'],[0x2cd*0x5+0x103d+-0x1*0x1df9,'u8'],[0x135+-0x30a*0xb+0x2081,_0x434d03(0x43f)],[0x6d1+0xbf*0x26+0x71*-0x4f,_0x434d03(0x43f)],[0x312+-0xd*0x2dd+0xad*0x33,_0x434d03(0x4d4)],[-0x1b02+0xba3+0x1*0xfb3,_0x4581b1[_0x434d03(0x4a6)]],[0x9*-0x36e+0x1dc6*0x1+0x170,'u8'],[-0xe51*-0x1+-0x69c+-0x741,'u8'],[0x1577+0x4*0x3cb+-0xc5*0x2f,_0x4581b1[_0x434d03(0x24e)]],[0x1*-0x1b9d+-0x71*0x28+0x11*0x2b1,_0x4581b1['YNpgh']],[0x20ba+-0x1f57+-0xd3,'i32'],[-0xd9c+-0x1002*0x2+0x2e34,'u8'],[0x173*-0xb+0xd45*0x1+0x360,'i32'],[0x1dcb+0x128b+-0xfde*0x3,_0x4581b1['Kuekc']],[-0x497+-0x1b91+0x20e8,_0x4581b1[_0x434d03(0x4a6)]],[0x276*0x5+0x1c57+-0x27bd,_0x4581b1[_0x434d03(0x26d)]],[-0x1ff0+-0x7*-0x27a+0xf96,_0x4581b1[_0x434d03(0x26d)]],[0x31*0x11+-0x6*0x130+0x4ef,_0x434d03(0x498)],[0x10f8+0x2349+-0x3*0x1107,'u8'],[-0x2456+-0x1991+0x1*0x3f17,'i32'],[0x9c2*0x3+-0x13*0x1f1+0x901,'u8'],[-0xeef+-0x1212*0x2+0x3483*0x1,'f32'],[-0x2268+0x8*0x2ab+0xe90,'u8'],[0x1f61*0x1+0x1*0x1951+-0x372a,'u8'],[0x1e6c+-0x12*0x1fc+0x6f0,'u8'],[0x2507*0x1+-0x49*-0x77+-0x2*0x22a7,'i32'],[-0x171*0x1b+-0x24a8+0xb09*0x7,'f32'],[0x2007+-0x73*0x5+-0x1c18,'u8'],[-0x1f12+-0x2*0x137c+0x47bb,'u8'],[-0xdf*-0x1b+0x1a6a+-0x3037,'i32'],[0x1f83+-0x1046*0x1+-0xd81,_0x434d03(0x4d4)],[0x6*0x2c2+0x900+0x5f3*-0x4,_0x434d03(0x43f)],[-0x7*-0x363+-0x1*-0xcf+-0x1c0*0xd,'i32'],[0x61d+0xb86+0x1*-0xfdb,_0x434d03(0x43f)],[-0x1511+0x20b*0x3+0x10bc,_0x434d03(0x4d4)],[-0x23f9+-0x1e1*0x10+0x43d9,_0x434d03(0x4d4)]]};function _0x3e53bb(_0x536a90,_0x4e0b6c){return function(_0x5423c3){var _0x40737c=_0x31c3;if(_0x4581b1[_0x40737c(0x4b2)]!=='ITxOQ')_0xee9977();else try{var _0x4fdaf5=_0x5423c3&&_0x5423c3[_0x40737c(0x385)]?_0x5423c3['val']():0x1d56+0x1d4e+0x22c*-0x1b;if(!_0x4fdaf5)return;var _0x19f3f8=_0x9948cb[_0x536a90];if(!_0x19f3f8||_0x19f3f8[_0x40737c(0x2b6)]!==_0x4fdaf5){_0x9948cb[_0x536a90]={'ptr':_0x4fdaf5,'firstSeen':Date[_0x40737c(0x20f)](),'hits':0x0,'replaced':!!_0x19f3f8};try{var _0x347c49=_0x448865['filte'+'r'](function(_0x48ed83){var _0x4e96e0=_0x40737c;return _0x48ed83[_0x4e96e0(0x11d)]===_0x536a90;})[0x19f+0x92b*0x2+-0x13f5];_0x211077={'type':_0x536a90,'atMs':_0x4581b1[_0x40737c(0x16f)](Date[_0x40737c(0x20f)](),_0x4b5b08),'originalFunc':!!(_0x347c49&&_0x347c49[_0x40737c(0x2ec)]&&typeof _0x347c49['hook'][_0x40737c(0x1a5)+_0x40737c(0x16b)+'nc']==='funct'+_0x40737c(0x2df)),'resolveGameAtFire':!!_0x4581b1[_0x40737c(0x240)](_0x58d870),'gameSourceAtFire':_0x181dfb[_0x40737c(0x43e)+'e']};}catch(_0x336441){}}_0x9948cb[_0x536a90][_0x40737c(0x1fc)]++;if(!_0x4e0b6c){if(_0x4581b1['EkIKy']!==_0x4581b1[_0x40737c(0x2ef)])return _0xc3fabf[_0x40737c(0x43e)+'e']=_0x40737c(0x231)+_0x40737c(0x276)+_0x40737c(0x383)+'ng',_0x47f422;else{var _0x347c49=_0x448865[_0x40737c(0x2fd)+'r'](function(_0x1f4df7){var _0x165083=_0x40737c;return _0x1f4df7[_0x165083(0x11d)]===_0x536a90;})[0x45f*-0x5+-0x12f8+0x28d3];if(_0x347c49&&_0x347c49[_0x40737c(0x2ec)])try{_0x347c49[_0x40737c(0x2ec)]['enabl'+'ed']=![];}catch(_0xa8cd54){}}}}catch(_0x37c822){}};}function _0x51cbda(){var _0x457b20=_0x434d03,_0x487c4d=('1|3|7'+'|4|6|'+'2|5|8'+'|0')['split']('|'),_0x1eef0a=0x262+-0x45d*0x1+-0xd*-0x27;while(!![]){switch(_0x487c4d[_0x1eef0a++]){case'0':return _0x448865[_0x457b20(0x476)+'h']>0x1*-0x1a87+0x19d3+0xb4;case'1':if(_0x448865[_0x457b20(0x476)+'h'])return!![];continue;case'2':_0x329bba=_0x329bba||_0x404740['plugi'+'ns'][_0x404740[_0x457b20(0x2f4)+'ns']['lengt'+'h']-(0x1083+-0x18ef+0x86d)];continue;case'3':if(!window[_0x457b20(0x44a)+_0x457b20(0x370)+_0x457b20(0x212)]||!window[_0x457b20(0x44a)+_0x457b20(0x370)+'dkit'][_0x457b20(0x2d7)+'me'])return![];continue;case'4':if(!_0x404740[_0x457b20(0x2f4)+'ns']||!_0x404740[_0x457b20(0x2f4)+'ns'][_0x457b20(0x476)+'h'])return![];continue;case'5':if(!_0x329bba||typeof _0x329bba[_0x457b20(0x2f1)+'refix']!==_0x4581b1['txYLh'])return![];continue;case'6':_0x3cca4d=window['Unity'+'WebMo'+_0x457b20(0x212)][_0x457b20(0x116)+'Wrapp'+'er'];continue;case'7':var _0x404740=window[_0x457b20(0x44a)+_0x457b20(0x370)+'dkit']['Runti'+'me'];continue;case'8':for(var _0x4bc5e2=-0x12e*-0xc+-0x10bb+-0x1*-0x293;_0x4581b1['vbtLS'](_0x4bc5e2,_0x1fa830[_0x457b20(0x476)+'h']);_0x4bc5e2++){var _0x3baf76=_0x1fa830[_0x4bc5e2];try{var _0x3ea3ca=_0x329bba['hookP'+_0x457b20(0x2a1)]({'typeName':_0x3baf76[_0x457b20(0x11d)],'methodName':'Updat'+'e','params':[_0x457b20(0x4d4),_0x457b20(0x4d4)],'returnType':undefined},_0x3e53bb(_0x3baf76[_0x457b20(0x11d)],_0x3baf76['keep']));_0x448865[_0x457b20(0x318)]({'type':_0x3baf76[_0x457b20(0x11d)],'hook':_0x3ea3ca,'keep':_0x3baf76[_0x457b20(0x17c)]});}catch(_0x154261){_0x46932c[_0x457b20(0x318)](_0x4581b1['gcykr'](_0x3baf76[_0x457b20(0x11d)]+':\x20',String(_0x154261&&_0x154261[_0x457b20(0x1f6)+'ge']||_0x154261)[_0x457b20(0x20e)](0x2007+-0x14f3+-0xb14,0x192b+-0x1727*0x1+-0x164)));}}continue;}break;}}function _0xfd5e96(){var _0x1bab89=_0x434d03;if(_0x4581b1[_0x1bab89(0x3a0)]===_0x4581b1['PCUuH']){var _0x1df6f5=0x4f*-0x4+0x1*0x1228+-0x10ec;for(var _0x11797a=-0xc5*0x2f+-0x1*0x53f+-0x296a*-0x1;_0x4581b1[_0x1bab89(0x2ca)](_0x11797a,_0x448865[_0x1bab89(0x476)+'h']);_0x11797a++){if(_0x4581b1['bQSRB'](_0x1bab89(0x45d),_0x4581b1[_0x1bab89(0x177)])){if(_0x448865[_0x11797a][_0x1bab89(0x2ec)]&&_0x448865[_0x11797a]['hook'][_0x1bab89(0x4a0)+'Index']!==undefined)_0x1df6f5++;}else return _0x561729['sourc'+'e']=_0x4581b1['gCHuu'],_0x1126ac;}return _0x1df6f5;}else return _0x285302['faile'+'d']++,_0x7f84f7[_0x1bab89(0x49a)+'rror']=_0x12d6df[_0x1bab89(0x49a)+_0x1bab89(0x47f)]||_0x4581b1[_0x1bab89(0x3f6)](_0x4581b1['RpibS'],_0x4d3354['toStr'+'ing'](-0x2*0x24d+0x9c3*-0x3+0xb51*0x3))+('\x20past'+_0x1bab89(0x445)+_0x1bab89(0x156)+'0x')+_0xe347c5[_0x1bab89(0x441)+'ength'][_0x1bab89(0x1eb)+'ing'](0x2f*0x61+0x16c2+-0x2881),_0x1bb001;}function _0x5296b5(){var _0x305b54=_0x434d03,_0x273131=0x4c2+0x1202+-0x16c4;for(var _0x16e3c7=0x1201+0x1351+0x232*-0x11;_0x16e3c7<_0x448865[_0x305b54(0x476)+'h'];_0x16e3c7++){if(_0x448865[_0x16e3c7][_0x305b54(0x2ec)]&&_0x448865[_0x16e3c7][_0x305b54(0x2ec)]['appli'+'ed'])_0x273131++;}return _0x273131;}var _0x126f74=null,_0x4b73b8=[],_0x211077=null;function _0x3e9129(_0x558053){var _0x48b777=_0x434d03;try{if(!_0x3cca4d||!_0x558053)return null;var _0x286d6a=new _0x3cca4d(_0x558053)[_0x48b777(0x13f)+_0x48b777(0x43d)+'me']();return _0x286d6a===undefined?null:_0x286d6a;}catch(_0x1804fd){return null;}}function _0x20dba6(){var _0x4bb20f=_0x434d03,_0x52f9ef={};_0x181dfb['ok']=0x4*0x5d9+0x2*0x1139+0xb*-0x542,_0x181dfb['faile'+'d']=0x2*-0x6b1+-0xe29*-0x2+-0x1de*0x8,_0x181dfb[_0x4bb20f(0x49a)+'rror']=null;var _0x4b1a44=Object[_0x4bb20f(0x4fa)](_0x16a99e);for(var _0x4eceaf=0x1de5+-0x22aa+0x1*0x4c5;_0x4eceaf<_0x4b1a44['lengt'+'h'];_0x4eceaf++){var _0x41acb1=_0x4b1a44[_0x4eceaf],_0x291f7e=_0x9948cb[_0x41acb1];if(!_0x291f7e||!_0x291f7e[_0x4bb20f(0x2b6)])continue;var _0x3206b1=_0x16a99e[_0x41acb1]||[],_0x2400a3=[];for(var _0x218fc5=-0x205*-0x7+0x23d1+-0x31f4;_0x218fc5<_0x3206b1['lengt'+'h'];_0x218fc5++){var _0x5ce67f=_0x3206b1[_0x218fc5][0x1d*0x112+-0x3d*-0x6b+-0x29*0x161],_0x4276d8=_0x3206b1[_0x218fc5][-0x1*0x13c+0x6*-0x44d+0x1b0b];if(_0x4276d8[_0x4bb20f(0x4ea)+'Of'](_0x4bb20f(0x1e4))===0x1*0x1b94+0x17d7+-0x336b){if(_0x4581b1['EHOEm']!==_0x4581b1['GEPui']){var _0x2cbbb3=_0xb73d65(_0x291f7e[_0x4bb20f(0x2b6)],_0x5ce67f,_0x4276d8);if(!_0x2cbbb3)continue;_0x2400a3['push']({'o':_0x5ce67f,'k':_0x4276d8,'v':_0x2cbbb3[_0x4bb20f(0x2b2)],'fake':_0x2cbbb3[_0x4bb20f(0x472)],'act':_0x2cbbb3[_0x4bb20f(0x224)],'inited':_0x2cbbb3[_0x4bb20f(0x4b4)],'raw':_0x4581b1['ocnFZ'](_0x4581b1[_0x4bb20f(0x2d3)]+_0x2cbbb3[_0x4bb20f(0x1a9)],_0x4bb20f(0x375))+_0x2cbbb3[_0x4bb20f(0x2bf)+'n']+('\x20fake'+'=')+_0x2cbbb3[_0x4bb20f(0x472)]+(_0x2cbbb3[_0x4bb20f(0x224)]?_0x4581b1['TDuwI']:'')});}else{var _0x5252bb=_0x363fa5['data'];if(!_0x5252bb||_0x5252bb[_0x4bb20f(0x187)+_0x4bb20f(0x329)]!==_0x5797e5)return;try{if(_0x4581b1[_0x4bb20f(0x29c)](_0x5252bb['kind'],'hello')){_0xf6f294()[_0x4bb20f(0x219)]({'host':_0x5252bb[_0x4bb20f(0x1cf)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x5252bb[_0x4bb20f(0x3b4)]===_0x4581b1[_0x4bb20f(0x16d)])_0x4581b1[_0x4bb20f(0x3f8)](_0x363e3c)['set'](_0x5252bb[_0x4bb20f(0x241)+'t']);}catch(_0x4aa52b){_0x1b3655[_0x4bb20f(0x1c8)](_0x4581b1['nGXPU'],_0x4581b1[_0x4bb20f(0x281)](_0x4bb20f(0x28b)+':',_0x4ab1be),_0x4aa52b);}}}else{var _0x2f3ab9=_0x260597(_0x291f7e['ptr']+_0x5ce67f,_0x4276d8);if(_0x2f3ab9===undefined)continue;_0x2400a3['push']({'o':_0x5ce67f,'k':_0x4276d8,'v':_0x2f3ab9,'raw':''});}}if(_0x2400a3['lengt'+'h'])_0x52f9ef[_0x41acb1]=_0x2400a3;}return _0x52f9ef;}function _0x3edcf0(){var _0x3fe9b7=_0x434d03;if(_0x4581b1[_0x3fe9b7(0x2c1)](_0x4581b1[_0x3fe9b7(0x229)],'iYDcS')){_0x471ca8[_0x3fe9b7(0x4e2)]='Runti'+_0x3fe9b7(0x15a)+_0x3fe9b7(0x384)+_0x3fe9b7(0x1d4)+'\x20unav'+'ailab'+'le';return;}else{var _0x283dec={};try{if(_0x3fe9b7(0x2fe)===_0x4581b1[_0x3fe9b7(0x290)])_0x6705dd=_0x4581b1['fGodh'](_0x4581b1[_0x3fe9b7(0x3f6)](_0x3fe9b7(0x439)+'ok\x20fi'+_0x3fe9b7(0x135)+'t\x20'+_0x4598af['hookF'+'irePr'+_0x3fe9b7(0x48e)]['atMs']+(_0x3fe9b7(0x19a)+_0x3fe9b7(0x223)+_0x3fe9b7(0x245)+_0x3fe9b7(0x158)+'=')+_0x3df33c[_0x3fe9b7(0x183)+'irePr'+'oof'][_0x3fe9b7(0x1a5)+'nalFu'+'nc']+_0x4581b1[_0x3fe9b7(0x459)],_0x492e28[_0x3fe9b7(0x183)+_0x3fe9b7(0x2b5)+_0x3fe9b7(0x48e)]['resol'+'veGam'+_0x3fe9b7(0x2d5)+'re']),_0x3fe9b7(0x4bf)+_0x3fe9b7(0x288))+(_0x145dcd[_0x3fe9b7(0x183)+_0x3fe9b7(0x2b5)+'oof'][_0x3fe9b7(0x4ab)+'ource'+_0x3fe9b7(0x258)+'e']||_0x3fe9b7(0x1bb))+_0x4581b1[_0x3fe9b7(0x453)];else{var _0x11ed0e=window['Unity'+_0x3fe9b7(0x370)+_0x3fe9b7(0x212)]&&window[_0x3fe9b7(0x44a)+_0x3fe9b7(0x370)+_0x3fe9b7(0x212)]['Runti'+'me'];_0x283dec[_0x3fe9b7(0x37a)]=_0x11ed0e&&_0x11ed0e['__sak'+'uraTa'+'g']||null,_0x283dec[_0x3fe9b7(0x19f)+'tches']=!!(_0x4581b1[_0x3fe9b7(0x4bb)](_0x11ed0e,_0x8413cf)&&_0x4581b1['VtWif'](_0x11ed0e[_0x3fe9b7(0x187)+_0x3fe9b7(0x12e)+'g'],_0x8413cf)),_0x283dec[_0x3fe9b7(0x328)+'meGam'+'e']=_0x11ed0e&&_0x11ed0e[_0x3fe9b7(0x3cb)]?typeof _0x11ed0e[_0x3fe9b7(0x3cb)]:_0x3fe9b7(0x1bb),_0x283dec['plugi'+_0x3fe9b7(0x311)+'imeIs'+'Expor'+'ted']=!!(_0x329bba&&_0x329bba['_runt'+_0x3fe9b7(0x141)]&&_0x4581b1['VtWif'](_0x329bba[_0x3fe9b7(0x488)+'ime'],_0x11ed0e)),_0x283dec[_0x3fe9b7(0x2f4)+_0x3fe9b7(0x311)+'imeGa'+'me']=_0x329bba&&_0x329bba['_runt'+'ime']&&_0x329bba['_runt'+'ime']['_game']?typeof _0x329bba['_runt'+_0x3fe9b7(0x141)]['_game']:_0x4581b1[_0x3fe9b7(0x1cc)];}}catch(_0x26b663){_0x283dec['error']=String(_0x26b663&&_0x26b663[_0x3fe9b7(0x1f6)+'ge']||_0x26b663);}return _0x283dec;}}function _0x525507(){var _0x1fbb2c=_0x434d03;if(_0x4581b1[_0x1fbb2c(0x275)]('yiDxA',_0x4581b1['qrQAs'])){var _0x1738eb=[_0x4581b1['LYokZ'],_0x1fbb2c(0x268)+_0x1fbb2c(0x44b),_0x4581b1['sozWh'],_0x4581b1[_0x1fbb2c(0x1bd)]],_0x2be126={};for(var _0x259d6d=-0x1*-0x567+-0x8e0*0x4+0x14f*0x17;_0x4581b1['tfBAB'](_0x259d6d,_0x1738eb[_0x1fbb2c(0x476)+'h']);_0x259d6d++){if(_0x1fbb2c(0x3ec)===_0x4581b1['fdvZZ'])_0x51b8c7['push'](_0x47127a['type']+':\x20'+_0x5e660a(_0x37c119&&_0x14fbb7['messa'+'ge']||_0x324f06)[_0x1fbb2c(0x20e)](-0x2027+0x1122+0xf05,-0xef5+-0x168+0x1*0x10fd));else{var _0x2eca4f=_0x1738eb[_0x259d6d],_0x139baa=typeof window[_0x2eca4f];_0x2be126[_0x2eca4f]=_0x139baa==='undef'+_0x1fbb2c(0x3aa)?_0x4581b1['qQEWu']:_0x139baa;}}var _0x5b4f5c=_0x58d870();_0x2be126['gameS'+'ource']=_0x181dfb[_0x1fbb2c(0x43e)+'e'];try{_0x2be126[_0x1fbb2c(0x38a)+'dule']=!!(_0x5b4f5c&&_0x5b4f5c[_0x1fbb2c(0x1a4)+'e']),_0x2be126[_0x1fbb2c(0x289)+'8']=!!(_0x5b4f5c&&_0x5b4f5c['Modul'+'e']&&_0x5b4f5c['Modul'+'e'][_0x1fbb2c(0x1f5)+'8']),_0x2be126[_0x1fbb2c(0x317)+'ytes']=_0x2be126['heapU'+'8']?_0x5b4f5c[_0x1fbb2c(0x1a4)+'e']['HEAPU'+'8'][_0x1fbb2c(0x476)+'h']:0x25*-0x4f+-0xb01+0x47c*0x5;}catch(_0x86c0e0){_0x2be126['hasMo'+'dule']=![],_0x2be126[_0x1fbb2c(0x289)+'8']=![],_0x2be126[_0x1fbb2c(0x317)+'ytes']=0x6*0x217+0x3c+-0xcc6;}return _0x2be126[_0x1fbb2c(0x4a8)+_0x1fbb2c(0x4eb)+'er']=typeof _0x3cca4d,_0x2be126;}else return _0x382aed[0x38a*0xa+0x3*0x769+-0x21*0x1bf]=_0xa2db96,_0x3cf1a6[0x1*0xdfd+0x6e6*0x1+-0x14e3];}function _0x3aa108(_0x1478c5){var _0x5652a5=_0x434d03,_0x223433={};for(var _0x4d720b in _0x1478c5){var _0x4c0ded=_0x1478c5[_0x4d720b];for(var _0x3e45d3=0x7e+0x117f*0x2+-0x2*0x11be;_0x4581b1['tfBAB'](_0x3e45d3,_0x4c0ded[_0x5652a5(0x476)+'h']);_0x3e45d3++){_0x223433[_0x4d720b+'+0x'+_0x4c0ded[_0x3e45d3]['o'][_0x5652a5(0x1eb)+'ing'](0x2*-0x18b+-0x9a5*0x1+0x1*0xccb)]=_0x4c0ded[_0x3e45d3]['v'];}}return _0x223433;}function _0x50e104(_0x2ab9fb){var _0x28e9f2=_0x434d03,_0x29200f={'XVedP':function(_0x34f2bd,_0x488196){return _0x34f2bd-_0x488196;},'ekLrr':function(_0x51f46a,_0x41547c){return _0x51f46a(_0x41547c);}};if(_0x28e9f2(0x254)!==_0x4581b1[_0x28e9f2(0x243)])return{'version':_0x283d01,'when':new _0x24387f()[_0x28e9f2(0x348)+_0x28e9f2(0x3a6)+'g'](),'elapsedMs':_0x29200f[_0x28e9f2(0x104)](_0x3e7d35['now'](),_0x73fdc2),'host':_0x4aae98,'uwmk':!!(_0x215f90[_0x28e9f2(0x44a)+_0x28e9f2(0x370)+_0x28e9f2(0x212)]&&_0xe97f5a[_0x28e9f2(0x44a)+_0x28e9f2(0x370)+'dkit']['Runti'+'me']),'il2CppContext':![],'arm':_0x466f69,'hooksTotal':_0x582093[_0x28e9f2(0x476)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x29200f['ekLrr'](_0x599062,_0x2d6d4b&&_0x5dfad8['messa'+'ge']||_0x59ab68)};else{var _0x1ff345=(_0x28e9f2(0x124)+'|0|5|'+_0x28e9f2(0x47c))[_0x28e9f2(0x3c4)]('|'),_0x48aadb=-0x111a*0x2+0x1c49+0x5eb;while(!![]){switch(_0x1ff345[_0x48aadb++]){case'0':if(!_0x126f74){_0x126f74=_0x4e54fb,_0x4b73b8=[],_0x2aad18(_0x4581b1[_0x28e9f2(0x16d)],{'report':_0x4581b1['cgxGK'](_0x32f4fe)});return;}continue;case'1':for(var _0xfc6f2c in _0x4e54fb){var _0x18ca0b=_0x126f74[_0xfc6f2c],_0x1bbb82=_0x4e54fb[_0xfc6f2c];if(_0x18ca0b!==_0x1bbb82)_0x4b73b8[_0x28e9f2(0x318)](_0xfc6f2c+':\x20'+_0x18ca0b+_0x4581b1['yYXxT']+_0x1bbb82);}continue;case'2':if(_0x4581b1[_0x28e9f2(0x204)](_0x2ab9fb,'snaps'+_0x28e9f2(0x3c9)))return;continue;case'3':var _0x4e54fb=_0x4581b1[_0x28e9f2(0x2d9)](_0x3aa108,_0x44f1ac);continue;case'4':_0x126f74=_0x4e54fb;continue;case'5':_0x4b73b8=[];continue;case'6':_0x2aad18(_0x28e9f2(0x241)+'t',{'report':_0x32f4fe()});continue;case'7':var _0x44f1ac=_0x20dba6();continue;}break;}}}window[_0x434d03(0x2af)+'entLi'+_0x434d03(0x33b)+'r'](_0x434d03(0x211)+'wn',function(_0x62e86f){var _0x18732e=_0x434d03,_0x44e4c1={'SMvLk':_0x4581b1[_0x18732e(0x3d6)]};_0x62e86f&&_0x62e86f['code']==='F9'&&(_0x4581b1['oMLbq'](_0x4581b1[_0x18732e(0x2db)],_0x4581b1[_0x18732e(0x4ca)])?_0x260379['defin'+_0x18732e(0x12f)+_0x18732e(0x109)](_0xa64375,_0x44e4c1[_0x18732e(0x454)],{'value':_0x4e9ddd['name'],'configurable':!![]}):(_0x62e86f['preve'+_0x18732e(0x3a9)+_0x18732e(0x146)](),_0x4581b1['PYeDl'](_0x50e104,'snaps'+_0x18732e(0x3c9))));},!![]);function _0x32f4fe(){var _0x54e3b4=_0x434d03,_0x2b5d91={'CODDM':function(_0x53f90f,_0x48046c){return _0x53f90f!==_0x48046c;},'SrRMc':function(_0x3b31e2){return _0x3b31e2();},'EuhLy':'%c[sa'+_0x54e3b4(0x2d4)+'\x20pane'+'l\x20dis'+'abled'};if(_0x4581b1[_0x54e3b4(0x42d)]!==_0x54e3b4(0x45f))_0x43354a[_0x54e3b4(0x2d0)+_0x54e3b4(0x4b5)][_0x54e3b4(0x318)](_0x4581b1[_0x54e3b4(0x33e)](_0x4581b1['qJWtq'](_0x4581b1['oaKYX'](_0x4581b1['hQlwx'](_0x4581b1['bKEmA'](_0x54e3b4(0x208)+_0x54e3b4(0x11f)+_0x54e3b4(0x4d2),_0x3d3400['hooks'+_0x54e3b4(0x315)+_0x54e3b4(0x21a)]),_0x54e3b4(0x462)),_0x5951e4[_0x54e3b4(0x13d)+'Total']),_0x4581b1['neTNw']),_0x4581b1[_0x54e3b4(0x4c9)]));else{var _0x224fc6=window[_0x54e3b4(0x44a)+'WebMo'+_0x54e3b4(0x212)]&&window[_0x54e3b4(0x44a)+'WebMo'+_0x54e3b4(0x212)]['Runti'+'me']||null,_0x31e735=_0x224fc6&&_0x224fc6['il2Cp'+'pCont'+'ext'],_0x5befb1=_0x31e735&&_0x31e735[_0x54e3b4(0x37f)+_0x54e3b4(0x468)],_0x5241e7={},_0x3dd9ae=[];for(var _0x56c8ef in _0x9948cb){if(_0x54e3b4(0x25d)==='QyxeV'){_0x5241e7[_0x56c8ef]='0x'+_0x9948cb[_0x56c8ef]['ptr'][_0x54e3b4(0x1eb)+_0x54e3b4(0x19e)](-0xfb1+0x15e1+-0x620);if(_0x9948cb[_0x56c8ef]['repla'+_0x54e3b4(0x33a)])_0x3dd9ae['push'](_0x56c8ef);}else{if(_0x4b026c['paren'+'t']&&_0x2b5d91[_0x54e3b4(0x49e)](_0x51549a[_0x54e3b4(0x406)+'t'],_0x49b39d))_0x38328c['paren'+'t'][_0x54e3b4(0x2ee)+_0x54e3b4(0x388)+'e'](_0x544077,'*');if(_0x5aaf30['top']&&_0x2b5d91[_0x54e3b4(0x49e)](_0x8030ca[_0x54e3b4(0x195)],_0xbdf60f))_0x1445e8['top']['postM'+_0x54e3b4(0x388)+'e'](_0x4e8254,'*');}}var _0x3bf6f0={};for(var _0x4b3b82 in _0x9948cb)_0x3bf6f0[_0x4b3b82]=_0x3e9129(_0x9948cb[_0x4b3b82]['ptr']);var _0x49a2a7={},_0x17c265=null;try{_0x4581b1[_0x54e3b4(0x178)]!==_0x54e3b4(0x499)?_0x49a2a7=_0x20dba6():_0x4ea96d[_0x54e3b4(0x2d0)+_0x54e3b4(0x4b5)]['push'](_0x4581b1[_0x54e3b4(0x3cf)](_0x54e3b4(0x34c)+_0x54e3b4(0x24d)+_0x54e3b4(0x461)+'irst\x20'+_0x54e3b4(0x127)+_0x54e3b4(0x3c0)+_0x54e3b4(0x309)+_0x54e3b4(0x164),_0x5c0e37['insta'+'ncesR'+'eplac'+'ed']['join'](',\x20')));}catch(_0x32468e){if('zzGav'!==_0x54e3b4(0x189))try{_0x2b1986['hook'][_0x54e3b4(0x366)+'ed']=![];}catch(_0x568c6f){}else _0x17c265=String(_0x32468e&&_0x32468e['messa'+'ge']||_0x32468e);}var _0x2ea344={'version':_0x39eb8c,'when':new Date()[_0x54e3b4(0x348)+'Strin'+'g'](),'elapsedMs':Date[_0x54e3b4(0x20f)]()-_0x4b5b08,'frame':location['href'][_0x54e3b4(0x20e)](-0x22c4+-0x142*-0x19+0x32*0x11,0x2*0x1235+-0xdf1+-0x1*0x1601),'host':_0x40c2d0,'frameRole':_0x331bc3,'uwmk':!!_0x224fc6,'il2CppContext':!!_0x31e735,'typeCount':_0x5befb1?Object[_0x54e3b4(0x4fa)](_0x5befb1)['lengt'+'h']:null,'arm':_0x191d95,'assemblies':_0xc37ee4,'hooksTotal':_0x448865[_0x54e3b4(0x476)+'h'],'hooksApplied':_0x4581b1['XkOKO'](_0x5296b5),'hooksResolved':_0xfd5e96(),'hooksRegisteredAtArm':_0x191d95[_0x54e3b4(0x13d)+_0x54e3b4(0x16e)+'tered']||0x29*-0xe5+0x23ab+0x102,'hookErrors':_0x46932c['slice'](-0x1841+0x41*0x29+-0x6ec*-0x2,-0x2*-0x468+0x976+-0x123e),'instances':_0x5241e7,'classNames':_0x3bf6f0,'instancesReplaced':_0x3dd9ae,'hookFireProof':_0x211077,'survey':_0x49a2a7,'surveyRows':Object[_0x54e3b4(0x4fa)](_0x49a2a7)['reduc'+'e'](function(_0x4fb6b1,_0x1610ea){var _0x28eb6d=_0x54e3b4;if('URqvC'!==_0x28eb6d(0x347)){if(_0x31d4ae[_0x2bfd29][_0x28eb6d(0x2ec)]&&_0x21538c[_0x3e7677][_0x28eb6d(0x2ec)][_0x28eb6d(0x312)+'ed'])_0x5250bb++;}else return _0x4581b1[_0x28eb6d(0x23c)](_0x4fb6b1,_0x49a2a7[_0x1610ea][_0x28eb6d(0x476)+'h']);},-0x7*0x179+-0x2*-0x471+0x16d),'reads':{'ok':_0x181dfb['ok'],'failed':_0x181dfb[_0x54e3b4(0x1e2)+'d'],'lastError':_0x181dfb['lastE'+_0x54e3b4(0x47f)],'source':_0x181dfb['sourc'+'e']},'identity':_0x4581b1['cgxGK'](_0x3edcf0),'globals':_0x525507(),'wasmMemory':{'captured':!!_0x42d21a,'atMs':_0x55d141,'bytes':(function(){var _0x39831b=_0x54e3b4,_0xa5ca18={'TCTkE':_0x4581b1[_0x39831b(0x1ac)],'dDmwP':function(_0x39e21f){return _0x39e21f();},'LyRVo':_0x4581b1[_0x39831b(0x16d)],'MyfKU':function(_0x4888ef){return _0x4888ef();},'RJaRx':function(_0x615b1c,_0x31e206){return _0x4581b1['OujDp'](_0x615b1c,_0x31e206);}};try{return _0x42d21a&&_0x42d21a['buffe'+'r']?_0x42d21a['buffe'+'r'][_0x39831b(0x441)+'ength']:0x957+-0x276+-0x6e1;}catch(_0x14bc93){if(_0x39831b(0x31d)===_0x4581b1[_0x39831b(0x2bb)])return 0x1*-0x2471+-0x25b*0xa+0x3bff;else{if(_0x5b9fd9!==_0xa5ca18['TCTkE'])return;var _0x1b7593=_0xa5ca18['dDmwP'](_0x18d173),_0x4c2c04=_0x1cabe8(_0x1b7593);if(!_0x15bb33){_0x3f0896=_0x4c2c04,_0x3f841e=[],_0x4de64c(_0xa5ca18[_0x39831b(0x313)],{'report':_0xa5ca18[_0x39831b(0x1b8)](_0x42d989)});return;}_0x48a2c6=[];for(var _0x2f77f6 in _0x4c2c04){var _0x56019f=_0x3f2213[_0x2f77f6],_0x8f6ebb=_0x4c2c04[_0x2f77f6];if(_0xa5ca18['RJaRx'](_0x56019f,_0x8f6ebb))_0x4f867a[_0x39831b(0x318)](_0x2f77f6+':\x20'+_0x56019f+'\x20->\x20'+_0x8f6ebb);}_0x25893d=_0x4c2c04,_0x18798a(_0x39831b(0x241)+'t',{'report':_0x2b04c2()});}}}()),'exportKeys':_0x1cf660},'diff':_0x4b73b8[_0x54e3b4(0x20e)](-0xa11+-0x231f+0x2d30,-0x13*-0xaf+-0x338*0x9+0x1023),'uwmkLog':_0x149a0e[_0x54e3b4(0x20e)](0x7a2+0x1845+-0x1fe7,-0x1*-0x38f+-0x23bb+-0x2b0*-0xc),'warnings':[]};if(_0x17c265)_0x2ea344['warni'+_0x54e3b4(0x4b5)][_0x54e3b4(0x318)]('surve'+'y\x20fai'+'led:\x20'+_0x17c265);if(_0x191d95[_0x54e3b4(0x4e2)])_0x2ea344[_0x54e3b4(0x2d0)+_0x54e3b4(0x4b5)][_0x54e3b4(0x318)](_0x54e3b4(0x208)+_0x54e3b4(0x4a3)+'g\x20fai'+_0x54e3b4(0x3f0)+_0x191d95['error']);_0x2ea344[_0x54e3b4(0x480)+'yRows']===-0xce+-0x1fa6+0x10c*0x1f&&_0x4581b1['odAgM'](Object['keys'](_0x2ea344[_0x54e3b4(0x28d)+_0x54e3b4(0x475)])['lengt'+'h'],0x1a3f+-0x86*-0x48+-0x3fef)&&_0x2ea344[_0x54e3b4(0x2d0)+'ngs']['push'](_0x4581b1[_0x54e3b4(0x29f)](_0x54e3b4(0x127)+'red\x20'+Object['keys'](_0x2ea344[_0x54e3b4(0x28d)+'nces'])['lengt'+'h']+('\x20obje'+'ct(s)'+_0x54e3b4(0x1bc)+_0x54e3b4(0x4c1)+_0x54e3b4(0x125)+'lds.\x20'),_0x181dfb[_0x54e3b4(0x49a)+'rror']?_0x4581b1['FZkYH'](_0x4581b1[_0x54e3b4(0x247)],_0x181dfb[_0x54e3b4(0x49a)+'rror']):_0x54e3b4(0x279)+_0x54e3b4(0x173)+_0x54e3b4(0x239)+_0x54e3b4(0x2ed)+'very\x20'+_0x54e3b4(0x1ab)+'t\x20was'+_0x54e3b4(0x4cb)+_0x54e3b4(0x36d)+_0x54e3b4(0x2a4)+'e.'));_0x2ea344[_0x54e3b4(0x218)+_0x54e3b4(0x30e)]&&_0x2ea344[_0x54e3b4(0x218)+'ity'][_0x54e3b4(0x19f)+_0x54e3b4(0x464)]===![]&&_0x2ea344['warni'+'ngs']['push'](_0x4581b1[_0x54e3b4(0x174)](_0x4581b1['wQulV'],'repla'+_0x54e3b4(0x484)+_0x54e3b4(0x483)+_0x54e3b4(0x4fb)+'ent\x20i'+_0x54e3b4(0x144)+_0x54e3b4(0x435)+'o\x20we\x20'+_0x54e3b4(0x222)+'sking'+'\x20the\x20'+'wrong'+_0x54e3b4(0x48b)+_0x54e3b4(0x296)+'r\x20')+('the\x20g'+_0x54e3b4(0x3bd)+_0x54e3b4(0x337)+_0x54e3b4(0x143)+_0x54e3b4(0x3cd)+'lding'+'\x20it\x20i'+_0x54e3b4(0x180)+_0x54e3b4(0x286)+'.\x20Dis'+_0x54e3b4(0x4d8)+_0x54e3b4(0x194)+_0x54e3b4(0x1cb)+'r\x20')+(_0x54e3b4(0x334)+'a/UWM'+'K\x20scr'+_0x54e3b4(0x1db)+_0x54e3b4(0x4a2)+'permo'+_0x54e3b4(0x44e)+'and\x20h'+_0x54e3b4(0x430)+_0x54e3b4(0x2cf)+'.'));_0x2ea344[_0x54e3b4(0x218)+_0x54e3b4(0x30e)]&&_0x4581b1['fHZXk'](_0x2ea344['ident'+_0x54e3b4(0x30e)]['plugi'+'nRunt'+_0x54e3b4(0x128)+_0x54e3b4(0x365)+_0x54e3b4(0x3c1)],![])&&_0x2ea344[_0x54e3b4(0x2d0)+'ngs'][_0x54e3b4(0x318)](_0x54e3b4(0x2f4)+'n._ru'+_0x54e3b4(0x278)+_0x54e3b4(0x13a)+'ot\x20wi'+_0x54e3b4(0x1f8)+'Unity'+'WebMo'+'dkit.'+_0x54e3b4(0x2d7)+_0x54e3b4(0x18f)+_0x54e3b4(0x298)+_0x54e3b4(0x1d4)+_0x54e3b4(0x154)+_0x54e3b4(0x4b1)+'\x20'+(_0x54e3b4(0x1c9)+'st\x20a\x20'+_0x54e3b4(0x2a7)+_0x54e3b4(0x46d)+_0x54e3b4(0x2d7)+_0x54e3b4(0x36c)+'stanc'+_0x54e3b4(0x3f7)+_0x54e3b4(0x2d6)+'\x20glob'+_0x54e3b4(0x167)+'w\x20exp'+_0x54e3b4(0x266)));if(_0x2ea344[_0x54e3b4(0x3dd)+'ls']&&!_0x2ea344[_0x54e3b4(0x3dd)+'ls'][_0x54e3b4(0x289)+'8']){if(_0x4581b1[_0x54e3b4(0x417)]==='xFYEo')try{_0x5c9959[_0x54e3b4(0x45b)]();}catch(_0x28a69e){}else{var _0x2be00f='';_0x2ea344['hookF'+_0x54e3b4(0x2b5)+_0x54e3b4(0x48e)]&&(_0x2be00f=_0x4581b1['uBoiJ'](_0x4581b1[_0x54e3b4(0x33e)](_0x4581b1[_0x54e3b4(0x359)](_0x4581b1[_0x54e3b4(0x37e)]('\x20A\x20ho'+_0x54e3b4(0x22b)+'red\x20a'+'t\x20'+_0x2ea344[_0x54e3b4(0x183)+'irePr'+'oof'][_0x54e3b4(0x10d)],_0x4581b1['ZjTlT'])+_0x2ea344['hookF'+'irePr'+_0x54e3b4(0x48e)]['origi'+'nalFu'+'nc']+_0x4581b1[_0x54e3b4(0x459)],_0x2ea344['hookF'+'irePr'+_0x54e3b4(0x48e)]['resol'+_0x54e3b4(0x20c)+'eAtFi'+'re']),'\x20(sou'+_0x54e3b4(0x288)),_0x2ea344[_0x54e3b4(0x183)+'irePr'+_0x54e3b4(0x48e)][_0x54e3b4(0x4ab)+_0x54e3b4(0x41f)+_0x54e3b4(0x258)+'e']||_0x4581b1[_0x54e3b4(0x1cc)])+('),\x20so'+'\x20the\x20'+'refer'+'ence\x20'+_0x54e3b4(0x3b8)+_0x54e3b4(0x130)+'en\x20an'+_0x54e3b4(0x236)+_0x54e3b4(0x249)+'eacha'+'ble\x20n'+_0x54e3b4(0x3c2))),_0x2ea344[_0x54e3b4(0x2d0)+'ngs']['push'](_0x4581b1[_0x54e3b4(0x174)](_0x4581b1[_0x54e3b4(0x11e)](_0x4581b1['cqViN'](_0x4581b1['kCikr'](_0x54e3b4(0x44a)+'\x20inst'+'ance\x20'+'not\x20r'+_0x54e3b4(0x4ee)+'ed\x20ye'+'t\x20(so'+'urce:'+'\x20',_0x2ea344[_0x54e3b4(0x3dd)+'ls'][_0x54e3b4(0x4ab)+'ource']||_0x54e3b4(0x1bb)),').\x20'),_0x54e3b4(0x3a3)+'reads'+_0x54e3b4(0x1ef)+_0x54e3b4(0x217)+_0x54e3b4(0x4a5)+'ntil\x20'+_0x54e3b4(0x1fa)+_0x54e3b4(0x1f3)+_0x54e3b4(0x4c4)+'ith\x20M'+'odule'+_0x54e3b4(0x2f2)+_0x54e3b4(0x3ab)+'\x20reac'+_0x54e3b4(0x294)+'.'),_0x2be00f));}}(_0x2ea344[_0x54e3b4(0x3dd)+'ls']&&!_0x2ea344[_0x54e3b4(0x3dd)+'ls']['value'+_0x54e3b4(0x4eb)+'er']||_0x4581b1['VtWif'](_0x2ea344['globa'+'ls'][_0x54e3b4(0x4a8)+'Wrapp'+'er'],_0x54e3b4(0x3fe)+_0x54e3b4(0x3aa)))&&_0x2ea344[_0x54e3b4(0x2d0)+'ngs']['push'](_0x4581b1[_0x54e3b4(0x2e1)]);_0x4581b1[_0x54e3b4(0x361)](_0x2ea344['hooks'+_0x54e3b4(0x31f)],-0x1*-0x29c+0x38d+-0x629)&&_0x2ea344[_0x54e3b4(0x13d)+'Appli'+'ed']===0x184e+0x3*0x4d6+-0x26d0&&_0x5befb1&&(_0x2ea344[_0x54e3b4(0x13d)+_0x54e3b4(0x315)+'ved']===-0x228f+-0x16e1+-0x8*-0x72e?_0x2ea344[_0x54e3b4(0x2d0)+_0x54e3b4(0x4b5)]['push'](_0x4581b1[_0x54e3b4(0x45c)](_0x4581b1['Nnvrb']('0\x20of\x20'+_0x2ea344['hooks'+_0x54e3b4(0x31f)]+_0x4581b1[_0x54e3b4(0x440)],_0x54e3b4(0x2b0)+_0x54e3b4(0x4d9)+_0x54e3b4(0x401)+'g\x20Web'+'Assem'+'bly.i'+'nstan'+_0x54e3b4(0x362)+_0x54e3b4(0x15e)+_0x54e3b4(0x3db)+_0x54e3b4(0x3d3)+'plugi'+_0x54e3b4(0x4f2)+'ks.le'+'ngth,'+'\x20')+('so\x20ho'+'oks\x20r'+'egist'+_0x54e3b4(0x2d8)+_0x54e3b4(0x155)+_0x54e3b4(0x4c6)+_0x54e3b4(0x3e6)+_0x54e3b4(0x44c)+'\x20for\x20'+_0x54e3b4(0x1ee)+_0x54e3b4(0x1c4)+_0x54e3b4(0x2fb)+_0x54e3b4(0x413)+'.\x20'),_0x54e3b4(0x16e)+'tered'+'\x20')+_0x2ea344[_0x54e3b4(0x13d)+'Regis'+_0x54e3b4(0x4a4)+_0x54e3b4(0x168)]+_0x4581b1['BqwbZ']):_0x2ea344['warni'+_0x54e3b4(0x4b5)][_0x54e3b4(0x318)](_0x4581b1[_0x54e3b4(0x38c)](_0x4581b1['cqViN'](_0x4581b1['FXCam'],_0x2ea344[_0x54e3b4(0x13d)+_0x54e3b4(0x315)+_0x54e3b4(0x21a)])+_0x54e3b4(0x462),_0x2ea344['hooks'+'Total'])+('\x20hook'+'(s)\x20t'+_0x54e3b4(0x482)+_0x54e3b4(0x4d8)+_0x54e3b4(0x4ea)+'\x20but\x20'+'appli'+_0x54e3b4(0x38d)+_0x54e3b4(0x4f4)+_0x54e3b4(0x232)+'gnatu'+_0x54e3b4(0x283))+_0x4581b1[_0x54e3b4(0x4c9)]));_0x4581b1[_0x54e3b4(0x361)](_0x2ea344[_0x54e3b4(0x13d)+_0x54e3b4(0x262)+'ed'],-0x1*0x1048+-0x302+0x9a5*0x2)&&!_0x2ea344['insta'+'nces'][_0x54e3b4(0x422)+_0x54e3b4(0x1aa)+_0x54e3b4(0x4b7)]&&_0x2ea344['warni'+_0x54e3b4(0x4b5)]['push'](_0x4581b1[_0x54e3b4(0x1d6)](_0x54e3b4(0x356)+_0x54e3b4(0x2f5)+_0x54e3b4(0x312)+_0x54e3b4(0x3a2)+_0x54e3b4(0x332)+_0x54e3b4(0x422)+_0x54e3b4(0x1aa)+_0x54e3b4(0x19d)+_0x54e3b4(0x24b)+'red\x20y'+_0x54e3b4(0x105),_0x54e3b4(0x4aa)+'r\x20you'+_0x54e3b4(0x2f5)+_0x54e3b4(0x2b3)+'n\x20a\x20r'+'ound,'+_0x54e3b4(0x2a8)+_0x54e3b4(0x11a)+_0x54e3b4(0x3f3)+_0x54e3b4(0x493)+_0x54e3b4(0x15b)+_0x54e3b4(0x2a3)+_0x54e3b4(0x41d)+_0x54e3b4(0x3bc)));if(_0x2ea344['insta'+'ncesR'+'eplac'+'ed']['lengt'+'h']){if(_0x4581b1['iHvjL']===_0x54e3b4(0x3e4)){var _0x36171b=_0x2b5d91['SrRMc'](_0x3c77fc);if(!_0x36171b)return _0x4306c7;if(_0x36171b[_0x54e3b4(0x2ce)+'et']['api'])return _0x36171b['api'];try{return _0x34c889(_0x36171b);}catch(_0x2467e7){return _0x36171b[_0x54e3b4(0x2ce)+'et']['api']='1',_0x36171b[_0x54e3b4(0x237)]=_0x5c5e9,_0x3845ca['warn'](_0x2b5d91['EuhLy'],_0x54e3b4(0x28b)+':'+_0x1e7b99,_0x2467e7),_0x1a50dc;}}else _0x2ea344['warni'+_0x54e3b4(0x4b5)][_0x54e3b4(0x318)](_0x4581b1['RjiCq']('rebui'+'lt\x20si'+_0x54e3b4(0x461)+'irst\x20'+_0x54e3b4(0x127)+_0x54e3b4(0x3c0)+'espaw'+_0x54e3b4(0x164),_0x2ea344['insta'+_0x54e3b4(0x2e8)+_0x54e3b4(0x30b)+'ed'][_0x54e3b4(0x271)](',\x20')));}return _0x2ea344;}}function _0x59dfe3(_0x252a67){var _0x4770b2=_0x434d03;console[_0x4770b2(0x40a)]('%c[sa'+_0x4770b2(0x2d4)+'\x20Skil'+'lWarz'+'\x20repo'+'rt',_0x4581b1['ShZpp'](_0x4581b1[_0x4770b2(0x349)],_0x262573)+(';font'+_0x4770b2(0x126)+_0x4770b2(0x115)+'0'),_0x252a67),console['log'](_0x4581b1['SAVFj'](_0x4581b1['AytEm'](_0x4581b1[_0x4770b2(0x46b)](_0x4581b1[_0x4770b2(0x460)](_0xd571d4,'\x0a'),JSON['strin'+'gify'](_0x252a67,null,0x1*0x20ed+0xb3*-0x10+0x15bc*-0x1)),'\x0a'),_0x9d52d0)),_0x4581b1['lKvFW'](_0x2aad18,_0x4581b1[_0x4770b2(0x16d)],{'report':_0x252a67});}function _0x16c0db(){var _0x3f980c=_0x434d03;try{return _0x32f4fe();}catch(_0x11a56f){return{'version':_0x39eb8c,'when':new Date()[_0x3f980c(0x348)+_0x3f980c(0x3a6)+'g'](),'elapsedMs':Date['now']()-_0x4b5b08,'host':_0x40c2d0,'uwmk':!!(window['Unity'+'WebMo'+_0x3f980c(0x212)]&&window['Unity'+'WebMo'+_0x3f980c(0x212)][_0x3f980c(0x2d7)+'me']),'il2CppContext':![],'arm':_0x191d95,'hooksTotal':_0x448865['lengt'+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x4581b1['StJdf'](String,_0x11a56f&&_0x11a56f['messa'+'ge']||_0x11a56f)};}}function _0x40414d(){var _0x45b9e8=0xf10*0x1+0x2ca*0x9+-0xc2*0x35;_0x59dfe3(_0x16c0db()),function _0x1e9e75(){var _0x15b618=_0x31c3;if('BHhMq'===_0x15b618(0x3b9)){if(!_0x448865[_0x15b618(0x476)+'h'])try{_0x51cbda();}catch(_0x1410c1){}_0x45b9e8++,_0x59dfe3(_0x16c0db());if(!_0x448865['lengt'+'h']&&_0x45b9e8<0x1623+-0x12fc+-0x1fb)_0x4581b1['sXSOa'](setTimeout,_0x1e9e75,0x12*0x15f+0x126b+0x3*-0xbc3);else{if(!Object[_0x15b618(0x4fa)](_0x9948cb)['lengt'+'h']&&_0x45b9e8<-0x24a2+0x3dd+0x21f1)_0x4581b1[_0x15b618(0x4de)](setTimeout,_0x1e9e75,0x46f+0xb27+-0x7c6);else setTimeout(_0x1e9e75,-0xf6d*0x1+-0x224f*0x1+0x366c);}}else{var _0x46853f=_0x39263e['resol'+'veGam'+'e']();if(_0x46853f)return _0x2a7b62[_0x15b618(0x43e)+'e']='plugi'+_0x15b618(0x3ce)+'ntime'+_0x15b618(0x31a)+_0x15b618(0x270)+_0x15b618(0x2b7),_0x46853f;}}();}if(document[_0x434d03(0x230)])_0x40414d();else document[_0x434d03(0x2af)+'entLi'+'stene'+'r'](_0x4581b1[_0x434d03(0x19b)],_0x40414d,{'once':!![]});})()));function _0x31c3(_0x2cb542,_0x4b026c){_0x2cb542=_0x2cb542-(0x1a10+-0x1f4d*-0x1+-0x1c2e*0x2);var _0x51549a=_0x2502();var _0x49b39d=_0x51549a[_0x2cb542];if(_0x31c3['KWhmws']===undefined){var _0x38328c=function(_0xbdf60f){var _0x1445e8='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x4e8254='',_0x12c0b2='';for(var _0x26171f=-0x539*-0x1+-0xc19+0x6e0,_0x193180,_0x29f87d,_0x1af8b1=-0x15d7+-0x1*0xc22+0x21f9;_0x29f87d=_0xbdf60f['charAt'](_0x1af8b1++);~_0x29f87d&&(_0x193180=_0x26171f%(-0x18b2+0x8*-0x448+0x1d7b*0x2)?_0x193180*(-0x1*-0x5d1+-0x3e9*0x5+-0x6fe*-0x2)+_0x29f87d:_0x29f87d,_0x26171f++%(0x3*-0x959+-0x5*0x57d+0x3780))?_0x4e8254+=String['fromCharCode'](0x1*0xe21+-0x1*0x8ac+-0x476*0x1&_0x193180>>(-(0x38f*-0x9+0x1b6f*0x1+0x49a)*_0x26171f&-0x1af6+-0x1*-0x757+0x13a5)):-0x51*0x13+-0x1eb6*-0x1+-0x18b3){_0x29f87d=_0x1445e8['indexOf'](_0x29f87d);}for(var _0x2d86f3=0xe5*0x21+-0x19ae+-0x3d7,_0x188ad8=_0x4e8254['length'];_0x2d86f3<_0x188ad8;_0x2d86f3++){_0x12c0b2+='%'+('00'+_0x4e8254['charCodeAt'](_0x2d86f3)['toString'](-0xb86+-0x3*-0x4ef+-0x337))['slice'](-(-0x2178+0x139*0x1f+-0x46d));}return decodeURIComponent(_0x12c0b2);};_0x31c3['qDPuJs']=_0x38328c,_0x31c3['VlpRxm']={},_0x31c3['KWhmws']=!![];}var _0x544077=_0x51549a[0x17ae+0x81*0x7+-0x1b35],_0x5aaf30=_0x2cb542+_0x544077,_0x8030ca=_0x31c3['VlpRxm'][_0x5aaf30];return!_0x8030ca?(_0x49b39d=_0x31c3['qDPuJs'](_0x49b39d),_0x31c3['VlpRxm'][_0x5aaf30]=_0x49b39d):_0x49b39d=_0x8030ca,_0x49b39d;}function _0x2502(){var _0x26be0=['BfDHCNO','y0LUChu','yuH6vg8','q09ere0','rK1ltNC','DgfIBgu','CgXHEwu','BIbuyw0','yxjTAw4','DgvYzwq','A2vKihu','s3vLA2m','Dde2','DMfSDwu','Aw50iIa','rwL0Agu','z2fTzvm','CdO2ChG','zgLMzG','iJ5dB3a','zZOXmha','ywrKAw4','yNvPBhq','wxL3twW','ifbpuLq','Aw5PDa','BMDZ','sgvHBhq','BgvY','yxrJAc4','qxfhqLK','nhW3Fdi','A1LwsgO','txPUsKi','tg9Hzgu','zxHLy0m','icHZB3u','r1PHy0K','CMvHzca','zwz0oMe','z25hB3a','zwn0ihC','nhb4ide','igL0ige','zhjVrwO','DcbIzwu','yNnttxa','DNLND1i','ihnRAxa','lc40ktS','BIbtruu','B24GDgG','zsbLDMu','BMnLv3i','ChrLza','DMvKia','zenOAwW','AtmY','AxmGD2G','EtPUB24','BMv2zxi','ywjSzsa','B25Jzsa','rJKPpc8','sKjxrhC','BJOWo3a','EvPWsfm','y0XUq1K','lxDYyxa','wvv4Ehe','i2zMyJm','zxjYB3i','lxGIihm','r0vqyw8','Bcb1Cgq','CMfTzs4','D3jPDgu','yNv0Dg8','su5HDuC','Aw5KzxG','v3jHCha','zEkaPJWVCW','sKXSsuW','zxnVBhy','zgf0yq','A2LUzYa','zwfJAge','BI5OB28','B3v0','BMuUifq','svzHrw4','AMHLAfO','z2v0vwK','BM8GBgK','ifnxlvC','A2v5CW','AwzMzxi','v19F','D2fSA2K','Bw9YEvq','Du12y2e','o3DVCMq','CNnJCMK','wfzLzfa','zxqUia','ihzPysa','BcWk','uxvZBeG','zxj0Eq','lJe4ktS','oty2mJm1wKn5y2nt','y3vYC28','yxrnCW','lwL0zw0','DhLxzwi','DYbNBg8','BMjRz28','pgj1Dhq','sfL0yKC','CgLUzYa','Ahq6nZa','vMfSDwu','AwnOigy','4OcuigzYyq','yxjT','AguGAg8','Ag90icG','EK53rMK','DhLWzq','uhbKze4','CMvZB2W','l3nWyw4','Dw5UAw4','yuHNu0C','oJfWEca','mNW3Fdm','mcbMAwu','lxDLAwC','y2fWDhu','Aw1Lsxm','t09rEg8','oJHWEdS','DdmY','mtjWEdS','wNHpCxi','DxjHvge','zvbYB3a','zwqGDgG','nhWXFda','u2vSzwm','ifrOzsa','mNb4o2i','CMvKige','oImXnta','icaYlIa','yujYCu8','ignYB3m','igLZig4','mhb4o2y','CMDIysG','Ag9VA3m','zxiTCMe','z2v0q2W','DgrHteS','Aw1L','mtrWEdS','DgHLig8','BNn0yw4','lYbZChi','yxvSDa','zdP0CMe','BwvTB3i','C29SDMu','zYbZDxm','zvbSDwC','uMvSB2e','zMLlDMG','uKrorhG','C2vSzIa','z2jHkdi','qvbvoca','rgLMzIa','CM9SBgu','ihDHCYa','ywz0zxi','igvUzca','CYb3zxi','Bez1BMm','BgqGAxm','BwuUy3i','AguGD3i','BMCUcG','CgvYBw8','igfUzca','ihrOAxm','mxb4ihm','BgX3yxi','ChG7y3u','ihnPz24','BJ8PoIa','EI51C2u','DwvxCMe','ywWGBM8','qxrbCM0','icaGy28','AvLktw0','BMfSrNu','CMfTzsa','D2nNywC','uMvNAxm','zKLjr2y','ru5ept0','rfnoyu8','igLKpsi','ywqGzMe','y3fwAu4','sw5ZDge','BLDtyLO','vhvnyLu','txfSuei','DMuGB2i','sNvlEKS','B3fPChC','A2vLCa','zYdcTYa','AxmGBM8','ndKWmJDPr2X0zfm','CYbVCNa','Aw9UoMy','B2XPzca','Ag9VA0y','igLUC3q','ten3zwq','vhDzwe0','x19ZywS','zgTPDc4','ENPhyxy','Bgu9iMq','mJGXnJq2wgnhyKrr','DMvKpq','tNnvuuq','ksWGC28','BwuGlsa','DfHoDwW','uIbbq1q','Aw4U','vvDnsY4','zxzLCNK','Dg9W','lxnWywm','yxbWzxi','B250zw4','zsXdB24','BxmGD2K','r0XdrNm','Dgv4Dem','BgvYigG','Aw5N','DgfNtwe','DcbPBMO','BLbVDhi','ywjIue8','B24GAwq','tw9KDwW','B3jPz2K','BNrPyxq','mJf4ANrrqwW','rgDNv3i','A2v5','BNrYB2W','B2zMC2u','uvbwqNy','zw4Gyw4','igL0ihm','yu1uzvO','CM91BMq','BNq6Aw4','yKXRBNm','zxmGDgG','lt4GDM8','zw50tgK','mcbVzIa','uwD6vfi','txLMs1u','tefzrvi','iZaWmdS','BM9Uzq','igj1Dca','tgXTDgS','ywXPz24','zeXHwNa','lsbvBMK','zM8Qksa','B0fTC08','i2jKytK','AwzLig8','tKLcB3m','AwWYq3a','ywLSzwq','D2fYBG','ywDHAw4','uhjPBwi','ig90Agu','yMrnuxi','CJPWB2K','y3jLyxq','Ag9ZDa','shnmq3G','C2LUz2W','BwuUx2C','ENnXweC','BhvNAw4','vhnywKO','C0PrtfO','EMLVzKe','igzYyw0','zw50','EcbZB2W','Axb0igK','B2jMrG','DgvZDa','ys1ZDW','n3b4o3a','DvD1z1K','zMXLEdO','zMfPBgu','ywL0Aw4','B2jM','z2uUrgu','oMf1Dg8','DgHPBMC','ywn0Axy','zJy0','Cg9ZAxq','Dg9tDhi','khmPigq','phnWyw4','DgHLigW','ihn0yxK','EvrHCa','sLj5twO','vgHPCYa','zsbVyMO','C28GDgG','sevbufu','BwvZC2e','yw1Ligy','BMrVDY4','B2jQzwm','ysbNyw0','u2nPDM8','AgL0CW','u0TjteW','sLHoDMy','AxnWBge','z25HDhu','Bun5su0','y0LWEeO','EMTnsxu','DLvcrgm','CgvJDhm','C3rHBMm','igfWCgW','vvDnsYa','zJfIo2i','vgv4Da','zgvMAw4','DMvhyw0','ExvRB3K','C2XPy2u','BM93','zgvYoJe','A2v5zg8','zgTPDa','BM8Gvxa','BNrLEhq','ihvUyxy','r1biy1G','igjSB2m','AwrLBNq','C2v0','DMvK','yw1LlGO','Ee9luvu','BNq4','C2v0sw4','ywrKCMu','i2zMzdq','uhvOz28','yxjLige','DgGGB3i','ywn0','Aw5MBW','CZPJzw4','Bgu9iMm','zgLUzZO','sLD0AxC','B3rurMS','B2SGzMK','icaGica','DgPKDLO','DhjHBNm','Bg93oMG','yM9KEq','yMfYzsa','AguGC2K','x19tquS','A2nLDwC','yM5QrMO','zcbPCYa','yxbP','lwzPCNm','AwXLzcW','rgDTCwy','Aw5Qzwm','DLDpBLm','zYbTyxi','zKnsvei','vgHLiha','ENf6yuO','CMvWB3i','kZb4','rMPxqNm','BhvLica','AwDPBMe','ihjLCg8','AfvdCw4','s2n1y2i','BM90ihi','B2fYza','yxmGzMK','AxrPywW','BhqGC2K','wu5Wz2G','B25Tzxm','zxmGBM8','BhnVwLy','BMnL','B2f0mZi','DvvKtMO','EMfszNy','o2jVEc0','iJ5gosa','qxrgAxi','o2fSAwC','CMrLCJO','BNqXnG','zKDVzgG','uxL4zvy','iJ5ZywS','lL9Nyw0','B2jMqG','Dg9WoJe','qxbWBgK','rLb0tvG','De5gDee','DNfeuLi','B3nLCY4','iZDLzta','Dw5PDhK','EtPMBgu','igfYztO','AgvHza','Aw4Onti','vLnxt2G','C3rHDhu','zxHWB3i','BhzLr2e','AM9PBG','ywXSzwq','EwvZ','yvn4thO','v1DUv1G','z2fTzsa','uMPpAwy','BNrPBwu','tM8GCMu','igDSB2i','CxvLCNK','z0niDxu','zsGPlMu','sgzTuxC','te9VCuq','vwPtCNK','ugrvuLy','nfrcEhzWta','CMuG','Bermy2W','uK9yCxK','AgfUzwq','pc9IpG','CMnLoIa','AgvHCfu','zYbIBgK','y29SB3i','Dc4kcLq','Aw5ZDge','pgrPDIa','y21K','BKfArM4','ifnxlva','Dxm6n3a','rKnIDfG','AgfIBgu','CMvMzxi','y3qGzM8','Bwf4lwG','DgHLiha','CuTyEMe','vNrxAwy','D1Lkwey','zKHAwgS','u3zwu1q','Aw5PDgu','uMLJsfC','DxrVoYi','CMvMAxG','AcbMAwu','B25Nig8','Esb0Exa','yxK6zMW','mtiXndiXneX2A0nAAa','zgLMzMu','ig9Yihq','BgrIs00','DMnNy2O','vvjbx1m','mtqZlde','zxG7z2e','C3r5Bgu','ywrKrxy','CNvUCYa','u25HChm','CMvHBa','BM90igK','z2v0rMW','AxjLuhi','ChrY','BwuOkq','CxvtDuy','uKfqueu','ms41ihu','s0viDfG','zsbPBNm','ihnPBMm','C1PqChG','AgLKzgu','mcaWige','DgzKCwS','BMfTzq','nsWXndm','quWGqum','twP2uKC','Ate2','BKf3DNy','ifnRAwW','ndK4nLbetgnQyG','t21rwuK','Fdb8mxW','yxr1CMu','C3rHCNq','zgf0yxm','zwXVywq','D2fYBMK','DNCSnJi','mhb4ic0','teH6v2W','A3vYyv0','zuf0rMK','BIb0Agu','uNvUDgK','zxjLzca','u3rkzgy','mJGYmZG5nKLmwfvYBa','vLDsAgu','zhrOoM0','qxnZzw0','A2rXDM0','Aw9U','Esbku08','EhnSEhy','DgHLBG','tNvss3y','DhjzA28','B25JBgK','CI5KBgW','EePyAuG','BMnLC1i','z2fTzq','y29WEq','AfnJCMK','Ag9VAW','ihnVigu','Cg9ZDe0','rwTjs3K','ihbHC3m','Ag9VA1a','lKHfqva','tfnVveS','CgX1z2K','igfYzsa','CMuk','AgLZiha','zwrnCW','CKf6rgq','zJu7yM8','zIb0Agu','Bxm6y2u','zMLSDgu','Dvnur0u','lYbQDw0','CMf3','Cg9YDge','AgPOAe4','AeDxyuu','yxrLigy','mJu1lde','EdTWywq','lwLUzgu','re9nq28','zxnWyxC','CNnVCJO','zxbSywm','zgTeBLO','DxjLzca','Axr5','Fdn8mG','yLncuMO','BLj1BNq','yxbWBgK','thLsvM8','yNznCwu','uMvZB2W','Dte2','AgvHCei','ChvZAa','B21Tyw4','lNjLC28','s2f5uum','yMfS','BvD0zLy','B3i6iZG','vg90ywW','yw1L','idyWCYa','sMXOqM8','EdOYmtq','u2HHCNa','icaO','pt09','sezly3m','CNvUDgK','DxjH','zwLNAhq','Dvfuzvi','B3vUzdO','o2jVCMq','igrPzca','mtjWEc8','BgP6qvq','oJeGmsa','DcbUBYa','ihbVC3q','u2fRDxi','zNvUy3q','DxrVo2i','AgLSzsa','CMPjB0K','zgLZCgW','y2vK','C3rLBMu','ihDOAwm','C25HCa','yKTfBue','D192mG','Dc5wywW','ztTTyxi','AwXKlG','lg1VBM8','zxKGAxm','i3n3mI0','DgLUzYa','vvjXDKm','Dg9ju08','r1r1C2G','yMX5lMK','BNrLCJS','CMvIDwK','DgvYo2y','r2PXzeC','zwn0zwq','B2f0nJq','zxjHDgu','yNvMzMu','zw1LBNq','AgvSBg8','A2v5pq','sg9VA3m','qNLjza','igjVDgG','EuLyB24','zgPkEKG','ANbTvuS','ignHChq','DZiTB3u','zsbYzw0','ChqGsvm','ihbHDgm','B2rbz00','DgLHDgu','mtjdveP0ufa','zYbPBNq','rxHWB3i','zw5HyMW','C3bYAw4','AuDhAK4','vuzsEM4','yxbWzw4','Acbxzwi','BwuGAw4','CgvKigi','C3rYAw4','svz5qxC','v2vItw8','ENDhqu4','EdTVDMu','z2v0sw4','CNqGEwu','igHPzd0','zfLQrNe','AwqGCMC','DxjPBMC','AxHLzdS','DgfN','Ew12Bum','ihbYB3y','y2fSlMq','A0L1yxa','C2nYAxa','zwLjsNG','DhLSzt0','zg9JDw0','yMLUzgK','zwf0zva','DMfS','yxv0BZS','Dc5KBgW','zxnZywC','uKj6z04','AgfZtw8','ywjSzwq','B01Xt3m','zwqGBM8','zYbMB3i','ywnRz3i','n2vLzJu','CgfUzwW','BwuUCMu','DgfSBgK','o2zSzxG','z2PvDg4','r0nVzum','Aw5KB3C','CMvJDgK','Bg9Hzhm','CY1VCMK','rw12Dwi','zwXHChm','DhKGAw4','DwL1wMG','ve9ArfC','uenvDuG','BMCGyxq','zwqGyNu','sgvHCca','uKLlB1K','uNHsAuS','u3rYAw4','Ewv0lG','z2LUigC','BNrezwy','Aw5Lza','vtGGAxm','DMrurey','zgLdsfu','C3bHy2u','ywSTD28','DJiTy3m','DY5vBMK','C3mGmhG','B2rVBLK','A2LUza','D3jHCha','uvzfC2O','lK1Vzhu','zxHPC3q','qKHOtxe','zgL1CZO','y0HcAhi','ywqU','yw1LihC','wfPVBxC','lxjHzgK','CMuGkhi','DgvK','B3CU','ig9Uy2u','C3bSAxq','t3zksgO','lMrSBa','yw5LBca','Aw50Aw4','Ag90','tw9KA2K','x2DHBwu','qwfqv00','BMuGAg8','BI5FCNu','y09SsLu','icaHia','igTPBMq','vhjPwge','Ag90CYa','Aw5Uzxi','AwnOlJW','Dgjmy1C','DhLWzum','C3CYlwG','CLDov0K','DujVAuO','C25HChm','Dhfbuva','z2XVyMe','m3WXFda','zhjmBeq','Dg9Y','zxqSig8','zw5NDgG','jwnBC2e','DfzTtu0','BwfYA3m','CMuGAwC','DhHztgG','yxbWBhK','Dxrrrvq','serMvwe','B250lxC','zhHJELm','zM9irg4','zgf0zsG','B2XVCJO','BgvKoIa','lwjVDhq','C1Htt2e','B2SGAxm','t0SGt1y','DMP3wKS','t2vQB0e','zsb0Age','y2D4r0S','iMjHy2S','AxmGBwK','zgvIDwC','wxPAr1u','ihDOAwW','Dw5Kzwy','EhbVCNq','yxjN','zhvYAw4','B3jKzxi','C2v0rMW','DdOG','AgvYAxq','CgfYzw4','yMX5lum','igDHBwu','CMfUzg8','Bg9N','ys1ZDY0','iokaLcbUBW','o2zVBNq','zwqGysa','psjZDZi','ExrLCW','s0D6yxC','rviGvvC','ihbHz2u','BxrvvxK','y2GGDgG','DtmY','rMDnCui','yxrHihi','D0HmwvC','Cg9PBNq','AwvSzca','BMD0AcW','DMvYBg8','BMqU','B3vYy2u','tIbIEsa','tMXSzg4','rLbty28','idaGyxu','vgHLigC','DM9IDNK','igHVB2S','sfrnta','v2vHCg8','C2v0ica','CMq7zM8','y3nZvgu','BMCGB24','zKDeD04','EvPmuxG','ihbHBMu','yxjKlxi','AwHKB1G','z1jtCLO','icaGia','B2XLig4','y2uSihm','t3vQrha','q0f0vfG','nZCSlJq','ieeGAg8','CgfKrw4','zsbUB3q','nhb4idK','yxnZtMe','C291CMm','zJmY','vwnesfe','yNL0zuW','CNvUBMK','zsDZig8','C28GAg8','igHLyxa','EufOrfa','DNmGC24','DgHLigC','BcbHz2e','vw5PDhK','r2fTzq','BM9Yzwq','yNL0zu8','BMTLEsa','mJi1nZy2CeH6AKjl','lGOkswy','qvrbELa','oYi+tM8','ELHuwvy','u012tgS','DMPsy0G','qxz2uwW','lJmPo2q','nde5mhfHuvvezW','z0fVueC','zwDPC3q','y2XVC2u','u0rHs2G','CKPZD1C','nYWUnsK','zg95Bey','zhDdsKe','BMnLigy','ig9Mia','lwnVChK','DgnOzxm','r2fTzsG','CMzSB3C','BMCGlYa','DerHDge','v0rny08','Dg87iJ4','AgvsAKq','icbVzMy','CMvUDca','q0rPzfu','oJC4DMG','CMvWBge','DhbHC3m','zMfRzq','BgvMDdO','CenVBNq','BMnLCW','BgvUz3q','s1Liwxa','tKjYvMK','imk3ia','BM90ig0','vMXIqwS','mxW0Fdy','oJCWmdS','B3vUDa','CNjVCG','C3vYDMu','y2XPCgi','BYbHihq','EsbHigq','y2vKigi','ztPWCMu','DhrVBJ4','C2fRDxi','x3j1BNq','zwvKzwq','B2fKzwq','ig9IAMu','D2Ldt2e','BwuGD2u','B29M','s2TdEha','sevAquO','z2LMEq','zxGTzgK','ig9Uihq','igrVy3u','uwvttM0','s1vsqs0','DxDTAW','B2jMsq','zLz4tMq','BgfZDeu'];_0x2502=function(){return _0x26be0;};return _0x2502();}
