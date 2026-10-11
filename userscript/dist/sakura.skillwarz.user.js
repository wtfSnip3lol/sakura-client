// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.0.7
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

(function(_0x2055c0,_0xe1fa87){var _0x416717=_0x2c42,_0xeef63e=_0x2055c0();while(!![]){try{var _0x2345ef=-parseInt(_0x416717(0x1ba))/(0x1*-0xc19+0x1*0x20eb+0x1*-0x14d1)+-parseInt(_0x416717(0x5a9))/(-0x1*-0xb11+-0x1*0x12f5+0x2a2*0x3)*(parseInt(_0x416717(0x460))/(0x1*0x226d+0xdc7*0x1+-0x3031))+-parseInt(_0x416717(0x223))/(-0xd3f*0x1+-0x63*-0x42+-0x1*0xc43)*(-parseInt(_0x416717(0x583))/(-0x1*0xd43+0x432+-0x916*-0x1))+parseInt(_0x416717(0x2b9))/(-0x23e5+0x22*-0xad+0x3ae5)*(-parseInt(_0x416717(0x24f))/(-0x254d+0x78b*-0x1+0x2cdf))+-parseInt(_0x416717(0x4dd))/(0x9d*-0x13+-0x1583+0x2132)+parseInt(_0x416717(0x4ba))/(0x1*-0x17a4+-0x1c1f+0x33cc)+parseInt(_0x416717(0x278))/(0x8*-0x124+-0x1512+0x1e3c);if(_0x2345ef===_0xe1fa87)break;else _0xeef63e['push'](_0xeef63e['shift']());}catch(_0x52aced){_0xeef63e['push'](_0xeef63e['shift']());}}}(_0x3161,-0x927ba+-0xe7ec9+0x1f7ef3),((()=>{'use strict';var _0xde41ba=_0x2c42,_0x447af0={'lqIgd':function(_0x3db312,_0x5a9c2e){return _0x3db312+_0x5a9c2e;},'sqFNh':_0xde41ba(0x40c)+_0xde41ba(0x3e4)+'d\x20·\x20','czMrU':function(_0x4a983c,_0x22c886){return _0x4a983c===_0x22c886;},'aWeXG':function(_0x3d8811,_0x10eb5b){return _0x3d8811!==_0x10eb5b;},'qXtWt':_0xde41ba(0x43b)+'ion','sFYNY':_0xde41ba(0x287)+'a-sw-'+_0xde41ba(0x47a)+'s','DBmkB':_0xde41ba(0x287)+'a-sw-'+'v2','bQWNk':_0xde41ba(0x5c0),'ZXIaA':'name','sSfCw':function(_0x34609b,_0x58e66f){return _0x34609b===_0x58e66f;},'xyOgP':_0xde41ba(0x3c7),'piGoy':_0xde41ba(0x30d)+_0xde41ba(0x49b)+_0xde41ba(0x48c)+_0xde41ba(0x1a1)+'\x20post'+'ed\x20a\x20'+_0xde41ba(0x4df)+_0xde41ba(0x2c8)+_0xde41ba(0x55c)+'\x0a','vQNZK':_0xde41ba(0x239)+_0xde41ba(0x3d3)+_0xde41ba(0x5b7)+_0xde41ba(0x3da)+'e\x20use'+_0xde41ba(0x4ef)+_0xde41ba(0x5bd)+'\x20inst'+'alled'+_0xde41ba(0x452)+'runni'+_0xde41ba(0x1cd)+'\x20the\x20'+_0xde41ba(0x3e0)+_0xde41ba(0x42f),'UqZfo':_0xde41ba(0x1ee)+_0xde41ba(0x2cb)+_0xde41ba(0x3eb)+_0xde41ba(0x542)+_0xde41ba(0x4e1)+_0xde41ba(0x478)+_0xde41ba(0x237)+_0xde41ba(0x569)+_0xde41ba(0x25e)+'talli'+'ng.\x0a','pRviO':_0xde41ba(0x21b)+'insta'+'lled\x20'+'—\x20two'+_0xde41ba(0x55d)+_0xde41ba(0x34b)+'\x20UWMK'+_0xde41ba(0x2e5)+'\x20patc'+_0xde41ba(0x22e)+'Assem'+_0xde41ba(0x26f)+'nstan'+_0xde41ba(0x364)+_0xde41ba(0x3fd),'tPkBe':function(_0x9f1834,_0x3f6bfc){return _0x9f1834-_0x3f6bfc;},'DQAcx':function(_0x39f551,_0x15fb8b){return _0x39f551+_0x15fb8b;},'pQIhP':'addre'+_0xde41ba(0x43c),'QCuNg':function(_0x344399,_0x51e739){return _0x344399===_0x51e739;},'cFFDM':'ZtexP','Hdwot':_0xde41ba(0x3a8),'GKOwX':'#ff6e'+'74','klXpx':'XQPWF','wOgRB':_0xde41ba(0x4ae),'oWUXZ':function(_0x30861e,_0x27968e){return _0x30861e+_0x27968e;},'YeORF':function(_0x5507b3,_0x39451e){return _0x5507b3>_0x39451e;},'ZbHLG':'#ffd4'+'8a','mPvUz':_0xde41ba(0x229),'mbDcw':'armed'+_0xde41ba(0x39b),'PRIeR':_0xde41ba(0x48d),'LlLTp':_0xde41ba(0x461)+_0xde41ba(0x422)+_0xde41ba(0x257)+_0xde41ba(0x559)+_0xde41ba(0x4e5)+_0xde41ba(0x403)+_0xde41ba(0x31d)+_0xde41ba(0x40d)+_0xde41ba(0x271)+_0xde41ba(0x5da)+_0xde41ba(0x563)+_0xde41ba(0x3c5)+'ld\x20is'+'\x20whic'+'h.','WFzgB':'gFRnW','OXNlx':function(_0x399020,_0x2dc264){return _0x399020+_0x2dc264;},'CwImn':_0xde41ba(0x2e7),'ChDuM':_0xde41ba(0x1ce),'AvGvo':function(_0x1eb75b,_0x4e3766){return _0x1eb75b+_0x4e3766;},'Lnrhb':function(_0x368b53,_0x12cb36){return _0x368b53+_0x12cb36;},'tjAbM':function(_0x599c93,_0x44b688){return _0x599c93+_0x44b688;},'edccq':function(_0x352110,_0x598f94){return _0x352110+_0x598f94;},'aUlJC':_0xde41ba(0x496)+'yle=\x22'+_0xde41ba(0x43f)+':','HKCAh':'<span'+_0xde41ba(0x1ad)+_0xde41ba(0x333)+'tatus'+_0xde41ba(0x296)+_0xde41ba(0x1d2)+'olor:'+_0xde41ba(0x5b5)+'c9\x22>w'+_0xde41ba(0x373)+_0xde41ba(0x55b)+'\x20game'+_0xde41ba(0x462)+'e…</s'+_0xde41ba(0x28b),'xzrjD':'<div\x20'+_0xde41ba(0x211)+_0xde41ba(0x25a)+_0xde41ba(0x46b)+_0xde41ba(0x1f1)+_0xde41ba(0x23d)+'order'+_0xde41ba(0x4d1)+'om:1p'+_0xde41ba(0x441)+_0xde41ba(0x58d)+_0xde41ba(0x41c)+_0xde41ba(0x50b)+',177,'+_0xde41ba(0x53e)+_0xde41ba(0x594)+_0xde41ba(0x21f)+_0xde41ba(0x52a)+'p:6px'+';alig'+'n-ite'+'ms:ce'+_0xde41ba(0x428)+'flex:'+_0xde41ba(0x2db)+_0xde41ba(0x56a)+'>','lTuPR':_0xde41ba(0x19c)+_0xde41ba(0x2d2)+_0xde41ba(0x3b6)+_0xde41ba(0x45f)+_0xde41ba(0x36e)+_0xde41ba(0x565)+_0xde41ba(0x215)+'addin'+'g:10p'+_0xde41ba(0x3c6)+'x;ove'+'rflow'+':auto'+_0xde41ba(0x50f)+':1\x201\x20'+_0xde41ba(0x51d)+_0xde41ba(0x3a9)+'-spac'+_0xde41ba(0x21d)+_0xde41ba(0x344)+';word'+'-brea'+_0xde41ba(0x3a4)+'ak-wo'+'rd;fo'+'nt:in'+_0xde41ba(0x336)+';','ALEFh':_0xde41ba(0x480)+_0xde41ba(0x436)+_0xde41ba(0x1d4)+_0xde41ba(0x377)+'\x20repo'+_0xde41ba(0x4de)+'t.\x0a\x0aT'+'his\x20p'+'anel\x20'+_0xde41ba(0x470)+_0xde41ba(0x267)+'self\x20'+_0xde41ba(0x231)+_0xde41ba(0x197)+_0xde41ba(0x49b)+_0xde41ba(0x48c)+_0xde41ba(0x22b)+'\x20—\x20no'+'\x20cons'+'ole\x20n'+_0xde41ba(0x40f)+_0xde41ba(0x4b4)+'\x20it\x20s'+_0xde41ba(0x560)+'empty'+',\x20Tam'+'permo'+_0xde41ba(0x2f1)+_0xde41ba(0x4c7)+'t\x20inj'+_0xde41ba(0x2d6)+_0xde41ba(0x256)+_0xde41ba(0x1b3)+'\x20cros'+_0xde41ba(0x48b)+_0xde41ba(0x2eb)+'ame\x20f'+_0xde41ba(0x5b9)+_0xde41ba(0x365)+'>','FYPrR':'#sw2-'+'statu'+'s','PFWWK':_0xde41ba(0x2be)+_0xde41ba(0x234),'acebD':_0xde41ba(0x2be)+_0xde41ba(0x24c),'QDQVE':_0xde41ba(0x2be)+'snap','tahtT':function(_0x3eed83,_0xe68f94,_0x2f00aa){return _0x3eed83(_0xe68f94,_0x2f00aa);},'tUxMP':'metad'+_0xde41ba(0x575)+'eady\x20'+'·\x20','uyUKe':function(_0x5b4875,_0x42640c){return _0x5b4875+_0x42640c;},'YYWTz':'frame'+_0xde41ba(0x57d),'Sepuj':function(_0x5104e8,_0x246da2){return _0x5104e8/_0x246da2;},'xZGQD':_0xde41ba(0x573),'DuRbt':function(_0x239d16,_0x53234d){return _0x239d16!=_0x53234d;},'VfZyR':function(_0x8570fa,_0x475ca9){return _0x8570fa+_0x475ca9;},'uJlMt':function(_0x39e7a1,_0x51b091){return _0x39e7a1<_0x51b091;},'phavo':function(_0x3f82f0,_0x22c258){return _0x3f82f0+_0x22c258;},'HvaEs':_0xde41ba(0x2d1),'mukvo':function(_0x2654aa,_0xfc0c52){return _0x2654aa+_0xfc0c52;},'JHaiU':'\x20\x20off'+_0xde41ba(0x510)+_0xde41ba(0x4ac)+_0xde41ba(0x21b)+_0xde41ba(0x51b)+'lue\x20\x20'+'\x20\x20\x20\x20\x20'+_0xde41ba(0x21b)+'raw','oCyMz':'numbe'+'r','HMbGO':function(_0x16d6e1,_0x208f9c){return _0x16d6e1*_0x208f9c;},'LLgaA':function(_0x4e8463,_0x35c63a){return _0x4e8463+_0x35c63a;},'sIqya':function(_0x260d34,_0x5d8022){return _0x260d34(_0x5d8022);},'EpZiH':'SuTKn','DkLML':function(_0x35397b){return _0x35397b();},'nAQDH':'cmd','rLheW':'4|5|3'+'|0|1|'+'2','QyhnA':'none','tBqih':function(_0x3a3fe3,_0x31560e){return _0x3a3fe3===_0x31560e;},'fGQJM':_0xde41ba(0x3ad),'bHRaJ':_0xde41ba(0x371),'JiYeL':'debug','jVdOD':function(_0x3306ea,_0x301514){return _0x3306ea-_0x301514;},'YtStp':_0xde41ba(0x3ff),'jTBuU':function(_0x517936,_0x231b04){return _0x517936===_0x231b04;},'rAaHv':function(_0x21039c,_0x3aa86e){return _0x21039c<_0x3aa86e;},'FzzCg':'Runti'+_0xde41ba(0x532)+'eateP'+'lugin'+_0xde41ba(0x2c6)+'ailab'+'le','kDuLW':function(_0x354bff,_0x6de60f){return _0x354bff+_0x6de60f;},'CfiVo':function(_0xa4f215,_0x101e6f){return _0xa4f215!==_0x101e6f;},'gwxMH':_0xde41ba(0x1aa),'qbyUm':'RqyCF','XWbCK':function(_0x3f8fe2,_0x4f1b82){return _0x3f8fe2+_0x4f1b82;},'FDYUo':function(_0x216ef9,_0x50506c){return _0x216ef9+_0x50506c;},'UrdYk':_0xde41ba(0x41a)+_0xde41ba(0x395)+'e\x20eve'+'n\x20SEE'+'N\x20by\x20'+_0xde41ba(0x1fe)+'\x20The\x20'+'apply'+'\x20pass'+'\x20','rhmBT':'runs\x20'+_0xde41ba(0x2f2)+_0xde41ba(0x366)+_0xde41ba(0x427)+_0xde41ba(0x4b0)+'bly.i'+_0xde41ba(0x2a9)+_0xde41ba(0x364)+_0xde41ba(0x452)+'snaps'+_0xde41ba(0x4db)+'plugi'+'n.hoo'+_0xde41ba(0x514)+_0xde41ba(0x4f2)+'\x20','KCtas':function(_0x424f18,_0x4b2217){return _0x424f18+_0x4b2217;},'ZaPRB':_0xde41ba(0x5af)+_0xde41ba(0x244)+'ved\x20','OUCTS':function(_0x2c8ef1,_0x4af081){return _0x2c8ef1===_0x4af081;},'EQwdU':function(_0x455b5c,_0x8a5235,_0x20e719){return _0x455b5c(_0x8a5235,_0x20e719);},'ySIHK':function(_0x210aa9,_0x58df54){return _0x210aa9<_0x58df54;},'mYpwC':_0xde41ba(0x2b7)+_0xde41ba(0x34a)+_0xde41ba(0x4cf)+_0xde41ba(0x1c9)+_0xde41ba(0x302)+'}','MtIlL':_0xde41ba(0x546),'IRuLP':function(_0xef6281,_0x12a6e9){return _0xef6281!==_0x12a6e9;},'JHvPh':_0xde41ba(0x3f9),'izmsl':_0xde41ba(0x3aa)+_0xde41ba(0x2fd)+'ntime'+_0xde41ba(0x4cb)+'e','RQtKR':function(_0x4ea761,_0x44588a){return _0x4ea761===_0x44588a;},'uhVAB':_0xde41ba(0x590),'OJtwD':'Runti'+'me.re'+_0xde41ba(0x34c)+_0xde41ba(0x5a7)+')','fJECl':'tPWaV','AKJyc':'bare\x20'+'game\x20'+_0xde41ba(0x19b)+'ng','BSgqr':function(_0x3c796f,_0x8a364c){return _0x3c796f===_0x8a364c;},'Dywqy':_0xde41ba(0x26b),'lpgWh':'windo'+'w.','TmqkV':'undef'+'ined','XRQYH':function(_0x2e0521){return _0x2e0521();},'BQJBR':_0xde41ba(0x515)+_0xde41ba(0x282)+_0xde41ba(0x2d7)+'ty\x20in'+_0xde41ba(0x1de)+_0xde41ba(0x1a2)+_0xde41ba(0x544)+_0xde41ba(0x3f0)+_0xde41ba(0x316)+_0xde41ba(0x2c9)+'me.re'+_0xde41ba(0x34c)+_0xde41ba(0x5a7)+')\x20or\x20'+_0xde41ba(0x4cd)+_0xde41ba(0x25f)+_0xde41ba(0x307)+'al','HfEuZ':function(_0x43f12c,_0x5cab8c){return _0x43f12c<_0x5cab8c;},'wgxru':function(_0x1063cf,_0x5e0a43){return _0x1063cf+_0x5e0a43;},'PQrMA':'i16','XeNTN':'u16','PedGf':_0xde41ba(0x1db),'cFHzy':_0xde41ba(0x5aa),'XDgJw':function(_0x4cd1f0,_0x2c5ed9){return _0x4cd1f0&_0x2c5ed9;},'kOyTL':_0xde41ba(0x37d),'nkStv':'obfI','WflKP':function(_0x3ef76d,_0x55d908){return _0x3ef76d^_0x55d908;},'bOsXx':function(_0x353a0f,_0x124cf9){return _0x353a0f|_0x124cf9;},'IZFGZ':function(_0x547563,_0x57cf96){return _0x547563^_0x57cf96;},'JuLjD':function(_0x220c85,_0x34bf27){return _0x220c85!==_0x34bf27;},'YslIH':function(_0x12e7e4,_0x49b28e,_0x4135be){return _0x12e7e4(_0x49b28e,_0x4135be);},'kGiIX':_0xde41ba(0x4b1),'WPqzO':'VJqzK','DtmHx':function(_0x52a13b,_0x380bce){return _0x52a13b(_0x380bce);},'nNnox':function(_0x20b928,_0xdaf686){return _0x20b928+_0xdaf686;},'TVcUW':function(_0x259002,_0x23cb68,_0x919b7c,_0x248348){return _0x259002(_0x23cb68,_0x919b7c,_0x248348);},'RJEff':function(_0x5f26cf,_0x353109){return _0x5f26cf+_0x353109;},'xroRr':'Mkjia','jFRfC':_0xde41ba(0x359),'aiECB':function(_0x560e06,_0x2173e2){return _0x560e06===_0x2173e2;},'NYrEd':_0xde41ba(0x391),'sOkig':function(_0x211782,_0x1644ff){return _0x211782!==_0x1644ff;},'GEmPF':'OkbWe','rUWOp':function(_0x54069e){return _0x54069e();},'HBUiT':function(_0x278964,_0x50918d){return _0x278964||_0x50918d;},'JlmbD':function(_0x1f0a1a,_0x400bd3){return _0x1f0a1a===_0x400bd3;},'wfYhO':_0xde41ba(0x40b),'flAWx':function(_0x4fc6de,_0x405c49){return _0x4fc6de===_0x405c49;},'OgLai':_0xde41ba(0x5d2),'HxOvq':function(_0x43c18f,_0x1eecdb){return _0x43c18f+_0x1eecdb;},'qzNmC':_0xde41ba(0x261),'MccZd':_0xde41ba(0x47d)+'=','zXxtH':_0xde41ba(0x32f)+'port\x20'+_0xde41ba(0x530)+'\x2060s\x20'+'—\x20fra'+_0xde41ba(0x1ff)+'t\x20inj'+'ected'+'?','mZKFi':function(_0x4235cc,_0x5d3d2b){return _0x4235cc+_0x5d3d2b;},'ZKiGF':'Reloa'+_0xde41ba(0x425)+_0xde41ba(0x4b6)+'\x20page'+_0xde41ba(0x320)+_0xde41ba(0x452)+_0xde41ba(0x599)+_0xde41ba(0x58a)+'\x20pane'+'l\x20aga'+'in.','FjGiz':function(_0x17a792,_0x45c45e){return _0x17a792+_0x45c45e;},'ZaaWW':_0xde41ba(0x36a),'enjvl':'unity'+'Game','dEgmK':_0xde41ba(0x3f4),'zzWtE':_0xde41ba(0x1c4)+'Insta'+_0xde41ba(0x29e)+'apper','SyVrl':_0xde41ba(0x2a6),'pbQXH':_0xde41ba(0x1f7),'duIvs':function(_0x118560,_0x4a3b1d){return _0x118560!==_0x4a3b1d;},'umLHg':_0xde41ba(0x315),'aaunh':_0xde41ba(0x352),'wBYVD':_0xde41ba(0x285),'tqerF':function(_0x41c52b,_0x3c7d14){return _0x41c52b+_0x3c7d14;},'HrKEP':function(_0x17a7a2,_0x38f4fc,_0x4464fc){return _0x17a7a2(_0x38f4fc,_0x4464fc);},'FLFfr':_0xde41ba(0x557)+'t','FSxwd':function(_0xaea99a,_0x5f4594,_0x118884){return _0xaea99a(_0x5f4594,_0x118884);},'NPGLe':function(_0x1920ec,_0xc0a136){return _0x1920ec(_0xc0a136);},'LTezx':'rJMkz','AfDBi':function(_0x4562b4,_0x4b0fce){return _0x4562b4===_0x4b0fce;},'jLiwB':_0xde41ba(0x29b),'TIgzM':_0xde41ba(0x338),'zjJkd':function(_0x453975,_0x1e0323){return _0x453975+_0x1e0323;},'PGhtf':function(_0x2d9310,_0x1facdd){return _0x2d9310+_0x1facdd;},'ChjSP':function(_0x1486c4,_0x2c7e2b){return _0x1486c4===_0x2c7e2b;},'GHkPG':function(_0x562a46,_0x55762f){return _0x562a46===_0x55762f;},'QAjeZ':function(_0x1dba2c,_0x38eefd){return _0x1dba2c^_0x38eefd;},'wMoNV':function(_0xff18b8,_0x29c1e9){return _0xff18b8===_0x29c1e9;},'pdmCt':function(_0x571be3,_0x6db7a1){return _0x571be3===_0x6db7a1;},'eCAMX':function(_0x4e3bec,_0x1b079d){return _0x4e3bec(_0x1b079d);},'mtiaA':function(_0x4ffd9a){return _0x4ffd9a();},'NZarD':function(_0x13b1b1,_0x439f4a){return _0x13b1b1+_0x439f4a;},'GpomW':function(_0x2063e6,_0x5a983e){return _0x2063e6+_0x5a983e;},'bfKGJ':_0xde41ba(0x1a8),'dXFJq':'zcupZ','HhzJA':function(_0x3428a4,_0x88c3bd){return _0x3428a4+_0x88c3bd;},'pbfTd':_0xde41ba(0x197)+_0xde41ba(0x400)+_0xde41ba(0x257)+'the\x20o'+'ne\x20ho'+_0xde41ba(0x2cc)+'\x20it\x20i'+'s\x20orp'+'haned'+_0xde41ba(0x301)+_0xde41ba(0x5ab)+_0xde41ba(0x328)+_0xde41ba(0x404)+'r\x20','udOBn':_0xde41ba(0x19a)+'a/UWM'+'K\x20scr'+_0xde41ba(0x393)+_0xde41ba(0x59c)+_0xde41ba(0x27a)+'nkey\x20'+_0xde41ba(0x467)+'ard-r'+_0xde41ba(0x47c)+'.','vjisu':function(_0x20a935,_0x410d7a){return _0x20a935+_0x410d7a;},'cCheh':'aiMNO','oVspa':function(_0x1c5e53,_0x289cba){return _0x1c5e53!==_0x289cba;},'YAELf':_0xde41ba(0x5a4)+_0xde41ba(0x437),'bGYFc':_0xde41ba(0x597)+'\x20the\x20'+'refer'+'ence\x20'+_0xde41ba(0x4b9)+_0xde41ba(0x346)+'en\x20an'+'d\x20is\x20'+_0xde41ba(0x3e7)+_0xde41ba(0x4c3)+'ble\x20n'+'ow.','TOzuy':function(_0x379794,_0x2d5181){return _0x379794+_0x2d5181;},'TLwWi':function(_0x3e1970,_0x2fe9b5){return _0x3e1970===_0x2fe9b5;},'BEHsQ':function(_0x3b4209,_0x3aa440){return _0x3b4209+_0x3aa440;},'wMnjC':_0xde41ba(0x4a1),'MwjbO':_0xde41ba(0x4da),'LNewO':function(_0x44f5b7,_0x96a5e3){return _0x44f5b7>_0x96a5e3;},'vKKuB':_0xde41ba(0x485),'tBDfD':_0xde41ba(0x1c6)+_0xde41ba(0x264)+'nce\x20f'+_0xde41ba(0x272)+_0xde41ba(0x240)+_0xde41ba(0x2b5)+'espaw'+'n?):\x20','swAus':function(_0x43eba9,_0x894a8){return _0x43eba9+_0x894a8;},'GSKHg':function(_0x47246d,_0x483def){return _0x47246d!==_0x483def;},'AQhbb':'%c[sa'+_0xde41ba(0x434)+_0xde41ba(0x571)+_0xde41ba(0x3e3)+'\x20repo'+'rt','zJppr':function(_0x4e8c52,_0x5d9a35){return _0x4e8c52-_0x5d9a35;},'HEzOd':function(_0x520048,_0x8d5f69){return _0x520048(_0x8d5f69);},'NYzzV':function(_0x46d4fc,_0x31314a){return _0x46d4fc(_0x31314a);},'sYnoN':_0xde41ba(0x3e0)+'l','fxTiA':_0xde41ba(0x1f0)+'er','uoiXw':function(_0x360809,_0x583b29){return _0x360809&&_0x583b29;},'YFXDr':'#ff8f'+'b1','vUUju':_0xde41ba(0x4e6),'iirhr':'AQwAR','IVllm':'%c[sa'+_0xde41ba(0x434)+'\x20PORT'+_0xde41ba(0x321)+'TIVE','AJYsR':function(_0x431748,_0x3bc396){return _0x431748+_0x3bc396;},'eIecA':_0xde41ba(0x43f)+':','dUgNJ':'messa'+'ge','xuQbQ':_0xde41ba(0x238)+'ntent'+_0xde41ba(0x3b8)+'d','sCCvt':_0xde41ba(0x513)+_0xde41ba(0x340)+'ht:70'+'0;fon'+'t-siz'+'e:14p'+'x','UUvlz':_0xde41ba(0x1fb)+_0xde41ba(0x414)+'ler','tcMas':_0xde41ba(0x4f6)+_0xde41ba(0x29a)+'ger','UdqkZ':_0xde41ba(0x4b0)+_0xde41ba(0x561)+_0xde41ba(0x236)+_0xde41ba(0x455),'EzjkX':'Assem'+_0xde41ba(0x561)+_0xde41ba(0x236)+_0xde41ba(0x57e)+'tpass'+_0xde41ba(0x455),'OuQev':'ch.sy'+'cofor'+_0xde41ba(0x4ff)+_0xde41ba(0x50d)+'ll','Nynjv':_0xde41ba(0x53d)+_0xde41ba(0x370)+_0xde41ba(0x330)+'rCont'+_0xde41ba(0x362)+_0xde41ba(0x3c4),'nAJGg':_0xde41ba(0x438)};var _0x2c4bda=location['hostn'+_0xde41ba(0x3ba)]||'',_0x5f105e=/(^|\.)www\.crazygames\.com$/[_0xde41ba(0x550)](_0x2c4bda),_0x51292b=/(^|\.)games\.crazygames\.com$/[_0xde41ba(0x550)](_0x2c4bda),_0x5a266d=/(^|\.)crazygames\.com$/[_0xde41ba(0x550)](_0x2c4bda)&&!_0x5f105e&&!_0x51292b,_0x4088c5=_0x5f105e?_0x447af0[_0xde41ba(0x539)]:_0x51292b?_0x447af0[_0xde41ba(0x5a0)]:_0xde41ba(0x305)+'r';if(_0x447af0['uoiXw'](!_0x5f105e,!_0x51292b)&&!_0x5a266d)return;var _0x14f559=_0x447af0['YFXDr'],_0xcef4c6=_0xde41ba(0x389)+_0xde41ba(0x1b0)+_0xde41ba(0x1ae),_0x208cf1='===SA'+_0xde41ba(0x1ea)+'SKILL'+_0xde41ba(0x3d2)+_0xde41ba(0x489)+_0xde41ba(0x4b5),_0x5826c3='===SA'+'KURA-'+_0xde41ba(0x3ec)+'WARZ-'+'END=='+'=',_0xff4f27=_0x447af0['vUUju'];if(_0x51292b){if(_0x447af0['CfiVo'](_0xde41ba(0x5a1),_0x447af0['iirhr']))_0x14a624=_0x447af0['lqIgd'](_0x447af0['sqFNh']+_0x3f3e3f,'s'),_0x4e9ba7='#ffd4'+'8a';else{window['addEv'+'entLi'+'stene'+'r']('messa'+'ge',function(_0x19c922){var _0x3c1f32=_0xde41ba;if(_0x447af0['czMrU'](_0x3c1f32(0x1be),'ePoNP')){var _0x4a0254=_0x19c922[_0x3c1f32(0x381)];if(!_0x4a0254||_0x4a0254['__sak'+_0x3c1f32(0x1e3)]!==_0xcef4c6)return;try{if(window[_0x3c1f32(0x1e4)+'t']&&_0x447af0['aWeXG'](window[_0x3c1f32(0x1e4)+'t'],window))window[_0x3c1f32(0x1e4)+'t']['postM'+_0x3c1f32(0x2a5)+'e'](_0x4a0254,'*');if(window[_0x3c1f32(0x31e)]&&window['top']!==window)window['top'][_0x3c1f32(0x538)+'essag'+'e'](_0x4a0254,'*');}catch(_0x2c2e74){}}else _0x35380a[_0x3c1f32(0x300)+_0x3c1f32(0x48e)]=![],_0x5461ec['heapU'+'8']=![],_0x155f9a[_0x3c1f32(0x1d9)+_0x3c1f32(0x286)]=-0x913+0x928*0x1+-0x15;}),console['log']('%c[sa'+_0xde41ba(0x434)+_0xde41ba(0x473)+_0xde41ba(0x4f1)+_0xde41ba(0x526)+_0xde41ba(0x210)+_0xde41ba(0x4f0)+'\x20only'+')',_0x447af0[_0xde41ba(0x1b6)]('color'+':',_0x14f559));return;}}if(_0x5f105e){console['log'](_0x447af0[_0xde41ba(0x5d7)],_0x447af0['AJYsR'](_0x447af0[_0xde41ba(0x3d7)](_0x447af0[_0xde41ba(0x5dd)],_0x14f559),_0xde41ba(0x513)+_0xde41ba(0x340)+'ht:70'+'0'),{'host':_0x2c4bda});var _0x2fd285={'set':function(){},'command':function(){}};function _0x4783e0(_0x4d6cb9,_0x169ef3){var _0x1d1a7a=_0xde41ba,_0x149432={'UUkzA':function(_0x3cb9c4,_0x56e3bc){return _0x3cb9c4!==_0x56e3bc;}};if(_0x1d1a7a(0x44b)==='XNrSB'){var _0x538b36={'__sakura':_0xcef4c6,'kind':_0x1d1a7a(0x2ab),'cmd':_0x4d6cb9,'arg':_0x169ef3};try{var _0x4ea771=new BroadcastChannel(_0x1d1a7a(0x287)+_0x1d1a7a(0x1a3));_0x4ea771['postM'+_0x1d1a7a(0x2a5)+'e'](_0x538b36),setTimeout(function(){var _0x514e91=_0x1d1a7a;if(_0x149432['UUkzA'](_0x514e91(0x3ee),_0x514e91(0x3ee)))return _0x336c3e();else try{_0x4ea771[_0x514e91(0x39c)]();}catch(_0x390c01){}},-0x5fe*0x2+-0x1*0xb8f+0x1885);}catch(_0x5de505){}}else{var _0x2b9e44=_0x14ffa9[_0x1d1a7a(0x1b4)](this,arguments);try{if(_0x2b9e44&&typeof _0x2b9e44[_0x1d1a7a(0x1a6)]===_0x447af0['qXtWt'])_0x2b9e44['then'](_0x3f49ae,function(){});else _0x3e923d(_0x2b9e44);}catch(_0x3da63c){}return _0x2b9e44;}}function _0x128ca8(){var _0xde8b64=_0xde41ba,_0x42e1db=document['getEl'+_0xde8b64(0x2f8)+_0xde8b64(0x35f)](_0xde8b64(0x287)+'a-sw-'+'v2');if(_0x42e1db)return _0x42e1db;if(!document['body']||!document[_0xde8b64(0x442)][_0xde8b64(0x3b4)+_0xde8b64(0x59d)+'d'])return null;try{if(!document['getEl'+'ement'+_0xde8b64(0x35f)](_0xde8b64(0x287)+_0xde8b64(0x51e)+_0xde8b64(0x47a)+'s')){var _0x299340=document[_0xde8b64(0x354)+'eElem'+_0xde8b64(0x2cf)](_0xde8b64(0x211));_0x299340['id']=_0x447af0[_0xde8b64(0x25c)],_0x299340[_0xde8b64(0x255)+'onten'+'t']='#saku'+_0xde8b64(0x34a)+_0xde8b64(0x4cf)+_0xde8b64(0x1c9)+_0xde8b64(0x302)+'}',(document[_0xde8b64(0x433)]||document[_0xde8b64(0x383)+_0xde8b64(0x45a)+_0xde8b64(0x2f8)])['appen'+'dChil'+'d'](_0x299340);}return _0x42e1db=document[_0xde8b64(0x354)+'eElem'+_0xde8b64(0x2cf)](_0xde8b64(0x546)),_0x42e1db['id']=_0x447af0[_0xde8b64(0x361)],document['body'][_0xde8b64(0x3b4)+'dChil'+'d'](_0x42e1db),_0x42e1db;}catch(_0x3c7bd3){return null;}}function _0x37ec52(){var _0x41c8d9=_0xde41ba;if(_0x447af0['bQWNk']===_0x447af0[_0x41c8d9(0x28c)]){var _0x3c5ace=_0x128ca8();if(!_0x3c5ace)return _0x2fd285;if(_0x3c5ace[_0x41c8d9(0x1b9)+'et']['api'])return _0x3c5ace[_0x41c8d9(0x2b3)];try{return _0x293e71(_0x3c5ace);}catch(_0x23ef33){return _0x3c5ace[_0x41c8d9(0x1b9)+'et']['api']='1',_0x3c5ace['api']=_0x2fd285,console[_0x41c8d9(0x3ad)](_0x41c8d9(0x198)+'kura]'+'\x20pane'+_0x41c8d9(0x2ef)+'abled',_0x41c8d9(0x43f)+':'+_0x14f559,_0x23ef33),_0x2fd285;}}else{if(_0x157387['paren'+'t']&&_0x285f6f[_0x41c8d9(0x1e4)+'t']!==_0x2484f5)_0x1e4947['paren'+'t'][_0x41c8d9(0x538)+'essag'+'e'](_0x17a8da,'*');if(_0x336ab0[_0x41c8d9(0x31e)]&&_0x46dac0['top']!==_0x963cdd)_0x4b7407[_0x41c8d9(0x31e)]['postM'+'essag'+'e'](_0x3ea188,'*');}}function _0x293e71(_0x36d952){var _0x587b64=_0xde41ba,_0x30ff52={'UiJub':function(_0x51a00f,_0x575a93){return _0x51a00f+_0x575a93;},'ulhtC':function(_0x4017dd,_0x1e2f55){return _0x4017dd||_0x1e2f55;},'JbWIo':_0x587b64(0x417),'HdgCE':function(_0x4d0506,_0x2ae56a){return _0x4d0506!==_0x2ae56a;},'aqJxt':_0x447af0[_0x587b64(0x37c)],'XaxOf':_0x587b64(0x23c)+'hot','IgHnn':_0x587b64(0x298)+'rea','tqqnc':_0x447af0['ChDuM'],'YAxBU':_0x587b64(0x3aa)+'n._ru'+_0x587b64(0x477)+'._gam'+'e'};_0x36d952['style'][_0x587b64(0x1d6)+'xt']=_0x587b64(0x4f3)+_0x587b64(0x4ab)+_0x587b64(0x1dc)+_0x587b64(0x54d)+_0x587b64(0x3cb)+'top:1'+_0x587b64(0x484)+'-inde'+'x:214'+'74830'+_0x587b64(0x295)+_0x587b64(0x288)+_0x587b64(0x475)+_0x587b64(0x2ed)+'0px);'+_0x587b64(0x480)+_0x587b64(0x436)+_0x587b64(0x5bb)+';'+('backg'+_0x587b64(0x297)+':#150'+'c1d;c'+_0x587b64(0x392)+'#f7ee'+'f5;bo'+'rder:'+'1px\x20s'+_0x587b64(0x4a3)+_0x587b64(0x4a6)+_0x587b64(0x2a4)+'43,17'+'7,.5)'+_0x587b64(0x3a3)+_0x587b64(0x4d9)+_0x587b64(0x319)+_0x587b64(0x329))+(_0x587b64(0x523)+_0x587b64(0x49f)+'1.5\x20u'+'i-mon'+_0x587b64(0x384)+_0x587b64(0x2dd)+_0x587b64(0x38c)+',mono'+'space'+';box-'+_0x587b64(0x4ea)+'w:0\x202'+_0x587b64(0x47b)+_0x587b64(0x570)+'20px\x20'+_0x587b64(0x453))+('displ'+_0x587b64(0x21f)+_0x587b64(0x3b2)+'ex-di'+'recti'+'on:co'+'lumn;'+'overf'+_0x587b64(0x5bc)+'idden'+';'),_0x36d952['inner'+_0x587b64(0x396)]=_0x447af0['AvGvo'](_0x447af0[_0x587b64(0x36d)](_0x447af0['lqIgd'](_0x447af0[_0x587b64(0x1dd)](_0x447af0[_0x587b64(0x4fd)](_0x447af0[_0x587b64(0x35d)](_0x447af0['tjAbM'](_0x447af0['lqIgd'](_0x447af0[_0x587b64(0x36d)]('<div\x20'+_0x587b64(0x211)+'=\x22pad'+'ding:'+_0x587b64(0x58f)+_0x587b64(0x23d)+_0x587b64(0x5d0)+'-bott'+_0x587b64(0x593)+'x\x20sol'+'id\x20rg'+_0x587b64(0x41c)+_0x587b64(0x50b)+_0x587b64(0x587)+_0x587b64(0x482)+'ispla'+_0x587b64(0x1f4)+'x;gap'+_0x587b64(0x450)+_0x587b64(0x418)+_0x587b64(0x511)+_0x587b64(0x5ea)+_0x587b64(0x506)+_0x587b64(0x5e9)+_0x587b64(0x5a6)+'to;\x22>',_0x447af0[_0x587b64(0x209)])+_0x14f559,'\x22>sak'+_0x587b64(0x4ed)+_0x587b64(0x431)+'lwarz'+_0x587b64(0x444))+(_0x587b64(0x214)+'\x20id=\x22'+'sw2-b'+'uild\x22'+_0x587b64(0x363)+_0x587b64(0x430)+_0x587b64(0x5a3)+_0x587b64(0x3bb)+_0x587b64(0x4a7)+_0x587b64(0x251)+_0x587b64(0x50a)+_0x587b64(0x1c7)+_0x587b64(0x46b)+_0x587b64(0x3f5)+_0x587b64(0x3d6)+'rder:'+'1px\x20s'+_0x587b64(0x4a3)+'rgba('+'255,1'+'43,17'+'7,.35'+_0x587b64(0x43a)+'der-r'+_0x587b64(0x378)+_0x587b64(0x2d8)+_0x587b64(0x3ea)+'?</sp'+'an>'),_0x447af0['HKCAh']),_0x587b64(0x4d6)+'on\x20id'+_0x587b64(0x487)+'-copy'+_0x587b64(0x296)+_0x587b64(0x19e)+_0x587b64(0x41b)+'y:non'+'e;mar'+_0x587b64(0x540)+_0x587b64(0x4bb)+_0x587b64(0x219)+_0x587b64(0x595)+_0x587b64(0x504))+_0x14f559,';bord'+'er:0;'+_0x587b64(0x43f)+':#2a0'+'f1b;b'+_0x587b64(0x5d0)+_0x587b64(0x318)+_0x587b64(0x4e4)+'x;pad'+_0x587b64(0x46b)+_0x587b64(0x40e)+_0x587b64(0x53b)+_0x587b64(0x3fb)+_0x587b64(0x436)+_0x587b64(0x2b6)+_0x587b64(0x47f)+'r:poi'+_0x587b64(0x428)+_0x587b64(0x250)+_0x587b64(0x54b)+_0x587b64(0x253)+'tton>')+(_0x587b64(0x4d6)+'on\x20id'+_0x587b64(0x487)+_0x587b64(0x41f)+_0x587b64(0x36c)+'\x22back'+_0x587b64(0x552)+_0x587b64(0x36b)+_0x587b64(0x3b1)+'ent;b'+'order'+_0x587b64(0x21e)+_0x587b64(0x25b)+_0x587b64(0x3ed)+_0x587b64(0x30e)+_0x587b64(0x220)+'77,.4'+');col'+_0x587b64(0x41d)+_0x587b64(0x279)+';bord'+'er-ra'+_0x587b64(0x319)+_0x587b64(0x3fc)+_0x587b64(0x564)+'g:4px'+'\x208px;'+_0x587b64(0x47f)+_0x587b64(0x1d8)+'nter;'+'\x22>x</'+'butto'+'n>')+(_0x587b64(0x416)+'>'),_0x447af0[_0x587b64(0x409)]),'<butt'+'on\x20id'+'=\x22sw2'+'-snap'+_0x587b64(0x296)+_0x587b64(0x322)+'ackgr'+'ound:'+'trans'+'paren'+_0x587b64(0x304)+'der:1'+'px\x20so'+_0x587b64(0x4ad)+'gba(2'+'55,14'+_0x587b64(0x242)+_0x587b64(0x4e8)+_0x587b64(0x43f)+_0x587b64(0x3e1)+_0x587b64(0x3f3)+_0x587b64(0x5d0)+'-radi'+_0x587b64(0x4e4)+_0x587b64(0x1c7)+_0x587b64(0x46b)+_0x587b64(0x28f)+_0x587b64(0x412)+'rsor:'+_0x587b64(0x584)+'er;\x22>'+_0x587b64(0x4c2)+_0x587b64(0x4bd)+'F9)</'+_0x587b64(0x308)+'n>')+(_0x587b64(0x214)+_0x587b64(0x1ad)+'sw2-h'+_0x587b64(0x50c)+_0x587b64(0x211)+_0x587b64(0x574)+'or:#8'+'d7a99'+'\x22>F9\x20'+'twice'+_0x587b64(0x44d)+'e\x20wal'+_0x587b64(0x20e)+_0x587b64(0x227)+'intin'+_0x587b64(0x22c)+_0x587b64(0x439)+_0x587b64(0x313)+'ks\x20wh'+'ich\x20f'+'ield\x20'+_0x587b64(0x385)+_0x587b64(0x35e)+_0x587b64(0x464)+'>'),_0x587b64(0x416)+'>'),_0x447af0[_0x587b64(0x249)])+_0x447af0['ALEFh'];var _0x3c8090=_0x36d952[_0x587b64(0x483)+_0x587b64(0x224)+_0x587b64(0x266)](_0x447af0[_0x587b64(0x47e)]),_0x4d3670=_0x36d952[_0x587b64(0x483)+'Selec'+'tor'](_0x447af0[_0x587b64(0x55e)]),_0x5a4009=_0x36d952['query'+'Selec'+'tor'](_0x447af0['acebD']),_0x243ecf=_0x36d952['query'+_0x587b64(0x224)+_0x587b64(0x266)](_0x587b64(0x2be)+_0x587b64(0x29d)),_0x48b60d=_0x36d952[_0x587b64(0x483)+_0x587b64(0x224)+_0x587b64(0x266)](_0x587b64(0x2be)+'x'),_0x322219=_0x36d952['query'+'Selec'+_0x587b64(0x266)](_0x447af0['QDQVE']),_0x1c8e73=_0x36d952[_0x587b64(0x483)+_0x587b64(0x224)+_0x587b64(0x266)]('#sw2-'+_0x587b64(0x277)),_0x635c30=null;if(_0x48b60d)_0x48b60d['oncli'+'ck']=function(){var _0x1a7a89=_0x587b64,_0x4fbacb={'mDAFG':function(_0x8f040f,_0x13a358){var _0x1827ee=_0x2c42;return _0x30ff52[_0x1827ee(0x59b)](_0x8f040f,_0x13a358);},'FVuVn':function(_0x170432,_0x4709b9){var _0x462339=_0x2c42;return _0x30ff52[_0x462339(0x1ca)](_0x170432,_0x4709b9);}};if(_0x30ff52[_0x1a7a89(0x294)]===_0x30ff52['JbWIo'])try{if(_0x30ff52[_0x1a7a89(0x204)]('KGpAD',_0x30ff52[_0x1a7a89(0x448)]))return _0x4fbacb[_0x1a7a89(0x226)](_0x57d1c0,_0x16be1e[_0x59dce9][_0x1a7a89(0x2c2)+'h']);else _0x36d952[_0x1a7a89(0x2ee)+'e']();}catch(_0x8019c9){}else{if(_0x4fbacb[_0x1a7a89(0x56c)](!_0x467bce,!_0x122251))return null;var _0x53ba14=new _0x38b6ed(_0x3d04cc)['getCl'+'assNa'+'me']();return _0x53ba14===_0xcacded?null:_0x53ba14;}};if(_0x322219)_0x322219['oncli'+'ck']=function(){_0x4783e0(_0x30ff52['XaxOf']);};if(_0x243ecf)_0x243ecf[_0x587b64(0x2c4)+'ck']=function(){var _0x11dc5e=_0x587b64,_0x2f98a2={'MsZGp':_0x11dc5e(0x3c3)+'d','VQoWb':function(_0xe8e7f3,_0xbd0d0b){return _0xe8e7f3+_0xbd0d0b;},'wGJJy':'Sakur'+'a/UWM'+_0x11dc5e(0x52e)+_0x11dc5e(0x393)+_0x11dc5e(0x59c)+_0x11dc5e(0x27a)+'nkey\x20'+_0x11dc5e(0x467)+'ard-r'+_0x11dc5e(0x47c)+'.','ucQvz':_0x30ff52[_0x11dc5e(0x1e7)],'aoNPs':_0x11dc5e(0x29d),'gmGTi':function(_0x1baa78){return _0x1baa78();}},_0x5caee5=_0x30ff52[_0x11dc5e(0x59b)](_0x30ff52[_0x11dc5e(0x59b)](_0x208cf1+'\x0a',_0x635c30?JSON[_0x11dc5e(0x293)+'gify'](_0x635c30,null,0xe24+0x7*0x301+-0x2*0x1195):''),'\x0a')+_0x5826c3,_0x3d3e82=function(){var _0x1e31d4=_0x11dc5e;if(_0x243ecf)_0x243ecf[_0x1e31d4(0x255)+'onten'+'t']=_0x2f98a2[_0x1e31d4(0x481)];};if(navigator[_0x11dc5e(0x52c)+'oard']&&navigator['clipb'+'oard'][_0x11dc5e(0x3e2)+'Text']){if('KlDTM'===_0x30ff52[_0x11dc5e(0x51c)])navigator[_0x11dc5e(0x52c)+'oard'][_0x11dc5e(0x3e2)+_0x11dc5e(0x367)](_0x5caee5)[_0x11dc5e(0x1a6)](_0x3d3e82,function(){_0x45aced();});else{_0x29b13e[_0x316544]='0x'+_0x3246fc[_0x24ed0c][_0x11dc5e(0x5d8)][_0x11dc5e(0x2ba)+_0x11dc5e(0x3bc)](-0x104+-0x206f+0x175*0x17);if(_0x414f2d[_0x2c8945][_0x11dc5e(0x41e)+_0x11dc5e(0x490)])_0x2a0b79['push'](_0x5430a9);}}else _0x45aced();function _0x45aced(){var _0x1e9435=_0x11dc5e,_0x3e563f=document[_0x1e9435(0x354)+_0x1e9435(0x34e)+_0x1e9435(0x2cf)](_0x2f98a2[_0x1e9435(0x536)]);_0x3e563f['value']=_0x5caee5;if(!document[_0x1e9435(0x442)])return;document['body'][_0x1e9435(0x3b4)+'dChil'+'d'](_0x3e563f),_0x3e563f['selec'+'t']();try{'ADsno'!=='ADsno'?_0x2d7f4d['warni'+'ngs']['push'](_0x2f98a2[_0x1e9435(0x458)](_0x1e9435(0x33e)+'ER\x20UW'+_0x1e9435(0x2ae)+_0x1e9435(0x360)+'OK\x20OV'+'ER\x20wi'+_0x1e9435(0x493)+_0x1e9435(0x2b4)+'WebMo'+_0x1e9435(0x408)+_0x1e9435(0x1fc)+_0x1e9435(0x2c9)+'me\x20we'+_0x1e9435(0x3e4)+'d\x20was'+'\x20'+(_0x1e9435(0x41e)+_0x1e9435(0x5e3)+'y\x20a\x20d'+'iffer'+_0x1e9435(0x1b1)+_0x1e9435(0x2a9)+_0x1e9435(0x1cc)+_0x1e9435(0x4e7)+_0x1e9435(0x46a)+_0x1e9435(0x1e2)+'\x20the\x20'+'wrong'+_0x1e9435(0x3f1)+'ct\x20fo'+'r\x20')+(_0x1e9435(0x197)+_0x1e9435(0x400)+'hile\x20'+_0x1e9435(0x3de)+_0x1e9435(0x24b)+'lding'+_0x1e9435(0x3c9)+_0x1e9435(0x420)+_0x1e9435(0x48a)+_0x1e9435(0x301)+_0x1e9435(0x5ab)+'every'+'\x20othe'+'r\x20'),_0x2f98a2['wGJJy'])):(document[_0x1e9435(0x19f)+'omman'+'d'](_0x2f98a2[_0x1e9435(0x1c1)]),_0x2f98a2[_0x1e9435(0x394)](_0x3d3e82));}catch(_0x1bbd23){}_0x3e563f[_0x1e9435(0x2ee)+'e']();}};_0x447af0[_0x587b64(0x402)](setTimeout,function(){var _0x3b1b61=_0x587b64,_0x470735={'YNUFs':_0x447af0[_0x3b1b61(0x499)]};if(_0x447af0['sSfCw'](_0x447af0[_0x3b1b61(0x53a)],_0x447af0[_0x3b1b61(0x53a)])){if(_0x635c30)return;if(!_0x3c8090||!_0x5a4009)return;_0x3c8090[_0x3b1b61(0x255)+_0x3b1b61(0x2ec)+'t']=_0x3b1b61(0x32f)+'port\x20'+_0x3b1b61(0x530)+'\x2060s\x20'+_0x3b1b61(0x5ae)+'me\x20no'+'t\x20inj'+_0x3b1b61(0x555)+'?',_0x3c8090[_0x3b1b61(0x211)][_0x3b1b61(0x43f)]='#ffb3'+'c7',_0x5a4009['textC'+_0x3b1b61(0x2ec)+'t']=_0x447af0[_0x3b1b61(0x36d)](_0x447af0['piGoy'],_0x447af0['vQNZK'])+('so\x20th'+'e\x20rem'+_0x3b1b61(0x199)+_0x3b1b61(0x577)+'pects'+_0x3b1b61(0x260)+'\x0a\x0a')+(_0x3b1b61(0x310)+_0x3b1b61(0x22f)+'rmonk'+_0x3b1b61(0x56e)+_0x3b1b61(0x23b)+_0x3b1b61(0x4d5)+_0x3b1b61(0x31d)+_0x3b1b61(0x1c2)+_0x3b1b61(0x26d)+_0x3b1b61(0x45c)+_0x3b1b61(0x4ec)+_0x3b1b61(0x3a0)+_0x3b1b61(0x4a5))+_0x447af0[_0x3b1b61(0x1e8)]+(_0x3b1b61(0x508)+_0x3b1b61(0x46f)+'sakur'+_0x3b1b61(0x535)+_0x3b1b61(0x1a9)+_0x3b1b61(0x5e6)+_0x3b1b61(0x32d)+_0x3b1b61(0x276)+_0x3b1b61(0x5d9)+_0x3b1b61(0x252)+'g\x20scr'+_0x3b1b61(0x23e)+_0x3b1b61(0x2ac))+_0x447af0[_0x3b1b61(0x3dc)]+('Reloa'+'d\x20the'+'\x20game'+_0x3b1b61(0x579)+_0x3b1b61(0x320)+_0x3b1b61(0x452)+_0x3b1b61(0x599)+'\x20this'+_0x3b1b61(0x217)+_0x3b1b61(0x401)+'in.');}else _0x349728[_0x3b1b61(0x1e9)+'eProp'+'erty'](_0x368d33,_0x470735['YNUFs'],{'value':_0x2e3390['name'],'configurable':!![]});},-0x2*-0x131b+-0xba17*0x1+-0x9*-0x2a79);var _0x419436={'set':function(_0x3b828d){var _0x31839a=_0x587b64,_0x3ff5fd={'sTIww':function(_0x5e269e,_0x4b93f8){return _0x5e269e===_0x4b93f8;},'AHYAL':function(_0x390bd6,_0x1cf614){var _0x3f7b36=_0x2c42;return _0x447af0[_0x3f7b36(0x503)](_0x390bd6,_0x1cf614);},'hjxVg':function(_0x57c9ef,_0xea41b9){var _0x1cc9c4=_0x2c42;return _0x447af0[_0x1cc9c4(0x1c5)](_0x57c9ef,_0xea41b9);},'kNhZM':_0x447af0['pQIhP']};if(_0x447af0['QCuNg'](_0x447af0['cFFDM'],_0x447af0['Hdwot']))return _0x593f68['sourc'+'e']=_0x30ff52[_0x31839a(0x348)],_0x3c1748[_0x31839a(0x1c8)];else{_0x635c30=_0x3b828d;if(_0x243ecf)_0x243ecf[_0x31839a(0x211)][_0x31839a(0x594)+'ay']='';if(_0x4d3670){_0x4d3670[_0x31839a(0x255)+_0x31839a(0x2ec)+'t']='v'+(_0x3b828d[_0x31839a(0x49c)+'on']||'?');var _0x6139b8=_0xff4f27,_0xba67a2=_0x3b828d['versi'+'on']||'';_0x4d3670['style'][_0x31839a(0x43f)]=_0xba67a2===_0x6139b8?_0x14f559:_0x447af0['GKOwX'],_0x4d3670['style'][_0x31839a(0x519)+'rColo'+'r']=_0x447af0[_0x31839a(0x3be)](_0xba67a2,_0x6139b8)?_0x31839a(0x4a6)+'255,1'+'43,17'+_0x31839a(0x533)+')':_0x447af0[_0x31839a(0x52b)];}var _0xcdcaa2=_0x3b828d[_0x31839a(0x494)+_0x31839a(0x325)]&&_0x3b828d[_0x31839a(0x494)+'nces'][_0x31839a(0x1fb)+_0x31839a(0x414)+'ler'],_0x2eda9c=Math[_0x31839a(0x297)]((_0x3b828d[_0x31839a(0x59e)+_0x31839a(0x501)]||-0x24cd+-0x32d*-0x5+-0x2*-0xa76)/(-0x3b4+-0x228c+0x2a28));if(_0x3c8090){if(_0x447af0['aWeXG'](_0x447af0['klXpx'],'VPKfy')){var _0x4569ec,_0x12c674;if(_0xcdcaa2&&_0x3b828d[_0x31839a(0x42a)+'y']&&_0x3b828d[_0x31839a(0x42a)+'y']['FPSco'+_0x31839a(0x414)+'ler']){if('oDrhJ'===_0x447af0[_0x31839a(0x334)])_0x4569ec=_0x447af0[_0x31839a(0x1c5)](_0x447af0[_0x31839a(0x1d1)](_0x447af0['DQAcx']('LIVE\x20'+'·\x20',Object[_0x31839a(0x432)](_0x3b828d['insta'+'nces'])[_0x31839a(0x2c2)+'h']),'\x20obje'+'cts\x20·'+'\x20'),_0x2eda9c)+'s',_0x12c674=_0x31839a(0x39f)+'a8';else return _0x6e0276[0x2*0xb65+-0x141*0x1f+-0x17*-0xb3]=_0x4567dd,_0x4021f9[-0xe10+-0xb*0x2f3+0x1*0x2e81];}else{if(_0x447af0[_0x31839a(0x27f)](_0x3b828d['hooks'+'Appli'+'ed'],-0xbed*0x2+-0x1*-0x14b7+-0x49*-0xb))_0x4569ec=_0x447af0[_0x31839a(0x1d1)]('hooks'+_0x31839a(0x3e4)+_0x31839a(0x1cb),_0x2eda9c)+'s',_0x12c674=_0x447af0[_0x31839a(0x2c0)];else{if(_0x3b828d[_0x31839a(0x558)+_0x31839a(0x2d4)]){if('ZHIPG'===_0x447af0['mPvUz']){var _0x53304d=_0x145643[_0x31839a(0x52f)+'r'](function(_0x203101){var _0x51725c=_0x31839a;return _0x3ff5fd[_0x51725c(0x4ca)](_0x203101[_0x51725c(0x4aa)],_0x2c632d);})[-0x136e+0x1*-0x2435+0x37a3];_0x3021e6={'type':_0x15f7f7,'atMs':_0x3ff5fd['AHYAL'](_0x496e85[_0x31839a(0x2a1)](),_0xffdf00),'originalFunc':!!(_0x53304d&&_0x53304d['hook']&&_0x3ff5fd[_0x31839a(0x4ca)](typeof _0x53304d['hook'][_0x31839a(0x4ec)+'nalFu'+'nc'],'funct'+'ion')),'resolveGameAtFire':!!_0x1c1148(),'gameSourceAtFire':_0x495e10[_0x31839a(0x591)+'e']};}else _0x4569ec=_0x31839a(0x469)+_0x31839a(0x575)+_0x31839a(0x57a)+'·\x20'+_0x2eda9c+'s',_0x12c674=_0x447af0[_0x31839a(0x2c0)];}else _0x4569ec=(_0x3b828d['arm']&&_0x3b828d[_0x31839a(0x4e0)]['ok']?_0x447af0[_0x31839a(0x273)]:_0x31839a(0x553)+'g\x20·\x20')+_0x2eda9c+'s',_0x12c674='#ffd4'+'8a';}}_0x3c8090['textC'+'onten'+'t']=_0x4569ec,_0x3c8090['style'][_0x31839a(0x43f)]=_0x12c674;}else return _0x5e3bed&&_0x286af0[_0x31839a(0x222)+'r']?_0x1a5636[_0x31839a(0x222)+'r'][_0x31839a(0x2fc)+_0x31839a(0x2c3)]:-0x17*0x1a7+-0x1*-0x2485+0x17c;}if(_0x1c8e73){if(_0x447af0['PRIeR']!=='fiRDI')_0x1c8e73['textC'+_0x31839a(0x2ec)+'t']=_0x3b828d[_0x31839a(0x350)]&&_0x3b828d[_0x31839a(0x350)][_0x31839a(0x2c2)+'h']?_0x447af0[_0x31839a(0x1d1)]('Diff\x20'+_0x31839a(0x4be)+'apsho'+_0x31839a(0x45d),_0x3b828d['diff'][_0x31839a(0x44f)](',\x20')):_0x447af0[_0x31839a(0x5a2)];else{var _0x27fd63=_0x5368df[_0x31839a(0x1c4)+'Insta'+_0x31839a(0x596)]||_0x2c21cd[_0x31839a(0x1c4)+_0x31839a(0x292)]||_0x370b43[_0x31839a(0x3f4)];if(_0x27fd63)return _0x4432e8['sourc'+'e']='windo'+_0x31839a(0x317)+_0x31839a(0x311),_0x27fd63;}}if(_0x5a4009)try{_0x5a4009[_0x31839a(0x255)+'onten'+'t']=_0x3b498d(_0x3b828d);}catch(_0x1ae24b){if(_0x447af0[_0x31839a(0x3b5)](_0x447af0['WFzgB'],_0x31839a(0x3e8)))return _0x501117['faile'+'d']++,_0x9736c8['lastE'+'rror']=_0xfea81e[_0x31839a(0x3f2)+'rror']||_0x3ff5fd[_0x31839a(0x27e)](_0x3ff5fd[_0x31839a(0x5cd)],_0x359a3e[_0x31839a(0x2ba)+_0x31839a(0x3bc)](-0xbfa+0x1*0xc73+0x15*-0x5))+('\x20past'+_0x31839a(0x2a3)+_0x31839a(0x33c)+'0x')+_0x5405c0[_0x31839a(0x2fc)+_0x31839a(0x2c3)][_0x31839a(0x2ba)+_0x31839a(0x3bc)](-0x5*0x1d0+-0x185d+0x217d),_0x2bc7d1;else _0x5a4009['textC'+_0x31839a(0x2ec)+'t']=JSON[_0x31839a(0x293)+_0x31839a(0x492)](_0x3b828d,null,0xd4*0x10+0x1dea+-0x2b29);}console[_0x31839a(0x225)]('%c[sa'+_0x31839a(0x434)+_0x31839a(0x571)+'lWarz'+_0x31839a(0x205)+'rt',_0x447af0['OXNlx'](_0x31839a(0x43f)+':'+_0x14f559,_0x31839a(0x513)+'-weig'+_0x31839a(0x592)+'0'),_0x3b828d),console['log'](_0x208cf1+'\x0a'+JSON[_0x31839a(0x293)+_0x31839a(0x492)](_0x3b828d,null,0x7*0x23+0x70d*-0x2+-0xd26*-0x1)+'\x0a'+_0x5826c3);}}};return _0x36d952[_0x587b64(0x1b9)+'et'][_0x587b64(0x2b3)]='1',_0x36d952['api']=_0x419436,_0x419436;}function _0x3b498d(_0x443f51){var _0x4fa70c=_0xde41ba,_0x34b466={'VxNgm':function(_0x3db96f,_0x1e645f){return _0x3db96f+_0x1e645f;},'WIYCM':_0x447af0[_0x4fa70c(0x20d)]},_0x1bb44c=[];_0x1bb44c['push'](_0x447af0[_0x4fa70c(0x3f7)](_0x447af0['tjAbM'](_0x447af0[_0x4fa70c(0x547)],_0x443f51[_0x4fa70c(0x2fa)]||'?'),_0x4fa70c(0x543))+Math['round'](_0x447af0[_0x4fa70c(0x3db)](_0x443f51[_0x4fa70c(0x59e)+_0x4fa70c(0x501)]||0x1*0xd4+0xe1d*0x2+0xe87*-0x2,-0x183a+0x840+0x13e2))+'s)'),_0x1bb44c['push'](_0x447af0[_0x4fa70c(0x4fd)]('uwmk\x20'+_0x4fa70c(0x57d)+(_0x443f51['uwmk']?_0x447af0[_0x4fa70c(0x2aa)]:'no')+(_0x4fa70c(0x524)+_0x4fa70c(0x4eb)+'\x20')+(_0x443f51[_0x4fa70c(0x2bb)+'pCont'+_0x4fa70c(0x284)]?_0x4fa70c(0x573):'no')+(_0x4fa70c(0x268)+_0x4fa70c(0x3dd)),_0x447af0['DuRbt'](_0x443f51[_0x4fa70c(0x4d0)+_0x4fa70c(0x51a)],null)?_0x443f51['typeC'+_0x4fa70c(0x51a)]:'?')),_0x1bb44c[_0x4fa70c(0x380)](_0x447af0[_0x4fa70c(0x1eb)](_0x447af0['OXNlx'](_0x447af0[_0x4fa70c(0x580)](_0x4fa70c(0x40c)+_0x4fa70c(0x57d)+_0x443f51['hooks'+_0x4fa70c(0x57b)+'ed'],'/'),_0x443f51['hooks'+'Total']),_0x4fa70c(0x5b3)+_0x4fa70c(0x32e))),_0x1bb44c['push']('');var _0x11c734=_0x443f51[_0x4fa70c(0x494)+_0x4fa70c(0x325)]||{},_0x2f8257=Object['keys'](_0x11c734);!_0x2f8257[_0x4fa70c(0x2c2)+'h']&&(_0x1bb44c['push']('no\x20li'+'ve\x20ob'+_0x4fa70c(0x49e)+_0x4fa70c(0x2a0)+_0x4fa70c(0x35b)+'yet.'),_0x1bb44c['push'](''),_0x1bb44c['push'](_0x4fa70c(0x1ed)+_0x4fa70c(0x445)+_0x4fa70c(0x549)+_0x4fa70c(0x397)+'e\x20gam'+'e\x27s\x20o'+'wn\x20Up'+_0x4fa70c(0x303)+');\x20no'+'thing'+_0x4fa70c(0x2a0)+_0x4fa70c(0x35b)+_0x4fa70c(0x345)),_0x1bb44c[_0x4fa70c(0x380)](_0x4fa70c(0x27b)+_0x4fa70c(0x1e5)+_0x4fa70c(0x46d)+'et,\x20o'+_0x4fa70c(0x374)+'\x20sign'+_0x4fa70c(0x32a)+_0x4fa70c(0x521)+'not\x20m'+'atch.'));for(var _0x50e0e4=-0x1*-0x1433+0x21a0+-0x35d3;_0x447af0[_0x4fa70c(0x1ec)](_0x50e0e4,_0x2f8257[_0x4fa70c(0x2c2)+'h']);_0x50e0e4++){var _0x2088ab=_0x2f8257[_0x50e0e4];_0x1bb44c[_0x4fa70c(0x380)](_0x447af0[_0x4fa70c(0x3b9)](_0x2088ab,_0x447af0['HvaEs'])+_0x11c734[_0x2088ab]);}_0x1bb44c[_0x4fa70c(0x380)]('');var _0x755b4f=_0x443f51[_0x4fa70c(0x42a)+'y']||{},_0x2b86cc=Object['keys'](_0x755b4f);for(var _0x29bc0c=-0x1*-0xd3f+-0x1172*0x1+0x433;_0x29bc0c<_0x2b86cc[_0x4fa70c(0x2c2)+'h'];_0x29bc0c++){var _0x26961d=_0x2b86cc[_0x29bc0c],_0x33ab1a=_0x755b4f[_0x26961d];if(!_0x33ab1a||!_0x33ab1a['lengt'+'h'])continue;_0x1bb44c['push'](_0x447af0[_0x4fa70c(0x228)](_0x4fa70c(0x1f6)+_0x26961d+'\x20',new Array(Math[_0x4fa70c(0x4cc)](-0x442+0x19b1+0xab7*-0x2,0x2e*-0x93+0x16*0x5f+0x2*0x931-_0x26961d[_0x4fa70c(0x2c2)+'h']))[_0x4fa70c(0x44f)]('─'))),_0x1bb44c[_0x4fa70c(0x380)](_0x447af0[_0x4fa70c(0x4e9)]);for(var _0x3f802e=-0x1c9*-0xc+0x19a+-0x34a*0x7;_0x3f802e<_0x33ab1a['lengt'+'h'];_0x3f802e++){var _0x4dc756=_0x33ab1a[_0x3f802e],_0x4e12a1=typeof _0x4dc756['v']===_0x447af0[_0x4fa70c(0x309)]?Math['round'](_0x447af0['HMbGO'](_0x4dc756['v'],0x5*-0x1de+-0x1b*0x14f+0x3093))/(-0xd1*-0x1f+-0x24e8*0x1+-0x51*-0x31):_0x4dc756['v'];_0x1bb44c['push'](_0x447af0['DQAcx']('\x20\x20'+_0x447af0['LLgaA']('0x',_0x4dc756['o']['toStr'+'ing'](0x128+-0x153e+-0xa13*-0x2))['padEn'+'d'](-0x916+0x3*0xbf8+0x6*-0x477)+'\x20',_0x4dc756['k']['padEn'+'d'](0x12af*0x1+-0xd08+-0x2*0x2ce))+'\x20'+_0x447af0['sIqya'](String,_0x4e12a1)[_0x4fa70c(0x5b6)+'d'](-0x18a1+-0x1*0x77c+0x202d)+'\x20'+(_0x4dc756[_0x4fa70c(0x31f)]||''));}_0x1bb44c['push']('');}if(_0x443f51['warni'+_0x4fa70c(0x474)]&&_0x443f51['warni'+'ngs'][_0x4fa70c(0x2c2)+'h']){if(_0x4fa70c(0x39d)!==_0x4fa70c(0x4d3)){_0x1bb44c[_0x4fa70c(0x380)]('warni'+'ngs');for(var _0x1e618e=-0x25*-0x41+-0x133+-0x419*0x2;_0x1e618e<_0x443f51['warni'+'ngs']['lengt'+'h'];_0x1e618e++)_0x1bb44c[_0x4fa70c(0x380)](_0x4fa70c(0x3e9)+_0x443f51['warni'+_0x4fa70c(0x474)][_0x1e618e]);}else _0x4c6d5e=_0x34b466['VxNgm'](_0x34b466[_0x4fa70c(0x5d6)],_0x415fe8)+'s',_0x472bcc=_0x4fa70c(0x3ca)+'8a';}return _0x1bb44c[_0x4fa70c(0x44f)]('\x0a');}window[_0xde41ba(0x24a)+_0xde41ba(0x206)+_0xde41ba(0x281)+'r'](_0x447af0['dUgNJ'],function(_0xd4b95e){var _0xc52f45=_0xde41ba,_0x135839={'HXxoI':_0x447af0[_0xc52f45(0x372)],'AQfHA':function(_0x512100,_0x25f1b3,_0x45b7f6){return _0x447af0['tahtT'](_0x512100,_0x25f1b3,_0x45b7f6);},'dtRsU':function(_0x124b44,_0x1f39fc){return _0x124b44+_0x1f39fc;}};if(_0x447af0[_0xc52f45(0x3b5)](_0x447af0[_0xc52f45(0x3a2)],_0xc52f45(0x447))){if(_0x54f944[_0xc52f45(0x2c2)+'h'])return!![];if(!_0x54f60f[_0xc52f45(0x2b4)+_0xc52f45(0x2ce)+_0xc52f45(0x326)]||!_0x37706d[_0xc52f45(0x2b4)+_0xc52f45(0x2ce)+_0xc52f45(0x326)][_0xc52f45(0x2c9)+'me'])return![];var _0xf7fc05=_0x24f15d[_0xc52f45(0x2b4)+_0xc52f45(0x2ce)+_0xc52f45(0x326)][_0xc52f45(0x2c9)+'me'];if(!_0xf7fc05[_0xc52f45(0x3aa)+'ns']||!_0xf7fc05[_0xc52f45(0x3aa)+'ns'][_0xc52f45(0x2c2)+'h'])return![];_0x25f972=_0x5cb801['Unity'+'WebMo'+_0xc52f45(0x326)]['Value'+'Wrapp'+'er'],_0x14801b=_0x205a76||_0xf7fc05['plugi'+'ns'][_0xf7fc05['plugi'+'ns']['lengt'+'h']-(-0x34*0x1c+0x1c51+-0x16a0)];if(!_0x2e97b4||typeof _0x14a935['hookP'+_0xc52f45(0x26e)]!==_0x135839[_0xc52f45(0x314)])return![];for(var _0x2045e3=-0x9d1+0xbe7+0x216*-0x1;_0x2045e3<_0x4a0615[_0xc52f45(0x2c2)+'h'];_0x2045e3++){var _0x13848b=_0x40e961[_0x2045e3];try{var _0x1dcd5f=_0x127c10['hookP'+_0xc52f45(0x26e)]({'typeName':_0x13848b[_0xc52f45(0x4aa)],'methodName':_0xc52f45(0x572)+'e','params':[_0xc52f45(0x4b1),_0xc52f45(0x4b1)],'returnType':_0x1acfcb},_0x135839[_0xc52f45(0x5be)](_0x2cbf96,_0x13848b['type'],_0x13848b['keep']));_0x122f3d[_0xc52f45(0x380)]({'type':_0x13848b[_0xc52f45(0x4aa)],'hook':_0x1dcd5f,'keep':_0x13848b[_0xc52f45(0x347)]});}catch(_0x4522e8){_0x3cd580[_0xc52f45(0x380)](_0x135839[_0xc52f45(0x5d3)](_0x13848b['type'],':\x20')+_0x502b1a(_0x4522e8&&_0x4522e8['messa'+'ge']||_0x4522e8)['slice'](-0x1*-0xcbd+0xb*-0x7+-0xc70,-0x1a08+-0x18f9+0x33a1));}}return _0x10721d[_0xc52f45(0x2c2)+'h']>0x199*-0x9+0x1*-0x1455+0x22b6;}else{var _0x4f94fc=_0xd4b95e[_0xc52f45(0x381)];if(!_0x4f94fc||_0x4f94fc[_0xc52f45(0x389)+'ura']!==_0xcef4c6)return;try{if(_0x447af0[_0xc52f45(0x3b5)](_0x4f94fc['kind'],_0xc52f45(0x46e))){_0x447af0['DkLML'](_0x37ec52)['set']({'host':_0x4f94fc['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x4f94fc[_0xc52f45(0x2b2)]===_0xc52f45(0x557)+'t')_0x37ec52()[_0xc52f45(0x31b)](_0x4f94fc['repor'+'t']);}catch(_0x25fd3b){console[_0xc52f45(0x3ad)]('%c[sa'+'kura]'+_0xc52f45(0x217)+'l\x20upd'+_0xc52f45(0x2c1)+_0xc52f45(0x5cb),_0xc52f45(0x43f)+':'+_0x14f559,_0x25fd3b);}}});if(document['body'])_0x37ec52();else document[_0xde41ba(0x24a)+'entLi'+_0xde41ba(0x281)+'r'](_0x447af0['xuQbQ'],_0x37ec52,{'once':!![]});return;}window[_0xde41ba(0x230)+_0xde41ba(0x2af)+_0xde41ba(0x3e5)]=window[_0xde41ba(0x230)+_0xde41ba(0x2af)+'W__']||{'at':Date[_0xde41ba(0x2a1)]()};function _0x30274c(_0x2f7836,_0x83680f){var _0x45067e=_0xde41ba,_0x2eded5={'__sakura':_0xcef4c6,'kind':_0x2f7836};if(_0x83680f){for(var _0x32dcb2 in _0x83680f)_0x2eded5[_0x32dcb2]=_0x83680f[_0x32dcb2];}try{if(window[_0x45067e(0x1e4)+'t']&&_0x447af0[_0x45067e(0x4af)](window[_0x45067e(0x1e4)+'t'],window))window['paren'+'t'][_0x45067e(0x538)+'essag'+'e'](_0x2eded5,'*');}catch(_0x5eeceb){}try{if('ZXSRS'!==_0x45067e(0x33b)){if(window[_0x45067e(0x31e)]&&_0x447af0['aWeXG'](window['top'],window))window['top']['postM'+_0x45067e(0x2a5)+'e'](_0x2eded5,'*');}else return{'version':_0x13306f,'when':new _0x16e78f()['toISO'+'Strin'+'g'](),'elapsedMs':_0x447af0[_0x45067e(0x503)](_0x35e8cf['now'](),_0x2a8767),'host':_0x47ca00,'uwmk':!!(_0x5f2eec['Unity'+_0x45067e(0x2ce)+_0x45067e(0x326)]&&_0x5679cc[_0x45067e(0x2b4)+'WebMo'+_0x45067e(0x326)]['Runti'+'me']),'il2CppContext':![],'arm':_0x296979,'hooksTotal':_0x109616['lengt'+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x215a45(_0xa755fa&&_0x56a749['messa'+'ge']||_0x38d0b7)};}catch(_0x5108cb){}}console['log'](_0xde41ba(0x198)+'kura]'+_0xde41ba(0x22d)+'LAYER'+'\x20ACTI'+_0xde41ba(0x19d)+_0xff4f27,_0xde41ba(0x43f)+':'+_0x14f559+_0x447af0[_0xde41ba(0x4c5)],{'host':_0x2c4bda,'href':location[_0xde41ba(0x200)],'version':_0xff4f27}),_0x30274c(_0xde41ba(0x46e),{'host':_0x2c4bda,'role':_0x4088c5});var _0x3a0088=window[_0xde41ba(0x230)+_0xde41ba(0x2af)+_0xde41ba(0x3e5)]&&window[_0xde41ba(0x230)+'URA_S'+_0xde41ba(0x3e5)]['at']||Date[_0xde41ba(0x2a1)]();try{if(_0xde41ba(0x4f5)==='fzHEb'){var _0x36068d=new BroadcastChannel(_0xde41ba(0x287)+_0xde41ba(0x1a3));_0x36068d[_0xde41ba(0x3a5)+_0xde41ba(0x245)]=function(_0x2cd2b7){var _0x181723=_0xde41ba,_0x2aced8=_0x2cd2b7[_0x181723(0x381)];if(_0x2aced8&&_0x2aced8['__sak'+'ura']===_0xcef4c6&&_0x2aced8[_0x181723(0x2b2)]===_0x447af0['nAQDH'])_0x447af0[_0x181723(0x402)](_0x8ede5c,_0x2aced8['cmd'],_0x2aced8[_0x181723(0x502)]);};}else{var _0x13c1c2={};try{var _0x209645=_0x447af0['rLheW'][_0xde41ba(0x3f8)]('|'),_0x2181a7=-0x59f*-0x3+-0xe27*0x1+0x15b*-0x2;while(!![]){switch(_0x209645[_0x2181a7++]){case'0':_0x13c1c2[_0xde41ba(0x246)+_0xde41ba(0x269)+'e']=_0xfa9b31&&_0xfa9b31[_0xde41ba(0x1c8)]?typeof _0xfa9b31['_game']:_0x447af0[_0xde41ba(0x3e6)];continue;case'1':_0x13c1c2[_0xde41ba(0x3aa)+_0xde41ba(0x37e)+_0xde41ba(0x5c3)+_0xde41ba(0x598)+_0xde41ba(0x4e3)]=!!(_0x2e1857&&_0x573961['_runt'+_0xde41ba(0x582)]&&_0x447af0[_0xde41ba(0x25d)](_0x3fdb11['_runt'+'ime'],_0xfa9b31));continue;case'2':_0x13c1c2['plugi'+_0xde41ba(0x37e)+_0xde41ba(0x3ab)+'me']=_0xb4d573&&_0x282d5e['_runt'+_0xde41ba(0x582)]&&_0x1dd8e0['_runt'+'ime'][_0xde41ba(0x1c8)]?typeof _0x264ecc[_0xde41ba(0x27c)+'ime']['_game']:_0x447af0[_0xde41ba(0x3e6)];continue;case'3':_0x13c1c2[_0xde41ba(0x5cf)+_0xde41ba(0x368)]=!!(_0xfa9b31&&_0x2c029a&&_0xfa9b31['__sak'+'uraTa'+'g']===_0x5042ce);continue;case'4':var _0xfa9b31=_0x5735e2[_0xde41ba(0x2b4)+_0xde41ba(0x2ce)+'dkit']&&_0x48e0a9['Unity'+'WebMo'+'dkit'][_0xde41ba(0x2c9)+'me'];continue;case'5':_0x13c1c2['tag']=_0xfa9b31&&_0xfa9b31[_0xde41ba(0x389)+_0xde41ba(0x39a)+'g']||null;continue;}break;}}catch(_0x290f9d){_0x13c1c2[_0xde41ba(0x38e)]=_0x456725(_0x290f9d&&_0x290f9d[_0xde41ba(0x28a)+'ge']||_0x290f9d);}return _0x13c1c2;}}catch(_0x38a795){}var _0x545c5d=[];(function _0x9b41c3(){var _0x52de5e=_0xde41ba,_0x2137fe={'REgdv':_0x52de5e(0x293)+'g','olLvg':function(_0x572126,_0x4e35f9){return _0x572126!==_0x4e35f9;},'unwLe':function(_0x42b178,_0x134c67){return _0x42b178===_0x134c67;},'bEinq':function(_0x319407,_0x2b3c46){return _0x319407<_0x2b3c46;}},_0x5db83f=[_0x52de5e(0x225),_0x447af0['fGQJM'],_0x52de5e(0x38e),_0x447af0[_0x52de5e(0x5d4)],_0x447af0[_0x52de5e(0x54f)]];for(var _0x545c10=0x5*-0x387+-0xdef+-0xa86*-0x3;_0x545c10<_0x5db83f[_0x52de5e(0x2c2)+'h'];_0x545c10++){(function(_0x3744b4){var _0x213440=_0x52de5e,_0x126dbe=console[_0x3744b4];if(typeof _0x126dbe!==_0x447af0[_0x213440(0x372)])return;console[_0x3744b4]=function(){var _0x5b2cb9=_0x213440;try{var _0x262d36='';for(var _0x29ebd0=0x26ab+0xfd1*0x1+-0x367c;_0x29ebd0<arguments['lengt'+'h'];_0x29ebd0++){var _0x4f5ddb=arguments[_0x29ebd0];if(typeof _0x4f5ddb===_0x2137fe[_0x5b2cb9(0x4e2)])_0x262d36+=_0x4f5ddb;else{if(_0x4f5ddb&&_0x4f5ddb['messa'+'ge'])_0x262d36+=_0x4f5ddb[_0x5b2cb9(0x28a)+'ge'];}}if(_0x2137fe['olLvg'](_0x262d36[_0x5b2cb9(0x466)+'Of'](_0x208cf1),-(0x557+-0x2aa+-0x13*0x24)))return _0x126dbe[_0x5b2cb9(0x1b4)](console,arguments);if(_0x262d36[_0x5b2cb9(0x466)+'Of'](_0x5b2cb9(0x2b4)+_0x5b2cb9(0x2ce)+_0x5b2cb9(0x326))!==-(-0xe*-0x26c+0x6a*-0x58+0x289)){var _0x1bf7ea=_0x262d36['slice'](-0xab4*0x1+0x1*0x23de+-0x192a,-0xb*0x325+0x1e0a+0x5b9);if(_0x2137fe[_0x5b2cb9(0x3d8)](_0x545c5d[_0x5b2cb9(0x466)+'Of'](_0x1bf7ea),-(0x24f6+-0x1*-0xc1+-0x25b6*0x1))&&_0x2137fe[_0x5b2cb9(0x2f0)](_0x545c5d[_0x5b2cb9(0x2c2)+'h'],0x1*-0x1e7d+0x1570*-0x1+0x3429))_0x545c5d[_0x5b2cb9(0x380)](_0x1bf7ea);}}catch(_0x182483){}return _0x126dbe[_0x5b2cb9(0x1b4)](console,arguments);};}(_0x5db83f[_0x545c10]));}}());var _0x445b94={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x47a8a9=null,_0x1f1f9c=null,_0x42ddac=-(0x1b96+-0x32d+-0x1868),_0x26d18f=null;function _0x32f373(_0x4b5955){var _0x50cf22=_0xde41ba;try{if(!_0x4b5955)return;var _0x1a0c66=_0x4b5955[_0x50cf22(0x494)+_0x50cf22(0x596)]?_0x4b5955[_0x50cf22(0x494)+'nce'][_0x50cf22(0x589)+'ts']:_0x4b5955[_0x50cf22(0x589)+'ts']||null;if(!_0x1a0c66)return;if(!_0x26d18f)try{_0x26d18f=Object[_0x50cf22(0x432)](_0x1a0c66)[_0x50cf22(0x1e0)](-0x2696+-0x157f*0x1+0x3c15,-0x13*-0xe0+0x6e2*-0x1+0x13*-0x82);}catch(_0xdbdd0f){}var _0x11666c=_0x1a0c66[_0x50cf22(0x2f3)+'y'];_0x11666c&&_0x11666c[_0x50cf22(0x222)+'r']&&_0x11666c[_0x50cf22(0x222)+'r'][_0x50cf22(0x2fc)+'ength']>-0x15eb+-0x70d+0x1cf8&&(_0x1f1f9c=_0x11666c,_0x42ddac=_0x447af0[_0x50cf22(0x520)](Date[_0x50cf22(0x2a1)](),_0x3a0088));}catch(_0x198268){}}function _0x2072ca(){var _0xa6ea3b=_0xde41ba,_0x5b6a53={'eXgiJ':_0xa6ea3b(0x567)+_0xa6ea3b(0x317)+_0xa6ea3b(0x311),'wamxm':function(_0x567dd4,_0x56ab10){return _0x567dd4!==_0x56ab10;}};if(_0x447af0[_0xa6ea3b(0x1bc)]===_0xa6ea3b(0x38f))return _0x5780d2[_0xa6ea3b(0x591)+'e']=_0x5b6a53['eXgiJ'],_0x2a8f62;else try{if(_0x447af0['jTBuU'](typeof WebAssembly,'undef'+'ined'))return;var _0x5a952c=[_0xa6ea3b(0x494)+'ntiat'+'e',_0xa6ea3b(0x494)+_0xa6ea3b(0x3cc)+_0xa6ea3b(0x3ce)+_0xa6ea3b(0x382)];for(var _0x3bcd89=0xd98+0x1f57+-0x2cef;_0x447af0[_0xa6ea3b(0x30a)](_0x3bcd89,_0x5a952c['lengt'+'h']);_0x3bcd89++){(function(_0x15cf38){var _0x2ceaf1=_0xa6ea3b,_0x3779fb=WebAssembly[_0x15cf38];if(_0x5b6a53[_0x2ceaf1(0x4c4)](typeof _0x3779fb,_0x2ceaf1(0x43b)+_0x2ceaf1(0x1ef))||_0x3779fb[_0x2ceaf1(0x389)+_0x2ceaf1(0x57f)+_0x2ceaf1(0x1d0)+'ap'])return;var _0x8cafa=function(){var _0x9ccdb5=_0x2ceaf1;if('iNrsI'===_0x9ccdb5(0x576)){var _0x35eb19=_0x3779fb['apply'](this,arguments);try{if(_0x35eb19&&typeof _0x35eb19[_0x9ccdb5(0x1a6)]===_0x9ccdb5(0x43b)+_0x9ccdb5(0x1ef))_0x35eb19['then'](_0x32f373,function(){});else _0x32f373(_0x35eb19);}catch(_0x317309){}return _0x35eb19;}else _0x117dfb=_0x5aa72c[_0x9ccdb5(0x432)](_0x14441d)[_0x9ccdb5(0x1e0)](0x3*0xd5+-0x9dc+0x75d,0x236e+0x1*-0x167e+0x89*-0x18);};_0x8cafa['__sak'+'uraMe'+'moryT'+'ap']=!![];try{Object[_0x2ceaf1(0x1e9)+'eProp'+_0x2ceaf1(0x500)](_0x8cafa,'name',{'value':_0x3779fb['name'],'configurable':!![]});}catch(_0x3ab87c){}WebAssembly[_0x15cf38]=_0x8cafa;}(_0x5a952c[_0x3bcd89]));}}catch(_0x3fa255){}}var _0x4141a1=null,_0x4b5d75=null,_0x42d4a0={},_0x137072=[],_0x1255b2=[],_0x23d3da=[{'type':_0x447af0[_0xde41ba(0x2f7)],'keep':!![]},{'type':'Healt'+'hScri'+'pt','keep':!![]},{'type':_0x447af0[_0xde41ba(0x5bf)],'keep':![]},{'type':'GG_Ga'+'meMan'+_0xde41ba(0x33d),'keep':![]}],_0x5b8075=[_0x447af0[_0xde41ba(0x56d)],_0x447af0[_0xde41ba(0x59a)],_0x447af0['OuQev'],_0xde41ba(0x1b2)+_0xde41ba(0x289),_0x447af0[_0xde41ba(0x390)],_0xde41ba(0x449)+_0xde41ba(0x4c0)+'d'];(function _0x4bff0a(){var _0x304591=_0xde41ba;try{var _0xea57d4=window['Unity'+'WebMo'+'dkit']&&window['Unity'+'WebMo'+'dkit']['Runti'+'me'];if(!_0xea57d4||_0x447af0[_0x304591(0x4af)](typeof _0xea57d4[_0x304591(0x354)+_0x304591(0x4c6)+'in'],_0x447af0['qXtWt'])){_0x445b94[_0x304591(0x38e)]=_0x447af0[_0x304591(0x498)];return;}_0x445b94[_0x304591(0x3cf)+_0x304591(0x56f)]=!![],_0x4b5d75=_0xea57d4['creat'+_0x304591(0x4c6)+'in']({'name':_0x304591(0x287)+'a-ski'+'llwar'+'z','version':_0xff4f27,'referencedAssemblies':_0x5b8075[_0x304591(0x1e0)]()}),_0x445b94['ok']=!![];try{var _0x3e9e01=window[_0x304591(0x2b4)+_0x304591(0x2ce)+'dkit'][_0x304591(0x2c9)+'me'];_0x3e9e01['__sak'+_0x304591(0x39a)+'g']=_0x447af0['kDuLW'](_0xff4f27,':')+Math['rando'+'m']()['toStr'+_0x304591(0x3bc)](0xbfe+-0x2390+0x17b6)[_0x304591(0x1e0)](0x4c9+0xaaa+0x43*-0x3b,-0x1*-0x95c+-0x1f88*0x1+0xb1b*0x2),_0x47a8a9=_0x3e9e01[_0x304591(0x389)+'uraTa'+'g'];}catch(_0x226f7f){}_0x5253a0(),_0x445b94[_0x304591(0x40c)+_0x304591(0x1bd)+_0x304591(0x5ac)]=_0x137072[_0x304591(0x2c2)+'h'],_0x2072ca(),_0x445b94[_0x304591(0x2f3)+_0x304591(0x3b7)]=!![];}catch(_0x7282fd){if(_0x447af0[_0x304591(0x479)](_0x447af0['gwxMH'],'wdBrP'))return _0x2872fe(_0x5afb54);else _0x445b94[_0x304591(0x38e)]=String(_0x7282fd&&_0x7282fd[_0x304591(0x28a)+'ge']||_0x7282fd);}}());var _0x359a22=new Float32Array(0x1315+-0x416*0x7+-0x2*-0x4c3),_0x2f89f8=new Int32Array(_0x359a22[_0xde41ba(0x222)+'r']);function _0x4afbc2(_0x345b2e){var _0x39724e=_0xde41ba,_0x40c33f={'pwtxL':function(_0x388c42,_0x5a97c2){return _0x388c42+_0x5a97c2;}};return _0x447af0['CfiVo'](_0x39724e(0x2bc),_0x447af0['qbyUm'])?(_0x389f9f['datas'+'et']['api']='1',_0x244785[_0x39724e(0x2b3)]=_0x3e2067,_0x32263b['warn'](_0x39724e(0x198)+'kura]'+'\x20pane'+_0x39724e(0x2ef)+'abled',_0x40c33f[_0x39724e(0x265)](_0x39724e(0x43f)+':',_0x336780),_0x3cfedf),_0x4b5bf5):(_0x359a22[-0x1*-0x493+-0x1663+0x11d0]=_0x345b2e,_0x2f89f8[-0x4*0x11f+-0x8f7*-0x3+-0x1669]);}function _0xfc8457(_0x5e2d75){return _0x2f89f8[-0x21dd*0x1+-0x5aa+0x2787]=_0x5e2d75|0x168b*0x1+0x7d9+-0x1e64,_0x359a22[-0xf07*-0x1+0x1*0x74d+-0xb2a*0x2];}var _0xb7ad90={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x28891a(){var _0x479a79=_0xde41ba;try{if(_0x4b5d75&&_0x4b5d75[_0x479a79(0x27c)+'ime']){if(_0x479a79(0x38b)!==_0x479a79(0x38b))_0x399b0c[_0x479a79(0x40c)+_0x479a79(0x233)+'ved']===0x1f6b+-0xdfb*0x2+-0x3*0x127?_0x3c91a1['warni'+'ngs']['push'](_0x447af0[_0x479a79(0x419)](_0x447af0[_0x479a79(0x4a4)](_0x447af0['FDYUo']('0\x20of\x20'+_0x5a2fe8['hooks'+_0x479a79(0x454)],_0x447af0[_0x479a79(0x299)]),_0x447af0['rhmBT'])+(_0x479a79(0x45b)+_0x479a79(0x4f7)+_0x479a79(0x488)+'ered\x20'+_0x479a79(0x530)+_0x479a79(0x38d)+'re\x20ig'+'nored'+_0x479a79(0x545)+_0x479a79(0x1c0)+_0x479a79(0x5e5)+'f\x20the'+_0x479a79(0x579)+'.\x20')+('Regis'+_0x479a79(0x5ac)+'\x20')+_0x4d0ef7['hooks'+_0x479a79(0x1bd)+'tered'+'AtArm'],'\x20hook'+_0x479a79(0x37b)+_0x479a79(0x413)+'\x20armi'+_0x479a79(0x4c9)+'\x20docu'+'ment-'+_0x479a79(0x31a)+'.')):_0x58e5aa[_0x479a79(0x4fe)+_0x479a79(0x474)]['push'](_0x447af0['KCtas'](_0x447af0['OXNlx'](_0x447af0['ZaPRB']+_0x3dbfbf[_0x479a79(0x40c)+'Resol'+'ved']+_0x479a79(0x338),_0xf9bb7['hooks'+'Total'])+(_0x479a79(0x41a)+'(s)\x20t'+_0x479a79(0x43d)+'able\x20'+_0x479a79(0x466)+_0x479a79(0x398)+_0x479a79(0x5db)+_0x479a79(0x509)+_0x479a79(0x3a7)+_0x479a79(0x491)+'gnatu'+'re\x20'),_0x479a79(0x2f5)+',\x20Met'+_0x479a79(0x2fb)+_0x479a79(0x4fc)+'->\x20vo'+_0x479a79(0x4f8)+_0x479a79(0x3fa)+'t\x20mat'+'ch\x20th'+'is\x20bu'+_0x479a79(0x50e)));else{var _0x1c0128=_0x4b5d75[_0x479a79(0x27c)+'ime'];if(typeof _0x1c0128[_0x479a79(0x244)+'veGam'+'e']===_0x447af0['qXtWt']){var _0x92d1b1=_0x1c0128['resol'+'veGam'+'e']();if(_0x92d1b1)return _0xb7ad90['sourc'+'e']='plugi'+'n._ru'+_0x479a79(0x477)+_0x479a79(0x1b5)+_0x479a79(0x4dc)+_0x479a79(0x5c7),_0x92d1b1;}if(_0x1c0128['_game']){if(_0x447af0['IRuLP']('ukDQM',_0x447af0['JHvPh']))return _0xb7ad90[_0x479a79(0x591)+'e']=_0x447af0[_0x479a79(0x495)],_0x1c0128[_0x479a79(0x1c8)];else{var _0x30c557=('0|3|1'+_0x479a79(0x1d3))['split']('|'),_0x2bb638=0x1681+0x1480+-0x6d*0x65;while(!![]){switch(_0x30c557[_0x2bb638++]){case'0':_0x52d595[_0x479a79(0x255)+_0x479a79(0x2ec)+'t']='v'+(_0x499159[_0x479a79(0x49c)+'on']||'?');continue;case'1':var _0x305918=_0x55e2ac['versi'+'on']||'';continue;case'2':_0x4a3c30[_0x479a79(0x211)][_0x479a79(0x519)+_0x479a79(0x3a1)+'r']=_0x447af0['OUCTS'](_0x305918,_0x7617f6)?_0x479a79(0x4a6)+'255,1'+_0x479a79(0x46c)+'7,.35'+')':_0x447af0[_0x479a79(0x52b)];continue;case'3':var _0x7617f6=_0x504554;continue;case'4':_0x493e29['style']['color']=_0x305918===_0x7617f6?_0x267119:'#ff6e'+'74';continue;}break;}}}}}}catch(_0xc59a9e){}try{if(_0x447af0['RQtKR'](_0x447af0[_0x479a79(0x5ba)],'QnNOL')){var _0x455bd1=window['Unity'+_0x479a79(0x2ce)+'dkit']&&window[_0x479a79(0x2b4)+'WebMo'+_0x479a79(0x326)]['Runti'+'me'];if(_0x455bd1&&typeof _0x455bd1[_0x479a79(0x244)+_0x479a79(0x5d5)+'e']===_0x447af0['qXtWt']){var _0x481116=_0x455bd1['resol'+'veGam'+'e']();if(_0x481116)return _0xb7ad90[_0x479a79(0x591)+'e']=_0x447af0['OJtwD'],_0x481116;}if(_0x455bd1&&_0x455bd1[_0x479a79(0x1c8)])return _0xb7ad90['sourc'+'e']=_0x479a79(0x2c9)+_0x479a79(0x527)+_0x479a79(0x3ba),_0x455bd1;}else try{return _0xa73a4c&&_0x16f3d6['buffe'+'r']?_0x3bd70a[_0x479a79(0x222)+'r']['byteL'+_0x479a79(0x2c3)]:0x812+-0x1d8b+0x1579;}catch(_0x1b738c){return-0xd5*0x7+-0x23f+0x812;}}catch(_0x34f5a3){}try{if('tPWaV'===_0x447af0['fJECl']){var _0x3ec742=window[_0x479a79(0x1c4)+_0x479a79(0x1f8)+_0x479a79(0x596)]||window[_0x479a79(0x1c4)+_0x479a79(0x292)]||window[_0x479a79(0x3f4)];if(_0x3ec742)return _0xb7ad90[_0x479a79(0x591)+'e']=_0x479a79(0x567)+_0x479a79(0x317)+_0x479a79(0x311),_0x3ec742;}else{if(!_0x339eb8[_0x479a79(0x2c2)+'h'])try{_0x42d3d4();}catch(_0x231834){}_0x3de3ef++,_0x5919e4(_0x19600a());if(!_0x371dff['lengt'+'h']&&_0x32eb94<0x1cac+0x7c4+0x3d*-0x94)_0x447af0[_0x479a79(0x471)](_0x5c173e,_0x3af2b8,-0x2d7*-0xd+0x1854+-0x356f);else{if(!_0x11f204[_0x479a79(0x432)](_0x19a93d)[_0x479a79(0x2c2)+'h']&&_0x447af0[_0x479a79(0x548)](_0x44968d,0x83*0x1f+-0x18ac+0x9fb))_0x4707f5(_0x148a9b,0x1*0x59f+0x1*0x16d4+-0x14a3);else _0x356027(_0x3a4030,0x628+0x234f+-0x24c7);}}}catch(_0x3ac061){}try{if(typeof game!==_0x479a79(0x586)+_0x479a79(0x566)&&game)return _0xb7ad90[_0x479a79(0x591)+'e']=_0x447af0[_0x479a79(0x562)],game;}catch(_0x5bf90a){}try{var _0x424a40=Object[_0x479a79(0x432)](window);for(var _0x920cdf=-0x388*-0x2+0x6dd+-0x1f*0x73;_0x920cdf<_0x424a40['lengt'+'h']&&_0x920cdf<0xc82*-0x2+-0x1c5f+0x511*0xb;_0x920cdf++){var _0x26466f=window[_0x424a40[_0x920cdf]];if(_0x26466f&&_0x447af0['BSgqr'](typeof _0x26466f,'objec'+'t')&&_0x26466f['Modul'+'e']&&_0x26466f[_0x479a79(0x5ce)+'e'][_0x479a79(0x486)+'8']&&_0x26466f[_0x479a79(0x5ce)+'e'][_0x479a79(0x486)+'8']['buffe'+'r']){if(_0x447af0['Dywqy']===_0x479a79(0x49d)){if(!_0x58e0f7[_0x479a79(0x4a0)+_0x479a79(0x2f8)+_0x479a79(0x35f)](_0x447af0[_0x479a79(0x25c)])){var _0x50f903=_0x332785['creat'+'eElem'+'ent']('style');_0x50f903['id']=_0x479a79(0x287)+_0x479a79(0x51e)+_0x479a79(0x47a)+'s',_0x50f903[_0x479a79(0x255)+'onten'+'t']=_0x447af0['mYpwC'],(_0x51cbef['head']||_0x1c3a4f['docum'+'entEl'+_0x479a79(0x2f8)])[_0x479a79(0x3b4)+_0x479a79(0x59d)+'d'](_0x50f903);}return _0x4f66ba=_0x14a705['creat'+_0x479a79(0x34e)+_0x479a79(0x2cf)](_0x447af0[_0x479a79(0x3ef)]),_0x373beb['id']='sakur'+_0x479a79(0x51e)+'v2',_0x33984e['body'][_0x479a79(0x3b4)+'dChil'+'d'](_0x5263fb),_0x5e6a79;}else return _0xb7ad90['sourc'+'e']=_0x447af0['mukvo'](_0x447af0[_0x479a79(0x1dd)](_0x447af0[_0x479a79(0x213)],_0x424a40[_0x920cdf]),_0x479a79(0x20f)+'le'),_0x26466f;}}}catch(_0x21de42){}return _0xb7ad90[_0x479a79(0x591)+'e']=null,null;}function _0x567734(){var _0x128972=_0xde41ba;try{if(_0x1f1f9c&&_0x1f1f9c['buffe'+'r']&&_0x1f1f9c['buffe'+'r']['byteL'+_0x128972(0x2c3)]){if('DeJGm'!==_0x128972(0x2a7))return _0xb7ad90[_0x128972(0x591)+'e']=_0xb7ad90[_0x128972(0x591)+'e']||'insta'+'ntiat'+_0x128972(0x29f)+_0x128972(0x1da)+_0x128972(0x248)+_0x128972(0x28d),new Uint8Array(_0x1f1f9c[_0x128972(0x222)+'r']);else{var _0x2c71cc=_0x35de27[_0x59cdd9],_0x46537b=typeof _0x1eceda[_0x2c71cc];_0x7d8472[_0x2c71cc]=_0x46537b===_0x447af0['TmqkV']?_0x447af0['TmqkV']:_0x46537b;}}}catch(_0x314762){}try{if('JhNHQ'===_0x128972(0x35c)){var _0x340d1a=_0x447af0[_0x128972(0x516)](_0x28891a);if(_0x340d1a&&_0x340d1a['Modul'+'e']&&_0x340d1a['Modul'+'e'][_0x128972(0x486)+'8']&&_0x340d1a[_0x128972(0x5ce)+'e']['HEAPU'+'8'][_0x128972(0x222)+'r'])return _0x340d1a['Modul'+'e'][_0x128972(0x486)+'8'];}else{if(_0x25d0e6[_0x128972(0x1e4)+'t']&&_0x181264['paren'+'t']!==_0x2108e5)_0x3d4cb8[_0x128972(0x1e4)+'t'][_0x128972(0x538)+'essag'+'e'](_0x3b1160,'*');}}catch(_0x590488){}return null;}function _0x7c7a78(){var _0x3e4704=_0xde41ba,_0x164191=_0x567734();if(!_0x164191)return null;try{return new DataView(_0x164191[_0x3e4704(0x222)+'r'],_0x164191['byteO'+_0x3e4704(0x1f9)],_0x164191['byteL'+_0x3e4704(0x2c3)]);}catch(_0x3bebca){return null;}}function _0x5870dd(_0x72ec20,_0x4f0fbc){var _0x268eba=_0xde41ba;if(_0x268eba(0x1d5)==='AFcwJ')return![];else{var _0x40b5c9=_0x7c7a78();if(!_0x40b5c9)return _0xb7ad90['faile'+'d']++,_0xb7ad90[_0x268eba(0x3f2)+'rror']=_0xb7ad90[_0x268eba(0x3f2)+'rror']||_0x447af0[_0x268eba(0x312)],undefined;if(_0x447af0['HfEuZ'](_0x72ec20,-0x9*-0xcf+-0x5*0x538+0x12d1*0x1)||_0x447af0[_0x268eba(0x27f)](_0x447af0[_0x268eba(0x580)](_0x72ec20,0x2b*0x1+-0x2467+0x2440),_0x40b5c9[_0x268eba(0x2fc)+_0x268eba(0x2c3)]))return _0xb7ad90[_0x268eba(0x23a)+'d']++,_0xb7ad90[_0x268eba(0x3f2)+_0x268eba(0x38a)]=_0xb7ad90[_0x268eba(0x3f2)+_0x268eba(0x38a)]||_0x447af0['OXNlx'](_0x447af0[_0x268eba(0x1fa)](_0x268eba(0x2e3)+_0x268eba(0x43c)+_0x72ec20['toStr'+_0x268eba(0x3bc)](-0x19a5+0x25b8+-0xc03),'\x20past'+'\x20heap'+_0x268eba(0x33c)+'0x'),_0x40b5c9[_0x268eba(0x2fc)+'ength'][_0x268eba(0x2ba)+_0x268eba(0x3bc)](-0x430+0x575*0x3+-0x1*0xc1f)),undefined;try{_0xb7ad90['ok']++;switch(_0x4f0fbc){case'u8':return _0x40b5c9[_0x268eba(0x32c)+'nt8'](_0x72ec20);case'i8':return _0x40b5c9['getIn'+'t8'](_0x72ec20);case _0x447af0[_0x268eba(0x331)]:return _0x40b5c9[_0x268eba(0x4c1)+_0x268eba(0x53f)](_0x72ec20,!![]);case _0x447af0['XeNTN']:return _0x40b5c9['getUi'+'nt16'](_0x72ec20,!![]);case _0x268eba(0x4b1):return _0x40b5c9['getIn'+'t32'](_0x72ec20,!![]);case _0x447af0[_0x268eba(0x5b4)]:return _0x40b5c9[_0x268eba(0x32c)+_0x268eba(0x274)](_0x72ec20,!![]);case _0x447af0['cFHzy']:return _0x40b5c9[_0x268eba(0x505)+'oat32'](_0x72ec20,!![]);case _0x268eba(0x406):return _0x40b5c9['getFl'+'oat64'](_0x72ec20,!![]);default:return _0x40b5c9['getIn'+_0x268eba(0x4a8)](_0x72ec20,!![]);}}catch(_0x3d85b5){return _0xb7ad90[_0x268eba(0x23a)+'d']++,_0xb7ad90['lastE'+_0x268eba(0x38a)]=_0xb7ad90[_0x268eba(0x3f2)+'rror']||String(_0x3d85b5&&_0x3d85b5['messa'+'ge']||_0x3d85b5)['slice'](0x45*0x2d+-0x18ee+0xccd,0xacf*0x2+-0xff1*-0x1+-0x3*0xc5d),undefined;}}}function _0x4f7682(_0x35b2f8,_0x20e35b,_0x1927df){var _0x200fca=_0xde41ba,_0x453cf3=_0x447af0[_0x200fca(0x24d)](_0x7c7a78);if(!_0x453cf3||_0x35b2f8<0xa3*0x3+0x14a5+-0x168e||_0x447af0['DQAcx'](_0x35b2f8,-0x4*-0x4c9+0x29*-0x61+-0x1*0x397)>_0x453cf3['byteL'+'ength'])return![];try{switch(_0x20e35b){case'u8':case'i8':_0x453cf3[_0x200fca(0x232)+_0x200fca(0x1fd)](_0x35b2f8,_0x1927df&-0x2185+-0x4*0x6cd+0x3db8);break;case _0x200fca(0x2df):case _0x200fca(0x4ee):_0x453cf3[_0x200fca(0x283)+_0x200fca(0x53f)](_0x35b2f8,_0x1927df|0x8d*-0xd+-0x17b0+0x1ed9,!![]);break;case _0x200fca(0x4b1):case _0x200fca(0x1db):_0x453cf3['setIn'+_0x200fca(0x4a8)](_0x35b2f8,_0x1927df|-0x1142*0x1+-0x2*-0x64+-0x39*-0x4a,!![]);break;case _0x447af0['cFHzy']:_0x453cf3['setFl'+_0x200fca(0x556)](_0x35b2f8,_0x1927df,!![]);break;default:_0x453cf3['setIn'+_0x200fca(0x4a8)](_0x35b2f8,_0x1927df|0x26f9+0x52c*-0x4+-0x1*0x1249,!![]);}return!![];}catch(_0x575e3b){return![];}}var _0x4168eb={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa}};function _0x3d240a(_0x5e7598,_0x15df95,_0x51977e){var _0x579cd5=_0xde41ba,_0xac3fef=(_0x579cd5(0x54c)+_0x579cd5(0x581)+'|12|6'+_0x579cd5(0x2bd)+_0x579cd5(0x1cf)+_0x579cd5(0x3a6)+_0x579cd5(0x1af))['split']('|'),_0x82f4b2=0xdf*0xf+-0x1da4+-0x1*-0x1093;while(!![]){switch(_0xac3fef[_0x82f4b2++]){case'0':var _0x19aa84=_0x4168eb[_0x51977e];continue;case'1':_0x1fec4f&=-0x17ff+-0x7d8+0x1fd8;continue;case'2':_0x58baa1|=-0x8b0+0x1*0x1b82+-0x49*0x42;continue;case'3':return{'real':_0x1bf25e,'fake':_0xe594db,'act':_0x1fec4f,'init':_0x324e9b,'key':_0xfdc263,'hidden':_0x58baa1};case'4':if(!_0x19aa84)return null;continue;case'5':var _0x58baa1=_0x5870dd(_0x5e7598+_0x15df95+_0x19aa84[_0x579cd5(0x5c4)+'n'],_0x579cd5(0x4b1));continue;case'6':var _0x1fec4f=_0x5870dd(_0x5e7598+_0x15df95+_0x19aa84[_0x579cd5(0x2b1)+'e'],'u8');continue;case'7':var _0xfdc263=_0x5870dd(_0x5e7598+_0x15df95+_0x19aa84[_0x579cd5(0x2e2)],'u8');continue;case'8':var _0x1bf25e;continue;case'9':_0xfdc263&=0x99+-0x1efe+-0x2*-0xfb2;continue;case'10':_0x324e9b=_0x447af0['XDgJw'](_0x324e9b||-0x3*-0x185+-0x5a2+-0x5*-0x37,-0x3c0+-0x1b38+0x1ef9);continue;case'11':if(_0xfdc263===undefined||_0x58baa1===undefined||_0x447af0[_0x579cd5(0x25d)](_0xe594db,undefined)||_0x1fec4f===undefined)return null;continue;case'12':var _0xe594db=_0x5870dd(_0x5e7598+_0x15df95+_0x19aa84[_0x579cd5(0x5c6)],_0x51977e===_0x447af0['kOyTL']?_0x447af0[_0x579cd5(0x522)]:_0x447af0[_0x579cd5(0x26c)](_0x51977e,_0x447af0[_0x579cd5(0x56b)])?'i32':'u8');continue;case'13':if(_0x51977e===_0x447af0[_0x579cd5(0x2a2)])_0x1bf25e=_0xfc8457(_0x447af0[_0x579cd5(0x357)](_0x58baa1,_0xfdc263));else{if(_0x447af0['sSfCw'](_0x51977e,_0x579cd5(0x42d)))_0x1bf25e=_0x447af0[_0x579cd5(0x20a)](_0x447af0[_0x579cd5(0x235)](_0x58baa1,_0xfdc263),-0x2e*0x9d+-0x2170+-0x3da6*-0x1);else _0x1bf25e=_0x447af0[_0x579cd5(0x290)]((_0x58baa1^_0xfdc263)&0x36*-0xac+0x33b*-0x5+0x7a2*0x7,0x7f1+0x1*-0xecf+-0x24a*-0x3)?0x800+-0x1*-0xd42+0x1541*-0x1:0x1b3*0x4+-0x14bd*0x1+0xdf1;}continue;case'14':var _0x324e9b=_0x447af0['YslIH'](_0x5870dd,_0x5e7598+_0x15df95+_0x19aa84[_0x579cd5(0x440)+'d'],'u8');continue;}break;}}function _0x306517(_0x391285,_0x4aa831,_0x27089e,_0x5e80b3){var _0x8671f0=_0xde41ba,_0x533ced={'SwbJQ':_0x447af0[_0x8671f0(0x5c2)],'eljVJ':function(_0x4e8d69,_0x47f8bd){return _0x4e8d69+_0x47f8bd;},'iZNUW':function(_0x36852f,_0x298619){var _0x1ab5ff=_0x8671f0;return _0x447af0[_0x1ab5ff(0x386)](_0x36852f,_0x298619);}};if('bJVTX'!==_0x447af0[_0x8671f0(0x585)]){var _0x3755fa=_0x4168eb[_0x27089e];if(!_0x3755fa)return![];var _0x1f3c1e=_0x3d240a(_0x391285,_0x4aa831,_0x27089e);if(!_0x1f3c1e)return![];var _0x412167=_0x1f3c1e[_0x8671f0(0x2e2)],_0x23f5b3;if(_0x27089e===_0x447af0['kOyTL'])_0x23f5b3=_0x447af0[_0x8671f0(0x263)](_0x4afbc2,_0x5e80b3)^_0x412167;else{if(_0x447af0['jTBuU'](_0x27089e,_0x8671f0(0x42d)))_0x23f5b3=(_0x5e80b3|0x1f5+-0x1*0x1636+0x1441)^_0x412167;else _0x23f5b3=(_0x5e80b3?-0x2*0xc7c+-0x1*-0x10cf+0x82a:0x2278+-0x166b+-0x269*0x5)&0x5cf*0x4+0x2*0x382+-0x1*0x1d41^_0x412167;}var _0x343703=_0x27089e===_0x447af0['kOyTL']?'f32':_0x27089e==='obfI'?'i32':'u8',_0x515880=_0x27089e===_0x8671f0(0x37d)?_0x5e80b3:_0x447af0['tBqih'](_0x27089e,_0x8671f0(0x42d))?_0x5e80b3|0x9b1+0x108d+-0x1a3e:_0x5e80b3?-0x1*0x29c+0x15cf+0x75*-0x2a:0x6bb*-0x5+-0xc23+0x2dca;return _0x4f7682(_0x447af0[_0x8671f0(0x228)](_0x447af0['nNnox'](_0x391285,_0x4aa831),_0x3755fa[_0x8671f0(0x5c4)+'n']),_0x447af0[_0x8671f0(0x5c2)],_0x23f5b3|0x2348+-0x1f57*0x1+0x3f1*-0x1)&&_0x4f7682(_0x447af0['FDYUo'](_0x391285+_0x4aa831,_0x3755fa[_0x8671f0(0x5c6)]),_0x343703,_0x515880)&&_0x447af0[_0x8671f0(0x20b)](_0x4f7682,_0x447af0['RJEff'](_0x447af0[_0x8671f0(0x580)](_0x391285,_0x4aa831),_0x3755fa[_0x8671f0(0x2b1)+'e']),'u8',-0x130b+-0xea*-0x6+0xd8f);}else{var _0x295c57=_0x43e3e1[_0x53a4f3];try{var _0x3fbffc=_0x55a939['hookP'+'refix']({'typeName':_0x295c57[_0x8671f0(0x4aa)],'methodName':'Updat'+'e','params':[_0x8671f0(0x4b1),_0x533ced[_0x8671f0(0x1a5)]],'returnType':_0x1f5d42},_0x24a606(_0x295c57['type'],_0x295c57[_0x8671f0(0x347)]));_0x156ca1[_0x8671f0(0x380)]({'type':_0x295c57[_0x8671f0(0x4aa)],'hook':_0x3fbffc,'keep':_0x295c57[_0x8671f0(0x347)]});}catch(_0x1be79b){_0x4bc31a[_0x8671f0(0x380)](_0x533ced['eljVJ'](_0x295c57[_0x8671f0(0x4aa)]+':\x20',_0x533ced['iZNUW'](_0x555ddd,_0x1be79b&&_0x1be79b['messa'+'ge']||_0x1be79b)['slice'](-0x5f*-0x17+-0x1*0x4e7+-0xa*0x5d,0x2292+0xd*-0xa9+-0x195d)));}}}var _0x4e175a={'FPScontroller':[[-0xcbb+-0x107e*-0x2+-0x1431,_0x447af0['kOyTL']],[0x3*-0x367+-0x83e*-0x1+0x3*0xb5,_0x447af0['kOyTL']],[-0xa13*0x1+-0x57*-0x49+-0x73e*0x2,'obfF'],[-0x2556+0x4*-0x29d+0x3022,_0x447af0[_0xde41ba(0x2a2)]],[0x7ce*0x3+-0x8b*0x22+-0x4*0x121,'obfF'],[0x21e*0x8+-0x9d*-0xd+-0x4f*0x4f,_0xde41ba(0x37d)],[-0x252a+0x14d5*-0x1+0x2b*0x15d,_0xde41ba(0x37d)],[-0x333+0x2*0x52a+-0x669,_0xde41ba(0x438)],[-0x1d*-0xad+0x16c1+-0x2996,_0x447af0['kOyTL']],[0x185*-0x5+-0x6*0x29d+0x1823,_0xde41ba(0x4b1)],[-0x10ef+0x21f7+-0x101c,'u8'],[0x184b+0xc*0x2b0+0xdb*-0x41,_0xde41ba(0x37d)],[-0x4*-0x894+0x17c0+-0x3908,_0xde41ba(0x4b1)],[-0x3f3*-0x1+0xb*0x72+0x7cd*-0x1,'u8'],[-0x20b8+0x335+-0x1*-0x1e93,_0xde41ba(0x4b1)],[-0x1aa6+0x979*-0x4+0x419e,'u8'],[0x68c*-0x4+-0x2538+0x407d,'u8'],[-0x9*0x2f+-0x1*-0x11ef+-0xf2c*0x1,_0xde41ba(0x37d)],[0x1d72*-0x1+-0x2cd+0x1*0x2173,_0x447af0['kOyTL']],[-0xdab+0x1*0x1fd+-0xcfa*-0x1,_0xde41ba(0x5aa)],[0xc5*-0x1f+0x2*0x66b+0xc55,_0x447af0[_0xde41ba(0x522)]],[-0x2212+0x58*-0xb+0x2746,_0xde41ba(0x5aa)],[0x5*-0x181+-0xc34+0x1529,'f32'],[0x197*0xd+-0x150e+-0x1eb*-0x1,'u8'],[-0x1*0x1675+0x1cac+-0x4ab,'f32'],[0x1e14+0x1945+-0x35b5,'u8'],[0x914+0x3*-0x4a5+0x68f,'f32'],[0x463+0x5*0x41b+-0x1732,'f32'],[0x51*0x2d+0x2055+0x2cd6*-0x1,'u8'],[0x1315*-0x2+-0x22af*-0x1+0x538,'u8'],[0x1*0x311+0x1516+-0x1667,'obfF'],[0x15e+-0xbc5+0xc3f,'f32'],[-0x207*-0x2+-0x1de1*-0x1+-0x2013,'u8'],[-0x4*0x853+-0x16bd*0x1+0x39e9,_0x447af0[_0xde41ba(0x2a2)]],[0x3*0x576+-0x2257+0x2db*0x7,_0xde41ba(0x438)],[0x1e37+-0x158d+-0x692,_0x447af0[_0xde41ba(0x522)]],[-0x19b3*0x1+0x1b9b+-0x4*-0xd,_0xde41ba(0x5aa)],[0x499+-0x13a7+0x8ad*0x2,'f32'],[0x10cd+-0x1b19+0xc9c,_0xde41ba(0x5aa)],[0x4c1+0x111e+-0x138b,_0xde41ba(0x5aa)],[-0x64a+0x1*-0x22d+-0x1*-0xacf,_0xde41ba(0x5aa)],[0x1*-0x53+-0x15a8+0x1857*0x1,'u8'],[-0x15a0+0x9*0x369+0x23c*-0x3,'u8'],[-0x1*0x20eb+0x1*0x156b+-0x47*-0x32,'u8'],[-0x7*-0x47+0x451+-0x3e2,_0x447af0[_0xde41ba(0x522)]],[-0x1ee4+0x207+-0x15*-0x17d,'u8'],[-0xec9+-0x1314+-0x1a*-0x165,'u8'],[-0x268a+0x2*0x1ce+0x2556,_0xde41ba(0x5aa)],[-0x4*0x599+0x1e17+-0x547,_0xde41ba(0x5aa)],[-0xf6f+-0x1*0x220a+-0x33e9*-0x1,'f32'],[0x23b*-0x10+-0x1*0x1fe1+0x4605,_0xde41ba(0x5aa)],[-0x31b+0x1e4c+-0x18b9,'f32'],[-0x11*-0xd9+-0x2*-0xd0f+-0x1*0x260b,_0x447af0[_0xde41ba(0x522)]],[-0x113d+0x2*0x8a1+0x27b,_0xde41ba(0x5aa)],[0x2116+-0x1*-0x1f55+-0x3dd7,'u8'],[0x30b*-0x9+-0xf0d+0x2d14,_0xde41ba(0x5aa)],[-0x430+0x1f*-0xc7+0x1*0x1f01,'f32'],[0x1327*0x1+0x1e4b+0x7c9*-0x6,_0x447af0[_0xde41ba(0x522)]],[0x1*-0x14f5+0x2415+-0xc60,_0xde41ba(0x5aa)],[0xbdf+0xcc5+-0x5*0x460,'u8'],[-0x1620+0x1a9d+0x37*-0x8,'u8'],[0x24e9+-0x121b+-0xe*0x125,_0x447af0['cFHzy']],[-0x119e+0x2662*-0x1+0x1*0x3adc,_0x447af0['cFHzy']],[0x233d+-0x630+0x1*-0x1a11,_0x447af0[_0xde41ba(0x522)]],[-0x9c2+0x1*0x525+0x79d,'f32'],[-0xbe9*0x1+0x615*-0x1+0x1502,_0x447af0[_0xde41ba(0x522)]],[-0x3d*-0x77+0x8*-0x1f1+-0x9cb,'f32'],[0x4c4+0xf85+0x1b*-0xa3,'u8'],[-0x1c04+0x12*-0x1fa+-0x858*-0x8,_0xde41ba(0x4b1)],[-0x2356+0xd58+-0x192a*-0x1,_0x447af0['cFHzy']],[-0x3*0x6f3+0x5*0x406+0x3eb,_0xde41ba(0x5aa)],[0x5a9+-0x2e7*0x3+0x320*0x2,_0xde41ba(0x5aa)],[0x20eb+0x2f1*-0x7+-0x918,_0xde41ba(0x5aa)],[-0x702+0x1997*0x1+-0x1*0xf55,'u8'],[-0xc26*0x1+0x12be*-0x2+0x34e3*0x1,'u8'],[-0x13a+0x79c+-0x316,'u8'],[0x1a92+0x18be*0x1+0x2d3*-0x11,'u8'],[-0x50b+0xe0*0x1e+-0x11e7,'u8'],[-0x1*0x119+-0x1*0xbd1+-0x43*-0x3e,'f32'],[0x1eb5+0xa*0xe2+-0x2c9*0xd,_0xde41ba(0x5aa)],[-0x32*-0xa6+0x23bd+-0x40d1,'f32'],[-0x1*-0x8df+-0x6*0x5fd+0x1e6b,_0x447af0[_0xde41ba(0x522)]],[0x1cf1+-0x14*0xa+0x8d*-0x2d,_0x447af0[_0xde41ba(0x522)]],[0x77b+-0x1e7b+0x1a64*0x1,'u8'],[-0x132f+-0xa24+0x20bb,_0x447af0[_0xde41ba(0x522)]],[-0x182d*0x1+0x7cf+-0x95*-0x22,_0xde41ba(0x5aa)],[-0x2169+-0xa*0x3c4+0x4a81,'u8'],[0x13f*-0x3+0x2121+-0x19c8,_0x447af0[_0xde41ba(0x522)]],[-0x1f9f+0x101*0xc+0x1733,_0xde41ba(0x5aa)],[0x1*-0x2274+0x1939+0xcdf,_0xde41ba(0x5aa)],[-0x1e72+0x3*-0x1de+-0x60*-0x6a,_0x447af0['kGiIX']],[-0x16b8+-0x808+0x2278,'u8'],[-0x18e3+-0xa47+-0x1373*-0x2,'i32'],[-0x1678+-0xc9e+-0x2*-0x136b,'f32'],[-0x2*-0x66f+-0x41*0x1a+-0x280*0x1,_0x447af0['cFHzy']],[0x2504+-0x56+0x1073*-0x2,_0x447af0[_0xde41ba(0x522)]],[0x107d+0x6*0x50d+-0x2aff,_0xde41ba(0x5aa)],[0x13c6+0x886+0x2e*-0x88,_0x447af0['kGiIX']],[-0x2c4+-0x1*0xcf3+0x1397,'u8'],[0xba7+-0x6*0x289+0x770,'u8'],[-0x81c+-0x25f*-0xd+-0x647*0x3,'u8'],[0x919+0x2213+-0x2748,_0x447af0[_0xde41ba(0x522)]],[-0x2*-0xfe9+0xf1*0xe+-0x2918,'i32']],'HealthScript':[[0x18d5+0x1b0b+-0x3388,'u8'],[-0x77d+0x22ed+-0x1b14,_0xde41ba(0x4b1)],[-0x13*-0x1c9+-0xe*-0xf5+-0x2ed1,_0xde41ba(0x5aa)],[0xeaf+-0x548*-0x1+-0x1373,'f32'],[0x252a+-0x25e6+0x144,_0xde41ba(0x5aa)],[0xcb4+0x6*-0xf2+0xa*-0xa6,_0x447af0['cFHzy']],[-0x44d*0x7+0x4*-0x5e2+0x3633,_0x447af0[_0xde41ba(0x522)]],[0x263f*-0x1+-0x200d+0x46e0,_0x447af0[_0xde41ba(0x522)]],[0x819*-0x2+0x1274+0x13*-0x16,_0xde41ba(0x4b1)],[0x17*0x70+-0x2c2*-0xd+-0x2d46,_0xde41ba(0x4b1)],[-0xd*-0x27b+0x2*-0x83f+-0x1*0xf19,'u8'],[-0x1b92+-0x2*-0x1136+-0x631,'u8'],[0x13*-0x8+-0x235b*-0x1+-0x2219,'u8'],[0x1*0x2559+0x2*-0x1da+-0x20fa,'u8'],[0x1235*0x2+-0x70*0x21+-0xf7*0x16,'obfI'],[-0x6aa*0x1+-0x167b+0x1*0x1df9,_0xde41ba(0x42d)],[0x5*-0x353+0x621+0xb66*0x1,_0xde41ba(0x42d)],[-0x84a+-0x1f0e+0x2854,_0xde41ba(0x42d)],[-0x3*-0x4a3+0x1470+0x2149*-0x1,'obfI'],[-0xd8e+-0x1ef3+0x2da5,_0xde41ba(0x438)],[0x10fe+0x2*0x5ea+-0x1ba2,_0x447af0[_0xde41ba(0x2a2)]],[-0xe57+-0x1f1*-0xe+-0xb*0x10d,'f32'],[-0xdd0+0xf36+0x2*-0xd,_0x447af0['cFHzy']],[-0x1756+-0x1*0x9f1+0x2297,_0xde41ba(0x5aa)],[-0x6d7+-0x80f+0x103a,_0xde41ba(0x5aa)],[0x204d*-0x1+-0x2bc*0x2+0x2721,_0xde41ba(0x5aa)],[-0x247*0xf+0x11f5+0x11a4,_0xde41ba(0x5aa)],[0x17*-0x96+0x10be*-0x1+0x1fb0,_0x447af0[_0xde41ba(0x522)]],[-0x1b63+0x385*-0x7+0x3586,'u8'],[-0x1*-0x1ce1+-0x1ba3+0x4e,'u8'],[-0x24ca+0x2164+0x4f6,_0xde41ba(0x4b1)]],'PlayerConfig':[],'WeaponManager':[[0xd7f+-0x2*-0x1349+-0x33f9,_0xde41ba(0x4b1)],[0x116*-0x21+0x26a*0xb+0x964,'i32'],[0xb36+0x172f+-0x2245,'u8'],[-0x3*-0xa7+-0x2*-0x9e0+-0x1591,_0x447af0[_0xde41ba(0x5c2)]],[-0xcad+-0x1*0x21d7+-0x5dd*-0x8,_0x447af0[_0xde41ba(0x2a2)]],[-0x2e*-0x8c+0x4*-0x481+0x2*-0x354,'f32'],[0x1ffc+0x1*0x1a1a+-0x1*0x3992,'i32'],[-0x2*-0x66a+0x1c37+-0x2883*0x1,'u8'],[0x83*-0x35+-0x24b5+0x405d,'u8'],[0xae8+0x163*-0x1c+0x1c78*0x1,'i32'],[0xd0e*-0x2+0x143d+0x66f,_0xde41ba(0x5aa)],[0xfe*0x1+0x43*0x92+-0xe*0x2c2,_0x447af0['cFHzy']],[-0x1*0x21b+-0x1e*0x36+-0x103*-0x9,_0x447af0[_0xde41ba(0x5c2)]],[0x219d+0x1043+0x2*-0x1892,'u8'],[0x1b69+0xbe6*-0x1+-0xea7,'obfI'],[0x65*-0x2+-0xfe0*0x2+0x217a,_0x447af0['nkStv']],[-0x121*-0x17+0x1da2+-0x3695,'f32'],[0xed2*0x2+0x10ca+0x1*-0x2d66,'f32'],[0x78f+-0x2*-0xc12+-0x1*0x1ea7,_0xde41ba(0x5aa)],[-0xd0d+-0x3ca*-0x8+-0x102b,_0xde41ba(0x5aa)],[0x20f1+0xcca+-0x2c9b,_0xde41ba(0x5aa)],[-0x1*-0xa20+-0xd*-0x2e6+-0x2ea6,'u8'],[-0x1*0x1039+-0x19cd+-0x3*-0xe66,'obfI'],[-0x10b1*-0x2+-0x25cd+0x5ab,_0xde41ba(0x42d)],[0x7d9*-0x1+-0x222*-0x3+0x2c7,_0x447af0[_0xde41ba(0x56b)]],[0x8d5+0x5ca+-0xd37,_0x447af0[_0xde41ba(0x435)]],[-0x14a0+-0x1*-0x1222+0x3f2*0x1,_0x447af0['nAJGg']],[-0x1353+0x8b8*0x2+-0x11*-0x33,_0x447af0['nAJGg']],[0x3a6*-0x4+-0x5ab+0x745*0x3,_0xde41ba(0x438)],[-0x647+0x1aff+-0x1314,'obfB'],[0x2676+0x9a9*0x4+-0x62*0xc5,_0xde41ba(0x42d)],[0x1b30+-0xb+-0x873*0x3,_0xde41ba(0x4b1)],[-0x1279+-0x9e9+-0x2*-0xf19,'u8'],[0x3e5*-0xa+0xe85+0x8f*0x2f,_0xde41ba(0x4b1)],[0x123c+-0x1e00+0x34*0x43,'i32'],[0x1*0x63e+0xde8+-0x1226,_0x447af0['kGiIX']],[-0x5*-0x20e+0x1*0x110f+-0x1941,'u8'],[-0x13a2+0x4e2*0x7+0x4*-0x31c,'u8'],[0x24dc+-0xb*0xbf+0x4f*-0x56,'u8'],[0x182f+-0x13bf+-0x252,'u8'],[-0x1*-0xae5+-0x2212+0x194c,'u8'],[0x20c1+0x192+-0x2003,_0x447af0['kGiIX']],[-0x530+0xb*0x1ff+-0xe6d,'u8']],'GG_GameManager':[[-0xd16+0x5*-0x27e+-0x19b0*-0x1,'u8'],[-0x11f*0x1b+-0xcca*-0x1+-0x11a7*-0x1,_0x447af0[_0xde41ba(0x522)]],[-0x2027+0xb07+0x2*0xab2,'u8'],[0x124*0x2+0x1eb*-0x1+-0x4*0x6,'u8'],[0x1d4d+-0x3*0x745+-0x736,_0xde41ba(0x5aa)],[0xa34*0x2+-0x1e64+-0x149*-0x8,_0xde41ba(0x5aa)],[-0x1f68+-0x5d9*-0x2+0x1406,_0x447af0['kGiIX']],[-0x1416+-0x1678+0x2ae2,'i32'],[-0x28*-0x64+-0x11d1*0x1+0x289,'u8'],[-0x183+-0x19c*-0x12+0x1*-0x1b01,'u8'],[-0x4a*0x34+-0x19*0x16d+0x3325,'f32'],[0x1*0xb45+0x212e+-0x2bf7,_0xde41ba(0x5aa)],[0xa58+-0xcc*-0xd+-0x1424,_0xde41ba(0x4b1)],[0x362+0xe0d+-0x5*0x35f,'u8'],[0x18f3+0xd*-0xec+-0xc43,_0xde41ba(0x4b1)],[-0x2614+-0x1*0x6d9+0x2da9,_0xde41ba(0x4b1)],[0x10bb*-0x2+-0xadf+0x2d15,_0x447af0[_0xde41ba(0x5c2)]],[0x5b*-0x6d+0x2*-0x1c3+0x2b2d,_0xde41ba(0x42d)],[-0x7e+-0x1190+0x130a,_0x447af0[_0xde41ba(0x56b)]],[0x1fe9+0x559*-0x4+-0x975,_0xde41ba(0x42d)],[-0x957*-0x3+-0xc*0x232+-0x2b*0x3,'u8'],[0x54c+0x8*0x148+-0x4*0x397,_0xde41ba(0x4b1)],[0xa5c+0x269*0x1+-0xb61,'u8'],[0x1070+0x1a9b+-0x299b,'f32'],[0xb5a*-0x3+-0xd*0x24e+0x4184,'u8'],[0x1438+0x1fd5+-0x3285,'u8'],[0x1*-0x231f+0x22ab+0x218,'u8'],[-0x54a*-0x6+0x1e96+-0x3caa,_0x447af0['kGiIX']],[0x1f91+0x412*0x6+0x1b*-0x203,_0x447af0[_0xde41ba(0x522)]],[-0x343*0x5+-0x151e+0x271d,'u8'],[0x1c45+-0x10b*-0x6+0x6*-0x579,'u8'],[0x88e+-0x1f*0xbb+-0x3*-0x545,_0xde41ba(0x4b1)],[0x25fa+-0x1508*0x1+-0xf36,'i32'],[0x1bc4+-0x2a1*-0x5+0x1*-0x2729,_0xde41ba(0x5aa)],[0x5*0x5bd+0x1c3*-0x16+0x1*0xbd5,_0xde41ba(0x4b1)],[0xb2d*-0x3+-0x4*-0x7b7+-0x11*-0x43,_0xde41ba(0x5aa)],[-0x1f9+0x23d4+-0x200f*0x1,_0x447af0[_0xde41ba(0x5c2)]],[0x1013*-0x1+-0x747+0x192a,_0xde41ba(0x4b1)]]};function _0x19ef4a(_0x288c77,_0x47e636){var _0x165711=_0xde41ba,_0x2b227e={'pruwJ':function(_0x5024a7,_0x596a7a){return _0x5024a7(_0x596a7a);},'BDQGw':function(_0x379c1a,_0x3399a0){return _0x379c1a!==_0x3399a0;},'VJwfW':_0x447af0[_0x165711(0x497)],'nTsuK':_0x447af0['jFRfC'],'DQJqB':function(_0x5d7857){return _0x5d7857();},'stYCP':function(_0x166f66,_0x142e53){var _0x29dcea=_0x165711;return _0x447af0[_0x29dcea(0x379)](_0x166f66,_0x142e53);},'YtLmU':_0x447af0['NYrEd'],'TnbCg':function(_0x60589,_0x305094){return _0x60589!==_0x305094;},'UdjZt':function(_0x20aea3){return _0x20aea3();}};if(_0x447af0['sOkig'](_0x447af0[_0x165711(0x2ad)],_0x447af0[_0x165711(0x2ad)]))_0x22d03c=_0x2b227e['pruwJ'](_0x47d467,_0x4cd4b9&&_0x46d426['messa'+'ge']||_0x25091b);else return function(_0x25c748){var _0x696c8f=_0x165711,_0x3bd98b={'SaeZr':function(_0x3a7074){var _0x3827da=_0x2c42;return _0x2b227e[_0x3827da(0x39e)](_0x3a7074);}};if(_0x696c8f(0x451)!==_0x696c8f(0x1f2))try{if(_0x2b227e[_0x696c8f(0x30b)](_0x2b227e[_0x696c8f(0x446)],_0x696c8f(0x391))){var _0x21bcd9=_0x25c748&&_0x25c748[_0x696c8f(0x58b)]?_0x25c748['val']():0x4eb+0x241*-0x1+-0x2aa*0x1;if(!_0x21bcd9)return;var _0x187e61=_0x42d4a0[_0x288c77];if(!_0x187e61||_0x2b227e['TnbCg'](_0x187e61[_0x696c8f(0x5d8)],_0x21bcd9)){_0x42d4a0[_0x288c77]={'ptr':_0x21bcd9,'firstSeen':Date['now'](),'hits':0x0,'replaced':!!_0x187e61};try{var _0x1dcdba=_0x137072['filte'+'r'](function(_0x42b501){var _0x4d975b=_0x696c8f;return _0x42b501[_0x4d975b(0x4aa)]===_0x288c77;})[0x3*-0x18d+-0x1859*0x1+-0xe8*-0x20];_0x4b65f1={'type':_0x288c77,'atMs':Date['now']()-_0x3a0088,'originalFunc':!!(_0x1dcdba&&_0x1dcdba['hook']&&typeof _0x1dcdba[_0x696c8f(0x52d)][_0x696c8f(0x4ec)+'nalFu'+'nc']===_0x696c8f(0x43b)+'ion'),'resolveGameAtFire':!!_0x2b227e['UdjZt'](_0x28891a),'gameSourceAtFire':_0xb7ad90['sourc'+'e']};}catch(_0x12b293){}}_0x42d4a0[_0x288c77]['hits']++;if(!_0x47e636){var _0x1dcdba=_0x137072[_0x696c8f(0x52f)+'r'](function(_0x35fd6c){var _0x59d089=_0x696c8f,_0x142984={'zglZN':function(_0x5dd078,_0x3a4518){return _0x5dd078+_0x3a4518;},'WTvOP':function(_0x94554e,_0x36777a){return _0x94554e+_0x36777a;}};if(_0x2b227e['BDQGw'](_0x2b227e[_0x59d089(0x55a)],_0x2b227e[_0x59d089(0x3d1)]))return _0x35fd6c[_0x59d089(0x4aa)]===_0x288c77;else{var _0x2bc940=_0x6b65e9[_0x3299c2],_0x3ba31f=_0xe6271e[_0x427779];if(_0x2bc940!==_0x3ba31f)_0x5a6141['push'](_0x142984['zglZN'](_0x142984[_0x59d089(0x2c5)](_0x142984[_0x59d089(0x1a0)](_0x548d86,':\x20')+_0x2bc940,'\x20->\x20'),_0x3ba31f));}})[0x1eca+-0x1050+0x11*-0xda];if(_0x1dcdba&&_0x1dcdba[_0x696c8f(0x52d)]){if('IprSf'==='xyTQS')_0x43b0ec[_0x696c8f(0x52d)]['enabl'+'ed']=![];else try{_0x1dcdba['hook'][_0x696c8f(0x525)+'ed']=![];}catch(_0x452100){}}}}else{_0x2f0ccc=_0x4322ec,_0x154b37=[],_0x39553c(_0x696c8f(0x557)+'t',{'report':_0x3bd98b[_0x696c8f(0x306)](_0x58d908)});return;}}catch(_0xae7759){}else _0xcb69eb[_0x696c8f(0x255)+'onten'+'t']=_0x4d20b3['strin'+'gify'](_0x15dadd,null,0x93f+-0x67+0x1f*-0x49);};}function _0x5253a0(){var _0x3be75d=_0xde41ba;if(_0x137072['lengt'+'h'])return!![];if(!window[_0x3be75d(0x2b4)+'WebMo'+'dkit']||!window['Unity'+'WebMo'+_0x3be75d(0x326)][_0x3be75d(0x2c9)+'me'])return![];var _0x2cd9ef=window[_0x3be75d(0x2b4)+'WebMo'+'dkit'][_0x3be75d(0x2c9)+'me'];if(!_0x2cd9ef['plugi'+'ns']||!_0x2cd9ef['plugi'+'ns']['lengt'+'h'])return![];_0x4141a1=window['Unity'+'WebMo'+_0x3be75d(0x326)][_0x3be75d(0x2b8)+'Wrapp'+'er'],_0x4b5d75=_0x4b5d75||_0x2cd9ef['plugi'+'ns'][_0x447af0[_0x3be75d(0x503)](_0x2cd9ef['plugi'+'ns'][_0x3be75d(0x2c2)+'h'],0x2391+-0x1d5e+-0x1a*0x3d)];if(!_0x4b5d75||_0x447af0['sOkig'](typeof _0x4b5d75['hookP'+'refix'],'funct'+_0x3be75d(0x1ef)))return![];for(var _0x48a0d7=-0x1cf9+0x21da+-0x4e1*0x1;_0x447af0['rAaHv'](_0x48a0d7,_0x23d3da['lengt'+'h']);_0x48a0d7++){var _0x1cd2aa=_0x23d3da[_0x48a0d7];try{if('wRpjn'==='tEBKa')_0x447af0['rUWOp'](_0x2b84a6);else{var _0x1ad206=_0x4b5d75['hookP'+'refix']({'typeName':_0x1cd2aa[_0x3be75d(0x4aa)],'methodName':_0x3be75d(0x572)+'e','params':[_0x3be75d(0x4b1),_0x3be75d(0x4b1)],'returnType':undefined},_0x19ef4a(_0x1cd2aa['type'],_0x1cd2aa[_0x3be75d(0x347)]));_0x137072[_0x3be75d(0x380)]({'type':_0x1cd2aa['type'],'hook':_0x1ad206,'keep':_0x1cd2aa[_0x3be75d(0x347)]});}}catch(_0x5dcc9a){_0x1255b2['push'](_0x447af0[_0x3be75d(0x411)](_0x1cd2aa[_0x3be75d(0x4aa)]+':\x20',_0x447af0[_0x3be75d(0x386)](String,_0x5dcc9a&&_0x5dcc9a[_0x3be75d(0x28a)+'ge']||_0x5dcc9a)[_0x3be75d(0x1e0)](-0x4*0x8be+-0x1376+0x1b37*0x2,0x2189+0xde*-0x10+0x1309*-0x1)));}}return _0x137072[_0x3be75d(0x2c2)+'h']>-0x48d+0x7c6*-0x1+0xc53;}function _0x457c44(){var _0x30f6a0=_0xde41ba,_0x4c5366=0x1*-0x12aa+0x188*-0x19+0x1c79*0x2;for(var _0x121727=-0x2f5*0x7+-0x1285+0x14*0x1f6;_0x121727<_0x137072['lengt'+'h'];_0x121727++){if(_0x137072[_0x121727]['hook']&&_0x447af0['sOkig'](_0x137072[_0x121727][_0x30f6a0(0x52d)][_0x30f6a0(0x3d4)+_0x30f6a0(0x3af)],undefined))_0x4c5366++;}return _0x4c5366;}function _0x2e7d1f(){var _0x3b6c2c=_0xde41ba,_0x193444=-0x7f8+0xf1f+-0x727;for(var _0x139447=0x7aa*0x5+-0x1512+0x8a0*-0x2;_0x447af0[_0x3b6c2c(0x548)](_0x139447,_0x137072[_0x3b6c2c(0x2c2)+'h']);_0x139447++){if(_0x137072[_0x139447]['hook']&&_0x137072[_0x139447][_0x3b6c2c(0x52d)][_0x3b6c2c(0x5db)+'ed'])_0x193444++;}return _0x193444;}var _0x56d954=null,_0x1c7903=[],_0x4b65f1=null;function _0x3fb9b5(_0x264ee5){var _0x3309f6=_0xde41ba,_0x5476dd={'kwKpB':function(_0x4898d5,_0x1ca65c){var _0x33c495=_0x2c42;return _0x447af0[_0x33c495(0x1d1)](_0x4898d5,_0x1ca65c);}};if(_0x447af0[_0x3309f6(0x3b5)](_0x3309f6(0x34d),_0x3309f6(0x3ac)))_0x40fb20[_0x3309f6(0x4fe)+'ngs'][_0x3309f6(0x380)](_0x5476dd[_0x3309f6(0x270)](_0x3309f6(0x1c6)+_0x3309f6(0x264)+_0x3309f6(0x3d9)+'irst\x20'+'captu'+'re\x20(r'+'espaw'+'n?):\x20',_0x2290b5['insta'+_0x3309f6(0x2de)+_0x3309f6(0x1d7)+'ed'][_0x3309f6(0x44f)](',\x20')));else try{if(_0x447af0[_0x3309f6(0x337)](_0x447af0[_0x3309f6(0x468)],_0x447af0[_0x3309f6(0x468)]))try{if(_0x447af0[_0x3309f6(0x2cd)](!_0x14662b,!_0x2e9a5b))return null;var _0x3a9bfb=new _0x31f398(_0x232ef7)['getCl'+_0x3309f6(0x323)+'me']();return _0x447af0['JlmbD'](_0x3a9bfb,_0x5a645a)?null:_0x3a9bfb;}catch(_0x3d2a16){return null;}else{if(!_0x4141a1||!_0x264ee5)return null;var _0x2f7759=new _0x4141a1(_0x264ee5)['getCl'+'assNa'+'me']();return _0x2f7759===undefined?null:_0x2f7759;}}catch(_0x2a193a){return null;}}function _0x33af4b(){var _0x4e9dbe=_0xde41ba,_0x24c56e={};_0xb7ad90['ok']=-0x10c8+-0xfe8*-0x2+-0xf08,_0xb7ad90[_0x4e9dbe(0x23a)+'d']=-0x2377+-0x22e5*-0x1+0x92*0x1,_0xb7ad90[_0x4e9dbe(0x3f2)+_0x4e9dbe(0x38a)]=null;var _0x3328dc=Object[_0x4e9dbe(0x432)](_0x4e175a);for(var _0x4e9dff=-0x1*-0x1159+0x1777+0x8*-0x51a;_0x447af0[_0x4e9dbe(0x548)](_0x4e9dff,_0x3328dc[_0x4e9dbe(0x2c2)+'h']);_0x4e9dff++){var _0x443a8a=_0x3328dc[_0x4e9dff],_0x266fb6=_0x42d4a0[_0x443a8a];if(!_0x266fb6||!_0x266fb6[_0x4e9dbe(0x5d8)])continue;var _0x59fc94=_0x4e175a[_0x443a8a]||[],_0x9db178=[];for(var _0x780df3=0x1f9f+0x8e2+-0x2881;_0x780df3<_0x59fc94['lengt'+'h'];_0x780df3++){var _0x4d3e5a=_0x59fc94[_0x780df3][0xe*-0x16d+-0x151b+0x2911],_0x2be81b=_0x59fc94[_0x780df3][0x175*0x1+-0xb8+-0x1*0xbc];if(_0x447af0[_0x4e9dbe(0x5e1)](_0x2be81b['index'+'Of'](_0x447af0['OgLai']),-0x5*0x261+-0x352+0xf37)){var _0x268022=_0x3d240a(_0x266fb6['ptr'],_0x4d3e5a,_0x2be81b);if(!_0x268022)continue;_0x9db178[_0x4e9dbe(0x380)]({'o':_0x4d3e5a,'k':_0x2be81b,'v':_0x268022[_0x4e9dbe(0x4b2)],'fake':_0x268022['fake'],'act':_0x268022['act'],'inited':_0x268022[_0x4e9dbe(0x5a5)],'raw':_0x447af0[_0x4e9dbe(0x1eb)](_0x447af0[_0x4e9dbe(0x1b6)](_0x447af0['HxOvq'](_0x4e9dbe(0x36f),_0x268022[_0x4e9dbe(0x2e2)]),_0x447af0[_0x4e9dbe(0x355)]),_0x268022['hidde'+'n'])+_0x447af0['MccZd']+_0x268022[_0x4e9dbe(0x5c6)]+(_0x268022['act']?_0x4e9dbe(0x1bb)+'VE':'')});}else{var _0x1b60f2=_0x447af0[_0x4e9dbe(0x402)](_0x5870dd,_0x447af0[_0x4e9dbe(0x376)](_0x266fb6[_0x4e9dbe(0x5d8)],_0x4d3e5a),_0x2be81b);if(_0x1b60f2===undefined)continue;_0x9db178[_0x4e9dbe(0x380)]({'o':_0x4d3e5a,'k':_0x2be81b,'v':_0x1b60f2,'raw':''});}}if(_0x9db178[_0x4e9dbe(0x2c2)+'h'])_0x24c56e[_0x443a8a]=_0x9db178;}return _0x24c56e;}function _0x342344(){var _0x26e40a=_0xde41ba,_0x573e59={};try{var _0x165629=window[_0x26e40a(0x2b4)+'WebMo'+'dkit']&&window[_0x26e40a(0x2b4)+_0x26e40a(0x2ce)+'dkit'][_0x26e40a(0x2c9)+'me'];_0x573e59[_0x26e40a(0x2da)]=_0x165629&&_0x165629[_0x26e40a(0x389)+'uraTa'+'g']||null,_0x573e59[_0x26e40a(0x5cf)+_0x26e40a(0x368)]=!!(_0x165629&&_0x47a8a9&&_0x447af0[_0x26e40a(0x25d)](_0x165629['__sak'+'uraTa'+'g'],_0x47a8a9)),_0x573e59[_0x26e40a(0x246)+_0x26e40a(0x269)+'e']=_0x165629&&_0x165629['_game']?typeof _0x165629[_0x26e40a(0x1c8)]:_0x447af0['QyhnA'],_0x573e59['plugi'+_0x26e40a(0x37e)+_0x26e40a(0x5c3)+_0x26e40a(0x598)+_0x26e40a(0x4e3)]=!!(_0x4b5d75&&_0x4b5d75[_0x26e40a(0x27c)+_0x26e40a(0x582)]&&_0x4b5d75[_0x26e40a(0x27c)+'ime']===_0x165629),_0x573e59['plugi'+'nRunt'+_0x26e40a(0x3ab)+'me']=_0x4b5d75&&_0x4b5d75['_runt'+'ime']&&_0x4b5d75['_runt'+_0x26e40a(0x582)][_0x26e40a(0x1c8)]?typeof _0x4b5d75['_runt'+_0x26e40a(0x582)]['_game']:_0x26e40a(0x5e2);}catch(_0xaf7d30){_0x573e59[_0x26e40a(0x38e)]=String(_0xaf7d30&&_0xaf7d30[_0x26e40a(0x28a)+'ge']||_0xaf7d30);}return _0x573e59;}function _0x3a3abe(){var _0x56cb8d=_0xde41ba,_0x3d63ef={'ShHhz':_0x447af0[_0x56cb8d(0x3e6)]};if(_0x447af0[_0x56cb8d(0x337)](_0x447af0['ZaaWW'],_0x56cb8d(0x551))){var _0x517ff6=['unity'+'Insta'+'nce',_0x447af0[_0x56cb8d(0x2d3)],_0x447af0[_0x56cb8d(0x1a7)],_0x447af0[_0x56cb8d(0x410)]],_0x2c7afe={};for(var _0xcd5ba6=0x1f92+0x2*0xb9c+0x1b65*-0x2;_0xcd5ba6<_0x517ff6['lengt'+'h'];_0xcd5ba6++){if(_0x447af0[_0x56cb8d(0x337)](_0x447af0[_0x56cb8d(0x32b)],_0x447af0[_0x56cb8d(0x554)])){var _0x2d2f8f=_0x517ff6[_0xcd5ba6],_0x1c7375=typeof window[_0x2d2f8f];_0x2c7afe[_0x2d2f8f]=_0x1c7375===_0x56cb8d(0x586)+_0x56cb8d(0x566)?_0x447af0['TmqkV']:_0x1c7375;}else{var _0x1d0066=(_0x56cb8d(0x512)+_0x56cb8d(0x332))['split']('|'),_0x3f27e1=0x114f*0x1+-0x1ee3+0x9e*0x16;while(!![]){switch(_0x1d0066[_0x3f27e1++]){case'0':_0x4802cd[_0x56cb8d(0x255)+'onten'+'t']=_0x447af0[_0x56cb8d(0x343)];continue;case'1':if(_0x447af0[_0x56cb8d(0x2cd)](!_0x52c4fb,!_0x2f6433))return;continue;case'2':_0x33dbea[_0x56cb8d(0x255)+'onten'+'t']=_0x447af0['wgxru'](_0x447af0[_0x56cb8d(0x419)](_0x447af0[_0x56cb8d(0x3bd)](_0x447af0[_0x56cb8d(0x3f7)](_0x56cb8d(0x30d)+_0x56cb8d(0x49b)+_0x56cb8d(0x48c)+'never'+_0x56cb8d(0x5e4)+_0x56cb8d(0x3c8)+_0x56cb8d(0x4df)+_0x56cb8d(0x2c8)+_0x56cb8d(0x55c)+'\x0a'+(_0x56cb8d(0x239)+_0x56cb8d(0x3d3)+'\x20prov'+_0x56cb8d(0x3da)+_0x56cb8d(0x2ea)+'rscri'+'pt\x20IS'+_0x56cb8d(0x405)+'alled'+_0x56cb8d(0x452)+_0x56cb8d(0x212)+_0x56cb8d(0x1cd)+'\x20the\x20'+_0x56cb8d(0x3e0)+'l,\x0a')+(_0x56cb8d(0x202)+_0x56cb8d(0x2ca)+'ainin'+'g\x20sus'+_0x56cb8d(0x568)+'\x20are:'+'\x0a\x0a'),'\x20\x201.\x20'+'Tampe'+'rmonk'+'ey\x20is'+'\x20not\x20'+'injec'+_0x56cb8d(0x31d)+'into\x20'+'the\x20c'+'ross-'+_0x56cb8d(0x4ec)+_0x56cb8d(0x3a0)+_0x56cb8d(0x4a5))+_0x447af0['UqZfo'],_0x56cb8d(0x508)+_0x56cb8d(0x46f)+_0x56cb8d(0x287)+_0x56cb8d(0x535)+_0x56cb8d(0x1a9)+_0x56cb8d(0x5e6)+'r.js\x20'+'AND\x20t'+_0x56cb8d(0x5d9)+_0x56cb8d(0x252)+'g\x20scr'+_0x56cb8d(0x23e)+_0x56cb8d(0x2ac)),_0x56cb8d(0x21b)+'insta'+_0x56cb8d(0x43e)+'—\x20two'+_0x56cb8d(0x55d)+_0x56cb8d(0x34b)+'\x20UWMK'+_0x56cb8d(0x2e5)+_0x56cb8d(0x1e1)+_0x56cb8d(0x22e)+_0x56cb8d(0x4b0)+_0x56cb8d(0x26f)+'nstan'+_0x56cb8d(0x364)+_0x56cb8d(0x3fd)),_0x447af0[_0x56cb8d(0x24e)]);continue;case'3':_0x1be032['style'][_0x56cb8d(0x43f)]=_0x56cb8d(0x241)+'c7';continue;case'4':if(_0x2bb01e)return;continue;}break;}}}var _0x283c5e=_0x28891a();_0x2c7afe['gameS'+_0x56cb8d(0x463)]=_0xb7ad90['sourc'+'e'];try{if(_0x447af0['duIvs']('XhTsL',_0x447af0[_0x56cb8d(0x201)]))_0x2c7afe[_0x56cb8d(0x300)+'dule']=!!(_0x283c5e&&_0x283c5e[_0x56cb8d(0x5ce)+'e']),_0x2c7afe['heapU'+'8']=!!(_0x283c5e&&_0x283c5e['Modul'+'e']&&_0x283c5e[_0x56cb8d(0x5ce)+'e'][_0x56cb8d(0x486)+'8']),_0x2c7afe['heapB'+_0x56cb8d(0x286)]=_0x2c7afe[_0x56cb8d(0x456)+'8']?_0x283c5e['Modul'+'e']['HEAPU'+'8'][_0x56cb8d(0x2c2)+'h']:0x12f*-0x1a+-0x1*0x1e80+0x3d46;else{if(_0x14a0cf[_0x19d720]['hook']&&_0x447af0['sOkig'](_0x142a33[_0x343911]['hook'][_0x56cb8d(0x3d4)+_0x56cb8d(0x3af)],_0x2b0cd4))_0x9e869++;}}catch(_0x412852){if(_0x447af0[_0x56cb8d(0x21c)]!==_0x447af0[_0x56cb8d(0x21c)]){var _0x3ad538=_0x394cb6['Unity'+'WebMo'+_0x56cb8d(0x326)]&&_0x32bb6a[_0x56cb8d(0x2b4)+'WebMo'+_0x56cb8d(0x326)]['Runti'+'me'];_0x41f8b8[_0x56cb8d(0x2da)]=_0x3ad538&&_0x3ad538['__sak'+_0x56cb8d(0x39a)+'g']||null,_0x55cf92[_0x56cb8d(0x5cf)+_0x56cb8d(0x368)]=!!(_0x3ad538&&_0x99335f&&_0x3ad538['__sak'+_0x56cb8d(0x39a)+'g']===_0x56933c),_0x416a85['runti'+'meGam'+'e']=_0x3ad538&&_0x3ad538['_game']?typeof _0x3ad538['_game']:'none',_0x1b096a['plugi'+_0x56cb8d(0x37e)+_0x56cb8d(0x5c3)+'Expor'+_0x56cb8d(0x4e3)]=!!(_0x2c1c25&&_0x1da7aa[_0x56cb8d(0x27c)+_0x56cb8d(0x582)]&&_0x517a4e['_runt'+_0x56cb8d(0x582)]===_0x3ad538),_0x260ed8[_0x56cb8d(0x3aa)+_0x56cb8d(0x37e)+_0x56cb8d(0x3ab)+'me']=_0x1a23aa&&_0x2fd0f3['_runt'+_0x56cb8d(0x582)]&&_0xcfe0eb[_0x56cb8d(0x27c)+_0x56cb8d(0x582)]['_game']?typeof _0x1c5c23['_runt'+_0x56cb8d(0x582)][_0x56cb8d(0x1c8)]:_0x3d63ef[_0x56cb8d(0x4d2)];}else _0x2c7afe[_0x56cb8d(0x300)+'dule']=![],_0x2c7afe['heapU'+'8']=![],_0x2c7afe[_0x56cb8d(0x1d9)+'ytes']=-0xad3+0xc94+0x1*-0x1c1;}return _0x2c7afe['value'+_0x56cb8d(0x2e9)+'er']=typeof _0x4141a1,_0x2c7afe;}else{_0x5ea65e[_0x56cb8d(0x380)](_0x56cb8d(0x4fe)+'ngs');for(var _0x3f1659=-0x2163+0xf25+0x3a6*0x5;_0x3f1659<_0xb78931['warni'+_0x56cb8d(0x474)]['lengt'+'h'];_0x3f1659++)_0x13bc60[_0x56cb8d(0x380)](_0x447af0[_0x56cb8d(0x275)]('\x20\x20!\x20',_0x5e1b80[_0x56cb8d(0x4fe)+'ngs'][_0x3f1659]));}}function _0x54d9ff(_0x34639d){var _0x2b429e=_0xde41ba;if(_0x2b429e(0x27d)===_0x2b429e(0x27d)){var _0x1ff204={};for(var _0x2bb22e in _0x34639d){var _0x4045f4=_0x34639d[_0x2bb22e];for(var _0x56ef9c=-0x203c+0x17d+0x1ebf;_0x56ef9c<_0x4045f4['lengt'+'h'];_0x56ef9c++){if(_0x447af0['sSfCw'](_0x2b429e(0x2a8),'ZyaqP')){var _0x5d9b00=_0x553775[_0x2b429e(0x1e0)](-0x42*0x13+-0xe*-0xd1+0x688*-0x1,-0x16a9+0x1*-0x16f9+-0x6*-0x7cd);if(_0x59d470['index'+'Of'](_0x5d9b00)===-(-0xf99*0x1+0x2*-0xd3f+0x2a18)&&_0x287759['lengt'+'h']<-0x1b79+-0x14db+0x3090)_0x1de4c9[_0x2b429e(0x380)](_0x5d9b00);}else _0x1ff204[_0x2bb22e+_0x447af0[_0x2b429e(0x2f6)]+_0x4045f4[_0x56ef9c]['o']['toStr'+'ing'](0x2aa*0x1+-0x504*-0x3+-0x11a6)]=_0x4045f4[_0x56ef9c]['v'];}}return _0x1ff204;}else{_0x25e9f5['ok']++;switch(_0x1f2fec){case'u8':return _0x5d104b[_0x2b429e(0x32c)+_0x2b429e(0x1fd)](_0x2f92f2);case'i8':return _0x57b4ed['getIn'+'t8'](_0x5c42e5);case _0x2b429e(0x2df):return _0x5a6fd7['getIn'+_0x2b429e(0x53f)](_0x5973be,!![]);case _0x447af0['XeNTN']:return _0x509022[_0x2b429e(0x32c)+_0x2b429e(0x2dc)](_0x3f45a2,!![]);case _0x2b429e(0x4b1):return _0x1a5991[_0x2b429e(0x4c1)+'t32'](_0x544fe2,!![]);case _0x447af0['PedGf']:return _0xb285dc['getUi'+_0x2b429e(0x274)](_0x65015c,!![]);case'f32':return _0x8b67e3[_0x2b429e(0x505)+_0x2b429e(0x556)](_0x501b9b,!![]);case _0x2b429e(0x406):return _0x19708f[_0x2b429e(0x505)+_0x2b429e(0x339)](_0x51c595,!![]);default:return _0x296361['getIn'+'t32'](_0x55498c,!![]);}}}function _0x8ede5c(_0x1d8749){var _0x58403c=_0xde41ba,_0x17afcd=('2|0|7'+'|5|4|'+'1|6|3')['split']('|'),_0x3a678d=0x101*-0x25+0x1*0x268f+-0x16a;while(!![]){switch(_0x17afcd[_0x3a678d++]){case'0':var _0xbe85c4=_0x447af0['DkLML'](_0x33af4b);continue;case'1':for(var _0x508992 in _0x5a1905){var _0x61d18b=_0x56d954[_0x508992],_0x5ef8be=_0x5a1905[_0x508992];if(_0x61d18b!==_0x5ef8be)_0x1c7903[_0x58403c(0x380)](_0x447af0[_0x58403c(0x42b)](_0x508992+':\x20'+_0x61d18b+_0x58403c(0x369),_0x5ef8be));}continue;case'2':if(_0x447af0['CfiVo'](_0x1d8749,_0x58403c(0x23c)+_0x58403c(0x507)))return;continue;case'3':_0x447af0['HrKEP'](_0x30274c,_0x447af0['FLFfr'],{'report':_0x5a6a00()});continue;case'4':_0x1c7903=[];continue;case'5':if(!_0x56d954){_0x56d954=_0x5a1905,_0x1c7903=[],_0x447af0[_0x58403c(0x3df)](_0x30274c,_0x58403c(0x557)+'t',{'report':_0x447af0[_0x58403c(0x516)](_0x5a6a00)});return;}continue;case'6':_0x56d954=_0x5a1905;continue;case'7':var _0x5a1905=_0x447af0['NPGLe'](_0x54d9ff,_0xbe85c4);continue;}break;}}window[_0xde41ba(0x24a)+'entLi'+'stene'+'r'](_0xde41ba(0x280)+'wn',function(_0x3aad67){var _0x8ddc20=_0xde41ba,_0x17dd5d={'Fpsxy':function(_0x18001b,_0x39a358){return _0x18001b-_0x39a358;}};if(_0x447af0[_0x8ddc20(0x3d0)]===_0x8ddc20(0x327))_0x3aad67&&_0x447af0['AfDBi'](_0x3aad67['code'],'F9')&&(_0x3aad67[_0x8ddc20(0x5c1)+_0x8ddc20(0x4fb)+_0x8ddc20(0x59f)](),_0x447af0[_0x8ddc20(0x386)](_0x8ede5c,'snaps'+_0x8ddc20(0x507)));else try{return _0x119bf0();}catch(_0x599a26){return{'version':_0x25d102,'when':new _0x2d6b8f()['toISO'+_0x8ddc20(0x421)+'g'](),'elapsedMs':_0x17dd5d[_0x8ddc20(0x2d9)](_0x12eacc[_0x8ddc20(0x2a1)](),_0x1d94ba),'host':_0x58c727,'uwmk':!!(_0x2885b2[_0x8ddc20(0x2b4)+'WebMo'+'dkit']&&_0xe1f186[_0x8ddc20(0x2b4)+'WebMo'+'dkit'][_0x8ddc20(0x2c9)+'me']),'il2CppContext':![],'arm':_0x22edda,'hooksTotal':_0x4a782b[_0x8ddc20(0x2c2)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x3189aa(_0x599a26&&_0x599a26[_0x8ddc20(0x28a)+'ge']||_0x599a26)};}},!![]);function _0x5a6a00(){var _0x48db11=_0xde41ba,_0x2a59b8={'VLrNL':_0x48db11(0x531)+'game\x20'+_0x48db11(0x19b)+'ng','IsWqA':'Updat'+'e','KtaIv':_0x48db11(0x4b1),'OVaZP':function(_0x48a540,_0x3ba08a){return _0x48a540+_0x3ba08a;},'pZqyQ':_0x48db11(0x4d7)+_0x48db11(0x399)+_0x48db11(0x51f)+'t\x20','qSlGP':_0x48db11(0x5a4)+'rce:\x20','DvVDU':'),\x20so'+_0x48db11(0x3ae)+'refer'+'ence\x20'+'exist'+_0x48db11(0x346)+_0x48db11(0x55f)+_0x48db11(0x42e)+_0x48db11(0x3e7)+'eacha'+_0x48db11(0x472)+_0x48db11(0x423)};if(_0x447af0['pdmCt'](_0x48db11(0x3d5),_0x48db11(0x3d5))){var _0x1f2a30=window['Unity'+_0x48db11(0x2ce)+'dkit']&&window[_0x48db11(0x2b4)+'WebMo'+_0x48db11(0x326)]['Runti'+'me']||null,_0x2ab5f7=_0x1f2a30&&_0x1f2a30[_0x48db11(0x2bb)+'pCont'+_0x48db11(0x284)],_0x5d62fd=_0x2ab5f7&&_0x2ab5f7[_0x48db11(0x558)+'tData'],_0x4e7af8={},_0x339717=[];for(var _0x577379 in _0x42d4a0){_0x4e7af8[_0x577379]='0x'+_0x42d4a0[_0x577379]['ptr'][_0x48db11(0x2ba)+_0x48db11(0x3bc)](-0x121d+-0x2272+0x349f);if(_0x42d4a0[_0x577379][_0x48db11(0x41e)+_0x48db11(0x490)])_0x339717['push'](_0x577379);}var _0x1b09f6={};for(var _0x5d7e59 in _0x42d4a0)_0x1b09f6[_0x5d7e59]=_0x3fb9b5(_0x42d4a0[_0x5d7e59]['ptr']);var _0x5829e8={},_0x35c8ce=null;try{_0x5829e8=_0x33af4b();}catch(_0x1b5414){_0x35c8ce=_0x447af0[_0x48db11(0x1b8)](String,_0x1b5414&&_0x1b5414[_0x48db11(0x28a)+'ge']||_0x1b5414);}var _0x2eed1f={'version':_0xff4f27,'when':new Date()['toISO'+'Strin'+'g'](),'elapsedMs':Date[_0x48db11(0x2a1)]()-_0x3a0088,'frame':location['href']['slice'](0x1de8+-0xeb*0x21+0x63,-0x9*-0x32b+-0x22ba+0x3b*0x1d),'host':_0x2c4bda,'frameRole':_0x4088c5,'uwmk':!!_0x1f2a30,'il2CppContext':!!_0x2ab5f7,'typeCount':_0x5d62fd?Object['keys'](_0x5d62fd)['lengt'+'h']:null,'arm':_0x445b94,'assemblies':_0x5b8075,'hooksTotal':_0x137072['lengt'+'h'],'hooksApplied':_0x2e7d1f(),'hooksResolved':_0x447af0[_0x48db11(0x33a)](_0x457c44),'hooksRegisteredAtArm':_0x445b94[_0x48db11(0x40c)+_0x48db11(0x1bd)+_0x48db11(0x5ac)]||0x6fe+0x1817*0x1+-0x1f15,'hookErrors':_0x1255b2[_0x48db11(0x1e0)](-0x1cac+0x1ad4+0x1d8,0x20*-0x5d+0xa16+-0xc9*-0x2),'instances':_0x4e7af8,'classNames':_0x1b09f6,'instancesReplaced':_0x339717,'hookFireProof':_0x4b65f1,'survey':_0x5829e8,'surveyRows':Object[_0x48db11(0x432)](_0x5829e8)[_0x48db11(0x28e)+'e'](function(_0x580b2f,_0x2208bf){var _0x3bb47e=_0x48db11;return _0x580b2f+_0x5829e8[_0x2208bf][_0x3bb47e(0x2c2)+'h'];},0x11a*-0x5+0x1*-0x207e+0x2600),'reads':{'ok':_0xb7ad90['ok'],'failed':_0xb7ad90[_0x48db11(0x23a)+'d'],'lastError':_0xb7ad90['lastE'+_0x48db11(0x38a)],'source':_0xb7ad90[_0x48db11(0x591)+'e']},'identity':_0x342344(),'globals':_0x447af0[_0x48db11(0x4b7)](_0x3a3abe),'wasmMemory':{'captured':!!_0x1f1f9c,'atMs':_0x42ddac,'bytes':(function(){var _0x2e4a3d=_0x48db11;if(_0x2e4a3d(0x1ab)!=='nXdfd')try{_0x44d1dc();}catch(_0x16da41){}else try{return _0x1f1f9c&&_0x1f1f9c['buffe'+'r']?_0x1f1f9c[_0x2e4a3d(0x222)+'r']['byteL'+_0x2e4a3d(0x2c3)]:-0x1943*-0x1+-0x1*-0xb92+-0x24d5;}catch(_0x470a17){return _0x447af0['jLiwB']==='RBzwz'?0x5*-0xa6+-0x1bd0+-0x19*-0x13e:(_0x2138a4[_0x2e4a3d(0x591)+'e']=_0x2a59b8[_0x2e4a3d(0x4f4)],_0x45ee0c);}}()),'exportKeys':_0x26d18f},'diff':_0x1c7903['slice'](0xe*0x1aa+0x13*0x1c3+-0x38c5,0xcdf+-0xb4d+0x1*-0x16a),'uwmkLog':_0x545c5d['slice'](0x1aa8+-0x5*-0x628+0x72e*-0x8,0x1fd*0x1+0x1484+0x166d*-0x1),'warnings':[]};if(_0x35c8ce)_0x2eed1f[_0x48db11(0x4fe)+_0x48db11(0x474)]['push']('surve'+'y\x20fai'+_0x48db11(0x21a)+_0x35c8ce);if(_0x445b94['error'])_0x2eed1f[_0x48db11(0x4fe)+_0x48db11(0x474)][_0x48db11(0x380)](_0x48db11(0x5af)+'armin'+_0x48db11(0x3c0)+'led:\x20'+_0x445b94['error']);_0x2eed1f[_0x48db11(0x42a)+'yRows']===-0x446+0xb4a+0x2*-0x382&&_0x447af0[_0x48db11(0x27f)](Object[_0x48db11(0x432)](_0x2eed1f[_0x48db11(0x494)+'nces'])[_0x48db11(0x2c2)+'h'],0x1679+0x20b*-0x10+0xa37)&&_0x2eed1f[_0x48db11(0x4fe)+'ngs'][_0x48db11(0x380)](_0x447af0['NZarD'](_0x447af0['GpomW']('captu'+_0x48db11(0x5cc),Object[_0x48db11(0x432)](_0x2eed1f[_0x48db11(0x494)+_0x48db11(0x325)])['lengt'+'h']),'\x20obje'+_0x48db11(0x5b8)+'\x20but\x20'+_0x48db11(0x5df)+_0x48db11(0x4d8)+_0x48db11(0x45e))+(_0xb7ad90['lastE'+_0x48db11(0x38a)]?_0x447af0[_0x48db11(0x537)](_0x48db11(0x2e0)+'n:\x20',_0xb7ad90['lastE'+_0x48db11(0x38a)]):_0x48db11(0x4bc)+'ad\x20fa'+_0x48db11(0x30f)+_0x48db11(0x5de)+'very\x20'+_0x48db11(0x2f4)+_0x48db11(0x3fe)+'\x20skip'+_0x48db11(0x4d4)+_0x48db11(0x5b1)+'e.'));if(_0x2eed1f[_0x48db11(0x4fa)+_0x48db11(0x58c)]&&_0x447af0[_0x48db11(0x26a)](_0x2eed1f[_0x48db11(0x4fa)+_0x48db11(0x58c)]['tagMa'+'tches'],![])){if(_0x447af0[_0x48db11(0x3f6)]!==_0x447af0[_0x48db11(0x5c9)])_0x2eed1f[_0x48db11(0x4fe)+_0x48db11(0x474)][_0x48db11(0x380)](_0x447af0[_0x48db11(0x1df)](_0x447af0['RJEff']('ANOTH'+_0x48db11(0x375)+_0x48db11(0x2ae)+_0x48db11(0x360)+_0x48db11(0x31c)+_0x48db11(0x3b3)+'ndow.'+_0x48db11(0x2b4)+_0x48db11(0x2ce)+'dkit.'+'\x20The\x20'+_0x48db11(0x2c9)+_0x48db11(0x429)+'\x20arme'+_0x48db11(0x5b0)+'\x20',_0x48db11(0x41e)+_0x48db11(0x5e3)+'y\x20a\x20d'+_0x48db11(0x37a)+'ent\x20i'+_0x48db11(0x2a9)+'ce,\x20s'+_0x48db11(0x4e7)+'are\x20a'+'sking'+_0x48db11(0x3ae)+'wrong'+_0x48db11(0x3f1)+'ct\x20fo'+'r\x20'),_0x447af0[_0x48db11(0x1ac)])+_0x447af0['udOBn']);else{var _0x276559=_0x3aa0f5['hookP'+_0x48db11(0x26e)]({'typeName':_0x494c0b[_0x48db11(0x4aa)],'methodName':_0x2a59b8[_0x48db11(0x528)],'params':[_0x48db11(0x4b1),_0x2a59b8[_0x48db11(0x262)]],'returnType':_0x51407c},_0x1585bb(_0x1ee1d2[_0x48db11(0x4aa)],_0x4d7a91['keep']));_0x25c936['push']({'type':_0x3b7abc[_0x48db11(0x4aa)],'hook':_0x276559,'keep':_0x4860c3['keep']});}}_0x2eed1f[_0x48db11(0x4fa)+_0x48db11(0x58c)]&&_0x2eed1f[_0x48db11(0x4fa)+'ity']['plugi'+'nRunt'+'imeIs'+_0x48db11(0x598)+_0x48db11(0x4e3)]===![]&&_0x2eed1f[_0x48db11(0x4fe)+'ngs'][_0x48db11(0x380)](_0x447af0[_0x48db11(0x1c3)](_0x48db11(0x3aa)+'n._ru'+_0x48db11(0x477)+_0x48db11(0x388)+_0x48db11(0x54e)+_0x48db11(0x493)+_0x48db11(0x2b4)+_0x48db11(0x2ce)+_0x48db11(0x408)+'Runti'+'me\x20-\x20'+'the\x20p'+_0x48db11(0x324)+'\x20was\x20'+_0x48db11(0x342)+'\x20','again'+_0x48db11(0x5e8)+_0x48db11(0x44a)+_0x48db11(0x218)+'Runti'+_0x48db11(0x476)+_0x48db11(0x1de)+'e\x20tha'+_0x48db11(0x1e6)+'\x20glob'+_0x48db11(0x588)+'w\x20exp'+'oses.'));if(_0x2eed1f['globa'+'ls']&&!_0x2eed1f['globa'+'ls']['heapU'+'8']){if(_0x447af0['sOkig'](_0x48db11(0x351),_0x447af0[_0x48db11(0x3c2)])){var _0x359ac4='';_0x2eed1f[_0x48db11(0x57c)+_0x48db11(0x358)+_0x48db11(0x578)]&&(_0x447af0['oVspa'](_0x48db11(0x424),_0x48db11(0x208))?_0x359ac4=_0x447af0['lqIgd'](_0x447af0[_0x48db11(0x1b6)](_0x48db11(0x4d7)+_0x48db11(0x399)+'red\x20a'+'t\x20',_0x2eed1f[_0x48db11(0x57c)+_0x48db11(0x358)+_0x48db11(0x578)]['atMs'])+(_0x48db11(0x5d1)+_0x48db11(0x2e6)+_0x48db11(0x5a8)+_0x48db11(0x1bf)+'='),_0x2eed1f[_0x48db11(0x57c)+_0x48db11(0x358)+'oof'][_0x48db11(0x4ec)+_0x48db11(0x335)+'nc'])+(_0x48db11(0x452)+'game\x20'+_0x48db11(0x244)+'ved=')+_0x2eed1f['hookF'+_0x48db11(0x358)+_0x48db11(0x578)][_0x48db11(0x244)+_0x48db11(0x5d5)+'eAtFi'+'re']+_0x447af0['YAELf']+(_0x2eed1f[_0x48db11(0x57c)+'irePr'+_0x48db11(0x578)][_0x48db11(0x4bf)+_0x48db11(0x463)+'AtFir'+'e']||_0x447af0['QyhnA'])+_0x447af0[_0x48db11(0x5c5)]:_0x1bd5d1[_0x48db11(0x4fe)+'ngs'][_0x48db11(0x380)](_0x447af0[_0x48db11(0x4fd)](_0x447af0['tqerF'](_0x447af0[_0x48db11(0x22a)]+_0x3746fe['hooks'+_0x48db11(0x233)+'ved'],_0x447af0[_0x48db11(0x2ff)]),_0x2d6a2c[_0x48db11(0x40c)+_0x48db11(0x454)])+('\x20hook'+_0x48db11(0x349)+_0x48db11(0x43d)+_0x48db11(0x5ab)+_0x48db11(0x466)+_0x48db11(0x398)+_0x48db11(0x5db)+_0x48db11(0x509)+'ne.\x20T'+_0x48db11(0x491)+_0x48db11(0x5ad)+_0x48db11(0x5dc))+('(this'+_0x48db11(0x35a)+'hodIn'+_0x48db11(0x4fc)+'->\x20vo'+_0x48db11(0x4f8)+'es\x20no'+_0x48db11(0x4a2)+'ch\x20th'+_0x48db11(0x44e)+'ild.'))),_0x2eed1f['warni'+'ngs'][_0x48db11(0x380)](_0x447af0[_0x48db11(0x4b3)]('Unity'+_0x48db11(0x405)+'ance\x20'+_0x48db11(0x3e7)+_0x48db11(0x247)+'ed\x20ye'+'t\x20(so'+'urce:'+'\x20'+(_0x2eed1f[_0x48db11(0x529)+'ls']['gameS'+'ource']||_0x48db11(0x5e2)),_0x48db11(0x291))+(_0x48db11(0x243)+'reads'+_0x48db11(0x356)+'\x20bloc'+'ked\x20u'+_0x48db11(0x258)+_0x48db11(0x53c)+'e\x20obj'+'ect\x20w'+_0x48db11(0x2d5)+'odule'+_0x48db11(0x2e1)+_0x48db11(0x457)+'\x20reac'+'hable'+'.')+_0x359ac4);}else{var _0x272b97=_0x583061[_0x10195f];if(!_0x272b97)return null;var _0x254436=_0x4f3c1d(_0x447af0[_0x48db11(0x537)](_0x447af0[_0x48db11(0x580)](_0x436c13,_0x2f6661),_0x272b97['key']),'u8'),_0x4d03ea=_0x324658(_0xdf807b+_0x3d0b5e+_0x272b97[_0x48db11(0x5c4)+'n'],_0x48db11(0x4b1)),_0x181cd3=_0x447af0[_0x48db11(0x3df)](_0x42c94c,_0x447af0['PGhtf'](_0x30a988+_0x3ff3ae,_0x272b97['inite'+'d']),'u8'),_0x2282cb=_0x457cbb(_0x447af0[_0x48db11(0x4fd)](_0xfdd550,_0x4ff27e)+_0x272b97[_0x48db11(0x5c6)],_0x447af0['RQtKR'](_0xf79da0,_0x447af0[_0x48db11(0x2a2)])?_0x447af0['cFHzy']:_0x104b5a==='obfI'?_0x48db11(0x4b1):'u8'),_0x125ba2=_0x11d8a9(_0x246a69+_0x4836ec+_0x272b97[_0x48db11(0x2b1)+'e'],'u8');if(_0x447af0['QCuNg'](_0x254436,_0x4874ff)||_0x447af0[_0x48db11(0x207)](_0x4d03ea,_0x33f3bb)||_0x447af0['GHkPG'](_0x2282cb,_0x4050d1)||_0x125ba2===_0x4fcd3d)return null;_0x254436&=-0x1*-0x51a+-0x85f*0x1+-0xd*-0x54,_0x4d03ea|=0xee7+-0x1*-0x4d3+0x32*-0x65,_0x181cd3=(_0x181cd3||0x1*0x1979+-0x10cf+-0x8aa)&-0x59d*0x2+-0x1*0x18b6+0x23f1*0x1,_0x125ba2&=0x2*-0x88c+-0x1*-0x81d+-0x23f*-0x4;var _0x18e64;if(_0x438adc==='obfF')_0x18e64=_0x447af0['sIqya'](_0x2dd086,_0x447af0['QAjeZ'](_0x4d03ea,_0x254436));else{if(_0x447af0[_0x48db11(0x3b0)](_0x328761,_0x48db11(0x42d)))_0x18e64=_0x4d03ea^_0x254436|0x1*0x4a1+0x1942+-0x1de3;else _0x18e64=((_0x4d03ea^_0x254436)&-0x5e1+-0x1637+0xb*0x2a5)!==-0xb77+0x1f*0x9f+0x1*-0x7ca?0x191c+-0x167b+-0x2a0:0x1*-0x56d+0x1daa+-0x183d;}return{'real':_0x18e64,'fake':_0x2282cb,'act':_0x125ba2,'init':_0x181cd3,'key':_0x254436,'hidden':_0x4d03ea};}}(_0x2eed1f[_0x48db11(0x529)+'ls']&&!_0x2eed1f[_0x48db11(0x529)+'ls']['value'+'Wrapp'+'er']||_0x2eed1f['globa'+'ls'][_0x48db11(0x2d0)+_0x48db11(0x2e9)+'er']===_0x48db11(0x586)+_0x48db11(0x566))&&_0x2eed1f[_0x48db11(0x4fe)+'ngs'][_0x48db11(0x380)]('windo'+_0x48db11(0x415)+_0x48db11(0x216)+_0x48db11(0x2e8)+_0x48db11(0x3bf)+_0x48db11(0x4b8)+'pper\x20'+_0x48db11(0x58e)+_0x48db11(0x23f)+_0x48db11(0x2c7)+_0x48db11(0x49a)+_0x48db11(0x30c)+_0x48db11(0x2b0)+_0x48db11(0x517)+'nd.');if(_0x2eed1f[_0x48db11(0x40c)+'Total']>0xf8d+0x4f*-0x45+-0x1ea*-0x3&&_0x2eed1f[_0x48db11(0x40c)+_0x48db11(0x57b)+'ed']===-0xc54+0x9af+0x2a5&&_0x5d62fd){if(_0x447af0[_0x48db11(0x1f5)](_0x2eed1f[_0x48db11(0x40c)+_0x48db11(0x233)+'ved'],-0x19c*0x17+-0x1cdd+0x41e1))_0x2eed1f['warni'+'ngs'][_0x48db11(0x380)](_0x447af0['mZKFi'](_0x447af0[_0x48db11(0x228)](_0x447af0[_0x48db11(0x254)](_0x447af0['mZKFi'](_0x447af0[_0x48db11(0x5c8)]+_0x2eed1f['hooks'+_0x48db11(0x454)]+_0x447af0['UrdYk'],_0x48db11(0x534)+_0x48db11(0x2f2)+_0x48db11(0x366)+_0x48db11(0x427)+_0x48db11(0x4b0)+_0x48db11(0x26f)+'nstan'+_0x48db11(0x364)+_0x48db11(0x452)+_0x48db11(0x23c)+_0x48db11(0x4db)+'plugi'+_0x48db11(0x541)+'ks.le'+_0x48db11(0x4f2)+'\x20'),_0x48db11(0x45b)+_0x48db11(0x4f7)+'egist'+'ered\x20'+_0x48db11(0x530)+_0x48db11(0x38d)+'re\x20ig'+_0x48db11(0x4a9)+'\x20for\x20'+_0x48db11(0x1c0)+_0x48db11(0x5e5)+_0x48db11(0x3c1)+'\x20page'+'.\x20'),'Regis'+_0x48db11(0x5ac)+'\x20')+_0x2eed1f['hooks'+_0x48db11(0x1bd)+_0x48db11(0x5ac)+'AtArm'],'\x20hook'+'(s)\x20d'+_0x48db11(0x413)+'\x20armi'+'ng\x20at'+'\x20docu'+_0x48db11(0x203)+'start'+'.'));else{if(_0x447af0['MwjbO']==='KClPI'){var _0x25f3b4=0x18c3+-0x1ff2+0x72f;for(var _0x53eef6=-0xe*0x2+-0x20c1*-0x1+-0x20a5*0x1;_0x53eef6<_0x13a9a5[_0x48db11(0x2c2)+'h'];_0x53eef6++){if(_0x5882e5[_0x53eef6]['hook']&&_0x447af0['IRuLP'](_0x4f6d2f[_0x53eef6][_0x48db11(0x52d)][_0x48db11(0x3d4)+'Index'],_0x1f9d5))_0x25f3b4++;}return _0x25f3b4;}else _0x2eed1f[_0x48db11(0x4fe)+'ngs']['push'](_0x447af0[_0x48db11(0x1c3)](_0x447af0[_0x48db11(0x4a4)](_0x447af0[_0x48db11(0x22a)]+_0x2eed1f['hooks'+_0x48db11(0x233)+_0x48db11(0x44c)]+_0x447af0['TIgzM']+_0x2eed1f['hooks'+'Total'],'\x20hook'+'(s)\x20t'+_0x48db11(0x43d)+_0x48db11(0x5ab)+_0x48db11(0x466)+'\x20but\x20'+_0x48db11(0x5db)+_0x48db11(0x509)+_0x48db11(0x3a7)+_0x48db11(0x491)+_0x48db11(0x5ad)+_0x48db11(0x5dc)),_0x48db11(0x2f5)+_0x48db11(0x35a)+_0x48db11(0x2fb)+_0x48db11(0x4fc)+'->\x20vo'+_0x48db11(0x4f8)+_0x48db11(0x3fa)+_0x48db11(0x4a2)+'ch\x20th'+_0x48db11(0x44e)+_0x48db11(0x50e)));}}return _0x447af0[_0x48db11(0x33f)](_0x2eed1f['hooks'+_0x48db11(0x57b)+'ed'],-0xfd9+-0x23bb*-0x1+0x5*-0x3fa)&&!_0x2eed1f[_0x48db11(0x494)+'nces'][_0x48db11(0x1fb)+_0x48db11(0x414)+'ler']&&(_0x447af0[_0x48db11(0x5e7)]!==_0x447af0['vKKuB']?_0xfc34b7=_0x2a59b8[_0x48db11(0x4f9)](_0x2a59b8[_0x48db11(0x48f)]+_0x105f52['hookF'+'irePr'+_0x48db11(0x578)][_0x48db11(0x387)]+(_0x48db11(0x5d1)+_0x48db11(0x2e6)+'igina'+_0x48db11(0x1bf)+'=')+_0x4c6bb1[_0x48db11(0x57c)+'irePr'+_0x48db11(0x578)][_0x48db11(0x4ec)+_0x48db11(0x335)+'nc']+(_0x48db11(0x452)+'game\x20'+_0x48db11(0x244)+_0x48db11(0x29c))+_0x454469[_0x48db11(0x57c)+'irePr'+_0x48db11(0x578)][_0x48db11(0x244)+'veGam'+_0x48db11(0x54a)+'re'],_0x2a59b8[_0x48db11(0x2bf)])+(_0x2a65c3[_0x48db11(0x57c)+_0x48db11(0x358)+_0x48db11(0x578)][_0x48db11(0x4bf)+_0x48db11(0x463)+_0x48db11(0x40a)+'e']||'none')+_0x2a59b8[_0x48db11(0x426)]:_0x2eed1f[_0x48db11(0x4fe)+_0x48db11(0x474)][_0x48db11(0x380)]('Hooks'+'\x20are\x20'+'appli'+_0x48db11(0x5b2)+_0x48db11(0x20c)+_0x48db11(0x1fb)+_0x48db11(0x414)+_0x48db11(0x3cd)+_0x48db11(0x1a4)+_0x48db11(0x34f)+_0x48db11(0x4c8)+(_0x48db11(0x37f)+_0x48db11(0x2f9)+'\x20are\x20'+_0x48db11(0x459)+_0x48db11(0x2fe)+'ound,'+_0x48db11(0x353)+'he\x20ho'+'ok\x20is'+'\x20on\x20t'+_0x48db11(0x1b7)+_0x48db11(0x259)+'verlo'+_0x48db11(0x221)))),_0x2eed1f['insta'+'ncesR'+'eplac'+'ed']['lengt'+'h']&&_0x2eed1f[_0x48db11(0x4fe)+_0x48db11(0x474)][_0x48db11(0x380)](_0x447af0[_0x48db11(0x5e0)]+_0x2eed1f[_0x48db11(0x494)+_0x48db11(0x2de)+'eplac'+'ed'][_0x48db11(0x44f)](',\x20')),_0x2eed1f;}else _0x43bff9['close']();}function _0x389ba8(_0x525b2){var _0x2201ba=_0xde41ba,_0x425d9a={'CMiUy':function(_0x596d61,_0x114832){var _0x2c25c6=_0x2c42;return _0x447af0[_0x2c25c6(0x3d7)](_0x596d61,_0x114832);},'BqSpA':'+0x'};if(_0x447af0[_0x2201ba(0x4ce)](_0x2201ba(0x518),'OPYyW')){var _0x281e94={};for(var _0x57400a in _0x412971){var _0x403e8d=_0x3fa2ed[_0x57400a];for(var _0xe4d8d=0x4*-0x3c5+-0x11d0+0x20e4;_0xe4d8d<_0x403e8d['lengt'+'h'];_0xe4d8d++){_0x281e94[_0x425d9a['CMiUy'](_0x57400a+_0x425d9a[_0x2201ba(0x42c)],_0x403e8d[_0xe4d8d]['o']['toStr'+_0x2201ba(0x3bc)](0x220e+-0xfe*-0x1f+0x10*-0x40c))]=_0x403e8d[_0xe4d8d]['v'];}}return _0x281e94;}else console['log'](_0x447af0[_0x2201ba(0x5ca)],_0x447af0['nNnox'](_0x2201ba(0x43f)+':'+_0x14f559,_0x2201ba(0x513)+_0x2201ba(0x340)+'ht:70'+'0'),_0x525b2),console['log'](_0x208cf1+'\x0a'+JSON['strin'+'gify'](_0x525b2,null,0x96a*0x2+0x1*0x1b01+-0x2dd4)+'\x0a'+_0x5826c3),_0x30274c(_0x447af0['FLFfr'],{'report':_0x525b2});}function _0x4fcdf7(){var _0x51f27d=_0xde41ba;try{return _0x5a6a00();}catch(_0xb2220f){return{'version':_0xff4f27,'when':new Date()['toISO'+_0x51f27d(0x421)+'g'](),'elapsedMs':_0x447af0['zJppr'](Date[_0x51f27d(0x2a1)](),_0x3a0088),'host':_0x2c4bda,'uwmk':!!(window['Unity'+_0x51f27d(0x2ce)+_0x51f27d(0x326)]&&window[_0x51f27d(0x2b4)+'WebMo'+'dkit'][_0x51f27d(0x2c9)+'me']),'il2CppContext':![],'arm':_0x445b94,'hooksTotal':_0x137072[_0x51f27d(0x2c2)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':String(_0xb2220f&&_0xb2220f['messa'+'ge']||_0xb2220f)};}}function _0xd548ee(){var _0x38e354=_0xde41ba,_0x5bdf19={'VHAvf':'VvcZI','LfEMt':_0x38e354(0x341),'Mtswp':function(_0x1482fb,_0x454ac7){var _0x2413eb=_0x38e354;return _0x447af0[_0x2413eb(0x2e4)](_0x1482fb,_0x454ac7);},'lsClQ':function(_0x3dfff1){return _0x3dfff1();},'LEVlN':function(_0x1fc318,_0x4ecce3,_0x6f2fe1){return _0x1fc318(_0x4ecce3,_0x6f2fe1);},'iGcmS':function(_0x164ca6,_0x19f978,_0x49063b){return _0x164ca6(_0x19f978,_0x49063b);}},_0x4737dd=0x36e*-0x3+-0xf81+-0x1*-0x19cb;_0x447af0['NYzzV'](_0x389ba8,_0x4fcdf7()),function _0x1f04a9(){var _0xf2897d=_0x38e354;if(!_0x137072[_0xf2897d(0x2c2)+'h'])try{_0x5bdf19['VHAvf']===_0x5bdf19[_0xf2897d(0x1f3)]?_0x426eb7['clipb'+_0xf2897d(0x407)]['write'+_0xf2897d(0x367)](_0x2736d0)[_0xf2897d(0x1a6)](_0x5bc297,function(){_0x5ac65e();}):_0x5253a0();}catch(_0x225559){}_0x4737dd++,_0x5bdf19[_0xf2897d(0x465)](_0x389ba8,_0x5bdf19[_0xf2897d(0x443)](_0x4fcdf7));if(!_0x137072['lengt'+'h']&&_0x4737dd<-0x1*0x1b0a+-0x18f7*0x1+-0x1*-0x352d)setTimeout(_0x1f04a9,-0x2*0x12b5+-0x1d65+0x4a9f*0x1);else{if(!Object['keys'](_0x42d4a0)['lengt'+'h']&&_0x4737dd<-0xaa*-0x2c+-0x1*-0x266c+0x4278*-0x1)_0x5bdf19['LEVlN'](setTimeout,_0x1f04a9,0x14b9+-0xcf1*-0x1+0x89e*-0x3);else _0x5bdf19['iGcmS'](setTimeout,_0x1f04a9,-0x118d+0x73*-0x1+-0x16b*-0x10);}}();}if(document['body'])_0xd548ee();else document['addEv'+'entLi'+_0xde41ba(0x281)+'r'](_0x447af0['xuQbQ'],_0xd548ee,{'once':!![]});})()));function _0x2c42(_0x157387,_0x285f6f){_0x157387=_0x157387-(-0x4*0x785+0x7fa+0x17b1);var _0x2484f5=_0x3161();var _0x1e4947=_0x2484f5[_0x157387];if(_0x2c42['oIyUQu']===undefined){var _0x17a8da=function(_0x4b7407){var _0x3ea188='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x4ab705='',_0x1b43e5='';for(var _0x375ff7=0x1416+-0x15a4+0x18e,_0x164c1e,_0x2fb995,_0x257379=-0x8ae+-0x1*0x1e54+0x2702;_0x2fb995=_0x4b7407['charAt'](_0x257379++);~_0x2fb995&&(_0x164c1e=_0x375ff7%(0x1f6f+-0x17a4+-0x7c7)?_0x164c1e*(0x1d15+0xd*-0x2b3+0xb2*0x9)+_0x2fb995:_0x2fb995,_0x375ff7++%(0x829+0xe2*0x11+0x1727*-0x1))?_0x4ab705+=String['fromCharCode'](0x1bc4+-0x6b6*0x1+-0x41*0x4f&_0x164c1e>>(-(0x817*-0x1+-0x1*0x14f0+0x1d09)*_0x375ff7&-0xf*0x1e5+-0x1*-0x1e3d+0x14*-0x17)):0xc*-0x1e1+0x19*-0x8b+-0x241f*-0x1){_0x2fb995=_0x3ea188['indexOf'](_0x2fb995);}for(var _0x4b3a63=-0xf*0x221+0x1f*0x11d+0x5*-0x84,_0x381ab1=_0x4ab705['length'];_0x4b3a63<_0x381ab1;_0x4b3a63++){_0x1b43e5+='%'+('00'+_0x4ab705['charCodeAt'](_0x4b3a63)['toString'](-0x1*-0x1118+-0x2e4*-0x4+-0x1c98))['slice'](-(0x52*-0x62+-0x15*-0x103+0xa27));}return decodeURIComponent(_0x1b43e5);};_0x2c42['iCUlSs']=_0x17a8da,_0x2c42['YVfMnV']={},_0x2c42['oIyUQu']=!![];}var _0x336ab0=_0x2484f5[0xf83+-0x2*-0xf1c+-0x2dbb],_0x46dac0=_0x157387+_0x336ab0,_0x963cdd=_0x2c42['YVfMnV'][_0x46dac0];return!_0x963cdd?(_0x1e4947=_0x2c42['iCUlSs'](_0x1e4947),_0x2c42['YVfMnV'][_0x46dac0]=_0x1e4947):_0x1e4947=_0x963cdd,_0x1e4947;}function _0x3161(){var _0x1436cc=['DxbKyxq','rvf3zfu','yMXLig4','ifnxlvC','BMDZ','Aw4Onti','BwuGAw4','BNrPBwu','BIbYzwW','q2zPvM8','DJiTy3m','mhb4idu','zwXVywq','igzHA2u','rLLqCLi','y3vYC28','Bwf4lwG','txnAr3a','lJmPo2q','CxvLCNK','mNb4o3O','u3HmAeO','sevbufu','psjZDZi','zwDPC3q','qKvhsu4','AgfUzwq','CY1VCMK','CMfTzsa','q1vWChq','zhvSzq','CfPXEve','y2vK','AguGC2K','z2LMEq','BMrVDY4','Aw5ZDge','AxPTC2W','pgiGC3q','EhjVuNi','rNP6q2C','wLHjyue','Chr1CMu','yw1Ligy','DMvYC2K','CM9iwhm','AMvJDhm','mtjWEc8','z2v0rwW','mcbVzIa','DcbTyxq','B2XPzca','wfDIq0S','yw1LlGO','CMDIysG','nJTMB24','DdmY','BM9Yzwq','DhLWzq','Aw9UoMy','igTPBMq','BgLKihi','B0rYAeO','yvDLweC','qxnZzw0','AtmY','CMvHBa','ve96DxK','lGOkswy','pt09','igDHBwu','BxrPyue','DwvxCMe','zxHPC3q','mJaWnJGZogfHC2vIvG','zwz0oMe','tM8GCMu','Ag90icG','DNmGC24','z2fTzvm','zxjHDgu','z2v0sw4','u25HChm','zwfJAge','D2fTEg0','C0ndDNq','zvbSDwC','AxmGBM8','zxqUia','BMCGyxq','C1rjD3C','lL9Nyw0','Bwf4','yw55ihC','r1nlsgC','lxyYE2e','DhLWzum','lwjVDhq','u2HiAhO','D0zkwvK','CgvKigi','Aw5Qzwm','pgj1Dhq','ieeGAg8','mcbMAwu','zxiTCMe','BfLUs2O','Ag90CYa','BhzLr2e','mtu0ndi5nK9oAfDbAG','CNqGEwu','C2LUz2W','yxjT','DcbIzwu','uKvNzhy','DgvK','Dxm6n3a','BMCGlYa','mI4WlJC','BYb3zsa','lc40ktS','sKHHAvu','C2HHzg8','BNrLEhq','B3jPz2K','DxjHimk3','Dte2','CNnJCMK','CMvSyxK','uKfqueu','BMD0AcW','Cg9ZAxq','vKXYtKW','zNPirwi','v2vHCg8','B2TZihi','AwqGzg8','t1zHwLa','AwrLBNq','BNrezwy','zM8Qksa','DgPbyK0','D2fYBMK','z2uUrgu','zxj0Eq','zwrnCW','yxjN','DfbRqMu','B3vUzdO','z2v0rMW','DgvYo2y','Ag90','icaZlIa','zwqGBM8','ztOXmxa','nsWXndm','Aw50iIa','y2fSlMq','AwXKlG','o2zSzxG','C2v0ica','lwL0zw0','nhWXFda','o2zVBNq','A3mUBgu','BM8Gseu','wfjrwuG','zYbIBgK','t1bzEvC','yM9Yzgu','B3vUDa','icaGDMe','DhfXBMm','yxv0BZS','ys1ZDY0','CMvKige','ALzKt0q','igrPzca','y0ziENK','zM9UDdO','icaGy28','zw5HyMW','uIbbq1q','BwuUx2C','sxnxCue','z2XVyMe','zxG7z2e','r0TpD1G','y2XPCgi','Ag9VAW','sYbZy3i','zMLSDgu','ywz0zxi','yMfYzsa','BwuUy3i','nYWUmZu','CNvUCYa','ys5ZA2K','DwnrDNO','EMPkA2q','Cg9ZDe0','C1LUB04','EhLpz1a','mhb4o2y','ysbNyw0','u2nPDM8','lJe4ktS','Dde2','z2LUlwW','BI5OB28','yxmGBM8','icaO','ihjLywm','igzVCIa','zgL2','wvLxvhO','EvnjseS','zMLYzsa','zuf0rMK','Esbku08','mhW0FdC','BgvMDdO','B3qGD2K','sMLzzuW','DgvZDa','zwXtD0K','z3jVDw4','yxjTAw4','CgjrweG','zwn0zwq','B2f0mZi','CMvWB3i','C2nYAxa','D2fSA2K','vKP3zLC','zYbMB3i','B3j0lGO','ignVCgK','uezxv0S','zw4Gyw4','Dgf5CYa','yMX5lum','quTkEwm','ihDOAwm','ywrKAw4','BwfYz2K','Aw5Lza','D2LUzg8','CgvJDhm','ihnPBMm','DxrVoYi','BMTtDhy','rLz1vM4','vwrXA1O','zxKGAxm','ChrLza','mhb4ic0','ifnRAwW','vxbKyxq','EwvZ','psjJB2W','yxrHihi','Au5YC0K','zYbZDxm','B29M','ihbHz2u','zwfKEsa','qxbWBgK','Ag9VA0y','icaGia','lwzPCNm','DxjHtwu','qxzhDM8','Fdv8mtq','Aw1L','nvDSqLDRBG','Cg9PBNq','v1bXEK8','Dw5Kzwy','lde3nYW','ywWGBM8','zxHWB3i','ihrOAxm','DMfS','Axr5','AwqGCMC','AxmGBwK','oxb4ide','uw5ot0W','C291CMm','Ahq6nZa','B206mxa','zgLZCgW','ywnRz3i','BMnL','ksWGC28','rxHWB3i','D2f0y2G','rxPQA1G','vwLkDwi','BIbuyw0','zenOAwW','zwXHChm','yxvSDa','zNHuAue','qvf3qvi','tgXmvha','Bg9YoIm','icHZB3u','Aw5PDa','idaGyxu','r2fTzsG','AwDPBMe','odeWotrYqvvcDKq','zJmY','ywjSzsa','DgvYzwq','z25HDhu','4OcuigzYyq','vvDnsYa','zcb3yxm','Esb0Exa','zwqGyNu','igfWCgW','ugvKr2y','i2jKytK','CgfKrw4','ihbYB3y','y3qOCYK','CMfTzs4','DwHwqui','oJC4DMG','Bg93oMG','ChqGsvm','qvfMsee','Dgnnyxm','ChnIAMm','ChjLDMu','A0DPsvG','Aw1Lsxm','AgLKzgu','yKDzrMm','zMfRzq','BwuOkq','D01UAKm','zfHgsNe','qvfOyMi','ywLSzwq','CMvKia','A05OwK0','tw9KDwW','DgfNtwe','B3jKzxi','BxmGD2K','B2jM','zhrsC1u','yKHsyuO','DMvhyw0','v0Lzq00','svzSBg0','ChrY','AguGB2W','BwfYA3m','yxbWBgK','CMuG','zuLLy0e','ihnVigu','CMvHzca','DejezKq','zMXbv3G','BM9Uzq','y2vKigi','ihbVC3q','AwzLig8','EI51C2u','DKTlDui','C3qGysa','Bgv4oJa','CZPJzw4','DgHLigC','jwnBC2e','ywLUAw4','u2fRDxi','yMLUzgK','phbYzsa','vKuGDG','Bgu9iMq','zxHLy0m','v1r2t1a','BMv2zxi','zsbUB3q','ys1ZDW','yxmGzMK','u3DIsLe','DgHLBG','zevNBuS','Ew5eDgu','BgX3yxi','D2rcCLa','BLHKzMq','CgjMvgq','igLKpsi','D192mG','mtn8mW','DxjHx3m','zw50igK','y0LUChu','BYb0Agu','yxbWBhK','lNjLC28','t1HoBhG','AguGD3i','zunbtvG','zgf0yxm','nty3mtC3qwXfAg9I','iefdveK','wxrtDha','uMvNAxm','zvbVtLa','Bez1BMm','DgHLigW','yw9ouhm','Aw50BYa','DMPPC3u','Dw5PDhK','rffby3G','CMvIDwK','EdTWywq','x2DHBwu','BgW6Aw4','DwXODem','zcdcTYa','y2uSihm','BMCGB24','s2Xeve0','Fdj8mta','Bw9YEvq','B1DvwfO','Bgu9iMm','Fdr8mG','oJyYDMG','zg54BLi','y3nZvgu','zxbSywm','CJPWB2K','AgvHCei','EhbVCNq','DtmY','AxHLzdS','tg5YAgi','C3rHBMm','sgH6sKe','C2XPy2u','ihbHDgm','C2TPBMC','DxjH','CgfYzw4','zgf0zsa','BIb0Agu','swDiBM4','vxfAzM8','zgvMAw4','s1vsqs0','vMzAEvi','DuPStxq','vgHLigG','icaYlIa','Aw9U','D3jHCha','ohb4ide','B2XPzM8','tgzftxq','EtPMBgu','veX3v2K','4Psa4Psaia','ANHVsgi','sw5ZDge','zMzZzxq','D2D4CNu','rLbty28','ifrOzsa','BNq4','vvDnsY4','BwuGBM8','AhjLzG','Dw1msgC','C28GDgG','BwvUDc0','sgrNq0u','ihjLCg8','zw50tgK','q2HQu1a','wKT2zve','yvvSsKm','yK9ZwhG','vfzJvvC','DcbUBYa','Dfv4tva','A2LUzYa','lK1Vzhu','svzficG','C3r5Bgu','CNvUBMK','BhbNv2G','phnWyw4','BJOWo3a','DhLxzwi','ihbHBMu','CMvUDca','DxrVo2i','BgvKoIa','icaGica','ywf1BMG','ztPWCMu','oJfWEca','yxK6zMW','mtqZlde','ywqU','yNvMzMu','mJa5mdu4ng1As1zwqW','u2vSzwm','Bg9N','BurbrKC','lYbZChi','BxvRDM8','AwfIvfu','wMfquKi','Bg9Hzhm','zYaVigO','ifnxlva','Acbxzwi','vgfTCgu','x19tquS','D2HLBIa','C2v0vwK','uMvZB2W','yNvPBgq','svPgr1O','u2HHCNa','B2fKzwq','re9nq28','vgHPCYa','zMfPBgu','ig5VDca','C25HChm','mNb4o2i','Axb0ige','C3nPBMC','y2fWDhu','i2zMyJm','mYWXnZC','sgvHCca','CMvZB2W','C2fNzq','CNvUDgK','zxnVBhy','CY5Tzw0','Bfr1ufi','ywrKrxy','BMuGAg8','B3v0','rgTmtuW','wKTPr0y','nZeXowH3v3nnCW','iJ5dB3a','Dc1ZAxO','zcbKAwe','tJWVyNu','qKviC1e','Dgv4Dem','zYbPBNq','AgLSzsa','BNrPBca','B25Nig8','psjWywq','C29SAwq','C0zztLK','DejXAwG','zsbPBNm','Aw5KB3C','igfYztO','igHPzd0','s3rHsxy','rhrTshG','BhqGC2K','ChD0EeW','Dg9Y','zxmGAxq','icaGDhK','Bwvhyw0','uun1tMC','vgDTy00','uLf0s1i','DgHLigm','CMvMAxG','yMX5lMK','A3DlCei','CgLUzYa','AxjZDca','Bwjey3C','BNqZmG','rMPhAxO','qu5eihq','AgLUDa','mtiWnJeWnZbtCfDQueC','n2vLzJu','CgvYBw8','BM8Gvxa','x3j1BNq','zwDmz2m','AgP4vMC','wwvpuKy','A2v5zg8','C3rLBMu','qvbvoca','C2v0sw4','zxH0','kZb4','ExrLCW','C2fRDxi','zhrOoM0','Dc5KBgW','BwvZC2e','CgfUpG','yLfxtMS','B3j5','CMvKDwm','nhb4idK','sNvmAKq','ks4G','r2fTzq','C3rYAw4','sMjxsw8','mda7D2K','iIbZDhK','CM91BMq','Dgv4Dge','vxjKwwS','BK1HBMe','uKj6D3O','DMvKpq','y29WEq','BMnLv3i','zsGPlMu','ignHChq','BM93','A095veW','igHLyxa','mJu1lde','zxnZywC','rKnMrfO','EKfozLG','AefYCee','BNn0yw4','EfPhuuq','y21K','CMuk','r0vTuey','tuSGq08','vvjbx1m','Dw5UAw4','ywn0Axy','A2LUza','yxbP','vw5PDhK','CMuGkhi','oJCWmdS','i3nHA3u','vMfSDwu','nda4qwrfvvbQ','Dg9tDhi','AwWYq3a','uNf5q0y','FdeXFdK','i3n3mI0','CvnSr1a','wMjiteC','yxrLigy','BgvUz3q','zw5NDgG','B25JBgK','EMDSwK4','ihvUyxy','ic0Gy2e','zsbYzxa','uNvUDgK','zsbYzw0','vgHLiha','BgrPBMC','sejvAvq','v2vItw8','zw50','DMfSDwu','ieaG','Awq9iNm','zw5QDMW','DerHDge','AxrOie0','zwn0Aw4','lsbvBMK','oJK5oxa','rNbZEhK','DgfN','mcaWige','BNqXnG','zsXdB24','BMnLC1i','Ate2','uMvHC28','lKHfqva','A2v5','ywrKCMu','sev6t2q','igjVDgG','DgGGB3i','s0DWquq','tw9KA2K','v3jHCha','zsb1C2u','z2LUigC','B250zw4','DNCSnJi','CMvTB3y','BcbKAxm','yKvPBNe','BMTLEsa','B25Jzsa','BwvTB3i','B2zMC2u','khrOAxm','D0jzvKq','vvv2BhO','zw1LBNq','CIb5B3u','Ag9ZDa','Ag9Ksw4','yNL0zuW','BI5FCNu','BIbHihi','veLNEK0','AgfZtw8','lIbeAxm','AxrPywW','zgf0zsG','DdTIB3i','CgXHEwu','u2fLwNi','igDSB2i','yNv0Dg8','B0n5txO','CKfHshy','C3rzq1a','igLZihi','vgHLigC','kdi1nsW','AwXLzcW','icaXlIa','yMfS','qLfkqLi','zYbTyxi','sfH4B0K','zKDnwKK','ihzPysa','DYbNBg8','lxjHzgK','zgL1CZO','C3rHCNq','C2v0','t0SGt1y','DgLUzYa','Dg9W','CMf3','ig9Uy2u','quWGqum','Bgu9iMi','yxnZtMe','BhvNAw4','BMnLCW','zgTPDa','CKPnA3O','zxzLCNK','mtrWEdS','yxr1CMu','u3LwCMW','z2v0vwK','CI5QCYa','AwvK','BM8GCMu','CMfJDgu','uffYtue','Fdn8mG','C3CYlxm','D09NuKi','BMfSrNu','AgvYAxq','svj1tfa','ig9Mia','B2f0nJq','CLvxt3a','txDhBvy','igvUzca','ywDLCG','qu5pveG','te5LD08','lxDLAwC','DxvjBgO','yNvPBhq','ELH4DeG','lxDYyxa','BwvHBNm','zwqGDgG','A2vLCa','wuf4qLu','khmPihq','CMeTC3C','zxmGB2y','C29SDMu','q2D0CxC','zuvSzw0','CMvKihK','zgLMzG','v096yMu','D3n3wK4','ig9Yihq','y3jLyxq','CxPoBum','ihn0yxK','v2zSs1a','AxjLuhi','zNHdB3e','lcbnzxq','DxjLzca','sMHosfe','zwrJy3e','AwnOlJW','qNLjza','ufKGve8','rejTA0i','CM9SBgu','ihn0EwW','DgLHDgu','pc9WCMu','zhvYAw4','vgv4Da','DgnOzxm','ic0+ia','DxLiCha','zdP0CMe','DhLSzt0','Bhfjz2q','EwXLpsi','A2v5pq','Bg9dAge','Aw5MBW','CvH0v3q','ywL0Aw4','CIb0Agu','rviGvvC','shHpDNe','oYi+tM8','ywrPDxm','ywLfq0i','AwzMzxi','khmPigq','q3DjBw4','B2jMrG','BLj1BNq','rwL0Agu','ChvZAa','zgf0yq','yw1PBMC','zg9JDw0','B3nWywm','AxmGD2G','C0LXEwe','yxrnCW','igLZig4','x19ZywS','CNjVCG','EgHAtxa','C29Syxm','igL0ige','zxjYB3i','vNDJuKS','tNLUANy','tKDvzxC','B2XVCJO','Axb0igK','z21hvgK','CYb3zxi','sfrnta','B24GDgG','igj1Dca','B2SGzMK','DxjHvge','imk3ia','y2XVC2u','ufLYCw8','rffkCui','iZDLzta','BIbPzNi','CKnVBg8','rxbAAuG','o2jVCMq','AZPICMu','B25Tzxm','Fdf8ohW','BMuUifq','DwXvtMe','D2HPDgu','CgX1z2K','Aw1Lr2e','BgLtyMy','D2fYBG','ihrOzsa','sw5KzxG','D01VtLy','BNnWyxi','zxG7zMW','rviGD2K','yxbWzw4','y3PnCLu','DZiTB3u','EvrHCa','tg9Hzgu','CgHHDM8','yw1L','n2e2ntG','Aw5N','BvPlrMK','C1nMq3C','Dc5wywW','zYbMywK','zIb0Agu','y0nOzwG','q29WAwu','CI5KBgW','AcbMAwu','EcaXmNa','D3PfAfK','zwqGysa','igL0igK','i2zMzdq','mtjWEdS','BNrPyxq','BgvYigG','zvn0CMu','yxr0zw0','tfrLENG','BLrZDuS','v0fswI0','CgfUzwW','DgfIBgu','tNnRuvO','ChG7yM8','C3DbDxm','Dw53tgu','BMnLigy','zxmGDgG','u2vWDwO','Cfj2Au8','CgvZia','DgHLig8','rLn4D2q','Cg9YDge','oInMn2u','D3jPDgu','BfDHCNO','igfYBwu','v19F','uxLOBKe','BM90ihi','qxHAuhC','icaHia','EdSIpNy','ywDLigG','u0TjteW','ihjNyMe','A0rRA1G','txrjBeW','AgfIBgu','ig9IAMu','BgfZDeu','zwy1o2i','z2fTzq','mxb4idy','yMzlr0O','DxLvs2u','C3bSAxq','rxPbrgy','zxmGBM8','B250lxC','n3b4o3a','lGOk','Dcb3yxm','ELDxrwm','yw1LihC','BcbHz2e','DgfODfq','C3bYAw4','ig90Agu','igLUC3q','zJy0','B2fYza','zgTPDc4','EhPYAKq','qxrgAxi','Ee5xDva','Ag9VA3m','lYbQDw0','nhb4ide','zwvKzwq','ENPxDeu','A0r1tfC','ChG7y3u','DxjPBMC','BNrYB2W','DY5vBMK','pc9KAxy','sNPNDuO','ywXPz24','teXNyue','igHVB2S','AxnWBge','yMeOmJu','B3i6i2y','CMvWBge','lxGIihm','CYbVCNa','u3rYAw4','AwnLihC','B3CU','DwryzNm','zcb0Agu','rhzwrfu','zYbxzwi','BNrLCJS','BwuGD2u','C3vYDMu','DhfLCKy','qNftCee','B2jMsq','zcbPCYa','BcWk','zt0Iy28','ihnRAwW','A2v5CW','AgvHza','A3vYyv0','BKfkr2C','zwLNAhq','CMnLoIa','B2jMqG','Dw1WAw4','ktTIB3i','zNvUy3q','C3mGmhG','BYbHihq','BgXLzca','y29SB3i','Aw5PDgu','EcbZB2W','yM9KEq','BhndBfe','pc9IpG','B29RCYa','wxrmBvu','zLfOvMu','yxfkEhq','x19hzw4','zgLMzMu','we5Yu0i','DMvK','ihDOAwW','AxmGyNu','AM9PBG','oJHWEdS','y1znAMe','igfUzca','iZaWmdS','vg90ywW','lMrSBa','AgvHCfu','vtGGAxm','vLfVv2i','BM90igK','zw50rwW','C28GAg8','CM9ZCY0','DdOG','BgrZlIa','DciGC3q','ndvirfPlvxm','rJKGDhC','igzYyw0','B3vYy2u','l3nWyw4','txrZD3a','Aw5KzxG','yw5KigG','D2zzAe8','Bwv0ywq','yxjLige','zgLUzZO','ndmSmtC','CMfUihK','AgvSBg8','qM90Aca'];_0x3161=function(){return _0x1436cc;};return _0x3161();}
