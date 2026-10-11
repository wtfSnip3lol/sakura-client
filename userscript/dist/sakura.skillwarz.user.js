// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.9.7
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

function _0x3153(){var _0x23190b=['ie1ciea','CMf3wwe','A1LcEMK','BguGy3G','BwuGBM8','zw1ZoMm','z2XVyMe','rfzfAM0','BMuGAg8','yxrnCW','yw4+','BKvPCum','mJeSmti','oJOTD2u','A2v5vxm','AevuAva','yMfZzq','ucbVBJW','Dg9ju08','Cuf3AhC','uu5LwMW','Cgz4qw4','y2fTia','yMftvKu','veDLCKe','ywi6Ag8','y2GUC3K','DxjPBMC','DMvKia','lwXPBMu','whLyvhK','z1v6wey','BNqTzMe','B2XVCJO','D3jPDgu','yvLtvLy','seT5v3i','igP1Bxa','ihbHBMu','AwXKlca','EeTWtwS','C3CYlxm','thDpsuq','Aw5Lza','D29YBgq','DgfYz2u','cKLUC2u','ysbNyw0','uxj2swy','AwqGzg8','ohb4o3a','BMqIihm','B3nL','sMXlu1i','rg9sDKq','qwjorfO','BuHcwum','B25Z','vMT5tg8','BgvUz3q','zxi7iJ4','ltqTnY4','EcbYz2i','ndzWEdS','thjXC2m','AeLMAuu','DxDTAW','yYGXmda','EgvKo3q','B2DVE2q','Ewf3','BhvLpsi','rLPZswW','uvDczuG','E3bVC2K','sw13Axi','CYbLBMu','zwz0oJe','twvRAfC','DuLABw4','mNb4idG','oJCWmdS','zJu7yM8','zsGP','Bw4TC3u','C3CYlwy','B2XZE2y','zwvKig8','AwrSuxy','uKjWrfu','DYbNBg8','svrNyvG','ugzprvK','BMuUifq','mhb4idu','y3qGzM8','t1PnENa','vvjbx1m','B2TLpsi','yNv0Dg8','ugf0Aa','Aw5KB3C','tLbdx0m','nxb4o2G','zNDvC04','yMXVy2S','CMvUDca','BNuTCM8','ALfVuwS','Dxm6mta','m3b4o3C','Ag1Hse8','iIbTAw4','zsbVyMO','EwXLpsi','CNnJCMK','DJiTDge','ywLSywi','AgvHCei','EeTIruu','Dg9Y','Berhsvu','BMn5svO','ChGGmZa','q3f3vvK','DNLrEvq','qvvwz1G','Bg9NBY0','ChrSENa','BMPRu0e','AfL2DuS','DMvKpq','C2v0sxq','D09VEeO','s2frte8','yM90Dg8','AwzMzxi','DgfU','zxrmzwy','BhLPExG','CI5QCYa','z2v0vwK','oJaGmca','r3fgr1O','Fdj8na','ugXHEwu','lwfWCgu','x2DHBwu','lxDLAwC','BMXLtvG','Bw1HAwm','zs1JB2W','ueDgwvO','Be9dDKC','AM9ezuG','Bg9TuNy','vhrkveW','nxW2FdC','yM9KEq','pgLUChu','vKzbsMO','BvfJzNa','BNLHDfq','AgfIBgu','sgvPz2G','zKzdC1e','zxaGDgG','lJKPo2i','yxjKlwG','Awz1AMK','BfjsDu0','mZGSmJq','yxbP','nsiGC3q','DhjPyNu','ihjLCg8','D1jmquG','nIWUotu','icaGica','BgLUzvq','zMXVyxq','ignSyxm','Cg5hwxm','yMDhv0G','AgfZtw8','DxDTAYa','iIbZDhi','oMzPEgu','nYWUmZu','z0jKzNK','ChGGlte','oJfWEca','psiXnJa','qM90','wgfIy1u','nZCSlJq','BNq7yM8','icaWEde','DxjJzq','sgfXqNa','DMLLDYa','CJPYz2i','AguGC2K','AeTsEwS','Dg9WoJe','ltiUns0','BJ8PoIa','DLrPDvC','DgHLigC','lwL0zw0','icaGia','q2XPCgi','yM90q28','lxnPEMu','mJrWEdS','Agzzr1m','AwDUlwm','y0TNC1m','zsb1C2u','zw1VCNK','iZjHmgy','DvDHrMi','m3WYFdq','zgL1CZO','yw5Jzsa','svD5rvK','zJDLzwy','DuXovve','qxzZz3u','sw9drwe','y2fWC3u','A2vKihu','lwfSAwC','DLr0sue','zsbPBNm','Ag9Ksw4','yLPoz3e','yw1PBhK','CM9Wlwy','sMHwzNi','CgXYBNq','vvDZvhq','DLvuBMu','CgfKzgK','ign5psi','Cc1SzW','Dw5Kzwy','B3b7zgK','B2TLoMm','Dgv4Dee','BMfTzq','B250zw4','vK9ptfy','C2STy2e','D05Ouwy','E2zSzxG','zsbLDMu','Fdv8n3W','ignOzwm','rKfXzMK','E2zVBNq','igj1Dca','EdTMBgu','C2nYAxa','lNjLC28','DgHLig8','BgLKzxi','D2L0y2G','yLvUrgq','DxvwyKi','r1DyBuS','yw5NBgu','ywnLlwK','zwn0Aw8','zwfKywi','BM8GBgK','rviGD2K','AwDODdO','lxjHzgK','BwLUkdu','CMfUzg8','AMvJDhm','v2vItw8','ztSTD2u','DdmY','B20GDgG','AgvPz2G','ktTJB2W','Dc1ZAxO','BMCGzM8','BxrdCMC','BwvTB3i','z2fTzsa','Axb0igK','pc9ZCge','ywLSzwq','lc45kq','tLHzv08','C3rYAw4','Dgv4Dem','zgf0zsa','zgf0yxm','BM9ZCge','BNnWyxi','C29SAwq','zMLYzsa','y29SCW','nJq2o3a','zw5LBxK','y1LhwMi','vwvMqNK','ihbVC3q','C2LU','qvPtBe4','AfnJCMK','Cg9Z','ihn0CM8','A0n3DvG','AwWYq3a','nsK7','yw5LBca','CMvKige','vLjvvxu','zuL0zw0','lJuGms4','BMTLEsa','mNb4o3a','osWGDhu','nhb4o3q','qu5pveG','EwvYqw4','psiXlJu','mhGXma','l2nHBNy','CgvJDhm','AxvVBwm','zxbSywm','zwn0rgO','o2DHCdO','vNvOr0u','C291CMm','t0nhyuC','zhvSzq','u0HMDw4','yMvNAw4','y0XdEgC','BwvXD2C','vtGGAxm','ntuSmtq','vgHLigC','z1n1r2G','ndmSmtC','BJ0ICM8','EMu6mta','B25Nig8','igvHC2u','wxbTA3u','mNb4o3O','vvDbt1q','yKTgsei','z2v0sw4','CfrhwLi','C1njB1K','o2zVBNq','tg9VAYa','Aw5N','vxbKyxq','C25HCa','v2Xotgu','psjZDZi','DxnLCI0','qM94zxm','rMHlBeu','B3jPz2K','vKfm','BNrZoM4','EI1PBMq','vNzozKK','z096EMW','CI1YDw4','oti4ngDQrfDLDW','oYi+','rxLdBva','DgvYE2W','mhGXod0','zhrOoJi','DMvK','Bg9Zzsa','CI1LDMu','cLSGif0','y2u7y28','ywrKCMu','AKX3zeS','BMv2zxi','C3rHCNq','Aw50E2q','zw5NDgG','ldi5lc4','ChG7y3u','uxDkr2S','EMHmthO','ic40nxm','qNfuqKy','Fdb8nhW','Bc5ZAg8','AdO5nNa','CNjVCG','C2nntvu','mhHKna','mxb4ihi','Dhj1zsi','zgvUDgK','y29TyMe','mJrWEa','CgvKigi','DgG6mJK','y2uTAxq','igzPCNm','uKvrtNu','EKDlzvG','vgnitLa','qxbWBgK','CMqTAgu','Esbku08','ywLpug8','o2nVBg8','BfHLrMG','z1HqBwO','z0HWr00','Aw9UoMW','B3DUkq','EwTKsuu','yu92reW','DMLLDW','BJWVyNu','Ag90ig4','lJa0ktS','nsWUmdu','yLPxD0q','mmkWlcbW','zxiTCMe','igLZihi','DfzoEvy','BMnLigy','Aw5KzxG','EvrHCa','idaGmJq','BgLmuu8','ufn3B1y','ignVCgK','D2fYBG','Bw4TCge','Aw50BYa','CMPcDMq','C28GDgG','ywnLlem','zxi6mxa','vuPstuW','DcaOC28','BM8Gzw4','yxjLBNq','AxjLuhi','y3qOCYK','D3foA2y','AgnND3u','DhbHC3m','tKLbwhK','BgvMDa','ywXSoMK','BwLLCYa','CMf3','ChbLCIa','svPZBgu','kdaSmcW','Ew93rKq','B2LzsuK','nIa2Bde','uMvNAxm','DMuGBwe','EtPIBg8','BMnLC1i','EdTHBgK','xtO6ywy','iey3ica','lNnRlwm','yMfY','zgf0ys0','BgXxyxi','z2zRrKm','AguGD3i','tKD6B2i','BLr5Cgu','surfige','ChG7Cge','tw9KDwW','uhfSyuO','CMfUy2u','uKfqueu','ic8G','kdiXlde','C2vSzwm','sujtuwK','qKzbyLK','yxnZtMe','otK7y3u','CMfTzs4','ChvZAa','zMy3ytK','Dc13zwK','zM9YBq','vgfTCgu','B3nPDgK','nduPoW','wfPVqwO','oJPHzNq','BLDyDMq','lxGIihm','DwvxCMe','AgvYAxq','mtjWEca','mNm7Cg8','zMLSDgu','qNnmBKC','kZb4mJK','ChG7zM8','ueXbwuu','yt0IC3q','odbWEdS','zgTPDa','wfLUuvm','q01c','DNmGC24','DgvYiJ4','vgHPCYa','y2XHC3m','BhKUieG','Ag9ZDg4','BMDZ','igL0igK','zM9UDa','iJiIihm','yxbWzwe','DxjLzca','Aw5Uzxi','AxvnDe4','BNrLEhq','uNHMEKy','zMfPBgu','zwfKE2q','CI10Ahu','ihDYAxq','DYW2mJa','mIiGC3q','CMvMzxi','tw91C2u','igfYBwK','yxa8l2i','AgfUzwq','lM1Ulwm','DgHPBMC','AuzzwLy','Bg9HDhm','thfduw0','C3LUyW','zMXVDZO','CKPTqNm','mtGGnIa','nNb4o2G','zK9Os1K','CIiGDhK','zMy8l2i','mJuZndrizxHztfi','lde3nYW','wMTUu3y','CdO4ChG','uur1Eve','icbVyMO','zxG7z2e','C2STC2W','r0jWCNq','CMvK','lJGYktS','sgrkB1u','lY0WlJu','mJKWChG','zw50o2i','lM1UlwW','tNHvvwi','Dde2','uujbvKy','BgvY','ihrOzsa','nZKSmtq','DfPdBwy','n3WXnxW','Dw1Uo2e','B2jMsq','ktT9','BfrvrNu','Ee5xExG','rvnqoIa','wwLWDeW','oJHWEdS','qNLjza','mhGZma','Bw4TBg8','vvDmCxa','DMLZAwi','Awr0AdO','DJiTy3m','suz1vvO','Bg9JywW','CMeTBwu','zMykrJG','ALr3Cvq','DMfVshK','uMvMDxm','B3bLBG','zKTxCMi','B2XLig4','ig9Mia','i2zMogy','C3fYDa','C25Us2O','sevbufu','zvzJC08','s2jWCwq','DgG6nNa','t1rnrgS','BNrxAw4','CgvZia','DhDPy2u','B206nNa','lwLUzgu','ys1ZDY0','mtjWEc8','z2PYtvC','lwvZCc0','yLrmDNC','pgj1Dhq','igLZig4','zwq6ia','zMTcu24','BM93','zxiIlci','rLbty28','vfLNwfi','BgW6Aw4','Ag9VA3m','zNjVDw4','zwrPyva','qxrgAxi','uwrNC24','sKrZuKm','DM1tCfa','lxbHBMu','A2v5q28','C2STBwq','wKLRBK0','BM8Gvxa','De9gC0u','CY1VCMK','zM92','EezpsxC','otK7Bwe','y0XJC00','DgvTCZO','DdO3mda','vKvsu0K','CNvUCYa','igXPDMu','lcbZDgu','B2XZoJO','AxqTC2m','u2vLBG','DvvMt2u','z24TAxq','tM90igq','v2PTB3i','uwXvuhe','xxTIywm','tw5fB2q','zxjLzca','Dgf0Dxm','kdi1nsW','B2fKzwq','oYi+rvm','zsDZig8','DgeTyt0','l3nWyw4','DgnO','zvn0CMu','nsWXmdC','zcb3yxm','Aw5N4OcM','CwvRDMW','uNLMre0','BNrZoMe','zxnZywC','CKzpt1e','yxr0zw0','y2vKigi','sNvkDMm','BIbZB20','uwnqy1a','B246y28','BhvLica','zgrgAwm','B24Gzge','AwjWDgO','rfLnwwO','u2nPDM8','C3rHBMm','nNWYFde','yNjIzwW','wu5sAKK','CIb5B3u','rMDAu0e','qLDhzxy','Dg9tDhi','yMfJA2C','u1PJsNm','v09Oq1G','zMzMoW','zgLMzG','CNnVCJO','igXPA2u','CNqGihq','vLjcAMC','BdPUB24','mI45lJC','B1bfA2C','ExH0sg0','Bwv0ywq','EdTIB3i','C0jTthO','A2vLCa','DdPUB24','t0ndvxG','BNrezwy','v21QDxK','C0HTsfK','idfWEca','DgrKC20','yKnoAhC','CxjeCu4','AxrPywW','ufHXvLK','weDeAw4','Evj2u3y','Bgu9iMm','icbVzMy','C3rLBMu','AxnHyMW','Dxr0B24','Axr0zwq','DhK6mdS','CfLZr1q','BJOG','qxDoEhm','ELPpCwm','z2jHkdi','BeHdBhu','DYGWida','CM13ugK','wgjNq0u','zvrPCM4','vKXmCuW','Exb3C0i','BwuUx2C','BgLKihi','qLblz2S','v0XJtem','ufjir24','iNrLEhq','mJGPo30','wg9VsgC','uffbA2m','B3j04OcM','ywiUywm','CKj3BfG','rhnnzK8','jwnBC2e','Aw5Ozxi','Ae1Usuq','Dc5wywW','CMvWB3i','D28GzMW','AY13B3i','wwzmu0y','zwLNAhq','u1Dnqui','EMfKz0S','tw9KA2K','iZHKn2e','Bg9VA3m','lxDPzhq','sgfAwLy','DhrVBtO','tNbIruq','tM8GCMu','DhLWzq','BwuUy3i','AxrSzsa','lNnRlxi','yw1LihC','DK5QyNe','ztT9','y2XPzw4','C2STBM8','zNbZ','v2PKu2C','vLPWBNe','DtmY','D2HVBgu','D2fYBMK','Fdz8nhW','zMvLDa','uvrvthq','A0vlsey','z0Hwz0m','psiXmIi','B250lwy','CgfKrw4','ktTIB3i','EM10s1u','psiXiIa','C2fUzsa','ChqGsvm','C2nXqKy','z2v0rMW','yw55ihC','wxDmtMu','zdP0CMe','BMfbCeq','sKfZCNu','mtjWEdS','nwmWidm','icaGDMe','BY1MAwW','tgPgCgi','CcbHBMq','mtu3lc4','C2STyNq','EIaTihC','CMvZB2W','mtTTAw4','mcbMAwu','BNrPyxq','ihbYB3y','qKvhsu4','zcbPCYa','s1vsqs0','CefkshK','tKzuyLy','khrOAxm','u3bYAw4','lNnRlwG','zxnVBhy','EdOYmtq','idaGmxa','swPTwwq','s2PTv2C','EwuU','Dw5Kic4','BM8Gz3i','C21uExa','oMLUAgu','Bwf4psi','rxLRB3i','DwKTBw8','CMf3ugK','mcu7','sw9cs08','B3jRu3K','y3nZvgu','C2STy3q','quvxBvu','weDAvuW','lc4WmJu','CMHMu3u','w2fYAwe','zxG7zMW','BIbjtLm','AgrmDeC','z3blBeO','mhG0ma','zxG7ywW','AgzxA0C','z2jTDhC','ExrLCW','v3fMz0S','quHWvMe','DuXotuS','yZfKo2m','4Psa4Psaia','ywnLo3C','pt09u0e','Dg9W','Fdf8mta','zg9JDw0','Fdj8mq','zxrZigm','CMvWBge','mNb4o20','B246B3a','t21oBwC','ywDLCG','AeXxtfu','mJCWog5uu2TJsq','BeHWvuC','zxG6mJe','DgG9iJe','zt0IyMe','CMHSA2e','AtmY','CKXPC3q','uNbbv08','B2SGEwu','lGOkswy','B2LUDgu','uwDdsLy','BKLRuwS','B2H1qwS','BNnPC3q','CMuG','tMD5sxq','zgLUzZO','sNrusfm','AwvYkc4','t3npAgi','tNvkCxC','q29Nz28','CgXurw4','zNjVBsa','BgW+','zwXVywq','C2TPBMC','B3CU','txndufO','ig9Uy2u','C3rYB24','yNL0zuW','AgfKB3C','yMfSu2O','BNrLCJS','CMvSyxK','yNvPBhq','mwzYksK','zwqGBM8','ywXSvMu','txztEhi','DhrVBJ4','tg1wCMy','BNq7y28','u3rYAw4','Cgu9iNi','Aw5Qzwm','DdPZDge','Afjbyue','ig1LBNu','y2fWDhu','zwqGlYa','rwTlq20','wMrzq1C','AgXUC0W','igjSB2m','EdTMB24','C2v0','BM8GCMu','w2rHDge','vw5PDhK','zgL2','mJiSmsW','vK1nCe0','AxzLDhu','iJ5tCgu','ihn0yxK','CeLoz1q','y29UDgu','BM5VDca','mIaXmK0','zsbYzw0','nNW0Fda','BgqGAxm','CKvqEwq','nIiGC3q','r0L4Cgu','txvUz1O','ihDOAwm','D2HPDgu','BKvrruW','AffqquK','q291BNq','zsXdB24','o2fSAwC','qMXoB0S','pgnHBNy','D3jHCha','BwLUv2K','ztT0CMe','lM1Ulw0','CJTNyxa','CNr5qvy','o2zSzxG','y29Z','CdO0ChG','zhmGB24','AxnWBge','Dte2','tvzhDuy','zhmGWRCG','z2H0oJe','DIiGC3q','zhnnsfG','AxmGD2G','mIWUocK','ywWGB24','BwvHBNm','imk3igzV','uwTqqMG','svnsEM4','WRaSig91','sNvTCca','BMCGyxq','AgvSBg8','BMnL','DgG6mJG','BxvZyuG','nNb4o3C','Aw1HCcW','Bg9YoIm','lIbozwu','EMTRyvu','idqGnc4','qvbvoca','uMfUz2u','yuPTzxy','CMeTzxm','rNztyvO','BwrmB3G','mdT9','zwf0zva','yMLUzgK','BNq6mte','zxmGBM8','rezyse0','ywrPDxm','AxmGyNu','mtyYntqXofHzuxnvrW','ChG7B3a','DgfYDdS','AwrLBNq','tK5kExa','yxbmrMy','rwTjCfO','Dg57ywW','u3bLzwq','zw50igK','zwXLy3q','A2DYB3u','r2fTzq','ig5VDca','DxPAsMW','BMfNzxi','CMvSyxq','zxKGAxm','rg5uC1u','yMTPDc0','mduPlda','CwHNzM8','AKj4vxu','o3DPzhq','o21PBI0','z3jHyG','v2fZqLe','tKfeB08','AguGBgK','BMCGB24','tevIv3i','ihLLDca','y0LUChu','zgvYlxi','yxbWzw4','rwL0Agu','vfr2BKy','DcbPDca','nxb4o30','mtqZlde','lKHfqva','yxrPB24','vMryrg0','EIdIGjqG','wLjIy1y','EhbVCNq','zxnWyxC','re1wzw8','lJuIihy','vgHLiha','Dw1IE2i','BhvNAw4','y0Pbvwi','ztOXms4','BwuUCMu','yZKIpNC','CJPWB2K','idaGyxu','mtmZmZjWzLb2sxe','ywjSzsa','sw5Zzxi','DgLVBJO','nhWZFdC','igvUzca','sNPLz1y','yxjLige','tg9VAW','C3LUy3m','AxmGBwK','B2XPzca','zuPeuw0','y29SB3i','Dgv6Dfe','vePpCLi','4OcuigzYyq','vefczgC','ihjNyMe','zgf0yq','CJOJzJC','DLfHD2K','Bg9ZzxS','tK9ewMu','zciVpG','lJq1ktS','zgvYoJa','rLvPENG','ihnVBgK','AwqTDgu','B25LoW','qvjJtNu','z3vTsLa','vKvsDe4','u2fbwfm','y3jLyxq','icaZlIa','zcbHCYa','mYWXnZC','yw5ZzM8','tMLYDgO','ntbWEcW','yxbWBhK','C2vYDcK','oJm0ChG','CMvNAxm','ndC0odm','ywjLBhS','Cg9Zqxq','DuzKtgO','ywj7zgK','C3r5Bgu','lNnRlxa','Bw4TDge','qu5eihq','BMnLCW','qvjKsNC','oMf1Dg8','mNWXFda','yNL0zxm','lwzHBwK','yM94lxm','mxb4o2m','uKv3ENO','wfbly0u','oI40o30','terYAva','zsbWCMu','uwH5DM4','DLDZtLG','Aw5PDgu','v2fSAYa','mtbWEca','Fdb8n3W','C25HChm','ANbLCLK','lxDYyxa','Awv3','Axr5oJe','tvzUyxm','BYbHihq','Ahq6mJq','ue95vuG','BgvYige','zgLZCgW','Dcb3yxm','nsWXndm','EdTIywm','zvjLy3q','z2vYlIa','C2STBwi','zKLhD0i','Fdr8nNW','D3D5rLm','rxrkr2q','zuXIwfG','ntuSlJi','DxrVo2y','ys1ZDW','shDgD0i','s0r0ywS','CY5Tzw0','q3LvAKm','Bwj7lxC','yxbWzxi','mtaIihi','tgjxsg4','C2LUz2W','zM9UDdO','zw50rwW','zg93','u3jIDMm','zMrczuW','zLnJvwC','B2XSzxi','y1LiteG','CfDrz2O','BgrRDgW','BMu7Cg8','CgLUzYa','oJiXndC','yMXHvvy','B24+','ENPtB0S','mtfWEdS','zwqGDgG','mtrWEdS','uujgtwi','y2SIpJW','vMfSDwu','B2SGzMK','tJWVyNu','DerHDge','DMfSDwu','DMLLDZO','B2jQzwm','zg93oMK','DxbKyxq','psjZywS','nYWUnsK','DgvK','nZCSlJu','nJiWChG','mJy1wxfJwevm','CxHqvLK','phnWyw4','iNnWiIa','AgLKzgu','zhPuB3a','zM8Qksa','C2L6zq','sgvHBhq','v09zCgS','tg9Hzgu','uMzSvhG','BMnkExm','wfPkvvC','DY4Guhi','zMLSBa','ze51vgK','zgfUBee','CMvTB3y','Cg55A3y','ywn0Axy','ANztDLG','C3vYDMu','B3i6iZG','ks4G','CIb0Agu','v2LKDgG','BI5FCNu','y2XPCgi','DMfS','y2XPy2S','mJa2odG3ohbtDvrVtG','tLLMB2e','mdCSmtu','oJeYChG','Aw5cyw4','zxHPC3q','BMXzCgm','zcbYz2i','mhb4ic0','BeDTBvm','n3W1FdK','C1rzu1C','BgvYkW','DMuGB2i','ihbHz2u','Dw1WAw4','B2fYza','igzHA2u','lwHPBNq','BNrLBNq','ncK7yM8','B25ZB2W','BML0Awe','rwHewxK','B3qGysa','oM9Wywm','BMC6nha','idqTnc4','qu9su1i','DhLSzq','zMLSBd0','lxrVz2C','lJe4ktS','ALbYqxe','BM9Uzq','r0L4wNy','Awq7CgW','yMfUzc4','rhHbvNK','lJi4','Axy+','B2DVlxm','ENvgt2C','DxrVo2i','rM9YzgO','re9nq28','vgDuAe4','mJq2ldi','ldiZocW','yw5KigG','Chnxzgi','y29UDhi','CZPUB24','BcXTAw4','BIbuyw0','Chr1CMu','ytK5o20','wvf1BLu','zw5LBwK','EdTOzwK','vurprMS','ns00idC','zgzetuK','psjIywm','EfPxyvK','t2XsDMu','y3rPB24','sw5KzxG','zvvUzLe','iZe1mgm','AuzUAMe','q2HPBgq','lwnHCMq','Bcb1Cgq','ihbHC3m','D25YvfG','C2STC3C','tKfuqKm','yNjjCMK','ztOXm3a','CMvMDxm','ywrPzw4','BMHyyuK','BNrPBca','tgLZDa','C3bHy2u','u21OzLC','B3bHy2K','y2X1C3q','EcbZB2W','wxfyBvy','Fdz8nxW','vuTLBMm','AxvZoJu','DxqGEw8','C2STDMe','zxnW','B25LoYi','yxG9iJu','zZO2ChG','zJmY','yxqG','r2Lcquu','zhnbv0q','Ag9VA0y','nYK7y3u','Dw5hwgy','ywX7zM8','r1rXtxq','mNb4o2i','De5JsuW','zwnPCKm','rgDAteu','B3rVBK4','rhLMufC','CNqGEwu','qLbxwLK','AxvZoJi','tgLntva','qLDdtu4','DxjHvge','AgLZig0','ys1LC3a','yMX5lum','zdTWBge','DgG6mZq','C3bSyxK','v19F','ywWGBM8','B1LYuwm','Bgv4oJe','sfveigq','igzYyw0','BI1PDgu','BNbUqvK','lde0mYW','B3zLCMy','ywPps2G','sYbZy3i','CJOXChG','C2vSzwe','uvPbB0K','Fdb8mq','zgDqs0m','zhnLs28','iNnUyxa','u3nLy2q','vuLWuuS','ywL0Aw4','o2jHy2S','DNHYs0y','igLUC3q','A2v5CW','Bw4TDg8','Dg9gAxG','zw51','BM8Gtw8','vNrxvwy','CML0Dgu','tK1LDxu','Bhr3A0q','CMv0Dxi','Ag90','BNrLCI0','uNz4DwG','khmPihq','if0GywW','zMXLEa','zwn0Aw4','DdOXmha','oJeXChG','C2XItLu','A2LUzYa','mNb4icm','ntTWB2K','Aw50lxC','yNHxvg0','EY13zwi','r3nAtMW','sK5HB3O','sfrnta','lc40ktS','A1n5BMm','oY13zwi','uejwALa','zxr3B3i','sNzLrfq','uufLr20','EwDZAxa','zuXUsgq','BLHxy24','mNWXFdu','DgnOige','De5MqK0','t2L5Evm','ocWYndi','Fdj8n3W','A3TOzwK','rgLMzIa','Ec8XlJq','uuLOCwS','B3qGD2K','zsb3ywW','ignVBNm','Aw50iIa','DMjNt0m','yt0IyMe','nxm0idi','DgvHBq','vfLczfa','sfjjEKS','zw5Jzsa','C2v0vwK','z2H0oJC','B2r1Bgu','mxb4ihm','AgL0CW','pgrPDIa','ihvUyxy','DgGY','DgHLiha','kgXVyMi','zxzLBNq','zxi7Dxm','mhG3yW','zenOAwW','u3DiDey','4Ocuihr3BW','DgG6mdS','igL0ihm','o3DVCMq','yvbSyMe','Dw5PDhK','Bgv4lxm','nJTMB24','ysGYntu','BMD0AcW','rwDVA1q','zsbUB3q','yMfJA2q','idGWChG','iokaLcbUBW','DenyqKy','B3rYB2W','Bwvhyw0','ig9IAMu','lNnRlxy','vNrns3e','zuvSzw0','uev4Bva','vernx0C','tuzuEw4','yxv0BW','ywXSzwq','sgvQEuS','t2nrvLK','Bgv4lxC','mNW2Fda','ExLNA3a','AdO2mNa','DxnLtg8','i2zMzJa','BMrVDY4','CZ0NC2S','B2jMqG','uMzKA1O','mZaZmdqWnwfJwKrgva','zM9YBtO','DNfusvK','BgLUzvC','Aw4U','zsbNyw0','Eg1fsxu','uNLUEKG','BI13Awq','u3r2weu','C3nPBMC','yxr1CMu','zw50tgK','ldi1nsW','zwqGyNu','ufz4B2i','nsaWlti','v21lrvm','DhjHBNm','o21HCMC','mtbWEdS','zMDszg0','BM9Yzwq','igvUDhi','AwnVrhi','uw1VvLO','CKnVDw4','CM91BMq','z2LMEq','EwzrwLa','B3bLCNq','DY5vBMK','lM1Ulxm','ALznBvG','oIm4zdC','igHLyxa','DfDPzhq','CefVExG','BfDHCNO','u25OtNG','B2SGAxm','y2fUDMe','Bez1BMm','CZPJzw4','igrHDge','EwXIswe','mhGYma','CxvLCNK','Awr0AcK','CMTqBge','AxvYqwq','t1vdu0C','DML4thi','lxnWywm','ic8GrJy','rvzequG','B3nZihq','nZq4mJK','qMLUzgK','BNq6Aw4','z2v0q28','y3bSy1e','Bwf4lxC','runyCgm','icHZB3u','ieaG','ihnVigu','rxb4t2O','ntuSlJa','y29Kzq','yxncEM8','DZiTB3u','B2f0mZi','Cg9ZAxq','AwX0zxi','yxjNAw4','lwH1zhS','ChGVms4','BwuOkq','CNq7ywW','BgfIzwW','qvHIyvu','q29WAwu','CdOXmha','tMXjwLi','yNjLywS','BNmU','Cgj0zem','s0rytxO','B2yGDMK','m3W0Fda','zxH0lwe','ywX0','BgLNzhy','DgvYzwq','D3PrEhu','i2y3zwu','igfUzca','Bw91C2u','yMzlt3K','zt0Iy28','BJPJzw4','DgHLigm','sfzMwNy','uMvJDa','yvLNrgi','CKnVBNq','zxi7D2K','yxv0BZS','qLfor3C','vxPjuK8','ignHChq','CLrutMC','Aw9UoMy','zNHOCg8','mxW1','y2f0','Ag9VA1a','mhGXmum','ohb4ide','zYbIBgK','DMvhyw0','BLjYvuS','DMLLD0i','BgLNBG','DKnlz0i','lxnWzwu','AeTuzuK','tevvCwq','BNn0yw4','CMvMAxG','zNr1tKe','Bgu9iMq','zfjgEuW','CMfTzsa','tLL1Ee4','mtqWmfbSDgrgqW','B3bLBIa','rfHqwNe','DxHrELK','pc9ZBwe','rMnwC2K','B25VC3a','ys9vv00','yMr5vwq','ugHVDg8','x3j1BNq','DxjHDgu','oJa7EI0','icaXlIa','tefvCKK','q3DQsgC','A2LUza','qxnZzw0','ign1yMK','ztTZDhi','zgvYoJe','CvbJDM4','AxjZDca','Ce5Jz3G','DgfSE3a','idrWEca','tLPytLK','nsb1As0','vNjbBei','CMvKia','ihDOAwW','Dw5PDa','zgf0zsG','yMrHowm','rvnqig8','CI1Yywq','Bw4TAa','khmPigq','rJKGDhC','Ag90CYa','C2zVCM0','DMfYkc0','kdiYChG','yxa9iNi','yuzYB20','mca0ChG','kde1mcu','y29ku0S','renotey','zxHLy0m','CM1VBMS','nhb4idK','AM9PBG','te9h','BxmGD2K','wKT0Bhe','DgfNtwe','t2vtCg4','yMeOmJq','BgvJDdO','B2zMihq','Ew1WDwm','C1jND0W','ywn0','m3W4Fde','zvbSDwC','DhLWzum','ywnRz3i','sfzVrgy','z1vYrhy','BMCUcG','zwXHChm','yxjKlxi','AwXKlG','yK5vwLa','iZDLzta','lhrYyw4','Ewf3t2y','Bw9YEvq','BIbHihi','v3f1q2K','Dhm6yxu','yvzIyKW','yMeOmJu','B25Jzsa','CgXHEwu','AKTtq1K','AwzPzwq','x19ZywS','zxiTC2u','phnTywW','B2TZihi','yw1Ligy','B25PBNa','C3mGmhG','A2X2zhy','AxHLzdS','wKnkEgm','Dw50','EdPUB24','v3rIEgu','zxjZyc4','BwfYz2K','ls1W','ywTrz28','yuzLy2i','z3TMB24','CM4Gywi','Ds1JC3m','Bwfbwee','B3vYy2u','AgLSza','rK90DgS','BLfkBMm','nxW0','zxj0Eq','uMvSB2e','wwnyzfe','CeXqwem','EfL4DLq','tvrczhu','Aw1L','weHbDuC','Cgv0ywW','sgvHCa','AxmGBM8','tuDxtfG','CgfYzw4','CYb1BNi','mNb4idC','C2vYlxm','C28GAg8','AMjoDfO','n3b4o3a','ywXPz24','wgX3B1K','BhKGCg8','AxrSzxm','A21prvC','Aw9U','vMLRwuK','BNrYB2W','EhL6','AwDPBMe','DKrZzhO','zwjRAxq','wuvdu1O','oJyYDMG','C3rHDhu','ywjSzwq','v3nhzhq','BhDHCNO','wKLOwvi','ieeGAg8','zwDPC3q','ELbyy3i','yw5ZCge','v0fswI0','ihjLywm','ueTIvvO','ywnPDhK','Eca4ChG','zfv3DgO','ve1hsNm','lwe9iG','ChG7Agu','zw1LBNq','DgfIBgu','imk3ihrL','mtTJB2W','EwvZ','ChG7yMe','mduPo30','C1rNtuG','A2v5','wuXNu0G','BhvTBJS','zNvUy3q','uufHC1G','u2HNseO','oMzSzxG','zJWVyNu','Ec13Awq','vgv4Da','D3zpEgO','DgvZia','AMrSyvG','Cg9YDca','yM1Syw8','AwDUlxm','zw50zxi','l2j1Dhq','y3vYC28','ywLUAw4','Dg9YqwW','BM8GD2e','r1jyAwu','ug96r0i','C3nWrxG','igfYztO','FdeWFdC','BMn4Avy','BwuGD2u','qNvPBgq','BgfZDem','t0SGt1y','BfL6wxK','i2zMzdq','swPwqK0','svbquhe','iIbZDhK','B3rLlMu','r1HgyKW','C29SDMu','B25NpG','DcbUBYa','qvnUzg8','Bg9ZztO','BJPJB2W','igfYBwu','sez4q3K','qNbXqLi','DhK6lJq','zwqGEwu','BgfZDeu','pc9WCMu','icbMywm','CMrLCJO','zxCGy2e','qwjlD0O','yM90CW','Ewzlz1i','EMTgwu8','CMDIysG','Ag9iDve','ugvrBeO','vwXdAwq','BwvUDc0','zgrPBMC','zciGC3q','Dg91y2G','zxLL','z2v0q2W','lGOk','ifrOzsa','BguIihm','sw5ZDge','ksWGC28','Esb0Exa','EdTWywq','EK9kr04','B3r0B20','sw5bz04','v0LRD3m','D2vPz2G','igjVDhm','sNHwtgy','Dxm6mti','CMvKDwm','nNb4o2i','Fdn8ma','Ag9ZDa','vMv2rLC','DM9Pza','DgL2zxS','s1PHtfe','Dwj7zM8','zxnJ','tK9cvgS','BM9UztS','vvDnsY4','ig90Agu','zwz0ic4','Bgf5oM4','sg52CNi','q3Hlq0i','ufKGve8','BMDL','AMHrr2u','Dw1Uo2C','Cejtv0m','B3CGkey','BgvKoIa','C2L6ztO','y0rxreK','zw50','C2fNzq','AxbIB2e','owq7Fq','CgfUzwW','ihbHC3q','nIaXoci','BM90zq','BwvZC2e','BhTWB3m','qKDmuw4','DMvYzMW','Ee1eCxu','mcWUntu','zM9UDc0','ysbtA2K','yxjT','nIWYmZG','ys1Tzw4','DgfOt0i','BNq4','B24GAwq','ANvWsxK','igfYzsa','zdPYz2i','oNrYyw4','Dxm6nNa','B3nWywm','qNzbquG','BLzfyM4','C3qGysa','mNm7Fq','yM9Yzgu','owqPida','uMPrELG','AgvHBhq','C2nHBge','i2jKytK','uLb4u04','u25HChm','DgLHDgu','lcbnzxq','AhjMvKu','zdDHotK','DLDOCwO','ywLUE2y','C3LZDgu','lL9Nyw0','BMqU','DZOWidi','DxjJztO','Bgu7zMK','zMLSBfm','C3bLzwq','u2vLBK0','swXNqKS','oJeGmsa','mIWUnsK','BYb0Agu','B3j5','AgvHza','icbJyw0','pc9KAxy','idi0iJ4','Dgf5CYa','DezIvKO','EwjrBMC','Fdf8ohW','t2zMC2u','oxb4ide','lg1VBM8','vuvkqvG','CZOXmha','ywT2vu0','zhjVCc0','EffVCwC','ALjgwLq','tg9VA0a','DxjLzey','mdT0B3a','swHxqLy','Ahq6nZa','y2GGDgG','vM9vzNe','qLrUzeC','BgfZlg0','icaGy28','yxjJ','Bw4TC2K','EcaXmNa','otLWEdS','BNnVBge','qLLAAeO','nsWYntu','zNKTy28','yw1L','AenOyvu','AgnYELK','rKTrzMW','wejzEgC','CMDPBI0','AdO5mNa','y2HLy2S','nJaIigG','zM9Sza','ifvxtuS','zhbfDge','yKfswNK','C2HHzg8','A2v5qxq','C3CYlwG','vM1Vu1u','zxqUia','zLLVzuO','ig9Yihq','yw1LlGO','BgrPBMC','mIWYosW','rvnJrxK','nhW1Fde','oJrWEca','zY4G','ic0GDgG','ztPWCMu','veLMAwK','suT2sxi','DeDrrNC','CNvUBMK','ihbHDgm','zgvIDwC','zMLYC3q','Bxm6y2u','y2uSihm','ChG7','CMvUDdS','pgiGC3q','ie9o','DMvJmG','vg90ywW','lwnOzwm','BKPYEhm','DgnOzxm','BwzjCeK','Bgv4oJa','Ede4pq','zYbxzwi','zEkaPJWVCW','q0PgEfu','AwvKige','uwrTANq','EgXsBK8','AujVsgm','BcbHz2e','iMzVBgq','ywrKrxy','C3qY','mNb4o2G','DxjHlwu','r3jgrKq','lNnRlw4','kZb4','yMvS','yxjKlM8','iJ5ZywS','BMqGBM8','Dxm6oha','rJKU','BYb3zsa','Awq9iNm','uhPPA1a','zgTPDc4','r1DvELu','EwH0s0y','zuf0rMK','CgfYyw0','B1nyzu0','zxzLCNK','ihzPysa','D2LUzg8','imk3ia','yxK6zMW','Axr5ic4','mtC3lc4','Dxm6nta','zeTdqNC','CgvYBw8','i2zMnMi','yM94zxm','shL5vMu','oM5VBMu','ztOXnha','lNnRlw0','BgX3yxi','idzWEca','z3zzsgu','zefZrLy','EI51C2u','CM93CW','zJu7Fq','lxaSnta','lNnRlwi','A3vYyv0','lMrSBa','mNz3ldy','DMvYC2K','we1cA00','sM1suKu','CMvMCW','nsK7Dhi','qNjHy2S','A2vKpsi','v3jHCha','tfLjA20','oNbYzs0','Ewf3tvK','y2uGyM8','CxPyAgy','DZiTyM8','zcdcTYa','Acbxzwi','zMXLEdO','sg9VA3m','t0TQrK0','B3G9iJa','y2TNCM8','tunjv3G','vgHLigG','BM90ihi','DM5nCeC','E29Wywm','yxmGzMK','qLbXDuW','zxHWB3i','mJu1lde','BwvTyMu','igDSB2i','DxjHx3m','BePPs2e','Axb0ige','tuvqs1C','C2v0qxq','CgL0y2G','ChGGC28','veLwrq','EwXOAwq','ihrOAxm','nhb4ide','ihvUAxq','wgD5Cu0','Dgv4Dge','Ahj5vvC','B2jMrG','BMq7Fq','oJe7Dhi','ywDLigG','BcWk','Aw5ZDge','igj5igu','C3zNpG','yw1PBMC','ig9Uihq','ms41ihu','v2vHCg8','B206mxa','uuPKweq','wuPODeK','zejeyK4','n2vLzJu','t0TkvuC','Afz0AKG','rvj0zgq','B25JBgK','Cg9ZDe0','Axr5oI4','BMfSrNu','yxDyEM4','ktTWB2K','Bhz2zuO','DxjHtwu','AcbMAwu','Ee1hC1G','yxiTDgG','C2H1su0','sLnptIa','B3vUzci','ywqU','x19tquS','AvzVEuy','y2XLyxi','sgvHCca','Bw92zvq','icdcTYaG','zYbTyxi','ze16ruq','zYbZy3i','nZq4mZy','AwrLCG','Bg9Hzhm','yLrnC0y','ndHWEcK','ywT1CMe','BgLSsfK','vgXPChO','BwuGlsa','rxLL','Ee1nB2O','ze5LrNa','ChG7yM8','r29Hvwu','B3j0lGO','zwvMntS','zxfcufC','v254whq','z2v0sxq','Dxm6n3a','yNL0zu8','zNGIihq','B25TB3u','ic0Gy2e','thLZwva','s0vzzxy','z25et1y','ChG7Bwe','zunOAwW','vgvUsNm','zwn0zwq','z2vbtKe','BwfUywC','oc00lJu','B3vWig8','yMLgrKG','CM9SBgi','A1f5CMq','BwLU','mhG5oa','EsbMywK','tgLUyK0','B3i6i2y','vuz2tfi','CgX1z2K','DhKGAw4','igfJDgK','CMeTCgu','ALvHsMO','D2fSA2K','Aw1Lsxm','twz0Dui','B3vUzcW','y2fTzxi','o2jVCMq','iJ48l2q','C2STBge','yMfYzsa','ywrKAw4','u2fRDxi','AxrJAa','renLEhq','kdi0lde','B21Tyw4','r1LVENm','nsWUmdi','uMfKyxi','BgXLzca','vvroC3u','BgCIihm','CMDnwKq','mda7y3u','D2LKDgG','mZT9','yxiTz3i','ChjLDMu','zxmGB2y','A2v5vhK','vwjVBeS','oJrWEdS','ig1VDMu','mJTZDhi','yxm+','zcb0Agu','Bg93oMe','icaOCMu','EIaOsw4','BgLNBJO','DeHLAwC','zxi7zM8','yxrHBJi','z3jVDw4','D192mG','ztPUB24','qLPdrKO','BwuGAw4','AgL0zs0','vLfQu0K','C2v0ida','sMjNDNy','zhrOoJm','q0Poqw4','mcbVzIa','i3nHA3u','AguGCMe','C2fRDxi','C2nfCeK','D3jVBMC','oYi+u3a','zwy1o2i','zYbMB3i','A3mGD3i','zhrO','DgHLBG','BgvMDdO','D2fZBu0','EtOUndu','q3LQqNi','t1ndBLO','B2jM','Axq7Fq','BwvHBG','BLj1BNq','zMzZzxq','iJ54pc8','B3vUDa','zxnWia','B3PLrKC','DdOXnha','DMvYBg8','Bwf4kdi','B2fYzca','DgL0Bgu','m3WYFdG','B3C6Aw4','zwzRz20','mJbWEca','ifbpuLq','lYbZChi','Cc1JDG','vunut3u','lxyYE2e','A2v5zg8','idmWChG','zvPSCxC','y2vUDgu','swHtvey','CMfKAxu','ms4WEdW','yxK6z3i','zsbYzxa','Cg9PBNq','qK54Eue','B3jKzxi','ldi0mIW','DgfSBgK','yxjN','oJK5oxa','ifnRAwW','Bgffyvm','lK1Vzhu','C0H6A3O','zwqGysa','Axr5','D1rYBfq','u2nVyvy','Aw5Nida','iNjVDw4','Dg8Gy2W','z0vZC0m','Cg9YDge','tMfTzq','igfWCgW','ELbsvK0','CMvIDwK','sMjsChK','DxjH','CwTYrgu','Ate2','zMfRzq','zM1ZAM8','BwfW','DxjHimk3','z0POtve','zYb3Agu','DhLSzt0','ywjZ','u0XoDhC','owq7y28','B3rO','DgX7zgK','B1bpAhu','suLlzfq','nxb4o2i','CMvZCYa','teXqv1i','z2H0oJy','zw5MvMW','zvnnA0W','t1nLBNm','oMLUC2u','ywDHAw4','BfHMz0S','igHVB2S','AMzjA28','D2f0y2G','Cd0Imc4','AuTQtKW','CM9WywC','CenVBNq','ihvPlw0','yxjTzwq','zuTZCMi','CMfUz2u','AwnLihC','mdTMB24','D2H5','igq9iK0','vLLuBvO','Dw1UCZO','C2XPy2u','BIG1mNy','tM1eDfu','BgTyz2S','DdTIB3i','lJa4ktS','yxbZAg8','EvjVD3m','ihn0EwW','qw5vzfe','CMLNAhq','De5rBgy','oNjNyMe','AK1JvKy','CMfWoNC','DcbTyxq','o3rVCdO','igTPBMq','BvDrt1m','lJmPo2q','AxrPB24','C2v0sw4','yY0XlJu','oYi+ltW','Ag11Dw8','vvrir0W','B24GDgG','CMvKihK','Aw5ZDgu','iMrPC3a','BgfZDfC','wKzxrgy','mxb4idy','Ag9VAW','icaGDhK','wgLWCfm','A0Llsem','mJu1lc4','igLKpsi','DdOWo28','Bgu9iMi','o292zxi','BK5LDhC','C3bHBG','rw5HyMW','vwXABgO','mJu1ldi','zZOXmxa','CM9ZCY0','icaO','lJCYktS','CYbVCNa','yxmSBw8','y21K','A3mG','iIbZDgu','zvDcDLm','ic0+ia','EtPMBgu','ig9Mihy','DgrxBNu','B2jIEsa','B3qUBw4','rMLLBgq','vfvst0W','AuPwuxy','AhvKlwm','D257B3a','o3bHzgq','zxrVBG','Bg93oMG','Cg5vvM8','uNvUDgK','z2uUrgu','tuLpDu0','CgfJAxq','lM1Ulxq','BMCGlYa','Bg9dAge','y2u7','B29M','lwjVDhq','yxvSDa','AwzYyw0','v29YBgq','nhW2Fdm','BNqTC2K','tK1bEem','ChrY','iZrMogy','zxjYB3i','CdPYB3u','vKuGDG','B0LHwe4','nhW5FdG','D2vWA2W','z0vlrxC','DLDIrei','u0TjteW','txvSDgK','rhPjqwO','t1HLz0m','vvDnsYa','zgvZy3S','z0vctgO','yxbWBgK','oMjYAwC','yu5YBxC','rxHWB3i','CYb3zxi','oJeYmha','EvvTzxa','ohW2Fde','zxqSig8','zwfNqNO','owqIihm','zwfKEsa','nNWXmNW','u29IAeK','z2v0rwW','CJOWo2i','zYbMywK','C3bYAw4','zMfJDg8','zuD0vMG','lNnRlxm','AM9PBJ0','lxDLyMS','vxPKAKW','u2PUwLG','DKjdvvm','q29UC28','zwqGlsa','i2zMnMu','CMvHy2G','z2fTzq','C2fUzq','DgvZDa','rhvcu3u','vwrIwfu','ChPjuhe','qvbvyvq','igDHBwu','zhrOoJu','su1oEwi','C2fUCY0','Bwf4','iIb3Awq','AxrSzxS','yxrHihi','zMTZDvq','A3nqwxa','z25HDhu','B2f0nJq','zxrsAwC','z2vY','Eu5wv3i','C0vsuKS','C2v0uhi','Aw50zxi','r2z1uuS','oMnLBNq','lwv2zw4','q2zozgq','zfbWsgy','zYbPBNq','DgDtDeK','zw1Pzxm','BNvTyMu','rgnHr1K','zsbZDhi','Bg1oDxu','yxjKlxq','B29RCYa','Ec1KAxi','igL0ige','r2fTzsG','AgvHCfu','EMLizeK','y2XVC2u','lJC1ktS','Dg9Nz2W','B2ncwey','z2fTzvm','DwzVvvu','s1HQCMm','BgLZDa','t2zM','r2fMtNK','uevrBLq','rw9RBwy','veXzuKG','yvnsreK','mxW0Fdi','DgfN','tM8GugG','u2vSzwm','BMu7Fq','i3n3mI0','yNv0ig4','DcbPBMO','ywz0zxi','BdPPBMK','svreCwS','oInMn2u','yxjPys0','BIbYzwW','DYaTidq','CMeTC3C','wMPoBLy','wxjuAg8','BgnUwKO','B2nvAvG','CxrXDve','C3rVCfa','ugfZDgu','shzezgi','DcbPzd0','zxjZ','zw50lwm','rwjzB1O','lt4GDM8','DMLZDwe','vhrMqKG','sufTuMK','ELfvCNC','AwqGCMC','AwvSzca','BM90igK','zwn0ihC','yNvMzMu','ys1IB3G','BgLcBxC','yxrJAc4','tNHxsKS','AgLSzsa','BIbPzNi','C3rYB2S','uMvZB2W','tfHeBKe','EdTNyxa','DeHLywW','DgLHBh0','BeHSr3O','z1nqq0u','D3jHCdS','AxvZoJK','B3beA20','A1f6y1q','y2S7zM8','DcbYzxa','yMXLig4','DKjsA2u','Bg9N','tg9VAYS','s1nitvC','Aw5WDxq','ndC7','qxrbCM0','nhWZFde','BNPxAMi','z1zTr2G','DgLUzYa','yNbvweS','iNn3mI0','BwLSEtO','igvHy2G','zuXMzK0','ksbZyxq','otbWEdS','mtz8nNW','vePhzhC','AxnmB2m','B25Ligi','B3a6mti','C3bSAxq','C3nHs2e','B3vUzdO','igzSB28','rMLfAey','ig9MzG','yw5ZAxq','vNbpwLi','mJbWEcK','DvnXBK4','DuvrAfi','zwqU','BgvYigG','CM9VDa','lwnVChK','yMX5lMK','BvDnwLK','ntuSmJu','zxi7zMW','ohb4ksK','vu5PwKG','B2zMC2u','AMjzzxy','C3CYlwi','CM9Rzs0','D24Gvxa','yw5JztO','mcbYz2i','AhHOuxy','zvrhBwm','CMuGAwC','idyWCYa','iM5VBMu','q29WEsa','ExP2uwO','C2STCMe','CMrLCI0','uuPdDvK','psjTBI0','C3zNE3C'];_0x3153=function(){return _0x23190b;};return _0x3153();}function _0x5dd8(_0x259a83,_0x58af37){_0x259a83=_0x259a83-(0x757*0x1+-0x2334+0x1*0x1cfd);var _0x2eba75=_0x3153();var _0x224599=_0x2eba75[_0x259a83];if(_0x5dd8['tDUOCD']===undefined){var _0x5c0c3d=function(_0x5a965c){var _0x3c5086='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x54b50a='',_0x4e775f='';for(var _0x15a3bd=-0x16c*-0xe+0x6*-0x18b+-0xaa6,_0x12271f,_0x448e8,_0x296142=0x7c9+0x1567+0x10*-0x1d3;_0x448e8=_0x5a965c['charAt'](_0x296142++);~_0x448e8&&(_0x12271f=_0x15a3bd%(0x2a6+-0x22d*0xe+-0xd*-0x224)?_0x12271f*(0x2*-0xf25+-0x1*-0x248b+-0x601)+_0x448e8:_0x448e8,_0x15a3bd++%(0x1*0xd87+-0x2108+-0x1*-0x1385))?_0x54b50a+=String['fromCharCode'](0xf57+-0x49*0x13+-0x8ed*0x1&_0x12271f>>(-(-0xe8a+-0x17cd+0x2659)*_0x15a3bd&-0x2*-0x527+-0x791+-0x2b7*0x1)):-0x2639+0x11b3*0x1+0x47*0x4a){_0x448e8=_0x3c5086['indexOf'](_0x448e8);}for(var _0x1ac8b8=0x2656+0x1515+0x29*-0x173,_0x115149=_0x54b50a['length'];_0x1ac8b8<_0x115149;_0x1ac8b8++){_0x4e775f+='%'+('00'+_0x54b50a['charCodeAt'](_0x1ac8b8)['toString'](0x2307+0xfcf+-0x32c6))['slice'](-(0x31a*-0x1+0x1365+-0xb*0x17b));}return decodeURIComponent(_0x4e775f);};_0x5dd8['VAaPCc']=_0x5c0c3d,_0x5dd8['pYgsKB']={},_0x5dd8['tDUOCD']=!![];}var _0x1e5418=_0x2eba75[0x67d+0x17fe+-0x1e7b],_0x37e98a=_0x259a83+_0x1e5418,_0x47e620=_0x5dd8['pYgsKB'][_0x37e98a];return!_0x47e620?(_0x224599=_0x5dd8['VAaPCc'](_0x224599),_0x5dd8['pYgsKB'][_0x37e98a]=_0x224599):_0x224599=_0x47e620,_0x224599;}(function(_0x48e8bd,_0x4fee9d){var _0x5d5a56=_0x5dd8,_0x3de561=_0x48e8bd();while(!![]){try{var _0x38b6b9=parseInt(_0x5d5a56(0x1cf))/(-0x3f7+0x5e7*0x3+-0xdbd)+parseInt(_0x5d5a56(0x4a6))/(-0x8f9+0x4*0x20d+0xc7)+parseInt(_0x5d5a56(0x46c))/(-0x17c+-0x10b*0xb+0xcf8)+parseInt(_0x5d5a56(0x3e0))/(-0x5*0x4ff+-0x139e+-0x2c9d*-0x1)*(parseInt(_0x5d5a56(0x535))/(-0xd0d+0x7*0x565+0x83b*-0x3))+-parseInt(_0x5d5a56(0x554))/(-0x1341+-0x1*0xf47+0x228e)+-parseInt(_0x5d5a56(0x65e))/(-0x5d7*-0x5+0x19b1+-0x35*0x109)+parseInt(_0x5d5a56(0x6e6))/(0x740+-0x1914+0x11dc)*(parseInt(_0x5d5a56(0x28e))/(-0xb7*-0x5+-0x172b+0x13a1));if(_0x38b6b9===_0x4fee9d)break;else _0x3de561['push'](_0x3de561['shift']());}catch(_0x384c04){_0x3de561['push'](_0x3de561['shift']());}}}(_0x3153,-0x6f357+-0x8ac8b+0x1455c7),((()=>{'use strict';var _0x105055=_0x5dd8,_0x4436f2={'oSXeM':_0x105055(0x57a),'PEQnT':function(_0x47277a,_0x2bb9fe){return _0x47277a!==_0x2bb9fe;},'NOBTk':function(_0x59bb2c,_0x24ff62){return _0x59bb2c!==_0x24ff62;},'qYvTn':_0x105055(0xa59)+'e','lWjkO':'4|5|0'+'|1|6|'+'3|2','sSIoY':_0x105055(0xa3b),'JDsRC':function(_0x1f4bf8,_0x3cc6e3){return _0x1f4bf8<_0x3cc6e3;},'bLzyT':'tMAwl','DgZLE':_0x105055(0x36b),'VikYI':'sakur'+_0x105055(0x508),'gVmGh':function(_0x400cb5,_0x1e4728,_0x582bf0){return _0x400cb5(_0x1e4728,_0x582bf0);},'QAasX':function(_0x16582b,_0x33ea02){return _0x16582b+_0x33ea02;},'dpEta':_0x105055(0x7b5)+'8a','ERtdd':'GdAUi','iuMtN':'weJHb','nqixW':function(_0x6ff1c0,_0x3ba0a8){return _0x6ff1c0===_0x3ba0a8;},'TtJTL':'JZeKa','RlMDm':function(_0x46c25e,_0x4e183d){return _0x46c25e===_0x4e183d;},'vWhqj':function(_0x210037,_0x27077e){return _0x210037!==_0x27077e;},'QgCJV':'sakur'+'a-sw-'+'v2','OSCnZ':_0x105055(0x937),'lRRuM':_0x105055(0x993)+'a-sw-'+_0x105055(0xbb5)+'b','mWQOS':function(_0x2e8729,_0x165a59){return _0x2e8729+_0x165a59;},'bTMsF':'sakur'+'a','EkIpZ':_0x105055(0xba9),'JtTHS':function(_0x22c68d){return _0x22c68d();},'fIGwB':'div','Eokmf':_0x105055(0x361)+_0x105055(0x8cc)+_0x105055(0xb67)+'l\x20dis'+_0x105055(0x77b),'zagGf':_0x105055(0x541),'qPcvn':function(_0x24b885){return _0x24b885();},'QNeZl':_0x105055(0xb09)+'|2|0','IFuUZ':function(_0x49ab21,_0x931a38){return _0x49ab21+_0x931a38;},'EyCmP':'\x20\x201.\x20'+_0x105055(0x251)+'rmonk'+_0x105055(0x47d)+_0x105055(0x479)+'injec'+'ting\x20'+_0x105055(0x217)+_0x105055(0x6c4)+_0x105055(0xa36)+_0x105055(0x1c8)+_0x105055(0xaf2)+_0x105055(0x876),'XMBkM':_0x105055(0x4ca)+'Both\x20'+_0x105055(0x993)+'a.ski'+'llwar'+'z.use'+_0x105055(0xbcd)+'AND\x20t'+'he\x20ol'+'d\x20dia'+'g\x20scr'+_0x105055(0x8f1)+'re\x0a','BWGev':_0x105055(0x41c)+_0x105055(0x7a1)+_0x105055(0xacf)+_0x105055(0xb38)+'—\x20fra'+_0x105055(0xb45)+_0x105055(0xace)+'ected'+'?','cplcQ':'#ffb3'+'c7','VvNfI':function(_0xdbe2fb,_0x17b3b5){return _0xdbe2fb||_0x17b3b5;},'SjnZX':'#2a0f'+'1b','fxhpo':function(_0x177cc4,_0x2b7cea,_0x3d860c){return _0x177cc4(_0x2b7cea,_0x3d860c);},'gHVgC':function(_0x3c2a8d,_0x4daa4f){return _0x3c2a8d!==_0x4daa4f;},'vUTne':function(_0x2dcb5a,_0xb0be39){return _0x2dcb5a/_0xb0be39;},'fOhKY':_0x105055(0x16a)+_0x105055(0x8ce)+_0x105055(0xb21),'VLLqL':function(_0x35d98f,_0x25a9cd){return _0x35d98f<_0x25a9cd;},'ibptj':function(_0x3450c8,_0xdbbb88){return _0x3450c8>_0xdbbb88;},'dKCBw':_0x105055(0x576),'puysI':_0x105055(0x41e)+_0x105055(0x5eb)+_0x105055(0x133)+_0x105055(0x8e6)+'esolv'+_0x105055(0x7c5)+_0x105055(0x21d)+_0x105055(0x835)+'\x20','rhfSu':_0x105055(0x54d),'IKvIr':_0x105055(0xa8b)+'74','DrGrM':_0x105055(0x7cf)+'255,1'+'43,17'+'7,.35'+')','KGFdK':_0x105055(0x195),'EkKCm':function(_0x228e43,_0x18082f){return _0x228e43+_0x18082f;},'VERtN':_0x105055(0x2db)+_0x105055(0x7c1)+'d\x20·\x20','ASndo':_0x105055(0x56b),'aMQVp':_0x105055(0x942),'UIpQK':function(_0x2d16f4,_0x505ab3){return _0x2d16f4+_0x505ab3;},'FvSaZ':'backg'+'round'+':#150'+_0x105055(0x3d1)+'olor:'+_0x105055(0x6be)+_0x105055(0xb93)+_0x105055(0x7c9)+'1px\x20s'+'olid\x20'+_0x105055(0x7cf)+_0x105055(0x8ec)+_0x105055(0x1b2)+_0x105055(0x531)+';bord'+_0x105055(0x20b)+'dius:'+_0x105055(0x524),'wvOxj':_0x105055(0x512)+_0x105055(0x2ce)+_0x105055(0x908)+'i-mon'+'ospac'+_0x105055(0x435)+'solas'+_0x105055(0x849)+_0x105055(0x5a9)+';box-'+_0x105055(0x86f)+_0x105055(0x834)+_0x105055(0xb9f)+_0x105055(0x55c)+_0x105055(0x9b2)+'#000;','jKSCY':function(_0xf7b278,_0x5f18aa){return _0xf7b278+_0x5f18aa;},'hfYGS':function(_0x3512f3,_0x1baa0f){return _0x3512f3+_0x1baa0f;},'xQoqg':function(_0x164052,_0x568488){return _0x164052+_0x568488;},'BlNoK':function(_0x354b85,_0x1bab4a){return _0x354b85+_0x1bab4a;},'pVlWS':function(_0x40beb4,_0x2cd2d0){return _0x40beb4+_0x2cd2d0;},'ObOVn':_0x105055(0x88a)+_0x105055(0xbb3)+_0x105055(0x4b3)+':','ARdJw':_0x105055(0x537)+_0x105055(0xa2c)+_0x105055(0xb30)+'uild\x22'+_0x105055(0xa0e)+_0x105055(0x6c2)+_0x105055(0x45a)+'7a658'+_0x105055(0x63e)+'t-siz'+'e:11p'+_0x105055(0x7df)+'ding:'+_0x105055(0xa26)+_0x105055(0x936)+_0x105055(0x7c9)+_0x105055(0x62b)+_0x105055(0x4b1)+_0x105055(0x7cf)+_0x105055(0x8ec)+'43,17'+_0x105055(0xbfd)+_0x105055(0x38b)+'der-r'+_0x105055(0x46a)+_0x105055(0x9c7)+'x;\x22>v'+'?</sp'+_0x105055(0xb4b),'whLSz':_0x105055(0x537)+_0x105055(0xa2c)+_0x105055(0xb6a)+_0x105055(0x2fe)+_0x105055(0x7b8)+'le=\x22c'+_0x105055(0xb62)+_0x105055(0x828)+_0x105055(0x4a3)+'aitin'+'g\x20for'+'\x20game'+_0x105055(0x5d8)+_0x105055(0x895)+'pan>','pnykv':'<butt'+'on\x20id'+_0x105055(0x1c4)+_0x105055(0x257)+'tyle='+'\x22back'+_0x105055(0x985)+_0x105055(0x394)+'nspar'+_0x105055(0x29c)+_0x105055(0x9c3)+_0x105055(0xc00)+_0x105055(0x183)+_0x105055(0x4b8)+_0x105055(0x2ff)+'143,1'+'77,.4'+_0x105055(0x172)+_0x105055(0x954)+_0x105055(0x90e)+_0x105055(0x960)+_0x105055(0x20b)+_0x105055(0x132)+'7px;p'+'addin'+'g:4px'+'\x208px;'+'curso'+'r:poi'+'nter;'+_0x105055(0x9a6)+_0x105055(0xba4)+'n>','iJVQv':'<div\x20'+_0x105055(0x4d9)+'=\x22pad'+'ding:'+_0x105055(0x6d5)+_0x105055(0x5c1)+_0x105055(0x9c3)+'-bott'+'om:1p'+_0x105055(0x5ad)+'id\x20rg'+'ba(25'+_0x105055(0x4fc)+_0x105055(0x28f)+_0x105055(0x574)+'displ'+'ay:fl'+_0x105055(0x294)+_0x105055(0x291)+_0x105055(0x436)+'n-ite'+_0x105055(0x886)+_0x105055(0x404)+_0x105055(0x8df)+'0\x200\x20a'+_0x105055(0x507)+_0x105055(0x654)+_0x105055(0xa14)+'rap;\x22'+'>','xETLX':'<span'+_0x105055(0xa2c)+_0x105055(0x871)+_0x105055(0x620)+_0x105055(0x4d9)+'=\x22col'+_0x105055(0x54c)+_0x105055(0x82e)+'\x22>F9\x20'+_0x105055(0x2ca)+_0x105055(0x704)+_0x105055(0x61e)+_0x105055(0x600)+_0x105055(0x9b4)+'intin'+'g\x20/\x20j'+_0x105055(0x563)+_0x105055(0x927)+'ks\x20wh'+'ich\x20f'+_0x105055(0xae9)+_0x105055(0x44a)+'ich.<'+_0x105055(0x304)+'>','gXPmj':'max-h'+_0x105055(0x369)+_0x105055(0x779)+';\x22>No'+_0x105055(0xbf0)+_0x105055(0x5c7)+'t.\x0a\x0aT'+'his\x20p'+_0x105055(0x193)+_0x105055(0x52f)+'es\x20it'+'self\x20'+'when\x20'+_0x105055(0x123)+_0x105055(0x742)+'rame\x20'+_0x105055(0x92c)+_0x105055(0x645)+_0x105055(0x61f)+_0x105055(0x2be)+'eeded'+_0x105055(0x3ea)+_0x105055(0x639)+_0x105055(0x843)+'empty'+',\x20Tam'+_0x105055(0x8bc)+_0x105055(0x198)+_0x105055(0x763)+_0x105055(0xace)+_0x105055(0x5fc)+_0x105055(0xaab)+_0x105055(0x83d)+'\x20cros'+_0x105055(0x2e8)+'gin\x20g'+_0x105055(0x742)+_0x105055(0x24c)+_0x105055(0x7c7)+'>','qtDkP':_0x105055(0xacc)+'x','IekEj':_0x105055(0xacc)+_0x105055(0x838),'IjVBM':_0x105055(0xacc)+'facto'+'r','YRySl':'#sw2-'+_0x105055(0xa81)+'rlabe'+'l','QIhqk':function(_0x5589dd){return _0x5589dd();},'vxrKF':'\x20->\x20','NFTbV':function(_0x1cbf9e,_0x17aeb9){return _0x1cbf9e+_0x17aeb9;},'pjHyt':function(_0x3e32cd,_0x4079d4){return _0x3e32cd^_0x4079d4;},'FcVsi':function(_0x5838d4,_0x8cf175){return _0x5838d4|_0x8cf175;},'Kbpqd':function(_0x15408b,_0x492401){return _0x15408b+_0x492401;},'IoBKO':function(_0x2eab3f,_0x31a909){return _0x2eab3f+_0x31a909;},'TenJs':function(_0xc6af55,_0x51fd5c){return _0xc6af55+_0x51fd5c;},'LLPWR':'frame'+_0x105055(0x125),'oiYII':function(_0x21c064,_0xa72fef){return _0x21c064/_0xa72fef;},'vqTIY':function(_0x2685a5,_0x26ba0e){return _0x2685a5+_0x26ba0e;},'tRyQz':function(_0x46e7bb,_0x5bfea6){return _0x46e7bb!=_0x5bfea6;},'KZaLQ':_0x105055(0x166)+_0x105055(0x561)+_0x105055(0x16c)+'\x20capt'+_0x105055(0x271)+'yet.','xRBLl':_0x105055(0x8e5)+_0x105055(0xab3)+'fire\x20'+_0x105055(0xa20)+'e\x20gam'+_0x105055(0x302)+_0x105055(0xb32)+_0x105055(0x706)+');\x20no'+'thing'+_0x105055(0x6cd)+_0x105055(0x271)+_0x105055(0x44d),'WnxXt':_0x105055(0x2e6)+_0x105055(0x17f)+'ran\x20y'+_0x105055(0xa77)+_0x105055(0x54e)+'\x20sign'+_0x105055(0x669)+'\x20did\x20'+'not\x20m'+_0x105055(0xaef),'FyXPk':function(_0x11f255,_0x52efa8){return _0x11f255+_0x52efa8;},'opDkm':_0x105055(0x69f),'IhSTF':_0x105055(0x44f),'MmUmu':_0x105055(0x3d2),'PeQlJ':function(_0x4facfb,_0xfae036){return _0x4facfb+_0xfae036;},'joDeH':function(_0x4f4b25,_0x205281){return _0x4f4b25+_0x205281;},'gSPCE':_0x105055(0x382)+_0x105055(0x26c),'pzIPq':'\x20\x20!\x20','jbYev':function(_0x1606b0){return _0x1606b0();},'plTEn':function(_0x40a9f5,_0x444e25){return _0x40a9f5===_0x444e25;},'ZknSv':_0x105055(0x361)+_0x105055(0x8cc)+_0x105055(0xb67)+'l\x20upd'+'ate\x20f'+_0x105055(0x17a),'LYIkm':function(_0x403221,_0x10752b){return _0x403221!==_0x10752b;},'gpKlJ':function(_0x55cb40,_0x33f10a){return _0x55cb40!==_0x33f10a;},'NXYWO':_0x105055(0x216)+'nel','NvIdQ':'\x20show'+'n','lilHY':function(_0x5568d0,_0x4692fc){return _0x5568d0!==_0x4692fc;},'Wmjuy':'uSqnN','UWsTt':function(_0xb64dd7,_0x1c4a62){return _0xb64dd7===_0x1c4a62;},'VuhGE':_0x105055(0x6be)+'f5','bKedK':function(_0x3ca858,_0x11ae86){return _0x3ca858+_0x11ae86;},'gEBLj':_0x105055(0x797)+'ion','QBFMb':_0x105055(0x9cb),'OCSLL':_0x105055(0x215),'XEFiu':'info','biFFH':_0x105055(0x884),'eUnfQ':_0x105055(0xa9c),'eZlqw':function(_0x3f7b8f,_0x451d9a){return _0x3f7b8f*_0x451d9a;},'NpbED':function(_0x45c706,_0x1e1bca){return _0x45c706!==_0x1e1bca;},'WquCi':function(_0x1d3fab,_0x5336a1){return _0x1d3fab===_0x5336a1;},'vyQyT':_0x105055(0x586),'FBelT':'dWnps','TGerA':_0x105055(0xbad),'kIKHC':'wAdTg','IlgBK':function(_0x3a78bf,_0x5547bb){return _0x3a78bf-_0x5547bb;},'UbolK':'BqTBF','lomRv':function(_0x5b21ec,_0x3f11cc){return _0x5b21ec(_0x3f11cc);},'ZIknM':'off\x20t'+'he\x20li'+_0x105055(0x231)+_0x105055(0x47b),'XbgCE':function(_0x128220,_0x388606){return _0x128220+_0x388606;},'eSMkL':function(_0x4bdffb,_0x241fa4){return _0x4bdffb===_0x241fa4;},'hxhQv':function(_0x5e248c,_0x32f0e6,_0x252829,_0x51aee0){return _0x5e248c(_0x32f0e6,_0x252829,_0x51aee0);},'PGFYZ':'Healt'+_0x105055(0x18d)+'pt','HKyWr':'Rvxuh','nXWcn':_0x105055(0x14d),'KECLV':_0x105055(0x149)+'ined','gUzXF':_0x105055(0x903)+'ntiat'+_0x105055(0x306)+_0x105055(0x906),'RaueM':_0x105055(0x351),'DsMfO':function(_0x2cc2fb,_0x3249c8){return _0x2cc2fb!==_0x3249c8;},'mHBYC':'enWUf','cLcsM':_0x105055(0x993)+'a-ski'+_0x105055(0x8c3)+'z','Avsgu':function(_0x5cf764,_0x4023a5){return _0x5cf764===_0x4023a5;},'MEPKW':'hlnsL','jperY':function(_0x46a838,_0x1b8ef2){return _0x46a838(_0x1b8ef2);},'HvDdb':function(_0x39f864,_0x5af1cf){return _0x39f864|_0x5af1cf;},'pfbSf':'+0x','cYHLH':function(_0x3b2132,_0x12312c){return _0x3b2132!==_0x12312c;},'Loyae':function(_0x3f43bc,_0x6f0f80){return _0x3f43bc===_0x6f0f80;},'GRXie':function(_0x25c4e1,_0x45f319){return _0x25c4e1===_0x45f319;},'njkSA':'plugi'+'n._ru'+'ntime'+_0x105055(0x15b)+'lveGa'+_0x105055(0x6ac),'hRAaA':_0x105055(0xa4e)+'me._g'+'ame','Bpdzw':_0x105055(0x3f5),'fmsjo':_0x105055(0x963)+'game\x20'+'bindi'+'ng','QmoVZ':function(_0x70df74,_0x21863c){return _0x70df74<_0x21863c;},'XooHg':function(_0xfd9845,_0x530de9){return _0xfd9845===_0x530de9;},'npnAY':function(_0x47e5e9,_0x344428){return _0x47e5e9+_0x344428;},'IidOm':'KUmXx','aFecb':'unGXf','POyUH':_0x105055(0x903)+'ntiat'+'e().e'+_0x105055(0x499)+_0x105055(0x50b)+_0x105055(0x83e),'pfWLm':function(_0x5461aa){return _0x5461aa();},'pBSWC':'sakur'+_0x105055(0xaed)+'es','OZMzp':_0x105055(0x6a7)+_0x105055(0x6cf)+_0x105055(0x746)+'left:'+_0x105055(0x852)+_0x105055(0x6f2)+'index'+_0x105055(0x51e)+'48364'+_0x105055(0x602)+_0x105055(0x5f7)+_0x105055(0x632)+_0x105055(0x588)+'e;','uuVbB':function(_0x278cac,_0x578801){return _0x278cac+_0x578801;},'tseVc':_0x105055(0x6b8)+_0x105055(0x3d8),'WIkws':function(_0x5e79d9,_0x140b75,_0xd5af6f,_0x2747a2,_0x82fe5f){return _0x5e79d9(_0x140b75,_0xd5af6f,_0x2747a2,_0x82fe5f);},'zPRVM':function(_0x236f34,_0x4ff188){return _0x236f34===_0x4ff188;},'jhQGe':_0x105055(0x7f8),'aSRDI':'EBlCJ','jchDA':function(_0x49de07){return _0x49de07();},'BvAAH':function(_0x2736d1,_0x16bcad){return _0x2736d1>_0x16bcad;},'WsGdt':function(_0x36b1d7,_0x133d50){return _0x36b1d7+_0x133d50;},'mtCrg':'addre'+_0x105055(0x744),'rMNwz':_0x105055(0x225),'ZMhvJ':_0x105055(0x2a9),'NuJqw':function(_0x310c5b,_0x8f55d){return _0x310c5b&_0x8f55d;},'GafNy':_0x105055(0x5b8),'VpOZR':_0x105055(0x9f5)+_0x105055(0x5f9)+_0x105055(0x4f6)+_0x105055(0x4a7)+_0x105055(0x20f)+_0x105055(0x158)+_0x105055(0xa6f)+_0x105055(0x408)+_0x105055(0xb9e)+'he\x20si'+_0x105055(0xa9e)+_0x105055(0x3f0),'ECXpc':function(_0x201984,_0x5c97bf){return _0x201984<_0x5c97bf;},'gEKEw':function(_0x13c2a4,_0x5291f5){return _0x13c2a4+_0x5291f5;},'tBwcD':function(_0x6b5ca7,_0xdb6ca3){return _0x6b5ca7/_0xdb6ca3;},'MekhW':function(_0x30edda,_0x97b97f){return _0x30edda+_0x97b97f;},'YcXdQ':function(_0x4931a2,_0x39d1fb){return _0x4931a2<_0x39d1fb;},'mfIpI':function(_0x3a945a,_0x271d65){return _0x3a945a(_0x271d65);},'wRJfS':'xMdLx','fkBSn':_0x105055(0x2a7),'APUaT':_0x105055(0x820),'FKQfl':function(_0x13b1dc,_0x5940c7){return _0x13b1dc+_0x5940c7;},'ScoaV':function(_0x364125,_0x5232ae,_0x487826){return _0x364125(_0x5232ae,_0x487826);},'vnMpG':function(_0x52f3fe,_0x40d2d1){return _0x52f3fe+_0x40d2d1;},'MIOuM':function(_0x3c8fde,_0x46dd30){return _0x3c8fde+_0x46dd30;},'UTHGL':function(_0x9c73f2,_0x84bc70){return _0x9c73f2+_0x84bc70;},'cYGZb':_0x105055(0x8fe),'SWMAB':function(_0x370780,_0x14431d){return _0x370780===_0x14431d;},'ngTBu':function(_0xccb7e7,_0x36e663){return _0xccb7e7&_0x36e663;},'TJGdw':function(_0x581e68,_0xf9eca){return _0x581e68(_0xf9eca);},'VrsqJ':function(_0x4d100a,_0x2e498b){return _0x4d100a^_0x2e498b;},'lcnZJ':function(_0x68e364,_0x515b98){return _0x68e364===_0x515b98;},'WrKqW':function(_0x5ea289,_0x56afab){return _0x5ea289&_0x56afab;},'gJhMQ':function(_0x3ae8a2,_0x20e4b2){return _0x3ae8a2^_0x20e4b2;},'PSwoV':function(_0x2d5ae1,_0x364755){return _0x2d5ae1+_0x364755;},'YqkWU':function(_0x197bbc,_0x245508){return _0x197bbc+_0x245508;},'ShgHJ':function(_0x18856e,_0x5d9307){return _0x18856e===_0x5d9307;},'kQyrd':'i32','hIfiE':function(_0x7b4afb,_0x50685b){return _0x7b4afb===_0x50685b;},'Ssecd':'Speed'+_0x105055(0xb1e),'gWFhl':_0x105055(0x944),'KDtak':function(_0x2761f7,_0x4bbe93){return _0x2761f7<_0x4bbe93;},'wPGEv':function(_0x14d304,_0x53c47c,_0x2d37d8,_0x2d6a71){return _0x14d304(_0x53c47c,_0x2d37d8,_0x2d6a71);},'ivetu':function(_0xd71425,_0x312ea5){return _0xd71425!==_0x312ea5;},'uxQzY':function(_0x22752d,_0xc59efc){return _0x22752d(_0xc59efc);},'InAgN':function(_0x1928e,_0x523172){return _0x1928e+_0x523172;},'HFxCy':'cnEDJ','zkFYO':_0x105055(0x6b6),'dzTop':function(_0xe6b937,_0x4101be){return _0xe6b937>=_0x4101be;},'nWXvd':function(_0x22ca70,_0x3d7a73){return _0x22ca70===_0x3d7a73;},'bpUXK':'jAOqI','LinbM':function(_0x4ad674,_0x547080){return _0x4ad674*_0x547080;},'tVNyV':_0x105055(0xb64),'pINgT':function(_0x1f643e,_0x3e82d2){return _0x1f643e!==_0x3e82d2;},'Coggo':function(_0xed010a,_0x232a2c){return _0xed010a<_0x232a2c;},'PBVjP':function(_0x4c85b1,_0x18b55c){return _0x4c85b1*_0x18b55c;},'fbvlX':_0x105055(0x993)+_0x105055(0x2cd)+_0x105055(0x2b4)+'s','zkkaU':'FPSco'+'ntrol'+'ler','lOCvG':'dseKo','HUdSt':'iVuWt','OAGZh':function(_0x58ad93,_0xecd83d){return _0x58ad93(_0xecd83d);},'agoWC':'3|2|4'+'|1|0','OcQVY':_0x105055(0xa1e),'pnUVo':function(_0x216ff8,_0x3636ed){return _0x216ff8(_0x3636ed);},'RxfzF':'EbYoZ','ndXLP':function(_0x2bb1ee,_0x4a9fd9){return _0x2bb1ee===_0x4a9fd9;},'OieJG':'LepnR','PKbUZ':function(_0x91080e,_0x2a6655){return _0x91080e<_0x2a6655;},'scMMU':function(_0x3e794a,_0x302ba0){return _0x3e794a+_0x302ba0;},'eVcsO':function(_0x53b8b1,_0x2ab32f,_0x5cb947){return _0x53b8b1(_0x2ab32f,_0x5cb947);},'kmOEW':function(_0x62e48b,_0x113f8b){return _0x62e48b!==_0x113f8b;},'iFnja':function(_0xa5d8f8,_0x2ea3e9,_0x2b9f08,_0x45b70e){return _0xa5d8f8(_0x2ea3e9,_0x2b9f08,_0x45b70e);},'PGUhO':function(_0x1d43dc,_0x1d42d4){return _0x1d43dc<_0x1d42d4;},'HejyK':_0x105055(0xb3e),'JfVeA':_0x105055(0x75e),'ziHdI':function(_0x3bbf45,_0x287192,_0x4e2496){return _0x3bbf45(_0x287192,_0x4e2496);},'YJhtI':function(_0x2c283c,_0x1e6be9){return _0x2c283c+_0x1e6be9;},'JlKSR':function(_0x5bdd8b,_0x2461c0){return _0x5bdd8b<_0x2461c0;},'liBmw':_0x105055(0x965)+'a\x20Ski'+'llWar'+'z\x20—\x20','xFOIw':'mn-ta'+'b','XgyqM':_0x105055(0x958)+'ve','zQUrw':function(_0x753895,_0x5218c8){return _0x753895+_0x5218c8;},'vbgOC':function(_0x4c77ef,_0x1363cb,_0xfed9ab,_0x5103bc){return _0x4c77ef(_0x1363cb,_0xfed9ab,_0x5103bc);},'CyjBr':function(_0x1102cc,_0x59e5ee){return _0x1102cc<_0x59e5ee;},'xUxYA':function(_0xdca6a4,_0x37a45b){return _0xdca6a4!==_0x37a45b;},'QBAVF':'VKLmW','DoRvD':function(_0x2f4818,_0x19e0c4){return _0x2f4818-_0x19e0c4;},'TLYRH':function(_0x5074bb,_0x4c93b0){return _0x5074bb===_0x4c93b0;},'cKgsS':'UWBKq','puRni':function(_0xb6d4b1,_0x429cae){return _0xb6d4b1<_0x429cae;},'SOyBs':function(_0x3993a9,_0x2bfd2b,_0x423b55){return _0x3993a9(_0x2bfd2b,_0x423b55);},'OCGaG':'NPC_C'+_0x105055(0x647)+_0x105055(0x2a1),'Qdmjt':function(_0x710355,_0x41721c){return _0x710355-_0x41721c;},'bNUZP':function(_0x5d0dc4,_0x16589a,_0x134239){return _0x5d0dc4(_0x16589a,_0x134239);},'pAJHy':function(_0x3c6170,_0x13db6c){return _0x3c6170 in _0x13db6c;},'GIxZv':function(_0x1bf18b,_0x3aa844){return _0x1bf18b+_0x3aa844;},'UfpPT':function(_0xcc7577,_0x1e385a,_0x2f60a1){return _0xcc7577(_0x1e385a,_0x2f60a1);},'Slqrc':function(_0x40a0f4,_0x4dcd42){return _0x40a0f4+_0x4dcd42;},'yfQZP':'the\x20l'+_0x105055(0xa43)+_0x105055(0x36e)+_0x105055(0x329)+'\x20-\x20ru'+'n\x20the'+'\x20reco'+_0x105055(0x3c6)+_0x105055(0x23f)+_0x105055(0x2f1)+'\x20roun'+'d,\x20no'+'t\x20the'+_0x105055(0x413)+'.','mrphq':'Playe'+'rs\x20ar'+_0x105055(0x4e9)+'sent\x20'+_0x105055(0xacd)+'one\x20a'+'re\x20cl'+'assif'+_0x105055(0x897)+_0x105055(0xb8d)+_0x105055(0x228)+'yet\x20-'+_0x105055(0x155)+'k\x20','EtJGd':_0x105055(0xb16)+_0x105055(0x44c)+_0x105055(0xb10)+_0x105055(0x675)+'y\x20in\x20'+'`play'+_0x105055(0x74b),'TtfBH':'void','coJSK':_0x105055(0x1c1)+'e','lkXgk':function(_0x70edf0,_0x34f076){return _0x70edf0+_0x34f076;},'Gxuqr':'zOJGN','MnKgY':function(_0x597d18,_0x2ee169){return _0x597d18===_0x2ee169;},'NxWJK':_0x105055(0x98d),'sHmHY':function(_0xfcd10c,_0x2f7db2){return _0xfcd10c<_0x2f7db2;},'gsSSB':'ZPmDk','Xqfxf':_0x105055(0xa91),'ddFic':_0x105055(0x928),'MbBMq':function(_0x5086f7,_0x10279f,_0x49d915,_0x59dfb9){return _0x5086f7(_0x10279f,_0x49d915,_0x59dfb9);},'iuomc':function(_0x1a6245,_0xb7d69a){return _0x1a6245+_0xb7d69a;},'xNSFr':function(_0x19333b,_0x1cd91b){return _0x19333b+_0x1cd91b;},'RBZPg':'Copie'+'d','DXPZq':'bUkQK','MnKKR':function(_0x33cf18,_0xa7f9a3){return _0x33cf18<_0xa7f9a3;},'YLgSH':function(_0x11277b,_0x306b9f){return _0x11277b===_0x306b9f;},'TIfii':_0x105055(0x9a1),'dNuTi':_0x105055(0x542),'UNiZH':_0x105055(0x96e),'snJoN':_0x105055(0x7b4),'sADqx':function(_0x3d1867,_0x30dcc6){return _0x3d1867===_0x30dcc6;},'KEYev':function(_0x13f5ad,_0x244c80,_0x90bbba){return _0x13f5ad(_0x244c80,_0x90bbba);},'vmSpP':function(_0x34737d,_0x2352af){return _0x34737d===_0x2352af;},'BYZhJ':function(_0x1beed6,_0x1e89a0){return _0x1beed6+_0x1e89a0;},'yPbil':'\x20ACTI'+'VE','IMNyb':'\x20hex=','hfWkG':function(_0x3114d5,_0x3afdbf){return _0x3114d5===_0x3afdbf;},'vWsNX':function(_0x4f2ff6,_0x5e9aaf){return _0x4f2ff6(_0x5e9aaf);},'yygkp':function(_0x36767,_0x2ba209){return _0x36767(_0x2ba209);},'pbtdC':'offse'+'t\x200\x20('+_0x105055(0x603)+_0x105055(0x68e),'QwJGk':function(_0x2177ad,_0x267ead){return _0x2177ad!==_0x267ead;},'OlRve':_0x105055(0x7f9),'NMAxC':_0x105055(0xaae)+'r','GTqMt':'gMGko','EpxOj':function(_0x2ccf23,_0x3920a8){return _0x2ccf23<=_0x3920a8;},'WqIPK':function(_0x1f408e,_0x5dd197){return _0x1f408e&&_0x5dd197;},'XZoAj':function(_0x3c7e7b){return _0x3c7e7b();},'RhhOB':'Mouse'+_0x105055(0xb04),'Lrqsc':_0x105055(0x27d)+'Look+'+_0x105055(0x95f)+'a','uIZmn':_0x105055(0x75d),'yUmep':'snaps'+_0x105055(0x5f6),'TYgXR':'boole'+'an','UlCid':_0x105055(0x365)+'t','DLuXh':function(_0x4d04f8,_0x29f5e3,_0x292678){return _0x4d04f8(_0x29f5e3,_0x292678);},'MFTyn':function(_0x488eb9){return _0x488eb9();},'DyfPW':function(_0x1e6a6d,_0x5a3e96){return _0x1e6a6d+_0x5a3e96;},'KMIXw':'[data'+_0x105055(0x78a),'AZSlN':function(_0x2f2e58,_0x8367b6,_0x4e6f1a,_0x19ce04){return _0x2f2e58(_0x8367b6,_0x4e6f1a,_0x19ce04);},'XUYHV':_0x105055(0x76a),'vrCpv':_0x105055(0x993)+_0x105055(0x2cd)+_0x105055(0xa48)+'ss','dcpqH':'style','scqBF':_0x105055(0x993)+'a-sw-'+'hud','xjvYQ':function(_0xb8b637,_0x55d20d){return _0xb8b637+_0x55d20d;},'rwJov':'paddi'+'ng:6p'+_0x105055(0x787)+';font'+_0x105055(0x5fe)+'/1.45'+_0x105055(0x9fc)+'onosp'+_0x105055(0x21a)+'onsol'+_0x105055(0xa3a)+_0x105055(0x181)+'ce;co'+'lor:#'+_0x105055(0x135)+'5;','EXwYx':_0x105055(0x4e3)+'hadow'+':0\x2010'+_0x105055(0xbbc)+_0x105055(0xbff)+_0x105055(0x601)+'000;u'+'ser-s'+'elect'+_0x105055(0x8c0)+_0x105055(0x60b)+'kit-u'+_0x105055(0x768)+_0x105055(0x476)+_0x105055(0x8c0)+';','JxVLf':function(_0xa3cb87,_0x6b4ae3){return _0xa3cb87+_0x6b4ae3;},'hETiP':function(_0x39811f,_0x4e1020){return _0x39811f+_0x4e1020;},'nQJnc':function(_0x10f852,_0x540f5c){return _0x10f852+_0x540f5c;},'NYfoa':function(_0x186c72,_0x36b06a){return _0x186c72+_0x36b06a;},'jLwdK':'<div\x20'+_0x105055(0x239)+_0x105055(0x622)+'r\x22\x20st'+_0x105055(0xbb3)+_0x105055(0x4fa)+_0x105055(0x8b7)+_0x105055(0x294)+'p:6px'+_0x105055(0x436)+'n-ite'+'ms:ce'+_0x105055(0x404)+'flex-'+'wrap:'+'wrap;'+_0x105055(0x69c)+_0x105055(0x2b3)+_0x105055(0x29b)+';\x22>','lmhDB':_0x105055(0x8a6)+'ura</'+'b>','oKmip':'color'+_0x105055(0xad2)+_0x105055(0x997)+'order'+'-radi'+_0x105055(0x81d)+'x;pad'+_0x105055(0x3f2)+_0x105055(0xb91)+_0x105055(0x1e1)+'rsor:'+_0x105055(0x9c1)+_0x105055(0x983)+'nt:in'+'herit'+_0x105055(0x996)+_0x105055(0xb98)+_0x105055(0x28d)+_0x105055(0x345)+'>','uLNUQ':';\x22>','BpqBR':_0x105055(0x4b3)+':#f7e'+_0x105055(0x997)+'order'+'-radi'+'us:6p'+_0x105055(0x7df)+_0x105055(0x3f2)+'2px\x207'+_0x105055(0x1e1)+'rsor:'+_0x105055(0x9c1)+'er;fo'+_0x105055(0x699)+'herit'+';\x22>Sn'+_0x105055(0x27f)+_0x105055(0x345)+'>','SULLQ':'<div\x20'+'data-'+'a=\x22st'+_0x105055(0x27b)+_0x105055(0xbb3)+_0x105055(0x4b3)+_0x105055(0x680)+_0x105055(0x58c)+'ax-wi'+_0x105055(0x1d4)+_0x105055(0xb13)+'\x22></d'+_0x105055(0x57c),'DSHwf':_0x105055(0x89e),'pmWYT':_0x105055(0x238),'RjQzX':_0x105055(0x5b4),'FZsIl':'fold','blaUV':function(_0xe8c4bc,_0xc43c25){return _0xe8c4bc(_0xc43c25);},'PExmP':_0x105055(0x6bd),'gumJP':'%c[sa'+_0x105055(0x8cc)+'\x20in-f'+'rame\x20'+'HUD\x20d'+_0x105055(0x344)+'ed','kYBzi':function(_0x354b0c,_0xc45885){return _0x354b0c+_0xc45885;},'SHfun':_0x105055(0x4b3)+':','FMmGM':_0x105055(0x5b3)+'l','BFAbY':function(_0x4b3302){return _0x4b3302();},'AFTBO':function(_0x264b72,_0x31e2cc){return _0x264b72!==_0x31e2cc;},'DnTsU':function(_0x308449){return _0x308449();},'VMMpM':'Wlroq','oXpeZ':_0x105055(0xa6b),'sScOt':function(_0xdfb91b,_0x402c3e){return _0xdfb91b===_0x402c3e;},'cJAUb':_0x105055(0xbc7),'FiEhF':'eBlFX','FGHet':function(_0xd786eb,_0x3b4b5a){return _0xd786eb===_0x3b4b5a;},'StvXE':'BXSza','Bjrbd':'IdHUY','aJmev':function(_0x3cf451,_0x1cb621){return _0x3cf451>_0x1cb621;},'pYsGT':_0x105055(0x260)+'RS\x20','eLbXX':_0x105055(0x7e5),'WjdSg':'\x20\x20cam'+'\x20','wVyUV':function(_0x13e087,_0x40e0e4){return _0x13e087>_0x40e0e4;},'cnaFk':_0x105055(0x36d)+'99','aPztg':function(_0x42c364,_0x2325ee){return _0x42c364*_0x2325ee;},'IhWBV':function(_0x138117,_0x2f6c3f){return _0x138117*_0x2f6c3f;},'IZsle':_0x105055(0x650),'wAQJa':function(_0x18a66f,_0x2d4ec0){return _0x18a66f===_0x2d4ec0;},'hYvuK':'yKvZg','lDGIU':'dUwtj','xBdjf':function(_0x37ed5f,_0xd83a79){return _0x37ed5f!==_0xd83a79;},'AbNDZ':'rTTNg','sSZUy':_0x105055(0x4a8)+'t','lGmmS':'EpTak','VAooO':_0x105055(0x8d4)+_0x105055(0xaa0)+'ht','ZRbcV':function(_0x3f4b7b,_0x20d3e4){return _0x3f4b7b+_0x20d3e4;},'pNcgx':function(_0x5712df,_0x5b8e0d){return _0x5712df===_0x5b8e0d;},'jMMWu':_0x105055(0x8d4)+_0x105055(0xbcb)+'t','ACtEH':function(_0x20f157,_0x371f53){return _0x20f157===_0x371f53;},'AnUdQ':_0x105055(0x34b),'lqxAw':function(_0x57d8bc,_0x110b90){return _0x57d8bc<_0x110b90;},'bdyUd':function(_0x4b76ed,_0x2336c8){return _0x4b76ed+_0x2336c8;},'GfuQK':_0x105055(0x9d8)+'lt\x20si'+_0x105055(0x20e)+_0x105055(0x6fc)+_0x105055(0x414)+'re\x20(r'+_0x105055(0x49a)+_0x105055(0x121),'kWXiz':_0x105055(0x22d),'OUCSG':function(_0x4e5ac9,_0x2a4bda,_0x5ef385){return _0x4e5ac9(_0x2a4bda,_0x5ef385);},'gjrMW':function(_0x32cd84,_0x2ae00f){return _0x32cd84+_0x2ae00f;},'yfKgR':function(_0x5d93f2,_0x225710){return _0x5d93f2+_0x225710;},'yNVWr':_0x105055(0x1d3),'RynzH':_0x105055(0x516),'Fjfol':function(_0x4084b7,_0x39426b){return _0x4084b7+_0x39426b;},'gJoZm':function(_0x4d46d4,_0x50ab12){return _0x4d46d4<_0x50ab12;},'aiOPo':function(_0x3e2989,_0x212cde){return _0x3e2989+_0x212cde;},'cDWDI':function(_0x3d716f,_0x2b6584){return _0x3d716f*_0x2b6584;},'gEssC':function(_0x351daf,_0x4f0414){return _0x351daf/_0x4f0414;},'gBdfy':function(_0x5cd593,_0xb026ba){return _0x5cd593*_0xb026ba;},'UefBy':function(_0x22bfe9,_0x1bccc5){return _0x22bfe9/_0x1bccc5;},'ZtJwe':function(_0x491140,_0x4cfbad){return _0x491140*_0x4cfbad;},'dRFyL':function(_0x3f61f1,_0x3e1dd5){return _0x3f61f1+_0x3e1dd5;},'hmaHO':function(_0x40db08,_0x1f3b1e){return _0x40db08+_0x1f3b1e;},'DYMYj':function(_0x4f6cc2,_0x556691){return _0x4f6cc2*_0x556691;},'MGWLX':'YkkxQ','olrBg':'\x20\x202.\x20'+_0x105055(0x49d)+'age\x20h'+'as\x20no'+'t\x20bee'+_0x105055(0xad4)+_0x105055(0x300)+'\x20sinc'+_0x105055(0x13d)+_0x105055(0x9c5)+_0x105055(0x72c),'DuBSu':_0x105055(0x75a)+_0x105055(0x97d)+'\x20game'+'\x20page'+_0x105055(0x3ff)+'\x20and\x20'+'watch'+_0x105055(0x8f8)+_0x105055(0xb67)+_0x105055(0x89b)+_0x105055(0x662),'RfdkZ':_0x105055(0x150)+'rd','zRYcm':'</str'+_0x105055(0x7bc),'OKjFM':'false','BmsuI':function(_0x4a033a,_0x1995a6){return _0x4a033a(_0x1995a6);},'OilKv':_0x105055(0x6f4),'TzdXE':'1|5|3'+_0x105055(0x618)+_0x105055(0x42a),'QREkU':_0x105055(0x5a0)+_0x105055(0x966),'VevFW':function(_0x33c88d,_0x562a93){return _0x33c88d(_0x562a93);},'ocBXF':function(_0x14d492,_0x3aa338){return _0x14d492/_0x3aa338;},'jupIy':function(_0x162ae0,_0x1cf762){return _0x162ae0-_0x1cf762;},'qkrDe':function(_0x27959d){return _0x27959d();},'ITLNT':'sk-sl'+_0x105055(0x92b),'LjFpb':_0x105055(0xa31),'qxPVY':function(_0x59c3b0,_0x2c4293,_0x4e108c){return _0x59c3b0(_0x2c4293,_0x4e108c);},'CJNAn':_0x105055(0x3bf)+'l','BGLQn':function(_0x2fbffb,_0x59a83a){return _0x2fbffb+_0x59a83a;},'nEiqC':'</spa'+'n>','kKfLz':function(_0x14d7b1,_0x4224f4){return _0x14d7b1===_0x4224f4;},'dsAWD':_0x105055(0xb48),'PRHGn':function(_0x554c95,_0x362baa){return _0x554c95!==_0x362baa;},'mdLox':_0x105055(0x745),'hDywv':_0x105055(0x8ea),'BQNGw':'\x20fiel'+_0x105055(0x446),'wOoxJ':function(_0x2e053,_0x50c13c,_0x533a6f){return _0x2e053(_0x50c13c,_0x533a6f);},'mWMZY':function(_0x4273dd,_0x5158dd){return _0x4273dd+_0x5158dd;},'ZFWDf':'Clipb'+'oard\x20'+_0x105055(0xbaa)+_0x105055(0xa8a)+_0x105055(0x6e7)+_0x105055(0x630)+'anel\x20'+_0x105055(0xa22)+'ad','Imwir':_0x105055(0x33e),'vaoHy':'Copy\x20'+_0x105055(0x276)+'d','MVnas':'sk-md'+'esc','sRgwL':function(_0x35da73,_0x1170a0){return _0x35da73+_0x1170a0;},'RPxSN':_0x105055(0x279)+'es','uMGOC':_0x105055(0xa32)+'ed','dPpHf':_0x105055(0xa69)+'plier','YyDGh':_0x105055(0x698)+'ngs','Bhxwe':function(_0x1a4e2a,_0x3dbbd5,_0x33dba6,_0x54095c){return _0x1a4e2a(_0x3dbbd5,_0x33dba6,_0x54095c);},'ptlzp':'butto'+'n','AKuEJ':function(_0x5b4185,_0x3840dd){return _0x5b4185===_0x3840dd;},'xsTOs':_0x105055(0xae4)+'ls','rJmBs':function(_0x2945c5,_0x4df7fc,_0xbf15aa,_0x1fb779){return _0x2945c5(_0x4df7fc,_0xbf15aa,_0x1fb779);},'MvSxr':_0x105055(0xb6d)+_0x105055(0x8fa)+'s\x20acr'+_0x105055(0x696)+_0x105055(0x992)+'dar','EVDAH':function(_0x58a9f2,_0x245e05,_0x2eb2e9){return _0x58a9f2(_0x245e05,_0x2eb2e9);},'LDriP':_0x105055(0x1c6),'hrfVE':function(_0x544bb3,_0x17f0a7,_0x174f0f){return _0x544bb3(_0x17f0a7,_0x174f0f);},'rjBvd':function(_0xb2f149,_0x15347d){return _0xb2f149+_0x15347d;},'AXbaU':'Field'+_0x105055(0xa41)+'iew\x20i'+'s\x20','Igaty':'Scree'+'n-spa'+_0x105055(0x8da)+'xes.\x20'+'The\x20f'+_0x105055(0xae9)+_0x105055(0x6b7)+_0x105055(0x7ca)+_0x105055(0x427)+'be\x20re'+'ad\x20fr'+_0x105055(0x170)+'is\x20bu'+_0x105055(0xb68)+'so\x20it'+'\x20is\x20f'+_0x105055(0x346)+_0x105055(0x904)+_0x105055(0x3b2),'ARcNu':_0x105055(0xa45)+_0x105055(0xa41)+_0x105055(0x4f3),'mXcLo':'Reset'+'\x20view','bKFHB':'fov\x20b'+'ack\x20t'+'o\x2075,'+'\x20offs'+_0x105055(0x3d9)+'lear','lHClu':_0x105055(0x39e)+'n','HIiik':_0x105055(0x553),'GSuNA':function(_0x5eec76,_0x1fa833,_0x38b48f,_0x4ef994){return _0x5eec76(_0x1fa833,_0x38b48f,_0x4ef994);},'wwyFS':_0x105055(0x840)+'era\x20','MsCPZ':_0x105055(0x5f0)+'useLo'+_0x105055(0x3e9)+'t','kEKHF':function(_0x116096,_0x1975d7){return _0x116096+_0x1975d7;},'musaH':function(_0x29235c,_0x3db2df){return _0x29235c+_0x3db2df;},'dYZCS':function(_0x1e82ae,_0x55d553){return _0x1e82ae+_0x55d553;},'brbel':'\x20\x20yaw'+'\x20','VFAJj':function(_0x1a8aef,_0x5dd394){return _0x1a8aef===_0x5dd394;},'Hrtcq':_0x105055(0x8e0),'HZYTw':function(_0x1009ef,_0x246498){return _0x1009ef+_0x246498;},'SBbDW':_0x105055(0x3f9)+_0x105055(0x903)+_0x105055(0x3a3)+_0x105055(0xb94),'xgVWZ':_0x105055(0xb41)+'\x20','NMeuu':'Photo'+'nNetw'+_0x105055(0x3bd)+'nc','ksPYp':function(_0x3da8b4,_0x3c082c){return _0x3da8b4(_0x3c082c);},'yLgdO':_0x105055(0x8b3)+_0x105055(0xb17)+_0x105055(0x5b2)+'u','OSens':function(_0x320461,_0x230b05){return _0x320461(_0x230b05);},'PQAkc':'right','VRBjg':'hKTeI','lJiKa':_0x105055(0xbd2)+'r','xQdnj':function(_0x3fef5a,_0x3e9fe4){return _0x3fef5a+_0x3e9fe4;},'BDuFB':function(_0x1adc6a,_0x547b2d,_0x3f8b7a,_0x398ca5){return _0x1adc6a(_0x547b2d,_0x3f8b7a,_0x398ca5);},'NYuxN':'Healt'+'h','wcOPu':'Healt'+_0x105055(0x18d)+'pt+0x'+'C0','XyXTy':function(_0x3f3377,_0x449d92){return _0x3f3377(_0x449d92);},'KSHMW':_0x105055(0x7a9)+'rning'+'s','fwOeC':'sk-pr'+'e','IjmYd':function(_0x4258bd,_0x19e48d,_0x24fd32){return _0x4258bd(_0x19e48d,_0x24fd32);},'JhVfr':function(_0x33bf13,_0x1660bc){return _0x33bf13===_0x1660bc;},'JmRRE':function(_0x1f6acf,_0x25b744){return _0x1f6acf===_0x25b744;},'eJDQm':'LmVrf','xZWaY':function(_0x1450d2,_0x533ae5){return _0x1450d2-_0x533ae5;},'qVXYx':_0x105055(0x6a7)+_0x105055(0x6cf)+'ixed;'+_0x105055(0xa10)+':12px'+';top:'+_0x105055(0xb80)+_0x105055(0x1cb)+_0x105055(0x3e2)+'47483'+_0x105055(0x186)+'ointe'+_0x105055(0x1d7)+_0x105055(0x1ca)+'one;','xlRnO':_0x105055(0x1c5)+_0x105055(0x247)+'t:non'+_0x105055(0x16e)+'bkit-'+_0x105055(0x1c5)+'selec'+_0x105055(0x334)+'e;','nMhnG':function(_0x316159,_0x34161c){return _0x316159!==_0x34161c;},'axNSn':_0x105055(0x34f),'MgZVr':function(_0x43e696,_0x1d2c79){return _0x43e696+_0x1d2c79;},'hCnoG':'pPyxv','VrkxI':_0x105055(0x485),'bUnDd':function(_0x76fe0){return _0x76fe0();},'XPKcE':'mouse'+'down','Wjmor':'touch'+_0x105055(0x1dd),'LEUqd':'touch'+'move','CfNdd':_0x105055(0x7d6)+'end','laEaS':function(_0x36d88f,_0x1b7703){return _0x36d88f!==_0x1b7703;},'Ypmku':_0x105055(0x9c2),'zzSoK':function(_0x1787d7,_0x1c6e18){return _0x1787d7(_0x1c6e18);},'ULQNq':function(_0x3ad9bd,_0x3d5a0a){return _0x3ad9bd(_0x3d5a0a);},'LbWHn':_0x105055(0x57b),'gPZgB':'sk-la'+'bel','RflTx':'XqErO','rEPyd':_0x105055(0x2d1),'BLMoz':_0x105055(0x7ac),'mmaic':function(_0x1c2c5e,_0x3710ed,_0xcdfe29){return _0x1c2c5e(_0x3710ed,_0xcdfe29);},'kWFRh':_0x105055(0x85b)+'de','Wtbxe':_0x105055(0x2b0)+'go','vIYkF':_0x105055(0x5ed)+'p','egMMo':_0x105055(0x70a),'VtMKq':'Sakur'+'a\x20Ski'+'llWar'+'z','WuxMQ':function(_0x4f91fe,_0x1e2774,_0xa56d90,_0x17add5){return _0x4f91fe(_0x1e2774,_0xa56d90,_0x17add5);},'ArflH':function(_0x51e743,_0xac977f,_0x5d61f3){return _0x51e743(_0xac977f,_0x5d61f3);},'wiZCE':function(_0x13e0eb,_0x4a1988){return _0x13e0eb<_0x4a1988;},'pfxAn':function(_0x318693,_0xce0f44,_0x4ba989,_0x42e808){return _0x318693(_0xce0f44,_0x4ba989,_0x42e808);},'oaaaZ':'%c[sa'+'kura]'+'\x20menu'+'\x20unav'+'ailab'+'le','brIri':function(_0x407228,_0x4498c9){return _0x407228!==_0x4498c9;},'GBprt':function(_0x36f4ef,_0x42be1c){return _0x36f4ef>>>_0x42be1c;},'tOFsE':function(_0x2babb3,_0x3651f0){return _0x2babb3===_0x3651f0;},'eqBPW':function(_0x6fa7c5,_0x5dff0a){return _0x6fa7c5===_0x5dff0a;},'UzdjL':_0x105055(0xbbd),'vDsdz':function(_0x1ab6e3,_0x1b8459){return _0x1ab6e3+_0x1b8459;},'vYkpl':function(_0x233198,_0x3d05d0){return _0x233198!==_0x3d05d0;},'ITgaX':function(_0x4232a5,_0xe8bd40){return _0x4232a5+_0xe8bd40;},'GQhCh':function(_0x19b399,_0x3d6a7c){return _0x19b399+_0x3d6a7c;},'RyfDM':_0x105055(0x926)+_0x105055(0x73b)+'rs\x20','KeZsr':_0x105055(0x2ef)+'ON','juIUF':function(_0x53dc69,_0x2af01a){return _0x53dc69+_0x2af01a;},'wTrlT':function(_0x300ae2,_0x2ad7a4){return _0x300ae2+_0x2ad7a4;},'YATDJ':function(_0x39a336,_0x4db1fd){return _0x39a336(_0x4db1fd);},'VdXDm':function(_0x1aa4db,_0x3b5e54){return _0x1aa4db===_0x3b5e54;},'bxWTm':function(_0x2107f8,_0x49e979){return _0x2107f8(_0x49e979);},'IWyEY':_0x105055(0x2d8)+'ntrol'+'ler+0'+'x2E4','dhhUg':'KtTWu','LcNtv':function(_0x50cd72,_0x4363f6){return _0x50cd72===_0x4363f6;},'tCXBF':function(_0x4c5e38,_0x21f7ba){return _0x4c5e38!==_0x21f7ba;},'IBSQi':function(_0x96675f,_0x5c47b4){return _0x96675f+_0x5c47b4;},'HwFwB':function(_0x5d7893,_0x1be398){return _0x5d7893/_0x1be398;},'GiBAE':function(_0x528719,_0x3c5243){return _0x528719*_0x3c5243;},'fywtb':function(_0x3bef2c,_0x20d72f){return _0x3bef2c!==_0x20d72f;},'cjFIK':_0x105055(0xa5f)+'6a','SnhNx':function(_0x40e0fc,_0x42664f){return _0x40e0fc!==_0x42664f;},'RBpDU':_0x105055(0x5ae),'xNWyx':function(_0x5e70ee,_0x54f383){return _0x5e70ee!==_0x54f383;},'FUizx':function(_0xd42094,_0x4dd660){return _0xd42094<_0x4dd660;},'rFOOQ':function(_0x43c2f6,_0x5535bd){return _0x43c2f6-_0x5535bd;},'aYgDb':function(_0x2d9459,_0x484e46){return _0x2d9459*_0x484e46;},'VkyLo':function(_0x3f7fbe,_0x3512f6){return _0x3f7fbe*_0x3512f6;},'liLQO':'OCqrT','wqNkf':function(_0x124688,_0x1be9e9){return _0x124688+_0x1be9e9;},'ZLJxO':function(_0x2d097d,_0x4a07e9){return _0x2d097d>_0x4a07e9;},'SwHtF':function(_0x2c5ff2,_0x3aba84){return _0x2c5ff2+_0x3aba84;},'GXFbL':function(_0x19d448,_0x22d0a5){return _0x19d448+_0x22d0a5;},'enfVl':function(_0x45a1e2,_0x3eead2,_0x247ba2){return _0x45a1e2(_0x3eead2,_0x247ba2);},'mzuOZ':function(_0x287912,_0x2df95f,_0x2f0acc){return _0x287912(_0x2df95f,_0x2f0acc);},'qhgfo':function(_0x9b67a2,_0x2d7acc){return _0x9b67a2-_0x2d7acc;},'kKNkG':function(_0x4302af,_0x290782){return _0x4302af*_0x290782;},'AUVgX':function(_0x2f81e6,_0x34f91e){return _0x2f81e6/_0x34f91e;},'hNpwt':function(_0x5d2dc3,_0x3e983b){return _0x5d2dc3+_0x3e983b;},'QqYJY':function(_0x380db8,_0x4f2918){return _0x380db8+_0x4f2918;},'CyUjC':'backg'+_0x105055(0x679)+_0x105055(0xa12)+'(21,1'+'2,29,'+_0x105055(0xa38)+'borde'+'r:1px'+_0x105055(0x4c2)+_0x105055(0x55b)+_0x105055(0x63f)+',143,'+'177,.'+_0x105055(0x568)+_0x105055(0xb3d)+_0x105055(0x9bd)+'s:10p'+'x;','zjaFQ':function(_0x1013ab,_0x2f85da){return _0x1013ab+_0x2f85da;},'ufoUU':'#saku'+'ra-es'+'p-lg','TgThN':_0x105055(0x332),'ypwsB':_0x105055(0x5c8),'anwgS':'2|3|0'+_0x105055(0x383)+_0x105055(0x6d1),'FzKLa':'canva'+'s','aOvDL':_0x105055(0x13f),'zWhYa':_0x105055(0x8b5)+_0x105055(0xb9b)+'bal','EScEy':function(_0x13f313,_0x22330d){return _0x13f313===_0x22330d;},'coVTb':_0x105055(0x3f1),'EVwId':function(_0xd0733e,_0x31d601){return _0xd0733e===_0x31d601;},'cLCxg':function(_0x52777a,_0x55bc3e,_0x352e7b,_0x30ceb4,_0x388c2d){return _0x52777a(_0x55bc3e,_0x352e7b,_0x30ceb4,_0x388c2d);},'NGWdL':function(_0x2eb7ec,_0x190531){return _0x2eb7ec/_0x190531;},'AZuYB':function(_0x7a8a9e,_0x56dc13){return _0x7a8a9e+_0x56dc13;},'cROHI':function(_0x2511c3,_0x1a7d8f){return _0x2511c3-_0x1a7d8f;},'qzXhf':_0x105055(0x7cf)+_0x105055(0x8ec)+'10,11'+'6,.95'+')','UJRML':function(_0x9d6dca,_0x446a2b){return _0x9d6dca/_0x446a2b;},'idlQv':function(_0x128b5b,_0x4f0ff6){return _0x128b5b/_0x4f0ff6;},'zuFOg':function(_0x56ef5a,_0x2a802f){return _0x56ef5a+_0x2a802f;},'YVxiX':function(_0x56c379,_0xd01b13){return _0x56c379+_0xd01b13;},'TUROL':_0x105055(0x9f5)+_0x105055(0xa73)+_0x105055(0x153)+'n\x20SEE'+'N\x20by\x20'+_0x105055(0x7f4)+_0x105055(0x7da)+'apply'+_0x105055(0x59e)+'\x20','gfkFC':_0x105055(0x2f0)+_0x105055(0x73a)+'durin'+_0x105055(0x894)+_0x105055(0x6f7)+_0x105055(0xb28)+_0x105055(0x6df)+_0x105055(0x82b)+_0x105055(0x6bf)+_0x105055(0x4f0)+_0x105055(0x70d)+_0x105055(0x956)+'n.hoo'+'ks.le'+_0x105055(0x640)+'\x20','JNaoz':function(_0x3c523a,_0x3645c6){return _0x3c523a+_0x3645c6;},'qAwhw':_0x105055(0xa6c)+'resol'+'ved\x20','lvveJ':function(_0xdb19b5,_0x20bfab){return _0xdb19b5*_0x20bfab;},'rtyAV':function(_0x2c071b,_0x3f80a1){return _0x2c071b+_0x3f80a1;},'kdYQR':function(_0x5185f1,_0x4a186d){return _0x5185f1+_0x4a186d;},'iZdYW':'OueCB','FBPGz':function(_0x4976ff,_0x3861c2){return _0x4976ff<=_0x3861c2;},'gvJye':_0x105055(0x5c2),'vCKgB':function(_0x50f48c,_0x2a05a3){return _0x50f48c/_0x2a05a3;},'ozeFG':function(_0x4db9d4,_0x3070e0){return _0x4db9d4-_0x3070e0;},'JAsru':_0x105055(0x60f),'slbNU':_0x105055(0x90f),'tZCmf':'uxyfH','zbdMX':function(_0x4ea681,_0x28752f,_0x1a31dc,_0x315cd5){return _0x4ea681(_0x28752f,_0x1a31dc,_0x315cd5);},'hPrwg':function(_0x3bfbb4,_0x5913a4){return _0x3bfbb4===_0x5913a4;},'eLffM':function(_0x3be483,_0x228cd8){return _0x3be483===_0x228cd8;},'IZoiQ':function(_0x70373b,_0x4f104f){return _0x70373b>_0x4f104f;},'vixLr':function(_0x2ab40b,_0x1bfef5){return _0x2ab40b*_0x1bfef5;},'QYiVy':function(_0x54a461,_0x4cd9b2){return _0x54a461/_0x4cd9b2;},'UWLqp':function(_0x2c1249,_0x2ee973){return _0x2c1249+_0x2ee973;},'ligdv':'rbUWG','dgPKC':function(_0x29d8de,_0x27973e){return _0x29d8de+_0x27973e;},'AwNxs':function(_0x48cf82,_0x240d97){return _0x48cf82+_0x240d97;},'ecirC':_0x105055(0x9a8),'DcaGY':_0x105055(0x8b6),'UFvLR':function(_0x2b47c6,_0x505e17){return _0x2b47c6+_0x505e17;},'hbQPB':function(_0x7c19e3,_0x5cc49b){return _0x7c19e3!==_0x5cc49b;},'fNwcu':_0x105055(0x922),'SvtxF':_0x105055(0x32e),'ediaP':_0x105055(0x8e4),'ZXwTs':_0x105055(0xb14)+_0x105055(0x726)+'5|0|2'+_0x105055(0x3d6)+'|12|9'+'|17|7'+'|4|14'+'|11|1'+'3|5','wRLAH':_0x105055(0xb3c)+_0x105055(0x7fb),'jTwqT':function(_0x2a17d5){return _0x2a17d5();},'FOttk':function(_0x4ffc29){return _0x4ffc29();},'gSuGh':'kRoXc','ITDqk':function(_0xd9894c,_0xc075d7,_0x5c930c){return _0xd9894c(_0xc075d7,_0x5c930c);},'GYozs':function(_0x27b7d4,_0x507eec){return _0x27b7d4/_0x507eec;},'NvXkh':function(_0x8ad888){return _0x8ad888();},'rBwlX':function(_0x309a8a,_0x20b23b){return _0x309a8a+_0x20b23b;},'oPOhu':function(_0x1e9661){return _0x1e9661();},'SmhfW':function(_0x124ab1,_0x538d36){return _0x124ab1!==_0x538d36;},'wnrTX':'WqfgK','xKpMk':function(_0x34d0b6){return _0x34d0b6();},'qrDqN':'UWMK\x20'+'armin'+_0x105055(0xa7f)+'led:\x20','afcGJ':function(_0x3093bf,_0x76a4c8){return _0x3093bf===_0x76a4c8;},'GsZNl':function(_0x4741df,_0x54068f){return _0x4741df+_0x54068f;},'XabcU':_0x105055(0x373)+'ad\x20fa'+'iled,'+_0x105055(0x6a0)+'very\x20'+'offse'+_0x105055(0x4fb)+'\x20skip'+_0x105055(0x1f1)+_0x105055(0x7de)+'e.','sEDYH':function(_0x1bc2ee,_0x28686f){return _0x1bc2ee===_0x28686f;},'UlZlj':function(_0x354424,_0x34ed93){return _0x354424+_0x34ed93;},'FgZSA':'the\x20g'+_0x105055(0x378)+_0x105055(0xaf1)+_0x105055(0x15c)+'ne\x20ho'+_0x105055(0x877)+_0x105055(0x26d)+_0x105055(0xa39)+'haned'+'.\x20Dis'+_0x105055(0x4a7)+_0x105055(0x8b3)+'\x20othe'+'r\x20','MOuIF':_0x105055(0x965)+_0x105055(0x6ed)+_0x105055(0x5de)+_0x105055(0x178)+_0x105055(0x58a)+_0x105055(0x8bc)+'nkey\x20'+_0x105055(0x585)+_0x105055(0x72e)+_0x105055(0x3fb)+'.','mhSFz':_0x105055(0x3e1),'TMGJs':function(_0x220e0b,_0x1fe1e8){return _0x220e0b+_0x1fe1e8;},'vTiuW':_0x105055(0x9f3)+_0x105055(0x821)+'diffe'+_0x105055(0xbab)+_0x105055(0xa4e)+_0x105055(0x989)+'stanc'+'e\x20tha'+'n\x20the'+_0x105055(0x8ee)+_0x105055(0x5d4)+'w\x20exp'+'oses.','fWlqH':function(_0x327d0b,_0x481dfe){return _0x327d0b+_0x481dfe;},'wAIjV':function(_0x5e52bd,_0x358485){return _0x5e52bd+_0x358485;},'oIaXN':function(_0x1a7613,_0x6d55b9){return _0x1a7613+_0x6d55b9;},'VOOLV':function(_0x3adbdb,_0x38b466){return _0x3adbdb+_0x38b466;},'WmKES':_0x105055(0x77f)+_0x105055(0x528)+_0x105055(0x194)+'t\x20','euLRh':'\x20and\x20'+_0x105055(0x177)+_0x105055(0x3a0)+_0x105055(0xbc4),'GdSOa':function(_0x2d93ea,_0x5d4f67){return _0x2d93ea+_0x5d4f67;},'QsXli':'Heap\x20'+'reads'+_0x105055(0x424)+_0x105055(0x419)+'ked\x20u'+_0x105055(0x5a7)+'a\x20gam'+_0x105055(0xbb2)+_0x105055(0xaeb)+'ith\x20M'+_0x105055(0x62a)+'.HEAP'+_0x105055(0x1ae)+_0x105055(0x784)+'hable'+'.','ylxjm':'windo'+'w.Uni'+'tyWeb'+'Modki'+_0x105055(0x364)+'ueWra'+_0x105055(0x22a)+_0x105055(0x4b0)+_0x105055(0x668)+'\x20-\x20ca'+_0x105055(0x58b)+_0x105055(0x20c)+'unnin'+'g\x20bli'+_0x105055(0x833),'PVxob':_0x105055(0x395),'ZKRgP':function(_0x4a6da0,_0x38e39d){return _0x4a6da0+_0x38e39d;},'gpnwg':function(_0x5309ed,_0x2bc1c2){return _0x5309ed+_0x2bc1c2;},'BRfWU':_0x105055(0x990),'HYalG':'Regis'+_0x105055(0x6bc)+'\x20','UwUkI':function(_0x568d2e,_0xd99453){return _0x568d2e+_0xd99453;},'HRIzK':function(_0x410249,_0x7561e0){return _0x410249+_0x7561e0;},'TYBdP':'Hooks'+'\x20are\x20'+_0x105055(0xa6f)+_0x105055(0x66c)+'t\x20no\x20'+'FPSco'+'ntrol'+_0x105055(0xb25)+'as\x20fi'+_0x105055(0xa21)+_0x105055(0x873),'RpAWO':'Eithe'+_0x105055(0x31f)+_0x105055(0x81a)+'not\x20i'+'n\x20a\x20r'+_0x105055(0x95e)+'\x20or\x20t'+'he\x20ho'+_0x105055(0x686)+'\x20on\x20t'+'he\x20wr'+_0x105055(0x1b5)+_0x105055(0x9ab)+_0x105055(0x920),'ygsip':function(_0x327bb4,_0x4300b0){return _0x327bb4(_0x4300b0);},'ylbIa':function(_0x3dce4b,_0x20466d){return _0x3dce4b!==_0x20466d;},'XpPrD':function(_0x4bbc3b){return _0x4bbc3b();},'PzikP':function(_0x46df03,_0x1f4935){return _0x46df03!==_0x1f4935;},'BYenS':'AbKwJ','dAsFV':_0x105055(0x19c)+'ER\x20UW'+'MK\x20CO'+_0x105055(0x7fa)+_0x105055(0x7b3)+_0x105055(0x167)+_0x105055(0x65a)+_0x105055(0x41e)+_0x105055(0x16d)+_0x105055(0x8ad)+_0x105055(0x7da)+_0x105055(0xa4e)+_0x105055(0x7b0)+_0x105055(0x7c1)+'d\x20was'+'\x20','QHdBu':_0x105055(0x9d4)+'l','wCrDG':_0x105055(0x2c0)+'b1','dDTeh':'__sak'+_0x105055(0x8ef)+_0x105055(0x986),'EdCYX':_0x105055(0x3d4)+'KURA-'+_0x105055(0xa68)+_0x105055(0x783)+_0x105055(0x3a5)+'===','ucoQu':_0x105055(0x32d),'XnFAc':function(_0x3241a9,_0x3f731c){return _0x3241a9+_0x3f731c;},'TTvnF':function(_0x51c2bc,_0x4a3476){return _0x51c2bc+_0x4a3476;},'rgMZD':';font'+_0x105055(0xbd5)+_0x105055(0x854)+'0','kQzcT':'sakur'+_0x105055(0x2cd)+_0x105055(0x807)+'-hidd'+'en','QZAoI':_0x105055(0x80b)+'ge','ZEhKa':function(_0x43d10a){return _0x43d10a();},'tdWnu':'%c[sa'+'kura]'+'\x20SW-P'+'LAYER'+'\x20ACTI'+_0x105055(0xa62),'wNhQf':_0x105055(0x1be)+_0x105055(0xbd5)+'ht:70'+'0;fon'+'t-siz'+_0x105055(0x8c1)+'x','ncxiV':_0x105055(0x909)+'nMana'+_0x105055(0xaa1),'DszAS':'GG_Ga'+'meMan'+_0x105055(0x3de),'fYoeJ':'Enemy'+_0x105055(0xc02),'akvUM':'Assem'+_0x105055(0x5cf)+'Sharp'+'-firs'+_0x105055(0x224)+'.dll','TcHNP':_0x105055(0xb5b)+'cofor'+_0x105055(0xa4f)+'cal.d'+'ll','nyMvs':'__Gen'+'erate'+'d','OmNmg':_0x105055(0x65c),'SbwSU':'photo'+'nView','temSh':_0x105055(0x670)+_0x105055(0x250),'sHzfd':_0x105055(0x2af),'HVfZv':'capsu'+'le','IPPPq':'0xd0','QWBeH':_0x105055(0x1eb),'aPlba':_0x105055(0xb6e)+'tHeal'+_0x105055(0x62f),'YwLNe':'0x58','LqCQm':_0x105055(0x624),'NODZe':_0x105055(0x2b6)+'Flag','gnzCI':_0x105055(0x9b8)+'wn','Tqqxh':'sakur'+'a-sw-'+'fov','SLNtw':_0x105055(0x52b)+'s','QTULt':_0x105055(0xb03),'dEQoV':_0x105055(0x71b),'ylhid':function(_0x3ab57b,_0x9415d9){return _0x3ab57b+_0x9415d9;},'gOzzl':function(_0x470b58,_0x1e1b82){return _0x470b58+_0x1e1b82;},'eXHyy':function(_0x18c241,_0x14695b){return _0x18c241+_0x14695b;},'NNJyp':function(_0x534727,_0x11df70){return _0x534727+_0x11df70;},'QDuyQ':function(_0x3ff077,_0x1a389f){return _0x3ff077+_0x1a389f;},'ZNTrI':function(_0x1fff29,_0x2fd5ec){return _0x1fff29+_0x2fd5ec;},'KyeYu':function(_0x4069f5,_0x223f5c){return _0x4069f5+_0x223f5c;},'NqbVj':function(_0x12a2a3,_0x512624){return _0x12a2a3+_0x512624;},'hcgwu':function(_0x8ddeb5,_0x65a782){return _0x8ddeb5+_0x65a782;},'WQDTf':function(_0x5b57a2,_0x2fcaba){return _0x5b57a2+_0x2fcaba;},'zPXcr':_0x105055(0x991)+'ra-me'+'nu-ro'+'ot{al'+_0x105055(0xad0)+_0x105055(0xaf8),'UWAOT':'opaci'+_0x105055(0x347)+'trans'+_0x105055(0x65f)+'trans'+'lateY'+'(18px'+_0x105055(0x917)+_0x105055(0x5f7)+'event'+'s:non'+_0x105055(0x43b)+'nsiti'+_0x105055(0x3dc)+_0x105055(0x786)+'\x20.35s'+_0x105055(0x1b6)+_0x105055(0x732)+_0x105055(0x70e)+_0x105055(0x1e4)+_0x105055(0x6f8)+'c-bez'+_0x105055(0x3f4)+_0x105055(0x420)+'.36,1'+');','DMVeo':'.mn-l'+_0x105055(0xb86)+'ispla'+'y:gri'+_0x105055(0x5d0)+_0x105055(0x1f3)+_0x105055(0xb46)+'enter'+_0x105055(0x483)+'h:32p'+_0x105055(0x58f)+'ght:3'+_0x105055(0x3db)+_0x105055(0x6a9)+'-bott'+_0x105055(0x2cb)+'x;}','iBoHc':_0x105055(0x323)+_0x105055(0x679)+_0x105055(0x81c)+'spare'+_0x105055(0x40d)+'lor:r'+'gba(2'+'46,23'+_0x105055(0x617)+_0x105055(0x609)+'curso'+'r:poi'+'nter;'+_0x105055(0x811)+_0x105055(0x801)+'10px;'+'font-'+_0x105055(0x7e4)+_0x105055(0x2ee)+';font'+_0x105055(0x4e2)+'ly:in'+_0x105055(0x259)+';}','UMaXt':'.mn-t'+_0x105055(0x35e)+_0x105055(0x7ee)+'color'+':#ff6'+'b9d;b'+'ackgr'+_0x105055(0xb1b)+_0x105055(0x7cf)+'255,1'+'07,15'+'7,.1)'+';}','yRvSv':_0x105055(0x43c)+_0x105055(0x830)+_0x105055(0x5d6)+_0x105055(0x484)+'width'+':0;di'+_0x105055(0x5d2)+_0x105055(0x79a)+_0x105055(0x43f)+'-dire'+_0x105055(0x596)+':colu'+'mn;}','aVbbL':_0x105055(0xa52)+_0x105055(0x76f)+_0x105055(0x152)+':1;mi'+'n-wid'+_0x105055(0x638)+'}','XuyeI':_0x105055(0x281)+_0x105055(0x4bc)+_0x105055(0x4fa)+'ay:gr'+_0x105055(0x578)+_0x105055(0x163)+_0x105055(0x2ed)+_0x105055(0x9bb)+'r;wid'+_0x105055(0x456)+_0x105055(0x78b)+_0x105055(0x168)+'28px;'+_0x105055(0x823)+'r:0;b'+_0x105055(0x9c3)+'-radi'+_0x105055(0x8a8)+_0x105055(0x4fd)+_0x105055(0x477)+'nd:tr'+_0x105055(0x782)+'rent;','NNHaV':_0x105055(0x281)+_0x105055(0x7bf)+'hover'+_0x105055(0x8e8)+_0x105055(0x4f4)+_0x105055(0x5e9)+_0x105055(0x985)+_0x105055(0x81b)+_0x105055(0x63f)+_0x105055(0x66b)+_0x105055(0xa2b)+_0x105055(0x792),'uMmxb':_0x105055(0x281)+'ols::'+_0x105055(0xa85)+_0x105055(0x2f4)+_0x105055(0x94e)+_0x105055(0x91c)+_0x105055(0x49e)+_0x105055(0x729)+_0x105055(0xb1b)+'rgba('+'255,2'+_0x105055(0xb2a)+'5,.08'+_0x105055(0x38b)+_0x105055(0x48d)+'adius'+_0x105055(0x979)+'}','dupSo':_0x105055(0x237)+'ard{b'+'order'+'-radi'+_0x105055(0x7e7)+_0x105055(0x791)+'ckgro'+'und:r'+'gba(2'+_0x105055(0xb2a)+_0x105055(0x860)+_0x105055(0x3c2)+');box'+'-shad'+_0x105055(0x9b0)+_0x105055(0x98c)+'\x200\x200\x20'+_0x105055(0x1ec)+_0x105055(0x34c)+_0x105055(0xb2a)+_0x105055(0x860)+',.05)'+';}','nhXaI':_0x105055(0x237)+_0x105055(0xab2)+_0x105055(0xa9a)+_0x105055(0x8df)+_0x105055(0x3a1)+'-widt'+'h:0;}','jjsvc':'.sk-c'+_0x105055(0xab2)+_0x105055(0x376)+_0x105055(0x400)+_0x105055(0x750)+'t-siz'+_0x105055(0x5a3)+_0x105055(0x41a)+_0x105055(0x24f)+'ght:6'+'00;co'+'lor:r'+_0x105055(0x34c)+'46,23'+'8,242'+',.45)'+';}','hVtjH':'.sk-c'+_0x105055(0x8a5)+'n\x20.sk'+_0x105055(0x59c)+'-titl'+_0x105055(0xab0)+'ong{c'+_0x105055(0xb62)+_0x105055(0x659)+_0x105055(0x8c9),'XGDin':'.sk-s'+_0x105055(0x15e)+_0x105055(0xb8b)+_0x105055(0x4a9)+_0x105055(0x47c)+'ive;w'+'idth:'+'26px;'+_0x105055(0x171)+'t:14p'+_0x105055(0x331)+_0x105055(0x4c0)+_0x105055(0x960)+_0x105055(0x20b)+_0x105055(0x132)+_0x105055(0x85d)+'backg'+_0x105055(0x679)+':rgba'+_0x105055(0x2ff)+_0x105055(0xa34)+_0x105055(0x6a2)+_0x105055(0x5bd)+_0x105055(0x328)+_0x105055(0x9c1)+_0x105055(0xb2b)+'ex:no'+_0x105055(0xacb),'NADoO':_0x105055(0xa83)+'witch'+_0x105055(0x255)+'er{co'+_0x105055(0x567)+':\x22\x22;p'+_0x105055(0x252)+'on:ab'+'solut'+'e;top'+':3px;'+_0x105055(0x99c)+_0x105055(0xbaf)+'idth:'+'8px;h'+'eight'+_0x105055(0x2ad)+_0x105055(0x823)+_0x105055(0x709)+_0x105055(0x5b1)+_0x105055(0x3bb),'mCeOh':_0x105055(0x377)+'ange{'+'displ'+'ay:fl'+_0x105055(0x3ca)+'ign-i'+'tems:'+'cente'+_0x105055(0x43d)+_0x105055(0x2ad)+'}','hMnID':_0x105055(0x323)+'round'+':line'+_0x105055(0x974)+_0x105055(0x5a5)+'t(#ff'+'6b9d,'+'#ff6b'+_0x105055(0x824)+'\x200\x20/\x20'+_0x105055(0x70f)+_0x105055(0x8ca)+'%)\x2010'+'0%\x20no'+'-repe'+'at,rg'+'ba(25'+_0x105055(0x860)+_0x105055(0x66b)+_0x105055(0xa0b)+'}','WfLMo':_0x105055(0x64a)+_0x105055(0x5bf)+'nt-si'+'ze:11'+_0x105055(0x25f)+'nt-we'+_0x105055(0x168)+'600;m'+'in-wi'+'dth:3'+_0x105055(0x19b)+_0x105055(0x6b9)+_0x105055(0x981)+_0x105055(0xa10)+_0x105055(0x1fc)+_0x105055(0xc0a)+'a(246'+_0x105055(0x584)+'242,.'+'8);}','SIWTM':'.sk-n'+_0x105055(0x7b9)+'rr{co'+_0x105055(0x45a)+_0x105055(0x24e)+_0x105055(0x973),'QgYFC':_0x105055(0x8cb)+_0x105055(0x473)+_0x105055(0x7a3)+'elf:f'+_0x105055(0x63d)+_0x105055(0x46e)+_0x105055(0x823)+_0x105055(0xa7e)+'order'+_0x105055(0x169)+_0x105055(0x8a8)+_0x105055(0x7df)+_0x105055(0x3f2)+_0x105055(0x6d5)+'6px;b'+_0x105055(0x729)+'ound:'+_0x105055(0x8bd)+_0x105055(0x9e6)+_0x105055(0x45a)+_0x105055(0x326),'fdYrB':_0x105055(0x8cb)+'tn:ho'+'ver{f'+_0x105055(0x6a8)+_0x105055(0xa70)+'htnes'+'s(1.1'+_0x105055(0x2a8),'vTSxp':'#saku'+_0x105055(0x959)+_0x105055(0x6fe)+'ositi'+'on:fi'+_0x105055(0xb85)+_0x105055(0xb18)+'px;ri'+_0x105055(0x447)+'2px;z'+_0x105055(0x2cc)+_0x105055(0x3ae)+_0x105055(0x92a)+'46;cu'+_0x105055(0x328)+_0x105055(0x9c1)+_0x105055(0x6c9)+_0x105055(0x1d4)+_0x105055(0x28a)+_0x105055(0x369)+':26px'+';opac'+_0x105055(0x914)+'28;','MErNE':'<svg\x20'+_0x105055(0x6d9)+_0x105055(0x8e2)+'\x200\x2024'+_0x105055(0x842)+'<path'+_0x105055(0xa03)+'12\x2021'+'c-1.5'+_0x105055(0x120)+'4-4.5'+_0x105055(0xb7e)+_0x105055(0x66e)+'.5\x201.'+'8-4.5'+_0x105055(0x56f)+_0x105055(0x623)+'\x204\x204.'+'5c0\x203'+'-2.5\x20'+_0x105055(0x591)+'.5z\x22\x20','IoCEa':'<svg\x20'+_0x105055(0x269)+_0x105055(0xb3f)+_0x105055(0xbc0)+'svg\x22\x20'+'viewB'+_0x105055(0x8e2)+_0x105055(0x211)+'\x2024\x22>'+'<path'+'\x20d=\x22M'+'12\x2021'+_0x105055(0xa1c)+_0x105055(0x120)+'4-4.5'+_0x105055(0xb7e)+'5\x200-2'+_0x105055(0x197)+_0x105055(0x94b)+_0x105055(0x56f)+'5s4\x202'+_0x105055(0x45d)+_0x105055(0x398)+'-2.5\x20'+_0x105055(0x591)+'.5z\x22\x20','MCxaV':'<circ'+_0x105055(0xb44)+_0x105055(0x388)+'\x20cy=\x22'+'10\x22\x20r'+'=\x221.2'+'\x22\x20fil'+'l=\x22#f'+'f6b9d'+'\x22/></'+_0x105055(0x905),'VZpnq':function(_0x34f2f3,_0x406f39){return _0x34f2f3!==_0x406f39;}};var _0x3232e3=location[_0x105055(0x26b)+'ame']||'',_0x1b53e1=/(^|\.)www\.crazygames\.com$/[_0x105055(0xa8f)](_0x3232e3),_0x5cf386=/(^|\.)games\.crazygames\.com$/['test'](_0x3232e3),_0x245b35=/(^|\.)crazygames\.com$/['test'](_0x3232e3)&&!_0x1b53e1&&!_0x5cf386,_0x36470f=_0x1b53e1?_0x4436f2['QHdBu']:_0x5cf386?_0x105055(0x439)+'er':'playe'+'r';if(!_0x1b53e1&&!_0x5cf386&&!_0x245b35)return;var _0x237331=_0x4436f2['wCrDG'],_0x58b1c6=_0x4436f2['dDTeh'],_0x4f70e9=_0x4436f2['EdCYX'],_0x296cf3='===SA'+_0x105055(0x3a7)+_0x105055(0xa68)+_0x105055(0x783)+'END=='+'=',_0x3838a0=_0x4436f2['ucoQu'];if(_0x5cf386){window[_0x105055(0x89d)+'entLi'+'stene'+'r'](_0x105055(0x80b)+'ge',function(_0x3ea2bc){var _0x26d722=_0x105055;if('tybTW'!==_0x4436f2[_0x26d722(0x8b2)]){var _0x735dd5=_0x3ea2bc['data'];if(!_0x735dd5||_0x735dd5[_0x26d722(0x73e)+_0x26d722(0x9da)]!==_0x58b1c6)return;try{if(window['paren'+'t']&&_0x4436f2[_0x26d722(0xac3)](window['paren'+'t'],window))window[_0x26d722(0x765)+'t'][_0x26d722(0x913)+_0x26d722(0x30d)+'e'](_0x735dd5,'*');if(window['top']&&_0x4436f2[_0x26d722(0x7f2)](window[_0x26d722(0x3d5)],window))window['top']['postM'+_0x26d722(0x30d)+'e'](_0x735dd5,'*');}catch(_0x186547){}if(_0x735dd5&&_0x735dd5[_0x26d722(0x6f6)]===_0x26d722(0xa3b))try{var _0x15f70a=document[_0x26d722(0x68d)+_0x26d722(0xaca)+_0x26d722(0x7a8)+'l'](_0x4436f2['qYvTn']);for(var _0x195c23=-0xfc3*0x2+0x25a3*0x1+-0x61d;_0x195c23<_0x15f70a['lengt'+'h'];_0x195c23++){try{if(_0x15f70a[_0x195c23][_0x26d722(0x426)+'ntWin'+_0x26d722(0x514)])_0x15f70a[_0x195c23]['conte'+_0x26d722(0x2c8)+'dow'][_0x26d722(0x913)+_0x26d722(0x30d)+'e'](_0x735dd5,'*');}catch(_0x3203ec){}}}catch(_0x5124d5){}}else return _0x3aedef[_0x26d722(0x2e9)];}),console['log']('%c[sa'+'kura]'+'\x20SW-W'+_0x105055(0x244)+'R\x20ACT'+'IVE\x20('+_0x105055(0x405)+'\x20up+d'+_0x105055(0x201),_0x4436f2[_0x105055(0x213)]('color'+':',_0x237331));return;}if(_0x1b53e1){console[_0x105055(0xb03)]('%c[sa'+'kura]'+_0x105055(0x9b3)+'AL\x20AC'+_0x105055(0x8f6),_0x4436f2['XnFAc'](_0x4436f2[_0x105055(0x490)](_0x105055(0x4b3)+':',_0x237331),_0x4436f2[_0x105055(0x970)]),{'host':_0x3232e3});var _0x16244d={'set':function(){},'command':function(){}};function _0x16835d(_0x49a4b8,_0x136d05){var _0x3ceba9=_0x105055,_0x2576cb={'QJdXD':_0x4436f2['lWjkO'],'tCBmp':function(_0x15776f,_0x3571d3,_0x2662cf,_0x484904){return _0x15776f(_0x3571d3,_0x2662cf,_0x484904);}},_0x7b3a8a={'__sakura':_0x58b1c6,'kind':_0x4436f2[_0x3ceba9(0x1bd)],'cmd':_0x49a4b8,'arg':_0x136d05};try{var _0x1e25e0=document['query'+_0x3ceba9(0xaca)+'torAl'+'l'](_0x4436f2['qYvTn']);for(var _0x5d6f6f=-0xa1b*-0x1+-0x1457*-0x1+0x1e72*-0x1;_0x4436f2[_0x3ceba9(0x2e0)](_0x5d6f6f,_0x1e25e0[_0x3ceba9(0xb7c)+'h']);_0x5d6f6f++){try{if(_0x1e25e0[_0x5d6f6f][_0x3ceba9(0x426)+'ntWin'+'dow'])_0x1e25e0[_0x5d6f6f][_0x3ceba9(0x426)+'ntWin'+'dow'][_0x3ceba9(0x913)+_0x3ceba9(0x30d)+'e'](_0x7b3a8a,'*');}catch(_0x594cd4){}}}catch(_0x8c4b20){}try{if(_0x4436f2[_0x3ceba9(0xac3)](_0x4436f2['bLzyT'],_0x4436f2[_0x3ceba9(0x5c4)])){var _0xb03a0a=new BroadcastChannel(_0x4436f2[_0x3ceba9(0x772)]);_0xb03a0a[_0x3ceba9(0x913)+_0x3ceba9(0x30d)+'e'](_0x7b3a8a),_0x4436f2[_0x3ceba9(0xb0b)](setTimeout,function(){try{_0xb03a0a['close']();}catch(_0x372ec1){}},0x30*0x3+-0x1ea3+0x1f0d);}else{var _0x2a3727=_0x2576cb[_0x3ceba9(0x90b)]['split']('|'),_0x520e4a=0xdc*-0x19+-0x1c1c+0x3198;while(!![]){switch(_0x2a3727[_0x520e4a++]){case'0':_0x1d97c0['o']=_0x304c50;continue;case'1':_0x1d97c0['k']=_0x544ccc;continue;case'2':return _0x134fba['rows'][0x1*0x115a+0x2513+-0x366d];case'3':if(!_0x134fba['rows']['lengt'+'h'])return null;continue;case'4':var _0x1d97c0=_0x2576cb['tCBmp'](_0x587fd3,_0xcd86e0,_0x56ef67,_0x47f086);continue;case'5':if(!_0x1d97c0)return null;continue;case'6':var _0x134fba=_0x461826([_0x1d97c0]);continue;}break;}}}catch(_0x2f6d1f){}}var _0x3ec971=_0x4436f2[_0x105055(0xafe)];function _0x4b0d0e(){var _0x355330=_0x105055,_0xdd15f4={'eLnHd':function(_0x52635c,_0x4e7a0c){return _0x52635c+_0x4e7a0c;},'suyAc':function(_0x37100a,_0x2e5ae3){return _0x4436f2['QAasX'](_0x37100a,_0x2e5ae3);},'IIKdT':_0x355330(0x2db)+_0x355330(0x7c1)+_0x355330(0x8dd),'qBuGr':_0x4436f2[_0x355330(0x86d)]};try{if(_0x4436f2[_0x355330(0x911)]!==_0x4436f2[_0x355330(0x273)])return localStorage[_0x355330(0x93c)+'em'](_0x3ec971)==='1';else _0x549967=_0xdd15f4[_0x355330(0x611)](_0xdd15f4['suyAc'](_0xdd15f4[_0x355330(0x9ea)],_0x4b7205),'s'),_0x5b20bf=_0xdd15f4['qBuGr'];}catch(_0x55036c){return![];}}function _0x1e196a(_0x229406){var _0x27ad34=_0x105055,_0x3892cd={'vrLGb':function(_0x551814,_0x45597a){return _0x551814!==_0x45597a;},'mytiD':function(_0x5aded5,_0x10e3a5){return _0x4436f2['vWhqj'](_0x5aded5,_0x10e3a5);},'jkRcv':_0x4436f2[_0x27ad34(0x1bd)],'aEjXd':function(_0x350f0c,_0x1b1ddc,_0xa5bb0){return _0x350f0c(_0x1b1ddc,_0xa5bb0);}};try{_0x229406?localStorage[_0x27ad34(0xbc5)+'em'](_0x3ec971,'1'):localStorage[_0x27ad34(0x547)+_0x27ad34(0x196)](_0x3ec971);}catch(_0x4371e5){}try{var _0x40c553=document[_0x27ad34(0xa7d)+_0x27ad34(0x78c)+'ById'](_0x4436f2['QgCJV']);if(_0x40c553)_0x40c553['remov'+'e']();}catch(_0x1003e6){}try{if(_0x4436f2[_0x27ad34(0x9a0)]!=='TOXHw'){var _0x1db3f4=document[_0x27ad34(0xa7d)+_0x27ad34(0x78c)+'ById'](_0x4436f2[_0x27ad34(0xbeb)]);if(_0x229406&&!_0x1db3f4&&document[_0x27ad34(0xbdf)]){var _0x41060c=document[_0x27ad34(0x4c9)+'eElem'+_0x27ad34(0x803)]('div');_0x41060c['id']=_0x27ad34(0x993)+_0x27ad34(0x2cd)+_0x27ad34(0xbb5)+'b',_0x41060c['style']['cssTe'+'xt']=_0x4436f2[_0x27ad34(0x798)](_0x4436f2['mWQOS'](_0x27ad34(0x6a7)+_0x27ad34(0x6cf)+_0x27ad34(0x746)+'left:'+'12px;'+'top:1'+_0x27ad34(0x1b8)+_0x27ad34(0x2cc)+_0x27ad34(0x3ae)+_0x27ad34(0x697)+_0x27ad34(0x24b)+_0x27ad34(0x328)+_0x27ad34(0x9c1)+_0x27ad34(0x633)+_0x27ad34(0x73f)+'lect:'+'none;'+('backg'+'round'+_0x27ad34(0xa12)+'(21,1'+_0x27ad34(0x878)+_0x27ad34(0xbe8)+'order'+_0x27ad34(0xc00)+_0x27ad34(0x183)+'\x20rgba'+'(255,'+_0x27ad34(0x493)+'77,.5'+');col'+'or:')+_0x237331,';'),'borde'+_0x27ad34(0x709)+'ius:9'+_0x27ad34(0x85d)+'paddi'+'ng:4p'+'x\x2012p'+'x;fon'+'t:11p'+_0x27ad34(0x61b)+_0x27ad34(0x9fc)+'onosp'+_0x27ad34(0x21a)+'onsol'+_0x27ad34(0xa3a)+'nospa'+_0x27ad34(0xa55)),_0x41060c['textC'+_0x27ad34(0x14e)+'t']=_0x4436f2[_0x27ad34(0x92d)],_0x41060c[_0x27ad34(0x912)+'ck']=function(){var _0x17d4b8=_0x27ad34;if(_0x4436f2['nqixW'](_0x4436f2[_0x17d4b8(0xbdd)],_0x17d4b8(0x8fd)))return _0x69d8a0[_0x17d4b8(0x8be)];else _0x1e196a(![]),_0x3dcafd();},document['body'][_0x27ad34(0x48e)+_0x27ad34(0x635)+'d'](_0x41060c);}else{if(!_0x229406&&_0x1db3f4){if(_0x4436f2[_0x27ad34(0x472)]==='ibQZy')try{var _0x2368a4=_0x2dc4c7&&_0x56b38e['data'];if(!_0x2368a4||_0x3892cd['vrLGb'](_0x2368a4[_0x27ad34(0x73e)+_0x27ad34(0x9da)],_0x1a7fd8)||_0x3892cd['mytiD'](_0x2368a4[_0x27ad34(0x6f6)],_0x3892cd['jkRcv']))return;_0x3892cd['aEjXd'](_0x283104,_0x2368a4[_0x27ad34(0xa3b)],_0x2368a4['arg']);}catch(_0x107d27){}else _0x1db3f4['remov'+'e']();}}}else return _0x4436f2['RlMDm'](_0x57c987['type'],_0x500db2);}catch(_0x344215){}}function _0xe912ab(){var _0x4243e3=_0x105055;if(_0x4436f2[_0x4243e3(0x3f3)](_0x4b0d0e))return null;var _0x233854=document['getEl'+_0x4243e3(0x78c)+_0x4243e3(0x2ae)](_0x4436f2['QgCJV']);if(_0x233854)return _0x233854;if(!document[_0x4243e3(0xbdf)]||!document['body']['appen'+'dChil'+'d'])return null;try{var _0x27c18c=(_0x4243e3(0x131)+_0x4243e3(0x5e2))['split']('|'),_0x45fb2d=0x1538+-0x1f2f+0x1*0x9f7;while(!![]){switch(_0x27c18c[_0x45fb2d++]){case'0':document[_0x4243e3(0xbdf)]['appen'+_0x4243e3(0x635)+'d'](_0x233854);continue;case'1':return _0x233854;case'2':_0x233854=document[_0x4243e3(0x4c9)+_0x4243e3(0x64c)+'ent'](_0x4436f2[_0x4243e3(0x501)]);continue;case'3':if(!document[_0x4243e3(0xa7d)+'ement'+'ById']('sakur'+_0x4243e3(0x2cd)+_0x4243e3(0x2b4)+'s')){var _0xee2dd=document[_0x4243e3(0x4c9)+_0x4243e3(0x64c)+'ent'](_0x4243e3(0x4d9));_0xee2dd['id']=_0x4243e3(0x993)+_0x4243e3(0x2cd)+_0x4243e3(0x2b4)+'s',_0xee2dd[_0x4243e3(0x17e)+_0x4243e3(0x14e)+'t']='#saku'+'ra-sw'+_0x4243e3(0x9b7)+'ll:in'+'itial'+'}',(document[_0x4243e3(0x83f)]||document[_0x4243e3(0x3d7)+'entEl'+_0x4243e3(0x78c)])[_0x4243e3(0x48e)+_0x4243e3(0x635)+'d'](_0xee2dd);}continue;case'4':_0x233854['id']=_0x4436f2[_0x4243e3(0x3ec)];continue;}break;}}catch(_0x37d310){return null;}}function _0x3dcafd(){var _0x45af62=_0x105055,_0x595c5c=_0xe912ab();if(!_0x595c5c)return _0x16244d;if(_0x595c5c[_0x45af62(0x180)+'et'][_0x45af62(0xbed)])return _0x595c5c[_0x45af62(0xbed)];try{return _0x4e3ad5(_0x595c5c);}catch(_0xab562f){return _0x595c5c[_0x45af62(0x180)+'et']['api']='1',_0x595c5c['api']=_0x16244d,console[_0x45af62(0x215)](_0x4436f2[_0x45af62(0xac4)],'color'+':'+_0x237331,_0xab562f),_0x16244d;}}function _0x4e3ad5(_0x5997d5){var _0x5bd0f9=_0x105055,_0x2cb72c={'dfDMI':function(_0x3dac2f,_0x5023c2){return _0x3dac2f+_0x5023c2;},'sHeRe':_0x5bd0f9(0x6a7)+'ion:f'+_0x5bd0f9(0x746)+_0x5bd0f9(0x99c)+'12px;'+'top:1'+'2px;z'+_0x5bd0f9(0x2cc)+_0x5bd0f9(0x3ae)+_0x5bd0f9(0x697)+_0x5bd0f9(0x24b)+_0x5bd0f9(0x328)+_0x5bd0f9(0x9c1)+_0x5bd0f9(0x633)+_0x5bd0f9(0x73f)+_0x5bd0f9(0x721)+_0x5bd0f9(0x7f3),'BZCFJ':'3|1|0'+_0x5bd0f9(0xbd1),'hQPAI':_0x4436f2['SjnZX'],'ePFIV':_0x5bd0f9(0x6be)+'f5','GOFDp':function(_0x534f7f,_0x57107d,_0x34ace0){return _0x534f7f(_0x57107d,_0x34ace0);},'eagBz':function(_0x35453b,_0x25c662,_0xa5986){return _0x4436f2['fxhpo'](_0x35453b,_0x25c662,_0xa5986);},'gvYHe':_0x5bd0f9(0x5b8),'jMcVF':function(_0x20e236,_0xa46780,_0x32f547){var _0xb03c70=_0x5bd0f9;return _0x4436f2[_0xb03c70(0x6d0)](_0x20e236,_0xa46780,_0x32f547);},'yawMY':function(_0x2e53cd,_0x55b130){var _0x3275f7=_0x5bd0f9;return _0x4436f2[_0x3275f7(0x2b5)](_0x2e53cd,_0x55b130);},'QipCD':function(_0x3557ab,_0x2d6322){return _0x4436f2['NOBTk'](_0x3557ab,_0x2d6322);},'oqPjr':function(_0x2dc7d3,_0x10703b){return _0x2dc7d3!==_0x10703b;},'EgokT':function(_0x54524f,_0x3babf0){return _0x54524f(_0x3babf0);},'PfOEY':_0x5bd0f9(0x2d3)+_0x5bd0f9(0x56c)+_0x5bd0f9(0x8f4),'bZWwD':function(_0xd0a415,_0xb1eb7c){return _0xd0a415+_0xb1eb7c;},'pFJke':_0x5bd0f9(0x6b0)+'d','sRbSt':function(_0x1144d8,_0x117047){var _0x21fd2f=_0x5bd0f9;return _0x4436f2[_0x21fd2f(0x387)](_0x1144d8,_0x117047);},'ohuAk':function(_0x19b96d,_0x4f0664){return _0x19b96d+_0x4f0664;},'FDFTW':function(_0x453b8d){return _0x453b8d();},'ISRzn':function(_0x1c0e12,_0x56f35a){var _0x544be9=_0x5bd0f9;return _0x4436f2[_0x544be9(0x145)](_0x1c0e12,_0x56f35a);},'nzWjb':_0x5bd0f9(0xab9),'ZdYCW':'open','HEWsc':_0x4436f2[_0x5bd0f9(0x28b)],'IYYbx':function(_0xf6df7a,_0x3aa5f0){return _0x4436f2['VLLqL'](_0xf6df7a,_0x3aa5f0);},'uzZJl':function(_0x45eeb1,_0x3017a6){var _0x4c92ce=_0x5bd0f9;return _0x4436f2[_0x4c92ce(0x318)](_0x45eeb1,_0x3017a6);},'tNfBM':function(_0x453b74,_0x26e39a){return _0x453b74<_0x26e39a;},'gdxfK':function(_0x200f1d,_0x462c90){return _0x200f1d+_0x462c90;},'GKPhg':_0x5bd0f9(0x77f)+'ok\x20fi'+_0x5bd0f9(0x194)+'t\x20','HVoDf':_0x5bd0f9(0x71c)+'th\x20or'+_0x5bd0f9(0x775)+_0x5bd0f9(0x688)+'=','uFdLj':_0x4436f2[_0x5bd0f9(0x8bb)],'FAqfi':_0x4436f2['puysI'],'Stewo':_0x4436f2['rhfSu'],'OmDRY':_0x5bd0f9(0x924)+'reads'+_0x5bd0f9(0x424)+'\x20bloc'+_0x5bd0f9(0x13a)+_0x5bd0f9(0x5a7)+_0x5bd0f9(0xb70)+'e\x20obj'+_0x5bd0f9(0xaeb)+'ith\x20M'+_0x5bd0f9(0x62a)+_0x5bd0f9(0x494)+_0x5bd0f9(0x1ae)+_0x5bd0f9(0x784)+_0x5bd0f9(0xbe4)+'.','YECSZ':_0x4436f2[_0x5bd0f9(0x880)],'jNsiq':function(_0x4f8383,_0x5e1c23){return _0x4f8383===_0x5e1c23;},'bfKOy':_0x4436f2['DrGrM'],'qekvl':_0x4436f2['KGFdK'],'vQawi':function(_0x13a0ab,_0x4a599e){var _0x5dc0a9=_0x5bd0f9;return _0x4436f2[_0x5dc0a9(0x416)](_0x13a0ab,_0x4a599e);},'WlNLe':function(_0x58331b,_0x731b5c){return _0x58331b+_0x731b5c;},'iMMGJ':'\x20obje'+'cts\x20·'+'\x20','VrAlB':_0x4436f2[_0x5bd0f9(0x4c7)],'JWUGl':function(_0x2d31a9,_0x4689c2){return _0x2d31a9+_0x4689c2;},'uTHRH':'#ffd4'+'8a','cKCkg':_0x4436f2[_0x5bd0f9(0x7be)],'NGzob':function(_0x2ea884,_0x378763){return _0x2ea884!==_0x378763;},'GWUzU':_0x5bd0f9(0x474)+_0x5bd0f9(0x88b),'IxgXu':'trans'+'paren'+'t','nvfEW':_0x5bd0f9(0x72b),'YdKxe':function(_0x28f62e,_0x53ea76){return _0x28f62e===_0x53ea76;},'nEQEL':_0x4436f2['aMQVp'],'SobhI':_0x5bd0f9(0x361)+_0x5bd0f9(0x8cc)+_0x5bd0f9(0x9c8)+_0x5bd0f9(0x684)+'\x20repo'+'rt','hcrzY':function(_0x22d0a9,_0x7fa664){return _0x22d0a9+_0x7fa664;},'Qdgsn':'color'+':','teztQ':function(_0x3cc577,_0x12ab80){return _0x3cc577+_0x12ab80;}};_0x5997d5[_0x5bd0f9(0x4d9)]['cssTe'+'xt']=_0x4436f2['UIpQK'](_0x5bd0f9(0x6a7)+_0x5bd0f9(0x6cf)+_0x5bd0f9(0x746)+'left:'+_0x5bd0f9(0x397)+_0x5bd0f9(0xc0d)+_0x5bd0f9(0x1b8)+_0x5bd0f9(0x2cc)+'x:214'+'74830'+'00;ma'+_0x5bd0f9(0x79c)+'th:mi'+_0x5bd0f9(0xa07)+_0x5bd0f9(0x27a)+'px);m'+'ax-he'+_0x5bd0f9(0x168)+'78vh;'+_0x4436f2[_0x5bd0f9(0x462)],_0x4436f2[_0x5bd0f9(0x79e)])+(_0x5bd0f9(0x4fa)+_0x5bd0f9(0x8b7)+_0x5bd0f9(0x3c5)+'ex-di'+'recti'+_0x5bd0f9(0x314)+_0x5bd0f9(0x796)+_0x5bd0f9(0x5dc)+_0x5bd0f9(0xa4c)+'idden'+';'),_0x5997d5[_0x5bd0f9(0x272)+_0x5bd0f9(0x608)]=_0x4436f2['jKSCY'](_0x4436f2[_0x5bd0f9(0x12a)](_0x4436f2[_0x5bd0f9(0x84e)](_0x4436f2[_0x5bd0f9(0x437)](_0x4436f2[_0x5bd0f9(0x12a)](_0x4436f2['pVlWS']('<div\x20'+'style'+'=\x22pad'+_0x5bd0f9(0x3f2)+_0x5bd0f9(0x848)+_0x5bd0f9(0x5c1)+'order'+_0x5bd0f9(0xa57)+_0x5bd0f9(0x90a)+'x\x20sol'+'id\x20rg'+_0x5bd0f9(0x739)+_0x5bd0f9(0x4fc)+',177,'+_0x5bd0f9(0xa19)+_0x5bd0f9(0x443)+'y:fle'+_0x5bd0f9(0xaf6)+_0x5bd0f9(0x2ad)+_0x5bd0f9(0x76c)+_0x5bd0f9(0x124)+_0x5bd0f9(0x689)+'ter;f'+_0x5bd0f9(0x892)+_0x5bd0f9(0x4a5)+'to;\x22>'+_0x4436f2['ObOVn'],_0x237331)+('\x22>sak'+_0x5bd0f9(0x9e0)+'\x20skil'+_0x5bd0f9(0x77d)+'</b>')+_0x4436f2[_0x5bd0f9(0x4de)],_0x4436f2['whLSz'])+(_0x5bd0f9(0x2d2)+_0x5bd0f9(0x818)+_0x5bd0f9(0x1c4)+_0x5bd0f9(0xb27)+_0x5bd0f9(0x7b8)+'le=\x22d'+'ispla'+'y:non'+'e;mar'+'gin-l'+'eft:a'+_0x5bd0f9(0x57f)+_0x5bd0f9(0x729)+_0x5bd0f9(0xb1b))+_0x237331,_0x5bd0f9(0x960)+'er:0;'+'color'+':#2a0'+'f1b;b'+_0x5bd0f9(0x9c3)+'-radi'+_0x5bd0f9(0x93d)+_0x5bd0f9(0x7df)+'ding:'+_0x5bd0f9(0x8f9)+'0px;f'+'ont-w'+'eight'+_0x5bd0f9(0xb92)+_0x5bd0f9(0x7a6)+_0x5bd0f9(0x4a4)+'nter;'+'\x22>Cop'+_0x5bd0f9(0x1fa)+_0x5bd0f9(0x529)+_0x5bd0f9(0x40b))+('<butt'+'on\x20id'+_0x5bd0f9(0x1c4)+_0x5bd0f9(0x573)+_0x5bd0f9(0x7db)+_0x5bd0f9(0x9e3)+'\x22back'+_0x5bd0f9(0x985)+_0x5bd0f9(0x394)+_0x5bd0f9(0x182)+'ent;b'+'order'+_0x5bd0f9(0xc00)+'solid'+_0x5bd0f9(0x4b8)+_0x5bd0f9(0x2ff)+'143,1'+_0x5bd0f9(0xc04)+_0x5bd0f9(0x172)+_0x5bd0f9(0x954)+'7eef5'+_0x5bd0f9(0x960)+'er-ra'+_0x5bd0f9(0x132)+_0x5bd0f9(0x76b)+_0x5bd0f9(0x964)+'g:4px'+'\x208px;'+_0x5bd0f9(0x7a6)+_0x5bd0f9(0x4a4)+_0x5bd0f9(0x404)+'\x22>ope'+_0x5bd0f9(0x205)+_0x5bd0f9(0x40b))+_0x4436f2[_0x5bd0f9(0x548)]+(_0x5bd0f9(0x841)+'>')+(_0x5bd0f9(0x62d)+'id=\x22s'+_0x5bd0f9(0x8dc)+'dy\x22\x20s'+'tyle='+_0x5bd0f9(0xa23)+_0x5bd0f9(0x7f7)+_0x5bd0f9(0x5b5)+'>')+_0x4436f2[_0x5bd0f9(0xa47)],_0x5bd0f9(0x2d2)+'on\x20id'+_0x5bd0f9(0x1c4)+_0x5bd0f9(0x6dc)+_0x5bd0f9(0x7d5)+_0x5bd0f9(0xbb3)+_0x5bd0f9(0x323)+'round'+':tran'+'spare'+_0x5bd0f9(0xc05)+'rder:'+_0x5bd0f9(0x62b)+'olid\x20'+'rgba('+_0x5bd0f9(0x8ec)+_0x5bd0f9(0x1b2)+'7,.4)'+';colo'+_0x5bd0f9(0x4ba)+_0x5bd0f9(0x939)+_0x5bd0f9(0x823)+_0x5bd0f9(0x709)+'ius:7'+_0x5bd0f9(0x240)+_0x5bd0f9(0x7d4)+_0x5bd0f9(0x87b)+_0x5bd0f9(0x672)+'curso'+'r:poi'+_0x5bd0f9(0x404)+_0x5bd0f9(0x423)+'ed\x20of'+_0x5bd0f9(0x79b)+_0x5bd0f9(0x40b))+(_0x5bd0f9(0xbe0)+_0x5bd0f9(0xadf)+_0x5bd0f9(0xb0e)+_0x5bd0f9(0xa81)+_0x5bd0f9(0x28c)+_0x5bd0f9(0x40f)+'ange\x22'+'\x20min='+'\x221\x22\x20m'+_0x5bd0f9(0x5b6)+_0x5bd0f9(0xa3d)+_0x5bd0f9(0x9f8)+'1\x22\x20va'+_0x5bd0f9(0xb88)+'1\x22\x20st'+_0x5bd0f9(0xbb3)+'width'+_0x5bd0f9(0xa74)+'x;acc'+_0x5bd0f9(0xae1)+_0x5bd0f9(0xb62))+_0x237331+_0x5bd0f9(0x1d0)+(_0x5bd0f9(0x537)+'\x20id=\x22'+_0x5bd0f9(0xb96)+'actor'+'label'+_0x5bd0f9(0x7b8)+_0x5bd0f9(0x341)+_0x5bd0f9(0xb62)+'#bda9'+'c9;mi'+_0x5bd0f9(0x666)+_0x5bd0f9(0x5d1)+'px;\x22>'+_0x5bd0f9(0x9be)+_0x5bd0f9(0x304)+'>')+('<butt'+_0x5bd0f9(0x818)+_0x5bd0f9(0x1c4)+'-snap'+'\x22\x20sty'+'le=\x22b'+_0x5bd0f9(0x729)+_0x5bd0f9(0xb1b)+'trans'+_0x5bd0f9(0x765)+_0x5bd0f9(0xa0a)+'der:1'+_0x5bd0f9(0x8f5)+_0x5bd0f9(0x355)+'gba(2'+_0x5bd0f9(0x1af)+_0x5bd0f9(0x4cc)+',.4);'+_0x5bd0f9(0x4b3)+_0x5bd0f9(0xad2)+_0x5bd0f9(0x997)+'order'+'-radi'+_0x5bd0f9(0x93d)+_0x5bd0f9(0x7df)+'ding:'+_0x5bd0f9(0x719)+'px;cu'+'rsor:'+_0x5bd0f9(0x9c1)+_0x5bd0f9(0xb7d)+_0x5bd0f9(0x82a)+'hot\x20('+'F9)</'+_0x5bd0f9(0xba4)+'n>')+_0x4436f2['xETLX']+(_0x5bd0f9(0x841)+'>'),'<pre\x20'+_0x5bd0f9(0x8ab)+_0x5bd0f9(0x6a5)+'t\x22\x20st'+_0x5bd0f9(0xbb3)+_0x5bd0f9(0x74c)+'n:0;p'+_0x5bd0f9(0x964)+'g:10p'+_0x5bd0f9(0x85c)+'x;ove'+'rflow'+_0x5bd0f9(0x4df)+_0x5bd0f9(0x43f)+_0x5bd0f9(0x83b)+_0x5bd0f9(0x6ca)+_0x5bd0f9(0x431)+'-spac'+_0x5bd0f9(0x87e)+_0x5bd0f9(0x4f2)+_0x5bd0f9(0x63a)+'-brea'+'k:bre'+'ak-wo'+'rd;fo'+_0x5bd0f9(0x699)+_0x5bd0f9(0x259)+';')+_0x4436f2[_0x5bd0f9(0x1fe)],'</div'+'>');var _0x53373d=_0x5997d5[_0x5bd0f9(0x68d)+_0x5bd0f9(0xaca)+_0x5bd0f9(0xbb9)](_0x5bd0f9(0xacc)+_0x5bd0f9(0x77a)+'s'),_0x2f91b0=_0x5997d5['query'+_0x5bd0f9(0xaca)+_0x5bd0f9(0xbb9)]('#sw2-'+'build'),_0x38c134=_0x5997d5['query'+'Selec'+'tor'](_0x5bd0f9(0xacc)+'out'),_0x2f4e5f=_0x5997d5['query'+'Selec'+_0x5bd0f9(0xbb9)](_0x5bd0f9(0xacc)+'copy'),_0x48c387=_0x5997d5['query'+'Selec'+_0x5bd0f9(0xbb9)](_0x4436f2['qtDkP']),_0x161471=_0x5997d5['query'+_0x5bd0f9(0xaca)+_0x5bd0f9(0xbb9)]('#sw2-'+_0x5bd0f9(0xabb)+'e'),_0x162fec=_0x5997d5['query'+_0x5bd0f9(0xaca)+_0x5bd0f9(0xbb9)](_0x5bd0f9(0xacc)+'body'),_0xb0b05c=_0x5997d5[_0x5bd0f9(0x68d)+_0x5bd0f9(0xaca)+_0x5bd0f9(0xbb9)](_0x5bd0f9(0xacc)+_0x5bd0f9(0x1c2)),_0x31b2e0=_0x5997d5[_0x5bd0f9(0x68d)+'Selec'+'tor'](_0x4436f2['IekEj']),_0x43671d=_0x5997d5[_0x5bd0f9(0x68d)+'Selec'+'tor'](_0x4436f2[_0x5bd0f9(0x7b6)]),_0x4d8080=_0x5997d5[_0x5bd0f9(0x68d)+'Selec'+'tor'](_0x4436f2['YRySl']),_0xbfd1cb=_0x5997d5[_0x5bd0f9(0x68d)+_0x5bd0f9(0xaca)+_0x5bd0f9(0xbb9)](_0x5bd0f9(0xacc)+'hint'),_0x1f5da0=null,_0x45249a=![];function _0x4c5a58(){var _0x15c112=_0x5bd0f9,_0x55a88c={'yxtHm':function(_0x493d1e,_0xe32830){return _0x493d1e(_0xe32830);}};if(_0x15c112(0x541)!==_0x4436f2['zagGf']){var _0x1a5619=_0x3bd46f['creat'+_0x15c112(0x64c)+_0x15c112(0x803)](_0x15c112(0x41f));_0x1a5619['id']=_0x15c112(0x993)+_0x15c112(0x2cd)+'v2-ta'+'b',_0x1a5619['style']['cssTe'+'xt']=_0x2cb72c[_0x15c112(0x592)](_0x2cb72c[_0x15c112(0x592)](_0x2cb72c['sHeRe']+(_0x15c112(0x323)+'round'+_0x15c112(0xa12)+_0x15c112(0x246)+_0x15c112(0x878)+'.9);b'+_0x15c112(0x9c3)+':1px\x20'+'solid'+'\x20rgba'+'(255,'+'143,1'+_0x15c112(0x533)+');col'+'or:'),_0x8c1ed1)+';',_0x15c112(0x823)+_0x15c112(0x709)+_0x15c112(0xafc)+'99px;'+_0x15c112(0x146)+_0x15c112(0x56e)+_0x15c112(0x85c)+'x;fon'+'t:11p'+_0x15c112(0x61b)+_0x15c112(0x9fc)+'onosp'+'ace,C'+'onsol'+'as,mo'+_0x15c112(0x181)+'ce;'),_0x1a5619[_0x15c112(0x17e)+_0x15c112(0x14e)+'t']=_0x15c112(0x993)+'a',_0x1a5619['oncli'+'ck']=function(){var _0x50e70f=_0x15c112;_0x55a88c[_0x50e70f(0x32f)](_0x20ba6f,![]),_0x13a1f9();},_0x410660['body'][_0x15c112(0x48e)+_0x15c112(0x635)+'d'](_0x1a5619);}else{if(_0x162fec)_0x162fec[_0x15c112(0x4d9)]['displ'+'ay']=_0x45249a?'':'none';if(_0x161471)_0x161471[_0x15c112(0x17e)+_0x15c112(0x14e)+'t']=_0x45249a?'close':_0x15c112(0x2bc);_0x5997d5[_0x15c112(0x4d9)]['width']=_0x45249a?_0x15c112(0x16a)+_0x15c112(0x8ce)+_0x15c112(0xb21):'auto',_0x5997d5[_0x15c112(0x4d9)]['backg'+'round']=_0x45249a?_0x15c112(0x599)+'1d':'rgba('+_0x15c112(0xb4d)+_0x15c112(0x1e0)+'9)';}}if(_0x161471)_0x161471['oncli'+'ck']=function(){_0x45249a=!_0x45249a,_0x4c5a58();};_0x4436f2['QIhqk'](_0x4c5a58);if(_0x48c387)_0x48c387[_0x5bd0f9(0x912)+'ck']=function(){_0x1e196a(!![]);};if(_0xb0b05c)_0xb0b05c[_0x5bd0f9(0x912)+'ck']=function(){var _0x53e45f=_0x5bd0f9;_0x16835d(_0x53e45f(0x4f0)+'hot');};var _0x1df78c=![];function _0x3a93fe(){var _0x33bb36=_0x5bd0f9;_0x16835d(_0x33bb36(0x838),{'on':_0x1df78c,'factor':parseFloat(_0x43671d[_0x33bb36(0x52b)])||0x7*0x4af+-0x16b*0x3+-0x6d*0x43});}if(_0x31b2e0)_0x31b2e0[_0x5bd0f9(0x912)+'ck']=function(){var _0x58ecc7=_0x5bd0f9,_0x4988be=_0x2cb72c[_0x58ecc7(0x988)][_0x58ecc7(0xb19)]('|'),_0x171526=-0x1169+0x1181*-0x2+0x346b;while(!![]){switch(_0x4988be[_0x171526++]){case'0':_0x31b2e0[_0x58ecc7(0x4d9)]['backg'+_0x58ecc7(0x679)]=_0x1df78c?_0x237331:'trans'+'paren'+'t';continue;case'1':_0x31b2e0['textC'+_0x58ecc7(0x14e)+'t']=_0x1df78c?'Speed'+_0x58ecc7(0x88b):_0x58ecc7(0x474)+_0x58ecc7(0xb1e);continue;case'2':_0x31b2e0['style']['color']=_0x1df78c?_0x2cb72c['hQPAI']:_0x2cb72c['ePFIV'];continue;case'3':_0x1df78c=!_0x1df78c;continue;case'4':_0x3a93fe();continue;}break;}};if(_0x43671d)_0x43671d[_0x5bd0f9(0x743)+'ut']=function(){var _0x429ad4=_0x5bd0f9;if(_0x4d8080)_0x4d8080[_0x429ad4(0x17e)+_0x429ad4(0x14e)+'t']=(parseFloat(_0x43671d['value'])||0x3*0xcc7+0x14e*-0x9+-0x1*0x1a96)['toFix'+'ed'](-0xafb+-0x1*-0x1499+0x17*-0x6b)+'x';_0x4436f2[_0x429ad4(0x6fb)](_0x3a93fe);};if(_0x2f4e5f)_0x2f4e5f[_0x5bd0f9(0x912)+'ck']=function(){var _0x253ef2=_0x5bd0f9,_0x462d84={'xMMoj':_0x2cb72c['pFJke'],'qfvBL':function(_0x26e86e,_0x2a8f8c){return _0x26e86e*_0x2a8f8c;},'YiptL':function(_0x29ff06,_0x12487c){return _0x2cb72c['sRbSt'](_0x29ff06,_0x12487c);}},_0x35aca0=_0x2cb72c['dfDMI'](_0x2cb72c[_0x253ef2(0x3ee)](_0x4f70e9+'\x0a'+(_0x1f5da0?JSON['strin'+_0x253ef2(0x67a)](_0x1f5da0,null,-0x2d1*-0x5+-0x18fd+0xae9):''),'\x0a'),_0x296cf3),_0x3af3e8=function(){var _0x3fba1b=_0x253ef2;if(_0x2f4e5f)_0x2f4e5f[_0x3fba1b(0x17e)+'onten'+'t']=_0x462d84[_0x3fba1b(0x934)];};if(navigator[_0x253ef2(0x551)+'oard']&&navigator[_0x253ef2(0x551)+_0x253ef2(0x564)][_0x253ef2(0xb63)+_0x253ef2(0x79d)]){if(_0x253ef2(0xbf7)!=='Xvriv')navigator[_0x253ef2(0x551)+_0x253ef2(0x564)][_0x253ef2(0xb63)+_0x253ef2(0x79d)](_0x35aca0)[_0x253ef2(0x99b)](_0x3af3e8,function(){_0x17aa24();});else{var _0x1a3c00=_0x572553();if(!_0x1a3c00||!_0x1a3c00['mouse'+_0x253ef2(0x4ae)])return _0x35a2b0[_0x253ef2(0x46f)+'ified']=![],_0x300d02[_0x253ef2(0xa02)]=_0x253ef2(0x5f0)+'useLo'+_0x253ef2(0x3e9)+'t',null;var _0x9bc12f=_0x2cb72c['GOFDp'](_0xac3adc,_0x1a3c00['mouse'+'Look'],0x1a87+-0x1bfb+0x184),_0x83fbc0=_0x2cb72c[_0x253ef2(0xa78)](_0x430112,_0x9bc12f+(-0x24a*-0xe+-0x6d4+-0x1920),_0x2cb72c[_0x253ef2(0x8c5)]),_0x5de15c=_0x2cb72c[_0x253ef2(0xa13)](_0x3439db,_0x2cb72c[_0x253ef2(0x8d9)](_0x9bc12f,-0x8e0+-0x54a*0x2+0x4e4*0x4),'f32');if(_0x2cb72c['QipCD'](typeof _0x83fbc0,_0x253ef2(0xaae)+'r')||_0x2cb72c['oqPjr'](typeof _0x5de15c,'numbe'+'r')||!_0x1cae60(_0x83fbc0)||!_0x2cb72c[_0x253ef2(0x641)](_0x496b6f,_0x5de15c))return _0x1e88f8['ident'+_0x253ef2(0x73d)]=![],_0x4e8a8d['why']=_0x253ef2(0x27d)+'Look\x20'+_0x253ef2(0xbf5)+_0x253ef2(0x766)+_0x253ef2(0x165)+'le',null;_0x4cbd06[_0x253ef2(0x8f4)]=_0x83fbc0,_0x241048['yaw']=_0x5de15c;var _0x32ab68=[];if(_0x83fbc0<-(-0x2201*0x1+0x1cd*0xd+0xaf2)||_0x83fbc0>0x14a4+-0x80f+-0xc3b)_0x32ab68['push'](_0x253ef2(0x1d3)+_0x4e04c1[_0x253ef2(0x679)](_0x83fbc0)+_0x2cb72c[_0x253ef2(0xb9d)]);_0x2c4824[_0x253ef2(0xa02)]=_0x32ab68[_0x253ef2(0xb7c)+'h']?_0x32ab68[_0x253ef2(0x71a)](';\x20'):'';if(_0x32ab68[_0x253ef2(0xb7c)+'h'])return _0x8ccf18['ident'+_0x253ef2(0x73d)]=![],null;return _0x8bf38f[_0x253ef2(0x46f)+_0x253ef2(0x73d)]=!![],_0xf2f6bf['pitch']=_0x2cb72c[_0x253ef2(0x592)](_0x83fbc0,_0x10aafd[_0x253ef2(0x8f4)+_0x253ef2(0xac1)]),_0x524d68[_0x253ef2(0xb87)]=_0x2cb72c[_0x253ef2(0x209)](_0x5de15c,_0x80c240[_0x253ef2(0x733)+'f']),_0x1b4f96;}}else _0x2cb72c['FDFTW'](_0x17aa24);function _0x17aa24(){var _0x405e63=_0x253ef2;if(_0x405e63(0x6d8)!==_0x405e63(0x872)){var _0xb940de=document['creat'+'eElem'+_0x405e63(0x803)](_0x405e63(0x8fc)+'rea');_0xb940de['value']=_0x35aca0;if(!document[_0x405e63(0xbdf)])return;document[_0x405e63(0xbdf)][_0x405e63(0x48e)+_0x405e63(0x635)+'d'](_0xb940de),_0xb940de[_0x405e63(0x247)+'t']();try{if(_0x462d84[_0x405e63(0x2ac)](_0x405e63(0x2c2),'nwYQc'))document[_0x405e63(0x717)+_0x405e63(0x969)+'d']('copy'),_0x3af3e8();else return _0x4a5d09['round'](_0x462d84['qfvBL'](_0x1f3af4,0x227a+-0x2*-0x823+-0x24a*0x16))/(0xee3+-0x11a*-0xc+-0x1bb7);}catch(_0xf53521){}_0xb940de[_0x405e63(0x547)+'e']();}else _0x5c90ed['sane']=![];}};setTimeout(function(){var _0x6b2676=_0x5bd0f9,_0x3cee4e=_0x4436f2[_0x6b2676(0xb55)]['split']('|'),_0x4d358d=-0x20*0x4+0x2530+-0x4*0x92c;while(!![]){switch(_0x3cee4e[_0x4d358d++]){case'0':_0x38c134[_0x6b2676(0x17e)+'onten'+'t']=_0x4436f2[_0x6b2676(0x2b5)](_0x4436f2[_0x6b2676(0x2b5)](_0x6b2676(0x1b0)+_0x6b2676(0x742)+_0x6b2676(0x6e4)+_0x6b2676(0x1dc)+_0x6b2676(0x18a)+_0x6b2676(0x9cc)+_0x6b2676(0x511)+'e\x20rep'+_0x6b2676(0x938)+'\x0a'+(_0x6b2676(0x268)+_0x6b2676(0x807)+_0x6b2676(0x3a4)+'es\x20th'+'e\x20use'+_0x6b2676(0xbb4)+'pt\x20IS'+'\x20inst'+_0x6b2676(0x651)+'\x20and\x20'+_0x6b2676(0x882)+'ng\x20on'+_0x6b2676(0x2a2)+_0x6b2676(0x9d4)+_0x6b2676(0x902))+(_0x6b2676(0x219)+_0x6b2676(0x429)+_0x6b2676(0x7a7)+'g\x20sus'+_0x6b2676(0x1a1)+'\x20are:'+'\x0a\x0a')+_0x4436f2[_0x6b2676(0x1d1)]+('\x20\x202.\x20'+_0x6b2676(0x49d)+_0x6b2676(0x901)+'as\x20no'+'t\x20bee'+_0x6b2676(0xad4)+_0x6b2676(0x300)+'\x20sinc'+_0x6b2676(0x13d)+'talli'+'ng.\x0a'),_0x4436f2[_0x6b2676(0x8d0)])+('\x20\x20\x20\x20\x20'+'insta'+_0x6b2676(0x96d)+_0x6b2676(0x637)+_0x6b2676(0x214)+_0x6b2676(0x976)+'\x20UWMK'+'\x20both'+_0x6b2676(0x883)+_0x6b2676(0x8de)+_0x6b2676(0x6f7)+'bly.i'+'nstan'+'tiate'+'.\x0a\x0a'),'Reloa'+_0x6b2676(0x97d)+_0x6b2676(0xa94)+'\x20page'+'\x20once'+'\x20and\x20'+_0x6b2676(0x9f7)+_0x6b2676(0x8f8)+_0x6b2676(0xb67)+_0x6b2676(0x89b)+'in.');continue;case'1':_0x53373d[_0x6b2676(0x17e)+'onten'+'t']=_0x4436f2[_0x6b2676(0x321)];continue;case'2':_0x53373d[_0x6b2676(0x4d9)][_0x6b2676(0x4b3)]=_0x4436f2['cplcQ'];continue;case'3':if(_0x4436f2[_0x6b2676(0x1cc)](!_0x53373d,!_0x38c134))return;continue;case'4':if(_0x1f5da0)return;continue;}break;}},-0x3557+-0x1*-0x9f2a+0x808d);var _0x5656aa={'set':function(_0x19d257){var _0x1fb6e2=_0x5bd0f9;_0x1f5da0=_0x19d257;if(_0x2f4e5f)_0x2f4e5f[_0x1fb6e2(0x4d9)][_0x1fb6e2(0x4fa)+'ay']='';if(_0x2f91b0){if(_0x2cb72c['QipCD'](_0x1fb6e2(0x753),_0x1fb6e2(0x3c0))){_0x2f91b0[_0x1fb6e2(0x17e)+_0x1fb6e2(0x14e)+'t']='v'+(_0x19d257['versi'+'on']||'?');var _0x52afaa=_0x3838a0,_0x3ac341=_0x19d257['versi'+'on']||'';_0x2f91b0['style'][_0x1fb6e2(0x4b3)]=_0x3ac341===_0x52afaa?_0x237331:_0x2cb72c[_0x1fb6e2(0x778)],_0x2f91b0[_0x1fb6e2(0x4d9)][_0x1fb6e2(0x823)+'rColo'+'r']=_0x2cb72c['jNsiq'](_0x3ac341,_0x52afaa)?_0x2cb72c[_0x1fb6e2(0x6c1)]:_0x2cb72c['YECSZ'];}else{var _0x45802f=_0x251688(_0x17432b[_0x1fb6e2(0x7d7)],[_0x5f20cd[_0x1fb6e2(0x7d7)][0x1*-0x1539+0x3e*0x8b+-0xc71],_0x5d9168['eye'][0x30b*0x8+-0xc9*0x1e+-0x1*0xc9],_0x2cb72c['bZWwD'](_0x575e92[_0x1fb6e2(0x7d7)][0x1888+0x1929*0x1+-0x31af],0x1b*-0x135+0x76*-0x35+0x3906)],0x1*0xf37+0x5c4+-0x5d*0x2f,0xafc+-0x218c+0xe*0x1e4);_0x45802f&&(_0x303c77=_0x2cb72c[_0x1fb6e2(0x450)](_0x45802f['x'],0x1*0x24fb+0x35*-0x35+-0x161a),_0x45d303=_0x45802f['y']/(-0xbd*0x2b+0x1*0x653+-0x1*-0x1d54));}}var _0x4ac35f=_0x19d257[_0x1fb6e2(0x903)+_0x1fb6e2(0x4dd)]&&_0x19d257[_0x1fb6e2(0x903)+'nces']['FPSco'+'ntrol'+'ler'],_0x4f3545=Math[_0x1fb6e2(0x679)]((_0x19d257['elaps'+'edMs']||0x47d*0x3+-0x656*0x2+0x1d*-0x7)/(0x41a+0x22e2+0x2314*-0x1));if(_0x53373d){var _0xc18c22,_0x2d39c2;if(_0x4ac35f&&_0x19d257['surve'+'y']&&_0x19d257[_0x1fb6e2(0x54b)+'y']['FPSco'+_0x1fb6e2(0x773)+_0x1fb6e2(0x2a1)]){if(_0x1fb6e2(0x98b)===_0x2cb72c[_0x1fb6e2(0x30a)]){if(_0x40c383)_0x1d2123[_0x1fb6e2(0x4d9)]['displ'+'ay']=_0x58182?'':_0x1fb6e2(0x576);if(_0x1b4069)_0x43dd74[_0x1fb6e2(0x17e)+_0x1fb6e2(0x14e)+'t']=_0x19b370?_0x2cb72c[_0x1fb6e2(0xb0a)]:_0x2cb72c[_0x1fb6e2(0x417)];_0x308dba[_0x1fb6e2(0x4d9)][_0x1fb6e2(0x972)]=_0x3ff73d?_0x2cb72c['HEWsc']:_0x1fb6e2(0x650),_0x5ac179[_0x1fb6e2(0x4d9)][_0x1fb6e2(0x323)+_0x1fb6e2(0x679)]=_0x5d0b91?'#150c'+'1d':_0x1fb6e2(0x7cf)+_0x1fb6e2(0xb4d)+_0x1fb6e2(0x1e0)+'9)';}else _0xc18c22=_0x2cb72c[_0x1fb6e2(0x4bb)](_0x2cb72c[_0x1fb6e2(0x1c3)]('LIVE\x20'+'·\x20',Object[_0x1fb6e2(0x5ec)](_0x19d257['insta'+_0x1fb6e2(0x4dd)])['lengt'+'h']),_0x2cb72c['iMMGJ'])+_0x4f3545+'s',_0x2d39c2='#7ee0'+'a8';}else{if(_0x19d257[_0x1fb6e2(0x2db)+_0x1fb6e2(0x1f8)+'ed']>0x2*0xce9+-0xd3+-0x18ff)_0xc18c22=_0x2cb72c[_0x1fb6e2(0x702)]+_0x4f3545+'s',_0x2d39c2='#ffd4'+'8a';else _0x19d257['scrip'+_0x1fb6e2(0x52a)]?(_0xc18c22=_0x2cb72c['JWUGl'](_0x1fb6e2(0x330)+_0x1fb6e2(0xa9b)+_0x1fb6e2(0xa7a)+'·\x20'+_0x4f3545,'s'),_0x2d39c2=_0x2cb72c['uTHRH']):_0x2cb72c['cKCkg']!==_0x1fb6e2(0x56b)?_0x117f5d['warni'+_0x1fb6e2(0x26c)]['push'](_0x1fb6e2(0x8b5)+_0x1fb6e2(0x67d)+'tyWeb'+_0x1fb6e2(0x36c)+'t.Val'+_0x1fb6e2(0x258)+_0x1fb6e2(0x22a)+'is\x20mi'+_0x1fb6e2(0x668)+_0x1fb6e2(0x941)+_0x1fb6e2(0x58b)+'\x20is\x20r'+'unnin'+_0x1fb6e2(0x6d6)+_0x1fb6e2(0x833)):(_0xc18c22=(_0x19d257['arm']&&_0x19d257[_0x1fb6e2(0x813)]['ok']?_0x1fb6e2(0x9fd)+_0x1fb6e2(0x8b6):'armin'+'g\x20·\x20')+_0x4f3545+'s',_0x2d39c2='#ffd4'+'8a');}_0x53373d[_0x1fb6e2(0x17e)+'onten'+'t']=_0xc18c22,_0x53373d['style']['color']=_0x2d39c2;}_0xbfd1cb&&(_0xbfd1cb[_0x1fb6e2(0x17e)+'onten'+'t']=_0x19d257[_0x1fb6e2(0x327)]&&_0x19d257[_0x1fb6e2(0x327)]['lengt'+'h']?_0x2cb72c['yawMY'](_0x1fb6e2(0x61a)+_0x1fb6e2(0x266)+_0x1fb6e2(0xa0c)+'t:\x20',_0x19d257['diff']['join'](',\x20')):_0x1fb6e2(0x70c)+_0x1fb6e2(0xa00)+'hile\x20'+_0x1fb6e2(0x95b)+_0x1fb6e2(0xa53)+_0x1fb6e2(0xa80)+_0x1fb6e2(0xb0c)+'/\x20jum'+_0x1fb6e2(0x51d)+'marks'+'\x20whic'+_0x1fb6e2(0x91a)+_0x1fb6e2(0x42b)+_0x1fb6e2(0x430)+'h.');if(_0x19d257['speed']&&_0x31b2e0){if(_0x2cb72c[_0x1fb6e2(0x23d)]('HyyVe',_0x1fb6e2(0x8bf))){var _0x306781=('6|1|0'+'|5|3|'+'4|2')[_0x1fb6e2(0xb19)]('|'),_0x2dace0=-0x18d0+-0x9*-0x281+0x247;while(!![]){switch(_0x306781[_0x2dace0++]){case'0':if(_0x2cb72c['IYYbx'](_0x56418f,-0xefe+0x1*0x187+0xd77*0x1)||_0x2cb72c[_0x1fb6e2(0x47a)](_0x30dc69+_0x307aaf*(-0x3*0xc0+-0x355+0x599),_0x399233[_0x1fb6e2(0x401)+'ength']))return null;continue;case'1':if(!_0x399233)return null;continue;case'2':return _0x1a7776;case'3':for(var _0x550fbb=-0x11c4*0x1+-0x5fb*-0x2+0x5ce;_0x2cb72c[_0x1fb6e2(0x615)](_0x550fbb,_0x731944);_0x550fbb++)_0x1a7776['push'](_0x399233[_0x1fb6e2(0x391)+_0x1fb6e2(0x6a6)](_0x2cb72c[_0x1fb6e2(0x3ee)](_0x3bce98,_0x359b2d)+_0x550fbb*(-0x1007*0x1+0xb*0xd+0xf7c*0x1),!![]));continue;case'4':_0x5620ee['ok']+=_0x5dc3d5;continue;case'5':var _0x1a7776=[];continue;case'6':var _0x399233=_0x2cb72c['FDFTW'](_0x42eb45);continue;}break;}}else{_0x1df78c=!!_0x19d257[_0x1fb6e2(0x838)]['on'],_0x31b2e0[_0x1fb6e2(0x17e)+_0x1fb6e2(0x14e)+'t']=_0x1df78c?_0x2cb72c[_0x1fb6e2(0x8ae)]:_0x1fb6e2(0x474)+'\x20off',_0x31b2e0['style']['backg'+'round']=_0x1df78c?_0x237331:_0x2cb72c['IxgXu'],_0x31b2e0[_0x1fb6e2(0x4d9)]['color']=_0x1df78c?_0x2cb72c[_0x1fb6e2(0x433)]:_0x2cb72c['ePFIV'];if(_0x4d8080&&_0x19d257['speed']['facto'+'r']){if(_0x2cb72c['nvfEW']!==_0x1fb6e2(0x72b)){if(!_0x2fb5f7['petal'])return;var _0x283381=_0x5b7900();_0x57bcd1['petal']['style'][_0x1fb6e2(0x5ab)+'ty']=_0x1b2855[_0x1fb6e2(0x2bc)]?'1':_0x283381?'.8':'.28',_0x2988c5[_0x1fb6e2(0x761)]['title']=_0x283381?_0x1fb6e2(0x965)+_0x1fb6e2(0x812)+'llWar'+_0x1fb6e2(0x980)+_0x1fb6e2(0x4d1):_0x1fb6e2(0x965)+'a\x20Ski'+'llWar'+'z\x20-\x20w'+_0x1fb6e2(0x5e8)+_0x1fb6e2(0x998)+_0x1fb6e2(0x2a2)+'game\x20'+'(Inse'+'rt)';}else _0x4d8080[_0x1fb6e2(0x17e)+_0x1fb6e2(0x14e)+'t']=Number(_0x19d257['speed']['facto'+'r'])[_0x1fb6e2(0x5ee)+'ed'](0x2688+-0x1*-0x10eb+-0x3772)+'x';}}}if(_0x38c134)try{if(_0x2cb72c['YdKxe'](_0x2cb72c[_0x1fb6e2(0x432)],'LysYP'))_0x38c134[_0x1fb6e2(0x17e)+'onten'+'t']=_0x2cb72c[_0x1fb6e2(0x641)](_0x562459,_0x19d257);else{var _0x316dea='';_0xd3fe7a[_0x1fb6e2(0x5bc)+_0x1fb6e2(0x220)+_0x1fb6e2(0xa56)]&&(_0x316dea=_0x2cb72c['dfDMI'](_0x2cb72c['gdxfK'](_0x2cb72c['yawMY'](_0x2cb72c['GKPhg']+_0x55c6d7['hookF'+_0x1fb6e2(0x220)+_0x1fb6e2(0xa56)][_0x1fb6e2(0xb4a)]+_0x2cb72c[_0x1fb6e2(0x72a)],_0x5906e5[_0x1fb6e2(0x5bc)+_0x1fb6e2(0x220)+_0x1fb6e2(0xa56)]['origi'+_0x1fb6e2(0x915)+'nc'])+(_0x1fb6e2(0x6bf)+'game\x20'+_0x1fb6e2(0x3a0)+_0x1fb6e2(0xbc4)),_0x3d7f7d['hookF'+'irePr'+'oof']['resol'+_0x1fb6e2(0x6d7)+'eAtFi'+'re'])+(_0x1fb6e2(0x69e)+'rce:\x20'),_0x39334f['hookF'+_0x1fb6e2(0x220)+'oof'][_0x1fb6e2(0xabd)+_0x1fb6e2(0x754)+_0x1fb6e2(0x2de)+'e']||_0x2cb72c[_0x1fb6e2(0x4d7)])+('),\x20so'+'\x20the\x20'+'refer'+_0x1fb6e2(0x627)+_0x1fb6e2(0x559)+_0x1fb6e2(0x523)+'en\x20an'+'d\x20is\x20'+_0x1fb6e2(0x8e6)+'eacha'+_0x1fb6e2(0xb01)+_0x1fb6e2(0x3fd))),_0x287e1a['warni'+_0x1fb6e2(0x26c)]['push'](_0x2cb72c[_0x1fb6e2(0x209)](_0x2cb72c[_0x1fb6e2(0x8d9)](_0x2cb72c[_0x1fb6e2(0x156)]+(_0x117fdc['globa'+'ls'][_0x1fb6e2(0xabd)+'ource']||'none'),_0x2cb72c['Stewo'])+_0x2cb72c['OmDRY'],_0x316dea));}}catch(_0x5355ac){_0x38c134['textC'+_0x1fb6e2(0x14e)+'t']=JSON[_0x1fb6e2(0x17d)+_0x1fb6e2(0x67a)](_0x19d257,null,-0x49*-0x4e+0x1b84+-0x31c1*0x1);}console[_0x1fb6e2(0xb03)](_0x2cb72c[_0x1fb6e2(0xa7c)],_0x2cb72c[_0x1fb6e2(0x864)](_0x2cb72c[_0x1fb6e2(0x2df)],_0x237331)+(_0x1fb6e2(0x1be)+'-weig'+_0x1fb6e2(0x854)+'0'),_0x19d257),console[_0x1fb6e2(0xb03)](_0x2cb72c[_0x1fb6e2(0x4b4)](_0x2cb72c[_0x1fb6e2(0x592)](_0x4f70e9,'\x0a'),JSON[_0x1fb6e2(0x17d)+_0x1fb6e2(0x67a)](_0x19d257,null,-0xb*-0x2dd+0x2c5+-0x2243))+'\x0a'+_0x296cf3);}};return _0x5997d5[_0x5bd0f9(0x180)+'et'][_0x5bd0f9(0xbed)]='1',_0x5997d5[_0x5bd0f9(0xbed)]=_0x5656aa,_0x5656aa;}function _0x562459(_0x3e5745){var _0x400835=_0x105055,_0x5f0e7a={'QcPcP':function(_0x32b9f3,_0x712006){return _0x32b9f3&_0x712006;},'gTrwx':function(_0x21ea6e,_0x3bb635){return _0x4436f2['pjHyt'](_0x21ea6e,_0x3bb635);},'pLPXC':function(_0x39f7f8,_0x221150){return _0x4436f2['FcVsi'](_0x39f7f8,_0x221150);}},_0x2390e6=[];_0x2390e6[_0x400835(0x24d)](_0x4436f2['Kbpqd'](_0x4436f2[_0x400835(0x3bc)](_0x4436f2['TenJs'](_0x4436f2[_0x400835(0x3a9)](_0x4436f2[_0x400835(0x9ed)],_0x3e5745[_0x400835(0x7eb)]||'?'),_0x400835(0xa37)),Math['round'](_0x4436f2[_0x400835(0x22e)](_0x3e5745[_0x400835(0x72d)+'edMs']||-0xea+-0x1ec8*0x1+0x1fb2,0x1*0xc5e+-0xcb2+0x43c))),'s)')),_0x2390e6[_0x400835(0x24d)](_0x4436f2['vqTIY'](_0x400835(0xbfa)+_0x400835(0x125)+(_0x3e5745[_0x400835(0xb83)]?'yes':'no')+(_0x400835(0x859)+_0x400835(0x274)+'\x20'),_0x3e5745['il2Cp'+_0x400835(0x9fb)+'ext']?_0x400835(0x790):'no')+(_0x400835(0xa28)+_0x400835(0x2c9))+(_0x4436f2['tRyQz'](_0x3e5745['typeC'+'ount'],null)?_0x3e5745[_0x400835(0x728)+_0x400835(0x9a7)]:'?')),_0x2390e6[_0x400835(0x24d)](_0x4436f2['jKSCY'](_0x4436f2[_0x400835(0x73c)](_0x4436f2['TenJs'](_0x400835(0x2db)+_0x400835(0x125),_0x3e5745['hooks'+'Appli'+'ed'])+'/',_0x3e5745[_0x400835(0x2db)+_0x400835(0x88d)]),_0x400835(0x9d6)+'ied')),_0x2390e6[_0x400835(0x24d)]('');var _0x36295b=_0x3e5745[_0x400835(0x903)+_0x400835(0x4dd)]||{},_0x4bb7a6=Object[_0x400835(0x5ec)](_0x36295b);if(!_0x4bb7a6[_0x400835(0xb7c)+'h']){if(_0x400835(0x673)!==_0x400835(0x673)){var _0x37ca61=_0x5ea76c[_0x4f5a6e],_0x2083b3=_0x38a5d7(_0x51c486,_0x40622e,_0x37ca61[_0x400835(0x53c)]);if(!_0x2083b3)return null;var _0x2d0393=new _0x487db3(_0x2083b3[_0x400835(0xaec)+'r'],_0x2083b3['byteO'+_0x400835(0x9a5)],_0x2083b3[_0x400835(0x401)+_0x400835(0x1df)]),_0x1b5ebb=_0x2d0393[_0x400835(0x1bb)+_0x400835(0x16f)](_0x37ca61[_0x400835(0x794)],!![]),_0x5c4582=_0x2d0393[_0x400835(0x1bb)+_0x400835(0x16f)](_0x37ca61['hidde'+'n'],!![]),_0x531023=_0x5f0e7a[_0x400835(0x313)](_0x2d0393[_0x400835(0xbce)+_0x400835(0x817)](_0x37ca61['inite'+'d']),-0x12*-0xc2+-0x1948+0xba5*0x1),_0xa242a9=_0x36361a===_0x400835(0x8fe)?_0x2d0393['getFl'+'oat32'](_0x37ca61[_0x400835(0x9dd)],!![]):_0x38f07e===_0x400835(0x2a7)?_0x2d0393['getIn'+_0x400835(0x16f)](_0x37ca61[_0x400835(0x9dd)],!![]):_0x2d0393['getUi'+'nt8'](_0x37ca61['fake']),_0x567f54=_0x2d0393[_0x400835(0xbce)+_0x400835(0x817)](_0x37ca61[_0x400835(0x549)+'e'])&-0xc41*-0x1+0x1f*0x107+-0x2c19;return{'keyAtOffset0':_0x1b5ebb,'hidden':_0x5c4582,'inited':_0x531023,'fake':_0xa242a9,'act':_0x567f54,'hex':_0x2192b4(_0x2083b3),'alt':_0x589512===_0x400835(0x2a7)?_0x5f0e7a['gTrwx'](_0x5c4582,_0x5f0e7a[_0x400835(0x75c)](_0xa242a9,-0x1*-0x2516+0x168b+-0x3ba1)):null};}else _0x2390e6['push'](_0x4436f2[_0x400835(0x7ef)]),_0x2390e6[_0x400835(0x24d)](''),_0x2390e6['push'](_0x4436f2['xRBLl']),_0x2390e6['push'](_0x4436f2[_0x400835(0x93b)]);}for(var _0x569ef1=-0x16ef+0x1a6b+-0x37c;_0x569ef1<_0x4bb7a6['lengt'+'h'];_0x569ef1++){var _0x1ae8ad=_0x4bb7a6[_0x569ef1];_0x2390e6[_0x400835(0x24d)](_0x4436f2['FyXPk'](_0x1ae8ad,_0x4436f2[_0x400835(0xafd)])+_0x36295b[_0x1ae8ad]);}_0x2390e6[_0x400835(0x24d)]('');var _0x5372ba=_0x3e5745[_0x400835(0x54b)+'y']||{},_0x40b831=Object[_0x400835(0x5ec)](_0x5372ba);for(var _0x16f7e2=0x10fa+0x515*0x1+0x1*-0x160f;_0x16f7e2<_0x40b831['lengt'+'h'];_0x16f7e2++){if(_0x4436f2[_0x400835(0x387)](_0x4436f2[_0x400835(0x9bc)],_0x4436f2['IhSTF'])){var _0x41598a=_0x4436f2['BlNoK'](_0x26ffd0[_0x379aa2][_0x400835(0x8b1)+'s'][_0x400835(0x71a)](',')+_0x4436f2['vxrKF'],_0x32c1a5[_0xdc872d][_0x400835(0x5f5)+_0x400835(0x23e)]||_0x400835(0x7ed));_0x316cd9[_0x41598a]=_0x4436f2['NFTbV'](_0x441031[_0x41598a]||0x162f*0x1+0x71*0x47+-0x3586,-0x1a10+0x1*0x21b3+-0x7a2);}else{var _0x36eb2d=_0x40b831[_0x16f7e2],_0x3151dd=_0x5372ba[_0x36eb2d];if(!_0x3151dd||!_0x3151dd[_0x400835(0xb7c)+'h'])continue;_0x2390e6[_0x400835(0x24d)](_0x4436f2[_0x400835(0x3bc)](_0x4436f2['MmUmu']+_0x36eb2d,'\x20')+new Array(Math[_0x400835(0xa98)](0x77*-0x8+-0xd8*-0x2b+-0x208f,0x395*0x7+-0x12e5*-0x1+0x16a*-0x1f-_0x36eb2d[_0x400835(0xb7c)+'h']))[_0x400835(0x71a)]('─')),_0x2390e6['push'](_0x400835(0x342)+'set\x20\x20'+_0x400835(0xa17)+_0x400835(0xbf3)+_0x400835(0x399)+_0x400835(0x315)+_0x400835(0xbf3)+'\x20\x20\x20\x20\x20'+_0x400835(0x229));for(var _0x4da284=-0xd*-0x215+0x136b+-0x2e7c;_0x4da284<_0x3151dd[_0x400835(0xb7c)+'h'];_0x4da284++){var _0x230be4=_0x3151dd[_0x4da284],_0x2891a8=typeof _0x230be4['v']===_0x400835(0xaae)+'r'?Math['round'](_0x230be4['v']*(0x1f*0xa+0x140*-0x1+-0x5*-0xca))/(0x1*0x4d3+-0x1d*-0xf9+-0x10*0x1d2):_0x230be4['v'];_0x2390e6[_0x400835(0x24d)](_0x4436f2[_0x400835(0x7d1)](_0x4436f2[_0x400835(0x3bc)](_0x4436f2[_0x400835(0xbdb)]('\x20\x20'+('0x'+_0x230be4['o']['toStr'+'ing'](-0x21b0+0x6b*0x52+-0x86))[_0x400835(0x38a)+'d'](0xba7+0x24fa+0xd*-0x3bd),'\x20')+_0x230be4['k']['padEn'+'d'](0x1*0x11ef+-0x1ac7+-0x1*-0x8e3),'\x20')+String(_0x2891a8)['padEn'+'d'](0x1ec9+0xab+-0x1f64),'\x20')+(_0x230be4[_0x400835(0x229)]||''));}_0x2390e6['push']('');}}if(_0x3e5745['warni'+_0x400835(0x26c)]&&_0x3e5745['warni'+_0x400835(0x26c)][_0x400835(0xb7c)+'h']){_0x2390e6['push'](_0x4436f2[_0x400835(0xafa)]);for(var _0x1dd1d1=0x1286+-0xdcf+-0x47*0x11;_0x1dd1d1<_0x3e5745['warni'+_0x400835(0x26c)][_0x400835(0xb7c)+'h'];_0x1dd1d1++)_0x2390e6[_0x400835(0x24d)](_0x4436f2[_0x400835(0xa92)]+_0x3e5745[_0x400835(0x382)+_0x400835(0x26c)][_0x1dd1d1]);}return _0x2390e6[_0x400835(0x71a)]('\x0a');}window[_0x105055(0x89d)+'entLi'+_0x105055(0x343)+'r'](_0x4436f2['QZAoI'],function(_0x222e1d){var _0x1d088c=_0x105055,_0x4b5a9b=_0x222e1d[_0x1d088c(0x4b9)];if(!_0x4b5a9b||_0x4436f2[_0x1d088c(0x82f)](_0x4b5a9b[_0x1d088c(0x73e)+'ura'],_0x58b1c6))return;try{if(_0x4b5a9b['kind']===_0x1d088c(0x454)){if(_0x1d088c(0x690)==='iurAd'){_0x4436f2['jbYev'](_0x3dcafd)[_0x1d088c(0x41b)]({'host':_0x4b5a9b['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}else _0x5a56be();}if(_0x4436f2[_0x1d088c(0x3f8)](_0x4b5a9b['kind'],'repor'+'t'))_0x3dcafd()[_0x1d088c(0x41b)](_0x4b5a9b[_0x1d088c(0x365)+'t']);}catch(_0x55c44d){console[_0x1d088c(0x215)](_0x4436f2[_0x1d088c(0x290)],_0x4436f2[_0x1d088c(0x84e)](_0x1d088c(0x4b3)+':',_0x237331),_0x55c44d);}});function _0x34ed1b(){_0x1e196a(!![]);}if(document['body'])_0x4436f2['ZEhKa'](_0x34ed1b);else document[_0x105055(0x89d)+'entLi'+_0x105055(0x343)+'r']('DOMCo'+_0x105055(0x567)+'Loade'+'d',_0x34ed1b,{'once':!![]});return;}window['__SAK'+_0x105055(0xba2)+_0x105055(0x5d3)]=window[_0x105055(0x921)+_0x105055(0xba2)+_0x105055(0x5d3)]||{'at':Date[_0x105055(0x2d6)]()};function _0x4aeed2(_0x5b54bb,_0x5bfa7d){var _0x2a9ec1=_0x105055,_0xbf90b9={'__sakura':_0x58b1c6,'kind':_0x5b54bb};if(_0x5bfa7d){for(var _0x1c10f2 in _0x5bfa7d)_0xbf90b9[_0x1c10f2]=_0x5bfa7d[_0x1c10f2];}try{if(window['paren'+'t']&&window[_0x2a9ec1(0x765)+'t']!==window)window['paren'+'t'][_0x2a9ec1(0x913)+_0x2a9ec1(0x30d)+'e'](_0xbf90b9,'*');}catch(_0x490768){}try{if(window['top']&&_0x4436f2[_0x2a9ec1(0x8d7)](window['top'],window))window['top'][_0x2a9ec1(0x913)+_0x2a9ec1(0x30d)+'e'](_0xbf90b9,'*');}catch(_0x61c2b3){}}console[_0x105055(0xb03)](_0x4436f2[_0x105055(0xa42)]+_0x3838a0,_0x4436f2[_0x105055(0x660)](_0x105055(0x4b3)+':'+_0x237331,_0x4436f2[_0x105055(0x151)]),{'host':_0x3232e3,'href':location['href'],'version':_0x3838a0}),_0x4aeed2(_0x105055(0x454),{'host':_0x3232e3,'role':_0x36470f});var _0x327157=window['__SAK'+_0x105055(0xba2)+'W__']&&window['__SAK'+_0x105055(0xba2)+_0x105055(0x5d3)]['at']||Date[_0x105055(0x2d6)]();window['addEv'+_0x105055(0x66a)+_0x105055(0x343)+'r'](_0x4436f2[_0x105055(0x5e1)],function(_0x218604){var _0x40939e=_0x105055;try{var _0x1f3a57=_0x218604&&_0x218604[_0x40939e(0x4b9)];if(!_0x1f3a57||_0x4436f2[_0x40939e(0xac3)](_0x1f3a57['__sak'+'ura'],_0x58b1c6)||_0x4436f2[_0x40939e(0x3c8)](_0x1f3a57[_0x40939e(0x6f6)],'cmd'))return;_0x4436f2['gVmGh'](_0x302e6f,_0x1f3a57['cmd'],_0x1f3a57['arg']);}catch(_0x4228b5){}});try{var _0x4ca741=new BroadcastChannel(_0x4436f2[_0x105055(0x772)]);_0x4ca741['onmes'+_0x105055(0x804)]=function(_0x2946b9){var _0x10af65=_0x105055;if(_0x4436f2[_0x10af65(0x930)](_0x10af65(0xb22),_0x4436f2[_0x10af65(0x337)])){_0x5e9118[_0x10af65(0x2bc)]=!!_0x3d7615;var _0xc965ad=_0x2596c4();if(!_0xc965ad)return;_0xc965ad[_0x10af65(0x269)+'Name']=_0x4436f2['NXYWO']+(_0x11fabe[_0x10af65(0x2bc)]?_0x4436f2['NvIdQ']:'');if(_0x1a6984['petal'])_0x48cd93['petal']['style'][_0x10af65(0x5ab)+'ty']=_0x41c7a8[_0x10af65(0x2bc)]?'1':'.5';if(_0xb23060[_0x10af65(0x2bc)]){_0x121a85(_0x27e6ce[_0x10af65(0x6d2)]);try{var _0x5ebb8c=_0x387682[_0x10af65(0x272)+_0x10af65(0xbe5)+'t']||0x1a3d+-0xa*-0x8f+0x1f*-0xed;if(_0x5ebb8c<0x139*0xd+-0x9a3+0x3d6*-0x1)_0x20d55b(![]);}catch(_0x4e3060){}}}else{var _0x59401a=_0x2946b9[_0x10af65(0x4b9)];if(_0x59401a&&_0x4436f2[_0x10af65(0x144)](_0x59401a['__sak'+_0x10af65(0x9da)],_0x58b1c6)&&_0x59401a['kind']==='cmd')_0x302e6f(_0x59401a['cmd'],_0x59401a['arg']);}};}catch(_0x4916b9){}var _0x25e30e=[];(function _0x5a60ea(){var _0x32789c=_0x105055,_0x1f9723={'XGZUL':_0x4436f2[_0x32789c(0x8bb)],'WLcLC':'Speed'+_0x32789c(0x88b),'hJJTM':_0x32789c(0x474)+_0x32789c(0xb1e),'ZKtlq':_0x4436f2[_0x32789c(0x1a6)],'nlYpc':function(_0x3e14fa,_0x521e36){return _0x4436f2['bKedK'](_0x3e14fa,_0x521e36);},'pTGZR':function(_0x2417e8,_0x2c4886){return _0x2417e8(_0x2c4886);},'cQdHa':function(_0x31e012,_0x150fbc){return _0x4436f2['NOBTk'](_0x31e012,_0x150fbc);},'MVGuF':function(_0x344a0c,_0x994e6d){return _0x344a0c===_0x994e6d;},'ajOKh':_0x32789c(0x17d)+'g','UmbFS':function(_0x3eb04b,_0x4cc5e5){return _0x3eb04b===_0x4cc5e5;},'xMGsX':_0x4436f2[_0x32789c(0xa6e)]};if(_0x4436f2[_0x32789c(0x525)]!=='sHzkz')try{var _0x5770e4=_0x259639;if(_0x5770e4&&_0x5770e4['el'])_0x5770e4['el']['style']['displ'+'ay']=_0x274428?'':'none';var _0x4a4b41=_0x36fc20;if(_0x4a4b41&&_0x4a4b41['cv'])_0x4a4b41['cv']['style'][_0x32789c(0x4fa)+'ay']=_0x5e69a9?'':_0x1f9723[_0x32789c(0x3c1)];}catch(_0x2cd4ea){}else{var _0x5f5a61=['log',_0x4436f2['OCSLL'],_0x32789c(0xa60),_0x4436f2['XEFiu'],_0x4436f2[_0x32789c(0x94d)]];for(var _0x74b426=-0x28*0x3+0x122f+-0x11b7*0x1;_0x74b426<_0x5f5a61[_0x32789c(0xb7c)+'h'];_0x74b426++){_0x32789c(0xa9c)!==_0x4436f2[_0x32789c(0x598)]?(_0x5378f1=!!_0x5e562e['speed']['on'],_0x2e30fd['textC'+'onten'+'t']=_0x1b54bd?_0x1f9723[_0x32789c(0x357)]:_0x1f9723['hJJTM'],_0x3ef38f[_0x32789c(0x4d9)][_0x32789c(0x323)+_0x32789c(0x679)]=_0x4b476b?_0x1fbc38:'trans'+'paren'+'t',_0x2c76fc[_0x32789c(0x4d9)][_0x32789c(0x4b3)]=_0x17f71c?_0x32789c(0x12f)+'1b':_0x1f9723[_0x32789c(0x71d)],_0x196b07&&_0xe0459d[_0x32789c(0x838)]['facto'+'r']&&(_0x133eb4[_0x32789c(0x17e)+'onten'+'t']=_0x1f9723[_0x32789c(0x55a)](_0x1f9723[_0x32789c(0x1bc)](_0x29951f,_0x18af80['speed'][_0x32789c(0xa81)+'r'])[_0x32789c(0x5ee)+'ed'](0x7b5+-0x5*0x6b2+0x19c6),'x'))):function(_0x1637b7){var _0x446922=_0x32789c,_0x410474={'MnEod':function(_0x5e3f2e,_0x3e894d){return _0x5e3f2e===_0x3e894d;},'MftuB':function(_0x4fd91e,_0x1f762a){return _0x1f9723['cQdHa'](_0x4fd91e,_0x1f762a);},'Eykor':_0x446922(0x51b),'PqlaJ':function(_0x326455,_0x480ccd){var _0x27d77d=_0x446922;return _0x1f9723[_0x27d77d(0x445)](_0x326455,_0x480ccd);},'HzsgR':_0x1f9723[_0x446922(0x5dd)],'awXzn':_0x446922(0x41e)+_0x446922(0x16d)+'dkit'};if(_0x1f9723['UmbFS'](_0x446922(0x8a1),'QbxZu'))return _0x2d4bfb[_0x446922(0x1a7)+'e']=_0x3cf844['sourc'+'e']||_0x446922(0x903)+'ntiat'+'e().e'+_0x446922(0x499)+'s.mem'+_0x446922(0x83e),new _0x142b88(_0x282e40['buffe'+'r']);else{var _0x43b342=console[_0x1637b7];if(typeof _0x43b342!==_0x1f9723[_0x446922(0x91b)])return;console[_0x1637b7]=function(){var _0x83e771=_0x446922;if(_0x83e771(0x86e)!=='ZTlKm'){try{if(_0x83e771(0x1fd)!==_0x83e771(0x1a4)){var _0x3a3fe1='';for(var _0x42f9ac=-0x787*0x3+-0x17b5+0x2e4a;_0x42f9ac<arguments[_0x83e771(0xb7c)+'h'];_0x42f9ac++){if(_0x410474[_0x83e771(0x95d)](_0x410474[_0x83e771(0x3b8)],_0x83e771(0x51b)))try{_0x4c836b=_0x34748f[_0x83e771(0x5ec)](_0x1e867c)['slice'](-0xd21+-0x18*0x190+0x32a1,-0x1423+-0x2386+0x37c1);}catch(_0x350cf7){}else{var _0x3d66bb=arguments[_0x42f9ac];if(_0x410474[_0x83e771(0x242)](typeof _0x3d66bb,_0x410474['HzsgR']))_0x3a3fe1+=_0x3d66bb;else{if(_0x3d66bb&&_0x3d66bb[_0x83e771(0x80b)+'ge'])_0x3a3fe1+=_0x3d66bb['messa'+'ge'];}}}if(_0x3a3fe1['index'+'Of'](_0x4f70e9)!==-(0x7cc+-0x1*-0x78d+-0x1*0xf58))return _0x43b342['apply'](console,arguments);if(_0x410474[_0x83e771(0x95d)](_0x3a3fe1[_0x83e771(0x20f)+'Of'](_0x410474[_0x83e771(0x916)]),-(0x22e8+-0x5*-0x8c+0xcd*-0x2f))){var _0xb17c2c=_0x3a3fe1[_0x83e771(0xa06)](0x1d14+0x1d3e*0x1+0x5*-0xbaa,0x23b*0x2+0x2*0x905+0x1e*-0xb6);if(_0x25e30e[_0x83e771(0x20f)+'Of'](_0xb17c2c)===-(0x31*-0x97+0xa2b+0x7b*0x27)&&_0x25e30e[_0x83e771(0xb7c)+'h']<-0x7*-0x1ee+0x1015+-0x1d5b)_0x25e30e[_0x83e771(0x24d)](_0xb17c2c);}}else{if(_0x50d614[_0x83e771(0xba4)+'ns'][_0x564ef3][_0x83e771(0x269)+'List'])_0x320ef1[_0x83e771(0xba4)+'ns'][_0x418e18][_0x83e771(0x269)+_0x83e771(0x9d5)]=_0x83e771(0x4db)+'b'+(_0x410474[_0x83e771(0x2fc)](_0x1bb0e3,_0x51df3b)?_0x83e771(0x958)+'ve':'');}}catch(_0x5e0381){}return _0x43b342[_0x83e771(0x4d0)](console,arguments);}else _0x4b0b05(_0x210080);};}}(_0x5f5a61[_0x74b426]);}}}());var _0x16e196={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x1f15e8=null,_0x52e821=null,_0x18f98c=-(0x57f*-0x3+-0x1303+-0x95*-0x3d),_0x4f9b1f=null;function _0x2b44fe(_0xdfcdb){var _0x3c1379=_0x105055;if(_0x4436f2['WquCi'](_0x4436f2[_0x3c1379(0xbbe)],_0x4436f2['FBelT']))return _0x50afea[-0x1d*0x158+0x1b91+0xb67]=_0x26dc78,_0x5b0c5c[0x1*-0x21ff+0x74*-0x35+0x1*0x3a03];else try{if(_0x4436f2[_0x3c1379(0xb59)]===_0x3c1379(0xbad)){if(!_0xdfcdb)return;var _0x45d34d=_0xdfcdb[_0x3c1379(0x903)+'nce']?_0xdfcdb['insta'+'nce'][_0x3c1379(0x8eb)+'ts']:_0xdfcdb['expor'+'ts']||null;if(!_0x45d34d)return;if(!_0x4f9b1f)try{if(_0x3c1379(0xc08)!==_0x3c1379(0xa3e))_0x4f9b1f=Object[_0x3c1379(0x5ec)](_0x45d34d)[_0x3c1379(0xa06)](0x333+-0x1*-0x58a+-0x8bd,-0x19*-0x175+0xe59+-0x32ae);else return _0x4436f2['vUTne'](_0x1ac86b['round'](_0x4436f2[_0x3c1379(0x9ba)](_0x309739,-0x871+-0xee4+0x17b9)),-0xa1c*0x1+0x8*0x3a9+0x259*-0x8);}catch(_0x3cc6cd){}var _0x58b659=_0x45d34d['memor'+'y'];if(_0x58b659&&_0x58b659[_0x3c1379(0xaec)+'r']&&_0x4436f2[_0x3c1379(0x318)](_0x58b659[_0x3c1379(0xaec)+'r'][_0x3c1379(0x401)+_0x3c1379(0x1df)],0x1dd8+0x2173+-0x3f4b)){if(_0x3c1379(0xaf5)===_0x4436f2[_0x3c1379(0xa2a)]){if(_0xf59fc5['paren'+'t']&&_0x4436f2['NpbED'](_0x27d71d[_0x3c1379(0x765)+'t'],_0x2d747c))_0x2c9dea[_0x3c1379(0x765)+'t'][_0x3c1379(0x913)+'essag'+'e'](_0x48d6cd,'*');}else _0x52e821=_0x58b659,_0x18f98c=_0x4436f2['IlgBK'](Date['now'](),_0x327157);}}else _0x606405[_0x3c1379(0xa27)]['enabl'+'ed']=![];}catch(_0x1b4190){}}function _0x43c988(){var _0x115269=_0x105055;try{if(typeof WebAssembly===_0x4436f2['KECLV'])return;var _0xfd0f8e=[_0x115269(0x903)+_0x115269(0x3a3)+'e',_0x4436f2[_0x115269(0xb60)]];for(var _0x137cdf=-0x233*-0x3+0xd1d+-0x13b6;_0x137cdf<_0xfd0f8e[_0x115269(0xb7c)+'h'];_0x137cdf++){(function(_0x5a5ca4){var _0x531d21=_0x115269,_0x5ad34c={'zmtKU':function(_0x2743d4){return _0x2743d4();},'pQFkV':_0x4436f2[_0x531d21(0x978)],'Srbvc':function(_0x525ce2,_0x4bebd6){return _0x525ce2===_0x4bebd6;},'HaZZV':'funct'+_0x531d21(0x771),'ilNzZ':function(_0x4a852c,_0x530751){return _0x4a852c(_0x530751);},'jfIko':'VERSI'+'ON','WasBQ':function(_0x24d23f,_0x25fe1f){return _0x24d23f===_0x25fe1f;},'JfvVa':function(_0x1126dd,_0x1d0514){return _0x1126dd+_0x1d0514;},'LwOID':function(_0x251eb9,_0x3c8eec){return _0x251eb9===_0x3c8eec;},'bFgSf':_0x531d21(0x8b3)+_0x531d21(0xb17)+'ut\x20yo'+'u','xmEIu':function(_0x42e772,_0x1f1535){var _0x3431cd=_0x531d21;return _0x4436f2[_0x3431cd(0xbdc)](_0x42e772,_0x1f1535);},'TJOrR':_0x4436f2[_0x531d21(0x2e5)],'dMqXR':function(_0x53f2c1,_0x299c54){return _0x4436f2['XbgCE'](_0x53f2c1,_0x299c54);},'Iqkqy':function(_0x2c97af,_0x5236b3){var _0x3171f4=_0x531d21;return _0x4436f2[_0x3171f4(0x9f0)](_0x2c97af,_0x5236b3);},'xNpOW':_0x531d21(0x25e)+'8','vNjbq':function(_0xb92667,_0x1a8cc4,_0x49d1c4,_0x4f4419){var _0x2b89a6=_0x531d21;return _0x4436f2[_0x2b89a6(0xb35)](_0xb92667,_0x1a8cc4,_0x49d1c4,_0x4f4419);},'REQNu':_0x4436f2[_0x531d21(0xbd9)],'hKRyk':function(_0x5c39a5,_0x4b5f7,_0x5f375a){return _0x5c39a5(_0x4b5f7,_0x5f375a);}},_0x48db06=WebAssembly[_0x5a5ca4];if(_0x4436f2['NpbED'](typeof _0x48db06,'funct'+'ion')||_0x48db06[_0x531d21(0x73e)+_0x531d21(0x919)+'moryT'+'ap'])return;var _0x404b83=function(){var _0x1d6236=_0x531d21,_0x5b4a1f=_0x48db06['apply'](this,arguments);try{if(_0x1d6236(0x1e5)===_0x5ad34c['pQFkV']){if(_0x5b4a1f&&_0x5ad34c[_0x1d6236(0x515)](typeof _0x5b4a1f['then'],_0x5ad34c[_0x1d6236(0x370)]))_0x5b4a1f[_0x1d6236(0x99b)](_0x2b44fe,function(){});else _0x5ad34c['ilNzZ'](_0x2b44fe,_0x5b4a1f);}else _0x13687c=!_0x37aaa2,_0x5ad34c[_0x1d6236(0x38c)](_0x3fefaf);}catch(_0x76ea69){}return _0x5b4a1f;};_0x404b83[_0x531d21(0x73e)+_0x531d21(0x919)+_0x531d21(0x734)+'ap']=!![];try{if(_0x4436f2['eSMkL'](_0x4436f2[_0x531d21(0xb65)],_0x531d21(0x5f8)))Object['defin'+'eProp'+_0x531d21(0x759)](_0x404b83,_0x4436f2[_0x531d21(0x612)],{'value':_0x48db06[_0x531d21(0x14d)],'configurable':!![]});else{var _0x2a6670=_0x1a049e[_0x38adcc][_0x531d21(0x180)+'et']['k'],_0x13af04='';if(_0x2a6670===_0x5ad34c[_0x531d21(0x9f6)])_0x13af04=_0x2ae14f?_0x24e68f['versi'+'on']:'-';else{if(_0x5ad34c[_0x531d21(0x486)](_0x2a6670,_0x531d21(0xa6f)+_0x531d21(0x415)+'regis'+_0x531d21(0x6bc)))_0x13af04=_0x3a3b3f?_0x5ad34c['JfvVa'](_0x4d5a99['hooks'+_0x531d21(0x1f8)+'ed'],_0x531d21(0x245))+_0x2c8f8c[_0x531d21(0x2db)+_0x531d21(0x230)+'tered'+_0x531d21(0xb08)]:'-';else{if(_0x5ad34c[_0x531d21(0xb6b)](_0x2a6670,'from\x20'+'insta'+'ntiat'+_0x531d21(0xb94)))_0x13af04=_0x280fae&&_0x1f1e94['wasmM'+'emory']&&_0x3f1bd1[_0x531d21(0x99d)+'emory'][_0x531d21(0x414)+_0x531d21(0x297)]?_0x3b61c0['round'](_0x5853e0['wasmM'+_0x531d21(0x12e)][_0x531d21(0x4e1)]/(0x3a1+0x1209b4*-0x1+0x1*0x220613))+(_0x531d21(0xb41)+'\x20')+_0x149c4a[_0x531d21(0x99d)+_0x531d21(0x12e)]['atMs']+'ms':'-';else{if(_0x2a6670===_0x531d21(0x6ef)+_0x531d21(0xa30)+'orkSy'+'nc')_0x13af04=_0x4f9f34&&_0x396efc['esp']?_0x105860(_0xb9f823['esp']['playe'+_0x531d21(0x678)+'t']):'-';else{if(_0x2a6670===_0x5ad34c['bFgSf'])_0x13af04=_0x4418ba&&_0x1e5af0['esp']?_0x5ad34c[_0x531d21(0x664)](_0x1b13d1,_0x2d332a[_0x531d21(0x5b4)]['enemy'+_0x531d21(0x434)]):'-';else{if(_0x2a6670===_0x5ad34c[_0x531d21(0x4b5)])_0x13af04=_0x3258fa&&_0x227c05['esp']&&_0x5eccc0[_0x531d21(0x5b4)][_0x531d21(0x95f)+'a']?_0x5ad34c['JfvVa'](_0x5ad34c['dMqXR'](_0x5e0f06[_0x531d21(0x5b4)][_0x531d21(0x95f)+'a'],'\x20('),_0xfe5653[_0x531d21(0x5b4)][_0x531d21(0x95f)+'aFrom'])+')':'-';else{if(_0x5ad34c['Iqkqy'](_0x2a6670,_0x531d21(0x2d8)+_0x531d21(0x773)+'ler+0'+'x2E4'))_0x13af04=_0x3cff17&&_0x202ad1['local']&&_0x10faca[_0x531d21(0x2b6)][_0x531d21(0x384)]?_0x4ec20[_0x531d21(0x2b6)][_0x531d21(0x384)][_0x531d21(0x9df)](function(_0x257d39){return _0x3f7ed4['round'](_0x257d39*(0x94*-0x38+0x1*-0x868+0x292c))/(-0x170*-0x2+0x1ec1*0x1+0x43*-0x7f);})[_0x531d21(0x71a)]('\x20\x20'):'-';else{if(_0x2a6670===_0x5ad34c['xNpOW'])_0x13af04=_0x102cd8&&_0x3447c1['local']&&_0x27acf8['local'][_0x531d21(0x7d7)]?_0x323d94[_0x531d21(0x2b6)]['eye'][_0x531d21(0x9df)](function(_0x382075){var _0x46a6cd=_0x531d21;return _0x3cd920[_0x46a6cd(0x679)](_0x382075*(-0x67c*0x1+0x1*0x1d41+0x11*-0x151))/(0x1006+-0x2237+0x1295*0x1);})[_0x531d21(0x71a)]('\x20\x20'):'-';else{var _0x26697c=_0x2a6670[_0x531d21(0xb19)]('+');_0x13af04=_0x5ad34c[_0x531d21(0x379)](_0x1648b6,_0x3efff3,_0x26697c[0xbf*0x1+-0x49*-0x40+-0x12ff]['index'+'Of']('Healt'+'h')===0x9be+0xd5a+-0xb8c*0x2?_0x5ad34c[_0x531d21(0x1f5)]:_0x531d21(0x2d8)+'ntrol'+'ler',_0x5ad34c[_0x531d21(0xc0c)](_0x47cb08,_0x26697c[-0xd84*0x1+-0x842+0x15c7],0x17*-0x11d+0x2e3*-0xd+-0x2*-0x1f99));}}}}}}}}if(_0x13af04!==_0x268e0a[_0x18633e][_0x531d21(0x17e)+_0x531d21(0x14e)+'t'])_0x241d94[_0x939356][_0x531d21(0x17e)+'onten'+'t']=_0x13af04;}}catch(_0x4e7bd4){}WebAssembly[_0x5a5ca4]=_0x404b83;}(_0xfd0f8e[_0x137cdf]));}}catch(_0x167245){}}var _0x183396=null,_0x28f88b=null,_0x41484b={},_0x5d08a2=[],_0x242b92=[],_0x1bea52=[{'type':_0x105055(0x2d8)+'ntrol'+'ler','keep':!![]},{'type':_0x4436f2[_0x105055(0xbd9)],'keep':!![]},{'type':_0x4436f2[_0x105055(0x7af)],'keep':![]},{'type':_0x105055(0x64e)+'ameMa'+_0x105055(0x47b),'keep':!![]},{'type':_0x4436f2['DszAS'],'keep':!![]},{'type':'Photo'+'nNetw'+'orkSy'+'nc','keep':!![],'many':!![]},{'type':'Netwo'+_0x105055(0x68f)+_0x105055(0x19d)+'imati'+_0x105055(0xb7a),'keep':!![],'many':!![]},{'type':'NPC_C'+'otrol'+'ler','keep':!![],'many':!![]},{'type':_0x4436f2[_0x105055(0x874)],'keep':!![],'many':!![]}],_0x4b11c1=['Assem'+'bly-C'+'Sharp'+_0x105055(0x8cd),_0x4436f2[_0x105055(0x84c)],_0x4436f2[_0x105055(0x1f7)],_0x105055(0x48c)+'t.dll',_0x105055(0x31a)+_0x105055(0xa54)+'racte'+_0x105055(0x6c8)+'rolle'+'r.dll',_0x4436f2['nyMvs']];(function _0x2af3a6(){var _0x50d5b4=_0x105055;try{if(_0x4436f2[_0x50d5b4(0x3c8)](_0x4436f2['RaueM'],_0x50d5b4(0x351)))_0x19ab89();else{var _0x5edf04=window[_0x50d5b4(0x41e)+'WebMo'+_0x50d5b4(0x263)]&&window[_0x50d5b4(0x41e)+_0x50d5b4(0x16d)+'dkit'][_0x50d5b4(0xa4e)+'me'];if(!_0x5edf04||_0x4436f2[_0x50d5b4(0x360)](typeof _0x5edf04['creat'+'ePlug'+'in'],_0x4436f2['gEBLj'])){if(_0x4436f2['mHBYC']===_0x4436f2[_0x50d5b4(0xb79)]){_0x16e196[_0x50d5b4(0xa60)]=_0x50d5b4(0xa4e)+_0x50d5b4(0x375)+_0x50d5b4(0x465)+'lugin'+'\x20unav'+_0x50d5b4(0xbb6)+'le';return;}else return-0xa72*0x2+0x619+0xecb*0x1;}_0x16e196[_0x50d5b4(0x30f)+'pted']=!![],_0x28f88b=_0x5edf04[_0x50d5b4(0x4c9)+_0x50d5b4(0x727)+'in']({'name':_0x4436f2[_0x50d5b4(0x2ec)],'version':_0x3838a0,'referencedAssemblies':_0x4b11c1[_0x50d5b4(0xa06)]()}),_0x16e196['ok']=!![];try{if(_0x4436f2[_0x50d5b4(0x137)](_0x50d5b4(0x418),_0x4436f2[_0x50d5b4(0x8f2)])){var _0x565dd2=window[_0x50d5b4(0x41e)+_0x50d5b4(0x16d)+'dkit'][_0x50d5b4(0xa4e)+'me'];_0x565dd2[_0x50d5b4(0x73e)+'uraTa'+'g']=_0x4436f2['Kbpqd'](_0x3838a0,':')+Math[_0x50d5b4(0x16b)+'m']()['toStr'+'ing'](-0x8fe*0x2+0x579+0xca7)['slice'](0x1ac7+0x19*0x4a+-0x21ff,0x1fc*0x7+-0x1eea+0x1110),_0x1f15e8=_0x565dd2[_0x50d5b4(0x73e)+'uraTa'+'g'];}else{_0x16e7d0()[_0x50d5b4(0x41b)]({'host':_0x2adda7[_0x50d5b4(0x7eb)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}}catch(_0x7229d5){}_0x206c0e(),_0x16e196[_0x50d5b4(0x2db)+_0x50d5b4(0x230)+_0x50d5b4(0x6bc)]=_0x5d08a2['lengt'+'h'],_0x43c988(),_0x16e196[_0x50d5b4(0x176)+_0x50d5b4(0x210)]=!![];}}catch(_0x30617d){_0x16e196[_0x50d5b4(0xa60)]=_0x4436f2[_0x50d5b4(0x4f1)](String,_0x30617d&&_0x30617d['messa'+'ge']||_0x30617d);}}());var _0xa40b7c=new Float32Array(-0x1332+-0x1dcc+-0x3*-0x1055),_0x412661=new Int32Array(_0xa40b7c[_0x105055(0xaec)+'r']);function _0x27726a(_0x4832a0){return _0xa40b7c[-0x647*-0x1+0x126e*-0x1+0x33*0x3d]=_0x4832a0,_0x412661[0xdb*0x9+-0x5e8+-0x3*0x99];}function _0x1d7419(_0xf2d08c){var _0x556fad=_0x105055;return _0x412661[-0x13fc*-0x1+0x1f06+-0x3302]=_0x4436f2[_0x556fad(0xade)](_0xf2d08c,0x1*0xa99+-0x1caf*-0x1+-0x2748),_0xa40b7c[-0x25fa+-0x15b8+0x1dd9*0x2];}var _0x311dd0={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x152f0f(){var _0x4d42a4=_0x105055,_0xe40388={'ykdIE':function(_0x5d7ae1,_0x318506){return _0x4436f2['cYHLH'](_0x5d7ae1,_0x318506);},'ncyIZ':function(_0x5ececd,_0x4eea6e){return _0x5ececd/_0x4eea6e;}};try{if(_0x28f88b&&_0x28f88b['_runt'+'ime']){var _0x1a6922=_0x28f88b[_0x4d42a4(0x6f0)+_0x4d42a4(0x75f)];if(_0x4436f2['Loyae'](typeof _0x1a6922['resol'+_0x4d42a4(0x6d7)+'e'],_0x4436f2[_0x4d42a4(0xa6e)])){if(_0x4436f2[_0x4d42a4(0x7aa)](_0x4d42a4(0x88f),'vUQnl'))_0x1e62ea[_0x314f90+_0x4436f2['pfbSf']+_0x1e6bba[_0x10b03a]['o']['toStr'+'ing'](-0x49*-0x15+0x7a5*0x1+-0xd92)]=_0xcc121f[_0x272900]['v'];else{var _0x4d5396=_0x1a6922['resol'+'veGam'+'e']();if(_0x4d5396)return _0x311dd0['sourc'+'e']=_0x4436f2[_0x4d42a4(0xbc2)],_0x4d5396;}}if(_0x1a6922['_game'])return _0x4d42a4(0xae6)!==_0x4d42a4(0xa65)?(_0x311dd0[_0x4d42a4(0x1a7)+'e']='plugi'+_0x4d42a4(0x550)+'ntime'+_0x4d42a4(0x832)+'e',_0x1a6922[_0x4d42a4(0xbd4)]):![];}}catch(_0xc8b10c){}try{var _0x1cb194=window[_0x4d42a4(0x41e)+'WebMo'+'dkit']&&window[_0x4d42a4(0x41e)+_0x4d42a4(0x16d)+'dkit']['Runti'+'me'];if(_0x1cb194&&_0x4436f2[_0x4d42a4(0x9f0)](typeof _0x1cb194['resol'+'veGam'+'e'],_0x4436f2[_0x4d42a4(0xa6e)])){var _0x1c8d0b=_0x1cb194['resol'+'veGam'+'e']();if(_0x1c8d0b){if(_0x4436f2[_0x4d42a4(0x9f0)]('SLblo',_0x4d42a4(0x67f))){_0x10c100[_0x4d42a4(0xac8)]={};for(var _0x4e42d7=-0x674*-0x5+0x5f4+-0x2638*0x1;_0x4e42d7<_0x24fb9a['lengt'+'h'];_0x4e42d7++){var _0x5eda10=_0x19ee66(_0x1a5d65+_0x101d95(_0x5a76f2[_0x4e42d7][0x65*-0x25+0x1*0x1e2f+0x31e*-0x5],-0x28d+0x145*-0x1+-0x7*-0x8e),_0x4d42a4(0x3e6));if(_0xe40388[_0x4d42a4(0x202)](_0x5eda10,_0x5a1e99))_0x200382[_0x4d42a4(0xac8)][_0x7ab40c[_0x4e42d7][0x1c9+-0xd*-0x2dd+-0x5*0x7cd]]=_0x5eda10;}}else return _0x311dd0['sourc'+'e']='Runti'+_0x4d42a4(0x4a2)+_0x4d42a4(0x7bb)+'Game('+')',_0x1c8d0b;}}if(_0x1cb194&&_0x1cb194[_0x4d42a4(0xbd4)])return _0x311dd0['sourc'+'e']=_0x4436f2[_0x4d42a4(0x412)],_0x1cb194;}catch(_0x320fd1){}try{if(_0x4d42a4(0x6f5)===_0x4d42a4(0x6f5)){var _0x27f363=window['unity'+_0x4d42a4(0x7dc)+_0x4d42a4(0x455)]||window[_0x4d42a4(0x63c)+_0x4d42a4(0x478)]||window[_0x4d42a4(0xa8d)];if(_0x27f363)return _0x311dd0[_0x4d42a4(0x1a7)+'e']=_0x4d42a4(0x8b5)+_0x4d42a4(0xb9b)+'bal',_0x27f363;}else return _0x192e6d['warn'](_0x4d42a4(0x361)+_0x4d42a4(0x8cc)+_0x4d42a4(0x413)+_0x4d42a4(0x62e)+_0x4d42a4(0xbb6)+'le','color'+':'+_0x5f4b04,_0x4ea327),null;}catch(_0x3a04a5){}try{if(_0x4436f2['Bpdzw']!==_0x4d42a4(0x967)){if(typeof game!==_0x4d42a4(0x149)+_0x4d42a4(0xb6c)&&game)return _0x311dd0[_0x4d42a4(0x1a7)+'e']=_0x4436f2[_0x4d42a4(0x9de)],game;}else _0xb7348f=_0x210a67['x']/(-0xc82+-0x23bb+0x3425),_0x14856a=_0xe40388[_0x4d42a4(0xbbb)](_0x10a88b['y'],0x3e7+-0x4*-0x287+-0xa1b);}catch(_0x1943ba){}try{var _0x537995=Object['keys'](window);for(var _0x1d404e=0x2681+-0x1bf*0x9+0x1*-0x16ca;_0x4436f2[_0x4d42a4(0x677)](_0x1d404e,_0x537995[_0x4d42a4(0xb7c)+'h'])&&_0x1d404e<0xb6f*0x2+-0x1349+-0x13d;_0x1d404e++){var _0x3d4a7e=window[_0x537995[_0x1d404e]];if(_0x3d4a7e&&_0x4436f2[_0x4d42a4(0x35b)](typeof _0x3d4a7e,'objec'+'t')&&_0x3d4a7e[_0x4d42a4(0x241)+'e']&&_0x3d4a7e['Modul'+'e'][_0x4d42a4(0x2c3)+'8']&&_0x3d4a7e[_0x4d42a4(0x241)+'e']['HEAPU'+'8'][_0x4d42a4(0xaec)+'r'])return _0x311dd0[_0x4d42a4(0x1a7)+'e']=_0x4436f2[_0x4d42a4(0x73c)](_0x4436f2[_0x4d42a4(0x5da)](_0x4d42a4(0x8b5)+'w.',_0x537995[_0x1d404e]),_0x4d42a4(0x9ca)+'le'),_0x3d4a7e;}}catch(_0x28ad17){}return _0x311dd0['sourc'+'e']=null,null;}function _0x140148(){var _0xf83e79=_0x105055;if(_0x4436f2[_0xf83e79(0x736)](_0x4436f2['IidOm'],'gEWRT'))try{_0x1a9ece[_0xf83e79(0x17e)+_0xf83e79(0x14e)+'t']=_0x762e62(_0x41ff22);}catch(_0x36472c){_0x33d8bc['textC'+_0xf83e79(0x14e)+'t']=_0x34f3aa[_0xf83e79(0x17d)+_0xf83e79(0x67a)](_0x272478,null,0x2407+0x2*-0x2f8+-0x1e16);}else{try{if(_0x52e821&&_0x52e821[_0xf83e79(0xaec)+'r']&&_0x52e821[_0xf83e79(0xaec)+'r'][_0xf83e79(0x401)+_0xf83e79(0x1df)]){if(_0xf83e79(0x5be)!==_0x4436f2[_0xf83e79(0x74f)]){var _0x30ac06={},_0x10d4c8=_0x1a34b6();if(!_0x10d4c8)return _0x30ac06;_0x30ac06[_0xf83e79(0x27d)+_0xf83e79(0x850)+_0xf83e79(0xa5e)]=_0x10d4c8[_0xf83e79(0x6c0)+'Look'];for(var _0x14e55e in _0x10d4c8[_0xf83e79(0xbf5)+'s'])_0x30ac06[_0xf83e79(0x27d)+'Look+'+_0x14e55e]=_0x10d4c8['float'+'s'][_0x14e55e];if(_0x10d4c8[_0xf83e79(0x95f)+'a'])_0x30ac06[_0xf83e79(0x27d)+_0xf83e79(0xb04)+_0xf83e79(0x95f)+'a']=_0x10d4c8[_0xf83e79(0x95f)+'a'];return _0x30ac06;}else return _0x311dd0[_0xf83e79(0x1a7)+'e']=_0x311dd0[_0xf83e79(0x1a7)+'e']||_0x4436f2[_0xf83e79(0x4f8)],new Uint8Array(_0x52e821[_0xf83e79(0xaec)+'r']);}}catch(_0x4dd734){}try{var _0x41e8bc=_0x4436f2['pfWLm'](_0x152f0f);if(_0x41e8bc&&_0x41e8bc['Modul'+'e']&&_0x41e8bc['Modul'+'e'][_0xf83e79(0x2c3)+'8']&&_0x41e8bc[_0xf83e79(0x241)+'e'][_0xf83e79(0x2c3)+'8'][_0xf83e79(0xaec)+'r'])return _0x41e8bc[_0xf83e79(0x241)+'e']['HEAPU'+'8'];}catch(_0x27a245){}return null;}}function _0x26e364(){var _0x4a44b8=_0x105055,_0xfb2ae7={'icoDr':_0x4436f2['tseVc'],'ybQng':function(_0x5e3f4f){return _0x5e3f4f();},'HOXan':function(_0x3f5bdd,_0x73b3c7){return _0x3f5bdd<=_0x73b3c7;},'BTndG':function(_0x255281,_0x4e4eb7,_0x5a7e79,_0x476416,_0xe39b31){var _0x55ae76=_0x5dd8;return _0x4436f2[_0x55ae76(0x7e3)](_0x255281,_0x4e4eb7,_0x5a7e79,_0x476416,_0xe39b31);}};if(_0x4a44b8(0x95a)===_0x4a44b8(0x95a)){var _0x1488c2=_0x140148();if(!_0x1488c2)return null;try{if(_0x4a44b8(0xb58)==='baSVE')return new DataView(_0x1488c2[_0x4a44b8(0xaec)+'r'],_0x1488c2[_0x4a44b8(0x93e)+'ffset'],_0x1488c2[_0x4a44b8(0x401)+'ength']);else{var _0x3854f7=_0xfb2ae7[_0x4a44b8(0x676)][_0x4a44b8(0xb19)]('|'),_0x6136b0=-0x17*0x7f+-0x21*0x8b+0x1d54;while(!![]){switch(_0x3854f7[_0x6136b0++]){case'0':var _0x54a2e7=_0xfb2ae7[_0x4a44b8(0x845)](_0x347b7f);continue;case'1':return{'identified':_0x3c1028[_0x4a44b8(0x46f)+'ified'],'why':_0x58699c[_0x4a44b8(0xa02)],'rawPitch':_0x3911d6[_0x4a44b8(0x8f4)],'rawYaw':_0x130017['yaw'],'fov':_0xed5035[_0x4a44b8(0x2e9)],'fovSane':_0x571c05['fov']>=0x568*-0x2+-0x1dd*0x1+0xce9&&_0xfb2ae7['HOXan'](_0x4bb9fb['fov'],-0x62a*0x2+0xe97+-0x1d5*0x1),'centreX':_0x4a6e60,'centreY':_0x1a3bf7};case'2':if(_0x54a2e7){var _0x167c91=_0xfb2ae7[_0x4a44b8(0x857)](_0x5a3987,_0x54a2e7['eye'],[_0x54a2e7['eye'][-0xa6+-0x1729+0x17cf],_0x54a2e7[_0x4a44b8(0x7d7)][0x11c3+0x1*-0x2e7+-0xedb*0x1],_0x54a2e7[_0x4a44b8(0x7d7)][0xe43+0xa*-0x254+0x907]+(-0x5*0x29b+-0x2e7*0xa+0x2a0e)],0x156a+0x11be+-0x2340*0x1,0x24e+0x1252+-0x10b8);_0x167c91&&(_0x4a6e60=_0x167c91['x']/(0x1326+-0x1*-0xa8b+-0x17*0x11f),_0x1a3bf7=_0x167c91['y']/(0x1bb9+-0x1*-0xb61+-0x2332));}continue;case'3':var _0x4b035c=_0x5c92d1();continue;case'4':var _0x4a6e60=null,_0x1a3bf7=null;continue;}break;}}}catch(_0x57d8d8){if(_0x4436f2[_0x4a44b8(0x9d7)](_0x4436f2[_0x4a44b8(0x7fc)],_0x4436f2[_0x4a44b8(0xac6)])){if(_0x254fd9)return _0x503ce8;try{if(!_0x12102f[_0x4a44b8(0xbdf)]||!_0x34479[_0x4a44b8(0xbdf)][_0x4a44b8(0x48e)+_0x4a44b8(0x635)+'d'])return null;var _0x19b4a1=_0x2e2063['creat'+_0x4a44b8(0x64c)+'ent'](_0x4a44b8(0x687)+'s');return _0x19b4a1['id']=_0x4436f2[_0x4a44b8(0x7fe)],_0x19b4a1[_0x4a44b8(0x4d9)]['cssTe'+'xt']=_0x4436f2[_0x4a44b8(0xba1)],_0x2f5243[_0x4a44b8(0xbdf)][_0x4a44b8(0x48e)+'dChil'+'d'](_0x19b4a1),_0x4fba93={'cv':_0x19b4a1},_0x40ef68;}catch(_0x7dfc1e){return null;}}else return null;}}else{var _0x406b01=_0x3e6e97['Unity'+_0x4a44b8(0x16d)+_0x4a44b8(0x263)][_0x4a44b8(0xa4e)+'me'];_0x406b01[_0x4a44b8(0x73e)+_0x4a44b8(0x5cc)+'g']=_0x4436f2[_0x4a44b8(0x160)](_0x30e8ac,':')+_0x445205['rando'+'m']()['toStr'+_0x4a44b8(0x1c0)](-0x1345*-0x1+-0x1d9+0x452*-0x4)[_0x4a44b8(0xa06)](-0x2604+-0x150d+0x3b13,0x4e4+-0x26ac+-0x29a*-0xd),_0xfd33e6=_0x406b01[_0x4a44b8(0x73e)+_0x4a44b8(0x5cc)+'g'];}}function _0x3c6e14(_0x109e53,_0x21711a){var _0x5c7a7c=_0x105055,_0x58b87a=_0x4436f2['jchDA'](_0x26e364);if(!_0x58b87a)return _0x311dd0['faile'+'d']++,_0x311dd0[_0x5c7a7c(0x7c6)+'rror']=_0x311dd0['lastE'+'rror']||'no\x20HE'+_0x5c7a7c(0x45e)+'-\x20Uni'+_0x5c7a7c(0x957)+_0x5c7a7c(0x31b)+_0x5c7a7c(0x642)+'\x20reac'+'hable'+_0x5c7a7c(0x8b4)+'Runti'+_0x5c7a7c(0x4a2)+_0x5c7a7c(0x7bb)+_0x5c7a7c(0xab6)+')\x20or\x20'+_0x5c7a7c(0x392)+_0x5c7a7c(0xba6)+'\x20glob'+'al',undefined;if(_0x109e53<-0x2319+0x1bae+0x76b||_0x4436f2[_0x5c7a7c(0x81f)](_0x4436f2[_0x5c7a7c(0x7d1)](_0x109e53,0x86e*-0x3+0x25ea+-0x327*0x4),_0x58b87a['byteL'+'ength'])){if(_0x5c7a7c(0x264)===_0x5c7a7c(0x264))return _0x311dd0[_0x5c7a7c(0x276)+'d']++,_0x311dd0[_0x5c7a7c(0x7c6)+_0x5c7a7c(0x1e9)]=_0x311dd0['lastE'+_0x5c7a7c(0x1e9)]||_0x4436f2['WsGdt'](_0x4436f2[_0x5c7a7c(0x3bc)](_0x4436f2[_0x5c7a7c(0x175)],_0x109e53[_0x5c7a7c(0x322)+_0x5c7a7c(0x1c0)](-0x1*0x19a5+-0x49*-0xb+0x1692)),'\x20past'+_0x5c7a7c(0x681)+'\x20end\x20'+'0x')+_0x58b87a[_0x5c7a7c(0x401)+_0x5c7a7c(0x1df)]['toStr'+_0x5c7a7c(0x1c0)](0x903+0x1*-0xc5+-0x2*0x417),undefined;else _0x2b9a8a['push'](_0x5c7a7c(0x166)+_0x5c7a7c(0x561)+_0x5c7a7c(0x16c)+'\x20capt'+'ured\x20'+'yet.'),_0x226f19[_0x5c7a7c(0x24d)](''),_0x24761e[_0x5c7a7c(0x24d)](_0x5c7a7c(0x8e5)+'ooks\x20'+_0x5c7a7c(0x184)+_0x5c7a7c(0xa20)+_0x5c7a7c(0x663)+'e\x27s\x20o'+'wn\x20Up'+'date('+');\x20no'+_0x5c7a7c(0x282)+_0x5c7a7c(0x6cd)+_0x5c7a7c(0x271)+_0x5c7a7c(0x44d)),_0x5087c1[_0x5c7a7c(0x24d)](_0x4436f2['WnxXt']);}try{_0x311dd0['ok']++;switch(_0x21711a){case'u8':return _0x58b87a[_0x5c7a7c(0xbce)+_0x5c7a7c(0x817)](_0x109e53);case'i8':return _0x58b87a['getIn'+'t8'](_0x109e53);case _0x5c7a7c(0x9dc):return _0x58b87a[_0x5c7a7c(0x1bb)+_0x5c7a7c(0x29f)](_0x109e53,!![]);case _0x5c7a7c(0x444):return _0x58b87a['getUi'+'nt16'](_0x109e53,!![]);case _0x5c7a7c(0x3e6):return _0x58b87a[_0x5c7a7c(0x1bb)+_0x5c7a7c(0x16f)](_0x109e53,!![]);case _0x5c7a7c(0x380):return _0x58b87a['getUi'+'nt32'](_0x109e53,!![]);case'f32':return _0x58b87a[_0x5c7a7c(0x391)+_0x5c7a7c(0x6a6)](_0x109e53,!![]);case'f64':return _0x58b87a['getFl'+_0x5c7a7c(0xa9f)](_0x109e53,!![]);case'v2':case'v3':case'v4':return _0x58b87a[_0x5c7a7c(0x391)+_0x5c7a7c(0x6a6)](_0x109e53,!![]);default:return _0x58b87a[_0x5c7a7c(0x1bb)+_0x5c7a7c(0x16f)](_0x109e53,!![]);}}catch(_0x1a92f7){return _0x311dd0[_0x5c7a7c(0x276)+'d']++,_0x311dd0['lastE'+'rror']=_0x311dd0[_0x5c7a7c(0x7c6)+_0x5c7a7c(0x1e9)]||_0x4436f2[_0x5c7a7c(0x4f1)](String,_0x1a92f7&&_0x1a92f7['messa'+'ge']||_0x1a92f7)[_0x5c7a7c(0xa06)](0x1*-0x587+0x225*0x1+-0x1b1*-0x2,-0x14f4*0x1+-0xf1b+-0xc2d*-0x3),undefined;}}function _0x13670f(_0x53e1d6,_0x40dd1e,_0x19460b){var _0x1cfd97=_0x105055;if(_0x4436f2['rMNwz']===_0x4436f2['ZMhvJ'])_0x19b065=_0x3892c7;else{var _0x552caa=_0x26e364();if(!_0x552caa||_0x53e1d6<-0xb1*-0x29+0xe78+-0x2ad1||_0x4436f2[_0x1cfd97(0x2c5)](_0x53e1d6,0x2c*-0x4+-0x5a8+0x65c)>_0x552caa['byteL'+'ength'])return![];try{switch(_0x40dd1e){case'u8':case'i8':_0x552caa[_0x1cfd97(0x628)+'nt8'](_0x53e1d6,_0x4436f2['NuJqw'](_0x19460b,-0x1*-0x1faf+0x9f9+0x5cf*-0x7));break;case'i16':case'u16':_0x552caa['setIn'+_0x1cfd97(0x29f)](_0x53e1d6,_0x19460b|-0x15*0x1cd+-0x5c*-0x6a+0x47*-0x1,!![]);break;case _0x1cfd97(0x3e6):case _0x1cfd97(0x380):_0x552caa['setIn'+_0x1cfd97(0x16f)](_0x53e1d6,_0x19460b|-0x1*-0x2588+0x78c+-0x5*0x904,!![]);break;case _0x4436f2[_0x1cfd97(0xac2)]:_0x552caa['setFl'+_0x1cfd97(0x6a6)](_0x53e1d6,_0x19460b,!![]);break;default:_0x552caa[_0x1cfd97(0xa1b)+_0x1cfd97(0x16f)](_0x53e1d6,_0x19460b|0x19ab*-0x1+0x8f9*-0x2+0xcb*0x37,!![]);}return!![];}catch(_0x2a9a87){return![];}}}var _0x6205be={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':'i32'},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':'i32'},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0x362265(_0x1f8e80){var _0x3d352b=_0x105055,_0x4117a0={'nIkQk':function(_0x389b96,_0x2d8c3f){return _0x389b96+_0x2d8c3f;},'Tlipz':'UWMK\x20'+'resol'+_0x3d352b(0xb5d),'LiMMP':_0x3d352b(0x2bf),'CJFxU':_0x4436f2['VpOZR']};if(_0x4436f2['NpbED']('ntSFn','UkfOl')){var _0x5effed='';for(var _0x296713=0x1a*-0x5a+-0x44*0x1f+0x1160;_0x4436f2[_0x3d352b(0x69d)](_0x296713,_0x1f8e80[_0x3d352b(0xb7c)+'h']);_0x296713++){var _0x5f2e33=_0x1f8e80[_0x296713]['toStr'+_0x3d352b(0x1c0)](0x11aa+-0x1a96+0x73*0x14);_0x5effed+=_0x4436f2['gEKEw'](_0x4436f2[_0x3d352b(0x352)](_0x5f2e33[_0x3d352b(0xb7c)+'h'],-0xedb*0x1+-0x5c9*0x1+0xa53*0x2)?'0':'',_0x5f2e33);}return _0x5effed;}else _0x23c9f0[_0x3d352b(0x382)+'ngs'][_0x3d352b(0x24d)](_0x4117a0[_0x3d352b(0x3ed)](_0x4117a0[_0x3d352b(0x3ed)](_0x4117a0[_0x3d352b(0x931)]+_0x39d840['hooks'+_0x3d352b(0xaf4)+'ved']+_0x4117a0[_0x3d352b(0x5ca)],_0xc8626[_0x3d352b(0x2db)+'Total'])+_0x4117a0[_0x3d352b(0x896)],'(this'+',\x20Met'+_0x3d352b(0x13e)+_0x3d352b(0x53b)+_0x3d352b(0xae3)+_0x3d352b(0xb72)+_0x3d352b(0x468)+'t\x20mat'+_0x3d352b(0x855)+_0x3d352b(0x46b)+_0x3d352b(0x72f)));}function _0x318a08(_0x41818d,_0x963c54,_0x251f13){var _0x19d090=_0x105055;if('gbmtw'!==_0x19d090(0x3cc)){if(_0x1c4ee4==='v3'){var _0x3ab665=_0x74a6b5[_0x123f97]['xyz']||[_0x779e9c[_0x3a5b63]['v'],0x6*0x59c+0x1313*0x1+0x34bb*-0x1,0x602+0x1*0x155a+-0x1b5c];return _0x3ab665[_0x19d090(0x9df)](function(_0x139b7e){var _0x141f3d=_0x19d090;return _0x1e300c[_0x141f3d(0x679)](_0x139b7e*(0x1d98+-0x4*-0x820+-0x2ce*0x16))/(0x2566+0x1f93*0x1+-0x1*0x4495);})[_0x19d090(0x71a)]('\x20\x20');}var _0x56d740=_0x47704a[_0x18aea8]['v'];return typeof _0x56d740==='numbe'+'r'?_0x4436f2['tBwcD'](_0x2b69f9['round'](_0x56d740*(-0x2493+0xbcd+0x2*0xe57)),0x1*0x1a51+-0x1*0x4e1+-0x58*0x33):_0xdcf429(_0x56d740);}else{var _0xa32328=_0x26e364();if(!_0xa32328){if(_0x19d090(0x716)!==_0x19d090(0x716)){var _0xa77887=_0x4783b6['data'];if(_0xa77887&&_0xa77887['__sak'+_0x19d090(0x9da)]===_0x42097d&&_0xa77887['kind']===_0x19d090(0xa3b))_0x11ad62(_0xa77887[_0x19d090(0xa3b)],_0xa77887[_0x19d090(0x9c6)]);}else return _0x311dd0['faile'+'d']++,_0x311dd0[_0x19d090(0x7c6)+_0x19d090(0x1e9)]=_0x311dd0['lastE'+_0x19d090(0x1e9)]||'no\x20HE'+'APU8\x20'+'-\x20Uni'+'ty\x20in'+'stanc'+'e\x20not'+'\x20reac'+_0x19d090(0xbe4)+_0x19d090(0x8b4)+_0x19d090(0xa4e)+'me.re'+_0x19d090(0x7bb)+_0x19d090(0xab6)+')\x20or\x20'+'any\x20w'+'indow'+_0x19d090(0x8ee)+'al',null;}if(_0x4436f2[_0x19d090(0x677)](_0x963c54,0x17*-0x198+-0x21f1+-0x1f*-0x247)||_0x4436f2['IFuUZ'](_0x963c54,_0x251f13)>_0xa32328[_0x19d090(0x401)+'ength'])return _0x311dd0[_0x19d090(0x276)+'d']++,_0x311dd0[_0x19d090(0x7c6)+_0x19d090(0x1e9)]=_0x311dd0[_0x19d090(0x7c6)+_0x19d090(0x1e9)]||_0x4436f2[_0x19d090(0xa66)](_0x4436f2[_0x19d090(0xb8f)](_0x19d090(0x1da)+_0x19d090(0x744)+(_0x41818d+_0x963c54)[_0x19d090(0x322)+_0x19d090(0x1c0)](-0x7a8+-0x147f+0x1c37),_0x19d090(0x808)+_0x19d090(0x681)+_0x19d090(0x4ab)+'0x'),_0xa32328[_0x19d090(0x401)+'ength'][_0x19d090(0x322)+'ing'](-0x4a*0x1c+0x285*0x1+-0x3*-0x1e1)),null;try{var _0x589af8=new Uint8Array(_0x251f13);for(var _0x3a6066=-0x63f*-0x1+0x2c*-0x97+0x13b5;_0x4436f2[_0x19d090(0x75b)](_0x3a6066,_0x251f13);_0x3a6066++)_0x589af8[_0x3a6066]=_0xa32328[_0x19d090(0xbce)+'nt8'](_0x4436f2[_0x19d090(0x84e)](_0x41818d,_0x963c54)+_0x3a6066);return _0x311dd0['ok']++,_0x589af8;}catch(_0x27170d){return _0x311dd0[_0x19d090(0x276)+'d']++,_0x311dd0['lastE'+_0x19d090(0x1e9)]=_0x311dd0[_0x19d090(0x7c6)+_0x19d090(0x1e9)]||String(_0x27170d&&_0x27170d['messa'+'ge']||_0x27170d)[_0x19d090(0xa06)](-0x398+0x91*0x39+0x5*-0x5bd,-0x92*-0x3+-0x94f+-0x7*-0x127),null;}}}function _0x499e00(_0x4c2be2,_0x6946b0,_0x2d1cff){var _0x2eb0c3=_0x105055,_0x2fafea={'yLHCG':function(_0x1a6c9f,_0x112330){var _0x550f9d=_0x5dd8;return _0x4436f2[_0x550f9d(0x891)](_0x1a6c9f,_0x112330);}};if(_0x4436f2['wRJfS']===_0x4436f2['wRJfS']){var _0x4afba3=_0x6205be[_0x2d1cff],_0x1f201a=_0x4436f2[_0x2eb0c3(0xb35)](_0x318a08,_0x4c2be2,_0x6946b0,_0x4afba3[_0x2eb0c3(0x53c)]);if(!_0x1f201a)return null;var _0x36a049=new DataView(_0x1f201a[_0x2eb0c3(0xaec)+'r'],_0x1f201a['byteO'+_0x2eb0c3(0x9a5)],_0x1f201a[_0x2eb0c3(0x401)+'ength']),_0x3c9f80=_0x36a049['getIn'+'t32'](_0x4afba3[_0x2eb0c3(0x794)],!![]),_0x10e3a9=_0x36a049[_0x2eb0c3(0x1bb)+'t32'](_0x4afba3[_0x2eb0c3(0x539)+'n'],!![]),_0x2b35e0=_0x4436f2[_0x2eb0c3(0x3f6)](_0x36a049['getUi'+'nt8'](_0x4afba3[_0x2eb0c3(0x4ec)+'d']),0x1504+0xd1*0x1c+-0x1*0x2bdf),_0x58f9f7=_0x2d1cff==='obfF'?_0x36a049['getFl'+_0x2eb0c3(0x6a6)](_0x4afba3[_0x2eb0c3(0x9dd)],!![]):_0x4436f2['UWsTt'](_0x2d1cff,_0x2eb0c3(0x2a7))?_0x36a049[_0x2eb0c3(0x1bb)+'t32'](_0x4afba3['fake'],!![]):_0x36a049['getUi'+_0x2eb0c3(0x817)](_0x4afba3[_0x2eb0c3(0x9dd)]),_0x486aca=_0x36a049['getUi'+'nt8'](_0x4afba3['activ'+'e'])&0x41b+0x2b*0x3d+0xe59*-0x1;return{'keyAtOffset0':_0x3c9f80,'hidden':_0x10e3a9,'inited':_0x2b35e0,'fake':_0x58f9f7,'act':_0x486aca,'hex':_0x362265(_0x1f201a),'alt':_0x2d1cff===_0x2eb0c3(0x2a7)?_0x10e3a9^_0x4436f2[_0x2eb0c3(0x6eb)](_0x58f9f7,-0x3*-0xc2f+-0x1101+-0x138c):null};}else _0x285851=_0x2fafea['yLHCG'](_0xfc20db,_0x46daf4);}function _0x481864(_0x3ab1a0,_0x41399f,_0x1d9c2a){var _0x1f566c=_0x105055;if(_0x4436f2['Avsgu'](_0x3ab1a0,_0x1f566c(0x8fe)))return _0x4436f2['jperY'](_0x1d7419,_0x41399f^_0x1d9c2a);if(_0x3ab1a0===_0x4436f2[_0x1f566c(0x2d5)])return _0x4436f2[_0x1f566c(0xade)](_0x4436f2['pjHyt'](_0x41399f,_0x1d9c2a),0x6*-0x3f1+0x1414+-0x1*-0x392);return _0x4436f2[_0x1f566c(0x82f)](_0x4436f2['NuJqw'](_0x41399f^_0x1d9c2a,0x8d0+0x98f+-0x1160),0xe9*-0xa+-0x24aa*-0x1+-0x70*0x3f)?0x1*0xb2d+0x1*0x257e+-0x30aa:0x303*-0xc+-0x13ce+0x37f2;}function _0x1ec273(_0x4252d3,_0x1cc47e,_0xee3cd5){var _0x19c02b=_0x105055;if(_0x4436f2[_0x19c02b(0x35b)](_0x4436f2[_0x19c02b(0xa93)],'jLtZm')){if(_0x44dc7f&&!_0x4436f2['QIhqk'](_0x45cbf2)){_0x57d429();return;}_0x230210(!![],_0x5aa1bc);}else{var _0x3387b1=_0x6205be[_0xee3cd5];if(!_0x3387b1)return null;var _0x3f0419=_0x3c6e14(_0x4436f2[_0x19c02b(0x865)](_0x4252d3+_0x1cc47e,_0x3387b1['key']),'u8'),_0x4f0eba=_0x4436f2['gVmGh'](_0x3c6e14,_0x4436f2[_0x19c02b(0xa18)](_0x4252d3+_0x1cc47e,_0x3387b1[_0x19c02b(0x539)+'n']),_0x19c02b(0x3e6)),_0x320833=_0x4436f2['ScoaV'](_0x3c6e14,_0x4436f2[_0x19c02b(0x8e7)](_0x4436f2[_0x19c02b(0xa50)](_0x4252d3,_0x1cc47e),_0x3387b1[_0x19c02b(0x4ec)+'d']),'u8'),_0x95f82c=_0x3c6e14(_0x4436f2[_0x19c02b(0xa1f)](_0x4252d3+_0x1cc47e,_0x3387b1['fake']),_0xee3cd5===_0x4436f2[_0x19c02b(0x188)]?_0x19c02b(0x5b8):_0x4436f2[_0x19c02b(0x36a)](_0xee3cd5,'obfI')?'i32':'u8'),_0x420e93=_0x3c6e14(_0x4252d3+_0x1cc47e+_0x3387b1[_0x19c02b(0x549)+'e'],'u8');if(_0x4436f2['UWsTt'](_0x3f0419,undefined)||_0x4f0eba===undefined||_0x95f82c===undefined||_0x420e93===undefined)return null;_0x3f0419&=0xe42+-0xe8a*-0x1+-0x1bcd,_0x4f0eba|=0xf90+-0x11a9+0xb3*0x3,_0x320833=_0x4436f2['ngTBu'](_0x4436f2['VvNfI'](_0x320833,0x96*-0x1e+0x5a7*-0x4+0x2830),-0x1249+0x1*-0x1837+-0x15f*-0x1f),_0x420e93&=-0x2489*0x1+-0x1620+-0x3aaa*-0x1;var _0x3baf2b;if(_0xee3cd5===_0x4436f2['cYGZb'])_0x3baf2b=_0x4436f2[_0x19c02b(0xb15)](_0x1d7419,_0x4f0eba^_0x3f0419);else{if(_0xee3cd5===_0x19c02b(0x2a7))_0x3baf2b=_0x4436f2['VrsqJ'](_0x4f0eba,_0x3f0419)|-0x16a5+-0x14ed+0x11e*0x27;else _0x3baf2b=_0x4436f2[_0x19c02b(0x372)](_0x4436f2['pjHyt'](_0x4f0eba,_0x3f0419)&0x3*-0x26c+0x11a5+-0x962,-0x57*0x13+0x19d9+-0x11*0x124)?-0x26fb+-0x1a9e+0x419a:0x181e+-0xf*-0x251+-0x1*0x3add;}return{'real':_0x3baf2b,'fake':_0x95f82c,'act':_0x420e93,'init':_0x320833,'key':_0x3f0419,'hidden':_0x4f0eba};}}function _0x479062(_0x4aa13c,_0x26527f,_0x1edea1,_0x1a26fc){var _0x401ea0=_0x105055,_0x273d1e=_0x6205be[_0x1edea1],_0x24834d=_0x4436f2[_0x401ea0(0xb35)](_0x318a08,_0x4aa13c,_0x26527f,_0x273d1e['size']);if(!_0x24834d)return![];var _0x59c205=new DataView(_0x24834d['buffe'+'r'],_0x24834d[_0x401ea0(0x93e)+'ffset'],_0x24834d[_0x401ea0(0x401)+_0x401ea0(0x1df)]),_0xe214e9=_0x4436f2['lcnZJ'](_0x273d1e['keyTy'+'pe'],'u8')?_0x59c205[_0x401ea0(0xbce)+_0x401ea0(0x817)](_0x273d1e[_0x401ea0(0x794)]):_0x59c205['getIn'+_0x401ea0(0x16f)](_0x273d1e['key'],!![]),_0x1931a8;if(_0x4436f2[_0x401ea0(0x3f8)](_0x1edea1,'obfF'))_0x1931a8=_0x27726a(_0x1a26fc);else{if(_0x1edea1===_0x401ea0(0x2a7))_0x1931a8=_0x1a26fc|0x6b*-0x18+0x218*-0x3+0x1050;else _0x1931a8=_0x4436f2['WrKqW'](_0x1a26fc?0x3*-0x740+0x3*-0x1d3+0x1b3a*0x1:0x199d+0xaa4+-0x2441,0xa56+-0xd4a+0x3f3);}return _0x13670f(_0x4aa13c+_0x26527f+_0x273d1e['hidde'+'n'],_0x401ea0(0x3e6),_0x4436f2[_0x401ea0(0x9e1)](_0x1931a8,_0xe214e9))&&_0x13670f(_0x4436f2['PSwoV'](_0x4436f2['YqkWU'](_0x4aa13c,_0x26527f),_0x273d1e[_0x401ea0(0x9dd)]),_0x1edea1===_0x401ea0(0x8fe)?_0x401ea0(0x5b8):_0x4436f2[_0x401ea0(0x799)](_0x1edea1,'obfI')?_0x4436f2[_0x401ea0(0x94f)]:'u8',_0x4436f2[_0x401ea0(0xb82)](_0x1edea1,_0x401ea0(0x8fe))?_0x1a26fc:_0x1edea1==='obfI'?_0x1a26fc|-0x119*0x10+0xb08+0x688:_0x1a26fc?-0x57c*0x6+0x1*-0x649+0x2732:-0x449*0x1+0xea1+-0x2*0x52c)&&_0x13670f(_0x4436f2[_0x401ea0(0x660)](_0x4aa13c+_0x26527f,_0x273d1e[_0x401ea0(0x549)+'e']),'u8',-0xacc+0xb1b*-0x3+0x1*0x2c1d);}var _0x69e834={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0x64cf87=-0x1364*-0x1+-0x15b*-0x1+-0x14bf+0.03,_0x49fdbd=0xb85+-0x2540+0xb*0x257,_0x412293={},_0x21560f=-0x21bb+0x15f7+-0x3*-0x3ec,_0x199153=[],_0x57f7d2=[];function _0x147187(_0xdc307a){var _0x5aa3fe=_0x105055;if(_0x4436f2['gWFhl']==='WIqph')try{return _0x411a29();}catch(_0x12744c){return{'version':_0xf32b2e,'when':new _0x1c2d23()[_0x5aa3fe(0xb53)+'Strin'+'g'](),'elapsedMs':_0x5c6a52['now']()-_0x9fefd,'host':_0x6b4cec,'uwmk':!!(_0x15a05e[_0x5aa3fe(0x41e)+'WebMo'+_0x5aa3fe(0x263)]&&_0x292312['Unity'+_0x5aa3fe(0x16d)+_0x5aa3fe(0x263)]['Runti'+'me']),'il2CppContext':![],'arm':_0xf9dd41,'hooksTotal':_0x4b4e1a['lengt'+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x424ab6(_0x12744c&&_0x12744c[_0x5aa3fe(0x80b)+'ge']||_0x12744c)};}else{var _0x4ffdeb=_0x581ece['FPSco'+_0x5aa3fe(0x773)+_0x5aa3fe(0x2a1)]||[],_0x44d61d=[];_0x57f7d2=[],_0x199153=[];for(var _0x30f26a=-0x262+0x11d*-0x1b+-0xb*-0x2f3;_0x4436f2[_0x5aa3fe(0x50a)](_0x30f26a,_0x4ffdeb[_0x5aa3fe(0xb7c)+'h']);_0x30f26a++){var _0x532de2=_0x4ffdeb[_0x30f26a][-0x1de3+-0xf*-0x173+0x2*0x413];if(_0x4ffdeb[_0x30f26a][-0xf7*-0x1d+-0x16bc+-0x53e]!==_0x4436f2[_0x5aa3fe(0x188)])continue;var _0x38aaa5=_0x4436f2['wPGEv'](_0x499e00,_0xdc307a,_0x532de2,_0x4436f2[_0x5aa3fe(0x188)]);if(!_0x38aaa5||_0x38aaa5[_0x5aa3fe(0x4ec)+'d']!==0x15b4+0x472*0x8+-0x1*0x3943)continue;var _0x3faed2=_0x481864(_0x4436f2['cYGZb'],_0x38aaa5['hidde'+'n'],_0x38aaa5[_0x5aa3fe(0x870)+_0x5aa3fe(0x847)+'t0']);if(_0x4436f2[_0x5aa3fe(0x422)](typeof _0x3faed2,'numbe'+'r')||!_0x4436f2[_0x5aa3fe(0x6e9)](isFinite,_0x3faed2))continue;var _0x199622=_0x4436f2[_0x5aa3fe(0x350)](_0x4436f2[_0x5aa3fe(0x7e2)](_0xdc307a,':'),_0x532de2),_0x8c5576=_0x412293[_0x199622];if(!_0x8c5576||_0x3faed2!==_0x8c5576['lastW'+_0x5aa3fe(0x5f2)+'n'])_0x8c5576=_0x412293[_0x199622]={'base':_0x3faed2,'lastWritten':null};var _0x21d712=_0x8c5576[_0x5aa3fe(0xb51)],_0x464258=Math['abs'](_0x21d712);if(_0x464258<-0x2668+-0x1c2d*0x1+0x4295+0.0001||_0x464258>0xf6*0x22f+0x3987*-0xc+-0xa*-0x3661){_0x57f7d2[_0x5aa3fe(0x24d)]({'o':_0x532de2,'v':_0x3faed2,'why':'impla'+'usibl'+'e'});continue;}_0x44d61d['push']({'o':_0x532de2,'v':_0x3faed2,'a':_0x464258,'base':_0x21d712,'key':_0x199622,'st':_0x8c5576});}var _0x3f5318=[];for(var _0x1c1946=-0x37b+-0x1984+0x1cff;_0x1c1946<_0x44d61d[_0x5aa3fe(0xb7c)+'h'];_0x1c1946++){var _0x5ea531=_0x44d61d[_0x1c1946]['a'],_0x3df51c=null;for(var _0x32fba8=-0x1e3f+-0x275*0x1+0x256*0xe;_0x32fba8<_0x3f5318['lengt'+'h'];_0x32fba8++){if('cnEDJ'===_0x4436f2[_0x5aa3fe(0x7c2)]){var _0x5a9336=_0x3f5318[_0x32fba8]['mean']/_0x5ea531;if(_0x4436f2['ibptj'](_0x5a9336,-0x1c81*0x1+0x24f2+-0x870-_0x64cf87)&&_0x5a9336<0xfbe+0x241e+-0x1149*0x3+_0x64cf87){_0x3df51c=_0x3f5318[_0x32fba8];break;}}else{if(_0xd9a10d)_0x5088c7[_0x5aa3fe(0x17e)+'onten'+'t']=(_0x5868ce(_0x34a307[_0x5aa3fe(0x52b)])||-0xaf6+-0x1*0x63f+0x2*0x89b)[_0x5aa3fe(0x5ee)+'ed'](0x7*-0x37c+0x2*0xa5e+0x1*0x3a9)+'x';_0x34acfb();}}if(!_0x3df51c){if(_0x4436f2[_0x5aa3fe(0x930)](_0x4436f2[_0x5aa3fe(0x7ce)],_0x5aa3fe(0x6b6)))try{_0xde9679[_0x5aa3fe(0xa27)]['enabl'+'ed']=![];}catch(_0x3300f7){}else _0x3df51c={'mean':_0x5ea531,'members':[]},_0x3f5318[_0x5aa3fe(0x24d)](_0x3df51c);}_0x3df51c[_0x5aa3fe(0x8ed)+'rs'][_0x5aa3fe(0x24d)](_0x44d61d[_0x1c1946]),_0x3df51c[_0x5aa3fe(0x9a3)]=0x1671+0x493+-0x4*0x6c1;for(var _0x65a044=-0x1*0x26c7+-0x121f*0x1+0x38e6;_0x65a044<_0x3df51c[_0x5aa3fe(0x8ed)+'rs']['lengt'+'h'];_0x65a044++)_0x3df51c[_0x5aa3fe(0x9a3)]+=_0x3df51c[_0x5aa3fe(0x8ed)+'rs'][_0x65a044]['a'];_0x3df51c[_0x5aa3fe(0x9a3)]/=_0x3df51c[_0x5aa3fe(0x8ed)+'rs']['lengt'+'h'];}var _0x1d40ef=[];for(var _0x4a4eeb=-0x1*0x66a+-0x16cb+-0x1d35*-0x1;_0x4436f2[_0x5aa3fe(0x50a)](_0x4a4eeb,_0x3f5318[_0x5aa3fe(0xb7c)+'h']);_0x4a4eeb++){if(_0x4436f2['dzTop'](_0x3f5318[_0x4a4eeb][_0x5aa3fe(0x8ed)+'rs']['lengt'+'h'],_0x49fdbd))_0x1d40ef['push'](_0x3f5318[_0x4a4eeb]);}if(!_0x1d40ef['lengt'+'h']){if(_0x4436f2[_0x5aa3fe(0x256)](_0x4436f2['bpUXK'],_0x4436f2[_0x5aa3fe(0xb0d)])){_0x57f7d2[_0x5aa3fe(0x24d)]({'o':-(0x8db+0x36e*0xb+-0x2e94),'v':0x0,'why':_0x5aa3fe(0x3b4)+_0x5aa3fe(0x94c)+'f\x20'+_0x49fdbd+('\x20Obsc'+_0x5aa3fe(0x851)+_0x5aa3fe(0x284)+'\x20agre'+'ed')});return;}else _0x4d137c[_0x5aa3fe(0x551)+'oard'][_0x5aa3fe(0xb63)+'Text'](_0x5bb769)[_0x5aa3fe(0x99b)](_0xb945be,function(){_0x2dcb5e();});}var _0x143d00=_0x1d40ef[0x14f*-0x1+-0x139f+0x14ee]['mean'];for(var _0x2ec526=-0x1e0b+0xb3*0x13+0x10c2;_0x2ec526<_0x1d40ef[_0x5aa3fe(0xb7c)+'h'];_0x2ec526++)if(_0x1d40ef[_0x2ec526][_0x5aa3fe(0x9a3)]<_0x143d00)_0x143d00=_0x1d40ef[_0x2ec526][_0x5aa3fe(0x9a3)];var _0x5c74a4=_0x4436f2[_0x5aa3fe(0x953)](_0x143d00,-0x75a+0x2*-0xc9+0x8ec+0.5);for(var _0x3f3bed=-0x2*-0x952+0x1*0x1012+-0x22b6;_0x3f3bed<_0x3f5318[_0x5aa3fe(0xb7c)+'h'];_0x3f3bed++){if(_0x4436f2[_0x5aa3fe(0x53a)](_0x3f5318[_0x3f3bed][_0x5aa3fe(0x8ed)+'rs'][_0x5aa3fe(0xb7c)+'h'],_0x49fdbd))continue;for(var _0x194471=0x26a5+-0xc9*0x13+-0x17ba;_0x194471<_0x3f5318[_0x3f3bed][_0x5aa3fe(0x8ed)+'rs'][_0x5aa3fe(0xb7c)+'h'];_0x194471++){_0x57f7d2[_0x5aa3fe(0x24d)]({'o':_0x3f5318[_0x3f3bed][_0x5aa3fe(0x8ed)+'rs'][_0x194471]['o'],'v':_0x3f5318[_0x3f3bed]['membe'+'rs'][_0x194471]['v'],'why':_0x5aa3fe(0x511)+_0x5aa3fe(0xa4b)});}}for(var _0x13156f=0x2e3+0x1*0x19b+-0x47e;_0x4436f2['YcXdQ'](_0x13156f,_0x1d40ef[_0x5aa3fe(0xb7c)+'h']);_0x13156f++){if(_0x4436f2[_0x5aa3fe(0x20d)]!=='aYSVV')_0x4723cd=!_0x43e957,_0x17f7c1[_0x5aa3fe(0x17e)+'onten'+'t']=_0x404c50?_0x5aa3fe(0x474)+_0x5aa3fe(0x88b):_0x4436f2['Ssecd'],_0x3505fe[_0x5aa3fe(0x4d9)][_0x5aa3fe(0x323)+'round']=_0x21fb8f?_0x1b4c74:_0x5aa3fe(0x670)+'paren'+'t',_0x311035['style']['color']=_0x4b2f1d?_0x5aa3fe(0x12f)+'1b':_0x4436f2['VuhGE'],_0x51380b();else{var _0x37088d=_0x1d40ef[_0x13156f][_0x5aa3fe(0x8ed)+'rs'];for(var _0x4882e6=0x22f0+0x2ea+-0x25da;_0x4882e6<_0x37088d[_0x5aa3fe(0xb7c)+'h'];_0x4882e6++){if(_0x4436f2[_0x5aa3fe(0x425)](_0x5aa3fe(0x90d),_0x5aa3fe(0xb36))){var _0x465e88=_0x37088d[_0x4882e6];if(_0x4436f2['Coggo'](_0x465e88['a'],_0x5c74a4)){_0x57f7d2['push']({'o':_0x465e88['o'],'v':_0x465e88['v'],'why':'below'+_0x5aa3fe(0xb1c)+'r\x20'+_0x5c74a4[_0x5aa3fe(0x5ee)+'ed'](0x340*0xc+0x2*0xa8d+0x8*-0x783)});continue;}var _0x5d6cc7=_0x4436f2[_0x5aa3fe(0x60c)](_0x465e88['base'],_0x69e834[_0x5aa3fe(0xa81)+'r']);_0x479062(_0xdc307a,_0x465e88['o'],_0x5aa3fe(0x8fe),_0x5d6cc7)&&(_0x465e88['st'][_0x5aa3fe(0xa24)+_0x5aa3fe(0x5f2)+'n']=Math[_0x5aa3fe(0x2dc)+'d'](_0x5d6cc7),_0x21560f++,_0x199153[_0x5aa3fe(0x24d)]('0x'+_0x465e88['o'][_0x5aa3fe(0x322)+'ing'](0xf*0xb5+0x1526+-0x85*0x3d)));}else{var _0x1c88fb=_0x75736d('FPSco'+_0x5aa3fe(0x773)+_0x5aa3fe(0x2a1),_0x4596c0[_0x4cbd39[_0x490350]][_0x5aa3fe(0xa5e)]);_0x1c88fb[_0x5aa3fe(0x62c)]=_0x29de6f[_0x1b7aa2[_0x7709c1]]['hits'],_0x1c88fb[_0x5aa3fe(0xb16)+'al']=_0x2eb607[_0x5bd9cf[_0x3ae87a]][_0x5aa3fe(0xa5e)]===_0x347940,_0xd3b168[_0x5aa3fe(0x587)+_0x5aa3fe(0x518)+'s'][_0x5aa3fe(0x24d)](_0x1c88fb);}}}}}}var _0x581ece={'FPScontroller':[[0x30f+-0x1*0x1631+-0x3*-0x666,_0x105055(0x8fe)],[-0x1ec+-0x1*0x2417+-0xcb9*-0x3,_0x105055(0x8fe)],[-0x1b35+0xf9b*0x1+0xbda,_0x105055(0x8fe)],[0x72f+-0x9b9*-0x1+-0x1090,_0x4436f2['cYGZb']],[0x7c+-0x5*0x6a1+-0x1*-0x2119,'obfF'],[0xdfa+-0x11bc+-0xb7*-0x6,_0x105055(0x8fe)],[0x1*0x107f+-0x2*-0xf4d+-0x2e79,_0x105055(0x8fe)],[-0x15ab+0x29*-0xa+0x17fd,_0x105055(0x65c)],[0x13*-0xdc+-0x1322+0x243a,_0x105055(0x8fe)],[0x80b+-0x3*0xc3a+-0x9*-0x347,_0x4436f2[_0x105055(0x94f)]],[-0xd82+-0x1f0a+0x286*0x12,'v3'],[0x1*0x16bd+0x1*-0x34a+-0x99*0x1f,'u8'],[-0x158+0x509*0x2+-0x7ca,_0x105055(0x8fe)],[0x135c+0x1*-0x1541+0x2ed,_0x4436f2[_0x105055(0x94f)]],[-0x2*-0xc25+0x2a8+-0x1a*0xff,'u8'],[-0xb53*0x1+0x1*-0x1363+0x1fc6,_0x4436f2[_0x105055(0x94f)]],[0x1c88+-0x29d*-0x2+-0x20ae,'u8'],[0x11bf+0xb*-0x59+0xad*-0x13,'u8'],[0x41c*0x9+0x704+-0xf4*0x2d,_0x4436f2[_0x105055(0x188)]],[-0x1ca*0x1+0x1140+-0xa*0x16d,_0x4436f2[_0x105055(0x188)]],[-0x581*-0x6+0x9d5+0x298f*-0x1,_0x105055(0x5b8)],[-0x1*0x655+0x3d*-0x16+-0xce3*-0x1,_0x105055(0x5b8)],[-0x1a1e+0x1e2*-0x4+0x22fa,'v3'],[0x594+0x2*0x1111+-0x2656,'v3'],[-0x3*-0x32b+-0x37*-0xb+-0x1*0xa72,_0x105055(0x5b8)],[-0x3*0x14c+0x3b+-0x5*-0x105,_0x4436f2['GafNy']],[0x81f*0x3+0x1*-0x14a7+0x2*-0x117,'u8'],[0x200f*0x1+0xd*-0x189+0x182*-0x7,_0x105055(0x5b8)],[0x3*0x71b+0x6da*-0x1+-0x1*0xcdf,'v3'],[0x23ed+-0x1a6+-0x20a3,'u8'],[-0x2*-0xc34+-0xf2b+-0x789*0x1,_0x105055(0x5b8)],[0x3*0x1fc+-0x19*0xc8+-0x16*-0xb2,_0x105055(0x5b8)],[0x231e+-0x1db5+-0x1*0x3ad,'u8'],[0x9e1*-0x1+-0x19*-0xec+-0xb6e,'u8'],[-0xe2f*0x1+-0x3e5*-0x2+-0x1*-0x825,_0x4436f2['cYGZb']],[-0x8*0x1b9+-0xe4*0x4+0x1330,_0x105055(0x5b8)],[-0x2386+-0x21f5+0x4757,'u8'],[-0x2342+0x143*-0x19+0x44ad,_0x4436f2[_0x105055(0x188)]],[-0x2478*-0x1+0xb2*0x3+-0x2496,'v3'],[0xe2d+0x163b+-0x2260,_0x4436f2[_0x105055(0x3dd)]],[-0x3*-0x1fd+0x111*0x13+0x1822*-0x1,'f32'],[0x166a*0x1+-0x211b+0xccd,_0x105055(0x5b8)],[-0x6*-0x4f2+-0x1f45+0x3e5,_0x4436f2['GafNy']],[-0x1079*0x1+-0x1*0x243f+0x3708,_0x4436f2[_0x105055(0xac2)]],[0x425*-0x1+-0x5*0x5a7+-0x1a*-0x156,_0x4436f2['GafNy']],[-0x1d*0xd9+0x2465*0x1+0x65*-0x18,'f32'],[-0x1*0x2647+0x200+0x26a3,'u8'],[-0x209a+0x1*-0x1aa1+-0x49*-0xd8,'u8'],[-0x3c*0x2d+-0x1*-0x2629+0x17*-0x119,'u8'],[-0x1039+0x1*-0x103+0x139c*0x1,_0x105055(0x5b8)],[-0x3*-0x98f+-0x2439+0x9f0,'u8'],[-0x8dd+0x1bf8+-0x17*0xba,'u8'],[0x30f+-0x2f7+0x250,_0x4436f2[_0x105055(0xac2)]],[0x5ce*0x2+-0xa64+0x134,_0x4436f2[_0x105055(0xac2)]],[0x34c*-0x5+-0x1549*-0x1+-0x25d,_0x105055(0x5b8)],[-0x225d*0x1+0x1*-0x1a81+-0x1*-0x3f52,_0x4436f2[_0x105055(0xac2)]],[-0x22a6*0x1+-0xdbd+-0x115*-0x2f,'f32'],[-0x1e04+0x873+0x180d,_0x105055(0x5b8)],[-0x1*-0x2422+0x2ad+-0x743*0x5,'f32'],[0x20ef+-0x1151*-0x2+-0x410d,'v3'],[-0x9f3+-0x15eb*0x1+0x2*0x1139,'u8'],[0x3b*-0x1+-0x1ffa+0x22cd,'v3'],[-0x1*0x2302+0x3d*-0x29+0xc7*0x3d,_0x105055(0x5b8)],[0x3*0x72d+-0x22ce+0xff3*0x1,'v3'],[0x335*-0x3+-0x752*0x2+0x1afb,_0x4436f2['GafNy']],[0x7e2+0x12c4*0x1+-0x17ea*0x1,'f32'],[-0x35f*0x8+-0x520*-0x2+0x1378,'f32'],[-0x1*0x20d1+0x20b9*0x1+0xf4*0x3,'u8'],[-0x23ed*-0x1+0xaf*-0x31+-0x3*-0x1d,'u8'],[0xa2c+-0x594+-0x1d0,_0x4436f2['GafNy']],[0x15b8+-0x2*-0xff2+0x1c*-0x1d0,'f32'],[0x1cc3+0x74e+-0x212d,'v3'],[0x4d*0xb+0x11b2+-0x1211,'v3'],[-0x1175*-0x1+0x27*-0x68+-0x9*-0x27,_0x4436f2['GafNy']],[0x2300+0x6c*-0x1+-0x2b*0xbc,_0x4436f2[_0x105055(0xac2)]],[0xa*0x301+0x10ab+0x8bd*-0x5,'f32'],[0xd*-0x212+-0x1c67+0x17f*0x27,'f32'],[0x10e4+0x16f6+0x1*-0x24ce,'v3'],[0x1*-0x23fa+0x6ef*0x3+0x1245,'u8'],[-0x1*-0x35b+-0x2*0x1f+-0x1*0x1,'v3'],[-0x1*0x1349+-0x4b*-0x61+0x6*-0xff,'i32'],[0xdb*0x5+0x24d3+0xa*-0x3cb,_0x4436f2[_0x105055(0xac2)]],[-0x125f+-0x2a5*-0x9+-0x23e,'f32'],[0x241f+0x11ba*0x2+-0x445f*0x1,_0x4436f2['GafNy']],[0x5*-0x2a1+-0xd31+0x1d92,_0x4436f2[_0x105055(0xac2)]],[0x2*-0x144+0x25*-0xe5+0x25*0x10d,'u8'],[-0x80f+-0x2238+0x2d88,'u8'],[0x1d40+0x12f*0xd+0x22d*-0x13,'u8'],[-0x16a5*0x1+-0x1a8c+0x2*0x1a3f,'u8'],[-0x11e8+0x1b0f+0x1*-0x5d9,'u8'],[0x2089*-0x1+-0x10a4+0x347d,'f32'],[0x4d5*-0x4+0x4fe*0x3+0x7ae,_0x4436f2[_0x105055(0xac2)]],[0x13bc+-0x14a2+0x43e,'f32'],[0xa1f*-0x2+0x23c4+0xc2a*-0x1,_0x4436f2[_0x105055(0xac2)]],[0x19*-0x5+0xafa+-0x71d*0x1,_0x105055(0x5b8)],[0x1*0x1d7f+-0x1b76+0x15b,'u8'],[-0x8f4*-0x2+0x195d+0x7f9*-0x5,_0x4436f2['GafNy']],[0x1acf+-0x3*0x341+0x6d*-0x20,_0x105055(0x5b8)],[-0x2*-0xa81+0x13d*0x2+-0x1*0x140c,'u8'],[0x45*0x6b+-0x8f9*-0x4+-0x3d43*0x1,'v3'],[0xf1f*-0x1+0x1*-0x657+0x8b*0x2e,'v3'],[0x4*0x977+-0xc9a*-0x2+-0x3b80,'v3'],[-0x4*0x29c+0xf71*0x1+-0x165,'f32'],[0x2596+0x1*-0xc6d+-0x25*0x95,_0x105055(0x5b8)],[0x22+0x412+0x12*-0x8,_0x4436f2[_0x105055(0xac2)]],[-0x2*-0x13+-0xe5d*-0x2+-0x3*0x868,'v3'],[-0x1a33+-0x1eb2+0x3c99,'i32'],[0x249+0x6d*0x26+-0xebf,'u8'],[0x35*0x53+0x724*-0x5+-0x1b*-0xd3,_0x105055(0x3e6)],[-0xbcf*-0x1+-0x19fa+-0x3*-0x5f9,'f32'],[-0x8*0x2c2+0xbb6+0xe1e,_0x4436f2['GafNy']],[0x1*-0x12dd+-0x179d+0xbf*0x3e,_0x4436f2['GafNy']],[0x1150+-0xd79*-0x1+-0x1afd,_0x4436f2['GafNy']],[-0xa50+-0x3a7+-0x7b*-0x25,'v3'],[0x21e2*-0x1+0xec5+0x16f9,_0x4436f2['kQyrd']],[0x2689+-0x185*0x1+-0x65*0x54,'u8'],[-0x11b3+0x358+-0x4*-0x48f,'u8'],[0x2*-0xb99+0x3*-0x622+-0x2*-0x16bd,'u8'],[-0x25*-0x4d+-0x3*0x315+-0x101*-0x2,_0x105055(0x5b8)],[-0x16b3+-0x9*-0x33+0x18d0,_0x4436f2[_0x105055(0x94f)]]],'HealthScript':[[0x1f17+0x2254+0x269*-0x1b,'u8'],[0x6ab+0x1*0x18a2+-0x1ef1,_0x4436f2[_0x105055(0x94f)]],[-0x251b+-0x8b4+0x2e4f,_0x4436f2[_0x105055(0xac2)]],[-0x2*0x449+-0x262+0xb78,_0x105055(0x5b8)],[-0x4e*-0x55+-0x2413+0xab5,_0x105055(0x5b8)],[-0x25ad+0x21f+-0x2*-0x120d,_0x105055(0x5b8)],[0x26a*-0xd+0x1b9f+-0x1*-0x453,'f32'],[-0x949*-0x1+0x12ec+0x1*-0x1ba1,_0x4436f2[_0x105055(0xac2)]],[-0x2*-0x1154+-0x14ce+0x69d*-0x2,_0x4436f2[_0x105055(0x94f)]],[-0x4c+0x122f+-0x1*0x113f,_0x105055(0x3e6)],[0x26e6+-0xa5*0x23+-0xfaf,'u8'],[0x2*-0x1cd+0x3f5*-0x2+0xc2d,'u8'],[0x1688+-0x730+0x2*-0x757,'u8'],[-0x2*-0x623+0x1*0x2089+-0x2c24,'u8'],[-0x3bb+0x62f*0x3+-0x1*0xe12,_0x4436f2[_0x105055(0x2d5)]],[-0x13*-0x83+-0x19f7+0x1112,'obfI'],[0x2422*0x1+-0x4*0x1dd+0x1da*-0xf,_0x105055(0x2a7)],[0xbc*-0x8+0x256c+-0xa30*0x3,_0x105055(0x2a7)],[0x1*0xc9c+0x1c47+0x27d3*-0x1,_0x105055(0x2a7)],[-0x57a+0xc10+0x52*-0x11,'obfB'],[0x1*-0x1fcd+0x25+0x20d8*0x1,_0x105055(0x8fe)],[-0x2ab*-0xe+0x25ae+0x76*-0xa0,_0x4436f2[_0x105055(0xac2)]],[-0xed5+-0x13f4+0x2415,_0x4436f2[_0x105055(0xac2)]],[-0x4d8*-0x2+0x287*0xb+0x242d*-0x1,'f32'],[-0x1306+-0x833*0x1+0x1c8d,_0x105055(0x5b8)],[0xb43*0x2+0x112d*-0x1+0x1*-0x3fd,_0x4436f2['GafNy']],[0x61+0x9d*0x15+-0xbe2,'v3'],[-0x9*0xb5+0x6*0x35b+0x29*-0x4d,_0x105055(0x5b8)],[0x551+0x2*-0x4eb+0x5fd,_0x4436f2['GafNy']],[0xe*-0x126+0x1bce+-0xa3a,'u8'],[-0xa5*-0x14+-0x160d+0xab5,'u8'],[-0xeaa+0x781+0x8b9,_0x4436f2[_0x105055(0x94f)]]],'PlayerConfig':[],'WeaponManager':[[-0x2563*-0x1+0x4e5+-0x2a30,_0x105055(0x3e6)],[0x1472*0x1+-0x1aec+0x696,_0x105055(0x3e6)],[-0x508+0x112e+-0x6*0x201,'u8'],[0x290+0x35*-0x79+-0x1*-0x16a1,_0x4436f2['kQyrd']],[-0xfea+0x9a6+0x6a8,'obfF'],[0xc9*-0x3+-0x1516*0x1+0x23*0xaf,_0x4436f2[_0x105055(0xac2)]],[-0x1*0xc9d+0x1*0x679+0x6a8,_0x105055(0x3e6)],[-0x2619+0x3*0x2f2+0x107*0x1d,'u8'],[0x184c+0xb08+0x1*-0x22cb,'u8'],[0x628*0x1+0x11*-0x227+-0x1efb*-0x1,'i32'],[0x11d5+0x259c+-0x36e1,_0x4436f2['GafNy']],[-0x13a5*-0x1+0x443+-0x1750,'f32'],[0x831*-0x3+0x1*-0x128f+0x26f*0x12,'i32'],[-0x7*0x593+-0x559+0x2d1a,'u8'],[0x1fce+-0x17e5+-0x70d,_0x105055(0x2a7)],[0x2067+0x1*-0x96b+0x22*-0xa6,'obfI'],[0x461+-0xece+0xb71,_0x105055(0x5b8)],[0x12f+-0xd*-0x73+-0x5fe,_0x4436f2['GafNy']],[-0x1*-0x113e+0xf7*0x16+0x12b6*-0x2,'f32'],[0x16*0xf2+-0xcb1*-0x1+-0x2065,'f32'],[0x662*-0x2+0x705+0x6df*0x1,_0x4436f2[_0x105055(0xac2)]],[-0x2*0x99e+0x7*-0x377+0x40f*0xb,'u8'],[-0x147*-0xb+0x15d6+0x1*-0x22b7,'obfI'],[-0x1*0xf1+-0x2*-0xf3d+-0x22d*0xd,_0x4436f2[_0x105055(0x2d5)]],[-0x1b13*0x1+0x164c*-0x1+0x32b3,_0x105055(0x2a7)],[0x401*-0x1+-0x2*-0x91d+0xcd1*-0x1,'obfB'],[0x223*-0x5+0x26a1+-0x1a7e,'obfB'],[-0x112e+0x22*-0xf0+0x328e,'obfB'],[-0x17b6*-0x1+-0x12*0x13a+-0x16,_0x105055(0x65c)],[0x1901+0x1384+0x1*-0x2ae1,_0x4436f2[_0x105055(0x3dd)]],[0x31a+-0x2*-0xd06+-0x1b76,_0x4436f2['fkBSn']],[-0x2f*-0x7c+0x25c7+-0x3abf,_0x105055(0x3e6)],[-0xe40+0xae6+0x1*0x52a,'u8'],[-0x1f*-0xd5+0x11*-0x233+0xd6c,_0x4436f2[_0x105055(0x94f)]],[0xe8f*-0x1+-0x105d+0x20c4,_0x4436f2[_0x105055(0x94f)]],[0x2329+0x1f59+-0x4082,'i32'],[-0x2323+-0xd7d+0x32b4,'u8'],[0x560+-0x8bf+0x57b,'u8'],[-0xe3a+-0x6*-0x2d1+0xd*-0xb,'u8'],[0x8*-0xf4+0xdcd+-0x40f,'u8'],[-0x1bf5+-0xace+0x28e2,'u8'],[-0x19d1+0x58f+0x1692,_0x105055(0x3e6)],[0x18b2+-0x1b61+0x75*0xb,'u8']],'GG_GameManager':[[0xf*-0x4a+0x17dc+0x33b*-0x6,'u8'],[0xbba+0x4bd*-0x4+-0x3b3*-0x2,_0x4436f2[_0x105055(0xac2)]],[0x14fa+0x1*0x25f0+-0x3aa6,'u8'],[0x58a+-0x18e3+0x139e,'u8'],[0x396+0x15*0xc8+0xae*-0x1d,_0x105055(0x5b8)],[0x1e54+0x1*0x182d+0x3635*-0x1,_0x105055(0x5b8)],[-0x2312*-0x1+0x1eac+-0xa*0x68b,'i32'],[0x453+-0xec8+0xac9,_0x4436f2[_0x105055(0x94f)]],[0x763*0x5+-0x229e*-0x1+-0x1*0x4735,'u8'],[-0x193*0x3+0xd66+0x839*-0x1,'u8'],[-0x1*0x4f7+0x2*-0x685+0x1279*0x1,_0x4436f2[_0x105055(0xac2)]],[0x17ba+0xe15+-0x2553,_0x4436f2[_0x105055(0xac2)]],[0x1a83+-0x185e*-0x1+-0x3251,_0x4436f2[_0x105055(0x94f)]],[-0xc58+-0x2505+0x31f1,'u8'],[0x1bea+-0x161*-0x3+-0x1f59,_0x105055(0x3e6)],[0x2127+-0x1ace+-0x3*0x1df,'i32'],[0x1*0x1aa7+0x1*0x1f0+0x1*-0x1bd7,_0x105055(0x3e6)],[0x1*0x1523+0x1*0x22fe+-0xd3*0x43,'obfI'],[0x1*-0x16c+0x3*-0x837+-0x1*-0x1b0d,_0x105055(0x2a7)],[-0x105e*0x1+0x209*-0x9+0x23bf,_0x4436f2['fkBSn']],[0x4a0+-0x1e17+0x1aa3,'u8'],[-0x867+0x29*0xef+-0xcc*0x24,_0x4436f2[_0x105055(0x94f)]],[0x4*0x209+-0x1*0x23d5+0x1d15,'u8'],[0x3a*-0x7+0x25db+-0x22d5,_0x4436f2[_0x105055(0xac2)]],[0x5f+-0xbff*0x1+0x70*0x1e,'u8'],[-0x20c*0xc+0x5*0x12b+0x1441,'u8'],[0x13bd+-0x1830+0x617*0x1,'u8'],[-0x1228+0x9f7*0x3+0x59*-0x1d,_0x4436f2[_0x105055(0x94f)]],[0x1d4f+-0x60d*-0x1+-0x21b0,'f32'],[0x265f+-0x1737+-0xd78,'u8'],[0x14f1+0x1*-0x4e8+0xc*-0x132,'u8'],[-0x2*0x5db+0x1323+0x5b5*-0x1,'i32'],[-0x61+-0x1105+-0x991*-0x2,_0x4436f2['kQyrd']],[0x15fc+0x407+-0x1843,_0x105055(0x5b8)],[0x2581+0x675*0x6+-0x1*0x4a7b,_0x105055(0x3e6)],[0x113a+0x4b*-0x81+0x1659,_0x4436f2[_0x105055(0xac2)]],[0x1584+0x1387+0x33*-0xc5,_0x4436f2[_0x105055(0x94f)]],[0x1*0x2645+0x30f*0x3+-0x3*0xf36,_0x105055(0x3e6)]],'TDM_GameManager':[[0xf7d+0x11ee+-0x2153,'u8'],[-0xd*-0x101+0x7*0x296+0x1f07*-0x1,'u8'],[0x8*0x4bd+0x161*0x17+-0xf*0x4a2,'u8'],[-0x1*0xe2+0x509*-0x6+-0x4*-0x7cf,_0x105055(0x5b8)],[-0x207b+0x5*0x67d+-0x31*-0x2,'u8'],[-0x1*-0x229f+0x21ee+-0x17*0x2f7,_0x4436f2['GafNy']],[-0x4c3*0x5+0xf*-0x10d+0x27f2,_0x105055(0x5b8)],[-0xe*0xb8+0x2122+-0x16ae,_0x105055(0x3e6)],[-0x1c3*0x13+-0x5*-0x6d3+-0x3e,'i32'],[0x1*-0x125b+-0x6c3+0x3a6*0x7,'u8'],[-0x806+-0xab*-0x17+0xb1*-0xa,'u8'],[0xd3d*-0x1+-0x18ee+0x1*0x269b,'f32'],[-0x560*-0x1+-0x636+0x14a,_0x105055(0x5b8)],[0x1b9*0xa+-0xb6d+-0x555,_0x105055(0x3e6)],[0x1f7*-0x1+-0x1af7+-0x436*-0x7,'u8'],[0x1*0xb5+0x4*-0x665+0x1*0x196f,_0x105055(0x2a7)],[-0x16c5+-0x2f*-0xd1+0x2*-0x761,'obfI'],[-0xa*-0x175+-0x18fa+0x244*0x5,_0x4436f2[_0x105055(0x2d5)]],[-0x6*0x63d+-0x17*0x130+-0xf*-0x462,_0x105055(0x2a7)],[-0x1fa6*-0x1+0x1f96*-0x1+-0xa*-0x1a,'u8'],[0x1*0x8ba+-0x3cc*0x2+0x3a,'u8'],[-0x475+0x2c8+0x30d,_0x4436f2[_0x105055(0x94f)]],[0x16ac+-0x1*-0x1b82+-0x30c2,'u8'],[0xabd*0x1+0xacd+-0x1406,'u8'],[0x133*0x2+-0x26d6+0x25f8,'f32'],[-0x118e+0x13db+-0x1*0xc1,_0x4436f2['kQyrd']],[-0x261f*0x1+-0x1a9a+0x4249*0x1,'i32'],[0x17a9+-0x3*0x26+-0x1d*0xbf,_0x4436f2[_0x105055(0xac2)]],[-0x1286+0x5*0x2cb+0x3f*0x19,_0x4436f2['kQyrd']],[0x1d47*-0x1+-0x1841+0x3724,'i32'],[0x2256+-0x1947+-0x76f,_0x4436f2[_0x105055(0xac2)]],[-0x1b*0x13f+0x21d*-0x1+0x2*0x12b3,_0x4436f2[_0x105055(0xac2)]],[0x6d4*-0x1+-0x35*0x34+0x1340,'i32'],[0x1dbe+-0x196*0x8+-0xf5e*0x1,'u8'],[0x1903+0x1ae2+-0x3234,'u8'],[0x106*-0x8+-0x37*-0x6+0x2*0x44f,_0x4436f2[_0x105055(0xac2)]]],'PhotonNetworkSync':[[-0x208d+0x1*0x1a15+0x6ac,'v3'],[-0x789+0x1*0x773+-0x1*-0x56,_0x4436f2['kQyrd']],[-0x22ca+0xc6d*0x1+0x16a1,'u8'],[0x272+0x1c87+-0x1eb4,'u8'],[0x12c3+-0x1*-0x25d1+0x3*-0x12c4,'v3'],[-0x6*0x398+-0x1154+0x2738,'u8'],[0x1af5*-0x1+0x6*0x632+-0x9df,_0x4436f2[_0x105055(0x94f)]],[-0x1*0xc1+-0x33d*-0x6+0x9*-0x209,_0x4436f2[_0x105055(0x94f)]],[-0x49*-0x4f+-0x1d8d+0x766,_0x4436f2['GafNy']],[-0x1*-0x6b+-0xa77+-0x14e*-0x8,_0x4436f2['GafNy']],[-0x2b*0x53+0x301*0xa+-0xfb1,'f32'],[-0xc7*-0x17+-0x179a+0x625,'v3'],[-0x40b+0x3b*0x62+-0x295*0x7,'f32'],[0x1*-0x1055+0x4e0+0x3*0x3fb,_0x4436f2['GafNy']],[-0xb61+-0x1*-0x1c8b+-0x10aa,_0x105055(0x3e6)],[-0xb83*-0x2+-0x1397+0x1*-0x2e7,_0x4436f2['GafNy']]],'MouseLook':[[0x9eb+-0x2*0x873+-0xd*-0x8b,_0x105055(0x5b8)],[0x1685+0x2d3*-0x5+-0x84e,_0x105055(0x5b8)],[0xdd*0xb+-0x1cc6*-0x1+-0x2629*0x1,_0x4436f2['GafNy']],[-0x168c+0x185b+-0x1af*0x1,_0x4436f2[_0x105055(0xac2)]],[-0xac1+-0x654*0x6+0x7*0x6fb,'f32'],[0x12*0x15+-0xdd+0x75*-0x1,'f32'],[0x24c9*-0x1+0xfa*-0xd+0x31ab,_0x4436f2[_0x105055(0xac2)]],[0x1e7f*-0x1+0x12aa+0xc09,'u8'],[-0x19c5+-0x365+0x1d62,_0x4436f2[_0x105055(0xac2)]],[-0x3*0x592+0x132a+0x47*-0x8,_0x105055(0x5b8)],[-0x1*0x19f1+0x1a*0xd+0x18df,_0x105055(0x3e6)],[-0x2232+-0x6e*0x4d+0x438c,'u8'],[0xac1*-0x2+-0x271+0x183b,'v2']],'NetworkPlayerAnimations':[[-0x6*0x2b4+-0x1f5*-0xd+-0x891,'v3'],[0x16c3+0x10c+-0x171b,'v3'],[-0x1b32+0x10*-0x93+-0x2a7*-0xe,'u8'],[-0x24a2+0x2*0xf0c+0x37*0x22,_0x4436f2[_0x105055(0x94f)]],[-0x8f5+-0x43+-0xa*-0x100,_0x4436f2['kQyrd']],[-0x1c2d*0x1+-0x52c*0x4+0x31a9*0x1,'f32'],[-0x3*-0xc07+-0x209*-0x7+-0x18c2*0x2,_0x4436f2['GafNy']],[-0x1*-0xe2f+0x1d42+-0x3df*0xb,_0x4436f2['GafNy']],[0x18fb+0xd*0x21e+-0x33a1,_0x4436f2['GafNy']],[-0x1590+0x1577+0x101,_0x105055(0x5b8)],[0x1f*0x71+0x63f*-0x2+0x17*-0x3,_0x4436f2[_0x105055(0xac2)]],[-0x1*-0x21cb+-0x5*-0x7bb+-0x9*0x7f2,_0x4436f2['GafNy']],[0x23c0+0xe1+-0x23ad,_0x105055(0x5b8)],[0x1415+-0x24de+0x11c1,_0x105055(0x5b8)],[-0x430+-0x5*0x1+-0x1bb*-0x3,_0x4436f2['GafNy']],[-0x99f+-0x1be0+0x49*0x87,'f32'],[-0x2e5*0x1+0x1430+-0x1047,'f32'],[-0x3*0x8cb+-0x2159+0x65*0x9a,_0x105055(0x3e6)],[0xfdd+0x9*0x189+0xa*-0x2dd,'u8'],[0x6*0x40f+-0x1c66+0x51c,'i32'],[-0x127e+0x7db*-0x2+-0x469*-0x8,_0x4436f2[_0x105055(0x94f)]],[-0x39f*0x1+-0x2107+-0x2*-0x12df,'u8'],[-0x8c*0xe+-0x7c6*0x2+0x1850,_0x105055(0x5b8)],[-0xddb+0x1*0x4f9+0xa02,_0x4436f2[_0x105055(0xac2)]],[0xb5+-0xafd*-0x1+0x2*-0x547,_0x105055(0x5b8)],[0x18bd+0x121a+-0x29af,'f32'],[0xe16+-0x232f*-0x1+-0x3019,'u8'],[0x842+-0x3ce*0x5+0xbfc,'u8'],[-0x1*0x218f+0x3af*-0x1+0x32*0xc5,'v3'],[-0x1*-0xc44+-0x11*-0x17b+0x73b*-0x5,'v3'],[-0x21e8+0x1c*-0xfb+0x3ef0,'u8']],'NPC_Cotroller':[[-0x82f+-0x31c*-0xa+-0x16d5,'v3'],[0x1*-0x2466+-0x1bb8*-0x1+-0x62*-0x17,_0x4436f2[_0x105055(0xac2)]],[0x32*0x1c+0x11a*0x1+0x1*-0x66e,'f32'],[-0xc5*0x26+0x9*-0x15b+-0x85b*-0x5,'u8'],[-0x384+0x3be*0x2+0x3a1*-0x1,'u8'],[-0x2c6*0xb+0x5*0x5b8+-0x6*-0x61,'v3'],[-0x130f+0x19ec*0x1+-0x641,'u8'],[0xb*0x71+0xa76+-0xeb1,_0x4436f2['GafNy']],[0x9d9*0x3+0x76e+-0x2455,'f32'],[0x485+-0x23ad+-0xf*-0x220,_0x105055(0x5b8)],[0x7b3+-0x7a7*0x2+0x857,_0x105055(0x5b8)],[0x1fb6+0x651*-0x1+-0x189d*0x1,'u8'],[0x4*0x1f1+0x11b*0x1f+-0x11*0x26d,_0x4436f2['GafNy']],[0x24cb+-0x21a7+0x126*-0x2,_0x4436f2[_0x105055(0xac2)]],[-0x2*0x2e9+0x1*-0x3a3+-0x8b*-0x13,'f32'],[-0x7d4+-0x416*-0x7+-0x236*0x9,'f32'],[-0x53*-0x4b+-0xab1+-0xcbc,'u8'],[-0x40*-0x6+-0x1ee4+0x1e50,_0x4436f2[_0x105055(0xac2)]],[-0x201e+0x112f*-0x2+0x436c,'v3'],[-0x4c1*-0x2+0x17*0x77+-0x1337,_0x105055(0x5b8)],[-0x16bd+0x1e7+-0xd*-0x1ae,_0x105055(0x3e6)],[-0xf03+-0x1*0x1bd2+-0x5*-0x8c5,_0x4436f2[_0x105055(0xac2)]],[0x1*0x2187+-0xdb7*-0x1+-0x93e*0x5,_0x105055(0x5b8)],[-0x104d+0xe2f+0x32a,_0x105055(0x5b8)],[-0x25af+0x10aa+-0x1619*-0x1,'v3'],[0x1*0xebc+-0x1465*-0x1+-0x2201,_0x4436f2['GafNy']],[-0x117*-0xd+0x1e21+0x1594*-0x2,_0x105055(0x5b8)],[-0x11*-0xc3+-0xc*-0x67+-0x1093,'v3'],[0x246a+-0xc69+-0x16bd,'u8'],[0x959*0x4+0x1*-0x6bb+0x3*-0x9cb,'f32'],[-0x1d3c+0x2*0xe2+0x1cc8,'v3'],[-0x10b7+0x1c81+0x2b*-0x3e,'i32'],[0x2f*0x93+-0x250e+0x1*0xb7d,'i32'],[-0x1*0x13fa+-0x160c+0x15bb*0x2,_0x105055(0x5b8)],[0x127c+0xb8+-0x11c0,'u8'],[0x1351+0x119b+0x2374*-0x1,'v4'],[0x515*0x1+0xfa0+0x132d*-0x1,_0x4436f2[_0x105055(0xac2)]],[-0xd73+-0x233b+0x323a,_0x4436f2['GafNy']],[0x2*0x883+0x1*-0x23ff+0x1489,_0x105055(0x5b8)],[0x16a0+-0x81c+-0x1*0xcec,'u8'],[0x85e+-0x1a4d*0x1+0x1*0x138f,'i32']],'TargetHealth':[[0x688+-0x1a1f+0x13a7,'i32'],[-0x1d7*0x8+0x683+0x849*0x1,_0x4436f2[_0x105055(0x94f)]],[-0x1*0x2e0+0x764+-0x10*0x45,'u8'],[0x5ef*0x2+-0x6*0x4e1+-0x74*-0x27,_0x4436f2[_0x105055(0x94f)]],[-0x147*0x7+-0x1*-0x1532+0x5*-0x265,_0x105055(0x3e6)],[0x1204+0xd39+-0x59*0x59,_0x4436f2['kQyrd']],[0x1a83+-0x197*0x13+0x402,_0x105055(0x3e6)],[0xfe1+-0x11c2+0x1*0x265,_0x4436f2[_0x105055(0xac2)]],[0x216a+-0x144a+0xa1*-0x14,_0x4436f2[_0x105055(0xac2)]],[0x169d+-0x241*-0xd+-0x335a,'u8'],[-0x108*-0x8+0x5fe*-0x2+0x3*0x170,_0x4436f2[_0x105055(0xac2)]],[-0x8a1+-0x3*0x265+0x57c*0x3,'u8'],[-0x18*-0x5+-0x2670+-0xc*-0x338,_0x105055(0x3e6)],[-0xc35+0x572*0x4+-0x8e7,_0x4436f2[_0x105055(0x94f)]],[-0x27a*-0x2+0x1*0x101a+-0x144e,_0x105055(0x5b8)],[-0x1d47+-0x22d1*0x1+0x40e4,'u8']],'SectatorCamera':[[0x112e+0x996*0x2+0x2446*-0x1,_0x4436f2['GafNy']],[-0x20e7+-0x6d*0x9+0x24d4,_0x105055(0x5b8)],[0x41*-0x25+-0x197e+-0x11*-0x20f,'f32'],[-0x1*-0xc49+0x735+-0x135e,'v3'],[0x155e+0xfb6*-0x2+0xee*0xb,'v3'],[0x9d*0x14+0x2566+-0x3162,_0x4436f2[_0x105055(0x94f)]],[0x1f88+0x2f0+0x1*-0x222c,_0x105055(0x3e6)],[0x1c7f*0x1+0x13*0xcb+0x4*-0xad0,_0x4436f2['GafNy']],[0x2*0x2cc+0x4b*0x5+-0x6bb,_0x105055(0x3e6)],[0x1*-0x270b+0x22db*0x1+0x4*0x122,_0x105055(0x5b8)],[-0x25dc+-0x79*0x1d+0x33ed,'u8'],[-0x12cb+-0x2*0x931+0x258d,'v3'],[0x268c+-0x1527+0x1*-0x10f9,'v4'],[-0x199*0x1+-0xd7+0x2ec,'u8'],[-0x85f*-0x1+0x2*0x902+-0x19e3,_0x105055(0x3e6)]],'UISettings':[[-0x6d8+0x1*-0x24b9+0x5*0x8bd,'i32'],[0x17f*0x1+-0xaee+-0x997*-0x1,_0x4436f2['GafNy']],[-0x182a+0x2*0x11b1+-0x9f4,'u8'],[0xa18+0x192e+0x2*-0x10ff,_0x4436f2['kQyrd']],[-0x2557+0x473+0x2238,_0x4436f2[_0x105055(0x94f)]],[0x1*0x8f3+0x199d+-0x2138,'i32'],[-0x1*-0x647+-0xff9+0x5*0x236,'u8'],[-0x429*0x1+-0xc8e*0x2+0x1ea2,'u8'],[0x15d*0x7+-0x268f*-0x1+0x2*-0x175e,'u8'],[-0x2*-0xc48+0x1*-0x1a7e+0xd*0x41,'u8'],[0x25e1+0x115*-0x19+-0x974,'u8'],[0x23ad*-0x1+-0x1*-0x1eff+0x2f*0x21,'u8'],[-0x1*-0xd85+0x285+0xea8*-0x1,'u8'],[-0x1*-0x261d+0x1575*-0x1+-0xeec,_0x4436f2['GafNy']],[-0x2063*0x1+0xa4*0x15+0x14b3,'f32'],[0x97*-0x16+-0x13*0x183+-0x65*-0x6f,'u8'],[0x260+-0xdf*0x1d+-0x1*-0x1963,_0x105055(0x5b8)],[0x1796+0xa06*-0x1+-0xaf0,_0x105055(0x3e6)],[-0x24ad+0x7*-0xc1+0x2cec,'u8'],[0xd7e+0x293*0x1+-0x1*0xc75,'u8'],[0x1*0x22e6+-0x386*-0x4+-0x2d5e,'v2'],[0x1b1*-0xd+0x1b7*0xb+0x6c8,'v2'],[-0x239b+0x1f46+-0x805*-0x1,'u8'],[-0x4*0x476+-0x4*0x2d2+0x8*0x41b,'u8'],[0x4*-0x71f+0x1f3d+0x10b,_0x105055(0x5b8)],[-0xec2+-0x1f*-0x2f+0x9d*0x15,'v3'],[0xc98+0xb*-0x28d+0x1357*0x1,_0x4436f2['GafNy']],[-0x11*0x3b+-0x133e*0x1+0x1b0d,_0x4436f2['GafNy']],[-0x1767+-0x5*-0x730+-0x8a1*0x1,_0x4436f2['GafNy']],[-0x502+-0x4*-0x5a+0x5*0x182,'u8'],[-0xa0*-0x9+-0xa5e*-0x2+0x779*-0x3,'u8'],[-0x22af+0x102c+0x1677*0x1,_0x105055(0x3e6)],[0x1f69+-0x613*-0x1+-0x217c,_0x4436f2['kQyrd']],[-0x95*-0x25+-0x784*-0x3+-0x2811,_0x105055(0x3e6)],[-0xe78+0x11*-0x1d6+0x31b6,_0x105055(0x3e6)],[-0x25*0xd7+0x1*0xe7+0xf*0x248,_0x4436f2[_0x105055(0x94f)]],[0x1407*0x1+-0x472+-0xb85,'i32'],[0x6*-0x2c6+0x209c+-0xbe4,_0x4436f2['kQyrd']],[-0x1d41+0x1e4d*0x1+-0x3*-0x104,_0x105055(0x3e6)],[-0x14f2+-0xc6d*0x2+0x31e8,'i32'],[-0x1263*-0x1+-0x3*-0xb89+0x30de*-0x1,_0x4436f2[_0x105055(0x94f)]],[-0x1ffe+0x1c0f*0x1+-0xf*-0x8d,'u8'],[-0xf8f+0x1*-0x1a8e+0x1739*0x2,'u8'],[-0x2709+-0x1*0xfb5+0x13*0x31c,'u8'],[-0x2622+-0x1c06+0x467f,'u8'],[-0x1196+-0xe4e+0x2470,'f32']]},_0x14cea7={},_0x8ca6f={};function _0x476532(_0x555d44,_0xb88e1c,_0x3debbf){var _0x5352d7=_0x105055,_0x553b7a={'ssaKa':function(_0x882e4d,_0x33bb0e){return _0x882e4d===_0x33bb0e;},'zmGYr':_0x4436f2['fbvlX'],'UbVmo':function(_0xaae18a,_0x4c6ffd){return _0xaae18a!==_0x4c6ffd;},'uUfOe':'sWurd','tahOB':_0x5352d7(0x580),'kCwuX':'kMoUK','CLZNQ':'funct'+'ion','uEQhR':_0x4436f2['zkkaU'],'QYazN':function(_0x997ffe,_0xc4847f){return _0x997ffe===_0xc4847f;},'ruPES':_0x5352d7(0x856),'GWXmK':_0x4436f2[_0x5352d7(0xbda)],'REwzz':function(_0x9cee45,_0x3b0e8a){return _0x9cee45(_0x3b0e8a);},'efkgm':_0x4436f2['HUdSt']};if(_0x4436f2[_0x5352d7(0x519)](_0x5352d7(0xb71),'ufEJr'))return function(_0x3c5c34){var _0x18ae96=_0x5352d7,_0x29dcd8={'xWIXn':_0x553b7a['zmGYr'],'XBYxg':_0x18ae96(0x4d9),'goItk':function(_0x2c4d79,_0x23b0b1){return _0x2c4d79+_0x23b0b1;}};if(_0x553b7a['UbVmo'](_0x553b7a[_0x18ae96(0x2f6)],_0x553b7a['uUfOe'])){if(_0x370b4c())return null;var _0x153f8f=_0x179b63['getEl'+'ement'+_0x18ae96(0x2ae)](_0x18ae96(0x993)+_0x18ae96(0x2cd)+'v2');if(_0x153f8f)return _0x153f8f;if(!_0x3e57ac['body']||!_0x22f114[_0x18ae96(0xbdf)][_0x18ae96(0x48e)+'dChil'+'d'])return null;try{var _0x2cdf74=('0|4|3'+_0x18ae96(0x3d8))[_0x18ae96(0xb19)]('|'),_0x3d2fb0=0x726+-0xc0b*-0x1+-0x1331;while(!![]){switch(_0x2cdf74[_0x3d2fb0++]){case'0':if(!_0x15eccc[_0x18ae96(0xa7d)+'ement'+_0x18ae96(0x2ae)](_0x29dcd8['xWIXn'])){var _0xc7ca3d=_0x1b0d9c['creat'+'eElem'+_0x18ae96(0x803)](_0x29dcd8[_0x18ae96(0x866)]);_0xc7ca3d['id']='sakur'+'a-sw-'+_0x18ae96(0x2b4)+'s',_0xc7ca3d['textC'+'onten'+'t']='#saku'+_0x18ae96(0xad6)+_0x18ae96(0x9b7)+_0x18ae96(0x2da)+_0x18ae96(0x33d)+'}',(_0x2a617d['head']||_0xf5acbc['docum'+'entEl'+'ement'])['appen'+_0x18ae96(0x635)+'d'](_0xc7ca3d);}continue;case'1':return _0x153f8f;case'2':_0xf50f23['body'][_0x18ae96(0x48e)+'dChil'+'d'](_0x153f8f);continue;case'3':_0x153f8f['id']=_0x18ae96(0x993)+_0x18ae96(0x2cd)+'v2';continue;case'4':_0x153f8f=_0x328100[_0x18ae96(0x4c9)+_0x18ae96(0x64c)+'ent']('div');continue;}break;}}catch(_0x16efad){return null;}}else try{if(_0x553b7a['tahOB']!==_0x553b7a[_0x18ae96(0x816)])return new _0x45a01e(_0x827d64[_0x18ae96(0xaec)+'r'],_0x15f4cf[_0x18ae96(0x93e)+'ffset'],_0x5614bf[_0x18ae96(0x401)+'ength']);else{var _0x37e1f0=_0x3c5c34&&_0x3c5c34['val']?_0x3c5c34[_0x18ae96(0x552)]():0x46f*-0x7+-0x12d7+0x31e0;if(!_0x37e1f0)return;var _0x5008ef=_0x8ca6f[_0x555d44]||(_0x8ca6f[_0x555d44]={}),_0x5e9b8b=_0x5008ef[_0x37e1f0];if(!_0x5e9b8b)_0x5e9b8b=_0x5008ef[_0x37e1f0]={'ptr':_0x37e1f0,'firstSeen':Date[_0x18ae96(0x2d6)](),'hits':0x0};_0x5e9b8b['hits']++;if(_0x3debbf){if(!_0x14cea7[_0x37e1f0])_0x14cea7[_0x37e1f0]={'ptr':_0x37e1f0,'kind':_0x555d44,'firstSeen':Date[_0x18ae96(0x2d6)](),'hits':0x0};_0x14cea7[_0x37e1f0]['hits']++;}else{var _0x2567f5=_0x41484b[_0x555d44];if(!_0x2567f5||_0x2567f5[_0x18ae96(0xa5e)]!==_0x37e1f0){_0x41484b[_0x555d44]={'ptr':_0x37e1f0,'firstSeen':Date['now'](),'hits':0x0,'replaced':!!_0x2567f5};try{if(_0x553b7a['UbVmo'](_0x553b7a['kCwuX'],_0x553b7a[_0x18ae96(0x190)]))_0x13aa9c[_0x18ae96(0x382)+_0x18ae96(0x26c)][_0x18ae96(0x24d)](_0x29dcd8['goItk'](_0x18ae96(0x8e0)+'\x20are\x20'+_0x18ae96(0xa6f)+_0x18ae96(0x66c)+_0x18ae96(0x7bd)+_0x18ae96(0x2d8)+_0x18ae96(0x773)+'ler\x20h'+_0x18ae96(0x8e9)+_0x18ae96(0xa21)+_0x18ae96(0x873),_0x18ae96(0x48f)+_0x18ae96(0x31f)+_0x18ae96(0x81a)+_0x18ae96(0xaea)+_0x18ae96(0x735)+'ound,'+_0x18ae96(0x875)+'he\x20ho'+_0x18ae96(0x686)+_0x18ae96(0x907)+_0x18ae96(0x23c)+_0x18ae96(0x1b5)+'verlo'+'ad.'));else{var _0xf2e621=_0x5d08a2[_0x18ae96(0x25c)+'r'](function(_0xbdef7a){var _0x2bc0a0=_0x18ae96;return _0x553b7a[_0x2bc0a0(0xb1a)](_0xbdef7a[_0x2bc0a0(0x374)],_0x555d44);})[0x1af0+-0x9*0x3b4+0x332*0x2];_0x530a89={'type':_0x555d44,'atMs':Date['now']()-_0x327157,'originalFunc':!!(_0xf2e621&&_0xf2e621['hook']&&_0x553b7a['ssaKa'](typeof _0xf2e621[_0x18ae96(0xa27)][_0x18ae96(0x1c8)+_0x18ae96(0x915)+'nc'],_0x553b7a['CLZNQ'])),'resolveGameAtFire':!!_0x152f0f(),'gameSourceAtFire':_0x311dd0[_0x18ae96(0x1a7)+'e']};}}catch(_0x4a3fe0){}}}if(_0x555d44===_0x553b7a[_0x18ae96(0xb23)]&&_0x69e834['on']){if(_0x553b7a['QYazN']('VoUfq',_0x553b7a['ruPES']))try{_0x553b7a[_0x18ae96(0x161)]===_0x18ae96(0x5e4)?_0x553b7a[_0x18ae96(0x4e5)](_0x147187,_0x37e1f0):(_0x28f901=_0x221890,_0x29a7a8=_0x21def8['c'][_0x54b409]);}catch(_0x21ecf3){}else _0x28db13[_0x18ae96(0x4d9)][_0x18ae96(0x5ab)+'ty']=_0x31fe9a[_0x18ae96(0x2bc)]?'1':'.5';}if(!_0xb88e1c){var _0xf2e621=_0x5d08a2[_0x18ae96(0x25c)+'r'](function(_0x30c845){var _0x11b11c=_0x18ae96;return _0x30c845[_0x11b11c(0x374)]===_0x555d44;})[-0x107*-0x13+0x34*-0x11+-0x1011];if(_0xf2e621&&_0xf2e621[_0x18ae96(0xa27)])try{if(_0x553b7a[_0x18ae96(0x9b1)]!=='NaCPp')_0xf2e621[_0x18ae96(0xa27)]['enabl'+'ed']=![];else try{_0xa61520();}catch(_0x10c633){}}catch(_0x47a92a){}}}}catch(_0x4e414f){}};else{var _0x2b7033=_0x170afc();if(!_0x2b7033)return null;try{return new _0x4b14f9(_0x2b7033[_0x5352d7(0xaec)+'r'],_0x2b7033[_0x5352d7(0x93e)+_0x5352d7(0x9a5)],_0x2b7033[_0x5352d7(0x401)+_0x5352d7(0x1df)]);}catch(_0x546874){return null;}}}function _0x206c0e(){var _0xf9f9ee=_0x105055,_0x3b3d29={'pAoyx':function(_0x37e825,_0x4f8f10){return _0x37e825+_0x4f8f10;}};if(_0x5d08a2['lengt'+'h'])return!![];if(!window[_0xf9f9ee(0x41e)+'WebMo'+_0xf9f9ee(0x263)]||!window['Unity'+_0xf9f9ee(0x16d)+_0xf9f9ee(0x263)][_0xf9f9ee(0xa4e)+'me'])return![];var _0x15fec2=window['Unity'+'WebMo'+_0xf9f9ee(0x263)][_0xf9f9ee(0xa4e)+'me'];if(!_0x15fec2['plugi'+'ns']||!_0x15fec2[_0xf9f9ee(0x956)+'ns'][_0xf9f9ee(0xb7c)+'h'])return![];_0x183396=window['Unity'+_0xf9f9ee(0x16d)+'dkit'][_0xf9f9ee(0x527)+'Wrapp'+'er'],_0x28f88b=_0x28f88b||_0x15fec2[_0xf9f9ee(0x956)+'ns'][_0x15fec2[_0xf9f9ee(0x956)+'ns']['lengt'+'h']-(-0x22e9+-0x212c+0x4416)];if(!_0x28f88b||typeof _0x28f88b[_0xf9f9ee(0x6d3)+_0xf9f9ee(0x6e0)]!==_0x4436f2['gEBLj'])return![];for(var _0xabab1b=0xb6f+-0x102e+0x4bf;_0x4436f2['YcXdQ'](_0xabab1b,_0x1bea52[_0xf9f9ee(0xb7c)+'h']);_0xabab1b++){if(_0xf9f9ee(0x403)===_0xf9f9ee(0x5f1)){var _0x17da7d=_0x19eae5[_0xf9f9ee(0x4d0)](this,arguments);try{if(_0x17da7d&&typeof _0x17da7d[_0xf9f9ee(0x99b)]===_0xf9f9ee(0x797)+_0xf9f9ee(0x771))_0x17da7d[_0xf9f9ee(0x99b)](_0x5b47b2,function(){});else _0x4436f2['OAGZh'](_0x2b871f,_0x17da7d);}catch(_0x4c047f){}return _0x17da7d;}else{var _0x5f1007=_0x1bea52[_0xabab1b];try{if(_0x4436f2[_0xf9f9ee(0x144)]('noYKF','noYKF')){var _0x7d4b68=_0x28f88b[_0xf9f9ee(0x6d3)+_0xf9f9ee(0x6e0)]({'typeName':_0x5f1007['type'],'methodName':'Updat'+'e','params':['i32',_0xf9f9ee(0x3e6)],'returnType':undefined},_0x476532(_0x5f1007[_0xf9f9ee(0x374)],_0x5f1007[_0xf9f9ee(0x333)],_0x5f1007['many']));_0x5d08a2['push']({'type':_0x5f1007[_0xf9f9ee(0x374)],'hook':_0x7d4b68,'keep':_0x5f1007[_0xf9f9ee(0x333)]});}else{var _0x2374ab=_0x4436f2['agoWC']['split']('|'),_0x281acd=-0xd86+0x11*-0xed+0x1*0x1d43;while(!![]){switch(_0x2374ab[_0x281acd++]){case'0':return _0x2cf880;case'1':_0x4235f2['body'][_0xf9f9ee(0x48e)+'dChil'+'d'](_0x2d31a1);continue;case'2':_0x1d3ac5=_0x3583dd[_0xf9f9ee(0x4c9)+_0xf9f9ee(0x64c)+_0xf9f9ee(0x803)](_0x4436f2[_0xf9f9ee(0x501)]);continue;case'3':if(!_0xb162a9['getEl'+_0xf9f9ee(0x78c)+_0xf9f9ee(0x2ae)]('sakur'+_0xf9f9ee(0x2cd)+_0xf9f9ee(0x2b4)+'s')){var _0xebac22=_0x2ce507['creat'+_0xf9f9ee(0x64c)+'ent']('style');_0xebac22['id']=_0xf9f9ee(0x993)+_0xf9f9ee(0x2cd)+_0xf9f9ee(0x2b4)+'s',_0xebac22[_0xf9f9ee(0x17e)+'onten'+'t']=_0xf9f9ee(0x991)+_0xf9f9ee(0xad6)+'-v2{a'+_0xf9f9ee(0x2da)+_0xf9f9ee(0x33d)+'}',(_0x560516[_0xf9f9ee(0x83f)]||_0x1b2766['docum'+'entEl'+_0xf9f9ee(0x78c)])[_0xf9f9ee(0x48e)+_0xf9f9ee(0x635)+'d'](_0xebac22);}continue;case'4':_0x1bdae9['id']='sakur'+_0xf9f9ee(0x2cd)+'v2';continue;}break;}}}catch(_0x25c0fd){_0xf9f9ee(0xa1e)!==_0x4436f2[_0xf9f9ee(0x653)]?(_0x466bc3=_0x3b3d29[_0xf9f9ee(0x683)](_0x2f6698,_0x145fb1),_0x5d3062=_0x3bd156+_0xca85d6):_0x242b92[_0xf9f9ee(0x24d)](_0x4436f2[_0xf9f9ee(0xa18)](_0x5f1007[_0xf9f9ee(0x374)]+':\x20',_0x4436f2[_0xf9f9ee(0xa4d)](String,_0x25c0fd&&_0x25c0fd[_0xf9f9ee(0x80b)+'ge']||_0x25c0fd)['slice'](0x580+0xb9f*0x1+-0x111f,-0x1*-0xc2f+0x1321+0x1eb0*-0x1)));}}}return _0x4436f2[_0xf9f9ee(0x318)](_0x5d08a2[_0xf9f9ee(0xb7c)+'h'],0x60*0x38+0x793*-0x3+0x1b9);}function _0x38d4e0(){var _0x320a1e=_0x105055,_0x183674=0x1e79+-0x16e7+-0x792;for(var _0x2b0914=0x189f+0x1*-0x1e54+-0x5b5*-0x1;_0x2b0914<_0x5d08a2[_0x320a1e(0xb7c)+'h'];_0x2b0914++){if(_0x5d08a2[_0x2b0914]['hook']&&_0x5d08a2[_0x2b0914][_0x320a1e(0xa27)][_0x320a1e(0x78d)+_0x320a1e(0x597)]!==undefined)_0x183674++;}return _0x183674;}function _0x3c5b96(){var _0x1df4cb=_0x105055,_0x2fc204={'hJenz':'none'};if(_0x4436f2[_0x1df4cb(0x275)]!==_0x1df4cb(0xae2)){if(_0x5e7d93['el'])_0x29107a['el']['style']['displ'+'ay']=_0x2fc204['hJenz'];return;}else{var _0x2c4e1c=0x22*0x66+-0x1350+-0x7b*-0xc;for(var _0xaafa1e=0x7a1+0x1157+-0x18f8;_0xaafa1e<_0x5d08a2['lengt'+'h'];_0xaafa1e++){if(_0x5d08a2[_0xaafa1e][_0x1df4cb(0xa27)]&&_0x5d08a2[_0xaafa1e]['hook']['appli'+'ed'])_0x2c4e1c++;}return _0x2c4e1c;}}var _0x32307e=null,_0x4073b9=[],_0x1e89d6={},_0x530a89=null;function _0x1c491c(_0x31d909){var _0x145823=_0x105055;try{if(!_0x183396||!_0x31d909)return null;var _0x34fee8=new _0x183396(_0x31d909)[_0x145823(0x7d8)+_0x145823(0x24a)+'me']();return _0x4436f2['ndXLP'](_0x34fee8,undefined)?null:_0x34fee8;}catch(_0x21467d){return null;}}function _0x19bb2f(_0x1df215,_0x4b3dd7,_0x4d1839){var _0x5d1ef5=_0x105055;if(_0x4436f2['OieJG']===_0x5d1ef5(0xb3b))try{var _0x3d98c0=_0x955dd1();return!!(_0x3d98c0&&_0x499514[_0x5d1ef5(0x46f)+'ified']);}catch(_0x3d7b42){return![];}else{var _0x16f4fe=_0x26e364();if(!_0x16f4fe)return null;if(_0x4b3dd7<-0x3a8+-0x1*0x224d+0x25f5*0x1||_0x4b3dd7+_0x4436f2[_0x5d1ef5(0x9ba)](_0x4d1839,-0x11*0x14d+0x11be+0x463)>_0x16f4fe['byteL'+_0x5d1ef5(0x1df)])return null;var _0x3ba50a=[];for(var _0x447fc8=0x1aa1+0xdd*0x27+-0x3c4c;_0x4436f2[_0x5d1ef5(0x785)](_0x447fc8,_0x4d1839);_0x447fc8++)_0x3ba50a[_0x5d1ef5(0x24d)](_0x16f4fe[_0x5d1ef5(0x391)+'oat32'](_0x4436f2['bKedK'](_0x1df215,_0x4b3dd7)+_0x447fc8*(0x186c+-0xc23+-0xc45),!![]));return _0x311dd0['ok']+=_0x4d1839,_0x3ba50a;}}var _0x537440={'PhotonNetworkSync':[[_0x105055(0x19f),_0x4436f2['SbwSU']],[_0x105055(0x68c),_0x105055(0x826)+'h'],['0x24',_0x4436f2['temSh']],['0x28',_0x105055(0x37d)],[_0x4436f2['sHzfd'],_0x105055(0x6c0)+_0x105055(0x4ae)]],'NetworkPlayerAnimations':[[_0x105055(0x19f),_0x4436f2[_0x105055(0x6c5)]],['0x18','sync']],'NPC_Cotroller':[[_0x105055(0x951),_0x105055(0x139)+'le'],['0xb4','targe'+_0x105055(0xaf7)+'th'],[_0x4436f2[_0x105055(0x7b7)],_0x105055(0x826)+'h'],[_0x4436f2[_0x105055(0xb8a)],_0x4436f2[_0x105055(0x63b)]],['0xe8','trans'+_0x105055(0x250)]],'EnemyBot':[['0x14',_0x105055(0x670)+'form']]},_0x253211={'PhotonNetworkSync':[[_0x4436f2[_0x105055(0x393)],_0x4436f2[_0x105055(0x285)]],[_0x105055(0x634),_0x4436f2[_0x105055(0x4bd)]],['0x5c','id']]};function _0x14d20f(_0x3415f1,_0x56676a){var _0x5e7c97=_0x105055,_0x37bfad={'taBwk':_0x5e7c97(0x797)+'ion','hukxX':_0x5e7c97(0x299),'ZhNXC':function(_0x116fef,_0x392485){return _0x116fef+_0x392485;}},_0x1a4771=_0x581ece[_0x3415f1]||[],_0x4ba411={'kind':_0x3415f1,'ptr':_0x4436f2[_0x5e7c97(0x350)]('0x',_0x56676a[_0x5e7c97(0x322)+'ing'](0x15f+0x45*-0x39+0x2*0x707)),'pos':null,'posAt':null,'allVecs':[],'scalars':[],'refs':{}};for(var _0x5a40f2=0x1*-0xc11+-0x1*0x13ee+0x1fff*0x1;_0x4436f2['KDtak'](_0x5a40f2,_0x1a4771[_0x5e7c97(0xb7c)+'h']);_0x5a40f2++){if(_0x4436f2['NpbED'](_0x1a4771[_0x5a40f2][-0x1*-0xa9+-0x1*-0x7ac+-0x854],'v3'))continue;var _0x22e79d=_0x4436f2[_0x5e7c97(0x59a)](_0x19bb2f,_0x56676a,_0x1a4771[_0x5a40f2][-0x46+-0x2*0x135a+0x26fa],0x2652+-0xd8b+-0xc62*0x2);if(!_0x22e79d)continue;_0x4ba411[_0x5e7c97(0x409)+'cs'][_0x5e7c97(0x24d)]({'o':_0x4436f2[_0x5e7c97(0x5e7)]('0x',_0x1a4771[_0x5a40f2][-0x251*-0x8+-0x1*0x863+0x173*-0x7]['toStr'+_0x5e7c97(0x1c0)](-0x3a*-0x6d+0x2693+-0x3f35)),'v':_0x22e79d});}var _0x35a992=0x436*0x5+-0xe16+-0x6f8*0x1,_0x5d8f6d=_0x5c5ad0(_0x4ba411[_0x5e7c97(0x409)+'cs'],_0x2ae51b());_0x4ba411['pos']=_0x5d8f6d[_0x5e7c97(0x18e)],_0x4ba411[_0x5e7c97(0x4d6)]=_0x5d8f6d['posAt'],_0x4ba411['inBan'+'d']=_0x5d8f6d['inBan'+'d'],_0x4ba411[_0x5e7c97(0x5ac)+'er']=_0x5d8f6d[_0x5e7c97(0x5ac)+'er'],_0x4ba411[_0x5e7c97(0xa8c)]=_0x5d8f6d['reach'],void _0x35a992;var _0x1320df=_0x537440[_0x3415f1],_0x3a46ce=_0x253211[_0x3415f1];if(_0x3a46ce){_0x4ba411['tag']={};for(var _0x37fa03=-0x3*0x21d+-0x1e36+0x248d;_0x4436f2['PGUhO'](_0x37fa03,_0x3a46ce['lengt'+'h']);_0x37fa03++){if(_0x4436f2[_0x5e7c97(0x387)](_0x4436f2[_0x5e7c97(0x652)],_0x4436f2['JfVeA'])){var _0x8a1116=_0x4436f2['fxhpo'](_0x3c6e14,_0x56676a+parseInt(_0x3a46ce[_0x37fa03][0x21bb+0xb41+0x4*-0xb3f],0x1fd*0x4+-0x51*0x45+0xdf1),'i32');if(_0x8a1116!==undefined)_0x4ba411['tag'][_0x3a46ce[_0x37fa03][0x23b3+-0x7f*-0x2a+0xc*-0x4b6]]=_0x8a1116;}else{var _0x417f27=_0x21e6bb(_0x4436f2[_0x5e7c97(0x1ea)](_0xb8af24,_0x4436f2[_0x5e7c97(0x2c4)](_0x55f57b,_0x4cd840[_0x9ee2d4][-0x1fef+-0x3b8+0x23a7],-0x2664+0x323+0x2351)),_0x4436f2[_0x5e7c97(0x94f)]);if(_0x4436f2[_0x5e7c97(0x770)](_0x417f27,_0x1c4c93))_0x6f82fa['tag'][_0x421b38[_0x14b923][0x25ac+-0xa8c+-0x1b1f]]=_0x417f27;}}}if(_0x1320df)for(var _0x1e618f=0x421*-0x4+-0x1f21+-0x1*-0x2fa5;_0x1e618f<_0x1320df[_0x5e7c97(0xb7c)+'h'];_0x1e618f++){var _0x1e75c4=_0x3c6e14(_0x56676a+_0x4436f2[_0x5e7c97(0xab8)](parseInt,_0x1320df[_0x1e618f][0x22a2+0x2ec+-0x258e],-0x25ae+0x769*0x3+0xf83),_0x5e7c97(0x380));if(_0x1e75c4)_0x4ba411[_0x5e7c97(0x8d2)][_0x1320df[_0x1e618f][0xa3e+-0x186d+0xe30]]=_0x4436f2[_0x5e7c97(0x90c)]('0x',(_0x1e75c4>>>-0x4*-0x3a1+-0x4b1+-0x1f7*0x5)['toStr'+_0x5e7c97(0x1c0)](0x1*-0xadd+0xaa0+0x4d));}return _0x4ba411[_0x5e7c97(0x827)+'rs']=_0x1a4771['filte'+'r'](function(_0x2ad1be){var _0x251be9=_0x5e7c97;return _0x2ad1be[0x20ab*0x1+-0x30*0x87+0x1*-0x75a]===_0x251be9(0x5b8)||_0x2ad1be[-0x1624*-0x1+0x137*-0x19+0x1*0x83c]==='i32';})[_0x5e7c97(0x9df)](function(_0x1fd30e){var _0x1cb099=_0x5e7c97;if(_0x37bfad['hukxX']==='psgqH'){if(_0xd740ae&&typeof _0x32b004[_0x1cb099(0x99b)]===_0x37bfad['taBwk'])_0x2ad97d['then'](_0x316f42,function(){});else _0x45286c(_0x4153bb);}else return{'o':_0x37bfad['ZhNXC']('0x',_0x1fd30e[0x16e6+-0x3*0x2bf+-0xea9]['toStr'+_0x1cb099(0x1c0)](0x1721*0x1+-0x110f+-0x602)),'v':_0x3c6e14(_0x56676a+_0x1fd30e[0x1594+-0x166+-0x142e],_0x1fd30e[0xec6+0x2065+0x2f2a*-0x1])};})['filte'+'r'](function(_0x5876e0){return _0x5876e0['v']!==undefined&&isFinite(_0x5876e0['v']);})['slice'](-0x1*0x18d1+-0x1*0x18fb+0x1*0x31cc,-0x423*0x6+-0xb5d*-0x2+-0x2*-0x112),_0x4ba411;}function _0x17006a(){var _0xa11388=_0x105055,_0xd9c6ca={'players':[],'bots':[],'enemies':[],'controllers':[],'camera':null,'cameraFrom':null,'playerList':null,'managers':{},'wasmTypes':null},_0x46d063=_0x41484b['FPSco'+_0xa11388(0x773)+'ler']&&_0x41484b[_0xa11388(0x2d8)+'ntrol'+'ler'][_0xa11388(0xa5e)]||-0x1663+-0x47*-0x43+0x3ce,_0x124d5c=_0x8ca6f['Photo'+'nNetw'+'orkSy'+'nc']||{},_0x306da1=Object['keys'](_0x124d5c);for(var _0x333068=-0x2*-0x209+-0x92f*0x4+0x20aa;_0x333068<_0x306da1[_0xa11388(0xb7c)+'h']&&_0x4436f2['CyjBr'](_0x333068,0x1ade+0x29*0x29+-0xf*0x239);_0x333068++){if(_0x4436f2['xUxYA'](_0x4436f2[_0xa11388(0x2a0)],_0xa11388(0xbe2))){var _0x440bc0=_0x124d5c[_0x306da1[_0x333068]],_0x51f1c5=_0x4436f2['fxhpo'](_0x14d20f,'Photo'+_0xa11388(0xa30)+'orkSy'+'nc',_0x440bc0[_0xa11388(0xa5e)]);_0x51f1c5[_0xa11388(0x62c)]=_0x440bc0['hits'],_0x51f1c5['first'+_0xa11388(0x839)+'s']=_0x4436f2[_0xa11388(0xb77)](_0x440bc0['first'+_0xa11388(0x2f5)],_0x327157),_0x51f1c5['isLoc'+'al']=!!_0x46d063&&_0x4436f2[_0xa11388(0xac5)](_0x51f1c5['refs'][_0xa11388(0x37d)],'0x'+_0x46d063[_0xa11388(0x322)+'ing'](-0x9e6+0x5d9+-0x41d*-0x1));if(_0x51f1c5[_0xa11388(0x8d2)][_0xa11388(0x826)+'h']){if(_0x4436f2['vWhqj'](_0x4436f2['cKgsS'],_0x4436f2[_0xa11388(0x12c)])){var _0x1f4b1d=(_0xa11388(0x9af)+'|0|10'+_0xa11388(0x502)+_0xa11388(0x55e)+'|1')[_0xa11388(0xb19)]('|'),_0x5c49e0=0x154*0x1b+-0x1cbb+-0x721;while(!![]){switch(_0x1f4b1d[_0x5c49e0++]){case'0':var _0xbee646=null;continue;case'1':for(var _0x487e76=0x1*0x9a3+-0x110e+0x76b;_0x4436f2[_0xa11388(0xb76)](_0x487e76,_0x246fde[_0xa11388(0xb7c)+'h']);_0x487e76++)_0x2390be['cols'][_0xa11388(0x48e)+_0xa11388(0x635)+'d'](_0x246fde[_0x487e76]);continue;case'2':_0x1af0d8[_0xa11388(0x4af)]=[];continue;case'3':_0x5dadf8['cat']=_0x193dd4;continue;case'4':_0x437741['head'][_0xa11388(0x17e)+'onten'+'t']=_0x4436f2[_0xa11388(0xaee)]+(_0xbee646&&_0xbee646['label']||'?');continue;case'5':try{_0x246fde=_0x4436f2['uxQzY'](_0x2b9a32,_0x4835c5);}catch(_0x1687dc){_0x246fde=[];}continue;case'6':for(var _0x1ccf3f in _0x31ec76['butto'+'ns']){if(_0x39115a['butto'+'ns'][_0x1ccf3f][_0xa11388(0x269)+_0xa11388(0x5a8)])_0x59f4c4[_0xa11388(0xba4)+'ns'][_0x1ccf3f][_0xa11388(0x269)+'Name']=_0x4436f2[_0xa11388(0x2ea)]+(_0x1ccf3f===_0x44c885?_0x4436f2[_0xa11388(0x8fb)]:'');}continue;case'7':var _0x246fde=[];continue;case'8':if(!_0x1e019f['cols'])return;continue;case'9':while(_0x1529d8[_0xa11388(0x185)][_0xa11388(0x885)+_0xa11388(0x59b)])_0x50ce69[_0xa11388(0x185)][_0xa11388(0x547)+_0xa11388(0x946)+'d'](_0x440eb3[_0xa11388(0x185)]['first'+'Child']);continue;case'10':for(var _0x3131ce=-0xab8+0xdea+-0x332;_0x4436f2[_0xa11388(0x75b)](_0x3131ce,_0x25bf37['lengt'+'h']);_0x3131ce++)if(_0x12b8cc[_0x3131ce]['id']===_0x558c1f)_0xbee646=_0x12224a[_0x3131ce];continue;}break;}}else{var _0x55ed95=parseInt(_0x51f1c5[_0xa11388(0x8d2)][_0xa11388(0x826)+'h'],0xa*0x1a6+-0x12a5+-0x239*-0x1);_0x51f1c5[_0xa11388(0x826)+'h']=_0x4436f2[_0xa11388(0xb35)](_0x19e860,_0x55ed95,_0x4436f2['PGFYZ'],_0xa11388(0x2a7));}}_0xd9c6ca[_0xa11388(0x73b)+'rs']['push'](_0x51f1c5);}else{var _0x174e48=('2|3|6'+_0xa11388(0x4ef)+_0xa11388(0x87a))['split']('|'),_0x924e=0x1cde+-0xd24+-0xfba;while(!![]){switch(_0x174e48[_0x924e++]){case'0':var _0x24b4f4=new _0x1550d4(_0x17431f[_0xa11388(0xaec)+'r'],_0x17431f['byteO'+_0xa11388(0x9a5)],_0x17431f[_0xa11388(0x401)+'ength']);continue;case'1':return _0x2360bc(_0x4436f2['zQUrw'](_0x3f7349,_0x42f9cc)+_0x5603af[_0xa11388(0x539)+'n'],_0x4436f2['kQyrd'],_0x36a4a6^_0x404d85)&&_0xfb6563(_0x52d4a7+_0x2d1109+_0x5603af[_0xa11388(0x9dd)],_0x59722d===_0xa11388(0x8fe)?_0xa11388(0x5b8):_0x127673===_0x4436f2['fkBSn']?_0xa11388(0x3e6):'u8',_0x2ad5b3===_0xa11388(0x8fe)?_0x46f81b:_0x12ab5e===_0xa11388(0x2a7)?_0x288254|-0x14d6+-0x2*0x393+0x1bfc*0x1:_0x241196?0x19c4+0x54*0x2+0x1a6b*-0x1:0x484+0xa3e+-0xec2)&&_0x4436f2[_0xa11388(0x621)](_0x544d64,_0x1898ec+_0x147ed4+_0x5603af[_0xa11388(0x549)+'e'],'u8',-0x4bc+-0x3*-0x2cf+-0x3b1);case'2':var _0x5603af=_0xdb40fa[_0x496087];continue;case'3':var _0x17431f=_0x4fefd4(_0x1394e7,_0x4740bd,_0x5603af[_0xa11388(0x53c)]);continue;case'4':var _0x36a4a6;continue;case'5':if(_0x1c312d===_0xa11388(0x8fe))_0x36a4a6=_0x4436f2[_0xa11388(0x4f1)](_0x2e80a5,_0x19545a);else{if(_0x30956a===_0x4436f2[_0xa11388(0x2d5)])_0x36a4a6=_0x4436f2[_0xa11388(0x6eb)](_0x2173de,0x57*-0x16+-0x207a+0x27f4);else _0x36a4a6=(_0x3965e2?-0x1*-0xfe9+-0xd5*0x23+-0x1*-0xd37:-0x1762+-0x1*0x1f4d+-0x36af*-0x1)&0x1c*-0x7f+0xe31+-0x1*-0xb2;}continue;case'6':if(!_0x17431f)return![];continue;case'7':var _0x404d85=_0x5603af[_0xa11388(0x977)+'pe']==='u8'?_0x24b4f4[_0xa11388(0xbce)+_0xa11388(0x817)](_0x5603af['key']):_0x24b4f4[_0xa11388(0x1bb)+_0xa11388(0x16f)](_0x5603af[_0xa11388(0x794)],!![]);continue;}break;}}}_0xd9c6ca['playe'+_0xa11388(0x678)+'t']=_0x306da1[_0xa11388(0xb7c)+'h'];var _0x804694=_0x8ca6f['NPC_C'+'otrol'+'ler']||{},_0x4e66ed=Object['keys'](_0x804694);for(var _0x1b7300=-0x15a2+0x1a3*0x8+0x88a;_0x1b7300<_0x4e66ed['lengt'+'h']&&_0x4436f2['puRni'](_0x1b7300,-0x141e+0x18b6+0x90*-0x8);_0x1b7300++){var _0x37d0c4=_0x4436f2['SOyBs'](_0x14d20f,_0x4436f2[_0xa11388(0x1a8)],_0x804694[_0x4e66ed[_0x1b7300]][_0xa11388(0xa5e)]);_0x37d0c4['hits']=_0x804694[_0x4e66ed[_0x1b7300]][_0xa11388(0x62c)],_0x37d0c4[_0xa11388(0x885)+_0xa11388(0x839)+'s']=_0x4436f2[_0xa11388(0x898)](_0x804694[_0x4e66ed[_0x1b7300]][_0xa11388(0x885)+'Seen'],_0x327157);if(_0x37d0c4[_0xa11388(0x8d2)][_0xa11388(0x826)+'h'])_0x37d0c4[_0xa11388(0x826)+'h']=_0x19e860(_0x4436f2['bNUZP'](parseInt,_0x37d0c4[_0xa11388(0x8d2)][_0xa11388(0x826)+'h'],0x31*-0x11+0x5b3+-0xa*0x3d),_0x4436f2['PGFYZ'],_0x4436f2[_0xa11388(0x2d5)]);_0xd9c6ca[_0xa11388(0x7cc)][_0xa11388(0x24d)](_0x37d0c4);}_0xd9c6ca[_0xa11388(0x127)+_0xa11388(0x748)]=_0x4e66ed[_0xa11388(0xb7c)+'h'];var _0x4240bb=_0x8ca6f['FPSco'+_0xa11388(0x773)+_0xa11388(0x2a1)]||{},_0x501679=Object[_0xa11388(0x5ec)](_0x4240bb);for(var _0x4320a1=-0xb8c*-0x2+0x20c6*-0x1+0x9ae;_0x4436f2[_0xa11388(0x3f7)](_0x4320a1,_0x501679['lengt'+'h'])&&_0x4320a1<-0xc6e*-0x1+0x1367*-0x2+0x1*0x1a78;_0x4320a1++){var _0x4d88e0=_0x4436f2[_0xa11388(0x6d0)](_0x14d20f,_0x4436f2[_0xa11388(0x45c)],_0x4240bb[_0x501679[_0x4320a1]]['ptr']);_0x4d88e0['hits']=_0x4240bb[_0x501679[_0x4320a1]]['hits'],_0x4d88e0[_0xa11388(0xb16)+'al']=_0x4240bb[_0x501679[_0x4320a1]][_0xa11388(0xa5e)]===_0x46d063,_0xd9c6ca['contr'+_0xa11388(0x518)+'s'][_0xa11388(0x24d)](_0x4d88e0);}_0xd9c6ca[_0xa11388(0x587)+_0xa11388(0x518)+_0xa11388(0x434)]=_0x501679['lengt'+'h'];var _0x213b8b=_0xd9c6ca['playe'+'rs']['conca'+'t'](_0xd9c6ca[_0xa11388(0x7cc)]);for(var _0x4cec64=0xfb*0x7+0x1829+-0xf83*0x2;_0x4436f2[_0xa11388(0x99f)](_0x4cec64,_0x213b8b[_0xa11388(0xb7c)+'h']);_0x4cec64++){if(_0x213b8b[_0x4cec64]['isLoc'+'al'])continue;_0xd9c6ca[_0xa11388(0x58e)+'es'][_0xa11388(0x24d)](_0x213b8b[_0x4cec64]);}_0xd9c6ca[_0xa11388(0x187)+_0xa11388(0x434)]=_0xd9c6ca[_0xa11388(0x58e)+'es'][_0xa11388(0xb7c)+'h'];var _0x4e8af7={'TDM_GameManager':0x2c,'GG_GameManager':0x14},_0x2bc7d3={'TDM_GameManager':0x50,'GG_GameManager':0x5c};for(var _0x1c5d61 in _0x41484b){var _0x5e851e=_0x41484b[_0x1c5d61];if(!_0x5e851e||!_0x5e851e[_0xa11388(0xa5e)])continue;if(!_0x4436f2[_0xa11388(0x3a8)](_0x1c5d61,_0x4e8af7))continue;_0xd9c6ca[_0xa11388(0x94a)+_0xa11388(0xae0)][_0x1c5d61]=_0x4436f2[_0xa11388(0x577)]('0x',_0x5e851e[_0xa11388(0xa5e)]['toStr'+_0xa11388(0x1c0)](0x7ad+0xb3*0x25+0x1*-0x217c));var _0x280a52=_0x3c6e14(_0x5e851e[_0xa11388(0xa5e)]+_0x4e8af7[_0x1c5d61],'u32'),_0x3bee64=_0x4436f2['UfpPT'](_0x3c6e14,_0x4436f2['Slqrc'](_0x5e851e[_0xa11388(0xa5e)],_0x2bc7d3[_0x1c5d61]),_0xa11388(0x380));_0x280a52&&_0xd9c6ca[_0xa11388(0x95f)+'a']===null&&(_0xd9c6ca['camer'+'a']='0x'+(_0x280a52>>>0x17f3*-0x1+0x38*-0x11+0x1bab)['toStr'+_0xa11388(0x1c0)](-0x1d5d*-0x1+-0x1*-0x2177+0x4e*-0xce),_0xd9c6ca['camer'+_0xa11388(0x712)]=_0x1c5d61);if(_0x3bee64&&_0xd9c6ca['playe'+'rList']===null)_0xd9c6ca['playe'+_0xa11388(0x3e7)]='0x'+(_0x3bee64>>>0x10fd+-0xe30+0x1*-0x2cd)[_0xa11388(0x322)+_0xa11388(0x1c0)](-0xef6+0x185d+-0x957);}if(!_0xd9c6ca[_0xa11388(0x73b)+'rCoun'+'t']&&!_0xd9c6ca[_0xa11388(0x127)+_0xa11388(0x748)]&&!_0xd9c6ca[_0xa11388(0x95f)+'a'])_0xd9c6ca[_0xa11388(0x80a)]=_0xa11388(0xac9)+_0xa11388(0x5c5)+_0xa11388(0x60d)+_0xa11388(0x60a)+',\x20no\x20'+_0xa11388(0xba7)+_0xa11388(0x647)+_0xa11388(0x4f9)+_0xa11388(0x8a7)+'\x20game'+'\x20mana'+_0xa11388(0x4ff)+'That\x20'+_0xa11388(0x44a)+_0xa11388(0x5b9)+_0x4436f2[_0xa11388(0x67b)];else!_0xd9c6ca['enemy'+_0xa11388(0x434)]&&(_0xd9c6ca[_0xa11388(0x80a)]=_0x4436f2['mrphq']+_0x4436f2[_0xa11388(0x504)]);try{var _0x5e3a24=window[_0xa11388(0x41e)+'WebMo'+_0xa11388(0x263)]&&window['Unity'+_0xa11388(0x16d)+_0xa11388(0x263)]['Runti'+'me'],_0x4a6029=_0x5e3a24&&_0x5e3a24['inter'+'nalWa'+_0xa11388(0x3b5)+'es']||[],_0x4b7655={};for(var _0x40e359=0x1c1*0x7+-0x1ca*0x9+0xb*0x59;_0x4436f2[_0xa11388(0x352)](_0x40e359,_0x4a6029[_0xa11388(0xb7c)+'h'])&&_0x40e359<-0x23*0xc7+0x871+-0x4*-0x899;_0x40e359++){var _0x16e4b5=_0x4436f2['MekhW'](_0x4a6029[_0x40e359][_0xa11388(0x8b1)+'s']['join'](',')+_0x4436f2[_0xa11388(0x5ea)],_0x4a6029[_0x40e359]['retur'+'nType']||_0x4436f2[_0xa11388(0xae5)]);_0x4b7655[_0x16e4b5]=(_0x4b7655[_0x16e4b5]||0x5b*-0x43+-0x127d*0x1+-0x1527*-0x2)+(-0x1*0x1064+0x33a*0x6+-0x2f7);}_0xd9c6ca['wasmT'+'ypes']=_0x4b7655;}catch(_0x5360c0){}return _0xd9c6ca;}function _0x19e860(_0x18b418,_0x3a6e99,_0x2f9f93){var _0xd3b314=_0x105055;if(_0x4436f2[_0xd3b314(0x387)](_0x4436f2['Gxuqr'],_0xd3b314(0x7e0)))_0x53989d['cv']['width']=_0x832eb8,_0x3c6a59['cv'][_0xd3b314(0x171)+'t']=_0x29b785;else{try{if(_0x4436f2['MnKgY'](_0xd3b314(0x98d),_0x4436f2[_0xd3b314(0xaf0)])){var _0x3c15d2=_0x581ece[_0x3a6e99]||[];for(var _0x311d2a=-0x1cdb+-0x6*0xd+0x1d29;_0x4436f2[_0xd3b314(0x338)](_0x311d2a,_0x3c15d2[_0xd3b314(0xb7c)+'h']);_0x311d2a++){if(_0x4436f2['gsSSB']!==_0x4436f2['Xqfxf']){if(_0x3c15d2[_0x311d2a][0x1893+-0x2b*0xe8+-0xe66*-0x1]!==_0x2f9f93)continue;var _0x1e37de=_0x3c15d2[_0x311d2a][-0x1*0x1bf2+0x10b2+-0xb4*-0x10];if(_0x2f9f93['index'+'Of']('obf')===-0x109f+0x43*-0x43+0x2228*0x1){if(_0xd3b314(0x928)!==_0x4436f2[_0xd3b314(0x316)]){var _0x5e2ceb=_0x18c4d3[_0xe9abfe];try{var _0x334c5d=_0x1ebc66[_0xd3b314(0x6d3)+_0xd3b314(0x6e0)]({'typeName':_0x5e2ceb[_0xd3b314(0x374)],'methodName':_0x4436f2[_0xd3b314(0x715)],'params':[_0x4436f2[_0xd3b314(0x94f)],_0xd3b314(0x3e6)],'returnType':_0x2c06da},_0x4436f2[_0xd3b314(0x621)](_0x1bc04e,_0x5e2ceb[_0xd3b314(0x374)],_0x5e2ceb['keep'],_0x5e2ceb['many']));_0x3c9247[_0xd3b314(0x24d)]({'type':_0x5e2ceb[_0xd3b314(0x374)],'hook':_0x334c5d,'keep':_0x5e2ceb[_0xd3b314(0x333)]});}catch(_0x43285b){_0x259787[_0xd3b314(0x24d)](_0x4436f2[_0xd3b314(0x1ea)](_0x4436f2[_0xd3b314(0xa09)](_0x5e2ceb[_0xd3b314(0x374)],':\x20'),_0x39d1e4(_0x43285b&&_0x43285b['messa'+'ge']||_0x43285b)['slice'](0x5*-0x6e9+0x17*0xcf+0xff4,0x1f58+0x64d*-0x1+0x2f*-0x85)));}}else{var _0x18cb70=_0x4436f2['MbBMq'](_0x499e00,_0x18b418,_0x1e37de,_0x2f9f93);if(!_0x18cb70)return null;_0x18cb70['o']=_0x1e37de,_0x18cb70['k']=_0x2f9f93;var _0x54b73c=_0x59977a([_0x18cb70]);if(!_0x54b73c['rows'][_0xd3b314(0xb7c)+'h'])return null;return _0x54b73c[_0xd3b314(0x8c8)][-0x296+-0x259*-0xd+0x1*-0x1bef];}}var _0x20f42c=_0x3c6e14(_0x4436f2['iuomc'](_0x18b418,_0x1e37de),_0x2f9f93);if(_0x20f42c===undefined)return null;return{'o':'0x'+_0x1e37de['toStr'+_0xd3b314(0x1c0)](0x16e*-0x2+0x13*-0x122+0x1872),'v':_0x20f42c};}else return _0x2a01a9[_0xd3b314(0x1a7)+'e']=_0xd3b314(0xa4e)+_0xd3b314(0x354)+_0xd3b314(0x862),_0x5879e6;}}else{var _0x1797f0=_0x4dc4d7;if(_0x1797f0&&_0x1797f0['el'])_0x1797f0['el'][_0xd3b314(0x4d9)]['displ'+'ay']=_0x54e3ce?'':_0xd3b314(0x576);var _0x2b6690=_0x501f4d;if(_0x2b6690&&_0x2b6690['cv'])_0x2b6690['cv'][_0xd3b314(0x4d9)]['displ'+'ay']=_0x153f4c?'':_0xd3b314(0x576);}}catch(_0x131cf7){}return null;}}function _0xa6bb05(){var _0x254553=_0x105055,_0x490a1d={'QINYs':_0x4436f2['RBZPg']};if('bUkQK'!==_0x4436f2[_0x254553(0x6e8)]){var _0x22dff1=_0x2d7c61[_0x1fdc9e][_0x254553(0x774)]||[_0x554491[_0x345402]['v'],0x68a*0x5+-0x3d*-0x17+-0x151*0x1d,0x1*0x99b+0x2551+0x1*-0x2eec];return _0x22dff1[_0x254553(0x9df)](function(_0x4dd53d){var _0x1c41a2=_0x254553;return _0x1d25e7[_0x1c41a2(0x679)](_0x4dd53d*(0x2a5*-0x1+-0x94f*-0x4+-0x6d7*0x5))/(0xd*0x22c+0x2632+-0x420a);})['join']('\x20\x20');}else{var _0x440ff5={};_0x311dd0['ok']=0x10ec+0x1088+-0x2174,_0x311dd0['faile'+'d']=0x420+-0xa91+0x671,_0x311dd0[_0x254553(0x7c6)+'rror']=null;var _0x38ee69=Object['keys'](_0x581ece);for(var _0x1d0b24=0x110+-0x2216*0x1+0x2106;_0x4436f2['MnKKR'](_0x1d0b24,_0x38ee69[_0x254553(0xb7c)+'h']);_0x1d0b24++){var _0x2b6dc=_0x38ee69[_0x1d0b24],_0x3b5516=_0x41484b[_0x2b6dc];if(!_0x3b5516||!_0x3b5516[_0x254553(0xa5e)])continue;var _0x48fda8=_0x581ece[_0x2b6dc]||[],_0x19a777=[];for(var _0xcadcbc=0x20cc+-0x1*-0x15a5+0xb*-0x4f3;_0xcadcbc<_0x48fda8[_0x254553(0xb7c)+'h'];_0xcadcbc++){var _0x17dbc3=_0x48fda8[_0xcadcbc][0x34*0x44+0x35b+-0x112b],_0x43c7d5=_0x48fda8[_0xcadcbc][0x1b25*-0x1+-0x1b*-0xd5+0x4af*0x1];if(_0x4436f2[_0x254553(0x795)](_0x43c7d5[_0x254553(0x20f)+'Of'](_0x4436f2[_0x254553(0x87f)]),-0x2353*0x1+0x72e*0x1+-0x28f*-0xb)){if(_0x4436f2[_0x254553(0x545)]===_0x4436f2[_0x254553(0xb2d)]){if(_0x109a14[_0x454aee][_0x254553(0x426)+'ntWin'+_0x254553(0x514)])_0x266678[_0x3753c1][_0x254553(0x426)+_0x254553(0x2c8)+_0x254553(0x514)][_0x254553(0x913)+_0x254553(0x30d)+'e'](_0x58b1d0,'*');}else{var _0x1a3039=_0x499e00(_0x3b5516['ptr'],_0x17dbc3,_0x43c7d5);if(!_0x1a3039)continue;_0x1a3039['o']=_0x17dbc3,_0x1a3039['k']=_0x43c7d5,_0x19a777['push'](_0x1a3039);}}else{if(_0x4436f2['snJoN']!==_0x254553(0x6a4)){var _0x589efd=_0x4436f2[_0x254553(0x2c4)](_0x3c6e14,_0x3b5516['ptr']+_0x17dbc3,_0x43c7d5);if(_0x589efd===undefined)continue;var _0x378a1b={'o':_0x17dbc3,'k':_0x43c7d5,'v':_0x589efd};if(_0x43c7d5==='v2'||_0x43c7d5==='v3'||_0x4436f2['sADqx'](_0x43c7d5,'v4')){var _0x117a1d=_0x43c7d5==='v2'?0x11ca+-0x2693*-0x1+-0x385b:_0x43c7d5==='v3'?-0x6*0x2b6+0x1098+-0x51:-0x5*0x127+-0x26e0+0x7*0x661,_0x4d6eb6=_0x19bb2f(_0x3b5516['ptr'],_0x17dbc3,_0x117a1d);_0x4d6eb6&&(_0x378a1b[_0x254553(0x774)]=_0x4d6eb6,_0x378a1b['v']=_0x4d6eb6[0x22b4+-0x212f*-0x1+-0x43e3]);}_0x19a777['push'](_0x378a1b);}else{var _0x206f56=_0x4436f2['xNSFr'](_0x2dfde2+'\x0a'+_0x1789ee[_0x254553(0x17d)+'gify'](_0x1d7ad1,null,-0x6a*0x38+0x2*0x82e+0x6d5)+'\x0a',_0x12fd25);if(_0xef7a06[_0x254553(0x551)+_0x254553(0x564)]&&_0x20f749['clipb'+'oard'][_0x254553(0xb63)+_0x254553(0x79d)])_0x258b71['clipb'+_0x254553(0x564)][_0x254553(0xb63)+'Text'](_0x206f56)[_0x254553(0x99b)](function(){var _0x18821e=_0x254553;_0x4dd4cd['textC'+_0x18821e(0x14e)+'t']=_0x490a1d['QINYs'];});else _0x5e5110['textC'+_0x254553(0x14e)+'t']=_0x254553(0x126)+_0x254553(0x9ad)+_0x254553(0xbaa)+'ed\x20-\x20'+'open\x20'+_0x254553(0x630)+'anel\x20'+'inste'+'ad';}}}if(_0x19a777['lengt'+'h']){var _0x3da5b4=_0x59977a(_0x19a777);_0x440ff5[_0x2b6dc]=_0x3da5b4['rows'],_0x1e89d6[_0x2b6dc]={'key':_0x3da5b4[_0x254553(0x794)],'sane':_0x3da5b4['sane'],'checked':_0x3da5b4[_0x254553(0x869)+'ed'],'keyConsistent':_0x3da5b4[_0x254553(0x2e3)+_0x254553(0x3ef)+_0x254553(0x803)],'keySource':_0x3da5b4['keySo'+_0x254553(0xc07)]};}}return _0x440ff5;}}function _0x59977a(_0x44f088){var _0x266346=_0x105055,_0x1e1e79=-0x6*0x107+-0x8d6+0x280*0x6,_0x12d40d=0x1369+-0x1c30+0x8c7*0x1,_0x990e2a=null;for(var _0x3c0800=-0x1*-0x12be+0x4bb+-0x1779*0x1;_0x3c0800<_0x44f088[_0x266346(0xb7c)+'h'];_0x3c0800++){if(_0x4436f2[_0x266346(0x2e1)]('WaOuq','DrAGY'))_0x4436f2[_0x266346(0x943)](_0x237b84,_0x95b1b,_0x3fa6e5[_0x266346(0x8be)]);else{var _0x38618f=_0x44f088[_0x3c0800];if(_0x38618f['k']['index'+'Of'](_0x266346(0x9a1))!==0x1278+0x14c7+-0x273f)continue;_0x38618f['v']=_0x4436f2['wPGEv'](_0x481864,_0x38618f['k'],_0x38618f['hidde'+'n'],_0x38618f[_0x266346(0x870)+_0x266346(0x847)+'t0']),_0x38618f['keyUs'+'ed']=_0x38618f['keyAt'+_0x266346(0x847)+'t0'],_0x38618f[_0x266346(0x229)]=_0x4436f2[_0x266346(0xae7)](_0x4436f2[_0x266346(0xae7)](_0x4436f2[_0x266346(0x85f)]('hid='+_0x38618f[_0x266346(0x539)+'n']+(_0x266346(0x565)+'=')+_0x38618f['fake'],_0x38618f[_0x266346(0x725)]?_0x4436f2['yPbil']:''),'\x20k0='),_0x38618f[_0x266346(0x870)+_0x266346(0x847)+'t0'])+_0x4436f2[_0x266346(0xa96)]+_0x38618f['hex'];if(_0x4436f2[_0x266346(0x3cb)](_0x990e2a,null))_0x990e2a=_0x38618f['keyAt'+_0x266346(0x847)+'t0'];_0x12d40d++,_0x4436f2[_0x266346(0x4eb)](_0x25837d,_0x38618f)?(_0x1e1e79++,_0x38618f['sane']=!![]):_0x38618f[_0x266346(0xa8e)]=![],delete _0x38618f[_0x266346(0x6ba)];}}return{'rows':_0x44f088,'key':_0x990e2a,'sane':_0x1e1e79,'checked':_0x12d40d,'keyConsistent':_0x4436f2['yygkp'](_0x1ecb22,_0x44f088),'keySource':_0x4436f2[_0x266346(0x6b5)]};}function _0x1ecb22(_0x23d7a9){var _0x591c61=_0x105055,_0x5d7c9f={};for(var _0x47d613=0x2*0x7bd+0x407+-0x1381;_0x47d613<_0x23d7a9['lengt'+'h'];_0x47d613++){if(_0x4436f2[_0x591c61(0x595)]!==_0x591c61(0x7f9))try{var _0x34d166=_0x2b7814[_0x591c61(0xa98)](0x2*0x3cb+-0x239*-0xa+-0x1dcf*0x1,_0x4d57e5['inner'+_0x591c61(0x54f)]||_0x102bd1['docum'+'entEl'+_0x591c61(0x78c)][_0x591c61(0x37b)+_0x591c61(0x682)+'h']||-0x15dc+0x1*-0xb6a+-0x2146*-0x1),_0x488c0a=_0x400ce2['max'](-0x10*0x16+0x15a3*-0x1+0x1eb*0xc,_0x41f4df[_0x591c61(0x272)+'Heigh'+'t']||_0x5acbfe[_0x591c61(0x3d7)+_0x591c61(0x513)+_0x591c61(0x78c)][_0x591c61(0x37b)+_0x591c61(0x982)+'ht']||0x6*0xe1+0x3d*-0x1c+0x1*0x166);return(_0x217c5b['cv'][_0x591c61(0x972)]!==_0x34d166||_0x4436f2[_0x591c61(0x1e2)](_0x24179e['cv']['heigh'+'t'],_0x488c0a))&&(_0x3f596a['cv'][_0x591c61(0x972)]=_0x34d166,_0x17a8c8['cv']['heigh'+'t']=_0x488c0a),{'w':_0x34d166,'h':_0x488c0a};}catch(_0x37c2d5){return{'w':0x0,'h':0x0};}else{var _0x35d442=_0x23d7a9[_0x47d613];if(_0x4436f2[_0x591c61(0x422)](_0x35d442['k'][_0x591c61(0x20f)+'Of']('obf'),-0x8b7+0xb*0x1e7+-0xc36))continue;if(_0x5d7c9f[_0x35d442['k']]===undefined)_0x5d7c9f[_0x35d442['k']]=_0x35d442['keyUs'+'ed'];else{if(_0x4436f2[_0x591c61(0x360)](_0x5d7c9f[_0x35d442['k']],_0x35d442[_0x591c61(0xb4f)+'ed']))return![];}}}return!![];}function _0x25837d(_0x363a40){var _0x5117d7=_0x105055,_0x309334=_0x363a40['v'];if(typeof _0x309334!==_0x4436f2[_0x5117d7(0xa5d)]||!isFinite(_0x309334))return![];if(_0x363a40['k']==='obfB')return _0x309334===-0x14*0x13f+0x199a+-0xae||_0x309334===0xe00+-0x251e*-0x1+0x5*-0xa39;var _0x4a638b=_0x363a40[_0x5117d7(0x9dd)];if(typeof _0x4a638b!==_0x4436f2[_0x5117d7(0xa5d)]||!isFinite(_0x4a638b))return!![];if(_0x4436f2[_0x5117d7(0x137)](_0x363a40['act'],0x1c1f*0x1+-0x1d7*-0xe+-0x35e0)){if(_0x4436f2[_0x5117d7(0x5c0)]!=='gMGko')_0x597c87['span']=_0xe1ddaf;else return _0x4436f2['EpxOj'](Math[_0x5117d7(0x9e4)](_0x309334-_0x4a638b),Math[_0x5117d7(0xa98)](-0x931+0x15c7+-0xc95,Math['abs'](_0x4a638b)*(0x2*-0x361+0x1*0x23f4+-0x1d32+0.6)));}return Math[_0x5117d7(0x9e4)](_0x309334)<0x557984d4+0x1*-0x2bf7a86f+0x1218ed9b;}function _0x7827ff(){var _0x358a28=_0x105055,_0x2c2d17={};try{var _0x53f425=window['Unity'+_0x358a28(0x16d)+'dkit']&&window[_0x358a28(0x41e)+'WebMo'+'dkit']['Runti'+'me'];_0x2c2d17['tag']=_0x53f425&&_0x53f425['__sak'+'uraTa'+'g']||null,_0x2c2d17[_0x358a28(0x71e)+_0x358a28(0x890)]=!!(_0x4436f2['WqIPK'](_0x53f425,_0x1f15e8)&&_0x4436f2[_0x358a28(0x137)](_0x53f425[_0x358a28(0x73e)+_0x358a28(0x5cc)+'g'],_0x1f15e8)),_0x2c2d17['runti'+_0x358a28(0x648)+'e']=_0x53f425&&_0x53f425['_game']?typeof _0x53f425[_0x358a28(0xbd4)]:_0x358a28(0x576),_0x2c2d17[_0x358a28(0x956)+_0x358a28(0x9a4)+_0x358a28(0x95c)+_0x358a28(0xa72)+_0x358a28(0x532)]=!!(_0x28f88b&&_0x28f88b['_runt'+_0x358a28(0x75f)]&&_0x4436f2[_0x358a28(0x3cb)](_0x28f88b['_runt'+'ime'],_0x53f425)),_0x2c2d17['plugi'+_0x358a28(0x9a4)+'imeGa'+'me']=_0x28f88b&&_0x28f88b[_0x358a28(0x6f0)+_0x358a28(0x75f)]&&_0x28f88b['_runt'+_0x358a28(0x75f)][_0x358a28(0xbd4)]?typeof _0x28f88b[_0x358a28(0x6f0)+'ime'][_0x358a28(0xbd4)]:_0x4436f2[_0x358a28(0x8bb)];}catch(_0x5506e0){_0x2c2d17[_0x358a28(0xa60)]=String(_0x5506e0&&_0x5506e0[_0x358a28(0x80b)+'ge']||_0x5506e0);}return _0x2c2d17;}function _0x4b6eca(){var _0x447df4=_0x105055,_0xb8ebba=[_0x447df4(0x63c)+_0x447df4(0x7dc)+_0x447df4(0x455),_0x447df4(0x63c)+_0x447df4(0x478),_0x447df4(0xa8d),'unity'+_0x447df4(0x7dc)+'nceWr'+_0x447df4(0x50e)],_0x3a0a09={};for(var _0xba8dfc=0x53*0x76+0x1*-0x1669+-0xfd9;_0x4436f2['PKbUZ'](_0xba8dfc,_0xb8ebba[_0x447df4(0xb7c)+'h']);_0xba8dfc++){if('OeSpn'===_0x447df4(0x71f)){var _0xb339a5=_0xb8ebba[_0xba8dfc],_0xb0750a=typeof window[_0xb339a5];_0x3a0a09[_0xb339a5]=_0xb0750a===_0x447df4(0x149)+'ined'?_0x447df4(0x149)+'ined':_0xb0750a;}else return null;}var _0x1233ea=_0x4436f2[_0x447df4(0x254)](_0x152f0f);_0x3a0a09[_0x447df4(0xabd)+'ource']=_0x311dd0[_0x447df4(0x1a7)+'e'];try{_0x3a0a09[_0x447df4(0xbf9)+_0x447df4(0x1a9)]=!!(_0x1233ea&&_0x1233ea[_0x447df4(0x241)+'e']),_0x3a0a09[_0x447df4(0xab7)+'8']=!!(_0x1233ea&&_0x1233ea[_0x447df4(0x241)+'e']&&_0x1233ea[_0x447df4(0x241)+'e']['HEAPU'+'8']),_0x3a0a09[_0x447df4(0xbb7)+_0x447df4(0x3cd)]=_0x3a0a09[_0x447df4(0xab7)+'8']?_0x1233ea[_0x447df4(0x241)+'e'][_0x447df4(0x2c3)+'8'][_0x447df4(0xb7c)+'h']:0x1126+0xaf0+-0x2cf*0xa;}catch(_0x10506a){_0x3a0a09['hasMo'+_0x447df4(0x1a9)]=![],_0x3a0a09[_0x447df4(0xab7)+'8']=![],_0x3a0a09['heapB'+'ytes']=-0x14b8+-0x921+0x1dd9;}return _0x3a0a09['value'+_0x447df4(0x8d6)+'er']=typeof _0x183396,_0x3a0a09;}function _0x41716d(){var _0x155180=_0x105055,_0x1bd66c={},_0xdffb3c=_0x4436f2['JtTHS'](_0x519a61);if(!_0xdffb3c)return _0x1bd66c;_0x1bd66c['Mouse'+'Look@'+'ptr']=_0xdffb3c[_0x155180(0x6c0)+'Look'];for(var _0x37b7c4 in _0xdffb3c[_0x155180(0xbf5)+'s'])_0x1bd66c[_0x4436f2['RhhOB']+_0x37b7c4]=_0xdffb3c['float'+'s'][_0x37b7c4];if(_0xdffb3c['camer'+'a'])_0x1bd66c[_0x4436f2[_0x155180(0xb81)]]=_0xdffb3c['camer'+'a'];return _0x1bd66c;}function _0x4affab(_0x3155cf){var _0x2d7259=_0x105055,_0x2ffd6b={};for(var _0x46affc in _0x3155cf){if('uWaFb'===_0x2d7259(0x130)){var _0x4007da=_0x3155cf[_0x46affc];for(var _0x261d40=-0x1*-0x81a+-0x39*0x61+0xd7f;_0x261d40<_0x4007da[_0x2d7259(0xb7c)+'h'];_0x261d40++){if(_0x4436f2['PEQnT'](_0x4436f2[_0x2d7259(0xb90)],'ymmEO'))_0x2ffd6b[_0x4436f2[_0x2d7259(0x77c)](_0x46affc+_0x4436f2['pfbSf'],_0x4007da[_0x261d40]['o'][_0x2d7259(0x322)+_0x2d7259(0x1c0)](-0x281*-0xf+0x65*0x5+0x4ef*-0x8))]=_0x4007da[_0x261d40]['v'];else return _0x49cc56['warn']('%c[sa'+_0x2d7259(0x8cc)+'\x20in-f'+'rame\x20'+_0x2d7259(0x5d7)+'isabl'+'ed',_0x2d7259(0x4b3)+':'+_0x46732e,_0x350778),null;}}else return _0x46a6d2['ident'+'ified']=![],_0x741415['why']=_0x2d7259(0x27d)+_0x2d7259(0x1bf)+_0x2d7259(0xbf5)+_0x2d7259(0x766)+'eadab'+'le',null;}return _0x2ffd6b;}function _0x302e6f(_0x5725d7,_0x204fb6){var _0x452051=_0x105055,_0x3d33aa=(_0x452051(0x4aa)+_0x452051(0x846)+_0x452051(0x655)+'|10|9'+'|5')[_0x452051(0xb19)]('|'),_0x3bdc47=0x4f*0x3b+-0x452+0x2d*-0x4f;while(!![]){switch(_0x3d33aa[_0x3bdc47++]){case'0':_0x4073b9=[];continue;case'1':var _0x3f3b99=_0x4affab(_0x420c53);continue;case'2':for(var _0x2a0ad2 in _0x38a6ce)_0x3f3b99[_0x2a0ad2]=_0x38a6ce[_0x2a0ad2];continue;case'3':if(_0x5725d7!==_0x4436f2[_0x452051(0xa75)])return;continue;case'4':if(_0x5725d7===_0x452051(0x838)){_0x4e7338(_0x204fb6&&typeof _0x204fb6['on']===_0x4436f2[_0x452051(0x2d9)]?_0x204fb6['on']:_0x69e834['on'],_0x204fb6&&typeof _0x204fb6['facto'+'r']==='numbe'+'r'?_0x204fb6['facto'+'r']:_0x69e834['facto'+'r']);return;}continue;case'5':_0x4aeed2(_0x4436f2[_0x452051(0x7d2)],{'report':_0x4436f2[_0x452051(0xb2f)](_0x489b3b)});continue;case'6':if(!_0x32307e){_0x32307e=_0x3f3b99,_0x4073b9=[],_0x4436f2['DLuXh'](_0x4aeed2,_0x452051(0x365)+'t',{'report':_0x4436f2[_0x452051(0x64f)](_0x489b3b)});return;}continue;case'7':var _0x420c53=_0x4436f2[_0x452051(0x6fb)](_0xa6bb05);continue;case'8':var _0x38a6ce=_0x41716d();continue;case'9':_0x32307e=_0x3f3b99;continue;case'10':for(var _0x1341fb in _0x3f3b99){var _0x1d62f8=_0x32307e[_0x1341fb],_0x346ca7=_0x3f3b99[_0x1341fb];if(_0x1d62f8!==_0x346ca7)_0x4073b9[_0x452051(0x24d)](_0x4436f2[_0x452051(0x5c6)](_0x1341fb,':\x20')+_0x1d62f8+'\x20->\x20'+_0x346ca7);}continue;}break;}}var _0x2d9e07=null;function _0xc98265(){var _0x1baec0=_0x105055,_0x34c90b={'UCTOu':function(_0x15f641,_0x19e214){return _0x15f641+_0x19e214;},'LEbWr':_0x4436f2['KMIXw'],'UEJAX':_0x1baec0(0x4f0)+_0x1baec0(0x5f6),'Nirtj':function(_0x73c762,_0xb80c3c,_0x57cbae){return _0x4436f2['bNUZP'](_0x73c762,_0xb80c3c,_0x57cbae);},'ocUiX':function(_0x11a265,_0x5e9c99,_0x386fb9){return _0x11a265(_0x5e9c99,_0x386fb9);},'qzfPa':function(_0x5ac8b2,_0x537468,_0x10a51d,_0x54b715){var _0x2961b8=_0x1baec0;return _0x4436f2[_0x2961b8(0x18c)](_0x5ac8b2,_0x537468,_0x10a51d,_0x54b715);},'hxCYg':_0x4436f2['XUYHV'],'qtquQ':'none'};if(_0x2d9e07)return _0x2d9e07;try{if(!document['body']||!document[_0x1baec0(0xbdf)][_0x1baec0(0x48e)+'dChil'+'d'])return null;if(!document[_0x1baec0(0xa7d)+'ement'+'ById'](_0x4436f2['vrCpv'])){var _0x27a687=document[_0x1baec0(0x4c9)+_0x1baec0(0x64c)+_0x1baec0(0x803)](_0x4436f2['dcpqH']);_0x27a687['id']='sakur'+'a-sw-'+_0x1baec0(0xa48)+'ss',_0x27a687['textC'+_0x1baec0(0x14e)+'t']='#saku'+_0x1baec0(0xad6)+_0x1baec0(0x6aa)+_0x1baec0(0x227)+_0x1baec0(0x56a)+'l}',(document[_0x1baec0(0x83f)]||document[_0x1baec0(0x3d7)+_0x1baec0(0x513)+'ement'])['appen'+_0x1baec0(0x635)+'d'](_0x27a687);}var _0x39c71c=document[_0x1baec0(0x4c9)+_0x1baec0(0x64c)+_0x1baec0(0x803)](_0x1baec0(0x41f));_0x39c71c['id']=_0x4436f2[_0x1baec0(0x390)],_0x39c71c['style'][_0x1baec0(0x3be)+'xt']=_0x4436f2['xjvYQ']('posit'+_0x1baec0(0x6cf)+_0x1baec0(0x746)+'left:'+'8px;b'+_0x1baec0(0x7e1)+':8px;'+_0x1baec0(0x1cb)+'ex:21'+'47483'+'647;d'+'ispla'+_0x1baec0(0xa40)+'x;fle'+_0x1baec0(0xab4)+_0x1baec0(0x164)+_0x1baec0(0x7c0)+_0x1baec0(0x7fd)+'ap:4p'+'x;'+('backg'+_0x1baec0(0x679)+':rgba'+'(21,1'+_0x1baec0(0x878)+'.92);'+'borde'+_0x1baec0(0x5df)+_0x1baec0(0x4c2)+'d\x20rgb'+_0x1baec0(0x63f)+_0x1baec0(0x5db)+_0x1baec0(0x8b9)+'45);b'+_0x1baec0(0x9c3)+_0x1baec0(0x169)+_0x1baec0(0xbae)+_0x1baec0(0x888))+_0x4436f2['rwJov'],_0x4436f2['EXwYx']);var _0x4ae8cb=_0x1baec0(0x62d)+_0x1baec0(0x239)+_0x1baec0(0x261)+_0x1baec0(0x27b)+'yle=\x22'+'color'+_0x1baec0(0x680)+_0x1baec0(0x58c)+'ax-wi'+_0x1baec0(0x1d4)+'90px;'+_0x1baec0(0x961)+'iv>';_0x39c71c[_0x1baec0(0x272)+_0x1baec0(0x608)]=_0x4436f2['EkKCm'](_0x4436f2[_0x1baec0(0x7e6)](_0x4436f2[_0x1baec0(0x7d1)](_0x4436f2[_0x1baec0(0x660)](_0x4436f2[_0x1baec0(0xb50)](_0x4436f2[_0x1baec0(0xbdb)](_0x4436f2['XbgCE'](_0x4436f2[_0x1baec0(0x757)](_0x4436f2['NYfoa'](_0x4436f2[_0x1baec0(0x1db)]+('<b\x20st'+_0x1baec0(0xbb3)+_0x1baec0(0x4b3)+':'),_0x237331),_0x4436f2['lmhDB']),_0x1baec0(0x2d2)+'on\x20da'+_0x1baec0(0x303)+_0x1baec0(0x538)+_0x1baec0(0x4d9)+_0x1baec0(0x593)+'kgrou'+'nd:tr'+'anspa'+_0x1baec0(0x889)+'borde'+_0x1baec0(0x5df)+_0x1baec0(0x4c2)+_0x1baec0(0x55b)+_0x1baec0(0x63f)+',143,'+'177,.'+_0x1baec0(0x253))+_0x4436f2['oKmip'],_0x1baec0(0xbe0)+'t\x20dat'+'a-a=\x22'+_0x1baec0(0x93f)+'ype=\x22'+_0x1baec0(0x9ff)+_0x1baec0(0xbb1)+_0x1baec0(0x38d)+_0x1baec0(0x3b7)+_0x1baec0(0xbee)+'ep=\x220'+_0x1baec0(0x49c)+'alue='+_0x1baec0(0x26f)+'tyle='+'\x22widt'+_0x1baec0(0x868)+'x;acc'+_0x1baec0(0xae1)+_0x1baec0(0xb62))+_0x237331,_0x4436f2[_0x1baec0(0x136)]),'<span'+_0x1baec0(0x68a)+'-a=\x22f'+_0x1baec0(0x448)+'yle=\x22'+_0x1baec0(0x4b3)+':#bda'+'9c9;m'+'in-wi'+_0x1baec0(0x98e)+'0px;\x22'+'>2.0x'+_0x1baec0(0x179)+'n>')+('<butt'+_0x1baec0(0x317)+_0x1baec0(0x303)+'\x22esp\x22'+'\x20styl'+_0x1baec0(0x3e4)+_0x1baec0(0x8e3)+'und:t'+'ransp'+_0x1baec0(0x21f)+_0x1baec0(0x960)+_0x1baec0(0x21b)+_0x1baec0(0x5ad)+_0x1baec0(0xae8)+'ba(25'+'5,143'+',177,'+_0x1baec0(0x4bf)),_0x1baec0(0x4b3)+':#f7e'+_0x1baec0(0x997)+'order'+'-radi'+'us:6p'+'x;pad'+'ding:'+_0x1baec0(0x767)+'px;cu'+'rsor:'+'point'+_0x1baec0(0x983)+_0x1baec0(0x699)+_0x1baec0(0x259)+_0x1baec0(0x301)+_0x1baec0(0xb52)+_0x1baec0(0x7a5)+'on>'),'<butt'+'on\x20da'+_0x1baec0(0x303)+_0x1baec0(0x5e5)+_0x1baec0(0x7b8)+_0x1baec0(0xa2e)+_0x1baec0(0x729)+'ound:'+_0x1baec0(0x670)+'paren'+_0x1baec0(0xa0a)+_0x1baec0(0x6fa)+'px\x20so'+'lid\x20r'+'gba(2'+_0x1baec0(0x1af)+'3,177'+',.45)'+';')+_0x4436f2[_0x1baec0(0x7c3)]+(_0x1baec0(0x2d2)+'on\x20da'+_0x1baec0(0x303)+_0x1baec0(0x89c)+'\x22\x20sty'+'le=\x22m'+'argin'+'-left'+_0x1baec0(0x4df)+_0x1baec0(0x5e9)+_0x1baec0(0x985)+'d:tra'+'nspar'+_0x1baec0(0x29c)+'order'+_0x1baec0(0xc00)+'solid'+_0x1baec0(0x4b8)+'(255,'+_0x1baec0(0x493)+_0x1baec0(0xc04)+_0x1baec0(0x192)),_0x1baec0(0x4b3)+_0x1baec0(0xad2)+'ef5;b'+_0x1baec0(0x9c3)+_0x1baec0(0x169)+'us:6p'+'x;pad'+_0x1baec0(0x3f2)+'1px\x206'+_0x1baec0(0x1e1)+'rsor:'+_0x1baec0(0x9c1)+'er;fo'+'nt:in'+_0x1baec0(0x259)+_0x1baec0(0xa1d)+'/butt'+_0x1baec0(0x520))+(_0x1baec0(0x841)+'>')+(_0x1baec0(0x62d)+'data-'+_0x1baec0(0x261)+_0x1baec0(0x7b8)+_0x1baec0(0x341)+'olor:'+_0x1baec0(0x36d)+_0x1baec0(0x2eb)+'x-wid'+_0x1baec0(0x1f2)+'0px;\x22'+'></di'+'v>')+_0x4436f2['SULLQ'],_0x39c71c[_0x1baec0(0x272)+_0x1baec0(0x608)]=_0x4ae8cb;var _0x16edaf=function(_0x24d484){var _0x2832b9=_0x1baec0;return _0x39c71c['query'+'Selec'+_0x2832b9(0xbb9)](_0x34c90b[_0x2832b9(0x9b6)](_0x34c90b[_0x2832b9(0x48a)],_0x24d484)+'\x22]');},_0x143cc0=_0x4436f2[_0x1baec0(0xb15)](_0x16edaf,'st'),_0x54b2fe=_0x16edaf(_0x4436f2['DSHwf']),_0x5c1b25=_0x4436f2[_0x1baec0(0x4eb)](_0x16edaf,'sp'),_0x3aa9bc=_0x16edaf('fx'),_0x28d1e4=_0x16edaf('fv'),_0x56359c=_0x16edaf(_0x4436f2['pmWYT']);if(_0x5c1b25)_0x5c1b25['oncli'+'ck']=function(){var _0x48f5dc=_0x1baec0;_0x4e7338(!_0x69e834['on'],_0x69e834[_0x48f5dc(0xa81)+'r']);};if(_0x3aa9bc)_0x3aa9bc['oninp'+'ut']=function(){_0x4e7338(_0x69e834['on'],parseFloat(_0x3aa9bc['value'])||-0x120f+-0x431*0x7+0x2f67);};if(_0x16edaf(_0x1baec0(0x1c2)))_0x4436f2[_0x1baec0(0x4eb)](_0x16edaf,'snap')['oncli'+'ck']=function(){var _0xe4ea11=_0x1baec0;_0x302e6f(_0x34c90b[_0xe4ea11(0x84a)]);};var _0x33b358=_0x16edaf(_0x4436f2[_0x1baec0(0x825)]);if(_0x33b358)_0x33b358[_0x1baec0(0x912)+'ck']=function(){var _0x8efc04=_0x1baec0;if(!_0x3fc79c['on'])_0x31482e(!![],![]);else{if(_0x3fc79c['boxes'])_0x34c90b[_0x8efc04(0x4ce)](_0x31482e,![],![]);else{if(_0x3933af())_0x31482e(!![],!![]);else _0x31482e(![],![]);}}};if(_0x16edaf(_0x4436f2[_0x1baec0(0xb89)]))_0x4436f2[_0x1baec0(0x51f)](_0x16edaf,_0x1baec0(0x86b))[_0x1baec0(0x912)+'ck']=function(){var _0x3d723e=_0x1baec0;if(_0x34c90b['hxCYg']!==_0x34c90b['hxCYg']){var _0x3fce07=_0x34c90b[_0x3d723e(0xada)](_0x2898c2,_0x29e4dd[_0x3d723e(0x8d2)][_0x3d723e(0x826)+'h'],-0x83*-0x45+-0x207c+-0x2c3);_0x133468[_0x3d723e(0x826)+'h']=_0x34c90b['qzfPa'](_0x33deb3,_0x3fce07,_0x3d723e(0x53d)+_0x3d723e(0x18d)+'pt',_0x3d723e(0x2a7));}else{if(!_0x56359c)return;var _0x97cc1b=_0x56359c['style']['displ'+'ay']===_0x34c90b[_0x3d723e(0xadb)];_0x56359c['style'][_0x3d723e(0x4fa)+'ay']=_0x97cc1b?'':_0x3d723e(0x576),_0x16edaf(_0x3d723e(0x86b))[_0x3d723e(0x17e)+_0x3d723e(0x14e)+'t']=_0x97cc1b?'-':'+';}};return document['body'][_0x1baec0(0x48e)+'dChil'+'d'](_0x39c71c),_0x2d9e07={'el':_0x39c71c,'st':_0x143cc0,'st2':_0x54b2fe,'sp':_0x5c1b25,'fx':_0x3aa9bc,'fv':_0x28d1e4,'esp':_0x33b358},_0x2d9e07;}catch(_0x1693d5){return'wzQxu'!==_0x4436f2[_0x1baec0(0x64d)]?null:(console[_0x1baec0(0x215)](_0x4436f2[_0x1baec0(0x4c6)],_0x4436f2[_0x1baec0(0xb43)](_0x4436f2[_0x1baec0(0x1aa)],_0x237331),_0x1693d5),null);}}function _0x3933af(){var _0x3b6c86=_0x105055;try{var _0x48103f=_0x5a592f();return!!(_0x48103f&&_0x1cfe95[_0x3b6c86(0x46f)+_0x3b6c86(0x73d)]);}catch(_0x2579c2){if(_0x3b6c86(0x283)==='iFYZV')return![];else _0x38942e=_0x1dddec(_0x1dfa03&&_0x338951[_0x3b6c86(0x80b)+'ge']||_0x2e49cb);}}function _0x419332(){var _0x4739a8=_0x105055;if(_0x4436f2[_0x4739a8(0x387)]('bjbbV','bjbbV')){var _0xf6ca2a=_0x4436f2['uxQzY'](_0x1637ce,_0x1c96d9[_0x123b16][0x1*0x15a5+-0x1590+-0x15]),_0x14d7d8=_0x4436f2[_0x4739a8(0x730)](_0x1b769f,_0x4739a8(0xa31),_0x4436f2['FMmGM']);_0x14d7d8[_0x4739a8(0x4d9)][_0x4739a8(0x43a)+'dth']='0',_0x14d7d8[_0x4739a8(0x4d9)][_0x4739a8(0x5fb)]='1',_0x14d7d8['style'][_0x4739a8(0x14c)+_0x4739a8(0x6da)]=_0x4739a8(0xa10),_0x14d7d8[_0x4739a8(0x17e)+'onten'+'t']=_0x4fbc19(_0x18a4ec[_0x590df0][0x1124+-0x1870+0x74e]),_0x14d7d8['datas'+'et']['k']=_0x5e54e9[_0x27c8b5][0x1*0x216+0x67*0x1f+-0x4da*0x3],_0xf6ca2a['appen'+_0x4739a8(0x635)+'d'](_0x14d7d8),_0x23ba89[_0x4739a8(0xbdf)][_0x4739a8(0x48e)+_0x4739a8(0x635)+'d'](_0xf6ca2a),_0x5e4b31[_0x4739a8(0xbdf)][_0x4739a8(0x7b2)+_0x4739a8(0x755)]['sp']=_0x14d7d8;}else try{var _0x1f3ab7=_0x2d9e07&&_0x2d9e07[_0x4739a8(0x5b4)];if(!_0x1f3ab7)return;if(_0x3fc79c['boxes']&&!_0x4436f2[_0x4739a8(0x249)](_0x3933af))_0x3fc79c['boxes']=![];var _0x14992b=!_0x3fc79c['on']?_0x4739a8(0x708)+'ff':_0x3fc79c[_0x4739a8(0x8be)]?'ESP\x20b'+_0x4739a8(0x9e7):'ESP\x20m'+'ap';if(_0x4436f2['AFTBO'](_0x14992b,_0x1f3ab7[_0x4739a8(0x17e)+_0x4739a8(0x14e)+'t']))_0x1f3ab7['textC'+'onten'+'t']=_0x14992b;_0x1f3ab7['style']['backg'+_0x4739a8(0x679)]=_0x3fc79c['on']?_0x237331:_0x4739a8(0x670)+_0x4739a8(0x765)+'t',_0x1f3ab7['style'][_0x4739a8(0x4b3)]=_0x3fc79c['on']?_0x4436f2[_0x4739a8(0xa87)]:_0x4739a8(0x6be)+'f5';}catch(_0x4d8882){}}function _0x31482e(_0x47c34e,_0x23d59c){var _0x255f9d=_0x105055;_0x3fc79c['on']=!!_0x47c34e,_0x3fc79c[_0x255f9d(0x8be)]=!!_0x23d59c,_0x4436f2[_0x255f9d(0x47e)](_0x419332);try{var _0xb55db7=_0x555ef5();if(_0xb55db7&&_0xb55db7['el'])_0xb55db7['el'][_0x255f9d(0x4d9)][_0x255f9d(0x4fa)+'ay']=_0x3fc79c['on']?'':'none';var _0xccd269=_0x4f7d0c;if(_0xccd269&&_0xccd269['cv'])_0xccd269['cv'][_0x255f9d(0x4d9)][_0x255f9d(0x4fa)+'ay']=_0x3fc79c['on']&&_0x3fc79c['boxes']?'':_0x255f9d(0x576);}catch(_0x230e89){}}var _0x4083da=-0x1eeb+-0x9c*-0x2d+0xd*0x45;function _0x4e7338(_0x17b9c8,_0x4e3e17){var _0x2efad5=_0x105055;if(_0x4436f2[_0x2efad5(0x1e2)](_0x4436f2[_0x2efad5(0x421)],_0x4436f2['oXpeZ'])){var _0x17055f=_0x69e834['on'];_0x69e834['on']=!!_0x17b9c8;_0x69e834['on']&&!_0x17055f&&(_0x4e3e17===undefined||_0x4436f2['hIfiE'](_0x4e3e17,null)||_0x4436f2[_0x2efad5(0x144)](Number(_0x4e3e17),-0x277*-0x7+0x15fd+-0x273d))&&(_0x4e3e17=_0x4083da);_0x69e834['facto'+'r']=Math[_0x2efad5(0x950)](_0x69e834[_0x2efad5(0xa98)],Math[_0x2efad5(0xa98)](_0x69e834['min'],Number(_0x4e3e17)||-0x18*-0x137+-0x1535+-0x7f2));if(!_0x69e834['on'])_0x412293={};var _0x20da8d=_0xc98265();if(_0x20da8d){_0x20da8d['sp']&&(_0x4436f2['sScOt'](_0x2efad5(0x74e),_0x4436f2[_0x2efad5(0x4a0)])?_0xc5bfc4[_0x2efad5(0xbc5)+'em'](_0x1c42d4,_0x7ab7ab[_0x2efad5(0x17d)+_0x2efad5(0x67a)](_0xbb4881['pos'])):(_0x20da8d['sp'][_0x2efad5(0x17e)+'onten'+'t']=_0x69e834['on']?_0x2efad5(0x474)+'\x20ON':_0x4436f2[_0x2efad5(0x5e6)],_0x20da8d['sp']['style'][_0x2efad5(0x323)+'round']=_0x69e834['on']?_0x237331:_0x2efad5(0x670)+_0x2efad5(0x765)+'t',_0x20da8d['sp'][_0x2efad5(0x4d9)][_0x2efad5(0x4b3)]=_0x69e834['on']?_0x4436f2[_0x2efad5(0xa87)]:'#f7ee'+'f5'));if(_0x20da8d['fx'])_0x20da8d['fx']['value']=String(_0x69e834[_0x2efad5(0xa81)+'r']);if(_0x20da8d['fv'])_0x20da8d['fv']['textC'+'onten'+'t']=_0x69e834[_0x2efad5(0xa81)+'r'][_0x2efad5(0x5ee)+'ed'](0x11e4+-0x1722+0x53f)+'x';}}else{var _0x2d718a=_0x60eefa[_0x2efad5(0x6ef)+_0x2efad5(0xa30)+'orkSy'+'nc']||{};if(!_0x2c7874['keys'](_0x2d718a)[_0x2efad5(0xb7c)+'h'])return![];return!!_0x4436f2['MFTyn'](_0x22c430);}}function _0x3aa4da(_0x3c112f){var _0x521cc7=_0x105055,_0x3ec651={'UDOFk':function(_0x12711b,_0x490ee4){return _0x12711b(_0x490ee4);}};if(_0x4436f2[_0x521cc7(0xb1d)]===_0x4436f2[_0x521cc7(0xb1d)]){var _0x505901=_0xc98265();if(!_0x505901||!_0x505901['st'])return;try{if(!_0x5ed117()&&!_0x4239ee){if(_0x4436f2['FGHet'](_0x4436f2[_0x521cc7(0x667)],_0x4436f2['Bjrbd']))return{'w':0x0,'h':0x0};else{if(_0x505901['el'])_0x505901['el'][_0x521cc7(0x4d9)][_0x521cc7(0x4fa)+'ay']='none';return;}}if(_0x505901['el'])_0x505901['el']['style'][_0x521cc7(0x4fa)+'ay']='';var _0x428518=Object[_0x521cc7(0x5ec)](_0x3c112f&&_0x3c112f[_0x521cc7(0x903)+_0x521cc7(0x4dd)]||{})[_0x521cc7(0xb7c)+'h'],_0x443e91=_0x3c112f&&_0x3c112f[_0x521cc7(0x5b4)]||null,_0x2f7c81=_0x443e91?_0x443e91['enemy'+_0x521cc7(0x434)]||-0x1*0xe20+-0x1976+0x2796:-0xa*-0x22d+-0x84d+-0xd75,_0x509fa5=_0x443e91?_0x443e91['botCo'+'unt']||0x14bd+-0x229*0xb+0x306:0xde8+-0x1268+0x8*0x90,_0x212619=_0x52e821?_0x4436f2[_0x521cc7(0x22e)](_0x52e821[_0x521cc7(0xaec)+'r'][_0x521cc7(0x401)+'ength'],0x362*0x6aa+0x2e82*-0x1+0x65c92*-0x1)[_0x521cc7(0x5ee)+'ed'](0x126d+-0x222c+-0xfbf*-0x1)+'MB':'no-me'+'m',_0x14701f=_0x4436f2[_0x521cc7(0x7e2)](_0x4436f2[_0x521cc7(0x84e)](_0x4436f2[_0x521cc7(0xb8f)]('v'+(_0x3c112f&&_0x3c112f[_0x521cc7(0x8cf)+'on']||_0x3838a0)+('\x20\x20hoo'+_0x521cc7(0xa3c))+(_0x3c112f&&_0x3c112f[_0x521cc7(0x2db)+_0x521cc7(0x1f8)+'ed']||-0x20ea*0x1+0x2150+-0x66)+'/',_0x3c112f&&_0x3c112f[_0x521cc7(0x2db)+_0x521cc7(0x88d)]||-0x191*0x10+0x1*-0x2597+0x3ea7)+(_0x521cc7(0x293)+'s\x20')+_0x428518+('\x20\x20mem'+'\x20'),_0x212619)+('\x20\x20wri'+_0x521cc7(0x79f)),_0x21560f);_0x505901['st']['textC'+'onten'+'t']=_0x14701f;var _0x327fb5=_0x505901['st2'];_0x327fb5&&(_0x327fb5['textC'+'onten'+'t']=_0x4436f2[_0x521cc7(0x460)](_0x2f7c81,0x42*-0xc+-0xc5c*-0x2+-0x15a0)?_0x4436f2[_0x521cc7(0x348)]+_0x2f7c81+(_0x509fa5?_0x4436f2[_0x521cc7(0xa18)]('\x20+\x20',_0x509fa5)+_0x4436f2[_0x521cc7(0x505)]:'')+(_0x443e91&&_0x443e91[_0x521cc7(0x95f)+'a']?_0x4436f2[_0x521cc7(0x37e)]+_0x443e91['camer'+_0x521cc7(0x712)]:_0x521cc7(0x840)+'\x20-'):_0x4436f2['nQJnc'](_0x521cc7(0x21e)+_0x521cc7(0xaad)+_0x521cc7(0x48b)+_0x521cc7(0x631)+'y?)\x20\x20'+_0x521cc7(0xb57),_0x443e91&&_0x443e91[_0x521cc7(0x95f)+'a']?_0x443e91[_0x521cc7(0x95f)+_0x521cc7(0x712)]:'-'),_0x327fb5[_0x521cc7(0x4d9)]['color']=_0x4436f2['wVyUV'](_0x2f7c81,0x2628+-0x6b2+-0x1f76)?'#7ee0'+'a8':_0x4436f2['cnaFk']);}catch(_0x4b37e0){}}else{var _0x4ac18c=_0x564f2d[_0x521cc7(0x272)+_0x521cc7(0xbe5)+'t']||-0xc17+-0x10b*-0xd+0x1a8*0x1;if(_0x4ac18c<0x6dd*0x2+0x1*-0x3df+-0x76f)_0x3ec651[_0x521cc7(0x590)](_0x2cec78,![]);}}window['addEv'+'entLi'+'stene'+'r'](_0x4436f2['gnzCI'],function(_0x523382){var _0x50a7d6=_0x105055,_0xee5b6e={'BsLnG':function(_0x13c32c,_0x3d6208){return _0x4436f2['aPztg'](_0x13c32c,_0x3d6208);},'YFkPm':function(_0x4150ec,_0x2dcc62){return _0x4150ec-_0x2dcc62;},'XlwoY':function(_0x23f3af,_0x247ae5){return _0x4436f2['eZlqw'](_0x23f3af,_0x247ae5);},'MAXcI':function(_0x17d759,_0x382548){return _0x17d759<=_0x382548;},'fKWrb':function(_0x5ead93,_0x1be26c){return _0x5ead93+_0x1be26c;},'UzIRO':function(_0x222dba,_0x2bc495){var _0x33dba0=_0x5dd8;return _0x4436f2[_0x33dba0(0x853)](_0x222dba,_0x2bc495);},'scEpI':function(_0x1fb75f,_0x1efe0c){return _0x1fb75f*_0x1efe0c;},'MungZ':function(_0x183f78,_0x5bfc45){return _0x183f78*_0x5bfc45;},'JuJvc':function(_0x49abd6,_0x12b3d6){return _0x49abd6/_0x12b3d6;},'DtIYg':function(_0xeb5e84,_0x5a79b6){return _0xeb5e84/_0x5a79b6;},'iKjNL':function(_0x304815,_0x23f078){return _0x304815>_0x23f078;},'OwnKk':function(_0x26d974,_0xcda01f){return _0x26d974+_0xcda01f;},'fFCsQ':_0x4436f2[_0x50a7d6(0x22b)],'BWCMN':function(_0x566a9c,_0x4e86d7){var _0x31cb1d=_0x50a7d6;return _0x4436f2[_0x31cb1d(0x1a2)](_0x566a9c,_0x4e86d7);},'xKbEE':'sakur'+_0x50a7d6(0x2cd)+_0x50a7d6(0xa48)+'ss'};if(!_0x523382)return;try{if(_0x4436f2['wAQJa'](_0x50a7d6(0x747),_0x4436f2[_0x50a7d6(0xbc3)])){var _0x15c39a=_0x3b4474();if(!_0x15c39a)return null;var _0x5c6e5f=_0xee5b6e[_0x50a7d6(0x25d)](_0x15c39a[_0x50a7d6(0x8f4)],_0x2cb561['PI'])/(0x1cd0+-0xfc6*0x1+-0x62b*0x2),_0x3811a1=_0xee5b6e[_0x50a7d6(0x25d)](_0x15c39a['yaw'],_0x392f82['PI'])/(-0x2*-0xb5d+0x13c9*-0x1+-0x1*0x23d),_0x2dd66a=_0x13fa69[_0x50a7d6(0x440)](_0x5c6e5f),_0x5c3202=_0x6e7d08[_0x50a7d6(0x18b)](_0x3811a1)*_0x2dd66a,_0x27bc4a=-_0x3b84ca[_0x50a7d6(0x18b)](_0x5c6e5f),_0x23abe8=_0x3ec686[_0x50a7d6(0x440)](_0x3811a1)*_0x2dd66a,_0x32669c=_0x23abe8,_0x58240c=0x225*0x7+-0x930+0x47*-0x15,_0x22abbb=-_0x5c3202,_0x637e9f=_0x33004b[0x14*0x137+0x146c+-0x2*0x165c]-_0x28b22d[-0x91b*0x1+-0x9af*0x2+0x1c79],_0x3bba8c=_0x21665a[0x2dd+-0x1e37+0x1b5b]-_0x4769fd[-0x156d*0x1+-0x9eb+0x1f59],_0x1f7888=_0xee5b6e['YFkPm'](_0x375806[0x23ed+-0x2*-0x593+0x2f11*-0x1],_0x4ce359[-0x12cf+-0xe98+0x2169]),_0x5c8f2c=_0x637e9f*_0x5c3202+_0xee5b6e[_0x50a7d6(0x76d)](_0x3bba8c,_0x27bc4a)+_0x1f7888*_0x23abe8;if(_0xee5b6e['MAXcI'](_0x5c8f2c,-0x7b5+-0x207a+-0x1*-0x282f+0.05))return null;var _0x2d707f=_0xee5b6e['BsLnG'](_0x637e9f,_0x32669c)+_0x3bba8c*_0x58240c+_0x1f7888*_0x22abbb,_0x2e8312=_0xee5b6e[_0x50a7d6(0x2bd)](_0x637e9f*(_0x58240c*_0x23abe8-_0x22abbb*_0x27bc4a),_0x3bba8c*(_0xee5b6e[_0x50a7d6(0x6cc)](_0x22abbb,_0x5c3202)-_0x32669c*_0x23abe8))+_0xee5b6e[_0x50a7d6(0x994)](_0x1f7888,_0xee5b6e['MungZ'](_0x32669c,_0x27bc4a)-_0x58240c*_0x5c3202),_0x353874=_0xee5b6e[_0x50a7d6(0x311)](_0x219e31,_0x3c5ce4),_0x44b826=_0x5d9cdb[_0x50a7d6(0x2e9)]*_0x4a00d4['PI']/(-0x1c00+-0x1*-0x10ed+0xbc7),_0x29302a=_0x34f17a['tan'](_0x44b826/(0x44+0xbbf+-0x1b7*0x7)),_0x474a47=_0xee5b6e['DtIYg'](_0x2d707f,_0x5c8f2c)/_0xee5b6e[_0x50a7d6(0x42f)](_0x29302a,_0x353874),_0x2444dd=_0x2e8312/_0x5c8f2c/_0x29302a;if(_0x474a47<-(0xb2*-0x2c+-0x8f1*0x4+0x15*0x329+0.6000000000000001)||_0xee5b6e[_0x50a7d6(0x9f9)](_0x474a47,-0x1f6f+0xf*0x28f+-0x6f1+0.6000000000000001)||_0x2444dd<-(0xe4c+-0x15b3+-0x3*-0x278+0.6000000000000001)||_0xee5b6e[_0x50a7d6(0x9f9)](_0x2444dd,0x1*0x14e3+0xa74+-0x1f56+0.6000000000000001))return null;return{'x':_0xee5b6e['OwnKk'](_0x474a47*(0xb1*0x28+-0x1a04+0x3c*-0x7+0.5),0x13fc+-0x1bef+-0x37*-0x25+0.5)*_0x32103c,'y':(0x8b6+0x8*0x3db+-0x278e+0.5-_0x2444dd*(0x1b8+0x470+-0x628+0.5))*_0x1165a1,'z':_0x5c8f2c};}else{if(_0x523382['code']==='F9'){_0x523382[_0x50a7d6(0x975)+'ntDef'+_0x50a7d6(0xa58)](),_0x302e6f(_0x50a7d6(0x4f0)+'hot');return;}if(_0x4436f2[_0x50a7d6(0xb82)](_0x523382[_0x50a7d6(0x6a3)],'F7')){_0x523382[_0x50a7d6(0x975)+_0x50a7d6(0x336)+_0x50a7d6(0xa58)](),_0x4436f2[_0x50a7d6(0x943)](_0x4e7338,!_0x69e834['on'],_0x69e834[_0x50a7d6(0xa81)+'r']);return;}if(_0x523382[_0x50a7d6(0x6a3)]==='F8'){if(_0x50a7d6(0x788)===_0x4436f2[_0x50a7d6(0xbba)]){_0x523382[_0x50a7d6(0x975)+_0x50a7d6(0x336)+_0x50a7d6(0xa58)](),_0x4e7338(_0x69e834['on'],_0x69e834[_0x50a7d6(0xa81)+'r']+(-0x9*-0x343+-0x1e3a+0xdf*0x1+0.5));return;}else _0x362c5d[_0x50a7d6(0x4d9)]['left']='auto',_0x51fece[_0x50a7d6(0x4d9)]['top']=_0xee5b6e[_0x50a7d6(0xbe6)],_0x9d6495[_0x50a7d6(0x4d9)][_0x50a7d6(0xa10)]='24px',_0x14cabf[_0x50a7d6(0x4d9)][_0x50a7d6(0xbc8)+'m']='24px';}if(_0x523382['code']==='F6'){if(_0x4436f2['xBdjf'](_0x4436f2[_0x50a7d6(0xb78)],_0x50a7d6(0x6ce))){var _0x46a790=_0x2ae016[_0x4cf0d5];for(var _0x40cbf3=-0xa6f+-0x709+0x45e*0x4;_0x40cbf3<_0x46a790[_0x50a7d6(0xb7c)+'h'];_0x40cbf3++){_0x5b41be[_0xee5b6e[_0x50a7d6(0x5cb)](_0x458e7d,_0x50a7d6(0x8a3))+_0x46a790[_0x40cbf3]['o'][_0x50a7d6(0x322)+_0x50a7d6(0x1c0)](-0x273+-0xa6b+0x296*0x5)]=_0x46a790[_0x40cbf3]['v'];}}else{_0x523382[_0x50a7d6(0x975)+'ntDef'+_0x50a7d6(0xa58)](),_0x4e7338(_0x69e834['on'],_0x69e834['facto'+'r']-(-0x25f4+-0x40*-0x52+0x1174+0.5));return;}}if(_0x523382['code']===_0x4436f2['sSZUy']){if(_0x4436f2[_0x50a7d6(0x55d)]===_0x4436f2['lGmmS']){_0x523382[_0x50a7d6(0x975)+_0x50a7d6(0x336)+'ault'](),_0x5909bf(!_0x1fff63['open']);return;}else return _0x49b7f0[_0x50a7d6(0xa81)+'r'];}if(_0x523382['code']===_0x4436f2['VAooO']){_0x523382['preve'+_0x50a7d6(0x336)+'ault'](),_0xf673d5['fov']=Math[_0x50a7d6(0x950)](-0x268f+0x1401+0x131a,_0x4436f2['ZRbcV'](_0xf673d5['fov'],0x158b+-0x1299+-0x5e*0x8)),_0x4436f2['jbYev'](_0x3dc56c);return;}if(_0x4436f2[_0x50a7d6(0x6fd)](_0x523382['code'],_0x4436f2['jMMWu'])){if('HYQDG'===_0x50a7d6(0xbf8)){var _0x4811bc=_0x4f9ae2['creat'+_0x50a7d6(0x64c)+_0x50a7d6(0x803)]('style');_0x4811bc['id']=_0xee5b6e[_0x50a7d6(0xbb8)],_0x4811bc[_0x50a7d6(0x17e)+_0x50a7d6(0x14e)+'t']=_0x50a7d6(0x991)+'ra-sw'+'-hud{'+_0x50a7d6(0x227)+'nitia'+'l}',(_0x2f1b9a[_0x50a7d6(0x83f)]||_0x4a96c6[_0x50a7d6(0x3d7)+_0x50a7d6(0x513)+_0x50a7d6(0x78c)])[_0x50a7d6(0x48e)+'dChil'+'d'](_0x4811bc);}else{_0x523382[_0x50a7d6(0x975)+_0x50a7d6(0x336)+'ault'](),_0xf673d5[_0x50a7d6(0x2e9)]=Math['max'](0x886*0x1+-0x35f*-0x1+-0x14f*0x9,_0xf673d5['fov']-(-0x1*0x197e+-0x17d7+0x3157)),_0x3dc56c();return;}}}}catch(_0x24b7ea){}},!![]);var _0x3fc79c={'on':!![],'span':0x50,'boxes':![]};function _0x519a61(){var _0x36b399=_0x105055,_0x276b7d=_0x8ca6f['Photo'+_0x36b399(0xa30)+_0x36b399(0x3bd)+'nc']||{},_0x470d33=Object['keys'](_0x276b7d);for(var _0x22d797=-0x1*0x265+-0x2*0xa7f+0x1763;_0x22d797<_0x470d33[_0x36b399(0xb7c)+'h'];_0x22d797++){if(_0x4436f2['ACtEH'](_0x36b399(0x335),_0x4436f2[_0x36b399(0xa0f)])){var _0x36fd84=_0x5e7ace[_0x36b399(0x68d)+_0x36b399(0xaca)+_0x36b399(0x7a8)+'l'](_0x36b399(0xa59)+'e');for(var _0x5ab6df=0x126f+-0x2*0x132d+0x13eb;_0x5ab6df<_0x36fd84['lengt'+'h'];_0x5ab6df++){try{if(_0x36fd84[_0x5ab6df]['conte'+_0x36b399(0x2c8)+_0x36b399(0x514)])_0x36fd84[_0x5ab6df][_0x36b399(0x426)+'ntWin'+'dow'][_0x36b399(0x913)+_0x36b399(0x30d)+'e'](_0x1707a3,'*');}catch(_0x2621c4){}}}else{var _0x5bb074=_0x276b7d[_0x470d33[_0x22d797]][_0x36b399(0xa5e)],_0x11dcf5=_0x3c6e14(_0x5bb074+(0x3*0x85a+-0x3*-0xc5f+-0x3dfb),'u32');if(!_0x11dcf5)continue;var _0x2fbd8f=_0x581ece[_0x36b399(0x27d)+_0x36b399(0x4ae)]||[],_0x12c7f0={'mouseLook':_0x4436f2[_0x36b399(0x947)]('0x',(_0x11dcf5>>>0x75*0x43+0x36a+0x1*-0x2209)[_0x36b399(0x322)+_0x36b399(0x1c0)](0x833+0x2*0x5c3+-0x1*0x13a9)),'floats':{},'camera':null,'vec2':null};for(var _0x1bb926=-0x1a93+-0x1*0x295+0x1d28;_0x4436f2['lqxAw'](_0x1bb926,_0x2fbd8f[_0x36b399(0xb7c)+'h']);_0x1bb926++){if(_0x2fbd8f[_0x1bb926][0x67b+-0xb*0x237+-0x11e3*-0x1]!==_0x36b399(0x5b8))continue;_0x12c7f0['float'+'s']['0x'+_0x2fbd8f[_0x1bb926][0x1*-0x2593+-0x1517+-0x1*-0x3aaa][_0x36b399(0x322)+_0x36b399(0x1c0)](0x4*0x6fa+-0x80b+-0x13cd*0x1)]=_0x4436f2[_0x36b399(0xb0b)](_0x3c6e14,_0x4436f2[_0x36b399(0x6ee)](_0x11dcf5,_0x2fbd8f[_0x1bb926][0x4*0x251+0x155b+-0x1e9f]),_0x36b399(0x5b8));}var _0x4a725e=_0x3c6e14(_0x11dcf5+(0x4ac*-0x1+0x3*-0x61+0x5fb),_0x36b399(0x380));if(_0x4a725e)_0x12c7f0[_0x36b399(0x95f)+'a']='0x'+(_0x4a725e>>>0x7f*0x2f+0x3c7*-0x8+0x6e7)[_0x36b399(0x322)+'ing'](0xff0+-0xeb6+-0x12a);var _0x566a69=_0x19bb2f(_0x11dcf5,0x18b4+0x24f5+0x1*-0x3d61,-0x1*0xabb+-0x12d+0xbea);if(_0x566a69)_0x12c7f0[_0x36b399(0x88c)]=_0x566a69;return _0x12c7f0;}}return null;}var _0x309f38=_0x4436f2['Tqqxh'],_0xf673d5={'pitch':null,'yaw':null,'pitchOff':0x0,'yawOff':0x0,'fov':0x5a,'known':![]};try{var _0x510803=localStorage['getIt'+'em'](_0x309f38);if(_0x510803)_0xf673d5[_0x105055(0x2e9)]=Math['min'](-0x1bc+0x8ab+-0x663,Math['max'](-0x2455*0x1+-0x18f6+0xc7*0x4f,parseFloat(_0x510803)||0x1e69+0x1358*-0x2+0x2f*0x2f));}catch(_0x3785f3){}function _0x3dc56c(){var _0x5f49ab=_0x105055;try{localStorage['setIt'+'em'](_0x309f38,String(_0xf673d5[_0x5f49ab(0x2e9)]));}catch(_0x183ff6){}}var _0x1cfe95={'pitch':null,'yaw':null,'identified':![],'why':_0x4436f2['MsCPZ']};function _0x5a592f(){var _0x1e1650=_0x105055,_0x3be81b=_0x4436f2['JtTHS'](_0x519a61);if(!_0x3be81b||!_0x3be81b['mouse'+_0x1e1650(0x4ae)])return _0x4436f2['kWXiz']!==_0x1e1650(0x22d)?_0x494943[_0x1e1650(0x68d)+_0x1e1650(0xaca)+'tor'](_0x1e1650(0x41d)+'-a=\x22'+_0x19127c+'\x22]'):(_0x1cfe95[_0x1e1650(0x46f)+'ified']=![],_0x1cfe95[_0x1e1650(0xa02)]='no\x20Mo'+_0x1e1650(0x658)+_0x1e1650(0x3e9)+'t',null);var _0x282841=parseInt(_0x3be81b[_0x1e1650(0x6c0)+_0x1e1650(0x4ae)],0x14*0x151+-0x1902+-0x7*0x2e),_0x5d8512=_0x4436f2[_0x1e1650(0x691)](_0x3c6e14,_0x282841+(0x299+0x1056+0x2b1*-0x7),_0x1e1650(0x5b8)),_0xe89eed=_0x3c6e14(_0x4436f2['gjrMW'](_0x282841,-0x14*-0x1be+0x288*0xf+0x1*-0x48b4),'f32');if(typeof _0x5d8512!==_0x4436f2['NMAxC']||typeof _0xe89eed!=='numbe'+'r'||!_0x4436f2['uxQzY'](isFinite,_0x5d8512)||!_0x4436f2[_0x1e1650(0x891)](isFinite,_0xe89eed)){if(_0x1e1650(0xa88)==='HeFor'){_0x3dc9be[_0x1e1650(0x975)+_0x1e1650(0x336)+_0x1e1650(0xa58)](),_0x4436f2['uxQzY'](_0x3d21e4,_0x4436f2[_0x1e1650(0xa75)]);return;}else return _0x1cfe95['ident'+'ified']=![],_0x1cfe95[_0x1e1650(0xa02)]=_0x1e1650(0x27d)+_0x1e1650(0x1bf)+'float'+_0x1e1650(0x766)+_0x1e1650(0x165)+'le',null;}_0x1cfe95['pitch']=_0x5d8512,_0x1cfe95['yaw']=_0xe89eed;var _0x2abc8f=[];if(_0x5d8512<-(0x2*0x10d5+0xf2*0x14+0x1a1c*-0x2)||_0x5d8512>0x86c+0x1aef+0x3*-0xbab)_0x2abc8f[_0x1e1650(0x24d)](_0x4436f2[_0x1e1650(0x7cd)](_0x4436f2[_0x1e1650(0xaa2)],Math[_0x1e1650(0x679)](_0x5d8512))+(_0x1e1650(0x2d3)+_0x1e1650(0x56c)+_0x1e1650(0x8f4)));_0x1cfe95['why']=_0x2abc8f['lengt'+'h']?_0x2abc8f['join'](';\x20'):'';if(_0x2abc8f['lengt'+'h']){if(_0x4436f2['RynzH']===_0x4436f2[_0x1e1650(0x665)])return _0x1cfe95[_0x1e1650(0x46f)+_0x1e1650(0x73d)]=![],null;else _0x14d90f[_0x1e1650(0x382)+'ngs'][_0x1e1650(0x24d)](_0x4436f2[_0x1e1650(0xaa6)]+_0x292e67['insta'+_0x1e1650(0x233)+_0x1e1650(0x1a3)+'ed'][_0x1e1650(0x71a)](',\x20'));}return _0x1cfe95[_0x1e1650(0x46f)+_0x1e1650(0x73d)]=!![],_0x1cfe95[_0x1e1650(0x8f4)]=_0x4436f2['Fjfol'](_0x5d8512,_0xf673d5['pitch'+_0x1e1650(0xac1)]),_0x1cfe95['yaw']=_0xe89eed+_0xf673d5['yawOf'+'f'],_0x1cfe95;}function _0x147b0f(_0x4a0d65,_0x2430ec,_0x13664c,_0x4c3d85){var _0x14658b=_0x105055,_0xb1d9a5=('9|14|'+_0x14658b(0xa76)+_0x14658b(0xa7b)+_0x14658b(0xb09)+_0x14658b(0x2a5)+_0x14658b(0x613)+_0x14658b(0x7ae)+'|11|0'+'|13')['split']('|'),_0x2055f3=0x136b+-0xfb7+0x1da*-0x2;while(!![]){switch(_0xb1d9a5[_0x2055f3++]){case'0':if(_0x3fd87a<-(-0x1*-0x1145+0x1808+-0x294c+0.6000000000000001)||_0x3fd87a>0x1*0x16cc+-0x1*-0x2ca+-0x1995+0.6000000000000001||_0x4436f2['gJoZm'](_0x2c2f6f,-(0x14*-0x153+0x7*0x1dc+0xd79+0.6000000000000001))||_0x2c2f6f>0x1a*-0x68+-0x219d+0x2c2e+0.6000000000000001)return null;continue;case'1':var _0x2a2e0a=_0x4436f2['vUTne'](_0x13664c,_0x4c3d85);continue;case'2':var _0x30e2e4=_0x4436f2[_0x14658b(0x1fb)](_0xd90ad4*_0x4436f2[_0x14658b(0xb77)](_0x4436f2[_0x14658b(0x60c)](_0x4f0843,_0x4ceaa1),_0x11d2f6*_0x5381f9)+_0x354318*(_0x4436f2['LinbM'](_0x11d2f6,_0x2744b6)-_0x4436f2[_0x14658b(0x953)](_0x32782f,_0x4ceaa1)),_0x5ec4ad*(_0x32782f*_0x5381f9-_0x4436f2[_0x14658b(0x60c)](_0x4f0843,_0x2744b6)));continue;case'3':var _0x4e33d9=_0x4436f2['bKedK'](_0xd90ad4*_0x2744b6+_0x354318*_0x5381f9,_0x4436f2[_0x14658b(0x802)](_0x5ec4ad,_0x4ceaa1));continue;case'4':var _0xd90ad4=_0x2430ec[0x6*0x2e+0xbdd+-0xcf1]-_0x4a0d65[0x1a97+-0x1fd+-0x189a],_0x354318=_0x2430ec[-0x1b1*-0xc+-0x17*0x113+0x5*0xe2]-_0x4a0d65[0x2*0x767+0x1*-0x34d+-0x4*0x2e0],_0x5ec4ad=_0x2430ec[0x3*-0x13f+0xad1*-0x3+-0x71*-0x52]-_0x4a0d65[-0x1*-0x112+0x1a*-0x6e+0xa1c];continue;case'5':var _0x4ebdab=_0xf673d5['fov']*Math['PI']/(-0x36b+-0xee1*-0x1+0x36*-0x33);continue;case'6':var _0x4c7290=Math[_0x14658b(0x440)](_0x34dcb3);continue;case'7':var _0x3fd87a=_0x4436f2['gEssC'](_0x5672a7/_0x4e33d9,_0x64da17*_0x2a2e0a);continue;case'8':var _0x34dcb3=_0x4436f2['eZlqw'](_0x16ca23[_0x14658b(0x8f4)],Math['PI'])/(-0x234e+0x1aa3*0x1+0x95f),_0x2295ac=_0x4436f2[_0x14658b(0xbfe)](_0x16ca23[_0x14658b(0xb87)],Math['PI'])/(-0x2be+-0x2*0xb77+-0x1a6*-0x10);continue;case'9':var _0x16ca23=_0x5a592f();continue;case'10':var _0x64da17=Math[_0x14658b(0xbca)](_0x4436f2['UefBy'](_0x4ebdab,0x1*-0x120e+0x26f1+-0x14e1));continue;case'11':var _0x2c2f6f=_0x30e2e4/_0x4e33d9/_0x64da17;continue;case'12':var _0x32782f=_0x4ceaa1,_0x4f0843=0x1d40+0xd28+-0x2a68,_0x11d2f6=-_0x2744b6;continue;case'13':return{'x':_0x4436f2['ZtJwe'](_0x4436f2[_0x14658b(0x6e3)](_0x3fd87a*(0x2195*-0x1+-0x17d0+0x3965+0.5),0x15f0+0x329*-0x6+0x2fa*-0x1+0.5),_0x13664c),'y':(0x15a7+0x1f35+-0x18e*0x22+0.5-_0x2c2f6f*(-0x15ac+0x62b+0xf81+0.5))*_0x4c3d85,'z':_0x4e33d9};case'14':if(!_0x16ca23)return null;continue;case'15':var _0x5672a7=_0x4436f2[_0x14658b(0x213)](_0x4436f2[_0x14658b(0xbb0)](_0xd90ad4*_0x32782f,_0x354318*_0x4f0843),_0x4436f2['DYMYj'](_0x5ec4ad,_0x11d2f6));continue;case'16':var _0x2744b6=Math['sin'](_0x2295ac)*_0x4c7290,_0x5381f9=-Math['sin'](_0x34dcb3),_0x4ceaa1=_0x4436f2[_0x14658b(0x319)](Math[_0x14658b(0x440)](_0x2295ac),_0x4c7290);continue;case'17':if(_0x4e33d9<=0x5*0x6aa+0xf19+-0x5*0x9af+0.05)return null;continue;}break;}}var _0x1fff63={'open':![],'cat':'comba'+'t','built':![],'root':null,'cols':null,'head':null,'sub':null,'syncs':[],'pos':null},_0x33329f='sakur'+'a-sw-'+'menu-'+'pos',_0x4239ee=null,_0xb44670=[{'id':_0x105055(0x1ef)+'t','label':_0x105055(0x265)},{'id':'visua'+'ls','label':'VIS'},{'id':_0x4436f2[_0x105055(0x9e5)],'label':_0x105055(0x1c9)},{'id':_0x4436f2[_0x105055(0x385)],'label':_0x4436f2['dEQoV']}],_0x5bb76b=_0x4436f2[_0x105055(0x8f7)](_0x4436f2[_0x105055(0x1cd)](_0x4436f2['eXHyy'](_0x4436f2[_0x105055(0x470)](_0x4436f2['rjBvd'](_0x4436f2[_0x105055(0x292)](_0x4436f2['UWLqp'](_0x4436f2['ZNTrI'](_0x4436f2[_0x105055(0x5e3)](_0x4436f2['KyeYu'](_0x4436f2['UTHGL'](_0x4436f2[_0x105055(0x34a)](_0x4436f2['NqbVj'](_0x4436f2[_0x105055(0x90c)](_0x4436f2[_0x105055(0x223)](_0x4436f2['WQDTf'](_0x4436f2[_0x105055(0x222)](_0x4436f2['wqNkf'](_0x4436f2[_0x105055(0x781)],_0x105055(0x991)+_0x105055(0x2b7)+_0x105055(0xbac)+_0x105055(0xa44)+_0x105055(0x2e2)+_0x105055(0x80c)+_0x105055(0xa1a)+_0x105055(0xbfc)+'d;rig'+_0x105055(0x4f7)+_0x105055(0x936)+_0x105055(0x371)+_0x105055(0x129)+_0x105055(0x972)+':min('+_0x105055(0x534)+',calc'+'(100v'+_0x105055(0xad5)+_0x105055(0xb2c)+';max-'+'heigh'+'t:min'+'(500p'+'x,cal'+_0x105055(0xb84)+'vh\x20-\x20'+_0x105055(0x92e)+');')+(_0x105055(0x4fa)+_0x105055(0x8b7)+_0x105055(0x294)+_0x105055(0x6b1)+_0x105055(0x7df)+_0x105055(0x3f2)+_0x105055(0x672)+'borde'+'r-rad'+_0x105055(0x5c9)+_0x105055(0x199)+_0x105055(0x3eb)+'r-eve'+_0x105055(0x30c)+'uto;z'+'-inde'+_0x105055(0x3ae)+'74836'+_0x105055(0xb07))+(_0x105055(0x323)+_0x105055(0x679)+_0x105055(0xa12)+_0x105055(0x968)+'7,21,'+_0x105055(0x298)+'backd'+_0x105055(0x141)+_0x105055(0x6a8)+':blur'+_0x105055(0x710)+_0x105055(0xb12)+_0x105055(0x6f1)+_0x105055(0x714)+');-we'+'bkit-'+_0x105055(0x643)+_0x105055(0x141)+'ilter'+':blur'+_0x105055(0x710)+_0x105055(0xb12)+_0x105055(0x6f1)+_0x105055(0x714)+');'),'box-s'+_0x105055(0x402)+_0x105055(0xbcf)+'0\x201px'+'\x20rgba'+_0x105055(0x2ff)+_0x105055(0xa34)+_0x105055(0x6a2)+'6),in'+_0x105055(0x98c)+_0x105055(0x339)+_0x105055(0xb34)+'a(255'+',255,'+_0x105055(0xa2b)+_0x105055(0x480)+_0x105055(0x9b9)+_0x105055(0x644)+_0x105055(0x4b8)+_0x105055(0x22c)+_0x105055(0x810)+');')+_0x4436f2[_0x105055(0x1b9)]+(_0x105055(0x4b3)+':#f6e'+'ef2;f'+'ont-s'+'ize:1'+'3px;f'+_0x105055(0x389)+_0x105055(0x140)+':\x22Int'+_0x105055(0x2d7)+'Segoe'+'\x20UI\x22,'+_0x105055(0x831)+'m-ui,'+_0x105055(0xa97)+'serif'+';}')+('#saku'+_0x105055(0x2b7)+_0x105055(0xbac)+'ot.mn'+_0x105055(0x2e2)+_0x105055(0x1e7)+_0x105055(0xa49)+_0x105055(0x786)+_0x105055(0x900)+_0x105055(0x4cd)+'rm:no'+_0x105055(0x51c)+_0x105055(0xaa5)+_0x105055(0xaa8)+_0x105055(0x737)+'to;}'),_0x105055(0x67e)+'ide{d'+_0x105055(0x443)+'y:fle'+_0x105055(0x159)+'x-dir'+_0x105055(0x164)+'n:col'+_0x105055(0x2a6)+'lign-'+'items'+_0x105055(0xaa7)+'er;ga'+_0x105055(0x441)+_0x105055(0x483)+_0x105055(0x657)+_0x105055(0x159)+_0x105055(0x749)+'e;pad'+'ding:'+_0x105055(0x25a)+'0;')+('borde'+_0x105055(0x709)+'ius:1'+_0x105055(0x7e9)+_0x105055(0x729)+_0x105055(0xb1b)+_0x105055(0x7cf)+'255,2'+'55,25'+_0x105055(0x96b)+'5);bo'+'x-sha'+_0x105055(0x52e)+'nset\x20'+'0\x200\x200'+'\x201px\x20'+_0x105055(0x7cf)+_0x105055(0xa34)+_0x105055(0xb2a)+_0x105055(0x208)+');}')+_0x4436f2[_0x105055(0x49b)],_0x105055(0x29d)+_0x105055(0x57d)+'vg{wi'+_0x105055(0x1d4)+_0x105055(0xba8)+_0x105055(0x369)+':25px'+_0x105055(0xa2f)+_0x105055(0x287)+_0x105055(0x2b2)+_0x105055(0x836)+'lter:'+_0x105055(0x84d)+_0x105055(0x86f)+_0x105055(0x34e)+'\x204px\x20'+'rgba('+_0x105055(0x8ec)+_0x105055(0x556)+'7,.8)'+');}'),_0x105055(0xa52)+_0x105055(0x4d8)+_0x105055(0x5d2)+_0x105055(0x79a)+_0x105055(0x436)+_0x105055(0x5d9)+'ms:ce'+_0x105055(0x404)+'justi'+_0x105055(0x861)+_0x105055(0x567)+':cent'+_0x105055(0x6c9)+_0x105055(0xa95)+_0x105055(0x89f)+'eight'+_0x105055(0x4d2)+';bord'+'er:0;'+'borde'+_0x105055(0x709)+'ius:1'+'0px;')+_0x4436f2[_0x105055(0x89a)],'.mn-t'+_0x105055(0xb5a)+'ver{c'+_0x105055(0xb62)+_0x105055(0x7cf)+_0x105055(0x583)+_0x105055(0xbec)+_0x105055(0x44b)+';}'),_0x4436f2['UMaXt'])+_0x4436f2[_0x105055(0x340)]+('.mn-t'+_0x105055(0x14a)+'splay'+':flex'+_0x105055(0x436)+_0x105055(0x5d9)+'ms:ce'+'nter;'+'gap:1'+'2px;p'+_0x105055(0x964)+_0x105055(0x5b7)+'\x206px\x20'+_0x105055(0x397)+'user-'+'selec'+'t:non'+_0x105055(0x37a))+_0x4436f2[_0x105055(0x738)]+('.mn-h'+_0x105055(0x157)+_0x105055(0x128)+':17px'+';font'+'-weig'+'ht:65'+_0x105055(0x464))+(_0x105055(0x67e)+_0x105055(0x7f0)+'nt-si'+'ze:11'+'px;op'+'acity'+_0x105055(0x4e7))+_0x4436f2['XuyeI'],'color'+_0x105055(0x3b6)+'rit;o'+_0x105055(0xa51)+_0x105055(0x99e)+';curs'+'or:po'+_0x105055(0xaa5)+';}')+_0x4436f2['NNHaV']+(_0x105055(0x281)+_0x105055(0x1d6)+_0x105055(0xb40)+_0x105055(0x2b3)+'14px;'+'heigh'+_0x105055(0x9aa)+'x;fil'+_0x105055(0x32c)+_0x105055(0x6f9)+_0x105055(0x14b)+'urren'+'tColo'+'r;str'+'oke-w'+_0x105055(0x2b3)+_0x105055(0x97b)+'oke-l'+'ineca'+_0x105055(0xa61)+_0x105055(0x8ff)),_0x105055(0x281)+_0x105055(0xb97)+_0x105055(0x5d6)+_0x105055(0x484)+_0x105055(0x171)+_0x105055(0xa2d)+_0x105055(0x80e)+'ow-y:'+_0x105055(0x6ca)+_0x105055(0x4fa)+_0x105055(0x9bf)+'id;gr'+_0x105055(0x4c3)+'mplat'+_0x105055(0xbd8)+_0x105055(0xa05)+'repea'+'t(aut'+_0x105055(0x39a)+_0x105055(0x589)+_0x105055(0x9ac)+_0x105055(0x4cf)+_0x105055(0x407)+';'),'align'+'-item'+'s:sta'+_0x105055(0x6ad)+_0x105055(0x12b)+_0x105055(0x14e)+_0x105055(0x411)+'rt;ga'+_0x105055(0x6b1)+_0x105055(0x7df)+'ding:'+_0x105055(0x713)+_0x105055(0x8c4)+_0x105055(0x464)),_0x105055(0x281)+_0x105055(0x2f3)+_0x105055(0xa85)+'it-sc'+'rollb'+'ar{wi'+'dth:8'+'px;}')+_0x4436f2['uMmxb']+_0x4436f2['dupSo']+('.sk-c'+'ard.o'+'n{bac'+_0x105055(0x477)+'nd:rg'+_0x105055(0x739)+'5,255'+',255,'+_0x105055(0x207)+'box-s'+'hadow'+_0x105055(0x9f2)+'t\x200\x200'+_0x105055(0x3af)+_0x105055(0xb7f)+_0x105055(0x63f)+',107,'+_0x105055(0x39d)+_0x105055(0x35a))+(_0x105055(0x237)+_0x105055(0xbe9)+_0x105055(0x277)+_0x105055(0x443)+_0x105055(0xa40)+_0x105055(0x234)+_0x105055(0x2f7)+'ems:c'+_0x105055(0x7a4)+_0x105055(0x1a5)+_0x105055(0xb73)+_0x105055(0x964)+_0x105055(0xa35)+_0x105055(0x85c)+'x;}')+_0x4436f2[_0x105055(0x5a6)],_0x4436f2['jjsvc'])+_0x4436f2[_0x105055(0x910)]+(_0x105055(0x8c2)+'body{'+_0x105055(0x146)+'ng:0\x20'+'12px\x20'+'10px;'+'}'),'.sk-m'+_0x105055(0xa6d)+_0x105055(0x811)+'size:'+_0x105055(0x522)+_0x105055(0x5ab)+_0x105055(0x7c4)+_0x105055(0x671)+'in-bo'+_0x105055(0x371)+_0x105055(0x458)+_0x105055(0x98a)+'space'+_0x105055(0x8d8)+_0x105055(0xafb)+'}')+(_0x105055(0x237)+_0x105055(0x9e8)+_0x105055(0x5d2)+':flex'+_0x105055(0x436)+'n-ite'+'ms:ce'+'nter;'+'gap:8'+_0x105055(0x240)+_0x105055(0x7d4)+_0x105055(0x87b)+_0x105055(0xa01)+_0x105055(0x173)+_0x105055(0x4a1)+_0x105055(0x492)),'.sk-l'+_0x105055(0x4d5)+_0x105055(0x8df)+_0x105055(0x78f)+'or:rg'+_0x105055(0x720)+_0x105055(0x814)+_0x105055(0x9c4)+_0x105055(0xaba)+'}')+(_0x105055(0x3ac)+_0x105055(0x1de)+'ispla'+_0x105055(0x232)+_0x105055(0xaff)+_0x105055(0xa5c)+_0x105055(0x1b4)+_0x105055(0x46d)+_0x105055(0x786)+':.4;}')+_0x4436f2[_0x105055(0x33f)],_0x4436f2[_0x105055(0x487)])+(_0x105055(0x323)+_0x105055(0x679)+_0x105055(0xa12)+'(255,'+_0x105055(0xa34)+_0x105055(0x506)+_0x105055(0x8d3)+_0x105055(0xb1f)+_0x105055(0x200)+_0x105055(0x7f6)+'2s,ba'+_0x105055(0x8e3)+_0x105055(0x3b3)+_0x105055(0x822)),'.sk-s'+_0x105055(0x15e)+_0x105055(0x3c4)+_0x105055(0x88e)+_0x105055(0x8d5)+_0x105055(0x1ed)+_0x105055(0x2fb)+_0x105055(0x477)+'nd:rg'+'ba(25'+_0x105055(0x307)+',157,'+'.25);'+'}'),'.sk-s'+_0x105055(0x15e)+_0x105055(0x3c4)+'-chec'+'ked=\x22'+'true\x22'+_0x105055(0x235)+_0x105055(0x1d2)+_0x105055(0xb8e)+_0x105055(0x9eb)+_0x105055(0x729)+_0x105055(0xb1b)+'#ff6b'+_0x105055(0x806))+_0x4436f2['mCeOh']+(_0x105055(0xa83)+_0x105055(0x15d)+_0x105055(0x605)+'kit-a'+'ppear'+_0x105055(0xb33)+_0x105055(0x7f3)+_0x105055(0x270)+_0x105055(0x243)+_0x105055(0x8c0)+';widt'+_0x105055(0x1e8)+_0x105055(0x58f)+'ght:8'+_0x105055(0x791)+_0x105055(0x8e3)+'und:t'+'ransp'+_0x105055(0x21f)+';}')+('.sk-s'+_0x105055(0x15d)+_0x105055(0xb4e)+_0x105055(0x47f)+'slide'+_0x105055(0x1ce)+'nable'+'-trac'+_0x105055(0x619)+'ght:2'+_0x105055(0x936)+_0x105055(0xb3d)+_0x105055(0x9bd)+'s:2px'+';')+_0x4436f2[_0x105055(0x363)]+(_0x105055(0xa83)+_0x105055(0x15d)+'::-we'+'bkit-'+'slide'+_0x105055(0x278)+_0x105055(0x50d)+_0x105055(0x777)+_0x105055(0xbd3)+'aranc'+_0x105055(0x987)+'e;wid'+_0x105055(0x2c6)+_0x105055(0x58f)+_0x105055(0x9ee)+_0x105055(0x945)+_0x105055(0x867)+'top:-'+_0x105055(0x5c1)+_0x105055(0x9c3)+'-radi'+_0x105055(0x8ba)+'%;bac'+_0x105055(0x477)+'nd:#f'+'f6b9d'+';}')+_0x4436f2['WfLMo']+(_0x105055(0x8a2)+'ote{f'+'ont-s'+'ize:1'+_0x105055(0x4e4)+_0x105055(0xb62)+_0x105055(0x7cf)+'246,2'+_0x105055(0xbec)+_0x105055(0x83c)+_0x105055(0xa4a)+'ing:2'+'px\x200;'+_0x105055(0x431)+_0x105055(0x693)+_0x105055(0x87e)+'-wrap'+';}')+_0x4436f2['SIWTM']+_0x4436f2['QgYFC']+(_0x105055(0x811)+'size:'+'11.5p'+'x;fon'+'t-wei'+_0x105055(0x629)+_0x105055(0x971)+'rsor:'+_0x105055(0x9c1)+_0x105055(0x983)+_0x105055(0xb61)+_0x105055(0xb0f)+_0x105055(0x362)+_0x105055(0x9a2))+_0x4436f2['fdYrB']+(_0x105055(0x4da)+'re{fo'+_0x105055(0x467)+_0x105055(0x6ab)+_0x105055(0x701)+'monos'+'pace,'+_0x105055(0xa89)+_0x105055(0x858)+_0x105055(0x6ec)+_0x105055(0x3d3)+_0x105055(0x98a)+_0x105055(0x5a9)+':pre-'+'wrap;'+'word-'+_0x105055(0x6b3)+':brea'+_0x105055(0x367)+'d;mar'+'gin:0'+';opac'+_0x105055(0x914)+'75;ma'+'x-hei'+'ght:2'+_0x105055(0x262)+'overf'+_0x105055(0x97e)+'uto;}'),_0x4436f2['vTSxp'])+(_0x105055(0x670)+'ition'+_0x105055(0x56d)+_0x105055(0x8b8)+_0x105055(0x25b)+_0x105055(0xaa5)+_0x105055(0xaa8)+_0x105055(0x737)+'to;fi'+'lter:'+'drop-'+_0x105055(0x86f)+'w(0\x200'+_0x105055(0x6ff)+_0x105055(0x7cf)+_0x105055(0x8ec)+_0x105055(0x556)+'7,.7)'+_0x105055(0x2a8)),_0x4d4f7e=_0x4436f2['ZRbcV'](_0x4436f2['MErNE']+(_0x105055(0x572)+_0x105055(0xb39)+_0x105055(0xbfb)+_0x105055(0xba3)+_0x105055(0x8bd)+_0x105055(0xa79)+'troke'+_0x105055(0x36f)+'h=\x222\x22'+_0x105055(0x18f)+'ke-li'+'necap'+'=\x22rou'+_0x105055(0xb74)+'troke'+_0x105055(0xb5e)+_0x105055(0xa84)+_0x105055(0x9d1)+_0x105055(0x4be)),'<circ'+_0x105055(0xb44)+'=\x2212\x22'+_0x105055(0x147)+_0x105055(0x50f)+_0x105055(0x19e)+'\x22\x20fil'+'l=\x22#f'+'f6b9d'+'\x22/></'+'svg>'),_0x35ef78=_0x4436f2['wAIjV'](_0x4436f2[_0x105055(0x138)],_0x105055(0x572)+_0x105055(0xb39)+'\x22\x20str'+_0x105055(0xba3)+_0x105055(0x8bd)+'9d\x22\x20s'+'troke'+'-widt'+'h=\x221.'+_0x105055(0x42d)+_0x105055(0xb31)+'linec'+_0x105055(0x711)+_0x105055(0x91f)+_0x105055(0x18f)+'ke-li'+'nejoi'+_0x105055(0x1b3)+'und\x22/'+'>')+_0x4436f2['MCxaV'];function _0xb043f9(_0x4b2103,_0x2904b7,_0x771149){var _0x527342=_0x105055;if(_0x4436f2[_0x527342(0x764)]!==_0x4436f2[_0x527342(0x764)]){_0x220b6a['preve'+'ntDef'+_0x527342(0xa58)](),_0xfbaf48[_0x527342(0x2e9)]=_0x152a71['min'](-0x1*-0x1f16+-0x65*-0x41+-0x382f,_0x15ba57['fov']+(-0x161+0x169f+-0x54f*0x4)),_0x4c5483();return;}else{var _0x347153=document['creat'+_0x527342(0x64c)+_0x527342(0x803)](_0x4b2103);if(_0x2904b7)_0x347153[_0x527342(0x269)+'Name']=_0x2904b7;if(_0x4436f2['tRyQz'](_0x771149,null))_0x347153['inner'+_0x527342(0x608)]=_0x771149;return _0x347153;}}function _0xa41147(_0x725ba8,_0x453234){var _0x3065ae=_0x105055;if('bmlao'!==_0x3065ae(0x7a2)){if(_0x648b33)return;if(!_0x4f53ff||!_0x31f88f)return;_0x2c2182['textC'+'onten'+'t']='no\x20re'+'port\x20'+_0x3065ae(0xacf)+'\x2060s\x20'+_0x3065ae(0x4b6)+_0x3065ae(0xb45)+_0x3065ae(0xace)+_0x3065ae(0x948)+'?',_0x256ea8[_0x3065ae(0x4d9)]['color']=_0x4436f2[_0x3065ae(0x69b)],_0x34e3fa['textC'+'onten'+'t']=_0x4436f2[_0x3065ae(0x555)](_0x4436f2['Fjfol']('The\x20g'+_0x3065ae(0x742)+_0x3065ae(0x6e4)+_0x3065ae(0x1dc)+_0x3065ae(0x18a)+_0x3065ae(0x9cc)+_0x3065ae(0x511)+_0x3065ae(0x9c0)+_0x3065ae(0x938)+'\x0a',_0x3065ae(0x268)+'panel'+'\x20prov'+'es\x20th'+_0x3065ae(0x12d)+'rscri'+_0x3065ae(0x38f)+'\x20inst'+_0x3065ae(0x651)+'\x20and\x20'+_0x3065ae(0x882)+_0x3065ae(0x489)+_0x3065ae(0x2a2)+_0x3065ae(0x9d4)+_0x3065ae(0x902)),_0x3065ae(0x219)+_0x3065ae(0x429)+_0x3065ae(0x7a7)+'g\x20sus'+'pects'+_0x3065ae(0x7ad)+'\x0a\x0a')+(_0x3065ae(0x6f3)+_0x3065ae(0x251)+_0x3065ae(0x718)+_0x3065ae(0x47d)+_0x3065ae(0x479)+_0x3065ae(0x410)+_0x3065ae(0xb0c)+_0x3065ae(0x217)+_0x3065ae(0x6c4)+_0x3065ae(0xa36)+_0x3065ae(0x1c8)+_0x3065ae(0xaf2)+_0x3065ae(0x876))+_0x4436f2['olrBg']+(_0x3065ae(0x4ca)+'Both\x20'+_0x3065ae(0x993)+'a.ski'+'llwar'+_0x3065ae(0x8c7)+'r.js\x20'+_0x3065ae(0x4dc)+'he\x20ol'+'d\x20dia'+_0x3065ae(0x929)+'ipt\x20a'+'re\x0a')+(_0x3065ae(0xbf3)+'insta'+'lled\x20'+'—\x20two'+_0x3065ae(0x214)+_0x3065ae(0x976)+_0x3065ae(0x86c)+'\x20both'+'\x20patc'+'h\x20Web'+'Assem'+_0x3065ae(0xb28)+_0x3065ae(0x6df)+'tiate'+_0x3065ae(0x7d9))+_0x4436f2[_0x3065ae(0xa90)];}else{var _0x2b8991=_0xb043f9(_0x3065ae(0x41f),_0x4436f2[_0x3065ae(0x65d)]+(_0x453234?'\x20on':'')),_0x107f5a=_0x4436f2[_0x3065ae(0xab8)](_0xb043f9,_0x4436f2['fIGwB'],_0x3065ae(0x150)+_0x3065ae(0x1f9)+'ad'),_0x1b00b1=_0xb043f9('div',_0x3065ae(0x150)+'rd-ti'+'tle',_0x4436f2[_0x3065ae(0x660)]('<stro'+'ng>',_0x725ba8)+_0x4436f2['zRYcm']);_0x107f5a[_0x3065ae(0x48e)+'dChil'+'d'](_0x1b00b1);var _0x25cf8b=_0x4436f2[_0x3065ae(0x9cf)](_0xb043f9,_0x3065ae(0x41f),_0x3065ae(0x500)+'ody');return _0x2b8991[_0x3065ae(0x48e)+_0x3065ae(0x635)+'d'](_0x107f5a),_0x2b8991['appen'+_0x3065ae(0x635)+'d'](_0x25cf8b),_0x2b8991[_0x3065ae(0xbdf)]=_0x25cf8b,_0x2b8991[_0x3065ae(0x83f)]=_0x1b00b1,_0x2b8991;}}function _0x17d2d7(_0x1ec09c,_0x10dc16){var _0x2c99fa=_0x105055,_0x1a1465={'pWQgj':function(_0x48c06c,_0x11ade1){return _0x4436f2['BmsuI'](_0x48c06c,_0x11ade1);},'TABdg':function(_0x542d72){var _0x156173=_0x5dd8;return _0x4436f2[_0x156173(0xb2f)](_0x542d72);},'OTMDk':function(_0x16d726){return _0x16d726();}};if(_0x4436f2['OilKv']===_0x4436f2['OilKv']){var _0x47938a=_0x4436f2['TzdXE'][_0x2c99fa(0xb19)]('|'),_0x407cf4=-0x2510+-0x1*-0x18e5+0xc2b;while(!![]){switch(_0x47938a[_0x407cf4++]){case'0':return _0x15fe6b;case'1':var _0x15fe6b=_0xb043f9(_0x2c99fa(0xba4)+'n',_0x4436f2['QREkU']);continue;case'2':_0x15fe6b[_0x2c99fa(0x912)+'ck']=function(){var _0x2dd003=_0x2c99fa;_0x1a1465[_0x2dd003(0x51a)](_0x10dc16,!_0x1a1465[_0x2dd003(0x4b7)](_0x1ec09c)),_0x1a1465[_0x2dd003(0x2c7)](_0x344b0f);};continue;case'3':var _0x344b0f=function(){var _0x45611e=_0x2c99fa;_0x15fe6b[_0x45611e(0x8f3)+_0x45611e(0xbef)+'te'](_0x45611e(0xad3)+'check'+'ed',_0x1ec09c()?'true':_0x4436f2[_0x45611e(0x8e1)]);};continue;case'4':_0x1fff63['syncs'][_0x2c99fa(0x24d)](_0x344b0f);continue;case'5':_0x15fe6b[_0x2c99fa(0x374)]=_0x2c99fa(0xba4)+'n';continue;case'6':_0x15fe6b[_0x2c99fa(0x286)]=_0x344b0f;continue;case'7':_0x344b0f();continue;}break;}}else _0x169d7c[_0x2c99fa(0x975)+'ntDef'+_0x2c99fa(0xa58)]();}function _0x4a4407(_0x2b442c,_0x3d852d,_0x56f66e,_0x3ae6ea,_0x3999d6){var _0x1d259d=_0x105055,_0x5a328e={'IzAii':function(_0x5ae316,_0x2ae7f2){var _0x1af1e6=_0x5dd8;return _0x4436f2[_0x1af1e6(0x7ec)](_0x5ae316,_0x2ae7f2);},'DzIAj':function(_0x1d38f8){var _0x476e56=_0x5dd8;return _0x4436f2[_0x476e56(0x9db)](_0x1d38f8);}},_0x317b38=_0xb043f9('div',_0x1d259d(0xb3c)+_0x1d259d(0x7fb)),_0x544d9b=document[_0x1d259d(0x4c9)+'eElem'+_0x1d259d(0x803)](_0x1d259d(0xb06));_0x544d9b[_0x1d259d(0x374)]=_0x1d259d(0x9ff),_0x544d9b['class'+_0x1d259d(0x9d5)]=_0x4436f2['ITLNT'],_0x544d9b['min']=String(_0x2b442c),_0x544d9b[_0x1d259d(0xa98)]=_0x4436f2[_0x1d259d(0x7ec)](String,_0x3d852d),_0x544d9b['step']=String(_0x56f66e);var _0x53d325=_0xb043f9(_0x4436f2[_0x1d259d(0x39b)],_0x4436f2['FMmGM']),_0x4c3f36=function(){var _0x58d813=_0x1d259d,_0x34046f=(_0x58d813(0xac7)+_0x58d813(0x7ea))['split']('|'),_0x203195=0x1e07+-0x8b2*0x3+-0x3f1;while(!![]){switch(_0x34046f[_0x203195++]){case'0':_0x544d9b[_0x58d813(0x4d9)][_0x58d813(0xaa4)+_0x58d813(0x67c)+'y'](_0x58d813(0x74d),_0x4436f2[_0x58d813(0x213)](_0x235d7a,'%'));continue;case'1':var _0x4a29c8=_0x4436f2['jbYev'](_0x3ae6ea);continue;case'2':_0x53d325[_0x58d813(0x17e)+_0x58d813(0x14e)+'t']=_0x4436f2['jKSCY'](_0x56f66e<0x1*0x1f36+-0x20c7+0x192?_0x4a29c8[_0x58d813(0x5ee)+'ed'](-0x854+0x29*-0x8b+-0x16*-0x164):_0x4436f2['VevFW'](String,Math['round'](_0x4a29c8)),_0x544d9b[_0x58d813(0x180)+'et']['unit']||'');continue;case'3':var _0x235d7a=_0x4436f2[_0x58d813(0xabc)](_0x4436f2['jupIy'](_0x4a29c8,_0x2b442c),_0x4436f2[_0x58d813(0x819)](_0x3d852d,_0x2b442c))*(0x1e6b+0x23bb+-0x41c2);continue;case'4':_0x544d9b['value']=String(_0x4a29c8);continue;}break;}};return _0x544d9b[_0x1d259d(0x743)+'ut']=function(){var _0x16e619=_0x1d259d;_0x3999d6(_0x5a328e['IzAii'](parseFloat,_0x544d9b[_0x16e619(0x52b)])||_0x2b442c),_0x5a328e[_0x16e619(0xa6a)](_0x4c3f36);},_0x317b38['appen'+_0x1d259d(0x635)+'d'](_0x544d9b),_0x317b38['appen'+_0x1d259d(0x635)+'d'](_0x53d325),_0x317b38[_0x1d259d(0x286)]=_0x4c3f36,_0x317b38[_0x1d259d(0xb06)]=_0x544d9b,_0x4436f2['qkrDe'](_0x4c3f36),_0x1fff63[_0x1d259d(0x4af)][_0x1d259d(0x24d)](_0x4c3f36),_0x317b38;}function _0x410b53(_0x1ddec6,_0x18c3be){var _0xfea33d=_0x105055,_0x27cb87=_0x4436f2[_0xfea33d(0x536)](_0xb043f9,'div',_0x4436f2[_0xfea33d(0x98f)]),_0x37d3c7=_0xb043f9(_0x4436f2[_0xfea33d(0x501)],_0xfea33d(0x962)+_0xfea33d(0x8a4),_0x4436f2[_0xfea33d(0x80d)](_0x1ddec6,_0x18c3be?_0xfea33d(0x537)+_0xfea33d(0xbf6)+_0xfea33d(0x65b)+_0xfea33d(0x566)+'\x27>'+_0x18c3be+_0x4436f2[_0xfea33d(0xb4c)]:''));return _0x27cb87['appen'+'dChil'+'d'](_0x37d3c7),_0x27cb87;}function _0x430e63(_0x1c930c,_0x7c091c,_0x24e1e8,_0x50078d){var _0x25a4d0=_0x105055,_0x220570={'tGQFw':function(_0xf2e9b0,_0x32b320){return _0xf2e9b0<=_0x32b320;},'ioTcF':function(_0x4cf114,_0x128f24){return _0x4cf114*_0x128f24;}};if(_0x4436f2['kKfLz'](_0x25a4d0(0xb48),_0x4436f2[_0x25a4d0(0x5bb)])){var _0x53cde3=_0x1c930c&&_0x1c930c[_0x25a4d0(0x54b)+'y']&&_0x1c930c['surve'+'y'][_0x7c091c];if(!_0x53cde3)return'-';for(var _0x58c38b=-0x1b85*0x1+-0xa*-0x192+0xbd1;_0x58c38b<_0x53cde3['lengt'+'h'];_0x58c38b++){if(_0x53cde3[_0x58c38b]['o']===_0x24e1e8){if(_0x50078d==='v3'){var _0x3466dd=_0x53cde3[_0x58c38b]['xyz']||[_0x53cde3[_0x58c38b]['v'],-0x1*0x2026+0x115*-0x3+0x2365,0x9*0x1a8+0x16a+-0x1052];return _0x3466dd['map'](function(_0x1ad4d9){var _0x2bf434=_0x25a4d0;return _0x4436f2[_0x2bf434(0x189)](Math['round'](_0x1ad4d9*(-0x26b3+0x57c+-0x219b*-0x1)),-0xdf*-0x1d+-0x25*-0x4a+0x1*-0x2391);})[_0x25a4d0(0x71a)]('\x20\x20');}var _0x3036d3=_0x53cde3[_0x58c38b]['v'];return typeof _0x3036d3===_0x4436f2[_0x25a4d0(0xa5d)]?_0x4436f2[_0x25a4d0(0x22e)](Math[_0x25a4d0(0x679)](_0x3036d3*(-0x2486+0x1841*0x1+0x102d)),0xba*-0x1a+-0x4da*0x1+-0xdd3*-0x2):String(_0x3036d3);}}return'-';}else return _0x220570[_0x25a4d0(0x881)](_0x44f91f['abs'](_0x468179-_0x317cee),_0x4fc4a3[_0x25a4d0(0xa98)](0x10d0+-0x107*0x1d+-0x22a*-0x6,_0x220570['ioTcF'](_0x1b6e2a['abs'](_0x839b31),0x2695+0x1*0x2353+-0x6b8*0xb+0.6)));}function _0x5c52d1(_0xe8931d){var _0x1ea2f9=_0x105055,_0x579655={'nleMX':function(_0x121284,_0x4b3c92){return _0x121284+_0x4b3c92;},'plrnt':'\x20on\x20','pgAHr':_0x4436f2[_0x1ea2f9(0x6cb)],'YQunU':function(_0x338669,_0x134ed3,_0x105ecb){var _0x2559fc=_0x1ea2f9;return _0x4436f2[_0x2559fc(0xbc6)](_0x338669,_0x134ed3,_0x105ecb);},'rtvXT':function(_0x3c5538,_0x426620){return _0x3c5538===_0x426620;},'eKsrb':function(_0x4cb14a,_0x542d07){return _0x4436f2['mWMZY'](_0x4cb14a,_0x542d07);},'WrTXU':function(_0x3c3041,_0x382a90){return _0x4436f2['lomRv'](_0x3c3041,_0x382a90);},'FnInF':_0x1ea2f9(0xba4)+'n','lXfgK':'AYKlr','tFbVJ':function(_0x3b88ab,_0x3085c5){var _0x54d577=_0x1ea2f9;return _0x4436f2[_0x54d577(0xa4d)](_0x3b88ab,_0x3085c5);},'uThJv':function(_0x80afb2,_0x2efe9e){return _0x80afb2/_0x2efe9e;},'aXtOF':function(_0x3f99ac,_0x5b3a4a){return _0x4436f2['PBVjP'](_0x3f99ac,_0x5b3a4a);},'VzDli':_0x4436f2[_0x1ea2f9(0x290)],'sdXTW':function(_0x4f15e5,_0x487fbb){return _0x4f15e5===_0x487fbb;},'volAa':_0x4436f2[_0x1ea2f9(0xa25)],'bWSWv':_0x4436f2[_0x1ea2f9(0xb8c)],'NATBC':_0x4436f2[_0x1ea2f9(0x2ba)]},_0x55859a=_0x4239ee,_0x4850b3=[],_0x3b04fa;if(_0xe8931d===_0x1ea2f9(0x1ef)+'t'){var _0x525058=_0x4436f2['ScoaV'](_0xa41147,'Speed'+'\x20hack',_0x69e834['on']),_0x2b1622=_0xb043f9('div',_0x4436f2[_0x1ea2f9(0x4f5)],_0x69e834['on']?_0x4436f2[_0x1ea2f9(0x724)](_0x4436f2[_0x1ea2f9(0x757)](_0x4436f2[_0x1ea2f9(0x6ee)]('x'+_0x69e834['facto'+'r'][_0x1ea2f9(0x5ee)+'ed'](-0x35b+-0x1172+-0x14ce*-0x1)+'\x20on\x20'+_0x199153['lengt'+'h'],_0x4436f2['BQNGw']),_0x21560f),_0x4436f2[_0x1ea2f9(0x829)]):_0x1ea2f9(0xa69)+'plies'+_0x1ea2f9(0x97a)+'ment-'+_0x1ea2f9(0x838)+'\x20fiel'+_0x1ea2f9(0x442)+_0x1ea2f9(0x26a)+'eight'+_0x1ea2f9(0x2f2)+'p\x20and'+_0x1ea2f9(0xb66)+'\x20are\x20'+_0x1ea2f9(0x5a4)+_0x1ea2f9(0xb24)),_0x1c6caf=_0x410b53(_0x4436f2['uMGOC']);_0x1c6caf['appen'+'dChil'+'d'](_0x17d2d7(function(){var _0x48e85f=_0x1ea2f9;if(_0x4436f2[_0x48e85f(0x358)](_0x4436f2[_0x48e85f(0x463)],_0x48e85f(0x6b2)))return _0x69e834['on'];else _0x18dff2(_0x93a2fb(_0x3ac757[_0x48e85f(0x52b)])||_0x3939b2),_0x2f0b64();},function(_0xbf199b){var _0x276717=_0x1ea2f9;_0x4e7338(_0xbf199b,_0x69e834['facto'+'r']),_0x2b1622['textC'+'onten'+'t']=_0xbf199b?_0x579655[_0x276717(0xbd6)]('x'+_0x69e834[_0x276717(0xa81)+'r'][_0x276717(0x5ee)+'ed'](0x1d23+-0x7b*0x33+-0x4a1)+_0x579655[_0x276717(0x143)]+_0x199153['lengt'+'h'],_0x579655['pgAHr'])+_0x21560f+(_0x276717(0x279)+'es'):_0x276717(0xa69)+'plies'+'\x20move'+'ment-'+_0x276717(0x838)+'\x20fiel'+'ds\x20on'+'ly.\x20H'+'eight'+',\x20ste'+_0x276717(0x39c)+_0x276717(0xb66)+_0x276717(0x81a)+_0x276717(0x5a4)+'ed.';})),_0x525058[_0x1ea2f9(0xbdf)]['appen'+_0x1ea2f9(0x635)+'d'](_0x2b1622),_0x525058['body']['appen'+'dChil'+'d'](_0x1c6caf);var _0x254b9d=_0x4a4407(0x1e1d+0x1*0x169f+0x34bb*-0x1,0xa2*-0x38+0x792+0x1be3,0x1533+-0x26a7+0x1174+0.5,function(){var _0x58483c=_0x1ea2f9;return _0x69e834[_0x58483c(0xa81)+'r'];},function(_0xaa99a3){var _0x320d19=_0x1ea2f9;_0x579655[_0x320d19(0x58d)](_0x4e7338,_0x69e834['on'],_0xaa99a3);});_0x254b9d[_0x1ea2f9(0xb06)]['datas'+'et'][_0x1ea2f9(0x705)]='x';var _0x161703=_0x4436f2['wOoxJ'](_0x410b53,_0x4436f2[_0x1ea2f9(0xaaa)],'F8\x20/\x20'+'F6\x20al'+'so\x20st'+_0x1ea2f9(0xbe7)+'is');_0x161703[_0x1ea2f9(0x48e)+'dChil'+'d'](_0x254b9d),_0x525058[_0x1ea2f9(0xbdf)][_0x1ea2f9(0x48e)+_0x1ea2f9(0x635)+'d'](_0x161703);if(_0x57f7d2['lengt'+'h']){var _0x45e8d9=_0xb043f9(_0x1ea2f9(0x41f),_0x1ea2f9(0x37c)+'te',_0x1ea2f9(0x2bb)+_0x1ea2f9(0x2d4)+_0x57f7d2[_0x1ea2f9(0xa06)](0x1011+0x6e9*-0x3+0x4aa,-0x423+0x1fde*0x1+0x58b*-0x5)[_0x1ea2f9(0x9df)](function(_0x4ffd83){var _0x1f71a3=_0x1ea2f9,_0x4943ce={'GqFGZ':function(_0x23fe4a,_0x9c9a89){return _0x23fe4a===_0x9c9a89;},'VYTmZ':function(_0x486769,_0x16a1c0){return _0x579655['nleMX'](_0x486769,_0x16a1c0);},'lYarT':_0x1f71a3(0x9ca)+'le'};if(_0x579655['rtvXT']('lYrmq','vSEGi')){var _0x5dc9fd=_0x383b28[_0x583e40[_0x251019]];if(_0x5dc9fd&&_0x4943ce[_0x1f71a3(0xbd0)](typeof _0x5dc9fd,_0x1f71a3(0x52d)+'t')&&_0x5dc9fd['Modul'+'e']&&_0x5dc9fd['Modul'+'e'][_0x1f71a3(0x2c3)+'8']&&_0x5dc9fd['Modul'+'e']['HEAPU'+'8'][_0x1f71a3(0xaec)+'r'])return _0x32fa41[_0x1f71a3(0x1a7)+'e']=_0x4943ce[_0x1f71a3(0xa04)]('windo'+'w.'+_0xa59a99[_0x1f6470],_0x4943ce['lYarT']),_0x5dc9fd;}else return _0x579655[_0x1f71a3(0x9fe)]('0x'+(_0x4ffd83['o']<0x3*0xcc7+0x1177*-0x1+0x14de*-0x1?'?':_0x4ffd83['o'][_0x1f71a3(0x322)+'ing'](-0x4*-0x1cb+0xb16+-0x1232))+'\x20(',_0x4ffd83[_0x1f71a3(0xa02)])+')';})['join']('\x20\x20'));_0x525058[_0x1ea2f9(0xbdf)][_0x1ea2f9(0x48e)+_0x1ea2f9(0x635)+'d'](_0x45e8d9);}_0x4850b3[_0x1ea2f9(0x24d)](_0x525058);var _0x10b8eb=_0xa41147(_0x4436f2['YyDGh']),_0x1b23c5=_0x4436f2['Bhxwe'](_0xb043f9,_0x4436f2[_0x1ea2f9(0xbc1)],'sk-bt'+'n','Snaps'+_0x1ea2f9(0x206)+_0x1ea2f9(0x7ff)+'9)');_0x1b23c5[_0x1ea2f9(0x374)]=_0x4436f2[_0x1ea2f9(0xbc1)],_0x1b23c5[_0x1ea2f9(0x912)+'ck']=function(){var _0x114cc2=_0x1ea2f9;_0x579655['WrTXU'](_0x302e6f,'snaps'+_0x114cc2(0x5f6));},_0x10b8eb[_0x1ea2f9(0xbdf)]['appen'+'dChil'+'d'](_0xb043f9('div',_0x1ea2f9(0x2e4)+'esc','F9\x20\x20s'+'napsh'+'ot\x20\x20\x20'+_0x1ea2f9(0x236)+'speed'+'\x20on/o'+_0x1ea2f9(0x2b8)+_0x1ea2f9(0x694)+_0x1ea2f9(0x7c8)+'tor\x20+'+_0x1ea2f9(0x29a)+_0x1ea2f9(0x1d8)+'\x20\x20fie'+'ld\x20of'+'\x20view'+_0x1ea2f9(0xb6f)+_0x1ea2f9(0x32a)+_0x1ea2f9(0x5cd)+_0x1ea2f9(0x5ef))),_0x10b8eb['body'][_0x1ea2f9(0x48e)+_0x1ea2f9(0x635)+'d'](_0x1b23c5),_0x4850b3[_0x1ea2f9(0x24d)](_0x10b8eb);}if(_0x4436f2['AKuEJ'](_0xe8931d,_0x4436f2['xsTOs'])){var _0x3198ba=_0xa41147(_0x1ea2f9(0x96c),_0x3fc79c['on']),_0x56016f=_0x410b53(_0x4436f2['uMGOC']);_0x56016f['appen'+'dChil'+'d'](_0x17d2d7(function(){return _0x3fc79c['on'];},function(_0x3a6d40){var _0x12714c=_0x1ea2f9,_0x52a9e5={'nyatT':_0x12714c(0x4db)+'b','vduNk':function(_0x7a0225,_0x1a209f){return _0x7a0225(_0x1a209f);},'rhlka':_0x579655['FnInF']};if('VafKD'===_0x579655[_0x12714c(0x9f4)]){var _0x4db220=('1|2|0'+_0x12714c(0x154)+_0x12714c(0xa5b))['split']('|'),_0x36828d=-0x2b*-0xde+-0x50+-0x24fa;while(!![]){switch(_0x4db220[_0x36828d++]){case'0':var _0x3f0b6f=_0x293bd2(_0x12714c(0xba4)+'n',_0x52a9e5[_0x12714c(0xbe3)],_0x12714c(0x740)+'l>'+_0x37f400[_0x12714c(0x6ae)]+(_0x12714c(0x6ea)+'ll>'));continue;case'1':var _0x4cbbe1={'lmNuu':function(_0x5bfa32,_0x30a0f6){return _0x52a9e5['vduNk'](_0x5bfa32,_0x30a0f6);}};continue;case'2':var _0x37f400=_0x4cbd58[_0x6177a9];continue;case'3':_0x16a0be[_0x12714c(0x48e)+_0x12714c(0x635)+'d'](_0x3f0b6f);continue;case'4':(function(_0x18e0cd){_0x3f0b6f['oncli'+'ck']=function(){var _0x5f1abf=_0x5dd8;_0x4cbbe1[_0x5f1abf(0xab1)](_0x27a614,_0x18e0cd);};}(_0x37f400['id']));continue;case'5':_0x3f0b6f[_0x12714c(0x374)]=_0x52a9e5[_0x12714c(0x3e5)];continue;case'6':_0x3057d2[_0x37f400['id']]=_0x3f0b6f;continue;case'7':_0x3f0b6f[_0x12714c(0x9ae)]=_0x37f400['label'];continue;}break;}}else _0x31482e(_0x3a6d40,_0x3fc79c[_0x12714c(0x8be)]);})),_0x3198ba[_0x1ea2f9(0xbdf)]['appen'+'dChil'+'d'](_0x4436f2[_0x1ea2f9(0x288)](_0xb043f9,'div',_0x1ea2f9(0x2e4)+_0x1ea2f9(0x7f1),_0x1ea2f9(0xa5a)+'-spac'+'e\x20min'+_0x1ea2f9(0x459)+'\x20top-'+_0x1ea2f9(0xa10)+_0x1ea2f9(0x45b)+'ds\x20on'+_0x1ea2f9(0x76e)+'sitio'+_0x1ea2f9(0x6b4))),_0x3198ba['body'][_0x1ea2f9(0x48e)+'dChil'+'d'](_0x56016f);var _0x41e5e8=_0x4a4407(-0x1dd1+-0x802+0x25fb,-0x1d2*0x5+-0x7*0x556+0x2f14,0xe56*0x2+-0xb85+-0x151*0xd,function(){var _0x5c80dc=_0x1ea2f9;return _0x3fc79c[_0x5c80dc(0xa31)];},function(_0x1ee552){var _0x4105ce=_0x1ea2f9;_0x3fc79c[_0x4105ce(0xa31)]=_0x1ee552;});_0x41e5e8['input'][_0x1ea2f9(0x180)+'et']['unit']='m';var _0x5ee8d1=_0x410b53(_0x1ea2f9(0x45f),_0x4436f2[_0x1ea2f9(0x40a)]);_0x5ee8d1[_0x1ea2f9(0x48e)+'dChil'+'d'](_0x41e5e8),_0x3198ba['body'][_0x1ea2f9(0x48e)+'dChil'+'d'](_0x5ee8d1),_0x4850b3[_0x1ea2f9(0x24d)](_0x3198ba);var _0x3bf915=_0x4436f2[_0x1ea2f9(0x695)](_0xa41147,_0x4436f2[_0x1ea2f9(0x4e8)],_0x3fc79c['boxes']),_0x408aca=_0x4436f2['lomRv'](_0x410b53,_0x1ea2f9(0xa32)+'ed');_0x408aca[_0x1ea2f9(0x48e)+_0x1ea2f9(0x635)+'d'](_0x4436f2[_0x1ea2f9(0x82d)](_0x17d2d7,function(){var _0x10342b=_0x1ea2f9;return _0x3fc79c[_0x10342b(0x8be)];},function(_0x4d918d){if(_0x4d918d&&!_0x3933af()){_0x419332();return;}_0x4436f2['UfpPT'](_0x31482e,!![],_0x4d918d);}));var _0x13db4c=_0x55859a&&_0x55859a[_0x1ea2f9(0x162)+'s'];_0x3bf915['body'][_0x1ea2f9(0x48e)+'dChil'+'d'](_0xb043f9(_0x1ea2f9(0x41f),_0x4436f2['MVnas'],_0x13db4c&&!_0x13db4c['ident'+_0x1ea2f9(0x73d)]?_0x4436f2[_0x1ea2f9(0x73c)](_0x1ea2f9(0x2f8)+'rawin'+_0x1ea2f9(0x87c),_0x13db4c['why']||_0x1ea2f9(0xc09)+_0x1ea2f9(0x162)+'s\x20uni'+_0x1ea2f9(0x1ee)+'fied')+(_0x1ea2f9(0x87d)+'ese\x20t'+_0x1ea2f9(0x366)+'oats\x20'+'are\x20n'+'ot\x20pi'+_0x1ea2f9(0x614)+'nd\x20ya'+_0x1ea2f9(0x543)+'ess\x20F'+_0x1ea2f9(0x19a)+_0x1ea2f9(0x751)+'out\x209'+_0x1ea2f9(0x20a)+_0x1ea2f9(0x9ec)+_0x1ea2f9(0x8a9)):_0x13db4c&&!_0x13db4c['fovSa'+'ne']?_0x4436f2[_0x1ea2f9(0x218)](_0x4436f2[_0x1ea2f9(0x6af)],Math['round'](_0x13db4c[_0x1ea2f9(0x2e9)]))+(_0x1ea2f9(0x451)+'tside'+_0x1ea2f9(0x2a2)+_0x1ea2f9(0x38e)+_0x1ea2f9(0x579)+'\x20Rese'+_0x1ea2f9(0x491)+'below'+'.'):_0x4436f2['Igaty'])),_0x3bf915['body'][_0x1ea2f9(0x48e)+_0x1ea2f9(0x635)+'d'](_0x408aca);var _0x5ab629=_0x4a4407(0x70a*0x1+-0x35+0x3*-0x233,-0x16f*-0x7+-0xd1*0xd+-0x2*-0x8b,0xdf*-0x17+0x2*0xecb+-0x98b,function(){var _0x33253d=_0x1ea2f9;if(_0x4436f2[_0x33253d(0x930)](_0x4436f2['hDywv'],_0x33253d(0x8ea)))_0x593e84=_0x18b2de['keys'](_0x3a8256)[_0x33253d(0xa06)](-0x22ea+-0x220c+0x61*0xb6,0x1*-0x5ce+0x1*0x9ac+-0x3c6);else return _0xf673d5[_0x33253d(0x2e9)];},function(_0x732fe3){_0xf673d5['fov']=_0x732fe3,_0x3dc56c();});_0x5ab629[_0x1ea2f9(0xb06)][_0x1ea2f9(0x180)+'et']['unit']='°';var _0x110cbe=_0x410b53(_0x4436f2[_0x1ea2f9(0x4c5)],'[\x20and'+_0x1ea2f9(0x5fa)+'so\x20st'+'ep\x20th'+'is');_0x110cbe[_0x1ea2f9(0x48e)+_0x1ea2f9(0x635)+'d'](_0x5ab629);var _0x1a16b9=_0x410b53(_0x4436f2['mXcLo'],_0x4436f2[_0x1ea2f9(0x1ba)]),_0x3f638f=_0xb043f9(_0x4436f2['ptlzp'],_0x4436f2[_0x1ea2f9(0x34d)],'Reset');_0x3f638f['addEv'+'entLi'+_0x1ea2f9(0x343)+'r'](_0x4436f2['HIiik'],function(){var _0x4e12fa=_0x1ea2f9;_0xf673d5[_0x4e12fa(0x2e9)]=0x4d2+-0x1*0x67d+0x1f6,_0xf673d5['pitch'+'Off']=-0x7*0x167+0x3*-0xa01+-0x27d4*-0x1,_0xf673d5['yawOf'+'f']=0xa7*-0x27+0xe6f+-0xb02*-0x1,_0x4436f2['DnTsU'](_0x3dc56c),_0x3f2d5a(_0x1fff63['cat']);}),_0x1a16b9[_0x1ea2f9(0x48e)+'dChil'+'d'](_0x3f638f),_0x3bf915['body'][_0x1ea2f9(0x48e)+_0x1ea2f9(0x635)+'d'](_0x110cbe),_0x3bf915[_0x1ea2f9(0xbdf)]['appen'+_0x1ea2f9(0x635)+'d'](_0x1a16b9);var _0x503c2c=_0x55859a&&_0x55859a[_0x1ea2f9(0x204)];_0x3bf915[_0x1ea2f9(0xbdf)][_0x1ea2f9(0x48e)+_0x1ea2f9(0x635)+'d'](_0x4436f2['GSuNA'](_0xb043f9,_0x4436f2[_0x1ea2f9(0x501)],_0x1ea2f9(0x37c)+'te',_0x4436f2[_0x1ea2f9(0x160)](_0x4436f2['npnAY'](_0x1ea2f9(0x52c)+'\x20',_0x503c2c?_0x503c2c[_0x1ea2f9(0x6c0)+_0x1ea2f9(0x4ae)]?'Mouse'+'Look\x20'+_0x503c2c['mouse'+'Look']+(_0x503c2c['camer'+'a']?_0x4436f2[_0x1ea2f9(0x503)]+_0x503c2c['camer'+'a']:''):_0x4436f2[_0x1ea2f9(0x3fe)]:_0x1ea2f9(0x5f0)+_0x1ea2f9(0x658)+_0x1ea2f9(0x3e9)+'t')+(_0x13db4c?_0x4436f2['kEKHF'](_0x4436f2[_0x1ea2f9(0x457)](_0x4436f2['dYZCS']('\x0aread'+_0x1ea2f9(0x9d0)+_0x1ea2f9(0x893),_0x4436f2['ACtEH'](_0x13db4c[_0x1ea2f9(0x3ba)+'tch'],null)?'-':Math[_0x1ea2f9(0x679)](_0x13db4c['rawPi'+_0x1ea2f9(0x305)])),_0x1ea2f9(0xc06)+'C='),_0x4436f2[_0x1ea2f9(0xad9)](_0x13db4c['rawYa'+'w'],null)?'-':Math['round'](_0x13db4c[_0x1ea2f9(0xb42)+'w']))+(_0x13db4c[_0x1ea2f9(0x46f)+_0x1ea2f9(0x73d)]?'\x20\x20(ac'+'cepte'+_0x1ea2f9(0x4cb)+_0x1ea2f9(0x8f4)+'/yaw)':_0x1ea2f9(0x97f)+'jecte'+'d)'):''),_0xf673d5[_0x1ea2f9(0x8f4)+'Off']||_0xf673d5['yawOf'+'f']?_0x4436f2[_0x1ea2f9(0x457)](_0x4436f2[_0x1ea2f9(0x3a9)](_0x4436f2[_0x1ea2f9(0x386)]('\x0apitc'+'h\x20',Math[_0x1ea2f9(0x679)](_0xf673d5[_0x1ea2f9(0x8f4)+'Off'])),_0x4436f2[_0x1ea2f9(0x31d)]),Math['round'](_0xf673d5['yawOf'+'f'])):''))),_0x4850b3['push'](_0x3bf915);}if(_0x4436f2[_0x1ea2f9(0xbe1)](_0xe8931d,_0x1ea2f9(0x52b)+'s')){var _0x31fea5=[[_0x1ea2f9(0x7b1),'VERSI'+'ON',_0x55859a?_0x55859a[_0x1ea2f9(0x8cf)+'on']:'-'],[_0x4436f2['Hrtcq'],_0x1ea2f9(0xa6f)+_0x1ea2f9(0x415)+'regis'+'tered',_0x55859a?_0x4436f2['HZYTw'](_0x55859a['hooks'+'Appli'+'ed'],_0x1ea2f9(0x245))+_0x55859a[_0x1ea2f9(0x2db)+'Regis'+'tered'+_0x1ea2f9(0xb08)]:'-'],[_0x1ea2f9(0x762),_0x4436f2['SBbDW'],_0x55859a&&_0x55859a[_0x1ea2f9(0x99d)+_0x1ea2f9(0x12e)]&&_0x55859a['wasmM'+_0x1ea2f9(0x12e)][_0x1ea2f9(0x414)+_0x1ea2f9(0x297)]?Math[_0x1ea2f9(0x679)](_0x4436f2[_0x1ea2f9(0x9d3)](_0x55859a['wasmM'+'emory']['bytes'],-0xec478+0x42403*-0x6+0x379c8a))+_0x4436f2['xgVWZ']+_0x55859a[_0x1ea2f9(0x99d)+_0x1ea2f9(0x12e)]['atMs']+'ms':'-'],[_0x1ea2f9(0xbd2)+'rs',_0x4436f2[_0x1ea2f9(0x5f3)],_0x55859a&&_0x55859a[_0x1ea2f9(0x5b4)]?_0x4436f2[_0x1ea2f9(0xa9d)](String,_0x55859a['esp'][_0x1ea2f9(0x73b)+'rCoun'+'t']):'-'],['Enemi'+'es',_0x4436f2['yLgdO'],_0x55859a&&_0x55859a[_0x1ea2f9(0x5b4)]?_0x4436f2[_0x1ea2f9(0x9f1)](String,_0x55859a[_0x1ea2f9(0x5b4)]['enemy'+_0x1ea2f9(0x434)]):'-'],['Camer'+'a',_0x1ea2f9(0x722)+'he\x20li'+_0x1ea2f9(0x231)+_0x1ea2f9(0x47b),_0x55859a&&_0x55859a[_0x1ea2f9(0x5b4)]&&_0x55859a[_0x1ea2f9(0x5b4)][_0x1ea2f9(0x95f)+'a']?_0x55859a['esp']['camer'+'a']+'\x20('+_0x55859a[_0x1ea2f9(0x5b4)]['camer'+_0x1ea2f9(0x712)]+')':'-']];for(_0x3b04fa=0x95f*-0x1+0x17ee+-0xe8f;_0x3b04fa<_0x31fea5[_0x1ea2f9(0xb7c)+'h'];_0x3b04fa++){var _0x1fcb54=_0x410b53(_0x31fea5[_0x3b04fa][0x7*0x556+0x1ec7*-0x1+-0x231*0x3]),_0x3119ad=_0xb043f9(_0x4436f2['LjFpb'],'sk-va'+'l');_0x3119ad['style']['minWi'+_0x1ea2f9(0x99a)]='0',_0x3119ad[_0x1ea2f9(0x4d9)][_0x1ea2f9(0x5fb)]='1',_0x3119ad['style']['textA'+'lign']=_0x4436f2[_0x1ea2f9(0x35c)],_0x3119ad[_0x1ea2f9(0x17e)+'onten'+'t']=String(_0x31fea5[_0x3b04fa][-0x55b+0x3d*-0x6d+-0x2a*-0xbf]),_0x3119ad['datas'+'et']['k']=_0x31fea5[_0x3b04fa][-0x2*0x99b+0x59d+0xd9a],_0x1fcb54['appen'+_0x1ea2f9(0x635)+'d'](_0x3119ad);var _0x5115f6=_0x4850b3['lengt'+'h']?_0x4850b3[_0x4850b3[_0x1ea2f9(0xb7c)+'h']-(0x116*-0x19+0x1*-0xbe9+0x2710)]:null;!_0x5115f6&&(_0x4436f2[_0x1ea2f9(0x8d7)](_0x4436f2[_0x1ea2f9(0x32b)],_0x1ea2f9(0x6dd))?_0xdc4403[_0x1ea2f9(0xa60)]=_0x579655[_0x1ea2f9(0x844)](_0xdeefad,_0x16ea5f&&_0x1c5831['messa'+'ge']||_0xb40cd1):(_0x5115f6=_0xa41147('Sessi'+'on',![]),_0x4850b3[_0x1ea2f9(0x24d)](_0x5115f6))),_0x5115f6[_0x1ea2f9(0xbdf)][_0x1ea2f9(0x48e)+'dChil'+'d'](_0x1fcb54),_0x5115f6['body']['lastC'+_0x1ea2f9(0x755)]['sp']=_0x3119ad;}var _0x298d5f=_0xa41147(_0x4436f2[_0x1ea2f9(0x8f0)],![]),_0x2136c0=[['Posit'+_0x1ea2f9(0x771),_0x55859a&&_0x55859a['local']&&_0x55859a[_0x1ea2f9(0x2b6)][_0x1ea2f9(0x4d6)]?_0x1ea2f9(0x2d8)+'ntrol'+_0x1ea2f9(0x560)+_0x55859a[_0x1ea2f9(0x2b6)]['posAt']:_0x4436f2[_0x1ea2f9(0x45c)],_0x55859a&&_0x55859a[_0x1ea2f9(0x2b6)]&&_0x55859a['local'][_0x1ea2f9(0x384)]?_0x55859a['local']['feet'][_0x1ea2f9(0x9df)](function(_0x134f92){return _0x579655['uThJv'](Math['round'](_0x579655['aXtOF'](_0x134f92,0x1c9a+0x1*-0xc9a+-0xf9c)),0x25*-0xd5+0x38d*-0x6+0x347b);})['join']('\x20\x20'):'-'],[_0x1ea2f9(0x933),_0x4436f2['xQdnj']('+',_0x78cdb1)+'m',_0x55859a&&_0x55859a['local']&&_0x55859a[_0x1ea2f9(0x2b6)][_0x1ea2f9(0x7d7)]?_0x55859a[_0x1ea2f9(0x2b6)][_0x1ea2f9(0x7d7)][_0x1ea2f9(0x9df)](function(_0x30f9f4){var _0x22f808=_0x1ea2f9,_0x1f052b={'oEHiK':function(_0x2ca245){return _0x2ca245();},'sERRK':function(_0x15ce41,_0x4b133f){return _0x15ce41<_0x4b133f;}};if('QfAhs'!=='wOWcw')return _0x4436f2[_0x22f808(0xabc)](Math[_0x22f808(0x679)](_0x30f9f4*(0x3b*0x42+-0x1b*0x117+0xe9b)),0x16c*0x15+0xdd*0x16+-0x1*0x3076);else{var _0x2a0deb=(_0x22f808(0xbde)+_0x22f808(0x1e6)+'3|2|1')['split']('|'),_0x3f9f0b=-0x13c3+0x18ae+0x1*-0x4eb;while(!![]){switch(_0x2a0deb[_0x3f9f0b++]){case'0':var _0xe59a66=_0x1f052b['oEHiK'](_0x5a61fc);continue;case'1':return _0x39d9b0;case'2':_0x39d9b0[_0x22f808(0x52b)+_0x22f808(0x8d6)+'er']=typeof _0x3d76ff;continue;case'3':try{_0x39d9b0['hasMo'+'dule']=!!(_0xe59a66&&_0xe59a66['Modul'+'e']),_0x39d9b0[_0x22f808(0xab7)+'8']=!!(_0xe59a66&&_0xe59a66[_0x22f808(0x241)+'e']&&_0xe59a66[_0x22f808(0x241)+'e'][_0x22f808(0x2c3)+'8']),_0x39d9b0[_0x22f808(0xbb7)+_0x22f808(0x3cd)]=_0x39d9b0['heapU'+'8']?_0xe59a66[_0x22f808(0x241)+'e'][_0x22f808(0x2c3)+'8']['lengt'+'h']:0x1549+-0x2325*-0x1+-0x386e;}catch(_0x55e20f){_0x39d9b0['hasMo'+'dule']=![],_0x39d9b0[_0x22f808(0xab7)+'8']=![],_0x39d9b0['heapB'+_0x22f808(0x3cd)]=0x9a2+0x9*0x425+0x59*-0x87;}continue;case'4':_0x39d9b0[_0x22f808(0xabd)+_0x22f808(0x754)]=_0x41cf23[_0x22f808(0x1a7)+'e'];continue;case'5':var _0x512ba0=['unity'+_0x22f808(0x7dc)+_0x22f808(0x455),_0x22f808(0x63c)+_0x22f808(0x478),_0x22f808(0xa8d),_0x22f808(0x63c)+_0x22f808(0x7dc)+'nceWr'+'apper'];continue;case'6':var _0x39d9b0={};continue;case'7':for(var _0x113f00=0x1574+0x11f0+-0x4*0x9d9;_0x1f052b[_0x22f808(0xaa3)](_0x113f00,_0x512ba0[_0x22f808(0xb7c)+'h']);_0x113f00++){var _0x4239f0=_0x512ba0[_0x113f00],_0x182a7d=typeof _0x3f4c46[_0x4239f0];_0x39d9b0[_0x4239f0]=_0x182a7d===_0x22f808(0x149)+'ined'?'undef'+_0x22f808(0xb6c):_0x182a7d;}continue;}break;}}})[_0x1ea2f9(0x71a)]('\x20\x20'):'-'],[_0x1ea2f9(0x4ed)+'speed','0x10',_0x4436f2['iFnja'](_0x430e63,_0x55859a,_0x4436f2[_0x1ea2f9(0x45c)],0xfe4+0x665*-0x4+0x9c0)],[_0x1ea2f9(0x3ab)+'t\x20spe'+'ed',_0x1ea2f9(0x3c9),_0x4436f2['BDuFB'](_0x430e63,_0x55859a,_0x1ea2f9(0x2d8)+'ntrol'+'ler',-0x103+0x545*-0x7+0x2626)],[_0x1ea2f9(0x452)+_0x1ea2f9(0x171)+'t',_0x1ea2f9(0x6d4),_0x430e63(_0x55859a,'FPSco'+_0x1ea2f9(0x773)+'ler',-0x12c3+-0x29*-0xeb+-0x2f6*0x6)],[_0x4436f2[_0x1ea2f9(0x6e5)],_0x4436f2['wcOPu'],_0x430e63(_0x55859a,_0x1ea2f9(0x53d)+_0x1ea2f9(0x18d)+'pt',-0x2453+0x56b+0x1fa8)]];for(_0x3b04fa=-0x1be+-0x2108+0x22c6;_0x3b04fa<_0x2136c0[_0x1ea2f9(0xb7c)+'h'];_0x3b04fa++){var _0x2a9cd8=_0x4436f2[_0x1ea2f9(0xb5f)](_0x410b53,_0x2136c0[_0x3b04fa][-0x703*0x2+-0xf43+0x1*0x1d49]),_0x49ce82=_0xb043f9(_0x4436f2[_0x1ea2f9(0x39b)],_0x4436f2['FMmGM']);_0x49ce82[_0x1ea2f9(0x4d9)][_0x1ea2f9(0x43a)+_0x1ea2f9(0x99a)]='0',_0x49ce82[_0x1ea2f9(0x4d9)][_0x1ea2f9(0x5fb)]='1',_0x49ce82['style']['textA'+_0x1ea2f9(0x6da)]=_0x4436f2['PQAkc'],_0x49ce82[_0x1ea2f9(0x17e)+'onten'+'t']=String(_0x2136c0[_0x3b04fa][-0x1df7+0x9*-0xdd+-0x25be*-0x1]),_0x49ce82['datas'+'et']['k']=_0x2136c0[_0x3b04fa][0xd*0x99+0x2b1*-0xd+0x1b39],_0x2a9cd8[_0x1ea2f9(0x48e)+_0x1ea2f9(0x635)+'d'](_0x49ce82),_0x298d5f[_0x1ea2f9(0xbdf)][_0x1ea2f9(0x48e)+'dChil'+'d'](_0x2a9cd8),_0x298d5f[_0x1ea2f9(0xbdf)]['lastC'+_0x1ea2f9(0x755)]['sp']=_0x49ce82;}_0x4850b3['push'](_0x298d5f);}if(_0xe8931d==='log'){var _0x3c7dce=_0xa41147('Diagn'+'ostic'+'s',![]),_0x16c1cb=_0x55859a&&_0x55859a['warni'+_0x1ea2f9(0x26c)]&&_0x55859a[_0x1ea2f9(0x382)+'ngs'][_0x1ea2f9(0xb7c)+'h']?_0x55859a[_0x1ea2f9(0x382)+_0x1ea2f9(0x26c)][_0x1ea2f9(0x71a)]('\x0a'):_0x4436f2[_0x1ea2f9(0xb05)];_0x3c7dce['body'][_0x1ea2f9(0x48e)+_0x1ea2f9(0x635)+'d'](_0xb043f9(_0x1ea2f9(0x41f),_0x4436f2['fwOeC'],_0x16c1cb)),_0x4850b3[_0x1ea2f9(0x24d)](_0x3c7dce);var _0x50c71c=_0x4436f2[_0x1ea2f9(0x3b0)](_0xa41147,'Repor'+'t',![]),_0x5f473e=_0xb043f9('butto'+'n',_0x4436f2['lHClu'],_0x1ea2f9(0xb3a)+_0x1ea2f9(0x91e)+_0x1ea2f9(0x9d2)+_0x1ea2f9(0x805)+'rd');_0x5f473e[_0x1ea2f9(0x374)]='butto'+'n',_0x5f473e[_0x1ea2f9(0x912)+'ck']=function(){var _0x32e565=_0x1ea2f9;try{if(_0x579655['sdXTW']('oECJG',_0x32e565(0x368)))_0x217826['warn'](_0x579655['VzDli'],_0x32e565(0x4b3)+':'+_0x5abbaa,_0x33ff);else{var _0x1ceb11=_0x4f70e9+'\x0a'+JSON[_0x32e565(0x17d)+_0x32e565(0x67a)](_0x55859a,null,0xb99*-0x2+-0x1cee+0x3421)+'\x0a'+_0x296cf3;if(navigator['clipb'+_0x32e565(0x564)]&&navigator[_0x32e565(0x551)+_0x32e565(0x564)][_0x32e565(0xb63)+'Text'])navigator['clipb'+_0x32e565(0x564)][_0x32e565(0xb63)+_0x32e565(0x79d)](_0x1ceb11)[_0x32e565(0x99b)](function(){_0x5f473e['textC'+'onten'+'t']='Copie'+'d';});else _0x5f473e[_0x32e565(0x17e)+_0x32e565(0x14e)+'t']=_0x579655['volAa'];}}catch(_0x1a572d){if(_0x32e565(0x84f)===_0x579655['bWSWv'])return _0x2f0f3a['on'];else _0x5f473e['textC'+'onten'+'t']=_0x579655[_0x32e565(0x5a1)];}},_0x50c71c[_0x1ea2f9(0xbdf)]['appen'+_0x1ea2f9(0x635)+'d'](_0xb043f9(_0x4436f2[_0x1ea2f9(0x501)],'sk-md'+_0x1ea2f9(0x7f1),_0x1ea2f9(0xadd)+'\x20the\x20'+_0x1ea2f9(0x381)+'\x20thin'+_0x1ea2f9(0x9e2)+_0x1ea2f9(0x312)+'ethin'+'g\x20loo'+_0x1ea2f9(0x999)+'ong.')),_0x50c71c[_0x1ea2f9(0xbdf)][_0x1ea2f9(0x48e)+'dChil'+'d'](_0x5f473e),_0x4850b3[_0x1ea2f9(0x24d)](_0x50c71c);}return _0x4850b3;}function _0x5eb075(){if(_0x1fff63['open'])_0x4436f2['jperY'](_0x5909bf,!![]);}function _0x2f0cae(){var _0x20ad0c=_0x105055;try{var _0xf98520=localStorage['getIt'+'em'](_0x33329f);if(!_0xf98520)return;var _0x4a2b32=JSON['parse'](_0xf98520);if(_0x4a2b32&&_0x4436f2[_0x20ad0c(0x142)](typeof _0x4a2b32['x'],_0x4436f2['NMAxC'])&&_0x4436f2[_0x20ad0c(0x8d1)](typeof _0x4a2b32['y'],'numbe'+'r'))_0x1fff63['pos']=_0x4a2b32;}catch(_0x27b686){}}function _0x45cc48(){var _0xbd87a2=_0x105055;try{localStorage[_0xbd87a2(0xbc5)+'em'](_0x33329f,JSON[_0xbd87a2(0x17d)+_0xbd87a2(0x67a)](_0x1fff63['pos']));}catch(_0x3372db){}}function _0x5da826(){var _0x4e82cd=_0x105055,_0x10a10f=_0x1fff63['root'];if(!_0x10a10f||!_0x10a10f[_0x4e82cd(0x4d9)])return;if(_0x1fff63[_0x4e82cd(0x18e)])_0x10a10f[_0x4e82cd(0x4d9)][_0x4e82cd(0x226)]=_0x1fff63[_0x4e82cd(0x18e)]['x']+'px',_0x10a10f[_0x4e82cd(0x4d9)]['top']=_0x4436f2['lkXgk'](_0x1fff63['pos']['y'],'px'),_0x10a10f[_0x4e82cd(0x4d9)]['right']=_0x4436f2[_0x4e82cd(0x22b)],_0x10a10f['style']['botto'+'m']=_0x4e82cd(0x650);else{if(_0x4436f2[_0x4e82cd(0x4b2)]===_0x4e82cd(0x40c))_0x10a10f[_0x4e82cd(0x4d9)]['left']=_0x4436f2[_0x4e82cd(0x22b)],_0x10a10f['style'][_0x4e82cd(0x3d5)]=_0x4436f2['IZsle'],_0x10a10f[_0x4e82cd(0x4d9)][_0x4e82cd(0xa10)]=_0x4e82cd(0x1f0),_0x10a10f[_0x4e82cd(0x4d9)][_0x4e82cd(0xbc8)+'m']='24px';else return![];}}function _0x1e92d2(_0x1064dc,_0x41896a){var _0x321975=_0x105055,_0x1f510a={'JzegV':_0x4436f2['POyUH'],'jdlaX':_0x4436f2['fIGwB'],'SfKKn':_0x321975(0x993)+'a-esp','shuIM':function(_0x46cbae,_0x3864e8){return _0x46cbae+_0x3864e8;},'UKenc':_0x4436f2['qVXYx'],'FhKlE':_0x4436f2[_0x321975(0x899)],'lyiyx':function(_0x4c1720,_0x427b0e){return _0x4436f2['nMhnG'](_0x4c1720,_0x427b0e);},'XjMJS':'ocxBW','uLNMK':_0x4436f2['axNSn'],'BPKgk':function(_0x5aec21,_0x2586a1){return _0x4436f2['xZWaY'](_0x5aec21,_0x2586a1);},'danlA':function(_0x1b75f9,_0x7a0dfa){return _0x1b75f9===_0x7a0dfa;},'FLZSP':function(_0x1e22a4,_0x2926e2){return _0x1e22a4-_0x2926e2;},'IXFaI':function(_0x395a36,_0x134be5){return _0x4436f2['MgZVr'](_0x395a36,_0x134be5);},'jHVBm':_0x4436f2['hCnoG'],'NxUUb':_0x321975(0xa08),'jPrAq':_0x4436f2['VrkxI'],'mJxBK':function(_0x4fb9ea){var _0x6d92d=_0x321975;return _0x4436f2[_0x6d92d(0x15f)](_0x4fb9ea);}};try{var _0x5d002e=![],_0x3a2158=-0xc0f+0xbdc+0x33,_0x1dcea9=0x1*-0x8e9+0x25d9+-0x1cf0;_0x41896a[_0x321975(0x4d9)][_0x321975(0x7a6)+'r']='grab',_0x41896a[_0x321975(0x4d9)][_0x321975(0x7d6)+'Actio'+'n']=_0x321975(0x576);var _0x426931=function(_0x43501c){var _0x3be587=_0x321975,_0x379c40={'PozGB':_0x1f510a[_0x3be587(0x4ac)],'DlyQf':_0x1f510a[_0x3be587(0x7a0)],'Gkdon':_0x1f510a['SfKKn'],'tcINZ':function(_0x2a0d7a,_0x5a0bcd){var _0x1c2ae3=_0x3be587;return _0x1f510a[_0x1c2ae3(0x91d)](_0x2a0d7a,_0x5a0bcd);},'JveDT':_0x1f510a[_0x3be587(0x5b0)],'nhgsz':'paddi'+_0x3be587(0x56e)+_0x3be587(0x41a)+_0x3be587(0x5fd)+'x/1.3'+_0x3be587(0x9fc)+'onosp'+_0x3be587(0x21a)+_0x3be587(0x569)+_0x3be587(0xa3a)+_0x3be587(0x181)+'ce;co'+'lor:#'+_0x3be587(0x707)+'9;','yhtKF':_0x1f510a[_0x3be587(0x1c7)],'caWbO':_0x3be587(0x991)+'ra-es'+'p-cv'};_0x5d002e=!![],_0x41896a['style']['curso'+'r']='grabb'+_0x3be587(0x1c0);var _0x53ae97={'left':parseFloat(_0x1064dc['style'][_0x3be587(0x226)])||-0x1a*-0x49+-0x23e+-0x52c,'top':parseFloat(_0x1064dc['style'][_0x3be587(0x3d5)])||-0x10e5+-0x139a+0x247f};if(!_0x1064dc['style'][_0x3be587(0x226)]||_0x1064dc[_0x3be587(0x4d9)][_0x3be587(0x226)]===_0x3be587(0x650)){if(_0x1f510a[_0x3be587(0xbcc)](_0x1f510a['XjMJS'],_0x1f510a[_0x3be587(0x3d0)]))_0x53ae97[_0x3be587(0x226)]=_0x1f510a[_0x3be587(0x356)](window['inner'+_0x3be587(0x54f)]||-0x2333*-0x1+-0x2*-0x19c+-0x266b,_0x1064dc['offse'+_0x3be587(0x682)+'h']||-0x6a9+-0x201a+0x292f*0x1)-(0x16*0xd7+-0xcaf+0x1*-0x5b3);else{if(_0x152b8a&&_0x44f194[_0x3be587(0xaec)+'r']&&_0x2d1ce2[_0x3be587(0xaec)+'r'][_0x3be587(0x401)+'ength'])return _0x45a205['sourc'+'e']=_0xd293b['sourc'+'e']||_0x379c40[_0x3be587(0x7ab)],new _0x24d8ed(_0x5a8f2e[_0x3be587(0xaec)+'r']);}}if(!_0x1064dc['style']['top']||_0x1f510a['danlA'](_0x1064dc[_0x3be587(0x4d9)]['top'],_0x3be587(0x650))){if(_0x1f510a[_0x3be587(0xbcc)](_0x3be587(0x54a),_0x3be587(0x3df)))_0x53ae97[_0x3be587(0x3d5)]=_0x1f510a['FLZSP'](window[_0x3be587(0x272)+_0x3be587(0xbe5)+'t']||0x157c+-0x1*0xf67+-0x615,_0x1064dc['offse'+_0x3be587(0x982)+'ht']||0x9e*0x3e+-0x15*-0x179+-0x43a1)-(-0xbae+0x1958+-0xd92);else{if(_0x257fba)return _0x1a4edd;try{if(!_0x2b251c[_0x3be587(0xbdf)]||!_0x2ddefc[_0x3be587(0xbdf)]['appen'+_0x3be587(0x635)+'d'])return null;var _0x5a9654=_0xef8f[_0x3be587(0x4c9)+'eElem'+_0x3be587(0x803)](_0x379c40['DlyQf']);_0x5a9654['id']=_0x379c40['Gkdon'],_0x5a9654[_0x3be587(0x4d9)][_0x3be587(0x3be)+'xt']=_0x379c40['tcINZ'](_0x379c40[_0x3be587(0x60e)]+(_0x3be587(0x323)+_0x3be587(0x679)+_0x3be587(0xa12)+'(21,1'+_0x3be587(0x878)+_0x3be587(0xa38)+_0x3be587(0x823)+_0x3be587(0x5df)+'\x20soli'+_0x3be587(0x55b)+_0x3be587(0x63f)+',143,'+_0x3be587(0x8b9)+'4);bo'+_0x3be587(0xb3d)+'radiu'+_0x3be587(0x84b)+'x;')+_0x379c40['nhgsz'],_0x379c40[_0x3be587(0x8af)]),_0x5a9654['inner'+_0x3be587(0x608)]=_0x379c40['tcINZ']('<canv'+'as\x20id'+_0x3be587(0x530)+_0x3be587(0x8a0)+'sp-cv'+'\x22\x20wid'+'th=\x221'+_0x3be587(0x86a)+'eight'+_0x3be587(0xc01)+'\x22\x20sty'+_0x3be587(0x6e2)+_0x3be587(0x443)+'y:blo'+_0x3be587(0x526)+'/canv'+_0x3be587(0x97c),_0x3be587(0x62d)+_0x3be587(0x8ab)+'akura'+_0x3be587(0x2d0)+_0x3be587(0x96f)+_0x3be587(0x9e3)+_0x3be587(0x359)+_0x3be587(0x13b)+_0x3be587(0x6c3)+'ter\x22>'+_0x3be587(0x841)+'>');var _0x447c1f={'cv':{'getContext':function(){return null;}},'el':_0x5a9654};_0x1bd924['body']['appen'+_0x3be587(0x635)+'d'](_0x5a9654),_0x3cfd52={'el':_0x5a9654,'cv':_0x5a9654[_0x3be587(0x68d)+_0x3be587(0xaca)+'tor'](_0x379c40['caWbO']),'lg':_0x5a9654['query'+_0x3be587(0xaca)+_0x3be587(0xbb9)](_0x3be587(0x991)+'ra-es'+_0x3be587(0x148))};if(!_0x341fad['cv']||!_0x598a81['cv']['getCo'+_0x3be587(0x274)])_0x3ff5b2=_0x447c1f;return _0x3b4f3f;}catch(_0x23c7e4){return null;}}}_0x3a2158=_0x1f510a[_0x3be587(0x356)](_0x43501c[_0x3be587(0x37b)+'tX']||-0x2af*0xd+-0x62e*-0x6+-0x231,_0x53ae97['left']),_0x1dcea9=(_0x43501c['clien'+'tY']||-0xa13*-0x1+0x22ed+0xa*-0x480)-_0x53ae97[_0x3be587(0x3d5)];try{_0x43501c['preve'+'ntDef'+_0x3be587(0xa58)]();}catch(_0x1ddc62){}},_0x4f6fb9=function(_0x52da6f){var _0x54f250=_0x321975,_0xf17a6d=(_0x54f250(0xa64)+_0x54f250(0x5af)+_0x54f250(0x4e0)+'|7|3')[_0x54f250(0xb19)]('|'),_0x52cdbe=0x2*-0xdb2+-0x19*-0x189+-0xafd;while(!![]){switch(_0xf17a6d[_0x52cdbe++]){case'0':_0x1064dc[_0x54f250(0x4d9)][_0x54f250(0xa10)]='auto';continue;case'1':_0x1064dc[_0x54f250(0x4d9)]['top']=_0x4436f2['IFuUZ'](_0x493086,'px');continue;case'2':_0x1064dc['style']['left']=_0x59badc+'px';continue;case'3':_0x1fff63[_0x54f250(0x18e)]={'x':_0x59badc,'y':_0x493086};continue;case'4':if(!_0x5d002e)return;continue;case'5':_0x493086=Math['max'](0xa50+-0x1*0x1795+-0xd4d*-0x1,Math[_0x54f250(0x950)](_0x4436f2[_0x54f250(0x594)]((window[_0x54f250(0x272)+'Heigh'+'t']||-0x1f8b+0x25*0xef+-0x180*0x2)-_0x313679,-0xa4*0x25+-0x2f3*0x7+0xecb*0x3),_0x493086));continue;case'6':_0x59badc=Math[_0x54f250(0xa98)](-0x1e69+-0xb*-0x282+-0x2db*-0x1,Math['min']((window[_0x54f250(0x272)+'Width']||0x13d+-0xe11+0xcd4)-_0x54e3f1-(0x1ec9*-0x1+-0x1d54+0x3c25),_0x59badc));continue;case'7':_0x1064dc[_0x54f250(0x4d9)]['botto'+'m']=_0x54f250(0x650);continue;case'8':var _0x59badc=_0x4436f2['Qdmjt'](_0x52da6f[_0x54f250(0x37b)+'tX']||0x1*-0x180e+-0xfe*-0x27+0x1*-0xea4,_0x3a2158),_0x493086=(_0x52da6f[_0x54f250(0x37b)+'tY']||-0xefd+0x18e+-0x13*-0xb5)-_0x1dcea9;continue;case'9':var _0x54e3f1=_0x1064dc[_0x54f250(0xb2e)+_0x54f250(0x682)+'h']||0x1*-0x231f+-0x778+0x2d03,_0x313679=_0x1064dc[_0x54f250(0xb2e)+_0x54f250(0x982)+'ht']||0x22fe+-0x1d3f+-0x3*0x165;continue;}break;}},_0x2777e9=function(){var _0x1bbc6f=_0x321975,_0x3472d3={'JbRpy':function(_0x6e392b,_0x2ff46e){return _0x1f510a['IXFaI'](_0x6e392b,_0x2ff46e);},'vTtIA':function(_0x3fa14b,_0x1eb204){return _0x3fa14b+_0x1eb204;}};if(_0x1f510a[_0x1bbc6f(0x546)](_0x1f510a['jHVBm'],_0x1f510a[_0x1bbc6f(0x29e)])){var _0x187329=_0x2ec3d9[_0x1d4e0d],_0x2ce903=_0x2ffc88[_0x4b99a0];if(_0x187329!==_0x2ce903)_0x363791['push'](_0x3472d3[_0x1bbc6f(0x9d9)](_0x3472d3[_0x1bbc6f(0x13c)](_0x3472d3[_0x1bbc6f(0x13c)](_0x21a0be,':\x20'),_0x187329),_0x1bbc6f(0xa3f))+_0x2ce903);}else{if(!_0x5d002e)return;_0x5d002e=![],_0x41896a[_0x1bbc6f(0x4d9)]['curso'+'r']=_0x1f510a[_0x1bbc6f(0x575)],_0x1f510a['mJxBK'](_0x45cc48);}};_0x41896a[_0x321975(0x89d)+'entLi'+'stene'+'r'](_0x4436f2[_0x321975(0x4e6)],_0x426931),window['addEv'+'entLi'+'stene'+'r'](_0x321975(0x6c0)+'move',_0x4f6fb9),window['addEv'+_0x321975(0x66a)+'stene'+'r']('mouse'+'up',_0x2777e9),_0x41896a[_0x321975(0x89d)+_0x321975(0x66a)+_0x321975(0x343)+'r'](_0x4436f2[_0x321975(0x2f9)],_0x426931,{'passive':![]}),window['addEv'+_0x321975(0x66a)+_0x321975(0x343)+'r'](_0x4436f2[_0x321975(0x6de)],_0x4f6fb9,{'passive':![]}),window['addEv'+_0x321975(0x66a)+_0x321975(0x343)+'r'](_0x4436f2[_0x321975(0xaa9)],_0x2777e9);}catch(_0x52cf69){}}function _0x207864(){var _0x13903c=_0x105055,_0x408cdc={'WOYpk':function(_0x40fd59,_0x1b4429){return _0x40fd59(_0x1b4429);}};if(_0x4436f2[_0x13903c(0x540)]===_0x4436f2['RflTx']){if(_0x1fff63[_0x13903c(0x406)])return _0x1fff63[_0x13903c(0xb26)];try{if(_0x4436f2[_0x13903c(0x42c)]!==_0x13903c(0x1ad)){if(!document['body']||!document[_0x13903c(0xbdf)]['appen'+'dChil'+'d'])return null;if(!document[_0x13903c(0xa7d)+_0x13903c(0x78c)+'ById']('sakur'+_0x13903c(0x815)+'u-css')){if(_0x4436f2['BLMoz']!==_0x4436f2['BLMoz'])_0x38b18a=_0x28d289();else{var _0x517484=document['creat'+'eElem'+'ent'](_0x13903c(0x4d9));_0x517484['id']=_0x13903c(0x993)+'a-men'+_0x13903c(0x752),_0x517484[_0x13903c(0x17e)+_0x13903c(0x14e)+'t']=_0x5bb76b,(document[_0x13903c(0x83f)]||document[_0x13903c(0x3d7)+_0x13903c(0x513)+'ement'])[_0x13903c(0x48e)+'dChil'+'d'](_0x517484);}}var _0x2e5ec9=_0x4436f2[_0x13903c(0xbd7)](_0xb043f9,_0x13903c(0x41f),_0x4436f2[_0x13903c(0x17c)]);_0x2e5ec9['id']=_0x13903c(0x993)+_0x13903c(0x815)+'u-roo'+'t';var _0x147334=_0xb043f9(_0x4436f2[_0x13903c(0x501)],_0x4436f2['kWFRh']),_0xd1dddc=_0xb043f9(_0x4436f2[_0x13903c(0x501)],_0x4436f2[_0x13903c(0x74a)],_0x35ef78);_0x147334[_0x13903c(0x48e)+_0x13903c(0x635)+'d'](_0xd1dddc);var _0xab51a8=_0x4436f2['gVmGh'](_0xb043f9,_0x13903c(0x41f),'mn-ma'+'in'),_0x208b98=_0xb043f9(_0x13903c(0x41f),_0x4436f2['vIYkF']),_0x4e126=_0xb043f9('div','mn-ti'+'tles'),_0x6f6411=_0xb043f9('div',_0x4436f2['egMMo'],_0x4436f2[_0x13903c(0x64b)]),_0x4e787a=_0x4436f2['WuxMQ'](_0xb043f9,'div',_0x13903c(0xb95)+'b',_0x13903c(0x1dd)+_0x13903c(0x309));_0x4e126['appen'+'dChil'+'d'](_0x6f6411),_0x4e126[_0x13903c(0x48e)+'dChil'+'d'](_0x4e787a);var _0x2954cf=_0xb043f9('div','mn-cl'+_0x13903c(0xb75),'<svg\x20'+_0x13903c(0x6d9)+'ox=\x220'+'\x200\x2024'+_0x13903c(0x842)+'<path'+'\x20d=\x22M'+_0x13903c(0x22f)+_0x13903c(0x428)+_0x13903c(0x289)+_0x13903c(0x809)+'/></s'+'vg>');_0x2954cf[_0x13903c(0x912)+'ck']=function(){var _0x19b114=_0x13903c;if(_0x4436f2[_0x19b114(0x9c9)](_0x4436f2[_0x19b114(0x1b7)],_0x4436f2['Ypmku']))try{_0x3eea57[_0x19b114(0xbc5)+'em'](_0x1c8dbb,_0x3888a5[_0x19b114(0x17d)+'gify'](_0x4a5c9d['pos']));}catch(_0x52758a){}else _0x4436f2[_0x19b114(0x521)](_0x5909bf,![]);},_0x208b98[_0x13903c(0x48e)+_0x13903c(0x635)+'d'](_0x4e126),_0x208b98['appen'+'dChil'+'d'](_0x2954cf);var _0x5db0c1=_0x4436f2['ArflH'](_0xb043f9,_0x4436f2[_0x13903c(0x501)],'mn-co'+'ls');_0xab51a8[_0x13903c(0x48e)+_0x13903c(0x635)+'d'](_0x208b98),_0xab51a8[_0x13903c(0x48e)+'dChil'+'d'](_0x5db0c1),_0x2e5ec9[_0x13903c(0x48e)+_0x13903c(0x635)+'d'](_0x147334),_0x2e5ec9[_0x13903c(0x48e)+_0x13903c(0x635)+'d'](_0xab51a8),document[_0x13903c(0xbdf)]['appen'+_0x13903c(0x635)+'d'](_0x2e5ec9),_0x1fff63['root']=_0x2e5ec9,_0x1fff63['cols']=_0x5db0c1,_0x1fff63[_0x13903c(0x83f)]=_0x6f6411,_0x1fff63['sub']=_0x4e787a,_0x4436f2['BFAbY'](_0x2f0cae),_0x5da826(),_0x1e92d2(_0x2e5ec9,_0x208b98);var _0x162bb1={};for(var _0x14153f=0x13fb+0x2d5+-0x16d0;_0x4436f2['wiZCE'](_0x14153f,_0xb44670['lengt'+'h']);_0x14153f++){var _0xe735f2=(_0x13903c(0x31c)+'|0|3|'+_0x13903c(0x758))['split']('|'),_0x2ad020=0x1f6*0x2+0x539*-0x1+0x14d;while(!![]){switch(_0xe735f2[_0x2ad020++]){case'0':_0xb59b7a[_0x13903c(0x9ae)]=_0x2c0f77[_0x13903c(0x6ae)];continue;case'1':_0xb59b7a[_0x13903c(0x374)]=_0x4436f2['ptlzp'];continue;case'2':var _0xb59b7a=_0xb043f9(_0x4436f2['ptlzp'],_0x4436f2[_0x13903c(0x2ea)],_0x13903c(0x740)+'l>'+_0x2c0f77[_0x13903c(0x6ae)]+(_0x13903c(0x6ea)+_0x13903c(0x3fa)));continue;case'3':(function(_0x16c5c6){var _0x313246=_0x13903c;_0xb59b7a[_0x313246(0x912)+'ck']=function(){var _0x1c33ad=_0x313246;_0x408cdc[_0x1c33ad(0x53e)](_0x3f2d5a,_0x16c5c6);};}(_0x2c0f77['id']));continue;case'4':_0x147334[_0x13903c(0x48e)+_0x13903c(0x635)+'d'](_0xb59b7a);continue;case'5':_0x162bb1[_0x2c0f77['id']]=_0xb59b7a;continue;case'6':var _0x2c0f77=_0xb44670[_0x14153f];continue;}break;}}_0x1fff63[_0x13903c(0xba4)+'ns']=_0x162bb1;var _0x30cc26=_0x4436f2[_0x13903c(0xb56)](_0xb043f9,_0x13903c(0x41f),null,_0x4d4f7e);return _0x30cc26['id']=_0x13903c(0x993)+'a-pet'+'al',_0x30cc26[_0x13903c(0x9ae)]=_0x13903c(0x965)+_0x13903c(0x812)+_0x13903c(0x23a)+'z\x20(In'+'sert)',_0x30cc26[_0x13903c(0x940)+'seent'+'er']=function(){var _0x40fdf2=_0x13903c;_0x30cc26['style'][_0x40fdf2(0x5ab)+'ty']='1';},_0x30cc26[_0x13903c(0x940)+_0x13903c(0x5e0)+'ve']=function(){var _0x111b9e=_0x13903c;if(_0x4436f2[_0x111b9e(0x770)](_0x111b9e(0x471),_0x111b9e(0x793)))_0x30cc26[_0x111b9e(0x4d9)][_0x111b9e(0x5ab)+'ty']=_0x1fff63[_0x111b9e(0x2bc)]?'1':'.5';else return _0x329330[_0x111b9e(0x1a7)+'e']='windo'+_0x111b9e(0xb9b)+'bal',_0x49f8af;},_0x30cc26['oncli'+'ck']=function(_0x52e232){var _0x5afb56=_0x13903c;if(_0x52e232&&_0x52e232['stopP'+_0x5afb56(0x9fa)+_0x5afb56(0x495)])_0x52e232[_0x5afb56(0xadc)+_0x5afb56(0x9fa)+_0x5afb56(0x495)]();_0x4436f2['ULQNq'](_0x5909bf,!_0x1fff63['open']);},document[_0x13903c(0xbdf)][_0x13903c(0x48e)+_0x13903c(0x635)+'d'](_0x30cc26),_0x1fff63['petal']=_0x30cc26,setInterval(function(){var _0x1e166d=_0x13903c;try{if(!_0x1fff63['petal'])return;var _0x5709c0=_0x5ed117();_0x1fff63[_0x1e166d(0x761)][_0x1e166d(0x4d9)]['opaci'+'ty']=_0x1fff63['open']?'1':_0x5709c0?'.8':_0x4436f2[_0x1e166d(0x510)],_0x1fff63[_0x1e166d(0x761)][_0x1e166d(0x9ae)]=_0x5709c0?'Sakur'+_0x1e166d(0x812)+_0x1e166d(0x23a)+'z\x20(In'+'sert)':_0x1e166d(0x965)+'a\x20Ski'+'llWar'+_0x1e166d(0x39f)+'aitin'+_0x1e166d(0x998)+_0x1e166d(0x2a2)+'game\x20'+'(Inse'+'rt)';}catch(_0x145284){}},-0x136*-0xa+0x19b3+-0x2313),_0x1fff63[_0x13903c(0x406)]=!![],_0x3f2d5a(_0x1fff63['cat']),_0x2e5ec9;}else{var _0x3f611a=_0x673f56();if(_0x3f611a&&_0x3f611a['el'])_0x3f611a['el']['style'][_0x13903c(0x4fa)+'ay']=_0x59054c['on']?'':'none';var _0x1e3eaf=_0x10bc87;if(_0x1e3eaf&&_0x1e3eaf['cv'])_0x1e3eaf['cv']['style'][_0x13903c(0x4fa)+'ay']=_0x343ead['on']&&_0x241f1c[_0x13903c(0x8be)]?'':'none';}}catch(_0x3d8c47){return console[_0x13903c(0x215)](_0x4436f2['oaaaZ'],_0x4436f2[_0x13903c(0x73c)](_0x4436f2['SHfun'],_0x237331),_0x3d8c47),null;}}else{var _0x146238=_0x5d03b9(_0x4436f2[_0x13903c(0x501)],_0x13903c(0x3bf)+'l'),_0x4cfc23=_0x4664d7(_0x4436f2['fIGwB'],_0x4436f2['gPZgB'],_0x4436f2[_0x13903c(0x2c5)](_0x1b962b,_0x168cf5?_0x4436f2['EkKCm'](_0x13903c(0x537)+'\x20clas'+_0x13903c(0x65b)+_0x13903c(0x566)+'\x27>'+_0x5e7e12,_0x13903c(0x179)+'n>'):''));return _0x146238[_0x13903c(0x48e)+_0x13903c(0x635)+'d'](_0x4cfc23),_0x146238;}}function _0x3f2d5a(_0x162f12){var _0x50d4b0=_0x105055,_0x565031={'WOhCX':function(_0x2fb7a8,_0x1049b2){var _0x2bd7c0=_0x5dd8;return _0x4436f2[_0x2bd7c0(0x5a2)](_0x2fb7a8,_0x1049b2);},'AORSR':function(_0x16ff6f,_0x39f323,_0x1aba21){return _0x16ff6f(_0x39f323,_0x1aba21);},'ddgLH':function(_0x1896e7,_0x585195){return _0x1896e7+_0x585195;},'rXKZI':function(_0x56ec3a,_0x4a3bbd){var _0x27d1e0=_0x5dd8;return _0x4436f2[_0x27d1e0(0x296)](_0x56ec3a,_0x4a3bbd);}};_0x1fff63[_0x50d4b0(0x6d2)]=_0x162f12,_0x1fff63[_0x50d4b0(0x4af)]=[];if(!_0x1fff63['cols'])return;var _0x3fa0f6=null;for(var _0x101b8f=0x7*-0x452+0x160*0x1+-0x1*-0x1cde;_0x101b8f<_0xb44670['lengt'+'h'];_0x101b8f++)if(_0x4436f2[_0x50d4b0(0x2e7)](_0xb44670[_0x101b8f]['id'],_0x162f12))_0x3fa0f6=_0xb44670[_0x101b8f];_0x1fff63[_0x50d4b0(0x83f)]['textC'+_0x50d4b0(0x14e)+'t']='Sakur'+_0x50d4b0(0x812)+_0x50d4b0(0x23a)+_0x50d4b0(0x497)+(_0x3fa0f6&&_0x3fa0f6[_0x50d4b0(0x6ae)]||'?');for(var _0x44a44b in _0x1fff63['butto'+'ns']){if(_0x50d4b0(0xa11)==='tNQlf'){if(_0x1fff63['butto'+'ns'][_0x44a44b][_0x50d4b0(0x269)+'List'])_0x1fff63['butto'+'ns'][_0x44a44b][_0x50d4b0(0x269)+_0x50d4b0(0x9d5)]=_0x50d4b0(0x4db)+'b'+(_0x4436f2[_0x50d4b0(0x93a)](_0x44a44b,_0x162f12)?_0x4436f2['XgyqM']:'');}else{var _0x10e511=_0x334e80[_0x50d4b0(0xa98)](-0x78e+0xc2c+-0x49d,_0xd41a9['inner'+'Width']||_0x1ef0a6['docum'+_0x50d4b0(0x513)+_0x50d4b0(0x78c)][_0x50d4b0(0x37b)+'tWidt'+'h']||0x3*0x5de+-0x122b+0x91),_0x99956c=_0x5e5168[_0x50d4b0(0xa98)](-0x15a3+0x2193+-0xbef,_0x43291d['inner'+_0x50d4b0(0xbe5)+'t']||_0x12461e['docum'+_0x50d4b0(0x513)+'ement'][_0x50d4b0(0x37b)+_0x50d4b0(0x982)+'ht']||-0x57*0x68+-0xebd*-0x1+0x149b);return(_0x565031['WOhCX'](_0x2de493['cv'][_0x50d4b0(0x972)],_0x10e511)||_0x565031[_0x50d4b0(0x325)](_0x1a8c75['cv'][_0x50d4b0(0x171)+'t'],_0x99956c))&&(_0x192b0b['cv'][_0x50d4b0(0x972)]=_0x10e511,_0x211091['cv']['heigh'+'t']=_0x99956c),{'w':_0x10e511,'h':_0x99956c};}}var _0x92b5ea=[];try{_0x92b5ea=_0x5c52d1(_0x162f12);}catch(_0x1a2f8d){if(_0x4436f2[_0x50d4b0(0xa86)]!=='xpHvq')_0x92b5ea=[];else{var _0x7c02d=_0x565031[_0x50d4b0(0x570)](_0x36f3fe,_0x1cf00c+_0x565031['AORSR'](_0x4aba9a,_0xa9686b[_0x1d68d3][0x1180+-0x26fe+0x157e],-0x1f04+-0x7b5+0x1*0x26c9),_0x50d4b0(0x380));if(_0x7c02d)_0x3d03b1[_0x50d4b0(0x8d2)][_0x103f37[_0x593838][-0x36*0x7d+-0x12dc+0x2d3b]]=_0x565031['ddgLH']('0x',_0x565031['rXKZI'](_0x7c02d,-0x1179+-0x1478+0x25f1)[_0x50d4b0(0x322)+'ing'](0x16*-0x16b+0x23a+0x1*0x1d08));}}while(_0x1fff63[_0x50d4b0(0x185)]['first'+_0x50d4b0(0x59b)])_0x1fff63[_0x50d4b0(0x185)][_0x50d4b0(0x547)+_0x50d4b0(0x946)+'d'](_0x1fff63['cols']['first'+_0x50d4b0(0x59b)]);for(var _0x134f71=-0x22c*0x3+0x19b0*0x1+-0x132c;_0x134f71<_0x92b5ea['lengt'+'h'];_0x134f71++)_0x1fff63[_0x50d4b0(0x185)][_0x50d4b0(0x48e)+_0x50d4b0(0x635)+'d'](_0x92b5ea[_0x134f71]);}function _0x5909bf(_0x54c55e){var _0x56b617=_0x105055;_0x1fff63['open']=!!_0x54c55e;var _0x5a7b1a=_0x4436f2['JtTHS'](_0x207864);if(!_0x5a7b1a)return;_0x5a7b1a[_0x56b617(0x269)+_0x56b617(0x9d5)]=_0x4436f2['vDsdz'](_0x4436f2['NXYWO'],_0x1fff63[_0x56b617(0x2bc)]?'\x20show'+'n':'');if(_0x1fff63[_0x56b617(0x761)])_0x1fff63[_0x56b617(0x761)]['style'][_0x56b617(0x5ab)+'ty']=_0x1fff63[_0x56b617(0x2bc)]?'1':'.5';if(_0x1fff63[_0x56b617(0x2bc)]){if(_0x4436f2['vYkpl'](_0x56b617(0xa67),'vWbDB')){_0x4a040f[_0x56b617(0x975)+'ntDef'+_0x56b617(0xa58)](),_0x32161a(_0x806d11['on'],_0x53b4b7['facto'+'r']-(0x1*0x123+0x37*-0x91+0x1e04+0.5));return;}else{_0x3f2d5a(_0x1fff63[_0x56b617(0x6d2)]);try{var _0x41f36e=window['inner'+_0x56b617(0xbe5)+'t']||-0x37*-0xa3+-0x105c+0x29*-0x61;if(_0x4436f2[_0x56b617(0x69d)](_0x41f36e,-0x282*0x3+-0xaff+0x14f1))_0x4436f2[_0x56b617(0xb5f)](_0x46a904,![]);}catch(_0x50bfc1){}}}}function _0x227c36(){var _0x6005aa=_0x105055;if(!_0x1fff63[_0x6005aa(0x2bc)]||!_0x1fff63['built'])return;try{for(var _0x5e1982=-0x1158+0x77*-0x27+0x2379;_0x4436f2['QmoVZ'](_0x5e1982,_0x1fff63[_0x6005aa(0x4af)]['lengt'+'h']);_0x5e1982++){try{_0x1fff63[_0x6005aa(0x4af)][_0x5e1982]();}catch(_0x5c4d75){}}var _0x24645d=_0x4239ee;_0x1fff63['sub'][_0x6005aa(0x17e)+_0x6005aa(0x14e)+'t']=_0x24645d?_0x4436f2['GQhCh'](_0x4436f2[_0x6005aa(0xb50)](_0x4436f2['PeQlJ']('v'+_0x24645d[_0x6005aa(0x8cf)+'on'],_0x6005aa(0x926)+'hooks'+'\x20')+_0x24645d['hooks'+'Appli'+'ed'],'/')+_0x24645d[_0x6005aa(0x2db)+_0x6005aa(0x88d)]+_0x4436f2[_0x6005aa(0x30b)]+(_0x24645d[_0x6005aa(0x5b4)]&&_0x24645d['esp'][_0x6005aa(0x73b)+'rCoun'+'t']||0xda9*0x1+-0x661*-0x4+0xd0f*-0x3)+('\x20\x20·\x20\x20'+'heap\x20'),_0x24645d['wasmM'+'emory']&&_0x24645d['wasmM'+_0x6005aa(0x12e)][_0x6005aa(0x414)+_0x6005aa(0x297)]?Math[_0x6005aa(0x679)](_0x24645d['wasmM'+_0x6005aa(0x12e)][_0x6005aa(0x4e1)]/(-0x1be60e*0x1+-0x1*-0xe8712+0x54*0x5983))+'MB':'-'):'waiti'+_0x6005aa(0x174)+'r\x20the'+_0x6005aa(0x1f4)+_0x6005aa(0xb00)+_0x6005aa(0x35d);var _0x19947b=_0x1fff63['cols']['query'+_0x6005aa(0xaca)+_0x6005aa(0x7a8)+'l']?_0x1fff63['cols'][_0x6005aa(0x68d)+_0x6005aa(0xaca)+_0x6005aa(0x7a8)+'l'](_0x6005aa(0x41d)+'-k]'):[];for(var _0x1adc2d=0xd*-0x1d2+-0x1edb+0x3685;_0x4436f2['puRni'](_0x1adc2d,_0x19947b['lengt'+'h']);_0x1adc2d++){var _0x37eb31=_0x19947b[_0x1adc2d]['datas'+'et']['k'],_0xdb4d75='';if(_0x37eb31===_0x4436f2['KeZsr'])_0xdb4d75=_0x24645d?_0x24645d[_0x6005aa(0x8cf)+'on']:'-';else{if(_0x37eb31==='appli'+_0x6005aa(0x415)+_0x6005aa(0x4d3)+_0x6005aa(0x6bc))_0xdb4d75=_0x24645d?_0x4436f2['juIUF'](_0x24645d[_0x6005aa(0x2db)+_0x6005aa(0x1f8)+'ed']+_0x6005aa(0x245),_0x24645d[_0x6005aa(0x2db)+'Regis'+'tered'+_0x6005aa(0xb08)]):'-';else{if(_0x37eb31===_0x6005aa(0x3f9)+'insta'+_0x6005aa(0x3a3)+_0x6005aa(0xb94))_0xdb4d75=_0x24645d&&_0x24645d[_0x6005aa(0x99d)+'emory']&&_0x24645d['wasmM'+_0x6005aa(0x12e)]['captu'+_0x6005aa(0x297)]?_0x4436f2[_0x6005aa(0x9ce)](Math[_0x6005aa(0x679)](_0x24645d['wasmM'+_0x6005aa(0x12e)][_0x6005aa(0x4e1)]/(0x58132+-0x10dae*0x2+0x1*0xc9a2a)),'\x20MB\x20@'+'\x20')+_0x24645d['wasmM'+'emory'][_0x6005aa(0xb4a)]+'ms':'-';else{if(_0x37eb31===_0x4436f2['NMeuu'])_0xdb4d75=_0x24645d&&_0x24645d[_0x6005aa(0x5b4)]?_0x4436f2['YATDJ'](String,_0x24645d[_0x6005aa(0x5b4)]['playe'+_0x6005aa(0x678)+'t']):'-';else{if(_0x4436f2[_0x6005aa(0x496)](_0x37eb31,_0x6005aa(0x8b3)+_0x6005aa(0xb17)+_0x6005aa(0x5b2)+'u'))_0xdb4d75=_0x24645d&&_0x24645d['esp']?_0x4436f2[_0x6005aa(0x604)](String,_0x24645d[_0x6005aa(0x5b4)]['enemy'+_0x6005aa(0x434)]):'-';else{if(_0x4436f2['WquCi'](_0x37eb31,'off\x20t'+_0x6005aa(0x488)+'ve\x20ma'+'nager'))_0xdb4d75=_0x24645d&&_0x24645d['esp']&&_0x24645d['esp']['camer'+'a']?_0x24645d[_0x6005aa(0x5b4)][_0x6005aa(0x95f)+'a']+'\x20('+_0x24645d[_0x6005aa(0x5b4)][_0x6005aa(0x95f)+_0x6005aa(0x712)]+')':'-';else{if(_0x37eb31===_0x4436f2[_0x6005aa(0x134)])_0xdb4d75=_0x24645d&&_0x24645d['local']&&_0x24645d[_0x6005aa(0x2b6)][_0x6005aa(0x384)]?_0x24645d['local']['feet'][_0x6005aa(0x9df)](function(_0x4b2957){var _0x1b94e6=_0x6005aa;return Math[_0x1b94e6(0x679)](_0x4b2957*(0x988+0x187e+-0x21a2))/(-0x13b4+-0x1d6*0x2+-0x34*-0x75);})['join']('\x20\x20'):'-';else{if(_0x37eb31===_0x6005aa(0x25e)+'8')_0xdb4d75=_0x24645d&&_0x24645d[_0x6005aa(0x2b6)]&&_0x24645d[_0x6005aa(0x2b6)]['eye']?_0x24645d[_0x6005aa(0x2b6)][_0x6005aa(0x7d7)][_0x6005aa(0x9df)](function(_0x2704d2){return Math['round'](_0x2704d2*(-0x224d+0x3*0x494+0x91*0x25))/(-0x1e76+0x1ef3+0x1*-0x19);})['join']('\x20\x20'):'-';else{if(_0x4436f2['sScOt'](_0x4436f2['dhhUg'],'KtTWu')){var _0x40ea11=_0x37eb31[_0x6005aa(0xb19)]('+');_0xdb4d75=_0x430e63(_0x24645d,_0x4436f2['LcNtv'](_0x40ea11[0x2c*-0x72+-0x3f*0x7a+0x1*0x319e][_0x6005aa(0x20f)+'Of'](_0x6005aa(0x53d)+'h'),0xfad+0x102*0x16+-0x25d9)?'Healt'+'hScri'+'pt':_0x6005aa(0x2d8)+_0x6005aa(0x773)+_0x6005aa(0x2a1),parseInt(_0x40ea11[-0x1df7+-0x1e07+0x3bff],-0x1b76+0x5b+0x1b2b));}else{_0x307bbf['textC'+_0x6005aa(0x14e)+'t']=_0x4436f2[_0x6005aa(0xb9c)]('v',_0x3cadb4['versi'+'on']||'?');var _0x2b06a0=_0x46262f,_0x539ba5=_0x45e7ae['versi'+'on']||'';_0xf556b7[_0x6005aa(0x4d9)][_0x6005aa(0x4b3)]=_0x4436f2['YLgSH'](_0x539ba5,_0x2b06a0)?_0x5c33f6:_0x6005aa(0xa8b)+'74',_0x243dbc['style']['borde'+'rColo'+'r']=_0x4436f2['nWXvd'](_0x539ba5,_0x2b06a0)?_0x4436f2['DrGrM']:_0x4436f2[_0x6005aa(0x880)];}}}}}}}}}if(_0xdb4d75!==_0x19947b[_0x1adc2d][_0x6005aa(0x17e)+_0x6005aa(0x14e)+'t'])_0x19947b[_0x1adc2d]['textC'+_0x6005aa(0x14e)+'t']=_0xdb4d75;}}catch(_0x403933){}}function _0x2ae51b(){var _0x2b1b70=_0x105055;if(_0x2b1b70(0x616)!==_0x2b1b70(0x80f))try{var _0x2a84f1=_0x231cf8();return _0x2a84f1&&_0x2a84f1['feet']?_0x2a84f1[_0x2b1b70(0x384)][0x1*-0x211e+-0x854+0x49b*0x9]:null;}catch(_0x27810f){if(_0x4436f2[_0x2b1b70(0x646)]('BDXDc',_0x2b1b70(0x469)))return null;else{_0x1c7c56();return;}}else return{'o':'0x'+_0x234fdc[0x3*-0x8a9+-0x1d21*-0x1+-0x326][_0x2b1b70(0x322)+'ing'](-0xd86+0x1f3*-0x1+0x1*0xf89),'v':_0x4bfef0(_0xa5d9ed+_0x172da7[-0x2292+-0xcb9*-0x1+0x15d9],_0x35fc77[-0x1*0x19ca+0x1bab+-0x20*0xf])};}var _0x5b75c5=-0x230c+-0x20c*0x8+0x336e+0.5,_0x4c02cb=-0xb*0x245+0x2*-0x6c7+0x21*0x12b+0.25,_0x78cdb1=0xb*-0x176+-0x59*-0x4b+-0xa00+0.8;function _0x5c5ad0(_0x387f21,_0xea5594){var _0x16c96f=_0x105055,_0x4d3c2e=[],_0x2ff91d,_0x1ed07f,_0x480031=_0xea5594!==null&&_0x4436f2[_0x16c96f(0x685)](_0xea5594,undefined)&&isFinite(_0xea5594);for(_0x2ff91d=-0x351+-0xf4b+0x129c;_0x2ff91d<_0x387f21[_0x16c96f(0xb7c)+'h'];_0x2ff91d++){if(_0x4436f2['nqixW'](_0x4436f2['RBpDU'],_0x4436f2[_0x16c96f(0xb9a)])){var _0x37be0b=_0x387f21[_0x2ff91d]['v'];if(!_0x37be0b)continue;if(_0x37be0b[-0x1f72+-0x1baf+0x3b21]===0x6e2+-0x1f80+0x189e&&_0x37be0b[0xb*-0x14e+-0x1*-0x1c0b+-0xdb0]===-0x19*0x10c+-0xcb6+0x9*0x452&&_0x37be0b[0x1eb*-0xf+-0x11e7*0x1+-0x19*-0x1de]===-0x190a+-0x1ab*-0x1+0x175f)continue;if(_0x480031&&Math[_0x16c96f(0x9e4)](_0x37be0b[0xd25+-0x293*0xd+-0xb*-0x1d9]-_0xea5594)>_0x5b75c5)continue;_0x4d3c2e['push'](_0x387f21[_0x2ff91d]);}else try{return _0x1df28d['getIt'+'em'](_0x44400b)==='1';}catch(_0x174779){return![];}}if(!_0x4d3c2e[_0x16c96f(0xb7c)+'h'])for(_0x2ff91d=-0x5ef+0xa*-0x27+0x53*0x17;_0x2ff91d<_0x387f21[_0x16c96f(0xb7c)+'h'];_0x2ff91d++){if(_0x4436f2[_0x16c96f(0x2aa)](_0x16c96f(0x5d5),'oYrQc'))_0x5180cf++,_0x3d0b25['sane']=!![];else{var _0x25942e=_0x387f21[_0x2ff91d]['v'];if(!_0x25942e)continue;if(_0x25942e[0x21ea+-0x3d*0x87+-0x1bf]===0xd3*0x1f+0x7*0x442+-0x375b&&_0x4436f2['zPRVM'](_0x25942e[0x1f51+0x1*-0x263b+0x6eb],-0x29*0xd3+0x1*0xf95+-0xe*-0x14d)&&_0x25942e[0x20bb+-0x1704+-0x23*0x47]===-0x4ca*-0x6+0x1d*0x56+-0x267a)continue;_0x4d3c2e[_0x16c96f(0x24d)](_0x387f21[_0x2ff91d]);}}if(!_0x4d3c2e[_0x16c96f(0xb7c)+'h'])return{'pos':null,'posAt':null,'inBand':0x0,'cluster':0x0,'reach':0x0};var _0x5753a2=[];for(_0x2ff91d=-0xae5*-0x1+-0x9ac*-0x3+-0x27e9;_0x2ff91d<_0x4d3c2e[_0x16c96f(0xb7c)+'h'];_0x2ff91d++){var _0x1eff06=_0x4d3c2e[_0x2ff91d]['v'],_0x49fbde=-(-0x6ff*-0x3+-0x906+-0xbf6);for(_0x1ed07f=0xc58+0x1e9*-0x5+-0x2cb;_0x4436f2[_0x16c96f(0x4c1)](_0x1ed07f,_0x5753a2[_0x16c96f(0xb7c)+'h']);_0x1ed07f++){if(_0x16c96f(0x3c7)===_0x16c96f(0xa29)){_0x43bd7f['preve'+_0x16c96f(0x336)+_0x16c96f(0xa58)](),_0x526852(!_0x5ed231['on'],_0x5e29a1[_0x16c96f(0xa81)+'r']);return;}else{var _0x208d44=_0x5753a2[_0x1ed07f]['c'][0x455+0x12b*0x21+-0x7*0x620]['v'],_0x472fb0=_0x4436f2[_0x16c96f(0x30e)](_0x1eff06[-0x3e1+0x2*-0xf9a+-0x7*-0x503],_0x208d44[-0x1*0x1c66+0x1566+0x70*0x10]),_0x4d58db=_0x1eff06[0x847+-0x5*0x41b+-0x1*-0xc41]-_0x208d44[-0x2*-0x7e2+-0xefb*-0x1+-0x1ebe],_0x50c61a=_0x4436f2[_0x16c96f(0x83a)](_0x1eff06[0x5*0x655+-0x159f+0x282*-0x4],_0x208d44[0x1*0x9f5+-0x1*0x146+-0x8ad]);if(_0x4436f2[_0x16c96f(0x6a1)](_0x4436f2[_0x16c96f(0x85f)](_0x4436f2[_0x16c96f(0x6c7)](_0x472fb0,_0x472fb0),_0x4436f2[_0x16c96f(0xb7b)](_0x4d58db,_0x4d58db))+_0x50c61a*_0x50c61a,_0x4c02cb)){if('OCqrT'===_0x4436f2[_0x16c96f(0x212)]){_0x49fbde=_0x1ed07f;break;}else{var _0x191fee=_0x14d171['list'][_0x25343a],_0x52194a=(_0x191fee['x']-_0x3e1448[_0x16c96f(0x384)][-0xf7*0x10+-0x9c9*-0x3+-0xdeb])*_0x180665,_0xe719b8=(_0x191fee['z']-_0x2a7859['feet'][0x69b+-0x3*-0xbc1+-0x1*0x29dc])*_0x45ad07,_0x18b183=_0x1bd891[_0x16c96f(0x2c1)](_0x4436f2[_0x16c96f(0x3a9)](_0x52194a*_0x52194a,_0xe719b8*_0xe719b8)),_0x4745e9=_0x3257c8,_0x14d727=_0x5a7b40;_0x4436f2['BvAAH'](_0x18b183,_0x4436f2[_0x16c96f(0xb77)](_0x2fc47d,0x2042+0x451+-0x3*0xc2f))?(_0x4745e9=_0x4436f2[_0x16c96f(0x248)](_0x4621b4,_0x4436f2[_0x16c96f(0x509)](_0x52194a,_0x18b183)*_0x4436f2['Qdmjt'](_0x37b9dd,0x9*-0x329+-0x1a*0x139+0xc0d*0x5)),_0x14d727=_0xf056d6+_0x4436f2[_0x16c96f(0x5ba)](_0xe719b8/_0x18b183,_0x4436f2[_0x16c96f(0xb77)](_0x17df9e,0x1edc+0x21d1+0x40a7*-0x1))):(_0x4745e9=_0x20ab03+_0x52194a,_0x14d727=_0x4436f2[_0x16c96f(0x1fb)](_0x37ddf2,_0xe719b8));var _0x213292=_0x4436f2['fywtb'](_0x2807d7,null)&&_0x191fee[_0x16c96f(0x624)]===_0x447983;_0x247949['fillS'+'tyle']=_0x213292?_0x4436f2['cjFIK']:'#ff6e'+'74',_0x156fa3[_0x16c96f(0x1ab)+_0x16c96f(0xba5)](),_0x446753[_0x16c96f(0x85a)](_0x4745e9,_0x14d727,_0x213292?0xbf*-0x23+0x1a16+-0x1*-0x9:0x1d*-0xd6+-0x8f*0x20+0x2a21+0.20000000000000018,-0x23bf+-0x1e1c*-0x1+0x3*0x1e1,_0x2a49d7['PI']*(0x21d3+-0x2*0xa61+-0xd0f)),_0x350708['fill'](),_0x11a4e0++;}}}}if(_0x49fbde===-(0xe1c+0x1*0x187b+0xb*-0x382))_0x5753a2[_0x16c96f(0x24d)]({'c':[_0x4d3c2e[_0x2ff91d]]});else _0x5753a2[_0x49fbde]['c'][_0x16c96f(0x24d)](_0x4d3c2e[_0x2ff91d]);}var _0x5dcf62=_0x5753a2[0x411+0x11a0+-0x3*0x73b];for(_0x1ed07f=0x161*0x11+0x4*0x83+-0xe*0x1d2;_0x1ed07f<_0x5753a2['lengt'+'h'];_0x1ed07f++)if(_0x5753a2[_0x1ed07f]['c']['lengt'+'h']>_0x5dcf62['c'][_0x16c96f(0xb7c)+'h'])_0x5dcf62=_0x5753a2[_0x1ed07f];var _0x52bc91=_0x5dcf62['c'][0x1ee6+-0x1f12+-0x1*-0x2c],_0x44d1a3=-(-0x99f+-0x1*-0x1a81+-0x10e1);for(_0x1ed07f=-0x7*0x277+0x9ac*-0x1+0x1aed;_0x4436f2[_0x16c96f(0x50a)](_0x1ed07f,_0x5dcf62['c']['lengt'+'h']);_0x1ed07f++){var _0x38bd3a=_0x5dcf62['c'][_0x1ed07f]['v'],_0x2a2410=_0x4436f2['wqNkf'](_0x38bd3a[0x76a+-0x180+-0x5ea]*_0x38bd3a[0x1dd5+-0x1*0x132b+0x5b*-0x1e],_0x38bd3a[0x10c7*-0x1+-0xb1e+-0x1*-0x1be7]*_0x38bd3a[0x2226+-0x1*0xae+-0x1*0x2176]);(_0x4436f2['ZLJxO'](_0x2a2410,_0x44d1a3)||_0x4436f2['zPRVM'](_0x2a2410,_0x44d1a3)&&_0x38bd3a[-0x2e*0x1f+0xe*-0xfe+0x97*0x21]<_0x52bc91['v'][0x2577+0x1*-0x1957+-0x1d*0x6b])&&(_0x44d1a3=_0x2a2410,_0x52bc91=_0x5dcf62['c'][_0x1ed07f]);}return{'pos':_0x52bc91['v'],'posAt':_0x52bc91['o'],'inBand':_0x480031?_0x4d3c2e[_0x16c96f(0xb7c)+'h']:0x17*0x13d+0xe2a+0x1*-0x2aa5,'cluster':_0x5dcf62['c']['lengt'+'h'],'groups':_0x5753a2[_0x16c96f(0xb7c)+'h'],'reach':Math['sqrt'](_0x44d1a3)};}function _0x231cf8(){var _0x3512c4=_0x105055,_0x2805d1={'GIxpe':function(_0x4ae954,_0x530aeb){return _0x4ae954(_0x530aeb);},'KkVXP':function(_0xf9a453,_0x551c65){return _0xf9a453!==_0x551c65;}},_0x2016f5=_0x41484b[_0x3512c4(0x2d8)+'ntrol'+_0x3512c4(0x2a1)];if(!_0x2016f5||!_0x2016f5[_0x3512c4(0xa5e)])return null;var _0x4c6f88=_0x581ece[_0x3512c4(0x2d8)+'ntrol'+'ler']||[],_0x29514c=[];for(var _0x22b387=0x1349+0x6fa+-0x1*0x1a43;_0x4436f2[_0x3512c4(0x352)](_0x22b387,_0x4c6f88[_0x3512c4(0xb7c)+'h']);_0x22b387++){if(_0x4436f2['cYHLH'](_0x4c6f88[_0x22b387][0x1*0x977+-0x44e*-0x4+-0x1aae],'v3'))continue;var _0x2581ba=_0x19bb2f(_0x2016f5[_0x3512c4(0xa5e)],_0x4c6f88[_0x22b387][0xb4b+-0x482*-0x1+-0xfcd],-0xa70+-0x934+0x2b*0x75);if(_0x2581ba)_0x29514c['push']({'o':_0x4436f2[_0x3512c4(0x636)]('0x',_0x4c6f88[_0x22b387][-0x1*0x25c7+0x1a8+0x1*0x241f]['toStr'+_0x3512c4(0x1c0)](0x2403+0x2011+0x1101*-0x4)),'v':_0x2581ba});}var _0x5222f4=_0x5c5ad0(_0x29514c,null);if(!_0x5222f4[_0x3512c4(0x18e)])return null;var _0x307442=_0x5222f4[_0x3512c4(0x18e)];return{'ptr':_0x2016f5[_0x3512c4(0xa5e)],'feet':_0x307442,'posAt':_0x5222f4[_0x3512c4(0x4d6)],'inBand':_0x5222f4['inBan'+'d'],'cluster':_0x5222f4[_0x3512c4(0x5ac)+'er'],'copies':_0x29514c[_0x3512c4(0x25c)+'r'](function(_0x2c2a76){return _0x2c2a76['v'][-0x25ec+-0x12*0x10e+0x38e8]===_0x307442[-0x163d+0x287*0x2+0x112f]&&_0x2c2a76['v'][0x1ead+-0x2e8+-0x6f1*0x4]===_0x307442[0x2311*-0x1+0x3f1*0x2+0x1b30]&&_0x4436f2['VdXDm'](_0x2c2a76['v'][0x1bb*-0x5+-0x283*0x7+0x1a3e],_0x307442[-0x8fd*-0x1+-0x1*0x462+-0x499*0x1]);})[_0x3512c4(0x9df)](function(_0x2aed0f){var _0x46991e=_0x3512c4;if(_0x2805d1['KkVXP'](_0x46991e(0x949),_0x46991e(0x33b)))return _0x2aed0f['o'];else _0x2805d1[_0x46991e(0x42e)](_0x4d894c,!_0x4aa4ce()),_0x57edfb();}),'eye':[_0x307442[0x14ab+-0x79*0x8+-0x10e3],_0x307442[0x1d3*-0xe+-0x1a7*0x7+0x14*0x1db]+_0x78cdb1,_0x307442[-0x1ad5+-0x9*-0x17f+0x358*0x4]],'reach':_0x5222f4[_0x3512c4(0xa8c)],'pitch':_0x4436f2[_0x3512c4(0x2c4)](_0x3c6e14,_0x2016f5['ptr']+(-0x50*0x2+-0x4*-0x55c+-0x1364),'f32'),'yaw':_0x3c6e14(_0x2016f5[_0x3512c4(0xa5e)]+(-0x1358+0x55e*0x7+-0x865*0x2),'f32')};}function _0x13c12c(){var _0x49c064=_0x105055,_0x126884=_0x231cf8(),_0x3bee4e=[],_0x26dcc7=_0x8ca6f[_0x49c064(0x6ef)+_0x49c064(0xa30)+'orkSy'+'nc']||{},_0x39d7cb=Object[_0x49c064(0x5ec)](_0x26dcc7);for(var _0x165e4d=-0x59*-0x5+-0xf7f+-0x496*-0x3;_0x165e4d<_0x39d7cb[_0x49c064(0xb7c)+'h']&&_0x4436f2[_0x49c064(0x50a)](_0x165e4d,0x77*-0x18+0x5cf*-0x2+0x7a2*0x3);_0x165e4d++){var _0x55d9e5=_0x26dcc7[_0x39d7cb[_0x165e4d]],_0x1a281b=[],_0x4fff96=_0x581ece[_0x49c064(0x6ef)+_0x49c064(0xa30)+'orkSy'+'nc']||[];for(var _0xa08544=-0xe74+-0x13bb*-0x1+0xc1*-0x7;_0xa08544<_0x4fff96[_0x49c064(0xb7c)+'h'];_0xa08544++){if(_0x4fff96[_0xa08544][-0x1a6*0xb+-0x22c8+0x1b5*0x1f]!=='v3')continue;var _0x109b66=_0x19bb2f(_0x55d9e5[_0x49c064(0xa5e)],_0x4fff96[_0xa08544][-0x5*0x70b+-0x2*0x985+0x3641],-0x1fff+0x1643+-0x5*-0x1f3);if(_0x109b66)_0x1a281b['push']({'o':_0x4436f2['GXFbL']('0x',_0x4fff96[_0xa08544][0x214b*0x1+-0x29d*0xd+0xae][_0x49c064(0x322)+'ing'](0x8e9+0x2*-0xfd3+0x16cd)),'v':_0x109b66});}var _0x835544=_0x5c5ad0(_0x1a281b,_0x126884?_0x126884['feet'][-0x1f*0x3d+0xda*-0xf+0x142a]:null),_0x12f37b=_0x835544['pos'];if(!_0x12f37b)continue;var _0x27adfa={'ptr':_0x55d9e5[_0x49c064(0xa5e)],'x':_0x12f37b[-0x73*0x30+-0x1991+0x2f21],'y':_0x12f37b[-0x1859+0x2cc*0x7+0x4c6],'z':_0x12f37b[-0x1*-0x17cd+0x126*0x1+-0x18f1],'posAt':_0x835544[_0x49c064(0x4d6)],'inBand':_0x835544[_0x49c064(0x558)+'d'],'cluster':_0x835544[_0x49c064(0x5ac)+'er'],'team':_0x4436f2[_0x49c064(0x9ef)](_0x3c6e14,_0x55d9e5['ptr']+(0x2646+0x1851+-0x3e3f),_0x49c064(0x3e6)),'localFlag':_0x4436f2['mzuOZ'](_0x3c6e14,_0x55d9e5['ptr']+(0xda5+-0x19*-0x20+-0x17b*0xb),'i32')};if(_0x126884){var _0x225ff3=_0x4436f2[_0x49c064(0x898)](_0x12f37b[0x1049*0x1+-0x26df+0x1696],_0x126884[_0x49c064(0x384)][0xcc3+-0x8b7*0x1+-0x40c*0x1]),_0x488eed=_0x4436f2[_0x49c064(0x481)](_0x12f37b[-0x74*0x5+0x18fb+0x16b5*-0x1],_0x126884[_0x49c064(0x384)][-0x99a+0x1522+-0xb86]);_0x27adfa['d']=Math['sqrt'](_0x225ff3*_0x225ff3+_0x4436f2['kKNkG'](_0x488eed,_0x488eed)),_0x27adfa['beari'+'ng']=_0x4436f2['HwFwB'](Math[_0x49c064(0x984)](_0x225ff3,_0x488eed)*(-0x839*-0x1+-0x4a*-0x1+0x1*-0x7cf),Math['PI']);}_0x3bee4e[_0x49c064(0x24d)](_0x27adfa);}return{'me':_0x126884,'list':_0x3bee4e};}var _0x251804=null;function _0x555ef5(){var _0x46d360=_0x105055;if(_0x46d360(0xbea)==='ifuji'){if(_0x251804)return _0x251804;try{if(!document[_0x46d360(0xbdf)]||!document[_0x46d360(0xbdf)]['appen'+_0x46d360(0x635)+'d'])return null;var _0x585529=document['creat'+'eElem'+'ent'](_0x4436f2['fIGwB']);_0x585529['id']=_0x46d360(0x993)+_0x46d360(0x5ce),_0x585529['style'][_0x46d360(0x3be)+'xt']=_0x4436f2['hNpwt'](_0x4436f2['QqYJY']('posit'+_0x46d360(0x6cf)+'ixed;'+'right'+_0x46d360(0x557)+_0x46d360(0xa16)+_0x46d360(0xb80)+_0x46d360(0x1cb)+'ex:21'+_0x46d360(0x4d4)+_0x46d360(0x186)+_0x46d360(0x3eb)+'r-eve'+'nts:n'+_0x46d360(0x4c4)+_0x4436f2[_0x46d360(0x50c)],_0x46d360(0x146)+'ng:4p'+'x;fon'+_0x46d360(0x5fd)+'x/1.3'+_0x46d360(0x9fc)+_0x46d360(0x6ec)+'ace,C'+'onsol'+'as,mo'+'nospa'+_0x46d360(0x1d9)+_0x46d360(0x45a)+_0x46d360(0x707)+'9;'),'user-'+'selec'+'t:non'+_0x46d360(0x16e)+_0x46d360(0x47f)+_0x46d360(0x1c5)+'selec'+'t:non'+'e;'),_0x585529['inner'+_0x46d360(0x608)]=_0x4436f2['zjaFQ'](_0x46d360(0x438)+'as\x20id'+'=\x22sak'+_0x46d360(0x8a0)+'sp-cv'+_0x46d360(0xa99)+_0x46d360(0x3e3)+'60\x22\x20h'+_0x46d360(0x369)+'=\x22160'+'\x22\x20sty'+'le=\x22d'+'ispla'+_0x46d360(0x232)+_0x46d360(0x526)+_0x46d360(0x1a0)+_0x46d360(0x97c),_0x46d360(0x62d)+_0x46d360(0x8ab)+_0x46d360(0x92f)+'-esp-'+'lg\x22\x20s'+'tyle='+'\x22text'+_0x46d360(0x13b)+_0x46d360(0x6c3)+_0x46d360(0x267)+_0x46d360(0x841)+'>');var _0xf9e9ab={'cv':{'getContext':function(){return null;}},'el':_0x585529};document['body'][_0x46d360(0x48e)+_0x46d360(0x635)+'d'](_0x585529),_0x251804={'el':_0x585529,'cv':_0x585529[_0x46d360(0x68d)+_0x46d360(0xaca)+'tor'](_0x46d360(0x991)+_0x46d360(0x461)+_0x46d360(0x9b5)),'lg':_0x585529[_0x46d360(0x68d)+_0x46d360(0xaca)+_0x46d360(0xbb9)](_0x4436f2[_0x46d360(0xabe)])};if(!_0x251804['cv']||!_0x251804['cv'][_0x46d360(0x69a)+_0x46d360(0x274)])_0x251804=_0xf9e9ab;return _0x251804;}catch(_0x3b0cbd){return null;}}else return _0x4436f2[_0x46d360(0xbbf)](_0x391a16[_0x46d360(0x679)](_0x114917*(-0x16d3+-0x14*-0x7e+-0x15*-0xa3)),-0x1e0e+0x1*0x1cbf+0x1*0x1b3);}var _0x4f7d0c=null;function _0x33dd8d(){var _0x37690e=_0x105055;if(_0x4f7d0c)return _0x4f7d0c;try{if(_0x4436f2[_0x37690e(0x582)]===_0x4436f2[_0x37690e(0x353)])_0x77a8ad[_0x37690e(0x547)+'e']();else{var _0x1bbd30=_0x4436f2['anwgS']['split']('|'),_0x1bbc74=-0x2*0xd94+0x252*-0xc+-0x58*-0xa0;while(!![]){switch(_0x1bbd30[_0x1bbc74++]){case'0':_0x24f218['id']=_0x4436f2['pBSWC'];continue;case'1':_0x4f7d0c={'cv':_0x24f218};continue;case'2':if(!document[_0x37690e(0xbdf)]||!document[_0x37690e(0xbdf)]['appen'+'dChil'+'d'])return null;continue;case'3':var _0x24f218=document[_0x37690e(0x4c9)+_0x37690e(0x64c)+_0x37690e(0x803)](_0x4436f2['FzKLa']);continue;case'4':document[_0x37690e(0xbdf)]['appen'+_0x37690e(0x635)+'d'](_0x24f218);continue;case'5':return _0x4f7d0c;case'6':_0x24f218[_0x37690e(0x4d9)]['cssTe'+'xt']=_0x4436f2['OZMzp'];continue;}break;}}}catch(_0x3f81db){if(_0x37690e(0x33a)===_0x4436f2[_0x37690e(0x203)])_0xef29e7[_0x37690e(0x24d)](_0xc904b1['type']+':\x20'+_0x40462b(_0x287324&&_0x568a11[_0x37690e(0x80b)+'ge']||_0x50a409)[_0x37690e(0xa06)](-0x6fc+0xc9b+-0x1*0x59f,-0x1558+0x20d3+-0xadb));else return null;}}function _0x5df4f5(_0xfaca03){var _0x3cf9ba=_0x105055,_0x34b09e={'piQII':function(_0x475523,_0x2127f0){return _0x4436f2['GRXie'](_0x475523,_0x2127f0);}};if(_0x3cf9ba(0xad8)===_0x3cf9ba(0x4c8)){if(!_0x12e950)return;var _0x18bd2b=_0x34b09e['piQII'](_0x478fa6['style'][_0x3cf9ba(0x4fa)+'ay'],'none');_0x5b465c[_0x3cf9ba(0x4d9)][_0x3cf9ba(0x4fa)+'ay']=_0x18bd2b?'':_0x3cf9ba(0x576),_0x2d5d7e(_0x3cf9ba(0x86b))['textC'+'onten'+'t']=_0x18bd2b?'-':'+';}else try{var _0x5a1e55=Math[_0x3cf9ba(0xa98)](-0x1*0x326+-0x1c27+0x1*0x1f4e,window['inner'+_0x3cf9ba(0x54f)]||document[_0x3cf9ba(0x3d7)+_0x3cf9ba(0x513)+'ement']['clien'+'tWidt'+'h']||-0x1799+-0x15f7*-0x1+0x26*0xb),_0x272ea8=Math[_0x3cf9ba(0xa98)](-0x605*0x4+0x17f4+0x21,window[_0x3cf9ba(0x272)+'Heigh'+'t']||document['docum'+_0x3cf9ba(0x513)+'ement'][_0x3cf9ba(0x37b)+_0x3cf9ba(0x982)+'ht']||-0x1*-0x11d2+-0x19cc+-0x1*-0x7fa);if(_0xfaca03['cv'][_0x3cf9ba(0x972)]!==_0x5a1e55||_0xfaca03['cv']['heigh'+'t']!==_0x272ea8){if('CQmQR'===_0x3cf9ba(0x700)){var _0x3abca0=_0x44297a[_0x3cf9ba(0x63c)+'Insta'+'nce']||_0xaafd91[_0x3cf9ba(0x63c)+_0x3cf9ba(0x478)]||_0x3e0a6c[_0x3cf9ba(0xa8d)];if(_0x3abca0)return _0x36c8a3[_0x3cf9ba(0x1a7)+'e']=_0x4436f2['zWhYa'],_0x3abca0;}else _0xfaca03['cv']['width']=_0x5a1e55,_0xfaca03['cv']['heigh'+'t']=_0x272ea8;}return{'w':_0x5a1e55,'h':_0x272ea8};}catch(_0x80e25d){return{'w':0x0,'h':0x0};}}function _0x44f7e3(_0x20f990){var _0x4a8561=_0x105055,_0x277fde={'vBRke':'bare\x20'+_0x4a8561(0x177)+_0x4a8561(0x466)+'ng','FmvLE':function(_0x1c809f,_0x3287e2){var _0x3f4290=_0x4a8561;return _0x4436f2[_0x3f4290(0x879)](_0x1c809f,_0x3287e2);}};if(_0x4a8561(0x55f)===_0x4a8561(0x760))return _0x3ad291['sourc'+'e']=_0x277fde[_0x4a8561(0xb02)],_0x5eed4b;else{var _0x1673b6=_0x4f7d0c;if(!_0x1673b6)return;var _0x46f198=_0x1673b6['cv'][_0x4a8561(0x69a)+_0x4a8561(0x274)]&&_0x1673b6['cv'][_0x4a8561(0x69a)+'ntext']('2d');if(!_0x46f198)return;var _0x368f41=_0x4436f2[_0x4a8561(0xb15)](_0x5df4f5,_0x1673b6);_0x46f198['clear'+_0x4a8561(0x6c6)](0x257+-0x2f8+0x7*0x17,-0x77b+0x6f9+0x82,_0x368f41['w'],_0x368f41['h']);if(!_0x3fc79c[_0x4a8561(0x8be)]||!_0x20f990||!_0x20f990['me'])return;var _0x4efc4e=_0x20f990['me'],_0x12d5d3=null,_0x4fe96c=_0x8ca6f[_0x4a8561(0x6ef)+'nNetw'+'orkSy'+'nc']||{},_0x1582a1=Object[_0x4a8561(0x5ec)](_0x4fe96c);for(var _0x16e21a=-0x304+-0x4a+-0x8d*-0x6;_0x4436f2['sHmHY'](_0x16e21a,_0x1582a1[_0x4a8561(0xb7c)+'h']);_0x16e21a++){var _0x2eea6e=_0x19bb2f(_0x4fe96c[_0x1582a1[_0x16e21a]][_0x4a8561(0xa5e)],0x1711+0x1*-0xb1a+-0xbc3,0x1*-0x1325+-0x1c23+0x2f4b*0x1);if(_0x2eea6e&&_0x2eea6e[0x18e*-0xb+0x2fe*0x6+-0x2*0x6d]===-0x6c4+-0x1d4+0x898&&_0x4436f2[_0x4a8561(0x795)](_0x2eea6e[0x1348+-0x289*0xb+0x89c],-0x20d4+0x58c+-0x18*-0x123)&&_0x2eea6e[-0x13*0xef+0x1887+0x4*-0x1b2]===0x1734+-0x156d+-0x1c7){_0x12d5d3=_0x4436f2['UfpPT'](_0x3c6e14,_0x4fe96c[_0x1582a1[_0x16e21a]]['ptr']+(0x3af*-0x3+-0x21b3*0x1+0x2d18),_0x4436f2['kQyrd']);break;}}for(var _0x5ee0a8=-0xfda+-0x1ded+0x2dc7;_0x5ee0a8<_0x20f990['list'][_0x4a8561(0xb7c)+'h'];_0x5ee0a8++){if(_0x4436f2['coVTb']!==_0x4a8561(0x3f1)){var _0x4c8b76=_0x746132==='v2'?0x1927+0x3b*0x13+-0x1d86:_0x277fde['FmvLE'](_0x10a909,'v3')?0x152a+0x206d+0x11dc*-0x3:0x4d7+-0x40a+0x43*-0x3,_0x5c87fd=_0x12fae9(_0x43f1e4[_0x4a8561(0xa5e)],_0x3ed906,_0x4c8b76);_0x5c87fd&&(_0x5b4c76[_0x4a8561(0x774)]=_0x5c87fd,_0x25b281['v']=_0x5c87fd[-0xcf7*-0x1+0x559*-0x5+0xdc6]);}else{var _0x53c3d7=_0x20f990['list'][_0x5ee0a8],_0x12bdd0=_0x12d5d3!==null&&_0x4436f2['EVwId'](_0x53c3d7[_0x4a8561(0x624)],_0x12d5d3),_0x31eb1b=_0x4436f2[_0x4a8561(0x7e3)](_0x147b0f,_0x4efc4e['eye'],[_0x53c3d7['x'],_0x53c3d7['y']-(0x1*0x24df+-0x2f*-0xa9+0x1*-0x43e5),_0x53c3d7['z']],_0x368f41['w'],_0x368f41['h']),_0x4bdefb=_0x4436f2[_0x4a8561(0x1ac)](_0x147b0f,_0x4efc4e[_0x4a8561(0x7d7)],[_0x53c3d7['x'],_0x53c3d7['y']+(0x19a0+-0xd29+-0x1*0xc77+0.8),_0x53c3d7['z']],_0x368f41['w'],_0x368f41['h']);if(_0x4436f2['VvNfI'](!_0x31eb1b,!_0x4bdefb))continue;var _0x2a80c2=Math[_0x4a8561(0x950)](_0x31eb1b['x'],_0x4bdefb['x']),_0x109ad0=Math['max'](_0x31eb1b['x'],_0x4bdefb['x']),_0x58d5f0=Math[_0x4a8561(0x950)](_0x31eb1b['y'],_0x4bdefb['y']),_0xf9ae16=Math['max'](_0x31eb1b['y'],_0x4bdefb['y']),_0x52ebbd=Math[_0x4a8561(0xa98)](0x1123+-0x11*-0xd7+-0x1f67,Math[_0x4a8561(0x950)](0x1*-0x567+0x8*-0x52+-0x1*-0x833,_0x109ad0-_0x2a80c2)),_0x5a4448=Math[_0x4a8561(0xa98)](-0xb22+0x9b*0x5+0x821,Math[_0x4a8561(0x950)](0xd3e+0x559*-0x1+-0x759,_0xf9ae16-_0x58d5f0)),_0x1e4ba2=(_0x2a80c2+_0x109ad0)/(0xf70+0x3a5+-0x1313),_0x318615=_0x4436f2['NGWdL'](_0x4436f2['AZuYB'](_0x58d5f0,_0xf9ae16),-0x13d+-0xf7f+0x1*0x10be);_0x46f198['strok'+'eStyl'+'e']=_0x12bdd0?_0x4a8561(0x7cf)+_0x4a8561(0x2a3)+'3,106'+_0x4a8561(0x17b):_0x4a8561(0x7cf)+_0x4a8561(0x8ec)+'10,11'+_0x4a8561(0xbf2)+')',_0x46f198[_0x4a8561(0x661)+'idth']=_0x12bdd0?-0x2331*0x1+0x449+-0xc1*-0x29:-0x262*-0xe+-0x1ae0+0x1*-0x67a,_0x46f198[_0x4a8561(0xaf3)+_0x4a8561(0x4fe)](_0x4436f2[_0x4a8561(0xb77)](_0x1e4ba2,_0x52ebbd/(0xa9b+-0x200c+0x11*0x143)),_0x4436f2['cROHI'](_0x318615,_0x5a4448/(0x1884+-0x198b*0x1+-0x109*-0x1)),_0x52ebbd,_0x5a4448),!_0x12bdd0&&(_0x46f198['fillS'+_0x4a8561(0x571)]=_0x4436f2[_0x4a8561(0x8db)],_0x46f198[_0x4a8561(0x26e)]=_0x4a8561(0x4ee)+_0x4a8561(0x3b9)+_0x4a8561(0x181)+'ce,Co'+_0x4a8561(0x85e)+'s,mon'+_0x4a8561(0x81e)+'e',_0x46f198['fillT'+'ext'](Math[_0x4a8561(0x679)](_0x53c3d7['d']||0x1acc+-0x8*-0x2bc+-0x37a*0xe)+'m',_0x4436f2['qhgfo'](_0x1e4ba2,_0x4436f2[_0x4a8561(0x21c)](_0x52ebbd,0xb4c+-0x61f+-0x52b*0x1)),_0x318615-_0x4436f2[_0x4a8561(0xb99)](_0x5a4448,0x1d42+0x266c*0x1+-0x11c*0x3d)-(-0x3*0x2f1+0x1da3+-0x14cd)));}}}}function _0xae1d80(){var _0x4eceb1=_0x105055,_0x3dfa15={'dsMHX':function(_0x1e10ab,_0x1df1ad){return _0x1e10ab^_0x1df1ad;},'zGKeX':function(_0x15c9e9,_0x4af053){return _0x15c9e9===_0x4af053;},'KXjrc':'obfI','ltwkD':function(_0x47e49f,_0x146aef){var _0x8fa043=_0x5dd8;return _0x4436f2[_0x8fa043(0x3f6)](_0x47e49f,_0x146aef);}};if('okwch'===_0x4436f2['iZdYW']){if(_0x24ccc1===_0x4eceb1(0x8fe))return _0x32e98d(_0x3dfa15[_0x4eceb1(0x449)](_0x2d39a9,_0x45a6eb));if(_0x3dfa15[_0x4eceb1(0x1f6)](_0x2a5b64,_0x3dfa15[_0x4eceb1(0xabf)]))return _0x1688e9^_0x310515|0x1*0x62d+0x4a*0x4c+-0xb*0x28f;return _0x3dfa15[_0x4eceb1(0x5f4)](_0x1003ff^_0x42ccad,-0xbf8*0x2+-0x53*-0x25+-0x170*-0x9)!==0xb8*-0x7+-0x83*0x15+0xfc7?0x20e*-0xc+0x1d*0x123+-0x84e:-0x56*0x1+-0xf4e+0x5b*0x2c;}else{var _0x5a80c9=_0x555ef5();if(!_0x5a80c9||!_0x5a80c9['cv'])return;try{var _0x17404b=_0x5a80c9['cv'][_0x4eceb1(0x69a)+'ntext']&&_0x5a80c9['cv'][_0x4eceb1(0x69a)+_0x4eceb1(0x274)]('2d');if(!_0x17404b)return;var _0x2d0ff9=_0x5a80c9['cv'][_0x4eceb1(0x972)],_0x4ee31e=_0x2d0ff9/(-0x7*0x243+-0x26b*0xf+0x341c),_0x232393=_0x13c12c(),_0x326f09=_0x232393['me'];_0x17404b[_0x4eceb1(0x923)+_0x4eceb1(0x6c6)](0x4*-0x44b+-0x1e96+0x2fc2,0x1ae0+0x2*-0x211+0x16be*-0x1,_0x2d0ff9,_0x2d0ff9),_0x17404b[_0x4eceb1(0xaf3)+'eStyl'+'e']=_0x4eceb1(0x7cf)+_0x4eceb1(0x8ec)+_0x4eceb1(0x1b2)+'7,.16'+')',_0x17404b[_0x4eceb1(0x661)+'idth']=0x1391*0x1+0x1*-0xc9b+0x89*-0xd;for(var _0x362fe2=0x8cc+0x426*0x7+-0x41*0x95;_0x4436f2['FBPGz'](_0x362fe2,0x1*0x134+0x3*-0x209+0x4ea);_0x362fe2++){if(_0x4eceb1(0xaf9)!==_0x4436f2['gvJye'])_0x17404b[_0x4eceb1(0x1ab)+_0x4eceb1(0xba5)](),_0x17404b['arc'](_0x4ee31e,_0x4ee31e,_0x4436f2[_0x4eceb1(0x6db)](_0x4436f2['kKNkG'](_0x4ee31e-(0x22*0x26+-0xe40+0x938),_0x362fe2),-0x1*-0xe9b+0x1b3e+-0x29d6),-0x243f+0xad6+0x1969,Math['PI']*(-0x1556+0x1*-0x223f+0x2ed*0x13)),_0x17404b[_0x4eceb1(0xaf3)+'e']();else{if(_0x4dc697[_0x1f6b84]['membe'+'rs'][_0x4eceb1(0xb7c)+'h']>=_0x492c4c)_0x119d04[_0x4eceb1(0x24d)](_0x1f8ced[_0x3c12eb]);}}_0x17404b[_0x4eceb1(0x1ab)+_0x4eceb1(0xba5)](),_0x17404b[_0x4eceb1(0x925)+'o'](0xc94+0x6b*-0x53+0x1*0x1621,_0x4ee31e),_0x17404b[_0x4eceb1(0xbf4)+'o'](_0x4436f2[_0x4eceb1(0x9a9)](_0x2d0ff9,-0x305*0x2+0xe21+-0x813),_0x4ee31e),_0x17404b[_0x4eceb1(0x925)+'o'](_0x4ee31e,-0xec3*0x2+-0xc*0x7c+0xb5*0x32),_0x17404b['lineT'+'o'](_0x4ee31e,_0x2d0ff9-(-0x1*0xfd9+0x173b+-0x75e*0x1)),_0x17404b[_0x4eceb1(0xaf3)+'e']();if(!_0x326f09){if(_0x4436f2['PEQnT'](_0x4eceb1(0x2fa),_0x4436f2[_0x4eceb1(0x396)])){if(_0x5a80c9['lg'])_0x5a80c9['lg'][_0x4eceb1(0x17e)+_0x4eceb1(0x14e)+'t']='';return;}else _0x4aa0a8[_0x4eceb1(0x2db)+_0x4eceb1(0xaf4)+'ved']===-0x1*-0x22fc+0x670*0x1+0x4*-0xa5b?_0x6cd604[_0x4eceb1(0x382)+_0x4eceb1(0x26c)]['push'](_0x4436f2[_0x4eceb1(0x57e)](_0x4436f2[_0x4eceb1(0x776)](_0x4436f2['FKQfl'](_0x4436f2['YVxiX']('0\x20of\x20',_0x58d90e['hooks'+_0x4eceb1(0x88d)])+_0x4436f2[_0x4eceb1(0xa46)],_0x4436f2['gfkFC'])+(_0x4eceb1(0x769)+_0x4eceb1(0x741)+_0x4eceb1(0x780)+'ered\x20'+_0x4eceb1(0xacf)+'\x20it\x20a'+'re\x20ig'+_0x4eceb1(0x674)+'\x20for\x20'+'the\x20l'+'ife\x20o'+'f\x20the'+_0x4eceb1(0x562)+'.\x20')+('Regis'+_0x4eceb1(0x6bc)+'\x20'),_0x33569c['hooks'+'Regis'+_0x4eceb1(0x6bc)+_0x4eceb1(0xb08)]),'\x20hook'+_0x4eceb1(0x70b)+_0x4eceb1(0xb5c)+_0x4eceb1(0x27e)+_0x4eceb1(0x453)+'\x20docu'+_0x4eceb1(0x7d3)+_0x4eceb1(0x1dd)+'.')):_0xdea43d[_0x4eceb1(0x382)+'ngs'][_0x4eceb1(0x24d)](_0x4436f2['XbgCE'](_0x4436f2[_0x4eceb1(0x218)](_0x4436f2[_0x4eceb1(0x2cf)](_0x4436f2[_0x4eceb1(0x607)](_0x4436f2[_0x4eceb1(0xb54)],_0x5ef63f['hooks'+_0x4eceb1(0xaf4)+_0x4eceb1(0x1d5)]),_0x4eceb1(0x2bf)),_0x428500['hooks'+'Total']),_0x4436f2[_0x4eceb1(0xb20)])+(_0x4eceb1(0x3aa)+_0x4eceb1(0x82c)+_0x4eceb1(0x13e)+'fo*)\x20'+_0x4eceb1(0xae3)+'id\x20do'+_0x4eceb1(0x468)+_0x4eceb1(0xa15)+'ch\x20th'+_0x4eceb1(0x46b)+_0x4eceb1(0x72f)));}var _0x1498fb=(_0x4ee31e-(0x1c03+-0x31*-0x58+-0x1f3*0x17))/_0x3fc79c['span'],_0x3a0530=null,_0x3490bd=_0x8ca6f['Photo'+_0x4eceb1(0xa30)+_0x4eceb1(0x3bd)+'nc']||{},_0xd27436=Object['keys'](_0x3490bd);for(var _0x3179b5=0x19d3*-0x1+0xc75+-0x2*-0x6af;_0x3179b5<_0xd27436[_0x4eceb1(0xb7c)+'h'];_0x3179b5++){if(_0x4436f2[_0x4eceb1(0x5ff)]!==_0x4436f2[_0x4eceb1(0x2a4)]){var _0x21d054=_0x4436f2['zbdMX'](_0x19bb2f,_0x3490bd[_0xd27436[_0x3179b5]][_0x4eceb1(0xa5e)],-0xd8e*-0x2+-0x1bf+-0x39*0x71,0x212d+0x7*0x229+-0x3049);if(_0x21d054&&_0x21d054[-0x1a*0xb8+0x54a+0xd66]===-0x2ff+-0x1*0x24d9+0x27d8&&_0x4436f2['hPrwg'](_0x21d054[-0x202+-0x2*0x5bb+0xd79],-0xafe+-0x1*-0x8f7+0x207)&&_0x4436f2[_0x4eceb1(0xb11)](_0x21d054[0xd1*0x8+-0x19a8+0x1322],0x1*-0x111d+-0x1bd6+0x2cf3)){_0x3a0530=_0x3c6e14(_0x3490bd[_0xd27436[_0x3179b5]]['ptr']+(0xa06*-0x1+-0x1811*-0x1+-0x7*0x1f5),_0x4eceb1(0x3e6));break;}}else{var _0x3dd0a6=_0x4e458e[_0x431356],_0x1bc8c8=typeof _0x3dd0a6['v']==='numbe'+'r'?_0x4436f2['ocBXF'](_0x4aeed7['round'](_0x4436f2[_0x4eceb1(0x918)](_0x3dd0a6['v'],-0x22e8+-0x1068*-0x1+0x1668)),-0x9df+0x11b6+-0x1*0x3ef):_0x3dd0a6['v'];_0xe64d4f['push'](_0x4436f2['rtyAV'](_0x4436f2[_0x4eceb1(0x7ba)](_0x4436f2['kdYQR'](_0x4436f2['BGLQn'](_0x4436f2[_0x4eceb1(0x498)]('\x20\x20',('0x'+_0x3dd0a6['o'][_0x4eceb1(0x322)+'ing'](-0x17f2+0x8*0x37+0x164a))[_0x4eceb1(0x38a)+'d'](-0xe2b+-0xcff+0x1b32))+'\x20',_0x3dd0a6['k'][_0x4eceb1(0x38a)+'d'](0x1*0x230d+0x53f*-0x5+-0x8c7)),'\x20'),_0x32ef66(_0x1bc8c8)['padEn'+'d'](-0x16a5+-0x5*-0x89+-0xa04*-0x2))+'\x20',_0x3dd0a6[_0x4eceb1(0x229)]||''));}}var _0x1c180e=-0x56d+-0x1*0x23ce+0x293b;for(var _0xdf9517=-0x205b+0x247+0x181*0x14;_0xdf9517<_0x232393[_0x4eceb1(0xac0)]['lengt'+'h'];_0xdf9517++){var _0x1a0056=_0x232393[_0x4eceb1(0xac0)][_0xdf9517],_0x570ae6=(_0x1a0056['x']-_0x326f09['feet'][0x1061*-0x1+-0x25df+0x3640])*_0x1498fb,_0x37fa6d=(_0x1a0056['z']-_0x326f09[_0x4eceb1(0x384)][0x3*-0x1f7+0x485*0x6+0x1537*-0x1])*_0x1498fb,_0x7d9366=Math['sqrt'](_0x4436f2['dYZCS'](_0x570ae6*_0x570ae6,_0x4436f2[_0x4eceb1(0x60c)](_0x37fa6d,_0x37fa6d))),_0x23de41=_0x4ee31e,_0x58cbfb=_0x4ee31e;if(_0x4436f2['IZoiQ'](_0x7d9366,_0x4ee31e-(0x1*0x18d+-0x1bfa+0x3d*0x6f)))_0x23de41=_0x4ee31e+_0x4436f2[_0x4eceb1(0x692)](_0x4436f2['QYiVy'](_0x570ae6,_0x7d9366),_0x4ee31e-(0x16*-0x192+-0x502+-0x1*-0x2794)),_0x58cbfb=_0x4436f2[_0x4eceb1(0x2b1)](_0x4ee31e,_0x37fa6d/_0x7d9366*(_0x4ee31e-(0x1b24+-0x1c99+-0x17b*-0x1)));else{if(_0x4436f2[_0x4eceb1(0x6bb)]!==_0x4436f2[_0x4eceb1(0x6bb)]){_0x5f487f(_0x594cd1[_0x4eceb1(0x6d2)]);try{var _0x34e14d=_0x3262f2[_0x4eceb1(0x272)+_0x4eceb1(0xbe5)+'t']||0x2559+-0x20a*-0xf+-0x40cf;if(_0x34e14d<-0x2*-0x388+-0xd52+0x8ae)_0x3f7e18(![]);}catch(_0x419809){}}else _0x23de41=_0x4ee31e+_0x570ae6,_0x58cbfb=_0x4436f2[_0x4eceb1(0x5e3)](_0x4ee31e,_0x37fa6d);}var _0x33c5cf=_0x4436f2['NpbED'](_0x3a0530,null)&&_0x1a0056[_0x4eceb1(0x624)]===_0x3a0530;_0x17404b[_0x4eceb1(0x837)+_0x4eceb1(0x571)]=_0x33c5cf?_0x4eceb1(0xa5f)+'6a':'#ff6e'+'74',_0x17404b['begin'+_0x4eceb1(0xba5)](),_0x17404b[_0x4eceb1(0x85a)](_0x23de41,_0x58cbfb,_0x33c5cf?-0x6b+0x2f*0xb5+-0x20ce:0x15d*-0xd+-0x1*-0x1f67+0x1*-0xdab+0.20000000000000018,0x6bc*-0x2+0x7*0x111+0x601,Math['PI']*(0xb6f*-0x1+0x1a7e+-0x1*0xf0d)),_0x17404b[_0x4eceb1(0x544)](),_0x1c180e++;}_0x17404b[_0x4eceb1(0x837)+_0x4eceb1(0x571)]=_0x4eceb1(0x731)+'a8',_0x17404b[_0x4eceb1(0x1ab)+_0x4eceb1(0xba5)](),_0x17404b[_0x4eceb1(0x85a)](_0x4ee31e,_0x4ee31e,-0x7e2+0x1b6f+-0x52*0x3d,-0x3d*0x90+0x5ad+-0x1ca3*-0x1,Math['PI']*(-0x25d5+0x823+0x1db4)),_0x17404b['fill'](),_0x5a80c9['lg']&&(_0x5a80c9['lg']['textC'+_0x4eceb1(0x14e)+'t']=_0x4436f2['GQhCh'](_0x4436f2[_0x4eceb1(0x350)](_0x4436f2['AwNxs'](_0x4436f2[_0x4eceb1(0x5c3)]+_0x1c180e+_0x4436f2[_0x4eceb1(0xaaf)],Math[_0x4eceb1(0x679)](_0x3fc79c['span'])),'m')+(_0x3fc79c['boxes']?_0x4436f2[_0x4eceb1(0x955)](_0x4eceb1(0x44e)+'v\x20',Math['round'](_0xf673d5['fov']))+'°':''),_0x4436f2['hbQPB'](_0x3a0530,null)?_0x4eceb1(0x78e)+'am'+_0x3a0530:''));}catch(_0xbb6f52){}}}function _0x5ed117(){var _0x2fed6f=_0x105055;if(_0x4436f2['MnKgY']('iVoyF',_0x4436f2['fNwcu'])){var _0xc20094=_0x8ca6f[_0x2fed6f(0x6ef)+'nNetw'+_0x2fed6f(0x3bd)+'nc']||{};if(!Object[_0x2fed6f(0x5ec)](_0xc20094)[_0x2fed6f(0xb7c)+'h'])return![];return!!_0x231cf8();}else _0x1a66d2(_0x30cb83['on'],_0x4436f2['uxQzY'](_0x5a68ea,_0x3f6766['value'])||-0x2031+-0x72e*-0x5+0xc*-0x4f);}function _0x46a904(_0x1f5c04){var _0x2bf1af=_0x105055,_0x43e706={'dNeFp':function(_0x52623d,_0x5d7bfe){return _0x52623d===_0x5d7bfe;},'YNRjI':function(_0x4385b2,_0x4b241d){return _0x4385b2-_0x4b241d;}};try{if(_0x4436f2['SvtxF']!==_0x4436f2[_0x2bf1af(0x2dd)]){var _0x1249b1=_0x251804;if(_0x1249b1&&_0x1249b1['el'])_0x1249b1['el'][_0x2bf1af(0x4d9)][_0x2bf1af(0x4fa)+'ay']=_0x1f5c04?'':'none';var _0x379e8c=_0x4f7d0c;if(_0x379e8c&&_0x379e8c['cv'])_0x379e8c['cv']['style'][_0x2bf1af(0x4fa)+'ay']=_0x1f5c04?'':'none';}else{var _0x15383c={'wdRev':function(_0xd8f08c,_0x18d34b){var _0x463ea8=_0x2bf1af;return _0x43e706[_0x463ea8(0x935)](_0xd8f08c,_0x18d34b);}},_0x2972cd=_0xffe3b7[_0x2bf1af(0x25c)+'r'](function(_0x3cd103){var _0x24e372=_0x2bf1af;return _0x15383c['wdRev'](_0x3cd103[_0x24e372(0x374)],_0x12cf50);})[0x2176*0x1+-0x5e*0x1d+-0x50*0x49];_0xc12121={'type':_0xe1b7c9,'atMs':_0x43e706[_0x2bf1af(0x31e)](_0x1baf50['now'](),_0x4f4c20),'originalFunc':!!(_0x2972cd&&_0x2972cd[_0x2bf1af(0xa27)]&&typeof _0x2972cd[_0x2bf1af(0xa27)]['origi'+_0x2bf1af(0x915)+'nc']===_0x2bf1af(0x797)+'ion'),'resolveGameAtFire':!!_0x5caab0(),'gameSourceAtFire':_0x396e38['sourc'+'e']};}}catch(_0x1b1660){}}function _0x5cba5e(){var _0x11a063=_0x105055,_0x238b3d={'GRvhk':_0x4436f2['ZXwTs'],'tQKKj':_0x4436f2[_0x11a063(0xbf1)],'AHpVa':function(_0x51623f){return _0x51623f();},'iRQpZ':function(_0x4ec0bd,_0x3013fd){var _0x2d3393=_0x11a063;return _0x4436f2[_0x2d3393(0xb29)](_0x4ec0bd,_0x3013fd);}};if(!_0x3fc79c['on']||!_0x4436f2['bUnDd'](_0x5ed117)){_0x4436f2[_0x11a063(0x891)](_0x46a904,![]),setTimeout(_0x5cba5e,-0x885*0x3+-0x1*0xeb3+0x14b7*0x2);return;}_0x46a904(!![]),_0x419332(),_0x4436f2[_0x11a063(0x2b9)](_0x555ef5);if(_0x3fc79c[_0x11a063(0x8be)])_0x4436f2[_0x11a063(0x756)](_0x33dd8d);var _0x5ea94a=null;try{_0x5ea94a=_0x13c12c();}catch(_0x120b2c){}try{_0xae1d80();}catch(_0x20a775){}try{if(_0x4436f2[_0x11a063(0x1b1)]===_0x4436f2[_0x11a063(0x1b1)])_0x44f7e3(_0x5ea94a);else{var _0x3c9343=_0x238b3d['GRvhk'][_0x11a063(0xb19)]('|'),_0x28499e=0xb1d+0x2515+0x18e*-0x1f;while(!![]){switch(_0x3c9343[_0x28499e++]){case'0':_0x101fe9['min']=_0x1b6f3b(_0x47c615);continue;case'1':_0x101fe9['step']=_0x236be8(_0x7c4ea);continue;case'2':_0x101fe9['max']=_0xcf1c1d(_0x407b03);continue;case'3':var _0x101fe9=_0x1507bb[_0x11a063(0x4c9)+_0x11a063(0x64c)+'ent'](_0x11a063(0xb06));continue;case'4':_0xb994f1[_0x11a063(0x286)]=_0x4e9490;continue;case'5':return _0xb994f1;case'6':var _0xb994f1=_0x2bb9db('div',_0x238b3d['tQKKj']);continue;case'7':_0xb994f1[_0x11a063(0x48e)+'dChil'+'d'](_0x4dd3f8);continue;case'8':_0x101fe9[_0x11a063(0x374)]='range';continue;case'9':_0x101fe9[_0x11a063(0x743)+'ut']=function(){_0x5df6d8(_0x187401['pXhiq'](_0x23863f,_0x101fe9['value'])||_0x541180),_0x4e9490();};continue;case'10':var _0x4dd3f8=_0x53f594(_0x11a063(0xa31),'sk-va'+'l');continue;case'11':_0x238b3d[_0x11a063(0x3cf)](_0x4e9490);continue;case'12':var _0x4e9490=function(){var _0x48cac4=_0x11a063,_0x195bdd=_0x133e5d();_0x101fe9[_0x48cac4(0x52b)]=_0x187401[_0x48cac4(0x482)](_0x286c8f,_0x195bdd),_0x4dd3f8[_0x48cac4(0x17e)+'onten'+'t']=(_0x3a9a47<-0x1*0x10df+-0x1231+-0x2311*-0x1?_0x195bdd['toFix'+'ed'](0x1d*-0xfb+0xb36+0x113a):_0x187401['jBxUu'](_0x2c1b15,_0x827f76['round'](_0x195bdd)))+(_0x101fe9['datas'+'et']['unit']||'');var _0x5a6fa7=_0x187401[_0x48cac4(0x77e)](_0x187401['KQpBO'](_0x195bdd,_0x37323e),_0x336efa-_0x4e5209)*(-0xd9*-0x2b+-0x25*-0xe3+-0x44de);_0x101fe9['style'][_0x48cac4(0xaa4)+_0x48cac4(0x67c)+'y']('--p',_0x187401[_0x48cac4(0x863)](_0x5a6fa7,'%'));};continue;case'13':_0x36769f['syncs'][_0x11a063(0x24d)](_0x4e9490);continue;case'14':_0xb994f1[_0x11a063(0xb06)]=_0x101fe9;continue;case'15':_0x101fe9[_0x11a063(0x269)+_0x11a063(0x9d5)]=_0x11a063(0x295)+_0x11a063(0x92b);continue;case'16':var _0x187401={'jBxUu':function(_0x57c61a,_0x347158){return _0x57c61a(_0x347158);},'ZIhYR':function(_0x4a8106,_0x65541c){return _0x4a8106/_0x65541c;},'KQpBO':function(_0x2b680a,_0x275706){return _0x2b680a-_0x275706;},'hChaU':function(_0x32e35e,_0x2b9369){return _0x238b3d['iRQpZ'](_0x32e35e,_0x2b9369);},'pXhiq':function(_0x48847a,_0x3515c8){return _0x48847a(_0x3515c8);}};continue;case'17':_0xb994f1[_0x11a063(0x48e)+'dChil'+'d'](_0x101fe9);continue;}break;}}}catch(_0x3fe3c7){}_0x4436f2[_0x11a063(0xad1)](setTimeout,_0x5cba5e,-0x9c1*-0x1+0x1*-0x131e+0x98f*0x1);}function _0x489b3b(){var _0x3aa71c=_0x105055,_0x51bfd4={'ympuc':function(_0x12fa23,_0x52e8b6){return _0x12fa23+_0x52e8b6;},'qgFvI':function(_0x558a07,_0x9cffe4){return _0x558a07>_0x9cffe4;},'aNrmw':function(_0x4f89a2,_0x276add){return _0x4f89a2<_0x276add;},'hoHuQ':_0x3aa71c(0xad7),'TWJIE':function(_0x2f3259,_0x56782c){var _0x407210=_0x3aa71c;return _0x4436f2[_0x407210(0x96a)](_0x2f3259,_0x56782c);},'SZcJs':function(_0x358b1){return _0x4436f2['NvXkh'](_0x358b1);},'iOtoE':function(_0x522c9e,_0xe8af50){return _0x522c9e<=_0xe8af50;}},_0x1d077d=window[_0x3aa71c(0x41e)+'WebMo'+_0x3aa71c(0x263)]&&window['Unity'+_0x3aa71c(0x16d)+_0x3aa71c(0x263)]['Runti'+'me']||null,_0x24ec78=_0x1d077d&&_0x1d077d[_0x3aa71c(0x191)+'pCont'+'ext'],_0x2ab574=_0x24ec78&&_0x24ec78[_0x3aa71c(0x15a)+'tData'],_0x352d3e={},_0xf9fcce=[];for(var _0x34b5bf in _0x41484b){_0x352d3e[_0x34b5bf]=_0x4436f2[_0x3aa71c(0x35f)]('0x',_0x41484b[_0x34b5bf]['ptr'][_0x3aa71c(0x322)+_0x3aa71c(0x1c0)](0x1259+0x1*0x1c6a+-0x31d*0xf));if(_0x41484b[_0x34b5bf][_0x3aa71c(0x3da)+'ced'])_0xf9fcce[_0x3aa71c(0x24d)](_0x34b5bf);}var _0x30800c={};for(var _0x319899 in _0x41484b)_0x30800c[_0x319899]=_0x1c491c(_0x41484b[_0x319899]['ptr']);var _0x5b17bb={},_0x3f7c13=null;try{_0x5b17bb=_0x4436f2[_0x3aa71c(0x9e9)](_0xa6bb05);}catch(_0x505b61){_0x4436f2[_0x3aa71c(0x5aa)](_0x3aa71c(0x3ce),_0x4436f2[_0x3aa71c(0x59f)])?(_0x24b13b[_0x3aa71c(0x2e9)]=_0x916cfe,_0x33174b()):_0x3f7c13=_0x4436f2['XyXTy'](String,_0x505b61&&_0x505b61['messa'+'ge']||_0x505b61);}var _0x3e792f={'version':_0x3838a0,'when':new Date()[_0x3aa71c(0xb53)+_0x3aa71c(0x40e)+'g'](),'elapsedMs':_0x4436f2['rFOOQ'](Date[_0x3aa71c(0x2d6)](),_0x327157),'frame':location['href']['slice'](0x627+-0x71*-0x21+-0x8*0x297,-0x156e+0x16b1*0x1+0x1*-0xcb),'host':_0x3232e3,'frameRole':_0x36470f,'uwmk':!!_0x1d077d,'il2CppContext':!!_0x24ec78,'typeCount':_0x2ab574?Object[_0x3aa71c(0x5ec)](_0x2ab574)[_0x3aa71c(0xb7c)+'h']:null,'arm':_0x16e196,'assemblies':_0x4b11c1,'hooksTotal':_0x5d08a2[_0x3aa71c(0xb7c)+'h'],'hooksApplied':_0x3c5b96(),'hooksResolved':_0x4436f2['jTwqT'](_0x38d4e0),'hooksRegisteredAtArm':_0x16e196['hooks'+_0x3aa71c(0x230)+_0x3aa71c(0x6bc)]||-0x7a*0x9+-0x51b+0x5*0x1e1,'hookErrors':_0x242b92[_0x3aa71c(0xa06)](0x1388*-0x2+0x940+0x30*0x9f,0x4a7*0x3+-0x1d*0x21+-0xa30),'instances':_0x352d3e,'classNames':_0x30800c,'instancesReplaced':_0xf9fcce,'hookFireProof':_0x530a89,'survey':_0x5b17bb,'actkKeys':_0x1e89d6,'surveyRows':Object[_0x3aa71c(0x5ec)](_0x5b17bb)[_0x3aa71c(0x7e8)+'e'](function(_0x5ae578,_0x46ebca){var _0x345608=_0x3aa71c;return _0x4436f2[_0x345608(0x498)](_0x5ae578,_0x5b17bb[_0x46ebca][_0x345608(0xb7c)+'h']);},0x1db1+-0x214b+-0x1*-0x39a),'reads':{'ok':_0x311dd0['ok'],'failed':_0x311dd0['faile'+'d'],'lastError':_0x311dd0[_0x3aa71c(0x7c6)+'rror'],'source':_0x311dd0[_0x3aa71c(0x1a7)+'e']},'identity':_0x4436f2[_0x3aa71c(0xb69)](_0x7827ff),'globals':_0x4b6eca(),'wasmMemory':{'captured':!!_0x52e821,'atMs':_0x18f98c,'bytes':(function(){var _0xc8cae5=_0x3aa71c;try{return _0x52e821&&_0x52e821[_0xc8cae5(0xaec)+'r']?_0x52e821[_0xc8cae5(0xaec)+'r'][_0xc8cae5(0x401)+_0xc8cae5(0x1df)]:0x1277+0x1178+-0x1*0x23ef;}catch(_0x5ef9b1){if(_0xc8cae5(0x517)!==_0x51bfd4[_0xc8cae5(0x7d0)])return-0x2684+-0x1176*0x1+0x37fa;else{var _0x3c33ab=_0x327bd4['c'][_0x1a89f5]['v'],_0x3672f0=_0x51bfd4[_0xc8cae5(0x723)](_0x3c33ab[0x17b7+0x35*-0x11+0x205*-0xa]*_0x3c33ab[-0x17*0x9+-0x1588*0x1+0x7*0x331],_0x3c33ab[-0x251d+-0x5e6+0x2b05]*_0x3c33ab[0x25f7+-0xe0f*-0x1+-0x3404]);(_0x51bfd4['qgFvI'](_0x3672f0,_0x2b9e09)||_0x3672f0===_0x545c7c&&_0x51bfd4[_0xc8cae5(0xa71)](_0x3c33ab[0x1a6e*-0x1+0x19b*0xd+0x590],_0x1c6195['v'][-0x1365+-0x25a4+0x390a]))&&(_0x51e048=_0x3672f0,_0x104d56=_0x2494fa['c'][_0x2c3468]);}}}()),'exportKeys':_0x4f9b1f},'diff':_0x4073b9['slice'](0x33b*0x1+0x11c4+-0x14ff,0x24f2*0x1+0x9e+-0x10a*0x24),'speed':{'on':_0x69e834['on'],'factor':_0x69e834['facto'+'r'],'writes':_0x21560f,'scaled':_0x199153['slice'](0x917+0x1*0x6d5+0x7f6*-0x2,-0x1ca7+-0xf31+0x15f4*0x2),'skipped':_0x57f7d2['slice'](0x55*-0x46+0x1321+0x41d,-0xf4c+0x3fd+0xb5f)},'esp':_0x17006a(),'view':_0x519a61(),'angles':(function(){var _0x24d3e6=_0x3aa71c,_0x4520d9=('3|0|1'+_0x24d3e6(0xbd1))[_0x24d3e6(0xb19)]('|'),_0x449924=0x1*-0x2034+0x11a9+-0xe8b*-0x1;while(!![]){switch(_0x4520d9[_0x449924++]){case'0':var _0x1b123e=null,_0x13aa06=null;continue;case'1':var _0x37a928=_0x231cf8();continue;case'2':if(_0x37a928){var _0x32b60d=_0x147b0f(_0x37a928['eye'],[_0x37a928['eye'][-0x130+0xa94+-0x964],_0x37a928[_0x24d3e6(0x7d7)][-0x4f7+-0x3f*0xc+0x7ec],_0x37a928[_0x24d3e6(0x7d7)][0x10f8+-0xe49+-0x2ad]+(-0x14b1*-0x1+-0x565+0x1b*-0x91)],0x5f*0xd+0xda4+-0xe8f,-0x2f1*0x1+-0x35*0x25+-0x26b*-0x6);_0x32b60d&&(_0x1b123e=_0x51bfd4['TWJIE'](_0x32b60d['x'],0x2691+0x5ec*0x2+-0x2e81),_0x13aa06=_0x32b60d['y']/(0x6d5+-0x2e9*0x1+0x2*-0x2));}continue;case'3':var _0x2e843a=_0x51bfd4[_0x24d3e6(0x324)](_0x5a592f);continue;case'4':return{'identified':_0x1cfe95['ident'+'ified'],'why':_0x1cfe95['why'],'rawPitch':_0x1cfe95[_0x24d3e6(0x8f4)],'rawYaw':_0x1cfe95['yaw'],'fov':_0xf673d5['fov'],'fovSane':_0xf673d5['fov']>=-0xd0f+-0x1*0x773+0x14be&&_0x51bfd4['iOtoE'](_0xf673d5[_0x24d3e6(0x2e9)],0x184f*-0x1+-0x1ff1+-0xb56*-0x5),'centreX':_0x1b123e,'centreY':_0x13aa06};}break;}}()),'fov':_0xf673d5['fov'],'espView':{'on':_0x3fc79c['on'],'boxes':_0x3fc79c[_0x3aa71c(0x8be)],'span':_0x3fc79c['span']},'local':(function(){var _0x307f51=_0x3aa71c,_0x1c9ba1=_0x231cf8();if(!_0x1c9ba1)return null;return{'ptr':'0x'+_0x1c9ba1[_0x307f51(0xa5e)]['toStr'+'ing'](-0xb3*-0xc+0x6*-0x383+0xcbe),'feet':_0x1c9ba1[_0x307f51(0x384)],'eye':_0x1c9ba1[_0x307f51(0x7d7)],'posAt':_0x1c9ba1[_0x307f51(0x4d6)],'copies':_0x1c9ba1['copie'+'s'],'cluster':_0x1c9ba1[_0x307f51(0x5ac)+'er'],'eyeHeight':_0x78cdb1,'pitch':_0x1c9ba1[_0x307f51(0x8f4)],'yaw':_0x1c9ba1[_0x307f51(0xb87)],'reach':_0x1c9ba1[_0x307f51(0xa8c)]};}()),'uwmkLog':_0x25e30e[_0x3aa71c(0xa06)](-0x3d1+0x895*0x3+-0x15ee,0x5f7*0x2+-0x1f90+0x13b6),'warnings':[]};if(_0x3f7c13)_0x3e792f['warni'+'ngs']['push'](_0x3aa71c(0x54b)+_0x3aa71c(0x952)+_0x3aa71c(0x800)+_0x3f7c13);if(_0x16e196[_0x3aa71c(0xa60)])_0x3e792f[_0x3aa71c(0x382)+_0x3aa71c(0x26c)]['push'](_0x4436f2[_0x3aa71c(0xbb0)](_0x4436f2[_0x3aa71c(0x33c)],_0x16e196[_0x3aa71c(0xa60)]));if(_0x4436f2['afcGJ'](_0x3e792f['surve'+_0x3aa71c(0xa0d)],0x2127+-0x21d4+0xad)&&Object[_0x3aa71c(0x5ec)](_0x3e792f['insta'+_0x3aa71c(0x4dd)])[_0x3aa71c(0xb7c)+'h']>-0x1789+0x8*-0x69+-0x5*-0x55d){if(_0x3aa71c(0x4ea)!==_0x3aa71c(0x4ea))return _0x5ca5be['o'];else _0x3e792f[_0x3aa71c(0x382)+'ngs'][_0x3aa71c(0x24d)](_0x4436f2[_0x3aa71c(0x606)]('captu'+_0x3aa71c(0x703),Object['keys'](_0x3e792f['insta'+_0x3aa71c(0x4dd)])['lengt'+'h'])+(_0x3aa71c(0x649)+_0x3aa71c(0x221)+'\x20but\x20'+'read\x20'+_0x3aa71c(0x3a2)+'lds.\x20')+(_0x311dd0[_0x3aa71c(0x7c6)+_0x3aa71c(0x1e9)]?_0x4436f2[_0x3aa71c(0x43e)]('Reaso'+_0x3aa71c(0x349),_0x311dd0[_0x3aa71c(0x7c6)+_0x3aa71c(0x1e9)]):_0x4436f2[_0x3aa71c(0xc03)]));}if(_0x3e792f[_0x3aa71c(0x46f)+_0x3aa71c(0x9cd)]&&_0x3e792f['ident'+_0x3aa71c(0x9cd)]['tagMa'+_0x3aa71c(0x890)]===![]){if(_0x4436f2['sEDYH'](_0x3aa71c(0xa82),'hWiUC')){var _0x3ff888={'OFval':_0x3aa71c(0x6b0)+'d'};_0x227e19[_0x3aa71c(0x551)+'oard'][_0x3aa71c(0xb63)+_0x3aa71c(0x79d)](_0x342207)['then'](function(){var _0x4a3055=_0x3aa71c;_0x3abe03[_0x4a3055(0x17e)+_0x4a3055(0x14e)+'t']=_0x3ff888['OFval'];});}else _0x3e792f[_0x3aa71c(0x382)+'ngs']['push'](_0x4436f2[_0x3aa71c(0xa33)](_0x3aa71c(0x19c)+'ER\x20UW'+'MK\x20CO'+_0x3aa71c(0x7fa)+'OK\x20OV'+'ER\x20wi'+_0x3aa71c(0x65a)+'Unity'+'WebMo'+_0x3aa71c(0x8ad)+'\x20The\x20'+_0x3aa71c(0xa4e)+_0x3aa71c(0x7b0)+'\x20arme'+_0x3aa71c(0x308)+'\x20'+('repla'+'ced\x20b'+'y\x20a\x20d'+_0x3aa71c(0xbc9)+_0x3aa71c(0x475)+'nstan'+_0x3aa71c(0x887)+_0x3aa71c(0x8aa)+'are\x20a'+_0x3aa71c(0x3fc)+'\x20the\x20'+_0x3aa71c(0x995)+_0x3aa71c(0x649)+_0x3aa71c(0xba0)+'r\x20')+_0x4436f2[_0x3aa71c(0x320)],_0x4436f2['MOuIF']));}_0x3e792f[_0x3aa71c(0x46f)+_0x3aa71c(0x9cd)]&&_0x3e792f[_0x3aa71c(0x46f)+'ity'][_0x3aa71c(0x956)+'nRunt'+_0x3aa71c(0x95c)+_0x3aa71c(0xa72)+'ted']===![]&&(_0x4436f2['mhSFz']==='ugpcZ'?_0x5c18f6['oncli'+'ck']=function(){_0x109c4e(_0x2c785e);}:_0x3e792f[_0x3aa71c(0x382)+'ngs']['push'](_0x4436f2[_0x3aa71c(0x789)](_0x3aa71c(0x956)+_0x3aa71c(0x550)+'ntime'+_0x3aa71c(0x2d3)+_0x3aa71c(0x61d)+_0x3aa71c(0x65a)+'Unity'+'WebMo'+'dkit.'+_0x3aa71c(0xa4e)+_0x3aa71c(0x932)+_0x3aa71c(0x630)+_0x3aa71c(0x49f)+'\x20was\x20'+_0x3aa71c(0x406)+'\x20',_0x4436f2[_0x3aa71c(0x122)])));if(_0x3e792f[_0x3aa71c(0x5b4)]&&_0x3e792f[_0x3aa71c(0x5b4)]['note'])_0x3e792f[_0x3aa71c(0x382)+_0x3aa71c(0x26c)][_0x3aa71c(0x24d)](_0x4436f2['fWlqH'](_0x3aa71c(0x2ab),_0x3e792f[_0x3aa71c(0x5b4)][_0x3aa71c(0x80a)]));if(_0x3e792f[_0x3aa71c(0xb47)+'ls']&&!_0x3e792f[_0x3aa71c(0xb47)+'ls']['heapU'+'8']){var _0x21a6c1='';_0x3e792f['hookF'+'irePr'+'oof']&&(_0x21a6c1=_0x4436f2['wAIjV'](_0x4436f2[_0x3aa71c(0xa63)](_0x4436f2[_0x3aa71c(0x14f)](_0x4436f2[_0x3aa71c(0x66f)]+_0x3e792f[_0x3aa71c(0x5bc)+'irePr'+'oof'][_0x3aa71c(0xb4a)],'ms\x20wi'+'th\x20or'+'igina'+'lFunc'+'=')+_0x3e792f['hookF'+_0x3aa71c(0x220)+'oof'][_0x3aa71c(0x1c8)+_0x3aa71c(0x915)+'nc']+_0x4436f2['euLRh'],_0x3e792f[_0x3aa71c(0x5bc)+_0x3aa71c(0x220)+'oof']['resol'+_0x3aa71c(0x6d7)+_0x3aa71c(0x8b0)+'re']),'\x20(sou'+'rce:\x20')+(_0x3e792f['hookF'+'irePr'+'oof'][_0x3aa71c(0xabd)+_0x3aa71c(0x754)+'AtFir'+'e']||'none')+(_0x3aa71c(0x7dd)+_0x3aa71c(0x2a2)+_0x3aa71c(0x27c)+_0x3aa71c(0x627)+_0x3aa71c(0x559)+_0x3aa71c(0x523)+'en\x20an'+_0x3aa71c(0x3a6)+_0x3aa71c(0x8e6)+'eacha'+_0x3aa71c(0xb01)+_0x3aa71c(0x3fd))),_0x3e792f[_0x3aa71c(0x382)+_0x3aa71c(0x26c)][_0x3aa71c(0x24d)](_0x4436f2['UFvLR'](_0x4436f2['GdSOa'](_0x3aa71c(0x41e)+_0x3aa71c(0x5eb)+_0x3aa71c(0x133)+_0x3aa71c(0x8e6)+_0x3aa71c(0x3ad)+'ed\x20ye'+'t\x20(so'+'urce:'+'\x20'+(_0x3e792f['globa'+'ls']['gameS'+_0x3aa71c(0x754)]||_0x4436f2['dKCBw'])+_0x4436f2[_0x3aa71c(0x3c3)],_0x4436f2['QsXli']),_0x21a6c1));}(_0x3e792f['globa'+'ls']&&!_0x3e792f['globa'+'ls'][_0x3aa71c(0x52b)+'Wrapp'+'er']||_0x3e792f[_0x3aa71c(0xb47)+'ls'][_0x3aa71c(0x52b)+_0x3aa71c(0x8d6)+'er']===_0x3aa71c(0x149)+_0x3aa71c(0xb6c))&&_0x3e792f['warni'+'ngs']['push'](_0x4436f2['ylxjm']);if(_0x3e792f['hooks'+_0x3aa71c(0x88d)]>0x1d6b+-0x2d*-0x8f+-0x2*0x1b47&&_0x3e792f['hooks'+_0x3aa71c(0x1f8)+'ed']===0x25a8+-0x13bf+-0x11e9&&_0x2ab574){if(_0x4436f2['vmSpP'](_0x3e792f[_0x3aa71c(0x2db)+_0x3aa71c(0xaf4)+_0x3aa71c(0x1d5)],-0x252a+-0x1*-0x79b+-0x439*-0x7)){if(_0x3aa71c(0x395)===_0x4436f2[_0x3aa71c(0x66d)])_0x3e792f['warni'+_0x3aa71c(0x26c)]['push'](_0x4436f2[_0x3aa71c(0x457)](_0x4436f2['ZKRgP'](_0x4436f2['gpnwg'](_0x4436f2['yfKgR'](_0x4436f2['BRfWU'],_0x3e792f['hooks'+_0x3aa71c(0x88d)])+_0x4436f2[_0x3aa71c(0xa46)],_0x4436f2[_0x3aa71c(0x23b)])+(_0x3aa71c(0x769)+'oks\x20r'+_0x3aa71c(0x780)+_0x3aa71c(0x2fd)+'after'+_0x3aa71c(0xab5)+_0x3aa71c(0xb37)+_0x3aa71c(0x674)+'\x20for\x20'+'the\x20l'+'ife\x20o'+'f\x20the'+'\x20page'+'.\x20')+_0x4436f2['HYalG'],_0x3e792f['hooks'+_0x3aa71c(0x230)+'tered'+_0x3aa71c(0xb08)]),'\x20hook'+_0x3aa71c(0x70b)+_0x3aa71c(0xb5c)+'\x20armi'+'ng\x20at'+'\x20docu'+_0x3aa71c(0x7d3)+'start'+'.'));else{var _0x5c8f88=_0x5daa47[_0x3aa71c(0x4b9)];if(!_0x5c8f88||_0x5c8f88[_0x3aa71c(0x73e)+_0x3aa71c(0x9da)]!==_0x48ebab)return;try{if(_0x5c8f88['kind']===_0x3aa71c(0x454)){_0x4436f2[_0x3aa71c(0x2b9)](_0x1b5a90)[_0x3aa71c(0x41b)]({'host':_0x5c8f88[_0x3aa71c(0x7eb)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x5c8f88['kind']==='repor'+'t')_0xeb3b51()[_0x3aa71c(0x41b)](_0x5c8f88['repor'+'t']);}catch(_0x2f77da){_0x190f95['warn'](_0x3aa71c(0x361)+_0x3aa71c(0x8cc)+'\x20pane'+_0x3aa71c(0x59d)+'ate\x20f'+'ailed',_0x4436f2['SHfun']+_0x353f24,_0x2f77da);}}}else _0x3e792f[_0x3aa71c(0x382)+_0x3aa71c(0x26c)]['push'](_0x4436f2['UwUkI'](_0x4436f2[_0x3aa71c(0x626)](_0x3aa71c(0xa6c)+_0x3aa71c(0x3a0)+'ved\x20',_0x3e792f[_0x3aa71c(0x2db)+'Resol'+_0x3aa71c(0x1d5)])+_0x3aa71c(0x2bf),_0x3e792f['hooks'+'Total'])+('\x20hook'+'(s)\x20t'+_0x3aa71c(0x4f6)+'able\x20'+'index'+_0x3aa71c(0x158)+'appli'+'ed\x20no'+'ne.\x20T'+_0x3aa71c(0xc0b)+_0x3aa71c(0xa9e)+_0x3aa71c(0x3f0))+(_0x3aa71c(0x3aa)+_0x3aa71c(0x82c)+'hodIn'+'fo*)\x20'+_0x3aa71c(0xae3)+_0x3aa71c(0xb72)+_0x3aa71c(0x468)+'t\x20mat'+_0x3aa71c(0x855)+'is\x20bu'+_0x3aa71c(0x72f)));}return _0x3e792f[_0x3aa71c(0x2db)+'Appli'+'ed']>-0x1a2e+-0x2b*-0x7c+0x55a&&!_0x3e792f['insta'+'nces'][_0x3aa71c(0x2d8)+'ntrol'+'ler']&&_0x3e792f[_0x3aa71c(0x382)+_0x3aa71c(0x26c)]['push'](_0x4436f2[_0x3aa71c(0x625)]+_0x4436f2[_0x3aa71c(0x3e8)]),_0x3e792f['insta'+'ncesR'+_0x3aa71c(0x1a3)+'ed']['lengt'+'h']&&(_0x4436f2['GRXie'](_0x3aa71c(0x1e3),'zhLLz')?_0x3e792f['warni'+'ngs'][_0x3aa71c(0x24d)](_0x4436f2['scMMU'](_0x4436f2['GfuQK'],_0x3e792f[_0x3aa71c(0x903)+_0x3aa71c(0x233)+_0x3aa71c(0x1a3)+'ed'][_0x3aa71c(0x71a)](',\x20'))):_0x42a164['style'][_0x3aa71c(0x5ab)+'ty']='1'),_0x3e792f;}function _0x15d8b0(_0x467c5d){var _0x13de62=_0x105055;console[_0x13de62(0xb03)]('%c[sa'+_0x13de62(0x8cc)+_0x13de62(0x9c8)+_0x13de62(0x684)+_0x13de62(0xbf0)+'rt',_0x4436f2['GQhCh']('color'+':'+_0x237331,';font'+'-weig'+_0x13de62(0x854)+'0'),_0x467c5d),console['log'](_0x4436f2[_0x13de62(0xb9c)](_0x4f70e9+'\x0a'+JSON['strin'+'gify'](_0x467c5d,null,0x5b*0x7+-0x12b7*0x1+0x103b),'\x0a')+_0x296cf3),_0x4239ee=_0x467c5d;try{_0x4436f2[_0x13de62(0x610)](_0x3aa4da,_0x467c5d);}catch(_0x1c4158){}_0x4aeed2(_0x4436f2['UlCid'],{'report':_0x467c5d});}function _0x58e713(){var _0x10b634=_0x105055;try{return _0x489b3b();}catch(_0x1e0a4a){return{'version':_0x3838a0,'when':new Date()['toISO'+'Strin'+'g'](),'elapsedMs':Date['now']()-_0x327157,'host':_0x3232e3,'uwmk':!!(window[_0x10b634(0x41e)+'WebMo'+'dkit']&&window[_0x10b634(0x41e)+'WebMo'+_0x10b634(0x263)][_0x10b634(0xa4e)+'me']),'il2CppContext':![],'arm':_0x16e196,'hooksTotal':_0x5d08a2[_0x10b634(0xb7c)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':String(_0x1e0a4a&&_0x1e0a4a[_0x10b634(0x80b)+'ge']||_0x1e0a4a)};}}function _0x563277(){var _0x1c8baf=_0x105055,_0x21e9b7=0x1ead*0x1+-0x1c66+-0x247;try{if(_0x4436f2[_0x1c8baf(0x8ac)](_0x1c8baf(0x7cb),_0x4436f2['BYenS']))return _0x11d5bf();else _0x4436f2[_0x1c8baf(0x2b9)](_0x5cba5e);}catch(_0xef34fd){}try{_0x207864();}catch(_0x58c3f7){}_0x4436f2[_0x1c8baf(0x730)](setInterval,_0x227c36,-0x157e+-0xb*0x1eb+0x2e1b),_0x4436f2[_0x1c8baf(0x656)](_0x15d8b0,_0x58e713()),function _0x382fc3(){var _0x22d4b4=_0x1c8baf;if(!_0x5d08a2['lengt'+'h'])try{if(_0x4436f2[_0x22d4b4(0x68b)](_0x22d4b4(0x3b1),_0x22d4b4(0x6e1)))_0x206c0e();else try{return _0x42f03f&&_0x1ab30f[_0x22d4b4(0xaec)+'r']?_0x53e677['buffe'+'r'][_0x22d4b4(0x401)+'ength']:-0xd6f+-0x932*-0x2+-0x1*0x4f5;}catch(_0x1ad857){return-0x2*-0x971+0x207+0x14e9*-0x1;}}catch(_0xa9468e){}_0x21e9b7++,_0x4436f2['uxQzY'](_0x15d8b0,_0x4436f2['XpPrD'](_0x58e713));if(!_0x5d08a2['lengt'+'h']&&_0x21e9b7<0xab+-0x1*0x331+0x3b2)setTimeout(_0x382fc3,-0x3fd+-0x1c74+-0x2d*-0xe5);else{if(!Object[_0x22d4b4(0x5ec)](_0x41484b)['lengt'+'h']&&_0x21e9b7<-0x123f+0x75b*0x2+0x4b5)setTimeout(_0x382fc3,0x2*0xe95+-0x21a5+0xc4b);else _0x4436f2['mzuOZ'](setTimeout,_0x382fc3,-0x2462+-0x23b9+0x4ccb*0x1);}}();}if(document[_0x105055(0xbdf)])_0x563277();else document[_0x105055(0x89d)+_0x105055(0x66a)+_0x105055(0x343)+'r'](_0x105055(0x581)+'ntent'+_0x105055(0x53f)+'d',_0x563277,{'once':!![]});if(document['body']){if(_0x4436f2[_0x105055(0x37f)](_0x105055(0xaac),_0x105055(0x1ff)))try{_0x4436f2[_0x105055(0x61c)](_0xc98265);}catch(_0xf0f1db){}else return _0xaf5e58['ident'+_0x105055(0x73d)]=![],null;}else document[_0x105055(0x89d)+_0x105055(0x66a)+_0x105055(0x343)+'r'](_0x105055(0x581)+'ntent'+'Loade'+'d',function(){var _0x499e6c=_0x105055;try{'fzhfg'!=='WPzMW'?_0xc98265():_0x50440e['warni'+_0x499e6c(0x26c)][_0x499e6c(0x24d)](_0x4436f2[_0x499e6c(0x2cf)](_0x4436f2[_0x499e6c(0x8c6)]+('repla'+_0x499e6c(0x310)+'y\x20a\x20d'+'iffer'+_0x499e6c(0x475)+_0x499e6c(0x6df)+_0x499e6c(0x887)+'o\x20we\x20'+_0x499e6c(0x4ad)+_0x499e6c(0x3fc)+_0x499e6c(0x2a2)+'wrong'+'\x20obje'+_0x499e6c(0xba0)+'r\x20')+('the\x20g'+_0x499e6c(0x378)+_0x499e6c(0xaf1)+_0x499e6c(0x15c)+_0x499e6c(0xb49)+'lding'+_0x499e6c(0x26d)+_0x499e6c(0xa39)+_0x499e6c(0x280)+'.\x20Dis'+_0x499e6c(0x4a7)+'every'+_0x499e6c(0x7f5)+'r\x20'),_0x499e6c(0x965)+'a/UWM'+_0x499e6c(0x5de)+_0x499e6c(0x178)+'n\x20Tam'+_0x499e6c(0x8bc)+_0x499e6c(0x198)+'and\x20h'+_0x499e6c(0x72e)+_0x499e6c(0x3fb)+'.'));}catch(_0x22bf01){}},{'once':!![]});})()));
