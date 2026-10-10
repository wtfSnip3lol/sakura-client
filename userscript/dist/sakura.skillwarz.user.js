// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.0.2
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

(function(_0x25a8a1,_0x2ee38c){var _0x21f3b5=_0x188f,_0x309788=_0x25a8a1();while(!![]){try{var _0x388128=parseInt(_0x21f3b5(0x4c8))/(-0x1d0+0x37d+-0x1ac)*(parseInt(_0x21f3b5(0x3cc))/(0xdce+0x1*0x16a9+-0x2475))+-parseInt(_0x21f3b5(0x32f))/(0x182b+0x70f+-0x1f37)*(parseInt(_0x21f3b5(0x4b4))/(-0x1*-0x1df5+0x1f*0xf+-0x1fc2))+parseInt(_0x21f3b5(0x224))/(-0x2673+0x3d5+0x22a3)*(parseInt(_0x21f3b5(0x448))/(-0xef5+0xe3f+0xbc))+-parseInt(_0x21f3b5(0x2a9))/(0xe27+-0xce0*-0x2+-0x27e0)+-parseInt(_0x21f3b5(0x48c))/(-0x3*-0x1f9+-0x1*0x1713+-0xc8*-0x16)+-parseInt(_0x21f3b5(0x201))/(0x4*-0x7ed+-0xc5e+0x2c1b)+-parseInt(_0x21f3b5(0x1fa))/(0x3*0x2b+0x5*0x7c6+0x2755*-0x1)*(-parseInt(_0x21f3b5(0x1af))/(-0x1*0x108a+-0x83*0x1+0x1118));if(_0x388128===_0x2ee38c)break;else _0x309788['push'](_0x309788['shift']());}catch(_0x2ad2df){_0x309788['push'](_0x309788['shift']());}}}(_0x1019,-0xc1547+0x74a3*0x7+0xf651c),((()=>{'use strict';var _0x28a463=_0x188f,_0x1edc91={'IGFqw':function(_0x16e878,_0x85d87b){return _0x16e878!==_0x85d87b;},'Uyicn':function(_0x4a1e00,_0x776914){return _0x4a1e00!==_0x776914;},'yjNiY':function(_0x12bc93,_0x437c48){return _0x12bc93(_0x437c48);},'xISVX':function(_0x4affda,_0x1fbc3f){return _0x4affda===_0x1fbc3f;},'cShUv':_0x28a463(0x3ac),'fjVPq':'sakur'+_0x28a463(0x371)+'v2','IloeG':'style','qUGAI':'KFfxv','ITtZG':_0x28a463(0x2e4)+_0x28a463(0x2e5),'CYqAx':function(_0x4204e7,_0x5c7f83){return _0x4204e7!==_0x5c7f83;},'nhKJd':function(_0x2caa86){return _0x2caa86();},'PBwnq':function(_0x57c6ac,_0x240c30){return _0x57c6ac(_0x240c30);},'UUirQ':_0x28a463(0x25f)+_0x28a463(0x27a)+'\x20pane'+_0x28a463(0x1d7)+_0x28a463(0x1b4),'mktKZ':function(_0x4661d8,_0x1e19cf){return _0x4661d8+_0x1e19cf;},'paiBB':'\x20obje'+_0x28a463(0x42b)+'\x20','gbjrn':function(_0x17f428,_0x3c34e8){return _0x17f428>_0x3c34e8;},'NPzwB':_0x28a463(0x4d2),'JeiuP':_0x28a463(0x1f7)+'8a','fKbje':_0x28a463(0x234)+_0x28a463(0x2b4),'pDRSZ':'armin'+'g\x20·\x20','JKSMh':_0x28a463(0x492)+'ice\x20w'+'hile\x20'+'walki'+'ng\x20/\x20'+_0x28a463(0x316)+_0x28a463(0x3b6)+_0x28a463(0x21d)+'ping\x20'+_0x28a463(0x255)+_0x28a463(0x279)+_0x28a463(0x3b7)+'ld\x20is'+'\x20whic'+'h.','IejdW':'ddPoT','ryuUi':';font'+'-weig'+_0x28a463(0x282)+'0','qvToE':function(_0x530812,_0x47ec9a){return _0x530812+_0x47ec9a;},'HnMMs':'no\x20re'+_0x28a463(0x325)+_0x28a463(0x387)+_0x28a463(0x1d3)+_0x28a463(0x1b9)+_0x28a463(0x302)+'t\x20inj'+'ected'+'?','oYduG':_0x28a463(0x329)+'The\x20p'+_0x28a463(0x32d)+_0x28a463(0x43e)+'t\x20bee'+_0x28a463(0x401)+_0x28a463(0x47a)+'\x20sinc'+_0x28a463(0x37c)+'talli'+'ng.\x0a','XafvN':_0x28a463(0x2a4)+'d\x20the'+'\x20game'+'\x20page'+_0x28a463(0x29a)+_0x28a463(0x44d)+'watch'+_0x28a463(0x26c)+_0x28a463(0x1e2)+_0x28a463(0x410)+'in.','izXSY':'posit'+_0x28a463(0x260)+'ixed;'+_0x28a463(0x36b)+'12px;'+_0x28a463(0x441)+_0x28a463(0x377)+_0x28a463(0x480)+'x:214'+_0x28a463(0x3c3)+_0x28a463(0x2b8)+'dth:m'+_0x28a463(0x1d4)+_0x28a463(0x21f)+_0x28a463(0x3ed)+'max-h'+_0x28a463(0x482)+':78vh'+';','vcIXl':'backg'+_0x28a463(0x422)+_0x28a463(0x3ec)+'c1d;c'+_0x28a463(0x2a3)+'#f7ee'+_0x28a463(0x2e2)+_0x28a463(0x23e)+_0x28a463(0x383)+_0x28a463(0x2e6)+_0x28a463(0x319)+_0x28a463(0x259)+'43,17'+'7,.5)'+_0x28a463(0x426)+'er-ra'+'dius:'+_0x28a463(0x42f),'WhmRo':function(_0xf14103,_0x54ea59){return _0xf14103+_0x54ea59;},'mNJdI':function(_0x4b2e26,_0x3359e3){return _0x4b2e26+_0x3359e3;},'vDqqD':_0x28a463(0x4a6)+_0x28a463(0x2b0)+_0x28a463(0x3c4)+'lwarz'+_0x28a463(0x247),'dgjZK':_0x28a463(0x1ee)+'\x20id=\x22'+'sw2-s'+_0x28a463(0x43d)+_0x28a463(0x471)+'le=\x22c'+_0x28a463(0x2a3)+'#bda9'+'c9\x22>w'+_0x28a463(0x481)+'g\x20for'+_0x28a463(0x31a)+'\x20fram'+_0x28a463(0x294)+_0x28a463(0x1cc),'AlTCy':_0x28a463(0x291)+_0x28a463(0x2ae)+_0x28a463(0x220)+'-copy'+_0x28a463(0x471)+_0x28a463(0x239)+'ispla'+'y:non'+_0x28a463(0x3c1)+'gin-l'+_0x28a463(0x3c0)+_0x28a463(0x30e)+_0x28a463(0x4ab)+'ound:','RqoRf':_0x28a463(0x291)+'on\x20id'+_0x28a463(0x220)+_0x28a463(0x32e)+_0x28a463(0x499)+'\x22back'+'groun'+_0x28a463(0x447)+_0x28a463(0x1a5)+'ent;b'+'order'+':1px\x20'+_0x28a463(0x32c)+_0x28a463(0x31c)+'(255,'+_0x28a463(0x296)+_0x28a463(0x3e2)+');col'+'or:#f'+_0x28a463(0x1a6)+';bord'+'er-ra'+'dius:'+_0x28a463(0x366)+'addin'+_0x28a463(0x207)+_0x28a463(0x1d2)+_0x28a463(0x3dd)+'r:poi'+'nter;'+'\x22>x</'+'butto'+'n>','TYULI':'<butt'+_0x28a463(0x2ae)+_0x28a463(0x220)+_0x28a463(0x1f4)+_0x28a463(0x471)+'le=\x22b'+_0x28a463(0x4ab)+_0x28a463(0x2bd)+'trans'+_0x28a463(0x4a0)+_0x28a463(0x26f)+'der:1'+_0x28a463(0x2eb)+'lid\x20r'+'gba(2'+_0x28a463(0x244)+'3,177'+_0x28a463(0x1aa)+'color'+_0x28a463(0x454)+_0x28a463(0x2c7)+'order'+_0x28a463(0x236)+_0x28a463(0x35e)+_0x28a463(0x3ee)+'ding:'+'4px\x209'+_0x28a463(0x300)+_0x28a463(0x2c8)+_0x28a463(0x2cc)+_0x28a463(0x2fd)+_0x28a463(0x43a)+'hot\x20('+_0x28a463(0x44b)+_0x28a463(0x38e)+'n>','DvDoY':'<span'+_0x28a463(0x284)+'sw2-h'+'int\x22\x20'+_0x28a463(0x466)+'=\x22col'+_0x28a463(0x3e9)+'d7a99'+'\x22>F9\x20'+_0x28a463(0x285)+_0x28a463(0x40c)+_0x28a463(0x458)+'king\x20'+_0x28a463(0x3ae)+'intin'+_0x28a463(0x345)+'umpin'+_0x28a463(0x35c)+_0x28a463(0x477)+_0x28a463(0x2ab)+'ield\x20'+_0x28a463(0x1db)+'ich.<'+'/span'+'>','wtEhF':'</div'+'>','miRkk':'<pre\x20'+'id=\x22s'+'w2-ou'+_0x28a463(0x436)+'yle=\x22'+'margi'+_0x28a463(0x1cb)+_0x28a463(0x209)+'g:10p'+_0x28a463(0x313)+_0x28a463(0x287)+_0x28a463(0x38c)+_0x28a463(0x28b)+_0x28a463(0x360)+_0x28a463(0x2ef)+'auto;'+'white'+'-spac'+_0x28a463(0x44f)+'-wrap'+';word'+'-brea'+'k:bre'+_0x28a463(0x1dc)+_0x28a463(0x295)+_0x28a463(0x21a)+'herit'+';','EgyTO':_0x28a463(0x388)+'x','xLhJX':'#sw2-'+_0x28a463(0x3e7),'oISMQ':function(_0x1df528,_0x189f7e,_0x254472){return _0x1df528(_0x189f7e,_0x254472);},'AFIok':function(_0x1dcd8b,_0xb8fc58,_0x3ec3a1,_0xe995f){return _0x1dcd8b(_0xb8fc58,_0x3ec3a1,_0xe995f);},'XWLPC':'obfF','HXkAQ':function(_0x22d187,_0x2023da){return _0x22d187^_0x2023da;},'wBlSl':function(_0x2a60db,_0x21718e){return _0x2a60db|_0x21718e;},'qvAEI':function(_0x316aea,_0x56610b){return _0x316aea===_0x56610b;},'aQeXA':_0x28a463(0x3a9),'PogYU':function(_0xdd9540,_0x315b7f){return _0xdd9540|_0x315b7f;},'YGqbJ':function(_0x183f02,_0x30824b,_0x2e62c4,_0x489bd7){return _0x183f02(_0x30824b,_0x2e62c4,_0x489bd7);},'qUkjZ':function(_0x2bb041){return _0x2bb041();},'WYDAy':function(_0x13db09,_0x5b1d45){return _0x13db09&&_0x5b1d45;},'baTQO':'GQnXC','pypdu':_0x28a463(0x24a),'Ziqqk':function(_0x161661,_0x31b750){return _0x161661+_0x31b750;},'wFXAO':function(_0x1c72ce,_0x25ae38){return _0x1c72ce+_0x25ae38;},'ySprh':'\x20\x20(','sntHp':'\x20\x20\x20co'+_0x28a463(0x3bf)+'\x20','wtXRi':'yes','yfsun':'\x20\x20\x20ty'+'pes\x20','cUqBl':function(_0xbe90a2,_0xf01581){return _0xbe90a2!=_0xf01581;},'AWLHu':function(_0xa3d6ac,_0x200b8e){return _0xa3d6ac+_0x200b8e;},'exHfl':function(_0x336bbd,_0x53f6bd){return _0x336bbd+_0x53f6bd;},'YIPNL':'hooks'+_0x28a463(0x372),'UOeXZ':_0x28a463(0x1f5)+'ied','GYoFz':'xHMdL','KmBob':'The\x20h'+_0x28a463(0x3b4)+_0x28a463(0x1f9)+_0x28a463(0x1cf)+_0x28a463(0x4a4)+_0x28a463(0x26b)+_0x28a463(0x213)+'date('+');\x20no'+_0x28a463(0x2e0)+_0x28a463(0x3a2)+_0x28a463(0x262)+_0x28a463(0x49f),'peQwW':'\x20@\x20','HNUkn':_0x28a463(0x363)+_0x28a463(0x34f)+_0x28a463(0x2e7)+'\x20\x20\x20\x20\x20'+_0x28a463(0x1ec)+'lue\x20\x20'+'\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20'+'raw','zzVPj':_0x28a463(0x4ae)+'r','WifWj':function(_0xdddaaa,_0x524278){return _0xdddaaa/_0x524278;},'qLHGm':'sbqQd','fRLWY':_0x28a463(0x30b)+'ngs','HMeUd':'\x20\x20!\x20','tjdZw':function(_0x1413be,_0x4867ae){return _0x1413be+_0x4867ae;},'RUHUv':'color'+':','UhmwM':'cmd','mmvCX':_0x28a463(0x1f2),'DxrEw':'error','kxmuA':function(_0x3bc7c2,_0x4d6d38){return _0x3bc7c2<_0x4d6d38;},'phbbK':_0x28a463(0x4c2),'aJhRx':function(_0xfd74a,_0x11f23f){return _0xfd74a===_0x11f23f;},'pnxSe':function(_0x43f633,_0x5ad0ca){return _0x43f633!==_0x5ad0ca;},'BjQgA':_0x28a463(0x2e1),'IgUMG':'DJeau','kDZkz':_0x28a463(0x45b)+'ined','QvcPt':function(_0x442662,_0x1dc7ae){return _0x442662!==_0x1dc7ae;},'ziCGq':function(_0x2a0da0,_0x1d9117){return _0x2a0da0!==_0x1d9117;},'xbNuy':'jWLWp','KRVoi':'funct'+'ion','zkvTH':function(_0x1b55ab,_0x43179d){return _0x1b55ab===_0x43179d;},'UVgBK':_0x28a463(0x45e),'EiRQt':'Runti'+_0x28a463(0x1f0)+_0x28a463(0x382)+_0x28a463(0x351)+')','ItrPL':function(_0x43db95,_0x2c517f){return _0x43db95+_0x2c517f;},'kSlAP':'addre'+_0x28a463(0x369),'khJdz':_0x28a463(0x3d0)+_0x28a463(0x3b5)+_0x28a463(0x45a)+'0x','DMute':function(_0x51f223){return _0x51f223();},'fQOsD':_0x28a463(0x33d)+_0x28a463(0x449)+_0x28a463(0x3a5)+'ty\x20in'+_0x28a463(0x24d)+_0x28a463(0x3b9)+'\x20reac'+_0x28a463(0x24c)+_0x28a463(0x33a)+'Runti'+_0x28a463(0x1f0)+'solve'+'Game('+_0x28a463(0x343)+_0x28a463(0x267)+'indow'+_0x28a463(0x48e)+'al','LtoEe':'u16','UCwQy':_0x28a463(0x411),'kjFbL':_0x28a463(0x1d1),'vjYgL':function(_0xa4d13e,_0xb5e25e){return _0xa4d13e!==_0xb5e25e;},'TsqXK':function(_0x4de3bd,_0x164544){return _0x4de3bd|_0x164544;},'RXzHU':'CGdsa','atNpn':function(_0x22f3aa,_0x2b8308){return _0x22f3aa&_0x2b8308;},'slEEB':_0x28a463(0x392),'KsaPQ':function(_0x3b87a3,_0x1a4e1e){return _0x3b87a3|_0x1a4e1e;},'pbnkx':function(_0x128445,_0x28f31f){return _0x128445===_0x28f31f;},'Hqkyn':function(_0x63c39f,_0x31ff70){return _0x63c39f||_0x31ff70;},'bOdqD':function(_0x4c43db,_0xce0bfe){return _0x4c43db^_0xce0bfe;},'ldHaT':function(_0x6a1895,_0x5ccb07){return _0x6a1895+_0x5ccb07;},'DvmWg':'5|0|2'+_0x28a463(0x452)+'3|6|8'+_0x28a463(0x413),'IWwtd':function(_0x2d6e5e,_0x3dff37){return _0x2d6e5e===_0x3dff37;},'DFrRb':function(_0x4cd0d3,_0x3b2c25){return _0x4cd0d3&_0x3b2c25;},'BqVEU':function(_0x2ce6e7,_0x47301b){return _0x2ce6e7+_0x47301b;},'LiVvh':'obfI','socPz':function(_0xa4d14b,_0x7d1bdb){return _0xa4d14b+_0x7d1bdb;},'tPlIU':function(_0x419267,_0x587ca7){return _0x419267!==_0x587ca7;},'zJWrU':_0x28a463(0x4cc),'ZAnWq':_0x28a463(0x406),'eAQLt':'Updat'+'e','LuEop':function(_0x264295,_0x5740e9){return _0x264295===_0x5740e9;},'yvIrO':_0x28a463(0x3a3),'Rxoso':function(_0x8c22c2,_0x251355){return _0x8c22c2(_0x251355);},'PDkgO':_0x28a463(0x2bf)+'Insta'+_0x28a463(0x264)+_0x28a463(0x261),'vytkt':_0x28a463(0x4a2),'dqpYJ':'mRlgv','abIjW':function(_0x5128e3,_0x3e19cd){return _0x5128e3+_0x3e19cd;},'XzFYD':_0x28a463(0x23d)+'=','uOdqn':function(_0x357b5a,_0x4cd60b){return _0x357b5a+_0x4cd60b;},'WbGow':_0x28a463(0x3f8)+'t','QMbup':'unity'+'Game','WIOBL':function(_0x395fca,_0x378f5e){return _0x395fca!==_0x378f5e;},'FwdcC':'hHYCJ','lytmi':_0x28a463(0x21c),'wNZEv':function(_0x4c3404){return _0x4c3404();},'ydELZ':function(_0x4f1c46,_0x2cc131){return _0x4f1c46+_0x2cc131;},'WgwOJ':'captu'+_0x28a463(0x3fa),'yOBUU':'\x20obje'+_0x28a463(0x1ef)+'\x20but\x20'+'read\x20'+_0x28a463(0x3f2)+'lds.\x20','QtiQA':_0x28a463(0x48a)+_0x28a463(0x467)+'e.HEA'+'PU8\x20n'+'ot\x20re'+'achab'+_0x28a463(0x3fb)+'a\x20win'+'dow.u'+_0x28a463(0x40a)+_0x28a463(0x1f8)+_0x28a463(0x3e0)+_0x28a463(0x418)+'me/ga'+_0x28a463(0x1b5),'CnFkl':function(_0x49710b,_0x4dd781){return _0x49710b===_0x4dd781;},'AsNKn':function(_0x14a4a9,_0x5d03e7){return _0x14a4a9+_0x5d03e7;},'qBSGC':_0x28a463(0x3ce)+_0x28a463(0x2ff)+'hooks'+_0x28a463(0x1f5)+_0x28a463(0x4ac)+_0x28a463(0x361)+_0x28a463(0x457)+_0x28a463(0x3d1),'rbxMa':'(this'+_0x28a463(0x2a7)+'hodIn'+'fo*)\x20'+'->\x20vo'+_0x28a463(0x378)+_0x28a463(0x1e4)+'\x20matc'+_0x28a463(0x2f3)+'s\x20bui'+'ld,\x20s'+_0x28a463(0x2f5)+_0x28a463(0x289)+_0x28a463(0x40b)+'oked.','wTEPJ':function(_0x4ce8d1,_0x2880e2){return _0x4ce8d1+_0x2880e2;},'rpvJM':'%c[sa'+_0x28a463(0x27a)+'\x20Skil'+'lWarz'+_0x28a463(0x4c4)+'rt','EYDKO':function(_0x5abe4a,_0x8c108d){return _0x5abe4a+_0x8c108d;},'qUUYA':function(_0x1d498a,_0x616c3a){return _0x1d498a!==_0x616c3a;},'OaHRn':function(_0x5c62ff,_0x5973b7){return _0x5c62ff+_0x5973b7;},'HpXpC':function(_0x5717af){return _0x5717af();},'PVEDm':'NrzBv','SBFhl':_0x28a463(0x20a),'LAild':function(_0x24f80e,_0x4a7336){return _0x24f80e-_0x4a7336;},'AlIrP':function(_0x179c89,_0x26313d){return _0x179c89+_0x26313d;},'MoDZa':'%c[sa'+'kura]'+'\x20SW-P'+_0x28a463(0x35f)+'\x20ACTI'+'VE','GuEHj':function(_0x1e9588,_0x29aac5){return _0x1e9588+_0x29aac5;},'NubRz':'obfB','CcxKX':_0x28a463(0x29d)+_0x28a463(0x4da)+'ler','LOXzQ':'Healt'+'hScri'+'pt','skphS':'DOMCo'+'ntent'+_0x28a463(0x221)+'d'};var _0x402765=location['hostn'+'ame']||'',_0x1ded60=/(^|\.)www\.crazygames\.com$/[_0x28a463(0x246)](_0x402765),_0x6d9db1=/(^|\.)games\.crazygames\.com$/[_0x28a463(0x246)](_0x402765),_0x2c5413=/(^|\.)crazygames\.com$/['test'](_0x402765)&&!_0x1ded60&&!_0x6d9db1,_0x297a73=_0x1ded60?'porta'+'l':_0x6d9db1?'wrapp'+'er':_0x28a463(0x32b)+'r';if(!_0x1ded60&&!_0x6d9db1&&!_0x2c5413)return;var _0xcdf081='#ff8f'+'b1',_0x5ed9a7=_0x28a463(0x465)+_0x28a463(0x1d0)+'w_v2',_0x18d1db=_0x28a463(0x4d3)+'KURA-'+'SKILL'+_0x28a463(0x2f2)+'BEGIN'+_0x28a463(0x46d),_0x16eae5='===SA'+_0x28a463(0x1e3)+_0x28a463(0x210)+'WARZ-'+_0x28a463(0x431)+'=';if(_0x6d9db1){window[_0x28a463(0x288)+'entLi'+'stene'+'r'](_0x28a463(0x47f)+'ge',function(_0x488855){var _0x4b0975=_0x28a463,_0x29ee81=_0x488855[_0x4b0975(0x3e4)];if(!_0x29ee81||_0x1edc91[_0x4b0975(0x245)](_0x29ee81['__sak'+_0x4b0975(0x1d5)],_0x5ed9a7))return;try{if(window[_0x4b0975(0x4a0)+'t']&&_0x1edc91[_0x4b0975(0x1bf)](window['paren'+'t'],window))window['paren'+'t'][_0x4b0975(0x3a1)+'essag'+'e'](_0x29ee81,'*');if(window['top']&&window['top']!==window)window[_0x4b0975(0x301)]['postM'+_0x4b0975(0x45d)+'e'](_0x29ee81,'*');}catch(_0x2ac2f8){}}),console[_0x28a463(0x1f2)]('%c[sa'+_0x28a463(0x27a)+'\x20SW-W'+_0x28a463(0x3d9)+'R\x20ACT'+'IVE\x20('+_0x28a463(0x439)+_0x28a463(0x25a)+')',_0x28a463(0x2b3)+':'+_0xcdf081);return;}if(_0x1ded60){console[_0x28a463(0x1f2)](_0x28a463(0x25f)+_0x28a463(0x27a)+_0x28a463(0x423)+_0x28a463(0x1c0)+_0x28a463(0x473),_0x1edc91['AlIrP'](_0x1edc91['RUHUv'],_0xcdf081)+_0x1edc91[_0x28a463(0x41b)],{'host':_0x402765});var _0x5cb8f2={'set':function(){},'command':function(){}};function _0x287b4a(_0xdde625,_0x577756){var _0x189c84=_0x28a463,_0xe99576={'__sakura':_0x5ed9a7,'kind':'cmd','cmd':_0xdde625,'arg':_0x577756};try{if(_0x1edc91['xISVX']('MujLe',_0x1edc91['cShUv']))_0xe07a3d&&_0x283d6b[_0x189c84(0x2b1)]==='F9'&&(_0x25ad76['preve'+'ntDef'+'ault'](),_0x1edc91[_0x189c84(0x1b7)](_0x422def,_0x189c84(0x269)+_0x189c84(0x315)));else{var _0x16b12b=new BroadcastChannel(_0x189c84(0x359)+_0x189c84(0x456));_0x16b12b[_0x189c84(0x3a1)+_0x189c84(0x45d)+'e'](_0xe99576),setTimeout(function(){try{_0x16b12b['close']();}catch(_0x3dd89b){}},-0x171f+0x1e17*0x1+-0x5fe);}}catch(_0x2225ea){}}function _0x28cde6(){var _0x243522=_0x28a463,_0x2902db={'uXvon':function(_0xec43f7,_0x2aea39){return _0xec43f7+_0x2aea39;},'HWQry':_0x243522(0x409)+'\x20read'+_0x243522(0x2f1)+_0x243522(0x1e1)+'ork\x20u'+'ntil\x20'+_0x243522(0x2d1)+_0x243522(0x49a)+_0x243522(0x3ea)+_0x243522(0x307)+'osed\x20'+_0x243522(0x3ab)+_0x243522(0x443)+_0x243522(0x4d0)+'ose\x20n'+_0x243522(0x2c5)},_0x3d1908=document['getEl'+_0x243522(0x1df)+'ById'](_0x1edc91['fjVPq']);if(_0x3d1908)return _0x3d1908;if(!document['body']||!document['body'][_0x243522(0x470)+_0x243522(0x380)+'d'])return null;try{if('mRVkv'!=='mRVkv')return null;else{if(!document['getEl'+'ement'+_0x243522(0x34b)](_0x243522(0x359)+_0x243522(0x371)+'v2-cs'+'s')){var _0x337440=document['creat'+_0x243522(0x309)+_0x243522(0x3b8)](_0x1edc91['IloeG']);_0x337440['id']=_0x243522(0x359)+'a-sw-'+_0x243522(0x2dc)+'s',_0x337440[_0x243522(0x3dc)+_0x243522(0x3db)+'t']='#saku'+_0x243522(0x497)+_0x243522(0x3b2)+_0x243522(0x2c0)+'itial'+'}',(document[_0x243522(0x460)]||document['docum'+'entEl'+'ement'])[_0x243522(0x470)+_0x243522(0x380)+'d'](_0x337440);}return _0x3d1908=document[_0x243522(0x249)+'eElem'+'ent'](_0x243522(0x23f)),_0x3d1908['id']=_0x1edc91[_0x243522(0x41d)],document[_0x243522(0x420)][_0x243522(0x470)+'dChil'+'d'](_0x3d1908),_0x3d1908;}}catch(_0x448487){if(_0x1edc91['xISVX']('KFfxv',_0x1edc91['qUGAI']))return null;else _0x17b541['warni'+'ngs'][_0x243522(0x2d3)](_0x2902db['uXvon']('game.'+'Modul'+'e.HEA'+_0x243522(0x2bc)+_0x243522(0x328)+'achab'+'le\x20vi'+_0x243522(0x472)+_0x243522(0x1d9)+_0x243522(0x40a)+_0x243522(0x1f8)+_0x243522(0x3e0)+'ityGa'+'me/ga'+_0x243522(0x1b5),_0x2902db[_0x243522(0x379)]));}}function _0x5b0bb7(){var _0x4c2304=_0x28a463,_0x15e681={'jFsdR':_0x4c2304(0x3bc)+_0x4c2304(0x4a9)+'6|4','PLAUJ':_0x1edc91[_0x4c2304(0x4d7)],'HEbIl':'copy','Jdejc':function(_0x17b8a9){return _0x17b8a9();}};if(_0x1edc91[_0x4c2304(0x4b3)](_0x4c2304(0x475),_0x4c2304(0x3a7))){var _0x55c4b3=_0x1edc91[_0x4c2304(0x2ca)](_0x28cde6);if(!_0x55c4b3)return _0x5cb8f2;if(_0x55c4b3['datas'+'et'][_0x4c2304(0x34e)])return _0x55c4b3[_0x4c2304(0x34e)];try{return _0x1edc91[_0x4c2304(0x30c)](_0x227735,_0x55c4b3);}catch(_0x13c103){return _0x55c4b3['datas'+'et'][_0x4c2304(0x34e)]='1',_0x55c4b3[_0x4c2304(0x34e)]=_0x5cb8f2,console['warn'](_0x1edc91[_0x4c2304(0x3d3)],_0x1edc91[_0x4c2304(0x3d8)](_0x4c2304(0x2b3)+':',_0xcdf081),_0x13c103),_0x5cb8f2;}}else{var _0x3b44c1=_0x15e681['jFsdR'][_0x4c2304(0x4c3)]('|'),_0x1c4d1c=0x5*-0xca+0x3b*0x55+-0xfa5;while(!![]){switch(_0x3b44c1[_0x1c4d1c++]){case'0':if(!_0xb0f5a6[_0x4c2304(0x420)])return;continue;case'1':var _0x33f1be=_0x397562[_0x4c2304(0x249)+_0x4c2304(0x309)+'ent'](_0x15e681['PLAUJ']);continue;case'2':_0x3babdb[_0x4c2304(0x420)][_0x4c2304(0x470)+_0x4c2304(0x380)+'d'](_0x33f1be);continue;case'3':_0x33f1be[_0x4c2304(0x35b)+'t']();continue;case'4':_0x33f1be['remov'+'e']();continue;case'5':_0x33f1be[_0x4c2304(0x1a8)]=_0x395fc5;continue;case'6':try{_0x2355ae[_0x4c2304(0x403)+'omman'+'d'](_0x15e681['HEbIl']),_0x15e681['Jdejc'](_0x23f60b);}catch(_0x1ee542){}continue;}break;}}}function _0x227735(_0xcdec2b){var _0x23668a=_0x28a463,_0x5b498e={'iDyGp':'Copie'+'d','hmkwU':function(_0x3daa29,_0x2ab5b5){return _0x1edc91['qvToE'](_0x3daa29,_0x2ab5b5);},'uxYkD':_0x23668a(0x3cb),'qxEwy':function(_0x25e7e5){return _0x25e7e5();},'rnQxn':function(_0x4924b5,_0x558643){return _0x4924b5||_0x558643;},'JtVEF':_0x1edc91['HnMMs'],'CLbPl':'\x20\x201.\x20'+_0x23668a(0x2b5)+'rmonk'+'ey\x20is'+'\x20not\x20'+_0x23668a(0x425)+_0x23668a(0x3b6)+_0x23668a(0x22a)+_0x23668a(0x3f6)+_0x23668a(0x1bd)+'origi'+_0x23668a(0x1c4)+'ame.\x0a','YTcCb':_0x1edc91['oYduG'],'WGOEs':'\x20\x203.\x20'+'Both\x20'+'sakur'+_0x23668a(0x3f4)+'llwar'+'z.use'+_0x23668a(0x400)+'AND\x20t'+_0x23668a(0x240)+'d\x20dia'+_0x23668a(0x487)+_0x23668a(0x432)+_0x23668a(0x29c),'fbMDJ':_0x1edc91['XafvN'],'rPRTD':_0x23668a(0x23f),'VltaB':_0x23668a(0x359)+'a-sw-'+'v2'};_0xcdec2b['style'][_0x23668a(0x2b6)+'xt']=_0x1edc91[_0x23668a(0x445)](_0x1edc91['mktKZ'](_0x1edc91[_0x23668a(0x385)]+_0x1edc91['vcIXl'],_0x23668a(0x375)+_0x23668a(0x496)+_0x23668a(0x3fc)+'i-mon'+_0x23668a(0x254)+_0x23668a(0x2af)+_0x23668a(0x3f3)+',mono'+_0x23668a(0x2d8)+_0x23668a(0x468)+'shado'+_0x23668a(0x2df)+_0x23668a(0x266)+'0px\x20-'+'20px\x20'+'#000;'),_0x23668a(0x3ef)+'ay:fl'+_0x23668a(0x36d)+_0x23668a(0x1b3)+_0x23668a(0x4a8)+_0x23668a(0x43b)+_0x23668a(0x3f0)+_0x23668a(0x3cd)+_0x23668a(0x427)+'idden'+';'),_0xcdec2b[_0x23668a(0x32a)+'HTML']=_0x1edc91[_0x23668a(0x3d8)](_0x1edc91[_0x23668a(0x445)](_0x1edc91['qvToE'](_0x1edc91[_0x23668a(0x445)](_0x1edc91['WhmRo'](_0x1edc91['mktKZ'](_0x1edc91['mNJdI'](_0x23668a(0x29e)+'style'+_0x23668a(0x22e)+_0x23668a(0x200)+_0x23668a(0x33b)+_0x23668a(0x3e6)+'order'+_0x23668a(0x3f9)+'om:1p'+_0x23668a(0x424)+'id\x20rg'+'ba(25'+_0x23668a(0x276)+_0x23668a(0x293)+'.3);d'+'ispla'+'y:fle'+_0x23668a(0x228)+_0x23668a(0x4d6)+_0x23668a(0x3bb)+_0x23668a(0x212)+'s:cen'+_0x23668a(0x437)+_0x23668a(0x314)+_0x23668a(0x206)+'to;\x22>',_0x23668a(0x39c)+_0x23668a(0x462)+_0x23668a(0x2b3)+':'),_0xcdf081)+_0x1edc91[_0x23668a(0x464)]+_0x1edc91['dgjZK']+_0x1edc91['AlTCy']+_0xcdf081,';bord'+_0x23668a(0x46c)+_0x23668a(0x2b3)+':#2a0'+'f1b;b'+_0x23668a(0x248)+_0x23668a(0x236)+_0x23668a(0x35e)+'x;pad'+'ding:'+'4px\x201'+_0x23668a(0x348)+'ont-w'+_0x23668a(0x482)+_0x23668a(0x2c6)+_0x23668a(0x3dd)+_0x23668a(0x28e)+_0x23668a(0x491)+_0x23668a(0x308)+_0x23668a(0x27d)+'N</bu'+_0x23668a(0x311))+_0x1edc91['RqoRf'],_0x23668a(0x3e5)+'>'),'<div\x20'+_0x23668a(0x466)+'=\x22pad'+'ding:'+_0x23668a(0x386)+'2px;b'+_0x23668a(0x248)+'-bott'+'om:1p'+'x\x20sol'+'id\x20rg'+_0x23668a(0x3c6)+_0x23668a(0x276)+_0x23668a(0x293)+'.18);'+'displ'+_0x23668a(0x2c9)+_0x23668a(0x455)+'p:6px'+';alig'+_0x23668a(0x4d5)+_0x23668a(0x4ca)+'nter;'+'flex:'+'0\x200\x20a'+_0x23668a(0x49d)+'>')+_0x1edc91[_0x23668a(0x39f)],_0x1edc91['DvDoY']),_0x1edc91[_0x23668a(0x232)])+_0x1edc91['miRkk']+(_0x23668a(0x270)+_0x23668a(0x482)+_0x23668a(0x3fd)+_0x23668a(0x40d)+'\x20repo'+_0x23668a(0x331)+_0x23668a(0x4b0)+'his\x20p'+'anel\x20'+_0x23668a(0x1b0)+_0x23668a(0x231)+_0x23668a(0x3ff)+_0x23668a(0x347)+_0x23668a(0x346)+_0x23668a(0x37b)+_0x23668a(0x1ed)+'loads'+'\x20—\x20no'+'\x20cons'+_0x23668a(0x453)+'eeded'+_0x23668a(0x4b2)+_0x23668a(0x47d)+_0x23668a(0x273)+'empty'+',\x20Tam'+'permo'+'nkey\x20'+'is\x20no'+'t\x20inj'+_0x23668a(0x4c9)+'g\x20int'+'o\x20the'+'\x20cros'+_0x23668a(0x204)+_0x23668a(0x21b)+_0x23668a(0x37b)+'rame.'+'</pre'+'>');var _0x49cb13=_0xcdec2b[_0x23668a(0x33e)+'Selec'+'tor'](_0x23668a(0x388)+_0x23668a(0x4d1)+'s'),_0x10d9eb=_0xcdec2b['query'+'Selec'+'tor']('#sw2-'+_0x23668a(0x3cf)),_0x9e538a=_0xcdec2b[_0x23668a(0x33e)+'Selec'+'tor'](_0x23668a(0x388)+'copy'),_0x1218df=_0xcdec2b['query'+_0x23668a(0x1a9)+_0x23668a(0x218)](_0x1edc91[_0x23668a(0x38d)]),_0x240923=_0xcdec2b['query'+_0x23668a(0x1a9)+_0x23668a(0x218)](_0x1edc91[_0x23668a(0x43f)]),_0x45c3ee=_0xcdec2b['query'+_0x23668a(0x1a9)+_0x23668a(0x218)](_0x23668a(0x388)+_0x23668a(0x205)),_0x92ab32=null;if(_0x1218df)_0x1218df['oncli'+'ck']=function(){try{_0xcdec2b['remov'+'e']();}catch(_0x3371a1){}};if(_0x240923)_0x240923['oncli'+'ck']=function(){var _0x2da3ee=_0x23668a;_0x287b4a(_0x2da3ee(0x269)+_0x2da3ee(0x315));};if(_0x9e538a)_0x9e538a[_0x23668a(0x2d2)+'ck']=function(){var _0x38e341=_0x23668a,_0x134933={'VDTaS':_0x38e341(0x2dd)},_0x8abfbd=_0x5b498e[_0x38e341(0x24b)](_0x5b498e['hmkwU'](_0x5b498e[_0x38e341(0x24b)](_0x18d1db,'\x0a')+(_0x92ab32?JSON['strin'+_0x38e341(0x3a0)](_0x92ab32,null,-0x741*-0x2+0xd*0x257+-0x2cec):''),'\x0a'),_0x16eae5),_0x3e3e1f=function(){var _0x3662fe=_0x38e341;if(_0x9e538a)_0x9e538a['textC'+_0x3662fe(0x3db)+'t']=_0x5b498e[_0x3662fe(0x4b5)];};if(navigator[_0x38e341(0x4cf)+_0x38e341(0x322)]&&navigator[_0x38e341(0x4cf)+'oard']['write'+_0x38e341(0x2f8)])_0x38e341(0x31e)!==_0x5b498e['uxYkD']?navigator['clipb'+'oard'][_0x38e341(0x3be)+_0x38e341(0x2f8)](_0x8abfbd)[_0x38e341(0x4b1)](_0x3e3e1f,function(){_0x56a054();}):_0x26e40e[_0x38e341(0x30b)+'ngs'][_0x38e341(0x2d3)](_0x38e341(0x1da)+_0x38e341(0x353)+_0x38e341(0x323)+_0x38e341(0x321)+_0x38e341(0x354)+_0x38e341(0x45f)+'pper\x20'+_0x38e341(0x349)+_0x38e341(0x415)+_0x38e341(0x4ce)+'pture'+_0x38e341(0x3c2)+_0x38e341(0x3d2)+_0x38e341(0x2c4)+'nd.');else _0x5b498e[_0x38e341(0x376)](_0x56a054);function _0x56a054(){var _0x16f784=_0x38e341,_0x3fd8a2=document['creat'+_0x16f784(0x309)+'ent'](_0x16f784(0x2e4)+'rea');_0x3fd8a2[_0x16f784(0x1a8)]=_0x8abfbd;if(!document[_0x16f784(0x420)])return;document['body']['appen'+'dChil'+'d'](_0x3fd8a2),_0x3fd8a2[_0x16f784(0x35b)+'t']();try{if('KsznT'!=='KsznT')return _0x42f2f4['type']===_0x55fd37;else document[_0x16f784(0x403)+'omman'+'d'](_0x134933['VDTaS']),_0x3e3e1f();}catch(_0x1179cf){}_0x3fd8a2[_0x16f784(0x20d)+'e']();}};_0x1edc91[_0x23668a(0x450)](setTimeout,function(){var _0x2f460b=_0x23668a;if(_0x92ab32)return;if(_0x5b498e[_0x2f460b(0x34c)](!_0x49cb13,!_0x10d9eb))return;_0x49cb13[_0x2f460b(0x3dc)+_0x2f460b(0x3db)+'t']=_0x5b498e[_0x2f460b(0x494)],_0x49cb13[_0x2f460b(0x466)]['color']=_0x2f460b(0x414)+'c7',_0x10d9eb['textC'+'onten'+'t']=_0x5b498e[_0x2f460b(0x24b)](_0x5b498e[_0x2f460b(0x24b)](_0x5b498e[_0x2f460b(0x24b)](_0x5b498e[_0x2f460b(0x24b)](_0x2f460b(0x4b8)+_0x2f460b(0x37b)+_0x2f460b(0x1ed)+'never'+_0x2f460b(0x211)+_0x2f460b(0x21e)+_0x2f460b(0x1c5)+_0x2f460b(0x215)+_0x2f460b(0x4db)+'\x0a'+('This\x20'+_0x2f460b(0x40e)+'\x20prov'+_0x2f460b(0x4af)+_0x2f460b(0x1e5)+_0x2f460b(0x389)+'pt\x20IS'+_0x2f460b(0x304)+'alled'+'\x20and\x20'+_0x2f460b(0x286)+_0x2f460b(0x25d)+'\x20the\x20'+'porta'+_0x2f460b(0x1fe))+(_0x2f460b(0x2f7)+_0x2f460b(0x208)+_0x2f460b(0x36f)+'g\x20sus'+_0x2f460b(0x4b6)+_0x2f460b(0x214)+'\x0a\x0a')+_0x5b498e[_0x2f460b(0x399)],_0x5b498e['YTcCb']),_0x5b498e[_0x2f460b(0x317)]),'\x20\x20\x20\x20\x20'+_0x2f460b(0x2be)+_0x2f460b(0x4c5)+_0x2f460b(0x243)+'\x20copi'+_0x2f460b(0x350)+'\x20UWMK'+'\x20both'+'\x20patc'+_0x2f460b(0x47c)+'Assem'+'bly.i'+_0x2f460b(0x1f8)+_0x2f460b(0x3a8)+_0x2f460b(0x2db)),_0x5b498e['fbMDJ']);},-0x66a3+-0x1467*-0xc+-0x5c2f*-0x1);var _0x16cf61={'set':function(_0x54a7e2){var _0x4014c4=_0x23668a,_0x105228={'dwsVv':function(_0x341211,_0x542f9d){return _0x341211*_0x542f9d;},'aLJcF':function(_0x425f96,_0x40cec8){return _0x1edc91['mktKZ'](_0x425f96,_0x40cec8);},'eJDSn':function(_0x2ce63a,_0x5addf4){return _0x2ce63a+_0x5addf4;}};_0x92ab32=_0x54a7e2;if(_0x9e538a)_0x9e538a['style']['displ'+'ay']='';var _0x57edc5=_0x54a7e2['insta'+_0x4014c4(0x28f)]&&_0x54a7e2[_0x4014c4(0x2be)+_0x4014c4(0x28f)][_0x4014c4(0x29d)+'ntrol'+'ler'],_0x52dd45=Math['round']((_0x54a7e2['elaps'+'edMs']||-0x284+-0x2029+0x22ad)/(0xb69+0x1343+-0x1ac4));if(_0x49cb13){var _0x2440c5,_0x479edb;if(_0x57edc5&&_0x54a7e2[_0x4014c4(0x42c)+'y']&&_0x54a7e2[_0x4014c4(0x42c)+'y'][_0x4014c4(0x29d)+_0x4014c4(0x4da)+'ler'])_0x2440c5=_0x1edc91[_0x4014c4(0x3d8)](_0x1edc91['mktKZ']('LIVE\x20'+'·\x20',Object['keys'](_0x54a7e2[_0x4014c4(0x2be)+_0x4014c4(0x28f)])[_0x4014c4(0x2b7)+'h'])+_0x1edc91['paiBB'],_0x52dd45)+'s',_0x479edb=_0x4014c4(0x238)+'a8';else{if(_0x1edc91['gbjrn'](_0x54a7e2['hooks'+'Appli'+'ed'],-0x110c+-0x5*0x443+0xcc9*0x3)){if(_0x4014c4(0x4d2)===_0x1edc91['NPzwB'])_0x2440c5=_0x1edc91[_0x4014c4(0x3d8)](_0x4014c4(0x327)+_0x4014c4(0x37e)+_0x4014c4(0x47e)+_0x52dd45,'s'),_0x479edb=_0x1edc91[_0x4014c4(0x495)];else{var _0x310e0c=_0x3fabc4[_0x4014c4(0x45c)+_0x4014c4(0x1df)+_0x4014c4(0x34b)]('sakur'+_0x4014c4(0x371)+'v2');if(_0x310e0c)return _0x310e0c;if(!_0x141449['body']||!_0x4a1142['body']['appen'+'dChil'+'d'])return null;try{if(!_0x4dca85['getEl'+'ement'+_0x4014c4(0x34b)]('sakur'+_0x4014c4(0x371)+'v2-cs'+'s')){var _0x3c11c3=_0x29b221[_0x4014c4(0x249)+_0x4014c4(0x309)+'ent']('style');_0x3c11c3['id']=_0x4014c4(0x359)+'a-sw-'+_0x4014c4(0x2dc)+'s',_0x3c11c3['textC'+_0x4014c4(0x3db)+'t']='#saku'+'ra-sw'+_0x4014c4(0x3b2)+_0x4014c4(0x2c0)+'itial'+'}',(_0x172fd5[_0x4014c4(0x460)]||_0x3e1724[_0x4014c4(0x46e)+_0x4014c4(0x438)+_0x4014c4(0x1df)])[_0x4014c4(0x470)+'dChil'+'d'](_0x3c11c3);}return _0x310e0c=_0x19ca72[_0x4014c4(0x249)+_0x4014c4(0x309)+_0x4014c4(0x3b8)](_0x5b498e['rPRTD']),_0x310e0c['id']=_0x5b498e['VltaB'],_0x447aa6[_0x4014c4(0x420)][_0x4014c4(0x470)+'dChil'+'d'](_0x310e0c),_0x310e0c;}catch(_0x24c5f6){return null;}}}else _0x54a7e2[_0x4014c4(0x1c7)+_0x4014c4(0x433)]?(_0x2440c5=_0x1edc91['mktKZ']('metad'+_0x4014c4(0x4cd)+'eady\x20'+'·\x20',_0x52dd45)+'s',_0x479edb='#ffd4'+'8a'):(_0x2440c5=_0x1edc91['mktKZ'](_0x54a7e2[_0x4014c4(0x362)]&&_0x54a7e2[_0x4014c4(0x362)]['ok']?_0x1edc91[_0x4014c4(0x2b9)]:_0x1edc91[_0x4014c4(0x22f)],_0x52dd45)+'s',_0x479edb='#ffd4'+'8a');}_0x49cb13['textC'+_0x4014c4(0x3db)+'t']=_0x2440c5,_0x49cb13[_0x4014c4(0x466)]['color']=_0x479edb;}_0x45c3ee&&(_0x45c3ee[_0x4014c4(0x3dc)+'onten'+'t']=_0x54a7e2[_0x4014c4(0x2a2)]&&_0x54a7e2[_0x4014c4(0x2a2)][_0x4014c4(0x2b7)+'h']?'Diff\x20'+'vs\x20sn'+_0x4014c4(0x4bd)+'t:\x20'+_0x54a7e2['diff'][_0x4014c4(0x335)](',\x20'):_0x1edc91[_0x4014c4(0x40f)]);if(_0x10d9eb)try{if(_0x4014c4(0x1ff)!==_0x1edc91['IejdW']){var _0x4960e4=_0x337d68[_0x1287d9],_0x4024df=typeof _0x4960e4['v']===_0x4014c4(0x4ae)+'r'?_0x13a2e2[_0x4014c4(0x422)](_0x105228[_0x4014c4(0x405)](_0x4960e4['v'],-0x13dd+-0x15d0+-0x1*-0x2d95))/(0x203a+0x4*0x47b+-0x2e3e):_0x4960e4['v'];_0x13e27b['push'](_0x105228['aLJcF'](_0x105228[_0x4014c4(0x2c1)](_0x105228[_0x4014c4(0x434)]('\x20\x20',('0x'+_0x4960e4['o'][_0x4014c4(0x370)+_0x4014c4(0x430)](-0x21ce+-0x118a+0x4*0xcda))[_0x4014c4(0x1ac)+'d'](-0x2644+0x1bf7*0x1+-0x73*-0x17)),'\x20')+_0x4960e4['k']['padEn'+'d'](0x895+-0x1704+0xe7a)+'\x20'+_0x48f452(_0x4024df)[_0x4014c4(0x1ac)+'d'](0x10a+-0x228+0x12e),'\x20')+(_0x4960e4[_0x4014c4(0x1fd)]||''));}else _0x10d9eb['textC'+_0x4014c4(0x3db)+'t']=_0x52f735(_0x54a7e2);}catch(_0x3738fc){_0x10d9eb['textC'+_0x4014c4(0x3db)+'t']=JSON[_0x4014c4(0x3b3)+'gify'](_0x54a7e2,null,0xd6*0x3+-0x1*-0x190d+-0x1b8e);}console['log']('%c[sa'+_0x4014c4(0x27a)+_0x4014c4(0x48b)+_0x4014c4(0x402)+_0x4014c4(0x4c4)+'rt',_0x4014c4(0x2b3)+':'+_0xcdf081+_0x1edc91[_0x4014c4(0x41b)],_0x54a7e2),console[_0x4014c4(0x1f2)](_0x1edc91[_0x4014c4(0x3d8)](_0x18d1db+'\x0a'+JSON['strin'+_0x4014c4(0x3a0)](_0x54a7e2,null,-0x213e+-0x17bb+0x38fa),'\x0a')+_0x16eae5);}};return _0xcdec2b[_0x23668a(0x41c)+'et'][_0x23668a(0x34e)]='1',_0xcdec2b[_0x23668a(0x34e)]=_0x16cf61,_0x16cf61;}function _0x52f735(_0x598caf){var _0x25440a=_0x28a463,_0x15c31f={'UBfUE':function(_0x24dee6,_0x4a5e9b){var _0x1687b4=_0x188f;return _0x1edc91[_0x1687b4(0x46f)](_0x24dee6,_0x4a5e9b);},'aaWDJ':function(_0x32fe45){return _0x32fe45();}};if(_0x1edc91[_0x25440a(0x4d4)]===_0x1edc91[_0x25440a(0x1ab)]){var _0xd295b8=_0x161fd8[_0x2a20c0];if(!_0xd295b8)return![];var _0x4fe693=_0x1edc91[_0x25440a(0x352)](_0x1dedce,_0x5b8573,_0x59ed56,_0x33d8ea);if(!_0x4fe693)return![];var _0x5abbaa=_0x4fe693[_0x25440a(0x2cd)],_0x4d9ba3;if(_0x526b3f===_0x1edc91[_0x25440a(0x3d7)])_0x4d9ba3=_0x1edc91[_0x25440a(0x338)](_0x1edc91[_0x25440a(0x30c)](_0x408675,_0x4cdc11),_0x5abbaa);else{if(_0x4962d0==='obfI')_0x4d9ba3=_0x1edc91[_0x25440a(0x2cb)](_0x3b09f7,0x387*0xb+-0x7c3*0x3+-0xf84)^_0x5abbaa;else _0x4d9ba3=_0x1edc91['HXkAQ']((_0x196e85?0x13*0x85+0x194*0x11+-0x24b2:0x56c+0xa55+-0xfc1*0x1)&-0xfd6*-0x1+0x2f9*-0x1+-0xbde,_0x5abbaa);}var _0x1371fe=_0x1edc91['qvAEI'](_0x567fe3,_0x1edc91['XWLPC'])?'f32':_0x370ffa==='obfI'?_0x1edc91['aQeXA']:'u8',_0x530863=_0xdeaa21===_0x25440a(0x38f)?_0x389d09:_0x7579ba===_0x25440a(0x357)?_0x1edc91['PogYU'](_0x450f0c,-0xa4*-0x1b+0xd*0x2d7+-0x3637):_0x802c86?0x29*0x13+-0x3*0xae1+-0x1*-0x1d99:-0x5a7*0x1+0x991+-0x3ea;return _0x1edc91[_0x25440a(0x352)](_0x184a9e,_0x1edc91[_0x25440a(0x3af)](_0x1edc91[_0x25440a(0x445)](_0x48eeea,_0x1a3c00),_0xd295b8[_0x25440a(0x2de)+'n']),_0x25440a(0x3a9),_0x1edc91['PogYU'](_0x4d9ba3,0x1*-0x2359+0x427*-0x7+0x406a))&&_0xdb4395(_0x1edc91['qvToE'](_0x1edc91[_0x25440a(0x445)](_0x3316fa,_0x3d1f69),_0xd295b8['fake']),_0x1371fe,_0x530863)&&_0x1edc91[_0x25440a(0x4a3)](_0x5b471e,_0x1edc91[_0x25440a(0x1eb)](_0x41b9d0,_0x2e0c79)+_0xd295b8[_0x25440a(0x4ad)+'e'],'u8',-0x26cd+-0x16bc+0x3d89);}else{var _0x33e5af=[];_0x33e5af['push'](_0x1edc91[_0x25440a(0x498)](_0x1edc91[_0x25440a(0x3f1)](_0x25440a(0x305)+_0x25440a(0x372)+(_0x598caf['host']||'?'),_0x1edc91['ySprh'])+Math[_0x25440a(0x422)]((_0x598caf['elaps'+_0x25440a(0x3d4)]||0xda9*0x1+0x31*0x4b+-0x1c04)/(-0x2304+-0x796*-0x3+0x2*0x815)),'s)')),_0x33e5af[_0x25440a(0x2d3)](_0x1edc91['mNJdI'](_0x1edc91[_0x25440a(0x445)](_0x25440a(0x3c9)+'\x20\x20\x20\x20',_0x598caf[_0x25440a(0x1e6)]?'yes':'no')+_0x1edc91['sntHp'],_0x598caf['il2Cp'+'pCont'+'ext']?_0x1edc91[_0x25440a(0x2f0)]:'no')+_0x1edc91[_0x25440a(0x263)]+(_0x1edc91['cUqBl'](_0x598caf['typeC'+_0x25440a(0x292)],null)?_0x598caf['typeC'+_0x25440a(0x292)]:'?')),_0x33e5af['push'](_0x1edc91[_0x25440a(0x35d)](_0x1edc91[_0x25440a(0x4a5)](_0x1edc91[_0x25440a(0x3f1)](_0x1edc91['YIPNL'],_0x598caf['hooks'+_0x25440a(0x2a0)+'ed'])+'/',_0x598caf[_0x25440a(0x327)+_0x25440a(0x1ea)]),_0x1edc91[_0x25440a(0x440)])),_0x33e5af['push']('');var _0x567fb4=_0x598caf[_0x25440a(0x2be)+_0x25440a(0x28f)]||{},_0x259462=Object[_0x25440a(0x39b)](_0x567fb4);if(!_0x259462['lengt'+'h']){if(_0x1edc91[_0x25440a(0x394)]('XsasK',_0x1edc91['GYoFz'])){var _0x1579dc=![],_0x397046=0xff3+-0x212f*-0x1+-0x3122;_0x1edc91['PBwnq'](_0x2d081d,_0x1edc91[_0x25440a(0x4d8)](_0x156c6d)),function _0x42e8b9(){var _0x1f56ec=_0x25440a,_0x1486df=_0x48b3b8['Unity'+_0x1f56ec(0x4de)+'dkit']&&_0x4ece8c[_0x1f56ec(0x23a)+'WebMo'+_0x1f56ec(0x36a)][_0x1f56ec(0x1a7)+'me']||null,_0x1bf11e=_0x1486df&&_0x1486df['il2Cp'+_0x1f56ec(0x1e0)+'ext']&&_0x1486df[_0x1f56ec(0x258)+'pCont'+'ext'][_0x1f56ec(0x1c7)+_0x1f56ec(0x433)];_0x15c31f[_0x1f56ec(0x250)](_0x1bf11e,!_0x1579dc)&&(_0x1579dc=_0x55d7d7());_0x397046++,_0x2433cf(_0x15c31f[_0x1f56ec(0x493)](_0x446053));if(!_0x1579dc&&_0x397046<0x62b+-0x17c5+0x12c6)_0x5f2b72(_0x42e8b9,0x61f+-0x1a54+-0x3*-0x957);else{if(!_0x23e90b[_0x1f56ec(0x39b)](_0x1d5867)['lengt'+'h']&&_0x397046<0x103c+0x58b*0x1+-0x149b)_0x5e87b5(_0x42e8b9,-0x5*0x515+0x2f8*-0xc+0x44d9);else _0x1ae0d7(_0x42e8b9,0x5*0xdb+-0x926*-0x2+-0x11e3);}}();}else _0x33e5af[_0x25440a(0x2d3)](_0x25440a(0x225)+_0x25440a(0x340)+_0x25440a(0x2fe)+_0x25440a(0x3a2)+_0x25440a(0x262)+_0x25440a(0x1c1)),_0x33e5af[_0x25440a(0x2d3)](''),_0x33e5af[_0x25440a(0x2d3)](_0x1edc91['KmBob']),_0x33e5af[_0x25440a(0x2d3)](_0x25440a(0x2b2)+'date\x20'+'ran\x20y'+'et,\x20o'+_0x25440a(0x1ae)+_0x25440a(0x461)+_0x25440a(0x337)+_0x25440a(0x333)+'not\x20m'+_0x25440a(0x1c6));}for(var _0x4f88bb=-0x1905+0x1d5*0x7+0xc32;_0x4f88bb<_0x259462[_0x25440a(0x2b7)+'h'];_0x4f88bb++){var _0xb91cfb=_0x259462[_0x4f88bb];_0x33e5af[_0x25440a(0x2d3)](_0xb91cfb+_0x1edc91[_0x25440a(0x31b)]+_0x567fb4[_0xb91cfb]);}_0x33e5af[_0x25440a(0x2d3)]('');var _0x282c88=_0x598caf[_0x25440a(0x42c)+'y']||{},_0xec38e5=Object[_0x25440a(0x39b)](_0x282c88);for(var _0x40fc76=-0x212b+0x2178+-0x4d;_0x40fc76<_0xec38e5['lengt'+'h'];_0x40fc76++){var _0x510564=_0xec38e5[_0x40fc76],_0x16ecd9=_0x282c88[_0x510564];if(!_0x16ecd9||!_0x16ecd9[_0x25440a(0x2b7)+'h'])continue;_0x33e5af['push'](_0x1edc91[_0x25440a(0x35d)](_0x25440a(0x2da),_0x510564)+'\x20'+new Array(Math['max'](-0x702+0x1109*0x1+0x1*-0xa06,-0x15c0+0x1381+-0xcb*-0x3-_0x510564[_0x25440a(0x2b7)+'h']))[_0x25440a(0x335)]('─')),_0x33e5af[_0x25440a(0x2d3)](_0x1edc91[_0x25440a(0x28c)]);for(var _0x305f86=0x1949+-0x1ade+0x195;_0x305f86<_0x16ecd9[_0x25440a(0x2b7)+'h'];_0x305f86++){var _0x4c8d5f=_0x16ecd9[_0x305f86],_0x2f31da=typeof _0x4c8d5f['v']===_0x1edc91['zzVPj']?_0x1edc91[_0x25440a(0x1fb)](Math[_0x25440a(0x422)](_0x4c8d5f['v']*(0x1*0x1fd5+0x2c4*0x3+-0x2439)),0x132a+0x1082*0x2+0xa7*-0x4a):_0x4c8d5f['v'];_0x33e5af[_0x25440a(0x2d3)](_0x1edc91['mNJdI']('\x20\x20'+('0x'+_0x4c8d5f['o'][_0x25440a(0x370)+'ing'](-0x43*0x10+0xd*-0x1de+-0x2*-0xe43))['padEn'+'d'](-0x1b0d+0x41c+0x16f9*0x1)+'\x20'+_0x4c8d5f['k'][_0x25440a(0x1ac)+'d'](-0x842+-0x2*0xfed+0x2827*0x1)+'\x20'+String(_0x2f31da)['padEn'+'d'](0x2020+-0x581*0x5+-0x1*0x48b),'\x20')+(_0x4c8d5f[_0x25440a(0x1fd)]||''));}_0x33e5af[_0x25440a(0x2d3)]('');}if(_0x598caf['warni'+'ngs']&&_0x598caf[_0x25440a(0x30b)+'ngs']['lengt'+'h']){if('iqnLQ'!==_0x1edc91['qLHGm']){_0x33e5af['push'](_0x1edc91[_0x25440a(0x2ee)]);for(var _0x27e1cd=-0x144f+0x1f47+-0xaf8;_0x27e1cd<_0x598caf['warni'+'ngs']['lengt'+'h'];_0x27e1cd++)_0x33e5af['push'](_0x1edc91[_0x25440a(0x1eb)](_0x1edc91['HMeUd'],_0x598caf[_0x25440a(0x30b)+'ngs'][_0x27e1cd]));}else try{return _0x3bf069();}catch(_0x15f0c5){return{'version':_0x25440a(0x20a),'when':new _0x1c047c()['toISO'+'Strin'+'g'](),'elapsedMs':_0x38f28e[_0x25440a(0x303)]()-_0x28965e,'host':_0x54f1bc,'uwmk':!!(_0x5d7a0a[_0x25440a(0x23a)+_0x25440a(0x4de)+'dkit']&&_0x1b267f[_0x25440a(0x23a)+'WebMo'+'dkit']['Runti'+'me']),'il2CppContext':![],'arm':_0x2f071b,'hooksTotal':_0xdc6712[_0x25440a(0x2b7)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x2dc0f7(_0x15f0c5&&_0x15f0c5[_0x25440a(0x47f)+'ge']||_0x15f0c5)};}}return _0x33e5af[_0x25440a(0x335)]('\x0a');}}window[_0x28a463(0x288)+_0x28a463(0x1d8)+_0x28a463(0x373)+'r'](_0x28a463(0x47f)+'ge',function(_0x46d5e8){var _0x17bafa=_0x28a463,_0x479ebe=_0x46d5e8[_0x17bafa(0x3e4)];if(!_0x479ebe||_0x479ebe[_0x17bafa(0x465)+_0x17bafa(0x1d5)]!==_0x5ed9a7)return;try{if(_0x1edc91['xISVX'](_0x479ebe[_0x17bafa(0x39a)],_0x17bafa(0x4c2))){_0x5b0bb7()['set']({'host':_0x479ebe['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x479ebe[_0x17bafa(0x39a)]===_0x17bafa(0x3f8)+'t')_0x5b0bb7()['set'](_0x479ebe['repor'+'t']);}catch(_0x29ce18){console[_0x17bafa(0x1de)]('%c[sa'+'kura]'+'\x20pane'+_0x17bafa(0x48f)+'ate\x20f'+_0x17bafa(0x41f),_0x1edc91['tjdZw'](_0x1edc91[_0x17bafa(0x444)],_0xcdf081),_0x29ce18);}});if(document['body'])_0x5b0bb7();else document['addEv'+'entLi'+_0x28a463(0x373)+'r'](_0x28a463(0x2ce)+'ntent'+_0x28a463(0x221)+'d',_0x5b0bb7,{'once':!![]});return;}window[_0x28a463(0x336)+_0x28a463(0x419)+_0x28a463(0x404)]=window[_0x28a463(0x336)+'URA_S'+'W__']||{'at':Date['now']()};function _0x1feacb(_0x3fa236,_0x32837b){var _0x385ba2=_0x28a463;if(_0x385ba2(0x43c)===_0x385ba2(0x47b))return _0x2281f8[-0x1674+0x3*-0x1c5+0x3*0x941]=_0x2f6d69,_0x402bb2[0x1*0xa85+0x231d+-0x21*0x162];else{var _0x35ad89={'__sakura':_0x5ed9a7,'kind':_0x3fa236};if(_0x32837b){for(var _0x2ffcfa in _0x32837b)_0x35ad89[_0x2ffcfa]=_0x32837b[_0x2ffcfa];}try{if(window['paren'+'t']&&window['paren'+'t']!==window)window['paren'+'t'][_0x385ba2(0x3a1)+_0x385ba2(0x45d)+'e'](_0x35ad89,'*');}catch(_0x1baeef){}try{if(window[_0x385ba2(0x301)]&&window[_0x385ba2(0x301)]!==window)window['top']['postM'+_0x385ba2(0x45d)+'e'](_0x35ad89,'*');}catch(_0x5cba1f){}}}console[_0x28a463(0x1f2)](_0x1edc91[_0x28a463(0x421)],_0x1edc91[_0x28a463(0x320)](_0x28a463(0x2b3)+':',_0xcdf081)+_0x1edc91[_0x28a463(0x41b)],{'host':_0x402765,'href':location['href']}),_0x1edc91[_0x28a463(0x450)](_0x1feacb,_0x1edc91['phbbK'],{'host':_0x402765,'role':_0x297a73});var _0x464247=window[_0x28a463(0x336)+_0x28a463(0x419)+'W__']&&window[_0x28a463(0x336)+_0x28a463(0x419)+_0x28a463(0x404)]['at']||Date[_0x28a463(0x303)]();try{if('ecubG'==='ecubG'){var _0x924c78=new BroadcastChannel(_0x28a463(0x359)+_0x28a463(0x456));_0x924c78[_0x28a463(0x253)+_0x28a463(0x39e)]=function(_0x2487b5){var _0x2ff0a7=_0x28a463,_0x1a7804=_0x2487b5[_0x2ff0a7(0x3e4)];if(_0x1a7804&&_0x1a7804['__sak'+'ura']===_0x5ed9a7&&_0x1edc91['xISVX'](_0x1a7804[_0x2ff0a7(0x39a)],_0x1edc91[_0x2ff0a7(0x1bc)]))_0x13ef3c(_0x1a7804['cmd'],_0x1a7804['arg']);};}else{_0x925d09()[_0x28a463(0x3a6)]({'host':_0x59b31a[_0x28a463(0x368)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}}catch(_0xcc3bbc){}var _0x3b39a4=[];(function _0x7c5afc(){var _0x2d8982=_0x28a463,_0x48a82e={'Bycyj':_0x1edc91['UUirQ'],'RMKdO':function(_0x29f7d3,_0x381d4d){var _0xc8ecc5=_0x188f;return _0x1edc91[_0xc8ecc5(0x4b3)](_0x29f7d3,_0x381d4d);}},_0x313abc=[_0x1edc91['mmvCX'],_0x2d8982(0x1de),_0x1edc91['DxrEw'],'info',_0x2d8982(0x2a6)];for(var _0x2735ac=-0xaed*-0x3+0x4*0x2cf+-0x2c03*0x1;_0x1edc91['kxmuA'](_0x2735ac,_0x313abc['lengt'+'h']);_0x2735ac++){(function(_0xd882a6){var _0x763de2={'NIwGL':_0x48a82e['Bycyj'],'maMuJ':function(_0x4b6340,_0x2b170d){var _0xb19ea9=_0x188f;return _0x48a82e[_0xb19ea9(0x416)](_0x4b6340,_0x2b170d);}},_0x5db0fb=console[_0xd882a6];if(typeof _0x5db0fb!=='funct'+'ion')return;console[_0xd882a6]=function(){var _0x39c769=_0x188f,_0x18ebdb={'IpHhO':function(_0x2fee36,_0x878b03){return _0x2fee36(_0x878b03);},'FqzNE':_0x763de2['NIwGL'],'PAqMw':_0x39c769(0x2b3)+':'};try{if('rqYSp'==='FOiEd'){var _0x3901f1=_0xed9cdb();if(!_0x3901f1)return _0x5778ae;if(_0x3901f1['datas'+'et'][_0x39c769(0x34e)])return _0x3901f1['api'];try{return _0x18ebdb['IpHhO'](_0x3b73eb,_0x3901f1);}catch(_0x3694b4){return _0x3901f1['datas'+'et']['api']='1',_0x3901f1[_0x39c769(0x34e)]=_0x549fa7,_0x1d61d9[_0x39c769(0x1de)](_0x18ebdb[_0x39c769(0x3fe)],_0x18ebdb[_0x39c769(0x2ec)]+_0x41631d,_0x3694b4),_0x36257d;}}else{var _0x164667='';for(var _0x216789=0x1ad7*-0x1+-0x2047+0x3b1e;_0x216789<arguments['lengt'+'h'];_0x216789++){var _0x476d1f=arguments[_0x216789];if(typeof _0x476d1f===_0x39c769(0x3b3)+'g')_0x164667+=_0x476d1f;else{if(_0x476d1f&&_0x476d1f[_0x39c769(0x47f)+'ge'])_0x164667+=_0x476d1f[_0x39c769(0x47f)+'ge'];}}if(_0x763de2[_0x39c769(0x2a1)](_0x164667['index'+'Of'](_0x39c769(0x23a)+'WebMo'+_0x39c769(0x36a)),-(0x3e*-0x4f+-0x1*-0xca9+0x67a))&&_0x3b39a4[_0x39c769(0x2b7)+'h']<-0x2597+0x9*0x113+0x1c28)_0x3b39a4[_0x39c769(0x2d3)](_0x164667['slice'](0xe99+0x2*-0x7ae+0x1*0xc3,0x302*0x2+0x8cc*0x2+-0x1670));}}catch(_0x20730a){}return _0x5db0fb['apply'](console,arguments);};}(_0x313abc[_0x2735ac]));}}());var _0x19e984={'attempted':![],'ok':![],'error':null},_0x23d805=['Assem'+_0x28a463(0x36c)+'Sharp'+'.dll',_0x28a463(0x20e)+'bly-C'+_0x28a463(0x265)+_0x28a463(0x3da)+_0x28a463(0x4be)+'.dll',_0x28a463(0x484)+'cofor'+_0x28a463(0x1fc)+_0x28a463(0x37f)+'ll',_0x28a463(0x398)+'t.dll',_0x28a463(0x459)+'loCha'+_0x28a463(0x1d6)+'rCont'+_0x28a463(0x2d5)+_0x28a463(0x476),_0x28a463(0x283)+'erate'+'d'];(function _0x916cd6(){var _0xce3fd1=_0x28a463,_0x295ff7={'EMaqj':_0x1edc91[_0xce3fd1(0x49b)],'cZCth':function(_0xd4e657,_0x58a961){var _0x416bd6=_0xce3fd1;return _0x1edc91[_0x416bd6(0x483)](_0xd4e657,_0x58a961);},'hamha':function(_0x15951b){var _0x110a19=_0xce3fd1;return _0x1edc91[_0x110a19(0x4d8)](_0x15951b);},'UfsLa':function(_0x124b1f,_0x1ee359){return _0x124b1f!==_0x1ee359;},'XGkQu':function(_0x420a89,_0x1dc19e){return _0x1edc91['pnxSe'](_0x420a89,_0x1dc19e);}};if(_0x1edc91[_0xce3fd1(0x245)](_0x1edc91['BjQgA'],_0xce3fd1(0x27e)))try{var _0x5ee05f=window['Unity'+_0xce3fd1(0x4de)+_0xce3fd1(0x36a)]&&window[_0xce3fd1(0x23a)+'WebMo'+_0xce3fd1(0x36a)]['Runti'+'me'];if(!_0x5ee05f||typeof _0x5ee05f[_0xce3fd1(0x249)+_0xce3fd1(0x478)+'in']!==_0xce3fd1(0x1c8)+'ion'){if(_0xce3fd1(0x486)!==_0x1edc91[_0xce3fd1(0x429)]){if(_0x641152['kind']===_0x295ff7[_0xce3fd1(0x26d)]){_0x2cbe98()['set']({'host':_0x2c15ae['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x295ff7[_0xce3fd1(0x223)](_0x5e8813['kind'],'repor'+'t'))_0x295ff7[_0xce3fd1(0x278)](_0x29e360)['set'](_0x5dbb22['repor'+'t']);}else{_0x19e984[_0xce3fd1(0x2d7)]='Runti'+'me.cr'+_0xce3fd1(0x355)+'lugin'+_0xce3fd1(0x25b)+_0xce3fd1(0x42a)+'le';return;}}_0x19e984['attem'+'pted']=!![],_0x5ee05f[_0xce3fd1(0x249)+'ePlug'+'in']({'name':'sakur'+_0xce3fd1(0x37d)+'llwar'+'z','version':_0xce3fd1(0x20a),'referencedAssemblies':_0x23d805['slice']()}),_0x19e984['ok']=!![];}catch(_0x103a54){_0x19e984['error']=String(_0x103a54&&_0x103a54[_0xce3fd1(0x47f)+'ge']||_0x103a54);}else{var _0x30a91b=_0x288dda['data'];if(!_0x30a91b||_0x30a91b['__sak'+'ura']!==_0x4a015e)return;try{if(_0x51f44b['paren'+'t']&&_0x295ff7[_0xce3fd1(0x1be)](_0x65351d['paren'+'t'],_0x3cab04))_0x4bd86c['paren'+'t']['postM'+_0xce3fd1(0x45d)+'e'](_0x30a91b,'*');if(_0x5efd5e[_0xce3fd1(0x301)]&&_0x295ff7[_0xce3fd1(0x219)](_0xc3081[_0xce3fd1(0x301)],_0x50f05c))_0x5e0148[_0xce3fd1(0x301)]['postM'+_0xce3fd1(0x45d)+'e'](_0x30a91b,'*');}catch(_0x5d73b7){}}}());var _0x2fd8fa=new Float32Array(0xbfa+0x1*-0x2487+0x1*0x188e),_0x554f56=new Int32Array(_0x2fd8fa[_0x28a463(0x31f)+'r']);function _0x3ddf1a(_0x5c7adf){var _0x34da0b=_0x28a463,_0x284823={'sbqqU':function(_0x58de32,_0x9f26d5){return _0x58de32!==_0x9f26d5;}};if(_0x34da0b(0x290)===_0x34da0b(0x2d9)){var _0x205f3e=_0x562bb1[_0x484c3f],_0xa20d90=_0x2e128e[_0x203404];if(_0x284823['sbqqU'](_0x205f3e,_0xa20d90))_0x517b31['push'](_0x3472d1+':\x20'+_0x205f3e+_0x34da0b(0x27c)+_0xa20d90);}else return _0x2fd8fa[0x3*-0x47+-0x7*0x42+0x2a3]=_0x5c7adf,_0x554f56[-0x2595+-0x2332+0x48c7];}function _0x43b2e4(_0x3f7465){var _0x42262f=_0x28a463;if(_0x1edc91[_0x42262f(0x2ba)](_0x42262f(0x3de),'HaWKb'))return _0x554f56[-0xbb6+-0x5d7+0x118d]=_0x3f7465|0x1*-0x347+-0x1*-0x26c3+0x237c*-0x1,_0x2fd8fa[-0x2602+-0x370*0x9+-0x6e5*-0xa];else{var _0x1b6890=_0x48ab9f[_0x305ff7],_0x4de12e=typeof _0x9bad35[_0x1b6890];_0x38e862[_0x1b6890]=_0x4de12e===_0x1edc91['kDZkz']?'undef'+_0x42262f(0x356):_0x4de12e;}}var _0x3726cf={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x14b472(){var _0x20f601=_0x28a463;if(_0x1edc91[_0x20f601(0x3e8)](_0x1edc91['xbNuy'],_0x20f601(0x428))){try{var _0x29dc88=window[_0x20f601(0x23a)+_0x20f601(0x4de)+_0x20f601(0x36a)]&&window[_0x20f601(0x23a)+'WebMo'+'dkit']['Runti'+'me'];if(_0x29dc88&&typeof _0x29dc88[_0x20f601(0x41a)+_0x20f601(0x306)+'e']===_0x1edc91['KRVoi']){var _0x3c2ded=_0x29dc88[_0x20f601(0x41a)+'veGam'+'e']();if(_0x3c2ded){if(_0x1edc91[_0x20f601(0x44c)]('xyzMX',_0x1edc91[_0x20f601(0x4dd)]))return _0x3726cf['sourc'+'e']=_0x1edc91[_0x20f601(0x485)],_0x3c2ded;else{var _0x27cfc2={'cEzgl':function(_0x501efc){return _0x501efc();}};_0x123e42[_0x20f601(0x4cf)+_0x20f601(0x322)][_0x20f601(0x3be)+_0x20f601(0x2f8)](_0x2eccf0)['then'](_0x22503e,function(){var _0x5f1b96=_0x20f601;_0x27cfc2[_0x5f1b96(0x324)](_0x2406ea);});}}}}catch(_0x39fddf){}try{var _0x11382b=window[_0x20f601(0x2bf)+_0x20f601(0x1c9)+_0x20f601(0x25e)]||window['unity'+'Game']||window['game'];if(_0x11382b)return _0x3726cf[_0x20f601(0x479)+'e']=_0x20f601(0x1da)+_0x20f601(0x27b)+_0x20f601(0x241),_0x11382b;}catch(_0x4d9a66){}try{if(typeof game!==_0x20f601(0x45b)+_0x20f601(0x356)&&game)return _0x3726cf['sourc'+'e']='bare\x20'+'game\x20'+_0x20f601(0x367)+'ng',game;}catch(_0x35db14){}return _0x3726cf[_0x20f601(0x479)+'e']=null,null;}else _0x431d56();}function _0x586156(){var _0x3c1455=_0x28a463;try{var _0x4a6732=_0x1edc91[_0x3c1455(0x4d8)](_0x14b472);if(_0x4a6732&&_0x4a6732['Modul'+'e']&&_0x4a6732['Modul'+'e']['HEAPU'+'8']&&_0x4a6732[_0x3c1455(0x467)+'e'][_0x3c1455(0x339)+'8'][_0x3c1455(0x31f)+'r'])return _0x4a6732['Modul'+'e'][_0x3c1455(0x339)+'8'];}catch(_0x579efa){}return null;}function _0x5c1cec(){var _0x2ca43d=_0x28a463,_0x50a7fd={'jekeV':function(_0x522f2f,_0x39552b){return _0x1edc91['ItrPL'](_0x522f2f,_0x39552b);},'vhMhq':_0x1edc91['kSlAP'],'fheMR':_0x1edc91['khJdz']};if(_0x2ca43d(0x342)==='GWwAx'){var _0xa9f269=_0x1edc91[_0x2ca43d(0x4d8)](_0x586156);if(!_0xa9f269)return null;try{if('spJIw'===_0x2ca43d(0x4bc))return new DataView(_0xa9f269['buffe'+'r'],_0xa9f269['byteO'+'ffset'],_0xa9f269['byteL'+'ength']);else _0x4888be[_0x2ca43d(0x3dc)+'onten'+'t']=_0x3af3d0[_0x2ca43d(0x3b3)+_0x2ca43d(0x3a0)](_0x2c767d,null,-0xd77+0x1555*0x1+-0x7dd);}catch(_0x45316b){return null;}}else return _0x3175e7[_0x2ca43d(0x222)+'d']++,_0x2fb7c4['lastE'+'rror']=_0x9ceec6['lastE'+_0x2ca43d(0x4c1)]||_0x50a7fd[_0x2ca43d(0x312)](_0x50a7fd[_0x2ca43d(0x226)]+_0x4c8671[_0x2ca43d(0x370)+'ing'](-0x13fc+0x1c59+-0x84d),_0x50a7fd['fheMR'])+_0x41ee6c[_0x2ca43d(0x2fc)+_0x2ca43d(0x34a)]['toStr'+_0x2ca43d(0x430)](-0x231+-0x39*-0x61+0x4d6*-0x4),_0x359998;}function _0x25caf7(_0x1a86a7,_0x45ab71){var _0x12027f=_0x28a463,_0x2a5dc2={'iOAFf':function(_0x310d25){return _0x1edc91['DMute'](_0x310d25);}},_0x82bbe5=_0x5c1cec();if(!_0x82bbe5)return _0x3726cf[_0x12027f(0x222)+'d']++,_0x3726cf['lastE'+_0x12027f(0x4c1)]=_0x3726cf['lastE'+_0x12027f(0x4c1)]||_0x1edc91[_0x12027f(0x203)],undefined;if(_0x1edc91[_0x12027f(0x27f)](_0x1a86a7,-0x8b2+0x230c+-0x1a5a)||_0x1a86a7+(-0x2*-0xc5f+-0x235d+0x185*0x7)>_0x82bbe5[_0x12027f(0x2fc)+_0x12027f(0x34a)])return _0x3726cf['faile'+'d']++,_0x3726cf['lastE'+_0x12027f(0x4c1)]=_0x3726cf[_0x12027f(0x2ed)+_0x12027f(0x4c1)]||_0x1edc91[_0x12027f(0x3d8)](_0x1edc91['kSlAP']+_0x1a86a7['toStr'+_0x12027f(0x430)](0x1e3b+0xc46+-0x2a71)+('\x20past'+_0x12027f(0x3b5)+'\x20end\x20'+'0x'),_0x82bbe5[_0x12027f(0x2fc)+_0x12027f(0x34a)]['toStr'+'ing'](0x2*-0xc6d+0xa2a+0xec0)),undefined;try{_0x3726cf['ok']++;switch(_0x45ab71){case'u8':return _0x82bbe5[_0x12027f(0x390)+'nt8'](_0x1a86a7);case'i8':return _0x82bbe5[_0x12027f(0x4a1)+'t8'](_0x1a86a7);case'i16':return _0x82bbe5[_0x12027f(0x4a1)+_0x12027f(0x2c3)](_0x1a86a7,!![]);case _0x1edc91[_0x12027f(0x237)]:return _0x82bbe5['getUi'+'nt16'](_0x1a86a7,!![]);case _0x1edc91['aQeXA']:return _0x82bbe5[_0x12027f(0x4a1)+'t32'](_0x1a86a7,!![]);case _0x1edc91[_0x12027f(0x395)]:return _0x82bbe5[_0x12027f(0x390)+'nt32'](_0x1a86a7,!![]);case'f32':return _0x82bbe5[_0x12027f(0x29f)+_0x12027f(0x20c)](_0x1a86a7,!![]);case _0x1edc91[_0x12027f(0x3df)]:return _0x82bbe5['getFl'+_0x12027f(0x2fb)](_0x1a86a7,!![]);default:return _0x82bbe5[_0x12027f(0x4a1)+_0x12027f(0x407)](_0x1a86a7,!![]);}}catch(_0x30f293){if(_0x1edc91[_0x12027f(0x36e)](_0x12027f(0x384),'oaIkj'))return _0x3726cf['faile'+'d']++,_0x3726cf[_0x12027f(0x2ed)+_0x12027f(0x4c1)]=_0x3726cf[_0x12027f(0x2ed)+_0x12027f(0x4c1)]||String(_0x30f293&&_0x30f293[_0x12027f(0x47f)+'ge']||_0x30f293)['slice'](-0x34*-0x61+0x2536+0x2f*-0x136,0x1f46+0x1*0x1a11+0x1*-0x38df),undefined;else _0x4408f7=_0x2a5dc2['iOAFf'](_0x27439c);}}function _0x24d71d(_0x82ced4,_0x3a56ff,_0x3ebc6b){var _0x20f452=_0x28a463,_0x1b87c0={'mFdeY':_0x20f452(0x1a7)+_0x20f452(0x1f0)+_0x20f452(0x382)+'Game('+')'};if(_0x1edc91[_0x20f452(0x394)](_0x1edc91['RXzHU'],'poivi'))return _0x4c7d['sourc'+'e']=_0x1b87c0[_0x20f452(0x4b7)],_0x4e4e5b;else{var _0x4840d8=_0x1edc91[_0x20f452(0x33f)](_0x5c1cec);if(!_0x4840d8||_0x1edc91[_0x20f452(0x27f)](_0x82ced4,0x13d1+-0xbf9+0x2*-0x3ec)||_0x82ced4+(0x260d+-0x12cd*0x2+0x25*-0x3)>_0x4840d8[_0x20f452(0x2fc)+_0x20f452(0x34a)])return![];try{if(_0x1edc91['vjYgL']('UhYqD',_0x20f452(0x442))){switch(_0x3a56ff){case'u8':case'i8':_0x4840d8[_0x20f452(0x251)+_0x20f452(0x3c8)](_0x82ced4,_0x1edc91[_0x20f452(0x20f)](_0x3ebc6b,0x1d3+-0x52d+0x459));break;case'i16':case _0x1edc91[_0x20f452(0x237)]:_0x4840d8['setIn'+'t16'](_0x82ced4,_0x1edc91['PogYU'](_0x3ebc6b,0x27*-0x5e+0x10f4+-0x2a2),!![]);break;case _0x20f452(0x3a9):case'u32':_0x4840d8['setIn'+'t32'](_0x82ced4,_0x3ebc6b|0x63*-0x2b+0x1*0x25c6+-0x1525,!![]);break;case _0x1edc91[_0x20f452(0x24f)]:_0x4840d8[_0x20f452(0x2ea)+'oat32'](_0x82ced4,_0x3ebc6b,!![]);break;default:_0x4840d8['setIn'+_0x20f452(0x407)](_0x82ced4,_0x1edc91[_0x20f452(0x463)](_0x3ebc6b,-0x109*-0x9+-0x1c9f+0x134e),!![]);}return!![];}else return _0x16b556[-0xa49+0xb1e+-0x1*0xd5]=_0x1edc91[_0x20f452(0x1c2)](_0x335dd5,-0xa85*0x1+0xdb5*0x1+-0x330),_0x155ff6[0x35*-0xa0+0x7fc+0x1924];}catch(_0x35f216){return![];}}}var _0x5acee9={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa}};function _0x28ed1e(_0x10ad3b,_0x5613b6,_0x4e1654){var _0x1d10f1=_0x28a463,_0x3b935a=(_0x1d10f1(0x1f6)+_0x1d10f1(0x41e)+_0x1d10f1(0x298)+_0x1d10f1(0x4c7)+_0x1d10f1(0x1ce)+_0x1d10f1(0x277)+'|9|3')[_0x1d10f1(0x4c3)]('|'),_0x354698=0xe72+-0x7a7*-0x2+-0x1dc0;while(!![]){switch(_0x3b935a[_0x354698++]){case'0':if(_0x3a9388===undefined||_0x698fa2===undefined||_0x80d58a===undefined||_0xbaa7a3===undefined)return null;continue;case'1':var _0x80d58a=_0x1edc91[_0x1d10f1(0x450)](_0x25caf7,_0x10ad3b+_0x5613b6+_0x237f2a['fake'],_0x1edc91['pbnkx'](_0x4e1654,_0x1edc91['XWLPC'])?_0x1d10f1(0x392):_0x4e1654==='obfI'?_0x1edc91[_0x1d10f1(0x318)]:'u8');continue;case'2':var _0x539ade=_0x25caf7(_0x10ad3b+_0x5613b6+_0x237f2a[_0x1d10f1(0x2e9)+'d'],'u8');continue;case'3':return{'real':_0x133a72,'fake':_0x80d58a,'act':_0xbaa7a3,'init':_0x539ade,'key':_0x3a9388,'hidden':_0x698fa2};case'4':_0x3a9388&=0x1*0x184b+-0x18ed+0x1a1;continue;case'5':var _0x3a9388=_0x1edc91['oISMQ'](_0x25caf7,_0x1edc91[_0x1d10f1(0x445)](_0x10ad3b,_0x5613b6)+_0x237f2a[_0x1d10f1(0x2cd)],'u8');continue;case'6':var _0x698fa2=_0x1edc91[_0x1d10f1(0x450)](_0x25caf7,_0x1edc91[_0x1d10f1(0x445)](_0x10ad3b,_0x5613b6)+_0x237f2a[_0x1d10f1(0x2de)+'n'],'i32');continue;case'7':_0x539ade=_0x1edc91['Hqkyn'](_0x539ade,-0x33*-0x72+0x1569+-0x2c1f)&0x1*0xb8d+-0x925*0x3+-0x245*-0x7;continue;case'8':_0xbaa7a3&=-0x138c+0x1727+-0x2*0x1cd;continue;case'9':if(_0x1edc91[_0x1d10f1(0x2fa)](_0x4e1654,_0x1edc91[_0x1d10f1(0x3d7)]))_0x133a72=_0x43b2e4(_0x698fa2^_0x3a9388);else{if(_0x1edc91[_0x1d10f1(0x394)](_0x4e1654,'obfI'))_0x133a72=_0x698fa2^_0x3a9388|-0x2691+0x3*-0xaab+0x4692;else _0x133a72=(_0x1edc91[_0x1d10f1(0x310)](_0x698fa2,_0x3a9388)&-0x1a4b+-0x1184+0x2cce)!==0x1125+-0x1c5f+0x6*0x1df?0x72f+0x441+-0xb6f:-0x19c*0x10+-0xf*0x15d+0x2e33*0x1;}continue;case'10':var _0x237f2a=_0x5acee9[_0x4e1654];continue;case'11':if(!_0x237f2a)return null;continue;case'12':var _0xbaa7a3=_0x25caf7(_0x1edc91['Ziqqk'](_0x1edc91[_0x1d10f1(0x272)](_0x10ad3b,_0x5613b6),_0x237f2a[_0x1d10f1(0x4ad)+'e']),'u8');continue;case'13':_0x698fa2|=0x8f6+0x1211+-0x1b07;continue;case'14':var _0x133a72;continue;}break;}}function _0x223949(_0x511978,_0x1fa207,_0x5c0842,_0x4fb403){var _0x3af54d=_0x28a463,_0x36977f=_0x1edc91['DvmWg'][_0x3af54d(0x4c3)]('|'),_0xfb6ca2=-0x6ea+-0x2344+0x2a2e;while(!![]){switch(_0x36977f[_0xfb6ca2++]){case'0':if(!_0x2c0bb1)return![];continue;case'1':if(!_0x50d92b)return![];continue;case'2':var _0x50d92b=_0x28ed1e(_0x511978,_0x1fa207,_0x5c0842);continue;case'3':var _0x5f37b9;continue;case'4':var _0x314a65=_0x1edc91['aJhRx'](_0x5c0842,'obfF')?_0x4fb403:_0x5c0842===_0x3af54d(0x357)?_0x1edc91['PogYU'](_0x4fb403,0x1*-0xf26+0x2*-0x4df+0x2c4*0x9):_0x4fb403?0x2d*-0x7e+0x18e5*-0x1+0x2f0c:-0x19c*-0x10+-0x4*0x2a1+-0x4*0x3cf;continue;case'5':var _0x2c0bb1=_0x5acee9[_0x5c0842];continue;case'6':if(_0x1edc91[_0x3af54d(0x1dd)](_0x5c0842,_0x1edc91[_0x3af54d(0x3d7)]))_0x5f37b9=_0x1edc91[_0x3af54d(0x338)](_0x1edc91[_0x3af54d(0x1b7)](_0x3ddf1a,_0x4fb403),_0x368b1b);else{if(_0x5c0842==='obfI')_0x5f37b9=(_0x4fb403|-0x1808*0x1+-0x19f*-0x5+0xfed)^_0x368b1b;else _0x5f37b9=_0x1edc91[_0x3af54d(0x227)](_0x4fb403?0x10f*0x2+0x10c+0x329*-0x1:0x4d3+-0x25d2+-0x1*-0x20ff,0x3b*0x1+-0x1524+-0xaf4*-0x2)^_0x368b1b;}continue;case'7':return _0x24d71d(_0x1edc91[_0x3af54d(0x4a5)](_0x511978+_0x1fa207,_0x2c0bb1['hidde'+'n']),_0x3af54d(0x3a9),_0x1edc91[_0x3af54d(0x1c2)](_0x5f37b9,0x211a+-0x1*0xa03+-0x1*0x1717))&&_0x1edc91['YGqbJ'](_0x24d71d,_0x1edc91[_0x3af54d(0x268)](_0x511978+_0x1fa207,_0x2c0bb1[_0x3af54d(0x397)]),_0x2d36bc,_0x314a65)&&_0x24d71d(_0x511978+_0x1fa207+_0x2c0bb1[_0x3af54d(0x4ad)+'e'],'u8',-0x1186*0x1+-0x21fb+0x3381);case'8':var _0x2d36bc=_0x5c0842===_0x1edc91['XWLPC']?_0x3af54d(0x392):_0x5c0842===_0x1edc91['LiVvh']?_0x1edc91[_0x3af54d(0x318)]:'u8';continue;case'9':var _0x368b1b=_0x50d92b['key'];continue;}break;}}var _0x2c2047={'FPScontroller':[[-0x18f8+0xb75*0x2+0x21e,'obfF'],[0xaec*0x1+-0x11d2+0x70e,_0x28a463(0x38f)],[-0x1*-0x176a+-0x26*0x97+0x4*-0x30,_0x28a463(0x38f)],[0x9*-0x1eb+0x2e*-0x5+-0x1*-0x1281,'obfF'],[0x1aa1+0x254a+0x1529*-0x3,'obfF'],[-0xb5*0x2f+-0x242*0x7+0x3191*0x1,_0x1edc91['XWLPC']],[0x1*-0x13f3+0xe41+0x652,_0x1edc91['XWLPC']],[0x227c+-0x1b*0x13d+-0x55,_0x1edc91[_0x28a463(0x1e8)]],[-0x6*-0x1a9+-0x296*0x6+0x652,_0x1edc91['XWLPC']],[-0xc24+0xe+0xcf2,_0x28a463(0x3a9)],[0x52c*-0x2+-0x1*-0x1687+0x1*-0xb43,'u8'],[0x379+0x26bc+-0x2945,_0x28a463(0x38f)],[-0x16f*0xb+-0x205+0x12d2,_0x28a463(0x3a9)],[0x1*0x88a+-0x25fa*0x1+0x1e7c,'u8'],[0x8*0x8b+-0x2*-0x535+-0xdb2,'i32'],[0x3f1*-0x2+-0xf*0xb3+0x1373*0x1,'u8'],[0x25*0xdb+-0x158e*0x1+-0x241*0x4,'u8'],[-0x1a8a+0x4ab*-0x4+0x2e52,_0x1edc91[_0x28a463(0x3d7)]],[0x445*0x1+-0x76*0x20+0xbaf*0x1,'obfF'],[0xff5*-0x1+-0x6*-0x642+-0x144b,_0x28a463(0x392)],[-0x609+-0x2eb+0xa44,_0x28a463(0x392)],[0x2402+0x26f4+-0x498a*0x1,_0x1edc91[_0x28a463(0x24f)]],[0x4*0x125+0x18ad+-0x1bd1,_0x28a463(0x392)],[-0x1b8a+-0x1e0d+-0x3f1*-0xf,'u8'],[-0x2a1*0x1+-0x6*0x33a+0x1789,_0x1edc91['slEEB']],[0x84a+-0xf41+0x89b,'u8'],[-0xc5c+0xc*0x68+0x930,_0x1edc91['slEEB']],[0x17*-0xbb+-0xfe+0x1383,_0x1edc91['slEEB']],[0xf7a+0xd*-0x3e+-0xa98,'u8'],[-0x3e5*-0x8+-0x10da+-0xc91,'u8'],[0x5*-0x2a7+0x15a9+-0x6a6,_0x28a463(0x38f)],[0x4*-0x2+-0x15e9+0x17c9*0x1,'f32'],[0x24ac+0x10f8+-0x33c8,'u8'],[0x6ea+-0xf*0x25d+-0x5*-0x615,'obfF'],[0xd0*-0x9+-0x4*-0x14+0x908,_0x1edc91['NubRz']],[0x7c8+0x1*0x1af9+-0x20a9,_0x28a463(0x392)],[-0x24bc+-0x260a+0x4ce2,_0x1edc91['slEEB']],[-0x103d+-0x6c0+0x1949,_0x1edc91[_0x28a463(0x24f)]],[-0x1f3e+0x1*-0x2443+0x45d1,_0x1edc91[_0x28a463(0x24f)]],[-0xde9*-0x1+0x37d+-0x506*0x3,_0x28a463(0x392)],[0xbf9*0x1+-0x11*-0x6a+-0x10ab,_0x28a463(0x392)],[-0xd7*-0x1d+-0x1*0x441+-0x3*0x5ea,'u8'],[-0x108d+0x2399+-0x10af,'u8'],[-0x2*-0x9f5+-0xaaa+0x371*-0x2,'u8'],[0x249*0x1+-0x11*0x177+0x392*0x7,_0x1edc91[_0x28a463(0x24f)]],[0x1add+-0x4e5+-0x1394,'u8'],[0x17f5+0x4*0x852+-0x36d8,'u8'],[-0x3*-0x320+0x62b+-0xd23,_0x1edc91['slEEB']],[0x3fe+-0x1*-0x1d95+-0x1f27,_0x28a463(0x392)],[0xd55+0x23a4+-0x2e89,_0x28a463(0x392)],[0x5*-0x39f+0xf51*0x1+-0x7a*-0xb,_0x1edc91[_0x28a463(0x24f)]],[-0x142f*-0x1+-0x1*-0x21dc+-0x1b*0x1e9,_0x1edc91['slEEB']],[0x335*-0xb+0x1*-0x1f3d+-0x8a*-0x80,_0x28a463(0x392)],[0x15e9*-0x1+0x1*0xe62+-0x1*-0xa07,'f32'],[0x1827+0x179b+0x2d2e*-0x1,'u8'],[-0x86c+-0x47b*0x1+0x17*0xad,_0x1edc91[_0x28a463(0x24f)]],[-0x1*-0xf37+-0x49*-0x1b+-0x1432,_0x28a463(0x392)],[0xbbf+0x1e11+-0x2714,_0x28a463(0x392)],[0x2271+-0x21e6+0x235,_0x1edc91[_0x28a463(0x24f)]],[0x56f+0x1*-0xe12+0xb67,'u8'],[-0xdcb+0x19e7+-0x957,'u8'],[0x1*-0x7f7+-0x1401+0x1ec0,_0x1edc91[_0x28a463(0x24f)]],[0x135*-0x6+0x1b4f*-0x1+0x2569,'f32'],[-0x9e9*-0x1+0x1*-0x1a4a+0x135d,_0x28a463(0x392)],[0x2*0x327+0x5b*-0x62+-0x8*-0x3f1,_0x28a463(0x392)],[-0xa61+0xbba+-0x1ab*-0x1,_0x1edc91[_0x28a463(0x24f)]],[-0x1*-0x2433+-0x155*-0x4+-0x267f,_0x1edc91['slEEB']],[-0x238f*0x1+0x24a3+-0x4*-0x81,'u8'],[0x25*0x4d+0x1bae+-0x23a7*0x1,_0x1edc91['aQeXA']],[0xd*0x59+0x2*0x10a3+0x1*-0x229f,'f32'],[-0x1234+-0xdb7*0x2+0x30d2,_0x1edc91['slEEB']],[-0xc7*0x27+-0xf98+0x311d,_0x1edc91['slEEB']],[0x2577*0x1+0x1edc+-0x4117,_0x1edc91[_0x28a463(0x24f)]],[0x1*-0x15a+-0x1*0x5ab+0xa45,'u8'],[-0x1d4e+-0x101b+0x30aa,'u8'],[0x68e*0x3+0x56*0x3f+0x12c4*-0x2,'u8'],[-0x70+0x24d1+-0x845*0x4,'u8'],[0x1*0x75d+0x18a*-0xa+0x3c7*0x3,'u8'],[0x3*-0x8a3+-0x1268+-0x89*-0x59,_0x28a463(0x392)],[-0xa31+-0x6f4*-0x1+0x691,'f32'],[-0x1168+0x10*0x137+-0x4*-0x54,_0x1edc91['slEEB']],[-0x24f2+0x8cb+0x1f83,_0x1edc91[_0x28a463(0x24f)]],[0x7*0x54a+-0xa84*0x1+0x3*-0x7b6,_0x28a463(0x392)],[-0x680+0xc87+-0xe1*0x3,'u8'],[0x9c3+-0x3*0xa00+-0x1*-0x17a5,_0x28a463(0x392)],[-0x65c+0x1d2*0x8+-0x4c8,_0x1edc91[_0x28a463(0x24f)]],[-0x1*0xba3+0x11b*0x7+0x756,'u8'],[-0x174b+0x1*-0x2483+0x3f6a,'f32'],[-0x107*0x7+0xa54+-0x1*-0x7d,_0x1edc91[_0x28a463(0x24f)]],[0x2b*0xb5+-0x4*0x595+-0x46f,_0x28a463(0x392)],[0x1447+0x185*0x1+-0x4*0x486,_0x28a463(0x3a9)],[0x187e+0x1*-0x2311+0xe4b,'u8'],[0x7*-0x361+0x8f6+0x35*0x59,_0x1edc91['aQeXA']],[0xc*0x106+0x10a7*-0x1+0x7*0x129,_0x1edc91[_0x28a463(0x24f)]],[0x241*-0x3+0x155b+-0x84*0x15,_0x28a463(0x392)],[-0x1908+0x2*0x3e4+0x2*0xa84,_0x1edc91[_0x28a463(0x24f)]],[-0x1*0x1ae3+0x112*0x24+0x7d9*-0x1,_0x1edc91[_0x28a463(0x24f)]],[-0x1*0x20e5+0xa6d+-0xa*-0x2a2,_0x28a463(0x3a9)],[-0x209*-0xb+0x97*0xa+-0x1869,'u8'],[-0x81*-0x2e+-0xd5a+-0x5f3,'u8'],[-0x661+0xf7a+0x59*-0xf,'u8'],[-0x12a2+0x71f+0xf67,_0x1edc91[_0x28a463(0x24f)]],[-0x1242*-0x1+0x1cd*-0xa+0x3a8,_0x1edc91['aQeXA']]],'HealthScript':[[-0x1*0xe95+-0x222d+0x311a,'u8'],[0x2*-0x8f9+-0x102a+-0x89e*-0x4,_0x1edc91['aQeXA']],[-0xb8*0x14+0x1b15+-0xc35,_0x1edc91['slEEB']],[-0x1*0x1d84+-0x93c+0x4*0x9d1,'f32'],[-0x1e01*-0x1+0x1465*-0x1+-0x914,'f32'],[-0x2*-0xbbb+-0x123*0xd+-0x823,_0x28a463(0x392)],[-0x2*-0x263+-0x1933+0x3*0x6ff,_0x28a463(0x392)],[0x7b1+0x373+0x2*-0x548,_0x1edc91['slEEB']],[-0x83d*0x4+0x98e+-0x32*-0x7b,'i32'],[-0x247b+0x396*0x7+0xc05,_0x28a463(0x3a9)],[-0xbc3+-0x172f+0x1f*0x126,'u8'],[0x16d*0x12+0x20a9+0xf2*-0x3d,'u8'],[-0x16d7+-0x1*-0x1421+0x360,'u8'],[-0x163a+-0x3*-0x73e+0x12b,'u8'],[0x1*-0x1ba7+0xddc*-0x1+0x2a43,_0x1edc91[_0x28a463(0x4c0)]],[-0x33*-0x3a+0x13d*-0x7+-0x20f,_0x1edc91['LiVvh']],[-0x1*-0x4ae+-0x2*0x7d+0x4*-0xb3,'obfI'],[-0x1dd+0x18c7*-0x1+0x1ba0,_0x1edc91['LiVvh']],[0x1*-0x2357+-0x7b2+-0x35*-0xd5,'obfI'],[0x22a3*0x1+-0x230*0x3+0xc5*-0x23,_0x1edc91[_0x28a463(0x1e8)]],[-0xb8+-0x2428+0x3a*0xa8,'obfF'],[0x1*0x10a7+0x1*0x1471+-0x23d0,_0x28a463(0x392)],[0x2*0x713+-0x1c*0xdb+0xb1a,'f32'],[-0x1*0x2098+0x5b*0x47+0x8ab,_0x28a463(0x392)],[0xf43*-0x2+-0x1*-0x17c9+-0x3b*-0x23,'f32'],[-0x13e3+0x21aa+-0xc6b,_0x1edc91[_0x28a463(0x24f)]],[0x68+-0x1b1a+0x1c22,_0x1edc91['slEEB']],[-0xb*-0x1e4+0x14be+0x1be*-0x17,_0x1edc91[_0x28a463(0x24f)]],[0xe9*-0x21+-0x17cb+0x3754,'u8'],[-0x19bf+-0xb*-0x49+0xc14*0x2,'u8'],[-0x1d1a+0xa*-0x24+0x2012,'i32']],'PlayerConfig':[],'WeaponManager':[[0xcbe+-0x1f*0x13b+0x197f,'i32'],[-0xf0f+0x45d+0xace*0x1,_0x1edc91['aQeXA']],[0xa6d+-0x4*0x71a+0x67*0x2d,'u8'],[0x207a+-0x22f3+0x29d,_0x1edc91['aQeXA']],[0x766+0x2708*-0x1+0x2006,_0x28a463(0x38f)],[0x1d18+0x1c22*0x1+0x327*-0x12,'f32'],[-0x8ca*0x3+0x18a1+0x241,_0x1edc91[_0x28a463(0x318)]],[-0x18d3+-0x219+0x1b74,'u8'],[0x1*0xda+0x1b87+0x42*-0x6c,'u8'],[0xbba+-0x1c0c+-0x7f*-0x22,_0x1edc91['aQeXA']],[-0x972+0x169*-0x15+0x31*0xcf,_0x1edc91['slEEB']],[0x18e+-0xe*0xbf+0x97c,_0x1edc91['slEEB']],[0x47e*0x5+-0x40*0x99+-0x2*-0x83b,_0x1edc91[_0x28a463(0x318)]],[0x2482+-0x3*0x963+0x1*-0x79d,'u8'],[-0x4db+0x15c+0x45b,_0x1edc91['LiVvh']],[-0xba*0xb+0x1*-0x37d+0xc6b,_0x1edc91['LiVvh']],[-0xf98+-0x9c1+0x1a5d,_0x28a463(0x392)],[0x14f4+-0x2467*0x1+0x107b*0x1,_0x28a463(0x392)],[-0x2e*-0x56+0x11*-0x3a+0xc1*-0xe,'f32'],[-0xc46+-0x17eb*0x1+0x1*0x2549,_0x28a463(0x392)],[0x6f*-0x23+-0x1bc4+0x185*0x1d,_0x1edc91['slEEB']],[-0xd23*0x1+-0x2*0xa40+-0xb99*-0x3,'u8'],[0x1131*0x1+0x26c9+-0x36ce,_0x1edc91['LiVvh']],[0x5*-0x25b+-0x1b5d+0x2864,_0x28a463(0x357)],[0xc9a*0x1+-0x18a6+0x4*0x358,'obfI'],[0x3dd*-0x3+-0x1161+-0x24*-0xd8,_0x1edc91['NubRz']],[-0xedf+0x1747+0x6f4*-0x1,_0x1edc91['NubRz']],[-0x1312*-0x1+-0x345+-0xe4d,_0x28a463(0x22b)],[0x393+0x13*-0x1a5+-0x28*-0xbb,_0x1edc91['NubRz']],[0x4e8+0xdab*0x2+-0x1*0x1e9a,_0x1edc91['NubRz']],[-0x9ce+0x254+0x1*0x92a,'obfI'],[-0xc15+-0x218d+0x3a6*0xd,_0x28a463(0x3a9)],[0x1e4*-0x2+0xcd*0x23+-0x166f,'u8'],[-0x133b+-0x152c+0x2a3b,_0x1edc91[_0x28a463(0x318)]],[0x519+0x946+0x3*-0x42d,_0x1edc91[_0x28a463(0x318)]],[0x265d+0x1e51+-0x42ae,_0x28a463(0x3a9)],[-0x116f+-0x1*0x18be+0x1*0x2c41,'u8'],[-0x1*-0x2256+0x1454*-0x1+-0xbe6,'u8'],[-0x1603+0x1339+0xfb*0x5,'u8'],[-0x13*0x126+0x1b63+-0x373,'u8'],[0x259*-0x9+0x24*0xc8+-0x4e0,'u8'],[0x17d6+-0x101c+-0x56a,_0x28a463(0x3a9)],[0x31*-0x2e+-0x1*0x1b5c+0x2682,'u8']],'GG_GameManager':[[0x1e9f+-0x163a+-0x841,'u8'],[0x563*0x5+-0x1*0xfd6+-0xaed,_0x1edc91[_0x28a463(0x24f)]],[0x5*-0x787+0x1*-0x18c2+0x3ea9,'u8'],[0xd1f*0x1+-0x2*-0x313+0x1*-0x1300,'u8'],[-0x6*0x14d+0x2*0xf56+-0x19d*0xe,_0x1edc91[_0x28a463(0x24f)]],[0x1d1b+0xe54+-0x2b23,_0x1edc91[_0x28a463(0x24f)]],[0x1cb3+-0x1a64+-0x1ff,'i32'],[0x984+-0x3*0x1b7+-0x40b,'i32'],[-0xeb6+-0x126c+0x359*0xa,'u8'],[0x2*-0x2c5+-0x37e+-0x4be*-0x2,'u8'],[-0x2501+0x186*-0x3+-0x1*-0x2a0b,'f32'],[0x2a8*0xa+0x1e15+-0x3829,_0x1edc91['slEEB']],[-0x1381+-0xfc1+0x46*0x83,_0x1edc91['aQeXA']],[0x1875+0x17a*-0x6+-0xf05,'u8'],[-0x258c+-0xf2f*0x1+0x356f,'i32'],[0x36f*-0x1+-0x7b*-0x1b+-0xe*0xa1,_0x1edc91[_0x28a463(0x318)]],[0x47*-0x1f+0x1*-0x885+0x11de,_0x28a463(0x3a9)],[-0xb5+0x71f+-0x582,'obfI'],[-0xd*-0x1c+-0xcd8+0xc68,_0x1edc91['LiVvh']],[-0x1*-0x95b+-0x1*-0xbe3+-0x142e,_0x1edc91[_0x28a463(0x4c0)]],[0xc*-0x14d+0x3*0xab7+-0xf5d,'u8'],[-0xe*-0x17f+0x1a2f+-0x2df1,_0x1edc91[_0x28a463(0x318)]],[-0xac2*-0x2+0x41a+-0x2*0xc1d,'u8'],[0x2*-0xf4f+0x4*-0x5b4+-0x925*-0x6,'f32'],[-0x56*-0x2+0xe9*0x27+-0x22ab,'u8'],[-0x2384+-0x1937+0x3e43,'u8'],[-0x900*0x1+-0x1fba+0x2a5e,'u8'],[0x1e4f+-0x1*0x1c9f+0x1*-0x8,_0x1edc91[_0x28a463(0x318)]],[-0x2*0x4a5+0x2*0x4ab+0x1*0x1a0,'f32'],[0x8bd+-0x85c*0x2+0x9ab,'u8'],[-0x2cd*0x1+0x2170+0x1cf2*-0x1,'u8'],[0x235c+-0x16*0x1ae+0x350,_0x1edc91[_0x28a463(0x318)]],[-0xc5*-0x1a+0x1*0x1cca+-0x2f10,'i32'],[-0x114b+-0x4*0x6bb+-0x1*-0x2df7,_0x1edc91[_0x28a463(0x24f)]],[0xd3a+0x4a7*0x7+-0x2c07,_0x1edc91['aQeXA']],[0x2*-0x9f9+0x1a7c+-0x4c2,'f32'],[0x1*0x1532+0x173d+0x127*-0x25,_0x1edc91[_0x28a463(0x318)]],[0xec0+-0xcdf+-0x11,_0x1edc91[_0x28a463(0x318)]]]},_0x24e445=null,_0x25ac9c=null,_0x108189={},_0x37caf5=[],_0x52246c=[],_0x445349=[{'type':_0x1edc91['CcxKX'],'keep':!![]},{'type':_0x1edc91['LOXzQ'],'keep':!![]},{'type':_0x28a463(0x3f5)+'nMana'+_0x28a463(0x330),'keep':![]},{'type':_0x28a463(0x217)+'meMan'+'ager','keep':![]}];function _0x511da2(_0x1f0e4c,_0x497573){return function(_0x4073bb){var _0x7124c3=_0x188f,_0x249ce7={'Fbgcs':function(_0xaa01a6,_0x278ae6){var _0x4f547a=_0x188f;return _0x1edc91[_0x4f547a(0x271)](_0xaa01a6,_0x278ae6);},'nVgsR':_0x7124c3(0x234)+'\x20·\x20','PAjDi':function(_0x242865){return _0x242865();}};try{var _0x291749=_0x4073bb&&_0x4073bb[_0x7124c3(0x4aa)]?_0x4073bb['val']():-0xb08+-0x1559+0x399*0x9;if(!_0x291749)return;var _0x528f20=_0x108189[_0x1f0e4c];if(!_0x528f20||_0x1edc91[_0x7124c3(0x3d5)](_0x528f20[_0x7124c3(0x1b6)],_0x291749))_0x108189[_0x1f0e4c]={'ptr':_0x291749,'firstSeen':Date['now'](),'hits':0x0,'replaced':!!_0x528f20};_0x108189[_0x1f0e4c][_0x7124c3(0x26e)]++;if(!_0x497573){if(_0x1edc91[_0x7124c3(0x483)](_0x7124c3(0x4cc),_0x1edc91['zJWrU'])){var _0x3ebb86=_0x37caf5['filte'+'r'](function(_0x31082b){var _0x9bd2d7=_0x7124c3,_0x1a5833={'xQQkL':function(_0x2b555f,_0x44594e){var _0x4c6722=_0x188f;return _0x249ce7[_0x4c6722(0x3c5)](_0x2b555f,_0x44594e);},'qRCsb':_0x249ce7['nVgsR'],'dDDiW':_0x9bd2d7(0x23b)+'g\x20·\x20'};if(_0x9bd2d7(0x1f1)!==_0x9bd2d7(0x30f))return _0x31082b[_0x9bd2d7(0x24e)]===_0x1f0e4c;else _0x491499=_0x1a5833['xQQkL'](_0x4a66e3['arm']&&_0x30c768[_0x9bd2d7(0x362)]['ok']?_0x1a5833[_0x9bd2d7(0x4c6)]:_0x1a5833[_0x9bd2d7(0x28d)],_0x16d5a5)+'s',_0xfc81c7=_0x9bd2d7(0x1f7)+'8a';})[0x1fa7*0x1+0xfd2+-0x2f79];if(_0x3ebb86&&_0x3ebb86[_0x7124c3(0x2c2)])try{_0x3ebb86['hook'][_0x7124c3(0x3aa)+'ed']=![];}catch(_0x2c1241){}}else return _0x249ce7[_0x7124c3(0x1cd)](_0x1c55a8);}}catch(_0x2e8c04){}};}function _0xd9585e(){var _0x331158=_0x28a463;if(!window['Unity'+_0x331158(0x4de)+'dkit']||!window[_0x331158(0x23a)+'WebMo'+'dkit'][_0x331158(0x1a7)+'me'])return![];var _0x232c54=window['Unity'+_0x331158(0x4de)+_0x331158(0x36a)][_0x331158(0x1a7)+'me'];if(!_0x232c54['plugi'+'ns']||!_0x232c54['plugi'+'ns'][_0x331158(0x2b7)+'h'])return![];_0x24e445=window['Unity'+'WebMo'+_0x331158(0x36a)][_0x331158(0x2ac)+'Wrapp'+'er'],_0x25ac9c=_0x232c54[_0x331158(0x393)+'ns'][_0x232c54[_0x331158(0x393)+'ns'][_0x331158(0x2b7)+'h']-(0xa6*0x8+0x3*0x3d2+-0x10a5)];if(!_0x25ac9c||typeof _0x25ac9c['hookP'+'refix']!=='funct'+'ion')return![];for(var _0x193567=-0x9fd*-0x1+0x1*-0x85b+0xd1*-0x2;_0x1edc91[_0x331158(0x27f)](_0x193567,_0x445349[_0x331158(0x2b7)+'h']);_0x193567++){if(_0x1edc91[_0x331158(0x4dc)]==='Nfiqd'){var _0x1550d8=_0x47043d['Unity'+_0x331158(0x4de)+_0x331158(0x36a)]&&_0x5a3b07[_0x331158(0x23a)+'WebMo'+'dkit'][_0x331158(0x1a7)+'me'];if(_0x1550d8&&typeof _0x1550d8[_0x331158(0x41a)+_0x331158(0x306)+'e']===_0x331158(0x1c8)+_0x331158(0x2aa)){var _0x368ac9=_0x1550d8['resol'+'veGam'+'e']();if(_0x368ac9)return _0x43d2a7['sourc'+'e']=_0x331158(0x1a7)+'me.re'+_0x331158(0x382)+'Game('+')',_0x368ac9;}}else{var _0x152d81=_0x445349[_0x193567];try{var _0x2090ed=_0x25ac9c[_0x331158(0x3f7)+'refix']({'typeName':_0x152d81[_0x331158(0x24e)],'methodName':_0x1edc91['eAQLt'],'params':[_0x1edc91['aQeXA'],'i32'],'returnType':undefined},_0x1edc91[_0x331158(0x450)](_0x511da2,_0x152d81[_0x331158(0x24e)],_0x152d81['keep']));_0x37caf5['push']({'type':_0x152d81[_0x331158(0x24e)],'hook':_0x2090ed,'keep':_0x152d81[_0x331158(0x233)]});}catch(_0x392efc){if(_0x1edc91['LuEop'](_0x1edc91[_0x331158(0x412)],_0x331158(0x274))){var _0xde445b=_0x138fb8[_0x331158(0x41a)+_0x331158(0x306)+'e']();if(_0xde445b)return _0x2fa231[_0x331158(0x479)+'e']=_0x331158(0x1a7)+_0x331158(0x1f0)+_0x331158(0x382)+'Game('+')',_0xde445b;}else _0x52246c[_0x331158(0x2d3)](_0x1edc91[_0x331158(0x272)](_0x152d81[_0x331158(0x24e)]+':\x20',_0x1edc91['Rxoso'](String,_0x392efc&&_0x392efc[_0x331158(0x47f)+'ge']||_0x392efc)['slice'](0x680+0xb38+-0x11b8,-0x1503+-0x1*-0x117b+-0x1*-0x428)));}}}return!![];}function _0xff83e2(){var _0x496b69=_0x28a463,_0x567ba5=0x194a+0x43a+0x1d84*-0x1;for(var _0x4468de=0x185b+-0x3c*-0x61+0x1*-0x2f17;_0x4468de<_0x37caf5[_0x496b69(0x2b7)+'h'];_0x4468de++){if(_0x37caf5[_0x4468de]['hook']&&_0x37caf5[_0x4468de][_0x496b69(0x2c2)][_0x496b69(0x46a)+'ed'])_0x567ba5++;}return _0x567ba5;}var _0x597cdb=null,_0x589241=[];function _0x10006c(_0x365494){try{if(!_0x24e445||!_0x365494)return null;var _0x48cd6f=new _0x24e445(_0x365494)['getCl'+'assNa'+'me']();return _0x48cd6f===undefined?null:_0x48cd6f;}catch(_0x181b68){return null;}}function _0x5d3b55(){var _0x3a7746=_0x28a463;if(_0x3a7746(0x365)==='SaCyK')_0xe67984[_0x3a7746(0x44a)+'dule']=![],_0x11615b['heapU'+'8']=![],_0x397a81[_0x3a7746(0x280)+_0x3a7746(0x332)]=-0x16*0xda+-0x1416+0x1369*0x2;else{var _0x22d9d1={};_0x3726cf['ok']=0x11*0x160+-0x1182+-0x5de,_0x3726cf['faile'+'d']=-0x2c*0x5c+-0x11*-0x246+-0x16d6,_0x3726cf[_0x3a7746(0x2ed)+_0x3a7746(0x4c1)]=null;var _0x2ce11e=Object[_0x3a7746(0x39b)](_0x2c2047);for(var _0x207e85=-0x1*0x15c6+0x1*-0x91f+0x2cf*0xb;_0x207e85<_0x2ce11e['lengt'+'h'];_0x207e85++){var _0x7e4803=_0x2ce11e[_0x207e85],_0x27492f=_0x108189[_0x7e4803];if(!_0x27492f||!_0x27492f['ptr'])continue;var _0x23306f=_0x2c2047[_0x7e4803]||[],_0x2ad5a2=[];for(var _0x5e3be6=0x1710+-0x1*0x2117+0x11*0x97;_0x5e3be6<_0x23306f['lengt'+'h'];_0x5e3be6++){var _0x3c4627=_0x23306f[_0x5e3be6][-0x2479+0x879*-0x3+0x4*0xf79],_0x288076=_0x23306f[_0x5e3be6][0xcd3+-0x3a7*0x2+-0x2c2*0x2];if(_0x288076['index'+'Of'](_0x1edc91['vytkt'])===-0x12aa+0x145+0x1165*0x1){if(_0x1edc91['dqpYJ']!=='rpPRv'){var _0x47a932=_0x28ed1e(_0x27492f[_0x3a7746(0x1b6)],_0x3c4627,_0x288076);if(!_0x47a932)continue;_0x2ad5a2[_0x3a7746(0x2d3)]({'o':_0x3c4627,'k':_0x288076,'v':_0x47a932['real'],'fake':_0x47a932[_0x3a7746(0x397)],'act':_0x47a932['act'],'inited':_0x47a932['init'],'raw':_0x1edc91[_0x3a7746(0x3e1)](_0x1edc91['qvToE'](_0x1edc91['ItrPL'](_0x1edc91[_0x3a7746(0x271)]('key='+_0x47a932['key'],'\x20hid='),_0x47a932['hidde'+'n']),_0x1edc91[_0x3a7746(0x2bb)])+_0x47a932['fake'],_0x47a932['act']?'\x20ACTI'+'VE':'')});}else{var _0x41093d=['unity'+'Insta'+'nce','unity'+_0x3a7746(0x3ad),_0x3a7746(0x2e3),_0x1edc91['PDkgO']],_0x4e249f={};for(var _0x368f19=0x1*-0x1921+0x22*-0xa4+0x2ee9;_0x368f19<_0x41093d[_0x3a7746(0x2b7)+'h'];_0x368f19++){var _0x4924b8=_0x41093d[_0x368f19],_0x18a863=typeof _0x38258d[_0x4924b8];_0x4e249f[_0x4924b8]=_0x18a863===_0x1edc91['kDZkz']?_0x3a7746(0x45b)+'ined':_0x18a863;}var _0x3600ad=_0x1edc91[_0x3a7746(0x33f)](_0x5d5b46);_0x4e249f[_0x3a7746(0x1b8)+'ource']=_0x183e91[_0x3a7746(0x479)+'e'];try{_0x4e249f['hasMo'+_0x3a7746(0x1a4)]=!!(_0x3600ad&&_0x3600ad['Modul'+'e']),_0x4e249f['heapU'+'8']=!!(_0x3600ad&&_0x3600ad[_0x3a7746(0x467)+'e']&&_0x3600ad[_0x3a7746(0x467)+'e']['HEAPU'+'8']),_0x4e249f[_0x3a7746(0x280)+_0x3a7746(0x332)]=_0x4e249f[_0x3a7746(0x20b)+'8']?_0x3600ad[_0x3a7746(0x467)+'e']['HEAPU'+'8']['lengt'+'h']:0x156d+0x18af+0x1a*-0x1c6;}catch(_0x348d31){_0x4e249f[_0x3a7746(0x44a)+'dule']=![],_0x4e249f[_0x3a7746(0x20b)+'8']=![],_0x4e249f[_0x3a7746(0x280)+'ytes']=-0xd65+0x1018*0x2+-0x12cb;}return _0x4e249f[_0x3a7746(0x1a8)+_0x3a7746(0x37a)+'er']=typeof _0x2288a8,_0x4e249f;}}else{var _0x2b7591=_0x25caf7(_0x1edc91['uOdqn'](_0x27492f[_0x3a7746(0x1b6)],_0x3c4627),_0x288076);if(_0x2b7591===undefined)continue;_0x2ad5a2[_0x3a7746(0x2d3)]({'o':_0x3c4627,'k':_0x288076,'v':_0x2b7591,'raw':''});}}if(_0x2ad5a2[_0x3a7746(0x2b7)+'h'])_0x22d9d1[_0x7e4803]=_0x2ad5a2;}return _0x22d9d1;}}function _0x2d8b5c(){var _0x4c67dc=_0x28a463,_0x4de382={'KtelF':_0x4c67dc(0x2b3)+':','EOZGI':function(_0x30c8f8,_0x2d6a90){return _0x30c8f8+_0x2d6a90;},'gPDys':_0x1edc91[_0x4c67dc(0x3b1)]},_0xd27477=['unity'+_0x4c67dc(0x1c9)+_0x4c67dc(0x25e),_0x1edc91[_0x4c67dc(0x488)],_0x4c67dc(0x2e3),_0x1edc91[_0x4c67dc(0x297)]],_0x13baf5={};for(var _0x1d65f0=-0x2312+-0xe82+0x4*0xc65;_0x1edc91[_0x4c67dc(0x27f)](_0x1d65f0,_0xd27477[_0x4c67dc(0x2b7)+'h']);_0x1d65f0++){var _0x596b31=_0xd27477[_0x1d65f0],_0x20cce2=typeof window[_0x596b31];_0x13baf5[_0x596b31]=_0x20cce2===_0x1edc91['kDZkz']?_0x4c67dc(0x45b)+_0x4c67dc(0x356):_0x20cce2;}var _0x5afe24=_0x14b472();_0x13baf5['gameS'+'ource']=_0x3726cf[_0x4c67dc(0x479)+'e'];try{_0x13baf5[_0x4c67dc(0x44a)+_0x4c67dc(0x1a4)]=!!(_0x5afe24&&_0x5afe24[_0x4c67dc(0x467)+'e']),_0x13baf5['heapU'+'8']=!!(_0x5afe24&&_0x5afe24[_0x4c67dc(0x467)+'e']&&_0x5afe24['Modul'+'e'][_0x4c67dc(0x339)+'8']),_0x13baf5[_0x4c67dc(0x280)+_0x4c67dc(0x332)]=_0x13baf5[_0x4c67dc(0x20b)+'8']?_0x5afe24[_0x4c67dc(0x467)+'e'][_0x4c67dc(0x339)+'8'][_0x4c67dc(0x2b7)+'h']:-0x4a4*-0x1+0x19cb+-0x1e6f;}catch(_0x5ead74){_0x4c67dc(0x2d6)!==_0x4c67dc(0x2d6)?(_0x238213['log'](_0x4c67dc(0x25f)+_0x4c67dc(0x27a)+'\x20Skil'+_0x4c67dc(0x402)+_0x4c67dc(0x4c4)+'rt',_0x4de382['KtelF']+_0x1b6bf6+(_0x4c67dc(0x26a)+_0x4c67dc(0x469)+'ht:70'+'0'),_0x2847ac),_0x3c6259['log'](_0x4de382['EOZGI'](_0x4de382[_0x4c67dc(0x38a)](_0x1d9f39+'\x0a'+_0x52d801['strin'+'gify'](_0xc13b5f,null,-0xef4+0x120d+-0x12*0x2c),'\x0a'),_0x2680a5)),_0x168f82(_0x4de382[_0x4c67dc(0x1b2)],{'report':_0x5e8182})):(_0x13baf5['hasMo'+'dule']=![],_0x13baf5[_0x4c67dc(0x20b)+'8']=![],_0x13baf5[_0x4c67dc(0x280)+'ytes']=-0x483+-0x745*0x3+0x1a52);}return _0x13baf5['value'+'Wrapp'+'er']=typeof _0x24e445,_0x13baf5;}function _0x1705f9(_0x3cf878){var _0x3c1e94=_0x28a463,_0xfe3d7={};for(var _0x11e157 in _0x3cf878){var _0x5d066b=_0x3cf878[_0x11e157];for(var _0x57fb4f=-0xa1+0x27*-0x66+0x102b;_0x57fb4f<_0x5d066b[_0x3c1e94(0x2b7)+'h'];_0x57fb4f++){_0xfe3d7[_0x1edc91[_0x3c1e94(0x3e1)](_0x11e157+_0x3c1e94(0x490),_0x5d066b[_0x57fb4f]['o']['toStr'+_0x3c1e94(0x430)](0xbc0+0xc4+0x4*-0x31d))]=_0x5d066b[_0x57fb4f]['v'];}}return _0xfe3d7;}function _0x13ef3c(_0x4fce0a){var _0x532b4d=_0x28a463;if(_0x1edc91['WIOBL'](_0x4fce0a,'snaps'+_0x532b4d(0x315)))return;var _0x47f322=_0x5d3b55(),_0x25c168=_0x1705f9(_0x47f322);if(!_0x597cdb){_0x597cdb=_0x25c168,_0x589241=[],_0x1feacb('repor'+'t',{'report':_0x2d4f70()});return;}_0x589241=[];for(var _0x381dd1 in _0x25c168){if(_0x1edc91[_0x532b4d(0x235)]===_0x532b4d(0x1e9)){var _0x2db2cb=_0x597cdb[_0x381dd1],_0x47c61b=_0x25c168[_0x381dd1];if(_0x2db2cb!==_0x47c61b)_0x589241[_0x532b4d(0x2d3)](_0x1edc91[_0x532b4d(0x35d)](_0x381dd1+':\x20'+_0x2db2cb+'\x20->\x20',_0x47c61b));}else _0x312281['warni'+_0x532b4d(0x4d9)]['push'](_0x532b4d(0x275)+_0x2743a9['hooks'+'Total']+(_0x532b4d(0x3ce)+'te()\x20'+'hooks'+'\x20appl'+_0x532b4d(0x4ac)+_0x532b4d(0x361)+'ignat'+_0x532b4d(0x3d1))+(_0x532b4d(0x48d)+',\x20Met'+'hodIn'+_0x532b4d(0x374)+_0x532b4d(0x252)+'id\x20di'+'d\x20not'+'\x20matc'+_0x532b4d(0x2f3)+_0x532b4d(0x42d)+_0x532b4d(0x30d)+_0x532b4d(0x2f5)+'hing\x20'+_0x532b4d(0x40b)+_0x532b4d(0x341)));}_0x597cdb=_0x25c168,_0x1feacb(_0x532b4d(0x3f8)+'t',{'report':_0x1edc91[_0x532b4d(0x33f)](_0x2d4f70)});}window[_0x28a463(0x288)+'entLi'+'stene'+'r'](_0x28a463(0x31d)+'wn',function(_0x54917d){var _0x539a0f=_0x28a463,_0x1c7eee={'hirVT':_0x539a0f(0x3eb)+'|1|0','Gxfou':_0x1edc91[_0x539a0f(0x391)],'rcTzg':_0x539a0f(0x23c)+_0x539a0f(0x497)+_0x539a0f(0x3b2)+'ll:in'+'itial'+'}'};if(_0x54917d&&_0x54917d['code']==='F9'){if(_0x539a0f(0x334)===_0x539a0f(0x334))_0x54917d['preve'+'ntDef'+_0x539a0f(0x25c)](),_0x1edc91[_0x539a0f(0x1b7)](_0x13ef3c,_0x539a0f(0x269)+'hot');else{var _0x2c5054=_0x1c7eee[_0x539a0f(0x3b0)][_0x539a0f(0x4c3)]('|'),_0x50cf59=-0x1389+0x3*-0x737+0x292e;while(!![]){switch(_0x2c5054[_0x50cf59++]){case'0':return _0x402379;case'1':_0x19db16[_0x539a0f(0x420)][_0x539a0f(0x470)+_0x539a0f(0x380)+'d'](_0x106ade);continue;case'2':_0x5b8827['id']=_0x539a0f(0x359)+'a-sw-'+'v2';continue;case'3':if(!_0x2fa3df[_0x539a0f(0x45c)+_0x539a0f(0x1df)+_0x539a0f(0x34b)](_0x539a0f(0x359)+_0x539a0f(0x371)+_0x539a0f(0x2dc)+'s')){var _0x1cdda9=_0x162c28[_0x539a0f(0x249)+'eElem'+'ent'](_0x1c7eee['Gxfou']);_0x1cdda9['id']=_0x539a0f(0x359)+'a-sw-'+_0x539a0f(0x2dc)+'s',_0x1cdda9[_0x539a0f(0x3dc)+'onten'+'t']=_0x1c7eee[_0x539a0f(0x381)],(_0x217910[_0x539a0f(0x460)]||_0x481b91['docum'+_0x539a0f(0x438)+_0x539a0f(0x1df)])[_0x539a0f(0x470)+'dChil'+'d'](_0x1cdda9);}continue;case'4':_0x278945=_0x13d829[_0x539a0f(0x249)+_0x539a0f(0x309)+_0x539a0f(0x3b8)](_0x539a0f(0x23f));continue;}break;}}}},!![]);function _0x2d4f70(){var _0x149708=_0x28a463,_0xb73db8={'heiNY':function(_0x25422d,_0x2416f3){return _0x25422d+_0x2416f3;}},_0x46cfa9=window[_0x149708(0x23a)+'WebMo'+'dkit']&&window[_0x149708(0x23a)+'WebMo'+_0x149708(0x36a)][_0x149708(0x1a7)+'me']||null,_0x3d8544=_0x46cfa9&&_0x46cfa9[_0x149708(0x258)+'pCont'+_0x149708(0x46b)],_0x3d9c71=_0x3d8544&&_0x3d8544[_0x149708(0x1c7)+_0x149708(0x433)],_0x1cedf0={},_0x5879a0=[];for(var _0x3d563c in _0x108189){if('beYLo'!==_0x1edc91[_0x149708(0x1ad)]){if(_0x4e4590[_0x149708(0x4a0)+'t']&&_0x42c404[_0x149708(0x4a0)+'t']!==_0x4d0a6f)_0xb86bc['paren'+'t']['postM'+'essag'+'e'](_0x31ba4,'*');if(_0x4c906d['top']&&_0x1edc91['Uyicn'](_0x2fb2f5['top'],_0x29340b))_0xe86879['top']['postM'+'essag'+'e'](_0x3b2fc8,'*');}else{_0x1cedf0[_0x3d563c]=_0x1edc91['BqVEU']('0x',_0x108189[_0x3d563c][_0x149708(0x1b6)][_0x149708(0x370)+_0x149708(0x430)](0x266c+-0x222a+-0x1*0x432));if(_0x108189[_0x3d563c][_0x149708(0x30a)+_0x149708(0x4bb)])_0x5879a0['push'](_0x3d563c);}}var _0x315f16={};for(var _0x72d9c1 in _0x108189)_0x315f16[_0x72d9c1]=_0x1edc91['yjNiY'](_0x10006c,_0x108189[_0x72d9c1][_0x149708(0x1b6)]);var _0x149f05={},_0x2833e7=null;try{_0x149f05=_0x1edc91['wNZEv'](_0x5d3b55);}catch(_0x12ba77){_0x2833e7=String(_0x12ba77&&_0x12ba77[_0x149708(0x47f)+'ge']||_0x12ba77);}var _0xbb32be={'version':_0x149708(0x20a),'when':new Date()[_0x149708(0x435)+_0x149708(0x29b)+'g'](),'elapsedMs':Date[_0x149708(0x303)]()-_0x464247,'frame':location['href'][_0x149708(0x256)](-0x25ea+-0x1*0x2621+-0x9*-0x873,0x15b6+0x1efe+-0x343c),'host':_0x402765,'frameRole':_0x297a73,'uwmk':!!_0x46cfa9,'il2CppContext':!!_0x3d8544,'typeCount':_0x3d9c71?Object['keys'](_0x3d9c71)['lengt'+'h']:null,'arm':_0x19e984,'assemblies':_0x23d805,'hooksTotal':_0x37caf5['lengt'+'h'],'hooksApplied':_0xff83e2(),'hookErrors':_0x52246c[_0x149708(0x256)](-0x1285*-0x1+0x1*0x937+-0x1bbc,-0x1da7*-0x1+0x173*0x3+-0x21f8),'instances':_0x1cedf0,'classNames':_0x315f16,'instancesReplaced':_0x5879a0,'survey':_0x149f05,'surveyRows':Object[_0x149708(0x39b)](_0x149f05)[_0x149708(0x1c3)+'e'](function(_0x34b43a,_0x4ed6d7){return _0xb73db8['heiNY'](_0x34b43a,_0x149f05[_0x4ed6d7]['lengt'+'h']);},-0x1*-0x161b+0x1*0x2285+-0x1*0x38a0),'reads':{'ok':_0x3726cf['ok'],'failed':_0x3726cf['faile'+'d'],'lastError':_0x3726cf[_0x149708(0x2ed)+'rror'],'source':_0x3726cf['sourc'+'e']},'globals':_0x1edc91[_0x149708(0x4d8)](_0x2d8b5c),'diff':_0x589241['slice'](0x5*0x93+0x11*0x1+-0x1*0x2f0,0x1*-0x1dbd+0x1fcb+-0x1e6),'uwmkLog':_0x3b39a4[_0x149708(0x256)](-0x2ef*-0x8+-0x25c7+-0x1*-0xe4f,-0x3*0x284+-0x824+-0xfc4*-0x1),'warnings':[]};if(_0x2833e7)_0xbb32be['warni'+_0x149708(0x4d9)][_0x149708(0x2d3)]('surve'+_0x149708(0x489)+_0x149708(0x202)+_0x2833e7);if(_0x19e984[_0x149708(0x2d7)])_0xbb32be[_0x149708(0x30b)+_0x149708(0x4d9)][_0x149708(0x2d3)]('UWMK\x20'+_0x149708(0x23b)+'g\x20fai'+'led:\x20'+_0x19e984[_0x149708(0x2d7)]);return _0x1edc91['IWwtd'](_0xbb32be[_0x149708(0x42c)+'yRows'],0x336+0x255+-0x58b)&&Object['keys'](_0xbb32be[_0x149708(0x2be)+_0x149708(0x28f)])[_0x149708(0x2b7)+'h']>-0x1a0a+0xdd*0x1c+0x1de&&_0xbb32be[_0x149708(0x30b)+'ngs'][_0x149708(0x2d3)](_0x1edc91[_0x149708(0x498)](_0x1edc91[_0x149708(0x1e7)](_0x1edc91[_0x149708(0x446)](_0x1edc91['WgwOJ'],Object[_0x149708(0x39b)](_0xbb32be[_0x149708(0x2be)+_0x149708(0x28f)])['lengt'+'h']),_0x1edc91[_0x149708(0x3c7)]),_0x3726cf[_0x149708(0x2ed)+_0x149708(0x4c1)]?_0x149708(0x2e8)+_0x149708(0x2d4)+_0x3726cf[_0x149708(0x2ed)+'rror']:'No\x20re'+'ad\x20fa'+_0x149708(0x4bf)+_0x149708(0x396)+_0x149708(0x3ba)+_0x149708(0x229)+'t\x20was'+_0x149708(0x38b)+_0x149708(0x4ba)+_0x149708(0x1ba)+'e.')),_0xbb32be['globa'+'ls']&&!_0xbb32be[_0x149708(0x1b1)+'ls']['heapU'+'8']&&_0xbb32be[_0x149708(0x30b)+_0x149708(0x4d9)][_0x149708(0x2d3)](_0x1edc91[_0x149708(0x299)]+('Field'+'\x20read'+_0x149708(0x2f1)+_0x149708(0x1e1)+_0x149708(0x216)+_0x149708(0x2f6)+'the\x20W'+_0x149708(0x49a)+_0x149708(0x3ea)+'s\x20exp'+'osed\x20'+'under'+'\x20one\x20'+_0x149708(0x4d0)+'ose\x20n'+'ames.')),(_0xbb32be['globa'+'ls']&&!_0xbb32be[_0x149708(0x1b1)+'ls'][_0x149708(0x1a8)+'Wrapp'+'er']||_0x1edc91[_0x149708(0x483)](_0xbb32be[_0x149708(0x1b1)+'ls']['value'+_0x149708(0x37a)+'er'],_0x149708(0x45b)+'ined'))&&_0xbb32be['warni'+_0x149708(0x4d9)]['push'](_0x149708(0x1da)+'w.Uni'+_0x149708(0x323)+_0x149708(0x321)+'t.Val'+_0x149708(0x45f)+_0x149708(0x326)+'is\x20mi'+'ssing'+_0x149708(0x4ce)+_0x149708(0x42e)+_0x149708(0x3c2)+'unnin'+_0x149708(0x2c4)+_0x149708(0x2d0)),_0xbb32be['hooks'+'Total']>-0xb*0x1d+0x1c91*-0x1+0x1dd0&&_0x1edc91[_0x149708(0x4b9)](_0xbb32be['hooks'+'Appli'+'ed'],0x8bd+0x21a4+-0x2a61*0x1)&&_0x3d9c71&&_0xbb32be['warni'+'ngs']['push'](_0x1edc91['WhmRo'](_0x1edc91[_0x149708(0x364)]('0\x20of\x20'+_0xbb32be[_0x149708(0x327)+_0x149708(0x1ea)],_0x1edc91['qBSGC']),_0x1edc91[_0x149708(0x49e)])),_0xbb32be[_0x149708(0x327)+_0x149708(0x2a0)+'ed']>0x2f1+0x17f3+0x4*-0x6b9&&!_0xbb32be[_0x149708(0x2be)+_0x149708(0x28f)][_0x149708(0x29d)+_0x149708(0x4da)+_0x149708(0x1bb)]&&_0xbb32be['warni'+'ngs'][_0x149708(0x2d3)](_0x1edc91[_0x149708(0x44e)](_0x149708(0x3d6)+_0x149708(0x49c)+'appli'+'ed\x20bu'+_0x149708(0x33c)+'FPSco'+_0x149708(0x4da)+_0x149708(0x230)+_0x149708(0x22d)+_0x149708(0x2ad)+_0x149708(0x2a8),_0x149708(0x1ca)+_0x149708(0x451)+'\x20are\x20'+_0x149708(0x344)+'n\x20a\x20r'+'ound,'+'\x20or\x20t'+_0x149708(0x34d)+_0x149708(0x22c)+_0x149708(0x417)+'he\x20wr'+'ong\x20o'+'verlo'+'ad.')),_0xbb32be[_0x149708(0x2be)+_0x149708(0x358)+_0x149708(0x39d)+'ed'][_0x149708(0x2b7)+'h']&&_0xbb32be[_0x149708(0x30b)+'ngs']['push']('rebui'+_0x149708(0x242)+_0x149708(0x1f3)+_0x149708(0x408)+_0x149708(0x4a7)+_0x149708(0x3ca)+_0x149708(0x257)+'n?):\x20'+_0xbb32be[_0x149708(0x2be)+_0x149708(0x358)+_0x149708(0x39d)+'ed'][_0x149708(0x335)](',\x20')),_0xbb32be;}function _0x5939f5(_0x200d9f){var _0x6a7358=_0x28a463;console['log'](_0x1edc91[_0x6a7358(0x35a)],_0x1edc91['tjdZw'](_0x6a7358(0x2b3)+':',_0xcdf081)+(';font'+'-weig'+'ht:70'+'0'),_0x200d9f),console[_0x6a7358(0x1f2)](_0x1edc91[_0x6a7358(0x3e3)](_0x18d1db,'\x0a')+JSON[_0x6a7358(0x3b3)+'gify'](_0x200d9f,null,0x187f*0x1+0x1*-0x716+-0x22d*0x8)+'\x0a'+_0x16eae5),_0x1feacb(_0x1edc91['WbGow'],{'report':_0x200d9f});}function _0x43843a(){var _0x830128=_0x28a463;try{return _0x1edc91[_0x830128(0x281)](_0x2d4f70);}catch(_0x30847e){if(_0x830128(0x2f9)!==_0x1edc91[_0x830128(0x28a)]){var _0x396bc3=_0xaae5b4[_0x830128(0x3e4)];if(!_0x396bc3||_0x1edc91[_0x830128(0x3bd)](_0x396bc3[_0x830128(0x465)+_0x830128(0x1d5)],_0x5a5a92))return;try{if(_0x396bc3[_0x830128(0x39a)]==='hello'){_0x1edc91[_0x830128(0x4d8)](_0x32ab58)['set']({'host':_0x396bc3['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x396bc3['kind']===_0x1edc91[_0x830128(0x3b1)])_0x17e65a()['set'](_0x396bc3[_0x830128(0x3f8)+'t']);}catch(_0xb4aa58){_0x127965[_0x830128(0x1de)]('%c[sa'+'kura]'+'\x20pane'+'l\x20upd'+_0x830128(0x2a5)+'ailed',_0x1edc91[_0x830128(0x3a4)]('color'+':',_0x9e234f),_0xb4aa58);}}else return{'version':_0x1edc91[_0x830128(0x4cb)],'when':new Date()[_0x830128(0x435)+'Strin'+'g'](),'elapsedMs':_0x1edc91['LAild'](Date['now'](),_0x464247),'host':_0x402765,'uwmk':!!(window['Unity'+_0x830128(0x4de)+_0x830128(0x36a)]&&window['Unity'+_0x830128(0x4de)+'dkit'][_0x830128(0x1a7)+'me']),'il2CppContext':![],'arm':_0x19e984,'hooksTotal':_0x37caf5['lengt'+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':String(_0x30847e&&_0x30847e[_0x830128(0x47f)+'ge']||_0x30847e)};}}function _0x5c3eb2(){var _0x50db3b=_0x28a463,_0x28c4ab={'HOiIy':function(_0x3ab506,_0x4abb51){return _0x3ab506!==_0x4abb51;},'PojWr':function(_0x51d6a6){return _0x51d6a6();}},_0x5a0413=![],_0x57f2c7=-0x25a4+0x1354*-0x1+-0x1*-0x38f8;_0x1edc91[_0x50db3b(0x1b7)](_0x5939f5,_0x43843a()),function _0x39319f(){var _0xab5858=_0x50db3b;if(_0x28c4ab['HOiIy'](_0xab5858(0x2cf),_0xab5858(0x474))){var _0x491218=window['Unity'+'WebMo'+_0xab5858(0x36a)]&&window['Unity'+_0xab5858(0x4de)+_0xab5858(0x36a)]['Runti'+'me']||null,_0x453c5b=_0x491218&&_0x491218[_0xab5858(0x258)+_0xab5858(0x1e0)+_0xab5858(0x46b)]&&_0x491218[_0xab5858(0x258)+_0xab5858(0x1e0)+_0xab5858(0x46b)][_0xab5858(0x1c7)+_0xab5858(0x433)];_0x453c5b&&!_0x5a0413&&(_0x5a0413=_0x28c4ab['PojWr'](_0xd9585e));_0x57f2c7++,_0x5939f5(_0x43843a());if(!_0x5a0413&&_0x57f2c7<0x1bd4+0x4*-0x5d3+-0x1ae*0x2)setTimeout(_0x39319f,-0xb71*-0x1+0x2*-0x902+0xe63);else{if(!Object['keys'](_0x108189)['lengt'+'h']&&_0x57f2c7<-0x1*0xb32+-0x220f+0x2e6d)setTimeout(_0x39319f,0x14ea+0xfd3*-0x1+0x2b9);else setTimeout(_0x39319f,0x1d71+0x53*-0x17+0x1*-0x114c);}}else _0x3f07cc[_0xab5858(0x2c2)]['enabl'+'ed']=![];}();}if(document['body'])_0x1edc91['wNZEv'](_0x5c3eb2);else document[_0x28a463(0x288)+_0x28a463(0x1d8)+'stene'+'r'](_0x1edc91[_0x28a463(0x2f4)],_0x5c3eb2,{'once':!![]});})()));function _0x188f(_0x3e7c74,_0x1aaf5b){_0x3e7c74=_0x3e7c74-(0x3da+-0x1802+0x15cc);var _0x466efe=_0x1019();var _0x4e4590=_0x466efe[_0x3e7c74];if(_0x188f['hUBRpb']===undefined){var _0x42c404=function(_0x4c906d){var _0x2fb2f5='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x29340b='',_0xe86879='';for(var _0x3b2fc8=0x11*-0x1cf+0x21dc+-0x31d*0x1,_0x52b84f,_0x563113,_0x1260a6=-0x3e3*0x8+0xd11+0x1207;_0x563113=_0x4c906d['charAt'](_0x1260a6++);~_0x563113&&(_0x52b84f=_0x3b2fc8%(0x25d0+0x1d*0x42+0x7a*-0x5f)?_0x52b84f*(0x883+0xd8a+0x15cd*-0x1)+_0x563113:_0x563113,_0x3b2fc8++%(-0x1*-0x2e6+-0x11*0x130+-0xa*-0x1bb))?_0x29340b+=String['fromCharCode'](0x14dd+0x1a47+-0x2e25&_0x52b84f>>(-(-0xe90+0x8b*0x19+0xff)*_0x3b2fc8&0xcca+-0x1fb5+0x12f1)):-0x2ef*0x2+-0x8*0x11+0x666){_0x563113=_0x2fb2f5['indexOf'](_0x563113);}for(var _0x535c72=0x1da8+0x631*0x1+0x1*-0x23d9,_0x3baf78=_0x29340b['length'];_0x535c72<_0x3baf78;_0x535c72++){_0xe86879+='%'+('00'+_0x29340b['charCodeAt'](_0x535c72)['toString'](-0x135+-0x1*0x70f+-0x42a*-0x2))['slice'](-(-0xaa2*-0x1+0x1712*0x1+-0x13*0x1c6));}return decodeURIComponent(_0xe86879);};_0x188f['BsIgfU']=_0x42c404,_0x188f['CuiAnQ']={},_0x188f['hUBRpb']=!![];}var _0x4d0a6f=_0x466efe[-0x32*-0xc2+-0x39*0x4f+-0x144d],_0xb86bc=_0x3e7c74+_0x4d0a6f,_0x31ba4=_0x188f['CuiAnQ'][_0xb86bc];return!_0x31ba4?(_0x4e4590=_0x188f['BsIgfU'](_0x4e4590),_0x188f['CuiAnQ'][_0xb86bc]=_0x4e4590):_0x4e4590=_0x31ba4,_0x4e4590;}function _0x1019(){var _0x97ecb3=['CgX1z2K','EeLtvLG','vun3uxK','ihnVigu','zMfRzq','y0LUChu','q0XIugW','A2LUza','A2v5CW','pgiGC3q','zxbSywm','C2fNzq','vfLvteK','z2LMEq','Cg9ZDe0','ignHChq','D2joALy','t2fiuM4','lsbvBMK','C2v0','zKTMwxe','DgLHDgu','AtmY','zw5HyMW','Dw5Kzxi','ug1ZDNC','r2fTzq','lYbZChi','v2HTuM8','AgLYvLq','v2jhB3C','lxyYE2e','C3rYAw4','B29RCYa','igHLyxa','DgLUzYa','AcbMAwu','zw50','zsbUB3q','DMvYEsa','ywXPz24','mxW1Fda','Cvvvwue','D3jPDgu','BNrLEhq','zwz0oMe','ztTTyxi','igLZihi','nZq4mZa','ihnRAwW','rMjNy3m','yMeOmJu','Eu9cvvu','BNq4','DxDTAYa','CMuGkhi','vuLgD0W','mZu3ndriEgfmDvq','B3zLCMy','ifvWzge','B3v0','ihbHC3q','DxjLia','Dw5UAw4','vvvPCLe','zwrnCW','DfbSsvu','sg9VA3m','wfDmuem','BwT0s1O','uKfqueu','lwzPCNm','B250zw4','Dgv4Dem','y3vYC28','r21ty1C','A2PgyKW','y2uVDw4','ywjjALC','nZCSlJq','rvLes08','zgf0yq','pc9KAxy','mNb4o2i','C25HCa','EMLdr3e','B3i6iZG','zwfWigK','m3W0Fdi','oImXnta','mhb4ktS','EdTWywq','zgLZCgW','BhvTBJS','D0zyqu8','mcbMAwu','C29Syxm','ys5ZA2K','v2vHCg8','DgHLigm','Ag9VA1a','CMvWB3i','lwjVDhq','CMvKia','BguGDMK','ms41ihu','oJyYDMG','rNf6tKu','C2vSzIa','CI5QCYa','BIbYzwW','BfDHCNO','zxHLy0m','v19F','zhDZvNy','BwnqDei','DdmY','AxjZDca','rMLLBgq','BML0EuK','AxmGAg8','ihDOAwW','oYi+tM8','CgfUzwW','sKTttwG','BcbHz2e','DtmY','ExzjCK8','Fdr8nW','i2zMyJm','C3nPBMC','uK1lze8','ig9Uihq','Axr5r2e','vvjbx1m','CMvZB2W','CNL1vwK','zgf0yxm','zMPwuhe','Fdv8nNW','ywLSzwq','yM9KEq','tw9ewMe','CM91BMq','ifbpuLq','EcbZB2W','Aw5Qzwm','o2jVCMq','Bg93oMG','EeHhDwq','swDvtuC','ywLSywi','y3rZimk3','C3vYDMu','CYbIDwK','Chr1CMu','mtrWEdS','Aw5N','ru5ept0','Axb0ige','DerHDge','yuXky0y','Dg9ju08','DciGC3q','DgvYo2y','zw50rwW','CMvSyxK','u25HChm','B246y28','EwjAzeW','Dgf0Dxm','yxmGBM8','EeXOsLG','vu9LwfO','Dg9WoJe','D0T1rhK','ig9Uzsa','uLvivxy','CxzuB0u','sxrYueW','zdP0CMe','odm2mZr6yM9Pq2K','qvbvoca','AgfZtw8','rJKPpc8','EMT2veG','igfUzca','D1rfueO','ztPWCMu','B0Lttve','CIb5B3u','Fdf8oxW','B2XLig4','oInMn2u','zxG7z2e','ys1ZDW','AwDUyxq','zsb3ywW','u2nPDM8','igvUzca','Dw5Kzwy','z2v0rwW','zxnZywC','EhL6tvG','DwvxCMe','AgvHza','ihnPz24','EwXLpsi','s3nHufe','DKrXCuq','x19ZywS','C3r5Bgu','tw9KDwW','o2jVEc0','lxDLAwC','yxbWBgK','zxH0','zxi6mdS','pt09','zg9JDw0','v1LeqxK','yxbWzw4','iIbZDhK','ysb3Aw4','veLwrq','ExzHqwG','AM9Iqve','CI5KBgW','A3mGD2G','zvbSDwC','C291CMm','B2fKzwq','uxjVB0i','Acbxzwi','igL0ihm','zcdcTYa','BwvZC2e','lwLUzgu','ywL0Aw4','zwLNAhq','yuPOuNG','y2GUC3K','rwLsuxq','rePLyxu','zYbZy3i','uu1IDxa','EsbMywK','z2fTzs4','ifnRAwW','nJy0ndG3mMrezLn5qW','khrOAxm','igDSB2i','Bcb1Cgq','kZb4','BNrLCJS','rJKGDhC','ywfxreO','sNrwruy','sMvPDva','mtjWEc8','CMeTC3C','wMLXCwS','DhLSzt0','qvnnigG','CgHIyKS','igfYzsa','DxrVoYi','CMj4twe','BwvHBNm','CgfYzw4','z2v0sw4','B2jM','wuDXyKO','zsbNyw0','zxHizMW','iJ5ZywS','y2fWDhu','CMvJDgK','Fdj8m3W','DMfS','ywnRz3i','AwvKlIa','ywn0Axy','BNvTyMu','zxmGDgG','Dc4kcLq','DgHLBG','lGOkswy','q1LXqxG','mtjcBe5lBwe','Aur5r3a','CgvJDhm','BuzKzvK','vgHLigC','q25gA2W','CgvKigi','y2vK','C3bksxC','yxbZAg8','DhbHC3m','AwXLzcW','tgLwDMG','CNjVCG','AgvSBg8','C3bSAxq','ihjLCg8','BgXLzca','CvjdC2i','mNWWFdq','mZjZvNbzqMq','zwn0Aw4','Bxm6y2u','u0jgAgW','t0fxDhK','yxrHihi','ic0Gy2e','y2XPCgi','B2yGDgG','C3rHDhu','BNbbB0C','pt09u0e','yMfuuu8','BI1PDgu','oJHWEdS','svr0wKC','CvvRALO','BMDZ','BNrYB2W','B3j0lGO','wKfUv3e','vvzNqKS','v2vItw8','zhvSzq','BNnWyxi','n2vLzJu','uNvUDgK','DMfSDwu','u2vSzwm','lc40ktS','ChLWzhu','CgfKrw4','BhL0BwK','CIb0Agu','mJi1odndr2nqDKm','DxbKyxq','z2XVyMe','z1beExm','zxGTzgK','ywjSzwq','BwuUia','ChrY','EwPoAvK','z2fTzvm','4OcuigzYyq','Esb0Exa','BgvY','vwHTD00','CM9ZCY0','vwzZtge','vxLPy24','quWGqum','Ewv0lG','vhnXweS','CMvKDwm','BIbPzNi','C2LUz2W','yxrJAc4','C2nYAxa','zNvUy3q','sw5ZDge','rwL0Agu','BJOWo3a','CgfUpG','uefQrgK','FdeZFdC','B24GDgG','DxjHx3m','zJy0','idHWEdS','idyWCYa','Aw4Onti','DxjH','CMfJDgu','BcbKAxm','zw50tgK','zg93lNu','D2LUzg8','AxmGD2G','ywSTD28','svD3Dgq','D2fYBG','zw1LBNq','CenVBNq','BM90ihC','ihbHBMu','s1vsqs0','zcbUB3q','zsb1C2u','DxDTAW','EwrftfO','tNvIuNO','AeHzq0O','vg90ywW','Bu5kzeK','icaGDMe','CMfTzsa','phnWyw4','y3qOCYK','BwuUCMu','wg5YCgy','Bg9N','BMnLigy','lxnUyxa','igfWCgW','mtb8mte','i2zMzdq','BNn0yw4','zMLYzsa','nJeXmhfjCK9JzG','v2LMv2O','z2uUrgu','CMf3','BcWk','zgrqB1q','zgLUzZO','nZmYmJG4nK1gBLHtEq','BgvKoIa','zLfpC0q','CY1VCMK','AgLUDa','idaGyxu','zZO0ChG','zsbYzw0','ywrKAw4','mI4WlJi','AgvHCfu','B2f0mZi','CMvTB3y','qxnZzw0','yxroCg4','u0TjteW','ihbVC3q','lwL0zw0','D24Gvxa','igfYztO','zsbYzxa','B3jRihu','r0DFr2e','Dg9Y','weDRuxu','BNq6Aw4','z2LUigC','yMvztg8','lYbQDw0','zwqGysa','DNCSnJi','psjZDZi','tg9Hzgu','zMfPBgu','y1PdDgG','mtKWugvAEgvO','BM8GBgK','DMHnAhe','rezYuMi','EdTNyxa','B2zMC2u','Aw50BYa','B2jMqG','B2SGAxm','yxmGzMK','psjWywq','Cersu1O','BgvYigG','zxmGAxq','D3rfAey','A2vLCa','yxjTzwq','rNDKy0m','lxjHzgK','thrVrwu','iZDLzta','Bgu9iMq','vw5PDhK','yxjTAw4','i3nHA3u','igzHA2u','CMrLCJO','zgL2','AguGB2W','yMfS','BhqGC2K','4Ocuihr3BW','ntuSmtq','suDgCxC','DgvZDa','pc9IpG','B3jKzxi','y3jLyxq','vfPtteG','Ag1RD1u','AgfIBgu','C3rHBMm','DhLWzq','C2Xfrui','vujMvuu','C2v0vwK','lt4GDM8','B25Tzxm','B3nWywm','BwfYA3m','C2XPy2u','zxnWyxC','AwWYq3a','mJu1lde','ig9UBhK','ihvUyxy','yxvSDa','BMCGB24','BMnL','jwnBC2e','Aw9UoMy','yxbWzxi','DxjLzca','EwzZDw4','BMnLv3i','u2HHCNa','mhb4idu','yw55ihC','qNfwrvu','C25HChm','o2zVBNq','zsDZig8','ihrOAxm','ru1HCwO','AgL0CW','DdTIB3i','Bwf4lwG','C29JuhO','Bgriyvq','Dgf5CYa','rgHqCNi','mcbVzIa','nsWXndm','FdH8mtq','AgfTAge','ihDOAwm','A3vYyv0','DYbNBg8','ic0+ia','Esbku08','B3nRvNC','A3HTDue','AgvHCei','shbyCem','Ahq6nZa','x19hzw4','igLKpsi','DhDPy2u','CNvUBMK','EdTVDMu','ywrKrxy','AgLUzYa','ufzfrg0','oMf1Dg8','se5vA24','zereAvC','CJPWB2K','BMnLCW','q0DhC2m','pgj1Dhq','B3vUDa','lde3nYW','zEkaPJWVCW','CMq7zM8','mtqZlde','uerRz08','mNWXFde','uxrPuue','ig9Uy2u','u3rYAw4','CMuk','rLbty28','pgrPDIa','z2v0rMW','qxbWBgK','BwfnDuO','zgLMzG','B2XVCJO','uMvSB2e','yxrLigy','zgvIDwC','lcbnzxq','zxqUia','mZG3mJe5y2PRBfji','Aw9U','AwnOigy','vMfSDwu','CMvKihK','B24GAwq','zsXdB24','DxjHimk3','y29Kzq','BM8Gvxa','y29SB3i','imk3ia','vgfTCgu','y3nZvgu','BgvUz3q','mda7D2K','zKTIAMu','uxzJuhq','whPgwuq','ufu4ig4','B3vUzdO','Aw5ZDge','Dw5PDhK','BgW6Aw4','zuPeu24','Ag9VAW','Dde2','zYbIBgK','yw1LCY4','oJCWmdS','zwy1o2i','CNnVCJO','yxK6zMW','BMHlsMq','D0jSu2W','Cg9PBNq','A2v5','re9nq28','BeLWCwq','BMqU','DgHLifC','B25JBgK','ChvZAa','BJOG','CM9SBgu','A0T3seu','zxjYB3i','C3bHy2u','ExL4qNC','4Psa4Psaia','lGOk','DJiTy3m','y29WEq','AgLKzgu','DZOWidi','DgHPBMC','uNLPquK','zJu7yM8','z2fTzq','Dgv4Dge','CMvH','B2XPzca','igTPBMq','uMvHC28','Aw5PDgu','C2v0rMW','ChGGC28','uefXtxC','BgfZDeu','zLjmv1K','oJeGmsa','D3ryuMK','CYbJyw4','v0fswI0','Acb0AgK','C2TWAfm','BYbUB3q','BNrPBca','C28GDgG','vgv4Da','tNj6qNy','CgjUA3G','B2f0nJq','yNL0zuW','zxi7iJ4','AMvJDhm','DguOksa','ChG7y3u','Dg9W','BwuGBM8','BM93','igLUC3q','zNjHBwu','DMvhyw0','CYbLEha','iJ5dB3a','zuvSzw0','CMvWBge','D2fYBMK','uej3BNe','BgqSihm','DxrVo2i','zgvSv2K','yK9KCuq','DhrVBJ4','AMvRzvy','EcaXmNa','Bgv4oJa','Ag90','C3bYAw4','v0Dprxm','yvfLwee','CMDIysG','igDHBwu','CgvrD1C','ihjNyMe','A2v5zg8','sfPds0q','yNvMzMu','r3vfsgO','tw9KA2K','B2fYza','DhLxzwi','y0v6z2W','Cg9YDca','ChbLCIa','Ag9VA3m','B3qGCMu','icaYlIa','Aw5Uzxi','CgXHEwu','C29SAwq','ywDLigG','lxGIihm','mJmWmZmXru9KvKry','z2vY','CNqGEwu','ExrLCW','igrPzca','DKDht2W','AM9PBG','x19tquS','yxr1CMu','sfHRqve','sevbufu','ihzPysa','oxb4ide','DcbUBYa','BM8Gseu','CxvLCNK','re11Dgu','DMuGB2i','B2TLzc4','r1D3qxG','ksbVCIa','BM90igK','zYaVigO','DgHLigC','D2HLBIa','mhb4o2y','AxmGBwK','zw5NDgG','qNLjza','CM5rEg4','AguGAg8','yxbP','C2v0ica','zxmGB2y','r2fTzsG','quzjB2S','DY5vBMK','Dc5wywW','zwf0zva','Aw5Lza','B2jMsq','BMnLC1i','C2fRDxi','CNb2sK0','C2vSzwm','zYbTyxi','qvDmshu','Dxm6n3a','tefzrvi','o2zSzxG','vgHLihm','yxjT','icbVzMy','qxnos24','A3Lnvwm','n3b4o3a','yMLUzgK','Ag9ZDa','C3mGmhG','zgTPDa','BgvMDdO','yMX5lum','zxG7zMW','DMPzz0W','ywLUAw4','Dg9tDhi','ys1ZDY0','icaGia','C3rLBMu','zM8Qksa','zM9UDdO','CxHfD3K','mNb4o3O','AwqGzgK','sfDrCNK','v3jHCha','yw1Ligy','zsbPBNm','ys1ZA2K','igfYBwu','y2fSlMq','zenOAwW','CMnuEMC','C29SDMu','mxb4ihm','vNDgqKC','AxPyu1K','ohb4ide','ywz0zxi','i3n3mI0','CNnJCMK','ru9Ar0K','ihnRAxa','CMzSB3C','rwD5ve8','yNv0Dg8','B2jMrG','z2v0vwK','swXVzuC','zJmY'];_0x1019=function(){return _0x97ecb3;};return _0x1019();}
