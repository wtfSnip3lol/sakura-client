// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.9.6
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

(function(_0x325f9d,_0x466330){var _0x588771=_0x5c65,_0x8568aa=_0x325f9d();while(!![]){try{var _0x6a6fb7=-parseInt(_0x588771(0x550))/(-0x18b3*-0x1+0x1*0x1a10+-0x32c2)+parseInt(_0x588771(0xcd))/(-0x49+0x16c4*-0x1+0x170f)*(parseInt(_0x588771(0xa9b))/(-0x25aa+0x2408+0x1a5))+parseInt(_0x588771(0xab7))/(-0x65*0xf+0x1*0xe66+-0x877)*(-parseInt(_0x588771(0x569))/(0x2356+-0x2f9*-0xd+0x49f6*-0x1))+parseInt(_0x588771(0x820))/(-0xb*0x2e5+-0x5*0x611+0x3e32)*(parseInt(_0x588771(0x7c7))/(0x2573*0x1+-0x5b*0x2e+-0x1512))+parseInt(_0x588771(0x91c))/(-0x5*-0x58f+-0x16*-0xd+0x1*-0x1ce1)+-parseInt(_0x588771(0x596))/(0x3*0x5bd+0x535*0x7+0x1*-0x35a1)+parseInt(_0x588771(0x4f7))/(-0x23f8+-0x1c51*0x1+0xb*0x5d9);if(_0x6a6fb7===_0x466330)break;else _0x8568aa['push'](_0x8568aa['shift']());}catch(_0x85e069){_0x8568aa['push'](_0x8568aa['shift']());}}}(_0x2be4,0x35*-0x779+-0x36238+0x6cff4),((()=>{'use strict';var _0x6937dd=_0x5c65,_0x5b43bc={'zdTCq':_0x6937dd(0x67b),'Ivqba':function(_0x1ee45e,_0xbf2e7){return _0x1ee45e<_0xbf2e7;},'IMvCs':_0x6937dd(0x621)+'le','HObUc':function(_0x23fdde,_0x2155a4){return _0x23fdde!==_0x2155a4;},'rmyaC':'ifram'+'e','HQdQA':function(_0x11324a,_0x1b3655){return _0x11324a===_0x1b3655;},'wmOlh':function(_0x9a833f,_0x2ef781){return _0x9a833f(_0x2ef781);},'KrKhW':_0x6937dd(0x625),'kyryJ':'xsxNP','TpvQJ':'sakur'+_0x6937dd(0x3b0)+'v2','IdhHR':'div','LYkKN':function(_0x4d5b6e,_0xe0935b){return _0x4d5b6e+_0xe0935b;},'GUkfk':_0x6937dd(0xd0)+_0x6937dd(0x865)+'ixed;'+'left:'+'12px;'+'top:1'+_0x6937dd(0x5a3)+'-inde'+_0x6937dd(0x2ae)+_0x6937dd(0xa0d)+'99;cu'+_0x6937dd(0x47a)+_0x6937dd(0x5e8)+'er;us'+_0x6937dd(0x963)+_0x6937dd(0x1ad)+_0x6937dd(0x796),'RuiZt':_0x6937dd(0x169)+_0x6937dd(0x9cf)+_0x6937dd(0x928)+_0x6937dd(0x1c4)+'paddi'+_0x6937dd(0x6c9)+_0x6937dd(0x581)+_0x6937dd(0x97f)+'t:11p'+_0x6937dd(0x762)+_0x6937dd(0x53b)+'onosp'+_0x6937dd(0x5be)+_0x6937dd(0x2f6)+_0x6937dd(0x196)+_0x6937dd(0x142)+_0x6937dd(0xb54),'dKXcu':'sakur'+'a','EAfcW':_0x6937dd(0xf4),'PhImt':'sakur'+_0x6937dd(0x3b0)+'v2-cs'+'s','jOKOd':_0x6937dd(0x514)+_0x6937dd(0x73f)+_0x6937dd(0xc2)+_0x6937dd(0x186),'AlaMP':_0x6937dd(0xd5)+'b','ZWEfv':function(_0x40b965,_0x2bb969){return _0x40b965===_0x2bb969;},'TfTuq':_0x6937dd(0x359)+'ve','tdyvQ':function(_0x25e422){return _0x25e422();},'ztzpC':'%c[sa'+_0x6937dd(0x8e3)+'\x20pane'+'l\x20dis'+_0x6937dd(0x96e),'tyLpg':_0x6937dd(0x6e4),'nVQaj':_0x6937dd(0x2ec),'gMxKY':'min(5'+_0x6937dd(0x5f0)+_0x6937dd(0x76c),'fIEaW':'auto','QDjDt':'#150c'+'1d','dUvSg':_0x6937dd(0x15c),'xgiEP':'snaps'+'hot','hEmUf':'3|1|4'+'|2|0','AQIso':_0x6937dd(0x71e)+'d','Egnid':'numbe'+'r','gRqJV':'5|3|4'+'|2|0|'+'1','ndLRP':_0x6937dd(0x16c),'TGPlC':function(_0x113852,_0x825da6){return _0x113852+_0x825da6;},'tuKBR':function(_0x2b346a,_0x444020){return _0x2b346a+_0x444020;},'FfPMK':_0x6937dd(0xd7)+_0x6937dd(0x8f1)+_0x6937dd(0xae2)+'t:\x20','nqoxG':_0x6937dd(0x99c)+_0x6937dd(0x159)+_0x6937dd(0x2cb)+_0x6937dd(0x339)+'ng\x20/\x20'+_0x6937dd(0x78a)+'ting\x20'+'/\x20jum'+'ping\x20'+'marks'+_0x6937dd(0xaff)+_0x6937dd(0x424)+'ld\x20is'+_0x6937dd(0xaff)+'h.','qXaiW':function(_0x404ea0,_0x12b96a){return _0x404ea0+_0x12b96a;},'KfkiL':'#2a0f'+'1b','XHmFD':function(_0x4c31bc,_0x3b7d7f){return _0x4c31bc+_0x3b7d7f;},'YJKGz':_0x6937dd(0x8e4)+_0x6937dd(0x754)+_0x6937dd(0x846)+_0x6937dd(0x3ae)+_0x6937dd(0x170)+_0x6937dd(0xa28)+_0x6937dd(0x986)+',mono'+'space'+_0x6937dd(0x22c)+_0x6937dd(0x9df)+_0x6937dd(0x509)+_0x6937dd(0x20e)+_0x6937dd(0x7a3)+_0x6937dd(0x488)+_0x6937dd(0x3b3),'QiqGr':'displ'+_0x6937dd(0x861)+_0x6937dd(0x95c)+_0x6937dd(0xb27)+'recti'+_0x6937dd(0x5d4)+'lumn;'+_0x6937dd(0x2fe)+_0x6937dd(0xb2b)+_0x6937dd(0x7f5)+';','pPfQL':function(_0xb7e299,_0x55a1bc){return _0xb7e299+_0x55a1bc;},'nYxcQ':function(_0x5e536c,_0x3ed03e){return _0x5e536c+_0x3ed03e;},'RAqPe':function(_0x1be88e,_0x13c293){return _0x1be88e+_0x13c293;},'QOjoe':_0x6937dd(0xb3)+'style'+_0x6937dd(0x9b8)+_0x6937dd(0x946)+'9px\x201'+_0x6937dd(0x162)+_0x6937dd(0x39e)+_0x6937dd(0x302)+_0x6937dd(0x4b6)+'x\x20sol'+'id\x20rg'+_0x6937dd(0x778)+'5,143'+_0x6937dd(0xda)+_0x6937dd(0x127)+'ispla'+'y:fle'+'x;gap'+_0x6937dd(0x25d)+'align'+_0x6937dd(0x688)+_0x6937dd(0x6e9)+_0x6937dd(0x1be)+_0x6937dd(0x811)+'\x200\x20au'+'to;\x22>','gceEM':_0x6937dd(0x3a3)+'ura\x20·'+_0x6937dd(0x685)+'lwarz'+_0x6937dd(0x5b4),'HycGH':_0x6937dd(0x485)+_0x6937dd(0xa50)+'color'+':#2a0'+_0x6937dd(0x107)+_0x6937dd(0x39e)+'-radi'+'us:7p'+'x;pad'+_0x6937dd(0x946)+_0x6937dd(0x356)+_0x6937dd(0x52e)+'ont-w'+_0x6937dd(0x751)+_0x6937dd(0x669)+'curso'+'r:poi'+'nter;'+_0x6937dd(0x50b)+_0x6937dd(0x270)+'N</bu'+'tton>','pbLwI':_0x6937dd(0x454)+_0x6937dd(0x58f)+'=\x22sw2'+'-x\x22\x20s'+_0x6937dd(0x917)+'\x22back'+_0x6937dd(0x385)+_0x6937dd(0x5ae)+'nspar'+_0x6937dd(0x94b)+_0x6937dd(0x39e)+_0x6937dd(0x931)+_0x6937dd(0x873)+_0x6937dd(0x79d)+_0x6937dd(0xa6d)+'143,1'+_0x6937dd(0x4c3)+_0x6937dd(0x73c)+_0x6937dd(0x109)+_0x6937dd(0x80c)+_0x6937dd(0x485)+'er-ra'+'dius:'+'7px;p'+'addin'+_0x6937dd(0x87d)+_0x6937dd(0xa80)+'curso'+'r:poi'+_0x6937dd(0x706)+_0x6937dd(0x4ac)+_0x6937dd(0xb13)+'n>','tVhqz':_0x6937dd(0x12d)+'>','uBdzb':'<div\x20'+'style'+'=\x22pad'+_0x6937dd(0x946)+_0x6937dd(0x907)+_0x6937dd(0x162)+_0x6937dd(0x39e)+_0x6937dd(0x302)+'om:1p'+'x\x20sol'+_0x6937dd(0x35d)+'ba(25'+'5,143'+',177,'+'.18);'+_0x6937dd(0x1f8)+_0x6937dd(0x861)+'ex;ga'+'p:8px'+_0x6937dd(0xb01)+'n-ite'+_0x6937dd(0x922)+_0x6937dd(0x706)+_0x6937dd(0x350)+_0x6937dd(0x61f)+_0x6937dd(0x8ae)+'lex-w'+'rap:w'+'rap;\x22'+'>','NMBeW':_0x6937dd(0x450)+'\x20id=\x22'+'sw2-h'+'int\x22\x20'+_0x6937dd(0x447)+'=\x22col'+_0x6937dd(0x505)+_0x6937dd(0x55f)+_0x6937dd(0x39c)+'twice'+_0x6937dd(0x23a)+_0x6937dd(0x8f8)+'king\x20'+_0x6937dd(0x4e1)+_0x6937dd(0x7d0)+_0x6937dd(0x895)+'umpin'+'g\x20mar'+'ks\x20wh'+_0x6937dd(0x605)+_0x6937dd(0x9ba)+_0x6937dd(0x701)+_0x6937dd(0x9d0)+_0x6937dd(0xb48)+'>','UGTyl':_0x6937dd(0x570)+_0x6937dd(0x751)+_0x6937dd(0x35b)+_0x6937dd(0xb1)+_0x6937dd(0x97a)+_0x6937dd(0x85f)+'t.\x0a\x0aT'+'his\x20p'+_0x6937dd(0x39f)+_0x6937dd(0x70e)+'es\x20it'+_0x6937dd(0x435)+'when\x20'+'the\x20g'+_0x6937dd(0x695)+_0x6937dd(0x228)+_0x6937dd(0xade)+_0x6937dd(0x9b4)+_0x6937dd(0xaed)+_0x6937dd(0x2b8)+'eeded'+_0x6937dd(0x46f)+'\x20it\x20s'+_0x6937dd(0x9de)+_0x6937dd(0x88c)+_0x6937dd(0xb41)+_0x6937dd(0x32f)+'nkey\x20'+_0x6937dd(0x558)+_0x6937dd(0x517)+_0x6937dd(0x5af)+_0x6937dd(0x2be)+_0x6937dd(0xb23)+_0x6937dd(0x875)+_0x6937dd(0x9be)+_0x6937dd(0x5a9)+_0x6937dd(0x695)+'rame.'+_0x6937dd(0xa2e)+'>','yFOOC':'#sw2-'+_0x6937dd(0x383),'hSrFD':_0x6937dd(0x2a9)+_0x6937dd(0xb25)+'e','ZuHDK':'#sw2-'+_0x6937dd(0x99d),'KVOJN':_0x6937dd(0x2a9)+'hint','isITL':_0x6937dd(0x460)+'\x20ON','QXIkO':'#f7ee'+'f5','DBTRT':'VHONe','ZFFua':function(_0x365978,_0x38a9aa){return _0x365978+_0x38a9aa;},'WxPOM':_0x6937dd(0x6df),'wDpaP':function(_0x558cfb,_0x33dae0){return _0x558cfb+_0x33dae0;},'hJHJh':_0x6937dd(0x371)+'\x20\x20\x20\x20','szAGG':_0x6937dd(0x13a),'NFITv':_0x6937dd(0xb6)+'ntext'+'\x20','CnsGk':'\x20\x20\x20ty'+_0x6937dd(0x7ad),'lBUrC':function(_0x4a32d8,_0x5d928a){return _0x4a32d8+_0x5d928a;},'BpGJa':_0x6937dd(0xa85)+_0x6937dd(0xac0)+_0x6937dd(0x1fa)+'\x20capt'+'ured\x20'+'yet.','EAWCL':_0x6937dd(0x99e)+'ooks\x20'+_0x6937dd(0x12b)+'on\x20th'+_0x6937dd(0x882)+_0x6937dd(0x7df)+'wn\x20Up'+_0x6937dd(0x244)+');\x20no'+'thing'+'\x20capt'+'ured\x20'+_0x6937dd(0x384),'ezXct':function(_0x48ca7d,_0x2d9b87){return _0x48ca7d+_0x2d9b87;},'HdIjJ':function(_0x2ace6f,_0x1115c1){return _0x2ace6f+_0x1115c1;},'tkOsQ':_0x6937dd(0x375),'uqyPJ':'FUKty','ALlJO':function(_0x11f56b,_0x2edc9f){return _0x11f56b+_0x2edc9f;},'OaHYa':_0x6937dd(0xb45),'xlphD':function(_0x144a31,_0x50d844){return _0x144a31-_0x50d844;},'hszce':_0x6937dd(0x9ac)+'set\x20\x20'+_0x6937dd(0x149)+'\x20\x20\x20\x20\x20'+_0x6937dd(0x36a)+'lue\x20\x20'+'\x20\x20\x20\x20\x20'+_0x6937dd(0x9e3)+_0x6937dd(0x455),'XfsQz':function(_0x480429,_0x5e7253){return _0x480429<_0x5e7253;},'pbuva':function(_0x15eebe,_0x4e9ac6){return _0x15eebe!==_0x4e9ac6;},'ylzFT':'izRTo','clOcQ':function(_0x3b8634,_0x5f5c1d){return _0x3b8634/_0x5f5c1d;},'MZXnL':function(_0x5530b,_0x584c26){return _0x5530b+_0x584c26;},'nepBY':function(_0x16d832,_0x173a0c){return _0x16d832+_0x173a0c;},'dAYGu':function(_0x40330b,_0x45cd90){return _0x40330b+_0x45cd90;},'Zqbxl':function(_0x1ccafd,_0x54fb13){return _0x1ccafd+_0x54fb13;},'RuPxj':'\x20\x20!\x20','jIWxB':function(_0x301dcc,_0x14d111){return _0x301dcc+_0x14d111;},'VvrJF':function(_0x31caef,_0x4ac282){return _0x31caef+_0x4ac282;},'HilSu':_0x6937dd(0x5a0),'YAdrE':_0x6937dd(0x719)+'\x20','DeROX':function(_0x3b5214,_0x4fc1ed){return _0x3b5214===_0x4fc1ed;},'yHQEg':function(_0x42b447,_0x331e72){return _0x42b447===_0x331e72;},'QlFqJ':_0x6937dd(0x9f2)+_0x6937dd(0xb3a)+'pt','FrCjE':_0x6937dd(0x8f4)+_0x6937dd(0x5d7)+'ler','CfJqW':function(_0x2f0e76,_0x986c9e,_0xe76814){return _0x2f0e76(_0x986c9e,_0xe76814);},'FDqBa':function(_0x370bbd,_0x1e1b35){return _0x370bbd!==_0x1e1b35;},'VFUjc':function(_0x60fedf,_0x37e31e){return _0x60fedf*_0x37e31e;},'EMgyv':'AmhQp','vLzwh':function(_0x5d655c,_0x461b82){return _0x5d655c===_0x461b82;},'mPQoD':function(_0x152c93,_0x555b75){return _0x152c93===_0x555b75;},'fYwDg':'iriiv','YpvUG':_0x6937dd(0x57a),'PYVmY':'IjHaq','bhWCk':function(_0x5047c0,_0x1228e6){return _0x5047c0!==_0x1228e6;},'BOdNY':function(_0x341640,_0x3f0c51){return _0x341640!==_0x3f0c51;},'SIAdG':function(_0x1f3a5a,_0x5dacb5){return _0x1f3a5a+_0x5dacb5;},'NuqaC':'captu'+'red\x20','ruGrU':_0x6937dd(0x708)+'g','cdjXE':'warn','BbMBL':function(_0x142a95,_0x38b584){return _0x142a95===_0x38b584;},'eOOuJ':_0x6937dd(0x6cb)+_0x6937dd(0xa5b),'zMJDt':function(_0x10a03b,_0xb43511){return _0x10a03b>_0xb43511;},'bHYzs':_0x6937dd(0x831),'HobAH':function(_0x3e8d48,_0x514ef7){return _0x3e8d48===_0x514ef7;},'GknZc':'undef'+_0x6937dd(0xadc),'RYyns':_0x6937dd(0x981)+'ntiat'+'e','qlEsi':_0x6937dd(0x8cb)+_0x6937dd(0x289),'JUhJN':function(_0x15b7fd,_0x3c05d7){return _0x15b7fd/_0x3c05d7;},'AfjcQ':function(_0xdf3c6b,_0x326ad5){return _0xdf3c6b/_0x326ad5;},'XcJFZ':function(_0x426621,_0x17f780){return _0x426621<=_0x17f780;},'DkbIn':function(_0x1a69ef){return _0x1a69ef();},'ryKnV':_0x6937dd(0xaa4),'QqPOX':_0x6937dd(0x90e)+_0x6937dd(0x7c8)+_0x6937dd(0x307)+'lugin'+_0x6937dd(0x4fb)+_0x6937dd(0xa77)+'le','VMMpH':'sakur'+'a-ski'+_0x6937dd(0x912)+'z','IXXAc':_0x6937dd(0x60a),'NveXl':function(_0x564a65,_0x2638d3){return _0x564a65-_0x2638d3;},'VFqiB':function(_0x2eab6f,_0x2f8237){return _0x2eab6f(_0x2f8237);},'UKoZH':_0x6937dd(0xaf0),'uAzQw':_0x6937dd(0x716)+'(s)\x20t'+_0x6937dd(0xa0f)+'able\x20'+_0x6937dd(0x8ac)+'\x20but\x20'+_0x6937dd(0x2d5)+'ed\x20no'+'ne.\x20T'+'he\x20si'+_0x6937dd(0x560)+_0x6937dd(0x438),'qJftW':_0x6937dd(0x401)+'n._ru'+_0x6937dd(0x20d)+_0x6937dd(0x510)+'e','wYzGT':'SkvtY','FYZCv':'Runti'+'me.re'+_0x6937dd(0x21c)+_0x6937dd(0xa6e)+')','yWYHv':_0x6937dd(0x91f)+'w\x20glo'+_0x6937dd(0x529),'CUzAK':function(_0x42b918,_0x143ebf){return _0x42b918===_0x143ebf;},'TrAsj':_0x6937dd(0x955)+'t','MWPEp':'windo'+'w.','EYypK':_0x6937dd(0x7f0),'jluVf':function(_0x248703,_0x27d1cf){return _0x248703/_0x27d1cf;},'VPDwN':function(_0x18f662,_0x13ac73){return _0x18f662+_0x13ac73;},'PIGPQ':'Lzxjl','dGmrW':_0x6937dd(0xdf),'pzxKN':_0x6937dd(0xa9d),'JAOYG':function(_0x2ac7ff,_0x301948){return _0x2ac7ff+_0x301948;},'yrqJh':'addre'+'ss\x200x','UDjPm':_0x6937dd(0x92a),'fGPOu':'u16','bguUz':'i32','xZaPf':_0x6937dd(0x2db),'fqhVp':_0x6937dd(0x5bf),'nrcYM':function(_0x1a5797){return _0x1a5797();},'SyKFr':function(_0x2f4abe,_0x248540){return _0x2f4abe&_0x248540;},'NGslb':_0x6937dd(0xb11),'xgEoD':function(_0x2def8a,_0x6c5ffe){return _0x2def8a===_0x6c5ffe;},'rIKaU':function(_0x19e8b5,_0x19554f){return _0x19e8b5+_0x19554f;},'GrkFr':function(_0x91230,_0x166b9a){return _0x91230===_0x166b9a;},'uQhPD':'speed','tzOFf':function(_0x4f475f){return _0x4f475f();},'jTEKI':function(_0x10cee2,_0x19965a){return _0x10cee2!==_0x19965a;},'KjKJj':function(_0x287ec8,_0x3229bb){return _0x287ec8<_0x3229bb;},'qmOad':function(_0x20328a,_0x198f5f,_0x4ae73c,_0x561769){return _0x20328a(_0x198f5f,_0x4ae73c,_0x561769);},'EvtFm':function(_0x4e5db0,_0x4122ba){return _0x4e5db0&_0x4122ba;},'QUHxi':function(_0x32b80e,_0x5345f1){return _0x32b80e===_0x5345f1;},'yGjwR':_0x6937dd(0x76a),'ieETc':function(_0x8b8a64,_0x43cbcb){return _0x8b8a64^_0x43cbcb;},'THrPz':function(_0x280fd9,_0x5d6cb1){return _0x280fd9|_0x5d6cb1;},'SwYNy':_0x6937dd(0xa08),'IZQgq':function(_0x385f5b,_0x4d6775){return _0x385f5b(_0x4d6775);},'BepCc':function(_0x5a63a4,_0x5edb6c){return _0x5a63a4+_0x5edb6c;},'sbnqA':function(_0x2b35da,_0x591e7c){return _0x2b35da+_0x591e7c;},'zJkpD':function(_0x3851ce,_0x15bc5f,_0x507070){return _0x3851ce(_0x15bc5f,_0x507070);},'CBLIe':function(_0x49de21,_0x2adc9c){return _0x49de21===_0x2adc9c;},'pIBPo':function(_0x6a42eb,_0x5255a7){return _0x6a42eb||_0x5255a7;},'JMuyr':function(_0x58d207,_0x5bd6bb){return _0x58d207===_0x5bd6bb;},'BjOFj':function(_0x28fd91,_0x54cc3c){return _0x28fd91^_0x54cc3c;},'Xkwax':_0x6937dd(0xb44)+_0x6937dd(0x71b)+_0x6937dd(0x590),'VzuAd':function(_0x5b7933,_0x2799f7){return _0x5b7933+_0x2799f7;},'MBTOF':function(_0x2488da,_0x519a73){return _0x2488da===_0x519a73;},'nSYbW':function(_0x114cfb,_0x54d348){return _0x114cfb===_0x54d348;},'xVPRD':function(_0x34bc2c,_0x477324){return _0x34bc2c&_0x477324;},'peAdo':function(_0xbe547c,_0x3422ce){return _0xbe547c+_0x3422ce;},'eOtQK':function(_0x104eb1,_0x431f5f){return _0x104eb1/_0x431f5f;},'eREPH':function(_0x112592,_0x277ba4){return _0x112592-_0x277ba4;},'UkeiF':function(_0x2ac415,_0x46a3f9){return _0x2ac415-_0x46a3f9;},'tlxmX':_0x6937dd(0x38e)+'ata\x20r'+_0x6937dd(0xa54)+'·\x20','SJdTU':function(_0x4e7f6e,_0x249f05){return _0x4e7f6e<_0x249f05;},'ZARJN':'ywLhb','NejrS':function(_0x2d6596,_0x4a1d2d){return _0x2d6596(_0x4a1d2d);},'NQnGn':function(_0x2caef8,_0x4d9316){return _0x2caef8+_0x4d9316;},'Osvks':function(_0x38b276,_0x30cdd4){return _0x38b276>_0x30cdd4;},'ffSoz':function(_0x5ac818,_0x25be62){return _0x5ac818>=_0x25be62;},'LDgrP':_0x6937dd(0x521)+_0x6937dd(0x552)+_0x6937dd(0x7ca)+_0x6937dd(0xf1)+'ed','EjIDP':function(_0xaa99a0,_0x21d976){return _0xaa99a0<_0x21d976;},'mAmco':function(_0x54da76,_0x1f9abd){return _0x54da76>=_0x1f9abd;},'tTLBu':_0x6937dd(0xa32),'sHiLx':function(_0x56f9e6,_0x20379e){return _0x56f9e6<_0x20379e;},'xVlFi':_0x6937dd(0x752),'mmTKn':function(_0x37526f,_0xa5ad41){return _0x37526f+_0xa5ad41;},'PfSBg':'fpCzm','cDyBf':function(_0x2da52c,_0xece51a){return _0x2da52c===_0xece51a;},'XtzHF':function(_0x1befcc,_0x249745){return _0x1befcc===_0x249745;},'UyFrw':_0x6937dd(0x54a),'nFvfK':_0x6937dd(0x4c2),'oGtdj':_0x6937dd(0xb3b),'AVPOz':_0x6937dd(0xb4f),'ZsBEH':function(_0x347942,_0x14e394){return _0x347942*_0x14e394;},'GsPeN':function(_0x2bbee8,_0x2db4f3){return _0x2bbee8*_0x2db4f3;},'YIkSy':_0x6937dd(0x70b)+_0x6937dd(0x31b)+'5|3|4'+'|7','BPNVZ':function(_0x385d05,_0x5a6384){return _0x385d05!==_0x5a6384;},'aypzD':function(_0x1bdfcf,_0x1c6e33){return _0x1bdfcf<_0x1c6e33;},'ntfaL':'NZMei','RJDLa':'NooSq','WFmAO':function(_0x56430e){return _0x56430e();},'VYLkD':function(_0x4c1e4b,_0x4ea668){return _0x4c1e4b+_0x4ea668;},'AeunI':function(_0x342fbf,_0x5212f5){return _0x342fbf===_0x5212f5;},'yKZce':function(_0xb90eac,_0x4f039e){return _0xb90eac===_0x4f039e;},'ruZso':function(_0x5a9be4,_0x14563b){return _0x5a9be4+_0x14563b;},'avDee':function(_0x2f6e1e,_0x12fe4c){return _0x2f6e1e>>>_0x12fe4c;},'pSxRI':function(_0x111e16,_0x46bab8){return _0x111e16+_0x46bab8;},'bepaB':_0x6937dd(0x58e)+'a8','UMSbf':function(_0x58c7b4,_0x986faa){return _0x58c7b4===_0x986faa;},'HmlrW':_0x6937dd(0x239),'BLMpl':'khDtU','Qokiq':function(_0x402655,_0x5981b2){return _0x402655-_0x5981b2;},'IVUKh':function(_0x57e81c,_0x546de7,_0x582690,_0x5dc78e){return _0x57e81c(_0x546de7,_0x582690,_0x5dc78e);},'XwOGX':function(_0x6680d2,_0x519fad,_0x3ce14b){return _0x6680d2(_0x519fad,_0x3ce14b);},'VbBct':function(_0x360c2a,_0x248366){return _0x360c2a<_0x248366;},'MDDzd':_0x6937dd(0x5b1),'eJpAL':function(_0x27463e,_0x3520af){return _0x27463e+_0x3520af;},'ZJxYO':function(_0x35f2b9,_0x70927a){return _0x35f2b9>>>_0x70927a;},'Nbzzn':function(_0x4ce996,_0x196f0e){return _0x4ce996+_0x196f0e;},'SIWEO':_0x6937dd(0x3e1),'FnHev':_0x6937dd(0x2ca)+'rs\x20ar'+_0x6937dd(0x6b2)+'sent\x20'+'but\x20n'+'one\x20a'+'re\x20cl'+_0x6937dd(0x84d)+'ied\x20a'+_0x6937dd(0xaac)+'mies\x20'+_0x6937dd(0xa9c)+_0x6937dd(0x7d1)+'k\x20','wwjVH':_0x6937dd(0x92c)+_0x6937dd(0xb30)+_0x6937dd(0x3a0)+'\x20entr'+'y\x20in\x20'+_0x6937dd(0x666)+_0x6937dd(0x90a),'hVljz':function(_0x5aadd8,_0x17fb08){return _0x5aadd8<_0x17fb08;},'lsMSI':function(_0x1544d4,_0x108f73){return _0x1544d4+_0x108f73;},'bzSnl':'Eithe'+'r\x20you'+_0x6937dd(0x978)+'not\x20i'+'n\x20a\x20r'+_0x6937dd(0x80e)+_0x6937dd(0x481)+_0x6937dd(0x63b)+_0x6937dd(0x12f)+'\x20on\x20t'+'he\x20wr'+'ong\x20o'+_0x6937dd(0x1dd)+'ad.','Lojsk':'SFvQM','kUwRp':'FmVfz','dtCIe':function(_0x86a38b,_0x24aa14){return _0x86a38b<_0x24aa14;},'JhRgs':'obf','rEWCR':function(_0x585d8e,_0x5b0d16){return _0x585d8e+_0x5b0d16;},'TXiMZ':_0x6937dd(0x32a),'WNjOY':function(_0x3bba26,_0x19fe74){return _0x3bba26===_0x19fe74;},'BahsR':function(_0xa67bea){return _0xa67bea();},'LfxVr':function(_0x9fc5bb,_0x37fdf6){return _0x9fc5bb<_0x37fdf6;},'QsCOF':_0x6937dd(0x1c0),'GuBfC':function(_0x4a33a6,_0x2a91bf){return _0x4a33a6(_0x2a91bf);},'IQMfy':function(_0x36affc,_0x2dfb1f){return _0x36affc===_0x2dfb1f;},'XEMRN':function(_0x1d59cf,_0x3589eb){return _0x1d59cf(_0x3589eb);},'EUddm':function(_0x138d3d,_0x2bfc74){return _0x138d3d-_0x2bfc74;},'BCRIT':function(_0x4cc2d0,_0x482147){return _0x4cc2d0*_0x482147;},'zjyUW':_0x6937dd(0x4b5)+'s','YeZCo':function(_0x1e6a4e,_0x5abcd1){return _0x1e6a4e===_0x5abcd1;},'rnaPX':function(_0xf5aa21,_0xaa044e){return _0xf5aa21===_0xaa044e;},'HpZEB':'fLvSZ','jvQWC':function(_0x568166,_0x12969a){return _0x568166===_0x12969a;},'xTzha':'xkBZy','mTYKl':_0x6937dd(0x564)+'Insta'+_0x6937dd(0x834),'Juovx':'unity'+_0x6937dd(0x759),'ubemv':'game','QvOMG':'Mouse'+_0x6937dd(0x6e7)+'ptr','KVBPj':_0x6937dd(0x355)+_0x6937dd(0x703)+'camer'+'a','jPKcW':function(_0x94e3a5,_0x5793c3){return _0x94e3a5+_0x5793c3;},'cyGEe':'ROYZI','OgLWl':'boole'+'an','MniVx':function(_0xe6d832,_0x5374d5){return _0xe6d832!==_0x5374d5;},'yHNrU':'repor'+'t','dyzOQ':function(_0x843f89){return _0x843f89();},'dYxDv':'uZIOu','ZSpcG':function(_0x53c4a1,_0x4c254f){return _0x53c4a1+_0x4c254f;},'kcEdT':function(_0xe7c86b,_0x10a8b1){return _0xe7c86b+_0x10a8b1;},'lNkZH':function(_0x43b3f6){return _0x43b3f6();},'epbOg':_0x6937dd(0x62c)+_0x6937dd(0x3d2),'tzTyW':'yqJBQ','hkcLR':function(_0x195a60,_0x42ae15){return _0x195a60*_0x42ae15;},'RyJDS':function(_0x86d75e,_0x4c896f){return _0x86d75e*_0x4c896f;},'mRieq':'#4f8f'+'6a','KQcaH':function(_0x4a130c,_0x155a04){return _0x4a130c===_0x155a04;},'IvydG':_0x6937dd(0xacc),'MMhNh':function(_0x3733e8,_0x59d8ce){return _0x3733e8===_0x59d8ce;},'xiHCF':'jvHAk','ZILEl':_0x6937dd(0x259)+'paren'+'t','tWEIV':function(_0x58c247){return _0x58c247();},'KFydA':_0x6937dd(0x422),'qvbtM':'KoICA','ljASc':_0x6937dd(0x447),'JTmrz':_0x6937dd(0xac)+'a-sw-'+'hud-c'+'ss','vVQsD':'#saku'+'ra-sw'+_0x6937dd(0x461)+_0x6937dd(0x544)+_0x6937dd(0x9d5)+'l}','CMqlc':'sakur'+'a-sw-'+'hud','OHEFE':_0x6937dd(0x2ac)+'round'+':rgba'+_0x6937dd(0x7bf)+_0x6937dd(0x971)+'.92);'+_0x6937dd(0x169)+_0x6937dd(0x7c4)+_0x6937dd(0xb08)+_0x6937dd(0x1a1)+_0x6937dd(0x892)+_0x6937dd(0xaf1)+'177,.'+_0x6937dd(0xae0)+_0x6937dd(0x39e)+'-radi'+_0x6937dd(0x941)+'px;','iLcHA':_0x6937dd(0xb3)+_0x6937dd(0x668)+_0x6937dd(0x640)+_0x6937dd(0x693)+_0x6937dd(0x148)+'color'+_0x6937dd(0xa30)+_0x6937dd(0x10a)+'ax-wi'+_0x6937dd(0xadb)+'90px;'+_0x6937dd(0x464)+'iv>','IewXd':function(_0x15add1,_0x3ca4bc){return _0x15add1+_0x3ca4bc;},'qidpS':function(_0x3c5351,_0x4866af){return _0x3c5351+_0x4866af;},'zBbuL':function(_0x2b3766,_0x19e280){return _0x2b3766+_0x19e280;},'qwwIu':function(_0x4a524e,_0x3d0784){return _0x4a524e+_0x3d0784;},'OCTck':_0x6937dd(0x826)+_0x6937dd(0x148)+'color'+':','sOROz':_0x6937dd(0xa56),'QLVZM':'<butt'+'on\x20da'+_0x6937dd(0x2cc)+_0x6937dd(0x6d7)+_0x6937dd(0x285)+_0x6937dd(0x6d1)+'ackgr'+_0x6937dd(0xb2f)+_0x6937dd(0x259)+_0x6937dd(0x242)+'t;bor'+_0x6937dd(0x48a)+_0x6937dd(0x277)+_0x6937dd(0x54b)+'gba(2'+'55,14'+_0x6937dd(0x7fb)+_0x6937dd(0x241)+';','gYBpS':'color'+_0x6937dd(0x604)+_0x6937dd(0x2da)+_0x6937dd(0x39e)+_0x6937dd(0x468)+_0x6937dd(0x22b)+'x;pad'+_0x6937dd(0x946)+_0x6937dd(0x9ef)+'px;cu'+_0x6937dd(0x47a)+'point'+'er;fo'+_0x6937dd(0x369)+'herit'+_0x6937dd(0x410)+'ap</b'+'utton'+'>','OSSIr':function(_0x286b86,_0xc50ff2){return _0x286b86(_0xc50ff2);},'qnPjt':_0x6937dd(0x246),'SxJjj':function(_0x3666bc,_0xd844ac){return _0x3666bc(_0xd844ac);},'guaEx':function(_0x72b35,_0x1a0382){return _0x72b35(_0x1a0382);},'bjvKk':function(_0x1e22c1,_0x3621c7){return _0x1e22c1(_0x3621c7);},'XQlma':_0x6937dd(0x99d),'pneWx':'esp','FvdfK':_0x6937dd(0x70a),'XUWGd':_0x6937dd(0x6c1)+_0x6937dd(0x8e3)+_0x6937dd(0x95f)+'rame\x20'+_0x6937dd(0x6cc)+_0x6937dd(0x909)+'ed','hxNoZ':function(_0x4269a1,_0x29c0bb){return _0x4269a1+_0x29c0bb;},'zOkIu':function(_0x207986,_0x1b227e){return _0x207986*_0x1b227e;},'Upvyr':function(_0x1a746a,_0x54c670){return _0x1a746a&_0x54c670;},'AgpIW':function(_0x1e1bc4,_0x516a5c,_0x370601,_0x129cc4){return _0x1e1bc4(_0x516a5c,_0x370601,_0x129cc4);},'foHYV':function(_0x7b832f,_0x955762){return _0x7b832f===_0x955762;},'ExzYn':function(_0x1a8cb2,_0x1a0eb5){return _0x1a8cb2(_0x1a0eb5);},'ZCgOH':function(_0x1709a3,_0x5996b2){return _0x1709a3===_0x5996b2;},'RdtQW':'rXJOH','JkImv':function(_0x21d5c3,_0x4fddcd){return _0x21d5c3(_0x4fddcd);},'UOaMx':'11|9|'+'15|0|'+_0x6937dd(0x282)+'|14|1'+_0x6937dd(0x5f3)+'5|4|7'+_0x6937dd(0x8f5)+_0x6937dd(0x551)+_0x6937dd(0x1f9),'nVONO':function(_0x11146a,_0x376703){return _0x11146a*_0x376703;},'CcoTL':function(_0x4e7a05,_0x4f3c89){return _0x4e7a05-_0x4f3c89;},'wbPKE':function(_0x32d1b1,_0x52306d){return _0x32d1b1-_0x52306d;},'bICOR':function(_0x12775d,_0x263372){return _0x12775d/_0x263372;},'qiJoD':function(_0x288e78,_0x2cfdc1){return _0x288e78-_0x2cfdc1;},'AfSlb':function(_0x57e05b,_0x3b3b6d){return _0x57e05b*_0x3b3b6d;},'ttlsn':function(_0x304978,_0x49b015){return _0x304978/_0x49b015;},'zsRYw':function(_0x177fe6,_0x1393cc){return _0x177fe6*_0x1393cc;},'GnfHq':function(_0x4b782a,_0x3b4e9f){return _0x4b782a/_0x3b4e9f;},'XRUrC':function(_0x3e999e,_0x46d889){return _0x3e999e*_0x46d889;},'qNkKj':'13|9|'+_0x6937dd(0x10d)+'10|3|'+_0x6937dd(0x32c)+'7|2|4'+_0x6937dd(0x28e)+_0x6937dd(0x2d2)+_0x6937dd(0x764),'MWvkM':function(_0x29ded5,_0x3f2fa7){return _0x29ded5(_0x3f2fa7);},'VYzIj':_0x6937dd(0xb0e)+'ider','lqVdI':'input','SZGmI':_0x6937dd(0x79e)+'l','qFoJl':'range','ofJxj':function(_0x3d7ebe,_0x2fd277){return _0x3d7ebe+_0x2fd277;},'gUyIz':function(_0xcd067d,_0x43d83b){return _0xcd067d-_0x43d83b;},'jftvh':_0x6937dd(0xca),'fmVUm':'CWqJL','extgK':function(_0x116578,_0x3448ee){return _0x116578!==_0x3448ee;},'ANQWD':'ZQzXh','fkYVl':_0x6937dd(0x8d4),'UvXbb':function(_0x48d324,_0x2e9b2d){return _0x48d324+_0x2e9b2d;},'KRfrR':function(_0x33d84e,_0x44577e){return _0x33d84e+_0x44577e;},'rdxDe':function(_0xf3227b,_0xeafd69){return _0xf3227b+_0xeafd69;},'vzTIo':'\x20\x20mem'+'\x20','NWzsG':_0x6937dd(0x5da),'ASJQF':function(_0x3d1e44,_0x419c5){return _0x3d1e44+_0x419c5;},'QjVBu':function(_0xba0725,_0x26ed76){return _0xba0725+_0x26ed76;},'kOBdS':'PLAYE'+'RS\x20','lAtdV':'\x20bots','fiQhP':function(_0x4a91b5,_0xfa10ae){return _0x4a91b5+_0xfa10ae;},'wORnA':_0x6937dd(0xb10)+'\x20','hVdEA':'no\x20en'+_0x6937dd(0x773)+_0x6937dd(0x589)+'(lobb'+_0x6937dd(0x816)+_0x6937dd(0xa9f),'vjnrQ':_0x6937dd(0x40c)+'99','IwlJy':function(_0x4b9962,_0x2b2180){return _0x4b9962===_0x2b2180;},'Cyymy':function(_0x5d8d1d,_0x404b42){return _0x5d8d1d===_0x404b42;},'fxvDE':_0x6937dd(0x62a)+'t','HpOxG':'obPfY','fcAcy':function(_0x2e1a5c,_0x241cbd){return _0x2e1a5c===_0x241cbd;},'BeQAI':_0x6937dd(0xb50),'morME':function(_0x507f90,_0x1e2a9f){return _0x507f90+_0x1e2a9f;},'hPoRv':function(_0x2c887d,_0x5e5e70){return _0x2c887d!==_0x5e5e70;},'FrXRg':function(_0x2b9d4f,_0x4196fd,_0x13f930){return _0x2b9d4f(_0x4196fd,_0x13f930);},'ADBKw':function(_0x176455,_0x125c22){return _0x176455+_0x125c22;},'RlVUu':function(_0x1fec72,_0x7eb000){return _0x1fec72!==_0x7eb000;},'VAtlR':function(_0x460b86,_0x497d2f,_0x416f35){return _0x460b86(_0x497d2f,_0x416f35);},'Dqnzc':function(_0xed3cb0,_0x61f4ad){return _0xed3cb0===_0x61f4ad;},'OVswr':function(_0x3c0f25,_0x499be3){return _0x3c0f25===_0x499be3;},'zsGYL':function(_0x4b4755){return _0x4b4755();},'ljHEr':_0x6937dd(0xa75),'WPYfa':function(_0x4312fe,_0x273cf5){return _0x4312fe!==_0x273cf5;},'jUpRM':function(_0x4538f0,_0xf3fc55){return _0x4538f0(_0xf3fc55);},'dHWnh':function(_0x5a00cd,_0x176ea7){return _0x5a00cd+_0x176ea7;},'UclLW':_0x6937dd(0xaef),'uurRS':_0x6937dd(0x60b),'RpcBT':_0x6937dd(0x1c3),'xosIH':function(_0x77af1d,_0x324e67){return _0x77af1d*_0x324e67;},'GfTdN':function(_0x4ab977,_0x15f0c4){return _0x4ab977-_0x15f0c4;},'vCWHV':function(_0x31fe09,_0x1bea48){return _0x31fe09+_0x1bea48;},'vjPNi':function(_0xe5882e,_0x46ad98){return _0xe5882e*_0x46ad98;},'bMCeo':function(_0x591d6a,_0x65b6ae){return _0x591d6a+_0x65b6ae;},'LmBcu':function(_0x2e00a0,_0x54b45b){return _0x2e00a0-_0x54b45b;},'IwTyk':function(_0x169563,_0x3ad39c){return _0x169563*_0x3ad39c;},'boEXu':function(_0x1e2ce9,_0x3d4bc5){return _0x1e2ce9/_0x3d4bc5;},'uagWT':function(_0x1035c8,_0x343755){return _0x1035c8*_0x343755;},'PIKsJ':function(_0x34061f,_0x5e3ad6){return _0x34061f*_0x5e3ad6;},'ZRZRL':function(_0x2b0db8,_0x2e1960){return _0x2b0db8*_0x2e1960;},'oSrFz':_0x6937dd(0x3e3),'aKLWY':'sk-ca'+'rd-he'+'ad','MWclt':function(_0x89b1d3,_0x345f15,_0x16a497,_0x3adb68){return _0x89b1d3(_0x345f15,_0x16a497,_0x3adb68);},'fzbPG':function(_0x47c64c,_0x17c210){return _0x47c64c+_0x17c210;},'uyNLU':function(_0x20b9de,_0x395cf7){return _0x20b9de+_0x395cf7;},'AZxBB':'</str'+_0x6937dd(0x314),'THFmk':function(_0x456001){return _0x456001();},'WTmHq':'true','TBlCk':_0x6937dd(0x440),'QzQLj':_0x6937dd(0xaca),'HgaYU':function(_0x56f1b2,_0x5d749c){return _0x56f1b2(_0x5d749c);},'AnSqg':function(_0xc00df,_0x2d2648){return _0xc00df+_0x2d2648;},'xRqgq':function(_0x5570bd,_0x4bd112){return _0x5570bd-_0x4bd112;},'gfoVJ':_0x6937dd(0x108),'XHBJf':function(_0x4fe0e2,_0x5030fa){return _0x4fe0e2(_0x5030fa);},'WttFy':'zGPqD','ULClb':function(_0x5ed186,_0x2d1c06,_0x1b44b2){return _0x5ed186(_0x2d1c06,_0x1b44b2);},'Aexox':'span','McMYD':_0x6937dd(0x450)+'\x20clas'+_0x6937dd(0x310)+_0x6937dd(0xa25)+'\x27>','KEDsM':'</spa'+'n>','fGjoL':function(_0x24b00c,_0x2f2631){return _0x24b00c===_0x2f2631;},'GHByw':'JioNm','GKBrK':_0x6937dd(0x401)+'n._ru'+_0x6937dd(0x20d)+_0x6937dd(0xa5f)+_0x6937dd(0x47f)+_0x6937dd(0x49f),'JafuI':function(_0x3212e7){return _0x3212e7();},'VBbNH':_0x6937dd(0x304),'jjUVl':'posit'+_0x6937dd(0x865)+'ixed;'+'right'+_0x6937dd(0x677)+_0x6937dd(0x94e)+'46px;'+'z-ind'+'ex:21'+_0x6937dd(0x582)+_0x6937dd(0x726)+'ointe'+'r-eve'+_0x6937dd(0x5cb)+_0x6937dd(0xa9a),'JCjMo':'mUSMK','fDEtp':function(_0x4da5bc,_0x36c36c){return _0x4da5bc(_0x36c36c);},'pQjPT':function(_0x568ae9,_0x45a9fb){return _0x568ae9&_0x45a9fb;},'qNZaS':function(_0x10cd40,_0x544b3a){return _0x10cd40|_0x544b3a;},'UCEHz':function(_0x5372aa,_0x4a4ba8){return _0x5372aa+_0x4a4ba8;},'zxGnh':function(_0x1659b2,_0x42d5bd){return _0x1659b2+_0x42d5bd;},'fXXVg':'comba'+'t','bnUdf':_0x6937dd(0x290),'FAgXl':function(_0xe50b9f,_0x4d5a83){return _0xe50b9f+_0x4d5a83;},'DccGs':'\x20fiel'+_0x6937dd(0x742),'xgocq':'\x20writ'+'es','dGskI':function(_0x4638dd,_0xe2cb24,_0x48c177){return _0x4638dd(_0xe2cb24,_0x48c177);},'MCVtT':function(_0x400786,_0x13fc11,_0x4f894c,_0x5c70ca,_0xbaae28,_0x5f10ea){return _0x400786(_0x13fc11,_0x4f894c,_0x5c70ca,_0xbaae28,_0x5f10ea);},'ybpvA':_0x6937dd(0x8ba)+_0x6937dd(0x500)+'so\x20st'+_0x6937dd(0x1a3)+'is','YUWYv':_0x6937dd(0x9da)+'te','DEXFb':function(_0x1f0586,_0x4beac2){return _0x1f0586+_0x4beac2;},'WMLsr':_0x6937dd(0x61b)+_0x6937dd(0xb03),'iSavx':_0x6937dd(0xad2)+'n','BbIbv':'Snaps'+'hot\x20n'+_0x6937dd(0x5fe)+'9)','twRWk':_0x6937dd(0xb13)+'n','URXAJ':function(_0x294b11,_0x1093cc,_0x39d02c){return _0x294b11(_0x1093cc,_0x39d02c);},'NPcvf':function(_0x59e98b,_0x3f5fa7,_0x9f1968,_0x208bee){return _0x59e98b(_0x3f5fa7,_0x9f1968,_0x208bee);},'YSUQa':'sk-md'+_0x6937dd(0x5b7),'ZEEsR':_0x6937dd(0x3a7)+_0x6937dd(0x474)+'s\x20acr'+_0x6937dd(0x62e)+_0x6937dd(0x925)+'dar','xXAlo':function(_0x2983ca,_0xa77fbe,_0x4e8aa6,_0x28e501){return _0x2983ca(_0xa77fbe,_0x4e8aa6,_0x28e501);},'CChuW':_0x6937dd(0xa01)+_0x6937dd(0xaa1)+_0x6937dd(0x814)+_0x6937dd(0x38a)+'are\x20n'+'ot\x20pi'+_0x6937dd(0xae1)+_0x6937dd(0x1d0)+_0x6937dd(0xbc)+_0x6937dd(0x601)+'9,\x20tu'+'rn\x20ab'+_0x6937dd(0x6d5)+'0°,\x20p'+_0x6937dd(0x606)+'F9.','sEase':'°,\x20ou'+_0x6937dd(0x531)+_0x6937dd(0x930)+_0x6937dd(0x9db)+'band.'+'\x20Rese'+_0x6937dd(0x104)+_0x6937dd(0x3bc)+'.','ZQZXz':_0x6937dd(0x504)+'n-spa'+'ce\x20bo'+'xes.\x20'+_0x6937dd(0xabe)+'ield\x20'+'of\x20vi'+'ew\x20ca'+_0x6937dd(0x753)+_0x6937dd(0x918)+_0x6937dd(0x8bb)+_0x6937dd(0x394)+'is\x20bu'+_0x6937dd(0x1cb)+'so\x20it'+_0x6937dd(0x247)+'itted'+'\x20by\x20e'+'ye.','tExBv':'Field'+'\x20of\x20v'+'iew','KfOcf':_0x6937dd(0x501)+'\x20view','mhOLy':'click','wDGAx':function(_0x52b7bf,_0x9e60f){return _0x52b7bf+_0x9e60f;},'VUcfE':_0x6937dd(0x355)+_0x6937dd(0x3df),'HuiMl':'\x20\x20cam'+_0x6937dd(0x9b1),'yFAAF':_0x6937dd(0x2e8)+'useLo'+_0x6937dd(0x1c5)+'t','eBAMc':function(_0x24c94c,_0x4cd02b){return _0x24c94c+_0x4cd02b;},'KebgR':function(_0x3b87a9,_0x2cc62f){return _0x3b87a9===_0x2cc62f;},'qAmlN':'\x20\x200x1'+'C=','GgukZ':_0x6937dd(0x920)+'cepte'+_0x6937dd(0x6bd)+_0x6937dd(0xa70)+_0x6937dd(0x66d),'drGNT':function(_0x8baa5,_0x348b6c){return _0x8baa5+_0x348b6c;},'gKlhL':'\x0apitc'+'h\x20','fCWpU':'\x20\x20yaw'+'\x20','jWsqR':_0x6937dd(0x21a),'HxLqF':function(_0xfc92a0,_0x40f605){return _0xfc92a0+_0x40f605;},'eLObS':_0x6937dd(0x326),'jgkaw':function(_0x256b04,_0x50a99b){return _0x256b04+_0x50a99b;},'Pczlw':'Photo'+_0x6937dd(0x9ca)+_0x6937dd(0x6e5)+'nc','GPFMz':_0x6937dd(0x6d3)+'es','mnyxA':function(_0x561577,_0x4387c4){return _0x561577+_0x4387c4;},'kFWCT':function(_0x37f508,_0x4e189a){return _0x37f508!==_0x4e189a;},'nizyT':_0x6937dd(0x38c)+'on','FqUXe':function(_0x5b4f63,_0x15047f,_0x2d8d3a){return _0x5b4f63(_0x15047f,_0x2d8d3a);},'wYqig':'Eye','XlUJa':_0x6937dd(0x650)+_0x6937dd(0x1ef),'hPlvM':_0x6937dd(0x9c0),'glkvF':'Sprin'+_0x6937dd(0x6b8)+'ed','pgKiZ':'0x40','bydDK':_0x6937dd(0x9d1)+'heigh'+'t','CZlqn':'0x11C','fpQgH':function(_0x19acf1,_0x5d6895,_0xbfa9d4){return _0x19acf1(_0x5d6895,_0xbfa9d4);},'NXrsv':_0x6937dd(0x37a),'vfNDK':_0x6937dd(0x49e)+_0x6937dd(0x3ef)+'s','mleca':function(_0x37cdfe,_0x379f00,_0x571dfb,_0x39926c){return _0x37cdfe(_0x379f00,_0x571dfb,_0x39926c);},'dcPMV':'sk-pr'+'e','Cavbv':_0x6937dd(0x1af)+'JSON\x20'+'to\x20cl'+'ipboa'+'rd','cLbhQ':'Paste'+_0x6937dd(0x930)+_0x6937dd(0x746)+_0x6937dd(0x267)+_0x6937dd(0x382)+_0x6937dd(0x14d)+'ethin'+_0x6937dd(0x430)+_0x6937dd(0x4f4)+_0x6937dd(0xac9),'BVYBA':_0x6937dd(0x353),'nnFYx':function(_0x13ed8c,_0xd82c50){return _0x13ed8c+_0xd82c50;},'clspm':'24px','BvnuG':_0x6937dd(0xa79)+'ing','LNSpt':function(_0x5b6355,_0x429dc5){return _0x5b6355===_0x429dc5;},'NvkMq':function(_0x2a144c,_0x312bfb){return _0x2a144c-_0x312bfb;},'tvOjN':function(_0x58985b,_0x1e6b38){return _0x58985b-_0x1e6b38;},'MSSRQ':_0x6937dd(0x7b9),'nirUR':'nZzWo','PhpEr':'mouse'+_0x6937dd(0x24a),'sKuVZ':_0x6937dd(0x60c)+_0x6937dd(0x354),'LrSow':'UvRmW','vBvHC':'sakur'+'a-men'+_0x6937dd(0x78d),'omDvV':function(_0x1ca039,_0x32aad5,_0x10762b){return _0x1ca039(_0x32aad5,_0x10762b);},'MFaPl':'mn-pa'+_0x6937dd(0x42e),'HlTOX':_0x6937dd(0xac)+_0x6937dd(0x490)+_0x6937dd(0x16e)+'t','JWIyK':'mn-lo'+'go','OoDNv':function(_0x10f8ed,_0x1800f6,_0x221f53){return _0x10f8ed(_0x1800f6,_0x221f53);},'UzTNd':'mn-to'+'p','GIFat':'mn-h','GdgzG':_0x6937dd(0x514)+'a\x20Ski'+'llWar'+'z','uFYJe':'mn-su'+'b','vCPVG':_0x6937dd(0x53f)+_0x6937dd(0xb0c),'XOjNB':function(_0x2b6bee,_0x14dea2){return _0x2b6bee<_0x14dea2;},'sHsas':function(_0x148e3c,_0x2d920){return _0x148e3c+_0x2d920;},'JCAga':'<smal'+'l>','XiInl':'sakur'+'a-pet'+'al','vpMhZ':function(_0x10083b,_0x13d5e6){return _0x10083b(_0x13d5e6);},'ansSS':_0x6937dd(0x6c1)+'kura]'+_0x6937dd(0xaa9)+'\x20unav'+'ailab'+'le','vMiUo':_0x6937dd(0x6ca)+':','IAhri':function(_0x216f59,_0x441a8d){return _0x216f59===_0x441a8d;},'fjxPM':function(_0x562e57,_0x2199f4){return _0x562e57===_0x2199f4;},'UeCBC':_0x6937dd(0xaad),'gsexh':'1|5|2'+'|4|3|'+'0','ZwGuP':function(_0x33344d,_0x288116){return _0x33344d(_0x288116);},'bLeVu':function(_0x54b7eb,_0x114783){return _0x54b7eb+_0x114783;},'mDYHq':'\x20show'+'n','ZAEUv':function(_0x403d32,_0x1edaa8){return _0x403d32/_0x1edaa8;},'zvMJf':function(_0x2f897c,_0x2444b5){return _0x2f897c!==_0x2444b5;},'nylbQ':function(_0x252bdf,_0x5cb437){return _0x252bdf+_0x5cb437;},'XNZbg':function(_0x115318,_0x4e42aa){return _0x115318+_0x4e42aa;},'tQZtW':_0x6937dd(0x77d)+_0x6937dd(0x3ec)+'\x20','qdKZz':_0x6937dd(0x77d)+'playe'+'rs\x20','AfFGQ':function(_0x261b57,_0x959bf3){return _0x261b57<_0x959bf3;},'tehzm':'TeHBA','WsPbK':_0x6937dd(0x4e5)+'ON','URlyG':function(_0x2a6443,_0x24d590){return _0x2a6443===_0x24d590;},'jwDbs':_0x6937dd(0x484)+_0x6937dd(0x981)+'ntiat'+'e()','UkAoa':_0x6937dd(0x812)+_0x6937dd(0x8a0)+'ut\x20yo'+'u','XZPYi':'off\x20t'+'he\x20li'+_0x6937dd(0x8ee)+_0x6937dd(0x41a),'kVLTT':function(_0x29ec73,_0x1c60d4){return _0x29ec73+_0x1c60d4;},'dmLby':_0x6937dd(0x8f4)+_0x6937dd(0x5d7)+_0x6937dd(0x50c)+_0x6937dd(0xa07),'IXcDD':function(_0x1901bd,_0x10841b){return _0x1901bd!==_0x10841b;},'UozEq':function(_0x168a25,_0x22a09d){return _0x168a25===_0x22a09d;},'agibU':function(_0x4d646d,_0x71a074){return _0x4d646d>_0x71a074;},'ZVyNX':_0x6937dd(0xe5),'CvpMh':function(_0x37a8ea,_0x100512){return _0x37a8ea-_0x100512;},'EotSS':function(_0x5b0282,_0x33f663){return _0x5b0282*_0x33f663;},'uSvLh':'YiqAW','APyXq':function(_0x464a36,_0x1c93e1){return _0x464a36*_0x1c93e1;},'uhTob':function(_0x29636e,_0x463f7f){return _0x29636e>_0x463f7f;},'ATkFd':function(_0xdb1529,_0x3d323c,_0x47e78e,_0x503622){return _0xdb1529(_0x3d323c,_0x47e78e,_0x503622);},'FlwBh':function(_0x3bb211,_0x28c8d6){return _0x3bb211+_0x28c8d6;},'OzkrK':function(_0x25b90a,_0xee7ccd){return _0x25b90a+_0xee7ccd;},'BLwrW':function(_0x18043b){return _0x18043b();},'VEAyH':function(_0x21a3d5,_0x5f44cc){return _0x21a3d5+_0x5f44cc;},'phqPz':'no\x20HE'+_0x6937dd(0x36d)+_0x6937dd(0x139)+_0x6937dd(0x972)+'stanc'+_0x6937dd(0x7f9)+_0x6937dd(0x43b)+_0x6937dd(0x2f1)+_0x6937dd(0x6fc)+'Runti'+_0x6937dd(0x585)+_0x6937dd(0x21c)+_0x6937dd(0xa6e)+_0x6937dd(0x6fd)+_0x6937dd(0x7e3)+_0x6937dd(0x349)+_0x6937dd(0x121)+'al','AXeAE':'jvAdo','Urjzm':_0x6937dd(0xa3),'crTiB':'hGjXW','OSLck':function(_0x39e4d7,_0x18ab84,_0x53b147){return _0x39e4d7(_0x18ab84,_0x53b147);},'cgyGS':_0x6937dd(0x7a7),'TVkvP':function(_0x3eefb4,_0x5989ab){return _0x3eefb4*_0x5989ab;},'HHTwF':_0x6937dd(0x234)+_0x6937dd(0x6c9)+_0x6937dd(0x97f)+_0x6937dd(0x2d6)+_0x6937dd(0x95b)+'\x20ui-m'+_0x6937dd(0x9d6)+_0x6937dd(0x5be)+'onsol'+'as,mo'+_0x6937dd(0x142)+_0x6937dd(0xa1a)+_0x6937dd(0x696)+_0x6937dd(0x99f)+'9;','yzIKT':'<canv'+'as\x20id'+_0x6937dd(0x519)+'ura-e'+_0x6937dd(0x8c9)+'\x22\x20wid'+'th=\x221'+'60\x22\x20h'+'eight'+_0x6937dd(0x3a4)+'\x22\x20sty'+_0x6937dd(0xab8)+'ispla'+'y:blo'+'ck\x22><'+_0x6937dd(0x98f)+_0x6937dd(0x676),'KCYeK':'kKgDL','sAcwh':function(_0x21b43d){return _0x21b43d();},'QiITL':function(_0x27bedb,_0x558b9e){return _0x27bedb!==_0x558b9e;},'gEaAW':_0x6937dd(0x316),'QMtca':function(_0x996c18,_0xa84f75){return _0x996c18<_0xa84f75;},'izTaj':function(_0x174b65,_0x138e33){return _0x174b65+_0x138e33;},'wjKso':_0x6937dd(0x4c4)+_0x6937dd(0x183)+'10,11'+_0x6937dd(0x5c2)+')','UkcfV':_0x6937dd(0xb55)+_0x6937dd(0x428)+'5|2','QfKjD':function(_0x28fd8f,_0x179b41){return _0x28fd8f-_0x179b41;},'WkwOn':function(_0x2d0100,_0x2fafdd){return _0x2d0100(_0x2fafdd);},'kjdZU':'tDtSZ','RlHfc':_0x6937dd(0x4cc),'dPRLO':'rgba('+'255,1'+_0x6937dd(0x737)+_0x6937dd(0x31e)+')','pHlHp':function(_0x405a8c,_0x215a9d){return _0x405a8c/_0x215a9d;},'ofSJS':_0x6937dd(0x542),'zEZRD':function(_0x52b63a,_0xe07f63){return _0x52b63a-_0xe07f63;},'oHKPK':function(_0x35dffc,_0x353f78){return _0x35dffc<_0x353f78;},'FCcVj':function(_0xd6a8cd,_0x19fcbe,_0x41ba66,_0x23366f){return _0xd6a8cd(_0x19fcbe,_0x41ba66,_0x23366f);},'KtPbl':function(_0x7a4a6a,_0x3f1d1c){return _0x7a4a6a-_0x3f1d1c;},'xUIVR':function(_0x58de62,_0x53f060){return _0x58de62>_0x53f060;},'TmqyY':_0x6937dd(0x11c),'Uwelz':_0x6937dd(0x4e6),'eBKWq':'rdGGY','TfGrw':'iRUNY','YrJri':function(_0x125361,_0x3d3cee){return _0x125361+_0x3d3cee;},'WqfQo':_0x6937dd(0x3e9),'RXscQ':_0x6937dd(0x3de)+'v\x20','VptYg':function(_0x9df65b,_0x168b5d){return _0x9df65b+_0x168b5d;},'PuIDd':'\x20·\x20te'+'am','sehDz':function(_0x33387b,_0x38d7b9){return _0x33387b(_0x38d7b9);},'RIloU':function(_0x25e4fb,_0x4b07db){return _0x25e4fb(_0x4b07db);},'AzIuT':'YflJp','tvtgu':function(_0x4e9db7){return _0x4e9db7();},'bJIQz':_0x6937dd(0x951),'NbCnt':_0x6937dd(0xac)+_0x6937dd(0x3b0)+'v2-ta'+'b','pkrxt':'backg'+_0x6937dd(0x4d6)+_0x6937dd(0x2e6)+'(21,1'+'2,29,'+'.9);b'+'order'+':1px\x20'+'solid'+'\x20rgba'+'(255,'+'143,1'+_0x6937dd(0xa33)+_0x6937dd(0x73c)+_0x6937dd(0x6e2),'bbwMA':function(_0x3f8dbd,_0x1fe844){return _0x3f8dbd===_0x1fe844;},'shNVT':'OkWlH','HFOWX':function(_0x2145a4,_0xab9e54){return _0x2145a4<=_0xab9e54;},'jQbCI':function(_0x19aa75){return _0x19aa75();},'HiufF':function(_0x47e358,_0xe99d0a){return _0x47e358(_0xe99d0a);},'leStD':function(_0x1ea57b,_0x43cdbf){return _0x1ea57b(_0x43cdbf);},'yBTVJ':function(_0x619469){return _0x619469();},'HPtzd':function(_0x4c74cf,_0x4c6419){return _0x4c74cf+_0x4c6419;},'yrRNo':'UWMK\x20'+'armin'+'g\x20fai'+'led:\x20','jqOGp':function(_0x13cdeb,_0xb148c0){return _0x13cdeb+_0xb148c0;},'eiouL':function(_0x27a909,_0x482428){return _0x27a909+_0x482428;},'VgLGX':_0x6937dd(0x111)+_0x6937dd(0x131),'CKyHS':'repla'+_0x6937dd(0x939)+_0x6937dd(0x9b3)+'iffer'+_0x6937dd(0x6b0)+'nstan'+'ce,\x20s'+'o\x20we\x20'+_0x6937dd(0x81a)+_0x6937dd(0xb43)+_0x6937dd(0x930)+_0x6937dd(0x1fd)+'\x20obje'+_0x6937dd(0x457)+'r\x20','XWKxY':function(_0x527894,_0x2d223b){return _0x527894+_0x2d223b;},'ghHsQ':function(_0x4c14b3,_0x4a88f2){return _0x4c14b3+_0x4a88f2;},'BRzlB':function(_0x2b3307,_0x170bdc){return _0x2b3307+_0x170bdc;},'wvyGm':function(_0x38921d,_0x3c82d0){return _0x38921d+_0x3c82d0;},'tLVBp':function(_0x1a4d96,_0xbb1261){return _0x1a4d96+_0xbb1261;},'dMRuk':_0x6937dd(0x187)+_0x6937dd(0x563)+_0x6937dd(0x9b9)+'lFunc'+'=','mzWQu':function(_0x1119c2,_0x5a3f0e){return _0x1119c2+_0x5a3f0e;},'hUKoE':function(_0x19af86,_0x2306d9){return _0x19af86+_0x2306d9;},'kMqNh':_0x6937dd(0x91f)+'w.Uni'+'tyWeb'+'Modki'+_0x6937dd(0x59e)+'ueWra'+'pper\x20'+_0x6937dd(0x378)+'ssing'+_0x6937dd(0x119)+_0x6937dd(0x82a)+_0x6937dd(0x392)+'unnin'+_0x6937dd(0x69a)+_0x6937dd(0x982),'yclVg':function(_0x1aa549,_0x501d35){return _0x1aa549>_0x501d35;},'dkpdA':_0x6937dd(0x9e8),'rjerE':'runs\x20'+'once\x20'+_0x6937dd(0x8e7)+_0x6937dd(0x65e)+'Assem'+_0x6937dd(0x4b4)+_0x6937dd(0x223)+_0x6937dd(0x65c)+_0x6937dd(0xb3d)+_0x6937dd(0x12e)+_0x6937dd(0x360)+_0x6937dd(0x401)+_0x6937dd(0x230)+_0x6937dd(0x3f7)+'ngth,'+'\x20','fnMxr':_0x6937dd(0x716)+'(s)\x20d'+_0x6937dd(0x215)+'\x20armi'+_0x6937dd(0x117)+'\x20docu'+_0x6937dd(0x520)+'start'+'.','OrYxN':_0x6937dd(0x363)+_0x6937dd(0x18c)+_0x6937dd(0x785)+_0x6937dd(0x622)+'->\x20vo'+_0x6937dd(0x98c)+_0x6937dd(0x20c)+_0x6937dd(0x8e1)+'ch\x20th'+'is\x20bu'+'ild.','CiJEr':function(_0x293537,_0x5427b3){return _0x293537>_0x5427b3;},'tsgPV':_0x6937dd(0x562),'phSpz':_0x6937dd(0x6c3)+'lt\x20si'+'nce\x20f'+'irst\x20'+_0x6937dd(0x6ab)+'re\x20(r'+_0x6937dd(0x52f)+_0x6937dd(0x7d9),'Cusae':function(_0x108e82,_0x29e39d){return _0x108e82+_0x29e39d;},'yLMCD':_0x6937dd(0x62b)+'-weig'+'ht:70'+'0','lfGXA':function(_0xe3b0b,_0x2060e1){return _0xe3b0b+_0x2060e1;},'LLjNn':function(_0x2ca845,_0xa38f21){return _0x2ca845(_0xa38f21);},'mDpNd':_0x6937dd(0x5e6),'grTRg':function(_0x212667,_0x177e31,_0x83984c){return _0x212667(_0x177e31,_0x83984c);},'DKlsV':function(_0x821f04,_0x3e8f29){return _0x821f04===_0x3e8f29;},'hsiQt':'WrRra','FRaMz':function(_0x180829,_0x9d2907,_0x3583cb){return _0x180829(_0x9d2907,_0x3583cb);},'EmcsF':_0x6937dd(0x84a),'RnOkz':_0x6937dd(0x321)+'b1','tBOGy':'__sak'+_0x6937dd(0x11b)+'w_v2','mHLpx':'===SA'+_0x6937dd(0x8fb)+'SKILL'+_0x6937dd(0x352)+_0x6937dd(0x670)+_0x6937dd(0x1a2),'BKfKr':'===SA'+'KURA-'+'SKILL'+'WARZ-'+'END=='+'=','vkVsz':_0x6937dd(0x6c1)+_0x6937dd(0x8e3)+_0x6937dd(0x756)+_0x6937dd(0x4e3)+'R\x20ACT'+_0x6937dd(0x3e6)+_0x6937dd(0xb2c)+'\x20up+d'+_0x6937dd(0x396),'VfIpj':'%c[sa'+_0x6937dd(0x8e3)+_0x6937dd(0x556)+'AL\x20AC'+_0x6937dd(0x829),'ejHqK':function(_0x23f8c2){return _0x23f8c2();},'YjFCV':function(_0x52e2a1,_0x9e313e){return _0x52e2a1+_0x9e313e;},'bvFms':_0x6937dd(0x6c1)+_0x6937dd(0x8e3)+'\x20SW-P'+_0x6937dd(0x1d2)+_0x6937dd(0x91d)+_0x6937dd(0x9e6),'LREnS':function(_0x9a72cb,_0x5f0cef){return _0x9a72cb+_0x5f0cef;},'huULN':_0x6937dd(0xbf),'cDtwj':_0x6937dd(0x9ad)+'loCha'+_0x6937dd(0x53e)+_0x6937dd(0x805)+_0x6937dd(0x4cd)+'r.dll','SXUFe':'__Gen'+'erate'+'d','xhkrH':_0x6937dd(0x4c8),'oavKB':_0x6937dd(0x7c2)+'nView','RFlku':_0x6937dd(0x794),'GxGFD':_0x6937dd(0x844),'EsJfp':'0x18','GiTTe':_0x6937dd(0x287),'YCvVl':'0x98','XXhQg':'0xb4','FrNaN':_0x6937dd(0xea)+_0x6937dd(0x7fc)+'th','vPjXM':_0x6937dd(0x249),'QTPuL':_0x6937dd(0xea)+_0x6937dd(0x7fc)+'th2','ktEuv':_0x6937dd(0x7de),'LZUYM':'0x7c','YeJZy':'keydo'+'wn','SKIdp':_0x6937dd(0xac)+_0x6937dd(0x3b0)+_0x6937dd(0x7dd),'VeVHL':_0x6937dd(0x8a7),'hgVgU':_0x6937dd(0x1c6)+'s','Wajyo':function(_0x5bb8ec,_0x536b65){return _0x5bb8ec+_0x536b65;},'coSZz':function(_0x4a2a1e,_0x5aeb17){return _0x4a2a1e+_0x5aeb17;},'lYIVy':function(_0xc1eae5,_0x6137c2){return _0xc1eae5+_0x6137c2;},'ptezu':function(_0x8b7b83,_0x353f5c){return _0x8b7b83+_0x353f5c;},'IAijm':function(_0x4805b7,_0x2cc5c0){return _0x4805b7+_0x2cc5c0;},'VTlwY':function(_0x1b7283,_0x1eff59){return _0x1b7283+_0x1eff59;},'aybiv':function(_0x289703,_0x5e5855){return _0x289703+_0x5e5855;},'QJcEP':function(_0x575f48,_0x38c2c6){return _0x575f48+_0x38c2c6;},'BnVte':function(_0x11e704,_0x44d449){return _0x11e704+_0x44d449;},'XpsTL':function(_0x35b54f,_0x51525b){return _0x35b54f+_0x51525b;},'WQiDm':function(_0x5a5ee9,_0xcff5bc){return _0x5a5ee9+_0xcff5bc;},'mgrHm':function(_0xb97248,_0x19cc63){return _0xb97248+_0x19cc63;},'VkHBu':function(_0x58f30b,_0x4bec96){return _0x58f30b+_0x4bec96;},'qxnwJ':_0x6937dd(0x72b)+'ra-me'+'nu-ro'+'ot{al'+'l:ini'+'tial}','SDQRd':'#saku'+_0x6937dd(0x6b1)+_0x6937dd(0x9f9)+_0x6937dd(0xb05)+_0x6937dd(0x1e8)+_0x6937dd(0x40b)+'ition'+_0x6937dd(0x214)+_0x6937dd(0x8ce)+'ht:24'+_0x6937dd(0x8a5)+'ttom:'+_0x6937dd(0x942)+'width'+_0x6937dd(0x66f)+_0x6937dd(0x26a)+_0x6937dd(0x4dc)+'(100v'+'w\x20-\x204'+'8px))'+';max-'+_0x6937dd(0x7f6)+_0x6937dd(0x821)+'(500p'+_0x6937dd(0x876)+_0x6937dd(0x3b2)+_0x6937dd(0x49a)+_0x6937dd(0xab1)+');','dxQBr':_0x6937dd(0x6ca)+_0x6937dd(0xa2b)+_0x6937dd(0x8f7)+'ont-s'+'ize:1'+'3px;f'+_0x6937dd(0x6f8)+_0x6937dd(0x27c)+_0x6937dd(0x2b2)+_0x6937dd(0x89a)+_0x6937dd(0xa7b)+'\x20UI\x22,'+'syste'+'m-ui,'+'sans-'+_0x6937dd(0x940)+';}','EeDKd':_0x6937dd(0x72b)+_0x6937dd(0x6b1)+'nu-ro'+_0x6937dd(0xb05)+_0x6937dd(0x1e8)+_0x6937dd(0x887)+_0x6937dd(0x76d)+_0x6937dd(0x6e3)+':1;tr'+'ansfo'+_0x6937dd(0x483)+_0x6937dd(0x2b3)+'inter'+_0x6937dd(0xf5)+_0x6937dd(0xb47)+_0x6937dd(0x161),'BTFGj':_0x6937dd(0x64a)+_0x6937dd(0x993)+'ispla'+_0x6937dd(0x55b)+'d;pla'+_0x6937dd(0x372)+'ems:c'+'enter'+_0x6937dd(0x964)+_0x6937dd(0x867)+'x;hei'+_0x6937dd(0x374)+_0x6937dd(0x9d2)+_0x6937dd(0xbe)+_0x6937dd(0x302)+_0x6937dd(0x8e9)+_0x6937dd(0xa65),'oTXnE':_0x6937dd(0xd2)+'ab:ho'+_0x6937dd(0x1ec)+_0x6937dd(0xa7f)+'rgba('+'246,2'+'38,24'+'2,.8)'+';}','HqwGD':_0x6937dd(0xd2)+'ab.ac'+'tive{'+_0x6937dd(0x6ca)+_0x6937dd(0x8b2)+'b9d;b'+'ackgr'+_0x6937dd(0xb2f)+_0x6937dd(0x4c4)+_0x6937dd(0x183)+'07,15'+'7,.1)'+';}','WjbZZ':_0x6937dd(0x7eb)+_0x6937dd(0x55a)+_0x6937dd(0x6ea)+_0x6937dd(0xa57)+_0x6937dd(0x10c)+_0x6937dd(0xa10)+_0x6937dd(0x3a1)+':flex'+';flex'+_0x6937dd(0x492)+_0x6937dd(0x4b0)+':colu'+_0x6937dd(0x7c5),'TsdMo':'color'+_0x6937dd(0x42a)+_0x6937dd(0x24c)+_0x6937dd(0x612)+_0x6937dd(0x715)+_0x6937dd(0x93e)+_0x6937dd(0x7d7)+_0x6937dd(0x683)+';}','CtNLx':_0x6937dd(0x236)+_0x6937dd(0x688)+'s:sta'+_0x6937dd(0x8b4)+'ign-c'+_0x6937dd(0x4ea)+_0x6937dd(0x1bc)+'rt;ga'+'p:10p'+'x;pad'+_0x6937dd(0x946)+_0x6937dd(0x2d1)+_0x6937dd(0x1f4)+_0x6937dd(0x5ee),'GSfqI':'.mn-c'+_0x6937dd(0x648)+_0x6937dd(0x824)+'it-sc'+_0x6937dd(0x5fa)+_0x6937dd(0xa15)+'umb{b'+_0x6937dd(0x2f4)+'ound:'+_0x6937dd(0x4c4)+_0x6937dd(0x176)+_0x6937dd(0x88a)+_0x6937dd(0xa21)+_0x6937dd(0x3eb)+_0x6937dd(0x8a1)+_0x6937dd(0x91a)+':4px;'+'}','nUtXp':_0x6937dd(0x8c5)+_0x6937dd(0x143)+'itle\x20'+_0x6937dd(0x852)+_0x6937dd(0x5fd)+_0x6937dd(0x30f)+_0x6937dd(0x26e)+'x;fon'+_0x6937dd(0x733)+'ght:6'+_0x6937dd(0x8b1)+_0x6937dd(0x10e)+_0x6937dd(0x2af)+'46,23'+'8,242'+_0x6937dd(0x241)+';}','MtVqc':_0x6937dd(0x8c5)+_0x6937dd(0x9bb)+_0x6937dd(0x86a)+_0x6937dd(0xb4b)+'-titl'+_0x6937dd(0x1b7)+'ong{c'+_0x6937dd(0xa7f)+_0x6937dd(0xad8)+'f5;}','nTIBD':'.sk-m'+_0x6937dd(0x445)+'paddi'+_0x6937dd(0x950)+_0x6937dd(0x72f)+_0x6937dd(0x848)+'}','BOOKy':_0x6937dd(0x56d)+_0x6937dd(0xb16)+'font-'+_0x6937dd(0x795)+'11px;'+_0x6937dd(0x8b9)+_0x6937dd(0x41e)+_0x6937dd(0x173)+_0x6937dd(0x431)+'ttom:'+'6px;w'+'hite-'+_0x6937dd(0x572)+_0x6937dd(0x880)+_0x6937dd(0xada)+'}','EdnUq':'.sk-s'+'witch'+_0x6937dd(0x6c2)+_0x6937dd(0x539)+'relat'+_0x6937dd(0x968)+'idth:'+'26px;'+_0x6937dd(0x7f6)+'t:14p'+_0x6937dd(0x2cd)+'der:0'+_0x6937dd(0x485)+'er-ra'+'dius:'+'99px;'+'backg'+_0x6937dd(0x4d6)+_0x6937dd(0x2e6)+_0x6937dd(0xa6d)+_0x6937dd(0x176)+'55,.0'+_0x6937dd(0x801)+'rsor:'+'point'+'er;fl'+_0x6937dd(0x95e)+'ne;}','KOsIT':'.sk-s'+_0x6937dd(0x1ac)+'::aft'+_0x6937dd(0x94f)+_0x6937dd(0x1e2)+_0x6937dd(0x952)+_0x6937dd(0x443)+_0x6937dd(0x370)+'solut'+_0x6937dd(0x63c)+':3px;'+_0x6937dd(0x393)+'3px;w'+_0x6937dd(0x3a6)+'8px;h'+_0x6937dd(0x751)+':8px;'+_0x6937dd(0x169)+'r-rad'+'ius:5'+_0x6937dd(0x9d8),'LmFfY':'.sk-r'+'ange{'+'displ'+'ay:fl'+'ex;al'+_0x6937dd(0xb9)+'tems:'+_0x6937dd(0x30d)+_0x6937dd(0x6a4)+':8px;'+'}','aMOCe':'.sk-s'+_0x6937dd(0x4bf)+_0x6937dd(0x4c6)+'kit-a'+'ppear'+_0x6937dd(0x286)+_0x6937dd(0x796)+'appea'+_0x6937dd(0x6fa)+_0x6937dd(0xa52)+';widt'+_0x6937dd(0x52b)+_0x6937dd(0x2b4)+_0x6937dd(0x19d)+_0x6937dd(0x656)+_0x6937dd(0x21e)+_0x6937dd(0x411)+_0x6937dd(0x858)+_0x6937dd(0x9ce)+';}','ewMfj':_0x6937dd(0x2ac)+'round'+_0x6937dd(0x49d)+'ar-gr'+'adien'+'t(#ff'+'6b9d,'+_0x6937dd(0x793)+_0x6937dd(0x789)+_0x6937dd(0x255)+'var(-'+'-p,50'+'%)\x2010'+_0x6937dd(0x797)+_0x6937dd(0x646)+_0x6937dd(0x4f2)+_0x6937dd(0x778)+'5,255'+',255,'+'.08);'+'}','SSGYw':_0x6937dd(0x182)+'ote.e'+_0x6937dd(0x7db)+_0x6937dd(0x696)+_0x6937dd(0x30c)+'3;}','XyPWf':_0x6937dd(0x954)+'tn{al'+_0x6937dd(0x74e)+'elf:f'+_0x6937dd(0x3b8)+_0x6937dd(0x136)+_0x6937dd(0x169)+_0x6937dd(0x883)+_0x6937dd(0x39e)+'-radi'+_0x6937dd(0x106)+_0x6937dd(0x2f7)+_0x6937dd(0x946)+'8px\x201'+_0x6937dd(0x975)+_0x6937dd(0x2f4)+_0x6937dd(0xb2f)+_0x6937dd(0x793)+_0x6937dd(0x4b1)+_0x6937dd(0x696)+'fff;','ErZIF':'font-'+'size:'+'11.5p'+'x;fon'+_0x6937dd(0x733)+'ght:7'+_0x6937dd(0x67d)+_0x6937dd(0x47a)+_0x6937dd(0x5e8)+'er;fo'+_0x6937dd(0x6ff)+_0x6937dd(0x224)+_0x6937dd(0x7b6)+_0x6937dd(0x329),'mZxPA':_0x6937dd(0xa83)+_0x6937dd(0x7f8)+'nt:11'+'px/1.'+_0x6937dd(0x328)+'monos'+_0x6937dd(0x4fc)+'Conso'+'las,m'+_0x6937dd(0x9d6)+'ace;w'+_0x6937dd(0x687)+_0x6937dd(0x572)+_0x6937dd(0x880)+'wrap;'+_0x6937dd(0xb28)+'break'+_0x6937dd(0x478)+_0x6937dd(0x8ad)+_0x6937dd(0xa3d)+_0x6937dd(0x747)+_0x6937dd(0x8ef)+'ity:.'+'75;ma'+_0x6937dd(0x448)+_0x6937dd(0x9ea)+_0x6937dd(0x6c0)+'overf'+_0x6937dd(0xac3)+'uto;}','SvnKG':_0x6937dd(0x259)+'ition'+_0x6937dd(0x532)+_0x6937dd(0x3d5)+_0x6937dd(0x409)+_0x6937dd(0x683)+'-even'+_0x6937dd(0xb47)+_0x6937dd(0x245)+_0x6937dd(0xe0)+_0x6937dd(0x5d0)+'shado'+_0x6937dd(0x2b1)+_0x6937dd(0x219)+_0x6937dd(0x4c4)+_0x6937dd(0x183)+_0x6937dd(0x8a9)+_0x6937dd(0x869)+');}','nNThO':function(_0x1238d6,_0x5afc7d){return _0x1238d6+_0x5afc7d;},'fBnTV':'fill='+_0x6937dd(0xd8)+'\x22\x20str'+_0x6937dd(0xb19)+'#ff6b'+_0x6937dd(0x28d)+'troke'+'-widt'+_0x6937dd(0xa60)+'\x20stro'+_0x6937dd(0x720)+_0x6937dd(0x835)+_0x6937dd(0x114)+'nd\x22\x20s'+_0x6937dd(0x320)+_0x6937dd(0x346)+_0x6937dd(0x741)+_0x6937dd(0x46a)+'d\x22/>','IJSVx':_0x6937dd(0x1b9)+_0x6937dd(0x412)+_0x6937dd(0xb42)+_0x6937dd(0x9af)+_0x6937dd(0x103)+_0x6937dd(0x8c1)+'\x22\x20fil'+'l=\x22#f'+_0x6937dd(0xa5)+'\x22/></'+_0x6937dd(0x5e3),'ZLeMQ':function(_0x2f1b12){return _0x2f1b12();},'Ptyyq':_0x6937dd(0x902)+'ntent'+'Loade'+'d','BhGnf':function(_0x5b0a6c,_0x370207){return _0x5b0a6c!==_0x370207;},'SRMDx':_0x6937dd(0xe3),'oGbJv':_0x6937dd(0xa6b),'ZidmP':function(_0x2d3e94,_0x21f2e6){return _0x2d3e94===_0x21f2e6;},'wryqU':'hejMk','RkreL':function(_0xe978dd){return _0xe978dd();}};var _0x5d1960=location['hostn'+_0x6937dd(0x4a7)]||'',_0xd8567c=/(^|\.)www\.crazygames\.com$/[_0x6937dd(0xaf6)](_0x5d1960),_0x43b4ca=/(^|\.)games\.crazygames\.com$/[_0x6937dd(0xaf6)](_0x5d1960),_0x4d05cc=/(^|\.)crazygames\.com$/[_0x6937dd(0xaf6)](_0x5d1960)&&!_0xd8567c&&!_0x43b4ca,_0x17a9ba=_0xd8567c?'porta'+'l':_0x43b4ca?_0x6937dd(0x854)+'er':'playe'+'r';if(!_0xd8567c&&!_0x43b4ca&&!_0x4d05cc)return;var _0x494d48=_0x5b43bc[_0x6937dd(0x3c5)],_0x5df584=_0x5b43bc['tBOGy'],_0x572cf5=_0x5b43bc['mHLpx'],_0x515444=_0x5b43bc['BKfKr'],_0xe7e7c6='2.9.6';if(_0x43b4ca){window[_0x6937dd(0x66b)+_0x6937dd(0x6cf)+_0x6937dd(0x761)+'r']('messa'+'ge',function(_0x5bc1a6){var _0x1e7b04=_0x6937dd,_0x17a93d=_0x5bc1a6[_0x1e7b04(0x335)];if(!_0x17a93d||_0x17a93d['__sak'+'ura']!==_0x5df584)return;try{if(_0x1e7b04(0x30a)===_0x1e7b04(0x30a)){if(window['paren'+'t']&&window[_0x1e7b04(0x242)+'t']!==window)window[_0x1e7b04(0x242)+'t']['postM'+'essag'+'e'](_0x17a93d,'*');if(window[_0x1e7b04(0x11d)]&&window['top']!==window)window[_0x1e7b04(0x11d)][_0x1e7b04(0x4d9)+_0x1e7b04(0xc3)+'e'](_0x17a93d,'*');}else{var _0x57cada=_0x46f9dd['getIt'+'em'](_0x2eed94);if(_0x57cada)_0x5a4356['fov']=_0x149d4a['min'](-0x50f+-0x9*0x443+0x2bf6,_0x4e65b5[_0x1e7b04(0xa12)](0x5a7+-0x1794+0x120b,_0x20cc8a(_0x57cada)||-0x1*0xb2a+-0x1c73+0x27f7));}}catch(_0x1c76cc){}if(_0x17a93d&&_0x17a93d[_0x1e7b04(0x5fc)]===_0x5b43bc[_0x1e7b04(0x1bf)])try{var _0x484aca=document[_0x1e7b04(0x208)+_0x1e7b04(0x477)+_0x1e7b04(0x728)+'l'](_0x1e7b04(0x98e)+'e');for(var _0x2125f7=-0xa10+0x11*0x1eb+0xc7*-0x1d;_0x5b43bc[_0x1e7b04(0x3cf)](_0x2125f7,_0x484aca['lengt'+'h']);_0x2125f7++){try{if(_0x484aca[_0x2125f7][_0x1e7b04(0x1e9)+_0x1e7b04(0x31c)+'dow'])_0x484aca[_0x2125f7]['conte'+_0x1e7b04(0x31c)+'dow'][_0x1e7b04(0x4d9)+'essag'+'e'](_0x17a93d,'*');}catch(_0x3b355e){}}}catch(_0x5e0254){}}),console['log'](_0x5b43bc[_0x6937dd(0x9f5)],_0x6937dd(0x6ca)+':'+_0x494d48);return;}if(_0xd8567c){console[_0x6937dd(0x37a)](_0x5b43bc[_0x6937dd(0xb8)],_0x5b43bc['HxLqF']('color'+':',_0x494d48)+_0x5b43bc['yLMCD'],{'host':_0x5d1960});var _0x3b51f0={'set':function(){},'command':function(){}};function _0x4904d6(_0x1f4121,_0x52110f){var _0x5a4c01=_0x6937dd,_0x2f8dc9={'cghCO':function(_0x1fd759,_0x4c488e,_0xa5b454){return _0x1fd759(_0x4c488e,_0xa5b454);}};if('HABSA'!=='HABSA'){var _0x53c0be=_0x1796bd[_0x1e8f2f[_0x427d5f]];if(_0x53c0be&&typeof _0x53c0be===_0x5a4c01(0x955)+'t'&&_0x53c0be[_0x5a4c01(0xab3)+'e']&&_0x53c0be[_0x5a4c01(0xab3)+'e'][_0x5a4c01(0xad0)+'8']&&_0x53c0be[_0x5a4c01(0xab3)+'e'][_0x5a4c01(0xad0)+'8'][_0x5a4c01(0x2eb)+'r'])return _0x2d088e['sourc'+'e']=_0x5a4c01(0x91f)+'w.'+_0x30a04c[_0x2b032a]+_0x5b43bc['IMvCs'],_0x53c0be;}else{var _0xae21e8={'__sakura':_0x5df584,'kind':_0x5a4c01(0x67b),'cmd':_0x1f4121,'arg':_0x52110f};try{var _0x2ed24c=document['query'+_0x5a4c01(0x477)+_0x5a4c01(0x728)+'l'](_0x5b43bc['rmyaC']);for(var _0x7069cf=-0x23b5+0x24fd*0x1+-0x148;_0x7069cf<_0x2ed24c[_0x5a4c01(0x76e)+'h'];_0x7069cf++){try{if(_0x5a4c01(0xb38)===_0x5a4c01(0x24f)){if(_0xb62ec['lg'])_0x18b325['lg']['textC'+_0x5a4c01(0x4ea)+'t']='';return;}else{if(_0x2ed24c[_0x7069cf][_0x5a4c01(0x1e9)+_0x5a4c01(0x31c)+'dow'])_0x2ed24c[_0x7069cf][_0x5a4c01(0x1e9)+_0x5a4c01(0x31c)+_0x5a4c01(0xde)]['postM'+_0x5a4c01(0xc3)+'e'](_0xae21e8,'*');}}catch(_0x1a882e){}}}catch(_0x1546ca){}try{var _0x1fab50=new BroadcastChannel(_0x5a4c01(0xac)+'a-sw');_0x1fab50['postM'+_0x5a4c01(0xc3)+'e'](_0xae21e8),setTimeout(function(){var _0x26faa9=_0x5a4c01;try{_0x5b43bc[_0x26faa9(0x469)](_0x26faa9(0x123),'QuVgK')?(_0x599ed3=_0x2f8dc9[_0x26faa9(0x933)](_0x5a073f,_0x26faa9(0x38c)+'on',![]),_0x22511d['push'](_0x313976)):_0x1fab50[_0x26faa9(0x6e4)]();}catch(_0x1c46f8){}},0xe5f+-0x9ca+0x39b*-0x1);}catch(_0x51cc7d){}}}var _0x224782='sakur'+_0x6937dd(0x3b0)+'panel'+'-hidd'+'en';function _0x5e6782(){var _0x479d94=_0x6937dd;try{return _0x5b43bc['HQdQA'](localStorage[_0x479d94(0x128)+'em'](_0x224782),'1');}catch(_0x324f2e){return![];}}function _0x198017(_0x310987){var _0x7322e0=_0x6937dd;try{if(_0x5b43bc['KrKhW']!==_0x5b43bc[_0x7322e0(0x253)]){if(typeof _0x53877d!=='undef'+'ined'&&_0x32f959)return _0x671a7b['sourc'+'e']='bare\x20'+_0x7322e0(0x586)+_0x7322e0(0x165)+'ng',_0x388c23;}else _0x310987?localStorage[_0x7322e0(0x62f)+'em'](_0x224782,'1'):localStorage['remov'+_0x7322e0(0x332)](_0x224782);}catch(_0xdace0d){}try{if(_0x7322e0(0x7d3)===_0x5b43bc[_0x7322e0(0x523)]){var _0x356a39=document[_0x7322e0(0x513)+_0x7322e0(0x420)+_0x7322e0(0x6e1)](_0x5b43bc['TpvQJ']);if(_0x356a39)_0x356a39[_0x7322e0(0x44d)+'e']();}else try{_0x236444();}catch(_0x33598f){}}catch(_0x4ef58f){}try{var _0x538fb5=document[_0x7322e0(0x513)+'ement'+_0x7322e0(0x6e1)](_0x7322e0(0xac)+'a-sw-'+'v2-ta'+'b');if(_0x310987&&!_0x538fb5&&document[_0x7322e0(0x2f5)]){var _0x54280e=document[_0x7322e0(0x51a)+_0x7322e0(0x999)+'ent'](_0x5b43bc[_0x7322e0(0x4bb)]);_0x54280e['id']='sakur'+_0x7322e0(0x3b0)+_0x7322e0(0x14c)+'b',_0x54280e[_0x7322e0(0x447)][_0x7322e0(0x713)+'xt']=_0x5b43bc['LYkKN'](_0x5b43bc[_0x7322e0(0x730)]+(_0x7322e0(0x2ac)+'round'+':rgba'+'(21,1'+'2,29,'+'.9);b'+'order'+':1px\x20'+_0x7322e0(0x873)+_0x7322e0(0x79d)+_0x7322e0(0xa6d)+'143,1'+_0x7322e0(0xa33)+');col'+'or:'),_0x494d48)+';'+_0x5b43bc[_0x7322e0(0x1a0)],_0x54280e[_0x7322e0(0x89d)+'onten'+'t']=_0x5b43bc[_0x7322e0(0xcf)],_0x54280e['oncli'+'ck']=function(){var _0x13dfdf=_0x7322e0;_0x5b43bc[_0x13dfdf(0x934)](_0x198017,![]),_0x303429();},document[_0x7322e0(0x2f5)][_0x7322e0(0x441)+'dChil'+'d'](_0x54280e);}else!_0x310987&&_0x538fb5&&(_0x5b43bc['HObUc'](_0x5b43bc['EAfcW'],_0x7322e0(0xa8d))?_0x538fb5[_0x7322e0(0x44d)+'e']():(_0x2dfaea=_0x5179cf+_0x3d4e1e,_0x2c9d0e=_0x52cf50+_0x5935fd));}catch(_0x272d9b){}}function _0x4b5cc0(){var _0x1ea7c0=_0x6937dd;if(_0x5e6782())return null;var _0x326766=document['getEl'+'ement'+_0x1ea7c0(0x6e1)]('sakur'+_0x1ea7c0(0x3b0)+'v2');if(_0x326766)return _0x326766;if(!document[_0x1ea7c0(0x2f5)]||!document[_0x1ea7c0(0x2f5)]['appen'+_0x1ea7c0(0xb36)+'d'])return null;try{if(!document[_0x1ea7c0(0x513)+'ement'+'ById'](_0x5b43bc['PhImt'])){var _0x1d01ba=document[_0x1ea7c0(0x51a)+_0x1ea7c0(0x999)+_0x1ea7c0(0x516)]('style');_0x1d01ba['id']=_0x1ea7c0(0xac)+'a-sw-'+_0x1ea7c0(0x739)+'s',_0x1d01ba['textC'+'onten'+'t']=_0x1ea7c0(0x72b)+_0x1ea7c0(0x616)+'-v2{a'+_0x1ea7c0(0x93f)+_0x1ea7c0(0x4a4)+'}',(document[_0x1ea7c0(0x989)]||document[_0x1ea7c0(0xa94)+_0x1ea7c0(0x1c7)+_0x1ea7c0(0x420)])[_0x1ea7c0(0x441)+_0x1ea7c0(0xb36)+'d'](_0x1d01ba);}return _0x326766=document['creat'+_0x1ea7c0(0x999)+'ent']('div'),_0x326766['id']=_0x5b43bc[_0x1ea7c0(0x4ec)],document[_0x1ea7c0(0x2f5)][_0x1ea7c0(0x441)+_0x1ea7c0(0xb36)+'d'](_0x326766),_0x326766;}catch(_0x22940f){return null;}}function _0x303429(){var _0x56272d=_0x6937dd,_0x42a95a=_0x5b43bc[_0x56272d(0xb0d)](_0x4b5cc0);if(!_0x42a95a)return _0x3b51f0;if(_0x42a95a['datas'+'et'][_0x56272d(0x3f6)])return _0x42a95a['api'];try{return _0x32e867(_0x42a95a);}catch(_0x19c166){if(_0x56272d(0x943)!==_0x56272d(0x8d1))return _0x42a95a[_0x56272d(0xa14)+'et'][_0x56272d(0x3f6)]='1',_0x42a95a[_0x56272d(0x3f6)]=_0x3b51f0,console['warn'](_0x5b43bc['ztzpC'],_0x5b43bc['LYkKN']('color'+':',_0x494d48),_0x19c166),_0x3b51f0;else{_0x15f8b4['cat']=_0x2c89eb,_0x3411bb['syncs']=[];if(!_0x2e6feb[_0x56272d(0x9bd)])return;var _0x38f054=null;for(var _0x27b70c=0x10fd+-0x1*0x1471+0x374;_0x27b70c<_0x54baee['lengt'+'h'];_0x27b70c++)if(_0x4ff582[_0x27b70c]['id']===_0x2afcd7)_0x38f054=_0x515f77[_0x27b70c];_0x55d8f8['head']['textC'+'onten'+'t']=_0x5b43bc['jOKOd']+(_0x38f054&&_0x38f054['label']||'?');for(var _0x1c6517 in _0x179979[_0x56272d(0xb13)+'ns']){if(_0x5c63ea['butto'+'ns'][_0x1c6517][_0x56272d(0xaa0)+_0x56272d(0x698)])_0x82f9e[_0x56272d(0xb13)+'ns'][_0x1c6517][_0x56272d(0xaa0)+'Name']=_0x5b43bc[_0x56272d(0x17e)]+(_0x5b43bc['ZWEfv'](_0x1c6517,_0x2df63b)?_0x5b43bc[_0x56272d(0xa13)]:'');}var _0x5eaeb2=[];try{_0x5eaeb2=_0x5b43bc['wmOlh'](_0xd3ba04,_0x9f8c61);}catch(_0x5e014f){_0x5eaeb2=[];}while(_0x4f8a40[_0x56272d(0x9bd)]['first'+'Child'])_0x3fc4cd[_0x56272d(0x9bd)][_0x56272d(0x44d)+'eChil'+'d'](_0x290565['cols'][_0x56272d(0x6f6)+_0x56272d(0xa67)]);for(var _0x23c125=-0x1f6e+0x1*-0x1743+0x36b1;_0x23c125<_0x5eaeb2[_0x56272d(0x76e)+'h'];_0x23c125++)_0x291be4[_0x56272d(0x9bd)][_0x56272d(0x441)+'dChil'+'d'](_0x5eaeb2[_0x23c125]);}}}function _0x32e867(_0x57e25d){var _0x26c736=_0x6937dd,_0x51875d={'qnbNL':function(_0x2fa064,_0x2e6189){var _0x31888c=_0x5c65;return _0x5b43bc[_0x31888c(0x164)](_0x2fa064,_0x2e6189);},'SqnLY':_0x5b43bc[_0x26c736(0x24d)],'hmQSL':function(_0x40c46f,_0xc5f8fb){return _0x40c46f(_0xc5f8fb);},'sBswq':_0x5b43bc[_0x26c736(0x5f2)],'uwtSZ':_0x5b43bc[_0x26c736(0xa18)],'FLXnE':_0x26c736(0x70f)+'rea','vzfkE':'copy','ryTai':_0x5b43bc[_0x26c736(0x7e5)],'ZicaH':function(_0x290227,_0x1edabf){return _0x290227||_0x1edabf;},'QZPfD':_0x26c736(0x61a)+_0x26c736(0x4d1)+_0x26c736(0xc0)+_0x26c736(0x914)+_0x26c736(0xa91)+_0x26c736(0x7cd)+_0x26c736(0x517)+_0x26c736(0x1ed)+'?','WOuid':_0x26c736(0x3bd)+_0x26c736(0x695)+'rame\x20'+'never'+_0x26c736(0x5a8)+'ed\x20a\x20'+_0x26c736(0x635)+'e\x20rep'+_0x26c736(0x266)+'\x0a','uothM':_0x26c736(0x595)+_0x26c736(0x46e)+_0x26c736(0x7e7)+'ey\x20is'+'\x20not\x20'+_0x26c736(0x908)+'ting\x20'+_0x26c736(0x4a6)+'the\x20c'+'ross-'+_0x26c736(0x9f6)+_0x26c736(0x916)+_0x26c736(0x35f),'NBaan':_0x26c736(0x9e3)+_0x26c736(0x981)+_0x26c736(0x347)+_0x26c736(0x14f)+'\x20copi'+_0x26c736(0x34f)+'\x20UWMK'+_0x26c736(0xb15)+_0x26c736(0x8b0)+_0x26c736(0xb0a)+'Assem'+_0x26c736(0x4b4)+'nstan'+_0x26c736(0x65c)+_0x26c736(0x85e),'PDEnu':function(_0x5179f3,_0xa6c04b,_0x35ade8){return _0x5179f3(_0xa6c04b,_0x35ade8);},'wHLwU':function(_0x561a2b,_0x551125){var _0x3e6213=_0x26c736;return _0x5b43bc[_0x3e6213(0x6b5)](_0x561a2b,_0x551125);},'YdgjT':_0x5b43bc[_0x26c736(0x637)],'jsdDi':_0x5b43bc['gRqJV'],'zPyYs':_0x26c736(0x422),'UJJcO':function(_0x39843a,_0x121608){return _0x39843a&&_0x121608;},'FOQDf':function(_0x364e22,_0x16314a){return _0x364e22!==_0x16314a;},'knHpV':_0x5b43bc['ndLRP'],'Vdsex':function(_0x20d808,_0xc64a40){var _0x547f6e=_0x26c736;return _0x5b43bc[_0x547f6e(0x932)](_0x20d808,_0xc64a40);},'AmZRD':function(_0x5c7584,_0x276486){return _0x5c7584+_0x276486;},'UOyPO':_0x26c736(0xa4)+'cts\x20·'+'\x20','lIELh':function(_0x363df0,_0x12ec8d){var _0x29c5c4=_0x26c736;return _0x5b43bc[_0x29c5c4(0x6b5)](_0x363df0,_0x12ec8d);},'bbEFM':'GgrOB','okzpK':function(_0x21e13a,_0x313996){var _0x331b56=_0x26c736;return _0x5b43bc[_0x331b56(0x932)](_0x21e13a,_0x313996);},'vgMua':function(_0x13ae62,_0xbb5bb9){var _0x17e87e=_0x26c736;return _0x5b43bc[_0x17e87e(0x2dc)](_0x13ae62,_0xbb5bb9);},'CAnOK':_0x5b43bc['FfPMK'],'LjFwQ':_0x5b43bc['nqoxG'],'NLmsE':function(_0x4f2248,_0x4ccea5){var _0x1822ee=_0x26c736;return _0x5b43bc[_0x1822ee(0x226)](_0x4f2248,_0x4ccea5);},'pDeIP':_0x26c736(0x460)+_0x26c736(0x494),'vwRrZ':_0x26c736(0x460)+_0x26c736(0x690),'NzkWL':_0x5b43bc['KfkiL'],'lDhGX':_0x26c736(0x5b6),'KRVpI':_0x26c736(0x62b)+_0x26c736(0x1e7)+_0x26c736(0x87a)+'0','IFBBd':function(_0x1b5c21,_0x418498){return _0x1b5c21+_0x418498;}};_0x57e25d[_0x26c736(0x447)][_0x26c736(0x713)+'xt']=_0x5b43bc[_0x26c736(0xb5)](_0x26c736(0xd0)+'ion:f'+_0x26c736(0x979)+'left:'+_0x26c736(0x7cf)+_0x26c736(0x74d)+_0x26c736(0x5a3)+'-inde'+_0x26c736(0x2ae)+'74830'+_0x26c736(0x5d5)+_0x26c736(0xaf8)+'th:mi'+'n(52v'+'w,620'+'px);m'+'ax-he'+_0x26c736(0x59c)+'78vh;'+(_0x26c736(0x2ac)+_0x26c736(0x4d6)+':#150'+_0x26c736(0x81f)+_0x26c736(0xa7f)+_0x26c736(0x13c)+_0x26c736(0xa84)+'rder:'+_0x26c736(0x889)+_0x26c736(0xb04)+_0x26c736(0x4c4)+_0x26c736(0x183)+'43,17'+'7,.5)'+';bord'+_0x26c736(0x667)+'dius:'+'14px;'),_0x5b43bc['YJKGz'])+_0x5b43bc[_0x26c736(0xa0e)],_0x57e25d['inner'+_0x26c736(0x497)]=_0x5b43bc['pPfQL'](_0x5b43bc[_0x26c736(0xb5)](_0x5b43bc['XHmFD'](_0x5b43bc[_0x26c736(0x843)](_0x5b43bc['nYxcQ'](_0x5b43bc[_0x26c736(0xab9)](_0x5b43bc['TGPlC'](_0x5b43bc[_0x26c736(0x5db)],'<b\x20st'+_0x26c736(0x148)+_0x26c736(0x6ca)+':')+_0x494d48+_0x5b43bc[_0x26c736(0x4e7)],_0x26c736(0x450)+_0x26c736(0x112)+_0x26c736(0x463)+_0x26c736(0x2e0)+_0x26c736(0x13b)+_0x26c736(0x827)+'lor:#'+'7a658'+_0x26c736(0x750)+_0x26c736(0x30f)+_0x26c736(0x526)+_0x26c736(0x2f7)+_0x26c736(0x946)+_0x26c736(0xa64)+'px;bo'+'rder:'+_0x26c736(0x889)+_0x26c736(0xb04)+_0x26c736(0x4c4)+_0x26c736(0x183)+'43,17'+_0x26c736(0x537)+');bor'+'der-r'+_0x26c736(0x91a)+_0x26c736(0x1aa)+_0x26c736(0xfe)+_0x26c736(0x5d2)+_0x26c736(0x7ba))+('<span'+_0x26c736(0x112)+'sw2-s'+_0x26c736(0x3fb)+_0x26c736(0x285)+_0x26c736(0x28f)+_0x26c736(0xa7f)+'#bda9'+'c9\x22>w'+_0x26c736(0x587)+_0x26c736(0x138)+_0x26c736(0x717)+'\x20fram'+_0x26c736(0x5e5)+'pan>')+(_0x26c736(0x454)+_0x26c736(0x58f)+_0x26c736(0x9c5)+'-copy'+_0x26c736(0x285)+_0x26c736(0xab8)+_0x26c736(0x4b2)+'y:non'+_0x26c736(0x80f)+_0x26c736(0x250)+_0x26c736(0x71d)+_0x26c736(0xb31)+'ackgr'+'ound:')+_0x494d48,_0x5b43bc[_0x26c736(0xb46)])+('<butt'+_0x26c736(0x58f)+_0x26c736(0x9c5)+'-togg'+_0x26c736(0xb24)+'tyle='+_0x26c736(0x9e7)+_0x26c736(0x385)+_0x26c736(0x5ae)+'nspar'+'ent;b'+'order'+_0x26c736(0x931)+_0x26c736(0x873)+'\x20rgba'+_0x26c736(0xa6d)+'143,1'+_0x26c736(0x4c3)+');col'+'or:#f'+_0x26c736(0x80c)+_0x26c736(0x485)+'er-ra'+'dius:'+_0x26c736(0x294)+'addin'+'g:4px'+_0x26c736(0xa80)+'curso'+_0x26c736(0x7a2)+'nter;'+'\x22>ope'+_0x26c736(0x7a9)+_0x26c736(0x4cf))+_0x5b43bc[_0x26c736(0x9b7)]+_0x5b43bc[_0x26c736(0x886)]+('<div\x20'+'id=\x22s'+_0x26c736(0x710)+'dy\x22\x20s'+_0x26c736(0x917)+'\x22disp'+'lay:n'+_0x26c736(0x74f)+'>')+_0x5b43bc[_0x26c736(0x580)]+(_0x26c736(0x454)+_0x26c736(0x58f)+'=\x22sw2'+_0x26c736(0x471)+'d\x22\x20st'+_0x26c736(0x148)+_0x26c736(0x2ac)+_0x26c736(0x4d6)+':tran'+'spare'+_0x26c736(0x2c2)+_0x26c736(0x910)+_0x26c736(0x889)+'olid\x20'+'rgba('+_0x26c736(0x183)+_0x26c736(0x737)+'7,.4)'+';colo'+_0x26c736(0x496)+_0x26c736(0x73d)+'borde'+_0x26c736(0x9cf)+_0x26c736(0x96b)+_0x26c736(0x3e8)+'dding'+':4px\x20'+_0x26c736(0x848)+'curso'+_0x26c736(0x7a2)+'nter;'+'\x22>Spe'+_0x26c736(0xa74)+'f</bu'+_0x26c736(0x4cf)),_0x26c736(0x6b6)+_0x26c736(0x6a1)+'\x22sw2-'+_0x26c736(0xae4)+'r\x22\x20ty'+'pe=\x22r'+_0x26c736(0x8e8)+'\x20min='+_0x26c736(0x8a3)+'ax=\x225'+'\x22\x20ste'+_0x26c736(0x5aa)+_0x26c736(0x3fe)+'lue=\x22'+_0x26c736(0xdb)+'yle=\x22'+_0x26c736(0x10c)+':120p'+_0x26c736(0x6db)+_0x26c736(0x88d)+_0x26c736(0xa7f)),_0x494d48)+_0x26c736(0xa56),'<span'+'\x20id=\x22'+_0x26c736(0x50e)+'actor'+'label'+_0x26c736(0x285)+'le=\x22c'+'olor:'+'#bda9'+_0x26c736(0xa26)+_0x26c736(0x4e4)+_0x26c736(0x851)+'px;\x22>'+'1.0x<'+_0x26c736(0xb48)+'>')+(_0x26c736(0x454)+_0x26c736(0x58f)+'=\x22sw2'+'-snap'+_0x26c736(0x285)+'le=\x22b'+_0x26c736(0x2f4)+'ound:'+_0x26c736(0x259)+_0x26c736(0x242)+'t;bor'+'der:1'+'px\x20so'+_0x26c736(0x54b)+'gba(2'+_0x26c736(0x1ae)+_0x26c736(0x7fb)+_0x26c736(0x2a5)+_0x26c736(0x6ca)+':#f7e'+'ef5;b'+_0x26c736(0x39e)+'-radi'+'us:7p'+_0x26c736(0x2f7)+_0x26c736(0x946)+_0x26c736(0x156)+_0x26c736(0x5ac)+_0x26c736(0x47a)+'point'+_0x26c736(0x10b)+_0x26c736(0x296)+'hot\x20('+_0x26c736(0xd9)+'butto'+'n>'),_0x5b43bc['NMBeW'])+_0x5b43bc['tVhqz']+('<pre\x20'+'id=\x22s'+'w2-ou'+_0x26c736(0x9f0)+'yle=\x22'+_0x26c736(0x67f)+'n:0;p'+'addin'+_0x26c736(0x1cf)+_0x26c736(0x581)+'x;ove'+'rflow'+':auto'+';flex'+_0x26c736(0x3ad)+_0x26c736(0xa8b)+'white'+'-spac'+_0x26c736(0x727)+_0x26c736(0x5d1)+_0x26c736(0x61e)+_0x26c736(0x358)+_0x26c736(0xb3f)+_0x26c736(0x915)+_0x26c736(0x13e)+'nt:in'+_0x26c736(0x58b)+';')+_0x5b43bc[_0x26c736(0xa2c)]+('</div'+'>');var _0xbdb49b=_0x57e25d[_0x26c736(0x208)+_0x26c736(0x477)+_0x26c736(0x7ef)](_0x26c736(0x2a9)+'statu'+'s'),_0x4795d0=_0x57e25d[_0x26c736(0x208)+_0x26c736(0x477)+_0x26c736(0x7ef)](_0x26c736(0x2a9)+_0x26c736(0x146)),_0x46efe7=_0x57e25d['query'+'Selec'+_0x26c736(0x7ef)](_0x26c736(0x2a9)+_0x26c736(0x82c)),_0x3dc1b3=_0x57e25d['query'+_0x26c736(0x477)+_0x26c736(0x7ef)](_0x5b43bc['yFOOC']),_0x41630d=_0x57e25d[_0x26c736(0x208)+_0x26c736(0x477)+_0x26c736(0x7ef)](_0x26c736(0x2a9)+'x'),_0x24846e=_0x57e25d[_0x26c736(0x208)+_0x26c736(0x477)+_0x26c736(0x7ef)](_0x5b43bc[_0x26c736(0x8df)]),_0x32d18c=_0x57e25d['query'+_0x26c736(0x477)+_0x26c736(0x7ef)](_0x26c736(0x2a9)+'body'),_0x7d15ed=_0x57e25d[_0x26c736(0x208)+'Selec'+'tor'](_0x5b43bc[_0x26c736(0x2c1)]),_0x2e37df=_0x57e25d['query'+'Selec'+_0x26c736(0x7ef)]('#sw2-'+'speed'),_0x2f32d5=_0x57e25d[_0x26c736(0x208)+'Selec'+_0x26c736(0x7ef)](_0x26c736(0x2a9)+'facto'+'r'),_0x33f88d=_0x57e25d[_0x26c736(0x208)+_0x26c736(0x477)+'tor'](_0x26c736(0x2a9)+_0x26c736(0xae4)+_0x26c736(0x74c)+'l'),_0x4d4299=_0x57e25d['query'+_0x26c736(0x477)+_0x26c736(0x7ef)](_0x5b43bc['KVOJN']),_0x4a5e87=null,_0xda4251=![];function _0x442286(){var _0x59e99c=_0x26c736;if('aXxiY'===_0x59e99c(0x561)){if(_0x32d18c)_0x32d18c[_0x59e99c(0x447)]['displ'+'ay']=_0xda4251?'':_0x59e99c(0x422);if(_0x24846e)_0x24846e[_0x59e99c(0x89d)+_0x59e99c(0x4ea)+'t']=_0xda4251?_0x5b43bc[_0x59e99c(0x960)]:_0x5b43bc[_0x59e99c(0x7aa)];_0x57e25d['style']['width']=_0xda4251?_0x5b43bc[_0x59e99c(0x73a)]:_0x5b43bc[_0x59e99c(0x588)],_0x57e25d[_0x59e99c(0x447)][_0x59e99c(0x2ac)+_0x59e99c(0x4d6)]=_0xda4251?_0x5b43bc[_0x59e99c(0x87c)]:'rgba('+_0x59e99c(0x28b)+_0x59e99c(0x502)+'9)';}else{var _0x15d4a3=_0x3ef513[_0xd3ceab],_0x29ae36=_0x14869b[_0x539dac];if(_0x15d4a3!==_0x29ae36)_0x3eeda4[_0x59e99c(0x7d6)](_0x51875d['qnbNL'](_0x51875d[_0x59e99c(0x4fd)](_0x19ad8c+':\x20',_0x15d4a3)+_0x59e99c(0xa8),_0x29ae36));}}if(_0x24846e)_0x24846e[_0x26c736(0x624)+'ck']=function(){_0xda4251=!_0xda4251,_0x442286();};_0x442286();if(_0x41630d)_0x41630d[_0x26c736(0x624)+'ck']=function(){_0x198017(!![]);};if(_0x7d15ed)_0x7d15ed[_0x26c736(0x624)+'ck']=function(){var _0x24f3e0=_0x26c736;if(_0x24f3e0(0x15c)!==_0x51875d[_0x24f3e0(0x292)])return _0x1aeb88['ident'+_0x24f3e0(0x458)]=![],null;else _0x51875d['hmQSL'](_0x4904d6,_0x51875d['sBswq']);};var _0x49e2cd=![];function _0x19e937(){var _0x485674=_0x26c736;_0x4904d6('speed',{'on':_0x49e2cd,'factor':parseFloat(_0x2f32d5[_0x485674(0x1c6)])||0x24ba+0x1*0x21ce+-0x4687*0x1});}if(_0x2e37df)_0x2e37df[_0x26c736(0x624)+'ck']=function(){var _0x1b69b3=_0x26c736,_0x31e11b=_0x51875d[_0x1b69b3(0x26c)][_0x1b69b3(0x8ec)]('|'),_0x2eb029=-0x11*-0x5+0x588*0x1+-0x5dd;while(!![]){switch(_0x31e11b[_0x2eb029++]){case'0':_0x19e937();continue;case'1':_0x2e37df[_0x1b69b3(0x89d)+_0x1b69b3(0x4ea)+'t']=_0x49e2cd?'Speed'+_0x1b69b3(0x494):_0x1b69b3(0x460)+_0x1b69b3(0x690);continue;case'2':_0x2e37df[_0x1b69b3(0x447)][_0x1b69b3(0x6ca)]=_0x49e2cd?_0x1b69b3(0x7bc)+'1b':_0x1b69b3(0x13c)+'f5';continue;case'3':_0x49e2cd=!_0x49e2cd;continue;case'4':_0x2e37df['style']['backg'+'round']=_0x49e2cd?_0x494d48:_0x1b69b3(0x259)+'paren'+'t';continue;}break;}};if(_0x2f32d5)_0x2f32d5[_0x26c736(0x254)+'ut']=function(){var _0x50afa5=_0x26c736;if(_0x33f88d)_0x33f88d[_0x50afa5(0x89d)+_0x50afa5(0x4ea)+'t']=(parseFloat(_0x2f32d5[_0x50afa5(0x1c6)])||0x16bc+-0xe62+-0x859)['toFix'+'ed'](0xd*0x111+-0x1013*0x2+0x1*0x124a)+'x';_0x19e937();};if(_0x3dc1b3)_0x3dc1b3[_0x26c736(0x624)+'ck']=function(){var _0x2a6bb3=_0x26c736,_0xa628a5={'XxPIT':_0x51875d['ryTai']},_0x347ed2=_0x51875d[_0x2a6bb3(0x4fd)](_0x572cf5+'\x0a'+(_0x4a5e87?JSON['strin'+_0x2a6bb3(0x57f)](_0x4a5e87,null,-0x29*0x5f+0x1*0xcf2+0x246*0x1):''),'\x0a')+_0x515444,_0x494cc1=function(){var _0x5bf259=_0x2a6bb3;if(_0x3dc1b3)_0x3dc1b3['textC'+'onten'+'t']=_0xa628a5[_0x5bf259(0x6e8)];};if(navigator[_0x2a6bb3(0x740)+'oard']&&navigator[_0x2a6bb3(0x740)+_0x2a6bb3(0x272)][_0x2a6bb3(0x73e)+'Text'])navigator['clipb'+'oard'][_0x2a6bb3(0x73e)+_0x2a6bb3(0x39d)](_0x347ed2)[_0x2a6bb3(0x36b)](_0x494cc1,function(){_0x2174e5();});else _0x2174e5();function _0x2174e5(){var _0x1dd532=_0x2a6bb3,_0x1e6b03=document[_0x1dd532(0x51a)+_0x1dd532(0x999)+_0x1dd532(0x516)](_0x51875d['FLXnE']);_0x1e6b03['value']=_0x347ed2;if(!document[_0x1dd532(0x2f5)])return;document[_0x1dd532(0x2f5)][_0x1dd532(0x441)+_0x1dd532(0xb36)+'d'](_0x1e6b03),_0x1e6b03['selec'+'t']();try{document[_0x1dd532(0xabb)+_0x1dd532(0x400)+'d'](_0x51875d['vzfkE']),_0x494cc1();}catch(_0x44bab1){}_0x1e6b03[_0x1dd532(0x44d)+'e']();}};setTimeout(function(){var _0x942348=_0x26c736;if(_0x4a5e87)return;if(_0x51875d[_0x942348(0x283)](!_0xbdb49b,!_0x46efe7))return;_0xbdb49b[_0x942348(0x89d)+_0x942348(0x4ea)+'t']=_0x51875d['QZPfD'],_0xbdb49b[_0x942348(0x447)]['color']=_0x942348(0xbb)+'c7',_0x46efe7[_0x942348(0x89d)+_0x942348(0x4ea)+'t']=_0x51875d[_0x942348(0x5e2)]+(_0x942348(0x35e)+_0x942348(0x473)+_0x942348(0xab2)+_0x942348(0xaf3)+_0x942348(0x874)+'rscri'+_0x942348(0x8e5)+_0x942348(0x86b)+_0x942348(0x662)+_0x942348(0xb3d)+_0x942348(0x623)+'ng\x20on'+_0x942348(0x930)+'porta'+_0x942348(0x735))+(_0x942348(0x766)+_0x942348(0xa8a)+_0x942348(0xa93)+_0x942348(0x25b)+_0x942348(0x120)+_0x942348(0x51e)+'\x0a\x0a')+_0x51875d['uothM']+('\x20\x202.\x20'+_0x942348(0xa0c)+_0x942348(0x36c)+_0x942348(0x395)+_0x942348(0x966)+'n\x20rel'+_0x942348(0x1de)+'\x20sinc'+_0x942348(0x3e7)+_0x942348(0x1c8)+_0x942348(0x418))+('\x20\x203.\x20'+'Both\x20'+'sakur'+_0x942348(0x768)+'llwar'+_0x942348(0x38d)+_0x942348(0x4f5)+_0x942348(0x21b)+'he\x20ol'+'d\x20dia'+'g\x20scr'+_0x942348(0x5f6)+'re\x0a')+_0x51875d[_0x942348(0x64c)]+('Reloa'+_0x942348(0x9dc)+_0x942348(0x717)+_0x942348(0x101)+'\x20once'+_0x942348(0xb3d)+_0x942348(0x83b)+'\x20this'+_0x942348(0x528)+'l\x20aga'+'in.');},-0x6299+-0x1*-0xdd2f+0x6fca);var _0x33577b={'set':function(_0xdbbdbc){var _0x5bb6c5=_0x26c736;_0x4a5e87=_0xdbbdbc;if(_0x3dc1b3)_0x3dc1b3[_0x5bb6c5(0x447)]['displ'+'ay']='';if(_0x4795d0){if(_0x51875d[_0x5bb6c5(0x1f1)](_0x5bb6c5(0x8fe),_0x51875d[_0x5bb6c5(0x2a3)])){_0x4795d0['textC'+'onten'+'t']='v'+(_0xdbbdbc[_0x5bb6c5(0x957)+'on']||'?');var _0x37a789=_0xe7e7c6,_0x3a5ee8=_0xdbbdbc['versi'+'on']||'';_0x4795d0[_0x5bb6c5(0x447)]['color']=_0x3a5ee8===_0x37a789?_0x494d48:'#ff6e'+'74',_0x4795d0[_0x5bb6c5(0x447)][_0x5bb6c5(0x169)+_0x5bb6c5(0x4cb)+'r']=_0x3a5ee8===_0x37a789?_0x5bb6c5(0x4c4)+'255,1'+_0x5bb6c5(0x737)+_0x5bb6c5(0x537)+')':'#ff6e'+'74';}else{_0x51875d['PDEnu'](_0x5ee63b,_0x199809&&_0x51875d[_0x5bb6c5(0x1da)](typeof _0x56260a['on'],_0x5bb6c5(0x546)+'an')?_0x415e91['on']:_0x12be31['on'],_0x4d557b&&_0x51875d['wHLwU'](typeof _0x478913['facto'+'r'],_0x51875d['YdgjT'])?_0x3fca4d['facto'+'r']:_0x53c6cb['facto'+'r']);return;}}var _0x3d07b6=_0xdbbdbc['insta'+_0x5bb6c5(0x14e)]&&_0xdbbdbc[_0x5bb6c5(0x981)+'nces']['FPSco'+'ntrol'+_0x5bb6c5(0x591)],_0x372ff5=Math[_0x5bb6c5(0x4d6)]((_0xdbbdbc[_0x5bb6c5(0x617)+'edMs']||-0x15dc+-0x178e+0x2d6a)/(0x18c2+-0x994+-0xb46));if(_0xbdb49b){if(_0x51875d[_0x5bb6c5(0x1f1)]('UpBdW',_0x5bb6c5(0x1f5))){var _0xb0c561,_0x4b6ace;if(_0x3d07b6&&_0xdbbdbc[_0x5bb6c5(0x20b)+'y']&&_0xdbbdbc[_0x5bb6c5(0x20b)+'y']['FPSco'+_0x5bb6c5(0x5d7)+'ler'])_0xb0c561=_0x51875d[_0x5bb6c5(0x225)](_0x51875d[_0x5bb6c5(0x446)](_0x5bb6c5(0x25a)+'·\x20',Object['keys'](_0xdbbdbc['insta'+'nces'])['lengt'+'h'])+_0x51875d[_0x5bb6c5(0x5d3)]+_0x372ff5,'s'),_0x4b6ace='#7ee0'+'a8';else{if(_0xdbbdbc['hooks'+_0x5bb6c5(0x9a9)+'ed']>0xab7*-0x1+-0x27*0x87+0x1f48){if(_0x51875d['lIELh'](_0x51875d['bbEFM'],_0x5bb6c5(0x63a))){var _0x54ca9d=_0x51875d['jsdDi'][_0x5bb6c5(0x8ec)]('|'),_0x1e5774=0x258e+0x3d*0x12+-0x29d8;while(!![]){switch(_0x54ca9d[_0x1e5774++]){case'0':_0x5256e0[_0x5bb6c5(0x401)+'nRunt'+_0x5bb6c5(0x919)+'Expor'+_0x5bb6c5(0x661)]=!!(_0x1bc18e&&_0x1b1db8[_0x5bb6c5(0xb12)+_0x5bb6c5(0x554)]&&_0x4acae5[_0x5bb6c5(0xb12)+_0x5bb6c5(0x554)]===_0x42031a);continue;case'1':_0x75ce72['plugi'+_0x5bb6c5(0xa5e)+_0x5bb6c5(0x66e)+'me']=_0x1c908e&&_0x39c0df['_runt'+'ime']&&_0x3fdc11['_runt'+'ime'][_0x5bb6c5(0x1df)]?typeof _0x1ca7f9['_runt'+_0x5bb6c5(0x554)][_0x5bb6c5(0x1df)]:_0x51875d[_0x5bb6c5(0x3a8)];continue;case'2':_0x40280[_0x5bb6c5(0x167)+_0x5bb6c5(0xa6)+'e']=_0x42031a&&_0x42031a[_0x5bb6c5(0x1df)]?typeof _0x42031a[_0x5bb6c5(0x1df)]:_0x51875d['zPyYs'];continue;case'3':_0x59e100[_0x5bb6c5(0x615)]=_0x42031a&&_0x42031a[_0x5bb6c5(0x9fc)+'uraTa'+'g']||null;continue;case'4':_0x4cb9a5['tagMa'+'tches']=!!(_0x51875d['UJJcO'](_0x42031a,_0x41808e)&&_0x42031a[_0x5bb6c5(0x9fc)+_0x5bb6c5(0x44f)+'g']===_0x26ff2e);continue;case'5':var _0x42031a=_0x9adf17[_0x5bb6c5(0x7c3)+'WebMo'+_0x5bb6c5(0x1a6)]&&_0x2c13d5['Unity'+_0x5bb6c5(0x365)+_0x5bb6c5(0x1a6)]['Runti'+'me'];continue;}break;}}else _0xb0c561=_0x51875d[_0x5bb6c5(0x83d)]('hooks'+'\x20arme'+_0x5bb6c5(0xa68),_0x372ff5)+'s',_0x4b6ace='#ffd4'+'8a';}else _0xdbbdbc['scrip'+_0x5bb6c5(0x973)]?(_0xb0c561='metad'+'ata\x20r'+_0x5bb6c5(0xa54)+'·\x20'+_0x372ff5+'s',_0x4b6ace=_0x5bb6c5(0x79f)+'8a'):(_0xb0c561=_0x51875d[_0x5bb6c5(0xa4c)](_0x51875d['vgMua'](_0xdbbdbc[_0x5bb6c5(0x281)]&&_0xdbbdbc['arm']['ok']?_0x5bb6c5(0x689)+'\x20·\x20':'armin'+'g\x20·\x20',_0x372ff5),'s'),_0x4b6ace='#ffd4'+'8a');}_0xbdb49b[_0x5bb6c5(0x89d)+'onten'+'t']=_0xb0c561,_0xbdb49b['style'][_0x5bb6c5(0x6ca)]=_0x4b6ace;}else try{var _0xa6eea5=_0x3be537;if(_0xa6eea5&&_0xa6eea5['el'])_0xa6eea5['el'][_0x5bb6c5(0x447)]['displ'+'ay']=_0x141a3a?'':_0x51875d['zPyYs'];var _0x2380db=_0x33cd02;if(_0x2380db&&_0x2380db['cv'])_0x2380db['cv']['style'][_0x5bb6c5(0x1f8)+'ay']=_0x23479d?'':_0x51875d[_0x5bb6c5(0x3a8)];}catch(_0x5e7d25){}}_0x4d4299&&(_0x4d4299['textC'+_0x5bb6c5(0x4ea)+'t']=_0xdbbdbc[_0x5bb6c5(0x3b7)]&&_0xdbbdbc[_0x5bb6c5(0x3b7)]['lengt'+'h']?_0x51875d['CAnOK']+_0xdbbdbc[_0x5bb6c5(0x3b7)]['join'](',\x20'):_0x51875d[_0x5bb6c5(0x692)]);if(_0xdbbdbc['speed']&&_0x2e37df){var _0x1bffb5=('0|2|4'+_0x5bb6c5(0x985))[_0x5bb6c5(0x8ec)]('|'),_0x22deb5=0x7d3+0x24eb+-0x2cbe;while(!![]){switch(_0x1bffb5[_0x22deb5++]){case'0':_0x49e2cd=!!_0xdbbdbc[_0x5bb6c5(0x1ef)]['on'];continue;case'1':_0x33f88d&&_0xdbbdbc[_0x5bb6c5(0x1ef)][_0x5bb6c5(0xae4)+'r']&&(_0x33f88d[_0x5bb6c5(0x89d)+'onten'+'t']=_0x51875d['NLmsE'](Number(_0xdbbdbc[_0x5bb6c5(0x1ef)]['facto'+'r'])[_0x5bb6c5(0x67c)+'ed'](0x23*-0xc1+-0xbbf+-0x2ef*-0xd),'x'));continue;case'2':_0x2e37df['textC'+'onten'+'t']=_0x49e2cd?_0x51875d[_0x5bb6c5(0x263)]:_0x51875d[_0x5bb6c5(0x68d)];continue;case'3':_0x2e37df['style'][_0x5bb6c5(0x6ca)]=_0x49e2cd?_0x51875d[_0x5bb6c5(0x52a)]:'#f7ee'+'f5';continue;case'4':_0x2e37df['style'][_0x5bb6c5(0x2ac)+_0x5bb6c5(0x4d6)]=_0x49e2cd?_0x494d48:_0x5bb6c5(0x259)+'paren'+'t';continue;}break;}}if(_0x46efe7)try{_0x46efe7[_0x5bb6c5(0x89d)+_0x5bb6c5(0x4ea)+'t']=_0x51875d[_0x5bb6c5(0x841)](_0x121c0c,_0xdbbdbc);}catch(_0x1423c6){'vgBYd'===_0x51875d['lDhGX']?_0x432a08[_0x5bb6c5(0xb4e)+_0x5bb6c5(0x29f)][_0x5bb6c5(0x7d6)](_0x5bb6c5(0x91f)+'w.Uni'+_0x5bb6c5(0x512)+_0x5bb6c5(0x31a)+_0x5bb6c5(0x59e)+'ueWra'+_0x5bb6c5(0x5b3)+_0x5bb6c5(0x378)+_0x5bb6c5(0x248)+_0x5bb6c5(0x119)+_0x5bb6c5(0x82a)+'\x20is\x20r'+_0x5bb6c5(0x4ff)+_0x5bb6c5(0x69a)+'nd.'):_0x46efe7['textC'+_0x5bb6c5(0x4ea)+'t']=JSON[_0x5bb6c5(0x708)+_0x5bb6c5(0x57f)](_0xdbbdbc,null,-0x15f+0x6*-0x5bf+-0x23da*-0x1);}console[_0x5bb6c5(0x37a)]('%c[sa'+'kura]'+_0x5bb6c5(0x33e)+_0x5bb6c5(0x7a1)+'\x20repo'+'rt','color'+':'+_0x494d48+_0x51875d['KRVpI'],_0xdbbdbc),console['log'](_0x51875d[_0x5bb6c5(0x83d)](_0x51875d[_0x5bb6c5(0x904)](_0x572cf5+'\x0a'+JSON[_0x5bb6c5(0x708)+_0x5bb6c5(0x57f)](_0xdbbdbc,null,0x2dc+0x1c84+-0x1*0x1f5f),'\x0a'),_0x515444));}};return _0x57e25d['datas'+'et'][_0x26c736(0x3f6)]='1',_0x57e25d[_0x26c736(0x3f6)]=_0x33577b,_0x33577b;}function _0x121c0c(_0x5389af){var _0x10050a=_0x6937dd,_0x26bca7={'lmSCF':_0x5b43bc['isITL'],'YuVWi':'Speed'+_0x10050a(0x690),'HzRCs':_0x10050a(0x259)+'paren'+'t','Wclsn':_0x10050a(0x7bc)+'1b','IlfUZ':_0x5b43bc['QXIkO'],'aZFYK':'insta'+_0x10050a(0x1fe)+_0x10050a(0x493)+_0x10050a(0xadd)+_0x10050a(0xb51)+'ory'};if(_0x5b43bc['DBTRT']!==_0x5b43bc[_0x10050a(0x23d)])_0x3f5759['sp'][_0x10050a(0x89d)+'onten'+'t']=_0x2fe9d5['on']?_0x26bca7['lmSCF']:_0x26bca7[_0x10050a(0x8d7)],_0x1e4f3d['sp']['style'][_0x10050a(0x2ac)+_0x10050a(0x4d6)]=_0x38042f['on']?_0xb617b9:_0x26bca7[_0x10050a(0x6aa)],_0x37beba['sp']['style'][_0x10050a(0x6ca)]=_0x49ea84['on']?_0x26bca7[_0x10050a(0x855)]:_0x26bca7['IlfUZ'];else{var _0x5e18d5=[];_0x5e18d5[_0x10050a(0x7d6)](_0x5b43bc[_0x10050a(0x8d8)](_0x5b43bc['nYxcQ'](_0x10050a(0x645)+'\x20\x20\x20\x20'+(_0x5389af[_0x10050a(0x832)]||'?'),_0x5b43bc['WxPOM']),Math[_0x10050a(0x4d6)]((_0x5389af[_0x10050a(0x617)+_0x10050a(0x416)]||0x71*-0x3c+0x215f+-0x2b*0x29)/(-0x20ed+-0xbc7+0x309c)))+'s)'),_0x5e18d5['push'](_0x5b43bc[_0x10050a(0x96c)](_0x5b43bc['hJHJh']+(_0x5389af[_0x10050a(0x73b)]?_0x5b43bc['szAGG']:'no')+_0x5b43bc[_0x10050a(0x9fe)]+(_0x5389af[_0x10050a(0x658)+_0x10050a(0x1f0)+_0x10050a(0x56a)]?_0x10050a(0x13a):'no'),_0x5b43bc[_0x10050a(0x87e)])+(_0x5389af['typeC'+'ount']!=null?_0x5389af['typeC'+_0x10050a(0xc4)]:'?')),_0x5e18d5[_0x10050a(0x7d6)](_0x5b43bc['lBUrC'](_0x5b43bc[_0x10050a(0x319)](_0x10050a(0x3ec)+_0x10050a(0xb18)+_0x5389af[_0x10050a(0x3ec)+_0x10050a(0x9a9)+'ed'],'/'),_0x5389af['hooks'+'Total'])+(_0x10050a(0x5f7)+_0x10050a(0x6a6))),_0x5e18d5[_0x10050a(0x7d6)]('');var _0x58a7e3=_0x5389af[_0x10050a(0x981)+_0x10050a(0x14e)]||{},_0x11ac4c=Object[_0x10050a(0x6eb)](_0x58a7e3);!_0x11ac4c[_0x10050a(0x76e)+'h']&&(_0x5e18d5[_0x10050a(0x7d6)](_0x5b43bc[_0x10050a(0x557)]),_0x5e18d5[_0x10050a(0x7d6)](''),_0x5e18d5[_0x10050a(0x7d6)](_0x5b43bc['EAWCL']),_0x5e18d5[_0x10050a(0x7d6)]('no\x20Up'+_0x10050a(0x1eb)+_0x10050a(0x337)+'et,\x20o'+_0x10050a(0x368)+'\x20sign'+'ature'+_0x10050a(0x83f)+_0x10050a(0x227)+_0x10050a(0x611)));for(var _0xc7d606=-0x279+0xd8c+-0x3b1*0x3;_0x5b43bc[_0x10050a(0x3cf)](_0xc7d606,_0x11ac4c[_0x10050a(0x76e)+'h']);_0xc7d606++){var _0x3c1fa2=_0x11ac4c[_0xc7d606];_0x5e18d5[_0x10050a(0x7d6)](_0x5b43bc['ezXct'](_0x5b43bc[_0x10050a(0x927)](_0x3c1fa2,_0x5b43bc[_0x10050a(0x237)]),_0x58a7e3[_0x3c1fa2]));}_0x5e18d5[_0x10050a(0x7d6)]('');var _0x406141=_0x5389af['surve'+'y']||{},_0x22fc09=Object[_0x10050a(0x6eb)](_0x406141);for(var _0x22a8cd=0xb9*0x34+0x9c*0x26+-0x3cbc;_0x22a8cd<_0x22fc09[_0x10050a(0x76e)+'h'];_0x22a8cd++){if(_0x5b43bc['uqyPJ']==='FUKty'){var _0x3b2449=_0x22fc09[_0x22a8cd],_0x4d6f19=_0x406141[_0x3b2449];if(!_0x4d6f19||!_0x4d6f19[_0x10050a(0x76e)+'h'])continue;_0x5e18d5[_0x10050a(0x7d6)](_0x5b43bc[_0x10050a(0xa1c)](_0x5b43bc['nYxcQ'](_0x5b43bc[_0x10050a(0x19f)],_0x3b2449),'\x20')+new Array(Math['max'](0x1*-0x94d+-0x107d+0x19cb,_0x5b43bc['xlphD'](0x18c2+-0x3b*0x3d+-0x1*0xa91,_0x3b2449[_0x10050a(0x76e)+'h'])))[_0x10050a(0x896)]('─')),_0x5e18d5[_0x10050a(0x7d6)](_0x5b43bc['hszce']);for(var _0x5c0b92=-0x2*-0x17+0x2375+-0x3*0xbe1;_0x5b43bc['XfsQz'](_0x5c0b92,_0x4d6f19['lengt'+'h']);_0x5c0b92++){if(_0x5b43bc[_0x10050a(0xa8c)](_0x10050a(0xa8e),_0x5b43bc[_0x10050a(0x53c)])){var _0x123e58=_0x4d6f19[_0x5c0b92],_0x1b2a0f=typeof _0x123e58['v']==='numbe'+'r'?_0x5b43bc[_0x10050a(0x9a0)](Math['round'](_0x123e58['v']*(0x777*0x1+0x1e00+-0x218f)),-0x2b*-0x2e+-0x52*0x6b+0x1e74*0x1):_0x123e58['v'];_0x5e18d5[_0x10050a(0x7d6)](_0x5b43bc[_0x10050a(0xd4)](_0x5b43bc[_0x10050a(0x96c)](_0x5b43bc[_0x10050a(0x96c)](_0x5b43bc['nepBY']('\x20\x20',_0x5b43bc[_0x10050a(0x93a)]('0x',_0x123e58['o']['toStr'+'ing'](0x2*0xfda+-0x65b*0x1+-0x1949*0x1))[_0x10050a(0x8c6)+'d'](0x3f5*-0x3+0x102a+-0x443)),'\x20')+_0x123e58['k'][_0x10050a(0x8c6)+'d'](0xa*-0x3a9+-0x71e*0x1+-0x2bc3*-0x1)+'\x20',_0x5b43bc[_0x10050a(0x934)](String,_0x1b2a0f)[_0x10050a(0x8c6)+'d'](-0x101*-0x19+-0xf91*0x1+-0x18*0x65))+'\x20',_0x123e58['raw']||''));}else return _0x5b12df[_0x10050a(0x42d)+'e']=_0xbb2838[_0x10050a(0x42d)+'e']||_0x26bca7[_0x10050a(0x417)],new _0x4ad32d(_0x55b4d0[_0x10050a(0x2eb)+'r']);}_0x5e18d5[_0x10050a(0x7d6)]('');}else return'0x'+(_0x32864a['o']<0x29d*-0x3+-0x16d6+0x1ead*0x1?'?':_0x13538b['o'][_0x10050a(0x9b0)+_0x10050a(0xa36)](0x6de+0xfce+-0x1*0x169c))+'\x20('+_0x5338c6[_0x10050a(0x29e)]+')';}if(_0x5389af['warni'+'ngs']&&_0x5389af['warni'+'ngs'][_0x10050a(0x76e)+'h']){if(_0x10050a(0x898)==='oeNcV')_0xb35799['style'][_0x10050a(0x8b9)+'ty']='1';else{_0x5e18d5[_0x10050a(0x7d6)]('warni'+_0x10050a(0x29f));for(var _0x3c1d40=-0x5ce+-0x1250+-0x1b9*-0xe;_0x3c1d40<_0x5389af[_0x10050a(0xb4e)+'ngs']['lengt'+'h'];_0x3c1d40++)_0x5e18d5[_0x10050a(0x7d6)](_0x5b43bc['Zqbxl'](_0x5b43bc[_0x10050a(0x630)],_0x5389af['warni'+_0x10050a(0x29f)][_0x3c1d40]));}}return _0x5e18d5['join']('\x0a');}}window['addEv'+_0x6937dd(0x6cf)+'stene'+'r']('messa'+'ge',function(_0x25a3c1){var _0x21155d=_0x6937dd,_0x3bdd32={'QbSzr':function(_0x39d197,_0x1564b1){return _0x39d197/_0x1564b1;},'fkaYr':function(_0x4ca7d0,_0x580258){return _0x5b43bc['VFUjc'](_0x4ca7d0,_0x580258);}},_0x27b2aa=_0x25a3c1['data'];if(!_0x27b2aa||_0x27b2aa[_0x21155d(0x9fc)+_0x21155d(0x7b7)]!==_0x5df584)return;try{if(_0x5b43bc['EMgyv']!==_0x21155d(0x4c1)){if(_0x5b43bc[_0x21155d(0x41d)](_0x27b2aa['kind'],'hello')){_0x303429()[_0x21155d(0x3ac)]({'host':_0x27b2aa[_0x21155d(0x832)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x5b43bc[_0x21155d(0xb4a)](_0x27b2aa[_0x21155d(0x5fc)],_0x21155d(0x7ea)+'t'))_0x303429()['set'](_0x27b2aa[_0x21155d(0x7ea)+'t']);}else{var _0x51d630=_0x31a6aa[_0x3be150][_0x21155d(0xa14)+'et']['k'],_0x470d39='';if(_0x51d630==='VERSI'+'ON')_0x470d39=_0x274b9a?_0x456300['versi'+'on']:'-';else{if(_0x51d630===_0x21155d(0x2d5)+'ed\x20/\x20'+_0x21155d(0x1c1)+'tered')_0x470d39=_0x12d057?_0x5b43bc[_0x21155d(0x734)](_0x5b43bc[_0x21155d(0x57b)](_0x41d240['hooks'+_0x21155d(0x9a9)+'ed'],_0x5b43bc['HilSu']),_0x5a5351[_0x21155d(0x3ec)+_0x21155d(0xad9)+_0x21155d(0x575)+_0x21155d(0xa4d)]):'-';else{if(_0x5b43bc[_0x21155d(0x6b5)](_0x51d630,'from\x20'+'insta'+'ntiat'+'e()'))_0x470d39=_0x221528&&_0x4bd7f6['wasmM'+_0x21155d(0x8a8)]&&_0x4ab804[_0x21155d(0x288)+'emory'][_0x21155d(0x6ab)+_0x21155d(0x3d7)]?_0x5b43bc['XHmFD'](_0x29953f[_0x21155d(0x4d6)](_0x43635c[_0x21155d(0x288)+_0x21155d(0x8a8)][_0x21155d(0x3cb)]/(-0x9807e*-0x1+0xb8035+-0x31*0x1a23)),_0x5b43bc['YAdrE'])+_0x4a1deb[_0x21155d(0x288)+_0x21155d(0x8a8)]['atMs']+'ms':'-';else{if(_0x51d630===_0x21155d(0x684)+_0x21155d(0x9ca)+_0x21155d(0x6e5)+'nc')_0x470d39=_0x19937d&&_0x16a3ff[_0x21155d(0x141)]?_0x5cad63(_0x2a3373[_0x21155d(0x141)][_0x21155d(0x3b1)+_0x21155d(0x815)+'t']):'-';else{if(_0x5b43bc['DeROX'](_0x51d630,_0x21155d(0x812)+_0x21155d(0x8a0)+'ut\x20yo'+'u'))_0x470d39=_0x5b990c&&_0x2742c8['esp']?_0x5b43bc[_0x21155d(0x934)](_0x34fd70,_0x2b9eb7['esp']['enemy'+_0x21155d(0xae5)]):'-';else{if(_0x51d630===_0x21155d(0x897)+_0x21155d(0x845)+'ve\x20ma'+'nager')_0x470d39=_0x2944b5&&_0x3648ef['esp']&&_0x1b6eec[_0x21155d(0x141)]['camer'+'a']?_0x1b8017[_0x21155d(0x141)][_0x21155d(0x261)+'a']+'\x20('+_0x2f2a80[_0x21155d(0x141)][_0x21155d(0x261)+_0x21155d(0x9a6)]+')':'-';else{if(_0x51d630===_0x21155d(0x8f4)+_0x21155d(0x5d7)+_0x21155d(0x50c)+_0x21155d(0xa07))_0x470d39=_0x2a06e3&&_0x11f60c[_0x21155d(0x723)]&&_0x32b09c[_0x21155d(0x723)][_0x21155d(0x217)]?_0x2c3f7d[_0x21155d(0x723)][_0x21155d(0x217)][_0x21155d(0x6be)](function(_0xaece76){var _0x47ac12=_0x21155d;return _0x3bdd32[_0x47ac12(0x60f)](_0x393039['round'](_0x3bdd32['fkaYr'](_0xaece76,-0xb25+-0x6fb*-0x1+0xb*0x6a)),0x1*-0xd21+-0x23f0+0x3175);})['join']('\x20\x20'):'-';else{if(_0x5b43bc[_0x21155d(0x258)](_0x51d630,_0x21155d(0x338)+'8'))_0x470d39=_0x1003bd&&_0x1e691c[_0x21155d(0x723)]&&_0x4c273d['local']['eye']?_0x407939[_0x21155d(0x723)]['eye'][_0x21155d(0x6be)](function(_0x34b7b6){var _0x3b9faa=_0x21155d;return _0x5946b0[_0x3b9faa(0x4d6)](_0x34b7b6*(-0x221e+-0x1*0x16d7+0x3959))/(0xc77*0x1+0x1d62+0x2975*-0x1);})[_0x21155d(0x896)]('\x20\x20'):'-';else{var _0x423133=_0x51d630[_0x21155d(0x8ec)]('+');_0x470d39=_0x1a0602(_0x1e92c3,_0x423133[0x77+-0x8d*-0x12+-0x1*0xa61]['index'+'Of'](_0x21155d(0x9f2)+'h')===-0x1*-0xfb+-0x5c*-0x5a+-0x2153?_0x5b43bc['QlFqJ']:_0x5b43bc['FrCjE'],_0x5b43bc[_0x21155d(0x275)](_0x163fad,_0x423133[-0x12b9+-0xe22+0x20dc],-0x2171*0x1+0xa2b+0xce*0x1d));}}}}}}}}if(_0x5b43bc['FDqBa'](_0x470d39,_0x18b844[_0x2d60df][_0x21155d(0x89d)+_0x21155d(0x4ea)+'t']))_0x4b1789[_0x105c4e]['textC'+_0x21155d(0x4ea)+'t']=_0x470d39;}}catch(_0xbb84dc){if(_0x5b43bc[_0x21155d(0x1bd)]!=='iriiv')return _0xbb9803['span'];else console[_0x21155d(0x639)](_0x21155d(0x6c1)+_0x21155d(0x8e3)+_0x21155d(0x528)+'l\x20upd'+_0x21155d(0x68b)+_0x21155d(0x9f1),'color'+':'+_0x494d48,_0xbb84dc);}});function _0x3d2c69(){var _0x45873a=_0x6937dd,_0x221bef={'iXsDP':function(_0x1d402e,_0x2d3d86,_0x11af05){return _0x1d402e(_0x2d3d86,_0x11af05);}};if(_0x5b43bc[_0x45873a(0x850)]===_0x5b43bc[_0x45873a(0x850)])_0x198017(!![]);else{var _0x45c4d1=_0x221bef[_0x45873a(0x665)](_0x1c5440,_0x4b411d+_0x221bef[_0x45873a(0x665)](_0x57cb8d,_0x34febe[_0xb67a74][-0x19*-0x13f+-0x1e0e+-0x119*0x1],0x5*-0x6f1+-0x9ba+-0x3*-0xed5),_0x45873a(0xc5));if(_0x45c4d1!==_0x494757)_0x12c2ea[_0x45873a(0x615)][_0x5281f7[_0x52fe96][0xa42+-0xf6b+0x52a]]=_0x45c4d1;}}if(document['body'])_0x5b43bc['ejHqK'](_0x3d2c69);else document[_0x6937dd(0x66b)+'entLi'+'stene'+'r'](_0x6937dd(0x902)+_0x6937dd(0x1e2)+_0x6937dd(0xaf2)+'d',_0x3d2c69,{'once':!![]});return;}window['__SAK'+_0x6937dd(0x722)+'W__']=window['__SAK'+'URA_S'+_0x6937dd(0x813)]||{'at':Date['now']()};function _0x16bd7a(_0x40c5ea,_0x55bfe){var _0x340a7f=_0x6937dd,_0x4bcf0e={'__sakura':_0x5df584,'kind':_0x40c5ea};if(_0x55bfe){for(var _0x18305c in _0x55bfe)_0x4bcf0e[_0x18305c]=_0x55bfe[_0x18305c];}try{if(window['paren'+'t']&&window['paren'+'t']!==window)window['paren'+'t']['postM'+'essag'+'e'](_0x4bcf0e,'*');}catch(_0x9986b4){}try{if(_0x5b43bc[_0x340a7f(0x469)](_0x5b43bc[_0x340a7f(0xb2a)],_0x340a7f(0x19a))){if(window['top']&&window[_0x340a7f(0x11d)]!==window)window['top'][_0x340a7f(0x4d9)+_0x340a7f(0xc3)+'e'](_0x4bcf0e,'*');}else return _0x500284[_0x340a7f(0x4d6)](_0x1209d8*(-0x441*-0x7+0x40*-0x86+-0x1b*-0x27))/(-0xd*0x1e5+-0xcf0+0x29*0xed);}catch(_0x4f04c0){}}console[_0x6937dd(0x37a)](_0x5b43bc[_0x6937dd(0x983)](_0x5b43bc[_0x6937dd(0x93b)],_0xe7e7c6),_0x5b43bc[_0x6937dd(0x46d)](_0x6937dd(0x6ca)+':',_0x494d48)+(_0x6937dd(0x62b)+'-weig'+_0x6937dd(0x87a)+_0x6937dd(0x4b9)+'t-siz'+'e:14p'+'x'),{'host':_0x5d1960,'href':location['href'],'version':_0xe7e7c6}),_0x5b43bc[_0x6937dd(0x175)](_0x16bd7a,_0x5b43bc['huULN'],{'host':_0x5d1960,'role':_0x17a9ba});var _0x3d7025=window['__SAK'+'URA_S'+_0x6937dd(0x813)]&&window['__SAK'+'URA_S'+_0x6937dd(0x813)]['at']||Date[_0x6937dd(0xa8f)]();window[_0x6937dd(0x66b)+_0x6937dd(0x6cf)+_0x6937dd(0x761)+'r'](_0x6937dd(0x29b)+'ge',function(_0xd2c305){var _0x204007=_0x6937dd;if(_0x5b43bc['bhWCk'](_0x204007(0x571),_0x204007(0x571))){if(!_0x5e9f99[_0x7d5ab9])_0x136427[_0x2b4e2b]={'ptr':_0x3c0727,'kind':_0xf2ef67,'firstSeen':_0x22b038['now'](),'hits':0x0};_0x47acd3[_0x4edb55]['hits']++;}else try{var _0x2314de=_0xd2c305&&_0xd2c305[_0x204007(0x335)];if(!_0x2314de||_0x5b43bc[_0x204007(0xae3)](_0x2314de['__sak'+_0x204007(0x7b7)],_0x5df584)||_0x5b43bc[_0x204007(0x469)](_0x2314de[_0x204007(0x5fc)],_0x5b43bc['zdTCq']))return;_0x5b43bc[_0x204007(0x275)](_0x2dafd7,_0x2314de['cmd'],_0x2314de[_0x204007(0x3bb)]);}catch(_0x2568bc){}});try{var _0x1cf58a=new BroadcastChannel(_0x6937dd(0xac)+'a-sw');_0x1cf58a[_0x6937dd(0x216)+_0x6937dd(0xad5)]=function(_0x28c7a9){var _0xabd21a=_0x6937dd;if('NkphE'===_0xabd21a(0x77b)){var _0x2afbd0=_0x28c7a9[_0xabd21a(0x335)];if(_0x2afbd0&&_0x2afbd0[_0xabd21a(0x9fc)+_0xabd21a(0x7b7)]===_0x5df584&&_0x5b43bc[_0xabd21a(0x5c8)](_0x2afbd0[_0xabd21a(0x5fc)],_0xabd21a(0x67b)))_0x5b43bc['CfJqW'](_0x2dafd7,_0x2afbd0['cmd'],_0x2afbd0['arg']);}else try{_0x11e05f[_0xabd21a(0x62f)+'em'](_0x4efea4,_0x40a42d[_0xabd21a(0x708)+_0xabd21a(0x57f)](_0x156b62[_0xabd21a(0x2a7)]));}catch(_0x573270){}};}catch(_0x11be2f){}var _0x3a917f=[];(function _0x3758a0(){var _0x2a8f44=_0x6937dd,_0x201da5={'pDgjx':function(_0x16ed4e,_0x1e283a){return _0x16ed4e===_0x1e283a;},'ozktK':_0x5b43bc[_0x2a8f44(0xa0a)],'aarQZ':function(_0x24112b,_0x5236cf){return _0x24112b!==_0x5236cf;},'XKxOS':'rwdLB'},_0x87e5dc=['log',_0x5b43bc['cdjXE'],'error','info',_0x2a8f44(0xa04)];for(var _0x95ccba=-0x1*0xa94+-0x11b1*0x2+0x2df6;_0x95ccba<_0x87e5dc[_0x2a8f44(0x76e)+'h'];_0x95ccba++){(function(_0xef94bf){var _0x382fd0=_0x2a8f44,_0x4212f={'LmSVq':function(_0x376085,_0x308248){var _0x1b674e=_0x5c65;return _0x5b43bc[_0x1b674e(0x4aa)](_0x376085,_0x308248);},'wJjvy':function(_0xe9c7fa,_0x38013e){var _0xb43260=_0x5c65;return _0x5b43bc[_0xb43260(0x932)](_0xe9c7fa,_0x38013e);},'pdkyv':_0x5b43bc[_0x382fd0(0x9c9)],'ocpFX':function(_0x18d601,_0x4e39c9){var _0x503d96=_0x382fd0;return _0x5b43bc[_0x503d96(0xa1c)](_0x18d601,_0x4e39c9);}},_0x27e42c=console[_0xef94bf];if(typeof _0x27e42c!=='funct'+'ion')return;console[_0xef94bf]=function(){var _0x2626d4=_0x382fd0;try{var _0x521e06='';for(var _0x3aeb7e=-0xdd2+-0x1f9a+0x2d6c;_0x3aeb7e<arguments[_0x2626d4(0x76e)+'h'];_0x3aeb7e++){if(_0x2626d4(0x29a)===_0x2626d4(0x29a)){var _0x1c4e66=arguments[_0x3aeb7e];if(_0x201da5['pDgjx'](typeof _0x1c4e66,_0x201da5[_0x2626d4(0x610)]))_0x521e06+=_0x1c4e66;else{if(_0x1c4e66&&_0x1c4e66[_0x2626d4(0x29b)+'ge'])_0x521e06+=_0x1c4e66['messa'+'ge'];}}else try{_0x27ccb3=_0x6b1743['keys'](_0x57d500)['slice'](0x274*0xd+0x3*0x51d+-0x2f3b,0x58c+-0x1*0x1b2d+-0x1*-0x15b9);}catch(_0xcdfb46){}}if(_0x201da5['aarQZ'](_0x521e06[_0x2626d4(0x8ac)+'Of'](_0x572cf5),-(0x1d9a+0x102f*-0x1+-0xd6a)))return _0x27e42c['apply'](console,arguments);if(_0x521e06[_0x2626d4(0x8ac)+'Of'](_0x2626d4(0x7c3)+_0x2626d4(0x365)+_0x2626d4(0x1a6))!==-(0x33f*0x9+-0x14d7+-0x85f*0x1)){if(_0x201da5['pDgjx'](_0x201da5[_0x2626d4(0xa46)],_0x201da5['XKxOS'])){var _0x2a0b6f=_0x521e06[_0x2626d4(0x50d)](-0x24*0x45+-0x1bf6+0x25aa,0x14e*-0x5+-0x417*0x2+0xfe0);if(_0x3a917f['index'+'Of'](_0x2a0b6f)===-(-0x1*-0xab2+-0x7*-0xa7+-0xf42)&&_0x3a917f['lengt'+'h']<0x1*-0x256b+-0x1*0x1eb+-0x13c9*-0x2)_0x3a917f['push'](_0x2a0b6f);}else _0x321e9c[_0x2626d4(0xb4e)+_0x2626d4(0x29f)][_0x2626d4(0x7d6)](_0x4212f['LmSVq'](_0x4212f['wJjvy'](_0x4212f['pdkyv'],_0x4a6fe9[_0x2626d4(0x6eb)](_0x263c80['insta'+_0x2626d4(0x14e)])[_0x2626d4(0x76e)+'h'])+(_0x2626d4(0xa4)+_0x2626d4(0x268)+'\x20but\x20'+_0x2626d4(0x147)+_0x2626d4(0x198)+_0x2626d4(0x124)),_0x2034a3[_0x2626d4(0x8b7)+_0x2626d4(0x1cc)]?_0x4212f['ocpFX']('Reaso'+'n:\x20',_0x5afe80['lastE'+'rror']):'No\x20re'+'ad\x20fa'+_0x2626d4(0x65f)+_0x2626d4(0x4c0)+'very\x20'+'offse'+'t\x20was'+_0x2626d4(0x15b)+'ped\x20b'+_0x2626d4(0x810)+'e.'));}}catch(_0x5f54e6){}return _0x27e42c['apply'](console,arguments);};}(_0x87e5dc[_0x95ccba]));}}());var _0x5ba477={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x32d73b=null,_0x4908fe=null,_0x5ef825=-(-0x79d*-0x3+0x29*-0x7+-0x147*0x11),_0x1562ea=null;function _0x35f26f(_0x8e2c32){var _0x1de5fd=_0x6937dd,_0x1376ce={'QRijM':function(_0xdb33c0,_0x4773cd){return _0x5b43bc['BbMBL'](_0xdb33c0,_0x4773cd);},'iNzMq':_0x5b43bc[_0x1de5fd(0x56e)],'IqhdY':'plugi'+_0x1de5fd(0x533)+_0x1de5fd(0x20d)+_0x1de5fd(0x510)+'e','rocit':'.Modu'+'le'};if(_0x1de5fd(0x888)===_0x1de5fd(0x9e1)){var _0x76e06f=_0x4d340f[_0x1de5fd(0xb12)+_0x1de5fd(0x554)];if(_0x1376ce['QRijM'](typeof _0x76e06f[_0x1de5fd(0xe6)+_0x1de5fd(0x743)+'e'],_0x1376ce[_0x1de5fd(0x323)])){var _0x405828=_0x76e06f['resol'+'veGam'+'e']();if(_0x405828)return _0xe2b9c5[_0x1de5fd(0x42d)+'e']=_0x1de5fd(0x401)+_0x1de5fd(0x533)+_0x1de5fd(0x20d)+_0x1de5fd(0xa5f)+_0x1de5fd(0x47f)+'me()',_0x405828;}if(_0x76e06f[_0x1de5fd(0x1df)])return _0x412ba7['sourc'+'e']=_0x1376ce[_0x1de5fd(0xb17)],_0x76e06f['_game'];}else try{if(!_0x8e2c32)return;var _0x533bed=_0x8e2c32[_0x1de5fd(0x981)+_0x1de5fd(0x834)]?_0x8e2c32['insta'+_0x1de5fd(0x834)][_0x1de5fd(0x5eb)+'ts']:_0x8e2c32[_0x1de5fd(0x5eb)+'ts']||null;if(!_0x533bed)return;if(!_0x1562ea){if(_0x1de5fd(0x9eb)!==_0x1de5fd(0x9eb))return _0x13f0c9[_0x1de5fd(0x42d)+'e']=_0x1de5fd(0x91f)+'w.'+_0xe2b281[_0x3eb9b6]+_0x1376ce[_0x1de5fd(0x472)],_0x35d9a8;else try{_0x1562ea=Object[_0x1de5fd(0x6eb)](_0x533bed)[_0x1de5fd(0x50d)](-0x1e59+-0x7*0x472+0x3d77,0xdf7+-0x10fc+0x1*0x31d);}catch(_0x2f8c7b){}}var _0x30da90=_0x533bed[_0x1de5fd(0x593)+'y'];_0x30da90&&_0x30da90[_0x1de5fd(0x2eb)+'r']&&_0x5b43bc[_0x1de5fd(0xa61)](_0x30da90[_0x1de5fd(0x2eb)+'r'][_0x1de5fd(0x6a2)+_0x1de5fd(0x348)],-0x13*0x77+0x137+0x79e)&&(_0x4908fe=_0x30da90,_0x5ef825=Date[_0x1de5fd(0xa8f)]()-_0x3d7025);}catch(_0x3a8a4c){}}function _0x4ec71e(){var _0x2a776d=_0x6937dd,_0x289aa7={'szKTr':function(_0x49b99c,_0x2a719c){var _0x54ad98=_0x5c65;return _0x5b43bc[_0x54ad98(0x934)](_0x49b99c,_0x2a719c);},'AZJzW':_0x5b43bc[_0x2a776d(0x511)],'obVPd':_0x5b43bc['eOOuJ']};try{if(_0x5b43bc['HobAH'](typeof WebAssembly,_0x5b43bc[_0x2a776d(0x84b)]))return;var _0x4e914e=[_0x5b43bc[_0x2a776d(0xa1f)],'insta'+'ntiat'+_0x2a776d(0x792)+_0x2a776d(0x453)];for(var _0x469bde=0x6bb*-0x2+-0x1*0xcd1+0x1a47;_0x469bde<_0x4e914e[_0x2a776d(0x76e)+'h'];_0x469bde++){if(_0x2a776d(0x1f6)!=='gYTBF'){_0x4132d5[_0x2a776d(0x324)+_0x2a776d(0xa24)+'ault'](),_0x2c2c75(!_0x2fb410[_0x2a776d(0x2ec)]);return;}else(function(_0x3f60c3){var _0x5f09fd=_0x2a776d,_0x1cc280={'eyoYI':function(_0x5a50a4,_0x3f85cb){var _0x384eb1=_0x5c65;return _0x289aa7[_0x384eb1(0x804)](_0x5a50a4,_0x3f85cb);},'NTfxb':function(_0x57d8e5,_0x541a6a){return _0x57d8e5!==_0x541a6a;},'YdEEp':_0x289aa7['AZJzW'],'TEQCR':'LFmBp'},_0x271b45=WebAssembly[_0x3f60c3];if(typeof _0x271b45!==_0x289aa7[_0x5f09fd(0x872)]||_0x271b45['__sak'+_0x5f09fd(0x35a)+_0x5f09fd(0x86f)+'ap'])return;var _0x16fc41=function(){var _0x48cd71=_0x5f09fd,_0x3a3b25={'rLjhH':function(_0x40bfa8,_0x197808){return _0x1cc280['eyoYI'](_0x40bfa8,_0x197808);}};if(_0x1cc280['NTfxb'](_0x1cc280[_0x48cd71(0x19b)],_0x1cc280['TEQCR'])){var _0x568539=_0x271b45['apply'](this,arguments);try{if(_0x568539&&typeof _0x568539[_0x48cd71(0x36b)]===_0x48cd71(0x6cb)+_0x48cd71(0xa5b))_0x568539['then'](_0x35f26f,function(){});else _0x35f26f(_0x568539);}catch(_0x191981){}return _0x568539;}else _0x24110c(_0x48cd71(0x1ef),{'on':_0x17850e,'factor':_0x3a3b25['rLjhH'](_0x2f09b8,_0x303b40['value'])||0x9*-0x22b+0x75e+0x26e*0x5});};_0x16fc41[_0x5f09fd(0x9fc)+_0x5f09fd(0x35a)+_0x5f09fd(0x86f)+'ap']=!![];try{Object['defin'+'eProp'+'erty'](_0x16fc41,'name',{'value':_0x271b45['name'],'configurable':!![]});}catch(_0x3bf384){}WebAssembly[_0x3f60c3]=_0x16fc41;}(_0x4e914e[_0x469bde]));}}catch(_0x4be089){}}var _0x4ff3e2=null,_0x28b72e=null,_0x4a5663={},_0x5d137a=[],_0x26debb=[],_0x4ca4e8=[{'type':_0x5b43bc[_0x6937dd(0x85a)],'keep':!![]},{'type':_0x5b43bc['QlFqJ'],'keep':!![]},{'type':'Weapo'+_0x6937dd(0x7fd)+_0x6937dd(0x81e),'keep':![]},{'type':_0x6937dd(0x8ab)+_0x6937dd(0x9b2)+'nager','keep':!![]},{'type':_0x6937dd(0x351)+'meMan'+'ager','keep':!![]},{'type':_0x5b43bc[_0x6937dd(0x89b)],'keep':!![],'many':!![]},{'type':_0x6937dd(0xa48)+_0x6937dd(0x2a4)+_0x6937dd(0x776)+_0x6937dd(0x3c3)+'ons','keep':!![],'many':!![]},{'type':'NPC_C'+'otrol'+'ler','keep':!![],'many':!![]},{'type':_0x6937dd(0x8cd)+_0x6937dd(0x40a),'keep':!![],'many':!![]}],_0x3bef8c=[_0x6937dd(0x13f)+'bly-C'+_0x6937dd(0xac2)+_0x6937dd(0x125),_0x6937dd(0x13f)+_0x6937dd(0x853)+_0x6937dd(0xac2)+_0x6937dd(0x7be)+_0x6937dd(0x44a)+'.dll',_0x6937dd(0x3e2)+_0x6937dd(0x34a)+'ge.De'+_0x6937dd(0x7d4)+'ll',_0x6937dd(0xb07)+'t.dll',_0x5b43bc[_0x6937dd(0x75c)],_0x5b43bc[_0x6937dd(0x5e0)]];(function _0x26fba7(){var _0x1ae83d=_0x6937dd;try{var _0x587fc4=window[_0x1ae83d(0x7c3)+'WebMo'+_0x1ae83d(0x1a6)]&&window[_0x1ae83d(0x7c3)+'WebMo'+'dkit'][_0x1ae83d(0x90e)+'me'];if(!_0x587fc4||_0x5b43bc['bhWCk'](typeof _0x587fc4[_0x1ae83d(0x51a)+_0x1ae83d(0x75e)+'in'],'funct'+_0x1ae83d(0xa5b))){if(_0x1ae83d(0x548)!==_0x5b43bc[_0x1ae83d(0x67a)]){_0x5ba477['error']=_0x5b43bc[_0x1ae83d(0x686)];return;}else{var _0x372b9e=_0x5b43bc['qlEsi'][_0x1ae83d(0x8ec)]('|'),_0x373f1d=0x2613+0xaa8+0x9bf*-0x5;while(!![]){switch(_0x372b9e[_0x373f1d++]){case'0':if(_0x1d1c02){var _0x1f47d1=_0x455f45(_0x1d1c02[_0x1ae83d(0x849)],[_0x1d1c02[_0x1ae83d(0x849)][0x2*-0x116c+-0x3c1*0x9+0x44a1],_0x1d1c02[_0x1ae83d(0x849)][0x1*-0x101d+-0x26cf*0x1+0x36ed],_0x1d1c02[_0x1ae83d(0x849)][0x1349+0xcca+-0x2011]+(-0x7+-0x2377+0x237f)],0xf3e*0x1+-0x15ce+0x43*0x28,-0x191c+-0x1305*-0x1+0x9ff);_0x1f47d1&&(_0xf076eb=_0x5b43bc[_0x1ae83d(0x2c0)](_0x1f47d1['x'],-0x160+-0x246c+-0x14da*-0x2),_0x148b08=_0x5b43bc[_0x1ae83d(0x935)](_0x1f47d1['y'],0x23a*-0x2+-0x7ac+0x1008));}continue;case'1':var _0x166edb=_0x277d71();continue;case'2':var _0xf076eb=null,_0x148b08=null;continue;case'3':return{'identified':_0x17c5bf[_0x1ae83d(0x956)+_0x1ae83d(0x458)],'why':_0x4fb51e['why'],'rawPitch':_0xd4acfa['pitch'],'rawYaw':_0x4f74b1['yaw'],'fov':_0x26c891[_0x1ae83d(0x7dd)],'fovSane':_0x4da567[_0x1ae83d(0x7dd)]>=0x1e03*0x1+0x8*0x49b+-0x429f&&_0x5b43bc[_0x1ae83d(0x817)](_0x42195a['fov'],0x16c0+-0x1*0x1f76+-0x2*-0x492),'centreX':_0xf076eb,'centreY':_0x148b08};case'4':var _0x1d1c02=_0x5b43bc[_0x1ae83d(0x64d)](_0xbd30c1);continue;}break;}}}_0x5ba477['attem'+_0x1ae83d(0x948)]=!![],_0x28b72e=_0x587fc4[_0x1ae83d(0x51a)+'ePlug'+'in']({'name':_0x5b43bc[_0x1ae83d(0x2bc)],'version':_0xe7e7c6,'referencedAssemblies':_0x3bef8c[_0x1ae83d(0x50d)]()}),_0x5ba477['ok']=!![];try{var _0x5b6371=window['Unity'+'WebMo'+_0x1ae83d(0x1a6)][_0x1ae83d(0x90e)+'me'];_0x5b6371[_0x1ae83d(0x9fc)+_0x1ae83d(0x44f)+'g']=_0xe7e7c6+':'+Math[_0x1ae83d(0x868)+'m']()[_0x1ae83d(0x9b0)+_0x1ae83d(0xa36)](-0x8e2+0x1d99+-0x1493)['slice'](-0x77c*-0x1+0x2593*-0x1+0x1e19,0x2c+-0x1*-0x1215+-0x1237),_0x32d73b=_0x5b6371['__sak'+'uraTa'+'g'];}catch(_0x14827c){}_0x2cbc08(),_0x5ba477[_0x1ae83d(0x3ec)+'Regis'+'tered']=_0x5d137a[_0x1ae83d(0x76e)+'h'],_0x4ec71e(),_0x5ba477['memor'+_0x1ae83d(0x77e)]=!![];}catch(_0x4435b4){if(_0x1ae83d(0x71f)===_0x5b43bc[_0x1ae83d(0x44e)])return _0x5bc466['facto'+'r'];else _0x5ba477[_0x1ae83d(0x6d6)]=String(_0x4435b4&&_0x4435b4['messa'+'ge']||_0x4435b4);}}());var _0x174b33=new Float32Array(-0x7*-0xdd+0x2*-0xb11+0x338*0x5),_0x4b9ecf=new Int32Array(_0x174b33['buffe'+'r']);function _0x551818(_0x544733){return _0x174b33[-0x736+-0xace*-0x1+-0x398]=_0x544733,_0x4b9ecf[0x1*-0xa75+0xd*-0x123+0x193c];}function _0x2f98ca(_0x45b82a){var _0x3f0b2a=_0x6937dd,_0x358cd5={'tqkFd':function(_0x38598e,_0x181e12){return _0x38598e+_0x181e12;}};return'pMdiw'!=='pMdiw'?(_0x49118b['faile'+'d']++,_0x53488e['lastE'+_0x3f0b2a(0x1cc)]=_0x143716[_0x3f0b2a(0x8b7)+'rror']||_0x3f0b2a(0x1d9)+_0x3f0b2a(0xfd)+_0x358cd5['tqkFd'](_0x2e5245,_0x313da3)['toStr'+_0x3f0b2a(0xa36)](-0x20da+-0x12b2+0x6*0x89a)+(_0x3f0b2a(0xa27)+'\x20heap'+_0x3f0b2a(0x9dd)+'0x')+_0x3d7dfe[_0x3f0b2a(0x6a2)+_0x3f0b2a(0x348)][_0x3f0b2a(0x9b0)+_0x3f0b2a(0xa36)](0x35*-0x61+-0x4*-0x3b3+0x559),null):(_0x4b9ecf[0x63d+-0x37b*-0x3+-0xe*0x131]=_0x45b82a|-0x255+-0xc64+0xeb9*0x1,_0x174b33[0x240a+0x1286*0x2+-0x4916]);}var _0x627300={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x407268(){var _0x2973d=_0x6937dd,_0x917caa={'VjWPo':_0x5b43bc[_0x2973d(0x26b)],'KIvrX':'Sakur'+'a\x20Ski'+_0x2973d(0xc2)+'z\x20-\x20w'+'aitin'+'g\x20for'+_0x2973d(0x930)+'game\x20'+_0x2973d(0x8f3)+_0x2973d(0x736),'DSFLX':function(_0x29e71b,_0x206722){return _0x5b43bc['HdIjJ'](_0x29e71b,_0x206722);},'KVyfH':_0x2973d(0x9e8),'tKjEU':_0x2973d(0x716)+_0x2973d(0xb4)+'uring'+_0x2973d(0xaf9)+'ng\x20at'+_0x2973d(0x3bf)+_0x2973d(0x520)+'start'+'.','WJSJv':_0x5b43bc['uAzQw'],'PBwvX':_0x2973d(0x363)+_0x2973d(0x18c)+_0x2973d(0x785)+'fo*)\x20'+'->\x20vo'+_0x2973d(0x98c)+_0x2973d(0x20c)+'t\x20mat'+_0x2973d(0x93d)+_0x2973d(0x836)+_0x2973d(0x559)};if(_0x5b43bc['DeROX']('dFLGt','dFLGt')){try{if(_0x5b43bc[_0x2973d(0xa8c)](_0x2973d(0x56b),_0x2973d(0x56b)))_0x2739fa(!![]);else{if(_0x28b72e&&_0x28b72e['_runt'+_0x2973d(0x554)]){var _0xd4e4d6=_0x28b72e[_0x2973d(0xb12)+'ime'];if(typeof _0xd4e4d6['resol'+'veGam'+'e']===_0x2973d(0x6cb)+_0x2973d(0xa5b)){var _0x1c4062=_0xd4e4d6[_0x2973d(0xe6)+_0x2973d(0x743)+'e']();if(_0x1c4062)return _0x627300[_0x2973d(0x42d)+'e']=_0x2973d(0x401)+_0x2973d(0x533)+_0x2973d(0x20d)+_0x2973d(0xa5f)+_0x2973d(0x47f)+'me()',_0x1c4062;}if(_0xd4e4d6['_game'])return _0x627300[_0x2973d(0x42d)+'e']=_0x5b43bc['qJftW'],_0xd4e4d6['_game'];}}}catch(_0x11a749){}try{if(_0x2973d(0x9bf)!==_0x5b43bc['wYzGT']){if(!_0xbe54c[_0x2973d(0x513)+_0x2973d(0x420)+'ById']('sakur'+_0x2973d(0x3b0)+_0x2973d(0x739)+'s')){var _0x54de82=_0x32faac[_0x2973d(0x51a)+_0x2973d(0x999)+_0x2973d(0x516)](_0x2973d(0x447));_0x54de82['id']=_0x2973d(0xac)+_0x2973d(0x3b0)+_0x2973d(0x739)+'s',_0x54de82[_0x2973d(0x89d)+_0x2973d(0x4ea)+'t']=_0x2973d(0x72b)+_0x2973d(0x616)+_0x2973d(0x4b7)+_0x2973d(0x93f)+'itial'+'}',(_0x1ef48c['head']||_0xdff474['docum'+_0x2973d(0x1c7)+_0x2973d(0x420)])['appen'+_0x2973d(0xb36)+'d'](_0x54de82);}return _0xfefeef=_0x14137f['creat'+_0x2973d(0x999)+'ent'](_0x2973d(0x51d)),_0x4aa9b0['id']=_0x5b43bc[_0x2973d(0x4ec)],_0x49e254[_0x2973d(0x2f5)][_0x2973d(0x441)+'dChil'+'d'](_0x30f975),_0x421bd4;}else{var _0x1e93fe=window['Unity'+_0x2973d(0x365)+'dkit']&&window['Unity'+_0x2973d(0x365)+_0x2973d(0x1a6)][_0x2973d(0x90e)+'me'];if(_0x1e93fe&&typeof _0x1e93fe[_0x2973d(0xe6)+'veGam'+'e']===_0x5b43bc['eOOuJ']){var _0x59ee11=_0x1e93fe[_0x2973d(0xe6)+'veGam'+'e']();if(_0x59ee11){if('ermOs'!=='ermOs'){if(!_0x49c8ac[_0x2973d(0x6ec)])return;var _0x7e2e2c=_0xe9e15e();_0x4d52d8['petal'][_0x2973d(0x447)][_0x2973d(0x8b9)+'ty']=_0x3d7649['open']?'1':_0x7e2e2c?'.8':_0x917caa[_0x2973d(0x102)],_0x558bd4['petal']['title']=_0x7e2e2c?'Sakur'+'a\x20Ski'+_0x2973d(0xc2)+_0x2973d(0x6c7)+'sert)':_0x917caa[_0x2973d(0x6fe)];}else return _0x627300['sourc'+'e']=_0x5b43bc['FYZCv'],_0x59ee11;}}if(_0x1e93fe&&_0x1e93fe[_0x2973d(0x1df)])return _0x627300['sourc'+'e']=_0x2973d(0x90e)+_0x2973d(0x4da)+'ame',_0x1e93fe;}}catch(_0x1c472d){}try{if(_0x2973d(0x712)!==_0x2973d(0x334)){var _0x214965=window['unity'+_0x2973d(0x28c)+_0x2973d(0x834)]||window[_0x2973d(0x564)+_0x2973d(0x759)]||window['game'];if(_0x214965)return _0x627300[_0x2973d(0x42d)+'e']=_0x5b43bc[_0x2973d(0xaa5)],_0x214965;}else return _0x490da4[_0x2973d(0x42d)+'e']='windo'+_0x2973d(0x414)+_0x2973d(0x529),_0x35b44f;}catch(_0x1812a4){}try{if(typeof game!==_0x5b43bc[_0x2973d(0x84b)]&&game)return _0x627300[_0x2973d(0x42d)+'e']=_0x2973d(0xc1)+'game\x20'+'bindi'+'ng',game;}catch(_0x337520){}try{if(_0x2973d(0x3fc)!==_0x2973d(0x992)){var _0x43db34=Object['keys'](window);for(var _0x23b831=0x2171*-0x1+-0x214a+0x42bb;_0x5b43bc['XfsQz'](_0x23b831,_0x43db34['lengt'+'h'])&&_0x5b43bc[_0x2973d(0x34e)](_0x23b831,-0x52e*0x4+0x17be+-0xae);_0x23b831++){var _0x190739=window[_0x43db34[_0x23b831]];if(_0x190739&&_0x5b43bc[_0x2973d(0x26d)](typeof _0x190739,_0x5b43bc[_0x2973d(0x6a9)])&&_0x190739[_0x2973d(0xab3)+'e']&&_0x190739['Modul'+'e'][_0x2973d(0xad0)+'8']&&_0x190739[_0x2973d(0xab3)+'e'][_0x2973d(0xad0)+'8']['buffe'+'r'])return _0x627300['sourc'+'e']=_0x5b43bc[_0x2973d(0x25c)]+_0x43db34[_0x23b831]+(_0x2973d(0x621)+'le'),_0x190739;}}else{if(_0x1baad9['lengt'+'h'])return!![];if(!_0x336e58[_0x2973d(0x7c3)+'WebMo'+'dkit']||!_0xc82739[_0x2973d(0x7c3)+_0x2973d(0x365)+'dkit'][_0x2973d(0x90e)+'me'])return![];var _0x321c5e=_0x47ba03[_0x2973d(0x7c3)+_0x2973d(0x365)+_0x2973d(0x1a6)][_0x2973d(0x90e)+'me'];if(!_0x321c5e['plugi'+'ns']||!_0x321c5e[_0x2973d(0x401)+'ns']['lengt'+'h'])return![];_0x561385=_0x20bad9[_0x2973d(0x7c3)+'WebMo'+'dkit'][_0x2973d(0x47c)+_0x2973d(0xabf)+'er'],_0x2879eb=_0x1cc015||_0x321c5e['plugi'+'ns'][_0x5b43bc['NveXl'](_0x321c5e[_0x2973d(0x401)+'ns']['lengt'+'h'],0x234a+-0xafd*-0x2+0x6b*-0x89)];if(!_0x23f085||_0x5b43bc[_0x2973d(0xae3)](typeof _0x24fe4c[_0x2973d(0x40e)+'refix'],_0x2973d(0x6cb)+_0x2973d(0xa5b)))return![];for(var _0x2b0ea4=-0x123a+-0x1*0x1159+0x2393;_0x2b0ea4<_0xf938ee[_0x2973d(0x76e)+'h'];_0x2b0ea4++){var _0x279782=_0x43a67f[_0x2b0ea4];try{var _0x52ac3e=_0xefa23e[_0x2973d(0x40e)+_0x2973d(0x340)]({'typeName':_0x279782[_0x2973d(0x55e)],'methodName':'Updat'+'e','params':['i32',_0x2973d(0xc5)],'returnType':_0x54378c},_0x8ecd4e(_0x279782[_0x2973d(0x55e)],_0x279782[_0x2973d(0x14b)],_0x279782[_0x2973d(0x732)]));_0x1902d3[_0x2973d(0x7d6)]({'type':_0x279782[_0x2973d(0x55e)],'hook':_0x52ac3e,'keep':_0x279782['keep']});}catch(_0x2c56e3){_0x9e62ba[_0x2973d(0x7d6)](_0x279782['type']+':\x20'+_0x5b43bc['VFqiB'](_0x277720,_0x2c56e3&&_0x2c56e3['messa'+'ge']||_0x2c56e3)['slice'](0x34*0x83+0xc72+-0x270e,-0x3*-0x29e+0x1088+-0x17c2));}}return _0x29fc97[_0x2973d(0x76e)+'h']>0x9*-0x224+0x114f+0x3*0xa7;}}catch(_0x2d3bd7){}return _0x627300[_0x2973d(0x42d)+'e']=null,null;}else _0xfacc53[_0x2973d(0x3ec)+_0x2973d(0x5e9)+_0x2973d(0x642)]===-0x17f*0x3+-0x1ff*0x7+-0x1*-0x1276?_0x28c5b8[_0x2973d(0xb4e)+_0x2973d(0x29f)]['push'](_0x917caa[_0x2973d(0x27d)](_0x917caa['KVyfH']+_0xc5a070['hooks'+_0x2973d(0x33c)]+(_0x2973d(0x716)+_0x2973d(0x47b)+_0x2973d(0x377)+_0x2973d(0x2c3)+'N\x20by\x20'+_0x2973d(0x3b6)+_0x2973d(0xb32)+_0x2973d(0x373)+_0x2973d(0x5b0)+'\x20'),_0x2973d(0x9b5)+'once\x20'+'durin'+'g\x20Web'+_0x2973d(0x13f)+_0x2973d(0x4b4)+_0x2973d(0x223)+_0x2973d(0x65c)+_0x2973d(0xb3d)+_0x2973d(0x12e)+_0x2973d(0x360)+_0x2973d(0x401)+_0x2973d(0x230)+_0x2973d(0x3f7)+'ngth,'+'\x20')+(_0x2973d(0xb53)+'oks\x20r'+_0x2973d(0x262)+'ered\x20'+'after'+_0x2973d(0x1b4)+'re\x20ig'+_0x2973d(0xa4e)+'\x20for\x20'+_0x2973d(0x649)+_0x2973d(0x462)+_0x2973d(0x704)+_0x2973d(0x101)+'.\x20')+('Regis'+'tered'+'\x20')+_0x17b2a3['hooks'+_0x2973d(0xad9)+'tered'+_0x2973d(0xa4d)]+_0x917caa['tKjEU']):_0x20bac5[_0x2973d(0xb4e)+'ngs'][_0x2973d(0x7d6)](_0x917caa['DSFLX'](_0x2973d(0x70d)+_0x2973d(0xe6)+_0x2973d(0x42f)+_0x244b47[_0x2973d(0x3ec)+_0x2973d(0x5e9)+'ved']+_0x2973d(0x23b),_0x1596bf[_0x2973d(0x3ec)+_0x2973d(0x33c)])+_0x917caa[_0x2973d(0x953)]+_0x917caa['PBwvX']);}function _0x37054a(){var _0x1bf13d=_0x6937dd;if(_0x5b43bc[_0x1bf13d(0x9b6)]!=='wokKB'){try{if(_0x4908fe&&_0x4908fe[_0x1bf13d(0x2eb)+'r']&&_0x4908fe[_0x1bf13d(0x2eb)+'r']['byteL'+_0x1bf13d(0x348)])return _0x627300[_0x1bf13d(0x42d)+'e']=_0x627300[_0x1bf13d(0x42d)+'e']||_0x1bf13d(0x981)+'ntiat'+'e().e'+'xport'+'s.mem'+_0x1bf13d(0x627),new Uint8Array(_0x4908fe['buffe'+'r']);}catch(_0x206184){}try{var _0xab7b95=_0x407268();if(_0xab7b95&&_0xab7b95[_0x1bf13d(0xab3)+'e']&&_0xab7b95[_0x1bf13d(0xab3)+'e']['HEAPU'+'8']&&_0xab7b95['Modul'+'e'][_0x1bf13d(0xad0)+'8']['buffe'+'r'])return _0xab7b95[_0x1bf13d(0xab3)+'e'][_0x1bf13d(0xad0)+'8'];}catch(_0x2b41e5){}return null;}else _0x51b378['st'][_0x1bf13d(0x906)+_0x1bf13d(0x2d4)+'n']=_0x4c7324['froun'+'d'](_0x13d89d),_0x2d7830++,_0x11dfb0[_0x1bf13d(0x7d6)]('0x'+_0x132b21['o'][_0x1bf13d(0x9b0)+_0x1bf13d(0xa36)](0x1f7*-0xb+0x10d7+0x2*0x26b));}function _0x268c9b(){var _0x5926ca=_0x6937dd,_0x1605a5=_0x5b43bc['tdyvQ'](_0x37054a);if(!_0x1605a5)return null;try{return new DataView(_0x1605a5['buffe'+'r'],_0x1605a5['byteO'+_0x5926ca(0x937)],_0x1605a5[_0x5926ca(0x6a2)+_0x5926ca(0x348)]);}catch(_0x1ffccc){return null;}}function _0x363e06(_0xfdc935,_0x5e97ee){var _0x22566d=_0x6937dd,_0x2416b0={'LTKCA':function(_0x23a888,_0x28469f){var _0xdf220a=_0x5c65;return _0x5b43bc[_0xdf220a(0x643)](_0x23a888,_0x28469f);},'jkWqs':function(_0x5a3bab,_0x32d35c){return _0x5a3bab+_0x32d35c;},'kkFAV':function(_0x1f7b0c,_0x43140b){return _0x5b43bc['VPDwN'](_0x1f7b0c,_0x43140b);}};if(_0x22566d(0x3f9)===_0x5b43bc['PIGPQ']){var _0xc72689=_0x5b43bc[_0x22566d(0xb0d)](_0x268c9b);if(!_0xc72689)return _0x627300['faile'+'d']++,_0x627300[_0x22566d(0x8b7)+_0x22566d(0x1cc)]=_0x627300[_0x22566d(0x8b7)+'rror']||'no\x20HE'+_0x22566d(0x36d)+_0x22566d(0x139)+_0x22566d(0x972)+_0x22566d(0xab6)+_0x22566d(0x7f9)+'\x20reac'+_0x22566d(0x2f1)+_0x22566d(0x6fc)+_0x22566d(0x90e)+'me.re'+_0x22566d(0x21c)+_0x22566d(0xa6e)+')\x20or\x20'+'any\x20w'+'indow'+_0x22566d(0x121)+'al',undefined;if(_0xfdc935<0xb5c+0x1*-0x1d3c+0x11e0||_0xfdc935+(0x1959+0x14e7+-0xb8f*0x4)>_0xc72689[_0x22566d(0x6a2)+_0x22566d(0x348)]){if(_0x5b43bc[_0x22566d(0x6a3)]===_0x5b43bc[_0x22566d(0xb52)]){_0xad4a4d['preve'+_0x22566d(0xa24)+'ault'](),_0x4be766[_0x22566d(0x7dd)]=_0x583ddf[_0x22566d(0xa12)](0x262e+-0x1926+-0x6*0x227,_0x1fc8d9[_0x22566d(0x7dd)]-(0x1*-0x7d5+0xe5f*-0x2+0x5*0x751)),_0x33de9c();return;}else return _0x627300[_0x22566d(0x6b3)+'d']++,_0x627300['lastE'+_0x22566d(0x1cc)]=_0x627300[_0x22566d(0x8b7)+_0x22566d(0x1cc)]||_0x5b43bc[_0x22566d(0xaa6)](_0x5b43bc[_0x22566d(0x36f)]+_0xfdc935['toStr'+'ing'](0x4*-0x7cd+0x305+0x1c3f)+(_0x22566d(0xa27)+_0x22566d(0x6ae)+'\x20end\x20'+'0x'),_0xc72689['byteL'+_0x22566d(0x348)][_0x22566d(0x9b0)+'ing'](-0x11de+-0xd76+0x1f64)),undefined;}try{_0x627300['ok']++;switch(_0x5e97ee){case'u8':return _0xc72689['getUi'+_0x22566d(0xa20)](_0xfdc935);case'i8':return _0xc72689[_0x22566d(0x838)+'t8'](_0xfdc935);case _0x5b43bc[_0x22566d(0x16f)]:return _0xc72689['getIn'+_0x22566d(0x4a3)](_0xfdc935,!![]);case _0x5b43bc[_0x22566d(0x536)]:return _0xc72689['getUi'+_0x22566d(0x2ab)](_0xfdc935,!![]);case _0x5b43bc['bguUz']:return _0xc72689[_0x22566d(0x838)+'t32'](_0xfdc935,!![]);case _0x22566d(0x3c0):return _0xc72689[_0x22566d(0x4ce)+_0x22566d(0x707)](_0xfdc935,!![]);case _0x22566d(0xb11):return _0xc72689['getFl'+'oat32'](_0xfdc935,!![]);case _0x5b43bc[_0x22566d(0xaeb)]:return _0xc72689['getFl'+_0x22566d(0x9c6)](_0xfdc935,!![]);case'v2':case'v3':case'v4':return _0xc72689[_0x22566d(0x807)+'oat32'](_0xfdc935,!![]);default:return _0xc72689[_0x22566d(0x838)+_0x22566d(0x479)](_0xfdc935,!![]);}}catch(_0x13a2ce){if(_0x22566d(0x5bf)===_0x5b43bc['fqhVp'])return _0x627300[_0x22566d(0x6b3)+'d']++,_0x627300[_0x22566d(0x8b7)+_0x22566d(0x1cc)]=_0x627300['lastE'+_0x22566d(0x1cc)]||String(_0x13a2ce&&_0x13a2ce['messa'+'ge']||_0x13a2ce)[_0x22566d(0x50d)](-0x464*-0x2+0x1*-0x2335+0x1a6d,0xd79+0x108+0xe09*-0x1),undefined;else{var _0x19a38a=_0x3be6f6[_0x1db113],_0x20e032=typeof _0x19a38a['v']===_0x22566d(0x82d)+'r'?_0x2416b0[_0x22566d(0x9f8)](_0x455b19[_0x22566d(0x4d6)](_0x19a38a['v']*(0x1484+0x1849*0x1+-0x28e5)),-0x11d9+0x1bd9+-0x618):_0x19a38a['v'];_0x2a75e4[_0x22566d(0x7d6)](_0x2416b0[_0x22566d(0x140)](_0x2416b0[_0x22566d(0x140)](_0x2416b0[_0x22566d(0x195)]('\x20\x20',('0x'+_0x19a38a['o'][_0x22566d(0x9b0)+_0x22566d(0xa36)](0x1e7b+0x873+0x136f*-0x2))[_0x22566d(0x8c6)+'d'](-0x6b*-0x2+0xe17+-0x1*0xee5))+'\x20'+_0x19a38a['k'][_0x22566d(0x8c6)+'d'](-0x189*0xe+0xb45*-0x2+-0x3*-0xeb1),'\x20')+_0x43a883(_0x20e032)['padEn'+'d'](-0x1018+-0xa*0xc5+0x2*0xbed),'\x20')+(_0x19a38a[_0x22566d(0x455)]||''));}}}else{var _0x24acee={'skVTO':function(_0x54eae2,_0x1682a1){return _0x54eae2*_0x1682a1;}},_0x243e76=_0x32c192[_0x33cbed][_0x22566d(0x5c3)]||[_0x3b101a[_0x42cdc7]['v'],0x11a3+0x1*0x1993+-0x2b36,-0x5fe+-0x1064+0xf*0x17e];return _0x243e76[_0x22566d(0x6be)](function(_0x4f7549){return _0x3fc125['round'](_0x24acee['skVTO'](_0x4f7549,0x2*0x6f5+0x11*-0x246+-0x60*-0x43))/(0xff5+0x12bb+-0x224c);})['join']('\x20\x20');}}function _0x50175d(_0x32a3d0,_0xca23cb,_0x723710){var _0x4f7e11=_0x6937dd,_0xf9f352={'zGCUr':function(_0x37abfc,_0x595625){return _0x37abfc===_0x595625;},'Pfncs':_0x5b43bc[_0x4f7e11(0x331)]},_0x180c17=_0x5b43bc[_0x4f7e11(0x88b)](_0x268c9b);if(!_0x180c17||_0x5b43bc['Ivqba'](_0x32a3d0,0x127+0x215d+-0x2284)||_0x5b43bc['zMJDt'](_0x32a3d0+(0x1cf5+-0x922+0x1*-0x13cf),_0x180c17['byteL'+_0x4f7e11(0x348)]))return![];try{switch(_0xca23cb){case'u8':case'i8':_0x180c17[_0x4f7e11(0x48b)+_0x4f7e11(0xa20)](_0x32a3d0,_0x5b43bc[_0x4f7e11(0x8bd)](_0x723710,0x117e*0x1+0x2d*-0x13+0x1a5*-0x8));break;case'i16':case _0x4f7e11(0xd3):_0x180c17['setIn'+_0x4f7e11(0x4a3)](_0x32a3d0,_0x723710|0xac3*-0x2+-0x3*-0x841+0x1*-0x33d,!![]);break;case'i32':case _0x4f7e11(0x3c0):_0x180c17[_0x4f7e11(0x6a5)+'t32'](_0x32a3d0,_0x723710|-0x20*0x8+0x5*0x1a5+-0x1*0x739,!![]);break;case _0x5b43bc[_0x4f7e11(0x27f)]:_0x180c17[_0x4f7e11(0x202)+_0x4f7e11(0x5c9)](_0x32a3d0,_0x723710,!![]);break;default:_0x180c17[_0x4f7e11(0x6a5)+_0x4f7e11(0x479)](_0x32a3d0,_0x723710|-0x105a+-0x62f*0x1+-0x9*-0x281,!![]);}return!![];}catch(_0x2fbcf5){return _0x5b43bc[_0x4f7e11(0x786)](_0x4f7e11(0x184),'MbkFq')?_0x3f02de[-0x119*-0x1+0x587+0x1*-0x69f]===_0x4f7e11(0xb11)||_0xf9f352['zGCUr'](_0x363526[0x26c9+0xee+-0x27b6],_0xf9f352[_0x4f7e11(0x265)]):![];}}var _0xcf651c={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':_0x6937dd(0xc5)},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':'i32'},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0x3ef19f(_0x2c3a2e){var _0x323bc8=_0x6937dd,_0x2b7189='';for(var _0x15ec32=0x124b+-0x1*0x1caf+0xa64;_0x15ec32<_0x2c3a2e['lengt'+'h'];_0x15ec32++){var _0x2a0236=_0x2c3a2e[_0x15ec32][_0x323bc8(0x9b0)+'ing'](-0x190c+0x1454+0x198*0x3);_0x2b7189+=_0x5b43bc[_0x323bc8(0x3c1)](_0x2a0236[_0x323bc8(0x76e)+'h']<-0x1*0x929+-0x3*-0xa39+-0x1580?'0':'',_0x2a0236);}return _0x2b7189;}function _0x1b9725(_0x3760b3,_0x1fe443,_0x4c98bd){var _0x2bb9e9=_0x6937dd;if(_0x5b43bc['jTEKI'](_0x2bb9e9(0x5ec),_0x2bb9e9(0x5ec))){if(_0x5b43bc[_0x2bb9e9(0x7a5)](_0x3a035a,_0x5b43bc['uQhPD'])){_0x5b43bc[_0x2bb9e9(0x275)](_0x184d1d,_0x5091fa&&typeof _0xfa45a6['on']==='boole'+'an'?_0x346de4['on']:_0x22f0aa['on'],_0x293c56&&_0x5b43bc[_0x2bb9e9(0xa38)](typeof _0x4fa4bd['facto'+'r'],_0x5b43bc[_0x2bb9e9(0x637)])?_0x1445cc[_0x2bb9e9(0xae4)+'r']:_0x57b7be[_0x2bb9e9(0xae4)+'r']);return;}if(_0x154d90!==_0x5b43bc[_0x2bb9e9(0x5f2)])return;var _0x8bbe30=_0x10eb34(),_0x2d216d=_0xdfdd47(_0x8bbe30),_0x5ab1b8=_0xe81011();for(var _0x4c5cb1 in _0x5ab1b8)_0x2d216d[_0x4c5cb1]=_0x5ab1b8[_0x4c5cb1];if(!_0xb22812){_0x246e16=_0x2d216d,_0x1f179e=[],_0x5b43bc[_0x2bb9e9(0x275)](_0x926a24,'repor'+'t',{'report':_0xc3c778()});return;}_0x48ec67=[];for(var _0x706221 in _0x2d216d){var _0x5bf861=_0x5b5e01[_0x706221],_0x8df4b7=_0x2d216d[_0x706221];if(_0x5bf861!==_0x8df4b7)_0x4eba9e[_0x2bb9e9(0x7d6)](_0x5b43bc['VvrJF'](_0x706221,':\x20')+_0x5bf861+_0x2bb9e9(0xa8)+_0x8df4b7);}_0x4d02c4=_0x2d216d,_0x2fc5d9(_0x2bb9e9(0x7ea)+'t',{'report':_0x5b43bc[_0x2bb9e9(0x83a)](_0x25f695)});}else{var _0x1fd0cd=_0x5b43bc['tzOFf'](_0x268c9b);if(!_0x1fd0cd)return _0x627300[_0x2bb9e9(0x6b3)+'d']++,_0x627300[_0x2bb9e9(0x8b7)+_0x2bb9e9(0x1cc)]=_0x627300['lastE'+_0x2bb9e9(0x1cc)]||_0x2bb9e9(0xf8)+_0x2bb9e9(0x36d)+_0x2bb9e9(0x139)+_0x2bb9e9(0x972)+'stanc'+_0x2bb9e9(0x7f9)+'\x20reac'+'hable'+'\x20via\x20'+_0x2bb9e9(0x90e)+_0x2bb9e9(0x585)+'solve'+_0x2bb9e9(0xa6e)+_0x2bb9e9(0x6fd)+'any\x20w'+'indow'+_0x2bb9e9(0x121)+'al',null;if(_0x5b43bc[_0x2bb9e9(0x34e)](_0x1fe443,0x2221+0xb3f*0x1+0x16*-0x210)||_0x1fe443+_0x4c98bd>_0x1fd0cd['byteL'+'ength'])return _0x627300[_0x2bb9e9(0x6b3)+'d']++,_0x627300[_0x2bb9e9(0x8b7)+_0x2bb9e9(0x1cc)]=_0x627300[_0x2bb9e9(0x8b7)+_0x2bb9e9(0x1cc)]||'addre'+_0x2bb9e9(0xfd)+_0x5b43bc[_0x2bb9e9(0xd4)](_0x3760b3,_0x1fe443)[_0x2bb9e9(0x9b0)+_0x2bb9e9(0xa36)](0x8*0xa+-0x5*0x20b+0x9f7)+(_0x2bb9e9(0xa27)+_0x2bb9e9(0x6ae)+_0x2bb9e9(0x9dd)+'0x')+_0x1fd0cd[_0x2bb9e9(0x6a2)+_0x2bb9e9(0x348)]['toStr'+_0x2bb9e9(0xa36)](-0xf00+0x227f*-0x1+-0x1085*-0x3),null;try{var _0x385f57=new Uint8Array(_0x4c98bd);for(var _0x177fc2=-0x16a8+-0x255f*0x1+0x3c07;_0x5b43bc[_0x2bb9e9(0x3fa)](_0x177fc2,_0x4c98bd);_0x177fc2++)_0x385f57[_0x177fc2]=_0x1fd0cd[_0x2bb9e9(0x4ce)+_0x2bb9e9(0xa20)](_0x5b43bc[_0x2bb9e9(0x319)](_0x3760b3+_0x1fe443,_0x177fc2));return _0x627300['ok']++,_0x385f57;}catch(_0x3ee2f8){if(_0x5b43bc[_0x2bb9e9(0x45c)]('niVBt',_0x2bb9e9(0x748)))return _0x627300['faile'+'d']++,_0x627300['lastE'+_0x2bb9e9(0x1cc)]=_0x627300['lastE'+'rror']||String(_0x3ee2f8&&_0x3ee2f8[_0x2bb9e9(0x29b)+'ge']||_0x3ee2f8)['slice'](0xbbd+0x13f*-0x1a+0x14a9,-0x1*-0x356+-0x1235+0xbb*0x15),null;else _0x4b98f9[_0x2bb9e9(0x7dd)]=_0x5d5eb8,_0x5b43bc[_0x2bb9e9(0x88b)](_0x5ac623);}}}function _0x15be34(_0xebd480,_0x56c810,_0x4dc0d8){var _0x4c61ef=_0x6937dd,_0x367a10=_0xcf651c[_0x4dc0d8],_0x3b1bc4=_0x5b43bc[_0x4c61ef(0x37f)](_0x1b9725,_0xebd480,_0x56c810,_0x367a10[_0x4c61ef(0x7da)]);if(!_0x3b1bc4)return null;var _0x583c60=new DataView(_0x3b1bc4[_0x4c61ef(0x2eb)+'r'],_0x3b1bc4['byteO'+_0x4c61ef(0x937)],_0x3b1bc4[_0x4c61ef(0x6a2)+'ength']),_0x477afe=_0x583c60[_0x4c61ef(0x838)+_0x4c61ef(0x479)](_0x367a10[_0x4c61ef(0x4ab)],!![]),_0x588ac3=_0x583c60[_0x4c61ef(0x838)+_0x4c61ef(0x479)](_0x367a10['hidde'+'n'],!![]),_0x2ca31d=_0x5b43bc[_0x4c61ef(0x921)](_0x583c60['getUi'+_0x4c61ef(0xa20)](_0x367a10[_0x4c61ef(0x6d4)+'d']),0x166a*-0x1+0x802+-0x7*-0x20f),_0x4a6787=_0x5b43bc['QUHxi'](_0x4dc0d8,'obfF')?_0x583c60['getFl'+_0x4c61ef(0x5c9)](_0x367a10[_0x4c61ef(0x18f)],!![]):_0x5b43bc[_0x4c61ef(0xa38)](_0x4dc0d8,_0x5b43bc['yGjwR'])?_0x583c60['getIn'+'t32'](_0x367a10[_0x4c61ef(0x18f)],!![]):_0x583c60['getUi'+_0x4c61ef(0xa20)](_0x367a10[_0x4c61ef(0x18f)]),_0x591596=_0x583c60[_0x4c61ef(0x4ce)+_0x4c61ef(0xa20)](_0x367a10['activ'+'e'])&0x1506+0x1*0x1fb1+-0x34b6;return{'keyAtOffset0':_0x477afe,'hidden':_0x588ac3,'inited':_0x2ca31d,'fake':_0x4a6787,'act':_0x591596,'hex':_0x3ef19f(_0x3b1bc4),'alt':_0x4dc0d8===_0x4c61ef(0x76a)?_0x5b43bc['ieETc'](_0x588ac3,_0x5b43bc['THrPz'](_0x4a6787,-0x1039*0x1+-0x1161+-0x10cd*-0x2)):null};}function _0x283ae1(_0x31ccf3,_0x38a5ef,_0x1dde70){var _0x337396=_0x6937dd;if(_0x5b43bc[_0x337396(0x26d)](_0x31ccf3,_0x5b43bc['SwYNy']))return _0x5b43bc['IZQgq'](_0x2f98ca,_0x38a5ef^_0x1dde70);if(_0x31ccf3===_0x337396(0x76a))return _0x38a5ef^_0x1dde70|-0x3f*-0x8b+0x2*0x5fb+-0x1*0x2e2b;return((_0x38a5ef^_0x1dde70)&-0x1*0x1a21+0xdd2+0xd4e)!==-0x9*-0x3c5+-0x146+0x1*-0x20a7?-0x3d6+-0xb3c+0x1*0xf13:0x97c*-0x2+-0x268a+0x3982;}function _0xf6c81c(_0x48df2f,_0x2586c5,_0x37c409){var _0x4a1fa9=_0x6937dd,_0x2094ce=_0xcf651c[_0x37c409];if(!_0x2094ce)return null;var _0x14217f=_0x363e06(_0x5b43bc[_0x4a1fa9(0xb5)](_0x48df2f+_0x2586c5,_0x2094ce['key']),'u8'),_0x496edd=_0x363e06(_0x5b43bc[_0x4a1fa9(0x6ac)](_0x48df2f,_0x2586c5)+_0x2094ce[_0x4a1fa9(0x5c5)+'n'],_0x4a1fa9(0xc5)),_0x5ac242=_0x363e06(_0x5b43bc['sbnqA'](_0x48df2f+_0x2586c5,_0x2094ce[_0x4a1fa9(0x6d4)+'d']),'u8'),_0x2c3b69=_0x5b43bc['zJkpD'](_0x363e06,_0x48df2f+_0x2586c5+_0x2094ce[_0x4a1fa9(0x18f)],_0x5b43bc['QUHxi'](_0x37c409,_0x5b43bc[_0x4a1fa9(0xae9)])?_0x5b43bc['NGslb']:_0x37c409===_0x4a1fa9(0x76a)?_0x5b43bc[_0x4a1fa9(0x331)]:'u8'),_0x36a834=_0x363e06(_0x48df2f+_0x2586c5+_0x2094ce[_0x4a1fa9(0x1f2)+'e'],'u8');if(_0x14217f===undefined||_0x496edd===undefined||_0x5b43bc['DeROX'](_0x2c3b69,undefined)||_0x5b43bc['CBLIe'](_0x36a834,undefined))return null;_0x14217f&=0x21bf+0x1a12+-0x3ad2,_0x496edd|=-0x24f6+0x1053+0x14a3,_0x5ac242=_0x5b43bc[_0x4a1fa9(0xa53)](_0x5ac242,-0x18d4+0x184b+-0x89*-0x1)&-0x23cc*0x1+0x2*0xb6f+-0xb*-0x12d,_0x36a834&=-0x2043+-0x21c7+0x420b;var _0x197d4c;if(_0x5b43bc[_0x4a1fa9(0x2e7)](_0x37c409,_0x4a1fa9(0xa08)))_0x197d4c=_0x5b43bc['VFqiB'](_0x2f98ca,_0x5b43bc['ieETc'](_0x496edd,_0x14217f));else{if(_0x5b43bc['JMuyr'](_0x37c409,_0x4a1fa9(0x76a)))_0x197d4c=_0x5b43bc[_0x4a1fa9(0x566)](_0x496edd,_0x14217f)|-0x1915+-0x805+0x13*0x1be;else _0x197d4c=((_0x496edd^_0x14217f)&-0x1*0x1b5b+-0x1f21+0x3b7b)!==-0x29*-0x4d+-0x1087+0x432?0x19c4+-0xb*0x33f+0x86*0x13:-0x611*-0x1+0x1948+-0x1f59;}return{'real':_0x197d4c,'fake':_0x2c3b69,'act':_0x36a834,'init':_0x5ac242,'key':_0x14217f,'hidden':_0x496edd};}function _0x258718(_0x27e8c7,_0x337086,_0x43b8b7,_0x5120d4){var _0x330a8b=_0x6937dd,_0x2797e2=_0x5b43bc[_0x330a8b(0x315)][_0x330a8b(0x8ec)]('|'),_0x33859e=-0x2365+-0x1*-0x18b9+0x2*0x556;while(!![]){switch(_0x2797e2[_0x33859e++]){case'0':return _0x50175d(_0x5b43bc[_0x330a8b(0xac4)](_0x27e8c7,_0x337086)+_0x47fbd3[_0x330a8b(0x5c5)+'n'],_0x330a8b(0xc5),_0x418624^_0x435983)&&_0x5b43bc[_0x330a8b(0x37f)](_0x50175d,_0x27e8c7+_0x337086+_0x47fbd3['fake'],_0x5b43bc['MBTOF'](_0x43b8b7,'obfF')?_0x5b43bc[_0x330a8b(0x27f)]:_0x43b8b7===_0x5b43bc[_0x330a8b(0x5d8)]?_0x330a8b(0xc5):'u8',_0x5b43bc[_0x330a8b(0x577)](_0x43b8b7,_0x330a8b(0xa08))?_0x5120d4:_0x43b8b7===_0x5b43bc[_0x330a8b(0x5d8)]?_0x5120d4|-0xabe+-0x1*0x15a1+0x205f:_0x5120d4?-0x133a+0x10a7+-0xf*-0x2c:-0x1a*-0x153+0x1c4f*-0x1+-0x61f)&&_0x50175d(_0x5b43bc[_0x330a8b(0x89c)](_0x5b43bc[_0x330a8b(0xaa6)](_0x27e8c7,_0x337086),_0x47fbd3[_0x330a8b(0x1f2)+'e']),'u8',0x5*-0x643+-0x7bd+0x270c);case'1':var _0x418624;continue;case'2':var _0x4dbb7b=new DataView(_0x3eefd8[_0x330a8b(0x2eb)+'r'],_0x3eefd8[_0x330a8b(0xb1f)+'ffset'],_0x3eefd8['byteL'+_0x330a8b(0x348)]);continue;case'3':if(!_0x3eefd8)return![];continue;case'4':var _0x435983=_0x47fbd3[_0x330a8b(0x9d7)+'pe']==='u8'?_0x4dbb7b['getUi'+_0x330a8b(0xa20)](_0x47fbd3[_0x330a8b(0x4ab)]):_0x4dbb7b['getIn'+_0x330a8b(0x479)](_0x47fbd3[_0x330a8b(0x4ab)],!![]);continue;case'5':var _0x47fbd3=_0xcf651c[_0x43b8b7];continue;case'6':var _0x3eefd8=_0x1b9725(_0x27e8c7,_0x337086,_0x47fbd3[_0x330a8b(0x7da)]);continue;case'7':if(_0x43b8b7===_0x330a8b(0xa08))_0x418624=_0x5b43bc[_0x330a8b(0x2c7)](_0x551818,_0x5120d4);else{if(_0x43b8b7===_0x5b43bc['yGjwR'])_0x418624=_0x5120d4|0x192*0x6+-0x6c4*-0x5+-0xad*0x40;else _0x418624=_0x5b43bc[_0x330a8b(0x5ed)](_0x5120d4?-0xe62+-0x56d*-0x5+-0xcbe:0xfe5*0x1+0x127a+-0x225f,0x18f8+-0xc47*-0x2+-0x3087);}continue;}break;}}var _0x3f1502={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0x380b28=0x32d*-0x5+0x17c2*0x1+-0x7e1+0.03,_0x305aab=0x1*0xba3+0x25c1+-0x3162,_0x2f3357={},_0x5b33aa=-0x22e1+0x1aa7+0x83a,_0x53b8da=[],_0x23a90c=[];function _0x1631d2(_0x27e0b7){var _0x36d54e=_0x6937dd,_0x5cd80c={'hrdev':function(_0x36a13b,_0x49fef1){return _0x36a13b+_0x49fef1;},'Ojucr':_0x5b43bc[_0x36d54e(0x90b)]},_0x24b8bd=_0x27acec[_0x36d54e(0x8f4)+'ntrol'+'ler']||[],_0x3f651e=[];_0x23a90c=[],_0x53b8da=[];for(var _0x256193=0x1efc+-0x2314+0x418;_0x5b43bc[_0x36d54e(0x238)](_0x256193,_0x24b8bd['lengt'+'h']);_0x256193++){if(_0x5b43bc[_0x36d54e(0x7a5)](_0x5b43bc['ZARJN'],_0x36d54e(0xab))){var _0x184859=_0x560d24['getEl'+'ement'+'ById']('sakur'+_0x36d54e(0x3b0)+'v2');if(_0x184859)_0x184859[_0x36d54e(0x44d)+'e']();}else{var _0x1ff8d4=_0x24b8bd[_0x256193][-0x4*0xa0+-0x8*-0x33d+-0x1768];if(_0x24b8bd[_0x256193][0xaa2*-0x3+-0x1e60+0x3e47]!=='obfF')continue;var _0x5dbe06=_0x15be34(_0x27e0b7,_0x1ff8d4,'obfF');if(!_0x5dbe06||_0x5dbe06[_0x36d54e(0x6d4)+'d']!==0x4*0x616+0x1cac+0x29*-0x14b)continue;var _0x29c76a=_0x283ae1(_0x36d54e(0xa08),_0x5dbe06[_0x36d54e(0x5c5)+'n'],_0x5dbe06[_0x36d54e(0x11a)+_0x36d54e(0x9c8)+'t0']);if(typeof _0x29c76a!==_0x36d54e(0x82d)+'r'||!_0x5b43bc['NejrS'](isFinite,_0x29c76a))continue;var _0x271f98=_0x5b43bc[_0x36d54e(0x927)](_0x5b43bc[_0x36d54e(0x584)](_0x27e0b7,':'),_0x1ff8d4),_0x58adfd=_0x2f3357[_0x271f98];if(!_0x58adfd||_0x29c76a!==_0x58adfd['lastW'+'ritte'+'n'])_0x58adfd=_0x2f3357[_0x271f98]={'base':_0x29c76a,'lastWritten':null};var _0x1fa911=_0x58adfd[_0x36d54e(0x77f)],_0x8ab984=Math['abs'](_0x1fa911);if(_0x5b43bc[_0x36d54e(0x238)](_0x8ab984,0x142+0x220f*0x1+-0x1*0x2351+0.0001)||_0x5b43bc[_0x36d54e(0x600)](_0x8ab984,-0x1f0cb+0x2*-0x8763+-0x4421*-0x11)){_0x23a90c['push']({'o':_0x1ff8d4,'v':_0x29c76a,'why':'impla'+'usibl'+'e'});continue;}_0x3f651e[_0x36d54e(0x7d6)]({'o':_0x1ff8d4,'v':_0x29c76a,'a':_0x8ab984,'base':_0x1fa911,'key':_0x271f98,'st':_0x58adfd});}}var _0x9ef32d=[];for(var _0x522232=-0x1f53+0x2*-0xfd6+0x3eff;_0x522232<_0x3f651e[_0x36d54e(0x76e)+'h'];_0x522232++){var _0x405cbe=_0x3f651e[_0x522232]['a'],_0x450220=null;for(var _0x2579e6=-0x1562+0x1513+0x4f;_0x2579e6<_0x9ef32d['lengt'+'h'];_0x2579e6++){var _0x20453e=_0x9ef32d[_0x2579e6]['mean']/_0x405cbe;if(_0x5b43bc['zMJDt'](_0x20453e,0x3c5+-0x28a+0x2*-0x9d-_0x380b28)&&_0x5b43bc['SJdTU'](_0x20453e,-0x8*0x314+-0x9*0x4d+0x2*0xdab+_0x380b28)){_0x450220=_0x9ef32d[_0x2579e6];break;}}!_0x450220&&(_0x450220={'mean':_0x405cbe,'members':[]},_0x9ef32d[_0x36d54e(0x7d6)](_0x450220));_0x450220[_0x36d54e(0x439)+'rs']['push'](_0x3f651e[_0x522232]),_0x450220[_0x36d54e(0x200)]=0x12d*0x3+-0x135a+-0x1*-0xfd3;for(var _0x92eba9=0xeb4*0x2+0x899*-0x2+-0x412*0x3;_0x5b43bc[_0x36d54e(0x238)](_0x92eba9,_0x450220[_0x36d54e(0x439)+'rs']['lengt'+'h']);_0x92eba9++)_0x450220['mean']+=_0x450220[_0x36d54e(0x439)+'rs'][_0x92eba9]['a'];_0x450220['mean']/=_0x450220['membe'+'rs'][_0x36d54e(0x76e)+'h'];}var _0x3b07f9=[];for(var _0x113f20=0x26*-0xd0+0x1*0xef5+0x32f*0x5;_0x5b43bc['Ivqba'](_0x113f20,_0x9ef32d['lengt'+'h']);_0x113f20++){if(_0x5b43bc[_0x36d54e(0x2f2)](_0x9ef32d[_0x113f20][_0x36d54e(0x439)+'rs'][_0x36d54e(0x76e)+'h'],_0x305aab))_0x3b07f9['push'](_0x9ef32d[_0x113f20]);}if(!_0x3b07f9[_0x36d54e(0x76e)+'h']){_0x23a90c['push']({'o':-(-0xbed+0x1480+-0x2*0x449),'v':0x0,'why':_0x5b43bc['JAOYG'](_0x36d54e(0x32e)+_0x36d54e(0x863)+'f\x20',_0x305aab)+_0x5b43bc['LDgrP']});return;}var _0x577115=_0x3b07f9[-0xcae+-0x7*-0x137+0x42d]['mean'];for(var _0x12ef85=-0x1ac8+0x248f+-0x9c7;_0x12ef85<_0x3b07f9['lengt'+'h'];_0x12ef85++)if(_0x3b07f9[_0x12ef85]['mean']<_0x577115)_0x577115=_0x3b07f9[_0x12ef85][_0x36d54e(0x200)];var _0x3781ec=_0x5b43bc[_0x36d54e(0x4ef)](_0x577115,0xcd0+0x1c16*0x1+-0x28e6+0.5);for(var _0x46e8ed=0x7a9+0x1b7*-0x13+0x2*0xc76;_0x5b43bc['EjIDP'](_0x46e8ed,_0x9ef32d['lengt'+'h']);_0x46e8ed++){if(_0x5b43bc[_0x36d54e(0x3fd)](_0x9ef32d[_0x46e8ed][_0x36d54e(0x439)+'rs'][_0x36d54e(0x76e)+'h'],_0x305aab))continue;for(var _0x4f88cf=0x1*0xf17+-0x53*-0x7+-0x115c;_0x4f88cf<_0x9ef32d[_0x46e8ed]['membe'+'rs']['lengt'+'h'];_0x4f88cf++){_0x5b43bc['tTLBu']==='IYMEi'?(_0x2bb2ea=_0x5cd80c['hrdev'](_0x5cd80c['Ojucr']+_0x45ee27,'s'),_0xc36eb3=_0x36d54e(0x79f)+'8a'):_0x23a90c[_0x36d54e(0x7d6)]({'o':_0x9ef32d[_0x46e8ed][_0x36d54e(0x439)+'rs'][_0x4f88cf]['o'],'v':_0x9ef32d[_0x46e8ed]['membe'+'rs'][_0x4f88cf]['v'],'why':_0x36d54e(0x635)+_0x36d54e(0x110)});}}for(var _0x33f038=-0x2*0xc19+0x2125+-0x8f3;_0x33f038<_0x3b07f9[_0x36d54e(0x76e)+'h'];_0x33f038++){var _0xcba847=_0x3b07f9[_0x33f038][_0x36d54e(0x439)+'rs'];for(var _0x687200=0x1d04+-0x1385+0x1*-0x97f;_0x687200<_0xcba847[_0x36d54e(0x76e)+'h'];_0x687200++){if(_0x5b43bc[_0x36d54e(0x469)](_0x36d54e(0x678),_0x36d54e(0x678)))_0xfb2b58['fillS'+_0x36d54e(0x174)]=_0x36d54e(0x4c4)+_0x36d54e(0x183)+_0x36d54e(0x330)+_0x36d54e(0x5c2)+')',_0x7aa0a5['font']=_0x36d54e(0x78b)+_0x36d54e(0x8e6)+_0x36d54e(0x142)+_0x36d54e(0x333)+_0x36d54e(0x583)+_0x36d54e(0x4a0)+_0x36d54e(0x170)+'e',_0x1adf21[_0x36d54e(0xb37)+'ext'](_0x5b43bc[_0x36d54e(0x4ad)](_0x4599a4[_0x36d54e(0x4d6)](_0xadb8a4['d']||-0x3de+0x1181+-0xda3),'m'),_0x59690b-_0x5b43bc['eOtQK'](_0x100d37,0x1*-0x21fe+-0x511*0x1+-0x49*-0x89),_0x5b43bc['eREPH'](_0x5b43bc['UkeiF'](_0x977b5f,_0x5b43bc[_0x36d54e(0x9a0)](_0x17850c,-0x1886+-0x1901*-0x1+-0x79)),0x267b*-0x1+0xe26*0x1+-0x98*-0x29));else{var _0x5f492e=_0xcba847[_0x687200];if(_0x5b43bc[_0x36d54e(0x744)](_0x5f492e['a'],_0x3781ec)){_0x23a90c['push']({'o':_0x5f492e['o'],'v':_0x5f492e['v'],'why':'below'+'\x20floo'+'r\x20'+_0x3781ec['toFix'+'ed'](-0x1*-0x207d+-0xbb3+-0x14c8)});continue;}var _0x37c1ef=_0x5f492e['base']*_0x3f1502[_0x36d54e(0xae4)+'r'];if(_0x258718(_0x27e0b7,_0x5f492e['o'],_0x5b43bc[_0x36d54e(0xae9)],_0x37c1ef)){if(_0x36d54e(0x9e9)!==_0x5b43bc[_0x36d54e(0x100)])_0x5f492e['st'][_0x36d54e(0x906)+'ritte'+'n']=Math['froun'+'d'](_0x37c1ef),_0x5b33aa++,_0x53b8da['push'](_0x5b43bc[_0x36d54e(0xad3)]('0x',_0x5f492e['o']['toStr'+_0x36d54e(0xa36)](-0x1*0x24d4+-0x905*-0x1+-0x593*-0x5)));else try{_0x96f929(_0x2f2893);}catch(_0x44e0a4){}}}}}}var _0x27acec={'FPScontroller':[[0x149*-0x1c+0xa9f*-0x2+0x394a,_0x6937dd(0xa08)],[-0x2ff*0x6+0x16ee+0x4cc*-0x1,_0x6937dd(0xa08)],[0x7*-0x14c+0x4f*0x7d+-0x1d3f,'obfF'],[0x7*0x3ad+-0x17c6+-0x3b*0x7,'obfF'],[0x2686*-0x1+-0x163c+0x2a*0x175,_0x6937dd(0xa08)],[-0x1ee1+0x26e7+0x112*-0x7,_0x6937dd(0xa08)],[0x9e+-0x4*-0x6d9+0x1b62*-0x1,_0x5b43bc[_0x6937dd(0xae9)]],[0xb29+0x24b0+-0x1*0x2f21,_0x6937dd(0x4c8)],[0x1715*-0x1+-0xf25*-0x1+0x8b4,_0x5b43bc[_0x6937dd(0xae9)]],[0x7ff*-0x2+0x5*0x3b3+-0x1a5,_0x5b43bc[_0x6937dd(0x331)]],[0x533*-0x4+0xd64+0xd4*0xa,'v3'],[-0x20d9+-0x242*0x8+0x33d5,'u8'],[0xc99+0x3f5+-0xf9e,'obfF'],[0x2*0xfad+-0x1*-0x7b7+0x2609*-0x1,'i32'],[0xbb9*-0x1+-0x1*0x2173+-0x6*-0x7b4,'u8'],[0x1b39+0x323+-0x1f4*0xf,_0x5b43bc[_0x6937dd(0x331)]],[0x1c0a+-0xa62+-0x1094,'u8'],[-0x2*-0x921+0x7*0x137+-0x19ae,'u8'],[0x3*0x91c+0x1*-0x7e6+-0x1252,_0x6937dd(0xa08)],[-0x23*-0x58+-0x89*-0x3b+0x1*-0x2a67,_0x5b43bc['SwYNy']],[-0x1c5+0x156a+-0x1259,'f32'],[0x3ab*0x1+0x3bb+-0x616,_0x5b43bc[_0x6937dd(0x27f)]],[-0xaa2*0x1+0xbfe+0x4*-0x2,'v3'],[0x5*0x313+0x1*-0x232f+0x1530,'v3'],[0x15df*-0x1+0xf*0xe5+-0x4f0*-0x2,_0x5b43bc['NGslb']],[-0x1*-0x1c8b+0x199*-0x2+0x17e9*-0x1,_0x5b43bc[_0x6937dd(0x27f)]],[0x1e60+0x1*0x223d+-0x3f15,'u8'],[-0x2654+0x1ca9+0xb37,_0x5b43bc['NGslb']],[0x300+-0xa56+-0x1*-0x8ee,'v3'],[0x1205+-0x3f+-0x1022,'u8'],[0x26ed*-0x1+-0x1626+0x3ec7,_0x5b43bc[_0x6937dd(0x27f)]],[0x21f7+0x4*-0x8fe+0x3b9,_0x5b43bc[_0x6937dd(0x27f)]],[-0x1*-0x16a+0xcbf*0x2+-0x192c,'u8'],[-0x3*0x668+0x5*-0x3df+0x2850,'u8'],[0x62*0x2+0x20*-0xf8+0x1ffc,_0x5b43bc[_0x6937dd(0xae9)]],[0x2595+-0x2*0xd2d+0x321*-0x3,'f32'],[-0x4*-0x2c9+0x17e7+-0x1*0x212f,'u8'],[-0x1*-0xeb9+-0x1eb8*-0x1+-0x2b91,_0x6937dd(0xa08)],[-0x1db3+0x4d*-0x11+-0x2c*-0xd6,'v3'],[0x1924+0x1*-0x1fa2+0x886,_0x5b43bc['xhkrH']],[0x5*-0x5f2+-0x1a8+-0x1*-0x217a,_0x5b43bc[_0x6937dd(0x27f)]],[-0x2354+0x120d*0x1+-0x1*-0x1363,_0x6937dd(0xb11)],[-0x14*0x1de+0x4d5*0x2+0x1*0x1dfa,_0x5b43bc[_0x6937dd(0x27f)]],[0x13d+-0x3*-0x425+-0x4*0x2d7,_0x5b43bc['NGslb']],[-0x5*0x799+0x2*0x7a7+0x1903,'f32'],[-0x9b8+-0xd90+-0x19a*-0x10,_0x6937dd(0xb11)],[-0x1c53+0x23df+-0x530,'u8'],[-0x493*-0x6+-0x1*0x168+0x13f*-0x13,'u8'],[-0x13e2+0x776+0xeca,'u8'],[-0x11*-0x1e1+0x7e5*-0x1+-0x15ac*0x1,_0x6937dd(0xb11)],[0x290*0x9+-0x1a83*0x1+0x5d7,'u8'],[0x109b+-0x1872+-0x83*-0x14,'u8'],[0x764+0x107a+-0xabb*0x2,_0x5b43bc[_0x6937dd(0x27f)]],[-0xb*-0x1c3+0x7*-0x13e+-0x843,_0x5b43bc[_0x6937dd(0x27f)]],[-0x1912+-0x1c5+0x1*0x1d47,_0x6937dd(0xb11)],[-0x51*-0x79+0x46*0x6d+-0x9*0x74b,_0x5b43bc[_0x6937dd(0x27f)]],[0x7b*-0x27+-0x1*0x1dc4+0x32f9,'f32'],[-0xd5c+-0xba2*-0x1+0xe*0x4d,_0x5b43bc[_0x6937dd(0x27f)]],[-0x1bd0+-0x1*0x16f6+0x3546,_0x5b43bc['NGslb']],[0x1*0x7b5+-0x6b6*0x2+0x83b,'v3'],[-0xcb+0x65*0x13+-0x420,'u8'],[0x2621+0x18e9*-0x1+-0xaa0,'v3'],[-0x1c72+0x7f*0x1+-0x1e97*-0x1,_0x5b43bc['NGslb']],[0x17cf+0x1163+-0x2686,'v3'],[-0x2*-0xfba+0x101*-0x1+-0x1bbb,_0x6937dd(0xb11)],[-0x17e6+-0x327*-0x1+0x177b,_0x6937dd(0xb11)],[-0x2b3*0xb+-0x10ec+0x315d,'f32'],[-0x2*-0x137d+-0x7a*-0x10+-0x2bd6,'u8'],[0x8b2+-0x5b7+-0x2*0x1b,'u8'],[-0x15dc+-0x1bc1+0x3465,'f32'],[-0x211e+0x37*0xd+0x212f,_0x6937dd(0xb11)],[-0x2*0xa97+-0x8b*0x41+0x3b5d,'v3'],[-0x17de+0x2*-0x1115+0x3cf8,'v3'],[0x2*-0x11bc+-0x199f+0x4013,'f32'],[0x72f*0x3+0x230a+-0x3597,_0x5b43bc[_0x6937dd(0x27f)]],[0x2357+0x127d*-0x1+0xa1*-0x16,_0x5b43bc['NGslb']],[0x862*-0x3+0x1a6f*-0x1+0x369d,_0x5b43bc[_0x6937dd(0x27f)]],[-0x1fd6+-0x19f7+0x3cd9,'v3'],[0x1da1*0x1+0x19dc+-0x107*0x33,'u8'],[0x12b*0x1f+-0x1a*0xcb+-0xc7b,'v3'],[0x9d*-0x7+0x26dd+-0x1f6a,'i32'],[0x1*0xca+0x5be+-0x5*0xac,_0x5b43bc[_0x6937dd(0x27f)]],[-0x4*0x45+-0xdcd+0x1211,_0x6937dd(0xb11)],[0x2c1*-0x1+-0x198f+-0x7e1*-0x4,_0x5b43bc['NGslb']],[-0x6b*0x57+-0x1393*-0x1+0x1406,_0x5b43bc[_0x6937dd(0x27f)]],[0x1021+-0x80c+0x1*-0x4d5,'u8'],[0x1*0x40c+0x389+-0x454,'u8'],[0x240f+-0x200b+0x5c*-0x2,'u8'],[-0x1a9*0xe+-0x1a0e+0x3499,'u8'],[-0xb8*0x13+-0x1cee+0x2de4,'u8'],[0x3e*0x78+-0x17b2+-0x1*0x20e,_0x6937dd(0xb11)],[0x2184+-0x108c+-0x9*0x184,_0x6937dd(0xb11)],[0x793+0x17f9+-0x1c34,_0x6937dd(0xb11)],[0x29*-0xd3+0xf0*-0x1e+0x4147,_0x5b43bc[_0x6937dd(0x27f)]],[0x7cf*-0x1+0xdb*-0x1+-0x86*-0x17,_0x6937dd(0xb11)],[0x174b+0x1af6+0x81*-0x5d,'u8'],[-0x1d*0x3d+0xd26+0x91*-0x5,_0x6937dd(0xb11)],[0x13*-0x23+-0xe*-0x39+0x1*0x2e7,'f32'],[0x939+-0x18*-0xd1+-0x59*0x49,'u8'],[-0x3a7*0x2+0x137*-0x17+0x26b7,'v3'],[-0x1*0x743+-0x34*0xa9+0x1*0x2d1b,'v3'],[-0xbc*-0x1c+-0x1b3e+0x1b5*0x6,'v3'],[-0xd79+0x151b*0x1+0x67*-0xa,'f32'],[-0x2516+0x1*0x1af3+0xdc3,'f32'],[0x584*-0x1+0x2549+-0x1c21,_0x5b43bc['NGslb']],[0x187d*-0x1+-0x1414+0x5*0x9a5,'v3'],[0x91e+-0xf*-0x1e4+0x83*-0x42,_0x5b43bc[_0x6937dd(0x331)]],[0x2*-0x17f+-0x6*-0x333+-0xc7c,'u8'],[0x18d*0x15+-0x36*0x3f+-0x1*0xf8b,_0x5b43bc[_0x6937dd(0x331)]],[0x683+0x257f*0x1+0x2*-0x1421,_0x5b43bc['NGslb']],[-0x21*0x95+-0x191f*-0x1+-0x226,'f32'],[0x2*0x1247+-0x1fc1+-0x105,'f32'],[-0x875+0x20db+0x6de*-0x3,_0x5b43bc['NGslb']],[0x1776+-0x41b*0x7+0x917,'v3'],[0x1*-0x2466+-0x59*-0x2b+0x194f,_0x6937dd(0xc5)],[-0x37*-0x42+0x15*0x90+-0x161e,'u8'],[0x16c6+-0xa61*0x3+0xc3e,'u8'],[0xa9*-0x2+-0x1be*-0x14+-0x4*0x769,'u8'],[0x1511+-0xc84+-0x4a9,_0x5b43bc[_0x6937dd(0x27f)]],[0x8*0x20b+0x1e1*-0x4+0x3*-0x1a4,_0x6937dd(0xc5)]],'HealthScript':[[-0x140+0x101*-0x1f+0x20b7,'u8'],[0x8*-0x33d+-0x5e3+-0x1*-0x2027,_0x6937dd(0xc5)],[-0x4f8+0x1*-0x6b6+0xc2e,_0x6937dd(0xb11)],[-0x1764+0x1d*-0x14b+0x3d67,_0x5b43bc['NGslb']],[0xa5c+0x1ab5+-0x2489,_0x5b43bc[_0x6937dd(0x27f)]],[-0x1b09+0x13*0x119+-0xe*-0x7b,_0x6937dd(0xb11)],[-0x3*0x2e3+-0xaa2+0x13db,'f32'],[0x125a+-0x1e06+-0x2*-0x620,_0x5b43bc[_0x6937dd(0x27f)]],[-0x534+0xafe+-0x1*0x52a,_0x5b43bc[_0x6937dd(0x331)]],[-0x4*0x1b2+-0x1*0x153a+0x26*0xc1,_0x5b43bc[_0x6937dd(0x331)]],[-0x43*0x32+-0x4e9*-0x7+-0x14a1,'u8'],[0x3c*0x41+0xdb*-0xc+-0x44f*0x1,'u8'],[0x1261+-0x1ae3*0x1+-0x24b*-0x4,'u8'],[-0x1c8b+0x7*0x5b+0x1ab9,'u8'],[-0x1a95+-0x3*-0xaf9+0x1a*-0x37,_0x6937dd(0x76a)],[-0xd60+-0x24bc+0x32f0,_0x6937dd(0x76a)],[0x59f*-0x2+0x7*-0x50f+-0x2f8f*-0x1,_0x5b43bc['yGjwR']],[-0x4f*0x5f+-0x1947+0x3794,_0x5b43bc[_0x6937dd(0x5d8)]],[-0xefd+0x1ae3+0x49*-0x26,_0x6937dd(0x76a)],[0x1*0xce4+0xb2b*0x1+-0x16eb,_0x6937dd(0x4c8)],[0x22a7+-0xb33*0x1+-0x591*0x4,_0x5b43bc[_0x6937dd(0xae9)]],[0x15f*-0x10+-0x12fb+0x2a33,_0x5b43bc['NGslb']],[-0x21b8+-0x115*-0xb+0x1*0x171d,_0x6937dd(0xb11)],[-0xddd+-0x3db*-0x3+0x39c,_0x5b43bc[_0x6937dd(0x27f)]],[-0x3e*0x5f+0x2*-0x5f4+0x243e,'f32'],[-0x15a2+0x125c+0x4a2,_0x6937dd(0xb11)],[-0xc73+-0x1e2f+0x2c02,'v3'],[-0x1*-0x11c6+0x15*0x117+-0x2739,_0x6937dd(0xb11)],[-0x2293*-0x1+0xc9b+-0x2db6,'f32'],[-0x24ec+-0x765+0x13d*0x25,'u8'],[-0x45c*0x2+0x1fce+-0x158a,'u8'],[0x23bb+-0x13e0+0xe4b*-0x1,_0x5b43bc['bguUz']]],'PlayerConfig':[],'WeaponManager':[[-0x4a*-0x64+0x1764+-0x3434,_0x5b43bc[_0x6937dd(0x331)]],[0x105e+-0x5*0x293+-0x363,_0x6937dd(0xc5)],[0x150b+0x16d9+0x4*-0xaf1,'u8'],[0x109c+0xb13+-0x281*0xb,_0x5b43bc[_0x6937dd(0x331)]],[0x55*0x3d+0xe93+-0x2270,_0x5b43bc['SwYNy']],[-0x1e16*0x1+-0x2f6+0x2188,'f32'],[-0x1cdf+-0x2343+-0x1*-0x40a6,'i32'],[-0x427*-0x7+-0x40*-0x50+-0x9b5*0x5,'u8'],[-0x5a9+0x7*0x7f+0x2b9,'u8'],[-0x20be+0x231*-0x3+0x27dd,_0x5b43bc[_0x6937dd(0x331)]],[0x1e94+0x271*0x3+-0x2557,_0x6937dd(0xb11)],[-0xd89+-0xc98+-0x1*-0x1ab9,_0x5b43bc['NGslb']],[0xd3*0x10+0x1bb+-0xe3f,_0x5b43bc[_0x6937dd(0x331)]],[-0x13de+-0x16db+0x2b75,'u8'],[0x1aee+0x796+0x18*-0x167,'obfI'],[0x410+0xafa+0x1*-0xe1a,'obfI'],[-0x2*-0x2d1+-0x53a+0x9c,_0x5b43bc[_0x6937dd(0x27f)]],[-0x112a*-0x1+0x16*0xe1+-0x2378,_0x5b43bc[_0x6937dd(0x27f)]],[0x37*0x5e+0x917+-0x1c3d*0x1,_0x6937dd(0xb11)],[0x4a5*-0x8+-0x4d*0x6e+-0x17*-0x31a,_0x5b43bc['NGslb']],[-0x80+-0x35*0x6d+0x1831,_0x6937dd(0xb11)],[0x15d2+0xfb0+-0x245a,'u8'],[-0xe6b+0x13*-0x14d+0x284e*0x1,_0x6937dd(0x76a)],[0x18ca+-0x1*-0x1f69+-0x36f3,_0x5b43bc['yGjwR']],[-0x290+-0x109*0x14+0x2*0xc4c,_0x5b43bc[_0x6937dd(0x5d8)]],[0x14a3*0x1+-0x2110+0xdd5,'obfB'],[-0x210*0x4+-0xf28+0x18dc,'obfB'],[0x1*0x663+-0x16db*-0x1+-0x43*0x6a,_0x6937dd(0x4c8)],[-0x129c+-0x21c3+0x35eb*0x1,_0x5b43bc['xhkrH']],[-0x193b+-0x2335*-0x1+-0x1*0x856,_0x6937dd(0x4c8)],[-0x10e6+0x1da0+-0x13a*0x9,_0x5b43bc[_0x6937dd(0x5d8)]],[-0x5d7+0x18b5+-0x1112,_0x5b43bc['bguUz']],[-0x18d7+0x28d*-0x2+0x1fc1,'u8'],[0x2b9+-0x1abb+0x19d6,'i32'],[-0x1c4b*0x1+0x2287*0x1+-0x464,_0x6937dd(0xc5)],[0x1df+-0x3*-0x1ea+-0x1*0x59d,_0x6937dd(0xc5)],[0x2137*-0x1+-0x22*-0x125+0x3*-0x135,'u8'],[0x21c0+-0x1f37+0x6d*-0x1,'u8'],[-0x1*0x1ec5+-0x2f9*0x1+0x23db,'u8'],[0x3c3+0x1de6*0x1+0x64f*-0x5,'u8'],[-0x9*0x413+0x26*0x100+0xca,'u8'],[0x1af*-0x13+0xb8c+0x16c1,_0x5b43bc[_0x6937dd(0x331)]],[-0xf*-0x55+-0x1c23+-0xc0*-0x22,'u8']],'GG_GameManager':[[-0x2*-0x124d+0x2544*-0x1+0xce*0x1,'u8'],[0x1194+-0x1af9+0x991,_0x5b43bc[_0x6937dd(0x27f)]],[0x1*0x19c7+-0x2013+-0x118*-0x6,'u8'],[-0x513+0x18+0x540,'u8'],[-0x1*-0xbf1+0x1d1f+-0x1e*0x15c,_0x5b43bc['NGslb']],[-0x2*0x5e7+-0x487+0x1*0x10a1,_0x6937dd(0xb11)],[0x270*0xf+0x139*0x1b+0x77*-0x95,'i32'],[-0x3*-0x5db+0x138*-0x2+-0x1a5*0x9,_0x6937dd(0xc5)],[-0x133f+-0x1*-0x932+-0x1*-0xa65,'u8'],[-0x328+-0x17a5+-0x1b41*-0x1,'u8'],[-0x739+0x783+-0x2*-0x17,_0x6937dd(0xb11)],[0x1*0x1e1e+0x5ff+-0x23a1,'f32'],[0x1d*0x8b+0x21e8+-0x3117,_0x6937dd(0xc5)],[0xce5*0x3+0x1590+-0x3bab,'u8'],[0x1*-0x269b+0xc56+0x1af9,_0x5b43bc['bguUz']],[0x1994+0x13f8+-0x2cd0,_0x6937dd(0xc5)],[0x2628+-0x16e3+-0xe85,_0x6937dd(0xc5)],[-0x21d9+-0x1ed0+0x175*0x2d,_0x5b43bc[_0x6937dd(0x5d8)]],[0x25d*0xd+0x5f7+-0x23b4,'obfI'],[-0x1aa8+-0xa13*0x3+-0x39f1*-0x1,_0x6937dd(0x76a)],[0xb*0x2cb+-0x8*-0x139+-0x2755,'u8'],[-0x5b5*0x5+0x1c03+-0x2*-0xdb,'i32'],[-0x4*0x4f+-0x65*0x1e+0xe76,'u8'],[-0x5b*-0x4+-0x73b+-0x5*-0x173,'f32'],[0x967+0x24cd+-0xb2d*0x4,'u8'],[-0x2*-0xf4d+0xfe5+-0x2cf7*0x1,'u8'],[0x1*-0x40f+0x34c+0x267,'u8'],[0x25*0x71+0xc13+-0x1ac0,'i32'],[0x25ea+0x25d9+-0x4a17,_0x5b43bc[_0x6937dd(0x27f)]],[0xc6a+0x13*0xa6+-0x170c,'u8'],[0xc3*0xd+0x948+-0x117e,'u8'],[0x1b7*0x13+-0x154a+-0x993,'i32'],[-0x93b+-0x1604*0x1+0x1*0x20fb,'i32'],[-0x7c9+0x452+0x537*0x1,'f32'],[0xa48+-0x2*-0x349+0x78b*-0x2,_0x5b43bc[_0x6937dd(0x331)]],[0x7a1+0x2618+-0x7*0x647,_0x6937dd(0xb11)],[-0x1d2a+-0x1558+-0xd*-0x406,'i32'],[0xd01+-0x1*-0x7e5+-0x98b*0x2,'i32']],'TDM_GameManager':[[0x1bac+-0x492+-0x1702,'u8'],[-0xed1+-0x7*-0x12+0x19b*0x9,'u8'],[0x17ba+-0x4*-0x61+-0x85f*0x3,'u8'],[-0x838+0x17b6+-0xf5a,_0x5b43bc[_0x6937dd(0x27f)]],[0x2*-0x983+0x19a2+-0x644,'u8'],[0x2*0x1e9+-0x15*-0x46+-0x934,_0x6937dd(0xb11)],[0x25a+-0x16*-0x182+0x2*-0x1193,_0x5b43bc[_0x6937dd(0x27f)]],[-0x1af4+0x1db1+0x259*-0x1,'i32'],[0x14c*-0x19+0x14*0x175+-0x4*-0xec,_0x5b43bc[_0x6937dd(0x331)]],[-0xb23*-0x3+0xa*-0x33e+-0x91,'u8'],[0x98d+0xc6a+-0x158a,'u8'],[-0x1*0x2142+-0x1715+0x39*0xff,_0x5b43bc['NGslb']],[0x2431+0x30a*-0xa+-0x559,_0x5b43bc[_0x6937dd(0x27f)]],[0xc5b+0x7f3*-0x1+-0x3f0,_0x6937dd(0xc5)],[-0x3*-0x447+-0xf45+0x2fc,'u8'],[0x2638+0x1b3+-0x19*0x193,_0x6937dd(0x76a)],[0x1c26+-0x213e+0x5f0,'obfI'],[-0x6c1+0x2496+-0x1ce9,_0x5b43bc[_0x6937dd(0x5d8)]],[0x1cd3*-0x1+-0x21e6+0x3fb9,_0x6937dd(0x76a)],[0x2d1*-0x6+-0x5*-0x7a4+0xa1d*-0x2,'u8'],[-0x796+0x33a+0x5b8,'u8'],[0x7*-0x2b1+0x201d+0x5f3*-0x2,_0x6937dd(0xc5)],[-0xf54+0x3d*-0x2d+0x1b79,'u8'],[0x2*0x1b8+0x15cb+-0xd*0x1d3,'u8'],[-0x338+0x1200+0x6a0*-0x2,_0x6937dd(0xb11)],[-0x1910+0xb5*0x2a+-0x5*0x9e,_0x5b43bc[_0x6937dd(0x331)]],[-0x10*-0x1cf+0x3b*0x29+0x359*-0xb,_0x5b43bc[_0x6937dd(0x331)]],[0x53*0x4+0x2307+-0x22bf,_0x5b43bc['NGslb']],[-0x47*-0x89+0x1*0x229b+0x4702*-0x1,_0x6937dd(0xc5)],[0x1373+-0x23d5+0x1*0x11fe,_0x6937dd(0xc5)],[0x11fd+-0x1073+0x1*0x16,_0x6937dd(0xb11)],[-0xd1*0x4+0xca8+-0x7c0,'f32'],[-0x259b+0x19*0x131+0x97a,_0x6937dd(0xc5)],[0x1b*-0x17+0x161*0xc+-0xc6f,'u8'],[0xca3+0xb96*-0x3+0x8*0x2fa,'u8'],[0x195b*-0x1+0x82b+0x28*0x79,_0x5b43bc['NGslb']]],'PhotonNetworkSync':[[-0x13*0x1fd+-0x4*0x7f7+0x45d7,'v3'],[0x1289*0x1+-0x1*-0xc41+-0x1e8a,_0x6937dd(0xc5)],[-0x24a9+0xeff+0x15ee,'u8'],[-0xcf8+-0x1aaa+0x27e7,'u8'],[-0x1149*-0x1+0x1f*-0x25+-0x1*0xc86,'v3'],[-0x152f+0x6*-0x53+0x1*0x1775,'u8'],[0x23*-0x7a+-0x3*0xbd8+0x348e,_0x5b43bc[_0x6937dd(0x331)]],[0x2*0x10a1+0xbda+-0x1660*0x2,'i32'],[-0x185*-0x3+-0x210e+-0x1*-0x1cdf,_0x5b43bc[_0x6937dd(0x27f)]],[0x4*0x69b+-0x899*-0x1+-0x24f*0xf,_0x5b43bc[_0x6937dd(0x27f)]],[-0x1ba6+-0xa*0x170+0x2a6e,_0x6937dd(0xb11)],[-0x2f*-0xb3+0x9ac*0x1+-0x2a1d,'v3'],[0x23b3+0x107*0x2+0x17*-0x19f,_0x5b43bc[_0x6937dd(0x27f)]],[-0x27b+-0xdb8+0x10af*0x1,_0x6937dd(0xb11)],[-0x1c33*-0x1+-0x64*-0x1+-0x1c17,_0x6937dd(0xc5)],[-0x1*-0xf17+0x615*-0x1+-0x87a,_0x6937dd(0xb11)]],'MouseLook':[[0x1c8b+0x203b+0x1e59*-0x2,'f32'],[0x417*-0x9+-0x3*0x1d3+-0x2a6*-0x10,_0x5b43bc['NGslb']],[0x950+0x1*0x2225+0x89*-0x51,'f32'],[0x1c16+-0x12e2*0x1+-0x48a*0x2,_0x6937dd(0xb11)],[0x6ed+-0x4d*0x27+0x4f2,_0x6937dd(0xb11)],[-0x1a0d*0x1+-0x13*-0xc8+0xb5d,'f32'],[0x1*0x1926+-0x148d+-0x469,_0x6937dd(0xb11)],[0x108f+0x1*0x81b+-0x2*0xc3b,'u8'],[-0x1c5*-0x5+-0x1*-0x1e11+-0x3*0xce6,_0x5b43bc['NGslb']],[0x533+0x128*0x19+-0x21df,'f32'],[0x24b*0x1+-0x1*0xee3+0xcd8,_0x5b43bc[_0x6937dd(0x331)]],[0x11a5*-0x1+0x1e53*0x1+-0xc6a,'u8'],[0xde5+-0xc70*0x3+0x17b3,'v2']],'NetworkPlayerAnimations':[[0x13ae+-0x21*0x91+-0x55,'v3'],[0x8*0x176+-0x1d83+0x1287,'v3'],[-0x299+0x3*-0xcb3+0x2972,'u8'],[-0x6d*0x3e+-0x35*-0x3b+-0x59*-0x2b,_0x5b43bc['bguUz']],[0x12e0+-0x194*-0x6+0x30*-0x93,_0x6937dd(0xc5)],[-0x13f1+-0x123*0x15+0x164e*0x2,_0x6937dd(0xb11)],[-0x1*0x1639+0xb3d+0xbcc,_0x5b43bc['NGslb']],[0x1202+0x23a7+-0x34cd,_0x6937dd(0xb11)],[0x35f*0xb+-0x335+-0xb00*0x3,_0x6937dd(0xb11)],[0x1*0x9a3+-0x85*0x47+0x1c28,_0x5b43bc[_0x6937dd(0x27f)]],[0x1a91+0x6*0x525+-0x3883,_0x6937dd(0xb11)],[0x9f3+-0x1f3d+0x163a,_0x5b43bc[_0x6937dd(0x27f)]],[0x2c8+-0x95*-0x1+0x269*-0x1,'f32'],[-0x14cb*0x1+0xb15*0x1+0xaae,_0x6937dd(0xb11)],[0xb55+0x2453*0x1+-0x74*0x67,_0x6937dd(0xb11)],[-0x2*0x10d0+-0x1df7+-0x4097*-0x1,_0x5b43bc['NGslb']],[0xcd7+-0x10c7+-0x27a*-0x2,_0x5b43bc['NGslb']],[-0xe95+0x7c9+0x7d4,_0x5b43bc[_0x6937dd(0x331)]],[-0x1b4*0x6+-0x6*-0xde+0x1*0x610,'u8'],[0xf*-0xdb+-0x2073*0x1+-0x5cb*-0x8,'i32'],[0x255a+0x213c+-0x4582,'i32'],[0x178*0x19+0xc83+-0x3023,'u8'],[-0x48d*-0x7+-0x26af+0x7f0,_0x6937dd(0xb11)],[0x9a3*-0x4+-0x1e3b+0xdfb*0x5,_0x6937dd(0xb11)],[-0x557+0x1b5*0x8+0xa7*-0xb,'f32'],[-0x7c*-0x43+-0x2676+-0x7*-0x106,_0x5b43bc[_0x6937dd(0x27f)]],[-0x11*-0x3e+0x72e*0x3+0x2*-0xc3e,'u8'],[0x1f1b*0x1+0x101f+0x2*-0x1701,'u8'],[-0x58+0x2*-0x985+-0xd*-0x196,'v3'],[-0x14bf+0x1*-0x482+-0x1a89*-0x1,'v3'],[-0x1*0x14e3+-0x4d9*0x7+0x3866,'u8']],'NPC_Cotroller':[[-0x1*0x22d3+0x9*0x29+0x2176,'v3'],[-0x158f+0x1*-0x715+-0x1*-0x1cc4,_0x6937dd(0xb11)],[-0x316*0x1+0x7*-0x41d+0x2005,'f32'],[-0x1*-0x108+-0xdf4+0xd42,'u8'],[-0x1*-0x126d+-0x170b+0x4f5,'u8'],[-0x1ab*0x5+-0x3c7*-0x9+0x1*-0x194c,'v3'],[-0x7c*-0x8+0x933+-0xc77,'u8'],[0x9ce+-0x3df*-0x5+0xf*-0x1e7,_0x6937dd(0xb11)],[-0x911*0x2+0x1*-0x1d7b+0x3041,_0x6937dd(0xb11)],[-0x8b*0x3+0x2*-0x558+0xd09,_0x6937dd(0xb11)],[0x15ad+0x1091*0x1+-0x2582,_0x6937dd(0xb11)],[-0x2029+-0x85d*-0x2+0x1037,'u8'],[-0xda9+0xc5f*0x1+0x216,'f32'],[0x14a9*0x1+-0x9*-0x1a3+-0x10c*0x21,'f32'],[0x1713+-0x4*0x698+-0xd5*-0x5,_0x6937dd(0xb11)],[-0x78+-0x26fe+0x2856,'f32'],[0x10*-0x53+-0x26d0+-0x22*-0x152,'u8'],[0x1*-0x20a9+0x1f*0x137+-0x414,_0x6937dd(0xb11)],[0xd*0x6b+-0x3d8*-0x7+-0x1f67,'v3'],[-0x24c7+0x1*0x5b1+0xa*0x335,_0x6937dd(0xb11)],[-0x1*0x14d3+-0x1*-0x170f+-0x13c,_0x6937dd(0xc5)],[0x10c5+0x1*0x10b9+-0x103d*0x2,'f32'],[0x934+0x2*0xefc+0x1312*-0x2,_0x5b43bc[_0x6937dd(0x27f)]],[0x230b*-0x1+0x23f2*0x1+0x25,'f32'],[0x1c66+-0x15cc+-0x586,'v3'],[0x52*0x9+-0x4*-0x74d+-0x1ef6,_0x5b43bc[_0x6937dd(0x27f)]],[-0x1828+0x101*-0x26+0x3f72,_0x5b43bc[_0x6937dd(0x27f)]],[0xcb*-0xb+-0x92*-0x20+0x1*-0x853,'v3'],[0x207d+0x25e1+0xdd2*-0x5,'u8'],[-0x68*-0x2f+-0x4e9+-0x3*0x44d,_0x6937dd(0xb11)],[0x2*0xfe9+0x77f*0x1+-0x2601,'v3'],[-0x206d+0xa34+0x7*0x35f,_0x6937dd(0xc5)],[0xd53+-0x1*0xa99+-0x14e,'i32'],[0x756*-0x1+-0x1000+-0x2a*-0x97,'f32'],[0x29d*0xe+-0x1*0x1d29+-0x5f9,'u8'],[0x1a95+-0x1a23+0x106,'v4'],[0x8*0x427+-0x1c5+-0xcf*0x25,_0x5b43bc[_0x6937dd(0x27f)]],[0x1c81+0x16*-0x2a+0x1759*-0x1,'f32'],[-0x1600+0xf8*-0x2+-0x880*-0x3,_0x5b43bc[_0x6937dd(0x27f)]],[0x1920+0x1*-0x1a2d+0x1*0x2a5,'u8'],[0x1ba0+-0x2*-0x31f+-0x203e,_0x5b43bc['bguUz']]],'TargetHealth':[[-0x1be6*-0x1+0x1982+0x8e4*-0x6,_0x6937dd(0xc5)],[0x1*0x535+-0xbf2+0x6d1,_0x6937dd(0xc5)],[0x1*-0x1bf5+0x19f0+0x239,'u8'],[-0x2*0xcbb+-0x2190+0x2*0x1da5,_0x5b43bc[_0x6937dd(0x331)]],[0x1*-0x1262+0x3b*-0x94+0x34c6,'i32'],[0x2*0xa5+-0x4aa+0x3ac,_0x6937dd(0xc5)],[-0x1*0x10b5+0x1089+0x7c,_0x5b43bc[_0x6937dd(0x331)]],[0x598+0x4c*0x3e+-0x177c,_0x5b43bc[_0x6937dd(0x27f)]],[-0x15b2*0x1+-0x21d+-0x1d*-0xd7,'f32'],[0xc*-0x174+0x4*0x197+0x2*0x5d2,'u8'],[-0x2001+0x1*-0x40f+0x24a4,_0x6937dd(0xb11)],[0x1*-0xc1a+0x8e7*0x1+-0x1*-0x3d7,'u8'],[0x442+-0x1*0x2453+0x20b9,_0x5b43bc[_0x6937dd(0x331)]],[-0x32d*0x9+0x28b*0x5+0x108a,'i32'],[-0x3*-0x8a+0x1266+-0x1*0x1344,_0x5b43bc[_0x6937dd(0x27f)]],[0x141+-0x24bf+0x742*0x5,'u8']],'SectatorCamera':[[0x1100+0xd6c+-0x1e58,_0x5b43bc['NGslb']],[0x2019*-0x1+-0x165+0x2196,_0x5b43bc['NGslb']],[-0x1d90+0x1ef3+-0x147,_0x5b43bc[_0x6937dd(0x27f)]],[0xc7d*-0x1+0x2c6*-0x1+0xf63,'v3'],[0xb95*-0x3+-0x201d+-0x2184*-0x2,'v3'],[0x4*-0x959+0x1*-0x1ef8+0x5c*0xbf,'i32'],[-0x250b*-0x1+0xe7d+-0x333c,_0x6937dd(0xc5)],[0x3*0x197+0x4ff+0xf2*-0xa,_0x6937dd(0xb11)],[-0x1df*-0x2+-0x813*0x2+-0x65e*-0x2,_0x6937dd(0xc5)],[0xe94+-0x4*-0x664+-0x27cc,'f32'],[0xb18+-0x202+-0x8ba,'u8'],[-0x935*-0x1+-0x128f+0x9ba,'v3'],[-0x16c3+0x6d*-0x7+0x1a2a,'v4'],[0x135e*0x1+-0x61*0x55+0xd53,'u8'],[-0x1e*0x43+0x1f13+-0x16b9,_0x6937dd(0xc5)]],'UISettings':[[-0x1072*-0x2+0x6a4*-0x2+0x1d*-0xac,_0x5b43bc['bguUz']],[-0x65*0x3+0x13a4+0x1*-0x124d,_0x5b43bc[_0x6937dd(0x27f)]],[0x133*-0x9+0x177b+-0xb6c,'u8'],[0x1d1d+0x4a7*-0x3+-0xde0,'i32'],[-0x6b6*0x1+-0xde2+0x15ec,_0x5b43bc[_0x6937dd(0x331)]],[0xf03+-0x23e3+0x1638,'i32'],[0x938+-0x92*-0xc+-0xeb4,'u8'],[-0x1a0f+0x1*-0x633+-0x97*-0x39,'u8'],[0x1b61+0xb*-0x374+0xbf9,'u8'],[0x2323+-0xda6*0x2+-0x678,'u8'],[0x19ac*-0x1+-0x1875*-0x1+0x11*0x27,'u8'],[0x1*-0x83b+0x52*-0x65+0x29f6,'u8'],[0x21b9*0x1+0x9c2*-0x3+-0x311*0x1,'u8'],[-0xe5+-0x20b2+0x1*0x2353,_0x5b43bc[_0x6937dd(0x27f)]],[0x122*0x15+-0x1d*0x124+0xb0e,_0x5b43bc[_0x6937dd(0x27f)]],[0x264f+0x31f*-0x4+-0x17bb,'u8'],[-0x1bed+0x201f+-0x1b2,_0x5b43bc[_0x6937dd(0x27f)]],[0x1e12+-0x199e+-0x1d4,_0x6937dd(0xc5)],[0x1dec+0x1be+-0x1cb2,'u8'],[-0xbf5*0x2+-0x3df*0x1+0x1f65*0x1,'u8'],[0x13c4+-0x17e*-0x16+0x61f*-0x8,'v2'],[0x1d47+0x1ec0+-0x385f,'v2'],[0x25d3+-0x13d7+-0xc*0x131,'u8'],[-0x1*0x1e70+0xf8b*-0x1+-0x3*-0x1091,'u8'],[0xbda+-0x2d+0x1*-0x7e1,_0x5b43bc[_0x6937dd(0x27f)]],[-0x1bde+-0x1b6*-0x1+0x1df8,'v3'],[-0x3cb+0x1*-0x1b7d+0x24*0xfa,_0x5b43bc['NGslb']],[0x314+-0xd31+0xe01,_0x5b43bc[_0x6937dd(0x27f)]],[-0x14d8+-0x1*0x31f+0x1bdf,'f32'],[-0xbd6+-0x1f46+0x2f0c,'u8'],[0x4*0x6b9+0x29*0xf1+-0x4*0xf63,'u8'],[-0xa79+0x7d1+-0x34e*-0x2,_0x5b43bc[_0x6937dd(0x331)]],[0x32f+-0x2f3*0xd+0x2728,_0x6937dd(0xc5)],[0x2a1*-0x2+-0x1*-0x525+0x421*0x1,_0x5b43bc[_0x6937dd(0x331)]],[0x101f*0x1+-0x1*-0x185+0x86*-0x1a,_0x5b43bc[_0x6937dd(0x331)]],[0x5c3*0x4+0x1041+-0x2341,_0x5b43bc['bguUz']],[0xd4f*-0x2+-0x1352*-0x1+0xb5c,'i32'],[-0x1073+0x1*0x170b+-0x284,_0x5b43bc['bguUz']],[0x1*0x19a3+0x207e+-0x3609,_0x6937dd(0xc5)],[0x27d*0xf+-0x1c*-0x156+-0x469f,'i32'],[-0x264c+0x1*0x1807+0x1265,_0x6937dd(0xc5)],[0x7d8+-0xb*0x373+-0x7*-0x4eb,'u8'],[-0x73e+-0x16*0x1+0xc7*0xf,'u8'],[-0x1370+0x1ab0+-0x2ea,'u8'],[0x1971+-0x1*0xf25+-0x5f5,'u8'],[0x156*-0x1b+0xf*0x23b+0x729,_0x5b43bc[_0x6937dd(0x27f)]]]},_0x3d3f9d={},_0x44159b={};function _0x11c506(_0x586532,_0xbc209f,_0x2887af){var _0x47397a=_0x6937dd,_0x5b952a={'BqQHV':_0x47397a(0xaab),'mPWNi':'AuXCm','pcbej':function(_0x3df60d,_0x526f89){return _0x3df60d===_0x526f89;},'nTOIh':function(_0x5acf23,_0x227c22){return _0x5acf23(_0x227c22);},'OujbR':'aria-'+_0x47397a(0x602)+'ed','ynsbX':_0x5b43bc[_0x47397a(0x203)]};if(_0x5b43bc[_0x47397a(0x2c4)]!=='Jnmxp')return function(_0xcab7c1){var _0x30c03a=_0x47397a,_0x3471ab={'ZWKAO':function(_0x3c3b07,_0x2a1b44){return _0x3c3b07!==_0x2a1b44;},'mfFXv':'sakur'+'a-men'+_0x30c03a(0x78d)};if('fpCzm'===_0x5b43bc[_0x30c03a(0x9c7)])try{var _0x21e40a=_0xcab7c1&&_0xcab7c1['val']?_0xcab7c1['val']():0x26*-0x37+0x19a*-0x7+0x4*0x4d8;if(!_0x21e40a)return;var _0x203491=_0x44159b[_0x586532]||(_0x44159b[_0x586532]={}),_0x5893c5=_0x203491[_0x21e40a];if(!_0x5893c5)_0x5893c5=_0x203491[_0x21e40a]={'ptr':_0x21e40a,'firstSeen':Date[_0x30c03a(0xa8f)](),'hits':0x0};_0x5893c5['hits']++;if(_0x2887af){if(!_0x3d3f9d[_0x21e40a])_0x3d3f9d[_0x21e40a]={'ptr':_0x21e40a,'kind':_0x586532,'firstSeen':Date['now'](),'hits':0x0};_0x3d3f9d[_0x21e40a][_0x30c03a(0xbd)]++;}else{var _0x3dcf85=_0x4a5663[_0x586532];if(!_0x3dcf85||_0x5b43bc[_0x30c03a(0xa39)](_0x3dcf85[_0x30c03a(0xb22)],_0x21e40a)){_0x4a5663[_0x586532]={'ptr':_0x21e40a,'firstSeen':Date[_0x30c03a(0xa8f)](),'hits':0x0,'replaced':!!_0x3dcf85};try{var _0x132568=_0x5d137a['filte'+'r'](function(_0x89478){var _0x100af9=_0x30c03a;if(_0x5b952a[_0x100af9(0x6af)]===_0x5b952a[_0x100af9(0x1ab)]){var _0x2a8a65=_0xf4b444[_0x100af9(0x40e)+_0x100af9(0x340)]({'typeName':_0x2bb09c['type'],'methodName':'Updat'+'e','params':[_0x100af9(0xc5),_0x100af9(0xc5)],'returnType':_0x33d5c5},_0x490a09(_0x148e9a['type'],_0x5ee860['keep'],_0x55006a[_0x100af9(0x732)]));_0x4625d9['push']({'type':_0x50babd['type'],'hook':_0x2a8a65,'keep':_0x40b10f[_0x100af9(0x14b)]});}else return _0x5b952a[_0x100af9(0x2c5)](_0x89478['type'],_0x586532);})[0xcd+-0x24e6+0x1*0x2419];_0x2046a0={'type':_0x586532,'atMs':Date[_0x30c03a(0xa8f)]()-_0x3d7025,'originalFunc':!!(_0x132568&&_0x132568['hook']&&_0x5b43bc[_0x30c03a(0x9e5)](typeof _0x132568[_0x30c03a(0x2bf)][_0x30c03a(0x9f6)+'nalFu'+'nc'],'funct'+'ion')),'resolveGameAtFire':!!_0x407268(),'gameSourceAtFire':_0x627300['sourc'+'e']};}catch(_0x52f72d){}}}if(_0x5b43bc[_0x30c03a(0xfb)](_0x586532,_0x30c03a(0x8f4)+_0x30c03a(0x5d7)+_0x30c03a(0x591))&&_0x3f1502['on']){if('YcfmO'===_0x30c03a(0x57c))try{if(_0x5b43bc['UyFrw']===_0x30c03a(0x232)){if(_0x380e55[_0x30c03a(0x242)+'t']&&_0x3471ab['ZWKAO'](_0x3202b2[_0x30c03a(0x242)+'t'],_0x38552d))_0x4a4099[_0x30c03a(0x242)+'t'][_0x30c03a(0x4d9)+_0x30c03a(0xc3)+'e'](_0x37f723,'*');if(_0x51ccbf[_0x30c03a(0x11d)]&&_0x110064[_0x30c03a(0x11d)]!==_0x1a4a8c)_0x46dcd3['top']['postM'+_0x30c03a(0xc3)+'e'](_0xc53bcc,'*');}else _0x5b43bc[_0x30c03a(0x934)](_0x1631d2,_0x21e40a);}catch(_0x1ca0e9){}else _0x5b952a['nTOIh'](_0x243f54,_0xa19584);}if(!_0xbc209f){if(_0x5b43bc[_0x30c03a(0x2a2)]==='qrfdl'){var _0x132568=_0x5d137a['filte'+'r'](function(_0x1a32dc){return _0x1a32dc['type']===_0x586532;})[-0x458+0x1be6+-0x1e*0xc9];if(_0x132568&&_0x132568[_0x30c03a(0x2bf)])try{_0x132568[_0x30c03a(0x2bf)][_0x30c03a(0x961)+'ed']=![];}catch(_0x1e50ea){}}else{var _0x1c6c77=_0x38c444[_0x30c03a(0x51a)+'eElem'+_0x30c03a(0x516)](_0x30c03a(0x447));_0x1c6c77['id']=_0x3471ab[_0x30c03a(0x305)],_0x1c6c77[_0x30c03a(0x89d)+'onten'+'t']=_0x278ac2,(_0x1c98a9[_0x30c03a(0x989)]||_0x5dff53[_0x30c03a(0xa94)+_0x30c03a(0x1c7)+'ement'])[_0x30c03a(0x441)+_0x30c03a(0xb36)+'d'](_0x1c6c77);}}}catch(_0x320822){}else _0x42fa41['setAt'+_0x30c03a(0x366)+'te'](_0x5b952a[_0x30c03a(0x380)],_0x5bfd68()?'true':_0x5b952a['ynsbX']);};else _0x46a550[_0x47397a(0x89d)+_0x47397a(0x4ea)+'t']=_0x5db72e(_0x56e41b);}function _0x2cbc08(){var _0x4f6071=_0x6937dd;if(_0x4f6071(0x46b)===_0x4f6071(0x480))_0xf7ff33[_0x4f6071(0xaf7)+'Path'](),_0x499721[_0x4f6071(0xaba)](_0x4239e4,_0x161c47,_0x5b43bc[_0x4f6071(0x935)](_0x5b43bc[_0x4f6071(0x828)](_0x5b43bc['UkeiF'](_0x430016,-0xcf3+0x2273*0x1+-0xfa*0x16),_0xa2e31d),0xb*-0x1fc+0x175b+-0x184),0x39*0x9d+-0x27*-0xb6+-0x3eaf,_0x5b43bc[_0x4f6071(0x7fa)](_0x214e82['PI'],-0xf*-0x23a+0x1*0x789+-0x28ed)),_0x540900[_0x4f6071(0x9a5)+'e']();else{var _0xcde0e4=_0x5b43bc['YIkSy'][_0x4f6071(0x8ec)]('|'),_0x25bea8=-0x8a7*0x1+-0x22*0xfa+0x29db*0x1;while(!![]){switch(_0xcde0e4[_0x25bea8++]){case'0':if(!window[_0x4f6071(0x7c3)+'WebMo'+'dkit']||!window[_0x4f6071(0x7c3)+'WebMo'+'dkit']['Runti'+'me'])return![];continue;case'1':if(_0x5d137a[_0x4f6071(0x76e)+'h'])return!![];continue;case'2':var _0x230c39=window['Unity'+_0x4f6071(0x365)+_0x4f6071(0x1a6)][_0x4f6071(0x90e)+'me'];continue;case'3':if(!_0x28b72e||_0x5b43bc[_0x4f6071(0x6d0)](typeof _0x28b72e[_0x4f6071(0x40e)+_0x4f6071(0x340)],_0x4f6071(0x6cb)+_0x4f6071(0xa5b)))return![];continue;case'4':for(var _0x495864=0x137+0x6d6+0x80d*-0x1;_0x5b43bc[_0x4f6071(0x3cf)](_0x495864,_0x4ca4e8['lengt'+'h']);_0x495864++){var _0x43086e=_0x4ca4e8[_0x495864];try{var _0x6058fc=_0x28b72e['hookP'+_0x4f6071(0x340)]({'typeName':_0x43086e['type'],'methodName':'Updat'+'e','params':[_0x4f6071(0xc5),_0x5b43bc['bguUz']],'returnType':undefined},_0x11c506(_0x43086e[_0x4f6071(0x55e)],_0x43086e[_0x4f6071(0x14b)],_0x43086e[_0x4f6071(0x732)]));_0x5d137a['push']({'type':_0x43086e['type'],'hook':_0x6058fc,'keep':_0x43086e['keep']});}catch(_0x2b7fbc){_0x26debb['push'](_0x43086e[_0x4f6071(0x55e)]+':\x20'+String(_0x2b7fbc&&_0x2b7fbc['messa'+'ge']||_0x2b7fbc)[_0x4f6071(0x50d)](-0x85*-0x43+-0xc5d+-0x1672,-0x168b+0x2020+-0x8f5));}}continue;case'5':_0x28b72e=_0x28b72e||_0x230c39['plugi'+'ns'][_0x230c39['plugi'+'ns'][_0x4f6071(0x76e)+'h']-(-0x1*0x611+-0x1e35+0x2447)];continue;case'6':_0x4ff3e2=window[_0x4f6071(0x7c3)+_0x4f6071(0x365)+'dkit'][_0x4f6071(0x47c)+'Wrapp'+'er'];continue;case'7':return _0x5d137a['lengt'+'h']>0x15ab+0x1375*-0x1+-0x1*0x236;case'8':if(!_0x230c39[_0x4f6071(0x401)+'ns']||!_0x230c39['plugi'+'ns'][_0x4f6071(0x76e)+'h'])return![];continue;}break;}}}function _0x36c99e(){var _0x181758=_0x6937dd,_0x44b2a0=-0x1bbd+-0x9ba+-0x17*-0x1a1;for(var _0x548993=0x1680+0x43f*-0x8+0xb78;_0x5b43bc['aypzD'](_0x548993,_0x5d137a['lengt'+'h']);_0x548993++){if(_0x5d137a[_0x548993][_0x181758(0x2bf)]&&_0x5d137a[_0x548993][_0x181758(0x2bf)]['table'+_0x181758(0x9ff)]!==undefined)_0x44b2a0++;}return _0x44b2a0;}function _0x35702a(){var _0x3bf82c=_0x6937dd;if(_0x5b43bc[_0x3bf82c(0x68e)]('iiGnL',_0x5b43bc[_0x3bf82c(0x44b)])){var _0xb5db13=-0xd89+0xb87+-0x1*-0x202;for(var _0x2413b0=-0x83+-0xcd*0x19+0x1488;_0x5b43bc[_0x3bf82c(0x34e)](_0x2413b0,_0x5d137a['lengt'+'h']);_0x2413b0++){if(_0x5d137a[_0x2413b0][_0x3bf82c(0x2bf)]&&_0x5d137a[_0x2413b0]['hook'][_0x3bf82c(0x2d5)+'ed'])_0xb5db13++;}return _0xb5db13;}else _0x2f6648(!![]);}var _0x3c0948=null,_0x46f12a=[],_0x124407={},_0x2046a0=null;function _0x4517d4(_0x35fa9d){var _0x1c7a00=_0x6937dd;if(_0x5b43bc['RJDLa']!==_0x1c7a00(0x822))try{if(!_0x4ff3e2||!_0x35fa9d)return null;var _0x151cbb=new _0x4ff3e2(_0x35fa9d)[_0x1c7a00(0xa31)+_0x1c7a00(0x711)+'me']();return _0x5b43bc[_0x1c7a00(0x26d)](_0x151cbb,undefined)?null:_0x151cbb;}catch(_0x34800b){return null;}else _0x325cc7[_0x1c7a00(0xabb)+'omman'+'d'](_0x1c7a00(0x383)),_0x1a76de();}function _0x5d33b3(_0x2aa122,_0x39ebaf,_0x3355f9){var _0x1df8f9=_0x6937dd,_0x8bde5b=('4|3|5'+'|2|6|'+'1|0')[_0x1df8f9(0x8ec)]('|'),_0x5bcd95=-0xd*-0x12b+-0x19c9+-0x17*-0x76;while(!![]){switch(_0x8bde5b[_0x5bcd95++]){case'0':return _0x1148b0;case'1':_0x627300['ok']+=_0x3355f9;continue;case'2':var _0x1148b0=[];continue;case'3':if(!_0x18452c)return null;continue;case'4':var _0x18452c=_0x5b43bc[_0x1df8f9(0x3c8)](_0x268c9b);continue;case'5':if(_0x39ebaf<-0x1c57+0x1feb+-0x1ca*0x2||_0x39ebaf+_0x3355f9*(0x1*-0xc50+-0x15*-0x147+-0x1*0xe7f)>_0x18452c['byteL'+_0x1df8f9(0x348)])return null;continue;case'6':for(var _0x3b360a=-0x9aa+-0x2*-0xb1b+-0xc8c;_0x3b360a<_0x3355f9;_0x3b360a++)_0x1148b0['push'](_0x18452c[_0x1df8f9(0x807)+'oat32'](_0x5b43bc['VYLkD'](_0x5b43bc[_0x1df8f9(0x932)](_0x2aa122,_0x39ebaf),_0x3b360a*(-0x41*-0x85+-0x3*-0x7c3+-0x1*0x390a)),!![]));continue;}break;}}var _0x593b9b={'PhotonNetworkSync':[[_0x5b43bc['hPlvM'],_0x5b43bc[_0x6937dd(0x5c6)]],[_0x5b43bc['RFlku'],'healt'+'h'],[_0x6937dd(0x607),_0x6937dd(0x259)+_0x6937dd(0x36e)],['0x28',_0x6937dd(0x6b4)],[_0x5b43bc['GxGFD'],_0x6937dd(0x7ae)+_0x6937dd(0x936)]],'NetworkPlayerAnimations':[[_0x5b43bc['hPlvM'],'capsu'+'le'],[_0x5b43bc['EsJfp'],_0x5b43bc['GiTTe']]],'NPC_Cotroller':[[_0x5b43bc[_0x6937dd(0x7b8)],'capsu'+'le'],[_0x5b43bc[_0x6937dd(0x4a1)],_0x5b43bc['FrNaN']],['0xd0','healt'+'h'],[_0x5b43bc[_0x6937dd(0x85b)],_0x5b43bc['QTPuL']],[_0x5b43bc['ktEuv'],_0x6937dd(0x259)+_0x6937dd(0x36e)]],'EnemyBot':[[_0x6937dd(0x17c),'trans'+_0x6937dd(0x36e)]]},_0x32f8b5={'PhotonNetworkSync':[[_0x6937dd(0x81d),_0x6937dd(0xba)],[_0x5b43bc['LZUYM'],'local'+'Flag'],['0x5c','id']]};function _0x5881b1(_0x2a83ed,_0x58ae08){var _0x228ef3=_0x6937dd,_0xeec265={'hufoQ':function(_0x4cbb3f,_0x446850){return _0x4cbb3f===_0x446850;},'fHbLc':_0x228ef3(0x8f4)+_0x228ef3(0x5d7)+'ler','RSCxB':function(_0x19ce3c,_0x29e4d3){return _0x19ce3c!==_0x29e4d3;},'CyIIG':function(_0x235fe4,_0x3e5d15){return _0x235fe4(_0x3e5d15);}},_0x3639af=_0x27acec[_0x2a83ed]||[],_0x5f0252={'kind':_0x2a83ed,'ptr':_0x5b43bc[_0x228ef3(0x9ae)]('0x',_0x58ae08[_0x228ef3(0x9b0)+'ing'](0x1c3*-0x13+-0xfd2+0x315b)),'pos':null,'posAt':null,'allVecs':[],'scalars':[],'refs':{}};for(var _0x4e5e02=-0x1275+0xb1a+0x75b;_0x5b43bc[_0x228ef3(0x744)](_0x4e5e02,_0x3639af[_0x228ef3(0x76e)+'h']);_0x4e5e02++){if(_0x3639af[_0x4e5e02][0x7*-0x417+0x1337+-0x1*-0x96b]!=='v3')continue;var _0x4ad885=_0x5d33b3(_0x58ae08,_0x3639af[_0x4e5e02][-0x1cca+-0xc46+0x2910],-0xe*0x39+0xa8*-0x5+-0x223*-0x3);if(!_0x4ad885)continue;_0x5f0252['allVe'+'cs'][_0x228ef3(0x7d6)]({'o':'0x'+_0x3639af[_0x4e5e02][0x215d+-0x53*0x2c+-0x1*0x1319]['toStr'+_0x228ef3(0xa36)](-0x18ee+0xab*-0x10+0x1*0x23ae),'v':_0x4ad885});}var _0xaa514a=-0x3db+0x6*0xbb+-0x87,_0x4d2dbc=_0x5b43bc['CfJqW'](_0x15c5d8,_0x5f0252[_0x228ef3(0x6ed)+'cs'],_0x5b43bc['WFmAO'](_0x1d8ac9));_0x5f0252['pos']=_0x4d2dbc[_0x228ef3(0x2a7)],_0x5f0252[_0x228ef3(0x549)]=_0x4d2dbc[_0x228ef3(0x549)],_0x5f0252[_0x228ef3(0x7e0)+'d']=_0x4d2dbc[_0x228ef3(0x7e0)+'d'],_0x5f0252[_0x228ef3(0x944)+'er']=_0x4d2dbc[_0x228ef3(0x944)+'er'],_0x5f0252[_0x228ef3(0x452)]=_0x4d2dbc['reach'],void _0xaa514a;var _0x5ba390=_0x593b9b[_0x2a83ed],_0x377479=_0x32f8b5[_0x2a83ed];if(_0x377479){_0x5f0252[_0x228ef3(0x615)]={};for(var _0x241da0=-0x1*0x1b92+0x1213+0xdd*0xb;_0x241da0<_0x377479['lengt'+'h'];_0x241da0++){var _0x3c3629=_0x363e06(_0x58ae08+parseInt(_0x377479[_0x241da0][0x2*0x16+0x53a+-0x566],0x3a8+-0x1a39+0x16a1),'i32');if(_0x3c3629!==undefined)_0x5f0252['tag'][_0x377479[_0x241da0][-0x69e+-0xa33+0x2*0x869]]=_0x3c3629;}}if(_0x5ba390)for(var _0x8502f1=-0x1df8+0x59*0xd+0x1973;_0x8502f1<_0x5ba390[_0x228ef3(0x76e)+'h'];_0x8502f1++){var _0x1c18ea=_0x5b43bc['CfJqW'](_0x363e06,_0x58ae08+parseInt(_0x5ba390[_0x8502f1][0x1*0xa0f+-0x3*-0xd3+0x1*-0xc88],-0x1*-0x15ab+-0x9*-0x16+-0x1661),_0x228ef3(0x3c0));if(_0x1c18ea)_0x5f0252[_0x228ef3(0x3f0)][_0x5ba390[_0x8502f1][-0x4e*-0x9+0x1*0x1e7d+-0x213a]]='0x'+_0x5b43bc['avDee'](_0x1c18ea,0x1db*0x1+-0x158b+0x13b0)[_0x228ef3(0x9b0)+_0x228ef3(0xa36)](0xd10+0x9b*0x3d+-0x31ef);}return _0x5f0252[_0x228ef3(0x6bb)+'rs']=_0x3639af[_0x228ef3(0x437)+'r'](function(_0xd5c822){var _0x352534=_0x228ef3;return _0x5b43bc['AeunI'](_0xd5c822[-0x1*0x2079+-0x2624*-0x1+-0x5aa],_0x352534(0xb11))||_0x5b43bc['yKZce'](_0xd5c822[0x15f+0x7*-0xc1+-0x5b*-0xb],_0x5b43bc[_0x352534(0x331)]);})[_0x228ef3(0x6be)](function(_0xcbda34){var _0x4e8466=_0x228ef3;if(_0x4e8466(0x95d)===_0x4e8466(0x95d))return{'o':_0x5b43bc[_0x4e8466(0x8d8)]('0x',_0xcbda34[0x2423+-0x2319+0x7*-0x26][_0x4e8466(0x9b0)+'ing'](-0xa*0x17f+0xb1*0x2b+-0xeb5)),'v':_0x363e06(_0x58ae08+_0xcbda34[-0x18d*0xa+-0x1426+0x8ea*0x4],_0xcbda34[-0x92*-0x44+0x4d3*-0x5+-0xea8])};else{var _0x162b21=_0x404500[_0x4e8466(0x8ec)]('+');_0x4c0491=_0x3ac24a(_0x1c7df3,_0xeec265[_0x4e8466(0x421)](_0x162b21[0x26b5+0x1ccd+-0x4382]['index'+'Of'](_0x4e8466(0x9f2)+'h'),-0x1257+-0x25ed+0x3844)?_0x4e8466(0x9f2)+_0x4e8466(0xb3a)+'pt':_0xeec265['fHbLc'],_0x505195(_0x162b21[0xc7*-0x1+-0xd3*0xd+-0x1*-0xb7f],-0x24c3+0x2139*0x1+0x39a));}})[_0x228ef3(0x437)+'r'](function(_0x30bd86){var _0x19747c=_0x228ef3;return _0xeec265[_0x19747c(0xacf)](_0x30bd86['v'],undefined)&&_0xeec265[_0x19747c(0x6c5)](isFinite,_0x30bd86['v']);})[_0x228ef3(0x50d)](0x22*-0xb+-0x1858+0x19ce,-0x1*0x267e+-0x1*0x1d75+0x43ff),_0x5f0252;}function _0x3ea4d1(){var _0x27db83=_0x6937dd,_0x5dcf35={'ykTYL':_0x5b43bc[_0x27db83(0x269)]};if(_0x5b43bc[_0x27db83(0xa7c)](_0x27db83(0x80d),_0x5b43bc['HmlrW'])){var _0x480018=_0x13d841[_0x27db83(0xe6)+_0x27db83(0x743)+'e']();if(_0x480018)return _0x3a106a['sourc'+'e']=_0x5dcf35[_0x27db83(0x3c6)],_0x480018;}else{var _0x3a81f0={'players':[],'bots':[],'enemies':[],'controllers':[],'camera':null,'cameraFrom':null,'playerList':null,'managers':{},'wasmTypes':null},_0x5426b0=_0x4a5663['FPSco'+'ntrol'+_0x27db83(0x591)]&&_0x4a5663['FPSco'+_0x27db83(0x5d7)+_0x27db83(0x591)][_0x27db83(0xb22)]||0x24b9*-0x1+-0x175*-0x19+-0x4*-0x13,_0x3b0ed9=_0x44159b['Photo'+_0x27db83(0x9ca)+'orkSy'+'nc']||{},_0x356789=Object[_0x27db83(0x6eb)](_0x3b0ed9);for(var _0x166698=0x3*0xbd2+0x95b+0x1*-0x2cd1;_0x166698<_0x356789['lengt'+'h']&&_0x166698<0x7f1+-0x2*-0xa3c+0x1*-0x1c51;_0x166698++){var _0x30d448=_0x3b0ed9[_0x356789[_0x166698]],_0x376a1c=_0x5881b1('Photo'+'nNetw'+_0x27db83(0x6e5)+'nc',_0x30d448[_0x27db83(0xb22)]);_0x376a1c[_0x27db83(0xbd)]=_0x30d448['hits'],_0x376a1c[_0x27db83(0x6f6)+_0x27db83(0x404)+'s']=_0x30d448['first'+_0x27db83(0xa5a)]-_0x3d7025,_0x376a1c['isLoc'+'al']=!!_0x5426b0&&_0x376a1c[_0x27db83(0x3f0)][_0x27db83(0x6b4)]==='0x'+_0x5426b0[_0x27db83(0x9b0)+'ing'](-0x4f9+0x504*-0x7+0x2825);if(_0x376a1c['refs'][_0x27db83(0x9f)+'h']){var _0x5e26b8=parseInt(_0x376a1c[_0x27db83(0x3f0)][_0x27db83(0x9f)+'h'],-0x259*-0xd+-0x1*0x2375+0x500);_0x376a1c[_0x27db83(0x9f)+'h']=_0x279612(_0x5e26b8,_0x27db83(0x9f2)+_0x27db83(0xb3a)+'pt',_0x27db83(0x76a));}_0x3a81f0[_0x27db83(0x3b1)+'rs'][_0x27db83(0x7d6)](_0x376a1c);}_0x3a81f0['playe'+'rCoun'+'t']=_0x356789['lengt'+'h'];var _0x2efa4f=_0x44159b['NPC_C'+'otrol'+_0x27db83(0x591)]||{},_0x3854bc=Object[_0x27db83(0x6eb)](_0x2efa4f);for(var _0x5dce67=0x7*-0x1f3+-0xb*-0x323+0x5*-0x42c;_0x5dce67<_0x3854bc['lengt'+'h']&&_0x5dce67<0x1051*0x2+0x14*-0x18c+-0x19a;_0x5dce67++){if(_0x5b43bc[_0x27db83(0x325)]!==_0x5b43bc['BLMpl']){_0x21c565[_0x27db83(0x324)+_0x27db83(0xa24)+_0x27db83(0x41b)](),_0x4b16ec(_0x2d25e8['on'],_0x5b43bc['dAYGu'](_0x16c02f[_0x27db83(0xae4)+'r'],-0x1*0xb07+0xbdd*0x3+-0xc*0x20c+0.5));return;}else{var _0x2d1f0c=_0x5881b1(_0x27db83(0x8f9)+_0x27db83(0x3d4)+_0x27db83(0x591),_0x2efa4f[_0x3854bc[_0x5dce67]][_0x27db83(0xb22)]);_0x2d1f0c['hits']=_0x2efa4f[_0x3854bc[_0x5dce67]][_0x27db83(0xbd)],_0x2d1f0c[_0x27db83(0x6f6)+_0x27db83(0x404)+'s']=_0x5b43bc['Qokiq'](_0x2efa4f[_0x3854bc[_0x5dce67]]['first'+_0x27db83(0xa5a)],_0x3d7025);if(_0x2d1f0c['refs'][_0x27db83(0x9f)+'h'])_0x2d1f0c[_0x27db83(0x9f)+'h']=_0x5b43bc[_0x27db83(0xee)](_0x279612,_0x5b43bc['XwOGX'](parseInt,_0x2d1f0c[_0x27db83(0x3f0)]['healt'+'h'],-0x2b9*-0x6+0x12f*-0x9+-0x59f),_0x27db83(0x9f2)+_0x27db83(0xb3a)+'pt',_0x5b43bc[_0x27db83(0x5d8)]);_0x3a81f0[_0x27db83(0x6ba)]['push'](_0x2d1f0c);}}_0x3a81f0[_0x27db83(0x5bc)+'unt']=_0x3854bc['lengt'+'h'];var _0x2c4d96=_0x44159b['FPSco'+'ntrol'+'ler']||{},_0x2c3f7c=Object['keys'](_0x2c4d96);for(var _0x30e562=0xbe9+0x56*-0x4f+-0x217*-0x7;_0x30e562<_0x2c3f7c[_0x27db83(0x76e)+'h']&&_0x5b43bc[_0x27db83(0x96a)](_0x30e562,0x1c27+-0x2b*-0x39+-0x1*0x25a2);_0x30e562++){var _0x4193a7=_0x5881b1(_0x27db83(0x8f4)+'ntrol'+_0x27db83(0x591),_0x2c4d96[_0x2c3f7c[_0x30e562]][_0x27db83(0xb22)]);_0x4193a7['hits']=_0x2c4d96[_0x2c3f7c[_0x30e562]]['hits'],_0x4193a7[_0x27db83(0x92c)+'al']=_0x2c4d96[_0x2c3f7c[_0x30e562]][_0x27db83(0xb22)]===_0x5426b0,_0x3a81f0[_0x27db83(0xa4f)+'oller'+'s']['push'](_0x4193a7);}_0x3a81f0[_0x27db83(0xa4f)+'oller'+'Count']=_0x2c3f7c['lengt'+'h'];var _0xf8a64c=_0x3a81f0['playe'+'rs'][_0x27db83(0x9f3)+'t'](_0x3a81f0[_0x27db83(0x6ba)]);for(var _0x3dd09d=0x1d89+-0x7b5+-0x2*0xaea;_0x3dd09d<_0xf8a64c[_0x27db83(0x76e)+'h'];_0x3dd09d++){if(_0xf8a64c[_0x3dd09d][_0x27db83(0x92c)+'al'])continue;_0x3a81f0['enemi'+'es'][_0x27db83(0x7d6)](_0xf8a64c[_0x3dd09d]);}_0x3a81f0[_0x27db83(0x6ce)+_0x27db83(0xae5)]=_0x3a81f0[_0x27db83(0x779)+'es'][_0x27db83(0x76e)+'h'];var _0x1a502b={'TDM_GameManager':0x2c,'GG_GameManager':0x14},_0x7892c0={'TDM_GameManager':0x50,'GG_GameManager':0x5c};for(var _0x21bd38 in _0x4a5663){if('kNayT'!==_0x5b43bc[_0x27db83(0x508)]){var _0x18220c=_0x4a5663[_0x21bd38];if(!_0x18220c||!_0x18220c[_0x27db83(0xb22)])continue;if(!(_0x21bd38 in _0x1a502b))continue;_0x3a81f0[_0x27db83(0x89f)+'ers'][_0x21bd38]='0x'+_0x18220c[_0x27db83(0xb22)][_0x27db83(0x9b0)+'ing'](0x5*-0x4b1+0x942+0xe43*0x1);var _0x2478c1=_0x5b43bc[_0x27db83(0x2c6)](_0x363e06,_0x5b43bc[_0x27db83(0xd4)](_0x18220c[_0x27db83(0xb22)],_0x1a502b[_0x21bd38]),'u32'),_0x2d8f1f=_0x5b43bc[_0x27db83(0x787)](_0x363e06,_0x18220c[_0x27db83(0xb22)]+_0x7892c0[_0x21bd38],_0x27db83(0x3c0));_0x2478c1&&_0x3a81f0[_0x27db83(0x261)+'a']===null&&(_0x3a81f0[_0x27db83(0x261)+'a']=_0x5b43bc[_0x27db83(0x573)]('0x',(_0x2478c1>>>0x24b1+-0x19c8+-0xae9)[_0x27db83(0x9b0)+'ing'](-0x15*-0x9b+0x19*-0xb+0x4*-0x2e5)),_0x3a81f0[_0x27db83(0x261)+_0x27db83(0x9a6)]=_0x21bd38);if(_0x2d8f1f&&_0x3a81f0[_0x27db83(0x3b1)+_0x27db83(0xb49)]===null)_0x3a81f0[_0x27db83(0x3b1)+_0x27db83(0xb49)]=_0x5b43bc[_0x27db83(0x843)]('0x',_0x5b43bc['ZJxYO'](_0x2d8f1f,-0x1bb*-0x1+-0x1596+0x13db)['toStr'+_0x27db83(0xa36)](0xb03*0x2+0xbd3*-0x2+-0x48*-0x6));}else _0x34458c=_0x5b43bc[_0x27db83(0x9ae)](_0x5b43bc[_0x27db83(0x300)](_0x27db83(0x25a)+'·\x20',_0x4eb293[_0x27db83(0x6eb)](_0xa61c0d[_0x27db83(0x981)+_0x27db83(0x14e)])['lengt'+'h'])+('\x20obje'+'cts\x20·'+'\x20'),_0x3ba0ba)+'s',_0x14ccec=_0x5b43bc[_0x27db83(0x7ff)];}if(!_0x3a81f0[_0x27db83(0x3b1)+'rCoun'+'t']&&!_0x3a81f0['botCo'+'unt']&&!_0x3a81f0[_0x27db83(0x261)+'a'])_0x3a81f0['note']=_0x5b43bc[_0x27db83(0x626)](_0x27db83(0x1b6)+_0x27db83(0x9ed)+_0x27db83(0x8d0)+'kSync'+_0x27db83(0x806)+'NPC_C'+_0x27db83(0x3d4)+'ler\x20a'+'nd\x20no'+_0x27db83(0x717)+_0x27db83(0x653)+_0x27db83(0x8cc)+_0x27db83(0x4fa)+'is\x20wh'+_0x27db83(0xa4a),'the\x20l'+_0x27db83(0x5a6)+_0x27db83(0x8f0)+'\x20like'+'\x20-\x20ru'+'n\x20the'+'\x20reco'+_0x27db83(0xa96)+'IDE\x20a'+'\x20live'+'\x20roun'+_0x27db83(0x5c1)+'t\x20the'+'\x20menu'+'.');else{if(!_0x3a81f0[_0x27db83(0x6ce)+_0x27db83(0xae5)]){if('ZKkLA'!==_0x5b43bc['SIWEO'])_0x3a81f0[_0x27db83(0x18d)]=_0x5b43bc[_0x27db83(0x8da)]+_0x5b43bc[_0x27db83(0x988)];else return![];}}try{var _0x32be7f=('1|4|0'+_0x27db83(0x1b2))[_0x27db83(0x8ec)]('|'),_0x24e1d5=-0xb3e*-0x1+-0x1a*0x13d+0x14f4;while(!![]){switch(_0x32be7f[_0x24e1d5++]){case'0':var _0x5e48d={};continue;case'1':var _0x2c3637=window['Unity'+_0x27db83(0x365)+_0x27db83(0x1a6)]&&window[_0x27db83(0x7c3)+'WebMo'+'dkit'][_0x27db83(0x90e)+'me'];continue;case'2':for(var _0x4fabda=0x6a*-0x35+0x24df+-0xeed;_0x4fabda<_0x780c19[_0x27db83(0x76e)+'h']&&_0x5b43bc[_0x27db83(0x96a)](_0x4fabda,0x4a*-0x39+0x1506+-0xb14*-0x1);_0x4fabda++){var _0x2ee8a8=_0x5b43bc['dAYGu'](_0x780c19[_0x4fabda][_0x27db83(0x42b)+'s'][_0x27db83(0x896)](',')+_0x27db83(0xa8),_0x780c19[_0x4fabda]['retur'+_0x27db83(0x271)]||'void');_0x5e48d[_0x2ee8a8]=(_0x5e48d[_0x2ee8a8]||-0x1b5c+-0x499+-0x51*-0x65)+(0x1*-0x1e8f+0x1ccb+-0x3*-0x97);}continue;case'3':_0x3a81f0['wasmT'+'ypes']=_0x5e48d;continue;case'4':var _0x780c19=_0x2c3637&&_0x2c3637[_0x27db83(0x683)+'nalWa'+'smTyp'+'es']||[];continue;}break;}}catch(_0x348a01){}return _0x3a81f0;}}function _0x279612(_0x1bb191,_0x2985d6,_0x596a5b){var _0x100f44=_0x6937dd;try{var _0x13b556=_0x27acec[_0x2985d6]||[];for(var _0x4cfd39=0x19d5+-0x761*-0x1+-0x2136*0x1;_0x5b43bc[_0x100f44(0x381)](_0x4cfd39,_0x13b556[_0x100f44(0x76e)+'h']);_0x4cfd39++){if(_0x13b556[_0x4cfd39][0x269a+0x4*-0x3aa+-0x17f1]!==_0x596a5b)continue;var _0x41136c=_0x13b556[_0x4cfd39][-0xf45+0x19+0xf2c];if(_0x596a5b[_0x100f44(0x8ac)+'Of'](_0x100f44(0x7fe))===0x68f*-0x5+-0x1910+0x39db){var _0x796a7b=_0x15be34(_0x1bb191,_0x41136c,_0x596a5b);if(!_0x796a7b)return null;_0x796a7b['o']=_0x41136c,_0x796a7b['k']=_0x596a5b;var _0x1f56fc=_0x3a2d8a([_0x796a7b]);if(!_0x1f56fc['rows'][_0x100f44(0x76e)+'h'])return null;return _0x1f56fc[_0x100f44(0x37b)][-0xcb9*-0x1+0x6f9*0x4+-0x289d];}var _0x1ab70d=_0x363e06(_0x1bb191+_0x41136c,_0x596a5b);if(_0x1ab70d===undefined)return null;return{'o':'0x'+_0x41136c[_0x100f44(0x9b0)+'ing'](0x168a+-0x1a*-0xf7+-0x2f90),'v':_0x1ab70d};}}catch(_0x5b92dc){}return null;}function _0x331d3d(){var _0x32a954=_0x6937dd;if(_0x32a954(0x5de)!==_0x32a954(0x8e2)){var _0x3acf16={};_0x627300['ok']=-0x31*0x4f+0x1260+-0x341,_0x627300[_0x32a954(0x6b3)+'d']=0x285+0x28d*-0x5+0x5*0x20c,_0x627300[_0x32a954(0x8b7)+'rror']=null;var _0x5ae598=Object[_0x32a954(0x6eb)](_0x27acec);for(var _0x467fa7=0x1*-0xc21+0xd3*-0x29+0x2dec;_0x5b43bc['KjKJj'](_0x467fa7,_0x5ae598[_0x32a954(0x76e)+'h']);_0x467fa7++){var _0x571e5c=_0x5ae598[_0x467fa7],_0x310903=_0x4a5663[_0x571e5c];if(!_0x310903||!_0x310903['ptr'])continue;var _0x294a74=_0x27acec[_0x571e5c]||[],_0x135686=[];for(var _0x1d8e0a=0x9b0+0x355*-0x2+-0x306;_0x1d8e0a<_0x294a74['lengt'+'h'];_0x1d8e0a++){if(_0x32a954(0xa41)===_0x5b43bc[_0x32a954(0x52d)])_0x33e8f1[_0x32a954(0xb4e)+_0x32a954(0x29f)]['push'](_0x5b43bc[_0x32a954(0x213)](_0x32a954(0x465)+'\x20are\x20'+_0x32a954(0x2d5)+'ed\x20bu'+'t\x20no\x20'+_0x32a954(0x8f4)+_0x32a954(0x5d7)+'ler\x20h'+_0x32a954(0x48f)+_0x32a954(0x98d)+_0x32a954(0x5c4),_0x5b43bc[_0x32a954(0xb1e)]));else{var _0x163b87=_0x294a74[_0x1d8e0a][-0x133b+-0x23b8+0x1b*0x209],_0x54bf89=_0x294a74[_0x1d8e0a][-0x4*-0x4bd+-0x1b9+0x62*-0x2d];if(_0x5b43bc[_0x32a954(0x2f8)](_0x54bf89[_0x32a954(0x8ac)+'Of']('obf'),-0x209*-0x2+0x93a+-0xd4c)){var _0x221def=_0x15be34(_0x310903[_0x32a954(0xb22)],_0x163b87,_0x54bf89);if(!_0x221def)continue;_0x221def['o']=_0x163b87,_0x221def['k']=_0x54bf89,_0x135686[_0x32a954(0x7d6)](_0x221def);}else{var _0x2b2e27=_0x363e06(_0x310903['ptr']+_0x163b87,_0x54bf89);if(_0x2b2e27===undefined)continue;var _0x55c62e={'o':_0x163b87,'k':_0x54bf89,'v':_0x2b2e27};if(_0x54bf89==='v2'||_0x54bf89==='v3'||_0x54bf89==='v4'){if('Citoy'===_0x32a954(0x72e)){var _0x442996=_0x5b43bc[_0x32a954(0x786)](_0x54bf89,'v2')?0x1277*-0x1+0xe4*-0x3+0x1525:_0x5b43bc['DeROX'](_0x54bf89,'v3')?0x1869+-0x137*-0x11+-0x2d0d:0x2*-0x679+-0x2*-0xb1b+-0x940,_0x3d2678=_0x5d33b3(_0x310903['ptr'],_0x163b87,_0x442996);_0x3d2678&&(_0x55c62e[_0x32a954(0x5c3)]=_0x3d2678,_0x55c62e['v']=_0x3d2678[0x29*-0xe7+-0x2*-0x6da+0x174b]);}else _0x2bd09f();}_0x135686['push'](_0x55c62e);}}}if(_0x135686['lengt'+'h']){var _0x5ed265=_0x5b43bc['NejrS'](_0x3a2d8a,_0x135686);_0x3acf16[_0x571e5c]=_0x5ed265['rows'],_0x124407[_0x571e5c]={'key':_0x5ed265[_0x32a954(0x4ab)],'sane':_0x5ed265[_0x32a954(0x23c)],'checked':_0x5ed265[_0x32a954(0x602)+'ed'],'keyConsistent':_0x5ed265[_0x32a954(0x9a4)+'nsist'+'ent'],'keySource':_0x5ed265['keySo'+_0x32a954(0x8c3)]};}}return _0x3acf16;}else return![];}function _0x3a2d8a(_0x38a566){var _0x2aecd1=_0x6937dd;if(_0x5b43bc[_0x2aecd1(0x74a)]===_0x2aecd1(0x3ab)){var _0x571551=0x2104+-0x1e6a+-0x29a,_0xa42cdc=0x1*0x1e4+-0xb*-0xa7+-0xd3*0xb,_0x11f224=null;for(var _0x1047b4=0x17c+0x162*0x18+-0x22ac;_0x5b43bc[_0x2aecd1(0x700)](_0x1047b4,_0x38a566[_0x2aecd1(0x76e)+'h']);_0x1047b4++){var _0x1bd4eb=_0x38a566[_0x1047b4];if(_0x5b43bc[_0x2aecd1(0x68e)](_0x1bd4eb['k'][_0x2aecd1(0x8ac)+'Of'](_0x5b43bc[_0x2aecd1(0x990)]),-0x9a*0x3f+0xf95*0x2+0x6bc))continue;_0x1bd4eb['v']=_0x283ae1(_0x1bd4eb['k'],_0x1bd4eb[_0x2aecd1(0x5c5)+'n'],_0x1bd4eb[_0x2aecd1(0x11a)+_0x2aecd1(0x9c8)+'t0']),_0x1bd4eb[_0x2aecd1(0x6a0)+'ed']=_0x1bd4eb['keyAt'+'Offse'+'t0'],_0x1bd4eb[_0x2aecd1(0x455)]=_0x5b43bc[_0x2aecd1(0x734)](_0x5b43bc[_0x2aecd1(0xb5)](_0x5b43bc['rEWCR'](_0x5b43bc[_0x2aecd1(0x675)]+_0x1bd4eb['hidde'+'n'],_0x2aecd1(0x911)+'='),_0x1bd4eb[_0x2aecd1(0x18f)])+(_0x1bd4eb['act']?'\x20ACTI'+'VE':'')+_0x2aecd1(0x37c)+_0x1bd4eb[_0x2aecd1(0x11a)+_0x2aecd1(0x9c8)+'t0']+'\x20hex=',_0x1bd4eb[_0x2aecd1(0x938)]);if(_0x5b43bc['WNjOY'](_0x11f224,null))_0x11f224=_0x1bd4eb[_0x2aecd1(0x11a)+_0x2aecd1(0x9c8)+'t0'];_0xa42cdc++,_0x5b43bc[_0x2aecd1(0x934)](_0x356409,_0x1bd4eb)?(_0x571551++,_0x1bd4eb[_0x2aecd1(0x23c)]=!![]):_0x1bd4eb[_0x2aecd1(0x23c)]=![],delete _0x1bd4eb['alt'];}return{'rows':_0x38a566,'key':_0x11f224,'sane':_0x571551,'checked':_0xa42cdc,'keyConsistent':_0x5b43bc[_0x2aecd1(0x788)](_0x4d3139,_0x38a566),'keySource':'offse'+'t\x200\x20('+_0x2aecd1(0xad7)+_0x2aecd1(0x4bc)};}else{var _0x1b607d={'wwfEV':'Copie'+'d'};_0x444c21[_0x2aecd1(0x740)+_0x2aecd1(0x272)][_0x2aecd1(0x73e)+'Text'](_0x354c45)['then'](function(){var _0x3acca1=_0x2aecd1;_0x249c5f['textC'+_0x3acca1(0x4ea)+'t']=_0x1b607d[_0x3acca1(0x451)];});}}function _0x4d3139(_0x78a5dd){var _0x22b51d=_0x6937dd;if(_0x22b51d(0x218)==='cRwWA'){var _0x129865={};for(var _0x2c9a2b=0x1b92+-0xa0d+0x45*-0x41;_0x5b43bc[_0x22b51d(0x5f9)](_0x2c9a2b,_0x78a5dd[_0x22b51d(0x76e)+'h']);_0x2c9a2b++){if(_0x5b43bc[_0x22b51d(0xb4a)](_0x22b51d(0x2a6),_0x22b51d(0x553)))return new _0x20c9fa(_0x16fe77[_0x22b51d(0x2eb)+'r'],_0x4b3840[_0x22b51d(0xb1f)+'ffset'],_0x189624[_0x22b51d(0x6a2)+_0x22b51d(0x348)]);else{var _0x3fe001=_0x78a5dd[_0x2c9a2b];if(_0x3fe001['k'][_0x22b51d(0x8ac)+'Of'](_0x5b43bc['JhRgs'])!==-0x276*-0x3+-0x73*-0x53+-0x5*0x8ef)continue;if(_0x129865[_0x3fe001['k']]===undefined)_0x129865[_0x3fe001['k']]=_0x3fe001[_0x22b51d(0x6a0)+'ed'];else{if(_0x129865[_0x3fe001['k']]!==_0x3fe001['keyUs'+'ed'])return![];}}}return!![];}else{var _0x32754d=_0x5b43bc['BahsR'](_0x380e77);return _0x32754d&&_0x32754d['feet']?_0x32754d['feet'][0xaf9+0x929+-0x1421]:null;}}function _0x356409(_0x28c9e3){var _0x187c49=_0x6937dd,_0x399636={'ldXzo':function(_0x5ebfe0,_0x4cb5f9,_0x1df082,_0x4d4a09){return _0x5b43bc['qmOad'](_0x5ebfe0,_0x4cb5f9,_0x1df082,_0x4d4a09);},'RuOUf':function(_0x14114e,_0xd11005){return _0x14114e(_0xd11005);}};if(_0x5b43bc[_0x187c49(0x1d8)]==='pISIy'){var _0x343dd8=_0x399636[_0x187c49(0xb39)](_0x1a30bb,_0x4d47e5,_0x4de2ef,_0x82a32c);if(!_0x343dd8)return null;_0x343dd8['o']=_0x25ec41,_0x343dd8['k']=_0x2293a1;var _0x774a36=_0x399636[_0x187c49(0x543)](_0x4096bf,[_0x343dd8]);if(!_0x774a36['rows']['lengt'+'h'])return null;return _0x774a36[_0x187c49(0x37b)][-0x3*-0x994+-0x26b*-0x1+-0x1f27];}else{var _0x495cec=_0x28c9e3['v'];if(typeof _0x495cec!==_0x5b43bc[_0x187c49(0x637)]||!_0x5b43bc[_0x187c49(0xe2)](isFinite,_0x495cec))return![];if(_0x28c9e3['k']===_0x187c49(0x4c8))return _0x495cec===-0x362*0x6+-0x8*-0x225+0x4*0xc9||_0x5b43bc[_0x187c49(0x2fc)](_0x495cec,0x9e1+0x24d9+0x2eb9*-0x1);var _0x1ec594=_0x28c9e3[_0x187c49(0x18f)];if(_0x5b43bc['BOdNY'](typeof _0x1ec594,'numbe'+'r')||!_0x5b43bc[_0x187c49(0xe8)](isFinite,_0x1ec594))return!![];if(_0x28c9e3[_0x187c49(0x3c4)]===-0x18fe+0x1*0x1589+0x2*0x1bb)return Math[_0x187c49(0x83e)](_0x5b43bc[_0x187c49(0xed)](_0x495cec,_0x1ec594))<=Math['max'](0x163a+-0xddc+0x85d*-0x1,_0x5b43bc[_0x187c49(0xb02)](Math['abs'](_0x1ec594),0x30*-0x10+-0x1*0x34a+0x64a+0.6));return Math['abs'](_0x495cec)<-0x1297c97*-0x1a+0x286177b9+-0xafd550f;}}function _0x30ae25(){var _0x27d7d9=_0x6937dd,_0x1521c9={'OChPd':function(_0xfcf0d8,_0x593acf){return _0xfcf0d8-_0x593acf;},'UKwPU':function(_0x302638,_0x21855f){var _0x399f29=_0x5c65;return _0x5b43bc[_0x399f29(0x2ea)](_0x302638,_0x21855f);},'kgjJU':function(_0x2b25d2){return _0x2b25d2();}};if(_0x5b43bc[_0x27d7d9(0x87b)](_0x27d7d9(0x4dd),_0x27d7d9(0x4dd))){var _0x5b8eac={};try{if(_0x5b43bc['HpZEB']!==_0x27d7d9(0x475)){if(_0x3bfb4d)return _0x4f08e4;try{if(!_0x48573[_0x27d7d9(0x2f5)]||!_0x5d8bad['body'][_0x27d7d9(0x441)+_0x27d7d9(0xb36)+'d'])return null;var _0x33262f=_0x52ee61[_0x27d7d9(0x51a)+'eElem'+'ent'](_0x5b43bc[_0x27d7d9(0xa2f)]);return _0x33262f['id']=_0x27d7d9(0xac)+_0x27d7d9(0x35c)+'es',_0x33262f[_0x27d7d9(0x447)][_0x27d7d9(0x713)+'xt']=_0x27d7d9(0xd0)+_0x27d7d9(0x865)+_0x27d7d9(0x979)+_0x27d7d9(0x393)+'0;top'+_0x27d7d9(0xace)+'index'+_0x27d7d9(0x2e5)+_0x27d7d9(0x27a)+_0x27d7d9(0x24e)+'nter-'+_0x27d7d9(0x33d)+'s:non'+'e;',_0x204896[_0x27d7d9(0x2f5)]['appen'+_0x27d7d9(0xb36)+'d'](_0x33262f),_0x4f94c0={'cv':_0x33262f},_0x4978be;}catch(_0x46e4d1){return null;}}else{var _0x1005e6=window[_0x27d7d9(0x7c3)+'WebMo'+_0x27d7d9(0x1a6)]&&window['Unity'+'WebMo'+'dkit']['Runti'+'me'];_0x5b8eac['tag']=_0x1005e6&&_0x1005e6['__sak'+_0x27d7d9(0x44f)+'g']||null,_0x5b8eac[_0x27d7d9(0xa3a)+'tches']=!!(_0x1005e6&&_0x32d73b&&_0x5b43bc[_0x27d7d9(0x8d9)](_0x1005e6[_0x27d7d9(0x9fc)+_0x27d7d9(0x44f)+'g'],_0x32d73b)),_0x5b8eac['runti'+'meGam'+'e']=_0x1005e6&&_0x1005e6['_game']?typeof _0x1005e6[_0x27d7d9(0x1df)]:'none',_0x5b8eac[_0x27d7d9(0x401)+_0x27d7d9(0xa5e)+_0x27d7d9(0x919)+_0x27d7d9(0xb26)+'ted']=!!(_0x28b72e&&_0x28b72e[_0x27d7d9(0xb12)+_0x27d7d9(0x554)]&&_0x5b43bc[_0x27d7d9(0xa7c)](_0x28b72e[_0x27d7d9(0xb12)+_0x27d7d9(0x554)],_0x1005e6)),_0x5b8eac['plugi'+_0x27d7d9(0xa5e)+'imeGa'+'me']=_0x28b72e&&_0x28b72e[_0x27d7d9(0xb12)+_0x27d7d9(0x554)]&&_0x28b72e[_0x27d7d9(0xb12)+_0x27d7d9(0x554)][_0x27d7d9(0x1df)]?typeof _0x28b72e['_runt'+'ime']['_game']:_0x27d7d9(0x422);}}catch(_0x272bab){_0x5b8eac['error']=String(_0x272bab&&_0x272bab[_0x27d7d9(0x29b)+'ge']||_0x272bab);}return _0x5b8eac;}else{var _0x2716bd={'qAiRY':function(_0x26eb63,_0x909cbb){return _0x26eb63===_0x909cbb;}},_0x474e7b=_0x2f2afb[_0x27d7d9(0x437)+'r'](function(_0x56e5c9){var _0x44d2bf=_0x27d7d9;return _0x2716bd['qAiRY'](_0x56e5c9[_0x44d2bf(0x55e)],_0x29ca32);})[0x22f5+-0x2*-0x59c+-0x2e2d];_0x54f463={'type':_0x58db81,'atMs':_0x1521c9['OChPd'](_0x253afb['now'](),_0x33250b),'originalFunc':!!(_0x474e7b&&_0x474e7b[_0x27d7d9(0x2bf)]&&_0x1521c9['UKwPU'](typeof _0x474e7b[_0x27d7d9(0x2bf)][_0x27d7d9(0x9f6)+'nalFu'+'nc'],'funct'+'ion')),'resolveGameAtFire':!!_0x1521c9['kgjJU'](_0x189b69),'gameSourceAtFire':_0x5321be[_0x27d7d9(0x42d)+'e']};}}function _0x12f651(){var _0x18de70=_0x6937dd;if(_0x5b43bc['xTzha']!==_0x5b43bc['xTzha'])_0x4a543b['boxes']=_0x519561,_0x46d0bf['on']=!![],_0x53bd50();else{var _0x26d313=[_0x5b43bc['mTYKl'],_0x5b43bc[_0x18de70(0xaae)],_0x5b43bc[_0x18de70(0x63d)],_0x18de70(0x564)+_0x18de70(0x28c)+'nceWr'+_0x18de70(0x59d)],_0x5dc212={};for(var _0x4813df=0x2205+-0x4a9*-0x1+-0x26ae;_0x5b43bc[_0x18de70(0x238)](_0x4813df,_0x26d313[_0x18de70(0x76e)+'h']);_0x4813df++){var _0x3c19a8=_0x26d313[_0x4813df],_0x19d071=typeof window[_0x3c19a8];_0x5dc212[_0x3c19a8]=_0x19d071==='undef'+'ined'?_0x5b43bc['GknZc']:_0x19d071;}var _0x469357=_0x5b43bc['tdyvQ'](_0x407268);_0x5dc212[_0x18de70(0xa63)+'ource']=_0x627300['sourc'+'e'];try{_0x5dc212['hasMo'+_0x18de70(0x3d1)]=!!(_0x469357&&_0x469357[_0x18de70(0xab3)+'e']),_0x5dc212[_0x18de70(0x84f)+'8']=!!(_0x469357&&_0x469357['Modul'+'e']&&_0x469357[_0x18de70(0xab3)+'e'][_0x18de70(0xad0)+'8']),_0x5dc212[_0x18de70(0x4ba)+'ytes']=_0x5dc212[_0x18de70(0x84f)+'8']?_0x469357[_0x18de70(0xab3)+'e'][_0x18de70(0xad0)+'8'][_0x18de70(0x76e)+'h']:-0x1fc1*0x1+0x1*-0x1b95+0x87a*0x7;}catch(_0x4fa273){_0x5dc212[_0x18de70(0x68f)+_0x18de70(0x3d1)]=![],_0x5dc212[_0x18de70(0x84f)+'8']=![],_0x5dc212['heapB'+'ytes']=0x2*-0x3ad+-0x2019+0x2773;}return _0x5dc212[_0x18de70(0x1c6)+'Wrapp'+'er']=typeof _0x4ff3e2,_0x5dc212;}}function _0x495786(){var _0x3e7dc4=_0x6937dd,_0x367f8d={},_0x149cf4=_0x5b43bc['WFmAO'](_0x10d8b1);if(!_0x149cf4)return _0x367f8d;_0x367f8d[_0x5b43bc['QvOMG']]=_0x149cf4[_0x3e7dc4(0x7ae)+'Look'];for(var _0x64169f in _0x149cf4['float'+'s'])_0x367f8d['Mouse'+_0x3e7dc4(0x703)+_0x64169f]=_0x149cf4['float'+'s'][_0x64169f];if(_0x149cf4['camer'+'a'])_0x367f8d[_0x5b43bc[_0x3e7dc4(0x4ed)]]=_0x149cf4[_0x3e7dc4(0x261)+'a'];return _0x367f8d;}function _0x56b2b6(_0x34e4a6){var _0x2434c1=_0x6937dd,_0x5cfd2e={};for(var _0x317c18 in _0x34e4a6){var _0x1e684c=_0x34e4a6[_0x317c18];for(var _0x6bb22c=-0x13e9+0x190b+-0x522;_0x5b43bc[_0x2434c1(0x3fa)](_0x6bb22c,_0x1e684c[_0x2434c1(0x76e)+'h']);_0x6bb22c++){_0x5cfd2e[_0x5b43bc[_0x2434c1(0x879)](_0x317c18+_0x2434c1(0x118),_0x1e684c[_0x6bb22c]['o'][_0x2434c1(0x9b0)+'ing'](0x355*0x1+-0xdf6+0xab1))]=_0x1e684c[_0x6bb22c]['v'];}}return _0x5cfd2e;}function _0x2dafd7(_0x81687d,_0x57eaf8){var _0x46b714=_0x6937dd,_0x1799e4={'GJoOy':function(_0x3c24d2,_0x198540){return _0x3c24d2-_0x198540;}};if(_0x5b43bc['yHQEg'](_0x81687d,'speed')){if(_0x5b43bc[_0x46b714(0xa05)]!==_0x46b714(0x1d4)){_0x5b43bc[_0x46b714(0x787)](_0x2b3d5f,_0x57eaf8&&typeof _0x57eaf8['on']===_0x5b43bc['OgLWl']?_0x57eaf8['on']:_0x3f1502['on'],_0x57eaf8&&typeof _0x57eaf8[_0x46b714(0xae4)+'r']==='numbe'+'r'?_0x57eaf8[_0x46b714(0xae4)+'r']:_0x3f1502['facto'+'r']);return;}else _0x56e1f6['sane']=![];}if(_0x5b43bc['MniVx'](_0x81687d,_0x5b43bc[_0x46b714(0x5f2)]))return;var _0x45abe7=_0x5b43bc['WFmAO'](_0x331d3d),_0x49b042=_0x5b43bc[_0x46b714(0xe8)](_0x56b2b6,_0x45abe7),_0x275006=_0x495786();for(var _0x596edf in _0x275006)_0x49b042[_0x596edf]=_0x275006[_0x596edf];if(!_0x3c0948){if('nknQT'!==_0x46b714(0x4c7)){_0x3c0948=_0x49b042,_0x46f12a=[],_0x16bd7a(_0x5b43bc['yHNrU'],{'report':_0x5b43bc[_0x46b714(0x3be)](_0x288944)});return;}else _0x4f51fe[_0x46b714(0x11d)]=_0x1799e4[_0x46b714(0x847)](_0x1f3d29[_0x46b714(0x63e)+'Heigh'+'t']||0xa1*0x17+0x26a+-0x95*0x1d,_0x1b508a[_0x46b714(0x25f)+_0x46b714(0x760)+'ht']||-0x11*0x5e+-0xfe2+0x5ec*0x4)-(-0x1*-0x24f5+-0x8d8+-0x1c05);}_0x46f12a=[];for(var _0x4c91ec in _0x49b042){if(_0x5b43bc[_0x46b714(0xa39)]('uZIOu',_0x5b43bc[_0x46b714(0x133)])){var _0x4cf9be=(_0x46b714(0x1b5)+_0x46b714(0x1b2))[_0x46b714(0x8ec)]('|'),_0x3f7a6c=-0x3d9*0x6+-0x298+0x19ae;while(!![]){switch(_0x4cf9be[_0x3f7a6c++]){case'0':if(!_0x174d23||!_0x18c7a2)return;continue;case'1':_0x1b946b[_0x46b714(0x89d)+'onten'+'t']='no\x20re'+'port\x20'+'after'+_0x46b714(0x914)+'—\x20fra'+_0x46b714(0x7cd)+_0x46b714(0x517)+'ected'+'?';continue;case'2':_0x28552c[_0x46b714(0x447)]['color']=_0x46b714(0xbb)+'c7';continue;case'3':_0x4c9137[_0x46b714(0x89d)+'onten'+'t']=_0x5b43bc['HdIjJ'](_0x46b714(0x3bd)+_0x46b714(0x695)+'rame\x20'+'never'+_0x46b714(0x5a8)+_0x46b714(0x5f4)+'singl'+_0x46b714(0x62d)+_0x46b714(0x266)+'\x0a','This\x20'+_0x46b714(0x473)+_0x46b714(0xab2)+_0x46b714(0xaf3)+_0x46b714(0x874)+_0x46b714(0x391)+_0x46b714(0x8e5)+'\x20inst'+_0x46b714(0x662)+'\x20and\x20'+_0x46b714(0x623)+_0x46b714(0x6a8)+_0x46b714(0x930)+_0x46b714(0x8eb)+_0x46b714(0x735))+(_0x46b714(0x766)+_0x46b714(0xa8a)+_0x46b714(0xa93)+'g\x20sus'+'pects'+'\x20are:'+'\x0a\x0a')+('\x20\x201.\x20'+'Tampe'+_0x46b714(0x7e7)+'ey\x20is'+_0x46b714(0xa34)+_0x46b714(0x908)+_0x46b714(0x6b9)+_0x46b714(0x4a6)+'the\x20c'+'ross-'+'origi'+_0x46b714(0x916)+_0x46b714(0x35f))+('\x20\x202.\x20'+'The\x20p'+'age\x20h'+'as\x20no'+_0x46b714(0x966)+_0x46b714(0x6a7)+'oaded'+'\x20sinc'+_0x46b714(0x3e7)+'talli'+_0x46b714(0x418))+(_0x46b714(0x69c)+'Both\x20'+_0x46b714(0xac)+_0x46b714(0x768)+_0x46b714(0x912)+'z.use'+_0x46b714(0x4f5)+'AND\x20t'+'he\x20ol'+_0x46b714(0xa47)+'g\x20scr'+'ipt\x20a'+'re\x0a')+('\x20\x20\x20\x20\x20'+'insta'+'lled\x20'+_0x46b714(0x14f)+_0x46b714(0xa5c)+_0x46b714(0x34f)+'\x20UWMK'+_0x46b714(0xb15)+'\x20patc'+_0x46b714(0xb0a)+'Assem'+_0x46b714(0x4b4)+_0x46b714(0x223)+'tiate'+'.\x0a\x0a')+('Reloa'+'d\x20the'+'\x20game'+_0x46b714(0x101)+_0x46b714(0x8f2)+_0x46b714(0xb3d)+_0x46b714(0x83b)+_0x46b714(0x89e)+_0x46b714(0x528)+'l\x20aga'+'in.');continue;case'4':if(_0x1bba41)return;continue;}break;}}else{var _0x56f742=_0x3c0948[_0x4c91ec],_0xbd0ec0=_0x49b042[_0x4c91ec];if(_0x56f742!==_0xbd0ec0)_0x46f12a[_0x46b714(0x7d6)](_0x5b43bc['ZSpcG'](_0x5b43bc[_0x46b714(0x9bc)](_0x4c91ec+':\x20',_0x56f742)+_0x46b714(0xa8),_0xbd0ec0));}}_0x3c0948=_0x49b042,_0x16bd7a(_0x5b43bc[_0x46b714(0xc9)],{'report':_0x5b43bc[_0x46b714(0xa35)](_0x288944)});}var _0x202e85=null;function _0xf2d1dd(){var _0x4270f4=_0x6937dd,_0x3185f9={'OXSju':_0x5b43bc[_0x4270f4(0x6d8)],'mNiZH':function(_0x4f1786,_0x1d3195,_0x1e0a42){return _0x4f1786(_0x1d3195,_0x1e0a42);},'yhAXl':function(_0x79522c,_0x3e3b74){return _0x79522c(_0x3e3b74);},'uuwQh':_0x4270f4(0x12e)+_0x4270f4(0x54e),'rdFFu':_0x5b43bc['KFydA']};if(_0x202e85)return _0x202e85;try{if(!document[_0x4270f4(0x2f5)]||!document['body'][_0x4270f4(0x441)+'dChil'+'d'])return null;if(!document[_0x4270f4(0x513)+'ement'+_0x4270f4(0x6e1)](_0x4270f4(0xac)+_0x4270f4(0x3b0)+_0x4270f4(0x3ba)+'ss')){var _0x1a00b1=document[_0x4270f4(0x51a)+'eElem'+_0x4270f4(0x516)](_0x5b43bc[_0x4270f4(0x3f1)]);_0x1a00b1['id']=_0x5b43bc['JTmrz'],_0x1a00b1[_0x4270f4(0x89d)+'onten'+'t']=_0x5b43bc[_0x4270f4(0xaa8)],(document['head']||document['docum'+_0x4270f4(0x1c7)+_0x4270f4(0x420)])['appen'+'dChil'+'d'](_0x1a00b1);}var _0x3ac1bc=document[_0x4270f4(0x51a)+'eElem'+_0x4270f4(0x516)](_0x5b43bc[_0x4270f4(0x4bb)]);_0x3ac1bc['id']=_0x5b43bc[_0x4270f4(0xa6a)],_0x3ac1bc['style'][_0x4270f4(0x713)+'xt']=_0x4270f4(0xd0)+_0x4270f4(0x865)+'ixed;'+_0x4270f4(0x393)+'8px;b'+_0x4270f4(0x763)+':8px;'+'z-ind'+_0x4270f4(0xafb)+_0x4270f4(0x582)+_0x4270f4(0xad)+'ispla'+_0x4270f4(0x3e4)+'x;fle'+_0x4270f4(0x69e)+_0x4270f4(0x6c6)+'n:col'+_0x4270f4(0x87f)+_0x4270f4(0x53a)+'x;'+_0x5b43bc['OHEFE']+(_0x4270f4(0x234)+'ng:6p'+_0x4270f4(0x69d)+_0x4270f4(0x62b)+':11px'+'/1.45'+'\x20ui-m'+_0x4270f4(0x9d6)+'ace,C'+_0x4270f4(0x2f6)+'as,mo'+_0x4270f4(0x142)+'ce;co'+'lor:#'+_0x4270f4(0x603)+'5;')+(_0x4270f4(0x4e9)+_0x4270f4(0x39a)+':0\x2010'+_0x4270f4(0xb29)+'px\x20-1'+'2px\x20#'+_0x4270f4(0x994)+_0x4270f4(0x674)+_0x4270f4(0x1a7)+_0x4270f4(0xa52)+';-web'+_0x4270f4(0xb21)+'ser-s'+_0x4270f4(0x1a7)+_0x4270f4(0xa52)+';');var _0x5abeab=_0x5b43bc[_0x4270f4(0x423)];_0x3ac1bc[_0x4270f4(0x63e)+_0x4270f4(0x497)]=_0x5b43bc[_0x4270f4(0x22d)](_0x5b43bc['eJpAL'](_0x5b43bc[_0x4270f4(0x734)](_0x5b43bc[_0x4270f4(0x319)](_0x5b43bc[_0x4270f4(0x9ae)](_0x5b43bc['rEWCR'](_0x5b43bc['IewXd'](_0x5b43bc[_0x4270f4(0x213)](_0x5b43bc[_0x4270f4(0xa95)](_0x5b43bc[_0x4270f4(0x2e4)](_0x5b43bc['qwwIu'](_0x4270f4(0xb3)+_0x4270f4(0x668)+'a=\x22ba'+'r\x22\x20st'+_0x4270f4(0x148)+'displ'+'ay:fl'+_0x4270f4(0x20a)+'p:6px'+';alig'+'n-ite'+_0x4270f4(0x922)+'nter;'+'flex-'+'wrap:'+_0x4270f4(0xada)+'max-w'+'idth:'+_0x4270f4(0x43f)+_0x4270f4(0xa56),_0x5b43bc[_0x4270f4(0x8c0)])+_0x494d48,_0x4270f4(0x3a3)+_0x4270f4(0x9fa)+'b>'),_0x4270f4(0x454)+_0x4270f4(0x60e)+'ta-a='+'\x22sp\x22\x20'+'style'+_0x4270f4(0x7f4)+_0x4270f4(0x192)+_0x4270f4(0x19c)+_0x4270f4(0x6f4)+_0x4270f4(0x2b7)+'borde'+'r:1px'+'\x20soli'+_0x4270f4(0x1a1)+'a(255'+_0x4270f4(0xaf1)+'177,.'+'45);')+(_0x4270f4(0x6ca)+_0x4270f4(0x604)+_0x4270f4(0x2da)+_0x4270f4(0x39e)+_0x4270f4(0x468)+'us:6p'+'x;pad'+'ding:'+_0x4270f4(0xfa)+_0x4270f4(0x5ac)+'rsor:'+_0x4270f4(0x5e8)+_0x4270f4(0x1e5)+_0x4270f4(0x369)+'herit'+_0x4270f4(0x8c7)+_0x4270f4(0x95a)+_0x4270f4(0x362)+'utton'+'>'),_0x4270f4(0x6b6)+_0x4270f4(0x144)+'a-a=\x22'+_0x4270f4(0x56c)+'ype=\x22'+_0x4270f4(0x456)+'\x22\x20min'+'=\x221\x22\x20'+'max=\x22'+_0x4270f4(0x3af)+_0x4270f4(0x1a4)+'.5\x22\x20v'+'alue='+_0x4270f4(0x436)+'tyle='+_0x4270f4(0x745)+'h:92p'+_0x4270f4(0x6db)+'ent-c'+'olor:'),_0x494d48)+_0x5b43bc['sOROz']+(_0x4270f4(0x450)+'\x20data'+'-a=\x22f'+'v\x22\x20st'+_0x4270f4(0x148)+_0x4270f4(0x6ca)+_0x4270f4(0x476)+_0x4270f4(0x634)+_0x4270f4(0x3d3)+_0x4270f4(0x177)+'0px;\x22'+'>2.0x'+'</spa'+'n>'),_0x4270f4(0x454)+'on\x20da'+_0x4270f4(0x2cc)+'\x22esp\x22'+_0x4270f4(0x13b)+_0x4270f4(0xaaf)+_0x4270f4(0x21e)+'und:t'+_0x4270f4(0x858)+_0x4270f4(0x9ce)+';bord'+'er:1p'+'x\x20sol'+'id\x20rg'+_0x4270f4(0x778)+_0x4270f4(0x7f3)+',177,'+'.45);')+(_0x4270f4(0x6ca)+_0x4270f4(0x604)+'ef5;b'+_0x4270f4(0x39e)+_0x4270f4(0x468)+_0x4270f4(0x22b)+_0x4270f4(0x2f7)+_0x4270f4(0x946)+_0x4270f4(0x9ef)+_0x4270f4(0x5ac)+_0x4270f4(0x47a)+_0x4270f4(0x5e8)+_0x4270f4(0x1e5)+_0x4270f4(0x369)+_0x4270f4(0x58b)+';\x22>ES'+_0x4270f4(0xafd)+_0x4270f4(0x85c)+_0x4270f4(0x597))+_0x5b43bc[_0x4270f4(0x43d)],_0x5b43bc[_0x4270f4(0x524)]),_0x4270f4(0x454)+'on\x20da'+_0x4270f4(0x2cc)+'\x22fold'+_0x4270f4(0x285)+'le=\x22m'+_0x4270f4(0xbe)+_0x4270f4(0xcb)+_0x4270f4(0x43c)+_0x4270f4(0x22a)+'groun'+_0x4270f4(0x5ae)+_0x4270f4(0x80a)+_0x4270f4(0x94b)+'order'+_0x4270f4(0x931)+_0x4270f4(0x873)+_0x4270f4(0x79d)+_0x4270f4(0xa6d)+_0x4270f4(0xa87)+_0x4270f4(0x4c3)+_0x4270f4(0x729))+(_0x4270f4(0x6ca)+':#f7e'+_0x4270f4(0x2da)+_0x4270f4(0x39e)+'-radi'+_0x4270f4(0x22b)+_0x4270f4(0x2f7)+'ding:'+'1px\x206'+_0x4270f4(0x5ac)+_0x4270f4(0x47a)+_0x4270f4(0x5e8)+'er;fo'+'nt:in'+'herit'+_0x4270f4(0xb33)+_0x4270f4(0x85c)+'on>'),_0x5b43bc[_0x4270f4(0x886)]),'<div\x20'+_0x4270f4(0x668)+_0x4270f4(0x640)+_0x4270f4(0x285)+_0x4270f4(0x28f)+_0x4270f4(0xa7f)+'#8d7a'+_0x4270f4(0x893)+_0x4270f4(0xaf8)+_0x4270f4(0x903)+'0px;\x22'+_0x4270f4(0x5bd)+'v>'),_0x4270f4(0xb3)+_0x4270f4(0x668)+_0x4270f4(0x640)+'2\x22\x20st'+'yle=\x22'+_0x4270f4(0x6ca)+':#8d7'+'a99;m'+_0x4270f4(0x470)+'dth:2'+_0x4270f4(0x962)+_0x4270f4(0x464)+'iv>'),_0x3ac1bc['inner'+_0x4270f4(0x497)]=_0x5abeab;var _0x1d250c=function(_0x897205){var _0x2de8e2=_0x4270f4;return _0x3ac1bc['query'+'Selec'+_0x2de8e2(0x7ef)](_0x5b43bc[_0x2de8e2(0x93a)](_0x5b43bc[_0x2de8e2(0x54c)],_0x897205)+'\x22]');},_0x32093d=_0x5b43bc['OSSIr'](_0x1d250c,'st'),_0xb8e545=_0x1d250c(_0x5b43bc['qnPjt']),_0x20b24d=_0x5b43bc[_0x4270f4(0x4de)](_0x1d250c,'sp'),_0x2e86da=_0x1d250c('fx'),_0x1804bb=_0x5b43bc['guaEx'](_0x1d250c,'fv'),_0x210eaa=_0x1d250c(_0x4270f4(0xa82));if(_0x20b24d)_0x20b24d[_0x4270f4(0x624)+'ck']=function(){var _0x2a8e23=_0x4270f4;if('xSdBC'===_0x5b43bc['tzTyW']){var _0x4eb419=_0x2101fa();if(!_0x4eb419)return null;try{return new _0x544d79(_0x4eb419[_0x2a8e23(0x2eb)+'r'],_0x4eb419['byteO'+_0x2a8e23(0x937)],_0x4eb419[_0x2a8e23(0x6a2)+_0x2a8e23(0x348)]);}catch(_0x9a0fdf){return null;}}else _0x5b43bc['CfJqW'](_0x2b3d5f,!_0x3f1502['on'],_0x3f1502[_0x2a8e23(0xae4)+'r']);};if(_0x2e86da)_0x2e86da['oninp'+'ut']=function(){var _0x211b25=_0x4270f4;if('KoICA'!==_0x3185f9['OXSju']){if(_0x5720be[_0x33b957][_0x211b25(0x1e9)+'ntWin'+_0x211b25(0xde)])_0x573d85[_0x3a274f]['conte'+_0x211b25(0x31c)+_0x211b25(0xde)]['postM'+'essag'+'e'](_0x3a0e06,'*');}else _0x3185f9['mNiZH'](_0x2b3d5f,_0x3f1502['on'],_0x3185f9[_0x211b25(0x155)](parseFloat,_0x2e86da['value'])||-0x55c*-0x1+0xfc3+-0x151e);};if(_0x5b43bc[_0x4270f4(0xa72)](_0x1d250c,_0x5b43bc['XQlma']))_0x1d250c('snap')['oncli'+'ck']=function(){var _0x320c52=_0x4270f4;_0x2dafd7(_0x3185f9[_0x320c52(0x57e)]);};var _0x2c79ab=_0x5b43bc['wmOlh'](_0x1d250c,_0x5b43bc['pneWx']);if(_0x2c79ab)_0x2c79ab['oncli'+'ck']=function(){var _0x27410e=_0x4270f4,_0x457d9c={'sPMBQ':'2|8|6'+_0x27410e(0x9fb)+'4|7|3'+_0x27410e(0x235)+'|9','ZHVdj':function(_0x3b67d3,_0x2d1752){var _0x29ea0a=_0x27410e;return _0x5b43bc[_0x29ea0a(0xb0f)](_0x3b67d3,_0x2d1752);},'zzNSj':function(_0x1e8d53,_0x30e380){var _0x2e7514=_0x27410e;return _0x5b43bc[_0x2e7514(0x134)](_0x1e8d53,_0x30e380);},'ROdYy':function(_0x33d29b,_0x24a01b){return _0x33d29b+_0x24a01b;},'JjEHE':_0x5b43bc[_0x27410e(0xb40)],'koulV':function(_0x2c8679,_0x523e49){return _0x2c8679-_0x523e49;},'PvIQv':function(_0x4f0aa3,_0x309441,_0x11b7c0){return _0x4f0aa3(_0x309441,_0x11b7c0);}};if(!_0x41b3ea['on'])_0x41b3ea['on']=!![],_0x41b3ea[_0x27410e(0xa1e)]=![];else{if(!_0x41b3ea['boxes']){if(_0x5b43bc['KQcaH'](_0x5b43bc['IvydG'],_0x5b43bc['IvydG']))_0x41b3ea['boxes']=!![];else{var _0x3e69d8=_0x457d9c[_0x27410e(0x82f)][_0x27410e(0x8ec)]('|'),_0xd78337=-0x3ef*0x6+0x1*-0xeae+0x2648;while(!![]){switch(_0x3e69d8[_0xd78337++]){case'0':_0x3e7dd7>_0x1b9d39-(-0x49*0x29+-0x3*0x65b+0x1ec8)?(_0x3b41be=_0x54556b+_0x457d9c[_0x27410e(0xa98)](_0x573b2c/_0x3e7dd7,_0x2d2beb-(0x243b+0xe75+-0x1955*0x2)),_0x3b531d=_0x130604+_0x457d9c[_0x27410e(0x825)](_0x48e1fb/_0x3e7dd7,_0x5c1296-(0x2*0x886+0x154*-0xa+-0x3be))):(_0x3b41be=_0x30c665+_0x573b2c,_0x3b531d=_0x1df8b6+_0x48e1fb);continue;case'1':var _0x3b41be=_0x5ec790,_0x3b531d=_0x577741;continue;case'2':var _0x3809ba=_0x291afa['list'][_0x37de7a];continue;case'3':_0x121e88['begin'+_0x27410e(0x7b2)]();continue;case'4':var _0x3574f0=_0x597b81!==null&&_0x3809ba['team']===_0x5ab161;continue;case'5':_0xe7e2dd['arc'](_0x3b41be,_0x3b531d,_0x3574f0?0x9fd*-0x2+0x1*0x2175+0x1*-0xd79:-0x11e6+0x42e+0xdbb+0.20000000000000018,-0x1*0x264e+-0x3*0xbaa+0x494c,_0x457d9c['zzNSj'](_0x44ab04['PI'],0x22f*-0x4+-0x11a*-0x21+0x1*-0x1b9c));continue;case'6':var _0x3e7dd7=_0x463859['sqrt'](_0x457d9c['ROdYy'](_0x573b2c*_0x573b2c,_0x457d9c[_0x27410e(0xa98)](_0x48e1fb,_0x48e1fb)));continue;case'7':_0xa5726c[_0x27410e(0x12c)+_0x27410e(0x174)]=_0x3574f0?_0x457d9c[_0x27410e(0x7bb)]:_0x27410e(0xe4)+'74';continue;case'8':var _0x573b2c=_0x457d9c[_0x27410e(0x280)](_0x3809ba['x'],_0x508756['feet'][-0x22bc+-0xbea+0x2ea6])*_0x2b2906,_0x48e1fb=_0x457d9c['zzNSj'](_0x3809ba['z']-_0x3a492b['feet'][-0x1*-0x532+-0x1d4+0x2b*-0x14],_0x329d9c);continue;case'9':_0x101bc5++;continue;case'10':_0x13e261['fill']();continue;}break;}}}else _0x5b43bc[_0x27410e(0x3db)](_0x5b43bc['xiHCF'],_0x27410e(0xa29))?_0x457d9c[_0x27410e(0x18b)](_0x5095a0,_0x3aa0b2['on'],_0x465704(_0x37f647[_0x27410e(0x1c6)])||0x20d5+0x25*0x94+-0x3638):_0x41b3ea['on']=![];}_0x2c79ab[_0x27410e(0x89d)+'onten'+'t']=!_0x41b3ea['on']?_0x27410e(0xa40)+'ff':_0x41b3ea[_0x27410e(0xa1e)]?_0x27410e(0x345)+'oth':_0x27410e(0xa88)+'ap',_0x2c79ab['style'][_0x27410e(0x2ac)+_0x27410e(0x4d6)]=_0x41b3ea['on']?_0x494d48:_0x5b43bc[_0x27410e(0x32d)],_0x2c79ab[_0x27410e(0x447)][_0x27410e(0x6ca)]=_0x41b3ea['on']?_0x5b43bc[_0x27410e(0x1dc)]:_0x5b43bc['QXIkO'];try{var _0x1c1a9a=_0x5b43bc[_0x27410e(0x97e)](_0x1dc3f6);if(_0x1c1a9a&&_0x1c1a9a['el'])_0x1c1a9a['el'][_0x27410e(0x447)][_0x27410e(0x1f8)+'ay']=_0x41b3ea['on']?'':_0x5b43bc['KFydA'];var _0x1d29c8=_0x558560;if(_0x1d29c8&&_0x1d29c8['cv'])_0x1d29c8['cv']['style'][_0x27410e(0x1f8)+'ay']=_0x41b3ea['on']&&_0x41b3ea['boxes']?'':'none';}catch(_0x5537ef){}};if(_0x1d250c('fold'))_0x1d250c(_0x5b43bc[_0x4270f4(0x3c2)])[_0x4270f4(0x624)+'ck']=function(){var _0x171f94=_0x4270f4;if(!_0x210eaa)return;var _0x25324c=_0x210eaa[_0x171f94(0x447)]['displ'+'ay']===_0x171f94(0x422);_0x210eaa[_0x171f94(0x447)]['displ'+'ay']=_0x25324c?'':_0x3185f9[_0x171f94(0x8d2)],_0x3185f9[_0x171f94(0x155)](_0x1d250c,_0x171f94(0x70a))['textC'+_0x171f94(0x4ea)+'t']=_0x25324c?'-':'+';};return document[_0x4270f4(0x2f5)]['appen'+'dChil'+'d'](_0x3ac1bc),_0x202e85={'el':_0x3ac1bc,'st':_0x32093d,'st2':_0xb8e545,'sp':_0x20b24d,'fx':_0x2e86da,'fv':_0x1804bb},_0x202e85;}catch(_0x182003){return console[_0x4270f4(0x639)](_0x5b43bc['XUWGd'],_0x5b43bc[_0x4270f4(0x772)](_0x4270f4(0x6ca)+':',_0x494d48),_0x182003),null;}}var _0x556db2=0x1135+0x1b79+-0x2cac*0x1;function _0x2b3d5f(_0x197017,_0x1f4fdf){var _0x78472c=_0x6937dd,_0x519eed={'XYMEx':function(_0x2aed05,_0x1032dc){return _0x2aed05<=_0x1032dc;},'ABFGh':function(_0x85ffee,_0x43e2a8){var _0x1def32=_0x5c65;return _0x5b43bc[_0x1def32(0x80b)](_0x85ffee,_0x43e2a8);},'VdGAj':_0x78472c(0x3da)+_0x78472c(0xa3c)+'3|2|5','djuVe':function(_0x34fdf8,_0x107d1d){return _0x5b43bc['JMuyr'](_0x34fdf8,_0x107d1d);},'mPENo':function(_0x577a1e,_0x99b0ac){var _0x27befd=_0x78472c;return _0x5b43bc[_0x27befd(0x1e4)](_0x577a1e,_0x99b0ac);},'JwZEe':function(_0x5711e1,_0x2fb865,_0x59296d,_0x78073b){var _0x4d1939=_0x78472c;return _0x5b43bc[_0x4d1939(0x535)](_0x5711e1,_0x2fb865,_0x59296d,_0x78073b);},'kaSNJ':function(_0xe0bcad,_0x1e7bb6){return _0x5b43bc['VvrJF'](_0xe0bcad,_0x1e7bb6);},'QasHK':_0x5b43bc[_0x78472c(0x27f)],'CtwyF':_0x78472c(0x76a),'wJKNa':'obfF'};if(_0x5b43bc[_0x78472c(0xab5)](_0x78472c(0x66a),_0x78472c(0xa4b)))return _0x519eed[_0x78472c(0xa62)](_0x5aa05d[_0x78472c(0x83e)](_0x27ca05-_0x44c9c4),_0x225a58['max'](0x362+0x1afb*-0x1+0x179a,_0x519eed['ABFGh'](_0x48327f['abs'](_0x137c83),-0xa*0x27+0x1*0x2368+-0x21e2+0.6)));else{var _0x577117=_0x3f1502['on'];_0x3f1502['on']=!!_0x197017;_0x3f1502['on']&&!_0x577117&&(_0x1f4fdf===undefined||_0x1f4fdf===null||_0x5b43bc['ExzYn'](Number,_0x1f4fdf)===-0x80e+0x10d5+-0x8c6)&&(_0x1f4fdf=_0x556db2);_0x3f1502[_0x78472c(0xae4)+'r']=Math['min'](_0x3f1502['max'],Math['max'](_0x3f1502[_0x78472c(0x240)],_0x5b43bc['IZQgq'](Number,_0x1f4fdf)||0x85b+0xd58+-0x15b2));if(!_0x3f1502['on'])_0x2f3357={};var _0x2c3ca7=_0xf2d1dd();if(_0x2c3ca7){if(_0x5b43bc['ZCgOH'](_0x78472c(0x8dc),_0x5b43bc['RdtQW'])){var _0x35dd73=_0x519eed[_0x78472c(0x92f)][_0x78472c(0x8ec)]('|'),_0x2b704b=0x1a6*-0x4+0x9d5+-0x33d;while(!![]){switch(_0x35dd73[_0x2b704b++]){case'0':var _0x2efbc0=new _0xc26892(_0x2ff45c[_0x78472c(0x2eb)+'r'],_0x2ff45c['byteO'+_0x78472c(0x937)],_0x2ff45c[_0x78472c(0x6a2)+'ength']);continue;case'1':var _0x55aa01=_0x32cae3[_0x146f7e];continue;case'2':if(_0x519eed['djuVe'](_0x438af7,_0x78472c(0xa08)))_0x341b38=_0x429ed2(_0x30e3f3);else{if(_0x174784==='obfI')_0x341b38=_0x110b17|0x17c3+0x24b8+-0x18d*0x27;else _0x341b38=_0x519eed[_0x78472c(0x4db)](_0x576106?-0x416*0x1+-0x2687*-0x1+-0x2*0x1138:-0x5ec+-0x2669+0x369*0xd,0xc2e+-0x27*0x3c+-0x1*0x20b);}continue;case'3':var _0x341b38;continue;case'4':var _0x2ff45c=_0x4c3876(_0x9728ce,_0x5c7934,_0x55aa01['size']);continue;case'5':return _0x519eed[_0x78472c(0xaea)](_0x399770,_0x11af1b+_0x1c785e+_0x55aa01[_0x78472c(0x5c5)+'n'],'i32',_0x341b38^_0x34f4fd)&&_0x390914(_0x519eed[_0x78472c(0x3ed)](_0x519eed[_0x78472c(0x3ed)](_0x1b3616,_0x2cc6fe),_0x55aa01[_0x78472c(0x18f)]),_0x578611==='obfF'?_0x519eed['QasHK']:_0x227eeb===_0x519eed['CtwyF']?'i32':'u8',_0x295b8c===_0x519eed['wJKNa']?_0x512b1f:_0x2211fe==='obfI'?_0x13d500|0x16da+0x179b+0x1*-0x2e75:_0x4cc88d?0x781*-0x3+0x4a3*0x6+-0x54e:0x1*0x26e7+-0x67b*-0x3+0x74b*-0x8)&&_0x10a520(_0x287761+_0x53d352+_0x55aa01[_0x78472c(0x1f2)+'e'],'u8',0x2253+-0x26b*-0x2+-0x5*0x7d5);case'6':if(!_0x2ff45c)return![];continue;case'7':var _0x34f4fd=_0x55aa01[_0x78472c(0x9d7)+'pe']==='u8'?_0x2efbc0['getUi'+'nt8'](_0x55aa01[_0x78472c(0x4ab)]):_0x2efbc0['getIn'+_0x78472c(0x479)](_0x55aa01['key'],!![]);continue;}break;}}else{_0x2c3ca7['sp']&&(_0x2c3ca7['sp']['textC'+_0x78472c(0x4ea)+'t']=_0x3f1502['on']?_0x78472c(0x460)+_0x78472c(0x494):_0x78472c(0x460)+_0x78472c(0x690),_0x2c3ca7['sp']['style'][_0x78472c(0x2ac)+'round']=_0x3f1502['on']?_0x494d48:_0x5b43bc['ZILEl'],_0x2c3ca7['sp'][_0x78472c(0x447)]['color']=_0x3f1502['on']?_0x5b43bc[_0x78472c(0x1dc)]:_0x78472c(0x13c)+'f5');if(_0x2c3ca7['fx'])_0x2c3ca7['fx'][_0x78472c(0x1c6)]=_0x5b43bc[_0x78472c(0x33b)](String,_0x3f1502[_0x78472c(0xae4)+'r']);if(_0x2c3ca7['fv'])_0x2c3ca7['fv'][_0x78472c(0x89d)+'onten'+'t']=_0x5b43bc['mmTKn'](_0x3f1502[_0x78472c(0xae4)+'r'][_0x78472c(0x67c)+'ed'](0x1ca7+0x21*0x11b+-0x4121),'x');}}}}function _0x3b9cdb(_0x502afb){var _0x3bafa6=_0x6937dd,_0x5142d2={'DrWhS':function(_0x4264cc,_0x44fa38){var _0x51facd=_0x5c65;return _0x5b43bc[_0x51facd(0xaa)](_0x4264cc,_0x44fa38);},'TgYkV':function(_0x421c6a,_0x12527d){return _0x421c6a<_0x12527d;},'pPdNr':function(_0x9d9dc1,_0x1bdcdc){return _0x9d9dc1/_0x1bdcdc;},'CZgZW':function(_0x34a80a,_0x4a82e6){return _0x5b43bc['gUyIz'](_0x34a80a,_0x4a82e6);},'bbGFd':'--p','UkXDq':function(_0x2328b7,_0x2f4d0){return _0x2328b7(_0x2f4d0);}},_0x3290a4=_0xf2d1dd();if(!_0x3290a4||!_0x3290a4['st'])return;try{if(_0x5b43bc['IQMfy'](_0x5b43bc[_0x3bafa6(0x7cc)],_0x5b43bc[_0x3bafa6(0xaee)])){var _0x396443=_0x5b43bc['UOaMx']['split']('|'),_0x38c5e9=0x2cf*0x3+-0x2f3*0x1+-0x1*0x57a;while(!![]){switch(_0x396443[_0x38c5e9++]){case'0':var _0x1ce0ed=_0x555a96[_0x3bafa6(0x894)](_0x16e11d);continue;case'1':var _0x119dbc=_0x48d005,_0x972289=0x62+-0x17*-0xe8+-0x2*0xa9d,_0x4b7e97=-_0x39c59a;continue;case'2':var _0x39c59a=_0x5b43bc[_0x3bafa6(0x7a4)](_0x1b14cd['sin'](_0x24e2d1),_0x1ce0ed),_0x3b13f2=-_0x4befe6[_0x3bafa6(0x4d8)](_0x16e11d),_0x48d005=_0x5d3f32[_0x3bafa6(0x894)](_0x24e2d1)*_0x1ce0ed;continue;case'3':var _0x292596=_0x597e1f[-0xc67+0x97*-0x4+-0x1*-0xec3]-_0xe9cacb[-0x4*-0x212+0x87*-0x2+-0x73a],_0x1942fe=_0x5b43bc[_0x3bafa6(0xa19)](_0x130f8f[-0x1e46+-0x1b33+0x397a],_0x545098[-0x1*0x2353+-0xd61+0x151*0x25]),_0x5c4ded=_0x5b43bc['CcoTL'](_0x3678c4[0xb*-0xe5+-0x2*0x1285+0x3*0xfa1],_0x1e7fa4[0x1337*0x1+0xea1+-0x7a*0x47]);continue;case'4':var _0x42cf5d=_0x3c281/_0x3dd7e8;continue;case'5':var _0x2eb417=_0x5b43bc[_0x3bafa6(0xb0)](_0x292596*(_0x972289*_0x48d005-_0x4b7e97*_0x3b13f2)+_0x1942fe*(_0x4b7e97*_0x39c59a-_0x119dbc*_0x48d005),_0x5c4ded*_0x5b43bc[_0x3bafa6(0x16d)](_0x119dbc*_0x3b13f2,_0x972289*_0x39c59a));continue;case'6':if(_0x4ec29a<-(-0x6*0x18b+-0x1db4+-0x20d*-0x13+0.6000000000000001)||_0x4ec29a>0x606*-0x5+-0x588+0x23a7+0.6000000000000001||_0x1f3f22<-(-0x19fd+0x2291+-0x893+0.6000000000000001)||_0x1f3f22>-0x1677+0x1bef+-0x577*0x1+0.6000000000000001)return null;continue;case'7':var _0x3e5078=_0x357d2e[_0x3bafa6(0x7dd)]*_0x489a45['PI']/(-0x1b07+-0x1a6b+-0x3626*-0x1);continue;case'8':var _0x4ec29a=_0x5b43bc[_0x3bafa6(0x643)](_0x5b43bc['bICOR'](_0x35757e,_0x45b477),_0x47b68e*_0x42cf5d);continue;case'9':if(!_0x232747)return null;continue;case'10':return{'x':(_0x5b43bc['BCRIT'](_0x4ec29a,-0x3*0x469+-0x1712+0x1*0x244d+0.5)+(-0x886+0x269*0x9+-0x1*0xd2b+0.5))*_0x44573e,'y':_0x5b43bc['qiJoD'](0xa6e*-0x1+0x1b71+-0x1103+0.5,_0x5b43bc['AfSlb'](_0x1f3f22,-0xeb0+-0x22ec+0x319c+0.5))*_0x1219b4,'z':_0x45b477};case'11':var _0x232747=_0x4a7f67();continue;case'12':var _0x1f3f22=_0x5b43bc['ttlsn'](_0x2eb417,_0x45b477)/_0x47b68e;continue;case'13':if(_0x5b43bc[_0x3bafa6(0x817)](_0x45b477,-0x17f7+-0x19*0x133+0x35f2+0.05))return null;continue;case'14':var _0x45b477=_0x5b43bc[_0x3bafa6(0x932)](_0x5b43bc[_0x3bafa6(0x406)](_0x292596,_0x39c59a)+_0x5b43bc['zsRYw'](_0x1942fe,_0x3b13f2),_0x5c4ded*_0x48d005);continue;case'15':var _0x16e11d=_0x5b43bc['ttlsn'](_0x232747[_0x3bafa6(0xa70)]*_0x3dc699['PI'],0x19a*0xf+0x832*0x2+0x27b6*-0x1),_0x24e2d1=_0x5b43bc[_0x3bafa6(0x749)](_0x232747['yaw']*_0x514b88['PI'],0x29*0xb2+0x1884+0x4a*-0xb5);continue;case'16':var _0x35757e=_0x5b43bc[_0x3bafa6(0xa1d)](_0x292596,_0x119dbc)+_0x5b43bc[_0x3bafa6(0x168)](_0x1942fe,_0x972289)+_0x5b43bc['RyJDS'](_0x5c4ded,_0x4b7e97);continue;case'17':var _0x47b68e=_0x383080[_0x3bafa6(0x322)](_0x5b43bc[_0x3bafa6(0x935)](_0x3e5078,0x1*-0x598+0x33*0xad+-0x9*0x335));continue;}break;}}else{if(!_0x293fa4()&&!_0x167128){if(_0x5b43bc[_0x3bafa6(0x866)](_0x5b43bc[_0x3bafa6(0x151)],_0x5b43bc[_0x3bafa6(0xa6c)])){if(_0x3290a4['el'])_0x3290a4['el'][_0x3bafa6(0x447)]['displ'+'ay']=_0x3bafa6(0x422);return;}else{var _0x496cdb=_0x5b43bc[_0x3bafa6(0x9f7)][_0x3bafa6(0x8ec)]('|'),_0xfdf657=0xb*-0x289+0x1073+0xb70;while(!![]){switch(_0x496cdb[_0xfdf657++]){case'0':_0x50e082['input']=_0x9980c4;continue;case'1':_0x50e082[_0x3bafa6(0x441)+_0x3bafa6(0xb36)+'d'](_0x29d28d);continue;case'2':_0x9980c4['oninp'+'ut']=function(){var _0x9b450=_0x3bafa6;_0x5142d2[_0x9b450(0x534)](_0x550859,_0x4657b8(_0x9980c4['value'])||_0x3ef1aa),_0x236699();};continue;case'3':_0x9980c4[_0x3bafa6(0xa12)]=_0x5b43bc[_0x3bafa6(0x8de)](_0x30b0fd,_0x2a70af);continue;case'4':_0x50e082['appen'+_0x3bafa6(0xb36)+'d'](_0x9980c4);continue;case'5':_0x9980c4[_0x3bafa6(0xf7)]=_0x5b43bc['VFqiB'](_0x557e30,_0x4b202a);continue;case'6':_0xc3baf9[_0x3bafa6(0x694)][_0x3bafa6(0x7d6)](_0x236699);continue;case'7':var _0x236699=function(){var _0x4d7ee3=_0x3bafa6,_0x1edba2=_0x57edf5();_0x9980c4['value']=_0x2be82f(_0x1edba2),_0x29d28d[_0x4d7ee3(0x89d)+_0x4d7ee3(0x4ea)+'t']=_0x5142d2['DrWhS'](_0x5142d2['TgYkV'](_0x2beaae,-0xf03*-0x1+-0x21d+-0xce5)?_0x1edba2['toFix'+'ed'](-0x1bd*-0x14+0x7fa+-0x15*0x209):_0xf8bec0(_0x44a41d['round'](_0x1edba2)),_0x9980c4[_0x4d7ee3(0xa14)+'et']['unit']||'');var _0x835a79=_0x5142d2['pPdNr'](_0x5142d2['CZgZW'](_0x1edba2,_0x4cffb1),_0x2b3193-_0x2efe86)*(0x10ec+-0x1d3*-0x7+0x1d4d*-0x1);_0x9980c4['style'][_0x4d7ee3(0xad6)+'opert'+'y'](_0x5142d2['bbGFd'],_0x835a79+'%');};continue;case'8':_0x9980c4[_0x3bafa6(0xaa0)+_0x3bafa6(0x49c)]=_0x5b43bc[_0x3bafa6(0x10f)];continue;case'9':var _0x9980c4=_0x25272c[_0x3bafa6(0x51a)+_0x3bafa6(0x999)+'ent'](_0x5b43bc[_0x3bafa6(0x2d7)]);continue;case'10':_0x9980c4['min']=_0x34d56f(_0x29df25);continue;case'11':_0x236699();continue;case'12':_0x50e082[_0x3bafa6(0x287)]=_0x236699;continue;case'13':var _0x50e082=_0x43d0a8('div',_0x3bafa6(0x48e)+'nge');continue;case'14':var _0x29d28d=_0x14b555('span',_0x5b43bc[_0x3bafa6(0x26f)]);continue;case'15':_0x9980c4[_0x3bafa6(0x55e)]=_0x5b43bc[_0x3bafa6(0x618)];continue;case'16':return _0x50e082;}break;}}}if(_0x3290a4['el'])_0x3290a4['el'][_0x3bafa6(0x447)]['displ'+'ay']='';var _0x3c9088=Object['keys'](_0x502afb&&_0x502afb[_0x3bafa6(0x981)+_0x3bafa6(0x14e)]||{})['lengt'+'h'],_0xa279c2=_0x502afb&&_0x502afb[_0x3bafa6(0x141)]||null,_0x19f260=_0xa279c2?_0xa279c2['enemy'+_0x3bafa6(0xae5)]||-0x3c3*-0x1+0x1*0x79f+-0x3e*0x2f:0x20f9+0x17b3+-0x38ac,_0x3b434d=_0xa279c2?_0xa279c2[_0x3bafa6(0x5bc)+'unt']||-0xcaa*-0x2+0x95b+-0x22af:-0x12e5*0x1+-0x5*0x35e+-0x3*-0xbe9,_0x45b4da=_0x4908fe?_0x5b43bc[_0x3bafa6(0x319)]((_0x4908fe['buffe'+'r']['byteL'+_0x3bafa6(0x348)]/(-0x7d592+0x1f81f*0x2+-0x199*-0xc74))[_0x3bafa6(0x67c)+'ed'](-0x47d+-0x3*0xc3d+0x2934),'MB'):'no-me'+'m',_0x116d8f=_0x5b43bc[_0x3bafa6(0x927)](_0x5b43bc[_0x3bafa6(0x598)](_0x5b43bc[_0x3bafa6(0x4aa)](_0x5b43bc['KRfrR'](_0x5b43bc['jIWxB'](_0x5b43bc['rdxDe']('v',_0x502afb&&_0x502afb[_0x3bafa6(0x957)+'on']||_0xe7e7c6),_0x3bafa6(0x1b0)+_0x3bafa6(0x15d)),_0x502afb&&_0x502afb[_0x3bafa6(0x3ec)+_0x3bafa6(0x9a9)+'ed']||0x15*-0x104+-0x2630+0x3b84),'/'),_0x502afb&&_0x502afb[_0x3bafa6(0x3ec)+_0x3bafa6(0x33c)]||0x2*-0x11c3+-0x71b+0x617*0x7)+('\x20\x20obj'+'s\x20'),_0x3c9088)+_0x5b43bc['vzTIo']+_0x45b4da+(_0x3bafa6(0xa2a)+_0x3bafa6(0xf3))+_0x5b33aa;_0x3290a4['st']['textC'+'onten'+'t']=_0x116d8f;var _0x120070=_0x3290a4['st2'];if(_0x120070){if(_0x5b43bc[_0x3bafa6(0x469)](_0x5b43bc[_0x3bafa6(0x92e)],'pHUrn')){var _0x973c05=_0x1f1dd4[_0x3bafa6(0x335)];if(!_0x973c05||_0x973c05['__sak'+_0x3bafa6(0x7b7)]!==_0x1f7abe)return;try{if(_0x5b43bc['DeROX'](_0x973c05['kind'],_0x3bafa6(0xbf))){_0x438b91()['set']({'host':_0x973c05[_0x3bafa6(0x832)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x973c05['kind']===_0x3bafa6(0x7ea)+'t')_0x262d46()[_0x3bafa6(0x3ac)](_0x973c05[_0x3bafa6(0x7ea)+'t']);}catch(_0x24641c){_0x82db40['warn'](_0x3bafa6(0x6c1)+_0x3bafa6(0x8e3)+_0x3bafa6(0x528)+_0x3bafa6(0xac5)+'ate\x20f'+_0x3bafa6(0x9f1),'color'+':'+_0x53a9fc,_0x24641c);}}else _0x120070[_0x3bafa6(0x89d)+_0x3bafa6(0x4ea)+'t']=_0x19f260>-0x1*0x14b7+-0x811*-0x1+-0xca6*-0x1?_0x5b43bc['ASJQF'](_0x5b43bc['QjVBu'](_0x5b43bc[_0x3bafa6(0x7d2)],_0x19f260)+(_0x3b434d?'\x20+\x20'+_0x3b434d+_0x5b43bc[_0x3bafa6(0xb06)]:''),_0xa279c2&&_0xa279c2[_0x3bafa6(0x261)+'a']?_0x5b43bc['fiQhP'](_0x5b43bc[_0x3bafa6(0x59f)],_0xa279c2[_0x3bafa6(0x261)+_0x3bafa6(0x9a6)]):_0x3bafa6(0xb10)+'\x20-'):_0x5b43bc['hVdEA']+(_0xa279c2&&_0xa279c2[_0x3bafa6(0x261)+'a']?_0xa279c2[_0x3bafa6(0x261)+'aFrom']:'-'),_0x120070['style']['color']=_0x5b43bc['zMJDt'](_0x19f260,0x135e+-0x18f*0x17+0x1*0x107b)?_0x5b43bc['bepaB']:_0x5b43bc[_0x3bafa6(0x1e3)];}}}catch(_0x5d0114){}}window['addEv'+_0x6937dd(0x6cf)+'stene'+'r'](_0x5b43bc['YeJZy'],function(_0xc8fa8f){var _0x2f63b5=_0x6937dd,_0x1dcf7d={'ASHDt':function(_0x1d5377,_0x2e209a,_0x17e165){return _0x1d5377(_0x2e209a,_0x17e165);}};if(!_0xc8fa8f)return;try{if(_0x5b43bc['IwlJy'](_0xc8fa8f['code'],'F9')){_0xc8fa8f['preve'+'ntDef'+_0x2f63b5(0x41b)](),_0x2dafd7(_0x5b43bc[_0x2f63b5(0x5f2)]);return;}if(_0xc8fa8f['code']==='F7'){_0xc8fa8f[_0x2f63b5(0x324)+_0x2f63b5(0xa24)+_0x2f63b5(0x41b)](),_0x2b3d5f(!_0x3f1502['on'],_0x3f1502['facto'+'r']);return;}if(_0xc8fa8f['code']==='F8'){_0xc8fa8f[_0x2f63b5(0x324)+_0x2f63b5(0xa24)+_0x2f63b5(0x41b)](),_0x5b43bc[_0x2f63b5(0x787)](_0x2b3d5f,_0x3f1502['on'],_0x5b43bc['lBUrC'](_0x3f1502[_0x2f63b5(0xae4)+'r'],0xf07+-0x147b+0x2*0x2ba+0.5));return;}if(_0x5b43bc['cDyBf'](_0xc8fa8f[_0x2f63b5(0x7a0)],'F6')){_0xc8fa8f['preve'+'ntDef'+'ault'](),_0x2b3d5f(_0x3f1502['on'],_0x5b43bc[_0x2f63b5(0x798)](_0x3f1502['facto'+'r'],-0x3*0xc0f+-0x1571+0x76*0x7d+0.5));return;}if(_0x5b43bc['Cyymy'](_0xc8fa8f[_0x2f63b5(0x7a0)],_0x5b43bc[_0x2f63b5(0x7e1)])){if(_0x5b43bc[_0x2f63b5(0x6f5)]!==_0x2f63b5(0x823))_0x10705a[_0x2f63b5(0x447)]['opaci'+'ty']=_0x2c685f['open']?'1':'.5';else{_0xc8fa8f[_0x2f63b5(0x324)+'ntDef'+'ault'](),_0x15f25d(!_0x1e9e8e[_0x2f63b5(0x2ec)]);return;}}if(_0xc8fa8f[_0x2f63b5(0x7a0)]===_0x2f63b5(0x306)+'etRig'+'ht'){if(_0x5b43bc[_0x2f63b5(0x4c5)](_0x5b43bc['BeQAI'],'VxvXd'))_0x1dcf7d[_0x2f63b5(0x97b)](_0x29f014,_0x148f67['on'],_0x461e8d);else{_0xc8fa8f[_0x2f63b5(0x324)+_0x2f63b5(0xa24)+_0x2f63b5(0x41b)](),_0x149473['fov']=Math[_0x2f63b5(0x240)](-0x11*-0x1dc+-0x675*0x3+-0xbb1,_0x5b43bc['morME'](_0x149473['fov'],0x2534+-0x12da+-0x1258)),_0x3ed5b4();return;}}if(_0x5b43bc[_0x2f63b5(0x7a5)](_0xc8fa8f['code'],'Brack'+_0x2f63b5(0x671)+'t')){_0xc8fa8f[_0x2f63b5(0x324)+_0x2f63b5(0xa24)+_0x2f63b5(0x41b)](),_0x149473[_0x2f63b5(0x7dd)]=Math[_0x2f63b5(0xa12)](0x207e+0x699*0x1+0x1*-0x26f9,_0x149473['fov']-(-0x2392+0x17*0xea+0xe8e)),_0x5b43bc[_0x2f63b5(0x3be)](_0x3ed5b4);return;}}catch(_0x154180){}},!![]);var _0x41b3ea={'on':!![],'span':0x50,'boxes':![]};function _0x10d8b1(){var _0x23a88e=_0x6937dd,_0x264c44={'EgAlC':function(_0xf6dba1,_0xc6f15f,_0x2700c3){return _0xf6dba1(_0xc6f15f,_0x2700c3);},'CgBeE':function(_0x16f0cf,_0x4574f3,_0x47c4bd){return _0x16f0cf(_0x4574f3,_0x47c4bd);},'btgPt':function(_0x3c281c,_0x1f78d4){return _0x3c281c(_0x1f78d4);}},_0x53c466=_0x44159b['Photo'+'nNetw'+'orkSy'+'nc']||{},_0x13ec19=Object['keys'](_0x53c466);for(var _0x3e372d=-0x3fe+0x3bc*0x7+-0x87*0x2a;_0x3e372d<_0x13ec19['lengt'+'h'];_0x3e372d++){if(_0x5b43bc[_0x23a88e(0x7e9)]('pZcpa',_0x23a88e(0x8b6))){_0x362b6b[_0x23a88e(0x324)+'ntDef'+'ault'](),_0x264c44['EgAlC'](_0x2c9ae0,!_0x195d1c['on'],_0x1927f1[_0x23a88e(0xae4)+'r']);return;}else{var _0x4e3611=_0x53c466[_0x13ec19[_0x3e372d]][_0x23a88e(0xb22)],_0x4c105f=_0x5b43bc[_0x23a88e(0x175)](_0x363e06,_0x5b43bc['ADBKw'](_0x4e3611,0x1f7d+0x7*-0x412+0x2cf*-0x1),_0x23a88e(0x3c0));if(!_0x4c105f)continue;var _0x2f50b6=_0x27acec['Mouse'+_0x23a88e(0x936)]||[],_0x14cd79={'mouseLook':'0x'+(_0x4c105f>>>-0x161b+-0x99+0x16b4)[_0x23a88e(0x9b0)+'ing'](0x3*-0x346+-0xd12+0x16f4),'floats':{},'camera':null,'vec2':null};for(var _0x3708b9=-0x23b5+-0x1f1f+0x42d4;_0x5b43bc[_0x23a88e(0x744)](_0x3708b9,_0x2f50b6[_0x23a88e(0x76e)+'h']);_0x3708b9++){if(_0x23a88e(0xaa3)!=='kwYth'){var _0x124871=_0x2ab2c8(_0xdbead0[_0x4ff9bf][0x12*-0x167+-0x26ba+0x3ff8]),_0x11e11f=_0x264c44[_0x23a88e(0xa3b)](_0x1e5b58,_0x23a88e(0x97d),'sk-va'+'l');_0x11e11f[_0x23a88e(0x447)]['minWi'+_0x23a88e(0x1b3)]='0',_0x11e11f[_0x23a88e(0x447)]['flex']='1',_0x11e11f[_0x23a88e(0x447)]['textA'+'lign']='right',_0x11e11f[_0x23a88e(0x89d)+_0x23a88e(0x4ea)+'t']=_0x264c44[_0x23a88e(0x679)](_0x16d80c,_0x1d9cc0[_0x233e34][0x1*-0x2000+0x1052+-0x1f6*-0x8]),_0x11e11f[_0x23a88e(0xa14)+'et']['k']=_0x3fb8ef[_0x4f0de5][0x6bc+-0x168a+-0x13*-0xd5],_0x124871['appen'+'dChil'+'d'](_0x11e11f);var _0x1d3d53=_0x276a02['lengt'+'h']?_0x102e3e[_0x34e6df[_0x23a88e(0x76e)+'h']-(-0x168f+0x4e2*0x1+0x92*0x1f)]:null;!_0x1d3d53&&(_0x1d3d53=_0x512c6a(_0x23a88e(0x38c)+'on',![]),_0x3f35df[_0x23a88e(0x7d6)](_0x1d3d53)),_0x1d3d53[_0x23a88e(0x2f5)]['appen'+_0x23a88e(0xb36)+'d'](_0x124871),_0x1d3d53[_0x23a88e(0x2f5)][_0x23a88e(0x7bd)+'hild']['sp']=_0x11e11f;}else{if(_0x5b43bc['RlVUu'](_0x2f50b6[_0x3708b9][0x1c22+-0x35f*-0x7+-0x6*0x89f],'f32'))continue;_0x14cd79['float'+'s']['0x'+_0x2f50b6[_0x3708b9][-0x5c*-0x11+0x1f1+-0x1*0x80d][_0x23a88e(0x9b0)+'ing'](-0x1a28+-0x6a*0xd+0x1f9a)]=_0x5b43bc[_0x23a88e(0x93c)](_0x363e06,_0x5b43bc[_0x23a88e(0x4e2)](_0x4c105f,_0x2f50b6[_0x3708b9][0x1e1*0x5+-0xd6a+0x405]),_0x5b43bc[_0x23a88e(0x27f)]);}}var _0x30d9ea=_0x363e06(_0x4c105f+(0x4e+-0x66e+0x7c*0xd),_0x23a88e(0x3c0));if(_0x30d9ea)_0x14cd79['camer'+'a']='0x'+(_0x30d9ea>>>0x18b9+-0xe2*-0x5+0x1d23*-0x1)['toStr'+'ing'](0x263*0xd+0x11e9+-0x30e0);var _0x211cf3=_0x5b43bc[_0x23a88e(0xee)](_0x5d33b3,_0x4c105f,-0xb*0x35f+-0xe*0x112+0x9*0x5d1,0x1*-0x1c91+-0x2*-0x799+0xd61);if(_0x211cf3)_0x14cd79[_0x23a88e(0x29c)]=_0x211cf3;return _0x14cd79;}}return null;}var _0x57b9e4=_0x5b43bc[_0x6937dd(0x21d)],_0x149473={'pitch':null,'yaw':null,'pitchOff':0x0,'yawOff':0x0,'fov':0x5a,'known':![]};try{var _0x5c1f93=localStorage['getIt'+'em'](_0x57b9e4);if(_0x5c1f93)_0x149473['fov']=Math[_0x6937dd(0x240)](0x244e+0x37e*0x9+-0x4330,Math[_0x6937dd(0xa12)](-0x236d+-0x12c0+0x7b*0x71,parseFloat(_0x5c1f93)||-0x1765+-0x18cf+0x308e));}catch(_0x46b574){}function _0x3ed5b4(){var _0x26fc5e=_0x6937dd;if(_0x5b43bc['Dqnzc']('IGJAC',_0x26fc5e(0x467))){var _0x1647e6=_0x5b7e01['getIt'+'em'](_0x5ed6ae);if(!_0x1647e6)return;var _0x4d0b65=_0x14f9f7['parse'](_0x1647e6);if(_0x4d0b65&&typeof _0x4d0b65['x']===_0x5b43bc[_0x26fc5e(0x637)]&&typeof _0x4d0b65['y']===_0x26fc5e(0x82d)+'r')_0x5a2e1a[_0x26fc5e(0x2a7)]=_0x4d0b65;}else try{localStorage[_0x26fc5e(0x62f)+'em'](_0x57b9e4,_0x5b43bc['IZQgq'](String,_0x149473[_0x26fc5e(0x7dd)]));}catch(_0x80c7e3){}}var _0x57a41b={'pitch':null,'yaw':null,'identified':![],'why':'no\x20Mo'+_0x6937dd(0x30b)+'ok\x20ye'+'t'};function _0x2bebe4(){var _0x1d88d6=_0x6937dd,_0x4f9290=_0x5b43bc['zsGYL'](_0x10d8b1);if(!_0x4f9290||!_0x4f9290['mouse'+'Look']){if(_0x5b43bc['IQMfy'](_0x5b43bc[_0x1d88d6(0x205)],_0x1d88d6(0x1f7)))_0x5857b6[_0x1d88d6(0x89d)+'onten'+'t']=_0x1d88d6(0x1af)+'faile'+'d';else return _0x57a41b[_0x1d88d6(0x956)+_0x1d88d6(0x458)]=![],_0x57a41b[_0x1d88d6(0x29e)]=_0x1d88d6(0x2e8)+_0x1d88d6(0x30b)+'ok\x20ye'+'t',null;}var _0x5616d3=parseInt(_0x4f9290['mouse'+_0x1d88d6(0x936)],-0x105*0xe+-0x1*0x565+0x13bb),_0x51a674=_0x363e06(_0x5616d3+(-0x16d8*-0x1+-0x4*-0x899+-0x130c*0x3),_0x1d88d6(0xb11)),_0x4d624a=_0x363e06(_0x5616d3+(0x1dcb+0x371+-0x2120),'f32');if(_0x5b43bc['WPYfa'](typeof _0x51a674,_0x5b43bc[_0x1d88d6(0x637)])||typeof _0x4d624a!==_0x5b43bc[_0x1d88d6(0x637)]||!_0x5b43bc['jUpRM'](isFinite,_0x51a674)||!_0x5b43bc[_0x1d88d6(0xe8)](isFinite,_0x4d624a))return _0x57a41b['ident'+'ified']=![],_0x57a41b['why']=_0x1d88d6(0x355)+_0x1d88d6(0x3df)+_0x1d88d6(0x7e4)+_0x1d88d6(0x2ee)+_0x1d88d6(0x163)+'le',null;_0x57a41b[_0x1d88d6(0xa70)]=_0x51a674,_0x57a41b[_0x1d88d6(0x72c)]=_0x4d624a;var _0x277888=[];if(_0x51a674<-(0x1*-0xa13+-0x52*0x1d+0x13b7)||_0x51a674>-0x2*-0xd87+-0x83*-0x4a+-0x5*0xcea)_0x277888['push'](_0x5b43bc[_0x1d88d6(0x7f1)](_0x5b43bc[_0x1d88d6(0x9d9)]+Math['round'](_0x51a674),'\x20is\x20n'+'ot\x20a\x20'+_0x1d88d6(0xa70)));_0x57a41b[_0x1d88d6(0x29e)]=_0x277888['lengt'+'h']?_0x277888['join'](';\x20'):'';if(_0x277888[_0x1d88d6(0x76e)+'h']){if(_0x5b43bc[_0x1d88d6(0xae3)](_0x5b43bc[_0x1d88d6(0x293)],_0x5b43bc[_0x1d88d6(0x64f)]))return _0x57a41b[_0x1d88d6(0x956)+_0x1d88d6(0x458)]=![],null;else{var _0x4f6693=_0x2df040[_0x2977ee],_0x50b9ed=typeof _0x3b0a11[_0x4f6693];_0x2454f2[_0x4f6693]=_0x5b43bc['OVswr'](_0x50b9ed,_0x5b43bc[_0x1d88d6(0x84b)])?'undef'+'ined':_0x50b9ed;}}return _0x57a41b['ident'+_0x1d88d6(0x458)]=!![],_0x57a41b['pitch']=_0x51a674+_0x149473[_0x1d88d6(0xa70)+'Off'],_0x57a41b[_0x1d88d6(0x72c)]=_0x4d624a+_0x149473['yawOf'+'f'],_0x57a41b;}function _0x16e2bc(_0x1be2ec,_0x1b4a5b,_0x5d1423,_0xe87e02){var _0x1eac31=_0x6937dd,_0x2bd8fd={'bFmRD':function(_0x12a05b,_0x1418cc){var _0x3ec1b6=_0x5c65;return _0x5b43bc[_0x3ec1b6(0x538)](_0x12a05b,_0x1418cc);}};if(_0x1eac31(0x8db)!==_0x1eac31(0xa71)){var _0x37ad2c=_0x2bebe4();if(!_0x37ad2c)return null;var _0x34b328=_0x37ad2c['pitch']*Math['PI']/(-0x1495+-0x3b*0x53+-0x2e3*-0xe),_0x1c177e=_0x37ad2c['yaw']*Math['PI']/(0x1*0x1883+-0x1*-0x169f+0x2a*-0x11b),_0x2acace=Math[_0x1eac31(0x894)](_0x34b328),_0x39860d=Math[_0x1eac31(0x4d8)](_0x1c177e)*_0x2acace,_0xab495d=-Math['sin'](_0x34b328),_0x505705=Math[_0x1eac31(0x894)](_0x1c177e)*_0x2acace,_0x216374=_0x505705,_0x4b1bb5=0x1048*-0x1+-0x359*0x7+0xd3d*0x3,_0x359bb9=-_0x39860d,_0x3a33ae=_0x5b43bc[_0x1eac31(0x8f6)](_0x1b4a5b[0x7aa+0x234e+0x58*-0x7d],_0x1be2ec[-0x6c2+-0xf0b+0x15cd*0x1]),_0x3ac03d=_0x1b4a5b[-0xe77*0x1+-0x1*0x195f+0x27d7]-_0x1be2ec[-0x26*0x82+-0x13*-0x14c+-0x557],_0x521ee9=_0x5b43bc[_0x1eac31(0x4f6)](_0x1b4a5b[-0x19e5+-0x47*0x45+0x2d0a],_0x1be2ec[0x1976+-0xf8a+-0x5e*0x1b]),_0x4cd7a1=_0x5b43bc[_0x1eac31(0x8fc)](_0x5b43bc[_0x1eac31(0x545)](_0x3a33ae,_0x39860d)+_0x3ac03d*_0xab495d,_0x5b43bc[_0x1eac31(0xb02)](_0x521ee9,_0x505705));if(_0x4cd7a1<=0x20f8+0x10e5+-0x31dd+0.05)return null;var _0x45fb8b=_0x5b43bc[_0x1eac31(0x702)](_0x3a33ae*_0x216374+_0x5b43bc[_0x1eac31(0x7fa)](_0x3ac03d,_0x4b1bb5),_0x521ee9*_0x359bb9),_0x3e9fb3=_0x3a33ae*_0x5b43bc[_0x1eac31(0x860)](_0x5b43bc[_0x1eac31(0x80b)](_0x4b1bb5,_0x505705),_0x359bb9*_0xab495d)+_0x3ac03d*(_0x359bb9*_0x39860d-_0x216374*_0x505705)+_0x521ee9*(_0x5b43bc['IwTyk'](_0x216374,_0xab495d)-_0x4b1bb5*_0x39860d),_0x92ba6b=_0x5b43bc[_0x1eac31(0x5dc)](_0x5d1423,_0xe87e02),_0x1f8997=_0x149473[_0x1eac31(0x7dd)]*Math['PI']/(0x5*-0x539+0xd*0x17+-0x43*-0x62),_0x2bf21e=Math[_0x1eac31(0x322)](_0x1f8997/(-0x1*-0x1777+-0x22f8+-0x7*-0x1a5)),_0x1af723=_0x5b43bc['JUhJN'](_0x45fb8b/_0x4cd7a1,_0x5b43bc[_0x1eac31(0xaf)](_0x2bf21e,_0x92ba6b)),_0x113c14=_0x3e9fb3/_0x4cd7a1/_0x2bf21e;if(_0x1af723<-(-0x47*0x1+0x2*0xd57+0xda*-0x1f+0.6000000000000001)||_0x1af723>-0x13ee+0x1448+0x59*-0x1+0.6000000000000001||_0x113c14<-(0x154c+0x10c+-0x85*0x2b+0.6000000000000001)||_0x113c14>-0x182e+0xec+0x1743+0.6000000000000001)return null;return{'x':_0x5b43bc[_0x1eac31(0x1fc)](_0x5b43bc['BCRIT'](_0x1af723,0x1784+-0x1a*0x16f+0xdc2*0x1+0.5)+(-0x17d+0x799+0x11*-0x5c+0.5),_0x5d1423),'y':_0x5b43bc['ZRZRL'](_0x5b43bc[_0x1eac31(0xa19)](-0x3a*-0x61+0x207d+-0x1*0x3677+0.5,_0x5b43bc['vjPNi'](_0x113c14,0x8e*0x10+0x1*0x1410+-0x1cf0+0.5)),_0xe87e02),'z':_0x4cd7a1};}else return _0x3e07a5[_0x1eac31(0x4d6)](_0x2bd8fd[_0x1eac31(0x1d1)](_0x402dd7,-0x23ca+-0x20e6+0x4514*0x1))/(0x1*-0xcba+-0xc7*0x5+-0x3*-0x5ab);}var _0x1e9e8e={'open':![],'cat':'comba'+'t','built':![],'root':null,'cols':null,'head':null,'sub':null,'syncs':[],'pos':null},_0x5ea28f=_0x6937dd(0xac)+_0x6937dd(0x3b0)+'menu-'+'pos',_0x167128=null,_0x4a1513=[{'id':'comba'+'t','label':_0x6937dd(0x738)},{'id':_0x6937dd(0x641)+'ls','label':_0x5b43bc[_0x6937dd(0xa17)]},{'id':_0x5b43bc[_0x6937dd(0x99b)],'label':'VAL'},{'id':_0x5b43bc['NXrsv'],'label':'LOG'}],_0x84aac1=_0x5b43bc[_0x6937dd(0x256)](_0x5b43bc[_0x6937dd(0x8fa)](_0x5b43bc['coSZz'](_0x5b43bc[_0x6937dd(0xa78)](_0x5b43bc['lYIVy'](_0x5b43bc[_0x6937dd(0x879)](_0x5b43bc[_0x6937dd(0x4d7)](_0x5b43bc['LYkKN'](_0x5b43bc['qidpS'](_0x5b43bc['tuKBR'](_0x5b43bc['mzWQu'](_0x5b43bc[_0x6937dd(0xa78)](_0x5b43bc[_0x6937dd(0x67e)](_0x5b43bc[_0x6937dd(0x983)](_0x5b43bc[_0x6937dd(0xf9)](_0x5b43bc[_0x6937dd(0xb0)](_0x5b43bc[_0x6937dd(0x398)](_0x5b43bc[_0x6937dd(0x702)](_0x5b43bc[_0x6937dd(0x527)](_0x5b43bc[_0x6937dd(0x573)](_0x5b43bc[_0x6937dd(0x7ce)](_0x5b43bc[_0x6937dd(0x714)](_0x5b43bc['BnVte'](_0x5b43bc['lYIVy'](_0x5b43bc['XpsTL'](_0x5b43bc['WQiDm'](_0x5b43bc[_0x6937dd(0xa1c)](_0x5b43bc['mgrHm'](_0x5b43bc[_0x6937dd(0x2d8)](_0x5b43bc[_0x6937dd(0x6ac)](_0x5b43bc['rIKaU'](_0x5b43bc[_0x6937dd(0x799)]+_0x5b43bc['SDQRd'],_0x6937dd(0x1f8)+_0x6937dd(0x861)+_0x6937dd(0x20a)+'p:10p'+_0x6937dd(0x2f7)+'ding:'+_0x6937dd(0x848)+_0x6937dd(0x169)+_0x6937dd(0x9cf)+_0x6937dd(0x970)+'2px;p'+_0x6937dd(0x429)+'r-eve'+_0x6937dd(0x3e5)+_0x6937dd(0x680)+'-inde'+'x:214'+_0x6937dd(0x7a6)+'47;'),'backg'+'round'+_0x6937dd(0x2e6)+_0x6937dd(0x775)+'7,21,'+_0x6937dd(0x4bd)+'backd'+'rop-f'+_0x6937dd(0x2e1)+_0x6937dd(0x33f)+_0x6937dd(0x243)+')\x20sat'+_0x6937dd(0x5a4)+_0x6937dd(0x3ee)+');-we'+'bkit-'+'backd'+'rop-f'+_0x6937dd(0x2e1)+_0x6937dd(0x33f)+_0x6937dd(0x243)+')\x20sat'+'urate'+_0x6937dd(0x3ee)+');'),'box-s'+'hadow'+':0\x200\x20'+'0\x201px'+'\x20rgba'+'(255,'+'255,2'+_0x6937dd(0x308)+_0x6937dd(0x50f)+'set\x200'+_0x6937dd(0xa6f)+_0x6937dd(0x75f)+_0x6937dd(0x892)+_0x6937dd(0x486)+'255,.'+_0x6937dd(0x2b9)+'\x2030px'+'\x2080px'+_0x6937dd(0x79d)+_0x6937dd(0xa42)+_0x6937dd(0x1d5)+');')+(_0x6937dd(0x8b9)+'ty:0;'+_0x6937dd(0x259)+_0x6937dd(0x132)+_0x6937dd(0x259)+_0x6937dd(0xb4d)+_0x6937dd(0x731)+_0x6937dd(0xac8)+_0x6937dd(0x135)+_0x6937dd(0x33d)+'s:non'+_0x6937dd(0x8bf)+_0x6937dd(0x758)+_0x6937dd(0x17b)+_0x6937dd(0x6e3)+_0x6937dd(0x40f)+'\x20ease'+_0x6937dd(0x197)+'sform'+_0x6937dd(0x977)+_0x6937dd(0x341)+_0x6937dd(0x6dc)+'ier(.'+'22,1,'+'.36,1'+');'),_0x5b43bc['dxQBr'])+_0x5b43bc[_0x6937dd(0x491)]+(_0x6937dd(0xa58)+'ide{d'+_0x6937dd(0x4b2)+_0x6937dd(0x3e4)+_0x6937dd(0x64e)+_0x6937dd(0x69e)+_0x6937dd(0x6c6)+'n:col'+_0x6937dd(0x6f9)+_0x6937dd(0x47e)+_0x6937dd(0xae6)+_0x6937dd(0xa2d)+_0x6937dd(0x2ed)+'p:4px'+_0x6937dd(0x964)+_0x6937dd(0x11f)+'x;fle'+_0x6937dd(0x1ba)+_0x6937dd(0x46c)+_0x6937dd(0x946)+'12px\x20'+'0;')+(_0x6937dd(0x169)+'r-rad'+'ius:1'+'6px;b'+_0x6937dd(0x2f4)+_0x6937dd(0xb2f)+_0x6937dd(0x4c4)+_0x6937dd(0x176)+_0x6937dd(0x88a)+'5,.02'+'5);bo'+_0x6937dd(0x5cd)+_0x6937dd(0xac1)+'nset\x20'+_0x6937dd(0x27e)+'\x201px\x20'+_0x6937dd(0x4c4)+'255,2'+_0x6937dd(0x88a)+_0x6937dd(0x251)+');}')+_0x5b43bc['BTFGj']+(_0x6937dd(0x64a)+_0x6937dd(0x5a1)+_0x6937dd(0x783)+_0x6937dd(0xadb)+'5px;h'+_0x6937dd(0x751)+_0x6937dd(0x507)+_0x6937dd(0x697)+'flow:'+'visib'+_0x6937dd(0x4b3)+_0x6937dd(0xe0)+_0x6937dd(0x5d0)+_0x6937dd(0x9df)+_0x6937dd(0x2b1)+'\x204px\x20'+'rgba('+'255,1'+_0x6937dd(0x8a9)+_0x6937dd(0x16b)+');}')+('.mn-t'+_0x6937dd(0xa1b)+'splay'+':flex'+';alig'+_0x6937dd(0x997)+'ms:ce'+_0x6937dd(0x706)+_0x6937dd(0x2ad)+'fy-co'+'ntent'+_0x6937dd(0xa2d)+_0x6937dd(0x1e6)+_0x6937dd(0x8bc)+_0x6937dd(0x613)+'eight'+_0x6937dd(0x568)+';bord'+'er:0;'+_0x6937dd(0x169)+_0x6937dd(0x9cf)+'ius:1'+'0px;'),'backg'+_0x6937dd(0x4d6)+_0x6937dd(0x1c9)+_0x6937dd(0x22f)+'nt;co'+'lor:r'+_0x6937dd(0x2af)+_0x6937dd(0x76b)+_0x6937dd(0xc6)+_0x6937dd(0x2a5)+_0x6937dd(0x4a9)+_0x6937dd(0x7a2)+'nter;'+'font-'+_0x6937dd(0x795)+'10px;'+_0x6937dd(0x5ab)+_0x6937dd(0x201)+'t:700'+_0x6937dd(0x62b)+'-fami'+_0x6937dd(0x839)+_0x6937dd(0x58b)+';}')+_0x5b43bc['oTXnE']+_0x5b43bc[_0x6937dd(0x54d)],_0x5b43bc[_0x6937dd(0x2fa)]),'.mn-t'+_0x6937dd(0x4d5)+_0x6937dd(0x3a1)+':flex'+_0x6937dd(0xb01)+_0x6937dd(0x997)+'ms:ce'+'nter;'+_0x6937dd(0x651)+'2px;p'+'addin'+_0x6937dd(0xae)+'\x206px\x20'+'12px;'+_0x6937dd(0x6d2)+_0x6937dd(0x88f)+_0x6937dd(0x781)+_0x6937dd(0x116))+(_0x6937dd(0xd2)+'itles'+'{flex'+_0x6937dd(0x489)+'n-wid'+_0x6937dd(0x856)+'}')+('.mn-h'+'{font'+'-size'+_0x6937dd(0x18e)+';font'+'-weig'+'ht:65'+_0x6937dd(0x5ee)),_0x6937dd(0xa58)+_0x6937dd(0x7b3)+_0x6937dd(0x389)+_0x6937dd(0x767)+'px;op'+'acity'+_0x6937dd(0x38b)),_0x6937dd(0xab4)+_0x6937dd(0xa02)+_0x6937dd(0x1f8)+'ay:gr'+'id;pl'+_0x6937dd(0x965)+'tems:'+'cente'+_0x6937dd(0x50a)+_0x6937dd(0x9ee)+_0x6937dd(0x1a5)+'ight:'+'28px;'+'borde'+_0x6937dd(0x883)+_0x6937dd(0x39e)+'-radi'+'us:8p'+_0x6937dd(0x19e)+_0x6937dd(0x192)+_0x6937dd(0x19c)+_0x6937dd(0x6f4)+_0x6937dd(0x2b7)),_0x5b43bc[_0x6937dd(0xef)]),'.mn-c'+'lose:'+_0x6937dd(0x5f5)+'{opac'+'ity:1'+';back'+'groun'+_0x6937dd(0x4ca)+_0x6937dd(0x892)+_0x6937dd(0x486)+_0x6937dd(0xf2)+_0x6937dd(0x4a2))+(_0x6937dd(0xab4)+'lose\x20'+_0x6937dd(0xa00)+_0x6937dd(0x3a6)+_0x6937dd(0x105)+_0x6937dd(0x7f6)+'t:14p'+'x;fil'+_0x6937dd(0x1fb)+'e;str'+_0x6937dd(0xce)+_0x6937dd(0x8ca)+_0x6937dd(0x178)+_0x6937dd(0x780)+'oke-w'+_0x6937dd(0x3a6)+_0x6937dd(0x433)+_0x6937dd(0x659)+'ineca'+'p:rou'+'nd;}'),'.mn-c'+_0x6937dd(0x803)+'lex:1'+';min-'+_0x6937dd(0x7f6)+_0x6937dd(0x212)+'verfl'+'ow-y:'+_0x6937dd(0xa8b)+'displ'+'ay:gr'+_0x6937dd(0x3a2)+_0x6937dd(0xae7)+_0x6937dd(0x426)+_0x6937dd(0x2b6)+'umns:'+_0x6937dd(0x58c)+'t(aut'+'o-fil'+'l,min'+'max(2'+'50px,'+'1fr))'+';'),_0x5b43bc[_0x6937dd(0x8b8)])+(_0x6937dd(0xab4)+'ols::'+_0x6937dd(0x824)+_0x6937dd(0x619)+'rollb'+'ar{wi'+'dth:8'+_0x6937dd(0x721))+_0x5b43bc['GSfqI'],_0x6937dd(0x8c5)+_0x6937dd(0x8ea)+'order'+_0x6937dd(0x468)+_0x6937dd(0xaf5)+_0x6937dd(0x656)+_0x6937dd(0x21e)+'und:r'+_0x6937dd(0x2af)+_0x6937dd(0x88a)+_0x6937dd(0xad1)+_0x6937dd(0x327)+_0x6937dd(0x959)+_0x6937dd(0x3cd)+_0x6937dd(0x22e)+_0x6937dd(0x808)+'\x200\x200\x20'+'1px\x20r'+'gba(2'+'55,25'+'5,255'+_0x6937dd(0x2b5)+';}')+(_0x6937dd(0x8c5)+_0x6937dd(0x9bb)+_0x6937dd(0xfc)+_0x6937dd(0x192)+_0x6937dd(0x3a5)+_0x6937dd(0x778)+_0x6937dd(0xad1)+',255,'+_0x6937dd(0xa7)+_0x6937dd(0x4e9)+'hadow'+':inse'+_0x6937dd(0x94c)+'\x200\x201p'+'x\x20rgb'+'a(255'+_0x6937dd(0x44c)+_0x6937dd(0x905)+_0x6937dd(0x830)),_0x6937dd(0x8c5)+_0x6937dd(0x399)+_0x6937dd(0xa51)+'ispla'+_0x6937dd(0x3e4)+_0x6937dd(0x974)+'gn-it'+'ems:c'+_0x6937dd(0x609)+';gap:'+_0x6937dd(0x312)+_0x6937dd(0x576)+_0x6937dd(0x90c)+'x\x2012p'+'x;}'),'.sk-c'+_0x6937dd(0x143)+'itle{'+_0x6937dd(0x350)+_0x6937dd(0x929)+'-widt'+'h:0;}'),_0x5b43bc[_0x6937dd(0x425)]),_0x5b43bc['MtVqc']),_0x5b43bc[_0x6937dd(0x6ee)]),_0x5b43bc[_0x6937dd(0x145)])+(_0x6937dd(0x8c5)+_0x6937dd(0x8be)+_0x6937dd(0x3a1)+':flex'+';alig'+'n-ite'+_0x6937dd(0x922)+_0x6937dd(0x706)+_0x6937dd(0x949)+_0x6937dd(0x3e8)+_0x6937dd(0x628)+_0x6937dd(0x654)+'0;fon'+_0x6937dd(0x30f)+'e:11.'+'5px;}')+('.sk-l'+'abel{'+_0x6937dd(0x350)+_0x6937dd(0x1b1)+_0x6937dd(0x299)+'ba(24'+_0x6937dd(0x194)+_0x6937dd(0x4eb)+_0x6937dd(0xaec)+'}'),'.sk-h'+_0x6937dd(0x82e)+'ispla'+_0x6937dd(0x8ed)+_0x6937dd(0x45f)+_0x6937dd(0x389)+'ze:10'+_0x6937dd(0x5f8)+_0x6937dd(0x6e3)+_0x6937dd(0x38b)),_0x5b43bc[_0x6937dd(0x303)]),_0x5b43bc[_0x6937dd(0x7e2)]),_0x6937dd(0x2ac)+_0x6937dd(0x4d6)+':rgba'+_0x6937dd(0xa6d)+'255,2'+'55,.2'+_0x6937dd(0x86d)+_0x6937dd(0xacb)+_0x6937dd(0x2a0)+_0x6937dd(0x967)+_0x6937dd(0x647)+'ckgro'+'und\x20.'+_0x6937dd(0xa81))+('.sk-s'+'witch'+_0x6937dd(0x2dd)+_0x6937dd(0x24b)+'ked=\x22'+_0x6937dd(0x1d3)+']{bac'+_0x6937dd(0x192)+_0x6937dd(0x3a5)+_0x6937dd(0x778)+_0x6937dd(0xb09)+',157,'+_0x6937dd(0xaa7)+'}'),'.sk-s'+_0x6937dd(0x1ac)+_0x6937dd(0x2dd)+_0x6937dd(0x24b)+_0x6937dd(0x43a)+_0x6937dd(0x1d3)+_0x6937dd(0x1e1)+_0x6937dd(0xa5d)+'eft:1'+_0x6937dd(0x449)+_0x6937dd(0x2f4)+'ound:'+_0x6937dd(0x793)+'9d;}'),_0x5b43bc[_0x6937dd(0x466)])+_0x5b43bc[_0x6937dd(0x264)]+('.sk-s'+_0x6937dd(0x4bf)+_0x6937dd(0x2ce)+'bkit-'+_0x6937dd(0x301)+_0x6937dd(0x1b8)+_0x6937dd(0x5b2)+_0x6937dd(0x6de)+_0x6937dd(0x318)+_0x6937dd(0x9ea)+_0x6937dd(0x8a5)+_0x6937dd(0xa66)+_0x6937dd(0x9a3)+_0x6937dd(0x199)+';'),_0x5b43bc[_0x6937dd(0x2ef)]),_0x6937dd(0xa7a)+'lider'+'::-we'+'bkit-'+_0x6937dd(0x301)+_0x6937dd(0x31d)+_0x6937dd(0xb1b)+'ebkit'+_0x6937dd(0x864)+_0x6937dd(0x295)+_0x6937dd(0x4e8)+'e;wid'+_0x6937dd(0x3d0)+_0x6937dd(0x2b4)+_0x6937dd(0x3d8)+_0x6937dd(0xa9e)+_0x6937dd(0x6c8)+_0x6937dd(0x30e)+'2px;b'+_0x6937dd(0x39e)+_0x6937dd(0x468)+_0x6937dd(0x16a)+_0x6937dd(0x53d)+'kgrou'+'nd:#f'+_0x6937dd(0xa5)+';}'),'.sk-v'+'al{fo'+'nt-si'+'ze:11'+_0x6937dd(0xc7)+_0x6937dd(0x4f9)+'ight:'+'600;m'+_0x6937dd(0x3d3)+_0x6937dd(0x177)+_0x6937dd(0x9e4)+_0x6937dd(0xafa)+_0x6937dd(0x958)+'right'+_0x6937dd(0x74b)+_0x6937dd(0x5b9)+_0x6937dd(0x800)+_0x6937dd(0x115)+'242,.'+'8);}'),_0x6937dd(0x182)+_0x6937dd(0x190)+_0x6937dd(0x9a2)+_0x6937dd(0x837)+'1px;c'+_0x6937dd(0xa7f)+_0x6937dd(0x4c4)+_0x6937dd(0x3a9)+'38,24'+_0x6937dd(0x809)+_0x6937dd(0x171)+'ing:2'+_0x6937dd(0x79a)+_0x6937dd(0x1c2)+_0x6937dd(0x4d2)+_0x6937dd(0x727)+'-wrap'+';}')+_0x5b43bc['SSGYw'],_0x5b43bc[_0x6937dd(0xa1)])+_0x5b43bc['ErZIF']+(_0x6937dd(0x954)+_0x6937dd(0x1db)+'ver{f'+_0x6937dd(0x2e1)+_0x6937dd(0x881)+_0x6937dd(0x9fd)+'s(1.1'+_0x6937dd(0x336))+_0x5b43bc['mZxPA']+('#saku'+_0x6937dd(0xeb)+_0x6937dd(0xa9)+'ositi'+_0x6937dd(0x9cd)+_0x6937dd(0x5d9)+'op:12'+_0x6937dd(0x92b)+_0x6937dd(0x357)+_0x6937dd(0x5a3)+_0x6937dd(0xb35)+'x:214'+_0x6937dd(0x7a6)+_0x6937dd(0xa45)+_0x6937dd(0x47a)+'point'+'er;wi'+_0x6937dd(0xadb)+'6px;h'+'eight'+_0x6937dd(0x8c2)+';opac'+'ity:.'+_0x6937dd(0x12a))+_0x5b43bc[_0x6937dd(0x7af)],_0x2f21eb=_0x5b43bc['HxLqF'](_0x5b43bc['nNThO'](_0x6937dd(0x833)+_0x6937dd(0x791)+'ox=\x220'+'\x200\x2024'+_0x6937dd(0x273)+_0x6937dd(0x9aa)+'\x20d=\x22M'+'12\x2021'+'c-1.5'+_0x6937dd(0xb7)+'4-4.5'+_0x6937dd(0x5e1)+_0x6937dd(0x3d6)+_0x6937dd(0x207)+'8-4.5'+_0x6937dd(0x725)+_0x6937dd(0x8d6)+'\x204\x204.'+_0x6937dd(0x2fb)+_0x6937dd(0xa89)+_0x6937dd(0x52c)+'.5z\x22\x20',_0x5b43bc['fBnTV']),_0x6937dd(0x1b9)+_0x6937dd(0x412)+_0x6937dd(0xb42)+_0x6937dd(0x9af)+_0x6937dd(0x103)+_0x6937dd(0x2f9)+_0x6937dd(0x6f2)+_0x6937dd(0x6f0)+_0x6937dd(0xa5)+_0x6937dd(0x2e2)+_0x6937dd(0x5e3)),_0x4e7aa1=_0x5b43bc[_0x6937dd(0xad3)](_0x6937dd(0x833)+_0x6937dd(0xaa0)+_0x6937dd(0x8b5)+_0x6937dd(0x5ca)+'svg\x22\x20'+_0x6937dd(0x791)+_0x6937dd(0x397)+'\x200\x2024'+_0x6937dd(0x273)+'<path'+_0x6937dd(0x518)+_0x6937dd(0x252)+_0x6937dd(0x25e)+'-2.5-'+_0x6937dd(0x2a1)+_0x6937dd(0x5e1)+_0x6937dd(0x3d6)+_0x6937dd(0x207)+'8-4.5'+_0x6937dd(0x725)+'5s4\x202'+_0x6937dd(0x68a)+_0x6937dd(0x2fb)+_0x6937dd(0xa89)+'5-4\x207'+'.5z\x22\x20','fill='+'\x22none'+_0x6937dd(0x297)+_0x6937dd(0xb19)+'#ff6b'+_0x6937dd(0x28d)+_0x6937dd(0x320)+_0x6937dd(0x6bf)+'h=\x221.'+'6\x22\x20st'+_0x6937dd(0x98b)+_0x6937dd(0x6bc)+'ap=\x22r'+_0x6937dd(0x4a8)+'\x20stro'+'ke-li'+_0x6937dd(0xb2d)+_0x6937dd(0x8d5)+'und\x22/'+'>')+_0x5b43bc[_0x6937dd(0x9f4)];function _0x4a8d95(_0x37c26a,_0x5931ea,_0x5e73fc){var _0x1c1fb6=_0x6937dd,_0x59e712=document['creat'+'eElem'+_0x1c1fb6(0x516)](_0x37c26a);if(_0x5931ea)_0x59e712['class'+'Name']=_0x5931ea;if(_0x5e73fc!=null)_0x59e712[_0x1c1fb6(0x63e)+_0x1c1fb6(0x497)]=_0x5e73fc;return _0x59e712;}function _0x501e4b(_0x3fd184,_0x480644){var _0x585cf8=_0x6937dd,_0x60903a=_0x5b43bc['CfJqW'](_0x4a8d95,_0x5b43bc[_0x585cf8(0x4bb)],_0x585cf8(0x3d9)+'rd'+(_0x480644?_0x5b43bc['oSrFz']:'')),_0x10dba1=_0x5b43bc[_0x585cf8(0x175)](_0x4a8d95,'div',_0x5b43bc['aKLWY']),_0x2eda88=_0x5b43bc[_0x585cf8(0x6e0)](_0x4a8d95,_0x5b43bc['IdhHR'],_0x585cf8(0x3d9)+_0x585cf8(0xadf)+_0x585cf8(0x1e0),_0x5b43bc[_0x585cf8(0x6e6)](_0x5b43bc[_0x585cf8(0x3ca)](_0x585cf8(0x434)+_0x585cf8(0x8a6),_0x3fd184),_0x5b43bc['AZxBB']));_0x10dba1[_0x585cf8(0x441)+_0x585cf8(0xb36)+'d'](_0x2eda88);var _0x465a90=_0x5b43bc[_0x585cf8(0x2c6)](_0x4a8d95,_0x5b43bc[_0x585cf8(0x4bb)],'sk-mb'+'ody');return _0x60903a['appen'+_0x585cf8(0xb36)+'d'](_0x10dba1),_0x60903a[_0x585cf8(0x441)+_0x585cf8(0xb36)+'d'](_0x465a90),_0x60903a[_0x585cf8(0x2f5)]=_0x465a90,_0x60903a['head']=_0x2eda88,_0x60903a;}function _0x1b8bdb(_0x5eea48,_0x181425){var _0x338213=_0x6937dd,_0x302683={'MJshK':_0x5b43bc['WTmHq']},_0x175b23=_0x5b43bc[_0x338213(0x93c)](_0x4a8d95,_0x338213(0xb13)+'n','sk-sw'+'itch');_0x175b23['type']='butto'+'n';var _0x80541f=function(){var _0x4496a6=_0x338213;_0x175b23[_0x4496a6(0x75a)+'tribu'+'te'](_0x4496a6(0x9d3)+_0x4496a6(0x602)+'ed',_0x5eea48()?_0x302683[_0x4496a6(0x99a)]:'false');};return _0x175b23[_0x338213(0x624)+'ck']=function(){var _0x1aa7fa=_0x338213;_0x5b43bc[_0x1aa7fa(0x8de)](_0x181425,!_0x5b43bc[_0x1aa7fa(0x4af)](_0x5eea48)),_0x80541f();},_0x5b43bc['tWEIV'](_0x80541f),_0x175b23[_0x338213(0x287)]=_0x80541f,_0x1e9e8e['syncs']['push'](_0x80541f),_0x175b23;}function _0x4fbb37(_0x411342,_0x252970,_0x55ba47,_0x485553,_0x2f7f82){var _0x5d6ba4=_0x6937dd,_0x22fc58={'rUUuc':function(_0x365270){var _0x55d783=_0x5c65;return _0x5b43bc[_0x55d783(0x4af)](_0x365270);}};if(_0x5b43bc['pbuva'](_0x5b43bc['WttFy'],'xyvQj')){var _0x38701b=_0x4a8d95(_0x5b43bc[_0x5d6ba4(0x4bb)],_0x5d6ba4(0x48e)+_0x5d6ba4(0x5f1)),_0x12daf7=document['creat'+'eElem'+'ent'](_0x5d6ba4(0xa3f));_0x12daf7[_0x5d6ba4(0x55e)]=_0x5b43bc['qFoJl'],_0x12daf7['class'+'Name']=_0x5d6ba4(0xb0e)+'ider',_0x12daf7[_0x5d6ba4(0x240)]=String(_0x411342),_0x12daf7['max']=_0x5b43bc[_0x5d6ba4(0x33b)](String,_0x252970),_0x12daf7['step']=String(_0x55ba47);var _0x20cc92=_0x5b43bc[_0x5d6ba4(0x987)](_0x4a8d95,_0x5b43bc[_0x5d6ba4(0x755)],_0x5b43bc[_0x5d6ba4(0x26f)]),_0x103575=function(){var _0x19cdb9=_0x5d6ba4;if(_0x5b43bc[_0x19cdb9(0x3db)](_0x5b43bc[_0x19cdb9(0xe9)],_0x5b43bc[_0x19cdb9(0x20f)]))_0x442995=_0x22fc58['rUUuc'](_0x5753d3);else{var _0xd9688c=_0x5b43bc[_0x19cdb9(0x3c8)](_0x485553);_0x12daf7[_0x19cdb9(0x1c6)]=_0x5b43bc[_0x19cdb9(0x769)](String,_0xd9688c),_0x20cc92['textC'+_0x19cdb9(0x4ea)+'t']=_0x5b43bc['AnSqg'](_0x55ba47<0x689*-0x3+-0x235*-0xd+0x1d1*-0x5?_0xd9688c[_0x19cdb9(0x67c)+'ed'](0x595*0x1+0x1422+-0x892*0x3):String(Math[_0x19cdb9(0x4d6)](_0xd9688c)),_0x12daf7['datas'+'et']['unit']||'');var _0x44c65a=_0x5b43bc[_0x19cdb9(0x541)](_0xd9688c,_0x411342)/(_0x252970-_0x411342)*(-0x8c9*0x1+-0x1b6a+0x2497*0x1);_0x12daf7[_0x19cdb9(0x447)][_0x19cdb9(0xad6)+'opert'+'y'](_0x5b43bc['gfoVJ'],_0x44c65a+'%');}};return _0x12daf7[_0x5d6ba4(0x254)+'ut']=function(){var _0x244cad=_0x5d6ba4;_0x5b43bc[_0x244cad(0x3f8)](_0x2f7f82,parseFloat(_0x12daf7[_0x244cad(0x1c6)])||_0x411342),_0x103575();},_0x38701b[_0x5d6ba4(0x441)+'dChil'+'d'](_0x12daf7),_0x38701b[_0x5d6ba4(0x441)+'dChil'+'d'](_0x20cc92),_0x38701b['sync']=_0x103575,_0x38701b['input']=_0x12daf7,_0x103575(),_0x1e9e8e['syncs']['push'](_0x103575),_0x38701b;}else{_0x2446e3['sp']&&(_0x2f6f9e['sp'][_0x5d6ba4(0x89d)+_0x5d6ba4(0x4ea)+'t']=_0x1d5b90['on']?'Speed'+'\x20ON':_0x5d6ba4(0x460)+'\x20off',_0x16403f['sp']['style']['backg'+_0x5d6ba4(0x4d6)]=_0x155f1d['on']?_0x1614ff:_0x5b43bc['ZILEl'],_0x1705f0['sp'][_0x5d6ba4(0x447)]['color']=_0x3f874a['on']?_0x5b43bc['KfkiL']:_0x5d6ba4(0x13c)+'f5');if(_0x53e651['fx'])_0x1e86ed['fx'][_0x5d6ba4(0x1c6)]=_0x5b43bc[_0x5d6ba4(0x344)](_0x1b69b9,_0x3f99ae[_0x5d6ba4(0xae4)+'r']);if(_0x3c834b['fv'])_0x4f85ee['fv'][_0x5d6ba4(0x89d)+_0x5d6ba4(0x4ea)+'t']=_0x591e90[_0x5d6ba4(0xae4)+'r']['toFix'+'ed'](0x301*-0x1+0x6f4+-0x5*0xca)+'x';}}function _0x1df490(_0x3c2082,_0x37a8c5){var _0x1803e1=_0x6937dd,_0x153d89=_0x4a8d95('div',_0x1803e1(0x81c)+'l'),_0x353e57=_0x4a8d95(_0x1803e1(0x51d),_0x1803e1(0xafc)+_0x1803e1(0x9cc),_0x3c2082+(_0x37a8c5?_0x5b43bc[_0x1803e1(0x6b7)]+_0x37a8c5+_0x5b43bc[_0x1803e1(0x37e)]:''));return _0x153d89[_0x1803e1(0x441)+_0x1803e1(0xb36)+'d'](_0x353e57),_0x153d89;}function _0x124a1a(_0x1dfb6d,_0x46fd87,_0x43bda5,_0x5be46f){var _0x611e74=_0x6937dd,_0x3b6b60={'jmQZt':function(_0x3d02fc,_0x5cf11f){return _0x3d02fc/_0x5cf11f;}},_0x6e2322=_0x1dfb6d&&_0x1dfb6d['surve'+'y']&&_0x1dfb6d[_0x611e74(0x20b)+'y'][_0x46fd87];if(!_0x6e2322)return'-';for(var _0x362305=0xe2*-0x22+-0x40*0x1c+0x2504;_0x362305<_0x6e2322['lengt'+'h'];_0x362305++){if(_0x5b43bc[_0x611e74(0x567)](_0x6e2322[_0x362305]['o'],_0x43bda5)){if(_0x5b43bc[_0x611e74(0x871)]==='Squws')_0x4f45d9[_0x611e74(0x2cf)+_0x611e74(0x900)+'erty'](_0x15a9ac,_0x611e74(0x8cf),{'value':_0x4dbbdc[_0x611e74(0x8cf)],'configurable':!![]});else{if(_0x5be46f==='v3'){var _0x521f95=_0x6e2322[_0x362305][_0x611e74(0x5c3)]||[_0x6e2322[_0x362305]['v'],-0xb20+0xf31+-0x411,-0x47*-0x63+0x7*-0x1b3+-0xf90];return _0x521f95['map'](function(_0x156ea6){var _0x9580e=_0x611e74;return _0x3b6b60[_0x9580e(0x45b)](Math[_0x9580e(0x4d6)](_0x156ea6*(0x1*-0x1e5+0x1ebf+0xe3b*-0x2)),0x169c+-0x219d+-0x1*-0xb65);})[_0x611e74(0x896)]('\x20\x20');}var _0x3310ab=_0x6e2322[_0x362305]['v'];return _0x5b43bc['DeROX'](typeof _0x3310ab,_0x5b43bc['Egnid'])?Math[_0x611e74(0x4d6)](_0x3310ab*(-0xa7*-0x1e+0x24af+-0x3459))/(0xd82+-0x2cd*0x5+0x467):_0x5b43bc['bjvKk'](String,_0x3310ab);}}}return'-';}function _0x5dbfb1(_0x3517c1){var _0x278970=_0x6937dd,_0x535ada={'BOWXv':function(_0x30b7b6,_0x14aea4){return _0x5b43bc['LYkKN'](_0x30b7b6,_0x14aea4);},'bfdZr':function(_0x110f7c,_0x40e983){return _0x110f7c+_0x40e983;},'CwHJi':_0x5b43bc['VBbNH'],'ActjH':function(_0x117523,_0x36c4d2){return _0x5b43bc['pSxRI'](_0x117523,_0x36c4d2);},'qjjHY':_0x5b43bc['jjUVl'],'GzVfg':'paddi'+_0x278970(0x6c9)+'x;fon'+_0x278970(0x2d6)+_0x278970(0x95b)+_0x278970(0x53b)+_0x278970(0x9d6)+_0x278970(0x5be)+_0x278970(0x2f6)+_0x278970(0x196)+'nospa'+'ce;co'+_0x278970(0x696)+_0x278970(0x99f)+'9;','famGS':'<div\x20'+_0x278970(0x5e7)+_0x278970(0x705)+_0x278970(0x681)+'lg\x22\x20s'+_0x278970(0x917)+'\x22text'+_0x278970(0x1d6)+'n:cen'+_0x278970(0x3ea)+'</div'+'>','IiRiz':_0x5b43bc['IdhHR'],'ChPGG':'IKfEV','UskJN':function(_0x4f6ad4,_0x1a4253){return _0x4f6ad4!==_0x1a4253;},'JZkXN':_0x5b43bc[_0x278970(0x555)],'qRuSe':function(_0x481da7,_0x1ca457){return _0x5b43bc['fDEtp'](_0x481da7,_0x1ca457);},'azEMH':_0x278970(0x12e)+'hot','KtXpA':'MEzeb','SjhnQ':function(_0x170fa0,_0x444d87){var _0x3f224a=_0x278970;return _0x5b43bc[_0x3f224a(0x8bd)](_0x170fa0,_0x444d87);},'lZwNe':function(_0x254e87,_0x5e8afe){return _0x5b43bc['pQjPT'](_0x254e87,_0x5e8afe);},'KrPGj':function(_0x273d31,_0x512ca6){return _0x273d31===_0x512ca6;},'rNpEH':'obfI','mqZqk':function(_0x1d5a2a,_0x1d0e25){var _0x384e01=_0x278970;return _0x5b43bc[_0x384e01(0x57d)](_0x1d5a2a,_0x1d0e25);},'hQClo':function(_0x203483,_0x4d8c6f,_0x4d35c5,_0x3e281c){return _0x203483(_0x4d8c6f,_0x4d35c5,_0x3e281c);},'cdzqA':function(_0x4e68d3,_0x46660c){return _0x4e68d3===_0x46660c;},'ZsOvP':function(_0x313567,_0x243e6b){return _0x313567/_0x243e6b;},'UsPbg':'Copie'+'d','vaUeR':_0x278970(0x6ad),'GrFve':function(_0x1bb5fc,_0x481f06){return _0x5b43bc['UCEHz'](_0x1bb5fc,_0x481f06);},'lHoWj':function(_0x5e0853,_0x37a254){return _0x5e0853+_0x37a254;},'xsISe':function(_0x307625,_0x26041b){var _0x4361cd=_0x278970;return _0x5b43bc[_0x4361cd(0x996)](_0x307625,_0x26041b);},'kFaMi':function(_0x3f8b8f,_0x37c724){return _0x3f8b8f+_0x37c724;}},_0x1182eb=_0x167128,_0x3f6d13=[],_0x5f1541;if(_0x3517c1===_0x5b43bc['fXXVg']){if(_0x5b43bc['bhWCk'](_0x278970(0x290),_0x5b43bc[_0x278970(0xa06)]))return _0x473bb2[_0x278970(0x42d)+'e']=_0x5b43bc['GKBrK'],_0x916e72;else{var _0x41af8d=_0x501e4b(_0x278970(0x460)+_0x278970(0x403),_0x3f1502['on']),_0x4ba01f=_0x5b43bc[_0x278970(0xee)](_0x4a8d95,_0x5b43bc[_0x278970(0x4bb)],'sk-md'+_0x278970(0x5b7),_0x3f1502['on']?_0x5b43bc['FAgXl'](_0x5b43bc[_0x278970(0x9ae)]('x'+_0x3f1502[_0x278970(0xae4)+'r']['toFix'+'ed'](-0x985*-0x1+-0x10f3+0x76f)+_0x5b43bc['VBbNH'],_0x53b8da[_0x278970(0x76e)+'h'])+_0x5b43bc[_0x278970(0x92d)]+_0x5b33aa,_0x5b43bc[_0x278970(0x9a7)]):_0x278970(0x28a)+_0x278970(0x34c)+_0x278970(0x90d)+_0x278970(0x520)+'speed'+_0x278970(0xec)+_0x278970(0x58a)+'ly.\x20H'+_0x278970(0x751)+',\x20ste'+_0x278970(0x7ab)+_0x278970(0x506)+_0x278970(0x978)+_0x278970(0x291)+_0x278970(0x5dd)),_0x5973fb=_0x1df490(_0x278970(0xb2)+'ed');_0x5973fb['appen'+'dChil'+'d'](_0x5b43bc[_0x278970(0x367)](_0x1b8bdb,function(){return _0x3f1502['on'];},function(_0x3b4ca4){var _0x27ffd8=_0x278970;_0x2b3d5f(_0x3b4ca4,_0x3f1502[_0x27ffd8(0xae4)+'r']),_0x4ba01f[_0x27ffd8(0x89d)+_0x27ffd8(0x4ea)+'t']=_0x3b4ca4?_0x535ada['BOWXv'](_0x535ada[_0x27ffd8(0x515)](_0x535ada[_0x27ffd8(0x284)]('x'+_0x3f1502[_0x27ffd8(0xae4)+'r'][_0x27ffd8(0x67c)+'ed'](0x1d6d+0x25de+-0x30f*0x16)+_0x535ada[_0x27ffd8(0x85d)],_0x53b8da[_0x27ffd8(0x76e)+'h'])+('\x20fiel'+'ds\x20·\x20'),_0x5b33aa),_0x27ffd8(0x7d8)+'es'):'Multi'+'plies'+'\x20move'+_0x27ffd8(0x520)+'speed'+_0x27ffd8(0xec)+'ds\x20on'+_0x27ffd8(0x8aa)+'eight'+_0x27ffd8(0x193)+_0x27ffd8(0x7ab)+'\x20jump'+_0x27ffd8(0x978)+'refus'+'ed.';})),_0x41af8d[_0x278970(0x2f5)][_0x278970(0x441)+'dChil'+'d'](_0x4ba01f),_0x41af8d[_0x278970(0x2f5)][_0x278970(0x441)+_0x278970(0xb36)+'d'](_0x5973fb);var _0x33dbc2=_0x5b43bc[_0x278970(0x63f)](_0x4fbb37,-0x2*-0xebf+0x1a1*0x16+0x955*-0x7,0x1599+0xa*-0x346+0xb28,-0x338*0x4+-0x44b+0x125*0xf+0.5,function(){return _0x3f1502['facto'+'r'];},function(_0x590e43){var _0x3a7cc4=_0x278970;if(_0x535ada[_0x3a7cc4(0x2fd)]===_0x3a7cc4(0xa97))_0x2b3d5f(_0x3f1502['on'],_0x590e43);else{var _0x337274=(_0x3a7cc4(0x76f)+_0x3a7cc4(0x2d0)+_0x3a7cc4(0x5c7)+_0x3a7cc4(0x8dd))[_0x3a7cc4(0x8ec)]('|'),_0x4694e0=-0xea5+-0x8aa+0x174f;while(!![]){switch(_0x337274[_0x4694e0++]){case'0':_0x57ccd6['id']='sakur'+_0x3a7cc4(0x1d7);continue;case'1':_0x57ccd6[_0x3a7cc4(0x447)]['cssTe'+'xt']=_0x535ada[_0x3a7cc4(0x980)](_0x535ada[_0x3a7cc4(0x515)](_0x535ada[_0x3a7cc4(0x9d4)],_0x3a7cc4(0x2ac)+'round'+_0x3a7cc4(0x2e6)+_0x3a7cc4(0x7bf)+'2,29,'+'.72);'+_0x3a7cc4(0x169)+'r:1px'+_0x3a7cc4(0xb08)+_0x3a7cc4(0x1a1)+_0x3a7cc4(0x892)+_0x3a7cc4(0xaf1)+_0x3a7cc4(0xdc)+'4);bo'+_0x3a7cc4(0xa66)+_0x3a7cc4(0x9a3)+'s:10p'+'x;')+_0x535ada[_0x3a7cc4(0x4fe)],_0x3a7cc4(0x6d2)+'selec'+'t:non'+'e;-we'+_0x3a7cc4(0xae8)+'user-'+_0x3a7cc4(0x88f)+_0x3a7cc4(0x781)+'e;');continue;case'2':if(!_0x240d85['body']||!_0x35a508['body']['appen'+'dChil'+'d'])return null;continue;case'3':var _0x4b386c={'cv':{'getContext':function(){return null;}},'el':_0x57ccd6};continue;case'4':_0x57ccd6['inner'+_0x3a7cc4(0x497)]=_0x535ada['BOWXv'](_0x3a7cc4(0xa16)+'as\x20id'+_0x3a7cc4(0x519)+'ura-e'+'sp-cv'+_0x3a7cc4(0xa59)+_0x3a7cc4(0x9c1)+'60\x22\x20h'+_0x3a7cc4(0x751)+_0x3a7cc4(0x3a4)+'\x22\x20sty'+_0x3a7cc4(0xab8)+_0x3a7cc4(0x4b2)+_0x3a7cc4(0x8ed)+'ck\x22><'+'/canv'+_0x3a7cc4(0x676),_0x535ada[_0x3a7cc4(0x432)]);continue;case'5':return _0x39d1bf;case'6':if(!_0x4a347f['cv']||!_0x12ea5c['cv'][_0x3a7cc4(0x782)+_0x3a7cc4(0xa03)])_0x1bc393=_0x4b386c;continue;case'7':_0x5b45e4={'el':_0x57ccd6,'cv':_0x57ccd6[_0x3a7cc4(0x208)+_0x3a7cc4(0x477)+_0x3a7cc4(0x7ef)]('#saku'+_0x3a7cc4(0x72d)+'p-cv'),'lg':_0x57ccd6['query'+_0x3a7cc4(0x477)+_0x3a7cc4(0x7ef)](_0x3a7cc4(0x72b)+'ra-es'+'p-lg')};continue;case'8':_0x5b7241[_0x3a7cc4(0x2f5)][_0x3a7cc4(0x441)+'dChil'+'d'](_0x57ccd6);continue;case'9':var _0x57ccd6=_0x30e579['creat'+_0x3a7cc4(0x999)+_0x3a7cc4(0x516)](_0x535ada[_0x3a7cc4(0x364)]);continue;}break;}}});_0x33dbc2[_0x278970(0xa3f)]['datas'+'et'][_0x278970(0x9a1)]='x';var _0x7b836a=_0x5b43bc[_0x278970(0x2c6)](_0x1df490,_0x278970(0x28a)+_0x278970(0x3dc),_0x5b43bc['ybpvA']);_0x7b836a[_0x278970(0x441)+_0x278970(0xb36)+'d'](_0x33dbc2),_0x41af8d[_0x278970(0x2f5)]['appen'+_0x278970(0xb36)+'d'](_0x7b836a);if(_0x23a90c['lengt'+'h']){var _0x5739e1=_0x4a8d95('div',_0x5b43bc[_0x278970(0xff)],_0x5b43bc[_0x278970(0x398)](_0x5b43bc['WMLsr'],_0x23a90c[_0x278970(0x50d)](0x527*-0x3+-0x16e1*-0x1+-0x76c,-0x7ec+-0x49f+0xc8f)[_0x278970(0x6be)](function(_0x44abdd){var _0x135f1c=_0x278970;return _0x535ada[_0x135f1c(0x980)]('0x'+(_0x44abdd['o']<-0x17d+0xa*-0x4a+0x461?'?':_0x44abdd['o']['toStr'+_0x135f1c(0xa36)](0x1b8b*-0x1+-0xf1*-0x15+-0x3b*-0x22))+'\x20(',_0x44abdd[_0x135f1c(0x29e)])+')';})['join']('\x20\x20')));_0x41af8d[_0x278970(0x2f5)]['appen'+'dChil'+'d'](_0x5739e1);}_0x3f6d13[_0x278970(0x7d6)](_0x41af8d);var _0x425029=_0x501e4b('Bindi'+'ngs'),_0x23cf6e=_0x5b43bc[_0x278970(0x6e0)](_0x4a8d95,_0x278970(0xb13)+'n',_0x5b43bc[_0x278970(0x926)],_0x5b43bc['BbIbv']);_0x23cf6e[_0x278970(0x55e)]=_0x5b43bc[_0x278970(0x6d9)],_0x23cf6e['oncli'+'ck']=function(){var _0x20b997=_0x278970;if(_0x535ada[_0x20b997(0x42c)](_0x535ada[_0x20b997(0x672)],_0x20b997(0x160))){var _0x269d15={'EzcpS':function(_0x178036,_0x78f4ed){return _0x178036(_0x78f4ed);}};_0x3259f5[_0x20b997(0x624)+'ck']=function(){var _0x1ecca1=_0x20b997;_0x269d15[_0x1ecca1(0x657)](_0x10a378,_0x4fc7d7);};}else _0x535ada[_0x20b997(0xa76)](_0x2dafd7,_0x535ada[_0x20b997(0x23e)]);},_0x425029['body'][_0x278970(0x441)+_0x278970(0xb36)+'d'](_0x4a8d95(_0x278970(0x51d),_0x278970(0x771)+_0x278970(0x5b7),'F9\x20\x20s'+'napsh'+_0x278970(0x17f)+_0x278970(0x599)+'speed'+'\x20on/o'+_0x278970(0x9ec)+_0x278970(0x71a)+'\x20\x20fac'+'tor\x20+'+'/-0.5'+_0x278970(0x69f)+'\x20\x20fie'+_0x278970(0x8ff)+'\x20view'+_0x278970(0xaf4)+'rt\x20\x20t'+_0x278970(0x495)+_0x278970(0x3b5))),_0x425029[_0x278970(0x2f5)][_0x278970(0x441)+_0x278970(0xb36)+'d'](_0x23cf6e),_0x3f6d13['push'](_0x425029);}}if(_0x3517c1===_0x278970(0x641)+'ls'){var _0x2c0551=_0x5b43bc[_0x278970(0x2c6)](_0x501e4b,_0x278970(0x8fd),_0x41b3ea['on']),_0x15accf=_0x1df490('Enabl'+'ed');_0x15accf['appen'+_0x278970(0xb36)+'d'](_0x5b43bc[_0x278970(0xb1c)](_0x1b8bdb,function(){var _0x3e5c69=_0x278970;return _0x535ada[_0x3e5c69(0x42c)](_0x535ada['KtXpA'],_0x3e5c69(0x819))?_0x41b3ea['on']:(_0x315ad9[-0x10*0x29+-0x125+0x3b5]=_0x3a43ef,_0xd890b9[0x1*0x214c+-0x1c30+-0xc*0x6d]);},function(_0x45ca2a){_0x41b3ea['on']=_0x45ca2a,_0x3548bd();})),_0x2c0551[_0x278970(0x2f5)][_0x278970(0x441)+'dChil'+'d'](_0x5b43bc[_0x278970(0x608)](_0x4a8d95,_0x5b43bc['IdhHR'],_0x5b43bc['YSUQa'],_0x278970(0x82b)+_0x278970(0x4d2)+_0x278970(0xa43)+_0x278970(0x547)+_0x278970(0xf0)+_0x278970(0x6cd)+'.\x20Nee'+'ds\x20on'+_0x278970(0x388)+'sitio'+'ns.')),_0x2c0551['body'][_0x278970(0x441)+'dChil'+'d'](_0x15accf);var _0x5c8a51=_0x4fbb37(-0x53*0xc+0x2545+-0x9*0x3b1,-0x1570+0x319+0x12f7*0x1,0xe8+-0x13f+0x1*0x61,function(){return _0x41b3ea['span'];},function(_0x473044){_0x41b3ea['span']=_0x473044;});_0x5c8a51['input'][_0x278970(0xa14)+'et'][_0x278970(0x9a1)]='m';var _0x1e2c90=_0x1df490(_0x278970(0x6f1),_0x5b43bc[_0x278970(0xb20)]);_0x1e2c90[_0x278970(0x441)+'dChil'+'d'](_0x5c8a51),_0x2c0551['body'][_0x278970(0x441)+'dChil'+'d'](_0x1e2c90),_0x3f6d13['push'](_0x2c0551);var _0x336bb5=_0x501e4b('Boxes',_0x41b3ea[_0x278970(0xa1e)]),_0x3b67fd=_0x5b43bc[_0x278970(0x4de)](_0x1df490,_0x278970(0xb2)+'ed');_0x3b67fd[_0x278970(0x441)+_0x278970(0xb36)+'d'](_0x5b43bc['URXAJ'](_0x1b8bdb,function(){return _0x41b3ea['boxes'];},function(_0x59cf69){var _0x24beef=_0x278970;if('kobfw'!=='kobfw'){var _0x5227cb=(_0x24beef(0xa49)+'|3|7|'+'9|1|6'+'|0|2')['split']('|'),_0x428dc0=-0x70b+-0x9d8+0x10e3;while(!![]){switch(_0x5227cb[_0x428dc0++]){case'0':var _0x17096c=_0x535ada['SjhnQ'](_0x2f6da4[_0x24beef(0x4ce)+'nt8'](_0xf1f41f[_0x24beef(0x1f2)+'e']),0x1104+-0x4*0x8e5+0x1*0x1291);continue;case'1':var _0x33a7b8=_0x535ada[_0x24beef(0xd6)](_0x2f6da4[_0x24beef(0x4ce)+_0x24beef(0xa20)](_0xf1f41f[_0x24beef(0x6d4)+'d']),-0x1c36+0xddf*0x2+0x79);continue;case'2':return{'keyAtOffset0':_0x287c33,'hidden':_0x13cd5e,'inited':_0x33a7b8,'fake':_0xa9645d,'act':_0x17096c,'hex':_0x33f9de(_0x48e289),'alt':_0x535ada['KrPGj'](_0x4efcfc,_0x535ada[_0x24beef(0x7b5)])?_0x13cd5e^_0x535ada[_0x24beef(0x718)](_0xa9645d,-0x1bd+0xf53*-0x1+-0x1c*-0x9c):null};case'3':var _0x2f6da4=new _0x4c6e42(_0x48e289[_0x24beef(0x2eb)+'r'],_0x48e289['byteO'+_0x24beef(0x937)],_0x48e289[_0x24beef(0x6a2)+'ength']);continue;case'4':var _0xf1f41f=_0x3bb5c1[_0x1c7d25];continue;case'5':var _0x48e289=_0x535ada[_0x24beef(0x222)](_0x1eb3d8,_0x55c49b,_0xd9682c,_0xf1f41f[_0x24beef(0x7da)]);continue;case'6':var _0xa9645d=_0x268c6f===_0x24beef(0xa08)?_0x2f6da4['getFl'+_0x24beef(0x5c9)](_0xf1f41f['fake'],!![]):_0x535ada[_0x24beef(0x565)](_0x45800b,_0x535ada['rNpEH'])?_0x2f6da4['getIn'+_0x24beef(0x479)](_0xf1f41f[_0x24beef(0x18f)],!![]):_0x2f6da4[_0x24beef(0x4ce)+_0x24beef(0xa20)](_0xf1f41f['fake']);continue;case'7':var _0x287c33=_0x2f6da4['getIn'+_0x24beef(0x479)](_0xf1f41f[_0x24beef(0x4ab)],!![]);continue;case'8':if(!_0x48e289)return null;continue;case'9':var _0x13cd5e=_0x2f6da4['getIn'+'t32'](_0xf1f41f[_0x24beef(0x5c5)+'n'],!![]);continue;}break;}}else _0x41b3ea['boxes']=_0x59cf69,_0x41b3ea['on']=!![],_0x3548bd();}));var _0x4e04b1=_0x1182eb&&_0x1182eb['angle'+'s'];_0x336bb5[_0x278970(0x2f5)][_0x278970(0x441)+_0x278970(0xb36)+'d'](_0x5b43bc[_0x278970(0xcc)](_0x4a8d95,_0x5b43bc[_0x278970(0x4bb)],_0x5b43bc['YSUQa'],_0x4e04b1&&!_0x4e04b1['ident'+_0x278970(0x458)]?_0x5b43bc[_0x278970(0xaa)]('Not\x20d'+'rawin'+_0x278970(0x790),_0x4e04b1['why']||_0x278970(0x5ba)+'angle'+'s\x20uni'+'denti'+_0x278970(0x231))+_0x5b43bc[_0x278970(0x137)]:_0x4e04b1&&!_0x4e04b1['fovSa'+'ne']?_0x5b43bc['QjVBu']('Field'+_0x278970(0x86c)+_0x278970(0x4a5)+'s\x20'+Math[_0x278970(0x4d6)](_0x4e04b1['fov']),_0x5b43bc[_0x278970(0x3b4)]):_0x5b43bc[_0x278970(0x9e)])),_0x336bb5['body'][_0x278970(0x441)+'dChil'+'d'](_0x3b67fd);var _0x5953a5=_0x4fbb37(0x2039*0x1+0xba3+-0x2ba0,-0xdc9*0x1+-0x18d3+0x138f*0x2,0x2182+0x13e9+-0x4db*0xb,function(){return _0x149473['fov'];},function(_0x184e3b){var _0x5a2ebd=_0x278970;_0x149473[_0x5a2ebd(0x7dd)]=_0x184e3b,_0x3ed5b4();});_0x5953a5['input'][_0x278970(0xa14)+'et'][_0x278970(0x9a1)]='°';var _0x2cc053=_0x1df490(_0x5b43bc[_0x278970(0x41f)],'[\x20and'+_0x278970(0x274)+_0x278970(0x757)+'ep\x20th'+'is');_0x2cc053[_0x278970(0x441)+_0x278970(0xb36)+'d'](_0x5953a5);var _0x10111e=_0x1df490(_0x5b43bc[_0x278970(0x419)],_0x278970(0x7e8)+'ack\x20t'+_0x278970(0xa3e)+_0x278970(0xa44)+_0x278970(0x498)+_0x278970(0x130)),_0x1b7d79=_0x5b43bc['MWclt'](_0x4a8d95,_0x5b43bc[_0x278970(0x6d9)],_0x5b43bc['iSavx'],'Reset');_0x1b7d79[_0x278970(0x66b)+_0x278970(0x6cf)+'stene'+'r'](_0x5b43bc[_0x278970(0x154)],function(){var _0x3ab379=_0x278970,_0x1db558=(_0x3ab379(0xa86)+_0x3ab379(0x592))['split']('|'),_0x2360c4=-0x2*0xb17+0x1ac+0x1482;while(!![]){switch(_0x1db558[_0x2360c4++]){case'0':_0x2099a4(_0x1e9e8e['cat']);continue;case'1':_0x149473[_0x3ab379(0xa70)+'Off']=-0x2660+-0x34*-0x43+0x18c4;continue;case'2':_0x149473[_0x3ab379(0x7dd)]=0x1*0x299+-0x95b+0x70d;continue;case'3':_0x5b43bc[_0x3ab379(0x56f)](_0x3ed5b4);continue;case'4':_0x149473['yawOf'+'f']=-0x184b+0x184a*-0x1+0x3095;continue;}break;}}),_0x10111e[_0x278970(0x441)+'dChil'+'d'](_0x1b7d79),_0x336bb5['body'][_0x278970(0x441)+_0x278970(0xb36)+'d'](_0x2cc053),_0x336bb5[_0x278970(0x2f5)][_0x278970(0x441)+_0x278970(0xb36)+'d'](_0x10111e);var _0x92c8a8=_0x1182eb&&_0x1182eb[_0x278970(0xe1)];_0x336bb5[_0x278970(0x2f5)][_0x278970(0x441)+'dChil'+'d'](_0x5b43bc['MWclt'](_0x4a8d95,_0x278970(0x51d),_0x278970(0x9da)+'te',_0x278970(0x32b)+'\x20'+(_0x92c8a8?_0x92c8a8['mouse'+'Look']?_0x5b43bc['jIWxB'](_0x5b43bc[_0x278970(0x71c)](_0x5b43bc[_0x278970(0x75b)],_0x92c8a8[_0x278970(0x7ae)+_0x278970(0x936)]),_0x92c8a8[_0x278970(0x261)+'a']?_0x5b43bc['HuiMl']+_0x92c8a8[_0x278970(0x261)+'a']:''):_0x5b43bc['yFAAF']:_0x278970(0x2e8)+_0x278970(0x30b)+_0x278970(0x1c5)+'t')+(_0x4e04b1?_0x5b43bc['qXaiW'](_0x5b43bc[_0x278970(0x256)](_0x278970(0x7cb)+_0x278970(0x260)+'x18=',_0x5b43bc['KebgR'](_0x4e04b1[_0x278970(0x3f5)+'tch'],null)?'-':Math[_0x278970(0x4d6)](_0x4e04b1[_0x278970(0x3f5)+_0x278970(0x157)])),_0x5b43bc[_0x278970(0x878)])+(_0x4e04b1[_0x278970(0x2ff)+'w']===null?'-':Math[_0x278970(0x4d6)](_0x4e04b1[_0x278970(0x2ff)+'w']))+(_0x4e04b1[_0x278970(0x956)+'ified']?_0x5b43bc['GgukZ']:_0x278970(0xa0)+_0x278970(0x158)+'d)'):'')+(_0x149473[_0x278970(0xa70)+'Off']||_0x149473['yawOf'+'f']?_0x5b43bc['drGNT'](_0x5b43bc[_0x278970(0x969)]+Math[_0x278970(0x4d6)](_0x149473['pitch'+'Off']),_0x5b43bc['fCWpU'])+Math['round'](_0x149473[_0x278970(0x427)+'f']):''))),_0x3f6d13[_0x278970(0x7d6)](_0x336bb5);}if(_0x3517c1===_0x278970(0x1c6)+'s'){if('ozVki'===_0x5b43bc['jWsqR'])return _0x3d34e0['faile'+'d']++,_0x3fc2cd[_0x278970(0x8b7)+_0x278970(0x1cc)]=_0x514356[_0x278970(0x8b7)+_0x278970(0x1cc)]||_0x5b43bc['SxJjj'](_0x7ec14a,_0x1f86f5&&_0x3b743c['messa'+'ge']||_0x3426d5)['slice'](-0xf48+0x13ab+-0x463*0x1,-0x1*-0xe1b+0xe64*-0x2+0xf25),null;else{var _0x4700c0=[['Build','VERSI'+'ON',_0x1182eb?_0x1182eb['versi'+'on']:'-'],[_0x278970(0x465),'appli'+'ed\x20/\x20'+_0x278970(0x1c1)+'tered',_0x1182eb?_0x5b43bc[_0x278970(0x61c)](_0x5b43bc[_0x278970(0x6ac)](_0x1182eb['hooks'+'Appli'+'ed'],_0x5b43bc[_0x278970(0x49b)]),_0x1182eb[_0x278970(0x3ec)+_0x278970(0xad9)+'tered'+_0x278970(0xa4d)]):'-'],[_0x5b43bc[_0x278970(0xa2)],_0x278970(0x484)+_0x278970(0x981)+_0x278970(0x1fe)+_0x278970(0x77c),_0x1182eb&&_0x1182eb[_0x278970(0x288)+'emory']&&_0x1182eb[_0x278970(0x288)+_0x278970(0x8a8)][_0x278970(0x6ab)+'red']?_0x5b43bc[_0x278970(0x598)](_0x5b43bc['jgkaw'](Math[_0x278970(0x4d6)](_0x1182eb['wasmM'+_0x278970(0x8a8)]['bytes']/(0x3e87*-0x5+-0x1*-0x151aa1+-0x1f0ff*0x2)),_0x5b43bc['YAdrE']),_0x1182eb['wasmM'+_0x278970(0x8a8)]['atMs'])+'ms':'-'],[_0x278970(0x2ca)+'rs',_0x5b43bc[_0x278970(0x89b)],_0x1182eb&&_0x1182eb[_0x278970(0x141)]?_0x5b43bc[_0x278970(0x2c7)](String,_0x1182eb['esp'][_0x278970(0x3b1)+'rCoun'+'t']):'-'],[_0x5b43bc['GPFMz'],_0x278970(0x812)+_0x278970(0x8a0)+'ut\x20yo'+'u',_0x1182eb&&_0x1182eb[_0x278970(0x141)]?String(_0x1182eb['esp'][_0x278970(0x6ce)+_0x278970(0xae5)]):'-'],['Camer'+'a',_0x278970(0x897)+'he\x20li'+_0x278970(0x8ee)+'nager',_0x1182eb&&_0x1182eb['esp']&&_0x1182eb[_0x278970(0x141)]['camer'+'a']?_0x5b43bc['mnyxA'](_0x5b43bc['Nbzzn'](_0x1182eb[_0x278970(0x141)]['camer'+'a']+'\x20(',_0x1182eb['esp']['camer'+_0x278970(0x9a6)]),')'):'-']];for(_0x5f1541=0xe4*0x15+-0x1950+0x69c;_0x5f1541<_0x4700c0[_0x278970(0x76e)+'h'];_0x5f1541++){if(_0x5b43bc[_0x278970(0x65b)](_0x278970(0xac6),_0x278970(0xac6)))return _0x232a08[_0x278970(0x4d6)](_0x292171*(-0x1*0x1f19+-0x235*0x7+0x2ef0))/(-0x137+-0x1*0x11db+0x1376);else{var _0x4a197c=_0x5b43bc[_0x278970(0x2e9)](_0x1df490,_0x4700c0[_0x5f1541][0x4be+0x1343*0x1+0x1801*-0x1]),_0x4ec603=_0x5b43bc[_0x278970(0x787)](_0x4a8d95,'span',_0x278970(0x79e)+'l');_0x4ec603['style']['minWi'+_0x278970(0x1b3)]='0',_0x4ec603[_0x278970(0x447)][_0x278970(0xb14)]='1',_0x4ec603[_0x278970(0x447)]['textA'+_0x278970(0x1ee)]=_0x278970(0x6cd),_0x4ec603[_0x278970(0x89d)+_0x278970(0x4ea)+'t']=String(_0x4700c0[_0x5f1541][-0x196c+0x3c4*-0x9+0x1da9*0x2]),_0x4ec603[_0x278970(0xa14)+'et']['k']=_0x4700c0[_0x5f1541][-0x1*-0x240b+0x1b*0xb4+0x3706*-0x1],_0x4a197c[_0x278970(0x441)+_0x278970(0xb36)+'d'](_0x4ec603);var _0x50809d=_0x3f6d13['lengt'+'h']?_0x3f6d13[_0x3f6d13['lengt'+'h']-(-0x95f*-0x3+-0x5a7+-0x1675*0x1)]:null;!_0x50809d&&(_0x50809d=_0x5b43bc[_0x278970(0x175)](_0x501e4b,_0x5b43bc['nizyT'],![]),_0x3f6d13[_0x278970(0x7d6)](_0x50809d)),_0x50809d[_0x278970(0x2f5)][_0x278970(0x441)+_0x278970(0xb36)+'d'](_0x4a197c),_0x50809d['body'][_0x278970(0x7bd)+'hild']['sp']=_0x4ec603;}}var _0x4265d0=_0x5b43bc[_0x278970(0x18a)](_0x501e4b,_0x278970(0x2ca)+'r',![]),_0x5ef7cc=[[_0x278970(0xafe)+_0x278970(0xa5b),_0x1182eb&&_0x1182eb[_0x278970(0x723)]&&_0x1182eb[_0x278970(0x723)][_0x278970(0x549)]?_0x278970(0x8f4)+_0x278970(0x5d7)+'ler+'+_0x1182eb['local'][_0x278970(0x549)]:'FPSco'+_0x278970(0x5d7)+'ler',_0x1182eb&&_0x1182eb[_0x278970(0x723)]&&_0x1182eb[_0x278970(0x723)][_0x278970(0x217)]?_0x1182eb[_0x278970(0x723)]['feet'][_0x278970(0x6be)](function(_0x1999d6){var _0x282715=_0x278970;return _0x535ada[_0x282715(0xb2e)](Math['round'](_0x1999d6*(-0xeef+0xa47+-0x22*-0x26)),0x43*0x2f+0x10d1+0x2*-0xe5d);})[_0x278970(0x896)]('\x20\x20'):'-'],[_0x5b43bc[_0x278970(0x4d3)],_0x5b43bc[_0x278970(0x61c)]('+',_0x2a7ec4)+'m',_0x1182eb&&_0x1182eb[_0x278970(0x723)]&&_0x1182eb[_0x278970(0x723)][_0x278970(0x849)]?_0x1182eb[_0x278970(0x723)]['eye'][_0x278970(0x6be)](function(_0x552877){var _0x218427=_0x278970;return _0x535ada[_0x218427(0xb2e)](Math['round'](_0x552877*(0xd32+-0x192d+0xc5f)),-0x548+-0x18c1+-0x1e6d*-0x1);})['join']('\x20\x20'):'-'],[_0x5b43bc['XlUJa'],_0x5b43bc[_0x278970(0xa92)],_0x124a1a(_0x1182eb,_0x278970(0x8f4)+_0x278970(0x5d7)+_0x278970(0x591),-0x61e+-0xc0*-0x1d+-0xf92)],[_0x5b43bc[_0x278970(0x188)],_0x5b43bc[_0x278970(0x64b)],_0x124a1a(_0x1182eb,_0x5b43bc['FrCjE'],0x1*-0x527+-0xc62+-0x11c9*-0x1)],[_0x5b43bc['bydDK'],_0x5b43bc['CZlqn'],_0x5b43bc['AgpIW'](_0x124a1a,_0x1182eb,_0x278970(0x8f4)+'ntrol'+'ler',0x20*-0xc5+-0x8c9*-0x1+0x10f3)],['Healt'+'h',_0x278970(0x9f2)+'hScri'+_0x278970(0x343)+'C0',_0x124a1a(_0x1182eb,_0x5b43bc[_0x278970(0x48d)],0x1e5d+0x2*0x65d+-0x2a57)]];for(_0x5f1541=-0xf06+0x1*-0x6df+0x15e5;_0x5f1541<_0x5ef7cc[_0x278970(0x76e)+'h'];_0x5f1541++){var _0x544077=(_0x278970(0x2bd)+'|4|9|'+_0x278970(0x984)+_0x278970(0x153))[_0x278970(0x8ec)]('|'),_0x531579=-0x1*0xab6+0x2225+-0x176f*0x1;while(!![]){switch(_0x544077[_0x531579++]){case'0':var _0x496a45=_0x5b43bc[_0x278970(0x34d)](_0x4a8d95,_0x278970(0x97d),_0x278970(0x79e)+'l');continue;case'1':_0x4265d0['body'][_0x278970(0x441)+_0x278970(0xb36)+'d'](_0x4d20bf);continue;case'2':_0x4265d0[_0x278970(0x2f5)][_0x278970(0x7bd)+'hild']['sp']=_0x496a45;continue;case'3':_0x496a45['textC'+'onten'+'t']=String(_0x5ef7cc[_0x5f1541][0xf47+-0xbe3+-0x362]);continue;case'4':_0x496a45['style'][_0x278970(0xb14)]='1';continue;case'5':_0x4d20bf[_0x278970(0x441)+'dChil'+'d'](_0x496a45);continue;case'6':var _0x4d20bf=_0x1df490(_0x5ef7cc[_0x5f1541][0x1d97+0x46b*0x1+0x2202*-0x1]);continue;case'7':_0x496a45[_0x278970(0x447)]['minWi'+_0x278970(0x1b3)]='0';continue;case'8':_0x496a45[_0x278970(0xa14)+'et']['k']=_0x5ef7cc[_0x5f1541][-0x3*0x39+0x1*-0x8cb+-0x977*-0x1];continue;case'9':_0x496a45[_0x278970(0x447)][_0x278970(0x1ce)+'lign']=_0x278970(0x6cd);continue;}break;}}_0x3f6d13['push'](_0x4265d0);}}if(_0x5b43bc[_0x278970(0x567)](_0x3517c1,_0x5b43bc['NXrsv'])){var _0x301291=_0x501e4b(_0x5b43bc['vfNDK'],![]),_0x4d2dc9=_0x1182eb&&_0x1182eb[_0x278970(0xb4e)+_0x278970(0x29f)]&&_0x1182eb[_0x278970(0xb4e)+_0x278970(0x29f)][_0x278970(0x76e)+'h']?_0x1182eb[_0x278970(0xb4e)+'ngs'][_0x278970(0x896)]('\x0a'):'no\x20wa'+_0x278970(0x4ee)+'s';_0x301291[_0x278970(0x2f5)][_0x278970(0x441)+'dChil'+'d'](_0x5b43bc[_0x278970(0x594)](_0x4a8d95,'div',_0x5b43bc[_0x278970(0x211)],_0x4d2dc9)),_0x3f6d13['push'](_0x301291);var _0x371f06=_0x5b43bc[_0x278970(0x93c)](_0x501e4b,_0x278970(0x51c)+'t',![]),_0x324ab0=_0x5b43bc[_0x278970(0x535)](_0x4a8d95,_0x5b43bc[_0x278970(0x6d9)],_0x278970(0xad2)+'n',_0x5b43bc['Cavbv']);_0x324ab0[_0x278970(0x55e)]=_0x278970(0xb13)+'n',_0x324ab0['oncli'+'ck']=function(){var _0x135e9d=_0x278970;try{if(_0x535ada['vaUeR']===_0x135e9d(0x6ad)){var _0x3a9b64=_0x535ada['GrFve'](_0x535ada[_0x135e9d(0x663)](_0x535ada[_0x135e9d(0x5ea)](_0x535ada['kFaMi'](_0x572cf5,'\x0a'),JSON[_0x135e9d(0x708)+_0x135e9d(0x57f)](_0x1182eb,null,-0x17*0xf1+-0x1*0x6fc+-0x1ca4*-0x1)),'\x0a'),_0x515444);if(navigator[_0x135e9d(0x740)+_0x135e9d(0x272)]&&navigator['clipb'+'oard']['write'+'Text'])navigator[_0x135e9d(0x740)+'oard'][_0x135e9d(0x73e)+_0x135e9d(0x39d)](_0x3a9b64)[_0x135e9d(0x36b)](function(){var _0x6b95d0=_0x135e9d;_0x324ab0[_0x6b95d0(0x89d)+'onten'+'t']=_0x535ada[_0x6b95d0(0x890)];});else _0x324ab0[_0x135e9d(0x89d)+'onten'+'t']=_0x135e9d(0x8d3)+'oard\x20'+_0x135e9d(0x191)+_0x135e9d(0x945)+'open\x20'+_0x135e9d(0x45d)+_0x135e9d(0x39f)+_0x135e9d(0x1cd)+'ad';}else try{return _0x2dd4c1[_0x135e9d(0x128)+'em'](_0x585b6f)==='1';}catch(_0x376259){return![];}}catch(_0x3ed78b){_0x324ab0['textC'+_0x135e9d(0x4ea)+'t']=_0x135e9d(0x1af)+_0x135e9d(0x6b3)+'d';}},_0x371f06['body']['appen'+_0x278970(0xb36)+'d'](_0x4a8d95(_0x5b43bc['IdhHR'],_0x5b43bc[_0x278970(0x9ab)],_0x5b43bc[_0x278970(0x673)])),_0x371f06['body'][_0x278970(0x441)+'dChil'+'d'](_0x324ab0),_0x3f6d13[_0x278970(0x7d6)](_0x371f06);}return _0x3f6d13;}function _0x3548bd(){var _0x43fd21=_0x6937dd,_0x53828d={'ICLYA':_0x5b43bc[_0x43fd21(0xaa8)]};if(_0x5b43bc['BVYBA']===_0x43fd21(0xdd)){var _0x10cb03=_0x1ca973[_0x43fd21(0x51a)+'eElem'+_0x43fd21(0x516)]('style');_0x10cb03['id']=_0x43fd21(0xac)+_0x43fd21(0x3b0)+_0x43fd21(0x3ba)+'ss',_0x10cb03[_0x43fd21(0x89d)+_0x43fd21(0x4ea)+'t']=_0x53828d['ICLYA'],(_0x359806['head']||_0x24504d[_0x43fd21(0xa94)+_0x43fd21(0x1c7)+'ement'])[_0x43fd21(0x441)+_0x43fd21(0xb36)+'d'](_0x10cb03);}else{if(_0x1e9e8e[_0x43fd21(0x2ec)])_0x5b43bc[_0x43fd21(0x8de)](_0x15f25d,!![]);}}function _0x298aa4(){var _0x15b202=_0x6937dd;try{var _0x9913c1=localStorage[_0x15b202(0x128)+'em'](_0x5ea28f);if(!_0x9913c1)return;var _0x3dfdf9=JSON['parse'](_0x9913c1);if(_0x3dfdf9&&typeof _0x3dfdf9['x']===_0x5b43bc[_0x15b202(0x637)]&&_0x5b43bc['fcAcy'](typeof _0x3dfdf9['y'],_0x15b202(0x82d)+'r'))_0x1e9e8e[_0x15b202(0x2a7)]=_0x3dfdf9;}catch(_0x5b5b79){}}function _0x4de880(){var _0x119fdc=_0x6937dd;try{localStorage[_0x119fdc(0x62f)+'em'](_0x5ea28f,JSON[_0x119fdc(0x708)+_0x119fdc(0x57f)](_0x1e9e8e[_0x119fdc(0x2a7)]));}catch(_0x59e7be){}}function _0x22434d(){var _0x26d13d=_0x6937dd;if(_0x26d13d(0x15e)===_0x26d13d(0x15e)){var _0xd01ed2=_0x1e9e8e[_0x26d13d(0x233)];if(!_0xd01ed2||!_0xd01ed2[_0x26d13d(0x447)])return;_0x1e9e8e['pos']?(_0xd01ed2['style'][_0x26d13d(0x14a)]=_0x1e9e8e[_0x26d13d(0x2a7)]['x']+'px',_0xd01ed2[_0x26d13d(0x447)][_0x26d13d(0x11d)]=_0x5b43bc[_0x26d13d(0x206)](_0x1e9e8e[_0x26d13d(0x2a7)]['y'],'px'),_0xd01ed2['style'][_0x26d13d(0x6cd)]=_0x5b43bc['fIEaW'],_0xd01ed2[_0x26d13d(0x447)][_0x26d13d(0x8c8)+'m']='auto'):(_0xd01ed2['style'][_0x26d13d(0x14a)]=_0x5b43bc[_0x26d13d(0x588)],_0xd01ed2['style']['top']=_0x26d13d(0x644),_0xd01ed2[_0x26d13d(0x447)][_0x26d13d(0x6cd)]=_0x5b43bc[_0x26d13d(0x361)],_0xd01ed2[_0x26d13d(0x447)]['botto'+'m']=_0x5b43bc['clspm']);}else _0x4c9120['style'][_0x26d13d(0x14a)]=_0x4083c2[_0x26d13d(0x2a7)]['x']+'px',_0x5e0cb0['style']['top']=_0x5b43bc[_0x26d13d(0x3c9)](_0x2eed29[_0x26d13d(0x2a7)]['y'],'px'),_0x4f14c2[_0x26d13d(0x447)]['right']=_0x5b43bc[_0x26d13d(0x588)],_0x2eca06[_0x26d13d(0x447)][_0x26d13d(0x8c8)+'m']='auto';}function _0x180015(_0x130d59,_0x519856){var _0x921c77=_0x6937dd,_0x6ccf71={'ufXBb':function(_0x2fecdd,_0x5ad998){return _0x2fecdd===_0x5ad998;},'vViiO':_0x5b43bc[_0x921c77(0x899)],'zRDLk':function(_0x270e1c){return _0x270e1c();}};if(_0x5b43bc[_0x921c77(0x2d9)](_0x921c77(0x9c4),_0x5b43bc['nirUR']))_0x257a7b[_0x921c77(0xb4e)+_0x921c77(0x29f)][_0x921c77(0x7d6)](_0x921c77(0x6c3)+_0x921c77(0x444)+_0x921c77(0x8c4)+_0x921c77(0x313)+_0x921c77(0x6ab)+_0x921c77(0x150)+_0x921c77(0x52f)+_0x921c77(0x7d9)+_0x11caa8[_0x921c77(0x981)+_0x921c77(0x11e)+'eplac'+'ed']['join'](',\x20'));else try{var _0xa60d2e=![],_0x37a477=-0x1*-0x47f+0x5*0x624+-0x2333,_0x4405fc=0x2*0x319+-0xe84*-0x2+0x233a*-0x1;_0x519856[_0x921c77(0x447)][_0x921c77(0x4a9)+'r']=_0x921c77(0x7b9),_0x519856[_0x921c77(0x447)]['touch'+'Actio'+'n']=_0x921c77(0x422);var _0x2841ef=function(_0x27ed12){var _0x109aa1=_0x921c77;if(_0x109aa1(0xa22)!==_0x109aa1(0x5bb)){_0xa60d2e=!![],_0x519856[_0x109aa1(0x447)][_0x109aa1(0x4a9)+'r']=_0x5b43bc[_0x109aa1(0xabc)];var _0x505e1e={'left':parseFloat(_0x130d59[_0x109aa1(0x447)]['left'])||0xd0d+0x8d*-0x1+-0xc80,'top':parseFloat(_0x130d59[_0x109aa1(0x447)]['top'])||0x1f7f+-0x1*0x18f2+0xd*-0x81};(!_0x130d59['style']['left']||_0x5b43bc[_0x109aa1(0x2d9)](_0x130d59[_0x109aa1(0x447)]['left'],'auto'))&&(_0x505e1e[_0x109aa1(0x14a)]=(window[_0x109aa1(0x63e)+_0x109aa1(0x2ba)]||-0x221b+-0x1446+0x1*0x3661)-(_0x130d59['offse'+'tWidt'+'h']||0x1*-0x10b2+0x1*-0xd39+-0x11*-0x1e7)-(-0xcd8+0x38f*-0x1+-0x107f*-0x1));(!_0x130d59[_0x109aa1(0x447)]['top']||_0x130d59[_0x109aa1(0x447)]['top']===_0x109aa1(0x644))&&(_0x505e1e[_0x109aa1(0x11d)]=_0x5b43bc[_0x109aa1(0x7ac)](_0x5b43bc['EUddm'](window['inner'+_0x109aa1(0x4d0)+'t']||0x6c2+-0x17e4*-0x1+-0x1ea6,_0x130d59[_0x109aa1(0x25f)+'tHeig'+'ht']||-0x1*0x1c42+-0x1881*0x1+0x1*0x3653),-0x3*-0x570+0x1*-0x227f+0x1247*0x1));_0x37a477=(_0x27ed12['clien'+'tX']||0x1507+0x6*0x135+-0x1c45*0x1)-_0x505e1e[_0x109aa1(0x14a)],_0x4405fc=(_0x27ed12['clien'+'tY']||-0x7*0x305+0xe0f*-0x2+0x3*0x106b)-_0x505e1e['top'];try{_0x27ed12[_0x109aa1(0x324)+'ntDef'+'ault']();}catch(_0x410126){}}else return _0x4cb7e6['v'][-0x3a3+-0xcfa+0x109d]===_0xff3510[0x108f+0x1*-0xd2f+0xc*-0x48]&&_0x5e60fc['v'][-0x281*-0x2+0x191*-0x2+-0x1df]===_0x1e96e1[0xb40+0x2092+-0x2bd1]&&_0x6ccf71[_0x109aa1(0xf6)](_0x4790a4['v'][0xff2+-0x1d2e+0x235*0x6],_0x4265e1[-0x3*0x18b+-0x337*-0x2+-0x1cb]);},_0x5ef9de=function(_0x1ce585){var _0xd54972=_0x921c77,_0x52b02d=(_0xd54972(0x631)+'|0|4|'+'5|8|9'+_0xd54972(0x660))[_0xd54972(0x8ec)]('|'),_0x5d13ee=0xb6c+-0x761*0x4+-0xc1*-0x18;while(!![]){switch(_0x52b02d[_0x5d13ee++]){case'0':_0x2b1b65=Math[_0xd54972(0xa12)](0x1*0x170f+0xe68+-0x103*0x25,Math['min'](_0x5b43bc[_0xd54972(0x3ff)](window['inner'+_0xd54972(0x2ba)]||0xbc9*0x3+0x1774*-0x1+0x1*-0xbe7,_0x3bfc10)-(-0x17a4+0x22d*0x4+0xef8),_0x2b1b65));continue;case'1':if(!_0xa60d2e)return;continue;case'2':_0x130d59['style']['botto'+'m']=_0x5b43bc[_0xd54972(0x588)];continue;case'3':var _0x2b1b65=_0x5b43bc[_0xd54972(0x3ff)](_0x1ce585[_0xd54972(0x6ef)+'tX']||0x4c1*0x5+-0x24*-0x99+-0x2d49,_0x37a477),_0x5ca608=_0x5b43bc['EUddm'](_0x1ce585[_0xd54972(0x6ef)+'tY']||0x557*0x3+-0x247*-0x1+-0x124c,_0x4405fc);continue;case'4':_0x5ca608=Math['max'](0x137d+0x1*-0x1458+0x1*0xe3,Math[_0xd54972(0x240)](_0x5b43bc[_0xd54972(0xb0b)]((window['inner'+_0xd54972(0x4d0)+'t']||-0x9d5+-0xc51+0x1626)-_0x13240d,-0xc51+0xa1*0x17+-0x21e),_0x5ca608));continue;case'5':_0x130d59[_0xd54972(0x447)]['left']=_0x2b1b65+'px';continue;case'6':_0x1e9e8e[_0xd54972(0x2a7)]={'x':_0x2b1b65,'y':_0x5ca608};continue;case'7':var _0x3bfc10=_0x130d59[_0xd54972(0x25f)+'tWidt'+'h']||-0x1a5c+0x1*0x17f+0x1b49,_0x13240d=_0x130d59[_0xd54972(0x25f)+_0xd54972(0x760)+'ht']||-0xb30+0xaaa+0x216;continue;case'8':_0x130d59[_0xd54972(0x447)][_0xd54972(0x11d)]=_0x5ca608+'px';continue;case'9':_0x130d59[_0xd54972(0x447)]['right']='auto';continue;}break;}},_0x233013=function(){var _0x403c0c=_0x921c77;if(!_0xa60d2e)return;_0xa60d2e=![],_0x519856[_0x403c0c(0x447)][_0x403c0c(0x4a9)+'r']=_0x6ccf71[_0x403c0c(0x88e)],_0x6ccf71[_0x403c0c(0x652)](_0x4de880);};_0x519856['addEv'+_0x921c77(0x6cf)+'stene'+'r'](_0x5b43bc['PhpEr'],_0x2841ef),window['addEv'+'entLi'+'stene'+'r']('mouse'+'move',_0x5ef9de),window[_0x921c77(0x66b)+'entLi'+_0x921c77(0x761)+'r'](_0x921c77(0x7ae)+'up',_0x233013),_0x519856[_0x921c77(0x66b)+'entLi'+_0x921c77(0x761)+'r'](_0x921c77(0x60c)+'start',_0x2841ef,{'passive':![]}),window[_0x921c77(0x66b)+'entLi'+'stene'+'r'](_0x921c77(0x60c)+_0x921c77(0x317),_0x5ef9de,{'passive':![]}),window[_0x921c77(0x66b)+'entLi'+_0x921c77(0x761)+'r'](_0x5b43bc['sKuVZ'],_0x233013);}catch(_0x513944){}}function _0x5b316(){var _0x106896=_0x6937dd;if(_0x1e9e8e['built'])return _0x1e9e8e['root'];try{if(!document['body']||!document['body'][_0x106896(0x441)+'dChil'+'d'])return null;if(!document[_0x106896(0x513)+'ement'+_0x106896(0x6e1)]('sakur'+_0x106896(0x490)+_0x106896(0x78d))){if(_0x5b43bc['LrSow']===_0x5b43bc[_0x106896(0x522)]){var _0x381279=document['creat'+'eElem'+'ent'](_0x106896(0x447));_0x381279['id']=_0x5b43bc[_0x106896(0x51f)],_0x381279[_0x106896(0x89d)+'onten'+'t']=_0x84aac1,(document[_0x106896(0x989)]||document[_0x106896(0xa94)+_0x106896(0x1c7)+'ement'])[_0x106896(0x441)+_0x106896(0xb36)+'d'](_0x381279);}else try{_0x293dee[_0x106896(0x89d)+_0x106896(0x4ea)+'t']=_0x5b43bc['ExzYn'](_0x5263cf,_0x17064a);}catch(_0x4822b0){_0x23b564[_0x106896(0x89d)+_0x106896(0x4ea)+'t']=_0x47d038[_0x106896(0x708)+_0x106896(0x57f)](_0x34f40d,null,-0x13b8+0x1d41+-0x988);}}var _0x5b20d3=_0x5b43bc[_0x106896(0xa11)](_0x4a8d95,_0x5b43bc[_0x106896(0x4bb)],_0x5b43bc[_0x106896(0x311)]);_0x5b20d3['id']=_0x5b43bc[_0x106896(0x96f)];var _0x1fd646=_0x4a8d95(_0x5b43bc[_0x106896(0x4bb)],_0x106896(0xab0)+'de'),_0x192c1f=_0x4a8d95(_0x106896(0x51d),_0x5b43bc[_0x106896(0x84e)],_0x4e7aa1);_0x1fd646[_0x106896(0x441)+_0x106896(0xb36)+'d'](_0x192c1f);var _0x307aa7=_0x5b43bc['zJkpD'](_0x4a8d95,_0x106896(0x51d),_0x106896(0x86e)+'in'),_0x5bed6f=_0x5b43bc[_0x106896(0x172)](_0x4a8d95,'div',_0x5b43bc[_0x106896(0x58d)]),_0xa3883c=_0x4a8d95(_0x106896(0x51d),_0x106896(0x4f3)+_0x106896(0x4df)),_0x5c11c9=_0x4a8d95(_0x106896(0x51d),_0x5b43bc[_0x106896(0x59b)],_0x5b43bc[_0x106896(0xb34)]),_0x19bbf4=_0x4a8d95(_0x106896(0x51d),_0x5b43bc[_0x106896(0x4be)],_0x5b43bc['vCPVG']);_0xa3883c[_0x106896(0x441)+_0x106896(0xb36)+'d'](_0x5c11c9),_0xa3883c['appen'+_0x106896(0xb36)+'d'](_0x19bbf4);var _0x9dceea=_0x5b43bc[_0x106896(0xee)](_0x4a8d95,_0x5b43bc[_0x106896(0x4bb)],_0x106896(0xb00)+_0x106896(0x79b),'<svg\x20'+'viewB'+_0x106896(0x397)+_0x106896(0x91e)+'\x2024\x22>'+_0x106896(0x9aa)+_0x106896(0x518)+_0x106896(0x17d)+'2\x2012M'+_0x106896(0x503)+_0x106896(0x7c1)+_0x106896(0x47d)+_0x106896(0x770));_0x9dceea[_0x106896(0x624)+'ck']=function(){_0x15f25d(![]);},_0x5bed6f[_0x106896(0x441)+'dChil'+'d'](_0xa3883c),_0x5bed6f[_0x106896(0x441)+_0x106896(0xb36)+'d'](_0x9dceea);var _0x19ee94=_0x4a8d95('div',_0x106896(0x629)+'ls');_0x307aa7[_0x106896(0x441)+'dChil'+'d'](_0x5bed6f),_0x307aa7['appen'+_0x106896(0xb36)+'d'](_0x19ee94),_0x5b20d3[_0x106896(0x441)+'dChil'+'d'](_0x1fd646),_0x5b20d3[_0x106896(0x441)+'dChil'+'d'](_0x307aa7),document[_0x106896(0x2f5)][_0x106896(0x441)+'dChil'+'d'](_0x5b20d3),_0x1e9e8e[_0x106896(0x233)]=_0x5b20d3,_0x1e9e8e[_0x106896(0x9bd)]=_0x19ee94,_0x1e9e8e['head']=_0x5c11c9,_0x1e9e8e['sub']=_0x19bbf4,_0x298aa4(),_0x5b43bc[_0x106896(0x4af)](_0x22434d),_0x180015(_0x5b20d3,_0x5bed6f);var _0x3a180b={};for(var _0x4e2a9b=0x20c9+-0x1cfd+-0x3cc;_0x5b43bc[_0x106896(0x842)](_0x4e2a9b,_0x4a1513[_0x106896(0x76e)+'h']);_0x4e2a9b++){var _0x311c91=_0x4a1513[_0x4e2a9b],_0x1cd184=_0x4a8d95(_0x106896(0xb13)+'n',_0x5b43bc[_0x106896(0x17e)],_0x5b43bc['RAqPe'](_0x5b43bc[_0x106896(0x204)](_0x5b43bc['JCAga'],_0x311c91[_0x106896(0x84c)]),'</sma'+_0x106896(0x530)));_0x1cd184[_0x106896(0x55e)]=_0x5b43bc['twRWk'],_0x1cd184['title']=_0x311c91['label'],function(_0x29ce04){var _0x94510f={'GtjZf':function(_0x38cd7b,_0x54c14b){return _0x38cd7b(_0x54c14b);}};_0x1cd184['oncli'+'ck']=function(){var _0x365b53=_0x5c65;_0x94510f[_0x365b53(0x29d)](_0x2099a4,_0x29ce04);};}(_0x311c91['id']),_0x3a180b[_0x311c91['id']]=_0x1cd184,_0x1fd646['appen'+'dChil'+'d'](_0x1cd184);}_0x1e9e8e['butto'+'ns']=_0x3a180b;var _0x536bad=_0x4a8d95('div',null,_0x2f21eb);return _0x536bad['id']=_0x5b43bc['XiInl'],_0x536bad[_0x106896(0x5b5)]=_0x106896(0x514)+'a\x20Ski'+_0x106896(0xc2)+_0x106896(0x6c7)+_0x106896(0xa37),_0x536bad[_0x106896(0x8a4)+_0x106896(0x229)+'er']=function(){var _0x21f336=_0x106896;_0x536bad[_0x21f336(0x447)][_0x21f336(0x8b9)+'ty']='1';},_0x536bad[_0x106896(0x8a4)+'selea'+'ve']=function(){_0x536bad['style']['opaci'+'ty']=_0x1e9e8e['open']?'1':'.5';},_0x536bad[_0x106896(0x624)+'ck']=function(_0x5966d9){var _0xe8d1d6=_0x106896;if(_0x5966d9&&_0x5966d9[_0xe8d1d6(0x276)+_0xe8d1d6(0x97c)+_0xe8d1d6(0x78f)])_0x5966d9['stopP'+_0xe8d1d6(0x97c)+_0xe8d1d6(0x78f)]();_0x15f25d(!_0x1e9e8e[_0xe8d1d6(0x2ec)]);},document['body'][_0x106896(0x441)+_0x106896(0xb36)+'d'](_0x536bad),_0x1e9e8e['petal']=_0x536bad,setInterval(function(){var _0x2433df=_0x106896;try{if(!_0x1e9e8e[_0x2433df(0x6ec)])return;var _0x1b4f98=_0x293fa4();_0x1e9e8e[_0x2433df(0x6ec)][_0x2433df(0x447)]['opaci'+'ty']=_0x1e9e8e['open']?'1':_0x1b4f98?'.8':_0x2433df(0xaf0),_0x1e9e8e['petal'][_0x2433df(0x5b5)]=_0x1b4f98?'Sakur'+_0x2433df(0x73f)+'llWar'+_0x2433df(0x6c7)+_0x2433df(0xa37):_0x2433df(0x514)+_0x2433df(0x73f)+'llWar'+_0x2433df(0xacd)+'aitin'+'g\x20for'+_0x2433df(0x930)+'game\x20'+_0x2433df(0x8f3)+_0x2433df(0x736);}catch(_0x5dfd63){}},-0x81*-0x46+0x7aa+-0x2834),_0x1e9e8e[_0x106896(0x55c)]=!![],_0x5b43bc['vpMhZ'](_0x2099a4,_0x1e9e8e[_0x106896(0x309)]),_0x5b20d3;}catch(_0x6cae28){return console[_0x106896(0x639)](_0x5b43bc['ansSS'],_0x5b43bc['eBAMc'](_0x5b43bc['vMiUo'],_0x494d48),_0x6cae28),null;}}function _0x2099a4(_0x18dbec){var _0x374428=_0x6937dd;_0x1e9e8e[_0x374428(0x309)]=_0x18dbec,_0x1e9e8e[_0x374428(0x694)]=[];if(!_0x1e9e8e[_0x374428(0x9bd)])return;var _0x5598be=null;for(var _0x5f4c6f=-0x2*0xe53+0x2266+-0x5c0;_0x5b43bc[_0x374428(0x381)](_0x5f4c6f,_0x4a1513[_0x374428(0x76e)+'h']);_0x5f4c6f++)if(_0x5b43bc['IAhri'](_0x4a1513[_0x5f4c6f]['id'],_0x18dbec))_0x5598be=_0x4a1513[_0x5f4c6f];_0x1e9e8e[_0x374428(0x989)][_0x374428(0x89d)+_0x374428(0x4ea)+'t']=_0x5b43bc[_0x374428(0x927)](_0x374428(0x514)+_0x374428(0x73f)+_0x374428(0xc2)+'z\x20—\x20',_0x5598be&&_0x5598be[_0x374428(0x84c)]||'?');for(var _0x1cc369 in _0x1e9e8e['butto'+'ns']){if(_0x1e9e8e['butto'+'ns'][_0x1cc369][_0x374428(0xaa0)+_0x374428(0x698)])_0x1e9e8e[_0x374428(0xb13)+'ns'][_0x1cc369][_0x374428(0xaa0)+_0x374428(0x49c)]=_0x374428(0xd5)+'b'+(_0x5b43bc[_0x374428(0x129)](_0x1cc369,_0x18dbec)?_0x5b43bc[_0x374428(0xa13)]:'');}var _0x44727a=[];try{_0x44727a=_0x5dbfb1(_0x18dbec);}catch(_0x19c0d3){if('kxVWK'===_0x5b43bc[_0x374428(0x407)]){if(_0x1efed1['el'])_0x273e55['el']['style'][_0x374428(0x1f8)+'ay']='none';return;}else _0x44727a=[];}while(_0x1e9e8e['cols'][_0x374428(0x6f6)+_0x374428(0xa67)])_0x1e9e8e[_0x374428(0x9bd)]['remov'+'eChil'+'d'](_0x1e9e8e['cols'][_0x374428(0x6f6)+_0x374428(0xa67)]);for(var _0x420d66=0x2439+0x4c8+-0x2901;_0x420d66<_0x44727a[_0x374428(0x76e)+'h'];_0x420d66++)_0x1e9e8e[_0x374428(0x9bd)][_0x374428(0x441)+_0x374428(0xb36)+'d'](_0x44727a[_0x420d66]);}function _0x15f25d(_0x101565){var _0x36ae8b=_0x6937dd,_0xc93f6d=_0x5b43bc['gsexh']['split']('|'),_0x432caa=-0x9*0x2c5+0x1*-0x26bd+0x3faa;while(!![]){switch(_0xc93f6d[_0x432caa++]){case'0':if(_0x1e9e8e[_0x36ae8b(0x2ec)]){_0x5b43bc[_0x36ae8b(0x7a8)](_0x2099a4,_0x1e9e8e['cat']);try{var _0x232554=window['inner'+'Heigh'+'t']||0x11*0x1f9+0x20bb+-0x3f24;if(_0x232554<0x1e38+-0x47b*-0x4+-0x2db8)_0x2b8033(![]);}catch(_0xc147ce){}}continue;case'1':_0x1e9e8e[_0x36ae8b(0x2ec)]=!!_0x101565;continue;case'2':if(!_0x2f122d)return;continue;case'3':if(_0x1e9e8e[_0x36ae8b(0x6ec)])_0x1e9e8e[_0x36ae8b(0x6ec)]['style'][_0x36ae8b(0x8b9)+'ty']=_0x1e9e8e[_0x36ae8b(0x2ec)]?'1':'.5';continue;case'4':_0x2f122d[_0x36ae8b(0xaa0)+_0x36ae8b(0x49c)]=_0x5b43bc['bLeVu']('mn-pa'+_0x36ae8b(0x42e),_0x1e9e8e[_0x36ae8b(0x2ec)]?_0x5b43bc['mDYHq']:'');continue;case'5':var _0x2f122d=_0x5b43bc[_0x36ae8b(0x56f)](_0x5b316);continue;}break;}}function _0x1d8e13(){var _0x38efc0=_0x6937dd,_0x40b0b4={'bBsoW':function(_0x38589e,_0xee417d){return _0x38589e*_0xee417d;}};if(!_0x1e9e8e[_0x38efc0(0x2ec)]||!_0x1e9e8e[_0x38efc0(0x55c)])return;try{for(var _0x1cb905=-0xd*0x35+0x49e+-0x1*0x1ed;_0x1cb905<_0x1e9e8e['syncs'][_0x38efc0(0x76e)+'h'];_0x1cb905++){try{_0x5b43bc['zvMJf'](_0x38efc0(0x70c),'qyRGG')?_0x1e9e8e[_0x38efc0(0x694)][_0x1cb905]():_0x4c266a(![]);}catch(_0x5ab76c){}}var _0x2b7ed4=_0x167128;_0x1e9e8e[_0x38efc0(0xc8)]['textC'+'onten'+'t']=_0x2b7ed4?_0x5b43bc[_0x38efc0(0x89c)](_0x5b43bc['nylbQ'](_0x5b43bc[_0x38efc0(0x2aa)]('v'+_0x2b7ed4[_0x38efc0(0x957)+'on']+_0x5b43bc['tQZtW']+_0x2b7ed4[_0x38efc0(0x3ec)+_0x38efc0(0x9a9)+'ed']+'/',_0x2b7ed4['hooks'+'Total'])+_0x5b43bc['qdKZz'],_0x2b7ed4[_0x38efc0(0x141)]&&_0x2b7ed4[_0x38efc0(0x141)][_0x38efc0(0x3b1)+_0x38efc0(0x815)+'t']||-0x2*-0xa9+-0x2699+0x2547),_0x38efc0(0x77d)+_0x38efc0(0x2c8))+(_0x2b7ed4['wasmM'+_0x38efc0(0x8a8)]&&_0x2b7ed4[_0x38efc0(0x288)+_0x38efc0(0x8a8)][_0x38efc0(0x6ab)+'red']?Math[_0x38efc0(0x4d6)](_0x2b7ed4[_0x38efc0(0x288)+_0x38efc0(0x8a8)][_0x38efc0(0x3cb)]/(-0x36c52+-0x1d*-0xc7ca+-0x10*0x3359))+'MB':'-'):'waiti'+_0x38efc0(0x1ca)+_0x38efc0(0x368)+'\x20firs'+_0x38efc0(0x94d)+_0x38efc0(0x4b8);var _0x3d97a9=_0x1e9e8e[_0x38efc0(0x9bd)][_0x38efc0(0x208)+_0x38efc0(0x477)+_0x38efc0(0x728)+'l']?_0x1e9e8e[_0x38efc0(0x9bd)]['query'+'Selec'+_0x38efc0(0x728)+'l'](_0x38efc0(0x62c)+'-k]'):[];for(var _0x28279=0xf87+-0x13ab*-0x1+0xa*-0x385;_0x5b43bc[_0x38efc0(0xa7d)](_0x28279,_0x3d97a9['lengt'+'h']);_0x28279++){if(_0x5b43bc[_0x38efc0(0x8b3)](_0x38efc0(0x682),_0x5b43bc[_0x38efc0(0x40d)])){var _0x51445c=_0x3d97a9[_0x28279]['datas'+'et']['k'],_0xa1425d='';if(_0x51445c===_0x5b43bc[_0x38efc0(0x166)])_0xa1425d=_0x2b7ed4?_0x2b7ed4['versi'+'on']:'-';else{if(_0x5b43bc[_0x38efc0(0x802)](_0x51445c,_0x38efc0(0x2d5)+'ed\x20/\x20'+_0x38efc0(0x1c1)+_0x38efc0(0x575)))_0xa1425d=_0x2b7ed4?_0x2b7ed4['hooks'+'Appli'+'ed']+'\x20/\x20'+_0x2b7ed4['hooks'+_0x38efc0(0xad9)+'tered'+'AtArm']:'-';else{if(_0x51445c===_0x5b43bc['jwDbs'])_0xa1425d=_0x2b7ed4&&_0x2b7ed4[_0x38efc0(0x288)+_0x38efc0(0x8a8)]&&_0x2b7ed4['wasmM'+_0x38efc0(0x8a8)]['captu'+_0x38efc0(0x3d7)]?_0x5b43bc['Nbzzn'](Math['round'](_0x5b43bc[_0x38efc0(0x935)](_0x2b7ed4[_0x38efc0(0x288)+_0x38efc0(0x8a8)]['bytes'],-0xe13ee*0x1+0xf2161+0x21dd*0x71))+('\x20MB\x20@'+'\x20'),_0x2b7ed4[_0x38efc0(0x288)+'emory'][_0x38efc0(0x859)])+'ms':'-';else{if(_0x51445c===_0x38efc0(0x684)+_0x38efc0(0x9ca)+'orkSy'+'nc')_0xa1425d=_0x2b7ed4&&_0x2b7ed4[_0x38efc0(0x141)]?String(_0x2b7ed4['esp']['playe'+_0x38efc0(0x815)+'t']):'-';else{if(_0x51445c===_0x5b43bc[_0x38efc0(0x45a)])_0xa1425d=_0x2b7ed4&&_0x2b7ed4[_0x38efc0(0x141)]?String(_0x2b7ed4[_0x38efc0(0x141)][_0x38efc0(0x6ce)+_0x38efc0(0xae5)]):'-';else{if(_0x51445c===_0x5b43bc[_0x38efc0(0xb1d)])_0xa1425d=_0x2b7ed4&&_0x2b7ed4['esp']&&_0x2b7ed4['esp'][_0x38efc0(0x261)+'a']?_0x5b43bc['qwwIu'](_0x5b43bc[_0x38efc0(0x38f)](_0x2b7ed4[_0x38efc0(0x141)][_0x38efc0(0x261)+'a']+'\x20(',_0x2b7ed4['esp'][_0x38efc0(0x261)+_0x38efc0(0x9a6)]),')'):'-';else{if(_0x51445c===_0x5b43bc['dmLby'])_0xa1425d=_0x2b7ed4&&_0x2b7ed4[_0x38efc0(0x723)]&&_0x2b7ed4[_0x38efc0(0x723)][_0x38efc0(0x217)]?_0x2b7ed4[_0x38efc0(0x723)]['feet'][_0x38efc0(0x6be)](function(_0x2392a2){var _0x4fe913=_0x38efc0;return _0x5b43bc['ZAEUv'](Math[_0x4fe913(0x4d6)](_0x2392a2*(-0x1284+-0xf77+0x225f)),0x13c2+0x2b*0xc1+0x9*-0x5c1);})['join']('\x20\x20'):'-';else{if(_0x51445c===_0x38efc0(0x338)+'8')_0xa1425d=_0x2b7ed4&&_0x2b7ed4['local']&&_0x2b7ed4[_0x38efc0(0x723)][_0x38efc0(0x849)]?_0x2b7ed4[_0x38efc0(0x723)][_0x38efc0(0x849)][_0x38efc0(0x6be)](function(_0x348cd9){var _0x3ffea8=_0x38efc0;return Math[_0x3ffea8(0x4d6)](_0x40b0b4[_0x3ffea8(0x765)](_0x348cd9,0x56*0x15+0x1*-0xc51+0x5a7))/(-0x3*-0xa36+-0x973+0x14cb*-0x1);})[_0x38efc0(0x896)]('\x20\x20'):'-';else{var _0x50a902=_0x51445c['split']('+');_0xa1425d=_0x124a1a(_0x2b7ed4,_0x5b43bc[_0x38efc0(0x5c8)](_0x50a902[-0x43d*0x3+0x21da+-0x1523]['index'+'Of']('Healt'+'h'),0xce5*0x3+0x1bd2+0x46f*-0xf)?_0x38efc0(0x9f2)+_0x38efc0(0xb3a)+'pt':_0x38efc0(0x8f4)+_0x38efc0(0x5d7)+_0x38efc0(0x591),parseInt(_0x50a902[-0xe63*-0x1+-0x657+-0x80b],-0x95f+-0x259a*-0x1+-0x1c2b*0x1));}}}}}}}}if(_0x5b43bc['BPNVZ'](_0xa1425d,_0x3d97a9[_0x28279][_0x38efc0(0x89d)+_0x38efc0(0x4ea)+'t']))_0x3d97a9[_0x28279][_0x38efc0(0x89d)+'onten'+'t']=_0xa1425d;}else{var _0x4d581=_0x3d89dc(_0x2a8b75['refs'][_0x38efc0(0x9f)+'h'],0x2532+0x659+-0x1*0x2b7b);_0x472ea4['healt'+'h']=_0x38d251(_0x4d581,_0x38efc0(0x9f2)+'hScri'+'pt',_0x38efc0(0x76a));}}}catch(_0x292bb2){}}function _0x1d8ac9(){var _0x515df1=_0x6937dd;try{var _0x81a973=_0x5b43bc['tWEIV'](_0x345b8b);return _0x81a973&&_0x81a973[_0x515df1(0x217)]?_0x81a973[_0x515df1(0x217)][-0x313*0x5+0xe*0x43+0xbb6]:null;}catch(_0x4f3306){return null;}}var _0x4ea15b=-0x495+-0x16a8+-0xf*-0x1d1+0.5,_0x4c5b7b=-0x1*0x1fb5+0x2d*-0x8c+0x3857+0.25,_0x2a7ec4=-0x1*-0x1d8f+0xf6a+0x8*-0x59f+0.8;function _0x15c5d8(_0x56234d,_0x5a7f59){var _0x3b2f0f=_0x6937dd,_0x3da806=[],_0x3711b3,_0x327143,_0x3a16ca=_0x5a7f59!==null&&_0x5b43bc['IXcDD'](_0x5a7f59,undefined)&&isFinite(_0x5a7f59);for(_0x3711b3=0xb09+-0x158a+-0x1*-0xa81;_0x3711b3<_0x56234d['lengt'+'h'];_0x3711b3++){var _0x51a7e5=_0x56234d[_0x3711b3]['v'];if(!_0x51a7e5)continue;if(_0x51a7e5[-0x64d*0x3+-0x1*0x12a7+0x258e]===0x1899+0x130b+-0x1*0x2ba4&&_0x51a7e5[0xe6f+-0x4*0x212+-0x626]===-0x17*0xc1+-0x3b*0x46+0x2179&&_0x5b43bc['UozEq'](_0x51a7e5[-0x105+0x1*-0x1d36+-0x1e3d*-0x1],0x2*-0x568+-0x83a+0x130a))continue;if(_0x3a16ca&&_0x5b43bc['agibU'](Math['abs'](_0x51a7e5[-0xcc9*-0x3+0x173c*0x1+0x3d96*-0x1]-_0x5a7f59),_0x4ea15b))continue;_0x3da806['push'](_0x56234d[_0x3711b3]);}if(!_0x3da806['lengt'+'h'])for(_0x3711b3=0x1d8a*0x1+-0x175f*-0x1+0x5*-0xa95;_0x3711b3<_0x56234d[_0x3b2f0f(0x76e)+'h'];_0x3711b3++){var _0x3a626c=_0x56234d[_0x3711b3]['v'];if(!_0x3a626c)continue;if(_0x5b43bc[_0x3b2f0f(0xfb)](_0x3a626c[0x1735+-0xda*0x1f+0x331],-0xeec+0x2*0x7f0+-0xf4)&&_0x3a626c[0x3e7+-0x48+-0x39e]===0x20f1+0x9e*-0x13+-0x1537&&_0x3a626c[-0x1883*-0x1+-0x2*-0x727+0x5*-0x7c3]===-0x134*0x11+-0x1*0x21e9+0x365d)continue;_0x3da806['push'](_0x56234d[_0x3711b3]);}if(!_0x3da806[_0x3b2f0f(0x76e)+'h'])return{'pos':null,'posAt':null,'inBand':0x0,'cluster':0x0,'reach':0x0};var _0x1ea459=[];for(_0x3711b3=0x40*0x56+0x1ac*-0x1+0x2*-0x9ea;_0x3711b3<_0x3da806['lengt'+'h'];_0x3711b3++){var _0x424a64=_0x3da806[_0x3711b3]['v'],_0x5cb242=-(-0x1f9b+-0x1edd+0x3e79);for(_0x327143=0xe36+-0x1585+0x74f;_0x5b43bc['XfsQz'](_0x327143,_0x1ea459[_0x3b2f0f(0x76e)+'h']);_0x327143++){if(_0x5b43bc[_0x3b2f0f(0x774)]!==_0x3b2f0f(0xe5))_0x556105[_0x3b2f0f(0x6d6)]=_0x1932e1(_0x289c49&&_0x3ae3f0[_0x3b2f0f(0x29b)+'ge']||_0x167345);else{var _0x3619e5=_0x1ea459[_0x327143]['c'][0x2041+-0x2311+-0x5*-0x90]['v'],_0x2711ff=_0x5b43bc[_0x3b2f0f(0x16d)](_0x424a64[-0x1*-0xfb2+0x15c1+0x1*-0x2573],_0x3619e5[-0x2098+-0x7bb*0x3+0x37c9]),_0x4e8c6b=_0x5b43bc['CvpMh'](_0x424a64[-0xa*0x1e2+0x235*0x7+0x362],_0x3619e5[-0x3*0x8c1+-0x1*0x3a4+-0xc*-0x27e]),_0x52b2d8=_0x424a64[0x1c24+0x4*0x105+-0x85*0x3e]-_0x3619e5[0x1*-0x1c83+-0x1*0x89c+0x5*0x76d];if(_0x5b43bc['ZFFua'](_0x5b43bc['VvrJF'](_0x2711ff*_0x2711ff,_0x5b43bc[_0x3b2f0f(0x4f8)](_0x4e8c6b,_0x4e8c6b)),_0x52b2d8*_0x52b2d8)<=_0x4c5b7b){if(_0x5b43bc['uSvLh']===_0x3b2f0f(0x7ed))_0x21babf[_0x3b2f0f(0x68f)+_0x3b2f0f(0x3d1)]=!!(_0x3d4120&&_0x23dc65[_0x3b2f0f(0xab3)+'e']),_0x3ef414['heapU'+'8']=!!(_0x1bc7b3&&_0x53b221['Modul'+'e']&&_0x4c164f[_0x3b2f0f(0xab3)+'e'][_0x3b2f0f(0xad0)+'8']),_0x5986ba[_0x3b2f0f(0x4ba)+'ytes']=_0x2cb5ae['heapU'+'8']?_0x20e709[_0x3b2f0f(0xab3)+'e'][_0x3b2f0f(0xad0)+'8'][_0x3b2f0f(0x76e)+'h']:0xbd1+0x43f*-0x6+0xd*0x10d;else{_0x5cb242=_0x327143;break;}}}}if(_0x5cb242===-(0x23e+0x201b+0x4e8*-0x7))_0x1ea459[_0x3b2f0f(0x7d6)]({'c':[_0x3da806[_0x3711b3]]});else _0x1ea459[_0x5cb242]['c'][_0x3b2f0f(0x7d6)](_0x3da806[_0x3711b3]);}var _0x1fc9fb=_0x1ea459[0x2277+0x1*-0x183e+0x1*-0xa39];for(_0x327143=0x2*-0xb55+0x1001+-0x6aa*-0x1;_0x327143<_0x1ea459[_0x3b2f0f(0x76e)+'h'];_0x327143++)if(_0x5b43bc[_0x3b2f0f(0xa61)](_0x1ea459[_0x327143]['c'][_0x3b2f0f(0x76e)+'h'],_0x1fc9fb['c'][_0x3b2f0f(0x76e)+'h']))_0x1fc9fb=_0x1ea459[_0x327143];var _0x2c5f85=_0x1fc9fb['c'][-0x16bc*-0x1+-0x9bd+-0xcff],_0x31e799=-(0x60*0x55+0x371*-0xb+0x5fc);for(_0x327143=-0x152f+0xba0+0x98f;_0x327143<_0x1fc9fb['c'][_0x3b2f0f(0x76e)+'h'];_0x327143++){var _0x4dd4cb=_0x1fc9fb['c'][_0x327143]['v'],_0xe8e1c7=_0x5b43bc['HdIjJ'](_0x4dd4cb[0xe9d+-0x1*-0x351+-0x11ee]*_0x4dd4cb[0xf84*0x1+-0x5*-0x298+0x2*-0xe3e],_0x5b43bc[_0x3b2f0f(0x113)](_0x4dd4cb[0x122*-0x1b+-0x13b1+0x3249],_0x4dd4cb[-0x2ab*-0x7+0x1af*-0x13+-0x6e*-0x1f]));(_0x5b43bc[_0x3b2f0f(0x4d4)](_0xe8e1c7,_0x31e799)||_0xe8e1c7===_0x31e799&&_0x5b43bc[_0x3b2f0f(0x3cf)](_0x4dd4cb[0x1*0x10a4+0x48*-0x35+0x1*-0x1bb],_0x2c5f85['v'][0x25d0+-0x11*-0x35+-0x2e*0xe6]))&&(_0x31e799=_0xe8e1c7,_0x2c5f85=_0x1fc9fb['c'][_0x327143]);}return{'pos':_0x2c5f85['v'],'posAt':_0x2c5f85['o'],'inBand':_0x3a16ca?_0x3da806['lengt'+'h']:0x874+-0x18bb+-0x3*-0x56d,'cluster':_0x1fc9fb['c']['lengt'+'h'],'groups':_0x1ea459['lengt'+'h'],'reach':Math['sqrt'](_0x31e799)};}function _0x345b8b(){var _0x3ee4fe=_0x6937dd,_0x45d6ab=_0x4a5663['FPSco'+_0x3ee4fe(0x5d7)+_0x3ee4fe(0x591)];if(!_0x45d6ab||!_0x45d6ab[_0x3ee4fe(0xb22)])return null;var _0x6bd2d2=_0x27acec['FPSco'+_0x3ee4fe(0x5d7)+_0x3ee4fe(0x591)]||[],_0x2992c7=[];for(var _0x2a68b6=-0x1*-0x1f06+-0xd*0xde+-0x13c0;_0x2a68b6<_0x6bd2d2['lengt'+'h'];_0x2a68b6++){if(_0x6bd2d2[_0x2a68b6][-0xa8+-0x1*0x10f3+-0xa1*-0x1c]!=='v3')continue;var _0x4e5ae4=_0x5b43bc['ATkFd'](_0x5d33b3,_0x45d6ab['ptr'],_0x6bd2d2[_0x2a68b6][0x10*-0x256+-0xa*0x166+0x335c],0x2*0xd0+0x1a08+-0x1ba5);if(_0x4e5ae4)_0x2992c7['push']({'o':_0x5b43bc['FlwBh']('0x',_0x6bd2d2[_0x2a68b6][0x1a9d+-0x892+-0x120b][_0x3ee4fe(0x9b0)+'ing'](-0x1*-0xf31+0x5*-0xb0+-0xbb1)),'v':_0x4e5ae4});}var _0x16767b=_0x5b43bc[_0x3ee4fe(0xb1c)](_0x15c5d8,_0x2992c7,null);if(!_0x16767b[_0x3ee4fe(0x2a7)])return null;var _0xf276c4=_0x16767b['pos'];return{'ptr':_0x45d6ab[_0x3ee4fe(0xb22)],'feet':_0xf276c4,'posAt':_0x16767b['posAt'],'inBand':_0x16767b[_0x3ee4fe(0x7e0)+'d'],'cluster':_0x16767b[_0x3ee4fe(0x944)+'er'],'copies':_0x2992c7[_0x3ee4fe(0x437)+'r'](function(_0x3426fe){return _0x3426fe['v'][0x13bd+0xddc+-0xb7*0x2f]===_0xf276c4[0x52*0x49+0x2b2*-0xc+0x1f*0x4a]&&_0x3426fe['v'][0x476*-0x1+-0x7c3+0xc3a]===_0xf276c4[0x7d9+-0x1fde+-0x52*-0x4b]&&_0x3426fe['v'][-0x1d48+0x3f*-0x35+0x2a55]===_0xf276c4[0x1*0x197b+-0x15a8+-0x3d1];})['map'](function(_0x5803fd){return _0x5803fd['o'];}),'eye':[_0xf276c4[-0x26fb+0xd71+0x198a],_0x5b43bc[_0x3ee4fe(0x122)](_0xf276c4[-0x585*-0x4+0x1d0b+0x2*-0x198f],_0x2a7ec4),_0xf276c4[0x264b+-0x5ec*-0x1+-0x1*0x2c35]],'reach':_0x16767b[_0x3ee4fe(0x452)],'pitch':_0x363e06(_0x45d6ab[_0x3ee4fe(0xb22)]+(0x12be*-0x2+-0x4*0x7a9+-0x22c6*-0x2),_0x3ee4fe(0xb11)),'yaw':_0x363e06(_0x5b43bc[_0x3ee4fe(0x3c9)](_0x45d6ab[_0x3ee4fe(0xb22)],-0x155e+-0x6bd+0x1d8b),'f32')};}function _0x89a3fe(){var _0x58d5c3=_0x6937dd,_0x52dfac={'HJTHN':function(_0x36b2bf){return _0x36b2bf();},'vISAo':function(_0x57cc39){return _0x5b43bc['BLwrW'](_0x57cc39);},'HRksy':_0x58d5c3(0x51d),'lYcjw':'sakur'+_0x58d5c3(0x3b0)+_0x58d5c3(0x14c)+'b','zEGWG':function(_0x3b494e,_0x46bd24){return _0x3b494e+_0x46bd24;},'xHSzw':function(_0xb17fe6,_0x2e255c){return _0xb17fe6+_0x2e255c;},'GWkVb':function(_0x131dcb,_0x7d5502){return _0x5b43bc['VEAyH'](_0x131dcb,_0x7d5502);},'MlxTq':_0x5b43bc[_0x58d5c3(0xcf)],'VELvI':_0x5b43bc['phqPz']};if('jvAdo'===_0x5b43bc[_0x58d5c3(0xad4)]){var _0x38189c=_0x345b8b(),_0x5d1023=[],_0x28747d=_0x44159b[_0x58d5c3(0x684)+_0x58d5c3(0x9ca)+'orkSy'+'nc']||{},_0x59178a=Object[_0x58d5c3(0x6eb)](_0x28747d);for(var _0x1b6fd5=0x150e+0x583*0x4+-0x2b1a;_0x1b6fd5<_0x59178a['lengt'+'h']&&_0x5b43bc[_0x58d5c3(0x8a2)](_0x1b6fd5,-0xd*-0x2d4+0x8d1+-0x2d75);_0x1b6fd5++){if(_0x5b43bc[_0x58d5c3(0x415)]===_0x5b43bc[_0x58d5c3(0x7c9)])try{return _0x52dfac[_0x58d5c3(0x884)](_0x4a5206);}catch(_0x1bded0){return{'version':_0x1cff97,'when':new _0xa71cad()[_0x58d5c3(0x342)+_0x58d5c3(0x913)+'g'](),'elapsedMs':_0x1a5d4f[_0x58d5c3(0xa8f)]()-_0x138022,'host':_0x4e3aee,'uwmk':!!(_0x5bbbbe[_0x58d5c3(0x7c3)+_0x58d5c3(0x365)+'dkit']&&_0x25431b['Unity'+'WebMo'+'dkit']['Runti'+'me']),'il2CppContext':![],'arm':_0x42cff7,'hooksTotal':_0xfe638c['lengt'+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x5d95f3(_0x1bded0&&_0x1bded0['messa'+'ge']||_0x1bded0)};}else{var _0x4f532f=_0x28747d[_0x59178a[_0x1b6fd5]],_0x4e7153=[],_0x576f28=_0x27acec[_0x58d5c3(0x684)+_0x58d5c3(0x9ca)+'orkSy'+'nc']||[];for(var _0x354cf6=0x5b*0x2+0x1f*0x61+0x1*-0xc75;_0x354cf6<_0x576f28[_0x58d5c3(0x76e)+'h'];_0x354cf6++){if(_0x576f28[_0x354cf6][-0x7c1+0x25a3+0x1de1*-0x1]!=='v3')continue;var _0x4ffd2c=_0x5b43bc['qmOad'](_0x5d33b3,_0x4f532f[_0x58d5c3(0xb22)],_0x576f28[_0x354cf6][0x9fd*-0x1+0x91b+0xe2],0x341*0x3+-0x1f7*0xd+0xfcb);if(_0x4ffd2c)_0x4e7153[_0x58d5c3(0x7d6)]({'o':'0x'+_0x576f28[_0x354cf6][-0x112e+-0x1d*-0x7c+0x322][_0x58d5c3(0x9b0)+_0x58d5c3(0xa36)](-0x322+-0x463*-0x4+-0x2*0x72d),'v':_0x4ffd2c});}var _0xf56b07=_0x15c5d8(_0x4e7153,_0x38189c?_0x38189c[_0x58d5c3(0x217)][0x9ef*0x1+-0x2e*-0x4c+-0x1796*0x1]:null),_0x3fe68e=_0xf56b07['pos'];if(!_0x3fe68e)continue;var _0x2bc472={'ptr':_0x4f532f[_0x58d5c3(0xb22)],'x':_0x3fe68e[0x2bd*-0xd+0x176b+0xc2e],'y':_0x3fe68e[0x525*0x3+0xdbe+0x74b*-0x4],'z':_0x3fe68e[0x17fa+0x2257+-0x3a4f],'posAt':_0xf56b07[_0x58d5c3(0x549)],'inBand':_0xf56b07[_0x58d5c3(0x7e0)+'d'],'cluster':_0xf56b07['clust'+'er'],'team':_0x5b43bc['OSLck'](_0x363e06,_0x4f532f[_0x58d5c3(0xb22)]+(0x2063+0x131+-0x213c),_0x5b43bc[_0x58d5c3(0x331)]),'localFlag':_0x363e06(_0x4f532f[_0x58d5c3(0xb22)]+(-0xb01+0x26*0x49+0xa7),_0x5b43bc[_0x58d5c3(0x331)])};if(_0x38189c){if(_0x58d5c3(0x901)!==_0x5b43bc[_0x58d5c3(0x5ad)]){var _0x4f5a7b=_0x5b43bc[_0x58d5c3(0x541)](_0x3fe68e[0x1*0x24ac+-0x907+0x3f3*-0x7],_0x38189c[_0x58d5c3(0x217)][0x61*-0x3b+-0x1aba+0x3115]),_0x538fcb=_0x3fe68e[-0x1f2f+0xc0+0x1e71*0x1]-_0x38189c[_0x58d5c3(0x217)][0x46e+-0x3*-0x943+0x2035*-0x1];_0x2bc472['d']=Math['sqrt'](_0x5b43bc[_0x58d5c3(0x33a)](_0x5b43bc[_0x58d5c3(0xabd)](_0x4f5a7b,_0x4f5a7b),_0x538fcb*_0x538fcb)),_0x2bc472[_0x58d5c3(0x7b0)+'ng']=Math[_0x58d5c3(0x7dc)](_0x4f5a7b,_0x538fcb)*(-0x7a9+-0x24cb*0x1+0x2d28)/Math['PI'];}else{var _0x29a5db=_0x4f07bc['creat'+_0x58d5c3(0x999)+'ent'](_0x52dfac['HRksy']);_0x29a5db['id']=_0x52dfac[_0x58d5c3(0x5ce)],_0x29a5db[_0x58d5c3(0x447)][_0x58d5c3(0x713)+'xt']=_0x52dfac[_0x58d5c3(0x152)](_0x52dfac['xHSzw'](_0x52dfac['GWkVb']('posit'+'ion:f'+_0x58d5c3(0x979)+_0x58d5c3(0x393)+_0x58d5c3(0x7cf)+'top:1'+_0x58d5c3(0x5a3)+_0x58d5c3(0xb35)+'x:214'+'74829'+_0x58d5c3(0x17a)+'rsor:'+_0x58d5c3(0x5e8)+'er;us'+'er-se'+_0x58d5c3(0x1ad)+'none;',_0x58d5c3(0x2ac)+'round'+_0x58d5c3(0x2e6)+_0x58d5c3(0x7bf)+'2,29,'+'.9);b'+'order'+':1px\x20'+_0x58d5c3(0x873)+_0x58d5c3(0x79d)+_0x58d5c3(0xa6d)+'143,1'+'77,.5'+');col'+_0x58d5c3(0x6e2)),_0x3257bc)+';','borde'+'r-rad'+_0x58d5c3(0x928)+_0x58d5c3(0x1c4)+_0x58d5c3(0x234)+_0x58d5c3(0x6c9)+'x\x2012p'+_0x58d5c3(0x97f)+'t:11p'+_0x58d5c3(0x762)+'\x20ui-m'+_0x58d5c3(0x9d6)+_0x58d5c3(0x5be)+_0x58d5c3(0x2f6)+'as,mo'+_0x58d5c3(0x142)+_0x58d5c3(0xb54)),_0x29a5db['textC'+_0x58d5c3(0x4ea)+'t']=_0x52dfac[_0x58d5c3(0x923)],_0x29a5db[_0x58d5c3(0x624)+'ck']=function(){_0x42c8bb(![]),_0x52dfac['vISAo'](_0x5a9ff4);},_0x4ff2ad['body'][_0x58d5c3(0x441)+_0x58d5c3(0xb36)+'d'](_0x29a5db);}}_0x5d1023['push'](_0x2bc472);}}return{'me':_0x38189c,'list':_0x5d1023};}else return _0x2cec7a[_0x58d5c3(0x6b3)+'d']++,_0x3a0685['lastE'+'rror']=_0x753eb7['lastE'+_0x58d5c3(0x1cc)]||_0x52dfac[_0x58d5c3(0x3c7)],null;}var _0x460607=null;function _0x1dc3f6(){var _0x4aefcb=_0x6937dd;if(_0x460607)return _0x460607;try{if(!document[_0x4aefcb(0x2f5)]||!document[_0x4aefcb(0x2f5)]['appen'+'dChil'+'d'])return null;var _0x1a9655=document[_0x4aefcb(0x51a)+_0x4aefcb(0x999)+'ent']('div');_0x1a9655['id']=_0x4aefcb(0xac)+_0x4aefcb(0x1d7),_0x1a9655['style']['cssTe'+'xt']=_0x4aefcb(0xd0)+_0x4aefcb(0x865)+_0x4aefcb(0x979)+'right'+':12px'+_0x4aefcb(0x94e)+_0x4aefcb(0x1f3)+_0x4aefcb(0x3b9)+'ex:21'+_0x4aefcb(0x582)+'646;p'+'ointe'+_0x4aefcb(0x6da)+'nts:n'+_0x4aefcb(0xa9a)+(_0x4aefcb(0x2ac)+_0x4aefcb(0x4d6)+':rgba'+_0x4aefcb(0x7bf)+'2,29,'+'.72);'+_0x4aefcb(0x169)+'r:1px'+'\x20soli'+_0x4aefcb(0x1a1)+_0x4aefcb(0x892)+_0x4aefcb(0xaf1)+_0x4aefcb(0xdc)+'4);bo'+_0x4aefcb(0xa66)+_0x4aefcb(0x9a3)+_0x4aefcb(0x5e4)+'x;')+_0x5b43bc[_0x4aefcb(0x83c)]+('user-'+'selec'+_0x4aefcb(0x781)+_0x4aefcb(0x31f)+_0x4aefcb(0xae8)+_0x4aefcb(0x6d2)+_0x4aefcb(0x88f)+'t:non'+'e;'),_0x1a9655[_0x4aefcb(0x63e)+_0x4aefcb(0x497)]=_0x5b43bc[_0x4aefcb(0xaa2)]+(_0x4aefcb(0xb3)+_0x4aefcb(0x5e7)+_0x4aefcb(0x705)+'-esp-'+_0x4aefcb(0xa69)+_0x4aefcb(0x917)+_0x4aefcb(0xaaa)+'-alig'+_0x4aefcb(0x633)+'ter\x22>'+'</div'+'>');var _0x472372={'cv':{'getContext':function(){return null;}},'el':_0x1a9655};document['body'][_0x4aefcb(0x441)+_0x4aefcb(0xb36)+'d'](_0x1a9655),_0x460607={'el':_0x1a9655,'cv':_0x1a9655['query'+'Selec'+_0x4aefcb(0x7ef)]('#saku'+_0x4aefcb(0x72d)+'p-cv'),'lg':_0x1a9655['query'+'Selec'+'tor']('#saku'+_0x4aefcb(0x72d)+_0x4aefcb(0x4ae))};if(!_0x460607['cv']||!_0x460607['cv']['getCo'+_0x4aefcb(0xa03)])_0x460607=_0x472372;return _0x460607;}catch(_0x5388a1){return null;}}var _0x558560=null;function _0x61468f(){var _0x448e50=_0x6937dd;if(_0x558560)return _0x558560;try{if(!document[_0x448e50(0x2f5)]||!document['body']['appen'+'dChil'+'d'])return null;var _0x32c466=document[_0x448e50(0x51a)+_0x448e50(0x999)+_0x448e50(0x516)](_0x5b43bc[_0x448e50(0xa2f)]);return _0x32c466['id']=_0x448e50(0xac)+_0x448e50(0x35c)+'es',_0x32c466[_0x448e50(0x447)]['cssTe'+'xt']=_0x448e50(0xd0)+_0x448e50(0x865)+_0x448e50(0x979)+_0x448e50(0x393)+_0x448e50(0xd1)+':0;z-'+_0x448e50(0x8ac)+':2147'+_0x448e50(0x27a)+'5;poi'+'nter-'+_0x448e50(0x33d)+_0x448e50(0x9cb)+'e;',document[_0x448e50(0x2f5)]['appen'+'dChil'+'d'](_0x32c466),_0x558560={'cv':_0x32c466},_0x558560;}catch(_0x17ef4b){if(_0x5b43bc[_0x448e50(0xe7)]===_0x5b43bc['KCYeK'])return null;else _0x383968=[];}}function _0x186f72(_0x173173){var _0xbebde8=_0x6937dd;try{var _0xe87c0c=Math[_0xbebde8(0xa12)](-0x469+-0x80f+0x67*0x1f,window[_0xbebde8(0x63e)+_0xbebde8(0x2ba)]||document[_0xbebde8(0xa94)+_0xbebde8(0x1c7)+_0xbebde8(0x420)][_0xbebde8(0x6ef)+_0xbebde8(0x220)+'h']||0x198d+-0x1*-0x138b+0xc*-0x3c2),_0x5935ca=Math[_0xbebde8(0xa12)](0x1aeb+-0x10*-0xa9+-0x6*0x63f,window[_0xbebde8(0x63e)+'Heigh'+'t']||document['docum'+'entEl'+_0xbebde8(0x420)]['clien'+_0xbebde8(0x760)+'ht']||-0xe*0x3c+0x5*0x565+0x1*-0x17b1);return(_0x173173['cv'][_0xbebde8(0x10c)]!==_0xe87c0c||_0x5b43bc[_0xbebde8(0x21f)](_0x173173['cv'][_0xbebde8(0x7f6)+'t'],_0x5935ca))&&(_0x173173['cv'][_0xbebde8(0x10c)]=_0xe87c0c,_0x173173['cv'][_0xbebde8(0x7f6)+'t']=_0x5935ca),{'w':_0xe87c0c,'h':_0x5935ca};}catch(_0x2df50d){if(_0xbebde8(0x316)!==_0x5b43bc[_0xbebde8(0x41c)])_0x5b43bc[_0xbebde8(0x9a8)](_0x4e6cdb);else return{'w':0x0,'h':0x0};}}function _0x50e7b7(_0xcfa984){var _0x24fcb0=_0x6937dd,_0x38c250=_0x558560;if(!_0x38c250)return;var _0x47f0f0=_0x38c250['cv'][_0x24fcb0(0x782)+'ntext']&&_0x38c250['cv'][_0x24fcb0(0x782)+'ntext']('2d');if(!_0x47f0f0)return;var _0x5d1548=_0x186f72(_0x38c250);_0x47f0f0[_0x24fcb0(0x691)+_0x24fcb0(0x72a)](-0x6b+-0x18a8+0x1913,0x1c1*0x3+-0x32c+-0x217,_0x5d1548['w'],_0x5d1548['h']);if(!_0x41b3ea[_0x24fcb0(0xa1e)]||!_0xcfa984||!_0xcfa984['me'])return;var _0x1570d3=_0xcfa984['me'],_0xf38d03=null,_0x3d04a9=_0x44159b[_0x24fcb0(0x684)+'nNetw'+_0x24fcb0(0x6e5)+'nc']||{},_0x2dd1d1=Object[_0x24fcb0(0x6eb)](_0x3d04a9);for(var _0x422150=0x1*-0xcbb+-0x1df7+0x445*0xa;_0x422150<_0x2dd1d1[_0x24fcb0(0x76e)+'h'];_0x422150++){var _0x43d578=_0x5d33b3(_0x3d04a9[_0x2dd1d1[_0x422150]]['ptr'],0x1*0x18c7+0x14cc+-0x2d5f,-0x204d+0x3b8*-0x8+0x3e10);if(_0x43d578&&_0x5b43bc[_0x24fcb0(0x577)](_0x43d578[0x4*0x16+-0x1b0c+-0x4*-0x6ad],-0x55b+-0xc68+0x11c3)&&_0x43d578[-0x1*-0x141a+0x1795+-0x15d7*0x2]===0xb5f+-0x18b6+0xd57&&_0x43d578[-0x59f*-0x4+-0x1d8c+0x712]===0x11*0xb9+0xbd4+-0x181d*0x1){_0xf38d03=_0x5b43bc[_0x24fcb0(0x175)](_0x363e06,_0x3d04a9[_0x2dd1d1[_0x422150]][_0x24fcb0(0xb22)]+(-0x636+-0xf62*-0x1+-0x8d4),_0x5b43bc['bguUz']);break;}}for(var _0x1b35dc=-0x5d3*0x2+-0x1339+0x1edf;_0x5b43bc['QMtca'](_0x1b35dc,_0xcfa984[_0x24fcb0(0x6f7)]['lengt'+'h']);_0x1b35dc++){var _0x4bd560=_0xcfa984['list'][_0x1b35dc],_0x19cf9f=_0xf38d03!==null&&_0x4bd560[_0x24fcb0(0xba)]===_0xf38d03,_0x55ddc8=_0x16e2bc(_0x1570d3[_0x24fcb0(0x849)],[_0x4bd560['x'],_0x4bd560['y']-(0xb5*-0x2b+0xa32*-0x3+0x25*0x1a6),_0x4bd560['z']],_0x5d1548['w'],_0x5d1548['h']),_0x196156=_0x16e2bc(_0x1570d3[_0x24fcb0(0x849)],[_0x4bd560['x'],_0x4bd560['y']+(-0x1c72+0x1540+0x732+0.8),_0x4bd560['z']],_0x5d1548['w'],_0x5d1548['h']);if(!_0x55ddc8||!_0x196156)continue;var _0x37e003=Math[_0x24fcb0(0x240)](_0x55ddc8['x'],_0x196156['x']),_0x17f562=Math[_0x24fcb0(0xa12)](_0x55ddc8['x'],_0x196156['x']),_0x553c8f=Math['min'](_0x55ddc8['y'],_0x196156['y']),_0x765f3c=Math[_0x24fcb0(0xa12)](_0x55ddc8['y'],_0x196156['y']),_0x16f4b5=Math[_0x24fcb0(0xa12)](-0xb44*-0x2+-0x138f+0x2f6*-0x1,Math[_0x24fcb0(0x240)](0x9fd+-0x441+0x80*-0xb,_0x17f562-_0x37e003)),_0x395f64=Math[_0x24fcb0(0xa12)](-0x990+-0x21*-0x91+0x25*-0x3f,Math['min'](-0x207b+-0xf2a*-0x2+0x1*0x2b3,_0x765f3c-_0x553c8f)),_0x4d51e3=_0x5b43bc[_0x24fcb0(0x61d)](_0x37e003,_0x17f562)/(-0x986+0x19f*0x2+0x64a),_0x58ad96=(_0x553c8f+_0x765f3c)/(-0xd59+-0x2*0x116f+-0x3*-0x1013);_0x47f0f0['strok'+'eStyl'+'e']=_0x19cf9f?'rgba('+_0x24fcb0(0x408)+'3,106'+_0x24fcb0(0x5b8):_0x5b43bc[_0x24fcb0(0xb1a)],_0x47f0f0['lineW'+'idth']=_0x19cf9f?0xf4*0x3+0x481+-0x75c:0x78b+-0xdd*0x1+-0x6ac,_0x47f0f0[_0x24fcb0(0x9a5)+_0x24fcb0(0x3ce)](_0x4d51e3-_0x16f4b5/(-0x2*0x313+-0x3b*-0x97+-0x1ca5),_0x58ad96-_0x395f64/(0x130d+-0x3b*-0x5d+-0x287a),_0x16f4b5,_0x395f64),!_0x19cf9f&&(_0x47f0f0[_0x24fcb0(0x12c)+_0x24fcb0(0x174)]=_0x24fcb0(0x4c4)+'255,1'+_0x24fcb0(0x330)+'6,.95'+')',_0x47f0f0[_0x24fcb0(0x5c0)]='10px\x20'+_0x24fcb0(0x8e6)+_0x24fcb0(0x142)+_0x24fcb0(0x333)+_0x24fcb0(0x583)+_0x24fcb0(0x4a0)+_0x24fcb0(0x170)+'e',_0x47f0f0['fillT'+_0x24fcb0(0x56a)](_0x5b43bc['LYkKN'](Math[_0x24fcb0(0x4d6)](_0x4bd560['d']||0x2192+0xfdd+-0x316f),'m'),_0x4d51e3-_0x16f4b5/(-0x209c+0x158f+0x13*0x95),_0x58ad96-_0x395f64/(0x2*0x946+0x7f0+0x1*-0x1a7a)-(0x22*0xdc+0x1827+0x1aae*-0x2)));}}function _0x106b68(){var _0x339d81=_0x6937dd,_0x360390={'pVTKZ':_0x5b43bc[_0x339d81(0x48d)],'ogEhp':'obfI','DvvHs':function(_0x2bfd4a,_0x31e6e2){return _0x5b43bc['QfKjD'](_0x2bfd4a,_0x31e6e2);},'qjplQ':function(_0x3bcf09,_0x25ef34,_0x44a412){return _0x5b43bc['FqUXe'](_0x3bcf09,_0x25ef34,_0x44a412);},'avjVF':'f32','GAXNe':_0x5b43bc[_0x339d81(0x637)],'ZgTrD':function(_0x29af99,_0x5ca8b5){var _0x3441ac=_0x339d81;return _0x5b43bc[_0x3441ac(0xa7e)](_0x29af99,_0x5ca8b5);},'wFtSO':function(_0xcf887,_0x1ff037){return _0xcf887<_0x1ff037;},'LKrIE':function(_0x5bd6ed,_0x3e427f){var _0x527297=_0x339d81;return _0x5b43bc[_0x527297(0x598)](_0x5bd6ed,_0x3e427f);},'Tdtyo':function(_0x48d8c6,_0x4bd14c){return _0x48d8c6+_0x4bd14c;}};if(_0x5b43bc[_0x339d81(0x65b)](_0x5b43bc['kjdZU'],_0x5b43bc[_0x339d81(0x870)])){var _0x19ae05=_0x1dc3f6();if(!_0x19ae05||!_0x19ae05['cv'])return;try{var _0x2cbf74=_0x19ae05['cv'][_0x339d81(0x782)+'ntext']&&_0x19ae05['cv'][_0x339d81(0x782)+_0x339d81(0xa03)]('2d');if(!_0x2cbf74)return;var _0x1746c0=_0x19ae05['cv'][_0x339d81(0x10c)],_0xbd466b=_0x5b43bc[_0x339d81(0x9a0)](_0x1746c0,-0x1a40+0x2*0xb5d+0xe2*0x4),_0x1d92b8=_0x89a3fe(),_0x1d4fab=_0x1d92b8['me'];_0x2cbf74['clear'+_0x339d81(0x72a)](-0x23bc+0x1220+0x119c,-0xf0c+-0x28*-0x9f+-0x39*0x2c,_0x1746c0,_0x1746c0),_0x2cbf74['strok'+'eStyl'+'e']=_0x5b43bc[_0x339d81(0x5ff)],_0x2cbf74['lineW'+_0x339d81(0x995)]=0x15b9*-0x1+-0x171+0x7b9*0x3;for(var _0x4975f6=0x1d*-0x12a+0x56e*0x1+0x1c55;_0x5b43bc['XcJFZ'](_0x4975f6,-0x6*0x447+-0x1258+0x1*0x2c05);_0x4975f6++){_0x2cbf74[_0x339d81(0xaf7)+'Path'](),_0x2cbf74[_0x339d81(0xaba)](_0xbd466b,_0xbd466b,_0x5b43bc[_0x339d81(0x6dd)]((_0xbd466b-(0x1e16+-0x1*0x22a9+-0x19*-0x2f))*_0x4975f6,-0x20dd+0x4*-0xeb+0x4*0x923),-0x4d0+-0xb31*0x1+0x1001*0x1,_0x5b43bc[_0x339d81(0x1fc)](Math['PI'],-0x9b5+-0xcb2+0x1669)),_0x2cbf74['strok'+'e']();}_0x2cbf74[_0x339d81(0xaf7)+'Path'](),_0x2cbf74[_0x339d81(0x9c2)+'o'](-0x2410+0x1*0x3c7+-0x1*-0x204d,_0xbd466b),_0x2cbf74[_0x339d81(0x90f)+'o'](_0x5b43bc[_0x339d81(0x699)](_0x1746c0,0x1ef8+-0x24d9+0x5e5),_0xbd466b),_0x2cbf74[_0x339d81(0x9c2)+'o'](_0xbd466b,-0xe5d+-0x19b*0xf+0x2676),_0x2cbf74[_0x339d81(0x90f)+'o'](_0xbd466b,_0x1746c0-(0xe*-0x94+-0xd*-0x1d+0x6a3*0x1)),_0x2cbf74[_0x339d81(0x9a5)+'e']();if(!_0x1d4fab){if('nXVWO'===_0x5b43bc['ofSJS']){if(_0x19ae05['lg'])_0x19ae05['lg'][_0x339d81(0x89d)+_0x339d81(0x4ea)+'t']='';return;}else{var _0xac0efc=('1|0|4'+'|3|2')['split']('|'),_0x3b52d8=0x1b4c+0x10f*-0x5+-0x1601;while(!![]){switch(_0xac0efc[_0x3b52d8++]){case'0':_0x1b4438[_0x339d81(0xbd)]=_0x3bc039[_0x3e1dee[_0x21484d]]['hits'];continue;case'1':var _0x1b4438=_0x4ef17f(_0x339d81(0x8f9)+'otrol'+_0x339d81(0x591),_0x4729c6[_0x45e5a7[_0x41b8ff]][_0x339d81(0xb22)]);continue;case'2':_0xa14173[_0x339d81(0x6ba)][_0x339d81(0x7d6)](_0x1b4438);continue;case'3':if(_0x1b4438[_0x339d81(0x3f0)]['healt'+'h'])_0x1b4438[_0x339d81(0x9f)+'h']=_0x27a682(_0x3f9bb9(_0x1b4438[_0x339d81(0x3f0)]['healt'+'h'],-0x1*-0x3a+-0x9*-0x125+-0xa77),_0x360390[_0x339d81(0x4e0)],_0x360390[_0x339d81(0xa73)]);continue;case'4':_0x1b4438[_0x339d81(0x6f6)+_0x339d81(0x404)+'s']=_0x360390[_0x339d81(0x81b)](_0x42c5f5[_0x12aca8[_0x2b97d2]]['first'+'Seen'],_0x547495);continue;}break;}}}var _0x54d1f2=_0x5b43bc['zEZRD'](_0xbd466b,0x31*-0x3b+0x5*0x623+-0x135e)/_0x41b3ea[_0x339d81(0x97d)],_0x4042ae=null,_0x1789d2=_0x44159b[_0x339d81(0x684)+'nNetw'+_0x339d81(0x6e5)+'nc']||{},_0x2ee311=Object['keys'](_0x1789d2);for(var _0x24271f=0x26c0+-0x2*-0x449+-0x2f52;_0x5b43bc[_0x339d81(0x3f3)](_0x24271f,_0x2ee311[_0x339d81(0x76e)+'h']);_0x24271f++){var _0x419b69=_0x5b43bc['FCcVj'](_0x5d33b3,_0x1789d2[_0x2ee311[_0x24271f]][_0x339d81(0xb22)],0x6e4+0xebc+-0x1*0x156c,-0x1766+-0x67*-0x59+-0xc66);if(_0x419b69&&_0x419b69[-0x1*0x241d+0x2146+0x2d7*0x1]===-0x13dd+-0x17af+0x2b8c&&_0x419b69[-0x1*0x1f91+-0x57*-0x4d+0x567]===0x1f03+-0x11*-0x125+-0x8*0x64f&&_0x419b69[-0x117f+0x212d+-0x3eb*0x4]===-0xd*0x268+-0x176b+0x36b3){if('ythKK'!==_0x339d81(0x4f0)){_0x4042ae=_0x363e06(_0x5b43bc['peAdo'](_0x1789d2[_0x2ee311[_0x24271f]][_0x339d81(0xb22)],0xd3c+-0xf8e+0x2aa),_0x5b43bc['bguUz']);break;}else{var _0x489219=_0x5b43bc[_0x339d81(0x2e3)]['split']('|'),_0x4ec3df=-0x29*-0x76+0x25c0+0x12e2*-0x3;while(!![]){switch(_0x489219[_0x4ec3df++]){case'0':_0x30ef9e[_0x339d81(0x5b5)]=_0xcff3c[_0x339d81(0x84c)];continue;case'1':_0x30ef9e[_0x339d81(0x55e)]=_0x5b43bc['twRWk'];continue;case'2':_0x29d59f[_0x339d81(0x441)+'dChil'+'d'](_0x30ef9e);continue;case'3':var _0xcff3c=_0x25ea5d[_0x5007c0];continue;case'4':(function(_0x247662){var _0x4eabf3=_0x339d81;_0x30ef9e[_0x4eabf3(0x624)+'ck']=function(){_0x4d58d0(_0x247662);};}(_0xcff3c['id']));continue;case'5':_0x970e94[_0xcff3c['id']]=_0x30ef9e;continue;case'6':var _0x30ef9e=_0x2cd5b4(_0x5b43bc[_0x339d81(0x6d9)],_0x5b43bc[_0x339d81(0x17e)],'<smal'+'l>'+_0xcff3c[_0x339d81(0x84c)]+('</sma'+_0x339d81(0x530)));continue;}break;}}}}var _0x531c6c=-0xf99+0x2350+-0x2d1*0x7;for(var _0x11527f=0x74b*-0x1+0x19d6+-0x128b;_0x11527f<_0x1d92b8['list'][_0x339d81(0x76e)+'h'];_0x11527f++){var _0x245071=_0x1d92b8['list'][_0x11527f],_0x142e3a=_0x5b43bc[_0x339d81(0x2bb)](_0x245071['x'],_0x1d4fab['feet'][0x1b38+-0x21*-0xf1+-0x3a49])*_0x54d1f2,_0x2fb5c6=_0x5b43bc[_0x339d81(0x113)](_0x5b43bc['wbPKE'](_0x245071['z'],_0x1d4fab[_0x339d81(0x217)][-0x5de*-0x3+0x1231+0x23c9*-0x1]),_0x54d1f2),_0x388273=Math['sqrt'](_0x142e3a*_0x142e3a+_0x2fb5c6*_0x2fb5c6),_0x5d18b4=_0xbd466b,_0x4dad08=_0xbd466b;if(_0x5b43bc[_0x339d81(0x48c)](_0x388273,_0xbd466b-(-0x1e3+0xab8*0x2+-0x1*0x1387))){if(_0x5b43bc[_0x339d81(0x7f7)]!==_0x5b43bc[_0x339d81(0x924)])_0x5d18b4=_0x5b43bc['bMCeo'](_0xbd466b,_0x5b43bc['nVONO'](_0x5b43bc['JUhJN'](_0x142e3a,_0x388273),_0xbd466b-(-0xa*0xc1+-0x1082+0x1812))),_0x4dad08=_0xbd466b+_0x2fb5c6/_0x388273*(_0xbd466b-(0x17a0+-0x1363*0x1+-0x437));else{var _0x401e4d=_0xc0f2e8();if(!_0x401e4d||!_0x401e4d['mouse'+_0x339d81(0x936)])return _0x70775e['ident'+_0x339d81(0x458)]=![],_0xbc8f27[_0x339d81(0x29e)]='no\x20Mo'+_0x339d81(0x30b)+'ok\x20ye'+'t',null;var _0x55a850=_0x121801(_0x401e4d['mouse'+'Look'],0x1*0x244b+0x5*-0x194+-0x1*0x1c57),_0x40df93=_0x360390['qjplQ'](_0xeb706,_0x55a850+(0x1c62+0xae8+-0xad*0x3a),_0x360390['avjVF']),_0x5e2a4a=_0x360390[_0x339d81(0x379)](_0x487ac7,_0x55a850+(0x58*-0x3a+0x1*0x22ea+0xad*-0x16),'f32');if(typeof _0x40df93!==_0x360390[_0x339d81(0x257)]||typeof _0x5e2a4a!==_0x339d81(0x82d)+'r'||!_0x360390[_0x339d81(0x45e)](_0x21d560,_0x40df93)||!_0x17a115(_0x5e2a4a))return _0x3f7f03['ident'+'ified']=![],_0x961a53[_0x339d81(0x29e)]='Mouse'+'Look\x20'+_0x339d81(0x7e4)+_0x339d81(0x2ee)+_0x339d81(0x163)+'le',null;_0x3921c5[_0x339d81(0xa70)]=_0x40df93,_0x2917e4['yaw']=_0x5e2a4a;var _0x57572b=[];if(_0x360390['wFtSO'](_0x40df93,-(0x1*0x116d+-0x557+-0xbbc))||_0x40df93>0x237a+-0x5b4*-0x3+-0x1*0x343c)_0x57572b[_0x339d81(0x7d6)](_0x360390[_0x339d81(0x15f)](_0x339d81(0xaef),_0x41d5b9['round'](_0x40df93))+('\x20is\x20n'+_0x339d81(0xb56)+_0x339d81(0xa70)));_0x5a2a95[_0x339d81(0x29e)]=_0x57572b[_0x339d81(0x76e)+'h']?_0x57572b['join'](';\x20'):'';if(_0x57572b['lengt'+'h'])return _0x4d29f3[_0x339d81(0x956)+_0x339d81(0x458)]=![],null;return _0x1895f6[_0x339d81(0x956)+'ified']=!![],_0xae7886['pitch']=_0x40df93+_0x3914da[_0x339d81(0xa70)+_0x339d81(0x55d)],_0x6edf3b[_0x339d81(0x72c)]=_0x360390[_0x339d81(0x279)](_0x5e2a4a,_0x2eef73['yawOf'+'f']),_0xbafe9f;}}else _0x5d18b4=_0xbd466b+_0x142e3a,_0x4dad08=_0xbd466b+_0x2fb5c6;var _0xaa07f9=_0x4042ae!==null&&_0x245071['team']===_0x4042ae;_0x2cbf74[_0x339d81(0x12c)+_0x339d81(0x174)]=_0xaa07f9?_0x5b43bc['mRieq']:'#ff6e'+'74',_0x2cbf74[_0x339d81(0xaf7)+'Path'](),_0x2cbf74['arc'](_0x5d18b4,_0x4dad08,_0xaa07f9?0x1cac+0x23a3+-0x404d:0xa3f+0x2*-0xa49+0xa56+0.20000000000000018,0xb47+0x1*-0xbf3+-0x1*-0xac,Math['PI']*(-0x1*-0x1b11+0xca9+-0x27b8)),_0x2cbf74[_0x339d81(0x79c)](),_0x531c6c++;}_0x2cbf74['fillS'+_0x339d81(0x174)]=_0x5b43bc[_0x339d81(0x7ff)],_0x2cbf74[_0x339d81(0xaf7)+'Path'](),_0x2cbf74['arc'](_0xbd466b,_0xbd466b,0x50*-0x1a+0x560+0x1*0x2c3,0x59*-0x34+-0xe2*0x1+0x12f6,Math['PI']*(0x94e*-0x1+0x73*0x30+-0xc40)),_0x2cbf74[_0x339d81(0x79c)]();if(_0x19ae05['lg']){if(_0x5b43bc[_0x339d81(0x8d9)](_0x5b43bc['eBKWq'],_0x5b43bc[_0x339d81(0xb3c)])){if(_0xc5769f[_0x339d81(0xb13)+'ns'][_0x5dc3a4][_0x339d81(0xaa0)+'List'])_0x29fcc1[_0x339d81(0xb13)+'ns'][_0x245189][_0x339d81(0xaa0)+_0x339d81(0x49c)]=_0x5b43bc['AlaMP']+(_0x5b43bc[_0x339d81(0x6b5)](_0x5a4df0,_0x9e017f)?_0x5b43bc[_0x339d81(0xa13)]:'');}else _0x19ae05['lg'][_0x339d81(0x89d)+_0x339d81(0x4ea)+'t']=_0x5b43bc['ezXct'](_0x5b43bc[_0x339d81(0x620)](_0x5b43bc['WqfQo'],_0x531c6c)+_0x339d81(0xb3e)+Math[_0x339d81(0x4d6)](_0x41b3ea[_0x339d81(0x97d)])+'m',_0x41b3ea[_0x339d81(0xa1e)]?_0x5b43bc[_0x339d81(0x54f)]+Math['round'](_0x149473[_0x339d81(0x7dd)])+'°':'')+(_0x4042ae!==null?_0x5b43bc[_0x339d81(0x632)](_0x5b43bc[_0x339d81(0x180)],_0x4042ae):'');}}catch(_0x29ff16){}}else{if(!_0x491e94)return;_0x10efab=![],_0x178257[_0x339d81(0x447)]['curso'+'r']='grab',_0xefba45();}}function _0x293fa4(){var _0x43ed11=_0x6937dd,_0x5bd541=_0x44159b['Photo'+_0x43ed11(0x9ca)+_0x43ed11(0x6e5)+'nc']||{};if(!Object[_0x43ed11(0x6eb)](_0x5bd541)[_0x43ed11(0x76e)+'h'])return![];return!!_0x5b43bc['zsGYL'](_0x345b8b);}function _0x2b8033(_0x517de9){var _0x2424ea=_0x6937dd;try{var _0x76c0ca=_0x460607;if(_0x76c0ca&&_0x76c0ca['el'])_0x76c0ca['el']['style'][_0x2424ea(0x1f8)+'ay']=_0x517de9?'':_0x5b43bc['KFydA'];var _0x761b30=_0x558560;if(_0x761b30&&_0x761b30['cv'])_0x761b30['cv'][_0x2424ea(0x447)]['displ'+'ay']=_0x517de9?'':_0x2424ea(0x422);}catch(_0x52ee73){}}function _0x3d5af7(){var _0x3a1b4c=_0x6937dd,_0x29893e={'ogrKa':function(_0x5063bc,_0x1cdeb8){return _0x5063bc===_0x1cdeb8;},'AEXLA':function(_0x472e19,_0x2a2f2d){return _0x472e19(_0x2a2f2d);},'KcqqP':function(_0x465ae4,_0x58f7cd){return _0x465ae4!==_0x58f7cd;}};if(_0x3a1b4c(0x181)===_0x3a1b4c(0x181)){if(!_0x41b3ea['on']||!_0x5b43bc['nrcYM'](_0x293fa4)){_0x5b43bc['sehDz'](_0x2b8033,![]),setTimeout(_0x3d5af7,-0x25b3+0xcd1+0x1a0e);return;}_0x5b43bc['RIloU'](_0x2b8033,!![]),_0x5b43bc[_0x3a1b4c(0x64d)](_0x1dc3f6);if(_0x41b3ea[_0x3a1b4c(0xa1e)])_0x61468f();var _0x4f1a7f=null;try{if(_0x5b43bc['AzIuT']!==_0x5b43bc[_0x3a1b4c(0x991)])return _0x276f4d['sourc'+'e']=_0x3a1b4c(0x90e)+'me._g'+'ame',_0x42a296;else _0x4f1a7f=_0x5b43bc[_0x3a1b4c(0x98a)](_0x89a3fe);}catch(_0x511d41){}try{_0x106b68();}catch(_0x47e43e){}try{_0x50e7b7(_0x4f1a7f);}catch(_0x902a0a){}setTimeout(_0x3d5af7,-0x19d6+-0x1037+0x2a3f);}else{if(_0x29893e['ogrKa'](_0x202dcf,_0x3a1b4c(0xa08)))return _0x29893e['AEXLA'](_0x56831c,_0x497107^_0xb9ac94);if(_0x29893e['ogrKa'](_0x50fcd2,_0x3a1b4c(0x76a)))return _0x50d8b0^_0x247e74|-0xfbc+0x1*-0x240c+0x33c8;return _0x29893e[_0x3a1b4c(0x442)]((_0x44c4c3^_0x2cb1e2)&0x18b3+0x4*0x234+-0x2084,-0x1e73+-0x1*-0x7ba+0x16b9)?0x1f5e+0x1a19+-0x3976:-0x208f+0x19*-0xad+0x107c*0x3;}}function _0x288944(){var _0x373701=_0x6937dd,_0x4ef934={'dEOwf':function(_0x194230,_0x3332b6){return _0x5b43bc['bbwMA'](_0x194230,_0x3332b6);},'FNBjN':_0x5b43bc[_0x373701(0x43e)],'TnRMI':function(_0x62523a,_0x46eaa0){return _0x62523a+_0x46eaa0;},'boSXY':function(_0x89bda0,_0x4c265a){return _0x89bda0>=_0x4c265a;},'NbkpD':function(_0x179ebd,_0x1560cd){return _0x5b43bc['HFOWX'](_0x179ebd,_0x1560cd);},'IXtQA':function(_0x387215){var _0x5a0ed0=_0x373701;return _0x5b43bc[_0x5a0ed0(0x3aa)](_0x387215);},'KxPNn':function(_0x1637ac,_0xeac86c){var _0x508308=_0x373701;return _0x5b43bc[_0x508308(0x459)](_0x1637ac,_0xeac86c);}},_0x29ec15=window[_0x373701(0x7c3)+_0x373701(0x365)+_0x373701(0x1a6)]&&window[_0x373701(0x7c3)+'WebMo'+'dkit']['Runti'+'me']||null,_0x5bb5e2=_0x29ec15&&_0x29ec15[_0x373701(0x658)+'pCont'+_0x373701(0x56a)],_0x44873c=_0x5bb5e2&&_0x5bb5e2[_0x373701(0x525)+_0x373701(0x973)],_0x132c62={},_0x640f0a=[];for(var _0x4a67af in _0x4a5663){_0x132c62[_0x4a67af]='0x'+_0x4a5663[_0x4a67af][_0x373701(0xb22)]['toStr'+_0x373701(0xa36)](-0x3d6*-0x7+0x1d3d+-0x801*0x7);if(_0x4a5663[_0x4a67af][_0x373701(0x655)+'ced'])_0x640f0a['push'](_0x4a67af);}var _0x1c5aab={};for(var _0x5f4183 in _0x4a5663)_0x1c5aab[_0x5f4183]=_0x5b43bc['HiufF'](_0x4517d4,_0x4a5663[_0x5f4183][_0x373701(0xb22)]);var _0x4a93d3={},_0x46a42e=null;try{_0x4a93d3=_0x331d3d();}catch(_0x30e2e6){_0x46a42e=_0x5b43bc['leStD'](String,_0x30e2e6&&_0x30e2e6['messa'+'ge']||_0x30e2e6);}var _0x4c28ce={'version':_0xe7e7c6,'when':new Date()['toISO'+_0x373701(0x913)+'g'](),'elapsedMs':Date[_0x373701(0xa8f)]()-_0x3d7025,'frame':location[_0x373701(0x2de)]['slice'](0x2dd*0x1+0x15d*0xb+-0x11dc,-0x4a*0x5c+0x1408+0x708),'host':_0x5d1960,'frameRole':_0x17a9ba,'uwmk':!!_0x29ec15,'il2CppContext':!!_0x5bb5e2,'typeCount':_0x44873c?Object[_0x373701(0x6eb)](_0x44873c)['lengt'+'h']:null,'arm':_0x5ba477,'assemblies':_0x3bef8c,'hooksTotal':_0x5d137a[_0x373701(0x76e)+'h'],'hooksApplied':_0x35702a(),'hooksResolved':_0x36c99e(),'hooksRegisteredAtArm':_0x5ba477[_0x373701(0x3ec)+'Regis'+'tered']||-0x82f+0x1a68+-0x3*0x613,'hookErrors':_0x26debb['slice'](0x1*0x7a1+-0x13d*0xb+-0x1*-0x5fe,-0x1e8*-0x10+0x41f+-0x2297),'instances':_0x132c62,'classNames':_0x1c5aab,'instancesReplaced':_0x640f0a,'hookFireProof':_0x2046a0,'survey':_0x4a93d3,'actkKeys':_0x124407,'surveyRows':Object[_0x373701(0x6eb)](_0x4a93d3)[_0x373701(0x2f0)+'e'](function(_0x5b5136,_0x10b88c){var _0x5bfeb4=_0x373701;return _0x5b5136+_0x4a93d3[_0x10b88c][_0x5bfeb4(0x76e)+'h'];},-0x180b+-0x10ed+0x8*0x51f),'reads':{'ok':_0x627300['ok'],'failed':_0x627300[_0x373701(0x6b3)+'d'],'lastError':_0x627300[_0x373701(0x8b7)+_0x373701(0x1cc)],'source':_0x627300[_0x373701(0x42d)+'e']},'identity':_0x30ae25(),'globals':_0x12f651(),'wasmMemory':{'captured':!!_0x4908fe,'atMs':_0x5ef825,'bytes':(function(){var _0x5bf0f3=_0x373701,_0x357dc7={'ntkZJ':_0x5bf0f3(0xbf),'dWgoZ':_0x5b43bc['yHNrU']};try{if(_0x5bf0f3(0x75d)!==_0x5b43bc[_0x5bf0f3(0x209)])return _0x4908fe&&_0x4908fe[_0x5bf0f3(0x2eb)+'r']?_0x4908fe[_0x5bf0f3(0x2eb)+'r'][_0x5bf0f3(0x6a2)+_0x5bf0f3(0x348)]:-0x26*0xe0+0x9*-0x43+0x239b*0x1;else{if(_0x187a77[_0x5bf0f3(0x5fc)]===_0x357dc7[_0x5bf0f3(0x3f4)]){_0x405f86()[_0x5bf0f3(0x3ac)]({'host':_0x23246f[_0x5bf0f3(0x832)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x532025['kind']===_0x357dc7['dWgoZ'])_0x13892f()['set'](_0x2eb45d['repor'+'t']);}}catch(_0x470aa1){return-0x1274+-0x320*-0x2+0xc34;}}()),'exportKeys':_0x1562ea},'diff':_0x46f12a[_0x373701(0x50d)](-0x3*-0x7c5+0x776*0x1+0x1*-0x1ec5,-0x131+-0x1604+-0x175d*-0x1),'speed':{'on':_0x3f1502['on'],'factor':_0x3f1502['facto'+'r'],'writes':_0x5b33aa,'scaled':_0x53b8da['slice'](-0x1*0x46c+-0x7*-0x565+-0x2157,-0xa7*0x29+-0x1*0x62f+0x107f*0x2),'skipped':_0x23a90c['slice'](-0x182a+0xd76+0x2*0x55a,0x2055+0x1*-0x10f1+-0xf54)},'esp':_0x3ea4d1(),'view':_0x5b43bc[_0x373701(0x405)](_0x10d8b1),'angles':(function(){var _0x2a8866=_0x373701;if('fArhm'===_0x4ef934['FNBjN']){if(!_0xeed18d||!_0x7abde2)return null;var _0x3529fd=new _0x2f4678(_0x422658)['getCl'+_0x2a8866(0x711)+'me']();return _0x4ef934[_0x2a8866(0x126)](_0x3529fd,_0x4518a0)?null:_0x3529fd;}else{var _0x1627be=_0x2bebe4(),_0x808129=null,_0x534407=null,_0x7bcca6=_0x345b8b();if(_0x7bcca6){var _0x5ea08b=_0x16e2bc(_0x7bcca6[_0x2a8866(0x849)],[_0x7bcca6['eye'][-0x133a*0x2+-0x13*0x5f+0x2d81],_0x7bcca6['eye'][0x2*0x1231+0x2*-0x4d6+0x1ab5*-0x1],_0x4ef934['TnRMI'](_0x7bcca6[_0x2a8866(0x849)][0x2*-0x1d3+0x1*0xec0+-0xb18],-0x2461+0x165*-0x1+0x25c7)],-0x2*-0xa1d+0x2195*-0x1+0x3*0x5c1,-0x1fa9+-0x31*0x5+0x2486);_0x5ea08b&&(_0x2a8866(0x15a)!==_0x2a8866(0x6f3)?(_0x808129=_0x5ea08b['x']/(-0x38+0x1f*0x61+-0x79f),_0x534407=_0x5ea08b['y']/(0x7c*0x11+-0xd83+-0x92f*-0x1)):_0x4ecb6c[_0x2a8866(0x89d)+_0x2a8866(0x4ea)+'t']=_0x2494aa['strin'+_0x2a8866(0x57f)](_0x496294,null,-0x1971+-0x1913+0x3285));}return{'identified':_0x57a41b[_0x2a8866(0x956)+_0x2a8866(0x458)],'why':_0x57a41b[_0x2a8866(0x29e)],'rawPitch':_0x57a41b[_0x2a8866(0xa70)],'rawYaw':_0x57a41b['yaw'],'fov':_0x149473[_0x2a8866(0x7dd)],'fovSane':_0x4ef934['boSXY'](_0x149473[_0x2a8866(0x7dd)],-0x1c86+-0xb74*-0x1+0x114e)&&_0x4ef934[_0x2a8866(0x2a8)](_0x149473['fov'],0x86e+0x1*-0x2191+-0x1991*-0x1),'centreX':_0x808129,'centreY':_0x534407};}}()),'fov':_0x149473['fov'],'espView':{'on':_0x41b3ea['on'],'boxes':_0x41b3ea[_0x373701(0xa1e)],'span':_0x41b3ea[_0x373701(0x97d)]},'local':(function(){var _0x1e9f08=_0x373701,_0x39e402={'mCXgg':function(_0x721447,_0x2b3baa){return _0x721447+_0x2b3baa;}};if(_0x1e9f08(0x540)!==_0x1e9f08(0x5a2)){var _0x300087=_0x4ef934[_0x1e9f08(0x59a)](_0x345b8b);if(!_0x300087)return null;return{'ptr':'0x'+_0x300087['ptr']['toStr'+_0x1e9f08(0xa36)](0x514+0xcf9*0x1+0x1*-0x11fd),'feet':_0x300087[_0x1e9f08(0x217)],'eye':_0x300087[_0x1e9f08(0x849)],'posAt':_0x300087[_0x1e9f08(0x549)],'copies':_0x300087['copie'+'s'],'cluster':_0x300087['clust'+'er'],'eyeHeight':_0x2a7ec4,'pitch':_0x300087[_0x1e9f08(0xa70)],'yaw':_0x300087[_0x1e9f08(0x72c)],'reach':_0x300087['reach']};}else return _0x4ec7d9[_0x1e9f08(0x6b3)+'d']++,_0x30be54[_0x1e9f08(0x8b7)+_0x1e9f08(0x1cc)]=_0x4ed6d5['lastE'+_0x1e9f08(0x1cc)]||_0x39e402[_0x1e9f08(0x2d3)](_0x39e402[_0x1e9f08(0x2d3)](_0x39e402[_0x1e9f08(0x2d3)](_0x1e9f08(0x1d9)+'ss\x200x',_0x2f00a0['toStr'+'ing'](0x3*0x4fd+0x1159+-0x2040)),'\x20past'+_0x1e9f08(0x6ae)+'\x20end\x20'+'0x'),_0x2c029f[_0x1e9f08(0x6a2)+_0x1e9f08(0x348)]['toStr'+_0x1e9f08(0xa36)](-0xf25*0x1+0x100b+-0xd6)),_0xcf7b74;}()),'uwmkLog':_0x3a917f[_0x373701(0x50d)](-0x6b6+0x244e+0x766*-0x4,0xd2f+-0x1*-0x21f5+-0x5e2*0x8),'warnings':[]};if(_0x46a42e)_0x4c28ce[_0x373701(0xb4e)+_0x373701(0x29f)][_0x373701(0x7d6)](_0x373701(0x20b)+_0x373701(0x818)+'led:\x20'+_0x46a42e);if(_0x5ba477[_0x373701(0x6d6)])_0x4c28ce[_0x373701(0xb4e)+_0x373701(0x29f)][_0x373701(0x7d6)](_0x5b43bc[_0x373701(0x7e6)](_0x5b43bc['yrRNo'],_0x5ba477['error']));_0x5b43bc['HobAH'](_0x4c28ce[_0x373701(0x20b)+_0x373701(0x1bb)],0x2144+0x14c0+-0x3604)&&_0x5b43bc['xUIVR'](Object['keys'](_0x4c28ce[_0x373701(0x981)+_0x373701(0x14e)])['lengt'+'h'],0x11a+-0xb6e*-0x2+0x2*-0xbfb)&&_0x4c28ce['warni'+_0x373701(0x29f)]['push'](_0x5b43bc['jqOGp'](_0x5b43bc['NuqaC']+Object[_0x373701(0x6eb)](_0x4c28ce[_0x373701(0x981)+_0x373701(0x14e)])[_0x373701(0x76e)+'h'],'\x20obje'+_0x373701(0x268)+_0x373701(0x579)+_0x373701(0x147)+'0\x20fie'+'lds.\x20')+(_0x627300[_0x373701(0x8b7)+'rror']?_0x5b43bc[_0x373701(0x3f2)](_0x5b43bc['VgLGX'],_0x627300['lastE'+'rror']):'No\x20re'+_0x373701(0x9e0)+'iled,'+'\x20so\x20e'+'very\x20'+_0x373701(0x25f)+'t\x20was'+'\x20skip'+_0x373701(0x1ea)+'y\x20typ'+'e.'));_0x4c28ce['ident'+_0x373701(0x614)]&&_0x5b43bc['nSYbW'](_0x4c28ce[_0x373701(0x956)+_0x373701(0x614)]['tagMa'+'tches'],![])&&_0x4c28ce[_0x373701(0xb4e)+'ngs'][_0x373701(0x7d6)](_0x373701(0x7f2)+'ER\x20UW'+_0x373701(0x7d5)+_0x373701(0x891)+'OK\x20OV'+_0x373701(0x877)+_0x373701(0x78c)+_0x373701(0x7c3)+'WebMo'+_0x373701(0x7b1)+_0x373701(0xb32)+_0x373701(0x90e)+'me\x20we'+'\x20arme'+_0x373701(0x402)+'\x20'+_0x5b43bc['CKyHS']+('the\x20g'+_0x373701(0xa23)+_0x373701(0x2cb)+_0x373701(0x69b)+'ne\x20ho'+_0x373701(0x5d6)+_0x373701(0x65a)+'s\x20orp'+_0x373701(0x27b)+_0x373701(0x3cc)+_0x373701(0x413)+'every'+_0x373701(0x91b)+'r\x20')+(_0x373701(0x514)+'a/UWM'+'K\x20scr'+_0x373701(0x78e)+'n\x20Tam'+_0x373701(0x32f)+_0x373701(0x387)+'and\x20h'+_0x373701(0x210)+_0x373701(0x5cf)+'.'));_0x4c28ce[_0x373701(0x956)+_0x373701(0x614)]&&_0x4c28ce[_0x373701(0x956)+'ity'][_0x373701(0x401)+'nRunt'+_0x373701(0x919)+'Expor'+'ted']===![]&&_0x4c28ce[_0x373701(0xb4e)+'ngs'][_0x373701(0x7d6)](_0x5b43bc[_0x373701(0x7c6)]('plugi'+_0x373701(0x533)+_0x373701(0x20d)+'\x20is\x20n'+_0x373701(0x1a8)+_0x373701(0x78c)+_0x373701(0x7c3)+_0x373701(0x365)+'dkit.'+'Runti'+_0x373701(0x51b)+_0x373701(0x45d)+'lugin'+_0x373701(0x8af)+_0x373701(0x55c)+'\x20','again'+'st\x20a\x20'+_0x373701(0x947)+'rent\x20'+_0x373701(0x90e)+'me\x20in'+_0x373701(0xab6)+_0x373701(0x298)+'n\x20the'+_0x373701(0x121)+'al\x20no'+_0x373701(0x784)+_0x373701(0x709)));if(_0x4c28ce['esp']&&_0x4c28ce[_0x373701(0x141)]['note'])_0x4c28ce[_0x373701(0xb4e)+'ngs'][_0x373701(0x7d6)](_0x373701(0x638)+_0x4c28ce[_0x373701(0x141)]['note']);if(_0x4c28ce[_0x373701(0xa09)+'ls']&&!_0x4c28ce[_0x373701(0xa09)+'ls'][_0x373701(0x84f)+'8']){if(_0x373701(0x34b)!==_0x373701(0x34b)){var _0x22675c=_0x25ef9a[_0x373701(0x513)+_0x373701(0x420)+_0x373701(0x6e1)](_0x373701(0xac)+'a-sw-'+'v2-ta'+'b');if(_0x175905&&!_0x22675c&&_0x4d908a['body']){var _0x4d31fc=_0x320d0f['creat'+_0x373701(0x999)+_0x373701(0x516)]('div');_0x4d31fc['id']=_0x5b43bc['NbCnt'],_0x4d31fc['style']['cssTe'+'xt']='posit'+_0x373701(0x865)+'ixed;'+'left:'+'12px;'+'top:1'+_0x373701(0x5a3)+'-inde'+_0x373701(0x2ae)+'74829'+_0x373701(0x17a)+'rsor:'+_0x373701(0x5e8)+'er;us'+_0x373701(0x963)+_0x373701(0x1ad)+'none;'+_0x5b43bc[_0x373701(0x386)]+_0x537401+';'+(_0x373701(0x169)+_0x373701(0x9cf)+_0x373701(0x928)+'99px;'+'paddi'+'ng:4p'+_0x373701(0x581)+'x;fon'+'t:11p'+_0x373701(0x762)+_0x373701(0x53b)+_0x373701(0x9d6)+_0x373701(0x5be)+_0x373701(0x2f6)+_0x373701(0x196)+_0x373701(0x142)+_0x373701(0xb54)),_0x4d31fc[_0x373701(0x89d)+_0x373701(0x4ea)+'t']=_0x373701(0xac)+'a',_0x4d31fc[_0x373701(0x624)+'ck']=function(){var _0x378f86=_0x373701;_0x4ef934[_0x378f86(0xac7)](_0x497e18,![]),_0x30d6a9();},_0x399464['body'][_0x373701(0x441)+'dChil'+'d'](_0x4d31fc);}else!_0x4c000e&&_0x22675c&&_0x22675c['remov'+'e']();}else{var _0x174c8d='';_0x4c28ce[_0x373701(0x3dd)+_0x373701(0x5cc)+'oof']&&(_0x174c8d=_0x5b43bc['ghHsQ'](_0x5b43bc['BRzlB'](_0x5b43bc['wvyGm'](_0x5b43bc[_0x373701(0xa78)](_0x5b43bc['jPKcW']('\x20A\x20ho'+'ok\x20fi'+_0x373701(0x578)+'t\x20',_0x4c28ce[_0x373701(0x3dd)+_0x373701(0x5cc)+_0x373701(0x60d)][_0x373701(0x859)])+_0x5b43bc['dMRuk'],_0x4c28ce[_0x373701(0x3dd)+'irePr'+'oof'][_0x373701(0x9f6)+_0x373701(0x9e2)+'nc']),_0x373701(0xb3d)+'game\x20'+_0x373701(0xe6)+_0x373701(0x4c9))+_0x4c28ce[_0x373701(0x3dd)+'irePr'+_0x373701(0x60d)]['resol'+_0x373701(0x743)+_0x373701(0x862)+'re']+(_0x373701(0x7c0)+_0x373701(0x574)),_0x4c28ce[_0x373701(0x3dd)+_0x373701(0x5cc)+_0x373701(0x60d)][_0x373701(0xa63)+'ource'+_0x373701(0x2df)+'e']||_0x5b43bc[_0x373701(0xa90)]),_0x373701(0x2b0)+'\x20the\x20'+_0x373701(0x5a7)+_0x373701(0x2c9)+'exist'+_0x373701(0x278)+_0x373701(0x68c)+_0x373701(0x13d)+'not\x20r'+_0x373701(0x499)+_0x373701(0x482)+'ow.')),_0x4c28ce['warni'+'ngs'][_0x373701(0x7d6)](_0x5b43bc['mzWQu'](_0x5b43bc[_0x373701(0x179)](_0x5b43bc['mzWQu'](_0x373701(0x7c3)+'\x20inst'+'ance\x20'+'not\x20r'+_0x373701(0x636)+'ed\x20ye'+'t\x20(so'+'urce:'+'\x20'+(_0x4c28ce['globa'+'ls']['gameS'+_0x373701(0x2f3)]||_0x5b43bc[_0x373701(0xa90)]),_0x373701(0x189)),_0x373701(0x77a)+'reads'+'\x20stay'+_0x373701(0xa0b)+_0x373701(0x7ee)+'ntil\x20'+_0x373701(0x5fb)+'e\x20obj'+'ect\x20w'+_0x373701(0x23f)+_0x373701(0x1ff)+'.HEAP'+_0x373701(0xb4c)+_0x373701(0x43b)+_0x373701(0x2f1)+'.'),_0x174c8d));}}return(_0x4c28ce[_0x373701(0xa09)+'ls']&&!_0x4c28ce[_0x373701(0xa09)+'ls']['value'+_0x373701(0xabf)+'er']||_0x4c28ce[_0x373701(0xa09)+'ls'][_0x373701(0x1c6)+'Wrapp'+'er']===_0x373701(0x777)+'ined')&&_0x4c28ce[_0x373701(0xb4e)+_0x373701(0x29f)][_0x373701(0x7d6)](_0x5b43bc[_0x373701(0x885)]),_0x5b43bc[_0x373701(0x6c4)](_0x4c28ce[_0x373701(0x3ec)+_0x373701(0x33c)],0x431*0x5+-0xc9e+0x3d*-0x23)&&_0x4c28ce[_0x373701(0x3ec)+_0x373701(0x9a9)+'ed']===0x1d3f*0x1+-0x119+-0x1c26&&_0x44873c&&(_0x4c28ce[_0x373701(0x3ec)+'Resol'+_0x373701(0x642)]===-0x7bf*0x2+-0x97+-0xb3*-0x17?_0x4c28ce[_0x373701(0xb4e)+_0x373701(0x29f)][_0x373701(0x7d6)](_0x5b43bc[_0x373701(0x376)](_0x5b43bc['ruZso'](_0x5b43bc['eJpAL'](_0x5b43bc[_0x373701(0x2aa)](_0x5b43bc[_0x373701(0x4ad)](_0x5b43bc[_0x373701(0x724)],_0x4c28ce[_0x373701(0x3ec)+'Total']),_0x373701(0x716)+'s\x20wer'+_0x373701(0x377)+_0x373701(0x2c3)+_0x373701(0x66c)+_0x373701(0x3b6)+'\x20The\x20'+'apply'+_0x373701(0x5b0)+'\x20')+_0x5b43bc[_0x373701(0x998)]+(_0x373701(0xb53)+'oks\x20r'+'egist'+_0x373701(0x185)+_0x373701(0xc0)+_0x373701(0x1b4)+'re\x20ig'+'nored'+_0x373701(0x7b4)+_0x373701(0x649)+_0x373701(0x462)+_0x373701(0x704)+_0x373701(0x101)+'.\x20'),'Regis'+'tered'+'\x20'),_0x4c28ce[_0x373701(0x3ec)+'Regis'+'tered'+'AtArm']),_0x5b43bc['fnMxr'])):_0x4c28ce['warni'+_0x373701(0x29f)][_0x373701(0x7d6)](_0x5b43bc['HdIjJ'](_0x5b43bc[_0x373701(0x300)](_0x373701(0x70d)+_0x373701(0xe6)+_0x373701(0x42f),_0x4c28ce['hooks'+'Resol'+'ved']),_0x373701(0x23b))+_0x4c28ce['hooks'+_0x373701(0x33c)]+_0x5b43bc[_0x373701(0x221)]+_0x5b43bc['OrYxN'])),_0x5b43bc['CiJEr'](_0x4c28ce[_0x373701(0x3ec)+_0x373701(0x9a9)+'ed'],-0x265+0x1eb5+0x714*-0x4)&&!_0x4c28ce['insta'+'nces']['FPSco'+_0x373701(0x5d7)+_0x373701(0x591)]&&('aRCjT'===_0x5b43bc[_0x373701(0x1a9)]?_0x4c28ce[_0x373701(0xb4e)+_0x373701(0x29f)][_0x373701(0x7d6)](_0x5b43bc['vCWHV']('Hooks'+_0x373701(0x978)+_0x373701(0x2d5)+'ed\x20bu'+_0x373701(0x39b)+'FPSco'+_0x373701(0x5d7)+_0x373701(0x5ef)+_0x373701(0x48f)+'red\x20y'+'et.\x20','Eithe'+'r\x20you'+'\x20are\x20'+'not\x20i'+'n\x20a\x20r'+_0x373701(0x80e)+_0x373701(0x481)+_0x373701(0x63b)+_0x373701(0x12f)+'\x20on\x20t'+'he\x20wr'+_0x373701(0x3e0)+_0x373701(0x1dd)+'ad.')):_0x4c2cf0[_0x373701(0x694)][_0x4a6493]()),_0x4c28ce['insta'+_0x373701(0x11e)+_0x373701(0x664)+'ed']['lengt'+'h']&&_0x4c28ce[_0x373701(0xb4e)+'ngs'][_0x373701(0x7d6)](_0x5b43bc[_0x373701(0x8e0)]+_0x4c28ce[_0x373701(0x981)+_0x373701(0x11e)+'eplac'+'ed'][_0x373701(0x896)](',\x20')),_0x4c28ce;}function _0xe16933(_0x6e7f43){var _0x38b36c=_0x6937dd;console[_0x38b36c(0x37a)]('%c[sa'+'kura]'+_0x38b36c(0x33e)+'lWarz'+'\x20repo'+'rt',_0x5b43bc[_0x38b36c(0xa55)](_0x5b43bc['vMiUo']+_0x494d48,_0x5b43bc[_0x38b36c(0x9c3)]),_0x6e7f43),console[_0x38b36c(0x37a)](_0x5b43bc[_0x38b36c(0x89c)](_0x5b43bc['lfGXA'](_0x572cf5+'\x0a',JSON['strin'+'gify'](_0x6e7f43,null,-0x1*0x1c09+0x1626+-0x1a*-0x3a)),'\x0a')+_0x515444),_0x167128=_0x6e7f43;try{_0x5b43bc['LLjNn'](_0x3b9cdb,_0x6e7f43);}catch(_0x127907){}_0x16bd7a(_0x38b36c(0x7ea)+'t',{'report':_0x6e7f43});}function _0x491570(){var _0x13139e=_0x6937dd;try{return _0x288944();}catch(_0x585ac0){return{'version':_0xe7e7c6,'when':new Date()['toISO'+'Strin'+'g'](),'elapsedMs':Date[_0x13139e(0xa8f)]()-_0x3d7025,'host':_0x5d1960,'uwmk':!!(window[_0x13139e(0x7c3)+'WebMo'+'dkit']&&window['Unity'+'WebMo'+_0x13139e(0x1a6)][_0x13139e(0x90e)+'me']),'il2CppContext':![],'arm':_0x5ba477,'hooksTotal':_0x5d137a[_0x13139e(0x76e)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x5b43bc[_0x13139e(0x487)](String,_0x585ac0&&_0x585ac0[_0x13139e(0x29b)+'ge']||_0x585ac0)};}}function _0x1db6f4(){var _0x59a0d7=_0x6937dd,_0x1416a2={'aioWl':_0x5b43bc[_0x59a0d7(0x390)],'gvvHq':function(_0xbb7f24){var _0x1f98b7=_0x59a0d7;return _0x5b43bc[_0x1f98b7(0x5a5)](_0xbb7f24);},'EXOnp':function(_0x50661d,_0x285468,_0x2a2d21){var _0x237e9f=_0x59a0d7;return _0x5b43bc[_0x237e9f(0x840)](_0x50661d,_0x285468,_0x2a2d21);}};if('qxbVR'===_0x59a0d7(0x976)){var _0x1f8c9e=-0x10*-0x19c+0x191*0x2+0x1ce2*-0x1;try{_0x5b43bc[_0x59a0d7(0x94a)](_0x59a0d7(0x4f1),_0x5b43bc[_0x59a0d7(0x6fb)])?(_0x5b43bc[_0x59a0d7(0x7a8)](_0x260f09,_0x293b21(_0xbd8b3e[_0x59a0d7(0x1c6)])||_0x313b12),_0xd2bd7d()):_0x3d5af7();}catch(_0x52fc65){}try{_0x5b316();}catch(_0x4437bb){}setInterval(_0x1d8e13,0x329+0x19c9+-0x15*0x136),_0x5b43bc[_0x59a0d7(0x769)](_0xe16933,_0x491570()),function _0x70ec3c(){var _0x204ee4=_0x59a0d7;if(!_0x5d137a[_0x204ee4(0x76e)+'h']){if(_0x1416a2['aioWl']===_0x204ee4(0x5e6))try{_0x1416a2[_0x204ee4(0x857)](_0x2cbc08);}catch(_0x583d85){}else _0x420c90['on']=!![],_0x1ca30c[_0x204ee4(0xa1e)]=![];}_0x1f8c9e++,_0xe16933(_0x491570());if(!_0x5d137a[_0x204ee4(0x76e)+'h']&&_0x1f8c9e<0x1ebd+-0x71*-0x2c+-0x30fd)setTimeout(_0x70ec3c,-0x6a8+-0x1*-0xa39+0x43f);else{if(!Object['keys'](_0x4a5663)['lengt'+'h']&&_0x1f8c9e<-0xd1f*-0x2+0x59*0x65+-0x3c2f*0x1)setTimeout(_0x70ec3c,-0x146*-0x8+0x1ebe+-0x211e);else _0x1416a2[_0x204ee4(0x37d)](setTimeout,_0x70ec3c,0xb5c+0x1*-0x1625+0xf79*0x1);}}();}else return{'pos':null,'posAt':null,'inBand':0x0,'cluster':0x0,'reach':0x0};}if(document[_0x6937dd(0x2f5)])_0x5b43bc['ZLeMQ'](_0x1db6f4);else document[_0x6937dd(0x66b)+_0x6937dd(0x6cf)+_0x6937dd(0x761)+'r'](_0x5b43bc['Ptyyq'],_0x1db6f4,{'once':!![]});if(document[_0x6937dd(0x2f5)]){if(_0x5b43bc[_0x6937dd(0x5df)](_0x5b43bc[_0x6937dd(0x65d)],_0x5b43bc['oGbJv']))try{_0x5b43bc[_0x6937dd(0x96d)](_0x5b43bc['wryqU'],'hejMk')?_0x5b43bc[_0x6937dd(0xa99)](_0xf2d1dd):_0x1a5b9e(!_0x23e157['on'],_0x579902['facto'+'r']);}catch(_0x15b37a){}else return _0x132fec['ident'+'ified']=![],_0x595437['why']=_0x5b43bc[_0x6937dd(0x7ec)],null;}else document['addEv'+'entLi'+'stene'+'r'](_0x5b43bc['Ptyyq'],function(){var _0x41ca0d=_0x6937dd,_0x1cd3f2={'vkKYU':function(_0xf4bfee,_0x2c98f0,_0x32555c){return _0x5b43bc['FRaMz'](_0xf4bfee,_0x2c98f0,_0x32555c);}};try{if('VUOje'!==_0x5b43bc['EmcsF'])_0xf2d1dd();else return{'o':'0x'+_0x3b7aed[-0xbf+0x20c*-0x2+0x3*0x19d][_0x41ca0d(0x9b0)+'ing'](-0xf1*0x25+-0xa23+-0x418*-0xb),'v':_0x1cd3f2['vkKYU'](_0x260172,_0x5e2be0+_0x23cdc2[0x50+-0x116f+-0x9*-0x1e7],_0x5c7b9f[0x6cd*0x2+-0x1675*-0x1+0x8e*-0x41])};}catch(_0x294fe2){}},{'once':!![]});})()));function _0x5c65(_0x22f43d,_0x5aa59d){_0x22f43d=_0x22f43d-(0x821+-0x1*-0x1d41+-0x24c4);var _0xd33f4b=_0x2be4();var _0x3bfeec=_0xd33f4b[_0x22f43d];if(_0x5c65['idKZkx']===undefined){var _0x313cb7=function(_0x3a274f){var _0x3a0e06='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x5b5179='',_0x30c583='';for(var _0x52afe5=-0x1b35+0x39b*-0x1+0x1ed0,_0x505a00,_0x36aa05,_0x5a5014=0x515*0x7+-0x202*0x1+-0x2191;_0x36aa05=_0x3a274f['charAt'](_0x5a5014++);~_0x36aa05&&(_0x505a00=_0x52afe5%(0x2*0x389+0x5*0x15f+-0x4a3*0x3)?_0x505a00*(-0x1188+0x12fd+-0x135)+_0x36aa05:_0x36aa05,_0x52afe5++%(0x951+-0x1884+0xf37))?_0x5b5179+=String['fromCharCode'](-0x1*-0x11da+-0x27f*-0x1+-0x2*0x9ad&_0x505a00>>(-(-0x289*-0x3+0x3c8+-0xb61)*_0x52afe5&0xa7f+0xe1a+0x1*-0x1893)):-0xa34+0x2674+0x1c40*-0x1){_0x36aa05=_0x3a0e06['indexOf'](_0x36aa05);}for(var _0x855160=-0x1547+-0x22de*0x1+0x3825,_0x41798a=_0x5b5179['length'];_0x855160<_0x41798a;_0x855160++){_0x30c583+='%'+('00'+_0x5b5179['charCodeAt'](_0x855160)['toString'](-0x19d*0x7+-0x9*-0x89+-0x3e*-0x1b))['slice'](-(-0x2f+-0x1*0xb29+0xb5a));}return decodeURIComponent(_0x30c583);};_0x5c65['ylxmjg']=_0x313cb7,_0x5c65['lvQyDG']={},_0x5c65['idKZkx']=!![];}var _0x5720be=_0xd33f4b[-0x277+-0x2d*-0x63+-0x3bc*0x4],_0x33b957=_0x22f43d+_0x5720be,_0x573d85=_0x5c65['lvQyDG'][_0x33b957];return!_0x573d85?(_0x3bfeec=_0x5c65['ylxmjg'](_0x3bfeec),_0x5c65['lvQyDG'][_0x33b957]=_0x3bfeec):_0x3bfeec=_0x573d85,_0x3bfeec;}function _0x2be4(){var _0x1963ed=['oYi+','o21PBI0','lM1Ulxm','iIb3Awq','u2vLBG','Aw9U','ignVCgK','DgvYE2W','BLj1BNq','lNjLC28','Ad0ImIi','EK1krhq','wfLnrxG','z2fTzvm','mxb4idy','EdT9','CMrLCI0','q2HPBgq','zcdcTYa','BgCIihm','q01XBgm','DxLRtNe','zMTzvMW','kdi1nsW','r2fTzsG','idfWEca','CgL0y2G','DhznuhC','yMP2s2S','B2DfAha','zwqGB2y','yxz2vLK','Cvj1u2u','ywLSywi','DeXwqNa','z3jHyMi','lNnRlxm','u2vNB2u','vu1tyMy','qwzgr1e','v2T3t24','B2XVCJO','idHWEdS','mNm7Fq','yMfY','lNnRlxa','zJu7yM8','BM8GBgK','mNWXFdq','mtqZlde','rvnqig0','ltiUnsa','zsbYzw0','yxv0BZS','Cgj1DMe','rxPireS','t2rmBvy','BM93','s0z5zee','4OcuigzYyq','AfbSDK0','ywLUAw4','zg9JDw0','CwLKCfm','BIbjtLm','suTMrvy','wKHwzgO','uMTYzuW','B25LoW','nKfSCwj6AG','Ewv0ic0','ENrjsg8','ChG7Bwe','y2fTia','y2XHC3m','zxnLihq','ExPjs1q','A3DzDgG','CgvtEhe','EvDzshy','sKfpwuC','lJi1ktS','DLzrC0q','ig1LBNu','iNrLEhq','qK1TDxm','CYbLBMu','t0nLuKK','sNvVDNG','zt0IyMe','Bw4TC2K','ndHWEcK','ihbYB3y','tw9KDwW','lM1Ulwm','zM9iwvy','C3rHBMm','mJHsCKDSswO','Bgu9iMq','uKfXugu','yxjJ','zxHLy0m','qNzUDuC','vfzRDLa','vgHLigy','v3jHCha','DMuGB2i','zg93oMK','u2HHCNa','Bg93oMe','vNP1qwq','Bcb1Cgq','rvHgte8','s3HqtM4','ktTWB2K','B25NlG','DLfcz28','yw5ZAxq','DwfhveS','EIaTihC','oJa7EI0','uLndEei','sevbufu','nsWYntu','C2STyNq','Bw1us24','qvHLquu','C2fNzq','C2v0uhi','Aw50lxC','i2zMzJa','uMvNAxm','D3jHCdS','zhrOoJi','Aw5Lza','EhbVCNq','Bg9Hzhm','CMqTDgK','nduPo2i','DgnOige','yxbZAg8','qK9KtLK','zMfJDg8','q291BNq','AxrLBxm','AwqTDgu','yMTPDc0','u3DztNK','sNDArwu','EfPHugy','lJC1ktS','ignVBNm','zM1wvw0','mhGXod0','lJi4','lde0mYW','tg9Hzgu','zxmGDgG','cKLUC2u','Dxm6mti','DgvZDa','yMvNAw4','Ec13Awq','igfYBwK','zxH0lwe','zxG6mJe','C2STBge','ucbVBJW','ug9ZAxq','ihDOAwm','Bw4Ty2W','o2fSAwC','qKnssvq','zwq6ia','B2XPzca','B3qUBw4','Bef0zfy','y0LUChu','ihnVBgK','nsWXmdC','Acbxzwi','vwTLAuy','Aw5N4OcM','Dgr5DLe','C2STC2W','AgTJtfi','icbJyw0','zJmY','x3j1BNq','yNv0Dg8','zMXLEa','igjVDgG','zgvZy3S','sxfOzfK','icaGia','B2TLpsi','D2PlC28','Bwj7lxC','vvjyquO','wfPqwwK','yNPtBMW','yNL0zu8','wKvfC1i','A2L0lxu','ChrY','BYb0Agu','BguIihm','Dg9Nz2W','rxHWB3i','zxGTzgK','D29Yzc0','ChGGmZa','ufLwBvK','Bg93oMG','CMvSyxK','BMvQB2K','wNnpDLa','B3vUzdO','ywWGB24','DxrVo2i','ifrOzsa','oYi+ltW','r2rNEKC','lwLUzgu','zenOAwW','zMLSBfq','CfzZq0m','BgryEM8','AfnJCMK','zMfSC2u','vgzhCNC','igfUzca','imk3ia','AZPICMu','BvjPzxe','lcbuyw0','psiXmIi','C2TPBMC','nxW2Fdm','4Psa4Psaia','shLJr0G','Dhm6yxu','l3nWyw4','CKXPC3q','BvbrB0q','lwnHCMq','vtGGAxm','Bgf0zvK','D2fYBMK','AhfdC3O','CvzPCwS','CY5Tzw0','ChP4s04','C28GAg8','y2u7','m3W2Fde','B3qGysa','wLfAwhO','AgvHBhq','icaOCMu','whLqv2y','zuXpyLm','BKXlrwe','ig9IAMu','zJzIowq','Bwvhyw0','lJa0ktS','ic0+ia','DgfSE3a','B2zkEgO','rgnVuuK','C2fRDxi','nJq3o2q','zZO2ChG','DwfNv1q','zxPyy3q','oYi+tM8','rw5HyMW','pgrPDIa','khmPigq','weHTrKq','icaGy28','ltiUns0','vMzjCgO','AwDUlwK','DgvHBq','i2zMyJm','DY4Guhi','AgL0CW','yxjNAw4','AgvSBg8','ywz0zxi','yMfYzsa','BgXxyxi','zxnZywC','B3vUDa','AtmY','ocWYndi','ChG7zM8','C3vI','EuHoCLu','qNbfzwC','lwXLzNq','EfHbBg8','nJK4nJHrAwLYA2K','B2TLoMm','zeTyy3u','Cg9ZAxq','mdT0B3a','lM1Ulxq','Dte2','tvPyBKW','Bw4TDge','BfP3tMu','rgLMzIa','iM5VBMu','rJKPpc8','lde3nYW','msiGC3q','mtC3lc4','tuDzAfy','zg93','qujMD0i','BhrLCJO','DMLLDW','r3vczKm','DgL0BgO','i2zMnMu','tgLODfu','CMvZB2W','s0nzzuS','wevnuK4','vejSq2S','DgfYz2u','CMeTCgu','igzPzwW','rvvKzg0','svzvs2G','vhnKtw8','ihrVCc0','igfNCMu','mJu1lc4','DgvZia','weXKthG','lwv2zw4','DwzyqMi','C3rLCa','BM8Gseu','vLrSD1K','mNb4idG','whr6sey','BNTIywm','C3mGmhG','EdSIpNy','wvvxwxy','EfzSrMK','ihbHz2u','vMPxug8','mtaIihi','DcbPDca','mtrWEdS','Dxm6oha','zJfIo2i','ls1W','B3i6i2y','ytK5o20','zxi7iJ4','D2LKDgG','mtv8ohW','Bg9YoNi','vLL6swO','zxrVBG','uMvHC28','igLKpsi','qvb5whe','psjYB3u','ldiZocW','ztT9','BMCGyxq','kZb4','ic0Gy2e','A2v5qxq','DxjHx3m','wunNCgS','Dg9W','BMnLC1i','AdO2mNa','CgvJDhm','igDSB2i','t3PRCKS','uxvwz0S','BgrZlIa','lMrSBa','zevpD2y','lJmPo2q','z2v0sxq','zMP4ue0','mJG7','zMLYzsa','zMLSBfm','pc9KAxy','C25HChm','B2SGAxm','BgvHCG','BJOG','zM9YBtO','zfL4rhy','uNLkrfm','BNrLCI0','DgfYDdS','q0nODvC','zYbMB3i','lsbvBMK','EwvZ','ihn0EwW','i2y3zwu','zcbPCYa','CMq7zM8','qxnZzw0','AMTxCxm','zxnW','BM9ZCge','yxjKlxq','DcbKyxq','qK9ps3K','yNvPBgq','CMvHzca','EwXLpsi','igTPBMq','BgvMDa','A2vLCa','DJiTDge','BIbZB20','BMnLCW','4Ocuihr3BW','CMuGkhi','qu5rv0q','EKvhv0C','Fdf8mG','BwHpthK','EwHbwgW','nhb4idK','DgnO','AMvJDgu','AwnLihC','Bw9KsxC','ihnRAxa','AwrIt3G','A3mG','A0jIt3a','teTYsuu','BvvttuS','Dg87Fq','mNb4o2i','zwfKywi','tfLRs04','yMLUzgK','v3nqyKS','CNvUDgK','qwztBgi','yM9Yzgu','Dxm6nta','nYWUocK','DLnOwgO','D2jqs0u','Ds1YB28','vurQug0','B3nWywm','o3bHzgq','t29etNy','o21HCMC','DhLSzq','rNjyuMC','mJu1ldi','zhrOoJm','DenVBg8','AfvlB0u','otK7y3u','B246B3a','mhGXna','nIa2Bde','qwXHtva','B3qGica','uhvjrgq','u3D6whi','lNnRlw4','mJu1lde','r3rfsfa','zxjLzca','EIdIGjqG','BxmGD2K','z2XRDKy','ks4G','rNfvwgu','uhzjuxy','lcbnzxq','BM90zq','oJe3ChG','zMfRzq','B3rLE2y','yMXVy2S','A2DYB3u','lcbZDgu','nIWYmZG','A2Tgqvy','yxmSBw8','lhrYyw4','mcbMAwu','CZOYChG','uxP6BvG','wwrfrxa','BMq6Dhi','z2H0oJG','EdTIywm','t2fiwwe','uNvPwNq','zcbYz2i','pt09','zxaGDgG','zxa9iJa','ChG7Agu','zgTPDa','zwXLy3q','B3qGD2K','DhnNufy','oJK5oxa','BvbxtMK','D2L0y2G','BgvJDdO','ntuSmtq','q29WEsa','icbOB28','mtTJB2W','Fdj8mW','zhrO','igL0ige','nhWWFde','tM8GugG','zsbZDhi','CI1YDw4','pgnPCMm','EdPUB24','EvjVD3m','DdPZDge','zLL3rgC','DgvYo2y','EMruq3e','rMHfDKO','CMvNAxm','D2HPDgu','vfH5zem','otLWEdS','B2SGEwu','DMfSDwu','zw50rwW','DgfSBgK','oNrYyw4','BMCGzM8','AwXKlca','CNjVCG','Aw5ZDgu','Dgv4Dee','zZOXmha','BMqGEwe','yKzTuKq','tefzrvi','Dhj1zsi','uevTv3C','mcWUntu','lwfSAwC','ys1LC3a','uxndt0y','ywrKCMu','D0HmD1u','Dg46Ag8','s2zRAuW','DMvYBg8','B2fKzwq','x2DHBwu','DgXL','xtO6ywy','BNrLBNq','DMPUCLe','vxb2Exi','zxi7zM8','zxi7D2K','lxDLAwC','lxbHBMu','y29UDgu','CgvKigi','zgf0zsa','DMvYE2m','zwn0zwq','BgLNBG','C3bLzwq','CenVBNq','rK9rrgy','ywn0Axy','ndzWEdS','idzWEca','r21eD2m','z1LuqKy','r2PyDLa','zgLZCgW','FdeW','AMvJDhm','BdPUB24','ueLlC0O','D3jVBMC','BNrPyxq','B2r1Bgu','BwvHBG','D2vPz2G','C2v0rMW','B0D0zgO','C0HZyxm','BgPirxi','BM5gwxG','lJuGms4','CxvLCNK','yKPjuxO','zxG7z2e','C3vYDMu','zxmGBM8','BNrPBwu','mhb4idu','uxPrtgO','yxjKlxi','zgnqtvy','DdOWo28','Bhnnu0K','oMzPEgu','DxjPBMC','B25Tzxm','zMvLDa','y1j3v0e','idrWEca','thDHwxe','qu5eihq','C29SDMu','u0Tjzha','y2TNCM8','uwLjveW','DfDPzhq','Duf6uxC','AffdBg8','BNn0yw4','BwLSEtO','vMrZzxG','CvHHAvC','BM90ig0','CMfTzsa','C2vLBNq','o2jHy2S','Dxm6nNa','o2jVEc0','vLbeD04','B3C6Aw4','C3bHCMu','BI5OB28','zMLLza','ANv1u1y','CM9VDa','CgfKzgK','Fdv8mta','ywXPz24','DgTpC1e','u0PKvfu','BvjxEfi','ihDOAwW','ig9Mia','C2fUzq','rejuuLq','yxPftuG','AxrOie0','BwLU','lc40nsK','CgfYzw4','kdiYChG','zgf0zsG','Dg87zMK','C3qY','igLZigy','C3nPBMC','mhHKna','zg93BG','lwnOzwm','CML0o28','zfv2u2C','ntTWB2K','BNrKz1q','z2LUlwW','nsWUmdu','mtiGmJe','s3jlAfC','B25PBNa','idaGlYa','zujbtwm','r0fytMu','EuHrrwC','DhjHBNm','teLwrsa','zYbZDxm','tvDqrxa','oJHWEdS','yY0XlJu','B2zMC2u','Aw5Nida','y2fTzxi','zwDPC3q','CerLsva','yu1pq2u','ugzUy3m','B3j0lGO','ihrOAw4','y3qOCYK','rLLAq3y','nJiWChG','vuTVwKG','DxD0u1O','q1v6quS','ztOXm3a','u1PhBuK','Esbku08','BLr5Cgu','B2fYza','idi0iJ4','if0GywW','q2zkCvC','C3rVCfa','ChGGC28','zwqGDgG','vgr0Ew8','ndGZnJq','AgfUzwq','yw1PBhK','rfngtfG','mcaWida','tKDZBgi','A291Bfy','yxjT','mNWXFdm','wMLJyuG','yMzKwNi','iIbZDhK','yw5JztO','C3LUyW','D2fZBu0','Fdb8mW','txvSDgK','mJeSmti','sw5ZDge','owqIihm','Fdf8mti','Bgu9iMm','BePvz2u','CMvMDxm','u3fUtfK','DxvYuLm','n3b4o3a','yxjHBMm','u25HChm','iIbZDhi','zsb0Age','B3i6CMC','rMjlrfi','BwvZC2e','DMvJmG','r3rQwMy','D2H5','BMDZ','Aw9UoMW','nc00lJu','BKz2zKS','A25iCfy','CMTqBge','lc40ktS','sMjuCeq','Cg9Z','tMjRCeq','i3n3mI0','we5AyMC','BNqXnG','yMfJA2C','ANvZDgK','EdOYmtq','z2jHkdi','ksWGC28','DYGWida','oIjjBNq','BMu7Cg8','EdTOzwK','lc4WnsK','zs1JB2W','CMvUDdS','B2XLig4','mduPlda','v2LKDgG','s3rqyMW','vK1nCeG','nNWWFdC','zYbPBNq','Ag9VAW','sLvOsK4','wNvireS','BNq7yM8','BIbtruu','qvzqt3O','CgnIzwO','whDpr1G','vKzXAui','AgvHCca','zw5Jzsa','ugXHEwu','AgLSzsa','DgeTyt0','EdTIB3i','oJOTD2u','zgvMAw4','Fdf8nhW','mca0ChG','Fdb8mte','Bunyz2C','CML0Dgu','yxbWBgK','DdOXmha','BhfwzeK','vMTiqNu','te5tChq','zwy1o2i','zJy0','DhvlqLi','w2fYAwe','AhjLzG','qxrgAxi','DwLSzci','AwX0zxi','iI8+pc8','vwTJzLy','EKjIDuW','oJiXndC','oNjNyMe','sK11Exi','BM8Gtw8','tMvQCLm','wwvAq28','yNvMzMu','B3bLBG','zxi7z2e','CYb1BNi','zxDnzMO','CMvKDwm','AgfIBgu','zMztB3O','B3vYy2u','ywnRz3i','yM9KEq','B25ZB2W','EdTWywq','qwv1BKK','psiXlJu','v2PIwLO','nwmWidm','svfnzNK','q2Hqr0C','B3zLCMy','CMf3wwe','Cfn4uKK','C2XPzgu','lwjVDhq','rwrUvxe','ig9Uia','Bwzgwhy','qNjHy2S','zwf0zva','ntuSlJa','y2f0','zhvKEeC','DxnLtg8','zMy3ytK','y2vUDgu','Dg9WoI0','Dc1ZAxO','CZ0NC2S','tuzHugW','ohb4o3a','AxjZDca','B25NpG','wgT3yxG','yvLjreG','Bw92zq','A3TOzwK','BLL4y1e','tw9KA2K','FdH8nNW','BNrxAw4','CI10Ahu','nYWUmty','ztSTD2u','DhjVA2u','i2zMogy','DgfU','Au56txe','ChjLDMu','qKXnCgW','sgvHCa','lc4WmJu','nsb1As0','Axq7Fq','AgLKpq','DMLLDZO','nxWXnhW','wKLmrwW','BM8Gz3i','CgvYBw8','mtaSmte','yMD1vxO','zuL0zw0','y2uSq28','we5xrNi','zgf0yq','ktT9','CMfUihK','kZb4mJK','D2fSA2K','CxD3sxu','sMTjBxy','vg90ywW','zxzLBNq','ifnRAwW','oMjSDxi','CMvMAxG','ign1yMK','Dg9ju08','ChqRmhG','weHcsMy','rvnqigi','lwXPBMu','BgXLzca','zw5NDgG','Aw5KB3C','y29MB3i','ChH6uwi','CgXPzxm','zNbrz0G','wgzZuxO','zxmGB2y','zMXLEdO','r0DFr2e','v0fswI0','qvv0thm','zw5K','tw91C2u','nhb4ide','z2H0oJe','lwjYzwe','igfJDgK','DxjHtwu','oJyYDMG','ys1IB3G','AwqGCMC','vgHPCYa','yw1LlGO','Ag90CYa','y2XZCg0','zMy8l2i','khrOAxm','swLsAxO','v2vItw8','DhjPyNu','zeDZA0K','CIb0Agu','BNq6Aw4','icaGDMe','DgHLBG','ywDLigG','qvbvoca','zM9YBq','ExjXsMG','B246ywi','DxDTAYa','y2uTAxq','yxbWBhK','z2H0oJm','ieaG','z2HiC1e','zsbLDMu','AxmGBwK','CwPWBfe','Bg9N','CM93CW','igSWpq','rvHpBNa','s0veC00','Cw1pywq','t3vQyLi','AfzSANO','zYb3Agu','y29WEq','BwvHBNm','z3jVDw4','CgTYEhq','BMTLEsa','BhKGCg8','BNqTC2K','B2f0CYa','oI40o30','u2vZC2K','EI51C2u','Bwv0ywq','A1zmvfq','BurWtMq','CNnJCMK','igLZihi','BgvMDdO','B20GDgG','yxmGBM8','B3DUkq','B3G9iJa','revyrMi','yxjKlwG','AgfKB3C','DcbUBYa','iJ5gosa','vgv4Da','B3jKzxi','yw5LBca','igvHy2G','C3bSyxK','Awq7z3i','iJ5ZywS','psiXnJa','BMq6CMC','Awr0AdO','D29YBgq','ELb5wxm','mJq2ldi','ALfIq0K','rM1wzNO','C2v0','oJeGmsa','As1TB24','nsiGC3q','ys1ZDY0','CgXHEwu','yYGXmda','iZaWmdS','C0vHC2u','zw51','vvDnsY4','zgLMzG','Bgv4lxm','EI1PBMq','AhvKlwm','yxjN','yMvSB3C','vgHLigC','zhL6t1e','igrVy3u','DtmY','CKLlyvu','rNzKzKS','Aw1HDgK','ywn0','uM5pA3O','EwTuwuW','vKvmDKK','v0zTqu8','zMLrAfa','DxLotfu','yNL0zxm','lIbeAxm','lxnOywq','zvjLy3q','sxzXyMe','DgG6nNa','zhvSzq','lwe9iG','Aw4TD2K','B3rYB2W','Axr5ic4','nsaWlti','CMvK','z2H0oJy','C2STy2e','mxW0Fdy','tu1OtMG','CgXPzxi','Ag9VA0y','imk3igzV','tg9VAYa','B25Nig8','zuvHr2m','y2GUC3K','ig9U','EtPMBgu','BNrZoMe','svzficG','zsbPBNm','ChG7Cge','zxnWia','DgvYiJ4','ktTIB3i','Ag9VA3m','A2fttKO','kde1mcu','B3n0Awm','CMvMCW','BgPbu2m','zwLVDuW','B0HlueS','BNrRwKO','CMf3ugK','yxbP','A3mUBgu','rxH6ww4','thP4AMW','s2PlsMO','Dgf0Dxm','zw9Itu4','BufTy28','msiGDMe','DhzpAK4','B21Tyw4','CgX1z2K','zcb3yxm','igHHy2S','u2vLBK0','EujuvKO','ENnswxC','vwvdqKm','nZKSmtq','mNm7Cg8','qM90','BhTWB3m','iZHKn2e','DgvOEM0','Ag9VA1a','ic4Znxm','oYi+u24','Dw5KoNq','BguGy3G','ywjSzsa','DYbNBg8','vxjQEM0','zwrnCW','yvPgwuS','BMCUcG','s2zpy2y','BMfNzxi','yxvSDa','z0vHqvC','DKX6D2G','DhK6lJq','Dev4qNy','zw1LBNq','AhvMB1e','BM9Uzq','AuXJsee','AcbMAwu','BLv0wha','BxbSyxq','Ewf3t2y','Fdb8nhW','B2LUDgu','oMLUAgu','CgfYyw0','vxnRsK4','C291CMm','BMvS','DMvKia','zYbSB28','Aw4TyM8','zMfTr1m','mJTZDhi','phn0CM8','C2vSzIa','iJiIihm','zMLSDgu','CMuG','BwvTyMu','A2vKpsi','ihjLywm','oMf1Dg8','uuXwwK0','C2HovLq','mJKWChG','t1jhrg0','yxbWzw4','s2nXCva','B3nPDgK','BhqGC2K','yM9KExS','qw1AuKq','C3r5Bgu','Ec1OzwK','nxb4o2i','DhbHC3m','BNrMyuW','ldeWnYW','CMvTB3y','svHyqwm','DxjHvge','phnWyw4','D3DMrvy','CMvHy2G','yw1PBMC','pgj1Dhq','CMf3','CMfUz2u','y3qGzM8','AwzPzwq','DNbnAfO','vwTbB2e','AM1rwNq','yMHxq2S','DgHLiha','wMDuCKq','y2S7zM8','u3bLzwq','lwH1zhS','AwzLig8','C3CYlwi','iJ48l2q','sg9VA3m','tg1gzLK','AfDHAu8','lxjHzgK','se9Ivwm','iNjVDw4','svvKqKG','ztTWywq','tfjfBLm','vgfTCgu','lGOkswy','yxGTD2K','lxnWzwu','CM9JAxq','CgfUzwW','ihvUAxq','zKX2u1O','oInIzge','u2vSzwm','oMjYzwe','DdmY','CNnVCJO','CYb3zxi','vMfSDwu','lZ48l3m','BgLNBI0','BhzLr2e','sufJAvy','ig9Yihq','yMXLig4','CM06BM8','zNjVBsa','o2jVCMq','ldi1nsW','zKrfDha','mJbWEca','oJe7BwK','zgvYoJe','C2v0vwK','EfvjvLi','uwXgCuO','C2STCMe','yxmGzMK','ys1Tzw4','rwves2q','lwrPCMu','zsGPlMu','ie9o','AgLZig0','CJOJzJC','sfrnta','zxrZigm','zwfJAge','DMGGlsa','sgLSu3u','tMfTzq','oMXPBMu','rgLHz24','BwuOkq','CYXTB24','wfHOuwC','mduPo30','Dde2','AxrPywW','Awv3igK','Aw50BYa','yw1L','B3vUzci','y3vYC28','u0LbzeC','A2v5','iJ54pc8','Cgvbzg8','Cc1SzW','veHgBwS','y3rPB24','owq7y28','AxnWBge','Bgu7zMK','yMX5lMK','y2fUDMe','B206mxa','lxyYE2e','B3j04OcM','mdTMB24','AgvHCei','swrOsfi','Awr0AcK','lJGYktS','DuzzsMu','BgLKzxi','ihnVigu','ruHYD1e','CxjMzgW','nZCSlJq','CMDIysG','zMnby3K','EY13zwi','y1zQzLq','B2jMqG','DMvKpq','zdPYz2i','CKnVBg8','q2jbvuO','CM9SBgu','z2v0vwK','DhrVBJ4','sgvPz2G','Cg9YDca','lxnWywm','D1LXAwC','DwHuB2i','B3b7zgK','CM91BMq','ChrLENu','C2LU','Cg9ZDe0','BwuUx2C','BvbftM8','lgnHBgm','vuHUr3m','u3HkAMO','DgXLCW','Cfzus1O','lYbZChi','swv3wgq','uKfqueu','BI13Awq','vKvsu0K','zxfLuMS','z2nLru0','ztPUB24','yM94lxm','B250zw4','ldi0mIW','vhb2uuO','s1zcugO','CM5PBMC','vKzvAMm','yNfND3q','verWz2u','yxqSCMC','Bw4TDgK','A3mGD3i','CI5QCYa','q2nVveW','mJiZmtCYmgPTshfYvG','rw90u1m','BNqTD2u','vgHHDca','ihvUyxy','CgfJzsW','Cw5ItKW','r3PwzMC','Dw5UAw4','rJyGywW','uMvZzxq','ldi5lc4','mtGGnIa','u2nYzwu','B3i6iZG','igP1Bxa','oJi1ChG','tureEMq','DZOWidi','CJT3Awq','iJ5dB3a','BgvYkZa','C2XPy2u','C3CYlwy','nIKSAw4','lL9Nyw0','yKHzENm','DhLxzwi','z2v0rwW','u2fRDxi','qK9xwhy','zw50','DcbPBMO','igq9iK0','psjZywS','y3jLyxq','BwuGlsa','uMvWB3i','zgL2','igfYztO','DKj2sem','BwvUDc0','ie9IC2m','thjtB3C','A3LYEuO','z1LcCfm','C2nYAxa','ztOXmxa','uwPwqNu','ihbHBMu','yMfS','tNPRv0W','AdO5nNa','ns00idC','tg9QC2S','mhb4o2y','zxnWyxC','BgW+','DhnPzgu','oM9Wywm','BI5FCNu','vwTyrhe','qwDWsvC','zKDqt3u','nYWUmZu','Eg9ZsuG','DgLVBJO','yxa6nha','ihvPlw0','EwX6rLq','jtTIywm','CMfJDgu','C3rHCNq','AfvxAvq','EfjXz3e','BLHwv08','uNvpvwy','ywXSoMK','DMPqtMK','yM9VBgu','Aw1HCcW','BhbZtgm','Cg9Zqxq','zMvruNm','BgLKihi','zxbIt2C','shf3r0q','Ag90','uLHZy1e','mtC0nJm1vvjssfnq','FdeYFdy','DxjLzey','EhruCgS','Aw1L','sKnQtw8','ifbpuLq','qNbhsMe','AxmGBM8','AwXKlG','ywLUE2y','EtPNCMK','yNvPBhq','t2zM','DhLWzq','zdDHotK','z25HDhu','yvH4AvK','yvjdALq','DgGGB3i','Dw5PDhK','y2r6Cue','qMPprMO','zKDQB0W','oJm0ChG','mte0oda1vhbJAM1t','zxH0','BwL6wKi','zNGIihq','lNnRlw0','zu9pDuO','sMfMDuK','Bwf4lwG','DfDqzw0','C3bHy2u','zuPWquW','CMnLoIa','DgvYzwq','ywrKAw4','BLnzyLC','CMvKige','igj1Dca','shPlC2W','vNzYsKy','wwnMBu8','Cu5Ayvm','Dxv3uwG','z2LMEq','DujKEMi','EcaXmNa','ndC0odm','BNnVBge','tLfUr24','BwuUCMu','z2fTzsa','ywL0Aw4','zKLfyvC','ihLLDca','zhmGB24','AgvYAxq','CMvWzwe','vxPutMq','iZDLzta','B24GAwq','mxW3Fda','BgvY','Fdn8ma','BwvTB3i','BwXLy2e','icaXlIa','odm3mdCYv3PJrhDt','B24+','vxzyyMi','iey3ica','svH0uue','r0Lgyxq','AwDODdO','yxbWzxi','Dc5wywW','D09sBKe','ic8G','B2DVlxm','zxrouwO','mNb4o3O','DxjHDgu','qKX3CLC','B2jIEsa','CMvMzxi','ihbVC3q','z2LUigC','Cd0Imc4','zM9UDc0','ChG7y3u','y2D5r1m','zdP0CMe','zwn0Aw4','ihbHC3m','wvzrrwm','BMfIBgu','ChbLCIa','pc9IpG','DgL0Bgu','DuLwBu0','zxnJ','lc45kq','CJPYz2i','DMLLDYa','Bu5yshG','yM90q28','pJWVzgK','ywnLlem','svj2EMy','zM9UDa','zcWGBM8','nIWUotu','EhL6','zxqUia','AgLKzgu','B2f2s0i','m3W4FdC','wLDfzNy','B2f0mZi','Bg9NBY0','BNrZoM4','AxjLuhi','Ec1ZAge','BfLJANC','zwXVywq','zhjVCc0','lxDYyxa','pZWVC3a','vu95ue8','B246y28','mda7Bwe','BgrPBMC','BNrYB2W','EuDQD1i','EgvKo3q','CeHvCM4','uu9QB2u','yM9fwhu','zwqU','v0Lds0S','qMHhBMy','u1HvrMu','ltqTnY4','v091Awq','C3zNpG','CZOXmha','zEkaPJWVCW','swfSCvq','Awq9iNm','Cg9PBNq','uMvZB2W','Ehnju2u','zxHWB3i','z3fswxa','EfzquKq','mdT9','BgvYigG','mNz3ldy','BMDL','EgDPrva','m3WXnNW','zwqGysa','Ag92zxi','Axb0ige','igfWCgW','ChG7B3a','tgz4vNi','CM9SBgi','ysbNyw0','A2LUza','z3TMB24','B3CGkey','zfbste8','t3n2A3m','zxnZiey','y2HLy2S','zJDLzwy','oInMn2u','AwnOigy','CMvZCYa','mhGYna','tLbJDMy','zw50zxi','ue1HthC','rfbOELm','Dg91y2G','B29M','B24Gzge','uwjtENi','B3PRDeS','yxrJAc4','CgfJAxq','mNb4o2G','Axr5','DgfN','CMeTC3C','zwXHChm','CuzVsMW','AxqTC2m','BM8GCMu','uMvMDxm','shHmCuy','AxPuywO','o3DVCMq','mcaWige','wxjkCMK','lK1Vzhu','zM8Qksa','CNvUBMK','B25JBgK','D1zYsuu','tMj6EM4','B3j5','zgrPBMC','Bw4Ty28','sw5Zzxi','o2zVBNq','w2rHDge','zsbYzxa','B3nZihq','C2v0sxq','uNvqEgO','mxW3Fdm','vNb0wwC','BJPJzw4','owm5o20','C2LUz2W','zxnVBhy','rwDUAwq','rvnqoIa','D2fYBG','rKPisvm','AguGAg8','ztT0B3a','DwjLBxy','Aw5Uzxi','tunwDfq','yt0IC3q','DMLZDwe','DMvK','AMX1vMy','yxv0BW','zNjHBwu','lxjLCgu','mNmSyMe','B2XZoJO','DgHLigW','lM1UlwW','CgDlAvO','tKjHyw4','rgTIsw4','EdTMBgu','uNbJqLq','v2fSAYa','z2fWoJe','ELjetgS','ig1HBMe','oJrWEca','CMvWBge','ChG7yMe','rxPJCfm','AwWYq3a','B2TLlwW','igL0igK','A0zxq1q','DgLHDgu','u1jnrhG','zYbxzwi','AwXLzcW','Fdj8nG','DgvK','ywXSzwq','BeHVv2O','zxbSywm','AvHZrfa','yhbSyxK','zxiTCMe','zgf0ys0','oJCWmdS','ug9Kq3m','ywrKrxy','tIbIEsa','l3LHDYK','Aw1Lr2e','oM1PBIG','qKvhsu4','zxrmzwy','sLPRwe4','y0XIAfe','C2vYlxm','vfHPtvO','yxm+','oJeYChG','BKflweS','yNrNuhq','CNLlBLy','y21K','Dg9gAxG','mda7y3u','sufPAM0','BwfYz2K','DxrVo3O','lwvZCc0','q0jgDue','Aw50zxi','ugHVDg8','ihnRAwW','uxfqt1G','AgL0zs0','lwL0zw0','yxjTzwq','idqGnc4','yxrLigy','zw4Gyw4','DNDsCLO','ALrfs0K','AgfZtw8','ig9MzG','y2XLyxi','tgPgD1e','mIiGC3q','C3LUy3m','yw1Ligy','Bg9YoIm','o292zxi','tgLZDa','z1v5sxO','zYbIBgK','DgHLig8','icaZlIa','Eca4ChG','Ec1KAxi','cLSGif0','A2v5vxm','DcbPzd0','yNL0zuW','zeDTCLC','CJTNyxa','C2v0sw4','AwvK','BIbYzwW','BMCGB24','vhjbC2O','shPsq3m','y2fWDhu','qMvWq2m','suzWAg0','igHLyxa','qNfrsfy','zw50igK','CMeTBwu','zsbWCMu','zMfPBgu','zNbZ','sffKuue','pgLUChu','twnnwuq','DcbZCgu','DgLUzYa','yM90CW','C2nHBge','BgLUzwm','zcbHCYa','BwfW','lxDPzhq','odbWEdS','jwnBC2e','E3bVC2K','CMvIDwK','EwnSvMC','q3LjsuC','zwn0Aw8','EIaOsw4','CMDPBI0','BMC6nha','y29SB3i','zNvUy3q','sfveigq','CMLNAhq','zw5LBxK','zw50tgK','qLbovLO','Bgu9iMi','DxnLCI0','rw5LBwK','Aw5PDgu','B3v0idK','zxjYB3i','iNnUyxa','CxzIDe0','DhDsv2S','CI1LDMu','EdTHy2m','yY1IzxO','CeHSsha','lxrYywm','icaO','tvDJBhq','qNLjza','B3i6','ywnPDhK','y2XVC2u','B3jRu3K','zNPIueC','tg9VA0a','whHqsvq','CZPJzw4','Bgv4oJe','A2v5CW','Cgv0ywW','ywXSvMu','BLrjqKq','y2XPzw4','Bd0Ii2y','uMfUz2u','iIbMAwW','rhzWANm','yw5ZCge','shbpEeC','zMLYC3q','BgLZDa','B250lwy','Dw1Uo2e','CMfUy2u','AhnPuxq','ihzPysa','ksbVCIa','s0L2CLG','BNqTzMe','zhrdswu','AxmGD2G','yK1dzw8','tg9VAYS','zIb0Agu','ywT1CMe','BNrLCJS','BNqZmG','C3rYAw4','B3nLCY4','zM9Sza','mxWWFdi','q2PYsvm','vvDnsYa','DxbKyxq','Dgv4Dge','DZiTyM8','yxnZtMe','zhfysuy','y3nZvgu','uuPJrva','EtOUndu','igHVB2S','igDHBwu','BxfACwS','ie1ciea','ic8GrJy','Fdj8nhW','D0rhqxG','zwz0oMe','q29WAwu','uhnStuK','A2uTBgK','ChG7Fq','vvjbx1m','Bg9JywW','zgTWzee','idqTnc4','nJq2o3a','ztPWCMu','Dg9YqwW','nsK7','uMvJDa','i3nHA3u','Ewf3','CMeTzxm','q2L0B3K','mtjWEca','r1vRzMS','kde4ChG','BwfUEq','Dc13zwK','AKLxEei','BcWk','CNqP','ndmSmtC','q01c','DJiTy3m','z014s1K','DxDTAW','ktTJB2W','zwvMntS','D3jPDgu','ysbtA2K','y2XPCgi','AM9PBJ0','zhmGWRCG','DMvhyw0','C0HPthG','iNDPzhq','D2HVBgu','z2LUoJa','veHNswC','r25Mshe','A1v3uNa','o2nVBg8','CMXHyMu','Dg9WoJe','AwDUlxm','B25LoYi','nJTMB24','zwLNAhq','wgLfthu','BM5VDca','mtjWEc8','qwv4B3G','ifnxlvC','C28GC3q','BNnPDgK','r2fTzq','C2v0qxq','vLvJzKu','y0r0D2O','BfD6wfa','zvbSDwC','mcbYz2i','DeHLAwC','C3rLBMu','Ec8XlJq','B3r0B20','Fdz8mty','yKjZB1C','C28GDgG','EMu6mte','ys5ZA2K','sgDHwvu','B2jMsq','ndySmJm','mJbWEcK','D257B3a','BgvUz3q','mNW5Fda','DMC+','C2STBwq','AhHoB1O','zw1Pzxm','wLz5tLG','kdi0lde','EwvYqw4','Dw5Kzwy','yMeOmJu','zw5LBwK','sgvHCca','tMTWAeu','zsGP','icdcTYaG','EvrHCa','yMfZzq','CJTZDhi','DdPUB24','z2v0q28','DMD7D2K','DYbLEha','Ag9Ksw4','EgDfB0q','EKPRCeq','svPrz3e','owqPida','C3bYAw4','mtbWEca','BMrVDY4','Ds1JC3m','Axb0igK','yxrPB24','zY4G','DMLLD0i','zvn0CMu','i2zMnMi','mhGYma','C2L6ztO','BM9UztS','mcuGBM8','zvjfueG','CxHUD0O','ChGGmdS','B3nL','zMLSBa','ihjNyMe','C2STDMe','i2zMzdq','y29Kzq','BfDHCNO','CJPWB2K','mhb4ic0','BLzptK8','r3jRrNi','nZq4mZy','z3bdDe0','wNDhDva','BJWVyNu','BLzrywO','CcbHBMq','tNzRtxe','CgvZia','Bw91C2u','u3zUs0C','yMvHCMK','zgTPDc4','ugf0Aa','Dwj7zM8','igzVCIa','CK5WruG','Aw5Ozxi','DxjH','wun2vMW','z3jHyG','yw4+','sMPfseu','iZjHmgy','BgfZDem','lwzPCNm','kdiXlde','icHZB3u','nIaXoci','CgHVDg8','vw5PDhK','CJOXChG','Bw47Fq','wfDlEfK','mtyZode0D2P2CujA','BwuUy3i','y3juAui','Bg9HDhm','cNjLywq','AMz0DMG','BwuGBM8','yxLIAxy','mtjWEdS','Aw50Aw4','ignOzwm','A09czfm','Ehn4tLa','y2fSlMq','tuSGq08','ChvZAa','B3i6Cg8','ihDYAxq','BJ8PoIa','C2L6zq','CNj7y28','yxrHBJi','zM92','mhHLoa','zsDZig8','Aw5cyw4','zNH2reu','s09Zsvq','yw55ihC','zMXVyxq','qvfjC28','sfb0EMq','CM1VBMS','zM92igi','AfbVuNy','CMvWB3i','lM1Ulw0','Euzbquy','suvQqwG','A2vKihu','Dg9Y','DeXPBg4','zeHxBMG','qu5pveG','nsWXndm','psjIywm','AwrKzw4','AgvPz2G','vg1XEvK','CMv7zM8','zsbUB3q','r3nqzu4','mYWXnZC','DeHLywW','BK1HBMe','B2jM','yMvWyui','ysGYndy','nYK7y3u','vvjSEuC','B2XZE2y','C3Plvhi','CKnVBNq','lcbUBYa','z2v0rMW','C2v0ida','mIWUnsK','BNnWyxi','EK9Rsxu','n2vLzJu','r2XRz3K','B3vUzcW','ztTTyxi','Esb0Exa','Bgv4oJa','zxzLCNK','v19F','D28GzMW','CKnVDw4','Et8Pica','wgnkrLO','EsbMywK','DuTUqLG','yxjLige','rhz2shm','C2STy3q','mhG1oa','z2vY','yZfKo2m','ndHMqvziq3i','DdPTAw4','qLvpCgC','B2jqzLK','lxDLyMS','ENPou2O','pgiGC3q','zt0Iy28','wNncruG','veLwrq','Chr1CMu','v29YBgq','B3v0','BNvTyMu','Aw50E2q','C1bnqLe','mJGPo30','A2rzEwW','Ag9ZDa','phn2zYa','BMnL','BMvJyxa','AxmGyNu','AxPLoJe','z2v0sw4','BhK6Aw4','DhPprMy','D2f0y2G','seHuD0y','B2T6CeS','ywjZ','igrPzca','z3juuMC','Ag1ru0W','we9QtKi','CfbMuuW','mhGZma','AguGBgK','ms41ihu','r0PVt3K','mtbWEdS','zxLL','Bu1iAwK','r2TUwMm','BgfIzwW','yxnZAwy','sLDjEuS','AgvHCfu','wxb2vuC','DgG6mZq','C3rYB24','yMX5lum','D3jHCha','v2nSC24','DgG6mdS','z3z2she','CMfUC3a','yxrnCW','rNjdAKu','DLbQwe0','l2j1Dhq','q3DisMK','lGOk','CNqGEwu','tg1cy3u','yxK6zMW','zuf0rMK','B3vWig8','lwfWCgu','Aw9UoMy','zxH0z0S','AdOZmNa','CMfUzg8','nYWUnYK','BIaUC2S','igLUC3q','ig9Mihy','nsK7Dhi','Bw4TBwe','Bw9YEvq','uMXizMm','r0HcExC','B2jwugq','C29SAwq','zsb1C2u','ignYB3m','EcXJywW','rviGD2K','CufTBe4','ALbly1C','Ahq6nZa','CM5HufG','uurQrhq','zZO0ChG','q25Zr2S','Dw1Uo2C','oNbYzs0','oMjYAwC','zsbNyw0','CJOWo2i','sePuse4','A01XtMG','DfzOCxO','Bc5ZAg8','tgjHCKW','mxb4ihm','ntuSmJu','BNjJwu0','zw1WDhK','zw50lwm','DLzPAu8','C2vSzwm','vxnqyMC','ufKGve8','ysGYntu','otK7Bwe','y29Z','zYaVigO','AM9PBG','B2zMihq','z0TkyNu','tvntuLe','zxiIlci','ugn6BhC','wNfIEgW','Dgv4Dem','ihrOAxm','BwfUywC','B25Ligi','zgvYlxi','yxLWEKq','iJeIig0','B25TB3u','ChG7yM8','BMC+','vKLt','zw1VCNK','mdCSmtu','BhKUieG','vernx0C','Aw5KzxG','AY13B3i','DxrVo2y','ihDHCYa','ihbHDgm','mda7y28','oInMzJy','ENznsMy','CNq7ywW','psjTBI0','CfPJCge','BgfZDeu','q3rothG','B3bHy2K','rJGGlYa','ywqGzNi','zhrOoJu','u3LlrNi','DgX7zgK','ztT0CMe','t0nuy2S','psiXlJi','oJi2ChG','DxjJzq','BMnLigy','lNnRlwm','CgfKrw4','oYi+u3a','yM90Dg8','C3aTy3y','DxjYzw4','mxWYFdq','z2vYlIa','rw5LBxK','zdTYAwC','BMfTzq','zxr3B3i','y29ZB1G','CMrgrNu','q2XPCgi','wfbOywC','BJ0ICM8','nxm0idi','wxvwv2K','wKzgDwe','ANzrv0m','rM5izxy','zhPVCxC','D2PgseO','Fdz8nq','tvD2A00','AfnYrKq','CgHtChO','DcbTyxq','q0v4EKu','A3vYyv0','zM9UDdO','ChqGsvm','DwKTBw8','zhvYAw4','yw5Nzsi','B206nNa','yxjKE2i','Cg9YDge','C3bSAxq','EtPIBg8','DMuGBwe','o29Wywm','Bg9VA3m','DNmGC24','ig9Uy2u','keLUC2u','rLbty28','Fde3FdG','r2zuze4','zwyYo2y','zsb3ywW','tLbdx0m','v2fQEw8','s1vsqs0','DKnxsfy','uMfKyxi','wuTbzum','BgqGB2y','zvbYB3a','DvLwzfy','re9nq28','DgG6mJK','suzcqMq','mtu3lc4','BgfZDfC','ohb4ide','Aw5Qzwm','AxnHyMW','zxjZyc4','DgX4BvG','zZOXmxa','ig1VDMu','uNvUDgK','BgLUzvq','CMrLCJO','igzHA2u','BgX3yxi','u3rYAw4','idyWCYa','ywSTD28','BIbPzNi','DhLSzt0','yMuGCMu','Aw1Lsxm','ywrPDxm','ig90Agu','ntCXndaWswHcwwP1','iefdveK','idaGmJq','D2LUzg8','icaOywm','rxz0rM0','Bxm6y2u','twX4vhe','vxDLBhO','AguGCMe','AvnHDNG','sgrjAKO','AxvZoJK','mtTTAw4','Ate2','ChG7CMK','AxnmB2m','rgnJr3m','tLD6C0C','vMrhqwO','ihrOzsa','oJfWEca','veDqBem','y2DOq08','D21pBgG','qwzQy1e','tg9VAW','zMzZzxq','Agv4','y2vKigi','zefzr3u','yNzgBxm','vKf0Bfi','y2GGDgG','o2n1CNm','BgW6Aw4','C2vYAwy','Dxm6mta','mJrWEdS','qu1HDvm','y2X1C3q','zwqGlsa','zgLUzZO','zgLMzMu','ChrLza','z2fWoJG','reTSC1y','zw50o2i','DcaWida','DcbYzxa','o3rVCdO','zxj7y28','BMC6mca','sLLrDMe','oIiIo3a','v0PtsNy','lNnRlwi','B2jQzwm','AwrLBNq','DMvYC2K','BgLNBJO','ktTIB3G','zwvKig8','Ec8XlJm','zxG7zMW','q3ntqw0','zxG6BM8','igLUlwy','DhLmCgC','zw5HyMW','otbWEdS','zxiTC2u','o3DPzhq','ywnLlwK','DcbIzwu','zwz0ic4','AxzLo3C','z0TSAeW','vMjcy3q','AxvZoJC','D0rWyva','wMLKBva','ywjSzwq','sgXut1G','AxvZoJi','mIWYosW','DhKGAw4','DerHDge','EdTHBgK','nNb4o2i','CxHIvLi','ic40nxm','igfYzsa','AxHLzdS','ihjLCg8','qvnirhq','CM9WywC','C3bHBG','DfDfsvy','EdTMB24','qwn0AKG','Aw5ZDge','BMqU','wwPgq1y','m3W4Fdu','Fdn8mq','C29Syxm','vuXdBgi','D3DQvKG','AgvHza','Dhz0z3u','CM9Rzs0','AwqGzg8','CMvKihK','AwzYyw0','l2nHBNy','sMHsz3m','qxPjDvq','y1rjyxy','B2DVE2q','mdaWo3u','Awr0Aa','ENHhBMG','BI1PDgu','CMPLCKu','zuvSzw0','tuPZAeS','AgDwz1u','rJKGDhC','C25HCa','vgHLigG','yMrHowm','y2Xpy1e','Dw5PDa','B250lxm','CMfKAxu','A2v5q28','C3rYB2S','yuzYB20','EgDVy3e','C0fJD2G','qxbWBgK','phbHDgG','wvnvuwe','icbVzMy','u2nPDM8','CNvAC28','ign5psi','Dg9tDhi','zxjHia','yw1Ltwe','EsbHigq','iokaLcbUBW','CNvUCYa','rvL5CeS','CgjmD0K','psjWywq','AwDPBMe','AwvSzca','yxjKlM8','A2nfzfq','y29SCW','CY1VCMK','u2T2DfK','mhGXma','DgG9iJe','Bw92zvq','EuXnq0q','EKHisuK','psjZDZi','B2f0nJq','ugztqMC','t2zMC2u','tNvXyum','BK5LDhC','CZPUB24','yMvS','B246zMK','yxjLBNq','CI1Yywq','AwnOlJW','sNvTCca','mNb4o20','yxjPys0','CwPQsfK','BML0Awe','B25VC3a','A2v5vhK','mcu7','vwnStfC','C2STBM8','C2fUzsa','zcb0Agu','igvUzca','Dgf5CYa','C2HHzg8','ywqGzMe','y3vnugy','BMfSrNu','icaGica','nhb4o3q','y0r5qMy','vKuGDG','iMjHy2S','mcbVzIa','qMnNt2i','z2H0oJi','D1bprwS','zMykrJG','B3rVBK4','DgG6mJG','mNb4idC','DciGC3q','ywLSzwq','sgvHBhq','y29Uy2e','suPtvNG','DMTwC3O','B3jPz2K','Cu5Rs2O','tfrlq0e','BNuTCM8','DxjHpc8','Fdf8mhW','x19ZywS','AhrUzxm','tKzjvhy','sw5KzxG','C3zNE3C','ic0GDgG','Bg9ZzxS','BNrLEhq','zgvIDwC','y3Lhrwu','yM5vzgy','Edjfna','B2jMrG','z2XVyMe','CNvhCLu','igjSB2m','vgHLiha','nZq4mJK','uwLXr3i','BYbHihq','oJa7zgK','B21eDLy','Bwf4','vgzuDxe','zgf0yxm','yxiTDgG','pgnHBNy','vMvwseW','AevTvwy','EgXWAeq','y2u7y28','ywj7zgK','quXSsK8','wfjvCKm','yM94zxm','uLL5BNm','BNq4','nsWUmdG','q3D3wM4','yw1LihC','BNrezwy','lwHPBNq','yZK7BwK','ihbHC3q','zsXdB24','yvLlzei','icb3CMK','oInMnMu','vuDuEwW','oMnLBNq','pc9WCMu','EMP5vvC','oIm4zdC','z2v0q2W','EenjB2O','nZCSlJu','ig5VDca','Be5RwKG','Aw5N','C2vYDcK','sg9IquG','rKrXqMe','DgfNtwe','q2Dczuu','Fdb8n3W','zdTTyxi','BYa3nsW','Aw5WDxq','rvnqig8','EgvJzwy','kdaSmcW','zsbTAw4','ig9MzNm','ndy7y3u','weT4t1m','zcbKAwe','tMv0D28','nhW1FdG','yxqG','t0LyEM8','DMDnDwe','qxrbCM0','BM9Yzwq','y29UDhi','zxi6mdS','zwfKE2q','oM5VBMu','CeLcug8','zwfKEsa','q3vZywu'];_0x2be4=function(){return _0x1963ed;};return _0x2be4();}
